# -*- coding: utf-8 -*-
"""Build gates for the site.

The book's gates guarantee the content is sound. These guarantee the site
is *answerable*: that every exercise can actually be completed, that every
question has its key on the page, and that no page points at something
that is not in the package.

Everything here raises. A warning nobody reads is not a gate.
"""
import json
import os
import re

from functools import lru_cache


class SiteError(Exception):
    pass


def fail(msg):
    raise SiteError(msg)


# ---------------------------------------------------------------- tiles
def solvable(chips, tail_tokens, answer_tokens):
    """Is there an ordering of the chips that yields the answer exactly?

    The book only checks that chips + tail use the same words as the
    answer. A practice site needs more than that: if no ordering produces
    the answer in sequence, the exercise cannot be solved.
    """
    toks = tuple(answer_tokens)
    if tail_tokens:
        if tuple(toks[-len(tail_tokens):]) != tuple(tail_tokens):
            return False, 'the fixed ending is not the end of the answer'
        toks = toks[:-len(tail_tokens)]
    chip_toks = [tuple(c['tokens']) for c in chips]

    @lru_cache(maxsize=None)
    def walk(pos, used):
        if pos == len(toks):
            return used == (1 << len(chip_toks)) - 1
        for i, ct in enumerate(chip_toks):
            if used & (1 << i):
                continue
            if toks[pos:pos + len(ct)] == ct:
                if walk(pos + len(ct), used | (1 << i)):
                    return True
        return False

    ok = walk(0, 0)
    walk.cache_clear()
    return ok, 'no ordering of the word tiles produces the answer'


# ---------------------------------------------------------------- gates
def check_exercise(e):
    at = e['id']
    for k in ('id', 'slug', 'task', 'function', 'payload'):
        if not e.get(k):
            fail('%s: missing %r after conversion' % (at, k))

    if e['task'] == 'bas':
        for k in ('family_slug', 'cue', 'chips', 'answer'):
            if not e.get(k):
                fail('%s: missing %r' % (at, k))
        if not e['answer_tokens']:
            fail('%s: empty answer' % at)
        ok, why = solvable(e['chips'], e['tail_tokens'], e['answer_tokens'])
        if not ok:
            fail('%s: %s\n   tiles : %s\n   answer: %s'
                 % (at, why, ' | '.join(c['text'] for c in e['chips']),
                    e['answer']))
        if not e['note']:
            fail('%s: no explanation to show after the answer' % at)
        return

    if not e.get('keys'):
        fail('%s: no answer keys on the page' % at)
    tags = [q['tag'] for q in e['preview']] + [q['tag'] for q in e['followup']]
    if not 3 <= len(e['preview']) <= 5 or not 3 <= len(e['followup']) <= 5:
        fail('%s: question counts out of range' % at)
    for t in tags:
        if not e['keys'].get(t):
            fail('%s: question %s has no key on the page' % (at, t))
    for t in e['keys']:
        if t not in tags:
            fail('%s: key %s answers no question on the page' % (at, t))
    if not e['model_html'] or not e['degraded_html']:
        fail('%s: a writing exercise needs both the band-5 model and the '
             'band-3 contrast' % at)
    fs = e.get('faultset')
    if not fs:
        fail('%s: no fault-finding set' % at)
    right = [o for o in fs['options'] if o['correct']]
    wrong = [o for o in fs['options'] if not o['correct']]
    if len(right) != 3 or len(wrong) != 3:
        fail('%s: fault set is %d right / %d wrong, must be 3/3'
             % (at, len(right), len(wrong)))
    straight = [o for o in fs['options'] if '"' in o['text']]
    if straight:
        fail('%s: %d fault option(s) still use straight quotes, which makes '
             'them identifiable without being read' % (at, len(straight)))
    if not e['keys'].get(fs['key_html']):
        fail('%s: fault set points at key %r, which is not on the page'
             % (at, fs['key_html']))
    if e['task'] == 'ad':
        body = ' '.join(e['model'])
        for name, _ in e['students']:
            if name not in body:
                fail('%s: model never names %s' % (at, name))


def check_pages(out, slugs):
    """Every page parses, inlines valid JSON, and resolves its assets."""
    script = re.compile(r'window\.(ITEM|CATALOGUE_READY)=(.*?);</script>', re.S)
    href = re.compile(r'(?:href|src)="([^"#]+)"')
    for slug in slugs:
        path = '%s/items/%s.html' % (out, slug)
        if not os.path.exists(path):
            fail('no page written for %s' % slug)
        html = open(path, encoding='utf-8').read()
        if '</script>' in html.split('window.ITEM=')[1].split(';</script>')[0]:
            fail('%s: inlined data closes the script element' % slug)
        m = script.search(html)
        if not m:
            fail('%s: no inlined item data' % slug)
        try:
            data = json.loads(m.group(2))
        except Exception as exc:
            fail('%s: inlined JSON does not parse (%s)' % (slug, exc))
        if data['slug'] != slug:
            fail('%s: page carries data for %s' % (slug, data['slug']))
        for ref in href.findall(html):
            if ref.startswith(('http:', 'https:', 'mailto:', 'data:')):
                fail('%s: references the network (%s). The package must work '
                     'offline.' % (slug, ref))
            target = os.path.normpath(os.path.join(out, 'items', ref))
            if not os.path.exists(target):
                fail('%s: broken link to %s' % (slug, ref))


OFFLINE_BANNED = ('http://', 'https://', '//cdn', 'fetch(',
                  'XMLHttpRequest', 'navigator.sendBeacon',
                  '@import url(', 'googleapis')


def check_offline(out):
    """Nothing in the package may reach for the network.

    The per-page link check catches href and src; this catches the rest -
    a stylesheet @import, a fetch() left in a script, an analytics beacon.
    """
    for dp, _, files in os.walk(out):
        for name in files:
            if not name.endswith(('.html', '.js', '.css')):
                continue
            path = os.path.join(dp, name)
            text = open(path, encoding='utf-8').read()
            for bad in OFFLINE_BANNED:
                if bad in text:
                    fail('%s contains %r. The package must work with no '
                         'network at all.' % (os.path.relpath(path, out), bad))


def run(out, families, exercises, rows):
    for e in exercises:
        check_exercise(e)
    print('site validation: %d exercises answerable' % len(exercises))

    slugs = [e['slug'] for e in exercises] + [f['slug'] for f in families]
    if len(set(slugs)) != len(slugs):
        fail('duplicate page slugs')
    check_pages(out, slugs)
    print('page validation: %d pages, data and links OK' % len(slugs))

    cat = {r['slug'] for r in rows}
    missing = [s for s in slugs if s not in cat]
    if missing:
        fail('not in the contents listing: %s' % ', '.join(missing[:8]))

    idx = open(out + '/index.html', encoding='utf-8').read()
    for need in ('assets/catalogue.js', 'assets/app.js', 'assets/app.css'):
        if need not in idx:
            fail('index.html does not load %s' % need)

    check_offline(out)
    print('offline validation: no file reaches for the network')

    total = sum(os.path.getsize(os.path.join(dp, f))
                for dp, _, fs in os.walk(out) for f in fs)
    if total > 25e6:
        fail('package is %.1f MB; budget is 25 MB' % (total / 1e6))
    return True
