"""Family K: the document, as printed.

Everything else in this suite checks the source. This checks the artefact a
learner holds, which is the only place certain faults exist at all: an
exercise label stranded at the foot of a page, a caption that got separated
from its picture, a unit that starts halfway down someone else's page.
"""
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def pages(pdf):
    out = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                         capture_output=True, text=True).stdout
    return out.split('\f')


def main(pdf, n_units, n_figs):
    pg = pages(pdf)
    while pg and not pg[-1].strip():
        pg.pop()
    check('D1 page count is in band', 80 <= len(pg) <= 400, f'{len(pg)} pages')

    text = '\n'.join(pg)
    caps = re.findall(r'Figure (\d+)\.(\d+)\s*·', text)
    check('D2 every figure caption printed once', len(caps) == n_figs,
          f'{len(caps)} captions, {n_figs} figures')
    dupes = [c for c in set(caps) if caps.count(c) > 1]
    check('D3 no caption printed twice', not dupes, str(dupes[:4]))

    # an exercise label as the last non-empty line of a page is an orphan
    orphans = []
    for i, p in enumerate(pg, 1):
        lines = [l for l in p.split('\n') if l.strip()]
        if lines and re.match(r'^\s*(W\d|\d{1,2}[A-H])\s', lines[-1]):
            orphans.append((i, lines[-1].strip()[:40]))
    check('D4 no exercise label orphaned at a page foot', not orphans, str(orphans[:3]))

    # a caption as the FIRST line of a page means its picture is on the page before
    split_figs = []
    for i, p in enumerate(pg, 1):
        lines = [l for l in p.split('\n') if l.strip()]
        if lines and re.match(r'^\s*Figure \d+\.\d+\s*·', lines[0]):
            split_figs.append((i, lines[0].strip()[:40]))
    check('D5 no caption separated from its picture', not split_figs,
          str(split_figs[:3]))

    starts = [i for i, p in enumerate(pg, 1) if re.search(r'^\s*Unit \d+:', p, re.M)]
    check('D6 every unit begins', len(starts) >= n_units, f'{len(starts)} unit openings')

    imgs = subprocess.run(['pdfimages', '-list', pdf], capture_output=True, text=True)
    n_img = max(0, len(imgs.stdout.strip().split('\n')) - 2)
    check('D7 every figure is embedded', n_img >= n_figs,
          f'{n_img} images for {n_figs} figures')

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [{os.path.basename(pdf)}]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main(os.path.join(HERE, 'build', 'EFDL-A1.1-StudentBook-u01-10.pdf'),
                  10, 220))
