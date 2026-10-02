# -*- coding: utf-8 -*-
"""Volume 12, Handout 1 — Expense Recognition: Share-Based Payments and
Employee Benefits.

Covers A.2 ff(i): the named differences between US GAAP and IFRS in
recognising these two expenses.
"""
from fadata import N, SB, PE, Y
from data import money, num

GAAP, IFRS, BOTH, SLATE = '1F6F8F', 'A05A2B', '2E7D5B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_SBPH = ['Year', 'US GAAP, straight-line', 'IFRS, tranche by tranche']
_SBPW = [16, 42, 42]


def _sbp(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for y in range(1, SB.tranches + 1):
        rows.append([str(y), c(money(SB.gaap_charge(y))),
                     c(money(SB.ifrs_charge(y)))])
    rows.append(['Total', c(money(SB.total_cost)), c(money(SB.total_cost))])
    return rows


_PENH = ['Net defined benefit cost for %s' % Y, 'US GAAP', 'IFRS']
_PENW = [48, 26, 26]


def _pen(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Service cost for the year', money(PE.service_cost),
         money(PE.service_cost)],
        ['Interest on the obligation at %s' % _pc(PE.discount_rate),
         c(money(PE.interest_cost)), c('—')],
        ['Expected return on plan assets at %s' % _pc(PE.expected_return),
         c(money(-PE.expected_asset_return)), c('—')],
        ['Net interest on the net liability at %s' % _pc(PE.discount_rate),
         c('—'), c(money(PE.net_interest))],
        ['Past service cost of %s' % money(PE.past_service_cost),
         c(money(PE.gaap_amortisation)), c(money(PE.past_service_cost))],
        ['Charged to profit', c(money(PE.gaap_cost)),
         c(money(PE.ifrs_cost))],
    ]


HANDOUT = dict(
    n=1,
    title='Expense Recognition: Share-Based Payments and Employee Benefits',
    subtitle='The same option award costs %s in its first year under one '
             'framework and %s under the other. Over three years both spend '
             '%s.' % (money(SB.gaap_charge(1)), money(SB.ifrs_charge(1)),
                      money(SB.total_cost)),
    register='R2',

    lang=dict(
        register='R2 throughout. The exam register waits until the second half '
                 'of the volume, once the pattern of these comparisons is '
                 'familiar.',
        collocations=['recognise compensation cost over the vesting period',
                      'treat each tranche as a separate award',
                      'estimate forfeitures',
                      'measure the net defined benefit liability',
                      'charge past service cost immediately',
                      'recognise a remeasurement in other comprehensive '
                      'income'],
        pairs=['straight-line / accelerated',
               'tranche / award',
               'expected return / discount rate',
               'amortised / recognised immediately'],
        nots=['Neither framework spends more in total. The grant-date fair '
              'value is the same %s under both.' % money(SB.total_cost),
              'A remeasurement in other comprehensive income is not a deferral '
              'under IFRS. It never reaches profit at all.'],
    ),

    objectives=[
        'Say how each framework spreads the cost of a graded-vesting award.',
        'Compute the annual charge under both.',
        'Say how each framework treats forfeiture estimates.',
        'Compute net defined benefit cost under both.',
        'Say where a remeasurement and a past service cost go under each.',
    ],

    terms=[
        ('share-based payment',
         'A transaction in which a company receives goods or services and pays '
         'for them in its own equity instruments.',
         'الدفع على أساس الأسهم',
         'Measured at the grant-date fair value of the award under both '
         'frameworks. Only the spreading of it differs.'),
        ('graded vesting',
         'An award that vests in instalments over several years rather than all '
         'at once.', 'الاستحقاق المتدرج',
         'The condition that produces the whole difference in this handout. An '
         'award vesting all at once is treated identically.'),
        ('defined benefit plan',
         'A pension plan in which the employer promises a specified benefit and '
         'bears the risk of funding it.',
         'خطة المنافع المحددة',
         'A defined contribution plan is the simple case and is treated the '
         'same way under both frameworks.'),
        ('expected return on plan assets',
         'The return an employer expects to earn on a pension plan’s assets, '
         'used in US GAAP to reduce the pension cost.',
         'العائد المتوقع على أصول الخطة',
         'A management estimate, which is exactly why IFRS removed it. It is '
         'the whole of the %s difference in this handout.'
         % money(PE.asset_rate_gap)),
        ('net interest',
         'The discount rate applied to the net defined benefit liability, which '
         'is the IFRS replacement for separate interest and expected return '
         'figures.', 'الفائدة الصافية',
         'One rate on one net balance. No management estimate of a return is '
         'needed at all.'),
        ('past service cost',
         'The increase in a pension obligation caused by amending the plan in '
         'favour of employees for their earlier service.',
         'تكلفة الخدمة السابقة',
         'Recognised in profit at once under IFRS and amortised over remaining '
         'service under US GAAP. One of the sharpest contrasts in the exam.'),
        ('remeasurement',
         'An actuarial gain or loss on a defined benefit obligation or its plan '
         'assets.', 'إعادة القياس',
         'Under IFRS it goes to other comprehensive income permanently. Volume '
         '9 Handout 2 called that the exception to recycling.'),
    ],

    blocks=[
        ('scene', 'Two frameworks, one award', [
            'Northwind grants %s share options worth $%d each at the grant '
            'date, so the award is worth %s in total.'
            % (num(SB.options / 1000, 0) + ',000', SB.fair_value,
               money(SB.total_cost)),
            'They vest in three equal instalments, one at the end of each of '
            'the next three years, which makes this a graded vesting award. The '
            'only condition is that the holder stays.',
            'Both frameworks measure the award at the same %s. Both spend all '
            'of it. And in the first year one charges %s and the other charges '
            '%s.' % (money(SB.total_cost), money(SB.gaap_charge(1)),
                     money(SB.ifrs_charge(1))),
            'This handout works that difference, and then the larger one in '
            'pension accounting.',
        ]),
        ('fig', 'ranked', 'The same award, first-year charge',
         [('IFRS — each tranche over its own vesting period',
           SB.ifrs_charge(1), money(SB.ifrs_charge(1)), IFRS),
          ('US GAAP — straight-line over the whole award',
           SB.gaap_charge(1), money(SB.gaap_charge(1)), GAAP),
          ('Grant-date fair value, spent in full under both',
           SB.total_cost, money(SB.total_cost), BOTH)],
         'The first two bars are the same award in the same year. The third is '
         'what both of them add up to over three.',
         'Compensation cost in year one'),

        ('part', 'Part 1 · Spreading an option award',
         'one award or three'),

        ('task', 'Exercise 1A',
         'Say how each framework spreads the cost of a graded-vesting award.',
         'Read and complete. Write one word in each space.',
         ['Volume 9 Handout 1, on systematic and rational allocation.'],
         ['Ask how many awards there really are when three instalments vest on '
          'three different dates.',
          'If each instalment is its own award, the first has one year to be '
          'earned over and the third has three.',
          'The last blank is what happens to the total cost under the two '
          'approaches, and the answer is nothing.']),
        ('fill', 'R2',
         ['Both frameworks measure the award at its grant-date fair value of '
          '%s and recognise it over the period the employee earns it. The '
          'difference is how many awards they think there {are}.'
          % money(SB.total_cost),
          'US GAAP permits an award whose only condition is continued service '
          'to be expensed on a {straight-line} basis over the whole vesting '
          'period, which gives %s in each of the three years.'
          % money(SB.gaap_charge(1)),
          'IFRS requires each instalment to be treated as a separate award. '
          'The first %s is earned over one year, the second over two and the '
          'third over three, so the charge is {front-loaded}.'
          % money(SB.per_tranche),
          'Year one therefore carries %s, year two %s and year three %s. The '
          '{total} is the same %s under both, because the same award was '
          'granted.' % (money(SB.ifrs_charge(1)), money(SB.ifrs_charge(2)),
                        money(SB.ifrs_charge(3)), money(SB.total_cost))],
         {'are': ('One award, or one for each instalment.', ''),
          'straight-line': ('Permitted, for a service condition only.', ''),
          'front-loaded': ('Three charges in year one, one in year three.',
                           ''),
          'total': ('The grant-date fair value, either way.',
                    'Students expect the accelerated pattern to cost more. It '
                    'costs the same and costs it sooner.')},
         ['differ', 'accelerated', 'charge']),
        ('fig', 'formula', 'Why IFRS charges %s in year one'
         % money(SB.ifrs_charge(1)),
         [('%s' % money(SB.per_tranche), 'Tranche 1, over 1 year', IFRS),
          ('+', '', None),
          ('%s' % money(SB.per_tranche / 2), 'Tranche 2, over 2 years',
           SLATE),
          ('+', '', None),
          ('%s' % money(SB.per_tranche / 3), 'Tranche 3, over 3 years',
           BOTH),
          ('=', '', None),
          ('%s' % money(SB.ifrs_charge(1)), 'Year one under IFRS', RUST)],
         'By year three only the last tranche is still being earned, so the '
         'charge has fallen to %s.' % money(SB.ifrs_charge(3))),

        ('part', 'Part 2 · The two patterns, computed',
         'three years, two columns'),

        ('task', 'Exercise 1B',
         'Compute the annual charge under both frameworks.',
         'Complete the grid. Both columns must reach the same total.',
         ['Exercise 1A.'],
         ['The left column is %s divided by three, the same in every year.'
          % money(SB.total_cost),
          'The right column is %s for the first tranche, %s for the second and '
          '%s for the third, added for each year they are still being earned.'
          % (money(SB.per_tranche), money(SB.per_tranche / 2),
             money(SB.per_tranche / 3)),
          'If your two totals differ, one of the tranche figures is wrong: both '
          'must come to %s.' % money(SB.total_cost)]),
        ('table', _SBPH, _sbp(blank=True), GAAP, _SBPW),
        ('answers', 8),
        ('fig', 'matrix', 'The two patterns, side by side',
         ['US GAAP, straight-line', 'IFRS, tranche by tranche'],
         ['Year 1', 'Year 2', 'Year 3'],
         [[money(SB.gaap_charge(1)), money(SB.gaap_charge(2)),
           money(SB.gaap_charge(3))],
          [money(SB.ifrs_charge(1)), money(SB.ifrs_charge(2)),
           money(SB.ifrs_charge(3))]],
         'Both rows total %s. A company reporting under IFRS shows a lower '
         'profit in year one and a higher one in year three for exactly the '
         'same transaction.' % money(SB.total_cost)),

        ('part', 'Part 3 · Two smaller differences',
         'forfeitures and deferred tax'),

        ('task', 'Exercise 1C',
         'Say how each framework treats forfeiture estimates and the related '
         'deferred tax.',
         'Sort each statement into the framework it describes.',
         ['Exercise 1B, and Volume 7 Handout 4 on deferred tax assets.'],
         ['One framework allows a company to wait and see how many options are '
          'forfeited; the other requires an estimate from the start.',
          'For deferred tax, one framework measures the asset on the '
          'compensation cost recognised and the other on the award’s intrinsic '
          'value at each reporting date.',
          'Two of the six statements are true of both frameworks.']),
        ('sortgrid',
         ['Statement', 'US GAAP', 'IFRS', 'BOTH'],
         ['Forfeitures may be accounted for as they occur, by policy choice',
          'Forfeitures must be estimated at the grant date',
          'The award is measured at its grant-date fair value',
          'The deferred tax asset is measured on the compensation cost '
          'recognised',
          'The deferred tax asset is remeasured on the award’s intrinsic value '
          'each period',
          'The cost is recognised over the period the employee earns the award'],
         ['US GAAP', 'IFRS', 'BOTH', 'US GAAP', 'IFRS', 'BOTH'],
         'The two BOTH rows are worth as much as the four differences: an exam '
         'question often asks what the frameworks agree on.'),
        ('fig', 'buckets', 'Share-based payments, sorted',
         [('THE SAME UNDER BOTH', BOTH,
           ['Grant-date fair value is the measure',
            'The cost is spread over the earning period',
            'The total cost is %s' % money(SB.total_cost)]),
          ('US GAAP ONLY', GAAP,
           ['Straight-line permitted for a service condition',
            'Forfeitures may be taken as they occur',
            'Deferred tax on the cost recognised']),
          ('IFRS ONLY', IFRS,
           ['Each tranche is a separate award',
            'Forfeitures must be estimated',
            'Deferred tax on intrinsic value each period'])],
         'Three agreements and six differences. The exam asks about all nine.'),

        ('part', 'Part 4 · The pension cost',
         'where the frameworks part most sharply'),

        ('prose', 'Northwind also operates a defined benefit plan, and it is '
                  'there that the two frameworks part most sharply.', 'R2'),
        ('prose', 'Northwind’s plan has an obligation of %s and assets of %s, '
                  'so it is underfunded by %s. Service cost for the year is %s, '
                  'the discount rate is %s, and management expects %s on the '
                  'plan’s assets.'
                  % (money(PE.dbo), money(PE.plan_assets),
                     money(PE.net_liability), money(PE.service_cost),
                     _pc(PE.discount_rate), _pc(PE.expected_return)), 'R2'),

        ('task', 'Exercise 1D',
         'Compute the net defined benefit cost under both frameworks.',
         'Complete the grid. A dash means the framework has no such line.',
         ['The paragraph above, and Volume 7 Handout 1 on how a liability '
          'unwinds.'],
         ['US GAAP uses two gross figures: %s on the obligation at %s, and %s '
          'expected on the assets at %s.'
          % (money(PE.interest_cost), _pc(PE.discount_rate),
             money(PE.expected_asset_return), _pc(PE.expected_return)),
          'IFRS uses one net figure: the %s net liability at the %s discount '
          'rate.' % (money(PE.net_liability), _pc(PE.discount_rate)),
          'The past service cost of %s is amortised over %d years under one '
          'framework and charged in full under the other.'
          % (money(PE.past_service_cost), PE.remaining_service)]),
        ('table', _PENH, _pen(blank=True), IFRS, _PENW),
        ('answers', 9),
        ('fig', 'bridge',
         'Net cost under US GAAP', PE.gaap_cost,
         [('The expected return above the discount rate',
           PE.asset_rate_gap),
          ('The rest of the past service cost, charged at once',
           PE.past_service_cost - PE.gaap_amortisation)],
         'Net cost under IFRS', PE.ifrs_cost),

        ('part', 'Part 5 · Where the rest of it goes',
         'remeasurements and the plan amendment'),

        ('task', 'Exercise 1E',
         'Say where a remeasurement and a past service cost go under each '
         'framework.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1D, and Volume 9 Handout 2 on reclassification.'],
         ['An actuarial loss of %s arose during the year. Ask which framework '
          'lets it reach profit eventually.' % money(PE.remeasurement),
          'Under one framework the amount sits in other comprehensive income '
          'and is amortised into profit; under the other it never leaves.',
          'The last blank is why the two net costs differ by %s, and it is a '
          'management estimate one framework no longer trusts.'
          % money(PE.asset_rate_gap)]),
        ('fill', 'R2',
         ['The actuarial loss of %s is recognised in other comprehensive income '
          'under both frameworks. What happens next is the difference: under US '
          'GAAP it is {amortised} into profit over the remaining service '
          'period.' % money(PE.remeasurement),
          'Under IFRS it stays where it is. A remeasurement is recognised in '
          'other comprehensive income and is {never} reclassified into profit, '
          'which is the exception Volume 9 named.',
          'The %s plan amendment divides them too. US GAAP amortises it, giving '
          '%s a year for %d years; IFRS charges the whole %s to profit '
          '{immediately}.' % (money(PE.past_service_cost),
                              money(PE.gaap_amortisation),
                              PE.remaining_service,
                              money(PE.past_service_cost)),
          'And the %s net cost difference is almost all the expected return. '
          'IFRS replaced a management estimate of %s with the %s discount rate '
          'on one net balance, so no {return} is estimated at all.'
          % (money(PE.ifrs_cost - PE.gaap_cost), _pc(PE.expected_return),
             _pc(PE.discount_rate))],
         {'amortised': ('Into profit, over remaining service.', ''),
          'never': ('It stays in equity permanently.',
                    'Students expect every amount in other comprehensive '
                    'income to be recycled. A remeasurement under IFRS is the '
                    'standard exception.'),
          'immediately': ('In full, in the year of the amendment.', ''),
          'return': ('One rate, one net balance, no estimate.', '')},
         ['deferred', 'always', 'liability']),
        ('fig', 'matrix', 'The three pension differences',
         ['The asset return', 'Remeasurements', 'Past service cost'],
         ['US GAAP', 'IFRS'],
         [['Expected return of %s, estimated by management'
           % money(PE.expected_asset_return),
           'No expected return; net interest of %s at %s'
           % (money(PE.net_interest), _pc(PE.discount_rate))],
          ['To other comprehensive income, then amortised into profit',
           'To other comprehensive income, and never recycled'],
          ['Amortised at %s a year over %d years'
           % (money(PE.gaap_amortisation), PE.remaining_service),
           'All %s charged to profit at once'
           % money(PE.past_service_cost)]],
         'Three rows, and the first one alone accounts for %s of the %s '
         'difference in net cost.'
         % (money(PE.asset_rate_gap),
            money(PE.ifrs_cost - PE.gaap_cost))),

        ('watch', 'IFRS removed the expected return because it was a '
                  'management estimate that reduced a reported expense. A '
                  'company expecting %s rather than %s on %s of plan assets '
                  'lowered its pension cost by %s without anything happening, '
                  'and that is the abuse the single net interest figure closes.'
                  % (_pc(PE.expected_return), _pc(PE.discount_rate),
                     money(PE.plan_assets), money(PE.asset_rate_gap))),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An award of share options vesting in three equal annual '
                'instalments, with a service condition only, is expensed under '
                'IFRS:',
         ['Straight-line over three years',
          'With each instalment treated as a separate award over its own '
          'vesting period',
          'In full at the grant date',
          'In full when the last instalment vests'],
         1, 'Level A',
         'IFRS requires tranche-by-tranche treatment, which front-loads the '
         'charge. (A) is the US GAAP election, which is exactly the difference '
         'ff(i) names.'),

        ('mcq', 'An award worth %s vests in three equal annual instalments. The '
                'first-year charge under IFRS is:' % money(SB.total_cost),
         [money(SB.gaap_charge(1)), money(SB.ifrs_charge(1)),
          money(SB.total_cost), money(SB.ifrs_charge(3))],
         1, 'Level B',
         '%s for the first tranche, %s for half the second and %s for a third '
         'of the third is %s. (A) is the straight-line figure, which is right '
         'under US GAAP and wrong here.'
         % (money(SB.per_tranche), money(SB.per_tranche / 2),
            money(SB.per_tranche / 3), money(SB.ifrs_charge(1)))),

        ('mcq', 'Over the full vesting period, total compensation cost under '
                'the two frameworks is:',
         ['Higher under IFRS', 'The same', 'Higher under US GAAP',
          'Not comparable'],
         1, 'Level B',
         'Both spend the grant-date fair value of %s; only the pattern '
         'differs. (A) is the answer the front-loading suggests and it confuses '
         'timing with amount.' % money(SB.total_cost)),

        ('mcq', 'In computing net defined benefit cost, IFRS uses:',
         ['Interest cost and an expected return on plan assets, separately',
          'Net interest on the net defined benefit liability at the discount '
          'rate',
          'The actual return on plan assets',
          'No interest element at all'],
         1, 'Level B',
         'One rate on one net balance. (A) is the US GAAP computation, and the '
         'expected return in it is the management estimate IFRS set out to '
         'remove.'),

        ('mcq', 'A plan has an obligation of %s and assets of %s. The discount '
                'rate is %s and management expects %s on the assets. The '
                'difference between the two frameworks’ interest elements is:'
         % (money(PE.dbo), money(PE.plan_assets), _pc(PE.discount_rate),
            _pc(PE.expected_return)),
         [money(PE.net_interest), money(PE.asset_rate_gap),
          money(PE.interest_cost), 'Nil'],
         1, 'Level C',
         'US GAAP charges %s less %s, or %s; IFRS charges %s on the %s net '
         'liability, or %s. The %s gap is the plan assets at the two '
         'percentage points between the rates.'
         % (money(PE.interest_cost), money(PE.expected_asset_return),
            money(PE.interest_cost - PE.expected_asset_return),
            _pc(PE.discount_rate), money(PE.net_liability),
            money(PE.net_interest), money(PE.asset_rate_gap))),

        ('mcq', 'An actuarial loss on a defined benefit obligation is '
                'recognised in other comprehensive income under IFRS and:',
         ['Reclassified into profit over the remaining service period',
          'Never reclassified into profit',
          'Reclassified into profit when the plan is settled',
          'Charged directly to retained earnings'],
         1, 'Level C',
         'Remeasurements under IFRS stay in equity permanently, which Volume 9 '
         'gave as the exception to recycling. (A) describes the US GAAP '
         'treatment, and the pairing is the point of the question.'),

        ('mcq', 'A company amends its pension plan, increasing the obligation '
                'by %s for employees’ past service. Under IFRS the amount '
                'charged to profit in the year of the amendment is:'
         % money(PE.past_service_cost),
         [money(PE.gaap_amortisation), money(PE.past_service_cost),
          'Nil', money(PE.past_service_cost / 2)],
         1, 'Level B',
         'IFRS recognises past service cost immediately and in full. (A) is the '
         '%s a year US GAAP would amortise over the %d-year remaining service '
         'period.' % (money(PE.gaap_amortisation), PE.remaining_service)),

        ('tip', 'Every difference in this volume has the same shape: the total '
                'is usually identical and the timing or the location differs. '
                'Before you compute anything, decide whether the question is '
                'about how much or about when, because half the distractors are '
                'the right answer to the other question.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the two expense patterns'),
        ('table', _SBPH, _sbp(), GAAP, _SBPW),
        ('h3', 'Exercise 1D · the two pension costs'),
        ('table', _PENH, _pen(), IFRS, _PENW),
        ('prose', 'Both option columns total %s, because both frameworks spend '
                  'the grant-date fair value of the award. IFRS reaches it '
                  'sooner: %s in year one against %s, and %s in year three '
                  'against the same %s.'
                  % (money(SB.total_cost), money(SB.ifrs_charge(1)),
                     money(SB.gaap_charge(1)), money(SB.ifrs_charge(3)),
                     money(SB.gaap_charge(3))), 'R2'),
        ('prose', 'The pension columns do not agree, and the whole of the %s '
                  'gap is accounted for twice over: %s is the %s of plan '
                  'assets at the two percentage points between the expected '
                  'return and the discount rate, and %s is the part of the '
                  'plan amendment US GAAP has not yet amortised.'
                  % (money(PE.ifrs_cost - PE.gaap_cost),
                     money(PE.asset_rate_gap), money(PE.plan_assets),
                     money(PE.past_service_cost - PE.gaap_amortisation)),
         'R2'),
    ],
)
