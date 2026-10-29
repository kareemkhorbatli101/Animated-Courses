# -*- coding: utf-8 -*-
"""Build the offline practice site from the book's own item files.

Item discovery and content validation are imported from the book build, so
the site cannot drift from the printed guide: if an item would fail the
book's gates it fails here too, before a single page is written.
"""
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.dirname(HERE)
sys.path.insert(0, HERE)
sys.path.insert(0, BOOK)
sys.path.insert(0, BOOK + '/items')

import build as bookbuild          # noqa: E402  (item discovery)
import validate                    # noqa: E402
import corpus                      # noqa: E402
import distractors                 # noqa: E402
import gates                       # noqa: E402
import pages                       # noqa: E402

OUT = os.path.join(BOOK, 'site_out')


def assemble():
    """-> (families, exercises), both validated."""
    items = bookbuild.ITEMS
    validate.check_all(items)
    print('book validation: %d source items PASS' % len(items))

    families, exercises, fi = [], [], 0
    for it in items:
        if it['task'] == 'BUILD A SENTENCE':
            fi += 1
            families.append(corpus.family(it, fi))
            exercises.extend(corpus.sentences(it, fi))
        else:
            exercises.append(corpus.convert(it))

    made, skipped = distractors.build(exercises)
    print('fault-finding sets: %d built, %d skipped' % (made, len(skipped)))
    if skipped:
        raise SystemExit('no usable distractors for: %s' % ', '.join(skipped))
    return families, exercises


def catalogue(families, exercises):
    rows = []
    for e in exercises:
        pay = e['payload']
        rows.append({
            'kind': 'exercise', 'id': e['id'], 'slug': e['slug'],
            'task': e['task'], 'function': e['function'],
            'pay': (e.get('family_function') or pay.get('Grammar', '')),
            'hay': ' '.join([e['id'], e['function'], e['task_label'],
                             e.get('family_function', '')]
                            + list(pay.values())).lower(),
        })
    for f in families:
        pay = f['payload']
        rows.append({
            'kind': 'family', 'id': f['id'], 'slug': f['slug'],
            'task': 'bas', 'function': f['function'],
            'pay': pay.get('Grammar', ''),
            'hay': ' '.join([f['id'], f['function']] + list(pay.values())).lower(),
        })
    return rows


def write(families, exercises):
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT + '/items')
    os.makedirs(OUT + '/assets')

    for name in ('app.css', 'app.js'):
        shutil.copy(os.path.join(HERE, 'assets', name), OUT + '/assets/' + name)

    rows = catalogue(families, exercises)
    with open(OUT + '/assets/catalogue.js', 'w', encoding='utf-8') as fh:
        fh.write(pages.catalogue_js(rows))

    n = len(exercises)
    for i, e in enumerate(exercises):
        prev = (exercises[i - 1]['slug'], exercises[i - 1]['id']) if i else None
        nxt = (exercises[i + 1]['slug'], exercises[i + 1]['id']) if i + 1 < n else None
        html = pages.page(e, prev, nxt, '%d of %d' % (i + 1, n))
        with open('%s/items/%s.html' % (OUT, e['slug']), 'w', encoding='utf-8') as fh:
            fh.write(html)

    m = len(families)
    for i, f in enumerate(families):
        prev = (families[i - 1]['slug'], families[i - 1]['id']) if i else None
        nxt = (families[i + 1]['slug'], families[i + 1]['id']) if i + 1 < m else None
        html = pages.page(f, prev, nxt, 'family %d of %d' % (i + 1, m))
        with open('%s/items/%s.html' % (OUT, f['slug']), 'w', encoding='utf-8') as fh:
            fh.write(html)

    with open(OUT + '/index.html', 'w', encoding='utf-8') as fh:
        fh.write(pages.index(rows))

    shutil.copy(os.path.join(HERE, 'README.txt'), OUT + '/README.txt')
    shutil.copy(os.path.join(HERE, 'serve.py'), OUT + '/serve.py')
    return rows


def main():
    families, exercises = assemble()
    rows = write(families, exercises)
    gates.run(OUT, families, exercises, rows)
    total = sum(os.path.getsize(os.path.join(dp, f))
                for dp, _, fs in os.walk(OUT) for f in fs)
    print('wrote %d exercise pages + %d family pages + index  (%.1f MB)'
          % (len(exercises), len(families), total / 1e6))
    return OUT


if __name__ == '__main__':
    main()
