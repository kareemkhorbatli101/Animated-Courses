# -*- coding: utf-8 -*-
"""Volume 9, Handout 3 — Discontinued Operations.

Covers A.2(ee): when a disposal is a discontinued operation, and how the
income statement is presented once it is.
"""
from fadata import N, DC, Y
from data import money, num

INC, EXP, PERI, SLATE = '1F6F8F', 'A05A2B', '6D3F7E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

NY = '20X5'

_ISH = ['Income statement, year ended 31 December %s' % NY, 'Amount']
_ISW = [70, 30]


def _is(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Income from continuing operations, net of tax',
         money(N.net_income)],
        ['Discontinued operations:', ''],
        ['   Loss from operating the division, before tax',
         money(-DC.operating_loss)],
        ['   Loss on disposal of the division, before tax',
         money(-DC.disposal_loss)],
        ['   Income tax benefit at %d%%' % (DC.rate * 100),
         c(money(DC.tax_benefit))],
        ['Loss from discontinued operations, net of tax',
         c(money(-DC.net))],
        ['Net income', c(money(N.net_income - DC.net))],
    ]


_TESTH = ['Disposal', 'A component?', 'A strategic shift?',
          'Discontinued?']
_TESTW = [40, 20, 20, 20]


def _tests(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['The whole Fittings division, a separate line of business',
         c('Yes'), c('Yes'), c('Yes')],
        ['One of eleven regional sales offices',
         c('Yes'), c('No'), c('No')],
        ['A single machine from the components plant',
         c('No'), c('No'), c('No')],
        ['All operations in a geographical area the company is leaving',
         c('Yes'), c('Yes'), c('Yes')],
        ['An equity-method associate that was a strategic investment',
         c('Yes'), c('Yes'), c('Yes')],
    ]


HANDOUT = dict(
    n=3,
    title='Discontinued Operations',
    subtitle='Northwind leaves the fittings business. The %s it loses in doing '
             'so is reported on its own line, below everything else, net of '
             'tax.' % money(DC.net),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the tests and the presentation, R3 for the '
                 'classification exercise, which uses the standard’s own '
                 'wording.',
        collocations=['dispose of a component',
                      'represent a strategic shift',
                      'classify a disposal group as held for sale',
                      'report net of tax',
                      'restate the comparative periods',
                      'cease to depreciate a held-for-sale asset'],
        pairs=['continuing / discontinued',
               'component / asset',
               'strategic shift / routine disposal',
               'gross / net of tax'],
        nots=['A discontinued operation is not any large disposal. It has to '
              'be a component and it has to be a strategic shift.',
              'Reporting an operation as discontinued does not change the '
              'total. Net income is the same figure, presented in two parts.'],
    ),

    objectives=[
        'State the two tests a disposal must meet to be discontinued.',
        'Apply the tests to a given disposal.',
        'Present a discontinued operation in the income statement.',
        'Say why the line is shown net of tax when no other line is.',
        'Say what changes on the balance sheet and in the comparatives.',
    ],

    terms=[
        ('component of an entity',
         'An operation and cash flows that can be clearly distinguished from '
         'the rest of the business, both for operations and for reporting.',
         'مكوّن من المنشأة',
         'A reportable segment, an operating segment, a reporting unit or a '
         'subsidiary can be one. A single asset never is.'),
        ('strategic shift',
         'A disposal that has, or will have, a major effect on a company’s '
         'operations and financial results.', 'تحول استراتيجي',
         'The second test, and the one that disposes of most exam distractors. '
         'Size alone does not make a shift.'),
        ('discontinued operation',
         'A component of an entity that has been disposed of, or is held for '
         'sale, and whose disposal represents a strategic shift.',
         'العمليات المتوقفة',
         'Both tests, not either. A large disposal that is business as usual '
         'stays in continuing operations.'),
        ('held for sale',
         'A classification for a disposal group that is available for '
         'immediate sale and whose sale is highly probable.',
         'محتفظ به للبيع',
         'Classification starts the presentation: the component is reported as '
         'discontinued before it is actually sold.'),
        ('disposal group',
         'A group of assets and the liabilities directly associated with them '
         'that will be disposed of in a single transaction.',
         'مجموعة الاستبعاد',
         'Measured as a whole at the lower of carrying amount and fair value '
         'less costs to sell, and no longer depreciated.'),
    ],

    blocks=[
        ('scene', 'Northwind leaves a business', [
            'Early in %s Northwind’s board resolves to sell its Fittings '
            'division, a separate line of business with its own plant, its own '
            'customers and its own reporting.' % NY,
            'The division loses %s before tax while it is still being run, and '
            'the sale itself produces a further loss of %s.'
            % (money(DC.operating_loss), money(DC.disposal_loss)),
            'Both losses attract tax relief at %d%%, so the %s of pre-tax loss '
            'is %s after the %s benefit.'
            % (DC.rate * 100, money(DC.pretax), money(DC.net),
               money(DC.tax_benefit)),
            'Every dollar of that appears on one line of the income statement, '
            'and this handout explains why it gets a line of its own.',
        ]),
        ('fig', 'workplace', 'The decision to exit fittings',
         [('Samir', 'Chief executive — resolves to exit the business', 'm',
           SLATE),
          ('Rana', 'Controller — must decide how to present it', 'w', INC),
          ('Dalia', 'Divisional manager — runs it until it is sold', 'w',
           PERI)],
         [('factory', 'Fittings plant, to be sold'),
          ('shop', 'Components, continuing'),
          ('doc', 'Board resolution, early %s' % NY),
          ('money', '%s loss, net of tax' % money(DC.net))],
         'Two businesses, one of them being left. The presentation question is '
         'whether a reader can see next year’s company in this year’s '
         'statement.'),

        ('part', 'Part 1 · Why the line exists',
         'so a reader can see what is left'),

        ('task', 'Exercise 3A',
         'Say why a discontinued operation is reported separately.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1A, on the four elements of performance.'],
         ['A reader uses this year’s result to form a view about next year. Ask '
          'what the Fittings division will contribute then.',
          'Both the trading loss of %s and the disposal loss of %s belong to a '
          'business that will not be there.'
          % (money(DC.operating_loss), money(DC.disposal_loss)),
          'The last blank is what the separate presentation does to total net '
          'income, and the answer is nothing.']),
        ('fill', 'R2',
         ['A reader of an income statement is trying to work out what the '
          'company will earn next year. The %s that continuing operations made '
          'is useful for that; the Fittings division’s losses are not, because '
          'the division will be {gone}.' % money(N.net_income),
          'So the results of the business being left are stripped out of every '
          'line above and gathered on one line of their own. The figures above '
          'that line describe the company that will {continue}.',
          'Both the trading loss of %s and the %s loss on the sale go to that '
          'line. They arise from the same decision, so they are reported '
          '{together}.' % (money(DC.operating_loss),
                           money(DC.disposal_loss)),
          'Nothing is hidden and nothing is removed. Net income is still %s, '
          'and the separate line changes only how that figure is {presented}.'
          % money(N.net_income - DC.net)],
         {'gone': ('Next year it contributes nothing.', ''),
          'continue': ('The company the reader is forecasting.', ''),
          'together': ('One decision, one line.', ''),
          'presented': ('Same total, two parts.',
                        'Students expect the total to change. The split is '
                        'presentational, and the exam often asks for the total '
                        'to check that.')},
         ['sold', 'reduced', 'separately']),
        ('fig', 'scale',
         'CONTINUING OPERATIONS %s' % money(N.net_income),
         ['The business the company will still have',
          'Every line of revenue and expense',
          'What a reader forecasts next year from',
          'Reported line by line, gross'],
         'DISCONTINUED OPERATIONS %s' % money(-DC.net),
         ['A component being left behind',
          'Trading result and disposal result together',
          'Of no use in forecasting',
          'Reported on one line, net of tax']),

        ('part', 'Part 2 · The two tests', 'component, and strategic shift'),

        ('prose', 'Two conditions must both be met. The operation must be a '
                  'component of an entity, which means its operations and cash '
                  'flows can be clearly distinguished from the rest of the '
                  'business both in practice and for reporting; and its '
                  'disposal must represent a strategic shift with a major '
                  'effect on the company’s operations and results.', 'R2'),

        ('task', 'Exercise 3B',
         'Apply the two tests to five disposals and classify each one.',
         'Complete the grid. Write Yes or No in each cell.',
         ['The paragraph above.'],
         ['Work the first test first: can this operation’s cash flows be '
          'separated from the rest of the business?',
          'A single machine fails the first test, so the second need not be '
          'asked at all.',
          'One of the five is a component and still not discontinued, because '
          'closing one office of eleven changes nothing strategically.']),
        ('table', _TESTH, _tests(blank=True), SLATE, _TESTW),
        ('answers', 15),
        ('fig', 'fork', 'Is this disposal a discontinued operation?',
         [('Is it a component, distinguishable in operations and reporting?',
           'NO → not discontinued, and the second test is never reached',
           RUST),
          ('Does its disposal represent a strategic shift?',
           'NO → a component, but still inside continuing operations', PERI),
          ('Are both tests met?',
           'YES → report it separately, net of tax, below continuing '
           'operations', INC)]),

        ('part', 'Part 3 · Presenting it', 'one line, net of tax'),

        ('task', 'Exercise 3C',
         'Present the discontinued operation in the income statement.',
         'Complete the schedule. Both losses are given before tax.',
         ['Exercises 3A and 3B.'],
         ['The two losses add to %s before tax. The tax benefit is %d%% of '
          'that.' % (money(DC.pretax), DC.rate * 100),
          'A loss reduces taxable income, so the tax effect is a benefit and it '
          'is shown as a positive amount.',
          'Net income is the %s from continuing operations less the net loss '
          'below it.' % money(N.net_income)]),
        ('table', _ISH, _is(blank=True), PERI, _ISW),
        ('answers', 3),
        ('fig', 'bridge',
         'Income from continuing operations', N.net_income,
         [('Loss from operating the division', -DC.operating_loss),
          ('Loss on the disposal itself', -DC.disposal_loss),
          ('Tax benefit at %d%%' % (DC.rate * 100), DC.tax_benefit)],
         'Net income', N.net_income - DC.net),

        ('part', 'Part 4 · Why this line alone is net of tax',
         'intraperiod tax allocation'),

        ('task', 'Exercise 3D',
         'Say why a discontinued operation is reported net of its own tax.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3C, and Volume 7 Handout 2 on the tax charge.'],
         ['Every other line of the income statement is before tax, with one tax '
          'charge at the end.',
          'Ask what the income tax expense line would mean if it covered both '
          'the continuing and the discontinued results.',
          'The last blank names the practice, and the exam uses the term '
          'without explaining it.']),
        ('fill', 'R2',
         ['Every line above is reported gross, with a single income tax expense '
          'at the foot of continuing operations. A discontinued operation '
          'breaks that pattern and is reported {net} of its own tax.',
          'The reason is the line above it. If the %s tax benefit on the '
          'division’s losses were left in the main tax charge, the tax on '
          'continuing operations would be understated and the margin a reader '
          'computes from it would be {meaningless}.'
          % money(DC.tax_benefit),
          'So the tax is split between the two parts of the statement and each '
          'carries its own. The %s of pre-tax loss and the %s of benefit are '
          'reported {together}, giving %s.'
          % (money(DC.pretax), money(DC.tax_benefit), money(DC.net)),
          'Dividing the year’s tax between the parts of the statement that '
          'produced it is called {intraperiod} tax allocation, and the exam '
          'contrasts it with the interperiod allocation of Volume 7.'],
         {'net': ('The one line that carries its own tax.', ''),
          'meaningless': ('A tax charge on profits that are not there.', ''),
          'together': ('One line, after tax.', ''),
          'intraperiod': ('Within one period, between the parts of the '
                          'statement.',
                          'Students confuse it with interperiod allocation. '
                          'That one is about which year; this one is about '
                          'which line.')},
         ['gross', 'deferred', 'interperiod']),
        ('fig', 'matrix', 'Two allocations of tax, and what each splits',
         ['Interperiod, from Volume 7', 'Intraperiod, in this handout'],
         ['What is divided', 'Between what', 'What it produces'],
         [['The tax on one year’s profit',
           'This year and later years',
           'Deferred tax assets and liabilities'],
          ['This year’s tax charge',
           'Continuing operations and discontinued operations',
           'A discontinued line reported net of tax']],
         'The names differ by one syllable and the ideas have nothing in '
         'common. One is about timing and the other about presentation.'),

        ('part', 'Part 5 · The balance sheet and the comparatives',
         'what else changes'),

        ('task', 'Exercise 3E',
         'Say what happens on the balance sheet and to the prior year once a '
         'component is held for sale.',
         'Read and complete. Write one word in each space.',
         ['Exercise 3B, and Volume 5 Handout 2 on depreciating an asset.'],
         ['The division is classified before it is sold, so something has to '
          'happen to its assets in the meantime.',
          'An asset held for sale is not being used up in the business any '
          'more. Ask what charge therefore stops.',
          'The last blank is what happens to the previous year’s income '
          'statement when it is shown alongside this one.']),
        ('fill', 'R2',
         ['Classification does not wait for the sale. Once the division is '
          'available for immediate sale and the sale is highly probable, it is '
          'classified as {held} for sale and reported as discontinued from that '
          'moment.',
          'Its assets and the liabilities that go with them are presented '
          'together as a disposal {group}, in a single line among current '
          'assets and a single line among current liabilities.',
          'The group is measured at the lower of carrying amount and fair value '
          'less costs to sell, and it is no longer {depreciated}, because it is '
          'being sold rather than used.',
          'The comparative income statement is {restated} on the same basis, so '
          'both years show the same continuing business and a reader can '
          'compare them.'],
         {'held': ('The standard’s own classification.', ''),
          'group': ('Assets and their liabilities, together.', ''),
          'depreciated': ('Held for sale, not in use.',
                          'Students keep charging depreciation until the sale '
                          'completes. It stops on classification.'),
          'restated': ('Both years on the same basis, or neither comparison '
                       'works.', '')},
         ['sold', 'revalued', 'unchanged']),
        ('fig', 'timeline', 'From the board’s decision to the sale',
         [('Classification', 'Held for sale. Reported as discontinued, '
                             'depreciation stops, comparatives restated.',
           SLATE),
          ('While held', 'Measured at the lower of carrying amount and fair '
                         'value less costs to sell', PERI),
          ('Sale', 'The %s disposal loss is recognised and the disposal group '
                   'leaves the balance sheet' % money(DC.disposal_loss),
           INC)],
         'Presentation begins at the first date, not the last. That is what '
         'makes held for sale worth its own classification.'),

        ('watch', 'Reporting a component as discontinued never changes net '
                  'income. A question that gives you income from continuing '
                  'operations and a discontinued loss and asks for net income '
                  'wants the subtraction, and a question that asks what the '
                  'reclassification did to net income wants the word nothing.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'To be reported as a discontinued operation, a disposal must:',
         ['Be larger than ten per cent of total assets',
          'Be a component of the entity and represent a strategic shift',
          'Result in a loss',
          'Be completed before the year end'],
         1, 'Level A',
         'Both tests, and nothing about size or outcome. (A) invents a '
         'quantitative threshold the standard does not have, and (D) is wrong '
         'because held-for-sale classification is enough.'),

        ('mcq', 'A discontinued operation is reported in the income statement:',
         ['Within operating expenses',
          'On a separate line, net of tax, below income from continuing '
          'operations',
          'As an extraordinary item',
          'Only in the notes'],
         1, 'Level A',
         'One line, after tax, below continuing operations. (C) is the category '
         'that no longer exists in US GAAP, which makes it the distractor the '
         'exam reuses most.'),

        ('mcq', 'A division loses %s from operations and %s on its disposal, '
                'both before tax, at a %d%% rate. The discontinued operations '
                'line shows a loss of:'
         % (money(DC.operating_loss), money(DC.disposal_loss),
            DC.rate * 100),
         [money(DC.pretax), money(DC.net),
          money(DC.disposal_loss), money(DC.operating_loss)],
         1, 'Level B',
         '%s before tax less the %s benefit is %s. (A) omits the tax, and the '
         'discontinued line is the one line in the statement that must carry '
         'its own.' % (money(DC.pretax), money(DC.tax_benefit),
                       money(DC.net))),

        ('mcq', 'A company closes one of its eleven regional sales offices. The '
                'closure is:',
         ['A discontinued operation, because the office is a component',
          'Not a discontinued operation, because it is not a strategic shift',
          'A discontinued operation, if the loss is material',
          'An extraordinary item'],
         1, 'Level B',
         'The office may well be a component, and closing one of eleven changes '
         'nothing strategically, so the second test fails. (C) is the size test '
         'the standard deliberately does not use.'),

        ('mcq', 'Allocating the year’s income tax between continuing and '
                'discontinued operations is called:',
         ['Interperiod tax allocation', 'Intraperiod tax allocation',
          'Deferred tax allocation', 'Permanent allocation'],
         1, 'Level B',
         'Within the period, between the parts of the statement. (A) is the '
         'allocation between years that produces deferred tax, and the two '
         'names are one syllable apart by design.'),

        ('mcq', 'A component is classified as held for sale in October and sold '
                'the following March. During those five months:',
         ['It continues to be depreciated',
          'It is not depreciated, and is measured at the lower of carrying '
          'amount and fair value less costs to sell',
          'It is remeasured to fair value with gains recognised',
          'It is removed from the balance sheet'],
         1, 'Level C',
         'Depreciation stops on classification because the asset is being sold '
         'rather than used. (C) is the trap: the measurement is a floor, so '
         'losses are recognised and gains above carrying amount are not.'),

        ('mcq', 'Northwind reports %s from continuing operations and a %s loss '
                'from discontinued operations, net of tax. Had the division not '
                'been classified as discontinued, net income would have been:'
         % (money(N.net_income), money(DC.net)),
         [money(N.net_income), money(N.net_income - DC.net),
          money(N.net_income + DC.net), 'Not determinable'],
         1, 'Level C',
         'The classification is presentational, so net income is %s either way. '
         '(A) is the error the separate line invites, treating the loss as '
         'though the presentation had removed it.'
         % money(N.net_income - DC.net)),

        ('tip', 'Ask the two tests in order and stop at the first No. Most exam '
                'items fail the strategic shift test while passing the '
                'component test, so the distractor is almost always a genuine '
                'component whose disposal changes nothing about the business.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the completed classification grid'),
        ('table', _TESTH, _tests(), SLATE, _TESTW),
        ('h3', 'Exercise 3C · the completed income statement'),
        ('table', _ISH, _is(), PERI, _ISW),
        ('prose', 'The %s of pre-tax loss carries a %s tax benefit at %d%%, so '
                  'the line shows %s. Net income is the %s from continuing '
                  'operations less that figure, or %s.'
                  % (money(DC.pretax), money(DC.tax_benefit),
                     DC.rate * 100, money(DC.net), money(N.net_income),
                     money(N.net_income - DC.net)), 'R2'),
        ('prose', 'Row 3 of the grid is the one worth re-reading. A single '
                  'machine is an asset and not a component, so the second test '
                  'is never reached. Nothing about the size of the machine '
                  'could change that answer.', 'R2'),
    ],
)
