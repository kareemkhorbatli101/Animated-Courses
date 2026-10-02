# -*- coding: utf-8 -*-
"""Volume 1, Handout 7 — Building the Balance Sheet and the Income Statement.

Covers A.1(g) for the balance sheet and the income statement: how each is
prepared, starting from a trial balance.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

_DR, _CR = N.trial_balance()


def _tb(blank=False):
    """The trial balance as a two-column table, debits beside credits."""
    rows = []
    n = max(len(_DR), len(_CR))
    for i in range(n):
        d = _DR[i] if i < len(_DR) else ('', None)
        c = _CR[i] if i < len(_CR) else ('', None)
        rows.append([d[0], money(d[1]) if d[1] is not None else '',
                     c[0], money(c[1]) if c[1] is not None else ''])
    rows.append(['Total debits', money(N.tb_debits), 'Total credits',
                 money(N.tb_credits)])
    return rows


_TBH = ['Account (debit balance)', 'Debit', 'Account (credit balance)', 'Credit']
_TBW = [33, 17, 33, 17]

_SORT = ['Account from the trial balance', 'INCOME STATEMENT', 'BALANCE SHEET',
         'NEITHER — equity statement']


HANDOUT = dict(
    n=7,
    title='Building the Balance Sheet and the Income Statement',
    subtitle='One list of balances goes in. Two statements come out. The only skill '
             'is knowing which line goes where, and in what order.',
    register='R2 throughout, with R3 in the final part',

    lang=dict(
        register='R2 textbook English. The vocabulary here is procedural: the words '
                 'describe what you do, in the order you do it.',
        collocations=['extract a trial balance', 'post an adjusting entry',
                      'accrue an expense', 'close the books',
                      'transfer a balance to retained earnings',
                      'present a statement'],
        pairs=['trial balance / balance sheet',
               'accrued expense / prepaid expense',
               'permanent account / temporary account',
               'adjust / close'],
        nots=['A trial balance is not a balance sheet. It lists every account, '
              'including the income ones, and it is not a statement at all.',
              'Balancing is not the same as being correct. A trial balance that '
              'balances can still have an amount in the wrong account.'],
    ),

    objectives=[
        'Say what a trial balance is, and what its balancing does and does not '
        'prove.',
        'Sort every account in a trial balance to the statement it belongs in.',
        'Build the income statement and the balance sheet from a trial balance, '
        'in the right order.',
        'Explain why the income statement has to be built before the balance '
        'sheet.',
        'Name the two kinds of account and say which ones survive the year end.',
    ],

    terms=[
        ('trial balance',
         'A list of every account and its balance, debits in one column and '
         'credits in the other.', 'ميزان المراجعة',
         'A working paper, not a statement. It is where the preparation of the '
         'statements begins.'),
        ('adjusting entry',
         'An entry made at the period end so that the accounts reflect what has '
         'actually been earned and incurred.', 'قيد تسوية',
         'Depreciation, the allowance for credit losses and accrued interest are '
         'all adjusting entries. None of them involves cash.'),
        ('accrued expense',
         'A cost incurred but not yet paid or invoiced.', 'مصروف مستحق',
         'It creates a liability. The expense belongs to this year even though the '
         'cash will leave next year.'),
        ('prepaid expense',
         'A cost paid in advance of the period it belongs to.',
         'مصروف مدفوع مقدماً',
         'It creates an asset. The cash has gone, but the benefit has not yet been '
         'used up.'),
        ('temporary account',
         'An income statement account, which starts each year at zero.',
         'حساب مؤقت',
         'Revenue, expenses and dividends are temporary. They are closed to '
         'retained earnings and begin the next year empty.'),
        ('permanent account',
         'A balance sheet account, which carries its balance into the next year.',
         'حساب دائم',
         'Also called a real account. The closing balance of one year is the '
         'opening balance of the next.'),
        ('closing entry',
         'The entry that empties the temporary accounts into retained earnings at '
         'the year end.', 'قيد الإقفال',
         'This is the mechanism behind the link you met in Handout 6: net income '
         'arriving in the equity statement.'),
    ],

    blocks=[
        ('scene', 'One list in, two statements out', [
            'Everything Northwind recorded during %s ends up in a single list of '
            'account balances, called a trial balance. It is not a statement and '
            'it is not presented to anybody. It is the working paper the '
            'statements are built from.' % Y,
            'The list on the next page has %s of debits and the same of credits. '
            'That equality is worth something, but far less than students assume, '
            'and Part 1 is about exactly how much.' % money(N.tb_debits),
            'From this one list you will build two statements. The order matters, '
            'and it is not the order they are presented in.',
        ]),
        ('fig', 'timeline', 'The order the statements are actually built in',
         [('Trial balance', 'every account, debits equal credits', SLATE),
          ('Income statement', 'the temporary accounts, giving net income', IS),
          ('Balance sheet', 'the permanent accounts, plus retained earnings', BS)],
         'The balance sheet cannot be finished first, because retained earnings is '
         'not known until the income statement has produced net income.'),

        ('part', 'Part 1 · What balancing proves', 'and what it does not'),

        ('task', 'Exercise 7A',
         'Say what a trial balance is and what its balancing does not prove.',
         'Read and complete. Write one word in each space.',
         ['Handout 6, for how an entry has two equal sides.'],
         ['Blank 2 is the reason the two columns are always equal, and it is a '
          'property of the recording system, not of the figures.',
          'Blanks 3 and 4 are two kinds of error that leave the columns equal. '
          'They are the reason balancing proves so little.',
          'Say the last sentence aloud. It is the point of the whole exercise.']),
        ('fill', 'R2',
         ['A trial balance lists every account in the ledger with its balance, '
          'debits in one column and credits in the other. It is a working '
          '{paper}, not a statement, and no user ever sees it.',
          'The two columns always agree, and they agree for a mechanical reason: '
          'every transaction was recorded with equal amounts on both sides, so the '
          'totals cannot differ unless an entry was recorded {incorrectly} on one '
          'side only.',
          'What that equality does not prove is accuracy. An amount posted to the '
          'wrong {account} leaves the columns equal. So does a transaction omitted '
          '{entirely}, because both of its sides are missing together.',
          'A trial balance that balances tells you the arithmetic of the recording '
          'held. It tells you nothing whatever about whether the right amounts '
          'went into the right accounts.'],
         {'paper': ('A working paper. Not a statement, not presented.', ''),
          'incorrectly': ('Only a one-sided error breaks the equality.', ''),
          'account': ('Right amount, wrong place: the columns still agree.',
                      'Students treat a balanced trial balance as proof the books '
                      'are correct. It proves only that the recording was '
                      'arithmetically consistent.'),
          'entirely': ('Both sides missing, so nothing is out of balance.', '')},
         ['statement', 'cash', 'twice']),
        ('fig', 'buckets', 'Four errors a trial balance will not catch',
         [('STILL BALANCES', RUST,
           ['Amount posted to the wrong account',
            'Transaction omitted entirely',
            'Entry recorded twice in full',
            'Compensating errors of equal size', '']),
          ('BREAKS THE BALANCE', IS,
           ['Only one side of an entry posted',
            'Different amounts on the two sides',
            'A figure transposed on one side only', '', '']),
          ('WHAT TO DO', SLATE,
           ['Never treat balancing as proof',
            'Check the accounts, not just the totals',
            'Reconcile to external records', '', ''])],
         'Write one more error of your own in the first column. There are many, '
         'and that is the point.'),

        ('part', 'Part 2 · Sorting the list', 'which account goes where'),

        ('prose', 'Every account in the list belongs to exactly one of two '
                  'families. Temporary accounts — revenue, expenses and '
                  'dividends — measure what happened during the year, and they '
                  'start the next year at zero. Permanent accounts — assets, '
                  'liabilities and equity — carry their balances forward.',
                  'R2'),
        ('prose', 'That division is the same division as the one between the two '
                  'statements. The temporary accounts become the income statement; '
                  'the permanent ones become the balance sheet. Dividends are the '
                  'one account that is temporary without being on the income '
                  'statement: it is closed to retained earnings directly, which is '
                  'why it appeared as its own row in the equity statement.', 'R2'),

        ('task', 'Exercise 7B',
         'Sort the trial balance accounts into the statement each one belongs in.',
         'Sort each account into its column.',
         ['Exercise 7A, and the two paragraphs above.'],
         ['Ask whether the account measures something that happened during the '
          'year, or something that exists at the year end.',
          'Two of these accounts are contra accounts. They belong with the asset '
          'they reduce, not in a column of their own.',
          'One account is temporary but does not appear on the income statement. '
          'Find it.']),
        ('sortgrid', _SORT,
         ['Sales revenue', 'Accumulated depreciation', 'Cost of goods sold',
          'Dividends declared', 'Allowance for credit losses', 'Interest expense',
          'Deferred tax liability', 'Gain on disposal of equipment',
          'Retained earnings, at 1 January'],
         ['INCOME STATEMENT', 'BALANCE SHEET', 'INCOME STATEMENT',
          'NEITHER — equity statement', 'BALANCE SHEET', 'INCOME STATEMENT',
          'BALANCE SHEET', 'INCOME STATEMENT', 'BALANCE SHEET'],
         'Dividends declared is the odd one: temporary, so it is closed at the year '
         'end, but it is a distribution and never an expense.'),
        ('fig', 'fork', 'One question sorts every account in the list',
         [('Does this account measure something that HAPPENED during the year?',
           'YES → temporary: income statement, or the dividend row', IS),
          ('Does it measure something that EXISTS at the year end?',
           'YES → permanent: balance sheet, and it carries forward', BS),
          ('What happens to the temporary ones?',
           'Closed to retained earnings, and they start next year at zero', SCE)]),

        ('part', 'Part 3 · The list itself', 'Northwind at 31 December %s' % Y),

        ('table', _TBH, _tb(), SLATE, _TBW),

        ('task', 'Exercise 7C',
         'Build the income statement from the temporary accounts in the list.',
         'Write the figures from the trial balance into the statement. Use only '
         'the accounts that belong there.',
         ['Exercise 7B', 'Handout 3, for the shape of the statement.'],
         ['Nine accounts in the list are temporary. Find them before you write '
          'anything.',
          'Dividends declared is temporary, and it is not one of the nine. It does '
          'not belong on this statement.',
          'The gain on disposal goes below operating income, not in revenue.']),
        ('stmt', '%s · Income Statement for the year ended 31 December %s'
                 % (N.name, Y),
         [('Revenue', 0, None, ''),
          ('Cost of goods sold', 0, None, ''),
          ('Gross margin', 0, None, 't'),
          ('Selling expenses', 1, None, ''),
          ('Administrative expenses', 1, None, ''),
          ('Depreciation and amortisation', 1, None, ''),
          ('Total operating expenses', 1, None, 't'),
          ('Operating income', 0, None, 't'),
          ('Interest expense', 1, None, ''),
          ('Gain on disposal of equipment', 1, None, ''),
          ('Income before income taxes', 0, None, 't'),
          ('Income tax expense', 1, None, ''),
          ('Net income', 0, None, 't')], IS),
        ('fig', 'ranked', 'The nine temporary accounts, by size',
         [('Sales revenue', N.sales, money(N.sales), IS),
          ('Cost of goods sold', N.cogs, money(N.cogs), RUST),
          ('Selling expenses', N.selling, money(N.selling), RUST),
          ('Administrative expenses', N.admin, money(N.admin), RUST),
          ('Depreciation and amortisation', N.dep_amort, money(N.dep_amort), RUST),
          ('Income tax expense', N.tax, money(N.tax), SLATE),
          ('Interest expense', N.interest, money(N.interest), SLATE),
          ('Gain on disposal', N.gain_disposal, money(N.gain_disposal), SCF)],
         'Teal in, rust and navy out, amber the one gain. Net of all of them, '
         '%s.' % money(N.net_income)),

        ('part', 'Part 4 · Closing, and the figure that moves',
         'why the income statement comes first'),

        ('task', 'Exercise 7D',
         'Explain why retained earnings on the trial balance is not the figure the '
         'balance sheet reports.',
         'Read and complete.',
         ['Exercise 7C'],
         ['Look at the trial balance again. Retained earnings is listed at its '
          'balance on one particular date, and the heading says which.',
          'Blank 2 is what the closing entry does to the temporary accounts.',
          'The final figure is the one you computed in Exercise 7C, adjusted for '
          'one other temporary account.']),
        ('fill', 'R2',
         ['The trial balance shows retained earnings as %s, and that is the balance '
          'at 1 {January}, not at the year end. Nothing has yet been done with the '
          'year’s results.' % money(N.retained_py),
          'At the year end the temporary accounts are {closed}: their balances are '
          'transferred into retained earnings and the accounts are left at zero, '
          'ready to measure the next year.',
          'Two things arrive. Net income of %s is added, and dividends declared of '
          '%s are {deducted}, which is exactly the roll-forward you built in '
          'Handout 4.' % (money(N.net_income), money(N.dividends)),
          'Only now is retained earnings known: %s. This is why the income '
          'statement has to be prepared {before} the balance sheet, even though it '
          'is the balance sheet that gets presented first.'
          % money(N.retained)],
         {'January': ('Opening, not closing. Read the heading.', ''),
          'closed': ('Emptied into retained earnings.', ''),
          'deducted': ('Dividends are temporary too, and they reduce it.',
                       'Students carry the trial balance figure for retained '
                       'earnings straight onto the balance sheet, and the balance '
                       'sheet then fails to balance by exactly net income less '
                       'dividends.'),
          'before': ('The order of preparation is not the order of presentation.',
                     '')},
         ['December', 'opened', 'after']),
        ('fig', 'bridge',
         'Retained earnings on the trial balance', N.retained_py,
         [('Net income closed in, from Exercise 7C', N.net_income),
          ('Dividends declared, closed out', -N.dividends)],
         'Retained earnings on the balance sheet', N.retained),

        ('task', 'Exercise 7E',
         'Build the balance sheet, using the retained earnings figure you have '
         'just produced.',
         'Write the figures into the statement. The equity section uses the '
         'closing figure, not the trial balance figure.',
         ['Exercises 7C and 7D', 'Handout 2, for the shape of the statement.'],
         ['Take the permanent accounts straight from the trial balance, except '
          'retained earnings.',
          'The two contra accounts are deductions. Write them in brackets under '
          'the asset they reduce.',
          'If the two totals do not agree, check retained earnings first. It is '
          'the only figure on this statement that is not copied from the list.']),
        ('stmt', '%s · Balance Sheet at 31 December %s' % (N.name, Y),
         [('Total current assets', 0, None, 't'),
          ('Investments in debt securities', 1, None, ''),
          ('Property, plant and equipment, net', 1, None, ''),
          ('Intangible assets and goodwill', 1, None, ''),
          ('TOTAL ASSETS', 0, None, 't'),
          ('Total current liabilities', 1, None, 't'),
          ('Long-term debt', 1, None, ''),
          ('Deferred tax liability', 1, None, ''),
          ('Total liabilities', 1, None, 't'),
          ('Common stock and paid-in capital', 1, None, ''),
          ('Retained earnings', 1, None, ''),
          ('Accumulated other comprehensive income', 1, None, ''),
          ('Total shareholders’ equity', 1, None, 't'),
          ('TOTAL LIABILITIES AND EQUITY', 0, None, 't')], BS),
        ('fig', 'scale',
         'WHAT THE LIST GIVES YOU DIRECTLY',
         ['Every asset and liability balance', 'Common stock and paid-in capital',
          'Accumulated other comprehensive income',
          'Both contra accounts, as deductions'],
         'WHAT YOU HAVE TO PRODUCE',
         ['Retained earnings at the year end',
          'which needs net income from Exercise 7C',
          'and the dividend from the list',
          'This is the only figure that is not copied']),

        ('watch', 'The single most common failure in this handout is copying '
                  'retained earnings from the trial balance. The balance sheet then '
                  'misses by exactly %s, which is net income less dividends. If '
                  'your balance sheet is out, check that figure before anything '
                  'else.' % money(N.net_income - N.dividends)),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A trial balance balances. This proves that:',
         ['No errors have been made in the accounting records',
          'Every transaction has been recorded in the correct account',
          'Total debits recorded equal total credits recorded',
          'The financial statements will present fairly'],
         2, 'Level A',
         'Balancing proves arithmetic consistency and nothing more. An amount in '
         'the wrong account, a transaction omitted entirely, or an entry recorded '
         'twice all leave the columns equal. (A), (B) and (D) each claim far more '
         'than the equality supports.'),

        ('mcq', 'Which of the following accounts is closed at the end of the '
                'reporting period?',
         ['Accumulated depreciation', 'Dividends declared',
          'Allowance for credit losses', 'Additional paid-in capital'],
         1, 'Level B',
         'Dividends declared is a temporary account closed to retained earnings, '
         'even though it never appears on the income statement. The other three are '
         'permanent balance sheet accounts — and the two contra accounts in '
         '(A) and (C) are permanent despite the word accumulated.'),

        ('mcq', 'A company’s trial balance shows retained earnings of '
                '$600,000, net income for the year of $180,000 and dividends '
                'declared of $50,000. Retained earnings on the balance sheet will '
                'be:',
         ['$600,000', '$730,000', '$780,000', '$550,000'],
         1, 'Level B',
         '$600,000 + $180,000 − $50,000 = $730,000. (A) copies the trial '
         'balance figure, which is the opening balance. (C) omits the dividend. (D) '
         'deducts the dividend but forgets to add net income.'),

        ('mcq', 'Why must the income statement be prepared before the balance '
                'sheet?',
         ['Because the income statement is presented first in the annual report',
          'Because retained earnings on the balance sheet cannot be known until '
          'net income has been determined',
          'Because the balance sheet depends on the cash flow statement',
          'Because the trial balance does not include revenue accounts'],
         1, 'Level C',
         'The balance sheet needs closing retained earnings, which needs net '
         'income. (A) reverses presentation and preparation — they are not the '
         'same order. (C) is false. (D) is false: the trial balance includes every '
         'account.'),

        ('mcq', 'An accountant posts a $9,000 payment for insurance to the '
                'administrative expenses account instead of to prepaid expenses. '
                'The trial balance will:',
         ['Fail to balance by $9,000', 'Fail to balance by $18,000',
          'Still balance, although the statements will be wrong',
          'Still balance, and the statements will be unaffected'],
         2, 'Level B',
         'Both sides of the entry were recorded, so the columns still agree; but an '
         'expense has been overstated and an asset omitted. (D) is the trap: '
         'balancing and correctness are different things, which is the point of '
         'Part 1.'),

        ('mcq', 'Northwind’s trial balance totals %s on each side. After the '
                'statements are prepared, total assets are %s. The difference '
                'between these two figures is explained by:'
                % (money(N.tb_debits), money(N.total_assets)),
         ['An error in the trial balance',
          'The trial balance including income statement accounts and contra '
          'accounts, which the balance sheet nets or excludes',
          'The omission of retained earnings from the balance sheet',
          'Deferred tax, which appears in only one of the two'],
         1, 'Level C',
         'A trial balance lists every account at its gross balance, including all '
         'the temporary ones and both contra accounts. The balance sheet reports '
         'only permanent accounts, and nets the contras against their assets. The '
         'two totals are not comparable and were never meant to be.'),

        ('mcq', 'A cost has been incurred but not yet invoiced at the year end. The '
                'adjusting entry required is:',
         ['Debit an expense, credit a liability',
          'Debit a liability, credit an expense',
          'Debit an asset, credit an expense',
          'No entry, because no invoice has been received'],
         0, 'Level B',
         'An accrued expense belongs to the year in which it was incurred, so the '
         'expense is recognised and a liability is created. (D) is cash-basis '
         'thinking: the invoice is evidence, not the event. (C) describes a '
         'prepayment, which is the opposite situation.'),

        ('tip', 'When a question hands you a trial balance, your first move is to '
                'mark every account T or P — temporary or permanent. Both '
                'statements then write themselves, and you will not copy retained '
                'earnings into the wrong place.'),
    ],

    key_extra=[
        ('h3', 'Exercise 7C · the completed income statement'),
        ('stmt', '%s · Income Statement for the year ended 31 December %s'
                 % (N.name, Y),
         [('Revenue', 0, money(N.sales), ''),
          ('Cost of goods sold', 0, money(-N.cogs), ''),
          ('Gross margin', 0, money(N.gross_margin), 't'),
          ('Selling expenses', 1, money(N.selling), ''),
          ('Administrative expenses', 1, money(N.admin), ''),
          ('Depreciation and amortisation', 1, money(N.dep_amort), ''),
          ('Total operating expenses', 1, money(N.opex), 't'),
          ('Operating income', 0, money(N.operating_income), 't'),
          ('Interest expense', 1, money(-N.interest), ''),
          ('Gain on disposal of equipment', 1, money(N.gain_disposal), ''),
          ('Income before income taxes', 0, money(N.pretax), 't'),
          ('Income tax expense', 1, money(-N.tax), ''),
          ('Net income', 0, money(N.net_income), 't')], IS),
        ('h3', 'Exercise 7E · the completed balance sheet, in summary form'),
        ('stmt', '%s · Balance Sheet at 31 December %s' % (N.name, Y),
         [('Total current assets', 0, money(N.current_assets), 't'),
          ('Investments in debt securities', 1, money(N.afs), ''),
          ('Property, plant and equipment, net', 1, money(N.ppe_net), ''),
          ('Intangible assets and goodwill', 1,
           money(N.intangibles + N.goodwill), ''),
          ('TOTAL ASSETS', 0, money(N.total_assets), 't'),
          ('Total current liabilities', 1, money(N.current_liabilities), 't'),
          ('Long-term debt', 1, money(N.ltd), ''),
          ('Deferred tax liability', 1, money(N.dtl), ''),
          ('Total liabilities', 1, money(N.total_liabilities), 't'),
          ('Common stock and paid-in capital', 1,
           money(N.common_stock + N.apic), ''),
          ('Retained earnings', 1, money(N.retained), ''),
          ('Accumulated other comprehensive income', 1, money(N.aoci), ''),
          ('Total shareholders’ equity', 1, money(N.equity), 't'),
          ('TOTAL LIABILITIES AND EQUITY', 0,
           money(N.total_liabilities + N.equity), 't')], BS),
    ],
)
