"""E0: the engine is one engine.

A2 does not share a Python package with A1; it carries its own copy of the
five engine files. A copy is a fork, and a fork drifts -- which is the exact
failure every other check in this suite exists to prevent, one level up.

So the copy is held byte-identical. Edit `draw.py` in A1 and not in A2 and
this goes red naming the file. A2's own plates live in `plates2.py`, which
imports `plates` and adds to it, so the shared five never have to change for
A2's sake.

If a change to the engine is genuinely wanted, it is made in A1, A1's ten
stages are re-run, the file is copied across, and both suites are run again.
There is no path by which the two levels quietly draw different people.
"""
import hashlib
import os
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A1 = os.path.join(os.path.dirname(HERE), 'A1', 'tools')
ENGINE = ['draw.py', 'people.py', 'cast.py', 'world.py', 'plates.py']
OK, BAD = [], []


def h(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()[:12]


def main():
    for f in ENGINE:
        a, b = os.path.join(A1, f), os.path.join(HERE, 'tools', f)
        if not os.path.exists(a):
            BAD.append((f, 'missing in A1'))
        elif not os.path.exists(b):
            BAD.append((f, 'missing in A2'))
        elif h(a) != h(b):
            BAD.append((f, f'A1 {h(a)} vs A2 {h(b)}'))
        else:
            OK.append((f, h(a)))
    for f, d in OK:
        print(f'  ok   E0 {f:<12} identical in A1 and A2  — {d}')
    for f, d in BAD:
        print(f'  FAIL E0 {f:<12} has forked  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [engine identity]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main())
