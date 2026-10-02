# -*- coding: utf-8 -*-
"""Handout 1 — The Inventoriable Decision."""
from data import S1, money, num

ABS, VAR, THR = '6D3F7E', '1F7A6A', 'C9762E'
BLUE, RUST, SLATE = '2B6CB0', 'B2531F', '44506B'

HANDOUT = dict(
    n=1,
    title='The Inventoriable Decision',
    subtitle='Every costing question in Part 1 comes back to one choice: which costs go '
             'into inventory, and which go straight to the income statement.',
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
              'Direct is about tracing. Variable is about behaviour. Different questions.'],
    ),

    objectives=[
        'Name the cost object before you classify any cost.',
        'Say whether a cost is variable or fixed in total, and what it does per unit.',
        'Separate direct from indirect, and explain why that is not the same question '
        'as variable and fixed.',
        'Decide whether a cost is a product cost or a period cost.',
        'State the one cost whose treatment separates absorption costing from variable '
        'costing.',
    ],

    terms=[
        ('cost object', 'Anything you want the cost of: a product, a department, a '
         'customer, an order.', 'هدف التكلفة',
         'Always fix this first. "Is rent a direct cost?" has no answer until you say '
         'direct to what.'),
        ('cost driver', 'The activity that makes a cost change.', 'مسبب التكلفة',
         'A cost driver is not a cost. Machine hours drive the power bill; the hours '
         'themselves cost nothing.'),
        ('variable cost', 'A cost whose total rises in proportion to activity.',
         'تكلفة متغيرة',
         'Variable in TOTAL. Per unit it is constant. The exam reverses this to trap you.'),
        ('fixed cost', 'A cost whose total does not change as activity changes, within '
         'the relevant range.', 'تكلفة ثابتة',
         'Fixed in TOTAL. Per unit it falls as volume rises. This one fact causes most '
         'of the errors in this topic.'),
        ('mixed cost', 'A cost with a fixed part and a variable part.', 'تكلفة مختلطة',
         'Also called semi-variable.'),
        ('relevant range', 'The band of activity over which a fixed cost really stays '
         'fixed.', 'المدى الملائم',
         'Outside it a "fixed" cost steps up. The exam uses this for capacity questions.'),
        ('direct cost', 'A cost you can trace to the cost object economically.',
         'تكلفة مباشرة',
         'Direct is about traceability, not behaviour. A direct cost can be fixed.'),
        ('indirect cost', 'A cost you cannot trace, so you allocate it.',
         'تكلفة غير مباشرة',
         'Indirect is not a synonym for fixed. Factory electricity is indirect and '
         'largely variable.'),
        ('prime cost', 'Direct materials plus direct labour.', 'التكلفة الأولية', ''),
        ('conversion cost', 'Direct labour plus manufacturing overhead.', 'تكلفة التحويل',
         'Direct labour is in BOTH. The exam asks you to add them and the answer '
         'double-counts labour on purpose.'),
        ('product cost', 'A cost that attaches to the goods and sits in inventory until '
         'they are sold.', 'تكلفة المنتج',
         'Also called an inventoriable cost. Which costs qualify is what this set is '
         'about.'),
        ('period cost', 'A cost charged against income in the period it is incurred.',
         'تكلفة الفترة',
         'A technical label that decides the TIMING of the expense, not a loose phrase.'),
        ('manufacturing overhead', 'All factory cost that is not direct materials or '
         'direct labour.', 'التكاليف الصناعية غير المباشرة',
         'Factory only. A sales manager’s salary is never manufacturing overhead.'),
        ('absorption costing', 'All manufacturing cost, fixed and variable, is a product '
         'cost.', 'تكلفة الاستيعاب / التكلفة الكلية',
         'Not the same as "total cost". Selling costs stay outside it.'),
        ('variable costing', 'Only variable manufacturing cost is a product cost. Fixed '
         'factory overhead is a period cost.', 'التكلفة المتغيرة',
         'Sometimes called direct costing, which is a bad old name.'),
        ('expense', 'A cost that has been matched against revenue and now sits on the '
         'income statement.', 'مصروف',
         'Every expense was a cost first. Not every cost has become an expense yet.'),
        ('inventoriable cost', 'Another name for a product cost: a cost carried in '
         'inventory until the unit is sold.', 'تكلفة قابلة للتخزين',
         'The exam uses "product cost" and "inventoriable cost" in one question as '
         'though you already knew they were the same.'),
        ('cost of goods sold', 'The cost of the units actually sold in the period.',
         'تكلفة البضاعة المباعة', 'Units SOLD. Not units made, and not units available.'),
        ('full costing', 'Another name for absorption costing.', 'التكلفة الكلية',
         '"Full" means all MANUFACTURING cost. Not every cost the business incurs.'),
        ('direct costing', 'An older name for variable costing.', 'التكلفة المباشرة',
         'A false friend, and the worst one in this topic. It is about cost BEHAVIOUR.'),
    ],

    blocks=[
        ('scene', 'The plant you will work in all week', [
            'Grandview Instruments makes one product: a sealed pressure sensor used in '
            'water treatment plants.',
            'One factory. One production line. One selling price. You will meet this '
            'company in all six handouts.',
            'In this handout you calculate nothing. You learn to put each cost in the '
            'right box, because every calculation later depends on that.',
            'The factory manager has sent you a list of the costs she incurs in a month. '
            'She wants to know which belong to the sensors in the warehouse, and which '
            'belong to the month that has just finished.',
        ]),
        ('fig', 'workplace', 'Grandview Instruments · one plant, one product',
         [('Ms Oyelaran', 'external auditor', 'w', '#2B6CB0'),
          ('Mr Haddad', 'production manager', 'm', '#1F7A6A'),
          ('Ms Nasri', 'cost accountant', 'h', '#6D3F7E')],
         [('factory', 'one plant'), ('drum', 'pressure sensors'),
          ('shelf', 'the warehouse'), ('money', '$90 a unit')],
         'Three people will ask for the cost of a sensor. Keep them in mind all week.'),

        ('part', 'Part 1 · What are you costing?', 'the cost object'),

        ('task', 'Exercise 1A',
         'Fix the cost object first, and show that the same cost changes label when the '
         'cost object changes.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the set.'],
         ['Read the whole paragraph once before writing anything.',
          'Blank 1 is the technical term the sentence has just defined.',
          'Blanks 3 and 4 are opposites. Decide which way round they go from the '
          'sentence, not from memory.']),
        ('fill', 'R1',
         ['A cost is never direct or indirect on its own. It is direct or indirect with '
          'respect to something, and that something is called the cost {object}.',
          'At Grandview the cost object is usually the {sensor}, because the company '
          'wants to know the cost of one unit. But the cost object could also be a '
          'department, a customer, or a single order.',
          'Change the cost object and the same cost changes its classification. The '
          'salary of the factory supervisor cannot be traced to one sensor, so it is '
          '{indirect} with respect to a sensor. With respect to the factory as a whole '
          'it is {direct}, because it belongs to the factory and to nothing else.'],
         {'object': ('Nothing can be classified until you name what you are costing.',
                     'Students classify costs with no cost object in mind.'),
          'sensor': ('The company sells one product, so the unit is the natural cost '
                     'object.', ''),
          'indirect': ('You cannot trace a supervisor to one unit, so you allocate.', ''),
          'direct': ('The same cost is direct to a bigger cost object.',
                     'Thinking a cost has one fixed classification for ever.')},
         ['driver', 'centre', 'unit', 'variable']),
        ('fig', 'matrix', 'The same two costs, three cost objects',
         ['Supervisor’s salary', 'Steel housing'],
         ['one sensor', 'the assembly department', 'the whole factory'],
         [['INDIRECT — allocate it', 'DIRECT — it belongs to this department',
           'DIRECT — it belongs to the factory'],
          ['DIRECT — trace it to the unit', 'DIRECT', 'DIRECT']],
         'Read across. The cost did not change. The question changed.'),

        ('watch', 'Write the cost object at the top of your page before you classify '
                  'anything. In the exam the stem always tells you — "with respect to the '
                  'product", "for the department". Underline it.'),

        ('part', 'Part 2 · How does the cost behave?', 'variable, fixed and mixed'),

        ('task', 'Exercise 1B',
         'State what happens to a variable cost and a fixed cost in total and per unit '
         'as activity rises.',
         'Read and complete.',
         ['Exercise 1A, for the idea of a cost object.'],
         ['The word TOTAL and the words PER UNIT are the two halves of every answer '
          'here.',
          'Blank 8 follows from arithmetic, not from memory: the same total shared by '
          'more units.']),
        ('fill', 'R1',
         ['Cost behaviour is about what happens to a cost when activity changes.',
          'A variable cost changes in {total} as output changes, but stays constant '
          '{per unit}. The direct material in one sensor costs $%d whether Grandview '
          'makes one sensor or fifty thousand.' % S1.dm,
          'A fixed cost is the opposite. Its total does {not} change as output changes, '
          'so the amount carried by each unit {falls} as output rises. Factory rent of '
          '%s is $%d per unit at %s units and $20 per unit at 30,000 units. The cost did '
          'not change. Only the number of units sharing it changed.'
          % (money(S1.fmoh), S1.fmoh_rate, num(S1.produced))],
         {'total': ('Variable costs vary in total, which is the definition.', ''),
          'per unit': ('The per-unit variable cost is the constant one.',
                       'Candidates say "variable cost changes per unit". It does not.'),
          'not': ('Fixed total is flat inside the relevant range.', ''),
          'falls': ('More units share the same total, so each carries less.',
                    'This single sentence causes nearly every absorption costing trap '
                    'in Part 1.')},
         ['rises', 'per hour', 'constant', 'always']),
        ('fig', 'behaviour'),

        ('prose', 'One more word before you classify anything. The activity that makes a '
                  'cost move is its cost driver: machine hours drive the power bill, '
                  'units produced drive the material cost, deliveries drive the shipping '
                  'cost.', 'R1'),
        ('prose', 'A cost driver is not itself a cost. Naming the driver is the fastest '
                  'way to decide how a cost behaves. A cost with no driver at the level '
                  'of activity you are looking at is a fixed cost, and a cost with a '
                  'standing charge plus a driver-related element is a mixed cost.', None),

        ('task', 'Exercise 1C',
         'Classify ten real costs by behaviour, judging the total rather than the amount '
         'per unit.',
         'Tick one box for each cost. The cost object is the sensor.',
         ['Exercise 1B', 'the four facts in the behaviour chart above'],
         ['For each cost ask one question only: if the plant makes 10% more, does the '
          'TOTAL rise?',
          'If the answer is yes it is variable; if no it is fixed; if partly, it is '
          'mixed.',
          'Number 1 is done for you in the diagram below.']),
        ('fig', 'buckets', 'Sort by what the TOTAL does',
         [('VARIABLE — total rises', '1F7A6A',
           ['Steel housing  (worked example)', '', '', '', '']),
          ('FIXED — total flat', '6D3F7E', ['', '', '', '', '']),
          ('MIXED — both', 'C9762E', ['', '', '', '', ''])],
         'Write each cost into the right box as you tick it.'),
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

        ('task', 'Exercise 1D',
         'Separate traceability from behaviour, and show that the two questions are '
         'independent.',
         'Read and complete.',
         ['Exercise 1A for the cost object', 'Exercise 1C for behaviour'],
         ['Two different questions are being asked about every cost. Write them both at '
          'the top of the page.',
          'Question one: can I trace it? Question two: does the total move?',
          'The last blank is the point of the whole exercise.']),
        ('fig', 'fork', 'Ask TWO questions about every cost, in this order',
         [('1. Can I trace this cost to the cost object without guessing?',
           'YES means DIRECT · NO means INDIRECT', '2B6CB0'),
          ('2. Does the TOTAL move when activity moves?',
           'YES means VARIABLE · NO means FIXED', '1F7A6A'),
          ('Do the two answers have to agree?',
           'NO. All four combinations exist.', '6D3F7E')]),
        ('fill', 'R1',
         ['Direct and indirect is a different question from variable and fixed, and the '
          'exam relies on students mixing them up.',
          'A cost is {direct} if you can trace it to the cost object without guessing. A '
          'cost is indirect if you have to {allocate} it on some reasonable basis.',
          'Depreciation on a machine that makes only sensors is a {direct} cost of '
          'sensors, and it is also a {fixed} cost. Electricity that runs the whole '
          'factory is {indirect}, and most of it is variable. The two classifications '
          'are {independent} of each other.'],
         {'direct': ('Traceable without an arbitrary split.', ''),
          'allocate': ('Allocation is the technical verb. "Divide" and "distribute" are '
                       'not used this way in CMA English.', ''),
          'fixed': ('Its total does not move with output.', ''),
          'indirect': ('It serves the whole factory, so it must be allocated.', ''),
          'independent': ('All four combinations exist.',
                          'Treating "direct" as a synonym for "variable" — the commonest '
                          'vocabulary error in this topic.')},
         ['traceable', 'behavioural', 'mixed', 'arbitrary']),

        ('task', 'Exercise 1E',
         'Prove that traceability and behaviour are independent by filling all four '
         'combinations.',
         'Write one example from the Grandview list in each box. All four can be filled.',
         ['Exercise 1C', 'Exercise 1D'],
         ['Take the costs from Exercise 1C one at a time.',
          'Ask the two questions and the box chooses itself.',
          'If a box stays empty, you have classified something wrongly.']),
        ('fig', 'matrix', 'All four boxes can be filled',
         ['DIRECT', 'INDIRECT'], ['VARIABLE', 'FIXED'],
         [['', ''], ['', '']],
         'Write your four examples here as well as in the table below.'),
        ('table', ['', 'Variable', 'Fixed'],
         [['Direct', '', ''], ['Indirect', '', '']], '6B7280', [16, 42, 42]),

        ('part', 'Part 4 · Does it go into inventory?', 'product and period costs'),

        ('task', 'Exercise 1F',
         'State the product and period rule, and name the one cost the two methods treat '
         'differently.',
         'Read and complete. This is the central idea of the whole set.',
         ['Everything above', 'the cost flow diagram below'],
         ['Follow the diagram first: a product cost travels along the line, a period cost '
          'never joins it.',
          'The last blank is three words long and it is the sentence to memorise.']),
        ('fig', 'spine',
         [('Raw Materials', 'materials bought and stored', '#2B6CB0'),
          ('Work in Process', 'materials, labour and overhead added', '#6D3F7E'),
          ('Finished Goods', 'units completed and waiting', '#1F7A6A'),
          ('Cost of Goods Sold', 'units actually sold', '#C9762E')],
         'A product cost travels along this line. A period cost never joins it.'),
        ('fill', 'R2',
         ['A product cost attaches to the goods. It is recorded as an asset, it sits in '
          '{inventory}, and it becomes an expense only when the goods are {sold}.',
          'A period cost is charged against income in the period in which it is '
          '{incurred}, whether or not anything is sold. The timing difference between '
          'the two is the whole of this topic.',
          'Under both methods you will study, selling and administrative costs are '
          'always {period} costs, and direct materials, direct labour and variable '
          'manufacturing overhead are always {product} costs.',
          'Exactly one cost is treated differently by the two methods, and that cost is '
          '{fixed manufacturing overhead}.'],
         {'inventory': ('It is an asset on the balance sheet until the goods leave.', ''),
          'sold': ('The matching principle: expense it against the revenue it earned.', ''),
          'incurred': ('No waiting, no inventory.', ''),
          'period': ('Selling cost never enters inventory under any method, including '
                     'absorption costing.',
                     'Candidates put selling costs into absorption product cost because '
                     'absorption is called "full" costing. It is not full in that sense.'),
          'product': ('All three are variable manufacturing costs.', ''),
          'fixed manufacturing overhead': (
              'The only disputed cost, and the source of every difference in income '
              'between the two methods.',
              'If you remember one sentence from Handout 1, make it this one.')},
         ['expense', 'cash', 'conversion', 'variable manufacturing overhead']),

        ('task', 'Exercise 1G',
         'Apply the product and period rule to twelve costs, including the three that '
         'catch almost everybody.',
         'Tick one box for each cost. Use absorption costing.',
         ['Exercise 1F', 'the cost flow diagram'],
         ['Ask: was this cost incurred inside the factory to get the goods ready?',
          'If yes it is a product cost. Everything after the factory door is a period '
          'cost.',
          'Items 11 and 12 are the two that are designed to catch you.']),
        ('fig', 'buckets', 'The factory door is the line',
         [('PRODUCT COST — into inventory', '6D3F7E',
           ['Incurred inside the factory', 'to get the goods ready',
            'Sits on the balance sheet', 'until the unit is sold']),
          ('PERIOD COST — straight to income', '1F7A6A',
           ['Everything after the factory door', 'Selling, distribution, administration',
            'Charged in the month incurred', 'whether or not anything sold'])],
         'Insurance on the RAW MATERIALS store is manufacturing. Insurance on the '
         'FINISHED GOODS warehouse is selling.'),
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
         'Inside the factory to get the goods ready: product. After the factory door: '
         'period.'),

        ('watch', 'Warehouse insurance catches almost everybody. Storing FINISHED goods '
                  'is a selling and distribution activity, so it is a period cost. '
                  'Insurance on the RAW MATERIALS store is a manufacturing cost. The exam '
                  'writes these two a few lines apart.'),

        ('part', 'Part 5 · Language', 'the words that are not the same'),

        ('task', 'Exercise 1H',
         'Use cost, expense, expenditure, overhead, allocate and trace in the one '
         'sentence each belongs in.',
         'Match each word with the sentence that uses it correctly. Write the letter.',
         ['The Language Focus panel at the front of this handout'],
         ['Follow the timeline below: a cost becomes an expense only at the end of it.',
          'Two of the six words are verbs. Find them first — that removes two options at '
          'once.',
          'Expenditure is about money leaving, usually for something lasting.']),
        ('fig', 'timeline', 'When does a cost become an expense?',
         [('EXPENDITURE', 'money is laid out for the resource', '44506B'),
          ('COST', 'the resource is used in making the goods', '2B6CB0'),
          ('INVENTORY', 'the cost waits on the balance sheet', '6D3F7E'),
          ('EXPENSE', 'the unit is sold and the cost is matched to revenue', '1F7A6A')],
         'The same money has four names, and the name depends on where it has got to.'),
        ('match',
         ['cost', 'expense', 'expenditure', 'overhead', 'allocate', 'trace'],
         ['The factory rent of %s is an ______ of the period once it is charged to '
          'income.' % money(S1.fmoh),
          'We ______ the supervisor’s salary to the two departments on floor area.',
          'The ______ of one sensor is $%d under absorption costing.' % S1.abs_unit,
          'Total capital ______ on the new moulding line was $2.4 million.',
          'Indirect factory costs are collected in a single ______ account.',
          'We can ______ the steel housing directly to each unit.'],
         ['C', 'A', 'D', 'E', 'B', 'F'],
         'cost = the resource used · expense = a cost now on the income statement · '
         'expenditure = money laid out · overhead = indirect factory cost · allocate = '
         'spread an indirect cost · trace = follow a direct cost'),

        ('task', 'Exercise 1I',
         'Recognise the same fact in teaching English, textbook English and exam English.',
         'Read across each row. The exam writes the third column.',
         ['Everything in this handout'],
         ['Cover the right-hand column and say what the exam version will be.',
          'Then uncover it and find your own words inside the exam sentence.',
          'Do this aloud. It is a listening skill as much as a reading one.']),
        ('fig', 'register',
         [('Fixed factory costs go into inventory under absorption costing.',
           'Under absorption costing, fixed manufacturing overhead is treated as an '
           'inventoriable cost.',
           'Under absorption costing, which of the following is included in the cost of '
           'ending inventory?'),
          ('A fixed cost per unit falls when the factory makes more.',
           'The fixed cost per unit varies inversely with the level of production.',
           'As production volume increases, the fixed cost per unit would:'),
          ('Selling costs never go into inventory.',
           'Selling and administrative expenses are excluded from inventoriable cost '
           'under both methods.',
           'All of the following are inventoriable under absorption costing EXCEPT:')],
         'Say the left one aloud, then find it inside the right one.'),
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
             'The variable cost per unit is constant. It is the fixed cost per unit that '
             'moves.'),
            ('"direct costing"',
             'it means costing with direct costs',
             'Direct costing is an old name for VARIABLE costing. It is about behaviour.'),
            ('prime cost and conversion cost in the same question',
             'you add them to get total manufacturing cost',
             'Direct labour sits in both. Adding them counts labour twice.'),
        ]),

        ('part', 'Part 6 · Exam practice', 'Levels A and B'),

        ('task', 'Exercise 1J',
         'Take an exam stem apart before answering it, so the trap word cannot do its '
         'work.',
         'Decode the stem below, then answer the eight questions.',
         ['The whole handout'],
         ['Find the method named in the stem and underline it.',
          'Find EXCEPT, NOT or LEAST and circle it.',
          'Only then read the options. Three of them will be true.']),
        ('fig', 'anatomy',
         'All of the following costs would be included in the cost of a unit of ending '
         'inventory under absorption costing EXCEPT:',
         [('All of the following ... EXCEPT', 'three options are TRUE; you want the one '
           'that is false', 'C0483F'),
          ('a unit of ending inventory', 'the cost object: a unit made and not yet sold',
           '2B6CB0'),
          ('under absorption costing', 'the method, so fixed factory overhead IS '
           'included', '6D3F7E')],
         'Underline the method and circle the EXCEPT before you read a single option.'),
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
         'every method. The trap is reading "full costing" as "all costs".'),

        ('mcq', 'A company’s production increased from 30,000 to %s units while fixed '
                'manufacturing overhead remained at %s. With respect to fixed '
                'manufacturing overhead, which of the following is correct?'
                % (num(S1.produced), money(S1.fmoh)),
         ['Total cost increased and cost per unit increased.',
          'Total cost was unchanged and cost per unit decreased.',
          'Total cost was unchanged and cost per unit was unchanged.',
          'Total cost decreased and cost per unit decreased.'],
         1, 'Level A',
         '%s is flat; $20 per unit becomes $%d per unit. Option (C) is chosen by '
         'candidates who remember "fixed means it does not change" without asking what '
         'does not change.' % (money(S1.fmoh), S1.fmoh_rate)),

        ('mcq', 'Which of the following statements about cost classification is correct?',
         ['All variable costs are direct costs.',
          'All fixed costs are indirect costs.',
          'A cost may be both direct and fixed.',
          'Indirect costs are always fixed.'],
         2, 'Level A',
         'Depreciation on a machine dedicated to one product is direct to that product '
         'and fixed in behaviour. Traceability and behaviour are independent questions.'),

        ('mcq', 'Grandview incurred the following during the month: direct materials '
                '$900,000; direct labour $600,000; manufacturing overhead $900,000. What '
                'were prime cost and conversion cost respectively?',
         ['$1,500,000 and $1,500,000.', '$1,500,000 and $900,000.',
          '$900,000 and $1,500,000.', '$2,400,000 and $2,400,000.'],
         0, 'Level B',
         'Prime = DM + DL = $1,500,000. Conversion = DL + MOH = $1,500,000. They are '
         'equal here by coincidence, which is why the question is written this way. They '
         'do not sum to total manufacturing cost of $2,400,000, because direct labour is '
         'in both.'),

        ('mcq', 'Which cost would be classified as a period cost under absorption costing '
                'and as a product cost under no method at all?',
         ['Fixed manufacturing overhead.', 'Variable manufacturing overhead.',
          'The sales manager’s salary.', 'Indirect materials used in the factory.'],
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

        ('mcq', 'Which statement correctly distinguishes variable costing from absorption '
                'costing?',
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
           'Depreciation on the moulding machine, used only for sensors'],
          ['Indirect', 'Factory electricity used by the production line',
           'Factory rent; supervisor’s salary']], '6B7280', [16, 42, 42]),
        ('prose', 'If any box was hard to fill, the difficulty is vocabulary rather than '
                  'accounting. "Direct" answers can I trace it. "Variable" answers does '
                  'the total move. Ask the two questions separately and every cost falls '
                  'into exactly one box.'),
    ],
)
