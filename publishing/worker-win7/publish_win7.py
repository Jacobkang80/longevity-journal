"""Win7 + Chrome109 publisher. No Node, pip, winget, or GitHub CLI required."""
import base64
import ctypes
from ctypes import wintypes
import getpass
import json
import os
from pathlib import Path
import re
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import webbrowser
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
from win7_core import BLOG, REPO, BRANCH, empty_state, hydrate, plan, post_id, category_id, marker, revision_marker, publication_html

DATA = Path(os.environ.get('LOCALAPPDATA', str(ROOT))) / 'LongevityTistoryPublisher'
DATA.mkdir(parents=True, exist_ok=True)
STATE_FILE = DATA / 'state.json'
TOKEN_FILE = DATA / 'github-token.dpapi'
CACHE = {}
STATE = json.loads(STATE_FILE.read_text(encoding='utf-8')) if STATE_FILE.is_file() else empty_state()

def now():
    return datetime.now(timezone.utc).isoformat()

def save():
    tmp = STATE_FILE.with_suffix('.tmp')
    tmp.write_text(json.dumps(STATE, ensure_ascii=False, indent=2), encoding='utf-8')
    os.replace(str(tmp), str(STATE_FILE))

class Blob(ctypes.Structure):
    _fields_ = [('size', wintypes.DWORD), ('data', ctypes.POINTER(ctypes.c_ubyte))]

def crypt(data, encrypt):
    if os.name != 'nt':
        raise RuntimeError('Windows DPAPI is required for token storage')
    buf = ctypes.create_string_buffer(data)
    source = Blob(len(data), ctypes.cast(buf, ctypes.POINTER(ctypes.c_ubyte)))
    out = Blob()
    api = ctypes.windll.crypt32.CryptProtectData if encrypt else ctypes.windll.crypt32.CryptUnprotectData
    api.argtypes = [ctypes.POINTER(Blob), ctypes.c_void_p, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_void_p, wintypes.DWORD, ctypes.POINTER(Blob)]
    api.restype = wintypes.BOOL
    if not api(ctypes.byref(source), None, None, None, None, 1, ctypes.byref(out)):
        raise RuntimeError('Windows secure token storage failed')
    try:
        return ctypes.string_at(out.data, out.size)
    finally:
        ctypes.windll.kernel32.LocalFree.argtypes = [ctypes.c_void_p]
        ctypes.windll.kernel32.LocalFree.restype = ctypes.c_void_p
        ctypes.windll.kernel32.LocalFree(ctypes.cast(out.data, ctypes.c_void_p))

def token():
    return crypt(TOKEN_FILE.read_bytes(), False).decode('utf-8') if TOKEN_FILE.is_file() else None

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

def github(route, method='GET', body=None, auth=None):
    headers = {'User-Agent': 'Longevity-Win7-Publisher', 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'}
    auth = auth if auth is not None else token()
    if auth:
        headers['Authorization'] = 'Bearer ' + auth
    data = json.dumps(body).encode('utf-8') if body is not None else None
    if data is not None:
        headers['Content-Type'] = 'application/json'
    req = urllib.request.Request('https://api.github.com/' + route, data=data, headers=headers, method=method)
    try:
        with urllib.request.build_opener(NoRedirect()).open(req, timeout=30) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as exc:
        raise RuntimeError('GitHub HTTP {}. Check token permissions, expiry, or rate limit.'.format(exc.code))
    except urllib.error.URLError:
        raise RuntimeError('GitHub HTTPS connection failed. No certificate checks were disabled.')

def remote_file(file):
    return github('repos/{}/contents/{}?ref={}'.format(REPO, file, BRANCH))

def remote_json(file):
    return json.loads(base64.b64decode(remote_file(file)['content']).decode('utf-8'))

def queue():
    return hydrate(remote_json('publishing/queue.json'), remote_json, CACHE)

def sync(optional=False):
    if not token():
        if optional:
            return
        raise RuntimeError('Run 02_GITHUB_CONNECT.cmd before publishing')
    report = dict(schema=1, blog=BLOG, updated_at=now(), baseline_ids=STATE['baseline'], gatePassed=STATE['gatePassed'], managed=STATE['managed'], jobs=STATE['jobs'])
    path = 'publishing/results/windows.json'
    for attempt in range(3):
        existing = None
        try:
            existing = remote_file(path)
        except RuntimeError as exc:
            if 'HTTP 404.' not in str(exc):
                raise
        payload = dict(message='Record Win7 Tistory publishing result', branch=BRANCH, content=base64.b64encode(json.dumps(report, ensure_ascii=False, indent=2).encode('utf-8')).decode('ascii'))
        if existing:
            payload['sha'] = existing['sha']
        try:
            github('repos/{}/contents/{}'.format(REPO, path), 'PUT', payload)
            return
        except RuntimeError as exc:
            if 'HTTP 409.' not in str(exc) or attempt == 2:
                raise RuntimeError('Receipt upload failed. Local result is retained; do not re-publish.')

def restore():
    if STATE['baselineReady'] or not token():
        return
    try:
        report = remote_json('publishing/results/windows.json')
    except RuntimeError as exc:
        if 'HTTP 404.' in str(exc):
            return
        raise
    if report.get('schema') != 1 or report.get('blog') != BLOG or not isinstance(report.get('baseline_ids'), list):
        raise RuntimeError('Invalid remote publishing registry')
    baseline = list(map(str, report['baseline_ids']))
    for managed in report['managed'].values():
        if post_id(managed['url']) != str(managed['postId']) or str(managed['postId']) in baseline:
            raise RuntimeError('Unsafe managed-post registry')
    STATE.update(baseline=baseline, baselineReady=True, gatePassed=report.get('gatePassed') is True, managed=report['managed'], jobs=report['jobs'])
    save()

class Browser:
    def __init__(self):
        candidates = [Path(os.environ[k]) / 'Google/Chrome/Application/chrome.exe' for k in ('PROGRAMFILES', 'PROGRAMFILES(X86)', 'LOCALAPPDATA') if os.environ.get(k)]
        binary = next((p for p in candidates if p.is_file()), None)
        if not binary:
            raise RuntimeError('Google Chrome 109 was not found')
        with socket.socket() as sock:
            sock.bind(('127.0.0.1', 0))
            port = sock.getsockname()[1]
        self.base = 'http://127.0.0.1:{}'.format(port)
        self.opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
        self.session = None
        self.proc = subprocess.Popen([str(ROOT / 'driver/chromedriver.exe'), '--port={}'.format(port), '--allowed-ips=127.0.0.1'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0))
        try:
            for attempt in range(50):
                if self.proc.poll() is not None:
                    raise RuntimeError('ChromeDriver exited')
                try:
                    self.call('/status')
                    break
                except urllib.error.URLError:
                    time.sleep(0.2)
            else:
                raise RuntimeError('ChromeDriver startup timeout')
            profile = Path(os.environ.get('LOCALAPPDATA', str(ROOT))) / 'LongevityWin7Compatibility/ChromeProfile'
            data = self.call('/session', 'POST', {'capabilities': {'alwaysMatch': {'browserName': 'chrome', 'goog:chromeOptions': {'binary': str(binary), 'args': ['--user-data-dir=' + str(profile), '--no-first-run', '--no-default-browser-check']}}}})
            self.session = data['sessionId']
            if data.get('capabilities', {}).get('browserVersion', '').split('.')[0] != '109':
                raise RuntimeError('This package requires Chrome 109')
            self.session_call('/timeouts', 'POST', {'script': 50000, 'pageLoad': 45000, 'implicit': 0})
        except Exception:
            self.close()
            raise

    def call(self, route, method='GET', payload=None):
        data = json.dumps(payload).encode('utf-8') if payload is not None else None
        req = urllib.request.Request(self.base + route, data=data, method=method, headers={'Content-Type': 'application/json'})
        try:
            with self.opener.open(req, timeout=60) as response:
                obj = json.loads(response.read().decode('utf-8'))
        except urllib.error.HTTPError as exc:
            try:
                obj = json.loads(exc.read().decode('utf-8'))
            except Exception:
                raise RuntimeError('Local ChromeDriver HTTP {}'.format(exc.code))
        value = obj.get('value')
        if isinstance(value, dict) and value.get('error'):
            raise RuntimeError('ChromeDriver: ' + value.get('message', value['error']).split('Stacktrace:')[0][:400])
        return value

    def session_call(self, route, method='GET', payload=None):
        return self.call('/session/' + self.session + route, method, payload)

    def go(self, url):
        self.session_call('/url', 'POST', {'url': url})

    def api(self, route, method='GET', payload=None, text=False):
        if not route.startswith('/') or route.startswith('//'):
            raise RuntimeError('Invalid Tistory route')
        script = '''var route=arguments[0], method=arguments[1], body=arguments[2], done=arguments[3];
if(location.origin!=="https://myepic2.tistory.com"){done({error:"Tistory login required"});return;}
var ac=new AbortController(),timer=setTimeout(function(){ac.abort();},45000);
var opts={method:method,credentials:"same-origin",signal:ac.signal,headers:{Accept:"application/json"}};
if(body!==null){opts.headers["Content-Type"]="application/json";opts.body=JSON.stringify(body);}
fetch(route,opts).then(function(r){return r.text().then(function(t){var data=null;try{data=JSON.parse(t);}catch(e){}return {status:r.status,data:data,text:t};});}).then(function(v){clearTimeout(timer);done(v);}).catch(function(){clearTimeout(timer);done({error:"Tistory network request not confirmed"});});'''
        result = self.session_call('/execute/async', 'POST', {'script': script, 'args': [route, method, payload]})
        if result.get('error') or result.get('status') != 200:
            raise RuntimeError(result.get('error') or 'Tistory HTTP {}. Login, challenge or request rejection; stopped.'.format(result.get('status')))
        if text:
            return result['text']
        if not isinstance(result.get('data'), (dict, list)):
            raise RuntimeError('Tistory did not return JSON. Login may have expired.')
        return result['data']

    def close(self):
        if self.session:
            try:
                self.session_call('', 'DELETE')
            except Exception:
                pass
            self.session = None
        if self.proc.poll() is None:
            self.proc.terminate()
            try:
                self.proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.proc.kill()

def posts(browser):
    result = []
    for page in range(1, 1001):
        data = browser.api('/manage/posts.json?category=-3&page={}&searchKeyword=&searchType=title&visibility=all'.format(page))
        items = data.get('items', (data.get('data') or {}).get('items'))
        if not isinstance(items, list):
            raise RuntimeError('Tistory post-list structure changed')
        if not items:
            return result
        result.extend(items)
        if len(set(str(p['id']) for p in result)) != len(result):
            raise RuntimeError('Repeated post-list page; stopped')
    raise RuntimeError('Post-list limit exceeded')

def initialize(browser):
    data = browser.api('/manage/category.json')
    category = category_id(data.get('categories', (data.get('data') or {}).get('categories', [])))
    if not STATE['baselineReady']:
        STATE['baseline'] = [str(p['id']) for p in posts(browser)]
        STATE['baselineReady'] = True
        save()
        sync(optional=True)
    print('HEALTH verified. {} original posts protected.'.format(len(STATE['baseline'])), flush=True)
    return category

def find_managed(browser, job):
    found = []
    for p in posts(browser):
        pid = str(p['id'])
        if p['title'] == job['title'] and pid not in STATE['baseline']:
            if marker(job) in browser.api('/' + pid, text=True):
                found.append(pid)
    if len(found) > 1:
        raise RuntimeError('Multiple managed-post matches; review required')
    return found[0] if found else None

def verify(browser, pid, job, category):
    p = next((p for p in posts(browser) if str(p['id']) == str(pid)), None)
    if not p or p['title'] != job['title'] or p.get('visibility') != 'PUBLIC' or int(p.get('categoryId', -1)) != category:
        raise RuntimeError('Title, public status or HEALTH category was not verified')
    url = BLOG + '/' + str(pid)
    post_id(url)
    # Anonymous request: no Chrome cookies or GitHub token is attached.
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Longevity-Public-Check'}), timeout=30) as response:
        html = response.read().decode('utf-8')
    if marker(job) not in html or revision_marker(job) not in html:
        raise RuntimeError('Anonymous access or current body revision not verified')
    return url

def publish(browser, job, category):
    action = plan(job, STATE)
    if action == 'skip':
        return
    if action == 'create' and find_managed(browser, job):
        raise RuntimeError('Matching managed post exists; run reconciliation')
    if action == 'update' and marker(job) not in browser.api('/' + str(job['expected_post_id']), text=True):
        raise RuntimeError('Managed-post marker missing; refusing update')
    pid = str(job['expected_post_id']) if action == 'update' else '0'
    record = dict(slug=job['slug'], revision=job['revision'], sha256=job['sha256'], operation=job['operation'], title=job['title'], status='submitting', started_at=now())
    STATE['jobs'][job['id']] = record
    save()
    sync()
    payload = dict(id=pid, title=job['title'], content=publication_html(job), slogan='', visibility=20, category=category, tag=','.join(job['tags']), published=1, password='', uselessMarginForEntry=1, cclCommercial=0, cclDerive=0, type='post', attachments=[], recaptchaValue='', draftSequence=None, totalWritingTimeMs=0)
    try:
        route = '/manage/post.json' if action == 'create' else '/manage/post/' + pid + '.json'
        data = browser.api(route, 'POST' if action == 'create' else 'PUT', payload)
        url = data.get('entryUrl', (data.get('data') or {}).get('entryUrl'))
        new_id = post_id(url)
        if new_id in STATE['baseline'] or (action == 'update' and new_id != pid):
            raise RuntimeError('Unexpected post ID; original posts are protected')
        record['url'] = url
        save()
        url = verify(browser, new_id, job, category)
        STATE['managed'][job['slug']] = dict(postId=new_id, url=url, revision=job['revision'], sha256=job['sha256'])
        record.update(status='succeeded', url=url, category='2. HEALTH', visibility='PUBLIC', finished_at=now())
        save()
    except Exception as exc:
        record.update(status='needs_reconciliation', error=str(exc))
        save()
        try:
            sync()
        except Exception:
            pass
        raise RuntimeError('Publication not confirmed. Do not submit again. Run 05_RECONCILE.cmd. ' + str(exc))
    sync()
    print('PUBLIC / 2. HEALTH: ' + url, flush=True)

def reconcile(browser, q, category):
    for job in q['jobs']:
        rec = STATE['jobs'].get(job['id'])
        if not rec or rec.get('status') not in ('submitting', 'needs_reconciliation'):
            continue
        pid = post_id(rec['url']) if rec.get('url') else (str(job['expected_post_id']) if job['operation'] == 'update' else find_managed(browser, job))
        if not pid:
            print('No confirmed matching post: {}. Kept blocked.'.format(job['id']), flush=True)
            continue
        if pid in STATE['baseline']:
            raise RuntimeError('Original-post protection')
        url = verify(browser, pid, job, category)
        STATE['managed'][job['slug']] = dict(postId=pid, url=url, revision=job['revision'], sha256=job['sha256'])
        rec.update(status='succeeded', url=url, category='2. HEALTH', visibility='PUBLIC', finished_at=now(), reconciled=True)
        save()
        sync()
        print('Recovered: ' + url, flush=True)

def main(command):
    if command == 'status':
        print(json.dumps(STATE, ensure_ascii=False, indent=2))
        return
    if command == 'github':
        if not STATE['baselineReady']:
            raise RuntimeError('Verify Tistory login with 01_TISTORY_LOGIN.cmd first')
        print('Create a fine-grained GitHub token: ONLY longevity-journal; Contents Read and write.', flush=True)
        print('Do not paste the token into ChatGPT. Paste it only into this local hidden prompt.', flush=True)
        webbrowser.open('https://github.com/settings/personal-access-tokens/new?name=Longevity-Win7&target_name=Jacobkang80&expires_in=30&contents=write')
        value = getpass.getpass('GitHub token - hidden input: ').strip()
        if not value:
            raise RuntimeError('No token entered')
        if github('user', auth=value).get('login') != 'Jacobkang80':
            raise RuntimeError('Token must belong to Jacobkang80')
        TOKEN_FILE.write_bytes(crypt(value.encode('utf-8'), True))
        restore()
        sync()
        print('GitHub connection verified. Token is stored with Windows DPAPI.', flush=True)
        return
    if command not in ('login', 'test-post', 'watch', 'reconcile'):
        raise RuntimeError('Unknown command')
    if command != 'login' and not token():
        raise RuntimeError('Run 02_GITHUB_CONNECT.cmd first')
    restore()
    browser = Browser()
    try:
        browser.go(BLOG + '/manage')
        if command == 'login':
            print('Complete Kakao login and SMS verification DIRECTLY in the Chrome window.', flush=True)
            input('When My EPIC2 administrator page is visible, return here and press Enter: ')
        current_url = browser.session_call('/url')
        if not current_url.startswith(BLOG + '/manage'):
            raise RuntimeError('Tistory login required. Run 01_TISTORY_LOGIN.cmd.')
        category = initialize(browser)
        if command == 'login':
            print('LOGIN VERIFIED. Next: 02_GITHUB_CONNECT.cmd', flush=True)
            return
        q = queue()
        if command == 'reconcile':
            reconcile(browser, q, category)
            return
        if command == 'test-post':
            if not q['jobs']:
                raise RuntimeError('Queue is empty')
            publish(browser, q['jobs'][0], category)
            STATE['gatePassed'] = True
            save()
            sync()
            print('FIRST PUBLIC POST VERIFIED. You may run 04_AUTO_PUBLISH.cmd.', flush=True)
            return
        if not STATE['gatePassed']:
            raise RuntimeError('Run 03_TEST_ONE.cmd and verify the first post before automatic publication')
        print('Watching GitHub every 30 seconds. Keep PC and this window running. Ctrl+C stops.', flush=True)
        while True:
            q = queue()
            if q['enabled']:
                for job in q['jobs']:
                    if plan(job, STATE) != 'skip':
                        print('Publishing: ' + job['title'], flush=True)
                        publish(browser, job, category)
            time.sleep(30)
    finally:
        browser.close()

def lock():
    if os.name != 'nt':
        raise RuntimeError('This package is intended for Windows 7')
    api = ctypes.windll.kernel32.CreateMutexW
    api.argtypes = [ctypes.c_void_p, wintypes.BOOL, wintypes.LPCWSTR]
    api.restype = wintypes.HANDLE
    ctypes.windll.kernel32.CloseHandle.argtypes = [wintypes.HANDLE]
    ctypes.windll.kernel32.CloseHandle.restype = wintypes.BOOL
    handle = api(None, True, 'Local\\LongevityTistoryPublisher')
    if not handle:
        raise RuntimeError('Publisher lock could not be acquired')
    if ctypes.windll.kernel32.GetLastError() == 183:
        ctypes.windll.kernel32.CloseHandle(handle)
        raise RuntimeError('Another publisher is running. Close it first.')
    return handle

if __name__ == '__main__':
    handle = None
    try:
        handle = lock()
        main(sys.argv[1] if len(sys.argv) > 1 else 'status')
    except KeyboardInterrupt:
        print('\nStopped. Check status or reconcile before retrying uncertain submissions.', flush=True)
    except Exception as exc:
        print('\nSTOPPED: ' + str(exc), flush=True)
        sys.exit(1)
    finally:
        if handle:
            ctypes.windll.kernel32.CloseHandle.argtypes = [wintypes.HANDLE]
            ctypes.windll.kernel32.CloseHandle.restype = wintypes.BOOL
            ctypes.windll.kernel32.CloseHandle(handle)
