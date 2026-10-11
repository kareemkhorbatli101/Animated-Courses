"""Apply each mutation, run its check, and assert the check goes red.

Usage: python3 tools/mutate.py [unit]

The unit is damaged, the tool is run, the file is restored. The restore is
in a finally block: a crash must not leave a mutated unit on disk.
"""
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))
import mutations                                              # noqa: E402

PATHS = {
    'unit': 'units/a11-u{u:02d}.md',
    'key': 'keys/a11-u{u:02d}-key.md',
    'lex': 'spec/wordlists/u{u:02d}.txt',
    'fig': 'content/a11/u{u:02d}_figures.py',
}


def run(check, u):
    """Run whichever tool owns this check and return its stdout."""
    py = sys.executable
    if check.startswith('G'):
        c = [py, 'tools/gate.py', f'units/a11-u{u:02d}.md']
    elif check.startswith('X'):
        c = [py, 'tools/cross.py', f'units/a11-u{u:02d}.md',
             f'units/a11-u{u-1:02d}.md', f'spec/wordlists/u{u:02d}.txt',
             f'spec/wordlists/u{u-1:02d}.txt']
    elif check == 'LEX':
        c = [py, 'tools/check_lexis.py', str(u)]
    elif check.startswith('K'):
        c = [py, 'tools/check_keys.py', str(u)]
    else:
        c = [py, 'tools/check_visual.py', 'a11', str(u)]
    return subprocess.run(c, capture_output=True, text=True, cwd=HERE).stdout


def main(u=5):
    live, inert, skipped = [], [], []
    for check, target, fn in mutations.M:
        path = os.path.join(HERE, PATHS[target].format(u=u))
        original = open(path).read()
        broken = fn(original, u)
        if broken is None or broken == original:
            skipped.append(check)
            continue
        tmp = tempfile.mkstemp()[1]
        shutil.copy(path, tmp)
        try:
            open(path, 'w').write(broken)
            out = run(check, u)
            red = any(l.strip().startswith('FAIL') and check in l
                      for l in out.split('\n'))
            # LEX reports differently: any non-zero count is a failure
            if check == 'LEX':
                red = 'outside the Word File' in out and ' 0 words' not in out
            (live if red else inert).append(check)
        finally:
            shutil.copy(tmp, path)
            os.unlink(tmp)

    for c in live:
        print(f'  live   {c}  — the mutation turned it red')
    for c in inert:
        print(f'  INERT  {c}  — the mutation did NOT turn it red')
    for c in skipped:
        print(f'  n/a    {c}  — the mutation does not apply to unit {u}')
    print(f'\n{len(live)} live, {len(inert)} inert, {len(skipped)} not applicable'
          f'   [mutating unit {u}]')
    return 1 if inert else 0


if __name__ == '__main__':
    sys.exit(main(int(sys.argv[1]) if len(sys.argv) > 1 else 5))
