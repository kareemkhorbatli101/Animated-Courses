# -*- coding: utf-8 -*-
"""Volume 2, Handout 4 — Matching: Revenue and the Costs That Earned It.

Covers A.2(z): the matching principle with respect to revenues and expenses,
applied to a specific situation.
"""
from fadata import N, M, Y, PY
from data import money, num

GOODS, SERV, TIME, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

# The cost side of the Meridian contract, carried alongside the revenue side.
COST_GOODS = 226_800            # cost of the controllers shipped
COST_INSTALL = 54_000           # installation labour and travel
COST_SUPPORT = 48_000           # expected cost of 24 months of support
COMMISSION = 27_000             # sales commission, an incremental cost of obtaining

_MH = ['Promise', 'Revenue in %s' % Y, 'Cost charged in %s' % Y, 'Margin']
_MW = [32, 23, 23, 22]


def _match(blank=False):
    def c(v):
        return '' if blank else v
    sup_cost = COST_SUPPORT * M.months_elapsed / M.support_months
    rows = [
        ('Flow controllers', M.alloc_goods, COST_GOODS),
        ('Installation', M.alloc_install, COST_INSTALL),
        ('Technical support, 2 of 24 months', M.support_earned, sup_cost),
    ]
    out = []
    for name, rev, cost in rows:
        out.append([name, money(rev), c(money(cost)), c(money(rev - cost))])
    tr = sum(r for _n, r, _c in rows)
    tc = sum(c_ for _n, _r, c_ in rows)
    out.append(['Total', money(tr), c(money(tc)), c(money(tr - tc))])
    return out


HANDOUT = dict(
    n=4,
    title='Matching: Revenue and the Costs That Earned It',
    subtitle='Revenue decides the year. The costs that produced it follow it there, '
             'and the ones that did not produce it do not.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 at the end, where the costs of '
                 'the Meridian contract are placed in the years they belong to.',
        collocations=['match an expense against revenue',
                      'capitalise a cost and release it',
                      'expense a cost as incurred',
                      'an incremental cost of obtaining a contract',
                      'charge a cost to the period',
                      'carry a cost forward'],
        pairs=['product cost / period cost',
               'incremental cost / cost that would have been incurred anyway',
               'capitalise / expense', 'cause and effect / systematic allocation'],
        nots=['Matching does not mean every cost waits for revenue. Most costs of '
              'running a business are charged to the period they fall in.',
              'A cost of winning a contract is not the same as a cost of '
              'performing it, and they are not charged on the same basis.'],
    ),

    objectives=[
        'State what the matching principle requires, and what it does not.',
        'Classify a cost by the basis on which it reaches the income statement.',
        'Decide whether a cost of obtaining a contract is capitalised or expensed.',
        'Place the costs of the Meridian contract in the years they belong to.',
        'Explain why a company that recognises revenue late must also hold its '
        'costs back.',
    ],

    terms=[
        ('matching principle',
         'Charging an expense in the same period as the revenue it helped to '
         'produce.', 'مبدأ المقابلة',
         'It applies only where a cost can be tied to specific revenue. Most '
         'costs cannot be, and they are handled differently.'),
        ('product cost',
         'A cost that attaches to goods and waits in inventory until they are '
         'sold.', 'تكلفة المنتج',
         'The cleanest case of matching: the cost sits on the balance sheet until '
         'the revenue arrives.'),
        ('period cost',
         'A cost charged to the period in which it is incurred.',
         'تكلفة الفترة',
         'Rent, salaries, most administration. There is no revenue to tie them '
         'to, so they are charged as they fall.'),
        ('systematic allocation',
         'Spreading a cost over the periods expected to benefit from it, where no '
         'direct link to revenue exists.', 'التوزيع المنتظم',
         'Depreciation is the standing example. There is no single sale to match '
         'it against.'),
        ('incremental cost of obtaining a contract',
         'A cost that would not have been incurred if the contract had not been '
         'won.', 'التكلفة الإضافية للحصول على العقد',
         'A sales commission is the standard example. It is capitalised if '
         'recovery is expected.'),
        ('capitalise',
         'To record a cost as an asset rather than charging it immediately.',
         'الرسملة',
         'The cost is then released to the income statement over the period it '
         'benefits.'),
    ],

    blocks=[
        ('scene', 'The other half of the Meridian contract', [
            'Handout 3 settled the revenue. Of the %s transaction price, %s belongs '
            'to %s and %s is a contract liability carried forward.'
            % (money(M.price), money(M.recognised), Y,
               money(M.contract_liability)),
            'Costs were incurred too. The controllers cost %s to buy, the '
            'installation cost %s in labour and travel, and the twenty-four months '
            'of support are expected to cost %s in total. A commission of %s was '
            'paid to the salesperson who won the contract.'
            % (money(COST_GOODS), money(COST_INSTALL), money(COST_SUPPORT),
               money(COMMISSION)),
            'If all of those costs were charged in %s while most of the support '
            'revenue waited for the following years, the contract would look far '
            'worse this year and far better later than it really is. This handout '
            'is about not letting that happen.' % Y,
        ]),
        ('fig', 'scale',
         'THE REVENUE SIDE — HANDOUT 3',
         ['Controllers %s' % money(M.alloc_goods),
          'Installation %s' % money(M.alloc_install),
          'Support, 2 of 24 months %s' % money(M.support_earned),
          'Recognised in %s: %s' % (Y, money(M.recognised))],
         'THE COST SIDE — THIS HANDOUT',
         ['Controllers %s' % money(COST_GOODS),
          'Installation %s' % money(COST_INSTALL),
          'Support, 2 of 24 months %s'
          % money(COST_SUPPORT * M.months_elapsed / M.support_months),
          'Commission %s, spread or charged?' % money(COMMISSION)]),

        ('part', 'Part 1 · What matching actually requires',
         'and the much larger class it does not cover'),

        ('task', 'Exercise 4A',
         'State what the matching principle requires and name the two other bases '
         'on which costs reach the income statement.',
         'Read and complete. Write one word in each space.',
         ['Handout 3, for the revenue side of the contract.'],
         ['Three bases are described, one per paragraph. The blank names the basis '
          'or its consequence.',
          'Blank 2 is the relationship that has to exist before matching can be '
          'applied at all.',
          'The last blank is the basis depreciation uses, where no single sale can '
          'be pointed at.']),
        ('fill', 'R2',
         ['The matching principle says that a cost incurred to produce revenue is '
          'charged in the same period as that {revenue}. The cost of the '
          'controllers waits in inventory until they are delivered, and then both '
          'sides of the transaction appear in the same year.',
          'Matching applies only where a direct {cause} and effect relationship '
          'can be identified between the cost and particular revenue. That is a '
          'much narrower class of cost than students assume.',
          'Most costs of running a company cannot be tied to any particular sale. '
          'The rent of the warehouse, the salary of the controller, the cost of '
          'the accounting system: these are {period} costs, charged to the period '
          'in which they are incurred and matched against nothing.',
          'A third group sits between the two. A cost that benefits several '
          'periods, with no single sale to point at, is spread across them by '
          '{systematic} allocation. Depreciation is the standing example.'],
         {'revenue': ('Same period as the revenue it produced.', ''),
          'cause': ('Cause and effect, identified — not assumed.', ''),
          'period': ('Charged as they fall, matched against nothing.',
                     'Students try to match every cost against revenue. Most costs '
                     'cannot be matched and are not meant to be.'),
          'systematic': ('Spread over the periods that benefit.', '')},
         ['product', 'guess', 'immediate']),
        ('fig', 'buckets', 'Three routes to the income statement',
         [('MATCHED', GOODS,
           ['Cost of goods sold', 'Installation labour',
            'Waits for its revenue', 'Cause and effect identified', '']),
          ('CHARGED AS INCURRED', RUST,
           ['Warehouse rent', 'Administrative salaries',
            'Advertising', 'No sale to point at', '']),
          ('SPREAD SYSTEMATICALLY', TIME,
           ['Depreciation', 'Amortisation of intangibles',
            'Benefits several periods', 'No single sale to match', ''])],
         'Only the first column is matching. The other two are much larger, and '
         'the exam tests whether you know that.'),

        ('task', 'Exercise 4B',
         'Classify costs by the basis on which they reach the income statement.',
         'Sort each cost into its column.',
         ['Exercise 4A'],
         ['Ask whether you can point at the specific revenue this cost helped to '
          'produce. If you cannot, it is not matched.',
          'Two of these benefit several periods with no single sale attached.',
          'The commission is deliberately left out of this exercise. Part 2 deals '
          'with it.']),
        ('sortgrid',
         ['The cost', 'MATCHED TO REVENUE', 'CHARGED AS INCURRED',
          'SPREAD SYSTEMATICALLY'],
         ['The %s cost of the controllers shipped' % money(COST_GOODS),
          'Rent of the warehouse for the year',
          'Depreciation of the delivery vans',
          'Installation labour and travel of %s' % money(COST_INSTALL),
          'The financial controller’s salary',
          'Amortisation of purchased software'],
         ['MATCHED TO REVENUE', 'CHARGED AS INCURRED', 'SPREAD SYSTEMATICALLY',
          'MATCHED TO REVENUE', 'CHARGED AS INCURRED', 'SPREAD SYSTEMATICALLY'],
         'Only two of these six are matched. That proportion is closer to the truth '
         'than most students expect.'),
        ('fig', 'fork', 'One question, asked before any cost is charged',
         [('Can you point at the specific revenue this cost helped to produce?',
           'YES → MATCH it: hold the cost until that revenue arrives', GOODS),
          ('No, but it benefits several future periods?',
           'YES → SPREAD it systematically across them', TIME),
          ('Neither?', 'CHARGE it to the period it was incurred in', RUST)]),

        ('part', 'Part 2 · The cost of winning the contract',
         'commissions, and what happens to them'),

        ('prose', 'A sales commission is not a cost of performing a contract. It '
                  'is a cost of obtaining one, and the two are treated '
                  'differently. The question is whether the company would have '
                  'incurred the cost if it had not won the work.', 'R2'),
        ('prose', 'Where the cost is incremental in that sense, and the company '
                  'expects to recover it, it is capitalised as an asset and '
                  'released to the income statement over the period the contract '
                  'benefits. Where it would have been incurred regardless — a '
                  'bid team’s salaries, say — it is charged as incurred.',
                  'R2'),

        ('task', 'Exercise 4C',
         'Decide whether a cost of obtaining a contract is capitalised or '
         'expensed.',
         'Match each cost to its treatment.',
         ['Exercise 4B, and the two paragraphs above.'],
         ['Ask the counterfactual: would this cost have been incurred if the '
          'contract had been lost?',
          'One of these is incremental but still charged immediately, because of '
          'the length of the contract.',
          'The last one is a cost of performing, not of obtaining. It belongs in '
          'Part 1’s framework, not this one.']),
        ('match',
         ['A %s commission payable only on winning the contract' % money(COMMISSION),
          'Salaries of the bid team, payable whether or not the bid succeeds',
          'A small commission on a contract lasting eight months',
          'Legal fees payable only if the contract is signed',
          'Installation labour incurred performing the contract'],
         ['Capitalised — incremental and expected to be recovered',
          'Expensed as incurred — not incremental to winning',
          'Expensed as incurred — the practical expedient for short contracts',
          'Capitalised — incremental and conditional on the contract',
          'Matched to revenue — a cost of performing, not of obtaining'],
         ['A', 'B', 'C', 'D', 'E'],
         'The counterfactual test does most of the work: would this cost have been '
         'incurred if the contract had been lost?'),
        ('fig', 'matrix', 'Obtaining or performing, and what follows',
         ['Commission on winning', 'Bid team salaries',
          'Installation labour', 'Cost of the controllers'],
         ['Obtaining or performing?', 'Treatment'],
         [['Obtaining, and incremental', 'Capitalise, release over the contract'],
          ['Obtaining, not incremental', 'Expense as incurred'],
          ['Performing', 'Match to the installation revenue'],
          ['Performing', 'Match to the controller revenue']],
         'Two questions in order: obtaining or performing, and then, if obtaining, '
         'incremental or not.'),

        ('part', 'Part 3 · Putting the contract together',
         'revenue and cost in the same years'),

        ('task', 'Exercise 4D',
         'Charge the costs of the Meridian contract to the years they belong to.',
         'Complete the table. Each cost follows its own revenue.',
         ['Exercises 4A to 4C', 'Handout 3, for the revenue side.'],
         ['The first two rows are straightforward: both revenue and cost fall '
          'wholly in %s.' % Y,
          'The support row uses the same fraction on both sides. Two of '
          'twenty-four months.',
          'Compute the margin column last, and check that it is positive on every '
          'row.']),
        ('table', _MH, _match(blank=True), SERV, _MW),
        ('answers', 8),
        ('fig', 'ranked', 'Revenue and cost, placed in the same year',
         [('Controller revenue', M.alloc_goods, money(M.alloc_goods), SERV),
          ('Controller cost', COST_GOODS, money(-COST_GOODS), RUST),
          ('Installation revenue', M.alloc_install, money(M.alloc_install), SERV),
          ('Installation cost', COST_INSTALL, money(-COST_INSTALL), RUST),
          ('Support revenue, 2 months', M.support_earned,
           money(M.support_earned), SERV),
          ('Support cost, 2 months',
           COST_SUPPORT * M.months_elapsed / M.support_months,
           money(-COST_SUPPORT * M.months_elapsed / M.support_months), RUST)],
         'Each teal bar has its rust partner in the same year. That pairing is the '
         'whole of the matching principle.'),

        ('task', 'Exercise 4E',
         'Explain why holding revenue back forces the related costs back with it.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 4D'],
         ['Blank 1 is what the first year would show if the costs were charged but '
          'the revenue were deferred.',
          'Blank 3 is the balance sheet line the deferred support costs sit in '
          'until they are released.',
          'The last blank is what the two sides moving together protects.']),
        ('fill', 'R3',
         ['Suppose Northwind charged the whole %s expected cost of support in %s '
          'while recognising only %s of support revenue. The contract would show a '
          '{loss} in its first year and an unnaturally high margin in the two years '
          'that follow, although nothing about the economics had changed.'
          % (money(COST_SUPPORT), Y, money(M.support_earned)),
          'The costs are therefore held back with the revenue. Only %s of support '
          'cost is charged in %s, matching the %s of support revenue, and the '
          'remainder is {carried} forward.'
          % (money(COST_SUPPORT * M.months_elapsed / M.support_months), Y,
             money(M.support_earned)),
          'Where a cost of fulfilling a contract is deferred in this way it sits on '
          'the balance sheet as an {asset}, released to the income statement as the '
          'related revenue is recognised — the mirror image of the contract '
          'liability carried on the revenue side.',
          'What the two sides moving together protects is the {margin}. A reader '
          'comparing %s with the following year sees the same percentage on this '
          'contract in both, which is the truth about it.' % Y],
         {'loss': ('Costs in, revenue deferred: the first year looks wrong.', ''),
          'carried': ('Held back with the revenue it will earn.', ''),
          'asset': ('A fulfilment cost asset, the mirror of the contract '
                    'liability.', ''),
          'margin': ('The same percentage in every year of the contract.',
                     'Students defer the revenue and charge the costs at once, '
                     'which makes a profitable contract look like a loss-maker in '
                     'year one.')},
         [money(M.price), 'expense', 'revenue']),
        ('fig', 'timeline', 'The contract margin, held steady across three years',
         [('%s' % Y, 'revenue %s, cost %s'
           % (money(M.recognised),
              money(COST_GOODS + COST_INSTALL
                    + COST_SUPPORT * M.months_elapsed / M.support_months)), SERV),
          ('The following year', 'support revenue and support cost, 12 months each',
           TIME),
          ('The year after', 'support revenue and support cost, 10 months each',
           TIME)],
         'Both sides move together. A reader sees the same margin on this contract '
         'in every year of it.'),

        ('watch', 'A contract liability holds revenue that has been paid for and '
                  'not yet earned. A fulfilment cost asset holds cost that has been '
                  'incurred and not yet charged. They are mirror images, and a '
                  'question that gives you one is usually testing whether you '
                  'remember the other.'),

        ('part', 'Part 4 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The matching principle requires that:',
         ['Every cost incurred in a period be charged in that period',
          'A cost be charged in the same period as the revenue it helped to '
          'produce, where a cause and effect relationship can be identified',
          'Revenue be recognised only when the related cash is received',
          'All costs be spread evenly over the periods they benefit'],
         1, 'Level A',
         'Matching applies where cause and effect can be identified, which is a '
         'narrower class than students assume. (A) describes period costs, which '
         'are a separate basis. (C) is cash accounting. (D) describes systematic '
         'allocation, which is the third basis.'),

        ('mcq', 'Which of the following is a period cost?',
         ['The cost of inventory sold during the year',
          'Installation labour on a customer contract',
          'The salary of the financial controller',
          'The purchase cost of goods still in the warehouse'],
         2, 'Level A',
         'No particular revenue can be pointed at, so it is charged as incurred. '
         '(A) and (B) are matched to specific revenue. (D) is a product cost still '
         'sitting in inventory, waiting for its revenue.'),

        ('mcq', 'An entity pays a $27,000 commission that was payable only because '
                'a three-year contract was won, and expects to recover it. The '
                'commission should be:',
         ['Expensed immediately, because it relates to a past event',
          'Capitalised and released to the income statement over the contract',
          'Deducted from revenue when the contract revenue is recognised',
          'Capitalised and never released'],
         1, 'Level B',
         'It is an incremental cost of obtaining a contract and recovery is '
         'expected, so it is capitalised and amortised over the period it benefits. '
         '(A) ignores the rule. (C) would understate both revenue and expense. (D) '
         'would leave a permanent asset for a cost that is being consumed.'),

        ('mcq', 'A bid team is paid salaries of $80,000 whether or not the bid '
                'succeeds. The bid succeeds. The $80,000 should be:',
         ['Capitalised as a cost of obtaining the contract',
          'Expensed as incurred, because it is not incremental to winning the '
          'contract',
          'Matched against the contract revenue over its life',
          'Added to the cost of the goods delivered'],
         1, 'Level C',
         'The counterfactual test fails: the cost would have been incurred anyway. '
         '(A) is the trap, because the contract was in fact won — but the test '
         'is whether the cost depended on winning, not whether winning happened.'),

        ('mcq', 'An entity defers revenue on a service contract but charges all the '
                'expected costs of the service immediately. The effect is:',
         ['A loss in the first year and overstated margins later',
          'A profit in the first year and understated margins later',
          'No effect on reported margins in any year',
          'Higher total profit over the life of the contract'],
         0, 'Level C',
         'Costs in and revenue deferred produces a first-year loss and inflated '
         'margins afterwards, although the economics never changed. (D) is the '
         'reassuring wrong answer: total profit over the life is identical; only '
         'its distribution between years is distorted.'),

        ('mcq', 'A cost of fulfilling a contract has been incurred but relates to '
                'revenue that will be recognised in later periods. It is reported '
                'as:',
         ['An expense of the current period',
          'An asset, released as the related revenue is recognised',
          'A contract liability',
          'A reduction of the contract’s transaction price'],
         1, 'Level B',
         'It is held as an asset and released alongside the revenue. (C) reverses '
         'the direction: a contract liability holds revenue, not cost. (D) would '
         'reduce the top line for something that is not a price concession at all.'),

        ('mcq', 'Depreciation of delivery vans is charged on the basis of:',
         ['Matching, against the specific sales each delivery produced',
          'Systematic allocation over the periods expected to benefit',
          'The period in which the vans were purchased',
          'The period in which the vans are eventually sold'],
         1, 'Level B',
         'No single sale can be pointed at, so the cost is spread over the periods '
         'that benefit. (A) would require a cause and effect link that does not '
         'exist at the level of individual deliveries. (C) is cash accounting and '
         '(D) defers the whole cost to a single later year.'),

        ('tip', 'When a question defers revenue, immediately ask what happened to '
                'the related costs. The examiner is usually testing the pair, and '
                'the wrong answers are built from treating one side correctly and '
                'the other side as though nothing had changed.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4D · the completed table'),
        ('table', _MH, _match(), SERV, _MW),
        ('bullets', [
            'Each promise carries its own cost into the same year as its revenue.',
            'The support contract charges 2 of 24 months of cost against 2 of 24 '
            'months of revenue.',
            'The %s commission is an incremental cost of obtaining the contract: '
            'capitalised, and released across the contract rather than charged in '
            '%s.' % (money(COMMISSION), Y),
            'Over the whole contract, total revenue of %s meets total cost of %s. '
            'Matching changes which year each lands in, never the total.'
            % (money(M.price),
               money(COST_GOODS + COST_INSTALL + COST_SUPPORT + COMMISSION)),
        ]),
    ],
)
