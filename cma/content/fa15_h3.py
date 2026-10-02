# -*- coding: utf-8 -*-
"""Volume 15, Handout 3 — Convertibles, the If-Converted Method, and
Antidilution.

The securities that bring in no cash, and the test that keeps a security out
of the diluted figure altogether.
"""
from fadata import N, EP, BD, Y
from data import money, num

EPS, SHARE, SLATE, DIL = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _k(n):
    return num(n, 0)


def _d(x):
    return '$' + num(x, 2)


def _d4(x):
    return '$' + num(x, 4)


def _pc(x):
    return num(x * 100, 0) + '%'


_IFCH = ['The if-converted method', 'Amount']
_IFCW = [68, 32]


def _ifc(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Interest on the convertible bond for the year',
         money(EP.convertible_interest)],
        ['Less tax relief at %s' % _pc(EP.tax_rate),
         c(money(-EP.convertible_interest * EP.tax_rate))],
        ['Added back to the numerator', c(money(EP.convertible_addback))],
        ['Shares issuable on conversion', _k(EP.convertible_shares)],
        ['Incremental earnings per share',
         c(_d4(EP.convertible_incremental_eps))],
    ]


_FULLH = ['Diluted EPS for %s' % Y, 'Numerator', 'Denominator', 'Per share']
_FULLW = [34, 22, 22, 22]


def _full(blank=False):
    def c(v):
        return '' if blank else v
    d1 = EP.waso + EP.option_incremental
    d2 = d1 + EP.convertible_shares
    n2 = N.net_income + EP.convertible_addback
    return [
        ['Basic', money(N.net_income), _k(EP.waso), c(_d(EP.basic))],
        ['Add the options', c('—'), _k(EP.option_incremental),
         c(_d(N.net_income / d1))],
        ['Add the convertible bond', c(money(EP.convertible_addback)),
         _k(EP.convertible_shares), c(_d(n2 / d2))],
        ['Diluted earnings per share', c(money(n2)), c(_k(d2)),
         c(_d(EP.diluted))],
    ]


_ANTIH = ['Security', 'Incremental EPS', 'Against basic of %s' % _d(EP.basic),
          'Included?']
_ANTIW = [30, 24, 26, 20]


def _anti(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Options, %s at $%d' % (_k(EP.options), EP.option_strike),
         c('Nil'), c('Below'), c('Yes')],
        ['Convertible bond, %s shares' % _k(EP.convertible_shares),
         c(_d4(EP.convertible_incremental_eps)), c('Below'), c('Yes')],
        ['Convertible preferred, %s shares' % _k(EP.anti_preferred_shares),
         c(_d(EP.anti_incremental_eps)), c('Above'), c('No')],
    ]


HANDOUT = dict(
    n=3,
    title='Convertibles, the If-Converted Method, and Antidilution',
    subtitle='Northwind’s basic %s falls to %s once the options and the bond '
             'go in. A third security would raise it, so it stays out.'
             % (_d(EP.basic), _d(EP.diluted)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the method, R3 for the antidilution test, which the '
                 'exam sets as a ranking question.',
        collocations=['assume conversion at the start of the period',
                      'add back the after-tax interest',
                      'rank securities by incremental earnings per share',
                      'exclude an antidilutive security',
                      'convert preferred stock into common',
                      'adjust both the numerator and the denominator'],
        pairs=['treasury stock method / if-converted method',
               'dilutive / antidilutive',
               'incremental EPS / basic EPS',
               'convertible bond / convertible preferred'],
        nots=['Adding back the interest is not optional. If the bond had '
              'converted there would have been no interest, so the numerator '
              'must be restated too.',
              'Antidilutive does not mean unimportant. It means including the '
              'security would raise earnings per share, which the measure '
              'forbids.'],
    ),

    objectives=[
        'Apply the if-converted method to a convertible bond.',
        'Say why the numerator changes and by how much.',
        'Compute incremental earnings per share for a security.',
        'Decide whether a security is dilutive or antidilutive.',
        'Compute diluted earnings per share with several securities.',
    ],

    terms=[
        ('if-converted method',
         'The method for convertible securities: assume conversion at the '
         'start of the period, add the shares, and reverse the interest or '
         'dividend that would not have been paid.',
         'طريقة الافتراض بالتحويل',
         'Both halves of the fraction move, which is what distinguishes it '
         'from the treasury stock method.'),
        ('incremental earnings per share',
         'The effect a single security would have, computed as its numerator '
         'adjustment divided by the shares it would add.',
         'ربحية السهم الإضافية',
         'The test for dilution and the order of inclusion, both at once. '
         'Below basic is dilutive; above it is not.'),
        ('antidilutive',
         'Describing a security whose inclusion would raise earnings per share '
         'rather than lower it.', 'مضاد للتخفيف',
         'Excluded from the diluted figure and disclosed, so a reader knows it '
         'exists.'),
    ],

    blocks=[
        ('scene', 'A bond that could become shares', [
            'Volume 14 issued a %s bond with a %s coupon. Suppose it is '
            'convertible into %s common shares.'
            % (money(BD.face), _pc(BD.discount_coupon),
               _k(EP.convertible_shares)),
            'If the holders convert, Northwind issues %s shares and stops '
            'paying interest on the bond. Both halves of earnings per share '
            'move.' % _k(EP.convertible_shares),
            'That is the difference from Handout 2. An option brings in cash '
            'and changes only the denominator; a convertible brings in nothing '
            'and changes both.',
            'And a third security, a convertible preferred, would raise the '
            'figure rather than lower it. This handout explains why it is left '
            'out.',
        ]),
        ('fig', 'matrix', 'Two methods, two kinds of security',
         ['Treasury stock method', 'If-converted method'],
         ['Used for', 'Cash on exercise', 'What moves'],
         [['Options and warrants',
           'Yes, and it is assumed to buy shares back',
           'The denominator only'],
          ['Convertible bonds and convertible preferred',
           'None at all',
           'The numerator and the denominator']],
         'The middle column decides the method. Where cash arrives something '
         'offsets the new shares; where it does not, nothing does.'),

        ('part', 'Part 1 · Why the numerator moves',
         'the interest that would not have been paid'),

        ('task', 'Exercise 3A',
         'Say why assuming conversion changes the numerator as well as the '
         'denominator.',
         'Read and complete. Write one word or figure in each space.',
         ['Handout 2 Exercise 2C, on the treasury stock method.',
          'Volume 14 Handout 3, for the bond’s year one interest.'],
         ['If the bond had converted on the first day of the year, ask whether '
          'Northwind would have paid any interest on it.',
          'Volume 14 charged %s of interest on that bond in year one.'
          % money(EP.convertible_interest),
          'The last blank is why the full %s is not added back, and the answer '
          'involves the tax.' % money(EP.convertible_interest)]),
        ('fill', 'R2',
         ['The method assumes the bond converted on the first day of the '
          'period. If it had, Northwind would have issued %s shares, and it '
          'would also have paid no {interest} on the bond at all.'
          % _k(EP.convertible_shares),
          'So the %s Volume 14 charged would not have been incurred, and '
          'profit would have been higher. The numerator is {increased} to '
          'reflect that.' % money(EP.convertible_interest),
          'Not by the whole %s, though. Interest is deductible, so saving it '
          'would also have cost %s in extra {tax}, and only the net %s is '
          'added back.'
          % (money(EP.convertible_interest),
             money(EP.convertible_interest * EP.tax_rate),
             money(EP.convertible_addback)),
          'The denominator rises by %s. Both halves of the fraction move, '
          'which is the whole difference between this method and the {treasury} '
          'stock method of Handout 2.' % _k(EP.convertible_shares)],
         {'interest': ('A converted bond pays nothing.', ''),
          'increased': ('Profit would have been higher.', ''),
          'tax': ('The saving is taxable, so add back the net figure.',
                  'Students add back the gross interest. The deduction would '
                  'have been lost, so the add-back is net of tax.'),
          'treasury': ('Options move one half; convertibles move both.', '')},
         ['dividends', 'reduced', 'if-converted']),
        ('fig', 'formula', 'The add-back, computed',
         [('Interest %s' % money(EP.convertible_interest),
           'Volume 14, year one', SLATE),
          ('×', '', None),
          ('%s' % _pc(1 - EP.tax_rate),
           'Net of tax at %s' % _pc(EP.tax_rate), DIL),
          ('=', '', None),
          ('%s' % money(EP.convertible_addback),
           'Added to the numerator', EPS)],
         'A convertible preferred needs no such adjustment for tax, because '
         'preferred dividends are not deductible. The add-back there is the '
         'whole dividend.'),

        ('part', 'Part 2 · The test for dilution',
         'incremental earnings per share'),

        ('prose', 'Each security is tested on its own before it is let in. Its '
                  'numerator adjustment is divided by the shares it would add, '
                  'and the result is compared with basic earnings per share. '
                  'Below is dilutive; above is not.', 'R2'),

        ('task', 'Exercise 3B',
         'Compute the incremental earnings per share of the convertible bond.',
         'Complete the schedule. Two figures are given.',
         ['Exercise 3A, and the paragraph above.'],
         ['The numerator adjustment is the %s of interest net of %s tax.'
          % (money(EP.convertible_interest), _pc(EP.tax_rate)),
          'Divide that by the %s shares the conversion would create.'
          % _k(EP.convertible_shares),
          'Compare the answer with the basic %s. Below it means the security '
          'dilutes.' % _d(EP.basic)]),
        ('table', _IFCH, _ifc(blank=True), DIL, _IFCW),
        ('answers', 3),
        ('fig', 'ranked', 'Each security tested against basic EPS',
         [('Basic earnings per share', EP.basic, _d(EP.basic), SHARE),
          ('Convertible bond, incremental',
           EP.convertible_incremental_eps,
           _d4(EP.convertible_incremental_eps), DIL),
          ('Convertible preferred, incremental',
           EP.anti_incremental_eps, _d(EP.anti_incremental_eps), RUST)],
         'The bond’s %s is below the basic figure, so it dilutes. The '
         'preferred’s %s is above it, so including it would raise earnings per '
         'share and it is excluded.'
         % (_d4(EP.convertible_incremental_eps),
            _d(EP.anti_incremental_eps)),
         'Earnings per share added by one more security'),

        ('part', 'Part 3 · The security that stays out',
         'antidilution'),

        ('task', 'Exercise 3C',
         'Decide which securities belong in the diluted figure.',
         'Complete the grid, then say which one is excluded.',
         ['Exercise 3B, and Handout 2 Exercise 2C.'],
         ['The options add no income at all, so their incremental figure is '
          'nil and nothing can be lower than that.',
          'The convertible preferred requires a %s dividend and would issue %s '
          'shares.' % (money(EP.anti_preferred_dividend),
                       _k(EP.anti_preferred_shares)),
          'Compare each incremental figure with the basic %s, and remember '
          'that preferred dividends carry no tax relief.' % _d(EP.basic)]),
        ('fill', 'R3',
         ['Each security is tested on its own before it is let in. Divide the '
          'income it would add back by the shares it would create, and compare '
          'the result with {basic} earnings per share.',
          'The convertible bond adds %s of income and %s shares, giving %s. '
          'That is below the basic %s, so the bond lowers the figure and is '
          '{dilutive}.'
          % (money(EP.convertible_addback), _k(EP.convertible_shares),
             _d4(EP.convertible_incremental_eps), _d(EP.basic)),
          'The convertible preferred adds %s of dividend and only %s shares, '
          'giving %s. That is {above} the basic figure, so including it would '
          'raise earnings per share.'
          % (money(EP.anti_preferred_dividend),
             _k(EP.anti_preferred_shares),
             _d(EP.anti_incremental_eps)),
          'A security of that kind is {antidilutive}. It is excluded from the '
          'computation entirely and disclosed instead, so a reader knows it '
          'exists without the figure being flattered by it.',
          'The options need no such test. They add shares and no income at '
          'all, so their incremental figure is {nil} and nothing can dilute '
          'more than that.'],
         {'basic': ('The benchmark is basic, not the running diluted '
                    'figure.', ''),
          'dilutive': ('Below basic, so it goes in.', ''),
          'above': ('More income per share than the company already '
                    'earns.', ''),
          'antidilutive': ('It would raise the figure, so it stays out.',
                           'Students include every convertible security they '
                           'are given. The test is arithmetic and it is run '
                           'first.'),
          'nil': ('No income added, so nothing over the shares.', '')},
         ['diluted', 'below', 'excluded']),
        ('table', _ANTIH, _anti(blank=True), SLATE, _ANTIW),
        ('answers', 9),
        ('fig', 'fork', 'Does this security go into the diluted figure?',
         [('Is its incremental earnings per share below the basic figure?',
           'YES → it is dilutive, and it goes in', DIL),
          ('Is its incremental figure above the basic figure?',
           'NO → it is antidilutive, excluded, and disclosed', RUST),
          ('Where several securities qualify, in what order?',
           'Most dilutive first, and stop when the figure stops falling',
           SLATE)]),

        ('part', 'Part 4 · The whole computation',
         'two securities, one figure'),

        ('task', 'Exercise 3D',
         'Compute diluted earnings per share with both dilutive securities.',
         'Complete the grid. Each row builds on the one above it.',
         ['Exercises 3B and 3C, and Handout 2 for the option shares.'],
         ['Start from basic: %s over %s.'
          % (money(N.net_income), _k(EP.waso)),
          'The options add %s shares and nothing to the numerator; the bond '
          'adds %s shares and %s.'
          % (_k(EP.option_incremental), _k(EP.convertible_shares),
             money(EP.convertible_addback)),
          'Check the figure falls at every step. If it rises you have included '
          'the preferred, which Exercise 3C excluded.']),
        ('table', _FULLH, _full(blank=True), EPS, _FULLW),
        ('answers', 9),
        ('fig', 'ranked', 'Northwind’s earnings per share, step by step',
         [('Basic', EP.basic * 100, _d(EP.basic), SHARE),
          ('After the options',
           N.net_income / (EP.waso + EP.option_incremental) * 100,
           _d(N.net_income / (EP.waso + EP.option_incremental)), DIL),
          ('Diluted, after the bond as well', EP.diluted * 100,
           _d(EP.diluted), EPS)],
         'From %s to %s, a fall of %s. The convertible preferred would have '
         'taken it back up, which is precisely why it is not here.'
         % (_d(EP.basic), _d(EP.diluted),
            _d(EP.basic - EP.diluted)),
         'Cents per share'),

        ('part', 'Part 5 · The order, and why it matters',
         'most dilutive first'),

        ('task', 'Exercise 3E',
         'Say why dilutive securities are included in order of their effect.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 3D.'],
         ['Adding securities in a different order can give a different answer, '
          'which is why the standard fixes one.',
          'A security that is dilutive on its own can become antidilutive once '
          'others have already lowered the figure.',
          'One of the statements is about disclosure, which is required for '
          'the securities left out.']),
        ('sortgrid',
         ['Statement about the order of inclusion', 'TRUE', 'FALSE'],
         ['Securities are included from most dilutive to least',
          'The order can change the final diluted figure',
          'A security dilutive on its own can be antidilutive once others are '
          'in',
          'Antidilutive securities are included at half weight',
          'Securities excluded as antidilutive are disclosed',
          'Diluted earnings per share can exceed basic earnings per share'],
         ['TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE'],
         'The last is the rule the whole topic protects. If your diluted '
         'figure is above your basic one, a security has been included that '
         'should not have been.'),
        ('fig', 'scale',
         'WHAT GOES IN',
         ['Options in the money',
          'The convertible bond, at %s incremental'
          % _d4(EP.convertible_incremental_eps),
          'In order, most dilutive first',
          'Until the figure stops falling'],
         'WHAT STAYS OUT',
         ['Options out of the money',
          'The convertible preferred, at %s incremental'
          % _d(EP.anti_incremental_eps),
          'Anything that would raise the figure',
          'Disclosed, so the reader knows it exists']),

        ('watch', 'Diluted earnings per share can never exceed basic. That is '
                  'not a tendency but a rule, enforced by the antidilution '
                  'test, and a computed answer above the basic figure is '
                  'always an error rather than a result.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under the if-converted method, a convertible bond affects:',
         ['The denominator only', 'The numerator and the denominator',
          'The numerator only', 'Neither'],
         1, 'Level A',
         'Conversion issues shares and stops the interest, so both move. (A) '
         'is the treasury stock method’s effect, and distinguishing the two is '
         'most of this handout.'),

        ('mcq', 'A convertible bond carries %s of interest for the year and '
                'the tax rate is %s. The add-back to the numerator is:'
         % (money(EP.convertible_interest), _pc(EP.tax_rate)),
         [money(EP.convertible_interest), money(EP.convertible_addback),
          money(EP.convertible_interest * EP.tax_rate), 'Nil'],
         1, 'Level B',
         '%s net of %s tax relief is %s. (A) adds back the gross interest and '
         'forgets that the deduction would have been lost too.'
         % (money(EP.convertible_interest),
            money(EP.convertible_interest * EP.tax_rate),
            money(EP.convertible_addback))),

        ('mcq', 'A convertible preferred stock requires a dividend of %s and '
                'would convert into %s shares. Its incremental earnings per '
                'share is:' % (money(EP.anti_preferred_dividend),
                               _k(EP.anti_preferred_shares)),
         [_d(EP.anti_incremental_eps / 2), _d(EP.anti_incremental_eps),
          _d(EP.basic), 'Nil'],
         1, 'Level B',
         '%s over %s shares, with no tax adjustment because preferred '
         'dividends are not deductible. (A) applies a tax effect that does not '
         'exist here.'
         % (money(EP.anti_preferred_dividend),
            _k(EP.anti_preferred_shares))),

        ('mcq', 'A security whose incremental earnings per share is above the '
                'basic figure is:',
         ['Included first', 'Excluded as antidilutive',
          'Included last', 'Included at half weight'],
         1, 'Level B',
         'Including it would raise the figure, which the measure forbids. (C) '
         'is the trap for a candidate who has learned the ordering rule and '
         'not the exclusion rule.'),

        ('mcq', 'Northwind’s basic earnings per share is %s and its diluted '
                'figure is %s. A newly issued security has an incremental '
                'earnings per share of %s. It should be:'
         % (_d(EP.basic), _d(EP.diluted), _d(1.50)),
         ['Excluded, because %s is above %s' % (_d(1.50), _d(EP.diluted)),
          'Included, because %s is below the basic %s'
          % (_d(1.50), _d(EP.basic)),
          'Excluded, because it is preferred stock',
          'Included only if it is in the money'],
         1, 'Level C',
         'The test is against the basic figure, security by security, and the '
         'securities are then added in order. (A) tests against the diluted '
         'figure, which is the result rather than the benchmark.'),

        ('mcq', 'Dilutive securities are included in the computation:',
         ['In the order they were issued',
          'From the most dilutive to the least',
          'From the least dilutive to the most',
          'In any order, since the answer is the same'],
         1, 'Level C',
         'Most dilutive first, because the order changes the answer and the '
         'standard fixes one. (D) is false precisely because a security can '
         'turn antidilutive once others have lowered the figure.'),

        ('mcq', 'A company computes a diluted figure above its basic figure. '
                'This means:',
         ['The company is highly profitable',
          'An antidilutive security has been included in error',
          'The securities were added in the wrong order',
          'The numerator was understated'],
         1, 'Level A',
         'Diluted can never exceed basic, so the result is an error rather '
         'than a finding. (C) can change the answer and cannot push it above '
         'basic, because the exclusion test runs first.'),

        ('tip', 'Compute each security’s incremental earnings per share before '
                'you compute anything else, and write them in a column beside '
                'the basic figure. That one list tells you which securities go '
                'in, in what order, and which the question put there to be '
                'left out.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the if-converted add-back'),
        ('table', _IFCH, _ifc(), DIL, _IFCW),
        ('h3', 'Exercise 3C · which securities qualify'),
        ('table', _ANTIH, _anti(), SLATE, _ANTIW),
        ('h3', 'Exercise 3D · diluted earnings per share, complete'),
        ('table', _FULLH, _full(), EPS, _FULLW),
        ('prose', 'The options have an incremental earnings per share of nil, '
                  'because they add shares and no income at all. Nothing can '
                  'be more dilutive than that, which is why options always go '
                  'in first when both kinds of security are present.', 'R2'),
        ('prose', 'The final figure of %s against a basic %s is a fall of %s, '
                  'or about %s. The convertible preferred would have taken it '
                  'back above the basic figure, and the whole purpose of the '
                  'incremental test is to notice that before including it.'
                  % (_d(EP.diluted), _d(EP.basic),
                     _d(EP.basic - EP.diluted),
                     num((EP.basic - EP.diluted) / EP.basic * 100, 1) + '%'),
         'R2'),
    ],
)
