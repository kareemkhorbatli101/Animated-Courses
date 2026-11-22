# -*- coding: utf-8 -*-
import sys, os, io, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_docx import *
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_SECTION
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

TEXT = "/home/user/Animated-Courses/wayfinder/starter/text"
OUT  = "/home/user/Animated-Courses/wayfinder/Wayfinder-Starter-Book1.docx"

def page_number_field(par):
    for el, txt in ((OxmlElement('w:fldChar'), None), (OxmlElement('w:instrText'), "PAGE"),
                    (OxmlElement('w:fldChar'), None)):
        pass
    run = par.add_run()
    f1=OxmlElement('w:fldChar'); f1.set(qn('w:fldCharType'),'begin')
    it=OxmlElement('w:instrText'); it.set(qn('xml:space'),'preserve'); it.text=" PAGE "
    f2=OxmlElement('w:fldChar'); f2.set(qn('w:fldCharType'),'end')
    run._r.append(f1); run._r.append(it); run._r.append(f2)
    run.font.size=Pt(9); run.font.name=DISP; run.font.color.rgb=MUT

def setup(doc):
    s = doc.sections[0]
    s.page_width, s.page_height = Inches(8.27), Inches(11.69)   # A4
    s.left_margin = s.right_margin = Inches(0.95)
    s.top_margin = Inches(0.85); s.bottom_margin = Inches(0.85)
    f = s.footer.paragraphs[0]; f.alignment = WD_ALIGN_PARAGRAPH.CENTER
    page_number_field(f)
    h = s.header.paragraphs[0]; h.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r = h.add_run("Wayfinder Starter"); r.font.size=Pt(8.5); r.font.name=DISP; r.font.color.rgb=MUT

def title_page(doc):
    for _ in range(5): doc.add_paragraph()
    para(doc,"WF Book Title","Wayfinder")
    p = para(doc,"WF Book Title","Starter"); p.runs[0].font.color.rgb=INK
    para(doc,"WF Book Sub","Communication for Study, Work and Life")
    rule(doc)
    for t in ["CEFR A1 · Student Book","Starting Point and twelve units",
              "Portmere · a city by the sea"]:
        p=para(doc,"WF Body",t); p.alignment=WD_ALIGN_PARAGRAPH.CENTER
        p.runs[0].font.color.rgb=MUT; p.runs[0].font.size=Pt(11)
    for _ in range(8): doc.add_paragraph()
    p=para(doc,"WF Caption","This is a first edition draft. All characters, places, companies, "
           "documents and data in this book are invented.")
    p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    doc.add_page_break()

def main():
    doc = Document(); build_styles(doc); setup(doc)
    title_page(doc)
    render_unit(doc, os.path.join(TEXT,"front.md"), first=True)
    for f in ["u00.md"]+["u%02d.md"%i for i in range(1,13)]:
        render_unit(doc, os.path.join(TEXT,f), first=False)
    doc.add_page_break()
    render_unit(doc, os.path.join(TEXT,"back.md"), first=True)
    doc.save(OUT)
    return OUT

if __name__ == "__main__":
    p = main()
    print("saved", p, "%.1f MB"%(os.path.getsize(p)/1e6))
