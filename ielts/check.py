# -*- coding: utf-8 -*-
"""The unit gate for the IELTS books, written before the units.

It enforces what IELTS_Series_Plan.md promises and what the outline
specifies, so a unit cannot drift the way fifty-two outline units drifted off
their Listening coverage before anything was counting.

    python3 check.py 31-40
"""
import importlib
import re
import sys

# Per-volume text bands, from section 9.2 of the plan. A volume's texts are
# shorter and its scripts slower than the volume above it, and the ladder is
# the whole promise of the series, so it is gated rather than intended.
BANDS_BY_VOL = {
    # Volume 1 is the first sitting: five-paragraph academic passages of
    # about 480 words, Part 1 scripts of 220-300 and a Part 4 of 260-340,
    # which is the plan's own V1 row. Everything steps down from Volume 2
    # except the two productive bands, which cannot: a model has to satisfy
    # the rubric at any band, so Task 1 still starts at 155 words and Task 2
    # at 255, above the floor the instructions demand.
    1: {'gt_short': (110, 185), 'gt_work': (175, 250), 'long': (290, 390),
        'acad': (400, 510), 'l1': (170, 245), 'l2': (180, 255),
        'l3': (210, 295), 'l4': (255, 345), 'model': (155, 255),
        'essay': (255, 330),
        # The stamina read. One a book in Volumes 1 and 2, deliberately
        # longer than anything else in the book, because a candidate whose
        # longest read is 500 words meets 900 for the first time in the
        # exam hall. It is a length band of its own so that the ordinary
        # academic band can stay where the plan put it.
        'stamina': (580, 700)},
    # Volume 2 is the first book below Volume 3 to be written, so its bands
    # are a step down from Volume 3's and sit inside the plan's own V1-V2
    # row: short GT 130-180, workplace 200-280, long 320-420, academic
    # 420-560, Part 4 script 300-400. The two productive bands are the
    # exception: a model answer has to satisfy the rubric whatever the
    # band on the cover, so Task 1 starts at 155 words and Task 2 at 255,
    # both above the floor the instructions demand.
    2: {'gt_short': (130, 205), 'gt_work': (205, 290), 'long': (340, 450),
        'acad': (450, 580), 'l1': (200, 275), 'l2': (210, 285),
        'l3': (250, 330), 'l4': (300, 400), 'model': (155, 260),
        'essay': (255, 340), 'stamina': (660, 790)},
    3: {'gt_short': (150, 240), 'gt_work': (250, 340), 'long': (420, 560),
        'acad': (600, 760), 'l1': (240, 320), 'l2': (250, 330),
        'l3': (300, 380), 'l4': (350, 430), 'model': (140, 300),
        'essay': (240, 390)},
    4: {'gt_short': (180, 260), 'gt_work': (280, 380), 'long': (480, 640),
        'acad': (620, 800), 'l1': (260, 340), 'l2': (280, 360),
        'l3': (330, 400), 'l4': (380, 460), 'model': (150, 320),
        'essay': (260, 430)},
    5: {'gt_short': (190, 285), 'gt_work': (300, 400), 'long': (520, 700),
        'acad': (780, 960), 'l1': (280, 360), 'l2': (300, 390),
        'l3': (350, 430), 'l4': (400, 490), 'model': (160, 340),
        'essay': (280, 470)},
    6: {'gt_short': (200, 300), 'gt_work': (320, 430), 'long': (560, 760),
        'acad': (860, 1000), 'l1': (290, 380), 'l2': (290, 400),
        'l3': (360, 450), 'l4': (400, 510), 'model': (170, 360),
        'essay': (300, 500)},
    # The two Foundation books, numbered 7 and 8 here because the volume
    # key is also the arithmetic that maps a unit number to a book; they
    # sit BELOW Volume 1 on the ladder whatever their key says. Lengths
    # are the plan's own Foundation rows: a 210-word passage in three
    # paragraphs of about 70 for Foundation 1, 300 in four of about 75
    # for Foundation 2, with Part 1 scripts of 120-160 and 160-220.
    #
    # These are the one place the productive bands DO step down. The rule
    # everywhere above is that a model must satisfy the rubric at any
    # cover band, so Task 1 never starts below 155 words. It does not
    # apply here, because neither Foundation book prepares a candidate to
    # sit the paper and Foundation 1 says so on its own cover. Asking an
    # A1 writer for 150 words teaches padding, which is the one habit the
    # graded books then have to undo.
    7: {'gt_short': (55, 100), 'gt_work': (70, 125), 'long': (110, 175),
        'acad': (170, 250), 'l1': (115, 165), 'l2': (125, 180),
        'l3': (135, 195), 'l4': (145, 205), 'model': (80, 150),
        'essay': (130, 210)},
    8: {'gt_short': (90, 150), 'gt_work': (120, 195), 'long': (180, 265),
        'acad': (250, 355), 'l1': (155, 225), 'l2': (170, 240),
        'l3': (185, 255), 'l4': (195, 270), 'model': (110, 200),
        'essay': (185, 285)},
}


def vol_of(n):
    """Which book a unit MODULE number belongs to.

    Ten units a book from 21, so the arithmetic generalises in both
    directions: units 11-20 are Volume 2, units 1-10 Volume 1. The floor
    was once a literal 3, written when Volume 3 was the lowest book that
    existed, and it silently reported every Volume 2 unit as Volume 3.

    The two Foundation books continue upwards: modules 61-70 are
    Foundation 1 (key 7) and 71-80 Foundation 2 (key 8). Their units
    print as 1-10, because each Foundation book stands alone, so this
    takes the MODULE number and never the unit's own n.
    """
    return max(min(BANDS_BY_VOL),
               min(max(BANDS_BY_VOL), 3 + (n - 21) // 10))


# the module-level name the rest of this file uses; set per unit as it runs
BANDS = BANDS_BY_VOL[4]

# the timed Reading paper: per passage, and for the paper as a whole. The
# real Academic paper runs 2,150-2,750 words; a volume below the target band
# sits at the bottom of that range and reaches it at Volume 5.
PAPER_BY_VOL = {1: dict(passage=(430, 580), total=(1400, 1700)),
                2: dict(passage=(520, 700), total=(1650, 2000)),
                3: dict(passage=(620, 820), total=(1950, 2350)),
                4: dict(passage=(700, 950), total=(2150, 2750)),
                5: dict(passage=(760, 1000), total=(2350, 2850)),
                6: dict(passage=(820, 1050), total=(2550, 3000)),
                # The Foundation progress tests. They are the real paper's
                # shape at the book's own length, not the real paper: a
                # candidate who cannot yet read 2,150 words learns nothing
                # from failing to. Reading runs 20 questions in Foundation
                # 1 and 24 in Foundation 2, Listening the same, so the
                # answer sheet still teaches transfer and the clock still
                # teaches pace.
                7: dict(passage=(180, 265), total=(570, 760),
                        qs=(6, 8), total_q=20, litems=5),
                8: dict(passage=(250, 360), total=(800, 1060),
                        qs=(7, 9), total_q=24, litems=6)}
MIN_WHY = 30            # an explanation shorter than this explains nothing
MAX_UNTAUGHT = 14       # untaught word types in one academic passage
MAX_ANSWER = 3          # the most generous rubric the real paper uses is
                        # NO MORE THAN THREE WORDS AND/OR A NUMBER, so three
                        # is the ceiling and the block's own rubric states
                        # the true limit for its answers
MIN_WRONG = 25          # a line that says why a wrong option is wrong
SPEAK_FLOOR = 12.0      # per cent of a unit's teaching text

# The Part 2 long turn is the one thing a candidate must do alone for two
# minutes, and the model has to be the length of two minutes of speech at
# the level the book is written for - not one length for the whole series.
# A window, because a model written to a word count reads like one.
LONGTURN_BY_VOL = {7: (130, 180), 8: (150, 200), 1: (170, 220),
                   2: (185, 240), 3: (205, 265), 4: (225, 285),
                   5: (240, 300), 6: (255, 320)}
# A Part 3 exchange: the examiner's follow-up and an answer that earns the
# follow-up. From Volume 3, where Part 3 becomes the part that decides the
# band; four exchanges in the two hardest books.
FOLLOWUP_FROM = 3
FOLLOWUP_PAIRS = {3: 3, 4: 3, 5: 4, 6: 4}
MIN_FOLLOWUP_A = 28     # words in a Part 3 answer worth printing
MIN_SOUNDS = 4          # lines on the pronunciation and fluency page

# The task types the series had never used, and the verification type it
# taught once and then dropped.
#
# Matching sentence endings is one of the eleven Reading task types and is
# the one candidates most often meet for the first time in the exam. A
# lettered bank with more endings than stems, so that elimination does not
# solve it.
#
# Plan and map labelling exists in these books as a READING support for
# Task 1, and in the real paper it is a LISTENING task with a lettered
# plan, which is a different skill: you are tracking a speaker's route in
# real time. One set per book from Volume 3.
#
# True/False/Not Given and Yes/No/Not Given are different tasks. The first
# asks whether the passage states a fact, the second whether the writer
# holds a view, and a candidate who has only done one of them loses marks
# on the other. Volume 1 taught T/F/NG 84 times and Volumes 2 to 6 taught
# it in their units not once.
MIN_BANK_SPARE = 2      # endings in the bank beyond the number of stems
MIN_ENDINGS = 4         # stems in a matching-sentence-endings set
TFNG_FLOOR = 8          # T/F/NG items in a graded book's units
YNNG_FLOOR = 8          # Y/N/NG items in a graded book's units
TFNG_FOUNDATION = 6     # the Foundation books' first T/F/NG items
# The last thing Foundation 2 asks for is one essay at the real paper's
# length. Everything before it is shorter on purpose, because asking an A2
# writer for 250 words teaches padding; the final task exists so that
# nobody meets the real instruction for the first time in Volume 1.
CALIBRATION_WORDS = 250
TFNG = ['True', 'False', 'Not Given']
YNNG = ['Yes', 'No', 'Not Given']

# Error correction. One per unit, in the grammar slot: a short paragraph
# written at about band 6 with three faults planted in it, and for each
# fault the correction and the reason. Recognising your own error in
# somebody else's sentence is the step between knowing a rule and using it.
FIX_FAULTS = 3
FIX_TEXT = (40, 130)    # words in the faulty paragraph
MIN_FIX_WHY = 25

# Exam-length reading. The real Academic paper puts 2,150 to 2,750 words in
# front of a candidate in sixty minutes, and the single thing that defeats
# people is not vocabulary but the third passage. A book whose longest read
# is 650 words has never asked for that, so from Volume 3 up a book must
# carry at least six passages at exam length, and Volumes 1 and 2 must each
# carry one stamina read, which has a band of its own above everything else
# in the book.
LONG_READ = 700
MIN_LONG_READS = 6      # per book, Volume 3 and above
STAMINA_FROM = 1        # Volumes 1 and 2 carry one each
STAMINA_TO = 2

# Phases turn these on as the content lands, so the gate is written first
# and goes green when the work it governs is done. Set by main() from the
# file PHASE, which is the single place a phase is declared finished.
PHASE = dict(rubric=True, wrongs=4)    # wrongs: 0 none, 3 three-option, 4 all


def _rubric_ok(blk):
    """The exercise prints a rubric derived from its own answers.

    book.rubric() builds it, so nothing is authored and nothing can drift;
    this proves every block yields one.
    """
    import book
    return bool(book.rubric(blk).strip())


def _limit_for(items):
    """The rubric a block's own answers imply."""
    gaps = [str(it[2]) for it in items if not it[1]]
    if not gaps:
        return None
    words = max(len(a.split()) for a in gaps)
    anynum = any(any(ch.isdigit() for ch in a) for a in gaps)
    allnum = all(any(ch.isdigit() for ch in a) for a in gaps)
    if allnum:
        return 'Write A NUMBER for each answer.'
    if words <= 1:
        return ('Write ONE WORD AND/OR A NUMBER for each answer.' if anynum
                else 'Write ONE WORD ONLY for each answer.')
    cap = 'TWO' if words <= 2 else 'THREE'
    return ('Write NO MORE THAN %s WORDS AND/OR A NUMBER for each answer.' % cap
            if anynum else 'Write NO MORE THAN %s WORDS for each answer.' % cap)


def wc(paras):
    return sum(len(p.split()) for p in paras)


def _items_ok(items, tag, n_lo, n_hi, out, bank=None):
    if not (n_lo <= len(items) <= n_hi):
        out.append('%s: %d items, want %d-%d' % (tag, len(items), n_lo, n_hi))
    pos = set()
    lettered = any(it[1] for it in items)
    if bank is not None:
        if len(bank) < len(items) + MIN_BANK_SPARE:
            out.append('%s: %d items from a bank of %d, want at least %d '
                       'spare' % (tag, len(items), len(bank),
                                  MIN_BANK_SPARE))
        seen = []
        for i, it in enumerate(items):
            a = str(it[2]).strip()
            if not re.fullmatch(r'[A-J]', a):
                out.append('%s item %d: answer %r is not a bank letter'
                           % (tag, i + 1, a))
            elif 'ABCDEFGHIJ'.index(a) >= len(bank):
                out.append('%s item %d: answer %s is past the end of the '
                           'bank' % (tag, i + 1, a))
            elif a in seen:
                out.append('%s item %d: letter %s used twice'
                           % (tag, i + 1, a))
            else:
                seen.append(a)
    for i, it in enumerate(items):
        stem, opts, ans, why = it[0], it[1], it[2], it[3]
        if opts:
            if not (0 <= ans < len(opts)):
                out.append('%s item %d: answer out of range' % (tag, i + 1))
            else:
                pos.add(ans)
            # the promise on the answer-key page: every wrong option explained
            want = PHASE['wrongs']
            if want and (want == 4 or len(opts) <= 3):
                wrongs = it[4] if len(it) > 4 else {}
                for k in range(len(opts)):
                    if k == ans:
                        continue
                    line = (wrongs or {}).get(k, '')
                    if len(line) < MIN_WRONG:
                        out.append('%s item %d: option %s has no line'
                                   % (tag, i + 1, 'ABCDEFGH'[k]))
        else:
            a = str(ans).strip()
            # A gap answer that is a bare letter is a question whose option
            # list went missing: Foundation 2 unit 6 shipped two of them.
            # A legitimate answer can still BE a letter (band C, zone D),
            # so only a block that letters its other items is suspect.
            if bank is None and lettered and re.fullmatch(r'[A-H]', a):
                out.append('%s item %d: answer %r is a bare letter but the '
                           'item shows no options' % (tag, i + 1, a))
            if bank is None and len(a.split()) > MAX_ANSWER:
                out.append('%s item %d: answer is %d words, the paper allows '
                           '%d' % (tag, i + 1, len(a.split()), MAX_ANSWER))
        if len(why) < MIN_WHY:
            out.append('%s item %d: explanation %d chars, want %d+'
                       % (tag, i + 1, len(why), MIN_WHY))
    return pos


def speak_share(U):
    """What proportion of a unit's teaching text is the speaking strand."""
    rd = li = wr = sp = gv = 0
    for c in U['cycles']:
        for r in c['read']:
            rd += wc(r['paras'])
        for l in c['listen']:
            li += sum(len(t.split()) for _, t in l['script'])
        for w in c['write']:
            wr += sum(len(x.split()) for x in w.get('model', []))
            wr += sum(len(x.split()) for x in w.get('notes', []))
            for m2 in w.get('model65', []):
                wr += len(m2.split())
        s = c.get('speak') or {}
        sp += len(s.get('intro', '').split())
        sp += sum(len(q.split()) for q in s.get('qs', []))
        sp += sum(len(t.split()) for _, t in s.get('shape', []))
        sp += len(' '.join(s.get('longturn', [])).split())
        sp += sum(len(x.split()) for x in s.get('sounds', []))
        sp += sum(len(a.split()) + len(b.split())
                  for a, b in s.get('followup', []))
        g = c.get('gram') or {}
        gv += len(g.get('explain', '').split())
        gv += sum(len(x.split()) for x in g.get('examples', []))
        fx = g.get('fix')
        if fx:
            gv += len(fx['text'].split())
            gv += sum(len(a.split()) + len(b.split()) + len(c_.split())
                      for a, b, c_ in fx['faults'])
        gv += sum(len(d.split()) for _, d in c.get('vocab', []))
    tot = rd + li + wr + sp + gv
    return 100.0 * sp / tot if tot else 0.0


def check_unit(U, out, heads):
    global BANDS
    n = U['n']
    # The unit says which book it belongs to. Deriving it from n instead
    # works only while unit numbers run straight through the series, and
    # the Foundation books number their own units 1-10.
    BANDS = BANDS_BY_VOL[U.get('vol') or vol_of(n)]
    tag = 'u%d' % n
    cyc = U['cycles']
    if len(cyc) != 5:
        out.append('%s: %d cycles, want 5' % (tag, len(cyc)))
    lparts, sparts, forks = set(), set(), set()
    allpos = set()
    for ci, c in enumerate(cyc, 1):
        ct = '%s c%d' % (tag, ci)
        if not c.get('read'):
            out.append('%s: no reading' % ct)
        for r in c['read']:
            band = BANDS.get(r['band'])
            if band is None:
                out.append('%s: unknown band %r' % (ct, r['band']))
            else:
                w = wc(r['paras'])
                if not (band[0] <= w <= band[1]):
                    out.append('%s "%s": %d words, want %d-%d'
                               % (ct, r['heading'][:34], w, band[0], band[1]))
            allpos |= _items_ok(r['items'], '%s %s' % (ct, r['heading'][:22]),
                                3, 8, out)
            if PHASE['rubric'] and not _rubric_ok(r):
                out.append('%s "%s": no rubric can be derived for the '
                           'exercise' % (ct, r['heading'][:30]))
        for l in c['listen']:
            m = re.match(r'Part (\d)', l['part'])
            if m:
                lparts.add(int(m.group(1)))
            band = BANDS.get(l['band'])
            if band:
                w = sum(len(t.split()) for _, t in l['script'])
                if not (band[0] <= w <= band[1]):
                    out.append('%s listening "%s": %d words, want %d-%d'
                               % (ct, l['heading'][:30], w, band[0], band[1]))
            allpos |= _items_ok(l['items'], '%s %s' % (ct, l['heading'][:22]),
                                3, 8, out, l.get('bank'))
            if PHASE['rubric'] and not _rubric_ok(l):
                out.append('%s listening "%s": no rubric can be derived'
                           % (ct, l['heading'][:30]))
        sp = c['speak']
        for m in re.finditer(r'Part (\d)', sp['part']):
            sparts.add(int(m.group(1)))
        if len(sp['qs']) < 3:
            out.append('%s: speaking has %d questions, want 3+' % (ct, len(sp['qs'])))
        # The answer shape is drawn as a figure by book.py, so a cycle
        # missing it crashes the build rather than printing a blank page.
        # Volume 6 unit 54 shipped without one; this is why.
        shape = sp.get('shape') or []
        if len(shape) < 3:
            out.append('%s: answer shape has %d moves, want 3+'
                       % (ct, len(shape)))
        for mv, line in shape:
            if mv not in ('answer', 'support', 'follow-up'):
                out.append('%s: unknown move %r in the answer shape'
                           % (ct, mv))
            if len(line) < 12:
                out.append('%s: a shape line of %d chars says nothing'
                           % (ct, len(line)))
        if sp.get('sounds') is not None:
            snd = sp['sounds']
            if len(snd) < MIN_SOUNDS:
                out.append('%s: the sounds page has %d lines, want %d+'
                           % (ct, len(snd), MIN_SOUNDS))
            for ln in snd:
                if len(ln) < 30:
                    out.append('%s: a sounds line of %d chars says nothing'
                               % (ct, len(ln)))
        if sp.get('followup') is not None:
            for qi, qa in enumerate(sp['followup'], 1):
                if len(qa) != 2:
                    out.append('%s: follow-up %d is not a question and an '
                               'answer' % (ct, qi))
                    continue
                if len(qa[0].split()) < 5:
                    out.append('%s: follow-up %d asks almost nothing'
                               % (ct, qi))
                if len(qa[1].split()) < MIN_FOLLOWUP_A:
                    out.append('%s: follow-up %d answered in %d words, want '
                               '%d+' % (ct, qi, len(qa[1].split()),
                                        MIN_FOLLOWUP_A))
        for w in c['write']:
            if w.get('fork'):
                forks.add(w['fork'])
            if w.get('model'):
                mw = wc(w['model'])
                lo, hi = BANDS[w.get('wband', 'model')]
                if not (lo <= mw <= hi):
                    out.append('%s model "%s": %d words, want %d-%d'
                               % (ct, w['heading'][:30], mw, lo, hi))
        for f in ('gram', 'vocab', 'expr', 'trans'):
            if not c.get(f):
                out.append('%s: no %s' % (ct, f))
        if not (1 <= c.get('step', 0) <= 5):
            out.append('%s: scaffolding step %r' % (ct, c.get('step')))
        for wd, gl in c['vocab']:
            k = wd.lower()
            if k in heads:
                out.append('%s: "%s" already taught in unit %d' % (ct, wd, heads[k]))
            heads[k] = n
    if lparts != {1, 2, 3, 4}:
        out.append('%s: Listening Parts %s, missing %s'
                   % (tag, sorted(lparts), sorted({1, 2, 3, 4} - lparts)))
    if sparts != {1, 2, 3}:
        out.append('%s: Speaking Parts %s, missing %s'
                   % (tag, sorted(sparts), sorted({1, 2, 3} - sparts)))
    if forks != {'A', 'GT'}:
        out.append('%s: Task 1 forks %s, want both' % (tag, sorted(forks) or 'none'))
    if len(allpos) < 3:
        out.append('%s: answers use only %d distinct positions, want 3+'
                   % (tag, len(allpos)))
    if not U.get('technique') or not U.get('outlining'):
        out.append('%s: missing a strand' % tag)
    # The three parts of the speaking strand, per unit.
    vol = U.get('vol') or vol_of(n)
    lt = [c['speak'].get('longturn') for c in U['cycles']
          if c['speak'].get('longturn')]
    if len(lt) != 1:
        out.append('%s: %d long-turn models, want exactly 1'
                   % (tag, len(lt)))
    else:
        lw = len(' '.join(lt[0]).split())
        lo, hi = LONGTURN_BY_VOL[vol]
        if not (lo <= lw <= hi):
            out.append('%s: the long turn is %d words, want %d-%d'
                       % (tag, lw, lo, hi))
    fixes = [c['gram']['fix'] for c in U['cycles'] if c['gram'].get('fix')]
    if len(fixes) != 1:
        out.append('%s: %d error-correction sets, want exactly 1'
                   % (tag, len(fixes)))
    else:
        fx = fixes[0]
        fw = len(fx['text'].split())
        if not (FIX_TEXT[0] <= fw <= FIX_TEXT[1]):
            out.append('%s: the faulty paragraph is %d words, want %d-%d'
                       % (tag, fw, FIX_TEXT[0], FIX_TEXT[1]))
        if len(fx['faults']) != FIX_FAULTS:
            out.append('%s: %d planted faults, want %d'
                       % (tag, len(fx['faults']), FIX_FAULTS))
        for fi, (wrong, right, why) in enumerate(fx['faults'], 1):
            if wrong not in fx['text']:
                out.append('%s: fault %d (%r) is not in the paragraph'
                           % (tag, fi, wrong[:40]))
            if wrong == right:
                out.append('%s: fault %d corrects nothing' % (tag, fi))
            if len(why) < MIN_FIX_WHY:
                out.append('%s: fault %d explained in %d chars, want %d+'
                           % (tag, fi, len(why), MIN_FIX_WHY))
    snd = [c for c in U['cycles'] if c['speak'].get('sounds')]
    if len(snd) != 1:
        out.append('%s: %d sounds pages, want exactly 1' % (tag, len(snd)))
    if vol in FOLLOWUP_PAIRS and vol >= FOLLOWUP_FROM:
        fu = [c['speak'].get('followup') for c in U['cycles']
              if c['speak'].get('followup')]
        if len(fu) != 1:
            out.append('%s: %d Part 3 follow-up sets, want exactly 1'
                       % (tag, len(fu)))
        elif len(fu[0]) < FOLLOWUP_PAIRS[vol]:
            out.append('%s: %d follow-up exchanges, want %d'
                       % (tag, len(fu[0]), FOLLOWUP_PAIRS[vol]))
    # Speaking was 6.2 to 13.6 per cent of a unit and falling as the books
    # got harder: flat at about 5,000 words a book while reading went from
    # 7,000 to 29,000. The floor stops it drifting back.
    sh = speak_share(U)
    if sh < SPEAK_FLOOR:
        out.append('%s: speaking is %.1f%% of the unit, want %.1f%%+'
                   % (tag, sh, SPEAK_FLOOR))


def check_long_reads(vol, units, out):
    """Exam-length reading inside the book, not only in the timed paper."""
    tag = 'Foundation %d' % (vol - 6) if vol > 6 else 'Volume %d' % vol
    if vol > 6:
        return                      # neither Foundation book sits the paper
    longs, stam = [], []
    for U in units:
        for c in U['cycles']:
            for r in c['read']:
                w = sum(len(p.split()) for p in r['paras'])
                if w >= LONG_READ:
                    longs.append((U['n'], r['heading'][:30], w))
                if r['band'] == 'stamina':
                    stam.append((U['n'], w))
    if STAMINA_FROM <= vol <= STAMINA_TO:
        if len(stam) != 1:
            out.append('%s: %d stamina reads, want exactly 1'
                       % (tag, len(stam)))
    elif stam:
        out.append('%s: a stamina read, which belongs in Volumes 1-2 only'
                   % tag)
    else:
        if len(longs) < MIN_LONG_READS:
            out.append('%s: %d reads of %d+ words, want %d+'
                       % (tag, len(longs), LONG_READ, MIN_LONG_READS))


def check_types(vol, units, out):
    """The three task types the series was missing, per book."""
    tag = 'Foundation %d' % (vol - 6) if vol > 6 else 'Volume %d' % vol
    ends = lmap = tf = yn = 0
    for U in units:
        for c in U['cycles']:
            for r in c['read']:
                if r.get('bank') and 'sentence endings' in r['task']:
                    if len(r['items']) >= MIN_ENDINGS:
                        ends += 1
                for it in r['items']:
                    if it[1] == TFNG:
                        tf += 1
                    elif it[1] == YNNG:
                        yn += 1
            for l in c['listen']:
                if l.get('bank') and ('Plan labelling' in l['task']
                                      or 'Map labelling' in l['task']):
                    lmap += 1
                for it in l['items']:
                    if it[1] == TFNG:
                        tf += 1
                    elif it[1] == YNNG:
                        yn += 1
    if vol <= 6:
        if not ends:
            out.append('%s: no matching-sentence-endings set of %d+ items'
                       % (tag, MIN_ENDINGS))
        if vol >= 3 and not lmap:
            out.append('%s: no Listening plan or map labelling set with a '
                       'lettered bank' % tag)
        if tf < TFNG_FLOOR:
            out.append('%s: %d True/False/Not Given items in its units, '
                       'want %d+' % (tag, tf, TFNG_FLOOR))
        if yn < YNNG_FLOOR:
            out.append('%s: %d Yes/No/Not Given items in its units, want '
                       '%d+' % (tag, yn, YNNG_FLOOR))
    else:
        if tf < TFNG_FOUNDATION:
            out.append('%s: %d True/False/Not Given items, want %d+'
                       % (tag, tf, TFNG_FOUNDATION))
        if vol == 8:
            cal = [w for U in units for c in U['cycles'] for w in c['write']
                   if '%d words' % CALIBRATION_WORDS in (w.get('prompt') or '')]
            if len(cal) != 1:
                out.append('%s: %d calibration tasks at the real paper\'s '
                           'length, want exactly 1' % (tag, len(cal)))
            else:
                mw = wc(cal[0].get('model') or [])
                if mw < CALIBRATION_WORDS:
                    out.append('%s: the calibration model is %d words, want '
                               '%d+' % (tag, mw, CALIBRATION_WORDS))


def check_numbering(U, out):
    """The Questions a-b headings must match the running count in the unit."""
    tag = 'u%d' % U['n']
    n = 1
    for ci, c in enumerate(U['cycles'], 1):
        for blk in list(c['read']) + list(c['listen']):
            m = re.match(r'Questions (\d+)-(\d+)$', blk.get('qtype', ''))
            if not m:
                out.append('%s c%d "%s": qtype %r is not "Questions a-b"'
                           % (tag, ci, blk['heading'][:24], blk.get('qtype')))
                continue
            a, b = int(m.group(1)), int(m.group(2))
            k = len(blk['items'])
            if a != n or b != n + k - 1:
                out.append('%s c%d "%s": heading says %d-%d, prints %d-%d'
                           % (tag, ci, blk['heading'][:24], a, b, n,
                              n + k - 1))
            n += k


def check_paper(P, out):
    global BANDS
    BANDS = BANDS_BY_VOL[P['vol']]
    """The timed paper: shape, length, numbering and answer spread."""
    tag = 'paper%s%s' % (P['vol'], P.get('form', ''))
    ps = P['passages']
    if len(ps) != 3:
        out.append('%s: %d passages, want 3' % (tag, len(ps)))
    total = 0
    nxt = 1
    for x in ps:
        w = sum(len(t.split()) for t in x['paras'])
        plo, phi = PAPER_BY_VOL[P['vol']]['passage']
        if not plo <= w <= phi:
            out.append('%s p%d "%s": %d words, want %d-%d'
                       % (tag, x['no'], x['heading'][:28], w, plo, phi))
        if x['first'] != nxt:
            out.append('%s p%d starts at %d, want %d'
                       % (tag, x['no'], x['first'], nxt))
        n = len(x['items'])
        qlo, qhi = PAPER_BY_VOL[P['vol']].get('qs', (12, 14))
        if not qlo <= n <= qhi:
            out.append('%s p%d: %d questions, want %d-%d'
                       % (tag, x['no'], n, qlo, qhi))
        for i, it in enumerate(x['items']):
            if len(it) not in (4, 5):
                out.append('%s p%d item %d: malformed' % (tag, x['no'], i + 1))
                continue
            if len(it[3]) < MIN_WHY:
                out.append('%s p%d item %d: explanation %d chars, want %d+'
                           % (tag, x['no'], x['first'] + i, len(it[3]),
                              MIN_WHY))
        nxt += n
        total += n
    want_total = PAPER_BY_VOL[P['vol']].get('total_q', 40)
    if total != want_total:
        out.append('%s: %d questions in total, want %d'
                   % (tag, total, want_total))
    words = sum(sum(len(t.split()) for t in x['paras']) for x in ps)
    tlo, thi = PAPER_BY_VOL[P['vol']]['total']
    if not tlo <= words <= thi:
        out.append('%s: %d words in total, want %d-%d'
                   % (tag, words, tlo, thi))
    spread = set()
    for x in ps:
        for it in x['items']:
            if it[1]:
                spread.add(it[2])
    if len(spread) < 3:
        out.append('%s: answers use only %d positions' % (tag, len(spread)))


def check_lpaper(L, out):
    """The timed Listening paper: four parts, ten questions each, 1-40."""
    global BANDS
    BANDS = BANDS_BY_VOL[L['vol']]
    tag = 'lpaper%s%s' % (L['vol'], L.get('form', ''))
    parts = L['parts']
    if len(parts) != 4:
        out.append('%s: %d parts, want 4' % (tag, len(parts)))
    want_parts = ['Part 1', 'Part 2', 'Part 3', 'Part 4']
    got_parts = [p.get('part') for p in parts]
    if got_parts != want_parts:
        out.append('%s: parts are %s, want %s' % (tag, got_parts, want_parts))
    nxt, total = 1, 0
    for p in parts:
        w = sum(len(t.split()) for _, t in p['script'])
        lo, hi = BANDS[p['band']]
        if not lo <= w <= hi:
            out.append('%s %s "%s": %d words, want %d-%d'
                       % (tag, p['part'], p['heading'][:26], w, lo, hi))
        if p['first'] != nxt:
            out.append('%s %s starts at %d, want %d'
                       % (tag, p['part'], p['first'], nxt))
        n = len(p['items'])
        per = PAPER_BY_VOL[L['vol']].get('litems', 10)
        if n != per:
            out.append('%s %s: %d questions, want %d'
                       % (tag, p['part'], n, per))
        for i, it in enumerate(p['items']):
            if len(it) not in (4, 5) or len(it[3]) < MIN_WHY:
                out.append('%s %s item %d: explanation too short'
                           % (tag, p['part'], p['first'] + i))
        nxt += n
        total += n
    want_total = PAPER_BY_VOL[L['vol']].get('litems', 10) * 4
    if total != want_total:
        out.append('%s: %d questions in total, want %d'
                   % (tag, total, want_total))


def check_wpaper(Wp, out):
    """The timed Writing paper: both Task 1 forks, one Task 2, models and
    marking checks on every task."""
    global BANDS
    BANDS = BANDS_BY_VOL[Wp['vol']]
    tag = 'wpaper%s' % Wp['vol']
    ts = Wp['tasks']
    if len(ts) != 3:
        out.append('%s: %d tasks, want 3 (Task 1 Academic, Task 1 GT, '
                   'Task 2)' % (tag, len(ts)))
    forks = [t.get('fork') for t in ts]
    if sorted(x for x in forks if x) != ['A', 'GT']:
        out.append('%s: Task 1 forks are %s, want one A and one GT'
                   % (tag, forks))
    nxt = 1
    for t in ts:
        if t['no'] != nxt:
            out.append('%s task %d numbered %d' % (tag, nxt, t['no']))
        nxt += 1
        band = 'essay' if t['task'].startswith('Task 2') else 'model'
        w = wc(t['model'])
        lo, hi = BANDS[band]
        if not lo <= w <= hi:
            out.append('%s "%s" model: %d words, want %d-%d'
                       % (tag, t['heading'][:30], w, lo, hi))
        # The rubric floor is a floor for a candidate sitting the paper.
        # Neither Foundation book prepares one to sit it, and their bands
        # above say so, so the floor is not applied there.
        floor = (250 if band == 'essay' else 150) if Wp['vol'] <= 6 else 0
        if w < floor:
            out.append('%s "%s" model is %d words, under the %d the rubric '
                       'demands' % (tag, t['heading'][:30], w, floor))
        if len(t['notes']) < 3:
            out.append('%s "%s": %d notes, want 3+'
                       % (tag, t['heading'][:30], len(t['notes'])))
        if len(t['checks']) < 4:
            out.append('%s "%s": %d marking checks, want 4+'
                       % (tag, t['heading'][:30], len(t['checks'])))
        for i, c in enumerate(t['checks'], 1):
            if len(c) < MIN_WHY:
                out.append('%s "%s" check %d: %d chars, want %d+'
                           % (tag, t['heading'][:30], i, len(c), MIN_WHY))


def check_spaper(Sp, out):
    """The timed Speaking paper: three parts in order, a cue card on Part 2,
    an answer shape and marking checks on each."""
    tag = 'spaper%s' % Sp['vol']
    parts = Sp['parts']
    want = ['Part 1', 'Part 2', 'Part 3']
    got = [p.get('part') for p in parts]
    if got != want:
        out.append('%s: parts are %s, want %s' % (tag, got, want))
    for i, pt in enumerate(parts, 1):
        nm = pt.get('part', '?')
        if pt['no'] != i:
            out.append('%s %s numbered %d, want %d' % (tag, nm, pt['no'], i))
        if (nm == 'Part 2') != bool(pt.get('cue')):
            out.append('%s %s: a cue card belongs on Part 2 and only there'
                       % (tag, nm))
        lo = 4 if nm == 'Part 1' else 3
        if len(pt['qs']) < lo:
            out.append('%s %s: %d questions, want %d+'
                       % (tag, nm, len(pt['qs']), lo))
        shape = pt.get('shape') or []
        if len(shape) < (3 if nm == 'Part 1' else 5):
            out.append('%s %s: answer shape has %d moves, want %d+'
                       % (tag, nm, len(shape),
                          3 if nm == 'Part 1' else 5))
        for mv, line in shape:
            if mv not in ('answer', 'support', 'follow-up'):
                out.append('%s %s: unknown move %r in the answer shape'
                           % (tag, nm, mv))
            if len(line) < 12:
                out.append('%s %s: a shape line of %d chars says nothing'
                           % (tag, nm, len(line)))
        if len(pt['notes']) < 3:
            out.append('%s %s: %d notes, want 3+' % (tag, nm, len(pt['notes'])))
        if len(pt['checks']) < 4:
            out.append('%s %s: %d marking checks, want 4+'
                       % (tag, nm, len(pt['checks'])))
        for j, c in enumerate(pt['checks'], 1):
            if len(c) < MIN_WHY:
                out.append('%s %s check %d: %d chars, want %d+'
                           % (tag, nm, j, len(c), MIN_WHY))


def seam(heads, ns, out):
    """A head word taught in one volume must not be re-taught in another.

    Within a volume check_unit already forbids repeats. This catches the
    seam between volumes, where a student who has done Volume 3 would
    otherwise meet the same word presented as new in Volume 4.
    """
    this = vol_of(ns[0])
    for other in sorted(BANDS_BY_VOL):
        if other == this:
            continue
        theirs = {}
        # The first unit of volume v. This was once written as a pair of
        # two-way conditionals, which silently gave every volume past the
        # fourth volume 4's own units: `check.py 31-40` then reported unit 39
        # colliding with itself under the name of Volume 5.
        lo = 21 + (other - 3) * 10
        for n in range(lo, lo + 10):
            try:
                m = importlib.import_module('content.u%02d' % n)
            except ModuleNotFoundError:
                continue
            importlib.reload(m)
            for c in m.UNIT['cycles']:
                for w, _ in c['vocab']:
                    theirs.setdefault(w, n)
        for w, where in sorted(heads.items()):
            if w in theirs:
                out.append('seam: "%s" taught in unit %s and again in unit %d '
                           '(Volume %d)' % (w, where, theirs[w], other))


def main(argv):
    spec = argv[0] if argv else '31-40'
    a, _, b = spec.partition('-')
    ns = range(int(a), int(b or a) + 1)
    out, heads = [], {}
    got = 0
    for n in ns:
        try:
            m = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            continue
        importlib.reload(m)
        got += 1
        check_unit(m.UNIT, out, heads)
        check_numbering(m.UNIT, out)
    if got:
        seam(heads, list(ns), out)
    # An explanation written twice was not written for its item: Volume 2
    # shipped one sentence five times, each on question 16 of a different
    # unit.
    seen = {}
    for n in ns:
        try:
            m = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            continue
        for ci, c in enumerate(m.UNIT['cycles'], 1):
            for blk in list(c['read']) + list(c['listen']):
                for it in blk['items']:
                    seen.setdefault(it[3], []).append('u%d c%d'
                                                      % (m.UNIT['n'], ci))
    for why, where in sorted(seen.items()):
        if len(where) > 1:
            out.append('explanation used %d times (%s): %r'
                       % (len(where), ', '.join(where[:4]), why[:52]))
    vol = vol_of(ns[0])
    if got:
        us = []
        for n in ns:
            try:
                us.append(importlib.import_module('content.u%02d' % n).UNIT)
            except ModuleNotFoundError:
                continue
        check_long_reads(vol, us, out)
        check_types(vol, us, out)
    npaper = 0
    for prefix, fn, attr in (('paper', check_paper, 'PAPER'),
                             ('lpaper', check_lpaper, 'LPAPER')):
        for suf in ('', 'a', 'b'):
            try:
                m = importlib.import_module('content.%s%d%s'
                                            % (prefix, vol, suf))
            except ModuleNotFoundError:
                continue
            importlib.reload(m)
            fn(getattr(m, attr), out)
            npaper += 1
    try:
        wm = importlib.import_module('content.wpaper%d' % vol)
        importlib.reload(wm)
        check_wpaper(wm.WPAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    try:
        sm = importlib.import_module('content.spaper%d' % vol)
        importlib.reload(sm)
        check_spaper(sm.SPAPER, out)
        npaper += 1
    except ModuleNotFoundError:
        pass
    print('%d unit(s) checked, %d head words, %d timed paper(s)'
          % (got, len(heads), npaper))
    if out:
        print('\n%d problem(s):' % len(out))
        for p in out[:400]:
            print('  ' + p)
        return 1
    print('all checks pass')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
