# -*- coding: utf-8 -*-
"""Handout 4 — Deferral and Release Over Time. Scenario 2."""
from data import S2, money, num

A, V = '6D3F7E', '1F7A6A'
_inv = S2.inventory()
_vv = S2.volume_variance()
_diff = S2.difference()
_var = S2.variable_oi()
_abs = S2.absorption_oi()
_Y = ('Year 1', 'Year 2', 'Year 3')


def _sgn(x):
    return money(x) if x >= 0 else money(x)


HANDOUT = dict(
    n=4,
    title='Deferral and Release Over Time',
    subtitle='Sales are flat for three years and reported profit moves anyway. Follow '
             'the fixed overhead into the warehouse and back out again.',
    register='R2, with R3 practice',

    lang=dict(
        register='R2 Textbook English, and the exam questions are now full R3. Watch the '
                 'conditional verbs: "would be", "would have been".',
        collocations=['build up inventory', 'draw down inventory',
                      'carry forward into the next period', 'over the three years taken together',
                      'in aggregate', 'reverse in a later period'],
        pairs=['build / production', 'drawdown / sale', 'cumulative / total'],
        nots=['"Cumulative" means added across the periods, not the biggest one.',
              '"Would have been" signals a situation that did not happen. Read it twice.'],
    ),

    objectives=[
        'Track inventory in units across several periods and compute the change each time.',
        'Compute the difference in operating income for each period and prove it two ways.',
        'Explain why absorption income can fall while sales are unchanged.',
        'Show that cumulative income is the same under both methods once inventory '
        'returns to its starting level.',
        'Recognise the production volume variance as the same fixed overhead seen from '
        'the other side.',
    ],

    terms=[
        ('denominator volume', 'The planned activity level used to set the fixed '
         'overhead rate.', 'حجم المقام',
         'Also called the denominator level or normal capacity. It does NOT change when '
         'actual production changes.'),
        ('standard fixed overhead rate', 'Budgeted fixed overhead divided by the '
         'denominator volume.', 'معدل التحميل المعياري',
         'Fixed for the whole year. Using actual output instead is the commonest setup '
         'error in these questions.'),
        ('production volume variance', 'The standard fixed overhead rate multiplied by '
         'the difference between actual production and the denominator volume.',
         'انحراف حجم الإنتاج',
         'It is caused by the LEVEL OF PRODUCTION only. It says nothing about spending.'),
        ('idle capacity', 'Capacity that was paid for and not used.',
         'الطاقة العاطلة',
         'An unfavourable production volume variance is the accounting trace of idle '
         'capacity.'),
        ('reversal', 'The later period in which a deferred cost finally reaches the '
         'income statement.', 'عكس القيد',
         'Every deferral reverses. The exam likes to put the deferral in one year and '
         'ask about the reversal in another.'),
    ],

    blocks=[
        ('scene', 'Three years, one selling price, one problem', [
            'Grandview has now been running the sensor line for three years. The selling '
            'price has not changed, the cost structure has not changed, and the company '
            'has sold exactly %s units in every one of the three years.'
            % num(S2.sold[0]),
            'Production has not been so steady. In Year 1 the plant ran hard and made '
            '%s units. In Year 2 it made exactly what it sold. In Year 3 a long '
            'maintenance shutdown cut output to %s units and the warehouse was emptied '
            'to meet demand.' % (num(S2.produced[0]), num(S2.produced[2])),
            'The board has the absorption costing results in front of it. Profit rose in '
            'Year 1, fell in Year 2 and fell again in Year 3 — on completely flat sales. '
            'The chairman wants to know who is responsible. By the end of this handout '
            'you will be able to tell him that nobody is, and show him why in four lines.',
        ]),

        ('h3', 'The data for this handout'),
        ('table', ['Item', 'Amount'],
         [['Selling price per unit', '$%d' % S2.price],
          ['Variable manufacturing cost per unit', '$%d' % S2.var_unit],
          ['Variable selling cost per unit sold', '$%d' % S2.vsa],
          ['Budgeted fixed manufacturing overhead each year', money(S2.fmoh)],
          ['Denominator volume (normal capacity)', '%s units' % num(S2.denominator)],
          ['Standard fixed overhead rate', '$%d per unit' % S2.rate],
          ['Standard absorption cost per unit', '$%d' % S2.std_abs_unit],
          ['Fixed selling and administrative each year', money(S2.fsa)],
          ['Opening inventory at the start of Year 1', 'none']], '353A7C', [62, 38]),

        ('watch', 'The fixed overhead rate is $%d for all three years, because it is set '
                  'from the DENOMINATOR volume of %s units, not from what the plant '
                  'actually made. Actual production changes; the rate does not.'
                  % (S2.rate, num(S2.denominator))),

        ('part', 'Part 1 · Follow the units', 'inventory in units'),

        ('task', 'Exercise 4A',
         'Complete the inventory record. Closing inventory in one year is opening '
         'inventory in the next — fill the table across, not down.'),
        ('table', ['', _Y[0], _Y[1], _Y[2]],
         [['Opening inventory (units)', '', '', ''],
          ['add Units produced', '', '', ''],
          ['less Units sold', '', '', ''],
          ['Closing inventory (units)', '', '', ''],
          ['CHANGE in inventory (units)', '', '', '']], '353A7C', [40, 20, 20, 20]),

        ('fig', 'tank',
         [(_Y[i], S2.produced[i], S2.sold[i], _inv[i][0], _inv[i][1],
           ['overhead held back', 'nothing moves', 'overhead released'][i])
          for i in range(3)],
         'Fixed overhead rate $%d per unit · denominator volume %s units'
         % (S2.rate, num(S2.denominator))),

        ('part', 'Part 2 · Follow the money', 'the difference, year by year'),

        ('task', 'Exercise 4B',
         'Complete the reconciliation for each year. Use the change in units from '
         'Exercise 4A and the rate of $%d.' % S2.rate),
        ('table', ['', _Y[0], _Y[1], _Y[2], 'Three years'],
         [['Variable costing operating income', '', '', '', ''],
          ['Fixed overhead deferred into closing inventory', '', '', '', ''],
          ['Fixed overhead released from opening inventory', '', '', '', ''],
          ['Net effect on income', '', '', '', ''],
          ['Absorption costing operating income', '', '', '', '']],
         '353A7C', [36, 16, 16, 16, 16]),

        ('task', 'Exercise 4C', 'Read and complete.'),
        ('fill', 'R2',
         'In Year 1 the plant produced %s units more than it sold, so %s of fixed '
         'overhead was {deferred} into closing inventory and absorption income exceeded '
         'variable costing income by that amount. In Year 2 production and sales were '
         'equal, inventory did not move, and the two incomes were {identical}. In Year 3 '
         'the plant produced %s units fewer than it sold, so the overhead deferred in '
         'Year 1 was {released} into cost of goods sold, and absorption income fell '
         '{below} variable costing income by the same %s. Across the three years taken '
         'together, inventory began at zero and ended at zero, so the amounts deferred '
         'and released {cancel}, and both methods report cumulative income of %s.'
         % (num(S2.produced[0] - S2.sold[0]), money(_diff[0]),
            num(S2.sold[2] - S2.produced[2]), money(abs(_diff[2])),
            money(sum(_var))),
         {'deferred': ('Held in an asset account instead of being expensed.', ''),
          'identical': ('No movement in inventory, no difference.', ''),
          'released': ('The Year 1 cost arrives on the Year 3 income statement.',
                       'Candidates think Year 3 is being charged twice. It is being '
                       'charged for Year 1 as well as Year 3 — which is the point.'),
          'below': ('Absorption income is LOWER in a drawdown year.', ''),
          'cancel': ('Every deferral eventually reverses.',
                     'Believing absorption costing produces more profit in total. It '
                     'produces a different PATTERN of profit.')},
         ['written off', 'avoided', 'different', 'above', 'accumulate']),

        ('task', 'Exercise 4D',
         'Complete the summary. This is the table the chairman needs.'),
        ('table', ['', _Y[0], _Y[1], _Y[2], 'Total'],
         [['Units sold', num(S2.sold[0]), num(S2.sold[1]), num(S2.sold[2]),
           num(sum(S2.sold))],
          ['Units produced', num(S2.produced[0]), num(S2.produced[1]),
           num(S2.produced[2]), num(sum(S2.produced))],
          ['Variable costing operating income', '', '', '', ''],
          ['Absorption costing operating income', '', '', '', '']],
         V, [36, 16, 16, 16, 16]),

        ('part', 'Part 3 · The same money, seen from Section C', 'the production volume variance'),

        ('task', 'Exercise 4E', 'Read and complete.'),
        ('fill', 'R2',
         'There is a second way to look at exactly the same fixed overhead, and the exam '
         'tests it in the performance management section rather than the cost management '
         'section. Because fixed overhead is applied to units at a standard rate, a '
         'plant that produces more than the denominator volume applies {more} overhead '
         'than was budgeted, and a plant that produces less applies less. The difference '
         'is the production volume {variance}, and it equals the standard rate '
         'multiplied by the difference between actual production and the '
         '{denominator} volume. In Year 1 Grandview produced %s units against a '
         'denominator of %s, so the volume variance was %s {favourable}. In Year 3 it '
         'produced %s units and the variance was %s {unfavourable}. Notice that these '
         'are the same amounts as the deferral and the release. They are not two '
         'separate effects; they are one movement of fixed overhead described in two '
         'vocabularies.'
         % (num(S2.produced[0]), num(S2.denominator), money(abs(_vv[0])),
            num(S2.produced[2]), money(abs(_vv[2]))),
         {'more': ('More overhead is charged to production than was budgeted.', ''),
          'variance': ('The technical name. Also called the denominator variance or the '
                       'capacity variance.', ''),
          'denominator': ('Against the denominator volume, never against sales.',
                          'Comparing production with SALES to get the volume variance. '
                          'The volume variance has nothing to do with sales.'),
          'favourable': ('More overhead applied than budgeted.',
                         '"Favourable" here does not mean good. It means over-applied, '
                         'which happened because the plant built stock nobody ordered.'),
          'unfavourable': ('Less applied than budgeted, because capacity was idle.', '')},
         ['less', 'spending', 'sales', 'budget', 'nil']),

        ('prose', 'An unfavourable volume variance has a plain-language meaning worth '
                  'holding on to: it is the accounting trace of idle capacity. Grandview '
                  'paid for the ability to make %s units in Year 3 and used only %s of '
                  'it, and the %s unfavourable variance is the cost of the capacity that '
                  'stood still. The favourable variance in Year 1 is the mirror image, '
                  'and its reversal is the Year 3 release. A deferral in one year and its '
                  'reversal in a later one are the same money, counted once.'
                  % (num(S2.denominator), num(S2.produced[2]), money(abs(_vv[2]))), 'R2'),

        ('watch', 'A favourable production volume variance is produced by making more '
                  'units, not by making them more cheaply. In Year 1 Grandview’s '
                  '%s favourable variance came entirely from building %s units of stock '
                  'that nobody had ordered. Handout 6 is about what happens when a '
                  'manager notices this.'
                  % (money(abs(_vv[0])), num(S2.produced[0] - S2.sold[0]))),

        ('task', 'Exercise 4F',
         'Complete. The two routes must give the same answer — that is the check.'),
        ('table', ['Absorption income, built the long way', _Y[0], _Y[1], _Y[2]],
         [['Standard gross margin (units sold × $%d)' % (S2.price - S2.std_abs_unit),
           '', '', ''],
          ['add/less Production volume variance', '', '', ''],
          ['less Selling and administrative', '', '', ''],
          ['Absorption costing operating income', '', '', '']], A, [40, 20, 20, 20]),

        ('traps', [
            ('"sales were constant over the three years"',
             'profit must have been constant too',
             'Under absorption costing, profit follows PRODUCTION as well as sales. That '
             'is the whole lesson of this handout.'),
            ('"the production volume variance was favourable"',
             'the factory performed well',
             'It only means output exceeded the denominator volume. It is often caused '
             'by overproduction.'),
            ('"the fixed overhead rate"',
             'recompute it each year from actual output',
             'The standard rate is set once from the denominator volume. It does not '
             'move with actual production.'),
            ('"over the three-year period"',
             'add up the absorption figures and compare the totals',
             'If inventory starts and ends at the same level, the totals are equal. '
             'Answer in one line.'),
            ('a year with no change in inventory',
             'there is still a volume variance of zero',
             'Not necessarily. Year 2 produced %s against a denominator of %s, so the '
             'variance is zero here — but a year can have no inventory change and still '
             'have a volume variance if production differs from the denominator and '
             'sales match production.' % (num(S2.produced[1]), num(S2.denominator))),
        ]),

        ('task', 'Exercise 4G', 'The same fact, three registers.'),
        ('three_ways', [
            ('Making more than you sell pushes profit into this year.',
             'An inventory build defers fixed overhead and increases current period '
             'absorption income.',
             'A company that increases inventory during a period would report, under '
             'absorption costing, operating income that is:'),
            ('The two methods even out in the end.',
             'Cumulative operating income is identical under the two methods where '
             'opening and closing inventories are equal.',
             'Over a three-year period during which inventory returned to its original '
             'level, total operating income under absorption costing would be:'),
            ('Making more than planned gives a favourable volume variance.',
             'The production volume variance is favourable when actual output exceeds '
             'the denominator volume.',
             'A favourable production volume variance would MOST likely result from:'),
        ]),

        ('part', 'Part 4 · Exam practice', 'Levels B and C'),

        ('decoder', 'Sales were unchanged in each of three years. Absorption costing '
                    'operating income was highest in Year 1 and lowest in Year 3. Which '
                    'of the following would best explain this pattern?'),

        ('mcq', 'Sales were unchanged in each of three years. Absorption costing '
                'operating income was highest in Year 1 and lowest in Year 3. Which of '
                'the following would best explain this pattern?',
         ['Selling prices fell over the period.',
          'Production exceeded sales in Year 1 and was below sales in Year 3.',
          'Fixed manufacturing overhead rose each year.',
          'Variable costs per unit rose each year.'],
         1, 'Level B',
         'Only a change in inventory can move absorption income while sales are flat. '
         '(A), (C) and (D) would all change variable costing income too, and the '
         'question implies it did not move.'),

        ('mcq', 'A plant has a denominator volume of 40,000 units and budgeted fixed '
                'overhead of $600,000. It produced 30,000 units and sold 40,000. The '
                'production volume variance was:',
         ['$150,000 favourable.', '$150,000 unfavourable.',
          '$600,000 unfavourable.', 'Zero, because production equalled the budget.'],
         1, 'Level B',
         '(30,000 − 40,000) × $15 = $150,000 unfavourable. The variance compares '
         'production with the DENOMINATOR, not with sales — which is why 40,000 appears '
         'twice in the question.'),

        ('mcq', 'Using the data above, the effect of the year’s inventory movement on '
                'absorption costing operating income, compared with variable costing, '
                'was that absorption income was:',
         ['$150,000 higher.', '$150,000 lower.', 'The same.',
          '$600,000 lower.'],
         1, 'Level B',
         'Inventory fell by 10,000 units, releasing 10,000 × $15 = $150,000 of fixed '
         'overhead into cost of goods sold. The same $150,000 as the volume variance, '
         'because it is the same movement of overhead.'),

        ('mcq', 'A company produced 50,000 units and sold 40,000 in its first year of '
                'operations. In its second year it produced 40,000 and sold 50,000. '
                'Assuming a constant fixed overhead rate, which of the following is true '
                'of the two years taken together?',
         ['Absorption costing cumulative income exceeds variable costing cumulative '
          'income.',
          'Variable costing cumulative income exceeds absorption costing cumulative '
          'income.',
          'Cumulative income is the same under both methods.',
          'Cumulative income cannot be compared without the fixed overhead rate.'],
         2, 'Level C',
         'Inventory starts at zero and ends at zero, so the Year 1 deferral is exactly '
         'reversed in Year 2. The rate is irrelevant precisely because the net change is '
         'nil, which is what makes (D) wrong.'),

        ('mcq', 'In which of the following situations will absorption costing operating '
                'income EQUAL variable costing operating income?',
         ['When there is no opening inventory.',
          'When there is no closing inventory.',
          'When units produced equal units sold.',
          'When fixed manufacturing overhead is zero only.'],
         2, 'Level A',
         'Equal production and sales means no change in inventory and therefore no '
         'movement of fixed overhead. (A) and (B) are each true only if the OTHER is '
         'also true; (D) is a sufficient condition but far from the only one.'),

        ('mcq', 'A manufacturer uses standard absorption costing. During the period it '
                'produced 45,000 units against a denominator volume of 36,000 units, '
                'with a standard fixed overhead rate of $15 per unit. Fixed overhead '
                'applied to production was:',
         ['$540,000.', '$675,000.', '$135,000.', '$1,215,000.'],
         1, 'Level B',
         'Applied = actual production × standard rate = 45,000 × $15 = $675,000. Option '
         '(A) is budgeted fixed overhead (36,000 × $15) and (C) is the volume variance — '
         'both correct numbers answering a different question.'),

        ('mcq', 'The production volume variance arises because:',
         ['Actual fixed overhead differed from budgeted fixed overhead.',
          'Actual production differed from the denominator volume used to set the rate.',
          'Actual sales differed from budgeted sales.',
          'Actual hours differed from standard hours allowed.'],
         1, 'Level B',
         '(A) describes a different fixed overhead variance — the one comparing actual '
         'spending with the budget. Candidates who have studied variance analysis '
         'separately routinely reach for it here.'),

        ('mcq', 'A company reported absorption costing operating income of $970,000 and '
                'variable costing operating income of $1,120,000 for the same year. It '
                'is MOST likely that during the year the company:',
         ['Increased its inventory.',
          'Decreased its inventory.',
          'Held inventory constant.',
          'Sold below cost.'],
         1, 'Level B',
         'Absorption income is LOWER, so previously deferred overhead was released, so '
         'inventory fell. These are Grandview’s Year 3 figures.'),

        ('mcq', 'Which of the following would a manager evaluated on absorption costing '
                'operating income have an incentive to do at the end of a weak quarter?',
         ['Reduce production below sales.',
          'Increase production above sales.',
          'Reduce the selling price.',
          'Reclassify fixed selling costs as manufacturing costs.'],
         1, 'Level C',
         'Building inventory defers fixed overhead and raises reported income without a '
         'single extra sale. (D) would also raise income but is straightforwardly '
         'fraudulent rather than merely an incentive problem. Handout 6 is about exactly '
         'this question.'),

        ('mcq', 'Over the life of a company, total operating income under absorption '
                'costing compared with variable costing will be:',
         ['Higher.', 'Lower.', 'The same.',
          'Dependent on the pattern of production.'],
         2, 'Level A',
         'Over the whole life, everything produced is eventually sold or written off, so '
         'all fixed overhead reaches the income statement under both methods. (D) is '
         'true of each individual year and false of the lifetime total.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4A · the inventory record'),
        ('table', ['', _Y[0], _Y[1], _Y[2]],
         [['Opening inventory (units)'] + [num(_inv[i][0]) for i in range(3)],
          ['add Units produced'] + [num(S2.produced[i]) for i in range(3)],
          ['less Units sold'] + [num(S2.sold[i]) for i in range(3)],
          ['Closing inventory (units)'] + [num(_inv[i][1]) for i in range(3)],
          ['CHANGE in inventory (units)'] +
          ['%s%s' % ('+' if _inv[i][1] - _inv[i][0] > 0 else '',
                     num(_inv[i][1] - _inv[i][0])) for i in range(3)]],
         '353A7C', [40, 20, 20, 20]),
        ('h3', 'Exercise 4B and 4D · the reconciliation and the summary'),
        ('table', ['', _Y[0], _Y[1], _Y[2], 'Three years'],
         [['Variable costing operating income'] + [money(x) for x in _var] +
          [money(sum(_var))],
          ['Fixed overhead deferred into closing inventory',
           money(_diff[0]), '—', '—', money(_diff[0])],
          ['Fixed overhead released from opening inventory',
           '—', '—', money(abs(_diff[2])), money(abs(_diff[2]))],
          ['Net effect on income'] + [money(x) for x in _diff] + [money(sum(_diff))],
          ['Absorption costing operating income'] + [money(x) for x in _abs] +
          [money(sum(_abs))]], '353A7C', [36, 16, 16, 16, 16]),
        ('h3', 'Exercise 4F · absorption income built the long way'),
        ('table', ['Absorption income, built the long way', _Y[0], _Y[1], _Y[2]],
         [['Standard gross margin (units sold × $%d)' % (S2.price - S2.std_abs_unit)] +
          [money((S2.price - S2.std_abs_unit) * s) for s in S2.sold],
          ['add/less Production volume variance'] +
          ['%s %s' % (money(abs(v)), 'F' if v > 0 else ('U' if v < 0 else '—'))
           for v in _vv],
          ['less Selling and administrative'] +
          [money(S2.vsa * s + S2.fsa) for s in S2.sold],
          ['Absorption costing operating income'] + [money(x) for x in _abs]],
         '6D3F7E', [40, 20, 20, 20]),
        ('prose', 'The two routes to absorption income agree in every year. If yours do '
                  'not, the error is almost always the volume variance sign: a '
                  'favourable variance is ADDED, because more overhead was applied to '
                  'production than was actually budgeted.'),
    ],
)
