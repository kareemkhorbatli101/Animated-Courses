# -*- coding: utf-8 -*-
"""Section 1.1, Who uses financial statements and why, turned into exercises.

Every fact, list, term, user, quality, verb and example below is taken from
section 1.1 of the textbook as written. Nothing is added: the two
multiple-choice items that the section already carried as SC1-1 and SC1-2 are
items 1 and 2 here, the seven users and their key questions are the seven rows
of Figure F01-02, the five verbs and the Orontes sentence are the Language
Focus box, and the qualities are the two fundamental, the four enhancing and
the one constraint the section names.
"""

TITLE = 'Handout 1.1 · Who Uses Financial Statements, and Why?'
LOCATOR = ('CMA Part 1 · Section A · Chapter 1, The Language and '
           'Framework of Financial Reporting · Section 1.1')
RUNNING = 'Handout 1.1'

MCQ = [
    ('Which group is a primary user of general-purpose financial statements?',
     ['The company’s managers', 'The company’s internal auditors',
      'The company’s board of directors',
      'Existing and potential lenders'], 3,
     'The primary users are existing and potential investors, lenders and '
     'other creditors.'),

    ('Information helps an investor forecast next year’s cash flows. '
     'This information has:',
     ['predictive value', 'verifiability', 'comparability', 'timeliness'], 0,
     'Predictive value is part of relevance: the information helps users '
     'predict the future.'),

    ('General-purpose financial statements are:',
     ['reports prepared for one special reader',
      'reports for many readers at the same time',
      'internal management reports', 'tax returns and tax schedules'], 1,
     'They are reports for many readers at the same time, not for one '
     'special reader.'),

    ('Managers are users of financial statements but not primary users, '
     'because:',
     ['they give no resources to the company',
      'they can get any internal information they need',
      'they are the people who prepare the statements',
      'they are employees rather than investors'], 1,
     'Managers can get any internal information they need, and reporting '
     'for managers is management accounting.'),

    ('The two fundamental qualities of useful information are:',
     ['relevance and comparability',
      'relevance and faithful representation',
      'faithful representation and timeliness',
      'verifiability and understandability'], 1,
     'Relevance and faithful representation are the two fundamental '
     'qualities.'),

    ('An item is material if:',
     ['it is large in amount',
      'leaving it out or stating it wrongly could change users’ '
      'decisions',
      'it appears on the face of the balance sheet',
      'it is explained in the notes'], 1,
     'Materiality is part of relevance, and the test is the effect on '
     'users’ decisions.'),

    ('Which statement answers the question “where did cash come from, '
     'and where did it go?”',
     ['The balance sheet', 'The income statement',
      'The statement of cash flows',
      'The statement of changes in equity'], 2,
     'The section pairs each of the three user questions with one '
     'statement, and the cash question is the statement of cash flows.'),

    ('The cost constraint means that:',
     ['financial information must be free to users',
      'the benefit of reporting information should be greater than its cost',
      'cost must itself be measured faithfully',
      'only material costs need to be reported'], 1,
     'The benefit of reporting information should be greater than its cost.'),
]

TF = [
    ('The four main statements are the balance sheet, the income statement, '
     'the statement of changes in equity and the statement of cash flows.',
     True, ''),
    ('Primary users can usually ask the company for special reports in the '
     'shape they want.', False,
     'They usually cannot, so they depend on the published statements.'),
    ('Comparability is one of the fundamental qualities of useful '
     'information.', False,
     'It is one of the four enhancing qualities.'),
    ('Faithful representation means the information is complete, neutral and '
     'free from error.', True, ''),
    ('Employees and unions are primary users of general-purpose financial '
     'statements.', False,
     'They are users, but not primary users.'),
    ('Relevance includes materiality.', True, ''),
    ('Reporting for managers is called management accounting.', True, ''),
    ('Stewardship means how well the managers used the owners’ '
     'resources.', True, ''),
]

FILL = [
    'Most companies prepare {general}-purpose financial statements: reports '
    'for many readers at the same time, not for one special reader. The U.S. '
    'conceptual framework names the most important readers as existing and '
    'potential investors, lenders and other creditors, and calls them the '
    '{primary} users. They give {resources} to the company — money, '
    'goods or credit — and they usually cannot ask for special reports, '
    'so they depend on the {published} statements.',

    'There are two fundamental qualities. The first is {relevance}, which '
    'means the information can make a difference to a decision: it helps '
    'users predict the future, which is {predictive} value, or check their '
    'past predictions, which is {confirmatory} value. The second is '
    '{faithful} representation, which means the information shows what it '
    'claims to show: complete, {neutral} and free from error.',

    'Four enhancing qualities make information even more useful: '
    '{comparability}, verifiability, {timeliness} and understandability. '
    'There is also a cost {constraint}: the {benefit} of reporting '
    'information should be greater than its cost.',
]
FILL_EXTRA = ['material', 'secondary', 'verifiable', 'prudent']

VERBS_L = ['recognize', 'measure', 'record', 'present', 'disclose']
VERBS_R = ['decide the amount of the item',
           'enter the item in the accounts (journal and ledger)',
           'explain the item in the notes to the statements',
           'include an item in the statements, with a name and an amount',
           'show the item on the face of a statement']
VERBS_A = ['D', 'A', 'B', 'E', 'C']

ORONTES = ['Orontes {recognizes} revenue when it delivers the goods. It '
           '{measures} the revenue at the invoice price. It {presents} '
           'revenue in the income statement, and it {discloses} its revenue '
           'policy in the notes.']
ORONTES_EXTRA = ['records', 'reports']

USERS_L = ['Investors (shareholders)', 'Lenders (banks, bondholders)',
           'Other creditors (suppliers)', 'Employees and unions', 'Customers',
           'Governments and regulators', 'Managers (internal)']
USERS_R = ['Can the company pay interest and repay the principal on time?',
           'Does the company follow the rules and pay its taxes?',
           'Is the company stable and profitable?',
           'Not a primary user: can use internal reports',
           'Will the company continue to supply us?',
           'Will the company create future cash flows and returns?',
           'Will the company pay its bills when due?']
USERS_A = ['F', 'A', 'G', 'C', 'E', 'B', 'D']

QS_L = ['What does the company have, and what does it owe?',
        'How did the company perform in the period?',
        'Where did cash come from, and where did it go?',
        'Which statements do suppliers use most?',
        'Which statements do lenders use most?',
        'Which statements do investors use most?',
        'Which statements do governments and regulators use most?']
QS_R = ['All the statements and the notes',
        'The balance sheet',
        'The balance sheet (short-term items) and the statement of cash flows',
        'The income statement',
        'The income statement, the statement of cash flows and the balance '
        'sheet',
        'The statement of cash flows',
        'The statement of cash flows and the balance sheet']
QS_A = ['B', 'D', 'F', 'C', 'G', 'E', 'A']

QUAL_H = ['Quality named in section 1.1', 'Fundamental', 'Enhancing',
          'A constraint, not a quality']
QUAL_I = ['comparability', 'faithful representation', 'relevance',
          'timeliness', 'understandability', 'verifiability', 'cost']
QUAL_A = ['E  enhancing', 'F  fundamental', 'F  fundamental', 'E  enhancing',
          'E  enhancing', 'E  enhancing', 'C  a constraint, not a quality']


# The decisions, asked over the users Exercise 6 has already numbered, so the
# seven users are not printed twice.
DEC_R = ['Buy, hold or sell shares',
         'Lend, renew or stop a loan',
         'Plan and control operations',
         'Sell on credit, set credit terms',
         'Sign long-term contracts',
         'Stay, negotiate pay',
         'Tax, oversight, statistics']
DEC_A = ['A', 'B', 'D', 'F', 'E', 'G', 'C']
