# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C304-1': ('case item C304-1', []),
    'C304-2': ('case item C304-2', []),
    'C304-3': ('case item C304-3', []),
    'C304-4': ('case item C304-4', []),
    'C304-5': ('case item C304-5', []),
    'C304-6': ('case item C304-6', []),
    'C304-7': ('case item C304-7', []),
    'P304-01': ('practice item P304-01', []),
    'P304-02': ('practice item P304-02', []),
    'P304-03': ('practice item P304-03', []),
    'P304-04': ('practice item P304-04', []),
    'P304-05': ('practice item P304-05', []),
    'P304-06': ('practice item P304-06', []),
    'P304-07': ('practice item P304-07', []),
    'P304-08': ('practice item P304-08', []),
    'P304-09': ('practice item P304-09', []),
    'P304-10': ('practice item P304-10', []),
    'P304-11': ('practice item P304-11', []),
    'P304-12': ('practice item P304-12', []),
    'P304-13': ('practice item P304-13', []),
    'P304-14': ('practice item P304-14', []),
    'P304-15': ('practice item P304-15', []),
    'P304-16': ('practice item P304-16', []),
    'SC304-1': ('section-check item SC304-1', []),
    'SC304-10': ('section-check item SC304-10', []),
    'SC304-11': ('section-check item SC304-11', []),
    'SC304-2': ('section-check item SC304-2', []),
    'SC304-3': ('section-check item SC304-3', []),
    'SC304-4': ('section-check item SC304-4', []),
    'SC304-5': ('section-check item SC304-5', []),
    'SC304-6': ('section-check item SC304-6', []),
    'SC304-7': ('section-check item SC304-7', []),
    'SC304-8': ('section-check item SC304-8', []),
    'SC304-9': ('section-check item SC304-9', []),
    'term:activity-based budgeting': ("term-bridge row 'activity-based budgeting'", []),
    'term:contingency': ("term-bridge row 'contingency'", []),
    'term:financial budget': ("term-bridge row 'financial budget'", []),
    'term:master budget': ("term-bridge row 'master budget'", []),
    'term:operating budget': ("term-bridge row 'operating budget'", []),
    'term:project budget': ("term-bridge row 'project budget'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C304-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C304-5': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C304-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
