# -*- coding: utf-8 -*-
"""Handout 1.4 — Debits and credits, and where a transaction goes."""

HANDOUT = dict(
    id='1.4',
    n=4,
    pages=7,
    title='Debits and credits',
    sub='Left and right · the normal balance · contra accounts '
        '· the road from a document to a statement',
    covers=['sec:1.3', 'fig:F01-04', 'box:FALSE-FRIEND ALERT:1.3',
            'box:TERM BRIDGE:1.3', 'sc:SC3-1', 'p:P08', 'p:P09',
            'term:double-entry system', 'term:debit', 'term:credit',
            'term:normal balance', 'term:T-account', 'term:trial balance',
            'term:contra account', 'term:accumulated depreciation',
            'term:allowance for credit losses', 'term:journal entry'],
    skills=[('drcr', 3), ('normalbalance', 3), ('contra', 2),
            ('pipeline', 3)],
    flow=[
        ('speed', [
            'Equity splits into which two parts?',
            'Does a dividend reduce net income?',
            'Revenue comes from which kind of operations?',
            'The IFRS name for additional paid-in capital is',
            'Assets = liabilities +',
            'A gain comes from which kind of event?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Debit is a side, not a verdict'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Your bank tells you it has credited your account after '
                   'you paid money in. From the bank’s point of view, '
                   'what has the bank now got that it did not have before?',
                 a='An obligation to you — the bank owes you the money',
                 why='The bank credits your account because the bank now owes '
                     'you. That is the bank’s view, not yours. Do not '
                     'use banking habits to guess the accounting side.'),
        ]),
        ('move', 'MODEL',
         'One figure. Read the two columns, then the strip at the foot — '
         'the strip is the memory aid that makes the columns unnecessary.'),
        ('fig', 'drcr_grid'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which side does the figure say a debit is, and which side '
                   'is a credit?',
                 a='Debit is the left side; credit is the right side',
                 why='Debit simply means the left side of an account, and '
                     'credit means the right side.'),
            dict(t='SHORT',
                 q='The figure lists three account types that increase with a '
                   'debit. Name all three.',
                 a='Assets, expenses, dividends declared', why=''),
            dict(t='SHORT',
                 q='And three that increase with a credit. Name all three.',
                 a='Liabilities, equity, revenues', why=''),
            dict(t='FILL',
                 parts=['The expanded equation in the figure reads: Assets + ',
                        16, ' + ', 16, ' = Liabilities + ', 12,
                        ' + ', 14, '.'],
                 a=['Expenses', 'Dividends', 'Equity', 'Revenues'],
                 whys=['', '', '', '']),
            dict(t='TF',
                 q='A debit always increases an account.',
                 a='F',
                 why='Whether a debit increases an account depends on the '
                     'type of account. Neither word means good or bad, and '
                     'neither always means increase.'),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'write the expanded equation out. Whichever side the account sits '
         'on settles it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the one-line rule that the expanded equation gives you, so '
         'you never have to memorise six account types.',
         [['Everything on the ', 12, ' of the expanded equation increases '
           'with a ', 12, '.'],
          ['Everything on the ', 12, ' of it increases with a ', 12, '.']],
         ['left', 'right', 'debit', 'credit'],
         'Accounts on the left side of the equation (assets, expenses and '
         'dividends) increase with a debit. Accounts on the right side '
         '(liabilities, equity and revenues) increase with a credit.'),
        ('contrast',
         'Two accounts that both go up by 300',
         [('Accounts receivable rises by 300',
           ['Which side of the expanded equation is it on?',
            'So which entry raises it?']),
          ('Sales revenue rises by 300',
           ['Which side of the expanded equation is it on?',
            'So which entry raises it?'])],
         'Both rise in the same transaction. Say which is debited and which '
         'is credited, and name the rule that decides.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which account normally has a debit balance?',
                 o=['Accounts payable', 'Sales revenue', 'Prepaid rent',
                    'Additional paid-in capital'],
                 a='C',
                 why='Prepaid rent is an asset, and assets sit on the left of '
                     'the expanded equation. The other three are a liability, '
                     'a revenue and an equity account, all on the right.'),
            dict(t='SORT',
                 q='Write each account under the side that increases it.',
                 regions=['increases with a DEBIT', 'increases with a CREDIT'],
                 items=['Inventory', 'Notes payable', 'Wages expense',
                        'Sales revenue', 'Common stock', 'Dividends declared'],
                 a=['debit: inventory, wages expense, dividends declared',
                    'credit: notes payable, sales revenue, common stock'],
                 whys=['', '']),
        ]),
        ('check',
         'Which side of the expanded equation increases with a debit, and '
         'name one account type on that side that is not an asset.',
         'The left side; expenses (or dividends declared).',
         'redo the READ THE MODEL questions of cycle A with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The normal balance, and the accounts that invert it'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Cash is an asset. On which side of a cash account would '
                   'you expect to find its balance?',
                 a='The left (debit) side', why=''),
        ]),
        ('move', 'MODEL',
         'Two accounts, side by side. The shaded half of each is the side '
         'that increases it.'),
        ('fig', 'taccount'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='The cash account shows 1,500 and 800 on one side and '
                   '1,200 and 40 on the other. Which side holds the balance '
                   'of 1,060, and what is 1,500 + 800 − 1,200 − 40?',
                 a='The debit side; 1,060', why=''),
            dict(t='SHORT',
                 q='The notes payable account has its balance on the opposite '
                   'side from cash. Which side, and why does the figure call '
                   'that normal?',
                 a='The credit side, because a liability increases with a '
                   'credit',
                 why='Each account has a normal balance: the side that '
                     'increases it.'),
            dict(t='SHORT', lines=2,
                 q='Write the sentence in the figure that says what the '
                   'normal balance is NOT.',
                 a='It is never a judgement about whether the account is good',
                 why='Neither debit nor credit means good or bad.'),
        ]),
        ('move', 'MODEL',
         'One more rule, in words rather than a figure: a contra account.'),
        ('panel', 'Accounts that sit with one group and behave like the other',
         [['Contra account', 'What it reduces', 'Its balance', 'Where it sits'],
          ['Accumulated depreciation', 'Equipment', 'credit',
           'with the assets'],
          ['Allowance for credit losses', 'Accounts receivable', 'credit',
           'with the assets']],
         'A contra account reduces a related account, so it takes the '
         'opposite normal balance.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write what makes a contra account different from a liability, given '
         'that both carry a credit balance.',
         [['A contra account ', 16, ' a related account, so it belongs with '
           'the ', 14, ' it reduces.'],
          ['A liability is an ', 18, ' to transfer an economic benefit to '
           'somebody ', 16, ' the company.']],
         ['reduces', 'asset', 'obligation', 'outside'],
         'A contra account reduces a related account, so it has the opposite '
         'normal balance. For example, accumulated depreciation reduces '
         'equipment. It has a credit balance, but it belongs with the '
         'assets.'),
        ('contrast',
         'Two credit balances in the same trial balance',
         [('Accumulated depreciation 900',
           ['What does it reduce?', 'Does the company owe it to anyone?',
            'Where does it belong?']),
          ('Notes payable 1,800',
           ['What does it reduce?', 'Does the company owe it to anyone?',
            'Where does it belong?'])],
         'Both have credit balances. Fill in all three rows and then write '
         'the question that separates a contra-asset from a liability.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which account normally has a credit balance?',
                 o=['Prepaid rent', 'Accumulated depreciation',
                    'Cost of goods sold', 'Dividends declared'],
                 a='B',
                 why='Accumulated depreciation is a contra-asset account, so '
                     'it has the opposite (credit) balance to assets. Prepaid '
                     'rent is an asset, cost of goods sold is an expense, and '
                     'dividends declared reduce equity: all three are '
                     'debits.'),
            dict(t='MCQ',
                 q='Accumulated depreciation is BEST described as:',
                 o=['a liability for future asset replacement.',
                    'a contra-asset account with a credit balance.',
                    'an expense of the current period.',
                    'a reduction of retained earnings.'],
                 a='B',
                 why='It reduces an asset and carries a credit balance. It is '
                     'not owed to anyone, so it is not a liability, and it is '
                     'not itself the period’s expense.'),
        ]),
        ('check',
         'Name the two contra accounts in this cycle, say what each one '
         'reduces, and give the side each one’s balance sits on.',
         'Accumulated depreciation reduces equipment; the allowance for '
         'credit losses reduces accounts receivable. Both carry credit '
         'balances.',
         'redo the contrasting cases in cycle B.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'Where a transaction actually goes'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A trial balance adds up: total debits equal total '
                   'credits. Does that prove every entry was put in the right '
                   'account? Answer yes or no.',
                 a='No', why='It only proves that debits and credits are '
                             'equal.'),
        ]),
        ('move', 'MODEL', 'Five stops, in order.'),
        ('fig', 'pipeline'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Name the five stops in the order the figure gives them.',
                 a='Source document, journal entry, ledger, trial balance, '
                   'four statements', why=''),
            dict(t='SHORT',
                 q='Which stop holds one T-account per item?',
                 a='The ledger', why=''),
            dict(t='SHORT', lines=2,
                 q='Copy the warning the figure gives about a trial balance '
                   'that agrees.',
                 a='It does not prove the entries are right; it only proves '
                   'that debits and credits are equal.',
                 why=''),
        ]),
        ('hunt',
         'Four statements about the road a transaction travels. Mark each one '
         'right, or write what is wrong with it.',
         ['The ledger comes before the journal entry.',
          'A trial balance that agrees proves no account was misclassified.',
          'Every step keeps total debits equal to total credits.',
          'The source document is produced after the statements.'],
         ['wrong — the journal entry comes first, then the ledger',
          'wrong — it only proves the two totals are equal',
          'right',
          'wrong — the source document is the first stop, not the last']),
        ('check',
         'Put these in order: ledger, source document, trial balance, journal '
         'entry, four statements.',
         'Source document, journal entry, ledger, trial balance, four '
         'statements.',
         'redo the READ THE MODEL questions of cycle C.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'drcr_grid',
         'Rebuild the debit and credit figure. Write the three account types '
         'in each column and the full expanded equation at the foot.',
         'Debit (left) increases assets, expenses and dividends declared. '
         'Credit (right) increases liabilities, equity and revenues. '
         'Assets + Expenses + Dividends = Liabilities + Equity + Revenues.'),
        ('teach', 'a student who thinks debit means "bad"',
         'In three or four sentences, explain what debit and credit actually '
         'mean and how to work out which one increases an account.',
         ['left', 'right', 'normal balance', 'expanded equation'],
         'Debit means the left side of an account and credit means the right '
         'side; neither word is a judgement. Each account has a normal '
         'balance, the side that increases it. The expanded equation tells '
         'you which side that is: everything on its left increases with a '
         'debit, everything on its right with a credit.'),
    ],
)
