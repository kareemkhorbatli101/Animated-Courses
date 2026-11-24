# -*- coding: utf-8 -*-
"""Keystone (English for AI-Enabled Software Architects), Book 5 build driver.
The art system and the Word converter are shared with the other series and live
in wayfinder/_build; this series adds only its own figure specs and drivers."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import build_docx
from docx.shared import RGBColor
build_docx.ACC = RGBColor(0x2f,0x6b,0x4f)
build_docx.FIGDIR = os.path.join(ROOT, "architect", "level5", "figures")
from build_docx import *
import build_book
build_book.TEXT = os.path.join(ROOT, "architect", "level5", "text")
build_book.OUT  = os.path.join(ROOT, "architect", "Keystone-4-Book5.docx")
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Keystone")
    p = para(doc,"WF Book Title","4"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","English for AI-Enabled Software Architects \u00b7 International Edition")
    rule(doc, "2f6b4f")
    for t in ["CEFR B2 \u00b7 Student Book","Starting Point and twelve units",
              "AI systems in production"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption","This is an independent first-edition teaching draft. It is not "
           "published or endorsed by any standards body, and it carries no official status. "
           "Every person, team, company, system and incident in this book is invented. Every "
           "standard, specification and published figure quoted in a reading text is real, and "
           "the text names the document, its edition or date, and what its publisher says it "
           "does not cover.")
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
    rr = h.add_run("Keystone 4")
    rr.font.size=Pt(8.5); rr.font.name=DISP; rr.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
