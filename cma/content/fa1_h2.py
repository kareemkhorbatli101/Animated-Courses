# -*- coding: utf-8 -*-
"""Volume 1, Handout 2 — The Balance Sheet: What It Holds and How It Is Ordered.

Covers A.1(c) for the balance sheet: its major components and classifications.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'


def _bs(blank=False):
    """Northwind's balance sheet. Every figure is derived, never typed twice."""
    def m(v):
        return None if blank else money(v)
    return [
        ('ASSETS', 0, None, 'b'),
        ('Current assets', 1, None, 'b'),
        ('Cash and cash equivalents', 2, m(N.cash), ''),
        ('Accounts receivable, net of allowance of %s' % money(N.allowance), 2,
         m(N.ar_net), ''),
        ('Inventory', 2, m(N.inventory), ''),
        ('Prepaid expenses', 2, m(N.prepaid), ''),
        ('Total current assets', 1, m(N.current_assets), 't'),
        ('Non-current assets', 1, None, 'b'),
        ('Investments in debt securities', 2, m(N.afs), ''),
        ('Property, plant and equipment, at cost', 2, m(N.ppe_gross), ''),
        ('Less accumulated depreciation', 2, m(-N.accum_dep), ''),
        ('Property, plant and equipment, net', 2, m(N.ppe_net), 'r'),
        ('Intangible assets, net', 2, m(N.intangibles), ''),
        ('Goodwill', 2, m(N.goodwill), ''),
        ('TOTAL ASSETS', 0, m(N.total_assets), 't'),
        ('LIABILITIES AND SHAREHOLDERS’ EQUITY', 0, None, 'b'),
        ('Current liabilities', 1, None, 'b'),
        ('Accounts payable', 2, m(N.ap), ''),
        ('Accrued liabilities', 2, m(N.accrued), ''),
        ('Income taxes payable', 2, m(N.taxes_payable), ''),
        ('Current portion of long-term debt', 2, m(N.ltd_current), ''),
        ('Total current liabilities', 1, m(N.current_liabilities), 't'),
        ('Non-current liabilities', 1, None, 'b'),
        ('Long-term debt', 2, m(N.ltd), ''),
        ('Deferred tax liability', 2, m(N.dtl), ''),
        ('Total liabilities', 1, m(N.total_liabilities), 't'),
        ('Shareholders’ equity', 1, None, 'b'),
        ('Common stock, $1 par', 2, m(N.common_stock), ''),
        ('Additional paid-in capital', 2, m(N.apic), ''),
        ('Retained earnings', 2, m(N.retained), ''),
        ('Accumulated other comprehensive income', 2, m(N.aoci), ''),
        ('Total shareholders’ equity', 1, m(N.equity), 't'),
        ('TOTAL LIABILITIES AND EQUITY', 0, m(N.total_liabilities + N.equity), 't'),
    ]


HANDOUT = dict(
    n=2,
    title='The Balance Sheet: What It Holds and How It Is Ordered',
    subtitle='Assets, liabilities and equity at one date. The ordering is not '
             'decoration: it is the answer to how soon each line turns into cash.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 for the classification rules, R2 for the measurement note. '
                 'The sentences lengthen as the handout goes on.',
        collocations=['classify an item as current', 'present an item at cost',
                      'carry an asset at', 'the carrying amount of an asset',
                      'settle a liability', 'realise an asset'],
        pairs=['current / non-current', 'cost / carrying amount',
               'liability / equity', 'gross / net'],
        nots=['Carrying amount is not market value. It is what the books say, '
              'after the rules have been applied.',
              'Current does not mean important. It means it will be realised or '
              'settled within the operating cycle or a year, whichever is longer.'],
    ),

    objectives=[
        'State the accounting equation and show that Northwind’s balance '
        'sheet satisfies it.',
        'Classify an asset or a liability as current or non-current, and name the '
        'test you applied.',
        'Say what a contra account does, and read a net figure back to its gross '
        'figure.',
        'Name the four components of shareholders’ equity and what each one '
        'records.',
    ],

    terms=[
        ('carrying amount',
         'The figure at which an asset or liability is reported on the balance '
         'sheet.', 'القيمة الدفترية',
         'Also called book value. It is the result of applying the rules, not an '
         'estimate of what the item would sell for.'),
        ('operating cycle',
         'The time from buying inventory to collecting the cash from selling it.',
         'الدورة التشغيلية',
         'The current test is one year OR the operating cycle, whichever is longer. '
         'Most students forget the second half.'),
        ('current asset',
         'An asset expected to be realised within one year or the operating cycle, '
         'whichever is longer.', 'أصل متداول',
         'It is about timing, not about size or importance.'),
        ('contra account',
         'An account that is deducted from the account it relates to.',
         'حساب مقابل',
         'Accumulated depreciation and the allowance for credit losses are both '
         'contra accounts. Neither is a liability.'),
        ('accumulated other comprehensive income',
         'The running total of gains and losses that bypassed net income.',
         'الدخل الشامل الآخر المتراكم',
         'A balance sheet line, not an income statement line. Handout 3 explains '
         'what lands in it.'),
        ('other comprehensive income',
         'Gains and losses the rules keep out of net income and take to equity.',
         'الدخل الشامل الآخر',
         'Not optional and not a choice. A specific list of items goes here, and '
         'an unrealised gain on available-for-sale debt securities is one of them.'),
        ('comprehensive income',
         'Net income plus the gains and losses that bypassed net income.',
         'الدخل الشامل',
         'The wider of the two figures. Handout 3 shows what lands outside net '
         'income and why.'),
        ('additional paid-in capital',
         'What shareholders paid above the par value of the shares issued.',
         'علاوة إصدار',
         'Par value is an arbitrary legal figure. The split between common stock '
         'and this account has no economic meaning at all.'),
        ('liquidity',
         'How quickly an item can be turned into cash.', 'السيولة',
         'The ordering of a balance sheet is an ordering by liquidity, which is '
         'why cash is first.'),
    ],

    blocks=[
        ('scene', 'The photograph, taken at one moment', [
            'Northwind’s balance sheet at 31 December %s is reproduced twice in '
            'this handout: once complete, so you can read it, and once with the '
            'figures removed, so you can build it.' % Y,
            'Nothing on this statement accumulates. Every figure is the balance at '
            'the instant the clock struck midnight on 31 December.',
            'The order of the lines carries information. Assets run from the most '
            'liquid to the least; liabilities run from the soonest due to the '
            'latest. A reader who knows that can see the company’s position '
            'before reading a single number.',
        ]),
        ('fig', 'ranked', 'The balance sheet is ordered by liquidity',
         [('Cash', N.cash, money(N.cash), BS),
          ('Accounts receivable, net', N.ar_net, money(N.ar_net), BS),
          ('Inventory', N.inventory, money(N.inventory), BS),
          ('Property, plant and equipment, net', N.ppe_net,
           money(N.ppe_net), SLATE),
          ('Goodwill', N.goodwill, money(N.goodwill), SLATE)],
         'Top to bottom: nearest to cash, furthest from cash. The bar shows '
         'size; the position shows how soon it becomes cash.',
         'Northwind at 31 December %s' % Y),

        ('part', 'Part 1 · The equation underneath', 'why it always balances'),

        ('task', 'Exercise 2A',
         'State the accounting equation and explain why the two sides must agree.',
         'Read and complete. One word in each space.',
         ['Handout 1, for what the balance sheet is for.'],
         ['Blank 2 is the word for the owners’ claim on what is left.',
          'Blank 4 is the reason the equation is not a coincidence: it is true by '
          'the way the records are kept.',
          'Say the equation aloud before you fill anything in.']),
        ('fill', 'R1',
         ['Everything the company controls has to have come from somewhere. It came '
          'either from people the company owes, or from its {owners}. That is the '
          'whole of the accounting equation.',
          'Written out: assets equal liabilities plus {equity}. Liabilities are the '
          'claims of outsiders. Equity is the claim of the owners, and it is a '
          '{residual} claim, because the owners get what is left after everyone '
          'else has been paid.',
          'The two sides agree every time, and not by luck. Every transaction is '
          'recorded twice, once as a debit and once as a credit, so the equation '
          'can never be knocked out of {balance}. If your balance sheet does not '
          'balance, you have made a recording error, not a business discovery.'],
         {'owners': ('Two sources only: creditors and owners.', ''),
          'equity': ('Assets = liabilities + equity. Learn it in this order.', ''),
          'residual': ('The owners rank last, which is why their return varies.',
                       'Students treat equity as a fixed amount the owners put in. '
                       'It is whatever is left.'),
          'balance': ('Double entry is what enforces it.', '')},
         ['asset', 'profit', 'agreement']),
        ('fig', 'formula', 'The equation, and the order it is written in',
         [('ASSETS', 'what the company controls', BS),
          ('=', '', None),
          ('LIABILITIES', 'the outsiders’ claim, paid first', RUST),
          ('+', '', None),
          ('EQUITY', 'the owners’ claim, the residual', IS)],
         'Northwind: %s = %s + %s'
         % (money(N.total_assets), money(N.total_liabilities), money(N.equity))),

        ('part', 'Part 2 · Current or non-current?', 'the classification test'),

        ('task', 'Exercise 2B',
         'Apply the current test, including the half of it most students forget.',
         'Read and complete.',
         ['Exercise 2A'],
         ['The test has two limbs joined by the word "or". Both matter.',
          'Blank 3 is a comparative: when the two limbs disagree, which one wins?',
          'The last blank is the matching word for a liability rather than an '
          'asset.']),
        ('fill', 'R2',
         ['An asset is classified as current when it is expected to be realised '
          'within one {year} of the balance sheet date, or within the entity’s '
          'normal operating {cycle} if that cycle is longer.',
          'The second limb matters for a shipbuilder or a distiller, whose cycle '
          'runs for several years. Where the two limbs give different answers, the '
          '{longer} of the two periods is used, so inventory that will take '
          'eighteen months to sell is still a current asset for such a company.',
          'The parallel test applies to the other side of the balance sheet. A '
          'liability is current when it is due to be {settled} within the same '
          'period, which is why the instalment of a loan falling due next year is '
          'lifted out of long-term debt and presented separately.'],
         {'year': ('One year is the first limb, and the only one most students '
                   'remember.', ''),
          'cycle': ('Buy inventory, sell it, collect the cash.', ''),
          'longer': ('Whichever is longer — never whichever is shorter.',
                     'The exam writes a long operating cycle into the stem '
                     'precisely to see whether you apply the second limb.'),
          'settled': ('Realised for an asset, settled for a liability.', '')},
         ['shorter', 'month', 'incurred']),
        ('sortgrid',
         ['Northwind item at 31 December %s' % Y, 'CURRENT', 'NON-CURRENT'],
         ['Inventory held for sale in the next four months',
          'The %s instalment of long-term debt due next year'
          % money(N.ltd_current),
          'Goodwill arising on an acquisition three years ago',
          'Prepaid insurance covering the next eight months',
          'The deferred tax liability, expected to reverse over nine years',
          'Debt securities the company may sell at any time but need not'],
         ['CURRENT', 'CURRENT', 'NON-CURRENT', 'CURRENT', 'NON-CURRENT',
          'NON-CURRENT'],
         'The last one is the trap. Intention to hold, not ability to sell, decides '
         'it — and Northwind holds these as a long-term investment.'),
        ('fig', 'fork', 'The current test, both limbs',
         [('Will it be realised or settled within ONE YEAR?',
           'YES → current', IS),
          ('No — but within the OPERATING CYCLE, and the cycle is longer?',
           'YES → still current', SCF),
          ('Neither?', 'NON-CURRENT', SLATE)]),

        ('part', 'Part 3 · Reading the statement itself',
         'gross, contra and net'),

        ('prose', 'Three lines on Northwind’s balance sheet are presented net '
                  'of something. Property, plant and equipment is shown at cost and '
                  'then reduced by accumulated depreciation. Accounts receivable is '
                  'shown after the allowance for credit losses. Each deduction sits '
                  'in a contra account.', 'R2'),
        ('prose', 'A contra account is not a liability. It does not represent money '
                  'owed to anyone. It is a reduction of the asset it attaches to, '
                  'presented separately so that the reader can see both the original '
                  'cost and the amount written off. The figure left after the '
                  'deduction is the carrying amount.', 'R2'),

        ('task', 'Exercise 2C',
         'Read a net figure back to its gross figure, and name the contra account.',
         'Complete the table. Write the missing figure or the missing name.',
         ['Exercise 2A, and the paragraphs above.'],
         ['Each row is the same arithmetic: gross less contra equals carrying '
          'amount.',
          'Two rows give you the carrying amount and ask for the contra account.',
          'Write the figures with the comma separators, as the statement does.']),
        ('table', ['Line', 'Gross', 'Contra account', 'Carrying amount'],
         [['Property, plant and equipment', money(N.ppe_gross),
           'Accumulated depreciation', '______________'],
          ['Accounts receivable', money(N.ar_gross), '______________',
           money(N.ar_net)],
          ['Property, plant and equipment', '______________',
           money(N.accum_dep), money(N.ppe_net)],
          ['Accounts receivable', '______________',
           'Allowance for credit losses %s' % money(N.allowance), '______________']],
         BS, [30, 20, 28, 22]),
        ('answers', 4),
        ('fig', 'bridge',
         'PP&E at cost', N.ppe_gross,
         [('Less accumulated depreciation — a contra account, not a liability',
           -N.accum_dep)],
         'PP&E carrying amount', N.ppe_net),

        ('part', 'Part 4 · Build it', 'the statement with the figures removed'),

        ('task', 'Exercise 2D',
         'Build Northwind’s balance sheet and prove that it balances.',
         'Write the figures into the blank statement. The complete statement is in '
         'the answer key — do not look until you have finished.',
         ['Exercises 2A, 2B and 2C'],
         ['Work from the detail lines upward. Every subtotal is the sum of the '
          'lines indented under it.',
          'The two lines in capitals must agree with each other. If they do not, '
          'check the subtotals before you check the detail.',
          'Accumulated depreciation is written as a deduction, in brackets.']),
        ('stmt', '%s · Balance Sheet at 31 December %s' % (N.name, Y),
         _bs(blank=True), BS),
        ('fig', 'scale',
         'EVERYTHING THE COMPANY CONTROLS',
         ['Current assets %s' % money(N.current_assets),
          'Investments %s' % money(N.afs),
          'PP&E, net %s' % money(N.ppe_net),
          'Intangibles and goodwill %s' % money(N.intangibles + N.goodwill),
          'TOTAL %s' % money(N.total_assets)],
         'EVERYTHING IT CAME FROM',
         ['Current liabilities %s' % money(N.current_liabilities),
          'Long-term debt %s' % money(N.ltd),
          'Deferred tax %s' % money(N.dtl),
          'Shareholders’ equity %s' % money(N.equity),
          'TOTAL %s' % money(N.total_liabilities + N.equity)]),

        ('part', 'Part 5 · The equity section', 'four lines, four stories'),

        ('task', 'Exercise 2E',
         'Name the four components of equity and say what each one records.',
         'Match the equity line to what it records.',
         ['Exercise 2D'],
         ['Two of these four record what shareholders paid in. Two record what the '
          'company has accumulated since.',
          'The split between the first two has no economic meaning. Ask what legal '
          'figure causes it.',
          'The last one is the only equity line that never passed through net '
          'income.']),
        ('match',
         ['Common stock, $1 par %s' % money(N.common_stock),
          'Additional paid-in capital %s' % money(N.apic),
          'Retained earnings %s' % money(N.retained),
          'Accumulated other comprehensive income %s' % money(N.aoci)],
         ['The par value of the shares issued — an arbitrary legal figure',
          'What shareholders paid above par value',
          'Profits earned since incorporation and not yet paid out as dividends',
          'Gains and losses that bypassed net income and went straight to equity'],
         ['A', 'B', 'C', 'D'],
         'The first two together are contributed capital: %s paid in by '
         'shareholders. The last two are what the company accumulated.'
         % money(N.common_stock + N.apic)),
        ('fig', 'ranked', 'Where each dollar of equity came from',
         [('Common stock, $1 par', N.common_stock, money(N.common_stock), BS),
          ('Additional paid-in capital', N.apic, money(N.apic), BS),
          ('Retained earnings', N.retained, money(N.retained), IS),
          ('Accumulated other comprehensive income', N.aoci,
           money(N.aoci), SCF)],
         'Plum: contributed by shareholders, %s. Teal and blue: accumulated '
         'by the company, %s. Total equity %s.'
         % (money(N.common_stock + N.apic), money(N.retained + N.aoci),
            money(N.equity))),

        ('prose', 'The fourth equity line is worth a sentence here, because its '
                  'name says where it came from. A few gains and losses are kept out '
                  'of net income by the rules and taken straight to equity instead. '
                  'Net income plus those items is comprehensive income, and the '
                  'running total of the items that bypassed net income accumulates '
                  'in this line.', 'R2'),

        ('watch', 'Par value is a legal relic. A company can issue $1 par shares for '
                  '$7, and the $6 difference goes to additional paid-in capital. '
                  'Nothing about the company changes because of where the line '
                  'falls — but the exam will ask you to put it on the right '
                  'side of it.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A distillery’s normal operating cycle is four years. Whisky '
                'maturing in its warehouse will be sold in three years. How should '
                'the maturing whisky be classified?',
         ['Non-current, because it will not be realised within one year',
          'Current, because it will be realised within the normal operating cycle, '
          'which is longer than one year',
          'Partly current and partly non-current, apportioned by year',
          'Non-current, because inventory held for more than one year is always '
          'non-current'],
         1, 'Level C',
         'The current test is one year OR the operating cycle, whichever is longer. '
         'The cycle here is four years, so three-year inventory is current. (A) and '
         '(D) apply only the first limb. (C) is not a presentation the standards '
         'permit for inventory.'),

        ('mcq', 'Accumulated depreciation is best described as:',
         ['A liability, because it represents an obligation to replace the asset',
          'An expense of the current period',
          'A contra asset account deducted from property, plant and equipment',
          'A reserve of cash set aside to replace the asset'],
         2, 'Level A',
         'It is a contra asset: a deduction presented separately so that both cost '
         'and the amount written off are visible. (A) is the classic wrong answer '
         '— no one is owed anything. (B) is depreciation expense, a different '
         'account. (D) is a persistent myth; no cash is set aside.'),

        ('mcq', 'Northwind reports property, plant and equipment at cost of %s and '
                'accumulated depreciation of %s. The carrying amount reported on '
                'the balance sheet is:' % (money(N.ppe_gross), money(N.accum_dep)),
         [money(N.ppe_gross), money(N.ppe_net), money(N.accum_dep),
          money(N.ppe_gross + N.accum_dep)],
         1, 'Level A',
         'Carrying amount is cost less accumulated depreciation: %s − %s = %s. '
         '(A) is the gross figure, (C) the contra account, (D) adds what should be '
         'deducted — the most common slip under time pressure.'
         % (money(N.ppe_gross), money(N.accum_dep), money(N.ppe_net))),

        ('mcq', 'Which of the following would NOT appear within shareholders’ '
                'equity on a balance sheet?',
         ['Additional paid-in capital', 'Retained earnings',
          'Accumulated other comprehensive income', 'Deferred tax liability'],
         3, 'Level A',
         'A deferred tax liability is a liability, not a component of equity. The '
         'other three are the equity lines Northwind reports, alongside common '
         'stock.'),

        ('mcq', 'A company issues 20,000 shares with a par value of $1 each for $7 '
                'per share. The effect on the balance sheet is:',
         ['Common stock increases $140,000',
          'Common stock increases $20,000 and additional paid-in capital increases '
          '$120,000',
          'Additional paid-in capital increases $140,000',
          'Common stock increases $20,000 and retained earnings increases $120,000'],
         1, 'Level B',
         'Par value goes to common stock (20,000 × $1), and the excess goes to '
         'additional paid-in capital (20,000 × $6). (A) and (C) ignore the '
         'split. (D) is the serious error: money received from owners is never '
         'retained earnings, which records profits only.'),

        ('mcq', 'The balance sheet is described as showing financial position at a '
                'point in time. Which of the following is a direct consequence?',
         ['It must be prepared only at the financial year end',
          'No figure on it represents an amount accumulated over the reporting '
          'period',
          'It cannot include estimates',
          'It must be presented for a single year only'],
         1, 'Level C',
         'Every balance sheet line is a balance at an instant, not a flow over a '
         'period. (A) is false — interim balance sheets exist. (C) is false: '
         'the allowance and accumulated depreciation are both estimates. (D) is '
         'false: comparatives are required precisely so a trend can be seen. The '
         'trap in (B) is accumulated depreciation, whose name suggests a flow but '
         'which is a balance.'),

        ('mcq', 'Northwind’s total assets are %s and its total liabilities are '
                '%s. Shareholders’ equity is:'
                % (money(N.total_assets), money(N.total_liabilities)),
         [money(N.equity), money(N.total_assets + N.total_liabilities),
          money(N.retained), money(N.common_stock + N.apic)],
         0, 'Level A',
         'Equity is the residual: %s − %s = %s. (B) adds instead of '
         'subtracting. (C) is retained earnings alone, one of four equity '
         'components. (D) is contributed capital only.'
         % (money(N.total_assets), money(N.total_liabilities), money(N.equity))),

        ('tip', 'Before you classify anything as current, read the stem again for '
                'the length of the operating cycle. If the examiner has told you '
                'the cycle, they have told you for a reason.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2C · the completed table'),
        ('table', ['Line', 'Gross', 'Contra account', 'Carrying amount'],
         [['Property, plant and equipment', money(N.ppe_gross),
           'Accumulated depreciation', money(N.ppe_net)],
          ['Accounts receivable', money(N.ar_gross),
           'Allowance for credit losses %s' % money(N.allowance), money(N.ar_net)],
          ['Property, plant and equipment', money(N.ppe_gross),
           money(N.accum_dep), money(N.ppe_net)],
          ['Accounts receivable', money(N.ar_gross),
           'Allowance for credit losses %s' % money(N.allowance), money(N.ar_net)]],
         BS, [30, 20, 28, 22]),
        ('h3', 'Exercise 2D · the completed balance sheet'),
        ('stmt', '%s · Balance Sheet at 31 December %s' % (N.name, Y),
         _bs(), BS),
    ],
)
