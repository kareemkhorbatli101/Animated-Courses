# -*- coding: utf-8 -*-
"""Volume 17, Handout 3 — Functional Currency and Translating a Foreign
Subsidiary.

Covers CMA Part 2 A.4(a): the impact of exchange rate changes on the
financial statements, worked on Volume 10's own subsidiary.
"""
from fadata import N, FX, CO, Y
from data import money, num

PRIN, EST, SLATE, ERR = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _r(x):
    return num(x, 2)


def _lc(x):
    return 'LC ' + num(x, 0)


_TRANSH = ['%s, translated' % CO.sub, 'Local currency', 'Rate', 'Translated']
_TRANSW = [32, 24, 18, 26]


def _trans(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Assets', _lc(CO.sub_assets), c(_r(FX.closing)),
         c(money(FX.assets))],
        ['Liabilities', _lc(CO.sub_assets - CO.net_assets_fv),
         c(_r(FX.closing)), c(money(FX.liabilities))],
        ['Net assets', _lc(CO.net_assets_fv), '', c(money(FX.net_assets))],
        ['Contributed capital', _lc(CO.net_assets_fv), c(_r(FX.historical)),
         c(money(FX.contributed))],
        ['Profit for the year', _lc(CO.sub_profit), c(_r(FX.average)),
         c(money(FX.income))],
        ['Cumulative translation adjustment', '', '', c(money(FX.cta))],
    ]


_RATEH = ['Item', 'Current rate method', 'Temporal method']
_RATEW = [34, 33, 33]


def _rate(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Assets and liabilities', c('Closing rate'),
         c('Monetary at closing; non-monetary at historical')],
        ['Equity', c('Historical rate'), c('Historical rate')],
        ['Revenue and expenses', c('Average rate'),
         c('Average, except those tied to non-monetary items')],
        ['The balancing figure goes to',
         c('Other comprehensive income'), c('Profit')],
        ['Used when the functional currency is',
         c('The subsidiary’s local currency'),
         c('The parent’s reporting currency')],
    ]


HANDOUT = dict(
    n=3,
    title='Functional Currency and Translating a Foreign Subsidiary',
    subtitle='%s is worth %s of net assets and %s of equity. The %s gap is '
             'the exchange rate, and it has to go somewhere.'
             % (CO.sub, money(FX.net_assets),
                money(FX.contributed + FX.income), money(-FX.cta)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the mechanics, R3 for the choice of method, which the '
                 'exam frames as a functional currency question.',
        collocations=['determine the functional currency',
                      'translate at the closing rate',
                      'translate equity at historical rates',
                      'carry a translation adjustment in equity',
                      'remeasure into the functional currency',
                      'recycle a translation adjustment on disposal'],
        pairs=['functional currency / reporting currency',
               'current rate method / temporal method',
               'translation / remeasurement',
               'monetary / non-monetary'],
        nots=['The functional currency is not chosen for convenience. It is '
              'determined from the facts of how the subsidiary operates.',
              'A translation adjustment is not a gain or a loss anyone made. '
              'It is the figure that makes a translated balance sheet '
              'balance.'],
    ),

    objectives=[
        'Define the functional currency and say how it is determined.',
        'Translate a foreign subsidiary under the current rate method.',
        'Compute the cumulative translation adjustment.',
        'Distinguish translation from remeasurement.',
        'Say what a rate change does to the ratios a reader computes.',
    ],

    terms=[
        ('functional currency',
         'The currency of the primary economic environment in which an entity '
         'operates.', 'العملة الوظيفية',
         'Determined from facts, not chosen. It decides which of the two '
         'methods applies, and so decides where the adjustment lands.'),
        ('reporting currency',
         'The currency in which the group presents its consolidated '
         'statements.', 'عملة العرض',
         'Northwind reports in dollars whatever currency its subsidiaries '
         'operate in.'),
        ('current rate method',
         'Translating assets and liabilities at the closing rate, equity at '
         'historical rates and income at the average rate.',
         'طريقة السعر الجاري',
         'Used where the subsidiary’s functional currency is its own local '
         'currency, which is the usual case.'),
        ('temporal method',
         'Remeasuring monetary items at the closing rate and non-monetary '
         'items at historical rates.', 'الطريقة الزمنية',
         'Used where the functional currency is the parent’s. The balancing '
         'figure goes to profit, which is the difference that matters.'),
        ('cumulative translation adjustment',
         'The accumulated balance in equity arising from translating a foreign '
         'subsidiary.', 'فروق الترجمة المتراكمة',
         'A plug, and an honest one: it is exactly the figure that makes the '
         'translated balance sheet balance.'),
        ('remeasurement',
         'Restating transactions and balances into the functional currency, '
         'with the difference taken to profit.',
         'إعادة القياس بالعملة الوظيفية',
         'Not the same as translation. Remeasurement reaches profit; '
         'translation does not.'),
    ],

    blocks=[
        ('scene', 'Lakeside moves abroad', [
            'Volume 10 consolidated %s, which Northwind controls %s of. '
            'Suppose it operates abroad, in its own currency.'
            % (CO.sub, num(CO.stake * 100, 0) + '%'),
            'Its figures are the same ones Volume 10 used: assets of %s, net '
            'assets of %s and profit of %s, all in local currency.'
            % (_lc(CO.sub_assets), _lc(CO.net_assets_fv),
               _lc(CO.sub_profit)),
            'Northwind reports in dollars, so those figures have to be '
            'translated. Three different rates apply to three different parts '
            'of the statements: %s historical, %s average, %s closing.'
            % (_r(FX.historical), _r(FX.average), _r(FX.closing)),
            'Because the rates differ, the translated balance sheet does not '
            'balance on its own. The figure that makes it balance is what this '
            'handout is about.',
        ]),
        ('fig', 'ranked', 'Three rates, one subsidiary',
         [('Historical, when Northwind invested', FX.historical * 100,
           _r(FX.historical), PRIN),
          ('Average for the year', FX.average * 100, _r(FX.average), EST),
          ('Closing, at the reporting date', FX.closing * 100,
           _r(FX.closing), SLATE)],
         'The local currency has weakened against the dollar through the year. '
         'Every part of the statements is translated at whichever of these '
         'three the standard prescribes for it.',
         'Dollars per unit of local currency'),

        ('part', 'Part 1 · Which currency the subsidiary thinks in',
         'the functional currency'),

        ('task', 'Exercise 3A',
         'Define the functional currency and say how it is determined.',
         'Read and complete. Write one word in each space.',
         ['Volume 10 Handout 1, on why a subsidiary is consolidated at all.'],
         ['Ask which currency %s sells in, pays its staff in and borrows in.'
          % CO.sub,
          'A company that does all of those locally is operating in its own '
          'economic environment, whatever currency its parent reports in.',
          'The last blank is what the determination decides, and it is not a '
          'presentational matter.']),
        ('fill', 'R2',
         ['The functional currency is the currency of the primary economic '
          '{environment} in which an entity operates: the one it sells in, '
          'pays its costs in, and raises its financing in.',
          'It is determined from the facts rather than {chosen}. A subsidiary '
          'that sells locally, employs locally and borrows locally has its own '
          'local currency as its functional currency, whatever Northwind '
          'reports in.',
          'The reporting currency is a different thing. Northwind presents its '
          'consolidated statements in {dollars}, and every subsidiary’s figures '
          'have to arrive there somehow.',
          'The determination matters because it decides the {method}. One '
          'method sends the difference to equity and the other sends it to '
          'profit, and nothing else about the facts changes.'],
         {'environment': ('Where it really operates.', ''),
          'chosen': ('A question of fact, not of policy.',
                     'Students treat the functional currency as an election. '
                     'The standard lists indicators and the facts decide.'),
          'dollars': ('One currency for the whole group.', ''),
          'method': ('And therefore where the difference lands.', '')},
         ['market', 'determined', 'currency']),
        ('fig', 'fork', 'Which method applies to this subsidiary?',
         [('Is the functional currency the subsidiary’s own local currency?',
           'YES → the current rate method, and the adjustment goes to equity',
           EST),
          ('Is the functional currency the parent’s reporting currency?',
           'YES → the temporal method, and the difference goes to profit',
           ERR),
          ('Does the choice depend on what the parent prefers?',
           'NO → it is determined from how the subsidiary operates', SLATE)]),

        ('part', 'Part 2 · Translating it',
         'three rates, one balance sheet'),

        ('prose', 'Under the current rate method, assets and liabilities are '
                  'translated at the closing rate, because that is what they '
                  'are worth now. Equity is translated at the historical rates '
                  'at which it arose. Income is translated at the average rate '
                  'for the year.', 'R2'),

        ('task', 'Exercise 3B',
         'Translate %s into dollars under the current rate method.' % CO.sub,
         'Complete the grid. The local currency figures are given.',
         ['The paragraph above, and Volume 10 Handout 2 for the subsidiary’s '
          'own figures.'],
         ['Assets and liabilities both take the closing rate of %s.'
          % _r(FX.closing),
          'Contributed capital takes the %s historical rate, because that is '
          'what Northwind actually paid.' % _r(FX.historical),
          'The last row is not translated from anything. It is the figure that '
          'makes the two sides agree, and Exercise 3C explains it.']),
        ('table', _TRANSH, _trans(blank=True), PRIN, _TRANSW),
        ('answers', 11),
        ('fig', 'bridge',
         'Net assets at the closing rate', FX.net_assets,
         [('Less contributed capital at the historical rate',
           -FX.contributed),
          ('Less profit at the average rate', -FX.income)],
         'Cumulative translation adjustment', FX.cta),

        ('part', 'Part 3 · The figure that makes it balance',
         'the translation adjustment'),

        ('task', 'Exercise 3C',
         'Say what the cumulative translation adjustment is and where it goes.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 3B, and Volume 9 Handout 2 on other comprehensive '
          'income.'],
         ['The net assets translated at %s come to %s. The equity translated '
          'at its own rates comes to %s.'
          % (_r(FX.closing), money(FX.net_assets),
             money(FX.contributed + FX.income)),
          'Those two figures describe the same thing and they do not agree, '
          'because different rates were used.',
          'The last blank is where the difference is reported, and Volume 9 '
          'listed it as one of the four items that belong there.']),
        ('fill', 'R2',
         ['The net assets translated at the closing rate are %s. The equity '
          'that produced them, translated at its own rates, is %s. The two '
          'describe the same net assets and they {differ} by %s.'
          % (money(FX.net_assets), money(FX.contributed + FX.income),
             money(-FX.cta)),
          'Nothing is wrong. The difference arises because the rate at which '
          'Northwind invested was %s and the rate at the year end is %s, and '
          'no transaction caused that {movement}.'
          % (_r(FX.historical), _r(FX.closing)),
          'So the difference is recorded as a cumulative translation '
          'adjustment of {%s}, which is exactly the figure that makes the '
          'translated balance sheet balance.' % money(FX.cta),
          'It goes to other comprehensive {income} and accumulates in equity. '
          'Volume 9 named it as one of the four items that bypass profit, and '
          'it stays there until the subsidiary is sold.'],
         {'differ': ('Different rates on the same net assets.', ''),
          'movement': ('A rate moved; nobody traded.', ''),
          money(FX.cta): ('%s less %s.' % (money(FX.net_assets),
                                           money(FX.contributed
                                                 + FX.income)), ''),
          'income': ('Other comprehensive income, as Volume 9 listed.',
                     'Students expect a currency loss in profit. Under the '
                     'current rate method nothing about the translation '
                     'reaches profit at all.')},
         ['agree', 'profit', 'rate']),
        ('fig', 'matrix', 'Where each part of the statements gets its rate',
         ['Assets and liabilities', 'Contributed capital',
          'Profit for the year', 'The adjustment'],
         ['Rate used', 'Why'],
         [[_r(FX.closing) + ', the closing rate',
           'What they are worth at the reporting date'],
          [_r(FX.historical) + ', the historical rate',
           'What Northwind actually paid'],
          [_r(FX.average) + ', the average rate',
           'Earned evenly across the year'],
          ['None — it is a plug',
           'The figure that makes the two sides agree']],
         'Three rates and one plug. The plug is not an error term; it is the '
         'honest consequence of translating one balance sheet at three '
         'different rates.'),

        ('part', 'Part 4 · The other method',
         'remeasurement, and why it hits profit'),

        ('task', 'Exercise 3D',
         'Compare the current rate method with the temporal method.',
         'Complete both right-hand columns.',
         ['Exercise 3C.'],
         ['Under the temporal method only monetary items take the closing '
          'rate. Cash and receivables are monetary; inventory and equipment '
          'are not.',
          'Ask what it means that one method sends the balancing figure to '
          'profit and the other to equity.',
          'The last row is the condition that decides which method is used, '
          'and Exercise 3A established it.']),
        ('table', _RATEH, _rate(blank=True), SLATE, _RATEW),
        ('answers', 9),
        ('fig', 'scale',
         'TRANSLATION',
         ['The current rate method',
          'Used when the subsidiary operates in its own currency',
          'Assets and liabilities at the closing rate',
          'The adjustment goes to other comprehensive income'],
         'REMEASUREMENT',
         ['The temporal method',
          'Used when the parent’s currency is functional',
          'Monetary items at closing, non-monetary at historical',
          'The difference goes straight to profit']),

        ('part', 'Part 5 · What a reader should notice',
         'the ratios, and the disposal'),

        ('task', 'Exercise 3E',
         'Say what a rate movement does to the ratios and what happens on '
         'disposal.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 3D, and Volume 9 Handout 2 on reclassification.'],
         ['The local currency weakened from %s to %s. Every asset and '
          'liability shrank in dollars and profit was translated at a rate '
          'between the two.' % (_r(FX.historical), _r(FX.closing)),
          'A ratio of two translated figures may be unaffected if both were '
          'translated at the same rate.',
          'The last statement is about what happens to the accumulated '
          'adjustment when the subsidiary is eventually sold.']),
        ('sortgrid',
         ['Statement about rate movements', 'TRUE', 'FALSE'],
         ['A weakening local currency reduces the translated total assets',
          'The debt-to-assets ratio of the subsidiary alone is unaffected, '
          'because both were translated at the closing rate',
          'The translated profit margin is unaffected, because revenue and '
          'expenses use the same average rate',
          'The cumulative translation adjustment reduces reported profit',
          'The accumulated adjustment is reclassified into profit when the '
          'subsidiary is sold',
          'A rate movement can change consolidated total assets without any '
          'transaction occurring'],
         ['TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE'],
         'The fourth and the fifth together are the whole of it: the '
         'adjustment never touches profit while the subsidiary is held, and it '
         'all arrives at once when it is sold.'),
        ('fig', 'timeline', 'The adjustment, from arising to recycling',
         [('While held', 'The %s adjustment accumulates in equity and never '
                         'touches profit' % money(FX.cta), EST),
          ('Each year', 'It is recomputed as rates move, and the balance '
                        'changes without any transaction', SLATE),
          ('On disposal', 'The whole accumulated balance is reclassified into '
                          'profit at once', ERR)],
         'This is the reclassification Volume 9 described. A currency movement '
         'that touched nothing for ten years arrives in profit in the year the '
         'subsidiary is sold.'),

        ('watch', 'The cumulative translation adjustment never reaches profit '
                  'while the subsidiary is held, however large it grows. A '
                  'question that offers a translation loss in the income '
                  'statement is describing the temporal method, which applies '
                  'only when the parent’s currency is the functional one.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The functional currency of an entity is:',
         ['The currency its parent reports in',
          'The currency of the primary economic environment in which it '
          'operates',
          'The currency chosen by management',
          'Always the local currency'],
         1, 'Level A',
         'Determined from the facts of how the entity operates. (C) treats it '
         'as a policy choice, which is exactly what the standard’s list of '
         'indicators prevents.'),

        ('mcq', 'Under the current rate method, assets and liabilities are '
                'translated at:',
         ['The historical rate', 'The closing rate', 'The average rate',
          'Monetary at closing and non-monetary at historical'],
         1, 'Level A',
         'What they are worth at the reporting date. (D) is the temporal '
         'method, and distinguishing the two is most of this learning '
         'outcome.'),

        ('mcq', 'Under the current rate method, the translation adjustment is '
                'reported in:',
         ['Profit for the period', 'Other comprehensive income',
          'Retained earnings directly', 'The notes only'],
         1, 'Level B',
         'It accumulates in equity and bypasses profit entirely. (A) is the '
         'temporal method’s treatment, which is why determining the functional '
         'currency comes first.'),

        ('mcq', 'A subsidiary has net assets of %s translated at the closing '
                'rate, against equity of %s translated at historical and '
                'average rates. The cumulative translation adjustment is:'
         % (money(FX.net_assets), money(FX.contributed + FX.income)),
         [money(-FX.cta), money(FX.cta), 'Nil', money(FX.net_assets)],
         1, 'Level B',
         '%s less %s is %s, a debit balance in equity. It is the figure that '
         'makes the translated balance sheet balance and nothing else.'
         % (money(FX.net_assets), money(FX.contributed + FX.income),
            money(FX.cta))),

        ('mcq', 'The temporal method is used when the functional currency is:',
         ['The subsidiary’s local currency',
          'The parent’s reporting currency',
          'A third currency', 'Whichever is more stable'],
         1, 'Level C',
         'Where the parent’s currency is functional the subsidiary is treated '
         'as though it had transacted in that currency all along, so the '
         'difference is a real gain or loss and goes to profit.'),

        ('mcq', 'A local currency weakens during the year. The translated '
                'total assets of the foreign subsidiary:',
         ['Rise', 'Fall', 'Are unchanged',
          'Change only if assets were bought or sold'],
         1, 'Level B',
         'Every asset is translated at a lower closing rate, so the '
         'consolidated total falls without any transaction. (D) is the '
         'intuition that a balance sheet only moves when something happens, '
         'and translation is the exception.'),

        ('mcq', 'When a foreign subsidiary is sold, the accumulated '
                'translation adjustment relating to it is:',
         ['Left in equity permanently',
          'Reclassified into profit',
          'Transferred to retained earnings without passing through profit',
          'Written off against goodwill'],
         1, 'Level C',
         'It is recycled, which is what distinguishes it from the IFRS '
         'revaluation surplus Volume 9 named as the exception. Years of '
         'accumulated movement arrive in profit in one period.'),

        ('tip', 'Determine the functional currency before you translate '
                'anything. It decides the method, the method decides the '
                'rates, and the rates decide whether the difference lands in '
                'equity or in profit. A candidate who starts with the '
                'arithmetic has already guessed the hardest part.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · %s, translated' % CO.sub),
        ('table', _TRANSH, _trans(), PRIN, _TRANSW),
        ('h3', 'Exercise 3D · the two methods'),
        ('table', _RATEH, _rate(), SLATE, _RATEW),
        ('prose', 'The adjustment of %s is a plug and the checker treats it as '
                  'one: it is computed as the net assets at the closing rate '
                  'less the equity at its own rates, and the build asserts '
                  'that the translated balance sheet balances. If it ever '
                  'stopped balancing, the figure would be meaningless.'
                  % money(FX.cta), 'R2'),
        ('prose', 'Every local currency figure here is Volume 10’s. %s of '
                  'assets, %s of net assets and %s of profit were used there '
                  'to compare three consolidation methods, and nothing has '
                  'been added except three exchange rates.'
                  % (_lc(CO.sub_assets), _lc(CO.net_assets_fv),
                     _lc(CO.sub_profit)), 'R2'),
    ],
)
