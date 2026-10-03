# -*- coding: utf-8 -*-
"""Handout 1.12 — Chapter 1 review  (from the opener, summary and practice)

The chapter's own learning objectives, its sixteen key terms, the three things
it says are new, the four reading patterns, the summary paragraph as a cloze,
ten of the sixteen practice items, and the written task as a guided cloze.
The French column of the term table is not exercised anywhere, by instruction.
"""

_LOSH = ['LOS', 'After this chapter you can …', 'Level', 'Depth here']
_LOS = [
    (['A.1.a', 'Identify the users of financial statements and what each '
      'user needs.', 'A', 'Full treatment'], 'w'),
    (['A.1.b', None, 'B', None], 'd'),
    (['A.1.e', None, 'B', None], 'd'),
    (['A.2.z', None, 'B', None], 'd'),
    (['Foundation', None, 'A', None], 'd'),
]
_LOSA = ['State what each of the four financial statements is for.',
         'Overview (full in Chapters 2-5)',
         'Show how a transaction changes the accounting equation, and '
         'classify simple transactions.',
         'Introduction (full in Chapters 2-5)',
         'Explain the accrual basis and the matching principle.',
         'Introduction (full in Chapter 11)',
         'Describe who sets U.S. GAAP and IFRS, and which rules the CMA exam '
         'uses.',
         'Background']


HANDOUT = dict(
    n=12, book='CMA Part 1 · Section A · Chapter 1',
    source='the chapter opener, summary and practice set',
    title='Chapter 1 review',
    covers=['C1-A', 'C1-B', 'C1-C', '1.6-f', 'CS', 'W'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read the chapter summary again before page 2', exercises=[

            dict(t='T3', d='Complete the chapter summary. Write one word in '
                 'each numbered space.',
                 paras=[
                     'General-purpose financial statements serve investors, '
                     '{lenders} and other creditors. Useful information is '
                     '{relevant} and faithfully represented. The statements '
                     'are built from {elements} that the accounting '
                     '{equation} links: assets equal {liabilities} plus '
                     'equity.',

                     'Every transaction is recorded with equal {debits} and '
                     'credits. The {accrual} basis records revenues when '
                     'they are {earned} and expenses when they are '
                     '{incurred}, and it {matches} expenses to the revenues '
                     'they help to produce.',

                     'The {FASB} writes U.S. GAAP in the ASC, and the IASB '
                     'writes {IFRS}. The CMA exam uses U.S. GAAP and tests '
                     'the main IFRS {differences}. The balance sheet shows '
                     'one {date}, while the other three statements cover a '
                     'period, and net income and cash link them.',
                 ],
                 whys={'lenders': 'The second group of primary users.',
                       'relevant': 'One of the two fundamental qualities.',
                       'elements': 'What the statements are built from.',
                       'equation': 'What links the elements.',
                       'liabilities': 'Assets equal these plus equity.',
                       'debits': 'Equal to the credits.',
                       'accrual': 'The basis U.S. GAAP uses.',
                       'earned': 'When revenue is recorded.',
                       'incurred': 'When an expense is recorded.',
                       'matches': 'What the accrual basis does to expenses.',
                       'FASB': 'Writes U.S. GAAP in the ASC.',
                       'IFRS': 'What the IASB writes.',
                       'differences': 'What Section A also tests.',
                       'date': 'What the balance sheet shows.'},
                 extras=['owners', 'prudent', 'cash', 'period', 'SEC']),

            dict(t='T5',
                 d='Complete the chapter’s own learning objectives. The '
                   'first row is done.',
                 data=('The depths the chapter claims',
                       ['Full treatment · Overview (full in Chapters '
                        '2-5) · Introduction (full in Chapters 2-5) '
                        '· Introduction (full in Chapter 11) · '
                        'Background']),
                 heads=_LOSH, rows=_LOS, ans=_LOSA, w=[12, 48, 10, 30]),
        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Under the U.S. conceptual framework, the objective of '
                 'general-purpose financial reporting is to provide useful '
                 'information mainly to:',
                 ['the board of directors and senior management',
                  'government statisticians and tax authorities',
                  'existing and potential investors, lenders and other '
                  'creditors',
                  'the company’s employees and trade unions'], 2,
                 'They provide resources and cannot demand special '
                 'reports.'),
                ('A bank is deciding whether to renew a five-year loan to '
                 'Orontes. Which information will the bank find MOST '
                 'useful?',
                 ['The highest and lowest share price during the year',
                  'The company’s ability to generate cash to pay '
                  'interest and repay principal',
                  'The number of products the company sells',
                  'The names of the company’s major shareholders'], 1,
                 'A lender’s main question is repayment.'),
                ('Two companies use the same accounting methods, so an '
                 'analyst can compare their results. This quality is called:',
                 ['relevance', 'verifiability', 'faithful representation',
                  'comparability'], 3,
                 'Comparability lets users identify similarities and '
                 'differences between companies or periods.'),
                ('Which transaction changes total assets but does NOT change '
                 'total equity?',
                 ['Borrowing cash from a bank', 'Paying wages in cash',
                  'Selling goods on credit at a profit',
                  'Buying equipment for cash'], 0,
                 'Assets and liabilities both increase, and equity does not '
                 'change.'),
                ('A company has assets of 900 and liabilities of 350. It '
                 'then borrows 100 in cash and declares and pays a cash '
                 'dividend of 40. What is total equity after these '
                 'transactions?',
                 ['450', '510', '550', '610'], 1,
                 'Equity starts at 550, borrowing does not change it, and '
                 'the dividend reduces it by 40.'),
                ('Which account normally has a debit balance?',
                 ['Accounts payable', 'Sales revenue', 'Prepaid rent',
                  'Additional paid-in capital'], 2,
                 'Prepaid rent is an asset, and assets have debit '
                 'balances.'),
                ('Accumulated depreciation is BEST described as:',
                 ['a liability for future asset replacement',
                  'a contra-asset account with a credit balance',
                  'an expense of the current period',
                  'a reduction of retained earnings'], 1,
                 'It reduces the cost of equipment and has a credit '
                 'balance.'),
                ('Which statement about the matching principle is correct?',
                 ['Expenses are recognized in the period in which they are '
                  'paid.',
                  'Revenues are recognized in the period in which cash is '
                  'received.',
                  'All costs are capitalized as assets until related revenue '
                  'is earned.',
                  'Expenses are recognized in the same period as the '
                  'revenues they help to produce.'], 3,
                 'That is the definition of matching.'),
                ('Which statement explains why retained earnings changed '
                 'during the year?',
                 ['The statement of changes in equity', 'The balance sheet',
                  'The statement of cash flows', 'The income statement'], 0,
                 'It shows the opening balance, net income, dividends and '
                 'the closing balance.'),
                ('Which statement is TRUE?',
                 ['The PCAOB writes U.S. GAAP for public companies.',
                  'The IASB writes U.S. GAAP for companies that also report '
                  'under IFRS.',
                  'The ASC contains IFRS for U.S. companies.',
                  'The SEC has legal authority over public company reporting '
                  'and recognizes the FASB as the standard setter.'], 3,
                 'The SEC has the authority, the FASB sets the standards and '
                 'the ASC holds U.S. GAAP.'),
            ]),
        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3 before page 4', exercises=[

            dict(t='T3', d='Complete the answer to the written task: why a '
                 'cash dividend reduces retained earnings but does not '
                 'appear in the income statement.',
                 paras=[
                     'A cash dividend is a {distribution} of the '
                     'company’s resources to its {owners}. It is not an '
                     '{expense}, because it does not help the company earn '
                     '{revenue}; it simply returns part of the profits to '
                     'the shareholders.',

                     'The income statement shows only revenues, expenses, '
                     'gains and losses, so the dividend does not reduce '
                     '{net} income. Instead it reduces {retained} earnings '
                     'directly, and the statement of changes in {equity} '
                     'shows the reduction.',
                 ],
                 whys={'distribution': 'What a dividend is.',
                       'owners': 'Who it goes to.',
                       'expense': 'What it is not.',
                       'revenue': 'What it does not help the company earn.',
                       'net': 'The figure it does not reduce.',
                       'retained': 'What it reduces instead.',
                       'equity': 'The statement that shows the reduction.'},
                 extras=['liability', 'cash', 'gross', 'peripheral']),

            dict(t='T4', d='Write the letter of what each exam wording tells '
                 'you to do.',
                 heads=('The wording', 'What it tells you'),
                 left=['MOST likely, or BEST describes', 'NOT, or EXCEPT',
                       'immediately after the transaction', 'net effect'],
                 right=['add the increases and decreases together before '
                        'you answer',
                        'ignore later events, such as the cash payment next '
                        'month',
                        'more than one option may be partly true, so choose '
                        'the best one',
                        'three options are true, so find the one that is '
                        'false'],
                 ans=['C', 'D', 'B', 'A']),

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('The primary users are existing and potential investors, '
                 'lenders and other creditors.', True, ''),
                ('Equity is the residual interest in the assets after the '
                 'liabilities are deducted.', True, ''),
                ('A debit always increases an account.', False,
                 'Whether a debit increases an account depends on the type '
                 'of account.'),
                ('The cash basis is acceptable under U.S. GAAP.', False,
                 'It is simple, but it is not acceptable.'),
                ('The IASB writes IFRS.', True, ''),
                ('The balance sheet covers a period.', False,
                 'It reports at a single date.'),
            ]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4, then go back to any section you lost items '
                  'in', exercises=[

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)',
                        'العربية'),
                 left=['financial statements', 'primary users',
                       'accounting equation', 'debit', 'credit',
                       'accrual basis', 'matching principle', 'dividend'],
                 right=['أساس الاستحقاق',
                        'القوائم المالية',
                        'مدين',
                        'المعادلة المحاسبية',
                        'دائن',
                        'توزيعات الأرباح',
                        'المستخدمون الرئيسيون',
                        'مبدأ مقابلة الإيرادات بالمصروفات'],
                 ans=['B', 'G', 'D', 'C', 'E', 'A', 'H', 'F']),

            dict(t='T6', d='Write the number of the section of Chapter 1 '
                 'that settles each question: 1, 2, 3, 4, 5 or 6.',
                 items=['who the primary users are',
                        'what the residual interest is',
                        'which side of an account a credit is',
                        'when an expense is recorded',
                        'which body writes IFRS',
                        'which statement reports at a single date'],
                 ans=['1', '2', '3', '4', '5', '6']),

            dict(t='T4', d='Write the letter that completes each of the '
                 'three things the chapter says are new.',
                 heads=('What is new', 'Why'),
                 left=['The English names',
                       'The U.S. rules',
                       'The exam wording'],
                 right=['CMA questions use exact terms, and one word can '
                        'change the answer',
                        'some are close to your language and some are not',
                        'the CMA exam uses U.S. GAAP, and some names and '
                        'some rules differ from IFRS'],
                 ans=['B', 'C', 'A']),

            dict(t='T7', d='One item in each group does not belong with the '
                 'other three. Ring its letter.',
                 groups=[(['relevance', 'faithful representation',
                           'comparability', 'materiality'], 2),
                         (['FASB', 'SEC', 'PCAOB', 'ASC'], 3),
                         (['balance sheet', 'income statement',
                           'trial balance', 'statement of cash flows'], 2)]),
        ]),
    ],
)
