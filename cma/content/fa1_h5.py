# -*- coding: utf-8 -*-
"""Volume 1, Handout 5 — The Statement of Cash Flows: Operating, Investing,
Financing.

Covers A.1(c) for the statement of cash flows: its major components and
classifications. Handout 8 builds the statement; this one classifies.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

HANDOUT = dict(
    n=5,
    title='The Statement of Cash Flows: Operating, Investing, Financing',
    subtitle='Three buckets, and every movement of cash falls into exactly one. '
             'Getting the bucket right is most of the marks in this topic.',
    register='R1 for the three buckets, R2 for the awkward cases',

    lang=dict(
        register='R1 while the three classes are introduced, R2 for the items that '
                 'sit on a boundary.',
        collocations=['generate cash from operations', 'classify a cash flow',
                      'acquire a long-lived asset', 'raise finance',
                      'repay the principal', 'disclose a non-cash transaction'],
        pairs=['cash / profit', 'interest paid / dividends paid',
               'principal / interest', 'proceeds / cost'],
        nots=['The statement reports cash, not profit. A profitable company can '
              'show negative operating cash flow for years.',
              'Interest paid and dividends paid look alike and are classified '
              'differently. That difference is examined.'],
    ),

    objectives=[
        'Name the three classes of cash flow and say what belongs in each.',
        'Classify a cash movement, including the cases that sit on a boundary.',
        'Explain why interest paid is operating while dividends paid are '
        'financing.',
        'Say what happens to a significant transaction that moved no cash at all.',
        'State what the three sections add up to, and where that figure is '
        'confirmed.',
    ],

    terms=[
        ('operating activities',
         'The cash effects of the transactions that enter into the determination '
         'of net income.', 'الأنشطة التشغيلية',
         'The default class. If a cash flow is not clearly investing or '
         'financing, it is operating.'),
        ('investing activities',
         'Acquiring and disposing of long-lived assets and investments.',
         'الأنشطة الاستثمارية',
         'It is about what the cash was spent on, not about how large the amount '
         'is.'),
        ('financing activities',
         'Obtaining resources from owners and lenders, and returning them.',
         'الأنشطة التمويلية',
         'The test is whether the counterparty is a provider of capital. That is '
         'why repaying a loan is financing and paying a supplier is not.'),
        ('cash equivalent',
         'A short-term, highly liquid investment readily convertible into a known '
         'amount of cash.', 'ما يعادل النقد',
         'Three months or less from acquisition is the usual rule. Moving cash '
         'into a cash equivalent is not a cash flow at all.'),
        ('non-cash transaction',
         'A significant investing or financing event that moved no cash.',
         'معاملة غير نقدية',
         'Kept out of the statement itself and disclosed separately, so that the '
         'statement still reports only cash.'),
        ('indirect method',
         'Presenting operating cash flow by starting at net income and adjusting '
         'it.', 'الطريقة غير المباشرة',
         'Far more common in practice. Handout 8 builds Northwind’s operating '
         'section this way.'),
        ('direct method',
         'Presenting operating cash flow as the actual receipts and payments.',
         'الطريقة المباشرة',
         'Permitted and encouraged, and rarely used. Both methods give the same '
         'operating cash flow figure.'),
    ],

    blocks=[
        ('scene', 'The statement that cannot be argued with', [
            'Every other statement in this volume rests on judgement somewhere. '
            'When revenue is recognised, how much of a receivable will be '
            'collected, how fast equipment wears out: all of these are estimates.',
            'Cash is not an estimate. Northwind’s cash rose from %s to %s '
            'during %s, a movement of %s, and no accounting policy can change that '
            'figure.' % (money(N.cash_py), money(N.cash), Y,
                         money(N.cash - N.cash_py)),
            'What the statement does is explain the movement. It sorts every cash '
            'flow of the year into three classes, and the three classes add back '
            'to the movement in the cash balance.',
            'In this handout you classify. In Handout 8 you build the statement '
            'itself.',
        ]),
        ('fig', 'ranked', 'The three sections, and what they add up to',
         [('Cash from operating activities', N.cfo, money(N.cfo), IS),
          ('Cash used in investing activities', N.cfi, money(N.cfi), BS),
          ('Cash used in financing activities', N.cff, money(N.cff), SCF),
          ('Net increase in cash', N.net_cash_change,
           money(N.net_cash_change), SLATE)],
         'The bars show size, not direction. Two of these three are outflows, and '
         'the money column shows them in brackets.',
         '%s · year ended 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · The three buckets', 'what belongs in each'),

        ('task', 'Exercise 5A',
         'Name the three classes of cash flow and the test that assigns each one.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for what the cash flow statement is for.'],
         ['Each paragraph defines one class. The defining word is the blank.',
          'Blank 3 is about what the money was spent on, not how much.',
          'Blank 5 names the kind of person on the other side of a financing '
          'flow.']),
        ('fill', 'R1',
         ['Cash flows are sorted into three classes, and every movement of cash '
          'belongs to exactly one of them.',
          '{Operating} activities are the cash effects of the things that make up '
          'net income: collecting from customers, paying suppliers, paying wages, '
          'paying tax. This is the default class, and anything that is not clearly '
          'one of the other two belongs here.',
          'Investing activities are about what the company spent its money {on}. '
          'Buying equipment, selling equipment, buying securities: the test is the '
          'nature of the asset acquired or sold, never the size of the amount.',
          'Financing activities are about where the money {came} from, and about '
          'giving it back. Issuing shares, repaying a loan, paying a dividend. The '
          'test here is whether the other party is a provider of {capital} — '
          'an owner or a lender — rather than a customer or a supplier.'],
         {'Operating': ('The default class. Start here and rule it out.', ''),
          'on': ('The nature of the asset, not the amount.', ''),
          'came': ('Raising finance, and returning it.', ''),
          'capital': ('Owner or lender. Suppliers are not providers of capital.',
                      'Students classify a payment to a supplier as financing '
                      'because credit was involved. Trade credit is operating.')},
         ['selling', 'from', 'customer', 'profit']),
        ('fig', 'buckets', 'Three buckets, and what falls into each',
         [('OPERATING', IS,
           ['Cash from customers', 'Cash to suppliers', 'Wages and salaries',
            'Interest paid', 'Income tax paid', '']),
          ('INVESTING', BS,
           ['Buying equipment', 'Selling equipment', 'Buying securities',
            'Lending money out', '', '']),
          ('FINANCING', SCF,
           ['Issuing shares', 'Repaying loan principal', 'Dividends paid',
            'Buying back shares', '', ''])],
         'Write one more item of your own in each bucket. If you cannot place it '
         'confidently, it belongs in the first one.'),

        ('part', 'Part 2 · The awkward cases',
         'where the exam sets its questions'),

        ('prose', 'Three pairs of items look alike and are classified differently. '
                  'They are where almost every examined error in this topic comes '
                  'from, so they are worth more attention than the easy cases.',
                  'R2'),

        ('task', 'Exercise 5B',
         'Classify the items that sit on a boundary, and say why each falls where '
         'it does.',
         'Read and complete.',
         ['Exercise 5A'],
         ['The first pair is interest and dividends. Ask which of them is deducted '
          'in arriving at net income.',
          'The second pair splits one loan repayment into two parts. They do not '
          'go to the same place.',
          'Blank 4 is what a transaction that moved no cash is given instead of a '
          'line in the statement.']),
        ('fill', 'R2',
         ['Interest paid and dividends paid both go to providers of capital, so '
          'they look like a matched pair. They are not. Interest expense is '
          'deducted in arriving at net income, so under US GAAP the cash paid for '
          'it is an {operating} flow. A dividend is a distribution of profit, never '
          'an expense, so the cash paid for it is {financing}.',
          'A loan repayment has to be split. The interest element is operating, as '
          'above, while the repayment of the {principal} is financing. One cheque '
          'leaving the company can therefore appear in two different sections of '
          'the statement.',
          'The third case moves no cash at all. If Northwind acquired equipment by '
          'signing a note rather than paying for it, nothing would appear in the '
          'statement, because no cash moved. Such a transaction is reported in a '
          'separate {disclosure}, so that a reader can see a significant investing '
          'or financing event that the statement itself cannot show.'],
         {'operating': ('Because interest expense is inside net income.', ''),
          'financing': ('Because a dividend is a distribution, not a cost.',
                        'Students pair interest and dividends together and put both '
                        'in financing. Only the dividend goes there.'),
          'principal': ('Split the cheque: interest operating, principal '
                        'financing.', ''),
          'disclosure': ('Disclosed separately, never squeezed into the '
                         'statement.', '')},
         ['investing', 'note', 'expense']),
        ('fig', 'fork', 'Three questions, asked in this order',
         [('Was the other party an owner or a lender, and was this capital moving?',
           'YES → FINANCING — but split interest out first', SCF),
          ('Was a long-lived asset or an investment bought or sold?',
           'YES → INVESTING', BS),
          ('Neither?', 'OPERATING — the default class', IS)]),

        ('task', 'Exercise 5C',
         'Classify twelve real movements, including the boundary cases.',
         'Sort each item into the section it belongs in.',
         ['Exercises 5A and 5B'],
         ['Two of these items moved no cash. Decide what happens to them before '
          'you place them.',
          'The loan repayment is deliberately written as one amount. Read it '
          'again.',
          'Work down the list once quickly, then go back to the three you were '
          'least sure of.']),
        ('sortgrid',
         ['Cash movement during %s' % Y, 'OPERATING', 'INVESTING', 'FINANCING'],
         ['Cash collected from customers',
          'Purchase of equipment for %s' % money(N.ppe_purchased),
          'Proceeds of %s from selling old equipment' % money(N.disposal_proceeds),
          'Interest of %s paid to the bank' % money(N.interest),
          'Dividends of %s paid to shareholders' % money(N.dividends),
          'Repayment of %s of loan principal' % money(N.debt_repaid),
          '%s raised by issuing shares' % money(N.issue_proceeds),
          'Income tax paid to the government',
          'Purchase of %s of debt securities' % money(N.afs_purchased),
          'Wages paid to warehouse staff'],
         ['OPERATING', 'INVESTING', 'INVESTING', 'OPERATING', 'FINANCING',
          'FINANCING', 'FINANCING', 'OPERATING', 'INVESTING', 'OPERATING'],
         'Interest is operating and dividends are financing, although both are '
         'paid to providers of capital. That one line is the most examined '
         'distinction in the topic.'),
        ('fig', 'ranked', 'Northwind’s actual cash movements, by size',
         [('Purchase of equipment', N.ppe_purchased, money(-N.ppe_purchased), BS),
          ('Dividends paid', N.dividends, money(-N.dividends), SCF),
          ('Repayment of loan principal', N.debt_repaid,
           money(-N.debt_repaid), SCF),
          ('Shares issued', N.issue_proceeds, money(N.issue_proceeds), SCF),
          ('Interest paid', N.interest, money(-N.interest), IS),
          ('Proceeds from selling equipment', N.disposal_proceeds,
           money(N.disposal_proceeds), BS),
          ('Purchase of debt securities', N.afs_purchased,
           money(-N.afs_purchased), BS)],
         'Teal is operating, plum investing, blue financing. Size has nothing to '
         'do with classification: the smallest item here and the largest sit in '
         'different sections for reasons of nature, not amount.'),

        ('part', 'Part 3 · Cash, and what counts as cash',
         'cash equivalents and non-cash events'),

        ('task', 'Exercise 5D',
         'Decide what counts as cash, and what happens to an event that moved '
         'none.',
         'Read and complete.',
         ['Exercise 5C'],
         ['Blank 1 is a length of time. The usual rule is a short one.',
          'Blank 2 asks what happens when money moves between two things that are '
          'both treated as cash.',
          'The last blank is why a non-cash transaction is disclosed at all rather '
          'than simply ignored.']),
        ('fill', 'R2',
         ['The statement explains the movement in cash and cash equivalents taken '
          'together. A cash equivalent is a short-term investment that can be '
          'turned into a known amount of cash, and the usual test is that it '
          'matured within three {months} of being acquired.',
          'Because the two are reported as one total, moving money from a current '
          'account into a 60-day deposit is not a cash flow at all. It is a '
          'movement within the total, and it appears {nowhere} in the statement.',
          'The opposite case is an event that is significant but moved no cash: '
          'acquiring a building in exchange for shares, or settling a debt by '
          'issuing equity. These are reported outside the statement, because '
          'leaving them out entirely would hide a real change in the company’s '
          '{position} from a reader who is relying on this statement to see it.'],
         {'months': ('Three months or less from acquisition.', ''),
          'nowhere': ('A transfer within the total is not a flow.',
                      'Students show a transfer to a short deposit as an investing '
                      'outflow, which double-counts the company’s cash.'),
          'position': ('A reader must still be able to see the event.', '')},
         ['years', 'twice', 'profit']),
        ('fig', 'timeline', 'Cash in, cash out, and the figure they explain',
         [('Opening cash %s' % money(N.cash_py),
           'at 1 January %s' % Y, SLATE),
          ('Three sections', 'operating %s, investing %s, financing %s'
           % (money(N.cfo), money(N.cfi), money(N.cff)), IS),
          ('Closing cash %s' % money(N.cash),
           'at 31 December %s — the balance sheet figure' % Y, BS)],
         'The statement is proved by the balance sheet. If the three sections do '
         'not reach the closing cash figure, something is misclassified or '
         'missing.'),

        ('part', 'Part 4 · Reading the pattern',
         'what the three signs say together'),

        ('task', 'Exercise 5E',
         'Read a company’s situation from the signs of its three sections.',
         'Match the pattern of signs to the company it describes.',
         ['Exercise 5C'],
         ['A positive operating figure means the trade generates cash. A negative '
          'investing figure means the company is buying assets.',
          'A young company usually shows the opposite signs to a mature one.',
          'One of these four is in trouble. Find the one whose trading consumes '
          'cash while it also repays debt.']),
        ('match',
         ['Operating positive, investing negative, financing negative',
          'Operating negative, investing negative, financing positive',
          'Operating positive, investing positive, financing negative',
          'Operating negative, investing positive, financing negative'],
         ['A mature business funding its own growth and repaying its backers',
          'A young business burning cash and raising capital to do it',
          'A business selling assets and returning the proceeds to its backers',
          'A business in difficulty: trading consumes cash, assets are being '
          'sold to repay debt'],
         ['A', 'B', 'C', 'D'],
         'Northwind is the first pattern: operating %s, investing %s, financing '
         '%s.' % (money(N.cfo), money(N.cfi), money(N.cff))),
        ('fig', 'matrix', 'The same three signs, four different companies',
         ['Mature, self-funding', 'Young, raising capital', 'Selling down',
          'In difficulty'],
         ['Operating', 'Investing', 'Financing'],
         [['positive', 'negative', 'negative'],
          ['negative', 'negative', 'positive'],
          ['positive', 'positive', 'negative'],
          ['negative', 'positive', 'negative']],
         'Three signs, read together, describe a company before you read a single '
         'amount.'),

        ('prose', 'One choice remains, and it affects only the operating '
                  'section. A company may present operating cash flow by the '
                  'direct method, listing the actual receipts and payments, or by '
                  'the indirect method, starting at net income and adjusting it '
                  'back to cash. Both arrive at the same figure, and the indirect '
                  'method is used by almost everyone. Handout 8 builds '
                  'Northwind’s operating section that way.', 'R2'),

        ('watch', 'Under US GAAP interest paid is operating. Under IFRS a company '
                  'may classify it as operating or financing. Volume 12 covers the '
                  'difference; until then, assume US GAAP unless a question says '
                  'otherwise.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under US GAAP, cash paid for interest on a bank loan is classified '
                'in the statement of cash flows as:',
         ['A financing activity, because it is paid to a lender',
          'An operating activity, because interest expense enters into the '
          'determination of net income',
          'An investing activity', 'A non-cash transaction requiring disclosure '
          'only'],
         1, 'Level B',
         'Interest expense is deducted in arriving at net income, so the cash paid '
         'for it is operating under US GAAP. (A) is the intuitive answer and the '
         'wrong one: the counterparty is a lender, but the charge is inside net '
         'income. Compare dividends paid, which are financing because a dividend is '
         'never an expense.'),

        ('mcq', 'A company repays a loan instalment of $200,000, of which $35,000 '
                'is interest. In the statement of cash flows this appears as:',
         ['$200,000 financing outflow',
          '$200,000 operating outflow',
          '$165,000 financing outflow and $35,000 operating outflow',
          '$165,000 investing outflow and $35,000 financing outflow'],
         2, 'Level C',
         'The instalment splits: principal is financing, interest is operating. One '
         'payment appears in two sections. (A) and (B) refuse to split it. (D) '
         'places both parts wrongly — repaying borrowings is never investing.'),

        ('mcq', 'A company acquires a warehouse by issuing shares to the seller. No '
                'cash changes hands. In the statement of cash flows this is:',
         ['An investing outflow and a financing inflow of equal amount',
          'Omitted entirely, with no further action',
          'Omitted from the statement but disclosed as a significant non-cash '
          'investing and financing transaction',
          'An operating outflow, because no asset was purchased for cash'],
         2, 'Level B',
         'The statement reports cash, so nothing appears in it; but the event is '
         'significant, so it is disclosed separately. (A) invents cash flows that '
         'did not occur. (B) would hide a real change in position from the reader. '
         '(D) is wrong on both counts.'),

        ('mcq', 'Northwind’s three sections are operating %s, investing %s '
                'and financing %s. The net increase in cash for the year is:'
                % (money(N.cfo), money(N.cfi), money(N.cff)),
         [money(N.net_cash_change), money(N.cfo), money(N.cash),
          money(N.cfo + abs(N.cfi) + abs(N.cff))],
         0, 'Level A',
         'The three sections are added: %s. (B) is the operating section alone. (C) '
         'is the closing balance, not the movement. (D) adds the outflows instead '
         'of subtracting them, which is the error to guard against when the '
         'brackets are small on the page.' % money(N.net_cash_change)),

        ('mcq', 'A company transfers $500,000 from its current account into a '
                '60-day treasury deposit. In the statement of cash flows this is:',
         ['An investing outflow of $500,000',
          'An operating outflow of $500,000',
          'Not reported, because it is a movement within cash and cash equivalents',
          'A financing outflow of $500,000'],
         2, 'Level B',
         'A 60-day deposit is a cash equivalent, so the statement’s subject '
         'matter has not changed: money moved from one part of the total to '
         'another. Reporting it (A, B or D) would double-count the company’s '
         'cash position.'),

        ('mcq', 'Which company is best described by operating cash flow that is '
                'negative, investing cash flow that is negative, and financing cash '
                'flow that is positive?',
         ['A mature business funding its own growth',
          'A young or fast-growing business raising capital to fund expansion',
          'A business selling off assets to repay debt',
          'A business with no operations at all'],
         1, 'Level C',
         'Trading consumes cash, assets are being bought, and outside capital is '
         'funding both — the signature of a company in an expansion phase. (A) '
         'would show positive operating and negative financing. (C) would show '
         'positive investing. (D) would show very little anywhere.'),

        ('mcq', 'Which of the following is classified as an investing activity?',
         ['Cash paid to suppliers for inventory',
          'Cash received from issuing shares',
          'Cash paid to purchase debt securities of another company',
          'Cash paid to employees'],
         2, 'Level A',
         'Buying securities is acquiring an investment, so it is investing. (A) and '
         '(D) are ordinary trading payments and therefore operating. (B) is raising '
         'capital from owners, which is financing.'),

        ('tip', 'When a question gives you a payment to a bank, split it in your '
                'head before you read the options. Interest and principal almost '
                'never belong in the same section, and the options are written to '
                'reward you for noticing.'),
    ],

    key_extra=[
        ('h3', 'The classification rules, in one table'),
        ('table', ['Item', 'Section', 'Why'],
         [['Cash from customers', 'Operating', 'Inside net income'],
          ['Interest paid', 'Operating', 'Interest expense is inside net income'],
          ['Income tax paid', 'Operating', 'Tax expense is inside net income'],
          ['Buying or selling equipment', 'Investing', 'A long-lived asset moved'],
          ['Buying or selling securities', 'Investing', 'An investment moved'],
          ['Issuing shares', 'Financing', 'Capital raised from owners'],
          ['Repaying loan principal', 'Financing', 'Capital returned to a lender'],
          ['Dividends paid', 'Financing', 'A distribution to owners, not an '
           'expense'],
          ['Transfer to a 60-day deposit', 'Not reported',
           'A movement within cash and cash equivalents'],
          ['Asset bought by issuing shares', 'Disclosed separately',
           'Significant, but no cash moved']],
         SCF, [30, 20, 50]),
    ],
)
