# -*- coding: utf-8 -*-
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import art_core
art_core.set_accent("#4a3b6b")          # Plumbline 5
import spec_qf1, spec_qf2, spec_qf3, spec_qf4
from render import render_all
S={}
for m in (spec_qf1, spec_qf2, spec_qf3, spec_qf4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, os.path.join(ROOT, "plumbline", "level6", "figures"), scale=2)
