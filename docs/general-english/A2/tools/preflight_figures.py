#!/usr/bin/env python3
"""Everything the check suite would say about a unit's figures, without
rendering a single PNG or building a DOCX.

The render-build-check loop is minutes; this is seconds, and it catches the
four things that actually go wrong when a unit is taken to 41 figures:

  * a drawn word the unit does not use            (would be G18)
  * a caption carrying a counted device phrase    (would be B02 and friends)
  * a label too small, overlapping, or off canvas (would be G13, G14, G16)
  * a figure taller than the box can print wide   (nothing checks this, and it
    is why two of Unit 16's figures printed 4.79 in wide instead of 6.26)

    python3 tools/preflight_figures.py a21 2
"""
from __future__ import annotations
import importlib.util, math, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import runner as R      # noqa: E402
import figures as F     # noqa: E402
import lexis as L       # noqa: E402
import model as M       # noqa: E402

# A canvas taller than this prints narrower than the text width, because the
# fit box solves for whichever side binds first: 1440 * box_h / box_w.
def _tall_limit(ctx):
    b = ctx.spec['figures']['box_default']
    return F.W * b['h'] / b['w']


def _lum(c):
    def g(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    return .2126 * g(c[0]) + .7152 * g(c[1]) + .0722 * g(c[2])


def _ratio(a, b):
    la, lb = _lum(a), _lum(b)
    return (max(la, lb) + .05) / (min(la, lb) + .05)


def _hx(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def _overlap(a, b):
    return not (a[2] <= b[0] or b[2] <= a[0] or a[3] <= b[1] or b[3] <= a[1])


def load_module(book, num):
    path = os.path.join(ROOT, 'content', book, f'u{num:02d}_figures.py')
    spec = importlib.util.spec_from_file_location(f'u{num}_figures', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def check(book='a21', num=1, verbose=False):
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]
    body = u.text.lower().replace('’', "'")
    fg = ctx.spec['figures']
    dense = num in (fg.get('dense_units') or {}).get(book, [])
    slots = sorted(fg['dense_slots'] if dense else fg['slots'])
    want_parts = {k: v['part'] for k, v
                  in (fg['dense_slots'] if dense else fg['slots']).items()}
    full = set(fg.get('full_page_slots') or [])
    tall = _tall_limit(ctx)
    bad, warn = [], []

    # ---- 1. the figure module
    mod = load_module(book, num)
    got = sorted(mod.FIGURES)
    if got != slots:
        bad.append(f'slots {got} != spec {slots}')
    for slot in sorted(set(got) & set(slots)):
        try:
            f = mod.FIGURES[slot]()
        except Exception as e:
            bad.append(f'{slot}: raised {type(e).__name__}: {e}')
            continue
        if slot not in full:
            f = F.tighten(f)
            if not (320 <= f.h <= 880):
                bad.append(f'{slot}: height {f.h} outside 320-880')
            elif f.h > tall:
                warn.append(f'{slot}: {f.h} px tall, so it prints '
                            f'{F.W * tall / f.h / F.W * 6.2604:.2f} in wide, '
                            f'not the full 6.26 (keep under {tall:.0f})')
            b = f.bounds
            if b[0] < -1 or b[1] < -1 or b[2] > f.w + 1 or b[3] > f.h + 1:
                bad.append(f'{slot}: drawing {b} outside canvas {f.w}x{f.h}')
            top, bot = b[1] / f.h, (f.h - b[3]) / f.h
            if top > 0.08 or bot > 0.08:
                bad.append(f'{slot}: empty band top {top:.0%} bottom {bot:.0%}')
        small = [t['text'][:16] for t in f.texts if t['size'] < 22]
        if small:
            bad.append(f'{slot}: glyph under 22 px {small}')
        lo = [f'{t["text"][:14]!r}' for t in f.texts
              if _ratio(_hx(t['fill']), _hx(t['on'])) < 4.5]
        if lo:
            bad.append(f'{slot}: contrast under 4.5:1 {lo[:4]}')
        ov = [(f.texts[i]['text'][:12], f.texts[j]['text'][:12])
              for i in range(len(f.texts)) for j in range(i + 1, len(f.texts))
              if _overlap(f.texts[i]['bbox'], f.texts[j]['bbox'])]
        if ov:
            bad.append(f'{slot}: label boxes overlap {ov[:3]}')
        if len(f.alt.split()) < 6:
            bad.append(f'{slot}: alt text is {len(f.alt.split())} words, want 6+')
        off = sorted({w for t in f.texts for w in L.tokens(t['text'])
                      if len(w) > 2 and w.lower() not in body})
        if off:
            bad.append(f'{slot}: drawn but not in the unit text: {off}')
        if verbose:
            print(f'  {slot:3d} {f.w}x{f.h}  texts={len(f.texts)}')

    # ---- 2. icons: figures.icon() now raises on an unknown name, so a typo
    # surfaces as the factory exception caught above rather than as a card
    # with a hole in it that no check can see.

    # ---- 3. the captions in the markdown
    caps = [l for l in u.lines if l.startswith('*Figure')]
    nums = [int(m.group(2)) for l in caps for m in [M.FIGCAP.match(l)] if m]
    if nums != slots:
        bad.append(f'captions {nums} != spec {slots}')
    for pat in (d['pattern'] for d in ctx.spec['devices'].values()):
        for c in caps:
            if re.search(pat, c):
                bad.append(f'caption carries the counted device {pat!r}: {c[:60]}')
    cwkey = 'caption_words_dense' if dense else 'caption_words'
    cw = ctx.spec['unit'].get(cwkey)
    n = sum(len(re.sub(r'[|*>_]', ' ', l).split()) for l in caps)
    if cw and not (cw['min'] <= n <= cw['max']):
        bad.append(f'{n} caption words, want {cw["min"]}-{cw["max"]}')
    # slot -> part, and no figure left dangling
    place = {}
    for p in u.parts:
        for src_lines in [p.leading] + [x.lines for x in p.subs]:
            for i, l in enumerate(src_lines):
                m = M.FIGCAP.match(l)
                if m:
                    place[int(m.group(2))] = p.name
                    after = [x for x in src_lines[i + 1:] if x.strip()]
                    if not after:
                        bad.append(f'{m.group(2)}: last thing in its section')
                    elif M.FIGCAP.match(after[0]):
                        bad.append(f'{m.group(2)}: two figures with no text between')
    for k, v in want_parts.items():
        if v == 'Unit':
            if k in place:
                bad.append(f'{k}: opener should sit above Part 1, found in {place[k]}')
        elif place.get(k) != v:
            bad.append(f'{k}: caption is in {place.get(k)}, spec says {v}')

    tag = 'dense' if dense else '14-slot'
    print(f'{book} u{num:02d} [{tag}] {len(got)} figures, '
          f'{n} caption words: {len(bad)} problem(s), {len(warn)} warning(s)')
    for x in bad:
        print(f'  FAIL {x}')
    for x in warn:
        print(f'  warn {x}')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(check(sys.argv[1] if len(sys.argv) > 1 else 'a21',
                   int(sys.argv[2]) if len(sys.argv) > 2 else 1,
                   '-v' in sys.argv))
