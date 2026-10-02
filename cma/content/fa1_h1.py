# -*- coding: utf-8 -*-
"""Volume 1, Handout 1 — Who Reads These Statements, and What They Need.

Covers A.1(a) the users of the financial statements and their needs, and
A.1(b) the purposes and uses of each statement.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

HANDOUT = dict(
    n=1,
    title='Who Reads These Statements, and What They Need',
    subtitle='Four statements exist because four different questions are asked of a '
             'company. Name the question and the statement chooses itself.',
    register='R1 throughout, ending at R2',

    lang=dict(
        register='R1 Teaching English. Short sentences, one idea each. This handout '
                 'introduces the vocabulary the whole volume runs on.',
        collocations=['prepare financial statements', 'present fairly',
                      'issue the statements', 'a user of the statements',
                      'assess the prospects for future cash flows',
                      'general purpose financial reporting'],
        pairs=['user / preparer', 'report / statement',
               'financial position / financial performance', 'profit / cash'],
        nots=['A statement does not say what a company is worth. It says what was '
              'recorded, under the rules that were applied.',
              'A user is not a customer. Here a user is anyone who reads the '
              'statements to make a decision.'],
    ),

    objectives=[
        'Name the primary users of general purpose financial statements, and say '
        'what decision each of them is trying to make.',
        'State the purpose of each of the four statements in one sentence.',
        'Choose the statement that answers a given question, and say why the other '
        'three do not.',
        'Explain why general purpose statements cannot be written for one user.',
        'Use the words financial position and financial performance the way the '
        'exam uses them.',
    ],

    terms=[
        ('general purpose financial reporting',
         'Financial reports written for users who cannot demand reports built to '
         'their own specification.', 'التقارير المالية ذات الغرض العام',
         'The phrase is the whole point: one set of statements, many users, none of '
         'them served perfectly.'),
        ('primary user',
         'An existing or potential investor, lender, or other creditor.',
         'المستخدم الأساسي',
         'Management is not a primary user. Management can ask for any report it '
         'wants, so the statements are not written for it.'),
        ('financial position',
         'What the company controls and what it owes at one moment.',
         'المركز المالي',
         'Position is a photograph. Performance is a film. The exam tests that you '
         'know which statement is which.'),
        ('financial performance',
         'The result of the company’s activities over a period.',
         'الأداء المالي',
         'Performance is measured over a span of time, never at a date.'),
        ('statement of financial position',
         'The balance sheet: assets, liabilities and equity at a date.',
         'قائمة المركز المالي',
         'Balance sheet and statement of financial position are the same statement. '
         'IFRS prefers the second name, and the exam uses both.'),
        ('statement of changes in equity',
         'The statement that explains every movement in the owners’ claim '
         'during the period.', 'قائمة التغيرات في حقوق الملكية',
         'The bridge between last year’s balance sheet and this year’s. '
         'Handout 4 builds it.'),
        ('reporting entity',
         'The company, or group of companies, that the statements are about.',
         'المنشأة المُعِدَّة للتقارير',
         'Fix this before anything else. The same transaction looks different if the '
         'entity is the parent alone or the whole group.'),
        ('stewardship',
         'How well management has used the resources entrusted to it.',
         'الإشراف على الموارد',
         'A second reason the statements exist, alongside helping users judge the '
         'prospects for future cash flows.'),
        ('comparability',
         'The quality that lets a user set one company against another, or one year '
         'against the next.', 'القابلية للمقارنة',
         'Comparability does not mean identical methods. It means the methods used '
         'are disclosed.'),
    ],

    blocks=[
        ('scene', 'The company you will work in for six volumes', [
            '%s %s. One warehouse near the port, two sales offices, and a small '
            'assembly bay.' % (N.name, N.what),
            'You will meet this company in every volume of Section A. In this volume '
            'you build its four statements. In Volume 3 you write the allowance that '
            'sits inside its receivables line, and in Volume 4 you choose the cost '
            'flow assumption behind its inventory line.',
            'The year just ended is %s. The year before it is %s. Both are '
            'presented, because a reader given one year alone cannot see a trend.'
            % (Y, PY),
            'In this handout you calculate nothing. You learn who is asking, and '
            'which statement answers them.',
        ]),
        ('fig', 'workplace', '%s · who is asking for the statements' % N.short,
         [('Ms Darwish', 'bank credit officer', 'w', SCF),
          ('Mr Antoun', 'shareholder', 'm', BS),
          ('Ms Haidar', 'financial controller', 'h', IS)],
         [('building', 'one warehouse'), ('container', 'components'),
          ('doc', 'four statements'), ('money', '$4.8m sales')],
         'Two of these three read the statements. One writes them.'),

        ('part', 'Part 1 · Who is asking?', 'users and their needs'),

        ('task', 'Exercise 1A',
         'Name the primary users and say what each of them needs to decide.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['Read the whole passage once before writing anything.',
          'Blank 1 is the word that explains why the statements cannot be tailored.',
          'Blanks 4 and 5 are two different people with two different questions. '
          'One wants to be repaid; the other wants a share of what is left.']),
        ('fill', 'R1',
         ['Financial statements are written for people outside the company. They are '
          'called {general} purpose statements because the people who read them '
          'cannot ask for a report built to their own specification.',
          'Those readers are the {primary} users: existing and potential investors, '
          'lenders, and other creditors. They share one broad need. Each of them is '
          'trying to judge the company’s prospects for future net cash '
          '{inflows}.',
          'The questions underneath that need are not the same. A {lender} wants to '
          'know whether the company can pay interest when it falls due and repay the '
          'principal at the end. An {investor} wants to know what is left after '
          'everyone else has been paid, because that is what a share is a claim on.',
          'Management reads the statements too, but management is not a primary '
          'user. Management can ask the accounting system for any report it likes, '
          'so the general purpose statements are not written for {management}.'],
         {'general': ('One set of statements serves many readers, so none of them is '
                      'served perfectly.',
                      'Students describe the statements as written for shareholders '
                      'alone. Lenders and other creditors rank equally.'),
          'primary': ('The framework names this group and no other.', ''),
          'inflows': ('Everything in the framework points at future cash, not at '
                      'past profit for its own sake.', ''),
          'lender': ('A lender is paid a fixed amount and wants certainty.', ''),
          'investor': ('An investor holds the residual claim and wants growth.', ''),
          'management': ('This is the one that catches people in the exam.',
                         'Management is an internal user with unlimited access, '
                         'which is exactly why the statements are not for them.')},
         ['owner', 'customer', 'regulator', 'specific']),
        ('fig', 'buckets', 'Three readers, three questions',
         [('THE LENDER', SCF,
           ['Can it pay the interest?', 'Can it repay the principal?',
            'What happens if it cannot?', '', '']),
          ('THE INVESTOR', BS,
           ['What is left for me?', 'Is the return growing?',
            'Should I buy, hold or sell?', '', '']),
          ('MANAGEMENT', SLATE,
           ['Not a primary user.', 'Can ask for any report.',
            'Prepares the statements.', '', ''])],
         'Write one more question of your own in each column. The empty rules are '
         'there for exactly that.'),

        ('prose', 'The reports do a second job as well. They let a user judge how '
                  'well management has used the resources entrusted to it, which is '
                  'called stewardship. A user assessing stewardship reads the same '
                  'statements backwards: not what will happen next, but what was '
                  'done with what was given.', 'R1'),

        ('task', 'Exercise 1B',
         'Apply one test to decide whether a reader is a primary user.',
         'Match the reader on the left to the decision on the right. Write the '
         'letter in the space.',
         ['Exercise 1A'],
         ['Three of these readers are primary users and two are not.',
          'Read the decision first, then ask who would have to make it.',
          'The supplier is the one most students place wrongly. A supplier who '
          'sells on credit is a creditor.']),
        ('match',
         ['A commercial bank considering a three-year loan',
          'A family that owns 4% of the shares',
          'A supplier deciding whether to sell on 60-day terms',
          'The financial controller preparing next year’s budget',
          'A tax authority checking a filed return'],
         ['Will this company still pay me interest in year three?',
          'Is the residual return on my holding growing or shrinking?',
          'Can this customer pay the invoice before I ship more goods?',
          'Not a primary user — has full access to internal records.',
          'Not a primary user — can demand reports in its own format.'],
         ['A', 'B', 'C', 'D', 'E'],
         'Primary users are investors, lenders and other creditors. Any reader who '
         'can demand a report built to their own specification is outside the group.'),
        ('fig', 'fork', 'The one test that sorts every reader',
         [('Can this reader demand a report in their own format?',
           'NO → a primary user: the statements are written for them', SCF),
          ('Can this reader demand a report in their own format?',
           'YES → not a primary user: management, tax authorities, regulators',
           SLATE),
          ('Why does it decide anything?',
           'It fixes whose common needs the statements may serve', IS)]),

        ('part', 'Part 2 · Four statements, four questions',
         'what each one is for'),

        ('task', 'Exercise 1C',
         'State the purpose of each statement, and the period or date it covers.',
         'Read and complete. One word in each space.',
         ['Exercise 1A, for the idea of a reader with a question.'],
         ['Three of the four statements cover a period. One covers a single date.',
          'Blank 3 is the word for a single moment in time.',
          'If you are unsure of a blank, say the sentence aloud with each candidate '
          'word in it and listen for the one that fits.']),
        ('fill', 'R1',
         ['The {income} statement answers one question: how did the company perform '
          'over the year? It runs from the top line down to net income at the '
          'bottom, and it covers a {period} of time.',
          'The balance sheet answers a different question: what does the company '
          'control, and what does it owe? It is not about a period at all. It is a '
          'photograph taken at one {date}, which is why it is also called the '
          'statement of financial position.',
          'The statement of changes in {equity} explains how the owners’ claim '
          'moved from the start of the year to the end of it. Profit pushes it up, '
          'dividends pull it down, and new shares push it up again.',
          'The statement of cash {flows} answers the question none of the other '
          'three answers: where did the money actually come from, and where did it '
          'go? A company can report a profit and still run out of cash, and this is '
          'the statement that shows it.'],
         {'income': ('The top line down to net income, over a span of time.', ''),
          'period': ('A year, a quarter, a month — but always a span.',
                     'Students say the income statement is "as at" a date. It is '
                     '"for the year ended" a date.'),
          'date': ('One moment. Nothing accumulates on a balance sheet line.', ''),
          'equity': ('The bridge between last year’s equity and this '
                     'year’s.', ''),
          'flows': ('Profit is an opinion about timing. Cash is a fact.', '')},
         ['position', 'moment', 'profit', 'balance']),
        ('fig', 'matrix', 'Which statement, and over what span',
         ['Income statement', 'Balance sheet', 'Changes in equity', 'Cash flows'],
         ['The question it answers', 'Period or date'],
         [['How did we perform?', 'FOR the year ended'],
          ['What do we control and owe?', 'AS AT one date'],
          ['How did the owners’ claim move?', 'FOR the year ended'],
          ['Where did the money actually go?', 'FOR the year ended']],
         'Three of the four cover a span. Only the balance sheet is a photograph.'),

        ('prose', 'Two phrases are worth fixing now, because the exam uses them '
                  'instead of the statement names. Financial position is what the '
                  'company controls and owes at one date. Financial performance is '
                  'the result of its activities over a period. A question that asks '
                  'about financial position is asking about the balance sheet, '
                  'whatever else it mentions.', 'R2'),

        ('task', 'Exercise 1D',
         'Choose the statement that answers a question, and reject the other three.',
         'Sort each question into the column of the statement that answers it.',
         ['Exercise 1C'],
         ['Ask what the question is really about: a span of time, or a single '
          'moment.',
          'If the question contains the word "paid" rather than "charged", look at '
          'the cash flow statement.',
          'The last question belongs in a column you may not expect. Read it twice.']),
        ('sortgrid',
         ['The question a user asks', 'INCOME STATEMENT', 'BALANCE SHEET',
          'CASH FLOWS'],
         ['How much did we charge customers this year?',
          'How much do customers still owe us?',
          'How much did customers actually pay us?',
          'What did we spend on new equipment?',
          'What is the equipment carried at now?',
          'How much depreciation did we charge?'],
         ['INCOME STATEMENT', 'BALANCE SHEET', 'CASH FLOWS',
          'CASH FLOWS', 'BALANCE SHEET', 'INCOME STATEMENT'],
         'The three middle questions are one transaction seen three ways: what was '
         'charged, what is still owed, what was collected.'),
        ('fig', 'timeline', 'One sale, three statements, three moments',
         [('The goods ship', 'the sale is recorded — income statement', IS),
          ('The invoice sits unpaid', 'a receivable — balance sheet', BS),
          ('The customer pays', 'cash collected — cash flow statement', SCF)],
         'The same sale reaches three statements at three different moments. That is '
         'why there are four statements and not one.'),

        ('part', 'Part 3 · Why not one statement?',
         'the limits of a general purpose report'),

        ('task', 'Exercise 1E',
         'Explain why general purpose statements cannot be tailored to one reader.',
         'Read and complete.',
         ['Exercises 1A and 1C'],
         ['This passage is written at R2, the register of a textbook. The sentences '
          'are longer than in Part 1.',
          'Blank 1 is a verb meaning "to meet a need exactly".',
          'The last blank is the name of the quality that lets a reader set this '
          'company against another one.']),
        ('fill', 'R2',
         ['A single set of statements is issued to every reader, and those readers '
          'want different things. The lender is concerned with downside and with '
          'timing; the investor is concerned with growth in the residual return.',
          'No one report can {satisfy} both completely. The framework accepts this '
          'openly: general purpose financial reports are directed at the needs that '
          'the primary users have in {common}, rather than at any single '
          'user’s own specification.',
          'What the reports can do is make themselves usable. Figures are presented '
          'for two years side by side, so that a reader sees a {trend} rather than a '
          'single point. Methods are applied the same way from one year to the next, '
          'and the methods used are disclosed, which is what gives the statements '
          'their {comparability}.'],
         {'satisfy': ('A general purpose report is a compromise by design.', ''),
          'common': ('The framework’s own word. It does not say "the needs of '
                     'shareholders".',
                     'Students assume the statements are built for shareholders, so '
                     'they misread what the limitations are.'),
          'trend': ('One year alone cannot show direction.', ''),
          'comparability': ('Disclosure of method, not uniformity of method.', '')},
         ['average', 'agreement', 'estimate']),
        ('fig', 'scale',
         'THE LENDER', ['wants certainty of repayment', 'reads the downside first',
                        'cares about covenants and timing',
                        'asks: will the cash be there in year three?'],
         'THE INVESTOR', ['wants growth in the residual', 'reads the upside first',
                          'cares about return on the share',
                          'asks: what is left after everyone else?']),

        ('watch', 'Statements are prepared under rules, using estimates. They do not '
                  'report what a company is worth, and they never claim to. Handout '
                  '9 of this volume is about exactly what they cannot tell you.'),

        ('part', 'Part 4 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'According to the conceptual framework for general purpose financial '
                'reporting, which of the following is NOT a primary user of a '
                'company’s financial statements?',
         ['A potential lender evaluating a credit facility',
          'An existing shareholder deciding whether to sell',
          'The company’s chief financial officer preparing a capital budget',
          'A supplier deciding whether to extend 60-day credit terms'],
         2, 'Level A',
         'The primary users are existing and potential investors, lenders and other '
         'creditors — readers who cannot require the entity to produce reports '
         'to their own specification. The CFO can obtain any internal report wanted, '
         'so management is not a primary user. (D) is a creditor and therefore is.'),

        ('mcq', 'A user wants to know whether a company generated enough cash from '
                'its trading activities to replace its equipment without borrowing. '
                'Which statement answers this most directly?',
         ['The income statement, because it reports the profit from trading',
          'The statement of cash flows, because it separates cash from trading '
          'from cash spent on assets',
          'The balance sheet, because it reports what the equipment stands at',
          'The statement of changes in equity, because it reports the owners’ claim'],
         1, 'Level B',
         'Only the cash flow statement separates cash generated by trading from cash '
         'spent on long-lived assets. (A) reports income, not cash. (C) reports a '
         'balance at a date, which says nothing about cash generated. (D) '
         'reports the owners’ claim, not cash.'),

        ('mcq', 'Which statement about general purpose financial statements is '
                'correct?',
         ['They are designed to show the current market value of the reporting '
          'entity',
          'They are tailored to the information needs of the entity’s largest '
          'shareholder',
          'They are directed to the common information needs of primary users and '
          'cannot meet every need',
          'They are prepared principally for management’s use in operating the '
          'business'],
         2, 'Level B',
         'This is the framework’s own position, stated plainly. (A) is the most '
         'common wrong answer: statements report figures produced by an '
         'accounting basis, not entity value. (B) would make the report special '
         'purpose. (D) reverses who the reports are for.'),

        ('mcq', 'Northwind reports net income of %s for %s, but its cash balance rose '
                'by only %s. A user asks which statement explains the difference. '
                'The answer is:'
                % (money(N.net_income), Y, money(N.cash - N.cash_py)),
         ['The balance sheet, because it reports both figures',
          'The statement of changes in equity, because it reconciles equity',
          'The statement of cash flows, because it reconciles income to cash',
          'The income statement, because it reports the net income figure'],
         2, 'Level B',
         'Reconciling profit to cash is exactly what the indirect-method operating '
         'section does. (A) reports both numbers but explains neither. (B) '
         'reconciles the owners’ claim, not cash. (D) is one end of the '
         'reconciliation, not the bridge between the ends.'),

        ('mcq', 'Which of the following best describes the stewardship objective of '
                'general purpose financial reporting?',
         ['Reporting the current market value of the entity to its owners',
          'Enabling users to assess how efficiently management has used the '
          'resources entrusted to it',
          'Providing management with the reports it needs to run the business',
          'Ensuring that the entity complies with the relevant tax legislation'],
         1, 'Level A',
         'Stewardship sits alongside the cash flow objective: the reports let users '
         'judge what management did with what it was given. (A) is not an objective '
         'of financial reporting at all. (C) describes internal reporting. (D) '
         'describes a tax return, which is a special purpose report.'),

        ('mcq', 'A question refers to an entity’s financial position at the end '
                'of the reporting period. The statement being referred to is:',
         ['The income statement', 'The statement of cash flows', 'The balance sheet',
          'The statement of changes in equity'],
         2, 'Level A',
         'Financial position means assets, liabilities and equity at a date, which is '
         'the balance sheet, also called the statement of financial position. The '
         'other three all cover a period. This is a vocabulary question, and the exam '
         'sets it often.'),

        ('mcq', 'Two companies in the same industry apply different but acceptable '
                'accounting methods. A user wants to compare them. Which feature of '
                'general purpose financial reporting makes that comparison possible?',
         ['The requirement that both companies report the same net income',
          'The requirement that the methods applied be disclosed',
          'The requirement that both companies use identical methods',
          'The requirement that both be audited by the same firm'],
         1, 'Level C',
         'Comparability does not require identical methods. It requires that the '
         'methods used be disclosed, so a user can adjust for the difference or at '
         'least understand it. (A) and (C) describe uniformity, which the framework '
         'does not require. (D) is unrelated to comparability.'),

        ('tip', 'When a question names a reader, ask one thing first: can this reader '
                'demand a report in their own format? If yes, they are not a primary '
                'user. That single test answers most of Section A’s user '
                'questions.'),
    ],

    key_extra=[
        ('h3', 'The four statements, in one table'),
        ('table', ['Statement', 'Answers', 'Span', 'Links to'],
         [['Income statement', 'Performance', 'For the year ended',
           'The profit figure carried into the equity statement'],
          ['Balance sheet', 'Position', 'As at',
           'The closing equity in the equity statement'],
          ['Changes in equity', 'The owners’ claim', 'For the year ended',
           'Both of the statements above'],
          ['Cash flows', 'Cash movement', 'For the year ended',
           'The cash line on the balance sheet']],
         SCF, [22, 18, 24, 36]),
    ],
)
