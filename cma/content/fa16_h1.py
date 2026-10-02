# -*- coding: utf-8 -*-
"""Volume 16, Handout 1 — The Promise, the Obligation and the Plan Assets.

Outside the CMA. "Pension", "defined benefit" and "post-retirement" appear
nowhere in either part's Learning Outcome Statements; this volume exists
because intermediate accounting teaches the topic and Volume 12 reports
figures it never derived.
"""
from fadata import N, PE, Y, PY
from data import money, num

PROM, FUND, SLATE, RISK = '6D3F7E', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_TWOH = ['', 'Defined contribution', 'Defined benefit']
_TWOW = [28, 36, 36]


def _two(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['What the employer promises', c('To pay in a stated amount'),
         c('To pay a stated benefit in retirement')],
        ['Who bears the investment risk', c('The employee'),
         c('The employer')],
        ['The annual expense', c('The contribution for the year'),
         c('An actuarial computation, in Handout 2')],
        ['On the balance sheet', c('Any unpaid contribution'),
         c('The funded status of the plan')],
        ['An actuary is needed', c('No'), c('Yes')],
    ]


_DBOH = ['Projected benefit obligation, %s' % Y, 'Amount']
_DBOW = [68, 32]


def _dbo(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Balance at 1 January %s' % Y, money(PE.dbo)],
        ['Service cost for the year', money(PE.service_cost)],
        ['Interest on the obligation at %s' % _pc(PE.discount_rate),
         c(money(PE.interest_cost))],
        ['Past service cost from the plan amendment',
         money(PE.past_service_cost)],
        ['Benefits paid to retirees', money(-PE.benefits_paid)],
        ['Balance at 31 December %s' % Y, c(money(PE.dbo_closing))],
    ]


_ASSETH = ['Plan assets, %s' % Y, 'Amount']
_ASSETW = [68, 32]


def _assets(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Fair value at 1 January %s' % Y, money(PE.plan_assets)],
        ['Actual return earned on the assets', money(PE.actual_return)],
        ['Contributions paid in by Northwind', money(PE.contributions)],
        ['Benefits paid to retirees', money(-PE.benefits_paid)],
        ['Fair value at 31 December %s' % Y, c(money(PE.assets_closing))],
    ]


HANDOUT = dict(
    n=1,
    title='The Promise, the Obligation and the Plan Assets',
    subtitle='Northwind owes its retirees %s and holds %s to pay them with. '
             'The gap is the only figure that reaches the balance sheet.'
             % (money(PE.dbo), money(PE.plan_assets)),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the promise is being described, R2 once the two '
                 'roll-forwards are being built.',
        collocations=['promise a benefit in retirement',
                      'fund a plan by contributing to it',
                      'measure an obligation actuarially',
                      'earn a return on plan assets',
                      'pay benefits out of the fund',
                      'report the funded status'],
        pairs=['defined contribution / defined benefit',
               'obligation / plan assets',
               'funded / underfunded',
               'contribution / expense'],
        nots=['Plan assets are not Northwind’s assets. They are held in a '
              'separate fund for the retirees and never appear among its own.',
              'A contribution is not the expense. The two are different '
              'numbers and Handout 2 computes the second.'],
    ),

    objectives=[
        'Distinguish a defined contribution plan from a defined benefit one.',
        'Say who bears the investment risk under each.',
        'Roll the projected benefit obligation forward.',
        'Roll the plan assets forward.',
        'Compute the funded status of the plan.',
    ],

    terms=[
        ('defined contribution plan',
         'A plan under which the employer promises only to pay a stated amount '
         'into a fund.', 'خطة المساهمات المحددة',
         'The simple case: the expense is the contribution, and nothing is '
         'measured actuarially.'),
        ('projected benefit obligation',
         'The present value of the benefits employees have already earned, '
         'measured using expected future salary levels.',
         'التزام المنافع المتوقعة',
         'Present value, so Volume 13 is doing the work. The salary projection '
         'is what makes it an actuary’s figure rather than an accountant’s.'),
        ('plan assets',
         'The investments held in a separate fund from which the benefits will '
         'be paid.', 'أصول الخطة',
         'Measured at fair value and held outside the employer. They are never '
         'reported among its own assets.'),
        ('funded status',
         'Plan assets less the projected benefit obligation.',
         'الوضع التمويلي للخطة',
         'The single figure that reaches the balance sheet. Negative means '
         'underfunded, and a liability.'),
        ('actuary',
         'A specialist who estimates the obligation from assumptions about '
         'salaries, service, mortality and discount rates.',
         'الخبير الاكتواري',
         'The accountant does not compute the obligation. The exam expects you '
         'to know what the assumptions are and which way each one pushes.'),
        ('vested benefits',
         'Benefits an employee is entitled to keep whether or not they stay '
         'with the employer.', 'المنافع المكتسبة',
         'A subset of the obligation. Benefits not yet vested are still '
         'included, because the employer expects most employees to stay.'),
    ],

    blocks=[
        ('scene', 'A promise made thirty years early', [
            'Northwind promises its employees a pension based on their final '
            'salary and years of service. The promise is made now and the cash '
            'leaves decades later.',
            'An actuary values what has already been earned at %s, and the '
            'fund set aside to pay it holds %s.'
            % (money(PE.dbo), money(PE.plan_assets)),
            'Neither figure appears on the balance sheet. Only the gap does: '
            '%s, reported as a liability because the plan is underfunded.'
            % money(PE.net_liability),
            'Volume 12 Handout 1 used these numbers to compare US GAAP with '
            'IFRS. This volume builds them.',
        ]),
        ('fig', 'ranked', 'The plan at 1 January %s' % Y,
         [('Projected benefit obligation', PE.dbo, money(PE.dbo), PROM),
          ('Plan assets, at fair value', PE.plan_assets,
           money(PE.plan_assets), FUND),
          ('Funded status, reported as a liability',
           abs(PE.net_liability), money(PE.net_liability), RUST)],
         'The first two bars are disclosed in the notes and the third is on '
         'the balance sheet. A reader who looks only at the statements sees '
         'the smallest of the three.',
         '%s · a defined benefit plan' % N.short),

        ('part', 'Part 1 · Two kinds of promise',
         'and who carries the risk'),

        ('task', 'Exercise 1A',
         'Distinguish the two kinds of plan and say who bears the risk under '
         'each.',
         'Complete both right-hand columns.',
         ['Volume 1 Handout 2, on what makes something a liability.'],
         ['Under one kind the employer’s obligation ends when the cheque is '
          'paid into the fund. Under the other it does not.',
          'Ask what happens if the fund’s investments perform badly, and who '
          'is worse off in each case.',
          'The last row follows from the others: only one of the two needs '
          'anybody to estimate anything.']),
        ('table', _TWOH, _two(blank=True), SLATE, _TWOW),
        ('answers', 9),
        ('fig', 'scale',
         'DEFINED CONTRIBUTION',
         ['The employer promises an amount in',
          'The employee gets whatever the fund earns',
          'The employee bears the investment risk',
          'The expense is the contribution, and that is all'],
         'DEFINED BENEFIT',
         ['The employer promises an amount out',
          'The benefit is fixed whatever the fund earns',
          'The employer bears the investment risk',
          'The expense takes an actuary and Handout 2']),

        ('part', 'Part 2 · What is owed',
         'the obligation, rolled forward'),

        ('prose', 'The obligation grows for two reasons every year. Employees '
                  'earn another year of benefit, which is the service cost; '
                  'and the whole balance comes one year closer to payment, so '
                  'the discount unwinds, which is the interest cost. Benefits '
                  'actually paid reduce it.', 'R2'),

        ('task', 'Exercise 1B',
         'Roll the projected benefit obligation forward for the year.',
         'Complete the schedule. Three figures are given.',
         ['The paragraph above, and Volume 13 Handout 1 on discounting.'],
         ['Interest is %s of the opening %s, exactly as it was on the lease '
          'liability in Volume 7.'
          % (_pc(PE.discount_rate), money(PE.dbo)),
          'The plan was amended during the year, which added %s for service '
          'employees had already given.' % money(PE.past_service_cost),
          'Benefits paid reduce the obligation and the fund by the same %s, '
          'so watch for that figure again in Exercise 1C.'
          % money(PE.benefits_paid)]),
        ('table', _DBOH, _dbo(blank=True), PROM, _DBOW),
        ('answers', 2),
        ('fig', 'bridge',
         'Obligation at 1 January', PE.dbo,
         [('Service cost, another year earned', PE.service_cost),
          ('Interest at %s, the discount unwinding'
           % _pc(PE.discount_rate), PE.interest_cost),
          ('Past service cost from the amendment', PE.past_service_cost),
          ('Benefits paid to retirees', -PE.benefits_paid)],
         'Obligation at 31 December', PE.dbo_closing),

        ('part', 'Part 3 · What is set aside',
         'the fund, rolled forward'),

        ('task', 'Exercise 1C',
         'Roll the plan assets forward and say why they are not Northwind’s '
         'assets.',
         'Read and complete, then complete the schedule underneath.',
         ['Exercise 1B.'],
         ['The fund grows by what it earns and by what Northwind pays in, and '
          'shrinks by what it pays out.',
          'The %s of benefits paid appears in both schedules, reducing the '
          'obligation and the fund together.' % money(PE.benefits_paid),
          'The last blank is why none of the %s appears among Northwind’s own '
          'assets.' % money(PE.plan_assets)]),
        ('fill', 'R2',
         ['The plan assets are held in a fund that is legally {separate} from '
          'Northwind. The company cannot spend them, cannot pledge them, and '
          'gets them back only in the rare case of a surplus on wind-up.',
          'So they fail the definition of an asset of the company, and none of '
          'the %s appears among its own. They are {netted} against the '
          'obligation instead, and only the difference is reported.'
          % money(PE.plan_assets),
          'The fund grows by the return it {earns} and by the contributions '
          'Northwind pays in, and falls by the benefits paid out. This year '
          'that is %s, %s and %s.'
          % (money(PE.actual_return), money(PE.contributions),
             money(PE.benefits_paid)),
          'Note that benefits paid reduce the fund and the obligation by the '
          'same amount, so paying a pensioner changes the funded status by '
          '{nothing} at all.'],
         {'separate': ('A trust, outside the company.', ''),
          'netted': ('One figure on the balance sheet, not two.', ''),
          'earns': ('Actual return, whatever it turned out to be.', ''),
          'nothing': ('Both sides fall by the same amount.',
                      'Students expect paying a pension to improve the '
                      'position. It settles part of the obligation with part '
                      'of the fund and leaves the gap where it was.')},
         ['owned', 'added', 'promised']),
        ('table', _ASSETH, _assets(blank=True), FUND, _ASSETW),
        ('answers', 1),
        ('fig', 'bridge',
         'Plan assets at 1 January', PE.plan_assets,
         [('Actual return earned on the fund', PE.actual_return),
          ('Contributions paid in by Northwind', PE.contributions),
          ('Benefits paid to retirees', -PE.benefits_paid)],
         'Plan assets at 31 December', PE.assets_closing),

        ('part', 'Part 4 · The one figure that is reported',
         'funded status'),

        ('task', 'Exercise 1D',
         'Compute the funded status at both ends of the year.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercises 1B and 1C.'],
         ['Funded status is plan assets less the obligation, in that order, so '
          'an underfunded plan gives a negative figure.',
          'At 1 January it is %s less %s.'
          % (money(PE.plan_assets), money(PE.dbo)),
          'At 31 December use your two closing balances, and notice whether '
          'the position improved or worsened.']),
        ('fill', 'R2',
         ['Funded status is plan assets {less} the obligation. At 1 January '
          'that is %s less %s, a shortfall of %s.'
          % (money(PE.plan_assets), money(PE.dbo),
             money(PE.net_liability)),
          'By 31 December the obligation has grown to %s and the fund to %s, '
          'so the shortfall has {widened} to %s.'
          % (money(PE.dbo_closing), money(PE.assets_closing),
             money(-PE.funded_status_closing)),
          'That single figure is what the balance sheet reports, as a '
          '{liability} because the plan is underfunded. A plan in surplus '
          'would report an asset, subject to a limit on how much of a surplus '
          'can be recognised.',
          'Neither the %s nor the %s appears on the face of anything. Both are '
          'given in the {notes}, which is why a reader who ignores them sees '
          'only a fraction of what the company has promised.'
          % (money(PE.dbo_closing), money(PE.assets_closing))],
         {'less': ('Assets first, so underfunded is negative.', ''),
          'widened': ('The obligation grew faster than the fund.', ''),
          'liability': ('An underfunded plan is an obligation.', ''),
          'notes': ('Disclosed, not on the face.',
                    'Students read the balance sheet figure as the whole '
                    'pension story. It is the difference between two much '
                    'larger numbers.')},
         ['plus', 'narrowed', 'asset']),
        ('fig', 'matrix', 'What is reported and what is disclosed',
         ['Projected benefit obligation', 'Plan assets', 'Funded status'],
         ['At 31 December %s' % Y, 'Where it appears'],
         [[money(PE.dbo_closing), 'In the notes only'],
          [money(PE.assets_closing), 'In the notes only'],
          [money(PE.funded_status_closing),
           'On the balance sheet, as a liability']],
         'A %s shortfall is the net of two figures above %s each. Small '
         'changes in either assumption move the reported liability a long '
         'way.' % (money(-PE.funded_status_closing), money(2_000_000))),

        ('part', 'Part 5 · The assumptions behind the obligation',
         'where the estimate really lives'),

        ('task', 'Exercise 1E',
         'Say which way each actuarial assumption pushes the obligation.',
         'Sort each change into the column that says what it does.',
         ['Exercise 1D, and Volume 13 Handout 1 on what a higher rate does to '
          'a present value.'],
         ['The obligation is a present value, so a higher discount rate makes '
          'it smaller. That is Volume 13, not pensions.',
          'Anything that raises the benefits eventually payable raises the '
          'obligation: higher salaries, longer lives, more generous terms.',
          'One of the changes affects the fund rather than the obligation, and '
          'it is the one about investment returns.']),
        ('sortgrid',
         ['Change in assumption', 'RAISES THE OBLIGATION',
          'LOWERS IT', 'AFFECTS NEITHER'],
         ['A higher discount rate',
          'A higher expected rate of salary increase',
          'Retirees living longer than assumed',
          'A plan amendment improving benefits for past service',
          'A higher expected return on plan assets',
          'An employee leaving before their benefits vest'],
         ['LOWERS IT', 'RAISES THE OBLIGATION', 'RAISES THE OBLIGATION',
          'RAISES THE OBLIGATION', 'AFFECTS NEITHER', 'LOWERS IT'],
         'The discount rate is the one that catches people out. It is the only '
         'assumption on the list where a higher number gives a smaller '
         'obligation.'),
        ('fig', 'buckets', 'Three assumptions, and what each one governs',
         [('THE DISCOUNT RATE', SLATE,
           ['Set by reference to high-quality corporate bond yields',
            'Governs the interest cost and the present value',
            'A higher rate gives a smaller obligation']),
          ('SALARY AND MORTALITY', PROM,
           ['Govern how large the eventual benefits are',
            'Set by the actuary, reviewed each year',
            'A higher assumption gives a larger obligation']),
          ('THE EXPECTED RETURN', FUND,
           ['Governs the fund, not the obligation',
            'Used by US GAAP in the expense, as Volume 12 showed',
            'Removed from the IFRS computation entirely'])],
         'The third column is the one Volume 12 was about. IFRS deleted the '
         'expected return because it was a management estimate that reduced a '
         'reported expense.'),

        ('watch', 'Benefits paid reduce the obligation and the plan assets by '
                  'the same amount. A question that gives you %s of benefits '
                  'paid and asks what happened to the funded status is asking '
                  'for the word nothing.' % money(PE.benefits_paid)),

        ('part', 'Part 6 · Exam pitch', 'the questions as an exam would set '
                                        'them'),

        ('mcq', 'Under a defined contribution plan, the investment risk is '
                'borne by:',
         ['The employer', 'The employee', 'The actuary', 'The trustee'],
         1, 'Level A',
         'The employer’s obligation ends with the contribution, so whatever '
         'the fund earns is the employee’s gain or loss. Under a defined '
         'benefit plan the position reverses entirely.'),

        ('mcq', 'The projected benefit obligation is measured using:',
         ['Current salary levels',
          'Expected future salary levels',
          'The vested benefits only',
          'The contributions paid to date'],
         1, 'Level A',
         'Projected salaries are what make it the projected obligation, and '
         'what require an actuary. (C) is a narrower measure that excludes '
         'benefits the employer still expects to pay.'),

        ('mcq', 'Plan assets are reported:',
         ['Among the employer’s investments',
          'Netted against the obligation, with only the funded status on the '
          'balance sheet',
          'As a receivable from the trustee',
          'Not at all, in the statements or the notes'],
         1, 'Level B',
         'Only the net figure reaches the balance sheet, and both gross '
         'figures are disclosed. (A) would report assets the company cannot '
         'use and does not control.'),

        ('mcq', 'A plan has an obligation of %s and assets of %s. The balance '
                'sheet reports:' % (money(PE.dbo), money(PE.plan_assets)),
         ['An asset of %s' % money(PE.plan_assets),
          'A liability of %s' % money(PE.net_liability),
          'A liability of %s' % money(PE.dbo),
          'Nothing, because the plan is funded'],
         1, 'Level B',
         'Funded status is assets less obligation, so %s underfunded is a '
         'liability. (C) reports the gross obligation and ignores the fund set '
         'aside to meet it.' % money(PE.net_liability)),

        ('mcq', 'Interest cost on a pension obligation of %s at a %s discount '
                'rate is:' % (money(PE.dbo), _pc(PE.discount_rate)),
         [money(PE.interest_cost * 2), money(PE.interest_cost),
          money(PE.service_cost), money(PE.expected_asset_return)],
         1, 'Level B',
         '%s of %s. It is the discount unwinding as the payments come one year '
         'closer, which is the same mechanism as Volume 7’s lease liability.'
         % (_pc(PE.discount_rate), money(PE.dbo))),

        ('mcq', 'An increase in the discount rate used to measure a pension '
                'obligation:',
         ['Increases the obligation', 'Decreases the obligation',
          'Has no effect on the obligation',
          'Increases the plan assets'],
         1, 'Level C',
         'A present value falls when the rate rises, exactly as in Volume 13. '
         '(A) is the instinct that a higher rate means more, which is true of '
         'an investment held and false of an obligation owed.'),

        ('mcq', 'A company pays %s of benefits to retirees out of the fund. '
                'The funded status:' % money(PE.benefits_paid),
         ['Improves by %s' % money(PE.benefits_paid),
          'Is unchanged',
          'Worsens by %s' % money(PE.benefits_paid),
          'Improves by the benefits net of tax'],
         1, 'Level C',
         'The obligation and the fund both fall by %s, so the gap between them '
         'does not move. (A) is the error of looking at one schedule and not '
         'the other.' % money(PE.benefits_paid)),

        ('tip', 'Keep two schedules side by side for every pension question: '
                'the obligation and the fund. Almost every figure in the topic '
                'belongs to one of them, and the handful that appear in both — '
                'benefits paid above all — are where the marks are.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the obligation, rolled forward'),
        ('table', _DBOH, _dbo(), PROM, _DBOW),
        ('h3', 'Exercise 1C · the plan assets, rolled forward'),
        ('table', _ASSETH, _assets(), FUND, _ASSETW),
        ('h3', 'Exercise 1A · the two kinds of plan'),
        ('table', _TWOH, _two(), SLATE, _TWOW),
        ('prose', 'The %s of benefits paid is the only line that appears in '
                  'both schedules, and it appears with the same sign in each. '
                  'That is worth noticing: it is the reason paying a pension '
                  'changes the reported liability by nothing at all.'
                  % money(PE.benefits_paid), 'R2'),
        ('prose', 'The closing funded status of %s is the figure Handout 3 '
                  'puts on the balance sheet. Handout 2 computes the expense, '
                  'which is a different number again: Volume 12 already '
                  'reported it as %s under US GAAP, and this volume derives '
                  'it.' % (money(PE.funded_status_closing),
                           money(PE.gaap_cost)), 'R2'),
    ],
)
