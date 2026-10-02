# -*- coding: utf-8 -*-
"""Volume 15, Handout 1 — Basic EPS and the Weighted Average Share Count.

Covers CMA Part 2 A.2(u) in part: the basic half. The share movements are
Volume 8's own, and nothing here is invented.
"""
from fadata import N, EP, EQ, DC, Y
from data import money, num

EPS, SHARE, SLATE, DIL = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _k(n):
    return num(n, 0)


def _d(x):
    return '$' + num(x, 2)


_WASOH = ['Movement in %s' % Y, 'Shares', 'Months outstanding', 'Weighted']
_WASOW = [34, 20, 24, 22]


def _waso(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Outstanding at 1 January', _k(EP.opening), '12 of 12',
         c(_k(EP.opening))],
        ['Issued 1 April', _k(EP.issued), '9 of 12',
         c(_k(EP.issued * EP._weight(EP.issued_month)))],
        ['Bought back 1 July', _k(-EP.bought), '6 of 12',
         c(_k(-EP.bought * EP._weight(EP.bought_month)))],
        ['Reissued 1 October', _k(EP.reissued), '3 of 12',
         c(_k(EP.reissued * EP._weight(EP.reissued_month)))],
        ['Weighted average shares outstanding', '', '', c(_k(EP.waso))],
    ]


_PRESH = ['Earnings per share for %s' % Y, 'Amount', 'Per share']
_PRESW = [44, 28, 28]


def _pres(blank=False):
    def c(v):
        return '' if blank else v
    disc = -DC.net
    return [
        ['Income from continuing operations', money(N.net_income),
         c(_d(N.net_income / EP.waso))],
        ['Loss from discontinued operations, net of tax', money(disc),
         c(_d(disc / EP.waso))],
        ['Net income', money(N.net_income + disc),
         c(_d((N.net_income + disc) / EP.waso))],
    ]


HANDOUT = dict(
    n=1,
    title='Basic EPS and the Weighted Average Share Count',
    subtitle='Northwind earned %s on an average of %s shares. The hard part is '
             'the %s, and Volume 8 already has every movement in it.'
             % (money(N.net_income), _k(EP.waso), _k(EP.waso)),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the measure is being established, R2 once the '
                 'weighting is being computed.',
        collocations=['weight shares by the months outstanding',
                      'deduct preferred dividends from net income',
                      'restate a share count retroactively',
                      'present earnings per share on the face of the statement',
                      'report a loss per share',
                      'reduce the denominator by a buy-back'],
        pairs=['basic / diluted',
               'issued / outstanding',
               'weighted / closing',
               'retroactive / from the date of issue'],
        nots=['Earnings per share does not use the closing share count. It '
              'uses the average, weighted by time.',
              'A stock dividend is not weighted from its date. It is applied '
              'to every period presented, as though it had always existed.'],
    ),

    objectives=[
        'Say what earnings per share measures and why it is presented.',
        'Compute a weighted average share count.',
        'Deduct preferred dividends to get income available to common '
        'shareholders.',
        'Say which share changes are weighted and which are applied '
        'retroactively.',
        'Present earnings per share for each component of income.',
    ],

    terms=[
        ('basic earnings per share',
         'Income available to common shareholders divided by the weighted '
         'average shares outstanding.', 'ربحية السهم الأساسية',
         'Two figures, and the denominator is where almost every error '
         'happens.'),
        ('weighted average shares outstanding',
         'The share count averaged across the period, each change weighted by '
         'the part of the year it was in force.',
         'المتوسط المرجح للأسهم القائمة',
         'Not the opening count and not the closing count. A share issued on '
         '1 October counts for a quarter of a share.'),
        ('income available to common shareholders',
         'Net income less the dividends on preferred stock for the period.',
         'الدخل المتاح لحملة الأسهم العادية',
         'The numerator. Preferred dividends are deducted whether or not they '
         'were declared, if the preferred stock is cumulative.'),
        ('retroactive restatement',
         'Applying a share change to every period presented as though it had '
         'always been in force.', 'إعادة العرض بأثر رجعي',
         'Used for stock dividends and splits, which give no new resources to '
         'the company and must not break comparability.'),
        ('simple capital structure',
         'A capital structure with no securities that could convert into '
         'common shares.', 'هيكل رأس مال بسيط',
         'A company with one reports basic earnings per share alone. Handouts '
         '2 and 3 are about the other kind.'),
    ],

    blocks=[
        ('scene', 'One number, built from two', [
            'Earnings per share is the most quoted figure any company '
            'publishes, and it is the only ratio the standards require on the '
            'face of the income statement.',
            'Northwind earned %s in %s. Dividing by its %s closing shares '
            'would give %s, and that figure would be wrong.'
            % (money(N.net_income), Y, _k(EQ.shares),
               _d(N.net_income / EQ.shares)),
            'It would be wrong because %s of those shares were issued on 1 '
            'April and did not earn for the whole year, and because %s were '
            'bought back in July and %s reissued in October.'
            % (_k(EP.issued), _k(EP.bought), _k(EP.reissued)),
            'Every one of those movements is in Volume 8. This handout weights '
            'them.',
        ]),
        ('fig', 'ranked', 'Three share counts, and only one belongs in EPS',
         [('Issued at 31 December', EQ.shares, _k(EQ.shares), SLATE),
          ('Outstanding at 31 December', EP.closing_outstanding,
           _k(EP.closing_outstanding), SHARE),
          ('Weighted average outstanding', EP.waso, _k(EP.waso), EPS)],
         'The first ignores treasury stock, the second ignores time, and only '
         'the third is the denominator. The gap between the second and the '
         'third is %s shares.'
         % _k(EP.closing_outstanding - EP.waso),
         'Northwind at the end of %s' % Y),

        ('part', 'Part 1 · What the measure is for',
         'and why the denominator is weighted'),

        ('task', 'Exercise 1A',
         'Say why earnings per share weights the share count by time.',
         'Read and complete. Write one word in each space.',
         ['Volume 8 Handout 1, for the share issue.',
          'Volume 8 Handout 2, for the buy-back and the reissue.'],
         ['Northwind issued %s shares on 1 April. Ask how much of the year’s '
          'profit those shares were available to earn.' % _k(EP.issued),
          'The money raised by a share issue is only at work from the day it '
          'arrives.',
          'The last blank is what a buy-back does to earnings per share '
          'without the company earning anything more.']),
        ('fill', 'R1',
         ['Earnings per share divides the profit by the shares that earned it. '
          'A share issued on 1 April was only available to earn for nine '
          'months, so counting it as a whole share would {overstate} the '
          'denominator and understate the result.',
          'So each movement is weighted by the fraction of the year it was in '
          'force. %s shares issued on 1 April count as %s, because nine '
          'months is three {quarters} of a year.'
          % (_k(EP.issued), _k(EP.issued * EP._weight(EP.issued_month))),
          'The same reasoning runs backwards for a buy-back. %s shares '
          'repurchased on 1 July are out of issue for six months, so %s is '
          '{deducted} from the average.'
          % (_k(EP.bought),
             _k(EP.bought * EP._weight(EP.bought_month))),
          'Note what that does. A buy-back lowers the denominator and the '
          'company has earned nothing extra, so earnings per share {rises}. '
          'Volume 8 warned about exactly this.'],
         {'overstate': ('More shares than actually earned.', ''),
          'quarters': ('Nine of twelve months.', ''),
          'deducted': ('Out of issue, so out of the average.', ''),
          'rises': ('A smaller denominator over the same profit.',
                    'Students read a rise in earnings per share as better '
                    'performance. Half the time it is a smaller share count.')},
         ['understate', 'added', 'falls']),
        ('fig', 'timeline', 'Northwind’s share count through %s' % Y,
         [('1 January', '%s shares outstanding, for the whole year'
           % _k(EP.opening), SHARE),
          ('1 April', '%s issued, counting for nine months'
           % _k(EP.issued), EPS),
          ('1 July', '%s bought back, out for six months'
           % _k(EP.bought), RUST),
          ('1 October', '%s reissued, back for three months'
           % _k(EP.reissued), OK)],
         'Four events, four weights. The average they produce is %s, which is '
         'neither the opening %s nor the closing %s.'
         % (_k(EP.waso), _k(EP.opening), _k(EP.closing_outstanding))),

        ('part', 'Part 2 · Computing the average',
         'Volume 8’s movements, weighted'),

        ('task', 'Exercise 1B',
         'Compute the weighted average shares outstanding for %s.' % Y,
         'Complete the right-hand column, then total it.',
         ['Exercise 1A.'],
         ['The opening %s shares were outstanding all year, so their weight is '
          '1.' % _k(EP.opening),
          'Each later movement is its share count times the months remaining '
          'over twelve.',
          'The buy-back row is negative. If your total comes out above %s you '
          'have added it instead.' % _k(EP.closing_outstanding)]),
        ('table', _WASOH, _waso(blank=True), SHARE, _WASOW),
        ('answers', 5),
        ('fig', 'formula', 'Basic earnings per share, assembled',
         [('%s' % money(N.net_income),
           'Income available to common shareholders', EPS),
          ('÷', '', None),
          ('%s' % _k(EP.waso), 'Weighted average shares outstanding',
           SHARE),
          ('=', '', None),
          ('%s' % _d(EP.basic), 'Basic earnings per share', SLATE)],
         'Northwind has no preferred stock, so the numerator is simply net '
         'income. Part 3 is about what happens when a company does.'),

        ('part', 'Part 3 · The numerator',
         'when preferred stock is in issue'),

        ('prose', 'Northwind has only common stock, so its numerator is net '
                  'income. A company with preferred stock must first deduct '
                  'the preferred dividends, because that part of the profit '
                  'belongs to someone else before the common shareholders see '
                  'any of it.', 'R2'),

        ('task', 'Exercise 1C',
         'Deduct preferred dividends to find income available to common '
         'shareholders.',
         'Read and complete. Write one word in each space.',
         ['The paragraph above, and Volume 8 Handout 1 on dividends.'],
         ['Suppose a company earns %s and has preferred stock requiring %s a '
          'year.' % (money(500_000), money(60_000)),
          'The deduction depends on one feature of the preferred stock, and '
          'the exam always states it.',
          'The last blank is the kind of preferred stock whose unpaid '
          'dividends accumulate and must still be deducted.']),
        ('fill', 'R2',
         ['Preferred shareholders are paid before common shareholders, so '
          'their dividend is not available to the common ones. It is '
          '{deducted} from net income before the division.',
          'A company earning %s with a %s preferred requirement has %s '
          'available to common shareholders, and it is that figure, not the '
          '%s, that becomes the {numerator}.'
          % (money(500_000), money(60_000), money(440_000),
             money(500_000)),
          'Whether the dividend has actually been declared may not matter. On '
          '{cumulative} preferred stock the entitlement builds up whether or '
          'not a dividend is declared, so the year’s requirement is deducted '
          'either way.',
          'On non-cumulative preferred stock only a dividend actually '
          '{declared} is deducted, because nothing accumulates if the board '
          'passes it.'],
         {'deducted': ('Paid first, so not available to common.', ''),
          'numerator': ('What is left for the common shareholders.', ''),
          'cumulative': ('Unpaid entitlements accumulate.',
                         'Students deduct only declared dividends. On '
                         'cumulative preferred the requirement is deducted '
                         'whether declared or not.'),
          'declared': ('Nothing accumulates, so nothing is owed.', '')},
         ['added', 'denominator', 'convertible']),
        ('fig', 'matrix', 'Which preferred dividends are deducted',
         ['Cumulative preferred', 'Non-cumulative preferred'],
         ['Dividend declared this year', 'No dividend declared'],
         [['Deduct the dividend', 'Deduct the annual requirement anyway'],
          ['Deduct the dividend', 'Deduct nothing']],
         'Three of the four cells deduct something. The one that does not is '
         'the only case where passing a dividend helps the common '
         'shareholders’ reported figure.'),

        ('part', 'Part 4 · The changes that are not weighted',
         'stock dividends and splits'),

        ('task', 'Exercise 1D',
         'Say which share changes are weighted and which apply to every period '
         'presented.',
         'Sort each change into the column it belongs in.',
         ['Exercise 1B, and Volume 8 Handout 3 on stock dividends and splits.'],
         ['Ask of each change whether the company received anything for the '
          'new shares. Where it received nothing, a retroactive restatement '
          'is required.',
          'A share issue for cash brings in resources from a date; a stock '
          'dividend brings in nothing at all.',
          'If the share count doubles and nothing was received, every earlier '
          'figure has to be restated or the series is meaningless.']),
        ('sortgrid',
         ['Change in the share count', 'WEIGHTED FROM ITS DATE',
          'APPLIED RETROACTIVELY'],
         ['Shares issued for cash on 1 April',
          'A %s stock dividend' % '10%',
          'A %d for 1 stock split' % EQ.split,
          'Treasury shares bought back on 1 July',
          'Shares issued to acquire a building',
          'A reverse split'],
         ['WEIGHTED FROM ITS DATE', 'APPLIED RETROACTIVELY',
          'APPLIED RETROACTIVELY', 'WEIGHTED FROM ITS DATE',
          'WEIGHTED FROM ITS DATE', 'APPLIED RETROACTIVELY'],
         'The test is whether resources changed hands. A split and a stock '
         'dividend change only the number of pieces the same company is cut '
         'into.'),
        ('fig', 'ranked', 'What a %d for 1 split would do to the figures'
         % EQ.split,
         [('Weighted average shares, as reported', EP.waso,
           _k(EP.waso), SHARE),
          ('Restated for a %d for 1 split' % EQ.split,
           EP.waso * EQ.split, _k(EP.waso * EQ.split), DIL)],
         'The share count doubles and earnings per share halves, from %s to '
         '%s. Every prior year shown would be restated the same way, because '
         'nothing about the company changed.'
         % (_d(EP.basic), _d(EP.basic / EQ.split)),
         'Net income of %s, unchanged' % money(N.net_income)),

        ('part', 'Part 5 · Presenting it',
         'one line for each component of income'),

        ('task', 'Exercise 1E',
         'Present earnings per share for each component of income.',
         'Complete the right-hand column. The same denominator serves every '
         'row.',
         ['Exercise 1B, and Volume 9 Handout 3 on discontinued operations.'],
         ['Use the %s weighted average from Exercise 1B for every row.'
          % _k(EP.waso),
          'Volume 9 reported a loss from discontinued operations of %s net of '
          'tax. It gets its own per-share line.' % money(DC.net),
          'The three per-share figures must add the same way the three income '
          'figures do.']),
        ('table', _PRESH, _pres(blank=True), EPS, _PRESW),
        ('answers', 3),
        ('fig', 'buckets', 'What the standards require on the face',
         [('ALWAYS REQUIRED', EPS,
           ['Basic EPS for continuing operations',
            'Basic EPS for net income',
            'The same two on a diluted basis, unless the company has a '
            'simple capital structure']),
          ('REQUIRED IF PRESENT', SHARE,
           ['EPS for discontinued operations, on the face or in the notes',
            'The denominator reconciliation, in the notes',
            'Any securities left out of the diluted figure']),
          ('NEVER REQUIRED', SLATE,
           ['EPS for other comprehensive income',
            'EPS for a component of operating profit',
            'Cash flow per share, which is prohibited'])],
         'Cash flow per share is the one in the last column worth remembering: '
         'it is prohibited precisely because it looks like earnings per share '
         'and is not.'),

        ('watch', 'Earnings per share uses net income, not comprehensive '
                  'income. Volume 9 reported %s of comprehensive income '
                  'against %s of net income, and the %s difference never '
                  'reaches any per-share figure.'
                  % (money(N.comprehensive_income), money(N.net_income),
                     money(N.oci))),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The denominator of basic earnings per share is:',
         ['Shares issued at the year end',
          'Weighted average shares outstanding',
          'Shares outstanding at the year end',
          'Shares authorised'],
         1, 'Level A',
         'Averaged across the period and weighted by time. (C) ignores when '
         'the shares arrived, which on Northwind’s figures would change the '
         'denominator by %s shares.'
         % _k(EP.closing_outstanding - EP.waso)),

        ('mcq', 'A company has %s shares outstanding all year and issues %s '
                'more on 1 April. The weighted average is:'
         % (_k(EP.opening), _k(EP.issued)),
         [_k(EP.opening + EP.issued),
          _k(EP.opening + EP.issued * 0.75), _k(EP.opening),
          _k(EP.opening + EP.issued * 0.25)],
         1, 'Level A',
         'Nine of twelve months is a weight of 0.75, so %s of the new shares '
         'count. (A) treats a share issued in April as though it had been '
         'there since January.'
         % _k(EP.issued * 0.75)),

        ('mcq', 'Income available to common shareholders is net income less:',
         ['Dividends declared on common stock',
          'Preferred dividends',
          'All dividends declared',
          'Interest on convertible debt'],
         1, 'Level B',
         'Only the preferred claim ranks ahead of the common shareholders. (A) '
         'is the common dividend, which is a distribution of what the measure '
         'is trying to express.'),

        ('mcq', 'A %d for 1 stock split occurs in November. In computing '
                'earnings per share for the year it is:' % EQ.split,
         ['Weighted for the two months it was in force',
          'Applied to the whole year and to every prior year presented',
          'Ignored until the following year',
          'Weighted for ten months'],
         1, 'Level B',
         'No resources were received, so the restatement is retroactive and '
         'comparability is preserved. (A) applies the weighting rule meant for '
         'issues that bring in cash.'),

        ('mcq', 'A company with cumulative preferred stock declares no '
                'preferred dividend this year. In computing EPS it:',
         ['Deducts nothing',
          'Deducts the annual preferred requirement anyway',
          'Deducts twice the requirement',
          'Adds the requirement back'],
         1, 'Level C',
         'A cumulative entitlement accumulates whether declared or not, so it '
         'is not available to common shareholders. (A) is the answer for '
         'non-cumulative preferred, and the exam states which kind it means.'),

        ('mcq', 'Northwind repurchases shares and its earnings per share '
                'rises. This shows that:',
         ['The company became more profitable',
          'The denominator fell while the numerator did not',
          'The share price rose',
          'A stock dividend was declared'],
         1, 'Level C',
         'A buy-back reduces the weighted average without earning anything '
         'more. (A) is exactly the inference the measure invites and the '
         'reason a reader should look at both halves of it.'),

        ('mcq', 'Which per-share figure may a company not present?',
         ['Earnings per share from continuing operations',
          'Cash flow per share',
          'Earnings per share from discontinued operations',
          'Diluted earnings per common share'],
         1, 'Level B',
         'Cash flow per share is prohibited, because it invites readers to '
         'treat it as a substitute for earnings per share when the two measure '
         'quite different things.'),

        ('tip', 'Build the denominator before you touch the numerator, and lay '
                'the year out as a timeline with a weight against each '
                'movement. Almost every error on this topic is in the '
                'denominator, and almost every denominator error is a weight '
                'of 1 where it should have been a fraction.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the weighted average, computed'),
        ('table', _WASOH, _waso(), SHARE, _WASOW),
        ('h3', 'Exercise 1E · the presentation'),
        ('table', _PRESH, _pres(), EPS, _PRESW),
        ('prose', 'Every figure in the first table came from Volume 8: %s '
                  'shares at 1 January from Volume 1’s %s of $1 par stock, the '
                  '%s issued in Handout 1, and the %s bought back and %s '
                  'reissued in Handout 2. Only the four dates were added here.'
                  % (_k(EP.opening), money(N.common_stock_py),
                     _k(EP.issued), _k(EP.bought), _k(EP.reissued)), 'R2'),
        ('prose', 'The weighted average of %s sits between the opening %s and '
                  'the closing %s, which is the sanity check worth running. An '
                  'answer outside that range has a sign error in it, usually '
                  'on the buy-back line.'
                  % (_k(EP.waso), _k(EP.opening),
                     _k(EP.closing_outstanding)), 'R2'),
    ],
)
