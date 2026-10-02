# -*- coding: utf-8 -*-
"""Volume 1, Handout 6 — One Transaction, Four Statements.

Covers A.1(e) how financial transactions affect the elements of each statement
and the proper classification of a given transaction, and A.1(f) the
relationship among the financial statements.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

_UP, _DOWN, _NONE = '↑', '↓', '—'

_GRID = ['Transaction', 'Income statement', 'Balance sheet',
         'Changes in equity', 'Cash flows']
_GW = [30, 18, 18, 17, 17]


def _effects(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Sell components on credit, %s' % money(N.sales),
         c('Revenue %s' % _UP), c('Receivables %s' % _UP),
         c('Through net income'), c(_NONE + ' no cash yet')],
        ['Collect cash from a customer',
         c(_NONE), c('Cash %s, receivables %s' % (_UP, _DOWN)),
         c(_NONE), c('Operating inflow')],
        ['Buy equipment for cash, %s' % money(N.ppe_purchased),
         c(_NONE), c('PP&E %s, cash %s' % (_UP, _DOWN)),
         c(_NONE), c('Investing outflow')],
        ['Charge depreciation, %s' % money(N.depreciation),
         c('Expense %s' % _UP), c('PP&E %s' % _DOWN),
         c('Through net income'), c(_NONE + ' no cash moved')],
        ['Declare and pay dividends, %s' % money(N.dividends),
         c(_NONE), c('Cash %s' % _DOWN), c('Retained earnings %s' % _DOWN),
         c('Financing outflow')],
        ['Issue shares, %s' % money(N.issue_proceeds),
         c(_NONE), c('Cash %s' % _UP), c('Contributed capital %s' % _UP),
         c('Financing inflow')],
    ]


HANDOUT = dict(
    n=6,
    title='One Transaction, Four Statements',
    subtitle='The four statements are not four reports. They are four views of one '
             'set of records, and a transaction shows up in each of them '
             'differently or not at all.',
    register='R2 throughout, with one R3 passage at the end',

    lang=dict(
        register='R2 textbook English. The sentences are longer here because the '
                 'ideas connect two statements at a time.',
        collocations=['record a transaction', 'the statements articulate',
                      'affect the elements of a statement',
                      'recognise an expense', 'post an entry',
                      'have no effect on cash'],
        pairs=['recognise / receive', 'earn / collect', 'incur / pay',
               'effect on profit / effect on cash'],
        nots=['Recognising revenue is not collecting cash. The two happen at '
              'different moments and the gap is a receivable.',
              'An expense with no cash effect is not a trick. Depreciation is the '
              'ordinary case, not the exception.'],
    ),

    objectives=[
        'Say what it means for the four statements to articulate.',
        'Trace a transaction through every statement it touches, and say which '
        'ones it does not.',
        'Explain why accrual accounting separates the moment of recognition from '
        'the moment of cash.',
        'Write the entry behind a transaction and read the two sides back into the '
        'statements.',
        'Identify the one figure that links each pair of statements.',
    ],

    terms=[
        ('articulation',
         'The property that the four statements are tied to one another by shared '
         'figures.', 'الترابط بين القوائم',
         'It is why a question can give you three statements and expect you to '
         'produce the fourth.'),
        ('accrual basis',
         'Recording the effects of transactions when they occur, not when the cash '
         'moves.', 'أساس الاستحقاق',
         'The whole reason the income statement and the cash flow statement differ. '
         'Everything in Section A assumes it.'),
        ('journal entry',
         'The record of a transaction, with equal amounts on the left and right.',
         'قيد اليومية',
         'Reading an entry tells you which statements the transaction will reach, '
         'before you look at any statement.'),
        ('recognise',
         'To record an item in the statements, rather than merely disclose it.',
         'الاعتراف',
         'Recognition and cash receipt are separate events, and the exam separates '
         'them deliberately.'),
        ('T-account',
         'A working layout showing one account with its left and right sides.',
         'حساب على شكل حرف T',
         'Not a statement. It is scratch paper, and it is the fastest way to see '
         'what a transaction did to one account.'),
    ],

    blocks=[
        ('scene', 'Four views, one set of records', [
            'Nothing in Northwind’s accounting system is recorded four times. '
            'There is one set of records, and the four statements are four views '
            'of it.',
            'That is why the statements are tied together. Net income appears at '
            'the foot of the income statement, again as a row in the equity '
            'statement, and again at the top of the cash flow statement. The '
            'closing cash figure appears in the cash flow statement and again on '
            'the balance sheet. Closing equity appears in the equity statement and '
            'again on the balance sheet.',
            'This handout is the centre of the volume. Once you can trace one '
            'transaction through all four views, the two building handouts that '
            'follow are mechanical.',
        ]),
        ('fig', 'matrix', 'The figures that tie the statements together',
         ['Net income %s' % money(N.net_income),
          'Other comprehensive income %s' % money(N.oci),
          'Closing equity %s' % money(N.equity),
          'Closing cash %s' % money(N.cash)],
         ['Appears here', 'And again here'],
         [['Foot of the income statement', 'A row in the equity statement, and the '
           'top of the cash flow statement'],
          ['Statement of comprehensive income', 'A row in the equity statement'],
          ['Foot of the equity statement', 'The equity section of the balance '
           'sheet'],
          ['Foot of the cash flow statement', 'The first line of the balance '
           'sheet']],
         'Four shared figures. Break any one of them and the statements no longer '
         'describe the same company.'),

        ('part', 'Part 1 · What articulation means', 'and why it is useful'),

        ('task', 'Exercise 6A',
         'State what articulation is and name the figures that carry it.',
         'Read and complete. Write one word in each space.',
         ['Handouts 2, 3, 4 and 5, for the four statements separately.'],
         ['Each sentence names one shared figure. The blank is the figure or the '
          'statement it travels to.',
          'Blank 2 is the figure that appears in three statements, more than any '
          'other.',
          'The last blank is what a question is really testing when it gives you '
          'three statements and asks for the fourth.']),
        ('fill', 'R2',
         ['The four statements are views of one set of records, so figures '
          'computed in one of them reappear in another. The accountant’s word '
          'for this is {articulation}, and it is the reason the statements can be '
          'checked against each other.',
          'Net {income} does the most travelling. It is the last line of the income '
          'statement, a row in the statement of changes in equity, and the first '
          'line of the operating section of the cash flow statement.',
          'Two more links close the set. The closing balance of the equity '
          'statement is the equity section of the {balance} sheet, and the closing '
          'figure of the cash flow statement is the cash line at the top of that '
          'same balance sheet.',
          'This is what makes a certain kind of exam question possible. If you are '
          'given three statements and asked to produce a figure from the fourth, '
          'the question is not testing arithmetic. It is testing whether you know '
          'which figures are {shared}.'],
         {'articulation': ('The statements are tied by shared figures.', ''),
          'income': ('Three appearances, more than any other figure.', ''),
          'balance': ('Both closing figures land on the balance sheet.', ''),
          'shared': ('That is the whole of this kind of question.',
                     'Students recompute from scratch what the question has already '
                     'given them in another statement.')},
         ['separate', 'cash', 'revenue']),
        ('fig', 'timeline', 'Where net income appears, three times',
         [('Income statement', 'the last line: %s' % money(N.net_income), IS),
          ('Changes in equity', 'a row, added to retained earnings', SCE),
          ('Cash flow statement', 'the first line of the operating section', SCF)],
         'One figure, computed once, used three times. Nothing is recalculated.'),

        ('part', 'Part 2 · Why recognition and cash are different dates',
         'the accrual basis'),

        ('task', 'Exercise 6B',
         'Explain why a transaction can hit the income statement in one year and '
         'the cash flow statement in another.',
         'Read and complete.',
         ['Exercise 6A'],
         ['Blank 1 is the name of the basis of accounting that separates the two '
          'dates.',
          'Blank 3 is the balance sheet item that exists only because the two '
          'dates differ.',
          'The last blank is the expense that reaches the income statement without '
          'ever moving cash.']),
        ('fill', 'R2',
         ['Under the {accrual} basis, a transaction is recorded when it occurs, not '
          'when the cash moves. Northwind recognises a sale when the components '
          'leave the warehouse and the customer becomes obliged to pay, which may '
          'be weeks before any money arrives.',
          'The income statement therefore reports the sale in the year the goods '
          'shipped. The cash flow statement reports nothing at all until the '
          'customer {pays}, which may fall in the following year.',
          'The gap between the two dates is not lost. It sits on the balance sheet '
          'as a {receivable}, and it is the reason a growing company can be '
          'profitable and short of cash at the same time.',
          'The same separation runs the other way. {Depreciation} of %s was charged '
          'against this year’s income although no cash left the company: the '
          'cash went out years earlier, when the equipment was bought.'
          % money(N.depreciation)],
         {'accrual': ('Record when it occurs, not when cash moves.', ''),
          'pays': ('Cash is a separate event with its own date.', ''),
          'receivable': ('The gap between the two dates, parked on the balance '
                         'sheet.', ''),
          'Depreciation': ('An expense that moves no cash this year.',
                           'Students look for a cash payment behind every expense. '
                           'Depreciation is the standing counter-example.')},
         ['cash', 'payable', 'interest']),
        ('fig', 'fork', 'Two questions about every transaction, asked separately',
         [('Has the company earned it or incurred it yet?',
           'YES → it reaches the INCOME STATEMENT now', IS),
          ('Has cash actually moved?',
           'YES → it reaches the CASH FLOW STATEMENT now', SCF),
          ('What if the answers differ?',
           'The difference parks on the BALANCE SHEET until they agree', BS)]),

        ('part', 'Part 3 · Trace six transactions',
         'the grid at the centre of the volume'),

        ('task', 'Exercise 6C',
         'Trace each transaction through all four statements, including the ones '
         'it does not touch.',
         'Complete the grid. Write an arrow for the direction, or a dash where the '
         'transaction does not reach that statement.',
         ['Exercises 6A and 6B'],
         ['Two of these six transactions never reach the income statement at all. '
          'Find them first.',
          'One of them reaches the income statement but never the cash flow '
          'statement.',
          'Work one row at a time, left to right. Do not fill a column down the '
          'page.']),
        ('table', _GRID, _effects(blank=True), SLATE, _GW),
        ('answers', 6),
        ('fig', 'buckets', 'Three kinds of transaction, by what they touch',
         [('PROFIT BUT NO CASH', IS,
           ['Sale on credit', 'Depreciation charged',
            'Both change net income', 'Neither moves cash this year', '']),
          ('CASH BUT NO PROFIT', SCF,
           ['Collecting a receivable', 'Buying equipment',
            'Issuing shares', 'None of them touches net income', '']),
          ('BOTH, OR NEITHER', SLATE,
           ['Paying wages: both', 'A dividend: cash and equity, not profit',
            'The grid above tells you which', '', ''])],
         'Almost every articulation question in Section A is one of these three '
         'cases wearing different clothes.'),

        ('part', 'Part 4 · The entry underneath',
         'reading two sides back into the statements'),

        ('prose', 'Every transaction is recorded with equal amounts on the left and '
                  'the right, and that record is called a journal entry. Reading '
                  'the two sides of a journal entry tells you which statements the '
                  'transaction will reach, before you open a single statement.',
                  'R2'),
        ('prose', 'The rule is short. An account that belongs on the balance sheet '
                  'keeps its balance there. An account that belongs on the income '
                  'statement feeds net income, and net income then travels to the '
                  'equity statement. If neither side of the entry is cash, the cash '
                  'flow statement sees nothing.', 'R2'),

        ('task', 'Exercise 6D',
         'Write the entry for four transactions and say which statements each one '
         'reaches.',
         'Complete the journal entries. Write the account names and the amounts.',
         ['Exercise 6C'],
         ['Each entry has equal amounts on the two sides. If yours does not, you '
          'have missed an account.',
          'J3 has no cash on either side. Say what that means for the cash flow '
          'statement before you move on.',
          'J4 touches equity directly without passing through the income '
          'statement.']),
        ('journal', [
            ('J1', ('Components sold on credit, %s.' % money(N.sales),
                    'Revenue is recognised although no cash has arrived.'),
             [('Accounts Receivable', 0, '', ''),
              ('Sales Revenue', 1, '', '')]),
            ('J2', 'Cash collected from a customer, %s.' % money(1_200_000),
             [('Cash', 0, '', ''),
              ('Accounts Receivable', 1, '', '')]),
            ('J3', ('Depreciation charged for the year, %s.'
                    % money(N.depreciation),
                    'No cash moves. The cash flow statement sees nothing.'),
             [('Depreciation Expense', 0, '', ''),
              ('Accumulated Depreciation', 1, '', '')]),
            ('J4', ('Dividends declared and paid, %s.' % money(N.dividends),
                    'Equity falls without the income statement being touched.'),
             [('Retained Earnings', 0, '', ''),
              ('Cash', 1, '', '')]),
        ]),
        ('prose', 'The four accounts below are drawn as T-accounts: one account '
                  'each, with the left side and the right side kept apart. A '
                  'T-account is scratch paper rather than a statement, and it is '
                  'the fastest way to see what a run of entries did to one '
                  'account.', 'R2'),
        ('fig', 'taccounts',
         [('Accounts Receivable', [('J1', '4,800,000')], [('J2', '1,200,000')], BS),
          ('Cash', [('J2', '1,200,000')], [('J4', '170,000')], IS),
          ('Accumulated Depreciation', [], [('J3', '250,000')], RUST),
          ('Retained Earnings', [('J4', '170,000')], [('close', '510,000')], SCE)],
         'Post your own figures here as well. Accounts Receivable should be left '
         'holding the amount customers still owe.',
         2,
         [('J1', 'sale on credit'), ('J2', 'cash collected'),
          ('J3', 'depreciation charged'), ('J4', 'dividend paid'),
          ('close', 'net income closed to retained earnings')]),

        ('part', 'Part 5 · Produce the missing figure',
         'the question articulation makes possible'),

        ('task', 'Exercise 6E',
         'Produce a figure from one statement using figures given in the others.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 6A to 6D'],
         ['Each sentence gives you two figures and asks for the third. Write the '
          'relationship out before you compute.',
          'Blank 2 is the only figure that can close the retained earnings '
          'roll-forward.',
          'The last blank follows from the cash flow statement and the opening '
          'cash balance, not from anything on the income statement.']),
        ('fill', 'R3',
         ['Suppose the income statement and the balance sheet are in front of you '
          'but the equity statement is missing. Retained earnings opened at %s and '
          'closed at %s, and net income for the year was %s. The dividend must '
          'therefore have been {%s}.'
          % (money(N.retained_py), money(N.retained), money(N.net_income),
             money(N.dividends)),
          'Now suppose the cash flow statement is missing instead. Operating '
          'activities generated %s, investing used %s and financing used %s, and '
          'cash opened at %s. Closing cash must be {%s}, and that figure has to '
          'agree with the first line of the balance sheet.'
          % (money(N.cfo), money(N.cfi), money(N.cff), money(N.cash_py),
             money(N.cash)),
          'Neither question required a single new calculation about the business. '
          'Both were answered from figures the other statements had already '
          '{reported}.'],
         {money(N.dividends): ('%s + %s − dividends = %s.'
                               % (money(N.retained_py), money(N.net_income),
                                  money(N.retained)), ''),
          money(N.cash): ('%s plus the three sections.' % money(N.cash_py), ''),
          'reported': ('Articulation does the work, not arithmetic.', '')},
         [money(N.net_income), money(N.cfo), money(N.equity),
          money(N.gross_margin)]),
        ('fig', 'bridge',
         'Retained earnings at 1 January %s' % Y, N.retained_py,
         [('Net income from the income statement', N.net_income),
          ('Dividends — the figure the question wants', -N.dividends)],
         'Retained earnings at 31 December %s' % Y, N.retained),

        ('watch', 'If a question gives you three statements, read what it has '
                  'already told you before you compute anything. Most of these '
                  'questions are solved by subtraction, and the examiner is '
                  'checking that you know which figures are shared.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company sells goods on credit in December and collects the cash '
                'the following March. In the December financial statements, the '
                'sale affects:',
         ['The income statement and the cash flow statement',
          'The income statement and the balance sheet, but not the cash flow '
          'statement',
          'The cash flow statement and the balance sheet only',
          'None of the statements until the cash is collected'],
         1, 'Level B',
         'Revenue is recognised when the sale occurs, so the income statement is '
         'affected, and the unpaid amount sits on the balance sheet as a '
         'receivable. No cash moved, so the cash flow statement reports nothing. '
         '(D) describes cash accounting, which these statements do not use.'),

        ('mcq', 'Depreciation expense of %s is charged. Which statement is NOT '
                'affected?' % money(N.depreciation),
         ['The income statement', 'The balance sheet',
          'The statement of changes in equity',
          'The statement of cash flows, in terms of the net change in cash'],
         3, 'Level B',
         'Depreciation reduces net income, reduces the carrying amount of the '
         'asset, and reduces retained earnings through net income. It moves no '
         'cash, so the net change in cash is untouched — it appears in the '
         'operating section only as an adjustment that cancels its own effect on '
         'net income.'),

        ('mcq', 'Retained earnings opened at %s and closed at %s. Net income for '
                'the year was %s. Dividends declared during the year were:'
                % (money(N.retained_py), money(N.retained), money(N.net_income)),
         [money(N.dividends), money(N.net_income), money(N.oci),
          money(N.retained - N.retained_py)],
         0, 'Level B',
         '%s + %s − dividends = %s, so dividends were %s. (D) is the movement '
         'in the account, which is net income less the dividend, not the dividend '
         'itself — the most common slip here.'
         % (money(N.retained_py), money(N.net_income), money(N.retained),
            money(N.dividends))),

        ('mcq', 'Which figure appears in three of the four financial statements?',
         ['Total assets', 'Net income', 'Cash', 'Revenue'],
         1, 'Level A',
         'Net income is the last line of the income statement, a row in the equity '
         'statement, and the first line of the operating section of the cash flow '
         'statement. Cash appears in two, and total assets and revenue in one '
         'each.'),

        ('mcq', 'A company issues shares for cash. The effect on the financial '
                'statements is:',
         ['Revenue increases and cash increases',
          'Cash increases, equity increases, and net income is unaffected',
          'Cash increases and a liability increases',
          'Cash increases and retained earnings increases'],
         1, 'Level A',
         'Money from owners is a transaction with owners, not performance: it '
         'reaches the balance sheet and the equity statement, and the cash flow '
         'statement as a financing inflow, but never the income statement. (D) '
         'uses the wrong equity account — retained earnings receives profits '
         'only.'),

        ('mcq', 'Operating activities generated %s, investing used %s and financing '
                'used %s. Cash at the start of the year was %s. Cash reported on '
                'the closing balance sheet must be:'
                % (money(N.cfo), money(N.cfi), money(N.cff), money(N.cash_py)),
         [money(N.cash), money(N.net_cash_change), money(N.cfo),
          money(N.cash_py)],
         0, 'Level B',
         '%s + %s = %s. (B) is the movement rather than the balance, which is the '
         'error to guard against when a question asks what the balance sheet '
         'reports.' % (money(N.cash_py), money(N.net_cash_change), money(N.cash))),

        ('mcq', 'A company records a transaction with a debit to an expense account '
                'and a credit to a liability account. Which statement is affected '
                'in the current period in terms of cash?',
         ['The income statement only',
          'The balance sheet only',
          'Neither the cash flow statement’s net change in cash, because no '
          'cash moved',
          'All four statements equally'],
         2, 'Level C',
         'An expense accrued but unpaid changes net income and creates a liability, '
         'so the income statement, the balance sheet and the equity statement all '
         'move. Cash does not, so the net change in cash is unaffected. The option '
         'is testing whether you read the entry rather than the word expense.'),

        ('tip', 'Train yourself to ask two separate questions about every '
                'transaction: has it been earned or incurred, and has cash moved? '
                'Most Section A errors come from answering one of them and '
                'assuming the other has the same answer.'),
    ],

    key_extra=[
        ('h3', 'Exercise 6C · the completed grid'),
        ('table', _GRID, _effects(), SLATE, _GW),
        ('h3', 'Exercise 6D · the completed entries'),
        ('journal', [
            ('J1', 'Components sold on credit.',
             [('Accounts Receivable', 0, money(N.sales), ''),
              ('Sales Revenue', 1, '', money(N.sales))]),
            ('J2', 'Cash collected from a customer.',
             [('Cash', 0, money(1_200_000), ''),
              ('Accounts Receivable', 1, '', money(1_200_000))]),
            ('J3', 'Depreciation charged for the year.',
             [('Depreciation Expense', 0, money(N.depreciation), ''),
              ('Accumulated Depreciation', 1, '', money(N.depreciation))]),
            ('J4', 'Dividends declared and paid.',
             [('Retained Earnings', 0, money(N.dividends), ''),
              ('Cash', 1, '', money(N.dividends))]),
        ]),
    ],
)
