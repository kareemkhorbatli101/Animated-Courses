# -*- coding: utf-8 -*-
"""Handout 7.5 — What the choice of method does to income, taxes and assets."""

HANDOUT = dict(
    id='7.5',
    n=5,
    pages=5,
    title='What the choice does',
    sub='Rising prices · the LIFO reserve · liquidation and the '
        'conformity rule',
    covers=['sec:7.4', 'fig:F07-07', 'box:EXAM TRAP:signs and directions',
            'box:FALSE-FRIEND ALERT:reserve', 'box:TERM BRIDGE:7.4',
            'sc:SC7-7', 'sc:SC7-8', 'p:P7-08', 'p:P7-09', 'p:P7-10',
            'p:P7-11', 'term:lifo reserve', 'term:lifo liquidation',
            'term:lifo conformity rule', 'term:gross profit'],
    skills=[('effects', 3), ('reserve', 3)],
    derived={'485,000': 'the answer to one practice item: LIFO cost of goods '
                        'sold of 500,000 less the 15,000 increase in the LIFO '
                        'reserve',
             '515,000': 'the distractor in that item: the increase added '
                        'instead of subtracted',
             '455,000': 'the distractor in that item: the closing reserve of '
                        '45,000 subtracted instead of the increase',
             '545,000': 'the distractor in that item: the closing reserve '
                        'added'},
    flow=[
        ('speed', [
            'FIFO leaves which costs in ending inventory?',
            'Which method is immune to the choice of system?',
            'Goods available less ending inventory equals',
            'The weighted average per case of olive oil was',
            'Does IFRS allow LIFO?',
            'A perpetual average is called the',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Rising prices push every figure one way'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Prices rose all year. FIFO sends the OLDEST costs to cost '
                   'of goods sold. Will FIFO’s cost of goods sold be the '
                   'highest or the lowest of the three methods?',
                 a='The lowest',
                 why='FIFO puts the old, cheaper costs into cost of goods '
                     'sold.'),
        ]),
        ('move', 'MODEL',
         'Four figures, three methods. Read a column at a time, not a row.'),
        ('fig', 'rising_effects'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which method gives the highest gross profit when prices '
                   'are rising, and which gives the lowest?',
                 a='FIFO highest, LIFO lowest', why=''),
            dict(t='SHORT',
                 q='Which method gives the highest ending inventory, and why '
                   'does that follow from what it sends out?',
                 a='FIFO — it sends the oldest costs out, so the newest '
                   'and dearest stay', why=''),
            dict(t='SHORT',
                 q='Where does the weighted average sit in every column?',
                 a='Between the other two', why=''),
            dict(t='SHORT',
                 q='What does the subtitle say happens to all four columns '
                   'when prices FALL?',
                 a='Every one of them reverses',
                 why='When prices are falling, all these relationships '
                     'reverse.'),
            dict(t='SHORT',
                 q='Each method has a strength. Which one puts current costs '
                   'against current revenues, and which shows inventory close '
                   'to current cost?',
                 a='LIFO matches current costs with current revenues; FIFO '
                   'shows inventory close to current cost',
                 why='LIFO’s income is closer to current economic '
                     'reality but its balance sheet shows old costs; '
                     'FIFO’s income includes gains from holding '
                     'inventory while prices rise.'),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'start from which costs the method sends OUT. Everything else '
         'follows from that in one step.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the chain that takes you from "which costs leave" to "how '
         'much tax".',
         [['FIFO sends the ', 12, ' costs out, so cost of goods sold is ',
           10, ', gross profit is ', 12, ' and tax is ', 12, '.'],
          ['When prices ', 10, ', every one of those reverses.']],
         ['oldest', 'lowest', 'highest', 'fall'],
         'FIFO puts the old, cheaper costs into cost of goods sold. So FIFO '
         'gives the lowest cost of goods sold, the highest gross profit, the '
         'highest income tax and the highest ending inventory. LIFO gives the '
         'opposite. When prices are falling, all these relationships '
         'reverse.'),
        ('contrast',
         'The same company, two price environments',
         [('Prices rising all year',
           ['Which method gives the higher gross profit, FIFO or LIFO?',
            'Which gives the higher tax?',
            'Which gives the higher ending inventory?']),
          ('Prices falling all year',
           ['Which method gives the higher gross profit, FIFO or LIFO?',
            'Which gives the higher tax?',
            'Which gives the higher ending inventory?'])],
         'Only the direction of prices differs. Answer all three rows for '
         'each, and write the one sentence that explains why every answer '
         'flips.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Prices are rising. Which method gives the highest net '
                   'income?',
                 o=['FIFO', 'LIFO', 'Weighted average',
                    'All methods give the same net income.'],
                 a='A',
                 why='FIFO puts the cheapest costs into cost of goods sold, '
                     'so gross profit and net income are highest.'),
            dict(t='MCQ',
                 q='Prices are falling. Which method gives the highest gross '
                   'profit?',
                 o=['FIFO', 'Weighted average', 'LIFO',
                    'All methods give the same gross profit.'],
                 a='C',
                 why='When prices fall every relationship reverses, so LIFO '
                     'now has the cheapest costs in cost of goods sold.'),
        ]),
        ('check',
         'Prices are rising. Put FIFO, LIFO and the weighted average in order '
         'of ending inventory, highest first.',
         'FIFO, weighted average, LIFO.',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The LIFO reserve, and two rules that come with LIFO'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='FIFO ending inventory for Orontes olive oil was 100,000 '
                   'and LIFO was 84,000. What is the difference?',
                 a='16,000', why='That difference is the LIFO reserve.'),
        ]),
        ('move', 'MODEL',
         'How an analyst turns a LIFO company’s figures into FIFO ones.'),
        ('trace', 'Orontes olive oil, 2025',
         [('LIFO reserve = FIFO inventory − LIFO inventory',
           '100,000 − 84,000 = 16,000'),
          ('FIFO inventory = LIFO inventory + the reserve',
           '84,000 + 16,000 = 100,000'),
          ('FIFO cost of goods sold = LIFO cost of goods sold − the '
           'INCREASE in the reserve',
           'Orontes started the year with no reserve, so the increase is the '
           'whole 16,000'),
          ('288,000 − 16,000 = 272,000',
           'which is exactly the FIFO cost of goods sold worked out directly'),
          ('Tax saved by using LIFO this year',
           'at an illustrative rate of 25%, LIFO saved 4,000 of tax')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which figure do you SUBTRACT to get FIFO cost of goods '
                   'sold from LIFO cost of goods sold — the reserve, or '
                   'the increase in the reserve?',
                 a='The increase in the reserve',
                 why='To get FIFO cost of goods sold, subtract the INCREASE '
                     'in the LIFO reserve from LIFO cost of goods sold.'),
            dict(t='SHORT',
                 q='Why is the increase equal to the whole reserve for '
                   'Orontes in 2025?',
                 a='Because Orontes started the year with no reserve', why=''),
            dict(t='SHORT',
                 q='At a 25% rate, how much tax did LIFO save, and on what '
                   'difference in income?',
                 a='4,000, on the 16,000 difference in cost of goods sold',
                 why=''),
        ]),
        ('move', 'MODEL', 'Two more rules that only apply to LIFO companies.'),
        ('panel', 'LIFO liquidation and the conformity rule',
         [['Rule', 'What it means', 'Why it matters'],
          ['LIFO liquidation',
           'a LIFO company sells more units than it buys, so old low-cost '
           'layers flow into cost of goods sold',
           'income rises for one year; it is not a lasting improvement, and '
           'the company should disclose it if it is material'],
          ['LIFO conformity rule',
           'a U.S. tax rule: a company that uses LIFO for its tax return must '
           'also use LIFO in its financial statements',
           'a company that wants the tax benefit of LIFO must also report '
           'lower LIFO profits to investors']],
         ''),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='What is the Orontes LIFO reserve for olive oil at the end '
                   'of 2025 (whole USD)?',
                 o=['4,000', '7,000', '9,000', '16,000'],
                 a='D',
                 why='100,000 FIFO inventory less 84,000 LIFO inventory. '
                     '4,000 is the tax saved, not the reserve.'),
            dict(t='MCQ',
                 q='A company reports LIFO cost of goods sold of 500,000. Its '
                   'LIFO reserve increased from 30,000 to 45,000 during the '
                   'year. What would cost of goods sold be under FIFO?',
                 o=['455,000', '485,000', '515,000', '545,000'],
                 a='B',
                 why='Subtract the INCREASE of 15,000, not the closing '
                     'balance of 45,000, and subtract rather than add: '
                     '500,000 − 15,000 = 485,000.'),
            dict(t='MCQ',
                 q='Prices are rising, and a LIFO company sells more units '
                   'than it buys, so old layers are liquidated. What is the '
                   'effect in that year?',
                 o=['Gross profit decreases.', 'Gross profit increases.',
                    'There is no effect, because costs are historical.',
                    'A loss arises that must be deferred.'],
                 a='B',
                 why='Old low-cost layers flow into cost of goods sold, so '
                     'cost of goods sold falls and income rises for one '
                     'year.'),
            dict(t='MCQ',
                 q='The LIFO conformity rule requires that:',
                 o=['a company using LIFO for its U.S. tax return also uses '
                    'LIFO in its financial statements.',
                    'companies reporting under IFRS use LIFO.',
                    'a company using LIFO applies it to every inventory in '
                    'every country.',
                    'a company using LIFO for its financial statements uses '
                    'FIFO for tax.'],
                 a='A',
                 why='IFRS does not allow LIFO at all, and the rule is about '
                     'tax and the statements agreeing, not about every '
                     'inventory everywhere.'),
            dict(t='TF',
                 q='The LIFO reserve is a reserve in the equity section of '
                   'the balance sheet.',
                 a='F',
                 why='It is only the difference between two inventory '
                     'amounts. It is sometimes called the LIFO allowance or '
                     'revaluation to LIFO.'),
        ]),
        ('check',
         'To convert LIFO cost of goods sold to FIFO, do you add or subtract, '
         'and is it the reserve or the increase in the reserve?',
         'Subtract, and it is the increase in the reserve.',
         'redo the worked trace at the start of cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'rising_effects',
         'Rebuild the rising-prices grid. Write all four column headings and '
         'fill in every cell for all three methods.',
         'FIFO: lowest cost of goods sold, highest gross profit, highest tax, '
         'highest ending inventory. LIFO: the opposite throughout. Weighted '
         'average between the two in every column. Everything reverses when '
         'prices fall.'),
        ('teach', 'the finance director of Orontes',
         'In four to six sentences, advise them. Which method, FIFO or LIFO, '
         'gives lower income taxes for olive oil in 2025, and why? And what '
         'does the conformity rule mean for the financial statements?',
         ['rising prices', 'cost of goods sold', 'taxable income',
          'conformity', 'LIFO reserve'],
         'Prices rose during 2025, so LIFO gives lower income taxes. LIFO '
         'puts the newest, most expensive costs into cost of goods sold, '
         'which lowers gross profit and taxable income; for olive oil, LIFO '
         'saves 4,000 compared with FIFO. However, the LIFO conformity rule '
         'means that if Orontes uses LIFO on its U.S. tax return, it must '
         'also use LIFO in its financial statements, so it will report lower '
         'profits to investors too. Ending inventory will also show older, '
         'lower costs. Orontes should disclose the LIFO reserve of 16,000 so '
         'that readers can compare it with FIFO companies.'),
    ],
)
