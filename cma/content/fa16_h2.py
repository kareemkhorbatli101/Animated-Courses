# -*- coding: utf-8 -*-
"""Volume 16, Handout 2 — The Five Components of Net Periodic Pension Cost.

Outside the CMA. This handout derives the $170,000 Volume 12 Handout 1
reported under US GAAP without ever showing where it came from.
"""
from fadata import N, PE, Y
from data import money, num

PROM, FUND, SLATE, RISK = '6D3F7E', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_COSTH = ['Net periodic pension cost for %s' % Y, 'Amount', 'Direction']
_COSTW = [48, 26, 26]


def _cost(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Service cost — another year of benefit earned',
         money(PE.service_cost), c('Increases the cost')],
        ['Interest cost — %s on the %s obligation'
         % (_pc(PE.discount_rate), money(PE.dbo)),
         c(money(PE.interest_cost)), c('Increases the cost')],
        ['Expected return on plan assets at %s'
         % _pc(PE.expected_return),
         c(money(-PE.expected_asset_return)), c('Reduces the cost')],
        ['Amortisation of prior service cost, %s over %d years'
         % (money(PE.past_service_cost), PE.remaining_service),
         c(money(PE.gaap_amortisation)), c('Increases the cost')],
        ['Amortisation of net gains and losses, under the corridor',
         c('Nil'), c('Neither, this year')],
        ['Net periodic pension cost', c(money(PE.gaap_cost)), ''],
    ]


_WHEREH = ['Component', 'Reaches profit?', 'Why']
_WHEREW = [32, 24, 44]


def _where(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Service cost', c('Yes, in full'),
         c('Employees earned it this year')],
        ['Interest cost', c('Yes, in full'),
         c('The discount on the obligation unwound')],
        ['Expected return on plan assets', c('Yes, as a deduction'),
         c('The fund is expected to meet part of the cost')],
        ['The gap between expected and actual return',
         c('No, to other comprehensive income'),
         c('A remeasurement, amortised later if large enough')],
        ['Prior service cost', c('Only the amortised part'),
         c('The rest waits in other comprehensive income')],
    ]


HANDOUT = dict(
    n=2,
    title='The Five Components of Net Periodic Pension Cost',
    subtitle='Northwind contributed %s to its plan and charged %s to profit. '
             'Neither number explains the other.'
             % (money(PE.contributions), money(PE.gaap_cost)),
    register='R2',

    lang=dict(
        register='R2 throughout, with the corridor at R3 because the exam '
                 'states the test in its own words.',
        collocations=['charge service cost to profit',
                      'unwind the discount on the obligation',
                      'offset the expected return against the cost',
                      'amortise prior service cost',
                      'apply the corridor test',
                      'defer a remeasurement in other comprehensive income'],
        pairs=['contribution / expense',
               'expected return / actual return',
               'prior service cost / service cost',
               'inside the corridor / outside it'],
        nots=['The pension expense is not the contribution. Northwind paid in '
              '%s and charged %s.'
              % (money(PE.contributions), money(PE.gaap_cost)),
              'The expected return is not what the fund earned. It is what '
              'management assumed it would earn.'],
    ),

    objectives=[
        'Name the five components of net periodic pension cost.',
        'Compute each one from the schedules of Handout 1.',
        'Say why the expected return is used rather than the actual return.',
        'Apply the corridor test to a net gain or loss.',
        'Say which components reach profit and which wait in equity.',
    ],

    terms=[
        ('net periodic pension cost',
         'The total charge for a defined benefit plan in a period, made up of '
         'five components.', 'تكلفة المعاش الدورية الصافية',
         'A net figure, and two of its five components reduce it. The '
         'contribution paid into the fund is a different number entirely.'),
        ('corridor approach',
         'A US GAAP accommodation under which net gains and losses are '
         'amortised into profit only to the extent they exceed ten per cent of '
         'the larger of the obligation and the plan assets.',
         'نهج الممر',
         'Nothing inside the corridor is ever amortised. It is why a plan can '
         'carry large unrecognised losses for years.'),
        ('amortisation of prior service cost',
         'Spreading the cost of a plan amendment over the remaining service of '
         'the employees it benefited.',
         'إطفاء تكلفة الخدمة السابقة',
         'US GAAP spreads it; IFRS charges the whole amount at once, which was '
         'Volume 12’s sharpest pension difference.'),
    ],

    blocks=[
        ('scene', 'Two numbers that are not the same', [
            'Northwind paid %s into its pension fund this year. That is a '
            'cash flow, and it is decided by the trustees, the funding rules '
            'and what the company can afford.' % money(PE.contributions),
            'The income statement charges %s. That is an accounting measure, '
            'and it is decided by five components that have nothing to do with '
            'what was paid.' % money(PE.gaap_cost),
            'Under a defined contribution plan the two figures would be the '
            'same number. Under a defined benefit plan they almost never are.',
            'Volume 12 Handout 1 reported the %s without deriving it. This '
            'handout derives it.' % money(PE.gaap_cost),
        ]),
        ('fig', 'ranked', 'The five components, and the net charge',
         [('Service cost', PE.service_cost, money(PE.service_cost), PROM),
          ('Interest cost', PE.interest_cost, money(PE.interest_cost),
           RISK),
          ('Expected return on plan assets', PE.expected_asset_return,
           money(-PE.expected_asset_return), FUND),
          ('Amortisation of prior service cost', PE.gaap_amortisation,
           money(PE.gaap_amortisation), SLATE),
          ('Net periodic pension cost', PE.gaap_cost,
           money(PE.gaap_cost), OK)],
         'Three components raise the charge and one reduces it. The fifth, the '
         'amortisation of gains and losses, is nil this year and Part 4 '
         'explains why.',
         'Against a cash contribution of %s' % money(PE.contributions)),

        ('part', 'Part 1 · The three that are easy',
         'service, interest, and the return'),

        ('task', 'Exercise 2A',
         'Say what each of the first three components measures.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 1 Exercises 1B and 1C, for the two roll-forwards.'],
         ['Two of the three are already in your obligation schedule from '
          'Handout 1.',
          'The third is not in your plan assets schedule, and finding out why '
          'is the point of Part 2.',
          'The last blank is the direction the expected return pushes the '
          'charge.']),
        ('fill', 'R2',
         ['Service cost is the present value of the benefit employees earned '
          'by working this year. It is the only component that has anything to '
          'do with the {work} done in the period, and it is %s.'
          % money(PE.service_cost),
          'Interest cost is the discount on the obligation unwinding as the '
          'payments come a year closer. At %s on the opening %s it is {%s}, '
          'and it is the same mechanism as Volume 7’s lease liability.'
          % (_pc(PE.discount_rate), money(PE.dbo),
             money(PE.interest_cost)),
          'Both of those are in the obligation schedule you built in Handout 1. '
          'The third component comes from the other schedule: the fund is '
          'expected to meet part of the cost, so the expected return '
          '{reduces} the charge.',
          'At %s on %s of plan assets that is %s. Taken together the three '
          'come to %s, and the fourth component takes it to %s.'
          % (_pc(PE.expected_return), money(PE.plan_assets),
             money(PE.expected_asset_return),
             money(PE.service_cost + PE.interest_cost
                   - PE.expected_asset_return),
             money(PE.gaap_cost))],
         {'work': ('This year’s service, and nothing else.', ''),
          money(PE.interest_cost): ('%s of %s.' % (_pc(PE.discount_rate),
                                                   money(PE.dbo)), ''),
          'reduces': ('The fund pays part of it, so the employer charges '
                      'less.', ''),
          'nil': ('', '')},
         ['salary', 'increases', 'actual']),
        ('fig', 'formula', 'The three main components',
         [('Service cost %s' % money(PE.service_cost),
           'Earned by this year’s work', PROM),
          ('+', '', None),
          ('Interest %s' % money(PE.interest_cost),
           '%s on the obligation' % _pc(PE.discount_rate), RISK),
          ('−', '', None),
          ('Expected return %s' % money(PE.expected_asset_return),
           '%s on the plan assets' % _pc(PE.expected_return), FUND),
          ('=', '', None),
          ('%s' % money(PE.service_cost + PE.interest_cost
                        - PE.expected_asset_return),
           'Before the amortisations', SLATE)],
         'Two of the three come from the obligation and one from the fund. The '
         'charge is the net of what was promised and what the fund is expected '
         'to provide.'),

        ('part', 'Part 2 · Expected, not actual',
         'and what happens to the difference'),

        ('prose', 'The fund actually earned %s this year and management '
                  'expected %s. US GAAP uses the expected figure in the '
                  'expense, so that a volatile market does not swing a '
                  'reported profit. The %s difference goes somewhere else.'
                  % (money(PE.actual_return),
                     money(PE.expected_asset_return),
                     money(PE.remeasurement)), 'R2'),

        ('task', 'Exercise 2B',
         'Say why the expected return is used and where the difference goes.',
         'Read and complete. Write one word or figure in each space.',
         ['The paragraph above, and Volume 9 Handout 2 on other comprehensive '
          'income.'],
         ['A pension fund’s return swings with the market from year to year. '
          'Ask what that would do to a reported profit if it went straight '
          'through.',
          'Northwind expected %s and earned %s, a shortfall of %s.'
          % (money(PE.expected_asset_return), money(PE.actual_return),
             money(PE.remeasurement)),
          'The last blank is where that shortfall sits, and Volume 9 named it '
          'as the half of comprehensive income that bypasses profit.']),
        ('fill', 'R2',
         ['A pension fund’s return is volatile. Putting the actual figure into '
          'the expense would let a market movement swing the reported profit '
          'of a company whose {operations} had not changed at all.',
          'So US GAAP uses the expected return, a long-run assumption, and the '
          'expense becomes {smooth}. The actual return still determines what '
          'the fund is worth, which is why Handout 1’s schedule used it.',
          'The difference between the two is a remeasurement. Northwind '
          'expected %s and earned %s, so %s of loss is set aside rather than '
          'charged.'
          % (money(PE.expected_asset_return), money(PE.actual_return),
             money(PE.remeasurement)),
          'It goes to other comprehensive {income}, where it joins any '
          'actuarial gains and losses on the obligation, and it may be '
          'amortised into profit in later years if the accumulated balance '
          'grows large enough.'],
         {'operations': ('Nothing the business did changed.', ''),
          'smooth': ('A long-run assumption, deliberately.', ''),
          'income': ('The other half, from Volume 9.',
                     'Students expect the actual return in the expense. It is '
                     'in the fund and not in the charge, which is the whole '
                     'point of smoothing.')},
         ['markets', 'volatile', 'profit']),
        ('fig', 'matrix', 'Expected against actual, and where each one lands',
         ['Expected return %s' % money(PE.expected_asset_return),
          'Actual return %s' % money(PE.actual_return),
          'The %s difference' % money(PE.remeasurement)],
         ['What it is', 'Where it goes'],
         [['A long-run assumption set by management',
           'Into net periodic pension cost, as a deduction'],
          ['What the fund really earned this year',
           'Into the plan assets schedule of Handout 1'],
          ['A remeasurement',
           'Other comprehensive income, not profit']],
         'This is the component IFRS deleted. Volume 12 showed the %s it '
         'removed from the US GAAP charge by using one rate on one net '
         'balance.' % money(PE.asset_rate_gap)),

        ('part', 'Part 3 · The plan amendment',
         'prior service cost, spread'),

        ('task', 'Exercise 2C',
         'Account for the prior service cost arising from the plan amendment.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 1 Exercise 1B, where the amendment raised the obligation.'],
         ['The amendment raised the obligation by %s immediately, for service '
          'employees had already given.' % money(PE.past_service_cost),
          'US GAAP does not charge that to profit at once. Ask what the '
          'company expects to get for it.',
          'The remaining service period is %d years, and the last blank is '
          'what IFRS does with the same amount.' % PE.remaining_service]),
        ('fill', 'R2',
         ['The amendment improved benefits for service employees had already '
          'given, so the obligation rose by %s the moment it was signed. '
          'Handout 1’s schedule shows the whole {amount}.'
          % money(PE.past_service_cost),
          'The expense does not. US GAAP reasons that the company made the '
          'amendment to retain and motivate its employees, so the benefit of '
          'it accrues over their remaining {service} rather than on the day '
          'the board approved it.',
          'So the %s is set aside in other comprehensive income and brought '
          'into profit at %s a year over %d years. This year’s charge is '
          '{%s}.'
          % (money(PE.past_service_cost), money(PE.gaap_amortisation),
             PE.remaining_service, money(PE.gaap_amortisation)),
          'IFRS disagrees entirely and charges the whole %s to profit at '
          '{once}, which Volume 12 identified as one of the three pension '
          'differences.' % money(PE.past_service_cost)],
         {'amount': ('The obligation rose in full, immediately.', ''),
          'service': ('The years the company expects to benefit.', ''),
          money(PE.gaap_amortisation): ('%s over %d years.'
                                        % (money(PE.past_service_cost),
                                           PE.remaining_service), ''),
          'once': ('In full, in the year of the amendment.',
                   'Students apply the US GAAP spreading under both '
                   'frameworks. IFRS has no amortisation of prior service '
                   'cost at all.')},
         ['part', 'immediately', 'deferred']),
        ('fig', 'scale',
         'UNDER US GAAP',
         ['The obligation rises by %s at once'
          % money(PE.past_service_cost),
          'The charge rises by %s a year' % money(PE.gaap_amortisation),
          'The rest waits in other comprehensive income',
          'Spread over %d years of remaining service'
          % PE.remaining_service],
         'UNDER IFRS',
         ['The obligation rises by %s at once'
          % money(PE.past_service_cost),
          'The charge rises by %s at once'
          % money(PE.past_service_cost),
          'Nothing waits anywhere',
          'Volume 12 Handout 1 worked this contrast']),

        ('part', 'Part 4 · The corridor',
         'why the fifth component is nil this year'),

        ('task', 'Exercise 2D',
         'Apply the corridor test to Northwind’s net loss.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2B, and Handout 1 for the two opening balances.'],
         ['The corridor is ten per cent of the larger of the obligation and '
          'the plan assets. Work out which is larger first.',
          'Ten per cent of %s is %s, and Northwind’s accumulated net loss is '
          '%s.' % (money(PE.dbo), money(PE.dbo * 0.1),
                   money(PE.remeasurement)),
          'Only the excess over the corridor is amortised, and here there is '
          'no excess at all.']),
        ('sortgrid',
         ['Statement about the corridor', 'TRUE', 'FALSE'],
         ['The corridor is ten per cent of the larger of the obligation and '
          'the plan assets',
          'Northwind’s corridor is %s' % money(PE.dbo * 0.1),
          'Only the net loss in excess of the corridor is amortised',
          'Northwind must amortise %s this year' % money(PE.remeasurement),
          'A net loss inside the corridor is never charged to profit while it '
          'stays there',
          'IFRS applies the same corridor'],
         ['TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'The fourth is the one the figures answer: a %s loss against a %s '
         'corridor leaves nothing to amortise, which is why that component is '
         'nil.' % (money(PE.remeasurement), money(PE.dbo * 0.1))),
        ('fig', 'fork', 'Is any of the net loss amortised this year?',
         [('Is the accumulated net loss above ten per cent of the larger '
           'balance?',
           'NO → nothing is amortised, and the loss stays in equity', OK),
          ('If it is above the corridor, how much is amortised?',
           'The excess, divided by the remaining service period', SLATE),
          ('Does IFRS use this test?',
           'NO → remeasurements stay in equity permanently', RUST)]),

        ('part', 'Part 5 · Assembling the charge',
         'five components, one figure'),

        ('task', 'Exercise 2E',
         'Compute net periodic pension cost and say where each component '
         'lands.',
         'Complete both grids. The second asks where each one goes.',
         ['Exercises 2A, 2B, 2C and 2D.'],
         ['Four of the five components have figures and the fifth is nil, as '
          'Exercise 2D established.',
          'Watch the sign on the expected return: it is the only component '
          'that reduces the charge.',
          'Your total must come to %s, which is what Volume 12 Handout 1 '
          'already reported.' % money(PE.gaap_cost)]),
        ('table', _COSTH, _cost(blank=True), SLATE, _COSTW),
        ('answers', 9),
        ('table', _WHEREH, _where(blank=True), PROM, _WHEREW),
        ('answers', 10),
        ('fig', 'bridge',
         'Service cost, the only component about this year’s work',
         PE.service_cost,
         [('Interest on the obligation at %s' % _pc(PE.discount_rate),
           PE.interest_cost),
          ('Expected return on the fund at %s' % _pc(PE.expected_return),
           -PE.expected_asset_return),
          ('Prior service cost amortised', PE.gaap_amortisation)],
         'Net periodic pension cost', PE.gaap_cost),

        ('watch', 'The contribution and the expense are different numbers and '
                  'neither determines the other. Northwind paid %s into the '
                  'fund and charged %s to profit, and a question that offers '
                  'you the contribution as the expense is offering the '
                  'commonest distractor on the topic.'
                  % (money(PE.contributions), money(PE.gaap_cost))),

        ('part', 'Part 6 · Exam pitch', 'the questions as an exam would set '
                                        'them'),

        ('mcq', 'Service cost is:',
         ['The cash paid into the pension fund',
          'The present value of the benefit earned by this year’s service',
          'The interest on the obligation',
          'The return expected on plan assets'],
         1, 'Level A',
         'The only component that relates to work done in the period. (A) is '
         'the contribution, which is a funding decision rather than a '
         'measurement.'),

        ('mcq', 'Net periodic pension cost is reduced by:',
         ['Service cost', 'The expected return on plan assets',
          'Interest cost', 'Amortisation of prior service cost'],
         1, 'Level A',
         'The fund is expected to meet part of the obligation, so the expected '
         'return is deducted. It is the only one of the five that reduces the '
         'charge.'),

        ('mcq', 'A plan has an obligation of %s at a %s discount rate and '
                'assets of %s at a %s expected return. Interest cost less '
                'expected return is:'
         % (money(PE.dbo), _pc(PE.discount_rate),
            money(PE.plan_assets), _pc(PE.expected_return)),
         [money(PE.interest_cost + PE.expected_asset_return),
          money(PE.interest_cost - PE.expected_asset_return),
          money(PE.interest_cost), money(PE.expected_asset_return)],
         1, 'Level B',
         '%s less %s is a net credit of %s. (A) adds the two, which is the '
         'error of treating both as costs.'
         % (money(PE.interest_cost), money(PE.expected_asset_return),
            money(PE.interest_cost - PE.expected_asset_return))),

        ('mcq', 'The difference between the expected and the actual return on '
                'plan assets is:',
         ['Charged to profit immediately',
          'Recognised in other comprehensive income as a remeasurement',
          'Ignored', 'Added to the contribution'],
         1, 'Level B',
         'It is set aside so that market volatility does not swing reported '
         'profit. (A) is the treatment the actual return would get if the '
         'expected return were not used at all.'),

        ('mcq', 'Under the corridor approach, net gains and losses are '
                'amortised:',
         ['In full, every year',
          'Only to the extent they exceed ten per cent of the larger of the '
          'obligation and the plan assets',
          'Only when the plan is wound up',
          'Over ten years, regardless of size'],
         1, 'Level C',
         'Nothing inside the corridor is ever amortised, which is how plans '
         'carry unrecognised losses for years. (D) confuses the ten per cent '
         'threshold with a ten-year period.'),

        ('mcq', 'A plan amendment increases the obligation by %s for past '
                'service. Under US GAAP the charge to profit in that year is:'
         % money(PE.past_service_cost),
         [money(PE.past_service_cost), money(PE.gaap_amortisation),
          'Nil', money(PE.past_service_cost / 2)],
         1, 'Level B',
         '%s over the %d-year remaining service period. (A) is the IFRS '
         'answer, and the pair was one of Volume 12’s three pension '
         'differences.'
         % (money(PE.past_service_cost), PE.remaining_service)),

        ('mcq', 'A company contributes %s to its plan and computes a net '
                'periodic pension cost of %s. The income statement charges:'
         % (money(PE.contributions), money(PE.gaap_cost)),
         [money(PE.contributions), money(PE.gaap_cost),
          money(PE.contributions - PE.gaap_cost), 'The larger of the two'],
         1, 'Level C',
         'The expense is the computed cost; the contribution is a cash flow '
         'and funds the obligation rather than measuring it. Under a defined '
         'contribution plan the two would be the same, which is exactly why '
         'the distinction is tested here.'),

        ('tip', 'Write the five components as a list before you compute '
                'anything, with a plus or minus against each. Three add, one '
                'subtracts, and the fifth is usually nil. Most errors on this '
                'topic are sign errors on the expected return.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2E · the five components'),
        ('table', _COSTH, _cost(), SLATE, _COSTW),
        ('h3', 'Exercise 2E · where each component lands'),
        ('table', _WHEREH, _where(), PROM, _WHEREW),
        ('prose', 'The %s net charge is the figure Volume 12 Handout 1 '
                  'reported under US GAAP and never derived. Its IFRS '
                  'counterpart of %s differs by %s, which is the %s of plan '
                  'assets at the two percentage points between the expected '
                  'return and the discount rate, plus the %s of prior service '
                  'cost IFRS charges at once and US GAAP has not yet '
                  'amortised.'
                  % (money(PE.gaap_cost), money(PE.ifrs_cost),
                     money(PE.ifrs_cost - PE.gaap_cost),
                     money(PE.plan_assets),
                     money(PE.past_service_cost - PE.gaap_amortisation)),
         'R2'),
        ('prose', 'The fifth component is nil only because the accumulated net '
                  'loss of %s sits inside the %s corridor. A year or two of '
                  'poor returns would take it outside, and the component would '
                  'start to bite without anything else about the plan having '
                  'changed.' % (money(PE.remeasurement),
                                money(PE.dbo * 0.1)), 'R2'),
    ],
)
