#!/usr/bin/env python3
"""qa/check.py — whole-document metrics, built book against the source.

Thirty counts taken the same way from both files.  Metrics that the declared
improvements change on purpose (filled model boxes, and the words and pages
they add) are marked and not counted as faults.

    python3 -I qa/check.py <source.docx> <built.docx>
"""
import re, sys, zipfile

EXPECTED_TO_DIFFER = {"empty boxes", "words", "filled boxes"}


def doc(p):
    return zipfile.ZipFile(p).read("word/document.xml").decode()


def metrics(p):
    x = doc(p)
    b = x[x.find("<w:body>"):]
    toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)

    def txt(s):
        return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))

    paras = [t for t in toks if not t.startswith("<w:tbl>")]
    tbls = [t for t in toks if t.startswith("<w:tbl>")]
    m = {}
    m["elements"] = len(toks)
    m["paragraphs"] = len(re.findall(r"<w:p\b", b))
    m["tables"] = len(tbls)
    m["table rows"] = len(re.findall(r"<w:tr\b", b))
    m["table cells"] = len(re.findall(r"<w:tc>", b))
    m["images"] = len(re.findall(r"<w:drawing>", b))
    m["page breaks"] = len(re.findall(r'w:type="page"', b))
    m["sectPr"] = len(re.findall(r"<w:sectPr", b))
    m["unit heads"] = sum('<w:sz w:val="40"/>' in t for t in paras)
    m["warm-up bars"] = sum('w:fill="FF9900"' in t for t in paras)
    m["part bars"] = sum('w:fill="0066CC"' in t for t in paras)
    m["track labels"] = sum('<w:sz w:val="20"/>' in t and "<w:b/>" in t
                            and "<w:i/>" in t for t in paras)
    m["subtitles"] = sum('<w:sz w:val="20"/>' in t and "<w:i/>" in t
                         and "<w:b/>" not in t for t in paras)
    m["exercise heads"] = sum('<w:sz w:val="24"/>' in t for t in paras)
    m["captions"] = sum('<w:sz w:val="18"/>' in t for t in paras)
    m["instruction (blue)"] = sum('w:fill="E6F3FF"' in t for t in paras)
    m["instruction (cream)"] = sum('w:fill="FFF9E6"' in t for t in paras)
    m["passage boxes"] = sum('w:fill="F8F8F8"' in t for t in paras)
    m["empty boxes"] = sum('w:fill="F8F8F8"' in t and not txt(t).strip()
                           for t in paras)
    m["word banks"] = sum('w:fill="FBFBEF"' in t for t in paras)
    m["gloss strips"] = sum('w:fill="EEF3F9"' in t for t in paras)
    m["watch-out boxes"] = sum('w:fill="FBECEC"' in t for t in paras)
    m["grammar boxes"] = sum(len(re.findall(r'<w:gridCol', t)) == 4 for t in tbls)
    m["MCQ options"] = sum(txt(t).strip().startswith("○") for t in paras)
    m["can-do boxes"] = sum(txt(t).strip().startswith("☐") for t in paras)
    m["pronunciation"] = sum('<w:color w:val="1F3864"/>' in t and "<w:b/>" in t
                             and '<w:sz w:val="18"/>' not in t
                             and '<w:sz w:val="40"/>' not in t for t in paras)
    m["audio chips"] = sum("Audio Track" in txt(t) for t in paras)
    m["Column A/B labels"] = sum(txt(t).strip() in ("Column A", "Column B")
                                 for t in paras)
    m["model labels"] = sum(txt(t).startswith("Model —") for t in paras)
    m["teal headers"] = len(re.findall(r'w:fill="009688"', b))
    m["words"] = len("\n".join(txt(t) for t in toks).split())
    return m


def main():
    a, b = metrics(sys.argv[1]), metrics(sys.argv[2])
    bad = 0
    print(f"{'metric':>21} {'source':>9} {'built':>9}")
    for k in a:
        same = a[k] == b[k]
        note = ""
        if not same:
            if k in EXPECTED_TO_DIFFER:
                note = "  (declared)"
            else:
                note = "  !"
                bad += 1
        print(f"{k:>21} {a[k]:>9} {b[k]:>9}{note}")
    print(f"-- {len(a)} metrics; {bad} unexplained difference(s)")
    sys.exit(1 if bad else 0)


main()
