#!/usr/bin/env python3
"""qa/runs.py <source> — positional diff of every paragraph's RUN structure:
the (bold, italic, underline, colour, size) of each run and how the text is split.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import outline as O

INT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist",
                   "EnglishForOfficeManagers_Syria_StudentBook_A2.docx")


def shape(p):
    """Runs merged by identical formatting: what the page actually shows."""
    out = []
    for r in re.findall(r"<w:r>.*?</w:r>|<w:r\b[^>]*>.*?</w:r>", p, re.S):
        pr = re.search(r"<w:rPr>.*?</w:rPr>", r, re.S)
        pr = pr.group(0) if pr else ""
        col = re.search(r'<w:color w:val="([0-9A-Fa-f]{6})"', pr)
        sz = re.search(r'<w:sz w:val="(\d+)"', pr)
        shd = re.search(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', pr)
        t = "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", r, re.S))
        key = ("B" if "<w:b/>" in pr else ".",
               "I" if "<w:i/>" in pr else ".",
               "U" if "<w:u " in pr else ".",
               col.group(1) if col else "-",
               sz.group(1) if sz else "-",
               shd.group(1) if shd else "-")
        if "<w:br/>" in r:
            out.append(key + ("br",))
        elif out and out[-1][:6] == key and out[-1][6] != "br":
            out[-1] = key + (out[-1][6] + len(t),)
        else:
            out.append(key + (len(t),))
    return out


def rows(p):
    x, _ = O.load(p)
    ts = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)",
                    x[x.find("<w:body>"):], re.S)
    return [("TABLE" if t.startswith("<w:tbl>") else shape(t), O.txt(t)) for t in ts]


a, b = rows(sys.argv[1]), rows(INT)
print(f"elements  source {len(a)}  twin {len(b)}")
bad = [(i, x, y, t) for i, ((x, t), (y, _)) in enumerate(zip(a, b)) if x != y]
print(f"{len(bad)} element(s) differ in run structure")
seen = {}
for i, x, y, t in bad:
    k = (str(x)[:120], str(y)[:120])
    seen.setdefault(k, [0, i, t])
    seen[k][0] += 1
for (x, y), (n, i, t) in sorted(seen.items(), key=lambda kv: -kv[1][0])[:20]:
    print(f"\n{n:4}x  first at {i}   {(t or '(blank)')[:60]}\n   S {x}\n   I {y}")
