# -*- coding: utf-8 -*-
"""Volume 1, Handout 4 — The Statement of Changes in Equity.

Covers A.1(c) for the statement of changes in equity: its major components
and classifications.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

_DASH = '—'


def _sce(blank=False):
    """Northwind's equity statement. Columns are the four equity accounts."""
    def m(v):
        return '' if blank else money(v)
    return [
        ['Balance at 1 January %s' % Y, m(N.common_stock_py), m(N.apic_py),
         m(N.retained_py), m(N.aoci_py), m(N.equity_py)],
        ['Net income for the year', _DASH, _DASH, m(N.net_income), _DASH,
         m(N.net_income)],
        ['Other comprehensive income, net of tax', _DASH, _DASH, _DASH,
         m(N.oci), m(N.oci)],
        ['Shares issued: %s shares at $%d' % (num(N.shares_issued), N.issue_price),
         m(N.par_value_issued), m(N.apic_issued), _DASH, _DASH,
         m(N.issue_proceeds)],
        ['Dividends declared', _DASH, _DASH, m(-N.dividends), _DASH,
         m(-N.dividends)],
        ['Balance at 31 December %s' % Y, m(N.common_stock), m(N.apic),
         m(N.retained), m(N.aoci), m(N.equity)],
    ]


_SCEHEAD = ['', 'Common stock', 'Paid-in capital', 'Retained earnings',
            'Accumulated OCI', 'Total']
_SCEW = [25, 14, 16, 17, 15, 13]


HANDOUT = dict(
    n=4,
    title='The Statement of Changes in Equity',
    subtitle='Four columns and five rows. Every movement in the owners’ claim '
             'during the year has to appear in one of the cells.',
    register='R1 for the structure, R2 for the owner transactions',

    lang=dict(
        register='R1 while the grid is introduced, R2 once transactions with '
                 'owners are separated from results of trading.',
        collocations=['declare a dividend', 'issue shares at a premium',
                      'carry the balance forward', 'roll an account forward',
                      'a transaction with owners', 'charge an item to equity'],
        pairs=['declared / paid', 'issue / distribution',
               'opening balance / closing balance', 'expense / distribution'],
        nots=['A dividend is not an expense. It never appears on the income '
              'statement.',
              'Issuing shares is not income. Money from owners is never revenue, '
              'whatever its size.'],
    ),

    objectives=[
        'Name the four columns of Northwind’s equity statement and say which '
        'account each one rolls forward.',
        'Separate a transaction with owners from a result of trading, and place '
        'each in the right row.',
        'Build the statement and show that it closes on the equity figure in the '
        'balance sheet.',
        'Explain why a dividend reduces equity without ever reaching the income '
        'statement.',
    ],

    terms=[
        ('roll-forward',
         'Opening balance, plus the movements, equals closing balance.',
         'حركة الحساب',
         'Every column of this statement is a roll-forward, and so is almost every '
         'schedule in Section A.'),
        ('transaction with owners',
         'A movement in equity caused by the shareholders acting as shareholders.',
         'معاملة مع الملاك',
         'Issuing shares and paying dividends are both in this group. Neither is '
         'performance, so neither touches the income statement.'),
        ('declared',
         'Formally approved by the board, which is when a dividend is recorded.',
         'معلن',
         'Declared, not paid. A dividend declared in December and paid in January '
         'reduces this year’s equity and next year’s cash.'),
        ('opening balance',
         'The balance brought forward from the end of the previous period.',
         'الرصيد الافتتاحي',
         'If an opening balance does not match last year’s closing balance, '
         'something has been restated and the notes must say so.'),
    ],

    blocks=[
        ('scene', 'The bridge between two balance sheets', [
            'At the end of %s Northwind’s equity stood at %s. At the end of '
            '%s it stood at %s.' % (PY, money(N.equity_py), Y, money(N.equity)),
            'The difference is %s. This statement explains all of it, and it has '
            'to: there is no other statement in which a movement in the '
            'owners’ claim may hide.'
            % money(N.equity - N.equity_py),
            'The statement is a grid. Each column is one of the four equity '
            'accounts you met on the balance sheet, and each row is one thing that '
            'happened during the year. Read down a column and you see that account '
            'roll forward; read across a row and you see one event land in every '
            'account it touches.',
        ]),
        ('fig', 'bridge',
         'Equity at 1 January %s' % Y, N.equity_py,
         [('Net income', N.net_income),
          ('Other comprehensive income', N.oci),
          ('Shares issued', N.issue_proceeds),
          ('Dividends declared', -N.dividends)],
         'Equity at 31 December %s' % Y, N.equity),

        ('part', 'Part 1 · What can move equity?', 'only four things'),

        ('task', 'Exercise 4A',
         'List the four things that can move equity and say which column each one '
         'lands in.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for the four equity accounts.',
          'Handout 3, for net income and other comprehensive income.'],
         ['Two of the four are results of trading. Two are dealings with the '
          'shareholders themselves.',
          'Blank 3 is the account that receives net income.',
          'Blank 5 is a word meaning formally approved by the board.']),
        ('fill', 'R1',
         ['Equity can move for only four reasons, and each has its own row in this '
          'statement.',
          'The company can earn a profit. Net income of %s goes into {retained} '
          'earnings, which is the account that collects profits the company has '
          'kept.' % money(N.net_income),
          'The company can record a gain the rules keep out of net income. '
          'Northwind’s other comprehensive income of %s goes into the '
          '{accumulated} other comprehensive income column, and nowhere near '
          'retained earnings.' % money(N.oci),
          'The shareholders can put more money in. Northwind issued %s shares at '
          '$%d, so %s went to common stock at par and the remaining %s went to '
          'additional {paid-in} capital.'
          % (num(N.shares_issued), N.issue_price, money(N.par_value_issued),
             money(N.apic_issued)),
          'And the company can give money back. The board {declared} dividends of '
          '%s, which reduces retained earnings. It is a distribution of profit, not '
          'a cost of earning it.' % money(N.dividends)],
         {'retained': ('Profits kept in the business.', ''),
          'accumulated': ('Its own column, never mixed with retained earnings.',
                          'Students put other comprehensive income into retained '
                          'earnings, which breaks both roll-forwards at once.'),
          'paid-in': ('Everything paid above par.', ''),
          'declared': ('Board approval is the recording event, not payment.', '')},
         ['issued', 'contributed', 'earned']),
        ('fig', 'buckets', 'Four movements, two kinds',
         [('RESULTS OF TRADING', IS,
           ['Net income %s' % money(N.net_income),
            'Other comprehensive income %s' % money(N.oci),
            'Both are performance.', '']),
          ('TRANSACTIONS WITH OWNERS', BS,
           ['Shares issued %s' % money(N.issue_proceeds),
            'Dividends declared %s' % money(N.dividends),
            'Neither is performance.', '']),
          ('WHERE THEY LAND', SLATE,
           ['Retained earnings', 'Accumulated OCI', 'Common stock and paid-in '
            'capital', ''])],
         'Nothing in the right-hand two columns ever appears on the income '
         'statement. That is the whole distinction this handout rests on.'),

        ('part', 'Part 2 · Trading or dealing with owners?',
         'the distinction that decides everything'),

        ('task', 'Exercise 4B',
         'Separate results of trading from transactions with owners.',
         'Sort each event into the column it belongs in.',
         ['Exercise 4A'],
         ['Ask one question: did this happen because the company traded, or '
          'because the shareholders acted as shareholders?',
          'Two of these never reach the income statement at all.',
          'The last one is the trap. Read it carefully: who is the money going '
          'to?']),
        ('sortgrid',
         ['Event during %s' % Y, 'RESULT OF TRADING', 'TRANSACTION WITH OWNERS'],
         ['Components sold to customers for %s' % money(N.sales),
          'Dividends of %s declared by the board' % money(N.dividends),
          '%s shares issued for %s' % (num(N.shares_issued),
                                       money(N.issue_proceeds)),
          'Securities held rose in value by %s before tax'
          % money(N.afs_gain_pretax),
          'Interest of %s paid to the bank' % money(N.interest),
          'Income tax of %s charged for the year' % money(N.tax)],
         ['RESULT OF TRADING', 'TRANSACTION WITH OWNERS', 'TRANSACTION WITH OWNERS',
          'RESULT OF TRADING', 'RESULT OF TRADING', 'RESULT OF TRADING'],
         'Interest goes to a lender, not an owner, so it is a cost of trading. Tax '
         'goes to the government. Only the shareholders are owners.'),
        ('fig', 'fork', 'One question sorts every movement in equity',
         [('Did this happen because the shareholders acted as shareholders?',
           'YES → a transaction with owners: equity only, never income', BS),
          ('Did it happen because the company traded?',
           'NO → a result of trading: through net income or other '
           'comprehensive income', IS),
          ('Why does it decide anything?',
           'It fixes whether the item may touch the income statement', RUST)]),

        ('part', 'Part 3 · Build it', 'the grid with the figures removed'),

        ('task', 'Exercise 4C',
         'Build the statement of changes in equity and close it on the balance '
         'sheet figure.',
         'Write the figures into the blank grid. Use a dash where an event does '
         'not touch a column.',
         ['Exercises 4A and 4B'],
         ['Fill the opening row from Handout 2’s comparative figures, then '
          'work down one event at a time.',
          'Every row must add across to the total column. Every column must add '
          'down to the closing balance.',
          'The bottom right cell must equal total shareholders’ equity on the '
          'balance sheet. If it does not, you have a movement in the wrong '
          'column.']),
        ('table', _SCEHEAD, _sce(blank=True), SCE, _SCEW),
        ('fig', 'matrix', 'Each movement lands in exactly one column',
         ['Net income', 'Other comprehensive income', 'Shares issued',
          'Dividends declared'],
         ['Column it lands in', 'Amount'],
         [['Retained earnings', money(N.net_income)],
          ['Accumulated other comprehensive income', money(N.oci)],
          ['Common stock and additional paid-in capital', money(N.issue_proceeds)],
          ['Retained earnings, as a reduction', money(-N.dividends)]],
         'Two movements land in retained earnings, one up and one down. Nothing '
         'ever lands in two columns at once.'),

        ('part', 'Part 4 · Why a dividend is not an expense',
         'the question the exam asks most'),

        ('prose', 'A dividend reduces equity, and an expense reduces equity. '
                  'Students reason from that to the conclusion that a dividend must '
                  'be an expense somewhere. It is not, and the reason is worth '
                  'stating carefully.', 'R2'),
        ('prose', 'An expense is a cost of earning revenue. It is incurred in '
                  'carrying on the business, and it is deducted in arriving at the '
                  'profit the owners are entitled to. A dividend is paid out of '
                  'that profit once it has been arrived at. It is the owners taking '
                  'their return, not a cost of producing it.', 'R2'),

        ('task', 'Exercise 4D',
         'Explain why a dividend never appears on the income statement.',
         'Read and complete.',
         ['Exercise 4C, and the two paragraphs above.'],
         ['Blank 1 is the word for what an expense is incurred to produce.',
          'Blank 3 names the moment at which a dividend becomes a liability.',
          'The last blank is what a declared but unpaid dividend becomes on the '
          'balance sheet.']),
        ('fill', 'R2',
         ['An expense is a cost of earning {revenue}, deducted in arriving at the '
          'profit that belongs to the shareholders. A dividend is a share of that '
          'profit, handed over after it has been arrived at.',
          'Treating a dividend as an expense would deduct the owners’ return '
          'in calculating the owners’ return, which is circular. So the '
          'dividend reduces {retained} earnings directly and never touches the '
          'income statement.',
          'The recording moment is the date the board {declares} the dividend, not '
          'the date it is paid. At that moment the company has a legal obligation '
          'it cannot avoid.',
          'If the year end falls between declaration and payment, the amount sits '
          'on the balance sheet as a {liability}, and the cash leaves in the '
          'following period.'],
         {'revenue': ('A cost of earning it, not a share of it.', ''),
          'retained': ('Straight to the account that holds kept profits.', ''),
          'declares': ('Declaration creates the obligation.',
                       'Students record the dividend when it is paid, which puts it '
                       'in the wrong year whenever the dates straddle the year '
                       'end.'),
          'liability': ('Declared and unpaid is a liability, not equity.', '')},
         ['expense', 'asset', 'paid']),
        ('fig', 'timeline', 'A dividend declared in one year and paid in the next',
         [('Board declares', 'retained earnings falls; a liability appears', BS),
          ('Year end', 'the liability sits on the balance sheet', SLATE),
          ('Cash is paid', 'the liability clears; cash falls', SCF)],
         'Equity moved at declaration. Cash moved at payment. The two dates are '
         'rarely the same, and the exam separates them on purpose.'),

        ('watch', 'The closing total of this statement and the equity section of '
                  'the balance sheet are the same figure, %s. If a question gives '
                  'you one and asks for the other, you already have it.'
                  % money(N.equity)),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company declares a dividend of $90,000 in December and pays it '
                'in February. In the December financial statements the dividend is:',
         ['An expense of $90,000 in the income statement',
          'A reduction of retained earnings and a current liability of $90,000',
          'Not recorded until it is paid in February',
          'A reduction of additional paid-in capital of $90,000'],
         1, 'Level B',
         'Declaration creates the obligation, so retained earnings falls and a '
         'liability is recognised at once. (A) is the classic error: a dividend is '
         'a distribution of profit, never a cost of earning it. (C) ignores the '
         'declaration. (D) uses the wrong equity account.'),

        ('mcq', 'Northwind’s equity rose from %s to %s during %s. Which '
                'combination explains the movement?'
                % (money(N.equity_py), money(N.equity), Y),
         ['Net income only',
          'Net income plus other comprehensive income',
          'Net income, other comprehensive income and shares issued, less '
          'dividends declared',
          'Net income less dividends declared'],
         2, 'Level B',
         '%s + %s + %s − %s = %s, the actual movement. Each wrong answer '
         'leaves out at least one row of the statement, and the statement exists '
         'precisely so that nothing may be left out.'
         % (money(N.net_income), money(N.oci), money(N.issue_proceeds),
            money(N.dividends), money(N.equity - N.equity_py))),

        ('mcq', 'A company issues shares with a total par value of $20,000 for '
                'proceeds of $140,000. In the statement of changes in equity this '
                'appears as:',
         ['$140,000 in the common stock column',
          '$20,000 in common stock and $120,000 in additional paid-in capital',
          '$140,000 in retained earnings',
          '$20,000 in common stock and $120,000 in other comprehensive income'],
         1, 'Level A',
         'Par goes to common stock, the excess to additional paid-in capital. (A) '
         'ignores the split. (C) is the serious error — money from owners is '
         'never a profit the company earned. (D) misuses a column reserved for a '
         'closed list of gains and losses.'),

        ('mcq', 'Other comprehensive income for the year is reported in the '
                'statement of changes in equity as an addition to:',
         ['Retained earnings', 'Accumulated other comprehensive income',
          'Additional paid-in capital', 'Common stock'],
         1, 'Level A',
         'Other comprehensive income accumulates in its own column, which is why '
         'the balance sheet line carries the word accumulated. Putting it in '
         'retained earnings (A) breaks both roll-forwards at once.'),

        ('mcq', 'Which of the following would NOT appear as a row in the statement '
                'of changes in equity?',
         ['Dividends declared during the year',
          'Interest paid to the company’s bank',
          'Net income for the year',
          'Proceeds from issuing shares'],
         1, 'Level B',
         'Interest is a cost of trading paid to a lender, not to an owner, so it is '
         'charged in arriving at net income and reaches equity only inside that one '
         'figure. The other three are movements in equity in their own right.'),

        ('mcq', 'The opening balance of retained earnings in a statement of changes '
                'in equity does not agree with the closing balance reported in the '
                'prior year. This indicates that:',
         ['An arithmetic error has certainly been made',
          'A prior period has been restated, and the notes should explain it',
          'The company changed its dividend policy',
          'Other comprehensive income was recorded during the year'],
         1, 'Level C',
         'A broken opening balance is the signature of a restatement, which must be '
         'disclosed. (A) overstates the case — a restatement is deliberate. '
         '(C) would appear as a dividend row, not as a changed opening balance. (D) '
         'would land in a different column entirely.'),

        ('mcq', 'A company reports net income of $400,000, other comprehensive '
                'income of $30,000, and dividends declared of $150,000. The '
                'increase in retained earnings for the year is:',
         ['$250,000', '$280,000', '$400,000', '$430,000'],
         0, 'Level B',
         'Retained earnings receives net income and is reduced by dividends: '
         '$400,000 − $150,000 = $250,000. (B) wrongly adds the other '
         'comprehensive income, which belongs in its own column. (C) omits the '
         'dividend. (D) is total comprehensive income before the dividend.'),

        ('tip', 'Before you answer any equity question, draw the four columns on '
                'your scratch paper and write the opening balances across the top. '
                'Most of the errors in this topic are items landing in the wrong '
                'column, and the columns make that visible.'),
    ],

    key_extra=[
        ('h3', 'Exercise 4C · the completed statement of changes in equity'),
        ('table', _SCEHEAD, _sce(), SCE, _SCEW),
        ('bullets', [
            'Read down any column: opening balance, movements, closing balance.',
            'Read across any row: one event, landing in every account it touches.',
            'The bottom right cell, %s, is total shareholders’ equity on the '
            'balance sheet at 31 December %s.' % (money(N.equity), Y),
        ]),
    ],
)
