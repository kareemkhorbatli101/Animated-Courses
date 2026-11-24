# -*- coding: utf-8 -*-
"""Plumbline (Academic English for IELTS), Book 3 build driver.
The art system and the Word converter are shared with the other series and live
in wayfinder/_build; this series adds only its own figure specs and drivers."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import build_docx
from docx.shared import RGBColor
build_docx.ACC = RGBColor(0x3f,0x6b,0x2f)
build_docx.FIGDIR = os.path.join(ROOT, "plumbline", "level3", "figures")
from build_docx import *
import build_book
build_book.TEXT = os.path.join(ROOT, "plumbline", "level3", "text")
build_book.OUT  = os.path.join(ROOT, "plumbline", "Plumbline-2-Book3.docx")
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Plumbline")
    p = para(doc,"WF Book Title","2"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","Academic English for IELTS \u00b7 International Edition")
    rule(doc, "3f6b2f")
    for t in ["Target band 5.5 · CEFR B2 \u00b7 Student Book","Starting Point and twelve units",
              "the Academic Reading paper"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption",'This is an independent first-edition teaching draft. It is not published, endorsed or approved by the British Council, by IDP: IELTS Australia, by Cambridge University Press & Assessment, or by any other examination body, and it carries no official status. IELTS is the trademark of its owners and is named here only to say which examination this book prepares for. No question, passage, recording or prompt from any past examination is reproduced: every practice item in this book was written for it. Every published document, paper and standard quoted in a reading text is real, and the text names it, its edition or its date, and what its own authors say it does not cover. A practice test is not a prediction of a score.')
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
    rr = h.add_run("Plumbline 2")
    rr.font.size=Pt(8.5); rr.font.name=DISP; rr.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
