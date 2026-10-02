# -*- coding: utf-8 -*-
"""Volume 12, Handout 4 — Leases: the Lessee's Two Models.

Covers A.2 ff(iv): the one named lease difference, worked on the warehouse
floor lease of Volume 7.
"""
from fadata import N, LS, Y
from data import money, num

GAAP, IFRS, BOTH, SLATE = '1F6F8F', 'A05A2B', '2E7D5B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_COSTH = ['Year', 'US GAAP, operating lease', 'IFRS, single model']
_COSTW = [14, 43, 43]


def _costs(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for y in range(1, LS.op_n + 1):
        rows.append([str(y), money(LS.op_cost_y1),
                     c(money(LS.op_ifrs_cost(y)))])
    rows.append(['Total', money(LS.op_total_payments),
                 c(money(LS.op_total_payments))])
    return rows


_SPLITH = ['Year %s of the warehouse floor lease under IFRS' % '1', 'Amount']
_SPLITW = [70, 30]


def _split(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Right-of-use asset recognised', money(LS.op_pv)],
        ['Amortisation, %s over %d years' % (money(LS.op_pv), LS.op_n),
         c(money(LS.op_amort(1)))],
        ['Interest on the liability at %s' % _pc(LS.op_rate),
         c(money(LS.op_schedule[0][2]))],
        ['Total charged to profit', c(money(LS.op_ifrs_cost(1)))],
        ['Compared with the single lease cost under US GAAP',
         money(LS.op_cost_y1)],
    ]


_WHEREH = ['', 'US GAAP operating lease', 'IFRS single model']
_WHEREW = [28, 36, 36]


def _where(blank=False):
    def c(v):
        return '' if blank else v
    interest = LS.op_schedule[0][2]
    return [
        ['Income statement', 'One lease cost, %s' % money(LS.op_cost_y1),
         c('Amortisation %s and interest %s'
           % (money(LS.op_amort(1)), money(interest)))],
        ['Operating expenses', 'All of the %s' % money(LS.op_cost_y1),
         c('The %s of amortisation only' % money(LS.op_amort(1)))],
        ['Finance costs', 'Nothing', c('The %s of interest' % money(interest))],
        ['Operating cash flow', 'All of the %s paid'
         % money(LS.op_payments),
         c('The %s of interest only' % money(interest))],
        ['Financing cash flow', 'Nothing',
         c('The rest of the payment, %s'
           % money(LS.op_payments - interest))],
    ]


HANDOUT = dict(
    n=4,
    title='Leases: the Lessee’s Two Models',
    subtitle='Northwind’s warehouse floor is an operating lease under US GAAP '
             'and a finance lease in all but name under IFRS. The cash is '
             'identical and almost nothing else is.',
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the mechanics, R3 for the comparison, which the exam '
                 'asks as an effect-on-the-statements question.',
        collocations=['classify a lease as operating',
                      'apply a single lessee model',
                      'report a single lease cost',
                      'split a payment between interest and principal',
                      'elect the short-term exemption',
                      'elect the low-value exemption'],
        pairs=['dual model / single model',
               'operating lease / finance lease',
               'one lease cost / two charges',
               'operating outflow / financing outflow'],
        nots=['IFRS has not abolished the operating lease. It has abolished '
              'the lessee’s operating lease accounting, which is a different '
              'thing.',
              'The single model does not change the cash. The same %s leaves '
              'the company in the same year under both frameworks.'
              % money(LS.op_payments)],
    ),

    objectives=[
        'State the one named lease difference between the frameworks.',
        'Report a lease under the US GAAP operating model.',
        'Report the same lease under the IFRS single model.',
        'Compare the income statement and cash flow effects.',
        'Say which recognition exemptions each framework offers.',
    ],

    terms=[
        ('dual model',
         'The US GAAP approach, under which a lessee classifies a lease as '
         'either finance or operating and accounts for each differently.',
         'النموذج المزدوج',
         'Volume 7 Handouts 5 and 6 worked both halves of it. The '
         'classification tests exist because the accounting differs.'),
        ('single lessee model',
         'The IFRS approach, under which every recognised lease is accounted '
         'for the way US GAAP accounts for a finance lease.',
         'نموذج المستأجر الواحد',
         'There is no lessee classification test under IFRS at all, which is '
         'why the term operating lease survives only for the lessor.'),
        ('low-value lease',
         'A lease of an underlying asset of small value, which IFRS allows a '
         'lessee not to recognise.', 'عقد إيجار منخفض القيمة',
         'An IFRS exemption with no US GAAP equivalent. The short-term '
         'exemption exists under both.'),
    ],

    blocks=[
        ('scene', 'The floor, reported twice', [
            'Volume 7 classified Northwind’s warehouse floor as an operating '
            'lease: %d years at %s a year, against a building with %d years of '
            'life left.' % (LS.op_n, money(LS.op_payments),
                            LS.op_asset_life),
            'Under US GAAP that classification matters. The lease produces one '
            'cost of %s a year and nothing else.' % money(LS.op_cost_y1),
            'Under IFRS the classification does not exist for a lessee. Every '
            'recognised lease is accounted for the way Volume 7 Handout 6 '
            'accounted for the machine: an asset amortised and a liability '
            'carrying interest.',
            'So the same lease costs %s in its first year under one framework '
            'and %s under the other.'
            % (money(LS.op_cost_y1), money(LS.op_ifrs_cost(1))),
        ]),
        ('fig', 'ranked', 'The warehouse floor, first-year cost',
         [('IFRS single model — amortisation plus interest',
           LS.op_ifrs_cost(1), money(LS.op_ifrs_cost(1)), IFRS),
          ('US GAAP operating lease — one lease cost', LS.op_cost_y1,
           money(LS.op_cost_y1), GAAP),
          ('Cash actually paid, under both', LS.op_payments,
           money(LS.op_payments), BOTH)],
         'The third bar is the cash. Neither framework changes it, and by year '
         '%d the IFRS charge has fallen to %s, below the cash.'
         % (LS.op_n, money(LS.op_ifrs_cost(LS.op_n))),
         'Year one of a %d-year lease at %s a year'
         % (LS.op_n, money(LS.op_payments))),

        ('part', 'Part 1 · One model or two',
         'the difference stated'),

        ('task', 'Exercise 4A',
         'State the lease difference between the two frameworks.',
         'Read and complete. Write one word in each space.',
         ['Volume 7 Handout 5, on the classification tests.',
          'Volume 7 Handout 6, on the finance lease pattern.'],
         ['Under US GAAP a lessee has to classify a lease before it can account '
          'for it. Ask whether an IFRS lessee has the same decision to make.',
          'If there is only one accounting treatment, the five tests of Volume '
          '7 have nothing left to decide.',
          'The last blank is which of the two US GAAP treatments the single '
          'model resembles.']),
        ('fill', 'R2',
         ['US GAAP applies a {dual} model. A lessee classifies a lease as '
          'finance or operating using the five tests of Volume 7, and the two '
          'classes are then accounted for differently.',
          'IFRS applies one treatment to every recognised lease, so a lessee '
          'has no classification decision to make at all. The five tests are '
          '{irrelevant} to it.',
          'The single treatment is the finance lease treatment. A right-of-use '
          'asset is amortised on a straight-line basis and the liability '
          'carries {interest} on the effective interest method.',
          'So every IFRS lease is {front-loaded}, including the ones US GAAP '
          'would have called operating, and only the lessor still classifies '
          'leases under IFRS.'],
         {'dual': ('Two classes, two treatments.', ''),
          'irrelevant': ('Nothing left for them to decide.',
                         'Students apply the Volume 7 tests under IFRS. For a '
                         'lessee there is nothing to classify.'),
          'interest': ('A falling charge on a falling balance.', ''),
          'front-loaded': ('Heavier early, lighter later.', '')},
         ['single', 'required', 'flat']),
        ('fig', 'fork', 'How is this lease accounted for?',
         [('Does the lessee report under IFRS?',
           'YES → one treatment, and no classification at all', IFRS),
          ('Under US GAAP, does the lease meet any of the five tests?',
           'YES → a finance lease, with two charges', GAAP),
          ('Under US GAAP, meeting none of them?',
           'An operating lease, with one straight-line cost', SLATE)]),

        ('part', 'Part 2 · The floor under IFRS',
         'the same lease, the other model'),

        ('task', 'Exercise 4B',
         'Report the warehouse floor lease under the IFRS single model.',
         'Complete the schedule. The right-of-use asset is given.',
         ['Exercise 4A, and Volume 7 Handout 6 Exercise 6A.'],
         ['Amortise the %s right-of-use asset straight-line over the %d-year '
          'term.' % (money(LS.op_pv), LS.op_n),
          'Interest is %s of the opening liability, which is the same %s the '
          'asset was recognised at.'
          % (_pc(LS.op_rate), money(LS.op_pv)),
          'Add the two. The last row is the US GAAP figure, given so you can '
          'see the gap.']),
        ('table', _SPLITH, _split(blank=True), IFRS, _SPLITW),
        ('answers', 3),
        ('fig', 'formula', 'The IFRS charge on a lease US GAAP calls '
                           'operating',
         [('Amortisation %s' % money(LS.op_amort(1)),
           '%s over %d years' % (money(LS.op_pv), LS.op_n), IFRS),
          ('+', '', None),
          ('Interest %s' % money(LS.op_schedule[0][2]),
           '%s of the %s liability' % (_pc(LS.op_rate), money(LS.op_pv)),
           SLATE),
          ('=', '', None),
          ('%s' % money(LS.op_ifrs_cost(1)),
           'Against %s under US GAAP' % money(LS.op_cost_y1), GAAP)],
         'Exactly the computation Volume 7 Handout 6 did for the machine. The '
         'only difference is that this lease would not have reached it under US '
         'GAAP.'),

        ('part', 'Part 3 · The two patterns',
         'three years, both frameworks'),

        ('task', 'Exercise 4C',
         'Compare the annual charge under the two frameworks.',
         'Complete the right-hand column, then check both totals.',
         ['Exercise 4B.'],
         ['The US GAAP column is %s in each year, because an operating lease '
          'cost is the total payments spread evenly.'
          % money(LS.op_cost_y1),
          'Each IFRS figure is that year’s interest plus %s of amortisation, '
          'with %s in the final year.'
          % (money(LS.op_amort(1)), money(LS.op_amort(LS.op_n))),
          'Both columns must total %s, which is %d payments of %s.'
          % (money(LS.op_total_payments), LS.op_n,
             money(LS.op_payments))]),
        ('table', _COSTH, _costs(blank=True), GAAP, _COSTW),
        ('answers', 4),
        ('fig', 'ranked', 'The IFRS charge, year by year',
         [('Year %d' % y, LS.op_ifrs_cost(y),
           money(LS.op_ifrs_cost(y)), IFRS if y == 1 else
           (SLATE if y == 2 else BOTH))
          for y in range(1, LS.op_n + 1)],
         'The US GAAP cost is %s flat across all three bars. The IFRS charge '
         'crosses it in year %d and ends below it.'
         % (money(LS.op_cost_y1), LS.op_n - 1),
         'Total under both: %s' % money(LS.op_total_payments)),

        ('part', 'Part 4 · Where each charge lands',
         'the statements, line by line'),

        ('prose', 'The difference is not only the amount. Under US GAAP the '
                  'whole lease cost sits in operating expenses and the whole '
                  'payment in operating cash flow. Under IFRS the interest '
                  'moves to finance costs and the principal to financing cash '
                  'flow, which flatters every operating measure.', 'R3'),

        ('task', 'Exercise 4D',
         'Say where each charge and each cash flow appears under the two '
         'frameworks.',
         'Complete the right-hand column.',
         ['Exercise 4C, and Volume 7 Handout 6 Exercise 6E.'],
         ['Under US GAAP all five rows have one answer each, and they are '
          'given.',
          'Under IFRS the income statement rows split the %s between two '
          'lines.' % money(LS.op_ifrs_cost(1)),
          'The cash flow rows split the %s payment the same way: interest in '
          'operating, the rest in financing.' % money(LS.op_payments)]),
        ('table', _WHEREH, _where(blank=True), SLATE, _WHEREW),
        ('answers', 5),
        ('fig', 'matrix', 'What the single model does to the ratios',
         ['Operating profit', 'Operating cash flow', 'Total liabilities'],
         ['Under US GAAP', 'Under IFRS'],
         [['Reduced by the whole %s' % money(LS.op_cost_y1),
           'Reduced by the %s of amortisation only'
           % money(LS.op_amort(1))],
          ['Reduced by the whole %s paid' % money(LS.op_payments),
           'Reduced by the %s of interest only'
           % money(LS.op_schedule[0][2])],
          ['Includes the lease liability, since both models recognise it',
           'Includes the lease liability, on the same basis']],
         'The last row is the one that no longer differs. Both frameworks now '
         'put the liability on the balance sheet, and the argument has moved to '
         'where the charge lands.'),

        ('part', 'Part 5 · Why the boards could not agree',
         'the one question they split on'),

        ('task', 'Exercise 4E',
         'Say what the two boards agreed on and what they did not.',
         'Read and complete. Write one word in each space.',
         ['Exercises 4A and 4D.'],
         ['Both boards wanted the liability on the balance sheet, and both got '
          'it. Ask what was left to argue about.',
          'One board held that a lease of a floor for three years is not like '
          'buying a building. The other held that the two are the same '
          'transaction in different words.',
          'The last blank is the lessee model IFRS adopted, and the exam uses '
          'its proper name.']),
        ('fill', 'R2',
         ['The two boards agreed on the balance sheet. Both now require a '
          'right-of-use asset and a lease liability at the {present} value of '
          'the payments, which ended the off-balance-sheet lease.',
          'They split on the income statement. The US board held that renting a '
          'floor for %d years is not economically the same as buying a '
          'building, so the two cases should be reported {differently} and the '
          'dual model survived.' % LS.op_n,
          'The international board held that every lease gives the lessee an '
          'asset it has financed, and that classifying leases had produced the '
          'abuse the reform was meant to end. It adopted a {single} lessee '
          'model with no classification at all.',
          'Neither position is unreasonable, and the exam tests the '
          'consequence rather than the argument: the same lease produces a '
          'flat %s under one framework and a falling charge under the {other}.'
          % money(LS.op_cost_y1)],
         {'present': ('Discounted, under both frameworks.', ''),
          'differently': ('Two classes, two treatments.', ''),
          'single': ('One treatment for every recognised lease.',
                     'Students name it the single model. The exam writes '
                     'single lessee model, because the lessor still '
                     'classifies.'),
          'other': ('Front-loaded, like a finance lease.', '')},
         ['total', 'identically', 'first']),
        ('fig', 'scale',
         'WHAT THE TWO BOARDS AGREED',
         ['A right-of-use asset is recognised',
          'A lease liability at present value',
          'The short-term exemption, twelve months or less',
          'No more off-balance-sheet leases'],
         'WHAT THEY DID NOT',
         ['US GAAP kept the dual model and its five tests',
          'IFRS adopted a single lessee model',
          'Only IFRS exempts a low-value lease',
          'The charge lands in different places']),

        ('part', 'Part 6 · What need not be recognised',
         'two exemptions, one shared'),

        ('task', 'Exercise 4F',
         'Say which recognition exemptions each framework offers.',
         'Sort each statement into the framework it describes.',
         ['Volume 7 Handout 5 Exercise 5D, on the short-term election.'],
         ['One exemption is available under both frameworks, and it is about '
          'the length of the term.',
          'A low-value lease is the other one, and only one framework has it.',
          'The other is about the value of the underlying asset and exists '
          'under one framework only.',
          'Two of the six statements are true of both.']),
        ('sortgrid',
         ['Statement', 'US GAAP', 'IFRS', 'BOTH'],
         ['A lease of twelve months or less need not be recognised',
          'A lease of a low-value underlying asset need not be recognised',
          'A lessee classifies leases as finance or operating',
          'Every recognised lease produces amortisation and interest',
          'The election is made by class of underlying asset',
          'A short lease containing a purchase option cannot use the '
          'exemption'],
         ['BOTH', 'IFRS', 'US GAAP', 'IFRS', 'BOTH', 'BOTH'],
         'Three of the six are shared. The two that are not are the whole of '
         'ff(iv): the classification and the low-value exemption.'),
        ('fig', 'buckets', 'Leases, sorted by framework',
         [('THE SAME UNDER BOTH', BOTH,
           ['The liability is recognised at present value',
            'A right-of-use asset is recognised',
            'The short-term exemption, twelve months or less']),
          ('US GAAP ONLY', GAAP,
           ['A lessee classification test',
            'A single straight-line lease cost for operating leases',
            'The whole payment in operating cash flow']),
          ('IFRS ONLY', IFRS,
           ['One treatment for every recognised lease',
            'The low-value asset exemption',
            'Interest in finance costs, principal in financing'])],
         'The left column is the convergence the two boards did achieve. The '
         'other two columns are what they could not agree on.'),

        ('watch', 'The liability is on the balance sheet under both '
                  'frameworks, so a question about whether an operating lease '
                  'is off balance sheet has the same answer either way: it is '
                  'not. The live difference is where the charge lands, not '
                  'whether the lease is recognised.'),

        ('part', 'Part 7 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under IFRS, a lessee classifies a lease as finance or '
                'operating:',
         ['Using the same five tests as US GAAP',
          'Not at all, because a single model applies to every recognised '
          'lease',
          'Only if the term exceeds twelve months',
          'Only for leases of real property'],
         1, 'Level A',
         'There is no lessee classification under IFRS. (A) is the answer '
         'Volume 7 prepares a student to give and it is right only under US '
         'GAAP.'),

        ('mcq', 'A lease that US GAAP would classify as operating is reported '
                'under IFRS as:',
         ['One straight-line lease cost',
          'Amortisation of the right-of-use asset plus interest on the '
          'liability',
          'Rent expense equal to the cash paid',
          'Nothing, because the exemption applies'],
         1, 'Level A',
         'Every recognised IFRS lease gets the finance lease pattern. (A) is '
         'the US GAAP operating treatment, which is exactly the one IFRS '
         'removed for lessees.'),

        ('mcq', 'A %d-year lease with payments of %s a year has a right-of-use '
                'asset of %s and an implicit rate of %s. The first-year charge '
                'under IFRS is:'
         % (LS.op_n, money(LS.op_payments), money(LS.op_pv),
            _pc(LS.op_rate)),
         [money(LS.op_cost_y1), money(LS.op_ifrs_cost(1)),
          money(LS.op_amort(1)), money(LS.op_schedule[0][2])],
         1, 'Level B',
         '%s of amortisation plus %s of interest is %s. (A) is the US GAAP '
         'single lease cost, which is also the cash paid and so looks like the '
         'safe answer.'
         % (money(LS.op_amort(1)), money(LS.op_schedule[0][2]),
            money(LS.op_ifrs_cost(1)))),

        ('mcq', 'Over the whole lease term, total expense under the two '
                'frameworks is:',
         ['Higher under IFRS', 'The same', 'Higher under US GAAP',
          'Not comparable'],
         1, 'Level B',
         'Both total the %s of payments; only the pattern differs. (A) is the '
         'answer the larger first-year charge suggests, and it mistakes timing '
         'for amount.' % money(LS.op_total_payments)),

        ('mcq', 'Compared with US GAAP, a company reporting a formerly '
                'operating lease under IFRS shows:',
         ['Lower operating profit and lower operating cash flow',
          'Higher operating profit and higher operating cash flow',
          'Lower operating profit and higher operating cash flow',
          'No difference in either'],
         1, 'Level C',
         'The interest leaves both operating profit and operating cash flow, '
         'so both improve: %s rather than %s charged in operating expenses, and '
         '%s rather than %s of operating outflow. (A) and (C) each get one half '
         'right.'
         % (money(LS.op_amort(1)), money(LS.op_cost_y1),
            money(LS.op_schedule[0][2]), money(LS.op_payments))),

        ('mcq', 'The exemption for leases of low-value underlying assets is '
                'available under:',
         ['Both frameworks', 'IFRS only', 'US GAAP only', 'Neither'],
         1, 'Level B',
         'IFRS offers it and US GAAP does not. The short-term exemption, by '
         'contrast, exists under both, which is why the two are so often '
         'confused.'),

        ('mcq', 'Under both frameworks, a recognised lease liability is:',
         ['Measured at the total of the payments',
          'Measured at the present value of the payments',
          'Disclosed in the notes only',
          'Measured at the fair value of the underlying asset'],
         1, 'Level C',
         'Present value, under both. This is the convergence the two boards '
         'did achieve, and (C) is the pre-2019 treatment the exam still offers '
         'to see whether a candidate knows the rules changed.'),

        ('tip', 'For any lease question that names a framework, ask only one '
                'thing: is there a classification to make? Under IFRS there is '
                'not, so compute amortisation plus interest and stop. Under US '
                'GAAP run the five tests first, because they decide which of '
                'two computations you need.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4B · the lease under the IFRS single model'),
        ('table', _SPLITH, _split(), IFRS, _SPLITW),
        ('h3', 'Exercise 4C · the two cost patterns'),
        ('table', _COSTH, _costs(), GAAP, _COSTW),
        ('h3', 'Exercise 4D · where each amount lands'),
        ('table', _WHEREH, _where(), SLATE, _WHEREW),
        ('prose', 'Both columns of the second table total %s, which is %d '
                  'payments of %s. The IFRS column starts %s above the US GAAP '
                  'figure and ends %s below it, and the %s of right-of-use '
                  'asset is amortised in full either way.'
                  % (money(LS.op_total_payments), LS.op_n,
                     money(LS.op_payments),
                     money(LS.op_ifrs_cost(1) - LS.op_cost_y1),
                     money(LS.op_cost_y1 - LS.op_ifrs_cost(LS.op_n)),
                     money(LS.op_pv)), 'R2'),
        ('prose', 'The third table is where the difference matters to a reader. '
                  'The same %s payment is entirely an operating outflow under '
                  'US GAAP and only %s of it is under IFRS, so every '
                  'cash-based operating measure improves on conversion without '
                  'anything about the lease having changed.'
                  % (money(LS.op_payments),
                     money(LS.op_schedule[0][2])), 'R2'),
    ],
)
