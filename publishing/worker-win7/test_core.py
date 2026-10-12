import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import copy
import unittest
from win7_core import BLOG, digest, empty_state, validate, hydrate, post_id, plan, category_id, publication_html, revision_marker

def job(**kwargs):
    html = '<p>' + ('원고 본문 ' * 40) + '</p>'
    return dict(dict(id='olive-oil-r1', slug='olive-oil', revision=1, operation='create', title='올리브유', html=html, tags=['건강'], sha256=digest(html)), **kwargs)

def queue(j):
    return dict(schema=1, blog=BLOG, category='2. HEALTH', enabled=True, jobs=[j])

class ProtectionTests(unittest.TestCase):
    def test_valid_and_tampered_body(self):
        self.assertTrue(validate(queue(job())))
        with self.assertRaises(ValueError):
            validate(queue(job(html='tampered')))

    def test_script_event_form_rejected(self):
        for active in ('<script>alert(1)</script>', '<img onerror="x">', '<form></form>'):
            html = job()['html'] + active
            with self.assertRaises(ValueError):
                validate(queue(job(html=html, sha256=digest(html))))

    def test_duplicate_jobs(self):
        q = queue(job())
        q['jobs'].append(job())
        with self.assertRaises(ValueError):
            validate(q)

    def test_uncertain_blocks_all_revisions(self):
        state = empty_state()
        state['jobs']['olive-oil-r1'] = dict(slug='olive-oil', status='submitting', sha256=job()['sha256'])
        with self.assertRaises(ValueError):
            plan(job(), state)
        with self.assertRaises(ValueError):
            plan(job(id='olive-oil-r2', revision=2), state)

    def test_success_is_idempotent(self):
        state = empty_state()
        state['jobs']['olive-oil-r1'] = dict(status='succeeded', sha256=job()['sha256'])
        self.assertEqual(plan(job(), state), 'skip')

    def test_changed_completed_revision_rejected(self):
        state = empty_state()
        state['jobs']['olive-oil-r1'] = dict(status='succeeded', sha256='old')
        with self.assertRaises(ValueError):
            plan(job(), state)

    def test_only_owned_nonoriginal_posts_can_be_updated(self):
        j = job(id='olive-oil-r2', revision=2, operation='update', expected_post_id='64')
        s = empty_state()
        with self.assertRaises(ValueError):
            plan(j, s)
        s['managed']['olive-oil'] = dict(postId='64', revision=1)
        self.assertEqual(plan(j, s), 'update')
        s['baseline'] = ['64']
        with self.assertRaises(ValueError):
            plan(j, s)
        s['baseline'] = []
        with self.assertRaises(ValueError):
            plan(dict(j, expected_post_id='65'), s)

    def test_repeat_create_refused(self):
        s = empty_state()
        s['managed']['olive-oil'] = dict(postId='64', revision=1)
        with self.assertRaises(ValueError):
            plan(job(), s)

    def test_strict_public_url(self):
        self.assertEqual(post_id(BLOG + '/64'), '64')
        for url in ('https://other.tistory.com/64', BLOG + '/manage', BLOG + '/64?x=1', BLOG + '/64#x'):
            with self.assertRaises(ValueError):
                post_id(url)

    def test_unique_health_category(self):
        self.assertEqual(category_id([dict(name='2. HEALTH', id=8)]), 8)
        with self.assertRaises(ValueError):
            category_id([])
        with self.assertRaises(ValueError):
            category_id([dict(name='2. HEALTH', id=8), dict(name='2. HEALTH', id=9)])

    def test_current_revision_marker(self):
        j = job()
        self.assertIn('lj-managed-olive-oil', publication_html(j))
        self.assertIn(revision_marker(j), publication_html(j))

    def test_manifest_cache_and_mismatch(self):
        j = job()
        meta = {key: j[key] for key in ('id', 'slug', 'revision', 'operation', 'sha256')}
        meta['payload_path'] = 'publishing/jobs/olive-oil-r1.json'
        calls = []
        def fetch(path):
            calls.append(path)
            return j
        cache = {}
        self.assertEqual(hydrate(queue(meta), fetch, cache)['jobs'][0]['title'], j['title'])
        hydrate(queue(meta), fetch, cache)
        self.assertEqual(len(calls), 1)
        with self.assertRaises(ValueError):
            hydrate(queue(dict(meta, payload_path='../../secret')), fetch, {})
        with self.assertRaises(ValueError):
            hydrate(queue(dict(meta, sha256='modified')), fetch, {})

if __name__ == '__main__':
    unittest.main(verbosity=2)
