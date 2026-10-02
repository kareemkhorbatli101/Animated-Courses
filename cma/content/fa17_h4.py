# -*- coding: utf-8 -*-
"""Volume 17, Handout 4 — Earnings Quality: What the Numbers Do Not Say.

Covers CMA Part 2 A.4(b), (d) and (e): inflation, book against market value,
accounting against economic profit, and the determinants of earnings
quality. The last handout of seventeen.
"""
from fadata import N, I, CH, Y
from data import money, num

PRIN, EST, SLATE, ERR = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'


def _pc(x):
    return num(x * 100, 0) + '%'


_QUALH = ['Indicator', 'Higher quality earnings', 'Lower quality earnings']
_QUALW = [26, 37, 37]


def _qual(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Cash backing', c('Operating cash flow tracks profit'),
         c('Profit rises while operating cash flow does not')],
        ['Source', c('Recurring operations'),
         c('Gains, disposals and one-off items')],
        ['Estimates', c('Conservative, and consistently applied'),
         c('Revised in whichever direction helps')],
        ['Accruals', c('Small relative to cash flow'),
         c('Large and growing')],
        ['Disclosure', c('Clear enough to recompute the figures'),
         c('Opaque, and changes are hard to trace')],
    ]


_VALH = ['', 'Book value', 'Market value']
_VALW = [30, 35, 35]


def _val(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['What it measures', c('Historical cost less what has been used up'),
         c('What buyers and sellers agree today')],
        ['Northwind’s equity', money(N.equity),
         c('Whatever the shares fetch')],
        ['Includes internally generated intangibles', c('No'), c('Yes')],
        ['Changes when nothing happens', c('No'), c('Yes, daily')],
        ['Audited', c('Yes'), c('No')],
    ]


HANDOUT = dict(
    n=4,
    title='Earnings Quality: What the Numbers Do Not Say',
    subtitle='Seventeen volumes of measurement, and one handout on how much to '
             'trust it. Northwind’s %s of profit is a fact about an accounting '
             'system before it is a fact about a business.'
             % money(N.net_income),
    register='R3',

    lang=dict(
        register='R3 throughout. This is the exam’s own register, and by the '
                 'last handout of the last volume the student should be '
                 'reading it without help.',
        collocations=['assess the quality of reported earnings',
                      'manage earnings within the rules',
                      'reconcile profit to operating cash flow',
                      'distinguish accounting profit from economic profit',
                      'adjust ratios for inflation',
                      'read the accounting policies before the figures'],
        pairs=['accounting profit / economic profit',
               'book value / market value',
               'earnings quality / earnings management',
               'cash / accruals'],
        nots=['Low earnings quality does not mean the figures break the '
              'rules. Most of what the phrase describes is entirely '
              'permitted.',
              'Book value is not an estimate of market value and was never '
              'intended to be.'],
    ),

    objectives=[
        'Say what earnings quality means and what signals it.',
        'Distinguish accounting profit from economic profit.',
        'Distinguish book value from market value.',
        'Say what inflation does to the reliability of a ratio.',
        'Identify the indicators of earnings management.',
    ],

    terms=[
        ('earnings quality',
         'The degree to which reported earnings represent sustainable '
         'performance and are backed by cash.',
         'جودة الأرباح',
         'A judgement, not a measurement. The exam asks for its determinants '
         'rather than a number.'),
        ('earnings management',
         'The use of accounting choices and estimates to produce a desired '
         'reported result.', 'إدارة الأرباح',
         'Mostly legal, which is what makes it hard. Every volume in this '
         'course offered choices a management could use this way.'),
        ('economic profit',
         'The return after charging for all capital employed, including '
         'equity.', 'الربح الاقتصادي',
         'Accounting profit charges for debt and not for equity, so a company '
         'can report a profit and destroy value.'),
        ('book value',
         'The carrying amount of equity in the accounts: assets less '
         'liabilities as measured by the standards.',
         'القيمة الدفترية',
         'Historical cost less what has been consumed. It omits everything a '
         'company built rather than bought.'),
        ('market value',
         'What a company’s equity trades for.', 'القيمة السوقية',
         'Includes the intangibles the accounts exclude, and the market’s view '
         'of the future. It moves when nothing has happened.'),
    ],

    blocks=[
        ('scene', 'The last question, after sixteen volumes of answers', [
            'This course has measured a great deal. Revenue, inventory, '
            'depreciation, impairment, deferred tax, leases, pensions, '
            'consolidation and translation, all of it to the dollar.',
            'Northwind earned %s. Every figure behind that number has been '
            'derived, checked and tied back to the statements it came from.'
            % money(N.net_income),
            'This handout asks the question none of that answers. How much of '
            'that %s is a fact about the business, and how much is a fact '
            'about the choices made in measuring it?'
            % money(N.net_income),
            'The CMA asks it too, at Part 2 A.4, and it is the right place to '
            'finish.',
        ]),
        ('fig', 'scale',
         'WHAT THE COURSE MEASURED',
         ['Revenue of %s' % money(N.sales),
          'Profit of %s' % money(N.net_income),
          'Total assets of %s' % money(N.total_assets),
          'Every figure derived and checked'],
         'WHAT IT DID NOT',
         ['Whether the profit will recur',
          'Whether it is backed by cash',
          'Whether the estimates were cautious',
          'Whether equity earned its cost']),

        ('part', 'Part 1 · Profit against cash',
         'the first and best signal'),

        ('task', 'Exercise 4A',
         'Say what distinguishes high quality earnings from low.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 8, on the statement of cash flows.',
          'Volume 9 Handout 1, on how expenses are recognised.'],
         ['Profit is measured on the accrual basis and cash is not. Ask what '
          'it means when the two diverge year after year.',
          'Northwind reported %s of profit and %s of operating cash flow, '
          'which is the comfortable case.'
          % (money(N.net_income), money(708_000)),
          'The last blank is the kind of profit that tells a reader least '
          'about next year.']),
        ('fill', 'R3',
         ['Earnings quality is the degree to which a reported profit '
          'represents performance that will {recur} and is backed by cash. It '
          'is a judgement about a number, not another number.',
          'The first signal is the relationship between profit and operating '
          '{cash} flow. Northwind reported %s of profit and %s of operating '
          'cash flow, and a company whose profit rises for three years while '
          'its operating cash flow does not is telling a reader something.'
          % (money(N.net_income), money(708_000)),
          'The gap between the two is the accruals, and every one of them is a '
          'judgement this course has taught: the allowance for credit losses, '
          'the warranty provision, the useful lives, the impairment tests. '
          'Large and growing {accruals} are the classic warning.',
          'The second signal is the source. A profit made from recurring '
          'operations tells a reader about next year; one made from a disposal '
          'or a one-off {gain} tells them about last Tuesday.'],
         {'recur': ('Sustainable, not one-off.', ''),
          'cash': ('The measure with no estimates in it.', ''),
          'accruals': ('Every one of them a judgement.',
                       'Students read accruals as a technicality. They are '
                       'where every estimate in sixteen volumes ends up.'),
          'gain': ('Peripheral, as Volume 9 defined it.', '')},
         ['improve', 'profit', 'expense']),
        ('fig', 'buckets', 'Five signals a reader can check',
         [('HIGHER QUALITY', OK,
           ['Profit tracked by operating cash flow',
            'Earned from recurring operations',
            'Estimates consistently applied']),
          ('LOWER QUALITY', RUST,
           ['Profit rising while cash flow does not',
            'Gains and disposals doing the work',
            'Estimates revised in a helpful direction']),
          ('WHERE TO LOOK', SLATE,
           ['The cash flow statement, first',
            'The accounting policies note',
            'The year-on-year changes in estimates'])],
         'Every item in the second column is permitted. That is what makes '
         'earnings quality a question of judgement rather than compliance.'),

        ('part', 'Part 2 · Two kinds of profit',
         'accounting and economic'),

        ('task', 'Exercise 4B',
         'Distinguish accounting profit from economic profit.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 4A, and Volume 14 Handout 5 on debt against equity '
          'finance.'],
         ['Northwind charged %s of interest on its debt. Ask whether it '
          'charged anything for the %s of equity.'
          % (money(N.interest), money(N.equity)),
          'Equity is not free. Its providers could have invested elsewhere and '
          'they expect a return for the risk.',
          'The last blank is what a company reporting an accounting profit '
          'and an economic loss has actually done.']),
        ('fill', 'R3',
         ['The income statement charges for debt and not for {equity}. '
          'Northwind deducted %s of interest and deducted nothing at all for '
          'the %s its shareholders have tied up.'
          % (money(N.interest), money(N.equity)),
          'Economic profit charges for both. If shareholders require %s on '
          'their %s, the charge would be %s, and the %s of accounting profit '
          'would become an economic {loss}.'
          % (_pc(0.10), money(N.equity), money(N.equity * 0.10),
             money(N.net_income)),
          'Nothing in that computation is unorthodox and nothing in the '
          'accounts is wrong. The two measures simply answer different '
          'questions, and only one of them asks whether the capital employed '
          'earned its {cost}.',
          'A company that reports a profit every year and never covers the '
          'cost of its equity is {destroying} value while complying fully with '
          'every standard in this course.'],
         {'equity': ('Debt has a stated rate; equity does not.', ''),
          'loss': ('Profitable by one measure, not the other.', ''),
          'cost': ('The question the income statement never asks.', ''),
          'destroying': ('Value, not profit.',
                         'Students equate profit with value creation. The '
                         'income statement does not charge for equity, so it '
                         'cannot answer that question.')},
         ['assets', 'gain', 'return']),
        ('fig', 'bridge',
         'Accounting profit', N.net_income,
         [('A charge for the %s of equity at %s'
           % (money(N.equity), _pc(0.10)), -N.equity * 0.10)],
         'Economic profit', N.net_income - N.equity * 0.10),

        ('part', 'Part 3 · Two kinds of value',
         'book and market'),

        ('task', 'Exercise 4C',
         'Distinguish book value from market value.',
         'Complete both right-hand columns.',
         ['Volume 8 Handout 1, for Northwind’s equity.',
          'Volume 11 Handout 2, on the capitals that are not on any balance '
          'sheet.'],
         ['Book value is what the standards measured. Ask what they '
          'deliberately left out.',
          'Volume 11 named three capitals that appear nowhere: human, social '
          'and natural.',
          'One of the two figures is audited and one of them changes on a day '
          'when the company does nothing at all.']),
        ('table', _VALH, _val(blank=True), PRIN, _VALW),
        ('answers', 9),
        ('fig', 'matrix', 'Why the two figures differ',
         ['Internally generated intangibles', 'The future',
          'Measurement basis'],
         ['In book value?', 'In market value?'],
         [['No — Volume 5 refused to recognise them', 'Yes'],
          ['No — the accounts report what has happened', 'Yes'],
          ['Historical cost, mostly', 'Today’s price']],
         'The gap between the two is not an error in either. It is the '
         'difference between a record of what happened and a view about what '
         'will.'),

        ('part', 'Part 4 · What inflation does',
         'to a ratio built from two dates'),

        ('task', 'Exercise 4D',
         'Say what inflation does to the reliability of a ratio.',
         'Sort each statement into the column that says whether it is true.',
         ['Volume 4 Handout 4, on FIFO and LIFO in rising prices.'],
         ['A ratio that divides a current figure by an old one is dividing '
          'dollars of two different sizes.',
          'Return on assets puts this year’s profit over assets bought over '
          'many years, which is exactly that problem.',
          'One of the statements is about LIFO, which Volume 4 showed moves '
          'old costs out of inventory and into cost of goods sold.']),
        ('sortgrid',
         ['Statement about inflation and ratios', 'TRUE', 'FALSE'],
         ['Return on assets is flattered when assets are carried at old costs',
          'Comparing two companies of different ages is harder under '
          'inflation',
          'LIFO gives a cost of goods sold closer to current prices than FIFO',
          'Historical cost accounting is unaffected by inflation',
          'A rising gross margin may reflect price rises rather than better '
          'buying',
          'Inflation affects the balance sheet more than the income statement'],
         ['TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE'],
         'The first is the one that matters most. An old asset base makes a '
         'mature company look more profitable than a new one doing exactly the '
         'same business.'),
        ('fig', 'ranked', 'Volume 4’s four figures, and what each one is made '
                          'of',
         [('Cost of goods available for sale', I.cost_available,
           money(I.cost_available), SLATE),
          ('Closing inventory under FIFO', I.fifo_closing,
           money(I.fifo_closing), PRIN),
          ('Closing inventory under weighted average', I.wa_closing,
           money(I.wa_closing), EST),
          ('Closing inventory under LIFO', I.lifo_closing,
           money(I.lifo_closing), ERR)],
         'One set of purchases, three carrying amounts, and a %s spread '
         'between the highest and the lowest. Inflation is what makes them '
         'differ at all.'
         % money(I.fifo_closing - I.lifo_closing),
         'All three methods are acceptable'),

        ('part', 'Part 5 · Reading a set of accounts sceptically',
         'the whole course, used'),

        ('task', 'Exercise 4E',
         'Identify the indicators of earnings management.',
         'Complete both right-hand columns.',
         ['Exercises 4A to 4D, and any volume of this course.'],
         ['Every row is a choice some volume of this course taught as '
          'legitimate. Ask what it looks like when it is used to a purpose.',
          'The estimates row is the one with the widest scope: credit losses, '
          'warranties, useful lives, impairment and pensions are all '
          'estimates.',
          'The last row is about whether a reader could check any of it, which '
          'is the condition for all the others mattering.']),
        ('table', _QUALH, _qual(blank=True), SLATE, _QUALW),
        ('answers', 10),
        ('fig', 'timeline', 'How to read a set of accounts, in order',
         [('The policies note', 'Which choices were made, and whether any '
                                'changed this year', PRIN),
          ('The cash flow statement', 'Whether the profit is backed by cash, '
                                      'and how large the accruals are', EST),
          ('The figures themselves', 'Last, and in the light of the first '
                                     'two', OK)],
         'The order is deliberate and it is the opposite of how most people '
         'read. Sixteen volumes taught the third box; this handout is about '
         'the first two.'),

        ('watch', 'Almost everything described here is permitted. Earnings '
                  'management is a question of judgement within the rules, not '
                  'of breaking them, and that is precisely why a reader needs '
                  'the whole of this course to notice it happening.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'High quality earnings are best indicated by:',
         ['A high growth rate',
          'Profit that is backed by operating cash flow and arises from '
          'recurring operations',
          'A large profit in absolute terms',
          'An unqualified audit opinion'],
         1, 'Level B',
         'Cash backing and recurrence are the two determinants. (D) says the '
         'figures comply with the standards, which is a different and much '
         'weaker statement.'),

        ('mcq', 'A company reports rising profit while operating cash flow '
                'falls for three consecutive years. This suggests:',
         ['Strong earnings quality',
          'That accruals are doing an increasing share of the work',
          'That the company is growing',
          'An error in the cash flow statement'],
         1, 'Level B',
         'The widening gap is the accruals, every one of which is a judgement. '
         '(C) is possible and is exactly the explanation a sceptical reader '
         'tests rather than assumes.'),

        ('mcq', 'Economic profit differs from accounting profit because it:',
         ['Excludes interest', 'Charges for the cost of equity capital',
          'Uses market values throughout', 'Is computed before tax'],
         1, 'Level C',
         'The income statement charges for debt and not for equity, so a '
         'company can report a profit and still not cover what its '
         'shareholders require.'),

        ('mcq', 'Book value differs from market value principally because book '
                'value:',
         ['Is updated daily',
          'Omits internally generated intangibles and the market’s view of '
          'the future',
          'Includes a premium for control',
          'Is not audited'],
         1, 'Level B',
         'Volume 5 refused to recognise internally generated intangibles and '
         'the accounts record what has happened rather than what will. (D) '
         'reverses the position entirely.'),

        ('mcq', 'Under inflation, a company holding old assets at historical '
                'cost will report a return on assets that is:',
         ['Understated', 'Overstated', 'Unaffected', 'Not determinable'],
         1, 'Level C',
         'Current profit is divided by an old and therefore small asset base, '
         'which flatters the ratio. It is why comparing a mature company with '
         'a new one needs care that the figures themselves do not signal.'),

        ('mcq', 'Which of the following is the best single place to begin '
                'assessing earnings quality?',
         ['The auditor’s report',
          'The accounting policies note and the cash flow statement',
          'The chairman’s statement',
          'The five-year summary'],
         1, 'Level C',
         'The policies say which choices were made and the cash flow statement '
         'shows how much of the profit is cash. (A) tells you the figures '
         'comply, which is where the question starts rather than ends.'),

        ('mcq', 'Earnings management, as the term is normally used, '
                'describes:',
         ['Fraudulent misstatement of the accounts',
          'The use of permitted accounting choices to produce a desired '
          'result',
          'The correction of prior period errors',
          'A change in accounting principle'],
         1, 'Level B',
         'Mostly within the rules, which is what makes it hard to detect and '
         'why the exam asks about its indicators. (A) is a different matter '
         'entirely and is not what the phrase means.'),

        ('tip', 'Read the accounting policies before the figures, and the cash '
                'flow statement before the income statement. Sixteen volumes '
                'of this course taught you how the numbers are built; this one '
                'asks what was built into them, and the answer is always in '
                'the notes.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4C · book value against market value'),
        ('table', _VALH, _val(), PRIN, _VALW),
        ('h3', 'Exercise 4E · the indicators of earnings quality'),
        ('table', _QUALH, _qual(), SLATE, _QUALW),
        ('prose', 'Every row of the second table describes something this '
                  'course taught as legitimate. The allowance for credit '
                  'losses in Volume 3, the cost flow choice in Volume 4, the '
                  'depreciation method in Volume 5, the impairment judgement '
                  'in Volume 5 and Volume 12, the pension assumptions in '
                  'Volume 16: each one is a choice, and each one moves the '
                  'reported result.', 'R2'),
        ('prose', 'That is the note to end seventeen volumes on. The '
                  'arithmetic in this course is exact and the checker has '
                  'verified every identity in it on every build. What the '
                  'arithmetic rests on is judgement, and no amount of checking '
                  'can verify that. A reader who has worked through all of it '
                  'knows where the judgements are, which is the only '
                  'protection there is.', 'R2'),
    ],
)
