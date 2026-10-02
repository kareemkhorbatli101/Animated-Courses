# -*- coding: utf-8 -*-
"""Volume 7, Handout 5 — Operating and Finance Leases: the Distinction.

Covers A.2(t): what a lease puts on the balance sheet, and the five tests
that decide which of the two kinds it is.
"""
from fadata import N, LS, Y
from data import money, num

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_TESTH = ['Test', 'The machine lease', 'The warehouse floor']
_TESTW = [46, 27, 27]


def _tests(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Ownership transfers at the end of the term', c('No'), c('No')],
        ['There is a purchase option reasonably certain to be exercised',
         c('No'), c('No')],
        ['The term is a major part of the remaining economic life',
         c('Yes — %d of %d years' % (LS.fin_n, LS.fin_asset_life)),
         c('No — %d of %d years' % (LS.op_n, LS.op_asset_life))],
        ['The present value is substantially all of the fair value',
         c('Not tested — already met'),
         c('No — %s of %s' % (money(LS.op_pv), money(LS.op_fair_value)))],
        ['The asset is specialised, with no alternative use',
         c('No'), c('No')],
        ['Classification', c('Finance lease'), c('Operating lease')],
    ]


HANDOUT = dict(
    n=5,
    title='Operating and Finance Leases: the Distinction',
    subtitle='Northwind signed two leases in the same week. Both go on the '
             'balance sheet, and only one of them is a purchase in disguise.',
    register='R2',

    lang=dict(
        register='R2 for the recognition, R3 for the classification tests, '
                 'which the exam states in its own wording.',
        collocations=['obtain the right to use an asset',
                      'recognise a right-of-use asset',
                      'measure the lease liability',
                      'discount the payments at the borrowing rate',
                      'classify a lease at commencement',
                      'exercise a purchase option'],
        pairs=['finance lease / operating lease',
               'lessee / lessor',
               'right-of-use asset / leased asset',
               'lease term / economic life'],
        nots=['An operating lease is not off the balance sheet. Since the '
              'standard changed, both kinds are recognised.',
              'A finance lease is not a lease the company has broken. It is a '
              'lease whose economics are those of a purchase.'],
    ),

    objectives=[
        'Say what a lessee recognises at the start of any lease.',
        'Measure the lease liability and the right-of-use asset.',
        'State the five tests that classify a lease.',
        'Apply the tests to a lease and classify it.',
        'Say which leases need not be recognised at all.',
    ],

    terms=[
        ('lessee',
         'The party that obtains the right to use an asset under a lease.',
         'المستأجر',
         'Part 1 is written from the lessee’s side throughout. The lessor '
         'accounts for the same contract as a receivable.'),
        ('right-of-use asset',
         'The asset a lessee recognises for its right to use the leased item '
         'over the lease term.', 'أصل حق الاستخدام',
         'Not the item itself. The lessee controls the use for a period, which '
         'is what is capitalised.'),
        ('lease liability',
         'The present value of the payments the lessee has committed to make '
         'over the lease term.', 'التزام الإيجار',
         'Measured at present value, never at the sum of the payments. The '
         'difference is the interest.'),
        ('finance lease',
         'A lease that transfers substantially all the risks and rewards of '
         'ownership to the lessee.', 'عقد إيجار تمويلي',
         'Called a capital lease in older material and in some exam questions. '
         'The two names mean the same thing.'),
        ('straight-line basis',
         'Recognising an equal amount in each period of an arrangement.',
         'على أساس القسط الثابت',
         'The same phrase as in depreciation, and it means the same thing: the '
         'periods get equal shares, whatever the cash does.'),
        ('operating lease',
         'A lease that is not a finance lease, under which the lessee reports a '
         'single straight-line cost.', 'عقد إيجار تشغيلي',
         'Still recognised on the balance sheet. Only the pattern of the cost '
         'differs from a finance lease.'),
    ],

    blocks=[
        ('scene', 'Two leases, one week', [
            'In January %s Northwind signed two leases. The first is a '
            'production machine for %d years, with payments of %s a year.'
            % (Y, LS.fin_n, money(LS.fin_payments)),
            'The second is one floor of a distribution warehouse for %d years, '
            'at %s a year.' % (LS.op_n, money(LS.op_payments)),
            'The machine has %d years of economic life left and the building '
            'has %d. Neither contract transfers legal ownership of anything.'
            % (LS.fin_asset_life, LS.op_asset_life),
            'Both leases go on the balance sheet. This handout decides which '
            'kind each one is, and Handout 6 reports them.',
        ]),
        ('fig', 'workplace', 'Two contracts on the controller’s desk',
         [('Rana', 'Controller — classifies both leases', 'w', SLATE),
          ('Faris', 'Plant manager — needs the machine for its whole life',
           'm', LEASE),
          ('Dalia', 'Logistics — needs the floor for three years', 'w', TAX)],
         [('factory', 'Machine, %d-year lease' % LS.fin_n),
          ('building', 'Floor, %d-year lease' % LS.op_n),
          ('doc', 'Two contracts signed'),
          ('clock', '%d and %d years of life'
           % (LS.fin_asset_life, LS.op_asset_life))],
         'Faris wants the machine for as long as it lasts. Dalia wants the '
         'floor for a while. That difference is the whole of the '
         'classification.'),

        ('part', 'Part 1 · What every lease puts on the balance sheet',
         'the asset and the liability'),

        ('task', 'Exercise 5A',
         'Say what a lessee recognises at the start of a lease, and at what '
         'amount.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 2, on what makes something an asset.'],
         ['A lessee does not own the machine, so ask what it does control.',
          'The liability is measured on the same basis as any other borrowing, '
          'and %s of payments over %d years is not %s.'
          % (money(LS.fin_payments), LS.fin_n,
             money(LS.fin_payments * LS.fin_n)),
          'The last blank is the rate used when the contract does not state '
          'one.']),
        ('fill', 'R2',
         ['Northwind does not own the machine and never will. What it does hold '
          'is the right to use the machine for %d years, and it can stop anyone '
          'else from using it. That right is controlled, so it is an {asset}.'
          % LS.fin_n,
          'The payments are an unavoidable commitment, so a liability is '
          'recognised at the same time. Both are measured at the {present} '
          'value of the %d payments of %s, which is %s and not the %s the '
          'company will hand over in total.'
          % (LS.fin_n, money(LS.fin_payments), money(LS.fin_pv),
             money(LS.fin_payments * LS.fin_n)),
          'The gap of %s between the two figures is {interest}, and it is '
          'recognised across the term rather than at the start.'
          % money(LS.fin_payments * LS.fin_n - LS.fin_pv),
          'Discounting needs a rate. The rate the lessor charged is used when '
          'the lessee can determine it; otherwise the lessee uses its own '
          'incremental {borrowing} rate, which here is %s.'
          % num(LS.fin_rate * 100, 1) + '%.'],
         {'asset': ('Control of a resource, not ownership of it.',
                    'Students look for a title deed. The framework asks for '
                    'control of a benefit, and a lease gives exactly that.'),
          'present': ('A commitment to pay later is worth less than its total.',
                      ''),
          'interest': ('The price of paying over five years.', ''),
          'borrowing': ('What it would cost this company to borrow the same '
                        'amount.', '')},
         ['liability', 'future', 'market']),
        ('fig', 'formula', 'What the lessee recognises at commencement',
         [('Right-of-use asset %s' % money(LS.fin_pv),
           'The right to use, controlled for the term', LEASE),
          ('=', '', None),
          ('Lease liability %s' % money(LS.fin_pv),
           'Present value of the payments committed', LIAB)],
         'Equal at the start, and never equal again: the asset is written off '
         'on one pattern and the liability unwinds on another.'),

        ('part', 'Part 2 · The five tests', 'risks and rewards, in order'),

        ('prose', 'A lease is classified once, at commencement, and the question '
                  'is whether substantially all the risks and rewards of owning '
                  'the asset have passed to the lessee. Five tests stand for '
                  'that question. Meeting any one of them makes the lease a '
                  'finance lease.', 'R2'),

        ('task', 'Exercise 5B',
         'State the five classification tests and say what each one looks for.',
         'Match each test to what it is testing. Write one letter in each '
         'space.',
         ['The paragraph above.'],
         ['Two of the five are about ownership passing, by transfer or by '
          'option.',
          'Two are about whether the lessee is taking the asset for '
          'substantially its whole value or its whole life.',
          'The fifth asks whether the asset is of any use to anybody else.']),
        ('match',
         ['Ownership transfers at the end of the term',
          'A purchase option reasonably certain to be exercised',
          'The term is a major part of the remaining economic life',
          'The present value is substantially all of the fair value',
          'The asset is specialised, with no alternative use'],
         ['Ownership passes by the contract itself',
          'Ownership will pass because the lessee will choose it',
          'The lessee is taking almost the whole of the asset’s use',
          'The lessee is paying almost the whole of the asset’s value',
          'Nobody else could use the asset, so the lessor bears no risk'],
         ['A', 'B', 'C', 'D', 'E'],
         'Any one test is enough. They are not weighed against each other and '
         'there is no majority to reach.'),
        ('fig', 'buckets', 'The five tests, grouped by what they ask',
         [('OWNERSHIP PASSES', LEASE,
           ['Title transfers at the end of the term',
            'A purchase option reasonably certain to be taken',
            '']),
          ('THE LESSEE TAKES THE ASSET', LIAB,
           ['The term is a major part of the remaining life',
            'The present value is substantially all of the fair value',
            '']),
          ('NOBODY ELSE CAN USE IT', SLATE,
           ['The asset is specialised to this lessee',
            'The lessor has no alternative use for it',
            ''])],
         'Three questions, five tests, and one answer: has the lessee taken on '
         'what an owner would take on?'),

        ('part', 'Part 3 · Northwind’s two leases', 'the tests applied'),

        ('task', 'Exercise 5C',
         'Apply the five tests to each lease and classify it.',
         'Complete the grid. Write Yes or No, with the figure that decides it '
         'where one is given.',
         ['Exercise 5B, and the opening scene for the terms and lives.'],
         ['The machine runs %d years against %d years of life. Work out the '
          'share before you answer row 3.'
          % (LS.fin_n, LS.fin_asset_life),
          'The warehouse floor runs %d years against %d, and its present value '
          'of %s is set against a fair value of %s.'
          % (LS.op_n, LS.op_asset_life, money(LS.op_pv),
             money(LS.op_fair_value)),
          'Once one test is met you may stop. The last row asks for the '
          'classification, not for a count of the tests.']),
        ('table', _TESTH, _tests(blank=True), LEASE, _TESTW),
        ('answers', 12),
        ('fig', 'ranked', 'The two quantitative tests, measured',
         [('Machine, term as a share of the asset’s life',
           LS.fin_term_share * 100,
           '%s%% of %d years' % (num(LS.fin_term_share * 100, 1),
                                 LS.fin_asset_life), LEASE),
          ('Floor, present value as a share of fair value',
           LS.op_pv / LS.op_fair_value * 100,
           '%s%% of %s' % (num(LS.op_pv / LS.op_fair_value * 100, 1),
                           money(LS.op_fair_value)), TAX),
          ('Floor, term as a share of the asset’s life',
           LS.op_n / LS.op_asset_life * 100,
           '%s%% of %d years' % (num(LS.op_n / LS.op_asset_life * 100, 1),
                                 LS.op_asset_life), TAX)],
         'A major part is read as about three quarters, and substantially all '
         'as about nine tenths. The machine clears the first line and the floor '
         'comes nowhere near either.',
         'Each bar is a percentage, not an amount'),

        ('part', 'Part 4 · The leases that stay off',
         'the short-term election'),

        ('task', 'Exercise 5D',
         'Say which leases a lessee need not recognise, and on what condition.',
         'Read and complete. Write one word in each space.',
         ['Exercise 5A.'],
         ['The exemption is set by the length of the term, and the threshold is '
          'a round number of months.',
          'A lease with an option to buy cannot use the exemption, however '
          'short it is.',
          'The last blank is what a company that takes the exemption reports '
          'instead.']),
        ('fill', 'R2',
         ['Recognising a right-of-use asset for a photocopier on a nine-month '
          'contract costs more than it tells anyone. A lessee may therefore '
          'elect not to recognise a lease of {twelve} months or less.',
          'The election is made by class of underlying asset rather than '
          'contract by contract, and a lease that contains a purchase {option} '
          'is excluded from it whatever its length.',
          'A company that takes the election reports the payments as an '
          '{expense} on a straight-line basis over the term, and discloses that '
          'it has done so.',
          'Northwind’s two leases run %d and %d years, so neither qualifies. '
          'Both are {recognised}, and the only question left is how each one is '
          'reported.' % (LS.fin_n, LS.op_n)],
         {'twelve': ('One year, stated in months.', ''),
          'option': ('An option to buy points the other way entirely.', ''),
          'expense': ('No asset, no liability, just a cost.', ''),
          'recognised': ('Both kinds go on the balance sheet.',
                         'Students still read operating leases as off balance '
                         'sheet. That rule is gone, and the exam tests its '
                         'replacement.')},
         ['eighteen', 'renewal', 'capitalised']),
        ('fig', 'fork', 'Does this lease go on the balance sheet?',
         [('Is the lease term twelve months or less?',
           'NO → recognise the asset and the liability', LEASE),
          ('Does a short lease contain a purchase option?',
           'YES → recognise it anyway, the election is unavailable', RUST),
          ('Has the election been made for this class of asset?',
           'YES → straight-line expense, with nothing on the balance sheet',
           SLATE)]),

        ('watch', 'Classification happens once, at commencement, and is not '
                  'revisited because the asset’s remaining life shortens or '
                  'because rates move. It is reassessed only when the contract '
                  'itself is modified.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'At the commencement of a lease, a lessee recognises:',
         ['Nothing, until the first payment is made',
          'A right-of-use asset and a lease liability at the present value of '
          'the payments',
          'The leased asset at its fair value and a liability at the total '
          'payments',
          'A liability only, because the asset is not owned'],
         1, 'Level A',
         'Both sides are recognised at present value. (C) is the error to '
         'guard against: measuring the liability at the undiscounted total '
         'would capitalise the interest as well as the principal.'),

        ('mcq', 'Which of the following, on its own, makes a lease a finance '
                'lease?',
         ['The lease term is three years',
          'The present value of the payments is substantially all of the '
          'asset’s fair value',
          'The lessee pays the insurance and the maintenance',
          'The lease cannot be cancelled'],
         1, 'Level A',
         'That is one of the five tests, and meeting any one is sufficient. '
         '(C) and (D) are features of almost every lease of either kind and so '
         'distinguish nothing.'),

        ('mcq', 'A %d-year lease is signed on an asset with %d years of '
                'remaining economic life. On the term test alone the lease is:'
         % (LS.fin_n, LS.fin_asset_life),
         ['An operating lease, because ownership does not transfer',
          'A finance lease, because the term is a major part of the remaining '
          'life',
          'An operating lease, because the term is under ten years',
          'Not classifiable without the fair value'],
         1, 'Level B',
         '%d of %d years is %s%% of the remaining life, comfortably a major '
         'part of it. (A) is the common error: ownership transfer is only the '
         'first of five tests, and failing it settles nothing.'
         % (LS.fin_n, LS.fin_asset_life,
            num(LS.fin_term_share * 100, 1))),

        ('mcq', 'A lease liability is measured at the present value of the '
                'payments. The discount rate used is:',
         ['The risk-free rate',
          'The rate implicit in the lease, or the lessee’s incremental '
          'borrowing rate if that is not determinable',
          'The lessee’s weighted average cost of capital',
          'The rate stated in the lease, always'],
         1, 'Level B',
         'The implicit rate first, the incremental borrowing rate as the '
         'fallback. (D) fails because many contracts state no rate at all, '
         'which is precisely why the fallback exists.'),

        ('mcq', 'A lessee elects not to recognise a nine-month lease. It '
                'reports:',
         ['Nothing at all',
          'The payments as an expense on a straight-line basis over the term',
          'A right-of-use asset only',
          'The payments as interest expense'],
         1, 'Level B',
         'The exemption removes the balance sheet entries, not the cost. (A) '
         'is the trap: an election about recognition never removes an expense '
         'the company has incurred.'),

        ('mcq', 'A three-year lease of a floor of a building with %d years of '
                'remaining life, whose payments have a present value of %s '
                'against a fair value of %s, is:'
         % (LS.op_asset_life, money(LS.op_pv), money(LS.op_fair_value)),
         ['A finance lease, because the asset is real property',
          'An operating lease, because no test is met',
          'A finance lease, because the term cannot be cancelled',
          'Exempt from recognition, because only part of a building is leased'],
         1, 'Level C',
         '%s is a small fraction of %s and three years a small fraction of %d, '
         'so no test is met. (D) is the trap: part of a building is an '
         'identified asset like any other and is recognised in the ordinary '
         'way.' % (money(LS.op_pv), money(LS.op_fair_value),
                   LS.op_asset_life)),

        ('mcq', 'Two years into a finance lease, the asset’s remaining economic '
                'life has shortened so that the remaining term is now its whole '
                'life. The classification should be:',
         ['Reassessed, and the lease remains a finance lease',
          'Left as it was, because classification is not revisited without a '
          'modification',
          'Reassessed, and the lease becomes an operating lease',
          'Reassessed at each reporting date as a matter of course'],
         1, 'Level C',
         'Classification is made once at commencement and reconsidered only on '
         'modification. (D) describes a continuous reassessment the standard '
         'deliberately avoids, because it would move leases between categories '
         'every year.'),

        ('tip', 'Work the five tests in order and stop at the first Yes. A stem '
                'that gives you a term, a life, a present value and a fair '
                'value is giving you two tests and three distractors, and the '
                'test that is met first is usually the only one that needs '
                'computing.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5C · the completed classification grid'),
        ('table', _TESTH, _tests(), LEASE, _TESTW),
        ('prose', 'The machine lease meets the term test at %s%% of the '
                  'remaining life, so it is a finance lease and the remaining '
                  'tests need not be worked. The warehouse floor meets none: '
                  '%d of %d years and %s of %s.'
                  % (num(LS.fin_term_share * 100, 1), LS.op_n,
                     LS.op_asset_life, money(LS.op_pv),
                     money(LS.op_fair_value)), 'R2'),
        ('prose', 'Both leases are on the balance sheet at %s and %s '
                  'respectively. What separates them from here is the pattern '
                  'of the cost, and Handout 6 works both.'
                  % (money(LS.fin_pv), money(LS.op_pv)), 'R2'),
    ],
)
