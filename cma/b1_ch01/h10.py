# -*- coding: utf-8 -*-
"""Handout 1.10 — The four statements, and how they link  (from section 1.6)

The overview table of section 1.6, the two links of Figure F01-09, and the
January figures the chapter works out in that section: net income of 80, the
dividend of 50, retained earnings up by 30, and cash up by 1,060 split three
ways.
"""

_SH = ['Statement', 'The question it answers', 'Time', 'Chapter']
_S = [
    (['Balance sheet', 'What does the company have and owe, and what is the '
      'owners’ claim?', 'at a date', '2'], 'w'),
    (['Income statement', None, None, None], 'd'),
    (['Statement of changes in equity', None, None, None], 'd'),
    (['Statement of cash flows', None, None, None], 'd'),
]
_SA = ['How did the company perform?', 'for a period', '3',
       'Why did each equity account change?', 'for a period', '4',
       'Where did cash come from, and where did it go?', 'for a period', '5']

_LH = ['Line', 'Working', 'USD 000']
_L = [
    (['Revenue', 'from the January sale', '300'], 'w'),
    (['Cost of goods sold', 'on the same sale', None], 'd'),
    (['Wages', 'paid to plant workers', None], 'd'),
    (['Net income', 'revenue less the two above', None], 'd'),
    (['Dividend declared', 'on January 31', None], 'd'),
    (['Retained earnings rose by', 'net income less the dividend', None],
     'd'),
]
_LA = ['180', '40', '80', '50', '30']

_CH2 = ['Part of the January cash movement', 'Category', 'USD 000']
_C2 = [
    (['Wages paid', 'operating', '(40)'], 'w'),
    (['The bottling line bought for cash', None, None], 'd'),
    (['Shares issued and cash borrowed', None, None], 'd'),
    (['Cash rose by', '—', None], 'd'),
]
_CA2 = ['investing', '(1,200)', 'financing', '2,300', '1,060']


HANDOUT = dict(
    n=10, book='CMA Part 1 · Section A · Chapter 1', source='1.6',
    title='The four statements, and how they link',
    covers=['1.6-a', '1.6-b', '1.6-c', '1.6-d', '1.6-g'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.6 again before page 2', exercises=[

            dict(t='T5',
                 d='Complete the overview of the four statements. The first '
                   'row is done.',
                 heads=_SH, rows=_S, ans=_SA, w=[26, 44, 16, 14]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'The balance sheet reports at a single {date}. The '
                     'other three cover a span of time, which is a '
                     '{period}. The four are linked in two places: net '
                     'income flows into {retained} earnings, and the net '
                     'change in {cash} explains the cash balance on the '
                     'balance sheet.',

                     'A trial balance lists every account balance and checks '
                     'that total {debits} equal total {credits}. Net income '
                     'and the change in cash are very different numbers, '
                     'which is the {accrual} basis at work.',
                 ],
                 whys={'date': 'What the balance sheet reports at.',
                       'period': 'What the other three cover.',
                       'retained': 'Where net income flows.',
                       'cash': 'What the other link explains.',
                       'debits': 'What a trial balance checks.',
                       'credits': 'The other side.',
                       'accrual': 'Why the two numbers differ.'},
                 extras=['position', 'moment', 'operating', 'residual']),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Work down to net income and then to the movement in '
                   'retained earnings. The first line is given.',
                 data=('Orontes in January, as section 1.6 works it out '
                       '(USD 000)',
                       ['Net income was 80: revenue of 300, minus cost of '
                        'goods sold of 180, minus wages of 40. The dividend '
                        'declared was 50, so retained earnings rose by 30.']),
                 heads=_LH, rows=_L, ans=_LA, w=[38, 40, 22]),

            dict(t='T5',
                 d='Split the January cash movement three ways and then add '
                   'it up. The first line is given.',
                 data=('Orontes in January, as section 1.6 works it out '
                       '(USD 000)',
                       ['Cash rose by 1,060: an operating outflow of 40, an '
                        'investing outflow of 1,200 and a financing inflow '
                        'of 2,300.']),
                 heads=_CH2, rows=_C2, ans=_CA2, w=[46, 28, 26]),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which statement reports amounts at a single date?',
                 ['The income statement', 'The balance sheet',
                  'The statement of changes in equity',
                  'The statement of cash flows'], 1,
                 'The balance sheet shows position at one date; the other '
                 'three cover a period.'),
                ('Which statement explains why retained earnings changed '
                 'during the year?',
                 ['The statement of changes in equity', 'The balance sheet',
                  'The statement of cash flows', 'The income statement'], 0,
                 'It shows beginning retained earnings, net income, '
                 'dividends and the ending balance.'),
                ('Net income for the period flows directly into:',
                 ['the cash balance on the balance sheet',
                  'retained earnings in the statement of changes in equity',
                  'total liabilities', 'common stock'], 1,
                 'Net income is closed into retained earnings.'),
                ('Orontes’s net income for January was 80 and its cash '
                 'rose by 1,060. The reason the two differ is:',
                 ['an error in the entries', 'the accrual basis at work',
                  'the dividend declared on January 31',
                  'the trial balance'], 1,
                 'The chapter says they are very different numbers, which is '
                 'the accrual basis at work.'),
                ('Retained earnings rose by 30 in January. That is:',
                 ['net income of 80 less the dividend of 50',
                  'net income of 80 less wages of 40',
                  'revenue of 300 less cost of goods sold of 180',
                  'the financing inflow of 2,300 less the investing outflow '
                  'of 1,200'], 0,
                 'Net income was 80 and the dividend declared was 50.'),
                ('Which statement answers the question “how did the '
                 'company perform?”',
                 ['The balance sheet', 'The income statement',
                  'The statement of changes in equity',
                  'The statement of cash flows'], 1,
                 'That is the question the income statement answers, for a '
                 'period.'),
                ('A trial balance checks that:',
                 ['assets equal liabilities plus equity',
                  'total debits equal total credits',
                  'net income equals the change in cash',
                  'every account has a normal balance'], 1,
                 'It lists every account balance and checks that total '
                 'debits equal total credits.'),
                ('The investing outflow of January was:',
                 ['40', '50', '1,200', '2,300'], 2,
                 'The bottling line bought for cash is the investing '
                 'outflow.'),
            ]),

            dict(t='T6', d='Write D if the figure belongs to a single date '
                 'and P if it belongs to a period.',
                 items=['net income of 80', 'the cash balance at January 31',
                        'revenue of 300', 'total assets',
                        'the dividend declared of 50',
                        'the change in cash of 1,060',
                        'wages of 40', 'retained earnings at January 31'],
                 ans=['P', 'D', 'P', 'D', 'P', 'P', 'P', 'D']),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the statement that answers '
                 'each question.',
                 heads=('The question a user asks', 'The statement'),
                 left=['Where did cash come from, and where did it go?',
                       'How did the company perform?',
                       'What does the company have and owe, and what is the '
                       'owners’ claim?',
                       'Why did each equity account change?'],
                 right=['Balance sheet', 'Income statement',
                        'Statement of cash flows',
                        'Statement of changes in equity'],
                 ans=['C', 'B', 'A', 'D']),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Net income flows into retained earnings.', True, ''),
                ('Net income is the same as the change in cash.', False,
                 'They are very different numbers, which is the accrual '
                 'basis at work.'),
                ('The balance sheet covers a period.', False,
                 'It reports at a single date.'),
                ('The net change in cash explains the cash balance on the '
                 'balance sheet.', True, ''),
                ('Three of the four statements cover a period.', True, ''),
                ('A trial balance proves that every entry was posted to the '
                 'right account.', False,
                 'It checks only that total debits equal total credits.'),
            ]),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['balance sheet', 'statement of financial position',
                       'income statement',
                       'statement of changes in equity',
                       'statement of cash flows'],
                 right=['قائمة التدفقات النقدية',
                        'الميزانية العمومية',
                        'قائمة التغيرات في حقوق الملكية',
                        'قائمة المركز المالي',
                        'قائمة الدخل'],
                 ans=['B', 'D', 'E', 'C', 'A']),
        ]),
    ],
)
