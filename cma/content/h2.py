# -*- coding: utf-8 -*-
"""Handout 2 — Three Methods, One Set of Costs."""
from data import S1, money, num

A, V, T = '6D3F7E', '1F7A6A', 'C9762E'

HANDOUT = dict(
    n=2,
    title='Three Methods, One Set of Costs',
    subtitle='The same factory, the same costs, three different unit costs — and three '
             'different income statement shapes to go with them.',
    register='R1 moving to R2',

    lang=dict(
        register='R2 Textbook English begins here. Sentences get longer and some verbs '
                 'become passive: "is treated as", "is excluded from", "is charged to".',
        collocations=['absorb overhead', 'be included in inventoriable cost',
                      'be excluded from product cost', 'arrive at contribution margin',
                      'deduct from sales', 'under each method'],
        pairs=['margin / profit / income', 'gross margin / contribution margin',
               'cost of goods sold / cost of goods manufactured'],
        nots=['A margin is a subtotal, not a bottom line.',
              'Gross margin and contribution margin are never the same number unless '
              'there are no fixed manufacturing costs.'],
    ),

    objectives=[
        'Build the unit product cost under absorption, variable and throughput costing.',
        'Say which costs each method puts into inventory and which it expenses now.',
        'Name and write the three margin lines, and say what each one is useful for.',
        'Value closing inventory under all three methods from the same data.',
        'Recognise the exam’s wording for each method, including the old names.',
    ],

    terms=[
        ('unit product cost', 'The cost attached to one finished unit under the method '
         'in use.', 'تكلفة الوحدة المنتجة',
         'There is no single "the" unit cost. Always say under which method.'),
        ('operating income', 'Income before interest and tax.', 'الدخل التشغيلي',
         'All three methods arrive at operating income. They differ on the way there, '
         'never on what the destination is called.'),
        ('gross margin', 'Sales less cost of goods sold, where cost of goods sold is '
         'measured on an absorption basis.', 'مجمل الربح',
         'It mixes fixed and variable cost together, which is why it cannot be used for '
         'short-run decisions.'),
        ('contribution margin', 'Sales less all variable costs, including variable '
         'selling costs.', 'هامش المساهمة',
         'Variable SELLING cost is deducted here. Candidates stop at production cost and '
         'get the wrong figure.'),
        ('throughput contribution', 'Sales less direct material cost only.',
         'مساهمة الإنتاجية',
         'Also called throughput margin. Labour is NOT deducted, which feels wrong the '
         'first time.'),
        ('throughput costing', 'Only direct materials are treated as a product cost.',
         'تكلفة الإنتاجية',
         'Also called super-variable costing. It is examinable, and most candidates have '
         'never practised it.'),
        ('cost of goods manufactured', 'The cost of the units finished during the period.',
         'تكلفة البضاعة المصنعة',
         'Units FINISHED, not units sold and not units started.'),
        ('capacity cost', 'A fixed cost incurred to be able to produce at all.',
         'تكلفة الطاقة',
         'This is the argument for variable costing: capacity is bought by the period, '
         'so it should be charged to the period.'),
        ('external reporting', 'Financial statements issued outside the company.',
         'التقارير الخارجية',
         'Absorption costing is required here. Variable costing is not permitted.'),
        ('internal reporting', 'Reports prepared for managers inside the company.',
         'التقارير الداخلية',
         'Variable costing is normal here and entirely legitimate.'),
        ('normal capacity', 'The average output expected over several periods, allowing '
         'for normal downtime.', 'الطاقة العادية',
         'The accounting standards require fixed overhead to be absorbed using normal '
         'capacity, not actual output.'),
    ],

    blocks=[
        ('scene', 'One set of costs, three answers', [
            'Grandview’s controller has the cost records for the month on her desk. '
            'Direct materials $%s a unit, direct labour $%s a unit, variable '
            'manufacturing overhead $%s a unit, and fixed manufacturing overhead of %s '
            'for the month.' % (S1.dm, S1.dl, S1.vmoh, money(S1.fmoh)),
            'The plant made %s units and sold %s. Selling and administrative costs were '
            '$%s a unit sold, plus %s of fixed cost.'
            % (num(S1.produced), num(S1.sold), S1.vsa, money(S1.fsa)),
            'Three people have asked her for "the cost of a sensor". The auditor needs '
            'it for the financial statements. The production manager needs it to decide '
            'whether to accept an extra order. The consultant working on the bottleneck '
            'needs it for a capacity study. She will give them three different numbers, '
            'and all three will be correct.',
        ]),

        ('part', 'Part 1 · Where each method draws the line', 'the inventoriable decision'),

        ('task', 'Exercise 2A',
         'State where each of the three methods draws the line between a cost that enters inventory and a cost that is expensed now.',
         'Read and complete.',
         ['Handout 1, Exercise 1F'],
         ['Read the ladder diagram below the exercise before you write anything.', 'Three of the blanks are the names of cost groups. Two are the names of methods.', 'The last blank is the one that makes throughput costing feel wrong the first time.']),
        ('fill', 'R1',
         ['All three methods agree about selling and administrative cost: it is never '
          '{inventoriable}, under any method, and it is charged to the period in which '
          'it is incurred.',
          'They disagree only about costs incurred inside the {factory}. Absorption '
          'costing treats every manufacturing cost as a product cost, both variable and '
          '{fixed}.',
          'Variable costing treats only the {variable} manufacturing costs as product '
          'costs, and charges fixed factory overhead to the period as a capacity cost.',
          'Throughput costing goes further still. It treats only direct {materials} as a '
          'product cost, on the argument that in the short run everything else, '
          'including {labour}, is a cost of keeping the factory open rather than a cost '
          'of making one more unit.'],
         {'inventoriable': ('No method puts selling cost into stock.', ''),
          'factory': ('The dispute is entirely about manufacturing cost.', ''),
          'fixed': ('This is the defining feature of absorption costing.', ''),
          'variable': ('Variable manufacturing only — not variable selling.',
                       'Variable selling cost is a period cost under variable costing '
                       'too. It is deducted in the contribution margin, not in inventory.'),
          'materials': ('Materials only, which is what makes it "super-variable".', ''),
          'labour': ('Labour is treated as fixed in the short run.',
                     'Candidates assume labour must be a product cost because it is '
                     'direct. Under throughput costing it is not.')},
         ['period', 'traceable', 'overhead', 'warehouse', 'prime']),

        ('fig', 'ladder',
         [('Direct materials', '$%d' % S1.dm, 1, 1, 1),
          ('Direct labour', '$%d' % S1.dl, 1, 1, 0),
          ('Variable manufacturing overhead', '$%d' % S1.vmoh, 1, 1, 0),
          ('Fixed manufacturing overhead', '$%d' % S1.fmoh_rate, 1, 0, 0),
          ('Variable selling and administrative', '$%d' % S1.vsa, 0, 0, 0),
          ('Fixed selling and administrative', money(S1.fsa), 0, 0, 0)]),

        ('part', 'Part 2 · Building the unit cost', 'three columns, one set of data'),

        ('task', 'Exercise 2B',
         'Build the unit product cost under all three methods from one set of data.',
         'Complete the table. The fixed overhead rate is the month’s fixed factory '
         'overhead divided by the units produced.',
         ['Exercise 2A', 'the scenario data table above'],
         ['Fill the absorption column downwards first. It has every row.', 'The fixed overhead rate is $600,000 divided by the units produced.', 'Then cross out the rows the other two methods do not use.']),
        ('fig', 'stacks', 'What each method puts inside one unit',
         [('Absorption', [('DM', 18, '#2B6CB0', True), ('DL', 12, '#1F7A6A', True),
                          ('VOH', 6, '#C9762E', True), ('FOH', 12, '#6D3F7E', True)],
           '#6D3F7E'),
          ('Variable', [('DM', 18, '#2B6CB0', True), ('DL', 12, '#1F7A6A', True),
                        ('VOH', 6, '#C9762E', True), ('FOH', 12, '#6D3F7E', False)],
           '#1F7A6A'),
          ('Throughput', [('DM', 18, '#2B6CB0', True), ('DL', 12, '#1F7A6A', False),
                          ('VOH', 6, '#C9762E', False), ('FOH', 12, '#6D3F7E', False)],
           '#C9762E')],
         'A solid block is in inventory. A hollow block was expensed this period.'),
        ('table', ['Per unit', 'Absorption', 'Variable', 'Throughput'],
         [['Direct materials', '$%d' % S1.dm, '$%d' % S1.dm, '$%d' % S1.dm],
          ['Direct labour', '', '', '—'],
          ['Variable manufacturing overhead', '', '', '—'],
          ['Fixed manufacturing overhead (%s ÷ %s units)'
           % (money(S1.fmoh), num(S1.produced)), '', '—', '—'],
          ['Unit product cost', '', '', '']], A, [40, 20, 20, 20]),

        ('task', 'Exercise 2C',
         'Value the same closing inventory three ways and see the size of the gap.',
         'Now value the closing inventory. The plant made %s units and sold %s.'
         % (num(S1.produced), num(S1.sold)),
         ['Exercise 2B', 'units produced and units sold'],
         ['Closing inventory in units is production less sales. Write that number first.', 'Then multiply by each of the three unit costs in turn.', 'Check: the three answers should be in the order absorption, variable, throughput, largest first.']),
        ('fig', 'buckets', 'The same 8,000 units, valued three ways',
         [('ABSORPTION  $48', '6D3F7E', ['materials', 'labour', 'variable overhead',
                                         'FIXED overhead']),
          ('VARIABLE  $36', '1F7A6A', ['materials', 'labour', 'variable overhead', '']),
          ('THROUGHPUT  $18', 'C9762E', ['materials', '', '', ''])],
         'Every row a method leaves out has already been charged against this period.'),
        ('table', ['', 'Units', '× unit cost', '= closing inventory'],
         [['Absorption costing', '', '', ''],
          ['Variable costing', '', '', ''],
          ['Throughput costing', '', '', '']], V, [34, 18, 24, 24]),

        ('watch', 'The three inventory figures differ by %s and %s. That money has not '
                  'disappeared and it has not been earned. It is sitting in a different '
                  'place on a different statement, and knowing where is the whole skill.'
                  % (money(S1.end_inv_value_abs - S1.end_inv_value_var),
                     money(S1.end_inv_value_var - S1.end_inv_value_thr))),

        ('prose', 'A word about the two cost-of-goods lines, because candidates lose '
                  'marks by treating them as one. Cost of goods manufactured is the cost '
                  'of the units FINISHED in the period. Cost of goods sold is the cost of '
                  'the units SOLD. They are equal only when nothing is added to or taken '
                  'out of finished goods, which is exactly the case this set is about. '
                  'In every other period they differ, and the difference is the movement '
                  'in finished goods inventory.', 'R2'),

        ('part', 'Part 3 · Three shapes of income statement', 'the margin lines'),

        ('task', 'Exercise 2D',
         'Name the three margin lines and say which costs are above each one.',
         'Read and complete.',
         ['Exercise 2A', 'Exercise 2B'],
         ['Each method has its own subtotal. Learn the subtotal and the format follows.', 'The word behaviour in blank 2 is the structural difference, not a style choice.', 'The last blank is a condition, not a cost.']),
        ('fig', 'formula', 'The three subtotals, and what each one has taken off',
         [('Sales', 'the same under all three', '#44506B'),
          ('\u2212', '', None),
          ('Cost of goods sold', 'DM + DL + VOH + FIXED overhead', '#6D3F7E'),
          ('=', '', None),
          ('GROSS MARGIN', 'the absorption subtotal', '#6D3F7E')],
         'Change what you subtract and you change the name of the subtotal.'),
        ('fill', 'R2',
         ['Each method brings its own income statement format with it, and the exam '
          'expects you to produce the right shape without being told.',
          'The absorption statement deducts cost of goods sold from sales to arrive at '
          '{gross} margin, and then deducts all selling and administrative expenses.',
          'The variable costing statement separates costs by {behaviour} rather than by '
          'function. It deducts every variable cost, including variable selling cost, to '
          'arrive at {contribution} margin, and then deducts the fixed costs as a block.',
          'The throughput statement deducts only direct {material} cost from sales, and '
          'treats everything else as an operating expense of the period.',
          'The three statements report three different operating incomes whenever the '
          'units produced differ from the units {sold}, and exactly the same operating '
          'income when they are equal.'],
         {'gross': ('Gross margin is the absorption subtotal.', ''),
          'behaviour': ('By behaviour, not by function. This is the structural difference.',
                        'Writing an absorption statement and calling it variable costing '
                        'because fixed overhead is shown separately lower down.'),
          'contribution': ('Sales less ALL variable costs.', ''),
          'material': ('Materials only.', ''),
          'sold': ('Production equal to sales means no change in inventory, so no fixed '
                   'overhead moves.', 'Thinking the methods always differ. They do not.')},
         ['throughput', 'function', 'net', 'produced', 'labour']),

        ('h3', 'The three shapes, side by side'),
        ('table', ['Absorption costing', 'Variable costing', 'Throughput costing'],
         [['Sales', 'Sales', 'Sales'],
          ['less Cost of goods sold\n(DM + DL + VMOH + FMOH)',
           'less Variable cost of goods sold\n(DM + DL + VMOH)',
           'less Direct materials in units sold'],
          ['= GROSS MARGIN', 'less Variable selling and administrative',
           '= THROUGHPUT CONTRIBUTION'],
          ['less Selling and administrative\n(variable and fixed)',
           '= CONTRIBUTION MARGIN', 'less All other operating costs\n(DL, VMOH, FMOH, S&A)'],
          ['= OPERATING INCOME', 'less Fixed manufacturing overhead\nless Fixed selling '
           'and administrative', '= OPERATING INCOME'],
          ['', '= OPERATING INCOME', '']], A, [34, 33, 33]),

        ('task', 'Exercise 2E',
         'Attach each subtotal to the decision it is actually able to answer.',
         'Match each subtotal with what it is actually useful for. Write the letter.',
         ['Exercise 2D'],
         ['Read the four uses first, before the four subtotals.', 'Ask which costs each decision can ignore. That names the subtotal.', 'Only one of the four is about reporting outside the company.']),
        ('fig', 'matrix', 'Each subtotal answers one kind of question',
         ['Short-run decision', 'Bottleneck decision', 'External report'],
         ['Which subtotal?', 'Why that one'],
         [['Contribution margin', 'fixed cost is irrelevant in the short run'],
          ['Throughput contribution', 'everything but materials is fixed at a bottleneck'],
          ['Gross margin', 'the standards require full manufacturing cost']],
         'The subtotals are not three ways of saying the same thing.'),
        ('match',
         ['Gross margin', 'Contribution margin', 'Throughput contribution',
          'Operating income'],
         ['Deciding whether one more unit is worth making when the bottleneck is the '
          'constraint.',
          'Reporting to shareholders and to the tax authority.',
          'Short-run decisions: special orders, dropping a product, cost-volume-profit '
          'analysis.',
          'Comparing the whole result of the period against the budget.'],
         ['B', 'C', 'A', 'D'],
         'Each margin exists because it answers a question the others cannot.'),

        ('part', 'Part 4 · Which method, and who says so', 'the rules behind the choice'),

        ('task', 'Exercise 2F',
         'State which method the accounting standards require, and on what basis fixed overhead must be absorbed.',
         'Read and complete.',
         ['Exercise 2A'],
         ['Two of the blanks are about permission and two are about the audience.', 'The word in blank 2 is the one the standards actually use. It is not "actual".', 'Nothing here says variable costing is improper. Read carefully.']),
        ('fig', 'buckets', 'Who the numbers are for',
         [('EXTERNAL REPORTING', '6D3F7E',
           ['Shareholders, lenders, the tax authority', 'Absorption costing REQUIRED',
            'Fixed overhead absorbed on NORMAL capacity', 'Variable costing not permitted']),
          ('INTERNAL REPORTING', '1F7A6A',
           ['Managers inside the business', 'Variable costing normal and legitimate',
            'Contribution margin for decisions', 'No standard applies'])],
         'Most companies prepare both. They are not alternatives; they are audiences.'),
        ('fill', 'R2',
         ['The choice between the methods is not free. For external reporting and for '
          'tax, absorption costing is {required}, because the accounting standards treat '
          'fixed production overhead as part of the cost of bringing inventory to its '
          'present location and condition.',
          'The standards add an important condition. Fixed overhead must be absorbed on '
          'the basis of {normal} capacity rather than actual output, so that a month of '
          'unusually low production does not inflate the value of the units that were '
          'made.',
          'Variable costing is not permitted for external reporting, but it is entirely '
          '{legitimate} inside the business. Most companies that use absorption costing '
          'for external reporting also prepare variable costing figures for '
          '{internal reporting}.'],
         {'required': ('GAAP and IFRS both require it; so does the tax code.', ''),
          'normal': ('Normal capacity, not actual production.',
                     'Candidates assume actual output is always the denominator. '
                     'Handout 5 shows what happens when it is not.'),
          'legitimate': ('There is nothing improper about variable costing internally.',
                         'Students sometimes think variable costing is "not allowed". '
                         'It is not allowed in PUBLISHED statements. That is all.'),
          'internal reporting': ('Both sets of numbers, for two different '
                                'audiences.', '')},
         ['forbidden', 'actual', 'theoretical', 'optional']),

        ('task', 'Exercise 2G',
         'Identify a method from a description of what it does, as the exam states it.',
         'Tick the method each statement describes. One tick per row.',
         ['Everything in this handout'],
         ['Rows 3 and 7 follow from the stack diagram: more cost in, higher inventory value.', 'Row 6 is a vocabulary question, not an accounting one.', 'Row 8 asks about tax, which follows the external reporting rule.']),
        ('fig', 'stacks', 'Height of the stack decides the inventory value',
         [('Absorption', [('inventoriable', 48, '#6D3F7E', True)], '#6D3F7E'),
          ('Variable', [('inventoriable', 36, '#1F7A6A', True)], '#1F7A6A'),
          ('Throughput', [('inventoriable', 18, '#C9762E', True)], '#C9762E')],
         'Highest unit cost gives the highest closing inventory. Lowest gives the lowest.'),
        ('sortgrid', ['Statement', 'Absorption', 'Variable', 'Throughput'],
         ['Required by GAAP and IFRS for published financial statements',
          'Treats fixed factory overhead as a cost of the period',
          'Produces the highest closing inventory value of the three',
          'Produces a contribution margin figure',
          'Treats direct labour as a period cost',
          'Was once commonly called "direct costing"',
          'Produces the lowest closing inventory value of the three',
          'Is the basis on which the tax return is prepared'],
         ['Absorption', 'Variable', 'Absorption', 'Variable', 'Throughput',
          'Variable', 'Throughput', 'Absorption'],
         'Rows 3 and 7 follow from the ladder: the more cost a method puts into '
         'inventory, the higher the inventory value.'),

        ('task', 'Exercise 2H',
         'Recognise the three methods in exam English, including the old names.',
         'The same fact, three registers. Read across.',
         ['The whole handout'],
         ['Cover the right-hand column and predict the exam wording.', 'Then find your own words inside the exam sentence.', 'Pay attention to row 3: a question about permitted use is a different question from one about correct method.']),
        ('fig', 'register',
         [('Throughput costing puts only materials in the product cost.',
           'Under throughput costing, direct materials constitute the only inventoriable cost.',
           'Under throughput costing, the inventoriable cost per unit would be:'),
          ('Variable costing takes off all the variable costs first.',
           'Contribution margin is determined by deducting all variable costs, whether '
           'manufacturing or selling, from sales revenue.',
           'In arriving at contribution margin, which of the following is deducted?'),
          ('You must use absorption costing for the published accounts.',
           'Absorption costing is mandated for external financial reporting purposes.',
           'A company may use variable costing for which of the following purposes?')],
         'The third column is what you will actually be given.'),
        ('three_ways', [
            ('Throughput costing puts only materials in the product cost.',
             'Under throughput costing, direct materials constitute the only '
             'inventoriable cost.',
             'Under throughput costing, the inventoriable cost per unit would be:'),
            ('Variable costing takes off all the variable costs first.',
             'Contribution margin is determined by deducting all variable costs, '
             'whether manufacturing or selling, from sales revenue.',
             'In arriving at contribution margin, which of the following is deducted?'),
            ('You must use absorption costing for the published accounts.',
             'Absorption costing is mandated for external financial reporting purposes.',
             'A company may use variable costing for which of the following purposes?'),
        ]),

        ('traps', [
            ('"the unit product cost"',
             'there is one correct unit cost',
             'There are three, and the question always says which method. Underline it.'),
            ('"variable costing"',
             'all variable costs go into inventory',
             'Only variable MANUFACTURING cost. Variable selling cost is a period cost '
             'under every method.'),
            ('"direct costing"',
             'the product cost is made of direct costs',
             'Direct costing is variable costing. Variable manufacturing overhead is '
             'indirect and is still included.'),
            ('"gross margin" in a variable costing question',
             'gross margin and contribution margin are interchangeable',
             'A variable costing statement has no gross margin line at all.'),
            ('"based on normal capacity"',
             'the rate uses this period’s actual output',
             'Normal capacity is a budgeted, multi-period figure. This matters enormously '
             'in Handout 5.'),
        ]),

        ('part', 'Part 5 · Exam practice', 'Levels A and B'),

        ('decoder', 'Which of the following would be included in inventory under '
                    'variable costing but not under throughput costing?'),

        ('mcq', 'Which of the following would be included in inventory under variable '
                'costing but NOT under throughput costing?',
         ['Direct materials.',
          'Direct labour and variable manufacturing overhead.',
          'Fixed manufacturing overhead.',
          'Variable selling expenses.'],
         1, 'Level A',
         'Variable costing inventories DM + DL + VMOH; throughput inventories DM only. '
         'The difference is exactly DL + VMOH. (C) is in neither and (D) is in no method '
         'at all.'),

        ('mcq', 'Grandview’s costs per unit are: direct materials $18, direct labour '
                '$12, variable manufacturing overhead $6, variable selling $4. Fixed '
                'manufacturing overhead is $600,000 and production is 50,000 units. The '
                'unit product cost under absorption costing is:',
         ['$36.', '$40.', '$48.', '$52.'],
         2, 'Level A',
         '$18 + $12 + $6 + ($600,000 ÷ 50,000 = $12) = $48. Option (D) adds the variable '
         'selling cost, which is never inventoriable. Option (B) is the variable product '
         'cost plus selling.'),

        ('mcq', 'Using the data above, the value of 8,000 units of closing inventory '
                'under throughput costing would be:',
         ['$144,000.', '$288,000.', '$384,000.', '$416,000.'],
         0, 'Level B',
         '8,000 × $18 of direct materials = $144,000. (B) is variable costing at $36 and '
         '(C) is absorption costing at $48 — both are offered because candidates reach '
         'for a familiar number.'),

        ('mcq', 'Which of the following is NOT a valid reason for a company to prepare '
                'variable costing statements for internal use?',
         ['Contribution margin is more useful for short-run decisions.',
          'Operating income is not affected by changes in inventory levels.',
          'It avoids the need to allocate fixed manufacturing overhead to units.',
          'It is required by accounting standards for segment disclosures.'],
         3, 'Level B',
         'Variable costing is not required by any standard; absorption is the one that '
         'is mandated. (A), (B) and (C) are the three standard advantages and the exam '
         'expects you to recognise all of them.'),

        ('mcq', 'A company reports a gross margin of $1,764,000 and a contribution '
                'margin of $2,100,000 for the same period. Which of the following best '
                'explains the difference?',
         ['An arithmetic error, since the two should be equal.',
          'Gross margin is after fixed manufacturing overhead in cost of goods sold, '
          'while contribution margin is before all fixed costs and after variable '
          'selling costs.',
          'Contribution margin includes fixed manufacturing overhead.',
          'Gross margin is calculated before cost of goods sold.'],
         1, 'Level B',
         'The two subtotals cut the cost structure in different directions — one by '
         'function, one by behaviour — so they are different numbers measuring different '
         'things. These are Grandview’s actual figures from Handout 3.'),

        ('mcq', 'Under IFRS and US GAAP, fixed production overhead must be allocated to '
                'units of production on the basis of:',
         ['Actual production for the period.',
          'The normal capacity of the production facilities.',
          'Maximum theoretical capacity.',
          'Budgeted sales volume.'],
         1, 'Level B',
         'Normal capacity prevents a low-production period from loading an abnormal '
         'amount of fixed cost onto each unit. Unabsorbed overhead in such a period is '
         'expensed rather than inventoried.'),

        ('mcq', 'In a period in which units produced exactly equal units sold and there '
                'is no opening inventory, operating income under absorption costing will '
                'be:',
         ['Higher than under variable costing.',
          'Lower than under variable costing.',
          'Equal to operating income under variable costing.',
          'Equal to throughput contribution.'],
         2, 'Level A',
         'No change in inventory means no fixed overhead is carried forward or released, '
         'so the two methods report the same income. This is the base case you must know '
         'before Handout 4.'),

        ('mcq', 'Throughput costing is MOST useful to a manager who wants to:',
         ['Value inventory for the annual financial statements.',
          'Evaluate whether to produce one more unit when a bottleneck limits output.',
          'Set a long-run selling price that recovers all costs.',
          'Report segment results to external users.'],
         1, 'Level B',
         'Throughput thinking assumes everything except materials is fixed in the short '
         'run, which is precisely the assumption that holds at a bottleneck. (C) is the '
         'case FOR absorption costing, which is why it is offered.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the completed unit cost table'),
        ('table', ['Per unit', 'Absorption', 'Variable', 'Throughput'],
         [['Direct materials', '$%d' % S1.dm, '$%d' % S1.dm, '$%d' % S1.dm],
          ['Direct labour', '$%d' % S1.dl, '$%d' % S1.dl, '—'],
          ['Variable manufacturing overhead', '$%d' % S1.vmoh, '$%d' % S1.vmoh, '—'],
          ['Fixed manufacturing overhead', '$%d' % S1.fmoh_rate, '—', '—'],
          ['Unit product cost', '$%d' % S1.abs_unit, '$%d' % S1.var_unit,
           '$%d' % S1.thr_unit]], '6D3F7E', [40, 20, 20, 20]),
        ('h3', 'Exercise 2C · closing inventory, %s units' % num(S1.end_inv)),
        ('table', ['', 'Units', '× unit cost', '= closing inventory'],
         [['Absorption costing', num(S1.end_inv), '$%d' % S1.abs_unit,
           money(S1.end_inv_value_abs)],
          ['Variable costing', num(S1.end_inv), '$%d' % S1.var_unit,
           money(S1.end_inv_value_var)],
          ['Throughput costing', num(S1.end_inv), '$%d' % S1.thr_unit,
           money(S1.end_inv_value_thr)]], '1F7A6A', [34, 18, 24, 24]),
        ('prose', 'The gap between the absorption and variable figures, %s, is the fixed '
                  'factory overhead sitting in the warehouse rather than on the income '
                  'statement. Handout 3 shows what it does to reported profit.'
                  % money(S1.end_inv_value_abs - S1.end_inv_value_var)),
    ],
)
