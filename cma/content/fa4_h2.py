# -*- coding: utf-8 -*-
"""Volume 4, Handout 2 — FIFO, LIFO and Weighted Average.

Covers A.2(d): identifying and comparing the cost flow assumptions used in
accounting for inventories.
"""
from fadata import N, I, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_POOLH = ['Layer', 'Units', 'Cost per unit', 'Total cost']
_POOLW = [38, 18, 20, 24]

_RESH = ['Method', 'Closing inventory', 'Cost of goods sold',
         'Together they equal']
_RESW = [24, 25, 25, 26]


def _pool():
    rows = [[d, num(u), '$%d' % c, money(u * c)] for d, u, c in I.layers]
    rows.append(['Goods available for sale', num(I.units_available), '',
                 money(I.cost_available)])
    return rows


def _results(blank=False):
    def c(v):
        return '' if blank else v
    out = []
    for lbl, cl in (('FIFO', I.fifo_closing), ('LIFO', I.lifo_closing),
                    ('Weighted average', I.wa_closing)):
        out.append([lbl, c(money(cl)), c(money(I.cogs(cl))),
                    c(money(I.cost_available))])
    return out


HANDOUT = dict(
    n=2,
    title='FIFO, LIFO and Weighted Average',
    subtitle='The same %s units and the same %s of cost. Three assumptions about '
             'which cost went out of the door, and three different answers.'
             % (num(I.units_available), money(I.cost_available)),
    register='R2 throughout',

    lang=dict(
        register='R2 textbook English. The sentences are short because the '
                 'arithmetic is the hard part, not the prose.',
        collocations=['apply a cost flow assumption',
                      'assume the oldest costs are sold first',
                      'split goods available for sale',
                      'compute a weighted average unit cost',
                      'leave the newest layers in inventory',
                      'match current costs against current revenue'],
        pairs=['cost flow / physical flow',
               'FIFO / LIFO', 'periodic / perpetual',
               'closing inventory / cost of goods sold'],
        nots=['A cost flow assumption is not a claim about which physical units '
              'left the warehouse. The goods can move in any order.',
              'LIFO is not forbidden under US GAAP. It is forbidden under IFRS, '
              'and Volume 12 covers that difference.'],
    ),

    objectives=[
        'State the identity that every cost flow assumption has to satisfy.',
        'Compute closing inventory and cost of goods sold under FIFO.',
        'Compute both under LIFO.',
        'Compute both under weighted average.',
        'Say why a cost flow assumption need not match the physical movement of '
        'the goods.',
    ],

    terms=[
        ('cost flow assumption',
         'An assumption about which recorded costs attach to the units sold.',
         'افتراض تدفق التكلفة',
         'An assumption about costs, not about goods. The physical units may move '
         'in any order at all.'),
        ('first-in, first-out',
         'The assumption that the oldest costs are charged to cost of goods sold '
         'first.', 'الوارد أولاً صادر أولاً',
         'Closing inventory is therefore made of the newest, and usually the '
         'dearest, costs.'),
        ('last-in, first-out',
         'The assumption that the newest costs are charged to cost of goods sold '
         'first.', 'الوارد أخيراً صادر أولاً',
         'Closing inventory is left holding the oldest costs, which can be many '
         'years out of date.'),
        ('weighted average',
         'One average cost per unit, applied to everything.',
         'المتوسط المرجح',
         'Weighted by quantity, not a simple average of the four prices. Students '
         'lose marks on exactly that.'),
        ('specific identification',
         'Tracking the actual cost of each individual unit.', 'التحديد العيني',
         'Required where units are not interchangeable. Practical for aircraft, '
         'absurd for screws.'),
        ('periodic system',
         'Counting inventory at the period end and deriving cost of goods sold '
         'from the count.', 'نظام الجرد الدوري',
         'Under LIFO a periodic system and a perpetual system can give different '
         'answers. Under FIFO they never do.'),
    ],

    blocks=[
        ('scene', 'One pool of cost, split two ways', [
            'Handout 1 established the pool. %s units of the %s were available for '
            'sale during %s, bought in four batches at four prices, at a total '
            'cost of %s.' % (num(I.units_available), I.name, Y,
                             money(I.cost_available)),
            '%s units were sold and %s remain. Those counts are facts.'
            % (num(I.sold_units), num(I.closing_units)),
            'The whole of this handout is one question: of the %s, how much went '
            'out with the %s units sold, and how much stayed with the %s units '
            'left?' % (money(I.cost_available), num(I.sold_units),
                       num(I.closing_units)),
        ]),
        ('table', _POOLH, _pool(), SLATE, _POOLW),

        ('part', 'Part 1 · The identity underneath',
         'what every method has to satisfy'),

        ('task', 'Exercise 2A',
         'State the identity every cost flow assumption satisfies, and say what it '
         'implies.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for the pool of goods available for sale.'],
         ['Blank 1 is the pool the two outputs are carved from.',
          'Blank 3 follows directly: if one output rises, what happens to the '
          'other?',
          'The last blank is what the choice of method does NOT change.']),
        ('fill', 'R2',
         ['Every cost flow assumption starts from the same pool. Opening inventory '
          'plus purchases gives goods {available} for sale, which for the %s is %s '
          'and is the same figure whatever method is chosen.'
          % (I.name, money(I.cost_available)),
          'That pool is then divided in two. Part of it is charged to cost of '
          'goods sold, and the rest stays on the balance sheet as closing '
          '{inventory}. Nothing is left over and nothing is invented.',
          'One consequence follows immediately and is worth saying out loud. '
          'Because the two outputs add to a fixed total, a method that produces a '
          'higher closing inventory must produce a {lower} cost of goods sold, by '
          'exactly the same amount.',
          'And because the pool itself is fixed, the choice of method changes '
          'neither the number of units nor the total {cost} of them. It changes '
          'only which part of that cost is reported where.'],
         {'available': ('Opening plus purchases.', ''),
          'inventory': ('The two outputs exhaust the pool.', ''),
          'lower': ('They move in opposite directions, dollar for dollar.',
                    'Students treat the two figures as independent. They are two '
                    'halves of one fixed total.'),
          'cost': ('The pool does not move.', '')},
         ['higher', 'revenue', 'units']),
        ('fig', 'formula', 'The identity every method satisfies',
         [('GOODS AVAILABLE', money(I.cost_available), SLATE),
          ('=', '', None),
          ('COST OF GOODS SOLD', 'charged to this year', RUST),
          ('+', '', None),
          ('CLOSING INVENTORY', 'carried to next year', FIFO)],
         'Fix the left-hand side and the two on the right can only move in '
         'opposite directions.'),

        ('part', 'Part 2 · FIFO', 'the oldest costs leave first'),

        ('prose', 'The first of the three is first-in, first-out, which everyone '
                  'calls FIFO. The name states the assumption: the costs that came '
                  'in first are the costs charged out first, so what is left in '
                  'inventory is whatever came in most recently.', 'R2'),

        ('task', 'Exercise 2B',
         'Compute closing inventory and cost of goods sold under FIFO.',
         'Work out which layers the %s remaining units come from, then price '
         'them.' % num(I.closing_units),
         ['Exercise 2A'],
         ['Under FIFO the oldest costs leave first, so the newest costs are the '
          'ones still here. Start from the bottom of the layer table.',
          'The October batch is %s units. You need %s, so you will take all of '
          'October and part of one more layer.'
          % (num(I.layers[3][1]), num(I.closing_units)),
          'Cost of goods sold is then %s less your answer — do not compute it '
          'from the units sold.' % money(I.cost_available)]),
        ('table', ['FIFO · which layers are left', 'Units', 'Cost per unit',
                   'Total'],
         [['From the October purchase', num(I.layers[3][1]),
           '$%d' % I.layers[3][2], '______________'],
          ['From the June purchase', num(I.closing_units - I.layers[3][1]),
           '$%d' % I.layers[2][2], '______________'],
          ['FIFO closing inventory', num(I.closing_units), '', '______________'],
          ['FIFO cost of goods sold', num(I.sold_units), '', '______________']],
         FIFO, [38, 18, 20, 24]),
        ('answers', 4),
        ('fig', 'ranked', 'FIFO leaves the newest costs on the balance sheet',
         [('October, $%d a unit — all of it stays' % I.layers[3][2],
           I.layers[3][1] * I.layers[3][2],
           money(I.layers[3][1] * I.layers[3][2]), FIFO),
          ('June, $%d a unit — part stays' % I.layers[2][2],
           (I.closing_units - I.layers[3][1]) * I.layers[2][2],
           money((I.closing_units - I.layers[3][1]) * I.layers[2][2]), FIFO),
          ('June, February and opening — charged to cost of sales',
           I.cogs(I.fifo_closing), money(I.cogs(I.fifo_closing)), RUST)],
         'In a year of rising prices FIFO leaves the dearest costs on the balance '
         'sheet and charges the cheapest against revenue.'),

        ('part', 'Part 3 · LIFO', 'the newest costs leave first'),

        ('prose', 'The second is last-in, first-out, or LIFO, and it is the exact '
                  'reverse. The costs that came in most recently are charged out '
                  'first, so what is left in inventory is whatever came in '
                  'earliest — in a long-established company, costs that may '
                  'be decades old.', 'R2'),

        ('task', 'Exercise 2C',
         'Compute closing inventory and cost of goods sold under LIFO.',
         'Work out which layers remain under LIFO, then price them.',
         ['Exercise 2B'],
         ['Under LIFO the newest costs leave first, so the oldest costs are the '
          'ones still here. Start from the top of the layer table.',
          'The opening layer is %s units. You need %s, so you will take all of it '
          'and part of February.' % (num(I.layers[0][1]), num(I.closing_units)),
          'Compare your answer with Exercise 2B before you go on. The difference '
          'is the point of the next handout.']),
        ('table', ['LIFO · which layers are left', 'Units', 'Cost per unit',
                   'Total'],
         [['From opening inventory', num(I.layers[0][1]),
           '$%d' % I.layers[0][2], '______________'],
          ['From the February purchase',
           num(I.closing_units - I.layers[0][1]),
           '$%d' % I.layers[1][2], '______________'],
          ['LIFO closing inventory', num(I.closing_units), '', '______________'],
          ['LIFO cost of goods sold', num(I.sold_units), '', '______________']],
         LIFO, [38, 18, 20, 24]),
        ('answers', 4),
        ('fig', 'scale',
         'FIFO LEAVES BEHIND',
         ['All %s October units at $%d' % (num(I.layers[3][1]), I.layers[3][2]),
          '%s June units at $%d'
          % (num(I.closing_units - I.layers[3][1]), I.layers[2][2]),
          'Closing inventory %s' % money(I.fifo_closing),
          'The newest costs in the pool'],
         'LIFO LEAVES BEHIND',
         ['All %s opening units at $%d' % (num(I.layers[0][1]), I.layers[0][2]),
          '%s February units at $%d'
          % (num(I.closing_units - I.layers[0][1]), I.layers[1][2]),
          'Closing inventory %s' % money(I.lifo_closing),
          'The oldest costs in the pool']),

        ('part', 'Part 4 · Weighted average',
         'one price for everything'),

        ('task', 'Exercise 2D',
         'Compute the weighted average unit cost and apply it to both outputs.',
         'Read and complete.',
         ['Exercises 2B and 2C'],
         ['The average is weighted by quantity. Do not average the four prices.',
          'Blank 1 is a division, and the answer is a round number.',
          'Apply the same unit cost to both the units sold and the units left.']),
        ('fill', 'R2',
         ['The weighted average unit cost is the total cost of the pool divided by '
          'the total units in it: %s divided by %s units, which is {$%d} a unit.'
          % (money(I.cost_available), num(I.units_available), I.wa_unit),
          'Notice that this is not the average of $%d, $%d, $%d and $%d, which '
          'would be $%.2f. The average is weighted by how many units were bought at '
          'each price, and the June batch of %s units pulls it towards $%d.'
          % (I.layers[0][2], I.layers[1][2], I.layers[2][2], I.layers[3][2],
             sum(c for _d, _u, c in I.layers) / 4.0,
             num(I.layers[2][1]), I.layers[2][2]),
          'That one rate is then applied to both outputs. Closing inventory is %s '
          'units at $%d, which is {%s}, and cost of goods sold is the remaining '
          '{%s}.' % (num(I.closing_units), I.wa_unit, money(I.wa_closing),
                     money(I.cogs(I.wa_closing))),
          'The answer sits between the other two, which it always will: an average '
          'cannot fall outside the range of the costs it {averages}.'],
         {'$%d' % I.wa_unit: ('%s ÷ %s units.'
                              % (money(I.cost_available),
                                 num(I.units_available)), ''),
          money(I.wa_closing): ('%s units at $%d.' % (num(I.closing_units),
                                                      I.wa_unit), ''),
          money(I.cogs(I.wa_closing)): ('%s less closing inventory.'
                                        % money(I.cost_available), ''),
          'averages': ('Always between FIFO and LIFO.',
                       'Students average the four prices without weighting, which '
                       'ignores how many units were bought at each.')},
         [money(I.cost_available), '$47', 'exceeds']),
        ('fig', 'ranked', 'The three answers, side by side',
         [('FIFO closing inventory', I.fifo_closing, money(I.fifo_closing), FIFO),
          ('Weighted average closing inventory', I.wa_closing,
           money(I.wa_closing), WA),
          ('LIFO closing inventory', I.lifo_closing, money(I.lifo_closing), LIFO)],
         'Same units, same pool, three answers. The average always lies between '
         'the other two.',
         '%s units at 31 December %s' % (num(I.closing_units), Y)),

        ('part', 'Part 5 · Cost flow is not physical flow',
         'the point students most often miss'),

        ('task', 'Exercise 2E',
         'Say why the assumption need not match the way the goods actually moved.',
         'Read and complete.',
         ['Exercises 2B, 2C and 2D'],
         ['Blank 1 is what a cost flow assumption is an assumption about.',
          'Blank 3 is the kind of goods for which a company has no choice but to '
          'track each unit.',
          'The last blank is the one method whose name describes a physical fact '
          'rather than an assumption.']),
        ('fill', 'R2',
         ['A cost flow assumption is an assumption about {costs}, not about goods. '
          'Northwind’s warehouse staff take whichever controller is nearest '
          'the door, and the accounting is unaffected by which one that is.',
          'A company may use LIFO for its accounts while physically selling its '
          'oldest stock first, and in a business with perishable goods it almost '
          'certainly does. Nothing about that is {inconsistent}, because the two '
          'questions are separate.',
          'There is one exception. Where the units are not interchangeable — '
          'aircraft, bespoke machines, numbered works of art — the cost of '
          'each individual unit must be tracked, and the method is called '
          '{specific} identification.',
          'That is the only one of the four whose name describes what actually '
          'happened to the goods. The other three describe what is assumed about '
          'the {costs}.'],
         {'costs': ('Costs, not goods.',
                    'Students object that LIFO is unrealistic because old stock '
                    'would spoil. The physical flow is not what is being '
                    'described.'),
          'inconsistent': ('The two questions are independent.', ''),
          'specific': ('Required where units are not interchangeable.', '')},
         ['goods', 'forbidden', 'average']),
        ('fig', 'matrix', 'What each method claims, and what it does not',
         ['FIFO', 'LIFO', 'Weighted average', 'Specific identification'],
         ['The claim it makes about costs', 'The claim about the goods'],
         [['Oldest costs are charged out first', 'None'],
          ['Newest costs are charged out first', 'None'],
          ['One average cost for every unit', 'None'],
          ['Each unit carries its own cost', 'This one describes the goods']],
         'Only the last row makes any claim about physical movement. The other '
         'three are about costs and nothing else.'),
        ('table', _RESH, _results(blank=True), SLATE, _RESW),
        ('answers', 9),

        ('watch', 'LIFO is permitted under US GAAP and prohibited under IFRS. Any '
                  'question that mentions IFRS has removed LIFO from the options '
                  'before you start reading them. Volume 12 covers the difference '
                  'and its consequences.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Goods available for sale cost %s. Closing inventory under a given '
                'method is %s. Cost of goods sold under that method is:'
                % (money(I.cost_available), money(I.fifo_closing)),
         [money(I.cogs(I.fifo_closing)), money(I.fifo_closing),
          money(I.cost_available), money(I.cost_available + I.fifo_closing)],
         0, 'Level A',
         'The pool splits in two: %s − %s = %s. Every method satisfies this '
         'identity, which is why computing one output always gives the other.'
         % (money(I.cost_available), money(I.fifo_closing),
            money(I.cogs(I.fifo_closing)))),

        ('mcq', 'In a period of rising prices, FIFO compared with LIFO produces:',
         ['Higher closing inventory and higher cost of goods sold',
          'Higher closing inventory and lower cost of goods sold',
          'Lower closing inventory and lower cost of goods sold',
          'The same closing inventory and the same cost of goods sold'],
         1, 'Level B',
         'FIFO leaves the newest and dearest costs in inventory, so closing '
         'inventory is higher; and because the pool is fixed, cost of goods sold '
         'must be lower by the same amount. (A) and (C) both move the two figures '
         'in the same direction, which the identity forbids.'),

        ('mcq', 'A company buys %s units at $%d, %s at $%d, %s at $%d and %s at '
                '$%d. The weighted average unit cost is:'
                % (num(I.layers[0][1]), I.layers[0][2], num(I.layers[1][1]),
                   I.layers[1][2], num(I.layers[2][1]), I.layers[2][2],
                   num(I.layers[3][1]), I.layers[3][2]),
         ['$%.2f' % (sum(c for _d, _u, c in I.layers) / 4.0),
          '$%d' % I.wa_unit, '$%d' % I.layers[0][2], '$%d' % I.layers[3][2]],
         1, 'Level B',
         '%s ÷ %s units = $%d. (A) averages the four prices without weighting '
         'them by quantity, which is the single most common error in this '
         'calculation.'
         % (money(I.cost_available), num(I.units_available), I.wa_unit)),

        ('mcq', 'Under LIFO, closing inventory consists of:',
         ['The most recently purchased units',
          'The earliest costs in the pool',
          'An average of all costs in the pool',
          'The actual units physically remaining'],
         1, 'Level A',
         'LIFO charges the newest costs to cost of goods sold, so the oldest costs '
         'are what remain. (D) confuses the cost flow assumption with the physical '
         'units, which is exactly the distinction Part 5 draws.'),

        ('mcq', 'Which statement about cost flow assumptions is correct?',
         ['The assumption chosen must match the physical movement of the goods',
          'The assumption concerns which costs attach to units sold, not which '
          'units moved',
          'Specific identification may be used for any inventory',
          'FIFO is required where goods are perishable'],
         1, 'Level C',
         'The assumption is about costs. (A) and (D) both claim a link to physical '
         'flow that does not exist. (C) overstates specific identification, which '
         'is required where units are not interchangeable and is impractical '
         'otherwise.'),

        ('mcq', 'Northwind’s weighted average closing inventory is %s. Its '
                'FIFO figure is %s and its LIFO figure is %s. This ordering:'
                % (money(I.wa_closing), money(I.fifo_closing),
                   money(I.lifo_closing)),
         ['Is a coincidence of these particular numbers',
          'Must always hold, because an average cannot fall outside the range of '
          'the costs averaged',
          'Would reverse if prices were rising',
          'Depends on whether a periodic or perpetual system is used'],
         1, 'Level C',
         'The weighted average always lies between FIFO and LIFO, because it is an '
         'average of the same costs. (C) has it backwards: prices here are rising, '
         'and falling prices would swap FIFO and LIFO while leaving the average in '
         'the middle.'),

        ('mcq', 'Under which cost flow assumption do a periodic system and a '
                'perpetual system always give the same answer?',
         ['LIFO', 'FIFO', 'Weighted average', 'All three'],
         1, 'Level C',
         'Under FIFO the oldest costs leave first whether you compute during the '
         'year or at the end of it, so the timing of the computation cannot change '
         'the answer. Under LIFO and under a moving average it can, which is why '
         'the exam names the system in those questions.'),

        ('tip', 'Compute whichever of the two outputs is easier, then subtract from '
                'goods available for sale to get the other. Computing both from '
                'scratch doubles the arithmetic and doubles the chance of an '
                'error.'),
    ],

    key_extra=[
        ('h3', 'Exercises 2B, 2C and 2D · the three answers'),
        ('table', _RESH, _results(), SLATE, _RESW),
        ('h3', 'How each figure was built'),
        ('table', ['Method', 'Closing inventory is made of', 'Amount'],
         [['FIFO', '%s October units at $%d, plus %s June units at $%d'
           % (num(I.layers[3][1]), I.layers[3][2],
              num(I.closing_units - I.layers[3][1]), I.layers[2][2]),
           money(I.fifo_closing)],
          ['LIFO', '%s opening units at $%d, plus %s February units at $%d'
           % (num(I.layers[0][1]), I.layers[0][2],
              num(I.closing_units - I.layers[0][1]), I.layers[1][2]),
           money(I.lifo_closing)],
          ['Weighted average', '%s units at the average of $%d'
           % (num(I.closing_units), I.wa_unit), money(I.wa_closing)]],
         SLATE, [20, 56, 24]),
    ],
)
