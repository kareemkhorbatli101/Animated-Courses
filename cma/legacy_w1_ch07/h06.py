# -*- coding: utf-8 -*-
"""Handout 7.6 — An error in the count, and the two years it touches."""

FOUR = [
    ['Error in year 1', 'Y1 COGS', 'Y1 net income', 'Y1 end RE', 'Y1 assets',
     'Y2 net income', 'Y2 end RE'],
    ['1. Ending inventory overstated', 'U', 'O', 'O', 'O', 'U', 'correct'],
    ['2. Ending inventory understated', 'O', 'U', 'U', 'U', 'O', 'correct'],
    ['3. Credit purchase not recorded, and goods not counted', 'no effect',
     'no effect', 'no effect', 'U (and liabilities U)', 'no effect',
     'correct'],
    ['4. Credit purchase not recorded, but goods counted', 'U', 'O', 'O',
     'correct (liabilities U)', 'U', 'correct'],
]

HANDOUT = dict(
    id='7.6',
    n=6,
    pages=6,
    title='When the count is wrong',
    sub='The error reverses next year · four common errors · what '
        'to do when you find one',
    covers=['sec:7.5', 'fig:F07-08', 'fig:F07-09',
            'box:LANGUAGE FOCUS:over and under', 'box:TERM BRIDGE:7.5',
            'sc:SC7-9', 'sc:SC7-10', 'p:P7-12', 'p:P7-13', 'p:P7-14',
            'term:counterbalancing error'],
    skills=[('errors', 3)],
    flow=[
        ('speed', [
            'Prices rising: which method gives the highest tax?',
            'The LIFO reserve is the difference between',
            'To get FIFO COGS from LIFO COGS you subtract the',
            'A LIFO liquidation does what to income?',
            'The conformity rule links the tax return to the',
            'Overstated means too high or too low?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'One wrong count, two wrong years'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Cost of goods sold is beginning inventory plus purchases '
                   'minus ending inventory. If ending inventory is counted '
                   'too HIGH, is cost of goods sold too high or too low?',
                 a='Too low',
                 why='Ending inventory is subtracted, so overstating it '
                     'understates cost of goods sold.'),
            dict(t='SHORT',
                 q='This year’s ending inventory is next year’s '
                   'what?',
                 a='Beginning inventory',
                 why='That is why the error moves into the next year too.'),
        ]),
        ('move', 'MODEL',
         'Orontes counted some goods twice at the end of 2025. Follow one '
         'column at a time, then compare the last row of each.'),
        ('fig', 'error_years'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='In 2025, which way is cost of goods sold wrong, and by '
                   'how much?',
                 a='Understated by 40', why=''),
            dict(t='SHORT',
                 q='In 2026, which way is cost of goods sold wrong?',
                 a='Overstated by 40', why=''),
            dict(t='SHORT',
                 q='What are retained earnings at the end of 2025, and at the '
                   'end of 2026?',
                 a='Overstated by 40 at the end of 2025; correct at the end '
                   'of 2026', why=''),
            dict(t='SHORT',
                 q='The figure says pretax income was overstated by 40 in '
                   '2025, but NET income by only 30. Why?',
                 a='Because of tax at 25%: 40 less 25% of 40',
                 why='Remember the tax effect: at a 25% tax rate, net income '
                     'was overstated by only 30.'),
            dict(t='SHORT',
                 q='What does the book call an error that cancels itself over '
                   'two years?',
                 a='A counterbalancing error', why=''),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'write the first year’s direction, then reverse it. If you '
         'disagree, one of you has not reversed.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the two-step method for any inventory error question.',
         [['Find the direction for the ', 10, ' year, then ', 12, ' it for '
           'the second.'],
          ['Retained earnings are wrong at the end of year ', 6,
           ' and ', 10, ' at the end of year two.']],
         ['first', 'reverse', 'correct', 'counterbalancing'],
         'Over the two years, the two errors cancel. Retained earnings are '
         'overstated at the end of 2025 but correct at the end of 2026. This '
         'is a counterbalancing error.'),
        ('contrast',
         'The same size of error, in opposite directions',
         [('Ending inventory OVERSTATED by 40',
           ['Y1 cost of goods sold?', 'Y1 net income?',
            'Y2 net income?', 'Y2 closing retained earnings?']),
          ('Ending inventory UNDERSTATED by 40',
           ['Y1 cost of goods sold?', 'Y1 net income?',
            'Y2 net income?', 'Y2 closing retained earnings?'])],
         'Fill in all four rows for both. Then write the one row whose answer '
         'is the same in both columns, and say why.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Ending inventory for 2025 was understated. What are the '
                   'effects on net income?',
                 o=['2025 overstated; 2026 understated',
                    '2025 understated; 2026 no effect',
                    'No effect in either year',
                    '2025 understated; 2026 overstated'],
                 a='D',
                 why='An understated ending inventory overstates cost of '
                     'goods sold and understates income in the first year, '
                     'and the error reverses in the second.'),
            dict(t='MCQ',
                 q='Orontes overstated its 2025 ending inventory by 40 (USD '
                   '000). Ignoring taxes, what is the effect on retained '
                   'earnings at the end of 2026?',
                 o=['Overstated by 40', 'No effect', 'Understated by 40',
                    'Overstated by 80'],
                 a='B',
                 why='The error counterbalances: retained earnings are wrong '
                     'at the end of 2025 and right at the end of 2026.'),
            dict(t='MCQ',
                 q='The tax rate is 25%. Ending inventory was overstated by '
                   '40. By how much is net income overstated in that year?',
                 o=['10', '30', '40', '50'],
                 a='B',
                 why='40 is the pretax overstatement; net income is overstated '
                     'by 40 less the 25% tax on it.'),
            dict(t='MCQ',
                 q='Ending inventory for 2026 is understated by 15. Inventory '
                   'for 2025 was correct. What is the effect on 2026 cost of '
                   'goods sold?',
                 o=['Understated by 15', 'No effect', 'Overstated by 15',
                    'Overstated by 30'],
                 a='C',
                 why='Ending inventory is subtracted in the cost of goods '
                     'sold calculation, so understating it overstates cost of '
                     'goods sold by the same amount.'),
        ]),
        ('check',
         'Ending inventory is overstated in year 1. Say what happens to net '
         'income in year 1, in year 2, and to closing retained earnings after '
         'two years.',
         'Overstated in year 1, understated in year 2, and retained earnings '
         'are correct after two years.',
         'redo the READ THE MODEL questions of cycle A with the two-year '
         'figure in front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Four errors, and the one that fools everybody'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A credit purchase was never recorded AND the goods were '
                   'never counted. Two things are missing. Guess whether cost '
                   'of goods sold comes out right or wrong.',
                 a='Right',
                 why='Purchases and ending inventory are both understated by '
                     'the same amount, and they are on opposite sides of the '
                     'calculation.'),
        ]),
        ('move', 'MODEL',
         'Four errors, with O for overstated and U for understated. Row 3 is '
         'the classic exam item.'),
        ('panel', 'Effects of four common inventory errors', FOUR,
         'Every row ends the same way: by the close of year 2, retained '
         'earnings are correct.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which of the four rows leaves cost of goods sold and net '
                   'income correct in year 1?',
                 a='Row 3 — the purchase not recorded and the goods not '
                   'counted', why=''),
            dict(t='SHORT',
                 q='In that row, what IS wrong, and by how many items?',
                 a='Inventory and accounts payable are both understated',
                 why='Cost of goods sold and income are still correct, but '
                     'inventory and accounts payable are both understated.'),
            dict(t='SHORT',
                 q='Row 4 has the same unrecorded purchase, but the goods '
                   'WERE counted. What is wrong in year 1 now?',
                 a='Cost of goods sold is understated and net income '
                   'overstated, with liabilities understated', why=''),
            dict(t='SHORT',
                 q='Read the last column of all four rows. What do they have '
                   'in common?',
                 a='Retained earnings are correct at the end of year 2 in '
                   'every case', why=''),
        ]),
        ('hunt',
         'A junior has written four notes about inventory errors. Mark each '
         'right, or write what is wrong with it.',
         ['"Our ending inventory was too high, so our profit was too low."',
          '"The error will still be in retained earnings in two years’ '
          'time."',
          '"We missed a purchase on credit and never counted the goods, so '
          'profit is wrong."',
          '"Net income was overstated by 40, so it was overstated TO 40."'],
         ['wrong — too high an ending inventory understates cost of '
          'goods sold, so profit was too HIGH',
          'wrong — it counterbalances, so retained earnings are correct '
          'after two years',
          'wrong — both sides are understated by the same amount, so '
          'profit is correct; inventory and payables are understated',
          'wrong — overstated BY 40 is the size of the error; '
          'overstated TO 40 would be the new total']),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A purchase on account at year-end was not recorded, and '
                   'the goods were not included in the physical count. What '
                   'is the effect?',
                 o=['Net income is overstated; inventory is correct.',
                    'Net income is understated; accounts payable are correct.',
                    'Net income is correct; inventory and accounts payable '
                    'are both understated.',
                    'Net income and inventory are both overstated.'],
                 a='C',
                 why='Purchases and ending inventory are understated by the '
                     'same amount and cancel in the cost of goods sold '
                     'calculation, so income is right while the balance sheet '
                     'is wrong on both sides.'),
            dict(t='SHORT', lines=2,
                 q='A company finds an error from a prior year. What does it '
                   'do, and what happens if the error has already '
                   'counterbalanced?',
                 a='It restates the prior-year statements, adjusting beginning '
                   'retained earnings; if the error has counterbalanced, '
                   'retained earnings need no adjustment but the comparative '
                   'figures are still restated',
                 why='The correction is a restatement of the prior-year '
                     'statements with an adjustment to beginning retained '
                     'earnings.'),
        ]),
        ('check',
         'A credit purchase is unrecorded and the goods are uncounted. Which '
         'two figures are wrong, and which two are right?',
         'Inventory and accounts payable are understated; cost of goods sold '
         'and net income are correct.',
         'reread row 3 of the four-error panel in cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'error_years',
         'Rebuild the two-year figure for an OVERSTATED ending inventory. '
         'Write all four lines for each year, and the note at the foot of '
         'each.',
         'Year 1: ending inventory overstated by 40, cost of goods sold '
         'understated by 40, pretax income overstated by 40, closing retained '
         'earnings overstated by 40; at 25% tax, net income is overstated by '
         'only 30. Year 2: beginning inventory too high, cost of goods sold '
         'overstated, pretax income understated, closing retained earnings '
         'correct — a counterbalancing error.'),
        ('teach', 'an auditor who has just found a miscount in last '
                  'year’s figures',
         'In three or four sentences, explain what it did to each of the two '
         'years and what has to be done about it now.',
         ['overstated', 'counterbalancing', 'retained earnings', 'restate'],
         'An overstated count understates cost of goods sold and overstates '
         'income in the first year, and does the reverse in the second, so it '
         'is a counterbalancing error and retained earnings are correct again '
         'by the end of year two. That does not make it harmless: the first '
         'year’s income and the first year’s closing balance sheet '
         'were both wrong. The company restates the prior-year statements, '
         'and if the error has already counterbalanced, retained earnings '
         'need no adjustment but the comparative figures still do.'),
    ],
)
