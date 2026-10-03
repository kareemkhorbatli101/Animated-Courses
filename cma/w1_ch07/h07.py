# -*- coding: utf-8 -*-
"""Handout 7.7 — The tahini case, worked end to end."""

EXHIBIT = [
    ['Date / item', 'Details', 'Cartons', 'USD'],
    ['Jan 1', 'Beginning inventory at $30', '4,000', '120,000'],
    ['Feb 14', 'Purchase at $31', '10,000', '310,000'],
    ['Jun 3', 'Purchase at $33', '12,000', '396,000'],
    ['Sep 21', 'Purchase at $34', '8,000', '272,000'],
    ['Dec 18', 'Purchase at $35', '6,000', '210,000'],
    ['', 'Goods available for sale', '40,000', '1,308,000'],
    ['Dec 31', 'Physical count in the Amman warehouse', '7,500', ''],
]

MEMO = [
    ['', 'Year-end memo from the warehouse manager', 'Cartons'],
    ['M1', 'Cartons bought on December 29, FOB shipping point, still on the '
           'truck on December 31. The purchase is already recorded.', '1,000'],
    ['M2', 'Cartons shipped to a customer on December 30, FOB destination. '
           'They arrive on January 3.', '500'],
    ['M3', 'Cartons in the warehouse that belong to a Beirut producer. '
           'Orontes sells them on consignment for the producer. They were '
           'included in the count.', '800'],
    ['M4', 'Cartons that Orontes has placed on consignment with a retailer in '
           'Doha. They were not counted.', '300'],
]

HANDOUT = dict(
    id='7.7',
    n=7,
    pages=5,
    title='The tahini case',
    sub='One exhibit, six questions · the count, three methods and the '
        'LIFO reserve',
    covers=['fig:F07-11', 'case:C7-1', 'case:C7-2', 'case:C7-3', 'case:C7-4',
            'case:C7-5', 'case:C7-6'],
    skills=[('ownership', 0), ('costflow', 0), ('reserve', 1)],
    derived={'32,700': 'the weighted-average cost of one carton: '
                       '1,308,000 divided by 40,000 cartons '
                       'available',
             '31,500': 'cartons sold: the 40,000 available less the '
                       'adjusted count of 8,500',
             '277,950': 'weighted-average ending inventory: 8,500 '
                        'cartons at 32.70',
             '259,500': 'LIFO ending inventory on the adjusted '
                        'count: 4,000 at $30 plus 4,500 at $31',
             '139,500': 'the second LIFO layer in that figure: 4,500 '
                        'cartons at $31',
             '2,500': 'the part of the September layer FIFO needs to '
                      'reach 8,500 cartons, after the 6,000 of the '
                      'December layer',
             '4,500': 'the part of the February layer LIFO needs to '
                      'reach 8,500 cartons, after the 4,000 of the '
                      'opening layer'},
    flow=[
        ('speed', [
            'Under FOB shipping point, who includes goods in transit?',
            'Does a consignor include goods held by a consignee?',
            'FIFO leaves which costs in ending inventory?',
            'The LIFO reserve is FIFO inventory less',
            'Goods available less ending inventory equals',
            'An overstated count does what to cost of goods sold?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Reading the exhibit before answering anything'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='An exam case gives you a count and a memo. Which of the '
                   'two do you apply to the other?',
                 a='The memo is applied to the count',
                 why='The count records what was in the building; the memo '
                     'tells you what to add and what to take out.'),
        ]),
        ('move', 'MODEL',
         'Orontes uses a periodic system for tahini. Prices do not change '
         'after December 31.'),
        ('panel', 'Orontes tahini cartons, 2025', EXHIBIT, ''),
        ('panel', 'The year-end memo', MEMO, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='How many cartons were available for sale, and what did '
                   'they cost in total?',
                 a='40,000 cartons costing 1,308,000', why=''),
            dict(t='SHORT',
                 q='Which layer is the oldest and which the newest, and what '
                   'is the unit cost of each?',
                 a='Oldest: 4,000 at $30. Newest: 6,000 at $35', why=''),
            dict(t='SHORT',
                 q='What was the physical count, and is it the figure you '
                   'should use?',
                 a='7,500 — no, it has to be adjusted for the memo',
                 why=''),
            dict(t='SHORT',
                 q='Which memo item describes goods that were never '
                   'Orontes’ to count?',
                 a='M3, the cartons belonging to a Beirut producer', why=''),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='SORT',
                 q='For each memo item, decide how Orontes should adjust the '
                   'physical count.',
                 regions=['Add to the count', 'Subtract from the count',
                          'No adjustment'],
                 items=['M1 (FOB shipping point, bought)',
                        'M2 (FOB destination, sold)',
                        'M3 (held for a Beirut producer)',
                        'M4 (at a Doha consignee)'],
                 a=['Add: M1, M2 and M4',
                    'Subtract: M3',
                    'No adjustment: none of the four'],
                 whys=['M1 became ours when it left the seller; M2 is still '
                       'ours until it arrives; M4 is ours at a consignee.',
                       'M3 belongs to the Beirut producer and was counted.',
                       '']),
            dict(t='SHORT', lines=2,
                 q='Enter the correct number of cartons in ending inventory. '
                   'Show your working.',
                 a='8,500',
                 why='7,500 + 1,000 + 500 − 800 + 300. Adding every '
                     'memo item gives 10,100, which wrongly includes another '
                     'company’s goods; reversing the FOB rules gives '
                     '5,500; using the count unadjusted gives 7,500.'),
        ]),
        ('check',
         'Which single memo item is subtracted from the count, and why?',
         'M3, the cartons belonging to the Beirut producer: Orontes is the '
         'consignee and never includes them.',
         'redo the sorting item in cycle A with the memo panel in front of '
         'you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Four figures out of one exhibit'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='40,000 cartons were available and 8,500 are left. How '
                   'many were sold?',
                 a='31,500', why=''),
        ]),
        ('fig', 'cost_layers'),
        ('move', 'MODEL',
         'The first figure, worked in full. The three that follow are '
         'yours.'),
        ('trace', 'FIFO ending inventory on the adjusted count of 8,500',
         [('FIFO leaves the NEWEST costs in inventory',
           'so start from the last purchase and work backwards'),
          ('Dec 18 layer: 6,000 cartons at $35', '210,000'),
          ('Still need 2,500 cartons, from the Sep 21 layer at $34',
           '85,000'),
          ('FIFO ending inventory', '210,000 + 85,000 = 295,000'),
          ('Check', 'the two layers used total 8,500 cartons, which is the '
                    'adjusted count')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Why does the working start at the December 18 purchase '
                   'rather than at January 1?',
                 a='Because FIFO leaves the newest costs in ending inventory',
                 why=''),
            dict(t='SHORT',
                 q='Why are only 2,500 cartons taken from the September '
                   'layer, when that layer holds 8,000?',
                 a='Because 6,000 of the 8,500 came from the December layer, '
                   'leaving 2,500 to find', why=''),
        ]),
        ('move', 'APPLY', 'Three of your own, with no worked model beside '
                          'them.'),
        ('items', [
            dict(t='SHORT', lines=2,
                 q='Enter weighted-average cost of goods sold in USD. Show '
                   'your working.',
                 a='1,030,050',
                 why='1,308,000 ÷ 40,000 = 32.70 a carton; 31,500 '
                     'cartons sold × 32.70 = 1,030,050. A simple average '
                     'of the unit prices gives 1,026,900, and 277,950 is '
                     'weighted-average ending inventory rather than cost of '
                     'goods sold.'),
            dict(t='MCQ',
                 q='If Orontes had used the UNADJUSTED count of 7,500, its '
                   'FIFO cost of goods sold would have been:',
                 o=['overstated by $34,000', 'understated by $34,000',
                    'correct', 'overstated by 1,000'],
                 a='A',
                 why='The unadjusted count gives FIFO ending inventory of '
                     '261,000 against 295,000, and a lower ending inventory '
                     'raises cost of goods sold by the same 34,000. '
                     '"Overstated by 1,000" gives the difference in cartons '
                     'rather than in dollars.'),
            dict(t='SHORT', lines=3,
                 q='If Orontes used periodic LIFO for tahini, what would the '
                   'LIFO reserve be at December 31 (USD)? The beginning layer '
                   'is the base layer. Show your working.',
                 a='35,500',
                 why='LIFO ending inventory on 8,500 cartons takes the oldest '
                     'costs: 4,000 at $30 is 120,000, and 4,500 at $31 is '
                     '139,500, giving 259,500. The reserve is FIFO less LIFO: '
                     '295,000 − 259,500 = 35,500. Subtracting FIFO from '
                     'LIFO gives the same figure with the wrong sign.'),
        ]),
        ('pair',
         'Compare all three answers with your partner before reading any key.',
         'if a figure differs, check first whether both of you used the '
         'ADJUSTED count of 8,500. That is where the difference usually is.'),
        ('contrast',
         'The same 8,500 cartons, priced two ways',
         [('FIFO', ['Which layers? The newest.',
                    'Ending inventory = ?',
                    'Is this the higher or the lower of the two?']),
          ('LIFO', ['Which layers? The oldest.',
                    'Ending inventory = ?',
                    'Is this the higher or the lower of the two?'])],
         'Answer all three rows for each. Then write what the difference '
         'between the two figures is called, and why a company that uses LIFO '
         'has to disclose it.'),
        ('check',
         'The LIFO reserve for tahini is 35,500. Which of the two inventory '
         'figures is the larger, and by definition which is subtracted from '
         'which?',
         'FIFO is the larger; the reserve is FIFO inventory less LIFO '
         'inventory.',
         'redo the last APPLY item of cycle B, writing both layers out.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'gafs_split',
         'Rebuild the splitting figure and fill it in with the tahini case: '
         'write goods available, the adjusted count, and FIFO ending '
         'inventory and cost of goods sold.',
         'Goods available 1,308,000 for 40,000 cartons. The adjusted count is '
         '8,500 cartons, FIFO ending inventory 295,000, so FIFO cost of goods '
         'sold is 1,308,000 − 295,000 = 1,013,000.'),
        ('teach', 'a colleague who is about to answer a case like this one '
                  'for the first time',
         'In three or four sentences, give them the order to work in and the '
         'one step that everything else depends on.',
         ['memo', 'adjusted count', 'method', 'goods available'],
         'Adjust the count first: work every memo item through the control '
         'test before touching any dollar figure, because every later answer '
         'depends on the adjusted count. Then take goods available for sale '
         'from the exhibit, since every method starts from the same total. '
         'Only then apply the method, costing the units that are LEFT and '
         'taking cost of goods sold as the remainder. If an answer looks odd, '
         'check whether the unadjusted count crept in.'),
    ],
)
