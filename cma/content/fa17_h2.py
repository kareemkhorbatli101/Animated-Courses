# -*- coding: utf-8 -*-
"""Volume 17, Handout 2 — Correcting an Error and Restating the Comparatives.

Covers the error half of CMA Part 2 A.4(c), and the effect a restatement has
on the ratios a reader has already computed.
"""
from fadata import N, CH, I, Y, PY
from data import money, num

PRIN, EST, SLATE, ERR = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_ERRH = ['Depreciation of %s omitted in %s' % (money(CH.error_pretax), PY),
         'Amount']
_ERRW = [68, 32]


def _err(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Depreciation that should have been charged in %s' % PY,
         money(CH.error_pretax)],
        ['Tax relief at %s' % _pc(CH.tax_rate),
         c(money(-CH.error_pretax * CH.tax_rate))],
        ['Overstatement of %s profit, net of tax' % PY,
         c(money(CH.error_net))],
        ['Adjustment to opening retained earnings in %s' % Y,
         c(money(-CH.error_net))],
        ['Effect on %s profit' % Y, c('Nil')],
    ]


_KINDH = ['Error', 'Counterbalancing?', 'Still wrong after two years?']
_KINDW = [46, 27, 27]


def _kind(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Closing inventory overstated', c('Yes'), c('No')],
        ['Accrued wages omitted', c('Yes'), c('No')],
        ['Depreciation omitted on an asset', c('No'), c('Yes')],
        ['A capital expenditure charged to repairs', c('No'), c('Yes')],
        ['Prepaid insurance not recorded', c('Yes'), c('No')],
    ]


_COMPH = ['', 'Change in estimate', 'Change in principle', 'Error']
_COMPW = [26, 25, 25, 24]


def _comp(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Was the old figure wrong?', c('No'), c('No'), c('Yes')],
        ['Prior periods restated', c('No'), c('Yes'), c('Yes')],
        ['Opening retained earnings', c('Untouched'), c('Adjusted'),
         c('Adjusted')],
        ['Disclosure required', c('Yes'), c('Yes, with the reason'),
         c('Yes, and its nature')],
    ]


HANDOUT = dict(
    n=2,
    title='Correcting an Error and Restating the Comparatives',
    subtitle='Northwind omitted %s of depreciation in %s. Correcting it '
             'changes %s profit by nothing at all.'
             % (money(CH.error_pretax), PY, Y),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the correction, R3 for the comparison of all three '
                 'kinds of change, which is how an exam sets it.',
        collocations=['correct an error of a prior period',
                      'restate the comparative figures',
                      'adjust the opening balance of retained earnings',
                      'disclose the nature of an error',
                      'identify a counterbalancing error',
                      'reissue restated statements'],
        pairs=['error / change in estimate',
               'counterbalancing / non-counterbalancing',
               'restated / as previously reported',
               'current profit / opening retained earnings'],
        nots=['An error correction is not a change in estimate. The old figure '
              'was wrong on information available at the time.',
              'Correcting a prior period error does not change the current '
              'year’s profit. It changes the opening balance it starts from.'],
    ),

    objectives=[
        'Distinguish an error from a change in estimate.',
        'Correct a prior period error and restate the comparatives.',
        'Say why the correction does not touch current profit.',
        'Distinguish a counterbalancing error from one that is not.',
        'Compare all three kinds of change in one grid.',
    ],

    terms=[
        ('prior period adjustment',
         'The correction of an error in previously issued statements, taken to '
         'the opening balance of retained earnings.',
         'تسوية فترات سابقة',
         'Never to current profit. A mistake belongs to the year it was made.'),
        ('counterbalancing error',
         'An error that reverses itself in the following period, so that after '
         'two years the balance sheet is right again.',
         'خطأ ذاتي التصحيح',
         'The income statements of both years are still wrong. Self-correcting '
         'describes the balance sheet alone.'),
        ('misstatement',
         'A figure in an issued statement that differs from what the '
         'standards require.',
         'تحريف في القوائم',
         'An error produces one. The size of the misstatement and the control '
         'failure behind it are two separate questions.'),
        ('material weakness',
         'A deficiency in internal control such that a material misstatement '
         'might not be prevented or detected.',
         'ضعف جوهري في الرقابة',
         'Why an error matters beyond its amount. A single error can signal a '
         'control that does not work.'),
    ],

    blocks=[
        ('scene', 'A year of depreciation nobody charged', [
            'An asset bought in %s was recorded correctly and then never '
            'depreciated. %s of depreciation that should have been charged in '
            '%s was not.' % (PY, money(CH.error_pretax), PY),
            'This is not a change in estimate. The useful life was known, the '
            'policy was clear, and the charge was simply missed.',
            '%s profit was therefore overstated by %s after tax, and the '
            'asset is still carried %s too high today.'
            % (PY, money(CH.error_net), money(CH.error_pretax)),
            'Correcting it restates %s and adjusts the opening balance of '
            'retained earnings. It leaves %s profit exactly where it was.'
            % (PY, Y),
        ]),
        ('fig', 'scale',
         'A CHANGE IN ESTIMATE',
         ['The old figure was right at the time',
          'New information arrived later',
          'Prior periods are left alone',
          'Handout 1 worked one through'],
         'AN ERROR',
         ['The old figure was wrong when it was made',
          'The information was available all along',
          'Prior periods are restated',
          'Opening retained earnings is adjusted']),

        ('part', 'Part 1 · Error, or estimate?',
         'what was known at the time'),

        ('task', 'Exercise 2A',
         'Distinguish an error from a change in estimate.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1C, on the change in estimate.'],
         ['Both produce a figure that turns out to differ from what was '
          'reported. Ask what the company knew when it reported it.',
          'Revising a useful life uses information that did not exist before. '
          'Omitting a charge uses information that did.',
          'The last blank is the balance the correction is taken to, and it is '
          'not this year’s profit.']),
        ('fill', 'R2',
         ['The test is what was {known} at the time. A company that revises a '
          'useful life is acting on information that did not exist when the '
          'original estimate was made.',
          'A company that omits a depreciation charge had everything it needed '
          'to get it right. The figure was {wrong} when it was published, and '
          'that makes it an error rather than a revision.',
          'The consequence follows. A change in estimate touches no published '
          'figure; an error means a previously issued statement was '
          '{incorrect}, so the comparative figures are restated.',
          'And because the mistake belongs to %s, its correction goes to the '
          'opening balance of {retained} earnings rather than to this year’s '
          'profit.' % PY],
         {'known': ('Available at the time, or not.', ''),
          'wrong': ('Not merely different; wrong.', ''),
          'incorrect': ('A published statement was misstated.', ''),
          'retained': ('The year it belongs to is closed.',
                       'Students put the correction in current profit. That '
                       'would make this year carry last year’s mistake.')},
         ['expected', 'revised', 'current']),
        ('fig', 'fork', 'Error or change in estimate?',
         [('Was the information available when the figure was published?',
           'YES → the figure was wrong, and it is an error', ERR),
          ('Did the information arrive afterwards?',
           'YES → a change in estimate, applied prospectively', EST),
          ('Either way, where does the correction go?',
           'An error goes to opening retained earnings; an estimate goes '
           'nowhere but forward', SLATE)]),

        ('part', 'Part 2 · Correcting it',
         'and why this year does not move'),

        ('task', 'Exercise 2B',
         'Correct the omitted depreciation and restate the prior year.',
         'Complete the schedule, then record the entry underneath.',
         ['Exercise 2A, and Volume 7 Handout 2 for the tax rate.'],
         ['The %s charge was missed, and it would have attracted tax relief at '
          '%s.' % (money(CH.error_pretax), _pc(CH.tax_rate)),
          'So %s profit was overstated by the net %s, and that is what the '
          'opening balance has to be reduced by.'
          % (PY, money(CH.error_net)),
          'The last row asks what happens to %s profit, and the answer is the '
          'point of the exercise.' % Y]),
        ('table', _ERRH, _err(blank=True), ERR, _ERRW),
        ('answers', 4),
        ('journal', [
            ('J1', ('The %s of depreciation omitted in %s, corrected as a '
                    'prior period adjustment.'
                    % (money(CH.error_pretax), PY),
                    'The debit is to retained earnings, because the year it '
                    'belongs to is closed.'),
             [('Retained Earnings', 0, '', ''),
              ('Deferred Tax Asset', 0, '', ''),
              ('Accumulated Depreciation', 1, '', '')]),
        ]),
        ('fig', 'bridge',
         'Retained earnings at 1 January %s, as reported' % Y,
         N.retained_py,
         [('Correction of the %s error, net of tax' % PY, -CH.error_net)],
         'Retained earnings at 1 January %s, restated' % Y,
         N.retained_py - CH.error_net),

        ('part', 'Part 3 · Errors that fix themselves',
         'and errors that do not'),

        ('prose', 'Some errors reverse in the following year without anyone '
                  'doing anything. An overstated closing inventory becomes an '
                  'overstated opening inventory, which overstates cost of '
                  'goods sold and understates the next year’s profit by the '
                  'same amount.', 'R2'),

        ('task', 'Exercise 2C',
         'Distinguish errors that counterbalance from those that do not.',
         'Complete both right-hand columns.',
         ['The paragraph above.'],
         ['Ask whether the error works its way out of the balance sheet by the '
          'end of the second year.',
          'Anything that misstates a year-end accrual or an inventory count '
          'usually counterbalances; anything that misstates an asset’s '
          'carrying amount does not.',
          'Even where the balance sheet rights itself, both income statements '
          'were wrong, which is why the first column is not the whole '
          'story.']),
        ('fill', 'R2',
         ['An error that misstates a year-end accrual or an inventory count '
          'usually works itself out. An overstated closing inventory becomes '
          'an overstated opening inventory, which overstates cost of goods '
          'sold and {understates} the following year’s profit by the same '
          'amount.',
          'After two years the balance sheet is right again, and such an error '
          'is called {counterbalancing}. The description applies to the '
          'balance sheet alone: both income statements carried a misstatement '
          'and nothing ever repairs them.',
          'An omitted depreciation charge behaves differently. The asset stays '
          'overstated and the accumulated depreciation stays understated for '
          'as long as the asset is held, so the error does {not} counterbalance '
          'at all.',
          'Either way the comparatives are restated. A company that waits for '
          'an error to unwind has left two published income statements wrong '
          'and may also have a material {weakness} in the control that let it '
          'through.'],
         {'understates': ('The reverse of the first year.', ''),
          'counterbalancing': ('The balance sheet rights itself.', ''),
          'not': ('It stays wrong while the asset is held.', ''),
          'weakness': ('The control question, separate from the amount.',
                       'Students treat a counterbalancing error as one that '
                       'needs no action. Two income statements were wrong, '
                       'and so, possibly, is a control.')},
         ['overstates', 'permanent', 'does']),
        ('table', _KINDH, _kind(blank=True), SLATE, _KINDW),
        ('answers', 10),
        ('fig', 'matrix', 'Two errors, two years later',
         ['Closing inventory overstated by %s'
          % money(CH.error_pretax),
          'Depreciation of %s omitted' % money(CH.error_pretax)],
         ['Year 1 profit', 'Year 2 profit', 'Balance sheet after two years'],
         [['Overstated', 'Understated by the same amount', 'Correct again'],
          ['Overstated', 'Correct', 'Still wrong']],
         'Counterbalancing describes the balance sheet alone. Both income '
         'statements in the first row are wrong, and nothing ever fixes '
         'them.'),

        ('part', 'Part 4 · All three kinds together',
         'the comparison the exam asks for'),

        ('task', 'Exercise 2D',
         'Compare a change in estimate, a change in principle and an error.',
         'Complete all three columns.',
         ['Handout 1 Exercise 1A, and Exercises 2A and 2B.'],
         ['The first row separates the error from the other two in a single '
          'word.',
          'The second row separates the change in estimate from the other two, '
          'which is a different split.',
          'Every column requires disclosure, and the third asks what each one '
          'must disclose.']),
        ('table', _COMPH, _comp(blank=True), PRIN, _COMPW),
        ('answers', 12),
        ('fig', 'buckets', 'Two different splits, and that is the difficulty',
         [('BY WHETHER ANYTHING WAS WRONG', ERR,
           ['Error: the old figure was wrong',
            'Principle and estimate: neither was wrong',
            'A one-against-two split']),
          ('BY WHETHER PRIOR YEARS MOVE', PRIN,
           ['Estimate: prior years untouched',
            'Principle and error: prior years restated',
            'A different one-against-two split']),
          ('WHY IT MATTERS', SLATE,
           ['A restatement does not imply a mistake',
            'A change in estimate can be larger than either',
            'Only the note tells a reader which happened'])],
         'The two splits do not line up, which is exactly why the exam asks '
         'about all three at once rather than about any one of them.'),

        ('part', 'Part 5 · What an error says beyond its amount',
         'control, and the reader’s trust'),

        ('task', 'Exercise 2E',
         'Say what an error implies beyond the figure it misstated.',
         'Sort each statement into the column that says whether it is true.',
         ['Exercise 2D.'],
         ['A missed depreciation charge of %s is a small figure against '
          '%s of total assets. Ask whether that makes it unimportant.'
          % (money(CH.error_pretax), money(N.total_assets)),
          'The same control failure that let one charge through could have let '
          'a much larger one through, which is what makes it a material '
          'weakness rather than a small mistake.',
          'One of the statements is about what a restatement does to a '
          'reader’s confidence, which is not an accounting question and is '
          'part of the answer.']),
        ('sortgrid',
         ['Statement about an error', 'TRUE', 'FALSE'],
         ['An error may be immaterial in amount and still signal a control '
          'failure',
          'Correcting an error changes current year profit',
          'The nature of the error must be disclosed',
          'A restatement can affect a reader’s confidence beyond the figure '
          'corrected',
          'A counterbalancing error needs no correction if two years have '
          'passed',
          'Both the error and a change in principle require prior periods to '
          'be restated'],
         ['TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'TRUE'],
         'The fifth is the trap. The balance sheet may be right again and both '
         'income statements are still wrong, so the comparatives still need '
         'restating.'),
        ('fig', 'ranked', 'What the %s error touched' % money(CH.error_pretax),
         [('%s profit, overstated before tax' % PY, CH.error_pretax,
           money(CH.error_pretax), ERR),
          ('%s profit, overstated net of tax' % PY, CH.error_net,
           money(CH.error_net), RUST),
          ('%s profit, after the correction' % Y, 0, 'Nil', OK)],
         'The correction restates the first two bars and leaves the third '
         'alone. A reader who sees a restatement knows the published figures '
         'they relied on were not the right ones.',
         'Effect of the omitted depreciation'),

        ('watch', 'Correcting a prior period error never changes current '
                  'profit. If a question gives you an error from last year and '
                  'offers an effect on this year’s net income, the answer is '
                  'nil, and the amount in the stem is there for the opening '
                  'retained earnings adjustment.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The correction of an error in a prior period is reported as:',
         ['A component of current year profit',
          'An adjustment to the opening balance of retained earnings',
          'Other comprehensive income',
          'A change in accounting estimate'],
         1, 'Level A',
         'A prior period adjustment, because the mistake belongs to a year '
         'already closed. (A) would make this year carry last year’s error.'),

        ('mcq', 'A company omits a depreciation charge that it had all the '
                'information to compute. This is:',
         ['A change in accounting estimate',
          'An error', 'A change in accounting principle',
          'Permitted if immaterial'],
         1, 'Level A',
         'The information was available, so the figure was wrong when '
         'published. (A) is the answer that would let any omission be '
         'reclassified as a revision.'),

        ('mcq', 'Depreciation of %s was omitted last year and the tax rate is '
                '%s. Opening retained earnings this year is adjusted by:'
         % (money(CH.error_pretax), _pc(CH.tax_rate)),
         [money(CH.error_pretax), money(CH.error_net),
          money(CH.error_pretax * CH.tax_rate), 'Nil'],
         1, 'Level B',
         '%s less %s of tax relief is %s. (A) ignores the tax, which the '
         'restatement reverses along with the charge.'
         % (money(CH.error_pretax),
            money(CH.error_pretax * CH.tax_rate),
            money(CH.error_net))),

        ('mcq', 'The effect of that correction on current year profit is:',
         [money(CH.error_net), 'Nil', money(CH.error_pretax),
          money(-CH.error_net)],
         1, 'Level B',
         'The error belongs to the prior year and is corrected there. Current '
         'profit is untouched, which is the single most tested point on this '
         'learning outcome.'),

        ('mcq', 'Closing inventory is overstated at the end of year 1. By the '
                'end of year 2:',
         ['Both years’ profits are correct',
          'The balance sheet is correct again but both income statements were '
          'wrong',
          'Only year 2 is wrong',
          'Nothing was ever wrong'],
         1, 'Level C',
         'Counterbalancing describes the balance sheet, not the income '
         'statements. (A) is the misreading the phrase self-correcting '
         'invites, and it is why the comparatives are still restated.'),

        ('mcq', 'Which of the following requires prior periods to be restated?',
         ['A change in accounting estimate only',
          'A change in accounting principle and an error correction',
          'An error correction only',
          'None of them'],
         1, 'Level B',
         'Both, for opposite reasons: one because nothing was wrong and '
         'comparability requires it, the other because something was. (C) '
         'misses the principle change entirely.'),

        ('mcq', 'An error is small in amount but arose because a control did '
                'not operate. The company should:',
         ['Ignore it, because it is immaterial',
          'Correct it and consider what the control failure implies',
          'Treat it as a change in estimate',
          'Disclose it without correcting it'],
         1, 'Level C',
         'The amount and the control implication are separate questions, and '
         'the same failure could have admitted a much larger error. (A) '
         'answers only the first of the two.'),

        ('tip', 'For any correction question, write the year the mistake '
                'belongs to at the top of the page. If it is a closed year the '
                'adjustment goes to opening retained earnings and current '
                'profit does not move, and that one line answers most of what '
                'the exam asks here.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the error, corrected'),
        ('table', _ERRH, _err(), ERR, _ERRW),
        ('h3', 'Exercise 2C · which errors counterbalance'),
        ('table', _KINDH, _kind(), SLATE, _KINDW),
        ('h3', 'Exercise 2D · all three kinds of change'),
        ('table', _COMPH, _comp(), PRIN, _COMPW),
        ('prose', 'The last row of the first schedule is the one that catches '
                  'people out. The error was %s, the adjustment to opening '
                  'retained earnings is %s, and the effect on %s profit is '
                  'nil. A question that offers any of the first two as an '
                  'effect on this year is offering a figure from the right '
                  'computation and the wrong year.'
                  % (money(CH.error_pretax), money(CH.error_net), Y), 'R2'),
        ('prose', 'The third schedule is worth re-reading as two separate '
                  'splits rather than one. Only the error involves something '
                  'having been wrong; only the change in estimate leaves prior '
                  'periods alone. Those two lines do not divide the three the '
                  'same way, and almost every question on A.4(c) lives in the '
                  'gap between them.', 'R2'),
    ],
)
