# -*- coding: utf-8 -*-
"""Volume 6, Handout 2 — Valuing Debt Securities.

Covers the debt half of A.2(k): the valuation of debt securities under each
classification.
"""
from fadata import N, S, Y, PY
from data import money, num

TRD, AFS, HTM, SLATE = '2B6CB0', '6D3F7E', '1F7A6A', '44506B'
RUST, OK = 'B2531F', 'C9762E'

_PORTH = ['Holding', 'Amortised cost', 'Fair value', 'Unrealised gain']
_PORTW = [38, 21, 21, 20]


def _port(blank=False):
    def c(v):
        return '' if blank else v
    out = []
    for name, cost, fv in S.afs:
        out.append([name, money(cost), money(fv), c(money(fv - cost))])
    out.append(['Total portfolio', money(S.afs_cost), money(S.afs_fair_value),
                c(money(S.afs_unrealised))])
    return out


_THREEH = ['', 'If trading', 'If available for sale', 'If held to maturity']
_THREEW = [28, 24, 24, 24]


def _three(blank=False):
    def c(v):
        return '' if blank else v
    g = S.afs_unrealised
    return [
        ['Balance sheet carrying amount', c(money(S.afs_fair_value)),
         c(money(S.afs_fair_value)), c(money(S.afs_cost))],
        ['Effect on net income, before tax', c(money(g)), c(money(0)),
         c(money(0))],
        ['Effect on other comprehensive income, before tax', c(money(0)),
         c(money(g)), c(money(0))],
        ['Effect on total equity, before tax', c(money(g)), c(money(g)),
         c(money(0))],
    ]


HANDOUT = dict(
    n=2,
    title='Valuing Debt Securities',
    subtitle='Three holdings, one portfolio, and a gain of %s that appears in '
             'three different places depending on a word chosen when they were '
             'bought.' % money(S.afs_unrealised),
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage, which '
                 'ties the portfolio back to Volume 1.',
        collocations=['mark a security to fair value',
                      'recognise an unrealised holding gain',
                      'amortise a premium over the remaining life',
                      'present a security net of tax',
                      'reclassify an amount out of equity',
                      'realise a gain on sale'],
        pairs=['unrealised / realised',
               'carrying amount / fair value',
               'premium / discount',
               'recognised / disclosed'],
        nots=['An unrealised gain is not cash and it is not certain. The company '
              'still holds the security and may yet sell it for less.',
              'Amortising a premium is not the same as marking to fair value. One '
              'follows the contract, the other follows the market.'],
    ),

    objectives=[
        'Value a portfolio at fair value and compute the unrealised movement.',
        'Record the adjustment under each of the three classifications.',
        'Say what a premium or a discount is and how it is treated under '
        'held-to-maturity.',
        'Present the movement net of tax and tie it to accumulated other '
        'comprehensive income.',
        'Say what happens when an available-for-sale security is finally sold.',
    ],

    terms=[
        ('fair value adjustment',
         'The entry that brings a security’s carrying amount to its fair '
         'value.', 'تسوية القيمة العادلة',
         'Usually recorded in a valuation allowance alongside the investment, so '
         'that cost and the adjustment remain separately visible.'),
        ('premium',
         'The excess of what was paid for a bond over its face amount.',
         'علاوة الإصدار',
         'It arises when the bond’s coupon exceeds the market rate, and it '
         'is amortised away over the remaining life.'),
        ('discount',
         'The shortfall of what was paid for a bond below its face amount.',
         'خصم الإصدار',
         'The mirror image, and it is amortised up to face value by the maturity '
         'date.'),
        ('valuation allowance',
         'A contra or adjunct account holding the difference between cost and '
         'fair value.', 'حساب تسوية القيمة',
         'It keeps the original cost visible, which matters because the gain has '
         'to be reversed out of equity one day.'),
        ('reclassification adjustment',
         'The entry that moves a gain out of accumulated other comprehensive '
         'income and into net income when the security is sold.',
         'تسوية إعادة التصنيف',
         'Without it the same gain would be reported twice: once as it accrued '
         'and once when it was realised.'),
    ],

    blocks=[
        ('scene', 'Three bonds, and one number you have already met', [
            'Northwind holds three bonds. It paid %s for them and they are worth '
            '%s at the year end.'
            % (money(S.afs_cost), money(S.afs_fair_value)),
            'All three are classified as available for sale, so the whole '
            'portfolio is carried at fair value and the %s of unrealised gain goes '
            'to other comprehensive income.' % money(S.afs_unrealised),
            'That is the %s you first met in Volume 1, where it appeared net of '
            'tax as %s and carried accumulated other comprehensive income from %s '
            'to %s. This handout produces it.'
            % (money(N.afs_gain_pretax), money(N.oci), money(N.aoci_py),
               money(N.aoci)),
        ]),
        ('table', _PORTH, _port(), AFS, _PORTW),

        ('part', 'Part 1 · Valuing the portfolio',
         'and what the adjustment looks like'),

        ('task', 'Exercise 2A',
         'Compute the unrealised movement on each holding and on the portfolio.',
         'Complete the last column of the table above, then read the passage.',
         ['Handout 1, for the three classifications.'],
         ['One subtraction per row. Fair value less amortised cost.',
          'The total column must equal the sum of the three rows above it.',
          'Compare your total with the figure in Volume 1’s statement of '
          'comprehensive income before you go on.']),
        ('fill', 'R2',
         ['Each holding is compared with what it is worth. The portfolio cost %s '
          'and is worth %s, so the unrealised gain is {%s}.'
          % (money(S.afs_cost), money(S.afs_fair_value),
             money(S.afs_unrealised)),
          'The adjustment is normally recorded in a separate {valuation} '
          'allowance alongside the investment account, rather than by altering the '
          'investment account itself. That keeps the original cost visible on the '
          'face of the records.',
          'Keeping cost visible matters for a reason that only appears later. When '
          'the securities are eventually sold, the gain accumulated in equity has '
          'to be taken {out} again and reported in net income, and that cannot be '
          'done unless the two components are still separable.',
          'The other side of the entry depends entirely on the classification, '
          'and that is Part {2}.'],
         {money(S.afs_unrealised): ('%s − %s.' % (money(S.afs_fair_value),
                                                       money(S.afs_cost)), ''),
          'valuation': ('A separate account, so cost stays visible.', ''),
          'out': ('It has to be reversed out of equity on sale.', ''),
          '2': ('The credit side depends on the classification.', '')},
         [money(S.afs_cost), 'investment', '3']),
        ('fig', 'bridge',
         'Portfolio at amortised cost', S.afs_cost,
         [('Fair value adjustment, to other comprehensive income',
           S.afs_unrealised)],
         'Portfolio at fair value', S.afs_fair_value),

        ('part', 'Part 2 · The same portfolio, three ways',
         'where the credit goes'),

        ('task', 'Exercise 2B',
         'Report the same portfolio under all three classifications.',
         'Complete the table. The amounts are the same; only the destinations '
         'differ.',
         ['Exercise 2A'],
         ['The first row has two identical entries and one different one.',
          'Rows two and three are the heart of it, and between them they always '
          'add to the same total.',
          'The last row is the point: two of the three columns have the same '
          'effect on equity by completely different routes.']),
        ('table', _THREEH, _three(blank=True), SLATE, _THREEW),
        ('answers', 12),
        ('journal', [
            ('J1', ('The portfolio marked to fair value, classified as available '
                    'for sale.',
                    'The credit goes to equity, not to income.'),
             [('Valuation Allowance — Securities', 0, '', ''),
              ('Unrealised Gain — Other Comprehensive Income', 1, '', '')]),
            ('J2', ('The same adjustment, had the portfolio been classified as '
                    'trading.',
                    'The same debit, and a credit that reaches net income '
                    'instead.'),
             [('Valuation Allowance — Securities', 0, '', ''),
              ('Unrealised Gain — Net Income', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'One adjustment, three destinations',
         ['Trading', 'Available for sale', 'Held to maturity'],
         ['Debit', 'Credit'],
         [['Valuation allowance %s' % money(S.afs_unrealised),
           'Unrealised gain, in net income'],
          ['Valuation allowance %s' % money(S.afs_unrealised),
           'Unrealised gain, in other comprehensive income'],
          ['No entry at all', 'No entry at all']],
         'The debit is identical in the first two rows. Everything the exam tests '
         'about this topic is in the credit column.'),

        ('part', 'Part 3 · Premium, discount and amortised cost',
         'the held-to-maturity measure'),

        ('prose', 'A held-to-maturity security is carried at amortised cost, and '
                  'that phrase needs explaining because it does not mean cost.',
                  'R2'),
        ('prose', 'A bond paying a coupon above the market rate is worth more than '
                  'its face amount, so a buyer pays a premium. That premium buys '
                  'nothing permanent: at maturity the issuer repays only the face '
                  'amount. So the premium is written off over the remaining life, '
                  'and the carrying amount walks down to face value by the '
                  'maturity date.', 'R2'),

        ('task', 'Exercise 2C',
         'Say what amortised cost is and how a premium or discount is treated.',
         'Read and complete.',
         ['Exercise 2B, and the two paragraphs above.'],
         ['Blank 1 is what a buyer pays above face when the coupon is generous.',
          'Blank 3 is the amount the carrying value walks towards by the maturity '
          'date.',
          'The last blank is the thing amortised cost deliberately ignores.']),
        ('fill', 'R2',
         ['A bond with a coupon above the market rate sells above its face amount, '
          'and the excess paid is a {premium}. A bond with a coupon below the '
          'market rate sells below face, and the shortfall is a discount.',
          'Neither survives to maturity, because the issuer repays the face amount '
          'and nothing else. Both are therefore {amortised} over the remaining '
          'life of the bond, as an adjustment to interest income.',
          'The carrying amount therefore moves every period, and by the maturity '
          'date it has arrived exactly at the bond’s {face} amount, whatever '
          'route it took to get there.',
          'What amortised cost ignores entirely is the {market} price. A bond '
          'bought at par and now trading at 80 is still carried at par under this '
          'measure, because the company will hold it and be repaid in full.'],
         {'premium': ('Paid above face for a generous coupon.', ''),
          'amortised': ('Written off over the remaining life.', ''),
          'face': ('It walks to face value by maturity.', ''),
          'market': ('Deliberately ignored.',
                     'Students mark a held-to-maturity bond to market. The whole '
                     'point of the classification is that the market price does '
                     'not matter.')},
         ['coupon', 'reversed', 'maturity']),
        ('fig', 'timeline', 'A bond bought at a premium, under amortised cost',
         [('Purchase', 'paid above face, because the coupon is generous', HTM),
          ('Each period', 'the premium is amortised against interest income',
           AFS),
          ('Maturity', 'carrying amount has reached face value exactly', TRD)],
         'The market price may wander anywhere in between. Under amortised cost it '
         'is disclosed in the notes and never recognised.'),

        ('part', 'Part 4 · Net of tax, and tying back to Volume 1',
         'where the %s went' % money(N.afs_gain_pretax)),

        ('task', 'Exercise 2D',
         'Present the movement net of tax and tie it to accumulated other '
         'comprehensive income.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 2C', 'Volume 1 Handout 3, for other comprehensive income.'],
         ['The gain is %s before tax. Tax at %d%% is %s.'
          % (money(S.afs_unrealised), 25, money(N.deferred_tax_oci)),
          'Blank 2 is the figure that actually appears in the statement of '
          'comprehensive income.',
          'The last blank is the equity line the amount accumulates in, which you '
          'met in Volume 1 Handout 2.']),
        ('fill', 'R3',
         ['The portfolio gained %s before tax. Items of other comprehensive income '
          'are presented net of the tax that relates to them, and at %d%% that tax '
          'is {%s}.' % (money(S.afs_unrealised), 25,
                        money(N.deferred_tax_oci)),
          'The figure reported in the statement of comprehensive income is '
          'therefore %s less %s, which is {%s} — exactly the amount Volume 1 '
          'showed below net income.'
          % (money(S.afs_unrealised), money(N.deferred_tax_oci),
             money(N.oci)),
          'That net amount is then carried into the statement of changes in equity '
          'as its own row, and accumulates in {accumulated} other comprehensive '
          'income, which rose from %s to %s during the year.'
          % (money(N.aoci_py), money(N.aoci)),
          'The tax itself does not disappear. It is credited to the deferred tax '
          '{liability}, which is why that balance rose by more than the deferred '
          'tax charged in the income statement.'],
         {money(N.deferred_tax_oci): ('%s at %d%%.' % (money(S.afs_unrealised),
                                                       25), ''),
          money(N.oci): ('%s less the tax.' % money(S.afs_unrealised), ''),
          'accumulated': ('Its own equity column.', ''),
          'liability': ('The tax is deferred, not avoided.',
                        'Students report the pre-tax gain in other comprehensive '
                        'income, and the accumulated balance then fails to '
                        'close.')},
         [money(S.afs_fair_value), 'retained', 'asset']),
        ('fig', 'ranked', 'The %s, from portfolio to equity'
                          % money(S.afs_unrealised),
         [('Unrealised gain, before tax', S.afs_unrealised,
           money(S.afs_unrealised), AFS),
          ('Less the related deferred tax', N.deferred_tax_oci,
           money(-N.deferred_tax_oci), RUST),
          ('Reported in other comprehensive income', N.oci, money(N.oci), TRD),
          ('Accumulated other comprehensive income, at the year end', N.aoci,
           money(N.aoci), SLATE)],
         'The third bar is what Volume 1 reported. The fourth is where it ended '
         'up on the balance sheet.'),

        ('part', 'Part 5 · When the securities are finally sold',
         'the reclassification adjustment'),

        ('task', 'Exercise 2E',
         'Say what happens to an accumulated gain when the security is sold.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2D'],
         ['The gain has already been reported once, in other comprehensive income. '
          'Reporting it again without an adjustment would count it twice.',
          'The entry that prevents that has a name.',
          'Two of these statements describe double counting as though it were '
          'correct.']),
        ('sortgrid',
         ['Statement about selling an available-for-sale security', 'TRUE',
          'FALSE'],
         ['The accumulated gain is transferred out of equity and into net income',
          'The gain is reported in net income and left in equity as well',
          'The entry that moves it is a reclassification adjustment',
          'Total equity changes when the gain is reclassified',
          'Without the adjustment the same gain would be reported twice',
          'The gain is reported in other comprehensive income again on sale'],
         ['TRUE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'Total equity does not move on reclassification. The amount simply '
         'travels from one equity column to another by way of net income.'),
        ('fig', 'fork', 'What happens to the gain, and when',
         [('While the security is held',
           'the gain accrues in other comprehensive income', AFS),
          ('When the security is sold',
           'the accumulated gain is reclassified into net income', TRD),
          ('What happens to total equity on reclassification?',
           'Nothing — it moves between columns, not in or out', SLATE)]),

        ('watch', 'A reclassification adjustment changes where a gain is reported '
                  'and not how much equity there is. If a question asks for the '
                  'effect on total equity of reclassifying a gain, the answer is '
                  'nil.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A portfolio of available-for-sale debt securities cost %s and is '
                'worth %s at the year end. The entry records:'
                % (money(S.afs_cost), money(S.afs_fair_value)),
         ['A gain of %s in net income' % money(S.afs_unrealised),
          'A gain of %s in other comprehensive income'
          % money(S.afs_unrealised),
          'No entry, because the securities have not been sold',
          'A gain of %s in retained earnings' % money(S.afs_unrealised)],
         1, 'Level B',
         'Available-for-sale securities are carried at fair value with unrealised '
         'movements in other comprehensive income. (A) is the trading treatment. '
         '(C) would leave the balance sheet at cost, which the classification does '
         'not permit.'),

        ('mcq', 'A held-to-maturity bond bought at par is now trading at 80% of '
                'face value. The carrying amount is:',
         ['80% of face value', 'Face value, as amortised cost',
          'The lower of the two', 'Face value less an impairment of 20%'],
         1, 'Level B',
         'Amortised cost ignores the market price entirely, because the company '
         'will hold the bond and be repaid in full. The fair value is disclosed in '
         'the notes. A credit loss would be a different question with different '
         'facts.'),

        ('mcq', 'A bond is purchased at a premium and classified as held to '
                'maturity. Over the remaining life, the carrying amount will:',
         ['Rise to the market price', 'Fall to the face amount',
          'Stay at the purchase price', 'Rise to the purchase price plus accrued '
          'interest'],
         1, 'Level C',
         'The premium is amortised away, so the carrying amount walks down to face '
         'value by the maturity date — which is all the issuer will repay. '
         '(A) confuses amortised cost with fair value.'),

        ('mcq', 'An unrealised gain of %s on available-for-sale securities is '
                'subject to tax at 25%%. The amount reported in other '
                'comprehensive income is:' % money(S.afs_unrealised),
         [money(S.afs_unrealised), money(N.oci), money(N.deferred_tax_oci),
          money(0)],
         1, 'Level B',
         'Items of other comprehensive income are presented net of tax: %s less %s '
         'is %s. (A) is the pre-tax figure, and reporting it breaks the '
         'roll-forward of accumulated other comprehensive income.'
         % (money(S.afs_unrealised), money(N.deferred_tax_oci),
            money(N.oci))),

        ('mcq', 'When an available-for-sale security is sold, the gain previously '
                'accumulated in equity is:',
         ['Left in equity permanently',
          'Reclassified out of accumulated other comprehensive income and into '
          'net income',
          'Reported in other comprehensive income a second time',
          'Credited directly to retained earnings'],
         1, 'Level B',
         'The reclassification adjustment moves the amount so that it is reported '
         'once in net income and removed from the equity column it accrued in. (A) '
         'and (C) would both leave the same gain counted twice.'),

        ('mcq', 'What is the effect on TOTAL equity of reclassifying an '
                'accumulated gain out of other comprehensive income and into net '
                'income on sale?',
         ['An increase equal to the gain', 'A decrease equal to the gain',
          'No effect', 'An increase equal to the gain net of tax'],
         2, 'Level C',
         'The amount moves between two equity columns by way of net income. Total '
         'equity is unchanged, which is the point of the adjustment — it '
         'corrects where the gain is reported rather than how much there is.'),

        ('mcq', 'A trading security costing %s is worth %s at the year end. The '
                'effect on net income is:'
                % (money(S.trading_cost), money(S.trading_fv)),
         ['Nil, because the security has not been sold',
          'An increase of %s' % money(S.trading_gain),
          'An increase of %s in other comprehensive income'
          % money(S.trading_gain),
          'A decrease of %s' % money(S.trading_gain)],
         1, 'Level A',
         'Trading securities are marked to fair value through net income, so the '
         'whole unrealised movement reaches profit. (A) is the held-to-maturity '
         'treatment and (C) the available-for-sale one — all three '
         'classifications appear among the options, which is how this question is '
         'usually built.'),

        ('tip', 'Three questions, in order, for any securities problem: what is the '
                'classification, what is the carrying amount, and where does the '
                'movement go? The third one is where the marks are, and the first '
                'one decides it.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the completed comparison'),
        ('table', _THREEH, _three(), SLATE, _THREEW),
        ('h3', 'Exercise 2A · the portfolio'),
        ('table', _PORTH, _port(), AFS, _PORTW),
        ('bullets', [
            'The portfolio cost %s and is worth %s, an unrealised gain of %s.'
            % (money(S.afs_cost), money(S.afs_fair_value),
               money(S.afs_unrealised)),
            'Net of tax at 25%%, %s is reported in other comprehensive income.'
            % money(N.oci),
            'That is the amount Volume 1 carried into accumulated other '
            'comprehensive income, taking it from %s to %s.'
            % (money(N.aoci_py), money(N.aoci)),
        ]),
    ],
)
