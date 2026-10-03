# -*- coding: utf-8 -*-
"""Handout 1.11 — Reading a trial balance: Barada Wholesale  (from 1.6)

Figure F01-10 and the case-style set. The trial balance is one of only two
figures in the chapter whose cells are in the text, so it can be converted
cell by cell. Every subtotal the tables ask for is a figure the chapter prints
in its answers: 330, 6,010, 1,280 and 2,230.
"""

_TB = [
    ('Cash', '1,050', ''),
    ('Accounts receivable', '300', ''),
    ('Allowance for credit losses', '', '20'),
    ('Inventory', '420', ''),
    ('Prepaid rent', '24', ''),
    ('Land', '936', ''),
    ('Equipment', '4,200', ''),
    ('Accumulated depreciation', '', '900'),
    ('Accounts payable', '', '380'),
    ('Dividends payable', '', '50'),
    ('Notes payable (long-term)', '', '1,800'),
    ('Common stock', '', '600'),
    ('Additional paid-in capital', '', '1,900'),
    ('Retained earnings, January 1', '', '1,000'),
    ('Dividends declared', '50', ''),
    ('Sales revenue', '', '3,100'),
    ('Cost of goods sold', '1,860', ''),
    ('Wages expense', '520', ''),
    ('Depreciation expense', '300', ''),
    ('Interest expense', '90', ''),
]

# The trial balance with four account names and eight balances taken out.
_BLANK_NAME = {2, 7, 13, 18}
_BLANK_DR = {0, 6, 16, 18}
_BLANK_CR = {2, 10, 12, 15}
_TBH = ['Account', 'Debit', 'Credit']
_TBROWS = [([_TB[0][0], _TB[0][1], _TB[0][2]], 'w')]
_TBANS = []
for _i, (_nm, _dr, _cr) in enumerate(_TB):
    if _i == 0:
        continue
    _n = None if _i in _BLANK_NAME else _nm
    _d = None if (_i in _BLANK_DR and _dr) else _dr
    _c = None if (_i in _BLANK_CR and _cr) else _cr
    _TBROWS.append(([_n, _d, _c], 'd'))
    if _n is None:
        _TBANS.append(_nm)
    if _d is None:
        _TBANS.append(_dr)
    if _c is None:
        _TBANS.append(_cr)
_TBROWS.append((['Totals', '9,750', '9,750'], 'w'))

_CATH = ['Account', 'Category']
_CAT = [
    (['Prepaid rent', 'Asset'], 'w'),
    (['Land', None], 'd'),
    (['Dividends payable', None], 'd'),
    (['Additional paid-in capital', None], 'd'),
    (['Sales revenue', None], 'd'),
    (['Interest expense', None], 'd'),
    (['Allowance for credit losses', None], 'd'),
    (['Accumulated depreciation', None], 'd'),
]
_CATA = ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense',
         'Contra-asset', 'Contra-asset']

_NIH = ['Line', 'USD 000']
_NI = [
    (['Sales revenue', '3,100'], 'w'),
    (['Cost of goods sold', None], 'd'),
    (['Wages expense', None], 'd'),
    (['Depreciation expense', None], 'd'),
    (['Interest expense', None], 'd'),
    (['Net income for 2025', None], 'd'),
]
_NIA = ['1,860', '520', '300', '90', '330']

_TAH = ['Line', 'USD 000']
_TA = [
    (['Cash', '1,050'], 'w'),
    (['Accounts receivable', None], 'd'),
    (['Allowance for credit losses, deducted', None], 'd'),
    (['Inventory', None], 'd'),
    (['Prepaid rent', None], 'd'),
    (['Land', None], 'd'),
    (['Equipment', None], 'd'),
    (['Accumulated depreciation, deducted', None], 'd'),
    (['Total assets at December 31, 2025', None], 'd'),
]
_TAA = ['300', '20', '420', '24', '936', '4,200', '900', '6,010']

_REH = ['Line', 'USD 000']
_REQ = [
    (['Retained earnings, January 1', '1,000'], 'w'),
    (['Net income for the year', None], 'd'),
    (['Dividends declared', None], 'd'),
    (['Retained earnings, December 31', None], 'd'),
]
_REA = ['330', '50', '1,280']

_TLH = ['Line', 'USD 000']
_TL = [
    (['Accounts payable', '380'], 'w'),
    (['Dividends payable', None], 'd'),
    (['Notes payable (long-term)', None], 'd'),
    (['Total liabilities at December 31, 2025', None], 'd'),
]
_TLA = ['50', '1,800', '2,230']


HANDOUT = dict(
    n=11, book='CMA Part 1 · Section A · Chapter 1', source='1.6',
    title='Reading a trial balance: Barada Wholesale',
    covers=['1.6-e', '1.6-g', 'C'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read the trial balance in section 1.6 again before page 2',
             exercises=[

            dict(t='T5',
                 d='Complete the trial balance. Four account names and eight '
                   'balances are missing, and the totals are given so your '
                   'work checks itself.',
                 data=('Barada Wholesale, Inc. — trial balance, '
                       'December 31, 2025 (USD 000)',
                       ['The accounts, in alphabetical order: accounts '
                        'payable, accounts receivable, accumulated '
                        'depreciation, additional paid-in capital, allowance '
                        'for credit losses, cash, common stock, cost of '
                        'goods sold, depreciation expense, dividends '
                        'declared, dividends payable, equipment, interest '
                        'expense, inventory, land, notes payable '
                        '(long-term), prepaid rent, retained earnings '
                        'January 1, sales revenue, wages expense.',
                        'The balances, in order of size: 4,200, 3,100, '
                        '1,860, 1,900, 1,800, 1,050, 1,000, 936, 900, 600, '
                        '520, 420, 380, 300, 300, 90, 50, 50, 24, 20.']),
                 heads=_TBH, rows=_TBROWS, ans=_TBANS, w=[56, 22, 22]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Write the category of each account. The first row is '
                   'done, and two of the eight are in the same category as '
                   'each other.',
                 data=('The six categories',
                       ['Asset · Contra-asset · Liability · '
                        'Equity · Revenue · Expense']),
                 heads=_CATH, rows=_CAT, ans=_CATA, w=[58, 42]),

            dict(t='T5',
                 d='Work down to Barada’s net income. The first line is '
                   'given, and the four expenses are in the data panel.',
                 data=('From the trial balance (USD 000)',
                       ['Sales revenue 3,100. Cost of goods sold 1,860. '
                        'Wages expense 520. Depreciation expense 300. '
                        'Interest expense 90. Dividends declared 50.']),
                 heads=_NIH, rows=_NI, ans=_NIA, w=[70, 30]),

            dict(t='T5',
                 d='Work down to total liabilities. The first line is given.',
                 data=('From the trial balance (USD 000)',
                       ['Accounts payable 380. Dividends payable 50. Notes '
                        'payable (long-term) 1,800.']),
                 heads=_TLH, rows=_TL, ans=_TLA, w=[70, 30]),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T5',
                 d='Work down to total assets. The two contra accounts are '
                   'deducted, not added. The first line is given.',
                 data=('From the trial balance (USD 000)',
                       ['Cash 1,050. Accounts receivable 300. Allowance for '
                        'credit losses 20. Inventory 420. Prepaid rent 24. '
                        'Land 936. Equipment 4,200. Accumulated depreciation '
                        '900.']),
                 heads=_TAH, rows=_TA, ans=_TAA, w=[70, 30]),

            dict(t='T5',
                 d='Work down to retained earnings after closing. The first '
                   'line is given.',
                 data=('From the trial balance and your own net income '
                       '(USD 000)',
                       ['Retained earnings, January 1: 1,000. Dividends '
                        'declared: 50. Net income for the year is the figure '
                        'you reached on page 2.']),
                 heads=_REH, rows=_REQ, ans=_REA, w=[70, 30]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which two accounts in Barada’s trial balance are '
                 'contra-asset accounts?',
                 ['Allowance for credit losses and dividends payable',
                  'Accumulated depreciation and notes payable',
                  'Allowance for credit losses and accumulated depreciation',
                  'Dividends declared and accumulated depreciation'], 2,
                 'Both reduce an asset — receivables and equipment '
                 '— and both have credit balances.'),
                ('A student reports Barada’s net income as 280. The '
                 'mistake is that the answer:',
                 ['adds the dividends declared',
                  'subtracts the dividends declared as if they were an '
                  'expense',
                  'leaves out interest expense',
                  'leaves out depreciation expense'], 1,
                 'Dividends declared are a distribution to owners, not an '
                 'expense.'),
                ('A student reports Barada’s net income as 1,240. The '
                 'mistake is that the answer:',
                 ['stops at gross profit',
                  'reports revenue instead of net income',
                  'adds the two contra accounts',
                  'forgets the dividend'], 0,
                 'It stops at revenue minus cost of goods sold.'),
                ('A student reports Barada’s total assets as 6,030. The '
                 'mistake is that the answer:',
                 ['ignores accumulated depreciation',
                  'ignores the allowance for credit losses',
                  'adds both contra balances',
                  'leaves out prepaid rent'], 1,
                 'The allowance of 20 has not been deducted.'),
                ('A student reports Barada’s total assets as 7,850. The '
                 'mistake is that the answer:',
                 ['ignores both contra accounts',
                  'adds the contra-asset balances instead of subtracting '
                  'them',
                  'includes the dividends declared',
                  'includes the notes payable'], 1,
                 'Both contra balances have been added rather than '
                 'deducted.'),
                ('A student reports Barada’s retained earnings as '
                 '1,330. The mistake is that the answer:',
                 ['forgets to subtract the dividends declared',
                  'reports only this year’s net income',
                  'adds the dividends payable',
                  'uses the opening balance'], 0,
                 'The dividends declared of 50 have not been deducted.'),
                ('A student reports Barada’s total liabilities as '
                 '2,280. The mistake is that the answer:',
                 ['leaves out dividends payable',
                  'counts dividends declared, an equity item, as a liability',
                  'leaves out the notes payable',
                  'includes the allowance for credit losses'], 1,
                 'Dividends declared reduce equity; dividends payable is the '
                 'liability.'),
            ]),

            dict(t='T6', d='Write A for an asset, X for a contra-asset, L '
                 'for a liability, E for equity, R for revenue, S for an '
                 'expense.',
                 items=['cash', 'allowance for credit losses', 'inventory',
                        'land', 'accumulated depreciation',
                        'accounts payable', 'notes payable (long-term)',
                        'common stock', 'retained earnings, January 1',
                        'sales revenue', 'cost of goods sold',
                        'interest expense'],
                 ans=['A', 'X', 'A', 'A', 'X', 'L', 'L', 'E', 'E', 'R', 'S',
                      'S']),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('A trial balance checks that total debits equal total '
                 'credits.', True, ''),
                ('Barada’s trial balance totals 9,750 on each side.',
                 True, ''),
                ('The two contra-asset accounts are added to the assets they '
                 'relate to.', False,
                 'They are deducted: each one reduces a related account.'),
                ('Dividends declared is a liability.', False,
                 'It reduces equity; dividends payable is the liability.'),
                ('Prepaid rent is an asset.', True, ''),
            ]),
        ]),
    ],
)
