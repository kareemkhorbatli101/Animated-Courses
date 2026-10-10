"""Check that every sibling_gloss names the sibling's real passage number.

The glosses say "Text 2 is passage N of this book", and N is the position the
reader will find it at, which is level first, then field, then strand. Getting
it wrong would send a reader to the wrong page, so it is checked rather than
trusted. Run with no arguments; it prints one line per authoring file.
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build                                                            # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    num = {x['id']: x['n'] for x in build.load()}
    bad = 0
    for f in sorted(glob.glob(os.path.join(ROOT, 'tools', 'w_*.py'))):
        s = open(f, encoding='utf-8').read()
        n = 0
        for m in re.finditer(r"sibling='([A-Z]{3}-S\d\d-L\d)'", s):
            sid, n = m.group(1), n + 1
            g = re.search(r'passage (\d+) of this book', s[m.end():m.end() + 1500])
            if not g:
                print('NOGLOSS %s %s' % (os.path.basename(f), sid))
                bad += 1
            elif int(g.group(1)) != num[sid]:
                print('WRONG   %s %s says %s, should be %d'
                      % (os.path.basename(f), sid, g.group(1), num[sid]))
                bad += 1
        print('%-16s %2d siblings checked' % (os.path.basename(f), n))
    print('%d wrong' % bad)
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
