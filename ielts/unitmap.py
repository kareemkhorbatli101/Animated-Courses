# -*- coding: utf-8 -*-
"""Which module numbers belong to which book.

Deliberately free of every dependency, including _base, so that check.py
can ask the question without importing the drawing layer.
"""
import os

# ---------------------------------------------------------------- unit map
# Which module numbers belong to which book. This table replaces the
# ten-unit arithmetic (`21 + (vol - 3) * 10`, `3 + (n - 21) // 10`) that
# was written into seven separate files when every book had exactly ten
# units and none would ever gain an eleventh. It could not survive a book
# growing, and Volume 3 grows: units 81 and 82 are its new subject-diversity
# units (animal navigation, archaeology), appended rather than renumbered
# because renumbering 30 units across six books would touch every paper,
# every answer key and every cross-reference for no pedagogic gain.
#
# A volume takes new units by appending to its own row. Nothing else moves.
VOL_UNITS = {1: list(range(1, 11)),
             2: list(range(11, 21)),
             3: list(range(21, 31)) + [81, 82],
             4: list(range(31, 41)),
             5: list(range(41, 51)),
             6: list(range(51, 61)),
             7: list(range(61, 71)),
             8: list(range(71, 81))}

# The order the books are built, gated and reported in: up the ladder, with
# the two Foundation books first because they sit below Volume 1 even
# though their keys are 7 and 8.
BOOK_ORDER = [7, 8, 1, 2, 3, 4, 5, 6]

CONTENT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'content')


def units(vol):
    """Every module number declared for a book, written or not."""
    return list(VOL_UNITS[vol])


def units_present(vol):
    """Only the modules that exist, so a book under construction builds."""
    return [n for n in VOL_UNITS[vol]
            if os.path.exists(os.path.join(CONTENT, 'u%02d.py' % n))]


def vol_of(n):
    """Which book a module number belongs to.

    Falls back to the old arithmetic for a number that is in no book, so a
    caller asking about a unit that does not exist yet still gets the
    nearest sensible answer instead of an exception.
    """
    for v in BOOK_ORDER:
        if n in VOL_UNITS[v]:
            return v
    return max(1, min(8, 3 + (n - 21) // 10))


def books(present=False):
    """[(vol, [unit numbers])] in build order."""
    pick = units_present if present else units
    return [(v, pick(v)) for v in BOOK_ORDER]
