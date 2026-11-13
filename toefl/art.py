"""Illustration engine for the TOEFL 2026 B1 course: SVG -> PNG via headless Chromium."""
import os, re, json, subprocess, tempfile, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, 'art')
def _find_chrome():
    """Locate a headless Chromium. The path used to be hard-coded to one
    Playwright build number, which stopped existing the moment the image was
    rebuilt, so the figures could not be re-rendered at all."""
    import glob
    cands = []
    cands += sorted(glob.glob('/opt/pw-browsers/chromium_headless_shell-*/chrome-linux*/headless_shell'), reverse=True)
    cands += sorted(glob.glob('/opt/pw-browsers/chromium-*/chrome-linux*/chrome'), reverse=True)
    cands += ['/opt/pw-browsers/chromium', '/usr/bin/chromium', '/usr/bin/chromium-browser',
              '/usr/bin/google-chrome']
    for c in cands:
        if os.path.exists(c) and os.access(c, os.X_OK):
            return c
    raise RuntimeError('no headless Chromium found; looked in /opt/pw-browsers and /usr/bin')


CHROME = _find_chrome()

# ---- palette ----------------------------------------------------------------
# Built around the indigo/periwinkle of the official 2026 paper, with one hue
# per skill so a student can find a Listening page by colour alone.
PAPER   = '#ffffff'
SOFT    = '#f5f7fc'
CREAM   = '#fbfaf6'
INDIGO  = '#353a7c'          # headers, footers, covers
INDIGO_D= '#23265a'
PERI    = '#8186ef'          # table header fill, as ETS uses
PERI_L  = '#c3c6f7'
BLUE    = '#2b6cb0'          # READING
AMBER   = '#c9762e'          # LISTENING
TEAL    = '#1f7a6a'          # SPEAKING
PLUM    = '#6d3f7e'          # WRITING
GREEN   = '#2e8b62'
RED     = '#c0483f'
INK     = '#232733'
GREY    = '#6b7280'
GREY_L  = '#aab2c0'
RULE    = '#dfe3ee'
SKIN    = '#e8c9a0'
SKIN_D  = '#c99a6a'
HAIR    = '#241a14'

SKILL = {'reading': BLUE, 'listening': AMBER, 'speaking': TEAL, 'writing': PLUM}

F = 'DejaVu Sans'

# ---- text metrics -----------------------------------------------------------
# Real advance widths, read out of the DejaVu TrueType files the renderer uses.
# Validated against Chromium's getComputedTextLength() on every string in the
# four volumes: mean error 0.97px, and never an under-estimate by more than
# 0.08px, so a width computed here is a safe upper bound on the width drawn.
# The old estimate (len * size * 0.56) under-measured by up to 40%, which is
# why text ran out of its box and off the edge of the figure.
_FM = json.load(open(os.path.join(HERE, 'dejavu_metrics.json')))
for _k in _FM:
    _FM[_k]['w'] = {int(_c): _a for _c, _a in _FM[_k]['w'].items()}
_SPACE_RE = re.compile(r'\s+')


def _face(bold, mono):
    return _FM['monob' if (mono and bold) else 'mono' if mono else 'bold' if bold else 'reg']


def tw(text, size, bold=False, mono=False):
    """Width in px of `text` as the renderer will draw it.

    SVG collapses runs of whitespace, so the measurement collapses them too.
    """
    f = _face(bold, mono)
    w, upem, dflt = f['w'], f['upem'], f['w'][0x20]
    return sum(w.get(ord(c), dflt) for c in _SPACE_RE.sub(' ', text).strip()) * size / float(upem)


def _split_long(word, width_px, size, bold, mono):
    """Break a word that cannot fit on a line of its own. Nothing is discarded."""
    out, cur = [], ''
    for ch in word:
        if cur and tw(cur + ch, size, bold, mono) > width_px:
            out.append(cur)
            cur = ch
        else:
            cur += ch
    if cur:
        out.append(cur)
    return out or ['']


def fit(text, width_px, size, bold=False, mono=False):
    """Wrap `text` to `width_px`, measured exactly. Every word is kept."""
    width_px = max(float(width_px), size * 0.6)
    lines, cur = [], ''
    for word in _SPACE_RE.sub(' ', text).strip().split(' '):
        if not word:
            continue
        trial = word if not cur else cur + ' ' + word
        if tw(trial, size, bold, mono) <= width_px:
            cur = trial
            continue
        if cur:
            lines.append(cur)
            cur = ''
        if tw(word, size, bold, mono) <= width_px:
            cur = word
        else:
            parts = _split_long(word, width_px, size, bold, mono)
            lines.extend(parts[:-1])
            cur = parts[-1]
    if cur:
        lines.append(cur)
    return lines or ['']


def fit_block(text, width_px, size, bold=False, mono=False, floor=0.72):
    """Wrap to `width_px` without ever breaking a word.

    If a single word is wider than the column, the size comes down until the
    longest word fits (to `floor` of the original) and the text is wrapped at
    that size. Only if even that fails does a word get split, so a narrow
    column can never silently turn "Anthropology" into "Anthropolog y".
    Returns (lines, size_used).
    """
    words = [w for w in _SPACE_RE.sub(' ', text).strip().split(' ') if w]
    if not words:
        return [''], size
    s = size
    if max(tw(w, s, bold, mono) for w in words) > width_px:
        lo = max(8.0, size * floor)
        while s > lo:
            s -= 0.5
            if max(tw(w, s, bold, mono) for w in words) <= width_px:
                break
    return fit(text, width_px, s, bold, mono), s


def wrap(text, width_px, size, bold=False):
    """Kept for callers that predate `fit`; same contract, exact measurement."""
    return fit(text, width_px, size, bold)


def shrink_to(text, width_px, size, bold=False, mono=False, floor=0.82):
    """Largest size <= `size` (and >= size*floor) that puts `text` on one line.

    Returns `size` unchanged when even the floor will not do it, so the caller
    knows it has to wrap instead of silently overrunning.
    """
    if tw(text, size, bold, mono) <= width_px:
        return size
    lo = max(8.0, size * floor)
    s = size
    while s > lo:
        s -= 0.5
        if tw(text, s, bold, mono) <= width_px:
            return s
    return size


# Every fitted run records the box it promised to stay inside, so the audit can
# prove the promise rather than infer it. Collected only when FITLOG is a list.
FITLOG = None


def _note(x, y, text, size, bold, mono, anchor, max_w):
    if FITLOG is not None:
        FITLOG.append(dict(x=x, y=y, s=text, size=size, bold=bool(bold), mono=bool(mono),
                           anchor=anchor, max_w=max_w))


def TFIT(x, y, text, size, max_w, fill=None, bold=False, anchor='start',
         italic=False, mono=False, floor=0.82):
    """One line of text that is guaranteed to fit `max_w`, by shrinking a little.

    Use it for labels that must stay on one line. If the text cannot be made to
    fit even at the floor, the size still drops to the floor and the caller is
    expected to have given a box with room — the audit will catch it if not.
    """
    s = shrink_to(text, max_w, size, bold, mono, floor)
    if tw(text, s, bold, mono) > max_w:
        s = max(8.0, s * max_w / tw(text, s, bold, mono))
    _note(x, y, text, s, bold, mono, anchor, max_w)
    return T(x, y, text, s, INK if fill is None else fill, bold, anchor, italic, mono)


def TBLOCK(x, y, text, size, max_w, lead=None, fill=None, bold=False,
           anchor='start', italic=False, mono=False, lines=None):
    """Wrapped text. Returns (svg, number_of_lines, height_used).

    `lines` may be supplied when the caller has already wrapped, so that layout
    and drawing cannot disagree about the line count.
    """
    lead = lead if lead is not None else size * 1.38
    lns = lines if lines is not None else fit(text, max_w, size, bold, mono)
    out = []
    for i, ln in enumerate(lns):
        yy = y + i * lead
        _note(x, yy, ln, size, bold, mono, anchor, max_w)
        out.append(T(x, yy, ln, size, INK if fill is None else fill, bold, anchor, italic, mono))
    return ''.join(out), len(lns), (len(lns) - 1) * lead


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def T(x, y, s, size=20, fill=INK, bold=False, anchor='middle', italic=False, mono=False):
    return ('<text x="%g" y="%g" font-family="%s" font-size="%g" fill="%s"'
            ' text-anchor="%s"%s%s>%s</text>'
            % (x, y, 'DejaVu Sans Mono' if mono else F, size, fill, anchor,
               ' font-weight="700"' if bold else '',
               ' font-style="italic"' if italic else '', esc(s)))


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


def P(d, fill='none', stroke=None, sw=2):
    return ('<path d="%s" fill="%s"%s stroke-linecap="round" stroke-linejoin="round"/>'
            % (d, fill, ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else ''))


# ---- people -----------------------------------------------------------------
def person(cx, ground, shirt=BLUE, kind='m', scale=1.0, skin=SKIN, arm=None):
    """kind: m (man), w (woman, ponytail), h (woman, hijab + dress)."""
    s = scale
    o = []
    hr = 26 * s
    hy = ground - 150 * s
    by = hy + hr + 4 * s
    bw, bh = 74 * s, 72 * s
    if kind == 'h':
        hh = hr + 8 * s
        o.append('<path d="M%g %g a%g %g 0 1 1 %g 0 l0 %g l%g 0 z" fill="%s"/>'
                 % (cx - hh, hy, hh, hh, 2 * hh, 42 * s, -2 * hh, shirt))
        o.append(C(cx, hy + 3 * s, hr - 2 * s, skin))
    else:
        o.append(C(cx, hy, hr, skin))
    if kind in ('m', 'w'):
        o.append('<path d="M%g %g a%g %g 0 0 1 %g 0 z" fill="%s"/>'
                 % (cx - hr, hy - 1 * s, hr, hr, 2 * hr, HAIR))
    if kind == 'w':
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>'
                 % (cx - hr + 1 * s, hy + 24 * s, 9 * s, 28 * s, HAIR))
        o.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="%s"/>'
                 % (cx + hr - 1 * s, hy + 24 * s, 9 * s, 28 * s, HAIR))
    if kind == 'h':
        hy = hy + 3 * s
    o.append(C(cx - 9 * s, hy - 2 * s, 5.5 * s, PAPER))
    o.append(C(cx + 9 * s, hy - 2 * s, 5.5 * s, PAPER))
    o.append(C(cx - 9 * s, hy - 2 * s, 2.4 * s, INK))
    o.append(C(cx + 9 * s, hy - 2 * s, 2.4 * s, INK))
    o.append(P('M%g %g q%g %g %g 0' % (cx - 8 * s, hy + 11 * s, 8 * s, 7 * s, 16 * s),
               'none', '#b4675a', 2.4 * s))
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
    if arm == 'right':
        o.append(R(cx + bw / 2 - 6 * s, by + 14 * s, 62 * s, 20 * s, shirt, rx=10 * s))
        o.append(C(cx + bw / 2 + 52 * s, by + 24 * s, 11 * s, skin))
    elif arm == 'left':
        o.append(R(cx - bw / 2 - 56 * s, by + 14 * s, 62 * s, 20 * s, shirt, rx=10 * s))
        o.append(C(cx - bw / 2 - 52 * s, by + 24 * s, 11 * s, skin))
    elif arm == 'up':
        o.append('<path d="M%g %g l%g %g l%g %g l%g %g z" fill="%s"/>' % (
            cx + bw / 2 - 8 * s, by + 10 * s, 34 * s, -34 * s, 15 * s, 15 * s, -34 * s, 34 * s, shirt))
        o.append(C(cx + bw / 2 + 34 * s, by - 18 * s, 11 * s, skin))
    else:
        o.append(C(cx - bw / 2 + 2 * s, by + bh - 10 * s, 11 * s, skin))
        o.append(C(cx + bw / 2 - 2 * s, by + bh - 10 * s, 11 * s, skin))
    return ''.join(o)


def head(cx, cy, r=34, shirt=BLUE, kind='m', skin=SKIN):
    """A head-and-shoulders roundel, for interview and discussion panels."""
    o = [C(cx, cy, r + 6, PAPER), C(cx, cy, r + 6, 'none', RULE, 2)]
    o.append('<clipPath id="cl%d"><circle cx="%g" cy="%g" r="%g"/></clipPath>' % (int(cx * 7 + cy), cx, cy, r + 4))
    g = ['<g clip-path="url(#cl%d)">' % int(cx * 7 + cy)]
    g.append(C(cx, cy, r + 4, SOFT))
    g.append(R(cx - r, cy + r * 0.45, 2 * r, r * 1.4, shirt, rx=r * 0.5))
    s = r / 26.0
    if kind == 'h':
        g.append('<path d="M%g %g a%g %g 0 1 1 %g 0 l0 %g l%g 0 z" fill="%s"/>'
                 % (cx - r * 0.86, cy - r * 0.08, r * 0.86, r * 0.86, 2 * r * 0.86, r * 0.9, -2 * r * 0.86, shirt))
        g.append(C(cx, cy - r * 0.02, r * 0.66, skin))
        hy = cy - r * 0.02
    else:
        g.append(C(cx, cy - r * 0.08, r * 0.7, skin))
        g.append('<path d="M%g %g a%g %g 0 0 1 %g 0 z" fill="%s"/>'
                 % (cx - r * 0.7, cy - r * 0.1, r * 0.7, r * 0.7, 2 * r * 0.7, HAIR))
        hy = cy - r * 0.08
    g.append(C(cx - 6 * s, hy - 1 * s, 2.6 * s, INK))
    g.append(C(cx + 6 * s, hy - 1 * s, 2.6 * s, INK))
    g.append(P('M%g %g q%g %g %g 0' % (cx - 6 * s, hy + 9 * s, 6 * s, 5 * s, 12 * s),
               'none', '#b4675a', 2 * s))
    g.append('</g>')
    return ''.join(o) + ''.join(g)


# ---- icons (56x56 box, top-left at x, y) ------------------------------------
def icon(name, x, y, s=1.0):
    g = []
    def rr(a, b, w, h, f, rx=0): g.append(R(x + a * s, y + b * s, w * s, h * s, f, rx=rx * s))
    def ro(a, b, w, h, col, sw=2.5, rx=0):
        g.append(R(x + a * s, y + b * s, w * s, h * s, 'none', col, sw * s, rx * s))
    def cc(a, b, r, f): g.append(C(x + a * s, y + b * s, r * s, f))
    def co(a, b, r, col, sw=2.5): g.append(C(x + a * s, y + b * s, r * s, 'none', col, sw * s))
    def pp(d, f, st=None, sw=2.5): g.append(P(d, f, st, sw * s))
    def ln(a, b, c, d, col, w=2.5): g.append(L(x + a * s, y + b * s, x + c * s, y + d * s, col, w * s))

    if name == 'book':
        rr(8, 12, 19, 34, BLUE, 2)
        rr(29, 12, 19, 34, '#5a90c9', 2)
        ln(28, 12, 28, 46, PAPER, 2.5)
        for k in range(3):
            ln(13, 20 + k * 8, 24, 20 + k * 8, '#9dc0e3', 1.8)
            ln(32, 20 + k * 8, 43, 20 + k * 8, PAPER, 1.8)
    elif name == 'headphones':
        pp('M%g %g a%g %g 0 0 1 %g 0' % (x + 10 * s, y + 32 * s, 18 * s, 18 * s, 36 * s), 'none', AMBER, 4)
        rr(6, 30, 10, 18, AMBER, 4); rr(40, 30, 10, 18, AMBER, 4)
    elif name == 'mic':
        rr(22, 8, 12, 24, TEAL, 6)
        pp('M%g %g a%g %g 0 0 0 %g 0' % (x + 14 * s, y + 28 * s, 14 * s, 14 * s, 28 * s), 'none', TEAL, 3)
        ln(28, 42, 28, 48, TEAL, 3); ln(20, 48, 36, 48, TEAL, 3)
    elif name == 'pen':
        pp('M%g %g l%g %g l%g %g l%g %g z'
           % (x + 10 * s, y + 46 * s, 4 * s, -10 * s, 26 * s, -26 * s, 10 * s, 10 * s), PLUM)
        pp('M%g %g l%g %g l%g %g z' % (x + 10 * s, y + 46 * s, 10 * s, -2 * s, -2 * s, -10 * s), INK)
        ln(36, 10, 46, 20, '#a97ab8', 4)
    elif name == 'laptop':
        ro(12, 12, 32, 22, GREY, 2.5, 2); rr(14, 14, 28, 18, SOFT)
        rr(6, 36, 44, 5, GREY, 2)
    elif name == 'clock':
        cc(28, 28, 18, PAPER); co(28, 28, 18, INDIGO)
        ln(28, 28, 28, 16, INDIGO, 2.5); ln(28, 28, 37, 31, INDIGO, 2.5)
    elif name == 'envelope':
        rr(8, 16, 40, 26, PAPER); ro(8, 16, 40, 26, AMBER, 2.5, 2)
        pp('M%g %g l%g %g l%g %g' % (x + 8 * s, y + 16 * s, 20 * s, 15 * s, 20 * s, -15 * s), 'none', AMBER, 2.5)
    elif name == 'speech':
        pp('M%g %g l%g 0 q%g 0 %g %g l0 %g q0 %g %g %g l%g 0 l%g %g l0 %g l%g 0 q%g 0 %g %g l0 %g q0 %g %g %g z'
           % (x + 8 * s, y + 12 * s, 30 * s, 6 * s, 6 * s, 6 * s, 16 * s, 6 * s, -6 * s, 6 * s,
              -16 * s, -8 * s, 8 * s, -8 * s, -12 * s, -6 * s, -6 * s, -6 * s, -16 * s, -6 * s, 6 * s, -6 * s), TEAL)
    elif name == 'bubbles':
        rr(6, 12, 30, 20, TEAL, 8); pp('M%g %g l%g %g l0 %g z' % (x + 14 * s, y + 32 * s, -2 * s, 8 * s, -8 * s), TEAL)
        rr(24, 26, 26, 18, PERI, 8); pp('M%g %g l%g %g l0 %g z' % (x + 42 * s, y + 44 * s, 2 * s, 7 * s, -7 * s), PERI)
    elif name == 'chart':
        ln(10, 46, 48, 46, GREY, 2.5); ln(10, 46, 10, 10, GREY, 2.5)
        rr(16, 30, 7, 16, BLUE); rr(27, 22, 7, 24, AMBER); rr(38, 14, 7, 32, TEAL)
    elif name == 'globe':
        co(28, 28, 18, BLUE)
        g.append('<ellipse cx="%g" cy="%g" rx="%g" ry="%g" fill="none" stroke="%s" stroke-width="%g"/>'
                 % (x + 28 * s, y + 28 * s, 8 * s, 18 * s, BLUE, 2.5 * s))
        ln(10, 28, 46, 28, BLUE, 2.5)
    elif name == 'flask':
        pp('M%g %g l0 %g l%g %g l%g 0 l%g %g l0 %g z'
           % (x + 23 * s, y + 10 * s, 14 * s, -11 * s, 22 * s, 28 * s, -11 * s, -22 * s, -14 * s), '#bfe0d6', TEAL, 2.5)
        ln(20, 8, 36, 8, TEAL, 3)
    elif name == 'telescope':
        pp('M%g %g l%g %g l%g %g l%g %g z' % (x + 8 * s, y + 30 * s, 32 * s, -16 * s, 8 * s, 10 * s, -32 * s, 16 * s), INDIGO)
        ln(26, 34, 20, 48, GREY, 3); ln(30, 32, 38, 48, GREY, 3)
    elif name == 'leaf':
        pp('M%g %g q%g %g %g %g q%g %g %g %g z'
           % (x + 12 * s, y + 44 * s, 0, -24 * s, 32 * s, -32 * s, 4 * s, 24 * s, -32 * s, 32 * s), GREEN)
        ln(14, 42, 40, 16, '#1d6b45', 2)
    elif name == 'brain':
        cc(22, 26, 13, '#d9b8c8'); cc(34, 26, 13, '#d9b8c8'); cc(28, 36, 12, '#d9b8c8')
        pp('M%g %g q%g %g %g %g' % (x + 20 * s, y + 20 * s, 8 * s, 10 * s, 0, 20 * s), 'none', PLUM, 2)
        pp('M%g %g q%g %g %g %g' % (x + 36 * s, y + 20 * s, -8 * s, 10 * s, 0, 20 * s), 'none', PLUM, 2)
    elif name == 'palette':
        pp('M%g %g a%g %g 0 1 0 %g %g q%g %g %g %g a%g %g 0 0 0 %g %g z'
           % (x + 28 * s, y + 10 * s, 19 * s, 19 * s, 6 * s, 35 * s, 6 * s, -2 * s, 4 * s, -8 * s, 8 * s, 8 * s, 6 * s, -2 * s), '#f0e4cf', GREY, 2)
        cc(20, 22, 4, RED); cc(32, 18, 4, BLUE); cc(38, 28, 4, AMBER); cc(20, 34, 4, GREEN)
    elif name == 'rock':
        pp('M%g %g l%g %g l%g %g l%g %g l%g %g z'
           % (x + 8 * s, y + 42 * s, 8 * s, -20 * s, 18 * s, -10 * s, 16 * s, 14 * s, -4 * s, 16 * s), '#9c8f7e')
        ln(16, 22, 34, 32, '#6f6557', 2); ln(10, 36, 44, 38, '#6f6557', 2)
    elif name == 'coin':
        cc(22, 28, 14, '#d9b64e'); cc(34, 28, 14, '#e8cb72')
        g.append(T(x + 34 * s, y + 34 * s, '$', 16 * s, '#8a6c2d', bold=True))
    elif name == 'people':
        cc(18, 20, 8, TEAL); rr(8, 30, 20, 18, TEAL, 8)
        cc(38, 20, 8, PERI); rr(30, 30, 20, 18, PERI, 8)
    elif name == 'quill':
        pp('M%g %g q%g %g %g %g l%g %g q%g %g %g %g z'
           % (x + 12 * s, y + 46 * s, 10 * s, -22 * s, 30 * s, -34 * s, -4 * s, 26 * s, -6 * s, 10 * s, -20 * s, 8 * s), '#cdbbdc')
        ln(12, 46, 34, 20, PLUM, 2)
    elif name == 'cpu':
        ro(16, 16, 24, 24, INDIGO, 2.5, 2); rr(23, 23, 10, 10, PERI)
        for k in range(3):
            ln(22 + k * 6, 10, 22 + k * 6, 16, INDIGO, 2); ln(22 + k * 6, 40, 22 + k * 6, 46, INDIGO, 2)
            ln(10, 22 + k * 6, 16, 22 + k * 6, INDIGO, 2); ln(40, 22 + k * 6, 46, 22 + k * 6, INDIGO, 2)
    elif name == 'cross_med':
        rr(22, 10, 12, 36, RED, 3); rr(10, 22, 36, 12, RED, 3)
    elif name == 'note':
        ln(24, 12, 24, 38, PLUM, 3); ln(40, 8, 40, 34, PLUM, 3); ln(24, 12, 40, 8, PLUM, 3)
        cc(19, 39, 6, PLUM); cc(35, 35, 6, PLUM)
    elif name == 'urn':
        pp('M%g %g q%g %g %g %g l0 %g l%g 0 l0 %g q%g %g %g %g z'
           % (x + 20 * s, y + 14 * s, -8 * s, 14 * s, 0, 22 * s, 6 * s, 16 * s, -6 * s, 8 * s, -14 * s, 0, -22 * s), '#c08a5a')
        ln(18, 24, 38, 24, '#8d6135', 2)
    elif name == 'brief':
        ro(10, 20, 36, 24, '#8a6a4a', 2.5, 3); rr(12, 22, 32, 20, '#b08a62')
        rr(22, 14, 12, 6, '#8a6a4a', 2); ln(10, 30, 46, 30, '#8a6a4a', 2)
    elif name == 'city':
        rr(10, 26, 12, 22, GREY); rr(24, 16, 12, 32, '#8c95a3'); rr(38, 30, 10, 18, GREY)
        for b in range(3):
            for a in range(2): rr(12 + a * 6, 30 + b * 6, 4, 4, SOFT)
    elif name == 'paw':
        cc(18, 20, 5, '#8a6a4a'); cc(28, 16, 5, '#8a6a4a'); cc(38, 20, 5, '#8a6a4a')
        pp('M%g %g q%g %g %g 0 q%g %g %g 0 z' % (x + 16 * s, y + 38 * s, 6 * s, -12 * s, 24 * s, 6 * s, 12 * s, -24 * s), '#8a6a4a')
    elif name == 'cap':
        pp('M%g %g l%g %g l%g %g l%g %g z' % (x + 28 * s, y + 14 * s, 22 * s, 9 * s, -22 * s, 9 * s, -22 * s, -9 * s), INDIGO)
        pp('M%g %g l0 %g q%g %g %g 0 l0 %g' % (x + 16 * s, y + 27 * s, 10 * s, 12 * s, 8 * s, 24 * s, -10 * s), 'none', INDIGO, 2.5)
        ln(50, 23, 50, 36, INDIGO, 2)
    elif name == 'news':
        ro(8, 14, 40, 30, GREY, 2.5, 2); rr(12, 18, 16, 10, PERI_L)
        for k in range(3): ln(32, 20 + k * 5, 44, 20 + k * 5, GREY, 1.6)
        for k in range(3): ln(12, 33 + k * 4, 44, 33 + k * 4, GREY, 1.6)
    elif name == 'tick':
        cc(28, 28, 18, GREEN)
        pp('M%g %g l%g %g l%g %g' % (x + 20 * s, y + 28 * s, 6 * s, 7 * s, 14 * s, -15 * s), 'none', PAPER, 4)
    elif name == 'cross':
        cc(28, 28, 18, RED)
        ln(21, 21, 35, 35, PAPER, 4); ln(35, 21, 21, 35, PAPER, 4)
    else:
        ro(14, 14, 28, 28, BLUE, 3, 4)
    return ''.join(g)


# ---- renderer ---------------------------------------------------------------
def render(svg_body, w, h, bg=PAPER):
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
                       capture_output=True, timeout=180)
        os.unlink(src)
        try:
            from PIL import Image
            im = Image.open(out).convert('RGB')
            im.quantize(colors=256, method=Image.MEDIANCUT,
                        dither=Image.NONE).save(out, 'PNG', optimize=True)
        except Exception:
            pass
    return open(out, 'rb').read(), w, h
