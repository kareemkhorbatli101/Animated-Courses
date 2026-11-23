# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import art_core
art_core.set_accent("#1e6ac9")          # Level 3 blue
import spec_x1, spec_x2, spec_x3, spec_x4
from render import render_all
S={}
for m in (spec_x1, spec_x2, spec_x3, spec_x4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, "/home/user/Animated-Courses/wayfinder/level3/figures", scale=2)
