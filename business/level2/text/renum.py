# -*- coding: utf-8 -*-
"""Renumber the audio cues in a unit file, in document order.

The prefix comes from the book's directory, so a file in business/level3 gets
CL3 and one in business/level4 gets CL4. Hard-coding it here is what put Book
2's prefix into Book 3, which the gates could not catch: they check the shape
of a cue id and its uniqueness, not whether it names the right book.
"""
import os, re, sys

def prefix_for(path):
    full = os.path.abspath(path)
    m = re.search(r"[\\/](?:business|wayfinder)[\\/]([a-z0-9]+)[\\/]", full)
    if not m:
        raise SystemExit("cannot tell which book %s belongs to" % path)
    lvl = m.group(1)
    n = re.search(r"\d+", lvl)
    if lvl == "starter": return "CL0"
    if not n: raise SystemExit("cannot read a level number from %r" % lvl)
    return "CL%s" % n.group(0)

for p in sys.argv[1:]:
    pre = prefix_for(p)
    u = re.search(r"u(\d\d)", os.path.basename(p)).group(1)
    s = open(p, encoding="utf-8").read()
    n = [0]
    def ren(m):
        n[0] += 1
        return "%%%%AUD %s-%s-%02d%%%%" % (pre, u, n[0])
    s = re.sub(r"%%AUD [^%]+%%", ren, s)
    open(p, "w", encoding="utf-8").write(s)
    print("%s  %s  cues=%d  figs=%d  words=%d"
          % (p, pre, n[0], s.count("%%FIG"), len(s.split())))
