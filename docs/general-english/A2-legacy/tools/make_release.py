#!/usr/bin/env python3
"""Copy the shipped artefacts into `release/` and write the ZIP.

`build/` is untracked, because committing a fresh copy of every DOCX and PDF
on every rebuild is what took this repository to 1.4 GB. But a download link
has to point at something that is in the repository, and GitHub Releases are
not reachable from this session's tool set. So `release/` holds exactly the
files that ship, replaced rather than accumulated, and is written only at a
milestone -- not on every build.
"""
from __future__ import annotations
import os, re, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
BUILD = os.path.join(ROOT, 'build')
REL = os.path.join(ROOT, 'release')
sys.path[:0] = [HERE]

import level as _LV  # noqa: E402

def read_me(level, books):
    """The release note, written for the level this was run from.

    It used to be a constant naming A2's two volumes and 820 figures. One copy
    of `tools/` now serves both levels, so it has to be built from the level's
    own spec and whatever has actually been released.
    """
    import yaml
    g = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'),
                            encoding='utf-8'))
    # A2 keeps `per_unit: 14` with `dense_per_unit: 41` from its phase-5
    # transition; every unit is on the dense layout now, so report that.
    per = g['figures'].get('dense_per_unit') or g['figures']['per_unit']
    nu = sum(1 for f in os.listdir(os.path.join(ROOT, 'units'))
             if f.endswith('.md'))
    lines = [f'English for Daily Life - {level}',
             '=' * (24 + len(level)), '',
             f'{len(books)} volume(s), {nu} unit(s) written, '
             f'{per} figures a unit.', '']
    for b in books:
        name = f'EFDL-{_LV.label(b)}-{_LV.title(b).replace(" ", "")}'
        lines.append(f'  {name:<35}  Volume {_LV.vol(b)}, {_LV.title(b)}')
    lines += [f'  {"...-AnswerKey-...":<35}  the same key, printable on its own',
              f'  {"units/":<35}  each unit on its own, DOCX and PDF',
              f'  {"covers/":<35}  the covers at 300 DPI',
              f'  {"reports/":<35}  the check report for each volume',
              '',
              'Each book is one file: the units in order, then the answer key, with',
              'the front and back covers as the first and last pages. DOCX is the',
              'editable source; the PDF is what it prints as.',
              '',
              f'Every unit carries {per} figures, every one of them a teaching device',
              'the text refers to. The unit opener and both covers fill a page.', '']
    return '\n'.join(lines)



def main():
    os.makedirs(REL, exist_ok=True)
    for f in os.listdir(REL):
        p = os.path.join(REL, f)
        shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    sent = []
    for f in sorted(os.listdir(BUILD)):
        if f.startswith('EFDL-') and f.endswith(('.docx', '.pdf')):
            shutil.copy2(os.path.join(BUILD, f), os.path.join(REL, f))
            sent.append(f)
    # The single units as well. A whole volume is 500 pages and 18 MB; a
    # teacher who wants next week's unit should not have to download the year.
    units = os.path.join(REL, 'units')
    os.makedirs(units, exist_ok=True)
    import level as LV
    codes = '|'.join(re.escape(b) for b in LV.books_here(ROOT))
    for f in sorted(os.listdir(BUILD)):
        if re.fullmatch(rf'({codes})-u\d\d\.(docx|pdf)', f):
            shutil.copy2(os.path.join(BUILD, f), os.path.join(units, f))
            sent.append('units/' + f)
    for sub in ('covers', 'reports'):
        src = os.path.join(ROOT, sub)
        if os.path.isdir(src):
            dst = os.path.join(REL, sub)
            os.makedirs(dst, exist_ok=True)
            for f in sorted(os.listdir(src)):
                if f.endswith(('.png', '.json', '.md')):
                    shutil.copy2(os.path.join(src, f), os.path.join(dst, f))
    books = _LV.books_here(ROOT)
    open(os.path.join(REL, 'READ ME FIRST.txt'), 'w').write(
        read_me(_LV.level(books[0]), books))
    # No all-in-one ZIP. It held a second copy of the same eight files, 67 MB
    # of it, and a 67 MB blob goes into the repository's history for good and
    # trips GitHub's large-file warning on every push. Every file below is
    # already one click.
    for f in sent:
        print(f'  {f}  {os.path.getsize(os.path.join(REL, f)) // 1024} KB')
    return 0


if __name__ == '__main__':
    sys.exit(main())
