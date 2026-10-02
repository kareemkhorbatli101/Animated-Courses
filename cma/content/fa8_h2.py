# -*- coding: utf-8 -*-
"""Volume 8, Handout 2 — Buying Your Own Shares Back.

Covers A.2(v): treasury stock under the cost method, the share counts it
moves, and why no gain or loss ever arises on it.
"""
from fadata import N, EQ, Y
from data import money, num

CAP, EARN, TREAS, SLATE = '2F6F8F', '1F7A6A', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _k(n):
    return num(n / 1000, 0) + ',000'


_CNTH = ['Share count', 'Before the buy-back', 'After the buy-back',
         'After both reissues']
_CNTW = [31, 23, 23, 23]

_out1 = EQ.shares - EQ.buy_back_shares
_out2 = _out1 + EQ.reissue_a_shares + EQ.reissue_b_shares
_held = EQ.buy_back_shares - EQ.reissue_a_shares - EQ.reissue_b_shares
_held_cost = _held * EQ.buy_back_price


def _counts(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Authorised', '500,000', c('500,000'), c('500,000')],
        ['Issued', _k(EQ.shares), c(_k(EQ.shares)), c(_k(EQ.shares))],
        ['Held in treasury', 'Nil', c(_k(EQ.buy_back_shares)),
         c(_k(_held))],
        ['Outstanding', _k(EQ.shares), c(_k(_out1)), c(_k(_out2))],
    ]


_EQH = ['Equity after each step', 'Amount', 'What changed']
_EQW = [38, 24, 38]


def _equity(blank=False):
    def c(v):
        return '' if blank else v
    e0 = N.equity
    e1 = e0 - EQ.treasury_cost
    e2 = e1 + EQ.reissue_a_proceeds
    e3 = e2 + EQ.reissue_b_proceeds
    return [
        ['Total equity before the buy-back', money(e0),
         c('The %s Volume 1 reported' % money(e0))],
        ['Less %s shares bought back at $%d'
         % (_k(EQ.buy_back_shares), EQ.buy_back_price), c(money(e1)),
         c('Equity falls by the %s paid' % money(EQ.treasury_cost))],
        ['Plus %s reissued at $%d' % (_k(EQ.reissue_a_shares),
                                      EQ.reissue_a_price), c(money(e2)),
         c('Equity rises by the %s received'
           % money(EQ.reissue_a_proceeds))],
        ['Plus %s reissued at $%d' % (_k(EQ.reissue_b_shares),
                                      EQ.reissue_b_price), c(money(e3)),
         c('Equity rises by the %s received'
           % money(EQ.reissue_b_proceeds))],
    ]


HANDOUT = dict(
    n=2,
    title='Buying Your Own Shares Back',
    subtitle='Northwind buys %s of its own shares for %s and sells %s of them '
             'again, one lot at a profit and one at a loss. Neither reaches '
             'the income statement.'
             % (_k(EQ.buy_back_shares), money(EQ.treasury_cost),
                _k(EQ.reissue_a_shares + EQ.reissue_b_shares)),
    register='R2',

    lang=dict(
        register='R2 throughout, with the share-count vocabulary drilled at R2 '
                 'because the exam uses it without explanation.',
        collocations=['repurchase shares on the market',
                      'hold shares in treasury',
                      'reissue treasury shares',
                      'charge a deficiency to retained earnings',
                      'reduce the shares outstanding',
                      'retire shares permanently'],
        pairs=['issued / outstanding',
               'authorised / issued',
               'treasury stock / retired stock',
               'above cost / below cost'],
        nots=['Treasury stock is not an asset. A company cannot own part of '
              'itself, so the cost is deducted from equity.',
              'A reissue above cost is not a gain. No transaction with a '
              'shareholder can produce income.'],
    ),

    objectives=[
        'Say why treasury stock is deducted from equity rather than held as an '
        'asset.',
        'Record a repurchase under the cost method.',
        'Record a reissue above cost and a reissue below cost.',
        'Distinguish authorised, issued, outstanding and treasury shares.',
        'Say what a buy-back does and does not do to total equity.',
    ],

    terms=[
        ('treasury stock',
         'A company’s own issued shares that it has reacquired and not '
         'cancelled.', 'أسهم الخزينة',
         'Still issued, no longer outstanding. That distinction decides every '
         'per-share figure.'),
        ('cost method',
         'Recording treasury stock at what was paid for it, as a single '
         'deduction from total equity.', 'طريقة التكلفة',
         'The method the exam assumes unless it says otherwise. The par value '
         'method exists and is rarely tested.'),
        ('outstanding shares',
         'Issued shares that are held by shareholders outside the company.',
         'الأسهم القائمة',
         'The count that matters for dividends, voting and every per-share '
         'measure. Treasury shares are excluded from it.'),
        ('authorised shares',
         'The maximum number of shares the charter permits the company to '
         'issue.', 'الأسهم المصرح بها',
         'A ceiling, and usually far above the shares actually issued. It is '
         'disclosed and never accounted for.'),
        ('retire',
         'To cancel reacquired shares, so that they cease to be issued at all.',
         'إلغاء الأسهم',
         'Different from holding shares in treasury: retired shares cannot be '
         'reissued, and the issued count falls.'),
    ],

    blocks=[
        ('scene', 'A company buys its own shares', [
            'In %s Northwind bought %s of its own shares on the market at $%d '
            'each, paying %s.' % (Y, _k(EQ.buy_back_shares),
                                  EQ.buy_back_price,
                                  money(EQ.treasury_cost)),
            'Later in the year it sold %s of them at $%d and another %s at $%d.'
            % (_k(EQ.reissue_a_shares), EQ.reissue_a_price,
               _k(EQ.reissue_b_shares), EQ.reissue_b_price),
            'One lot went out above what the company paid and one below. '
            'Neither difference is a gain or a loss, and neither appears in '
            'profit.',
            'This handout records all three transactions and tracks what each '
            'one does to the share counts.',
        ]),
        ('fig', 'workplace', 'The buy-back, as the board saw it',
         [('Rana', 'Controller — records the repurchase', 'w', SLATE),
          ('Samir', 'Chief executive — thinks the shares are cheap', 'm',
           TREAS),
          ('Nour', 'Treasurer — finds the %s' % money(EQ.treasury_cost), 'w',
           CAP)],
         [('money', '%s paid out' % money(EQ.treasury_cost)),
          ('doc', '%s shares bought' % _k(EQ.buy_back_shares)),
          ('bank', 'Market price $%d' % EQ.buy_back_price),
          ('shop', 'Par value $%d' % EQ.par)],
         'The board believes the shares are worth more than $%d. Whether it is '
         'right is a business question; the accounting is the same either way.'
         % EQ.buy_back_price),

        ('part', 'Part 1 · Why it is not an asset',
         'a company cannot own itself'),

        ('task', 'Exercise 2A',
         'Say why treasury stock is deducted from equity and not held as an '
         'asset.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 2, for the definition of an asset.',
          'Handout 1, for the two sources of equity.'],
         ['Ask what future benefit the company gets from holding its own '
          'shares.',
          'A share entitles its holder to a share of the company. Think about '
          'what that means when the holder is the company.',
          'The last blank is the direction the cost moves total equity.']),
        ('fill', 'R2',
         ['A share is a claim on the company. If the company holds the share, '
          'the claim is against {itself}, and a claim a company holds against '
          'itself is worth nothing to it.',
          'So the %s paid is not an asset. What has actually happened is that '
          'the company has returned %s of capital to the shareholders who sold, '
          'exactly as a {dividend} returns capital, and the shares are simply '
          'no longer in outside hands.'
          % (money(EQ.treasury_cost), money(EQ.treasury_cost)),
          'The cost is therefore recorded in a treasury stock account and '
          '{deducted} from total equity. It is shown as the last line of the '
          'equity section, after retained earnings.',
          'Total equity falls by the full %s paid, and nothing is charged to '
          'any {expense} account, because a transaction with shareholders '
          'cannot produce a cost of doing business.'
          % money(EQ.treasury_cost)],
         {'itself': ('A claim against yourself is not a resource.', ''),
          'dividend': ('Cash out to shareholders, in both cases.', ''),
          'deducted': ('A negative item inside equity.',
                       'Students put treasury stock among the investments. It '
                       'is a contra-equity account and never an asset.'),
          'expense': ('No shareholder transaction reaches profit.', '')},
         ['others', 'asset', 'revenue']),
        ('fig', 'buckets', 'Where the %s went' % money(EQ.treasury_cost),
         [('WHAT IT IS NOT', RUST,
           ['An investment in shares',
            'An asset of any kind',
            'An expense of the period']),
          ('WHAT IT IS', TREAS,
           ['A return of capital to the sellers',
            'A deduction from total equity',
            'The last line of the equity section'])],
         'The test is the definition of an asset: a resource controlled, from '
         'which benefits are expected. A claim against yourself fails it.'),

        ('part', 'Part 2 · Recording the three transactions',
         'the cost method'),

        ('prose', 'Under the cost method the treasury account carries what was '
                  'paid. A reissue above cost credits a paid-in capital account '
                  'for the excess; a reissue below cost charges the deficiency '
                  'against that same account, and against retained earnings '
                  'only when it runs out.', 'R2'),

        ('task', 'Exercise 2B',
         'Record the repurchase and both reissues under the cost method.',
         'Read and complete, then record the three entries underneath.',
         ['Exercise 2A, and the paragraph above.'],
         ['The treasury account is debited with the %s paid and credited with '
          'the cost of the shares that go back out, at $%d each.'
          % (money(EQ.treasury_cost), EQ.buy_back_price),
          'The first reissue brings in $%d for shares that cost $%d, so there '
          'is %s to account for.' % (EQ.reissue_a_price, EQ.buy_back_price,
                                     money(EQ.reissue_a_apic)),
          'The second brings in $%d for shares that cost $%d, which leaves %s '
          'short. There is %s of paid-in capital from the first reissue to '
          'absorb it.' % (EQ.reissue_b_price, EQ.buy_back_price,
                          money(EQ.reissue_b_deficit),
                          money(EQ.reissue_a_apic))]),
        ('fill', 'R2',
         ['The %s shares bought at $%d are carried at their {cost} of %s. The '
          'treasury account is a single figure, and the market price after the '
          'purchase never changes it.'
          % (_k(EQ.buy_back_shares), EQ.buy_back_price,
             money(EQ.treasury_cost)),
          'The first reissue sells %s shares at $%d. The company receives %s '
          'and removes %s of cost from the treasury account. The %s difference '
          'is credited to paid-in capital from treasury stock, because it is '
          'not a {gain}.'
          % (_k(EQ.reissue_a_shares), EQ.reissue_a_price,
             money(EQ.reissue_a_proceeds),
             money(EQ.reissue_a_shares * EQ.buy_back_price),
             money(EQ.reissue_a_apic)),
          'The second reissue sells %s shares at $%d, which is $%d below cost. '
          'The %s shortfall is charged first against the {paid-in} capital the '
          'first reissue created.'
          % (_k(EQ.reissue_b_shares), EQ.reissue_b_price,
             EQ.buy_back_price - EQ.reissue_b_price,
             money(EQ.reissue_b_deficit)),
          'Here %s was available and only %s is needed, so %s remains and '
          'nothing touches retained earnings. Had the account been empty, the '
          'rest would have been charged to retained {earnings}.'
          % (money(EQ.reissue_a_apic), money(EQ.reissue_b_deficit),
             money(EQ.reissue_a_apic - EQ.reissue_b_deficit))],
         {'cost': ('What was paid, and it does not move afterwards.', ''),
          'gain': ('Never, on the company’s own shares.',
                   'Students report $%d a share of profit on the first '
                   'reissue. There is no such thing.'
                   % (EQ.reissue_a_price - EQ.buy_back_price)),
          'paid-in': ('The account the first reissue filled.', ''),
          'earnings': ('The last resort, and only when the other is '
                       'exhausted.', '')},
         ['market', 'loss', 'income']),
        ('journal', [
            ('J1', ('%s shares repurchased on the market at $%d each.'
                    % (_k(EQ.buy_back_shares), EQ.buy_back_price),
                    'A deduction from equity, not an investment.'),
             [('Treasury Stock', 0, '', ''),
              ('Cash', 1, '', '')]),
            ('J2', ('%s treasury shares reissued at $%d, against a cost of '
                    '$%d.' % (_k(EQ.reissue_a_shares), EQ.reissue_a_price,
                              EQ.buy_back_price),
                    'Three lines, and the third is not a gain.'),
             [('Cash', 0, '', ''),
              ('Treasury Stock', 1, '', ''),
              ('Paid-In Capital from Treasury Stock', 1, '', '')]),
            ('J3', ('%s treasury shares reissued at $%d, below the $%d cost.'
                    % (_k(EQ.reissue_b_shares), EQ.reissue_b_price,
                       EQ.buy_back_price),
                    'The shortfall goes against paid-in capital, not against '
                    'profit.'),
             [('Cash', 0, '', ''),
              ('Paid-In Capital from Treasury Stock', 0, '', ''),
              ('Treasury Stock', 1, '', '')]),
        ]),
        ('fig', 'taccounts',
         [('Treasury Stock',
           [('J1', money(EQ.treasury_cost))],
           [('J2', money(EQ.reissue_a_shares * EQ.buy_back_price)),
            ('J3', money(EQ.reissue_b_shares * EQ.buy_back_price)),
            ('c/d', money(_held_cost))],
           '#' + TREAS),
          ('Paid-In Capital from Treasury Stock',
           [('J3', money(EQ.reissue_b_deficit)),
            ('c/d', money(EQ.reissue_a_apic - EQ.reissue_b_deficit))],
           [('J2', money(EQ.reissue_a_apic))],
           '#' + CAP)],
         'The treasury account is a debit balance of %s, which is %s shares '
         'still held at $%d. The paid-in capital account absorbed the shortfall '
         'and kept %s.'
         % (money(_held_cost), _k(_held), EQ.buy_back_price,
            money(EQ.reissue_a_apic - EQ.reissue_b_deficit)),
         2,
         [('J1', 'The repurchase of %s shares' % _k(EQ.buy_back_shares)),
          ('J2', 'The reissue above cost, at $%d' % EQ.reissue_a_price),
          ('J3', 'The reissue below cost, at $%d' % EQ.reissue_b_price),
          ('c/d', 'Balance carried down at 31 December %s' % Y)]),

        ('part', 'Part 3 · Four share counts', 'and which one matters'),

        ('task', 'Exercise 2C',
         'Track the four share counts through the buy-back and the reissues.',
         'Complete the grid. Two rows never change.',
         ['Exercise 2B, and Handout 1 Exercise 1D for the shares issued.'],
         ['The authorised shares and the issued shares are both unaffected by '
          'a buy-back: the shares exist and were issued, whoever holds them '
          'now.',
          'Treasury rises by %s and then falls by the %s reissued.'
          % (_k(EQ.buy_back_shares),
             _k(EQ.reissue_a_shares + EQ.reissue_b_shares)),
          'The outstanding shares are the issued shares less the treasury '
          'shares, and that is the only one of the four counts a per-share '
          'figure uses.']),
        ('table', _CNTH, _counts(blank=True), TREAS, _CNTW),
        ('answers', 6),
        ('fig', 'matrix', 'What each count tells you',
         ['Authorised %s' % '500,000',
          'Issued %s' % _k(EQ.shares),
          'Treasury %s' % _k(_held),
          'Outstanding %s' % _k(_out2)],
         ['What it means', 'Does a buy-back change it?'],
         [['The charter’s ceiling on share issues', 'No'],
          ['Shares ever sold to shareholders', 'No'],
          ['Issued shares the company has reacquired', 'Yes, it rises'],
          ['Shares held outside the company', 'Yes, it falls']],
         'Dividends, votes and every per-share measure use the last row. A '
         'question that gives you issued shares and expects outstanding is the '
         'commonest trap on this topic.'),

        ('part', 'Part 4 · What it does to the totals',
         'equity, and the figures built on it'),

        ('task', 'Exercise 2D',
         'Say what each step does to total shareholders’ equity.',
         'Complete the grid. The amounts are cumulative.',
         ['Exercise 2B, and Handout 1 Exercise 1B for the opening equity.'],
         ['Equity before any of this is the %s Volume 1 reported.'
          % money(N.equity),
          'A buy-back takes cash out, so equity falls by exactly what was '
          'paid.',
          'A reissue brings cash in, so equity rises by exactly what was '
          'received, whatever the shares originally cost.']),
        ('table', _EQH, _equity(blank=True), CAP, _EQW),
        ('answers', 6),
        ('fig', 'bridge',
         'Total equity before the buy-back', N.equity,
         [('Repurchase of %s shares' % _k(EQ.buy_back_shares),
           -EQ.treasury_cost),
          ('Reissue at $%d' % EQ.reissue_a_price, EQ.reissue_a_proceeds),
          ('Reissue at $%d' % EQ.reissue_b_price, EQ.reissue_b_proceeds)],
         'Total equity after all three',
         N.equity - EQ.treasury_cost + EQ.reissue_a_proceeds
         + EQ.reissue_b_proceeds),

        ('watch', 'A buy-back reduces equity and reduces the shares '
                  'outstanding, so it raises earnings per share and raises '
                  'return on equity without the company having earned anything '
                  'more. A question that asks what a buy-back does to a ratio '
                  'is asking you to notice that the denominator moved.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Treasury stock is reported in the financial statements as:',
         ['An investment, at fair value',
          'A deduction from total shareholders’ equity, at cost',
          'An intangible asset',
          'A reduction of common stock at par'],
         1, 'Level A',
         'At cost, deducted from equity. (A) is the classification students '
         'reach for by analogy with other shareholdings, and it fails because '
         'the company cannot hold a claim against itself.'),

        ('mcq', 'A company reacquires 10,000 of its own shares at $9. The '
                'effect on total shareholders’ equity is:',
         ['No effect, because one equity account replaces another',
          'A decrease of $90,000',
          'A decrease of $10,000, the par value',
          'An increase of $90,000'],
         1, 'Level A',
         'Cash of $90,000 leaves the company, so equity falls by $90,000. (A) '
         'confuses a transfer inside equity with a return of capital out of '
         'it.'),

        ('mcq', 'Treasury shares costing $9 each are reissued at $12. The $3 a '
                'share difference is:',
         ['A gain in the income statement',
          'A credit to paid-in capital from treasury stock',
          'A credit to retained earnings',
          'Other comprehensive income'],
         1, 'Level B',
         'No transaction in a company’s own shares produces income, so the '
         'excess goes to paid-in capital. (A) is the error the whole topic '
         'exists to prevent.'),

        ('mcq', 'Treasury shares costing $9 each are reissued at $7 when the '
                'paid-in capital from treasury stock account is nil. The $2 a '
                'share shortfall is charged to:',
         ['The income statement as a loss',
          'Retained earnings',
          'Common stock',
          'Additional paid-in capital from the original share issue'],
         1, 'Level B',
         'With no treasury paid-in capital to absorb it, the shortfall reduces '
         'retained earnings. (A) is wrong for the same reason a reissue above '
         'cost is not a gain, and (C) would reduce legal capital.'),

        ('mcq', 'A company has %s shares issued and holds %s in treasury. The '
                'number of shares used to compute earnings per share is:'
         % (_k(EQ.shares), _k(_held)),
         [_k(EQ.shares), _k(_out2), '500,000', _k(EQ.buy_back_shares)],
         1, 'Level B',
         'Per-share figures use shares outstanding, which is issued less '
         'treasury: %s. (A) is the trap, and it overstates the denominator by '
         'every share the company has bought back.' % _k(_out2)),

        ('mcq', 'Northwind buys back %s shares for %s and immediately reissues '
                '%s of them at $%d. The net effect on total equity of the two '
                'transactions together is:'
         % (_k(EQ.buy_back_shares), money(EQ.treasury_cost),
            _k(EQ.reissue_a_shares), EQ.reissue_a_price),
         ['A decrease of %s' % money(EQ.treasury_cost),
          'A decrease of %s' % money(EQ.treasury_cost
                                     - EQ.reissue_a_proceeds),
          'An increase of %s' % money(EQ.reissue_a_apic),
          'No net effect'],
         1, 'Level C',
         '%s out and %s back in is a net reduction of %s. (C) reports the '
         'paid-in capital credit as though it were the whole effect, which '
         'ignores the cash that left in the first place.'
         % (money(EQ.treasury_cost), money(EQ.reissue_a_proceeds),
            money(EQ.treasury_cost - EQ.reissue_a_proceeds))),

        ('mcq', 'A company retires reacquired shares rather than holding them '
                'in treasury. Compared with holding them, retiring them:',
         ['Has a larger effect on total equity',
          'Reduces the shares issued as well as the shares outstanding',
          'Produces a gain or loss in profit',
          'Has no effect on any share count'],
         1, 'Level C',
         'Retirement cancels the shares, so the issued count falls too and they '
         'can never be reissued. (A) is wrong: the cash paid is the same, so '
         'the effect on total equity is identical.'),

        ('tip', 'Write the cost per share at the top of any treasury question '
                'and compare every later price with it. The difference is never '
                'income: above cost it is a credit to paid-in capital, below '
                'cost it is a charge against that same account and then against '
                'retained earnings.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2C · the completed share counts'),
        ('table', _CNTH, _counts(), TREAS, _CNTW),
        ('h3', 'Exercise 2D · the effect on total equity'),
        ('table', _EQH, _equity(), CAP, _EQW),
        ('h3', 'Exercise 2B · the three entries, completed'),
        ('journal', [
            ('J1', '%s shares repurchased at $%d.'
             % (_k(EQ.buy_back_shares), EQ.buy_back_price),
             [('Treasury Stock', 0, money(EQ.treasury_cost), ''),
              ('Cash', 1, '', money(EQ.treasury_cost))]),
            ('J2', '%s reissued at $%d, above the $%d cost.'
             % (_k(EQ.reissue_a_shares), EQ.reissue_a_price,
                EQ.buy_back_price),
             [('Cash', 0, money(EQ.reissue_a_proceeds), ''),
              ('Treasury Stock', 1, '',
               money(EQ.reissue_a_shares * EQ.buy_back_price)),
              ('Paid-In Capital from Treasury Stock', 1, '',
               money(EQ.reissue_a_apic))]),
            ('J3', '%s reissued at $%d, below the $%d cost.'
             % (_k(EQ.reissue_b_shares), EQ.reissue_b_price,
                EQ.buy_back_price),
             [('Cash', 0, money(EQ.reissue_b_proceeds), ''),
              ('Paid-In Capital from Treasury Stock', 0,
               money(EQ.reissue_b_deficit), ''),
              ('Treasury Stock', 1, '',
               money(EQ.reissue_b_shares * EQ.buy_back_price))]),
        ]),
        ('prose', 'After all three entries Northwind still holds %s shares in '
                  'treasury at a cost of %s, and %s remains in paid-in capital '
                  'from treasury stock. Retained earnings was never touched, '
                  'because the %s shortfall on the second reissue was smaller '
                  'than the %s the first reissue had created.'
                  % (_k(_held), money(_held_cost),
                     money(EQ.reissue_a_apic - EQ.reissue_b_deficit),
                     money(EQ.reissue_b_deficit),
                     money(EQ.reissue_a_apic)), 'R2'),
    ],
)
