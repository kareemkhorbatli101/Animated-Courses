# -*- coding: utf-8 -*-
"""Handout 1.2 — The ten elements  (from section 1.2)

The ten FASB elements, their definitions and every example the section gives,
plus the IFRS contrast box and the four false-friend warnings. The definitions
are the section's own wording; the examples are the section's own examples.
"""

_ELEMENTS = [
    ('Asset', 'A present right of an entity to an economic benefit',
     'cash, accounts receivable, inventory and equipment'),
    ('Liability', 'A present obligation of an entity to transfer an economic '
                  'benefit', 'accounts payable, notes payable, wages payable'),
    ('Equity', 'The residual interest in the assets after the liabilities are '
               'deducted', 'the owners’ claim'),
    ('Revenues', 'From the company’s central, ongoing operations',
     'selling olive oil'),
    ('Expenses', 'From the company’s central, ongoing operations',
     'paying plant workers'),
    ('Gains', 'From peripheral or incidental events',
     'selling an old delivery truck above its carrying amount'),
    ('Losses', 'From peripheral or incidental events',
     'a peripheral or incidental event that reduces equity'),
    ('Investments by owners', 'Increase equity', 'buying new shares'),
    ('Distributions to owners', 'Decrease equity', 'dividends'),
    ('Comprehensive income', 'The total change in equity from sources other '
                             'than owners', 'studied in Chapters 3 and 15'),
]

# One worked row, then a mix: some rows give the definition and ask for the
# example, some give the example and ask for the definition, and two ask for
# both. The missing cells are words throughout, which is the same type that
# carries the figures in Handouts 5 to 11.
_ROWS = [([_ELEMENTS[0][0], _ELEMENTS[0][1], _ELEMENTS[0][2]], 'w'),
         (['Liability', None, _ELEMENTS[1][2]], 'd'),
         (['Equity', _ELEMENTS[2][1], None], 'd'),
         (['Revenues', None, _ELEMENTS[3][2]], 'd'),
         (['Expenses', _ELEMENTS[4][1], None], 'd'),
         (['Gains', None, None], 'd'),
         (['Losses', _ELEMENTS[6][1], None], 'd'),
         (['Investments by owners', None, _ELEMENTS[7][2]], 'd'),
         (['Distributions to owners', None, None], 'd'),
         (['Comprehensive income', None, _ELEMENTS[9][2]], 'd')]
_ANS = ['A present obligation of an entity to transfer an economic benefit',
        'the owners’ claim',
        'From the company’s central, ongoing operations',
        'paying plant workers',
        'From peripheral or incidental events',
        'selling an old delivery truck above its carrying amount',
        'a peripheral or incidental event that reduces equity',
        'Increase equity',
        'Decrease equity', 'dividends',
        'The total change in equity from sources other than owners']
_POOL2 = sorted(set(_ANS))
_A = 'ABCDEFGHIJKLMNOP'
_ANS_L = [_A[_POOL2.index(a)] for a in _ANS]
_ROWS_L = ([[_ELEMENTS[0][0], _A[_POOL2.index(_ELEMENTS[0][1])]
             if _ELEMENTS[0][1] in _POOL2 else _ELEMENTS[0][1],
             _A[_POOL2.index(_ELEMENTS[0][2])]
             if _ELEMENTS[0][2] in _POOL2 else _ELEMENTS[0][2]]])


HANDOUT = dict(
    n=2, book='CMA Part 1 · Section A · Chapter 1', source='1.2',
    title='The ten elements',
    covers=['1.2-a', '1.2-b', '1.2-c', '1.2-d', '1.2-e', '1.2-f', '1.2-g',
            '1.2-h', '1.2-l', '1.2-m'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.2 again before page 2', exercises=[

            dict(t='T5',
                 d='The first row is written out in full. In every row '
                   'below it, write only the letter of the right option. An '
                   'option may be used more than once.',
                 data=('The pool of options for this table',
                       [(_A[i], t) for i, t in enumerate(_POOL2)]),
                 heads=['Element', 'What it is, or where it comes from',
                        'An example'],
                 rows=[([_ELEMENTS[0][0], _ELEMENTS[0][1], _ELEMENTS[0][2]],
                        'w')]
                      + [r for r in _ROWS[1:]],
                 ans=_ANS_L, w=[30, 37, 33]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Equity is the residual interest in the assets after the '
                 'liabilities are deducted.', True, ''),
                ('Revenues and gains both come from the company’s '
                 'central, ongoing operations.', False,
                 'Revenues do; gains come from peripheral or incidental '
                 'events.'),
                ('Comprehensive income is the total change in equity from '
                 'sources other than owners.', True, ''),
                ('A dividend is an expense of the period.', False,
                 'It is a distribution to owners, and it never appears in '
                 'the income statement.'),
                ('The FASB conceptual framework defines ten elements.', True,
                 ''),
                ('All ten elements describe the balance sheet at one date.',
                 False, 'Three of them do; the others describe changes '
                 'during a period.'),
            ]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'An asset is a {present} right of an entity to an '
                     'economic {benefit}. A liability is a present '
                     '{obligation} of an entity to {transfer} an economic '
                     'benefit. Equity is the {residual} interest in the '
                     'assets after the liabilities are deducted, which is '
                     'another way of saying that it is the owners’ '
                     'claim.',

                     'Revenues and expenses come from the company’s '
                     '{central}, {ongoing} operations. Gains and losses come '
                     'from {peripheral} or {incidental} events, which is why '
                     'selling an old delivery truck for more than its '
                     'carrying amount gives a gain rather than revenue.',

                     'Two elements involve the owners directly. '
                     '{Investments} by owners increase equity, and '
                     '{distributions} to owners decrease it.',
                 ],
                 whys={'present': 'A right the entity has now.',
                       'benefit': 'An economic one.',
                       'obligation': 'A present one.',
                       'transfer': 'What a liability obliges the entity to do.',
                       'residual': 'What is left after the liabilities.',
                       'central': 'Where revenues and expenses come from.',
                       'ongoing': 'The second half of that phrase.',
                       'peripheral': 'Where gains and losses come from.',
                       'incidental': 'The second half of that phrase.',
                       'Investments': 'By owners, and they increase equity.',
                       'distributions': 'To owners, and they decrease it.'},
                 extras=['future', 'contingent', 'nominal', 'operating']),

            dict(t='T7', d='One item in each group does not belong with the '
                 'other three. Ring its letter.',
                 groups=[(['cash', 'accounts receivable', 'accounts payable',
                           'inventory'], 2),
                         (['accounts payable', 'notes payable',
                           'wages payable', 'equipment'], 3),
                         (['selling olive oil', 'paying plant workers',
                           'selling an old delivery truck above its carrying '
                           'amount', 'cost of goods sold'], 2)]),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which item is an expense?',
                 ['A cash dividend paid to shareholders',
                  'Wages paid to plant workers',
                  'Repayment of a bank loan',
                  'Purchase of a new bottling line'], 1,
                 'Wages are a cost of the company’s central operations, '
                 'so they are an expense.'),
                ('Under U.S. GAAP, an asset is defined as:',
                 ['a present right of an entity to an economic benefit',
                  'a resource that will generate cash in the future',
                  'anything the entity owns outright',
                  'a present obligation to transfer an economic benefit'], 0,
                 'That is the FASB definition; the last option is the '
                 'definition of a liability.'),
                ('Under the IFRS Conceptual Framework (2018), an asset is:',
                 ['a present right of an entity to an economic benefit',
                  'a present economic resource controlled by the entity as a '
                  'result of past events',
                  'the residual interest in the assets',
                  'an economic benefit transferred to owners'], 1,
                 'The idea is the same as in U.S. GAAP; only the wording is '
                 'different.'),
                ('IFRS uses the word income for:',
                 ['revenue only', 'gains only', 'both revenue and gains',
                  'comprehensive income only'], 2,
                 'IFRS uses income for both, while U.S. GAAP keeps revenues '
                 'and gains apart.'),
                ('Selling an old delivery truck for more than its carrying '
                 'amount gives Orontes:',
                 ['revenue', 'a gain', 'an investment by owners',
                  'comprehensive income'], 1,
                 'The event is peripheral or incidental, not central and '
                 'ongoing, so it is a gain.'),
                ('Which element is defined as the total change in equity '
                 'from sources other than owners?',
                 ['Equity', 'Retained earnings', 'Comprehensive income',
                  'Investments by owners'], 2,
                 'Comprehensive income, which the book studies in Chapters 3 '
                 'and 15.'),
                ('Buying new shares in the company is:',
                 ['revenue', 'a gain', 'an investment by owners',
                  'a distribution to owners'], 2,
                 'Investments by owners increase equity.'),
            ]),

            dict(t='T4', d='Write the letter of the element beside each item.',
                 heads=('Item from section 1.2', 'Element'),
                 left=['cash', 'accounts payable', 'wages payable',
                       'selling olive oil', 'paying plant workers',
                       'selling an old delivery truck above its carrying '
                       'amount', 'buying new shares', 'dividends'],
                 right=['Asset', 'Distributions to owners', 'Expense',
                        'Gain', 'Investments by owners', 'Liability',
                        'Revenue'],
                 ans=['A', 'F', 'F', 'G', 'C', 'D', 'E', 'B'],
                 note='An element may be the answer more than once, or not '
                      'at all.'),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the right explanation beside '
                 'each word that looks familiar and is not.',
                 heads=('Word', 'What it means where the exam is concerned'),
                 left=['stock', 'income', 'revenue', 'charges', 'balance',
                       'statement of financial position', 'share capital',
                       'share premium'],
                 right=['In English, fees; in French, charges are expenses',
                        'In French, the trial balance; the balance sheet is '
                        'le bilan',
                        'The IFRS name for additional paid-in capital',
                        'The IFRS name for common stock',
                        'The IFRS name for the balance sheet',
                        'The gross amount from sales',
                        'What remains after expenses, as net income',
                        'shares: in a CMA question, inventory is always '
                        'inventory'],
                 ans=['H', 'G', 'F', 'A', 'B', 'E', 'D', 'C']),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['asset', 'liability', 'equity', 'revenue', 'expense',
                       'gain', 'loss', 'net income'],
                 right=['خسارة',
                        'أصل (أصول)',
                        'صافي الدخل',
                        'حقوق الملكية',
                        'إيراد (إيرادات)',
                        'التزام (التزامات)',
                        'مكسب (مكاسب)',
                        'مصروف (مصروفات)'],
                 ans=['B', 'F', 'D', 'E', 'H', 'G', 'A', 'C']),
        ]),
    ],
)
