# -*- coding: utf-8 -*-
"""Volume 1, Handout 1 — the item-only format.

Nothing on these pages explains anything. Every element is a question,
including the scaffolding, and the only element that is not a question is the
material the questions are asked about: a list of readers, four statement
headings, twelve figures. The material states no rule and reaches no
conclusion, so every conclusion on the page has to be arrived at by answering
something.

Where each design decision comes from:

  cold open, then the same    the pretesting effect. An unsuccessful retrieval
  six items at the end        attempt before instruction improves how well the
                              instruction is encoded, so the opening items are
                              ones the student cannot yet answer. Repeating
                              them verbatim at the end replaces the objectives
                              list with evidence instead of a promise.

  STEP items                  the scaffolding, converted. A grey "first move"
                              line told the student what to do. A step with
                              three wrong options in it lets a student who
                              would have gone the wrong way go it, and find
                              out.

  minimal pairs               variation theory. Difference is discerned before
                              sameness, so each discrimination item holds
                              everything still and varies exactly one feature:
                              two readers who differ only in the power to
                              demand a format, four headings that differ only
                              in the date phrase.

  uneven, reusable matching   a matching list with as many responses as
                              premises can be finished by elimination. Four
                              responses against eight premises, each usable
                              any number of times, cannot.

  two-tier items              the answer and the reason, both chosen. On a
                              four-option item a guess is right once in four
                              times and reads exactly like knowing.

  three faded stages          the completion-problem strategy. The same task
                              three times with less given each time, ending
                              with nothing given.

  diagnosis items             somebody else's work, and it is wrong. The
                              student is asked to name the error, which cannot
                              be reached by recognising a figure.

  the interleaved set         mixed practice for low-discriminability
                              categories. Students reliably judge blocked
                              practice to have helped more and are reliably
                              wrong about it, which is worth the teacher
                              knowing.

  CHECK bars                  programmed instruction's one durable finding was
                              the value of marking an answer at once. Its
                              failure was frames so small the student never
                              held a whole problem, which is what the terminal
                              parts are for.

Response points on the page: 103 — 29 multiple choice, 4 two-tier (two
answers each), 4 diagnoses, 4 steps, 14 blanks, 6 classifications, 8
matches and 30 table cells. The diagrams hold 109 further cells that are
drawn blank rather than filled in, because a diagram that shows the
answer is the thing this format exists to remove.

Sentences that tell the student something: none.
"""
from fadata import N, Y, PY
from data import money

READER, STMT, SLATE, WARN = '1F6F8F', '2E7D5B', '44506B', 'A05A2B'
RUST, OK, CHECK = 'B2531F', '2B6CB0', '6D3F7E'

# ---------------------------------------------------------------- material --
_MAT_A = [
    ('Hala', 'holds 2,000 of Northwind’s 20,000 shares. She has never '
             'worked there and has no other dealings with the company.'),
    ('The Gulf Bank', 'lent Northwind %s, repayable over five years. It '
                      'reads the statements before each annual review of the '
                      'facility.' % money(N.ltd + N.ltd_current)),
    ('Delta Plastics', 'sells Northwind resin and invoices it on 30 days’ '
                       'credit. It is owed part of the %s shown as accounts '
                       'payable.' % money(N.ap)),
    ('The Ministry of Finance', 'requires Northwind to file an annual tax '
                               'return on a form the Ministry designs, and '
                               'can ask for any schedule it wants.'),
    ('Samer', 'works on Northwind’s assembly line. His union negotiates pay '
              'each year and would like to know what the company can afford.'),
    ('Rania', 'is Northwind’s finance director. She signs the statements and '
              'can open the ledger at any hour of any day.'),
]

_MAT_A_AR = [
    ('هالة', 'تملك 2,000 سهم من أصل 20,000 سهم في نورثويند. لم تعمل فيها '
             'يوماً وليست لها معها أي تعاملات أخرى.'),
    ('بنك الخليج', 'أقرض نورثويند مبلغ %s يُسدَّد على خمس سنوات، ويقرأ القوائم '
                   'قبل كل مراجعة سنوية للتسهيل.' % money(N.ltd + N.ltd_current)),
    ('دلتا بلاستيك', 'تبيع نورثويند مادة الراتنج وتصدر لها فاتورة بأجل 30 '
                     'يوماً، ولها جزء من مبلغ %s المدرج كحسابات دائنة.'
                     % money(N.ap)),
    ('وزارة المالية', 'تُلزم نورثويند بتقديم إقرار ضريبي سنوي على نموذج تصممه '
                      'الوزارة، ولها أن تطلب أي جدول تشاء.'),
    ('سامر', 'يعمل على خط التجميع في نورثويند. ونقابته تفاوض على الأجور كل '
             'عام وتود أن تعرف ما تستطيع الشركة تحمّله.'),
    ('رانيا', 'هي المديرة المالية لنورثويند. توقّع القوائم وتستطيع فتح دفتر '
              'الأستاذ في أي ساعة من أي يوم.'),
]

_MAT_B = [
    ('1', 'Statement of Income  —  for the year ended 31 December %s' % Y),
    ('2', 'Statement of Financial Position  —  as at 31 December %s' % Y),
    ('3', 'Statement of Cash Flows  —  for the year ended 31 December %s' % Y),
    ('4', 'Statement of Changes in Equity  —  for the year ended 31 December %s'
     % Y),
]

_MAT_B_AR = [
    ('1', 'قائمة الدخل  —  للسنة المنتهية في 31 ديسمبر %s' % Y),
    ('2', 'قائمة المركز المالي  —  كما في 31 ديسمبر %s' % Y),
    ('3', 'قائمة التدفقات النقدية  —  للسنة المنتهية في 31 ديسمبر %s' % Y),
    ('4', 'قائمة التغيرات في حقوق الملكية  —  للسنة المنتهية في 31 ديسمبر %s'
     % Y),
]

_MAT_C = [
    ('Accounts payable', money(N.ap)),
    ('Administrative expenses', money(N.admin)),
    ('Cash', money(N.cash)),
    ('Common stock', money(N.common_stock)),
    ('Cost of sales', money(N.cogs)),
    ('Depreciation and amortisation', money(N.dep_amort)),
    ('Gain on disposal of equipment', money(N.gain_disposal)),
    ('Income tax expense', money(N.tax)),
    ('Interest expense', money(N.interest)),
    ('Inventory', money(N.inventory)),
    ('Sales', money(N.sales)),
    ('Selling expenses', money(N.selling)),
]

_MAT_C_AR = [
    'الأرقام الاثنا عشر أعلاه مأخوذة من دفاتر نورثويند لسنة %s، وهي مرتّبة '
    'أبجدياً لا حسب القائمة التي تنتمي إليها. ليس كل رقم منها ينتمي إلى القائمة '
    'نفسها، وليست كل الأرقام لازمة في كل جزء.' % Y,
]

# ------------------------------------------------- faded completion stages --
_S1H = ['Line', 'Figure', 'How you got it']
_S1W = [40, 26, 34]
_S1 = [
    (['Sales', money(N.sales), 'Read from Material C'], 'w'),
    (['Cost of sales', money(N.cogs), 'Read from Material C'], 'w'),
    (['Gross margin', '', ''], 'd'),
    (['Selling expenses', '', ''], 'd'),
    (['Administrative expenses', '', ''], 'd'),
    (['Depreciation and amortisation', '', ''], 'd'),
    (['Operating income', '', ''], 'd'),
]

_S2H = ['Line', 'Figure', 'Add or subtract?']
_S2W = [40, 26, 34]
_S2 = [
    (['Operating income, from Stage 1', money(N.operating_income),
      'the line you have just reached'], 'w'),
    (['Interest expense', '', ''], 'd'),
    (['Gain on disposal of equipment', '', ''], 'd'),
    (['Income before income tax', '', ''], 'd'),
    (['Income tax expense', '', ''], 'd'),
    (['Net income', '', ''], 'd'),
]

_S3H = ['Figure from Material C', 'Which statement holds it',
        'A period or a date?']
_S3W = [38, 34, 28]
_S3 = [
    (['Sales of %s' % money(N.sales), 'Statement of income',
      'A period: the year to 31 December %s' % Y], 'w'),
    (['Inventory of %s' % money(N.inventory), '', ''], 'd'),
    (['Interest expense of %s' % money(N.interest), '', ''], 'd'),
    (['Cash of %s' % money(N.cash), '', ''], 'd'),
    (['Accounts payable of %s' % money(N.ap), '', ''], 'd'),
    (['Common stock of %s' % money(N.common_stock), '', ''], 'd'),
]

# ------------------------------------------------------------- the key work --
_K1 = [
    ['Sales', money(N.sales), 'given'],
    ['Cost of sales', money(N.cogs), 'given'],
    ['Gross margin', money(N.gross_margin), '%s less %s'
     % (money(N.sales), money(N.cogs))],
    ['Selling expenses', money(N.selling), 'given'],
    ['Administrative expenses', money(N.admin), 'given'],
    ['Depreciation and amortisation', money(N.dep_amort), 'given'],
    ['Operating income', money(N.operating_income),
     '%s less the three expenses, which total %s'
     % (money(N.gross_margin), money(N.opex))],
]

_K2 = [
    ['Operating income', money(N.operating_income), 'from Stage 1'],
    ['Interest expense', '(%s)' % money(N.interest), 'subtract'],
    ['Gain on disposal', money(N.gain_disposal), 'add'],
    ['Income before income tax', money(N.pretax), '%s less %s plus %s'
     % (money(N.operating_income), money(N.interest), money(N.gain_disposal))],
    ['Income tax expense', '(%s)' % money(N.tax), 'subtract'],
    ['Net income', money(N.net_income), '%s less %s'
     % (money(N.pretax), money(N.tax))],
]

_K3 = [
    ['Sales of %s' % money(N.sales), 'Statement of income', 'A period'],
    ['Inventory of %s' % money(N.inventory), 'Statement of financial position',
     'A date'],
    ['Interest expense of %s' % money(N.interest), 'Statement of income',
     'A period'],
    ['Cash of %s' % money(N.cash), 'Statement of financial position',
     'A date'],
    ['Accounts payable of %s' % money(N.ap),
     'Statement of financial position', 'A date'],
    ['Common stock of %s' % money(N.common_stock),
     'Statement of changes in equity, and the position statement at the '
     'year end', 'The movement is a period; the balance is a date'],
]


# ---- the six cold-open items, used twice: once before and once after -------
# Verbatim repetition is the whole mechanism. A paraphrase would let a student
# tell themselves they had answered a different question.
_COLD = [
    ('Which one of these readers can require Northwind to produce a report in '
     'a format of its own choosing?',
     ['The Gulf Bank, which has lent it money for five years',
      'Hala, who holds 2,000 of its 20,000 shares',
      'The Ministry of Finance, which collects its tax',
      'Delta Plastics, which invoices it on 30 days’ credit'], 2,
     'Only the Ministry designs the form. Everyone else reads what they are '
     'given, and that is the test the framework uses — not how much is at '
     'stake, and not how powerful the reader is.',
     {'A': 'you are sorting readers by how much money is at stake',
      'B': 'you are sorting by ownership rather than by power to demand',
      'D': 'you are reading short credit as weak and therefore excluded'}),

    ('Financial position is reported:',
     ['over a period', 'at a single date', 'both, in the same column',
      'neither: it is a ratio'], 1,
     'Position is what is owned and owed, which can only be true at one '
     'moment. Performance is the period word; position is the date word, and '
     'the exam uses both far more often than it says balance sheet.',
     {'A': 'you have swapped position and performance',
      'C': 'you are thinking of the two-year comparative, which is two dates '
           'rather than a period'}),

    ('Northwind’s total assets of %s is:' % money(N.total_assets),
     ['a figure that accumulated through the year',
      'a figure measured at one moment',
      'an average of the twelve month ends',
      'the total of the year’s purchases'], 1,
     'Assets are counted at the year end. Nothing about the figure '
     'accumulated: a balance is a photograph, and sales, expenses and cash '
     'flows are the things that accumulate.',
     {'A': 'you are treating every large figure as a total of the year',
      'C': 'you are thinking of an average balance, which is a ratio input '
           'and not a reported figure'}),

    ('Which statement answers the question “did the trading operations '
     'generate cash this year?”',
     ['The statement of income', 'The statement of financial position',
      'The statement of cash flows', 'The statement of changes in equity'], 2,
     'Trading generated cash is a cash question about a span of time, and '
     'only one statement is about cash over a span. The income statement '
     'answers what was earned, which is not the same thing.',
     {'A': 'you are reading profit as cash',
      'B': 'you are reading the closing cash balance as the cash generated'}),

    ('Northwind presents %s and %s side by side. The quality that requires it '
     'is:' % (Y, PY),
     ['relevance', 'comparability', 'prudence', 'materiality'], 1,
     'One year alone cannot tell a reader whether anything is improving. '
     'Comparability is also why a change of method has to be disclosed, and '
     'it is the reason two years appear and not one.',
     {'A': 'you are naming the quality that makes a figure worth having at '
           'all, not the one that needs a second year',
      'C': 'prudence is about measuring uncertainty, not about how many '
           'years are shown'}),

    ('Rania, the finance director, is not a primary user. The reason is that '
     'she:',
     ['already has everything the statements contain, and more',
      'has no money invested in the company',
      'is the person who signs the statements',
      'is an employee rather than an owner'], 0,
     'Primary users are readers who depend on the statements because they '
     'have no other route to the information. Management has the ledger, so '
     'the statements tell it nothing it did not know.',
     {'B': 'you are testing for a financial stake, and a lender has no '
           'ownership stake either',
      'C': 'signing it is a consequence of her access, not the reason she is '
           'excluded',
      'D': 'an employee is excluded for a different reason: not being on the '
           'framework’s list at all'}),
]


def _cold(start):
    """The six items as mcq blocks, numbered from wherever they are placed."""
    return [('mcq', stem, opts, ans, 'Level B', why, mis)
            for stem, opts, ans, why, mis in _COLD]


HANDOUT = dict(
    n=1,
    title='Who Reads These Statements, and What They Need',
    subtitle='Six readers, four statements, twelve figures. Ninety-two things '
             'to decide and nothing to read.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the readers are being sorted, R2 once the '
                 'statements are being chosen.',
        collocations=['prepare general purpose financial statements',
                      'meet the needs of a primary user',
                      'report financial position at a date',
                      'report financial performance over a period',
                      'hold management to account for the resources '
                      'entrusted to it'],
        pairs=['financial position / financial performance',
               'a date / a period', 'primary user / other user'],
        nots=['General purpose does not mean general interest.',
              'The statements do not report what a company is worth.'],
    ),

    objectives=[
        'Sort any reader by the one test the framework uses.',
        'Choose the statement that answers a given question.',
        'Say whether a figure belongs to a period or to a date.',
        'Build an income statement from unsorted figures.',
        'Name the error in a statement somebody else has got wrong.',
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
         'A short list. Employees, customers and regulators may read the '
         'statements; the statements are not written for them.'),
        ('financial position',
         'What a company owns and owes at one moment: the subject of the '
         'balance sheet.', 'المركز المالي',
         'The exam says financial position far more often than it says '
         'balance sheet, and means the same thing.'),
        ('financial performance',
         'What a company earned and spent over a span of time: the subject '
         'of the income statement.', 'الأداء المالي',
         'Performance is a period word. If a question says position it is '
         'asking about a date.'),
        ('stewardship',
         'How well management has used the resources entrusted to it by the '
         'providers of capital.', 'الإشراف على الموارد',
         'The second job the statements do, and the exam tests it as a '
         'purpose in its own right.'),
        ('comparability',
         'The quality that lets a user set one company, or one year, beside '
         'another.', 'القابلية للمقارنة',
         'It is why two years are always presented, and why a change of '
         'method has to be disclosed.'),
    ],
)


_MATCH_L = [
    'How much did Northwind sell over the year?',
    'What did it own and owe on 31 December %s?' % Y,
    'By how much did the cash balance move during the year?',
    'How much of the year’s profit was kept in the business rather than '
    'paid out?',
    'What was left after every expense had been deducted?',
    'How much was owed to suppliers at the year end?',
    'How much was spent on new plant and equipment during the year?',
    'What did the shareholders put in when new shares were issued?',
]
_MATCH_R = ['Statement of income',
            'Statement of financial position',
            'Statement of cash flows',
            'Statement of changes in equity']
_MATCH_A = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']

_GRID_H = ['Reader from Material A', 'A primary user',
           'Reads them, but not a primary user',
           'Has another route to the information']
_GRID_I = ['Hala', 'The Gulf Bank', 'Delta Plastics',
           'The Ministry of Finance', 'Samer', 'Rania']
_GRID_A = ['A primary user', 'A primary user', 'A primary user',
           'Has another route to the information',
           'Reads them, but not a primary user',
           'Has another route to the information']


HANDOUT['blocks'] = [

    # ============================================= cold open ================
    ('part', 'Cold open', 'six questions, none of them taught yet'),
    ('prompt', 'Items 1 to 6',
     'Answer all six, then tick whether you were sure. You have not been '
     'taught any of this and some of your answers will be wrong, which is '
     'what the page is for. The same six come back on the last page, word '
     'for word.'),
    ('fig', 'matrix', 'Record your six answers before you go on',
     ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
     ['The letter you chose', 'Were you sure?  yes / no'], [],
     'You fill this grid in again on the last page. Do not come back and '
     'change it.'),
    ] + _cold(1) + [
    ('gate', '1 to 6', '', 'do not mark these yet; they are marked on the '
     'last page'),

    # ============================================= part 1 ===================
    ('part', 'Part 1 · Six readers', 'and the one question that sorts them'),
    ('stim', 'MATERIAL A',
     'Six people who will read Northwind’s statements for %s' % Y,
     _MAT_A, _MAT_A_AR),

    ('prompt', 'Step 1, the grid, and items 7 to 11',
     'Work from Material A and from nothing else. The step comes first and '
     'it has wrong options in it.'),
    ('step', 'Before you sort the six readers, decide which question does '
     'the sorting.',
     ['who has the most money at stake',
      'who can require a report on a form they design themselves',
      'who reads the statements most often',
      'who is closest to the people who run the company'], 1,
     'Three of these sort readers by how exposed or how interested they are, '
     'and the framework sorts them by neither. The test is the power to '
     'demand a format: a reader who has it does not need general purpose '
     'statements, and a reader who lacks it has nothing else.'),
    ('sortgrid', _GRID_H, _GRID_I, _GRID_A,
     'Two readers end up outside the primary group for opposite reasons. One '
     'writes its own form; one can read the ledger.'),
    ('fig', 'fork', 'Three questions, and what each answer tells you',
     [('Can this reader require a report on a form of their own design?',
       '', RUST),
      ('Can this reader open the ledger whenever they like?', '', SLATE),
      ('Must this reader take the statements exactly as they are given?',
       '', READER)], True),

    ('mcq',
     'The Gulf Bank and the Ministry of Finance both have a claim on '
     'Northwind’s cash. Only one of them is a primary user. The feature that '
     'separates them is:',
     ['the size of the claim',
      'whether the claim is secured on the company’s assets',
      'whether they can require a report in a format they design',
      'whether the claim falls due within a year'], 2, 'Level B',
     'Everything else about the two is held still on purpose. Both are owed '
     'money, both read the statements, both have power. One can design the '
     'form it is answered on and the other cannot, and that is the only '
     'thing the framework asks.',
     {'A': 'you are ranking readers by exposure, which the framework never '
           'does',
      'B': 'security changes what a lender recovers, not whether it is a '
           'primary user',
      'D': 'the length of the claim is the Delta Plastics question, and the '
           'answer there is that it makes no difference'}),

    ('mcq',
     'Hala holds shares and Samer works on the assembly line. Both are '
     'outside the accounts department. Hala is a primary user and Samer is '
     'not, because:',
     ['Hala has more money at risk than Samer does',
      'the framework’s list names investors, lenders and other creditors, '
      'and an employee is none of the three',
      'Samer can ask his union to obtain the information',
      'Samer is paid by the company and so is not independent of it'], 1,
     'Level B',
     'The list is short and closed, and being affected by the company is not '
     'enough to get a reader onto it. Samer may lose more than Hala and he '
     'is still not a primary user.',
     {'A': 'you are ranking by exposure again; an employee with his whole '
           'income at risk is still not on the list',
      'C': 'asking through somebody else does not change the category, and '
           'the union cannot demand a format either',
      'D': 'independence is an auditing idea, not the framework’s test'}),

    ('mcq',
     'Delta Plastics is owed money for thirty days; the Gulf Bank is owed '
     'money for five years. On the framework’s list:',
     ['only the bank is named, because thirty days is too short to matter',
      'only Delta is named, because trade credit is the commonest claim',
      'both are named: the bank as a lender and Delta as an other creditor',
      'neither is named, because the list covers only owners'], 2,
     'Level A',
     'Other creditors is the phrase that carries the trade suppliers, and '
     'the list is investors, lenders and other creditors. The length of the '
     'credit changes nothing about which category a reader sits in.',
     {'A': 'you are using duration as the test, and the framework does not',
      'D': 'you are reading primary user as owner, which leaves out both '
           'lenders and suppliers'}),

    ('mcq',
     'Rania can open the ledger and the Ministry can design its own form. '
     'They are both outside the primary group, and the reasons are:',
     ['the same reason stated two ways',
      'opposite: one already has more than the statements hold, and one can '
      'compel a different report',
      'unrelated to the framework, which excludes only employees',
      'about seniority: both outrank the ordinary reader'], 1, 'Level C',
     'Two different exits from the same group. Rania does not need general '
     'purpose statements because she has the source; the Ministry does not '
     'need them because it can order something better suited to it. A '
     'student who learns one exit misses the other.',
     {'A': 'they look alike only because both end outside the group; the '
           'mechanisms are different and the exam tests both',
      'C': 'employees are a third exit, and the one that has nothing to do '
           'with power or access',
      'D': 'seniority is not a category in the framework'}),

    ('mcq',
     'The word general in general purpose financial reporting refers to:',
     ['the range of subjects the report covers',
      'the readers the one report has to serve',
      'the level of detail, which is kept general rather than specific',
      'the accounting basis, which is general rather than tax-based'], 1,
     'Level B',
     'General purpose names the audience, not the content. One report is '
     'prepared because many readers cannot ask for their own, and the report '
     'itself is as specific as the rules require.',
     {'A': 'this is the commonest misreading in the whole volume: general '
           'purpose does not mean general interest',
      'C': 'a general purpose statement is highly detailed; the word says '
           'nothing about detail',
      'D': 'the basis is a separate question and the answer to it is accrual'}),

    ('prompt', 'Exercise 1A',
     'Read and complete. Write one word in each space. The bank holds words '
     'that look right and are not.'),
    ('fill', 'R1',
     ['Material A has six readers in it, and the statements are written for '
      'four of them. The framework calls those four the {primary} users.',
      'The other two are outside the group for opposite reasons. One can '
      'require a report on a form it designs; one can open the ledger. What '
      'the four who remain have in common is that they must take the '
      'statements as they are given, which is why one report is prepared for '
      'all of them, and why the framework calls that reporting {general} '
      'purpose.',
      'Delta Plastics is owed money for thirty days and the Gulf Bank for '
      'five years. Both are on the list, because the list names investors, '
      'lenders and other {creditors}, and the length of the credit does not '
      'move a reader from one category to another.',
      'What those four readers want is one thing in three forms: a basis for '
      'judging the amount, the timing and the certainty of the company’s '
      'future cash {flows}. What they want second is a way of judging how '
      'well management has used what was entrusted to it, which the '
      'framework calls {stewardship}.'],
     {'primary': ('The framework’s own word for the named readers.',
                  'Principal is the near-miss, and it means something else '
                  'in accounting: the amount of a loan.'),
      'general': ('One report, because the readers cannot ask for their own.',
                  'Students read this as general interest. It names the '
                  'audience, not the subject matter.'),
      'creditors': ('The phrase that carries the trade suppliers onto the '
                    'list.', ''),
      'flows': ('Amount, timing and certainty — of what?', ''),
      'stewardship': ('The second job the statements do, and a purpose in '
                      'its own right.', '')},
     ['principal', 'secondary', 'privileged', 'debtors', 'balances']),
    ('fig', 'matrix', 'One test, applied six times',
     _GRID_I, ['Can they demand their own form?',
               'Can they read the ledger?', 'So which group?'], [],
     'Fill the first two columns with yes or no, and the third follows from '
     'them without any further thought.'),
    ('gate', '1A and 7 to 11', '9 of 12',
     'go back to Material A and re-read Step 1 before Part 2'),

    # ============================================= part 2 ===================
    ('part', 'Part 2 · Four statements', 'and the one phrase that tells them '
     'apart'),
    ('stim', 'MATERIAL B',
     'The four headings exactly as Northwind prints them, with the figures '
     'removed', _MAT_B, _MAT_B_AR),

    ('prompt', 'Step 2, the matching, and items 12 to 15',
     'Everything in Part 2 is answered from the four headings in Material B. '
     'No figures are needed and none are given.'),
    ('step', 'Look at the four headings and at nothing else. Apart from '
     'their names, what is the one difference between them?',
     ['the order in which the words are written',
      'one ends as at a date and the other three end for the year ended',
      'the number of columns each one will carry',
      'nothing of substance: all four headings mean the same thing'], 1,
     'Four headings, held identical except for one phrase, so the phrase is '
     'what you are being shown. Everything in Part 2 and most of Part 3 '
     'comes out of that one difference, and no sentence on these pages has '
     'to explain it.'),
    ('match', _MATCH_L, _MATCH_R, _MATCH_A,
     'A statement may be the answer more than once, or not at all. Count '
     'nothing: work each question out.'),
    ('fig', 'matrix', 'Fill this from Material B, not from memory',
     ['Statement of income', 'Statement of financial position',
      'Statement of cash flows', 'Statement of changes in equity'],
     ['A period, or a date?', 'The question it answers'], [],
     'Two columns, four rows, and every cell is decided by the heading '
     'rather than by anything you remember.'),

    ('tier',
     'Northwind’s sales of %s belong to a period or to a date?'
     % money(N.sales),
     ['A period', 'A date', 'Both, depending on the reader',
      'Neither: sales are a ratio'],
     ['because a large figure is always a total of the year',
      'because the statement that holds it is headed for the year ended',
      'because sales are collected in cash during the year',
      'because sales are compared with the prior year'], 0, 1,
     'The second tier is the whole item. A student who answers period '
     'because the figure is large will be wrong about total assets two '
     'items later; a student who answers period because of the heading will '
     'not be.',
     {'A': 'right answer, wrong reason: size is not what decides it',
      'C': 'collection is a cash question and sales are recognised whether '
           'or not cash arrives'}),

    ('tier',
     'Northwind’s total assets of %s belong to a period or to a date?'
     % money(N.total_assets),
     ['A period', 'A date', 'Both', 'Neither'],
     ['because assets were bought during the year',
      'because the statement that holds it is headed as at',
      'because assets are larger than sales',
      'because assets are measured once a year'], 1, 1,
     'The same reasoning as the previous item, applied to a figure that '
     'tempts the other way. Assets were indeed bought during the year, '
     'which is why reason (i) feels right and is not: the figure reported '
     'is what stood on one day.',
     {'A': 'you are reading the history of the balance rather than the '
           'heading of the statement',
      'D': 'how often it is measured is not what the heading says'}),

    ('tier',
     'Northwind presents %s and %s side by side. Which quality requires it, '
     'and why?' % (Y, PY),
     ['Relevance', 'Comparability', 'Prudence', 'Materiality'],
     ['because two years are twice as relevant as one',
      'because the second year makes the figures more certain',
      'because one year alone cannot show a reader whether anything moved',
      'because the exam requires two years of disclosure'], 1, 2,
     'Comparability is the only one of the four qualities that is about '
     'setting something beside something else. It is also why a change of '
     'method must be disclosed, which is a different consequence of the '
     'same quality.',
     {'A': 'relevance makes a figure worth having; it does not call for a '
           'second one',
      'C': 'prudence is about how uncertainty is measured, not how many '
           'years appear'}),

    ('tier',
     'A question asks for Northwind’s financial performance for %s. Which '
     'figure answers it, and why?' % Y,
     ['Total assets of %s' % money(N.total_assets),
      'Net income of %s' % money(N.net_income),
      'Cash of %s' % money(N.cash),
      'Accounts payable of %s' % money(N.ap)],
     ['because it is the largest figure the company reports',
      'because performance is what was earned and spent over a span, and '
      'this figure covers the year',
      'because performance means the ability to pay',
      'because net income is the figure investors care about most'], 1, 1,
     'Performance and position are the two words the exam uses most and the '
     'two that students swap most. Performance is the period word, and the '
     'reason has to be the heading rather than the importance of the figure.',
     {'A': 'you have swapped performance and position',
      'C': 'the ability to pay is a liquidity question and it is answered '
           'from the position statement and the cash flow statement'}),

    ('prompt', 'Exercise 1B',
     'Read and complete. Every answer comes out of Material B.'),
    ('fill', 'R1',
     ['Three of the four headings in Material B end with the same four '
      'words and one does not. The three that match each cover a span of '
      'time, which an accountant calls a {period}. The one that does not '
      'match is true at a single {date}.',
      'What the odd one out reports is what the company owns and owes, and '
      'the exam’s name for that is financial {position}. The three that '
      'cover a span report, among other things, what was earned and what '
      'was spent, and the exam’s name for that is financial {performance}.',
      'Which means that some questions can be answered before any figure is '
      'read. If the heading says as at, the figure underneath it is a '
      '{balance}. If the heading says for the year ended, the figure '
      'underneath it is a {movement}.'],
     {'period': ('A span of time, not a moment.', ''),
      'date': ('One moment, and the statement says which.', ''),
      'position': ('Owns and owes, at a moment.',
                   'The exam says this far more often than it says balance '
                   'sheet.'),
      'performance': ('Earned and spent, over a span.',
                      'Performance is the period word. A question that says '
                      'position is asking about a date.'),
      'balance': ('What is left standing on one day.', ''),
      'movement': ('What happened across the span.', '')},
     ['instant', 'turnover', 'liquidity', 'reserve']),
    ('fig', 'timeline', 'The year, and the two kinds of question asked of it',
     [('1 January %s' % Y, 'what stood here?', SLATE),
      ('the twelve months', 'what happened across here?', OK),
      ('31 December %s' % Y, 'what stands here?', SLATE)],
     'Two of Northwind’s four statements answer the middle question and two '
     'of them do not. Decide which before you go on.'),
    ('gate', '1B and 12 to 15', '5 of 6',
     're-read Step 2 and the four headings before Part 3'),

    # ============================================= part 3 ===================
    ('part', 'Part 3 · Twelve figures', 'and three goes at the same task'),
    ('stim', 'MATERIAL C',
     'Twelve figures from Northwind’s books for %s, in alphabetical order' % Y,
     _MAT_C, _MAT_C_AR, OK),

    ('prompt', 'Step 3 and Stage 1',
     'Build the top of the income statement from Material C. Two lines are '
     'done; the rest are yours, and the third column is where you show the '
     'arithmetic.'),
    ('step', 'Which line must you reach before you can reach operating '
     'income?',
     ['net income', 'gross margin', 'income before income tax',
      'income tax expense'], 1,
     'The other three are all below operating income, so none of them can '
     'be a step towards it. Getting the order of the subtotals right is most '
     'of what the first stage is testing.'),
    ('worked', _S1H, _S1, OK, _S1W,
     'Five rows and ten cells. Three of the five figures are read straight '
     'from Material C and two of them are arithmetic.'),
    ('fig', 'matrix', 'Which of Material C did Stage 1 not need?',
     ['Cash', 'Inventory', 'Accounts payable', 'Interest expense',
      'Gain on disposal', 'Income tax expense'],
     ['Used in Stage 1?  yes / no', 'If no, where does it belong?'], [],
     'Six of the twelve. Three of these six come back in Stage 2 and three '
     'never appear in an income statement at all.'),

    ('prompt', 'Stage 2',
     'The same task, further down the statement, and this time the third '
     'column asks only whether the line is added or subtracted.'),
    ('worked', _S2H, _S2, OK, _S2W,
     'One of these five lines is added and the rest are subtracted. Decide '
     'which from what the line is, not from where it sits in the column.'),
    ('fig', 'fork', 'Two lines below operating income, and what each does',
     [('Interest expense of %s' % money(N.interest), '', RUST),
      ('Gain on disposal of %s' % money(N.gain_disposal), '', STMT),
      ('Income tax expense of %s' % money(N.tax), '', RUST)], True),

    ('prompt', 'Stage 3',
     'The same question with nothing given: one worked row, and then six '
     'figures to place with no skeleton to place them in.'),
    ('worked', _S3H, _S3, SLATE, _S3W,
     'One of the six belongs to two statements at once, and the third '
     'column is where that shows.'),
    ('fig', 'matrix', 'Tick one column for each figure',
     ['Sales', 'Inventory', 'Interest expense', 'Cash', 'Accounts payable'],
     ['A total of the year', 'A balance at 31 December'], [],
     'Five figures. If you have ticked three in one column and two in the '
     'other, check Material C again.'),

    ('prompt', 'Exercise 1C',
     'Read and complete. One of these three answers is in the glossary at '
     'the back and two of them are not.'),
    ('fill', 'R2',
     ['Two years appear in every one of Northwind’s statements. A reader '
      'given one year alone could not tell whether anything had improved, '
      'so the second year is there to make the first {comparable}.',
      'A figure is reported in the year in which it happened rather than in '
      'the year in which cash moved, and that convention is called the '
      '{accrual} basis. Sales of %s appear in the income statement for the '
      'year whether or not every invoice has been collected, and the part '
      'not yet collected stands in the position statement as a {receivable}.'
      % money(N.sales)],
     {'comparable': ('What a second year makes the first one.', ''),
      'accrual': ('Reported when it happened, not when cash moved.',
                  'The opposite basis is cash, and the CMA tests the '
                  'difference in every volume.'),
      'receivable': ('The amount a customer still owes.', '')},
     ['cash', 'payable', 'prudent', 'deferred']),
    ('fig', 'matrix', 'The same sale, under two bases',
     ['A sale invoiced in December %s, collected in January %s' % (Y, '20X5'),
      'A sale invoiced and collected in June %s' % Y],
     ['In %s income under accrual?' % Y, 'In %s income under cash?' % Y], [],
     'One of these two rows is the same under both bases and one is not. '
     'That row is the whole reason the accrual basis has a name.'),
    ('gate', '1C and Stages 1 to 3', '28 of 34 cells',
     'redo the stage you lost cells in before Part 4'),

    # ============================================= part 4 ===================
    ('part', 'Part 4 · Four pieces of work', 'each of them wrong in exactly '
     'one way'),
    ('prompt', 'Step 4 and items 16 to 19',
     'Somebody else has done each of these and got it wrong. Name the error. '
     'You are not asked to redo the work.'),
    ('step', 'Before you name any error, decide what you will compare the '
     'work against.',
     ['your memory of what a statement looks like',
      'Material B for the headings and Material C for the figures',
      'the answer key at the back',
      'the totals alone, since an error always shows in a total'], 1,
     'Three of the four are how a candidate loses this kind of question. '
     'Memory is unreliable, the key is not available in the exam, and two '
     'of the four errors below do not show in a total at all.'),

    ('diag', 'A student’s sort of Material A',
     ['Primary users:      Hala,  the Gulf Bank,  Delta Plastics,',
      '                    the Ministry of Finance',
      'Not primary users:  Samer,  Rania'],
     ['Delta Plastics does not belong: thirty days of credit is too short',
      'The Ministry of Finance does not belong: it designs its own form',
      'Samer does belong: his union has a claim on the company',
      'Rania does belong: she needs the statements to run the business'], 1,
     'The Ministry is the one reader in Material A that can compel a report '
     'of its own design, which is the single test Step 1 established. The '
     'other three options are each a plausible mis-sort and each one is '
     'contradicted by the grid.',
     {'A': 'you are using duration as the test again',
      'C': 'being affected by the company is not being on the list',
      'D': 'needing information is not the same as depending on the '
           'statements for it'}),

    ('diag', 'A heading written out in full',
     ['Northwind Components, Inc.',
      'Statement of Financial Position',
      'for the year ended 31 December %s' % Y],
     ['The company’s legal form should not appear above the statement',
      'Financial position is reported at a date, so the third line is wrong',
      'The statement should be called a balance sheet, not this',
      'The date should be written before the month, not after it'], 1,
     'Material B shows this statement headed as at, and the other three '
     'headed for the year ended. A position statement cannot be for a span '
     'because what is owned and owed is only true at a moment.',
     {'A': 'the legal form belongs in the heading of every statement',
      'C': 'both names are used and the exam prefers this one',
      'D': 'the order of day and month is a convention, not an error'}),

    ('diag', 'The foot of somebody’s income statement',
     ['Operating income               740,000',
      'Interest expense               (90,000)',
      'Income before income tax       650,000'],
     ['Interest expense belongs inside operating income, not below it',
      'The gain on disposal of %s has been left out, so the subtotal '
      'should be %s' % (money(N.gain_disposal), money(N.pretax)),
      'Income tax expense has been left out of the statement',
      'Operating income is wrong: it should be %s' % money(N.gross_margin)],
     1,
     'Material C holds a gain on disposal and this statement does not use '
     'it. The arithmetic shown is internally consistent, which is why the '
     'error does not show in a total: you can only find it by checking the '
     'statement against the material.',
     {'A': 'interest is a financing cost and sits below operating income by '
           'design',
      'C': 'tax comes after this subtotal, so its absence here is correct',
      'D': 'that figure is the gross margin, which is two lines higher up'}),

    ('diag', 'The foot of somebody’s position statement',
     ['Total assets                        4,990,000',
      '',
      'Total liabilities                   2,320,000',
      'Common stock                          300,000',
      'Additional paid-in capital          1,020,000',
      'Retained earnings                   1,274,000',
      'Total liabilities and equity        4,914,000'],
     ['Retained earnings are overstated by the dividend of %s'
      % money(N.dividends),
      'Accumulated other comprehensive income of %s has been left out of '
      'equity' % money(N.aoci),
      'Total liabilities should include the deferred tax liability as well',
      'Total assets are overstated by the allowance for credit losses'], 1,
     'The two sides differ by %s, and that is exactly the accumulated other '
     'comprehensive income. This is the one error of the four that does show '
     'in a total, and the gap names the missing line for you.'
     % money(N.total_assets - 4914000),
     {'A': 'the dividend is %s, which is not the size of the gap'
           % money(N.dividends),
      'C': 'the deferred tax liability is already inside total liabilities',
      'D': 'the allowance is already deducted in arriving at total assets'}),
    ('fig', 'matrix', 'Name the error, then name the figure it moves',
     ['Item 16', 'Item 17', 'Item 18', 'Item 19'],
     ['The error, in your own words', 'The figure it changes, and by how '
      'much'], [],
     'Two of these four errors change no figure at all, and the column is '
     'there so you have to decide which two.'),
    ('gate', '16 to 19', '3 of 4',
     'read the error you missed against Material B and C before Part 5'),
]

HANDOUT['blocks'] += [

    # ============================================= part 5 ===================
    ('part', 'Part 5 · Ten items in no order',
     'drawn from every part and labelled with none'),
    ('prompt', 'Items 20 to 29',
     'These ten are deliberately jumbled. Nothing tells you which part an '
     'item comes from, which is the only honest way to find out whether you '
     'can tell the ideas apart.'),
    ('fig', 'matrix', 'Record the letters, and where each item came from',
     ['Items 20 and 21', 'Items 22 and 23', 'Items 24 and 25',
      'Items 26 and 27', 'Items 28 and 29'],
     ['The letters you chose', 'Which part of the handout it tests'], [],
     'Naming the part an item came from is half the work. In the exam '
     'nothing is labelled either.'),

    ('mcq',
     'A customer who buys from Northwind reads its statements before placing '
     'a large order. The customer is:',
     ['a primary user, because the order exposes it to the company',
      'not a primary user: it is not an investor, a lender or an other '
      'creditor',
      'a primary user, because placing an order extends credit',
      'not a primary user, because the order is too small to matter'], 1,
     'Level B',
     'A customer is exposed and is still not on the list. Delta Plastics is '
     'on the list because it is owed money, which is the thing that makes a '
     'reader an other creditor; a customer that has not yet paid is owed '
     'goods, not money.',
     {'A': 'exposure is not the test, in this handout or in the exam',
      'C': 'a buyer takes credit; it does not give it'}),

    ('mcq',
     'Which figure in Material C could appear in both the statement of '
     'income and the statement of cash flows?',
     ['Sales', 'Depreciation and amortisation', 'Common stock', 'Inventory'],
     1, 'Level C',
     'Depreciation is an expense in the income statement and is added back '
     'in arriving at cash from operations, because it moved no cash. It is '
     'the one figure in Material C that has a job in two statements for two '
     'different reasons.',
     {'A': 'sales are in the income statement; the cash flow statement '
           'carries collections, which are a different figure',
      'C': 'common stock is a balance and a movement in equity, and neither '
           'is the income statement',
      'D': 'inventory is a balance; the income statement carries cost of '
           'sales instead'}),

    ('mcq',
     'Which pair of figures are both balances at a single date?',
     ['Sales and cost of sales',
      'Inventory and accounts payable',
      'Interest expense and income tax expense',
      'Sales and cash'], 1, 'Level A',
     'Two of the four pairs are both period figures, one pair is mixed, and '
     'one pair is two balances. Nothing about the size of the figures helps '
     'here, which is the point of asking it this way.',
     {'A': 'both of these accumulated across the year',
      'C': 'both of these are expenses, and an expense is a period figure',
      'D': 'a mixed pair, and the commonest wrong answer: cash is a balance '
           'and sales are not'}),

    ('mcq',
     'Holding management to account for the resources entrusted to it is:',
     ['a by-product of decision usefulness',
      'a purpose of financial reporting in its own right',
      'a requirement of tax law rather than of the framework',
      'relevant only to companies whose shares are listed'], 1, 'Level B',
     'Stewardship is tested as a purpose, not as a consequence of one. The '
     'statements are there both to help a reader decide and to let that '
     'reader judge what management did with the money.',
     {'A': 'this is the tempting answer and the exam marks it wrong',
      'D': 'Northwind is not listed and its forty investors are owed the '
           'same account'}),

    ('mcq',
     'Northwind’s gain on disposal of %s sits below operating income. A '
     'reader who ignored it would understate:' % money(N.gain_disposal),
     ['gross margin', 'income before income tax', 'total assets',
      'sales'], 1, 'Level C',
     'The gain is below operating income, so the lines above it are '
     'untouched and the lines below it are all short by the same amount. '
     'This is item 18 asked the other way round, and a student who got 18 '
     'from the key rather than from the material will miss it.',
     {'A': 'gross margin is above the gain and so cannot be affected by it',
      'C': 'total assets are a balance and the gain is in the income '
           'statement',
      'D': 'the gain is not revenue from selling components'}),

    ('mcq',
     'Comparability is the reason a company that changes its inventory '
     'method must:',
     ['go back to the method it used before',
      'tell the reader about the change and apply it to the prior year it '
      'presents',
      'present one year only, so that no false comparison is possible',
      'wait until the start of a new decade before changing'], 1,
     'Level B',
     'Comparability does not forbid a change; it governs what has to happen '
     'when one is made. Two years are presented so a reader can compare '
     'them, so both years have to be on the same basis and the change has to '
     'be disclosed.',
     {'A': 'comparability does not freeze a company’s methods',
      'C': 'showing one year is the problem comparability exists to solve'}),

    ('mcq',
     'A question gives Northwind’s cash of %s and asks whether trading '
     'generated enough cash to cover the %s paid to shareholders. The '
     'reader needs:' % (money(N.cash), money(N.dividends)),
     ['net income from the statement of income, and nothing else',
      'cash from operating activities and the dividend paid, both in the '
      'statement of cash flows',
      'total assets from the statement of financial position',
      'the statement of changes in equity, where the dividend appears'], 1,
     'Level C',
     'Both halves of the question are cash questions about a span, so both '
     'figures are in the same statement. The last option is the trap worth '
     'understanding: the dividend really is in the statement of changes in '
     'equity, and the cash generated is not, so that statement answers half '
     'the question and no more.',
     {'A': 'profit is not cash, and this is the substitution the whole '
           'volume is built to stop',
      'C': 'a closing balance says nothing about what generated it',
      'D': 'half right, which is why it is the option most often chosen'}),

    ('mcq',
     'The four headings in Material B differ in one phrase. A student who '
     'had only that phrase, and no figures at all, could still answer:',
     ['nothing: figures are needed for every question',
      'whether each statement reports a balance or a movement',
      'how large each statement’s total will be',
      'which statement the auditor signs first'], 1, 'Level B',
     'Step 2 is the whole handout in one item. The phrase decides the kind '
     'of figure, and the kind of figure decides which questions the '
     'statement can answer, before any number is read.',
     {'A': 'Part 2 was answered without a single figure',
      'C': 'the heading says nothing about magnitude'}),

    ('mcq',
     'Two readers both have money at risk in Northwind. One is a primary '
     'user and one is not. The feature that decides it is:',
     ['the size of the amount at risk',
      'whether the reader can require a report in a format they design',
      'how long the money is at risk for',
      'whether the reader is inside the company or outside it'], 1,
     'Level A',
     'The same test as item 7, with the readers no longer named. If this one '
     'is harder than item 7 was, what was learned there was the pair of '
     'readers rather than the test.',
     {'A': 'exposure is the misreading this handout returns to four times',
      'C': 'duration is the Delta Plastics misreading',
      'D': 'inside and outside is the Rania misreading, and it is about '
           'access rather than location'}),

    ('mcq',
     'Northwind’s %s of net income and its %s of total assets are both '
     'reported for %s. Which is true?'
     % (money(N.net_income), money(N.total_assets), Y),
     ['Both describe the year', 'Both describe 31 December',
      'The first describes the year; the second describes 31 December',
      'The first describes 31 December; the second describes the year'], 2,
     'Level B',
     'Two figures, one period and one date, in a single stem. A student who '
     'decides by size will pick the wrong one, because the larger figure is '
     'the one that is not a total of the year.',
     {'A': 'you have made total assets a period figure',
      'B': 'you have made net income a balance',
      'D': 'the right distinction, applied the wrong way round'}),
    ('gate', '20 to 29', '8 of 10',
     'go back to the part each missed item came from, not to the key'),

    # ============================================= part 6 ===================
    ('part', 'Part 6 · The cold open again',
     'the same six questions, word for word'),
    ('prompt', 'Items 30 to 35',
     'These are items 1 to 6, unchanged. Answer them again without looking '
     'back, then put both sets of answers side by side in the grid.'),
    ('fig', 'matrix', 'Items 1 to 6, answered twice',
     ['Item 1 and 30', 'Item 2 and 31', 'Item 3 and 32', 'Item 4 and 33',
      'Item 5 and 34', 'Item 6 and 35'],
     ['Page 1', 'Now', 'Changed?'], [],
     'Any row where the two columns differ is a row where something moved. '
     'A row where you were sure on page 1 and wrong is the most useful row '
     'on the page.'),
    ] + _cold(30) + [

    ('prompt', 'Items 36 and 37',
     'Two questions that were not in the cold open. Neither can be answered '
     'from one part of this handout alone.'),
    ('mcq',
     'Samer’s union asks Northwind for a schedule of profit by department. '
     'Northwind refuses. Which is true?',
     ['Northwind must comply, because employees are primary users',
      'Northwind need not comply, and that refusal is part of what makes '
      'Samer not a primary user',
      'Northwind must comply, because the information already exists',
      'The union becomes a primary user at the moment it asks'], 1,
     'Level C',
     'The test runs in both directions. A reader who cannot compel a report '
     'is a reader the general purpose statements are written for, and the '
     'refusal is the evidence rather than the injustice. Samer is excluded '
     'for a different reason again: he is not on the list at all.',
     {'A': 'employees are the clearest case of readers who are not primary '
           'users',
      'C': 'existing is not the test; being able to compel it is',
      'D': 'asking changes nothing, which is exactly the point of the test'}),
    ('mcq',
     'Hala wants to know whether Northwind earned more this year than last, '
     'and whether it owns more than it owes today. The smallest set of '
     'statements that answers her is:',
     ['the statement of income for %s only' % Y,
      'the statement of income for %s and %s, and the statement of '
      'financial position at 31 December %s' % (Y, PY, Y),
      'all four statements for both years',
      'the statement of financial position at both year ends'], 1,
     'Level C',
     'Two questions, one about performance over two periods and one about '
     'position at one date. The comparative income statement answers the '
     'first and a single position statement answers the second, which is '
     'why the comparative requirement and the date requirement are '
     'different requirements.',
     {'A': 'one year cannot answer a question about more than last year',
      'C': 'true but not smallest, and the exam asks for the smallest',
      'D': 'position says nothing about what was earned'}),
    ('fig', 'fork', 'Two questions, and what each one needs',
     [('Did it earn more this year than last?', '', STMT),
      ('Does it own more than it owes today?', '', SLATE),
      ('Did trading generate the cash the dividend took out?', '', OK)],
     True),
    ('gate', '30 to 37', '7 of 8',
     'compare each changed row against the key’s last table'),
]

HANDOUT['key_extra'] = [
    ('h3', 'Part 1 · the classification grid'),
    ('table', ['Reader', 'Group', 'The feature that put them there'],
     [['Hala', 'A primary user', 'An investor, and she cannot demand a '
       'report of her own design'],
      ['The Gulf Bank', 'A primary user', 'A lender, and it reads what it is '
       'given'],
      ['Delta Plastics', 'A primary user', 'An other creditor: owed money, '
       'and the thirty days change nothing'],
      ['The Ministry of Finance', 'Has another route',
       'It designs the form it is answered on'],
      ['Samer', 'Reads them, not a primary user',
       'An employee, and employees are not on the framework’s list'],
      ['Rania', 'Has another route', 'She can open the ledger, so the '
       'statements tell her nothing new']], None, [22, 26, 52]),

    ('h3', 'Part 2 · the matching exercise'),
    ('table', ['The question asked', 'The statement that answers it'],
     [[l, _MATCH_R['ABCD'.index(a)]] for l, a in zip(_MATCH_L, _MATCH_A)],
     None, [58, 42]),

    ('h3', 'Part 3 · Stage 1, worked in full'),
    ('table', _S1H, _K1, None, _S1W),
    ('h3', 'Part 3 · Stage 2, worked in full'),
    ('table', _S2H, _K2, None, _S2W),
    ('h3', 'Part 3 · Stage 3, worked in full'),
    ('table', _S3H, _K3, None, _S3W),
    ('bullets',
     ['The three figures in Material C that Stage 1 did not need were '
      'interest expense, the gain on disposal and income tax expense. All '
      'three arrive in Stage 2.',
      'The three that never appear in an income statement at all are cash, '
      'inventory and accounts payable. All three are balances.',
      'Common stock is the figure that belongs to two statements: it moves '
      'in the statement of changes in equity and it stands as a balance in '
      'the statement of financial position.']),

    ('h3', 'Part 4 · what each piece of work was wrong about'),
    ('table', ['Item', 'The error', 'Does it show in a total?'],
     [['16', 'The Ministry of Finance was put in the primary group, and it '
       'is the one reader that can compel its own form', 'No'],
      ['17', 'A position statement was headed for the year ended; position '
       'is reported as at a date', 'No'],
      ['18', 'The gain on disposal of %s was omitted, so income before '
       'income tax was %s instead of %s'
       % (money(N.gain_disposal), money(N.pretax - N.gain_disposal),
          money(N.pretax)), 'No: the arithmetic shown is self-consistent'],
      ['19', 'Accumulated other comprehensive income of %s was left out of '
       'equity' % money(N.aoci),
       'Yes: the two sides differ by exactly that amount']],
     None, [8, 62, 30]),

    ('h3', 'Part 6 · the cold open, and what each item was for'),
    ('table', ['Item', 'Answer', 'The part of the handout that settles it'],
     [['1 and 30', 'C', 'Part 1: the one test, and the Ministry is the '
       'reader that fails it'],
      ['2 and 31', 'B', 'Part 2: position is the date word'],
      ['3 and 32', 'B', 'Part 2 and Part 3: a balance, whatever its size'],
      ['4 and 33', 'C', 'Part 2: a cash question about a span'],
      ['5 and 34', 'B', 'Part 2 and item 28: comparability'],
      ['6 and 35', 'A', 'Part 1: access, not stake']], None, [12, 10, 78]),

    ('h3', 'For the teacher'),
    ('bullets',
     ['Part 5 is interleaved on purpose. Students who meet mixed items feel '
      'that the blocked parts taught them more, and are measurably wrong '
      'about it: the discrimination they complain about is the thing that '
      'transfers to the exam. Expect the complaint and do not reorganise '
      'the part.',
      'The cold open is meant to go badly. If a class scores well on items '
      '1 to 6 before any teaching, the six items are too easy for the '
      'group and the handout will not move them.',
      'The gap between the page 1 answers and the Part 6 answers is the '
      'only measurement in this handout that is worth recording. A row '
      'where a student was sure and wrong is worth more classroom time than '
      'three rows they left blank.',
      'Items 7, 29 and 36 are the same test three times, with the readers '
      'named, then unnamed, then reversed. A student who gets 7 and misses '
      '29 learned the pair of readers rather than the test, and that is a '
      'diagnosis rather than a mark.']),
]
