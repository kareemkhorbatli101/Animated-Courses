# -*- coding: utf-8 -*-
"""Handout 1.6 — February: the same work, with the scaffolding taken away."""

FEB = [
    ['#', 'Date', 'What happened', 'Amount'],
    ['1', 'Feb 3', 'Paid a supplier for olives bought on credit in January.',
     '150'],
    ['2', 'Feb 8', 'Collected part of the January receivable from GreenBasket '
                   'Supermarkets.', '200'],
    ['3', 'Feb 10', 'Paid 12 months of warehouse rent in advance.', '24'],
    ['4', 'Feb 12', 'A Dubai hotel group paid cash in advance for pastries '
                    'that Orontes will deliver in March.', '60'],
    ['5', 'Feb 15', 'Paid the dividend declared on January 31.', '50'],
    ['6', 'Feb 28', 'Recorded one month of interest on the bank note. Orontes '
                    'has not paid it yet.', '4'],
]

ADJ = [
    ['Type', 'What happens', 'The February row it matches', 'It creates'],
    ['Prepaid expense (deferral)', 'Cash is paid before the expense is '
                                   'incurred.', 'row 3, rent in advance',
     'an asset'],
    ['Contract liability, or unearned revenue (deferral)',
     'Cash is received before the revenue is earned.',
     'row 4, the hotel pays in advance', 'a liability'],
    ['Accrued expense', 'The expense is incurred before cash is paid.',
     'row 6, interest owed on the bank note', 'a liability'],
    ['Accrued revenue',
     'Revenue is earned before cash is received or billed.',
     'none in February — studied in Chapter 11', 'an asset'],
]

HANDOUT = dict(
    id='1.6',
    n=6,
    pages=5,
    title='February, with the scaffolding removed',
    sub='Three rows worked, three rows yours · the four adjustments the '
        'accrual basis creates',
    covers=['sec:1.4', 'fig:F01-06', 'box:YOUR TURN:February',
            'box:EXAM TRAP:cash is not the trigger', 'sc:SC4-1', 'p:P12',
            'term:prepaid expense', 'term:contract liability (unearned revenue)'],
    skills=[('journal', 2), ('effects', 1), ('adjustments', 3)],
    flow=[
        ('speed', [
            'Cash from a bank loan is revenue: true or false?',
            'A dividend reduces which equity account?',
            'Revenue is recorded when the goods are',
            'Net income for January was',
            'Which entry records the cost of goods sold?',
            'One asset becoming another changes total assets by',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Three worked, three yours'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A customer pays you today for goods you will deliver next '
                   'month. Have you earned revenue today? Answer yes or no.',
                 a='No',
                 why='Revenue is not earned until the goods are delivered.'),
        ]),
        ('move', 'MODEL',
         'Six transactions from February. The first three are worked for you, '
         'with the reasoning beside each.'),
        ('panel', 'Orontes Foods — February 2025 (USD 000)', FEB, ''),
        ('trace', 'Rows 1 to 3, worked',
         [('Row 1 · Dr Accounts payable 150; Cr Cash 150',
           'the supplier is paid, so a liability goes and cash goes with it: '
           'assets (150), liabilities (150), equity 0, net income 0'),
          ('Row 2 · Dr Cash 200; Cr Accounts receivable 200',
           'one asset becomes another, so no total moves: assets 0, '
           'liabilities 0, equity 0, net income 0'),
          ('Row 3 · Dr Prepaid rent 24; Cr Cash 24',
           'cash is paid before the benefit is used, so it buys an asset: '
           'assets 0, liabilities 0, equity 0, net income 0')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Rows 1, 2 and 3 all move cash, and not one of them changes '
                   'net income. Write the reason in your own words.',
                 a='None of them earns revenue or incurs an expense — '
                   'they settle or swap items already recorded',
                 why='Paying a supplier settles a liability; collecting a '
                     'receivable swaps one asset for another; paying rent in '
                     'advance buys an asset.'),
            dict(t='SHORT',
                 q='Row 3 pays 24 of cash and total assets do not change. '
                   'What did the 24 of cash become?',
                 a='Prepaid rent, which is an asset', why=''),
            dict(t='TF',
                 q='Row 2 increases Orontes’ revenue by 200.',
                 a='F',
                 why='The revenue was recorded in January, when the goods '
                     'were delivered. February’s collection only turns a '
                     'receivable into cash.'),
        ]),
        ('move', 'APPLY',
         'Rows 4 to 6 now, with no worked model beside them. Write the entry '
         'and the effects for each.'),
        ('items', [
            dict(t='GRID',
                 q='Complete all three rows: the journal entry, then the four '
                   'effects.',
                 h=['Row', 'Journal entry', 'Assets', 'Liabilities', 'Equity',
                    'Net income'],
                 rows=[['4 · hotel pays 60 in advance', '', '', '', '',
                        ''],
                       ['5 · the 50 dividend is paid', '', '', '', '',
                        ''],
                       ['6 · interest of 4 is owed', '', '', '', '',
                        '']],
                 w=[22, 30, 12, 12, 12, 12],
                 a=['row 4: Dr Cash 60; Cr Contract liability (unearned '
                    'revenue) 60 — assets +60, liabilities +60, equity '
                    '0, net income 0',
                    'row 5: Dr Dividends payable 50; Cr Cash 50 — assets '
                    '(50), liabilities (50), equity 0, net income 0',
                    'row 6: Dr Interest expense 4; Cr Interest payable 4 '
                    '— assets 0, liabilities +4, equity (4), net income '
                    '(4)'],
                 whys=['Row 4 is a liability, not revenue: Orontes must still '
                       'deliver the pastries.',
                       'Retained earnings fell in January, when the dividend '
                       'was declared, so equity does not move again.',
                       'An accrued expense: interest is an expense of '
                       'February even though Orontes has not paid it.']),
        ]),
        ('pair', 'Compare your three rows with your partner’s.',
         'the row that differs is the one to argue about. Settle it by asking '
         'whether anything was earned or incurred, not by asking where the '
         'cash went.'),
        ('check',
         'Row 4 brings 60 of cash in. Why is none of it revenue in February?',
         'Because the pastries have not been delivered; the 60 is a contract '
         'liability until they are.',
         'redo row 4 of the APPLY grid in cycle A.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Four adjustments, and the two that get confused'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Cash paid before the benefit is used creates something on '
                   'the balance sheet. Is it an asset or a liability?',
                 a='An asset',
                 why='The company has paid for a future benefit.'),
        ]),
        ('move', 'MODEL',
         'Two questions generate all four. Read the column headings and the '
         'row headings before you read the boxes.'),
        ('fig', 'adjust_quad'),
        ('panel', 'The same four, with the February row each one matches',
         ADJ, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which two of the four create a liability?',
                 a='Contract liability (unearned revenue) and accrued expense',
                 why=''),
            dict(t='SHORT',
                 q='Which two create an asset?',
                 a='Prepaid expense and accrued revenue', why=''),
            dict(t='SHORT',
                 q='In which two does the cash arrive or leave BEFORE the '
                   'revenue is earned or the expense incurred?',
                 a='The two deferrals: prepaid expense and contract liability',
                 why=''),
            dict(t='SHORT',
                 q='Which of the four has no February example in the panel, '
                   'and where does the book say it is studied?',
                 a='Accrued revenue — in Chapter 11', why=''),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the test that tells a prepaid expense from a contract '
         'liability, given that both begin with cash moving.',
         [['If the company ', 12, ' the cash, it has bought a future benefit, '
           'so it records an ', 12, '.'],
          ['If the company ', 16, ' the cash, it still owes goods or '
           'services, so it records a ', 14, '.']],
         ['paid', 'asset', 'received', 'liability'],
         'A prepaid expense is an asset: the company has paid for a future '
         'benefit. A contract liability (unearned revenue) is a liability: '
         'the company must still deliver the goods or services.'),
        ('contrast',
         'Two payments of cash in the same week',
         [('Orontes pays 24 for a year of warehouse rent',
           ['Who paid? Orontes.', 'What does Orontes now have coming to it?',
            'Asset or liability?']),
          ('A hotel pays Orontes 60 for March pastries',
           ['Who paid? The customer.',
            'What does Orontes now owe?', 'Asset or liability?'])],
         'In both, cash moves before anything is earned or used. Say which '
         'each one creates, and write the single question that decides.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='On December 28, a customer pays Orontes 60 for goods that '
                   'Orontes will deliver in January. What does Orontes report '
                   'at December 31?',
                 o=['A liability of 60', 'Revenue of 60',
                    'An asset of 60 and revenue of 60',
                    'Nothing until the goods are delivered'],
                 a='A',
                 why='Cash increases and Orontes owes the customer the goods: '
                     'a contract liability. Revenue is not earned until '
                     'January, and the cash has been received, so something '
                     'must be recorded now.'),
            dict(t='MCQ',
                 q='On February 10, Orontes pays 24 for 12 months of '
                   'warehouse rent in advance. How does the payment appear '
                   'immediately after it is made?',
                 o=['As an asset of 24', 'As an expense of 24',
                    'As a liability of 24',
                    'It is not recorded until the end of the month.'],
                 a='A',
                 why='Cash paid in advance is an asset, not an expense. The '
                     'expense arises as the benefit is used.'),
            dict(t='SORT',
                 q='Write each one under the balance-sheet item it creates.',
                 regions=['creates an ASSET', 'creates a LIABILITY'],
                 items=['rent paid in advance',
                        'cash received for goods not yet delivered',
                        'interest incurred but not yet paid',
                        'revenue earned but not yet billed'],
                 a=['asset: rent paid in advance; revenue earned but not yet '
                    'billed',
                    'liability: cash received for goods not yet delivered; '
                    'interest incurred but not yet paid'],
                 whys=['', '']),
        ]),
        ('check',
         'Cash received in advance is a ______, and cash paid in advance is '
         'an ______. Fill both gaps.',
         'Cash received in advance is a liability; cash paid in advance is an '
         'asset.',
         'redo the contrasting cases in cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'adjust_quad',
         'Rebuild the four-adjustment grid. Label both column headings, '
         'both row headings, and write in each box what it is called and '
         'whether it creates an asset or a liability.',
         'Columns: the company paid the cash, the company received it. '
         'Rows: cash first, cash last. Prepaid expense (asset), contract '
         'liability (liability), accrued expense (liability), accrued '
         'revenue (asset).'),
        ('teach', 'a classmate who says "if the cash moved, record it"',
         'In three or four sentences, explain why the movement of cash does '
         'not by itself tell you whether to record revenue or an expense.',
         ['earned', 'incurred', 'deferral', 'accrual'],
         'Under the accrual basis, revenue is recorded when it is earned and '
         'an expense when it is incurred, whatever the cash does. Cash that '
         'arrives early creates a deferral: a liability if the company '
         'received it, an asset if the company paid it. Cash that arrives '
         'late creates an accrual, because the revenue or the expense has '
         'already happened. Matching means matching expenses to revenues, '
         'not to cash payments.'),
    ],
)
