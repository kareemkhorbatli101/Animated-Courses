# -*- coding: utf-8 -*-
"""Volume 8, Handout 1 — Paid-In Capital or Retained Earnings?

Covers A.2(v): identifying the transactions that affect paid-in capital, and
telling them apart from the ones that affect earned capital.
"""
from fadata import N, EQ, Y, PY
from data import money, num

CAP, EARN, TREAS, SLATE = '2F6F8F', '1F7A6A', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_SECTH = ['Equity at 31 December %s' % Y, 'Amount', 'Where it came from']
_SECTW = [40, 24, 36]


def _section(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Common stock, $%d par' % EQ.par, money(N.common_stock),
         c('Par value of the %s shares issued'
           % num(EQ.shares / 1000, 0) + ',000')],
        ['Additional paid-in capital', money(N.apic),
         c('Everything shareholders paid above par')],
        ['Retained earnings', money(N.retained),
         c('Profits earned and not yet distributed')],
        ['Accumulated other comprehensive income', money(N.aoci),
         c('Gains required to bypass profit')],
        ['Total shareholders’ equity', money(N.equity), ''],
    ]


_MOVEH = ['Movement during %s' % Y, 'Common stock',
          'Additional paid-in capital', 'Retained earnings']
_MOVEW = [34, 22, 22, 22]


def _moves(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Balance at 1 January %s' % Y, money(N.common_stock_py),
         money(N.apic_py), money(N.retained_py)],
        ['%s shares issued at $%d' % (num(N.shares_issued / 1000, 0) + ',000',
                                      N.issue_price),
         c(money(N.par_value_issued)), c(money(N.apic_issued)), c('—')],
        ['Net income for the year', c('—'), c('—'),
         c(money(N.net_income))],
        ['Dividends declared', c('—'), c('—'), c(money(-N.dividends))],
        ['Balance at 31 December %s' % Y, c(money(N.common_stock)),
         c(money(N.apic)), c(money(N.retained))],
    ]


HANDOUT = dict(
    n=1,
    title='Paid-In Capital or Retained Earnings?',
    subtitle='Northwind’s equity of %s came from two sources that are never '
             'mixed: %s put in by shareholders and %s earned by the company.'
             % (money(N.equity), money(N.common_stock + N.apic),
                money(N.retained)),
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the two sources are separated, R2 once the '
                 'transactions are being classified.',
        collocations=['issue shares at a premium',
                      'credit additional paid-in capital',
                      'charge an amount to retained earnings',
                      'declare a dividend',
                      'state a par value',
                      'reduce legal capital'],
        pairs=['paid-in capital / retained earnings',
               'contributed / earned',
               'par value / issue price',
               'declared / paid'],
        nots=['Additional paid-in capital is not profit. No part of it was ever '
              'earned by the company.',
              'Retained earnings is not cash. It is a measure of profits not '
              'distributed, and the cash may be anywhere.'],
    ),

    objectives=[
        'Name the two sources of shareholders’ equity and keep them apart.',
        'Say what par value is and what it is for.',
        'Record an issue of shares above par.',
        'Decide, for a given transaction, which equity account it moves.',
        'Read a statement of changes in equity and reconcile it.',
    ],

    terms=[
        ('paid-in capital',
         'The total amount shareholders have paid the company for its shares.',
         'رأس المال المدفوع',
         'Called contributed capital in some texts. It covers the par account '
         'and the premium account together.'),
        ('par value',
         'A nominal amount per share fixed in the company’s charter, below '
         'which shares may not normally be issued.', 'القيمة الاسمية',
         'Arbitrary and usually tiny. It has nothing to do with what a share is '
         'worth, and the exam uses that gap deliberately.'),
        ('legal capital',
         'The portion of equity that may not be distributed to shareholders, '
         'normally the par value of the shares issued.', 'رأس المال القانوني',
         'The reason par exists at all: it fixes a floor that protects '
         'creditors.'),
        ('retained earnings',
         'Cumulative profits of the company less cumulative distributions to '
         'shareholders.', 'الأرباح المحتجزة',
         'A cumulative balance, not a result for the year. The year’s profit is '
         'only the latest addition to it.'),
        ('stated value',
         'An amount a board assigns to no-par shares, which then serves the '
         'purpose par would have served.', 'القيمة المقررة',
         'Used where a jurisdiction allows shares without par. The accounting '
         'is identical, with stated value in place of par.'),
    ],

    blocks=[
        ('scene', 'Two sources, never mixed', [
            'Northwind’s shareholders’ equity stands at %s. Every dollar of it '
            'arrived in one of two ways.' % money(N.equity),
            'Shareholders paid in %s for their shares. The company earned %s '
            'and has not distributed it.'
            % (money(N.common_stock + N.apic), money(N.retained)),
            'The two are reported separately and are never added together into '
            'one figure, because they answer different questions. One says what '
            'the owners put in; the other says what the business has made.',
            'This handout sorts the year’s transactions into the right one.',
        ]),
        ('fig', 'ranked', 'Where Northwind’s equity came from',
         [('Common stock, at $%d par' % EQ.par, N.common_stock,
           money(N.common_stock), CAP),
          ('Additional paid-in capital', N.apic, money(N.apic), CAP),
          ('Retained earnings, earned and kept', N.retained,
           money(N.retained), EARN),
          ('Accumulated other comprehensive income', N.aoci,
           money(N.aoci), SLATE)],
         'The first two bars are contributed capital and the third is earned '
         'capital. Together with the fourth they are the whole of equity, %s.'
         % money(N.equity),
         '%s · at 31 December %s' % (N.short, Y)),

        ('part', 'Part 1 · Par value and what it is for',
         'a floor, not a price'),

        ('task', 'Exercise 1A',
         'Say what par value is and why a share sells for more than it.',
         'Read and complete. Write one word in each space.',
         ['Volume 1 Handout 4, for the equity section of the balance sheet.'],
         ['Northwind’s shares have a par value of $%d and were issued at $%d.'
          % (EQ.par, N.issue_price),
          'Par was invented to protect somebody. Ask who is harmed if a company '
          'gives its shares away.',
          'The last blank is the account that takes the excess over par, and it '
          'is not an income account.']),
        ('fill', 'R1',
         ['Northwind’s charter fixes a par value of $%d a share. That figure is '
          'not what a share is worth and never was. It is a {floor}, set so '
          'that shares cannot be handed out for nothing.' % EQ.par,
          'The protection is for creditors rather than shareholders. Par '
          'multiplied by the shares issued is the company’s {legal} capital, '
          'and that amount may not be paid back out as a dividend.',
          'Northwind issued %s shares during %s at $%d each. Of the $%d, $%d is '
          'par and the other $%d is a premium the buyers were willing to pay '
          'for a share worth more than its {par} value.'
          % (num(N.shares_issued / 1000, 0) + ',000', Y, N.issue_price,
             N.issue_price, EQ.par, N.issue_price - EQ.par),
          'The premium is still money shareholders put in, so it belongs with '
          'contributed capital. It is credited to additional paid-in {capital} '
          'and never to income.'],
         {'floor': ('The lowest price at which shares may be issued.', ''),
          'legal': ('The part of equity that cannot be distributed.', ''),
          'par': ('The charter’s nominal figure.', ''),
          'capital': ('Contributed, not earned.',
                      'Students put the premium in income. Nothing a '
                      'shareholder pays for a share is ever revenue.')},
         ['ceiling', 'market', 'earnings']),
        ('fig', 'formula', 'One share issued at $%d, split two ways'
         % N.issue_price,
         [('Cash $%d' % N.issue_price, 'What the shareholder paid', OK),
          ('=', '', None),
          ('Common stock $%d' % EQ.par, 'Par value, the legal capital', CAP),
          ('+', '', None),
          ('Paid-in capital $%d' % (N.issue_price - EQ.par),
           'The premium above par', SLATE)],
         'Two credits for one debit, and neither of them touches income.'),

        ('part', 'Part 2 · Reading the equity section',
         'four lines, two sources'),

        ('task', 'Exercise 1B',
         'Say where each line of the equity section came from.',
         'Complete the right-hand column. One short phrase in each cell.',
         ['Exercise 1A, and Volume 1 Handout 6 on comprehensive income.'],
         ['Two of the four lines are contributed and two are not.',
          'The %s of accumulated other comprehensive income is the one Volume 1 '
          'and Volume 6 both traced.' % money(N.aoci),
          'The amounts are given. Only the source is being asked for.']),
        ('table', _SECTH, _section(blank=True), CAP, _SECTW),
        ('answers', 4),
        ('fig', 'buckets', 'The equity section, sorted by source',
         [('CONTRIBUTED — what shareholders paid in', CAP,
           ['Common stock %s, the par value'
            % money(N.common_stock),
            'Additional paid-in capital %s, the premium' % money(N.apic),
            'Total contributed %s'
            % money(N.common_stock + N.apic)]),
          ('EARNED — what the business made', EARN,
           ['Retained earnings %s' % money(N.retained),
            'Accumulated other comprehensive income %s' % money(N.aoci),
            'Total earned %s' % money(N.retained + N.aoci)])],
         'Neither column is cash and neither is a fund. Both are measures of '
         'where the %s of net assets came from.' % money(N.equity)),

        ('part', 'Part 3 · Which account does a transaction move?',
         'the classification, item by item'),

        ('prose', 'A transaction with shareholders moves contributed capital. A '
                  'transaction that reports or distributes the company’s own '
                  'performance moves retained earnings. A transaction with an '
                  'outsider that is neither moves nothing in equity at all.',
         'R2'),

        ('task', 'Exercise 1C',
         'Decide which equity account each transaction moves.',
         'Sort each transaction into the column it belongs in.',
         ['The paragraph above, and Exercise 1B.'],
         ['Ask who the other party is. A shareholder acting as a shareholder '
          'means contributed capital.',
          'Profit, loss and dividends are all about the company’s own '
          'performance and its distribution.',
          'Two of the items move no equity account at all, and borrowing is '
          'one of them.']),
        ('sortgrid',
         ['Transaction', 'PAID-IN', 'RETAINED', 'NEITHER'],
         ['Shares issued above par for cash',
          'Net income reported for the year',
          'A cash dividend declared',
          'A long-term loan drawn down',
          'Shares issued in exchange for a building',
          'An item of inventory written down to market',
          'A prior period error corrected',
          'Interest paid on a bond'],
         ['PAID-IN', 'RETAINED', 'RETAINED', 'NEITHER', 'PAID-IN',
          'RETAINED', 'RETAINED', 'RETAINED'],
         'A write-down, interest and a loss all reach retained earnings through '
         'profit. Only the loan itself touches no equity account.'),
        ('fig', 'fork', 'Which equity account does this move?',
         [('Is the other party a shareholder, acting as one?',
           'YES → paid-in capital, at par and premium', CAP),
          ('Is this the company’s own performance, or its distribution?',
           'YES → retained earnings, through profit or by declaration', EARN),
          ('Is it a transaction with an outsider, for value?',
           'NO equity account moves — assets and liabilities only', SLATE)]),

        ('part', 'Part 4 · The statement of changes in equity',
         'the year, reconciled'),

        ('task', 'Exercise 1D',
         'Reconcile each equity account from its opening to its closing '
         'balance.',
         'Complete the grid. Write a dash where an account is not affected.',
         ['Exercises 1A and 1C, and Volume 1 Handout 5 for the net income.'],
         ['Three transactions, three accounts, and most cells are dashes.',
          'The share issue splits between two columns: $%d of par and $%d of '
          'premium a share.' % (EQ.par, N.issue_price - EQ.par),
          'Retained earnings takes the %s of profit and gives up the %s of '
          'dividends, and must close at %s.'
          % (money(N.net_income), money(N.dividends),
             money(N.retained))]),
        ('table', _MOVEH, _moves(blank=True), EARN, _MOVEW),
        ('answers', 12),
        ('fig', 'taccounts',
         [('Retained Earnings',
           [('J2', money(N.dividends)), ('c/d', money(N.retained))],
           [('b/d', money(N.retained_py)), ('J1', money(N.net_income))],
           '#' + EARN),
          ('Additional Paid-In Capital',
           [('c/d', money(N.apic))],
           [('b/d', money(N.apic_py)), ('J3', money(N.apic_issued))],
           '#' + CAP)],
         'Both accounts are credit balances and both grew this year, for '
         'completely different reasons: %s of profit kept, and %s of premium '
         'paid in.' % (money(N.net_income - N.dividends),
                       money(N.apic_issued)),
         2,
         [('b/d', 'Opening balance brought down from %s' % PY),
          ('J1', 'Profit for the year closed to retained earnings'),
          ('J2', 'Dividends declared during the year'),
          ('J3', 'The premium on the %s shares issued at $%d'
           % (num(N.shares_issued / 1000, 0) + ',000', N.issue_price)),
          ('c/d', 'Balance carried down at 31 December %s' % Y)]),

        ('watch', 'Retained earnings is not a pot of money. Northwind has %s of '
                  'retained earnings and %s of cash. A company can be unable to '
                  'pay a dividend with large retained earnings, and a question '
                  'that asks whether a dividend can be paid is asking about '
                  'cash and about legal capital, not about the balance.'
                  % (money(N.retained), money(N.cash))),

        ('part', 'Part 5 · Declaring a dividend',
         'three dates, one entry'),

        ('task', 'Exercise 1E',
         'Say which of the three dividend dates produces an accounting entry.',
         'Read and complete. Write one word in each space.',
         ['Exercise 1D, where the %s of dividends reduced retained earnings.'
          % money(N.dividends)],
         ['A dividend has a declaration date, a record date and a payment date, '
          'and they are not all accounting events.',
          'Ask on which date the company first has an obligation it cannot '
          'avoid.',
          'The last blank is what the record date does, and it is a matter of '
          'identifying shareholders rather than of measuring anything.']),
        ('fill', 'R2',
         ['A dividend passes three dates. On the date of {declaration} the '
          'board resolves to pay, and from that moment the company owes the '
          'money and cannot withdraw the decision.',
          'That is the date the entry is made. Retained earnings is reduced by '
          'the %s declared and a dividends {payable} liability is recognised '
          'for the same amount.' % money(N.dividends),
          'On the date of payment the liability is settled in cash. Equity is '
          'untouched, because it was reduced when the obligation {arose} rather '
          'than when the cheques went out.',
          'Between the two sits the date of {record}, which fixes who the '
          'shareholders are and so who gets paid. No entry is made on it at '
          'all.'],
         {'declaration': ('The board resolves, and the obligation exists.', ''),
          'payable': ('A current liability like any other.', ''),
          'arose': ('Declaration, not payment.',
                    'Students reduce equity when the cash leaves. By then the '
                    'reduction has already happened.'),
          'record': ('It identifies shareholders; it measures nothing.', '')},
         ['payment', 'receivable', 'expense']),
        ('fig', 'timeline', 'The three dividend dates',
         [('Declaration', 'The board resolves. Retained earnings falls by %s '
                          'and a liability arises.' % money(N.dividends),
           EARN),
          ('Record', 'The shareholder register is fixed. No entry is made.',
           SLATE),
          ('Payment', 'The liability is settled in cash. Equity does not '
                      'move.', OK)],
         'One entry on the first date and one on the last. The middle date '
         'decides who is paid and nothing else.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company issues 5,000 shares of $2 par common stock for $15 '
                'a share. Additional paid-in capital increases by:',
         ['$75,000', '$65,000', '$10,000', 'Nil, because the excess is income'],
         1, 'Level A',
         '5,000 shares at $13 above par is $65,000, with $10,000 going to the '
         'par account. (A) credits the whole proceeds to the premium account '
         'and leaves legal capital unrecorded.'),

        ('mcq', 'Par value represents:',
         ['The market value of a share at issue',
          'A nominal amount that fixes the company’s legal capital',
          'The book value of a share',
          'The minimum dividend per share'],
         1, 'Level A',
         'Par fixes legal capital, which may not be distributed. (A) and (C) '
         'both attach an economic meaning to a figure set arbitrarily in the '
         'charter, which is the misreading the exam tests.'),

        ('mcq', 'Which of the following increases paid-in capital?',
         ['Net income for the year',
          'Shares issued in exchange for land',
          'A cash dividend declared',
          'A revaluation of available-for-sale securities'],
         1, 'Level B',
         'Shares issued are a transaction with shareholders, whatever is '
         'received for them. (A) and (C) move retained earnings, and (D) goes '
         'to accumulated other comprehensive income.'),

        ('mcq', 'Retained earnings is reduced by:',
         ['Issuing shares below par',
          'A dividend declared but not yet paid',
          'Drawing down a bank loan',
          'Purchasing inventory on credit'],
         1, 'Level B',
         'Declaration is the event that reduces retained earnings and creates '
         'the liability; payment only settles it. (A) is a paid-in capital '
         'question and in most jurisdictions is not permitted at all.'),

        ('mcq', 'Northwind’s equity is %s, of which %s is retained earnings. '
                'Its cash balance is %s. The largest cash dividend it could '
                'physically pay is:' % (money(N.equity), money(N.retained),
                                        money(N.cash)),
         [money(N.retained), money(N.cash), money(N.equity),
          money(N.retained + N.aoci)],
         1, 'Level C',
         'Retained earnings measures what may be distributed, not what is '
         'available to distribute: the company cannot pay out more cash than '
         'the %s it holds. (A) is the standard confusion of a measure with a '
         'fund.' % money(N.cash)),

        ('mcq', 'A company with no-par shares assigns a stated value of $5. '
                'Shares are issued at $20. The accounting is:',
         ['The whole $20 is credited to common stock',
          '$5 to common stock and $15 to additional paid-in capital',
          'The whole $20 is credited to additional paid-in capital',
          '$5 to common stock and $15 to retained earnings'],
         1, 'Level C',
         'Stated value does the work par would do, so the split is the same. '
         '(D) is the trap: nothing a shareholder pays can ever reach retained '
         'earnings, because retained earnings records only what the company has '
         'earned.'),

        ('mcq', 'A prior period error is corrected in the current year. The '
                'correction is reported:',
         ['In current year profit',
          'As an adjustment to the opening balance of retained earnings',
          'In other comprehensive income',
          'As a reduction of paid-in capital'],
         1, 'Level B',
         'An error belongs to the year it was made, so the opening balance is '
         'restated rather than this year’s profit. (A) would let a past mistake '
         'distort a current result, which is exactly what the treatment exists '
         'to prevent.'),

        ('tip', 'Before you touch an equity question, ask who the other party '
                'is. A shareholder acting as a shareholder can never generate '
                'income or a loss for the company, however large the amounts '
                'are, and that single rule disposes of most of the distractors '
                'on this topic.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · where each line came from'),
        ('table', _SECTH, _section(), CAP, _SECTW),
        ('h3', 'Exercise 1D · the completed reconciliation'),
        ('table', _MOVEH, _moves(), EARN, _MOVEW),
        ('prose', 'Each column closes on the figure Volume 1 reported: common '
                  'stock at %s, additional paid-in capital at %s and retained '
                  'earnings at %s. The share issue is the only transaction that '
                  'appears in two columns at once.'
                  % (money(N.common_stock), money(N.apic),
                     money(N.retained)), 'R2'),
        ('prose', 'Accumulated other comprehensive income is not in the grid '
                  'because nothing in these three transactions touches it. Its '
                  '%s movement for the year was traced in Volume 6.'
                  % money(N.aoci - N.aoci_py), 'R2'),
    ],
)
