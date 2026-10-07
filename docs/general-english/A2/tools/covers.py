#!/usr/bin/env python3
"""Front and back covers, A4 at 300 DPI, in the locked palette.

No invented publisher, no ISBN, no barcode, no endorsement: checks I05 and I06
reject all four, and the back cover's claims are diffed against the real book
by I07 and I08.
"""
from __future__ import annotations
import json, math, os, sys, textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import figures as F  # noqa: E402

CW, CH = 2480, 3508          # A4 at 300 DPI
MARGIN = round(10 / 25.4 * 300)   # the 10 mm no-text zone (check I12)
P = F.P


class Cover(F.Fig):
    def __init__(self, alt):
        super().__init__(CH, alt)
        self.w = CW

    def svg(self):
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{CW}" height="{CH}" '
                f'viewBox="0 0 {CW} {CH}">'
                f'<rect width="{CW}" height="{CH}" fill="{P["bg"]}"/>'
                + ''.join(self.parts) + '</svg>')


def _text(c, s, cx, baseline, size, fill=P['ink'], anchor='middle', on=P['bg'], bold=True):
    return c.text(s, cx, baseline, size=size, fill=fill, anchor=anchor, on=on, bold=bold)


def _wrap(c, body, x, y, size, width_px, fill=P['ink'], bold=False, lead=1.42):
    cpl = max(10, int(width_px / (size * 0.52)))
    yy = y
    for line in textwrap.wrap(body, cpl):
        _text(c, line, x, yy, size, fill=fill, anchor='start', bold=bold)
        yy += size * lead
    return yy


def front(volume, title, units, theme, n_units_label='Ten units'):
    c = Cover(f'Front cover of English for Daily Life A2 volume {volume}, {title}. '
              f'A band of flat illustrations in blue and tan over a pale panel, with '
              f'the series name, the volume title and the level.')
    # a full-bleed pale panel with a deep band, in the idiom of the interior figures
    c.rect(0, 0, CW, 1180, fill=P['card'], stroke=P['card'], r=0, sw=0)
    c.rect(0, 1180, CW, 26, fill=P['ink'], stroke=P['ink'], r=0, sw=0)

    _text(c, 'ENGLISH FOR DAILY LIFE', CW / 2, 420, 88, fill=P['ink'], on=P['card'])
    _text(c, f'A2 · Volume {volume}', CW / 2, 580, 68, fill=P['deep'], on=P['card'])
    _text(c, title, CW / 2, 900, 158, fill=P['ink'], on=P['card'])

    # the scene: the street the book is set in, at the scale of a cover
    icons = theme['icons']
    n = len(icons)
    band_y = 1830
    cw = (CW - 2 * 190) / n
    for i, ic in enumerate(icons):
        F.icon(c, ic, 190 + cw * (i + 0.5), band_y, s=min(4.6, cw * 0.40 / 56))
    c.line(300, band_y + 420, CW - 300, band_y + 420, stroke=P['rule'], sw=10)

    _text(c, theme['strap'], CW / 2, band_y + 620, 72, fill=P['ink'])
    _text(c, f'{n_units_label} · Core and Plus tracks', CW / 2, band_y + 790, 54,
          fill=P['deep'])
    _text(c, 'Student Book with answer key', CW / 2, band_y + 900, 54, fill=P['deep'])

    c.rect(300, CH - 330, CW - 600, 4, fill=P['rule'], stroke=P['rule'], r=0, sw=0)
    _text(c, 'CEFR A2 · British English', CW / 2, CH - 200, 48, fill=P['ink'], bold=False)
    return c


def back(volume, title, blurb, units, grammar, can_do, theme):
    c = Cover(f'Back cover of English for Daily Life A2 volume {volume}: a blurb, the '
              f'ten unit titles, the ten grammar points and six things the learner '
              f'will be able to do.')
    c.rect(0, 0, CW, 420, fill=P['card'], stroke=P['card'], r=0, sw=0)
    _text(c, 'ENGLISH FOR DAILY LIFE', CW / 2, 200, 62, fill=P['ink'], on=P['card'])
    _text(c, f'A2 · Volume {volume} · {title}', CW / 2, 310, 52, fill=P['deep'], on=P['card'])

    y = _wrap(c, blurb, 220, 580, 46, CW - 440) + 60

    _text(c, 'In this book', 220, y, 54, anchor='start'); y += 80
    for i, (t, g) in enumerate(zip(units, grammar), 1):
        _text(c, f'{i}', 250, y, 40, fill=P['deep'], anchor='middle')
        _text(c, t, 330, y, 42, anchor='start')
        _text(c, g, 1280, y, 38, fill=P['deep'], anchor='start', bold=False)
        y += 72
    y += 50

    _text(c, 'By the end you will be able to', 220, y, 54, anchor='start'); y += 80
    for line in can_do:
        _text(c, '·', 250, y, 42, fill=P['accent'], anchor='middle')
        _text(c, line, 320, y, 40, anchor='start', bold=False)
        y += 66

    _text(c, 'CEFR A2 · Student Book with answer key · British English',
          CW / 2, CH - 220, 40, fill=P['ink'], bold=False)
    return c


def emit(c: Cover, book: str, side: str, meta_extra: dict):
    import cairosvg, hashlib
    out = os.path.join(ROOT, 'covers')
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, f'{book}-{side}')
    svg = c.svg()
    open(base + '.svg', 'w', encoding='utf-8').write(svg)
    cairosvg.svg2png(bytestring=svg.encode(), write_to=base + '.png',
                     output_width=CW, output_height=CH, background_color='#FFFFFF')
    meta = {'canvas': [CW, CH], 'texts': c.texts, 'alt': c.alt,
            'sha256': hashlib.sha256(open(base + '.png', 'rb').read()).hexdigest()}
    meta.update(meta_extra)
    json.dump(meta, open(base + '.json', 'w'), indent=1)
    return base
