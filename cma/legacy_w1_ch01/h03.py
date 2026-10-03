# -*- coding: utf-8 -*-
"""Handout 1.3 — Inside equity, and the words that look familiar."""

IFRSNAMES = [
    ['U.S. GAAP (used on the exam)', 'IFRS'],
    ['balance sheet', 'statement of financial position'],
    ['income statement', 'statement of profit or loss'],
    ['common stock', 'share capital (ordinary shares)'],
    ['additional paid-in capital', 'share premium'],
    ['accounts receivable', 'trade receivables'],
    ['net income', 'profit'],
]

HANDOUT = dict(
    id='1.3',
    n=3,
    pages=7,
    title='Inside equity',
    sub='Contributed capital and retained earnings · the dividend trap '
        '· words that look familiar and are not',
    covers=['sec:1.2', 'fig:F01-03', 'box:FALSE-FRIEND ALERT:1.2',
            'box:IFRS CONTRAST:1.2', 'box:TERM BRIDGE:1.2', 'p:P05',
            'p:P16', 'w:W1', 'term:retained earnings', 'term:common stock',
            'term:additional paid-in capital', 'term:par value',
            'term:dividend', 'term:contributed capital'],
    skills=[('equity-parts', 3), ('dividend', 3), ('falsefriends', 2)],
    flow=[
        ('speed', [
            'Assets = liabilities +',
            'Equity is the ______ interest in the assets',
            'Revenue comes from which kind of operations?',
            'A gain comes from which kind of event?',
            'Name one element that decreases equity',
            'Does borrowing cash change equity?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Equity has two parts, and they fill up differently'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Two ways money can end up in the owners’ claim: the '
                   'owners put it in, or the company earns it and keeps it. '
                   'Which of the two depends on the company trading '
                   'profitably?',
                 a='The money the company earns and keeps',
                 why='Retained earnings are past net income the company kept '
                     'instead of paying it out.'),
        ]),
        ('move', 'MODEL',
         'One figure. Follow the two branches first, then the five arrows on '
         'the right.'),
        ('fig', 'equity_tree'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Equity splits into two boxes in the figure. Name both.',
                 a='Contributed capital and retained earnings', why=''),
            dict(t='SHORT',
                 q='Contributed capital itself holds two accounts. Name them.',
                 a='Common stock at par value, and additional paid-in capital '
                   '(APIC)',
                 why='Contributed capital is what owners paid in: common '
                     'stock at its par value, plus additional paid-in '
                     'capital.'),
            dict(t='SHORT',
                 q='The figure shows two things that increase retained '
                   'earnings and three that decrease it. List all five.',
                 a='Increase: revenues, gains. Decrease: expenses, losses, '
                   'dividends.',
                 why='Revenues and gains increase retained earnings; expenses '
                     'and losses decrease it; dividends also decrease it.'),
            dict(t='SHORT',
                 q='Which of the five is NOT an expense, even though it '
                   'reduces retained earnings?',
                 a='A dividend',
                 why='A dividend is a distribution to owners, so it never '
                     'appears in the income statement.'),
            dict(t='TF',
                 q='A profitable year increases common stock.',
                 a='F',
                 why='Profit goes to retained earnings. Common stock and APIC '
                     'change only when owners put money in.'),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the test that decides which part of equity an amount belongs '
         'to.',
         [['If the amount came from the ', 20, ', it goes to ', 24, '.'],
          ['If the company ', 16, ' it and did not pay it out, it goes to ',
           22, '.']],
         ['owners', 'contributed capital', 'earned', 'retained earnings'],
         'Contributed capital is what owners paid in: common stock at its par '
         'value, plus additional paid-in capital (APIC). Retained earnings '
         'are the past net income that the company kept instead of paying it '
         'out as dividends.'),
        ('contrast',
         'Two amounts of 1,400 in the same company',
         [('Shares issued above par',
           ['Owners paid 15 a share for 1 par shares.',
            'The 14 above par, times 100,000 shares.',
            'Which equity account?']),
          ('A profitable year',
           ['The company earned it by selling olive oil.',
            'No dividend was paid out of it.',
            'Which equity account?'])],
         'Both amounts sit inside equity. Name the account each belongs to, '
         'and write the one question that tells them apart.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='SORT',
                 q='Write each item under the equity account it belongs to.',
                 regions=['Common stock', 'Additional paid-in capital',
                          'Retained earnings'],
                 items=['the par value of shares issued',
                        'the amount paid above par value',
                        'last year’s net income that was kept',
                        'a dividend declared',
                        'this year’s loss'],
                 a=['common stock: par value of shares issued',
                    'APIC: the amount paid above par',
                    'retained earnings: income kept, dividends declared, '
                    'losses'],
                 whys=['', '', '']),
        ]),
        ('check',
         'Which part of equity does a profitable year increase, and which '
         'part does issuing shares increase?',
         'A profitable year increases retained earnings; issuing shares '
         'increases contributed capital.',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The dividend trap'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Wages reduce retained earnings. A dividend reduces '
                   'retained earnings. Only one of the two also reduces net '
                   'income. Which?',
                 a='Wages',
                 why='Wages are an expense. A dividend is a distribution to '
                     'owners and never reaches the income statement.'),
        ]),
        ('move', 'MODEL',
         'The board declares a dividend of 50 on January 31, payable on '
         'February 15. Here is what happens, and when.'),
        ('trace', 'One dividend, two dates',
         [('Jan 31 · the board declares 50',
           'retained earnings fall by 50, and a liability of 50 is created'),
          ('Jan 31 · net income',
           'unchanged — a dividend is not an expense'),
          ('Jan 31 · cash', 'unchanged — nothing has been paid yet'),
          ('Feb 15 · the dividend is paid',
           'the liability of 50 goes, and cash falls by 50'),
          ('Feb 15 · retained earnings',
           'unchanged — they already fell in January, on declaration')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='On which of the two dates do retained earnings fall?',
                 a='On January 31, the date of declaration', why=''),
            dict(t='SHORT',
                 q='On which of the two dates does cash fall?',
                 a='On February 15, the date of payment', why=''),
            dict(t='SHORT',
                 q='What is created on January 31 that did not exist before?',
                 a='A liability — dividends payable of 50', why=''),
            dict(t='TF',
                 q='Net income for January is 50 lower because of the '
                   'dividend.',
                 a='F',
                 why='A dividend reduces retained earnings, not net income.'),
        ]),
        ('pair', 'Answer the next item alone first, then compare.',
         'find the row in the trace that names the date. The date settles '
         'it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write why a dividend reduces the owners’ claim without ever '
         'being an expense.',
         [['A dividend is a ', 22, ' to ', 14, ', not a cost of ', 22, '.'],
          ['So it reduces ', 22, ' but never appears in the ', 22, '.']],
         ['distribution', 'owners', 'retained earnings', 'income statement'],
         'A dividend is not an expense. It is a distribution to owners, so it '
         'reduces retained earnings and never appears in the income '
         'statement.'),
        ('contrast',
         'Two payments of 40 and 50, in the same month',
         [('Wages of 40 paid to plant workers',
           ['Who receives it? The workers.',
            'Is it a cost of earning this year’s revenue?',
            'Does net income change?']),
          ('A dividend of 50 declared for shareholders',
           ['Who receives it? The owners.',
            'Is it a cost of earning this year’s revenue?',
            'Does net income change?'])],
         'Answer all three rows for both. Then write the single word that '
         'separates a cost of earning from a distribution of what was '
         'earned.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='The board declares a cash dividend that will be paid next '
                   'month. What is the effect immediately after the '
                   'declaration?',
                 o=['Expenses increase and net income decreases.',
                    'Liabilities increase and equity decreases.',
                    'Assets decrease and equity decreases.',
                    'There is no effect until the dividend is paid.'],
                 a='B',
                 why='Declaring creates a liability and reduces retained '
                     'earnings. No cash moves and no expense arises, so '
                     'assets and net income are untouched.'),
            dict(t='TF',
                 q='Paying a dividend that was declared last month reduces '
                   'retained earnings again.',
                 a='F',
                 why='Retained earnings fell on the declaration date. Payment '
                     'reduces the liability and cash.'),
        ]),
        ('check',
         'A dividend is declared in January and paid in February. In which '
         'month do retained earnings fall, and in which month does cash fall?',
         'Retained earnings fall in January, on declaration; cash falls in '
         'February, on payment.',
         'redo the worked trace at the start of cycle B, reading the dates '
         'aloud.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'Words that look familiar and are not'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='In a CMA question, does the word "stock" mean shares or '
                   'goods held for sale?',
                 a='Shares',
                 why='In U.S. English, stock means shares. Goods held for '
                     'sale are always inventory.'),
        ]),
        ('move', 'MODEL',
         'Four traps the book names, and the English the exam expects '
         'instead.'),
        ('panel', 'Four words that mislead a reader coming from Arabic or '
                  'French',
         [['The familiar word', 'What it suggests', 'What the exam means'],
          ['stock', 'in French and British English, goods held for sale',
           'shares: common stock, a stock dividend. Goods for sale are '
           'inventory'],
          ['income', 'Arabic دخل, any money coming in',
           'net income is what remains after expenses; the gross amount from '
           'sales is revenue'],
          ['charges', 'French charges, meaning expenses',
           'in English, charges usually means fees. Expenses are expenses'],
          ['balance', 'French la balance, the trial balance',
           'the balance sheet is a statement of position; the trial balance '
           'is a different document']],
         ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='MATCH',
                 q='Write the letter of the exam term beside each familiar '
                   'word.',
                 left=['stock', 'income', 'charges', 'balance'],
                 right=['shares', 'expenses',
                        'what remains after expenses',
                        'a statement of position at one date'],
                 a=['A', 'C', 'B', 'D'], whys=['', '', '', '']),
            dict(t='SHORT',
                 q='A question says a company holds 400 of "stock". If it is '
                   'a CMA question, what is being held?',
                 a='Shares', why='In a CMA question, inventory is always '
                                 'called inventory.'),
        ]),
        ('move', 'MODEL',
         'The same items under IFRS. The ideas are the same; only the names '
         'differ.'),
        ('panel', 'The same item, two names', IFRSNAMES, ''),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A Jordanian company’s IFRS statements show share '
                   'premium of 400. Under U.S. GAAP, the same item is called:',
                 o=['retained earnings.', 'common stock.',
                    'additional paid-in capital.', 'treasury stock.'],
                 a='C',
                 why='Share premium is the amount received for shares above '
                     'their par value, which is additional paid-in capital. '
                     'Common stock holds only the par value.'),
            dict(t='FILL',
                 parts=['Under IFRS the balance sheet is called the ', 26,
                        ', and net income is called ', 12, '.'],
                 a=['statement of financial position', 'profit'],
                 whys=['', '']),
        ]),
        ('check',
         'Give the U.S. GAAP name for share premium, and the IFRS name for '
         'the balance sheet.',
         'Share premium is additional paid-in capital; the balance sheet is '
         'the statement of financial position.',
         'redo the matching item in cycle C and read the two-name panel '
         'again.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'equity_tree',
         'Rebuild the equity figure. Show both branches, the two accounts '
         'inside contributed capital, and all five arrows into and out of '
         'retained earnings.',
         'Equity splits into contributed capital (common stock at par, plus '
         'APIC) and retained earnings. Revenues and gains increase retained '
         'earnings; expenses, losses and dividends decrease it.'),
        ('teach', 'a new colleague',
         'In three to five sentences, explain why a cash dividend reduces '
         'retained earnings but does not appear in the income statement.',
         ['distribution', 'owners', 'expense', 'retained earnings',
          'net income'],
         'A dividend is a distribution to owners, not a cost of earning '
         'revenue, so it is not an expense. It reduces retained earnings on '
         'the date the board declares it, because retained earnings are the '
         'past net income the company has kept rather than paid out. Net '
         'income is unaffected, so the dividend never appears in the income '
         'statement. The payment itself, later, reduces cash and the '
         'liability the declaration created.'),
    ],
)
