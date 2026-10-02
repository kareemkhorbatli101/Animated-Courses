# -*- coding: utf-8 -*-
"""Volume 5, Handout 1 — rebuilt in the 2026 format.

The handout from the screenshot. In the version this replaces, the prose
said "In year 1 the charge is 40% of $500,000, which is $200,000. In year 2
it is 40% of $300,000, which is $120,000", and a later paragraph gave year
5. The table underneath then asked the student to compute years 1 to 5 —
three of the five already printed above it.

Here no sentence states a figure a table asks for. The case gives the three
estimates and nothing else; every schedule is built by the student from a
single worked row; and the depreciable amount, the declining rate, the
sum-of-the-years fraction, the per-unit rate and the final-year cap are all
derived rather than read.

Student cells to complete: 60. Figures given away in prose: none.
"""
from fadata import D, Y
from data import money, num

SL, DDB, SYD, UOP = '1F6F8F', 'A05A2B', '6D3F7E', '2E7D5B'
SLATE, RUST, OK = '44506B', 'B2531F', '2B6CB0'

_sl = D.schedule(D.sl)
_ddb = D.schedule(D.ddb)
_syd = D.schedule(D.syd)
_uop = D.schedule(D.uop)


# ---- straight line ------------------------------------------------------
_SLH = ['Year', 'Charge for the year', 'Accumulated depreciation',
        'Carrying amount at the year end']
_SLW = [10, 30, 30, 30]
_SLR = [([str(1), '%s  =  %s ÷ %d' % (money(_sl[0][1]), money(D.depreciable),
                                           D.life),
          money(_sl[0][2]), money(_sl[0][3])], 'w')] + \
       [([str(y), '', '', ''], 'd') for y in range(2, D.life + 1)]

# ---- double declining balance -------------------------------------------
_DDH = ['Year', 'Carrying amount at the start', 'Charge for the year',
        'Carrying amount at the year end']
_DDW = [10, 30, 30, 30]
_DDR = [([str(1), money(D.cost),
          '%s  =  40%% × %s' % (money(_ddb[0][1]), money(D.cost)),
          money(_ddb[0][3])], 'w')] + \
       [([str(y), '', '', ''], 'd') for y in range(2, D.life + 1)]

# ---- sum of the years' digits -------------------------------------------
_SYH = ['Year', 'Fraction', 'Charge for the year',
        'Carrying amount at the year end']
_SYW = [10, 20, 40, 30]
_SYR = [([str(1), '5 / 15',
          '%s  =  5/15 × %s' % (money(_syd[0][1]), money(D.depreciable)),
          money(_syd[0][3])], 'w')] + \
       [([str(y), '', '', ''], 'd') for y in range(2, D.life + 1)]

# ---- units of production ------------------------------------------------
_UPH = ['Year', 'Units produced', 'Charge for the year',
        'Carrying amount at the year end']
_UPW = [10, 24, 36, 30]
_UPR = [([str(1), num(D.units[0], 0),
          '%s  =  %s × $0.50' % (money(_uop[0][1]), num(D.units[0], 0)),
          money(_uop[0][3])], 'w')] + \
       [([str(y), num(D.units[y - 1], 0), '', ''], 'd')
        for y in range(2, D.life + 1)]

# ---- the four, compared -------------------------------------------------
_CMH = ['Method', 'Year 1 charge', 'Year %d charge' % D.life,
        'Total over %d years' % D.life, 'What it assumes about the machine']
_CMW = [20, 16, 16, 18, 30]
_CMR = [
    (['Straight line', money(_sl[0][1]), money(_sl[-1][1]),
      money(D.depreciable), 'That it is used evenly, year after year'], 'w'),
    (['Double declining balance', '', '', '', ''], 'd'),
    (['Sum of the years’ digits', '', '', '', ''], 'd'),
    (['Units of production', '', '', '', ''], 'd'),
]


HANDOUT = dict(
    n=1,
    title='The Depreciation Methods, Side by Side',
    subtitle='One machine, one life, one amount to write off. Four patterns '
             'for writing it off, and you compute every one of them.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the three estimates are named, R2 once the '
                 'schedules are being built.',
        collocations=['estimate a useful life',
                      'write off the depreciable amount',
                      'apply a rate to a falling carrying amount',
                      'accelerate a charge into the early years',
                      'cap a charge at the residual value',
                      'depreciate on the basis of output'],
        pairs=['cost / carrying amount',
               'useful life / residual value',
               'straight line / accelerated',
               'time-based / activity-based'],
        nots=['An accelerated method is not a larger total. It is the same '
              'total, taken sooner.',
              'Residual value is not what the asset will be worth. It is what '
              'this company expects to get for it at the end of its own use '
              'of it.'],
    ),

    objectives=[
        'Name the three estimates every depreciation method needs.',
        'Build a straight-line schedule.',
        'Build a double declining balance schedule and apply the residual cap.',
        'Build a sum of the years’ digits and a units of production schedule.',
        'Compare the four methods and say what each assumes.',
    ],

    terms=[
        ('useful life',
         'The number of years, or the output, over which this company expects '
         'to use the asset.', 'العمر الإنتاجي',
         'The company’s own expected use, not how long the asset could last '
         'for somebody else.'),
        ('residual value',
         'What the company expects to receive for the asset when it has '
         'finished with it.', 'القيمة المتبقية',
         'Deducted before anything is spread. One method leaves it out of the '
         'formula and still may not go below it.'),
        ('depreciable amount',
         'Cost less residual value: the total every method must write off.',
         'المبلغ القابل للإهلاك',
         'Fixed before any method is chosen. The method decides only the '
         'pattern, never the total.'),
        ('carrying amount',
         'Cost less the depreciation charged to date.', 'المبلغ المدرج',
         'Falls every year and must never go below the residual value, '
         'whatever a formula produces.'),
        ('accelerated method',
         'A method that charges more in the early years and less in the late '
         'ones.', 'طريقة الإهلاك المعجل',
         'Sooner, not more. Over the whole life an accelerated method writes '
         'off exactly what straight line writes off.'),
        ('activity method',
         'A method that charges on the basis of output rather than the passing '
         'of time.', 'طريقة وحدات الإنتاج',
         'An idle machine takes no charge at all, which is the one behaviour '
         'no time-based method can produce.'),
    ],

    blocks=[
        ('case', 'One machine, four schedules',
         ['In January %s Northwind bought a packing machine for %s. It expects '
          'to use the machine for %d years, and then to sell it for about %s.'
          % (Y, money(D.cost), D.life, money(D.residual)),
          'Those three numbers are everything a depreciation method is given: '
          'what the machine cost, how long the company expects to use it, and '
          'what it expects to get back at the end. The first is a fact; the '
          'other two are estimates made by management.',
          'The machine is expected to produce %s units over its life, and the '
          'production plan for each of the five years is in the table in Part '
          '5.' % num(D.total_units, 0),
          'In this handout you build four schedules from those figures. '
          'Nothing in the pages that follow tells you an answer before the '
          'table asks for it.'],
         ['في يناير من عام %s اشترت شركة نورثويند آلة تعبئة بمبلغ %s. وتتوقع '
          'أن تستخدم الآلة لمدة %d سنوات، ثم تبيعها بنحو %s.'
          % (Y, money(D.cost), D.life, money(D.residual)),
          'هذه الأرقام الثلاثة هي كل ما تُعطاه أي طريقة إهلاك: كم كلّفت الآلة، '
          'وكم سنة تتوقع الشركة أن تستخدمها، وكم تتوقع أن تسترد في النهاية. '
          'الأول حقيقة، والاثنان الآخران تقديران تضعهما الإدارة.',
          'ويُتوقع أن تنتج الآلة %s وحدة خلال عمرها، وخطة الإنتاج لكل سنة من '
          'السنوات الخمس موجودة في الجدول في الجزء الخامس.'
          % num(D.total_units, 0),
          'في هذه الورقة ستبني أربعة جداول إهلاك من هذه الأرقام. ولن تجد في '
          'الصفحات التالية أي إجابة قبل أن يطلبها الجدول منك.']),

        ('part', 'Part 1 · The three estimates', 'and the one figure they fix'),

        ('prompt', 'Exercise 1A',
         'Read and complete. Write one word in each space.'),
        ('fill', 'R1',
         ['Every method needs the same three inputs. The first is what the '
          'machine {cost}, and it is the only one of the three that is a fact '
          'rather than a judgement.',
          'The second is how long the company expects to use it, which is its '
          'useful {life}. It is an estimate about this company’s own use, not '
          'a statement about how long such a machine could last.',
          'The third is what the company expects to receive for the machine '
          'when it has finished with it, which is its {residual} value.',
          'Subtract the third from the first and you have the total every '
          'method must write off. That total is called the {depreciable} '
          'amount, and it is fixed before any method is chosen.'],
         {'cost': ('The one input that is not an estimate.', ''),
          'life': ('How long this company expects to use it.', ''),
          'residual': ('What is expected back at the end.', ''),
          'depreciable': ('The total every method must reach.',
                          'Students expect the method to change the total. It '
                          'changes only which years carry it.')},
         ['value', 'period', 'accumulated']),
        ('fig', 'buckets', 'What a depreciation method is given',
         [('A FACT', SL,
           ['What the machine cost',
            'Taken from the invoice',
            'Not open to judgement']),
          ('AN ESTIMATE', DDB,
           ['How long the company will use it',
            'Set by management',
            'Revised if expectations change']),
          ('ANOTHER ESTIMATE', SYD,
           ['What it will fetch at the end',
            'Also set by management',
            'Deducted before anything is spread'])],
         'Two of the three inputs are judgements, which is why two companies '
         'with identical machines can report different charges and both be '
         'right.'),

        ('part', 'Part 2 · Straight line', 'the same charge every year'),

        ('prompt', 'Exercise 1B',
         'Build the straight-line schedule. Year 1 is worked; complete years 2 '
         'to %d.' % D.life,
         'The worked cell shows the division. Every later year repeats it.'),
        ('worked', _SLH, _SLR, SL, _SLW,
         'Twelve cells. The charge column never changes; the other two move '
         'every year.'),
        ('fig', 'formula', 'The straight-line method, in words',
         [('Depreciable amount', 'Cost less residual value', SL),
          ('÷', '', None),
          ('Useful life', 'In years', SLATE),
          ('=', '', None),
          ('The charge for every year', 'The same figure, five times', OK)],
         'One division and then four additions. The method is the easiest of '
         'the four and it is the benchmark the other three are judged '
         'against.'),

        ('part', 'Part 3 · Double declining balance',
         'a fixed rate on a falling amount'),

        ('prose', 'This method takes twice the straight-line rate and applies '
                  'it to the carrying amount rather than to the depreciable '
                  'amount. Because the carrying amount falls every year, the '
                  'charge falls with it. Residual value is not in the formula '
                  'at all.', 'R2'),

        ('prompt', 'Exercise 1C',
         'Build the double declining balance schedule. Year 1 is worked; '
         'complete years 2 to %d.' % D.life,
         'Each year’s opening figure is the previous year’s closing figure.'),
        ('worked', _DDH, _DDR, DDB, _DDW,
         'One of the five years cannot use the formula. Work down the column '
         'and you will find which, and Exercise 1D asks you why.'),
        ('fig', 'fork', 'The rule that stops the formula',
         [('Does the formula’s charge take the carrying amount below the '
           'residual value?',
           'NO → charge what the formula gives', OK),
          ('Does it take the carrying amount below the residual value?',
           'YES → charge only what remains above the residual value', RUST),
          ('Is the residual value anywhere in the formula itself?',
           'NO → it constrains the answer without appearing in it', SLATE)]),

        ('prompt', 'Exercise 1D',
         'Read and complete. Write one word in each space.'),
        ('fill', 'R2',
         ['Double declining balance is called an {accelerated} method, because '
          'it puts more of the charge into the early years and less into the '
          'late ones.',
          'It does that by applying a fixed rate to the carrying {amount}, '
          'which falls every year, rather than to the depreciable amount, '
          'which does not.',
          'The formula never mentions the residual value. Every other method '
          'deducts it before anything is spread; this one leaves it out and '
          'deals with it only at the {end}.',
          'That is why one year in your schedule is different. No method may '
          'take an asset below its residual value, so in that year the charge '
          'is {capped} at whatever remains above it.'],
         {'accelerated': ('Sooner, not more.', ''),
          'amount': ('The figure that falls each year.', ''),
          'end': ('Out of the formula, but not out of the method.', ''),
          'capped': ('Only what is left above the floor.',
                     'Students apply the formula to the last year and take '
                     'the asset below its residual value. No method may do '
                     'that.')},
         ['even', 'depreciable', 'ignored']),
        ('fig', 'scale',
         'STRAIGHT LINE',
         ['The same charge in every year',
          'Rests on the depreciable amount',
          'Residual value deducted at the start',
          'Assumes the machine is used evenly'],
         'AN ACCELERATED METHOD',
         ['More in the early years, less later',
          'Rests on the carrying amount',
          'Residual value constrains the last year',
          'Assumes the machine gives most early on']),

        ('part', 'Part 4 · Sum of the years’ digits',
         'the other accelerated method'),

        ('prompt', 'Exercise 1E',
         'Build the sum of the years’ digits schedule. Year 1 is worked; '
         'complete years 2 to %d.' % D.life,
         'The denominator is the digits of the life added together. The '
         'numerator counts down.'),
        ('worked', _SYH, _SYR, SYD, _SYW,
         'Unlike the previous method, this one applies its fraction to the '
         'depreciable amount, so the residual value is handled at the start '
         'and never constrains the last year.'),
        ('fig', 'formula', 'The sum of the years’ digits, in words',
         [('Years remaining, at the start of the year',
           'Counting down from the full life', SYD),
          ('÷', '', None),
          ('The digits of the life, added together',
           'For a five-year life: 1 + 2 + 3 + 4 + 5', SLATE),
          ('×', '', None),
          ('Depreciable amount', 'Cost less residual value', SL)],
         'The fractions fall year by year and add to one, which is why the '
         'column has to total the depreciable amount exactly.'),

        ('part', 'Part 5 · Units of production',
         'when time is not what wears it out'),

        ('prompt', 'Exercise 1F',
         'Build the units of production schedule. Year 1 is worked; complete '
         'years 2 to %d.' % D.life,
         'Find the rate per unit first: the depreciable amount over the total '
         'units expected.'),
        ('worked', _UPH, _UPR, UOP, _UPW,
         'The units column is given. The rate per unit is not, and the worked '
         'row shows it in use.'),
        ('fig', 'formula', 'The activity method, in words',
         [('Depreciable amount', 'Cost less residual value', SL),
          ('÷', '', None),
          ('Total units expected over the life', 'From the production plan',
           UOP),
          ('=', '', None),
          ('A rate for every unit made',
           'Multiplied by the units of each year', OK)],
         'This is the only one of the four in which a year of no production '
         'carries no charge at all. The other three charge for the passing of '
         'time whether the machine runs or not.'),

        ('part', 'Part 6 · The four, side by side',
         'and what each one assumes'),

        ('prompt', 'Exercise 1G',
         'Read your four schedules back and complete the comparison. The '
         'straight-line row is worked.',
         'Every figure in this table is already somewhere in your own work.'),
        ('worked', _CMH, _CMR, SLATE, _CMW,
         'Add your four totals when you have finished. If any two of them '
         'differ, one of your schedules has an arithmetic error in it.'),
        ('fig', 'matrix', 'What each method is really claiming',
         ['Straight line', 'Double declining balance',
          'Sum of the years’ digits', 'Units of production'],
         ['The pattern it produces', 'What it assumes about the machine'],
         [['The same charge every year',
           'That the machine is used evenly across its life'],
          ['The largest charge first, falling steeply',
           'That the machine gives most of its value early'],
          ['A large charge first, falling evenly',
           'The same, but declining in a straight line'],
          ['A charge that follows output',
           'That use, not time, is what wears it out']],
         'None of the four is more correct than the others. Each is a claim '
         'about how the machine is consumed, and Handout 3 asks you to defend '
         'one.'),

        ('watch', 'Add the charge column of each of your four schedules. All '
                  'four totals must be the same figure, because the method '
                  'chooses the pattern and the depreciable amount was fixed '
                  'before any method was chosen. If two of your columns '
                  'disagree, the error is arithmetic and not a difference '
                  'between the methods.'),

        ('part', 'Part 7 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'An asset costs %s, has a residual value of %s and a %d-year '
                'life. The depreciable amount is:'
         % (money(D.cost), money(D.residual), D.life),
         [money(D.cost), money(D.depreciable), money(D.residual),
          money(D.cost + D.residual)],
         1, 'Level A',
         'Cost less residual value. (A) is the error that would write the '
         'asset down to nothing and ignore the %s the company expects to get '
         'back.' % money(D.residual)),

        ('mcq', 'Under double declining balance, the rate is applied to:',
         ['The depreciable amount', 'The carrying amount',
          'The residual value', 'The original cost, every year'],
         1, 'Level A',
         'A fixed rate on a falling balance, which is what makes the charge '
         'decline. (D) would give the same charge every year and so would not '
         'be an accelerated method at all.'),

        ('mcq', 'Under double declining balance, the residual value:',
         ['Is deducted before the rate is applied',
          'Does not enter the formula, but the asset may not be taken below it',
          'Is ignored entirely',
          'Is added to the final year’s charge'],
         1, 'Level B',
         'Out of the formula and still binding, which is why one year of the '
         'schedule you built behaves differently from the rest. (C) is the '
         'error that takes an asset below what it will fetch.'),

        ('mcq', 'An asset with a %d-year life is depreciated by the sum of the '
                'years’ digits. The denominator of the fraction is:' % D.life,
         [str(D.life), '15', '10', '25'],
         1, 'Level B',
         'The digits of the life added together: 1 + 2 + 3 + 4 + 5. (A) is the '
         'life itself, which is the straight-line denominator.'),

        ('mcq', 'A machine depreciated by the units of production method '
                'stands idle for a whole year. The charge for that year is:',
         ['The same as the previous year', 'Nil',
          'The straight-line charge', 'Half the previous year'],
         1, 'Level B',
         'No output, no charge. It is the one behaviour no time-based method '
         'can produce, and it is why the method suits an asset worn out by '
         'use rather than by age.'),

        ('mcq', 'Which of the following is TRUE of all four methods?',
         ['They charge the same amount in year 1',
          'They write off the same total over the asset’s life',
          'They produce the same carrying amount at the end of year 2',
          'They all ignore residual value'],
         1, 'Level C',
         'The depreciable amount is fixed before a method is chosen, so the '
         'total cannot differ. Your four columns are the proof, and if they '
         'are not equal one of them is wrong.'),

        ('mcq', 'A company replaces its delivery vans every four years '
                'although they could run for eight. The useful life used for '
                'depreciation should be:',
         ['Eight years, the physical life',
          'Four years, because that is this company’s expected use',
          'Whichever gives the lower charge',
          'The average of the two'],
         1, 'Level C',
         'Useful life is the period of the company’s own expected use, not how '
         'long the asset could last for somebody. (A) is the single most '
         'common error on this definition.'),

        ('tip', 'Write the three estimates at the top of the page before '
                'computing anything: cost, life, residual. Then write the '
                'depreciable amount underneath them. Every one of the four '
                'methods is built from those four numbers, and a question that '
                'withholds one of them is withholding the only thing you '
                'needed.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · straight line'),
        ('worked', _SLH,
         [([str(y), money(r[1]), money(r[2]), money(r[3])], 'w')
          for y, r in zip(range(1, D.life + 1), _sl)], SL, _SLW),
        ('h3', 'Exercise 1C · double declining balance'),
        ('worked', _DDH,
         [([str(y), money(D.cost - (_ddb[y - 2][2] if y > 1 else 0)),
            money(r[1]), money(r[3])], 'w')
          for y, r in zip(range(1, D.life + 1), _ddb)], DDB, _DDW,
         'The year %d charge is %s and not the %s the formula gives, because '
         'the carrying amount had reached %s and the residual value is %s.'
         % (D.life, money(_ddb[-1][1]), money(_ddb[-2][3] * 0.4),
            money(_ddb[-2][3]), money(D.residual))),
        ('h3', 'Exercise 1E · sum of the years’ digits'),
        ('worked', _SYH,
         [([str(y), '%d / 15' % (D.life - y + 1), money(r[1]), money(r[3])],
           'w') for y, r in zip(range(1, D.life + 1), _syd)], SYD, _SYW),
        ('h3', 'Exercise 1F · units of production'),
        ('worked', _UPH,
         [([str(y), num(D.units[y - 1], 0), money(r[1]), money(r[3])], 'w')
          for y, r in zip(range(1, D.life + 1), _uop)], UOP, _UPW,
         'The rate is %s over %s units, which is $0.50 a unit.'
         % (money(D.depreciable), num(D.total_units, 0))),
        ('h3', 'Exercise 1G · the four compared'),
        ('worked', _CMH,
         [(['Straight line', money(_sl[0][1]), money(_sl[-1][1]),
            money(D.depreciable),
            'That it is used evenly, year after year'], 'w'),
          (['Double declining balance', money(_ddb[0][1]),
            money(_ddb[-1][1]), money(D.depreciable),
            'That it gives most of its value early'], 'w'),
          (['Sum of the years’ digits', money(_syd[0][1]),
            money(_syd[-1][1]), money(D.depreciable),
            'The same, declining in a straight line'], 'w'),
          (['Units of production', money(_uop[0][1]), money(_uop[-1][1]),
            money(D.depreciable),
            'That output, not time, wears it out'], 'w')], SLATE, _CMW),
        ('prose', 'The fourth column is the same figure four times, and that '
                  'is the whole point of the handout. The year 1 column ranges '
                  'from %s to %s, which is the same machine reported four ways '
                  'in its first year. Handout 2 works out what that does to '
                  'the statements.'
                  % (money(_sl[0][1]), money(_ddb[0][1])), 'R2'),
    ],
)
