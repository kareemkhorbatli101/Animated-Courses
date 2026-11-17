# -*- coding: utf-8 -*-
"""The level on the cover, measured from the prose.

Volume 4 claims CEFR B2 and band 6.5. Nothing in the pipeline stops an author
writing B1 prose and printing B2 on the cover, so this measures the volume's
own academic passages.

Four numbers, computed by the TOEFL profile module so that the two series are
measured by one ruler:

    1k       share of running words from the 1,000 commonest forms
    beyond   share past the 4,000-form Foundation ceiling
    sent     mean sentence length
    nominal  the -tion/-ment/-ity/-ness/-ance rate

The first two are GATED. They rest on a word-rank list that is a property of
English rather than of either course, so the TOEFL B2 window transfers to this
book without an assumption.

The last two were REPORTED and are now GATED, against a different kind of
window, and the difference matters enough to state plainly.

The vocabulary window is absolute: it rests on a word-rank list that is a
property of English, so a number measured on one series transfers to another.
There is no equivalent for syntax. The only absolute window available was
calibrated on TOEFL textbook prose, and IELTS Academic passages are adapted
journalism, which is a different register; gating against it would assert an
equivalence nobody has measured. Measuring the real figure needs a set of
official Cambridge passages, and fetching them is still refused by this
environment's network policy.

So the syntax window gates the claim this series actually makes, which is a
RELATIVE one: each book is harder than the one below it. SYNTAX_BY_VOL is a
ladder - mean sentence length rising 0.7 words a book from Foundation 1 to
Volume 6, the longest sentence in a book rising with it, and the -tion/-ment
rate rising about 0.5 points a volume. Three things are gated: each book
inside its own window, no sentence over its book's ceiling, and (with
--ladder) the eight measured means in strictly increasing order.

This is a weaker claim than the vocabulary gate and it is stated as one. It
is not a weak gate: when it was first written it failed six of the eight
books, and the worst failure was Volume 1, the B1 book, whose sentences were
the LONGEST in the series at 23.7 words - longer than the C1 book's 22.2. A
graded series whose syntax ran backwards was not visible to any other gate
and was not visible by eye either, because every individual page reads well.

What would replace it: the mean sentence length and nominalisation rate of
twenty official Cambridge Academic passages, per band. If that measurement
is ever made, the centres below move to it and the ladder stays.

Usage:  python3 density.py 4
        python3 density.py --ladder
"""
import importlib
import importlib.util
import sys

import _base                                            # noqa: F401

# `import profile` would find the standard library's profiler, because this
# package puts the TOEFL directory at the END of sys.path (see _base.py), so
# the module is loaded by path instead.
_PP = __import__('os').path.join(
    __import__('os').path.dirname(__import__('os').path.dirname(
        __import__('os').path.abspath(__file__))), 'toefl', 'profile.py')
_spec = importlib.util.spec_from_file_location('toefl_profile', _PP)
P = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(P)

# gated: a property of English, so the TOEFL window transfers
GATED_BY_VOL = {1: dict(k1=(69.0, 71.5), beyond=(11.5, 14.5)),
                2: dict(k1=(67.5, 70.0), beyond=(13.5, 16.5)),
                3: dict(k1=(66.0, 68.5), beyond=(16.0, 19.0)),
                4: dict(k1=(64.5, 67.0), beyond=(18.5, 21.5)),
                5: dict(k1=(62.5, 65.5), beyond=(20.5, 23.5)),
                6: dict(k1=(60.5, 63.5), beyond=(22.5, 25.5)),
                # The Foundation books. These two windows were set from
                # guesswork first - 78-82% k1 for Foundation 1, on the
                # reasoning that an A1 text is almost all first-thousand
                # words - and the first unit written against them came
                # out at 73.3. The guess was wrong for a reason worth
                # recording: these books exist to teach the 988 words of
                # the gap into Volume 1, and every one of those words is
                # by definition NOT in the first thousand. A Foundation
                # passage that taught nothing new would hit 80% easily;
                # one that carries its ten head words cannot. The window
                # is therefore set where the prose actually lands when
                # it does its job, a step below Volume 1's 69.9 / 13.4
                # rather than two steps.
                7: dict(k1=(72.5, 77.0), beyond=(6.0, 10.0)),
                8: dict(k1=(70.0, 74.0), beyond=(8.5, 12.5))}
GATED = GATED_BY_VOL[4]

# gated: the syntax ladder. centre +/- 1.0 for the mean, a ceiling for the
# longest sentence, centre +/- 0.5 for the nominalisation rate. See the
# module docstring for what this window is and is not.
SYNTAX_BY_VOL = {
    7: dict(sent=(16.5, 18.5), longest=34, nominal=(1.2, 2.4)),
    8: dict(sent=(17.6, 19.6), longest=38, nominal=(1.8, 3.0)),
    1: dict(sent=(19.4, 21.4), longest=42, nominal=(2.5, 3.5)),
    2: dict(sent=(20.2, 22.2), longest=46, nominal=(3.1, 4.1)),
    3: dict(sent=(20.9, 22.9), longest=50, nominal=(3.4, 4.4)),
    4: dict(sent=(21.6, 23.6), longest=54, nominal=(4.0, 5.0)),
    5: dict(sent=(22.3, 24.3), longest=58, nominal=(4.4, 5.4)),
    6: dict(sent=(23.0, 25.0), longest=62, nominal=(5.1, 6.1))}
# Gated: the model answers, measured against the book's own passages.
# Nothing profiled the models until now, which is how they came to be
# EASIER than the passages in every book - V6 models 66.2% k1 against
# 62.6% in its prose - while a reviewer read them as pitched too high.
# The register was accidental. These two numbers make it deliberate:
# a model may be plainer than the passages it sits among, by up to
# MODEL_EASIER points of k1, and may never be harder.
MODEL_EASIER = 4.5      # the most a band-9 model may fall below its book
MODEL_HARDER = 0.5      # the little it may rise above it
MODEL65_EASIER = 9.0    # a band-6.5 model is plainer still, on purpose

# the order the books are read in, for the ladder check
LADDER_ORDER = [7, 8, 1, 2, 3, 4, 5, 6]
MIN_STEP = 0.4          # the smallest rise that counts as a step
# the two books whose key is not their name
BOOK_NAME = {7: 'Foundation 1', 8: 'Foundation 2'}
# reported only: calibrated on another series' genre, so provisional here
PROVISIONAL = dict(sent=(24.0, 26.5), nominal=(5.0, 6.5))
# where each TOEFL volume's window sits, for locating the prose on the ladder
LADDER = [('Volume 3', (21.0, 24.0), (4.0, 5.5)),
          ('Volume 4', (24.0, 26.5), (5.0, 6.5)),
          ('Volume 5', (26.0, 28.5), (6.0, 7.5))]


import os

_HERE = os.path.dirname(os.path.abspath(__file__))


def _load(name):
    """Load one of this package's content modules by path.

    profile.py pulls in the TOEFL `content` package, whose unit numbering
    overlaps ours, so importing by name would silently profile the wrong
    book.
    """
    path = os.path.join(_HERE, 'content', name + '.py')
    if not os.path.exists(path):
        return None
    spec = importlib.util.spec_from_file_location('ielts_' + name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def texts(vol=4, bands=('acad', 'long', 'stamina')):
    out, paper = [], []
    lo = 21 + (vol - 3) * 10
    for n in range(lo, lo + 10):
        m = _load('u%02d' % n)
        if m is None:
            continue
        U = m.UNIT
        for c in U['cycles']:
            for r in c['read']:
                if r['band'] in bands:
                    out.append(' '.join(r['paras']))
    # Every form of the timed paper, not only the first: a second paper is
    # another two and a half thousand words of reading in the book, and
    # prose that is not measured is prose that can drift.
    for suf in ('', 'a', 'b'):
        pm = _load('paper%d%s' % (vol, suf))
        if pm is None:
            continue
        for ps in pm.PAPER['passages']:
            paper.append(' '.join(ps['paras']))
    return out, paper


def row(name, ts, R):
    r = P.profile(name, ts, R)
    got = dict(k1=r['bands']['1k'], beyond=r['over4k'],
               sent=r['mean_sent'], nominal=r['nominal'],
               longest=r['max_sent'])
    fails = []
    for key, (lo, hi) in GATED.items():
        if not lo <= got[key] <= hi:
            fails.append('%s %.1f, want %.1f-%.1f' % (key, got[key], lo, hi))
    return r, got, fails


def syn_fails(got, win):
    """The syntax gate on one measured set."""
    out = []
    for key in ('sent', 'nominal'):
        lo, hi = win[key]
        if not lo <= got[key] <= hi:
            out.append('%s %.1f, want %.1f-%.1f' % (key, got[key], lo, hi))
    if got['longest'] > win['longest']:
        out.append('longest sentence %d words, ceiling %d'
                   % (got['longest'], win['longest']))
    return out


def measure(vol, R):
    """The three sets for one book, measured."""
    units, paper = texts(vol)
    out = {}
    for name, ts in (('unit academic passages', units),
                     ('timed Reading paper', paper),
                     ('both together', units + paper)):
        if not ts:
            continue
        out[name] = row(name, ts, R)
    return out


def models(vol):
    """Every model answer in a book, and every band-6.5 second model."""
    nine, sixfive = [], []
    lo = 21 + (vol - 3) * 10
    for n in range(lo, lo + 10):
        m = _load('u%02d' % n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for w in c['write']:
                if w.get('model'):
                    nine.append(' '.join(w['model']))
                if w.get('model65'):
                    sixfive.append(' '.join(w['model65']))
    return nine, sixfive


def model_row(vol, R, base):
    """The two model sets measured against the book's own passages."""
    nine, sixfive = models(vol)
    rows = []
    for name, texts, easier in (('band-9 models', nine, MODEL_EASIER),
                                ('band-6.5 models', sixfive, MODEL65_EASIER)):
        if not texts:
            continue
        r = P.profile(name, texts, R)
        d = r['bands']['1k'] - base
        bad = []
        if d > easier:
            bad.append('%.1f points plainer than the passages, limit %.1f'
                       % (d, easier))
        if d < -MODEL_HARDER:
            bad.append('%.1f points harder than the passages, limit %.1f'
                       % (-d, MODEL_HARDER))
        rows.append((name, r, d, bad))
    return rows


def ladder(R):
    """The eight books in reading order: are the measured means rising?"""
    print('THE SYNTAX LADDER - all eight books, gated prose\n')
    head = ('%-14s %6s %10s %9s %9s   %s'
            % ('book', 'sent', 'window', 'longest', 'nominal', 'verdict'))
    print(head)
    print('-' * len(head))
    bad = 0
    prev = None
    for vol in LADDER_ORDER:
        sets = measure(vol, R)
        if 'both together' not in sets:
            continue
        _, got, _ = sets['both together']
        win = SYNTAX_BY_VOL[vol]
        bad_here = syn_fails(got, win)
        step = ''
        if prev is not None:
            d = got['sent'] - prev
            step = '+%.1f' % d if d >= 0 else '%.1f' % d
            if d < MIN_STEP:
                bad_here.append('step %s, want +%.1f or more' % (step, MIN_STEP))
        prev = got['sent']
        print('%-14s %6.1f %10s %9d %8.1f%%   %s'
              % (BOOK_NAME.get(vol, 'Volume %d' % vol), got['sent'],
                 '%.1f-%.1f' % win['sent'], got['longest'], got['nominal'],
                 'in window %s' % step if not bad_here
                 else '; '.join(bad_here)))
        if bad_here:
            bad = 1
    print('\nThe ladder gate: every book inside its own window, no sentence')
    print('over its book\'s ceiling, and each mean at least %.1f words above' % MIN_STEP)
    print('the book below. See the module docstring for what this window is')
    print('anchored to, and what would replace it.')
    return bad


def main():
    global GATED
    if '--ladder' in sys.argv:
        return ladder(P.ranks())
    vol = int(sys.argv[1]) if len(sys.argv) > 1 else 4
    GATED = GATED_BY_VOL[vol]
    WIN = SYNTAX_BY_VOL[vol]
    R = P.ranks()
    print('DENSITY - IELTS %s\n' % BOOK_NAME.get(vol, 'Volume %d' % vol))
    print('GATED (vocabulary: a property of English, measured on the shared')
    print('word-rank ladder)\n')
    head = ('%-24s %8s %8s %9s   %s'
            % ('set', '1k', 'beyond4k', 'words', 'verdict'))
    print(head)
    print('-' * len(head))
    bad = 0
    sets = measure(vol, R)
    keep = {}
    for name, (r, got, fails) in sets.items():
        keep[name] = got
        print('%-24s %7.1f%% %7.1f%% %9d   %s'
              % (name, got['k1'], got['beyond'], r['tokens'],
                 'in window' if not fails else '; '.join(fails)))
        if name == 'both together' and fails:
            bad = 1
    print('\nWindow: 1k %.1f-%.1f   beyond4k %.1f-%.1f'
          % (GATED['k1'] + GATED['beyond']))

    print('\n\nGATED (syntax: a ladder, not an absolute - see the module')
    print('docstring for what it is anchored to)\n')
    head = ('%-24s %11s %9s %10s   %s'
            % ('set', 'mean sent', 'longest', 'nominal', 'verdict'))
    print(head)
    print('-' * len(head))
    for name, got in keep.items():
        f = syn_fails(got, WIN)
        print('%-24s %11.1f %9d %9.1f%%   %s'
              % (name, got['sent'], got['longest'], got['nominal'],
                 'in window' if not f else '; '.join(f)))
        if name == 'both together' and f:
            bad = 1
    print('\nWindow: sent %.1f-%.1f   longest <= %d   nominal %.1f-%.1f'
          % (WIN['sent'] + (WIN['longest'],) + WIN['nominal']))
    print('\n\nGATED (the model answers, against this book\'s own passages)\n')
    head = ('%-24s %8s %8s %9s   %s'
            % ('set', '1k', 'beyond4k', 'vs prose', 'verdict'))
    print(head)
    print('-' * len(head))
    base = keep['unit academic passages']['k1']
    for name, r, d, f in model_row(vol, R, base):
        print('%-24s %7.1f%% %7.1f%% %+8.1f   %s'
              % (name, r['bands']['1k'], r['over4k'], d,
                 'in window' if not f else '; '.join(f)))
        if f:
            bad = 1
    print('\nRun `python3 density.py --ladder` for the eight books together, '
          'which is\nwhere the rising-step part of the gate is checked.')
    return bad


if __name__ == '__main__':
    sys.exit(main())
