# -*- coding: utf-8 -*-
"""Volume 5, Handout 6 — Disposal: the Gain or Loss, and Where It Shows.

Covers A.2(bb): the treatment of a gain or loss on the disposal of fixed
assets.
"""
from fadata import N, D, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

_BV = N.disposal_book_value
_ALT_LOW = 20_000
_ALT_NIL = 0

_DISH = ['Proceeds received', 'Carrying amount', 'Result', 'Reported as']
_DISW = [24, 24, 26, 26]


def _dis(blank=False):
    def c(v):
        return '' if blank else v
    rows = [(N.disposal_proceeds,), (_ALT_LOW,), (_ALT_NIL,), (_BV,)]
    out = []
    for (p,) in rows:
        diff = p - _BV
        if diff > 0:
            res, how = 'Gain of %s' % money(diff), 'Below operating income'
        elif diff < 0:
            res, how = 'Loss of %s' % money(-diff), 'Below operating income'
        else:
            res, how = 'Neither', 'Nothing appears in income'
        out.append([money(p), money(_BV), c(res), c(how)])
    return out


HANDOUT = dict(
    n=6,
    title='Disposal: the Gain or Loss, and Where It Shows',
    subtitle='An asset leaves. Three accounts close, one figure is left over, and '
             'where that figure is reported matters more than its size.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage, which '
                 'ties the disposal back to the cash flow statement.',
        collocations=['derecognise an asset on disposal',
                      'remove the accumulated depreciation',
                      'record a gain on disposal',
                      'charge depreciation up to the date of disposal',
                      'report proceeds as an investing inflow',
                      'reverse a gain out of operating activities'],
        pairs=['proceeds / gain', 'carrying amount / cost',
               'gain / revenue', 'disposal / impairment'],
        nots=['A gain on disposal is not revenue. Selling equipment is not what '
              'the company is in business to do.',
              'The proceeds and the gain are two different figures, and the cash '
              'flow statement uses one of each in different sections.'],
    ),

    objectives=[
        'Charge depreciation to the date of disposal before computing anything '
        'else.',
        'Compute the gain or loss on a disposal.',
        'Record the entry, closing all three accounts.',
        'Say where the gain or loss is reported on the income statement.',
        'Say how the disposal appears in the statement of cash flows.',
    ],

    terms=[
        ('disposal',
         'The sale, scrapping or other removal of a long-lived asset from the '
         'balance sheet.', 'الاستبعاد',
         'Three accounts close together: the cost, the accumulated depreciation '
         'and, if the asset was impaired, the accumulated impairment.'),
        ('proceeds',
         'What the company actually received for the asset.', 'المتحصلات',
         'Not the gain. The two are different figures and the cash flow statement '
         'uses each one in a different section.'),
        ('gain on disposal',
         'The amount by which the proceeds exceed the carrying amount.',
         'مكسب الاستبعاد',
         'Reported below operating income, because selling equipment is not the '
         'company’s business.'),
        ('loss on disposal',
         'The amount by which the carrying amount exceeds the proceeds.',
         'خسارة الاستبعاد',
         'A sign that depreciation was too slow, or that the asset deteriorated '
         'faster than expected.'),
        ('derecognition',
         'Removing an asset from the balance sheet entirely.',
         'إلغاء الاعتراف',
         'The whole point of a disposal entry. Nothing is left behind, not even '
         'the accumulated depreciation.'),
    ],

    blocks=[
        ('scene', 'The %s nobody expected' % money(N.gain_disposal), [
            'In %s Northwind sold a piece of equipment. It had cost %s and '
            'accumulated depreciation of %s had been charged on it, so it stood in '
            'the books at %s.' % (Y, money(N.disposal_cost),
                                  money(N.disposal_accum), money(_BV)),
            'A buyer paid %s for it.' % money(N.disposal_proceeds),
            'That transaction produced the %s gain you met on the income statement '
            'in Volume 1, reversed out of operating activities in the cash flow '
            'statement, and replaced in investing activities by the %s of '
            'proceeds. This handout is where all of that came from.'
            % (money(N.gain_disposal), money(N.disposal_proceeds)),
        ]),
        ('fig', 'ranked', 'One disposal, four figures',
         [('Original cost', N.disposal_cost, money(N.disposal_cost), SLATE),
          ('Accumulated depreciation removed', N.disposal_accum,
           money(N.disposal_accum), RUST),
          ('Carrying amount at disposal', _BV, money(_BV), SL),
          ('Proceeds received', N.disposal_proceeds,
           money(N.disposal_proceeds), SYD)],
         'Only two of these four matter for the gain: the carrying amount and the '
         'proceeds. The other two close against each other.'),

        ('part', 'Part 1 · The step before the computation',
         'depreciation to the date of disposal'),

        ('task', 'Exercise 6A',
         'Say what must happen before the gain or loss is computed at all.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for how a carrying amount is built.'],
         ['Something has to be brought up to date before anything else happens.',
          'Blank 2 is the date to which it is brought up.',
          'The last blank is the figure the proceeds are then compared with.']),
        ('fill', 'R2',
         ['An asset sold in August has been used for eight months of the year, and '
          'that use has to be charged. The first step in any disposal is to record '
          '{depreciation} from the start of the year to the date of disposal.',
          'Only then is the carrying amount correct. Skipping this step is the '
          'commonest error in the topic, and it moves the gain by the amount of '
          'the missing charge — the gain is overstated and the depreciation '
          'expense is {understated} by the same figure.',
          'With that done, the carrying amount is the cost less the accumulated '
          'depreciation to the {date} of disposal, and that is the figure the '
          'proceeds are compared with.',
          'For the Northwind equipment the arithmetic is given: cost %s, '
          'accumulated depreciation %s, so the carrying {amount} is %s.'
          % (money(N.disposal_cost), money(N.disposal_accum), money(_BV))],
         {'depreciation': ('Up to the date of sale, not to the year end.', ''),
          'understated': ('Both figures are wrong, by the same amount.',
                          'Students compare proceeds with last year’s '
                          'carrying amount, which overstates the gain by the '
                          'missing months of depreciation.'),
          'date': ('The date of disposal.', ''),
          'amount': ('Cost less accumulated depreciation.', '')},
         ['impairment', 'overstated', 'year']),
        ('fig', 'timeline', 'The order the steps have to be taken in',
         [('1 January', 'the asset is carried at last year’s figure', SLATE),
          ('Date of disposal',
           'charge depreciation for the part-year FIRST', RUST),
          ('Then, and only then', 'compare the proceeds with the carrying amount',
           SL)],
         'The middle step is the one that gets skipped, and skipping it moves the '
         'gain by the whole of the missing charge.'),

        ('part', 'Part 2 · The computation',
         'proceeds against carrying amount'),

        ('task', 'Exercise 6B',
         'Compute the result under four different sets of proceeds.',
         'Complete the table. The carrying amount is the same in every row.',
         ['Exercise 6A'],
         ['One subtraction per row. The carrying amount of %s does not change.'
          % money(_BV),
          'The third row is a scrapping: the asset was removed and nothing was '
          'received for it.',
          'The fourth row is the case where nothing appears in income at all. Say '
          'why before you write it.']),
        ('table', _DISH, _dis(blank=True), SL, _DISW),
        ('answers', 8),
        ('fig', 'fork', 'One comparison, three outcomes',
         [('Did the proceeds exceed the carrying amount?',
           'YES → a GAIN, reported below operating income', SYD),
          ('Were they less than it?',
           'NO → a LOSS, also reported below operating income', RUST),
          ('Exactly equal?',
           'Neither — nothing reaches the income statement', SL)]),

        ('part', 'Part 3 · The entry',
         'three accounts close and one is left over'),

        ('prose', 'The entry looks more complicated than it is. Everything that '
                  'relates to the asset has to leave the books, which means both '
                  'the cost and the accumulated depreciation, not just the net '
                  'figure.', 'R2'),
        ('prose', 'Cash comes in, the asset account is credited at its full '
                  'original cost, and accumulated depreciation is debited to '
                  'remove it. Whatever is needed to make the entry balance is the '
                  'gain or the loss.', 'R2'),

        ('task', 'Exercise 6C',
         'Record the disposal, closing all three accounts.',
         'Complete the journal entry. Four lines, and the last one is the '
         'balancing figure.',
         ['Exercise 6B, and the two paragraphs above.'],
         ['Accumulated depreciation is a credit balance, so removing it is a '
          'debit.',
          'The asset account is credited at the full original cost of %s, not at '
          'the carrying amount.' % money(N.disposal_cost),
          'The gain is whatever makes the entry balance, and you already know what '
          'it is.']),
        ('journal', [
            ('J1', ('Equipment costing %s with accumulated depreciation of %s sold '
                    'for %s.' % (money(N.disposal_cost),
                                 money(N.disposal_accum),
                                 money(N.disposal_proceeds)),
                    'Both the cost and the accumulated depreciation leave the '
                    'books.'),
             [('Cash', 0, '', ''),
              ('Accumulated Depreciation', 0, '', ''),
              ('Equipment', 1, '', ''),
              ('Gain on Disposal of Equipment', 1, '', '')]),
        ]),
        ('fig', 'taccounts',
         [('Equipment', [('b/f', '180,000')], [('J1', '180,000')], SLATE),
          ('Accumulated Depreciation', [('J1', '145,000')],
           [('b/f', '145,000')], RUST),
          ('Cash', [('J1', '65,000')], [], SL),
          ('Gain on Disposal', [], [('J1', '30,000')], SYD)],
         'Post your own figures here as well. The first two accounts must be left '
         'holding nothing at all — that is what derecognition means.',
         2,
         [('b/f', 'balance brought forward'),
          ('J1', 'the disposal entry')]),

        ('part', 'Part 4 · Where it is reported',
         'income statement and cash flows'),

        ('task', 'Exercise 6D',
         'Say where the gain appears on the income statement, and why.',
         'Read and complete.',
         ['Exercise 6C', 'Volume 1 Handout 3, for the income statement '
          'subtotals.'],
         ['Blank 1 is what the gain is not, and it is the mistake that ruins every '
          'margin ratio.',
          'Blank 3 is the subtotal the gain is reported below.',
          'The last blank is the test that puts it there.']),
        ('fill', 'R2',
         ['The %s is not {revenue}. Northwind is in the business of distributing '
          'components, and selling a used piece of equipment is not that business.'
          % money(N.gain_disposal),
          'Reporting it as revenue would inflate the top line and every margin '
          'computed from it, which is why the exam offers that option so often. '
          'The amount is a {gain}, and gains are reported separately.',
          'Specifically it is reported below {operating} income, among the '
          'non-operating items, alongside interest expense. A reader looking at '
          'operating income therefore sees the result of trading without this '
          'amount in it, which is the point.',
          'The test that puts it there is the ordinary activities test from Volume '
          '2: an amount arising outside the activities the company is in business '
          'to carry on is a gain and not {revenue}.'],
         {'revenue': ('Not revenue, because not the business.', ''),
          'gain': ('Reported separately, below the operating line.',
                   'Students add disposal proceeds to revenue, which inflates both '
                   'revenue and gross margin and ruins every ratio built on '
                   'them.'),
          'operating': ('Below operating income, with the non-operating items.',
                        '')},
         ['income', 'expense', 'gross']),
        ('fig', 'matrix', 'Where each figure from this disposal appears',
         ['Income statement', 'Operating activities', 'Investing activities',
          'Balance sheet'],
         ['What appears', 'The amount'],
         [['Gain on disposal, below operating income',
           money(N.gain_disposal)],
          ['The gain, deducted to reverse it out',
           money(-N.gain_disposal)],
          ['The proceeds received', money(N.disposal_proceeds)],
          ['The asset and its accumulated depreciation, both gone', '—']],
         'The gain appears twice, with opposite signs, and the proceeds appear '
         'once. Volume 1 Handout 8 built exactly this.'),

        ('task', 'Exercise 6E',
         'Say how the disposal appears in the statement of cash flows.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 6D', 'Volume 1 Handout 8, for the indirect method.'],
         ['Blank 1 is the section the whole proceeds appear in.',
          'Blank 3 is what has to happen to the gain in the operating section, and '
          'why.',
          'The last blank is the figure that would be double-counted if the '
          'reversal were not made.']),
        ('fill', 'R3',
         ['The cash Northwind actually received was %s, and the whole of it is an '
          '{investing} inflow, because the company disposed of a long-lived asset.'
          % money(N.disposal_proceeds),
          'But the %s gain has already increased net income, which is the starting '
          'point of the operating section. Leaving it there would report part of '
          'the same transaction twice: once inside operating cash flow and once in '
          'investing.' % money(N.gain_disposal),
          'So the gain is {deducted} in the operating section, which removes it '
          'from a section it does not belong to, and the full proceeds appear '
          'below in investing. One transaction, two entries, and the net effect on '
          'cash is exactly the %s that arrived.'
          % money(N.disposal_proceeds),
          'Get it wrong in either direction and the statement is out. Reporting '
          'only the {gain} in investing understates the inflow by the carrying '
          'amount, and omitting the reversal overstates operating cash flow by the '
          'whole %s.' % money(N.gain_disposal)],
         {'investing': ('The whole proceeds, in investing.', ''),
          'deducted': ('Reversed out, to avoid counting it twice.', ''),
          'gain': ('The proceeds, not the gain, go in investing.',
                   'Students put the gain in investing instead of the proceeds, '
                   'which understates the inflow by the carrying amount of the '
                   'asset.')},
         [money(_BV), 'operating', 'added']),
        ('fig', 'bridge',
         'Carrying amount given up', _BV,
         [('Gain on disposal', N.gain_disposal)],
         'Proceeds received', N.disposal_proceeds),

        ('watch', 'A loss on disposal is a message as well as a figure. It says '
                  'the asset was carried at more than it turned out to be worth, '
                  'which usually means depreciation was too slow or an impairment '
                  'was missed.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Equipment costing %s with accumulated depreciation of %s is sold '
                'for %s. The result is:'
                % (money(N.disposal_cost), money(N.disposal_accum),
                   money(N.disposal_proceeds)),
         ['A gain of %s' % money(N.disposal_proceeds),
          'A gain of %s' % money(N.gain_disposal),
          'A loss of %s' % money(N.disposal_cost - N.disposal_proceeds),
          'Neither a gain nor a loss'],
         1, 'Level A',
         'Proceeds of %s less a carrying amount of %s gives a gain of %s. (A) '
         'treats the whole proceeds as the gain. (C) compares the proceeds with '
         'the original cost and ignores the depreciation already charged.'
         % (money(N.disposal_proceeds), money(_BV), money(N.gain_disposal))),

        ('mcq', 'An asset is sold in August. Before computing the gain or loss, the '
                'company must first:',
         ['Reverse all prior depreciation on the asset',
          'Record depreciation from the start of the year to the date of disposal',
          'Test the asset for impairment',
          'Restate the prior year'],
         1, 'Level B',
         'The carrying amount must be brought up to the date of sale before it is '
         'compared with anything. Skipping this overstates the gain and '
         'understates depreciation expense by the same amount — two errors '
         'from one omission.'),

        ('mcq', 'A gain on the disposal of equipment should be reported:',
         ['Within revenue',
          'As a reduction of cost of goods sold',
          'Below operating income, among the non-operating items',
          'In other comprehensive income'],
         2, 'Level B',
         'Selling equipment is outside the company’s ordinary activities, so '
         'the amount is a gain reported below the operating line. (A) inflates '
         'revenue and every margin built on it. (D) is wrong: a realised disposal '
         'gain goes through net income.'),

        ('mcq', 'In the statement of cash flows prepared by the indirect method, a '
                '%s gain on disposal and %s of proceeds are reported as:'
                % (money(N.gain_disposal), money(N.disposal_proceeds)),
         ['%s added in operating activities' % money(N.gain_disposal),
          '%s deducted in operating activities and %s added in investing '
          'activities' % (money(N.gain_disposal), money(N.disposal_proceeds)),
          '%s added in investing activities' % money(N.gain_disposal),
          '%s added in operating activities' % money(N.disposal_proceeds)],
         1, 'Level C',
         'The gain is reversed out of operating because it is not a trading cash '
         'flow, and the full proceeds appear in investing. (C) reports the gain '
         'where the proceeds belong, understating the inflow by the carrying '
         'amount of %s.' % money(_BV)),

        ('mcq', 'Equipment with a carrying amount of %s is scrapped and nothing is '
                'received for it. The company should record:' % money(_BV),
         ['No entry, since no cash changed hands',
          'A loss of %s' % money(_BV),
          'A gain of %s' % money(_BV),
          'An impairment loss of %s' % money(_BV)],
         1, 'Level B',
         'Proceeds of nil against a carrying amount of %s gives a loss of the '
         'whole carrying amount. (A) would leave a scrapped asset on the balance '
         'sheet. (D) uses the wrong label: impairment applies to an asset held and '
         'used, and this one has gone.' % money(_BV)),

        ('mcq', 'On disposal, the credit to the asset account should be:',
         ['The carrying amount at the date of disposal',
          'The original cost of the asset',
          'The proceeds received',
          'The accumulated depreciation'],
         1, 'Level B',
         'The asset account holds cost, so it is credited at cost; the '
         'accumulated depreciation is removed separately by a debit. Crediting the '
         'carrying amount would leave the accumulated depreciation stranded in the '
         'books forever.'),

        ('mcq', 'A company consistently reports losses on the disposal of its '
                'equipment. The most likely explanation is that:',
         ['Its equipment is being sold too cheaply',
          'Its depreciation charges have been too low, or useful lives too long',
          'It is using an accelerated depreciation method',
          'It has been overstating impairment losses'],
         1, 'Level C',
         'A loss means the asset was carried at more than it proved to be worth, '
         'which points at depreciation that was too slow. (C) has it backwards: an '
         'accelerated method writes assets down faster and tends to produce gains '
         'on disposal rather than losses.'),

        ('tip', 'Write four figures down before you answer any disposal question: '
                'cost, accumulated depreciation, carrying amount, proceeds. Only '
                'the last two produce the gain, and the question will usually give '
                'you all four to see whether you know which.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6B · the completed table'),
        ('table', _DISH, _dis(), SL, _DISW),
        ('h3', 'Exercise 6C · the completed entry'),
        ('journal', [
            ('J1', 'Equipment sold for %s.' % money(N.disposal_proceeds),
             [('Cash', 0, money(N.disposal_proceeds), ''),
              ('Accumulated Depreciation', 0, money(N.disposal_accum), ''),
              ('Equipment', 1, '', money(N.disposal_cost)),
              ('Gain on Disposal of Equipment', 1, '',
               money(N.gain_disposal))]),
        ]),
        ('bullets', [
            'Charge depreciation to the date of disposal before anything else.',
            'The gain is proceeds less carrying amount: %s − %s = %s.'
            % (money(N.disposal_proceeds), money(_BV),
               money(N.gain_disposal)),
            'The gain is reported below operating income; the proceeds are an '
            'investing inflow; and the gain is reversed out of operating '
            'activities so that nothing is counted twice.',
        ]),
    ],
)
