#!/usr/bin/env python3
"""
compile.py — turn the line-oriented DSL in ../content into the Student's Book (.docx).

Every tag maps onto one element of the design system decoded in render.py.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist", "EnglishForAccountants_International_StudentBook.docx")

PART_EMOJI = {"1": "\U0001F9F1", "2": "\U0001F9F1", "3": "\U0001F3A7", "4": "\U0001F5E3",
              "5": "\U0001F4D6", "6": "✍️", "7": "\U0001F50A", "8": "\U0001F9FE"}


LABEL = re.compile(r"^(~?[^:~]+:)(~(?=\s|$))?\s*(.*)$", re.S)


def split_label(line):
    """'~Example:~ "..."' -> ('~Example:~', '"..."'); 'Grammar:~x~' -> ('Grammar:', '~x~')"""
    m = LABEL.match(line)
    if not m:
        return line.strip(), ""
    return m.group(1) + (m.group(2) or ""), m.group(3).strip()


def parse(path):
    """-> [(tag, args, body_lines)]"""
    blocks, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if re.match(r"@[A-Z]", raw):
            if cur:
                blocks.append(cur)
            tag, _, rest = raw[1:].partition(" ")
            args = [a.strip() for a in rest.split("|")] if rest.strip() else []
            cur = (tag, args, [])
        elif cur is not None and raw.strip():
            cur[2].append(raw.rstrip())
    if cur:
        blocks.append(cur)
    return blocks


# Blocks that continue the list already open; anything else starts a new one.
IN_LIST = {"NUM", "LINE", "BULLET", "SUB", "BULLETLABEL", "SUBLABEL",
           "BOX", "TFBOX", "LBOX", "SCRIPT", "BSCRIPT"}


def emit(doc, blocks, where):
    for tag, a, body in blocks:
        text = " ".join(body) if body else (a[0] if a else "")
        if tag not in IN_LIST:
            doc.new_list()

        if tag == "BOOK":
            doc.book_title("\U0001F4D8", text)
        elif tag == "PB":
            doc.pagebreak()
        elif tag == "UNITHEAD":
            doc.emoji_head("\U0001F4D8", f"Unit {a[0]}: {a[1]}")
        elif tag == "WARMUP":
            doc.emoji_head("\U0001F4CD", f"UNIT {a[0]}: Warm-Up – {a[1]}")
        elif tag == "PART":
            doc.emoji_head(PART_EMOJI[a[0]], f"UNIT {a[1]}: PART {a[0]}: {a[2]}")
        elif tag == "APPHEAD":
            doc.emoji_head("\U0001F4DA", text)
        elif tag == "CONTENT":
            doc.emoji_head("\U0001F4D8", text)
        elif tag == "PARTGUIDE":
            doc.emoji_head(a[0], a[1])
        elif tag == "H2":
            doc.bold_line(text)
        elif tag == "BOLD":
            # a fully bold body line: the word bank the source sets in bold
            for l in ([a[0]] if a else []) + body:
                doc.bold_line(l)
        elif tag == "BLABEL":
            doc.bold_labelled(a[0] + ":", " ".join(body) if body else
                              (a[1] if len(a) > 1 else ""))
        elif tag == "TASK":
            doc.task_head(text)
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                doc.line(l)
        elif tag == "LABEL":
            doc.labelled(a[0] + ":", " ".join(body) if body else
                         (a[1] if len(a) > 1 else ""))
        elif tag == "ITALIC":
            doc.italic(text)
        elif tag == "BULLET":
            for l in body:
                doc.bullet(l)
        elif tag == "SUB":
            for l in body:
                doc.bullet(l, lvl=1)
        elif tag == "SUBLABEL":
            for l in body:
                lab, rest = split_label(l)
                doc.bullet_label(lab, rest, lvl=1)
        elif tag == "BULLETLABEL":
            for l in body:
                doc.bullet_label(*split_label(l))
        elif tag == "NUM":
            for l in body:
                doc.number(l)
        elif tag == "SCRIPT":
            for l in body:
                doc.line(l)
        elif tag == "BSCRIPT":
            # Appendix B sets its whole audio script in bold, line by line.
            for l in body:
                doc.bold_line(l)
        elif tag == "BOX":
            # the self-assessment checklists: bulleted, box at the end
            for l in body:
                doc.bullet(l + " [ ]")
        elif tag == "TFBOX":
            # the true/false tasks: numbered, box at the end
            for l in body:
                doc.number(l + " [ ]")
        elif tag == "LBOX":
            # Unit 1's peer-review checklist puts the box first
            for l in body:
                doc.bullet("[ ] " + l)
        elif tag in ("TABLE", "TABLEB"):
            # TABLEB sets the first column in bold, as the grammar boxes do
            header = [c.strip() for c in a]
            rows = [[c.strip() for c in l.split("|")] for l in body]
            doc.grid(header, rows, bold_first=(tag == "TABLEB"))
        else:
            raise SystemExit(f"unknown tag @{tag} in {where}")


def order(p):
    b = os.path.basename(p)
    if b == "front.txt":
        return (0, 0)
    m = re.match(r"unit-(\d+)\.txt", b)
    if m:
        return (1, int(m.group(1)))
    m = re.match(r"appendix-([abc])\.txt", b)
    return (2, "abc".index(m.group(1)))


def main():
    doc = Doc()
    files = sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")), key=order)
    if not files:
        raise SystemExit("no content files")
    for f in files:
        emit(doc, parse(f), os.path.basename(f))
    size = doc.build(OUT, "English for Accountants — International Edition")
    print(f"wrote {OUT} {size} bytes")


if __name__ == "__main__":
    main()
