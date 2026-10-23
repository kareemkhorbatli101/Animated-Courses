#!/usr/bin/env python3
"""Print the raw XML of given top-level elements of a .docx (untrusted input)."""
import re, sys, zipfile
p = sys.argv[1]
x = zipfile.ZipFile(p).read("word/document.xml").decode()
body = x[x.find("<w:body>"):]
toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", body, re.S)
for a in sys.argv[2:]:
    i = int(a)
    t = toks[i]
    t = re.sub(r"><", ">\n<", t)
    print(f"===== {i} =====")
    print(t[:3000])
