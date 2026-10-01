"""Structural checks: every unit must hold the Book 1 template exactly."""
import importlib, re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

EXPECTED = {
    'Warm Up': 'ABCD',
    'Part 1': 'ABCDEFGH',
    'Part 2': 'ABCDEFGHIJ',
    'Part 3': 'ABCAB',          # dialogue 1 A-C, dialogue 2 A-B
    'Part 4': 'ABCD',
    'Part 5': 'ABCDEF',
    'Part 6': 'ABCD',
    'Part 7': 'ABCD',
    'Part 8': 'ABCD',
    'Part 9': '',
    'Part 10': 'ABCDEFGHI',
    'Part 11': 'ABC',
}
PART_ORDER = ['Warm Up'] + ['Part %d' % i for i in range(1, 12)]


def check(n, verbose=True):
    mod = importlib.import_module('content.u%02d' % n)
    U = mod.UNIT
    problems = []
    part, letters, figs, cases = None, {}, 0, 0
    partfigs = {}
    for b in U['blocks']:
        if b[0] == 'bar':
            part = b[1].split('  ·  ')[0].strip()
            letters.setdefault(part, '')
            partfigs.setdefault(part, 0)
        elif b[0] == 'fig':
            figs += 1
            if part:
                partfigs[part] = partfigs.get(part, 0) + 1
        elif b[0] == 'ex':
            m = re.match(r'^([A-L])\.\s', b[1])
            if m and part:
                letters[part] += m.group(1)
        elif b[0] == 'h3' and part == 'Part 9' and b[1].startswith('Case '):
            cases += 1

    figs += 2  # the end-of-unit card and the next-unit teaser, added at render time
    if figs != 22:
        problems.append('figures: %d (want 22)' % figs)

    for p in PART_ORDER:
        if p not in letters:
            problems.append('missing %s' % p)
            continue
        got = letters[p]
        want = EXPECTED[p]
        if p == 'Part 9':
            continue
        if got != want:
            problems.append('%s exercises %r (want %r)' % (p, got, want))
    if cases != 3:
        problems.append('Part 9 cases: %d (want 3)' % cases)

    nterms = len(U['terms'])
    if not 32 <= nterms <= 40:
        problems.append('terms: %d (want 32-40)' % nterms)

    # every key label must point at an exercise that exists
    valid = set()
    for p, got in letters.items():
        if p == 'Warm Up':
            valid |= {'Warm-Up ' + c for c in got}
        elif p == 'Part 3':
            valid |= {'P3 D1 A', 'P3 D1 B', 'P3 D1 C', 'P3 D2 A', 'P3 D2 B'}
        else:
            num = p.split()[1]
            valid |= {'P%s %s' % (num, c) for c in got}
    for label, _ in U['key']:
        if label not in valid:
            problems.append('key label %r has no exercise' % label)
    keyed = {l for l, _ in U['key']}
    dupes = len(U['key']) - len(keyed)
    if dupes:
        problems.append('%d duplicate key labels' % dupes)

    # key order must follow part order
    order = [l for l, _ in U['key']]
    rank = {}
    for i, p in enumerate(PART_ORDER):
        for c in 'ABCDEFGHIJKL':
            rank['Warm-Up ' + c if p == 'Warm Up' else
                 'P%s %s' % (p.split()[1], c) if p != 'Part 3' else 'x'] = (i, c)
    for j, d in enumerate(['D1 A', 'D1 B', 'D1 C', 'D2 A', 'D2 B']):
        rank['P3 ' + d] = (3, chr(ord('A') + j))
    ranks = [rank.get(l, (99, 'Z')) for l in order]
    if ranks != sorted(ranks):
        problems.append('answer key is not in part order')

    words = sum(len(b[1].split()) for b in U['blocks'] if b[0] == 'p')
    if verbose:
        tag = 'OK  ' if not problems else 'FAIL'
        print('%s Unit %-2d  %-40s figs=%d  prose=%d w  terms=%d  key=%d'
              % (tag, n, U['title'][:40], figs, words, nterms, len(U['key'])))
        for p in problems:
            print('       - ' + p)
    return problems


if __name__ == '__main__':
    args = [int(a) for a in sys.argv[1:]] or list(range(1, 11))
    bad = 0
    for n in args:
        try:
            bad += len(check(n))
        except ModuleNotFoundError:
            print('--   Unit %-2d  not written yet' % n)
    print('\n%d problem(s)' % bad)
