#!/usr/bin/env python3
"""Re-emit every chapter from its authoring module and diff against data/.

The data files are generated, so they can drift from the modules that generate
them: a hand edit to a YAML file, a module edited after its last emit, a tool
change that alters the output of an emitter nobody re-ran. Any of those makes the
checks pass on a file the book is no longer built from. This re-runs all fifteen
emitters into a scratch directory and compares byte for byte.

    python3 tools/xdrift.py
"""
import filecmp
import glob
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LIVE = os.path.join(ROOT, 'data', 'exercises')


def main():
    mods = sorted(os.path.basename(p)[:-3]
                  for p in glob.glob(os.path.join(HERE, 'w_C*.py')))
    tmp = tempfile.mkdtemp(prefix='xdrift-')
    bad = []
    try:
        for m in mods:
            r = subprocess.run([sys.executable, os.path.join(HERE, 'xrun.py'), m],
                               capture_output=True, text=True, cwd=ROOT,
                               env=dict(os.environ, XEMIT_OUT=tmp))
            if r.returncode:
                bad.append('%s did not run: %s' % (m, r.stderr.strip()[-200:]))
                continue
            name = m[2:] + '.yaml'
            a, b = os.path.join(tmp, name), os.path.join(LIVE, name)
            if not os.path.exists(a):
                bad.append('%s wrote no %s' % (m, name))
            elif not os.path.exists(b):
                bad.append('%s has no committed %s' % (m, name))
            elif not filecmp.cmp(a, b, shallow=False):
                bad.append('%s differs from what %s emits' % (name, m))
            for line in r.stdout.split('\n'):
                if line.startswith(('FIX', 'KEYS', 'TYPE')):
                    bad.append('%s: %s' % (m, line.strip()))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    for b in bad:
        print('DRIFT', b)
    print('%d modules re-emitted, %d problems' % (len(mods), len(bad)))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
