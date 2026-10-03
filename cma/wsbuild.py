# -*- coding: utf-8 -*-
"""Build one Workshop chapter: the student handouts and the answer keys.

A handout is a flat list of blocks with explicit page marks. Keeping it flat
rather than nesting cycles inside pages is what lets a cycle run across a page
boundary — which it usually must, because a model and the questions that
interrogate it are together taller than one page — while the checker can still
read the move names off the list in order and insist on the shape.
"""
import importlib
import os
import sys

import wsdoc
from wsdoc import WDoc, Counter

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)

BOOKLINE = {
    1: 'CMA Part 1 · Book 1 · Financial Reporting',
    2: 'CMA Part 1 · Book 2 · Cost Management',
    3: 'CMA Part 1 · Book 3 · Planning, Budgeting and Performance '
       'Management',
}


# ---------------------------------------------------------------- items
def render_item(d, c, it):
    """One response item. Returns the numbers it consumed."""
    t = it['t']
    if t == 'MCQ':
        n = c.take(it['a'], it.get('why', ''))
        d.q(n, it['q'])
        d.options(it.get('letters', 'ABCD')[:len(it['o'])], it['o'])
        return [n]
    if t == 'TF':
        n = c.take(it['a'], it.get('why', ''))
        d.tf(n, it['q'])
        return [n]
    if t == 'SHORT':
        n = c.take(it['a'], it.get('why', ''))
        d.q(n, it['q'], after=it.get('lines', 1))
        return [n]
    if t == 'FILL':
        ns = c.cells(it['a'], it.get('whys'))
        d.q(ns[0], it['q']) if it.get('q') else None
        d.blanks(it['parts'], ind=it.get('ind', 200))
        return ns
    if t == 'GRID':
        ns = c.cells(it['a'], it.get('whys'))
        if it.get('q'):
            d.body.append(wsdoc.para(
                [wsdoc.run(it['q'], sz=19)],
                '<w:spacing w:before="40" w:after="24"/>'))
        d.grid(it['h'], it['rows'], widths=it.get('w'),
               note=it.get('note', ''))
        return ns
    if t == 'MATCH':
        ns = c.cells(it['a'], it.get('whys'))
        d.q(ns[0], it['q']) if it.get('q') else None
        d.matchpairs(it['left'], it['right'], start=ns[0])
        return ns
    if t == 'SORT':
        ns = c.cells(it['a'], it.get('whys'))
        d.sortboard(it['q'], it['regions'], it['items'])
        return ns
    raise ValueError('unknown item type %r' % t)


def render_items(d, c, items):
    for it in items:
        render_item(d, c, it)


# ---------------------------------------------------------------- flow

# ---------------------------------------------------------------- pagination
# Page geometry, from the section properties docxw writes on every page.
PAGE_W = 11906 - 1000 - 1000
PAGE_H = 16838 - 1180 - 900
# The estimator is an estimator. 0.93 leaves the room its own error needs,
# which is the same margin the first-generation builder settled on.
LIMIT = 0.93

_NS = ('xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
       'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/'
       'wordprocessingDrawing" '
       'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/'
       'relationships" '
       'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
       'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"')


def _height(xml):
    """Height in twips of one body element, using the shared estimator."""
    import xml.etree.ElementTree as ET
    sys.path.insert(0, os.path.join(HERE, '_measure'))
    import measure as M
    el = list(ET.fromstring('<w:root %s>%s</w:root>' % (_NS, xml)))[0]
    if el.tag == M.W + 'p':
        return M._para_height(el, PAGE_W)
    if el.tag == M.W + 'tbl':
        return M._table_height(el, PAGE_W)
    return 0.0


def _binds(flow, i):
    """True when block i must stay with the block that follows it.

    A cycle bar alone at a page foot, or a move bar separated from the items
    it introduces, reads as a mistake rather than as a break. A model binds to
    the move that reads it, because a figure on one sheet and the questions
    about it on the next is exactly what the self-sufficiency rule exists to
    prevent.
    """
    k = flow[i][0]
    if k in ('cycle', 'move', 'speed'):
        return True
    if k in ('fig', 'panel', 'trace') and i + 1 < len(flow):
        return flow[i + 1][0] == 'move'
    if k == 'build':
        return True
    return False


def paginate(d, flow, spans, pre=0.0):
    """Insert page breaks at block boundaries that fit, and return the count.

    The author writes the flow and marks a break only where the teaching needs
    one. Everywhere else the builder measures what it has just emitted and
    breaks at the last boundary that fits, so a page can no longer overflow
    because somebody added a sentence.
    """
    heights = [sum(_height(x) for x in d.body[a:b]) for a, b in spans]
    cuts = []
    # The handout's title block is emitted before the flow starts, so its
    # height has to be carried into the first page. Leaving it out is how a
    # page measured at 93 per cent came out at 102.
    used = pre
    i = 0
    n = len(flow)
    while i < n:
        # gather the atom: this block plus everything bound to it
        j = i
        while j < n - 1 and _binds(flow, j):
            j += 1
        atom = sum(heights[i:j + 1])
        if flow[i][0] == 'page':
            used = 0.0
            i = j + 1
            continue
        if used and used + atom > PAGE_H * LIMIT:
            cuts.append(spans[i][0])
            used = atom
        else:
            used += atom
        i = j + 1
    for at in sorted(cuts, reverse=True):
        d.body.insert(at, _BREAK)
    return len(cuts)


_BREAK = ('<w:p><w:pPr><w:pageBreakBefore w:val="true"/>'
          '<w:spacing w:after="0"/></w:pPr><w:r><w:rPr><w:sz w:val="2"/>'
          '</w:rPr><w:t xml:space="preserve"> </w:t></w:r></w:p>')


def pagebreak(d):
    d.body.append(wsdoc.para([wsdoc.run(' ', sz=2)],
                             '<w:pageBreakBefore w:val="true"/>'
                             '<w:spacing w:after="0"/>'))


def render_flow(d, c, H, figs, total, pre=0):
    """Walk a handout's flow, emitting blocks and breaking pages where told.

    The running header belongs to the section, and a section's properties sit
    at its end, so the caller opens the header before the flow and closes the
    section after it. Inside the flow a page mark is an ordinary page break.
    """
    page = 1
    spans = []
    start0 = len(d.body)
    before = sum(_height(x) for x in d.body[pre:start0])
    for blk in H['flow']:
        a = len(d.body)
        k = blk[0]
        if k == 'page':
            page += 1
            pagebreak(d)
        elif k == 'speed':
            d.speedround(blk[1])
        elif k == 'cycle':
            d.cyclebar(blk[1], blk[2])
        elif k == 'move':
            d.movebar(blk[1], blk[2] if len(blk) > 2 else '')
        elif k == 'items':
            render_items(d, c, blk[1])
        elif k == 'fig':
            png, w, h = figs[blk[1]](False)
            d.figure(png, w, h)
        elif k == 'blankfig':
            png, w, h = figs[blk[1]](True)
            d.figure(png, w, h)
        elif k == 'panel':
            d.datapanel(blk[1], blk[2], note=blk[3] if len(blk) > 3 else '')
        elif k == 'trace':
            d.trace(blk[1], blk[2])
        elif k == 'rule':
            n = c.take(blk[5] if len(blk) > 5 else 'see the key')
            d.ruleframe(n, blk[1], blk[2], blk[3])
            H.setdefault('_rules', []).append((n, blk[4]))
        elif k == 'contrast':
            d.contrast(blk[1], blk[2], blk[3])
        elif k == 'pair':
            d.pairpoint(blk[1], blk[2])
        elif k == 'roles':
            d.rolecards(blk[1], blk[2])
        elif k == 'hunt':
            ns = c.cells(blk[3])
            d.errorhunt(blk[1] + '  (items %d to %d)' % (ns[0], ns[-1]),
                        blk[2])
        elif k == 'predict':
            d.predict(blk[1], blk[2] if len(blk) > 2 else '')
        elif k == 'teach':
            n = c.take(blk[4] if len(blk) > 4 else 'see the key')
            d.teachback(n, blk[1], blk[2], blk[3])
        elif k == 'build':
            n = c.take(blk[3] if len(blk) > 3 else 'the complete figure')
            d.buildframe(n, blk[2])
            png, w, hh = figs[blk[1]](True)
            d.figure(png, w, hh)
        elif k == 'check':
            n = c.take(blk[2], blk[4] if len(blk) > 4 else '')
            d.checkbar(n, blk[1], blk[3])
        elif k == 'note':
            d.body.append(wsdoc.para(
                [wsdoc.run(blk[1], sz=18, color=wsdoc.GREY)],
                '<w:spacing w:before="30" w:after="40"/>'))
        else:
            raise ValueError('unknown block %r' % k)
        spans.append((a, len(d.body)))
    page += paginate(d, H['flow'], spans, before)
    return page


def _open(d, H, pages):
    """Register a handout's running header once its page count is known.

    The header prints "Page 2 of 6", and the builder only learns the 6 after
    it has measured and paginated. A header is a separate part, though, and
    only the section properties at the end of the handout point at it, so the
    call can wait until the flow has been laid out.
    """
    return d.header('Handout %s · %s' % (H['id'], H['title']),
                    'Handout %s' % H['id'], total=pages)


# ---------------------------------------------------------------- documents
def build_handouts(mod):
    """One document holding every handout of the chapter, keys separate."""
    pk = importlib.import_module(mod)
    figs = importlib.import_module(pk.FIGS).FIGS
    d = WDoc(pk.TITLE, pk.SUB)
    keys = []
    first = True
    for i in pk.HANDOUTS:
        H = importlib.import_module('%s.h%02d' % (mod, i)).HANDOUT
        c = Counter()
        total = H['pages']
        pre = len(d.body)
        d.unit_title('Handout %s' % H['id'])
        d.strapline(H['title'])
        if H.get('sub'):
            d.cefr(H['sub'])
        pages = render_flow(d, c, H, figs, total, pre)
        H['pages'] = pages
        d.page_break_section(hdr=_open(d, H, pages), restart=True)
        keys.append((H, c))
    sp = os.path.join(OUT, pk.OUT_H)
    d.save(sp)

    k = WDoc(pk.TITLE + ' — answer keys', pk.SUB)
    for H, c in keys:
        khdr = k.header('Answer key · Handout %s' % H['id'],
                        'Answer key')
        k.keyhead('Answer key · Handout %s · %s'
                  % (H['id'], H['title']))
        k.keygrid3(c.ans)
        for n, booktext in H.get('_rules', []):
            k.keyrule(n, booktext)
        k.keywhy(c.why, cap=20)
        k.page_break_section(hdr=khdr, restart=True)
    kp = os.path.join(OUT, pk.OUT_K)
    k.save(kp)
    return sp, kp, keys


def build_combined(bk, mods, out):
    """Every handout followed by its own key sheet, in one document."""
    d = WDoc(BOOKLINE[bk] + ' — Workshop handouts', '')
    first = True
    nh = 0
    pts = 0
    for mod in mods:
        pk = importlib.import_module(mod)
        figs = importlib.import_module(pk.FIGS).FIGS
        for i in pk.HANDOUTS:
            H = importlib.import_module('%s.h%02d' % (mod, i)).HANDOUT
            c = Counter()
            total = H['pages']
            first = False
            pre = len(d.body)
            d.unit_title('Handout %s' % H['id'])
            d.strapline(H['title'])
            if H.get('sub'):
                d.cefr(H['sub'])
            pages = render_flow(d, c, H, figs, total, pre)
            H['pages'] = pages
            d.page_break_section(hdr=_open(d, H, pages), restart=True)
            # the key for this handout, on its own sheet
            khdr = d.header('Answer key · Handout %s' % H['id'],
                            'Answer key')
            d.keyhead('Answer key · Handout %s · %s'
                      % (H['id'], H['title']))
            d.keygrid3(c.ans)
            for n, booktext in H.get('_rules', []):
                d.keyrule(n, booktext)
            d.keywhy(c.why, cap=20)
            d.page_break_section(hdr=khdr, restart=True)
            nh += 1
            pts += c.i
    d.save(out)
    return nh, pts


if __name__ == '__main__':
    sys.path.insert(0, HERE)
    sp, kp, keys = build_handouts(sys.argv[1])
    print('wrote %s  (%d bytes)' % (sp, os.path.getsize(sp)))
    print('wrote %s  (%d bytes)' % (kp, os.path.getsize(kp)))
    for H, c in keys:
        print('   %-6s %-54s %3d items  %d pages'
              % (H['id'], H['title'][:52], c.i, H['pages']))
