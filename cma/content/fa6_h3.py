# -*- coding: utf-8 -*-
"""Volume 6, Handout 3 — Valuing Equity Securities.

Covers the equity half of A.2(k): the valuation of equity securities,
including the equity method where the holding confers significant influence.
"""
from fadata import N, S, Y, PY
from data import money, num

TRD, AFS, HTM, SLATE = '2B6CB0', '6D3F7E', '1F7A6A', '44506B'
RUST, OK = 'B2531F', 'C9762E'

_LVLH = ['Holding', 'Usual threshold', 'Method', 'What reaches income']
_LVLW = [22, 20, 26, 32]


def _lvl(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['No significant influence', c('Below 20%'),
         c('Fair value through net income'),
         c('Dividends received, and every fair value movement')],
        ['Significant influence', c('20% to 50%'), c('The equity method'),
         c('A share of the investee’s profit')],
        ['Control', c('Above 50%'), c('Consolidation'),
         c('Every line of the investee, with a non-controlling interest')],
    ]


_EQH = ['Equity method roll-forward', 'Amount']
_EQW = [66, 34]


def _eq(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Cost of the %s%% holding in %s'
         % (int(S.assoc_stake * 100), S.assoc_name), money(S.assoc_cost)],
        ['Add the share of %s’s profit for the year' % S.assoc_name,
         c(money(S.assoc_share_income))],
        ['Less the share of dividends received', c(money(-S.assoc_share_dividends))],
        ['Carrying amount at the year end', c(money(S.assoc_carrying))],
    ]


HANDOUT = dict(
    n=3,
    title='Valuing Equity Securities',
    subtitle='How much of a company you own decides how you account for it, and '
             'the three answers have almost nothing in common.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage, which '
                 'closes both the volume and Section A’s asset side.',
        collocations=['exercise significant influence over an investee',
                      'account for an investment by the equity method',
                      'pick up a share of the investee’s profit',
                      'treat a dividend as a return of the investment',
                      'consolidate a subsidiary',
                      'rebut the presumption of influence'],
        pairs=['influence / control', 'investor / investee',
               'dividend income / return of investment',
               'equity method / consolidation'],
        nots=['The percentage is a presumption, not a rule. Evidence of actual '
              'influence can override it in either direction.',
              'Under the equity method a dividend is not income. It reduces the '
              'investment, because the profit was already picked up.'],
    ),

    objectives=[
        'Say how the size of a holding decides the accounting method.',
        'Measure a holding that confers no significant influence.',
        'Apply the equity method, including the treatment of dividends.',
        'Say why a dividend reduces the investment rather than producing income.',
        'State when the percentage presumption may be overridden.',
    ],

    terms=[
        ('investee',
         'The company that has been invested in.', 'الشركة المستثمَر فيها',
         'The counterpart to the investor. The exam uses both words and a reader '
         'who confuses them will reverse every entry.'),
        ('control',
         'The power to govern the financial and operating policies of another '
         'entity.', 'السيطرة',
         'Presumed above 50%. It takes the investment out of this volume '
         'altogether and into consolidation.'),
        ('return of investment',
         'A receipt that gives back part of what was invested rather than '
         'representing a profit on it.', 'استرداد لرأس المال',
         'What a dividend is under the equity method, because the profit it came '
         'from was already recognised.'),
    ],

    blocks=[
        ('scene', 'Two holdings, two completely different treatments', [
            'Northwind holds shares in two other companies, and nothing about '
            'their accounting is alike.',
            'The first is a %s%% holding in %s, bought for %s and worth %s at the '
            'year end. Northwind has no influence over it at all.'
            % (int(S.small_stake * 100), S.small_name, money(S.small_cost),
               money(S.small_fv)),
            'The second is a %s%% holding in %s, bought for %s. Northwind has a '
            'seat on its board and takes part in its decisions.'
            % (int(S.assoc_stake * 100), S.assoc_name, money(S.assoc_cost)),
            'The first is carried at fair value and the second is not carried at '
            'fair value at all. The difference is influence, and this handout is '
            'about where the line falls.',
        ]),
        ('fig', 'ranked', 'How much you own decides everything that follows',
         [('Below 20%% — %s, %s%%' % (S.small_name,
                                           int(S.small_stake * 100)),
           20, 'fair value through net income', TRD),
          ('20%% to 50%% — %s, %s%%' % (S.assoc_name,
                                             int(S.assoc_stake * 100)),
           50, 'the equity method', AFS),
          ('Above 50%% — a subsidiary', 100, 'consolidation', HTM)],
         'The bar is the threshold, not an amount. Three bands, three methods, and '
         'almost nothing in common between them.'),

        ('part', 'Part 1 · Three bands',
         'and why influence is the real test'),

        ('task', 'Exercise 3A',
         'Say how the size of a holding decides the method, and what the '
         'percentages really stand for.',
         'Complete the table, then read the passage underneath.',
         ['Handout 1, for why equity securities are outside the debt scheme.'],
         ['Three bands and three methods. Fill the table from the opening scene '
          'first.',
          'The last column is the one that matters: what actually reaches the '
          'investor’s income statement under each.',
          'The percentages are presumptions rather than rules, and the passage '
          'underneath says why.']),
        ('table', _LVLH, _lvl(blank=True), SLATE, _LVLW),
        ('answers', 9),
        ('fill', 'R2',
         ['The percentages are not the test. They are a {presumption} about the '
          'test, which is whether the investor can participate in the '
          'investee’s financial and operating policy decisions.',
          'A holding between 20% and 50% is presumed to confer significant '
          '{influence}, and the presumption can be rebutted. A company holding 25% '
          'of a business whose other 75% is held by one family, which ignores it, '
          'has no influence at all despite the arithmetic.',
          'It works in the other direction too. A company holding 15% with a seat '
          'on the board, a technology-sharing agreement and a say in the budget '
          'may well have significant influence, and would then use the equity '
          'method on a {15%} holding.',
          'Above 50% the presumption is of {control}, which takes the investment '
          'out of this volume entirely and into consolidation — the subject '
          'of Volume 10.'],
         {'presumption': ('A presumption, not a rule.', ''),
          'influence': ('Participation in policy decisions.', ''),
          '15%': ('The presumption works in both directions.',
                  'Students apply the percentages as hard rules. The standards '
                  'describe them as rebuttable presumptions.'),
          'control': ('Above 50%, and a different volume.', '')},
         ['requirement', 'ownership', '60%']),
        ('fig', 'fork', 'The question the percentages are only evidence for',
         [('Can the investor participate in policy decisions?',
           'NO → fair value through net income', TRD),
          ('Yes, but it cannot govern them?',
           'SIGNIFICANT INFLUENCE → the equity method', AFS),
          ('Yes, and it can govern them?',
           'CONTROL → consolidation, in Volume 10', HTM)]),

        ('part', 'Part 2 · The small holding',
         'fair value, and nothing else'),

        ('task', 'Exercise 3B',
         'Measure a holding that confers no significant influence.',
         'Read and complete.',
         ['Exercise 3A'],
         ['The holding cost %s and is worth %s. One subtraction.'
          % (money(S.small_cost), money(S.small_fv)),
          'Blank 2 is where the movement goes, and it is the only destination now '
          'available for an equity security.',
          'The last blank is the treatment that used to be available and no longer '
          'is.']),
        ('fill', 'R2',
         ['The %s%% holding in %s cost %s and is worth %s at the year end, so '
          'there is an unrealised gain of {%s}.'
          % (int(S.small_stake * 100), S.small_name, money(S.small_cost),
             money(S.small_fv), money(S.small_gain)),
          'Under current US GAAP that gain goes to {net} income. There is no '
          'choice in the matter: an equity security without significant influence '
          'is measured at fair value through profit, and that is the only '
          'treatment available.',
          'Dividends received on such a holding are also {income}, recognised when '
          'the right to receive them is established. The investor has no claim on '
          'the investee’s profits beyond what is actually distributed.',
          'Older texts offer an available-for-sale classification for equity '
          'securities as well. That option was removed and is now {wrong}, which '
          'is worth remembering because exam questions are sometimes written from '
          'older material.'],
         {money(S.small_gain): ('%s − %s.' % (money(S.small_fv),
                                                   money(S.small_cost)), ''),
          'net': ('Fair value through profit, and nothing else.', ''),
          'income': ('An actual distribution, so actual income.', ''),
          'wrong': ('Removed from the standards.',
                    'Students classify an equity holding as available for sale, '
                    'which the current standards no longer permit.')},
         ['comprehensive', 'capital', 'optional']),
        ('journal', [
            ('J1', ('The %s holding marked to fair value at the year end.'
                    % S.small_name,
                    'Through net income — the only route available for an '
                    'equity security without influence.'),
             [('Investment in %s' % S.small_name, 0, '', ''),
              ('Unrealised Gain — Net Income', 1, '', '')]),
        ]),

        ('fig', 'bridge',
         'Cost of the %s holding' % S.small_name, S.small_cost,
         [('Unrealised gain, straight to net income', S.small_gain)],
         'Carried at fair value', S.small_fv),

        ('part', 'Part 3 · The equity method',
         'where fair value stops applying'),

        ('prose', 'The %s%% holding in %s is accounted for in a way that has '
                  'nothing to do with its share price. Under the equity method the '
                  'carrying amount starts at cost and then tracks the '
                  'investee’s performance.'
                  % (int(S.assoc_stake * 100), S.assoc_name), 'R2'),
        ('prose', 'The reasoning is that an investor with influence is not a '
                  'passive holder waiting for dividends. It participates in the '
                  'decisions that produce the profit, so it recognises its share '
                  'of that profit as the investee earns it, rather than waiting '
                  'for a distribution it helped to decide on.', 'R2'),

        ('task', 'Exercise 3C',
         'Apply the equity method and roll the investment forward.',
         'Complete the schedule. Two adjustments to the opening cost.',
         ['Exercise 3B, and the two paragraphs above.'],
         ['%s earned %s and paid dividends of %s. Northwind owns %s%% of it.'
          % (S.assoc_name, money(S.assoc_net_income),
             money(S.assoc_dividends), int(S.assoc_stake * 100)),
          'The share of profit increases the investment. Think about which '
          'direction the dividend moves it before you write anything.',
          'The share price of %s appears nowhere in this schedule, and that is the '
          'point.' % S.assoc_name]),
        ('table', _EQH, _eq(blank=True), AFS, _EQW),
        ('answers', 3),
        ('journal', [
            ('J2', ('Northwind’s %s%% share of %s’s profit for the year.'
                    % (int(S.assoc_stake * 100), S.assoc_name),
                    'Recognised as the investee earns it, not when it is paid '
                    'out.'),
             [('Investment in %s' % S.assoc_name, 0, '', ''),
              ('Share of Profit of Associate', 1, '', '')]),
            ('J3', ('Dividends received from %s.' % S.assoc_name,
                    'Not income. The profit was already recognised in J2.'),
             [('Cash', 0, '', ''),
              ('Investment in %s' % S.assoc_name, 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Cost of the holding', S.assoc_cost,
         [('Share of the investee’s profit', S.assoc_share_income),
          ('Share of dividends received', -S.assoc_share_dividends)],
         'Carrying amount at the year end', S.assoc_carrying),

        ('part', 'Part 4 · Why a dividend is not income',
         'the point of the whole method'),

        ('task', 'Exercise 3D',
         'Explain why a dividend reduces the investment under the equity method.',
         'Read and complete.',
         ['Exercise 3C'],
         ['Blank 1 is when the investor recognised its share of the profit.',
          'Blank 3 is what recognising the dividend as income as well would do.',
          'The last blank is what a dividend actually is under this method.']),
        ('fill', 'R2',
         ['Northwind recognised %s as its share of %s’s profit when %s '
          '{earned} it, not when anything was paid out.'
          % (money(S.assoc_share_income), S.assoc_name, S.assoc_name),
          'When the dividend arrives, that profit has already been reported. '
          'Treating the %s received as income as well would recognise the same '
          'profit {twice} — once as the investee earned it and once as it '
          'distributed it.' % money(S.assoc_share_dividends),
          'So the dividend reduces the carrying amount of the investment instead. '
          'It is a {return} of investment rather than a return on it: the investee '
          'has handed back part of the value Northwind already recognised, and the '
          'investment is worth that much less as a result.',
          'This is the single most examined point in the topic, and the reason is '
          'that it reverses the ordinary intuition. For every other kind of '
          'shareholding a dividend is {income}; under the equity method alone it '
          'is not.'],
         {'earned': ('Recognised as it was earned.', ''),
          'twice': ('Double counting, which is what the rule prevents.', ''),
          'return': ('Return OF investment, not ON it.',
                     'Students credit dividend income under the equity method, '
                     'which counts the same profit twice and overstates the '
                     'investment.'),
          'income': ('Income everywhere else, and not here.', '')},
         ['declared', 'nothing', 'expense']),
        ('fig', 'matrix', 'A dividend, under each of the three methods',
         ['No significant influence', 'Significant influence', 'Control'],
         ['The dividend is', 'Because'],
         [['Income', 'The investor has no claim on undistributed profit'],
          ['A reduction of the investment',
           'The profit was already recognised as it was earned'],
          ['Eliminated on consolidation',
           'It is a payment from one part of the group to another']],
         'Three methods, three answers, and the middle one is the one that '
         'reverses the ordinary intuition.'),

        ('part', 'Part 5 · Closing the asset side',
         'what Section A’s first six volumes have built'),

        ('task', 'Exercise 3E',
         'State what the equity method is measuring, and what it is not.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 3A to 3D'],
         ['Blank 1 is what the carrying amount tracks under the equity method.',
          'Blank 3 is what it conspicuously does not track.',
          'The last blank is the test that decided which method applied in the '
          'first place.']),
        ('fill', 'R3',
         ['Under the equity method the carrying amount tracks the investee’s '
          '{performance}. It rises when the investee earns and falls when the '
          'investee distributes, and after one year of this %s stands at %s rather '
          'than the %s Northwind paid.'
          % (S.assoc_name, money(S.assoc_carrying), money(S.assoc_cost)),
          'What it does not track is the investee’s {share} price. If '
          '%s’s market value doubled during the year, nothing in the schedule '
          'would move, because the method is not a fair value measure at all.'
          % S.assoc_name,
          'That is the deeper point of this volume. Northwind’s %s%% holding '
          'is carried at fair value and its %s%% holding is not, although both are '
          'ordinary shares, because the two investments are different kinds of '
          'thing. One is a bet on a price; the other is a {stake} in a business the '
          'investor helps to run.'
          % (int(S.small_stake * 100), int(S.assoc_stake * 100)),
          'The method follows that difference, and the test that decides it is '
          'neither the amount invested nor the number of shares. It is '
          '{influence}.'],
         {'performance': ('The investee’s results, not its price.', ''),
          'share': ('The market price is irrelevant here.', ''),
          'stake': ('A different kind of investment entirely.', ''),
          'influence': ('Influence decides, and the percentages are evidence '
                        'of it.',
                        'Students look for a percentage. The percentage is '
                        'evidence of the thing the standard actually tests.')},
         [money(S.assoc_cost), 'dividend', 'control']),
        ('fig', 'scale',
         'THE %s%% HOLDING' % int(S.small_stake * 100),
         ['Carried at fair value %s' % money(S.small_fv),
          'Price movements reach net income',
          'Dividends are income',
          'A bet on a price'],
         'THE %s%% HOLDING' % int(S.assoc_stake * 100),
         ['Carried at %s, not at fair value' % money(S.assoc_carrying),
          'Price movements are ignored entirely',
          'Dividends reduce the investment',
          'A stake in a business the investor helps run']),

        ('watch', 'Under the equity method the investee’s share price is '
                  'irrelevant. If a question gives you a market value alongside '
                  'the investee’s profit and dividends, it is testing whether '
                  'you know which figures the method actually uses.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An investor holds %s%% of an investee and has a seat on its '
                'board. The investment should be accounted for using:'
                % int(S.assoc_stake * 100),
         ['Fair value through net income', 'The equity method', 'Consolidation',
          'Amortised cost'],
         1, 'Level A',
         'A holding of 20% to 50% is presumed to confer significant influence, and '
         'the board seat confirms it. (C) would require control, which is presumed '
         'above 50%. (D) applies to debt securities only.'),

        ('mcq', 'Under the equity method, a dividend received from the investee '
                'is:',
         ['Recognised as dividend income',
          'Recorded as a reduction of the carrying amount of the investment',
          'Credited to other comprehensive income',
          'Not recorded at all'],
         1, 'Level B',
         'The profit was recognised as the investee earned it, so treating the '
         'dividend as income would count it twice. It is a return of investment. '
         '(A) is correct for every other kind of holding, which is exactly why '
         'this is the most examined point in the topic.'),

        ('mcq', 'An investor buys %s%% of a company for %s. The investee earns %s '
                'and pays dividends of %s. The carrying amount at the year end is:'
                % (int(S.assoc_stake * 100), money(S.assoc_cost),
                   money(S.assoc_net_income), money(S.assoc_dividends)),
         [money(S.assoc_cost), money(S.assoc_carrying),
          money(S.assoc_cost + S.assoc_share_income),
          money(S.assoc_cost + S.assoc_share_dividends)],
         1, 'Level B',
         '%s + %s share of profit − %s share of dividends = %s. (C) omits the '
         'dividend and (A) treats the investment as if it were carried at cost.'
         % (money(S.assoc_cost), money(S.assoc_share_income),
            money(S.assoc_share_dividends), money(S.assoc_carrying))),

        ('mcq', 'An investor holds 15% of an investee but has a board seat, a '
                'technology-sharing agreement and a say in the annual budget. The '
                'appropriate method is:',
         ['Fair value through net income, because the holding is below 20%',
          'The equity method, because significant influence exists in substance',
          'Consolidation', 'Either, at the investor’s choice'],
         1, 'Level C',
         'The percentage is a rebuttable presumption and the evidence here rebuts '
         'it. (A) applies the threshold as though it were a rule, which is the '
         'error the word presumption exists to prevent.'),

        ('mcq', 'Under the equity method, a rise in the market value of the '
                'investee’s shares is:',
         ['Recognised in net income', 'Recognised in other comprehensive income',
          'Not recognised — the method does not use fair value',
          'Added to the carrying amount of the investment'],
         2, 'Level C',
         'The carrying amount tracks the investee’s performance and not its '
         'price. A question that supplies a market value alongside profit and '
         'dividends is testing precisely whether the reader knows which figures '
         'the method uses.'),

        ('mcq', 'Under current US GAAP, an equity security with no significant '
                'influence and a readily determinable fair value is measured at:',
         ['Cost', 'Fair value, with changes in net income',
          'Fair value, with changes in other comprehensive income',
          'The equity method'],
         1, 'Level B',
         'Fair value through net income is the only treatment available. (C) was '
         'permitted under older rules and still appears in older textbooks, which '
         'is why it continues to be offered as a distractor.'),

        ('mcq', 'An investor holds 60% of another company. The investment is:',
         ['Measured at fair value through net income',
          'Accounted for by the equity method',
          'Consolidated, with a non-controlling interest presented',
          'Carried at amortised cost'],
         2, 'Level A',
         'Above 50% the presumption is control, and a controlled entity is '
         'consolidated line by line rather than carried as an investment at all. '
         'Volume 10 of Section A covers consolidation.'),

        ('tip', 'For any equity holding, write one word before you look at the '
                'figures: influence. None, significant, or control. The method, '
                'the treatment of dividends and the relevance of the share price '
                'all follow from that one word.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · the completed table'),
        ('table', _LVLH, _lvl(), SLATE, _LVLW),
        ('h3', 'Exercise 3C · the completed roll-forward'),
        ('table', _EQH, _eq(), AFS, _EQW),
        ('h3', 'Exercises 3B and 3C · the completed entries'),
        ('journal', [
            ('J1', 'The %s holding marked to fair value.' % S.small_name,
             [('Investment in %s' % S.small_name, 0,
               money(S.small_gain), ''),
              ('Unrealised Gain — Net Income', 1, '',
               money(S.small_gain))]),
            ('J2', 'Share of %s’s profit for the year.' % S.assoc_name,
             [('Investment in %s' % S.assoc_name, 0,
               money(S.assoc_share_income), ''),
              ('Share of Profit of Associate', 1, '',
               money(S.assoc_share_income))]),
            ('J3', 'Dividends received from %s.' % S.assoc_name,
             [('Cash', 0, money(S.assoc_share_dividends), ''),
              ('Investment in %s' % S.assoc_name, 1, '',
               money(S.assoc_share_dividends))]),
        ]),
    ],
)
