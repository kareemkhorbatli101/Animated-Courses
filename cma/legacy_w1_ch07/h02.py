# -*- coding: utf-8 -*-
"""Handout 7.2 — Which costs go into the asset, and which leave as expenses."""

BOTTLES = [
    ['Item', 'Amount', 'Inventory cost?'],
    ['Invoice price', '20,000', 'Yes'],
    ['Purchase discount taken', '(400)', 'Yes (reduces cost)'],
    ['Freight-in from the port to Amman', '1,200', 'Yes'],
    ['Import duty (not refundable)', '900', 'Yes'],
    ['Insurance while the bottles are in transit', '300', 'Yes'],
    ['Freight-out when filled bottles go to customers', '700',
     'No: selling expense'],
    ['Storage of finished olive oil', '250', 'No: period cost'],
    ['Cost of the bottles in inventory', '22,000', ''],
]

HANDOUT = dict(
    id='7.2',
    n=2,
    pages=5,
    title='Which costs go into the asset',
    sub='Inventoriable against period · normal capacity · abnormal '
        'waste',
    covers=['sec:7.2', 'fig:F07-03', 'box:WORKED EXAMPLE:glass bottles',
            'box:IFRS CONTRAST:7.2', 'box:TERM BRIDGE:7.2', 'sc:SC7-3',
            'sc:SC7-4', 'p:P7-02', 'p:P7-03', 'term:freight-in',
            'term:freight-out', 'term:purchase discount',
            'term:normal capacity', 'term:abnormal waste',
            'term:inventoriable cost', 'term:period cost'],
    skills=[('costs', 3)],
    flow=[
        ('speed', [
            'Under FOB shipping point, who includes goods in transit?',
            'Does a consignee include consigned goods?',
            'The rule for which goods are ours is',
            'Our goods at a consignee: add or subtract from the count?',
            'A manufacturer has how many inventory accounts?',
            'Other people’s goods in our warehouse: add or subtract?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'One test, applied to every cost'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Freight paid to get goods INTO the warehouse, and freight '
                   'paid to send them OUT to a customer. Only one of the two '
                   'helps bring the goods to their present condition and '
                   'location. Which?',
                 a='Freight-in',
                 why='Freight-out happens after the goods are ready, so it is '
                     'a selling expense.'),
        ]),
        ('move', 'MODEL',
         'Two columns. The rule above each column is the only thing worth '
         'memorising; the lists follow from it.'),
        ('fig', 'cost_split'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Write the test that decides which column a cost goes in.',
                 a='Did it help bring the goods to their present condition '
                   'and location?', why=''),
            dict(t='SHORT',
                 q='What happens to an inventoriable cost when the goods are '
                   'sold?',
                 a='It becomes cost of goods sold', why=''),
            dict(t='SHORT',
                 q='The figure lists one item that REDUCES inventory cost '
                   'rather than adding to it. Which?',
                 a='Trade and purchase discounts', why=''),
            dict(t='SHORT',
                 q='On what basis is fixed production overhead allocated to '
                   'units, and what happens to the part that is not '
                   'allocated?',
                 a='On normal capacity; the unallocated part is an expense of '
                   'the period',
                 why='Normal capacity is the output the plant expects on '
                     'average over several periods. If output is unusually '
                     'low, the fixed overhead that is not allocated is an '
                     'expense. It is not added to inventory.'),
            dict(t='SHORT',
                 q='Name the three things the figure counts as abnormal '
                   'waste.',
                 a='Unusual spoilage, idle time, extra freight', why=''),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'ask whether the cost happened before or after the goods were ready '
         'for use. That is nearly always what settles it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the rule in one sentence, and say where each kind of cost '
         'ends up.',
         [['A cost is inventoriable if it was needed to bring the goods to '
           'their present ', 14, ' and ', 14, '.'],
          ['An inventoriable cost stays as an ', 12, ' until the goods are '
           'sold. A ', 14, ' cost is an expense straight away.']],
         ['condition', 'location', 'asset', 'period'],
         'Cost means all the costs needed to bring the goods to their present '
         'condition and location. These are inventoriable costs: they stay in '
         'inventory as an asset, and they become cost of goods sold when the '
         'goods are sold. Other costs are period costs: they are expenses in '
         'the period in which they occur.'),
        ('contrast',
         'Two kinds of freight, in the same month',
         [('Freight-in from the port to the Amman plant',
           ['Does it happen before or after the goods are ready?',
            'Does it bring them to their present location?',
            'Inventoriable or period?']),
          ('Freight-out when filled bottles go to customers',
           ['Does it happen before or after the goods are ready?',
            'Does it bring them to their present location?',
            'Inventoriable or period?'])],
         'Both are freight, and both are paid to a haulier. Answer all three '
         'rows for each, and write the one word that tells them apart.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which cost is included in the cost of inventory?',
                 o=['Freight-out to customers', 'Sales commissions',
                    'Freight-in on purchased goods',
                    'Storage of finished goods'],
                 a='C',
                 why='Only freight-in helps bring the goods to their present '
                     'condition and location. The other three all happen '
                     'after the goods are ready.'),
            dict(t='MCQ',
                 q='Which item is a period cost for Orontes?',
                 o=['Import duties on sesame seeds',
                    'Freight-in on glass bottles',
                    'Wages of bottling-line workers',
                    'Advertising for a new tahini brand'],
                 a='D',
                 why='Advertising has no part in bringing goods to their '
                     'condition and location. Duties, freight-in and direct '
                     'labour all do.'),
            dict(t='MCQ',
                 q='A strike cut production far below normal capacity. How '
                   'should the fixed production overhead that was not '
                   'allocated to units be treated?',
                 o=['As an expense of the period',
                    'Added to the cost of the units produced',
                    'Deferred as an asset to next year',
                    'Charged directly to retained earnings'],
                 a='A',
                 why='Fixed overhead is allocated on normal capacity. What is '
                     'not allocated when output is unusually low is an '
                     'expense, not inventory cost.'),
        ]),
        ('check',
         'Give the one test for an inventoriable cost, and name two costs '
         'that fail it.',
         'Did it bring the goods to their present condition and location? '
         'Freight-out and storage of finished goods both fail it.',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Costing one shipment, line by line'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='An invoice is $20,000 and the buyer pays early, taking a '
                   '2% discount. What is the discount in dollars?',
                 a='400', why='2% of 20,000.'),
        ]),
        ('move', 'MODEL',
         'Orontes imports glass bottles for the Amman plant. Seven lines, '
         'each marked.'),
        ('panel', 'The cost of imported glass bottles (whole dollars)',
         BOTTLES,
         'The last two lines happen after the goods are ready for use.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='How many of the seven lines are inventoriable, and how '
                   'many are not?',
                 a='Five are; two are not', why=''),
            dict(t='SHORT',
                 q='Which line is shown in brackets, and why does it appear '
                   'with a minus?',
                 a='The purchase discount taken — it reduces the cost',
                 why=''),
            dict(t='SHORT',
                 q='Add the five inventoriable lines. What is the cost of the '
                   'bottles in inventory?',
                 a='22,000',
                 why='20,000 − 400 + 1,200 + 900 + 300 = 22,000.'),
            dict(t='SHORT', lines=2,
                 q='Write the reason the panel gives for leaving the last two '
                   'lines out.',
                 a='They happen after the goods are ready for use, so they do '
                   'not bring them to their present condition and location',
                 why=''),
        ]),
        ('hunt',
         'A junior has costed the same shipment four ways. Mark each one '
         'right, or write what is wrong with it.',
         ['20,000 + 1,200 + 900 + 300 = 22,400',
          '20,000 − 400 + 1,200 + 900 + 300 = 22,000',
          '20,000 − 400 + 1,200 + 900 + 300 + 700 + 250 = 22,950',
          '20,000 + 1,200 − 400 = 20,800'],
         ['wrong — the purchase discount of 400 has been left out',
          'right',
          'wrong — freight-out and storage are period costs, not '
          'inventory cost',
          'wrong — the import duty and the transit insurance are '
          'missing']),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Using the glass-bottle panel above, what is the cost of '
                   'the bottles in inventory (whole USD)?',
                 o=['20,800', '22,000', '22,400', '22,950'],
                 a='B',
                 why='20,800 drops the duty and the insurance; 22,400 forgets '
                     'the discount; 22,950 wrongly adds freight-out and '
                     'storage.'),
            dict(t='SHORT', lines=2,
                 q='IAS 2 lists the same exclusions as U.S. GAAP for the cost '
                   'of inventory. Name the one big IFRS difference the '
                   'chapter warns is coming, and say which section it belongs '
                   'to.',
                 a='IAS 2 does not allow LIFO — it belongs to the cost '
                   'flow assumptions',
                 why='IAS 2 uses the same idea of cost and lists the same '
                     'exclusions: abnormal waste, storage, administrative '
                     'overheads and selling costs.'),
        ]),
        ('check',
         'Of these four, which three are inventoriable: import duty, '
         'freight-in, sales commission, transit insurance?',
         'Import duty, freight-in and transit insurance. The sales commission '
         'is a period cost.',
         'redo the error hunt in cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'cost_split',
         'Rebuild the two-column figure. Write the rule above each column and '
         'at least five items under each.',
         'Inventoriable: purchase price, freight-in, import duties, '
         'non-refundable taxes, handling, less discounts, direct labour, '
         'production overhead at normal capacity. Period: freight-out, sales '
         'commissions, advertising, general and administrative costs, storage '
         'of finished goods, interest, abnormal waste, unallocated fixed '
         'overhead.'),
        ('teach', 'a buyer who wants to know why the discount they negotiated '
                  'does not show up as income',
         'In three or four sentences, explain where a purchase discount goes '
         'and why.',
         ['cost', 'inventory', 'reduces', 'cost of goods sold'],
         'A purchase discount taken is not income; it reduces what the goods '
         'cost. Inventory is recorded at the cost of bringing the goods to '
         'their present condition and location, and the discount lowers that '
         'cost. So it sits in the asset until the goods are sold, and then it '
         'shows up as a lower cost of goods sold, which raises gross profit '
         'in the period of the sale rather than the period of the purchase.'),
    ],
)
