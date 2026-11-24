# -*- coding: utf-8 -*-
"""Renumber the audio cues in a unit file, in document order.

The prefix comes from the book's own path, so a file in plumbline/level3 gets PL3.
Hard-coding a prefix here is what once put one book's prefix into another,
which the gates could not catch: they check the shape of a cue id and its
uniqueness, not whether it names the right book.
"""
import os, re, sys

SERIES = {"wayfinder": "W", "business": "CL", "diplomacy": "DIP",
          "architect": "KS", "pm": "TL",
          "plumbline": "PL"}

def prefix_for(path):
    full = os.path.abspath(path)
    m = re.search(r"[\\/](business|wayfinder|diplomacy|architect|pm|plumbline)[\\/]([a-z0-9]+)[\\/]", full)
    if not m:
        raise SystemExit("cannot tell which series %s belongs to" % path)
    series, lvl = m.group(1), m.group(2)
    stem = SERIES[series]
    if lvl == "starter":
        return "%s1" % stem
    d = re.search(r"\d+", lvl)
    if not d:
        raise SystemExit("cannot read a level number from %r" % lvl)
    return "%s%s" % (stem, d.group(0))

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
