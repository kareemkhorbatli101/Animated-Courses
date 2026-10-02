# -*- coding: utf-8 -*-
"""Volume 4, Handout 5 — Lower of Cost or Market: LIFO and Retail.

Covers the first half of A.2(e): the lower of cost or market rule, which
applies to inventory measured under LIFO or by the retail inventory method.
"""
from fadata import N, I, L, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_MKTH = ['Item', 'Cost', 'Replacement', 'Ceiling', 'Floor', 'Market',
         'Carry at']
_MKTW = [22, 12, 14, 13, 13, 13, 13]


def _mkt(blank=False):
    def c(v):
        return '' if blank else v
    out = []
    for i in range(len(L.items)):
        r = L.row(i)
        out.append([r['name'], '$%d' % r['cost'], '$%d' % r['repl'],
                    c('$%g' % r['ceiling']), c('$%g' % r['floor']),
                    c('$%g' % r['market']), c('$%g' % r['lcm'])])
    return out


HANDOUT = dict(
    n=5,
    title='Lower of Cost or Market: LIFO and Retail',
    subtitle='Inventory may never be carried above what it is worth. Under LIFO, '
             'deciding what it is worth takes three figures rather than one.',
    register='R2 throughout',

    lang=dict(
        register='R2 textbook English. This rule is mechanical, so the sentences '
                 'are short and the order of operations matters.',
        collocations=['write inventory down to market',
                      'apply the ceiling and the floor',
                      'determine designated market value',
                      'compare market with cost', 'recognise a loss on write-down',
                      'carry inventory at the lower of two figures'],
        pairs=['cost / market', 'ceiling / floor',
               'replacement cost / selling price', 'write-down / write-up'],
        nots=['Market does not mean selling price. It starts as replacement cost '
              'and is then bounded at both ends.',
              'The rule never writes inventory up. The word lower in its name is '
              'doing real work.'],
    ),

    objectives=[
        'State why inventory may not be carried above its value, and which '
        'measurement principle that follows from.',
        'Compute the ceiling and the floor for an item.',
        'Determine designated market value and compare it with cost.',
        'Apply the rule to four items and say which one is unaffected.',
        'Record the write-down and say where the loss is reported.',
    ],

    terms=[
        ('lower of cost or market',
         'A rule requiring inventory to be carried at the lower of its cost and a '
         'bounded market figure.', 'التكلفة أو السوق أيهما أقل',
         'Applies where inventory is measured under LIFO or by the retail '
         'inventory method. Everything else uses the rule in Handout 6.'),
        ('replacement cost',
         'What it would cost the company to buy or make the item today.',
         'تكلفة الاستبدال',
         'The starting point for market, and only the starting point. It is then '
         'bounded at both ends.'),
        ('ceiling',
         'The upper bound on market: net realisable value, being selling price '
         'less the costs of completing and selling.', 'الحد الأعلى',
         'It stops the company carrying inventory at more than it can get for it.'),
        ('floor',
         'The lower bound on market: net realisable value less a normal profit '
         'margin.', 'الحد الأدنى',
         'It stops the company writing the item down so far that selling it later '
         'produces an abnormally large profit.'),
        ('net realisable value',
         'The estimated selling price in the ordinary course of business, less '
         'the costs of completion and the costs necessary to make the sale.',
         'صافي القيمة القابلة للتحقق',
         'What the company will actually end up with. It is the ceiling from '
         'Handout 5, used here on its own.'),
        ('costs to complete',
         'What still has to be spent to get unfinished goods ready for sale.',
         'تكاليف الإكمال',
         'Relevant to work in process. For finished goods it is nil, which is why '
         'most exam items only deduct selling costs.'),
        ('designated market value',
         'The middle of the three: replacement cost, bounded by the ceiling and '
         'the floor.', 'القيمة السوقية المحددة',
         'Pick the middle figure of the three. That one instruction is the whole '
         'computation.'),
        ('write-down',
         'Reducing the carrying amount of inventory to its market figure.',
         'تخفيض قيمة المخزون',
         'A loss is recognised at once. Under US GAAP a later recovery is not '
         'reversed.'),
    ],

    blocks=[
        ('scene', 'The one rule that overrides every method', [
            'Handouts 2 to 4 settled how cost is measured. This handout and the '
            'next add a condition on top of all of them: inventory may never be '
            'carried at more than it is worth.',
            'The principle is simple and the arithmetic is not. Which version of '
            'the rule applies depends on how the inventory was measured in the '
            'first place.',
            'Inventory measured under LIFO or by the retail inventory method uses '
            'the older lower of cost or market rule, which this handout works. '
            'Everything else — FIFO, weighted average, specific '
            'identification — uses the simpler rule in Handout 6.',
            'Northwind reviews four items at the year end, each costing $100, and '
            'they are deliberately chosen so that all four behave differently.',
        ]),
        ('fig', 'fork', 'Which version of the rule applies',
         [('Is the inventory measured under LIFO or by the retail method?',
           'YES → lower of cost or MARKET — this handout', LIFO),
          ('Is it measured under FIFO, weighted average or specific '
           'identification?',
           'YES → lower of cost and NET REALISABLE VALUE — Handout 6',
           FIFO),
          ('Why two rules?',
           'A historical split that the standard setters kept; the exam tests it',
           SLATE)]),

        ('part', 'Part 1 · Why the rule exists at all',
         'and what it will not do'),

        ('task', 'Exercise 5A',
         'State the principle behind the rule and the one thing it never does.',
         'Read and complete. Write one word in each space.',
         ['Handout 4, for how cost is measured under each method.'],
         ['Blank 1 is what an asset must not be carried above.',
          'Blank 3 is the direction the rule refuses to move in.',
          'The last blank is where the loss is reported when a write-down is '
          'made.']),
        ('fill', 'R2',
         ['An asset may not be carried at more than the {benefit} the company '
          'expects to get from it. Inventory that has become obsolete, or damaged, '
          'or simply cheaper to buy than it was, is worth less than it cost, and '
          'continuing to carry it at cost would overstate the balance sheet.',
          'The rule therefore compares cost with a measure of current value and '
          'carries the inventory at the {lower} of the two. The comparison is made '
          'at every reporting date, not only when something obvious has gone '
          'wrong.',
          'What the rule never does is work in the other direction. Inventory is '
          'never written {up} above cost because its value has risen, however '
          'clear the evidence, because the gain has not been realised by selling '
          'anything.',
          'When a write-down is made the loss is recognised immediately, normally '
          'within cost of goods {sold}, and it reduces this year’s profit '
          'even though the goods have not been sold.'],
         {'benefit': ('Never above what the company will get from it.', ''),
          'lower': ('The lower of the two. The name says so.', ''),
          'up': ('One direction only.',
                 'Students apply the rule symmetrically and write inventory up '
                 'when prices recover. It is a floor on losses, not a valuation '
                 'model.'),
          'sold': ('Charged at once, usually within cost of goods sold.', '')},
         ['cost', 'higher', 'down']),
        ('fig', 'scale',
         'WHAT THE RULE DOES',
         ['Compares cost with a market figure',
          'Carries inventory at the lower of the two',
          'Recognises the loss immediately',
          'Applies at every reporting date'],
         'WHAT THE RULE NEVER DOES',
         ['Write inventory up above cost',
          'Wait for the goods to be sold',
          'Reverse an earlier write-down, under US GAAP',
          'Apply to goods that are simply slow-moving']),

        ('part', 'Part 2 · Three figures, and the middle one',
         'building designated market value'),

        ('prose', 'Under this version of the rule, market is not a single '
                  'observable number. It begins as replacement cost, and is then '
                  'bounded above and below so that it cannot produce an absurd '
                  'result in either direction.', 'R2'),
        ('prose', 'The upper bound is what the company could actually get for the '
                  'item: the selling price less the costs of completing and selling '
                  'it. The lower bound is that same figure less a normal profit '
                  'margin, which stops a company writing an item down so far that '
                  'selling it next year produces an unnaturally large profit.',
                  'R2'),

        ('task', 'Exercise 5B',
         'Compute the ceiling and the floor for one item.',
         'Read and complete.',
         ['Exercise 5A, and the two paragraphs above.'],
         ['Work with item A: cost $100, replacement cost $90, selling price $105, '
          'cost to sell $10, normal profit margin 10% of selling price.',
          'The ceiling is a subtraction. Do it first.',
          'The floor is the ceiling less the normal profit, and the normal profit '
          'is computed on the selling price.']),
        ('fill', 'R2',
         ['Item A has a selling price of $105 and will cost $10 to sell, so the '
          'company could realise {$95} on it. That figure is the ceiling: market '
          'may not be set above it, because the company cannot get more than that.',
          'A normal profit on a $105 sale is 10%, which is $10.50. The floor is '
          'therefore $95 less $10.50, which is {$84.50}. Market may not be set '
          'below that, because carrying the item lower would hand next year an '
          'abnormally large {profit} on a sale that was always going to be made.',
          'Replacement cost is $90, and $90 lies between the floor and the '
          'ceiling. It is therefore not adjusted, and designated market value is '
          '{$90}.',
          'The final comparison is then made against cost. Cost is $100 and market '
          'is $90, so item A is carried at the lower of them, which is $90.'],
         {'$95': ('$105 selling price less $10 to sell.', ''),
          '$84.50': ('$95 ceiling less $10.50 normal profit.', ''),
          'profit': ('The floor exists to stop that.', ''),
          '$90': ('Between the bounds, so unchanged.',
                  'Students stop at replacement cost without testing the bounds, '
                  'which is right about half the time and wrong the other half.')},
         ['$105', '$100', 'loss']),
        ('fig', 'ranked', 'Item A: the three figures, and the middle one wins',
         [('Ceiling — net realisable value', 95, '$95.00', FIFO),
          ('Replacement cost', 90, '$90.00', LIFO),
          ('Floor — ceiling less normal profit', 84.5, '$84.50', RUST)],
         'Designated market value is the middle figure: $90. It is then compared '
         'with cost of $100, and the lower of the two is what the item is carried '
         'at.'),

        ('part', 'Part 3 · Four items, four outcomes',
         'the rule applied'),

        ('task', 'Exercise 5C',
         'Apply the rule to all four items and say which one is unaffected.',
         'Complete the table. Compute the ceiling and floor first, then the '
         'market, then the carrying amount.',
         ['Exercise 5B'],
         ['Each item costs $100, so the last column tells you immediately which '
          'ones were written down.',
          'Item B’s replacement cost falls below the floor. Item C’s '
          'rises above the ceiling. Those two are the point of the exercise.',
          'Item D needs no write-down at all, and you should be able to say why '
          'before you compute it.']),
        ('table', _MKTH, _mkt(blank=True), LIFO, _MKTW),
        ('answers', 16),
        ('fig', 'matrix', 'Why each of the four behaves differently',
         ['A · replacement between the bounds',
          'B · replacement below the floor',
          'C · replacement above the ceiling',
          'D · replacement above cost'],
         ['Market is', 'Carried at'],
         [['Replacement cost, $90', '$90 — written down'],
          ['The floor, $84.50', '$84.50 — written down to the floor'],
          ['The ceiling, $92', '$92 — written down to the ceiling'],
          ['Replacement cost, $110', '$100 — cost is lower, so no change']],
         'Item D is the control: market exceeds cost, so the rule does nothing. '
         'Inventory is never written up.'),

        ('part', 'Part 4 · Recording it',
         'the entry, and where the loss goes'),

        ('task', 'Exercise 5D',
         'Record the write-down and say where the loss is reported.',
         'Complete the journal entry, assuming 1,000 units of item B.',
         ['Exercise 5C'],
         ['Item B is written down from $100 to $84.50, so the loss per unit is '
          '$15.50.',
          'With 1,000 units the total is $15,500.',
          'Two accounts move and one of them reduces the asset.']),
        ('journal', [
            ('J1', ('1,000 units of item B written down from cost of $100 to a '
                    'market value of $84.50.',
                    'The loss is recognised now, although nothing has been sold.'),
             [('Cost of Goods Sold', 0, '', ''),
              ('Inventory', 1, '', '')]),
        ]),
        ('fill', 'R2',
         ['The loss may be presented in one of two places and the choice is a '
          'presentation decision rather than a measurement one. Where write-downs '
          'are a normal part of trading they are absorbed within cost of goods '
          '{sold}, which is what the entry above does.',
          'Where a write-down is unusually large, presenting it separately on the '
          'face of the income statement tells a reader more, because burying an '
          'exceptional amount inside a routine line {obscures} the margin on '
          'ordinary trading.',
          'Either way the amount reaches this year’s profit. The timing is '
          'not optional: the loss belongs to the year in which the value {fell}, '
          'not to the year in which the goods are eventually sold.'],
         {'sold': ('Absorbed in the routine line when routine.', ''),
          'obscures': ('A large write-down inside cost of sales hides the trading '
                       'margin.', ''),
          'fell': ('The year the value fell, not the year of sale.',
                   'Students defer the loss until the goods are sold, which is the '
                   'whole thing the rule prevents.')},
         ['inventory', 'improves', 'rose']),
        ('fig', 'bridge',
         'Item B at cost, 1,000 units', 100_000,
         [('Written down to the floor of $84.50', -15_500)],
         'Item B at designated market value', 84_500),

        ('task', 'Exercise 5E',
         'Say what happens if the value recovers, and how the rule may be '
         'applied.',
         'Sort each statement into the column that says whether it is true under '
         'US GAAP.',
         ['Exercise 5D'],
         ['Recovery is where US GAAP and IFRS part company, and Volume 12 covers '
          'the difference.',
          'The rule may be applied item by item, to groups, or to inventory as a '
          'whole, and the three give different answers.',
          'Applying it item by item always gives the largest write-down. Think '
          'about why before you sort.']),
        ('sortgrid',
         ['Statement, under US GAAP', 'TRUE', 'FALSE'],
         ['A write-down is reversed if the market value later recovers',
          'The rule may be applied to each item individually',
          'The rule may be applied to the total of a group of similar items',
          'Applying the rule item by item produces the largest write-down',
          'Inventory may be written up above cost once it has been written down',
          'The written-down amount becomes the new cost for future comparisons'],
         ['FALSE', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE'],
         'Item by item gives the largest write-down because gains on some items '
         'cannot offset losses on others. The reversal question is the one that '
         'differs under IFRS.'),
        ('fig', 'buckets', 'Three ways to apply the same rule',
         [('ITEM BY ITEM', RUST,
           ['Each item tested alone', 'No offsetting at all',
            'The largest write-down', 'The most common requirement', '']),
          ('BY GROUP', WA,
           ['Similar items pooled', 'Gains offset losses within a group',
            'A smaller write-down', '', '']),
          ('TOTAL INVENTORY', FIFO,
           ['One comparison for everything', 'Maximum offsetting',
            'The smallest write-down', 'Rarely permitted', ''])],
         'The method chosen must be applied consistently, because switching '
         'between them would let a company choose its own write-down each year.'),

        ('watch', 'Three figures, and you want the middle one. Compute the ceiling '
                  'and the floor before you look at replacement cost, and the '
                  'arithmetic stops being confusing.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under the lower of cost or market rule, the ceiling is:',
         ['Replacement cost',
          'Net realisable value, being selling price less costs to complete and '
          'sell',
          'Net realisable value less a normal profit margin',
          'The original cost of the item'],
         1, 'Level A',
         'The ceiling is what the company could actually realise. (C) is the '
         'floor, (A) is the starting point that the bounds are applied to, and (D) '
         'is the figure market is ultimately compared against.'),

        ('mcq', 'An item costs $100. Replacement cost is $80, net realisable value '
                'is $95 and a normal profit margin is $10.50. The item should be '
                'carried at:',
         ['$80', '$84.50', '$95', '$100'],
         1, 'Level C',
         'The floor is $95 − $10.50 = $84.50, and replacement cost of $80 '
         'falls below it, so market is the floor. Market of $84.50 is lower than '
         'cost, so that is the carrying amount. (A) is the trap: replacement cost '
         'is the starting point, not the answer.'),

        ('mcq', 'An item costs $100, replacement cost is $110, net realisable value '
                'is $120 and the floor is $106.50. The item should be carried at:',
         ['$100', '$106.50', '$110', '$120'],
         0, 'Level B',
         'Market is $110, which lies between the bounds — but market exceeds '
         'cost, so the rule does nothing and the item stays at $100. Inventory is '
         'never written up, which is what the word lower in the rule’s name '
         'guarantees.'),

        ('mcq', 'The purpose of the floor in the lower of cost or market rule is '
                'to:',
         ['Prevent inventory being carried above its selling price',
          'Prevent a write-down so large that a normal profit is reported when the '
          'item is eventually sold',
          'Ensure inventory is never written below replacement cost',
          'Allow write-downs to be reversed in a later period'],
         1, 'Level C',
         'The floor stops the loss being overstated this year and the profit '
         'overstated next year. (A) describes the ceiling. (C) reverses the '
         'floor’s effect — it is a lower bound on market, and market can '
         'certainly be below replacement cost.'),

        ('mcq', 'The lower of cost or market rule applies to inventory measured '
                'using:',
         ['FIFO or weighted average',
          'LIFO or the retail inventory method',
          'Specific identification only',
          'Any method'],
         1, 'Level A',
         'LIFO and the retail method use the market version; everything else uses '
         'the lower of cost and net realisable value in Handout 6. This split is '
         'examined directly and is pure recall.'),

        ('mcq', 'Applying the lower of cost or market rule item by item rather than '
                'to groups of similar items will generally produce:',
         ['A smaller write-down, because gains offset losses',
          'A larger write-down, because gains on some items cannot offset losses '
          'on others',
          'The same write-down either way',
          'No write-down at all'],
         1, 'Level C',
         'Offsetting is what shrinks a write-down, and applying the rule item by '
         'item removes it entirely. The method must then be applied consistently, '
         'or a company could choose its own result each year.'),

        ('mcq', 'Under US GAAP, if the market value of previously written-down '
                'inventory recovers before it is sold, the company should:',
         ['Reverse the write-down up to the original cost',
          'Reverse the write-down in full, including any excess over cost',
          'Make no entry; the written-down amount is the new cost',
          'Disclose the recovery and reverse it when the goods are sold'],
         2, 'Level B',
         'The reduced amount becomes the new cost basis and recoveries are not '
         'reversed. (A) is the IFRS treatment, which is why this question so often '
         'appears in a GAAP-versus-IFRS context — Volume 12 covers it.'),

        ('tip', 'Write the three figures in a column — ceiling, replacement, '
                'floor — and circle the middle one. Then compare it with '
                'cost. Doing it in that order makes every one of these questions '
                'mechanical.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5C · the completed table'),
        ('table', _MKTH, _mkt(), LIFO, _MKTW),
        ('bullets', [
            'Item A: replacement cost lies between the bounds, so market is $90 '
            'and the item is written down from $100.',
            'Item B: replacement cost of $80 is below the floor, so market is the '
            'floor of $84.50.',
            'Item C: replacement cost of $98 is above the ceiling, so market is '
            'the ceiling of $92.',
            'Item D: market of $110 exceeds cost, so the item stays at $100. The '
            'rule never writes inventory up.',
        ]),
    ],
)
