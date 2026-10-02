# -*- coding: utf-8 -*-
"""Rewrite the declared word counts in a unit file from the text itself.

The counts shown to the student (the passage length, the model answer length)
are facts about the text, so they are derived rather than typed.
"""
import sys, os, re, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

for a in sys.argv[1:]:
    n = int(a)
    f = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'content/u%02d.py' % n)
    U = importlib.import_module('content.u%02d' % n).UNIT
    s = open(f).read()
    pw = sum(len(x.split()) for x in U['r3']['paras'])
    mw = sum(len(x.split()) for x in U['w3']['model'])
    s = re.sub(r'(\n\s+)words=\d+,', r'\g<1>words=%d,' % pw, s, count=1)
    s = re.sub(r'(\n\s+)model_words=\d+,', r'\g<1>model_words=%d,' % mw, s, count=1)
    open(f, 'w').write(s)
    print('u%02d: passage %d words, discussion model %d words' % (n, pw, mw))
