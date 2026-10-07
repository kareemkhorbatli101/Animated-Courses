#!/usr/bin/env python3
"""Print only the sections of a chapter that carry a determinate answer, so a
key can be authored against them without re-reading the whole unit."""
import re, sys
from pathlib import Path

WANT = re.compile(r'^### (0B|1B|2A|3D|3E|3H|5C|5D|5E|6A|6B|6C|6D|6E|6F|7C|12A)\b')
STOP = re.compile(r'^### |^## ')

for path in sys.argv[1:]:
    t = Path(path).read_text(encoding='utf-8').split('\n')
    print(f'########## {Path(path).name}')
    i = 0
    while i < len(t):
        if WANT.match(t[i]):
            print(t[i]); i += 1
            while i < len(t) and not STOP.match(t[i]):
                if t[i].strip():
                    print(t[i])
                i += 1
            print()
        else:
            i += 1
