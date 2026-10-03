# -*- coding: utf-8 -*-
"""Handout 1.8 — The accrual basis and the matching principle (from 1.4)

The December sale and its two bases, the three ways of applying matching, and
the four adjustment types. The 90, the 54 and the gross profit of 36 are the
chapter's own figures; the fourth adjustment type is the one the chapter says
is studied in Chapter 11, and the table says so rather than inventing an
example for it.
"""

_BH = ['What Orontes reports', 'Under the accrual basis',
       'Under the cash basis']
_B = [
    (['The year the revenue of 90 falls in', 'fiscal 2025', 'fiscal 2026'],
     'w'),
    (['The year the cost of goods sold of 54 falls in', None, '—'], 'd'),
    (['The gross profit of 36 belongs to', None, '—'], 'd'),
    (['Is that the right period?', None, None], 'd'),
    (['Is the basis acceptable under U.S. GAAP?', None, None], 'd'),
]
_BA = ['fiscal 2025', 'fiscal 2025', 'yes', 'no, it is the wrong period',
       'yes', 'no']

_MH = ['The way matching is applied', 'What it is for',
       'The example the chapter gives']
_M = [
    (['Cause and effect', 'costs that link directly to a sale',
      'cost of goods sold'], 'w'),
    (['Systematic and rational allocation', None, None], 'd'),
    (['Immediate recognition', None, None], 'd'),
]
_MA = ['costs that help many periods',
       'depreciation of a bottling line',
       'costs with no clear link to future revenue',
       'most advertising and office salaries']

_AH = ['Type', 'What happens', 'The Orontes example', 'What it creates']
_A4 = [
    (['Prepaid expense (deferral)',
      'cash is paid before the expense is incurred',
      'rent paid in advance', 'an asset'], 'w'),
    (['Contract liability, or unearned revenue (deferral)', None, None, None],
     'd'),
    (['Accrued expense', None, None, None], 'd'),
    (['Accrued revenue', None, 'studied in Chapter 11', None], 'd'),
]
_A4A = ['cash is received before the revenue is earned',
        'a hotel pays in advance', 'a liability',
        'the expense is incurred before cash is paid',
        'interest owed on the bank note', 'a liability',
        'revenue is earned before cash is received or billed', 'an asset']


HANDOUT = dict(
    n=8, book='CMA Part 1 · Section A · Chapter 1', source='1.4',
    title='The accrual basis and the matching principle',
    covers=['1.4-a', '1.4-b', '1.4-c', '1.4-d', '1.4-e', '1.4-f'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.4 again before page 2', exercises=[

            dict(t='T5',
                 d='Complete the table from the data panel. A dash means the '
                   'chapter does not give that answer. The first row is done.',
                 data=('The December sale, as section 1.4 gives it',
                       ['On December 20, 2025, Orontes ships olive oil to '
                        'GreenBasket Supermarkets and sends an invoice for '
                        '90. The goods cost Orontes 54. GreenBasket pays on '
                        'January 15, 2026. The fiscal year ends on '
                        'December 31.',
                        'Under the accrual basis a company records revenue '
                        'when it earns it, and expenses when it incurs them. '
                        'The cash basis records items only when cash is '
                        'received or paid.']),
                 heads=_BH, rows=_B, ans=_BA, w=[44, 28, 28]),

            dict(t='T5',
                 d='Complete the three ways of applying the matching '
                   'principle. The first row is done.',
                 heads=_MH, rows=_M, ans=_MA, w=[30, 34, 36]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T5',
                 d='Complete the four types of adjustment. The first row is '
                   'done, and one example is one the chapter leaves to a '
                   'later chapter.',
                 heads=_AH, rows=_A4, ans=_A4A, w=[26, 32, 22, 20]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'U.S. GAAP financial statements use the {accrual} '
                     'basis. A company records revenue when it {earns} it, '
                     'that is, when it delivers the goods or services, and '
                     'it records expenses when it {incurs} them. The timing '
                     'of the {cash} does not decide the period.',

                     'The matching principle says: record expenses in the '
                     'same {period} as the revenues they help to produce. '
                     'Some costs link directly to a sale, which is {cause} '
                     'and effect. Some help many periods and are spread by '
                     '{systematic} and rational {allocation}. Some have no '
                     'clear link to future revenue and are recognized '
                     '{immediately}.',

                     'A prepaid expense is an {asset}: the company has paid '
                     'for a future benefit. A contract {liability} is the '
                     'other way round: the company has been paid and must '
                     'still {deliver} the goods or services.',
                 ],
                 whys={'accrual': 'The basis U.S. GAAP uses.',
                       'earns': 'When revenue is recorded.',
                       'incurs': 'When an expense is recorded.',
                       'cash': 'What does not decide the period.',
                       'period': 'Where the expense belongs.',
                       'cause': 'The first of the three ways.',
                       'systematic': 'The second, with rational allocation.',
                       'allocation': 'What depreciation does.',
                       'immediately': 'The third way.',
                       'asset': 'What a prepaid expense is.',
                       'liability': 'What a contract liability is.',
                       'deliver': 'What the company must still do.'},
                 extras=['prudent', 'nominal', 'peripheral', 'residual']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('On December 28, a customer pays Orontes 60 for goods that '
                 'Orontes will deliver in January. What does Orontes report '
                 'at December 31?',
                 ['A liability of 60', 'Revenue of 60',
                  'An asset of 60 and revenue of 60',
                  'Nothing until the goods are delivered'], 0,
                 'Cash increases and Orontes owes the customer the goods: a '
                 'contract liability.'),
                ('Which cost is matched to revenue by cause and effect?',
                 ['Depreciation of the Amman bottling line',
                  'Advertising for a new product', 'Cost of goods sold',
                  'Rent for the head office'], 2,
                 'Cost of goods sold links directly to each sale, so it is '
                 'recorded with the sales revenue.'),
                ('Which statement about the matching principle is correct?',
                 ['Expenses are recognized in the period in which they are '
                  'paid.',
                  'Revenues are recognized in the period in which cash is '
                  'received.',
                  'All costs are capitalized as assets until related revenue '
                  'is earned.',
                  'Expenses are recognized in the same period as the '
                  'revenues they help to produce.'], 3,
                 'That is the definition of matching.'),
                ('Orontes ships goods on December 20, 2025 and invoices 90. '
                 'The goods cost 54. The customer pays on January 15, 2026. '
                 'The fiscal year ends on December 31. How much revenue does '
                 'Orontes report for fiscal 2025?',
                 ['0', '36', '54', '90'], 3,
                 'Under the accrual basis, revenue is recorded when the '
                 'goods are delivered, in 2025.'),
                ('The cash basis is:',
                 ['the basis U.S. GAAP requires',
                  'simple, but not acceptable under U.S. GAAP',
                  'used for the balance sheet only',
                  'the same as the accrual basis for a full year'], 1,
                 'The chapter says it is simple but not acceptable under '
                 'U.S. GAAP.'),
                ('Depreciation spreads the cost of a bottling line over the '
                 'years of use. That is matching by:',
                 ['cause and effect',
                  'systematic and rational allocation',
                  'immediate recognition', 'the cash basis'], 1,
                 'The cost helps many periods, so it is allocated '
                 'systematically and rationally.'),
                ('Which pair are both deferrals?',
                 ['accrued expense and accrued revenue',
                  'prepaid expense and contract liability',
                  'prepaid expense and accrued expense',
                  'contract liability and accrued revenue'], 1,
                 'The chapter labels those two as deferrals; the other two '
                 'are accruals.'),
                ('In January 2026, GreenBasket pays the December invoice. '
                 'The cash receipt:',
                 ['creates revenue in 2026',
                  'changes one asset into another',
                  'reduces a liability',
                  'creates a gain'], 1,
                 'It only changes the receivable into cash; the revenue '
                 'belonged to 2025.'),
            ]),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Under the accrual basis the timing of the cash decides the '
                 'period.', False,
                 'It does not: revenue is recorded when earned and expenses '
                 'when incurred.'),
                ('The cash basis is acceptable under U.S. GAAP.', False,
                 'It is simple, but it is not acceptable.'),
                ('Cash received in advance is a liability, not revenue.',
                 True, ''),
                ('Cash paid in advance is an asset, not an expense.', True,
                 ''),
                ('Matching means matching expenses to cash payments.', False,
                 'It means matching expenses to the revenues they help to '
                 'produce.'),
                ('Most advertising is recognized immediately.', True, ''),
                ('The gross profit of 36 on the December sale belongs to '
                 'fiscal 2026.', False,
                 'It belongs to 2025, the year Orontes delivered the goods.'),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T6', d='Write A if the item is an asset, L if it is a '
                 'liability.',
                 items=['a prepaid expense', 'a contract liability',
                        'unearned revenue', 'an accrued expense',
                        'accrued revenue', 'rent paid in advance',
                        'interest owed but not paid'],
                 ans=['A', 'L', 'L', 'L', 'A', 'A', 'L']),

            dict(t='T4', d='Write the letter of the way each cost is matched '
                 'to revenue.',
                 heads=('Cost', 'How it is matched'),
                 left=['cost of goods sold',
                       'depreciation of the Amman bottling line',
                       'most advertising', 'office salaries',
                       'rent for the head office'],
                 right=['cause and effect', 'immediate recognition',
                        'systematic and rational allocation'],
                 ans=['A', 'C', 'B', 'B', 'B'],
                 note='A way may be the answer more than once.'),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['accrual basis', 'cash basis', 'matching principle',
                       'prepaid expense',
                       'contract liability (unearned revenue)'],
                 right=['مبدأ مقابلة الإيرادات بالمصروفات',
                        'أساس الاستحقاق',
                        'التزام العقد (إيراد مقبوض مقدماً)',
                        'الأساس النقدي',
                        'مصروف مدفوع مقدماً'],
                 ans=['B', 'D', 'A', 'E', 'C']),
        ]),
    ],
)
