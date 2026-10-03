# -*- coding: utf-8 -*-
"""Handout 1.7 — Orontes in February: entries and effects  (from section 1.3)

The Your Turn set. The chapter gives all six February transactions with their
amounts, and its answer pages give the journal entries and the full effect line
for rows 4, 5 and 6. Rows 1 to 3 are in the book as a figure, so their cells are
not in the text: this handout asks for the three the book states and prints the
other three as data.
"""

_JH = ['#', 'Date', 'Account', 'Debit', 'Credit']
_JW = [6, 12, 48, 17, 17]
_J = [
    (['4', 'Feb 12', 'Cash', '60', ''], 'w'),
    (['', '', 'Contract liability (unearned revenue)', '', '60'], 'w'),
    (['5', 'Feb 15', None, None, ''], 'd'),
    (['', '', None, '', None], 'd'),
    (['6', 'Feb 28', None, None, ''], 'd'),
    (['', '', None, '', None], 'd'),
]
_JA = ['Dividends payable', '50', 'Cash', '50',
       'Interest expense', '4', 'Interest payable', '4']

_EH = ['#', 'Assets', 'Liabilities', 'Equity', 'Net income', 'Cash flow']
_EW = [6, 18, 18, 18, 18, 22]
_E = [
    (['4', '+60', '+60', '0', '0', 'operating +60'], 'w'),
    (['5', None, None, '0', '0', None], 'd'),
    (['6', '0', None, None, None, None], 'd'),
]
_EA = ['(50)', '(50)', 'financing (50)',
       '+4', '(4)', '(4)', 'none']

_TH = ['The February transaction', 'What it creates']
_T = [
    (['Rent paid in advance for twelve months', 'an asset'], 'w'),
    (['A hotel group pays cash in advance for pastries not yet delivered',
      None], 'd'),
    (['Interest owed on the bank note but not yet paid', None], 'd'),
]
_TA = ['a liability', 'a liability']


HANDOUT = dict(
    n=7, book='CMA Part 1 · Section A · Chapter 1', source='1.3',
    title='Orontes in February: entries and effects',
    covers=['1.3-h'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read the Your Turn set in section 1.3 again before page 2',
             exercises=[

            dict(t='T5',
                 d='Write the journal entries for rows 5 and 6. Row 4 is '
                   'done, and every amount is in the data panel.',
                 datagrid=('Orontes Foods, Inc., February 2025 (USD 000)',
                           ['#', 'Date', 'What happened', 'Amount'],
                           [['1', 'Feb 3', 'Paid a supplier for olives '
                             'bought on credit in January', '150'],
                            ['2', 'Feb 8', 'Collected part of the January '
                             'receivable from GreenBasket Supermarkets',
                             '200'],
                            ['3', 'Feb 10', 'Paid 12 months of warehouse '
                             'rent in advance', '24'],
                            ['4', 'Feb 12', 'A Dubai hotel group paid cash '
                             'in advance for pastries that Orontes will '
                             'deliver in March', '60'],
                            ['5', 'Feb 15', 'Paid the dividend declared on '
                             'January 31', '50'],
                            ['6', 'Feb 28', 'Recorded one month of interest '
                             'on the bank note, not yet paid', '4']],
                           [5, 10, 70, 15]),
                 heads=_JH, rows=_J, ans=_JA, w=_JW),

            dict(t='T5',
                 d='Complete the effect of rows 5 and 6. Write the amount '
                   'with a sign, or 0, or the cash-flow category. Row 4 is '
                   'done.',
                 heads=_EH, rows=_E, ans=_EA, w=_EW),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Write what each February transaction creates. The first '
                   'row is done.',
                 heads=_TH, rows=_T, ans=_TA, w=[64, 36]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'Row 4 is a {liability}, not revenue: Orontes must '
                     'still {deliver} the pastries. Cash received in '
                     '{advance} is a liability, because the company owes the '
                     'customer goods or services.',

                     'Row 5 reduces a liability and reduces {cash}. Retained '
                     'earnings fell in {January}, when the dividend was '
                     '{declared}, so February changes neither equity nor net '
                     'income.',

                     'Row 6 is an {accrued} expense: the interest is an '
                     'expense of February even though Orontes has not paid '
                     'it. An expense is recorded when it is {incurred}, and '
                     'the timing of the {cash} does not decide the period.',
                 ],
                 whys={'liability': 'What cash received in advance creates.',
                       'deliver': 'What Orontes must still do.',
                       'advance': 'When the cash arrived.',
                       'cash': 'What row 5 reduces, and what does not decide '
                               'the period.',
                       'January': 'When retained earnings fell.',
                       'declared': 'What happened to the dividend then.',
                       'accrued': 'An expense incurred before it is paid.',
                       'incurred': 'When an expense is recorded.'},
                 extras=['asset', 'prepaid', 'earned', 'paid']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('On February 10, Orontes pays 24 for 12 months of warehouse '
                 'rent in advance. How does the payment appear immediately '
                 'after it is made?',
                 ['As an asset of 24', 'As an expense of 24',
                  'As a liability of 24',
                  'It is not recorded until the end of the month.'], 0,
                 'Prepaid rent is an asset: Orontes has paid for 12 months '
                 'of future use.'),
                ('A Dubai hotel group pays Orontes 60 in advance for '
                 'pastries to be delivered in March. At the end of February '
                 'Orontes reports:',
                 ['a liability of 60', 'revenue of 60',
                  'an asset of 60 and revenue of 60',
                  'nothing until the goods are delivered'], 0,
                 'Cash increases and Orontes owes the customer the goods, '
                 'which is a contract liability.'),
                ('Paying the dividend declared on January 31:',
                 ['reduces net income in February',
                  'reduces a liability and reduces cash',
                  'reduces retained earnings in February',
                  'has no effect on any statement'], 1,
                 'Retained earnings fell in January, when the dividend was '
                 'declared.'),
                ('Orontes records one month of interest on the bank note and '
                 'has not paid it. The entry:',
                 ['moves cash out of the company',
                  'creates a liability and reduces equity',
                  'creates an asset',
                  'waits until the interest is paid'], 1,
                 'It is an accrued expense: a liability of 4 and a charge '
                 'against February.'),
                ('Paying a supplier for olives bought on credit in January:',
                 ['is an expense of February',
                  'reduces a liability and reduces cash',
                  'increases inventory',
                  'creates a prepaid expense'], 1,
                 'The expense belonged to January; February only settles the '
                 'payable.'),
                ('Collecting part of the January receivable:',
                 ['creates revenue in February',
                  'changes one asset into another',
                  'reduces a liability',
                  'increases equity'], 1,
                 'The cash receipt only changes the receivable into cash.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Cash received in advance is revenue.', False,
                 'It is a liability until the goods or services are '
                 'delivered.'),
                ('Cash paid in advance is an asset.', True, ''),
                ('An accrued expense creates a liability.', True, ''),
                ('Paying a dividend that was declared last month reduces '
                 'equity this month.', False,
                 'Equity fell when the dividend was declared.'),
                ('The interest of 4 is an expense of February even though it '
                 'has not been paid.', True, ''),
                ('Collecting a receivable creates revenue.', False,
                 'The revenue was recorded when the goods were delivered.'),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T6', d='Write A if the February transaction creates an '
                 'asset, L if it creates a liability, N if it creates '
                 'neither.',
                 items=['paying a supplier for olives bought on credit',
                        'collecting part of a receivable',
                        'paying 12 months of rent in advance',
                        'a hotel group paying in advance for pastries',
                        'paying a dividend declared last month',
                        'recording interest owed but not paid'],
                 ans=['N', 'N', 'A', 'L', 'N', 'L']),

            dict(t='T4', d='Write the letter of the entry beside each '
                 'February transaction.',
                 heads=('Transaction', 'The entry'),
                 left=['the dividend declared in January is paid',
                       'interest is owed on the bank note but not paid',
                       'a hotel group pays in advance for pastries'],
                 right=['Dr Cash 60; Cr Contract liability (unearned '
                        'revenue) 60',
                        'Dr Dividends payable 50; Cr Cash 50',
                        'Dr Interest expense 4; Cr Interest payable 4'],
                 ans=['B', 'C', 'A']),

            dict(t='T8', d='Put the six February transactions in date order, '
                 'writing 1 to 6.',
                 items=['the dividend is paid',
                        'the supplier is paid for January olives',
                        'interest is recorded but not paid',
                        'rent is paid 12 months in advance',
                        'the hotel group pays in advance',
                        'part of the January receivable is collected'],
                 ans=['5', '1', '6', '3', '4', '2']),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['prepaid expense',
                       'contract liability (unearned revenue)',
                       'accrual basis', 'cash basis'],
                 right=['الأساس النقدي',
                        'مصروف مدفوع مقدماً',
                        'أساس الاستحقاق',
                        'التزام العقد (إيراد مقبوض مقدماً)'],
                 ans=['B', 'D', 'C', 'A']),
        ]),
    ],
)
