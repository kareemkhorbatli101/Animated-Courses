# -*- coding: utf-8 -*-
"""Handout 1.5 — Six transactions in January, read as entries and as effects."""

JOURNAL = [
    ['#', 'Date', 'Account', 'Debit', 'Credit'],
    ['1', 'Jan 2', 'Cash', '1,500', ''],
    ['', '', 'Common stock', '', '100'],
    ['', '', 'Additional paid-in capital', '', '1,400'],
    ['2', 'Jan 5', 'Cash', '800', ''],
    ['', '', 'Notes payable (long-term)', '', '800'],
    ['3', 'Jan 10', 'Equipment', '1,200', ''],
    ['', '', 'Cash', '', '1,200'],
    ['4', 'Jan 18', 'Accounts receivable', '300', ''],
    ['', '', 'Sales revenue', '', '300'],
    ['', '', 'Cost of goods sold', '180', ''],
    ['', '', 'Inventory', '', '180'],
    ['5', 'Jan 31', 'Wages expense', '40', ''],
    ['', '', 'Cash', '', '40'],
    ['6', 'Jan 31', 'Retained earnings (dividends declared)', '50', ''],
    ['', '', 'Dividends payable', '', '50'],
    ['', '', 'Totals', '4,070', '4,070'],
]

EXPLAIN = [
    ['#', 'What Orontes did'],
    ['1', 'Issued 100,000 new shares of $1 par common stock for $15 per '
          'share, in cash.'],
    ['2', 'Borrowed cash from Levant Commerce Bank on a 5-year note at 6% '
          'interest.'],
    ['3', 'Bought a new bottling line for the Amman plant and paid cash.'],
    ['4', 'Sold olive oil to GreenBasket Supermarkets on credit. The goods '
          'had cost Orontes less than the selling price.'],
    ['5', 'Paid January wages to plant workers in cash.'],
    ['6', 'The board declared a cash dividend, payable on February 15.'],
]

HANDOUT = dict(
    id='1.5',
    n=5,
    pages=7,
    title='Six transactions in January',
    sub='Reading a journal entry · the effect of each one · the '
        'three mistakes the exam keeps testing',
    covers=['sec:1.3', 'fig:F01-05', 'box:WORKED EXAMPLE:Orontes January',
            'box:EXAM TRAP:three classic mistakes', 'sc:SC3-2', 'p:P04',
            'p:P05', 'p:P06', 'term:accounts receivable',
            'term:accounts payable', 'term:inventory',
            'term:cost of goods sold', 'term:notes payable'],
    skills=[('journal', 3), ('effects', 2), ('traps', 1)],
    derived={'120': 'revenue 300 less cost of goods sold 180: the net '
                    'effect of entry 4 on assets, on equity and on net '
                    'income'},
    flow=[
        ('speed', [
            'Debit is which side?',
            'Which side increases a liability?',
            'Name one contra-asset account',
            'What does a trial balance prove?',
            'Dividends declared increase with a debit or a credit?',
            'The first stop on the road is the',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Reading a journal entry'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A company sells shares with a par value of $1 each for '
                   '$15 each. How much of the $15 is par, and how much is '
                   'above par?',
                 a='$1 is par; $14 is above par',
                 why='Common stock holds only the par value. The rest is '
                     'additional paid-in capital.'),
        ]),
        ('move', 'MODEL',
         'Six entries, as Orontes actually wrote them. Amounts are in USD '
         '000.'),
        ('panel', 'Orontes Foods, Inc. — journal entries for January '
                  '2025', JOURNAL,
         'Check each entry for yourself: the debits equal the credits.'),
        ('panel', 'What each entry was for', EXPLAIN, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Entry 1 credits two accounts. Name both, and give the '
                   'amount against each.',
                 a='Common stock 100 and additional paid-in capital 1,400',
                 why='100,000 shares at $1 par is 100; the remaining 1,400 is '
                     'the amount paid above par.'),
            dict(t='SHORT',
                 q='Entry 4 is really two entries at once. Write what each '
                   'half records.',
                 a='The sale (receivable 300, revenue 300) and the cost of '
                   'the goods sold (cost of goods sold 180, inventory 180)',
                 why='Cost of goods sold links directly to each sale, so it '
                     'is recorded at the same time as the sales revenue.'),
            dict(t='SHORT',
                 q='Which entry debits an account that has the word "expense" '
                   'in its name, and for how much?',
                 a='Entry 5, wages expense 40', why=''),
            dict(t='SHORT',
                 q='Entry 6 debits retained earnings. Which account does it '
                   'credit, and what kind of account is that?',
                 a='Dividends payable — a liability', why=''),
            dict(t='SHORT',
                 q='What are the two totals at the foot, and what does their '
                   'being equal tell you?',
                 a='4,070 and 4,070 — that total debits equal total '
                   'credits',
                 why='It does not prove the accounts chosen were right.'),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'add the debit column and the credit column again. The arithmetic '
         'settles it.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the rule that decides how a share issue above par is split '
         'between two equity accounts.',
         [['Common stock is credited only with the ', 18, ' value.'],
          ['Everything received ', 14, ' that goes to ', 26, '.']],
         ['par', 'above', 'additional paid-in capital'],
         'Contributed capital is what owners paid in: common stock at its par '
         'value, plus additional paid-in capital (APIC).'),
        ('contrast',
         'The same 1,500 of cash, arriving two ways',
         [('Entry 1 · shares issued for cash',
           ['Who gave the cash? The owners.',
            'Which side of the equation rises?',
            'Is any of it revenue?']),
          ('Entry 2 · cash borrowed on a note',
           ['Who gave the cash? A bank.',
            'Which side of the equation rises?',
            'Is any of it revenue?'])],
         'Both bring cash in and neither creates revenue. Write the one word '
         'that names what both of them are, and say why that word is not '
         '"income".'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Orontes buys a bottling line for 1,200 in cash. Which '
                   'journal entry is correct?',
                 o=['Debit Cash 1,200; credit Equipment 1,200',
                    'Debit Equipment expense 1,200; credit Cash 1,200',
                    'Debit Equipment 1,200; credit Notes payable 1,200',
                    'Debit Equipment 1,200; credit Cash 1,200'],
                 a='D',
                 why='One asset increases and another decreases. The sides '
                     'are not reversed, the bottling line is not an expense '
                     'of this period, and Orontes paid cash rather than '
                     'borrowing.'),
        ]),
        ('check',
         'Entry 4 debits accounts receivable 300 and credits sales revenue '
         '300. Why does it also debit cost of goods sold 180?',
         'Because the cost of the goods is matched to the sale that earned '
         'the revenue, in the same period.',
         'reread entries 4 and 5 in the journal panel of cycle A.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The same six transactions, as effects'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Orontes received 1,500 from shareholders and 800 from a '
                   'bank in January: 2,300 of cash. How much of that 2,300 is '
                   'revenue?',
                 a='None of it',
                 why='Money from owners and lenders is financing. It is not '
                     'income.'),
        ]),
        ('predict',
         'Before you turn to the grid: Orontes made a net income of 80 in '
         'January. Write what you expect the change in cash to be.',
         'Cash actually rose by 1,060. Net income and the change in cash are '
         'very different numbers, and that is the accrual basis at work.'),
        ('move', 'MODEL',
         'The same six transactions, with the five totals each one moves.'),
        ('fig', 'effect_strip'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which transactions move cash but create no net income?',
                 a='1, 2, 3 and 5 move cash; 1, 2 and 3 create no net income',
                 why='Rows 1 and 2 are financing; row 3 swaps one asset for '
                     'another.'),
            dict(t='SHORT',
                 q='Which single transaction creates net income but moves no '
                   'cash, and how much net income?',
                 a='Row 4 — net income of 120',
                 why='Revenue of 300 less cost of goods sold of 180. The '
                     'customer has not paid yet.'),
            dict(t='SHORT',
                 q='Row 6 moves two of the five columns. Which two, and in '
                   'which direction?',
                 a='Liabilities up 50 and equity down 50', why=''),
            dict(t='SHORT',
                 q='Add the equity column. What is the net change in equity '
                   'for January?',
                 a='1,530',
                 why='1,500 + 120 − 40 − 50 = 1,530. The totals '
                     'prove the equation: assets rose 2,380, liabilities 850 '
                     'and equity 1,530.'),
            dict(t='SHORT',
                 q='Add the net income column. What was January’s net '
                   'income?',
                 a='80',
                 why='Revenue 300, less cost of goods sold 180, less wages '
                     '40.'),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write why net income and the change in cash are not the same '
         'number.',
         [['Cash moves when money changes ', 14, '.'],
          ['Net income moves when revenue is ', 14, ' and expenses are ',
           16, ', whatever the cash does.']],
         ['hands', 'earned', 'incurred', 'accrual basis'],
         'Under the accrual basis, a company records revenue when it earns '
         'it, that is, when it delivers the goods or services. It records '
         'expenses when it incurs them. The timing of the cash does not '
         'decide the period.'),
        ('contrast',
         'The same company, the same month, two numbers',
         [('Net income for January',
           ['Revenue 300, cost of goods sold 180, wages 40.',
            'Which events does it count?', 'What is the figure?']),
          ('The change in cash for January',
           ['An operating outflow, an investing outflow, a financing inflow.',
            'Which events does it count?', 'What is the figure?'])],
         'Both describe January. Answer both rows for each, then write the '
         'one sentence that explains why two correct numbers differ so far.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='GRID',
                 q='Complete the grid. Two rows are done; write + , − or '
                   '0 in every empty cell, and give the amount where there is '
                   'one.',
                 h=['Transaction', 'Assets', 'Liabilities', 'Equity',
                    'Net income'],
                 rows=[['Borrowed cash on a note 800', '+800', '+800', '0',
                        '0'],
                       ['Paid wages in cash 40', '(40)', '0', '(40)', '(40)'],
                       ['Issued shares for cash 1,500', '', '', '', ''],
                       ['Bought a bottling line for cash 1,200', '', '', '',
                        ''],
                       ['Sold goods on credit 300, cost 180', '', '', '', ''],
                       ['Declared a dividend 50', '', '', '', '']],
                 w=[36, 16, 16, 16, 16],
                 a=['shares: assets +1,500, liabilities 0, equity +1,500, net '
                    'income 0',
                    'bottling line: assets 0, liabilities 0, equity 0, net '
                    'income 0',
                    'sale: assets +120, liabilities 0, equity +120, net '
                    'income +120',
                    'dividend: assets 0, liabilities +50, equity (50), net '
                    'income 0'],
                 whys=['Cash from owners is financing, never revenue.',
                       'One asset becomes another, so no total changes.',
                       'Receivable 300 less inventory 180.',
                       'A dividend is not an expense, and no cash has '
                       'moved.']),
        ]),
        ('check',
         'January’s net income was 80 and cash rose by 1,060. Name the '
         'basis of accounting that makes those two numbers differ.',
         'The accrual basis.',
         'reread the three notes under the effect figure in cycle B.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'Three mistakes the exam keeps testing'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='TF',
                 q='Buying equipment for cash is an expense of the month in '
                   'which it is bought.',
                 a='F',
                 why='One asset (cash) becomes another asset (equipment). The '
                     'cost becomes an expense later, through depreciation.'),
        ]),
        ('move', 'MODEL', 'The three the book names, with the right answer '
                          'beside each.'),
        ('panel', 'Three classic mistakes',
         [['The mistake', 'What is actually true'],
          ['Treating a dividend as an expense',
           'It reduces retained earnings, not net income.'],
          ['Treating cash from borrowing or from issuing shares as revenue',
           'It is financing.'],
          ['Treating equipment bought for cash as an expense today',
           'One asset becomes another. The cost becomes an expense later, '
           'through depreciation.']],
         ''),
        ('move', 'READ THE MODEL',
         'The panel above holds the answer to every line below.'),
        ('hunt',
         'A colleague has described January to the owner. Mark each line '
         'right, or write what is wrong with it.',
         ['"We took in 2,300 of revenue from the share issue and the bank '
          'loan."',
          '"The 1,200 bottling line is a January expense, so it reduced our '
          'profit."',
          '"The 50 dividend reduced our net income for January."',
          '"We recorded 300 of revenue even though the customer has not '
          'paid."',
          '"Wages of 40 reduced both cash and equity."'],
         ['wrong — cash from owners and lenders is financing, not '
          'revenue',
          'wrong — it is an asset; the cost becomes an expense later '
          'through depreciation',
          'wrong — a dividend reduces retained earnings, never net '
          'income',
          'right — revenue is recorded on delivery, not on payment',
          'right — an expense paid in cash reduces both']),
        ('check',
         'Name the three mistakes, in one clause each.',
         'A dividend is not an expense; cash from financing is not revenue; '
         'equipment bought for cash is not an expense today.',
         'reread the three-mistake panel and redo the error hunt in cycle C.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'effect_strip',
         'Rebuild the effect grid for the six January transactions. Fill '
         'every cell with + , − or 0, and give the amounts.',
         'Row 1 assets +1,500, equity +1,500, cash +1,500. Row 2 assets +800, '
         'liabilities +800, cash +800. Row 3 cash (1,200) only. Row 4 assets '
         '+120, equity +120, net income +120. Row 5 all of assets, equity, '
         'net income and cash (40). Row 6 liabilities +50, equity (50).'),
        ('teach', 'the owner of the company, who is not an accountant',
         'In three or four sentences, explain how the company can have made a '
         'profit of only 80 while its cash rose by 1,060.',
         ['financing', 'revenue', 'accrual basis', 'net income'],
         'Most of the cash came in from the owners and the bank, and money '
         'from financing is not revenue, so it never reaches net income. The '
         'sale that did earn revenue brought in no cash at all, because the '
         'customer has not paid yet. Under the accrual basis revenue is '
         'recorded when the goods are delivered rather than when the cash '
         'arrives, so net income of 80 and a cash rise of 1,060 are both '
         'correct at the same time.'),
    ],
)
