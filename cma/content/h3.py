# -*- coding: utf-8 -*-
"""Handout 3 — The Two Statements. Scenario 1."""
from data import S1, money, num

A, V = '6D3F7E', '1F7A6A'

# The two statements, written once. The student version drops the figures;
# the key keeps them. Neither can disagree with the other.
_ABS_ROWS = [
    ('Sales (%s units × $%d)' % (num(S1.sold), S1.price), 0, money(S1.sales), 'b'),
    ('Cost of goods sold', 0, None, ''),
    ('   Opening inventory', 1, money(0), ''),
    ('   Cost of goods manufactured (%s × $%d)' % (num(S1.produced), S1.abs_unit), 1,
     money(S1.abs_unit * S1.produced), ''),
    ('   Goods available for sale', 1, money(S1.abs_unit * S1.produced), 'r'),
    ('   less Closing inventory (%s × $%d)' % (num(S1.end_inv), S1.abs_unit), 1,
     money(S1.end_inv_value_abs), ''),
    ('Cost of goods sold', 0, money(S1.abs_cogs), 'b'),
    ('GROSS MARGIN', 0, money(S1.gross_margin), 't'),
    ('   Variable selling and administrative (%s × $%d)' % (num(S1.sold), S1.vsa), 1,
     money(S1.vsa * S1.sold), ''),
    ('   Fixed selling and administrative', 1, money(S1.fsa), ''),
    ('Total selling and administrative', 0, money(S1.sa_total), 'b'),
    ('OPERATING INCOME', 0, money(S1.abs_oi), 't'),
]

_VAR_ROWS = [
    ('Sales (%s units × $%d)' % (num(S1.sold), S1.price), 0, money(S1.sales), 'b'),
    ('Variable costs', 0, None, ''),
    ('   Variable cost of goods sold (%s × $%d)' % (num(S1.sold), S1.var_unit), 1,
     money(S1.var_cogs), ''),
    ('   Variable selling and administrative (%s × $%d)' % (num(S1.sold), S1.vsa), 1,
     money(S1.var_sa), ''),
    ('Total variable costs', 0, money(S1.var_cogs + S1.var_sa), 'b'),
    ('CONTRIBUTION MARGIN', 0, money(S1.contribution), 't'),
    ('   Fixed manufacturing overhead', 1, money(S1.fmoh), ''),
    ('   Fixed selling and administrative', 1, money(S1.fsa), ''),
    ('Total fixed costs', 0, money(S1.fixed_total), 'b'),
    ('OPERATING INCOME', 0, money(S1.var_oi), 't'),
]


def _hollow(rows):
    """The same statement with the money column emptied for the student."""
    return [(l, lv, None, st) for l, lv, _v, st in rows]


HANDOUT = dict(
    n=3,
    title='The Two Statements',
    subtitle='Build an absorption statement and a variable costing statement from one '
             'set of data, then prove the difference between them in a single line.',
    register='R2 Textbook English',

    lang=dict(
        register='R2. You are now reading the sentences a textbook would write. Notice '
                 'the passive verbs: is deducted, is carried forward, is released.',
        collocations=['defer a cost into inventory', 'release a cost from inventory',
                      'carry forward to the next period', 'reconcile the two figures',
                      'account for the difference', 'exceed sales'],
        pairs=['defer / delay', 'release / sell', 'reconcile / agree'],
        nots=['"Defer" does not mean the cost disappears. It means it waits in an asset '
              'account.',
              '"Reconcile" means explain the gap, not make the gap zero.'],
    ),

    objectives=[
        'Prepare an absorption costing income statement in the correct format.',
        'Prepare a variable costing income statement in the correct format.',
        'Compute the difference between the two operating incomes without preparing '
        'either statement.',
        'State the direction of the difference from the relationship between production '
        'and sales.',
        'Explain, in one sentence, where the money that causes the difference is sitting.',
    ],

    terms=[
        ('deferred cost', 'A cost held in an asset account instead of being expensed now.',
         'تكلفة مؤجلة',
         'Deferred, not avoided. It will be expensed when the units are sold.'),
        ('released cost', 'A cost that was deferred in an earlier period and is expensed '
         'now because the units have been sold.', 'تكلفة محررة', ''),
        ('reconciliation', 'A short calculation proving why two figures differ.',
         'التسوية / المطابقة',
         'The exam asks you to "reconcile", which means show the bridge, not change '
         'either number.'),
        ('goods available for sale', 'Opening inventory plus cost of goods manufactured.',
         'البضاعة المتاحة للبيع', ''),
        ('cumulative income', 'Income added across several periods.',
         'الدخل التراكمي',
         'A question about "the three years taken together" is asking about cumulative '
         'income, and the answer is usually that the two methods agree.'),
        ('inventory build', 'A rise in the number of units held.', 'تراكم المخزون',
         'A build always favours absorption income. Always.'),
        ('inventory drawdown', 'A fall in the number of units held.',
         'سحب من المخزون', 'A drawdown always favours variable costing income.'),
    ],

    blocks=[
        ('scene', 'Two statements, one month', [
            'It is the first month of production at Grandview’s new line. There was '
            'no opening inventory. The plant made %s sensors and sold %s, so %s units '
            'are still in the warehouse at the end of the month.'
            % (num(S1.produced), num(S1.sold), num(S1.end_inv)),
            'The auditor needs an absorption costing statement for the financial '
            'statements. The production manager has asked for a variable costing '
            'statement so that she can see the contribution each sensor makes.',
            'Both statements are correct. They will report different operating incomes, '
            'and by the end of this handout you will be able to say exactly why, and by '
            'exactly how much, without preparing either one.',
        ]),

        ('h3', 'The data for this handout'),
        ('table', ['Item', 'Amount'],
         [['Selling price per unit', '$%d' % S1.price],
          ['Direct materials per unit', '$%d' % S1.dm],
          ['Direct labour per unit', '$%d' % S1.dl],
          ['Variable manufacturing overhead per unit', '$%d' % S1.vmoh],
          ['Fixed manufacturing overhead for the month', money(S1.fmoh)],
          ['Variable selling and administrative, per unit sold', '$%d' % S1.vsa],
          ['Fixed selling and administrative for the month', money(S1.fsa)],
          ['Units produced', num(S1.produced)],
          ['Units sold', num(S1.sold)],
          ['Opening inventory', 'none']], '353A7C', [62, 38]),

        ('part', 'Part 1 · The absorption costing statement', 'gross margin format'),

        ('task', 'Exercise 3A',
         'Prepare an absorption costing income statement in the format the exam marks.',
         'Complete the statement. Work down the page and do not skip the inventory '
         'section — it is where the whole topic lives.',
         ['Handout 2 Exercise 2B for the $48 unit cost', 'the data table above'],
         ['Sales first: units SOLD times price. Never units produced.', 'Then the inventory section: opening plus manufactured gives available; less closing gives cost of goods sold.', 'Closing inventory is valued at $48, which carries $12 of fixed overhead per unit.']),
        ('fig', 'taccounts',
         [('Finished Goods  (absorption costing)',
           [('made', '2,400,000')], [('sold', '2,016,000')], '#6D3F7E')],
         'What stays behind is 8,000 units at $48 — and $96,000 of that is fixed '
         'overhead which has not reached the income statement.',
         1,
         [('made', '50,000 units completed at $48 each'),
          ('sold', '42,000 units sold at $48 each')]),
        ('stmt', 'Grandview Instruments · absorption costing · income statement',
         _hollow(_ABS_ROWS), A),

        ('watch', 'Closing inventory is valued at the ABSORPTION unit cost of $%d, which '
                  'includes $%d of fixed overhead per unit. Write that $%d somewhere on '
                  'this page and circle it. It is the number that makes the two '
                  'statements differ.'
                  % (S1.abs_unit, S1.fmoh_rate, S1.fmoh_rate)),

        ('part', 'Part 2 · The variable costing statement', 'contribution margin format'),

        ('task', 'Exercise 3B',
         'Prepare a variable costing income statement, with the lines in the order the exam expects.',
         'Complete the statement. The order of the lines is not a matter of taste — the '
         'exam marks the format.',
         ['Exercise 3A', 'Handout 2 Exercise 2D for the contribution margin format'],
         ['Deduct EVERY variable cost before the subtotal, including variable selling cost.', 'Then deduct the fixed costs as one block below the contribution margin.', 'There is no gross margin line on this statement. If you have written one, the format is wrong.']),
        ('fig', 'taccounts',
         [('Finished Goods  (variable costing)',
           [('made', '1,800,000')], [('sold', '1,512,000')], '#1F7A6A')],
         'The same 8,000 units, now valued at $36. The $96,000 of fixed overhead went '
         'straight to the income statement instead.',
         1,
         [('made', '50,000 units completed at $36 each'),
          ('sold', '42,000 units sold at $36 each')]),
        ('stmt', 'Grandview Instruments · variable costing · income statement',
         _hollow(_VAR_ROWS), V),

        ('task', 'Exercise 3C',
         'Explain in words why the two statements differ, and name the only cost responsible.',
         'Read and complete.',
         ['Exercise 3A', 'Exercise 3B'],
         ['Compare your two statements line by line and mark every line that is the same.', 'Only one item will be left. That is the answer to blank 2 and blank 3.']),
        ('fig', 'buckets', 'Where the %s of fixed overhead ended up'
         % '$600,000',
         [('ABSORPTION  — split in two', '6D3F7E',
           ['$504,000 charged against this month', 'inside cost of goods sold',
            '$96,000 held in the warehouse', 'inside closing inventory']),
          ('VARIABLE  — all in one place', '1F7A6A',
           ['$600,000 charged against this month', 'as a cost of the period',
            'nothing held back', 'closing inventory carries none of it'])],
         'Same spending. Two different places for it to sit.'),
        ('fill', 'R2',
         ['The two statements are built from the same transactions. The difference '
          'between them cannot be caused by sales, by variable costs or by selling '
          'expenses, all of which are treated {identically}.',
          'The only item treated differently is fixed manufacturing overhead. Under '
          'variable costing the whole %s is deducted in the month, because it is a cost '
          'of the {period}.' % money(S1.fmoh),
          'Under absorption costing it is attached to the units produced at $%d each, so '
          'the %s units still in the warehouse carry %s of it into the {next} period. '
          'That amount is the entire difference between the two operating incomes.'
          % (S1.fmoh_rate, num(S1.end_inv), money(S1.fmoh_deferred))],
         {'identically': ('Every other line is the same in substance.',
                          'Candidates hunt for differences in the selling costs. There '
                          'are none.'),
          'period': ('A capacity cost belongs to the period that bought the capacity.', ''),
          'next': ('It waits in inventory until those units are sold.',
                   'Saying the cost is "saved" or "avoided". It is only postponed.')},
         ['differently', 'current', 'previous', 'partly']),

        ('prose', 'Two pieces of vocabulary before the bridge. A period in which '
                  'production is greater than sales is an inventory build, and the fixed '
                  'overhead attached to the extra units becomes a deferred cost: real '
                  'money, spent this month, sitting on the balance sheet. A period in '
                  'which sales are greater than production is an inventory drawdown, and '
                  'the overhead that was deferred earlier becomes a released cost, '
                  'arriving on the income statement of a month that did not spend it. '
                  'Every deferred cost is eventually a released cost. Nothing is lost on '
                  'the way.', 'R2'),

        ('part', 'Part 3 · The bridge', 'proving the difference in one line'),

        ('fig', 'bridge',
         'Variable costing operating income', S1.var_oi,
         [('Fixed overhead carried forward in closing inventory', S1.fmoh_deferred)],
         'Absorption costing operating income', S1.abs_oi),

        ('task', 'Exercise 3D',
         'Produce the difference between the two incomes in one line, without preparing either statement.',
         'Complete the reconciliation. This is the calculation the exam actually wants; '
         'the two full statements are the long way round.',
         ['Exercise 3C', 'the bridge diagram above'],
         ['Start from the variable costing income, because it never moves with inventory.', 'Add the fixed overhead in CLOSING inventory, then take off the fixed overhead in OPENING inventory.', 'Here opening inventory is nil, so only one line does any work.']),
        ('fig', 'formula', 'The reconciliation, as four blocks',
         [('Variable costing income', 'the stable figure', '#1F7A6A'),
          ('+', '', None),
          ('Fixed overhead in CLOSING stock', 'cost held back', '#6D3F7E'),
          ('\u2212', '', None),
          ('Fixed overhead in OPENING stock', 'cost released', '#C9762E'),
          ('=', '', None),
          ('Absorption income', 'the moving figure', '#6D3F7E')],
         'Learn this line. It answers more exam questions than both statements together.'),
        ('table', ['Reconciliation', 'Units', 'Rate', 'Amount'],
         [['Variable costing operating income', '', '', ''],
          ['add Fixed overhead in closing inventory', '', '', ''],
          ['less Fixed overhead in opening inventory', '', '', ''],
          ['Absorption costing operating income', '', '', '']], '353A7C', [46, 16, 16, 22]),

        ('task', 'Exercise 3E',
         'State the direction rule for all three relationships between production and sales, and the cumulative result.',
         'Read and complete. Learn this paragraph.',
         ['Exercise 3D'],
         ['The first blank is about the CHANGE in inventory, not its level.', 'Blanks 3 and 4 are opposites. Work out one and the other follows.', 'The final blank is about timing, and it is the sentence to memorise.']),
        ('fill', 'R2',
         ['The difference between the two operating incomes equals the fixed '
          'manufacturing overhead rate multiplied by the {change} in inventory in units.',
          'When production exceeds sales, inventory {rises}, fixed overhead is carried '
          'forward, and absorption income is {higher}.',
          'When sales exceed production, inventory falls, fixed overhead deferred in an '
          'earlier period is released into cost of goods sold, and absorption income is '
          '{lower}. When production equals sales, no fixed overhead moves and the two '
          'incomes are the {same}.',
          'Over the life of the business, or over any run of periods that begins and '
          'ends with the same inventory, the two methods report exactly the same total '
          'income, because every cost is eventually {expensed}.'],
         {'change': ('The CHANGE in units, not the level.',
                     'Using closing inventory instead of the movement. If opening '
                     'inventory is not zero, that is wrong.'),
          'rises': ('More units in, than out.', ''),
          'higher': ('Cost has been moved off this period’s income statement.', ''),
          'lower': ('Last period’s cost arrives on this period’s statement as '
                    'well as this period’s.', ''),
          'same': ('Nothing moves, so nothing differs.', ''),
          'expensed': ('Timing, not amount. This is the single most important sentence '
                       'in the topic.',
                       'Believing absorption costing "creates" profit. It moves it '
                       'between periods.')},
         ['level', 'falls', 'equal', 'deferred', 'closing balance']),

        ('fig', 'fork', 'Compare units PRODUCED with units SOLD',
         [('Production is GREATER than sales', 'Absorption income is HIGHER', '6D3F7E'),
          ('Production EQUALS sales', 'The two incomes are THE SAME', '6B7280'),
          ('Production is LESS than sales', 'Absorption income is LOWER', '1F7A6A')]),

        ('task', 'Exercise 3F',
         'Apply the direction rule to three independent cases at speed.',
         'Three independent cases, each with a fixed overhead rate of $10 per unit. '
         'Complete the table.',
         ['Exercise 3E', 'the fork diagram above'],
         ['Compute the change in units first for all three cases, before any money.', 'Multiply by $10 and the amount is done.', 'The sign tells you which method is higher. Write the method name, not a tick.']),
        ('fig', 'timeline', 'Three cases, one rule',
         [('Case A  made 20,000  sold 18,000', 'inventory RISES by 2,000 \u2192 absorption higher', '#6D3F7E'),
          ('Case B  made 20,000  sold 20,000', 'inventory UNCHANGED \u2192 the two are equal', '#6B7280'),
          ('Case C  made 20,000  sold 23,000', 'inventory FALLS by 3,000 \u2192 absorption lower', '#1F7A6A')],
         'The rate is $10 in every case, so the only thing you are deciding is direction.'),
        ('table', ['Case', 'Produced', 'Sold', 'Change in units',
                   'Difference in operating income', 'Which is higher?'],
         [['A', '20,000', '18,000', '', '', ''],
          ['B', '20,000', '20,000', '', '', ''],
          ['C', '20,000', '23,000', '', '', '']], '353A7C', [8, 15, 15, 20, 25, 17]),

        ('traps', [
            ('"units produced exceeded units sold"',
             'variable costing income is higher because it has fewer costs in inventory',
             'ABSORPTION is higher. Cost has been moved OUT of its income statement and '
             'into the warehouse.'),
            ('"there was no change in inventory"',
             'you still need to do the reconciliation',
             'The difference is zero. Answer immediately and move on.'),
            ('a question giving closing inventory but not opening',
             'the difference is the rate × closing inventory',
             'Only if opening inventory was zero. The formula uses the CHANGE.'),
            ('"the fixed overhead was $600,000"',
             'that figure appears on both statements',
             'It appears in full on the variable statement. On the absorption statement '
             'only the part attached to units SOLD reaches the income statement.'),
            ('"over the three years combined"',
             'absorption costing reports more profit in total',
             'If opening and closing inventory are the same, total income is identical. '
             'Only the pattern differs.'),
        ]),

        ('task', 'Exercise 3G',
         'Recognise the direction rule and the reconciliation formula in exam English.',
         'The same fact, three registers.',
         ['Exercise 3E', 'Exercise 3D'],
         ['Cover the right-hand column and predict the exam wording.', 'Row 3 uses "cumulative", which is the word that signals the three-year question.']),
        ('fig', 'register',
         [('Making more than you sell makes absorption profit bigger.',
           'When production exceeds sales, absorption costing operating income exceeds '
           'variable costing operating income.',
           'In a period in which production exceeded sales, operating income under '
           'absorption costing as compared with variable costing would be:'),
          ('The gap is the rate times the change in stock.',
           'The difference in operating income equals the fixed overhead application '
           'rate multiplied by the change in inventory units.',
           'The difference between the two operating income figures is best explained by:'),
          ('In the long run both methods give the same total profit.',
           'Over a period in which opening and closing inventories are equal, cumulative '
           'operating income is identical under both methods.',
           'Which of the following statements regarding cumulative income under the two '
           'methods is correct?')],
         'Row 2 is the one that appears most often, in almost those words.'),
        ('three_ways', [
            ('Making more than you sell makes absorption profit bigger.',
             'When production exceeds sales, absorption costing operating income exceeds '
             'variable costing operating income.',
             'In a period in which production exceeded sales, operating income under '
             'absorption costing as compared with variable costing would be:'),
            ('The gap is the fixed overhead rate times the change in stock.',
             'The difference in operating income is equal to the fixed overhead '
             'application rate multiplied by the change in inventory units.',
             'The difference between the two operating income figures is best explained '
             'by:'),
            ('In the long run both methods give the same total profit.',
             'Over a period in which opening and closing inventories are equal, '
             'cumulative operating income is identical under both methods.',
             'Which of the following statements regarding cumulative income under the '
             'two methods is correct?'),
        ]),

        ('part', 'Part 4 · Exam practice', 'Levels B and C'),

        ('decoder', 'A company had operating income of $1,220,000 under variable costing. '
                    'Production exceeded sales by 8,000 units and the fixed overhead rate '
                    'was $12 per unit. Operating income under absorption costing was:'),

        ('mcq', 'A company had operating income of $1,220,000 under variable costing. '
                'Production exceeded sales by 8,000 units and the fixed manufacturing '
                'overhead rate was $12 per unit. Operating income under absorption '
                'costing was:',
         ['$1,124,000.', '$1,220,000.', '$1,316,000.', '$1,412,000.'],
         2, 'Level B',
         '$1,220,000 + (8,000 × $12) = $1,316,000. Option (A) subtracts instead of '
         'adding and is the single most common wrong answer on this topic.'),

        ('mcq', 'Grandview sold %s units at $%d. Variable manufacturing cost was $%d per '
                'unit, variable selling cost $%d per unit, fixed manufacturing overhead '
                '%s and fixed selling and administrative %s. Contribution margin was:'
                % (num(S1.sold), S1.price, S1.var_unit, S1.vsa, money(S1.fmoh), money(S1.fsa)),
         [money(S1.sales - S1.var_cogs), money(S1.contribution),
          money(S1.gross_margin), money(S1.contribution - S1.fmoh)],
         1, 'Level B',
         'Sales %s less variable production cost %s less variable selling cost %s = %s. '
         'Option (A) forgets the variable selling cost, which is the deduction '
         'candidates most often miss.'
         % (money(S1.sales), money(S1.var_cogs), money(S1.var_sa), money(S1.contribution))),

        ('mcq', 'Which of the following would cause absorption costing operating income '
                'to be LOWER than variable costing operating income for a period?',
         ['Units produced exceeded units sold.',
          'Units sold exceeded units produced.',
          'Fixed manufacturing overhead increased.',
          'The selling price was reduced.'],
         1, 'Level A',
         'Selling more than you make draws inventory down, releasing previously deferred '
         'fixed overhead into cost of goods sold. (C) and (D) change both figures '
         'equally and so change nothing about the comparison.'),

        ('mcq', 'A company began the year with 4,000 units in inventory and ended with '
                '9,000 units. The fixed manufacturing overhead rate was $15 per unit. '
                'Absorption costing operating income will exceed variable costing '
                'operating income by:',
         ['$60,000.', '$75,000.', '$135,000.', '$195,000.'],
         1, 'Level B',
         'The change is 5,000 units, so 5,000 × $15 = $75,000. (C) uses closing '
         'inventory of 9,000 and (A) uses opening inventory of 4,000 — both offered '
         'because the question deliberately supplies two inventory figures.'),

        ('mcq', 'Over three years a company produced 150,000 units and sold 150,000 '
                'units, with 10,000 units in inventory at both the beginning and the end '
                'of the three years. Cumulative operating income over the three years '
                'under absorption costing, compared with variable costing, would be:',
         ['Higher, because fixed overhead was inventoried.',
          'Lower, because fixed overhead was released.',
          'The same.',
          'Impossible to determine without the overhead rate.'],
         2, 'Level C',
         'Equal opening and closing inventory means no net deferral over the three years '
         'taken together. Option (D) is tempting because a rate is usually needed — but '
         'the change in units is zero, so the rate is multiplied by nothing.'),

        ('mcq', 'A company using absorption costing reported operating income of '
                '$940,000. Opening inventory contained $40,000 of fixed manufacturing '
                'overhead and closing inventory contained $115,000. Variable costing '
                'operating income was:',
         ['$865,000.', '$900,000.', '$980,000.', '$1,015,000.'],
         0, 'Level C',
         'Working backwards: $940,000 − ($115,000 − $40,000) = $865,000. The exam often '
         'gives the overhead in dollars rather than units, which removes the rate '
         'calculation and tests only the direction of the adjustment.'),

        ('mcq', 'Which statement about the relationship between the two methods is '
                'correct?',
         ['Absorption costing always reports higher operating income.',
          'The difference between the two incomes depends on the change in inventory, '
          'not on its level.',
          'Variable costing reports higher income whenever fixed overhead is large.',
          'The two methods report the same income whenever sales are constant.'],
         1, 'Level B',
         'Only (B) is always true. (D) is a trap built on Handout 4: sales can be '
         'perfectly constant while production swings, and then the incomes differ every '
         'year.'),

        ('mcq', 'A manufacturer had no opening inventory, produced 25,000 units and sold '
                '21,000. Fixed manufacturing overhead was $300,000 and fixed selling '
                'costs were $90,000. The amount of fixed cost carried in closing '
                'inventory under absorption costing was:',
         ['$0.', '$48,000.', '$62,400.', '$78,000.'],
         1, 'Level B',
         'The rate is $300,000 ÷ 25,000 = $12; 4,000 units remain, so $48,000. Option '
         '(C) wrongly includes the fixed selling cost in the rate — selling cost is '
         'never inventoried.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3A · the completed absorption costing statement'),
        ('stmt', 'Absorption costing · income statement', _ABS_ROWS, '6D3F7E'),
        ('h3', 'Exercise 3B · the completed variable costing statement'),
        ('stmt', 'Variable costing · income statement', _VAR_ROWS, '1F7A6A'),
        ('h3', 'Exercise 3D · the reconciliation'),
        ('table', ['Reconciliation', 'Units', 'Rate', 'Amount'],
         [['Variable costing operating income', '', '', money(S1.var_oi)],
          ['add Fixed overhead in closing inventory', num(S1.end_inv),
           '$%d' % S1.fmoh_rate, money(S1.fmoh_deferred)],
          ['less Fixed overhead in opening inventory', '0', '$%d' % S1.fmoh_rate, '—'],
          ['Absorption costing operating income', '', '', money(S1.abs_oi)]],
         '353A7C', [46, 16, 16, 22]),
        ('h3', 'Exercise 3F · the three cases'),
        ('table', ['Case', 'Produced', 'Sold', 'Change in units',
                   'Difference in operating income', 'Which is higher?'],
         [['A', '20,000', '18,000', '+2,000', '$20,000', 'Absorption'],
          ['B', '20,000', '20,000', 'nil', 'nil', 'Neither — they are equal'],
          ['C', '20,000', '23,000', '−3,000', '$30,000', 'Variable']],
         '353A7C', [8, 15, 15, 20, 25, 17]),
        ('prose', 'Case C is the one to rehearse. Inventory fell by 3,000 units, so '
                  '$30,000 of fixed overhead deferred in an earlier period was released '
                  'into this period’s cost of goods sold on top of this period’s '
                  'own fixed overhead. Absorption income is lower by exactly that amount.'),
    ],
)
