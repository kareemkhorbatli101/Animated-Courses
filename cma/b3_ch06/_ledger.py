# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C306-1': ('case item C306-1', []),
    'C306-2': ('case item C306-2', []),
    'C306-3': ('case item C306-3', []),
    'C306-4': ('case item C306-4', []),
    'C306-5': ('case item C306-5', []),
    'C306-6': ('case item C306-6', []),
    'C306-7': ('case item C306-7', []),
    'P306-01': ('practice item P306-01', []),
    'P306-02': ('practice item P306-02', []),
    'P306-03': ('practice item P306-03', []),
    'P306-04': ('practice item P306-04', []),
    'P306-05': ('practice item P306-05', []),
    'P306-06': ('practice item P306-06', []),
    'P306-07': ('practice item P306-07', []),
    'P306-08': ('practice item P306-08', []),
    'P306-09': ('practice item P306-09', []),
    'P306-10': ('practice item P306-10', []),
    'P306-11': ('practice item P306-11', []),
    'P306-12': ('practice item P306-12', []),
    'P306-13': ('practice item P306-13', []),
    'P306-14': ('practice item P306-14', []),
    'P306-15': ('practice item P306-15', []),
    'P306-16': ('practice item P306-16', []),
    'SC306-1': ('section-check item SC306-1', []),
    'SC306-10': ('section-check item SC306-10', []),
    'SC306-11': ('section-check item SC306-11', []),
    'SC306-2': ('section-check item SC306-2', []),
    'SC306-3': ('section-check item SC306-3', []),
    'SC306-4': ('section-check item SC306-4', []),
    'SC306-5': ('section-check item SC306-5', []),
    'SC306-6': ('section-check item SC306-6', []),
    'SC306-7': ('section-check item SC306-7', []),
    'SC306-8': ('section-check item SC306-8', []),
    'SC306-9': ('section-check item SC306-9', []),
    'term:annual profit plan': ("term-bridge row 'annual profit plan'", []),
    'term:inventory policy': ("term-bridge row 'inventory policy'", []),
    'term:production budget': ("term-bridge row 'production budget'", []),
    'term:sales budget': ("term-bridge row 'sales budget'", []),
    'term:sales forecast': ("term-bridge row 'sales forecast'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C306-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C306-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
