# -*- coding: utf-8 -*-
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import art_core
art_core.set_accent("#3f6b2f")          # Plumbline 2
import spec_qc1, spec_qc2, spec_qc3, spec_qc4
from render import render_all
S={}
for m in (spec_qc1, spec_qc2, spec_qc3, spec_qc4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, os.path.join(ROOT, "plumbline", "level3", "figures"), scale=2)
