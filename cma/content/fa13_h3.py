# -*- coding: utf-8 -*-
"""Volume 13, Handout 3 — Solving for the Missing One: Rate, Term, Payment.

Covers what Part 2 E.2 and B.2(e) assume you can already do: run the
relationship backwards when the unknown is not the present value.
"""
from fadata import N, TV, LS, Y
from data import money, num

NOW, LATER, RATE, SLATE = '1F6F8F', '2E7D5B', 'A05A2B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


def _pc1(x):
    return num(x * 100, 1) + '%'


def _f(x):
    return num(x, 5)


_SOLVEH = ['What you are given', 'What is missing', 'How to find it']
_SOLVEW = [38, 22, 40]


def _solve(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Payment, rate, number of periods', 'Present value',
         c('Multiply the payment by the annuity factor')],
        ['Present value, rate, number of periods', 'Payment',
         c('Divide the present value by the annuity factor')],
        ['Present value, payment, number of periods', 'Rate',
         c('Find the factor, then read the rate off the table')],
        ['Present value, payment, rate', 'Number of periods',
         c('Find the factor, then read the periods off the table')],
    ]


_RATEH = ['Rate', 'Five-year annuity factor', 'Value of %s a year'
          % money(LS.fin_payments)]
_RATEW = [18, 40, 42]
_RATES = [0.06, 0.07, 0.08, 0.09, 0.10]


def _rates(blank=False):
    def c(v):
        return '' if blank else v
    return [[_pc(r), c(_f(TV.pva(LS.fin_n, r))),
             c(money(LS.fin_payments * TV.pva(LS.fin_n, r)))]
            for r in _RATES]


HANDOUT = dict(
    n=3,
    title='Solving for the Missing One: Rate, Term, Payment',
    subtitle='Volume 7 told you the lease rate was %s. This handout recovers it '
             'from the schedule, which is what the exam actually asks.'
             % _pc(LS.fin_rate),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the mechanics, R3 for the exam’s own way of hiding '
                 'which variable is missing.',
        collocations=['solve for the implicit rate',
                      'read a factor off the table',
                      'interpolate between two rates',
                      'determine the required payment',
                      'convert a nominal rate to an effective rate',
                      'accumulate a sinking fund'],
        pairs=['given / missing',
               'nominal rate / effective annual rate',
               'present value / payment',
               'interpolate / read directly'],
        nots=['A factor table is not only for finding present values. Read '
              'backwards it finds the rate and the term as well.',
              'A nominal rate is not an effective rate. Quoting 8% compounded '
              'semi-annually is quoting 8.16% a year.'],
    ),

    objectives=[
        'Say which variable is missing in a given question.',
        'Solve for the payment when the present value is known.',
        'Solve for the rate implicit in a stream of payments.',
        'Solve for the number of periods.',
        'Convert a nominal rate to an effective annual rate.',
    ],

    terms=[
        ('implicit rate',
         'The rate that discounts a stream of payments back to a known present '
         'value.', 'المعدل الضمني',
         'The figure Volume 7 called the rate implicit in the lease. It is '
         'found by searching a table, not by a formula.'),
        ('interpolation',
         'Estimating a value that falls between two tabulated figures, by '
         'taking a proportion of the gap.', 'الاستيفاء',
         'Accurate enough for an exam and never exact, because the '
         'relationship between rate and factor is not a straight line.'),
        ('nominal rate',
         'An annual rate quoted without regard to how often it is compounded.',
         'المعدل الاسمي',
         'What a contract states. It is not what the borrower actually pays '
         'unless compounding is annual.'),
        ('effective annual rate',
         'The rate that, compounded once a year, gives the same result as the '
         'nominal rate at its stated frequency.', 'المعدل الفعلي السنوي',
         'Always at or above the nominal rate, and equal to it only when '
         'compounding is annual.'),
        ('sinking fund',
         'A series of deposits accumulated to meet a known future obligation.',
         'صندوق الاستهلاك',
         'The one common case where the unknown is a payment and the known '
         'figure is a future value rather than a present one.'),
    ],

    blocks=[
        ('scene', 'The question from the other side', [
            'Handouts 1 and 2 were given a payment, a rate and a term, and '
            'asked for a present value. Almost no exam question is set that '
            'way.',
            'A lease contract states the payments and the amount financed and '
            'leaves the rate unstated. A capital project states the investment '
            'and the annual saving and asks whether the return clears a hurdle.',
            'In both the relationship is the one you already have. What '
            'changes is which of the four variables is the unknown.',
            'By the end of this handout you will recover %s from Volume 7’s '
            'own figures, with no information that volume did not print.'
            % _pc(LS.fin_rate),
        ]),
        ('fig', 'matrix', 'Four variables, one relationship',
         ['Present value', 'Payment', 'Rate', 'Number of periods'],
         ['Given in', 'Asked for in'],
         [['A lease liability, a bond price, a project cost',
           'A capital budgeting question'],
          ['A loan agreement, a lease contract',
           'A sinking fund or loan amortisation question'],
          ['A hurdle rate, a market yield',
           'An implicit rate or internal rate of return question'],
          ['A contract term', 'A payback or breakeven-term question']],
         'Any three of the four determine the fourth. The whole of this '
         'handout is deciding which one the question has withheld.'),

        ('part', 'Part 1 · Which one is missing',
         'reading the question first'),

        ('task', 'Exercise 3A',
         'Say which variable each kind of question withholds, and how to find '
         'it.',
         'Complete the right-hand column. One short phrase in each cell.',
         ['Handout 2 Exercise 2B, on the annuity factor.'],
         ['Two of the four rows are a multiplication or a division by the '
          'annuity factor, and nothing more.',
          'The other two need the factor first, and then a search through the '
          'table for the row or the column that produced it.',
          'Row 1 is the only one Handouts 1 and 2 covered.']),
        ('table', _SOLVEH, _solve(blank=True), SLATE, _SOLVEW),
        ('answers', 4),
        ('fig', 'fork', 'Which variable has the question withheld?',
         [('Is the present value the unknown?',
           'Multiply the payment by the factor — Handouts 1 and 2', NOW),
          ('Is the payment the unknown?',
           'Divide the present value by the factor', RATE),
          ('Is the rate or the term the unknown?',
           'Compute the factor first, then search the table for it', LATER)]),

        ('part', 'Part 2 · Solving for the payment',
         'one division'),

        ('task', 'Exercise 3B',
         'Compute the payment a known present value supports.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 3A, and Handout 2 for the %s annuity factors.'
          % _pc(TV.rate)],
         ['Volume 7 financed %s over %d years at %s. Work out what annual '
          'payment that supports.'
          % (money(LS.fin_pv), LS.fin_n, _pc(TV.rate)),
          'If multiplying the payment by the factor gives the present value, '
          'the reverse is a single division.',
          'Your answer should be the %s Volume 7 printed, which is the check '
          'that the method is right.' % money(LS.fin_payments)]),
        ('fill', 'R2',
         ['Northwind financed %s over %d years at %s. To find the payment, '
          '{divide} the present value by the annuity factor rather than '
          'multiplying by it.'
          % (money(LS.fin_pv), LS.fin_n, _pc(TV.rate)),
          '%s divided by %s gives {%s} a year, which is exactly the payment '
          'Volume 7 used. Nothing new has been introduced; the same equation '
          'has been read in a different direction.'
          % (money(LS.fin_pv), _f(TV.pva(LS.fin_n)),
             money(LS.fin_payments)),
          'A sinking fund is the same question with a {future} value in place '
          'of a present one. A company that must repay %s in %d years divides '
          'that amount by the future value annuity factor of %s to find the '
          'annual deposit.'
          % (money(1_000_000), LS.fin_n, _f(TV.fva(LS.fin_n))),
          'In both cases the unknown is a payment and the arithmetic is one '
          'division. What changes is which {factor} you divide by.'],
         {'divide': ('The inverse of the multiplication in Handout 2.', ''),
          money(LS.fin_payments): ('%s over %s.' % (money(LS.fin_pv),
                                                    _f(TV.pva(LS.fin_n))),
                                   ''),
          'future': ('The obligation falls at the end, not the start.', ''),
          'factor': ('Present value annuity, or future value annuity.',
                     'Students use the present value factor for a sinking '
                     'fund. The money is being accumulated forward, not '
                     'discounted back.')},
         ['multiply', 'present', 'rate']),
        ('fig', 'formula', 'The same equation, three ways',
         [('Present value %s' % money(LS.fin_pv), 'Given, or asked for',
           NOW),
          ('=', '', None),
          ('Payment %s' % money(LS.fin_payments), 'Given, or asked for',
           RATE),
          ('×', '', None),
          ('Factor %s' % _f(TV.pva(LS.fin_n)),
           'From the rate and the term', LATER)],
         'Cover any one of the three and the other two give it to you. That is '
         'the whole of this handout.'),

        ('part', 'Part 3 · Solving for the rate',
         'the one Volume 7 withheld'),

        ('prose', 'When the rate is the unknown there is no formula. The factor '
                  'is computed from the figures given, and then the table is '
                  'searched along the row for the term until that factor is '
                  'found. The rate at the top of the column is the answer.',
         'R2'),

        ('task', 'Exercise 3C',
         'Recover the rate implicit in Volume 7’s lease.',
         'Complete the table, then say which row matches the lease.',
         ['Exercise 3B, and Volume 7 Handout 6 for the lease figures.'],
         ['Volume 7 financed %s with five payments of %s. Divide the first by '
          'the second to get the factor the lease implies.'
          % (money(LS.fin_pv), money(LS.fin_payments)),
          'That factor is %s. Now compute the five-year annuity factor at each '
          'rate in the table until you find it.' % _f(TV.pva(LS.fin_n)),
          'The row that matches is the rate implicit in the lease, and Volume '
          '7 stated it without ever showing this step.']),
        ('table', _RATEH, _rates(blank=True), RATE, _RATEW),
        ('answers', 10),
        ('fig', 'ranked', 'What %s a year is worth, at five rates'
         % money(LS.fin_payments),
         [(_pc(r), LS.fin_payments * TV.pva(LS.fin_n, r),
           money(LS.fin_payments * TV.pva(LS.fin_n, r)),
           RATE if abs(r - LS.fin_rate) < 0.001 else SLATE)
          for r in _RATES],
         'Only one of the five comes to %s, and that row is the rate implicit '
         'in the lease. Searching a table is a legitimate method, and for the '
         'rate it is the only one.' % money(LS.fin_pv),
         'Present value of the five lease payments'),

        ('part', 'Part 4 · When the answer is between two rows',
         'interpolation'),

        ('task', 'Exercise 3D',
         'Estimate a rate that falls between two tabulated figures.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 3C.'],
         ['Suppose a lease of %s supported five payments of %s instead. Work '
          'out the factor that implies.'
          % (money(248_000), money(LS.fin_payments)),
          'That factor falls between the %s row and the %s row of your table, '
          'so the rate is somewhere between them.' % (_pc(0.07), _pc(0.08)),
          'The last blank is why the answer is an estimate rather than an '
          'exact figure.']),
        ('fill', 'R3',
         ['A lease of %s supporting five payments of %s implies a factor of '
          '%s. That falls between the %s and %s rows, so the rate lies '
          '{between} them.'
          % (money(248_000), money(LS.fin_payments),
             num(248_000 / LS.fin_payments, 5), _pc(0.07), _pc(0.08)),
          'The estimate takes a proportion of the gap. The factor is %s of the '
          'way from the %s figure to the %s figure, so the rate is about %s. '
          'The method is called {interpolation}.'
          % (num((TV.pva(5, 0.07) - 248_000 / LS.fin_payments)
                 / (TV.pva(5, 0.07) - TV.pva(5, 0.08)) * 100, 0) + '%',
             _pc(0.07), _pc(0.08),
             _pc1(0.07 + 0.01 * (TV.pva(5, 0.07) - 248_000 / LS.fin_payments)
                  / (TV.pva(5, 0.07) - TV.pva(5, 0.08)))),
          'The result is close and not exact, because the relationship between '
          'a rate and its factor is a curve rather than a {straight} line. '
          'Interpolation treats a small piece of that curve as if it were '
          'straight.',
          'For an exam that is enough. A question whose answers are a '
          'percentage point apart does not need more {precision} than this '
          'method gives.'],
         {'between': ('A bigger factor means a smaller rate.', ''),
          'interpolation': ('A proportion of the gap between two rows.', ''),
          'straight': ('A curve, so the estimate is approximate.',
                       'Students treat an interpolated rate as exact and then '
                       'build a schedule on it that will not close. Use it to '
                       'pick an answer, not to start a computation.'),
          'precision': ('Enough to choose between the options offered.', '')},
         ['above', 'curved', 'accuracy']),
        ('fig', 'timeline', 'How a rate is recovered from a factor',
         [('Compute the factor', 'Divide the present value by the payment: '
                                 '%s over %s'
           % (money(LS.fin_pv), money(LS.fin_payments)), NOW),
          ('Search the row', 'Run along the five-year row until that factor '
                             'appears', RATE),
          ('Read the rate', 'Take the rate at the head of the column, or '
                            'interpolate between two', LATER)],
         'Three steps, no formula. The internal rate of return in Part 2 '
         'Section E is this same search, run by a calculator instead of by '
         'eye.'),

        ('part', 'Part 5 · Nominal against effective',
         'the rate the contract does not quote'),

        ('task', 'Exercise 3E',
         'Convert a nominal rate to an effective annual rate.',
         'Sort each statement into the column that says whether it is true.',
         ['Handout 1 Exercise 1A, on compounding.'],
         ['A rate of %s compounded twice a year charges %s every six months, '
          'and the second charge falls on a balance that already includes the '
          'first.' % (_pc(TV.rate), _pc(TV.rate / 2)),
          'Work out what one dollar becomes after two half-years at %s before '
          'you answer.' % _pc(TV.rate / 2),
          'One of the statements is about annual compounding, which is the '
          'only case where the two rates agree.']),
        ('sortgrid',
         ['Statement about nominal and effective rates', 'TRUE', 'FALSE'],
         ['%s compounded semi-annually is an effective %s a year'
          % (_pc(TV.rate), num(((1 + TV.rate / 2) ** 2 - 1) * 100, 2) + '%'),
          'The effective rate is never below the nominal rate',
          'More frequent compounding raises the effective rate',
          '%s compounded annually has an effective rate of %s'
          % (_pc(TV.rate), _pc(TV.rate)),
          'The effective rate rises without limit as compounding gets more '
          'frequent',
          'A factor table should be built on the periodic rate, not the annual '
          'one'],
         ['TRUE', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE'],
         'The fifth is the trap: more frequent compounding raises the '
         'effective rate towards a ceiling, not past every bound.'),
        ('fig', 'ranked', '%s nominal, compounded at four frequencies'
         % _pc(TV.rate),
         [('Annually', TV.rate * 100, _pc(TV.rate), NOW),
          ('Semi-annually', ((1 + TV.rate / 2) ** 2 - 1) * 100,
           num(((1 + TV.rate / 2) ** 2 - 1) * 100, 2) + '%', RATE),
          ('Quarterly', ((1 + TV.rate / 4) ** 4 - 1) * 100,
           num(((1 + TV.rate / 4) ** 4 - 1) * 100, 2) + '%', SLATE),
          ('Monthly', ((1 + TV.rate / 12) ** 12 - 1) * 100,
           num(((1 + TV.rate / 12) ** 12 - 1) * 100, 2) + '%', LATER)],
         'The same contract, quoted the same way, costing four different '
         'amounts. The gap between the first and the last is %s.'
         % (num((((1 + TV.rate / 12) ** 12 - 1) - TV.rate) * 100, 2) + '%'),
         'Effective annual rate'),

        ('watch', 'The exam hides which variable is missing inside the story. '
                  '"A machine costing $400,000 saves $95,000 a year for six '
                  'years — does it clear a 10% hurdle?" is a question about '
                  'the rate, and it reads like a question about a machine. '
                  'Identify the unknown before you reach for anything.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A present value of %s supports %d equal annual payments at '
                '%s. The payment is found by:'
         % (money(LS.fin_pv), LS.fin_n, _pc(TV.rate)),
         ['Multiplying %s by the annuity factor' % money(LS.fin_pv),
          'Dividing %s by the annuity factor' % money(LS.fin_pv),
          'Dividing %s by the number of periods' % money(LS.fin_pv),
          'Multiplying %s by the rate' % money(LS.fin_pv)],
         1, 'Level A',
         'The present value is the payment times the factor, so the payment is '
         'the present value over the factor: %s. (C) ignores the rate '
         'entirely.' % money(LS.fin_payments)),

        ('mcq', 'A lease of %s requires %d payments of %s. The rate implicit '
                'in the lease is found by:'
         % (money(LS.fin_pv), LS.fin_n, money(LS.fin_payments)),
         ['Dividing the total payments by the lease amount',
          'Computing the annuity factor and finding it in the table',
          'Dividing the lease amount by the number of periods',
          'Applying the effective annual rate formula'],
         1, 'Level B',
         '%s over %s is %s, and that factor appears in the five-year row at '
         '%s. (A) gives a ratio with no interest meaning at all.'
         % (money(LS.fin_pv), money(LS.fin_payments),
            _f(TV.pva(LS.fin_n)), _pc(LS.fin_rate))),

        ('mcq', 'An annuity factor of %s for five years implies a rate of:'
         % _f(TV.pva(LS.fin_n)),
         [_pc(0.06), _pc(0.08), _pc(0.10), 'Not determinable from a factor'],
         1, 'Level B',
         'Reading along the five-year row, %s sits in the %s column. (D) is '
         'the answer of a candidate who has not realised the table works in '
         'both directions.'
         % (_f(TV.pva(LS.fin_n)), _pc(TV.rate))),

        ('mcq', 'A company must repay %s in %d years and will make equal '
                'annual deposits earning %s. The deposit is found by dividing '
                '%s by:' % (money(1_000_000), LS.fin_n, _pc(TV.rate),
                            money(1_000_000)),
         ['The present value annuity factor',
          'The future value annuity factor',
          'The number of periods', 'The present value factor'],
         1, 'Level C',
         'A sinking fund accumulates forward, so the future value annuity '
         'factor of %s applies. (A) is the error of reaching for the familiar '
         'factor: it would give a deposit far too large.'
         % _f(TV.fva(LS.fin_n))),

        ('mcq', 'A nominal rate of %s compounded semi-annually has an '
                'effective annual rate of:' % _pc(TV.rate),
         [_pc(TV.rate), num(((1 + TV.rate / 2) ** 2 - 1) * 100, 2) + '%',
          _pc(TV.rate / 2), _pc(TV.rate * 2)],
         1, 'Level B',
         'Two half-years at %s give %s a year, because the second half-year '
         'charges on a balance that includes the first. (A) assumes the '
         'quoted rate is already effective, which it is only under annual '
         'compounding.'
         % (_pc(TV.rate / 2),
            num(((1 + TV.rate / 2) ** 2 - 1) * 100, 2) + '%')),

        ('mcq', 'An interpolated rate is:',
         ['Exact, because the table is exact',
          'An estimate, because the relationship between rate and factor is '
          'not linear',
          'Always too high', 'Only valid for annuities'],
         1, 'Level C',
         'Interpolation treats a curve as a straight line over a short stretch. '
         '(C) states a direction the method does not reliably have, which is '
         'exactly why it is only an estimate.'),

        ('mcq', 'A project costs $400,000 and saves $95,000 a year for six '
                'years. The question "does it clear a 10% hurdle?" is asking '
                'you to find:',
         ['The present value', 'The implicit rate, and compare it with 10%',
          'The payment', 'The number of periods'],
         1, 'Level C',
         'Three variables are given and the rate is withheld, which makes this '
         'an internal rate of return question in the language of Part 2 '
         'Section E. (A) is a legitimate alternative route to the same '
         'decision and is not what the stem asked for.'),

        ('tip', 'Before any time value question, write the four variables down '
                'and tick the three you have been given. The one without a '
                'tick is the answer, and which one it is decides whether you '
                'multiply, divide, or search the table.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · which variable each question withholds'),
        ('table', _SOLVEH, _solve(), SLATE, _SOLVEW),
        ('h3', 'Exercise 3C · the rate recovered from Volume 7'),
        ('table', _RATEH, _rates(), RATE, _RATEW),
        ('prose', 'The %s row is the lease. %s divided by %s is %s, that '
                  'factor appears in the %s column, and the %s a year value of '
                  '%s matches the liability Volume 7 opened with. The volume '
                  'that used the rate has now been checked by the volume that '
                  'teaches it.'
                  % (_pc(LS.fin_rate), money(LS.fin_pv),
                     money(LS.fin_payments), _f(TV.pva(LS.fin_n)),
                     _pc(LS.fin_rate), money(LS.fin_payments),
                     money(LS.fin_pv)), 'R2'),
        ('prose', 'The same search run on Volume 7’s other lease gives the '
                  'same answer: %s divided by %s is %s, which is the '
                  'three-year factor at %s. Two leases, one rate, and neither '
                  'figure was invented for this handout.'
                  % (money(LS.op_pv), money(LS.op_payments),
                     _f(TV.pva(LS.op_n)), _pc(LS.op_rate)), 'R2'),
    ],
)
