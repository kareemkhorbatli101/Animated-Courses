# -*- coding: utf-8 -*-
"""Chapter 1 of Book 1, converted into twelve exercise-only handouts.

The source is cma/src/b1_ch01.txt, frozen from the review edition, and the
checks in checkch.py read it: every number and every account name used in a
handout has to appear there, so a figure that is not in the book cannot reach
a sheet.
"""
CH = '1'
BOOK = 'CMA Part 1 · Section A · Chapter 1'
TITLE = 'CMA Part 1 · Section A · Chapter 1'
SUB = 'The Language and Framework of Financial Reporting'
# Built incrementally: whichever handout modules exist are in.
import os as _os, re as _re
HANDOUTS = sorted(int(_m.group(1)) for _f in _os.listdir(_os.path.dirname(__file__))
                  for _m in [_re.match(r'h(\d+)\.py$', _f)] if _m)
OUT_H = 'CMA_B1_Ch01_Handouts.docx'
OUT_K = 'CMA_B1_Ch01_AnswerKeys.docx'
SOURCE = 'src/b1_ch01.txt'

from ._ledger import LEDGER  # noqa: E402  the chapter's content inventory
