# -*- coding: utf-8 -*-
"""Throughline (English for Project Managers), Book 3 build driver.
The art system and the Word converter are shared with the other series and live
in wayfinder/_build; this series adds only its own figure specs and drivers."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import build_docx
from docx.shared import RGBColor
build_docx.ACC = RGBColor(0x5c,0x3b,0x7a)
build_docx.FIGDIR = os.path.join(ROOT, "pm", "level3", "figures")
from build_docx import *
import build_book
build_book.TEXT = os.path.join(ROOT, "pm", "level3", "text")
build_book.OUT  = os.path.join(ROOT, "pm", "Throughline-2-Book3.docx")
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Throughline")
    p = para(doc,"WF Book Title","2"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","English for Project Managers \u00b7 International Edition")
    rule(doc, "5c3b7a")
    for t in ["CEFR B1 · Student Book","Starting Point and twelve units",
              "measure, report, decide"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption","This is an independent first-edition teaching draft. It is not "
           "published or endorsed by any standards body, institute or professional association, "
           "and it carries no official status. Nothing in it is legal, financial or contractual "
           "advice. Every person, team, company, project and incident in this book is invented. "
           "Every standard, paper, report and published method quoted in a reading text is real, "
           "and the text names the document, its edition or date, and what its own authors say it "
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
    rr = h.add_run("Throughline 2")
    rr.font.size=Pt(8.5); rr.font.name=DISP; rr.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
