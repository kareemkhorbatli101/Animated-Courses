# -*- coding: utf-8 -*-
"""Derived from the chapter itself by gen.py. Do not edit."""
LEDGER = {
    'C317-1': ('case item C317-1', []),
    'C317-2': ('case item C317-2', []),
    'C317-3': ('case item C317-3', []),
    'C317-4': ('case item C317-4', []),
    'C317-5': ('case item C317-5', []),
    'C317-6': ('case item C317-6', []),
    'C317-7': ('case item C317-7', []),
    'P317-01': ('practice item P317-01', []),
    'P317-02': ('practice item P317-02', []),
    'P317-03': ('practice item P317-03', []),
    'P317-04': ('practice item P317-04', []),
    'P317-05': ('practice item P317-05', []),
    'P317-06': ('practice item P317-06', []),
    'P317-07': ('practice item P317-07', []),
    'P317-08': ('practice item P317-08', []),
    'P317-09': ('practice item P317-09', []),
    'P317-10': ('practice item P317-10', []),
    'P317-11': ('practice item P317-11', []),
    'P317-12': ('practice item P317-12', []),
    'P317-13': ('practice item P317-13', []),
    'P317-14': ('practice item P317-14', []),
    'P317-15': ('practice item P317-15', []),
    'P317-16': ('practice item P317-16', []),
    'SC317-1': ('section-check item SC317-1', []),
    'SC317-10': ('section-check item SC317-10', []),
    'SC317-11': ('section-check item SC317-11', []),
    'SC317-2': ('section-check item SC317-2', []),
    'SC317-3': ('section-check item SC317-3', []),
    'SC317-4': ('section-check item SC317-4', []),
    'SC317-5': ('section-check item SC317-5', []),
    'SC317-6': ('section-check item SC317-6', []),
    'SC317-7': ('section-check item SC317-7', []),
    'SC317-8': ('section-check item SC317-8', []),
    'SC317-9': ('section-check item SC317-9', []),
    'term:asset turnover': ("term-bridge row 'asset turnover'", []),
    'term:capital charge': ("term-bridge row 'capital charge'", []),
    'term:investment base': ("term-bridge row 'investment base'", []),
    'term:required rate of return': ("term-bridge row 'required rate of return'", []),
    'term:residual income (ri)': ("term-bridge row 'residual income (RI)'", []),
    'term:return on investment (roi)': ("term-bridge row 'return on investment (ROI)'", []),
    'term:return on sales (operating margin)': ("term-bridge row 'return on sales (operating margin)'", []),
    'term:suboptimization': ("term-bridge row 'suboptimization'", []),
}

# Units that cannot be converted faithfully, and why. They
# are recorded rather than dropped quietly, so the gap is
# visible in the build and in the diff.
OMIT = {
    'C317-1': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
    'C317-6': 'the book answers it with a drag-and-drop or a worked table rather than a single value',
}
