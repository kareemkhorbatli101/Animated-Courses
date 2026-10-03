# -*- coding: utf-8 -*-
"""Handout 1.11 — Reading the question, and the traps built into the wording."""

STEMS = [
    ['The wording', 'What it is telling you to do'],
    ['MOST likely, or BEST describes',
     'more than one option may be partly true — choose the best one'],
    ['NOT, or EXCEPT',
     'three options are true — find the one that is false'],
    ['immediately after the transaction',
     'ignore later events, such as the cash payment next month'],
    ['net effect',
     'add the increases and the decreases together before you answer'],
]

PHRASES = [
    ['The pattern', 'An example'],
    ['debit X, credit Y', 'Debit Equipment, credit Cash.'],
    ['X is debited (or credited) for an amount',
     'Cash is debited for 1,500.'],
    ['an increase IN the item; an increase OF the amount',
     'an increase in assets of 2,380'],
    ['increase BY the change; increase TO the new total',
     'Equity increased by 1,530.'],
    ['The effect of this transaction is to increase … and decrease '
     '…', 'the shape most exam stems use'],
]

ARABIC = [
    ['The word', 'What it is used for', 'What to write in English'],
    ['استهلاك',
     'used in the Gulf for depreciation, but it also means consumption; '
     'Levant texts often say اهتلاك and '
     'Egyptian texts إهلاك',
     'always depreciation'],
    ['مخصص',
     'one word for two different things: something that reduces an asset, '
     'and something the company owes',
     'an allowance reduces an asset; a provision is a liability'],
    ['credit, as your bank uses it',
     'your bank credits your account when it receives your money, because '
     'the bank now owes you',
     'that is the bank’s view — do not use banking habits to guess '
     'the accounting side'],
]

HANDOUT = dict(
    id='1.11',
    n=11,
    pages=5,
    title='Reading the question',
    sub='Four stem words that change the answer · the language of '
        'effects · words that mislead',
    covers=['box:LANGUAGE FOCUS:reading exam questions',
            'box:LANGUAGE FOCUS:describing the effect',
            'box:FALSE-FRIEND ALERT:1.3', 'box:EXAM TRAP:consolidated'],
    skills=[('stems', 3), ('effectlanguage', 3), ('traps', 0)],
    derived={'2,530': 'equity of 1,000 plus the increase of 1,530, used '
                      'to show the difference between increasing BY and '
                      'increasing TO'},
    flow=[
        ('speed', [
            'Total assets: do you add or deduct accumulated depreciation?',
            'Net income flows into',
            'Which body sets auditing standards?',
            'Cash received in advance creates a',
            'A dividend reduces which equity account?',
            'Debit is which side?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Four words that change the answer'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A question ends "… which of the following is NOT '
                   'true?". How many of the four options are true?',
                 a='Three', why='With NOT or EXCEPT, three options are true '
                                'and you are looking for the false one.'),
        ]),
        ('move', 'MODEL',
         'Four wordings the exam uses, and what each one is instructing '
         'you to do.'),
        ('fig', 'stem_decoder'),
        ('panel', 'The same four, in a line each', STEMS, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='MATCH',
                 q='Write the letter of the instruction beside each wording.',
                 left=['MOST likely', 'EXCEPT',
                       'immediately after the transaction', 'net effect'],
                 right=['three options are true; find the false one',
                        'add the increases and decreases together first',
                        'more than one may be partly true; choose the best',
                        'ignore later events'],
                 a=['C', 'A', 'D', 'B'], whys=['', '', '', '']),
            dict(t='SHORT',
                 q='Which of the four wordings tells you that a later cash '
                   'payment is irrelevant?',
                 a='Immediately after the transaction', why=''),
        ]),
        ('move', 'APPLY',
         'The same facts, asked four ways. Answer all four.'),
        ('items', [
            dict(t='SHORT',
                 q='The board declares a dividend of 50, payable next month. '
                   'What is the effect IMMEDIATELY AFTER the declaration on '
                   'assets?',
                 a='No effect on assets',
                 why='Immediately after means before the cash is paid. '
                     'Liabilities rise by 50 and equity falls by 50.'),
            dict(t='SHORT',
                 q='Orontes issues shares for 1,500 and buys equipment for '
                   '1,200 in cash. What is the NET EFFECT on total assets?',
                 a='An increase of 1,500',
                 why='The share issue raises assets by 1,500; buying '
                     'equipment for cash swaps one asset for another and '
                     'changes no total.'),
            dict(t='MCQ',
                 q='Which of the following is NOT true of a cash dividend '
                   'declared but not yet paid?',
                 o=['It reduces retained earnings.',
                    'It creates a liability.',
                    'It reduces net income.',
                    'It leaves cash unchanged until payment.'],
                 a='C',
                 why='A dividend is a distribution to owners, so it never '
                     'reaches the income statement. The other three are all '
                     'true.'),
            dict(t='MCQ',
                 q='Accumulated depreciation is BEST described as:',
                 o=['an account with a credit balance',
                    'a contra-asset account with a credit balance',
                    'an account related to equipment',
                    'an account in the trial balance'],
                 a='B',
                 why='All four are true. BEST asks for the most complete and '
                     'precise description, which is the one naming both what '
                     'it is and which side it sits on.'),
        ]),
        ('check',
         'A stem says BEST describes and all four options are true. What is '
         'the question actually asking you to compare?',
         'How precisely and completely each option describes the item — '
         'choose the most complete and precise.',
         'redo the matching item in cycle A.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Saying what a transaction did'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Equity was 1,000 and is now 2,530. Complete both: equity '
                   'increased BY ______, and increased TO ______.',
                 a='by 1,530; to 2,530',
                 why='"Increase by" takes the change; "increase to" takes the '
                     'new total.'),
        ]),
        ('move', 'MODEL', 'Five patterns, with the book’s own examples.'),
        ('panel', 'The language of effects', PHRASES, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='FILL',
                 parts=['Using the book’s patterns: there was an '
                        'increase ', 8, ' assets ', 8, ' 2,380.'],
                 a=['in', 'of'],
                 whys=['An increase IN the item, an increase OF the amount.',
                       '']),
            dict(t='SHORT',
                 q='Rewrite "Cash was debited 1,500" using the pattern the '
                   'panel gives.',
                 a='Cash is debited for 1,500', why=''),
            dict(t='TF',
                 q='"Equity increased to 1,530" and "equity increased by '
                   '1,530" mean the same thing.',
                 a='F',
                 why='"To" gives the new total; "by" gives the change.'),
        ]),
        ('hunt',
         'Five sentences written by a student. Mark each right, or write what '
         'is wrong with it.',
         ['Debit Equipment, credit Cash.',
          'There was an increase of assets in 2,380.',
          'Equity increased to 1,530, from 1,000 to 2,530.',
          'Cash is debited for 1,500.',
          'The net effect of the share issue and the equipment purchase is to '
          'increase assets by 1,500.'],
         ['right',
          'wrong — an increase IN assets OF 2,380',
          'wrong — increased BY 1,530, or increased TO 2,530',
          'right',
          'right']),
        ('check',
         'Fill both gaps: an increase ____ liabilities ____ 850.',
         'an increase IN liabilities OF 850.',
         'reread the language-of-effects panel in cycle B.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'Words that mislead a reader coming from Arabic'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='One Arabic word is used for two different accounting '
                   'items: one that reduces an asset, and one the company '
                   'owes. Give the English name for each.',
                 a='An allowance, and a provision',
                 why='An allowance reduces an asset; a provision is a '
                     'liability.'),
        ]),
        ('move', 'MODEL', 'Three habits to unlearn.'),
        ('panel', 'Three words that mislead', ARABIC, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Whatever the regional spelling, what single English word '
                   'should always be written for the wearing out of a '
                   'long-lived asset?',
                 a='Depreciation', why=''),
            dict(t='SHORT',
                 q='Which of the two — an allowance or a provision '
                   '— sits with the assets?',
                 a='An allowance', why='It reduces an asset.'),
            dict(t='SHORT', lines=2,
                 q='Your bank credits your account when you pay money in. '
                   'Explain in one sentence why that does not tell you '
                   'anything about which side to use in your own books.',
                 a='The bank credits because the bank now owes you — '
                   'that is the bank’s liability, not yours',
                 why='Do not use banking habits to guess the accounting '
                     'side.'),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A U.S. GAAP answer refers to the amount set aside against '
                   'receivables that may not be collected. Which name should '
                   'be used?',
                 o=['reserve for bad debts',
                    'allowance for credit losses',
                    'provision for receivables',
                    'depreciation of receivables'],
                 a='B',
                 why='Never say reserve for bad debts in a U.S. GAAP answer. '
                     'A provision is a liability, and depreciation applies to '
                     'long-lived assets.'),
            dict(t='SORT',
                 q='Write each item under what it is.',
                 regions=['reduces an asset', 'is a liability'],
                 items=['allowance for credit losses',
                        'accumulated depreciation', 'a provision',
                        'dividends payable'],
                 a=['reduces an asset: allowance for credit losses, '
                    'accumulated depreciation',
                    'is a liability: a provision, dividends payable'],
                 whys=['', '']),
        ]),
        ('check',
         'Give the English the exam wants for an amount that reduces '
         'receivables, and say what word must never be used for it.',
         'Allowance for credit losses; never "reserve for bad debts".',
         'reread the three-words panel in cycle C.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'stem_decoder',
         'Rebuild the stem figure. Write all four wordings and, beside '
         'each, what it instructs you to do.',
         'MOST likely or BEST describes: choose the most precise and '
         'complete. NOT or EXCEPT: three are true, find the false one. '
         'Immediately after the transaction: ignore later events. Net '
         'effect: add the increases and decreases first.'),
        ('teach', 'a classmate who loses marks on wording rather than on '
                  'accounting',
         'In three or four sentences, explain what to do when a stem says '
         'EXCEPT, what to do when it says immediately after, and why "BEST '
         'describes" is not a trick.',
         ['EXCEPT', 'immediately after', 'BEST', 'precise'],
         'When a stem says NOT or EXCEPT, three of the four options are true '
         'and the task is to find the false one, so read every option rather '
         'than stopping at the first that sounds right. When it says '
         'immediately after the transaction, ignore anything that happens '
         'later, such as a cash payment next month. BEST describes is not a '
         'trick: several options may be partly true, and the task is to pick '
         'the most precise and complete one.'),
    ],
)
