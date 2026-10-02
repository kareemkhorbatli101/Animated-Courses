# -*- coding: utf-8 -*-
"""Handout 5 — The Ledger. Journal entries under both methods."""
from data import S2, money, num

A, V = '6D3F7E', '1F7A6A'

# Year 1 of Scenario 2, carried through the accounts.
P = S2.produced[0]            # 50,000 made
Q = S2.sold[0]                # 40,000 sold
DM, DL, VOH = 18, 12, 6
MAT = DM * P
LAB = DL * P
VAR_OH = VOH * P
FIX_ACT = S2.fmoh
FIX_APP = S2.rate * P
FIX_BUD = S2.fmoh
VOLVAR = FIX_APP - FIX_BUD
ABS_UNIT = S2.std_abs_unit
VAR_UNIT = S2.var_unit
FG_ABS = ABS_UNIT * P
FG_VAR = VAR_UNIT * P
COGS_ABS = ABS_UNIT * Q
COGS_VAR = VAR_UNIT * Q
SALES = S2.price * Q

_m = money


def _blank_entries(entries):
    return [(ref, nar, [(a, lv, '', '') for a, lv, _d, _c in lines])
            for ref, nar, lines in entries]


_ABS_ENTRIES = [
    ('J1', 'Materials bought on credit.',
     [('Raw Materials Inventory', 0, _m(MAT), ''),
      ('Accounts Payable', 1, '', _m(MAT))]),
    ('J2', 'Materials issued to the production line.',
     [('Work in Process Inventory', 0, _m(MAT), ''),
      ('Raw Materials Inventory', 1, '', _m(MAT))]),
    ('J3', 'Direct labour for the period.',
     [('Work in Process Inventory', 0, _m(LAB), ''),
      ('Wages Payable', 1, '', _m(LAB))]),
    ('J4', 'Variable factory overhead actually incurred.',
     [('Variable Manufacturing Overhead Control', 0, _m(VAR_OH), ''),
      ('Accounts Payable / Cash', 1, '', _m(VAR_OH))]),
    ('J5', 'Fixed factory overhead actually incurred.',
     [('Fixed Manufacturing Overhead Control', 0, _m(FIX_ACT), ''),
      ('Accumulated Depreciation / Cash / Payables', 1, '', _m(FIX_ACT))]),
    ('J6', 'Variable overhead applied to production, %s units × $%d.' % (num(P), VOH),
     [('Work in Process Inventory', 0, _m(VAR_OH), ''),
      ('Variable Manufacturing Overhead Applied', 1, '', _m(VAR_OH))]),
    ('J7', ('Fixed overhead applied to production, %s units × $%d.' % (num(P), S2.rate),
            'This entry exists only under absorption costing.'),
     [('Work in Process Inventory', 0, _m(FIX_APP), ''),
      ('Fixed Manufacturing Overhead Applied', 1, '', _m(FIX_APP))]),
    ('J8', '%s units completed and transferred, at $%d each.' % (num(P), ABS_UNIT),
     [('Finished Goods Inventory', 0, _m(FG_ABS), ''),
      ('Work in Process Inventory', 1, '', _m(FG_ABS))]),
    ('J9', '%s units sold on credit.' % num(Q),
     [('Accounts Receivable', 0, _m(SALES), ''),
      ('Sales Revenue', 1, '', _m(SALES))]),
    ('J10', 'Cost of the %s units sold, at $%d each.' % (num(Q), ABS_UNIT),
     [('Cost of Goods Sold', 0, _m(COGS_ABS), ''),
      ('Finished Goods Inventory', 1, '', _m(COGS_ABS))]),
    ('J11', 'Fixed overhead accounts closed. Applied %s exceeds actual %s, so overhead '
            'was over-applied by %s — the favourable production volume variance.'
            % (_m(FIX_APP), _m(FIX_ACT), _m(VOLVAR)),
     [('Fixed Manufacturing Overhead Applied', 0, _m(FIX_APP), ''),
      ('Fixed Manufacturing Overhead Control', 1, '', _m(FIX_ACT)),
      ('Cost of Goods Sold', 1, '', _m(VOLVAR))]),
]

_VAR_ENTRIES = [
    ('J7v', ('Fixed factory overhead taken straight to expense.',
             'Under variable costing there is no application entry at all.'),
     [('Fixed Manufacturing Overhead Expense', 0, _m(FIX_ACT), ''),
      ('Fixed Manufacturing Overhead Control', 1, '', _m(FIX_ACT))]),
    ('J8v', '%s units completed and transferred, at $%d each.' % (num(P), VAR_UNIT),
     [('Finished Goods Inventory', 0, _m(FG_VAR), ''),
      ('Work in Process Inventory', 1, '', _m(FG_VAR))]),
    ('J10v', 'Cost of the %s units sold, at $%d each.' % (num(Q), VAR_UNIT),
     [('Cost of Goods Sold', 0, _m(COGS_VAR), ''),
      ('Finished Goods Inventory', 1, '', _m(COGS_VAR))]),
]

HANDOUT = dict(
    n=5,
    title='The Ledger',
    subtitle='The same month posted twice. Eleven entries under absorption costing, and '
             'the three that change under variable costing.',
    register='R2 and R3',

    lang=dict(
        register='R2 and R3 together. Journal narratives use a compressed register of '
                 'their own: "to record", "to close", "being the amount applied".',
        collocations=['debit an account', 'credit an account', 'post an entry',
                      'apply overhead to production', 'close an account',
                      'overhead is over-applied', 'overhead is under-applied',
                      'charge to cost of goods sold'],
        pairs=['charge (verb) / charge (noun)', 'apply / allocate / absorb',
               'control account / applied account'],
        nots=['To "charge" an account means to DEBIT it. A "charge" is also a fee. '
              'Context decides.',
              'Overhead is applied TO production and absorbed BY units. Both are correct; '
              '"allocated" belongs to service departments.'],
    ),

    objectives=[
        'Post a complete manufacturing cycle under absorption costing.',
        'Identify the three entries that change under variable costing, and the one that '
        'disappears.',
        'Compute applied overhead, actual overhead and the amount over- or under-applied.',
        'Dispose of an over- or under-applied balance and say when proration is required.',
        'Prove the difference between the two operating incomes from the ledger alone.',
    ],

    terms=[
        ('control account', 'The account that collects the ACTUAL overhead incurred.',
         'حساب المراقبة',
         'Debited with real costs. Never debited with applied amounts.'),
        ('applied overhead', 'Overhead charged to production using the standard rate.',
         'العبء المحمل',
         'A credit balance. The exam gives you actual and applied and asks for the '
         'difference.'),
        ('over-applied overhead', 'Applied overhead exceeds actual overhead.',
         'تحميل زائد',
         'Credit balance left over. Reduces cost of goods sold when closed.'),
        ('under-applied overhead', 'Actual overhead exceeds applied overhead.',
         'تحميل ناقص',
         'Debit balance. Increases cost of goods sold when closed.'),
        ('proration', 'Splitting an over- or under-applied balance between work in '
         'process, finished goods and cost of goods sold.', 'التوزيع النسبي',
         'Required when the amount is material. Writing it all off to cost of goods sold '
         'is only permitted when it is not.'),
        ('spending variance', 'Actual fixed overhead less budgeted fixed overhead.',
         'انحراف الإنفاق',
         'This is about PRICE. The volume variance is about OUTPUT. Keep them apart.'),
        ('normal costing', 'Actual direct costs with overhead applied at a predetermined '
         'rate.', 'التكلفة العادية', ''),
        ('standard costing', 'Standard costs for materials, labour and overhead alike.',
         'التكلفة المعيارية', ''),
    ],

    blocks=[
        ('scene', 'Year 1, posted in full', [
            'This handout takes Year 1 from Handout 4 — %s units produced, %s sold — and '
            'puts it through the accounts. Nothing about the facts changes. Only the '
            'bookkeeping does.' % (num(P), num(Q)),
            'Work through the absorption entries first, in order. Then do the variable '
            'costing version, which is shorter, and find the one entry that simply does '
            'not exist.',
            'At the end you will prove the %s difference in operating income from the '
            'ledger, without using the reconciliation formula at all. That is the proof '
            'the examiner is really testing when a question mixes costing method with '
            'journal entries.' % money(abs(S2.difference()[0])),
        ]),

        ('h3', 'The figures you need'),
        ('table', ['Item', 'Amount'],
         [['Units produced', num(P)],
          ['Units sold', num(Q)],
          ['Direct materials, $%d per unit' % DM, money(MAT)],
          ['Direct labour, $%d per unit' % DL, money(LAB)],
          ['Variable overhead, $%d per unit' % VOH, money(VAR_OH)],
          ['Fixed manufacturing overhead actually incurred', money(FIX_ACT)],
          ['Budgeted fixed manufacturing overhead', money(FIX_BUD)],
          ['Denominator volume', '%s units' % num(S2.denominator)],
          ['Standard fixed overhead rate', '$%d per unit' % S2.rate],
          ['Standard absorption cost per unit', '$%d' % ABS_UNIT],
          ['Standard variable cost per unit', '$%d' % VAR_UNIT],
          ['Selling price', '$%d per unit' % S2.price]], '353A7C', [62, 38]),

        ('prose', 'One distinction before you post anything. Under normal costing, '
                  'direct materials and direct labour go into the accounts at what they '
                  'actually cost, and only overhead is applied at a predetermined rate. '
                  'Under standard costing, materials and labour are recorded at standard '
                  'cost as well, and a variance is recognised wherever the actual amount '
                  'differs. The entries below use standard costing, which is what the '
                  'exam assumes whenever it gives you a standard cost per unit and a '
                  'denominator volume.', 'R2'),

        ('part', 'Part 1 · Absorption costing, posted in full', 'eleven entries'),

        ('task', 'Exercise 5A',
         'Post a full manufacturing month under absorption costing, including the entry that closes the overhead accounts.',
         'Complete every entry. Put each amount in the debit or the credit column — the '
         'account name tells you which. Entry J11 has three lines and is the one to '
         'think hardest about.',
         ['The figures table above', 'Handout 4 for the $15 rate and the denominator volume'],
         ['Work in order. Every entry has a debit line first and a credit line indented under it.', 'J7 is the entry that only absorption costing makes. Mark it.', 'J11 has three lines because two accounts are being closed against each other and the difference has to go somewhere.']),
        ('fig', 'taccounts',
         [('Work in Process', [('J2', '900,000'), ('J3', '600,000'), ('J6', '300,000'),
                               ('J7', '750,000')], [('J8', '2,550,000')], '#6D3F7E'),
          ('Finished Goods', [('J8', '2,550,000')], [('J10', '2,040,000')], '#1F7A6A'),
          ('Fixed Overhead Control', [('J5', '600,000')], [('J11', '600,000')], '#44506B'),
          ('Fixed Overhead Applied', [('J11', '750,000')], [('J7', '750,000')], '#C9762E')],
         'Post your entries here as well. Finished Goods should be left holding $510,000.',
         2,
         [('J2', 'materials issued'), ('J3', 'direct labour'),
          ('J6', 'variable overhead applied'), ('J7', 'fixed overhead applied'),
          ('J8', 'units completed'), ('J10', 'units sold'),
          ('J5', 'fixed overhead incurred'), ('J11', 'overhead accounts closed')]),
        ('journal', _blank_entries(_ABS_ENTRIES)),

        ('task', 'Exercise 5B',
         'Separate the control account from the applied account, and dispose of the difference between them.',
         'Read and complete.',
         ['Exercise 5A, entries J5, J7 and J11'],
         ['Two accounts, two different numbers. One holds what was spent, one holds what was charged to production.', 'Applied is the standard rate times units PRODUCED, never units sold.', 'The difference between them has a name and a destination. Both are blanks.']),
        ('fig', 'formula', 'Why there are two fixed overhead accounts',
         [('CONTROL', 'what the company actually spent: $600,000', '#44506B'),
          ('vs', '', None),
          ('APPLIED', 'standard rate \u00d7 units produced: $750,000', '#C9762E'),
          ('=', '', None),
          ('$150,000 OVER-applied', 'closed to cost of goods sold', '#2E8B62')],
         'If the two were always equal there would be no reason to keep them apart.'),
        ('fill', 'R2',
         ['Two separate things happen to fixed overhead in this ledger, and keeping them '
          'apart is what the entries are for.',
          'The actual cost incurred is debited to the Fixed Manufacturing Overhead '
          '{Control} account, which records what the company really spent.',
          'A quite different amount is credited to the Fixed Manufacturing Overhead '
          '{Applied} account, calculated as the standard rate of $%d multiplied by the '
          '%s units actually {produced}.' % (S2.rate, num(P)),
          'In Year 1 the applied amount of %s exceeded the actual amount of %s, so '
          'overhead was {over-applied} by %s.'
          % (money(FIX_APP), money(FIX_ACT), money(VOLVAR)),
          'When the two accounts are closed against each other, that balance is credited '
          'to Cost of Goods {Sold}. It reduces the expense and increases reported income '
          'by exactly the amount of the favourable production volume variance.'],
         {'Control': ('Actual costs only.',
                      'Debiting applied amounts to the control account, which destroys '
                      'the comparison the two accounts exist to make.'),
          'Applied': ('A credit, built from the standard rate.', ''),
          'produced': ('Units PRODUCED, not units sold.',
                       'Applying overhead to units sold. Overhead attaches at '
                       'production.'),
          'over-applied': ('Applied is greater than actual.', ''),
          'Sold': ('Permitted when the amount is immaterial; otherwise prorate.',
                   'Forgetting that a material balance must be split between work in '
                   'process, finished goods and cost of goods sold.')},
         ['Expense', 'Payable', 'under-applied', 'Inventory']),

        ('part', 'Part 2 · The same month under variable costing', 'three entries change'),

        ('task', 'Exercise 5C',
         'Post the same month under variable costing and find the entry that disappears altogether.',
         'Only three entries differ. Complete them, then write in the box below which '
         'absorption entry has no variable costing equivalent at all.',
         ['Exercise 5A'],
         ['Only three entries change. J1 to J6 are identical under both methods.', 'The transfer to finished goods falls because the unit cost falls from $51 to $36.', 'Write the missing entry number on the ruled lines underneath.']),
        ('fig', 'taccounts',
         [('Work in Process  (variable)', [('J2', '900,000'), ('J3', '600,000'),
                                           ('J6', '300,000')],
           [('J8v', '1,800,000')], '#1F7A6A'),
          ('Fixed Overhead Expense', [('J7v', '600,000')], [], '#1F7A6A')],
         'No fixed overhead enters Work in Process, so there is nothing to apply and '
         'nothing to close.',
         2,
         [('J2', 'materials issued'), ('J3', 'direct labour'),
          ('J6', 'variable overhead applied'), ('J8v', 'units completed at $36'),
          ('J7v', 'fixed overhead straight to expense')]),
        ('journal', _blank_entries(_VAR_ENTRIES)),
        ('rules', 2),

        ('task', 'Exercise 5D',
         'State what variable costing does NOT have: no application, no balance, no volume variance.',
         'Read and complete.',
         ['Exercise 5C'],
         ['Blank 1 is an account name in two words.', 'Blank 2 is the thing that cannot exist if nothing is applied.', 'Blank 3 is about which entries stay the same, and the answer is most of them.']),
        ('fig', 'buckets', 'What each method needs in the ledger',
         [('ABSORPTION needs', '6D3F7E',
           ['a control account', 'an applied account', 'an application entry',
            'a closing entry', 'a volume variance']),
          ('VARIABLE needs', '1F7A6A',
           ['a control account', 'one expense entry', '', '', ''])],
         'Three fewer moving parts, and no variance to misread.'),
        ('fill', 'R2',
         ['Under variable costing, fixed factory overhead never enters Work in '
          '{Process}. It never reaches Finished Goods and never sits in inventory.',
          'There is therefore no application entry and no over- or under-applied balance '
          'for fixed overhead, which also means there is no production volume {variance} '
          'to report. The whole %s is charged to the period in a single entry.'
          % money(FIX_ACT),
          'Entries J1 to J6 are {unchanged}, because they deal with materials, labour and '
          'variable overhead, which both methods treat the same way.',
          'The transfer to finished goods falls from %s to %s, a difference of exactly '
          'the fixed overhead applied to the %s units {produced}.'
          % (money(FG_ABS), money(FG_VAR), num(P))],
         {'Process': ('It is never capitalised at all.', ''),
          'variance': ('No application means no volume variance.',
                       'A very common exam point: variable costing systems do not report '
                       'a production volume variance.'),
          'unchanged': ('The first six entries are identical under both methods.', ''),
          'produced': ('All %s units carry it, not just those sold.' % num(P), '')},
         ['Finished Goods', 'spending', 'identical', 'applied']),

        ('part', 'Part 3 · Proving the difference from the ledger', 'the Section D payoff'),

        ('task', 'Exercise 5E',
         'Prove the difference between the two incomes from the ledger alone, without the reconciliation formula.',
         'Add up what each method actually charged against this year’s income, and '
         'compare.',
         ['Exercise 5A', 'Exercise 5C'],
         ['Add up everything each method charged against this year’s income.', 'Under absorption that is cost of goods sold LESS the favourable variance closed to it.', 'Under variable it is cost of goods sold PLUS the whole fixed overhead.']),
        ('fig', 'bridge', 'Charged against Year 1 income', 1890000,
         [('Fixed overhead variable costing charged and absorption did not', 150000)],
         'Variable costing charged', 2040000),
        ('table', ['Charged against Year 1 income', 'Absorption costing', 'Variable costing'],
         [['Cost of goods sold', '', ''],
          ['Fixed manufacturing overhead expensed directly', '', ''],
          ['Volume variance closed to cost of goods sold', '', ''],
          ['Total manufacturing cost charged against income', '', ''],
          ['Difference', '', '']], '353A7C', [46, 27, 27]),

        ('watch', 'The two totals differ by %s, which is %s units still in the warehouse '
                  'multiplied by the $%d of fixed overhead each one carries. The ledger '
                  'and the reconciliation formula are two descriptions of the same '
                  'event.' % (money(abs(S2.difference()[0])), num(P - Q), S2.rate)),

        ('part', 'Part 4 · Disposing of the balance', 'write off or prorate'),

        ('task', 'Exercise 5F',
         'Decide when an over- or under-applied balance may be written off and when it must be spread.',
         'Read and complete.',
         ['Exercise 5B'],
         ['The test is materiality, and it is the first blank.', 'The second blank is the technical verb for spreading a balance across accounts.', 'The third blank is a direction word: which way does inventory go if you write the whole balance off?']),
        ('fig', 'fork', 'What to do with the leftover balance',
         [('Is the over- or under-applied balance material?',
           'NO \u2192 close the whole amount to Cost of Goods Sold', '#2B6CB0'),
          ('Is the over- or under-applied balance material?',
           'YES \u2192 prorate across WIP, Finished Goods and Cost of Goods Sold',
           '#C9762E'),
          ('Why does it matter?',
           'Writing a large balance off distorts both inventory and this year\u2019s expense',
           '#6D3F7E')]),
        ('fill', 'R2',
         ['An over- or under-applied balance must be removed at the year end.',
          'If the amount is {immaterial}, the whole balance may be closed to cost of '
          'goods sold, which is what entry J11 did.',
          'If the amount is material, the standards require it to be {prorated} across '
          'the accounts that contain the applied overhead: work in process, finished '
          'goods and cost of goods sold, in proportion to the overhead in each.',
          'Proration matters because writing a large under-applied balance off to cost '
          'of goods sold {understates} inventory on the balance sheet and overstates the '
          'expense for the year.'],
         {'immaterial': ('Materiality is the test, not convenience.', ''),
          'prorated': ('Spread across all three accounts holding applied overhead.', ''),
          'understates': ('Inventory is left carrying too little cost.',
                          'Assuming proration always increases income. It depends '
                          'entirely on whether the balance is over- or under-applied.')},
         ['material', 'written off', 'overstates', 'audited']),

        ('task', 'Exercise 5G',
         'Prorate a material under-applied balance across the three accounts that hold applied overhead.',
         'An under-applied balance of $90,000 is to be prorated. Complete the table.',
         ['Exercise 5F'],
         ['Work out each account’s share of the $600,000 of applied overhead first.', 'Those three percentages must add to 100.', 'Then apply each percentage to the $90,000. Check that your three answers add back to $90,000.']),
        ('fig', 'buckets', 'Proration follows the applied overhead, not the balance',
         [('Work in Process  10%', '6D3F7E', ['$60,000 of applied overhead']),
          ('Finished Goods  30%', '1F7A6A', ['$180,000 of applied overhead']),
          ('Cost of Goods Sold  60%', 'C9762E', ['$360,000 of applied overhead'])],
         'The $90,000 is split in the same proportions as the overhead already sitting '
         'in each account.'),
        ('table', ['Account', 'Applied overhead in the account', '%', 'Share of $90,000'],
         [['Work in Process', '$60,000', '', ''],
          ['Finished Goods', '$180,000', '', ''],
          ['Cost of Goods Sold', '$360,000', '', ''],
          ['Total', '$600,000', '100%', '$90,000']], A, [34, 28, 14, 24]),

        ('traps', [
            ('"overhead applied was $675,000"',
             'that is the actual overhead cost',
             'Applied is a calculated figure: standard rate × actual production. Actual '
             'cost is a separate number given elsewhere in the stem.'),
            ('"overhead was over-applied"',
             'costs were higher than expected',
             'Over-applied means MORE was charged to production than was spent. Closing '
             'it REDUCES cost of goods sold and raises income.'),
            ('"the fixed overhead variance"',
             'there is only one',
             'There are two: a spending variance (actual vs budget) and a volume variance '
             '(applied vs budget). A question saying just "the variance" is usually '
             'testing which one you reach for.'),
            ('a variable costing question asking for the volume variance',
             'compute it as usual',
             'Variable costing does not apply fixed overhead, so no volume variance '
             'exists. The answer is zero, or "not applicable".'),
            ('"close the balance to cost of goods sold"',
             'that is always acceptable',
             'Only if the balance is immaterial. A material balance is prorated.'),
        ]),

        ('task', 'Exercise 5H',
         'Recognise ledger vocabulary in exam English, where the question names an account rather than a method.',
         'The same fact, three registers.',
         ['The whole handout'],
         ['Cover the right-hand column and predict the exam wording.', 'Row 2 is about the EFFECT of an entry, which is how the exam usually asks.']),
        ('fig', 'register',
         [('Fixed overhead never goes into stock under variable costing.',
           'Under variable costing, fixed manufacturing overhead is not capitalised into '
           'work in process or finished goods.',
           'Under variable costing, the journal entry to record fixed manufacturing '
           'overhead would include a debit to:'),
          ('If you applied more than you spent, take it off cost of goods sold.',
           'An over-applied overhead balance closed to cost of goods sold reduces that '
           'expense and increases operating income.',
           'The entry to close an over-applied overhead balance to cost of goods sold '
           'would have the effect of:'),
          ('Big leftover balances have to be split three ways.',
           'A material over- or under-applied balance is prorated among work in process, '
           'finished goods and cost of goods sold.',
           'Which of the following is required when the under-applied overhead balance '
           'is material?')],
         'The exam names the ACCOUNT. You have to supply the method.'),
        ('three_ways', [
            ('Fixed overhead never goes into stock under variable costing.',
             'Under variable costing, fixed manufacturing overhead is not capitalised '
             'into work in process or finished goods.',
             'Under variable costing, the journal entry to record fixed manufacturing '
             'overhead would include a debit to:'),
            ('If you applied more than you spent, take it off cost of goods sold.',
             'An over-applied overhead balance closed to cost of goods sold reduces that '
             'expense and increases operating income.',
             'The entry to close an over-applied overhead balance to cost of goods sold '
             'would have the effect of:'),
            ('Big leftover balances have to be split three ways.',
             'A material over- or under-applied balance is prorated among work in '
             'process, finished goods and cost of goods sold.',
             'Which of the following is required when the under-applied overhead balance '
             'is material?'),
        ]),

        ('part', 'Part 5 · Exam practice', 'Levels B and C'),

        ('decoder', 'Under variable costing, the journal entry to record fixed '
                    'manufacturing overhead incurred during the period would include '
                    'which of the following?'),

        ('mcq', 'Under variable costing, the journal entry to record fixed manufacturing '
                'overhead incurred during the period would include:',
         ['A debit to Work in Process Inventory.',
          'A debit to Finished Goods Inventory.',
          'A debit to an expense account for the full amount incurred.',
          'A credit to Fixed Manufacturing Overhead Applied.'],
         2, 'Level B',
         'Fixed overhead is a period cost under variable costing, so it is expensed '
         'immediately and never enters an inventory account. (D) describes the '
         'absorption entry that has no variable costing equivalent.'),

        ('mcq', 'A plant applied fixed overhead of $675,000 to production and actually '
                'incurred $640,000. The balance is:',
         ['Under-applied by $35,000, increasing cost of goods sold when closed.',
          'Over-applied by $35,000, decreasing cost of goods sold when closed.',
          'Under-applied by $35,000, decreasing cost of goods sold when closed.',
          'Over-applied by $35,000, increasing cost of goods sold when closed.'],
         1, 'Level B',
         'Applied exceeds actual, so overhead is over-applied; too much cost was charged '
         'to production, and closing the balance takes it back off cost of goods sold. '
         'Both the direction AND the effect must be right, which is why all four '
         'combinations are offered.'),

        ('mcq', 'Grandview produced %s units at a standard fixed overhead rate of $%d '
                'with a denominator volume of %s units. The amount debited to Work in '
                'Process for fixed overhead under absorption costing was:'
                % (num(P), S2.rate, num(S2.denominator)),
         [money(FIX_BUD), money(FIX_APP), money(VOLVAR), '$0'],
         1, 'Level B',
         'Applied = actual production × rate = %s × $%d = %s. (A) is budgeted overhead '
         'and (C) is the volume variance; (D) would be correct only under variable '
         'costing.' % (num(P), S2.rate, money(FIX_APP))),

        ('mcq', 'Which entry appears under absorption costing but has NO equivalent at '
                'all under variable costing?',
         ['The entry recording actual fixed overhead incurred.',
          'The entry applying fixed overhead to work in process.',
          'The entry transferring completed units to finished goods.',
          'The entry recording the sale.'],
         1, 'Level C',
         'Actual fixed overhead is still recorded (it is just expensed), units are still '
         'transferred (at a lower cost) and sales are identical. Only the APPLICATION of '
         'fixed overhead to production disappears entirely.'),

        ('mcq', 'An under-applied overhead balance of $200,000 is considered material. '
                'Applied overhead remaining in Work in Process, Finished Goods and Cost '
                'of Goods Sold is $100,000, $300,000 and $600,000 respectively. The '
                'amount charged to Cost of Goods Sold on proration is:',
         ['$60,000.', '$100,000.', '$120,000.', '$200,000.'],
         2, 'Level C',
         '$600,000 ÷ $1,000,000 = 60%; 60% × $200,000 = $120,000. Option (D) is the '
         'figure you get by writing the whole balance off, which is exactly what '
         'materiality forbids here.'),

        ('mcq', 'A company using standard absorption costing reports a favourable '
                'production volume variance. This indicates that:',
         ['Actual fixed overhead was less than budgeted fixed overhead.',
          'Actual production exceeded the denominator volume.',
          'Actual sales exceeded budgeted sales.',
          'Variable overhead was efficiently used.'],
         1, 'Level B',
         'The volume variance compares applied overhead with budgeted overhead, and '
         'applied depends only on output. (A) describes the spending variance.'),

        ('mcq', 'Under absorption costing, the total debited to Finished Goods Inventory '
                'for %s completed units at a standard cost of $%d would be:'
                % (num(P), ABS_UNIT),
         [money(FG_VAR), money(FG_ABS), money(COGS_ABS), money(FIX_APP)],
         1, 'Level A',
         '%s × $%d = %s. (A) is the variable costing figure at $%d per unit, which is '
         'the distractor for candidates who forget which method the question named.'
         % (num(P), ABS_UNIT, money(FG_ABS), VAR_UNIT)),

        ('mcq', 'Which of the following statements about the two overhead accounts is '
                'correct?',
         ['Both the control account and the applied account are debited with actual '
          'costs.',
          'The control account records actual cost; the applied account records cost '
          'charged to production.',
          'The applied account is debited with actual cost and credited with budgeted '
          'cost.',
          'Only one account is needed, since the two amounts are always equal.'],
         1, 'Level A',
         'The whole point of running two accounts is that the two amounts are NOT equal; '
         'their difference is the over- or under-applied balance.'),

        ('mcq', 'A company charged its entire $340,000 under-applied overhead balance to '
                'cost of goods sold. If the balance had been prorated, the effect on the '
                'financial statements would have been:',
         ['Higher inventory and higher operating income.',
          'Higher inventory and lower operating income.',
          'Lower inventory and higher operating income.',
          'No effect, since the total cost is unchanged.'],
         0, 'Level C',
         'Proration leaves part of the under-applied cost in work in process and '
         'finished goods instead of in cost of goods sold. Inventory rises and the '
         'expense falls, so income rises. (D) confuses total cost with its allocation '
         'between the balance sheet and the income statement.'),
    ],

    key_extra=[
        ('h3', 'Exercise 5A · the completed absorption entries'),
        ('journal', _ABS_ENTRIES),
        ('h3', 'Exercise 5C · the three entries that change under variable costing'),
        ('journal', _VAR_ENTRIES),
        ('prose', 'The entry with no variable costing equivalent is J7, the application '
                  'of fixed overhead to Work in Process. Everything else either stays the '
                  'same or changes only in amount.'),
        ('h3', 'Exercise 5E · what each method charged against Year 1 income'),
        ('table', ['Charged against Year 1 income', 'Absorption costing', 'Variable costing'],
         [['Cost of goods sold', money(COGS_ABS), money(COGS_VAR)],
          ['Fixed manufacturing overhead expensed directly', '—', money(FIX_ACT)],
          ['Volume variance closed to cost of goods sold',
           '(%s)' % money(VOLVAR), '—'],
          ['Total manufacturing cost charged against income',
           money(COGS_ABS - VOLVAR), money(COGS_VAR + FIX_ACT)],
          ['Difference', money((COGS_VAR + FIX_ACT) - (COGS_ABS - VOLVAR)), '']],
         '353A7C', [46, 27, 27]),
        ('prose', 'Variable costing charged %s more against Year 1 income. That is %s '
                  'units × $%d — the fixed overhead resting in the warehouse under '
                  'absorption costing, and already expensed under variable costing.'
                  % (money((COGS_VAR + FIX_ACT) - (COGS_ABS - VOLVAR)), num(P - Q), S2.rate)),
        ('h3', 'Exercise 5G · proration'),
        ('table', ['Account', 'Applied overhead in the account', '%', 'Share of $90,000'],
         [['Work in Process', '$60,000', '10%', '$9,000'],
          ['Finished Goods', '$180,000', '30%', '$27,000'],
          ['Cost of Goods Sold', '$360,000', '60%', '$54,000'],
          ['Total', '$600,000', '100%', '$90,000']], '6D3F7E', [34, 28, 14, 24]),
    ],
)
