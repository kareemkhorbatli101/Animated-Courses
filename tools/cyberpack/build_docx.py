#!/usr/bin/env python3
"""Render the cybersecurity problem pack to a Word document.

    python3 build_docx.py out/fms_cyber_problem_pack.docx
"""
import os
import sys

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, RGBColor, Inches

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import pack  # noqa: E402

INK = RGBColor(0x1A, 0x1A, 0x1A)
ACCENT = RGBColor(0x1F, 0x4E, 0x79)
MUTED = RGBColor(0x5A, 0x5A, 0x5A)


def style_base(doc):
    n = doc.styles["Normal"]
    n.font.name = "Calibri"
    n.font.size = Pt(11)
    n.paragraph_format.space_after = Pt(6)
    n.paragraph_format.line_spacing = 1.12


def para(doc, text="", size=11, bold=False, italic=False, color=INK,
         before=0, after=6, align=None, indent=0):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    if indent:
        p.paragraph_format.left_indent = Inches(indent)
    if align:
        p.alignment = align
    if text:
        r = p.add_run(text)
        r.font.size = Pt(size)
        r.bold = bold
        r.italic = italic
        r.font.color.rgb = color
    return p


def lead(doc, label, text, size=11):
    """A paragraph that opens with a bold label."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    r = p.add_run(label + " ")
    r.bold = True
    r.font.size = Pt(size)
    r.font.color.rgb = ACCENT
    r2 = p.add_run(text)
    r2.font.size = Pt(size)
    return p


def heading(doc, text, size=16, color=ACCENT, before=18, after=8, rule=False):
    p = para(doc, text, size=size, bold=True, color=color, before=before, after=after)
    if rule:
        pPr = p._p.get_or_add_pPr()
        from docx.oxml.ns import qn
        from docx.oxml import OxmlElement
        bdr = OxmlElement("w:pBdr")
        bottom = OxmlElement("w:bottom")
        bottom.set(qn("w:val"), "single")
        bottom.set(qn("w:sz"), "8")
        bottom.set(qn("w:space"), "4")
        bottom.set(qn("w:color"), "1F4E79")
        bdr.append(bottom)
        pPr.append(bdr)
    return p


def numbered(doc, items):
    for i, it in enumerate(items, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.paragraph_format.space_after = Pt(3)
        r = p.add_run(f"{i}.  ")
        r.bold = True
        p.add_run(it)


def build(path):
    doc = Document()
    style_base(doc)
    for s in doc.sections:
        s.top_margin = s.bottom_margin = Inches(0.9)
        s.left_margin = s.right_margin = Inches(0.95)

    # ---- cover ------------------------------------------------------------
    para(doc, pack.TITLE, size=20, bold=True, color=ACCENT, after=4)
    para(doc, pack.COURSE, size=12, bold=True, after=2)
    para(doc, pack.STRAP, size=10.5, italic=True, color=MUTED, after=14)

    heading(doc, "Teacher's note", size=14, before=6, rule=True)
    for label, text in pack.TEACHER_NOTE:
        lead(doc, label, text, size=10.5)

    # ---- Part A -----------------------------------------------------------
    doc.add_page_break()
    heading(doc, "Part A — Five texts", size=17, before=0, rule=True)

    for t in pack.TEXTS:
        heading(doc, f"{t['n']} — {t['title']}", size=14)
        lead(doc, "Before you read.", t["before"])
        para(doc, after=2)
        for b in t["body"]:
            para(doc, b, after=7)
        heading(doc, "Comprehension", size=11.5, before=8, after=4)
        numbered(doc, t["comp"])
        lead(doc, "Words in the text.", "Find the word or phrase that means: " + t["words"])
        lead(doc, "Talk about it.", t["talk"])

    # ---- Part B -----------------------------------------------------------
    doc.add_page_break()
    heading(doc, "Part B — Five conversations", size=17, before=0, rule=True)

    for c in pack.CONVS:
        heading(doc, f"{c['n']} — {c['title']}", size=14)
        para(doc, c["who"], size=10.5, italic=True, color=MUTED, after=8)
        for who, line in c["lines"]:
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Inches(0.95)
            p.paragraph_format.first_line_indent = Inches(-0.95)
            p.paragraph_format.space_after = Pt(5)
            r = p.add_run(who + ":  ")
            r.bold = True
            r.font.color.rgb = ACCENT
            p.add_run(line)
        heading(doc, "Comprehension", size=11.5, before=8, after=4)
        numbered(doc, c["comp"])
        lead(doc, "Useful phrases.", c["phrases"])
        lead(doc, "Role-play.", c["role"])

    # ---- key --------------------------------------------------------------
    doc.add_page_break()
    heading(doc, "Answer Key", size=17, before=0, rule=True)
    para(doc, "Comprehension answers accept any wording that carries the same meaning.",
         size=10.5, italic=True, color=MUTED, after=10)

    for t in pack.TEXTS:
        heading(doc, f"{t['n']} — {t['title']}", size=12, before=10, after=4)
        numbered(doc, t["key"])
        lead(doc, "Words.", t["wordskey"])

    for c in pack.CONVS:
        heading(doc, f"{c['n']} — {c['title']}", size=12, before=10, after=4)
        numbered(doc, c["key"])

    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    doc.save(path)

    words = sum(len(b.split()) for t in pack.TEXTS for b in t["body"])
    words += sum(len(l.split()) for c in pack.CONVS for _, l in c["lines"])
    print(f"[docx] {path}")
    print(f"       {len(pack.TEXTS)} texts, {len(pack.CONVS)} conversations, "
          f"~{words} words of reading/dialogue")
    for t in pack.TEXTS:
        print(f"       {t['n']}: {sum(len(b.split()) for b in t['body'])} words")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else "out/fms_cyber_problem_pack.docx")
