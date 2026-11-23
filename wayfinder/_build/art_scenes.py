# -*- coding: utf-8 -*-
"""Scenes (SVG) and realia (HTML). Scenes compose the reusable cast with props."""
from art_core import *
from art_icons import ICON

def room(w,h,floor=0.74,wall=S2,fl=S3):
    fy=h*floor
    return (rect(0,0,w,fy,wall,wall,0)+rect(0,fy,w,h-fy,fl,fl,0)
            +line(0,fy,w,fy,RULE2,2,"butt")), fy

# ---- night ----------------------------------------------------------------
# A power cut is the one thing in this book that cannot be drawn in daylight.
def litwin(x,y,w,h,warm="#f0c77a"):
    """A window with somebody's light still on behind it."""
    return (rect(x,y,w,h,warm,INK,2.5,2)
            +line(x+w/2,y,x+w/2,y+h,INK,2.2,"butt")
            +line(x,y+h/2,x+w,y+h/2,INK,2.2,"butt"))

def beam(x,y,dx,dy,length=150,spread=34):
    """A torch beam: a pale cone from a point, drawn under everything else."""
    import math
    L=math.hypot(dx,dy) or 1.0; ux,uy=dx/L,dy/L; px,py=-uy,ux
    ex,ey = x+ux*length, y+uy*length
    return path("M%.1f %.1f L%.1f %.1f L%.1f %.1f Z"%(
        x,y, ex+px*spread, ey+py*spread, ex-px*spread, ey-py*spread),
        "#ffeec4", "none", 0, 0).replace("<path ", '<path opacity="0.45" ')

def fallen_branch(x1, fy, w=460, poleh=210, sag=26):
    """A pole, a wire sagging across the street, and a branch lying over the wire
    with one end on the road. Drawn as a scene element, not an icon: the point of
    the picture is the relationship between the three, and an icon cannot show it."""
    px, py = x1, fy
    top = fy - poleh
    x2 = x1 + w
    mid = (x1+x2)/2
    o=[]
    o.append(line(px, py, px, top, "#6b5340", 9))                  # the pole
    o.append(path("M%d %d Q%d %d %d %d"%(x1, top+8, mid, top+8+sag, x2, top+2),
                  "none", "#5a6676", 3.5))                          # the wire
    bx1, by1 = mid-150, top+8+sag-18                                # branch, over the wire
    bx2, by2 = mid+120, fy-6
    o.append(line(bx1, by1, bx2, by2, "#b89f78", 15))
    o.append(line(bx1, by1, bx2, by2, INK, 2.2))
    o.append(line(bx1+70, by1+36, bx1+10, by1+4, "#b89f78", 9))
    o.append(circ(bx1+6, by1-6, 26, "#5f7a3f", INK, 3))
    o.append(circ(bx1+46, by1+18, 19, "#6b8a46", INK, 3))
    o.append(circ(bx1-26, by1+18, 16, "#5f7a3f", INK, 3))
    return "".join(o)

def cityline(x, y, w, h=64, water=True):
    """A city and its harbour seen from above, in one flat band. Distance is carried
    by a paler ink, so it never competes with the people in the foreground."""
    import random
    rnd = random.Random(7)
    pale = "#c6ccd2"; pale2 = "#aeb6bd"; sea = "#b9ccd8"
    o=[]
    if water:
        o.append(rect(x, y+h, w, 26, sea, sea, 0))
        for i in range(5):
            wx = x + 30 + i*(w/5.0)
            o.append(line(wx, y+h+10+(i%2)*7, wx+34, y+h+10+(i%2)*7, "#9db4c4", 2.2))
    cx = x
    while cx < x+w-10:
        bw = rnd.randint(16, 34); bh = rnd.randint(18, h)
        if cx+bw > x+w: bw = x+w-cx
        o.append(rect(cx, y+h-bh, bw, bh, pale if rnd.random()<0.6 else pale2,
                      "#9aa2a9", 1.6, 1))
        cx += bw + rnd.randint(2, 7)
    o.append(line(x, y+h, x+w, y+h, "#9aa2a9", 1.8))
    return "".join(o)

def stairs(x, fy, w=260, rise=26, steps=6, facing=1):
    """A flight of stairs seen from the side. Needed once, for a stairwell in the dark."""
    run = w/steps
    o=[]
    pts=[]
    for i in range(steps):
        sx = x + (i*run if facing>0 else w-(i+1)*run)
        sy = fy - (i+1)*rise
        o.append(rect(sx, sy, run, rise, S3 if facing>0 else S3, INK, 2.2, 0))
        pts.append((sx,sy))
    o.append(line(x, fy, x+w, fy, INK, 2.2))
    return "".join(o)

def glow(x,y,r):
    """A pool of warm light on the ground under a window or a van."""
    return ('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="#ffe3a6" opacity="0.16"/>'
            %(x,y,r,r*0.30))

def counter(x,y,w,h=64):
    return (rect(x,y,w,14,WOOD,INK,2.5,2)+rect(x+6,y+14,w-12,h-14,WOOD2,INK,2.5,0)
            +line(x+6,y+40,x+w-6,y+40,INK,1.1,"butt"))

def wallboard(x,y,w,h,rows,title=None):
    o=[rect(x,y,w,h,PAPER,INK,2.5,3)]
    ty=y+30
    if title: o.append(disp(x+16,ty,title,15,INK)); ty+=26
    for a,b in rows:
        o.append(disp(x+16,ty,a,14,INK)); o.append(disp(x+w-16,ty,b,14,ACCENT,"end"))
        o.append(line(x+16,ty+8,x+w-16,ty+8,RULE,1.5,"butt")); ty+=26
    return "".join(o)

def window(x,y,w,h):
    return (rect(x,y,w,h,"#dbe9f5",INK,2.5,2)+line(x+w/2,y,x+w/2,y+h,INK,2.2,"butt")
            +line(x,y+h/2,x+w,y+h/2,INK,2.2,"butt"))

def plant(x,fy):
    return (path("M%d %d L%d %d L%d %d L%d %d Z"%(x-22,fy,x-16,fy-56,x+16,fy-56,x+22,fy),WOOD2,INK,2.5)
      +path("M%d %d C%d %d %d %d %d %d Z"%(x,fy-56,x-26,fy-84,x-24,fy-122,x-10,fy-138),PLANT,INK,2.5)
      +path("M%d %d C%d %d %d %d %d %d Z"%(x,fy-56,x+26,fy-84,x+24,fy-122,x+10,fy-138),PLANT,INK,2.5))

def clockface(cx,cy,r,h,m):
    import math
    ha=math.radians((h%12)*30+m*0.5-90); ma=math.radians(m*6-90)
    return (circ(cx,cy,r,PAPER,INK,2.5)
      +line(cx,cy,cx+r*0.56*math.cos(ha),cy+r*0.56*math.sin(ha),INK,3)
      +line(cx,cy,cx+r*0.80*math.cos(ma),cy+r*0.80*math.sin(ma),INK,2.4)
      +circ(cx,cy,2.4,ACCENT,ACCENT,0))

def icon_at(name,x,y,s=1.0):
    return '<g transform="translate(%s,%s) scale(%s)">%s</g>'%(round(x,1),round(y,1),round(s,3),ICON[name]())

def sign(x,y,w,h,text,fill=ACCENT,size=17):
    return rect(x,y,w,h,fill,INK,2.5,3)+disp(x+w/2,y+h/2+6,text,size,"#fff","middle")

# ------------------------------------------------------------------ figures
def ranked_bar(title, rows, w=460, h=None, unit="students", maxv=None):
    """rows: [(label, value)] -- drawn sorted, value-labelled, baseline anchored."""
    rows=sorted(rows,key=lambda r:-r[1])
    n=len(rows); bh=22; gap=14; top=16
    h = h or top+n*(bh+gap)+46
    mv = maxv or max(r[1] for r in rows)
    lab=128; right=w-24; span=right-lab
    o=[rect(0,0,w,h,PAPER,PAPER,0)]
    step=span/mv
    for i in range(mv+1):
        gx=lab+step*i
        o.append(line(gx,top,gx,top+n*(bh+gap)-gap+4,RULE,1,"butt"))
        o.append(txt(gx,top+n*(bh+gap)+14,str(i),11,MUTED,"middle"))
    for i,(l,v) in enumerate(rows):
        y=top+i*(bh+gap)
        o.append(rect(lab,y,max(step*v,3),bh,BLUE,BLUE,0,4))
        o.append(txt(lab-10,y+16,l,13,INK,"end"))
        o.append(txt(lab+step*v-9,y+16,str(v),13,"#fff","end","700"))
    o.append(line(lab,top,lab,top+n*(bh+gap)-gap+4,INK,2,"butt"))
    o.append(txt(lab+span/2,top+n*(bh+gap)+32,unit,11,MUTED,"middle"))
    return svg(w,h,"".join(o)), w, h

def timeline(title, marks, nowx=0.5, w=560, h=150):
    """marks: [(pos0to1, toplabel, bottomlabel)]  -- the now-marker is the point."""
    y=74; o=[rect(0,0,w,h,PAPER,PAPER,0), line(36,y,w-36,y,INK,2.5)]
    nx=36+(w-72)*nowx
    o.append(line(nx,30,nx,y+30,ACCENT,2.5))
    o.append(disp(nx,24,"NOW",12,ACCENT,"middle"))
    for p,a,b in marks:
        x=36+(w-72)*p
        o.append(circ(x,y,7,PAPER,INK,2.5))
        if a: o.append(txt(x,y-18,a,12,INK,"middle","600"))
        if b: o.append(txt(x,y+28,b,12,MUTED,"middle"))
    return svg(w,h,"".join(o)), w, h

def partwhole(title, rows, w=470, h=120):
    """rows: [(label,value,color)] one stacked bar, 2px gaps, direct labels."""
    tot=sum(r[1] for r in rows); x=24; bw=w-48; y=34; bh=34
    o=[rect(0,0,w,h,PAPER,PAPER,0)]
    for l,v,c in rows:
        seg=bw*v/tot
        o.append(rect(x,y,max(seg-2,2),bh,c,c,0,3))
        if seg>52: o.append(txt(x+seg/2-1,y+22,str(v),13,"#fff","middle","700"))
        x+=seg
    lx=24
    for l,v,c in rows:
        o.append(rect(lx,y+bh+18,11,11,c,c,0,2))
        o.append(txt(lx+17,y+bh+28,l,12,INK))
        lx+=len(l)*7.0+40
    o.append(txt(24,24,title,12,MUTED,"start","700"))
    return svg(w,h,"".join(o)), w, h

def matrix(title, cols, rows, w=520):
    """comparison matrix: criteria down, options across, one cell one fact."""
    ch=36; cw=(w-150)/len(cols); h=ch*(len(rows)+1)+22
    o=[rect(0,0,w,h,PAPER,PAPER,0)]
    for j,c in enumerate(cols):
        o.append(disp(150+cw*j+cw/2,26,c,14,INK,"middle"))
    o.append(line(10,ch,w-10,ch,INK,2,"butt"))
    for i,(lab,vals) in enumerate(rows):
        y=ch*(i+1)+24
        o.append(txt(14,y,lab,13,MUTED))
        for j,v in enumerate(vals):
            o.append(txt(150+cw*j+cw/2,y,v,13,INK,"middle","600"))
        o.append(line(10,y+10,w-10,y+10,RULE,1.4,"butt"))
    return svg(w,h,"".join(o)), w, h

def process(title, steps, w=600, h=132, loop=None):
    """numbered steps, visible start and end. loop=(from,to) draws the arrow that
    sends you back a stage, because some official processes really do."""
    n=len(steps); bw=(w-40-(n-1)*26)/n
    if loop: h += 46
    o=[rect(0,0,w,h,PAPER,PAPER,0)]
    for i,s in enumerate(steps):
        x=20+i*(bw+26)
        o.append(rect(x,34,bw,62,S2,INK,2.5,5))
        o.append(circ(x+18,34,13,ACCENT,ACCENT,0)); o.append(disp(x+18,39,str(i+1),13,"#fff","middle"))
        for k,ln in enumerate(s.split("|")):
            o.append(txt(x+bw/2,62+k*16,ln,12,INK,"middle"))
        if i<n-1:
            ax=x+bw+6
            o.append(path("M%d 65 L%d 65 M%d 60 L%d 65 L%d 70"%(ax,ax+13,ax+8,ax+13,ax+8),"none",MUTED,2.5))
    if loop:
        a,b = loop
        xa = 20+a*(bw+26)+bw/2; xb = 20+b*(bw+26)+bw/2; yb = h-14
        o.append(path("M%.1f 96 C%.1f %d %.1f %d %.1f 102"%(xa,xa,yb,xb,yb,xb),"none",ACCENT,2.5))
        o.append(path("M%.1f 102 L%.1f 110 M%.1f 102 L%.1f 110"%(xb,xb-5,xb,xb+5),"none",ACCENT,2.5))
        o.append(txt((xa+xb)/2, yb-2, "and start again", 11, ACCENT, "middle", "600"))
    return svg(w,h,"".join(o)), w, h

def cycle(labels, w=520):
    """A ring of requirements, each pointing at the next. Used where a process has
    no entry point, which is a real experience and worth drawing honestly."""
    import math
    h=w; cx=cy=w/2; R=w*0.33; r=w*0.115
    o=[rect(0,0,w,h,PAPER,PAPER,0)]
    n=len(labels); pts=[]
    for i in range(n):
        a=-math.pi/2 + i*2*math.pi/n
        pts.append((cx+R*math.cos(a), cy+R*math.sin(a)))
    for i in range(n):
        x1,y1=pts[i]; x2,y2=pts[(i+1)%n]
        dx,dy=x2-x1,y2-y1; L=math.hypot(dx,dy); ux,uy=dx/L,dy/L
        sx,sy=x1+ux*(r+5), y1+uy*(r+5); ex,ey=x2-ux*(r+13), y2-uy*(r+13)
        o.append(path("M%.1f %.1f L%.1f %.1f"%(sx,sy,ex,ey),"none",MUTED,2.5))
        px,py=-uy,ux
        o.append(path("M%.1f %.1f L%.1f %.1f M%.1f %.1f L%.1f %.1f"%(
            ex,ey, ex-ux*9+px*5, ey-uy*9+py*5, ex,ey, ex-ux*9-px*5, ey-uy*9-py*5),"none",MUTED,2.5))
    for i,(x,y) in enumerate(pts):
        o.append(circ(x,y,r,S2,INK,2.5))
        o.append(circ(x,y-r,11,ACCENT,ACCENT,0)); o.append(disp(x,y-r+5,str(i+1),12,"#fff","middle"))
        for k,ln in enumerate(labels[i].split("|")):
            o.append(txt(x, y-4+k*14, ln, 11.5, INK, "middle"))
    o.append(txt(cx, cy-4, "no way in", 14, ACCENT, "middle", "700"))
    return svg(w,h,"".join(o)), w, h

# ------------------------------------------------------------------ realia (HTML)
RE_CSS = """<style>
@import url('');
.r{background:#fff;color:#111;border:1px solid #c9c7c0;font-family:Inter,Helvetica,sans-serif;
   padding:18px 20px;width:100%;box-sizing:border-box}
.r .lh{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:12px;letter-spacing:.09em;
   text-transform:uppercase;border-bottom:2px solid #c9452c;padding-bottom:6px;margin-bottom:12px}
.r h4{font-family:'Bricolage Grotesque',sans-serif;font-size:19px;margin:0 0 8px}
.r p{font-size:14px;margin:0 0 9px;line-height:1.5}
.r ol{margin:0;padding-left:20px;font-size:14px;line-height:1.55}
.r ol li{margin-bottom:6px}
.r .sm{font-size:11.5px;color:#6b6861;margin-top:10px;line-height:1.5}
.row{display:flex;gap:10px;border-bottom:1px dotted #c9c7c0;padding:6px 0;font-size:13px;align-items:baseline}
.row .k{flex:0 0 130px;color:#6b6861;font-weight:500}
.row .v{flex:1;font-family:'Bricolage Grotesque',cursive;font-size:15px}
.row.e .v{border-bottom:1px solid #c9c7c0;min-height:16px}
table.t{border-collapse:collapse;width:100%;font-size:13px;font-variant-numeric:tabular-nums}
table.t th{background:#ebebe8;text-align:left;padding:7px 9px;border:1px solid #c9c7c0;
   font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:#52514e}
table.t td{padding:7px 9px;border:1px solid #c9c7c0}
table.t td.n{text-align:right}
.big{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px}
.tagrow{display:flex;gap:12px;flex-wrap:wrap}
.tag{border:2px solid #111;border-radius:4px;padding:8px 12px;text-align:center;min-width:92px}
.tag .n{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px}
.tag .l{font-size:11px;color:#6b6861;margin-top:2px}
.tag .was{text-decoration:line-through;color:#8a8780;font-size:12px}
</style>"""

def realia(inner, w=520):
    return RE_CSS+'<div class="r" style="width:%dpx">%s</div>'%(w,inner)

def rows_html(pairs):
    out=[]
    for k,v in pairs:
        out.append('<div class="row%s"><span class="k">%s</span><span class="v">%s</span></div>'%(
            "" if v else " e", k, v or ""))
    return "".join(out)

def table_html(headers, rows, numcols=()):
    th="".join("<th>%s</th>"%h for h in headers)
    tr=""
    for r in rows:
        tds="".join('<td class="%s">%s</td>'%("n" if i in numcols else "",c) for i,c in enumerate(r))
        tr+="<tr>%s</tr>"%tds
    return '<table class="t"><thead><tr>%s</tr></thead><tbody>%s</tbody></table>'%(th,tr)
