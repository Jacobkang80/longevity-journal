import hashlib
import re
from urllib.parse import urlparse

BLOG = 'https://myepic2.tistory.com'
REPO = 'Jacobkang80/longevity-journal'
BRANCH = 'tistory-publishing'

def digest(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()

def empty_state():
    return dict(schema=1, baseline=[], baselineReady=False, gatePassed=False, managed={}, jobs={})

def validate(queue):
    if queue.get('schema') != 1 or queue.get('blog') != BLOG or queue.get('category') != '2. HEALTH' or type(queue.get('enabled')) is not bool:
        raise ValueError('Invalid publishing queue configuration')
    jobs = queue.get('jobs')
    if not isinstance(jobs, list) or len(jobs) > 100:
        raise ValueError('Invalid job list')
    seen = set()
    for job in jobs:
        slug, revision = job.get('slug'), job.get('revision')
        if not isinstance(slug, str) or not re.fullmatch(r'[a-z0-9][a-z0-9-]{2,100}', slug) or type(revision) is not int or revision < 1:
            raise ValueError('Invalid job identity')
        if job.get('id') != '{}-r{}'.format(slug, revision) or job['id'] in seen or job.get('operation') not in ('create', 'update'):
            raise ValueError('Invalid or duplicate job ID')
        seen.add(job['id'])
        html, title, tags = job.get('html'), job.get('title'), job.get('tags')
        if not isinstance(html, str) or len(html) < 100 or len(html.encode('utf-8')) > 500000 or job.get('sha256') != digest(html):
            raise ValueError('Invalid HTML or digest')
        if not isinstance(title, str) or not title.strip() or len(title) > 200:
            raise ValueError('Invalid title')
        if not isinstance(tags, list) or len(tags) > 10 or any(not isinstance(t, str) or len(t) > 40 or ',' in t for t in tags):
            raise ValueError('Invalid tags')
        if re.search(r'<\s*(script|iframe|object|embed|form|input|button)\b|\bon[a-z]+\s*=|javascript\s*:', html, re.I):
            raise ValueError('Active content is not allowed')
        if job['operation'] == 'update' and not re.fullmatch(r'\d+', str(job.get('expected_post_id', ''))):
            raise ValueError('Update requires expected_post_id')
    return queue

def hydrate(queue, fetch_payload, cache):
    if not isinstance(queue.get('jobs'), list):
        raise ValueError('Invalid manifest')
    jobs = []
    for item in queue['jobs']:
        if not item.get('payload_path'):
            jobs.append(item)
            continue
        key = item.get('id', '')
        if not re.fullmatch(r'[a-z0-9][a-z0-9-]{2,110}-r\d+', key) or item['payload_path'] != 'publishing/jobs/{}.json'.format(key):
            raise ValueError('Invalid payload path')
        cache_key = key + ':' + str(item.get('sha256'))
        if cache_key not in cache:
            cache[cache_key] = fetch_payload(item['payload_path'])
        job = cache[cache_key]
        if any(job.get(f) != item.get(f) for f in ('id', 'slug', 'revision', 'operation', 'sha256', 'expected_post_id')):
            raise ValueError('Manifest and manuscript do not match')
        jobs.append(job)
    return validate(dict(queue, jobs=jobs))

def post_id(url):
    p = urlparse(url)
    if p.scheme != 'https' or p.netloc != 'myepic2.tistory.com' or not re.fullmatch(r'/\d+', p.path) or p.query or p.fragment:
        raise ValueError('Unexpected post URL')
    return p.path[1:]

def plan(job, state):
    record = state['jobs'].get(job['id'])
    if record and record.get('sha256') != job['sha256']:
        raise ValueError('A revision was changed; use a new revision')
    if record and record.get('status') == 'succeeded':
        return 'skip'
    if record and record.get('status') in ('submitting', 'needs_reconciliation', 'blocked', 'failed'):
        raise ValueError('Job requires reconciliation before retry')
    if any(r.get('slug') == job['slug'] and r.get('status') in ('submitting', 'needs_reconciliation') for r in state['jobs'].values()):
        raise ValueError('Prior uncertain submission exists')
    managed = state['managed'].get(job['slug'])
    if job['operation'] == 'create':
        if managed:
            raise ValueError('Already managed; request an update')
        return 'create'
    if not managed or str(managed['postId']) != str(job['expected_post_id']) or str(managed['postId']) in state['baseline']:
        raise ValueError('Only program-created posts can be updated')
    if job['revision'] <= managed['revision']:
        raise ValueError('Revision must increase')
    return 'update'

def category_id(nodes):
    matches = []
    def walk(xs):
        for x in xs:
            if x.get('name') == '2. HEALTH' or x.get('label') == '2. HEALTH':
                matches.append(x)
            walk(x.get('children') or [])
    walk(nodes)
    if len(matches) != 1 or not str(matches[0].get('id')).isdigit() or int(matches[0]['id']) < 1:
        raise ValueError('HEALTH category was not uniquely identified')
    return int(matches[0]['id'])

def marker(job):
    return 'lj-managed-' + job['slug']

def revision_marker(job):
    return 'lj-revision-{}-{}'.format(job['revision'], job['sha256'])

def publication_html(job):
    return '<div id="{}"><span id="{}"></span>{}<p style="font-size:12px;color:#777">LONGEVITY JOURNAL · 신규 편집본</p></div>'.format(marker(job), revision_marker(job), job['html'])
