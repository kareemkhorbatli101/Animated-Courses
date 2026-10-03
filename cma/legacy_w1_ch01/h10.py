# -*- coding: utf-8 -*-
"""Handout 1.10 — Reading a trial balance, with the help taken away in steps."""

TB = [
    ['Account', 'Debit', 'Credit'],
    ['Cash', '1,050', ''],
    ['Accounts receivable', '300', ''],
    ['Allowance for credit losses', '', '20'],
    ['Inventory', '420', ''],
    ['Prepaid rent', '24', ''],
    ['Land', '936', ''],
    ['Equipment', '4,200', ''],
    ['Accumulated depreciation', '', '900'],
    ['Accounts payable', '', '380'],
    ['Dividends payable', '', '50'],
    ['Notes payable (long-term)', '', '1,800'],
    ['Common stock', '', '600'],
    ['Additional paid-in capital', '', '1,900'],
    ['Retained earnings, January 1', '', '1,000'],
    ['Dividends declared', '50', ''],
    ['Sales revenue', '', '3,100'],
    ['Cost of goods sold', '1,860', ''],
    ['Wages expense', '520', ''],
    ['Depreciation expense', '300', ''],
    ['Interest expense', '90', ''],
    ['Totals', '9,750', '9,750'],
]

HANDOUT = dict(
    id='1.10',
    n=10,
    pages=6,
    title='Reading a trial balance',
    sub='Barada Wholesale, Inc. · classify every line, then pull four '
        'figures out of it',
    covers=['sec:1.6', 'fig:F01-10', 'sc:SC6-2', 'case:C1-1', 'case:C1-2',
            'case:C1-3', 'case:C1-4', 'case:C1-5'],
    skills=[('classify', 2), ('extract', 3), ('statements', 1)],
    derived={'3,780': 'common stock 600, plus additional paid-in capital '
                      '1,900, plus closing retained earnings 1,280'},
    flow=[
        ('speed', [
            'Which statement reports at a date?',
            'Net income flows into which equity account?',
            'Accumulated depreciation has which normal balance?',
            'A contra account reduces a',
            'Dividends declared increase with a debit or a credit?',
            'What does a trial balance prove?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Every line has a category'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Two accounts in a trial balance carry credit balances but '
                   'are not liabilities and not equity. What are such '
                   'accounts called?',
                 a='Contra-asset accounts',
                 why='A contra account reduces a related account, so it takes '
                     'the opposite normal balance.'),
        ]),
        ('move', 'MODEL',
         'A real trial balance. Everything in this handout comes out of it, '
         'so keep this page open.'),
        ('panel', 'Barada Wholesale, Inc. — trial balance, December 31, '
                  '2025 (USD 000)', TB,
         'A trial balance lists every account balance and checks that total '
         'debits equal total credits.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='What are the two totals, and what does their agreement '
                   'prove?',
                 a='9,750 and 9,750 — only that total debits equal total '
                   'credits',
                 why='It does not prove that the entries were put in the '
                     'right accounts.'),
            dict(t='SHORT',
                 q='Which two accounts in this trial balance are contra-asset '
                   'accounts?',
                 a='Allowance for credit losses, and accumulated depreciation',
                 why='Both reduce an asset — receivables and equipment '
                     '— and both have credit balances.'),
            dict(t='SHORT',
                 q='One account name in the list contains a date. Which, and '
                   'why does the date matter?',
                 a='Retained earnings, January 1 — it is the opening '
                   'balance, before this year’s income and dividends',
                 why=''),
            dict(t='SHORT',
                 q='Which line is an equity account that is reduced rather '
                   'than increased by its debit balance?',
                 a='Dividends declared, 50', why=''),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='SORT',
                 q='Write each account under its category. Every one of these '
                   'eight is in the trial balance above.',
                 regions=['Asset', 'Contra-asset', 'Liability', 'Equity',
                          'Revenue', 'Expense'],
                 items=['Prepaid rent', 'Land', 'Dividends payable',
                        'Additional paid-in capital', 'Sales revenue',
                        'Interest expense', 'Allowance for credit losses',
                        'Accumulated depreciation'],
                 a=['Asset: prepaid rent, land',
                    'Contra-asset: allowance for credit losses, accumulated '
                    'depreciation',
                    'Liability: dividends payable',
                    'Equity: additional paid-in capital',
                    'Revenue: sales revenue', 'Expense: interest expense'],
                 whys=['', '', '', '', '', '']),
            dict(t='MCQ',
                 q='Which two accounts in this trial balance are contra-asset '
                   'accounts?',
                 o=['Allowance for credit losses and dividends payable',
                    'Accumulated depreciation and notes payable',
                    'Allowance for credit losses and accumulated depreciation',
                    'Dividends declared and accumulated depreciation'],
                 a='C',
                 why='Both reduce an asset and have credit balances. '
                     'Dividends payable and notes payable are liabilities, '
                     'and dividends declared reduces equity rather than an '
                     'asset.'),
        ]),
        ('check',
         'Name the two contra-asset accounts in this trial balance and say '
         'what each one reduces.',
         'The allowance for credit losses reduces accounts receivable; '
         'accumulated depreciation reduces equipment.',
         'redo the sorting item in cycle A with the trial balance open.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Four figures, with less help each time'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='To find net income from a trial balance, which two kinds '
                   'of account do you need, and what do you do with them?',
                 a='Revenues and expenses — subtract the expenses from '
                   'the revenues', why=''),
        ]),
        ('move', 'MODEL',
         'Four jobs a trial balance is used for, and which lines each one '
         'takes.'),
        ('fig', 'tb_anatomy'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which of the four jobs is the only one that SUBTRACTS '
                   'some of the lines it uses?',
                 a='Total assets \u2014 the contra-asset lines are '
                   'deducted', why=''),
            dict(t='SHORT',
                 q='Which line does the figure warn is NOT an expense?',
                 a='Dividends declared', why=''),
            dict(t='SHORT',
                 q='The figure says the trial balance holds only the '
                   'OPENING figure for one account. Which account?',
                 a='Retained earnings', why=''),
        ]),
        ('move', 'MODEL',
         'The first job, worked in full, with the reason for each line.'),
        ('trace', 'Barada’s net income for 2025 (USD 000)',
         [('Sales revenue  3,100',
           'the only revenue account in the trial balance'),
          ('less cost of goods sold  1,860',
           'an expense, matched to those sales by cause and effect'),
          ('less wages expense  520', 'an expense of the period'),
          ('less depreciation expense  300',
           'an expense: systematic and rational allocation'),
          ('less interest expense  90', 'an expense of the period'),
          ('Net income  330',
           '3,100 − 1,860 − 520 − 300 − 90. Dividends '
           'declared are NOT in this list: a dividend is not an expense')]),
        ('move', 'APPLY',
         'The second figure, with the lines named but the work left to you.'),
        ('items', [
            dict(t='GRID',
                 q='Complete Barada’s total assets at December 31, 2025. '
                   'Watch the two lines that are subtracted.',
                 h=['Line', 'Amount'],
                 rows=[['Cash', '1,050'],
                       ['Accounts receivable', '300'],
                       ['less allowance for credit losses', '(20)'],
                       ['Inventory', '420'],
                       ['Prepaid rent', '24'],
                       ['Land', '936'],
                       ['Equipment', '4,200'],
                       ['less accumulated depreciation', '(900)'],
                       ['Total assets', '']],
                 w=[62, 38],
                 a=['total assets 6,010'],
                 whys=['1,050 + 300 − 20 + 420 + 24 + 936 + 4,200 '
                       '− 900 = 6,010. The two contra-asset accounts '
                       'are deducted, not added.']),
        ]),
        ('pair',
         'Compare your total with your partner’s before you go on.',
         'if you differ, check whether both of you deducted the two '
         'contra-asset lines. That is where the difference almost always '
         'is.'),
        ('move', 'APPLY', 'The last two figures, with no lines given at all.'),
        ('items', [
            dict(t='SHORT', lines=2,
                 q='After closing, what are Barada’s retained earnings '
                   'at December 31, 2025? Show your working.',
                 a='1,280',
                 why='Retained earnings at January 1 of 1,000, plus net '
                     'income of 330, less the dividend declared of 50.'),
            dict(t='MCQ',
                 q='After closing, Barada’s retained earnings at '
                   'December 31, 2025 are:',
                 o=['330', '1,000', '1,280', '1,330'],
                 a='C',
                 why='330 is this year’s net income alone and 1,000 is '
                     'the opening balance alone. 1,330 forgets to deduct the '
                     'dividend declared of 50.'),
            dict(t='SHORT', lines=2,
                 q='What are Barada’s total liabilities at December 31, '
                   '2025? Show your working.',
                 a='2,230',
                 why='Accounts payable 380, plus dividends payable 50, plus '
                     'notes payable 1,800.'),
            dict(t='SHORT', lines=2,
                 q='Check your own work: add total liabilities to total '
                   'equity and compare with total assets. Write both figures '
                   'and say whether the equation holds.',
                 a='2,230 + 3,780 = 6,010, which equals total assets — '
                   'it holds',
                 why='Equity is common stock 600, plus additional paid-in '
                     'capital 1,900, plus closing retained earnings 1,280 = '
                     '3,780.'),
        ]),
        ('check',
         'Which two lines of a trial balance must be SUBTRACTED when you add '
         'up total assets?',
         'The allowance for credit losses, and accumulated depreciation.',
         'redo the total-assets grid in cycle B, marking the two contra-asset '
         'lines before you add.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'tb_anatomy',
         'Rebuild the four-jobs figure. Name each job, say which lines it '
         'uses, and write the trap beside it.',
         'Net income: every revenue less every expense, and dividends '
         'declared are not an expense. Total assets: every asset less '
         'every contra-asset. Total liabilities: everything owed, and a '
         'contra-asset is not one. Retained earnings: opening plus net '
         'income less dividends, and only the opening figure is in the '
         'trial balance.'),
        ('teach', 'a colleague who has to extract figures from a trial '
                  'balance for the first time',
         'In four or five sentences, explain the order to work in, and the '
         'one trap that costs most marks.',
         ['revenues', 'expenses', 'net income', 'contra-asset',
          'retained earnings'],
         'Work out net income first, by taking every expense away from the '
         'revenues, and remember that dividends declared are not an expense. '
         'Then take the opening retained earnings, add net income and deduct '
         'the dividend to get the closing figure. For total assets, add the '
         'asset lines and subtract every contra-asset line, because an '
         'allowance or accumulated depreciation reduces an asset even though '
         'it carries a credit balance. That subtraction is the trap: adding '
         'those two lines instead of deducting them is the commonest error.'),
    ],
)
