# -*- coding: utf-8 -*-
"""Volume 7, Handout 2 — Why Tax Expense Is Not the Tax Bill.

Covers A.2(q): interperiod tax allocation and deferred income taxes.
"""
from fadata import N, T, Y, PY
from data import money, num

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_SPLH = ['Income tax expense for %s' % Y, 'Amount']
_SPLW = [66, 34]


def _split(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Current tax — what the return actually asks for',
         c(money(N.current_tax))],
        ['Deferred tax — the timing difference, charged now',
         c(money(N.deferred_tax_pl))],
        ['Income tax expense reported in the income statement',
         c(money(N.tax))],
    ]


_TAXH = ['', 'In the accounts', 'In the tax return']
_TAXW = [40, 30, 30]


def _taxable(blank=False):
    def c(v):
        return '' if blank else v
    pre = N.pretax
    taxable = pre - T.temporary_difference
    return [
        ['Profit before depreciation and tax',
         money(pre + T.book_depreciation), money(pre + T.book_depreciation)],
        ['Depreciation deducted', money(-T.book_depreciation),
         money(-T.tax_depreciation)],
        ['Profit before tax, as measured', c(money(pre)), c(money(taxable))],
        ['At %d%%' % (T.rate * 100), c(money(pre * T.rate)),
         c(money(taxable * T.rate))],
    ]


HANDOUT = dict(
    n=2,
    title='Why Tax Expense Is Not the Tax Bill',
    subtitle='Northwind reports %s of tax and sends the government %s. The gap '
             'is not an error, and explaining it is the whole of deferred tax.'
             % (money(N.tax), money(N.current_tax)),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the two figures are separated, R2 once the allocation '
                 'is explained.',
        collocations=['compute taxable income',
                      'allocate tax between periods',
                      'charge deferred tax to income',
                      'reverse a timing difference',
                      'apply the enacted rate',
                      'reconcile the effective rate'],
        pairs=['tax expense / tax payable',
               'accounting profit / taxable income',
               'current tax / deferred tax',
               'statutory rate / effective rate'],
        nots=['The tax return is not the income statement. They measure '
              'different things and are not meant to agree.',
              'Deferred tax is not a payment the company has avoided. It is a '
              'payment moved to a later year.'],
    ),

    objectives=[
        'Say why accounting profit and taxable income differ.',
        'Split income tax expense into its current and deferred parts.',
        'Compute taxable income from accounting profit and a timing difference.',
        'Say what interperiod tax allocation is and what it is for.',
        'Reconcile the reported tax charge to the statutory rate.',
    ],

    terms=[
        ('taxable income',
         'Profit as measured by the tax rules, on which tax is actually '
         'assessed.', 'الدخل الخاضع للضريبة',
         'A different measurement of the same year, not a different year and not '
         'an error.'),
        ('current tax',
         'The tax payable on this year’s taxable income.',
         'الضريبة الجارية',
         'The figure on the return, and the amount the company will actually '
         'pay.'),
        ('deferred tax',
         'The tax effect of differences that will reverse in later periods.',
         'الضريبة المؤجلة',
         'Charged now and paid later, or the reverse. It never changes the total '
         'tax a company pays over time.'),
        ('interperiod tax allocation',
         'Matching the tax charge to the accounting profit that gave rise to it, '
         'rather than to the year the cash is paid.',
         'توزيع الضريبة بين الفترات',
         'The reason deferred tax exists at all. Without it the tax charge would '
         'follow the tax return rather than the accounts.'),
        ('deferred tax liability',
         'The balance sheet amount for tax that has been charged to income but '
         'is payable in a later period.',
         'التزام الضريبة المؤجلة',
         'A real obligation, but not one the tax authority has billed yet. It is '
         'always presented as non-current.'),
        ('enacted rate',
         'The tax rate that has been passed into law for the period in which a '
         'difference will reverse.', 'المعدل المُشرَّع',
         'Not a forecast and not the current rate if a change has already been '
         'enacted. The exam tests exactly that distinction.'),
    ],

    blocks=[
        ('scene', 'Two figures that should agree and do not', [
            'Northwind’s income statement reports income tax expense of %s. '
            'The company’s tax return for the same year asks for %s.'
            % (money(N.tax), money(N.current_tax)),
            'The difference of %s is not a mistake, not a dispute with the tax '
            'authority and not tax the company has escaped.'
            % money(N.deferred_tax_pl),
            'It exists because the accounts and the tax return measure the same '
            'year by different rules, and the accounts are required to report a '
            'charge that matches the profit they themselves measured.',
            'This handout explains the gap. Handouts 3 and 4 take it apart.',
        ]),
        ('fig', 'ranked', 'Three tax figures for one year',
         [('Income tax expense, in the income statement', N.tax,
           money(N.tax), TAX),
          ('Current tax, on the tax return', N.current_tax,
           money(N.current_tax), LIAB),
          ('Deferred tax, the difference', N.deferred_tax_pl,
           money(N.deferred_tax_pl), RUST)],
         'The first is what the accounts charge. The second is what the company '
         'pays. The third is the bridge, and it is this volume’s subject.',
         '%s · year ended 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · Two measurements of one year',
         'why they differ at all'),

        ('task', 'Exercise 2A',
         'Say why accounting profit and taxable income differ.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 3, for how accounting profit is measured.'],
         ['The two sets of rules exist for different purposes. Name each '
          'purpose.',
          'Blank 3 is the figure the tax return produces, and it is not profit '
          'before tax.',
          'The last blank is what the differences do over time, and it is the '
          'reason deferred tax is a timing question.']),
        ('fill', 'R1',
         ['The accounts exist to tell a reader how the company performed. The tax '
          'rules exist to raise {revenue} for the government, and they are written '
          'with that in mind rather than with a reader in mind.',
          'So the two measure the same year differently. The tax rules may allow a '
          'faster write-off of equipment to encourage investment, refuse a '
          'deduction for a fine, or ignore interest on a government bond '
          'altogether. None of those is an {error} in either measurement.',
          'The figure the tax rules produce is called {taxable} income, and the '
          'tax actually payable is computed on it. Northwind’s accounting '
          'profit before tax is %s, and its taxable income for the same year is '
          'different.' % money(N.pretax),
          'Most of these differences are temporary. A faster write-off now means a '
          'smaller write-off later, so the difference {reverses} in a future '
          'period and the two measurements eventually agree.'],
         {'revenue': ('A different purpose, so different rules.', ''),
          'error': ('Neither measurement is wrong.',
                    'Students treat the gap as a mistake to be reconciled away. '
                    'It is two valid measurements of one year.'),
          'taxable': ('The tax rules’ own figure.', ''),
          'reverses': ('What goes one way now comes back later.', '')},
         ['profit', 'audit', 'permanent']),
        ('fig', 'scale',
         'THE ACCOUNTS MEASURE',
         ['How the company performed',
          'For investors, lenders and creditors',
          'Depreciation over the useful life',
          'Producing profit before tax of %s' % money(N.pretax)],
         'THE TAX RULES MEASURE',
         ['What the government may assess',
          'For raising revenue',
          'Depreciation on a schedule the law sets',
          'Producing a different figure entirely']),

        ('part', 'Part 2 · Computing taxable income',
         'one difference, worked'),

        ('task', 'Exercise 2B',
         'Compute taxable income from accounting profit and one timing '
         'difference.',
         'Complete the table. Both columns start from the same figure.',
         ['Exercise 2A'],
         ['The first row is identical in both columns. Only the depreciation line '
          'differs.',
          'Northwind charged %s of depreciation in its accounts and claimed %s on '
          'its return.' % (money(T.book_depreciation),
                           money(T.tax_depreciation)),
          'The last row applies %d%% to each column, and the two answers are the '
          'two figures from the opening scene.' % (T.rate * 100)]),
        ('table', _TAXH, _taxable(blank=True), TAX, _TAXW),
        ('answers', 4),
        ('fig', 'bridge',
         'Accounting profit before tax', N.pretax,
         [('Extra depreciation the tax rules allow',
           -T.temporary_difference)],
         'Taxable income', N.pretax - T.temporary_difference),

        ('part', 'Part 3 · What the accounts are required to report',
         'interperiod allocation'),

        ('prose', 'If the income statement simply reported the tax on the return, '
                  'the charge would follow the tax rules rather than the profit '
                  'the statement itself measured. A year of heavy capital '
                  'spending would show a low tax charge against an unchanged '
                  'profit, and the margin would be meaningless.', 'R2'),
        ('prose', 'So the accounts report a charge matched to their own profit. '
                  'The current part is what the return asks for; the deferred '
                  'part is the tax on the difference, charged now because the '
                  'profit it relates to was reported now.', 'R2'),

        ('task', 'Exercise 2C',
         'Split the reported charge into its current and deferred parts.',
         'Complete the schedule, then record the entry underneath.',
         ['Exercise 2B, and the two paragraphs above.'],
         ['The current part is the figure you computed in the right-hand column '
          'of Exercise 2B.',
          'The deferred part is the tax on the timing difference: %s at %d%%.'
          % (money(T.temporary_difference), T.rate * 100),
          'The two must add to the charge reported in Volume 1, which is %s.'
          % money(N.tax)]),
        ('table', _SPLH, _split(blank=True), TAX, _SPLW),
        ('answers', 3),
        ('journal', [
            ('J1', ('The tax charge for %s, split between the part payable now '
                    'and the part deferred.' % Y,
                    'One expense, two credits, and only one of them is a bill.'),
             [('Income Tax Expense', 0, '', ''),
              ('Income Taxes Payable', 1, '', ''),
              ('Deferred Tax Liability', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'What each part of the charge actually is',
         ['Current tax %s' % money(N.current_tax),
          'Deferred tax %s' % money(N.deferred_tax_pl),
          'Income tax expense %s' % money(N.tax)],
         ['What it represents', 'Where it lands'],
         [['The tax on this year’s taxable income',
           'Income taxes payable — a current liability'],
          ['The tax on a difference that will reverse',
           'Deferred tax liability — non-current'],
          ['The charge matched to the accounting profit',
           'The income statement']],
         'One expense, two destinations. Only the first will be paid in the next '
         'twelve months.'),

        ('part', 'Part 4 · Checking the charge',
         'the effective rate reconciliation'),

        ('task', 'Exercise 2D',
         'Reconcile the reported charge to the statutory rate.',
         'Read and complete.',
         ['Exercise 2C'],
         ['Start from profit before tax at the statutory rate. The timing '
          'difference does not appear in this reconciliation at all — think '
          'about why.',
          'Blank 2 is the kind of difference that does appear, because it never '
          'reverses.',
          'Northwind has one of each, and they happen to be the same size.']),
        ('fill', 'R2',
         ['Profit before tax is %s, and at the statutory rate of %d%% the charge '
          'would be {%s}.' % (money(N.pretax), T.rate * 100,
                              money(N.pretax * T.rate)),
          'The depreciation difference does not appear in this reconciliation, '
          'because it reverses: the accounts have already charged tax on the whole '
          'of their own profit, with part of it {deferred}. A difference that '
          '{reverses} changes when tax is charged and never how much.',
          'What does appear is a difference that never reverses. Northwind paid a '
          '%s fine that the tax rules do not allow as a deduction, which adds %s '
          'to the charge, and received %s of municipal bond interest that is not '
          'taxable at all, which takes %s away.'
          % (money(T.fine), money(T.fine * T.rate),
             money(T.municipal_interest),
             money(T.municipal_interest * T.rate)),
          'Here the two happen to be equal and cancel, so the reported charge is '
          'exactly %s and the effective rate is the same as the {statutory} rate. '
          'That is a coincidence of this company’s figures, not a rule.'
          % money(N.tax)],
         {money(N.pretax * T.rate): ('%s at %d%%.' % (money(N.pretax),
                                                      T.rate * 100), ''),
          'deferred': ('Charged now, paid in a later year.', ''),
          'reverses': ('Timing differences never change the total.', ''),
          'statutory': ('Equal only because the two permanents cancel.',
                        'Students expect the effective rate to equal the '
                        'statutory rate. It usually does not, and only '
                        'permanent differences move it.')},
         [money(N.current_tax), 'temporary', 'effective']),
        ('fig', 'bridge',
         'Tax at the statutory rate on %s' % money(N.pretax),
         N.pretax * T.rate,
         [('Fine, not deductible', T.fine * T.rate),
          ('Municipal interest, not taxable',
           -T.municipal_interest * T.rate)],
         'Income tax expense reported', N.tax),

        ('part', 'Part 5 · Which rate',
         'enacted, not expected'),

        ('task', 'Exercise 2E',
         'Say which tax rate is applied to a difference that will reverse later.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2D'],
         ['The rate used is the one that will apply when the difference reverses, '
          'and it has to be law already.',
          'A rate a government has announced but not enacted is not used.',
          'When a rate changes, the existing balance has to be remeasured, and '
          'that affects the current year.']),
        ('sortgrid',
         ['Statement about the rate used for deferred tax', 'TRUE', 'FALSE'],
         ['The rate is the one enacted for the period in which the difference '
          'reverses',
          'A rate announced by a government but not yet passed into law is used',
          'Existing deferred tax balances are remeasured when a new rate is '
          'enacted',
          'The remeasurement is spread over the remaining reversal period',
          'The effect of a rate change is recognised in the period of enactment',
          'The current year’s rate is always used, whatever happens later'],
         ['TRUE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'Enacted, not announced; and a rate change hits the year it is enacted, '
         'not the years the difference reverses in.'),
        ('fig', 'fork', 'Which rate applies to a deferred balance',
         [('Has a different rate been ENACTED for the reversal period?',
           'YES → use it, and remeasure the existing balance now', TAX),
          ('Has a change merely been announced or proposed?',
           'NO → keep the current enacted rate', SLATE),
          ('When does a remeasurement hit income?',
           'In the period of enactment, in full', RUST)]),

        ('watch', 'Deferred tax never changes the total tax a company pays. It '
                  'changes which year the charge appears in. If a question asks '
                  'about the tax paid over the life of an asset, the answer is '
                  'the same under every depreciation schedule.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company reports income tax expense of %s and income taxes '
                'payable of %s for the year. The difference of %s is:'
                % (money(N.tax), money(N.current_tax),
                   money(N.deferred_tax_pl)),
         ['An error in the tax return',
          'Deferred tax, arising from a difference that will reverse',
          'Tax the company has permanently avoided',
          'A penalty assessed by the tax authority'],
         1, 'Level A',
         'The gap between the charge and the bill is the deferred part. (C) is '
         'the common misreading: the tax is postponed rather than escaped, and '
         'the total over time is unaffected.'),

        ('mcq', 'Accounting profit before tax is %s. Tax depreciation exceeds book '
                'depreciation by %s. Taxable income is:'
                % (money(N.pretax), money(T.temporary_difference)),
         [money(N.pretax + T.temporary_difference),
          money(N.pretax - T.temporary_difference), money(N.pretax),
          money(N.pretax * T.rate)],
         1, 'Level B',
         'A larger deduction on the return reduces taxable income: %s − %s = '
         '%s. (A) adds the difference, which is the error to guard against when '
         'the direction is not spelled out.'
         % (money(N.pretax), money(T.temporary_difference),
            money(N.pretax - T.temporary_difference))),

        ('mcq', 'Interperiod tax allocation exists so that:',
         ['The company pays less tax overall',
          'The tax charge in the income statement matches the accounting profit '
          'that gave rise to it',
          'The tax return and the financial statements agree',
          'Deferred tax balances are eliminated'],
         1, 'Level B',
         'Without allocation the charge would follow the return, and a year of '
         'heavy capital spending would show a low charge against an unchanged '
         'profit. (C) is impossible by design: the two measure the same year by '
         'different rules.'),

        ('mcq', 'Which of the following would cause the effective tax rate to '
                'differ from the statutory rate?',
         ['Tax depreciation exceeding book depreciation',
          'A fine that is not deductible for tax purposes',
          'A difference that will reverse in three years',
          'A change in the timing of a tax payment'],
         1, 'Level C',
         'Only permanent differences move the effective rate; timing differences '
         'change when the charge falls and not how large it is. (A) and (C) both '
         'describe timing differences, which is exactly the distinction the '
         'question is testing.'),

        ('mcq', 'A government enacts a lower tax rate that will take effect in two '
                'years. An existing deferred tax liability should be:',
         ['Left unchanged until the rate takes effect',
          'Remeasured at the new rate, with the effect recognised in the period '
          'of enactment',
          'Remeasured at the new rate, with the effect spread over two years',
          'Written off entirely'],
         1, 'Level C',
         'The balance is remeasured at the enacted rate and the whole effect hits '
         'the period of enactment. (A) and (C) both delay an effect the standards '
         'require to be recognised at once.'),

        ('mcq', 'Which rate is used to measure a deferred tax balance?',
         ['The current year’s rate, always',
          'The rate enacted for the period in which the difference is expected to '
          'reverse',
          'The rate the government has announced it intends to introduce',
          'The average rate over the reversal period'],
         1, 'Level B',
         'Enacted, and for the reversal period. (C) is the trap: an announcement '
         'is not law, and measuring on an intention would let a government '
         'statement move reported profit.'),

        ('mcq', 'Over the entire life of an asset, the total tax a company pays is '
                'affected by the depreciation method used for tax purposes:',
         ['Yes, an accelerated schedule reduces total tax',
          'No, only the timing of the payments changes',
          'Yes, provided the rate stays constant',
          'Only if the asset is sold before the end of its life'],
         1, 'Level C',
         'The same deductions are taken in total, so the total tax is unchanged '
         'and only its distribution moves. (A) is the intuition the whole topic '
         'exists to correct — the benefit is the time value of the deferral, '
         'not a reduction.'),

        ('tip', 'Write three figures at the top of any deferred tax question: '
                'accounting profit, taxable income, and the rate. Everything else '
                'in the question is built from those three, and the one the stem '
                'withholds is usually the answer.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the two measurements'),
        ('table', _TAXH, _taxable(), TAX, _TAXW),
        ('h3', 'Exercise 2C · the completed split'),
        ('table', _SPLH, _split(), TAX, _SPLW),
        ('journal', [
            ('J1', 'The tax charge for %s.' % Y,
             [('Income Tax Expense', 0, money(N.tax), ''),
              ('Income Taxes Payable', 1, '', money(N.current_tax)),
              ('Deferred Tax Liability', 1, '',
               money(N.deferred_tax_pl))]),
        ]),
    ],
)
