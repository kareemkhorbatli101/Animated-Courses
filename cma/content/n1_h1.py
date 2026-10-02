# -*- coding: utf-8 -*-
"""Volume 1, Handout 1 — rebuilt in the 2026 format.

What changed, against the version this replaces:

  no objectives list      five bullets telling the student what they were
                          about to be told; the prompts carry it instead
  no three-row panel      each exercise opens on one line, with at most one
                          first move
  no stacked answer grid  the table's own cells are where the answer goes
  blanks mean meanings    every blank asks for a word, never a figure
  figures live in tables  and the first row of each is worked
  the case is bilingual   in English and in full Arabic
  nothing is given twice  no sentence states a figure the table then asks for
"""
from fadata import N, Y, PY
from data import money

READER, STMT, SLATE, WARN = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK = 'B2531F', '2B6CB0'

_Q1H = ['The question a reader asks', 'Which statement answers it',
        'Northwind’s figure for %s' % Y]
_Q1W = [44, 28, 28]

_Q1 = [
    (['How much did the company sell this year?', 'Income statement',
      money(N.sales)], 'w'),
    (['What profit was left after every expense?', '', ''], 'd'),
    (['What does the company own and owe at the year end?', '', ''], 'd'),
    (['How much cash did the trading operations generate?', '', ''], 'd'),
    (['How much was paid out to the shareholders?', '', ''], 'd'),
    (['How much cash was actually in the bank at the year end?', '', ''],
     'd'),
]

_Q2H = ['Northwind’s figure', 'A span of time, or one moment?',
        'How you can tell']
_Q2W = [34, 30, 36]

_Q2 = [
    (['Sales of %s' % money(N.sales), 'A span: the year to 31 December %s' % Y,
      'It accumulated day by day over twelve months'], 'w'),
    (['Total assets of %s' % money(N.total_assets), '', ''], 'd'),
    (['Net income of %s' % money(N.net_income), '', ''], 'd'),
    (['Cash of %s' % money(N.cash), '', ''], 'd'),
]


HANDOUT = dict(
    n=1,
    title='Who Reads These Statements, and What They Need',
    subtitle='Four statements exist because four different questions are asked '
             'of a company. Name the question and the statement chooses '
             'itself.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the readers are being named, R2 once the statements '
                 'are being chosen.',
        collocations=['prepare general purpose financial statements',
                      'meet the needs of a primary user',
                      'assess the prospects for future cash flows',
                      'report financial position at a date',
                      'report financial performance over a period',
                      'hold management to account for the resources '
                      'entrusted to it'],
        pairs=['financial position / financial performance',
               'a date / a period',
               'primary user / other user',
               'balance sheet / income statement'],
        nots=['General purpose does not mean general interest. It means one '
              'report serving users who cannot demand one of their own.',
              'The statements do not report what a company is worth. They '
              'report what it owns and owes, measured under rules.'],
    ),

    # Kept in the data because the answer key and the checker read them. They
    # are no longer printed: a list of five promises at the top of a handout
    # told the student what they were about to be told.
    objectives=[
        'Name the primary users of general purpose financial statements.',
        'Say what each of the four statements is for.',
        'Choose the statement that answers a given question.',
        'Say why one set of statements cannot be written for one user.',
        'Use financial position and financial performance as the exam uses '
        'them.',
    ],

    terms=[
        ('general purpose financial reporting',
         'One set of statements prepared for users who cannot require a '
         'company to produce a report in their own format.',
         'التقرير المالي ذو الغرض العام',
         'General purpose means one report for many readers, not a report '
         'about general matters.'),
        ('primary user',
         'An existing or potential investor, lender or other creditor: the '
         'readers the statements are written for.',
         'المستخدم الرئيسي',
         'A short list, and employees, customers and regulators are not on '
         'it. They may read the statements; the statements are not written '
         'for them.'),
        ('financial position',
         'What a company owns and owes at one moment: the subject of the '
         'balance sheet.', 'المركز المالي',
         'The exam says financial position far more often than it says '
         'balance sheet, and means the same thing.'),
        ('financial performance',
         'What a company earned and spent over a span of time: the subject of '
         'the income statement.', 'الأداء المالي',
         'Performance is a period word. If a question says position it is '
         'asking about a date.'),
        ('stewardship',
         'How well management has used the resources entrusted to it by the '
         'providers of capital.', 'الإشراف على الموارد',
         'The second job the statements do. The exam tests it as a purpose in '
         'its own right, not as part of decision usefulness.'),
        ('comparability',
         'The quality that lets a user set one company, or one year, beside '
         'another.', 'القابلية للمقارنة',
         'It is why two years are always presented, and why a change of '
         'method has to be disclosed.'),
    ],

    blocks=[
        ('case', 'The company you will work in for six volumes',
         ['Northwind Components, Inc. imports electronic components and sells '
          'them to equipment makers. It has one warehouse near the port, two '
          'sales offices and a small assembly line.',
          'Its shares are held by about forty investors, none of whom works in '
          'the business. Its bank has lent it money repayable over several '
          'years, and its suppliers sell to it on credit.',
          'None of those people can walk into the accounts department and ask '
          'for a report in the shape they would like. They get one set of '
          'statements, prepared the same way for all of them.',
          'The year just ended is %s and the year before it is %s. Both are '
          'presented, because a reader given one year alone cannot see '
          'whether anything is getting better or worse.' % (Y, PY),
          'In this handout you calculate nothing. You work out who is asking, '
          'and which statement answers them.'],
         ['شركة نورثويند للمكونات تستورد المكونات الإلكترونية وتبيعها لمصنّعي '
          'المعدات. لديها مستودع واحد قرب الميناء، ومكتبان للمبيعات، وخط تجميع '
          'صغير.',
          'يملك أسهمها نحو أربعين مستثمراً، لا يعمل أي منهم داخل الشركة. وقد '
          'أقرضها المصرف مبلغاً يُسدَّد على عدة سنوات، ويبيع لها مورّدوها '
          'بالأجل.',
          'لا يستطيع أي من هؤلاء أن يدخل قسم المحاسبة ويطلب تقريراً بالشكل '
          'الذي يناسبه. جميعهم يحصلون على مجموعة واحدة من القوائم، تُعدّ '
          'بالطريقة نفسها للجميع.',
          'السنة المنتهية هي %s والسنة التي سبقتها هي %s. وتُعرض السنتان معاً، '
          'لأن القارئ الذي يرى سنة واحدة فقط لا يستطيع أن يعرف ما إذا كان شيء '
          'ما يتحسن أم يسوء.' % (Y, PY),
          'في هذه الورقة لن تُجري أي حساب. ستحدد مَن هو السائل، وأي قائمة تجيب '
          'عليه.']),

        ('part', 'Part 1 · Who is asking?', 'and who is not'),

        ('prompt', 'Exercise 1A',
         'Read and complete. Write one word in each space.'),
        ('fill', 'R1',
         ['A company could in principle write a different report for every '
          'reader. Its bank could ask for one shape, its shareholders for '
          'another. Most readers, however, have no power to demand anything, '
          'so one report is prepared for all of them. The framework calls it '
          'general purpose financial reporting, and the word that does the '
          'work there is {general}.',
          'The framework names the readers it is written for. They are '
          'existing and potential investors, lenders and other creditors, and '
          'the framework calls them the {primary} users.',
          'Employees, customers and regulators all read the statements too, '
          'and the report is not addressed to them. The test is whether the '
          'reader can require the company to produce a report of their own '
          '{design}.',
          'What those readers want is the same thing in three forms: some '
          'basis for judging the amount, the timing and the certainty of the '
          'company’s future cash {flows}.'],
         {'general': ('One report, for readers who cannot ask for their own.',
                      ''),
          'primary': ('The framework’s own word for the named readers.', ''),
          'design': ('Power to demand a format is the whole test.',
                     'Students sort readers by how important they seem. The '
                     'question is whether they can command a report.'),
          'flows': ('Amount, timing and certainty — of what?', '')},
         ['public', 'secondary', 'profits']),
        ('fig', 'buckets', 'Three readers, three questions',
         [('THE INVESTOR', READER,
           ['Should I buy, hold or sell?',
            'Will there be a dividend?',
            'Reads for returns']),
          ('THE LENDER', STMT,
           ['Will the loan be repaid, and on time?',
            'Is there enough cash coming in?',
            'Reads for safety']),
          ('THE SUPPLIER', SLATE,
           ['Will my invoice be paid?',
            'Should I extend more credit?',
            'Reads for the short term'])],
         'All three are primary users and all three get the same document. '
         'None of them can ask for it to be rearranged.'),

        ('prompt', 'Exercise 1B',
         'Match each reader to the decision they are trying to make. Write '
         'one letter in each space.',
         'Ask what each reader stands to lose, and the decision follows.'),
        ('match',
         ['An investor holding shares',
          'A bank with a five-year loan outstanding',
          'A supplier selling on 30-day credit',
          'The management of the company',
          'A government tax authority'],
         ['Whether to buy more shares, hold, or sell',
          'Whether the interest and principal will be paid when due',
          'Whether to keep extending credit, and on what terms',
          'How to run the business, using information no outsider has',
          'Not a primary user: it can demand its own return'],
         ['A', 'B', 'C', 'D', 'E'],
         'Four of the five read what they are given. The fifth writes its own '
         'rules and asks for its own forms, which is exactly why it is not a '
         'primary user.'),
        ('fig', 'fork', 'The one test that sorts every reader',
         [('Can this reader require a report in their own format?',
           'NO → a primary user, and the statements are written for them',
           READER),
          ('Can they demand their own schedules, as a tax authority does?',
           'YES → not a primary user, however powerful they are', RUST),
          ('Do they have access to internal information anyway?',
           'Management does, which is why it is not a primary user either',
           SLATE)]),

        ('part', 'Part 2 · Four statements, four questions',
         'and the figure each one holds'),

        ('prompt', 'Exercise 1C',
         'Read and complete. Write one word in each space.'),
        ('fill', 'R1',
         ['Each statement answers one question. The income statement asks what '
          'was earned and what was spent, and it covers a span of time called '
          'a {period}.',
          'The balance sheet asks what the company owns and owes, and it can '
          'only be answered at one moment. It is drawn up at a single '
          '{date}.',
          'The statement of cash flows asks where the cash came from and where '
          'it went, which is again a question about a span. The statement of '
          'changes in equity asks what happened to the owners’ {stake}.',
          'Two of the four are therefore period statements and two describe '
          'something else. The one that describes a single moment is the '
          'balance {sheet}.'],
         {'period': ('A span of time, not a moment.', ''),
          'date': ('One moment, and the statement is dated.', ''),
          'stake': ('What the owners have in the company.', ''),
          'sheet': ('Only one of the four is drawn at a date.',
                    'Students treat all four as annual reports. Only three '
                    'cover a span; the balance sheet is a photograph.')},
         ['moment', 'year', 'statement']),
        ('fig', 'matrix', 'Which statement, and over what span',
         ['Income statement', 'Balance sheet', 'Statement of cash flows',
          'Statement of changes in equity'],
         ['The question it answers', 'Period, or a date?'],
         [['What was earned and spent?', 'A period'],
          ['What is owned and owed?', 'A single date'],
          ['Where did the cash come from and go?', 'A period'],
          ['What happened to the owners’ stake?', 'A period']],
         'Three of the four cover a span of time. The one that does not is the '
         'reason the exam says position rather than performance.'),

        ('prompt', 'Exercise 1D',
         'Name the statement that answers each question, then find Northwind’s '
         'figure for it. The first row is done for you.',
         'Work along the row: the question decides the statement, and the '
         'statement decides where to look.'),
        ('worked', _Q1H, _Q1, STMT, _Q1W,
         'Row 1 is worked. Five rows to go, and every figure is in the '
         'statements at the back of this volume.'),
        ('fig', 'timeline', 'One sale, three statements, three moments',
         [('The sale is made', 'The income statement records the revenue, in '
                               'the period it was earned', STMT),
          ('The invoice is unpaid', 'The balance sheet shows a receivable at '
                                    'the year end date', READER),
          ('The customer pays', 'The statement of cash flows records the cash, '
                                'in the period it arrived', OK)],
         'One transaction, reported three times, answering three different '
         'questions. None of the three is more correct than the others.'),

        ('part', 'Part 3 · A span of time, or one moment?',
         'the distinction the exam leans on'),

        ('prompt', 'Exercise 1E',
         'Decide whether each figure describes a span of time or a single '
         'moment, and say how you can tell. The first row is done for you.'),
        ('worked', _Q2H, _Q2, READER, _Q2W,
         'The third column is the one that matters. A figure that accumulates '
         'is a period figure; a figure that could be counted in an afternoon '
         'is a date figure.'),
        ('fig', 'scale',
         'A PERIOD FIGURE',
         ['Accumulated over a span of time',
          'Starts again at zero each year',
          'Sales, expenses, profit, cash flows',
          'The exam calls this financial performance'],
         'A DATE FIGURE',
         ['Counted at one moment',
          'Carries forward into the next year',
          'Assets, liabilities, equity, cash in the bank',
          'The exam calls this financial position']),

        ('part', 'Part 4 · Why not one statement each?',
         'the limits of a general purpose report'),

        ('prompt', 'Exercise 1F',
         'Read and complete. Write one word in each space.'),
        ('fill', 'R2',
         ['A report written for the bank would emphasise cash and security. '
          'One written for an investor would emphasise growth. A single report '
          'cannot do both perfectly, so it is designed to meet the needs most '
          'readers have in {common} rather than to satisfy any one of them '
          'fully.',
          'That is a real cost and the framework accepts it openly. What a '
          'general purpose report buys in exchange is that every reader is '
          'looking at the same document, so one company can be set beside '
          'another. The framework calls that quality {comparability}.',
          'It is also why two years are always presented. A single year tells '
          'a reader a level and nothing about direction, and direction is what '
          'a {trend} shows.',
          'And it is why the statements do a second job beyond helping anyone '
          'decide anything. They let the providers of capital judge how well '
          'management has used what was entrusted to it, which the framework '
          'calls {stewardship}.'],
         {'common': ('What most readers need, rather than what one needs.',
                     ''),
          'comparability': ('One document, so companies can be set side by '
                            'side.', ''),
          'trend': ('Two years, because one shows no direction.', ''),
          'stewardship': ('The second purpose, and the exam tests it on its '
                          'own.',
                          'Students name only decision usefulness. The '
                          'framework gives two purposes and asks about the '
                          'second.')},
         ['particular', 'relevance', 'estimate']),
        ('fig', 'workplace', 'Who is asking Northwind for its statements',
         [('Layla', 'An investor — should she buy more?', 'w', READER),
          ('Omar', 'The bank — will the loan be repaid?', 'm', STMT),
          ('Hana', 'A supplier — will the invoice be paid?', 'w', SLATE)],
         [('doc', 'One set of statements'),
          ('bank', 'A five-year loan'),
          ('calendar', 'Two years shown'),
          ('scale', 'The same for all')],
         'Three readers, three questions, one document. None of them can ask '
         'for it to be rewritten, and that is what general purpose means.'),

        ('watch', 'The statements are prepared under rules and they use '
                  'estimates. They do not report what a company is worth, and '
                  'they never claim to. A question that asks for the value of '
                  'a company is not asking about the balance sheet.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'The primary users of general purpose financial reports are:',
         ['Employees, customers and regulators',
          'Existing and potential investors, lenders and other creditors',
          'Management and the board of directors',
          'Any party with an interest in the company'],
         1, 'Level A',
         'The framework names a short list, and it is defined by who cannot '
         'demand a report of their own. (C) has access to everything already, '
         'which is exactly why management is excluded.'),

        ('mcq', 'A reader wants to know whether Northwind generated enough '
                'cash from trading to repay a loan. The statement that answers '
                'this is the:',
         ['Income statement', 'Statement of cash flows', 'Balance sheet',
          'Statement of changes in equity'],
         1, 'Level A',
         'Cash generated by trading is the operating section of the cash flow '
         'statement. (A) reports profit, which is measured on the accrual '
         'basis and is not the same question.'),

        ('mcq', 'The phrase financial position refers to:',
         ['Performance over the reporting period',
          'What a company owns and owes at a single date',
          'The cash generated during the year',
          'The market value of the company'],
         1, 'Level A',
         'Position is a date word and performance is a period word. (D) is the '
         'one the statements explicitly do not report.'),

        ('mcq', 'Northwind reports net income of %s and holds %s of cash. The '
                'difference arises because:' % (money(N.net_income),
                                                money(N.cash)),
         ['One of the two figures is wrong',
          'Profit is measured on the accrual basis and cash is not',
          'The cash was paid out as dividends',
          'The two figures measure the same thing at different dates'],
         1, 'Level B',
         'Profit counts revenue when earned and cash when it moves, so the two '
         'answer different questions. (C) describes one cause among many and '
         'would not account for the whole gap.'),

        ('mcq', 'The stewardship objective of financial reporting concerns:',
         ['Forecasting future profits',
          'How efficiently management has used the resources entrusted to it',
          'Compliance with tax law',
          'The valuation of the company’s shares'],
         1, 'Level B',
         'A purpose in its own right, alongside decision usefulness. Students '
         'who name only the first purpose lose this mark every time it is '
         'asked.'),

        ('mcq', 'Two companies in the same industry use different but '
                'acceptable accounting methods. This primarily affects:',
         ['Relevance', 'Comparability', 'Faithful representation',
          'Timeliness'],
         1, 'Level C',
         'Both sets of figures may be entirely faithful and still not be '
         'comparable, which is why a change of method must be disclosed. (C) '
         'is about whether a figure represents what it purports to.'),

        ('mcq', 'Why can a general purpose report not be tailored to one '
                'user?',
         ['Because the standards forbid additional disclosure',
          'Because it serves users who cannot demand their own report, so it '
          'meets needs they have in common',
          'Because preparing more than one report is illegal',
          'Because all users want exactly the same information'],
         1, 'Level C',
         'Common needs, by design, and the framework concedes that no single '
         'user is served perfectly. (D) is the assumption the whole concept '
         'exists to deny.'),

        ('tip', 'When a question names a reader, ask one thing first: can this '
                'reader demand a report in their own format? If yes, they are '
                'not a primary user and the question is usually testing that '
                'alone.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1D · the statement and the figure'),
        ('worked', _Q1H,
         [(['How much did the company sell this year?', 'Income statement',
            money(N.sales)], 'w'),
          (['What profit was left after every expense?', 'Income statement',
            money(N.net_income)], 'w'),
          (['What does the company own and owe at the year end?',
            'Balance sheet', '%s of assets' % money(N.total_assets)], 'w'),
          (['How much cash did the trading operations generate?',
            'Statement of cash flows', money(708_000)], 'w'),
          (['How much was paid out to the shareholders?',
            'Statement of changes in equity', money(N.dividends)], 'w'),
          (['How much cash was actually in the bank at the year end?',
            'Balance sheet', money(N.cash)], 'w')],
         STMT, _Q1W,
         'Two of the six are answered by the balance sheet and two by the '
         'income statement, which is why naming the statement is the first '
         'move and not the last.'),
        ('h3', 'Exercise 1E · a span of time, or one moment'),
        ('worked', _Q2H,
         [(['Sales of %s' % money(N.sales),
            'A span: the year to 31 December %s' % Y,
            'It accumulated day by day over twelve months'], 'w'),
           (['Total assets of %s' % money(N.total_assets),
             'One moment: 31 December %s' % Y,
             'It could be counted in an afternoon'], 'w'),
           (['Net income of %s' % money(N.net_income),
             'A span: the year to 31 December %s' % Y,
             'It is what was left after a year of earning and spending'], 'w'),
           (['Cash of %s' % money(N.cash),
             'One moment: 31 December %s' % Y,
             'It is a bank balance, and it carries into next year'], 'w')],
         READER, _Q2W,
         'The test in the last column is the one to carry into the exam: does '
         'the figure accumulate, or could it be counted?'),
        ('prose', 'Note what the two tables did between them. The first asked '
                  'you to choose a statement and then find a figure; the '
                  'second asked you to say what kind of figure it was. '
                  'Neither asked you to compute anything, because this '
                  'handout is about where information lives rather than how '
                  'it is measured.', 'R2'),
    ],
)
