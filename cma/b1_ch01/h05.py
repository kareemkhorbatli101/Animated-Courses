# -*- coding: utf-8 -*-
"""Handout 1.5 — Orontes in January: the six journal entries (from 1.3)

The worked example of section 1.3, with the entries taken apart. The first
entry is printed in full as the pattern; after that the table removes account
names in some lines and amounts in others, which is what the fill-in-the-table
type is for. The 4,070 totals stay on the page, so a student who has got a
line wrong can see it without the key.
"""

_JH = ['#', 'Date', 'Account', 'Debit', 'Credit']
_JW = [6, 12, 48, 17, 17]

# Entry 1 worked in full. After that: entry 2 is missing its accounts, entry 3
# its amounts, entry 4 a mix, entries 5 and 6 everything but the date.
_J = [
    (['1', 'Jan 2', 'Cash', '1,500', ''], 'w'),
    (['', '', 'Common stock', '', '100'], 'w'),
    (['', '', 'Additional paid-in capital', '', '1,400'], 'w'),
    (['2', 'Jan 5', None, '800', ''], 'd'),
    (['', '', None, '', '800'], 'd'),
    (['3', 'Jan 10', 'Equipment', None, ''], 'd'),
    (['', '', 'Cash', '', None], 'd'),
    (['4', 'Jan 18', None, '300', ''], 'd'),
    (['', '', 'Sales revenue', '', None], 'd'),
    (['', '', 'Cost of goods sold', None, ''], 'd'),
    (['', '', None, '', '180'], 'd'),
    (['5', 'Jan 31', None, None, ''], 'd'),
    (['', '', 'Cash', '', None], 'd'),
    (['6', 'Jan 31', None, None, ''], 'd'),
    (['', '', None, '', '50'], 'd'),
    (['', 'Totals', '', '4,070', '4,070'], 'w'),
]
_JA = ['Cash', 'Notes payable (long-term)',
       '1,200', '1,200',
       'Accounts receivable', '300', '180', 'Inventory',
       'Wages expense', '40', '40',
       'Retained earnings (dividends declared)', '50', 'Dividends payable']

_TOTH = ['What rose in January', 'USD 000']
_TOT = [(['Assets', '2,380'], 'w'),
        (['Liabilities', None], 'd'),
        (['Equity', None], 'd'),
        (['Cash brought in by entries 1 and 2 together', None], 'd'),
        (['Revenue recorded by entry 4', None], 'd')]
_TOTA = ['850', '1,530', '2,300', '300']


HANDOUT = dict(
    n=5, book='CMA Part 1 · Section A · Chapter 1', source='1.3',
    title='Orontes in January: the six journal entries',
    covers=['1.3-e', '1.3-g', '1.3-k'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read the worked example in section 1.3 again before '
                  'page 2',
             exercises=[

            dict(t='T5',
                 d='Complete the journal. Some lines are missing an account '
                   'and some an amount. Entry 1 and the totals are given.',
                 datagrid=('Orontes Foods, Inc., January 2025 (USD 000)',
                           ['#', 'Date', 'What happened'],
                           [['1', 'Jan 2', 'Issued 100,000 new shares of $1 '
                             'par common stock for $15 per share, in cash.'],
                            ['2', 'Jan 5', 'Borrowed cash from Levant '
                             'Commerce Bank on a 5-year note at 6% '
                             'interest. Amount 800.'],
                            ['3', 'Jan 10', 'Bought a new bottling line for '
                             'the Amman plant and paid cash. Amount 1,200.'],
                            ['4', 'Jan 18', 'Sold olive oil to GreenBasket '
                             'Supermarkets on credit for 300. The goods had '
                             'cost Orontes 180.'],
                            ['5', 'Jan 31', 'Paid January wages to plant '
                             'workers in cash. Amount 40.'],
                            ['6', 'Jan 31', 'The board declared a cash '
                             'dividend of 50, payable on February 15.']],
                           [6, 12, 82]),
                 heads=_JH, rows=_J, ans=_JA, w=_JW),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Complete the table from the journal entries in the data '
                   'panel. The first line is given.',
                 datagrid=('The January entries, in brief (USD 000)',
                           ['#', 'Entry'],
                           [['1', 'Dr Cash 1,500; Cr Common stock 100; Cr '
                             'Additional paid-in capital 1,400'],
                            ['2', 'Dr Cash 800; Cr Notes payable '
                             '(long-term) 800'],
                            ['3', 'Dr Equipment 1,200; Cr Cash 1,200'],
                            ['4', 'Dr Accounts receivable 300; Cr Sales '
                             'revenue 300; Dr Cost of goods sold 180; Cr '
                             'Inventory 180'],
                            ['5', 'Dr Wages expense 40; Cr Cash 40'],
                            ['6', 'Dr Retained earnings (dividends '
                             'declared) 50; Cr Dividends payable 50']],
                           [6, 94]),
                 heads=_TOTH, rows=_TOT, ans=_TOTA, w=[62, 38]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'Entries 1 and 2 bring in cash of 2,300 in total, and '
                     'no revenue at all. Money from owners and from lenders '
                     'is {financing}, and it is not {income}.',

                     'Entry 4 creates revenue of 300 and no cash. Orontes '
                     'records the revenue when it {delivers} the goods, not '
                     'when the customer {pays}.',

                     'Entry 6 reduces retained earnings by 50 and creates a '
                     'liability. No cash moves until February, and net '
                     '{income} does not change, because a dividend is a '
                     '{distribution} to owners rather than an {expense}.',

                     'Entry 3 is not an expense of January either. One asset '
                     'becomes another: cash becomes {equipment}, and the cost '
                     'becomes an expense later, through {depreciation}.',
                 ],
                 whys={'financing': 'What money from owners and lenders is.',
                       'income': 'What financing is not, and what a dividend '
                                 'does not reduce.',
                       'delivers': 'When revenue is recorded.',
                       'pays': 'When it is not.',
                       'distribution': 'To owners.',
                       'expense': 'What a dividend is not.',
                       'equipment': 'What the cash became.',
                       'depreciation': 'How the cost becomes an expense.'},
                 extras=['investing', 'operating', 'inventory', 'interest']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Orontes borrows 800 from Levant Commerce Bank. The cash it '
                 'receives is:',
                 ['revenue of 800', 'financing, and not revenue',
                  'a gain of 800', 'an investment by owners'], 1,
                 'Cash from borrowing or from issuing shares is financing, '
                 'not revenue.'),
                ('Orontes buys a bottling line for 1,200 in cash. In January '
                 'this is:',
                 ['an expense of 1,200',
                  'not an expense: one asset becomes another',
                  'a loss of 1,200', 'a distribution to owners'], 1,
                 'The cost becomes an expense later, through depreciation.'),
                ('Entry 4 records sales revenue of 300 and no cash receipt. '
                 'That is because Orontes records revenue:',
                 ['when it issues the invoice and collects the cash',
                  'when it delivers the goods',
                  'when the customer pays',
                  'at the end of the month'], 1,
                 'Revenue is recorded on delivery, not on payment.'),
                ('The dividend declared on January 31:',
                 ['reduces net income by 50',
                  'reduces retained earnings by 50 and creates a liability',
                  'reduces cash by 50 in January',
                  'has no effect until it is paid'], 1,
                 'A dividend is not an expense; net income does not change '
                 'and no cash moves until February.'),
                ('What do the January entries bring in as cash from entries '
                 '1 and 2 together?',
                 ['300', '800', '1,500', '2,300'], 3,
                 'Entries 1 and 2 bring in 1,500 and 800, which is 2,300, '
                 'and none of it is revenue.'),
                ('Why do the debits and the credits of the six entries both '
                 'total 4,070?',
                 ['because the equation was already in balance',
                  'because every transaction is recorded with equal debits '
                  'and credits',
                  'because the entries were all for the same month',
                  'because cash appears in four of them'], 1,
                 'Each transaction affects at least two accounts, and total '
                 'debits always equal total credits.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Cash from issuing shares is revenue.', False,
                 'It is financing from owners.'),
                ('Entry 4 creates revenue of 300 but no cash.', True, ''),
                ('Buying equipment for cash is an expense of the month in '
                 'which it is bought.', False,
                 'One asset becomes another; the cost becomes an expense '
                 'later, through depreciation.'),
                ('The declared dividend reduces net income.', False,
                 'It reduces retained earnings, and a dividend is not an '
                 'expense.'),
                ('In January, assets rose by 2,380, liabilities by 850 and '
                 'equity by 1,530.', True, ''),
                ('The totals of the journal prove the accounting equation.',
                 True, ''),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T6', d='Write F if the January entry is financing, I if '
                 'it is investing, O if it is operating, N if no cash moves.',
                 items=['entry 1, issuing shares for cash',
                        'entry 2, borrowing on a 5-year note',
                        'entry 3, buying the bottling line for cash',
                        'entry 4, selling olive oil on credit',
                        'entry 5, paying wages in cash',
                        'entry 6, declaring a dividend payable in February'],
                 ans=['F', 'F', 'I', 'N', 'O', 'N']),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['journal entry', 'common stock',
                       'additional paid-in capital', 'notes payable',
                       'cost of goods sold', 'inventory', 'dividend',
                       'retained earnings'],
                 right=['أوراق الدفع',
                        'قيد اليومية',
                        'الأرباح المحتجزة',
                        'الأسهم العادية',
                        'توزيعات الأرباح',
                        'المخزون',
                        'علاوة إصدار الأسهم (رأس المال الإضافي المدفوع)',
                        'تكلفة البضاعة المباعة'],
                 ans=['B', 'D', 'G', 'A', 'H', 'F', 'E', 'C']),

            dict(t='T8', d='Put the four cash movements of January in the '
                 'order the chapter reports them, writing 1 to 4.',
                 items=['the cash paid for the bottling line',
                        'the cash received from issuing shares',
                        'the cash paid in wages',
                        'the cash received from the bank'],
                 ans=['3', '1', '4', '2'],
                 note='The chapter reports them in the order of the six '
                      'entries.'),
        ]),
    ],
)
