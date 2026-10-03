# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C308-1': ('case item C308-1', []),
    'C308-2': ('case item C308-2', []),
    'C308-3': ('case item C308-3', []),
    'C308-4': ('case item C308-4', []),
    'C308-5': ('case item C308-5', []),
    'C308-6': ('case item C308-6', []),
    'C308-7': ('case item C308-7', []),
    'P308-01': ('practice item P308-01', []),
    'P308-02': ('practice item P308-02', []),
    'P308-03': ('practice item P308-03', []),
    'P308-04': ('practice item P308-04', []),
    'P308-05': ('practice item P308-05', []),
    'P308-06': ('practice item P308-06', []),
    'P308-07': ('practice item P308-07', []),
    'P308-08': ('practice item P308-08', []),
    'P308-09': ('practice item P308-09', []),
    'P308-10': ('practice item P308-10', []),
    'P308-11': ('practice item P308-11', []),
    'P308-12': ('practice item P308-12', []),
    'P308-13': ('practice item P308-13', []),
    'P308-14': ('practice item P308-14', []),
    'P308-15': ('practice item P308-15', []),
    'P308-16': ('practice item P308-16', []),
    'SC308-1': ('section-check item SC308-1', []),
    'SC308-2': ('section-check item SC308-2', []),
    'SC308-3': ('section-check item SC308-3', []),
    'SC308-4': ('section-check item SC308-4', []),
    'SC308-5': ('section-check item SC308-5', []),
    'SC308-6': ('section-check item SC308-6', []),
    'SC308-7': ('section-check item SC308-7', []),
    'SC308-8': ('section-check item SC308-8', []),
    'SC308-9': ('section-check item SC308-9', []),
    'term:contribution margin': ("term-bridge row 'contribution margin'", []),
    'term:cost of goods manufactured': ("term-bridge row 'cost of goods manufactured'", []),
    'term:cost of goods sold budget': ("term-bridge row 'cost of goods sold budget'", []),
    'term:operating budget (budgeted income statement)': ("term-bridge row 'operating budget (budgeted income statement)'", []),
    'term:selling and administrative expense budget': ("term-bridge row 'selling and administrative expense budget'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C308-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
