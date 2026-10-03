# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C204-1': ('case item C204-1', []),
    'C204-2': ('case item C204-2', []),
    'C204-3': ('case item C204-3', []),
    'C204-4': ('case item C204-4', []),
    'C204-5': ('case item C204-5', []),
    'C204-6': ('case item C204-6', []),
    'C204-7': ('case item C204-7', []),
    'P204-01': ('practice item P204-01', []),
    'P204-02': ('practice item P204-02', []),
    'P204-03': ('practice item P204-03', []),
    'P204-04': ('practice item P204-04', []),
    'P204-05': ('practice item P204-05', []),
    'P204-06': ('practice item P204-06', []),
    'P204-07': ('practice item P204-07', []),
    'P204-08': ('practice item P204-08', []),
    'P204-09': ('practice item P204-09', []),
    'P204-10': ('practice item P204-10', []),
    'P204-11': ('practice item P204-11', []),
    'P204-12': ('practice item P204-12', []),
    'P204-13': ('practice item P204-13', []),
    'P204-14': ('practice item P204-14', []),
    'P204-15': ('practice item P204-15', []),
    'P204-16': ('practice item P204-16', []),
    'SC204-1': ('section-check item SC204-1', []),
    'SC204-10': ('section-check item SC204-10', []),
    'SC204-11': ('section-check item SC204-11', []),
    'SC204-2': ('section-check item SC204-2', []),
    'SC204-3': ('section-check item SC204-3', []),
    'SC204-4': ('section-check item SC204-4', []),
    'SC204-5': ('section-check item SC204-5', []),
    'SC204-6': ('section-check item SC204-6', []),
    'SC204-7': ('section-check item SC204-7', []),
    'SC204-8': ('section-check item SC204-8', []),
    'SC204-9': ('section-check item SC204-9', []),
    'term:cumulative average-time learning model': ("term-bridge row 'cumulative average-time learning model'", []),
    'term:cumulative output': ("term-bridge row 'cumulative output'", []),
    'term:incremental unit-time learning model': ("term-bridge row 'incremental unit-time learning model'", []),
    'term:learning curve': ("term-bridge row 'learning curve'", []),
    'term:learning rate': ("term-bridge row 'learning rate'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C204-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C204-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
