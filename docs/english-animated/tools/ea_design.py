"""English Animated — the visual design system.

One palette, one type scale, one set of primitives, shared by every figure
generator so that 600 figures across 14 books read as one system.

Layer names follow 07-visual-system.md §6.2:
    00_ground 10_context 20_subject 30_detail 40_callouts 50_annotation 60_overlay
"""

# ── palette ────────────────────────────────────────────────────────────────
# Every distinction carried by colour is carried redundantly by shape,
# position or label (07 §5), so the set stays legible in greyscale.
PAPER      = '#FBF7F0'
PAPER_DEEP = '#F3ECE0'
INK        = '#1C2B33'
INK_SOFT   = '#55646D'
PRIMARY    = '#1F4E5F'   # deep teal  — the subject
ACCENT     = '#C86B2B'   # burnt orange — the thing to notice
GREEN      = '#2E6F5E'   # confirmed / correct
RED        = '#A8372E'   # wrong / lost
GOLD       = '#D9A441'   # highlight band
MUTED      = '#9AA7AE'
RULE       = '#D8CFC2'
WHITE      = '#FFFFFF'
SHADE      = ['#1F4E5F', '#C86B2B', '#2E6F5E', '#8C6A9E', '#A8372E', '#D9A441']

FONT  = 'Inter, DejaVu Sans, sans-serif'
MONO  = 'DejaVu Sans Mono, monospace'

# type scale, in px at the figure's own coordinate scale
T_TITLE   = 30
T_HEAD    = 22
T_BODY    = 17
T_LABEL   = 15
T_CALLOUT = 14
T_MICRO   = 12


def esc(t):
    return (str(t).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            .replace('"', '&quot;'))


def text(x, y, s, size=T_BODY, fill=INK, anchor='start', weight='400',
         family=FONT, style='normal', opacity=1.0, spacing=0):
    ls = f' letter-spacing="{spacing}"' if spacing else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return (f'<text x="{x}" y="{y}" font-family="{family}" font-size="{size}" '
            f'fill="{fill}" text-anchor="{anchor}" font-weight="{weight}" '
            f'font-style="{style}"{ls}{op}>{esc(s)}</text>')


def wrap(x, y, s, size=T_BODY, width=40, lh=1.45, **kw):
    """Crude but reliable word wrap at `width` characters."""
    words, lines, cur = str(s).split(), [], ''
    for w in words:
        if len(cur) + len(w) + 1 <= width:
            cur = (cur + ' ' + w).strip()
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    out = []
    for i, ln in enumerate(lines):
        out.append(text(x, y + i * size * lh, ln, size=size, **kw))
    return '\n'.join(out), len(lines) * size * lh


def rect(x, y, w, h, fill=WHITE, stroke=None, sw=1.5, rx=0, opacity=1.0, dash=None):
    st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
    da = f' stroke-dasharray="{dash}"' if dash else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{st}{da}{op}/>'


def line(x1, y1, x2, y2, stroke=INK, sw=1.5, dash=None, cap='round', opacity=1.0):
    da = f' stroke-dasharray="{dash}"' if dash else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return (f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{stroke}" '
            f'stroke-width="{sw}" stroke-linecap="{cap}"{da}{op}/>')


def circle(cx, cy, r, fill=WHITE, stroke=None, sw=1.5, opacity=1.0):
    st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"{st}{op}/>'


def path(d, fill='none', stroke=INK, sw=1.5, dash=None, cap='round', join='round', opacity=1.0):
    da = f' stroke-dasharray="{dash}"' if dash else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return (f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" '
            f'stroke-linecap="{cap}" stroke-linejoin="{join}"{da}{op}/>')


def poly(pts, fill=WHITE, stroke=None, sw=1.5, opacity=1.0):
    p = ' '.join(f'{a},{b}' for a, b in pts)
    st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
    op = f' opacity="{opacity}"' if opacity != 1.0 else ''
    return f'<polygon points="{p}" fill="{fill}"{st}{op}/>'


def group(layer, body):
    return f'<g id="{layer}">\n{body}\n</g>'


def leader(x1, y1, x2, y2, colour=ACCENT):
    """Callout leader: a dot at the subject, an elbow, a line to the label."""
    mx = x2
    return (f'{circle(x1, y1, 4.5, fill=colour)}\n'
            f'{path(f"M {x1} {y1} L {mx} {y1} L {x2} {y2}", stroke=colour, sw=1.6)}')


def callout(x, y, s, side='right', colour=ACCENT, size=T_CALLOUT, width=26):
    """Short label, ≤8 words by house rule (07 §5)."""
    anchor = 'start' if side == 'right' else 'end'
    body, h = wrap(x, y, s, size=size, width=width, fill=INK, anchor=anchor, weight='500')
    return body


# ── person primitive ───────────────────────────────────────────────────────
# A simple, consistent, non-caricatured figure. Proportions are ~7 heads so
# people read as adults rather than as avatars, and posture is settable
# because posture is what the Dialogue Stage figures are for.
SKINS = ['#E8C39E', '#C98E63', '#8D5A3B', '#6B4229', '#F0D3B4', '#A9714B']
CLOTH = ['#1F4E5F', '#C86B2B', '#2E6F5E', '#8C6A9E', '#4A5A66', '#A8372E', '#D9A441']


def person(x, y, h=170, skin=0, cloth=0, lean=0, arm='down', hair='short',
           facing='front', label=None, role=None):
    """x,y = ground point at the feet. h = total height."""
    s = h / 170.0
    sk, cl = SKINS[skin % len(SKINS)], CLOTH[cloth % len(CLOTH)]
    head_r = 15 * s
    head_cy = y - h + head_r + 2 * s
    neck_y = head_cy + head_r
    hip_y = y - h * 0.46
    sh_y = neck_y + 8 * s
    lean_x = lean * s
    o = []
    # legs
    o.append(path(f'M {x - 9*s} {y} L {x - 7*s} {hip_y}', stroke='#3A4A55', sw=10 * s, cap='round'))
    o.append(path(f'M {x + 9*s} {y} L {x + 7*s} {hip_y}', stroke='#3A4A55', sw=10 * s, cap='round'))
    # torso — narrower than the shoulder span so the arms read clear of it
    o.append(path(f'M {x + lean_x} {sh_y} L {x} {hip_y + 4*s}',
                  stroke=cl, sw=24 * s, cap='round'))
    sh_w = 19 * s
    o.append(path(f'M {x - sh_w + lean_x} {sh_y + 1*s} L {x + sh_w + lean_x} {sh_y + 1*s}',
                  stroke=cl, sw=13 * s, cap='round'))
    # arms — drawn after the torso, hands in skin tone
    def arm_path(d, hand=None):
        o.append(path(d, stroke=cl, sw=9 * s, cap='round'))
        if hand:
            o.append(circle(hand[0], hand[1], 5 * s, fill=sk))
    if arm == 'down':
        arm_path(f'M {x - sh_w + lean_x} {sh_y + 3*s} L {x - sh_w - 3*s} {hip_y + 10*s}',
                 (x - sh_w - 3 * s, hip_y + 13 * s))
        arm_path(f'M {x + sh_w + lean_x} {sh_y + 3*s} L {x + sh_w + 3*s} {hip_y + 10*s}',
                 (x + sh_w + 3 * s, hip_y + 13 * s))
    elif arm == 'point':
        arm_path(f'M {x - sh_w + lean_x} {sh_y + 3*s} L {x - sh_w - 3*s} {hip_y + 10*s}',
                 (x - sh_w - 3 * s, hip_y + 13 * s))
        arm_path(f'M {x + sh_w + lean_x} {sh_y + 3*s} L {x + sh_w + 26*s} {sh_y - 2*s}',
                 (x + sh_w + 30 * s, sh_y - 3 * s))
    elif arm == 'hold':
        arm_path(f'M {x - sh_w + lean_x} {sh_y + 3*s} L {x - 11*s} {hip_y - 4*s}')
        arm_path(f'M {x + sh_w + lean_x} {sh_y + 3*s} L {x + 11*s} {hip_y - 4*s}')
        o.append(circle(x, hip_y - 4 * s, 5.5 * s, fill=sk))
    elif arm == 'folded':
        arm_path(f'M {x - sh_w + lean_x} {sh_y + 4*s} L {x + 13*s} {sh_y + 22*s}',
                 (x + 15 * s, sh_y + 23 * s))
        arm_path(f'M {x + sh_w + lean_x} {sh_y + 4*s} L {x - 13*s} {sh_y + 26*s}',
                 (x - 15 * s, sh_y + 27 * s))
    elif arm == 'raise':
        arm_path(f'M {x - sh_w + lean_x} {sh_y + 3*s} L {x - sh_w - 3*s} {hip_y + 10*s}',
                 (x - sh_w - 3 * s, hip_y + 13 * s))
        arm_path(f'M {x + sh_w + lean_x} {sh_y + 3*s} L {x + sh_w + 8*s} {sh_y - 30*s}',
                 (x + sh_w + 9 * s, sh_y - 34 * s))
    # neck + head
    o.append(path(f'M {x + lean_x} {neck_y + 3*s} L {x + lean_x} {neck_y - 2*s}', stroke=sk, sw=10 * s))
    o.append(circle(x + lean_x, head_cy, head_r, fill=sk))
    # hair
    if hair == 'short':
        o.append(path(f'M {x - head_r + lean_x} {head_cy - 2*s} A {head_r} {head_r} 0 0 1 '
                      f'{x + head_r + lean_x} {head_cy - 2*s}', stroke='#2A2320', sw=7 * s, fill='none'))
    elif hair == 'long':
        o.append(path(f'M {x - head_r + lean_x} {head_cy - 2*s} A {head_r} {head_r} 0 0 1 '
                      f'{x + head_r + lean_x} {head_cy - 2*s}', stroke='#2A2320', sw=7 * s, fill='none'))
        o.append(path(f'M {x - head_r - 1*s + lean_x} {head_cy} L {x - head_r - 1*s + lean_x} {head_cy + 20*s}',
                      stroke='#2A2320', sw=7 * s))
        o.append(path(f'M {x + head_r + 1*s + lean_x} {head_cy} L {x + head_r + 1*s + lean_x} {head_cy + 20*s}',
                      stroke='#2A2320', sw=7 * s))
    elif hair == 'wrap':
        o.append(path(f'M {x - head_r - 2*s + lean_x} {head_cy + 4*s} A {head_r + 2} {head_r + 2} 0 0 1 '
                      f'{x + head_r + 2*s + lean_x} {head_cy + 4*s} L {x + head_r + 2*s + lean_x} {head_cy + 16*s} '
                      f'L {x - head_r - 2*s + lean_x} {head_cy + 16*s} Z', fill='#6B7F8C', stroke='none'))
    elif hair == 'grey':
        o.append(path(f'M {x - head_r + lean_x} {head_cy - 2*s} A {head_r} {head_r} 0 0 1 '
                      f'{x + head_r + lean_x} {head_cy - 2*s}', stroke='#B9B2AA', sw=7 * s, fill='none'))
    elif hair == 'cap':
        # a working cap: crown over the top of the head, peak to the facing side
        o.append(path(f'M {x - head_r - 1*s + lean_x} {head_cy - 1*s} A {head_r + 1} {head_r + 1} 0 0 1 '
                      f'{x + head_r + 1*s + lean_x} {head_cy - 1*s} Z', fill='#30555F', stroke='none'))
        peak = 1 if facing != 'left' else -1
        o.append(path(f'M {x + lean_x} {head_cy - 1*s} L {x + peak * (head_r + 11*s) + lean_x} '
                      f'{head_cy - 2*s} L {x + peak * (head_r + 9*s) + lean_x} {head_cy + 2*s} '
                      f'L {x + lean_x} {head_cy + 2*s} Z', fill='#26454E', stroke='none'))
    elif hair == 'bun':
        o.append(path(f'M {x - head_r + lean_x} {head_cy - 2*s} A {head_r} {head_r} 0 0 1 '
                      f'{x + head_r + lean_x} {head_cy - 2*s}', stroke='#2A2320', sw=7 * s, fill='none'))
        o.append(circle(x - (head_r + 5*s) * (1 if facing == 'left' else -1) + lean_x,
                        head_cy - 3*s, 7 * s, fill='#2A2320', stroke='none'))
    # face: two eyes, a mouth line. Facing changes eye offset only.
    ex = {'front': 0, 'left': -3 * s, 'right': 3 * s}[facing]
    o.append(circle(x + lean_x + ex - 5 * s, head_cy + 1 * s, 1.8 * s, fill='#2A2320'))
    o.append(circle(x + lean_x + ex + 5 * s, head_cy + 1 * s, 1.8 * s, fill='#2A2320'))
    o.append(path(f'M {x + lean_x + ex - 4*s} {head_cy + 8*s} Q {x + lean_x + ex} {head_cy + 10*s} '
                  f'{x + lean_x + ex + 4*s} {head_cy + 8*s}', stroke='#8A5A48', sw=1.6 * s))
    # ground shadow
    o.insert(0, f'<ellipse cx="{x}" cy="{y + 3*s}" rx="{22*s}" ry="{5*s}" fill="{INK}" opacity="0.10"/>')
    if label:
        o.append(text(x, y + 26 * s, label, size=T_LABEL, anchor='middle', weight='600', fill=PRIMARY))
    if role:
        o.append(text(x, y + 44 * s, role, size=T_MICRO, anchor='middle', fill=INK_SOFT))
    return '\n'.join(o)


def balloon(x, y, w, lines, tail_to=None, kind='speech', size=T_CALLOUT):
    """Speech (solid outline) or thought (dashed, with bubbles) balloon."""
    lh = size * 1.4
    h = len(lines) * lh + 20
    stroke = PRIMARY if kind == 'speech' else INK_SOFT
    dash = None if kind == 'speech' else '5 4'
    o = [rect(x, y, w, h, fill=WHITE, stroke=stroke, sw=1.8, rx=10, dash=dash)]
    if tail_to:
        tx, ty = tail_to
        if kind == 'speech':
            o.append(poly([(x + w * 0.22, y + h), (x + w * 0.38, y + h), (tx, ty)],
                          fill=WHITE, stroke=stroke, sw=1.8))
            o.append(line(x + w * 0.22 + 2, y + h, x + w * 0.38 - 2, y + h, stroke=WHITE, sw=3))
        else:
            o.append(circle((x + w * 0.3 + tx) / 2, (y + h + ty) / 2 - 6, 6,
                            fill=WHITE, stroke=stroke, sw=1.5))
            o.append(circle(tx, ty, 3.5, fill=WHITE, stroke=stroke, sw=1.4))
    for i, ln in enumerate(lines):
        o.append(text(x + w / 2, y + 22 + i * lh, ln, size=size, anchor='middle', fill=INK))
    return '\n'.join(o), h


def svg(width, height, layers, bg=PAPER, title='', desc=''):
    head = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
            f'viewBox="0 0 {width} {height}">\n')
    if title:
        head += f'<title>{esc(title)}</title>\n'
    if desc:
        head += f'<desc>{esc(desc)}</desc>\n'
    head += group('00_ground', rect(0, 0, width, height, fill=bg)) + '\n'
    return head + '\n'.join(layers) + '\n</svg>\n'


def figure_title(w, s, sub=None):
    o = [text(w / 2, 46, s, size=T_TITLE, anchor='middle', weight='700', fill=PRIMARY)]
    if sub:
        o.append(text(w / 2, 72, sub, size=T_LABEL, anchor='middle', fill=INK_SOFT))
    return '\n'.join(o)
