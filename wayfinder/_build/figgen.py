# -*- coding: utf-8 -*-
"""Builds every figure in Book 1 from a compact spec. One builder per figure type."""
import sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from art_core import *
from art_icons import ICON
from art_scenes import *

# Objects that rest on the floor of a room. Everything else (signs, screens,
# weather, things held or on a wall) keeps the y it was given.
FLOOR_ICONS = {"table","chair","bed","fridge","cooker","radiator","bag","shoes",
               "forklift","cleaner","busstop","park","plant","queue",
               # Book 3: things that plainly stand on the ground
               "car","bus","bench","bins","cashmachine","ticketmachine","desk",
               "sofa","wardrobe","cupboard","printer","fallentree","gym"}

# ------------------------------------------------------------------ types
def f_icons(items, cols=None, numbered=True, cell=118, w=None):
    """items: [(icon, label)] -> labelled grid."""
    n=len(items); cols = cols or min(n, 5 if n<=10 else 6)
    rows=(n+cols-1)//cols
    W = w or cols*cell+16
    H = rows*(cell+30)+12
    o=[rect(0,0,W,H,PAPER,PAPER,0)]
    for i,(ic,lab) in enumerate(items):
        cx=8+(i%cols)*cell + (cell-100)/2
        cy=8+(i//cols)*(cell+30)
        o.append('<g transform="translate(%s,%s)">%s</g>'%(round(cx,1),round(cy,1),ICON[ic]()))
        if numbered: o.append(badge(cx+6, cy+8, i+1, 12))
        o.append(txt(cx+50, cy+122, lab, 13, INK, "middle", "600"))
    return svg(W,H,"".join(o)), W, H

def f_count(items, cell=132):
    """items: [(icon, count, label)] -> grammar cue, countable groups."""
    W=16+len(items)*cell; H=190
    o=[rect(0,0,W,H,S2,S2,0), rect(0,150,W,H-150,S3,S3,0), line(0,150,W,150,RULE2,2,"butt")]
    for i,(ic,cnt,lab) in enumerate(items):
        bx=8+i*cell
        s=0.62 if cnt>2 else 0.80
        for k in range(cnt):
            off=(k-(cnt-1)/2.0)*(26 if cnt>2 else 34)
            o.append('<g transform="translate(%s,%s) scale(%s)">%s</g>'%(
                round(bx+cell/2-50*s+off,1), round(56 if cnt<=2 else 62,1), s, ICON[ic]()))
        o.append(badge(bx+16, 26, i+1, 12))
        o.append(txt(bx+cell/2, 172, lab, 13, INK, "middle", "600"))
    return svg(W,H,"".join(o)), W, H

def f_scene(w=760, h=400, floor=0.74, people=(), behind=(), props=(), board=None, counter_=None,
            clockat=None, window_=None, sign_=None, plant_=None, panelbg=None,
            floorbg=None, litwins=(), beams=(), glows=(), strokes=(), branch=None, stairs_=None, skyline=None):
    """behind = people standing behind the counter: drawn BEFORE it, so it occludes them.
    floorbg/litwins/beams/glows exist for the night scenes: a dark street needs a dark
    road under it, not a pale floor."""
    body, fy = room(w,h,floor, panelbg or S2, floorbg or S3)
    o=[body]
    if branch: o.append(fallen_branch(branch[0], fy*1.0 if len(branch)<2 else branch[1],
                                      *branch[2:]))
    if skyline: o.append(cityline(*skyline))
    if stairs_: o.append(stairs(*stairs_))
    for st in strokes: o.append(line(*st))
    for b in beams: o.append(beam(*b))
    for g in glows: o.append(glow(g[0], g[1] if len(g)>1 else fy, g[-1]))
    for lw in litwins: o.append(litwin(*lw))
    if window_: o.append(window(*window_))
    if board:
        x,y,bw,bh,title,rows = board
        o.append(wallboard(x,y,bw,bh,rows,title))
    if clockat: o.append(clockface(clockat[0],clockat[1],clockat[2],clockat[3],clockat[4]))
    if plant_: o.append(plant(plant_, fy))
    for p in behind:
        nm,x,ht = p[0],p[1],p[2]
        kw = dict(p[3]) if len(p)>3 else {}
        o.append(cast(nm, x, kw.pop("floor", fy), ht, **kw))
    if counter_: o.append(counter(*counter_))
    for ic,x,y,s_ in props:
        # Furniture stands on the floor. Hand-picked y values made tables and beds
        # float, so anything in FLOOR_ICONS is snapped to the floor line instead.
        if ic in FLOOR_ICONS:
            y = fy - 100*s_ + 6*s_
        o.append('<g transform="translate(%s,%s) scale(%s)">%s</g>'%(x,round(y,1),s_,ICON[ic]()))
    for p in people:
        nm,x,ht = p[0],p[1],p[2]
        kw = dict(p[3]) if len(p)>3 else {}
        o.append(cast(nm, x, kw.pop("floor", fy), ht, **kw))
    if sign_: o.append(sign(*sign_))
    return svg(w,h,"".join(o)), w, h

def f_panels(left, right, w=800, h=300, lt=None, rt=None):
    """two scenes side by side, each with a time badge."""
    half=(w-10)//2
    ls,_,_ = left(half,h); rs,_,_ = right(half,h)
    def inner(s): return re.sub(r'^<svg[^>]*>|</svg>$','',s)
    o=[rect(0,0,w,h,PAPER,PAPER,0),
       '<g>%s</g>'%inner(ls),
       '<g transform="translate(%d,0)">%s</g>'%(half+10, inner(rs)),
       rect(half,0,10,h,PAPER,PAPER,0)]
    if lt: o += [rect(16,14,74,30,INK,INK,0,4), disp(53,36,lt,16,PAPER,"middle")]
    if rt: o += [rect(w-90,14,74,30,INK,INK,0,4), disp(w-53,36,rt,16,PAPER,"middle")]
    return svg(w,h,"".join(o)), w, h

def f_realia(inner, w=560): return realia(inner, w), w, None
def f_chart(rows, unit="students", w=470): return ranked_bar("", rows, w=w, unit=unit)
def f_part(title, rows, w=470): return partwhole(title, rows, w=w)
def f_matrix(cols, rows, w=540): return matrix("", cols, rows, w)
def f_process(steps, w=620, loop=None): return process("", steps, w=w, loop=loop)
def f_cycle(labels, w=520): return cycle(labels, w=w)
def f_timeline(marks, nowx, w=600): return timeline("", marks, nowx, w=w)

# ------------------------------------------------------------------ realia helpers
def doc(lh, title, body, note=None):
    h = '<div class="lh">%s</div>'%lh
    if title: h += '<h4>%s</h4>'%title
    h += body
    if note: h += '<div class="sm">%s</div>'%note
    return h

def form(lh, pairs, note=None):
    return doc(lh, None, rows_html(pairs), note)

def tbl(lh, title, headers, rows, numcols=(), note=None):
    return doc(lh, title, table_html(headers, rows, numcols), note)

def screen(title, fields, btn="CHECK", flags=()):
    s='<div style="background:#e8eef6;border:1px solid #b9b7b0;border-radius:9px;padding:16px">'
    s+='<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.72;margin-bottom:10px">%s</div>'%title
    for i,(k,v) in enumerate(fields):
        bad = i in flags
        s+=('<div style="background:#fff;border:1px solid %s;border-radius:5px;padding:8px 10px;margin-bottom:8px">'
            '<div style="font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.6">%s</div>'
            '<div style="font-family:Bricolage Grotesque,sans-serif;font-weight:600;font-size:15px;margin-top:2px">%s</div></div>')%(
            "#c9452c" if bad else "#b9b7b0", k, v or "&mdash;")
    if btn: s+='<div style="background:#2a78d6;color:#fff;font:700 13px Inter;padding:8px 0;border-radius:5px;text-align:center;letter-spacing:.06em">%s</div>'%btn
    return s+'</div>'

def tags(items):
    s='<div class="tagrow">'
    for n,l,was in items:
        s+='<div class="tag"><div class="n">%s</div><div class="l">%s</div>%s</div>'%(
            n,l,'<div class="was">%s</div>'%was if was else '')
    return s+'</div>'
