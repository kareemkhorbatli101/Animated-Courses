# -*- coding: utf-8 -*-
"""Handout 1.6 — Orontes in January: the effect on the statements (from 1.3)

Figure F01-05 is an image, and its cells are not in the chapter's text: what
the text gives is the three points the chapter draws out of the grid, the three
totals that prove the equation, and the three classic mistakes. This handout
converts those, and nothing more. The first draft tried to rebuild the grid
itself and asked for a net equity effect of 120 for row 4 — a figure the book
never prints. The source check caught it, which is what it is for.

The language-focus box on describing an effect is converted here rather than in
Handout 1.7, because describing an effect is what this handout is about.
"""

_PTH = ['Rows of the grid', 'What they bring in', 'What they do not bring in',
        'Why']
_PT = [
    (['Rows 1 and 2', 'cash of 2,300 in total', 'no revenue',
      'money from owners and lenders is financing, not income'], 'w'),
    (['Row 4', None, None, None], 'd'),
    (['Row 6', None, None, None], 'd'),
]
_PTA = ['revenue of 300', 'no cash',
        'Orontes records revenue when it delivers the goods, not when the '
        'customer pays',
        'a liability', 'no cash until February',
        'net income does not change, because a dividend is not an expense']

_TOTH = ['The January totals', 'USD 000', 'What the three together prove']
_TOT = [
    (['Assets rose by', '2,380', 'the equation'], 'w'),
    (['Liabilities rose by', None, '—'], 'd'),
    (['Equity rose by', None, '—'], 'd'),
    (['Liabilities plus equity rose by', None, '—'], 'd'),
]
_TOTA = ['850', '1,530', '2,380']

_MISH = ['The transaction', 'What candidates assume',
         'What is actually true']
_MIS = [
    (['The board declares a cash dividend', 'it is an expense of the period',
      'it reduces retained earnings, not net income'], 'w'),
    (['Cash from borrowing, or from issuing shares', None, None], 'd'),
    (['Orontes buys equipment for cash', None, None], 'd'),
]
_MISA = ['the cash is revenue', 'it is financing',
         'it is an expense today',
         'one asset becomes another, and the cost becomes an expense later '
         'through depreciation']


HANDOUT = dict(
    n=6, book='CMA Part 1 · Section A · Chapter 1', source='1.3',
    title='Orontes in January: the effect on the statements',
    covers=['1.3-f', '1.3-g', '1.3-i'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read the three points after the effect grid in section '
                  '1.3 again before page 2',
             exercises=[

            dict(t='T5',
                 d='Complete the table from the data panel. The first row is '
                   'done, and the chapter makes exactly these three points '
                   'about the grid.',
                 datagrid=('Orontes Foods, Inc., January 2025 (USD 000)',
                           ['#', 'What happened', 'The entry'],
                           [['1', 'Issued 100,000 new shares of $1 par '
                             'common stock for $15 per share, in cash',
                             'Dr Cash 1,500; Cr Common stock 100; Cr '
                             'Additional paid-in capital 1,400'],
                            ['2', 'Borrowed on a 5-year note at 6% interest',
                             'Dr Cash 800; Cr Notes payable 800'],
                            ['3', 'Bought a bottling line and paid cash',
                             'Dr Equipment 1,200; Cr Cash 1,200'],
                            ['4', 'Sold olive oil on credit for 300; the '
                             'goods had cost 180',
                             'Dr Accounts receivable 300; Cr Sales revenue '
                             '300; Dr Cost of goods sold 180; Cr Inventory '
                             '180'],
                            ['5', 'Paid January wages in cash',
                             'Dr Wages expense 40; Cr Cash 40'],
                            ['6', 'Declared a cash dividend, payable '
                             'February 15',
                             'Dr Retained earnings (dividends declared) 50; '
                             'Cr Dividends payable 50']],
                           [5, 38, 57]),
                 heads=_PTH, rows=_PT, ans=_PTA, w=[14, 22, 22, 42]),

            dict(t='T5',
                 d='Complete the three totals, then add the last two to fill '
                   'the fourth line. The first line is done.',
                 heads=_TOTH, rows=_TOT, ans=_TOTA, w=[42, 20, 38]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Complete the three classic mistakes. The first row is '
                   'done.',
                 heads=_MISH, rows=_MIS, ans=_MISA, w=[30, 28, 42]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'Rows 1 and 2 bring in cash and no revenue, because '
                     'money from owners and from lenders is {financing}. Row '
                     '3 moves cash out and changes no total at all, because '
                     'one asset becomes another, and the cost of the '
                     'bottling line will reach the income statement later '
                     'through {depreciation}.',

                     'Row 4 creates revenue with no cash, because Orontes '
                     'records revenue when it {delivers} the goods. Row 5 is '
                     'the only one of the six that moves cash from trading, '
                     'which a cash flow statement calls {operating}.',

                     'Row 6 reduces retained earnings and creates a '
                     '{liability}. No cash moves until {February}, and net '
                     'income does not change, because the dividend is a '
                     '{distribution} to owners rather than an {expense}.',
                 ],
                 whys={'financing': 'Money from owners and lenders.',
                       'depreciation': 'How the cost of equipment becomes an '
                                       'expense.',
                       'delivers': 'When revenue is recorded.',
                       'operating': 'Cash from trading.',
                       'liability': 'Dividends payable.',
                       'February': 'When the dividend is paid.',
                       'distribution': 'To owners.',
                       'expense': 'What a dividend is not.'},
                 extras=['revenue', 'investing', 'inventory', 'interest']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Rows 1 and 2 of the grid bring in cash of 2,300 and no '
                 'revenue. The reason is that:',
                 ['the cash has not been banked yet',
                  'money from owners and lenders is financing, not income',
                  'the revenue will be recorded in February',
                  'the amounts are too large to be revenue'], 1,
                 'Cash from borrowing or from issuing shares is financing.'),
                ('Row 4 creates revenue of 300 and no cash. This is because '
                 'Orontes records revenue:',
                 ['when the invoice is issued and paid',
                  'when it delivers the goods, not when the customer pays',
                  'at the end of the quarter',
                  'only when the cash is received'], 1,
                 'The accrual basis records revenue on delivery.'),
                ('Row 6 reduces retained earnings by 50 and creates a '
                 'liability. What happens to net income?',
                 ['It falls by 50', 'It does not change', 'It rises by 50',
                  'It falls by 50 in February instead'], 1,
                 'A dividend is not an expense, so net income does not '
                 'change.'),
                ('Buying the bottling line for cash is not an expense of '
                 'January because:',
                 ['the amount is immaterial',
                  'one asset becomes another, and the cost becomes an '
                  'expense later through depreciation',
                  'equipment is not an asset until it is used',
                  'the cash will be refunded'], 1,
                 'The cost reaches the income statement later, through '
                 'depreciation.'),
                ('What do the three totals of the grid prove?',
                 ['that net income equals the change in cash',
                  'that the accounting equation still balances',
                  'that the dividend was an expense',
                  'that every row moved cash'], 1,
                 'Assets rose by 2,380, and liabilities and equity rose by '
                 '850 and 1,530, which is the same total.'),
                ('A question says: the effect of this transaction is to '
                 'increase assets and increase equity. Which January '
                 'transaction does it describe?',
                 ['buying the bottling line for cash',
                  'issuing shares for cash', 'paying wages in cash',
                  'declaring the dividend'], 1,
                 'Cash rises and contributed capital rises by the same '
                 'amount.'),
                ('Equity increased by 1,530 in January. Which phrase uses '
                 'that figure correctly?',
                 ['equity increased to 1,530',
                  'equity increased by 1,530',
                  'an increase of equity in 1,530',
                  'equity was debited for 1,530'], 1,
                 'increase by names the change; increase to would name the '
                 'new total.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Rows 1 and 2 bring in cash but create no revenue.', True,
                 ''),
                ('Row 4 brings in cash of 300.', False,
                 'It creates revenue of 300 and no cash.'),
                ('Row 6 moves cash in January.', False,
                 'No cash moves until February, when the dividend is paid.'),
                ('A dividend reduces retained earnings but not net income.',
                 True, ''),
                ('Cash received from issuing shares is revenue.', False,
                 'It is financing, not income.'),
                ('Buying equipment for cash is an expense of the month in '
                 'which it is bought.', False,
                 'One asset becomes another; the cost becomes an expense '
                 'later, through depreciation.'),
                ('The totals of the grid show that assets rose by 2,380.',
                 True, ''),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the example beside each '
                 'pattern for describing an effect.',
                 heads=('Pattern', 'The example the chapter gives'),
                 left=['debit X, credit Y',
                       'X is debited for an amount',
                       'an increase in + the item',
                       'an increase of + the amount',
                       'increase by + the change',
                       'increase to + the new total'],
                 right=['Cash is debited for 1,500',
                        'Debit Equipment, credit Cash',
                        'an increase in assets',
                        'an increase of 2,380',
                        'equity increased by 1,530',
                        'the figure the change arrives at, not the change'],
                 ans=['B', 'A', 'C', 'D', 'E', 'F']),

            dict(t='T6', d='Write O for an operating cash flow, I for '
                 'investing, F for financing, N if no cash moves.',
                 items=['issuing shares for cash',
                        'borrowing on a 5-year note',
                        'buying a bottling line for cash',
                        'selling goods on credit',
                        'paying wages in cash',
                        'declaring a dividend payable next month',
                        'paying a dividend declared last month',
                        'receiving cash in advance for goods not yet '
                        'delivered',
                        'recording interest owed but not yet paid'],
                 ans=['F', 'F', 'I', 'N', 'O', 'N', 'F', 'O', 'N']),

            dict(t='T4', d='Write the letter of the effect beside each '
                 'January transaction.',
                 heads=('Transaction', 'Its effect on the equation'),
                 left=['issuing shares for 1,500 in cash',
                       'borrowing 800 on a note',
                       'buying equipment for 1,200 in cash',
                       'paying wages of 40 in cash',
                       'declaring a dividend of 50'],
                 right=['assets and equity both fall',
                        'assets and equity both rise',
                        'assets and liabilities both rise',
                        'liabilities rise and equity falls',
                        'one asset rises and another falls'],
                 ans=['B', 'C', 'E', 'A', 'D']),
        ]),
    ],
)
