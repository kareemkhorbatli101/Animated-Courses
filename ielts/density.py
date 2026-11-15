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

The last two are REPORTED, not gated, and the distinction is deliberate. The
only window available for them was calibrated on TOEFL textbook prose, and
IELTS Academic passages are written in a different register - adapted
journalism rather than a textbook. Gating this book against that window would
be asserting an equivalence nobody has measured. Validating it needs the
sentence length and nominalisation rate of a set of real Cambridge passages;
the attempt to fetch official sample passages for that purpose was refused by
this environment's network policy, so the window below is marked provisional
and the two numbers are printed with the TOEFL ladder beside them, so that a
reader can see which rung this prose actually sits on.

Usage:  python3 density.py
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
GATED = dict(k1=(64.5, 67.0), beyond=(18.5, 21.5))
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


def texts(vol=4, bands=('acad', 'long')):
    out, paper = [], []
    for n in range(31, 41):
        m = _load('u%02d' % n)
        if m is None:
            continue
        U = m.UNIT
        for c in U['cycles']:
            for r in c['read']:
                if r['band'] in bands:
                    out.append(' '.join(r['paras']))
    pm = _load('paper%d' % vol)
    if pm is not None:
        for ps in pm.PAPER['passages']:
            paper.append(' '.join(ps['paras']))
    return out, paper


def row(name, ts, R):
    r = P.profile(name, ts, R)
    got = dict(k1=r['bands']['1k'], beyond=r['over4k'],
               sent=r['mean_sent'], nominal=r['nominal'])
    fails = []
    for key, (lo, hi) in GATED.items():
        if not lo <= got[key] <= hi:
            fails.append('%s %.1f, want %.1f-%.1f' % (key, got[key], lo, hi))
    return r, got, fails


def rung(got):
    """Which TOEFL window this prose's syntax actually sits in."""
    out = []
    for name, sent, nom in LADDER:
        hits = []
        if sent[0] <= got['sent'] <= sent[1]:
            hits.append('sentence length')
        if nom[0] <= got['nominal'] <= nom[1]:
            hits.append('nominalisation')
        if hits:
            out.append('%s (%s)' % (name, ' and '.join(hits)))
    return '; '.join(out) or 'below Volume 3 on both'


def main():
    R = P.ranks()
    units, paper = texts()
    print('DENSITY - IELTS Volume 4\n')
    print('GATED (vocabulary: a property of English, measured on the shared')
    print('word-rank ladder)\n')
    head = ('%-24s %8s %8s %9s   %s'
            % ('set', '1k', 'beyond4k', 'words', 'verdict'))
    print(head)
    print('-' * len(head))
    bad = 0
    keep = {}
    for name, ts in (('unit academic passages', units),
                     ('timed Reading paper', paper),
                     ('both together', units + paper)):
        if not ts:
            continue
        r, got, fails = row(name, ts, R)
        keep[name] = got
        print('%-24s %7.1f%% %7.1f%% %9d   %s'
              % (name, got['k1'], got['beyond'], r['tokens'],
                 'in window' if not fails else '; '.join(fails)))
        if name == 'both together' and fails:
            bad = 1
    print('\nWindow: 1k %.1f-%.1f   beyond4k %.1f-%.1f'
          % (GATED['k1'] + GATED['beyond']))

    print('\n\nREPORTED, NOT GATED (syntax: the only window available was')
    print('calibrated on another series\' genre - see the module docstring)\n')
    head = ('%-24s %11s %10s   %s'
            % ('set', 'mean sent', 'nominal', 'sits in'))
    print(head)
    print('-' * len(head))
    for name, got in keep.items():
        print('%-24s %11.1f %9.1f%%   %s'
              % (name, got['sent'], got['nominal'], rung(got)))
    print('\nProvisional Volume 4 window: sent %.1f-%.1f  nominal %.1f-%.1f'
          % (PROVISIONAL['sent'] + PROVISIONAL['nominal']))
    print('To validate it, measure the same two numbers on a set of official '
          'Cambridge\nAcademic passages and replace the window with what '
          'they show.')
    return bad


if __name__ == '__main__':
    sys.exit(main())
