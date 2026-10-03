# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C218-1': ('case item C218-1', []),
    'C218-2': ('case item C218-2', []),
    'C218-3': ('case item C218-3', []),
    'C218-4': ('case item C218-4', []),
    'C218-5': ('case item C218-5', []),
    'C218-6': ('case item C218-6', []),
    'C218-7': ('case item C218-7', []),
    'P218-01': ('practice item P218-01', []),
    'P218-02': ('practice item P218-02', []),
    'P218-03': ('practice item P218-03', []),
    'P218-04': ('practice item P218-04', []),
    'P218-05': ('practice item P218-05', []),
    'P218-06': ('practice item P218-06', []),
    'P218-07': ('practice item P218-07', []),
    'P218-08': ('practice item P218-08', []),
    'P218-09': ('practice item P218-09', []),
    'P218-10': ('practice item P218-10', []),
    'P218-11': ('practice item P218-11', []),
    'P218-12': ('practice item P218-12', []),
    'P218-13': ('practice item P218-13', []),
    'P218-14': ('practice item P218-14', []),
    'P218-15': ('practice item P218-15', []),
    'P218-16': ('practice item P218-16', []),
    'P218-17': ('practice item P218-17', []),
    'SC218-1': ('section-check item SC218-1', []),
    'SC218-10': ('section-check item SC218-10', []),
    'SC218-11': ('section-check item SC218-11', []),
    'SC218-2': ('section-check item SC218-2', []),
    'SC218-3': ('section-check item SC218-3', []),
    'SC218-4': ('section-check item SC218-4', []),
    'SC218-5': ('section-check item SC218-5', []),
    'SC218-6': ('section-check item SC218-6', []),
    'SC218-7': ('section-check item SC218-7', []),
    'SC218-8': ('section-check item SC218-8', []),
    'SC218-9': ('section-check item SC218-9', []),
    'term:activity analysis': ("term-bridge row 'activity analysis'", []),
    'term:authoritative standard': ("term-bridge row 'authoritative standard'", []),
    'term:currently attainable standard': ("term-bridge row 'currently attainable standard'", []),
    'term:normal loss': ("term-bridge row 'normal loss'", []),
    'term:participative standard': ("term-bridge row 'participative standard'", []),
    'term:price standard': ("term-bridge row 'price standard'", []),
    'term:quantity standard': ("term-bridge row 'quantity standard'", []),
    'term:standard cost card': ("term-bridge row 'standard cost card'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C218-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
