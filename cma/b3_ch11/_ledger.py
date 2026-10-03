# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C311-1': ('case item C311-1', []),
    'C311-2': ('case item C311-2', []),
    'C311-3': ('case item C311-3', []),
    'C311-4': ('case item C311-4', []),
    'C311-5': ('case item C311-5', []),
    'C311-6': ('case item C311-6', []),
    'C311-7': ('case item C311-7', []),
    'P311-01': ('practice item P311-01', []),
    'P311-02': ('practice item P311-02', []),
    'P311-03': ('practice item P311-03', []),
    'P311-04': ('practice item P311-04', []),
    'P311-05': ('practice item P311-05', []),
    'P311-06': ('practice item P311-06', []),
    'P311-07': ('practice item P311-07', []),
    'P311-08': ('practice item P311-08', []),
    'P311-09': ('practice item P311-09', []),
    'P311-10': ('practice item P311-10', []),
    'P311-11': ('practice item P311-11', []),
    'P311-12': ('practice item P311-12', []),
    'P311-13': ('practice item P311-13', []),
    'P311-14': ('practice item P311-14', []),
    'P311-15': ('practice item P311-15', []),
    'P311-16': ('practice item P311-16', []),
    'SC311-1': ('section-check item SC311-1', []),
    'SC311-10': ('section-check item SC311-10', []),
    'SC311-11': ('section-check item SC311-11', []),
    'SC311-2': ('section-check item SC311-2', []),
    'SC311-3': ('section-check item SC311-3', []),
    'SC311-4': ('section-check item SC311-4', []),
    'SC311-5': ('section-check item SC311-5', []),
    'SC311-6': ('section-check item SC311-6', []),
    'SC311-7': ('section-check item SC311-7', []),
    'SC311-8': ('section-check item SC311-8', []),
    'SC311-9': ('section-check item SC311-9', []),
    'term:favorable variance': ("term-bridge row 'favorable variance'", []),
    'term:flexible-budget variance': ("term-bridge row 'flexible-budget variance'", []),
    'term:master-budget (static-budget) variance': ("term-bridge row 'master-budget (static-budget) variance'", []),
    'term:sales-price variance': ("term-bridge row 'sales-price variance'", []),
    'term:sales-volume variance': ("term-bridge row 'sales-volume variance'", []),
    'term:unfavorable variance': ("term-bridge row 'unfavorable variance'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C311-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C311-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
