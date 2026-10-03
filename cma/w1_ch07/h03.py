# -*- coding: utf-8 -*-
"""Handout 7.3 — The cost flow assumptions, on one set of facts."""

OIL = [
    ['Date', 'What happened', 'Cases', 'Unit cost', 'Total'],
    ['Jan 1', 'Beginning inventory', '1,000', '$40', '40,000'],
    ['during the year', 'Purchase', '2,000', '$44', '88,000'],
    ['during the year', 'Purchase', '3,000', '$48', '144,000'],
    ['during the year', 'Purchase', '2,000', '$50', '100,000'],
    ['', 'Goods available for sale', '8,000', '', '372,000'],
    ['during the year', 'Sold at $70', '6,000', '', ''],
    ['Dec 31', 'Cases left', '2,000', '', ''],
]

THREE = [
    ['Method', 'Ending inventory (the 2,000 cases left)',
     'Ending inventory', 'Cost of goods sold'],
    ['FIFO', 'the newest costs: 2,000 × $50', '100,000', '272,000'],
    ['LIFO', 'the oldest costs: 1,000 × $40 + 1,000 × $44',
     '84,000', '288,000'],
    ['Weighted average', '2,000 × $46.50 (= 372,000 ÷ 8,000)',
     '93,000', '279,000'],
]

HANDOUT = dict(
    id='7.3',
    n=3,
    pages=6,
    title='Three ways to cut one total',
    sub='Goods available for sale · specific identification, FIFO, LIFO '
        'and the weighted average',
    covers=['sec:7.3', 'fig:F07-01', 'fig:F07-04',
            'box:WORKED EXAMPLE:three methods', 'box:LANGUAGE FOCUS:time and '
            'order', 'box:IFRS CONTRAST:no LIFO', 'box:TERM BRIDGE:7.3',
            'sc:SC7-5', 'sc:SC7-6', 'p:P7-05', 'p:P7-06', 'p:P7-07',
            'term:cost of goods sold', 'term:goods available for sale',
            'term:fifo (first-in, first-out)', 'term:lifo (last-in, '
            'first-out)', 'term:weighted-average cost',
            'term:cost flow assumption', 'term:specific identification'],
    skills=[('costflow', 3)],
    derived={'144,000': 'the 3,000-case layer extended: 3,000 cases at '
                        '$48. The book gives the layer and the unit cost; '
                        'the panel multiplies them out',
             '1,838': 'the distractor in one practice item: a weighted '
                      'average applied to the units left',
             '3,300': 'the distractor in one practice item: goods available '
                      'for sale rather than ending inventory',
             '2,100': 'the distractor in one practice item: FIFO ending '
                      'inventory rather than LIFO',
             '1,600': '100 units at $10 plus 50 units at $12, the oldest '
                      'costs left under periodic LIFO'},
    flow=[
        ('speed', [
            'Which test decides an inventoriable cost?',
            'Freight-out is which kind of cost?',
            'Fixed overhead is allocated on which basis?',
            'A purchase discount taken does what to cost?',
            'Abnormal waste is inventoriable: true or false?',
            'Under FOB destination, who includes goods in transit?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'One total, and the cut that splits it'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A company starts the year with goods, buys more, and '
                   'sells some. Every unit it had is now in one of two '
                   'places. Name both.',
                 a='Cost of goods sold, and ending inventory', why=''),
        ]),
        ('move', 'MODEL',
         'The whole chapter in one equation. Read the two boxes and where '
         'each one is reported.'),
        ('fig', 'gafs_split'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='FILL',
                 parts=['Beginning inventory + ', 14, ' = goods available '
                        'for sale = ', 22, ' + ', 20, '.'],
                 a=['purchases', 'cost of goods sold', 'ending inventory'],
                 whys=['', '', '']),
            dict(t='SHORT',
                 q='Which of the two halves is an expense, and which is an '
                   'asset?',
                 a='Cost of goods sold is an expense; ending inventory is an '
                   'asset', why=''),
            dict(t='SHORT', lines=2,
                 q='Write the sentence under the figure that says what a cost '
                   'flow assumption does and does not do.',
                 a='It moves the cut; it never changes what is being cut',
                 why=''),
            dict(t='TF',
                 q='A cost flow assumption has to match the order in which '
                   'the goods physically move.',
                 a='F',
                 why='It does not need to match the physical flow of the '
                     'goods. A company can use LIFO even if it ships its '
                     'oldest bottles first.'),
        ]),
        ('move', 'MODEL', 'The four methods, in a line each.'),
        ('panel', 'The four cost flow assumptions',
         [['Method', 'What it sends to cost of goods sold'],
          ['Specific identification',
           'the actual cost of each item — suits unique, expensive '
           'items such as cars or jewelry'],
          ['FIFO (first-in, first-out)',
           'the OLDEST costs, so ending inventory holds the newest'],
          ['LIFO (last-in, first-out)',
           'the NEWEST costs, so ending inventory holds the oldest'],
          ['Weighted-average cost',
           'one unit cost for everything: the cost of goods available '
           'divided by the units available']],
         ''),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write what FIFO and LIFO leave behind in ending inventory, from '
         'what each one sends out.',
         [['FIFO sends the ', 12, ' costs out, so ending inventory holds the ',
           12, ' costs.'],
          ['LIFO sends the ', 12, ' costs out, so ending inventory holds the ',
           12, ' costs.']],
         ['oldest', 'newest'],
         'FIFO (first-in, first-out) sends the oldest costs to cost of goods '
         'sold. Ending inventory holds the newest costs. LIFO (last-in, '
         'first-out) sends the newest costs to cost of goods sold. Ending '
         'inventory holds the oldest costs.'),
        ('contrast',
         'The same 2,000 cases left, priced two ways',
         [('FIFO', ['Which costs went out? The oldest.',
                    'So which costs are left?',
                    'At $50 a case, what is ending inventory?']),
          ('LIFO', ['Which costs went out? The newest.',
                    'So which costs are left?',
                    'At $40 and $44 a case, what is ending inventory?'])],
         'The units left are identical. Answer all three rows for each, and '
         'write the one sentence that says why the two answers differ.'),
        ('check',
         'Under LIFO, ending inventory holds which costs — the oldest or '
         'the newest?',
         'The oldest.',
         'redo the contrasting cases in cycle A.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The same facts, costed three ways'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='8,000 cases cost 372,000 in total. What is the average '
                   'cost of one case?',
                 a='$46.50', why='372,000 ÷ 8,000 = 46.50.'),
        ]),
        ('move', 'MODEL',
         'Orontes sells premium olive oil in cases of twelve bottles, and '
         'prices rose during 2025.'),
        ('panel', 'Orontes olive oil, 2025 · a periodic system', OIL,
         ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='How many cases were available in total, and what did they '
                   'cost?',
                 a='8,000 cases costing 372,000', why=''),
            dict(t='SHORT',
                 q='How many cases were sold, and how many are left?',
                 a='6,000 sold, 2,000 left', why=''),
            dict(t='SHORT',
                 q='Which purchase was the most expensive per case, and which '
                   'layer is the oldest?',
                 a='The 2,000 at $50 was dearest; the 1,000 at $40 is the '
                   'oldest', why=''),
        ]),
        ('predict',
         'Before you see the answers: of FIFO, LIFO and the weighted average, '
         'write which you expect to give the HIGHEST ending inventory, and '
         'why.',
         'FIFO gives the highest, 100,000, because prices rose and FIFO '
         'leaves the newest and dearest costs in inventory.'),
        ('move', 'MODEL', 'The three cuts, drawn on the layers.'),
        ('fig', 'cost_layers'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Under FIFO, what is ending inventory and what is cost of '
                   'goods sold?',
                 a='Ending inventory 100,000; cost of goods sold 272,000',
                 why='The 2,000 cases left are costed at the newest price, '
                     '$50.'),
            dict(t='SHORT',
                 q='Under LIFO, which two layers make up ending inventory?',
                 a='1,000 at $40 and 1,000 at $44, giving 84,000', why=''),
            dict(t='SHORT',
                 q='Add ending inventory and cost of goods sold for each of '
                   'the three rows. What do you get every time?',
                 a='372,000',
                 why='In each row, ending inventory plus cost of goods sold '
                     'equals the cost of goods available. Only the split is '
                     'different.'),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='In the Orontes olive-oil example above, what is FIFO cost '
                   'of goods sold (whole USD)?',
                 o=['100,000', '272,000', '279,000', '288,000'],
                 a='B',
                 why='100,000 is FIFO ending inventory, 279,000 is the '
                     'weighted average and 288,000 is LIFO.'),
            dict(t='MCQ',
                 q='What is the weighted-average cost per case of olive oil '
                   'in the example above?',
                 o=['$40.00', '$45.50', '$46.50', '$50.00'],
                 a='C',
                 why='372,000 ÷ 8,000 = 46.50. $40 is the oldest unit '
                     'cost and $50 the newest.'),
            dict(t='MCQ',
                 q='Under LIFO, ending inventory consists of:',
                 o=['the newest costs.', 'an average of all costs.',
                    'the actual cost of each unit still on hand.',
                    'the oldest costs.'],
                 a='D',
                 why='LIFO sends the newest costs out, so the oldest stay. '
                     'The third option describes specific identification.'),
            dict(t='MCQ',
                 q='Specific identification is MOST appropriate for:',
                 o=['unique, high-value items such as cars.',
                    'large volumes of identical glass bottles.',
                    'any items when prices are rising.',
                    'perishable food products.'],
                 a='A',
                 why='It tracks the actual cost of each item, which is only '
                     'practical when the items are few and distinguishable.'),
            dict(t='MCQ',
                 q='Beginning inventory was 100 units at $10. The company '
                   'bought 200 units at $12 and then 100 units at $15. It '
                   'sold 250 units. Using periodic LIFO, what is ending '
                   'inventory?',
                 o=['1,600', '1,838', '2,100', '3,300'],
                 a='A',
                 why='400 units were available and 250 sold, so 150 are left. '
                     'LIFO leaves the oldest: 100 at $10 plus 50 at $12 = '
                     '1,600. 2,100 is the FIFO answer and 1,838 a weighted '
                     'average; 3,300 is goods available for sale.'),
        ]),
        ('check',
         'Ending inventory plus cost of goods sold equals what, under every '
         'method?',
         'The cost of goods available for sale.',
         'redo the READ THE MODEL questions of cycle B with the layers figure '
         'in front of you.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'cost_layers',
         'Rebuild the layers figure. Draw the four layers in order, then show '
         'where FIFO and where LIFO cut, and write both figures for each.',
         'Layers 1,000 at $40, 2,000 at $44, 3,000 at $48, 2,000 at $50. FIFO '
         'cuts from the old end: cost of goods sold 272,000, ending inventory '
         '100,000. LIFO cuts from the new end: cost of goods sold 288,000, '
         'ending inventory 84,000. Weighted average 279,000 and 93,000.'),
        ('teach', 'a classmate who thinks LIFO means the company ships its '
                  'newest bottles first',
         'In three or four sentences, explain what a cost flow assumption is '
         'actually about.',
         ['costs', 'physical flow', 'assumption', 'ending inventory'],
         'A cost flow assumption is a decision about which costs go to cost '
         'of goods sold and which stay in ending inventory. It does not have '
         'to match the physical flow of the goods at all: a company can ship '
         'its oldest bottles first and still use LIFO for its costs. '
         'First-in, first-out describes costs, not cartons.'),
    ],
)
