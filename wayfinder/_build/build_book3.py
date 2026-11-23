# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_docx
from docx.shared import RGBColor
# Book 3 is the amber level.
build_docx.ACC = RGBColor(0xAB,0x72,0x00)
build_docx.FIGDIR = "/home/user/Animated-Courses/wayfinder/level2/figures"
from build_docx import *
import build_book
build_book.TEXT = "/home/user/Animated-Courses/wayfinder/level2/text"
build_book.OUT  = "/home/user/Animated-Courses/wayfinder/Wayfinder-2-Book3.docx"
def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Wayfinder")
    p = para(doc,"WF Book Title","2"); p.runs[0].font.color.rgb = INK
    para(doc,"WF Book Sub","Communication for Study, Work and Life")
    rule(doc, "AB7200")
    for t in ["CEFR A2 · Student Book","Starting Point and twelve units",
              "Portmere · two years in"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption","This is a first edition draft. All characters, places, companies, "
           "documents and data in this book are invented.")
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
    r = h.add_run("Wayfinder 2"); r.font.size=Pt(8.5); r.font.name=DISP; r.font.color.rgb=MUT
build_book.setup = setup
if __name__ == "__main__":
    p = build_book.main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
