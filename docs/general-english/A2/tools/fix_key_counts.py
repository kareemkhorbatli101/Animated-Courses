#!/usr/bin/env python3
"""Rewrite every `Sample (N words):` claim in a key to the count D12 measures.

The unit files have fix_counts.py; the keys had nothing, so a sample's claimed
length was only ever as good as the hand count that wrote it. Same law, same
tokenisation as check D12, so the two can never disagree.
"""
from __future__ import annotations
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PAT = re.compile(r'(>\s*Sample\s*\()(\d+)( words\):\s*\*)(.+?)(\*\s*)$', re.M | re.S)


def fix(path: str) -> int:
    s = open(path, encoding='utf-8').read()
    n = 0

    def one(m):
        nonlocal n
        actual = len(re.sub(r'[*_]', '', m.group(4)).split())
        if actual == int(m.group(2)):
            return m.group(0)
        n += 1
        return f'{m.group(1)}{actual}{m.group(3)}{m.group(4)}{m.group(5)}'

    s2 = PAT.sub(one, s)
    if n:
        open(path, 'w', encoding='utf-8').write(s2)
    return n


if __name__ == '__main__':
    args = sys.argv[1:]
    paths = args or sorted(os.path.join(ROOT, 'keys', f)
                           for f in os.listdir(os.path.join(ROOT, 'keys'))
                           if f.endswith('.md'))
    total = sum(fix(p) for p in paths)
    print(f'{total} sample word-count claim(s) corrected')
