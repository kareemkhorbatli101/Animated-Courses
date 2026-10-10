"""Report duplicated trap lines, why lines and variable stems across all files.

Checks G7 and E4 catch these at the book level, but only once everything is
written. This prints the offenders by question id so they can be fixed as each
file is finished.
"""
import collections
import glob
import os
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))


def main():
    seen = {k: collections.defaultdict(list) for k in ('trap', 'why', 'stem')}
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'questions', '*.yaml'))):
        d = yaml.safe_load(open(p))
        for s in d['sets']:
            for q in s['questions']:
                qid = '%s-Q%02d' % (s['id'], q['slot'])
                seen['trap'][q['trap']].append(qid)
                seen['why'][q['why']].append(qid)
                if q['slot'] in SPEC['variable_stem_slots']:
                    seen['stem'][q['stem']].append(qid)
    n = 0
    for what in ('trap', 'why', 'stem'):
        for text, ids in sorted(seen[what].items()):
            if len(ids) > 1:
                n += 1
                print('%-5s %s\n      %s' % (what, ', '.join(ids), text[:90]))
    print('%d duplicates' % n)
    return 1 if n else 0


if __name__ == '__main__':
    sys.exit(main())
