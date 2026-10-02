# -*- coding: utf-8 -*-
"""Assemble Set D1: six handouts and one answer key, into a single .docx.

A handout is a list of blocks. The renderer walks them, numbers every blank as
it goes, and collects the answer key from the same source strings the student
sees — so the key is a by-product of the exercise rather than a parallel
document that can fall out of step with it.
"""
import sys, os, importlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import docxw as D
from docxw import Doc, INDIGO, INDIGO_D, GREY, RULE, SOFT, PERI, ABS, VAR, THR, TRAP, GOOD
from blanks import Blanks, plain
import frames as F

HANDOUTS = [1, 2, 3, 4, 5, 6]


class Builder:
    def __init__(self, d):
        self.d = d
        self.bl = None
        self.key = []          # (number, answer, why, trap)
        self.mcq = []          # (number, stem, options, answer_index, level, why)
        self.mcqn = 0

    # ---- block dispatch ---------------------------------------------
    def block(self, b):
        kind, rest = b[0], b[1:]
        getattr(self, '_' + kind)(*rest)

    def _h3(self, text, color=INDIGO):
        self.d.h3(text, color)

    def _part(self, title, tag):
        self.d.partbar(title, tag)

    def _prose(self, text, reg=None, i=False):
        self.d.prose(text, reg, i)

    def _scene(self, title, lines):
        self.d.scene(lines, title)

    def _task(self, label, instruction):
        self.d.task(label, instruction)

    def _fill(self, reg, text, whys=None, extras=None):
        whys, extras = whys or {}, extras or []
        from blanks import answers as _ans
        got = _ans(text)
        words = sorted(set(got) | set(extras), key=lambda w: w.lower())
        note = 'Not every word is used.' if extras else ''
        if len(got) != len(set(got)):
            note += ('  ' if note else '') + 'A word may be used more than once.'
        self.d.bank(words, note or 'Use each word once.')
        parts = self.bl.parse(text)
        for p in parts:
            if p[0] == 'b':
                why, trap = whys.get(p[2], ('', ''))
                self.key.append((p[1], p[2], why, trap))
        self.d.fill(parts, reg=reg)

    def _bullets(self, seq):
        self.d.bullets(seq)

    def _table(self, headers, rows, accent=INDIGO, widths=None):
        self.d.table(headers, rows, accent, widths)

    def _stmt(self, title, rows, accent=INDIGO):
        self.d.stmt(title, rows, accent)

    def _journal(self, entries):
        self.d.journal(entries)

    def _traps(self, rows):
        self.d.traps(rows)

    def _match(self, left, right, answers, note=''):
        """One key row for the whole exercise: the letters in order, then the rule."""
        self.mlabel = getattr(self, 'mlabel', 0) + 1
        self.key.append(('Match %d' % self.mlabel,
                         '  '.join('%d-%s' % (i, a) for i, a in enumerate(answers, 1)),
                         note, ''))
        self.d.match(left, right)

    def _sortgrid(self, headers, items, answers, note=''):
        """One key row for the whole grid, numbered down the page."""
        self.slabel = getattr(self, 'slabel', 0) + 1
        self.key.append(('Grid %d' % self.slabel,
                         '  '.join('%d %s' % (i, a if a else '—')
                                   for i, a in enumerate(answers, 1)),
                         note, ''))
        self.d.sortgrid(headers, items)

    def _three_ways(self, rows):
        self.d.three_ways(rows)

    def _decoder(self, stem):
        self.d.decoder(stem)

    def _langbox(self, register, collocations, pairs, nots):
        self.d.langbox(register, collocations, pairs, nots)

    def _gloss(self, rows):
        self.d.glossary_rows(rows)

    def _rules(self, n=3):
        self.d.rule_lines(n)

    def _answers(self, nums):
        self.d.answer_grid(nums)

    def _fig(self, name, *args, **kw):
        self.d.figure(*getattr(F, name)(*args, **kw))

    def _mcq(self, stem, options, ans, level, why):
        self.mcqn += 1
        self.mcq.append((self.mcqn, stem, options, ans, level, why))
        self.d.cmaq(self.mcqn, stem, options, level)

    def _tip(self, text):
        self.d.tip(text)

    def _watch(self, text):
        self.d.watchout(text)

    def _break(self):
        self.d.page_break_section()

    def _blank(self):
        self.d.blank()


def render_handout(d, H):
    b = Builder(d)
    b.bl = Blanks()
    d.unit_title('Handout %d · %s' % (H['n'], H['title']))
    d.strapline(H['subtitle'])
    d.cefr('Set D1 · Absorption and Variable Costing · %s' % H['register'])
    lg = H['lang']
    d.langbox(lg['register'], lg['collocations'], lg['pairs'], lg['nots'])
    d.h3('What you will be able to do when this handout is finished')
    d.bullets(H['objectives'])
    d.blank()
    for blk in H['blocks']:
        b.block(blk)
    d.page_break_section()
    return b


def render_key(d, built):
    d.unit_title('Answer Key')
    d.strapline('Set D1 · Handouts 1 to 6')
    d.cefr('Every answer carries the reason for it and the mistake it defeats.')
    d.page_break_section()
    for H, b in built:
        d.partbar('Handout %d · %s' % (H['n'], H['title']), 'answers')
        if b.key:
            d.h3('Completed text and exercises')
            d.keytable([(n, a, w, t) for n, a, w, t in b.key])
        if b.mcq:
            d.h3('Exam-pitch questions')
            rows = []
            for n, stem, opts, ans, level, why in b.mcq:
                rows.append((n, '(%s)  %s' % ('ABCD'[ans], opts[ans]), why, level))
            d.keytable(rows, accent=INDIGO)
        for extra in H.get('key_extra', []):
            kind, rest = extra[0], extra[1:]
            if kind == 'h3':
                d.h3(*rest)
            elif kind == 'prose':
                d.prose(*rest)
            elif kind == 'stmt':
                d.stmt(*rest)
            elif kind == 'journal':
                d.journal(*rest)
            elif kind == 'table':
                d.table(*rest)
            elif kind == 'bullets':
                d.bullets(*rest)
        d.page_break_section()


def build(out):
    d = Doc('CMA Part 1 · Set D1 · Absorption and Variable Costing',
            'Interactive handouts with answer key')
    mods = [importlib.import_module('content.h%d' % n) for n in HANDOUTS]
    for m in mods:
        importlib.reload(m)
    front_matter(d, [m.HANDOUT for m in mods])
    built = []
    for m in mods:
        H = m.HANDOUT
        built.append((H, render_handout(d, H)))
    render_key(d, built)
    glossary(d, [H for H, _ in built])
    d.save(out)
    return out, len(d.images), built


def front_matter(d, hs):
    d.figure(*F.cover(), cover=True)
    d.page_break_section(zero=True)
    d.unit_title('CMA Part 1 · Set D1')
    d.strapline('Absorption costing and variable costing')
    d.cefr('Six handouts, one answer key. Section D.1 Measurement Concepts, with '
           'the Section C and Section A links the exam actually tests.')
    d.body_p('These handouts are not notes to read. You write them. The words you '
             'supply are the summary, so a finished handout is a page you can revise '
             'from, in your own handwriting.')
    d.body_p('Work in pen. Do not look at the key until the whole handout is done — '
             'the key is written to explain the mistake, and you only get that '
             'benefit if you have made it first.')
    d.h3('The six handouts')
    d.table(['#', 'Handout', 'What it gives you'],
            [[str(h['n']), h['title'], h['subtitle']] for h in hs], INDIGO, [6, 32, 62])
    d.h3('How to read the markers')
    d.table(['Marker', 'Meaning'],
            [['R1', 'Teaching English. Short sentences. This is where a new idea arrives.'],
             ['R2', 'Textbook English. Longer sentences and passive verbs, as a textbook writes them.'],
             ['R3', 'Exam English. Exactly how the CMA exam phrases it, traps included.'],
             ['Numbered rule', 'A space you fill in. The number matches the answer key.'],
             ['Red table', 'A trap. Read it twice.']], GREY, [14, 86])
    d.page_break_section()


def glossary(d, hs):
    d.unit_title('Glossary')
    d.strapline('Every term in Set D1, with the Arabic equivalent and the places it misleads')
    d.cefr('The third column is for recognition only. In the exam room you work in English.')
    d.page_break_section()
    rows = []
    for h in hs:
        rows += list(h.get('terms', []))
    rows.sort(key=lambda r: r[0].lower())
    d.glossary_rows(rows)
    d.page_break_section()


if __name__ == '__main__':
    o = sys.argv[1] if len(sys.argv) > 1 else \
        '/home/user/Animated-Courses/CMA_P1_SetD1_Absorption_vs_Variable.docx'
    path, nimg, built = build(o)
    blanks = sum(b.bl.n for _, b in built)
    mcqs = sum(len(b.mcq) for _, b in built)
    print('wrote %s  %d bytes  %d figures  %d blanks  %d exam questions'
          % (path, os.path.getsize(path), nimg, blanks, mcqs))
