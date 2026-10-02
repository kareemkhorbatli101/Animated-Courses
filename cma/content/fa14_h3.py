# -*- coding: utf-8 -*-
"""Volume 14, Handout 3 — The Effective Interest Method, Period by Period.

Intermediate accounting only. The exam wants the price; the books want the
schedule, and the schedule is Volume 7's lease arithmetic on a bond.
"""
from fadata import N, BD, LS, Y
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_DH = ['Year', 'Opening', 'Interest at %s' % _pc(BD.market), 'Coupon paid',
       'Amortised', 'Closing']
_DW = [8, 20, 20, 18, 16, 18]


def _sched(coupon, blank=False):
    rows = []
    for y, op, i, c, a, cl in BD.schedule(coupon):
        rows.append([str(y), money(op),
                     '' if blank and y > 1 else money(i), money(c),
                     '' if blank and y > 1 else money(a),
                     '' if blank and y > 1 else money(cl)])
        if blank and y > 1:
            rows[-1][1] = ''
    return rows


_CMPH = ['', 'Effective interest method', 'Straight-line']
_CMPW = [30, 35, 35]


def _cmp(blank=False):
    def c(v):
        return '' if blank else v
    sl = BD.discount / BD.n
    r1 = BD.schedule(BD.discount_coupon)[0]
    r5 = BD.schedule(BD.discount_coupon)[-1]
    return [
        ['Year 1 amortisation', c(money(r1[4])), c(money(sl))],
        ['Year 5 amortisation', c(money(r5[4])), c(money(sl))],
        ['Year 1 interest expense', c(money(r1[2])),
         c(money(BD.face * BD.discount_coupon + sl))],
        ['Total over five years', c(money(BD.discount)),
         c(money(BD.discount))],
        ['Permitted under US GAAP', c('Yes'),
         c('Only if not materially different')],
    ]


HANDOUT = dict(
    n=3,
    title='The Effective Interest Method, Period by Period',
    subtitle='The %s bond pays %s in cash and costs %s in its first year. The '
             'gap is the discount, arriving one year at a time.'
             % (_pc(BD.discount_coupon),
                money(BD.face * BD.discount_coupon),
                money(BD.schedule(BD.discount_coupon)[0][2])),
    register='R2',

    lang=dict(
        register='R2 throughout, with the exam’s own contrast between the two '
                 'methods at R3.',
        collocations=['amortise a discount to interest expense',
                      'apply the effective rate to the carrying amount',
                      'accrete a carrying amount toward par',
                      'spread a premium over the term',
                      'reduce interest expense below the coupon',
                      'close a schedule on the face value'],
        pairs=['cash coupon / interest expense',
               'effective interest / straight-line',
               'accretion / amortisation',
               'discount bond / premium bond'],
        nots=['Amortising a discount is not repaying it. No cash moves, and '
              'the carrying amount rises.',
              'The effective interest method is not an approximation of the '
              'straight-line one. It is the exact method, and straight-line is '
              'the shortcut.'],
    ),

    objectives=[
        'Build an effective interest schedule for a bond issued at a discount.',
        'Build the same schedule for a bond issued at a premium.',
        'Say why interest expense differs from the cash coupon.',
        'Record a year’s interest on each bond.',
        'Compare the effective interest method with straight-line.',
    ],

    terms=[
        ('effective interest rate',
         'The rate that, applied to the carrying amount each period, produces '
         'the interest the borrowing really costs.',
         'سعر الفائدة الفعلي',
         'The market rate at issue, and it does not change afterwards even '
         'though market rates do.'),
        ('yield to maturity',
         'The return an investor earns by holding a bond to maturity, '
         'including the discount or premium.', 'العائد حتى الاستحقاق',
         'The same rate from the other side of the contract. The issuer’s '
         'effective rate is the investor’s yield.'),
        ('amortisation of a discount',
         'Charging part of a discount to interest expense each period, which '
         'raises the carrying amount toward the face value.',
         'إطفاء الخصم',
         'No cash moves. The entry is a debit to interest expense and a credit '
         'to the discount account.'),
        ('straight-line amortisation',
         'Spreading a discount or premium in equal amounts across the term.',
         'الإطفاء بالقسط الثابت',
         'Permitted under US GAAP only where the result is not materially '
         'different, and prohibited under IFRS.'),
    ],

    blocks=[
        ('scene', 'The cash and the cost are not the same number', [
            'Handout 2 issued a %s bond with a %s coupon for %s, because the '
            'market wanted %s.'
            % (money(BD.face), _pc(BD.discount_coupon),
               money(BD.discount_price), _pc(BD.market)),
            'In cash that bond pays %s a year. But Northwind borrowed %s and '
            'owes %s, so %s of interest is being paid at the end rather than '
            'along the way.'
            % (money(BD.face * BD.discount_coupon),
               money(BD.discount_price), money(BD.face),
               money(BD.discount)),
            'The accounts charge what the borrowing really costs: %s of the '
            'carrying amount each year, which in year one is %s.'
            % (_pc(BD.market),
               money(BD.schedule(BD.discount_coupon)[0][2])),
            'That is the effective interest method, and it is the schedule '
            'Volume 7 built for a lease liability. The same arithmetic, on a '
            'different contract.',
        ]),
        ('fig', 'formula', 'How one line of the schedule is built',
         [('Opening carrying amount', 'What is owed at the start', DEBT),
          ('×', '', None),
          ('%s' % _pc(BD.market), 'The effective rate, fixed at issue',
           TERM),
          ('=', '', None),
          ('Interest expense', 'More than the coupon, on a discount bond',
           PRICE),
          ('−', '', None),
          ('Coupon %s' % money(BD.face * BD.discount_coupon),
           'The cash actually paid', SLATE)],
         'Whatever is left over is the amortisation, and it is added to the '
         'carrying amount. On a premium bond the subtraction runs the other '
         'way and the carrying amount falls.'),

        ('part', 'Part 1 · Why the two figures differ',
         'borrowed less, owe more'),

        ('task', 'Exercise 3A',
         'Say why interest expense differs from the cash coupon.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 2 Exercise 2A, on what a discount represents.',
          'Volume 7 Handout 6, on how a lease liability unwinds.'],
         ['Northwind received %s and will repay %s. Ask which of those two '
          'figures the interest should be charged on.'
          % (money(BD.discount_price), money(BD.face)),
          'The coupon is %s of the face value. The effective charge is %s of '
          'something smaller.' % (_pc(BD.discount_coupon), _pc(BD.market)),
          'The last blank is the direction the carrying amount moves on a '
          'discount bond, and it is not down.']),
        ('fill', 'R2',
         ['Northwind received %s, not %s. Interest should therefore be charged '
          'on the %s it actually has the use of, which is the {carrying} '
          'amount.'
          % (money(BD.discount_price), money(BD.face),
             money(BD.discount_price)),
          '%s of %s is %s, and the cash coupon is only %s. The %s difference '
          'is interest the company has incurred and not yet {paid}.'
          % (_pc(BD.market), money(BD.discount_price),
             money(BD.schedule(BD.discount_coupon)[0][2]),
             money(BD.face * BD.discount_coupon),
             money(BD.schedule(BD.discount_coupon)[0][4])),
          'It is not paid because it is not due until maturity, when %s rather '
          'than %s is handed back. So the unpaid part is added to the '
          'liability, and the carrying amount {rises}.'
          % (money(BD.face), money(BD.discount_price)),
          'Each year it rises a little further, and by the end of year five it '
          'has reached exactly {%s}. That is the check on the whole schedule.'
          % money(BD.face)],
         {'carrying': ('What the company actually has the use of.', ''),
          'paid': ('Incurred now, settled at maturity.', ''),
          'rises': ('Toward par, because the discount is unwinding.',
                    'Students expect a liability to fall as it is serviced. A '
                    'discount bond is being serviced at less than its cost, so '
                    'it grows.'),
          money(BD.face): ('The face value, exactly.', '')},
         ['face', 'incurred', 'falls']),
        ('fig', 'scale',
         'THE CASH, EVERY YEAR',
         ['Fixed by the indenture at %s'
          % money(BD.face * BD.discount_coupon),
          'The same in year 1 and year 5',
          'Determined by the coupon rate',
          'What leaves the bank account'],
         'THE COST, EVERY YEAR',
         ['%s in year 1, %s in year 5'
          % (money(BD.schedule(BD.discount_coupon)[0][2]),
             money(BD.schedule(BD.discount_coupon)[-1][2])),
          'Rises as the carrying amount rises',
          'Determined by the effective rate',
          'What the income statement charges']),

        ('part', 'Part 2 · The discount bond, year by year',
         'the schedule, built'),

        ('task', 'Exercise 3B',
         'Build the effective interest schedule for the discount bond.',
         'Complete the table. Each closing balance is the next opening '
         'balance.',
         ['Exercise 3A, and Handout 2 for the %s issue price.'
          % money(BD.discount_price)],
         ['Interest is %s of the opening carrying amount, not of the %s face '
          'value.' % (_pc(BD.market), money(BD.face)),
          'The coupon column is %s in every year. Only the interest column '
          'moves.' % money(BD.face * BD.discount_coupon),
          'The amortisation is the interest less the coupon, and it is added '
          'to the carrying amount. Year five must close on %s.'
          % money(BD.face)]),
        ('table', _DH, _sched(BD.discount_coupon, blank=True), DEBT, _DW),
        ('answers', 16),
        ('fig', 'ranked', 'The discount bond’s carrying amount, climbing to par',
         [('Year %d' % y, BD.schedule(BD.discount_coupon)[y - 1][5],
           money(BD.schedule(BD.discount_coupon)[y - 1][5]),
           DEBT if y < BD.n else OK)
          for y in range(1, BD.n + 1)],
         'It starts at %s and ends at %s, and the whole of the %s climb is the '
         'discount being charged to interest expense.'
         % (money(BD.discount_price), money(BD.face),
            money(BD.discount)),
         'Carrying amount at each year end'),

        ('part', 'Part 3 · The premium bond, the other way',
         'the same method, mirrored'),

        ('task', 'Exercise 3C',
         'Build the schedule for the premium bond and record a year of each.',
         'Complete the table, then record the two entries underneath.',
         ['Exercise 3B.'],
         ['The method does not change. Interest is still %s of the opening '
          'carrying amount.' % _pc(BD.market),
          'Here the coupon of %s exceeds the interest, so the difference is '
          'subtracted from the carrying amount rather than added.'
          % money(BD.face * BD.premium_coupon),
          'Compare your amortisation column with Exercise 3B’s: the figures '
          'should be identical with the opposite sign.']),
        ('table', _DH, _sched(BD.premium_coupon, blank=True), PRICE, _DW),
        ('answers', 16),
        ('journal', [
            ('J1', ('Year one interest on the discount bond: %s charged, %s '
                    'paid in cash.'
                    % (money(BD.schedule(BD.discount_coupon)[0][2]),
                       money(BD.face * BD.discount_coupon)),
                    'Three lines, and the third moves no cash at all.'),
             [('Interest Expense', 0, '', ''),
              ('Discount on Bonds Payable', 1, '', ''),
              ('Cash', 1, '', '')]),
            ('J2', ('Year one interest on the premium bond: %s charged, %s '
                    'paid in cash.'
                    % (money(BD.schedule(BD.premium_coupon)[0][2]),
                       money(BD.face * BD.premium_coupon)),
                    'Here the premium account is debited, and the expense is '
                    'below the cash.'),
             [('Interest Expense', 0, '', ''),
              ('Premium on Bonds Payable', 0, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'The two bonds, side by side in year one',
         ['Discount bond', 'Premium bond'],
         ['Interest expense', 'Cash coupon', 'Carrying amount moves'],
         [[money(BD.schedule(BD.discount_coupon)[0][2]),
           money(BD.face * BD.discount_coupon),
           'Up by %s' % money(BD.schedule(BD.discount_coupon)[0][4])],
          [money(BD.schedule(BD.premium_coupon)[0][2]),
           money(BD.face * BD.premium_coupon),
           'Down by %s'
           % money(-BD.schedule(BD.premium_coupon)[0][4])]],
         'On the discount bond the expense is above the cash; on the premium '
         'bond it is below. Both carrying amounts reach %s by year five.'
         % money(BD.face)),

        ('part', 'Part 4 · The shortcut, and when it is allowed',
         'straight-line against effective interest'),

        ('task', 'Exercise 3D',
         'Compare the effective interest method with straight-line '
         'amortisation.',
         'Complete the grid. The totals row is the one that agrees.',
         ['Exercises 3B and 3C.'],
         ['Straight-line divides the %s discount by the %d years, giving the '
          'same figure every year.' % (money(BD.discount), BD.n),
          'The effective interest figures are in your Exercise 3B table: look '
          'up years 1 and 5.',
          'The last row is about permission rather than arithmetic, and the '
          'two frameworks do not agree on it.']),
        ('fill', 'R3',
         ['The rate used throughout the schedule is the effective interest '
          'rate: the %s the market demanded at issue. It is fixed for the '
          'life of the bond and does not move when market rates {move} '
          'afterwards.' % _pc(BD.market),
          'Read from the investor’s side the same number is the yield to '
          'maturity, because what the issuer {bears} is what the holder '
          'earns. One rate, two names, two sets of books.',
          'Straight-line amortisation ignores the carrying amount and divides '
          'the %s discount by the %d years, charging {%s} in every one of '
          'them. The amortisation of a discount is then flat rather than '
          'rising.'
          % (money(BD.discount), BD.n, money(BD.discount / BD.n)),
          'US GAAP permits that only where the answer is not materially '
          'different from the effective interest method, and IFRS does not '
          'permit it at {all}.',
          'Both methods charge the same total over five years, because both '
          'amortise the whole %s. What differs is which {years} carry it.'
          % money(BD.discount)],
         {'move': ('Fixed at issue, whatever happens later.', ''),
          'bears': ('The issuer’s cost is the investor’s return.', ''),
          money(BD.discount / BD.n): ('%s over %d years.'
                                      % (money(BD.discount), BD.n), ''),
          'all': ('Prohibited, not merely discouraged.', ''),
          'years': ('The pattern, not the total.',
                    'Students expect the two methods to differ in total. They '
                    'differ only in timing, and the exam asks about that.')},
         ['rise', 'coupon', 'amounts']),
        ('table', _CMPH, _cmp(blank=True), SLATE, _CMPW),
        ('answers', 8),
        ('fig', 'ranked', 'Discount amortised each year, two methods',
         [('Effective interest, year 1',
           BD.schedule(BD.discount_coupon)[0][4],
           money(BD.schedule(BD.discount_coupon)[0][4]), DEBT),
          ('Straight-line, every year', BD.discount / BD.n,
           money(BD.discount / BD.n), SLATE),
          ('Effective interest, year 5',
           BD.schedule(BD.discount_coupon)[-1][4],
           money(BD.schedule(BD.discount_coupon)[-1][4]), PRICE)],
         'Both methods amortise the whole %s over five years. Straight-line '
         'charges the same amount every year; effective interest charges more '
         'as the liability grows.' % money(BD.discount),
         'Amortisation of the discount'),

        ('watch', 'Interest expense is the effective rate on the carrying '
                  'amount, never the coupon rate on the face value. A stem '
                  'that gives you a %s coupon on %s of face and asks for '
                  'interest expense is offering %s as a distractor, and the '
                  'answer is %s.'
                  % (_pc(BD.discount_coupon), money(BD.face),
                     money(BD.face * BD.discount_coupon),
                     money(BD.schedule(BD.discount_coupon)[0][2]))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under the effective interest method, interest expense for a '
                'period is:',
         ['The coupon rate times the face value',
          'The effective rate times the opening carrying amount',
          'The effective rate times the face value',
          'The coupon rate times the carrying amount'],
         1, 'Level A',
         'The rate the borrowing really costs, applied to what is really owed. '
         '(A) is the cash coupon, which is the figure the question usually '
         'offers first.'),

        ('mcq', 'A bond issued at a discount has, in each period, interest '
                'expense that is:',
         ['Equal to the cash coupon', 'Greater than the cash coupon',
          'Less than the cash coupon', 'Zero'],
         1, 'Level A',
         'The company borrowed less than it will repay, so the cost exceeds '
         'the cash. (C) is true of a premium bond, and the pair is the '
         'distinction being tested.'),

        ('mcq', 'Amortising a discount on bonds payable:',
         ['Reduces the carrying amount', 'Increases the carrying amount',
          'Has no effect on the carrying amount',
          'Requires a cash payment'],
         1, 'Level B',
         'The unpaid part of the cost is added to the liability, which climbs '
         'toward par. (D) is the misreading the word amortisation invites: no '
         'cash moves on that line at all.'),

        ('mcq', 'A %s bond with a %s coupon was issued for %s to yield %s. '
                'Interest expense in year one is:'
         % (money(BD.face), _pc(BD.discount_coupon),
            money(BD.discount_price), _pc(BD.market)),
         [money(BD.face * BD.discount_coupon),
          money(BD.schedule(BD.discount_coupon)[0][2]),
          money(BD.face * BD.market), money(BD.discount / BD.n)],
         1, 'Level B',
         '%s of %s is %s. (C) applies the effective rate to the face value, '
         'which is the one combination the method never uses.'
         % (_pc(BD.market), money(BD.discount_price),
            money(BD.schedule(BD.discount_coupon)[0][2]))),

        ('mcq', 'Over the whole term, total interest expense under the '
                'effective interest method compared with straight-line is:',
         ['Higher', 'The same', 'Lower', 'Not comparable'],
         1, 'Level C',
         'Both methods charge the coupons plus the whole %s discount; only the '
         'pattern differs. (A) is the answer the rising schedule suggests and '
         'confuses timing with amount.' % money(BD.discount)),

        ('mcq', 'Straight-line amortisation of a bond discount is:',
         ['Required under IFRS',
          'Permitted under US GAAP only where the result is not materially '
          'different from the effective interest method',
          'Required under US GAAP for all bonds',
          'Prohibited under both frameworks'],
         1, 'Level B',
         'A materiality accommodation under US GAAP, and not available under '
         'IFRS at all. (A) inverts the position, and IFRS requires the '
         'effective interest method without exception.'),

        ('mcq', 'On a bond issued at a premium, the carrying amount over the '
                'term:',
         ['Rises to the face value', 'Falls to the face value',
          'Stays at the issue price', 'Falls to zero'],
         1, 'Level C',
         'The coupon exceeds the cost, so the excess reduces the liability '
         'until it reaches %s at maturity. (D) confuses the carrying amount '
         'with the balance after repayment.' % money(BD.face)),

        ('tip', 'Build the first line of any bond schedule before answering '
                'anything: opening carrying amount, times the effective rate, '
                'less the cash coupon. Almost every distractor on this topic '
                'is one of those three numbers offered in place of the '
                'answer.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the discount bond schedule'),
        ('table', _DH, _sched(BD.discount_coupon), DEBT, _DW),
        ('h3', 'Exercise 3C · the premium bond schedule'),
        ('table', _DH, _sched(BD.premium_coupon), PRICE, _DW),
        ('h3', 'Exercise 3D · the two methods compared'),
        ('table', _CMPH, _cmp(), SLATE, _CMPW),
        ('h3', 'The two interest entries, completed'),
        ('journal', [
            ('J1', 'Year one interest on the discount bond.',
             [('Interest Expense', 0,
               money(BD.schedule(BD.discount_coupon)[0][2]), ''),
              ('Discount on Bonds Payable', 1, '',
               money(BD.schedule(BD.discount_coupon)[0][4])),
              ('Cash', 1, '', money(BD.face * BD.discount_coupon))]),
            ('J2', 'Year one interest on the premium bond.',
             [('Interest Expense', 0,
               money(BD.schedule(BD.premium_coupon)[0][2]), ''),
              ('Premium on Bonds Payable', 0,
               money(-BD.schedule(BD.premium_coupon)[0][4]), ''),
              ('Cash', 1, '', money(BD.face * BD.premium_coupon))]),
        ]),
        ('prose', 'The two amortisation columns are exact mirrors: %s and %s '
                  'in year one, %s and %s in year five. Both coupons sit the '
                  'same distance from the %s market rate, so the schedules '
                  'differ only in sign.'
                  % (money(BD.schedule(BD.discount_coupon)[0][4]),
                     money(BD.schedule(BD.premium_coupon)[0][4]),
                     money(BD.schedule(BD.discount_coupon)[-1][4]),
                     money(BD.schedule(BD.premium_coupon)[-1][4]),
                     _pc(BD.market)), 'R2'),
        ('prose', 'Both schedules close on %s exactly, which is the check '
                  'worth running before anything else. A schedule that misses '
                  'par has an arithmetic error in it, and the same test caught '
                  'a real one in Volume 7’s lease.' % money(BD.face), 'R2'),
    ],
)
