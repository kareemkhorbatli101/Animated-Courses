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
from sets import SETS

SPEC = None    # set by build(); see sets.py


class Builder:
    def __init__(self, d):
        self.d = d
        self.bl = None
        self.key = []          # (number, answer, why, trap)
        self.mcq = []          # (number, stem, options, answer_index, level, why)
        self.mcqn = 0
        # What each wrong option means. A distractor that maps to one named
        # misconception turns the key from a list of letters into a diagnosis:
        # the student does not just learn that C was wrong, but what believing
        # C commits them to.
        self.misreads = {}
        self.tiers = []   # (n, stem, options, reasons, ans, reason, why)
        self.seen_stems = {}   # stem -> the item number that first asked it
        self.repeats = []      # (number, the number it repeats)

    # ---- block dispatch ---------------------------------------------
    def block(self, b):
        kind, rest = b[0], b[1:]
        getattr(self, '_' + kind)(*rest)

    # ---- the 2026 format ------------------------------------------------
    def _case(self, title, en, ar):
        self.d.case(title, en, ar)

    def _prompt(self, label, instruction, first=''):
        self.d.prompt(label, instruction, first)

    def _worked(self, headers, rows, accent=INDIGO, widths=None, note=''):
        self.d.worked(headers, rows, accent, widths, note)

    def _h3(self, text, color=INDIGO):
        self.d.h3(text, color)

    def _part(self, title, tag):
        self.d.partbar(title, tag)

    def _prose(self, text, reg=None, i=False):
        self.d.prose(text, reg, i)

    def _scene(self, title, lines):
        self.d.scene(lines, title)

    def _task(self, label, objective, instruction, needs, steps):
        self.d.task(label, objective, instruction, needs, steps)

    def _fill(self, reg, text, whys=None, extras=None):
        """text is one paragraph, or a list of them sharing one word bank.

        Long explanations are broken into short paragraphs so the page stays
        readable; the blanks keep numbering straight through.
        """
        whys, extras = whys or {}, extras or []
        paras = [text] if isinstance(text, str) else list(text)
        from blanks import answers as _ans
        got = [a for t in paras for a in _ans(t)]
        words = sorted(set(got) | set(extras), key=lambda w: w.lower())
        note = 'Not every word is used.' if extras else ''
        if len(got) != len(set(got)):
            note += ('  ' if note else '') + 'A word may be used more than once.'
        self.d.bank(words, note or 'Use each word once.')
        for i, t in enumerate(paras):
            parts = self.bl.parse(t)
            for p in parts:
                if p[0] == 'b':
                    why, trap = whys.get(p[2], ('', ''))
                    self.key.append((p[1], p[2], why, trap))
            self.d.fill(parts, reg=reg if i == 0 else None)

    # ---- the item-only format -------------------------------------------
    def _stim(self, label, title, rows, ar=None, accent=None):
        self.d.stim(label, title, rows, accent or D.PLUM, ar)

    def _step(self, question, options, ans, why):
        """Scaffolding, numbered in its own series so the item count is honest."""
        self.stepn = getattr(self, 'stepn', 0) + 1
        self.key.append(('Step %d' % self.stepn, '(%s) %s'
                         % ('abcd'[ans], options[ans]), why, ''))
        self.d.step(self.stepn, question, options)

    def _tier(self, stem, options, reasons, ans, reason, why, misreads=None):
        """One item, two answers, numbered in the same series as every other.

        The key keeps tiers in a table of their own, because a two-tier answer
        is two letters and a student marking their own work needs to see that
        both had to be right.
        """
        self.mcqn += 1
        self.tiers.append((self.mcqn, stem, options, reasons, ans, reason, why))
        if misreads:
            self.misreads[self.mcqn] = misreads
        self.d.tier(self.mcqn, stem, options, reasons)

    def _diag(self, title, shown, options, ans, why, misreads=None):
        self.mcqn += 1
        self.mcq.append((self.mcqn, 'Diagnose: ' + title, options, ans,
                         'Level C', why))
        if misreads:
            self.misreads[self.mcqn] = misreads
        self.d.diag(self.mcqn, title, shown, options)

    def _gate(self, span, score, redo, key_at=''):
        self.d.gate(span, score, redo, key_at)

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
        self.d.match(left, right, note=note)

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
        # An int means "this many numbered boxes", which is how a content file
        # almost always wants it; a list lets a handout label them itself.
        self.d.answer_grid(list(range(1, nums + 1)) if isinstance(nums, int)
                           else nums)

    def _fig(self, name, *args, **kw):
        self.d.figure(*getattr(F, name)(*args, **kw))

    def _mcq(self, stem, options, ans, level, why, misreads=None):
        self.mcqn += 1
        # An item asked a second time is the same item. Printing its answer,
        # its explanation and its three misreads twice would add five pages to
        # the key and tell the student nothing they did not read the first
        # time, so the second appearance is recorded as a pointer.
        if stem in self.seen_stems:
            self.repeats.append((self.mcqn, self.seen_stems[stem]))
        else:
            self.seen_stems[stem] = self.mcqn
            self.mcq.append((self.mcqn, stem, options, ans, level, why))
            if misreads:
                self.misreads[self.mcqn] = misreads
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
    # The right-hand side pairs the handout with its own page number, so a
    # student holding a loose sheet can say exactly which page they are on.
    hdr = d.header('Handout %d \u00b7 %s' % (H['n'], H['title']),
                   'Handout %d' % H['n'])
    d.unit_title('Handout %d · %s' % (H['n'], H['title']))
    if not SPEC.itemonly:
        # In the item-only format the strapline and the language panel are the
        # last of the exposition. The strapline summarised the handout before
        # the student had done any of it, and the panel handed over the
        # collocations and the contrasts that the matching items now test.
        d.strapline(H['subtitle'])
    d.cefr('%s · %s · %s' % (SPEC.code, SPEC.title, H['register']))
    if not SPEC.itemonly:
        lg = H['lang']
        d.langbox(lg['register'], lg['collocations'], lg['pairs'], lg['nots'])
    # The objectives list is not printed in the terse format. 373 bullets
    # across 75 handouts told a student what they were about to be told, and
    # the exercise prompts carry the same information where it is needed.
    if not SPEC.terse:
        d.h3('What you will be able to do when this handout is finished')
        d.bullets(H['objectives'])
    d.blank()
    for blk in H['blocks']:
        b.block(blk)
    d.page_break_section(hdr=hdr, restart=True)
    return b


def render_key(d, built):
    span = 'Handouts 1 to %d' % SPEC.n
    hdr = d.header('Answer Key \u00b7 ' + span, 'Answer Key')
    d.unit_title('Answer Key')
    d.strapline('%s · %s' % (SPEC.code, span))
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
        if b.tiers:
            d.h3('Two-tier questions: the answer and the reason')
            d.keytable([(n, '(%s) %s  +  (%s)' % ('ABCD'[a], o[a], D.ROMAN[r]),
                         w, 'both tiers') for n, st, o, rs, a, r, w in b.tiers],
                       accent=D.PLUM)
        if b.repeats:
            d.h3('Items asked twice')
            d.table(['Item', 'Repeats item', 'Answer'],
                    [[str(n), str(o), '(%s)' % 'ABCD'[dict(
                        (m, a) for m, _st, _o, a, _l, _w in b.mcq)[o]]]
                     for n, o in b.repeats], D.TEAL, [14, 20, 66])
        if b.misreads:
            # A wrong option is only worth printing if it means something. Each
            # row names the belief that leads to it, so a student who misses an
            # item is told what they think, not only that they were wrong.
            d.h3('What a wrong answer means')
            d.table(['#', 'If you chose', 'then you are reading it like this'],
                    [[str(n), '(%s)' % L, txt]
                     for n, mr in sorted(b.misreads.items())
                     for L, txt in sorted(mr.items())],
                    D.RED, [6, 12, 82])
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
        d.page_break_section(hdr=hdr)


def build(out=None, spec=None):
    global SPEC
    if spec is not None:
        SPEC = spec
    out = out or SPEC.out
    d = Doc('CMA Part 1 · %s · %s' % (SPEC.code, SPEC.title),
            'Interactive handouts with answer key')
    mods = [importlib.import_module(SPEC.modpat % n) for n in SPEC.handouts]
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
    d.figure(*F.cover(**SPEC.cover_args()), cover=True)
    d.page_break_section(zero=True)
    d.unit_title('CMA Part 1 · %s' % SPEC.code)
    d.strapline(SPEC.title)
    d.cefr(SPEC.intro)
    if SPEC.itemonly:
        d.body_p('There is nothing to read on these pages. Every element is a '
                 'question, including the ones that tell you how to start, and '
                 'the only thing that is not a question is the material the '
                 'questions are asked about.')
        d.body_p('Begin with the cold open on the first page. You have not been '
                 'taught any of it and you are meant to get some of it wrong: '
                 'attempting an answer you do not have changes how well the '
                 'next hour sticks. The same six questions come back on the '
                 'last page, word for word, so you can see what moved.')
        d.body_p('Work in pen and mark each part at the CHECK bar before going '
                 'on. The key does not only give the letter — it names what '
                 'each wrong option means, so a missed item tells you what you '
                 'believe rather than only that you were wrong.')
    else:
        d.body_p('These handouts are not notes to read. You write them. The words you '
                 'supply are the summary, so a finished handout is a page you can revise '
                 'from, in your own handwriting.')
        d.body_p('Work in pen. Do not look at the key until the whole handout is done — '
                 'the key is written to explain the mistake, and you only get that '
                 'benefit if you have made it first.')
    d.h3('The %s handouts' % SPEC.nword.lower())
    d.table(['#', 'Handout', 'What it gives you'],
            [[str(h['n']), h['title'], h['subtitle']] for h in hs], INDIGO, [6, 32, 62])
    d.figure(*F.legend())
    d.h3('How to read the markers')
    d.table(['Marker', 'Meaning'],
            ([['MATERIAL', 'The evidence an item set is asked about. It states no '
                           'rule and reaches no conclusion.'],
              ['STEP', 'The decision that has to be made before the item below '
                       'it. Lower-case letters, and it has wrong options in it.'],
              ['Two-tier', 'Answer and reason, both chosen. Both have to be '
                           'right for the item to count.'],
              ['Cream box', 'Somebody else\u2019s work, and it is wrong. You '
                            'are asked to name the error, not to redo it.'],
              ['CHECK', 'Mark what you have done before going on, and the score '
                        'that says go back.'],
              ['Numbered rule', 'A space you fill in. The number matches the '
                                'answer key.']]
             if SPEC.itemonly else
             [['R1', 'Teaching English. Short sentences. This is where a new idea arrives.'],
              ['R2', 'Textbook English. Longer sentences and passive verbs, as a textbook writes them.'],
              ['R3', 'Exam English. Exactly how the CMA exam phrases it, traps included.'],
              ['Numbered rule', 'A space you fill in. The number matches the answer key.'],
              ['Red table', 'A trap. Read it twice.']]), GREY, [14, 86])
    d.page_break_section(hdr=d.header('%s \u00b7 how to use these handouts' % SPEC.code,
                                      SPEC.title), restart=True)


def glossary(d, hs):
    hdr = d.header('Glossary \u00b7 %s' % SPEC.code, 'Glossary')
    d.unit_title('Glossary')
    d.strapline('Every term in %s, with the Arabic equivalent and the places it '
                'misleads' % SPEC.code)
    d.cefr('The third column is for recognition only. In the exam room you work in English.')
    d.page_break_section()
    rows = []
    for h in hs:
        rows += list(h.get('terms', []))
    rows.sort(key=lambda r: r[0].lower())
    d.glossary_rows(rows)
    d.page_break_section(hdr=hdr, restart=True)


if __name__ == '__main__':
    key = sys.argv[1] if len(sys.argv) > 1 else 'd1'
    if key not in SETS:
        sys.exit('unknown set %r; known: %s' % (key, ', '.join(sorted(SETS))))
    spec = SETS[key]
    path, nimg, built = build(sys.argv[2] if len(sys.argv) > 2 else None, spec)
    blanks = sum(b.bl.n for _, b in built)
    mcqs = sum(len(b.mcq) for _, b in built)
    print('wrote %s  %d bytes  %d figures  %d blanks  %d exam questions'
          % (path, os.path.getsize(path), nimg, blanks, mcqs))
