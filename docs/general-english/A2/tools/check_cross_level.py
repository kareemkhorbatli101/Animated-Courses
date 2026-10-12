"""X0: the two levels are one course.

A1 and A2 are separate directories with separate suites, and nothing else in
either of them looks across the gap. These three checks do.

  X0a  no A2 unit teaches as new a word A1 already taught as new
  X0b  A2 unit 1 is not easier than A1 unit 20 -- the rung between the books
  X0c  no A2 exercise shares a seven-gram of CONTENT with any A1 exercise,
       over all 400 pairs. This is the one that stops A2 quietly reprinting
       A1, which is the easiest thing in the world to do when the same person
       writes both with the same cast on the same street.
"""
import os
import re
import statistics
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A1 = os.path.join(os.path.dirname(HERE), 'A1')
sys.path.insert(0, os.path.join(HERE, 'tools'))
from cross import ngrams, items, words                           # noqa: E402

OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def lex(root, u):
    p = os.path.join(root, 'spec', 'wordlists', f'u{u:02d}.txt')
    return set(open(p).read().split()) if os.path.exists(p) else set()


def unit(root, book, u):
    return os.path.join(root, 'units', f'{book}-u{u:02d}.md')


def main(last=20):
    a1_lex = set()
    for u in range(1, 21):
        a1_lex |= lex(A1, u)

    clash = {}
    for u in range(1, last + 1):
        both = lex(HERE, u) & a1_lex
        if both:
            clash[u] = sorted(both)[:6]
    check('X0a no A2 word was already taught as new in A1', not clash, str(clash))

    a2_1, a1_20 = unit(HERE, 'a21', 1), unit(A1, 'a11', 20)
    if os.path.exists(a2_1) and os.path.exists(a1_20):
        m2 = statistics.mean(len(re.findall(r"[A-Za-z']+", i))
                             for i in items(a2_1, True))
        m1 = statistics.mean(len(re.findall(r"[A-Za-z']+", i))
                             for i in items(a1_20, True))
        w2, w1 = len(words(a2_1)), len(words(a1_20))
        check('X0b A2 unit 1 is not easier than A1 unit 20',
              m2 >= m1 - 0.6 and w2 >= w1 * 0.9,
              f'item mean {m2:.2f} vs {m1:.2f}; {w2} words vs {w1}')

    shared = {}
    a1_grams = {}
    for p in range(1, 21):
        f = unit(A1, 'a11', p)
        if os.path.exists(f):
            a1_grams[p] = ngrams(f)
    for u in range(1, last + 1):
        f = unit(HERE, 'a21', u)
        if not os.path.exists(f):
            continue
        g = ngrams(f)
        for p, gp in a1_grams.items():
            hit = g & gp
            if hit:
                shared[f'a2u{u:02d} vs a1u{p:02d}'] = sorted(hit)[:2]
    check('X0c no A2 exercise reprints an A1 exercise', not shared,
          f'{len(shared)} pairs: ' + str(dict(list(shared.items())[:3])))

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    pairs = last * 20
    print(f'\n{len(OK)} passed, {len(BAD)} failed   '
          f'[cross-level, {pairs} unit pairs]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1]) if len(sys.argv) > 1 else 20))
