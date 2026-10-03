# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C313-1': ('case item C313-1', []),
    'C313-2': ('case item C313-2', []),
    'C313-3': ('case item C313-3', []),
    'C313-4': ('case item C313-4', []),
    'C313-5': ('case item C313-5', []),
    'C313-6': ('case item C313-6', []),
    'C313-7': ('case item C313-7', []),
    'P313-01': ('practice item P313-01', []),
    'P313-02': ('practice item P313-02', []),
    'P313-03': ('practice item P313-03', []),
    'P313-04': ('practice item P313-04', []),
    'P313-05': ('practice item P313-05', []),
    'P313-06': ('practice item P313-06', []),
    'P313-07': ('practice item P313-07', []),
    'P313-08': ('practice item P313-08', []),
    'P313-09': ('practice item P313-09', []),
    'P313-10': ('practice item P313-10', []),
    'P313-11': ('practice item P313-11', []),
    'P313-12': ('practice item P313-12', []),
    'P313-13': ('practice item P313-13', []),
    'P313-14': ('practice item P313-14', []),
    'P313-15': ('practice item P313-15', []),
    'P313-16': ('practice item P313-16', []),
    'SC313-1': ('section-check item SC313-1', []),
    'SC313-2': ('section-check item SC313-2', []),
    'SC313-3': ('section-check item SC313-3', []),
    'SC313-4': ('section-check item SC313-4', []),
    'SC313-5': ('section-check item SC313-5', []),
    'SC313-6': ('section-check item SC313-6', []),
    'SC313-7': ('section-check item SC313-7', []),
    'term:materials mix variance': ("term-bridge row 'materials mix variance'", []),
    'term:materials yield variance': ("term-bridge row 'materials yield variance'", []),
    'term:overhead spending variance': ("term-bridge row 'overhead spending variance'", []),
    'term:sales-mix variance': ("term-bridge row 'sales-mix variance'", []),
    'term:sales-quantity variance': ("term-bridge row 'sales-quantity variance'", []),
    'term:weighted-average contribution margin': ("term-bridge row 'weighted-average contribution margin'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C313-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C313-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
