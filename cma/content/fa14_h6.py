# -*- coding: utf-8 -*-
"""Volume 14, Handout 6 — Contingencies: Probable, Reasonably Possible,
Remote.

Outside the CMA. No section of either part asks for this; it is here because
intermediate accounting teaches it and Volume 7's warranty provision is one
handout away from it.
"""
from fadata import N, BD, W, Y
from data import money, num

DEBT, PRICE, SLATE, TERM = '6D3F7E', '1F6F8F', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_LADDERH = ['Likelihood of the loss', 'If the amount can be estimated',
            'If it cannot']
_LADDERW = [30, 35, 35]


def _ladder(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Probable', c('Accrue it, and disclose'), c('Disclose only')],
        ['Reasonably possible', c('Disclose only'), c('Disclose only')],
        ['Remote', c('Neither accrue nor disclose'),
         c('Neither accrue nor disclose')],
    ]


_CASEH = ['Northwind’s %s year' % Y, 'Treatment']
_CASEW = [66, 34]


def _case(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Warranty claims on %s of sales, probable and estimable at %s'
         % (money(N.sales), money(W.charge)), c('Accrue %s' % money(W.charge))],
        ['A lawsuit, probable, with losses between %s and %s and no better '
         'estimate' % (money(BD.suit_low), money(BD.suit_high)),
         c('Accrue %s under US GAAP' % money(BD.suit_gaap))],
        ['A second lawsuit, reasonably possible, estimated at %s'
         % money(300_000), c('Disclose only')],
        ['A third claim, remote', c('Neither accrue nor disclose')],
        ['A counterclaim Northwind expects to win, %s' % money(250_000),
         c('Disclose at most; never accrue')],
    ]


HANDOUT = dict(
    n=6,
    title='Contingencies: Probable, Reasonably Possible, Remote',
    subtitle='A lawsuit that might cost between %s and %s. One framework '
             'accrues %s and the other accrues %s.'
             % (money(BD.suit_low), money(BD.suit_high),
                money(BD.suit_gaap), money(BD.suit_ifrs)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the ladder, R3 for the classification, which uses the '
                 'standard’s own three words.',
        collocations=['accrue a loss contingency',
                      'disclose a possible obligation',
                      'estimate a range of outcomes',
                      'assess the likelihood of an outflow',
                      'recognise a provision',
                      'confirm a contingency by a future event'],
        pairs=['probable / reasonably possible / remote',
               'accrue / disclose',
               'loss contingency / gain contingency',
               'range / best estimate'],
        nots=['A contingency is not an estimate that happens to be uncertain. '
              'Its existence depends on a future event, not just its amount.',
              'A gain contingency is never accrued. The asymmetry is '
              'deliberate and the exam tests it.'],
    ),

    objectives=[
        'Define a contingency and say what makes one.',
        'State the three likelihood thresholds.',
        'Decide whether to accrue, disclose, or do neither.',
        'Account for a range of possible losses.',
        'Say why a gain contingency is treated differently.',
    ],

    terms=[
        ('contingency',
         'An existing condition whose outcome will be confirmed only by a '
         'future event outside the company’s control.', 'الالتزام المحتمل',
         'The uncertainty is about whether an obligation exists at all, not '
         'merely about its amount.'),
        ('loss contingency',
         'A contingency whose resolution would create a liability or reduce an '
         'asset.', 'خسارة محتملة',
         'Accrued when probable and estimable. Disclosed in most other cases, '
         'which is why the notes are longer than the balance sheet.'),
        ('gain contingency',
         'A contingency whose resolution would create a gain.',
         'مكسب محتمل',
         'Never accrued, however likely. Disclosed only where realisation is '
         'likely, and with care not to imply it is assured.'),
        ('probable',
         'Likely to occur, and the threshold for accruing a loss contingency '
         'under US GAAP.', 'مرجّح',
         'A high bar in US GAAP and a lower one under IFRS, where probable is '
         'read as more likely than not. The same facts can give different '
         'answers.'),
        ('reasonably possible',
         'More than remote but less than probable: the middle rung, which '
         'requires disclosure and no accrual.', 'محتمل بدرجة معقولة',
         'The rung most exam questions land on, because it is the one where '
         'nothing reaches the face of the statements.'),
        ('remote',
         'So unlikely that neither accrual nor disclosure is required.',
         'بعيد الاحتمال',
         'The only rung on which a company may say nothing at all, which is '
         'why management and auditors argue about it.'),
    ],

    blocks=[
        ('scene', 'Four claims and a counterclaim', [
            'At 31 December %s Northwind faces three claims and has brought '
            'one of its own.' % Y,
            'The first is probable and will cost between %s and %s, with no '
            'point in that range more likely than any other. The second is '
            'reasonably possible at about %s. The third is remote.'
            % (money(BD.suit_low), money(BD.suit_high), money(300_000)),
            'The counterclaim is one Northwind expects to win, for %s.'
            % money(250_000),
            'Four situations, four different answers, and the warranty '
            'provision of Volume 7 is a fifth that you have already accrued.',
        ]),
        ('fig', 'workplace', 'Four claims on the controller’s desk',
         [('Rana', 'Controller — decides accrue, disclose or neither', 'w',
           SLATE),
          ('Maya', 'Counsel — assesses how likely each claim is', 'w',
           TERM),
          ('Samir', 'Chief executive — wants the counterclaim recognised',
           'm', DEBT)],
         [('scale', 'Probable'),
          ('doc', 'Possible'),
          ('cross', 'Remote'),
          ('tick', 'A gain')],
         'Samir will not get what he wants. A gain is never accrued however '
         'likely it is, and that asymmetry is Part 4 of this handout.'),

        ('part', 'Part 1 · What makes a contingency',
         'uncertain existence, not uncertain amount'),

        ('task', 'Exercise 6A',
         'Define a contingency and distinguish it from an ordinary estimate.',
         'Read and complete. Write one word in each space.',
         ['Volume 7 Handout 1, where the warranty provision was accrued.',
          'Volume 3 Handout 2, on estimating credit losses.'],
         ['Northwind’s depreciation charge is uncertain in amount and nobody '
          'calls it a contingency. Ask what is different about the lawsuit.',
          'The lawsuit may cost nothing at all. The machine will certainly '
          'wear out.',
          'The last blank is the event that will settle the matter, and it is '
          'not in the company’s hands.']),
        ('fill', 'R2',
         ['Almost every figure in these volumes is an estimate. Depreciation, '
          'the allowance for credit losses and the warranty provision are all '
          'uncertain in {amount}, and none of them is a contingency.',
          'A contingency is different because the obligation may not {exist} '
          'at all. Northwind may lose the lawsuit and owe %s, or win it and '
          'owe nothing.' % money(BD.suit_high),
          'What settles the question is a future {event} outside the company’s '
          'control: a judgment, a settlement, a regulator’s decision. Until it '
          'happens the position cannot be resolved by better information '
          'alone.',
          'So the accounting asks a question it asks nowhere else. Not how '
          'much, but how {likely}, and the answer decides whether anything is '
          'recorded.'],
         {'amount': ('Uncertain size, certain existence.', ''),
          'exist': ('It may turn out there was never an obligation.',
                    'Students treat any uncertain figure as a contingency. '
                    'Depreciation is uncertain in amount and certain in '
                    'existence.'),
          'event': ('Outside the company’s control.', ''),
          'likely': ('Likelihood first, measurement second.', '')},
         ['timing', 'arise', 'much']),
        ('fig', 'scale',
         'AN ESTIMATE',
         ['The obligation certainly exists',
          'Only the amount is in doubt',
          'Depreciation, credit losses, warranties',
          'Recorded, at the best estimate'],
         'A CONTINGENCY',
         ['The obligation may not exist at all',
          'A future event will settle it',
          'Lawsuits, guarantees, tax disputes',
          'Recorded only if probable and estimable']),

        ('part', 'Part 2 · The three rungs',
         'and what each one requires'),

        ('task', 'Exercise 6B',
         'State what each likelihood threshold requires.',
         'Complete both right-hand columns.',
         ['Exercise 6A.'],
         ['Two conditions must both hold before anything is accrued, and the '
          'columns separate them.',
          'The middle row is the same in both columns, which is worth noticing '
          'before you fill it in.',
          'The bottom row is the only one where a company may say nothing at '
          'all.']),
        ('table', _LADDERH, _ladder(blank=True), SLATE, _LADDERW),
        ('answers', 6),
        ('fig', 'fork', 'What does this loss contingency require?',
         [('Is the loss probable and can the amount be estimated?',
           'YES → accrue it, and disclose it', OK),
          ('Is it probable but not estimable, or reasonably possible?',
           'Disclose it, and accrue nothing', SLATE),
          ('Is it remote?',
           'NO accrual and no disclosure required', RUST)]),

        ('part', 'Part 3 · A range with no best estimate',
         'where the frameworks part'),

        ('prose', 'Northwind’s first lawsuit is probable and will cost '
                  'somewhere between %s and %s, with no point in the range '
                  'better supported than any other. Both frameworks accrue '
                  'something, and they do not accrue the same amount.'
                  % (money(BD.suit_low), money(BD.suit_high)), 'R2'),

        ('task', 'Exercise 6C',
         'Account for a probable loss stated as a range.',
         'Read and complete, then record the entry underneath.',
         ['Exercise 6B, and Volume 12 for the US GAAP and IFRS pattern.'],
         ['US GAAP takes the lowest amount in the range when no point in it is '
          'a better estimate than the others.',
          'IFRS takes the midpoint of a continuous range, which here is %s.'
          % money(BD.suit_ifrs),
          'The last blank is what both frameworks require about the rest of '
          'the range, whichever figure is accrued.']),
        ('fill', 'R2',
         ['The loss is probable and the range is %s to %s, with no point '
          'better supported than any other. Something must be accrued, because '
          'both conditions for accrual are {met}.'
          % (money(BD.suit_low), money(BD.suit_high)),
          'US GAAP accrues the {lowest} amount in the range, %s, on the ground '
          'that no greater amount has been shown to be probable.'
          % money(BD.suit_gaap),
          'IFRS accrues the {midpoint} of a continuous range instead, %s, on '
          'the ground that it is the best single representation of the '
          'expected outflow.' % money(BD.suit_ifrs),
          'Both frameworks then require the range itself to be {disclosed}, so '
          'a reader who wants the worst case can find the %s whichever number '
          'is on the balance sheet.' % money(BD.suit_high)],
         {'met': ('Probable, and a range is an estimate.', ''),
          'lowest': ('The low end, under US GAAP.', ''),
          'midpoint': ('The middle of the range, under IFRS.',
                       'Students apply one rule to both frameworks. The '
                       'difference is small in principle and %s here.'
                       % money(BD.suit_ifrs - BD.suit_gaap)),
          'disclosed': ('The range, whatever was accrued.', '')},
         ['highest', 'average', 'ignored']),
        ('journal', [
            ('J1', ('The probable lawsuit accrued at the low end of the range, '
                    'under US GAAP.',
                    'An expense now, and a liability that may never be paid.'),
             [('Loss from Litigation', 0, '', ''),
              ('Estimated Liability', 1, '', '')]),
        ]),
        ('fig', 'ranked', 'The same lawsuit, three figures',
         [('The high end of the range', BD.suit_high,
           money(BD.suit_high), RUST),
          ('Accrued under IFRS, the midpoint', BD.suit_ifrs,
           money(BD.suit_ifrs), TERM),
          ('Accrued under US GAAP, the low end', BD.suit_gaap,
           money(BD.suit_gaap), DEBT)],
         'The highest bar is disclosed under both frameworks and accrued under '
         'neither. The difference between the two accruals is %s.'
         % money(BD.suit_ifrs - BD.suit_gaap),
         'A probable loss of between %s and %s'
         % (money(BD.suit_low), money(BD.suit_high))),

        ('part', 'Part 4 · The asymmetry',
         'why a likely gain is not recorded'),

        ('task', 'Exercise 6D',
         'Say why a gain contingency is treated differently from a loss.',
         'Sort each item into the column it belongs in.',
         ['Exercise 6C, and Volume 1 Handout 1 on the qualities of useful '
          'information.'],
         ['Northwind expects to win its counterclaim for %s. Ask whether it '
          'may record the receivable.' % money(250_000),
          'A company that records likely gains and likely losses alike would '
          'report a result that is right on average and never cautious.',
          'Two of the six items are about the warranty provision, which is not '
          'a contingency at all once it is probable and estimable.']),
        ('sortgrid',
         ['Item', 'ACCRUE', 'DISCLOSE ONLY', 'NEITHER'],
         ['A probable, estimable loss of %s' % money(BD.suit_gaap),
          'A reasonably possible loss of %s' % money(300_000),
          'A remote loss',
          'A probable gain of %s on a counterclaim' % money(250_000),
          'Warranty claims expected on this year’s sales',
          'A gain that is virtually certain and already realised'],
         ['ACCRUE', 'DISCLOSE ONLY', 'NEITHER', 'DISCLOSE ONLY', 'ACCRUE',
          'ACCRUE'],
         'The last row is the escape: once a gain is realised it is no longer '
         'contingent, and ordinary revenue recognition applies.'),
        ('fig', 'matrix', 'Losses and gains, treated differently on purpose',
         ['A probable loss', 'A probable gain'],
         ['Accrued?', 'Disclosed?', 'Why'],
         [['Yes, if estimable', 'Yes',
           'A reader should know what may have to be paid'],
          ['Never', 'Only if realisation is likely',
           'Recording a gain before it is realised overstates the result']],
         'The asymmetry is deliberate. It is the one place in these volumes '
         'where the framework prefers caution to neutrality, and the exam asks '
         'why.'),

        ('part', 'Part 5 · Northwind’s five situations',
         'the ladder applied'),

        ('task', 'Exercise 6E',
         'Decide the treatment of each of Northwind’s five situations.',
         'Complete the right-hand column.',
         ['Exercises 6B, 6C and 6D.'],
         ['One of the five is not a contingency at all once it has been '
          'measured, and Volume 7 already accrued it.',
          'Two of the five reach the notes and not the balance sheet.',
          'One of the five reaches neither, and one is the counterclaim.']),
        ('table', _CASEH, _case(blank=True), DEBT, _CASEW),
        ('answers', 5),
        ('fig', 'buckets', 'Where each of the five ends up',
         [('ON THE BALANCE SHEET', OK,
           ['Warranty provision %s' % money(W.charge),
            'Litigation liability %s' % money(BD.suit_gaap),
            'Both probable and both estimable']),
          ('IN THE NOTES ONLY', SLATE,
           ['The reasonably possible claim',
            'The counterclaim Northwind expects to win',
            'Neither reaches a total anywhere']),
          ('NOWHERE', RUST,
           ['The remote claim',
            'No accrual and no disclosure required',
            ''])],
         'Two of the five are measured, two are described, and one is not '
         'mentioned. That distribution is typical, and it is why the notes to '
         'a real set of accounts run longer than the statements.'),

        ('watch', 'A gain contingency is never accrued, however probable. If a '
                  'question offers you a likely recovery and an accrual, it is '
                  'offering the symmetric answer, and the asymmetry is the '
                  'whole point of the topic.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A loss contingency is accrued when it is:',
         ['Reasonably possible and estimable',
          'Probable and the amount can be reasonably estimated',
          'Probable, whether or not it can be estimated',
          'Disclosed in the notes'],
         1, 'Level A',
         'Both conditions, together. (C) drops the measurement condition, and '
         'a probable loss that cannot be estimated is disclosed rather than '
         'accrued.'),

        ('mcq', 'A loss that is reasonably possible and can be estimated is:',
         ['Accrued', 'Disclosed in the notes', 'Ignored',
          'Charged to retained earnings'],
         1, 'Level A',
         'The middle rung requires disclosure and no accrual. (A) is the '
         'commonest error and would put an amount on the balance sheet that '
         'the threshold does not support.'),

        ('mcq', 'A probable loss is estimated at between %s and %s, with no '
                'amount in the range a better estimate than any other. Under '
                'US GAAP the company accrues:'
         % (money(BD.suit_low), money(BD.suit_high)),
         [money(BD.suit_high), money(BD.suit_gaap), money(BD.suit_ifrs),
          'Nothing'],
         1, 'Level B',
         'The low end, with the range disclosed. (C) is the IFRS answer, and '
         'the %s gap between them is one of the differences Volume 12 would '
         'have listed had the CMA asked for it.'
         % money(BD.suit_ifrs - BD.suit_gaap)),

        ('mcq', 'Under IFRS, the same range would be accrued at:',
         [money(BD.suit_low), money(BD.suit_ifrs), money(BD.suit_high),
          'Nothing'],
         1, 'Level B',
         'IFRS takes the midpoint of a continuous range as the best single '
         'representation of the expected outflow. (A) is the US GAAP answer, '
         'and the pairing is what makes this examinable.'),

        ('mcq', 'A company expects to win a lawsuit it has brought, for a '
                'probable %s. It should:' % money(250_000),
         ['Accrue a %s receivable' % money(250_000),
          'Disclose the gain contingency without accruing it',
          'Accrue half of it',
          'Do nothing at all'],
         1, 'Level C',
         'Gain contingencies are never accrued; disclosure is permitted where '
         'realisation is likely, worded so as not to imply it is assured. (A) '
         'applies the loss rule symmetrically, which is exactly what the '
         'standard refuses to do.'),

        ('mcq', 'A remote loss contingency requires:',
         ['Accrual only', 'Disclosure only', 'Accrual and disclosure',
          'Neither accrual nor disclosure'],
         1, 'Level A',
         'The bottom rung is the one case where nothing is required. Remote is '
         'also the rung most often argued over, because it is the only one '
         'that keeps a claim out of the notes entirely.'),

        ('mcq', 'Northwind’s warranty provision of %s differs from its lawsuit '
                'accrual in that:' % money(W.charge),
         ['It is larger',
          'The obligation certainly exists and only its amount is estimated',
          'It is disclosed rather than accrued',
          'It is a gain contingency'],
         1, 'Level C',
         'Goods have been sold and some will fail, so the obligation exists; '
         'only the amount is in doubt. That is an estimate rather than a '
         'contingency, which is why Volume 7 accrued it without ever using the '
         'ladder in this handout.'),

        ('tip', 'Ask the two questions in order and in the right order: how '
                'likely, then how much. Likelihood decides whether anything is '
                'recorded at all, and only then does measurement matter. '
                'Reversing them produces an accrual for a possible loss, which '
                'is the error the ladder exists to prevent.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6B · the ladder, completed'),
        ('table', _LADDERH, _ladder(), SLATE, _LADDERW),
        ('h3', 'Exercise 6E · Northwind’s five situations'),
        ('table', _CASEH, _case(), DEBT, _CASEW),
        ('h3', 'Exercise 6C · the accrual entry'),
        ('journal', [
            ('J1', 'The probable lawsuit accrued at the low end, under US '
                   'GAAP.',
             [('Loss from Litigation', 0, money(BD.suit_gaap), ''),
              ('Estimated Liability', 1, '', money(BD.suit_gaap))]),
        ]),
        ('prose', 'The middle column of the ladder is the one to memorise, '
                  'because it is the same in both of its cells: a loss that is '
                  'probable but not estimable gets exactly the same treatment '
                  'as one that is only reasonably possible. Disclosure, and '
                  'nothing on the face of anything.', 'R2'),
        ('prose', 'This handout is outside the CMA. No section of either part '
                  'asks for the ladder, the range rule or the gain asymmetry. '
                  'It is here because a reader who has accrued Volume 7’s '
                  'warranty provision without ever being told why some '
                  'obligations are accrued and others are not has learned a '
                  'procedure rather than a principle.', 'R2'),
    ],
)
