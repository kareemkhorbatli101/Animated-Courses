# -*- coding: utf-8 -*-
"""Volume 12, Handout 5 — Long-Lived Assets and Impairment: Revaluation and
Reversal.

Covers A.2 ff(v) and ff(vi): the revaluation option for property, plant and
equipment, and the two impairment models, worked on Volume 5's two lines.
"""
from fadata import N, P, IF, Y
from data import money, num

GAAP, IFRS, BOTH, SLATE = '1F6F8F', 'A05A2B', '2E7D5B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_LINESH = ['Production line B', 'US GAAP', 'IFRS']
_LINESW = [48, 26, 26]


def _lines(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Carrying amount', money(P.b_carrying), money(P.b_carrying)],
        ['Undiscounted future cash flows',
         money(P.b_undiscounted), c('Not used')],
        ['Fair value less costs to sell', money(P.b_fair_value),
         money(P.b_fair_value)],
        ['Value in use, the discounted cash flows', c('Not used'),
         money(IF.b_value_in_use)],
        ['The figure compared with carrying amount',
         c(money(P.b_undiscounted)), c(money(IF.b_recoverable_ifrs))],
        ['Impairment loss recognised', c(money(P.b_loss)),
         c(money(IF.b_loss_ifrs))],
    ]


_TESTH = ['', 'US GAAP', 'IFRS']
_TESTW = [30, 35, 35]


def _tests(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Number of steps', c('Two'), c('One')],
        ['Step one compares carrying amount with',
         c('Undiscounted future cash flows'), c('Not applicable')],
        ['The loss is carrying amount less',
         c('Fair value, if step one fails'),
         c('Recoverable amount, always')],
        ['Recoverable amount is', c('Not a defined term'),
         c('The higher of fair value less costs to sell and value in use')],
        ['May a loss be reversed later?', c('No, for assets held for use'),
         c('Yes, except for goodwill')],
    ]


_ASSETH = ['', 'Cost model', 'Revaluation model']
_ASSETW = [30, 35, 35]


def _asset(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Permitted under US GAAP', 'Yes', c('No')],
        ['Permitted under IFRS', 'Yes', c('Yes, by class of asset')],
        ['An increase in value', 'Not recognised',
         c('To other comprehensive income, as a revaluation surplus')],
        ['Depreciation afterwards', 'On cost',
         c('On the revalued amount')],
        ['Applied to', 'Any asset', c('A whole class, not one asset')],
    ]


HANDOUT = dict(
    n=5,
    title='Long-Lived Assets and Impairment: Revaluation and Reversal',
    subtitle='Volume 5 found no impairment on production line B. Under IFRS the '
             'same line carries a loss of %s, and the reason is one discount '
             'rate.' % money(IF.b_loss_ifrs),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the two models, R3 for the comparison, which the exam '
                 'sets as a compute-both-ways question.',
        collocations=['test an asset for recoverability',
                      'discount the future cash flows',
                      'compare carrying amount with recoverable amount',
                      'recognise an impairment loss',
                      'reverse an impairment loss',
                      'revalue a class of assets'],
        pairs=['two-step test / one-step test',
               'undiscounted / discounted',
               'fair value / value in use',
               'reversible / permanent'],
        nots=['The IFRS test is not harsher because its standards are '
              'stricter. It is harsher because it never compares a carrying '
              'amount with an undiscounted figure.',
              'An IFRS reversal is not a revaluation. It restores a carrying '
              'amount the asset would have had anyway, and no further.'],
    ),

    objectives=[
        'Say which measurement models each framework permits for property, '
        'plant and equipment.',
        'Describe the two-step US GAAP impairment test.',
        'Describe the one-step IFRS test and define recoverable amount.',
        'Compute the loss on the same asset under both frameworks.',
        'Say whether an impairment loss may be reversed under each.',
    ],

    terms=[
        ('recoverable amount',
         'The higher of an asset’s fair value less costs to sell and its value '
         'in use.', 'المبلغ القابل للاسترداد',
         'An IFRS term with no US GAAP equivalent. The higher of two figures, '
         'which is what makes the one-step test survivable.'),
        ('value in use',
         'The present value of the future cash flows expected from an asset.',
         'القيمة من الاستخدام',
         'Discounted. That one word is the whole of the difference this handout '
         'turns on.'),
        ('two-step test',
         'The US GAAP impairment test: a recoverability test on undiscounted '
         'cash flows, and then a measurement against fair value.',
         'اختبار الخطوتين',
         'An asset that passes step one is never measured, however far fair '
         'value has fallen.'),
        ('one-step test',
         'The IFRS impairment test: carrying amount compared directly with '
         'recoverable amount.', 'اختبار الخطوة الواحدة',
         'No screen, so an asset is written down whenever the discounted '
         'figure falls below its carrying amount.'),
        ('cash-generating unit',
         'The smallest group of assets generating cash flows largely '
         'independent of other assets.', 'الوحدة المولدة للنقد',
         'The IFRS level at which impairment is tested when an individual '
         'asset generates no cash flows of its own.'),
        ('component depreciation',
         'Depreciating the significant parts of an asset separately over their '
         'own useful lives.', 'إهلاك المكوّنات',
         'Required under IFRS and merely permitted under US GAAP, where almost '
         'nobody elects it.'),
    ],

    blocks=[
        ('scene', 'The line that was not impaired', [
            'Volume 5 Handout 4 tested two production lines, each carried at '
            '%s. Line A failed and line B passed.' % money(P.b_carrying),
            'Line B passed because its undiscounted future cash flows of %s '
            'exceeded the %s it was carried at, so no loss was measured and '
            'the %s fair value never came into it.'
            % (money(P.b_undiscounted), money(P.b_carrying),
               money(P.b_fair_value)),
            'Discount those same cash flows and they are worth %s. Under IFRS '
            'that figure is compared with the carrying amount directly, and '
            'the line is impaired by %s.'
            % (money(IF.b_value_in_use), money(IF.b_loss_ifrs)),
            'Two frameworks, one asset, one set of cash flows, and a %s '
            'difference in reported profit.' % money(IF.b_loss_ifrs),
        ]),
        ('fig', 'ranked', 'Production line B, measured four ways',
         [('Undiscounted future cash flows — the US GAAP screen',
           P.b_undiscounted, money(P.b_undiscounted), GAAP),
          ('Carrying amount', P.b_carrying, money(P.b_carrying), BOTH),
          ('Value in use, the same flows discounted', IF.b_value_in_use,
           money(IF.b_value_in_use), IFRS),
          ('Fair value less costs to sell', P.b_fair_value,
           money(P.b_fair_value), SLATE)],
         'The first bar is above the carrying amount and the third is below it. '
         'That is why US GAAP finds nothing and IFRS finds %s.'
         % money(IF.b_loss_ifrs),
         'All four figures describe the same production line'),

        ('part', 'Part 1 · Measuring the asset',
         'cost, or revalued'),

        ('task', 'Exercise 5A',
         'Say which measurement models each framework permits for property, '
         'plant and equipment.',
         'Complete the right-hand column.',
         ['Volume 5 Handout 1, on carrying an asset at cost.',
          'Handout 2 Exercise 2D, on revaluing an intangible.'],
         ['The pattern is the same as it was for intangibles in Handout 2, with '
          'one condition relaxed.',
          'There is no active market requirement here, because property and '
          'equipment can usually be valued.',
          'The last row is the restriction that stops a company revaluing only '
          'the assets that have risen.']),
        ('table', _ASSETH, _asset(blank=True), SLATE, _ASSETW),
        ('answers', 5),
        ('fig', 'matrix', 'The revaluation option, and its two conditions',
         ['The option exists', 'It applies to a whole class',
          'Depreciation follows it'],
         ['Under US GAAP', 'Under IFRS'],
         [['No. Cost less depreciation and impairment, always.',
           'Yes, as a policy choice by class of asset'],
          ['Not applicable',
           'A company cannot revalue only the assets that have risen'],
          ['Not applicable',
           'Later depreciation is charged on the revalued amount']],
         'The class rule is what stops the option being an earnings tool. '
         'Revaluing one favourable asset is not available.'),

        ('part', 'Part 2 · The US GAAP test',
         'two steps, and a screen'),

        ('task', 'Exercise 5B',
         'Describe the two-step US GAAP impairment test.',
         'Read and complete. Write one word or figure in each space.',
         ['Volume 5 Handout 4, which applied this test to both lines.'],
         ['The first step is a screen rather than a measurement. Ask what it '
          'compares, and note that it is not discounted.',
          'Line B’s %s of undiscounted flows exceeded its %s carrying amount, '
          'so the test stopped.'
          % (money(P.b_undiscounted), money(P.b_carrying)),
          'The last blank is the figure that would have been used had step one '
          'failed, and line A shows it.']),
        ('fill', 'R2',
         ['US GAAP tests an asset held for use in two steps. Step one asks '
          'whether the carrying amount is {recoverable}, by comparing it with '
          'the sum of the future cash flows the asset is expected to generate.',
          'Those cash flows are taken {undiscounted}. That is the whole '
          'peculiarity of the test, because an undiscounted total is almost '
          'always the largest figure available.',
          'Line B’s undiscounted flows are %s against a carrying amount of %s, '
          'so step one is passed and the test stops. No loss is measured, and '
          'the %s fair value is never {reached}.'
          % (money(P.b_undiscounted), money(P.b_carrying),
             money(P.b_fair_value)),
          'Had step one failed, as it did for line A, step two measures the '
          'loss as carrying amount less {fair} value: %s less %s, or %s.'
          % (money(P.a_carrying), money(P.a_fair_value),
             money(P.a_loss))],
         {'recoverable': ('A screen, not a measurement.', ''),
          'undiscounted': ('The one word that makes the screen generous.',
                           'Students discount the step one flows. '
                           'Discounting them would turn the US GAAP test into '
                           'the IFRS one.'),
          'reached': ('The test stopped before it.', ''),
          'fair': ('Fair value, once the screen has failed.', '')},
         ['impaired', 'present', 'carrying']),
        ('fig', 'fork', 'The US GAAP test, in order',
         [('Are the undiscounted cash flows below the carrying amount?',
           'NO → no impairment, and no measurement at all', GAAP),
          ('If they are below it, what is the loss?',
           'Carrying amount less fair value', RUST),
          ('Can the loss be reversed if value recovers?',
           'NO → not for an asset held for use', SLATE)]),

        ('part', 'Part 3 · The IFRS test',
         'one step, and a discount rate'),

        ('prose', 'IFRS compares the carrying amount with recoverable amount '
                  'directly. Recoverable amount is the higher of fair value '
                  'less costs to sell and value in use, and value in use is '
                  'the discounted cash flows. There is no screen, so an asset '
                  'is written down as soon as the comparison fails.', 'R2'),

        ('task', 'Exercise 5C',
         'Describe the one-step IFRS test and define recoverable amount.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 5B, and the paragraph above.'],
         ['Recoverable amount is the higher of two figures. Both are available '
          'for line B: %s and %s.'
          % (money(P.b_fair_value), money(IF.b_value_in_use)),
          'Take the higher, compare it with the %s carrying amount, and the '
          'loss is the shortfall.' % money(P.b_carrying),
          'The last blank is the level at which the test is applied when a '
          'single machine generates no cash flows on its own, and IFRS calls '
          'it a cash-generating unit.']),
        ('fill', 'R2',
         ['IFRS has one step. The carrying amount is compared with recoverable '
          'amount, which is the {higher} of fair value less costs to sell and '
          'value in use.',
          'Value in use is the same future cash flows the US GAAP screen used, '
          '{discounted} to a present value. For line B that gives %s against '
          'the %s undiscounted total.'
          % (money(IF.b_value_in_use), money(P.b_undiscounted)),
          'Fair value less costs to sell is %s, so recoverable amount is the '
          'higher of the two, %s. Against a carrying amount of %s the loss is '
          '{%s}.' % (money(P.b_fair_value), money(IF.b_recoverable_ifrs),
                     money(P.b_carrying), money(IF.b_loss_ifrs)),
          'Where an individual asset generates no cash flows of its own, the '
          'test is applied to the smallest group that does, which IFRS calls a '
          'cash-{generating} unit.'],
         {'higher': ('Two figures, and the better of them.', ''),
          'discounted': ('The single word the whole difference turns on.', ''),
          money(IF.b_loss_ifrs): ('%s less %s.'
                                  % (money(P.b_carrying),
                                     money(IF.b_recoverable_ifrs)), ''),
          'generating': ('The smallest group with its own cash flows.',
                         'Students test a single machine. Most machines '
                         'generate no cash flows alone, and the unit is the '
                         'level the standard uses.')},
         ['lower', 'reported', 'reporting']),
        ('fig', 'formula', 'Recoverable amount, for line B',
         [('Fair value less costs to sell %s' % money(P.b_fair_value),
           'What a buyer would leave the company with', SLATE),
          ('vs', '', None),
          ('Value in use %s' % money(IF.b_value_in_use),
           'The discounted cash flows from keeping it', IFRS),
          ('=', '', None),
          ('Recoverable amount %s' % money(IF.b_recoverable_ifrs),
           'The higher, compared with the %s carried'
           % money(P.b_carrying), RUST)],
         'The higher of the two, because a company would not scrap an asset '
         'worth more in use, nor keep one worth more sold.'),

        ('part', 'Part 4 · The same line, both ways',
         'where the %s comes from' % money(IF.b_loss_ifrs)),

        ('task', 'Exercise 5D',
         'Compute the impairment on production line B under both frameworks.',
         'Complete the grid. Two rows say which figure each framework uses.',
         ['Exercises 5B and 5C.'],
         ['Each framework uses only some of the four figures, and the rows '
          'marked not used are already filled in.',
          'US GAAP compares the carrying amount with %s and stops; IFRS '
          'compares it with %s.'
          % (money(P.b_undiscounted), money(IF.b_recoverable_ifrs)),
          'The last row is %s under one framework and %s under the other, from '
          'the same asset and the same cash flows.'
          % (money(P.b_loss), money(IF.b_loss_ifrs))]),
        ('table', _LINESH, _lines(blank=True), IFRS, _LINESW),
        ('answers', 6),
        ('table', _TESTH, _tests(blank=True), GAAP, _TESTW),
        ('answers', 9),
        ('fig', 'bridge',
         'Carrying amount of line B', P.b_carrying,
         [('Impairment under US GAAP: the screen is passed', -P.b_loss),
          ('Impairment under IFRS: carrying amount above recoverable amount',
           -IF.b_loss_ifrs)],
         'Carrying amount under IFRS', P.b_carrying - IF.b_loss_ifrs),

        ('part', 'Part 5 · Undoing the loss, and one more difference',
         'reversal and component depreciation'),

        ('task', 'Exercise 5E',
         'Say whether an impairment loss may be reversed, and name the '
         'depreciation difference.',
         'Read and complete. Write one word in each space.',
         ['Exercise 5D, and Handout 3 Exercise 3D on reversing an inventory '
          'write-down.'],
         ['The pattern is the same as it was for inventory in Handout 3: one '
          'framework reverses and the other does not.',
          'There is one asset for which neither framework ever reverses, and '
          'Volume 5 Handout 5 valued it.',
          'The last blank is the depreciation practice IFRS requires and US '
          'GAAP merely permits.']),
        ('fill', 'R3',
         ['Under US GAAP an impairment loss on an asset held for use is '
          '{permanent}. The written-down figure becomes the new carrying '
          'amount and is depreciated from there, whatever happens to value '
          'afterwards.',
          'Under IFRS the loss is {reversed} if the circumstances that caused '
          'it no longer apply. The reversal is capped at the carrying amount '
          'the asset would have had if it had never been impaired.',
          'One asset is excluded from that. An impairment of {goodwill} is '
          'never reversed under either framework, because a recovery cannot be '
          'distinguished from internally generated goodwill.',
          'A last difference has nothing to do with impairment. IFRS requires '
          'the significant parts of an asset to be depreciated separately over '
          'their own lives, which is {component} depreciation; US GAAP permits '
          'it and almost nobody elects it.'],
         {'permanent': ('A new carrying amount, for good.', ''),
          'reversed': ('Up to what the asset would otherwise have been '
                       'worth.', ''),
          'goodwill': ('Never reversed, under either framework.',
                       'Students apply the IFRS reversal to goodwill. It is '
                       'the one exception, and the exam asks about it.'),
          'component': ('Each significant part over its own life.', '')},
         ['reversible', 'inventory', 'straight-line']),
        ('fig', 'buckets', 'Long-lived assets, sorted by framework',
         [('THE SAME UNDER BOTH', BOTH,
           ['Cost less depreciation is permitted',
            'An impairment loss goes to profit',
            'Goodwill impairments are never reversed']),
          ('US GAAP ONLY', GAAP,
           ['A two-step test, with an undiscounted screen',
            'No revaluation option at all',
            'Impairment losses are permanent']),
          ('IFRS ONLY', IFRS,
           ['A one-step test against recoverable amount',
            'The revaluation option, by class',
            'Reversals, and component depreciation'])],
         'Six differences and three agreements across the two frameworks on '
         'this one learning outcome, which is why it carries two of the six '
         'named items.'),

        ('watch', 'Everything on this learning outcome follows from one word. '
                  'The US GAAP screen is undiscounted and the IFRS comparison '
                  'is not, so IFRS finds impairments US GAAP does not, and '
                  'then reverses them when they recover.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The revaluation model for property, plant and equipment is:',
         ['Permitted under both frameworks', 'Permitted under IFRS only',
          'Permitted under US GAAP only', 'Prohibited under both'],
         1, 'Level A',
         'IFRS offers it by class of asset; US GAAP requires cost less '
         'depreciation and impairment. (A) is the answer a student gives who '
         'has learned that both permit the cost model.'),

        ('mcq', 'The first step of the US GAAP impairment test compares the '
                'carrying amount with:',
         ['Fair value',
          'The sum of the undiscounted future cash flows',
          'The present value of the future cash flows',
          'Replacement cost'],
         1, 'Level A',
         'Undiscounted, which is what makes the step a screen rather than a '
         'measurement. (C) is the IFRS comparison and the single most '
         'consequential confusion in ff(v).'),

        ('mcq', 'Under IFRS, recoverable amount is:',
         ['Fair value less costs to sell',
          'The higher of fair value less costs to sell and value in use',
          'The lower of fair value less costs to sell and value in use',
          'The undiscounted future cash flows'],
         1, 'Level B',
         'The higher of the two, because a company would take whichever course '
         'leaves it better off. (C) is the trap, and it would impair almost '
         'every asset a company owns.'),

        ('mcq', 'An asset carried at %s has undiscounted future cash flows of '
                '%s, a value in use of %s and a fair value less costs to sell '
                'of %s. The impairment loss under US GAAP is:'
         % (money(P.b_carrying), money(P.b_undiscounted),
            money(IF.b_value_in_use), money(P.b_fair_value)),
         [money(P.b_carrying - P.b_fair_value), 'Nil',
          money(IF.b_loss_ifrs),
          money(P.b_carrying - IF.b_value_in_use)],
         1, 'Level B',
         'The undiscounted flows of %s exceed the %s carrying amount, so step '
         'one is passed and nothing is measured. (A) and (C) both skip the '
         'screen and measure a loss the test never reaches.'
         % (money(P.b_undiscounted), money(P.b_carrying))),

        ('mcq', 'The impairment loss on the same asset under IFRS is:',
         ['Nil', money(IF.b_loss_ifrs),
          money(P.b_carrying - P.b_fair_value),
          money(P.b_carrying - P.b_undiscounted)],
         1, 'Level C',
         'Recoverable amount is the higher of %s and %s, so %s, and %s less '
         'that is %s. (C) uses fair value, which is the lower of the two and '
         'so not recoverable amount.'
         % (money(P.b_fair_value), money(IF.b_value_in_use),
            money(IF.b_recoverable_ifrs), money(P.b_carrying),
            money(IF.b_loss_ifrs))),

        ('mcq', 'An impairment loss on equipment held for use may be reversed '
                'under:',
         ['Both frameworks', 'IFRS only', 'US GAAP only', 'Neither'],
         1, 'Level B',
         'IFRS reverses up to the carrying amount the asset would otherwise '
         'have had; US GAAP treats the write-down as a new cost basis. (D) is '
         'right only for goodwill.'),

        ('mcq', 'Depreciating the significant parts of an asset separately over '
                'their own useful lives is:',
         ['Required under US GAAP and permitted under IFRS',
          'Required under IFRS and permitted under US GAAP',
          'Prohibited under both', 'Required under both'],
         1, 'Level C',
         'IFRS requires component depreciation and US GAAP permits it. (A) '
         'reverses the pair, and in every one of the six named differences in '
         'this volume it is IFRS that requires the extra work.'),

        ('tip', 'On any impairment question, write the four figures down and '
                'then cross out the two the framework does not use. US GAAP '
                'uses the undiscounted total and then fair value; IFRS uses the '
                'higher of fair value and value in use and nothing else. Most '
                'distractors are the right arithmetic on the wrong pair.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5D · line B under both frameworks'),
        ('table', _LINESH, _lines(), IFRS, _LINESW),
        ('h3', 'Exercise 5D · the two tests compared'),
        ('table', _TESTH, _tests(), GAAP, _TESTW),
        ('h3', 'Exercise 5A · the two measurement models'),
        ('table', _ASSETH, _asset(), SLATE, _ASSETW),
        ('prose', 'The same four figures are in front of both frameworks and '
                  'each uses two of them. US GAAP compares %s with the '
                  'undiscounted %s, passes, and stops. IFRS compares %s with '
                  'the higher of %s and %s, which is %s, and writes the line '
                  'down by %s.'
                  % (money(P.b_carrying), money(P.b_undiscounted),
                     money(P.b_carrying), money(P.b_fair_value),
                     money(IF.b_value_in_use),
                     money(IF.b_recoverable_ifrs),
                     money(IF.b_loss_ifrs)), 'R2'),
        ('prose', 'Volume 5 Handout 4 reached the US GAAP answer and was '
                  'right. Nothing about line B has changed except the '
                  'framework, and that is the point of this volume: six '
                  'differences, each of which leaves the facts alone and '
                  'changes the figure reported.', 'R2'),
    ],
)
