# -*- coding: utf-8 -*-
"""Volume 7, Handout 3 — Temporary and Permanent Differences.

Covers A.2(s): the two kinds of difference, and which of them deferred tax
is recognised on.
"""
from fadata import N, T, Y
from data import money

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_FOURH = ['Item from Northwind’s year', 'Reverses?', 'Deferred tax?']
_FOURW = [52, 24, 24]


def _catalogue(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Tax depreciation of %s against book depreciation of %s'
         % (money(T.tax_depreciation), money(T.book_depreciation)),
         c('Yes'), c('Yes')],
        ['A %s fine the tax rules disallow' % money(T.fine),
         c('No'), c('No')],
        ['%s of municipal bond interest that is never taxed'
         % money(T.municipal_interest), c('No'), c('No')],
        ['Warranty expense accrued now, deducted when paid',
         c('Yes'), c('Yes')],
        ['Bad debt expense of %s accrued now, deducted on write-off'
         % money(N.bad_debt_expense), c('Yes'), c('Yes')],
    ]


HANDOUT = dict(
    n=3,
    title='Temporary and Permanent Differences',
    subtitle='Handout 2 found a %s gap between the charge and the bill. Only '
             'some differences create it, and knowing which is the whole skill.'
             % money(N.deferred_tax_pl),
    register='R2',

    lang=dict(
        register='R2 throughout, with one R3 classification so the student meets '
                 'the exam’s own wording for the two categories.',
        collocations=['originate a temporary difference',
                      'reverse in a future period',
                      'give rise to a deferred tax liability',
                      'disallow a deduction',
                      'exclude an item from taxable income',
                      'affect the effective tax rate'],
        pairs=['temporary difference / permanent difference',
               'originate / reverse',
               'taxable temporary difference / deductible temporary difference',
               'deferred tax liability / deferred tax asset'],
        nots=['A temporary difference is not a small difference and a permanent '
              'difference is not a large one. The test is whether it reverses.',
              'A permanent difference is not ignored. It changes the tax charge '
              'in the year it arises and is simply never recognised as deferred '
              'tax.'],
    ),

    objectives=[
        'Define a temporary difference and a permanent difference.',
        'Decide, for a given item, which of the two it is.',
        'Say which of the two gives rise to deferred tax, and why.',
        'Distinguish a taxable from a deductible temporary difference.',
        'Say which kind of difference moves the effective tax rate.',
    ],

    terms=[
        ('temporary difference',
         'A difference between the accounting and tax treatment of an item that '
         'will reverse in a later period.', 'الفرق المؤقت',
         'Temporary says nothing about size. A difference that takes twenty '
         'years to reverse is still temporary.'),
        ('permanent difference',
         'A difference that never reverses, because the item is taxed or '
         'deducted in no period at all.', 'الفرق الدائم',
         'The item does not move between years. One set of rules counts it and '
         'the other never does.'),
        ('originate',
         'To arise for the first time, said of a temporary difference in the '
         'period that creates it.', 'ينشأ',
         'The exam pairs originate with reverse. A difference originates in one '
         'year and reverses in another.'),
        ('taxable temporary difference',
         'A difference that will increase taxable income when it reverses, and '
         'so creates a deferred tax liability.',
         'الفرق المؤقت الخاضع للضريبة',
         'Named for what happens on reversal, not for this year. It lowers tax '
         'now and raises it later.'),
        ('deferred tax asset',
         'The balance sheet amount for a future deduction that has already been '
         'charged against accounting profit.',
         'أصل الضريبة المؤجلة',
         'Worth something only if there will be taxable income to deduct it '
         'from, which is why it alone can be written down.'),
        ('deductible temporary difference',
         'A difference that will reduce taxable income when it reverses, and so '
         'creates a deferred tax asset.', 'الفرق المؤقت القابل للخصم',
         'The mirror image. It raises tax now and lowers it later.'),
    ],

    blocks=[
        ('scene', 'Not every difference is deferred', [
            'Handout 2 reconciled a tax charge of %s to a tax bill of %s. Four '
            'separate differences were in play that year.'
            % (money(N.tax), money(N.current_tax)),
            'Only one of them produced the %s of deferred tax. The other two '
            'changed the charge directly and left no balance behind at all.'
            % money(N.deferred_tax_pl),
            'The difference between the two kinds is not a matter of size or '
            'importance. It is a single question: will the two measurements '
            'eventually agree?',
            'This handout asks that question of five items from Northwind’s year '
            'and sorts them.',
        ]),
        ('fig', 'fork', 'The only question that sorts a difference',
         [('Will the accounting and tax treatments eventually agree?',
           'YES → temporary difference, and deferred tax is recognised', TAX),
          ('Does one set of rules never count the item at all?',
           'NO → permanent difference, and no deferred tax arises', RUST),
          ('Does it matter how long the reversal takes?',
           'NO → twenty years is still temporary', SLATE)]),

        ('part', 'Part 1 · The temporary kind',
         'it originates, then it reverses'),

        ('task', 'Exercise 3A',
         'Define a temporary difference and say what makes it temporary.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, Exercises 2B and 2C.'],
         ['Blanks 1 and 2 are the verb pair the exam uses for the two ends of '
          'the difference’s life.',
          'Northwind claimed %s of depreciation on its return and charged %s in '
          'its accounts. Over the asset’s life, both figures come to the same '
          'total.' % (money(T.tax_depreciation), money(T.book_depreciation)),
          'The last blank is what a temporary difference leaves behind on the '
          'balance sheet.']),
        ('fill', 'R2',
         ['Northwind deducted %s of depreciation on its return and charged %s in '
          'its accounts. The gap of %s did not appear out of nothing and will '
          'not stay. It is said to {originate} in this period.'
          % (money(T.tax_depreciation), money(T.book_depreciation),
             money(T.temporary_difference)),
          'An asset has one cost, and both sets of rules write off that cost in '
          'full. A faster deduction now therefore means a smaller one later. In '
          'those later periods the difference {reverses}, and the two '
          'measurements agree in total.',
          'Because the whole of the gap is recovered, nothing is gained or lost '
          'in the end. What changes is the {timing} of the payments, and the '
          'company has the use of the money in the meantime.',
          'The accounts are required to report the tax on their own profit, so '
          'the tax on the unreversed part is charged now and carried on the '
          'balance sheet as a deferred tax {liability} until it reverses.'],
         {'originate': ('The exam’s own word for a difference arising.', ''),
          'reverses': ('A smaller deduction later undoes the larger one now.',
                       ''),
          'timing': ('Not the amount. The amount is the same either way.',
                     'Students read the deferral as a saving. The total is '
                     'unchanged; only its distribution across years moves.'),
          'liability': ('An amount that will be paid, later.', '')},
         ['expire', 'permanent', 'asset']),
        ('fig', 'timeline', 'One temporary difference, two ends',
         [('Earlier years', 'Tax deduction exceeds the book charge, so taxable '
                            'income is lower and a liability builds', TAX),
          ('This year', 'The gap of %s originates, and %s of deferred tax is '
                        'charged to income'
           % (money(T.temporary_difference),
              money(T.deferred_from_depreciation)), LIAB),
          ('Later years', 'The book charge exceeds the deduction, so the '
                          'difference reverses and the liability unwinds', OK)],
         'Over the whole life the two columns reach the same total. That is what '
         'temporary means.'),

        ('part', 'Part 2 · The two directions',
         'taxable and deductible'),

        ('prose', 'A temporary difference can run either way. Where the tax '
                  'rules allow the deduction first, taxable income is below '
                  'accounting profit now and will be above it later. Where the '
                  'accounts charge the expense first, the reverse holds.', 'R2'),

        ('task', 'Exercise 3B',
         'Distinguish a taxable from a deductible temporary difference.',
         'Sort each item into the column that names the kind of difference it '
         'creates.',
         ['Exercise 3A, and the paragraph above.'],
         ['Ask what the item does to taxable income when it reverses, not what '
          'it does this year.',
          'If taxable income will be higher on reversal, more tax will be owed, '
          'so the balance is a liability.',
          'Northwind’s warranty and bad debt accruals are both charged in the '
          'accounts before the tax rules allow them.']),
        ('sortgrid',
         ['Item', 'TAXABLE', 'DEDUCTIBLE'],
         ['Tax depreciation claimed ahead of the book charge',
          'Warranty expense accrued before the repairs are paid for',
          'Bad debt expense accrued before the account is written off',
          'Revenue recognised in the accounts before it is taxed',
          'Rent collected in advance, taxed on receipt but earned later',
          'Development costs deducted on the return before amortisation'],
         ['TAXABLE', 'DEDUCTIBLE', 'DEDUCTIBLE', 'TAXABLE', 'DEDUCTIBLE',
          'TAXABLE'],
         'Taxable means taxable later. Each item in the first column has had its '
         'tax relief early and will pay for it.'),
        ('fig', 'matrix', 'Which way the difference runs',
         ['Taxable temporary difference', 'Deductible temporary difference'],
         ['This year', 'On reversal', 'Balance recognised'],
         [['Taxable income is below accounting profit',
           'Taxable income rises above accounting profit',
           'Deferred tax liability'],
          ['Taxable income is above accounting profit',
           'Taxable income falls below accounting profit',
           'Deferred tax asset']],
         'Both names describe the reversal, which is why reading them as a '
         'statement about this year gets the answer backwards.'),

        ('part', 'Part 3 · The permanent kind',
         'counted once, or not at all'),

        ('task', 'Exercise 3C',
         'Define a permanent difference and say why no deferred tax arises.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3A, and Handout 2 Exercise 2D.'],
         ['Northwind had two permanent differences, and Handout 2 put both of '
          'them through the rate reconciliation.',
          'Blank 2 is what the tax rules do to the fine, and blank 3 is what '
          'they do to the municipal interest.',
          'The last blank is the rate that a permanent difference moves and a '
          'temporary one does not.']),
        ('fill', 'R2',
         ['Some items are counted by one set of rules and by the other in no '
          'period at all. There is nothing to come back, so the difference '
          'never {reverses} and is called permanent.',
          'Northwind paid a %s fine. It is an expense in the accounts, and the '
          'tax rules {disallow} it as a deduction in this year and in every '
          'year. The company is simply taxed on %s more than it earned.'
          % (money(T.fine), money(T.fine)),
          'The same company received %s of municipal bond interest. It is income '
          'in the accounts, and the tax rules {exclude} it altogether. Neither '
          'item will ever be settled by a later period.'
          % money(T.municipal_interest),
          'So no balance is recognised. A permanent difference changes the tax '
          'charge in the year it arises and therefore moves the {effective} rate '
          'away from the statutory one.'],
         {'reverses': ('Nothing to come back means nothing to defer.', ''),
          'disallow': ('The deduction is refused outright.', ''),
          'exclude': ('The income is left out of the computation.', ''),
          'effective': ('The rate actually borne, charge over pre-tax profit.',
                        'Students look for the effective rate to move on a '
                        'timing difference. Only permanents move it.')},
         ['defer', 'statutory', 'enacted']),
        ('fig', 'buckets', 'Northwind’s year, sorted',
         [('TEMPORARY — deferred tax recognised', TAX,
           ['Depreciation: %s on the return against %s in the accounts'
            % (money(T.tax_depreciation), money(T.book_depreciation)),
            'Warranty accrued now, deducted when paid',
            'Bad debts accrued now, deducted on write-off']),
          ('PERMANENT — no deferred tax', RUST,
           ['Fine of %s, never deductible' % money(T.fine),
            'Municipal interest of %s, never taxable'
            % money(T.municipal_interest),
            'Neither item is settled by any later period'])],
         'The left column built the %s balance. The right column changed only '
         'this year’s charge.' % money(T.deferred_from_depreciation)),

        ('part', 'Part 4 · Sorting them under exam conditions',
         'the two questions, asked together'),

        ('task', 'Exercise 3D',
         'Decide for each item whether it reverses and whether deferred tax '
         'arises.',
         'Complete both right-hand columns. Write Yes or No in each cell.',
         ['Exercises 3A, 3B and 3C.'],
         ['The two columns always agree. That is the point of the exercise.',
          'Work the first column first: ask whether the two treatments ever '
          'come together.',
          'Five items, ten cells, and no cell where the answers differ.']),
        ('table', _FOURH, _catalogue(blank=True), TAX, _FOURW),
        ('answers', 10),
        ('fig', 'register',
         [('A difference that comes back later is called temporary, and we '
           'record tax on it now.',
           'A temporary difference reverses in a future period, and deferred '
           'tax is recognised on it.',
           'Deferred tax is recognised on temporary differences only.'),
          ('A difference that never comes back does not get a balance.',
           'A permanent difference does not reverse, so no deferred tax balance '
           'arises.',
           'Permanent differences do not give rise to deferred taxes.'),
          ('Things that never come back change the rate the company really '
           'pays.',
           'Permanent differences cause the effective rate to differ from the '
           'statutory rate.',
           'Only permanent differences affect the effective tax rate.')],
         'The exam gives you the right-hand column.'),

        ('watch', 'A question that lists five items and asks how many give rise '
                  'to deferred tax is asking one thing five times: does it '
                  'reverse? Fines, penalties, municipal interest, life insurance '
                  'proceeds on an officer and the dividends received deduction '
                  'are the permanent differences the exam reuses.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A temporary difference is one that:',
         ['Is small in relation to pre-tax income',
          'Will reverse in one or more future periods',
          'Arises only from depreciation',
          'Affects the effective tax rate'],
         1, 'Level A',
         'Reversal is the whole test. (A) is the trap built into the word '
         'temporary, which describes the difference’s life and not its size, '
         'and (D) describes a permanent difference instead.'),

        ('mcq', 'Which of the following is a permanent difference?',
         ['Tax depreciation claimed ahead of the book charge',
          'A fine that the tax rules never allow as a deduction',
          'Warranty costs accrued before they are paid',
          'Rent collected in advance and taxed on receipt'],
         1, 'Level A',
         'A disallowed fine is deducted in no period at all, so nothing '
         'reverses. (A), (C) and (D) are all timing: each item is eventually '
         'counted by both sets of rules.'),

        ('mcq', 'A company accrues warranty expense of $60,000 that will be '
                'deductible only when the repairs are paid for. This creates:',
         ['A taxable temporary difference and a deferred tax liability',
          'A deductible temporary difference and a deferred tax asset',
          'A permanent difference',
          'No difference, because the total expense is the same'],
         1, 'Level B',
         'The accounts charge the expense first, so taxable income is higher now '
         'and lower on reversal: a deductible difference and an asset. (A) '
         'reverses the direction, which is the most common error, and (D) '
         'confuses an equal total with an equal pattern.'),

        ('mcq', 'A taxable temporary difference is so named because:',
         ['It is taxable in the current period',
          'It will increase taxable income when it reverses',
          'It arises from taxable income rather than accounting profit',
          'It is the only kind on which tax is assessed'],
         1, 'Level B',
         'The name describes the reversal. Reading it as a statement about the '
         'current year, as (A) does, inverts the classification and so inverts '
         'the asset and liability as well.'),

        ('mcq', 'Which of the following would cause a company’s effective tax '
                'rate to fall below the statutory rate?',
         ['Tax depreciation in excess of book depreciation',
          'Interest received on municipal bonds that is not taxable',
          'A warranty accrual not yet deductible',
          'A deferred tax liability arising in the period'],
         1, 'Level B',
         'Non-taxable income is never counted by the tax rules, so it lowers the '
         'charge permanently. (A), (C) and (D) are all temporary: they move the '
         'charge between years without changing its total.'),

        ('mcq', 'Northwind reports pre-tax profit of %s, has a %s fine that is '
                'not deductible and %s of non-taxable municipal interest, and '
                'its statutory rate is %d%%. Its effective tax rate is:'
         % (money(N.pretax), money(T.fine), money(T.municipal_interest),
            T.rate * 100),
         ['Above %d%%' % (T.rate * 100),
          'Exactly %d%%' % (T.rate * 100),
          'Below %d%%' % (T.rate * 100),
          'Not determinable without the deferred tax balance'],
         1, 'Level C',
         'The two permanent differences are equal and opposite, so they cancel '
         'and the effective rate equals the statutory rate. (D) is the trap: the '
         'deferred balance is irrelevant to the effective rate, because '
         'temporary differences never move it.'),

        ('mcq', 'A company has one temporary difference that will reverse over '
                'the next four years. Over those four years, in total, the '
                'deferred tax recognised on it will:',
         ['Grow, because the balance accretes',
          'Unwind to zero',
          'Remain constant until the final year',
          'Be reclassified as a permanent difference'],
         1, 'Level C',
         'A temporary difference reverses in full, so the balance it created '
         'unwinds to nothing. (D) is impossible: the two categories are defined '
         'by whether reversal happens, so an item cannot move between them.'),

        ('tip', 'Read the item, not the label. Ask only whether the accounts and '
                'the return will ever agree on it. If they will, it is temporary '
                'and carries deferred tax; if they will not, it is permanent and '
                'carries none, and it is the one that moves the effective rate.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3D · the completed catalogue'),
        ('table', _FOURH, _catalogue(), TAX, _FOURW),
        ('prose', 'Every row answers Yes twice or No twice. The second column '
                  'is not a separate judgement: deferred tax is recognised on '
                  'temporary differences and on nothing else, so the first '
                  'answer decides the second.', 'R2'),
        ('prose', 'The two temporary rows that are not depreciation — the '
                  'warranty and the bad debt accrual — both run the other way, '
                  'and Handout 4 shows why that makes them assets rather than '
                  'liabilities.', 'R2'),
    ],
)
