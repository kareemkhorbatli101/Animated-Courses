# -*- coding: utf-8 -*-
"""Handout 1.1 — Who the statements are for, and what makes them useful."""

USERS = [
    ['User', 'Decision', 'Key question', 'Statements used most'],
    ['Investors (shareholders) — PRIMARY', 'Buy, hold or sell shares',
     'Will the company create future cash flows and returns?',
     'Income statement, cash flows, balance sheet'],
    ['Lenders (banks, bondholders) — PRIMARY',
     'Lend, renew or stop a loan',
     'Can the company pay interest and repay the principal on time?',
     'Cash flows, balance sheet'],
    ['Other creditors (suppliers) — PRIMARY',
     'Sell on credit, set credit terms',
     'Will the company pay its bills when due?',
     'Balance sheet (short-term items), cash flows'],
    ['Employees and unions', 'Stay, negotiate pay',
     'Is the company stable and profitable?', 'Income statement'],
    ['Customers', 'Sign long-term contracts',
     'Will the company continue to supply us?',
     'Balance sheet, income statement'],
    ['Governments and regulators', 'Tax, oversight, statistics',
     'Does the company follow the rules and pay its taxes?',
     'All statements and notes'],
    ['Managers (internal)', 'Plan and control operations',
     'Not a primary user: can use internal reports',
     'Internal management reports'],
]

HANDOUT = dict(
    id='1.1',
    n=1,
    pages=7,
    title='Who the statements are for',
    sub='Primary users · what makes information useful · five verbs '
        'the exam uses precisely',
    covers=['sec:1.1', 'fig:F01-02', 'box:EXAM TRAP:primary user',
            'box:LANGUAGE FOCUS:five verbs', 'box:TERM BRIDGE:1.1',
            'sc:SC1-1', 'sc:SC1-2', 'p:P01', 'p:P02', 'p:P03',
            'term:financial statements', 'term:general-purpose financial '
            'statements', 'term:primary users', 'term:relevance',
            'term:faithful representation', 'term:materiality',
            'term:recognize', 'term:disclose'],
    skills=[('users', 3), ('qualities', 3), ('verbs', 3)],
    flow=[
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Who the statements are written for'),
        ('move', 'ORIENT', 'Two minutes, alone, from what you already know.'),
        ('items', [
            dict(t='SHORT', lines=2,
                 q='A bank is deciding whether to lend to a company for five '
                   'years. In one sentence, what is the single question the '
                   'bank most wants the statements to answer?',
                 a='Can the company generate enough cash to pay the interest '
                   'and repay the principal on time?',
                 why='A lender’s main question is repayment: can the '
                     'borrower pay interest and principal on time?'),
            dict(t='MCQ',
                 q='A company publishes one set of statements that many '
                   'different readers use at the same time, rather than a '
                   'separate report for each reader. Those statements are '
                   'called:',
                 o=['general-purpose financial statements',
                    'special-purpose reports',
                    'internal management reports',
                    'regulatory filings'],
                 a='A',
                 why='General-purpose statements are reports for many readers '
                     'at the same time, not for one special reader.'),
        ]),
        ('move', 'MODEL',
         'Read the panel before you answer anything. Do not memorise it — '
         'you are about to be asked to take it apart.'),
        ('panel', 'Who reads financial statements, and what each reader needs',
         USERS,
         'Three of these readers are marked PRIMARY. The rest are users too.'),
        ('move', 'READ THE MODEL',
         'Every answer is somewhere in the panel. Find it, do not recall it.'),
        ('items', [
            dict(t='SHORT',
                 q='How many of the readers in the panel are marked PRIMARY?',
                 a='Three', why='Investors, lenders and other creditors.'),
            dict(t='SHORT',
                 q='Which reader’s key question is about being paid when '
                   'the bills fall due?',
                 a='Other creditors (suppliers)',
                 why='Suppliers sell on credit and set credit terms, so their '
                     'question is whether the bills will be paid when due.'),
            dict(t='SHORT',
                 q='Which two readers rely most on the statement of cash '
                   'flows together with the balance sheet?',
                 a='Lenders, and other creditors (suppliers)',
                 why='Both are judging whether cash will be there to pay '
                     'them.'),
            dict(t='SHORT', lines=2,
                 q='Managers appear in the panel, but not as a primary user. '
                   'Write the reason the panel itself gives.',
                 a='They can use internal reports, so they do not depend on '
                   'the published statements.',
                 why='Managers can get any internal information they need, so '
                     'they are not primary users of general-purpose '
                     'statements.'),
            dict(t='TF',
                 q='Every reader in the panel uses the income statement more '
                   'than any other statement.',
                 a='F',
                 why='The panel gives a different mix of statements for each '
                     'reader. Lenders and suppliers lean on cash flows and '
                     'the balance sheet.'),
        ]),
        ('roles',
         'One reader each. Answer only from your reader’s column, then '
         'fill the row together.',
         [('INVESTOR', 'Why might you still buy shares in a company that '
                       'made a loss this year?'),
          ('LENDER', 'The company is very profitable but has almost no cash. '
                     'Do you renew the loan?'),
          ('SUPPLIER', 'You are asked for 90-day credit terms. What do you '
                       'look at first?'),
          ('REGULATOR', 'What do you look at that none of the other three '
                        'reads closely?')]),
        ('move', 'INVENT THE RULE',
         'Write it in your own words. The book’s wording is in the key '
         '— compare afterwards, do not copy first.'),
        ('rule',
         'Using the panel, write the rule that decides who counts as a '
         'primary user.',
         [['The primary users are ', 26, ', ', 20, ' and ', 24, '.'],
          ['They are primary because they give the company ', 30, ' and '
           'cannot ', 30, '.']],
         ['resources', 'investors', 'lenders', 'creditors'],
         'The primary users are existing and potential investors, lenders '
         'and other creditors. They give resources (money, goods or credit) '
         'to the company. They usually cannot ask the company for special '
         'reports, so they depend on the published statements.'),
        ('contrast',
         'Two readers, one difference',
         [('A bank lending for five years',
           ['Reads the published statements.',
            'Cannot demand a special report.',
            'Is it a primary user?']),
          ('The company’s own finance manager',
           ['Reads the published statements too.',
            'Can ask for any internal report.',
            'Is it a primary user?'])],
         'Both read the same statements. Write the one difference that makes '
         'only one of them a primary user.'),
        ('move', 'APPLY', 'No help on this move.'),
        ('items', [
            dict(t='MCQ',
                 q='Which group is a primary user of general-purpose '
                   'financial statements?',
                 o=['The company’s managers',
                    'The company’s internal auditors',
                    'The company’s board of directors',
                    'Existing and potential lenders'],
                 a='D',
                 why='The primary users are existing and potential investors, '
                     'lenders and other creditors. The board and the internal '
                     'auditors can demand internal reports.'),
            dict(t='MCQ',
                 q='Under the U.S. conceptual framework, the objective of '
                   'general-purpose financial reporting is to provide useful '
                   'information mainly to:',
                 o=['the board of directors and senior management',
                    'government statisticians and tax authorities',
                    'existing and potential investors, lenders and other '
                    'creditors',
                    'the company’s employees and trade unions'],
                 a='C',
                 why='These are the primary users. They provide resources and '
                     'cannot demand special reports.'),
            dict(t='MCQ',
                 q='A bank is deciding whether to renew a five-year loan. '
                   'Which information will the bank find MOST useful?',
                 o=['The highest and lowest share price during the year',
                    'The company’s ability to generate cash to pay '
                    'interest and repay principal',
                    'The number of products the company sells',
                    'The names of the company’s major shareholders'],
                 a='B',
                 why='Share prices interest investors more than lenders, and '
                     'neither the product count nor the ownership list '
                     'answers the repayment question.'),
        ]),
        ('check',
         'Name the three primary users, and say in one clause why managers '
         'are not among them.',
         'Investors, lenders and other creditors; managers can obtain '
         'internal reports.',
         'redo the READ THE MODEL questions of cycle A, with the panel in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'What makes the information useful'),
        ('move', 'ORIENT', 'One question, from the cycle you have just done.'),
        ('items', [
            dict(t='SHORT',
                 q='A lender wants to know whether a company can repay a '
                   'loan. Would a figure for last year’s sales help that '
                   'decision? Answer yes or no, and add three words saying '
                   'why.',
                 a='Yes — it helps predict future cash',
                 why='Information that helps a user predict the future has '
                     'predictive value, which is part of relevance.'),
        ]),
        ('move', 'MODEL',
         'One figure. The levels in it are the whole point: two qualities '
         'rank above the other four.'),
        ('fig', 'quality_tree'),
        ('move', 'READ THE MODEL', 'All six answers are in the figure.'),
        ('items', [
            dict(t='FILL',
                 parts=['The two fundamental qualities are ', 22, ' and ',
                        26, '.'],
                 a=['relevance', 'faithful representation'],
                 whys=['', 'The two fundamental qualities are relevance and '
                           'faithful representation.']),
            dict(t='SHORT',
                 q='The figure puts three things under relevance. Name them.',
                 a='Predictive value, confirmatory value, materiality',
                 why='Relevance means the information can make a difference '
                     'to a decision: it helps users predict the future or '
                     'check past predictions, and it includes materiality.'),
            dict(t='SHORT',
                 q='The figure puts three things under faithful '
                   'representation. Name them.',
                 a='Complete, neutral, free from error',
                 why='Faithful representation means the information shows '
                     'what it claims to show: complete, neutral and free from '
                     'error.'),
            dict(t='SHORT',
                 q='How many enhancing qualities does the figure show, and '
                   'what does the line beneath them say they cannot do?',
                 a='Four; they cannot make useless information useful',
                 why='Comparability, verifiability, timeliness and '
                     'understandability are enhancing qualities only.'),
            dict(t='SHORT',
                 q='The band at the foot of the figure is not a quality at '
                   'all. What is it, and what does it weigh against what?',
                 a='The cost constraint: the benefit of reporting against the '
                   'cost of producing',
                 why='The benefit of reporting information should be greater '
                     'than its cost.'),
            dict(t='TF',
                 q='Comparability ranks equally with relevance in the figure.',
                 a='F',
                 why='Comparability is an enhancing quality. Only relevance '
                     'and faithful representation are fundamental.'),
        ]),
        ('pair',
         'Answer the next item alone first, then compare with your partner.',
         'go back to the figure and find the level each word sits on. The '
         'level settles it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write what each of the two fundamental qualities asks of a number.',
         [['Relevance asks: could this number change a ', 24, '?'],
          ['Faithful representation asks: does this number show what it ',
           24, ' to show?']],
         ['decision', 'claims', 'complete', 'neutral'],
         'Relevance means the information can make a difference to a '
         'decision. Faithful representation means the information shows what '
         'it claims to show: it is complete, neutral and free from error.'),
        ('contrast',
         'One company, two faults',
         [('Report A',
           ['Last year’s sales, measured exactly and audited.',
            'The reader is deciding whether to lend for five years.',
            'Complete, neutral, free from error — but does it bear on '
            'the decision?']),
          ('Report B',
           ['A forecast of next year’s cash, written by the sales team '
            'to look good.',
            'The reader is deciding whether to lend for five years.',
            'It bears on the decision — but is it neutral?'])],
         'Each report fails one of the two fundamental qualities. Name which '
         'quality each one fails, and say why neither report is useful on its '
         'own.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Information helps an investor forecast next year’s '
                   'cash flows. This information has:',
                 o=['predictive value', 'verifiability', 'comparability',
                    'timeliness'],
                 a='A',
                 why='Predictive value is part of relevance: the information '
                     'helps users predict the future. Verifiability means '
                     'independent people could agree on the amount.'),
            dict(t='MCQ',
                 q='Two companies use the same accounting methods, so an '
                   'analyst can compare their results. This quality is '
                   'called:',
                 o=['relevance', 'verifiability', 'faithful representation',
                    'comparability'],
                 a='D',
                 why='Comparability lets users identify similarities and '
                     'differences between companies or periods.'),
            dict(t='SHORT', lines=2,
                 q='A company leaves a small amount out of its statements '
                   'because including it could not change any reader’s '
                   'decision. Name the idea that permits this, and say which '
                   'fundamental quality it belongs to.',
                 a='Materiality, which is part of relevance',
                 why='An item is material if leaving it out or stating it '
                     'wrongly could change users’ decisions.'),
        ]),
        ('check',
         'Which two qualities are fundamental, and which four are only '
         'enhancing?',
         'Fundamental: relevance, faithful representation. Enhancing: '
         'comparability, verifiability, timeliness, understandability.',
         'redo the READ THE MODEL questions of cycle B with the figure open.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'Five verbs the exam uses precisely'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A company explains its revenue policy in the notes rather '
                   'than on the face of a statement. Is that policy presented '
                   'or disclosed?',
                 a='Disclosed',
                 why='To disclose is to explain the item in the notes to the '
                     'statements.'),
        ]),
        ('move', 'MODEL', 'One item’s life, in five stages.'),
        ('fig', 'verb_ladder'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='MATCH',
                 q='Write the letter of the meaning beside each verb.',
                 left=['recognize', 'measure', 'record', 'present',
                       'disclose'],
                 right=['decide the amount of the item',
                        'explain the item in the notes to the statements',
                        'include the item in the statements, with a name and '
                        'an amount',
                        'show the item on the face of a statement',
                        'enter the item in the accounts, in the journal and '
                        'the ledger'],
                 a=['C', 'A', 'E', 'D', 'B'],
                 whys=['To recognize is to include an item in the statements, '
                       'with a name and an amount.', '', '', '', '']),
            dict(t='SHORT',
                 q='Which one of the five verbs is the only one that does not '
                   'put anything in the statements themselves?',
                 a='Disclose',
                 why='Disclosure is in the notes, not on the face of a '
                     'statement.'),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='FILL',
                 parts=['Orontes ', 14, ' revenue when it delivers the goods. '
                        'It ', 14, ' the revenue at the invoice price. It ',
                        14, ' revenue in the income statement, and it ', 14,
                        ' its revenue policy in the notes.'],
                 a=['recognizes', 'measures', 'presents', 'discloses'],
                 whys=['', '', '', '']),
            dict(t='MCQ',
                 q='An exam stem asks what a company must DISCLOSE about a '
                   'policy. The answer must therefore be about:',
                 o=['the face of the balance sheet',
                    'the notes to the statements',
                    'the journal entry',
                    'the amount chosen'],
                 a='B',
                 why='Disclose means explain the item in the notes. A '
                     'question about the face of a statement would use '
                     'present.'),
        ]),
        ('check',
         'Which verb means to decide the amount, and which means to explain '
         'the item in the notes?',
         'Measure decides the amount; disclose explains it in the notes.',
         'redo the matching item in cycle C.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'quality_tree',
         'Rebuild the qualities figure. Write the two fundamental qualities, '
         'the three parts under each, the four enhancing qualities and the '
         'constraint at the foot. Close the earlier pages first.',
         'relevance (predictive value, confirmatory value, materiality) and '
         'faithful representation (complete, neutral, free from error); '
         'comparability, verifiability, timeliness, understandability; the '
         'cost constraint'),
        ('teach', 'a classmate who missed this session',
         'In three or four sentences, explain who general-purpose financial '
         'statements are written for, and why the company’s own manager '
         'is not one of those readers.',
         ['primary users', 'resources', 'special reports', 'management '
          'accounting'],
         'Primary users are existing and potential investors, lenders and '
         'other creditors, because they give the company resources and cannot '
         'demand special reports. Managers can get any internal information '
         'they need, so reporting for them is management accounting rather '
         'than general-purpose financial reporting.'),
    ],
)
