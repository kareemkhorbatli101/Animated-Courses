#!/usr/bin/env python3
"""qa/house.py — the per-unit house figures that repeat in all ten units.

Counts, for every unit of the built book, the fixtures measured off the
source, and reports any unit that is off the house number.

    python3 -I qa/house.py <book.docx>
"""
import os, re, sys, zipfile

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "tools"))

HOUSE = {               # per unit, from the measured source
    "part bars": 11, "tables": 16, "matching rows": 78, "MCQ options": 40,
    "pronunciation": 6, "glossary words": 10, "spiral items": 5,
    "can-do boxes": 5, "audio tracks": 5, "figures": 4, "captions": 4,
    "watch-out": 1, "model slots": 7, "empty models": 0,
}


def toks(p):
    x = zipfile.ZipFile(p).read("word/document.xml").decode()
    b = x[x.find("<w:body>"):]
    return re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)


def txt(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))


def count(unit):
    c = dict.fromkeys(HOUSE, 0)
    glossary = 0
    for i, t in enumerate(unit):
        s = txt(t)
        if t.startswith("<w:tbl>"):
            c["tables"] += 1
            cols = re.findall(r'<w:gridCol w:w="(\d+)"', t)
            if len(cols) != 4:          # every table but the grammar focus box
                c["matching rows"] += len(re.findall(r"<w:tr\b", t))
            continue
        if 'w:fill="0066CC"' in t or 'w:fill="FF9900"' in t:
            c["part bars"] += 1
        if "<w:drawing>" in t:
            c["figures"] += 1
        if '<w:sz w:val="18"/>' in t and s.startswith("Figure"):
            c["captions"] += 1
        if s.strip().startswith("○"):
            c["MCQ options"] += 1
        if '<w:color w:val="1F3864"/>' in t and "<w:b/>" in t and "—" in s \
                and '<w:sz w:val="18"/>' not in t and '<w:sz w:val="40"/>' not in t:
            c["pronunciation"] += 1
        if "Audio Track" in s:
            c["audio tracks"] += 1
        if s.strip().startswith("☐"):
            c["can-do boxes"] += 1
        if 'w:fill="FBECEC"' in t:
            c["watch-out"] += 1
        if s.startswith("Model — read this first:"):
            c["model slots"] += 1
            nxt = unit[i + 1] if i + 1 < len(unit) else ""
            if 'w:fill="F8F8F8"' in nxt and not txt(nxt).strip():
                c["empty models"] += 1
        if s.startswith("Unit ") and "glossary" in s:
            glossary = i
    if glossary:
        c["glossary words"] = len([w for w in txt(unit[glossary + 1]).split("·") if w.strip()])
    # spiral items: the numbered lines under Part 10's Spiral Review
    for i, t in enumerate(unit):
        if txt(t).startswith("Part 10: Spiral Review"):
            j, n = i + 1, 0
            while j < len(unit) and not txt(unit[j]).startswith("Part 10: Can-Do"):
                if re.match(r"[1-9]\.", txt(unit[j]).strip()):
                    n += 1
                j += 1
            c["spiral items"] = n
    return c


def main():
    t = toks(sys.argv[1])
    heads = [i for i, e in enumerate(t)
             if '<w:sz w:val="40"/>' in e and "<w:b/>" in e]
    bad = 0
    print(f"{'unit':>5} " + " ".join(f"{k.split()[0][:6]:>7}" for k in HOUSE))
    for n, a in enumerate(heads, 1):
        b = heads[n] if n < len(heads) else len(t)
        c = count(t[a:b])
        row = f"{n:>5} "
        for k, want in HOUSE.items():
            ok = c[k] == want
            bad += 0 if ok else 1
            row += f"{c[k]:>7}" if ok else f"{c[k]:>6}!"
        print(row)
    print("expected " + " ".join(f"{v:>7}" for v in HOUSE.values()))
    print(f"-- {len(heads)} units; {bad} house figure(s) off")
    sys.exit(1 if bad else 0)


main()
