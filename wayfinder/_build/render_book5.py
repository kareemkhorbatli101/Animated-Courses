# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import art_core
art_core.set_accent("#3d7a14")          # Level 4 green
import spec_y1, spec_y2, spec_y3, spec_y4
from render import render_all
S={}
for m in (spec_y1, spec_y2, spec_y3, spec_y4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, "/home/user/Animated-Courses/wayfinder/level4/figures", scale=2)
