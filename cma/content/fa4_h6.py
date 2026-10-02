# -*- coding: utf-8 -*-
"""Volume 4, Handout 6 — Lower of Cost and Net Realisable Value: Everything Else.

Covers the second half of A.2(e): the lower of cost and net realisable value
rule, which applies to inventory measured under FIFO, weighted average or
specific identification.
"""
from fadata import N, I, L, Y, PY
from data import money, num

FIFO, LIFO, WA, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_NRVH = ['Item', 'Cost', 'Selling price', 'Cost to sell',
         'Net realisable value', 'Carry at']
_NRVW = [22, 13, 17, 16, 19, 13]


def _nrv(blank=False):
    def c(v):
        return '' if blank else v
    out = []
    for i in range(len(L.items)):
        r = L.row(i)
        out.append([r['name'], '$%d' % r['cost'], '$%d' % r['price'],
                    '$%d' % r['sell'], c('$%g' % r['ceiling']),
                    c('$%g' % r['lcnrv'])])
    return out


_CMPH = ['Item', 'Under LIFO or retail — LCM', 'Under FIFO or average '
         '— LCNRV', 'Do they agree?']
_CMPW = [22, 28, 28, 22]


def _cmp(blank=False):
    def c(v):
        return '' if blank else v
    out = []
    for i in range(len(L.items)):
        r = L.row(i)
        same = 'Yes' if abs(r['lcm'] - r['lcnrv']) < 0.005 else 'No'
        out.append([r['name'], c('$%g' % r['lcm']), c('$%g' % r['lcnrv']),
                    c(same)])
    return out


HANDOUT = dict(
    n=6,
    title='Lower of Cost and Net Realisable Value: Everything Else',
    subtitle='The same principle with the arithmetic taken out of it. One '
             'comparison instead of three, and most inventory in the world uses '
             'this version.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the comparison of the two '
                 'rules, which is how the exam frames the topic.',
        collocations=['measure at the lower of cost and net realisable value',
                      'estimate the costs of completion',
                      'deduct the costs necessary to make the sale',
                      'assess at each reporting date',
                      'group items for the comparison',
                      'record the write-down in cost of goods sold'],
        pairs=['net realisable value / market',
               'costs to complete / costs to sell',
               'LCM / LCNRV', 'US GAAP / IFRS'],
        nots=['Net realisable value is not selling price. The costs of completing '
              'and selling the goods come out of it first.',
              'This rule has no ceiling and no floor. Those exist only in the '
              'version in Handout 5.'],
    ),

    objectives=[
        'State which inventory uses this rule rather than the one in Handout 5.',
        'Compute net realisable value from a selling price and the costs of '
        'selling.',
        'Apply the rule to four items and compare the answers with Handout 5.',
        'Say why the simpler rule gives a different answer for some items and the '
        'same answer for others.',
        'State the treatment of a later recovery under US GAAP and under IFRS.',
    ],

    terms=[
        ('costs to sell',
         'The costs directly necessary to make the sale: commission, packing, '
         'delivery.', 'تكاليف البيع',
         'Only the costs that would not be incurred if the sale were not made. '
         'General overhead is not deducted.'),
        ('obsolescence',
         'Loss of value because an item is out of date rather than damaged.',
         'التقادم',
         'The commonest trigger for a write-down in a technology or fashion '
         'business, and the hardest to spot from outside.'),
    ],

    blocks=[
        ('scene', 'The same four items, the simpler rule', [
            'Handout 5 applied the lower of cost or market rule to four items, '
            'and reached three write-downs through a ceiling, a floor and a '
            'middle figure.',
            'This handout applies the other version of the rule to the same four '
            'items. It is simpler by a long way: one comparison instead of three, '
            'and no bounds at all.',
            'It is also the version that applies to most of the inventory in the '
            'world, because it covers everything measured under FIFO, weighted '
            'average or specific identification — which is to say, every '
            'company that does not use LIFO.',
            'Two of the four items come out at a different figure under this rule. '
            'Finding out which two, and why, is the work of this handout.',
        ]),
        ('fig', 'matrix', 'Two rules, and which inventory each one governs',
         ['Lower of cost or market', 'Lower of cost and net realisable value'],
         ['Applies to', 'What you compare cost with'],
         [['Inventory measured under LIFO or the retail method',
           'Replacement cost, bounded by a ceiling and a floor'],
          ['Inventory measured under FIFO, weighted average or specific '
           'identification',
           'Net realisable value, on its own']],
         'The second row covers most inventory. The first exists because LIFO '
         'exists, and it is examined for exactly that reason.'),

        ('part', 'Part 1 · One comparison',
         'what net realisable value is'),

        ('task', 'Exercise 6A',
         'State what net realisable value is and what is deducted in computing it.',
         'Read and complete. Write one word in each space.',
         ['Handout 5, for the ceiling, which is the same figure.'],
         ['Blank 1 is the starting point, and it is an estimate rather than a '
          'quoted figure.',
          'Two kinds of cost are deducted. One applies to unfinished goods and one '
          'to all goods.',
          'The last blank is what this rule does not have, and Handout 5 did.']),
        ('fill', 'R2',
         ['Net realisable value starts from the estimated {selling} price in the '
          'ordinary course of business. Not a distress price, and not a price in a '
          'market the company does not actually sell in.',
          'Two kinds of cost are then deducted. The costs of {completion}, where '
          'the goods are unfinished and work remains to be done on them, and the '
          'costs necessary to make the sale — commission, packing, delivery.',
          'Only costs that would be avoided if the sale were not made are '
          'deducted. General administrative {overhead} is not, because the company '
          'would incur it whether or not this particular item sold.',
          'The resulting figure is then compared with cost, and the lower of the '
          'two is the carrying amount. There is no ceiling and no {floor}: the '
          'bounds that complicated Handout 5 have no part in this version at all.'],
         {'selling': ('An estimate, in the ordinary course of business.', ''),
          'completion': ('Relevant to work in process; nil for finished goods.',
                         ''),
          'overhead': ('Only avoidable costs come out.',
                       'Students deduct a share of general overhead, which '
                       'understates net realisable value and produces a '
                       'write-down that is not justified.'),
          'floor': ('No bounds in this version.', '')},
         ['replacement', 'storage', 'ceiling']),
        ('fig', 'bridge',
         'Estimated selling price, item A', 105,
         [('Less the costs necessary to make the sale', -10)],
         'Net realisable value', 95),

        ('part', 'Part 2 · The same four items',
         'under the simpler rule'),

        ('prose', 'The deduction has a name worth using, because the exam uses '
                  'it. The amounts taken off the selling price are the costs to '
                  'sell, and the test for one is whether the company would avoid '
                  'it by not making the sale.', 'R2'),

        ('task', 'Exercise 6B',
         'Apply the rule to all four items.',
         'Complete the last two columns. One subtraction, then one comparison.',
         ['Exercise 6A'],
         ['Net realisable value is the selling price less the cost to sell. There '
          'are no other adjustments.',
          'Then carry each item at the lower of cost and that figure.',
          'Every item costs $100, so the last column tells you at a glance which '
          'ones were written down.']),
        ('table', _NRVH, _nrv(blank=True), FIFO, _NRVW),
        ('answers', 8),
        ('fig', 'ranked', 'Net realisable value against a cost of $100',
         [(L.row(0)['name'], L.row(0)['ceiling'],
           '$%g' % L.row(0)['ceiling'], RUST),
          (L.row(1)['name'], L.row(1)['ceiling'],
           '$%g' % L.row(1)['ceiling'], RUST),
          (L.row(2)['name'], L.row(2)['ceiling'],
           '$%g' % L.row(2)['ceiling'], RUST),
          (L.row(3)['name'], L.row(3)['ceiling'],
           '$%g' % L.row(3)['ceiling'], FIFO)],
         'Only the fourth item has a net realisable value above its $100 cost, so '
         'only that one escapes a write-down.'),

        ('part', 'Part 3 · Where the two rules part company',
         'and where they agree'),

        ('prose', 'Setting the two sets of answers side by side shows something '
                  'worth noticing. The rules agree on some items and differ on '
                  'others, and the pattern is not random.', 'R2'),
        ('prose', 'They agree whenever replacement cost happens to lie outside the '
                  'ceiling, because in that case the market figure is driven to '
                  'the ceiling, and the ceiling is net realisable value. They '
                  'differ whenever replacement cost lies inside the bounds, '
                  'because then the older rule uses a figure the newer one never '
                  'looks at.', 'R2'),

        ('task', 'Exercise 6C',
         'Compare the two sets of answers and say where they agree.',
         'Complete the table. The first two columns come from Handouts 5 and 6.',
         ['Exercise 6B, and Handout 5 Exercise 5C.'],
         ['Copy your two sets of answers in before you look for the pattern.',
          'Two items agree and two do not.',
          'Look at where replacement cost sat relative to the ceiling in each '
          'case. That is the whole explanation.']),
        ('table', _CMPH, _cmp(blank=True), SLATE, _CMPW),
        ('answers', 12),
        ('fill', 'R3',
         ['Items C and D give the same answer under both rules. Item C’s '
          'replacement cost was above the ceiling, so the market figure was driven '
          'down to the ceiling — and the ceiling is net realisable {value}, '
          'which is what the simpler rule uses directly.',
          'Item D needed no write-down under either rule, because its net '
          'realisable value exceeded {cost}. Where no write-down is required, the '
          'two rules cannot disagree.',
          'Items A and B differ. In both, replacement cost sat inside the bounds '
          'or below the floor, so the older rule used a figure the simpler rule '
          'never {looks} at, and the two carrying amounts diverge.',
          'The practical consequence is worth stating plainly. Two companies '
          'holding identical goods in identical condition can carry them at '
          'different amounts purely because one of them uses {LIFO}.'],
         {'value': ('The ceiling is net realisable value.', ''),
          'cost': ('No write-down means no disagreement.', ''),
          'looks': ('Replacement cost plays no part in the simpler rule.', ''),
          'LIFO': ('The cost flow assumption decides which rule applies.',
                   'Students treat the two rules as alternatives a company may '
                   'choose between. The cost flow assumption decides it.')},
         ['price', 'market', 'FIFO']),
        ('fig', 'fork', 'When do the two rules agree?',
         [('Is net realisable value above cost?',
           'YES → no write-down under either rule; they agree', FIFO),
          ('Is replacement cost above the ceiling?',
           'YES → market is driven to the ceiling, which is NRV; they agree',
           WA),
          ('Replacement cost inside the bounds, or below the floor?',
           'The two rules use different figures and the answers differ', RUST)]),

        ('part', 'Part 4 · Recovery, and the IFRS difference',
         'the one place the two frameworks separate'),

        ('task', 'Exercise 6D',
         'State the treatment of a later recovery under US GAAP and under IFRS.',
         'Match each statement to the framework it describes.',
         ['Exercise 6C'],
         ['One framework treats the written-down amount as the new cost and never '
          'looks back. The other allows a reversal.',
          'The reversal is limited, and the limit is the original cost.',
          'One of these statements is true under both frameworks.']),
        ('match',
         ['A write-down is never reversed; the reduced amount becomes the new cost',
          'A write-down is reversed if net realisable value later recovers, '
          'limited to the original cost',
          'Inventory may be carried above original cost if value rises sharply',
          'The write-down is recognised in profit or loss when it occurs',
          'The reversal is recognised as a reduction of cost of goods sold in the '
          'period of recovery'],
         ['US GAAP', 'IFRS',
          'Neither — no framework permits a write-up above cost',
          'Both — the timing of the loss is not in dispute', 'IFRS'],
         ['A', 'B', 'C', 'D', 'E'],
         'The frameworks agree on recognising the loss and disagree on reversing '
         'it. Volume 12 returns to this as one of the six named differences.'),
        ('fig', 'timeline', 'Value falls, then recovers: two different answers',
         [('Year 1 · value falls',
           'both frameworks write the inventory down', RUST),
          ('Year 2 · value recovers, goods unsold',
           'US GAAP: no entry. IFRS: reverse, capped at cost', WA),
          ('Year 3 · goods sold',
           'the two frameworks report different margins in different years', FIFO)],
         'The total profit over the three years is identical. Only its '
         'distribution between them differs — which is the same point Handout '
         '4 made about the cost flow assumptions.'),

        ('task', 'Exercise 6E',
         'Decide whether each situation requires a write-down.',
         'Sort each situation into the column it belongs in.',
         ['Exercises 6A to 6D'],
         ['Ask one question: will the company end up with less than the goods '
          'cost?',
          'Slow-moving is not the same as unsaleable. One of these items will sell '
          'eventually at full price.',
          'The last one is about a cost that has risen, which is not what the rule '
          'is about at all.']),
        ('sortgrid',
         ['Situation at the year end', 'WRITE DOWN', 'NO WRITE-DOWN'],
         ['Controllers made obsolete by a new model; they will sell at half price',
          'Goods damaged in the warehouse and saleable only as scrap',
          'Slow-moving stock that will sell at full price within eighteen months',
          'Goods whose selling price fell below cost after the year end but '
          'because of conditions existing at it',
          'Goods the company would now pay more to buy than it originally did',
          'Work in process whose costs to complete now exceed what it will fetch'],
         ['WRITE DOWN', 'WRITE DOWN', 'NO WRITE-DOWN', 'WRITE DOWN',
          'NO WRITE-DOWN', 'WRITE DOWN'],
         'Slow-moving is a cash flow problem, not a measurement one. A rise in '
         'buying prices is not a reason to write anything down — or up.'),
        ('fig', 'scale',
         'REASONS TO WRITE DOWN',
         ['Obsolescence — superseded by a new model',
          'Physical damage',
          'A fall in selling prices',
          'Costs to complete that exceed the eventual proceeds'],
         'NOT REASONS TO WRITE DOWN',
         ['Slow movement, if it will still sell at full price',
          'A rise in what the goods now cost to buy',
          'A general fall in the company’s share price',
          'Management pessimism without evidence']),

        ('watch', 'Net realisable value is an estimate of what the company will '
                  'end up with, so it is assessed at every reporting date and not '
                  'only when something has visibly gone wrong. A question that '
                  'describes obsolescence has already told you the answer.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Inventory measured under FIFO is subsequently measured at:',
         ['The lower of cost or market, using replacement cost bounded by a '
          'ceiling and a floor',
          'The lower of cost and net realisable value',
          'Replacement cost',
          'Net realisable value in all cases'],
         1, 'Level A',
         'FIFO, weighted average and specific identification use the net '
         'realisable value rule; LIFO and the retail method use the market rule. '
         '(D) is wrong because cost is carried where it is the lower of the two.'),

        ('mcq', 'An item cost $100. It can be sold for $105, and selling it will '
                'cost $10 in commission and delivery. Under the lower of cost and '
                'net realisable value, the item is carried at:',
         ['$100', '$95', '$105', '$90'],
         1, 'Level B',
         'Net realisable value is $105 − $10 = $95, which is below cost, so '
         'the item is written down to $95. (A) ignores the write-down, (C) uses '
         'selling price without deducting the costs of selling.'),

        ('mcq', 'Which of the following is deducted in arriving at net realisable '
                'value?',
         ['A share of general administrative overhead',
          'Sales commission payable on the sale',
          'The original purchase cost',
          'Interest on the funds tied up in inventory'],
         1, 'Level B',
         'Only costs necessary to make the sale are deducted. (A) and (D) would be '
         'incurred whether or not this item sold, so deducting them would create '
         'write-downs that are not justified. (C) is the figure NRV is compared '
         'against.'),

        ('mcq', 'Under US GAAP, inventory written down to net realisable value '
                'subsequently recovers in value before being sold. The company '
                'should:',
         ['Reverse the write-down, limited to the original cost',
          'Reverse the write-down in full',
          'Make no entry; the reduced amount is the new cost basis',
          'Recognise a gain in other comprehensive income'],
         2, 'Level B',
         'US GAAP prohibits reversal; the written-down amount becomes the new '
         'cost. (A) is the IFRS treatment, and the pairing of these two options is '
         'exactly how the exam tests the difference.'),

        ('mcq', 'A company holds slow-moving inventory that it expects to sell at '
                'full price within two years. At the year end it should:',
         ['Write the inventory down to a nominal amount',
          'Write it down by half as a matter of prudence',
          'Make no write-down, since net realisable value exceeds cost',
          'Reclassify the inventory as a non-current asset'],
         2, 'Level C',
         'Slow movement is a cash flow problem rather than a measurement one: if '
         'the goods will realise more than they cost, the rule does nothing. (B) '
         'is prudence used as a substitute for evidence, which the standards do '
         'not permit.'),

        ('mcq', 'For which item will the lower of cost or market rule and the lower '
                'of cost and net realisable value rule give the SAME answer?',
         ['An item whose replacement cost lies between the floor and the ceiling',
          'An item whose replacement cost is below the floor',
          'An item whose replacement cost is above the ceiling',
          'An item whose replacement cost equals its original cost'],
         2, 'Level C',
         'When replacement cost exceeds the ceiling, the market figure is driven '
         'down to the ceiling — and the ceiling is net realisable value, '
         'which is what the other rule uses directly. In (A) and (B) the older '
         'rule uses a figure the newer one never looks at.'),

        ('mcq', 'Work in process cost $80 to date, will cost a further $40 to '
                'complete, and the finished item will sell for $100 with $5 of '
                'selling costs. The inventory should be carried at:',
         ['$80', '$95', '$55', '$120'],
         2, 'Level C',
         'Net realisable value is $100 − $40 to complete − $5 to sell = '
         '$55, which is below the $80 cost, so the item is written down to $55. '
         '(B) forgets the costs to complete, which is exactly why unfinished goods '
         'are examined separately from finished ones.'),

        ('tip', 'For finished goods, net realisable value is one subtraction. For '
                'work in process it is two, and the one students forget is the '
                'cost of finishing the goods. Read the stem for the word complete '
                'before you compute.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6B · the completed table'),
        ('table', _NRVH, _nrv(), FIFO, _NRVW),
        ('h3', 'Exercise 6C · the two rules compared'),
        ('table', _CMPH, _cmp(), SLATE, _CMPW),
        ('bullets', [
            'The rules agree where no write-down is needed, and where replacement '
            'cost is above the ceiling.',
            'They differ where replacement cost lies inside the bounds or below '
            'the floor, because the simpler rule never looks at replacement cost.',
            'Which rule applies is decided by the cost flow assumption, not by '
            'the company.',
        ]),
    ],
)
