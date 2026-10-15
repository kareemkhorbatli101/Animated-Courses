#!/usr/bin/env python3
"""qa/check.py — compare the International Edition against the source, element by element."""
import os, re, sys, zipfile, collections

# The source book's unzipped document.xml; override with ACC_SRC.
SRC = os.environ.get("ACC_SRC", "src/word/document.xml")
OUT = "dist/EnglishForAccountants_International_StudentBook.docx"

def load(x):
    paras = re.findall(r"<w:p\b.*?</w:p>", x, re.S)
    return x, paras

def txt(p):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", p))

def profile(x, paras):
    d = collections.OrderedDict()
    d["words"] = sum(len(t.split()) for t in re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", x))
    d["paragraphs"] = len(paras)
    d["page breaks"] = x.count('w:type="page"')
    d["tables"] = x.count("<w:tbl>")
    d["table rows"] = len(re.findall(r"<w:tr\b", x))
    d["table cells"] = x.count("<w:tc>")
    d["bold paragraphs"] = sum(1 for p in paras if _allbold(p))
    d["emphasis paragraphs"] = sum(1 for p in paras if _mixedbold(p))
    d["italic paragraphs"] = sum(1 for p in paras if "<w:i/>" in p)
    d["emoji characters"] = sum(len(re.findall(r"[\U0001F300-\U0001FAFF]", t))
                               for t in re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", x))
    d["bulleted paras"] = sum(1 for p in paras if "numPr" in p and _fmt(x, p) == "bullet")
    d["numbered paras"] = sum(1 for p in paras if "numPr" in p and _fmt(x, p) == "decimal")
    d["sub-level paras"] = sum(1 for p in paras if 'ilvl w:val="1"' in p)
    d["checkbox lines"] = sum(1 for p in paras if txt(p).rstrip().endswith("[ ]"))
    d["blank-filling gaps"] = len(re.findall(r"_{4,}", x))
    d["curly apostrophes"] = x.count("’")
    d["straight apostrophes"] = len(re.findall(r"<w:t[^>]*>[^<]*'", x))
    return d

def _runs(p):
    return [r for r in re.findall(r"<w:r\b(?:(?!</w:r>).)*</w:r>", p, re.S) if txt(r).strip()]


def _allbold(p):
    rs = _runs(p)
    return bool(rs) and all("<w:b/>" in r for r in rs)


def _mixedbold(p):
    rs = _runs(p)
    n = sum(1 for r in rs if "<w:b/>" in r)
    return 0 < n < len(rs)


_NUMCACHE = {}
def _fmt(x, p):
    """bullet or decimal, resolved through the document's own numbering part"""
    m = re.search(r'numId w:val="(\d+)"', p)
    if not m:
        return None
    key = (id(x), m.group(1))
    if key not in _NUMCACHE:
        _NUMCACHE[key] = _NUM[id(x)].get(m.group(1), "?")
    return _NUMCACHE[key]

_NUM = {}
def numbering(x, numxml):
    abstract = {}
    for blk in re.findall(r"<w:abstractNum .*?</w:abstractNum>", numxml, re.S):
        i = re.search(r'w:abstractNumId="(\d+)"', blk).group(1)
        f = re.search(r'<w:numFmt w:val="(\w+)"/>', blk)
        abstract[i] = f.group(1) if f else "?"
    out = {}
    for nid, aid in re.findall(r'<w:num w:numId="(\d+)"[^>]*>\s*<w:abstractNumId w:val="(\d+)"/>',
                               numxml):
        out[nid] = abstract.get(aid, "?")
    _NUM[id(x)] = out

def main():
    sx = open(SRC, encoding="utf-8").read()
    snum = open(SRC.replace("document.xml", "numbering.xml"), encoding="utf-8").read()
    z = zipfile.ZipFile(OUT)
    ox = z.read("word/document.xml").decode()
    onum = z.read("word/numbering.xml").decode()
    numbering(sx, snum); numbering(ox, onum)
    sp = profile(*load(sx)); op = profile(*load(ox))

    print(f"{'metric':24} {'source':>9} {'intl':>9} {'delta':>9}")
    print("-" * 54)
    bad = 0
    for k in sp:
        a, b = sp[k], op[k]
        d = b - a
        pct = (d / a * 100) if a else 0
        flag = ""
        if k in ("tables", "page breaks") and d:
            flag = "  <-- must match"; bad += 1
        elif a and abs(pct) > 12 and k not in ("straight apostrophes",
                                               "curly apostrophes"):
            flag = f"  ({pct:+.0f}%)"
        print(f"{k:24} {a:>9} {b:>9} {d:>+9}{flag}")

    # per-section word counts
    print("\nper-section words")
    print("-" * 54)
    for name, sa, oa in sections(sx, ox):
        d = oa - sa
        print(f"{name:24} {sa:>9} {oa:>9} {d:>+9}  ({d/sa*100:+.1f}%)" if sa else name)
    return 1 if bad else 0

def words(x):
    return sum(len(t.split()) for t in re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", x))

MARKS = [("front", r"^\U0001F4D8 English for Accountants"),
         ("units 1-10", r"^\U0001F4CD UNIT 1:"),
         ("appendix A", r"Appendix A:"),
         ("appendix B", r"Extended Listening Passages"),
         ("appendix C", r"comprehensive extended case")]

def sections(sx, ox):
    def cut(x):
        paras = re.findall(r"<w:p\b.*?</w:p>", x, re.S)
        pos = []
        for _, pat in MARKS:
            for i, p in enumerate(paras):
                if re.search(pat, txt(p)):
                    pos.append(i); break
            else:
                pos.append(len(paras))
        pos.append(len(paras))
        return [words("".join(paras[a:b])) for a, b in zip(pos, pos[1:])]
    s, o = cut(sx), cut(ox)
    return [(MARKS[i][0], s[i], o[i]) for i in range(len(MARKS))]

if __name__ == "__main__":
    sys.exit(main())
