# -*- coding: utf-8 -*-
"""Volume 5, Handout 5 — Intangibles, Goodwill and the Impairment Test.

Covers the second part of A.2(n): the accounting for impairment of intangible
assets, including goodwill.
"""
from fadata import N, P, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

_CLSH = ['Intangible', 'Finite or indefinite life?', 'Amortised?',
         'Tested for impairment']
_CLSW = [28, 24, 16, 32]


def _cls(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['A purchased customer list, 10-year life', c('Finite'), c('Yes'),
         c('Only when an indicator appears')],
        ['A patent with 12 years left to run', c('Finite'), c('Yes'),
         c('Only when an indicator appears')],
        ['A brand expected to be renewed indefinitely', c('Indefinite'),
         c('No'), c('At least annually')],
        ['Goodwill from an acquisition', c('Indefinite'), c('No'),
         c('At least annually, at the reporting unit')],
        ['A brand the company built itself', c('Not recognised'), c('—'),
         c('— it is not on the balance sheet at all')],
    ]


_GWH = ['Goodwill impairment test', 'Amount']
_GWW = [66, 34]


def _gw(blank=False):
    def c(v):
        return '' if blank else v
    gap = P.unit_carrying - P.unit_fair_value
    return [
        ['Carrying amount of the reporting unit, including goodwill',
         money(P.unit_carrying)],
        ['Fair value of the reporting unit', money(P.unit_fair_value)],
        ['Shortfall', c(money(gap))],
        ['Goodwill carried within the unit', money(P.goodwill_carrying)],
        ['Impairment loss, limited to the goodwill carried',
         c(money(P.goodwill_loss))],
        ['Goodwill after the write-down',
         c(money(P.goodwill_carrying - P.goodwill_loss))],
    ]


HANDOUT = dict(
    n=5,
    title='Intangibles, Goodwill and the Impairment Test',
    subtitle='An asset with no physical form, and one that cannot be sold at all. '
             'Whether it has a life decides everything that follows.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage on why '
                 'goodwill is treated as it is.',
        collocations=['amortise an intangible over its useful life',
                      'assign goodwill to a reporting unit',
                      'test an indefinite-life intangible annually',
                      'recognise goodwill on an acquisition',
                      'allocate the purchase price',
                      'cap a loss at the goodwill carried'],
        pairs=['finite life / indefinite life',
               'amortisation / depreciation',
               'purchased / internally generated',
               'goodwill / other intangibles'],
        nots=['Indefinite does not mean infinite. It means no foreseeable limit, '
              'and it is reassessed every year.',
              'Goodwill is not a valuation of a reputation. It is the residual '
              'from an acquisition, and nothing else.'],
    ),

    objectives=[
        'Classify an intangible by whether its useful life is finite or '
        'indefinite.',
        'Say which intangibles are amortised and which are tested annually '
        'instead.',
        'Explain what goodwill is and where it comes from.',
        'Compute a goodwill impairment loss, including the cap.',
        'Say why an internally generated brand never appears on the balance '
        'sheet.',
    ],

    terms=[
        ('intangible asset',
         'An identifiable non-monetary asset with no physical substance.',
         'أصل غير ملموس',
         'Identifiable is the word that matters: it must be separable or arise '
         'from contractual rights. Goodwill is not identifiable, which is why it '
         'is accounted for separately.'),
        ('finite-life intangible',
         'An intangible whose useful life can be estimated.',
         'أصل غير ملموس محدد العمر',
         'Amortised over that life, and tested for impairment only when an '
         'indicator appears — exactly like a machine.'),
        ('indefinite-life intangible',
         'An intangible with no foreseeable limit to the period over which it '
         'will generate cash flows.', 'أصل غير ملموس غير محدد العمر',
         'Not amortised, and tested at least annually. The classification is '
         'reassessed every year.'),
        ('amortisation',
         'The systematic write-off of a finite-life intangible over its useful '
         'life.', 'الإطفاء',
         'The same idea as depreciation, under a different name, and almost '
         'always on a straight line basis.'),
        ('reporting unit',
         'An operating segment, or one level below it, at which goodwill is '
         'tested.', 'وحدة التقرير',
         'Goodwill cannot be tested on its own, because it generates no cash '
         'flows by itself. It is tested inside the unit it was assigned to.'),
    ],

    blocks=[
        ('scene', 'The %s on the balance sheet that nobody can touch'
                  % money(N.intangibles + N.goodwill), [
            'Northwind reports intangible assets of %s and goodwill of %s. '
            'Neither can be seen in the warehouse, and one of them could not be '
            'sold even if a buyer were found.'
            % (money(N.intangibles), money(N.goodwill)),
            'The intangibles are a customer list bought three years ago when '
            'Northwind acquired a competitor, together with some purchased '
            'software. Both have lives that can be estimated, so both are being '
            'written off.',
            'The goodwill arose on that same acquisition. It has no life that can '
            'be estimated, it is never written off, and it is tested every single '
            'year whether anything has happened or not.',
            'This handout explains why those two sentences are so different.',
        ]),
        ('fig', 'ranked', 'Northwind’s intangible assets',
         [('Goodwill — never amortised, tested every year',
           N.goodwill, money(N.goodwill), RUST),
          ('Customer list and software — amortised over their lives',
           N.intangibles, money(N.intangibles), SL),
          ('Amortisation charged this year', N.amortisation,
           money(N.amortisation), SYD)],
         'Two lines on one balance sheet, treated in opposite ways. The '
         'difference is whether a useful life can be estimated.',
         '%s at 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · Finite or indefinite?',
         'the question that decides everything'),

        ('task', 'Exercise 5A',
         'Classify five intangibles and say what follows from each classification.',
         'Complete the table. Three columns follow from the first.',
         ['Handout 4, for when a long-lived asset is tested.'],
         ['Decide the life first. Everything in the other three columns follows '
          'from it mechanically.',
          'Indefinite does not mean the asset lasts forever. It means no '
          'foreseeable limit can be put on it.',
          'The last row is not an asset at all, and saying why is the point of '
          'Part 4.']),
        ('table', _CLSH, _cls(blank=True), SL, _CLSW),
        ('answers', 14),
        ('fig', 'fork', 'One question, and three consequences follow',
         [('Can a useful life be estimated?',
           'YES → FINITE: amortise it, and test only on an indicator', SL),
          ('Is there no foreseeable limit?',
           'NO LIFE → INDEFINITE: do not amortise, and test annually', RUST),
          ('Was it built rather than bought?',
           'It is not recognised at all — see Part 4', SLATE)]),

        ('part', 'Part 2 · Finite-life intangibles',
         'amortisation, and nothing new'),

        ('task', 'Exercise 5B',
         'Amortise a finite-life intangible and say how it differs from '
         'depreciation.',
         'Read and complete. Write one word in each space.',
         ['Exercise 5A'],
         ['The customer list cost %s and has a %d-year life. One division gives '
          'the annual charge.' % (money(P.list_cost), P.list_life),
          'Blank 3 is the residual value normally assumed for an intangible, and '
          'it is almost always the same figure.',
          'The last blank is what makes the treatment identical to a '
          'machine’s in every respect but the name.']),
        ('fill', 'R2',
         ['Northwind’s customer list cost %s and is being written off over '
          '%d years, so the annual charge is {%s}. The write-off of an intangible '
          'is called {amortisation} rather than depreciation, and that is the only '
          'real difference.'
          % (money(P.list_cost), P.list_life, money(P.list_amortisation)),
          'The residual value of an intangible is almost always assumed to be '
          '{nil}, because there is rarely a market in a half-used customer list or '
          'a patent with two years left on it. The whole cost is therefore written '
          'off over the life.',
          'The method is almost always straight line, for the honest reason given '
          'in Handout 3: where no pattern of consumption can be established, the '
          'simplest method is the most defensible.',
          'A finite-life intangible is tested for impairment on exactly the same '
          'basis as a machine — when an {indicator} appears, using the two '
          'steps from Handout 4, and not otherwise.'],
         {money(P.list_amortisation): ('%s ÷ %d years.'
                                       % (money(P.list_cost), P.list_life), ''),
          'amortisation': ('A different word, the same idea.', ''),
          'nil': ('Rarely a market in a part-used intangible.', ''),
          'indicator': ('Treated like any other long-lived asset.',
                        'Students test every intangible annually. Only the '
                        'indefinite-life ones and goodwill are tested on a '
                        'calendar.')},
         ['depreciation', 'cost', 'annually']),
        ('fig', 'scale',
         'A FINITE-LIFE INTANGIBLE',
         ['Amortised over its useful life',
          'Residual value usually nil',
          'Tested only when an indicator appears',
          'Treated exactly like a machine'],
         'AN INDEFINITE-LIFE INTANGIBLE',
         ['Never amortised',
          'No life to write it off over',
          'Tested at least annually',
          'The classification is reassessed every year']),

        ('part', 'Part 3 · Goodwill',
         'what it is, and the test it gets'),

        ('prose', 'Goodwill is the hardest asset on any balance sheet to think '
                  'about clearly, and most of the difficulty comes from the name. '
                  'It is not a measurement of a company’s reputation, and it '
                  'has nothing to do with being well regarded.', 'R2'),
        ('prose', 'It is a residual. When one company buys another, it pays a '
                  'price; the identifiable assets and liabilities acquired are '
                  'measured at fair value; and whatever the price exceeds those '
                  'net assets by is recorded as goodwill. It is what is left over '
                  'after everything identifiable has been accounted for.', 'R2'),

        ('task', 'Exercise 5C',
         'Say what goodwill is, where it comes from, and why it is tested '
         'differently.',
         'Read and complete.',
         ['Exercise 5B, and the two paragraphs above.'],
         ['Blank 1 is the word that describes goodwill’s place in an '
          'acquisition calculation.',
          'Blank 3 is the only event that can ever create goodwill.',
          'The last blank is the unit goodwill is tested inside, because it '
          'generates no cash flows on its own.']),
        ('fill', 'R2',
         ['Goodwill is a {residual}. It is the excess of what was paid for a '
          'business over the fair value of the identifiable assets and liabilities '
          'acquired, and it is computed by subtraction rather than measured '
          'directly.',
          'It follows that goodwill can arise only on an {acquisition}. A company '
          'that builds an outstanding reputation over thirty years recognises no '
          'goodwill at all, because no transaction has ever established a price '
          'for it.',
          'Goodwill has no useful life that can be estimated, so it is never '
          '{amortised}. Instead it is tested for impairment at least annually, '
          'whether or not anything has happened — which is the opposite of '
          'the rule for every other long-lived asset.',
          'And it cannot be tested on its own, because it produces no cash flows '
          'by itself. On acquisition it is assigned to a reporting {unit}, and the '
          'test compares the carrying amount of that whole unit with the '
          'unit’s fair value.'],
         {'residual': ('Computed by subtraction, not measured.', ''),
          'acquisition': ('Only a purchase can create it.',
                          'Students think a successful company accumulates '
                          'goodwill. Trading well creates none at all.'),
          'amortised': ('No life, so no amortisation.', ''),
          'unit': ('Tested inside the unit it was assigned to.', '')},
         ['premium', 'merger', 'segment']),

        ('fig', 'bridge',
         'Price paid for the acquired business', 2_000_000,
         [('Less the fair value of the identifiable net assets acquired',
           -1_700_000)],
         'Goodwill — the residual', 300_000),

        ('task', 'Exercise 5D',
         'Compute a goodwill impairment loss, including the cap.',
         'Complete the schedule. Two subtractions and one comparison.',
         ['Exercise 5C'],
         ['Compare the carrying amount of the whole reporting unit with its fair '
          'value. The shortfall is the starting point.',
          'The loss cannot exceed the goodwill carried within the unit, and here '
          'that cap does not bite. Check whether it would.',
          'The write-down is applied to goodwill and never to the other assets of '
          'the unit.']),
        ('table', _GWH, _gw(blank=True), RUST, _GWW),
        ('answers', 3),
        ('fill', 'R2',
         ['The reporting unit stands at %s including goodwill, and its fair value '
          'is %s. The shortfall is {%s}.'
          % (money(P.unit_carrying), money(P.unit_fair_value),
             money(P.unit_carrying - P.unit_fair_value)),
          'That shortfall is the impairment loss, with one limit: it may not '
          'exceed the {goodwill} carried within the unit. Northwind’s unit '
          'carries %s of goodwill and the shortfall is %s, so the whole shortfall '
          'is recognised and the cap does not bite.'
          % (money(P.goodwill_carrying),
             money(P.unit_carrying - P.unit_fair_value)),
          'Had the shortfall been %s instead, the loss would have been limited to '
          'the %s of goodwill, because goodwill is the only asset the write-down '
          'may touch and it cannot be written below {nil}.'
          % (money(400_000), money(P.goodwill_carrying)),
          'After the write-down the unit carries %s of goodwill. And under US GAAP '
          'that loss is never {reversed}, however completely the unit recovers.'
          % money(P.goodwill_carrying - P.goodwill_loss)],
         {money(P.unit_carrying - P.unit_fair_value): (
             '%s − %s.' % (money(P.unit_carrying),
                                money(P.unit_fair_value)), ''),
          'goodwill': ('The cap, and the only asset written down.', ''),
          'nil': ('Goodwill cannot go negative.', ''),
          'reversed': ('Never reversed, under either framework.',
                       'Students apply the IFRS reversal rule to goodwill. '
                       'Neither framework permits a goodwill reversal.')},
         [money(P.unit_fair_value), 'cost', 'amortised']),
        ('fig', 'bridge',
         'Reporting unit, carrying amount', P.unit_carrying,
         [('Impairment loss, charged against goodwill', -P.goodwill_loss)],
         'Reporting unit after the write-down',
         P.unit_carrying - P.goodwill_loss),

        ('part', 'Part 4 · The brand that is not there',
         'internally generated intangibles'),

        ('task', 'Exercise 5E',
         'Say why a brand a company built itself never appears as an asset.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 5A to 5D'],
         ['Blank 1 is the problem with measuring something that was built rather '
          'than bought.',
          'Blank 3 is the odd consequence: two companies with identical brands '
          'report different balance sheets.',
          'The last blank is what a reader has to do about it.']),
        ('fill', 'R3',
         ['A brand that was bought has a price, because somebody paid it. A brand '
          'that was built has no price, and the cost of building it cannot be '
          'separated from the {cost} of running the business that built it.',
          'Advertising, service quality, reliability over twenty years: all of '
          'these created the brand, and all of them were also simply the costs of '
          'trading. There is no defensible way to say how much of them was '
          '{investment} in a brand, so the standards do not ask companies to '
          'guess.',
          'The consequence is uncomfortable and worth stating plainly. Two '
          'companies with identical brands report different balance sheets if one '
          'of them {bought} its brand and the other built it, and the one that '
          'built it — at no identifiable cost — reports the smaller '
          'total assets.',
          'Nothing in the statements corrects for that. A reader comparing an '
          'acquisitive company with an organic one has to hold the difference in '
          'mind, because the statements will not {hold} it for them.'],
         {'cost': ('Inseparable from the cost of trading.', ''),
          'investment': ('No defensible split exists.', ''),
          'bought': ('A price exists only where one was paid.', ''),
          'hold': ('The reader must adjust; the statements will not.',
                   'Students read a large goodwill balance as a sign of strength. '
                   'It is a sign of acquisition, which is a different thing.')},
         ['price', 'expense', 'sold']),
        ('fig', 'matrix', 'The same brand, two companies',
         ['Company that bought its brand', 'Company that built its brand'],
         ['On the balance sheet', 'Charged to income'],
         [['An intangible asset at the price paid',
           'Amortisation, or an annual impairment test'],
          ['Nothing at all',
           'Every dollar spent building it, as it was spent']],
         'Identical brands, opposite balance sheets. The difference is a '
         'transaction, not a business.'),

        ('watch', 'Goodwill is tested at least annually and is never amortised. '
                  'Every other long-lived asset is amortised or depreciated and is '
                  'tested only on an indicator. Getting those two the wrong way '
                  'round costs marks in both directions.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Goodwill arising on an acquisition should be:',
         ['Amortised over a maximum of 40 years',
          'Amortised over its estimated useful life',
          'Not amortised, and tested for impairment at least annually',
          'Written off immediately against equity'],
         2, 'Level A',
         'Goodwill has no estimable life, so it is tested annually instead of '
         'being written off over time. (A) describes a rule abolished many years '
         'ago that still appears in older texts, which is why it is offered.'),

        ('mcq', 'A reporting unit has a carrying amount of %s including goodwill '
                'of %s, and a fair value of %s. The goodwill impairment loss is:'
                % (money(P.unit_carrying), money(P.goodwill_carrying),
                   money(P.unit_fair_value)),
         [money(P.goodwill_carrying), money(P.goodwill_loss), money(0),
          money(P.unit_carrying - P.goodwill_carrying)],
         1, 'Level B',
         'The shortfall is %s − %s = %s, which is below the %s of goodwill '
         'carried, so the whole shortfall is recognised and the cap does not '
         'bite. (A) writes goodwill off entirely, which the cap permits but the '
         'shortfall does not require.'
         % (money(P.unit_carrying), money(P.unit_fair_value),
            money(P.goodwill_loss), money(P.goodwill_carrying))),

        ('mcq', 'A reporting unit carries goodwill of $200,000. The shortfall '
                'between its carrying amount and its fair value is $350,000. The '
                'goodwill impairment loss is:',
         ['$350,000', '$200,000', '$150,000', 'Nil'],
         1, 'Level C',
         'The loss is capped at the goodwill carried, because goodwill is the only '
         'asset the write-down may touch and it cannot go below nil. The remaining '
         '$150,000 shortfall is then considered under the ordinary impairment '
         'rules for the unit’s other assets.'),

        ('mcq', 'A company has built a widely recognised brand over twenty years '
                'without acquiring it. On the balance sheet the brand is:',
         ['Recognised at estimated fair value',
          'Recognised as goodwill',
          'Not recognised, because its cost cannot be separated from the cost of '
          'operating the business',
          'Recognised at the cost of the advertising that created it'],
         2, 'Level B',
         'No separable cost exists, so no asset is recognised. (B) is the common '
         'error: goodwill arises from an acquisition, never from trading well. (D) '
         'would require splitting advertising between brand-building and ordinary '
         'promotion, which nobody can do defensibly.'),

        ('mcq', 'An intangible asset with an indefinite useful life should be:',
         ['Amortised over 20 years',
          'Amortised over 40 years',
          'Not amortised, and tested for impairment at least annually',
          'Written off immediately'],
         2, 'Level A',
         'With no estimable life there is nothing to amortise over, so the asset '
         'is tested annually instead. Note that the classification is itself '
         'reassessed each year: indefinite does not mean permanent.'),

        ('mcq', 'A purchased patent with 12 years remaining is tested for '
                'impairment:',
         ['At least annually, like goodwill',
          'Only when an indicator of impairment appears',
          'Never, because it is being amortised',
          'Every three years'],
         1, 'Level B',
         'A finite-life intangible is treated exactly like a machine: amortised, '
         'and tested on an indicator. (A) applies the goodwill rule to the wrong '
         'asset, which is the mirror image of the error in the previous '
         'question.'),

        ('mcq', 'Under US GAAP, a goodwill impairment loss:',
         ['May be reversed if the reporting unit recovers',
          'May never be reversed',
          'Is reversed automatically on the next annual test',
          'Is reversed only if the unit is sold'],
         1, 'Level B',
         'Goodwill impairments are never reversed, under US GAAP or under IFRS. '
         'This is the one impairment question where the two frameworks agree, '
         'which makes it a useful fixed point among the differences in Volume '
         '12.'),

        ('tip', 'Ask one question about every intangible before anything else: can '
                'a useful life be estimated? Amortisation, the testing frequency '
                'and half the wrong answers all follow from that single '
                'classification.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5A · the completed classification'),
        ('table', _CLSH, _cls(), SL, _CLSW),
        ('h3', 'Exercise 5D · the completed goodwill test'),
        ('table', _GWH, _gw(), RUST, _GWW),
        ('bullets', [
            'Finite life: amortise, and test on an indicator.',
            'Indefinite life and goodwill: do not amortise, and test at least '
            'annually.',
            'A goodwill loss is capped at the goodwill carried and is never '
            'reversed under either framework.',
        ]),
    ],
)
