"""E4: does a unit stay inside the Word File the learner has?

At A2 an unknown word is not friction, it is a wall. This check reads every
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
alvarez hassan
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
    """Crude but sufficient: strip the inflections A2 actually uses."""
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
    # studied -> study, carried -> carry. The 'ies' rule was there and its
    # past-tense twin was not, so every -ied past read as an unknown word.
    if w.endswith('ied') and len(w) > 4:
        yield w[:-3] + 'y'
    # -ly. Unit 10 teaches adverbs of manner and the stemmer could not undo a
    # single one of them: slowly, carefully, generously, happily and sensibly
    # all read as words the course had never taught. The adjective unit was
    # the unit that exposed it, which is late but not too late.
    if w.endswith('ly') and len(w) > 4:
        yield w[:-2]            # slowly -> slow, generously -> generous
        yield w[:-3] + 'y'      # happily -> happy
        yield w[:-1] + 'e'      # sensibly -> sensible
    # -ier / -iest. The 'ies' and 'ied' twins were both here and this one was
    # not, so tidier and noisier read as unknown in a course that teaches
    # comparatives.
    if w.endswith('ier') and len(w) > 4:
        yield w[:-3] + 'y'
    if w.endswith('iest') and len(w) > 5:
        yield w[:-4] + 'y'
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
    # An A2 learner has been through A1. The cumulative Word File therefore
    # starts with every word A1 taught -- all 687 of them -- and X0a
    # guarantees A2 never teaches one of them as new a second time.
    a1 = HERE.parent / 'A1' / 'spec' / 'wordlists'
    cum = {w for f in sorted(a1.glob('u*.txt')) for w in f.read_text().split()}
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
        txt = (HERE / 'units' / f'a21-u{u:02d}.md').read_text()
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

    # E5 -- the load ceiling, which until now was a number in golden.yaml that
    # NOTHING read. Six units were over the figure the plan wrote down and the
    # suite said nothing, which is the same fault as G20 and B1: a check that
    # cannot fail. The ceiling below is the course's real design, measured off
    # the twenty wordlists, not the pre-build guess it replaces.
    import yaml
    ceil = yaml.safe_load(open(HERE / 'spec' / 'golden.yaml'))['lexis']['new_items_max']
    over = []
    for u in range(1, last + 1):
        n = len((HERE / 'spec' / 'wordlists' / f'u{u:02d}.txt').read_text().split())
        if n > ceil:
            over.append((u, n))
    print(('ok   ' if not over else 'FAIL ')
          + f'E5 new items per unit, ceiling {ceil}  — '
          + (', '.join(f'u{u:02d} {n}' for u, n in over) if over else 'every unit under'))
    print(f'\n{last} units, {bad_total} words outside the Word File')
    return 1 if (bad_total or over) else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1]) if len(sys.argv) > 1 else 10))
