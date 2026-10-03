# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C314-1': ('case item C314-1', []),
    'C314-2': ('case item C314-2', []),
    'C314-3': ('case item C314-3', []),
    'C314-4': ('case item C314-4', []),
    'C314-5': ('case item C314-5', []),
    'C314-6': ('case item C314-6', []),
    'C314-7': ('case item C314-7', []),
    'P314-01': ('practice item P314-01', []),
    'P314-02': ('practice item P314-02', []),
    'P314-03': ('practice item P314-03', []),
    'P314-04': ('practice item P314-04', []),
    'P314-05': ('practice item P314-05', []),
    'P314-06': ('practice item P314-06', []),
    'P314-07': ('practice item P314-07', []),
    'P314-08': ('practice item P314-08', []),
    'P314-09': ('practice item P314-09', []),
    'P314-10': ('practice item P314-10', []),
    'P314-11': ('practice item P314-11', []),
    'P314-12': ('practice item P314-12', []),
    'P314-13': ('practice item P314-13', []),
    'P314-14': ('practice item P314-14', []),
    'P314-15': ('practice item P314-15', []),
    'P314-16': ('practice item P314-16', []),
    'SC314-1': ('section-check item SC314-1', []),
    'SC314-10': ('section-check item SC314-10', []),
    'SC314-11': ('section-check item SC314-11', []),
    'SC314-2': ('section-check item SC314-2', []),
    'SC314-3': ('section-check item SC314-3', []),
    'SC314-4': ('section-check item SC314-4', []),
    'SC314-5': ('section-check item SC314-5', []),
    'SC314-6': ('section-check item SC314-6', []),
    'SC314-7': ('section-check item SC314-7', []),
    'SC314-8': ('section-check item SC314-8', []),
    'SC314-9': ('section-check item SC314-9', []),
    'term:corrective action': ("term-bridge row 'corrective action'", []),
    'term:denominator level': ("term-bridge row 'denominator level'", []),
    'term:fixed overhead spending variance': ("term-bridge row 'fixed overhead spending variance'", []),
    'term:production-volume variance': ("term-bridge row 'production-volume variance'", []),
    'term:variable overhead efficiency variance': ("term-bridge row 'variable overhead efficiency variance'", []),
    'term:variable overhead spending variance': ("term-bridge row 'variable overhead spending variance'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C314-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C314-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
