# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C315-1': ('case item C315-1', []),
    'C315-2': ('case item C315-2', []),
    'C315-3': ('case item C315-3', []),
    'C315-4': ('case item C315-4', []),
    'C315-5': ('case item C315-5', []),
    'C315-6': ('case item C315-6', []),
    'C315-7': ('case item C315-7', []),
    'P315-01': ('practice item P315-01', []),
    'P315-02': ('practice item P315-02', []),
    'P315-03': ('practice item P315-03', []),
    'P315-04': ('practice item P315-04', []),
    'P315-05': ('practice item P315-05', []),
    'P315-06': ('practice item P315-06', []),
    'P315-07': ('practice item P315-07', []),
    'P315-08': ('practice item P315-08', []),
    'P315-09': ('practice item P315-09', []),
    'P315-10': ('practice item P315-10', []),
    'P315-11': ('practice item P315-11', []),
    'P315-12': ('practice item P315-12', []),
    'P315-13': ('practice item P315-13', []),
    'P315-14': ('practice item P315-14', []),
    'P315-15': ('practice item P315-15', []),
    'P315-16': ('practice item P315-16', []),
    'SC315-1': ('section-check item SC315-1', []),
    'SC315-10': ('section-check item SC315-10', []),
    'SC315-11': ('section-check item SC315-11', []),
    'SC315-2': ('section-check item SC315-2', []),
    'SC315-3': ('section-check item SC315-3', []),
    'SC315-4': ('section-check item SC315-4', []),
    'SC315-5': ('section-check item SC315-5', []),
    'SC315-6': ('section-check item SC315-6', []),
    'SC315-7': ('section-check item SC315-7', []),
    'SC315-8': ('section-check item SC315-8', []),
    'SC315-9': ('section-check item SC315-9', []),
    'term:common cost': ("term-bridge row 'common cost'", []),
    'term:controllable margin': ("term-bridge row 'controllable margin'", []),
    'term:cost center': ("term-bridge row 'cost center'", []),
    'term:incremental cost allocation': ("term-bridge row 'incremental cost allocation'", []),
    'term:investment center': ("term-bridge row 'investment center'", []),
    'term:profit center': ("term-bridge row 'profit center'", []),
    'term:revenue center': ("term-bridge row 'revenue center'", []),
    'term:segment margin': ("term-bridge row 'segment margin'", []),
    'term:stand-alone cost allocation': ("term-bridge row 'stand-alone cost allocation'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C315-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
