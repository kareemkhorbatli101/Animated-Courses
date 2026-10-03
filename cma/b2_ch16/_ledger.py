# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C216-1': ('case item C216-1', []),
    'C216-2': ('case item C216-2', []),
    'C216-3': ('case item C216-3', []),
    'C216-4': ('case item C216-4', []),
    'C216-5': ('case item C216-5', []),
    'C216-6': ('case item C216-6', []),
    'C216-7': ('case item C216-7', []),
    'P216-01': ('practice item P216-01', []),
    'P216-02': ('practice item P216-02', []),
    'P216-03': ('practice item P216-03', []),
    'P216-04': ('practice item P216-04', []),
    'P216-05': ('practice item P216-05', []),
    'P216-06': ('practice item P216-06', []),
    'P216-07': ('practice item P216-07', []),
    'P216-08': ('practice item P216-08', []),
    'P216-09': ('practice item P216-09', []),
    'P216-10': ('practice item P216-10', []),
    'P216-11': ('practice item P216-11', []),
    'P216-12': ('practice item P216-12', []),
    'P216-13': ('practice item P216-13', []),
    'P216-14': ('practice item P216-14', []),
    'P216-15': ('practice item P216-15', []),
    'P216-16': ('practice item P216-16', []),
    'SC216-1': ('section-check item SC216-1', []),
    'SC216-2': ('section-check item SC216-2', []),
    'SC216-3': ('section-check item SC216-3', []),
    'SC216-4': ('section-check item SC216-4', []),
    'SC216-5': ('section-check item SC216-5', []),
    'SC216-6': ('section-check item SC216-6', []),
    'SC216-7': ('section-check item SC216-7', []),
    'SC216-8': ('section-check item SC216-8', []),
    'SC216-9': ('section-check item SC216-9', []),
    'term:appraisal costs': ("term-bridge row 'appraisal costs'", []),
    'term:continuous improvement': ("term-bridge row 'continuous improvement'", []),
    'term:cost of quality': ("term-bridge row 'cost of quality'", []),
    'term:external failure costs': ("term-bridge row 'external failure costs'", []),
    'term:ideal standard': ("term-bridge row 'ideal standard'", []),
    'term:internal failure costs': ("term-bridge row 'internal failure costs'", []),
    'term:kaizen': ("term-bridge row 'kaizen'", []),
    'term:pdca cycle': ("term-bridge row 'PDCA cycle'", []),
    'term:prevention costs': ("term-bridge row 'prevention costs'", []),
    'term:six sigma': ("term-bridge row 'Six Sigma'", []),
    'term:total quality management': ("term-bridge row 'total quality management'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C216-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
