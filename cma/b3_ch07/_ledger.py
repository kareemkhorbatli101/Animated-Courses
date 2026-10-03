# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C307-1': ('case item C307-1', []),
    'C307-2': ('case item C307-2', []),
    'C307-3': ('case item C307-3', []),
    'C307-4': ('case item C307-4', []),
    'C307-5': ('case item C307-5', []),
    'C307-6': ('case item C307-6', []),
    'C307-7': ('case item C307-7', []),
    'P307-01': ('practice item P307-01', []),
    'P307-02': ('practice item P307-02', []),
    'P307-03': ('practice item P307-03', []),
    'P307-04': ('practice item P307-04', []),
    'P307-05': ('practice item P307-05', []),
    'P307-06': ('practice item P307-06', []),
    'P307-07': ('practice item P307-07', []),
    'P307-08': ('practice item P307-08', []),
    'P307-09': ('practice item P307-09', []),
    'P307-10': ('practice item P307-10', []),
    'P307-11': ('practice item P307-11', []),
    'P307-12': ('practice item P307-12', []),
    'P307-13': ('practice item P307-13', []),
    'P307-14': ('practice item P307-14', []),
    'P307-15': ('practice item P307-15', []),
    'P307-16': ('practice item P307-16', []),
    'SC307-1': ('section-check item SC307-1', []),
    'SC307-2': ('section-check item SC307-2', []),
    'SC307-3': ('section-check item SC307-3', []),
    'SC307-4': ('section-check item SC307-4', []),
    'SC307-5': ('section-check item SC307-5', []),
    'SC307-6': ('section-check item SC307-6', []),
    'SC307-7': ('section-check item SC307-7', []),
    'SC307-8': ('section-check item SC307-8', []),
    'SC307-9': ('section-check item SC307-9', []),
    'term:direct labor budget': ("term-bridge row 'direct labor budget'", []),
    'term:direct materials budget': ("term-bridge row 'direct materials budget'", []),
    'term:feasibility': ("term-bridge row 'feasibility'", []),
    'term:just-in-time (jit)': ("term-bridge row 'just-in-time (JIT)'", []),
    'term:overhead budget': ("term-bridge row 'overhead budget'", []),
    'term:procurement policy': ("term-bridge row 'procurement policy'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C307-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C307-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
