# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C309-1': ('case item C309-1', []),
    'C309-2': ('case item C309-2', []),
    'C309-3': ('case item C309-3', []),
    'C309-4': ('case item C309-4', []),
    'C309-5': ('case item C309-5', []),
    'C309-6': ('case item C309-6', []),
    'C309-7': ('case item C309-7', []),
    'P309-01': ('practice item P309-01', []),
    'P309-02': ('practice item P309-02', []),
    'P309-03': ('practice item P309-03', []),
    'P309-04': ('practice item P309-04', []),
    'P309-05': ('practice item P309-05', []),
    'P309-06': ('practice item P309-06', []),
    'P309-07': ('practice item P309-07', []),
    'P309-08': ('practice item P309-08', []),
    'P309-09': ('practice item P309-09', []),
    'P309-10': ('practice item P309-10', []),
    'P309-11': ('practice item P309-11', []),
    'P309-12': ('practice item P309-12', []),
    'P309-13': ('practice item P309-13', []),
    'P309-14': ('practice item P309-14', []),
    'P309-15': ('practice item P309-15', []),
    'P309-16': ('practice item P309-16', []),
    'SC309-1': ('section-check item SC309-1', []),
    'SC309-10': ('section-check item SC309-10', []),
    'SC309-11': ('section-check item SC309-11', []),
    'SC309-2': ('section-check item SC309-2', []),
    'SC309-3': ('section-check item SC309-3', []),
    'SC309-4': ('section-check item SC309-4', []),
    'SC309-5': ('section-check item SC309-5', []),
    'SC309-6': ('section-check item SC309-6', []),
    'SC309-7': ('section-check item SC309-7', []),
    'SC309-8': ('section-check item SC309-8', []),
    'SC309-9': ('section-check item SC309-9', []),
    'term:capital expenditure budget': ("term-bridge row 'capital expenditure budget'", []),
    'term:cash budget': ("term-bridge row 'cash budget'", []),
    'term:cash collections': ("term-bridge row 'cash collections'", []),
    'term:cash disbursements': ("term-bridge row 'cash disbursements'", []),
    'term:credit policy': ("term-bridge row 'credit policy'", []),
    'term:minimum cash balance': ("term-bridge row 'minimum cash balance'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C309-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C309-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
