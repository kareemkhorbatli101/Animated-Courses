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
import os, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
BUILD = os.path.join(ROOT, 'build')
REL = os.path.join(ROOT, 'release')

READ_ME = """English for Daily Life - A2
===========================

Two volumes, twenty units, 820 figures.

  EFDL-A2.1-EverydayLife-u01-10        Units 1-10, Everyday Life
  EFDL-A2.2-OutintheWorld-u11-20       Units 11-20, Out in the World
  ...-AnswerKey-...                    the same key, printable on its own
  covers/                              the four covers at 300 DPI
  reports/                             the check report for each volume

Each book is one file: the units in order, then the answer key, with the
front and back covers as the first and last pages. DOCX is the editable
source; the PDF is what it prints as.

Every unit carries 41 figures, every one of them a teaching device the text
refers to. The unit opener and both covers fill a page.
"""


def main():
    os.makedirs(REL, exist_ok=True)
    for f in os.listdir(REL):
        p = os.path.join(REL, f)
        shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    sent = []
    for f in sorted(os.listdir(BUILD)):
        if f.startswith('EFDL-A2.') and f.endswith(('.docx', '.pdf')):
            shutil.copy2(os.path.join(BUILD, f), os.path.join(REL, f))
            sent.append(f)
    for sub in ('covers', 'reports'):
        src = os.path.join(ROOT, sub)
        if os.path.isdir(src):
            dst = os.path.join(REL, sub)
            os.makedirs(dst, exist_ok=True)
            for f in sorted(os.listdir(src)):
                if f.endswith(('.png', '.json', '.md')):
                    shutil.copy2(os.path.join(src, f), os.path.join(dst, f))
    open(os.path.join(REL, 'READ ME FIRST.txt'), 'w').write(READ_ME)
    # No all-in-one ZIP. It held a second copy of the same eight files, 67 MB
    # of it, and a 67 MB blob goes into the repository's history for good and
    # trips GitHub's large-file warning on every push. Every file below is
    # already one click.
    for f in sent:
        print(f'  {f}  {os.path.getsize(os.path.join(REL, f)) // 1024} KB')
    return 0


if __name__ == '__main__':
    sys.exit(main())
