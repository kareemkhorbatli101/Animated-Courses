# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C202-1': ('case item C202-1', []),
    'C202-2': ('case item C202-2', []),
    'C202-3': ('case item C202-3', []),
    'C202-4': ('case item C202-4', []),
    'C202-5': ('case item C202-5', []),
    'C202-6': ('case item C202-6', []),
    'C202-7': ('case item C202-7', []),
    'P202-01': ('practice item P202-01', []),
    'P202-02': ('practice item P202-02', []),
    'P202-03': ('practice item P202-03', []),
    'P202-04': ('practice item P202-04', []),
    'P202-05': ('practice item P202-05', []),
    'P202-06': ('practice item P202-06', []),
    'P202-07': ('practice item P202-07', []),
    'P202-08': ('practice item P202-08', []),
    'P202-09': ('practice item P202-09', []),
    'P202-10': ('practice item P202-10', []),
    'P202-11': ('practice item P202-11', []),
    'P202-12': ('practice item P202-12', []),
    'P202-13': ('practice item P202-13', []),
    'P202-14': ('practice item P202-14', []),
    'P202-15': ('practice item P202-15', []),
    'P202-16': ('practice item P202-16', []),
    'SC202-1': ('section-check item SC202-1', []),
    'SC202-10': ('section-check item SC202-10', []),
    'SC202-11': ('section-check item SC202-11', []),
    'SC202-2': ('section-check item SC202-2', []),
    'SC202-3': ('section-check item SC202-3', []),
    'SC202-4': ('section-check item SC202-4', []),
    'SC202-5': ('section-check item SC202-5', []),
    'SC202-6': ('section-check item SC202-6', []),
    'SC202-7': ('section-check item SC202-7', []),
    'SC202-8': ('section-check item SC202-8', []),
    'SC202-9': ('section-check item SC202-9', []),
    'term:account analysis': ("term-bridge row 'account analysis'", []),
    'term:committed fixed cost': ("term-bridge row 'committed fixed cost'", []),
    'term:cost behavior': ("term-bridge row 'cost behavior'", []),
    'term:discretionary fixed cost': ("term-bridge row 'discretionary fixed cost'", []),
    'term:fixed cost': ("term-bridge row 'fixed cost'", []),
    'term:mixed cost': ("term-bridge row 'mixed cost'", []),
    'term:relevant range': ("term-bridge row 'relevant range'", []),
    'term:step cost': ("term-bridge row 'step cost'", []),
    'term:variable cost': ("term-bridge row 'variable cost'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C202-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
