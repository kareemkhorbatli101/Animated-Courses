# -*- coding: utf-8 -*-
"""Fixture test for richhtml.

richhtml.py is the only logic duplicated from the book's renderer, so it
gets walked over every styled fragment in the corpus. The test asserts
two things: that nothing raises, and that no style option or colour is
used in the book that the HTML renderer silently drops.
"""
import collections
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.dirname(HERE)
for p in (HERE, BOOK, BOOK + '/items'):
    sys.path.insert(0, p)

import build as bookbuild   # noqa: E402
import richhtml            # noqa: E402

HANDLED_OPTS = {'bold', 'italic', 'underline', 'colour', 'font', 'size'}


def walk(node, opts, colours, fonts):
    """Collect every (text, {opts}) tuple anywhere in an item."""
    if isinstance(node, tuple) and len(node) == 2 and isinstance(node[0], str) \
            and isinstance(node[1], dict):
        for k in node[1]:
            opts[k] += 1
        if node[1].get('colour'):
            colours[node[1]['colour'].upper()] += 1
        if node[1].get('font'):
            fonts[node[1]['font']] += 1
        return
    if isinstance(node, dict):
        for v in node.values():
            walk(v, opts, colours, fonts)
    elif isinstance(node, (list, tuple)):
        for v in node:
            walk(v, opts, colours, fonts)


def main():
    opts = collections.Counter()
    colours = collections.Counter()
    fonts = collections.Counter()
    rendered = 0

    for it in bookbuild.ITEMS:
        walk(it, opts, colours, fonts)
        for _, _, body in it['preview'] + it['followup']:
            richhtml.body(body)
            rendered += 1
        for _, body in it['keys']:
            richhtml.body(body)
            rendered += 1

    print('rendered %d question and key bodies without error' % rendered)
    print('style options used:', dict(opts))
    print('colours used      :', dict(colours))
    print('fonts used        :', dict(fonts))

    unknown = set(opts) - HANDLED_OPTS
    assert not unknown, 'richhtml ignores style option(s): %s' % unknown

    unmapped = [c for c in colours
                if c not in richhtml.COLOUR_CLASS]
    assert not unmapped, ('colour(s) with no theme-aware class, so they '
                          'would be illegible in dark mode: %s' % unmapped)

    size_only = opts.get('size', 0)
    if size_only:
        print('note: %d fragments set an explicit point size; the web '
              'renderer scales with the page instead.' % size_only)
    print('PASS')


if __name__ == '__main__':
    main()
