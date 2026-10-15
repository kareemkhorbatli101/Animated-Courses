#!/usr/bin/env python3
"""qa/outline.py <docx-or-document.xml> [start-marker] [end-marker]
Prints the document in reading order with its real formatting:
  bul0/bul1 = bulleted, dec0 = numbered, --- = plain; B = bold; TABLE RxC.
"""
import re, sys, zipfile

def load(path):
    if path.endswith(".docx"):
        z = zipfile.ZipFile(path)
        return z.read("word/document.xml").decode(), z.read("word/numbering.xml").decode()
    return (open(path, encoding="utf-8").read(),
            open(path.replace("document.xml", "numbering.xml"), encoding="utf-8").read())

def nummap(numxml):
    ab = {}
    for b in re.findall(r"<w:abstractNum .*?</w:abstractNum>", numxml, re.S):
        i = re.search(r'w:abstractNumId="(\d+)"', b).group(1)
        f = re.search(r'<w:numFmt w:val="(\w+)"/>', b)
        ab[i] = f.group(1) if f else "?"
    return {n: ab.get(a, "?") for n, a in
            re.findall(r'<w:num w:numId="(\d+)"[^>]*>\s*<w:abstractNumId w:val="(\d+)"/>', numxml)}

def txt(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s))

def outline(path, start=None, end=None, width=96):
    x, numxml = load(path)
    nm = nummap(numxml)
    body = x[x.find("<w:body>"):]
    toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b.*?</w:p>", body, re.S)
    if start:
        toks = toks[next(i for i, t in enumerate(toks) if txt(t).startswith(start)):]
    if end:
        toks = toks[:next(i for i, t in enumerate(toks) if txt(t).startswith(end))]
    out = []
    for t in toks:
        if t.startswith("<w:tbl>"):
            rows = re.findall(r"<w:tr\b.*?</w:tr>", t, re.S)
            out.append(f"TABLE {len(rows)}x{len(re.findall(r'<w:tc>', rows[0]))}")
            continue
        s = txt(t)
        if 'w:type="page"' in t:
            out.append("PAGEBREAK"); continue
        if not s.strip():
            continue
        m = re.search(r'numId w:val="(\d+)"', t)
        il = re.search(r'ilvl w:val="(\d+)"', t)
        tag = (nm.get(m.group(1), "?")[:3] + (il.group(1) if il else "0")) if m else "---"
        out.append(f"{tag:5}{'B' if '<w:b/>' in t else '.'} {s[:width]}")
    return out

if __name__ == "__main__":
    a = sys.argv[1:]
    print("\n".join(outline(a[0], a[1] if len(a) > 1 else None, a[2] if len(a) > 2 else None)))
