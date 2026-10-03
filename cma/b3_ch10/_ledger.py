# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C310-1': ('case item C310-1', []),
    'C310-2': ('case item C310-2', []),
    'C310-3': ('case item C310-3', []),
    'C310-4': ('case item C310-4', []),
    'C310-5': ('case item C310-5', []),
    'C310-6': ('case item C310-6', []),
    'C310-7': ('case item C310-7', []),
    'P310-01': ('practice item P310-01', []),
    'P310-02': ('practice item P310-02', []),
    'P310-03': ('practice item P310-03', []),
    'P310-04': ('practice item P310-04', []),
    'P310-05': ('practice item P310-05', []),
    'P310-06': ('practice item P310-06', []),
    'P310-07': ('practice item P310-07', []),
    'P310-08': ('practice item P310-08', []),
    'P310-09': ('practice item P310-09', []),
    'P310-10': ('practice item P310-10', []),
    'P310-11': ('practice item P310-11', []),
    'P310-12': ('practice item P310-12', []),
    'P310-13': ('practice item P310-13', []),
    'P310-14': ('practice item P310-14', []),
    'P310-15': ('practice item P310-15', []),
    'P310-16': ('practice item P310-16', []),
    'SC310-1': ('section-check item SC310-1', []),
    'SC310-10': ('section-check item SC310-10', []),
    'SC310-11': ('section-check item SC310-11', []),
    'SC310-2': ('section-check item SC310-2', []),
    'SC310-3': ('section-check item SC310-3', []),
    'SC310-4': ('section-check item SC310-4', []),
    'SC310-5': ('section-check item SC310-5', []),
    'SC310-6': ('section-check item SC310-6', []),
    'SC310-7': ('section-check item SC310-7', []),
    'SC310-8': ('section-check item SC310-8', []),
    'SC310-9': ('section-check item SC310-9', []),
    'term:dividend policy': ("term-bridge row 'dividend policy'", []),
    'term:pro forma balance sheet': ("term-bridge row 'pro forma balance sheet'", []),
    'term:pro forma financial statements': ("term-bridge row 'pro forma financial statements'", []),
    'term:pro forma statement of cash flows': ("term-bridge row 'pro forma statement of cash flows'", []),
    'term:required outside financing': ("term-bridge row 'required outside financing'", []),
    'term:sensitivity analysis': ("term-bridge row 'sensitivity analysis'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C310-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
