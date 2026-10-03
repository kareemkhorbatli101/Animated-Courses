# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C305-1': ('case item C305-1', []),
    'C305-2': ('case item C305-2', []),
    'C305-3': ('case item C305-3', []),
    'C305-4': ('case item C305-4', []),
    'C305-5': ('case item C305-5', []),
    'C305-6': ('case item C305-6', []),
    'C305-7': ('case item C305-7', []),
    'P305-01': ('practice item P305-01', []),
    'P305-02': ('practice item P305-02', []),
    'P305-03': ('practice item P305-03', []),
    'P305-04': ('practice item P305-04', []),
    'P305-05': ('practice item P305-05', []),
    'P305-06': ('practice item P305-06', []),
    'P305-07': ('practice item P305-07', []),
    'P305-08': ('practice item P305-08', []),
    'P305-09': ('practice item P305-09', []),
    'P305-10': ('practice item P305-10', []),
    'P305-11': ('practice item P305-11', []),
    'P305-12': ('practice item P305-12', []),
    'P305-13': ('practice item P305-13', []),
    'P305-14': ('practice item P305-14', []),
    'P305-15': ('practice item P305-15', []),
    'P305-16': ('practice item P305-16', []),
    'SC305-1': ('section-check item SC305-1', []),
    'SC305-10': ('section-check item SC305-10', []),
    'SC305-11': ('section-check item SC305-11', []),
    'SC305-2': ('section-check item SC305-2', []),
    'SC305-3': ('section-check item SC305-3', []),
    'SC305-4': ('section-check item SC305-4', []),
    'SC305-5': ('section-check item SC305-5', []),
    'SC305-6': ('section-check item SC305-6', []),
    'SC305-7': ('section-check item SC305-7', []),
    'SC305-8': ('section-check item SC305-8', []),
    'SC305-9': ('section-check item SC305-9', []),
    'term:continuous (rolling) budget': ("term-bridge row 'continuous (rolling) budget'", []),
    'term:cost formula': ("term-bridge row 'cost formula'", []),
    'term:decision package': ("term-bridge row 'decision package'", []),
    'term:flexible budget': ("term-bridge row 'flexible budget'", []),
    'term:incremental budgeting': ("term-bridge row 'incremental budgeting'", []),
    'term:static budget': ("term-bridge row 'static budget'", []),
    'term:zero-based budgeting': ("term-bridge row 'zero-based budgeting'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C305-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C305-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
