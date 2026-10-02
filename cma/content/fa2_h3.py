# -*- coding: utf-8 -*-
"""Volume 2, Handout 3 — Allocating the Price, and When to Recognise.

Covers A.2(y), steps 4 and 5 of the revenue model.
"""
from fadata import N, M, Y, PY
from data import money, num

GOODS, SERV, TIME, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_ALH = ['Performance obligation', 'Standalone price', 'Share of total',
        'Allocated amount']
_ALW = [34, 22, 22, 22]


def _alloc(blank=False):
    def c(v):
        return '' if blank else v
    rows = [('%s flow controllers' % num(M.units), M.ssp_goods, M.alloc_goods),
            ('Installation on site', M.ssp_install, M.alloc_install),
            ('24 months of technical support', M.ssp_support, M.alloc_support)]
    out = []
    for name, ssp, alloc in rows:
        out.append([name, money(ssp),
                    c('%.0f%%' % (100.0 * ssp / M.ssp_total)), c(money(alloc))])
    out.append(['Total', money(M.ssp_total), c('100%'), c(money(M.price))])
    return out


_TIMH = ['Performance obligation', 'Allocated', 'Satisfied', 'Revenue in %s' % Y]
_TIMW = [33, 20, 27, 20]


def _timing(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['%s flow controllers' % num(M.units), money(M.alloc_goods),
         c('At a point in time — delivered October'), c(money(M.alloc_goods))],
        ['Installation on site', money(M.alloc_install),
         c('At a point in time — completed November'),
         c(money(M.alloc_install))],
        ['24 months of technical support', money(M.alloc_support),
         c('Over time — %d of %d months elapsed'
           % (M.months_elapsed, M.support_months)),
         c(money(M.support_earned))],
        ['Total', money(M.price), '', c(money(M.recognised))],
    ]


HANDOUT = dict(
    n=3,
    title='Allocating the Price, and When to Recognise',
    subtitle='The discount is spread, not dropped. Then each piece waits for its '
             'own moment, and two of the three do not wait long.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage, where '
                 'the figures are produced the way an exam would ask for them.',
        collocations=['allocate on a relative basis',
                      'spread a discount across obligations',
                      'satisfy an obligation over time',
                      'transfer control at a point in time',
                      'recognise revenue as the service is provided',
                      'present a contract liability'],
        pairs=['over time / at a point in time',
               'relative / absolute', 'earned / billed',
               'contract asset / receivable'],
        nots=['A discount is not applied to one promise because it is convenient. '
              'It is spread in proportion to standalone selling prices.',
              'Over time does not mean evenly. It means measured by progress, and '
              'progress is not always a straight line.'],
    ),

    objectives=[
        'Allocate a transaction price across performance obligations on a '
        'relative standalone selling price basis.',
        'Say what happens to a discount, and why it is not attributed to one '
        'promise.',
        'Apply the three tests that make an obligation satisfied over time.',
        'Produce the revenue recognised in the period and the contract liability '
        'left at the year end.',
        'Distinguish a contract asset from a receivable.',
    ],

    terms=[
        ('relative standalone selling price',
         'Allocating a total in proportion to the separate prices of its parts.',
         'الأساس النسبي لأسعار البيع المستقلة',
         'The default allocation method, and the one an exam expects unless it '
         'tells you otherwise.'),
        ('at a point in time',
         'Recognition at one moment, because control transfers at one moment.',
         'في نقطة زمنية',
         'The default. An obligation is satisfied at a point in time unless one of '
         'the three over-time tests is met.'),
        ('over time',
         'Recognition spread across a period, because control transfers '
         'continuously.', 'على مدى الزمن',
         'Three tests, any one of which is enough. Most service contracts meet the '
         'first of them.'),
        ('contract asset',
         'A right to consideration that depends on something other than the '
         'passage of time.', 'أصل العقد',
         'Earned but not yet unconditionally billable. It becomes a receivable '
         'once only time stands between the entity and the cash.'),
        ('input method',
         'Measuring progress by the effort or cost put in.', 'طريقة المدخلات',
         'Costs incurred to date against total expected costs is the common one.'),
        ('output method',
         'Measuring progress by the value of what has been delivered.',
         'طريقة المخرجات',
         'Units delivered, milestones reached, surveys of work performed.'),
    ],

    blocks=[
        ('scene', 'Two steps, and the contract is finished', [
            'Handout 2 settled three things. There is a contract with %s, it '
            'contains three performance obligations, and the transaction price is '
            '%s.' % (M.customer, money(M.price)),
            'What remains is to split that %s between the three promises, and then '
            'to decide when each share is earned.' % money(M.price),
            'The answer will surprise you if you have only looked at the contract '
            'value. Of a %s contract signed in October, %s belongs to %s, and the '
            'rest belongs to the two years that follow.'
            % (money(M.stated_price), money(M.recognised), Y),
        ]),
        ('fig', 'ranked', 'Where the %s actually goes' % money(M.price),
         [('Controllers — earned on delivery', M.alloc_goods,
           money(M.alloc_goods), GOODS),
          ('Installation — earned on completion', M.alloc_install,
           money(M.alloc_install), SERV),
          ('Support — earned over 24 months', M.alloc_support,
           money(M.alloc_support), TIME)],
         'Two of these three are fully earned by 31 December %s. The third has '
         'barely started.' % Y),

        ('part', 'Part 1 · Step 4', 'spreading the price, and the discount'),

        ('task', 'Exercise 3A',
         'Allocate the transaction price on a relative standalone selling price '
         'basis.',
         'Complete the table. Work out each promise’s share of the total '
         'standalone price, then apply it.',
         ['Handout 2, for the transaction price and the three obligations.'],
         ['Work out the percentages first, from the standalone prices. They are '
          'round figures.',
          'Then apply each percentage to the transaction price of %s, not to the '
          'standalone total.' % money(M.price),
          'Your three allocated amounts must add back to the transaction price '
          'exactly.']),
        ('table', _ALH, _alloc(blank=True), GOODS, _ALW),
        ('answers', 8),
        ('fig', 'bridge',
         'Standalone selling prices', M.ssp_total,
         [('Discount, spread across all three in proportion', -M.discount)],
         'Transaction price allocated', M.price),

        ('task', 'Exercise 3B',
         'Say what happens to the discount, and why it is not attributed to one '
         'promise.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3A'],
         ['Blank 1 is the amount by which the standalone prices exceed what the '
          'customer will pay.',
          'Blank 3 is the basis on which the discount is spread.',
          'The last blank is the one circumstance in which a discount may be '
          'attributed to fewer than all the promises.']),
        ('fill', 'R2',
         ['The standalone selling prices add to %s, and Meridian is paying %s. The '
          'difference of %s is a {discount}, and it has to go somewhere.'
          % (money(M.ssp_total), money(M.price), money(M.discount)),
          'It goes everywhere. The allocation is made on a relative standalone '
          'selling price basis, which means each obligation takes the same '
          '{proportion} of the transaction price as its standalone price bears to '
          'the standalone total. The discount is therefore spread across all three '
          'promises automatically, without being calculated separately at all.',
          'The controllers take %s of the standalone total, so they take %s of the '
          'transaction price: %s. The same {percentage} is applied to each of the '
          'other two.'
          % ('70%', '70%', money(M.alloc_goods)),
          'There is one exception, and it is narrow. A discount may be allocated '
          'to one or more specific obligations rather than to all of them only '
          'where there is observable {evidence} that the discount relates to those '
          'obligations alone. Absent that evidence, it is {spread}.'],
         {'discount': ('%s against %s.' % (money(M.ssp_total), money(M.price)), ''),
          'proportion': ('Relative, not absolute.', ''),
          'percentage': ('One percentage per obligation, applied to the '
                         'transaction price.',
                         'Students apply the discount to the last promise '
                         'delivered, which defers revenue that has been earned.'),
          'evidence': ('Observable evidence, which is rare in an exam stem.', ''),
          'spread': ('Spread, in proportion, across every obligation.', '')},
         ['premium', 'guess', 'total']),
        ('fig', 'matrix', 'The allocation, promise by promise',
         ['Flow controllers', 'Installation', 'Technical support'],
         ['Share of standalone total', 'Allocated from %s' % money(M.price)],
         [['70%', money(M.alloc_goods)],
          ['15%', money(M.alloc_install)],
          ['15%', money(M.alloc_support)]],
         'The three shares add to 100%% and the three amounts add to %s. If yours '
         'do not, the percentages were applied to the wrong total.'
         % money(M.price)),

        ('part', 'Part 2 · Step 5',
         'over time, or at a point in time?'),

        ('prose', 'Each allocated amount now waits for its own moment. The default '
                  'is that an obligation is satisfied at a point in time, when '
                  'control passes. An obligation is satisfied over time instead '
                  'only if one of three tests is met, and any one of them is '
                  'enough.', 'R2'),
        ('prose', 'The first test covers most services: the customer receives and '
                  'consumes the benefit as the entity performs. The second covers '
                  'work on an asset the customer already controls. The third covers '
                  'an asset with no alternative use to the seller, where the seller '
                  'has an enforceable right to payment for work done to date.',
                  'R2'),

        ('task', 'Exercise 3C',
         'Apply the three over-time tests to each of the Meridian obligations.',
         'Sort each obligation into the column that says when it is satisfied.',
         ['Exercise 3B, and the two paragraphs above.'],
         ['Start with the default. An obligation is at a point in time unless a '
          'test pulls it the other way.',
          'The support contract meets the first test, and it is worth saying out '
          'loud why.',
          'Two of the extra examples are there to show that construction is not '
          'automatically over time: the third test has two limbs.']),
        ('sortgrid',
         ['The obligation', 'OVER TIME', 'AT A POINT IN TIME'],
         ['%s flow controllers delivered to site' % num(M.units),
          'Installation, completed in two days on site',
          '24 months of technical support',
          'A cleaning contract for an office building',
          'A machine built to a customer’s unique specification, with an '
          'enforceable right to payment for work done',
          'A machine built to a standard specification, held in stock'],
         ['AT A POINT IN TIME', 'AT A POINT IN TIME', 'OVER TIME', 'OVER TIME',
          'OVER TIME', 'AT A POINT IN TIME'],
         'The last two differ only in whether the asset has an alternative use to '
         'the seller. That is the third test, and the exam uses exactly this '
         'contrast.'),
        ('fig', 'fork', 'Three tests, and any one is enough',
         [('Does the customer consume the benefit as you perform?',
           'YES → OVER TIME — most service contracts', TIME),
          ('Are you working on an asset the customer already controls?',
           'YES → OVER TIME — most construction on a customer site', TIME),
          ('No alternative use, AND an enforceable right to payment to date?',
           'YES → OVER TIME. None of the three → A POINT IN TIME', GOODS)]),

        ('part', 'Part 3 · Measuring progress',
         'input and output methods'),

        ('task', 'Exercise 3D',
         'Choose a method of measuring progress and say what each one measures.',
         'Match each situation to the method that fits it.',
         ['Exercise 3C'],
         ['One family of methods measures what has gone in. The other measures '
          'what has come out.',
          'A straight-line spread over time is an output method: each month '
          'delivers the same thing.',
          'The last one is a trap. Materials delivered to site but not yet '
          'installed have gone in without producing anything.']),
        ('match',
         ['24 months of support, provided evenly',
          'A building contract, 40% of expected costs incurred',
          'A contract to deliver 500 units, 300 delivered',
          'Surveys of work performed by an independent engineer',
          'Uninstalled materials delivered to the site'],
         ['Output method — time elapsed, because each month is the same',
          'Input method — costs incurred against total expected costs',
          'Output method — units delivered',
          'Output method — an appraisal of what has been produced',
          'Excluded from an input measure — effort in, nothing produced'],
         ['A', 'B', 'C', 'D', 'E'],
         'The support contract uses time elapsed: %d of %d months by 31 December.'
         % (M.months_elapsed, M.support_months)),
        ('fig', 'scale',
         'INPUT METHODS — WHAT WENT IN',
         ['Costs incurred to date', 'Labour hours worked',
          'Machine hours used',
          'Risk: effort that produces nothing still counts'],
         'OUTPUT METHODS — WHAT CAME OUT',
         ['Units delivered', 'Milestones reached',
          'Time elapsed, where each period is the same',
          'Risk: output may be hard to observe reliably']),

        ('part', 'Part 4 · The answer',
         'what Northwind recognises, and what it still owes'),

        ('task', 'Exercise 3E',
         'Produce the revenue recognised in %s and the contract liability at the '
         'year end.' % Y,
         'Complete the table, then read the passage underneath and complete that '
         'too.',
         ['Exercises 3A to 3D'],
         ['Two obligations are fully satisfied, so their whole allocated amount is '
          'recognised.',
          'The support contract ran for %d of its %d months by 31 December. Apply '
          'that fraction.' % (M.months_elapsed, M.support_months),
          'What is left of the support allocation is what Northwind still owes, '
          'and it goes on the balance sheet.']),
        ('table', _TIMH, _timing(blank=True), TIME, _TIMW),
        ('answers', 7),
        ('fill', 'R3',
         ['Both point-in-time obligations were satisfied before the year end, so '
          'their full allocations of %s and %s are recognised.'
          % (money(M.alloc_goods), money(M.alloc_install)),
          'The support obligation is satisfied over time, measured by months '
          'elapsed. Two of its twenty-four months had run by 31 December, so '
          'Northwind recognises %s of the %s allocated, which is {%s}.'
          % ('two twenty-fourths', money(M.alloc_support),
             money(M.support_earned)),
          'Total revenue recognised on the contract in %s is therefore {%s}, '
          'against a stated contract price of %s. The difference is not a loss and '
          'it is not a deferral of profit: it is revenue that belongs to the two '
          'years that follow.' % (Y, money(M.recognised),
                                  money(M.stated_price)),
          'The %s of support that has been paid for and not yet delivered is '
          'reported on the balance sheet as a contract {liability}, and it will be '
          'released to revenue month by month across %s and the year after.'
          % (money(M.contract_liability), str(int(Y[-1]) + 1).join(['20X', '']))],
         {money(M.support_earned): ('%s × 2 ÷ 24.'
                                    % money(M.alloc_support), ''),
          money(M.recognised): ('%s + %s + %s.'
                                % (money(M.alloc_goods), money(M.alloc_install),
                                   money(M.support_earned)), ''),
          'liability': ('Paid for, not yet delivered.',
                        'Students recognise the whole contract on delivery, which '
                        'pulls two years of support revenue into one year.')},
         [money(M.price), money(M.alloc_support), 'asset']),
        ('fig', 'timeline', 'The contract across three years',
         [('October to December %s' % Y,
           'controllers, installation, 2 months of support: %s'
           % money(M.recognised), GOODS),
          ('The following year', '12 months of support: %s'
           % money(M.alloc_support * 12 / M.support_months), TIME),
          ('The year after', '10 months of support: %s'
           % money(M.alloc_support * 10 / M.support_months), TIME)],
         'The three amounts add to the transaction price of %s. Nothing is lost; '
         'it is placed in the year it is earned.' % money(M.price)),

        ('watch', 'A contract liability and a receivable are different things, and '
                  'so is a contract asset. A contract liability is cash held for '
                  'work not yet done. A contract asset is work done whose billing '
                  'still depends on something other than time passing. A receivable '
                  'is work done where only time stands between the company and the '
                  'cash.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A contract has a transaction price of $540,000. The standalone '
                'selling prices of its three obligations are $420,000, $90,000 and '
                '$90,000. The amount allocated to the first obligation is:',
         ['$420,000', '$378,000', '$360,000', '$480,000'],
         1, 'Level B',
         'The first obligation is 70% of the $600,000 standalone total, so it takes '
         '70% of the $540,000 transaction price: $378,000. (A) uses the standalone '
         'price and ignores the discount. (C) and (D) misapply the proportion.'),

        ('mcq', 'A contract’s standalone selling prices exceed its transaction '
                'price. In the absence of observable evidence that the discount '
                'relates to specific obligations, the discount is:',
         ['Allocated entirely to the obligation satisfied last',
          'Allocated proportionately to all performance obligations',
          'Recognised as a selling expense when the contract is signed',
          'Ignored, and each obligation is recognised at its standalone price'],
         1, 'Level B',
         'Relative allocation spreads the discount automatically. (A) is the common '
         'error and it defers revenue that has been earned. (C) and (D) would both '
         'cause the allocated amounts to exceed the transaction price.'),

        ('mcq', 'An entity provides 24 months of support, satisfied over time and '
                'measured by months elapsed. $81,000 was allocated to the support '
                'and 2 months have elapsed at the year end. Revenue recognised on '
                'this obligation is:',
         ['$81,000', '$6,750', '$40,500', 'Nothing until the 24 months end'],
         1, 'Level A',
         '$81,000 × 2 ÷ 24 = $6,750. (A) recognises the whole thing on '
         'signature. (C) halves it for no reason. (D) defers everything, which is '
         'the opposite error and equally wrong.'),

        ('mcq', 'Which of the following obligations is satisfied OVER TIME?',
         ['A machine built to a standard specification and held in inventory',
          'Flow controllers delivered to a customer’s site',
          'A two-year cleaning contract for a customer’s building',
          'A laptop sold with an assurance warranty'],
         2, 'Level B',
         'The customer consumes the benefit of cleaning as it is performed, which '
         'is the first over-time test. (A) and (B) transfer control at a moment. '
         '(D) is a single obligation satisfied at a point in time, with the '
         'warranty treated as a provision.'),

        ('mcq', 'A contractor builds an asset to a customer’s unique '
                'specification and has an enforceable right to payment for work '
                'completed to date. The obligation is satisfied:',
         ['At a point in time, on completion',
          'Over time, because the asset has no alternative use to the contractor '
          'and payment for work to date is enforceable',
          'Over time, because construction contracts are always over time',
          'At a point in time, because the customer does not yet control the asset'],
         1, 'Level C',
         'That is the third over-time test, and it has two limbs that both hold '
         'here. (C) states a rule that does not exist: a standard-specification '
         'machine built for stock is at a point in time, which is exactly the '
         'contrast the exam draws.'),

        ('mcq', 'An entity has completed work worth $50,000 but cannot invoice it '
                'until a separate milestone is certified. At the reporting date '
                'this is:',
         ['A receivable of $50,000', 'A contract asset of $50,000',
          'A contract liability of $50,000', 'Not recognised at all'],
         1, 'Level C',
         'The right to consideration depends on something other than the passage of '
         'time, so it is a contract asset rather than a receivable. (A) would be '
         'right once only time stands in the way. (C) reverses the direction — '
         'the customer owes the entity, not the other way round.'),

        ('mcq', 'An input method measures progress by costs incurred. Materials '
                'costing $200,000 have been delivered to the site but not yet '
                'installed. These costs should:',
         ['Be included, because they have been incurred',
          'Be excluded from the measure of progress, because they have not '
          'produced any transfer to the customer',
          'Be included at half their value',
          'Cause the entity to switch to an output method'],
         1, 'Level C',
         'Uninstalled materials have gone in without producing progress, so '
         'including them would overstate completion and pull revenue forward. (A) '
         'is the mechanical answer the question is testing. (D) overreacts: the '
         'method is adjusted, not abandoned.'),

        ('tip', 'Set out four columns before you compute anything: obligation, '
                'standalone price, share, allocated amount. Then add a fifth for '
                'the fraction satisfied. Nearly every revenue question in Section '
                'A is that table with some cells left blank.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · the completed allocation'),
        ('table', _ALH, _alloc(), GOODS, _ALW),
        ('h3', 'Exercise 3E · the completed timing table'),
        ('table', _TIMH, _timing(), TIME, _TIMW),
        ('bullets', [
            'Revenue recognised on the contract in %s: %s.' % (Y,
                                                               money(M.recognised)),
            'Contract liability at 31 December %s: %s, being the support paid for '
            'and not yet delivered.' % (Y, money(M.contract_liability)),
            'The two figures add to %s, which is the transaction price. Nothing is '
            'lost between them.' % money(M.price),
        ]),
    ],
)
