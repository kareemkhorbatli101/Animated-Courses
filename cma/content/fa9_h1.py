# -*- coding: utf-8 -*-
"""Volume 9, Handout 1 — Gains, Losses and How Expenses Are Recognised.

Covers A.2(aa) and A.2(cc): the four elements of performance and the three
bases on which a cost is charged against a period.
"""
from fadata import N, Y
from data import money

INC, EXP, PERI, SLATE = '1F6F8F', 'A05A2B', '6D3F7E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_nbv = N.disposal_cost - N.disposal_accum

_FOURH = ['Item in Northwind’s %s income statement' % Y, 'Amount',
          'Which element']
_FOURW = [48, 22, 30]


def _four(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Sales of components to customers', money(N.sales), c('Revenue')],
        ['Cost of goods sold', money(N.cogs), c('Expense')],
        ['Selling and administrative costs',
         money(N.selling + N.admin), c('Expense')],
        ['Depreciation and amortisation', money(N.dep_amort), c('Expense')],
        ['Interest on the long-term debt', money(N.interest), c('Expense')],
        ['Sale of a machine for %s that stood at %s'
         % (money(N.disposal_proceeds), money(_nbv)),
         money(N.gain_disposal), c('Gain')],
    ]


_THREEH = ['Cost', 'Which basis', 'Why']
_THREEW = [34, 30, 36]


def _three(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Cost of goods sold, %s' % money(N.cogs),
         c('Cause and effect'),
         c('Each unit’s cost is charged when that unit is sold')],
        ['Depreciation, %s' % money(N.depreciation),
         c('Systematic allocation'),
         c('No single sale can be traced to a machine’s cost')],
        ['Amortisation, %s' % money(N.amortisation),
         c('Systematic allocation'),
         c('The same reasoning, over an intangible’s useful life')],
        ['Administrative salaries, %s' % money(N.admin),
         c('Immediate recognition'),
         c('No future benefit can be identified or allocated')],
        ['Sales commissions, inside %s' % money(N.selling),
         c('Cause and effect'),
         c('Earned on a particular sale and charged with it')],
        ['A %s fine paid during the year' % money(20_000),
         c('Immediate recognition'),
         c('Nothing is received for it in any period')],
    ]


HANDOUT = dict(
    n=1,
    title='Gains, Losses and How Expenses Are Recognised',
    subtitle='Northwind sold %s of components and one machine. Both brought in '
             'cash and only one of them is revenue.' % money(N.sales),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the four elements are being separated, R2 once the '
                 'recognition bases are being applied.',
        collocations=['arise from ongoing major activities',
                      'report a gain net of its cost',
                      'associate a cost with a revenue',
                      'allocate a cost over its useful life',
                      'recognise a cost immediately',
                      'derecognise a disposed asset'],
        pairs=['revenue / gain',
               'expense / loss',
               'gross / net',
               'ongoing / peripheral'],
        nots=['A gain is not a small revenue. The two differ in what produced '
              'them, not in size.',
              'Immediate recognition is not a last resort for lazy accounting. '
              'It is the right answer where no future benefit can be '
              'identified.'],
    ),

    objectives=[
        'Define revenue, expense, gain and loss and say how each pair differs.',
        'Classify an item in the income statement as one of the four.',
        'Compute a gain or loss on a disposal and report it net.',
        'Name the three bases on which costs are recognised.',
        'Decide which basis applies to a given cost.',
    ],

    terms=[
        ('revenue',
         'An inflow arising from a company’s ongoing major activities, reported '
         'at its gross amount.', 'الإيرادات',
         'Gross, and from the main business. Both halves of that matter when an '
         'item has to be classified.'),
        ('gain',
         'An increase in equity from a transaction peripheral to the company’s '
         'main activities, reported net.', 'الربح العارض',
         'Netting is the visible difference: a gain of %s appears where a '
         'revenue of %s and a cost of %s would have been.'
         % (money(N.gain_disposal), money(N.disposal_proceeds),
            money(_nbv))),
        ('loss',
         'A decrease in equity from a peripheral transaction or event, reported '
         'net.', 'الخسارة العارضة',
         'The mirror of a gain, and it need not involve a transaction at all: a '
         'fire produces a loss.'),
        ('peripheral',
         'Outside a company’s ongoing major or central operations.',
         'عارض أو هامشي',
         'The test is what the company is in business to do. Selling a machine '
         'is peripheral for Northwind and central for a machinery dealer.'),
        ('systematic and rational allocation',
         'Spreading a cost over the periods it benefits, on a defensible '
         'pattern, where no single revenue can be traced to it.',
         'التوزيع المنظم والمنطقي',
         'Depreciation is the example the exam uses. The pattern must be '
         'defensible, not precise.'),
    ],

    blocks=[
        ('scene', 'Two sales, two different things', [
            'In %s Northwind sold %s of components to its customers. It also '
            'sold one old machine for %s.' % (Y, money(N.sales),
                                              money(N.disposal_proceeds)),
            'Both brought cash in. The first appears in the income statement at '
            'its full %s; the second appears as %s, which is the %s received '
            'less the %s the machine stood at.'
            % (money(N.sales), money(N.gain_disposal),
               money(N.disposal_proceeds), money(_nbv)),
            'The difference is not the size of the amounts. It is that selling '
            'components is what Northwind does and selling machinery is not.',
            'This handout sorts the income statement into its four elements, '
            'then asks when a cost belongs to a period at all.',
        ]),
        ('fig', 'scale',
         'REVENUE AND EXPENSE',
         ['From ongoing major activities',
          'Reported at the gross amount',
          'Sales of %s and cost of sales of %s'
          % (money(N.sales), money(N.cogs)),
          'The company doing what it is for'],
         'GAIN AND LOSS',
         ['From peripheral transactions and events',
          'Reported net of the related cost',
          'A gain of %s on the machine' % money(N.gain_disposal),
          'Something that happened along the way']),

        ('part', 'Part 1 · Four elements, two tests',
         'what produced it, and gross or net'),

        ('task', 'Exercise 1A',
         'Define the four elements of performance and say how each pair '
         'differs.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 2, for the definitions of income and expense.'],
         ['The first test is about the activity: is this what the company is in '
          'business to do?',
          'The second test is about presentation, and the machine sale shows '
          'it: %s rather than %s and %s.'
          % (money(N.gain_disposal), money(N.disposal_proceeds),
             money(_nbv)),
          'The last blank is what a loss can arise from that a revenue never '
          'can.']),
        ('fill', 'R1',
         ['Two questions sort any item of performance. The first is where it '
          'came from. An inflow from the company’s ongoing major activities is '
          'revenue; an inflow from anything {peripheral} to them is a gain.',
          'Northwind sells components, so the %s of component sales is revenue. '
          'It does not sell machinery, so disposing of a machine produces a '
          'gain rather than a {revenue}.' % money(N.sales),
          'The second question is how much to show. Revenue is reported at its '
          'full amount with the related cost shown separately, while a gain is '
          'reported {net}: %s received less the %s the machine stood at, so %s '
          'on one line.'
          % (money(N.disposal_proceeds), money(_nbv),
             money(N.gain_disposal)),
          'Expenses and losses divide the same way. An expense arises from the '
          'main business; a loss arises from something peripheral, and it can '
          'arise from an {event} rather than a transaction at all, as a fire '
          'does.'],
         {'peripheral': ('Outside what the company is in business to do.', ''),
          'revenue': ('Same cash, different source.', ''),
          'net': ('One line, not two.',
                  'Students report the %s of proceeds as revenue. That would '
                  'inflate sales by a transaction the company is not in '
                  'business to make.' % money(N.disposal_proceeds)),
          'event': ('No counterparty needed.', '')},
         ['central', 'gross', 'invoice']),
        ('fig', 'matrix', 'The four elements',
         ['Revenue', 'Expense', 'Gain', 'Loss'],
         ['Source', 'Direction', 'Reported'],
         [['Ongoing major activities', 'Increases equity', 'Gross'],
          ['Ongoing major activities', 'Decreases equity', 'Gross'],
          ['Peripheral transactions', 'Increases equity', 'Net'],
          ['Peripheral transactions or events', 'Decreases equity', 'Net']],
         'Two tests and four boxes. Every item of performance in any income '
         'statement is one of these four.'),

        ('part', 'Part 2 · Classifying Northwind’s income statement',
         'six lines, sorted'),

        ('task', 'Exercise 1B',
         'Classify each line of the income statement as one of the four '
         'elements.',
         'Complete the right-hand column. Write one word in each cell.',
         ['Exercise 1A, and Volume 1 Handout 5 for the statement itself.'],
         ['Five of the six lines are part of the main business, and only one is '
          'not.',
          'Interest is a cost of financing rather than of selling, and it is '
          'still an expense.',
          'The amounts are given. Only the classification is asked for.']),
        ('table', _FOURH, _four(blank=True), INC, _FOURW),
        ('answers', 6),
        ('fig', 'ranked', 'Northwind’s performance, by element',
         [('Revenue — component sales', N.sales, money(N.sales), INC),
          ('Expense — cost of goods sold', N.cogs, money(N.cogs), EXP),
          ('Expense — operating costs', N.opex, money(N.opex), EXP),
          ('Expense — interest', N.interest, money(N.interest), EXP),
          ('Gain — machine disposal', N.gain_disposal,
           money(N.gain_disposal), PERI)],
         'One revenue, three expenses and one gain produce the %s of profit '
         'before tax.' % money(N.pretax),
         '%s · year ended 31 December %s' % (N.short, Y)),

        ('part', 'Part 3 · Computing the gain',
         'proceeds against carrying amount'),

        ('prose', 'A gain or loss on disposal is never the proceeds and never '
                  'the original cost. It is the proceeds less what the asset '
                  'stood at in the books on the day it left, and that figure '
                  'depends on how much depreciation has already been charged.',
         'R2'),

        ('task', 'Exercise 1C',
         'Compute the gain on the disposal and record the asset leaving the '
         'books.',
         'Read and complete, then record the entry underneath.',
         ['Volume 5 Handout 6, where this disposal was first worked.',
          'The paragraph above.'],
         ['The machine cost %s and %s of depreciation had been charged on it.'
          % (money(N.disposal_cost), money(N.disposal_accum)),
          'Work out what it stood at before you compare anything with the %s '
          'of proceeds.' % money(N.disposal_proceeds),
          'Both the cost account and the accumulated depreciation account have '
          'to be cleared, which is why the entry has four lines.']),
        ('fill', 'R2',
         ['The machine cost %s and carried %s of accumulated depreciation, so '
          'it stood in the books at %s. That figure is its {carrying} amount, '
          'and it is the only one the gain is measured against.'
          % (money(N.disposal_cost), money(N.disposal_accum), money(_nbv)),
          'Northwind received %s for it. The gain is therefore %s less %s, or '
          '{%s}, and that single net figure is what the income statement shows.'
          % (money(N.disposal_proceeds), money(N.disposal_proceeds),
             money(_nbv), money(N.gain_disposal)),
          'Both of the machine’s accounts have to be cleared. The %s of cost is '
          'credited away and the %s of accumulated depreciation is {debited} '
          'away, so neither is left behind on a machine the company no longer '
          'owns.' % (money(N.disposal_cost), money(N.disposal_accum)),
          'Had the proceeds been below %s, the same computation would have '
          'produced a {loss}, reported net on one line in exactly the same '
          'way.' % money(_nbv)],
         {'carrying': ('Cost less the depreciation charged to date.',
                       'Students measure the gain against the original cost. '
                       'That ignores every year of depreciation already '
                       'charged.'),
          money(N.gain_disposal): ('%s less %s.'
                                   % (money(N.disposal_proceeds),
                                      money(_nbv)), ''),
          'debited': ('A credit balance is cleared by a debit.', ''),
          'loss': ('The same line, the other way.', '')},
         [money(N.disposal_proceeds), 'original', 'credited']),
        ('journal', [
            ('J1', ('The machine sold for %s, against a carrying amount of %s.'
                    % (money(N.disposal_proceeds), money(_nbv)),
                    'Four lines, because two accounts have to be emptied.'),
             [('Cash', 0, '', ''),
              ('Accumulated Depreciation', 0, '', ''),
              ('Machinery', 1, '', ''),
              ('Gain on Disposal', 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Proceeds received', N.disposal_proceeds,
         [('Cost of the machine removed', -N.disposal_cost),
          ('Accumulated depreciation removed', N.disposal_accum)],
         'Gain reported, net', N.gain_disposal),

        ('part', 'Part 4 · When does a cost become an expense?',
         'three bases, in order'),

        ('prose', 'A cost is charged against a period on one of three bases, '
                  'and they are tried in order. If the cost can be traced to a '
                  'particular revenue it is charged with that revenue. If it '
                  'cannot, but it clearly benefits several periods, it is '
                  'spread over them. If neither holds, it is charged at once.',
         'R2'),

        ('task', 'Exercise 1D',
         'Name the three bases of expense recognition and say when each '
         'applies.',
         'Read and complete. Write one word in each space.',
         ['The paragraph above, and Volume 4 Handout 1 on cost of goods sold.'],
         ['The first basis is the one cost of goods sold uses, and the exam '
          'names it after the relationship it relies on.',
          'The second is the one depreciation uses, and it needs a defensible '
          'pattern rather than an exact one.',
          'The last blank is what the third basis does with a cost that '
          'benefits nothing identifiable.']),
        ('fill', 'R2',
         ['The first basis associates cause and {effect}. A unit of inventory '
          'carries its own cost and that cost is charged in the period the unit '
          'is sold, which is why cost of goods sold of %s sits directly beneath '
          'sales of %s.' % (money(N.cogs), money(N.sales)),
          'Many costs cannot be traced to any one sale. A machine helps produce '
          'everything made over its life, so its cost is spread by systematic '
          'and rational {allocation}, which is what depreciation of %s is.'
          % money(N.depreciation),
          'The pattern has to be defensible rather than exact. Straight-line '
          'is accepted not because it is accurate but because it is '
          '{systematic} and nobody can show a better one.',
          'Where neither basis works, the cost is recognised {immediately}. A '
          'fine, an advertising campaign of unknown effect and most '
          'administrative salaries all fall here.'],
         {'effect': ('The exam’s own phrase for the first basis.', ''),
          'allocation': ('Spread it, because you cannot trace it.', ''),
          'systematic': ('Defensible and consistent, not precise.', ''),
          'immediately': ('No future benefit, no reason to carry it.',
                          'Students look for a cost to capitalise. Where no '
                          'identifiable benefit exists, carrying it forward '
                          'creates an asset that is not one.')},
         ['revenue', 'estimate', 'gradually']),
        ('fig', 'fork', 'Which basis charges this cost?',
         [('Can the cost be traced to a particular revenue?',
           'YES → charge it with that revenue, cause and effect', INC),
          ('Does it clearly benefit several identifiable periods?',
           'YES → spread it, systematic and rational allocation', SLATE),
          ('Is there no identifiable future benefit at all?',
           'YES → charge it immediately, in full', EXP)]),

        ('part', 'Part 5 · Applying the three bases',
         'six of Northwind’s costs'),

        ('task', 'Exercise 1E',
         'Decide which recognition basis applies to each of six costs.',
         'Complete both right-hand columns. One phrase in each cell.',
         ['Exercise 1D.'],
         ['Two of the six are traceable to particular sales, and one of those '
          'two is a commission.',
          'Two are spread over periods, and they are the two halves of the %s '
          'of depreciation and amortisation.' % money(N.dep_amort),
          'Two benefit nothing identifiable, and one of them buys the company '
          'nothing at all.']),
        ('table', _THREEH, _three(blank=True), EXP, _THREEW),
        ('answers', 12),
        ('fig', 'buckets', 'Northwind’s costs, by recognition basis',
         [('CAUSE AND EFFECT', INC,
           ['Cost of goods sold %s' % money(N.cogs),
            'Sales commissions',
            'Charged with the sale that caused them']),
          ('SYSTEMATIC ALLOCATION', SLATE,
           ['Depreciation %s' % money(N.depreciation),
            'Amortisation %s' % money(N.amortisation),
            'Spread over the periods benefited']),
          ('IMMEDIATE RECOGNITION', EXP,
           ['Administrative salaries %s' % money(N.admin),
            'A fine, and most advertising',
            'No identifiable future benefit'])],
         'The three bases are tried in that order, and the third is reached '
         'only when the first two genuinely do not apply.'),

        ('watch', 'Matching is a reason for charging a cost, not a licence to '
                  'carry one. A cost that benefits no identifiable future '
                  'period cannot be deferred to improve this year’s result, '
                  'however neatly deferring it would smooth the profit.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The difference between a revenue and a gain is that a gain:',
         ['Is always smaller',
          'Arises from a transaction peripheral to the company’s main '
          'activities and is reported net',
          'Is not taxable',
          'Does not affect equity'],
         1, 'Level A',
         'Source and presentation, not size. (A) is the intuitive answer and '
         'fails on a company that sells a building for more than a year of '
         'trading brings in.'),

        ('mcq', 'A machine that cost %s with %s of accumulated depreciation is '
                'sold for %s. The result is:'
         % (money(N.disposal_cost), money(N.disposal_accum),
            money(N.disposal_proceeds)),
         ['A loss of %s' % money(N.disposal_cost - N.disposal_proceeds),
          'A gain of %s' % money(N.gain_disposal),
          'Revenue of %s' % money(N.disposal_proceeds),
          'No gain or loss'],
         1, 'Level A',
         'The carrying amount is %s, so %s of proceeds is a %s gain. (A) '
         'compares the proceeds with the original cost and ignores the '
         'depreciation already charged.'
         % (money(_nbv), money(N.disposal_proceeds),
            money(N.gain_disposal))),

        ('mcq', 'Depreciation is an example of which basis of expense '
                'recognition?',
         ['Associating cause and effect',
          'Systematic and rational allocation',
          'Immediate recognition',
          'Realisation'],
         1, 'Level B',
         'No single sale can be traced to a machine, so its cost is spread on a '
         'defensible pattern. (A) is the basis cost of goods sold uses, where '
         'the trace to a particular sale does exist.'),

        ('mcq', 'A company pays %s for an advertising campaign whose effect on '
                'future sales cannot be estimated. The cost is:'
         % money(200_000),
         ['Capitalised and amortised over three years',
          'Recognised immediately as an expense',
          'Charged against the revenue it generates',
          'Deferred until the campaign ends'],
         1, 'Level B',
         'With no identifiable future benefit there is nothing to allocate and '
         'nothing to trace, so the cost is charged at once. (A) is the answer '
         'that creates an asset out of a hope.'),

        ('mcq', 'Which of the following is reported net rather than gross?',
         ['Sales to customers',
          'The result of selling a delivery van',
          'Cost of goods sold',
          'Interest expense'],
         1, 'Level B',
         'A disposal is peripheral, so proceeds and carrying amount are netted '
         'into one line. (A) and (C) are both gross and shown separately, '
         'which is exactly the presentation a gain avoids.'),

        ('mcq', 'A warehouse is destroyed by fire and the uninsured carrying '
                'amount is written off. The write-off is:',
         ['An expense, because it arose in the course of business',
          'A loss, because it arose from an event peripheral to operations',
          'A reduction of revenue',
          'An adjustment to retained earnings'],
         1, 'Level C',
         'A loss can arise from an event with no counterparty at all, and that '
         'is the half of the definition this question tests. (A) misses it: '
         'operating in a building is not the same as being in the business of '
         'losing one.'),

        ('mcq', 'Northwind’s %s of sales and %s gain on disposal both increased '
                'equity. The reason they are presented differently is:'
         % (money(N.sales), money(N.gain_disposal)),
         ['The gain is smaller',
          'Selling components is Northwind’s ongoing major activity and selling '
          'machinery is not',
          'The gain is not taxable',
          'The machine was fully depreciated'],
         1, 'Level C',
         'Classification turns on the activity, so the same machine sale would '
         'be revenue in the hands of a machinery dealer. (D) is false on the '
         'figures as well: %s of the %s cost remained.'
         % (money(_nbv), money(N.disposal_cost))),

        ('tip', 'For any item of performance, ask two questions in order: is '
                'this what the company is in business to do, and is the figure '
                'in front of me gross or net? The first decides revenue against '
                'gain, and the second is how you can tell which one a statement '
                'has already used.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the completed classification'),
        ('table', _FOURH, _four(), INC, _FOURW),
        ('h3', 'Exercise 1E · the completed recognition bases'),
        ('table', _THREEH, _three(), EXP, _THREEW),
        ('h3', 'Exercise 1C · the disposal entry, completed'),
        ('journal', [
            ('J1', 'The machine sold for %s.' % money(N.disposal_proceeds),
             [('Cash', 0, money(N.disposal_proceeds), ''),
              ('Accumulated Depreciation', 0, money(N.disposal_accum), ''),
              ('Machinery', 1, '', money(N.disposal_cost)),
              ('Gain on Disposal', 1, '', money(N.gain_disposal))]),
        ]),
        ('prose', 'The entry balances at %s on each side, and only %s of it '
                  'reaches the income statement. The other three lines move '
                  'assets about.'
                  % (money(N.disposal_proceeds + N.disposal_accum),
                     money(N.gain_disposal)), 'R2'),
    ],
)
