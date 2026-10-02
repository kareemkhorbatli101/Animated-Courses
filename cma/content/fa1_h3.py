# -*- coding: utf-8 -*-
"""Volume 1, Handout 3 — The Income Statement: From Revenue Down to Net Income.

Covers A.1(c) for the income statement and the statement of comprehensive
income: their major components and classifications.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'


def _is(blank=False):
    """Northwind's income statement, multi-step. Every figure derived."""
    def m(v):
        return None if blank else money(v)
    return [
        ('Revenue', 0, m(N.sales), ''),
        ('Cost of goods sold', 0, m(-N.cogs), ''),
        ('Gross margin', 0, m(N.gross_margin), 't'),
        ('Operating expenses', 1, None, 'b'),
        ('Selling expenses', 2, m(N.selling), ''),
        ('Administrative expenses', 2, m(N.admin), ''),
        ('Depreciation and amortisation', 2, m(N.dep_amort), ''),
        ('Total operating expenses', 1, m(N.opex), 't'),
        ('Operating income', 0, m(N.operating_income), 't'),
        ('Non-operating items', 1, None, 'b'),
        ('Interest expense', 2, m(-N.interest), ''),
        ('Gain on disposal of equipment', 2, m(N.gain_disposal), ''),
        ('Income before income taxes', 0, m(N.pretax), 't'),
        ('Income tax expense', 1, m(-N.tax), ''),
        ('Net income', 0, m(N.net_income), 't'),
    ]


def _ci(blank=False):
    def m(v):
        return None if blank else money(v)
    return [
        ('Net income', 0, m(N.net_income), 'b'),
        ('Other comprehensive income, net of tax', 1, None, 'b'),
        ('Unrealised gain on available-for-sale debt securities', 2,
         m(N.afs_gain_pretax), ''),
        ('Less the related income tax', 2, m(-N.deferred_tax_oci), ''),
        ('Other comprehensive income for the year', 1, m(N.oci), 'r'),
        ('Comprehensive income', 0, m(N.comprehensive_income), 't'),
    ]


HANDOUT = dict(
    n=3,
    title='The Income Statement: From Revenue Down to Net Income',
    subtitle='One statement, four subtotals. Each subtotal answers a different '
             'question, and the exam asks which one you are being shown.',
    register='R1 for the structure, R2 for the subtotals',

    lang=dict(
        register='R1 while the lines are introduced, R2 once the subtotals start '
                 'carrying meaning. Read each subtotal name aloud.',
        collocations=['recognise revenue', 'incur an expense',
                      'report a gain on disposal', 'arrive at operating income',
                      'bypass net income', 'present net of tax'],
        pairs=['revenue / gain', 'expense / loss',
               'gross margin / operating income', 'net income / comprehensive income'],
        nots=['Revenue is not the same as a gain. Revenue comes from what the '
              'company is in business to do; a gain comes from everything else.',
              'Operating income is not profit before tax. Interest sits between '
              'them, and the exam uses that gap.'],
    ),

    objectives=[
        'Name the four subtotals of a multi-step income statement and say what '
        'each one tells a reader.',
        'Distinguish revenue from a gain, and an expense from a loss.',
        'Build Northwind’s income statement from its component lines.',
        'Explain what other comprehensive income is and why it bypasses net '
        'income.',
        'Say why operating income is the subtotal an analyst looks at first.',
    ],

    terms=[
        ('revenue',
         'Income arising from the activities the company is in business to carry '
         'on.', 'الإيرادات',
         'The ordinary activities test is what separates revenue from a gain. A '
         'component distributor earns revenue by selling components.'),
        ('gain',
         'An increase in economic benefit from something outside the ordinary '
         'activities.', 'المكاسب',
         'Northwind sells equipment and records a gain. It does not record '
         'revenue, because selling equipment is not its business.'),
        ('gross margin',
         'Revenue less the cost of the goods sold.', 'مجمل الربح',
         'Also called gross profit. It measures the spread on the product alone, '
         'before any cost of running the company.'),
        ('operating income',
         'Gross margin less the operating expenses of running the business.',
         'الدخل التشغيلي',
         'It stops before interest and before tax, deliberately: it is meant to be '
         'readable without knowing how the company is financed.'),
        ('multi-step income statement',
         'An income statement that reports intermediate subtotals.',
         'قائمة دخل متعددة الخطوات',
         'The alternative is the single-step form, which lists all income then all '
         'expenses and reports only net income.'),
        ('net of tax',
         'Presented after deducting the income tax that relates to the item.',
         'بعد خصم الضريبة',
         'Other comprehensive income items are shown net of tax, which is why '
         'Northwind’s %s pre-tax gain is reported as %s.'
         % (money(N.afs_gain_pretax), money(N.oci))),
    ],

    blocks=[
        ('scene', 'The film, not the photograph', [
            'Handout 2 took a photograph of Northwind at one date. This handout '
            'covers the whole of %s: everything that happened between the two '
            'photographs.' % Y,
            'Northwind’s income statement is presented in the multi-step form, '
            'which means it reports subtotals along the way rather than jumping '
            'from total income to net income in one move.',
            'There are four of those subtotals. Each one answers a different '
            'question, and a reader who knows which subtotal they are looking at '
            'knows what has already been deducted and what has not.',
        ]),
        ('fig', 'ranked', 'The four subtotals, each smaller than the last',
         [('Revenue', N.sales, money(N.sales), SLATE),
          ('Gross margin', N.gross_margin, money(N.gross_margin), IS),
          ('Operating income', N.operating_income, money(N.operating_income), SCF),
          ('Income before income taxes', N.pretax, money(N.pretax), BS),
          ('Net income', N.net_income, money(N.net_income), SCE)],
         'Each step down removes one more category of cost. Name the category and '
         'you have named the subtotal.',
         '%s · year ended 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · Revenue or gain?', 'the ordinary activities test'),

        ('task', 'Exercise 3A',
         'Separate revenue from a gain, and an expense from a loss.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for what the income statement is for.'],
         ['The test is in the first sentence. Apply it, do not guess from the size '
          'of the amount.',
          'Blank 3 is what Northwind is actually in business to do.',
          'Blanks 4 and 5 are a matched pair: one is the word used when the amount '
          'is positive, the other when it is negative.']),
        ('fill', 'R1',
         ['Not every increase in wealth is revenue. The test is whether it arose '
          'from the activities the company is in business to carry on, which the '
          'standards call its {ordinary} activities.',
          'Northwind sold %s of components during the year. That is revenue, '
          'because selling {components} is what the company does.' % money(N.sales),
          'In the same year it sold a used delivery van for %s more than the van '
          'stood at in the books. That %s is not revenue. Northwind is not in the '
          'business of selling vans, so the amount is reported as a {gain}.'
          % (money(N.gain_disposal), money(N.gain_disposal)),
          'The same test runs the other way. A cost incurred in carrying on '
          'ordinary activities is an expense. A decrease arising outside them is a '
          '{loss}. The exam tests this by putting a large gain high up the '
          'statement where revenue belongs, and seeing whether you move it.'],
         {'ordinary': ('The standards’ own phrase. Learn it.', ''),
          'components': ('The company’s actual business.', ''),
          'gain': ('Outside ordinary activities, so not revenue.',
                   'Students add disposal proceeds to revenue, which inflates both '
                   'revenue and gross margin and ruins every margin ratio.'),
          'loss': ('The mirror image of a gain.', '')},
         ['profit', 'expense', 'turnover']),
        ('fig', 'fork', 'Revenue or gain? One question decides it',
         [('Did the amount arise from what the company is in business to do?',
           'YES → REVENUE, reported at the top of the statement', IS),
          ('Did it arise from anything else?',
           'NO → GAIN, reported below operating income', SCF),
          ('Why does the position matter?',
           'A gain in the revenue line inflates every margin ratio', RUST)]),

        ('part', 'Part 2 · The four subtotals', 'what each one has removed'),

        ('task', 'Exercise 3B',
         'Say what has been deducted by the time each subtotal is reached.',
         'Read and complete.',
         ['Exercise 3A'],
         ['Work down the statement as you read. Each paragraph is one step lower '
          'than the one before it.',
          'Blank 2 names the cost that gross margin has already removed.',
          'Blank 4 is the item that sits between operating income and pre-tax '
          'income, and it is about how the company is financed, not how it '
          'trades.']),
        ('fill', 'R2',
         ['The first subtotal is gross {margin}: revenue less the cost of goods '
          'sold. Nothing else has been deducted. It measures the spread on the '
          'product itself, which is why a distributor watches it closely.',
          'The second is operating income. Gross margin less the {operating} '
          'expenses of running the company — selling, administrative, '
          'depreciation and amortisation. At this point everything the business '
          'does has been charged, but nothing about how it is financed or taxed.',
          'The third is income before income taxes. Operating income is adjusted '
          'for items outside the trade, and the largest of these for Northwind is '
          '{interest} expense, which depends on how much the company has borrowed '
          'rather than on how well it trades.',
          'The fourth is net {income}, after income tax expense. This is the figure '
          'that will be carried into the statement of changes in equity and added '
          'to retained earnings.'],
         {'margin': ('Revenue less cost of goods sold, and nothing more.', ''),
          'operating': ('The costs of running the business, not of financing it.',
                        ''),
          'interest': ('Financing, not trading. That is why it sits below operating '
                       'income.',
                       'Students treat operating income and pre-tax income as the '
                       'same figure. Interest is the gap, and the exam uses it.'),
          'income': ('The figure that reaches retained earnings.', '')},
         ['revenue', 'selling', 'dividend']),
        ('fig', 'bridge',
         'Revenue', N.sales,
         [('Cost of goods sold', -N.cogs),
          ('Operating expenses', -N.opex),
          ('Interest expense', -N.interest),
          ('Gain on disposal', N.gain_disposal),
          ('Income tax expense', -N.tax)],
         'Net income', N.net_income),

        ('task', 'Exercise 3C',
         'Decide which subtotal answers a given question about the business.',
         'Sort each question into the column of the subtotal that answers it.',
         ['Exercise 3B'],
         ['Ask what the question is about: the product, the business, or the '
          'shareholder.',
          'A question about borrowing is never answered by operating income.',
          'One question is about the product spread alone.']),
        ('sortgrid',
         ['What a reader wants to know', 'GROSS MARGIN', 'OPERATING INCOME',
          'NET INCOME'],
         ['Is the mark-up on the components we sell holding up?',
          'Is the business profitable before we think about the bank?',
          'What is available to shareholders this year?',
          'Did our selling and administrative costs grow faster than sales?',
          'How much did the tax charge reduce the result?',
          'Are we buying components at a worse price than last year?'],
         ['GROSS MARGIN', 'OPERATING INCOME', 'NET INCOME', 'OPERATING INCOME',
          'NET INCOME', 'GROSS MARGIN'],
         'Gross margin is about the product. Operating income is about the '
         'business. Net income is about the shareholder.'),
        ('fig', 'matrix', 'Which subtotal answers which reader',
         ['Gross margin', 'Operating income', 'Net income'],
         ['What it is about', 'What it ignores'],
         [['The spread on the product', 'Every cost of running the company'],
          ['The business as a whole', 'How the company is financed, and tax'],
          ['The shareholder’s result', 'Nothing — all costs charged']],
         'Read the right-hand column first. What a subtotal ignores is what makes '
         'it useful.'),

        ('part', 'Part 3 · Build it', 'the statement with the figures removed'),

        ('task', 'Exercise 3D',
         'Build Northwind’s income statement and arrive at net income.',
         'Write the figures into the blank statement. Do not look at the key until '
         'you have reached the bottom.',
         ['Exercises 3A, 3B and 3C'],
         ['Deductions are written in brackets, as the statement does elsewhere.',
          'Each subtotal is the line above it adjusted by the lines indented under '
          'it. Work down, not up.',
          'Income tax expense is 25%% of income before income taxes. If your '
          'pre-tax figure is right, the tax figure follows from it.']),
        ('stmt', '%s · Income Statement for the year ended 31 December %s'
                 % (N.name, Y), _is(blank=True), IS),
        ('fig', 'ranked', 'What each layer of cost takes out',
         [('Cost of goods sold', N.cogs, money(N.cogs), RUST),
          ('Selling expenses', N.selling, money(N.selling), SCF),
          ('Administrative expenses', N.admin, money(N.admin), SCF),
          ('Depreciation and amortisation', N.dep_amort, money(N.dep_amort), SCF),
          ('Interest expense', N.interest, money(N.interest), SLATE),
          ('Income tax expense', N.tax, money(N.tax), SLATE)],
         'Rust: the cost of the product. Amber: the cost of running the business. '
         'Navy: the cost of financing and of tax.',
         'Revenue %s less all of these leaves %s'
         % (money(N.sales), money(N.net_income))),

        ('part', 'Part 4 · The income that is not net income',
         'other comprehensive income'),

        ('prose', 'Net income is not the whole of a year’s result. A short, '
                  'closed list of gains and losses is kept out of net income by the '
                  'rules and taken straight to equity instead. The list is not a '
                  'matter of judgement: an item is either on it or it is not.',
                  'R2'),
        ('prose', 'Northwind has one such item. It holds debt securities classified '
                  'as available for sale, and those securities rose in value by %s '
                  'during the year. Because the company has not sold them, the gain '
                  'is unrealised, and the rules route it through other '
                  'comprehensive income rather than through net income.'
                  % money(N.afs_gain_pretax), 'R2'),

        ('task', 'Exercise 3E',
         'Explain what other comprehensive income is and why it bypasses net '
         'income.',
         'Read and complete.',
         ['Exercise 3D, and the two paragraphs above.'],
         ['Blank 1 is the word for a gain on something the company still owns.',
          'Blank 3 is the balance sheet line the amounts pile up in, which you met '
          'in Handout 2.',
          'The last blank is the phrase that explains why the reported figure is '
          'smaller than the gain itself.']),
        ('fill', 'R2',
         ['The gain on Northwind’s debt securities has not been turned into '
          'cash. The company still holds the securities, so the gain is '
          '{unrealised}, and reporting it in net income would put a figure in the '
          'result that no transaction has yet confirmed.',
          'The rules therefore take it to other {comprehensive} income instead. It '
          'is still part of the year’s result, and it is still presented in '
          'the statement, but it sits below net income rather than inside it.',
          'From there the amount accumulates on the balance sheet, in the line '
          'called {accumulated} other comprehensive income, which rose from %s to '
          '%s during the year.' % (money(N.aoci_py), money(N.aoci)),
          'One detail of presentation catches people. Items of other comprehensive '
          'income are presented {net} of tax, so the %s gain appears as %s after '
          'the related tax of %s has been deducted.'
          % (money(N.afs_gain_pretax), money(N.oci),
             money(N.deferred_tax_oci))],
         {'unrealised': ('Still held, so no transaction has confirmed it.', ''),
          'comprehensive': ('The second half of the year’s result.', ''),
          'accumulated': ('The balance sheet line from Handout 2.', ''),
          'net': ('Net of tax, which is why the reported figure is smaller.',
                  'Students report the pre-tax gain, and the accumulated '
                  'balance then fails to close.')},
         ['realised', 'operating', 'gross']),
        ('stmt', '%s · Statement of Comprehensive Income for the year ended '
                 '31 December %s' % (N.name, Y), _ci(), SCE),
        ('fig', 'bridge',
         'Net income', N.net_income,
         [('Unrealised gain on available-for-sale securities', N.afs_gain_pretax),
          ('Less the related income tax', -N.deferred_tax_oci)],
         'Comprehensive income', N.comprehensive_income),

        ('watch', 'Comprehensive income is the wider figure and net income is the '
                  'narrower one. Only net income reaches retained earnings. Other '
                  'comprehensive income goes to its own equity line, and Handout 4 '
                  'shows both arriving.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Northwind sells a used delivery van for %s more than its carrying '
                'amount. How should this be reported?' % money(N.gain_disposal),
         ['As revenue, because cash was received from a sale',
          'As a gain, reported below operating income',
          'As a reduction of cost of goods sold',
          'As other comprehensive income, because the van was a long-lived asset'],
         1, 'Level B',
         'Selling vans is not Northwind’s ordinary activity, so the amount is '
         'a gain, not revenue, and it is reported below operating income. (A) '
         'inflates revenue and every margin ratio built on it. (C) has no basis. '
         '(D) is wrong: a realised disposal gain goes through net income.'),

        ('mcq', 'Which subtotal is unaffected by a company’s decision to '
                'finance itself with debt rather than equity?',
         ['Net income', 'Income before income taxes', 'Operating income',
          'Comprehensive income'],
         2, 'Level C',
         'Interest expense is deducted below operating income, so operating income '
         'is the same however the company is financed — which is exactly why '
         'analysts compare it across companies. The other three are all reached '
         'after interest has been charged.'),

        ('mcq', 'Northwind reports revenue of %s and cost of goods sold of %s. '
                'Gross margin is:' % (money(N.sales), money(N.cogs)),
         [money(N.gross_margin), money(N.operating_income), money(N.pretax),
          money(N.net_income)],
         0, 'Level A',
         '%s − %s = %s. (B) has also deducted operating expenses, (C) '
         'interest and the disposal gain as well, and (D) income tax on top. Each '
         'wrong answer is a real subtotal one step too far down.'
         % (money(N.sales), money(N.cogs), money(N.gross_margin))),

        ('mcq', 'An unrealised gain on debt securities classified as available for '
                'sale is reported:',
         ['In net income, because it is a gain',
          'In other comprehensive income, net of tax',
          'As a direct addition to retained earnings',
          'Only in the notes, until the securities are sold'],
         1, 'Level B',
         'Available-for-sale unrealised gains are one of the closed list of items '
         'routed to other comprehensive income, presented net of tax. (A) would put '
         'an unconfirmed figure in net income. (C) confuses the two equity lines: '
         'retained earnings receives net income only. (D) is not permitted — '
         'the item is recognised, not merely disclosed.'),

        ('mcq', 'A company presents all income items, then all expense items, and '
                'reports only one profit figure. This presentation is:',
         ['A multi-step income statement', 'A single-step income statement',
          'A statement of comprehensive income', 'Not permitted'],
         1, 'Level A',
         'The single-step form reports no intermediate subtotals. Northwind uses '
         'the multi-step form, which reports gross margin and operating income on '
         'the way down. (C) is a different statement. (D) is wrong: both forms are '
         'acceptable.'),

        ('mcq', 'Northwind’s net income is %s and its other comprehensive '
                'income for the year is %s. Comprehensive income is:'
                % (money(N.net_income), money(N.oci)),
         [money(N.net_income), money(N.oci), money(N.comprehensive_income),
          money(N.net_income - N.oci)],
         2, 'Level A',
         '%s + %s = %s. (A) omits the other comprehensive income entirely. (B) is '
         'that item alone. (D) deducts what should be added — a slip worth '
         'guarding against when the item is a gain.'
         % (money(N.net_income), money(N.oci), money(N.comprehensive_income))),

        ('mcq', 'An analyst notices that a distributor’s gross margin '
                'percentage has fallen while its operating income percentage has '
                'risen. The most likely explanation is that:',
         ['Interest expense fell during the year',
          'Buying prices rose, but selling and administrative costs were cut by '
          'more',
          'The company recorded a large gain on disposal',
          'The income tax rate fell'],
         1, 'Level C',
         'Gross margin falls when the product spread narrows; operating income can '
         'still rise if the costs charged below gross margin fall by more. (A) and '
         '(D) sit below operating income and cannot move it. (C) is also reported '
         'below operating income, so it affects neither percentage.'),

        ('tip', 'When a question gives you a subtotal, write down what has already '
                'been deducted to reach it before you do anything else. Half the '
                'income statement questions in Section A are testing whether you '
                'know which costs are above the line you have been handed.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3D · the completed income statement'),
        ('stmt', '%s · Income Statement for the year ended 31 December %s'
                 % (N.name, Y), _is(), IS),
        ('h3', 'The four subtotals, and what each has removed'),
        ('table', ['Subtotal', 'Amount', 'What has been deducted by this point'],
         [['Gross margin', money(N.gross_margin), 'Cost of goods sold only'],
          ['Operating income', money(N.operating_income),
           'Plus selling, administrative, depreciation and amortisation'],
          ['Income before income taxes', money(N.pretax),
           'Plus interest expense, less the gain on disposal'],
          ['Net income', money(N.net_income), 'Plus income tax expense'],
          ['Comprehensive income', money(N.comprehensive_income),
           'Net income plus other comprehensive income of %s' % money(N.oci)]],
         IS, [26, 18, 56]),
    ],
)
