# -*- coding: utf-8 -*-
"""Measure the printed book and tell the recap figures how big to be.

A generator cannot know where Word will break a page, so it must not guess.
This converts the built .docx to PDF, finds the page each closing figure
landed on, measures how much white is left under the last ink on that page,
and writes that back as a target height for the next build. Three passes of
this and every part ends flush with the foot of its page.

    python3 fitpass.py <docx> <recaps.json> <fit.json>
"""
import json, os, subprocess, sys, tempfile

PAGE_H_PT = 841.89          # A4
BOTTOM_MARGIN_PT = 56.7     # 1134 twips
TOP_MARGIN_PT = 56.7
SAFETY_PT = 34.0            # the caption's own line, plus a sliver
U_PER_PT = 3000.0 / (6.270833333333333 * 72.0)


def to_pdf(docx, outdir):
    # A private profile per conversion, so two books can be fitted at once.
    prof = os.path.join(outdir, 'lo_profile')
    subprocess.run(['libreoffice', '-env:UserInstallation=file://' + prof,
                    '--headless', '--convert-to', 'pdf',
                    '--outdir', outdir, docx], check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return os.path.join(outdir, os.path.splitext(os.path.basename(docx))[0] + '.pdf')


def page_count(pdf):
    out = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    for line in out.splitlines():
        if line.startswith('Pages:'):
            return int(line.split()[1])
    return 0


def page_text(pdf, n):
    return subprocess.run(['pdftotext', '-f', str(n), '-l', str(n), pdf, '-'],
                          capture_output=True, text=True).stdout


def ink_bottom_pt(pdf, n, tmp):
    """The lowest row of ink on page n, in points from the top of the page."""
    stem = os.path.join(tmp, 'pg')
    subprocess.run(['pdftoppm', '-f', str(n), '-l', str(n), '-r', '72', '-gray',
                    '-png', pdf, stem], check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    png = [os.path.join(tmp, f) for f in sorted(os.listdir(tmp))
           if f.startswith('pg') and f.endswith('.png')]
    if not png:
        return None
    from PIL import Image
    im = Image.open(png[-1]).convert('L')
    w, h = im.size
    px = im.load()
    last = None
    for yy in range(h - 1, -1, -1):
        row = [px[xx, yy] for xx in range(0, w, 2)]
        if min(row) < 245:
            last = yy
            break
    for f in png:
        os.remove(f)
    if last is None:
        return None
    return last * PAGE_H_PT / float(h)


def measure(docx, recaps):
    """recaps: {FIG id: key} -> ({key: leftover_pt}, {key: extra_units})"""
    tmp = tempfile.mkdtemp(prefix='fit')
    pdf = to_pdf(docx, tmp)
    n = page_count(pdf)
    want = {fid: key for fid, key in recaps.items()}
    page_of = {}
    for p in range(1, n + 1):
        txt = page_text(pdf, p)
        for fid in list(want):
            if fid + ' ' in txt or fid + '\n' in txt:
                page_of[want[fid]] = p
                del want[fid]
    left, extra = {}, {}
    for key, p in page_of.items():
        b = ink_bottom_pt(pdf, p, tmp)
        if b is None:
            continue
        # A caption that has been pushed onto a page of its own is measuring
        # the wrong page: the figure it belongs to is on the one before.
        if b < TOP_MARGIN_PT + 40 and p > 1:
            b2 = ink_bottom_pt(pdf, p - 1, tmp)
            if b2 is not None:
                b = b2
        gap = PAGE_H_PT - BOTTOM_MARGIN_PT - b
        left[key] = max(0.0, gap)
        extra[key] = max(0.0, (gap - SAFETY_PT)) * U_PER_PT
    return left, extra, n, pdf


def blank_pages(pdf):
    """Every page with no ink at all. A built book should have none: a blank
    page is a page break that spilled, and nothing in the model wants one."""
    tmp = tempfile.mkdtemp(prefix='bp')
    subprocess.run(['pdftoppm', '-r', '30', '-gray', pdf,
                    os.path.join(tmp, 'bp')], check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    from PIL import Image
    out = []
    for f in sorted(os.listdir(tmp)):
        if not f.startswith('bp-'):
            continue
        im = Image.open(os.path.join(tmp, f)).convert('L')
        if im.getextrema()[0] > 245:
            out.append(int(f.rsplit('-', 1)[1].split('.')[0]))
    return out


def main():
    docx, rjson, fjson = sys.argv[1], sys.argv[2], sys.argv[3]
    mode = 'absolute' if '--absolute' in sys.argv else (
        'verify' if '--verify' in sys.argv else 'add')
    recaps = json.load(open(rjson))
    prev = json.load(open(fjson)) if os.path.exists(fjson) else {}
    left, extra, pages, pdf = measure(docx, recaps)
    if mode == 'absolute':
        # Pass 0 measured the room each part leaves with no closing figure in
        # it at all, so the measurement IS the target, not an increment.
        merged = {k: round(v, 1) for k, v in extra.items()}
    elif mode == 'verify':
        merged = dict(prev)
    else:
        merged = dict(prev)
        for k, v in extra.items():
            merged[k] = round(prev.get(k, 0.0) + v, 1)
    json.dump(merged, open(fjson, 'w'), indent=0, sort_keys=True)
    json.dump({k: round(v, 1) for k, v in left.items()},
              open(fjson.replace('.json', '_left.json'), 'w'), indent=0, sort_keys=True)
    worst = sorted(left.items(), key=lambda kv: -kv[1])[:6]
    blanks = blank_pages(pdf)
    print('pages %d   closing figures found %d/%d   worst white: %s'
          % (pages, len(left), len(recaps),
             ', '.join('%s %.0fpt' % (k, v) for k, v in worst) or 'none'))
    if blanks:
        print('BLANK PAGES: %d at %s' % (len(blanks), blanks[:20]))
        if mode == 'verify':
            # A verified book may not contain a blank page. The passes before
            # the verify may: their geometry is not final.
            sys.exit(1)


if __name__ == '__main__':
    main()
