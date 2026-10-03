# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C316-1': ('case item C316-1', []),
    'C316-2': ('case item C316-2', []),
    'C316-3': ('case item C316-3', []),
    'C316-4': ('case item C316-4', []),
    'C316-5': ('case item C316-5', []),
    'C316-6': ('case item C316-6', []),
    'C316-7': ('case item C316-7', []),
    'P316-01': ('practice item P316-01', []),
    'P316-02': ('practice item P316-02', []),
    'P316-03': ('practice item P316-03', []),
    'P316-04': ('practice item P316-04', []),
    'P316-05': ('practice item P316-05', []),
    'P316-06': ('practice item P316-06', []),
    'P316-07': ('practice item P316-07', []),
    'P316-08': ('practice item P316-08', []),
    'P316-09': ('practice item P316-09', []),
    'P316-10': ('practice item P316-10', []),
    'P316-11': ('practice item P316-11', []),
    'P316-12': ('practice item P316-12', []),
    'P316-13': ('practice item P316-13', []),
    'P316-14': ('practice item P316-14', []),
    'P316-15': ('practice item P316-15', []),
    'P316-16': ('practice item P316-16', []),
    'SC316-1': ('section-check item SC316-1', []),
    'SC316-10': ('section-check item SC316-10', []),
    'SC316-11': ('section-check item SC316-11', []),
    'SC316-2': ('section-check item SC316-2', []),
    'SC316-3': ('section-check item SC316-3', []),
    'SC316-4': ('section-check item SC316-4', []),
    'SC316-5': ('section-check item SC316-5', []),
    'SC316-6': ('section-check item SC316-6', []),
    'SC316-7': ('section-check item SC316-7', []),
    'SC316-8': ('section-check item SC316-8', []),
    'SC316-9': ('section-check item SC316-9', []),
    'term:dual-rate transfer pricing': ("term-bridge row 'dual-rate transfer pricing'", []),
    'term:expropriation risk': ("term-bridge row 'expropriation risk'", []),
    'term:full-cost transfer price': ("term-bridge row 'full-cost transfer price'", []),
    'term:market-based transfer price': ("term-bridge row 'market-based transfer price'", []),
    'term:minimum transfer price': ("term-bridge row 'minimum transfer price'", []),
    'term:negotiated transfer price': ("term-bridge row 'negotiated transfer price'", []),
    'term:transfer price': ("term-bridge row 'transfer price'", []),
    'term:variable-cost transfer price': ("term-bridge row 'variable-cost transfer price'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C316-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C316-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
