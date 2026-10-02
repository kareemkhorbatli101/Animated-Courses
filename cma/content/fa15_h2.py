# -*- coding: utf-8 -*-
"""Volume 15, Handout 2 — Dilution: Options, Warrants and the Treasury Stock
Method.

Covers the diluted half of CMA Part 2 A.2(u), for the securities that bring
in cash when they are exercised.
"""
from fadata import N, EP, EQ, Y
from data import money, num

EPS, SHARE, SLATE, DIL = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _k(n):
    return num(n, 0)


def _d(x):
    return '$' + num(x, 2)


_TSMH = ['The treasury stock method', 'Shares']
_TSMW = [68, 32]


def _tsm(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Options outstanding, exercisable at $%d' % EP.option_strike,
         _k(EP.options)],
        ['Cash the holders would pay on exercise',
         c(money(EP.option_proceeds))],
        ['Shares that cash would buy back at the $%d average price'
         % EP.average_price, c(_k(EP.option_repurchased))],
        ['Incremental shares added to the denominator',
         c(_k(EP.option_incremental))],
    ]


_DILH = ['Diluted EPS for %s' % Y, 'Numerator', 'Denominator', 'Per share']
_DILW = [34, 22, 22, 22]


def _dil(blank=False):
    def c(v):
        return '' if blank else v
    d = EP.waso + EP.option_incremental
    return [
        ['Basic', money(N.net_income), _k(EP.waso), c(_d(EP.basic))],
        ['Add the incremental shares', c('—'),
         c(_k(EP.option_incremental)), c('')],
        ['Diluted, options only', money(N.net_income), c(_k(d)),
         c(_d(N.net_income / d))],
    ]


HANDOUT = dict(
    n=2,
    title='Dilution: Options, Warrants and the Treasury Stock Method',
    subtitle='%s options at $%d, when the shares average $%d. Only %s of them '
             'dilute anything, and the method shows why.'
             % (_k(EP.options), EP.option_strike, EP.average_price,
                _k(EP.option_incremental)),
    register='R2',

    lang=dict(
        register='R2 for the method, R3 for the classification, which the exam '
                 'states in its own words.',
        collocations=['exercise an option at the strike price',
                      'apply the treasury stock method',
                      'assume the proceeds repurchase shares',
                      'add incremental shares to the denominator',
                      'exclude an antidilutive security',
                      'report a complex capital structure'],
        pairs=['basic / diluted',
               'in the money / out of the money',
               'strike price / average market price',
               'shares issued / shares repurchased'],
        nots=['The treasury stock method does not add all the option shares. '
              'It adds only the shares the exercise proceeds could not buy '
              'back.',
              'Options out of the money are not ignored because they are '
              'small. They are ignored because exercising them would raise '
              'the figure, not lower it.'],
    ),

    objectives=[
        'Say what diluted earnings per share is for.',
        'Say when an option is dilutive.',
        'Apply the treasury stock method.',
        'Compute diluted earnings per share with options outstanding.',
        'Say which market price the method uses, and why.',
    ],

    terms=[
        ('diluted earnings per share',
         'Earnings per share computed as though every dilutive potential '
         'common share had been issued.',
         'ربحية السهم المخففة',
         'A worst case, not a forecast. It answers what the figure would have '
         'been had the holders all exercised.'),
        ('complex capital structure',
         'A capital structure containing securities that could become common '
         'shares.', 'هيكل رأس مال معقد',
         'A company with one must report both basic and diluted figures. '
         'Northwind’s options make it one.'),
        ('potential common share',
         'A security or contract that may entitle its holder to common shares.',
         'سهم عادي محتمل',
         'Options, warrants, convertible bonds and convertible preferred stock '
         'are the four the exam uses.'),
        ('treasury stock method',
         'The method for options and warrants: assume exercise, and assume the '
         'proceeds buy back shares at the average market price.',
         'طريقة أسهم الخزينة',
         'The repurchase is an assumption, not an event. No company actually '
         'does it.'),
        ('in the money',
         'Describing an option whose exercise price is below the market price '
         'of the share.', 'في النقد',
         'Only options in the money are dilutive. The test uses the average '
         'price for the period, not the price at the year end.'),
    ],

    blocks=[
        ('scene', 'Shares that do not exist yet', [
            'Northwind has granted %s share options exercisable at $%d. None '
            'has been exercised, so none of those shares is in Handout 1’s '
            'count of %s.' % (_k(EP.options), EP.option_strike,
                              _k(EP.waso)),
            'But they could be. The shares averaged $%d during the year, so '
            'every holder could have paid $%d for a share worth $%d.'
            % (EP.average_price, EP.option_strike, EP.average_price),
            'If they all had, there would be more shares sharing the same %s '
            'of profit, and earnings per share would be lower.'
            % money(N.net_income),
            'Diluted earnings per share reports that worst case. This handout '
            'computes it for options; Handout 3 does convertibles.',
        ]),
        ('fig', 'scale',
         'BASIC EARNINGS PER SHARE',
         ['The shares that actually exist',
          '%s, weighted by time' % _k(EP.waso),
          '%s of profit over that count' % money(N.net_income),
          'Northwind reports %s' % _d(EP.basic)],
         'DILUTED EARNINGS PER SHARE',
         ['Those shares, plus the ones that could exist',
          'Every dilutive potential common share added',
          'The same profit, spread further',
          'Always at or below the basic figure']),

        ('part', 'Part 1 · Why a second figure exists',
         'the shares that could be'),

        ('task', 'Exercise 2A',
         'Say what diluted earnings per share measures and when it is '
         'required.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1B, for the %s weighted average.'
          % _k(EP.waso)],
         ['A shareholder reading %s wants to know whether that figure is safe '
          'from being spread further.' % _d(EP.basic),
          'Northwind’s %s options are not shares yet, and the holders decide '
          'whether they ever become shares.' % _k(EP.options),
          'The last blank is what a company with no such securities at all is '
          'said to have.']),
        ('fill', 'R2',
         ['Basic earnings per share counts the shares that exist. A reader '
          'also wants to know what the figure would be if every security that '
          'could become a share actually {did}.',
          'Each such security is a potential common share, and the second '
          'figure assumes they are all exercised or converted at the start of '
          'the period. It is a {worst} case rather than a forecast.',
          'A company holding any of them has a complex capital structure and '
          'must report {both} figures. One with none of them has a simple '
          'structure and reports basic earnings per share alone.',
          'The diluted figure can never be above the basic one. If adding a '
          'security would {raise} earnings per share, it is left out, and '
          'Handout 3 explains that rule.'],
         {'did': ('Every one of them, at once.', ''),
          'worst': ('The floor, not the expectation.', ''),
          'both': ('Two figures, on the face of the statement.', ''),
          'raise': ('Then it is left out, as Handout 3 explains.',
                    'Students include every convertible security. Only the '
                    'dilutive ones go in, and the test is arithmetic.')},
         ['could', 'best', 'basic']),
        ('fig', 'buckets', 'The four potential common shares',
         [('BRING IN CASH ON EXERCISE', DIL,
           ['Share options',
            'Warrants',
            'Handled by the treasury stock method']),
          ('BRING IN NO CASH', SHARE,
           ['Convertible bonds',
            'Convertible preferred stock',
            'Handled by the other method, in Handout 3'])],
         'The split decides the method. Where cash arrives it is assumed to '
         'buy shares back; where none arrives nothing offsets the new shares.'),

        ('part', 'Part 2 · When an option dilutes',
         'and when it does nothing'),

        ('task', 'Exercise 2B',
         'Say when an option is dilutive and which price the test uses.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 2A.'],
         ['Northwind’s options are exercisable at $%d and the shares averaged '
          '$%d.' % (EP.option_strike, EP.average_price),
          'Ask whether a holder would pay $%d for something worth less than '
          'that.' % EP.option_strike,
          'The last blank is the price the method uses, and it is not the '
          'year-end price.']),
        ('fill', 'R2',
         ['An option is worth exercising only when the share is worth more '
          'than the exercise price. Northwind’s options cost $%d and the '
          'shares averaged $%d, so they are {in} the money.'
          % (EP.option_strike, EP.average_price),
          'An option exercisable at $%d when the shares average $%d would '
          'never be exercised. It is out of the money, exercising it would '
          'raise the figure rather than lower it, and it is {excluded} from '
          'the computation altogether.' % (EP.average_price + 3, EP.average_price),
          'The comparison uses the {average} market price for the period '
          'rather than the price at the year end, because the earnings being '
          'divided were earned across the whole period.',
          'That choice matters. A share that averaged $%d and closed at $%d '
          'would give one answer on the average and quite another on the '
          'closing {price}.'
          % (EP.average_price, EP.option_strike - 1)],
         {'in': ('Worth exercising, because the share is worth more.', ''),
          'excluded': ('Exercising it would raise earnings per share.',
                       ''),
          'average': ('For the period, matching the earnings.',
                      'Students use the closing price. The average is the one '
                      'consistent with a figure earned over the whole year.'),
          'price': ('Two different answers from the same facts.', '')},
         ['out', 'included', 'closing']),
        ('fig', 'fork', 'Does this option affect diluted earnings per share?',
         [('Is the exercise price below the average market price?',
           'YES → it is in the money; apply the method', DIL),
          ('Is the exercise price above the average market price?',
           'NO → out of the money, and left out entirely', RUST),
          ('Which price settles it?',
           'The average for the period, never the closing price', SLATE)]),

        ('part', 'Part 3 · The treasury stock method',
         'assume exercise, then assume a buy-back'),

        ('prose', 'Exercising an option does two things: it creates a share, '
                  'and it hands the company cash. The method accounts for '
                  'both. The new shares are added, and the cash is assumed to '
                  'repurchase shares at the average market price, so only the '
                  'difference increases the denominator.', 'R2'),

        ('task', 'Exercise 2C',
         'Apply the treasury stock method to Northwind’s options.',
         'Complete the schedule. The option count is given.',
         ['Exercise 2B, and the paragraph above.'],
         ['The proceeds are %s options at $%d each.'
          % (_k(EP.options), EP.option_strike),
          'That cash buys shares at the average price of $%d, not at the '
          'exercise price.' % EP.average_price,
          'The incremental shares are the %s issued less the number '
          'repurchased, and the answer should be a round figure.'
          % _k(EP.options)]),
        ('table', _TSMH, _tsm(blank=True), DIL, _TSMW),
        ('answers', 3),
        ('fig', 'formula', 'Why only %s shares are added'
         % _k(EP.option_incremental),
         [('%s shares issued' % _k(EP.options),
           'If every option is exercised', DIL),
          ('−', '', None),
          ('%s repurchased' % _k(EP.option_repurchased),
           '%s of proceeds at $%d a share'
           % (money(EP.option_proceeds), EP.average_price), SHARE),
          ('=', '', None),
          ('%s incremental' % _k(EP.option_incremental),
           'Added to the denominator', EPS)],
         'The company is assumed to use the cash it receives. That is the '
         'whole idea of the method, and it is why %s options add fewer than %s '
         'shares.' % (_k(EP.options), _k(EP.options))),

        ('part', 'Part 4 · The diluted figure',
         'one denominator, adjusted'),

        ('task', 'Exercise 2D',
         'Compute diluted earnings per share with the options included.',
         'Complete the grid. The numerator does not change.',
         ['Exercise 2C, and Handout 1 for the basic figure.'],
         ['Options bring in cash and cost the company no interest, so nothing '
          'is added to the numerator.',
          'The denominator is the %s weighted average plus the %s incremental '
          'shares.' % (_k(EP.waso), _k(EP.option_incremental)),
          'Your diluted figure must come out below the basic %s. If it does '
          'not, check the direction of the adjustment.' % _d(EP.basic)]),
        ('table', _DILH, _dil(blank=True), EPS, _DILW),
        ('answers', 6),
        ('fig', 'ranked', 'What the options cost the per-share figure',
         [('Basic earnings per share', EP.basic * 100, _d(EP.basic), SHARE),
          ('Diluted, options only',
           N.net_income / (EP.waso + EP.option_incremental) * 100,
           _d(N.net_income / (EP.waso + EP.option_incremental)), DIL)],
         'The same %s of profit, spread over %s shares rather than %s. Handout '
         '3 adds the convertible bond and the figure falls further.'
         % (money(N.net_income),
            _k(EP.waso + EP.option_incremental), _k(EP.waso)),
         'Cents per share'),

        ('watch', 'The treasury stock method repurchases at the average market '
                  'price and nothing else. A stem that gives you an exercise '
                  'price, an average price and a closing price is giving you '
                  'two figures you need and one you must not use.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Diluted earnings per share assumes that:',
         ['All potential common shares are exercised or converted',
          'All dilutive potential common shares are exercised or converted',
          'No potential common shares are exercised',
          'Half the potential common shares are exercised'],
         1, 'Level A',
         'Only the dilutive ones. (A) is the answer the word diluted suggests '
         'and it would let a security that raises the figure do so, which '
         'the whole measure exists to prevent.'),

        ('mcq', 'An option is dilutive when its exercise price is:',
         ['Above the average market price',
          'Below the average market price',
          'Equal to the par value',
          'Below the closing market price'],
         1, 'Level A',
         'In the money against the average price for the period. (D) uses the '
         'closing price, which is the one price the method never uses.'),

        ('mcq', 'Under the treasury stock method, the proceeds from assumed '
                'exercise are used to:',
         ['Reduce the numerator',
          'Repurchase shares at the average market price',
          'Repurchase shares at the exercise price',
          'Pay a dividend'],
         1, 'Level B',
         'Repurchase at the average market price, which is why only the excess '
         'shares are added. (C) would repurchase exactly as many shares as '
         'were issued and show no dilution at all.'),

        ('mcq', '%s options at an exercise price of $%d are outstanding when '
                'the average market price is $%d. The incremental shares are:'
         % (_k(EP.options), EP.option_strike, EP.average_price),
         [_k(EP.options), _k(EP.option_incremental),
          _k(EP.option_repurchased), 'Nil'],
         1, 'Level B',
         '%s of proceeds buys %s shares at $%d, so %s less %s is %s. (A) adds '
         'every option share and ignores the cash the company would receive.'
         % (money(EP.option_proceeds), _k(EP.option_repurchased),
            EP.average_price, _k(EP.options), _k(EP.option_repurchased),
            _k(EP.option_incremental))),

        ('mcq', 'Options exercisable at $12 are outstanding when the shares '
                'average $9. In computing diluted earnings per share they '
                'are:',
         ['Included, using the treasury stock method',
          'Excluded, because exercise would raise the figure',
          'Included at half weight',
          'Added to the numerator'],
         1, 'Level B',
         'Nobody pays $12 for a $9 share, and including them would raise the '
         'figure. (A) applies the method mechanically without first running '
         'the in-the-money test.'),

        ('mcq', 'Applying the treasury stock method to Northwind’s options '
                'changes:',
         ['The numerator only', 'The denominator only',
          'Both the numerator and the denominator', 'Neither'],
         1, 'Level C',
         'Options bring in cash and carry no interest or dividend, so nothing '
         'is added back to income. (C) is true of the convertible securities '
         'in Handout 3, and the contrast is the point.'),

        ('mcq', 'A company with no options, warrants or convertible securities '
                'reports:',
         ['Basic and diluted earnings per share, which will be equal',
          'Basic earnings per share only',
          'Diluted earnings per share only',
          'Neither figure'],
         1, 'Level C',
         'That is a simple capital structure, and only the basic figure is '
         'required. (A) is defensible in arithmetic and is not what the '
         'standards ask for.'),

        ('tip', 'Run the in-the-money test before you compute anything. An '
                'out-of-the-money option needs no method, no proceeds and no '
                'arithmetic — it is simply excluded, and a candidate who '
                'starts computing has already lost time on a question designed '
                'to be answered in one line.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2C · the treasury stock method, applied'),
        ('table', _TSMH, _tsm(), DIL, _TSMW),
        ('h3', 'Exercise 2D · diluted earnings per share, options only'),
        ('table', _DILH, _dil(), EPS, _DILW),
        ('prose', 'The incremental %s shares can be computed a second way as a '
                  'check: the options are in the money by $%d on a $%d share, '
                  'which is a third of the price, and a third of %s options is '
                  '%s. Where the arithmetic is clean that shortcut is faster '
                  'than the schedule.'
                  % (_k(EP.option_incremental),
                     EP.average_price - EP.option_strike,
                     EP.average_price, _k(EP.options),
                     _k(EP.option_incremental)), 'R2'),
        ('prose', 'Note that the numerator did not move. Options are the '
                  'simple case precisely because exercising one brings in cash '
                  'and costs the company nothing in income. Handout 3 takes '
                  'the securities where that is not true.', 'R2'),
    ],
)
