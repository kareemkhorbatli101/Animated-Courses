# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import art_core
art_core.set_accent("#ab7200")          # Level 2 amber
import spec_w1, spec_w2, spec_w3
from render import render_all
S={}; S.update(spec_w1.S); S.update(spec_w2.S); S.update(spec_w3.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, "/home/user/Animated-Courses/wayfinder/level2/figures", scale=2)
