"""Does the plan account for every learning outcome statement, once?

The claim a plan of this kind makes is coverage, and coverage is the one
thing an author cannot check by reading: 263 statements over 72 chapters
is exactly the size at which the eye stops working. So it is checked
here, against the ledger parsed from the IMA document rather than
against a transcription of it.
"""
from __future__ import print_function
import collections
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def load():
    los = json.load(open(os.path.join(HERE, 'los.json'), encoding='utf8'))
    plan = json.load(open(os.path.join(HERE, 'plan.json'), encoding='utf8'))
    return los, plan


def check(los, plan, say):
    want = [s['code'] for s in los['statements']]
    wantset = set(want)
    if len(want) != len(wantset):
        say('the ledger itself repeats a code')
    seen = collections.Counter()
    where = collections.defaultdict(list)
    for b in plan['books']:
        if len(b['chapters']) != 18:
            say('book %d has %d chapters, not 18'
                % (b['n'], len(b['chapters'])))
        for ci, (title, codes) in enumerate(b['chapters'], 1):
            if not codes:
                say('book %d chapter %d (%s) teaches no statement'
                    % (b['n'], ci, title))
            for c in codes:
                seen[c] += 1
                where[c].append('%d.%d' % (b['n'], ci))
    # 1. nothing invented
    for c in sorted(set(seen) - wantset):
        say('%s is in the plan and not in the LOS' % c)
    # 2. nothing dropped
    for c in want:
        if c not in seen:
            say('%s is in the LOS and in no chapter: %s'
                % (c, next(s['text'] for s in los['statements']
                           if s['code'] == c)[:70]))
    # 3. nothing taught twice without a reason. A statement may be split
    #    across two chapters -- B.2e values bonds AND stock -- but three
    #    places means the plan has lost track of it.
    for c in sorted(seen):
        if seen[c] > 2:
            say('%s is taught in %d chapters: %s'
                % (c, seen[c], ', '.join(where[c])))
    return seen, where


def main():
    los, plan = load()
    bad = []
    seen, _where = check(los, plan, bad.append)
    print('%d statements in the LOS, %d placed, %d chapters'
          % (len(los['statements']), len(set(seen)),
             sum(len(b['chapters']) for b in plan['books'])))
    for b in plan['books']:
        n = sum(len(c[1]) for c in b['chapters'])
        print('  book %d  %-34s %2d chapters  %3d statements  %.1f a chapter'
              % (b['n'], b['title'][:34], len(b['chapters']), n,
                 n / float(len(b['chapters']))))
    if bad:
        print('\n%d finding(s):' % len(bad))
        for m in bad:
            print('  ' + m)
        return 1
    print('\nevery statement placed, none invented, none scattered')
    return 0


if __name__ == '__main__':
    sys.exit(main())
