# -*- coding: utf-8 -*-
"""Handout 1.1 — Who uses financial statements, and why?  (from section 1.1)

Every user, decision, question, quality, verb and term below is in section 1.1
as written. The three questions in the option pool of Exercise 5 that are not
rows of Figure F01-02 are the three user questions the same section lists a few
paragraphs earlier, so the pool holds more options than cells without anything
being invented to fill it.
"""

# The option pool for Exercise 5, sorted so the letters cannot drift away from
# the answers: a letter is an index into the sorted list, computed once.
_POOL = sorted([
    'Buy, hold or sell shares',
    'Lend, renew or stop a loan',
    'Sell on credit, set credit terms',
    'Stay, negotiate pay',
    'Sign long-term contracts',
    'Tax, oversight, statistics',
    'Plan and control operations',
    'Will the company create future cash flows and returns?',
    'Can the company pay interest and repay the principal on time?',
    'Will the company pay its bills when due?',
    'Is the company stable and profitable?',
    'Will the company continue to supply us?',
    'Does the company follow the rules and pay its taxes?',
    'Not a primary user: can use internal reports',
    'Income statement, cash flows, balance sheet',
    'Cash flows, balance sheet',
    'Balance sheet (short-term items), cash flows',
    'Income statement',
    'Balance sheet, income statement',
    'All statements and notes',
    'Internal management reports',
    # three more questions from the same section, so the pool is not exhausted
    # by the table and the last row cannot be reached by elimination
    'What does the company have, and what does it owe?',
    'How did the company perform in the period?',
    'Where did cash come from, and where did it go?',
])
_A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


def _l(t):
    return _A[_POOL.index(t)]


_F0102 = [
    ('Investors (shareholders)', 'Buy, hold or sell shares',
     'Will the company create future cash flows and returns?',
     'Income statement, cash flows, balance sheet'),
    ('Lenders (banks, bondholders)', 'Lend, renew or stop a loan',
     'Can the company pay interest and repay the principal on time?',
     'Cash flows, balance sheet'),
    ('Other creditors (suppliers)', 'Sell on credit, set credit terms',
     'Will the company pay its bills when due?',
     'Balance sheet (short-term items), cash flows'),
    ('Employees and unions', 'Stay, negotiate pay',
     'Is the company stable and profitable?', 'Income statement'),
    ('Customers', 'Sign long-term contracts',
     'Will the company continue to supply us?',
     'Balance sheet, income statement'),
    ('Governments and regulators', 'Tax, oversight, statistics',
     'Does the company follow the rules and pay its taxes?',
     'All statements and notes'),
    ('Managers (internal)', 'Plan and control operations',
     'Not a primary user: can use internal reports',
     'Internal management reports'),
]

_T5ROWS = ([([_F0102[0][0]] + [_l(x) for x in _F0102[0][1:]], 'w')]
           + [([u, None, None, None], 'd') for u, _d, _q, _s in _F0102[1:]])
_T5ANS = [_l(x) for _u, *rest in _F0102[1:] for x in rest]


HANDOUT = dict(
    n=1, book='CMA Part 1 · Section A · Chapter 1', source='1.1',
    title='Who uses financial statements, and why?',
    covers=['1.1-a', '1.1-b', '1.1-c', '1.1-d', '1.1-e', '1.1-f', '1.1-g',
            '1.1-h', '1.1-i', '1.1-j', '1.1-k', '1.1-l', '1.1-m', '1.1-n'],
    pages=[

        # ---- page 1 -----------------------------------------------------
        dict(redo='read section 1.1 again before page 2', exercises=[

            dict(t='T1', d='Ring one letter for each question.', items=[
                ('Which group is a primary user of general-purpose financial '
                 'statements?',
                 ['The company’s managers',
                  'The company’s internal auditors',
                  'The company’s board of directors',
                  'Existing and potential lenders'], 3,
                 'The primary users are existing and potential investors, '
                 'lenders and other creditors.'),
                ('Information helps an investor forecast next year’s cash '
                 'flows. This information has:',
                 ['predictive value', 'verifiability', 'comparability',
                  'timeliness'], 0,
                 'Predictive value is part of relevance: the information helps '
                 'users predict the future.'),
                ('General-purpose financial statements are:',
                 ['reports prepared for one special reader',
                  'reports for many readers at the same time',
                  'internal management reports',
                  'tax returns and tax schedules'], 1,
                 'Reports for many readers at the same time, not for one '
                 'special reader.'),
                ('Managers are users of financial statements but not primary '
                 'users, because:',
                 ['they give no resources to the company',
                  'they can get any internal information they need',
                  'they are the people who prepare the statements',
                  'they are employees rather than investors'], 1,
                 'Managers can get any internal information they need, and '
                 'reporting for managers is management accounting.'),
                ('The two fundamental qualities of useful information are:',
                 ['relevance and comparability',
                  'relevance and faithful representation',
                  'faithful representation and timeliness',
                  'verifiability and understandability'], 1,
                 'Relevance and faithful representation are the two '
                 'fundamental qualities.'),
                ('An item is material if:',
                 ['it is large in amount',
                  'leaving it out or stating it wrongly could change '
                  'users’ decisions',
                  'it appears on the face of the balance sheet',
                  'it is explained in the notes'], 1,
                 'Materiality is part of relevance, and the test is the '
                 'effect on users’ decisions.'),
                ('Which statement answers the question “where did cash '
                 'come from, and where did it go?”',
                 ['The balance sheet', 'The income statement',
                  'The statement of cash flows',
                  'The statement of changes in equity'], 2,
                 'The section pairs each of the three user questions with one '
                 'statement, and the cash question is the statement of cash '
                 'flows.'),
                ('The cost constraint means that:',
                 ['financial information must be free to users',
                  'the benefit of reporting information should be greater '
                  'than its cost',
                  'cost must itself be measured faithfully',
                  'only material costs need to be reported'], 1,
                 'The benefit of reporting information should be greater than '
                 'its cost.'),
            ]),

        ]),

        # ---- page 2 -----------------------------------------------------
        dict(redo='redo page 2 before page 3', exercises=[

            dict(t='T2', d='Ring T or F for each statement.', items=[
                ('The four main statements are the balance sheet, the income '
                 'statement, the statement of changes in equity and the '
                 'statement of cash flows.', True, ''),
                ('Primary users can usually ask the company for special '
                 'reports in the shape they want.', False,
                 'They usually cannot, so they depend on the published '
                 'statements.'),
                ('Comparability is one of the fundamental qualities of useful '
                 'information.', False,
                 'It is one of the four enhancing qualities.'),
                ('Faithful representation means the information is complete, '
                 'neutral and free from error.', True, ''),
                ('Employees and unions are primary users of general-purpose '
                 'financial statements.', False,
                 'They are users, but not primary users.'),
                ('Relevance includes materiality.', True, ''),
                ('Reporting for managers is called management accounting.',
                 True, ''),
                ('Stewardship means how well the managers used the '
                 'owners’ resources.', True, ''),
            ]),

            dict(t='T3', d='Write one word in each numbered space.',
                 paras=[
                     'Most companies prepare {general}-purpose financial '
                     'statements: reports for many readers at the same time, '
                     'not for one special reader. The U.S. conceptual '
                     'framework names the most important readers as existing '
                     'and potential investors, lenders and other creditors, '
                     'and calls them the {primary} users. They give '
                     '{resources} to the company — money, goods or '
                     'credit — and they usually cannot ask for special '
                     'reports, so they depend on the {published} statements.',

                     'There are two fundamental qualities. The first is '
                     '{relevance}, which means the information can make a '
                     'difference to a decision: it helps users predict the '
                     'future, which is {predictive} value, or check their '
                     'past predictions, which is {confirmatory} value. The '
                     'second is {faithful} representation, which means the '
                     'information shows what it claims to show: complete, '
                     '{neutral} and free from error.',

                     'Four enhancing qualities make information even more '
                     'useful: {comparability}, verifiability, {timeliness} '
                     'and understandability. There is also a cost '
                     '{constraint}: the {benefit} of reporting information '
                     'should be greater than its cost.',
                 ],
                 whys={
                     'general': 'One report, for readers who cannot ask for '
                                'their own.',
                     'primary': 'The framework’s own word for the named '
                                'readers.',
                     'resources': 'Money, goods or credit.',
                     'published': 'What the primary users depend on.',
                     'relevance': 'Can make a difference to a decision.',
                     'predictive': 'Helps users predict the future.',
                     'confirmatory': 'Lets users check a past prediction.',
                     'faithful': 'Shows what it claims to show.',
                     'neutral': 'Complete, neutral, free from error.',
                     'comparability': 'One of the four enhancing qualities.',
                     'timeliness': 'Another of the four.',
                     'constraint': 'Not a quality at all.',
                     'benefit': 'What must exceed the cost.',
                 },
                 extras=['material', 'secondary', 'verifiable', 'prudent']),

        ]),

        # ---- page 3 -----------------------------------------------------
        dict(redo='redo page 3; every answer is in the pool above it',
             exercises=[

            dict(t='T6', d='Write F for a fundamental quality, E for an '
                 'enhancing one, C for a constraint.',
                 items=['comparability', 'faithful representation',
                        'relevance', 'timeliness', 'understandability',
                        'verifiability', 'cost'],
                 ans=['E', 'F', 'F', 'E', 'E', 'E', 'C']),

            dict(t='T5',
                 d='Write the letter of the right option in each numbered '
                   'box. The first row is done. An option is used once at '
                   'most, and the pool holds more options than there are '
                   'boxes.',
                 data=('The pool of options for this table',
                       [('%s' % _A[i], t) for i, t in enumerate(_POOL)]),
                 heads=['User', 'Decision', 'Key question',
                        'Statements used most'],
                 rows=_T5ROWS, ans=_T5ANS, w=[34, 22, 22, 22]),
        ]),

        # ---- page 4 -----------------------------------------------------
        dict(redo='redo page 4 before you leave the handout', exercises=[

            dict(t='T4', d='Write the letter of the meaning beside each verb.',
                 heads=('Verb', 'Meaning in financial reporting'),
                 left=['recognize', 'measure', 'record', 'present',
                       'disclose'],
                 right=['decide the amount of the item',
                        'enter the item in the accounts (journal and ledger)',
                        'explain the item in the notes to the statements',
                        'include an item in the statements, with a name and '
                        'an amount',
                        'show the item on the face of a statement'],
                 ans=['D', 'A', 'B', 'E', 'C']),

            dict(t='T3', d='Write the right verb in each space, in the right '
                 'form.',
                 paras=['Orontes {recognizes} revenue when it delivers the '
                        'goods. It {measures} the revenue at the invoice '
                        'price. It {presents} revenue in the income '
                        'statement, and it {discloses} its revenue policy in '
                        'the notes.'],
                 whys={'recognizes': 'Includes it, with a name and an amount.',
                       'measures': 'Decides the amount.',
                       'presents': 'Shows it on the face of a statement.',
                       'discloses': 'Explains it in the notes.'},
                 extras=['records', 'reports', 'reviews']),

            dict(t='T4', d='Write the letter of the Arabic term beside each '
                 'English one.',
                 heads=('English (exam term)', 'العربية'),
                 left=['financial statements',
                       'general-purpose financial statements', 'primary users',
                       'relevance', 'faithful representation', 'materiality',
                       'recognize', 'disclose'],
                 right=['التمثيل الصادق',
                        'القوائم المالية',
                        'القوائم المالية ذات الغرض العام',
                        'الملاءمة',
                        'المستخدمون الرئيسيون',
                        'الأهمية النسبية',
                        'يعترف (الاعتراف)',
                        'يُفصح (الإفصاح)'],
                 ans=['B', 'C', 'E', 'D', 'A', 'F', 'G', 'H']),
        ]),
    ],
)
