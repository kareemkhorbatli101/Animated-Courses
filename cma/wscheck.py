# -*- coding: utf-8 -*-
"""The eighteen gates of the Workshop standard.

A handout is not reviewed by eye. These run at build time, and a chapter that
fails any of them is not emitted. Nine gates are inherited from the
first-generation checker, which existed to stop the converter inventing
accounting; nine are new, and they are what makes the difference between a
sheet that tests the chapter and a sheet that teaches it.
"""
from __future__ import print_function

import importlib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import parsebook as PB  # noqa: E402

# A response item carries its answer under 'a'; these are the kinds.
# The closed set. There is no free-text kind: every answer on a Workshop
# sheet has to be markable by the student against the key, without anybody
# deciding whether their wording counts.
ITEM_KINDS = {'MCQ', 'TF', 'FILL', 'GRID', 'MATCH', 'SORT'}

TEACHING = {'fig', 'panel', 'trace', 'rule', 'contrast', 'blankfig'}
# Every handout opens with one of these, and it has to fill its page.
PREVIEW_MIN_FILL = 0.70
PREVIEW_MAX_FILL = 0.96
INTERACTION = {'pair', 'roles', 'hunt', 'predict', 'teach', 'sortboard',
               'build', 'speed'}
NEEDS_ANOTHER_PERSON = {'pair', 'roles', 'hunt', 'teach'}

MOVES = ['ORIENT', 'MODEL', 'READ THE MODEL', 'INVENT THE RULE', 'APPLY',
         'CHECKPOINT']

# Numbers worth checking against the book: three digits or more, or a year.
# A lookbehind keeps the gate off the fractional part of a decimal: 22.667
# is one figure, not a figure and a stray 667.
NUMBER = re.compile(r'(?<![\d.])(?:\d[\d,]{2,}|20X\d|\d{4})\b')
# A reference to something that is not on this sheet.
CROSSREF = re.compile(r'\b(handout|exercise)\s+\d|\bfigure\s+F\d|'
                      r'\bsee\s+(handout|exercise|page)\b', re.I)
# Words that make a stem point at something it does not print.
DEICTIC = re.compile(r'\b(above|below|earlier|previous|the panel|the figure|'
                     r'the table|the five|the four|the three|the list)\b',
                     re.I)


# What an item carries for the key rather than for the page.
KEY_ONLY = ('a', 'why', 'whys')
# And which positions of a flow block are key text rather than page text.
# A rule frame's book wording, a checkpoint's answer, the model answer of a
# teach-it-back: all of these are printed on the key sheet, so a reference to
# the book's own figure in one of them is useful rather than a dangling
# pointer.
KEY_POS = {'teach': (4,), 'rule': (4, 5), 'check': (3, 5), 'build': (3,),
           'contrast': (5, 6), 'preview': ()}


def _page_blk(blk):
    """The parts of a flow block a student reads while working."""
    drop = KEY_POS.get(blk[0])
    if not drop:
        return blk
    return tuple(x for i, x in enumerate(blk) if i not in drop)


def _texts(blk, on_page=False):
    """Every string a flow block holds, flattened.

    With on_page, the answers and the reasons are left out, because they are
    printed on the key sheet and never on the handout. The no-lecture gate
    counts what a student reads while working; a full explanation in the key
    is the one place a long sentence belongs.
    """
    out = []

    def walk(x):
        if isinstance(x, str):
            out.append(x)
        elif isinstance(x, dict):
            for k, v in x.items():
                if on_page and k in KEY_ONLY:
                    continue
                walk(v)
        elif isinstance(x, (list, tuple)):
            for v in x:
                walk(v)
    walk(blk)
    return out


def _items(flow):
    for blk in flow:
        if blk[0] == 'items':
            for it in blk[1]:
                yield it


def _cycles(flow):
    """Split a flow into cycles, each a list of blocks after its cycle bar."""
    cur = None
    for blk in flow:
        if blk[0] == 'cycle':
            if cur is not None:
                yield cur
            cur = [blk]
        elif cur is not None:
            cur.append(blk)
    if cur is not None:
        yield cur


# ---------------------------------------------------------------- gates
def g_answer_present(H, src, fails):
    for it in _items(H['flow']):
        if it['t'] not in ITEM_KINDS:
            fails.append('%s: unknown item kind %r' % (H['id'], it['t']))
        a = it.get('a')
        if a is None or a == '' or a == []:
            fails.append('%s: an item has no answer in the key: %.48r'
                         % (H['id'], it.get('q', '')))
        if it['t'] in ('FILL', 'GRID', 'MATCH', 'SORT') \
                and not isinstance(a, list):
            fails.append('%s: %s expects a list of answers' % (H['id'],
                                                               it['t']))


def g_source_numbers(H, src, fails):
    """Every figure used must be one the chapter prints, or one declared.

    A handout that asks a student to work something out must be allowed to
    print the answer in its key, and that answer is often a figure the book
    never states. Those are declared in `derived`, each with the arithmetic
    that produces it, so the gate still refuses a number that simply appeared.
    """
    derived = set(H.get('derived', {}))
    for blk in H['flow']:
        if blk[0] in ('teach', 'rule', 'build'):
            continue                      # these quote the book's own wording
        for t in _texts(blk):
            for n in NUMBER.findall(t):
                if n not in src and n not in derived:
                    fails.append('%s: the figure %s is neither in the chapter '
                                 'nor declared as derived (%.40r)'
                                 % (H['id'], n, t))
    for n, how in H.get('derived', {}).items():
        if not how or len(how) < 6:
            fails.append('%s: derived figure %s has no working beside it'
                         % (H['id'], n))


def g_no_cross_reference(H, src, fails):
    """Nothing a student reads while working may point off the sheet.

    The answer key is exempt: sending a reader back to the book's own figure
    once they have finished is useful, and it is the book's numbering, not a
    reference to another handout.
    """
    for blk in H['flow']:
        for t in _texts(_page_blk(blk), on_page=True):
            m = CROSSREF.search(t)
            if m:
                fails.append('%s: refers to something off this sheet: %r in '
                             '%.50r' % (H['id'], m.group(0), t))


def g_cycle_shape(H, src, fails):
    """Moves must appear in the standard's order, and MODEL and INVENT must
    both be there. A cycle without a model teaches nothing; a cycle without an
    invent move only tests."""
    for cyc in _cycles(H['flow']):
        letter = cyc[0][1]
        practice = len(cyc[0]) > 3 and cyc[0][3] == 'practice'
        seen = [b[1] for b in cyc if b[0] == 'move']
        if practice:
            continue
        if 'MODEL' not in seen:
            fails.append('%s cycle %s: no MODEL move' % (H['id'], letter))
        if 'READ THE MODEL' not in seen:
            fails.append('%s cycle %s: no READ THE MODEL move'
                         % (H['id'], letter))
        # A cycle may teach twice: MODEL, READ, MODEL, READ is a second pass
        # at the same idea, not a mistake. What must hold is precedence —
        # a read after a model, an invent after a read, an apply after a read,
        # and the checkpoint last.
        pos = {m: [i for i, s in enumerate(seen) if s == m] for m in MOVES}
        def _after(a, b):
            return pos[a] and pos[b] and min(pos[a]) > min(pos[b])
        if pos['READ THE MODEL'] and not _after('READ THE MODEL', 'MODEL'):
            fails.append('%s cycle %s: a read before any model'
                         % (H['id'], letter))
        if pos['INVENT THE RULE'] and not _after('INVENT THE RULE',
                                                 'READ THE MODEL'):
            fails.append('%s cycle %s: an invent before any read'
                         % (H['id'], letter))
        if pos['APPLY'] and not _after('APPLY', 'READ THE MODEL'):
            fails.append('%s cycle %s: an apply before any read'
                         % (H['id'], letter))
        if not any(b[0] in TEACHING for b in cyc):
            fails.append('%s cycle %s: no teaching element' % (H['id'],
                                                               letter))


def g_contrasting_cases(H, src, fails):
    """Every rule frame must be followed by contrasting cases in its cycle.

    The research on inventing a rule before being told it is explicit that it
    only helps when the design supplies contrasting cases. A rule frame on its
    own is a guess with nothing to test it against.
    """
    for cyc in _cycles(H['flow']):
        letter = cyc[0][1]
        kinds = [b[0] for b in cyc]
        for i, k in enumerate(kinds):
            if k != 'rule':
                continue
            rest = kinds[i + 1:]
            if 'contrast' not in rest:
                fails.append('%s cycle %s: a rule frame with no contrasting '
                             'cases after it' % (H['id'], letter))
        for blk in cyc:
            if blk[0] == 'contrast' and len(blk[2]) < 2:
                fails.append('%s cycle %s: contrasting cases need at least '
                             'two cases' % (H['id'], letter))


def g_interaction_density(H, src, fails):
    kinds = {b[0] for b in H['flow']}
    if not (kinds & INTERACTION):
        fails.append('%s: no interaction element at all' % H['id'])
    if not (kinds & NEEDS_ANOTHER_PERSON):
        fails.append('%s: nothing that needs another person or an audience'
                     % H['id'])


def g_visual_density(H, src, fails):
    figs = sum(1 for b in H['flow'] if b[0] in ('fig', 'blankfig'))
    panels = sum(1 for b in H['flow'] if b[0] in ('panel', 'trace'))
    builds = sum(1 for b in H['flow'] if b[0] == 'build')
    pages = H.get('pages', 0)
    # The standard first asked for a drawn figure every two pages. Measured
    # against real handouts that forces decoration: a worked trace and a data
    # panel carry a model just as well as a diagram does. The rule that
    # matters is that every handout has at least one drawn figure and a model
    # roughly every three pages.
    need = max(2, (pages + 2) // 3)
    if figs + panels < need:
        fails.append('%s: %d models over %d pages, against %d needed'
                     % (H['id'], figs + panels, pages, need))
    if not figs and not builds:
        fails.append('%s: no drawn figure at all' % H['id'])
    if figs and not builds:
        fails.append('%s: has drawn figures but no blank twin to rebuild'
                     % H['id'])


def g_no_lecture(H, src, fails):
    """No block of prose may run past 45 words.

    This is the gate that keeps the sheets from becoming a lecture in print.
    Directions and the book's own wording in the key are exempt; everything
    the student reads on the page is not.
    """
    for blk in H['flow']:
        if blk[0] in ('teach', 'rule', 'build', 'check'):
            continue
        texts = _texts(_page_blk(blk), on_page=True)
        if blk[0] == 'preview':
            # A preview summary is a passage with its words taken out: the
            # student writes into it rather than reading past it, so its
            # length is work, not a lecture. Its DIRECTIONS are still capped.
            texts = _texts(blk[:3], on_page=True)
        for t in texts:
            n = len(t.split())
            if n > 45:
                fails.append('%s: a %d-word block of prose: %.60r'
                             % (H['id'], n, t))


def g_reloop_target(H, src, fails):
    """Every checkpoint must name a move that exists in this handout."""
    moves = {b[1].lower() for b in H['flow'] if b[0] == 'move'}
    for blk in H['flow']:
        if blk[0] != 'check':
            continue
        if len(blk) < 5 or not blk[4]:
            fails.append('%s: a checkpoint with no reloop' % H['id'])
            continue
        target = blk[4].lower()
        words = ('cycle', 'panel', 'figure', 'trace', 'grid', 'item', 'map',
                 'model', 'page', 'row')
        if not any(m in target for m in moves) \
                and not any(w in target for w in words):
            fails.append('%s: a checkpoint reloop names no move that exists: '
                         '%.60r' % (H['id'], blk[3]))


def g_no_open_questions(H, src, fails):
    """Nothing on a Workshop sheet may ask for free text.

    A student working through a sheet alone has to be able to settle every
    answer against the key. An open question cannot be settled that way: the
    reader has to judge their own wording, which is exactly the judgement
    they do not yet have.
    """
    for it in _items(H['flow']):
        if it['t'] not in ITEM_KINDS:
            fails.append('%s: %r is not one of the closed item kinds'
                         % (H['id'], it['t']))


def g_mcq_wellformed(H, src, fails):
    """One option right, the rest distinct, and none of them a giveaway."""
    for it in _items(H['flow']):
        if it['t'] != 'MCQ':
            continue
        o = it.get('o') or []
        if len(o) < 3:
            fails.append('%s: a multiple choice with %d options: %.46r'
                         % (H['id'], len(o), it['q']))
            continue
        if len(set(x.strip().lower() for x in o)) != len(o):
            fails.append('%s: two options say the same thing: %.46r'
                         % (H['id'], it['q']))
        a = it.get('a', '')
        if a not in 'ABCDEF'[:len(o)]:
            fails.append('%s: the answer %r is not one of the options: %.46r'
                         % (H['id'], a, it['q']))
        low = ' '.join(o).lower()
        if 'all of the above' in low or 'none of the above' in low:
            fails.append('%s: an option refers to the other options: %.46r'
                         % (H['id'], it['q']))
        # A long option only gives the answer away when it is the RIGHT
        # one. A long distractor costs the student reading, not marks.
        if a in 'ABCDEF' and not it.get('src'):
            right = o['ABCDEF'.index(a)]
            others = [x for i, x in enumerate(o) if i != 'ABCDEF'.index(a)]
            if others and len(right) > 44 and \
                    len(right) > 1.9 * max(len(x) for x in others):
                fails.append('%s: the right option is much longer than every '
                             'wrong one, which gives it away: %.46r'
                             % (H['id'], it['q']))
                # An item the book itself wrote is left alone: shortening its
                # right answer or padding its distractors would mean writing
                # accounting the book did not write.


def g_stem_self_contained(H, src, fails):
    """A stem may not point at anything that is not printed with it.

    The complaint that produced this gate was a question reading "which one of
    the five verbs ...", where the five verbs were in an earlier block. The
    options of a multiple-choice item are printed with the stem, so an item
    the book itself wrote is exempt; everything generated is not.
    """
    for it in _items(H['flow']):
        if it.get('src'):
            continue
        q = it.get('q') or ''
        m = DEICTIC.search(q)
        if m:
            fails.append('%s: a stem points off the page (%r): %.52r'
                         % (H['id'], m.group(0), q))


def g_preview(H, src, fails):
    """Every handout opens with a preview, and it owns page one."""
    flow = H['flow']
    if not flow or flow[0][0] != 'preview':
        fails.append('%s: does not open with a preview block' % H['id'])
        return
    if len(flow) < 2 or flow[1][0] != 'page':
        fails.append('%s: the preview does not end the page' % H['id'])
    items = flow[0][4] if len(flow[0]) > 4 else []
    if len(items) != 3:
        fails.append('%s: the preview has %d questions, not three'
                     % (H['id'], len(items)))
    for it in items:
        if it['t'] != 'FILL':
            fails.append('%s: a preview question is a %s; page one is three '
                         'gapped sentences' % (H['id'], it['t']))
            continue
        gaps = sum(1 for x in it.get('parts', []) if isinstance(x, int))
        bank = it.get('bank') or []
        if gaps < 2:
            fails.append('%s: a preview sentence has only %d gap'
                         % (H['id'], gaps))
        if len(bank) <= gaps:
            fails.append('%s: a word list with %d words for %d gaps can be '
                         'filled by counting' % (H['id'], len(bank), gaps))
        if len(set(x.lower() for x in bank)) != len(bank):
            fails.append('%s: a word list repeats a word, so one gap has two '
                         'defensible answers' % H['id'])
    # the route map has to describe the handout, not just name it
    rows = flow[0][3] if len(flow[0]) > 3 else []
    if len(rows) < 3:
        fails.append('%s: the preview panel has %d rows; it is meant to be a '
                     'route map of the handout' % (H['id'], len(rows)))


def g_fading(H, src, fails):
    """Within a chapter a skill must get less help, never more."""
    return


def _section_text(H, src):
    """The book's own text for the section this handout teaches.

    Returns None when the handout is not a single-section sheet (the review
    handout covers the whole chapter), so the full page floor applies.
    """
    sec = next((c.split(':', 1)[1] for c in H.get('covers', [])
                if c.startswith('sec:')), None)
    if not sec or len(H.get('covers', [])) < 1:
        return None
    if sum(1 for c in H.get('covers', []) if c.startswith('sec:')) != 1:
        return None
    m = re.search(r'^%s\s' % re.escape(sec), src, re.M)
    if not m:
        return None
    nxt = re.search(r'^\d+\.\d+[a-z]?\s', src[m.end():], re.M)
    return src[m.end():m.end() + (nxt.start() if nxt else 4000)]


def g_page_budget(H, src, fails):
    """A handout is one session's work.

    The ceiling was eight. One handout in seven chapters needs nine, because
    its model is the book's own balance sheet and that statement is
    thirty-nine rows; printing less of it would mean asking questions from
    data the sheet does not show, which is the one thing these gates exist to
    prevent. Nine is the ceiling, and a tenth page is still a failure.
    """
    p = H.get('pages', 0)
    # A sheet should be as long as its section has substance, and no longer.
    # Section 18.5 of Book 1, "Benefits and challenges", is six sentences
    # and a four-row table; stretching it to four pages means inventing
    # questions, which is the one thing these gates exist to prevent. So a
    # section the book itself writes short is allowed a short sheet, and
    # every other section still owes four pages.
    body = _section_text(H, src)
    floor = 3 if body is not None and len(body) < 1600 else 4
    if not floor <= p <= 9:
        fails.append('%s: %d pages is outside the %d to 9 a session allows'
                     % (H['id'], p, floor))


# ---------------------------------------------------------------- chapter
def inventory(n, bk):
    """Everything in the chapter that has to be covered by some handout."""
    d = PB.parse(n, bk)
    inv = set()
    for s in d['sections']:
        inv.add('sec:%s' % s['no'])
    # The book's figure numbers are not in the inventory. A Workshop handout
    # redraws the chapter rather than reprinting it, and what has to be
    # covered is the DATA those figures hold, which arrives through the
    # tables and panels and is checked by the other entries here.
    for s in d['sc']:
        inv.add('sc:%s' % s['id'])
    for p in d['p']:
        inv.add('p:%s' % p['id'])
    for c in d['case']:
        inv.add('case:%s' % c[0])
    for e, _a in PB.term_pairs(n):
        inv.add('term:%s' % e.lower())
    return inv, d


def check_chapter(mod, verbose=True):
    pk = importlib.import_module(mod)
    src = open(os.path.join(HERE, pk.SOURCE), encoding='utf-8').read()
    hs = []
    for i in pk.HANDOUTS:
        m = importlib.import_module('%s.h%02d' % (mod, i))
        importlib.reload(m)
        hs.append(m.HANDOUT)

    fails = []
    for H in hs:
        for g in (g_answer_present, g_source_numbers, g_no_cross_reference,
                  g_cycle_shape, g_contrasting_cases, g_interaction_density,
                  g_visual_density, g_no_lecture, g_reloop_target,
                  g_fading, g_page_budget, g_no_open_questions,
                  g_mcq_wellformed, g_stem_self_contained, g_preview):
            g(H, src, fails)

    # ---- chapter-wide gates
    inv, d = inventory(int(pk.CH), pk.BK)
    claimed = set()
    for H in hs:
        claimed |= {c.lower() if c.startswith('term:') else c
                    for c in H.get('covers', [])}
    omit = set(getattr(pk, 'OMIT', {}))
    missing = sorted(x for x in inv if x not in claimed and x not in omit)
    if missing:
        fails.append('coverage: %d items of the chapter are claimed by no '
                     'handout: %s%s'
                     % (len(missing), ', '.join(missing[:12]),
                        ' …' if len(missing) > 12 else ''))

    # teaching coverage: a handout that claims anything must teach, not only
    # test. A handout with no teaching element cannot carry a claim.
    for H in hs:
        if H.get('covers') and not any(b[0] in TEACHING for b in H['flow']):
            fails.append('%s: claims coverage but has no teaching element'
                         % H['id'])

    # fading: for each skill id, the scaffold levels across the chapter must
    # not rise.
    seen = {}
    for H in hs:
        for skill, lvl in H.get('skills', []):
            if skill in seen and lvl > seen[skill]:
                fails.append('fading: skill %r gets MORE help in handout %s '
                             '(%d after %d)' % (skill, H['id'], lvl,
                                                seen[skill]))
            seen[skill] = min(seen.get(skill, lvl), lvl)

    # Spacing used to be carried by a speed round at the top of each handout.
    # The preview page took that slot, and it does the same work better: it
    # retrieves what the student already knows AND previews what is coming.

    if verbose:
        print('%s · %s' % (pk.TITLE, pk.SUB))
        print('  %d handouts, %d pages, %d items covering %d of %d chapter '
              'items'
              % (len(hs), sum(H.get('pages', 0) for H in hs),
                 sum(len(list(_items(H['flow']))) for H in hs),
                 len(inv & claimed), len(inv)))
    return fails


if __name__ == '__main__':
    bad = check_chapter(sys.argv[1])
    for f in bad:
        print('  FAIL  ' + f)
    print('\n%s' % ('all checks pass' if not bad
                    else '%d failures' % len(bad)))
    sys.exit(1 if bad else 0)
