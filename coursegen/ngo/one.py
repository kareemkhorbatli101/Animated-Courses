# -*- coding: utf-8 -*-
"""Render a single unit to .docx for a visual check: python3 one.py B11 u01"""
import os, sys, importlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
code, unit = sys.argv[1], sys.argv[2]
sys.path.insert(0, os.path.join(HERE, 'units', code))
import render as R, art, build, series
B = series.BOOKS[code]
R.set_accent(B['level']); art.set_accent(B['level'])
ctx = build.Ctx(os.path.join(HERE, 'media', code))
U = importlib.import_module(unit).U
xml, key = build.build_unit(U, ctx, B['level'], code)
out = [xml, R.pagebreak(), R.title_band('Answer Key')]
for line in key:
    out.append(R.body(line, after=40))
dest = os.path.join(HERE, 'vis', '_one_%s_%s.docx' % (code, unit))
R.build_docx(''.join(out), ctx.images, dest, 'one unit')
print(dest, len(ctx.images), 'figures', len(key), 'key blocks')
