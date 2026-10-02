# -*- coding: utf-8 -*-
"""Volume 13, Handout 1 — Why a Dollar Moves: Present Value and Future Value.

The toolkit every later volume has been using. Assumed by CMA Part 2 E.2 and
B.2(e), and taught in no section of either part.
"""
from fadata import N, TV, LS, Y
from data import money, num

NOW, LATER, RATE, SLATE = '1F6F8F', '2E7D5B', 'A05A2B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


def _f(x):
    return num(x, 5)


_GROWH = ['Year', 'Opening', 'Interest at %s' % _pc(TV.rate), 'Closing']
_GROWW = [12, 30, 29, 29]


def _grow(blank=False):
    def c(v):
        return '' if blank else v
    rows, b = [], TV.single_pv
    for y in range(1, TV.single_n + 1):
        i = b * TV.rate
        rows.append([str(y), money(b), c(money(i)), c(money(b + i))])
        b = b + i
    return rows


_FACTH = ['Periods', 'Present value of $1', 'Future value of $1']
_FACTW = [20, 40, 40]


def _facts(blank=False):
    def c(v):
        return '' if blank else v
    return [[str(n), c(_f(TV.pv(n))), c(_f(TV.fv(n)))]
            for n in range(1, TV.horizon + 1)]


HANDOUT = dict(
    n=1,
    title='Why a Dollar Moves: Present Value and Future Value',
    subtitle='Volume 7 discounted five lease payments and never said how. This '
             'volume says how, and you should read it before that one.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the idea is being established, R2 once the factors '
                 'are being applied.',
        collocations=['discount a future amount',
                      'compound a present amount forward',
                      'apply a discount rate',
                      'read a factor from a table',
                      'state an amount in today’s money',
                      'accumulate interest on interest'],
        pairs=['present value / future value',
               'discount / compound',
               'rate / period',
               'simple interest / compound interest'],
        nots=['Discounting is not a judgement that the money is less certain. '
              'It is arithmetic about when, not about whether.',
              'A present value is not an opinion. Given a rate and a date, '
              'there is one right answer.'],
    ),

    objectives=[
        'Say why an amount due later is worth less than the same amount now.',
        'Compound a present amount forward to a future value.',
        'Discount a future amount back to a present value.',
        'Read and use a present value factor.',
        'Say what the rate and the number of periods each do to a factor.',
    ],

    terms=[
        ('present value',
         'What an amount due at a later date is worth today, at a given rate.',
         'القيمة الحالية',
         'Always smaller than the future amount when the rate is positive. The '
         'exam gives you the rate; you do not choose it.'),
        ('future value',
         'What an amount invested today will grow to by a later date.',
         'القيمة المستقبلية',
         'The same relationship read the other way. One factor is the '
         'reciprocal of the other.'),
        ('discount rate',
         'The rate used to bring a future amount back to the present.',
         'معدل الخصم',
         'In a lease it is the rate implicit in the contract; in a capital '
         'project it is the hurdle rate. The arithmetic does not care which.'),
        ('compounding',
         'Earning interest on interest already earned, so growth accelerates.',
         'التركيب',
         'The reason the factors are powers rather than multiples. Simple '
         'interest has no compounding and is rarely examined.'),
        ('principal',
         'The amount on which interest is computed.', 'أصل المبلغ',
         'Under compounding the principal grows each period, which is exactly '
         'what makes the arithmetic non-linear.'),
    ],

    blocks=[
        ('scene', 'A gap in your own course', [
            'Volume 7 Handout 6 built a lease liability schedule. It opened at '
            '%s, which it said was the present value of five payments of %s.'
            % (money(LS.fin_pv), money(LS.fin_payments)),
            'Where that %s came from was never explained. Five payments of %s '
            'come to %s, and the schedule used a figure %s smaller.'
            % (money(LS.fin_pv), money(LS.fin_payments),
               money(LS.fin_payments * LS.fin_n),
               money(LS.fin_payments * LS.fin_n - LS.fin_pv)),
            'That gap is this volume. By the end of Handout 2 you will compute '
            '%s yourself, and by the end of Handout 3 you will be able to '
            'recover the %s rate from the schedule alone.'
            % (money(LS.fin_pv), _pc(LS.fin_rate)),
            'Everything here is arithmetic. None of it is a matter of '
            'judgement.',
        ]),
        ('fig', 'scale',
         'A DOLLAR TODAY',
         ['Can be invested now',
          'Earns a return for the whole period',
          'Is certain, because you are holding it',
          'This is what a present value measures'],
         'A DOLLAR IN FIVE YEARS',
         ['Cannot be invested until it arrives',
          'Earns nothing in the meantime',
          'Is worth %s today at %s'
          % (money(TV.pv(5) * 1), _pc(TV.rate)),
          'This is what a future value measures']),

        ('part', 'Part 1 · Forward: compounding',
         'interest on interest'),

        ('task', 'Exercise 1A',
         'Say why an amount grows faster than the rate alone suggests.',
         'Read and complete. Write one word in each space.',
         ['Volume 7 Handout 6, where interest was charged on a falling '
          'balance.'],
         ['Northwind deposits %s at %s. Work out the first year’s interest '
          'before you read on.' % (money(TV.single_pv), _pc(TV.rate)),
          'In the second year the interest is charged on a larger amount than '
          'in the first. Ask what that larger amount contains.',
          'The last blank is what makes the factor a power rather than a '
          'multiplication.']),
        ('fill', 'R1',
         ['Northwind puts %s into an account paying %s a year. In the first '
          'year it earns %s of interest, so the balance becomes %s.'
          % (money(TV.single_pv), _pc(TV.rate),
             money(TV.single_pv * TV.rate),
             money(TV.single_pv * (1 + TV.rate))),
          'In the second year the %s is charged on that larger balance, not on '
          'the original deposit. The company is now earning interest on its '
          '{interest}, and that is what compounding means.' % _pc(TV.rate),
          'Over %d years the deposit grows to %s. Simple interest at the same '
          'rate would have given only %s, so %s of the growth is interest the '
          '{original} deposit never earned.'
          % (TV.single_n, money(TV.single_sum),
             money(TV.single_pv * (1 + TV.rate * TV.single_n)),
             money(TV.single_sum - TV.single_pv
                   * (1 + TV.rate * TV.single_n))),
          'So the growth factor is %s multiplied by itself %d times rather '
          'than %s multiplied by %d. It is a {power}, and that one fact shapes '
          'every table in this volume.'
          % (num(1 + TV.rate, 2), TV.single_n, _pc(TV.rate), TV.single_n)],
         {'interest': ('The balance now includes last year’s interest.', ''),
          'original': ('Interest the first deposit alone could not earn.', ''),
          'power': ('Repeated multiplication, not repeated addition.',
                    'Students multiply the rate by the years. That is simple '
                    'interest, and no exam question in either part uses it.')},
         ['principal', 'sum', 'product']),
        ('table', _GROWH, _grow(blank=True), LATER, _GROWW),
        ('answers', 10),
        ('fig', 'timeline', '%s growing to %s at %s'
         % (money(TV.single_pv), money(TV.single_sum), _pc(TV.rate)),
         [('Today', 'Northwind deposits %s' % money(TV.single_pv), NOW),
          ('Each year', 'Interest is charged on the balance, which now '
                        'includes last year’s interest', RATE),
          ('Year %d' % TV.single_n, 'The account holds %s'
           % money(TV.single_sum), LATER)],
         'The same two amounts, %s apart. Which one you call the answer '
         'depends only on which end you are standing at.'
         % money(TV.single_sum - TV.single_pv)),

        ('part', 'Part 2 · Backward: discounting',
         'the same relationship, reversed'),

        ('prose', 'Discounting is compounding read from the other end. If %s '
                  'grows to %s over %d years at %s, then %s due in %d years is '
                  'worth %s today at that rate. One statement, two directions.'
                  % (money(TV.single_pv), money(TV.single_sum), TV.single_n,
                     _pc(TV.rate), money(TV.single_sum), TV.single_n,
                     money(TV.single_pv)), 'R2'),

        ('task', 'Exercise 1B',
         'Discount a single future amount back to its present value.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 1A, and the paragraph above.'],
         ['If multiplying by %s moves money forward one year, ask what moves '
          'it back one year.' % num(1 + TV.rate, 2),
          'Dividing by a number greater than one makes the result smaller, '
          'which is the direction a present value should go.',
          'The last blank is what happens to a present value when the rate '
          'rises and the date stays the same.']),
        ('fill', 'R2',
         ['Compounding multiplies by %s once for each year. Discounting '
          'therefore {divides} by %s once for each year, and the result is '
          'always smaller than the amount you started with.'
          % (num(1 + TV.rate, 2), num(1 + TV.rate, 2)),
          'So %s due in %d years is worth %s divided by %s to the power of %d, '
          'which is {%s}. That is its present value at %s.'
          % (money(TV.single_sum), TV.single_n, money(TV.single_sum),
             num(1 + TV.rate, 2), TV.single_n, money(TV.single_pv),
             _pc(TV.rate)),
          'Two things make a present value smaller. A longer wait divides by '
          '%s more times, and a higher {rate} divides by a bigger number each '
          'time.' % num(1 + TV.rate, 2),
          'Both effects run the same way, which is why a present value is '
          'most sensitive to a change in the rate when the amount is a long '
          'way {off}.',
          'Note what is not here. Nothing has been said about whether the '
          'money will actually arrive. Discounting is about {when}, and a '
          'doubt about whether belongs in the cash flows or in the rate, not '
          'in the factor.'],
         {'divides': ('The inverse of multiplying.', ''),
          money(TV.single_pv): ('%s over %s to the fifth.'
                                % (money(TV.single_sum),
                                   num(1 + TV.rate, 2)), ''),
          'rate': ('A bigger divisor, every period.',
                   'Students expect a higher rate to raise a present value, '
                   'by analogy with earning more. It lowers it.'),
          'off': ('Many periods, each one compounding the effect.', ''),
          'when': ('Timing, not certainty.',
                   'Students read a present value as a risk adjustment. The '
                   'factor knows only the rate and the number of periods.')},
         ['multiplies', 'period', 'near']),
        ('fig', 'formula', 'The two directions, as one statement',
         [('Present value %s' % money(TV.single_pv),
           'What it is worth today', NOW),
          ('×', '', None),
          ('%s to the power of %d' % (num(1 + TV.rate, 2), TV.single_n),
           'One multiplication for each year', RATE),
          ('=', '', None),
          ('Future value %s' % money(TV.single_sum),
           'What it becomes by year %d' % TV.single_n, LATER)],
         'Read left to right it is compounding; read right to left it is '
         'discounting. There is only one equation here.'),

        ('part', 'Part 3 · The factors', 'what a table actually holds'),

        ('task', 'Exercise 1C',
         'Build the present value and future value factors for %s.'
         % _pc(TV.rate),
         'Complete the table to five decimal places.',
         ['Exercises 1A and 1B.'],
         ['A factor is what one dollar does. Multiply it by the amount you '
          'actually have.',
          'The present value factor for one period is 1 divided by %s. Each '
          'later row divides by %s again.'
          % (num(1 + TV.rate, 2), num(1 + TV.rate, 2)),
          'Check your work across each row: the two factors in a row multiply '
          'to exactly 1.']),
        ('table', _FACTH, _facts(blank=True), RATE, _FACTW),
        ('answers', 12),
        ('fig', 'matrix', 'What each factor is for',
         ['Present value of $1', 'Future value of $1'],
         ['The question it answers', 'Multiply it by', 'Size'],
         [['What is one dollar due later worth now?',
           'The amount you will receive', 'Always below 1'],
          ['What does one dollar now grow to?',
           'The amount you hold today', 'Always above 1']],
         'The two factors in any row are reciprocals: %s times %s is 1. If '
         'yours are not, one of them is wrong.'
         % (_f(TV.pv(TV.single_n)), _f(TV.fv(TV.single_n)))),

        ('part', 'Part 4 · What moves a factor',
         'rate and time, pulling the same way'),

        ('task', 'Exercise 1D',
         'Say what a higher rate and a longer wait each do to a present value.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 1C.'],
         ['Work from the factor table rather than from intuition: compare the '
          'row for one period with the row for %d.' % TV.horizon,
          'A present value factor can never be above 1 when the rate is '
          'positive, because waiting cannot make money worth more.',
          'One of the statements is about a rate of zero, which is the only '
          'case where time costs nothing.']),
        ('sortgrid',
         ['Statement about a present value', 'TRUE', 'FALSE'],
         ['A higher discount rate gives a smaller present value',
          'A longer wait gives a smaller present value',
          'A present value factor is always below 1 when the rate is positive',
          'Doubling the rate halves the present value',
          'At a rate of zero, the present value equals the future amount',
          'A present value can exceed the future amount it came from'],
         ['TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'The fourth is the trap. The relationship is a power, so nothing in '
         'this topic scales in proportion to anything.'),
        ('fig', 'ranked', 'One dollar due in %d years, at four rates'
         % TV.single_n,
         [('At 4%', TV.pv(TV.single_n, 0.04) * 100,
           _f(TV.pv(TV.single_n, 0.04)), OK),
          ('At %s' % _pc(TV.rate), TV.pv(TV.single_n) * 100,
           _f(TV.pv(TV.single_n)), NOW),
          ('At 12%', TV.pv(TV.single_n, 0.12) * 100,
           _f(TV.pv(TV.single_n, 0.12)), RATE),
          ('At 20%', TV.pv(TV.single_n, 0.20) * 100,
           _f(TV.pv(TV.single_n, 0.20)), RUST)],
         'The rate trebles from 4% to 12% and the factor does not fall to a '
         'third of itself. Nothing here is proportional.',
         'Cents today for one dollar in %d years' % TV.single_n),

        ('watch', 'Every figure in this volume depends on two things the '
                  'question must give you: a rate and a number of periods. If '
                  'a stem gives you an annual rate and semi-annual periods, '
                  'halve the rate and double the periods before you touch a '
                  'table. That single step is the commonest lost mark in Part '
                  '2 Section E.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The present value of an amount due in the future is:',
         ['Greater than the future amount',
          'Less than the future amount when the discount rate is positive',
          'Equal to the future amount',
          'Not determinable without knowing the risk'],
         1, 'Level A',
         'Discounting at a positive rate always reduces the amount. (D) '
         'confuses the choice of rate, which may involve judgement, with the '
         'arithmetic, which does not.'),

        ('mcq', 'An amount of %s is due in %d years. At %s the present value '
                'is:' % (money(TV.single_sum), TV.single_n, _pc(TV.rate)),
         [money(TV.single_sum * (1 - TV.rate * TV.single_n)),
          money(TV.single_pv), money(TV.single_sum / (1 + TV.rate)),
          money(TV.single_sum * TV.pv(1))],
         1, 'Level A',
         '%s times the %s factor of %s is %s. (A) applies the rate as simple '
         'interest for five years, which ignores compounding entirely.'
         % (money(TV.single_sum), _pc(TV.rate), _f(TV.pv(TV.single_n)),
            money(TV.single_pv))),

        ('mcq', 'If the discount rate rises and everything else is unchanged, '
                'the present value of a future amount:',
         ['Rises', 'Falls', 'Is unchanged', 'Rises then falls'],
         1, 'Level A',
         'A higher rate divides by a larger number each period. (A) is the '
         'instinct that a higher rate means more money, which is true of an '
         'investment you hold and false of an amount you are waiting for.'),

        ('mcq', 'The present value factor and the future value factor for the '
                'same rate and period:',
         ['Are equal', 'Are reciprocals, multiplying to 1',
          'Sum to 1', 'Are unrelated'],
         1, 'Level B',
         '%s times %s is 1. (C) is the most common wrong answer and would make '
         'both factors less than 1, which is impossible for a future value '
         'factor.' % (_f(TV.pv(TV.single_n)), _f(TV.fv(TV.single_n)))),

        ('mcq', 'A sum earns %s a year, compounded annually, for %d years. '
                'Compared with simple interest at the same rate, the final '
                'balance is:' % (_pc(TV.rate), TV.single_n),
         ['The same', 'Higher, by the interest earned on interest',
          'Lower', 'Higher, by exactly double'],
         1, 'Level B',
         'Compounding charges each year’s rate on a balance that already '
         'includes earlier interest. On Northwind’s deposit the difference is '
         '%s. (D) assumes a proportionality the arithmetic does not have.'
         % money(TV.single_sum - TV.single_pv
                 * (1 + TV.rate * TV.single_n))),

        ('mcq', 'An annual rate of %s is quoted on a loan that compounds '
                'semi-annually over %d years. The factor should be built '
                'using:' % (_pc(TV.rate), TV.single_n),
         ['%s for %d periods' % (_pc(TV.rate), TV.single_n),
          '%s for %d periods' % (_pc(TV.rate / 2), TV.single_n * 2),
          '%s for %d periods' % (_pc(TV.rate * 2), TV.single_n),
          '%s for %d periods' % (_pc(TV.rate), TV.single_n * 2)],
         1, 'Level C',
         'Halve the rate and double the periods. (D) doubles the periods and '
         'leaves the rate alone, which charges a full year’s interest twice a '
         'year and is the error the exam is looking for.'),

        ('mcq', 'Two amounts are each due in the future, one in two years and '
                'one in ten. A rise in the discount rate reduces:',
         ['Both by the same amount',
          'The ten-year amount by proportionately more',
          'The two-year amount by proportionately more',
          'Neither, if both are certain'],
         1, 'Level C',
         'The rate compounds over more periods, so a distant amount is far '
         'more sensitive. That sensitivity is what Volume 14 calls duration, '
         'and it is why a long bond’s price moves most.'),

        ('tip', 'Write the rate and the number of periods at the top of the '
                'page before anything else, and adjust them for the '
                'compounding frequency immediately. Every factor in this '
                'volume follows from those two numbers, and almost every lost '
                'mark comes from using the annual rate with monthly periods.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1A · the deposit, year by year'),
        ('table', _GROWH, _grow(), LATER, _GROWW),
        ('h3', 'Exercise 1C · the %s factors' % _pc(TV.rate)),
        ('table', _FACTH, _facts(), RATE, _FACTW),
        ('prose', 'Check the factor table across the rows rather than down the '
                  'columns: %s times %s is 1, and so is every other pair. A '
                  'reciprocal check catches an arithmetic slip that reading '
                  'the column never will.'
                  % (_f(TV.pv(TV.single_n)), _f(TV.fv(TV.single_n))), 'R2'),
        ('prose', 'The deposit table and the factor table are the same '
                  'arithmetic twice. %s times the year %d future value factor '
                  'of %s is %s, which is the last line of the first table.'
                  % (money(TV.single_pv), TV.single_n,
                     _f(TV.fv(TV.single_n)), money(TV.single_sum)), 'R2'),
    ],
)
