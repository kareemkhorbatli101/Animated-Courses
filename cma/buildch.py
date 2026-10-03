# -*- coding: utf-8 -*-
"""Build one chapter's handouts and one chapter's answer keys.

A handout is a list of explicit pages. Pagination is not left to Word: each
page is declared, ends with its own CHECK bar and is followed by a forced
break, so the gate always lands at the foot of the page it gates and the page
count is a fact rather than an estimate.

Items are numbered from 1 within the handout, continuously across every
exercise, so the key is one flat list and a student can name a wrong item
without naming an exercise.

Usage:  python3 buildch.py b1_ch01
"""
import sys, os, importlib, itertools

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import docxw as D
from docxw import Doc, para, run, INDIGO, INDIGO_D, GREY, GREEN, PLUM, TEAL, RED
from blanks import Blanks, answers as brace_answers
import lean as L

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '')


class Counter:
    """One running item number per handout, and the key it collects."""

    def __init__(self):
        self.n = 0
        self.key = []            # (number, answer, why)

    def take(self, answer, why=''):
        self.n += 1
        self.key.append((self.n, answer, why))
        return self.n

    def cells(self, answers_, whys=None):
        """Numbers for a run of table cells, consumed by the renderer."""
        whys = whys or {}
        for a in answers_:
            yield self.take(a, whys.get(a, ''))


# ------------------------------------------------------------ exercises -----
def render_exercise(d, c, x, label):
    """One exercise. Returns the number of response points it carries."""
    t, instr = x['t'], x['d']
    L.exbar(d, 'Exercise %d · %s' % (label, NAMES[t]), instr)
    if x.get('data'):
        L.datapanel(d, x['data'][0], x['data'][1])
    if x.get('datagrid'):
        g = x['datagrid']
        L.datagrid(d, g[0], g[1], g[2], widths=g[3] if len(g) > 3 else None)
    start = c.n

    if t == 'T1':
        for stem, opts, ans, why in x['items']:
            n = c.take('(%s)' % 'ABCD'[ans], why)
            L.mcq_compact(d, n, stem, opts)
        d.blank()

    elif t == 'T2':
        for stmt, tf, why in x['items']:
            c.take('True' if tf else 'False', why)
        L.truefalse(d, [s for s, _t, _w in x['items']], start + 1)

    elif t == 'T3':
        bl = Blanks()
        bl.n = c.n
        got = [a for p in x['paras'] for a in brace_answers(p)]
        note = 'Not every word is used.'
        if len(got) != len(set(got)):
            # A word bank that silently needs a word twice reads as an error
            # to the student, who then hunts for a word that is not there.
            note += '  A word may be used more than once.'
        d.bank(sorted(set(got) | set(x['extras']), key=str.lower), note)
        for p in x['paras']:
            parts = bl.parse(p)
            for q in parts:
                if q[0] == 'b':
                    c.n = q[1]
                    c.key.append((q[1], q[2], x.get('whys', {}).get(q[2], '')))
            d.fill(parts, sz=20, tight=True)
        d.blank()

    elif t == 'T4':
        for a in x['ans']:
            c.take(a)
        L.matchbox(d, x['heads'], x['left'], x['right'], x.get('note', ''))

    elif t == 'T5':
        L.filltable(d, x['heads'], x['rows'],
                    c.cells(x['ans'], x.get('whys')),
                    x.get('w'), x.get('accent', INDIGO))

    elif t == 'T6':
        for a in x['ans']:
            c.take(a)
        L.options(d, x['legend'][0], x['legend'][1]) if x.get('legend') else None
        L.labelrow(d, x['items'], start + 1)

    elif t == 'T7':
        L.oddoneout(d, [g[0] for g in x['groups']],
                    c.cells(['(%s)  %s' % ('abcd'[i], g[0][i])
                             for g in x['groups'] for i in [g[1]]]))

    elif t == 'T8':
        L.sequence(d, x['items'], c.cells(x['ans']), x.get('note', ''))

    else:
        raise ValueError('unknown exercise type %r' % t)

    return c.n - start


NAMES = {'T1': 'multiple choice', 'T2': 'true or false',
         'T3': 'fill in the spaces', 'T4': 'matching',
         'T5': 'fill in the table', 'T6': 'classification',
         'T7': 'odd one out', 'T8': 'put them in order'}


# ------------------------------------------------------------- handouts -----
def render_handout(d, H, ch):
    """The student sheets. Returns the counter, carrying the key."""
    c = Counter()
    npages = len(H['pages'])
    hdr = d.header('Handout %s.%d · %s' % (ch, H['n'], H['title']),
                   'Handout %s.%d' % (ch, H['n']), total=npages)
    label = 0
    for pi, page in enumerate(H['pages'], 1):
        if pi == 1:
            d.unit_title('Handout %s.%d · %s' % (ch, H['n'], H['title']))
            d.cefr('%s · from section %s of the book · %d pages, '
                   'answer key on a separate sheet'
                   % (H['book'], H['source'], npages))
        else:
            L.pagebreak(d)
        first = c.n + 1
        for x in page['exercises']:
            label += 1
            render_exercise(d, c, x, label)
        L.checkbar(d, pi, '%d to %d' % (first, c.n),
                   int((c.n - first + 1) * 0.75), page['redo'])
    d.page_break_section(hdr=hdr, restart=True)
    return c


def render_key(d, H, c, ch):
    """One separate sheet per handout. Outside the handout's page sequence."""
    hdr = d.header('Handout %s.%d · Answer Key' % (ch, H['n']),
                   'Answer Key')
    d.unit_title('Handout %s.%d · Answer Key' % (ch, H['n']))
    d.cefr('%s · %s · %d items · keep this sheet separate from '
           'the handout' % (H['title'], H['source'], c.n))
    # Answers in three columns, then the reasons that teach something. A key
    # that printed a reason beside each of 71 answers ran to three sheets; the
    # brief is one sheet, and the book itself carries the full explanations.
    L.keyblock3(d, [(str(n), a) for n, a, _w in sorted(c.key)])
    L.keywhy(d, [(str(n), w) for n, _a, w in sorted(c.key) if w][:14])
    d.page_break_section(hdr=hdr, restart=True)


def build(mod):
    ch = importlib.import_module(mod)
    hs = [importlib.import_module('%s.h%02d' % (mod, n)) for n in ch.HANDOUTS]
    for m in hs:
        importlib.reload(m)

    sd = Doc(ch.TITLE, ch.SUB)
    kd = Doc(ch.TITLE + ' · Answer Keys', ch.SUB)
    counters = []
    for m in hs:
        H = m.HANDOUT
        counters.append((H, render_handout(sd, H, ch.CH)))
    for H, c in counters:
        render_key(kd, H, c, ch.CH)

    sp, kp = OUT + ch.OUT_H, OUT + ch.OUT_K
    sd.save(sp)
    kd.save(kp)
    return sp, kp, counters


if __name__ == '__main__':
    mod = sys.argv[1] if len(sys.argv) > 1 else 'b1_ch01'
    sp, kp, cs = build(mod)
    tot = sum(c.n for _H, c in cs)
    print('handouts %-3d response points %-5d' % (len(cs), tot))
    for H, c in cs:
        print('  H%-3d %-52s %3d items  %d pages'
              % (H['n'], H['title'][:52], c.n, len(H['pages'])))
    print('wrote', sp, os.path.getsize(sp), 'bytes')
    print('wrote', kp, os.path.getsize(kp), 'bytes')
