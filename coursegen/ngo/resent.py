# -*- coding: utf-8 -*-
"""Replace a sentence inside a unit file even when it is split across string literals.
   python3 resent.py units/A22/u04.py 'old sentence' 'new sentence'"""
import sys, re, io
path, old, new = sys.argv[1], sys.argv[2], sys.argv[3]
s = io.open(path, encoding='utf-8').read()
words = old.split()
# allow literal joins:  ' <newline> '   between any two words
join = r"(?:\s*'\s*\n\s*'\s*|\s+)"
pat = re.escape(words[0]) + ''.join(join + re.escape(w) for w in words[1:])
m = list(re.finditer(pat, s))
if len(m) != 1:
    print('MATCHES %d — not replaced' % len(m)); sys.exit(1)
s = s[:m[0].start()] + new + s[m[0].end():]
io.open(path, 'w', encoding='utf-8').write(s)
print('ok %s' % path)
