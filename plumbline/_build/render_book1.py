# -*- coding: utf-8 -*-
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import art_core
art_core.set_accent("#1f4e79")          # Plumbline Foundation
import spec_qa1, spec_qa2, spec_qa3, spec_qa4
from render import render_all
S={}
for m in (spec_qa1, spec_qa2, spec_qa3, spec_qa4): S.update(m.S)
def key(k):
    u,f = k.split("-f"); return (u, int(f))
items=[]
for k in sorted(S, key=key):
    svg,w,h = S[k]()
    items.append((k, svg, w, h))
render_all(items, os.path.join(ROOT, "plumbline", "level1", "figures"), scale=2)
