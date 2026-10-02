# -*- coding: utf-8 -*-
"""Volume 13, Handout 2 — Annuities: Ordinary, Due, and the Factor a Table
Gives You.

Where Volume 7's two lease present values came from.
"""
from fadata import N, TV, LS, Y
from data import money, num

NOW, LATER, RATE, SLATE = '1F6F8F', '2E7D5B', 'A05A2B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


def _f(x):
    return num(x, 5)


_LONGH = ['Payment', 'Due in', 'Factor at %s' % _pc(TV.rate),
          'Present value']
_LONGW = [20, 16, 30, 34]


def _long(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for y in range(1, LS.fin_n + 1):
        rows.append([money(LS.fin_payments), '%d year%s' % (y, '' if y == 1
                                                            else 's'),
                     c(_f(TV.pv(y))),
                     c(money(LS.fin_payments * TV.pv(y)))])
    rows.append(['Total', '', c(_f(TV.pva(LS.fin_n))),
                 c(money(LS.fin_pv))])
    return rows


_ANNH = ['Periods', 'Ordinary annuity', 'Annuity due']
_ANNW = [20, 40, 40]


def _ann(blank=False):
    def c(v):
        return '' if blank else v
    return [[str(n), c(_f(TV.pva(n))), c(_f(TV.pvad(n)))]
            for n in range(1, TV.horizon + 1)]


HANDOUT = dict(
    n=2,
    title='Annuities: Ordinary, Due, and the Factor a Table Gives You',
    subtitle='Five payments of %s at %s come to %s today. That figure has been '
             'in Volume 7 since the day it was written.'
             % (money(LS.fin_payments), _pc(TV.rate), money(LS.fin_pv)),
    register='R2',

    lang=dict(
        register='R2 for the mechanics, R3 once the exam’s own wording for the '
                 'two kinds of annuity arrives.',
        collocations=['discount a stream of equal payments',
                      'sum the individual present values',
                      'read an annuity factor',
                      'adjust an ordinary annuity to an annuity due',
                      'value a payment made in advance',
                      'capitalise a perpetual stream'],
        pairs=['single sum / annuity',
               'ordinary annuity / annuity due',
               'in arrears / in advance',
               'annuity / perpetuity'],
        nots=['An annuity factor is not a shortcut that loses accuracy. It is '
              'the exact sum of the single-sum factors.',
              'An annuity due is not a different kind of contract. It is the '
              'same payments, each one period earlier.'],
    ),

    objectives=[
        'Define an annuity and say what makes a stream of payments one.',
        'Value an annuity by discounting each payment separately.',
        'Read and use an annuity factor instead.',
        'Distinguish an ordinary annuity from an annuity due.',
        'Convert between the two factors.',
    ],

    terms=[
        ('annuity',
         'A series of equal payments made at equal intervals.',
         'دفعة سنوية منتظمة',
         'Equal in amount and equal in spacing. A stream that fails either '
         'test is valued payment by payment.'),
        ('ordinary annuity',
         'An annuity whose first payment falls at the end of the first period.',
         'دفعة عادية',
         'The default in every exam question that does not say otherwise, and '
         'the one a lease uses unless the contract says in advance.'),
        ('annuity due',
         'An annuity whose first payment falls at the beginning of the first '
         'period.', 'دفعة معجلة',
         'Worth more than the ordinary kind, because every payment escapes one '
         'period of discounting.'),
        ('annuity factor',
         'The present value of one dollar per period for a given number of '
         'periods at a given rate.', 'معامل الدفعة',
         'The sum of the single-sum factors for those periods. Nothing is '
         'approximated.'),
        ('perpetuity',
         'An annuity with no end, valued by dividing the payment by the rate.',
         'دفعة دائمة',
         'The factor converges because the later payments are worth almost '
         'nothing. At %s it is only %s.'
         % (_pc(TV.rate), _f(1 / TV.rate))),
    ],

    blocks=[
        ('scene', 'Five payments, one figure', [
            'Northwind’s machine lease requires %s at the end of each of five '
            'years. Handout 1 can value any one of those payments.'
            % money(LS.fin_payments),
            'Valuing all five is the same work five times: discount each one '
            'by the number of years until it arrives, then add the results.',
            'Because the payments are equal and equally spaced, the five '
            'factors can be added once and used for every payment. That sum is '
            'an annuity factor, and at %s over five years it is %s.'
            % (_pc(TV.rate), _f(TV.pva(LS.fin_n))),
            '%s times %s is %s, which is where Volume 7 began.'
            % (money(LS.fin_payments), _f(TV.pva(LS.fin_n)),
               money(LS.fin_pv)),
        ]),
        ('fig', 'timeline', 'The five lease payments, and when they fall',
         [('Today', 'Nothing is paid. The lease begins.', NOW),
          ('End of year 1', '%s, discounted one year to %s'
           % (money(LS.fin_payments),
              money(LS.fin_payments * TV.pv(1))), RATE),
          ('End of year 5', '%s, discounted five years to %s'
           % (money(LS.fin_payments),
              money(LS.fin_payments * TV.pv(5))), LATER)],
         'The last payment is worth %s less than the first, and both are %s '
         'when they arrive. Only the waiting differs.'
         % (money(LS.fin_payments * (TV.pv(1) - TV.pv(5))),
            money(LS.fin_payments))),

        ('part', 'Part 1 · The long way',
         'five payments, five factors'),

        ('task', 'Exercise 2A',
         'Value the lease payments by discounting each one separately.',
         'Complete the table. The payments are identical; the factors are not.',
         ['Handout 1 Exercise 1C, for the %s present value factors.'
          % _pc(TV.rate)],
         ['Each row is the same %s discounted by a different number of years.'
          % money(LS.fin_payments),
          'Take the factors from Handout 1’s table. Row 1 uses %s and row 5 '
          'uses %s.' % (_f(TV.pv(1)), _f(TV.pv(5))),
          'The total of the five present values should come to %s, and the '
          'total of the five factors to %s.'
          % (money(LS.fin_pv), _f(TV.pva(LS.fin_n)))]),
        ('table', _LONGH, _long(blank=True), RATE, _LONGW),
        ('answers', 12),
        ('fig', 'ranked', 'What each of the five payments is worth today',
         [('Year %d payment' % y, LS.fin_payments * TV.pv(y),
           money(LS.fin_payments * TV.pv(y)),
           RATE if y <= 2 else (SLATE if y == 3 else LATER))
          for y in range(1, LS.fin_n + 1)],
         'Five identical payments of %s, worth five different amounts today. '
         'They add to %s.' % (money(LS.fin_payments), money(LS.fin_pv)),
         'Present value at %s' % _pc(TV.rate)),

        ('part', 'Part 2 · The short way',
         'one factor, used once'),

        ('prose', 'Because the payments are equal, the arithmetic can be done '
                  'once instead of five times. Adding the five single-sum '
                  'factors gives one annuity factor, and multiplying the '
                  'payment by it gives the same answer exactly. Nothing is '
                  'lost by the shortcut.', 'R2'),

        ('task', 'Exercise 2B',
         'Say what an annuity factor is and when it may be used.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 2A, and the paragraph above.'],
         ['Add your five factors from Exercise 2A before you start, and keep '
          'the total to five decimals.',
          'The shortcut needs two conditions to hold. One is about the amount '
          'of each payment, the other about the spacing.',
          'The last blank is the lease Volume 7 called the warehouse floor, '
          'which needs a different factor for the same reason.']),
        ('fill', 'R2',
         ['Adding the five present value factors gives {%s}. That one number '
          'is the present value of one dollar a year for five years at %s, and '
          'it is called an annuity factor.'
          % (_f(TV.pva(LS.fin_n)), _pc(TV.rate)),
          'Multiplying it by the %s payment gives %s, which is exactly the '
          'total of the five rows in Exercise 2A. The shortcut is not an '
          '{approximation}; it is the same sum, computed once.'
          % (money(LS.fin_payments), money(LS.fin_pv)),
          'Two conditions have to hold. The payments must be {equal} in '
          'amount, and they must fall at equal intervals. A stream that fails '
          'either is valued payment by payment, the long way.',
          'Volume 7’s other lease has three payments of %s rather than five of '
          '%s, so it needs the three-year factor of %s. That gives %s, which '
          'is the figure that volume used for the warehouse {floor}.'
          % (money(LS.op_payments), money(LS.fin_payments),
             _f(TV.pva(LS.op_n)), money(LS.op_pv))],
         {_f(TV.pva(LS.fin_n)): ('The five factors of Exercise 2A, added.',
                                 ''),
          'approximation': ('The same arithmetic, done once.',
                            'Students treat the factor as a rounding '
                            'convenience and discount separately when accuracy '
                            'matters. The two give the same answer.'),
          'equal': ('In amount, and equally spaced.', ''),
          'floor': ('Three payments, so the three-year factor.', '')},
         [_f(TV.pv(LS.fin_n)), 'exact', 'machine']),
        ('fig', 'formula', 'Volume 7, recovered',
         [('%s' % money(LS.fin_payments), 'The payment, each year', NOW),
          ('×', '', None),
          ('%s' % _f(TV.pva(LS.fin_n)),
           'Annuity factor, %s for %d years' % (_pc(TV.rate), LS.fin_n),
           RATE),
          ('=', '', None),
          ('%s' % money(LS.fin_pv),
           'The lease liability Volume 7 opened with', LATER)],
         'The same multiplication with %s and the three-year factor gives %s, '
         'which is the other lease. Both figures were in that volume before '
         'this one explained them.'
         % (money(LS.op_payments), money(LS.op_pv))),

        ('part', 'Part 3 · Paid at the end, or at the start',
         'the one distinction the exam tests'),

        ('task', 'Exercise 2C',
         'Distinguish an ordinary annuity from an annuity due and convert '
         'between them.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 2B.'],
         ['Northwind’s lease pays at the end of each year. Ask what changes if '
          'the landlord demands payment in advance instead.',
          'If every payment arrives one year earlier, each one escapes exactly '
          'one year of discounting.',
          'The last blank is the single multiplication that converts one '
          'factor into the other.']),
        ('fill', 'R3',
         ['An annuity whose payments fall at the end of each period is an '
          '{ordinary} annuity, and it is what an exam question means unless it '
          'says otherwise.',
          'If the same payments fall at the beginning of each period instead, '
          'the annuity is said to be due. Every payment then escapes one '
          'period of discounting, so an annuity due is worth {more} than the '
          'ordinary kind, never less.',
          'The conversion is one step. Multiply the ordinary factor by one '
          'plus the {rate}: %s times %s gives %s, which is the five-year '
          'annuity due factor at %s.'
          % (_f(TV.pva(LS.fin_n)), num(1 + TV.rate, 2),
             _f(TV.pvad(LS.fin_n)), _pc(TV.rate)),
          'On Northwind’s lease that is the difference between %s and {%s}, '
          'which is %s of value for paying each instalment twelve months '
          'sooner.'
          % (money(LS.fin_pv),
             money(LS.fin_payments * TV.pvad(LS.fin_n)),
             money(LS.fin_payments
                   * (TV.pvad(LS.fin_n) - TV.pva(LS.fin_n))))],
         {'ordinary': ('End of period, and the exam’s default.', ''),
          'more': ('Each payment is discounted one period less.',
                   'Students expect paying earlier to be worth less because '
                   'more cash leaves sooner. The question asks what the stream '
                   'is worth, not what it costs the payer.'),
          'rate': ('One multiplication, and the direction is up.', ''),
          money(LS.fin_payments * TV.pvad(LS.fin_n)):
              ('%s times %s.' % (money(LS.fin_payments),
                                 _f(TV.pvad(LS.fin_n))), '')},
         ['due', 'less', 'period']),
        ('table', _ANNH, _ann(blank=True), SLATE, _ANNW),
        ('answers', 12),
        ('fig', 'matrix', 'The same five payments, two timings',
         ['Ordinary annuity', 'Annuity due'],
         ['First payment falls', 'Factor at %s for %d years' % (_pc(TV.rate),
                                                                LS.fin_n),
          'Present value of %s a year' % money(LS.fin_payments)],
         [['At the end of year 1', _f(TV.pva(LS.fin_n)),
           money(LS.fin_pv)],
          ['At the start of year 1', _f(TV.pvad(LS.fin_n)),
           money(LS.fin_payments * TV.pvad(LS.fin_n))]],
         'One row of the annuity due table is always the row above it in the '
         'ordinary table, plus one. That is worth checking: %s for %d periods '
         'due equals %s for %d ordinary, plus 1.'
         % (_f(TV.pvad(3)), 3, _f(TV.pva(2)), 2)),

        ('part', 'Part 4 · The stream that never ends',
         'a factor you can compute in your head'),

        ('task', 'Exercise 2D',
         'Value a perpetual stream and say why its factor is so small.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2C, and the factor table above.'],
         ['Look down the ordinary annuity column. Ask what it is heading '
          'towards as the periods increase.',
          'At %s a perpetuity factor is 1 divided by %s, which is %s.'
          % (_pc(TV.rate), num(TV.rate, 2), _f(1 / TV.rate)),
          'A perpetual stream is worth only a little more than a %d-year one, '
          'and the statements ask you to say why.' % TV.horizon]),
        ('sortgrid',
         ['Statement about a perpetuity', 'TRUE', 'FALSE'],
         ['Its factor is the payment divided by the rate',
          'Its present value is infinite, because the payments never stop',
          'At %s the factor is %s' % (_pc(TV.rate), _f(1 / TV.rate)),
          'A higher rate gives a smaller perpetuity factor',
          'An annuity factor can never exceed the perpetuity factor for the '
          'same rate',
          'Doubling the rate doubles the perpetuity factor'],
         ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'TRUE', 'FALSE'],
         'The second is the one worth arguing about. The payments never stop '
         'and the sum converges anyway, because the distant ones are worth '
         'almost nothing.'),
        ('fig', 'ranked', 'How much more a longer stream is worth, at %s'
         % _pc(TV.rate),
         [('5 years', TV.pva(5), _f(TV.pva(5)), NOW),
          ('10 years', TV.pva(10), _f(TV.pva(10)), RATE),
          ('30 years', TV.pva(30), _f(TV.pva(30)), SLATE),
          ('Forever', 1 / TV.rate, _f(1 / TV.rate), LATER)],
         'Thirty years captures almost all of a perpetual stream, and the '
         'infinite tail beyond it is worth %s per dollar a year. Discounting '
         'does that.' % _f(1 / TV.rate - TV.pva(30)),
         'Present value of $1 a year'),

        ('watch', 'Read the timing before you read the numbers. "Payments at '
                  'the end of each year" is an ordinary annuity and "the first '
                  'payment is due immediately" is an annuity due, and the two '
                  'differ by a full multiplication of %s. A question that '
                  'mentions a lease payable in advance is testing exactly '
                  'that.' % num(1 + TV.rate, 2)),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An annuity is a series of payments that are:',
         ['Increasing at a constant rate',
          'Equal in amount and equally spaced in time',
          'Made at the start of each period',
          'Guaranteed by a third party'],
         1, 'Level A',
         'Both conditions, and nothing about timing within the period or about '
         'certainty. (C) describes an annuity due, which is one kind of '
         'annuity rather than the definition of all of them.'),

        ('mcq', 'The present value of %s a year for %d years at %s is:'
         % (money(LS.fin_payments), LS.fin_n, _pc(TV.rate)),
         [money(LS.fin_payments * LS.fin_n), money(LS.fin_pv),
          money(LS.fin_payments * TV.pv(LS.fin_n)),
          money(LS.fin_payments * TV.pvad(LS.fin_n))],
         1, 'Level A',
         '%s times the annuity factor of %s. (A) is the undiscounted total and '
         '(C) discounts a single payment rather than five.'
         % (money(LS.fin_payments), _f(TV.pva(LS.fin_n)))),

        ('mcq', 'Compared with an ordinary annuity of the same payments, the '
                'present value of an annuity due is:',
         ['Lower', 'Higher by a factor of one plus the rate',
          'The same', 'Higher by the rate itself'],
         1, 'Level B',
         'Every payment escapes one period of discounting, so the whole factor '
         'is multiplied by %s. (D) adds the rate rather than multiplying by one '
         'plus it, which understates the difference.'
         % num(1 + TV.rate, 2)),

        ('mcq', 'A lease requires %s at the beginning of each of %d years. At '
                '%s the present value is:'
         % (money(LS.fin_payments), LS.fin_n, _pc(TV.rate)),
         [money(LS.fin_pv),
          money(LS.fin_payments * TV.pvad(LS.fin_n)),
          money(LS.fin_payments * LS.fin_n),
          money(LS.fin_payments * TV.pva(LS.fin_n - 1))],
         1, 'Level B',
         'Payments in advance make this an annuity due: %s times %s. (A) is '
         'the ordinary annuity answer and is what a candidate gets for not '
         'reading the word beginning.'
         % (money(LS.fin_payments), _f(TV.pvad(LS.fin_n)))),

        ('mcq', 'An annuity factor at a given rate and term is:',
         ['An approximation of the sum of the single-sum factors',
          'Exactly the sum of the single-sum factors',
          'The average of the single-sum factors',
          'Unrelated to the single-sum factors'],
         1, 'Level B',
         'It is the sum, exactly: the five %s factors add to %s. (C) is the '
         'commonest misunderstanding and would make the annuity factor smaller '
         'than 1, which it is not beyond the first period.'
         % (_pc(TV.rate), _f(TV.pva(LS.fin_n)))),

        ('mcq', 'A perpetuity pays $1,000 a year forever. At %s its present '
                'value is:' % _pc(TV.rate),
         ['Infinite', money(1000 / TV.rate), money(1000 * TV.pva(30)),
          'Not determinable'],
         1, 'Level C',
         'Payment divided by rate: $1,000 over %s. (A) is the intuition the '
         'word forever creates, and the sum converges because the distant '
         'payments are worth almost nothing.' % num(TV.rate, 2)),

        ('mcq', 'A stream of five payments rises by 3% each year. Its present '
                'value should be computed by:',
         ['The ordinary annuity factor for five years',
          'Discounting each payment separately',
          'The annuity due factor for five years',
          'The perpetuity formula'],
         1, 'Level C',
         'The payments are not equal, so no annuity factor applies and the '
         'long way of Exercise 2A is the only way. (A) is the error of reaching '
         'for the shortcut without checking the condition that licenses it.'),

        ('tip', 'Three questions, in order, before any annuity calculation: '
                'are the payments equal, are they equally spaced, and do they '
                'fall at the end or the beginning? The first two decide '
                'whether you may use a factor at all, and the third decides '
                'which factor.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2A · the long way, payment by payment'),
        ('table', _LONGH, _long(), RATE, _LONGW),
        ('h3', 'Exercise 2C · the two annuity factors at %s' % _pc(TV.rate)),
        ('table', _ANNH, _ann(), SLATE, _ANNW),
        ('prose', 'The last row of the first table is the point of the '
                  'handout. Five separate present values add to %s, and %s '
                  'multiplied by the single factor %s gives the same figure. '
                  'Volume 7 used that figure without ever deriving it.'
                  % (money(LS.fin_pv), money(LS.fin_payments),
                     _f(TV.pva(LS.fin_n))), 'R2'),
        ('prose', 'The second table has a check built into it. Each annuity '
                  'due factor equals the ordinary factor one row above, plus '
                  '1, because an annuity due is an immediate payment followed '
                  'by an ordinary annuity one period shorter.', 'R2'),
    ],
)
