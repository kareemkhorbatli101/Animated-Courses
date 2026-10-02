# -*- coding: utf-8 -*-
"""Volume 17, Handout 1 — Changes in Principle and Changes in Estimate.

Covers CMA Part 2 A.4(c): adjusting financial statements for changes in
accounting treatments, and the effect on the ratios.
"""
from fadata import N, CH, I, D, Y, PY
from data import money, num

PRIN, EST, SLATE, ERR = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_PRINH = ['Changing from FIFO to weighted average', 'Amount']
_PRINW = [68, 32]


def _prin(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Closing inventory under FIFO, as reported',
         money(CH.principle_old)],
        ['Closing inventory under weighted average',
         money(CH.principle_new)],
        ['Reduction in inventory, before tax',
         c(money(-CH.principle_pretax))],
        ['Tax effect at %s' % _pc(CH.tax_rate),
         c(money(CH.principle_pretax * CH.tax_rate))],
        ['Adjustment to opening retained earnings, net of tax',
         c(money(-CH.principle_net))],
    ]


_ESTH = ['Revising the machine’s life after %d years' % CH.elapsed, 'Amount']
_ESTW = [68, 32]


def _est(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Original cost of the machine', money(D.cost)],
        ['Depreciation charged over %d years at %s'
         % (CH.elapsed, money(D.sl[0])),
         money(-CH.estimate_accumulated)],
        ['Carrying amount at the date of the revision',
         c(money(CH.estimate_carrying))],
        ['Less the revised residual value', money(-CH.new_residual)],
        ['To be depreciated over %d more years' % CH.new_remaining_life,
         c(money(CH.estimate_carrying - CH.new_residual))],
        ['Revised annual charge', c(money(CH.estimate_new_charge))],
    ]


_TWOH = ['', 'Change in principle', 'Change in estimate']
_TWOW = [28, 36, 36]


def _two(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['What changed', c('The method itself'),
         c('An input the method uses')],
        ['Prior periods', c('Restated'), c('Left alone')],
        ['Opening retained earnings', c('Adjusted'), c('Not adjusted')],
        ['Applied', c('Retrospectively'), c('Prospectively')],
        ['Northwind’s example', c('FIFO to weighted average'),
         c('The machine’s useful life')],
    ]


HANDOUT = dict(
    n=1,
    title='Changes in Principle and Changes in Estimate',
    subtitle='One change rewrites every prior year and the other touches none '
             'of them. Telling which is which is the whole handout.',
    register='R2',

    lang=dict(
        register='R2 throughout, with the ratio consequences at R3 because '
                 'Part 2 asks the question that way.',
        collocations=['change an accounting principle',
                      'apply a change retrospectively',
                      'restate the comparative periods',
                      'adjust opening retained earnings',
                      'revise an estimate prospectively',
                      'justify a change as preferable'],
        pairs=['principle / estimate',
               'retrospective / prospective',
               'restated / as reported',
               'cumulative effect / current charge'],
        nots=['A change in estimate is not an error. The original figure was '
              'right on the information then available.',
              'Retrospective application is not a restatement for a mistake. '
              'Nothing was wrong; the basis of measurement changed.'],
    ),

    objectives=[
        'Distinguish a change in principle from a change in estimate.',
        'Apply a change in principle retrospectively.',
        'Compute the adjustment to opening retained earnings.',
        'Apply a change in estimate prospectively.',
        'Say what each kind of change does to the ratios a reader computes.',
    ],

    terms=[
        ('change in accounting principle',
         'A move from one generally accepted accounting method to another.',
         'التغير في السياسة المحاسبية',
         'Permitted only where the new method is preferable, and a company '
         'must say why. The exam often tests that condition rather than the '
         'arithmetic.'),
        ('change in accounting estimate',
         'A revision of an input to a method, in the light of new '
         'information.', 'التغير في التقدير المحاسبي',
         'The commonest change by far, and the one that touches no prior '
         'period at all.'),
        ('retrospective application',
         'Applying a new principle to every period presented, as though it had '
         'always been used.', 'التطبيق بأثر رجعي',
         'Comparability is the reason. A reader comparing two years must be '
         'comparing them on one basis.'),
        ('prospective application',
         'Applying a change only to the current and future periods, leaving '
         'prior reports untouched.', 'التطبيق بأثر مستقبلي',
         'Used for changes in estimate, because the old figures were not wrong '
         'when they were made.'),
        ('restatement',
         'Re-presenting previously issued figures on a corrected or a new '
         'basis.', 'إعادة عرض القوائم',
         'A word with a reputation it only half deserves. A change in '
         'principle requires one and nothing was wrong; an error requires one '
         'and something was.'),
        ('cumulative effect',
         'The total effect of a change in principle on all periods before the '
         'earliest one presented.', 'الأثر التراكمي',
         'Taken to the opening balance of retained earnings in the earliest '
         'period shown, not to current profit.'),
    ],

    blocks=[
        ('scene', 'Two changes in one year', [
            'Northwind makes two changes in %s. It moves its inventory costing '
            'from FIFO to weighted average, and it revises the useful life of '
            'the machine Volume 5 depreciated.' % Y,
            'Both change reported profit. Only one of them changes any '
            'previously published figure.',
            'The inventory change replaces one acceptable method with another, '
            'so every prior year is restated as though the new method had '
            'always been used.',
            'The machine’s life was an estimate made on the information then '
            'available. New information does not make the old figure wrong, so '
            'nothing is restated at all.',
        ]),
        ('fig', 'scale',
         'A CHANGE IN PRINCIPLE',
         ['The method itself changes',
          'Prior periods are restated',
          'Opening retained earnings is adjusted',
          'FIFO to weighted average, in Part 2'],
         'A CHANGE IN ESTIMATE',
         ['An input to the method changes',
          'Prior periods are left exactly as reported',
          'Nothing touches retained earnings',
          'The machine’s useful life, in Part 3']),

        ('part', 'Part 1 · Which kind is it?',
         'the method, or an input to it'),

        ('task', 'Exercise 1A',
         'Distinguish a change in principle from a change in estimate.',
         'Complete both right-hand columns.',
         ['Volume 4 Handout 4, on the cost flow assumptions.',
          'Volume 5 Handout 1, on useful lives and residual values.'],
         ['Ask of each change whether the rule changed or a number fed into '
          'the rule changed. The first calls for retrospective application '
          'and the second for prospective application.',
          'FIFO and weighted average are both acceptable methods, so moving '
          'between them changes the method.',
          'A useful life is an input to straight-line depreciation, and '
          'straight-line is still the method afterwards.']),
        ('table', _TWOH, _two(blank=True), SLATE, _TWOW),
        ('answers', 10),
        ('fig', 'fork', 'Which kind of change is this?',
         [('Has the company moved from one acceptable method to another?',
           'YES → a change in principle, applied retrospectively', PRIN),
          ('Has an input to the method been revised on new information?',
           'YES → a change in estimate, applied prospectively', EST),
          ('Was the original figure wrong on the information then available?',
           'That is an error, and Handout 2 deals with it', ERR)]),

        ('part', 'Part 2 · The principle change',
         'every prior year, rewritten'),

        ('prose', 'Northwind’s closing inventory was %s under FIFO and would '
                  'have been %s under weighted average. Volume 4 computed '
                  'both. The change is applied as though weighted average had '
                  'always been used, so the prior year’s figures are restated '
                  'too.' % (money(CH.principle_old),
                            money(CH.principle_new)), 'R2'),

        ('task', 'Exercise 1B',
         'Compute the adjustment arising from the change in principle.',
         'Complete the schedule. Both inventory figures are given.',
         ['Volume 4 Handout 4, which computed both figures.',
          'The paragraph above.'],
         ['The two closing inventory figures differ by %s before tax.'
          % money(CH.principle_pretax),
          'Lower inventory means higher cost of goods sold and lower profit, '
          'so the adjustment reduces retained earnings.',
          'Tax relief at %s reduces the net adjustment, which is what actually '
          'goes to opening retained earnings.' % _pc(CH.tax_rate)]),
        ('table', _PRINH, _prin(blank=True), PRIN, _PRINW),
        ('answers', 3),
        ('fig', 'bridge',
         'Closing inventory under FIFO', CH.principle_old,
         [('Restated to weighted average', -CH.principle_pretax)],
         'Closing inventory under weighted average', CH.principle_new),
        ('journal', [
            ('J1', ('The change from FIFO to weighted average, applied '
                    'retrospectively at the start of the earliest period '
                    'presented.',
                    'The debit is to retained earnings, not to this year’s '
                    'cost of goods sold.'),
             [('Retained Earnings', 0, '', ''),
              ('Deferred Tax Asset', 0, '', ''),
              ('Inventory', 1, '', '')]),
        ]),

        ('part', 'Part 3 · The estimate change',
         'this year and the next, and nothing before'),

        ('task', 'Exercise 1C',
         'Apply a change in estimate to the machine Volume 5 depreciated.',
         'Read and complete, then complete the schedule underneath.',
         ['Volume 5 Handout 1, for the machine’s cost and original life.'],
         ['The machine cost %s and has been depreciated at %s a year for %d '
          'years.' % (money(D.cost), money(D.sl[0]), CH.elapsed),
          'Take the carrying amount at the date of the revision, subtract the '
          'new residual value, and spread what is left over the new remaining '
          'life.',
          'The last blank is what happens to the %s already charged in the two '
          'earlier years.' % money(CH.estimate_accumulated)]),
        ('fill', 'R2',
         ['Northwind now expects the machine to last %d more years and to be '
          'worth %s at the end, rather than the figures Volume 5 used. Those '
          'were estimates, and they were not {wrong} when they were made.'
          % (CH.new_remaining_life, money(CH.new_residual)),
          'So the %s already charged stands, and nothing published is '
          'restated. The revision is applied {prospectively}, from the date '
          'the company changed its mind.'
          % money(CH.estimate_accumulated),
          'The carrying amount at that date is %s. Less the revised residual '
          'of %s, there is {%s} left to depreciate.'
          % (money(CH.estimate_carrying), money(CH.new_residual),
             money(CH.estimate_carrying - CH.new_residual)),
          'Spread over %d years that is %s a year, against the %s Volume 5 was '
          'charging. The whole of the change falls into this year and the '
          '{future} ones.'
          % (CH.new_remaining_life, money(CH.estimate_new_charge),
             money(D.sl[0]))],
         {'wrong': ('Right on the information then available.', ''),
          'prospectively': ('From now on, and no further back.', ''),
          money(CH.estimate_carrying - CH.new_residual):
              ('%s less %s.' % (money(CH.estimate_carrying),
                                money(CH.new_residual)), ''),
          'future': ('No restatement, ever.',
                     'Students restate prior depreciation. A change in '
                     'estimate never reaches a published figure.')},
         ['right', 'retrospectively', 'past']),
        ('table', _ESTH, _est(blank=True), EST, _ESTW),
        ('answers', 3),
        ('fig', 'timeline', 'The machine, before and after the revision',
         [('Years 1 and 2', '%s a year charged, and those years stay exactly '
                            'as published' % money(D.sl[0]), SLATE),
          ('The revision', 'Carrying amount %s, residual revised to %s, %d '
                           'years left'
           % (money(CH.estimate_carrying), money(CH.new_residual),
              CH.new_remaining_life), EST),
          ('Years 3 to %d' % (CH.elapsed + CH.new_remaining_life),
           '%s a year, from here on' % money(CH.estimate_new_charge),
           OK)],
         'Prospective application in one picture: the line changes at the '
         'revision and nothing to the left of it moves.'),

        ('part', 'Part 4 · What a reader has to watch',
         'the ratios, and the comparison'),

        ('task', 'Exercise 1D',
         'Say what each kind of change does to the ratios a reader computes.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercises 1B and 1C.',
          'Volume 4 Handout 7, on what a costing method does to the '
          'statements.'],
         ['After a retrospective change both years are on the same basis, so '
          'a trend computed across them is meaningful.',
          'After a prospective change the years are on different bases, and '
          'nothing warns the reader except the note.',
          'One of the statements is about the disclosure that makes either '
          'change readable at all.']),
        ('sortgrid',
         ['Statement about the effect on ratios', 'TRUE', 'FALSE'],
         ['After a retrospective change, this year and last are comparable',
          'After a prospective change, this year and last are on different '
          'bases',
          'A change in estimate requires prior ratios to be recomputed',
          'The note disclosing the change is what makes the figures readable',
          'A change in principle can move a prior year’s reported profit',
          'A change in estimate can move a prior year’s reported profit'],
         ['TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE'],
         'The last pair is the distinction in one line: only a change in '
         'principle can move a figure that has already been published.'),
        ('fig', 'matrix', 'What a reader sees after each change',
         ['After the principle change', 'After the estimate change'],
         ['Prior year as published', 'Comparability', 'What to read'],
         [['Restated to weighted average',
           'Both years on one basis', 'The note, for the %s adjustment'
           % money(CH.principle_net)],
          ['Unchanged',
           'Two bases, with no restatement',
           'The note, for the new life and residual']],
         'In both cases the note is where the information is. The difference '
         'is that after a prospective change nothing in the numbers themselves '
         'signals that anything happened.'),

        ('part', 'Part 5 · When a change is allowed at all',
         'preferability'),

        ('task', 'Exercise 1E',
         'Say when a company may change an accounting principle.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1D.'],
         ['A company that could change method freely could choose its profit '
          'each year. Ask what stops that.',
          'The condition is a single word, and the company has to justify it '
          'in the notes.',
          'The last blank is the quality that the restatement requirement is '
          'protecting.']),
        ('fill', 'R2',
         ['A company may not change principle whenever it suits. The new '
          'method must be {preferable} to the old one, and the company must '
          'say in what respect it is.',
          'Without that condition a management could select whichever method '
          'flattered the year, and the figures would record its {choices} '
          'rather than its performance.',
          'The restatement requirement does the rest of the work. Because '
          'every prior year shown is restated, a change cannot create an '
          'apparent improvement in the {trend} where none exists.',
          'Together the two rules protect {comparability}, which Volume 1 '
          'named as one of the qualities that make financial information '
          'useful at all.'],
         {'preferable': ('Justified, and disclosed as such.', ''),
          'choices': ('Management’s decisions, not the business.', ''),
          'trend': ('Both years move together.', ''),
          'comparability': ('The quality the whole rule protects.',
                            'Students treat the restatement as busywork. It '
                            'is what stops a method change manufacturing a '
                            'trend.')},
         ['permitted', 'results', 'relevance']),
        ('fig', 'buckets', 'Three changes, three treatments',
         [('PRINCIPLE', PRIN,
           ['The method itself changes',
            'Every prior period presented is restated',
            'Opening retained earnings is adjusted by %s'
            % money(CH.principle_net)]),
          ('ESTIMATE', EST,
           ['An input to the method is revised',
            'No prior period is touched',
            'This year’s charge becomes %s'
            % money(CH.estimate_new_charge)]),
          ('ERROR', ERR,
           ['The original figure was simply wrong',
            'Prior periods are restated, as for a principle change',
            'Handout 2 works one through'])],
         'Two of the three restate prior periods, and they do it for opposite '
         'reasons: one because nothing was wrong and one because something '
         'was.'),

        ('watch', 'A change in depreciation method is the trap on this topic. '
                  'It looks like a change in principle and is treated as a '
                  'change in estimate, because the method and the useful life '
                  'are judged together as an estimate of how the asset is '
                  'consumed. It is applied prospectively.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A change in accounting principle is applied:',
         ['Prospectively', 'Retrospectively, restating prior periods',
          'To the current period only', 'Only with regulatory approval'],
         1, 'Level A',
         'Every period presented is restated so the reader compares like with '
         'like. (A) is the treatment for a change in estimate, and the pair is '
         'the whole of A.4(c).'),

        ('mcq', 'A revision of the useful life of an asset is:',
         ['A change in accounting principle',
          'A change in accounting estimate',
          'An error correction', 'Not recognised'],
         1, 'Level A',
         'The method is unchanged; an input to it has been revised. (A) is the '
         'commonest wrong answer because the effect on the charge can be '
         'large.'),

        ('mcq', 'The cumulative effect of a change in principle on periods '
                'before the earliest one presented is:',
         ['Charged to current profit',
          'Adjusted against the opening balance of retained earnings',
          'Reported in other comprehensive income',
          'Disclosed only'],
         1, 'Level B',
         'It belongs to years that are no longer shown, so it adjusts the '
         'opening balance. (A) would charge this year with the results of a '
         'decade.'),

        ('mcq', 'Northwind changes from FIFO to weighted average, reducing '
                'closing inventory by %s before tax at a %s rate. The '
                'adjustment to opening retained earnings is:'
         % (money(CH.principle_pretax), _pc(CH.tax_rate)),
         [money(CH.principle_pretax), money(CH.principle_net),
          money(CH.principle_pretax * CH.tax_rate), 'Nil'],
         1, 'Level B',
         '%s less %s of tax relief is %s. (A) ignores the tax, which the '
         'restatement must also reverse.'
         % (money(CH.principle_pretax),
            money(CH.principle_pretax * CH.tax_rate),
            money(CH.principle_net))),

        ('mcq', 'A machine carried at %s with a revised residual of %s and %d '
                'years of remaining life is depreciated at:'
         % (money(CH.estimate_carrying), money(CH.new_residual),
            CH.new_remaining_life),
         [money(D.sl[0]), money(CH.estimate_new_charge),
          money(CH.estimate_carrying / CH.new_remaining_life),
          money(D.cost / D.life)],
         1, 'Level C',
         '%s less %s over %d years is %s. (C) forgets the residual value, and '
         '(A) is the old charge, which the revision replaces.'
         % (money(CH.estimate_carrying), money(CH.new_residual),
            CH.new_remaining_life, money(CH.estimate_new_charge))),

        ('mcq', 'A company may change an accounting principle when:',
         ['It wishes to improve reported profit',
          'The new principle is preferable and the reason is disclosed',
          'Its auditor suggests it',
          'At any time, provided the change is disclosed'],
         1, 'Level B',
         'Preferability is the condition, and it must be justified. (D) drops '
         'the condition and would let a company select its result each year.'),

        ('mcq', 'A company changes its depreciation method from '
                'straight-line to declining balance. This is treated as:',
         ['A change in principle, applied retrospectively',
          'A change in estimate, applied prospectively',
          'An error correction',
          'A change in principle, applied prospectively'],
         1, 'Level C',
         'The method and the life are judged together as an estimate of how '
         'the asset is consumed, so the change is prospective. (A) is the '
         'answer the word method invites and is the single most reliable trap '
         'on this learning outcome.'),

        ('tip', 'Ask one question before anything else: did the rule change, '
                'or did a number fed into the rule change? Rule means '
                'retrospective and restatement; number means prospective and '
                'nothing touched. The depreciation method is the one exception '
                'and it goes with the numbers.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the change in principle'),
        ('table', _PRINH, _prin(), PRIN, _PRINW),
        ('h3', 'Exercise 1C · the change in estimate'),
        ('table', _ESTH, _est(), EST, _ESTW),
        ('h3', 'Exercise 1A · the two kinds of change'),
        ('table', _TWOH, _two(), SLATE, _TWOW),
        ('prose', 'Both figures in the first schedule came from Volume 4, '
                  'which computed closing inventory at %s under FIFO and %s '
                  'under weighted average without ever suggesting a company '
                  'might move between them. The %s difference is the whole of '
                  'the retrospective adjustment, and %s of it survives the '
                  'tax.' % (money(CH.principle_old),
                            money(CH.principle_new),
                            money(CH.principle_pretax),
                            money(CH.principle_net)), 'R2'),
        ('prose', 'The second schedule starts from Volume 5’s own machine: %s '
                  'of cost and %s a year of straight-line depreciation. Two '
                  'years in, the carrying amount is %s and the revision takes '
                  'the charge from %s to %s without touching a published '
                  'figure.' % (money(D.cost), money(D.sl[0]),
                               money(CH.estimate_carrying),
                               money(D.sl[0]),
                               money(CH.estimate_new_charge)), 'R2'),
    ],
)
