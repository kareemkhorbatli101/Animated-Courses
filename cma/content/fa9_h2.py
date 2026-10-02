# -*- coding: utf-8 -*-
"""Volume 9, Handout 2 — Comprehensive Income.

Covers A.2(dd): what comprehensive income is, what is in the other half of
it, and how the accumulated balance moves.
"""
from fadata import N, Y, PY
from data import money

INC, EXP, PERI, SLATE = '1F6F8F', 'A05A2B', '6D3F7E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_CIH = ['Statement of comprehensive income, %s' % Y, 'Amount']
_CIW = [70, 30]


def _ci(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Net income', money(N.net_income)],
        ['Unrealised gain on available-for-sale debt securities, before tax',
         money(N.afs_gain_pretax)],
        ['Income tax on that gain', c(money(-N.deferred_tax_oci))],
        ['Other comprehensive income for the year', c(money(N.oci))],
        ['Total comprehensive income', c(money(N.comprehensive_income))],
    ]


_AOCIH = ['Accumulated other comprehensive income', 'Amount']
_AOCIW = [70, 30]


def _aoci(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Balance at 1 January %s' % Y, money(N.aoci_py)],
        ['Other comprehensive income for the year', c(money(N.oci))],
        ['Balance at 31 December %s' % Y, c(money(N.aoci))],
    ]


HANDOUT = dict(
    n=2,
    title='Comprehensive Income',
    subtitle='Northwind earned %s and its equity grew by %s from performance. '
             'The %s in between never went near the income statement.'
             % (money(N.net_income), money(N.comprehensive_income),
                money(N.oci)),
    register='R2',

    lang=dict(
        register='R2 throughout, with one R3 classification where the exam asks '
                 'which items belong in the other half.',
        collocations=['bypass the income statement',
                      'report an item in other comprehensive income',
                      'accumulate a balance in equity',
                      'reclassify a gain into profit',
                      'present comprehensive income in one statement',
                      'realise an unrealised gain'],
        pairs=['net income / comprehensive income',
               'realised / unrealised',
               'profit or loss / other comprehensive income',
               'period amount / accumulated balance'],
        nots=['Other comprehensive income is not a second kind of profit. It '
              'is performance that the standards keep out of profit until it '
              'is realised.',
              'Accumulated other comprehensive income is not an income '
              'account. It is a balance inside equity, like retained '
              'earnings.'],
    ),

    objectives=[
        'Define comprehensive income and say what it adds to net income.',
        'Name the items reported in other comprehensive income.',
        'Compute other comprehensive income net of its tax.',
        'Roll the accumulated balance forward.',
        'Say what happens to an item when it is realised.',
    ],

    terms=[
        ('comprehensive income',
         'The total change in equity in a period from all sources other than '
         'transactions with shareholders.', 'الدخل الشامل',
         'The widest measure of performance there is. Net income is only part '
         'of it.'),
        ('other comprehensive income',
         'The items of comprehensive income that the standards require to be '
         'reported outside profit or loss.', 'الدخل الشامل الآخر',
         'A closed list. An item is in it because a standard says so, not '
         'because it feels unusual.'),
        ('accumulated other comprehensive income',
         'The cumulative total of other comprehensive income not yet '
         'reclassified into profit, carried as a line in equity.',
         'الدخل الشامل الآخر المتراكم',
         'The balance to other comprehensive income’s flow, exactly as '
         'retained earnings is the balance to net income’s.'),
        ('reclassification adjustment',
         'The transfer of an amount out of accumulated other comprehensive '
         'income and into profit, when the item is realised.',
         'تسوية إعادة التصنيف',
         'Without it the same gain would be counted twice: once as it arose '
         'and again when it was sold.'),
        ('unrealised',
         'Describing a change in value that has not yet been converted into a '
         'completed transaction.', 'غير محقق',
         'The reason most of the other half exists. Realisation is the event '
         'that moves an item into profit.'),
    ],

    blocks=[
        ('scene', 'Two measures of one year', [
            'Northwind’s income statement ends at net income of %s. That is '
            'the figure every per-share measure is built on.'
            % money(N.net_income),
            'But the company’s equity grew by %s during the year from its own '
            'performance, not %s.'
            % (money(N.comprehensive_income), money(N.net_income)),
            'The difference of %s is an unrealised gain on securities that the '
            'standards require to be kept out of profit until the securities '
            'are sold.' % money(N.oci),
            'This handout reports both measures, and explains what happens to '
            'the %s when the gain is finally realised.' % money(N.oci),
        ]),
        ('fig', 'ranked', 'Two measures of Northwind’s %s' % Y,
         [('Net income, as the income statement ends', N.net_income,
           money(N.net_income), INC),
          ('Other comprehensive income, net of tax', N.oci,
           money(N.oci), SLATE),
          ('Total comprehensive income', N.comprehensive_income,
           money(N.comprehensive_income), OK)],
         'The third bar is the first two added. It is the whole change in '
         'equity from performance, and only the first bar reaches earnings per '
         'share.',
         '%s · year ended 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · What the wider measure is for',
         'performance that bypasses profit'),

        ('task', 'Exercise 2A',
         'Define comprehensive income and say why a second measure exists.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 6, where this statement was first built.',
          'Volume 6 Handout 2, for the securities the gain arose on.'],
         ['Start from the change in equity and take out the one source of '
          'change that is not performance.',
          'Northwind’s gain of %s is real but not completed. Ask what is '
          'missing before it could reach profit.' % money(N.afs_gain_pretax),
          'The last blank is where the amount sits in the meantime, and it is '
          'inside equity rather than inside profit.']),
        ('fill', 'R2',
         ['Comprehensive income is the whole change in equity in a period, '
          'except for changes caused by transactions with {shareholders}. '
          'Issuing shares and paying dividends are excluded; everything else '
          'is performance.',
          'Most performance reaches profit, and net income of %s is the result. '
          'A few items do not, because the standards judge them too '
          '{unrealised} to be reported as earnings yet.'
          % money(N.net_income),
          'Northwind holds debt securities that rose %s in value. Nothing has '
          'been sold, so the gain is reported in other comprehensive income '
          'instead, net of the %s of tax that goes with it, giving {%s}.'
          % (money(N.afs_gain_pretax), money(N.deferred_tax_oci),
             money(N.oci)),
          'The amount is not lost. It is added to a balance inside equity '
          'called accumulated other comprehensive income, where it waits until '
          'the securities are {sold}.'],
         {'shareholders': ('Capital in and dividends out are not '
                           'performance.', ''),
          'unrealised': ('No completed transaction yet.', ''),
          money(N.oci): ('%s less %s of tax.'
                         % (money(N.afs_gain_pretax),
                            money(N.deferred_tax_oci)), ''),
          'sold': ('Realisation is the event that releases it.',
                   'Students treat the amount as permanently outside profit. '
                   'For most items it is only waiting.')},
         ['customers', 'realised', 'reversed']),
        ('fig', 'scale',
         'NET INCOME %s' % money(N.net_income),
         ['Realised performance for the year',
          'The basis of earnings per share',
          'Closed to retained earnings',
          'What most readers mean by profit'],
         'OTHER COMPREHENSIVE INCOME %s' % money(N.oci),
         ['Performance the standards keep out of profit',
          'Excluded from earnings per share',
          'Closed to accumulated other comprehensive income',
          'Waiting for realisation']),

        ('part', 'Part 2 · What is in the other half',
         'a closed list, not a judgement'),

        ('task', 'Exercise 2B',
         'Identify which items are reported in other comprehensive income.',
         'Sort each item into the column it belongs in.',
         ['Exercise 2A.'],
         ['The list is closed. An item is in it because a standard puts it '
          'there, and unusual size is never the test.',
          'Northwind’s own item is the unrealised gain on its '
          'available-for-sale debt securities.',
          'Two of the items look unusual and still belong in profit, and a '
          'restructuring charge is one of them.']),
        ('sortgrid',
         ['Item', 'OTHER COMPREHENSIVE INCOME', 'PROFIT OR LOSS'],
         ['Unrealised gain on available-for-sale debt securities',
          'Foreign currency translation adjustment on a subsidiary',
          'Actuarial gains and losses on a defined benefit pension plan',
          'The effective portion of a cash flow hedge',
          'A large restructuring charge',
          'Unrealised gain on equity securities held for trading',
          'A loss on the sale of a factory',
          'Revaluation surplus on property, under IFRS'],
         ['OTHER COMPREHENSIVE INCOME', 'OTHER COMPREHENSIVE INCOME',
          'OTHER COMPREHENSIVE INCOME', 'OTHER COMPREHENSIVE INCOME',
          'PROFIT OR LOSS', 'PROFIT OR LOSS', 'PROFIT OR LOSS',
          'OTHER COMPREHENSIVE INCOME'],
         'Four of the eight are the US GAAP list, plus the IFRS revaluation '
         'surplus. Unusual size never moves an item out of profit.'),
        ('fig', 'buckets', 'The other half, item by item',
         [('IN OTHER COMPREHENSIVE INCOME', SLATE,
           ['Unrealised gains on available-for-sale debt securities',
            'Foreign currency translation adjustments',
            'Pension actuarial gains and losses',
            'The effective portion of a cash flow hedge']),
          ('IN PROFIT OR LOSS, HOWEVER LARGE', INC,
           ['Restructuring charges and impairments',
            'Gains on trading securities',
            'Gains and losses on disposals',
            'Discontinued operations, net of tax'])],
         'The left column is the whole of the US GAAP list. Anything not on it '
         'is in profit, whatever its size.'),

        ('part', 'Part 3 · Presenting the two together',
         'one statement, or two'),

        ('prose', 'The two measures may be shown in a single continuous '
                  'statement that begins with revenue and ends with total '
                  'comprehensive income, or in two consecutive statements, the '
                  'second starting from net income. Either way both figures '
                  'appear, and components may be shown before or after tax.',
         'R2'),

        ('task', 'Exercise 2C',
         'Complete the statement of comprehensive income.',
         'Complete the table, showing the tax on the gain separately.',
         ['Exercise 2A, and Volume 1 Handout 5 for the net income.'],
         ['Start from the %s of net income. It is given.'
          % money(N.net_income),
          'The gain before tax is %s and the tax on it is %s, which is shown as '
          'a deduction.' % (money(N.afs_gain_pretax),
                            money(N.deferred_tax_oci)),
          'The last line is the sum of net income and the net figure above it.'
          ]),
        ('table', _CIH, _ci(blank=True), SLATE, _CIW),
        ('answers', 3),
        ('fig', 'bridge',
         'Net income', N.net_income,
         [('Unrealised gain before tax', N.afs_gain_pretax),
          ('Tax on the gain', -N.deferred_tax_oci)],
         'Total comprehensive income', N.comprehensive_income),

        ('part', 'Part 4 · The accumulated balance',
         'the flow and the stock'),

        ('task', 'Exercise 2D',
         'Roll accumulated other comprehensive income forward for the year.',
         'Complete the schedule. The opening balance is given.',
         ['Exercise 2C, and Volume 8 Handout 1 for the equity section.'],
         ['The relationship is the same as retained earnings and net income: '
          'one is the flow and the other is the balance it feeds.',
          'The opening balance of %s came from earlier years’ unrealised '
          'gains.' % money(N.aoci_py),
          'The closing balance must be the %s Volume 1 reported in equity.'
          % money(N.aoci)]),
        ('table', _AOCIH, _aoci(blank=True), SLATE, _AOCIW),
        ('answers', 2),
        ('fig', 'taccounts',
         [('Accumulated Other Comprehensive Income',
           [('c/d', money(N.aoci))],
           [('b/d', money(N.aoci_py)), ('J1', money(N.oci))],
           '#' + SLATE),
          ('Retained Earnings',
           [('J3', money(N.dividends)), ('c/d', money(N.retained))],
           [('b/d', money(N.retained_py)), ('J2', money(N.net_income))],
           '#' + INC)],
         'Two balances inside equity, fed by the two halves of comprehensive '
         'income. Neither of them is cash, and only the right-hand one can be '
         'distributed.',
         2,
         [('b/d', 'Opening balance brought down from %s' % PY),
          ('J1', 'Other comprehensive income for the year, net of tax'),
          ('J2', 'Net income for the year'),
          ('J3', 'Dividends declared'),
          ('c/d', 'Balance carried down at 31 December %s' % Y)]),

        ('part', 'Part 5 · What happens on realisation',
         'the reclassification adjustment'),

        ('task', 'Exercise 2E',
         'Say what happens to an accumulated amount when the item is realised.',
         'Read and complete. Write one word in each space.',
         ['Exercise 2D, and Volume 6 Handout 3 on selling a security.'],
         ['Suppose Northwind sells the securities next year for exactly their '
          'carrying amount.',
          'The gain has already been reported once, in other comprehensive '
          'income. Ask what has to happen so that it is not reported twice.',
          'The last blank is the net effect of the adjustment on total '
          'comprehensive income in the year of sale.']),
        ('fill', 'R2',
         ['When the securities are sold the gain becomes {realised}, and a '
          'realised gain belongs in profit. It has already been reported in '
          'other comprehensive income, however, so it cannot simply be '
          'recognised again.',
          'The amount is therefore taken out of accumulated other '
          'comprehensive income and put into profit, in a transfer called a '
          '{reclassification} adjustment.',
          'Profit rises by the amount transferred and other comprehensive '
          'income for that year falls by the same amount, so total '
          'comprehensive income for the year of sale is {unaffected} by the '
          'transfer itself.',
          'Not every item is recycled this way. A revaluation surplus under '
          'IFRS stays in equity permanently, and the exam uses that as its '
          '{exception} to the rule.'],
         {'realised': ('A completed transaction at last.', ''),
          'reclassification': ('The standard’s own name for the transfer.',
                               ''),
          'unaffected': ('One half up, the other half down.',
                         'Students add the reclassified gain to comprehensive '
                         'income a second time. The transfer moves an amount; '
                         'it does not create one.'),
          'exception': ('One item that never reaches profit.', '')},
         ['deferred', 'revaluation', 'doubled']),
        ('fig', 'timeline', 'One gain, two reports, counted once',
         [('Year it arises', 'The %s gain is reported in other comprehensive '
                             'income and added to the accumulated balance'
           % money(N.oci), SLATE),
          ('While it is held', 'The amount sits in equity. Profit has never '
                               'seen it.', PERI),
          ('Year of sale', 'It is reclassified out of equity and into profit, '
                           'and other comprehensive income falls by the same '
                           'amount', INC)],
         'Reported twice and counted once. That is exactly what the '
         'reclassification adjustment is for.'),

        ('watch', 'Comprehensive income is not used in earnings per share. '
                  'Every per-share figure is built on net income, which is why '
                  'a company can report rising comprehensive income and falling '
                  'earnings per share in the same year.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Comprehensive income is best described as:',
         ['Net income plus dividends',
          'The change in equity from all sources other than transactions with '
          'shareholders',
          'Net income before tax',
          'The change in retained earnings'],
         1, 'Level A',
         'All performance, with owner transactions excluded. (D) is the '
         'commonest wrong answer and omits both the other half and the share '
         'transactions.'),

        ('mcq', 'Which of the following is reported in other comprehensive '
                'income?',
         ['A gain on the sale of equipment',
          'A foreign currency translation adjustment',
          'A restructuring charge',
          'An unrealised gain on trading securities'],
         1, 'Level A',
         'Translation adjustments are on the closed list. (D) is the near miss: '
         'trading securities are marked to market through profit, and only the '
         'available-for-sale classification goes to the other half.'),

        ('mcq', 'Northwind reports net income of %s and an unrealised gain of '
                '%s before %s of tax. Total comprehensive income is:'
         % (money(N.net_income), money(N.afs_gain_pretax),
            money(N.deferred_tax_oci)),
         [money(N.net_income + N.afs_gain_pretax),
          money(N.comprehensive_income), money(N.net_income),
          money(N.net_income - N.deferred_tax_oci)],
         1, 'Level B',
         '%s plus the gain net of its tax, %s, is %s. (A) adds the gain gross '
         'and so reports a tax charge that was never avoided.'
         % (money(N.net_income), money(N.oci),
            money(N.comprehensive_income))),

        ('mcq', 'Accumulated other comprehensive income is reported:',
         ['In the income statement, below net income',
          'As a separate component of shareholders’ equity',
          'As a liability until realised',
          'As a note disclosure only'],
         1, 'Level B',
         'It is a balance inside equity, alongside retained earnings. (A) '
         'confuses the balance with the flow that feeds it, which is the '
         'distinction the question is testing.'),

        ('mcq', 'A company sells available-for-sale debt securities on which it '
                'had previously reported a $40,000 unrealised gain in other '
                'comprehensive income. In the year of sale:',
         ['Comprehensive income increases by $40,000',
          'Profit increases by $40,000 and other comprehensive income '
          'decreases by $40,000',
          'Other comprehensive income increases by $40,000',
          'Nothing is recognised, because the gain was already reported'],
         1, 'Level C',
         'The reclassification moves the amount between the two halves and '
         'changes neither total. (A) counts the same gain twice, and (D) leaves '
         'a realised gain permanently out of profit.'),

        ('mcq', 'Which item is reported in other comprehensive income and never '
                'reclassified into profit?',
         ['An unrealised gain on available-for-sale debt securities',
          'A revaluation surplus on property under IFRS',
          'A foreign currency translation adjustment',
          'The effective portion of a cash flow hedge'],
         1, 'Level C',
         'A revaluation surplus stays in equity even on disposal, where it may '
         'be transferred to retained earnings but never through profit. The '
         'other three are all recycled when the underlying item is realised.'),

        ('mcq', 'Earnings per share is computed using:',
         ['Total comprehensive income',
          'Net income',
          'Net income plus other comprehensive income before tax',
          'The change in accumulated other comprehensive income'],
         1, 'Level B',
         'Every per-share measure uses net income, which is why a large item in '
         'the other half can leave earnings per share untouched. (A) is the '
         'answer the wider measure’s name invites.'),

        ('tip', 'Two questions settle any item: is it on the closed list, and '
                'has it been realised? Only a listed item goes to the other '
                'half, and only realisation brings it back. Anything else, '
                'however large or unusual, belongs in profit.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2C · the completed statement'),
        ('table', _CIH, _ci(), SLATE, _CIW),
        ('h3', 'Exercise 2D · the accumulated balance, rolled forward'),
        ('table', _AOCIH, _aoci(), SLATE, _AOCIW),
        ('prose', 'The closing balance of %s is the figure in Volume 1’s equity '
                  'section and in Volume 8 Handout 1. The %s movement is the '
                  'whole of the year’s other comprehensive income, because '
                  'nothing was reclassified out during %s.'
                  % (money(N.aoci), money(N.aoci - N.aoci_py), Y), 'R2'),
        ('prose', 'The %s of tax inside the other half is the same %s that '
                  'Volume 7 Handout 4 traced through the deferred tax '
                  'liability. Tax follows its item: the gain was reported '
                  'outside profit, so its tax was charged outside profit too.'
                  % (money(N.deferred_tax_oci),
                     money(N.deferred_tax_oci)), 'R2'),
    ],
)
