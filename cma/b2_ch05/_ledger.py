# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C205-1': ('case item C205-1', []),
    'C205-2': ('case item C205-2', []),
    'C205-3': ('case item C205-3', []),
    'C205-4': ('case item C205-4', []),
    'C205-5': ('case item C205-5', []),
    'C205-6': ('case item C205-6', []),
    'C205-7': ('case item C205-7', []),
    'P205-01': ('practice item P205-01', []),
    'P205-02': ('practice item P205-02', []),
    'P205-03': ('practice item P205-03', []),
    'P205-04': ('practice item P205-04', []),
    'P205-05': ('practice item P205-05', []),
    'P205-06': ('practice item P205-06', []),
    'P205-07': ('practice item P205-07', []),
    'P205-08': ('practice item P205-08', []),
    'P205-09': ('practice item P205-09', []),
    'P205-10': ('practice item P205-10', []),
    'P205-11': ('practice item P205-11', []),
    'P205-12': ('practice item P205-12', []),
    'P205-13': ('practice item P205-13', []),
    'P205-14': ('practice item P205-14', []),
    'P205-15': ('practice item P205-15', []),
    'P205-16': ('practice item P205-16', []),
    'SC205-1': ('section-check item SC205-1', []),
    'SC205-10': ('section-check item SC205-10', []),
    'SC205-11': ('section-check item SC205-11', []),
    'SC205-2': ('section-check item SC205-2', []),
    'SC205-3': ('section-check item SC205-3', []),
    'SC205-4': ('section-check item SC205-4', []),
    'SC205-5': ('section-check item SC205-5', []),
    'SC205-6': ('section-check item SC205-6', []),
    'SC205-7': ('section-check item SC205-7', []),
    'SC205-8': ('section-check item SC205-8', []),
    'SC205-9': ('section-check item SC205-9', []),
    'term:actual costing': ("term-bridge row 'actual costing'", []),
    'term:allocation base': ("term-bridge row 'allocation base'", []),
    'term:applied overhead': ("term-bridge row 'applied overhead'", []),
    'term:normal costing': ("term-bridge row 'normal costing'", []),
    'term:predetermined overhead rate': ("term-bridge row 'predetermined overhead rate'", []),
    'term:standard costing': ("term-bridge row 'standard costing'", []),
    'term:standard quantity allowed': ("term-bridge row 'standard quantity allowed'", []),
    'term:variable overhead': ("term-bridge row 'variable overhead'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C205-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
