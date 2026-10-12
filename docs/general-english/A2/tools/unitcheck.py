"""Everything that applies to one unit, in one command, with the deficits.

Writing A2 unit 2 took three round-trips: lexis, then recycling, then the
cross-level reprint. Each was a separate tool with its own invocation. This
runs all of them and prints what is MISSING rather than only that something
is -- the recycling line names the pool of words that would fix it, which is
the difference between a report and a tool.
"""
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
sys.path.insert(0, os.path.join(HERE, 'tools'))


def run(*a):
    r = subprocess.run([PY] + list(a), capture_output=True, text=True, cwd=HERE)
    return r.returncode, r.stdout


def main(u):
    bad = 0
    rc, out = run('tools/gate.py', f'units/a21-u{u:02d}.md')
    print(('FAIL ' if rc else 'ok   ') + 'gate      ' + out.strip().split('\n')[-1])
    bad += rc
    for line in out.split('\n'):
        if 'FAIL' in line:
            print('       ', line.strip())

    rc, out = run('tools/check_visual.py', 'a21', str(u))
    print(('FAIL ' if rc else 'ok   ') + 'visual    ' + out.strip().split('\n')[-1])
    bad += rc
    for line in out.split('\n'):
        if 'FAIL' in line:
            print('       ', line.strip())

    import check_lexis as L
    import io
    import contextlib
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        L.main(u, show=99)
    for line in buf.getvalue().split('\n'):
        if f'u{u:02d}' in line or 'outside' in line:
            if 'FAIL' in line or 'words outside' in line:
                print(('FAIL ' if 'FAIL' in line else 'ok   ') + 'lexis     ' + line.strip())
    nxt = buf.getvalue().split(f'FAIL u{u:02d}')
    if len(nxt) > 1:
        print('        UNKNOWN:', nxt[1].split('\n')[1].strip())
        bad += 1

    rc, out = run('tools/check_keys.py', *[str(i) for i in range(1, u + 1)])
    print(('FAIL ' if rc else 'ok   ') + 'keys      ' + out.strip().split('\n')[-1])
    bad += rc
    for line in out.split('\n'):
        if 'FAIL' in line:
            print('       ', line.strip())

    rc, out = run('tools/check_coupling.py', *[str(i) for i in range(1, u + 1)])
    if 'LEAK' not in out or 'PICTORIAL' not in out:
        print('FAIL  coupling  did not run (is the key written?)')
        print(out.strip().split('\n')[-1][:120])
        return 1
    leaks = out.split('LEAK')[1].split('GAP')[0]
    gaps = out.split('GAP')[1].split('PICTORIAL')[0]
    nl = re.search(r'\((\d+) to read\)', leaks)
    ng = re.search(r'\((\d+) to read\)', gaps)
    hot = (nl and nl.group(1) != '0') or (ng and ng.group(1) != '0')
    print(('READ ' if hot else 'ok   ') + 'coupling  '
          f'leaks {nl.group(1) if nl else "?"}, gaps {ng.group(1) if ng else "?"}')
    if hot:
        for line in (leaks + gaps).split('\n'):
            if f'u{u:02d}' in line:
                print('       ', line.strip())

    # the cross-unit pairs, with the pool that would fix a recycling deficit
    import cross
    for p in range(1, u):
        r = subprocess.run(
            [PY, 'tools/cross.py', f'units/a21-u{u:02d}.md',
             f'units/a21-u{p:02d}.md', f'spec/wordlists/u{u:02d}.txt',
             f'spec/wordlists/u{p:02d}.txt'],
            capture_output=True, text=True, cwd=HERE)
        if r.returncode:
            bad += 1
            for line in r.stdout.split('\n'):
                if 'FAIL' in line:
                    print(f'FAIL  cross u{u:02d}v{p:02d} {line.strip()[5:]}')
                    if 'X1b' in line:
                        pn = set(open(os.path.join(
                            HERE, 'spec', 'wordlists', f'u{p:02d}.txt')).read().split())
                        uw = set(w.lower() for w in cross.words(os.path.join(
                            HERE, 'units', f'a21-u{u:02d}.md')))
                        print('        POOL:', ' '.join(sorted(pn - uw)[:26]))

    rc, out = run('tools/check_cross_level.py', str(u))
    print(('FAIL ' if rc else 'ok   ') + 'x-level   ' + out.strip().split('\n')[-1])
    bad += rc
    for line in out.split('\n'):
        if 'FAIL' in line:
            print('       ', line.strip())

    print(f'\nunit {u}: {"GREEN" if not bad else str(bad) + " FAILING"}')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1])))
