# -*- coding: utf-8 -*-
"""Volume 7, Handout 6 — Where Each Lease Lands on the Statements.

Covers A.2(u): the lessee's reporting of a finance lease and an operating
lease, on all three statements, and the pattern the two produce.
"""
from fadata import N, LS, Y
from data import money, num

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_AMH = ['Year', 'Opening liability', 'Interest at %s%%'
        % num(LS.fin_rate * 100, 0), 'Payment', 'Closing liability']
_AMW = [10, 24, 22, 20, 24]


def _amort(blank=False):
    rows = []
    for y, op, i, pay, cl in LS.fin_schedule:
        rows.append([str(y), money(op),
                     '' if blank and y > 1 else money(i), money(pay),
                     '' if blank and y > 1 else money(cl)])
        if blank and y > 1:
            rows[-1][1] = ''
    return rows


_COSTH = ['Year', 'Finance lease cost', 'Operating lease cost']
_COSTW = [14, 43, 43]


def _costs(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for y in range(1, LS.fin_n + 1):
        rows.append([str(y), c(money(LS.fin_cost(y))),
                     money(LS.op_cost_y1) if y <= LS.op_n else '—'])
    rows.append(['Total', c(money(LS.fin_payments * LS.fin_n)),
                 money(LS.op_total_payments)])
    return rows


HANDOUT = dict(
    n=6,
    title='Where Each Lease Lands on the Statements',
    subtitle='The machine lease costs %s in year one and %s in year five. The '
             'warehouse floor costs %s every year. The payments never change.'
             % (money(LS.fin_cost(1)), money(LS.fin_cost(LS.fin_n)),
                money(LS.op_cost_y1)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the mechanics, R3 for the statement presentation, '
                 'which the exam asks about in its own terms.',
        collocations=['amortise the right-of-use asset',
                      'unwind the lease liability',
                      'apply the effective interest method',
                      'report a single lease cost',
                      'classify a payment as financing',
                      'front-load the expense'],
        pairs=['interest expense / amortisation expense',
               'single lease cost / two separate charges',
               'operating cash flow / financing cash flow',
               'front-loaded / straight-line'],
        nots=['A finance lease is not more expensive. Over the term both '
              'leases cost exactly what was paid.',
              'The single lease cost of an operating lease is not rent paid. It '
              'is the total payments spread evenly, whatever the payment '
              'pattern is.'],
    ),

    objectives=[
        'Build a lease liability amortisation schedule.',
        'Record the two charges a finance lease produces each year.',
        'Record the single cost an operating lease produces each year.',
        'Say where each lease payment appears in the cash flow statement.',
        'Explain why one lease front-loads its cost and the other does not.',
    ],

    terms=[
        ('effective interest method',
         'Charging interest at a constant rate on a falling balance, so the '
         'charge declines as the liability is repaid.',
         'طريقة الفائدة الفعلية',
         'The same method the exam applies to bonds and to notes. The falling '
         'balance is what makes the charge fall.'),
        ('single lease cost',
         'The one expense an operating lease produces each period, equal to the '
         'total payments divided by the lease term.', 'تكلفة الإيجار الواحدة',
         'It is not interest and it is not amortisation. It is one line, and '
         'the standard calls it a lease cost.'),
        ('front-loaded',
         'Describing a cost that is higher in the early periods of an '
         'arrangement than in the later ones.', 'مُحمَّل على البداية',
         'A pattern, not a total. Front-loading never changes how much is paid '
         'in the end.'),
        ('non-cash transaction',
         'A transaction that changes assets and liabilities without any cash '
         'moving, disclosed rather than classified.',
         'معاملة غير نقدية',
         'Recognising a lease is the commonest one in this volume. It belongs '
         'in no section of the cash flow statement at all.'),
    ],

    blocks=[
        ('scene', 'Two leases, two patterns', [
            'Handout 5 classified Northwind’s machine lease as a finance lease '
            'and its warehouse floor as an operating lease.',
            'Both are on the balance sheet. The machine at %s and the floor at '
            '%s.' % (money(LS.fin_pv), money(LS.op_pv)),
            'From here the two part company. The finance lease produces two '
            'charges each year and the operating lease produces one, and the '
            'patterns are not the same shape at all.',
            'This handout reports both, year by year, on all three statements.',
        ]),
        ('fig', 'ranked', 'What each lease costs in its first year',
         [('Finance lease — interest plus amortisation', LS.fin_cost(1),
           money(LS.fin_cost(1)), LEASE),
          ('Finance lease — the same lease in year %d' % LS.fin_n,
           LS.fin_cost(LS.fin_n), money(LS.fin_cost(LS.fin_n)), LIAB),
          ('Operating lease — single lease cost, every year',
           LS.op_cost_y1, money(LS.op_cost_y1), TAX)],
         'The first two bars are the same contract in two different years. The '
         'third is flat for the whole term.',
         'Annual cost in the income statement'),

        ('part', 'Part 1 · The finance lease liability',
         'a schedule like any other borrowing'),

        ('task', 'Exercise 6A',
         'Build the lease liability amortisation schedule.',
         'Complete the table. Each closing balance is the next opening '
         'balance.',
         ['Handout 5 Exercise 5A, for the %s present value.'
          % money(LS.fin_pv),
          'Volume 7 Handout 1, on how a liability unwinds.'],
         ['Interest is %s%% of the opening balance, not of the original %s.'
          % (num(LS.fin_rate * 100, 0), money(LS.fin_pv)),
          'The payment of %s is the same every year, so as the interest falls '
          'more of each payment reduces the balance.'
          % money(LS.fin_payments),
          'The last closing balance must be nil. If it is not, check the '
          'interest you computed in year one.']),
        ('table', _AMH, _amort(blank=True), LEASE, _AMW),
        ('answers', 12),
        ('fig', 'formula', 'How one line of the schedule is built',
         [('Opening liability', 'What is still owed at the start', LIAB),
          ('+', '', None),
          ('Interest at %s%%' % num(LS.fin_rate * 100, 0),
           'Charged on the opening balance alone', LEASE),
          ('−', '', None),
          ('Payment %s' % money(LS.fin_payments),
           'The same amount every year', TAX),
          ('=', '', None),
          ('Closing liability', 'Which opens the next year', SLATE)],
         'Interest on a falling balance falls. That one fact produces the whole '
         'pattern this handout is about.'),

        ('part', 'Part 2 · The finance lease in the accounts',
         'two charges, not one'),

        ('prose', 'A finance lease is reported as what it is: an asset bought '
                  'with borrowed money. The right-of-use asset is amortised on '
                  'a straight-line basis over the term, and the liability '
                  'carries interest on the effective interest method.', 'R2'),

        ('task', 'Exercise 6B',
         'Record the first year of the finance lease and name both charges.',
         'Read and complete, then record the entries underneath.',
         ['Exercise 6A.'],
         ['Two charges reach the income statement, and they are not the same '
          'kind of expense.',
          'The amortisation is %s divided by %d years, and it is the same every '
          'year.' % (money(LS.fin_pv), LS.fin_n),
          'The last blank is the shape the two charges make together as the '
          'years pass.']),
        ('fill', 'R2',
         ['The right-of-use asset of %s is written off over the %d-year term on '
          'a straight-line basis, giving {%s} of amortisation in every year of '
          'the lease.' % (money(LS.fin_pv), LS.fin_n,
                          money(LS.fin_amort(1))),
          'The liability carries interest instead. In year one it is %s%% of '
          '%s, or %s; in year two the balance is lower, so the charge {falls} '
          'to %s.' % (num(LS.fin_rate * 100, 0), money(LS.fin_pv),
                      money(LS.fin_schedule[0][2]),
                      money(LS.fin_schedule[1][2])),
          'Two charges therefore reach the income statement each year, and they '
          'are reported {separately}: amortisation among the operating expenses '
          'and interest among the finance costs.',
          'Because one charge is flat and the other declines, the total cost of '
          'the lease is {front-loaded}. It is %s in year one and %s in year '
          '%d.' % (money(LS.fin_cost(1)), money(LS.fin_cost(LS.fin_n)),
                  LS.fin_n)],
         {money(LS.fin_amort(1)): ('%s over %d years.'
                                   % (money(LS.fin_pv), LS.fin_n), ''),
          'falls': ('A constant rate on a smaller balance.', ''),
          'separately': ('Two lines, in two different parts of the statement.',
                         'Students report one combined lease expense. That is '
                         'the operating lease treatment, and using it here '
                         'loses the interest line the exam asks about.'),
          'front-loaded': ('Heavier early, lighter later.', '')},
         [money(LS.fin_payments), 'rises', 'straight-line']),
        ('journal', [
            ('J1', ('The machine lease recognised at commencement, at the '
                    'present value of the five payments.',
                    'An asset and a liability, equal on day one and never '
                    'again.'),
             [('Right-of-Use Asset — Machine', 0, '', ''),
              ('Lease Liability', 1, '', '')]),
            ('J2', ('Year one amortisation of the right-of-use asset, %s over '
                    '%d years.' % (money(LS.fin_pv), LS.fin_n),
                    'An operating expense, flat for the whole term.'),
             [('Amortisation Expense — Right-of-Use Asset', 0, '', ''),
              ('Accumulated Amortisation — Right-of-Use Asset', 1, '', '')]),
            ('J3', ('The year one payment of %s, of which %s is interest.'
                    % (money(LS.fin_payments),
                       money(LS.fin_schedule[0][2])),
                    'One cheque, split between a finance cost and a '
                    'repayment.'),
             [('Interest Expense', 0, '', ''),
              ('Lease Liability', 0, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('fig', 'taccounts',
         [('Lease Liability',
           [('J3', money(LS.fin_payments - LS.fin_schedule[0][2])),
            ('c/d', money(LS.fin_schedule[0][4]))],
           [('J1', money(LS.fin_pv)), ('J3i', money(LS.fin_schedule[0][2]))],
           '#' + LIAB),
          ('Right-of-Use Asset — Machine',
           [('J1', money(LS.fin_pv))],
           [('c/d', money(LS.fin_pv))],
           '#' + LEASE)],
         'The liability is credited with its interest and debited with the '
         'repayment part of the payment, so it falls by %s in the first year. '
         'The asset is untouched; its amortisation builds up in a separate '
         'account.' % money(LS.fin_pv - LS.fin_schedule[0][4]),
         2,
         [('J1', 'The lease recognised at commencement'),
          ('J3', 'The repayment part of the year one payment'),
          ('J3i', 'The interest part of the year one payment'),
          ('c/d', 'Balance carried down at 31 December %s' % Y)]),

        ('part', 'Part 3 · The operating lease in the accounts',
         'one cost, spread evenly'),

        ('task', 'Exercise 6C',
         'Record the first year of the operating lease and say what the charge '
         'is.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 5 Exercise 5C, which classified this lease.'],
         ['The total committed is %d payments of %s. Divide it by the term.'
          % (LS.op_n, money(LS.op_payments)),
          'The charge is one line. It is not split between interest and '
          'amortisation, even though the liability does carry interest '
          'internally.',
          'The last blank is the basis on which the cost is spread.']),
        ('fill', 'R2',
         ['The warehouse floor is on the balance sheet at %s, exactly as the '
          'machine is. The difference is what reaches the income {statement}.'
          % money(LS.op_pv),
          'Northwind has committed to %d payments of %s, or {%s} in total. '
          'Spread over the %d-year term, the charge is %s in each year.'
          % (LS.op_n, money(LS.op_payments), money(LS.op_total_payments),
             LS.op_n, money(LS.op_cost_y1)),
          'That is reported as one line, called a {single} lease cost, among '
          'the operating expenses. No interest line appears, although the '
          'liability does unwind with interest inside the computation.',
          'The cost is the same in every year of the term, so it is said to be '
          'recognised on a {straight-line} basis. Even a lease with rising '
          'payments produces a flat charge.'],
         {'statement': ('The balance sheets match; this is where they part.',
                        ''),
          money(LS.op_total_payments): ('%d payments of %s.'
                                        % (LS.op_n, money(LS.op_payments)),
                                        ''),
          'single': ('One line, and the standard’s own word for it.', ''),
          'straight-line': ('Equal amounts in equal periods.',
                            'Students charge the cash paid. With uneven '
                            'payments that is wrong in every year but the '
                            'average one.')},
         [money(LS.op_payments), 'finance', 'declining']),
        ('journal', [
            ('J4', ('The warehouse floor lease recognised at commencement, at '
                    'the present value of the three payments.',
                    'An operating lease is on the balance sheet too.'),
             [('Right-of-Use Asset — Warehouse Floor', 0, '', ''),
              ('Lease Liability', 1, '', '')]),
            ('J5', ('Year one of the operating lease: one cost of %s and one '
                    'payment of %s.' % (money(LS.op_cost_y1),
                                        money(LS.op_payments)),
                    'One expense line, whatever is happening underneath.'),
             [('Lease Cost', 0, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'The same balance sheet, two income statements',
         ['Finance lease — the machine',
          'Operating lease — the warehouse floor'],
         ['On the balance sheet', 'In the income statement',
          'Pattern of the cost'],
         [['Right-of-use asset and lease liability',
           'Amortisation expense and interest expense, separately',
           'Front-loaded, %s falling to %s'
           % (money(LS.fin_cost(1)), money(LS.fin_cost(LS.fin_n)))],
          ['Right-of-use asset and lease liability',
           'A single lease cost, among operating expenses',
           'Flat, %s every year' % money(LS.op_cost_y1)]],
         'The first column is identical. Everything the two kinds disagree '
         'about is in the second and third.'),

        ('part', 'Part 4 · The two patterns side by side',
         'and why the totals still agree'),

        ('task', 'Exercise 6D',
         'Compare the annual cost of the two leases and total each column.',
         'Complete the finance lease column, then total both.',
         ['Exercises 6A, 6B and 6C.'],
         ['Each finance lease figure is that year’s interest from Exercise 6A '
          'plus %s of amortisation.' % money(LS.fin_amort(1)),
          'The operating lease column is given, and it stops after %d years '
          'because the term is shorter.' % LS.op_n,
          'The finance lease total must equal %d payments of %s. If it does '
          'not, one of the interest figures is wrong.'
          % (LS.fin_n, money(LS.fin_payments))]),
        ('table', _COSTH, _costs(blank=True), LEASE, _COSTW),
        ('answers', 6),
        ('fig', 'ranked', 'The finance lease cost, year by year',
         [('Year %d' % y, LS.fin_cost(y), money(LS.fin_cost(y)),
           LEASE if y <= 2 else (SLATE if y == 3 else LIAB))
          for y in range(1, LS.fin_n + 1)],
         'Amortisation of %s is the same in every bar. The whole of the decline '
         'is the interest, falling as the liability is repaid.'
         % money(LS.fin_amort(1)),
         'Total cost over the term: %s, which is the %d payments'
         % (money(LS.fin_payments * LS.fin_n), LS.fin_n)),

        ('part', 'Part 5 · The cash flow statement',
         'where each payment is classified'),

        ('prose', 'The payments are identical in form and classified '
                  'differently. A finance lease payment is split: the interest '
                  'part is an operating outflow and the principal part is a '
                  'financing outflow. An operating lease payment is an '
                  'operating outflow in full.', 'R3'),

        ('task', 'Exercise 6E',
         'Classify each lease cash flow in the statement of cash flows.',
         'Sort each item into the section it belongs in.',
         ['The paragraph above, and Volume 1 Handout 8 on the three '
          'sections.'],
         ['Split the finance lease payment before you classify it: %s of '
          'interest and %s of principal in year one.'
          % (money(LS.fin_schedule[0][2]),
             money(LS.fin_payments - LS.fin_schedule[0][2])),
          'Recognising a lease at commencement moves no cash at all, so it '
          'appears in neither section.',
          'Short-term lease payments under the recognition exemption are '
          'ordinary operating payments.']),
        ('sortgrid',
         ['Lease cash flow', 'OPERATING', 'FINANCING'],
         ['The interest part of a finance lease payment',
          'The principal part of a finance lease payment',
          'An operating lease payment in full',
          'A payment on a short-term lease under the exemption',
          'Variable lease payments not included in the liability'],
         ['OPERATING', 'FINANCING', 'OPERATING', 'OPERATING', 'OPERATING'],
         'Only one of the five is financing, and it is the part of the payment '
         'that reduces the recognised liability.'),
        ('fig', 'buckets', 'The year one payments, split and classified',
         [('OPERATING OUTFLOWS', TAX,
           ['Finance lease interest %s' % money(LS.fin_schedule[0][2]),
            'Operating lease payment %s' % money(LS.op_payments),
            'Short-term and variable lease payments']),
          ('FINANCING OUTFLOWS', LIAB,
           ['Finance lease principal %s'
            % money(LS.fin_payments - LS.fin_schedule[0][2]),
            'Nothing else from either lease',
            '']),
          ('NEITHER', SLATE,
           ['Recognising a lease at commencement',
            'Disclosed as a non-cash transaction',
            ''])],
         'The two leases paid %s in cash this year, and only %s of it left the '
         'operating section.'
         % (money(LS.fin_payments + LS.op_payments),
            money(LS.fin_payments - LS.fin_schedule[0][2]))),

        ('watch', 'Over the whole term both leases cost exactly what was paid: '
                  '%s for the machine and %s for the floor. A finance lease is '
                  'not a more expensive lease. It is the same cash in a '
                  'different order, which is why a question asking for total '
                  'expense over the term needs no schedule at all.'
                  % (money(LS.fin_payments * LS.fin_n),
                     money(LS.op_total_payments))),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A lessee reports a finance lease in the income statement as:',
         ['A single lease cost on a straight-line basis',
          'Amortisation expense and interest expense, reported separately',
          'Rent expense equal to the cash paid',
          'Interest expense only'],
         1, 'Level A',
         'Two charges, in two places: amortisation among operating expenses and '
         'interest among finance costs. (A) is the operating lease treatment, '
         'which is the distinction the question exists to test.'),

        ('mcq', 'A %d-year operating lease requires %d payments of %s. The '
                'lease cost in year one is:'
         % (LS.op_n, LS.op_n, money(LS.op_payments)),
         [money(LS.op_total_payments), money(LS.op_cost_y1),
          money(LS.op_pv), money(LS.op_pv / LS.op_n)],
         1, 'Level A',
         '%s over %d years is %s a year. (A) charges the whole commitment in '
         'the first year, and (D) spreads the present value rather than the '
         'payments, which is the finance lease computation applied to the '
         'wrong kind of lease.'
         % (money(LS.op_total_payments), LS.op_n, money(LS.op_cost_y1))),

        ('mcq', 'A lease liability of %s carries interest at %s%%. The annual '
                'payment is %s. Interest expense in year two is:'
         % (money(LS.fin_pv), num(LS.fin_rate * 100, 0),
            money(LS.fin_payments)),
         [money(LS.fin_schedule[0][2]), money(LS.fin_schedule[1][2]),
          money(LS.fin_pv * LS.fin_rate * 2),
          money(LS.fin_payments * LS.fin_rate)],
         1, 'Level B',
         'Year two interest is %s%% of the year two opening balance of %s, or '
         '%s. (A) is year one interest, charged again on a balance that has '
         'already fallen by %s.'
         % (num(LS.fin_rate * 100, 0), money(LS.fin_schedule[1][1]),
            money(LS.fin_schedule[1][2]),
            money(LS.fin_pv - LS.fin_schedule[0][4]))),

        ('mcq', 'In the statement of cash flows, the principal portion of a '
                'finance lease payment is reported as:',
         ['An operating outflow', 'A financing outflow',
          'An investing outflow', 'A non-cash transaction'],
         1, 'Level B',
         'Repaying a recognised liability is financing, exactly as repaying a '
         'loan is. (A) is the trap, because the interest portion of the same '
         'cheque does sit in operating.'),

        ('mcq', 'Compared with an operating lease of the same asset for the '
                'same payments, a finance lease reports, in the first year:',
         ['A lower total expense', 'A higher total expense',
          'The same total expense', 'No expense at all'],
         1, 'Level B',
         'Front-loading makes the first year heavier: %s against %s on '
         'Northwind’s figures. (C) is true over the whole term and false in '
         'every single year of it, which is why the stem names a year.'
         % (money(LS.fin_cost(1)), money(LS.op_cost_y1))),

        ('mcq', 'Over the entire lease term, total expense under a finance '
                'lease compared with an operating lease on the same payments '
                'is:',
         ['Higher, because interest is charged',
          'The same, because both equal the payments made',
          'Lower, because the asset is amortised',
          'Not comparable'],
         1, 'Level C',
         'Both come to the cash paid: %s over %d years here. (A) double-counts, '
         'because the interest is part of the payments and not additional to '
         'them.' % (money(LS.fin_payments * LS.fin_n), LS.fin_n)),

        ('mcq', 'A company recognises a right-of-use asset and a lease '
                'liability of %s at commencement. In the statement of cash '
                'flows for that year, the recognition is reported as:'
         % money(LS.fin_pv),
         ['An investing outflow of %s' % money(LS.fin_pv),
          'Nothing, with disclosure as a non-cash transaction',
          'A financing inflow and an investing outflow of %s'
          % money(LS.fin_pv),
          'An operating outflow of %s' % money(LS.fin_pv)],
         1, 'Level C',
         'No cash moves at commencement, so nothing enters any section and the '
         'transaction is disclosed instead. (C) is the gross-up that would be '
         'right for an asset bought with a new loan and wrong here, because '
         'there was never a loan drawn in cash.'),

        ('tip', 'Three figures settle almost any lease question: the opening '
                'liability, the rate and the payment. From those you can build '
                'any row of the schedule, and the amortisation is the present '
                'value divided by the term whatever the schedule says.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6A · the completed amortisation schedule'),
        ('table', _AMH, _amort(), LEASE, _AMW),
        ('prose', 'The last closing balance is nil, which is the check on the '
                  'whole schedule. Interest falls every year because it is '
                  'charged on the opening balance, and the opening balance '
                  'falls every year.', 'R2'),
        ('h3', 'Exercise 6D · the two cost patterns'),
        ('table', _COSTH, _costs(), LEASE, _COSTW),
        ('prose', 'The finance lease column totals %s, which is %d payments of '
                  '%s. Amortisation of %s is in every year and the rest is the '
                  'falling interest. The last year carries %s of amortisation '
                  'rather than %s, because the five charges have to add to the '
                  '%s the asset was recognised at.'
                  % (money(LS.fin_payments * LS.fin_n), LS.fin_n,
                     money(LS.fin_payments), money(LS.fin_amort(1)),
                     money(LS.fin_amort(LS.fin_n)),
                     money(LS.fin_amort(1)), money(LS.fin_pv)), 'R2'),
        ('h3', 'The finance lease entries, completed'),
        ('journal', [
            ('J1', 'The machine lease recognised at commencement.',
             [('Right-of-Use Asset — Machine', 0, money(LS.fin_pv), ''),
              ('Lease Liability', 1, '', money(LS.fin_pv))]),
            ('J2', 'Year one amortisation of the right-of-use asset.',
             [('Amortisation Expense — Right-of-Use Asset', 0,
               money(LS.fin_amort(1)), ''),
              ('Accumulated Amortisation — Right-of-Use Asset', 1, '',
               money(LS.fin_amort(1)))]),
            ('J3', 'The year one payment, split.',
             [('Interest Expense', 0, money(LS.fin_schedule[0][2]), ''),
              ('Lease Liability', 0,
               money(LS.fin_payments - LS.fin_schedule[0][2]), ''),
              ('Cash', 1, '', money(LS.fin_payments))]),
        ]),
        ('h3', 'The operating lease entries, completed'),
        ('journal', [
            ('J4', 'The warehouse floor lease recognised at commencement.',
             [('Right-of-Use Asset — Warehouse Floor', 0,
               money(LS.op_pv), ''),
              ('Lease Liability', 1, '', money(LS.op_pv))]),
            ('J5', 'Year one of the operating lease.',
             [('Lease Cost', 0, money(LS.op_cost_y1), ''),
              ('Cash', 1, '', money(LS.op_payments))]),
        ]),
        ('prose', 'J5 balances only because the payment and the straight-line '
                  'cost are equal here. Where the payments rise or fall across '
                  'the term, the difference is taken to the right-of-use asset '
                  'and the liability, and the single lease cost stays flat.',
         'R2'),
    ],
)
