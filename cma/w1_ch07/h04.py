# -*- coding: utf-8 -*-
"""Handout 7.4 — Periodic against perpetual, and your own LIFO calculation."""

PP = [
    ['Method', 'Periodic: ending inventory', 'Periodic: COGS',
     'Perpetual: ending inventory', 'Perpetual: COGS'],
    ['FIFO', '100,000', '272,000', '100,000', '272,000'],
    ['LIFO', '84,000', '288,000', '93,000', '279,000'],
    ['Average (weighted / moving)', '93,000', '279,000', '97,633',
     '274,367'],
]

HANDOUT = dict(
    id='7.4',
    n=4,
    pages=6,
    title='Periodic against perpetual',
    sub='When the system changes the answer · and when it does not '
        '· one calculation of your own',
    covers=['sec:7.3b', 'fig:F07-05', 'fig:F07-06',
            'box:YOUR TURN:Dubai pastry trays', 'p:P7-04',
            'term:periodic inventory system',
            'term:perpetual inventory system', 'term:moving average'],
    skills=[('costflow', 2), ('systems', 3)],
    derived={'22,667': 'the weighted-average cost of one Dubai tray: '
                       '68,000 divided by the 3,000 trays available',
             '18,133': 'weighted-average ending inventory for the '
                       'trays: the 800 left at 22.667 each',
             '49,867': 'weighted-average cost of goods sold for the '
                       'trays: 68,000 less ending inventory of '
                       '18,133',
             '128,000': 'periodic LIFO ending inventory when 5,000 '
                        'olive-oil cases are sold: the oldest '
                        'layers, 1,000 at $40 plus 2,000 at $44',
             '244,000': 'the matching cost of goods sold: 372,000 '
                        'less 128,000',
             '148,000': 'FIFO ending inventory on the same 3,000 '
                        'cases left: 2,000 at $50 plus 1,000 at '
                        '$48'},
    flow=[
        ('speed', [
            'FIFO leaves which costs in ending inventory?',
            'LIFO leaves which costs in ending inventory?',
            'Goods available for sale equals beginning inventory plus',
            'The weighted average per case in the olive-oil example was',
            'Does a cost flow assumption follow the physical flow?',
            'Specific identification suits which kind of item?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Two systems, and when the system matters'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='One system works out cost of goods sold once, at the year '
                   'end. The other updates it after every sale. Which is '
                   'which?',
                 a='Periodic once at the year end; perpetual after every sale',
                 why='In a periodic system the company counts the goods at '
                     'year-end and calculates cost of goods sold for the '
                     'whole period. In a perpetual system it updates '
                     'inventory and cost of goods sold after every purchase '
                     'and every sale.'),
        ]),
        ('fig', 'gafs_split'),
        ('move', 'MODEL',
         'The same Orontes olive oil, run through both systems. Compare the '
         'two pairs of columns row by row.'),
        ('panel', 'Olive oil: periodic against perpetual (whole USD)', PP,
         'The sales took place in April, August and November.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which of the three methods gives exactly the same answer '
                   'under both systems?',
                 a='FIFO',
                 why='FIFO gives the same result in both systems, because the '
                     'oldest units are always sold first.'),
            dict(t='SHORT',
                 q='Under LIFO, how much does cost of goods sold differ '
                   'between the two systems?',
                 a='288,000 against 279,000 — a difference of 9,000',
                 why=''),
            dict(t='SHORT',
                 q='What is the perpetual version of the weighted average '
                   'called, and when is a new average worked out?',
                 a='The moving average — a new average after each '
                   'purchase', why=''),
            dict(t='SHORT', lines=2,
                 q='Write the reason LIFO and the average give different '
                   'answers under the two systems.',
                 a='Under a perpetual system each sale can only use the costs '
                   'that exist on the date of that sale',
                 why=''),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'look for the row where the two pairs of columns are identical. That '
         'row is the method the system does not touch.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write why one method is immune to the choice of system and the '
         'others are not.',
         [[12, ' gives the same answer either way, because the ', 12,
           ' units are always the ones sold first.'],
          ['Under a ', 14, ' system, every other method can only use the '
           'costs that exist on the ', 14, ' of the sale.']],
         ['FIFO', 'oldest', 'perpetual', 'date'],
         'FIFO gives the same result in both systems, because the oldest '
         'units are always sold first. LIFO and the average method do not: '
         'under a perpetual system, each sale can only use the costs that '
         'exist on the date of the sale.'),
        ('contrast',
         'One method, two systems',
         [('Periodic LIFO',
           ['When is cost of goods sold worked out? Once, at the year end.',
            'Which costs are available to it then?',
            'Cost of goods sold = ?']),
          ('Perpetual LIFO',
           ['When is cost of goods sold worked out? At every sale.',
            'Which costs are available to it then?',
            'Cost of goods sold = ?'])],
         'The facts are identical and the method is the same. Answer all '
         'three rows for each, and write the one sentence that explains the '
         '9,000 difference.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which statement about periodic and perpetual systems is '
                   'TRUE?',
                 o=['LIFO gives the same cost of goods sold under both '
                    'systems.',
                    'The moving average always equals the periodic weighted '
                    'average.',
                    'FIFO gives the same cost of goods sold under both '
                    'systems.',
                    'A perpetual system requires specific identification.'],
                 a='C',
                 why='Only FIFO is immune. LIFO and the average both change, '
                     'and a perpetual system works with any cost flow '
                     'assumption.'),
        ]),
        ('check',
         'Which single method gives the same answer under both systems, and '
         'why?',
         'FIFO, because the oldest units are always the ones treated as sold '
         'first, whenever you calculate.',
         'redo the READ THE MODEL questions of cycle A with the comparison '
         'panel in front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Your turn: periodic LIFO, worked by you'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='3,000 trays were available and 2,200 were sold. How many '
                   'are left?',
                 a='800', why=''),
        ]),
        ('move', 'MODEL',
         'The method, worked once on different figures so that the steps are '
         'visible. The arithmetic you will do is not this arithmetic.'),
        ('trace', 'Periodic LIFO, step by step',
         [('1 · Find the cost of goods available for sale',
           'beginning inventory plus every purchase, in both units and '
           'dollars'),
          ('2 · Find how many units are left',
           'units available less units sold'),
          ('3 · Cost the units LEFT at the OLDEST prices',
           'LIFO sends the newest costs out, so the oldest stay behind'),
          ('4 · Cost of goods sold is what remains',
           'goods available less ending inventory — never worked out '
           'separately'),
          ('5 · Check', 'ending inventory plus cost of goods sold must '
                             'equal goods available')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='At which step of the trace is cost of goods sold '
                   'worked out, and how?',
                 a='At step 4, as goods available less ending inventory',
                 why='In a periodic system cost of goods sold is the '
                     'remainder, never calculated layer by layer.'),
            dict(t='SHORT',
                 q='Step 3 costs the units LEFT at the oldest prices. '
                   'Which step tells you how many units that is?',
                 a='Step 2 \u2014 units available less units sold',
                 why=''),
            dict(t='SHORT',
                 q='What does step 5 check, and what does a failed check '
                   'tell you?',
                 a='That ending inventory plus cost of goods sold equals '
                   'goods available \u2014 if it fails, one of the two is '
                   'wrong', why=''),
        ]),
        ('move', 'APPLY',
         'Now two of your own. No worked example beside you this time.'),
        ('items', [
            dict(t='GRID',
                 q='The Dubai plant had 3,000 frozen pastry trays available '
                   'in 2025, costing 68,000. It sold 2,200 trays. Complete '
                   'the grid using the periodic WEIGHTED AVERAGE.',
                 h=['Step', 'Trays', 'USD'],
                 rows=[['Goods available for sale', '3,000', '68,000'],
                       ['Cost of one tray', '', ''],
                       ['Trays left', '', ''],
                       ['Ending inventory', '', ''],
                       ['Cost of goods sold', '', ''],
                       ['Check: the two add back to goods available', '',
                        '']],
                 w=[52, 20, 28],
                 a=['cost of one tray 22.667',
                    'trays left 800',
                    'ending inventory 18,133',
                    'cost of goods sold 49,867',
                    'check: 18,133 + 49,867 = 68,000'],
                 whys=['68,000 divided by the 3,000 trays available.',
                       '3,000 available less 2,200 sold.',
                       '800 trays at 22.667 each.',
                       '2,200 trays at 22.667, or goods available less '
                       'ending inventory.',
                       'If the two do not add back, one of them is wrong.']),
            dict(t='GRID',
                 q='Back to the olive oil, with its four layers of 1,000 at '
                   '$40, 2,000 at $44, 3,000 at $48 and 2,000 at $50, costing '
                   '372,000 in all. This time suppose only 5,000 cases were '
                   'sold. Complete the grid using periodic LIFO.',
                 h=['Step', 'Cases', 'USD'],
                 rows=[['Goods available for sale', '8,000', '372,000'],
                       ['Cases left', '', ''],
                       ['Ending inventory, at the oldest costs', '', ''],
                       ['Cost of goods sold', '', '']],
                 w=[52, 20, 28],
                 a=['cases left 3,000',
                    'ending inventory 128,000',
                    'cost of goods sold 244,000'],
                 whys=['8,000 available less 5,000 sold.',
                       'LIFO leaves the oldest costs: 1,000 at $40 is 40,000, '
                       'and 2,000 at $44 is 88,000.',
                       '372,000 less 128,000. Cost of goods sold is always '
                       'the remainder in a periodic system.']),
            dict(t='SHORT', lines=2,
                 q='Take the same 5,000 cases sold, but under FIFO. Which '
                   'layers make up ending inventory, and is it higher or '
                   'lower than under LIFO?',
                 a='2,000 at $50 and 1,000 at $48, giving 148,000 \u2014 '
                   'higher than LIFO',
                 why='Prices rose through the year, so the newest costs that '
                     'FIFO leaves behind are the dearest.'),
        ]),
        ('check',
         'Under periodic LIFO, which costs stay in ending inventory, and how '
         'is cost of goods sold found?',
         'The oldest costs stay; cost of goods sold is goods available less '
         'ending inventory.',
         'redo the worked trace at the start of cycle B, step by step.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'gafs_split',
         'Rebuild the splitting figure, and write beside each half which of '
         'the two you work out first under a periodic system.',
         'Goods available for sale splits into cost of goods sold (an '
         'expense) and ending inventory (an asset). Under a periodic system '
         'you work out ending inventory first, from the count and the method, '
         'and cost of goods sold is the remainder.'),
        ('teach', 'a colleague moving from a periodic to a perpetual system',
         'In three or four sentences, tell them which of their inventory '
         'figures will change and which will not.',
         ['FIFO', 'LIFO', 'moving average', 'date of the sale'],
         'If they use FIFO, nothing changes: the oldest units are treated as '
         'sold first whenever the calculation is done. If they use LIFO or an '
         'average, the figures will move, because under a perpetual system '
         'each sale can only use the costs that exist on the date of that '
         'sale. The average becomes a moving average, recalculated after '
         'every purchase.'),
    ],
)
