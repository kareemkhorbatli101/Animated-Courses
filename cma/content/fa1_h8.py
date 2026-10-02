# -*- coding: utf-8 -*-
"""Volume 1, Handout 8 — Building the Statement of Cash Flows (Indirect Method).

Covers A.1(g) for the statement of cash flows: how it is prepared under the
indirect method.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'


def _scf(blank=False):
    """Northwind's cash flow statement, indirect method. All figures derived."""
    def m(v):
        return None if blank else money(v)
    return [
        ('Cash flows from operating activities', 0, None, 'b'),
        ('Net income', 1, m(N.net_income), ''),
        ('Adjustments for items not involving cash', 1, None, 'b'),
        ('Depreciation and amortisation', 2, m(N.dep_amort), ''),
        ('Gain on disposal of equipment', 2, m(-N.gain_disposal), ''),
        ('Deferred income tax expense', 2, m(N.deferred_tax_pl), ''),
        ('Changes in working capital', 1, None, 'b'),
        ('Increase in accounts receivable, net', 2, m(-N.d_ar), ''),
        ('Increase in inventory', 2, m(-N.d_inventory), ''),
        ('Increase in prepaid expenses', 2, m(-N.d_prepaid), ''),
        ('Increase in accounts payable', 2, m(N.d_ap), ''),
        ('Increase in accrued liabilities', 2, m(N.d_accrued), ''),
        ('Increase in income taxes payable', 2, m(N.d_taxes), ''),
        ('Net cash provided by operating activities', 0, m(N.cfo), 't'),
        ('Cash flows from investing activities', 0, None, 'b'),
        ('Purchase of property, plant and equipment', 1,
         m(-N.ppe_purchased), ''),
        ('Proceeds from disposal of equipment', 1, m(N.disposal_proceeds), ''),
        ('Purchase of debt securities', 1, m(-N.afs_purchased), ''),
        ('Net cash used in investing activities', 0, m(N.cfi), 't'),
        ('Cash flows from financing activities', 0, None, 'b'),
        ('Proceeds from issuing common stock', 1, m(N.issue_proceeds), ''),
        ('Repayment of long-term debt', 1, m(-N.debt_repaid), ''),
        ('Dividends paid', 1, m(-N.dividends), ''),
        ('Net cash used in financing activities', 0, m(N.cff), 't'),
        ('Net increase in cash and cash equivalents', 0,
         m(N.net_cash_change), 't'),
        ('Cash and cash equivalents at 1 January %s' % Y, 0, m(N.cash_py), ''),
        ('Cash and cash equivalents at 31 December %s' % Y, 0, m(N.cash), 't'),
    ]


_WCH = ['Working capital account', '31 Dec %s' % PY, '31 Dec %s' % Y, 'Change',
        'Effect on cash']
_WCW = [32, 16, 16, 16, 20]


def _wc(blank=False):
    def c(v):
        return '' if blank else v
    rows = [
        ('Accounts receivable, net', N.ar_net_py, N.ar_net, N.d_ar, False),
        ('Inventory', N.inventory_py, N.inventory, N.d_inventory, False),
        ('Prepaid expenses', N.prepaid_py, N.prepaid, N.d_prepaid, False),
        ('Accounts payable', N.ap_py, N.ap, N.d_ap, True),
        ('Accrued liabilities', N.accrued_py, N.accrued, N.d_accrued, True),
        ('Income taxes payable', N.taxes_payable_py, N.taxes_payable,
         N.d_taxes, True),
    ]
    out = []
    for name, py, cy, d, is_liab in rows:
        effect = d if is_liab else -d
        out.append([name, money(py), money(cy), c(money(d)), c(money(effect))])
    return out


HANDOUT = dict(
    n=8,
    title='Building the Statement of Cash Flows (Indirect Method)',
    subtitle='Start at net income, remove everything that was not cash, and you '
             'arrive at cash. Every adjustment has a reason you can state.',
    register='R2 throughout, with R3 in the final part',

    lang=dict(
        register='R2 textbook English. This handout is procedural, and the '
                 'vocabulary is about direction: add back, deduct, reverse.',
        collocations=['add back a non-cash expense', 'reverse a gain',
                      'adjust for the movement in working capital',
                      'reconcile net income to cash', 'arrive at net cash provided',
                      'present a subtotal'],
        pairs=['add back / deduct', 'source of cash / use of cash',
               'increase in an asset / increase in a liability',
               'expense / payment'],
        nots=['Adding back depreciation does not create cash. It removes a '
              'deduction that never used cash in the first place.',
              'An increase in a current asset is a use of cash, not a source, '
              'however healthy it looks.'],
    ),

    objectives=[
        'State what the indirect method is reconciling, and in which direction.',
        'Add back a non-cash expense and say why the add-back is not a cash '
        'inflow.',
        'Reverse a gain out of operating activities and say where it reappears.',
        'Work out the cash effect of a movement in any working capital account.',
        'Build Northwind’s complete statement and prove it against the '
        'balance sheet.',
    ],

    terms=[
        ('working capital',
         'The current assets and current liabilities used in day-to-day trading.',
         'رأس المال العامل',
         'For this statement, only the operating ones. Cash itself and short-term '
         'debt are not part of the adjustment.'),
        ('non-cash expense',
         'An expense charged against income that involved no payment.',
         'مصروف غير نقدي',
         'Depreciation, amortisation and the charge for credit losses are the '
         'common ones. All are added back.'),
        ('add-back',
         'An amount returned to net income because it reduced income without '
         'using cash.', 'إضافة عكسية',
         'An add-back is a correction, not an inflow. Nothing arrives because of '
         'it.'),
        ('source of cash',
         'A movement that leaves the company holding more cash.', 'مصدر نقدي',
         'Selling inventory and collecting a receivable are sources. So, awkwardly, '
         'is taking longer to pay a supplier.'),
        ('use of cash',
         'A movement that leaves the company holding less cash.', 'استخدام للنقد',
         'Building inventory and letting receivables grow are both uses, however '
         'well the business is trading.'),
        ('reconciliation',
         'A presentation that explains the difference between two figures.',
         'تسوية',
         'The operating section is a reconciliation: it starts at net income and '
         'ends at cash from operations.'),
    ],

    blocks=[
        ('scene', 'From %s of profit to %s of operating cash'
                  % (money(N.net_income), money(N.cfo)), [
            'Northwind earned %s and generated %s of cash from its trading. The '
            'two figures differ by %s, and the operating section of this statement '
            'exists to explain every dollar of that difference.'
            % (money(N.net_income), money(N.cfo),
               money(N.cfo - N.net_income)),
            'The indirect method starts at net income and works towards cash. It '
            'is a reconciliation, not a fresh calculation: nothing in it is a new '
            'fact about the business, and every line is a correction to something '
            'already reported.',
            'There are three kinds of correction, and once you can name which kind '
            'a line is, the sign takes care of itself.',
        ]),
        ('fig', 'bridge',
         'Net income', N.net_income,
         [('Non-cash expenses added back', N.dep_amort + N.deferred_tax_pl),
          ('Gain on disposal reversed out', -N.gain_disposal),
          ('Working capital movements', N.cfo - N.net_income - N.dep_amort
           - N.deferred_tax_pl + N.gain_disposal)],
         'Cash from operating activities', N.cfo),

        ('part', 'Part 1 · The three corrections',
         'what the operating section actually does'),

        ('task', 'Exercise 8A',
         'Name the three kinds of correction and say why each one is needed.',
         'Read and complete. Write one word in each space.',
         ['Handout 5, for the three sections.',
          'Handout 6, for why profit and cash differ.'],
         ['Each paragraph is one kind of correction. The blank names it or names '
          'its direction.',
          'Blank 2 is what you do with an expense that used no cash.',
          'Blank 4 is where the disposal proceeds belong instead. It is a different '
          'section of the same statement.']),
        ('fill', 'R2',
         ['The operating section starts at net income and corrects it until what '
          'is left is cash. There are three kinds of correction and nothing else.',
          'The first deals with expenses that reduced income without using cash. '
          'Depreciation and amortisation of %s was charged, but the cash left years '
          'ago when the assets were bought, so the amount is {added} back.'
          % money(N.dep_amort),
          'The second deals with items that belong in another section. The %s gain '
          'on disposal increased net income, but it was not generated by trading at '
          'all. It is {deducted} here, and the whole of the %s proceeds appears '
          'instead under {investing} activities, where a disposal belongs.'
          % (money(N.gain_disposal), money(N.disposal_proceeds)),
          'The third deals with timing. Revenue was recognised before some '
          'customers paid, and costs were incurred before some suppliers were paid. '
          'Those gaps sit in the {working} capital accounts, and the movement in '
          'each one is an adjustment.'],
         {'added': ('It never used cash, so remove the deduction.',
                    'Students say depreciation is a source of cash. Nothing arrives; '
                    'a deduction is simply removed.'),
          'deducted': ('Out of operating, because it is not trading.', ''),
          'investing': ('The whole proceeds, not just the gain.', ''),
          'working': ('The timing differences live here.', '')},
         ['financing', 'ignored', 'fixed']),
        ('fig', 'buckets', 'Three corrections, and nothing else',
         [('EXPENSES THAT USED NO CASH', IS,
           ['Depreciation and amortisation', 'Deferred income tax expense',
            'ADD them back', 'They reduced income, not cash', '']),
          ('ITEMS IN THE WRONG SECTION', BS,
           ['Gain on disposal of equipment', 'DEDUCT it here',
            'The proceeds reappear in investing', 'Not generated by trading', '']),
          ('TIMING DIFFERENCES', SCF,
           ['Receivables, inventory, prepayments', 'Payables, accruals, tax owed',
            'ADD or DEDUCT the movement', 'See Part 2 for the direction', ''])],
         'Every line in the operating section is one of these three. If you cannot '
         'name which, you have the sign wrong.'),

        ('part', 'Part 2 · Getting the sign right',
         'the working capital rule'),

        ('prose', 'The working capital adjustments are where signs go wrong, and '
                  'the rule behind them is short. Cash is what is left after '
                  'everything else has moved. If something else goes up, cash went '
                  'somewhere to pay for it.', 'R2'),
        ('prose', 'So an increase in a current asset is a use of cash: the company '
                  'is holding more inventory, or has let customers owe it more, and '
                  'either way the money is tied up rather than in the bank. An '
                  'increase in a current liability is the reverse: the company is '
                  'holding on to cash it has not yet paid out.', 'R2'),

        ('task', 'Exercise 8B',
         'Work out the cash effect of each working capital movement.',
         'Complete the last two columns. Write the change, then whether it added '
         'to or took from cash.',
         ['Exercise 8A, and the two paragraphs above.'],
         ['Compute the change first, then apply the rule. Do not try to do both '
          'in one step.',
          'The first three rows are assets. The last three are liabilities. The '
          'rule reverses between them.',
          'Write the effect in brackets when it took cash away.']),
        ('table', _WCH, _wc(blank=True), SCF, _WCW),
        ('answers', 12),
        ('fig', 'matrix', 'The working capital rule, in four cells',
         ['A current ASSET went UP', 'A current ASSET went DOWN',
          'A current LIABILITY went UP', 'A current LIABILITY went DOWN'],
         ['What it means', 'Effect on cash'],
         [['More money tied up in the business', 'DEDUCT — a use of cash'],
          ['Money released back out of the business', 'ADD — a source'],
          ['Holding on to cash not yet paid out', 'ADD — a source'],
          ['Paying down what was owed', 'DEDUCT — a use of cash']],
         'Learn the first row and the third. The other two are their mirrors, and '
         'deriving them is faster than memorising four.'),

        ('part', 'Part 3 · Build it', 'the whole statement'),

        ('task', 'Exercise 8C',
         'Build Northwind’s complete statement of cash flows.',
         'Write the figures into the blank statement. Work down the page one '
         'section at a time.',
         ['Exercises 8A and 8B', 'Handout 5, for which section each item belongs '
          'in.'],
         ['The operating section is the only one that needs the corrections. The '
          'other two are simply the cash amounts.',
          'The disposal appears twice in your working: as a deduction of the gain '
          'in operating, and as the full proceeds in investing.',
          'The last line must equal the cash figure on the balance sheet. That is '
          'the proof the statement is right.']),
        ('stmt', '%s · Statement of Cash Flows for the year ended '
                 '31 December %s' % (N.name, Y), _scf(blank=True), SCF),
        ('fig', 'ranked', 'What moved operating cash, in order of size',
         [('Net income', N.net_income, money(N.net_income), IS),
          ('Depreciation and amortisation added back', N.dep_amort,
           money(N.dep_amort), IS),
          ('Inventory increase', N.d_inventory, money(-N.d_inventory), RUST),
          ('Receivables increase', N.d_ar, money(-N.d_ar), RUST),
          ('Payables increase', N.d_ap, money(N.d_ap), SCF),
          ('Gain on disposal reversed', N.gain_disposal,
           money(-N.gain_disposal), SLATE),
          ('Deferred tax added back', N.deferred_tax_pl,
           money(N.deferred_tax_pl), IS),
          ('Accruals increase', N.d_accrued, money(N.d_accrued), SCF),
          ('Tax payable increase', N.d_taxes, money(N.d_taxes), SCF),
          ('Prepayments increase', N.d_prepaid, money(-N.d_prepaid), RUST)],
         'Teal adds, rust takes away, blue adds by delaying payment. Together they '
         'turn %s of profit into %s of cash.'
         % (money(N.net_income), money(N.cfo))),

        ('part', 'Part 4 · Prove it', 'the check that closes the volume'),

        ('task', 'Exercise 8D',
         'Prove the statement against the balance sheet, and say what a failure '
         'would mean.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercise 8C'],
         ['Blank 1 is the figure the three sections must add to.',
          'Blank 3 is the statement the proof is made against.',
          'The last blank is what you should check first when the proof fails, and '
          'it is a direction, not an account.']),
        ('fill', 'R3',
         ['The three sections total %s, %s and %s. Added together they give a net '
          'increase in cash of {%s}.'
          % (money(N.cfo), money(N.cfi), money(N.cff),
             money(N.net_cash_change)),
          'Cash at the beginning of the year was %s, so cash at the end must be '
          '{%s}, and that figure appears without adjustment as the first line of '
          'the {balance} sheet.' % (money(N.cash_py), money(N.cash)),
          'If the two do not agree, the error is almost never in the investing or '
          'financing sections, which are simply lists of cash amounts. It is in the '
          'operating section, and it is usually a {sign}: an adjustment added where '
          'it should have been deducted, which puts the statement out by twice the '
          'amount of the item.'],
         {money(N.net_cash_change): ('The three sections added.', ''),
          money(N.cash): ('%s plus the movement.' % money(N.cash_py), ''),
          'balance': ('The proof is against the balance sheet.', ''),
          'sign': ('Out by twice the item is the signature of a reversed sign.',
                   'Students hunt for a missing item when the statement is out by '
                   'an even number. A doubled error is a sign error.')},
         [money(N.cfo), money(N.cash_py), 'income']),
        ('fig', 'timeline', 'The proof, in three steps',
         [('Opening cash %s' % money(N.cash_py), 'from last year’s balance '
           'sheet', SLATE),
          ('Three sections %s' % money(N.net_cash_change),
           'operating, investing, financing', SCF),
          ('Closing cash %s' % money(N.cash),
           'agrees with this year’s balance sheet', BS)],
         'If a statement is out by an even number, suspect a sign before you '
         'suspect a missing line.'),

        ('watch', 'The disposal is the item most often handled wrongly. The gain of '
                  '%s comes out of operating, and the whole %s of proceeds goes '
                  'into investing. Putting the gain in investing, or the proceeds '
                  'in operating, breaks the statement in two places at once.'
                  % (money(N.gain_disposal), money(N.disposal_proceeds))),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Under the indirect method, depreciation expense is added back to '
                'net income because:',
         ['Depreciation generates cash for the replacement of assets',
          'Depreciation reduced net income without using cash in the period',
          'Depreciation is an investing activity',
          'Depreciation is not deductible in computing taxable income'],
         1, 'Level B',
         'The add-back removes a deduction that used no cash. (A) is the persistent '
         'myth: nothing arrives because of an add-back. (C) confuses the charge '
         'with the original purchase, which was investing. (D) is false and '
         'irrelevant.'),

        ('mcq', 'Accounts receivable rose from %s to %s during the year. The effect '
                'on operating cash flow is:' % (money(N.ar_net_py),
                                                money(N.ar_net)),
         ['An addition of %s' % money(N.d_ar),
          'A deduction of %s' % money(N.d_ar),
          'No effect, because receivables are not cash',
          'A deduction of %s in investing activities' % money(N.d_ar)],
         1, 'Level B',
         'Customers owe more than before, so more of the year’s sales are '
         'still uncollected: an increase in a current asset is a use of cash. (A) '
         'reverses the rule. (C) ignores the timing difference the adjustment '
         'exists for. (D) puts a trading item in the wrong section.'),

        ('mcq', 'Equipment with a carrying amount of %s was sold for %s. Under the '
                'indirect method this is reported as:'
                % (money(N.disposal_book_value), money(N.disposal_proceeds)),
         ['%s added in investing activities only' % money(N.disposal_proceeds),
          '%s deducted in operating activities and %s added in investing '
          'activities' % (money(N.gain_disposal), money(N.disposal_proceeds)),
          '%s added in operating activities' % money(N.gain_disposal),
          '%s added in investing activities' % money(N.gain_disposal)],
         1, 'Level C',
         'The gain of %s inflated net income without being a trading cash flow, so '
         'it is removed from operating; the full proceeds of %s are the investing '
         'inflow. (A) forgets to reverse the gain, leaving it counted twice. (C) '
         'and (D) report the gain rather than the proceeds.'
         % (money(N.gain_disposal), money(N.disposal_proceeds))),

        ('mcq', 'Which of the following movements would INCREASE cash provided by '
                'operating activities?',
         ['An increase in inventory', 'A decrease in accounts payable',
          'An increase in accrued liabilities', 'An increase in prepaid expenses'],
         2, 'Level A',
         'An increase in a current liability means cash has been held on to rather '
         'than paid out, so it is a source. The other three are all uses: building '
         'inventory, paying down suppliers, and paying costs in advance.'),

        ('mcq', 'A company’s statement of cash flows is out of balance by '
                '$46,000, an even amount. The most likely cause is:',
         ['A missing item of $46,000',
          'An adjustment of $23,000 included with the wrong sign',
          'An error in the investing section',
          'An error in the opening cash balance'],
         1, 'Level C',
         'A reversed sign puts the statement out by twice the item, so an even '
         'discrepancy points at a $23,000 adjustment added instead of deducted. (A) '
         'is possible but less likely with an even figure. (C) and (D) are lists of '
         'cash amounts and rarely carry sign errors.'),

        ('mcq', 'Northwind’s net income is %s and cash provided by operating '
                'activities is %s. The difference is explained by:'
                % (money(N.net_income), money(N.cfo)),
         ['Dividends paid during the year',
          'Non-cash expenses, the reversal of a gain, and movements in working '
          'capital',
          'The purchase of equipment',
          'The issue of shares'],
         1, 'Level B',
         'Those are the only three kinds of adjustment the operating section '
         'contains. (A) is financing, (C) investing and (D) financing — none '
         'of them appears in the operating section at all.'),

        ('mcq', 'Under the indirect method, the figure at which the operating '
                'section begins is:',
         ['Revenue', 'Gross margin', 'Net income', 'Cash collected from customers'],
         2, 'Level A',
         'The indirect method reconciles net income to operating cash flow, so it '
         'begins at net income. (D) is where the direct method begins, and both '
         'methods arrive at the same operating cash flow figure.'),

        ('tip', 'Write the three correction types down the margin before you touch '
                'a figure: non-cash, wrong section, timing. Then take each line of '
                'the question in turn and label it. The sign follows from the '
                'label, and you will stop guessing.'),
    ],

    key_extra=[
        ('h3', 'Exercise 8B · the completed working capital table'),
        ('table', _WCH, _wc(), SCF, _WCW),
        ('h3', 'Exercise 8C · the completed statement of cash flows'),
        ('stmt', '%s · Statement of Cash Flows for the year ended '
                 '31 December %s' % (N.name, Y), _scf(), SCF),
        ('bullets', [
            'Operating %s, investing %s, financing %s.'
            % (money(N.cfo), money(N.cfi), money(N.cff)),
            'Net increase in cash %s, added to opening cash of %s, gives closing '
            'cash of %s.' % (money(N.net_cash_change), money(N.cash_py),
                             money(N.cash)),
            'That figure is the first line of the balance sheet in Handout 2. The '
            'four statements now close on one another at every join.',
        ]),
    ],
)
