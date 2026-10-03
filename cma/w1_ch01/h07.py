# -*- coding: utf-8 -*-
"""Handout 1.7 — The accrual basis, and what matching actually matches."""

MATCHING = [
    ['The way', 'When it is used', 'The Orontes example'],
    ['Cause and effect', 'the cost links directly to one sale',
     'cost of goods sold, recorded at the same time as the sales revenue'],
    ['Systematic and rational allocation',
     'the cost helps many periods',
     'depreciation, spreading a bottling line over the years of use'],
    ['Immediate recognition',
     'the cost has no clear link to future revenue',
     'most advertising, and office salaries'],
]

HANDOUT = dict(
    id='1.7',
    n=7,
    pages=6,
    title='The accrual basis, and matching',
    sub='One sale on two bases · three ways to match an expense to a '
        'revenue',
    covers=['sec:1.4', 'fig:F01-07', 'box:TERM BRIDGE:1.4', 'sc:SC4-2',
            'p:P10', 'p:P11', 'term:accrual basis', 'term:cash basis',
            'term:matching principle'],
    skills=[('accrual', 3), ('matching', 3)],
    flow=[
        ('speed', [
            'Cash received in advance creates a',
            'Cash paid in advance creates an',
            'Interest owed but unpaid is which kind of adjustment?',
            'Revenue is recorded when the goods are',
            'Which basis does U.S. GAAP require?',
            'Does paying a supplier change net income?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'One sale, two bases, two different years'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Orontes delivers goods on December 20 and is paid on '
                   'January 15. Under which basis of accounting would the '
                   'sale belong to the later year?',
                 a='The cash basis',
                 why='The cash basis records items only when cash is received '
                     'or paid.'),
        ]),
        ('move', 'MODEL',
         'One sale, drawn on two timelines. The dashed line is the year end.'),
        ('fig', 'accrual_timeline'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='On the accrual timeline, what does Orontes record on '
                   'December 20, and for how much?',
                 a='Revenue of 90, and cost of goods sold of 54', why=''),
            dict(t='SHORT',
                 q='On the accrual timeline, what does the January 15 payment '
                   'change?',
                 a='Nothing but the form of the asset — the receivable '
                   'becomes cash',
                 why='The cash receipt only changes one asset into another '
                     'asset.'),
            dict(t='SHORT',
                 q='On the cash timeline, in which fiscal year does the '
                   'revenue of 90 fall, and what does the figure call that '
                   'year?',
                 a='Fiscal 2026 — the wrong period', why=''),
            dict(t='SHORT',
                 q='What gross profit does the accrual basis put in 2025, and '
                   'how is it worked out?',
                 a='36, from revenue 90 less cost of goods sold 54', why=''),
            dict(t='SHORT', lines=2,
                 q='Copy the sentence in the band at the foot of the figure.',
                 a='The timing of the cash does not decide the period.',
                 why=''),
        ]),
        ('pair', 'Answer the next item alone first, then compare.',
         'put a finger on the dashed year-end line and ask which side of it '
         'the delivery happened on. The delivery settles it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write what the accrual basis uses instead of the cash date to '
         'decide the period.',
         [['Revenue is recorded when the company ', 14, ' it, that is, when '
           'it ', 16, ' the goods or services.'],
          ['An expense is recorded when the company ', 14, ' it.']],
         ['earns', 'delivers', 'incurs', 'accrual basis'],
         'Under the accrual basis, a company records revenue when it earns '
         'it, that is, when it delivers the goods or services. It records '
         'expenses when it incurs them. The timing of the cash does not '
         'decide the period.'),
        ('contrast',
         'The same 90, recorded in two different years',
         [('Accrual basis',
           ['Delivery: December 20, 2025.', 'Cash: January 15, 2026.',
            'Which year gets the 90?', 'Is it acceptable under U.S. GAAP?']),
          ('Cash basis',
           ['Delivery: December 20, 2025.', 'Cash: January 15, 2026.',
            'Which year gets the 90?', 'Is it acceptable under U.S. GAAP?'])],
         'Only one fact differs between the two columns: which event the '
         'basis watches. Name that event for each, and answer both '
         'questions.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Orontes ships goods on December 20, 2025 and invoices 90. '
                   'The goods cost 54. The customer pays on January 15, 2026. '
                   'The fiscal year ends on December 31. How much revenue '
                   'does Orontes report for fiscal 2025?',
                 o=['0', '36', '54', '90'],
                 a='D',
                 why='Revenue is recorded on delivery, so the whole 90 '
                     'belongs to 2025. 36 is the gross profit and 54 is the '
                     'cost, not the revenue.'),
            dict(t='TF',
                 q='The cash basis is acceptable under U.S. GAAP for '
                   'published financial statements.',
                 a='F',
                 why='The cash basis is simple, but it is not acceptable '
                     'under U.S. GAAP.'),
        ]),
        ('check',
         'Which event does the accrual basis watch to decide the period, and '
         'which event does the cash basis watch?',
         'The accrual basis watches delivery (earning or incurring); the cash '
         'basis watches the cash.',
         'redo the READ THE MODEL questions of cycle A with the two timelines '
         'in front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Three ways to match an expense to a revenue'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A bottling line will be used for years. Can its whole '
                   'cost sensibly be matched to this year’s sales? '
                   'Answer yes or no.',
                 a='No',
                 why='A cost that helps many periods is spread over the years '
                     'of use, through depreciation.'),
        ]),
        ('move', 'MODEL',
         'The matching principle, and the three ways the book applies it.'),
        ('panel', 'Record expenses in the same period as the revenues they '
                  'help to produce', MATCHING,
         'The three ways differ in how tightly the cost is tied to a '
         'particular sale.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='MATCH',
                 q='Write the letter of the way each cost is matched.',
                 left=['Cost of goods sold',
                       'Depreciation of the Amman bottling line',
                       'Advertising for a new product',
                       'Rent for the head office'],
                 right=['cause and effect',
                        'systematic and rational allocation',
                        'immediate recognition'],
                 a=['A', 'B', 'C', 'C'],
                 whys=['Cost of goods sold links directly to each sale, so it '
                       'is recorded with the sales revenue.',
                       'Depreciation spreads the cost over the years of use.',
                       'Advertising has no clear link to specific revenue.',
                       'Head-office rent is a period cost, recognized '
                       'immediately.']),
            dict(t='SHORT',
                 q='Which of the three ways ties a cost to one identified '
                   'sale?',
                 a='Cause and effect', why=''),
            dict(t='SHORT',
                 q='Which of the three is used when no link to future revenue '
                   'can be found at all?',
                 a='Immediate recognition', why=''),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write what the matching principle matches expenses to — and '
         'what it does not match them to.',
         [['Expenses are recorded in the same period as the ', 20,
           ' they help to produce.'],
          ['They are not matched to the ', 20, ' that pays for them.']],
         ['revenues', 'cash payment', 'matching principle'],
         'The matching principle says: record expenses in the same period as '
         'the revenues they help to produce. Matching means matching expenses '
         'to revenues, not to cash payments.'),
        ('contrast',
         'Two costs of 300 in the same year',
         [('Goods that cost 300 and were sold in March',
           ['Can you name the sale this cost helped?',
            'Which way of matching?', 'When is it an expense?']),
          ('Advertising that cost 300, run in March',
           ['Can you name the sale this cost helped?',
            'Which way of matching?', 'When is it an expense?'])],
         'Fill in all three rows for both. Then write the question that '
         'decides between cause and effect, and immediate recognition.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which cost is matched to revenue by cause and effect?',
                 o=['Depreciation of the Amman bottling line',
                    'Advertising for a new product', 'Cost of goods sold',
                    'Rent for the head office'],
                 a='C',
                 why='Cost of goods sold links directly to each sale. '
                     'Depreciation uses systematic and rational allocation; '
                     'advertising and head-office rent are recognized '
                     'immediately.'),
            dict(t='MCQ',
                 q='Which statement about the matching principle is correct?',
                 o=['Expenses are recognized in the period in which they are '
                    'paid.',
                    'Revenues are recognized in the period in which cash is '
                    'received.',
                    'All costs are capitalized as assets until related '
                    'revenue is earned.',
                    'Expenses are recognized in the same period as the '
                    'revenues they help to produce.'],
                 a='D',
                 why='The first two make cash the trigger, which the accrual '
                     'basis rejects. The third would make every cost an asset '
                     'until a sale, which is not what the three ways of '
                     'matching do.'),
        ]),
        ('check',
         'Name the three ways of applying the matching principle, and give '
         'one example of each.',
         'Cause and effect (cost of goods sold); systematic and rational '
         'allocation (depreciation); immediate recognition (advertising, '
         'office salaries).',
         'redo the matching item in cycle B with the panel open.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'accrual_timeline',
         'Rebuild the two timelines. Mark December 20, the year end and '
         'January 15, and write on each timeline what is recorded and when.',
         'Accrual: revenue 90 and cost of goods sold 54 on December 20; on '
         'January 15 the receivable becomes cash and no revenue arises; gross '
         'profit of 36 belongs to 2025. Cash basis: nothing on December 20, '
         'revenue 90 on January 15, which is the wrong period.'),
        ('teach', 'a shopkeeper who keeps books on the cash basis',
         'In three or four sentences, explain what would change if the shop '
         'moved to the accrual basis, and why U.S. GAAP insists on it.',
         ['earned', 'incurred', 'period', 'matching'],
         'On the accrual basis the shop would record a sale when the goods '
         'are handed over rather than when the money arrives, and a cost when '
         'it is incurred rather than when it is paid. That puts each sale and '
         'the costs that produced it in the same period, which is what '
         'matching requires. The cash basis can push a December sale into '
         'January, which is the wrong period, and U.S. GAAP does not accept '
         'it.'),
    ],
)
