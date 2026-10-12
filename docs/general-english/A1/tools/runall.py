"""Run every check in the suite and print one summary.

The whole book, every layer, one command. It writes REPORT.md as it goes, so
the thing you read afterwards is the thing that actually ran.
"""
import io
import contextlib
import os
import subprocess
import sys
import time

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
UNITS = list(range(1, 21))

STAGES = [
    ('gate G1-G21, every unit',
     [[PY, 'tools/gate.py', f'units/a11-u{u:02d}.md'] for u in UNITS]),
    ('visual V1-V7 F1-F8, every unit',
     [[PY, 'tools/check_visual.py', 'a11', str(u)] for u in UNITS]),
    ('cross-unit X1-X5, 190 pairs', [[PY, 'tools/crossall.py', '20']]),
    ('lexis E4, cumulative Word File', [[PY, 'tools/check_lexis.py', '20']]),
    ('keys K1-K7 + K6v', [[PY, 'tools/check_keys.py'] + [str(u) for u in UNITS]]),
    ('coupling LEAK/GAP',
     [[PY, 'tools/check_coupling.py'] + [str(u) for u in UNITS]]),
    ('drift, all 440 figures',
     [[PY, 'tools/drift.py'] + [str(u) for u in UNITS]]),
    ('covers, four, re-rendered', [[PY, 'tools/covers.py']]),
    ('back matter B1-B9', [[PY, 'tools/check_back.py']]),
    ('document D0-D9, both books',
     [[PY, 'tools/check_doc.py',
       'build/EFDL-A1-StudentBook-u01-20.pdf', '20', '440'],
      [PY, 'tools/check_doc.py',
       'build/EFDL-A1-AnswerKey-u01-20.pdf', '20', '0']]),
]


def main():
    lines = ['# EFDL A1 — check report', '',
             f'Run {time.strftime("%Y-%m-%d %H:%M")}  ·  20 units  ·  '
             '760 exercises  ·  440 figures', '']
    bad_total = 0
    for name, cmds in STAGES:
        fails, out = 0, []
        t0 = time.time()
        for c in cmds:
            r = subprocess.run(c, capture_output=True, text=True, cwd=HERE)
            if r.returncode:
                fails += 1
                out += [l for l in r.stdout.split('\n') if 'FAIL' in l][:4]
        dt = time.time() - t0
        flag = 'ok  ' if not fails else 'FAIL'
        print(f'{flag} {name}  ({dt:.0f}s)')
        lines.append(f'- **{flag.strip()}** — {name}')
        for o in out[:6]:
            print('       ', o.strip())
            lines.append(f'    - `{o.strip()}`')
        bad_total += fails
    lines += ['', f'**{len(STAGES)} stages, {bad_total} with failures**', '']
    open(os.path.join(HERE, 'REPORT.md'), 'w').write('\n'.join(lines))
    print(f'\n{len(STAGES)} stages, {bad_total} with failures  — REPORT.md written')
    return 1 if bad_total else 0


if __name__ == '__main__':
    sys.exit(main())
