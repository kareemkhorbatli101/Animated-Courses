"""Illustration engine: Book 1's seven frames and layout families, as SVG -> PNG."""
import os, subprocess, tempfile, hashlib, textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, 'art')
CHROME = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'

# ---- palette, sampled from Book 1 -------------------------------------------
CREAM   = '#faf7f1'
WHITE   = '#ffffff'
NAVY    = '#1a4a63'
NAVY_D  = '#0f3246'
NAVY_L  = '#18465e'
BLUE    = '#2e7093'
ORANGE  = '#c67b3a'
ORANGE_L= '#e0a263'
GREEN   = '#2f7e76'
GREEN_D = '#3b7d6f'
RED     = '#b5483c'
INK     = '#2b3440'
SKIN    = '#e8c9a0'
SKIN_D  = '#d9a97a'
PURPLE  = '#7a6cae'
GREY    = '#6b7a85'
BORDER  = '#e5ddcc'
HAIR    = '#241a14'

F = 'DejaVu Sans'

# approximate advance widths for DejaVu Sans, per px of font-size
_W_REG, _W_BOLD = 0.545, 0.585


def tw(text, size, bold=False):
    return len(text) * size * (_W_BOLD if bold else _W_REG)


def wrap(text, width_px, size, bold=False):
    per = max(4, int(width_px / (size * (_W_BOLD if bold else _W_REG))))
    return textwrap.wrap(text, per) or ['']


def T(x, y, s, size=20, fill=NAVY, bold=False, anchor='middle', italic=False):
    return ('<text x="%g" y="%g" font-family="%s" font-size="%g" fill="%s"'
            ' text-anchor="%s"%s%s>%s</text>'
            % (x, y, F, size, fill, anchor,
               ' font-weight="700"' if bold else '',
               ' font-style="italic"' if italic else '',
               s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')))


def R(x, y, w, h, fill='none', stroke=None, sw=2, rx=0):
    return ('<rect x="%g" y="%g" width="%g" height="%g" rx="%g" fill="%s"%s/>'
            % (x, y, w, h, rx, fill,
               ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else ''))


def C(cx, cy, r, fill, stroke=None, sw=2):
    return ('<circle cx="%g" cy="%g" r="%g" fill="%s"%s/>'
            % (cx, cy, r, fill, ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else ''))


def L(x1, y1, x2, y2, stroke, sw=2):
    return '<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" stroke-width="%g"/>' % (
        x1, y1, x2, y2, stroke, sw)


# ---- people -----------------------------------------------------------------
def person(cx, ground, shirt=BLUE, kind='m', scale=1.0, skin=SKIN, arm=None):
    """kind: m (man), w (woman, ponytail), h (woman, hijab+dress)."""
    s = scale
    o = []
    hr = 26 * s                      # head radius
    hy = ground - 150 * s            # head centre y
    by = hy + hr + 4 * s             # body top
    bw, bh = 74 * s, 72 * s
    if kind == 'h':
        # hijab: dome + side panels falling to the shoulders, face laid over it
        hh = hr + 8 * s
        o.append('<path d="M%g %g a%g %g 0 1 1 %g 0 l0 %g l%g 0 z" fill="%s"/>'
                 % (cx - hh, hy, hh, hh, 2 * hh, 42 * s, -2 * hh, shirt))
        o.append(C(cx, hy + 3 * s, hr - 2 * s, skin))
    else:
        o.append(C(cx, hy, hr, skin))
    if kind == 'm':
        o.append('<path d="M%g %g a%g %g 0 0 1 %g 0 z" fill="%s"/>'
                 % (cx - hr, hy - 1 * s, hr, hr, 2 * hr, HAIR))
    elif kind == 'w':
        o.append('<path d="M%g %g a%g %g 0 0 1 %g 0 z" fill="%s"/>'
                 % (cx - hr, hy - 1 * s, hr, hr, 2 * hr, HAIR))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>'
                 % (cx - hr + 1 * s, hy + 24 * s, 9 * s, 28 * s, HAIR))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>'
                 % (cx + hr - 1 * s, hy + 24 * s, 9 * s, 28 * s, HAIR))
    if kind == 'h':
        hy = hy + 3 * s
    # eyes + smile
    o.append(C(cx - 9 * s, hy - 2 * s, 5.5 * s, WHITE))
    o.append(C(cx + 9 * s, hy - 2 * s, 5.5 * s, WHITE))
    o.append(C(cx - 9 * s, hy - 2 * s, 2.4 * s, INK))
    o.append(C(cx + 9 * s, hy - 2 * s, 2.4 * s, INK))
    o.append('<path d="M%g %g q%g %g %g 0" fill="none" stroke="%s" stroke-width="%g" stroke-linecap="round"/>'
             % (cx - 8 * s, hy + 11 * s, 8 * s, 7 * s, 16 * s, '#b4675a', 2.4 * s))
    # body
    if kind == 'h':
        o.append('<path d="M%g %g l%g 0 l%g %g l%g 0 z" fill="%s"/>' % (
            cx - bw / 2, by, bw, 16 * s, 106 * s, -(bw + 32) * s, shirt))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>' % (cx - 20 * s, ground - 4 * s, 15 * s, 7 * s, INK))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>' % (cx + 20 * s, ground - 4 * s, 15 * s, 7 * s, INK))
    else:
        o.append(R(cx - bw / 2, by, bw, bh, shirt, rx=22 * s))
        o.append('<path d="M%g %g L%g %g L%g %g Z" fill="%s"/>' % (
            cx - 13 * s, by, cx, by + 15 * s, cx + 13 * s, by, skin))
        o.append(R(cx - 24 * s, by + bh - 4 * s, 18 * s, 56 * s, INK, rx=4 * s))
        o.append(R(cx + 6 * s, by + bh - 4 * s, 18 * s, 56 * s, INK, rx=4 * s))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>' % (cx - 15 * s, ground - 4 * s, 15 * s, 7 * s, INK))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>' % (cx + 15 * s, ground - 4 * s, 15 * s, 7 * s, INK))
    # arms
    if arm == 'right':
        o.append(R(cx + bw / 2 - 6 * s, by + 14 * s, 62 * s, 20 * s, shirt, rx=10 * s))
        o.append(C(cx + bw / 2 + 52 * s, by + 24 * s, 11 * s, skin))
    elif arm == 'up':
        o.append('<path d="M%g %g l%g %g l%g %g l%g %g z" fill="%s"/>' % (
            cx + bw / 2 - 8 * s, by + 10 * s, 34 * s, -34 * s, 15 * s, 15 * s, -34 * s, 34 * s, shirt))
        o.append(C(cx + bw / 2 + 34 * s, by - 18 * s, 11 * s, skin))
    else:
        o.append(C(cx - bw / 2 + 2 * s, by + bh - 10 * s, 11 * s, skin))
        o.append(C(cx + bw / 2 - 2 * s, by + bh - 10 * s, 11 * s, skin))
    return ''.join(o)


# ---- icons (36x36 nominal, drawn around 0,0 top-left of a 56-box) -----------
def icon(name, x, y, s=1.0):
    """Flat icon in a 56x56 box with top-left at (x, y)."""
    g = []
    def rr(a, b, w, h, f, rx=0): g.append(R(x + a * s, y + b * s, w * s, h * s, f, rx=rx * s))
    def cc(a, b, r, f): g.append(C(x + a * s, y + b * s, r * s, f))
    def pp(d, f): g.append('<path d="%s" fill="%s"/>' % (d, f))
    def ln(a, b, c, d, col, w=3): g.append(L(x + a * s, y + b * s, x + c * s, y + d * s, col, w * s))
    if name == 'bag':          # cement bag
        rr(12, 8, 32, 42, '#c9ccd1', 4); rr(12, 8, 32, 8, '#aeb3ba', 2)
        rr(17, 24, 22, 14, WHITE, 2)
        g.append(T(x + 28 * s, y + 35 * s, '50kg', 10 * s, INK, bold=True))
    elif name == 'beam':       # steel I-beam
        rr(10, 10, 36, 8, GREY); rr(24, 18, 8, 20, GREY); rr(10, 38, 36, 8, GREY)
    elif name == 'iron':       # iron bars
        rr(8, 18, 40, 7, ORANGE, 3); rr(8, 30, 40, 7, '#8f5a2b', 3)
    elif name == 'drum':       # fuel drum
        rr(14, 10, 28, 38, '#8f5a2b', 4)
        g.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>' % (x+28*s, y+10*s, 14*s, 5*s, ORANGE))
        ln(14, 22, 42, 22, ORANGE_L, 3); ln(14, 34, 42, 34, ORANGE_L, 3)
    elif name == 'sack':       # fodder sack
        pp('M%g %g q%g %g %g 0 l%g %g l%g 0 z' % (
            x+14*s, y+20*s, 14*s, -14*s, 28*s, 5*s, 26*s, -38*s), '#c9a558')
        rr(18, 13, 20, 8, '#8d7336', 2)
    elif name == 'container':
        rr(8, 16, 44, 28, ORANGE, 2)
        for k in range(5): ln(14 + k * 8, 16, 14 + k * 8, 44, '#8f5a2b', 2)
    elif name == 'ship':
        pp('M%g %g l%g 0 l%g %g l%g 0 z' % (x+6*s, y+34*s, 48*s, -6*s, 12*s, -36*s), BLUE)
        rr(14, 18, 16, 14, ORANGE, 2); rr(32, 18, 14, 14, ORANGE_L, 2)
    elif name == 'truck':
        rr(6, 18, 28, 18, BLUE, 2); rr(34, 24, 16, 12, GREY, 2)
        cc(14, 40, 6, INK); cc(42, 40, 6, INK)
    elif name == 'crane':
        ln(16, 46, 16, 10, GREY, 4); ln(14, 11, 46, 11, GREY, 4); ln(42, 11, 42, 24, INK, 2)
        rr(36, 24, 12, 10, ORANGE, 2); rr(8, 42, 18, 6, GREY, 2)
    elif name == 'factory':
        pp('M%g %g l0 %g l%g 0 l0 %g l%g %g l0 %g l%g 0 z' % (
            x+8*s, y+24*s, 22*s, 14*s, -10*s, 12*s, 10*s, -12*s, 16*s), GREY)
        rr(10, 12, 7, 14, GREY)
    elif name == 'shop':       # retail counter
        rr(8, 22, 40, 24, WHITE, 2); g.append(R(x+8*s, y+22*s, 40*s, 24*s, 'none', NAVY, 2.5*s, 3*s))
        pp('M%g %g l%g %g l%g 0 z' % (x+6*s, y+22*s, 10*s, -12*s, 32*s), ORANGE)
        ln(18, 30, 38, 30, NAVY, 2); ln(18, 38, 32, 38, NAVY, 2)
    elif name == 'shelf':      # warehouse shelf
        ln(10, 10, 10, 48, GREY, 4); ln(46, 10, 46, 48, GREY, 4)
        for b in (20, 32, 44): ln(10, b, 46, b, GREY, 3)
        rr(14, 12, 10, 8, ORANGE, 1); rr(28, 12, 12, 8, BLUE, 1)
        rr(14, 24, 14, 8, BLUE, 1); rr(32, 24, 10, 8, ORANGE, 1)
    elif name == 'bank':
        pp('M%g %g l%g %g l%g 0 z' % (x+6*s, y+20*s, 22*s, -12*s, 44*s), NAVY)
        for k in range(4): rr(11 + k * 10, 22, 6, 18, BLUE)
        rr(6, 40, 44, 6, NAVY, 2)
    elif name == 'doc':
        rr(14, 8, 28, 40, WHITE, 2); g.append(R(x+14*s, y+8*s, 28*s, 40*s, 'none', NAVY, 2.5*s, 3*s))
        for k in range(4): ln(19, 18 + k * 8, 37, 18 + k * 8, BLUE, 2)
    elif name == 'stamp':
        cc(28, 26, 17, 'none'); g.append(C(x+28*s, y+26*s, 17*s, 'none', RED, 3*s))
        g.append(T(x + 28 * s, y + 31 * s, 'OK', 13 * s, RED, bold=True))
        ln(10, 46, 46, 46, RED, 3)
    elif name == 'money':
        rr(8, 16, 40, 24, '#3b7d6f', 3)
        cc(28, 28, 8, '#d7e6e2'); g.append(T(x + 28 * s, y + 32 * s, '$', 13 * s, GREEN_D, bold=True))
    elif name == 'calendar':
        rr(10, 12, 36, 34, WHITE, 3); g.append(R(x+10*s, y+12*s, 36*s, 34*s, 'none', NAVY, 2.5*s, 3*s))
        rr(10, 12, 36, 9, ORANGE, 3)
        for r_ in range(2):
            for c_ in range(4): rr(15 + c_ * 8, 26 + r_ * 9, 5, 5, BLUE, 1)
    elif name == 'globe':
        g.append(C(x+28*s, y+28*s, 18*s, 'none', ORANGE, 2.5*s))
        g.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="none" stroke="%s" stroke-width="%g"/>'
                 % (x+28*s, y+28*s, 8*s, 18*s, ORANGE, 2.5*s))
        ln(10, 28, 46, 28, ORANGE, 2.5)
    elif name == 'building':
        rr(12, 10, 32, 38, GREY, 2)
        for r_ in range(4):
            for c_ in range(3): rr(17 + c_ * 9, 15 + r_ * 8, 6, 5, '#cbd6dd')
    elif name == 'tick':
        g.append(C(x+28*s, y+28*s, 18*s, GREEN_D))
        g.append('<path d="M%g %g l%g %g l%g %g" fill="none" stroke="%s" stroke-width="%g" stroke-linecap="round" stroke-linejoin="round"/>'
                 % (x+20*s, y+28*s, 6*s, 7*s, 14*s, -15*s, WHITE, 4*s))
    elif name == 'cross':
        g.append(C(x+28*s, y+28*s, 18*s, RED))
        ln(21, 21, 35, 35, WHITE, 4); ln(35, 21, 21, 35, WHITE, 4)
    elif name == 'clock':
        g.append(C(x+28*s, y+28*s, 18*s, WHITE)); g.append(C(x+28*s, y+28*s, 18*s, 'none', NAVY, 2.5*s))
        ln(28, 28, 28, 17, NAVY, 2.5); ln(28, 28, 36, 31, NAVY, 2.5)
    elif name == 'scale':
        ln(28, 12, 28, 46, GREY, 3); ln(12, 18, 44, 18, GREY, 3); ln(18, 46, 38, 46, GREY, 3)
        pp('M%g %g l%g 0 l%g %g z' % (x+6*s, y+30*s, 20*s, -10*s, -12*s), BLUE)
        pp('M%g %g l%g 0 l%g %g z' % (x+30*s, y+30*s, 20*s, -10*s, -12*s), ORANGE)
    else:                       # fallback box
        rr(14, 14, 28, 28, BLUE, 4)
    return ''.join(g)


# ---- renderer ---------------------------------------------------------------
def render(svg_body, w, h, bg=CREAM):
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">'
           '<rect width="%d" height="%d" fill="%s"/>%s</svg>' % (w, h, w, h, w, h, bg, svg_body))
    key = hashlib.sha1(svg.encode()).hexdigest()
    os.makedirs(CACHE, exist_ok=True)
    out = os.path.join(CACHE, key + '.png')
    if not os.path.exists(out):
        html = ('<!doctype html><meta charset="utf-8">'
                '<style>html,body{margin:0;padding:0;background:%s}svg{display:block}</style>%s' % (bg, svg))
        with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False) as f:
            f.write(html); src = f.name
        subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                        '--force-device-scale-factor=1', '--window-size=%d,%d' % (w, h),
                        '--screenshot=' + out, 'file://' + src],
                       capture_output=True, timeout=120)
        os.unlink(src)
        # Flat vector art uses only a few thousand colours, almost all of them
        # anti-aliasing. A 256-colour palette is visually identical and about
        # 60% smaller, which matters for a book with 223 illustrations.
        try:
            from PIL import Image
            im = Image.open(out).convert('RGB')
            im.quantize(colors=256, method=Image.MEDIANCUT,
                        dither=Image.NONE).save(out, 'PNG', optimize=True)
        except Exception:
            pass
    return open(out, 'rb').read(), w, h
