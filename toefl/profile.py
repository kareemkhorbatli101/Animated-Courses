# -*- coding: utf-8 -*-
"""The lexical and syntactic profile of every volume's academic prose.

seam.py counts what a student does not know at a join. This measures the text
itself, so that a level on a cover can be argued from the page rather than
asserted. Everything here is computed from the content and a frequency
ranking, with no network and no external corpus.

Reported per volume, over the academic reading passages only:
  - what share of running words comes from each frequency band
  - how much sits beyond the 4,000-form ceiling the Foundation volumes use
  - mean and longest sentence
  - type-token ratio, on an equal-sized sample so volumes compare fairly
  - nominalisation rate, the -tion/-ment/-ity/-ness/-ance family, which is
    what makes academic prose dense rather than merely long

Usage:  python3 profile.py [freq_file]
"""
import importlib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

FREQ = os.path.join(HERE, 'content', '_freq.txt')

BANDS = [(1, 1000, '1k'), (1001, 2000, '2k'), (2001, 3000, '3k'),
         (3001, 4000, '4k'), (4001, 6000, '6k'), (6001, 10000, '10k')]
NOMINAL = re.compile(r'\w+(tion|sion|ment|ity|ness|ance|ence|ism)$', re.I)

VOLS = [('Foundation 1', 'f', range(1, 11)),
        ('Foundation 2', 'g', range(1, 11)),
        ('Volume 1', 'u', range(1, 11)),
        ('Volume 2', 'u', range(11, 21)),
        ('Volume 3', 'u', range(21, 31)),
        ('Volume 4', 'u', range(31, 41))]


def ranks():
    r = {}
    with open(FREQ) as fh:
        i = 0
        for line in fh:
            if not line.strip() or line.startswith('#'):
                continue
            i += 1
            w = line.split()[0].lower()
            if w not in r:
                r[w] = i
    return r


def prose(pre, rng):
    """The academic reading passages, which is where a level lives."""
    out = []
    for n in rng:
        U = importlib.import_module('content.%s%02d' % (pre, n)).UNIT
        for tag in ('r3', 'r4', 'r5'):
            b = U.get(tag)
            if b and 'paras' in b:
                out.append(' '.join(b['paras']))
    return out


def profile(name, texts, R):
    blob = ' '.join(texts)
    toks = [w.lower() for w in re.findall(r"[A-Za-z][A-Za-z'’-]*", blob)]
    sents = [s for s in re.split(r'(?<=[.!?])\s+', blob) if s.strip()]
    lens = [len(s.split()) for s in sents]

    counts = {lab: 0 for _, _, lab in BANDS}
    beyond = off = 0
    for w in toks:
        r = R.get(w) or R.get(w.rstrip('s')) or R.get(w.rstrip("'s"))
        if not r:
            off += 1
            continue
        for lo, hi, lab in BANDS:
            if lo <= r <= hi:
                counts[lab] += 1
                break
        else:
            beyond += 1
    n = float(len(toks))
    # type-token ratio on an equal sample, so a longer book is not punished
    SAMPLE = 2000
    samp = toks[:SAMPLE]
    ttr = len(set(samp)) / float(len(samp)) if len(samp) >= SAMPLE else None
    nom = sum(1 for w in toks if NOMINAL.match(w))
    over4k = beyond + off + counts['6k'] + counts['10k']
    return dict(
        name=name, passages=len(texts), tokens=len(toks),
        bands={lab: 100.0 * counts[lab] / n for _, _, lab in BANDS},
        over10k=100.0 * (beyond + off) / n,
        over4k=100.0 * over4k / n,
        mean_sent=sum(lens) / float(len(lens)), max_sent=max(lens),
        ttr=ttr, nominal=100.0 * nom / n)


def main():
    global FREQ
    if len(sys.argv) > 1:
        FREQ = sys.argv[1]
    if not os.path.exists(FREQ):
        print('no frequency file at %s' % FREQ)
        return 2
    R = ranks()
    rows = [profile(name, prose(pre, rng), R) for name, pre, rng in VOLS]

    print('LEXICAL AND SYNTACTIC PROFILE — academic reading passages only')
    print('%d-form frequency ranking; share of running words by band\n' % len(R))
    head = ('%-14s %6s %6s %6s %6s %6s %6s %6s | %7s %7s %5s %5s %6s'
            % ('volume', '1k', '2k', '3k', '4k', '6k', '10k', '>10k',
               'beyond', 'sent', 'max', 'TTR', 'nomin'))
    print(head)
    print('-' * len(head))
    for r in rows:
        b = r['bands']
        print('%-14s %5.1f%% %5.1f%% %5.1f%% %5.1f%% %5.1f%% %5.1f%% %5.1f%% '
              '| %6.1f%% %7.1f %5d %5.2f %5.1f%%'
              % (r['name'], b['1k'], b['2k'], b['3k'], b['4k'], b['6k'],
                 b['10k'], r['over10k'], r['over4k'], r['mean_sent'],
                 r['max_sent'], r['ttr'] or 0, r['nominal']))
    print('-' * len(head))
    print('"beyond" is everything past the 4,000-form ceiling the two')
    print('Foundation volumes are written inside: bands 6k, 10k and >10k.')
    print('TTR is on the first 2,000 words of each volume, so the books')
    print('compare on equal samples.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
