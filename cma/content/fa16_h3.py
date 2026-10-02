# -*- coding: utf-8 -*-
"""Volume 16, Handout 3 — Funded Status on the Balance Sheet, and What Goes
to OCI.

Outside the CMA. The last of the three pension handouts: where the figures
of Handouts 1 and 2 are actually reported.
"""
from fadata import N, PE, Y
from data import money, num

PROM, FUND, SLATE, RISK = '6D3F7E', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_SHEETH = ['Where the pension appears at 31 December %s' % Y, 'Amount',
           'Where']
_SHEETW = [44, 26, 30]


def _sheet(blank=False):
    def c(v):
        return '' if blank else v
    deferred = PE.remeasurement + (PE.past_service_cost
                                   - PE.gaap_amortisation)
    return [
        ['Projected benefit obligation', money(PE.dbo_closing),
         c('Notes only')],
        ['Plan assets at fair value', money(PE.assets_closing),
         c('Notes only')],
        ['Funded status, reported as a liability',
         c(money(PE.funded_status_closing)), c('Balance sheet')],
        ['Net periodic pension cost', money(PE.gaap_cost),
         c('Income statement')],
        ['Remeasurement loss on plan assets', money(PE.remeasurement),
         c('Other comprehensive income')],
        ['Prior service cost not yet amortised',
         money(PE.past_service_cost - PE.gaap_amortisation),
         c('Other comprehensive income')],
        ['Accumulated in equity, awaiting amortisation',
         c(money(deferred)), c('Accumulated OCI')],
    ]


_EVENTH = ['Event', 'What it is', 'Effect']
_EVENTW = [24, 42, 34]


def _event(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Settlement',
         c('The employer discharges part of the obligation irrevocably'),
         c('Recognise the related deferred gain or loss at once')],
        ['Curtailment',
         c('Future service under the plan is significantly reduced'),
         c('Recognise the related prior service cost at once')],
        ['Plan amendment', c('Benefits are improved for past service'),
         c('Obligation rises now; the cost is amortised')],
        ['Contribution', c('Cash paid into the fund'),
         c('Plan assets rise; the expense does not change')],
    ]


HANDOUT = dict(
    n=3,
    title='Funded Status on the Balance Sheet, and What Goes to OCI',
    subtitle='Three large figures and one small one. The balance sheet reports '
             'the %s, and the notes carry everything that explains it.'
             % money(PE.funded_status_closing),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the presentation, R3 for settlements and '
                 'curtailments, which an exam states in its own terms.',
        collocations=['report the funded status on the balance sheet',
                      'defer a remeasurement in equity',
                      'amortise an accumulated loss into profit',
                      'settle part of an obligation',
                      'curtail a plan',
                      'disclose the gross figures in the notes'],
        pairs=['balance sheet / notes',
               'profit / other comprehensive income',
               'settlement / curtailment',
               'recognised / deferred'],
        nots=['Deferring an amount in other comprehensive income is not '
              'hiding it. The whole funded status is on the balance sheet '
              'either way.',
              'A curtailment is not a settlement. One reduces future service, '
              'the other discharges an existing obligation.'],
    ),

    objectives=[
        'Report the funded status on the balance sheet.',
        'Say which pension figures reach profit and which reach equity.',
        'Roll the accumulated other comprehensive income balance forward.',
        'Distinguish a settlement from a curtailment.',
        'Say what a reader learns from the notes that the statements do not '
        'show.',
    ],

    terms=[
        ('settlement',
         'A transaction that irrevocably discharges part of a pension '
         'obligation, such as buying annuities for retirees.',
         'التسوية',
         'The deferred gains and losses relating to the part settled are '
         'recognised at once, because there is no longer a future over which '
         'to spread them.'),
        ('curtailment',
         'An event that significantly reduces the future service of employees '
         'covered by a plan, such as closing a division.',
         'التقليص',
         'Prior service cost relating to the lost service is recognised '
         'immediately, for the same reason.'),
        ('other post-employment benefits',
         'Benefits other than pensions promised to retirees, most commonly '
         'health care.', 'منافع ما بعد التوظيف الأخرى',
         'Accounted for on the same model as a pension, and often larger, '
         'because health costs are harder to forecast than mortality.'),
    ],

    blocks=[
        ('scene', 'Four numbers, one line', [
            'Handout 1 produced an obligation of %s and plan assets of %s. '
            'Handout 2 produced a charge of %s and a remeasurement of %s.'
            % (money(PE.dbo_closing), money(PE.assets_closing),
               money(PE.gaap_cost), money(PE.remeasurement)),
            'Only one of those reaches the balance sheet: the %s funded '
            'status, as a liability.'
            % money(PE.funded_status_closing),
            'The charge goes to profit, the remeasurement and the unamortised '
            'prior service cost go to other comprehensive income, and the two '
            'gross figures go to the notes.',
            'This handout places each one, and then deals with the two events '
            'that bring the deferred amounts forward.',
        ]),
        ('fig', 'ranked', 'Four figures, and where each goes',
         [('Projected benefit obligation', PE.dbo_closing,
           money(PE.dbo_closing), PROM),
          ('Plan assets', PE.assets_closing, money(PE.assets_closing),
           FUND),
          ('Funded status, on the balance sheet',
           abs(PE.funded_status_closing),
           money(PE.funded_status_closing), RUST),
          ('Net periodic pension cost, in profit', PE.gaap_cost,
           money(PE.gaap_cost), SLATE)],
         'The two largest figures are the two a reader of the balance sheet '
         'never sees. That is the single most important thing about pension '
         'presentation.',
         'At 31 December %s' % Y),

        ('part', 'Part 1 · The balance sheet',
         'one line, and it is a net one'),

        ('task', 'Exercise 3A',
         'Place each pension figure in the statement where it belongs.',
         'Complete both right-hand columns.',
         ['Handout 1 Exercise 1D, for the funded status.',
          'Handout 2 Exercise 2E, for the charge and the remeasurement.'],
         ['Two rows go to the notes, one to the balance sheet, one to profit '
          'and two to other comprehensive income.',
          'The last row is the accumulated balance of the two deferred '
          'amounts, and it belongs in equity.',
          'Check the signs: an underfunded plan gives a negative funded '
          'status.']),
        ('table', _SHEETH, _sheet(blank=True), SLATE, _SHEETW),
        ('answers', 8),
        ('fig', 'matrix', 'The three places a pension figure can go',
         ['The balance sheet', 'Profit', 'Other comprehensive income'],
         ['What goes there', 'Amount this year'],
         [['The funded status, net', money(PE.funded_status_closing)],
          ['Net periodic pension cost', money(PE.gaap_cost)],
          ['Remeasurements and unamortised prior service cost',
           money(PE.remeasurement + PE.past_service_cost
                 - PE.gaap_amortisation)]],
         'Nothing is left out of the statements. What differs is which '
         'statement, and the gross obligation and fund are in the notes '
         'rather than on the face of any of them.'),

        ('part', 'Part 2 · Why anything is deferred at all',
         'volatility, and the price of smoothing it'),

        ('task', 'Exercise 3B',
         'Say why some pension amounts are deferred in equity.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 2 Exercises 2B and 2C.',
          'Volume 9 Handout 2, on other comprehensive income.'],
         ['A pension obligation measured on assumptions about salaries and '
          'mortality moves every year. Ask what charging all of that movement '
          'to profit would do.',
          'The %s remeasurement and the %s of unamortised prior service cost '
          'are both deferred.'
          % (money(PE.remeasurement),
             money(PE.past_service_cost - PE.gaap_amortisation)),
          'The last blank is what is not deferred, and it is the figure on the '
          'balance sheet.']),
        ('fill', 'R2',
         ['A pension obligation rests on assumptions about salaries, mortality '
          'and discount rates, and every one of them is revised each year. '
          'Charging the whole movement to profit would make the reported '
          'result swing on things management does not {control}.',
          'So two kinds of amount are set aside in other comprehensive income: '
          'remeasurements, which this year are %s, and the part of the prior '
          'service cost not yet {amortised}, which is %s.'
          % (money(PE.remeasurement),
             money(PE.past_service_cost - PE.gaap_amortisation)),
          'They are not lost. Both sit in accumulated other comprehensive '
          'income and are brought into {profit} in later periods, the prior '
          'service cost on a schedule and the remeasurements through the '
          'corridor.',
          'And nothing is hidden from the balance sheet. The full %s funded '
          'status is reported whatever has been deferred, because the deferral '
          'affects the {timing} of the charge and never the liability.'
          % money(PE.funded_status_closing)],
         {'control': ('Assumptions move; operations may not.', ''),
          'amortised': ('The rest waits in equity.', ''),
          'profit': ('Deferred, not deleted.', ''),
          'timing': ('The liability is complete either way.',
                     'Students think deferral keeps the obligation off the '
                     'balance sheet. It keeps the charge out of this year’s '
                     'profit, which is a different thing.')},
         ['measure', 'funded', 'amount']),
        ('fig', 'scale',
         'WHAT REACHES PROFIT NOW',
         ['Service cost %s' % money(PE.service_cost),
          'Interest cost %s' % money(PE.interest_cost),
          'Less the expected return %s'
          % money(PE.expected_asset_return),
          'Plus %s of amortisation' % money(PE.gaap_amortisation)],
         'WHAT WAITS IN EQUITY',
         ['The %s remeasurement' % money(PE.remeasurement),
          'The %s of prior service cost not yet amortised'
          % money(PE.past_service_cost - PE.gaap_amortisation),
          'Brought into profit in later years',
          'The balance sheet is unaffected either way']),

        ('part', 'Part 3 · Two events that bring it forward',
         'settlement and curtailment'),

        ('prose', 'Deferral assumes a future over which to spread the amount. '
                  'Two events remove that future: a settlement discharges part '
                  'of the obligation outright, and a curtailment cuts short '
                  'the service the deferral was being spread over.', 'R3'),

        ('task', 'Exercise 3C',
         'Distinguish a settlement from a curtailment and say what each one '
         'triggers.',
         'Complete both right-hand columns.',
         ['The paragraph above, and Handout 2 Exercise 2C.'],
         ['One of the two is about the obligation and the other is about '
          'future service.',
          'Buying annuities that discharge the pensions of retired employees '
          'is the classic settlement; closing a division is the classic '
          'curtailment.',
          'Two of the four rows are not settlements or curtailments at all, '
          'and one of those two changes no expense.']),
        ('table', _EVENTH, _event(blank=True), PROM, _EVENTW),
        ('answers', 8),
        ('fig', 'fork', 'Does this event accelerate a deferred amount?',
         [('Has part of the obligation been discharged irrevocably?',
           'YES → a settlement, and the related deferred gain or loss is '
           'recognised now', RUST),
          ('Has future service under the plan been significantly reduced?',
           'YES → a curtailment, and the related prior service cost is '
           'recognised now', RISK),
          ('Was it a contribution or an ordinary amendment?',
           'NO acceleration; the normal schedules continue', OK)]),

        ('part', 'Part 4 · The other promise',
         'post-employment benefits that are not pensions'),

        ('task', 'Exercise 3D',
         'Say how other post-employment benefits differ from pensions.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3C.'],
         ['Many employers promise retirees health cover as well as a pension. '
          'Ask whether the accounting model changes.',
          'What differs is not the model but the difficulty of the '
          'assumptions, and one of them in particular.',
          'The last blank is why these obligations are often larger than the '
          'pension itself.']),
        ('fill', 'R2',
         ['An employer that promises retirees health cover has made the same '
          'kind of promise as a pension: a benefit payable later, in return '
          'for service given {now}.',
          'So the model is the {same}. An obligation is measured, a fund is '
          'measured if one exists, the funded status goes on the balance '
          'sheet, and a five-component cost goes through profit.',
          'What differs is the assumptions. Mortality can be forecast from '
          'long experience; medical {cost} inflation cannot, and it has run '
          'well above general inflation for decades.',
          'That is why these obligations are often {larger} than the pension '
          'they sit beside, and why many employers have closed them to new '
          'entrants rather than keep promising them.'],
         {'now': ('Earned by current service, paid later.', ''),
          'same': ('One model, two kinds of promise.', ''),
          'cost': ('The assumption nobody can forecast well.', ''),
          'larger': ('Harder to forecast and often bigger.',
                     'Students expect a health promise to be a footnote. For '
                     'some employers it exceeds the pension obligation.')},
         ['later', 'different', 'smaller']),
        ('fig', 'buckets', 'Pensions and health care, side by side',
         [('THE SAME', OK,
           ['An obligation measured actuarially',
            'Funded status on the balance sheet',
            'A five-component cost through profit']),
          ('DIFFERENT', RISK,
           ['Medical cost inflation, not mortality',
            'Often unfunded, so no plan assets',
            'Harder to estimate, and often larger']),
          ('WHAT A READER SHOULD DO', SLATE,
           ['Read the note, not just the balance sheet',
            'Look at the assumptions, especially the trend rate',
            'Ask whether the plan is closed to new entrants'])],
         'The third column is the point of this volume. A reader who stops at '
         'the %s on the balance sheet has seen the smallest number in the '
         'whole disclosure.' % money(PE.funded_status_closing)),

        ('watch', 'The gross obligation and the plan assets are disclosed and '
                  'not reported. A company with a %s obligation and %s of '
                  'assets shows a %s liability, and a reader who never opens '
                  'the note has no idea of the scale of either.'
                  % (money(PE.dbo_closing), money(PE.assets_closing),
                     money(-PE.funded_status_closing))),

        ('part', 'Part 5 · Exam pitch', 'the questions as an exam would set '
                                        'them'),

        ('mcq', 'The amount reported on the balance sheet for a defined '
                'benefit plan is:',
         ['The projected benefit obligation',
          'The funded status of the plan',
          'The plan assets', 'The net periodic pension cost'],
         1, 'Level A',
         'Assets less obligation, as one net figure. (A) would report the '
         'obligation gross and ignore the fund set aside to meet it.'),

        ('mcq', 'A plan has an obligation of %s and assets of %s. The balance '
                'sheet reports:' % (money(PE.dbo_closing),
                                    money(PE.assets_closing)),
         ['An asset of %s' % money(PE.assets_closing),
          'A liability of %s' % money(-PE.funded_status_closing),
          'A liability of %s' % money(PE.dbo_closing),
          'Both figures, gross'],
         1, 'Level B',
         '%s less %s is a shortfall of %s. (D) is how it is disclosed in the '
         'notes and not how it is reported on the face.'
         % (money(PE.assets_closing), money(PE.dbo_closing),
            money(-PE.funded_status_closing))),

        ('mcq', 'A remeasurement arising on plan assets is reported in:',
         ['Profit for the period',
          'Other comprehensive income',
          'The balance sheet only',
          'The notes only'],
         1, 'Level B',
         'Set aside so market volatility does not swing reported profit, and '
         'brought into profit later through the corridor. (D) would leave it '
         'out of the statements altogether.'),

        ('mcq', 'A company buys annuities that irrevocably discharge the '
                'pensions of its retired employees. This is a:',
         ['Curtailment', 'Settlement', 'Plan amendment', 'Contribution'],
         1, 'Level C',
         'Part of the obligation is discharged for good, so the deferred '
         'amounts relating to it are recognised at once. A curtailment reduces '
         'future service instead, which is the pairing being tested.'),

        ('mcq', 'A company closes a division, significantly reducing future '
                'service under its pension plan. This is a:',
         ['Settlement', 'Curtailment', 'Remeasurement', 'Contribution'],
         1, 'Level C',
         'The service over which prior service cost was being amortised has '
         'gone, so the remaining balance is recognised. (A) is the other half '
         'of the pair and concerns the obligation rather than future '
         'service.'),

        ('mcq', 'Deferring a remeasurement in other comprehensive income '
                'means that:',
         ['The liability on the balance sheet is reduced',
          'The charge to profit is delayed but the liability is reported in '
          'full',
          'The amount is never recognised',
          'The obligation is remeasured in the following year'],
         1, 'Level C',
         'Deferral affects the timing of the expense and never the funded '
         'status. (A) is the misunderstanding the whole handout exists to '
         'correct.'),

        ('mcq', 'Other post-employment benefits such as retiree health care '
                'are accounted for:',
         ['As an expense when paid',
          'On the same model as a defined benefit pension',
          'As a contingency, disclosed only',
          'Only if the plan is funded'],
         1, 'Level B',
         'Same promise, same model, harder assumptions. (A) is pay-as-you-go '
         'accounting, which is exactly what the defined benefit model replaced '
         'because it reported nothing until the cash left.'),

        ('tip', 'Three statements, three figures: the funded status on the '
                'balance sheet, the net periodic cost in profit, and the '
                'remeasurements in other comprehensive income. If a question '
                'offers you the gross obligation as a balance sheet figure, it '
                'is offering the number that belongs in the notes.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · where each figure is reported'),
        ('table', _SHEETH, _sheet(), SLATE, _SHEETW),
        ('h3', 'Exercise 3C · settlements and curtailments'),
        ('table', _EVENTH, _event(), PROM, _EVENTW),
        ('prose', 'The accumulated balance in equity is %s: the %s '
                  'remeasurement plus the %s of prior service cost not yet '
                  'amortised. Both will reach profit eventually, and neither '
                  'affects the %s on the balance sheet in the meantime.'
                  % (money(PE.remeasurement + PE.past_service_cost
                           - PE.gaap_amortisation),
                     money(PE.remeasurement),
                     money(PE.past_service_cost - PE.gaap_amortisation),
                     money(PE.funded_status_closing)), 'R2'),
        ('prose', 'This volume is outside the CMA, and it is the only one in '
                  'the seventeen of which that is wholly true. It is here '
                  'because Volume 12 Handout 1 compared a US GAAP pension '
                  'charge of %s with an IFRS one of %s, and a student who met '
                  'those figures without ever building the plan behind them '
                  'had been shown a contrast rather than taught a topic.'
                  % (money(PE.gaap_cost), money(PE.ifrs_cost)), 'R2'),
    ],
)
