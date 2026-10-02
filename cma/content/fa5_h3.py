# -*- coding: utf-8 -*-
"""Volume 5, Handout 3 — Recommending a Depreciation Method.

Covers A.2(m): recommending a depreciation method for a given set of data.
"""
from fadata import N, D, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

_RECH = ['The asset', 'Recommend', 'The fact that decides it']
_RECW = [34, 20, 46]


def _rec(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['An office building, used evenly for forty years',
         c('Straight line'), c('The benefit is the same in every year')],
        ['A delivery van that will be worked hardest when new',
         c('An accelerated method'),
         c('Most of the benefit arrives in the early years')],
        ['A press whose output varies from 50,000 to 300,000 units a year',
         c('Units of production'),
         c('The benefit follows use, and use is measurable')],
        ['A machine that will need rising repairs as it ages',
         c('An accelerated method'),
         c('Depreciation falls as repairs rise, so total cost stays level')],
        ['A fleet of identical small tools, individually immaterial',
         c('Straight line'),
         c('The cost of a more exact method exceeds the benefit')],
    ]


_CHGH = ['Situation', 'Treated as', 'Prior years restated?']
_CHGW = [44, 30, 26]

HANDOUT = dict(
    n=3,
    title='Recommending a Depreciation Method',
    subtitle='The method should follow the pattern in which the asset delivers its '
             'benefit. Say what that pattern is and the method names itself.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final case. The '
                 'vocabulary here is evaluative rather than computational.',
        collocations=['reflect the pattern of consumption',
                      'recommend a method for an asset',
                      'revise an estimate prospectively',
                      'apply a change in principle retrospectively',
                      'justify the method chosen',
                      'disclose the useful lives applied'],
        pairs=['change in estimate / change in principle',
               'prospective / retrospective',
               'pattern of benefit / pattern of cash',
               'recommend / require'],
        nots=['The method is not chosen to produce a desired profit. It is chosen '
              'to reflect how the asset delivers its benefit.',
              'Revising a useful life is not an error and is not a change of '
              'method. It is a change in estimate, handled differently from '
              'both.'],
    ),

    objectives=[
        'State the principle that should govern the choice of method.',
        'Recommend a method for five assets and give the deciding fact.',
        'Say what the recommendation trades away.',
        'Distinguish a change in estimate from a change in accounting principle.',
        'Compute depreciation after a useful life has been revised.',
    ],

    terms=[
        ('pattern of consumption',
         'The way in which the benefit from an asset is used up over its life.',
         'نمط الاستهلاك',
         'The principle behind every recommendation. Name the pattern and the '
         'method follows from it.'),
        ('change in estimate',
         'A revision of a useful life, a residual value or an expected output.',
         'التغير في التقدير',
         'Applied prospectively: the remaining carrying amount is spread over the '
         'remaining life. Prior years are never touched.'),
        ('prospective application',
         'Applying a revision from now onwards, leaving earlier periods alone.',
         'التطبيق المستقبلي',
         'The treatment for every change in estimate. It is what distinguishes '
         'one from a change of method.'),
        ('component depreciation',
         'Depreciating significant parts of an asset separately over their own '
         'lives.', 'إهلاك المكونات',
         'A roof and a structure wear out at different rates. Required under '
         'IFRS, permitted under US GAAP.'),
        ('materiality',
         'The threshold below which a more exact treatment is not worth its cost.',
         'الأهمية النسبية',
         'The honest reason small assets are depreciated on a simple basis rather '
         'than an accurate one.'),
    ],

    blocks=[
        ('scene', 'The question Handouts 1 and 2 did not ask', [
            'You can now compute four depreciation schedules and say what each '
            'does to the statements. What you have not been asked is which one a '
            'company should use.',
            'That question is Level C in the learning outcomes and it is where the '
            'Case-Based Questions live. It has a governing principle, and the '
            'principle is short.',
            'An asset should be depreciated in a pattern that reflects how its '
            'benefit is actually consumed. Say how the benefit arrives, and the '
            'method is usually obvious.',
        ]),
        ('fig', 'matrix', 'Name the pattern and the method names itself',
         ['Benefit arrives evenly', 'Benefit is greatest when new',
          'Benefit follows use', 'Benefit is impossible to pattern'],
         ['Recommend', 'Because'],
         [['Straight line', 'Each year receives the same benefit'],
          ['An accelerated method', 'Early years receive more'],
          ['Units of production', 'Use is measurable and varies'],
          ['Straight line', 'Simplicity beats false precision']],
         'The last row is the honest default. Where no pattern can be established, '
         'the simplest method is also the most defensible.'),

        ('part', 'Part 1 · The governing principle',
         'and what it is not'),

        ('task', 'Exercise 3A',
         'State the principle behind the choice, and rule out the wrong reasons.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for what each method does to the statements.'],
         ['Blank 1 is the pattern the method is supposed to follow.',
          'Blank 3 is the wrong reason, and it is the one companies are most '
          'tempted by.',
          'The last blank is the default where no pattern can be established.']),
        ('fill', 'R2',
         ['An asset is depreciated in the pattern in which its benefit is '
          '{consumed}. If a machine delivers the same service every year, the '
          'charge should be the same every year; if it delivers most of its '
          'service when new, the charge should be larger at the start.',
          'The method is therefore a statement about the asset rather than about '
          'the company. A delivery van and an office building are depreciated '
          'differently because they wear out {differently}, and for no other '
          'reason.',
          'What the method is not chosen for is the {profit} it reports. A '
          'company that selects straight line because it flatters this '
          'year’s margin has chosen for a reason the standards do not '
          'recognise, and an examiner will not accept it either.',
          'Where no pattern can honestly be established, the straight line method '
          'is used. That is not a failure. A simple method applied openly is more '
          'useful to a reader than a {precise} one built on an estimate nobody can '
          'defend.'],
         {'consumed': ('The pattern of consumption governs.', ''),
          'differently': ('A statement about the asset, not the company.', ''),
          'profit': ('Not a permitted reason.',
                     'Students justify a method by its effect on reported profit, '
                     'which is exactly the reasoning the principle excludes.'),
          'precise': ('False precision is worse than openness.', '')},
         ['produced', 'tax', 'simple']),
        ('fig', 'scale',
         'GOOD REASONS TO CHOOSE A METHOD',
         ['The benefit arrives evenly',
          'Most of the benefit arrives early',
          'Output varies widely and is measured',
          'The amounts are too small to justify precision'],
         'REASONS THAT ARE NOT ACCEPTED',
         ['It reports a higher profit this year',
          'It is what the competitor uses',
          'It reduces the tax bill',
          'It makes a covenant easier to meet']),

        ('part', 'Part 2 · Five assets',
         'the recommendation and the deciding fact'),

        ('task', 'Exercise 3B',
         'Recommend a method for five assets and name the fact that decides each.',
         'Complete the table. One method and one reason in each row.',
         ['Exercise 3A'],
         ['Ask how the benefit arrives before you think about any method.',
          'Two of these five point to the same answer for completely different '
          'reasons.',
          'The repairs row is the one most students miss. Think about total annual '
          'cost rather than depreciation alone.']),
        ('table', _RECH, _rec(blank=True), SL, _RECW),
        ('answers', 10),
        ('fig', 'ranked', 'The repairs argument, year by year',
         [('Year 1 · depreciation high, repairs nil', D.ddb[0],
           money(D.ddb[0]), DDB),
          ('Year 3 · depreciation falling, repairs rising', D.ddb[2],
           money(D.ddb[2]), DDB),
          ('Year 5 · depreciation low, repairs high', D.ddb[4],
           money(D.ddb[4]), DDB)],
         'An accelerated method falls as repairs rise, so the total annual cost of '
         'owning the asset stays roughly level. A straight line charge against '
         'rising repairs makes later years look progressively worse.'),

        ('part', 'Part 3 · Changing your mind',
         'estimate or principle?'),

        ('prose', 'Estimates made at the start of an asset’s life turn out to '
                  'be wrong. A machine lasts longer than expected, or the residual '
                  'value proves optimistic. The company revises the estimate, and '
                  'the treatment is not what students expect.', 'R2'),
        ('prose', 'A revised estimate is applied from now onwards. The carrying '
                  'amount at the date of the revision is spread over the remaining '
                  'life on the new basis, and the earlier years are left exactly '
                  'as reported. Nothing is restated and no catch-up adjustment is '
                  'made.', 'R2'),

        ('prose', 'That treatment has a name worth knowing, because the exam '
                  'uses it in the options rather than describing it. Applying a '
                  'revision from now onwards and leaving the earlier years alone '
                  'is prospective application, and it is what separates a change '
                  'in estimate from everything else in this part.', 'R2'),

        ('task', 'Exercise 3C',
         'Distinguish a change in estimate from a change in accounting principle.',
         'Complete the table. Write the treatment and whether prior years are '
         'restated.',
         ['Exercise 3B, and the two paragraphs above.'],
         ['Two of these are changes in estimate and one is a change in principle. '
          'The fourth is neither.',
          'A change in estimate is never applied backwards.',
          'A change of method is applied backwards, so that a reader can still '
          'compare the years.']),
        ('table', _CHGH,
         [['The useful life is revised from 5 years to 8',
           '______________', '______________'],
          ['The residual value is revised downwards',
           '______________', '______________'],
          ['The company moves from straight line to an accelerated method',
           '______________', '______________'],
          ['A machine bought three years ago was never recorded at all',
           '______________', '______________']],
         SYD, _CHGW),
        ('answers', 8),
        ('fig', 'fork', 'Three different things that look alike',
         [('Did the facts change, or did our view of the future change?',
           'A CHANGE IN ESTIMATE → apply it from now on; restate nothing',
           SL),
          ('Did we move from one acceptable method to another?',
           'A CHANGE IN PRINCIPLE → apply it retrospectively and restate',
           SYD),
          ('Was something simply recorded wrongly?',
           'AN ERROR → correct it and restate; it was never a choice', RUST)]),

        ('task', 'Exercise 3D',
         'Compute depreciation after a useful life has been revised.',
         'Read and complete.',
         ['Exercise 3C'],
         ['Find the carrying amount at the date of the revision first. Everything '
          'follows from it.',
          'The remaining depreciable amount is that carrying amount less the '
          'residual value.',
          'Spread it over the remaining life, not over the original life.']),
        ('fill', 'R2',
         ['Suppose the %s has been depreciated on a straight line basis for two '
          'years, so accumulated depreciation is %s and the carrying amount is '
          '{%s}.' % (D.name, money(2 * D.sl[0]), money(D.cost - 2 * D.sl[0])),
          'At the start of year 3 the company decides the machine will last eight '
          'years in total rather than five, with the residual value unchanged at '
          '%s. Six years of life {remain}.' % money(D.residual),
          'The amount still to be written off is the carrying amount less the '
          'residual value: %s less %s, which is {%s}.'
          % (money(D.cost - 2 * D.sl[0]), money(D.residual),
             money(D.cost - 2 * D.sl[0] - D.residual)),
          'Spread over the six remaining years, the new annual charge is %s. The '
          'first two years are left exactly as they were reported, because a '
          'change in estimate is applied {prospectively} and never backwards.'
          % money((D.cost - 2 * D.sl[0] - D.residual) / 6)],
         {money(D.cost - 2 * D.sl[0]): ('%s less two years at %s.'
                                        % (money(D.cost), money(D.sl[0])), ''),
          'remain': ('Eight in total, two already used.', ''),
          money(D.cost - 2 * D.sl[0] - D.residual): (
              'Carrying amount less the residual value.', ''),
          'prospectively': ('From now on; the past is left alone.',
                            'Students recompute the first two years on the new '
                            'life and post a catch-up adjustment. That is the '
                            'treatment for an error, not for an estimate.')},
         [money(D.cost), 'three', 'retrospectively']),
        ('fig', 'timeline', 'A revised life, applied from the date of the revision',
         [('Years 1 and 2', 'charged at %s, and left alone' % money(D.sl[0]), SL),
          ('Start of year 3', 'carrying amount %s; life revised to eight years'
           % money(D.cost - 2 * D.sl[0]), SYD),
          ('Years 3 to 8', 'charged at %s a year on the new basis'
           % money((D.cost - 2 * D.sl[0] - D.residual) / 6), UOP)],
         'No restatement, no catch-up. The past was the best estimate available at '
         'the time, and the standards treat it as such.'),

        ('part', 'Part 4 · Writing the recommendation',
         'what a complete answer contains'),

        ('task', 'Exercise 3E',
         'Write a complete recommendation, including what it trades away.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 3A to 3D'],
         ['Blank 1 is the thing the recommendation has to point at in the '
          'scenario.',
          'Blank 3 is the practice of depreciating parts of an asset separately, '
          'which the roof example calls for.',
          'The last blank is what a reader needs in order to compare this company '
          'with another.']),
        ('fill', 'R3',
         ['A recommendation names a method and points at the {pattern} in the '
          'scenario that justifies it. Without that second half it earns nothing, '
          'because any of the four methods can be named at random.',
          'It then names what the choice costs. Recommending an accelerated method '
          'for a van is right, and it is better if you add that the company '
          'accepts a lower reported profit in the early years and a carrying '
          'amount that falls faster than the van’s resale value.',
          'Some assets need more than one method. A building whose roof lasts '
          'fifteen years and whose structure lasts fifty is better depreciated by '
          '{component}, with each part written off over its own life. That '
          'approach is required under IFRS and permitted under US GAAP.',
          'Whatever is chosen, the useful lives and the methods applied must be '
          '{disclosed}. Two companies depreciating identical assets over different '
          'lives report different profits for decades, and a reader cannot adjust '
          'for what has not been told.'],
         {'pattern': ('Point at the fact in the scenario.', ''),
          'component': ('Different parts, different lives.', ''),
          'disclosed': ('Lives and methods, both.',
                        'Students stop at naming a method. The trade-off and the '
                        'disclosure are where the remaining marks sit.')},
         ['profit', 'estimate', 'revised']),
        ('fig', 'buckets', 'What a complete recommendation contains',
         [('THE METHOD', SL,
           ['Named clearly', 'One of the four', 'Necessary, not sufficient',
            '', '']),
          ('THE DECIDING FACT', SYD,
           ['The pattern of benefit', 'Quoted from the scenario',
            'This is where the marks are', '', '']),
          ('THE TRADE-OFF', DDB,
           ['What the choice costs', 'Usually a reported profit effect',
            'And what must be disclosed', '', ''])],
         'Write all three even when you are unsure of the first. The second and '
         'third are marked independently.'),

        ('watch', 'A revised useful life is a change in estimate and is applied '
                  'prospectively. A change of method is applied retrospectively. '
                  'An exam question that describes one and offers the other’s '
                  'treatment among the options is testing exactly this.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The depreciation method selected for an asset should reflect:',
         ['The pattern in which the asset’s benefit is consumed',
          'The pattern of cash flows the asset generates',
          'The method used by other companies in the industry',
          'The method that produces the most stable reported profit'],
         0, 'Level A',
         'The method follows the pattern of consumption. (B) is close but wrong: '
         'cash flows and benefit are not the same thing. (C) and (D) are reasons '
         'the standards do not recognise, however common they are in practice.'),

        ('mcq', 'A machine will require increasing repair costs as it ages. An '
                'accelerated depreciation method is often recommended because:',
         ['It reduces total costs over the life of the asset',
          'The falling depreciation charge offsets the rising repair costs, so the '
          'total annual cost of ownership stays level',
          'Repairs are capitalised under an accelerated method',
          'It defers tax'],
         1, 'Level C',
         'The argument is about the total annual cost of owning the asset, not '
         'about depreciation alone. (A) is false — the total written off is '
         'the same under every method. (D) is a real effect and not a permitted '
         'reason.'),

        ('mcq', 'A company revises the useful life of an asset from 5 years to 8 '
                'at the start of year 3. The correct treatment is to:',
         ['Restate years 1 and 2 using the new life',
          'Spread the carrying amount less residual value over the 6 remaining '
          'years, leaving years 1 and 2 unchanged',
          'Record a catch-up adjustment in year 3 for the excess charged earlier',
          'Treat the revision as the correction of an error'],
         1, 'Level B',
         'A change in estimate is applied prospectively. (A) and (C) both reach '
         'backwards, which is the treatment for an error, and (D) names it as one '
         '— but the earlier figures were the best estimate available at the '
         'time, which is not a mistake.'),

        ('mcq', 'Which of the following IS a change in accounting principle rather '
                'than a change in estimate?',
         ['Revising the residual value of a machine',
          'Revising the expected total output of a press',
          'Moving from straight line to sum of the years’ digits',
          'Revising the useful life of a building'],
         2, 'Level B',
         'A move between two acceptable methods is a change in principle, applied '
         'retrospectively. The other three are revisions of estimates, applied '
         'prospectively, and the difference in treatment is substantial.'),

        ('mcq', 'A building has a roof expected to last 15 years and a structure '
                'expected to last 50. Depreciating the two separately is called:',
         ['Composite depreciation', 'Group depreciation',
          'Component depreciation', 'Partial depreciation'],
         2, 'Level A',
         'Component depreciation writes each significant part off over its own '
         'life. It is required under IFRS and permitted under US GAAP, which makes '
         'it one of the differences Volume 12 returns to.'),

        ('mcq', 'A company depreciates a large number of individually immaterial '
                'small tools on a straight line basis over three years. This is '
                'defensible because:',
         ['Straight line is always the correct method',
          'The cost of applying a more exact method would exceed the benefit of '
          'the extra precision',
          'Small tools have no pattern of consumption',
          'The tools are not really assets'],
         1, 'Level C',
         'This is materiality used properly: a simple method applied openly beats '
         'a precise one that costs more than it is worth. (A) overstates the case '
         'and (C) is not true — the pattern exists and is simply not worth '
         'measuring.'),

        ('mcq', 'The most complete answer to a question asking which depreciation '
                'method a company should adopt names:',
         ['The method only',
          'The method, the pattern of benefit that justifies it, and what the '
          'choice trades away',
          'All four methods and their computations',
          'The method with the lowest tax effect'],
         1, 'Level C',
         'The reasoning carries the marks and the trade-off is part of it. (C) is '
         'working rather than an answer. (D) chooses on a basis the principle '
         'explicitly excludes.'),

        ('tip', 'Before naming any method, write one sentence describing how the '
                'asset delivers its benefit. If you cannot write that sentence '
                'from the scenario, the answer is almost always straight line, and '
                'saying why is worth a mark.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3B · the completed recommendations'),
        ('table', _RECH, _rec(), SL, _RECW),
        ('h3', 'Exercise 3C · estimate, principle or error'),
        ('table', _CHGH,
         [['The useful life is revised from 5 years to 8',
           'A change in estimate', 'No — prospective only'],
          ['The residual value is revised downwards',
           'A change in estimate', 'No — prospective only'],
          ['The company moves from straight line to an accelerated method',
           'A change in accounting principle', 'Yes — retrospective'],
          ['A machine bought three years ago was never recorded at all',
           'An error', 'Yes — correct and restate']],
         SYD, _CHGW),
    ],
)
