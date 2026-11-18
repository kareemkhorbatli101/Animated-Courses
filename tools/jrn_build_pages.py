#!/usr/bin/env python3
"""Emit the screen pages, the unit hub and the course index for
journalists-intl/b1, from the unit's own index.json and meta.js.

Nothing here invents content: titles, labels and card counts are read from the
data the screens themselves declare, so a page cannot disagree with its screen.
"""
import json, re, sys, os, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOK = os.path.join(ROOT, 'journalists-intl', 'b1')

FAVICON = (
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'"
    "%3E%3Crect width='48' height='48' rx='9' fill='%232b3440'/%3E"
    "%3Crect x='9' y='10' width='30' height='28' rx='2' fill='%23f7f4ec'/%3E"
    "%3Crect x='12' y='13' width='24' height='5' fill='%239e2b25'/%3E"
    "%3Crect x='12' y='21' width='11' height='14' fill='%23c6cdd3'/%3E"
    "%3Crect x='25' y='21' width='11' height='2' fill='%23c6cdd3'/%3E"
    "%3Crect x='25' y='25' width='11' height='2' fill='%23c6cdd3'/%3E"
    "%3Crect x='25' y='29' width='11' height='2' fill='%23c6cdd3'/%3E"
    "%3Crect x='25' y='33' width='8' height='2' fill='%23c6cdd3'/%3E%3C/svg%3E")


def read_meta(unit):
    """Pull the fields the pages need out of meta.js without running it."""
    src = open(os.path.join(BOOK, 'assets', 'data', unit, 'meta.js'),
               encoding='utf-8').read()

    def js_str(key):
        m = re.search(key + r":\s*((?:'(?:[^'\\]|\\.)*'\s*\+?\s*)+)", src)
        if not m:
            return ''
        parts = re.findall(r"'((?:[^'\\]|\\.)*)'", m.group(1))
        return decode(''.join(parts))

    def js_list(key):
        m = re.search(key + r":\s*\[", src)
        if not m:
            return []
        i = m.end() - 1
        depth, j = 0, i
        while j < len(src):
            if src[j] == '[':
                depth += 1
            elif src[j] == ']':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        body = src[i + 1:j]
        out, buf, k = [], [], 0
        # split on commas that sit at bracket depth 0 and outside strings
        instr = False
        while k < len(body):
            ch = body[k]
            if instr:
                if ch == '\\':
                    buf.append(body[k:k + 2]); k += 2; continue
                if ch == "'":
                    instr = False
                buf.append(ch)
            else:
                if ch == "'":
                    instr = True; buf.append(ch)
                elif ch == ',':
                    out.append(''.join(buf)); buf = []
                else:
                    buf.append(ch)
            k += 1
        out.append(''.join(buf))
        res = []
        for chunk in out:
            parts = re.findall(r"'((?:[^'\\]|\\.)*)'", chunk)
            if parts:
                res.append(decode(''.join(parts)))
        return res

    return {
        'title': js_str('title'),
        'subtitle': js_str('subtitle'),
        'cefr': js_str('cefr'),
        'grammar': js_str('grammar'),
        'blurb': js_str('blurb'),
        'operator': js_list('canDoOperator'),
        'practitioner': js_list('canDoPractitioner'),
    }


def decode(s):
    """Turn the \\uXXXX and \\' escapes of a JS literal into real characters."""
    return re.sub(r'\\u([0-9a-fA-F]{4})', lambda m: chr(int(m.group(1), 16)),
                  s).replace("\\'", "'").replace('\\\\', '\\')


def esc(s):
    return html.escape(s, quote=True)


SCREEN = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} &middot; English for International Journalists B1</title>
<meta name="description" content="{desc}">
<link rel="stylesheet" href="../assets/css/app.css">
<link rel="stylesheet" href="../assets/css/jrn.css">
<link rel="icon" href="{fav}">
<script>window.JRN_BASE='../';</script>
<script src="../assets/js/art.js"></script>
<script src="../assets/js/art-journalism.js"></script>
<script src="../assets/js/core.js"></script>
<script src="../assets/js/components.js"></script>
<script src="../assets/js/scene.js"></script>
<script src="../assets/js/tutor.js"></script>
<script src="../assets/data/{unit}/meta.js"></script>
<script src="../assets/data/{unit}/glossary.js"></script>
<script src="../assets/data/{unit}/map.js"></script>
<script src="../assets/data/{unit}/{sid}.js"></script>
</head>
<body>
<noscript><p style="padding:40px;font:600 16px system-ui">This course needs JavaScript.
Please enable it and reload.</p></noscript>
<script>JRN.render('{pid}');</script>
</body>
</html>
"""


def build_unit(unit, n):
    d = os.path.join(BOOK, 'assets', 'data', unit)
    idx = json.load(open(os.path.join(d, 'index.json'), encoding='utf-8'))
    meta = read_meta(unit)
    outdir = os.path.join(BOOK, unit)
    os.makedirs(outdir, exist_ok=True)
    desc = meta['blurb'][:155]

    for row in idx:
        pid = 'u%d-s%02d' % (n, row['ord'])
        open(os.path.join(outdir, row['sid'] + '.html'), 'w',
             encoding='utf-8').write(SCREEN.format(
                 title=esc(row['title']), desc=esc(desc), fav=FAVICON,
                 unit=unit, sid=row['sid'], pid=pid))

    cards = sum(r['n'] for r in idx)

    def grid(rows):
        out = []
        for r in rows:
            plural = 'card' if r['n'] == 1 else 'cards'
            out.append(
                '<a class="hub-card" href="%s.html"><div class="hub-n">&sect;%d</div>'
                '<p class="hub-t">%s</p><p class="hub-c">%d %s &middot; %s</p></a>'
                % (r['sid'], r['ord'], esc(r['title']), r['n'], plural,
                   esc(r['label'])))
        return '<div class="hub-grid">' + ''.join(out) + '</div>'

    op = [r for r in idx if r['track'] in ('warmup', 'operator', 'review')]
    pr = [r for r in idx if r['track'] == 'practitioner']
    it = [r for r in idx if r['track'] == 'intl']

    def cando(items):
        return '<ul class="hub-cando">' + ''.join(
            '<li>%s</li>' % esc(x) for x in items) + '</ul>'

    hub = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Unit {n} &middot; {title}</title>
<meta name="description" content="{desc}">
<link rel="stylesheet" href="../assets/css/app.css">
<link rel="stylesheet" href="../assets/css/jrn.css">
<link rel="icon" href="{fav}">
</head>
<body>
<div class="hub-wrap">
<a class="hub-back" href="../index.html">&larr; All ten units</a>
<h1 class="hub-head">Unit {n} &middot; {title}</h1>
<p class="hub-sub">{blurb}</p>
<div class="hub-meta"><span class="hub-chip">{cefr}</span><span class="hub-chip">{nscreens} screens</span><span class="hub-chip">{cards} cards</span><span class="hub-chip">{nop} Operator &middot; {npr} Practitioner</span></div>

<h2 class="hub-head" style="font-size:19px;margin-top:26px">Operator track</h2>
<p class="hub-sub">For reporters in their first months. Start here.</p>
{opgrid}

<h2 class="hub-head" style="font-size:19px;margin-top:26px">Practitioner track</h2>
<p class="hub-sub">For reporters and editors with a few years' experience. Both tracks use
B1 English &mdash; the Practitioner parts add harder decisions and editorial judgement,
not harder language.</p>
{prgrid}

<h2 class="hub-head" style="font-size:19px;margin-top:26px">International edition</h2>
<p class="hub-sub">Where the national edition stood on its own ground, this one stands on
yours: read how English reaches three newsrooms, then describe and compare your own.</p>
{itgrid}

<h2 class="hub-head" style="font-size:19px;margin-top:26px">What you can do at the end of this unit</h2>
<p class="hub-sub">Operator track</p>
{opcando}
<p class="hub-sub">Practitioner track</p>
{prcando}
</div>
</body>
</html>
""".format(n=n, title=esc(meta['title']), desc=esc(desc), fav=FAVICON,
           blurb=esc(meta['blurb']), cefr=esc(meta['cefr']),
           nscreens=len(idx), cards=cards, nop=len(op), npr=len(pr),
           opgrid=grid(op), prgrid=grid(pr), itgrid=grid(it),
           opcando=cando(meta['operator']), prcando=cando(meta['practitioner']))
    open(os.path.join(outdir, 'index.html'), 'w', encoding='utf-8').write(hub)
    return len(idx), cards, meta


if __name__ == '__main__':
    total_screens = total_cards = 0
    built = []
    for n in range(1, 11):
        unit = 'unit%d' % n
        if not os.path.isdir(os.path.join(BOOK, 'assets', 'data', unit)):
            continue
        s, c, meta = build_unit(unit, n)
        built.append((n, unit, meta, s, c))
        total_screens += s
        total_cards += c
    print('built units:', [b[0] for b in built],
          '| screens:', total_screens, '| cards:', total_cards)
    json.dump({'units': [{'n': b[0], 'unit': b[1], 'title': b[2]['title'],
                          'grammar': b[2]['grammar'], 'blurb': b[2]['blurb'],
                          'screens': b[3], 'cards': b[4]} for b in built],
               'screens': total_screens, 'cards': total_cards},
              open(os.path.join(BOOK, 'assets', 'data', 'built.json'), 'w'),
              ensure_ascii=False, indent=1)
