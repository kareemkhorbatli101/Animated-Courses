# -*- coding: utf-8 -*-
"""Volume 5, Handout 1 — The Depreciation Methods, Side by Side.

Covers the first part of A.2(l): the different depreciation methods and how
each one is computed.
"""
from fadata import N, D, Y, PY
from data import money, num

SL, DDB, SYD, UOP = '2B6CB0', '6D3F7E', '1F7A6A', 'C9762E'
SLATE, RUST = '44506B', 'B2531F'

_SCHH = ['Year', 'Straight line', 'Double declining', 'Sum of the years',
         'Units of production']
_SCHW = [14, 21, 22, 22, 21]


def _sched(blank=False):
    def c(v):
        return '' if blank else v
    rows = []
    for i in range(D.life):
        rows.append([str(i + 1), c(money(D.sl[i])), c(money(D.ddb[i])),
                     c(money(D.syd[i])), c(money(D.uop[i]))])
    rows.append(['Total', c(money(sum(D.sl))), c(money(sum(D.ddb))),
                 c(money(sum(D.syd))), c(money(sum(D.uop)))])
    return rows


HANDOUT = dict(
    n=1,
    title='The Depreciation Methods, Side by Side',
    subtitle='One machine, one life, one amount to write off. Four patterns for '
             'writing it off, and they all arrive at the same place.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the three inputs are introduced, R2 once the methods '
                 'are computed.',
        collocations=['depreciate an asset over its useful life',
                      'estimate the residual value',
                      'apply a declining balance rate',
                      'allocate the depreciable amount',
                      'write an asset down to its residual value',
                      'charge depreciation for the period'],
        pairs=['cost / depreciable amount', 'useful life / physical life',
               'residual value / carrying amount',
               'accelerated / straight line'],
        nots=['Depreciation is not a measure of how much the asset has lost in '
              'value. It is an allocation of cost over the years that benefit.',
              'Depreciation is not a source of cash. No money moves when the '
              'charge is made.'],
    ),

    objectives=[
        'Name the three estimates every depreciation calculation needs.',
        'Compute depreciation under the straight line method.',
        'Compute it under double declining balance, including the cap at the '
        'residual value.',
        'Compute it under sum of the years’ digits and units of production.',
        'State what is identical under all four methods.',
    ],

    terms=[
        ('depreciation',
         'The systematic allocation of the cost of a long-lived asset over the '
         'periods that benefit from it.', 'الإهلاك',
         'An allocation, not a valuation. The carrying amount after depreciation '
         'is not an estimate of what the asset would fetch.'),
        ('useful life',
         'The period over which the asset is expected to be used by this '
         'company.', 'العمر الإنتاجي',
         'Not the physical life of the asset. A company that replaces machines '
         'every four years depreciates over four years, however long they would '
         'last.'),
        ('residual value',
         'What the company expects to recover at the end of the useful life.',
         'القيمة المتبقية',
         'Also called salvage value. It is never depreciated, which is why no '
         'method may take the carrying amount below it.'),
        ('depreciable amount',
         'Cost less residual value: the amount actually written off.',
         'المبلغ القابل للإهلاك',
         'Every method writes off exactly this figure. They differ only in how '
         'they spread it.'),
        ('carrying amount',
         'Cost less accumulated depreciation: what the asset stands at on the '
         'balance sheet.', 'القيمة الدفترية',
         'It falls faster under an accelerated method, and reaches the same '
         'residual value at the end under every method.'),
        ('accumulated depreciation',
         'The running total of all depreciation charged on an asset since it was '
         'bought.', 'مجمع الإهلاك',
         'A contra asset. It is not a fund, and no cash sits behind it.'),
        ('accelerated method',
         'A method that charges more in the early years than in the later ones.',
         'طريقة متسارعة',
         'Double declining balance and sum of the years’ digits are both '
         'accelerated. Neither charges more in total.'),
        ('activity method',
         'A method that charges by use rather than by time.', 'طريقة النشاط',
         'Units of production is the common one. It produces no charge at all in '
         'a year when the machine stands idle.'),
    ],

    blocks=[
        ('scene', 'One machine, four schedules', [
            'Northwind bought a %s in January for %s. It expects to use it for '
            '%d years and then sell it for about %s.'
            % (D.name, money(D.cost), D.life, money(D.residual)),
            'Over those five years the company will write off %s — the cost '
            'less what it expects to get back. That figure is fixed before any '
            'method is chosen.' % money(D.depreciable),
            'What the method decides is how much of the %s falls in each of the '
            'five years. This handout computes four answers, and Handout 2 asks '
            'what each of them does to the statements.' % money(D.depreciable),
        ]),
        ('fig', 'workplace', '%s · the %s' % (N.short, D.name),
         [('Mr Nasr', 'warehouse manager', 'm', SL),
          ('Ms Haidar', 'financial controller', 'h', DDB),
          ('Ms Okonkwo', 'field engineer', 'w', UOP)],
         [('crane', 'cost %s' % money(D.cost)),
          ('calendar', '%d years' % D.life),
          ('money', 'residual %s' % money(D.residual)),
          ('drum', '%s units' % num(D.total_units))],
         'Three people will be asked how long the machine lasts, and they will '
         'give three different answers. Only one of them is the useful life.'),

        ('part', 'Part 1 · Three estimates',
         'everything a calculation needs'),

        ('task', 'Exercise 1A',
         'Name the three estimates and say which one is never written off.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['Only one of the three inputs is a fact. The other two are estimates '
          'made by management.',
          'Blank 3 is the one amount that is never depreciated.',
          'The last blank is the figure every method writes off in total.']),
        ('fill', 'R1',
         ['Every depreciation calculation needs three things. The {cost} of the '
          'asset is the first, and it is the only one of the three that is a fact '
          'rather than an estimate.',
          'The second is the useful {life}: how long this company expects to use '
          'the asset. It is not how long the machine would physically last. A '
          'company that replaces its machines every four years depreciates over '
          'four years.',
          'The third is the {residual} value, which is what the company expects to '
          'recover at the end. This amount is never written off, because the '
          'company expects to get it back.',
          'Cost less residual value gives the {depreciable} amount, and for the '
          'packing machine that is %s less %s, which is %s. Every method in this '
          'handout writes off exactly that figure.'
          % (money(D.cost), money(D.residual), money(D.depreciable))],
         {'cost': ('The only fact among the three.', ''),
          'life': ('How long this company will use it.',
                   'Students use the physical life of the asset. The test is how '
                   'long the company will use it.'),
          'residual': ('Expected back, so never written off.', ''),
          'depreciable': ('Cost less residual. Fixed before any method.', '')},
         ['market', 'profit', 'carrying']),
        ('fig', 'bridge',
         'Cost of the %s' % D.name, D.cost,
         [('Less the residual value, never written off', -D.residual)],
         'Depreciable amount', D.depreciable),

        ('part', 'Part 2 · Straight line', 'the same amount every year'),

        ('task', 'Exercise 1B',
         'Compute the straight line charge and the carrying amount each year.',
         'Complete the schedule. One division, then four additions.',
         ['Exercise 1A'],
         ['Divide the depreciable amount by the useful life. The answer is the '
          'same for all five years.',
          'The accumulated column is a running total.',
          'The last carrying amount must equal the residual value. If it does '
          'not, you divided the cost instead of the depreciable amount.']),
        ('table', ['Year', 'Charge', 'Accumulated depreciation',
                   'Carrying amount'],
         [[str(y), '______________', '______________', '______________']
          for y in range(1, D.life + 1)],
         SL, [14, 28, 30, 28]),
        ('answers', 15),
        ('fig', 'ranked', 'Straight line: five identical charges',
         [('Year %d' % (i + 1), D.sl[i], money(D.sl[i]), SL)
          for i in range(D.life)],
         'The same bar five times. The asset is assumed to deliver the same '
         'benefit in each year of its life, which is often close enough to true.'),

        ('part', 'Part 3 · The two accelerated methods',
         'more early, less late'),

        ('prose', 'Two methods charge more in the early years than in the later '
                  'ones. Both are called accelerated, and both write off the same '
                  'total as the straight line method does. They differ in how they '
                  'get there, and in one awkward detail.', 'R2'),
        ('prose', 'Double declining balance applies a fixed rate to a falling '
                  'carrying amount, and it ignores the residual value in the '
                  'calculation. Sum of the years’ digits applies a falling '
                  'fraction to a fixed depreciable amount, and so it allows for '
                  'the residual value from the start.', 'R2'),

        ('task', 'Exercise 1C',
         'Compute double declining balance, including the year the cap bites.',
         'Read and complete.',
         ['Exercise 1B, and the two paragraphs above.'],
         ['The rate is twice the straight line rate. Work out the straight line '
          'rate as a percentage first.',
          'The rate is applied to the carrying amount, not to the depreciable '
          'amount. The residual value plays no part until the end.',
          'In the final year the charge is whatever is needed to reach the '
          'residual value, and it is smaller than the formula would give.']),
        ('fill', 'R2',
         ['The straight line rate for a %d-year life is %s a year. Double '
          'declining balance uses twice that, so the rate is {40%%}.'
          % (D.life, '20%'),
          'That rate is applied to the carrying {amount}, which falls every year. '
          'In year 1 the charge is %s of %s, which is %s. In year 2 it is %s of '
          'the reduced carrying amount of %s, which is %s.'
          % ('40%', money(D.cost), money(D.ddb[0]), '40%',
             money(D.cost - D.ddb[0]), money(D.ddb[1])),
          'Notice what the formula never mentions: the {residual} value. Unlike '
          'every other method, double declining balance ignores it in the '
          'calculation and deals with it only at the end.',
          'That is why the final year is different. By the start of year %d the '
          'carrying amount is %s, and only %s remains before the residual value '
          'is reached. The charge is therefore {%s} rather than the %s the formula '
          'would give, because no method may take an asset below its residual '
          'value.' % (D.life, money(D.cost - sum(D.ddb[:4])), money(D.ddb[4]),
                      money(D.ddb[4]),
                      money((D.cost - sum(D.ddb[:4])) * 0.4))],
         {'40%': ('Twice the %s straight line rate.' % '20%', ''),
          'amount': ('A falling base, not a fixed one.', ''),
          'residual': ('Ignored in the formula, applied as a floor at the end.',
                       'Students subtract the residual value before applying the '
                       'rate, which is right for every method except this one.'),
          money(D.ddb[4]): ('Whatever is left before the residual value.', '')},
         ['20%', 'cost', 'useful']),
        ('table', _SCHH[:3] + ['Carrying amount at the year end'],
         [[str(i + 1), money(D.sl[i]), '______________', '______________']
          for i in range(D.life)],
         DDB, [14, 24, 28, 34]),
        ('answers', 10),
        ('fig', 'ranked', 'Double declining balance: the charge falls every year',
         [('Year %d' % (i + 1), D.ddb[i], money(D.ddb[i]),
           DDB if i < D.life - 1 else RUST) for i in range(D.life)],
         'The last bar is rust because it is not what the formula gives. It is '
         'what remains before the residual value of %s, and the cap is the whole '
         'awkwardness of this method.' % money(D.residual)),

        ('task', 'Exercise 1D',
         'Compute sum of the years’ digits and units of production.',
         'Read and complete.',
         ['Exercise 1C'],
         ['The denominator for sum of the years’ digits is the digits of the '
          'life added together. For five years that is 1+2+3+4+5.',
          'The numerator counts down: 5 in year 1, 4 in year 2, and so on.',
          'Units of production needs a rate per unit, and the rate uses the '
          'depreciable amount over the total expected output.']),
        ('fill', 'R2',
         ['Sum of the years’ digits adds the digits of the life together: 1 '
          'plus 2 plus 3 plus 4 plus 5, which is {15}. That is the denominator for '
          'every year.',
          'The numerator counts down from the life. Year 1 takes %s of the '
          'depreciable amount, which is %s of %s, or {%s}. Year 2 takes %s, and so '
          'on down to %s in the final year.'
          % ('five fifteenths', '5/15', money(D.depreciable),
             money(D.syd[0]), '4/15', '1/15'),
          'Units of production ignores time entirely. The rate is the depreciable '
          'amount divided by the expected total output: %s over %s units, which is '
          '{$0.50} a unit.' % (money(D.depreciable), num(D.total_units)),
          'The charge for a year is then that rate times the units actually '
          'produced. In year 1 the machine made %s units, so the charge is %s. In '
          'a year when the machine stands {idle} the charge is nothing at all, '
          'which no time-based method can say.'
          % (num(D.units[0]), money(D.uop[0]))],
         {'15': ('1+2+3+4+5.', ''),
          money(D.syd[0]): ('%s × 5/15.' % money(D.depreciable), ''),
          '$0.50': ('%s ÷ %s units.' % (money(D.depreciable),
                                             num(D.total_units)), ''),
          'idle': ('No use, no charge.',
                   'Students apply units of production as though a minimum annual '
                   'charge existed. It does not.')},
         ['10', '$0.56', 'busy']),
        ('fig', 'matrix', 'What each method applies, and to what',
         ['Straight line', 'Double declining balance', 'Sum of the years’ '
          'digits', 'Units of production'],
         ['The rate or fraction', 'What it is applied to'],
         [['1 ÷ %d, each year' % D.life, 'The depreciable amount'],
          ['%s, each year' % '40%', 'The falling carrying amount'],
          ['%s, then %s, then %s' % ('5/15', '4/15', '3/15'),
           'The depreciable amount'],
          ['$0.50 a unit', 'The units actually produced']],
         'Only double declining balance applies its rate to the carrying amount, '
         'and only double declining balance ignores the residual value in the '
         'formula. Those two facts go together.'),

        ('part', 'Part 4 · All four together',
         'and what is identical among them'),

        ('task', 'Exercise 1E',
         'Set all four schedules side by side and state what they share.',
         'Complete the table, then read the passage underneath.',
         ['Exercises 1B, 1C and 1D'],
         ['Copy your four sets of answers into the columns.',
          'Add each column before you go on. All four totals must be the same '
          'figure.',
          'If one column does not total %s, check the final year of that method.'
          % money(D.depreciable)]),
        ('table', _SCHH, _sched(blank=True), SLATE, _SCHW),
        ('answers', 24),
        ('fig', 'ranked', 'Year 1 charge, by method',
         [('Double declining balance', D.ddb[0], money(D.ddb[0]), DDB),
          ('Sum of the years’ digits', D.syd[0], money(D.syd[0]), SYD),
          ('Units of production', D.uop[0], money(D.uop[0]), UOP),
          ('Straight line', D.sl[0], money(D.sl[0]), SL)],
         'A spread of %s in year 1 alone, on one machine with one cost and one '
         'life. By year 5 the ordering has completely reversed.'
         % money(D.ddb[0] - D.sl[0])),

        ('watch', 'Every column of the table totals %s, because every method '
                  'writes off the depreciable amount and no method may go below '
                  'the residual value of %s. The method decides the pattern and '
                  'never the total.' % (money(D.depreciable), money(D.residual))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An asset costs %s, has a residual value of %s and a useful life '
                'of %d years. Annual straight line depreciation is:'
                % (money(D.cost), money(D.residual), D.life),
         [money(D.cost / D.life), money(D.sl[0]), money(D.depreciable),
          money(D.ddb[0])],
         1, 'Level A',
         '(%s − %s) ÷ %d = %s. (A) divides the cost without deducting '
         'the residual value, which is the single commonest slip in this '
         'calculation.'
         % (money(D.cost), money(D.residual), D.life, money(D.sl[0]))),

        ('mcq', 'Under double declining balance, the rate is applied to:',
         ['The depreciable amount', 'The carrying amount at the start of the year',
          'The residual value', 'The original cost, every year'],
         1, 'Level B',
         'The rate applies to a falling carrying amount, which is what makes the '
         'charge decline. (A) is the base for the straight line and sum of the '
         'years’ digits methods. (D) would produce a constant charge, which '
         'is not what declining balance means.'),

        ('mcq', 'Under double declining balance, the residual value:',
         ['Is deducted before the rate is applied',
          'Is ignored in the formula but acts as a floor the carrying amount may '
          'not fall below',
          'Is added to the final year’s charge',
          'Plays no part at all'],
         1, 'Level C',
         'This is the awkward detail that distinguishes the method. (A) is right '
         'for every other method and wrong for this one. (D) goes too far — '
         'the residual value caps the final charge, which is exactly what happened '
         'in year %d of the schedule.' % D.life),

        ('mcq', 'An asset with a %d-year life uses sum of the years’ digits. '
                'The fraction applied in year 2 is:' % D.life,
         ['5/15', '4/15', '2/15', '1/5'],
         1, 'Level B',
         'The numerator counts down from the life: 5 in year 1, 4 in year 2. The '
         'denominator is 1+2+3+4+5 = 15. (C) counts up instead of down, which '
         'reverses the whole point of an accelerated method.'),

        ('mcq', 'A machine depreciated by the units of production method stands '
                'idle for a whole year. The depreciation charge for that year is:',
         ['The same as the previous year', 'Nil, because no units were produced',
          'The straight line amount', 'Half the normal charge'],
         1, 'Level B',
         'An activity method charges by use, so no use means no charge. This is '
         'the practical difference between an activity method and every time-based '
         'one, and it is why the method suits an asset whose output varies '
         'sharply.'),

        ('mcq', 'Which of the following is TRUE of all four depreciation methods '
                'applied to the same asset?',
         ['They charge the same amount in each year',
          'They write off the same total over the useful life',
          'They produce the same carrying amount at the end of year 1',
          'They all ignore the residual value'],
         1, 'Level B',
         'Every method writes off the depreciable amount and stops at the residual '
         'value, so the totals agree. (C) is false by a wide margin — the '
         'year 1 charges here differ by %s. (D) is true of only one of the four.'
         % money(D.ddb[0] - D.sl[0])),

        ('mcq', 'A company replaces its delivery vans every four years although '
                'they would physically last eight. The vans should be depreciated '
                'over:',
         ['Eight years, the physical life',
          'Four years, the period the company expects to use them',
          'Either, at the company’s choice',
          'Eight years, with an adjustment when they are sold'],
         1, 'Level C',
         'Useful life means useful to this entity. (A) is the common error and it '
         'understates the annual charge by half. (C) treats a measurement '
         'requirement as a free choice.'),

        ('tip', 'Write the three estimates at the top of your page before '
                'computing anything: cost, life, residual. Then ask one question '
                '— does this method apply its rate to the depreciable amount '
                'or to the carrying amount? That single question separates double '
                'declining balance from the other three.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1E · all four schedules'),
        ('table', _SCHH, _sched(), SLATE, _SCHW),
        ('bullets', [
            'Cost %s less residual %s gives a depreciable amount of %s.'
            % (money(D.cost), money(D.residual), money(D.depreciable)),
            'Every column totals that same %s.' % money(D.depreciable),
            'Double declining balance ignores the residual value in its formula '
            'and is capped by it in the final year. The other three allow for it '
            'from the start.',
        ]),
    ],
)
