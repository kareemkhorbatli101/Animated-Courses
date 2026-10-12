#!/usr/bin/env python3
"""Rewrite every "(N words)" claim to the true count.

The claim is a promise to the learner that the model in front of them is the
length the task asks for. Counting it by hand was costing a fix round a unit.
"""
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def count(body: str) -> int:
    body = re.sub(r'\(\d+ words\)\s*$', '', body.strip())
    body = re.sub(r'^>\s*', '', body)
    body = re.sub(r'^Sample\s*(\(\d+ words\))?:\s*', '', body)
    body = re.sub(r'^\*(.*)\*$', r'\1', body.strip())
    return len(re.sub(r'[*_]', '', body).split())


def fix(path: str) -> int:
    lines = open(path, encoding='utf-8').read().split('\n')
    n = 0
    for i, l in enumerate(lines):
        m = re.search(r'\((\d+) words\)\s*$', l.strip())
        if m:                                   # claim at the end of the line
            real = count(l)
            if real != int(m.group(1)):
                lines[i] = re.sub(r'\(\d+ words\)(\s*)$', f'({real} words)\\1', l)
                n += 1
            continue
        m = re.search(r'Sample\s*\((\d+) words\):', l)
        if m:                                   # claim at the front of a sample
            real = count(l)
            if real != int(m.group(1)):
                lines[i] = l.replace(m.group(0), f'Sample ({real} words):', 1)
                n += 1
    if n:
        open(path, 'w', encoding='utf-8').write('\n'.join(lines))
    return n


if __name__ == '__main__':
    targets = sys.argv[1:] or [
        os.path.join(ROOT, d, f)
        for d in ('units', 'keys')
        for f in sorted(os.listdir(os.path.join(ROOT, d))) if f.endswith('.md')]
    total = sum(fix(t) for t in targets)
    print(f'{total} word-count claim(s) corrected')
