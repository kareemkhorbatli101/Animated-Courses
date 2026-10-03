# -*- coding: utf-8 -*-
"""Handout 1.4 — Debits, credits and normal balances  (from section 1.3)

Figure F01-04's six account types, the expanded equation, the two contra
accounts the section names, and the three false-friend warnings that belong to
this section.
"""

_F0104H = ['Account type', 'It increases with a', 'Its normal balance is a',
           'Side of the expanded equation']
_F0104 = [
    (['Assets', 'debit', 'debit', 'left'], 'w'),
    (['Expenses', None, None, None], 'd'),
    (['Dividends', None, None, None], 'd'),
    (['Liabilities', None, None, None], 'd'),
    (['Equity', None, None, None], 'd'),
    (['Revenues', None, None, None], 'd'),
]
_F0104A = ['debit', 'debit', 'left',
           'debit', 'debit', 'left',
           'credit', 'credit', 'right',
           'credit', 'credit', 'right',
           'credit', 'credit', 'right']


HANDOUT = dict(
    n=4, book='CMA Part 1 · Section A · Chapter 1', source='1.3',
    title='Debits, credits and normal balances',
    covers=['1.3-a', '1.3-b', '1.3-c', '1.3-d', '1.3-j', '1.3-k', '1.3-l'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.3 again before page 2', exercises=[

            dict(t='T5',
                 d='Complete the table. Write debit or credit in the two '
                   'middle columns and left or right in the last. The first '
                   'row is done.',
                 data=('The expanded equation, as the section writes it',
                       ['Accounts on the left side of the equation — '
                        'assets, expenses and dividends — increase with '
                        'a debit. Accounts on the right side — '
                        'liabilities, equity and revenues — increase '
                        'with a credit.',
                        'Debit means the left side of an account and credit '
                        'means the right side. An account’s normal '
                        'balance is the side that increases it.']),
                 heads=_F0104H, rows=_F0104, ans=_F0104A, w=[24, 24, 26, 26]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'Accountants record every transaction with the '
                     '{double}-entry system. Each transaction affects at '
                     'least {two} accounts, and total {debits} always equal '
                     'total {credits}. This is why the accounting equation '
                     'always balances.',

                     'Debit simply means the {left} side of an account, and '
                     'credit means the {right} side. Neither word means good '
                     'or bad, and neither always means increase. The side '
                     'that increases an account is called its {normal} '
                     'balance.',

                     'A {contra} account reduces a related account, so it '
                     'has the {opposite} normal balance. Accumulated '
                     'depreciation reduces equipment, so it has a credit '
                     'balance even though it belongs with the {assets}.',
                 ],
                 whys={'double': 'The system that records every transaction.',
                       'two': 'The least number of accounts a transaction '
                              'affects.',
                       'debits': 'What always equals the credits.',
                       'credits': 'The other side.',
                       'left': 'What debit means.',
                       'right': 'What credit means.',
                       'normal': 'The side that increases the account.',
                       'contra': 'An account that reduces a related one.',
                       'opposite': 'The balance a contra account carries.',
                       'assets': 'Where accumulated depreciation belongs.'},
                 extras=['single', 'nominal', 'same', 'liabilities']),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T6', d='Write Dr if the account normally has a debit '
                 'balance and Cr if it normally has a credit balance.',
                 items=['cash', 'accounts payable', 'sales revenue',
                        'prepaid rent', 'cost of goods sold',
                        'additional paid-in capital', 'inventory',
                        'accumulated depreciation', 'dividends declared',
                        'notes payable', 'wages expense',
                        'allowance for credit losses'],
                 ans=['Dr', 'Cr', 'Cr', 'Dr', 'Dr', 'Cr', 'Dr', 'Cr', 'Dr',
                      'Cr', 'Dr', 'Cr']),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('Total debits always equal total credits.', True, ''),
                ('A debit always increases an account.', False,
                 'Whether a debit increases an account depends on the type '
                 'of account.'),
                ('Credit means good and debit means bad.', False,
                 'Neither word means good or bad; they mean the right and '
                 'the left side of an account.'),
                ('Accumulated depreciation has a credit balance and belongs '
                 'with the assets.', True, ''),
                ('The allowance for credit losses reduces accounts '
                 'receivable.', True, ''),
                ('A contra account has the same normal balance as the '
                 'account it reduces.', False,
                 'It has the opposite normal balance.'),
                ('Each transaction affects at least two accounts.', True, ''),
            ]),

            dict(t='T4', d='Write the letter of the account each contra '
                 'account reduces, and of the balance it carries.',
                 heads=('Contra account', 'What it does'),
                 left=['accumulated depreciation',
                       'allowance for credit losses',
                       'the normal balance of a contra-asset',
                       'the normal balance of the asset it reduces'],
                 right=['a credit balance', 'a debit balance',
                        'it reduces accounts receivable',
                        'it reduces equipment'],
                 ans=['D', 'C', 'A', 'B']),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which account normally has a credit balance?',
                 ['Prepaid rent', 'Accumulated depreciation',
                  'Cost of goods sold', 'Dividends declared'], 1,
                 'Accumulated depreciation is a contra-asset account, so it '
                 'has the opposite balance to an asset.'),
                ('Which account normally has a debit balance?',
                 ['Accounts payable', 'Sales revenue', 'Prepaid rent',
                  'Additional paid-in capital'], 2,
                 'Prepaid rent is an asset, and assets have debit balances.'),
                ('Accumulated depreciation is BEST described as:',
                 ['a liability for future asset replacement',
                  'a contra-asset account with a credit balance',
                  'an expense of the current period',
                  'a reduction of retained earnings'], 1,
                 'It reduces the cost of equipment on the balance sheet and '
                 'has a credit balance.'),
                ('Orontes buys a bottling line for 1,200 in cash. Which '
                 'journal entry is correct?',
                 ['Debit Cash 1,200; credit Equipment 1,200',
                  'Debit Equipment expense 1,200; credit Cash 1,200',
                  'Debit Equipment 1,200; credit Notes payable 1,200',
                  'Debit Equipment 1,200; credit Cash 1,200'], 3,
                 'One asset increases and another decreases.'),
                ('An account’s normal balance is:',
                 ['the side that increases it',
                  'always a debit', 'the side that reduces it',
                  'the balance it had at the start of the year'], 0,
                 'The normal balance is the side that increases the '
                 'account.'),
                ('Which three account types increase with a debit?',
                 ['Assets, liabilities and equity',
                  'Assets, expenses and dividends',
                  'Liabilities, equity and revenues',
                  'Revenues, expenses and dividends'], 1,
                 'They are the accounts on the left side of the expanded '
                 'equation.'),
                ('The double-entry system is the reason that:',
                 ['every account has a normal balance',
                  'the accounting equation always balances',
                  'contra accounts exist',
                  'revenues are recorded when earned'], 1,
                 'Total debits always equal total credits, so the equation '
                 'always balances.'),
            ]),

            dict(t='T7', d='One item in each group does not belong with the '
                 'other three. Ring its letter.',
                 groups=[(['assets', 'expenses', 'dividends', 'revenues'], 3),
                         (['accumulated depreciation',
                           'allowance for credit losses', 'accounts payable',
                           'a contra account'], 2)]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the warning that belongs to '
                 'each word. All three are words that look familiar and are '
                 'not.',
                 heads=('Word', 'The warning'),
                 left=['استهلاك',
                       'مخصص', 'credit'],
                 right=['Arabic uses one word for two different things: an '
                        'allowance reduces an asset, a provision is a '
                        'liability',
                        'Gulf texts use it for depreciation, but it also '
                        'means consumption; in English always say '
                        'depreciation',
                        'Your bank credits your account when it receives '
                        'your money, which is the bank’s view and not '
                        'yours'],
                 ans=['B', 'A', 'C']),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['double-entry system', 'debit', 'credit',
                       'normal balance', 'journal entry', 'T-account',
                       'trial balance', 'contra account',
                       'accumulated depreciation',
                       'allowance for credit losses', 'accounts receivable',
                       'accounts payable', 'inventory',
                       'cost of goods sold', 'notes payable'],
                 right=['ميزان المراجعة',
                        'نظام القيد المزدوج',
                        'مدين',
                        'الذمم المدينة (المدينون)',
                        'دائن',
                        'الرصيد الطبيعي',
                        'قيد اليومية',
                        'حساب على شكل حرف T',
                        'حساب مقابل (حساب عكسي)',
                        'مجمع الإهلاك (مجمع الاستهلاك / الاهتلاك)',
                        'مخصص الخسائر الائتمانية',
                        'الذمم الدائنة (الدائنون)',
                        'المخزون',
                        'تكلفة البضاعة المباعة',
                        'أوراق الدفع'],
                 ans=['B', 'C', 'E', 'F', 'G', 'H', 'A', 'I', 'J', 'K', 'D',
                      'L', 'M', 'N', 'O']),
        ]),
    ],
)
