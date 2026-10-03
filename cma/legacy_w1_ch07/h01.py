# -*- coding: utf-8 -*-
"""Handout 7.1 — Which goods belong in inventory at the year-end date."""

HANDOUT = dict(
    id='7.1',
    n=1,
    pages=4,
    title='Which goods are ours',
    sub='Control at the year-end date · goods in transit · '
        'consignment · goods held for other people',
    covers=['sec:7.1', 'fig:F07-02', 'box:WHAT YOU ALREADY KNOW:7',
            'box:EXAM TRAP:the FOB flip', 'box:FALSE-FRIEND ALERT:FOB',
            'box:TERM BRIDGE:7.1', 'sc:SC7-1', 'sc:SC7-2', 'p:P7-01',
            'term:inventory', 'term:goods in transit',
            'term:fob shipping point', 'term:fob destination',
            'term:consignment', 'term:consignor', 'term:consignee',
            'term:physical count'],
    skills=[('ownership', 3)],
    flow=[
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'The rule is control, not location'),
        ('move', 'ORIENT', 'Two minutes, alone.'),
        ('items', [
            dict(t='SHORT',
                 q='Goods sit in a company’s own warehouse on December '
                   '31. Is that enough to put them in its inventory? Answer '
                   'yes or no.',
                 a='No',
                 why='The rule is control, wherever the goods are. Goods in '
                     'the warehouse that belong to another company must be '
                     'taken out of the count.'),
            dict(t='SHORT',
                 q='A manufacturer such as Orontes has three inventory '
                   'accounts rather than one. Name them.',
                 a='Raw materials, work in process, finished goods',
                 why='A retailer has one inventory account; a manufacturer '
                     'has three.'),
        ]),
        ('move', 'MODEL',
         'Three questions. Work down them for every year-end item an exam '
         'question gives you.'),
        ('fig', 'goods_tree'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Under FOB shipping point, who includes goods that are on '
                   'a truck at the year end?',
                 a='The buyer',
                 why='Control passes to the buyer when the goods leave the '
                     'seller.'),
            dict(t='SHORT',
                 q='Under FOB destination, who includes them?',
                 a='The seller',
                 why='The seller keeps control until the goods arrive.'),
            dict(t='SHORT',
                 q='In a consignment, which of the two parties includes the '
                   'goods, and which never does?',
                 a='The consignor includes them; the consignee never does',
                 why='The goods stay in the consignor’s inventory, even '
                     'though they sit in the consignee’s shop.'),
            dict(t='SHORT',
                 q='Goods belonging to another company are sitting in our '
                   'warehouse and were counted. What must be done to the '
                   'count?',
                 a='They must be taken out of it', why=''),
            dict(t='SHORT',
                 q='Our goods are stored in somebody else’s building and '
                   'were not counted. What must be done to the count?',
                 a='They must be added to it', why=''),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'ask which company controlled the goods on December 31. Control '
         'settles it, not where the goods were standing.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the single test that answers all three questions in the '
         'figure.',
         [['Include the goods the company ', 14, ' on the balance sheet ',
           12, ', wherever they are.'],
          ['Control usually follows legal ', 12, '.']],
         ['controls', 'date', 'title'],
         'The basic rule is simple: include the goods that the company '
         'controls on the balance sheet date, wherever they are. Control '
         'usually follows legal title.'),
        ('contrast',
         'The same truck, two shipping terms',
         [('Shipped December 28, FOB shipping point',
           ['Where are the goods on December 31? On the truck.',
            'Who controlled them on December 31?',
            'Whose inventory?']),
          ('Shipped December 28, FOB destination',
           ['Where are the goods on December 31? On the truck.',
            'Who controlled them on December 31?',
            'Whose inventory?'])],
         'Only the shipping term differs. Answer both questions for each, and '
         'write the word in the term that tells you where control passes.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='On December 28, a supplier in Türkiye ships glass '
                   'bottles to Orontes, FOB shipping point. They arrive on '
                   'January 4. Who includes the bottles in inventory at '
                   'December 31?',
                 o=['The supplier, the seller',
                    'Neither company until the bottles arrive',
                    'Both companies, half each', 'Orontes, the buyer'],
                 a='D',
                 why='Under FOB shipping point, control passes to the buyer '
                     'when the goods leave the seller. The seller keeps goods '
                     'in transit only under FOB destination, and goods are '
                     'never split between two inventories.'),
            dict(t='MCQ',
                 q='Barada Wholesale holds cartons of Orontes tahini on '
                   'consignment and sells them for a commission. Which '
                   'statement is correct at year-end?',
                 o=['Orontes includes the cartons in inventory; Barada does '
                    'not.',
                    'Barada includes the cartons because they are in its '
                    'warehouse.',
                    'Both companies include the cartons.',
                    'Neither company includes the cartons until they are '
                    'sold.'],
                 a='A',
                 why='Orontes is the consignor and still owns the goods. '
                     'Barada, the consignee, never includes them.'),
            dict(t='MCQ',
                 q='A seller ships goods on December 30, FOB destination. The '
                   'goods arrive on January 2. At December 31, the goods '
                   'should be:',
                 o=['included in the buyer’s inventory.',
                    'included in the seller’s inventory, with no sale '
                    'recorded yet.',
                    'removed from the seller’s inventory, with a sale '
                    'recorded.',
                    'excluded from both companies’ inventories.'],
                 a='B',
                 why='Under FOB destination the seller keeps control until '
                     'arrival, so the goods are still its inventory and no '
                     'sale has happened.'),
        ]),
        ('check',
         'Under FOB shipping point, who includes goods in transit? And under '
         'FOB destination?',
         'FOB shipping point: the buyer. FOB destination: the seller.',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Adjusting a physical count'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A warehouse count is a count of what is standing in the '
                   'building. Name one kind of item it will miss, and one it '
                   'will wrongly include.',
                 a='It misses our goods held elsewhere; it wrongly includes '
                   'other people’s goods held by us', why=''),
        ]),
        ('move', 'MODEL',
         'A count, and four memo items. Each memo item moves the count up, '
         'down or not at all.'),
        ('trace', 'A warehouse count, adjusted',
         [('Physical count in the warehouse',
           'what was standing in the building on the count date'),
          ('Goods bought FOB shipping point, still on the truck',
           'ADD — control passed to us when they left the seller'),
          ('Goods sold FOB destination, not yet arrived',
           'ADD — we keep control until they arrive'),
          ('Goods in our warehouse belonging to another company',
           'SUBTRACT — we never controlled them'),
          ('Our goods sitting with a consignee',
           'ADD — a consignor keeps the goods in its own inventory')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SORT',
                 q='Write each item under what it does to the physical count.',
                 regions=['Add to the count', 'Subtract from the count',
                          'No adjustment'],
                 items=['bought FOB shipping point, in transit',
                        'sold FOB destination, in transit',
                        'held in our warehouse for another company',
                        'ours, sitting with a consignee',
                        'held by us on consignment for a consignor'],
                 a=['Add: bought FOB shipping point; sold FOB destination; '
                    'ours with a consignee',
                    'Subtract: held in our warehouse for another company',
                    'No adjustment: goods we hold as consignee were never '
                    'ours to count'],
                 whys=['', '', 'A consignee never includes consigned goods, '
                               'so if they were counted they come out, and if '
                               'they were not, nothing changes.']),
            dict(t='SHORT',
                 q='Two of the five items in the trace are ADD because of a '
                   'shipping term, and one is ADD for a different reason. '
                   'What is that reason?',
                 a='We are the consignor, so goods with a consignee are still '
                   'ours', why=''),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='GRID',
                 q='A warehouse counted 7,500 cartons. Work the four memo '
                   'items through and give the adjusted count.',
                 h=['Memo item', 'Cartons', 'Add, subtract or no change'],
                 rows=[['Physical count', '7,500', 'the starting point'],
                       ['Bought December 29, FOB shipping point, on the truck',
                        '1,000', ''],
                       ['Shipped to a customer December 30, FOB destination',
                        '500', ''],
                       ['In our warehouse, owned by a Beirut producer, and '
                        'counted', '800', ''],
                       ['Ours, placed with a Doha consignee, not counted',
                        '300', ''],
                       ['Adjusted count', '', '']],
                 w=[48, 14, 38],
                 a=['add 1,000', 'add 500', 'subtract 800', 'add 300',
                    'adjusted count 8,500'],
                 whys=['Control passed to us when the goods left the seller.',
                       'Under FOB destination we keep control until they '
                       'arrive.',
                       'They were never ours, and they were counted, so they '
                       'come out.',
                       'A consignor keeps consigned goods in its own '
                       'inventory.',
                       '7,500 + 1,000 + 500 − 800 + 300 = 8,500.']),
        ]),
        ('check',
         'Our goods are sitting in a consignee’s shop and were not '
         'counted. Add, subtract, or no change?',
         'Add — a consignor keeps consigned goods in its own inventory.',
         'redo the sorting item in cycle B.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'goods_tree',
         'Rebuild the three-question figure. Write both branches of each '
         'question and what each branch decides.',
         'In transit: FOB shipping point, the buyer includes them; FOB '
         'destination, the seller does. On consignment: the consignor '
         'includes them, the consignee never does. Held for someone else: '
         'other people’s goods come out of the count, our goods held '
         'elsewhere go in.'),
        ('teach', 'a warehouse manager who is about to do the year-end count',
         'In three or four sentences, tell them what the count will get wrong '
         'on its own, and what you will need from them to fix it.',
         ['control', 'in transit', 'consignment', 'FOB'],
         'The count records what is standing in the building, but the rule is '
         'control on the year-end date, wherever the goods are. So it will '
         'miss goods in transit that are already ours under FOB shipping '
         'point, and goods of ours sitting with a consignee. It will also '
         'wrongly include anything in the building that belongs to somebody '
         'else. What is needed is a memo listing every shipment in transit '
         'with its FOB term, and every consignment in either direction.'),
    ],
)
