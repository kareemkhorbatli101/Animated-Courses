# -*- coding: utf-8 -*-
"""Wayfinder art system. Flat vector, one structural line weight, geometric
characters built once and reused. Print/light palette only: the book is a
document, so there is no dark theme to carry here."""

INK="#0b0b0b"; PAPER="#ffffff"; S2="#f5f5f3"; S3="#ebebe8"; RULE="#dcdbd6"
RULE2="#b9b7b0"; MUTED="#76746e"
ACCENT="#c9452c"          # Starter red-orange
BLUE="#2a78d6"            # data series 1
AQUA="#1baf7a"; AMBER="#eda100"; GREEN="#3d7a14"; PLUM="#8a4a62"
WOOD="#d8c3a0"; WOOD2="#b89f78"; METAL="#cfd3d6"; PLANT="#4f8d4a"
SCREEN="#e8eef6"; SCREENF="#ffffff"
SKIN={"a":"#e8b793","b":"#c08a5e","c":"#8d5a3b","d":"#f0cdb0","e":"#d9a077"}
HAIR={"1":"#2b2420","2":"#4a3326","3":"#1a1a1a","4":"#6b5340","5":"#8a8a86"}
CLOTH={"teal":"#2f6f7a","plum":"#8a4a62","navy":"#415a8c","olive":"#6b6f3f",
       "rust":"#a4552f","grey":"#6e7276","sky":"#5c86b0","sand":"#c0a36b",
       "green":"#4a7d52","wine":"#7a3b46"}

def set_accent(hexval):
    """Each book has its own validated level accent. Rebind it everywhere the
    art modules captured it by `from art_core import *` at import time."""
    import sys
    g = globals(); g["ACCENT"] = hexval
    for m in ("art_icons","art_scenes","figgen"):
        mod = sys.modules.get(m)
        if mod is not None: setattr(mod, "ACCENT", hexval)

def svg(w,h,body,bg=None):
    b = '<rect width="%d" height="%d" fill="%s"/>'%(w,h,bg) if bg else ''
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">'
            '%s%s</svg>')%(w,h,w,h,b,body)

def txt(x,y,s,size=13,fill=INK,anchor="start",weight="400",fam="Inter",ls=None):
    l = ' letter-spacing="%s"'%ls if ls else ''
    return ('<text x="%s" y="%s" font-family="%s,Helvetica,sans-serif" font-size="%s" '
            'font-weight="%s" fill="%s" text-anchor="%s"%s>%s</text>')%(x,y,fam,size,weight,fill,anchor,l,s)

def disp(x,y,s,size=15,fill=INK,anchor="start",weight="800",ls=None):
    return txt(x,y,s,size,fill,anchor,weight,"Bricolage Grotesque",ls)

def rect(x,y,w,h,fill=PAPER,stroke=INK,sw=2.5,rx=0):
    return '<rect x="%s" y="%s" width="%s" height="%s" rx="%s" fill="%s" stroke="%s" stroke-width="%s"/>'%(
        x,y,w,h,rx,fill,stroke,sw)

def line(x1,y1,x2,y2,stroke=INK,sw=2.5,cap="round"):
    return '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="%s" stroke-linecap="%s"/>'%(
        x1,y1,x2,y2,stroke,sw,cap)

def circ(cx,cy,r,fill=PAPER,stroke=INK,sw=2.5):
    return '<circle cx="%s" cy="%s" r="%s" fill="%s" stroke="%s" stroke-width="%s"/>'%(cx,cy,r,fill,stroke,sw)

def path(d,fill="none",stroke=INK,sw=2.5,cap="round"):
    return '<path d="%s" fill="%s" stroke="%s" stroke-width="%s" stroke-linecap="%s" stroke-linejoin="round"/>'%(
        d,fill,stroke,sw,cap)

def badge(cx,cy,n,r=13):
    return circ(cx,cy,r,ACCENT,ACCENT,0)+disp(cx,cy+5,str(n),14,"#fff","middle")

# ---------------------------------------------------------------- characters
# One figure, built from the same parts every time: head, neck, torso with real
# shoulders, two arms, two legs, two shoes. Head is about 1/6.5 of height.

def head(cx, cy, r, skin="a", hair="1", style="crop", smile=True, look=0, brow=False):
    s=SKIN[skin]; h=HAIR[hair]; o=[]
    # hair mass behind the face: one rounded shape, drawn first
    if style in ("bob","long"):
        drop = r*2.45 if style=="long" else r*1.45
        o.append(path("M%s %s C%s %s %s %s %s %s L%s %s Q%s %s %s %s Z"%(
            r2(cx-r*1.14), r2(cy+drop),
            r2(cx-r*1.14), r2(cy-r*1.55), r2(cx+r*1.14), r2(cy-r*1.55), r2(cx+r*1.14), r2(cy+drop),
            r2(cx+r*1.14), r2(cy+drop),
            r2(cx), r2(cy+drop+r*0.34), r2(cx-r*1.14), r2(cy+drop)), h, INK, 2))
    o.append(circ(r2(cx),r2(cy),r2(r),s,INK,2.5))
    # fringe / cap
    if style=="crop":
        o.append(path("M%s %s C%s %s %s %s %s %s C%s %s %s %s %s %s Z"%(
            r2(cx-r*1.0), r2(cy-r*0.12),
            r2(cx-r*1.0), r2(cy-r*1.35), r2(cx+r*1.0), r2(cy-r*1.35), r2(cx+r*1.0), r2(cy-r*0.12),
            r2(cx+r*0.5), r2(cy-r*0.62), r2(cx-r*0.5), r2(cy-r*0.62), r2(cx-r*1.0), r2(cy-r*0.12)),
            h, INK, 2))
    elif style in ("bob","long"):
        o.append(path("M%s %s C%s %s %s %s %s %s C%s %s %s %s %s %s Z"%(
            r2(cx-r*1.04), r2(cy-r*0.05),
            r2(cx-r*1.04), r2(cy-r*1.38), r2(cx+r*1.04), r2(cy-r*1.38), r2(cx+r*1.04), r2(cy-r*0.05),
            r2(cx+r*0.30), r2(cy-r*0.78), r2(cx-r*0.62), r2(cy-r*0.60), r2(cx-r*1.04), r2(cy-r*0.05)),
            h, INK, 2))
    elif style=="bun":
        o.append(circ(r2(cx), r2(cy-r*1.32), r2(r*0.44), h, INK, 2))
        o.append(path("M%s %s C%s %s %s %s %s %s C%s %s %s %s %s %s Z"%(
            r2(cx-r*1.0), r2(cy-r*0.10),
            r2(cx-r*1.0), r2(cy-r*1.30), r2(cx+r*1.0), r2(cy-r*1.30), r2(cx+r*1.0), r2(cy-r*0.10),
            r2(cx+r*0.44), r2(cy-r*0.70), r2(cx-r*0.44), r2(cy-r*0.70), r2(cx-r*1.0), r2(cy-r*0.10)),
            h, INK, 2))
    elif style=="wrap":
        o.append(path("M%s %s C%s %s %s %s %s %s L%s %s C%s %s %s %s %s %s Z"%(
            r2(cx-r*1.10), r2(cy+r*0.10),
            r2(cx-r*1.22), r2(cy-r*1.70), r2(cx+r*1.22), r2(cy-r*1.70), r2(cx+r*1.10), r2(cy+r*0.10),
            r2(cx+r*0.58), r2(cy+r*0.10),
            r2(cx+r*0.72), r2(cy-r*0.95), r2(cx-r*0.72), r2(cy-r*0.95), r2(cx-r*0.58), r2(cy+r*0.10)),
            h, INK, 2))
        o.append(path("M%s %s Q%s %s %s %s"%(r2(cx-r*0.9), r2(cy-r*0.9), r2(cx), r2(cy-r*1.5),
                       r2(cx+r*0.9), r2(cy-r*0.9)), "none", INK, 1.6))
    elif style=="bald":
        o.append(path("M%s %s C%s %s %s %s %s %s"%(
            r2(cx-r*1.02), r2(cy+r*0.10), r2(cx-r*1.10), r2(cy-r*0.78),
            r2(cx-r*0.72), r2(cy-r*1.02), r2(cx-r*0.46), r2(cy-r*0.98)), "none", h, 3.4))
        o.append(path("M%s %s C%s %s %s %s %s %s"%(
            r2(cx+r*1.02), r2(cy+r*0.10), r2(cx+r*1.10), r2(cy-r*0.78),
            r2(cx+r*0.72), r2(cy-r*1.02), r2(cx+r*0.46), r2(cy-r*0.98)), "none", h, 3.4))
    ex=r*0.33; ey=cy+r*0.06
    o.append(circ(r2(cx-ex+look),r2(ey),r2(r*0.10),INK,INK,0))
    o.append(circ(r2(cx+ex+look),r2(ey),r2(r*0.10),INK,INK,0))
    if brow:
        o.append(line(r2(cx-ex-r*.20),r2(cy-r*.30),r2(cx-ex+r*.18),r2(cy-r*.38),INK,1.7))
        o.append(line(r2(cx+ex-r*.18),r2(cy-r*.38),r2(cx+ex+r*.20),r2(cy-r*.30),INK,1.7))
    if smile:
        o.append(path("M%s %s Q%s %s %s %s"%(r2(cx-r*.28),r2(cy+r*.40),r2(cx),
                      r2(cy+r*.60),r2(cx+r*.28),r2(cy+r*.40)),"none",INK,2))
    else:
        o.append(line(r2(cx-r*.24),r2(cy+r*.48),r2(cx+r*.24),r2(cy+r*.48),INK,2))
    return "".join(o)

def r2(v): return round(float(v),1)

def person(x, floor, h=170, skin="a", hair="1", style="crop", cloth="teal",
           arm=None, arm2=None, smile=True, look=0, seated=False, brow=False,
           skirt=False, flip=False):
    """x = centre line, floor = y of the feet. h = full standing height."""
    hr   = h*0.077
    hy   = floor - h + hr
    neck = hy + hr*1.05
    sh   = floor - h + hr*2.55          # shoulder line
    hip  = floor - h*0.455
    sw_  = h*0.105                      # half shoulder width
    hw   = h*0.082                      # half hip width
    c    = CLOTH[cloth]; sk = SKIN[skin]
    lw   = h*0.052                      # limb width
    o    = []
    # legs
    if seated:
        knee = hip + h*0.10
        o.append(path("M%s %s L%s %s L%s %s"%(r2(x-hw*0.6),r2(hip),r2(x-hw*0.6),r2(knee),
                      r2(x+sw_*1.5),r2(knee)), "none", "#3b3b3a", lw*1.05, "round"))
        o.append(path("M%s %s L%s %s L%s %s"%(r2(x+hw*0.2),r2(hip),r2(x+hw*0.2),r2(knee),
                      r2(x+sw_*1.5),r2(knee)), "none", "#4a4a48", lw*1.05, "round"))
    else:
        o.append(line(r2(x-hw*0.52),r2(hip),r2(x-hw*0.60),r2(floor-h*0.022),"#3b3b3a",lw*1.05))
        o.append(line(r2(x+hw*0.52),r2(hip),r2(x+hw*0.60),r2(floor-h*0.022),"#3b3b3a",lw*1.05))
        o.append(path("M%s %s L%s %s"%(r2(x-hw*0.60-lw*0.30),r2(floor-h*0.012),
                      r2(x-hw*0.60+lw*0.55),r2(floor-h*0.012)),"none",INK,lw*0.62,"round"))
        o.append(path("M%s %s L%s %s"%(r2(x+hw*0.60-lw*0.55),r2(floor-h*0.012),
                      r2(x+hw*0.60+lw*0.30),r2(floor-h*0.012)),"none",INK,lw*0.62,"round"))
    # neck
    o.append(line(r2(x),r2(neck-hr*0.1),r2(x),r2(sh+2),sk,hr*0.62,"butt"))
    # torso with real shoulders
    if skirt:
        d=("M%s %s C%s %s %s %s %s %s C%s %s %s %s %s %s L%s %s L%s %s Z")%(
            r2(x-sw_),r2(sh+sw_*0.3), r2(x-sw_),r2(sh-h*0.004), r2(x-sw_*0.5),r2(sh-h*0.016), r2(x),r2(sh-h*0.016),
            r2(x+sw_*0.5),r2(sh-h*0.016), r2(x+sw_),r2(sh-h*0.004), r2(x+sw_),r2(sh+sw_*0.3),
            r2(x+hw*1.45),r2(hip), r2(x-hw*1.45),r2(hip))
    else:
        d=("M%s %s C%s %s %s %s %s %s C%s %s %s %s %s %s L%s %s L%s %s Z")%(
            r2(x-sw_),r2(sh+sw_*0.3), r2(x-sw_),r2(sh-h*0.004), r2(x-sw_*0.5),r2(sh-h*0.016), r2(x),r2(sh-h*0.016),
            r2(x+sw_*0.5),r2(sh-h*0.016), r2(x+sw_),r2(sh-h*0.004), r2(x+sw_),r2(sh+sw_*0.3),
            r2(x+hw),r2(hip), r2(x-hw),r2(hip))
    o.append(path(d, c, INK, 2.5))
    # arms: default hang down; arm/arm2 give an endpoint
    el = arm2 if arm2 else (r2(x-sw_*1.16), r2(hip+h*0.035))
    er = arm   if arm  else (r2(x+sw_*1.16), r2(hip+h*0.035))
    for (ex,ey),sx in ((el,-1),(er,1)):
        ox = x + sx*sw_*0.86; oy = sh + h*0.034
        o.append(line(r2(ox),r2(oy),r2(ex),r2(ey), INK, lw*1.00+3.4))   # outline
        o.append(line(r2(ox),r2(oy),r2(ex),r2(ey), c,   lw*1.00))        # sleeve
        o.append(circ(r2(ex),r2(ey),r2(lw*0.42), sk, INK, 1.9))          # hand
    o.append(head(x, hy, hr, skin, hair, style, smile, look, brow))
    return "".join(o)

CAST = {
 "nadia":   dict(skin="a", hair="1", style="bob",  cloth="teal",  skirt=False),
 "tomas":   dict(skin="b", hair="2", style="crop", cloth="rust"),
 "mei":     dict(skin="d", hair="3", style="long", cloth="sky"),
 "yusuf":   dict(skin="c", hair="3", style="crop", cloth="olive"),
 "priya":   dict(skin="b", hair="1", style="bun",  cloth="plum",  skirt=True),
 "oyelaran":dict(skin="c", hair="3", style="wrap", cloth="plum",  skirt=True),
 "nkemelu": dict(skin="c", hair="3", style="bun",  cloth="green", skirt=True),
 "haddad":  dict(skin="e", hair="5", style="crop", cloth="grey"),
 "caruso":  dict(skin="e", hair="5", style="bald", cloth="sand"),
 "grace":   dict(skin="c", hair="1", style="bun",  cloth="navy"),
 "hana":    dict(skin="d", hair="4", style="bob",  cloth="amberish"),
 "oskar":   dict(skin="d", hair="4", style="crop", cloth="grey"),
 "bah":     dict(skin="c", hair="5", style="crop", cloth="navy"),
 "lucia":   dict(skin="b", hair="2", style="long", cloth="wine",  skirt=True),
 "ahmad":   dict(skin="e", hair="2", style="crop", cloth="navy"),
 "linh":   dict(skin="d", hair="1", style="long", cloth="green", skirt=True),
 "adeel":  dict(skin="b", hair="3", style="crop", cloth="sky"),
 "oksana": dict(skin="a", hair="4", style="long", cloth="wine",  skirt=True),
 "samira": dict(skin="c", hair="3", style="wrap", cloth="sky",   skirt=True),
# ---- Clearline (business series) cast: its own twelve, visually distinct ----
"yara":    dict(skin="c", hair="1", style="bun",  cloth="teal",  skirt=False),
"anders":  dict(skin="a", hair="5", style="crop", cloth="hivis"),
"chiamaka":dict(skin="c", hair="3", style="wrap", cloth="wine",  skirt=True),
"ravi":    dict(skin="b", hair="3", style="crop", cloth="white"),
"sofia":   dict(skin="b", hair="2", style="long", cloth="navy",  skirt=False),
"marek":   dict(skin="a", hair="4", style="crop", cloth="slate"),
"nour":    dict(skin="d", hair="1", style="bob",  cloth="plum",  skirt=True),
"junseo":  dict(skin="d", hair="3", style="crop", cloth="sky"),
"paula":   dict(skin="e", hair="2", style="bob",  cloth="rust",  skirt=True),
"okonjo":  dict(skin="c", hair="5", style="bald", cloth="charcoal"),
"hanna":   dict(skin="a", hair="4", style="long", cloth="sand",  skirt=True),
"wei":     dict(skin="d", hair="3", style="bob",  cloth="olive", skirt=False),
"lars":    dict(skin="a", hair="5", style="crop", cloth="grey"),
"ines":    dict(skin="b", hair="1", style="bun",  cloth="green", skirt=True),
"omar":    dict(skin="c", hair="3", style="crop", cloth="amberish"),
"ida":     dict(skin="a", hair="2", style="bob",  cloth="hivis", skirt=False),
"karin":   dict(skin="a", hair="1", style="long", cloth="charcoal", skirt=True),
}
CLOTH["amberish"]="#b5802f"
CLOTH["hivis"]="#d8c93a"      # high-visibility vest, Clearline warehouse
CLOTH["white"]="#eef0f0"      # lab coat
CLOTH["slate"]="#4a5a6a"
CLOTH["charcoal"]="#3b3f44"

def cast(name, x, floor, h=170, **kw):
    p=dict(CAST[name]); p.update(kw); return person(x, floor, h, **p)
