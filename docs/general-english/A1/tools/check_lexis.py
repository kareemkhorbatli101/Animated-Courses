"""E4: does a unit stay inside the Word File the learner has?

At A1 an unknown word is not friction, it is a wall. This check reads every
word a unit prints -- rubrics, items, word boxes, tables, keys -- and asks
whether the learner has met it.

Three things are allowed that are not in a unit's own wordlist:

  * the cumulative Word File (every earlier unit's words plus this one's)
  * spec/metalanguage.txt, the house's instruction vocabulary, which is a
    finite visible list on purpose
  * names, numbers written as digits, and single letters (the alphabet and
    the (a)(b)(c) of a multiple choice)

Inflections count as their stem: `apples` is `apple`, `closes` is `close`,
`doesn` is the wreckage of `doesn't` after an apostrophe split. The first
version of this probe had none of that and reported 572 unknown words, of
which almost all were noise -- and the real findings were buried.
"""
import re
import sys
import pathlib

HERE = pathlib.Path(__file__).resolve().parent.parent

NAMES = set("""nadia sam lili marek fatima ben rosa omar hill green new alder
chen haddad saleh okafor nowak wright silva kowalski ana jan
china egypt brazil poland spain japan nigeria turkey england
monday tuesday wednesday thursday friday saturday sunday
english computers football music cooking swimming spanish hannah
hr lagos madrid beijing greenfield
january february march april may june july august
september october november december""".split())

# contraction wreckage: the apostrophe splits the token
CONTRACTION = set("""isn aren wasn weren don doesn didn can cann won shouldn
couldn wouldn haven hasn hadn ll ve re nt s t m d""".split())


def stem(w):
    """Crude but sufficient: strip the inflections A1 actually uses."""
    for suf, cut in (('ies', 3), ('es', 2), ('s', 1)):
        if w.endswith(suf) and len(w) > len(suf) + 2:
            base = w[:-cut]
            if suf == 'ies':
                base += 'y'
            yield base
    if w.endswith('ing') and len(w) > 5:
        yield w[:-3]
        yield w[:-3] + 'e'
    if w.endswith('ed') and len(w) > 4:
        yield w[:-2]
        yield w[:-1]
    if w.endswith('er') and len(w) > 4:
        yield w[:-2]
    if w.endswith('est') and len(w) > 5:
        yield w[:-3]
    # big -> bigger/biggest, swim -> swimming, hot -> hottest. The doubled
    # consonant is the spelling rule Units 15, 16 and 18 teach outright, so
    # a stemmer that cannot undo it reports the course's own output as
    # unknown vocabulary.
    for suf in ('est', 'er', 'ing', 'ed'):
        if w.endswith(suf) and len(w) > len(suf) + 2:
            base = w[:-len(suf)]
            if len(base) > 2 and base[-1] == base[-2] and base[-1] not in 'aeiou':
                yield base[:-1]


def known(w, vocab):
    if w in vocab or w in NAMES or w in CONTRACTION:
        return True
    if len(w) == 1:
        return True
    return any(s in vocab or s in NAMES for s in stem(w))


def main(last=10, show=14):
    meta = {w for ln in open(HERE / 'spec' / 'metalanguage.txt')
            if not ln.startswith('#') for w in ln.split()}
    meta |= {w for ln in open(HERE / 'spec' / 'wordlists' / 'function.txt')
             if not ln.startswith('#') for w in ln.split()}
    cum = set()
    bad_total = 0
    rows = []
    for u in range(1, last + 1):
        cum |= set((HERE / 'spec' / 'wordlists' / f'u{u:02d}.txt').read_text().split())
        vocab = cum | meta
        # The LEARNER's page only. An answer key is teacher-facing -- it says
        # "accept", "check the capital letter", "the audio names Spain" -- and
        # measuring it against a beginner's Word File reports the teacher's
        # vocabulary as the learner's problem, which is how the first run of
        # this check buried its real findings under 140 words of noise.
        txt = (HERE / 'units' / f'a11-u{u:02d}.md').read_text()
        txt = re.sub(r'\*\(example\)\*', ' ', txt)
        ws = sorted({w.lower() for w in re.findall(r"[A-Za-z]+", txt)})
        unknown = [w for w in ws if not known(w, vocab)]
        bad_total += len(unknown)
        rows.append((u, len(ws), unknown))
    for u, n, unk in rows:
        flag = 'FAIL' if unk else 'ok  '
        print(f'{flag} u{u:02d}  {n:3d} distinct, {len(unk):3d} outside the Word File')
        if unk:
            print('       ', ' '.join(unk[:show]) + (' …' if len(unk) > show else ''))
    print(f'\n{last} units, {bad_total} words outside the Word File')
    return 1 if bad_total else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1]) if len(sys.argv) > 1 else 10))
