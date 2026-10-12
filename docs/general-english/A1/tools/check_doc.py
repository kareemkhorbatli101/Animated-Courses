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


def check_if(applies, name, cond, detail=''):
    if applies:
        check(name, cond, detail)


def pages(pdf):
    """One entry per page of the PDF, in order.

    pdftotext puts a form feed AFTER the last page, so the split leaves one
    empty tail element -- exactly one, which is dropped here. The first
    version dropped empty elements in a `while` loop, which also swallowed
    the back cover, because a page whose only content is an image has no
    text at all. It then reported a 441-page book as 440 and could not see
    the cover it was being asked about.
    """
    out = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                         capture_output=True, text=True).stdout
    pg = out.split('\f')
    if pg and not pg[-1].strip():
        pg.pop()
    return pg


def main(pdf, n_units, n_figs, kind='student'):
    pg = pages(pdf)
    n_real = int(subprocess.run(['pdfinfo', pdf], capture_output=True, text=True)
                 .stdout.split('Pages:')[1].split()[0])
    check('D0 the text layer has a page for every page', len(pg) == n_real,
          f'{len(pg)} text pages, {n_real} in the file')
    lo, hi = (80, 600) if kind == 'student' else (20, 200)
    check('D1 page count is in band', lo <= n_real <= hi,
          f'{n_real} pages, band {lo}-{hi} for the {kind} book')

    # The Answer Key is a different artefact: no figures, and a line like
    # "8E Learner's own answers." at the foot of a page is a whole entry,
    # not a rubric stranded from its items. Running the Student Book's
    # checks over it reports four faults that are not faults, which is worse
    # than not checking it -- so it gets the checks that apply to it.
    student = kind == 'student'

    text = '\n'.join(pg)
    caps = re.findall(r'Figure (\d+)\.(\d+)\s*·', text)
    check_if(student, 'D2 every figure caption printed once', len(caps) == n_figs,
          f'{len(caps)} captions, {n_figs} figures')
    dupes = [c for c in set(caps) if caps.count(c) > 1]
    check_if(student, 'D3 no caption printed twice', not dupes, str(dupes[:4]))

    # an exercise label as the last non-empty line of a page is an orphan
    orphans = []
    for i, p in enumerate(pg, 1):
        lines = [l for l in p.split('\n') if l.strip()]
        if lines and re.match(r'^\s*(W\d|\d{1,2}[A-H])\s', lines[-1]):
            orphans.append((i, lines[-1].strip()[:40]))
    check_if(student, 'D4 no exercise label orphaned at a page foot', not orphans, str(orphans[:3]))

    # a caption as the FIRST line of a page means its picture is on the page before
    split_figs = []
    for i, p in enumerate(pg, 1):
        lines = [l for l in p.split('\n') if l.strip()]
        if lines and re.match(r'^\s*Figure \d+\.\d+\s*·', lines[0]):
            split_figs.append((i, lines[0].strip()[:40]))
    check_if(student, 'D5 no caption separated from its picture', not split_figs,
          str(split_figs[:3]))

    starts = [i for i, p in enumerate(pg, 1) if re.search(r'^\s*Unit \d+:', p, re.M)]
    check('D6 every unit begins', len(starts) >= n_units, f'{len(starts)} unit openings')
    if not student:
        keyed = len(re.findall(r'Unit \d+:.*?Answer Key', text))
        check('D9 every unit is keyed in the document', keyed >= n_units,
              f'{keyed} keyed unit headings, want {n_units}')

    imgs = subprocess.run(['pdfimages', '-list', pdf], capture_output=True, text=True)
    n_img = max(0, len(imgs.stdout.strip().split('\n')) - 2)
    check_if(student, 'D7 every figure is embedded', n_img >= n_figs,
          f'{n_img} images for {n_figs} figures')

    # D8 -- the first and last pages are covers, and they bleed to the paper
    # edge. A cover that pandoc has quietly scaled to the text column is a
    # postcard in the middle of a blank page, which is what the first build
    # produced; the giveaway is its effective resolution.
    bad_cov = []
    for pg_no, label in ((1, 'front'), (len(pg), 'back')):
        r = subprocess.run(['pdfimages', '-list', '-f', str(pg_no),
                            '-l', str(pg_no), pdf],
                           capture_output=True, text=True).stdout.strip().split('\n')
        rows = [x.split() for x in r[2:] if x.strip()]
        if len(rows) != 1:
            bad_cov.append(f'{label}: {len(rows)} images, want 1')
            continue
        xppi, yppi = float(rows[0][12]), float(rows[0][13])
        if abs(xppi - 200) > 4 or abs(yppi - 200) > 4:
            bad_cov.append(f'{label}: {xppi}x{yppi} ppi, want 200 '
                           f'(8.5x11in from a 1700x2200 canvas)')
        if pg[pg_no - 1].strip():
            bad_cov.append(f'{label}: carries body text')
    check('D8 a full-bleed cover on the first and last page', not bad_cov,
          str(bad_cov))

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [{os.path.basename(pdf)}]')
    return 1 if BAD else 0


if __name__ == '__main__':
    # The first version hardcoded the ten-unit build and ignored its own
    # argv, so pointing it at the twenty-unit PDF silently re-checked the
    # old one and reported 157 pages for a 439-page book.
    if len(sys.argv) > 1:
        pdf = sys.argv[1]
        units = int(sys.argv[2]) if len(sys.argv) > 2 else 20
        figs = int(sys.argv[3]) if len(sys.argv) > 3 else units * 22
    else:
        pdf = os.path.join(HERE, 'build', 'EFDL-A1-StudentBook-u01-20.pdf')
        units, figs = 20, 440
    sys.exit(main(pdf, units, figs,
                  'key' if 'AnswerKey' in os.path.basename(pdf) else 'student'))
