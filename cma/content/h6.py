# -*- coding: utf-8 -*-
"""Handout 6 — The Incentive Problem, and the exam. Scenario 3."""
from data import S3, money, num

A, V, RED = '6D3F7E', '1F7A6A', 'C0483F'

PLAN, PUSH = S3.plan_produce, S3.push_produce
VV_PLAN = S3.volume_variance(PLAN)
VV_PUSH = S3.volume_variance(PUSH)
OI_PLAN = S3.absorption_oi(PLAN)
OI_PUSH = S3.absorption_oi(PUSH)
OI_VAR = S3.variable_oi()
MIN_PROD = S3.min_production_for_bonus

HANDOUT = dict(
    n=6,
    title='The Incentive Problem, and the Exam',
    subtitle='A manager can raise absorption costing income without selling anything. '
             'Here is how much, why it is legal, why it is still wrong, and how the '
             '2026 exam asks about it.',
    register='R3 Exam English throughout',

    lang=dict(
        register='R3. From here on the English is the exam’s own. Every sentence in '
                 'Part 4 of this handout is written the way a case-based question writes '
                 'it.',
        collocations=['build inventory for stock', 'meet the bonus threshold',
                      'tie up working capital', 'at the expense of', 'act in good faith',
                      'raise the matter with', 'resolve an ethical conflict'],
        pairs=['legal / ethical', 'earnings management / fraud',
               'incentive / instruction'],
        nots=['Something can be permitted by the accounting standards and still breach '
              'the IMA Statement of Ethical Professional Practice.',
              '"Would be able to" and "would be required to" are not the same. CBQ items '
              'turn on this difference.'],
    ),

    objectives=[
        'Quantify the effect of overproduction on absorption costing operating income.',
        'Solve for the production level that reaches a stated income target.',
        'Explain why variable costing removes the incentive entirely.',
        'Identify the costs of building unwanted inventory that the income statement '
        'does not show.',
        'Apply the IMA Statement of Ethical Professional Practice to a production '
        'decision.',
        'Work a complete case-based question in the 2026 format.',
    ],

    terms=[
        ('earnings management', 'Using permitted accounting choices or real decisions to '
         'move reported income between periods.', 'إدارة الأرباح',
         'Not the same as fraud. Most of it is legal, which is exactly what makes it an '
         'ethics question rather than a law question.'),
        ('channel stuffing', 'Pushing goods to customers early to pull sales into the '
         'current period.', 'حشو القنوات',
         'The sales-side cousin of overproduction. The exam pairs them.'),
        ('carrying cost', 'The cost of holding inventory: capital tied up, storage, '
         'insurance, obsolescence.', 'تكلفة الاحتفاظ بالمخزون',
         'Never appears on the income statement as a line. That is why the incentive '
         'works.'),
        ('obsolescence', 'Loss of value because goods are superseded or expire.',
         'التقادم', ''),
        ('residual income', 'Operating income less a charge for the capital employed.',
         'الدخل المتبقي',
         'A capital charge is the standard cure for the overproduction incentive, '
         'because inventory is capital.'),
        ('return on investment', 'Operating income divided by the investment base.',
         'العائد على الاستثمار',
         'Building inventory raises the numerator AND the denominator. The exam asks '
         'which effect wins.'),
        ('segment margin', 'The margin of a business unit after its own traceable fixed '
         'costs.', 'هامش القطاع', ''),
        ('goal congruence', 'Managers acting in their own interest also act in the '
         'company’s interest.', 'توافق الأهداف',
         'The technical name for what this handout is about. The absorption bonus '
         'destroys it.'),
        ('Statement of Ethical Professional Practice',
         'The IMA code binding members: the principles of Honesty, Fairness, Objectivity '
         'and Responsibility, and the standards of Competence, Confidentiality, '
         'Integrity and Credibility.', 'بيان الممارسة المهنية الأخلاقية',
         'Learn the four STANDARDS by name. Questions ask which one is breached.'),
    ],

    blocks=[
        ('scene', 'The Riverside plant, the last week of the fourth quarter', [
            'Grandview’s Riverside plant is a separate reporting segment with its own '
            'manager, Nadia Hourani. Her annual bonus is paid if the plant reports '
            'absorption costing operating income of at least %s for the year.'
            % money(S3.bonus_threshold),
            'Demand for the quarter is %s units and that is what the plant has planned to '
            'make. The denominator volume used to set the fixed overhead rate is %s units '
            'a quarter, and budgeted fixed manufacturing overhead is %s.'
            % (num(S3.sold), num(S3.denominator), money(S3.fmoh)),
            'On Monday Ms Hourani asks the plant accountant to model a second option: run '
            'the line at full capacity and make %s units instead of %s. The extra %s '
            'units would go into the warehouse. There is no customer for them and no '
            'order on the books.'
            % (num(PUSH), num(PLAN), num(S3.excess_units)),
            'Nothing she is proposing breaks a rule. The units would be real, the costs '
            'would be real, and the accounting would be correct under every standard '
            'that applies.',
        ]),

        ('h3', 'The data for this handout'),
        ('table', ['Item', 'Amount'],
         [['Selling price per unit', '$%d' % S3.price],
          ['Variable manufacturing cost per unit', '$%d' % S3.var_unit],
          ['Variable selling cost per unit sold', '$%d' % S3.vsa],
          ['Budgeted fixed manufacturing overhead for the quarter', money(S3.fmoh)],
          ['Denominator volume for the quarter', '%s units' % num(S3.denominator)],
          ['Standard fixed overhead rate', '$%d per unit' % S3.rate],
          ['Standard absorption cost per unit', '$%d' % S3.std_abs_unit],
          ['Fixed selling and administrative for the quarter', money(S3.fsa)],
          ['Units that can be sold this quarter', num(S3.sold)],
          ['Bonus threshold (absorption operating income)', money(S3.bonus_threshold)]],
         '353A7C', [62, 38]),

        ('part', 'Part 1 · What the two options report', 'the same sales, two incomes'),

        ('task', 'Exercise 6A',
         'Show that absorption income moves and variable costing income does not, when only production changes.',
         'Complete both columns. Sales are %s units in BOTH cases — only production '
         'differs.' % num(S3.sold),
         ['Handout 4 Exercise 4F for the long-form absorption calculation'],
         ['Fill the two columns in parallel, row by row, not one column at a time.', 'Sales are the same in both columns. Only the production volume variance differs.', 'Do the last two rows last, and look at them together.']),
        ('fig', 'threshold', 'One decision, two reported incomes',
         [('Produce 30,000  absorption', 710000, '#6D3F7E'),
          ('Produce 45,000  absorption', 935000, '#6D3F7E'),
          ('Either way  variable costing', 710000, '#1F7A6A')],
         890000, 'bonus threshold $890,000'),
        ('table', ['', 'Produce %s (to demand)' % num(PLAN),
                   'Produce %s (to capacity)' % num(PUSH)],
         [['Units produced', '', ''],
          ['Units sold', '', ''],
          ['Change in inventory (units)', '', ''],
          ['Standard gross margin (units sold × $%d)' % (S3.price - S3.std_abs_unit),
           '', ''],
          ['Production volume variance', '', ''],
          ['less Selling and administrative', '', ''],
          ['ABSORPTION operating income', '', ''],
          ['VARIABLE costing operating income', '', ''],
          ['Bonus earned?', '', '']], A, [34, 33, 33]),

        ('watch', 'Read the two bottom rows again. Absorption income rises by %s. '
                  'Variable costing income does not move at all, because not one extra '
                  'unit was sold.' % money(S3.swing)),

        ('task', 'Exercise 6B',
         'Describe in words how building stock moves fixed overhead off the income statement.',
         'Read and complete.',
         ['Exercise 6A'],
         ['Blank 1 is what did NOT happen, and it is the whole point.', 'Blank 2 is a place, not an account name.', 'Blank 3 is a direction word and blank 4 is the result.']),
        ('fig', 'taccounts',
         [('Finished Goods  produce 30,000', [('made', '1,530,000')],
           [('sold', '1,530,000')], '#1F7A6A'),
          ('Finished Goods  produce 45,000', [('made', '2,295,000')],
           [('sold', '1,530,000')], '#6D3F7E')],
         'The right-hand account keeps $765,000 — and $225,000 of that is fixed overhead '
         'that never reached the income statement.',
         2,
         [('made', 'units completed at the $51 standard cost'),
          ('sold', '30,000 units sold at $51 each')]),
        ('fill', 'R2',
         ['Making %s units instead of %s changes nothing a customer can see. No extra '
          'unit is {sold}, no extra cash comes in, and the variable costing income is '
          'unchanged at %s.' % (num(PUSH), num(PLAN), money(OI_VAR)),
          'What changes is where the fixed overhead sits. At the higher output the '
          'standard rate of $%d is applied to %s more units, so %s of fixed overhead is '
          'attached to goods that stay in the {warehouse} instead of being charged '
          'against this quarter.'
          % (S3.rate, num(S3.excess_units), money(S3.swing)),
          'The production volume variance moves from %s unfavourable to %s {favourable}, '
          'a swing of exactly the same %s.'
          % (money(abs(VV_PLAN)), money(VV_PUSH), money(S3.swing)),
          'Reported absorption income therefore rises to %s, and the bonus threshold of '
          '%s is {passed}.' % (money(OI_PUSH), money(S3.bonus_threshold))],
         {'sold': ('Sales are identical in the two options.', ''),
          'warehouse': ('The cost moves to the balance sheet.', ''),
          'favourable': ('Favourable because output exceeded the denominator volume.',
                         'Reading "favourable" as "good". Here it is produced by making '
                         'things nobody wants.'),
          'passed': ('The bonus is earned on a number, and the number moved.', '')},
         ['produced', 'factory', 'ledger', 'unfavourable', 'missed']),

        ('part', 'Part 2 · Solving for the target', 'the numerical entry item'),

        ('task', 'Exercise 6C',
         'Solve for the production level that reaches a stated income target, as a numerical entry item.',
         'The exam asks this as a numerical entry item, with no options. Find the '
         'minimum production in units at which the plant exactly reaches the bonus '
         'threshold of %s. Show your working in the space.' % money(S3.bonus_threshold),
         ['Exercise 6A', 'Handout 4 Exercise 4F'],
         ['Write absorption income as a fixed amount plus the volume variance. Sales are given, so the fixed amount is known.', 'Standard gross margin less selling and administrative cost gives that fixed amount.', 'Then solve the variance for the output that produces it, and add the denominator volume.']),
        ('fig', 'formula', 'Solve it backwards',
         [('Target income', '$890,000', '#44506B'),
          ('\u2212', '', None),
          ('Income before the variance', 'gross margin less S&A', '#44506B'),
          ('=', '', None),
          ('Variance needed', 'then \u00f7 $15 and add 36,000', '#6D3F7E')],
         'Every solve-for-output question in this topic has this shape.'),
        ('rules', 5),

        ('tip', 'Set it up as: income = (a fixed amount) + (the volume variance). The '
                'fixed amount is standard gross margin less selling and administrative '
                'cost, because sales are given. Then solve the variance for the output '
                'that produces it.'),

        ('part', 'Part 3 · What the income statement does not show', 'the real cost'),

        ('task', 'Exercise 6D',
         'Name the costs of building unwanted stock that never appear on the income statement.',
         'Read and complete.',
         ['Exercise 6A', 'Exercise 6C'],
         ['Blank 1 is what the income rise really is, and it is not a gain.', 'Blank 2 completes a fixed phrase about cash locked up.', 'The last blank explains why the incentive exists at all.']),
        ('fig', 'scale',
         'What the bonus measure SEES',
         ['Absorption operating income rises by $225,000',
          'A favourable production volume variance of $135,000',
          'Closing inventory rises by $765,000',
          'Every figure correctly stated under GAAP'],
         'What the bonus measure IGNORES',
         ['Not one additional unit sold',
          '$540,000 of cash tied up in unsold goods',
          'About $34,425 a quarter to hold the stock',
          'Obsolescence risk carried into next year',
          'The whole increase reverses when the units are sold']),
        ('fill', 'R2',
         ['The %s rise in reported income is not a gain. It is a {transfer} of cost out '
          'of this quarter and into a later one, and it reverses the moment those units '
          'are sold or written off.' % money(S3.swing),
          'Meanwhile the decision has real costs that appear nowhere on the income '
          'statement. Building %s units consumes %s of cash in variable manufacturing '
          'cost alone, which is {working} capital the company cannot use for anything '
          'else.' % (num(S3.excess_units), money(S3.cash_tied_up)),
          'Holding them costs roughly %s for the quarter in storage, insurance and the '
          'capital charge. Every month they sit there they carry a risk of '
          '{obsolescence} if the design changes.' % money(S3.carrying_cost),
          'None of these amounts is deducted in arriving at the figure on which the '
          'bonus is {calculated}. That is the whole reason the incentive exists.'],
         {'transfer': ('Timing, not creation.', ''),
          'working': ('Cash locked in inventory.', ''),
          'obsolescence': ('Unsold stock can become worthless.', ''),
          'calculated': ('The measure ignores every cost of the behaviour it rewards.',
                         'This sentence is the answer to most Level C questions on this '
                         'topic.')},
         ['saving', 'fixed', 'spoilage', 'reported', 'gain']),

        ('fig', 'scale',
         'What the bonus measure sees',
         ['Absorption operating income rises by %s' % money(S3.swing),
          'A favourable production volume variance of %s' % money(VV_PUSH),
          'Closing inventory rises by %s'
          % money(S3.excess_units * S3.std_abs_unit),
          'Every figure correctly stated under GAAP'],
         'What the bonus measure ignores',
         ['Not one additional unit sold',
          '%s of cash tied up in unsold goods' % money(S3.cash_tied_up),
          'About %s a quarter to hold the stock' % money(S3.carrying_cost),
          'Obsolescence risk carried by next year',
          'The cost reverses when the units are finally sold']),

        ('task', 'Exercise 6E',
         'Work a multiple-select item, where three statements are true and three are designed to look true.',
         'Tick every statement that is TRUE of the decision to produce %s units. More '
         'than one is true — this is how the exam’s multiple-select items work.'
         % num(PUSH),
         ['Exercise 6A', 'Exercise 6D'],
         ['Treat each statement as a separate true-or-false question. Do not look for a pattern.', 'Statement 3 is about CASH, which the income statement does not show.', 'Statement 8 is the one most candidates miss. Think about both halves of the ratio.']),
        ('fig', 'matrix', 'Income is only one of the things that moved',
         ['Absorption income', 'Variable income', 'Cash', 'Inventory',
          'Return on investment'],
         ['Direction', 'Why'],
         [['UP $225,000', 'fixed overhead deferred into stock'],
          ['UNCHANGED', 'no extra unit was sold'],
          ['DOWN $540,000', 'materials, labour and variable overhead were paid for'],
          ['UP $765,000', '15,000 units at the $51 standard cost'],
          ['EITHER WAY', 'income rose, and so did the investment base']]),
        ('sortgrid', ['Statement', 'True', 'False'],
         ['Absorption costing operating income increases.',
          'Variable costing operating income increases.',
          'The production volume variance becomes favourable.',
          'Cash from operations increases.',
          'Closing inventory on the balance sheet increases.',
          'The accounting treatment breaches GAAP.',
          'The increase in income will reverse in a later period.',
          'Return on investment for the segment may fall even though income rises.'],
         ['True', 'False', 'True', 'False', 'True', 'False', 'True', 'True'],
         'Item 8 is the one candidates miss: income is the numerator of return on '
         'investment, but inventory is part of the investment base in the denominator, '
         'so the ratio can move either way.'),

        ('prose', 'What Ms Hourani is proposing has a name in the literature: earnings '
                  'management. The term covers any use of permitted accounting choices, '
                  'or of real operating decisions, to move reported income between '
                  'periods. Building inventory is the production-side version. Channel '
                  'stuffing — shipping goods to customers earlier than they want them in '
                  'order to pull sales forward — is the selling-side version, and the '
                  'exam often puts the two in the same question. Neither is fraud. Both '
                  'destroy goal congruence, which is the condition in which a manager '
                  'acting in their own interest is also acting in the company\u2019s. '
                  'Here the two interests point in opposite directions: the bonus rises '
                  'while the carrying cost of unsold stock, and the segment margin once '
                  'that stock is written down, both move against the company.', 'R2'),

        ('part', 'Part 4 · The ethics', 'the IMA Statement of Ethical Professional Practice'),

        ('task', 'Exercise 6F',
         'Apply the IMA Statement of Ethical Professional Practice to a decision that breaks no accounting rule.',
         'Read and complete.',
         ['Exercise 6D'],
         ['Blank 1 is what this is NOT. The accounting is correct throughout.', 'Blanks 2 and 3 are two of the four standards. Learn all four by name.', 'The last blank is the FIRST step in the resolution process, and it is not an external one.']),
        ('fig', 'buckets', 'The four standards of the IMA Statement',
         [('COMPETENCE', '2B6CB0', ['Maintain your expertise',
                                    'Perform duties in accordance with the law',
                                    'Provide decision support that is accurate']),
          ('CONFIDENTIALITY', '44506B', ['Keep information confidential',
                                         'Do not use it for personal advantage', '']),
          ('INTEGRITY', '6D3F7E', ['Avoid conflicts of interest',
                                   'Refrain from conduct that prejudices your duties',
                                   'Abstain from discrediting the profession']),
          ('CREDIBILITY', '1F7A6A', ['Communicate fairly and objectively',
                                     'Disclose all relevant information',
                                     'Disclose delays or deficiencies'])],
         'Questions give you a fact and ask which standard it engages.'),
        ('fill', 'R3',
         ['Nothing Ms Hourani proposes is unlawful and nothing misstates the accounts, '
          'so the question is not one of {fraud}. It is a question about the IMA '
          'Statement of Ethical Professional Practice, which binds the plant accountant '
          'whatever the plant manager decides.',
          'The standard of {Integrity} requires a member to refrain from conduct that '
          'would prejudice carrying out duties ethically, and to abstain from any '
          'activity that might discredit the profession.',
          'The standard of {Credibility} requires that information be communicated '
          'fairly and objectively, and that all information reasonably expected to '
          'influence an intended user’s understanding be {disclosed}.',
          'An accountant who prepares the report without drawing attention to the %s of '
          'overhead deferred by a production decision taken for its reporting effect has '
          'not met that second standard.' % money(S3.swing),
          'The resolution process in the Statement is to discuss the matter first with '
          'the immediate {supervisor}, except where that person is involved, in which '
          'case the matter goes to the next higher level.'],
         {'fraud': ('The accounting is correct. That is what makes it hard.',
                    'Treating every ethics question as a fraud question. Most CMA ethics '
                    'items are about disclosure and objectivity, not falsification.'),
          'Integrity': ('One of the four standards. Learn all four by name.', ''),
          'Credibility': ('Fair and objective communication, and full disclosure.', ''),
          'disclosed': ('Disclosure is the obligation, not refusal to prepare the report.',
                        'Answering "refuse to produce the statements". That is almost '
                        'never the correct first step.'),
          'supervisor': ('Immediate supervisor first, unless they are involved.',
                         'Going outside the organisation first. External disclosure is '
                         'the last resort, not the first.')},
         ['Competence', 'Confidentiality', 'negligence', 'concealed', 'auditor']),

        ('task', 'Exercise 6G',
         'Attach a specific fact to the specific ethical standard it engages.',
         'Match each fact with the standard it most directly engages.',
         ['Exercise 6F'],
         ['Read the four standards first, then the four facts.', 'Ask what each fact is really about: knowing, keeping quiet, behaving, or telling.', 'Only one of the four is about information leaving the company.']),
        ('fig', 'anatomy',
         'According to the IMA Statement of Ethical Professional Practice, which action '
         'should the accountant take FIRST?',
         [('take FIRST', 'the order matters; later steps are also correct actions',
           'C0483F'),
          ('the accountant', 'the member bound by the Statement, not the manager',
           '2B6CB0'),
          ('should', 'this is an obligation question, not a permission question',
           '6D3F7E')],
         'When a question says FIRST, three of the four options are usually things you '
         'may eventually do.'),
        ('match',
         ['Preparing a report that omits the effect of the production decision',
          'Accepting the bonus while knowing how the income was produced',
          'Not knowing how the volume variance works',
          'Discussing the plant’s unpublished results with a supplier'],
         ['Competence', 'Confidentiality', 'Integrity', 'Credibility'],
         ['D', 'C', 'A', 'B'],
         'The four standards are Competence, Confidentiality, Integrity and Credibility. '
         'Questions give you a fact and ask which one it engages.'),

        ('part', 'Part 5 · The cure', 'how companies remove the incentive'),

        ('task', 'Exercise 6H',
         'Match each remedy for the overproduction incentive to the mechanism by which it works.',
         'Match each remedy with what it does to the incentive.',
         ['Exercise 6D', 'Exercise 6E'],
         ['Read the five mechanisms first. Each names what it changes.', 'Two of the five remove the incentive completely. Find those two first.', 'The exam wants the mechanism, not just the name of the remedy.']),
        ('fig', 'fork', 'Four ways to break the link between production and reward',
         [('Measure the manager on variable costing income',
           'Fixed overhead never enters stock, so the incentive disappears', '#1F7A6A'),
          ('Charge the segment for capital employed',
           'The cash locked in stock becomes visible inside the measure', '#2B6CB0'),
          ('Base the bonus on units SOLD',
           'Production volume stops affecting the reward at all', '#6D3F7E'),
          ('Cap inventory as a condition of the bonus',
           'The incentive survives but its reach is limited', '#C9762E')]),
        ('match',
         ['Evaluate the manager on variable costing income',
          'Charge the segment for capital employed (residual income)',
          'Set a maximum inventory level as a condition of the bonus',
          'Base the bonus on units SOLD rather than produced',
          'Use throughput costing for internal reporting'],
         ['Removes the incentive entirely, because fixed overhead never enters inventory.',
          'Makes the cash tied up in stock visible in the measure itself.',
          'Leaves the incentive in place but caps how far it can be exploited.',
          'Breaks the link between production volume and the reward altogether.',
          'Removes the incentive and goes further, by treating labour as a period cost too.'],
         ['A', 'B', 'C', 'D', 'E'],
         'Any of these is a defensible answer to "what would you recommend". The exam '
         'wants the mechanism, not just the name.'),

        ('traps', [
            ('"income increased by $225,000"',
             'the company is better off',
             'Nothing was sold. The cost was moved to the balance sheet and will come '
             'back.'),
            ('"the production volume variance was favourable"',
             'the plant performed well',
             'It made more than the denominator volume. Here it did so deliberately, to '
             'move cost off the income statement.'),
            ('"is this permitted under GAAP?"',
             'if the answer is yes, there is no issue',
             'The accounting is correct. The IMA Statement is a separate obligation and '
             'it still binds you.'),
            ('"what should the accountant do first?"',
             'report externally or resign',
             'Discuss with the immediate supervisor, unless that person is involved. '
             'External steps come last.'),
            ('"return on investment will increase"',
             'because operating income increased',
             'Inventory is in the investment base. The denominator rises too, and the '
             'ratio can fall.'),
        ]),

        ('part', 'Part 6 · Case-Based Question', 'the 2026 format, in full'),

        ('prose', 'From the September/October 2026 window, the second part of the exam is '
                  'two case-based questions rather than essays. Each gives a short '
                  'scenario and then six or seven items in mixed formats: numerical '
                  'entry, multiple select, fill in the blank, drag and drop, and list '
                  'selection. There is no credit for explaining your reasoning. The '
                  'answer is either right or it is not. What follows is one complete case '
                  'in that shape.', None),

        ('scene', 'CASE 1 · Riverside Plant · read before answering items 1 to 7', [
            'Riverside is one of three plants operated by Grandview Instruments and is '
            'treated as an investment centre. Its manager receives an annual bonus if the '
            'plant reports absorption costing operating income of at least %s.'
            % money(S3.bonus_threshold),
            'For the fourth quarter the plant can sell %s units at $%d. Variable '
            'manufacturing cost is $%d a unit and variable selling cost is $%d a unit '
            'sold. Budgeted fixed manufacturing overhead is %s and fixed selling and '
            'administrative cost is %s. The denominator volume used to set the standard '
            'fixed overhead rate is %s units, giving a rate of $%d a unit and a standard '
            'absorption cost of $%d a unit. There is no opening inventory.'
            % (num(S3.sold), S3.price, S3.var_unit, S3.vsa, money(S3.fmoh),
               money(S3.fsa), num(S3.denominator), S3.rate, S3.std_abs_unit),
            'The original production plan was %s units. In the final week of the quarter '
            'the plant manager instructed the line to run to capacity and produce %s '
            'units. The additional units were placed in the finished goods warehouse. No '
            'customer order exists for them. Group policy requires inventory to be '
            'carried at standard absorption cost, and the plant accountant has confirmed '
            'that the proposed treatment complies with the group accounting manual and '
            'with GAAP in all respects.' % (num(PLAN), num(PUSH)),
            'The divisional controller has asked you to review the quarter before the '
            'results are consolidated.',
        ]),

        ('h3', 'Item 1 of 7 · Numerical entry'),
        ('prose', 'Calculate the production volume variance for the quarter at the '
                  'ACTUAL production level of %s units. Enter the amount in dollars and '
                  'state whether it is favourable or unfavourable.' % num(PUSH), 'R3'),
        ('rules', 3),

        ('h3', 'Item 2 of 7 · Numerical entry'),
        ('prose', 'Calculate absorption costing operating income for the quarter at the '
                  'actual production level.', 'R3'),
        ('rules', 3),

        ('h3', 'Item 3 of 7 · Numerical entry'),
        ('prose', 'Calculate variable costing operating income for the quarter.', 'R3'),
        ('rules', 3),

        ('h3', 'Item 4 of 7 · Numerical entry'),
        ('prose', 'Calculate the minimum number of units that would have had to be '
                  'produced for the plant to reach the bonus threshold exactly.', 'R3'),
        ('rules', 3),

        ('h3', 'Item 5 of 7 · Multiple select'),
        ('prose', 'Select ALL of the statements that are correct with respect to the '
                  'decision to produce %s units rather than %s.' % (num(PUSH), num(PLAN)),
         'R3'),
        ('sortgrid', ['Statement', 'Select'],
         ['The decision increases absorption costing operating income for the quarter.',
          'The decision increases variable costing operating income for the quarter.',
          'The decision increases cash generated from operations for the quarter.',
          'The additional fixed overhead deferred into inventory is %s.' % money(S3.swing),
          'The decision will reduce absorption costing operating income in a later '
          'period, all else being equal.',
          'The accounting treatment of the additional units is contrary to GAAP.'],
         ['Select', '', '', 'Select', 'Select', ''],
         'Items 1, 4 and 5 are correct. Item 3 is wrong because producing goods consumes '
         'cash; item 6 is wrong because the treatment is explicitly compliant.'),

        ('h3', 'Item 6 of 7 · Fill in the blank'),
        ('task', 'Item 6',
         'Complete a fill-in-the-blank case item, where each space is a drop-down list on the real exam.',
         'Complete the sentence from the word bank. On the real '
                            'exam each space is a drop-down list.',
         ['The case scenario above', 'Exercise 6A'],
         ['Four spaces, three possible words. One word is used twice.', 'Three of the four follow from the two income figures you have already computed.', 'The fourth is about cash, which neither income statement shows.']),
        ('fig', 'buckets', 'Four measures, three answers',
         [('HIGHER', '6D3F7E', ['absorption operating income', 'closing inventory']),
          ('UNCHANGED', '44506B', ['variable costing operating income', '']),
          ('LOWER', '1F7A6A', ['cash generated from operations', ''])],
         'Decide each one on its own. Nothing says the four answers must differ.'),
        ('fill', 'R3',
         'Compared with producing to demand, producing to capacity leaves absorption '
         'costing operating income {HIGHER}, variable costing operating income '
         '{UNCHANGED}, closing inventory {HIGHER}, and cash generated from operations '
         '{LOWER}.',
         {'HIGHER': ('Fixed overhead is deferred into inventory.', ''),
          'UNCHANGED': ('No additional units were sold.', ''),
          'LOWER': ('Cash is spent making units nobody has ordered.',
                    'Candidates mark cash UNCHANGED because the income statement did not '
                    'show the outflow.')},
         ['NIL', 'NEGATIVE', 'DEFERRED']),

        ('h3', 'Item 7 of 7 · List selection'),
        ('prose', 'The plant accountant has concluded that the quarterly report, as '
                  'drafted, does not draw attention to the effect of the production '
                  'decision. According to the IMA Statement of Ethical Professional '
                  'Practice, which action should the accountant take FIRST?', 'R3'),
        ('mcq', 'Which action should the accountant take FIRST?',
         ['Report the matter to the external auditors.',
          'Discuss the matter with the plant manager’s immediate supervisor.',
          'Decline to prepare the quarterly report.',
          'Add a note to the report and issue it without further discussion.'],
         1, 'Level C',
         'The Statement directs a member to raise the matter with the immediate '
         'supervisor, and where that person is involved — as the plant manager is here — '
         'with the next higher managerial level. External steps and refusal to act are '
         'last resorts, not first ones. (D) fails because the matter needs to be '
         'discussed, not merely footnoted.'),

        ('part', 'Part 7 · Mixed exam practice', 'Levels B and C'),

        ('mcq', 'A manager whose bonus depends on absorption costing operating income '
                'can increase reported income at the end of a period by:',
         ['Reducing the selling price to increase volume.',
          'Producing more units than are sold.',
          'Reducing fixed manufacturing overhead spending.',
          'Switching to variable costing for internal reports.'],
         1, 'Level B',
         '(C) genuinely improves results but is hard and real; (B) requires nothing but '
         'an instruction to the production line. (A) would reduce income per unit and '
         '(D) would remove the effect the manager wants.'),

        ('mcq', 'Which performance measure is LEAST likely to encourage a manager to '
                'build unnecessary inventory?',
         ['Absorption costing operating income.',
          'Gross margin percentage.',
          'Variable costing operating income.',
          'Return on sales based on absorption costing.'],
         2, 'Level B',
         'Variable costing income is unaffected by production volume because fixed '
         'overhead never enters inventory. All three others are built on absorption '
         'figures.'),

        ('mcq', 'A segment increased production above sales and reported higher '
                'absorption costing operating income. The effect on the segment’s '
                'return on investment, where the investment base includes inventory, is:',
         ['An increase, because income rose.',
          'A decrease, because the investment base rose.',
          'Indeterminate, because both the numerator and the denominator rose.',
          'No effect, because inventory is excluded from the investment base.'],
         2, 'Level C',
         'Both parts of the ratio move upwards, so the direction depends on their '
         'relative size. This is the single most common Level C variation on this topic.'),

        ('mcq', 'Residual income is sometimes preferred to absorption operating income '
                'for evaluating a plant manager because residual income:',
         ['Excludes fixed manufacturing overhead entirely.',
          'Charges the segment for the capital tied up in inventory.',
          'Is required by GAAP for segment reporting.',
          'Is unaffected by changes in selling prices.'],
         1, 'Level B',
         'A capital charge makes the cash locked up in unwanted stock visible inside the '
         'measure, which is exactly what the absorption income measure fails to do.'),

        ('mcq', 'Under the IMA Statement of Ethical Professional Practice, which standard '
                'is MOST directly engaged by issuing a report that omits information a '
                'user would reasonably need to understand the result?',
         ['Competence.', 'Confidentiality.', 'Integrity.', 'Credibility.'],
         3, 'Level B',
         'Credibility covers communicating information fairly and objectively and '
         'disclosing all relevant information. Integrity is engaged too, but Credibility '
         'is the standard that speaks directly about disclosure.'),

        ('mcq', 'A company produced 45,000 units against a denominator volume of 36,000 '
                'and sold 30,000 units. Which of the following is the amount of fixed '
                'manufacturing overhead remaining in closing inventory, at a standard '
                'rate of $15 per unit?',
         ['$135,000.', '$225,000.', '$540,000.', '$675,000.'],
         1, 'Level B',
         '15,000 units unsold × $15 = $225,000. Option (A) is the volume variance '
         '(9,000 × $15) and (D) is total applied overhead — both offered because they '
         'are computed from the same three numbers.'),

        ('mcq', 'Which of the following statements best describes the overproduction '
                'incentive created by absorption costing?',
         ['It arises because absorption costing overstates total costs.',
          'It arises because fixed overhead attaches to units and therefore leaves the '
          'income statement when units are unsold.',
          'It arises because variable costs are understated in inventory.',
          'It arises only when a company is loss-making.'],
         1, 'Level C',
         'The mechanism is the deferral of fixed overhead into an asset. (A) is wrong '
         'because total cost over time is identical under both methods, and (D) is wrong '
         'because the incentive exists at any level of profit.'),

        ('tip', 'This is the end of Set D1. Before you move on, go back to Exercise 3E '
                'and read your own completed paragraph aloud. If every blank in it still '
                'makes sense to you without the key, you know this topic to the depth the '
                'exam tests. If any blank has gone blank again, that is the sentence to '
                'rewrite tonight.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6A · the two options'),
        ('table', ['', 'Produce %s (to demand)' % num(PLAN),
                   'Produce %s (to capacity)' % num(PUSH)],
         [['Units produced', num(PLAN), num(PUSH)],
          ['Units sold', num(S3.sold), num(S3.sold)],
          ['Change in inventory (units)', 'nil', '+%s' % num(S3.excess_units)],
          ['Standard gross margin (units sold × $%d)' % (S3.price - S3.std_abs_unit),
           money((S3.price - S3.std_abs_unit) * S3.sold),
           money((S3.price - S3.std_abs_unit) * S3.sold)],
          ['Production volume variance',
           '(%s) U' % money(abs(VV_PLAN)), '%s F' % money(VV_PUSH)],
          ['less Selling and administrative',
           money(S3.vsa * S3.sold + S3.fsa), money(S3.vsa * S3.sold + S3.fsa)],
          ['ABSORPTION operating income', money(OI_PLAN), money(OI_PUSH)],
          ['VARIABLE costing operating income', money(OI_VAR), money(OI_VAR)],
          ['Bonus earned?', 'No', 'Yes']], '6D3F7E', [34, 33, 33]),
        ('prose', 'Note the first column carefully: production equals sales, so '
                  'absorption and variable income are IDENTICAL at %s — even though there '
                  'is a %s unfavourable volume variance. A volume variance does not by '
                  'itself make the two methods differ. Only a change in inventory does.'
                  % (money(OI_PLAN), money(abs(VV_PLAN)))),
        ('h3', 'Exercise 6C and Case Item 4 · the minimum production level'),
        ('bullets', [
            'Standard gross margin on %s units sold = %s units × $%d = %s'
            % (num(S3.sold), num(S3.sold), S3.price - S3.std_abs_unit,
               money((S3.price - S3.std_abs_unit) * S3.sold)),
            'less selling and administrative = %s' % money(S3.vsa * S3.sold + S3.fsa),
            'Income before the volume variance = %s'
            % money((S3.price - S3.std_abs_unit) * S3.sold - (S3.vsa * S3.sold + S3.fsa)),
            'Volume variance needed to reach %s = %s'
            % (money(S3.bonus_threshold),
               money(S3.bonus_threshold -
                     ((S3.price - S3.std_abs_unit) * S3.sold - (S3.vsa * S3.sold + S3.fsa)))),
            'Units above the denominator = that variance ÷ $%d = %s units'
            % (S3.rate, num(MIN_PROD - S3.denominator)),
            'Minimum production = %s + %s = %s units'
            % (num(S3.denominator), num(MIN_PROD - S3.denominator), num(MIN_PROD)),
        ]),
        ('h3', 'Case 1 · items 1 to 4'),
        ('table', ['Item', 'Answer', 'Working'],
         [['1', '%s favourable' % money(VV_PUSH),
           '(%s − %s) × $%d' % (num(PUSH), num(S3.denominator), S3.rate)],
          ['2', money(OI_PUSH),
           'Standard gross margin %s + variance %s − S&A %s'
           % (money((S3.price - S3.std_abs_unit) * S3.sold), money(VV_PUSH),
              money(S3.vsa * S3.sold + S3.fsa))],
          ['3', money(OI_VAR),
           'Contribution %s − fixed %s'
           % (money((S3.price - S3.var_unit - S3.vsa) * S3.sold),
              money(S3.fmoh + S3.fsa))],
          ['4', '%s units' % num(MIN_PROD), 'See the working above']],
         '353A7C', [8, 28, 64]),
        ('h3', 'Case 1 · item 5, multiple select'),
        ('bullets', [
            'CORRECT: the decision increases absorption costing operating income.',
            'CORRECT: the additional fixed overhead deferred into inventory is %s.'
            % money(S3.swing),
            'CORRECT: the increase will reverse in a later period.',
            'Not correct: variable costing income is unchanged, because no extra unit '
            'was sold.',
            'Not correct: cash FALLS, because producing goods consumes materials, '
            'labour and variable overhead.',
            'Not correct: the stem states the treatment complies with GAAP.',
        ]),
        ('prose', 'A multiple-select item gives no partial credit on the 2026 exam. '
                  'Three correct and one wrong scores the same as nothing. Check each '
                  'statement separately and resist the pull of a plausible fourth.'),
    ],
)
