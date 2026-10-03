# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C312-1': ('case item C312-1', []),
    'C312-2': ('case item C312-2', []),
    'C312-3': ('case item C312-3', []),
    'C312-4': ('case item C312-4', []),
    'C312-5': ('case item C312-5', []),
    'C312-6': ('case item C312-6', []),
    'C312-7': ('case item C312-7', []),
    'P312-01': ('practice item P312-01', []),
    'P312-02': ('practice item P312-02', []),
    'P312-03': ('practice item P312-03', []),
    'P312-04': ('practice item P312-04', []),
    'P312-05': ('practice item P312-05', []),
    'P312-06': ('practice item P312-06', []),
    'P312-07': ('practice item P312-07', []),
    'P312-08': ('practice item P312-08', []),
    'P312-09': ('practice item P312-09', []),
    'P312-10': ('practice item P312-10', []),
    'P312-11': ('practice item P312-11', []),
    'P312-12': ('practice item P312-12', []),
    'P312-13': ('practice item P312-13', []),
    'P312-14': ('practice item P312-14', []),
    'P312-15': ('practice item P312-15', []),
    'P312-16': ('practice item P312-16', []),
    'SC312-1': ('section-check item SC312-1', []),
    'SC312-10': ('section-check item SC312-10', []),
    'SC312-11': ('section-check item SC312-11', []),
    'SC312-2': ('section-check item SC312-2', []),
    'SC312-3': ('section-check item SC312-3', []),
    'SC312-4': ('section-check item SC312-4', []),
    'SC312-5': ('section-check item SC312-5', []),
    'SC312-6': ('section-check item SC312-6', []),
    'SC312-7': ('section-check item SC312-7', []),
    'SC312-8': ('section-check item SC312-8', []),
    'SC312-9': ('section-check item SC312-9', []),
    'term:direct labor efficiency variance': ("term-bridge row 'direct labor efficiency variance'", []),
    'term:direct labor rate variance': ("term-bridge row 'direct labor rate variance'", []),
    'term:direct material price variance': ("term-bridge row 'direct material price variance'", []),
    'term:direct material usage variance': ("term-bridge row 'direct material usage variance'", []),
    'term:standard costing': ("term-bridge row 'standard costing'", []),
    'term:standard quantity allowed': ("term-bridge row 'standard quantity allowed'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C312-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C312-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
