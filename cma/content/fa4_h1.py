# -*- coding: utf-8 -*-
"""Volume 4, Handout 1 — What Belongs in Inventory, and at What Cost.

Covers A.2(c): which goods to include, and what costs to include.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_COSTH = ['Cost incurred', 'In inventory?', 'Why']
_COSTW = [40, 20, 40]

HANDOUT = dict(
    n=1,
    title='What Belongs in Inventory, and at What Cost',
    subtitle='Two questions before any pricing method is chosen: which goods '
             'are ours, and what did they cost us to get here?',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the two questions are separated, R2 once shipping terms '
                 'and capitalisable costs arrive.',
        collocations=['include goods in inventory', 'take title to goods',
                      'ship goods FOB shipping point', 'capitalise a cost',
                      'bring inventory to its present location and condition',
                      'hold goods on consignment'],
        pairs=['FOB shipping point / FOB destination',
               'consignor / consignee', 'product cost / period cost',
               'freight-in / freight-out'],
        nots=['Possession does not decide ownership. Goods in your warehouse may '
              'belong to somebody else, and goods on a ship may be yours.',
              'Freight-in and freight-out look alike and are opposites. One is in '
              'inventory, one is a selling expense.'],
    ),

    objectives=[
        'Decide whether goods in transit belong to the buyer or the seller.',
        'Say who reports consigned goods as inventory, and why.',
        'Decide whether a cost is included in inventory or charged to the period.',
        'Compute the cost of a purchase including all the costs that belong in it.',
        'Say what the two questions in this handout have to settle before a cost '
        'flow assumption can be chosen.',
    ],

    terms=[
        ('inventory',
         'Goods held for sale in the ordinary course of business, and the '
         'materials and work in process that will become them.', 'المخزون',
         'Held for sale is the test. A delivery van is not inventory for '
         'Northwind, and it is inventory for a van dealer.'),
        ('FOB shipping point',
         'Title passes when the goods leave the seller’s premises.',
         'تسليم نقطة الشحن',
         'The buyer owns goods in transit, and includes them in inventory although '
         'they are on a ship.'),
        ('FOB destination',
         'Title passes when the goods arrive at the buyer’s premises.',
         'تسليم مكان الوصول',
         'The seller owns goods in transit, and must include them in inventory at '
         'the year end.'),
        ('consignment',
         'An arrangement where one party holds goods for sale on behalf of their '
         'owner.', 'بضاعة الأمانة',
         'The consignor still owns them. Possession has moved and ownership has '
         'not.'),
        ('freight-in',
         'The cost of getting purchased goods to the company.', 'مصاريف الشحن للداخل',
         'Part of the cost of inventory. Freight-out, the cost of delivering to a '
         'customer, is a selling expense.'),
        ('purchase discount',
         'A reduction for paying a supplier early.', 'خصم الشراء',
         'It reduces the cost of inventory. The goods did not cost what the invoice '
         'said if the company paid less.'),
    ],

    blocks=[
        ('scene', 'The %s on Northwind’s balance sheet' % money(N.inventory), [
            'Inventory is the largest current asset Northwind reports after '
            'receivables, and the one with the most judgement inside it.',
            'Before any of the famous questions can be asked — FIFO or LIFO, '
            'and what each does to income — two duller questions have to be '
            'settled. Which goods are actually ours, and what did each of them '
            'cost?',
            'Get either of those wrong and every method in Handout 2 gives a wrong '
            'answer accurately. This handout settles both.',
            'Throughout this volume one product line is followed in detail: the %s, '
            'of which Northwind had %s units available for sale during %s at a '
            'total cost of %s.' % (I.name, num(I.units_available), Y,
                                   money(I.cost_available)),
        ]),
        ('fig', 'workplace', '%s · where the inventory actually is' % N.short,
         [('Ms Haidar', 'financial controller', 'h', FIFO),
          ('Mr Nasr', 'warehouse manager', 'm', LIFO),
          ('Ms Berri', 'purchasing', 'w', WA)],
         [('shelf', 'in the warehouse'), ('ship', 'in transit from the supplier'),
          ('shop', 'at a distributor on consignment'),
          ('truck', 'in transit to a customer')],
         'Four places goods can be at the year end. Only one of them is obvious, '
         'and the other three are where the marks are.'),

        ('part', 'Part 1 · Which goods are ours?',
         'possession is not ownership'),

        ('task', 'Exercise 1A',
         'Decide who owns goods in transit, and who owns goods held on '
         'consignment.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['The shipping term tells you where title passes. Read it literally: the '
          'name says the point at which the goods become the buyer’s.',
          'Blank 3 is the party that still owns goods sitting in somebody '
          'else’s shop.',
          'The last blank is the test that settles all of these cases.']),
        ('fill', 'R1',
         ['Goods sitting in Northwind’s warehouse on 31 December are '
          'obviously its inventory. The harder cases are the goods that are '
          'somewhere else.',
          'Goods on a ship belong to whoever holds title, and the shipping term '
          'says who that is. {FOB} shipping point means title passed when the '
          'goods left the supplier, so they are Northwind’s even though they '
          'are at sea. FOB destination means title passes on arrival, so they are '
          'still the {supplier}’s.',
          'Goods Northwind has sent to a distributor to sell on its behalf are '
          'held on consignment. The distributor has possession, but the '
          '{consignor} — Northwind — still owns them, and still reports '
          'them as inventory.',
          'One test runs through all of these cases, and it is not where the goods '
          'are standing. It is who holds {title} to them at the reporting date.'],
         {'FOB': ('The term names the point where title passes.', ''),
          'supplier': ('Still the seller’s until it arrives.', ''),
          'consignor': ('Possession moved; ownership did not.',
                        'Students exclude consigned goods because they are not in '
                        'the warehouse, which understates inventory and overstates '
                        'cost of sales.'),
          'title': ('Title, not location.', '')},
         ['CIF', 'customer', 'delivery']),
        ('fig', 'fork', 'The test for every awkward case',
         [('Who held title at the reporting date?',
           'THE COMPANY → include the goods, wherever they are', FIFO),
          ('Does somebody else hold them, but we still own them?',
           'STILL OURS → consigned goods are the consignor’s', LIFO),
          ('Do we hold them, but somebody else owns them?',
           'NOT OURS → exclude them, although they are in our warehouse',
           RUST)]),

        ('task', 'Exercise 1B',
         'Decide whether each item belongs in Northwind’s year-end inventory.',
         'Sort each item into the column it belongs in.',
         ['Exercise 1A'],
         ['Read the shipping term before anything else. It settles two of these '
          'six on its own.',
          'Two items are in somebody else’s hands and one of them is still '
          'Northwind’s.',
          'The last item is in Northwind’s warehouse and is not '
          'Northwind’s.']),
        ('sortgrid',
         ['Goods at 31 December %s' % Y, 'IN NORTHWIND’S INVENTORY',
          'NOT IN IT'],
         ['Controllers on the warehouse shelves',
          'Goods on a ship from the supplier, shipped FOB shipping point',
          'Goods on a ship from the supplier, shipped FOB destination',
          'Goods sent to a distributor on consignment, unsold',
          'Goods in a truck on the way to a customer, FOB destination',
          'Goods held in the warehouse for another company on consignment'],
         ['IN NORTHWIND’S INVENTORY', 'IN NORTHWIND’S INVENTORY',
          'NOT IN IT', 'IN NORTHWIND’S INVENTORY',
          'IN NORTHWIND’S INVENTORY', 'NOT IN IT'],
         'The fifth item surprises people: goods already on the truck are still '
         'Northwind’s until they arrive, because title has not passed.'),
        ('fig', 'matrix', 'The same two goods, four locations',
         ['On our shelves', 'In transit, FOB shipping point',
          'In transit, FOB destination', 'At a distributor on consignment'],
         ['Who has possession', 'Whose inventory'],
         [['Us', 'Ours'],
          ['The carrier', 'Ours, if we are the buyer'],
          ['The carrier', 'The seller’s'],
          ['The distributor', 'Ours — we are the consignor']],
         'Possession and ownership agree in only one of these four rows. The exam '
         'sets the other three.'),

        ('part', 'Part 2 · What did they cost?',
         'everything needed to get them here'),

        ('prose', 'Inventory is measured at cost, and cost means more than the '
                  'invoice price. The rule is that inventory includes all the '
                  'costs of bringing the goods to their present location and '
                  'condition.', 'R2'),
        ('prose', 'That phrase does real work. Freight paid to get the goods to '
                  'Northwind is part of their cost, because without it they would '
                  'not be here. Freight paid to send goods to a customer is not, '
                  'because the goods were already here and the delivery is a cost '
                  'of selling rather than of acquiring.', 'R2'),

        ('task', 'Exercise 1C',
         'Decide whether each cost is included in inventory or charged to the '
         'period.',
         'Complete the table. Write yes or no, and the reason.',
         ['Exercise 1B, and the two paragraphs above.'],
         ['Apply the phrase literally: was this cost necessary to bring the goods '
          'to their present location and condition?',
          'Two of these costs look like freight and only one of them is '
          'inventoriable.',
          'The storage cost is the one most often got wrong. Ask whether the '
          'goods were already in a saleable condition while they sat there.']),
        ('table', _COSTH,
         [['Invoice price of the goods', '______________', '______________'],
          ['Freight paid to bring the goods to the warehouse', '______________',
           '______________'],
          ['Import duty on the shipment', '______________', '______________'],
          ['Freight paid to deliver goods to a customer', '______________',
           '______________'],
          ['Storage of finished goods awaiting sale', '______________',
           '______________'],
          ['The purchasing manager’s salary', '______________',
           '______________']],
         FIFO, _COSTW),
        ('answers', 12),
        ('fig', 'buckets', 'Two destinations for every cost',
         [('INTO INVENTORY', FIFO,
           ['Invoice price', 'Freight-in', 'Import duty',
            'Insurance in transit', 'Handling on arrival', '']),
          ('STRAIGHT TO THE PERIOD', RUST,
           ['Freight-out to customers', 'Storage of finished goods',
            'Selling and administrative salaries', 'Abnormal waste',
            'Most interest costs', '']),
          ('THE TEST', SLATE,
           ['Was it needed to bring the goods', 'to their present location',
            'and condition?', 'If not, charge it now', ''])],
         'Write one more cost of your own in each of the first two columns. The '
         'test in the third column decides it.'),

        ('task', 'Exercise 1D',
         'Compute the cost of a purchase including every cost that belongs in it.',
         'Read and complete.',
         ['Exercise 1C'],
         ['Work through the four amounts in order, deciding each one before you '
          'add it.',
          'Two of the four belong in inventory and one does not.',
          'The discount reduces the cost, because that is what the goods actually '
          'cost the company.']),
        ('fill', 'R2',
         ['Northwind buys a consignment of controllers with an invoice price of '
          '$200,000, pays $6,000 of freight to bring them in, pays $9,000 of '
          'import duty, and pays $3,000 to deliver part of the consignment to a '
          'customer two weeks later.',
          'The first three are costs of bringing the goods to their present '
          'location and condition, so all three go into {inventory}. The fourth is '
          'freight-out: the goods were already here, and delivering them is a cost '
          'of {selling}.',
          'The supplier offers 2% for payment within ten days and Northwind takes '
          'it, saving $4,000. That discount {reduces} the cost of the inventory, '
          'because the goods did not in fact cost what the invoice said.',
          'The cost carried into inventory is therefore $200,000 plus $6,000 plus '
          '$9,000 less $4,000, which is {$211,000}.'],
         {'inventory': ('All three were needed to get the goods here.', ''),
          'selling': ('Freight-out is a selling expense.',
                      'Students put freight-out into inventory because it is '
                      'freight. The direction is what matters, not the word.'),
          'reduces': ('What the goods actually cost.', ''),
          '$211,000': ('200,000 + 6,000 + 9,000 − 4,000.', '')},
         ['expense', 'increases', '$214,000']),
        ('fig', 'bridge',
         'Invoice price', 200_000,
         [('Freight-in', 6_000), ('Import duty', 9_000),
          ('Purchase discount taken', -4_000)],
         'Cost carried into inventory', 211_000),

        ('part', 'Part 3 · The pool the whole volume works on',
         'goods available for sale'),

        ('task', 'Exercise 1E',
         'Build the pool of goods available for sale, and say what still has to '
         'be decided.',
         'Read and complete.',
         ['Exercises 1A to 1D'],
         ['Add the four layers. The units and the costs are both given.',
          'Blank 2 is what is left when the units sold are taken out of the units '
          'available.',
          'The last blank is the question this volume has not yet asked, and '
          'Handout 2 asks it.']),
        ('fill', 'R2',
         ['Northwind began %s with %s units of the %s on hand and bought three '
          'further batches during the year. In total %s units were available for '
          'sale, at a cost of {%s}.'
          % (Y, num(I.layers[0][1]), I.name, num(I.units_available),
             money(I.cost_available)),
          'Of those, %s units were sold, which leaves {%s} units in the warehouse '
          'at 31 December.' % (num(I.sold_units), num(I.closing_units)),
          'Both of those figures are facts. They were counted, and no accounting '
          'policy can change either of them.',
          'What is not yet a fact is how the %s of cost is split between the units '
          'sold and the units left. The four batches were bought at four different '
          '{prices}, and which of those prices attaches to the units still on hand '
          'is a choice, and Handout 2 is about making it.'
          % money(I.cost_available)],
         {money(I.cost_available): ('The four layers added together.', ''),
          num(I.closing_units): ('%s available less %s sold.'
                                 % (num(I.units_available), num(I.sold_units)),
                                 ''),
          'prices': ('Four batches, four prices, one choice.',
                     'Students think the method changes what the goods cost. It '
                     'changes only which cost is attached to which unit.')},
         [num(I.units_available), money(N.inventory), 'dates']),
        ('fig', 'ranked', 'The four layers, and what each one cost per unit',
         [(I.layers[0][0], I.layers[0][1] * I.layers[0][2],
           '%s units at $%d' % (num(I.layers[0][1]), I.layers[0][2]), SLATE),
          (I.layers[1][0], I.layers[1][1] * I.layers[1][2],
           '%s units at $%d' % (num(I.layers[1][1]), I.layers[1][2]), FIFO),
          (I.layers[2][0], I.layers[2][1] * I.layers[2][2],
           '%s units at $%d' % (num(I.layers[2][1]), I.layers[2][2]), WA),
          (I.layers[3][0], I.layers[3][1] * I.layers[3][2],
           '%s units at $%d' % (num(I.layers[3][1]), I.layers[3][2]), LIFO)],
         'Prices rose through the year, from $%d to $%d. That one fact drives '
         'everything in Handouts 2, 3 and 4.'
         % (I.layers[0][2], I.layers[3][2]),
         '%s units available, %s of cost'
         % (num(I.units_available), money(I.cost_available))),

        ('watch', 'Units are counted and costs are recorded. Neither is a choice. '
                  'The only choice in this volume is which recorded cost attaches '
                  'to which counted unit, and it changes reported profit without '
                  'changing a single thing about the business.'),

        ('part', 'Part 4 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'At 31 December, goods costing $40,000 are on a ship from a '
                'supplier, shipped FOB shipping point. These goods should be '
                'included in the inventory of:',
         ['The seller, because they have not arrived',
          'The buyer, because title passed when the goods left the seller',
          'Neither, until the goods are received',
          'Both, in proportion to the voyage completed'],
         1, 'Level B',
         'FOB shipping point passes title at despatch, so the buyer owns goods in '
         'transit and must include them. (A) and (C) both treat arrival as the '
         'trigger, which is what FOB destination would mean.'),

        ('mcq', 'Goods held by a distributor on consignment at the year end are '
                'reported as inventory by:',
         ['The distributor, because it has possession',
          'The consignor, because it still owns the goods',
          'Neither party, until the goods are sold',
          'Whichever party bears the cost of insurance'],
         1, 'Level B',
         'Consignment separates possession from ownership, and inventory follows '
         'ownership. (A) is the most frequently chosen wrong answer because the '
         'goods are physically with the distributor.'),

        ('mcq', 'Which of the following costs is NOT included in the cost of '
                'inventory?',
         ['Freight paid to bring purchased goods to the warehouse',
          'Import duty on purchased goods',
          'Freight paid to deliver goods to a customer',
          'Insurance on goods while in transit from the supplier'],
         2, 'Level A',
         'Freight-out is a selling expense: the goods were already in their present '
         'location and condition. The other three were all necessary to get them '
         'there. The word freight appears in two options and points in opposite '
         'directions.'),

        ('mcq', 'A company purchases goods for $200,000, pays $6,000 freight-in and '
                '$9,000 import duty, and takes a $4,000 purchase discount. The cost '
                'of the inventory is:',
         ['$200,000', '$211,000', '$215,000', '$219,000'],
         1, 'Level B',
         '$200,000 + $6,000 + $9,000 − $4,000 = $211,000. (C) ignores the '
         'discount, (D) adds it, and (A) ignores every cost of acquisition — '
         'each wrong answer drops or reverses one element.'),

        ('mcq', 'Storage costs of finished goods awaiting sale are normally:',
         ['Included in the cost of inventory',
          'Charged to the period as incurred',
          'Added to freight-in',
          'Capitalised and amortised over the holding period'],
         1, 'Level C',
         'The goods were already in their present location and condition, so '
         'storing them adds nothing to their cost. Storage that is necessary '
         'before a further production stage is a different case and would be '
         'included — which is why the question says finished goods.'),

        ('mcq', 'Northwind had %s units available for sale at a total cost of %s '
                'and sold %s units. The units remaining are:'
                % (num(I.units_available), money(I.cost_available),
                   num(I.sold_units)),
         [num(I.closing_units), num(I.sold_units), num(I.units_available),
          num(I.units_available + I.sold_units)],
         0, 'Level A',
         '%s − %s = %s units. This figure is a count, and no accounting '
         'choice changes it — only the cost attached to it.'
         % (num(I.units_available), num(I.sold_units), num(I.closing_units))),

        ('mcq', 'Goods are in a truck on the way to a customer at the year end, '
                'shipped FOB destination. They should be reported as inventory of:',
         ['The customer, because the sale has been made',
          'The seller, because title has not yet passed',
          'Neither, because the goods are in transit',
          'The carrier'],
         1, 'Level C',
         'FOB destination passes title on arrival, so the seller still owns the '
         'goods and still reports them. (A) is the trap: an invoice may have been '
         'raised, but the shipping term governs — and the revenue has not been '
         'earned either.'),

        ('tip', 'For every awkward item, write down two things before you answer: '
                'who has it, and who owns it. If those two differ, the question is '
                'testing ownership, and ownership always wins.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1C · the completed table'),
        ('table', _COSTH,
         [['Invoice price of the goods', 'Yes',
           'The basic cost of acquiring them'],
          ['Freight paid to bring the goods to the warehouse', 'Yes',
           'Needed to bring them to their present location'],
          ['Import duty on the shipment', 'Yes',
           'Unavoidable to get the goods here'],
          ['Freight paid to deliver goods to a customer', 'No',
           'The goods were already here; a cost of selling'],
          ['Storage of finished goods awaiting sale', 'No',
           'They were already in a saleable condition'],
          ['The purchasing manager’s salary', 'No',
           'A general operating cost, not traceable to the goods']],
         FIFO, _COSTW),
        ('bullets', [
            '%s units of the %s were available for sale during %s, at a cost of '
            '%s.' % (num(I.units_available), I.name, Y,
                     money(I.cost_available)),
            '%s units were sold and %s units remain.'
            % (num(I.sold_units), num(I.closing_units)),
            'How the %s splits between those two counts is the subject of Handout '
            '2, and it is a choice rather than a fact.'
            % money(I.cost_available),
        ]),
    ],
)
