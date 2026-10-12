"""Run the cross-unit checks for every pair (u, p) with u > p."""
import subprocess
import sys

HERE = 'units/a21-u{:02d}.md'
LEX = 'spec/wordlists/u{:02d}.txt'


def main(last):
    units = list(range(1, last + 1))
    total = ok = 0
    bad = []
    for u in units:
        for p in units:
            if p >= u:
                continue
            r = subprocess.run([sys.executable, 'tools/cross.py',
                                HERE.format(u), HERE.format(p),
                                LEX.format(u), LEX.format(p)],
                               capture_output=True, text=True)
            lines = [l for l in r.stdout.split('\n') if l.strip()]
            tail = lines[-1] if lines else ''
            n_ok = int(tail.split()[0]) if tail and tail[0].isdigit() else 0
            n_bad = int(tail.split()[2]) if tail and tail[0].isdigit() else 99
            total += n_ok + n_bad
            ok += n_ok
            if n_bad:
                bad.append((u, p, [l.strip() for l in lines if 'FAIL' in l]))
    for u, p, fails in bad:
        print(f'  u{u:02d} vs u{p:02d}:')
        for f in fails:
            print(f'     {f}')
    pairs = len(units) * (len(units) - 1) // 2
    print(f'\n{pairs} pairs, {ok}/{total} checks passed, {len(bad)} pairs with failures')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1]) if len(sys.argv) > 1 else 10))
