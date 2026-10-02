# -*- coding: utf-8 -*-
"""Volume 7, Handout 4 — Deferred Tax Assets and Liabilities.

Covers A.2(r): recognising, measuring, assessing and presenting the two
deferred tax balances. The components net to the single figure Volume 1's
balance sheet already carries.
"""
from fadata import N, T, W, Y, PY
from data import money

LIAB, TAX, LEASE, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_COMPH = ['Component at 31 December %s' % Y, 'Difference', 'At %d%%'
          % (T.rate * 100)]
_COMPW = [50, 25, 25]


def _components(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Cumulative excess tax depreciation — taxable',
         money(T.cumulative_taxable_difference), c(money(T.gross_dtl))],
        ['Warranty provision not yet deductible — deductible',
         money(W.closing), c(money(-W.closing * T.rate))],
        ['Allowance for credit losses not yet deductible — deductible',
         money(N.allowance), c(money(-N.allowance * T.rate))],
        ['Net deferred tax liability, as presented', '',
         c(money(T.net_dtl))],
    ]


_ROLLH = ['Deferred tax liability', 'Amount']
_ROLLW = [68, 32]


def _roll(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Balance at 1 January %s' % Y, money(N.dtl_py)],
        ['Charged to income tax expense', c(money(N.deferred_tax_pl))],
        ['Charged to other comprehensive income',
         c(money(N.deferred_tax_oci))],
        ['Balance at 31 December %s' % Y, c(money(N.dtl))],
    ]


HANDOUT = dict(
    n=4,
    title='Deferred Tax Assets and Liabilities',
    subtitle='Northwind’s balance sheet shows one deferred tax line of %s. '
             'Five differences sit behind it, and two of them are assets.'
             % money(N.dtl),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the recognition and measurement, R3 for the '
                 'realisation test, which the exam states in its own fixed '
                 'phrase.',
        collocations=['recognise a deferred tax asset',
                      'measure a balance at the enacted rate',
                      'assess the realisability of an asset',
                      'record a valuation allowance',
                      'carry a loss forward',
                      'present a balance as non-current'],
        pairs=['deferred tax asset / deferred tax liability',
               'gross balance / net presentation',
               'recognition / realisation',
               'valuation allowance / write-off'],
        nots=['A valuation allowance is not a write-off. The asset stays on the '
              'books and the allowance can be released.',
              'Netting the balances is not optional presentation. Within one tax '
              'jurisdiction a single net figure is required.'],
    ),

    objectives=[
        'Say when a deferred tax asset arises rather than a liability.',
        'Measure each deferred tax component from its difference and the rate.',
        'State the test for whether a deferred tax asset is realisable.',
        'Record and interpret a valuation allowance.',
        'Present the balances the way the balance sheet requires.',
    ],

    terms=[
        ('valuation allowance',
         'A reduction of a deferred tax asset to the amount expected to be '
         'realised.', 'مخصص تقييم',
         'Only the asset can carry one. There is no equivalent for a deferred '
         'tax liability, because a liability needs no future income to be '
         'settled.'),
        ('more likely than not',
         'The recognition threshold for a deferred tax asset: a probability of '
         'more than fifty per cent.', 'الأرجح من عدمه',
         'More than half, not substantially certain and not merely possible. The '
         'exam tests the exact threshold.'),
        ('net operating loss carryforward',
         'A tax loss of one year carried into later years to reduce the taxable '
         'income of those years.', 'الخسارة التشغيلية المدورة',
         'The commonest source of a large deferred tax asset, and the commonest '
         'reason a valuation allowance is needed.'),
        ('realisable',
         'Capable of being turned into an actual tax saving, said of a deferred '
         'tax asset.', 'قابل للتحقق',
         'Recognition and realisation are separate questions. The asset is '
         'recognised in full first, then reduced if it is not realisable.'),
        ('tax jurisdiction',
         'A single taxing authority whose balances are netted against one '
         'another.', 'النطاق الضريبي',
         'Balances in different jurisdictions are not netted, which is why a '
         'group can report a deferred tax asset and a liability at once.'),
    ],

    blocks=[
        ('scene', 'One line, five differences', [
            'Volume 1’s balance sheet carries a single non-current line: '
            'deferred tax liability, %s.' % money(N.dtl),
            'Handout 3 found five temporary differences in Northwind’s year. '
            'Three of them run one way and two run the other.',
            'The %s is not the sum of the five. It is the net of a gross '
            'liability and two gross assets, and the netting is required rather '
            'than chosen.' % money(N.dtl),
            'This handout measures each component, nets them, decides whether '
            'the assets are worth anything, and rolls the balance forward.',
        ]),
        ('fig', 'ranked', 'What the single line is made of',
         [('Gross deferred tax liability — excess tax depreciation',
           T.gross_dtl, money(T.gross_dtl), LIAB),
          ('Gross deferred tax asset — warranty and credit losses',
           T.gross_dta, money(T.gross_dta), TAX),
          ('Net deferred tax liability, as presented', T.net_dtl,
           money(T.net_dtl), SLATE)],
         'The reader of the balance sheet sees only the third bar. The notes '
         'disclose the first two.',
         '%s · at 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · When the balance is an asset',
         'the deduction is coming, not gone'),

        ('task', 'Exercise 4A',
         'Say when a deferred tax asset arises rather than a liability.',
         'Read and complete. Write one word in each space.',
         ['Handout 3, Exercise 3B.'],
         ['Northwind charged a warranty provision in its accounts that the tax '
          'rules will not allow until the repairs are paid for.',
          'If the expense is in the accounts first, this year’s taxable income '
          'is the higher of the two figures.',
          'Blank 4 is what the asset needs in future years before it is worth '
          'anything at all.']),
        ('fill', 'R2',
         ['Northwind’s warranty provision stands at %s, and none of it has been '
          'deducted on a tax return. The expense is in the accounts now and the '
          'deduction comes later, so this year’s taxable income is {higher} '
          'than accounting profit.' % money(W.closing),
          'The company has therefore paid tax on profit it has not reported. '
          'When the repairs are paid for, the deduction arrives and taxable '
          'income falls below accounting profit. The difference is '
          '{deductible}.',
          'A future deduction already charged against accounting profit is an '
          'economic benefit, so it is carried as a deferred tax {asset}. At %d%% '
          'the warranty provision alone gives %s.'
          % (T.rate * 100, money(W.closing * T.rate)),
          'The benefit is conditional. A deduction reduces a tax bill only if '
          'there is a bill to reduce, so the asset is worth something only if '
          'there will be future taxable {income} to set it against.'],
         {'higher': ('The expense has not reached the return yet.', ''),
          'deductible': ('Named for what it does on reversal.', ''),
          'asset': ('A benefit the company will collect later.', ''),
          'income': ('Nothing to deduct from, nothing to deduct.',
                     'Students recognise the asset and stop. The exam almost '
                     'always goes on to ask whether it will be realised.')},
         ['lower', 'taxable', 'liability']),
        ('fig', 'matrix', 'Which balance a difference creates',
         ['Accounts charge the expense first',
          'Tax return takes the deduction first'],
         ['Taxable income this year', 'Taxable income on reversal',
          'Balance carried'],
         [['Higher than accounting profit',
           'Lower than accounting profit', 'Deferred tax asset'],
          ['Lower than accounting profit',
           'Higher than accounting profit', 'Deferred tax liability']],
         'Whoever recognises the item first ends up with the balance the other '
         'way round. Working out which came first settles the question.'),

        ('part', 'Part 2 · Measuring the components',
         'each difference at the enacted rate'),

        ('prose', 'Each component is measured on its own: the cumulative '
                  'difference multiplied by the rate enacted for the period in '
                  'which it will reverse. The balances are then netted within a '
                  'tax jurisdiction and the net figure is presented as '
                  'non-current, whatever the timing of the reversals.', 'R2'),

        ('task', 'Exercise 4B',
         'Measure each deferred tax component and net them to one balance.',
         'Complete the right-hand column, then net the three figures.',
         ['Exercise 4A, and Handout 3 Exercise 3D.'],
         ['Multiply each cumulative difference by %d%%. The differences are '
          'given.' % (T.rate * 100),
          'The two deductible components are shown as negative amounts because '
          'they reduce the liability.',
          'The last row is the figure Volume 1 reported, so you can check your '
          'own work against it.']),
        ('table', _COMPH, _components(blank=True), TAX, _COMPW),
        ('answers', 4),
        ('fig', 'bridge',
         'Gross deferred tax liability', T.gross_dtl,
         [('Warranty provision at %d%%' % (T.rate * 100),
           -W.closing * T.rate),
          ('Credit loss allowance at %d%%' % (T.rate * 100),
           -N.allowance * T.rate)],
         'Net liability, as presented', T.net_dtl),

        ('part', 'Part 3 · Whether the asset is worth anything',
         'the realisation test'),

        ('task', 'Exercise 4C',
         'State the test for realising a deferred tax asset and apply it.',
         'Read and complete. Write one word in each space.',
         ['Exercise 4A.'],
         ['The threshold is a probability, and the exam states it in four '
          'words.',
          'A net operating loss carryforward is the asset most often written '
          'down, because the losses that created it are themselves the '
          'evidence against realisation.',
          'Blank 2 is the account that reduces the asset without removing it '
          'from the books.',
          'A company with a long record of losses has the hardest time meeting '
          'the test, because the evidence runs against it.']),
        ('fill', 'R3',
         ['A deferred tax asset is recognised in full. It is then reduced by a '
          'valuation allowance if, on the weight of available evidence, it is '
          'more likely than {not} that some part of it will not be realised.',
          'The reduction is recorded in a valuation {allowance} rather than '
          'against the asset itself, so the gross asset and the doubt about it '
          'are both visible to a reader.',
          'The evidence is weighed, not counted. A history of recent losses, '
          'expiring {carryforwards} and no reliable forecast of profit all point '
          'one way; existing taxable temporary differences that will reverse '
          'into income point the other.',
          'The allowance is not permanent. If the outlook improves it is '
          '{released}, and the release increases income in the period the '
          'judgement changes.'],
         {'not': ('More than fifty per cent, in the exam’s own phrase.', ''),
          'allowance': ('A contra account, so nothing is hidden.',
                        'Students write the asset down directly. The standard '
                        'requires a separate allowance, exactly as receivables '
                        'do.'),
          'carryforwards': ('Losses have an expiry date; after it they are '
                            'worth nothing.', ''),
          'released': ('The judgement changed, so the balance changes.', '')},
         ['certain', 'impairment', 'reversed']),
        ('fig', 'fork', 'Is the deferred tax asset realisable?',
         [('Is it more likely than not that the benefit will be realised?',
           'YES → carry the asset in full, with no allowance', TAX),
          ('Is some part of it more likely than not to be lost?',
           'NO → record a valuation allowance for that part', RUST),
          ('Does the judgement change in a later year?',
           'YES → adjust the allowance through that year’s tax charge',
           SLATE)]),
        ('journal', [
            ('J1', ('A valuation allowance of $30,000 recorded against a '
                    'deferred tax asset whose realisation has become doubtful.',
                    'The asset is untouched. Only the allowance moves.'),
             [('Income Tax Expense', 0, '', ''),
              ('Valuation Allowance — Deferred Tax Asset', 1, '', '')]),
            ('J2', ('The same allowance released two years later, when '
                    'profitable forecasts make realisation likely again.',
                    'The release lands in income, in the year the view '
                    'changed.'),
             [('Valuation Allowance — Deferred Tax Asset', 0, '', ''),
              ('Income Tax Expense', 1, '', '')]),
        ]),

        ('part', 'Part 4 · The balance over a year',
         'where the movement went'),

        ('task', 'Exercise 4D',
         'Roll the deferred tax liability forward and split the movement.',
         'Complete the schedule. Two charges make up the movement.',
         ['Exercise 4B, and Volume 1 Handout 6 on comprehensive income.'],
         ['The opening balance is %s and the closing balance is %s, so the '
          'movement is %s.' % (money(N.dtl_py), money(N.dtl),
                               money(N.dtl - N.dtl_py)),
          'Handout 2 found %s of deferred tax inside income tax expense. That '
          'is the first charge.' % money(N.deferred_tax_pl),
          'The rest sits in other comprehensive income, because the gain it '
          'relates to was reported there and not in profit.']),
        ('table', _ROLLH, _roll(blank=True), LIAB, _ROLLW),
        ('answers', 3),
        ('fig', 'taccounts',
         [('Deferred Tax Liability',
           [('c/d', money(N.dtl))],
           [('b/d', money(N.dtl_py)), ('J3', money(N.deferred_tax_pl)),
            ('J4', money(N.deferred_tax_oci))],
           '#' + LIAB),
          ('Income Tax Expense',
           [('J3a', money(N.current_tax)), ('J3b', money(N.deferred_tax_pl))],
           [('P&L', money(N.tax))],
           '#' + TAX)],
         'The %s of deferred tax appears in both accounts: a credit building '
         'the liability and a debit inside the charge. The %s in other '
         'comprehensive income never passes through the expense at all.'
         % (money(N.deferred_tax_pl), money(N.deferred_tax_oci)),
         2,
         [('b/d', 'Opening balance brought down from %s' % PY),
          ('J3', 'Deferred tax charged to income tax expense'),
          ('J3a', 'The current half of the charge, payable to the authority'),
          ('J3b', 'The deferred half of the charge, the same %s'
           % money(N.deferred_tax_pl)),
          ('J4', 'Deferred tax charged to other comprehensive income'),
          ('P&L', 'The whole charge closed to the income statement'),
          ('c/d', 'Closing balance carried down to %s' % Y)]),

        ('watch', 'Tax follows its item. Deferred tax on a gain reported in '
                  'other comprehensive income is charged to other comprehensive '
                  'income, not to income tax expense. A question that gives you '
                  'the whole movement in the balance and asks for the expense is '
                  'testing exactly that split.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A deferred tax asset arises when:',
         ['Tax depreciation exceeds book depreciation',
          'An expense is charged in the accounts before it is deductible',
          'A fine is disallowed for tax purposes',
          'The enacted rate is reduced'],
         1, 'Level A',
         'The accounts charge first, so tax is paid now and the deduction comes '
         'later: an asset. (A) is the mirror case and gives a liability, and (C) '
         'is permanent, so it gives no balance at all.'),

        ('mcq', 'A company has a deductible temporary difference of $400,000 and '
                'an enacted rate of 30%%. The deferred tax asset is:',
         ['$400,000', '$120,000', '$280,000', 'Nil until the difference '
          'reverses'],
         1, 'Level A',
         '$400,000 at 30%% is $120,000. (A) is the difference itself rather than '
         'the tax on it, which is the error to guard against when a stem gives '
         'the difference and not the tax.'),

        ('mcq', 'A valuation allowance is recorded when:',
         ['A deferred tax liability is unlikely to be settled',
          'It is more likely than not that part of a deferred tax asset will '
          'not be realised',
          'The enacted tax rate changes',
          'A permanent difference arises'],
         1, 'Level B',
         'The allowance belongs to the asset and to the realisation question '
         'alone. (A) is impossible: settling a liability needs no future income, '
         'so no equivalent allowance exists.'),

        ('mcq', 'The threshold for realising a deferred tax asset is that '
                'realisation is:',
         ['Reasonably possible', 'More likely than not', 'Probable and '
          'estimable', 'Virtually certain'],
         1, 'Level B',
         'More likely than not means a probability above fifty per cent. (A) and '
         '(D) sit either side of it and are the wordings the exam borrows from '
         'contingencies and from tax positions to make the choice look '
         'plausible.'),

        ('mcq', 'On a classified balance sheet, deferred tax balances are '
                'presented as:',
         ['Current or non-current, according to when the difference reverses',
          'A single net non-current amount for each tax jurisdiction',
          'Always a current asset and a non-current liability',
          'An offset against the related asset or liability'],
         1, 'Level B',
         'One net non-current figure per jurisdiction, whatever the reversal '
         'dates. (A) is the rule that was withdrawn and remains the commonest '
         'wrong answer on this topic.'),

        ('mcq', 'A deferred tax liability of %s at the start of the year becomes '
                '%s at the end. Income tax expense includes %s of deferred tax. '
                'The remainder was:' % (money(N.dtl_py), money(N.dtl),
                                        money(N.deferred_tax_pl)),
         ['An error in the opening balance',
          'Charged to other comprehensive income',
          'Paid to the tax authority',
          'Released as a valuation allowance'],
         1, 'Level C',
         'The movement is %s and the expense carries %s, leaving %s charged '
         'where the related gain was reported: other comprehensive income. (C) '
         'confuses the deferred balance with the current tax actually paid.'
         % (money(N.dtl - N.dtl_py), money(N.deferred_tax_pl),
            money(N.deferred_tax_oci))),

        ('mcq', 'A company with large loss carryforwards releases part of its '
                'valuation allowance because forecasts have improved. The '
                'effect on the current year is:',
         ['No effect, because the asset was already recognised',
          'A reduction in income tax expense, increasing net income',
          'An increase in other comprehensive income',
          'A restatement of the prior year'],
         1, 'Level C',
         'Releasing the allowance credits income tax expense in the year the '
         'judgement changed. (D) is the trap: a change in estimate is never '
         'taken back to a prior period.'),

        ('tip', 'In any deferred tax question, write the gross liability and the '
                'gross asset separately before you net them. Stems are built to '
                'punish netting too early: the valuation allowance, the rate '
                'change and the jurisdiction test all apply to a component, not '
                'to the net figure.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4B · the completed components'),
        ('table', _COMPH, _components(), TAX, _COMPW),
        ('h3', 'Exercise 4D · the completed roll-forward'),
        ('table', _ROLLH, _roll(), LIAB, _ROLLW),
        ('journal', [
            ('J1', 'A valuation allowance of $30,000 recorded.',
             [('Income Tax Expense', 0, '$30,000', ''),
              ('Valuation Allowance — Deferred Tax Asset', 1, '', '$30,000')]),
            ('J2', 'The same allowance released.',
             [('Valuation Allowance — Deferred Tax Asset', 0, '$30,000', ''),
              ('Income Tax Expense', 1, '', '$30,000')]),
        ]),
        ('prose', 'The cumulative taxable difference of %s is the whole of the '
                  'excess depreciation claimed since the assets were bought, not '
                  'this year’s %s. Only the movement in the balance passes '
                  'through this year’s tax charge, which is why the %s in '
                  'Handout 2 is so much smaller than the %s balance.'
                  % (money(T.cumulative_taxable_difference),
                     money(T.temporary_difference),
                     money(N.deferred_tax_pl), money(T.gross_dtl)), 'R2'),
    ],
)
