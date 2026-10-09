#!/usr/bin/env python3
"""Normalise multi-clue lines to YAML lists, then structurally validate blocks."""
import re, glob, sys, yaml, os
ITEMS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data', 'items')
pat = re.compile(r'^(    clue: )("(?:[^"]*)"(?:, "(?:[^"]*)")+)$', re.M)
for p in glob.glob(os.path.join(ITEMS, '*.yaml')):
    s = open(p).read()
    s2 = pat.sub(lambda m: m.group(1) + '[' + m.group(2) + ']', s)
    if s2 != s:
        open(p, 'w').write(s2); print('normalised', os.path.basename(p))
bad = 0
for p in sorted(glob.glob(os.path.join(ITEMS, '*.yaml'))):
    try:
        d = yaml.safe_load(open(p))
    except Exception as e:
        print('PARSE FAIL', os.path.basename(p), e); bad += 1; continue
    for it in d['items']:
        for f in ('id','word','options','answer','traps','passage','clue','relation','noise','pathway','key'):
            if f not in it: print('MISSING', it.get('id'), f); bad += 1
        if set(it['key']) != set(it['traps']):
            print('KEY/TRAP MISMATCH', it['id'], sorted(it['key']), sorted(it['traps'])); bad += 1
        if it['options'][ord(it['answer'])-97] != it['word']:
            print('ANSWER/WORD MISMATCH', it['id'], it['word'], it['options']); bad += 1
    print(os.path.basename(p), len(d['items']), 'items')
sys.exit(1 if bad else 0)
