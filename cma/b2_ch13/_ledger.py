# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C213-1': ('case item C213-1', []),
    'C213-2': ('case item C213-2', []),
    'C213-3': ('case item C213-3', []),
    'C213-4': ('case item C213-4', []),
    'C213-5': ('case item C213-5', []),
    'C213-6': ('case item C213-6', []),
    'C213-7': ('case item C213-7', []),
    'P213-01': ('practice item P213-01', []),
    'P213-02': ('practice item P213-02', []),
    'P213-03': ('practice item P213-03', []),
    'P213-04': ('practice item P213-04', []),
    'P213-05': ('practice item P213-05', []),
    'P213-06': ('practice item P213-06', []),
    'P213-07': ('practice item P213-07', []),
    'P213-08': ('practice item P213-08', []),
    'P213-09': ('practice item P213-09', []),
    'P213-10': ('practice item P213-10', []),
    'P213-11': ('practice item P213-11', []),
    'P213-12': ('practice item P213-12', []),
    'P213-13': ('practice item P213-13', []),
    'P213-14': ('practice item P213-14', []),
    'P213-15': ('practice item P213-15', []),
    'P213-16': ('practice item P213-16', []),
    'SC213-1': ('section-check item SC213-1', []),
    'SC213-10': ('section-check item SC213-10', []),
    'SC213-11': ('section-check item SC213-11', []),
    'SC213-2': ('section-check item SC213-2', []),
    'SC213-3': ('section-check item SC213-3', []),
    'SC213-4': ('section-check item SC213-4', []),
    'SC213-5': ('section-check item SC213-5', []),
    'SC213-6': ('section-check item SC213-6', []),
    'SC213-7': ('section-check item SC213-7', []),
    'SC213-8': ('section-check item SC213-8', []),
    'SC213-9': ('section-check item SC213-9', []),
    'term:business unit': ("term-bridge row 'business unit'", []),
    'term:controllable margin': ("term-bridge row 'controllable margin'", []),
    'term:cost to serve': ("term-bridge row 'cost to serve'", []),
    'term:customer cost hierarchy': ("term-bridge row 'customer cost hierarchy'", []),
    'term:customer profitability analysis': ("term-bridge row 'customer profitability analysis'", []),
    'term:customer-sustaining cost': ("term-bridge row 'customer-sustaining cost'", []),
    'term:whale curve': ("term-bridge row 'whale curve'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C213-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C213-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'SC213-7': 'it sends the reader to F213-07, which is a box, or a table too long to carry on a four-page sheet beside its own questions',
}
