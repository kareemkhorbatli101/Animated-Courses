#!/usr/bin/env python3
"""
compile.py — turn the line-oriented DSL in ../content into the Student's Book (.docx).

Every tag maps onto one element of the design system decoded in render.py.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIGDIR = os.path.join(ROOT, "build", "figures")
OUT = os.path.join(ROOT, "dist", "EnglishForBusiness_International_StudentBook.docx")


def parse(path):
    """-> [(tag, args, body_lines)]"""
    blocks, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if raw.strip() == "@@":
            if cur:
                cur[2].append("@@")
            continue
        if raw.startswith("@"):
            if cur:
                blocks.append(cur)
            head = raw[1:]
            tag, _, rest = head.partition(" ")
            args = [a.strip() for a in rest.split("|")] if rest.strip() else []
            cur = (tag, args, [])
        elif cur is not None:
            if raw.strip():
                cur[2].append(raw.rstrip())
    if cur:
        blocks.append(cur)
    return blocks


def emit(doc, blocks, unit):
    for tag, args, body in blocks:
        if tag == "UNIT":
            doc.pagebreak() if unit > 1 else None
            doc.unit_title(f"Unit {args[0]}: {args[1]}")
            doc.unit_sub(args[2])
        elif tag == "BANNER":
            warm = args[0].startswith("Warm Up") or args[0].startswith("Part 10")
            doc.banner(args[0], warm=warm)
        elif tag == "TRACK":
            doc.track(args[0])
        elif tag == "FIG":
            doc.fig(args[0], "")
            doc.caption(args[1] if len(args) > 1 else "")
        elif tag == "TASK":
            doc.task(args[0])
        elif tag == "RUBRIC":
            doc.rubric(args[0], warm=(len(args) > 1 and args[1] == "warm"))
        elif tag == "LINE":
            for l in ([args[0]] if args else []) + body:
                doc.line(l)
        elif tag == "ITEM":
            for l in ([args[0]] if args else []) + body:
                doc.item(l)
        elif tag == "BOLD":
            doc.bold_line(args[0])
        elif tag == "BODY":
            doc.body_text(" ".join(body) if body else args[0])
        elif tag == "FRAME":
            for l in ([args[0]] if args else []) + body:
                doc.frame(l)
        elif tag == "MATCH":
            a, b = [], []
            side = a
            for l in body:
                if l.strip() == "@@":
                    side = b
                else:
                    side.append(l.strip())
            doc.matching(a, b)
        elif tag == "BANK":
            doc.wordbank(args)
        elif tag == "MCQ":
            doc.mcq(args[0], args[1:5])
        elif tag == "GLOSS":
            doc.gloss(args[0])
        elif tag == "AUDIO":
            doc.audio(args[0])
        elif tag == "PRON":
            for l in body:
                w, _, st = l.partition("|")
                doc.pron(w.strip(), st.strip())
        elif tag == "GRAMMAR":
            rows = []
            for l in body:
                parts = [p.strip() for p in l.split("|")]
                rows.append((parts + ["", "", ""])[:3])
            doc.grammarbox(rows)
        elif tag == "REMEMBER":
            doc.remember(args[0])
        elif tag == "WATCH":
            doc.watchout(args[0])
        elif tag == "MODEL":
            doc.model_head()
            doc.body_text(" ".join(body) if body else args[0])
        elif tag == "PLAN":
            doc.plan(args[0])
        elif tag == "CHECK":
            doc.check(args)
        elif tag == "CANDO":
            doc.cando(body)
        elif tag == "GLOSSHEAD":
            doc.gloss_head(args[0])
        elif tag == "GLOSSARY":
            doc.glossary(" ".join(body) if body else args[0])
        elif tag == "PB":
            doc.pagebreak()
        else:
            raise SystemExit(f"unknown tag @{tag} in unit {unit}")


def main():
    doc = Doc(FIGDIR)
    files = sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")))
    for f in files:
        n = int(re.search(r"unit-(\d+)", f).group(1))
        emit(doc, parse(f), n)
    size = doc.build(OUT, "English for Business — International Edition")
    print(f"wrote {OUT} {size} bytes")


if __name__ == "__main__":
    main()
