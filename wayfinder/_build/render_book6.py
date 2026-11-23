# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import art_core
art_core.set_accent("#9739ae")          # Level 5 purple
import spec_z1, spec_z2, spec_z3, spec_z4
from render import render_all
S={}
for m in (spec_z1, spec_z2, spec_z3, spec_z4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, "/home/user/Animated-Courses/wayfinder/level5/figures", scale=2)
