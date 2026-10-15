#!/usr/bin/env python3
"""qa/outline.py <docx-or-document.xml> [start] [end]
Prints the document in reading order with the formatting that actually renders:
  style | fill | border | indent | list | size | colour | B
"""
import os, re, sys, zipfile


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
            re.findall(r'<w:num w:numId="(\d+)"[^>]*>\s*<w:abstractNumId w:val="(\d+)"/>',
                       numxml)}


def txt(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s))


def sig(p, nm):
    pr = re.search(r"<w:pPr>.*?</w:pPr>", p, re.S)
    pr = pr.group(0) if pr else ""
    sty = re.findall(r'<w:pStyle w:val="([^"]+)"', pr)
    shd = re.search(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', pr)
    ind = re.search(r'w:left="(\d+)"', pr)
    m = re.search(r'numId w:val="(\d+)"', pr)
    lst = (nm.get(m.group(1), "?")[:3]) if m else "-"
    jc = re.search(r'<w:jc w:val="(\w+)"', pr)
    r = re.search(r"<w:rPr>.*?</w:rPr>", p, re.S)
    r = r.group(0) if r else ""
    sz = re.search(r'<w:sz w:val="(\d+)"', r)
    col = re.search(r'<w:color w:val="([0-9A-Fa-f]{6})"', r)
    return (f"{'PB' if '<w:pageBreakBefore/>' in pr else '  '} "
            f"{(sty[0] if sty else '-')[:9]:9} {shd.group(1) if shd else '-':7} "
            f"{'bdr' if '<w:pBdr>' in pr else '   '} {ind.group(1) if ind else '-':4} "
            f"{lst:3} {jc.group(1) if jc else '-':6} {sz.group(1) if sz else '-':3} "
            f"{col.group(1) if col else '-':7} {'B' if '<w:b/>' in r else '.'}")


def outline(path, start=None, end=None, width=70):
    x, numxml = load(path)
    nm = nummap(numxml)
    body = x[x.find("<w:body>"):]
    toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b.*?</w:p>", body, re.S)
    # "text#2" selects the second paragraph that starts with text
    def find(mark, frm=0):
        mark, _, nth = mark.partition("#")
        nth = int(nth or 1)
        hits = [i for i, t in enumerate(toks) if i >= frm and txt(t).startswith(mark)]
        return hits[nth - 1] if len(hits) >= nth else None
    a = find(start) if start else 0
    if a is None:
        a = 0
    b = find(end, a + 1) if end else None
    toks = toks[a:b]
    out = []
    for t in toks:
        if t.startswith("<w:tbl>"):
            rows = re.findall(r"<w:tr\b.*?</w:tr>", t, re.S)
            out.append(f"TABLE {len(rows)}x{rows[0].count('<w:tc>')}")
            continue
        s = txt(t)
        pb = "PB " if "<w:pageBreakBefore/>" in t else "   "
        if not s.strip():
            out.append(pb + "(blank)")
            continue
        out.append(pb + sig(t, nm) + " " + s[:width])
    return out


if __name__ == "__main__":
    a = sys.argv[1:]
    print("\n".join(outline(a[0], a[1] if len(a) > 1 else None,
                            a[2] if len(a) > 2 else None)))
