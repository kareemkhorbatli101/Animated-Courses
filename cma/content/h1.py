# -*- coding: utf-8 -*-
"""Handout 1 — The Inventoriable Decision."""
from data import S1, money, num

HANDOUT = dict(
    n=1,
    title='The Inventoriable Decision',
    subtitle='Every costing question in Part 1 comes back to one choice: which costs '
             'go into inventory, and which go straight to the income statement.',
    register='Mostly R1, ending at R2',

    lang=dict(
        register='R1 Teaching English. Short sentences, one idea each. Read every '
                 'sentence aloud once before you write in it.',
        collocations=['incur a cost', 'a cost attaches to the product',
                      'flow into inventory', 'charge a cost to the period',
                      'trace a cost', 'allocate a cost'],
        pairs=['cost / expense / expenditure', 'direct / variable',
               'indirect / fixed', 'overhead / expenses'],
        nots=['A cost is not an expense until it is matched against revenue.',
              'Direct is about tracing. Variable is about behaviour. They are '
              'different questions.'],
    ),

    objectives=[
        'Name the cost object before you classify any cost.',
        'Say whether a cost is variable or fixed in total, and what it does per unit.',
        'Separate direct from indirect, and explain why that is not the same question '
        'as variable and fixed.',
        'Decide whether a cost is a product cost or a period cost.',
        'State the one cost whose treatment separates absorption costing from '
        'variable costing.',
    ],

    terms=[
        ('cost object', 'Anything you want the cost of: a product, a department, a '
         'customer, an order.', 'هدف التكلفة',
         'Always fix this first. "Is rent a direct cost?" has no answer until you say '
         'direct to what.'),
        ('cost driver', 'The thing that makes a cost change.', 'مسبب التكلفة',
         'A driver is not the same as the cost. Machine hours drive power cost; they '
         'are not a cost.'),
        ('variable cost', 'A cost whose total rises in proportion to activity.',
         'تكلفة متغيرة',
         'Variable in TOTAL. Per unit it is constant. The exam reverses this to trap you.'),
        ('fixed cost', 'A cost whose total does not change as activity changes, within '
         'the relevant range.', 'تكلفة ثابتة',
         'Fixed in TOTAL. Per unit it falls as volume rises. This single fact causes '
         'most of the errors in this topic.'),
        ('mixed cost', 'A cost with a fixed part and a variable part.',
         'تكلفة مختلطة', 'Also called semi-variable.'),
        ('relevant range', 'The band of activity over which the fixed cost really '
         'stays fixed.', 'المدى الملائم',
         'Outside it, a "fixed" cost steps up. The exam uses this for capacity questions.'),
        ('direct cost', 'A cost you can trace to the cost object economically.',
         'تكلفة مباشرة',
         'Direct is about traceability, not behaviour. A direct cost can be fixed.'),
        ('indirect cost', 'A cost you cannot trace, so you allocate it.',
         'تكلفة غير مباشرة',
         'Indirect is not a synonym for fixed. Factory electricity is indirect and '
         'largely variable.'),
        ('prime cost', 'Direct materials plus direct labour.', 'التكلفة الأولية', ''),
        ('conversion cost', 'Direct labour plus manufacturing overhead.',
         'تكلفة التحويل',
         'Direct labour is in BOTH prime and conversion cost. The exam asks you to add '
         'them and the answer double-counts labour on purpose.'),
        ('product cost', 'A cost that attaches to the goods and sits in inventory until '
         'they are sold.', 'تكلفة المنتج',
         'Also called an inventoriable cost. Which costs qualify is exactly what this '
         'set is about.'),
        ('period cost', 'A cost charged against income in the period it is incurred.',
         'تكلفة الفترة',
         'Not "a cost of the period" in a loose sense — it is a technical label that '
         'decides the timing of the expense.'),
        ('manufacturing overhead', 'All factory cost that is not direct materials or '
         'direct labour.', 'التكاليف الصناعية غير المباشرة',
         'Factory only. A sales manager’s salary is never manufacturing overhead.'),
        ('absorption costing', 'All manufacturing cost, fixed and variable, is a product '
         'cost.', 'تكلفة الاستيعاب / التكلفة الكلية',
         'Not the same as "total cost". Selling costs stay outside it.'),
        ('variable costing', 'Only variable manufacturing cost is a product cost. Fixed '
         'factory overhead is a period cost.', 'التكلفة المتغيرة',
         'Sometimes called direct costing, which is a bad old name — it has nothing to '
         'do with direct costs.'),
        ('expense', 'A cost that has been matched against revenue and now sits on the '
         'income statement.', 'مصروف',
         'Every expense was a cost first. Not every cost has become an expense yet.'),
        ('inventoriable cost', 'Another name for a product cost: a cost carried in '
         'inventory until the unit is sold.', 'تكلفة قابلة للتخزين',
         'The exam uses "product cost" and "inventoriable cost" in one question as '
         'though you already knew they were the same thing.'),
        ('cost of goods sold', 'The cost of the units actually sold in the period.',
         'تكلفة البضاعة المباعة', 'Units SOLD. Not units made, and not units available.'),
        ('full costing', 'Another name for absorption costing.', 'التكلفة الكلية',
         '"Full" means all MANUFACTURING cost. It does not mean every cost the business '
         'incurs.'),
        ('direct costing', 'An older name for variable costing.', 'التكلفة المباشرة',
         'A false friend, and the worst one in this topic. It is about cost BEHAVIOUR, '
         'not about direct costs.'),
    ],

    blocks=[
        ('scene', 'The plant you will work in all week', [
            'Grandview Instruments makes one product: a sealed pressure sensor used in '
            'water treatment plants. One factory, one production line, one selling price.',
            'You will meet this company in all six handouts. In this one you are not '
            'calculating anything yet. You are learning to put each cost in the right '
            'box, because every calculation later depends on that.',
            'The factory manager has sent you a list of the costs she incurs in a month. '
            'She wants to know which ones belong to the sensors sitting in the warehouse, '
            'and which ones belong to the month that has just finished.',
        ]),

        ('part', 'Part 1 · What are you costing?', 'the cost object'),

        ('task', 'Exercise 1A', 'Read and complete. Write one word in each space.'),
        ('fill', 'R1',
         'A cost is never direct or indirect on its own. It is direct or indirect with '
         'respect to something, and that something is called the cost {object}. At '
         'Grandview the cost object is usually the {sensor}, because the company wants '
         'to know the cost of one unit. But the cost object could also be a department, '
         'a customer, or a single order. Change the cost object and the same cost can '
         'change its classification. The salary of the factory supervisor cannot be '
         'traced to one sensor, so it is {indirect} with respect to a sensor. With '
         'respect to the factory as a whole it is {direct}, because it belongs to the '
         'factory and to nothing else.',
         {'object': ('Nothing can be classified until you name what you are costing.',
                     'Students classify costs with no cost object in mind.'),
          'sensor': ('The company sells one product, so the unit is the natural cost object.', ''),
          'indirect': ('You cannot trace a supervisor to one unit, so you allocate.', ''),
          'direct': ('The same cost is direct to a bigger cost object.',
                     'Thinking a cost has one fixed classification for ever.')}),

        ('prose', 'One more word before you classify anything. The activity that makes '
                  'a cost move is its cost driver: machine hours drive the power bill, '
                  'units produced drive the material cost, deliveries drive the shipping '
                  'cost. A cost driver is not itself a cost. Naming the cost driver is '
                  'usually the fastest way to decide how a cost behaves — a cost with no '
                  'driver at the level of activity you are looking at is a fixed cost, '
                  'and a cost with a standing charge plus a driver-related element is a '
                  'mixed cost.', 'R1'),

        ('watch', 'Write the cost object at the top of your page before you classify '
                  'anything. In the exam, the stem always tells you — "with respect to '
                  'the product", "for the department". Underline it.'),

        ('part', 'Part 2 · How does the cost behave?', 'variable, fixed and mixed'),

        ('task', 'Exercise 1B', 'Read and complete.'),
        ('fill', 'R1',
         'Cost behaviour is about what happens to a cost when activity changes. A '
         'variable cost changes in {total} as output changes, but stays constant '
         '{per unit}. The direct material in one sensor costs $18 whether Grandview '
         'makes one sensor or fifty thousand. A fixed cost is the opposite. Its total '
         'does {not} change as output changes, so the amount carried by each unit '
         '{falls} as output rises. Factory rent of $600,000 is $12 per unit at 50,000 '
         'units and $20 per unit at 30,000 units. The cost did not change. Only the '
         'number of units sharing it changed.',
         {'total': ('Variable costs vary in total, which is the definition.', ''),
          'per unit': ('The per-unit variable cost is the constant one.',
                       'Candidates say "variable cost changes per unit". It does not.'),
          'not': ('Fixed total is flat inside the relevant range.', ''),
          'falls': ('More units share the same total, so each carries less.',
                    'This single sentence is the cause of nearly every absorption '
                    'costing trap in Part 1.')}),

        ('h3', 'The table the exam tests more than any other'),
        ('table', ['', 'As activity RISES, the total is…', 'As activity RISES, the amount per unit is…'],
         [['Variable cost', 'HIGHER (rises in proportion)', 'UNCHANGED'],
          ['Fixed cost', 'UNCHANGED', 'LOWER (spread over more units)']],
         '23265A', [22, 39, 39]),
        ('prose', 'Cover the two right-hand columns with your hand and say the four '
                  'answers aloud. If you hesitate on any of them, you will lose marks on '
                  'questions that have nothing to do with absorption costing.', None, True),

        ('task', 'Exercise 1C',
         'Tick one box for each cost, taking the sensor as the cost object.'),
        ('sortgrid', ['Cost incurred at Grandview this month', 'Variable', 'Fixed', 'Mixed'],
         ['Steel housing for each sensor',
          'Monthly rent on the factory building',
          'Wages of assembly workers, paid per unit completed',
          'Salary of the factory supervisor',
          'Electricity: a standing charge plus a rate per machine hour',
          'Depreciation on the moulding machine, straight line',
          'Shipping cartons, one per sensor',
          'Annual licence fee for the calibration software',
          'Sales commission at 3% of selling price',
          'Quality inspector’s salary'],
         ['Variable', 'Fixed', 'Variable', 'Fixed', 'Mixed',
          'Fixed', 'Variable', 'Fixed', 'Variable', 'Fixed'],
         'Behaviour is judged by what happens to the TOTAL as volume changes.'),

        ('part', 'Part 3 · Can you trace it?', 'direct and indirect'),

        ('task', 'Exercise 1D', 'Read and complete.'),
        ('fill', 'R1',
         'Direct and indirect is a different question from variable and fixed, and the '
         'exam relies on students mixing them up. A cost is {direct} if you can trace '
         'it to the cost object without guessing. A cost is indirect if you have to '
         '{allocate} it using some reasonable basis. Depreciation on a machine that '
         'makes only sensors is a {direct} cost of sensors, and it is also a '
         '{fixed} cost. So a cost can be direct and fixed at the same time. '
         'Electricity that runs the whole factory is {indirect}, and most of it is '
         'variable. So a cost can be indirect and variable at the same time. The two '
         'classifications are {independent} of each other.',
         {'direct': ('Traceable without an arbitrary split.', ''),
          'allocate': ('Allocation is the technical verb. "Divide" and "distribute" are '
                       'not used this way in CMA English.', ''),
          'fixed': ('Its total does not move with output.', ''),
          'indirect': ('It serves the whole factory, so it must be allocated.', ''),
          'independent': ('All four combinations exist.',
                          'Treating "direct" as a synonym for "variable" — the single '
                          'most common vocabulary error in this topic.')}),

        ('task', 'Exercise 1E',
         'Write one example of each combination from the Grandview list above. All four '
         'boxes can be filled.'),
        ('table', ['', 'Variable', 'Fixed'],
         [['Direct', '', ''], ['Indirect', '', '']], '6B7280', [16, 42, 42]),

        ('part', 'Part 4 · Does it go into inventory?', 'product and period costs'),

        ('task', 'Exercise 1F', 'Read and complete. This is the central idea of the whole set.'),
        ('fill', 'R2',
         'A product cost attaches to the goods. It is recorded as an asset, it sits in '
         '{inventory}, and it becomes an expense only when the goods are {sold}. A '
         'period cost is charged against income in the period in which it is '
         '{incurred}, whether or not anything is sold. The timing difference between '
         'the two is the whole of this topic. Under both methods you will study, '
         'selling and administrative costs are always {period} costs, and direct '
         'materials, direct labour and variable manufacturing overhead are always '
         '{product} costs. Exactly one cost is treated differently by the two methods, '
         'and that cost is {fixed manufacturing overhead}.',
         {'inventory': ('It is an asset on the balance sheet until the goods leave.', ''),
          'sold': ('The matching principle: expense it against the revenue it earned.', ''),
          'incurred': ('No waiting, no inventory.', ''),
          'period': ('Selling cost never enters inventory under any method, including '
                     'absorption costing.',
                     'Candidates put selling costs into absorption product cost because '
                     'absorption is described as "full" costing. It is not full in that sense.'),
          'product': ('All three are variable manufacturing costs.', ''),
          'fixed manufacturing overhead': (
              'This is the only disputed cost, and every difference in income between '
              'the two methods comes from it.',
              'If you remember one sentence from Handout 1, make it this one.')}),

        ('fig', 'spine',
         [('Raw Materials', 'materials bought and stored', '#2B6CB0'),
          ('Work in Process', 'materials, labour and overhead added', '#6D3F7E'),
          ('Finished Goods', 'units completed and waiting', '#1F7A6A'),
          ('Cost of Goods Sold', 'units actually sold', '#C9762E')],
         'A product cost travels along this line. A period cost never joins it.'),

        ('task', 'Exercise 1G',
         'Tick one box for each cost. Take the sensor as the cost object and use '
         'absorption costing.'),
        ('sortgrid', ['Cost', 'Product cost', 'Period cost'],
         ['Steel housing used in production',
          'Assembly wages',
          'Factory rent',
          'Depreciation on factory machinery',
          'Depreciation on the delivery vans',
          'Factory supervisor’s salary',
          'Advertising in a trade magazine',
          'Sales commission',
          'Salary of the chief financial officer',
          'Electricity used in the factory',
          'Insurance on the finished goods warehouse',
          'Interest on the bank loan'],
         ['Product cost', 'Product cost', 'Product cost', 'Product cost',
          'Period cost', 'Product cost', 'Period cost', 'Period cost',
          'Period cost', 'Product cost', 'Period cost', 'Period cost'],
         'If the cost happens inside the factory to make the goods, it is a product '
         'cost under absorption costing. Everything after the factory door is a period cost.'),

        ('watch', 'Warehouse insurance catches almost everybody. Storing FINISHED goods '
                  'is a selling and distribution activity, not a manufacturing one, so it '
                  'is a period cost. Insurance on the RAW MATERIALS store is a '
                  'manufacturing cost. The exam writes these two a few lines apart.'),

        ('part', 'Part 5 · Language', 'the words that are not the same'),

        ('task', 'Exercise 1H',
         'Match each word on the left with the sentence on the right that uses it '
         'correctly. Write the letter in the middle column.'),
        ('match',
         ['cost', 'expense', 'expenditure', 'overhead', 'allocate', 'trace'],
         ['The factory rent of $600,000 is a ______ of the period once it is charged '
          'to income.',
          'We ______ the supervisor’s salary to the two departments on floor area.',
          'The ______ of one sensor is $48 under absorption costing.',
          'Total capital ______ on the new moulding line was $2.4 million.',
          'Indirect factory costs are collected in a single ______ account.',
          'We can ______ the steel housing directly to each unit.'],
         ['C', 'A', 'D', 'E', 'B', 'F'],
         'cost = the amount of a resource used · expense = a cost now on the income '
         'statement · expenditure = money laid out, usually capital · overhead = '
         'indirect factory cost · allocate = spread an indirect cost · trace = follow '
         'a direct cost'),

        ('task', 'Exercise 1I',
         'The same fact, written three ways. Read across. The exam writes the third one.'),
        ('three_ways', [
            ('Fixed factory costs go into inventory under absorption costing.',
             'Under absorption costing, fixed manufacturing overhead is treated as an '
             'inventoriable cost.',
             'Under absorption costing, which of the following is included in the cost '
             'of ending inventory?'),
            ('A fixed cost per unit falls when the factory makes more.',
             'The fixed cost per unit varies inversely with the level of production.',
             'As production volume increases, the fixed cost per unit would:'),
            ('Selling costs never go into inventory.',
             'Selling and administrative expenses are excluded from inventoriable cost '
             'under both methods.',
             'All of the following are inventoriable under absorption costing EXCEPT:'),
        ]),

        ('traps', [
            ('"with respect to the department"',
             'the classification is the same as for the product',
             'A supervisor is indirect to a unit and direct to a department. The cost '
             'object decides.'),
            ('"full costing"',
             'everything the company spends is in the product cost',
             'Full means all MANUFACTURING cost. Selling and administrative cost is '
             'still a period cost.'),
            ('"the variable cost per unit"',
             'it changes when volume changes',
             'The variable cost per unit is constant. It is the fixed cost per unit '
             'that moves.'),
            ('"direct costing"',
             'it means costing with direct costs',
             'Direct costing is an old name for VARIABLE costing. It is about behaviour, '
             'not traceability.'),
            ('prime cost and conversion cost in the same question',
             'you add them to get total manufacturing cost',
             'Direct labour sits in both. Adding them counts labour twice.'),
        ]),

        ('part', 'Part 6 · Exam practice', 'Levels A and B'),

        ('prose', 'These questions are written at exam difficulty. Do not expect them to '
                  'be easier than the handout. Use the decoder first.', None, True),

        ('decoder', 'All of the following costs would be included in the cost of a unit '
                    'of ending inventory under absorption costing EXCEPT:'),

        ('mcq', 'All of the following costs would be included in the cost of a unit of '
                'ending inventory under absorption costing EXCEPT:',
         ['Direct materials used in production.',
          'Depreciation on the factory building.',
          'Depreciation on the delivery vehicles.',
          'Variable manufacturing overhead.'],
         2, 'Level A',
         'Delivery is a selling and distribution cost, so it is a period cost under '
         'every method. The trap is "full costing" being read as "all costs".'),

        ('mcq', 'A company’s production increased from 30,000 to 50,000 units while '
                'fixed manufacturing overhead remained at $600,000. With respect to fixed '
                'manufacturing overhead, which of the following is correct?',
         ['Total cost increased and cost per unit increased.',
          'Total cost was unchanged and cost per unit decreased.',
          'Total cost was unchanged and cost per unit was unchanged.',
          'Total cost decreased and cost per unit decreased.'],
         1, 'Level A',
         '$600,000 is flat; $20 per unit becomes $12 per unit. The distractor in (C) is '
         'chosen by candidates who remember "fixed means it does not change" without '
         'asking "what does not change".'),

        ('mcq', 'Which of the following statements about cost classification is correct?',
         ['All variable costs are direct costs.',
          'All fixed costs are indirect costs.',
          'A cost may be both direct and fixed.',
          'Indirect costs are always fixed.'],
         2, 'Level A',
         'Depreciation on a machine dedicated to one product is direct to that product '
         'and fixed in behaviour. Traceability and behaviour are independent questions.'),

        ('mcq', 'Grandview Instruments incurred the following during the month: direct '
                'materials $900,000; direct labour $600,000; manufacturing overhead '
                '$900,000. What were prime cost and conversion cost respectively?',
         ['$1,500,000 and $1,500,000.',
          '$1,500,000 and $900,000.',
          '$900,000 and $1,500,000.',
          '$2,400,000 and $2,400,000.'],
         0, 'Level B',
         'Prime = DM + DL = $1,500,000. Conversion = DL + MOH = $1,500,000. They are '
         'equal here by coincidence, which is exactly why the question is written this '
         'way. Note they do not sum to total manufacturing cost of $2,400,000, because '
         'direct labour is in both.'),

        ('mcq', 'Which cost would be classified as a period cost under absorption '
                'costing but as a product cost under no method at all?',
         ['Fixed manufacturing overhead.',
          'Variable manufacturing overhead.',
          'The sales manager’s salary.',
          'Indirect materials used in the factory.'],
         2, 'Level B',
         'Fixed manufacturing overhead is a product cost under absorption costing, so it '
         'fails the second condition. A selling salary is a period cost under every '
         'method, which is what the question asks for.'),

        ('mcq', 'Insurance on a warehouse holding finished goods awaiting shipment is '
                'best classified as:',
         ['A product cost, because the goods are inventory.',
          'A period cost, because storage of finished goods is a selling and '
          'distribution activity.',
          'A product cost, because insurance is manufacturing overhead.',
          'A period cost, because all insurance is a period cost.'],
         1, 'Level B',
         'The test is whether the cost was incurred to GET the goods ready, not whether '
         'inventory is nearby. Option (D) is true in conclusion and wrong in reasoning, '
         'which the exam uses constantly.'),

        ('mcq', 'A cost that is $5 per unit at 10,000 units and $5 per unit at 20,000 '
                'units, and whose total was $50,000 at the lower volume, is:',
         ['A fixed cost.', 'A variable cost.', 'A mixed cost.',
          'Indeterminable without the relevant range.'],
         1, 'Level A',
         'Constant per unit and therefore rising in total: $50,000 then $100,000. That '
         'is the definition of a variable cost.'),

        ('mcq', 'Which statement correctly distinguishes variable costing from '
                'absorption costing?',
         ['Variable costing excludes all fixed costs from the income statement.',
          'Variable costing treats fixed manufacturing overhead as a period cost.',
          'Variable costing treats all indirect costs as period costs.',
          'Variable costing treats variable selling expenses as inventoriable.'],
         1, 'Level B',
         'Only the treatment of FIXED MANUFACTURING overhead differs. (A) is wrong '
         'because fixed costs still appear further down the statement. (D) is wrong '
         'because selling costs are never inventoriable under any method.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1E · the four combinations'),
        ('table', ['', 'Variable', 'Fixed'],
         [['Direct', 'Steel housing; assembly wages paid per unit',
           'Depreciation on the moulding machine (used only for sensors)'],
          ['Indirect', 'Factory electricity used by the production line',
           'Factory rent; supervisor’s salary']], '6B7280', [16, 42, 42]),
        ('prose', 'If any box was hard to fill, the difficulty is the vocabulary rather '
                  'than the accounting: "direct" answers can I trace it, and "variable" '
                  'answers does the total move. Ask the two questions separately and '
                  'every cost falls into exactly one box.', None, False),
    ],
)
