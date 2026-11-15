# -*- coding: utf-8 -*-
"""The proven drawing and document layer, borrowed from the TOEFL series.

art.py carries exact DejaVu metrics and the text-fitting layer that makes
gate 6 possible; docxw.py writes the document. Neither is TOEFL-specific, and
neither is copied here, because a copy would drift. The IELTS books import
them through this module so there is exactly one of each in the repository.
"""
import os
import sys

_TOEFL = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'toefl')
if _TOEFL not in sys.path:
    # appended, not inserted: this package has its own frames.py, and an
    # insert at the front would make `import frames` resolve to the TOEFL one
    sys.path.append(_TOEFL)

from art import (render, T, R, C, L, P, person, head, icon, wrap, tw,   # noqa: E402,F401
                 fit, fit_block, TFIT, TBLOCK, shrink_to, FITLOG,
                 PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, PERI_L, BLUE,
                 AMBER, TEAL, PLUM, GREEN, RED, INK, GREY, GREY_L, RULE,
                 SKIN, SKIN_D, SKILL)
from docxw import Doc  # noqa: E402,F401
from docxw import (INDIGO as D_INDIGO, BLUE as D_BLUE, AMBER as D_AMBER,  # noqa: E402,F401
                   TEAL as D_TEAL, PLUM as D_PLUM, GREY as D_GREY,
                   GREEN as D_GREEN, RED as D_RED, PERI as D_PERI)

W = 900      # full-width figure, as in the TOEFL series
HW = 440
