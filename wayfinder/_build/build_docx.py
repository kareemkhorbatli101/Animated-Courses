# -*- coding: utf-8 -*-
"""Assembles Book 1 into a single .docx with named styles, so the file can drive
a website later without re-authoring: every structural element is a Word style."""
import os, re, io, glob, json
from docx import Document
from docx.shared import Pt, Inches, RGBColor, Emu
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ACC = RGBColor(0xC9,0x45,0x2C)
INK = RGBColor(0x0B,0x0B,0x0B)
MUT = RGBColor(0x59,0x57,0x52)
BLU = RGBColor(0x1E,0x6A,0xC9)
DISP, BODY = "Verdana", "Georgia"

def _style(doc, name, size, bold=False, color=INK, font=BODY, space_before=0,
           space_after=6, italic=False, caps=False, base="Normal", align=None, keep=False):
    st = doc.styles.add_style(name, 1)   # 1 = paragraph
    st.base_style = doc.styles[base]
    f = st.font; f.name=font; f.size=Pt(size); f.bold=bold; f.italic=italic; f.color.rgb=color
    if caps: f.all_caps=True
    p = st.paragraph_format
    p.space_before=Pt(space_before); p.space_after=Pt(space_after); p.line_spacing=1.18
    if align is not None: p.alignment=align
    if keep: p.keep_with_next=True
    rpr = st.element.get_or_add_rPr(); rf = rpr.find(qn('w:rFonts'))
    if rf is None:
        rf = OxmlElement('w:rFonts'); rpr.append(rf)
    for a in ('w:ascii','w:hAnsi','w:cs'): rf.set(qn(a), font)
    return st

def build_styles(doc):
    n = doc.styles["Normal"]; n.font.name=BODY; n.font.size=Pt(10.5)
    n.paragraph_format.space_after=Pt(6); n.paragraph_format.line_spacing=1.18
    _style(doc,"WF Book Title",    34, True, ACC, DISP, 0, 10, align=WD_ALIGN_PARAGRAPH.CENTER)
    _style(doc,"WF Book Sub",      13, False, MUT, BODY, 0, 30, italic=True, align=WD_ALIGN_PARAGRAPH.CENTER)
    _style(doc,"WF Unit Number",   10, True, ACC, DISP, 0, 2, caps=True, keep=True)
    _style(doc,"WF Unit Title",    26, True, INK, DISP, 0, 4, keep=True)
    _style(doc,"WF Unit Sub",      11, False, MUT, BODY, 0, 12, italic=True)
    _style(doc,"WF Unit Intro",    11, False, INK, BODY, 0, 14)
    _style(doc,"WF Lesson",        16, True, ACC, DISP, 20, 8, keep=True)
    _style(doc,"WF Section",       12, True, INK, DISP, 12, 4, keep=True)
    _style(doc,"WF Box Head",      10, True, ACC, DISP, 12, 3, caps=True, keep=True)
    _style(doc,"WF Rubric",      10.5, True, INK, BODY, 8, 3, keep=True)
    _style(doc,"WF Body",        10.5, False, INK, BODY, 0, 5)
    _style(doc,"WF Model",         11, False, INK, BODY, 4, 4)
    _style(doc,"WF Dialogue",    10.5, False, INK, BODY, 0, 2)
    _style(doc,"WF Note",        9.5, False, MUT, BODY, 4, 5, italic=True)
    _style(doc,"WF Gloss",         9, False, MUT, BODY, 2, 6)
    _style(doc,"WF Caption",       8.5, False, MUT, BODY, 2, 10, italic=True)
    _style(doc,"WF Figure",        10, False, INK, BODY, 6, 2, align=WD_ALIGN_PARAGRAPH.CENTER)
    _style(doc,"WF Goal",        10.5, False, INK, BODY, 0, 3)
    _style(doc,"WF Audio",         9, True, BLU, DISP, 0, 4)
    _style(doc,"WF TOC",         10.5, False, INK, BODY, 0, 3)
    _style(doc,"WF Back Head",     20, True, ACC, DISP, 0, 10, keep=True)
    _style(doc,"WF Closing",       11, False, INK, BODY, 10, 6, italic=True)

def shade(cell, hexfill):
    tcPr = cell._tc.get_or_add_tcPr()
    el = OxmlElement('w:shd'); el.set(qn('w:val'),'clear'); el.set(qn('w:fill'),hexfill)
    tcPr.append(el)

def rule(doc, color="C9452C", size=12):
    p = doc.add_paragraph(); p.paragraph_format.space_before=Pt(2); p.paragraph_format.space_after=Pt(8)
    pPr = p._p.get_or_add_pPr(); b = OxmlElement('w:pBdr'); bo = OxmlElement('w:bottom')
    bo.set(qn('w:val'),'single'); bo.set(qn('w:sz'),str(size)); bo.set(qn('w:space'),'1')
    bo.set(qn('w:color'),color); b.append(bo); pPr.append(b)
    return p

# An italic span may wrap bold (*She sent **it to me***). Matched first, or the
# bold rule swallows the inner pair and the stray asterisks print.
INLINE = re.compile(r'(\*(?:[^*]*\*\*[^*]+\*\*)+[^*]*\*|\*\*.+?\*\*(?!\*)|\*[^*]+?\*|`[^`]+?`|~~.+?~~)')
def rich(par, text, base_italic=False):
    """markdown inline -> runs"""
    text = (text.replace("&mdash;","—").replace("&middot;","·").replace("&ndash;","–")
                .replace("&nbsp;"," ").replace("&amp;","&"))
    for tok in INLINE.split(text):
        if not tok: continue
        if tok.startswith("**") and tok.endswith("**") and len(tok)>4:
            inner = tok[2:-2]
            if "*" in inner:                       # italics inside bold
                for sub in re.split(r'(\*[^*]+\*)', inner):
                    if not sub: continue
                    rr = par.add_run(sub.strip("*") if sub.startswith("*") else sub)
                    rr.bold = True
                    rr.italic = sub.startswith("*") and sub.endswith("*")
                    if base_italic: rr.italic = True
                continue
            r=par.add_run(inner); r.bold=True
        elif tok.startswith("*") and tok.endswith("*") and len(tok)>2:
            inner = tok[1:-1]
            if "**" in inner:                      # bold inside italics
                for sub in re.split(r'(\*\*[^*]+\*\*)', inner):
                    if not sub: continue
                    rr = par.add_run(sub[2:-2] if sub.startswith("**") else sub)
                    rr.italic = True
                    rr.bold = sub.startswith("**")
                continue
            r=par.add_run(inner); r.italic=True
        elif tok.startswith("`") and tok.endswith("`") and len(tok)>2:
            r=par.add_run(tok[1:-1]); r.font.name="Consolas"; r.font.size=Pt(9.5)
        else:
            r=par.add_run(tok)
        if base_italic: r.italic=True
    return par

def para(doc, style, text="", italic=False):
    p = doc.add_paragraph(style=style)
    if text: rich(p, text, italic)
    return p

# ------------------------------------------------------------------ parsing
FIGDIR = "/home/user/Animated-Courses/wayfinder/starter/figures"
BOXES = {"✓":"CHECK YOURSELF","🌍":"TAKE IT OUTSIDE","💼":"ON THE JOB","🌐":"CULTURE CHECK",
         "📈":"MY PROGRESS","🧩":"THINK IT THROUGH","↺":"REMEMBER?"}
AUD = re.compile(r'%%AUD ([A-Z0-9\-]+)%%')
FIG = re.compile(r'^%%FIG ([a-z0-9\-]+) \| (.+?)%%$')

def add_figure(doc, fid, alt, maxw=5.6):
    path = os.path.join(FIGDIR, fid + ".png")
    if not os.path.exists(path):
        para(doc,"WF Caption","[figure %s missing]"%fid); return
    from PIL import Image
    w,h = Image.open(path).size
    # rendered at 2x; cap width, and cap height so a tall document still fits a page
    win = min(maxw, w/192.0)
    if h/ (w/win) > 6.4: win = maxw * (6.4 / (h/(w/win)))
    p = doc.add_paragraph(style="WF Figure")
    pic = p.add_run().add_picture(path, width=Inches(win))
    # Alt text belongs to the image, not under it: a screen reader gets the
    # teaching sentence and the printed page stays clean.
    try:
        docPr = pic._inline.docPr
        docPr.set('descr', alt); docPr.set('title', fid)
    except Exception:
        pass

def add_table(doc, rows, header=False):
    ncol = max(len(r) for r in rows)
    t = doc.add_table(rows=0, cols=ncol); t.style="Table Grid"; t.alignment=WD_TABLE_ALIGNMENT.LEFT
    for i,r in enumerate(rows):
        cells = t.add_row().cells
        for j in range(ncol):
            txt = r[j] if j < len(r) else ""
            cells[j].paragraphs[0].style = doc.styles["WF Body"]
            cells[j].paragraphs[0].paragraph_format.space_after = Pt(2)
            rich(cells[j].paragraphs[0], txt)
            if header and i==0:
                shade(cells[j], "F0EFEC")
                for rr in cells[j].paragraphs[0].runs: rr.bold=True
    doc.add_paragraph(style="WF Body")
    return t

def audio_tag(doc, ids):
    para(doc,"WF Audio","🔊 " + " · ".join(ids))

STRUCT = ("#","|",">","---","<sub>","%%")
def _is_struct(t):
    return (t.startswith(STRUCT) or FIG.match(t) or
            re.match(r'^\*\*\d+[A-Z]?\s', t) or re.match(r'^\*\*[A-Z]\s', t) or
            re.match(r'^\d+\.\s', t) or t.startswith(("- ","• ")))

def _blocks(lines):
    """Group soft-wrapped lines into one paragraph each. Markdown wraps at the
    margin; without this every wrapped line became its own Word paragraph."""
    out, buf, i, n = [], [], 0, len(lines)
    def flush():
        if buf: out.append(" ".join(buf)); buf.clear()
    while i < n:
        t = lines[i].strip()
        if not t:
            flush(); i += 1; continue
        if _is_struct(t):
            if buf and not t.startswith(("#","|",">","%%","---","<sub>")) and not FIG.match(t):
                # a rubric or list item ends the running paragraph
                flush()
            elif buf:
                flush()
            # a structural line may itself wrap: pull in following plain lines
            cur = [t]
            j = i + 1
            if not t.startswith(("#","|","---")) and not FIG.match(t):
                while j < n:
                    nx = lines[j].strip()
                    if not nx or _is_struct(nx): break
                    cur.append(nx); j += 1
            out.append(" ".join(cur)); i = j
            continue
        buf.append(t); i += 1
    flush()
    return out

def _trim_cols(rows):
    """Drop trailing columns that are empty in every row (markdown artefact)."""
    if not rows: return rows
    w = max(len(r) for r in rows)
    rows = [r + [""]*(w-len(r)) for r in rows]
    while w > 1 and all(not r[w-1].strip() for r in rows):
        rows = [r[:w-1] for r in rows]; w -= 1
    return rows

def doc_box(doc, para_list):
    """The reading text, typeset as the document it is. A price board or a timetable
    inside that document is a table and has to be set as one; printing its pipes puts
    raw markdown in front of the learner."""
    t = doc.add_table(rows=1, cols=1); t.style = "Table Grid"
    c = t.rows[0].cells[0]; shade(c, "FBFAF7")
    c.paragraphs[0]._p.getparent().remove(c.paragraphs[0]._p)
    for kind, txt in para_list:
        if kind == "t":
            inner = c.add_table(rows=0, cols=max(len(r) for r in txt))
            inner.style = "Table Grid"; inner.alignment = WD_TABLE_ALIGNMENT.LEFT
            ncol = max(len(r) for r in txt)
            for i, r in enumerate(txt):
                cells = inner.add_row().cells
                for j in range(ncol):
                    cells[j].paragraphs[0].style = doc.styles["WF Body"]
                    cells[j].paragraphs[0].paragraph_format.space_after = Pt(2)
                    rich(cells[j].paragraphs[0], r[j] if j < len(r) else "")
                    if i == 0:
                        shade(cells[j], "F0EFEC")
                        for rr in cells[j].paragraphs[0].runs: rr.bold = True
            c.add_paragraph(style="WF Model").paragraph_format.space_after = Pt(2)
            continue
        p = c.add_paragraph(style={"h":"WF Section","g":"WF Gloss"}.get(kind,"WF Model"))
        p.paragraph_format.space_after = Pt(4)
        rich(p, txt)
    doc.add_paragraph(style="WF Body")

def render_unit(doc, path, first=False):
    src = io.open(path, encoding="utf-8").read()
    raw = src.split("\n")
    # pull tables out first (they are line-structured), then join wrapped prose
    items, i, n = [], 0, len(raw)
    while i < n:
        t = raw[i].strip()
        if t.startswith("|"):
            rows=[]
            while i < n and raw[i].strip().startswith("|"):
                cells=[c.strip() for c in raw[i].strip().strip("|").split("|")]
                if set("".join(cells)) <= set("-: "): i+=1; continue
                rows.append(cells); i+=1
            items.append(("table", _trim_cols(rows))); continue
        items.append(("line", raw[i])); i+=1
    merged=[]
    buf=[]
    for kind,val in items:
        if kind=="line": buf.append(val)
        else:
            merged += [("line",b) for b in _blocks(buf)]; buf=[]
            merged.append(("table",val))
    merged += [("line",b) for b in _blocks(buf)]

    skip_read_fig = set()
    for k,v in merged:
        if k=="line":
            m=FIG.match(v.strip())
            if m and m.group(1).endswith("-f5"): skip_read_fig.add(m.group(1))

    idx=0
    while idx < len(merged):
        kind, val = merged[idx]; idx+=1
        if kind=="table":
            add_table(doc, val, header=True); continue
        s_=val.strip()
        if not s_: continue
        if s_ == "%%": continue          # closing marker of a %%GOALS block
        if s_ == "---": rule(doc,"DCDBD6",6); continue
        m = FIG.match(s_)
        if m:
            if m.group(1) in skip_read_fig: continue   # the reading text is set as a document below
            add_figure(doc, m.group(1), m.group(2)); continue
        if s_.startswith("%%SUB"):
            para(doc,"WF Unit Sub", s_[5:].strip().strip("%").strip()); continue
        if s_.startswith("%%GOALS"):
            goals=[g for g in s_[7:].split("%%")[0].split("  ") if g.strip()]
            goals=[g.strip() for g in re.split(r'\s{2,}|(?<=[a-z\)])\s(?=[A-Z])', s_[7:].strip().strip("%").strip()) if g.strip()]
            para(doc,"WF Box Head","Unit goals")
            for g in goals:
                p=para(doc,"WF Goal"); p.paragraph_format.left_indent=Inches(0.18); rich(p,"• "+g)
            continue
        if s_.startswith("# "):
            if not first: doc.add_page_break()
            ttl=s_[2:].strip()
            if "·" in ttl:
                num,name=ttl.split("·",1)
                para(doc,"WF Unit Number",num.strip()); para(doc,"WF Unit Title",name.strip())
            else: para(doc,"WF Unit Title",ttl)
            rule(doc); continue
        if s_.startswith("## "): para(doc,"WF Lesson", s_[3:].strip()); continue
        if s_.startswith("### "):
            h=s_[4:].strip()
            augm=re.match(r'%%AUG ([a-z])%%\s*(.*)', h)
            if augm: para(doc,"WF Box Head","Digital skills — "+augm.group(2))
            elif h and h[0] in BOXES: para(doc,"WF Box Head", h[1:].strip())
            else: para(doc,"WF Section", h)
            continue
        if s_.startswith("<sub>"):
            para(doc,"WF Gloss", re.sub(r'</?sub>','',s_)); continue
        if s_.startswith(">"):
            block=[]
            cur=s_
            while True:
                b=cur.lstrip(">").strip()
                if b:
                    # A wrapped continuation joins the line before it. A line may begin
                    # with bold and still be a continuation ("...It does **not** become
                    # cheaper"), so only real openers -- a rubric, a speaker, a glossed
                    # term -- are allowed to start a new paragraph.
                    opener = (b.startswith(("#", "|"))
                              or re.match(r'^\*\*\d+[A-Z]?\s', b)
                              or re.match(r'^\*\*[^*]+:\*\*', b)
                              or re.match(r'^\*\*[^*]+\*\*\s*(\u2014|-)\s', b)
                              or (b.startswith("**") and re.search(r'[.!?:\u2014]$', block[-1] if block else "")))
                    if (block and not opener
                            and (b[0].islower() or b.startswith("**")
                                 or not re.search(r'[.!?:\u2014]$', block[-1]))
                            and not block[-1].startswith(("#", "|"))
                            and not re.fullmatch(r'\*[^*].*?[^*]\*', block[-1])):
                        block[-1] = block[-1] + " " + b
                    else:
                        block.append(b)
                if idx<len(merged) and merged[idx][0]=="line" and merged[idx][1].strip().startswith(">"):
                    cur=merged[idx][1].strip(); idx+=1
                else: break
            is_read = any(b.startswith("## ") for b in block)
            if is_read:
                pl=[]
                bi = 0
                while bi < len(block):
                    b = block[bi]
                    if b.startswith("|"):                 # a table inside the document
                        rows = []
                        while bi < len(block) and block[bi].startswith("|"):
                            cells = [x.strip() for x in block[bi].strip("|").split("|")]
                            bi += 1
                            if set("".join(cells)) <= set("-: "): continue
                            rows.append(cells)
                        if rows: pl.append(("t", _trim_cols(rows)))
                        continue
                    if b.startswith("## "): pl.append(("h", b[3:].strip()))
                    elif b.startswith("*") and b.endswith("*"): pl.append(("g", b.strip("*")))
                    else: pl.append(("p", b))
                    bi += 1
                doc_box(doc, pl); continue
            bj = 0
            while bj < len(block):
                b = block[bj]
                if b.startswith("|"):
                    rows = []
                    while bj < len(block) and block[bj].startswith("|"):
                        cells = [x.strip() for x in block[bj].strip("|").split("|")]
                        bj += 1
                        if set("".join(cells)) <= set("-: "): continue
                        rows.append(cells)
                    if rows: add_table(doc, _trim_cols(rows), header=True)
                    continue
                bj += 1
                if b.startswith("### "): para(doc,"WF Section", b[4:].strip())
                elif re.match(r'^\*\*[^*]+:\*\*', b):
                    p=para(doc,"WF Dialogue"); p.paragraph_format.left_indent=Inches(0.22); rich(p,b)
                else:
                    p=para(doc,"WF Model"); p.paragraph_format.left_indent=Inches(0.22); rich(p,b)
            continue
        ids=AUD.findall(s_); body=AUD.sub("",s_).strip()
        if ids and not body: audio_tag(doc, ids); continue
        if re.match(r'^\*\*\d+[A-Z]?\s', s_) or re.match(r'^\*\*[A-Z]\s', s_):
            para(doc,"WF Rubric", body)
            if ids: audio_tag(doc, ids)
            continue
        if re.match(r'^\d+\.\s', s_) or s_.startswith(("- ","• ")):
            p=para(doc,"WF Body"); p.paragraph_format.left_indent=Inches(0.22); rich(p,body)
            if ids: audio_tag(doc, ids)
            continue
        para(doc,"WF Body", body)
        if ids: audio_tag(doc, ids)
