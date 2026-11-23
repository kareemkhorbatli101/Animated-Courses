# -*- coding: utf-8 -*-
"""Clearline Book 4 build driver. The art system and the Word converter are
shared with the Wayfinder series and live in wayfinder/_build; this series adds
only its own figure specs, icons and drivers."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import build_docx
from docx.shared import RGBColor
build_docx.ACC = RGBColor(0xa8,0x24,0x3c)
build_docx.FIGDIR = os.path.join(ROOT, "business", "level4", "figures")
from build_docx import *
import build_book
build_book.TEXT = os.path.join(ROOT, "business", "level4", "text")
build_book.OUT  = os.path.join(ROOT, "business", "Clearline-3-Book4.docx")
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Clearline")
    p = para(doc,"WF Book Title","3"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","Business English \u00b7 International Edition")
    rule(doc, "a8243c")
    for t in ["CEFR B1+ \u00b7 Student Book","Starting Point and twelve units","Ostberg · carrying it"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption","This is a first edition draft. Every company, person, document and "
           "transaction in this book is invented. Every figure quoted in a reading text is real "
           "and its source is named.")
    p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    doc.add_page_break()
build_book.title_page = title_page
def setup(doc):
    s = doc.sections[0]
    s.page_width, s.page_height = Inches(8.27), Inches(11.69)
    s.left_margin = s.right_margin = Inches(0.95)
    s.top_margin = Inches(0.85); s.bottom_margin = Inches(0.85)
    f = s.footer.paragraphs[0]; f.alignment = WD_ALIGN_PARAGRAPH.CENTER
    build_book.page_number_field(f)
    h = s.header.paragraphs[0]; h.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    rr = h.add_run("Clearline 3"); rr.font.size=Pt(8.5); rr.font.name=DISP; rr.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
