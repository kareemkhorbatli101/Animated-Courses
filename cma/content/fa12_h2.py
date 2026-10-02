# -*- coding: utf-8 -*-
"""Volume 12, Handout 2 — Intangibles: Development Costs and Revaluation.

Covers A.2 ff(ii): the two named differences in accounting for intangible
assets, worked against Volume 5's figures.
"""
from fadata import N, IF, Y
from data import money, num

GAAP, IFRS, BOTH, SLATE = '1F6F8F', 'A05A2B', '2E7D5B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_DEVH = ['The %s spent on the new sensor' % money(IF.dev_spend),
         'US GAAP', 'IFRS']
_DEVW = [48, 26, 26]


def _dev(blank=False):
    def c(v):
        return '' if blank else v
    research = IF.dev_spend - IF.dev_capitalisable
    return [
        ['Research phase, before feasibility was established',
         money(research), money(research)],
        ['Development phase, after the six criteria were met',
         c(money(IF.dev_capitalisable)), c(money(IF.dev_capitalisable))],
        ['Charged to profit in %s' % Y, c(money(IF.dev_expensed_gaap)),
         c(money(IF.dev_expensed_ifrs))],
        ['Recognised as an intangible asset', c('Nil'),
         c(money(IF.dev_capitalisable))],
    ]


_CRITH = ['The six development criteria', 'Met for the sensor?']
_CRITW = [72, 28]


def _crit(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Technical feasibility of completing the asset', c('Yes')],
        ['Intention to complete it and use or sell it', c('Yes')],
        ['Ability to use or sell it', c('Yes')],
        ['It will generate probable future economic benefits', c('Yes')],
        ['Adequate technical, financial and other resources to complete it',
         c('Yes')],
        ['Ability to measure the expenditure reliably', c('Yes')],
    ]


_REVH = ['', 'Cost model', 'Revaluation model']
_REVW = [30, 35, 35]


def _rev(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Carried at', 'Cost less amortisation',
         c('Fair value less later amortisation')],
        ['Permitted under US GAAP', 'Yes', c('No')],
        ['Permitted under IFRS', 'Yes', c('Yes, if an active market exists')],
        ['An increase goes to', 'Nowhere, it is not recognised',
         c('Other comprehensive income, as a revaluation surplus')],
        ['A decrease goes to', 'Profit, as an impairment',
         c('Profit, once any surplus on that asset is used up')],
    ]


HANDOUT = dict(
    n=2,
    title='Intangibles: Development Costs and Revaluation',
    subtitle='Northwind spends %s developing a sensor. One framework charges '
             'all of it to profit and the other carries %s as an asset.'
             % (money(IF.dev_spend), money(IF.dev_capitalisable)),
    register='R2',

    lang=dict(
        register='R2 throughout, with the six criteria drilled as a '
                 'classification because the exam quotes them.',
        collocations=['establish technical feasibility',
                      'capitalise development expenditure',
                      'charge research to profit',
                      'carry an asset at fair value',
                      'credit a revaluation surplus',
                      'reverse a revaluation on disposal'],
        pairs=['research / development',
               'cost model / revaluation model',
               'expensed / capitalised',
               'revaluation surplus / impairment loss'],
        nots=['IFRS does not capitalise research. Only the development phase, '
              'and only once all six criteria are met.',
              'The revaluation model is not available for intangibles without '
              'an active market, which is most of them.'],
    ),

    objectives=[
        'Say how each framework treats research and development spending.',
        'State the six criteria IFRS requires before development costs are '
        'capitalised.',
        'Compute the charge to profit under both frameworks.',
        'Say which measurement models each framework permits.',
        'Say where a revaluation increase and a decrease are recognised.',
    ],

    terms=[
        ('research',
         'Original investigation undertaken to gain new scientific or technical '
         'knowledge, with no certainty of a product.', 'البحث',
         'Charged to profit under both frameworks, without exception. The '
         'difference in this handout is about the phase that follows.'),
        ('development',
         'The application of research findings to a plan for a new or '
         'substantially improved product or process.', 'التطوير',
         'The phase where the frameworks part. IFRS capitalises it once six '
         'conditions are met; US GAAP charges it to profit.'),
        ('technical feasibility',
         'Demonstrated ability to complete an asset so that it will be '
         'available for use or sale.', 'الجدوى الفنية',
         'The first of the six criteria, and the one that fixes the date '
         'capitalisation may begin.'),
        ('cost model',
         'Carrying an asset at cost less accumulated amortisation and '
         'impairment.', 'نموذج التكلفة',
         'Permitted under both frameworks, and the only model US GAAP allows.'),
        ('revaluation model',
         'Carrying an asset at fair value at the revaluation date, less later '
         'amortisation and impairment.', 'نموذج إعادة التقييم',
         'An IFRS option, and for an intangible only where an active market '
         'exists. US GAAP does not permit it at all.'),
        ('revaluation surplus',
         'The credit in other comprehensive income arising when an asset is '
         'revalued upwards.', 'فائض إعادة التقييم',
         'The item Volume 9 named as never recycled through profit. On disposal '
         'it may be transferred within equity.'),
    ],

    blocks=[
        ('scene', 'A sensor that took two years', [
            'Northwind spent %s during %s on a new sensor. The first %s went '
            'on investigating whether the idea would work at all.'
            % (money(IF.dev_spend), Y,
               money(IF.dev_spend - IF.dev_capitalisable)),
            'By mid-year it did work. The remaining %s went on turning a '
            'working principle into a product the plant could make.'
            % money(IF.dev_capitalisable),
            'Under US GAAP the whole %s is charged to profit. Under IFRS the '
            'second %s is an intangible asset.'
            % (money(IF.dev_spend), money(IF.dev_capitalisable)),
            'And once it is an asset, a second difference opens up: one '
            'framework will let Northwind revalue it and the other will not.',
        ]),
        ('fig', 'ranked', 'The same %s, charged two ways'
         % money(IF.dev_spend),
         [('US GAAP — charged to profit in %s' % Y, IF.dev_expensed_gaap,
           money(IF.dev_expensed_gaap), GAAP),
          ('IFRS — charged to profit in %s' % Y, IF.dev_expensed_ifrs,
           money(IF.dev_expensed_ifrs), IFRS),
          ('IFRS — carried as an intangible asset', IF.dev_capitalisable,
           money(IF.dev_capitalisable), BOTH)],
         'The second and third bars add to the first. Nothing is saved: the '
         'difference is which year the %s reaches profit.'
         % money(IF.dev_capitalisable),
         'Spending in %s on the new sensor' % Y),

        ('part', 'Part 1 · Research and development',
         'one phase agreed, one disputed'),

        ('task', 'Exercise 2A',
         'Say how each framework treats research and development spending.',
         'Read and complete. Write one word in each space.',
         ['Volume 5 Handout 5, on recognising an intangible asset.',
          'Volume 9 Handout 1, on immediate recognition.'],
         ['Both frameworks agree completely about the first %s. Ask what is '
          'missing at that stage.'
          % money(IF.dev_spend - IF.dev_capitalisable),
          'Once the sensor works, the question becomes whether a future benefit '
          'can be identified. One framework says it can.',
          'The last blank is why US GAAP refuses to capitalise anyway, and it '
          'is a choice about comparability rather than about the facts.']),
        ('fill', 'R2',
         ['Both frameworks charge research to profit. At that stage nobody can '
          'say whether there will ever be a product, so no future benefit can '
          'be {identified} and Volume 9’s third basis applies: recognise it '
          'immediately.',
          'Development is different. By then the sensor works, Northwind means '
          'to make it and the money spent can be measured, so a future benefit '
          'can be identified and IFRS requires the %s to be {capitalised}.'
          % money(IF.dev_capitalisable),
          'US GAAP charges development to profit as well, with very few '
          'exceptions. The reason is not that the benefit is absent but that '
          'the judgement about when it arrives is too {uncertain} to be '
          'comparable between companies.',
          'So the whole %s is expensed under US GAAP and only %s under IFRS. '
          'Over the asset’s life the total charged is the {same}, because the '
          'capitalised amount is amortised.'
          % (money(IF.dev_expensed_gaap), money(IF.dev_expensed_ifrs))],
         {'identified': ('No product yet, no benefit to point at.', ''),
          'capitalised': ('Required, not permitted, once the criteria are '
                          'met.',
                          'Students treat IFRS capitalisation as an election. '
                          'Once all six criteria are met it is mandatory.'),
          'uncertain': ('A judgement about a date, made by management.', ''),
          'same': ('Amortisation gets there in the end.', '')},
         ['measured', 'reliable', 'higher']),
        ('fig', 'timeline', 'One project, two phases',
         [('Research phase', '%s spent investigating. Charged to profit '
                             'under both frameworks.'
           % money(IF.dev_spend - IF.dev_capitalisable), BOTH),
          ('Feasibility established', 'The sensor works. IFRS may begin '
                                      'capitalising from this date.', SLATE),
          ('Development phase', '%s spent. An asset under IFRS, an expense '
                               'under US GAAP.'
           % money(IF.dev_capitalisable), IFRS)],
         'The middle date is where the frameworks separate, and it is a date '
         'management establishes rather than one the calendar fixes.'),

        ('part', 'Part 2 · The six criteria',
         'all of them, not most of them'),

        ('task', 'Exercise 2B',
         'State the six criteria IFRS requires before development costs may be '
         'capitalised.',
         'Complete the right-hand column. Write Yes or No in each cell.',
         ['Exercise 2A.'],
         ['All six must be met. One failure means the spending is charged to '
          'profit however promising the project is.',
          'Two of the six are about the company rather than the asset: what it '
          'intends and what resources it has.',
          'Northwind meets all six for the sensor, which is why %s is '
          'capitalised under IFRS.' % money(IF.dev_capitalisable)]),
        ('table', _CRITH, _crit(blank=True), IFRS, _CRITW),
        ('answers', 6),
        ('fig', 'buckets', 'The six criteria, grouped',
         [('ABOUT THE ASSET', IFRS,
           ['Technical feasibility of completing it',
            'Probable future economic benefits',
            '']),
          ('ABOUT THE COMPANY', GAAP,
           ['Intention to complete and use or sell',
            'Ability to use or sell',
            'Adequate resources to complete']),
          ('ABOUT THE ACCOUNTING', SLATE,
           ['Expenditure can be measured reliably',
            'All six, or none of them',
            ''])],
         'The last box is the rule students forget. Five out of six is not '
         'partial capitalisation; it is an expense.'),

        ('part', 'Part 3 · The charge to profit',
         'the two columns, computed'),

        ('task', 'Exercise 2C',
         'Compute the charge to profit and the asset recognised under both '
         'frameworks.',
         'Complete the grid. The two phases are given.',
         ['Exercises 2A and 2B.'],
         ['The research row is the same under both. Only the development row '
          'moves.',
          'Under US GAAP add the two phases together; under IFRS add only the '
          'research.',
          'The last row is nil under one framework and %s under the other, and '
          'the two columns of each row must still account for the whole %s.'
          % (money(IF.dev_capitalisable), money(IF.dev_spend))]),
        ('table', _DEVH, _dev(blank=True), GAAP, _DEVW),
        ('answers', 6),
        ('fig', 'bridge',
         'Charged to profit under US GAAP', IF.dev_expensed_gaap,
         [('Development costs capitalised under IFRS',
           -IF.dev_capitalisable)],
         'Charged to profit under IFRS', IF.dev_expensed_ifrs),

        ('part', 'Part 4 · Measuring it afterwards',
         'cost, or fair value'),

        ('prose', 'Once an intangible is on the balance sheet, a second '
                  'difference opens. US GAAP permits one measurement model and '
                  'IFRS permits two, though the second is available only where '
                  'an active market lets fair value be determined, which for '
                  'most intangibles it does not.', 'R2'),

        ('task', 'Exercise 2D',
         'Say which measurement models each framework permits and how each one '
         'treats a change in value.',
         'Complete the grid where it is blank.',
         ['Exercise 2C, and Volume 5 Handout 4 on impairment.'],
         ['One of the two models is permitted under both frameworks, and it is '
          'the one Volume 5 used throughout.',
          'The increase row is the interesting one: under the cost model an '
          'increase is not recognised at all.',
          'The decrease row is where the models converge, and the condition in '
          'that cell matters.']),
        ('table', _REVH, _rev(blank=True), SLATE, _REVW),
        ('answers', 7),
        ('fig', 'matrix', 'An increase and a decrease, under each model',
         ['Cost model, both frameworks', 'Revaluation model, IFRS only'],
         ['Value rises', 'Value falls'],
         [['Not recognised. The asset stays at cost less amortisation.',
           'Tested for impairment, and any loss goes to profit'],
          ['Credited to other comprehensive income as a revaluation surplus',
           'Charged against that asset’s surplus first, then to profit']],
         'The asymmetry is the point: an increase can reach equity and never '
         'profit, while a decrease reaches profit as soon as the surplus on '
         'that same asset runs out.'),

        ('part', 'Part 5 · Why the choice is narrower than it looks',
         'the active market condition'),

        ('task', 'Exercise 2E',
         'Say when the revaluation model is actually available for an '
         'intangible.',
         'Read and complete. Write one word in each space.',
         ['Exercise 2D.'],
         ['Fair value has to come from somewhere. Ask what Northwind would '
          'look at to value its own sensor design.',
          'An asset unique to one company has no market price, because nothing '
          'comparable is traded.',
          'The last blank is where the surplus goes when a revalued asset is '
          'finally sold, and it does not pass through profit.']),
        ('fill', 'R2',
         ['The revaluation model needs a fair value, and for an intangible that '
          'means an {active} market in which comparable assets are regularly '
          'traded.',
          'Most intangibles have no such market. Northwind’s sensor design is '
          'specific to its own products, so nothing comparable is traded and no '
          'fair value can be determined. The model is therefore {unavailable} '
          'to it, even under IFRS.',
          'Where it is available, as for some licences and quotas, the whole '
          'class of assets must be revalued rather than the one asset the '
          'company would {prefer} to revalue.',
          'And when a revalued asset is sold, the surplus sitting in equity is '
          'transferred within equity, usually to retained {earnings}. It never '
          'passes through profit, which is what Volume 9 meant by the exception '
          'to recycling.'],
         {'active': ('Comparable assets, regularly traded.', ''),
          'unavailable': ('No market, no fair value, no model.',
                          'Students read the IFRS option as freely available. '
                          'For most intangibles it is not available at all.'),
          'prefer': ('The whole class, not one asset.', ''),
          'earnings': ('Within equity, never through profit.', '')},
         ['liquid', 'mandatory', 'surplus']),
        ('fig', 'fork', 'Can this intangible be revalued?',
         [('Does the company report under IFRS?',
           'NO → the cost model is the only model US GAAP permits', GAAP),
          ('Is there an active market in comparable assets?',
           'NO → no fair value, so the cost model applies anyway', RUST),
          ('Both satisfied?',
           'YES → revalue the whole class, with increases to other '
           'comprehensive income', IFRS)]),

        ('watch', 'IFRS capitalisation of development costs is mandatory once '
                  'all six criteria are met, not an election. A question that '
                  'offers a company the choice of capitalising or expensing '
                  'under IFRS is offering a distractor, and the same question '
                  'under US GAAP has no choice either.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Research costs are:',
         ['Capitalised under IFRS and expensed under US GAAP',
          'Expensed under both frameworks',
          'Capitalised under both frameworks',
          'Capitalised under US GAAP and expensed under IFRS'],
         1, 'Level A',
         'Research is expensed under both; only development divides them. (A) '
         'is the answer the topic’s reputation invites and it moves the '
         'difference one phase too early.'),

        ('mcq', 'A company spends %s on a project, of which %s relates to the '
                'development phase after all six IFRS criteria were met. Under '
                'IFRS the charge to profit is:'
         % (money(IF.dev_spend), money(IF.dev_capitalisable)),
         [money(IF.dev_expensed_gaap), money(IF.dev_expensed_ifrs),
          'Nil', money(IF.dev_capitalisable)],
         1, 'Level B',
         'Only the research phase is expensed: %s less %s is %s. (A) is the US '
         'GAAP figure, which charges the whole amount.'
         % (money(IF.dev_spend), money(IF.dev_capitalisable),
            money(IF.dev_expensed_ifrs))),

        ('mcq', 'Under IFRS, capitalisation of development costs once all six '
                'criteria are met is:',
         ['Permitted but not required', 'Required',
          'Permitted only for listed companies', 'Prohibited'],
         1, 'Level B',
         'Required. The six criteria are a test, not an option, and once they '
         'are passed the expenditure is an asset. (A) is the most common wrong '
         'answer on ff(ii).'),

        ('mcq', 'Which measurement models may be used for an intangible asset?',
         ['The cost model under US GAAP; the cost or revaluation model under '
          'IFRS',
          'The revaluation model under both',
          'The cost model under both',
          'The revaluation model under US GAAP only'],
         0, 'Level B',
         'US GAAP permits cost alone; IFRS permits either, subject to an active '
         'market. (C) is right about US GAAP and wrong about IFRS, which makes '
         'it the distractor that catches a half-learned answer.'),

        ('mcq', 'An intangible carried under the IFRS revaluation model '
                'increases in value. The increase is recognised:',
         ['In profit', 'In other comprehensive income, as a revaluation '
                       'surplus',
          'Directly in retained earnings', 'Not at all'],
         1, 'Level B',
         'The surplus goes to other comprehensive income and stays in equity. '
         '(A) would let a company report profit on an asset it has not sold, '
         'which is precisely what the surplus prevents.'),

        ('mcq', 'A revalued intangible falls in value by more than the '
                'revaluation surplus previously recognised on it. The excess '
                'is:',
         ['Charged against the surplus on other assets',
          'Charged to profit', 'Not recognised',
          'Charged to retained earnings'],
         1, 'Level C',
         'The surplus is tracked asset by asset, so once that asset’s surplus '
         'is exhausted the rest is an expense. (A) is the trap: surpluses are '
         'not pooled across a class.'),

        ('mcq', 'Northwind’s sensor design is specific to its own products. '
                'Under IFRS it:',
         ['May be revalued, because IFRS permits the revaluation model',
          'Must be carried at cost, because there is no active market in '
          'comparable assets',
          'Must be revalued annually',
          'May be revalued only if the surplus is credited to profit'],
         1, 'Level C',
         'The model needs a fair value from an active market, and a design '
         'unique to one company has none. (A) is the error of reading a '
         'permission without reading its condition.'),

        ('tip', 'On this learning outcome, two sentences cover most of the '
                'marks: research is expensed under both, and development is '
                'capitalised under IFRS when six criteria are met and expensed '
                'under US GAAP. Add that only IFRS permits revaluation, and '
                'only where an active market exists.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2C · the two charges'),
        ('table', _DEVH, _dev(), GAAP, _DEVW),
        ('h3', 'Exercise 2D · the two measurement models'),
        ('table', _REVH, _rev(), SLATE, _REVW),
        ('prose', 'The columns of the first grid differ by exactly the %s of '
                  'development spending. US GAAP charges the whole %s now; IFRS '
                  'charges %s now and the rest through amortisation over the '
                  'asset’s life, so the total reaching profit is identical and '
                  'arrives later.'
                  % (money(IF.dev_capitalisable),
                     money(IF.dev_expensed_gaap),
                     money(IF.dev_expensed_ifrs)), 'R2'),
        ('prose', 'The second grid is the narrower difference in practice. '
                  'Northwind cannot use the revaluation model for its sensor '
                  'under either framework, because there is no active market in '
                  'comparable designs. The option exists under IFRS and almost '
                  'never applies to an internally generated intangible.', 'R2'),
    ],
)
