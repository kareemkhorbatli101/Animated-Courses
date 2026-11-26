# -*- coding: utf-8 -*-
"""Flowline (English for the Oil and Gas Industries, Syrian Edition), Book 1
build driver. The art system and the Word converter are shared with the other
series and live in wayfinder/_build; this series adds only its own figure specs
and drivers."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(ROOT, "wayfinder", "_build"))
import build_docx
from docx.shared import RGBColor
build_docx.ACC = RGBColor(0x7a,0x3b,0x1f)
build_docx.FIGDIR = os.path.join(ROOT, "flowline", "level1", "figures")
from build_docx import *
import build_book
build_book.TEXT = os.path.join(ROOT, "flowline", "level1", "text")
build_book.OUT  = os.path.join(ROOT, "flowline", "Flowline-Foundation-Book1.docx")
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Flowline")
    p = para(doc,"WF Book Title","Foundation"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","English for the Oil and Gas Industries \u00b7 Syrian Edition")
    rule(doc, "7a3b1f")
    for t in ["CEFR A2 \u00b7 Student Book","Starting Point and twelve units",
              "The Wellhead and the Words"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption",'This is an independent first-edition teaching draft. It is not published, endorsed or approved by the Syrian Ministry of Petroleum and Mineral Resources, by the Syrian Petroleum Company, by any other Syrian state body, by any standards organization named in it, or by any company. It carries no official status, and nothing in it is engineering, legal, safety, commercial or regulatory advice. Jazira Petroleum Operations and every field, station, person, figure and incident attached to it were written for this book. The standards, papers, inquiry reports and guidance documents quoted in the reading texts are real, and each text names the document, its edition or date, and the limits its own authors state. The real places, companies and infrastructure named — Deir ez-Zor, Hasakah, Homs, Banias, the Arab Gas Pipeline, the Kirkuk–Banias line, the Syrian Petroleum Company — are named as matters of public record only. Safety information in a language course is not a substitute for a competent person, a procedure and a permit.')
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
    rr = h.add_run("Flowline Foundation")
    rr.font.size=Pt(8.5); rr.font.name=DISP; rr.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
