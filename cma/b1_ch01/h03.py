# -*- coding: utf-8 -*-
"""Handout 1.3 — The accounting equation and the parts of equity (from 1.2)

Every amount in the tables is an amount the chapter prints. Where the chapter
states a figure but not the figure that would follow from it, the table asks
for the stated one and prints a dash in the other cell: asking for a figure
the book does not give would be adding content, which is the one thing this
conversion may not do.
"""

_EQH = ['The case, as the chapter gives it', 'Assets', 'Liabilities', 'Equity']
_EQ = [
    (['A company has total assets of 500 and total liabilities of 320',
      '500', '320', '180'], 'w'),
    (['A company has assets of 900 and liabilities of 350',
      '900', None, None], 'd'),
    (['The same company borrows 100 in cash, then declares and pays a cash '
      'dividend of 40', '—', '—', None], 'd'),
    (['Orontes in January: the increase in each total',
      None, None, None], 'd'),
    (['Barada Wholesale at December 31, 2025', None, None, '—'], 'd'),
    (['Orontes buys a bottling line for 1,200 in cash: the change in each '
      'total', None, '—', None], 'd'),
    (['Orontes issues 100,000 shares for 1,500 in cash: the increase in each '
      'total', None, '—', None], 'd'),
]
_EQA = ['350', '550',
        '510',
        '2,380', '850', '1,530',
        '6,010', '2,230',
        '0', '0',
        '1,500', '1,500']

_REH = ['Item', 'Does it raise or lower retained earnings?',
        'Does it appear in the income statement?']
_RE = [
    (['Revenues', 'Raise', 'Yes'], 'w'),
    (['Gains', None, None], 'd'),
    (['Expenses', None, None], 'd'),
    (['Losses', None, None], 'd'),
    (['Dividends', None, None], 'd'),
]
_REA = ['Raise', 'Yes', 'Lower', 'Yes', 'Lower', 'Yes', 'Lower', 'No']

_SIH = ['Line', 'How it is found', 'USD 000']
_SI = [
    (['Cash received', '100,000 shares at $15 each', '1,500'], 'w'),
    (['Common stock', None, None], 'd'),
    (['Additional paid-in capital', None, None], 'd'),
    (['Contributed capital in total', None, None], 'd'),
]
_SIA = ['100,000 shares at $1 par value each', '100',
        'the amount received above par value', '1,400',
        'common stock plus additional paid-in capital', '1,500']


HANDOUT = dict(
    n=3, book='CMA Part 1 · Section A · Chapter 1', source='1.2',
    title='The accounting equation and the parts of equity',
    covers=['1.2-i', '1.2-j', '1.2-k', '1.2-l', '1.2-m', 'W'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.2 again before page 2', exercises=[

            dict(t='T5',
                 d='Complete the table. A dash means the chapter does not '
                   'give that figure, so leave it. The first row is done.',
                 data=('The figures this table uses, all from Chapter 1',
                       ['A company with total assets of 500 and total '
                        'liabilities of 320.',
                        'A company with assets of 900 and liabilities of '
                        '350, which then borrows 100 in cash and declares '
                        'and pays a cash dividend of 40.',
                        'Orontes in January: assets rose by 2,380, '
                        'liabilities rose by 850 and equity rose by 1,530.',
                        'Barada Wholesale at December 31, 2025: total assets '
                        '6,010 and total liabilities 2,230.',
                        'Orontes bought a bottling line for 1,200 in cash, '
                        'and issued 100,000 shares of $1 par common stock '
                        'for $15 per share, receiving 1,500 in cash.']),
                 heads=_EQH, rows=_EQ, ans=_EQA, w=[46, 18, 18, 18]),

        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Complete the table. Write Raise or Lower in the middle '
                   'column and Yes or No in the last. The first row is done.',
                 heads=_REH, rows=_RE, ans=_REA, w=[26, 38, 36]),

            dict(t='T5',
                 d='Complete the equity side of the share issue. The figures '
                   'are in the data panel; the first line is done.',
                 data=('Orontes, January 2 (USD 000)',
                       ['Issued 100,000 new shares of $1 par common stock '
                        'for $15 per share, in cash. The journal entry '
                        'debited Cash 1,500 and credited Common stock 100 '
                        'and Additional paid-in capital 1,400.']),
                 heads=_SIH, rows=_SI, ans=_SIA, w=[30, 46, 24]),

            dict(t='T6', d='Write C for contributed capital, R for retained '
                 'earnings, N for neither.',
                 items=['common stock', 'additional paid-in capital',
                        'retained earnings',
                        'past net income the company kept',
                        'dividends declared', 'revenues', 'accounts payable',
                        'what the owners paid in'],
                 ans=['C', 'C', 'R', 'R', 'R', 'R', 'N', 'C']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('A company has total assets of 500 and total liabilities of '
                 '320. What is its equity?',
                 ['180', '320', '500', '820'], 0,
                 'Equity = assets − liabilities = 500 − 320 = 180.'),
                ('A company issues common stock for cash. What is the effect '
                 'on the accounting equation?',
                 ['Assets increase and equity increases.',
                  'Assets increase and revenue increases.',
                  'Assets increase and liabilities increase.',
                  'There is no effect on the equation.'], 0,
                 'Cash increases and contributed capital increases by the '
                 'same amount.'),
                ('The board declares a cash dividend that will be paid next '
                 'month. What is the effect immediately after the '
                 'declaration?',
                 ['Expenses increase and net income decreases.',
                  'Liabilities increase and equity decreases.',
                  'Assets decrease and equity decreases.',
                  'There is no effect until the dividend is paid.'], 1,
                 'Declaring the dividend creates dividends payable and '
                 'reduces retained earnings.'),
                ('Which transaction changes total assets but does NOT change '
                 'total equity?',
                 ['Borrowing cash from a bank', 'Paying wages in cash',
                  'Selling goods on credit at a profit',
                  'Buying equipment for cash'], 0,
                 'Assets and liabilities both increase, and equity does not '
                 'change.'),
                ('A company has assets of 900 and liabilities of 350. It '
                 'then borrows 100 in cash and declares and pays a cash '
                 'dividend of 40. What is total equity after these '
                 'transactions?',
                 ['450', '510', '550', '610'], 1,
                 'Equity starts at 550. Borrowing does not change it, and '
                 'the dividend reduces it by 40.'),
                ('Common stock is carried at:',
                 ['the amount the shares were sold for',
                  'its par value only',
                  'par value plus additional paid-in capital',
                  'the market value of the shares'], 1,
                 'Common stock holds only the par value; the rest is '
                 'additional paid-in capital.'),
                ('A cash dividend does not appear in the income statement '
                 'because it is:',
                 ['an expense of a later period',
                  'a distribution to owners rather than an expense',
                  'a reduction of contributed capital',
                  'a liability rather than a cost'], 1,
                 'It reduces retained earnings directly, so net income is '
                 'not affected.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('The accounting equation always holds, because creditors or '
                 'owners finance every asset.', True, ''),
                ('Retained earnings are the past net income that the company '
                 'kept instead of paying it out as dividends.', True, ''),
                ('A dividend is an expense, so it reduces net income.', False,
                 'It is a distribution to owners; it reduces retained '
                 'earnings and never appears in the income statement.'),
                ('Additional paid-in capital is part of contributed capital.',
                 True, ''),
                ('Expenses and losses both decrease retained earnings.', True,
                 ''),
                ('Borrowing cash from a bank increases equity.', False,
                 'It increases assets and liabilities; equity does not '
                 'change.'),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['retained earnings', 'common stock',
                       'additional paid-in capital', 'par value', 'dividend',
                       'accounting equation', 'equity'],
                 right=['المعادلة المحاسبية',
                        'الأرباح المحتجزة',
                        'القيمة الاسمية',
                        'حقوق الملكية',
                        'توزيعات الأرباح',
                        'الأسهم العادية',
                        'علاوة إصدار الأسهم (رأس المال الإضافي المدفوع)'],
                 ans=['B', 'F', 'G', 'C', 'E', 'A', 'D']),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'The accounting equation always holds, because every '
                     'asset is financed either by {creditors}, whose claims '
                     'are the {liabilities}, or by the {owners}, whose claim '
                     'is the {equity}. Equity is therefore the {residual} '
                     'interest: what is left of the assets once the '
                     'liabilities have been deducted.',

                     'Equity has two main parts. {Contributed} capital is '
                     'what the owners paid in: common stock at its {par} '
                     'value, plus {additional} paid-in capital. {Retained} '
                     'earnings are the past net income that the company kept '
                     'instead of paying it out as {dividends}.',
                 ],
                 whys={'creditors': 'One of the two sources that finance an '
                                    'asset.',
                       'liabilities': 'Their claims.',
                       'owners': 'The other source.',
                       'equity': 'Their claim.',
                       'residual': 'What is left after the liabilities.',
                       'Contributed': 'What the owners paid in.',
                       'par': 'The value common stock is carried at.',
                       'additional': 'Paid-in capital above par.',
                       'Retained': 'Past net income the company kept.',
                       'dividends': 'What it would otherwise have paid out.'},
                 extras=['nominal', 'treasury', 'comprehensive', 'peripheral']),

            dict(t='T7', d='One item in each group does not belong with the '
                 'other three. Ring its letter.',
                 groups=[(['common stock', 'additional paid-in capital',
                           'retained earnings', 'accounts payable'], 3),
                         (['revenues', 'gains', 'dividends', 'losses'], 2),
                         (['assets', 'liabilities', 'equity',
                           'comprehensive income'], 3)]),
        ]),
    ],
)
