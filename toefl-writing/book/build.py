# -*- coding: utf-8 -*-
"""Build the pilot. Validation runs first and raises rather than warning."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, HERE + '/items')

import validate, render, curriculum
from engine import Doc, to_pdf, OUT

import importlib, glob

TASK_ORDER = {'BUILD A SENTENCE': 0, 'WRITE AN EMAIL': 1,
              'WRITE FOR AN ACADEMIC DISCUSSION': 2}


def collect():
    """Every module in items/ contributes ITEM, ITEMS or SETS."""
    out = []
    for path in sorted(glob.glob(HERE + '/items/*.py')):
        name = os.path.basename(path)[:-3]
        if name.startswith('_'):
            continue
        m = importlib.import_module(name)
        if hasattr(m, 'ITEM'):
            out.append(m.ITEM)
        for attr in ('SETS', 'ITEMS'):
            if hasattr(m, attr):
                out.extend(getattr(m, attr))
    out.sort(key=lambda it: (TASK_ORDER.get(it['task'], 9), it['id']))
    return out


ITEMS = collect()
RENDER = {'BUILD A SENTENCE': render.render_bas,
          'WRITE AN EMAIL': render.render_email,
          'WRITE FOR AN ACADEMIC DISCUSSION': render.render_ad}


def main():
    cur = curriculum.summary()
    total = sum(len(v) for v in cur.values())
    print('curriculum map: %d items' % total)
    assert total == 300, total

    validate.check_all(ITEMS)
    print('content validation: %d items PASS' % len(ITEMS))

    D = Doc()
    render.title_page(D)
    render.how_it_works(D)
    render.the_test(D)
    render.consequentiality(D)
    for it in ITEMS:
        RENDER[it['task']](D, it)
    render.appendix_map(D)

    os.makedirs(OUT, exist_ok=True)
    docx = OUT + '/TOEFL-Writing-Guide-Vol1.docx'
    D.save(docx)
    print('wrote', os.path.basename(docx))
    pdf = to_pdf(docx)
    if not os.path.exists(pdf):
        raise RuntimeError('PDF conversion produced nothing')
    print('wrote', os.path.basename(pdf))
    audit(pdf)
    return docx, pdf


def audit(pdf):
    """A page with no text is a layout fault. A one-line spill is a widow:
    worth knowing about, not worth failing a 400-page book over."""
    import subprocess, re
    txt = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                         capture_output=True, text=True).stdout
    pages = txt.split('\f')
    if pages and not pages[-1].strip():
        pages = pages[:-1]
    blank, thin = [], []
    for i, p in enumerate(pages, 1):
        lines = [l.strip() for l in p.splitlines() if l.strip()]
        lines = [l for l in lines if l != str(i)]      # drop the footer
        if not lines:
            blank.append(i)
        elif len(lines) <= 2:
            thin.append(i)
    print('audit: %d pages, %d blank, %d thin' % (len(pages), len(blank), len(thin)))
    if thin:
        print('       widows on %s' % thin[:12])
    if blank:
        raise RuntimeError('page(s) with no text at all: %s' % blank)


if __name__ == '__main__':
    main()
