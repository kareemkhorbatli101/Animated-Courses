#!/usr/bin/env python3
"""Audit every numeral in chapter 15 against the table it is supposed to come from.

A quantitative exercise is wrong in a way no grammatical check can see: an option
can be perfect English, name the right rows and still give a figure the table does
not support. This lists, for every option, the numerals that appear neither in its
own table nor in its claim.

A flagged numeral is NOT a fault. Most are derived, which is the point of the
chapter: a difference between two cells, a total of two rows, a figure in thousands
written out in full, or -- in the imported distractors -- a number from outside the
table on purpose. The tool exists so that the derived ones can be checked by hand
and counted, rather than trusted. Every flag it raises on the finished book was
verified: see PLAN.md section 14.

    python3 tools/xnum.py
"""
import os
import re
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NUM = re.compile(r'\d[\d,.]*')
LABELS = ['A', 'B', 'C', 'D']


def norm(s):
    return s.replace(',', '').rstrip('.')


def main():
    path = os.path.join(ROOT, 'data', 'exercises', 'C15.yaml')
    if not os.path.exists(path):
        print('no C15.yaml')
        return 1
    d = yaml.safe_load(open(path))
    n = 0
    for part in d['parts']:
        for x in part['exercises']:
            t = x['table']
            cells = {norm(v) for c in ([t['title']] + list(t['cols'])
                                       + [c for r in t['rows'] for c in r])
                     for v in NUM.findall(c)}
            claim = {norm(v) for v in NUM.findall(x['claim'])}
            for L, o in zip(LABELS, x['options']):
                stray = sorted(set(norm(v) for v in NUM.findall(o)) - cells - claim)
                if stray:
                    n += 1
                    print('%s %s  %-6s %s' % (x['id'], L,
                                              'KEY' if L == x['key'] else 'distractor',
                                              ', '.join(stray)))
                    print('      %s' % o)
    print('%d options carry a figure not printed in their own table' % n)
    return 0


if __name__ == '__main__':
    sys.exit(main())
