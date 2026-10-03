# -*- coding: utf-8 -*-
"""Handout 1.2 — The elements, and the equation that ties three of them."""

ELEMENTS = [
    ['Element', 'What the book says it is', 'An example from Orontes'],
    ['Asset', 'a present right of an entity to an economic benefit',
     'cash, accounts receivable, inventory, equipment'],
    ['Liability',
     'a present obligation of an entity to transfer an economic benefit',
     'accounts payable, notes payable, wages payable'],
    ['Equity',
     'the residual interest in the assets after the liabilities are deducted',
     'the owners’ claim on what is left'],
    ['Revenue', 'from the company’s central, ongoing operations',
     'selling olive oil'],
    ['Expense', 'from the company’s central, ongoing operations',
     'paying the plant workers'],
    ['Gain', 'from peripheral or incidental events',
     'selling an old delivery truck for more than its carrying amount'],
    ['Loss', 'from peripheral or incidental events',
     'the same sale at less than the carrying amount'],
    ['Investments by owners', 'increase equity', 'buying new shares'],
    ['Distributions to owners', 'decrease equity', 'a dividend'],
    ['Comprehensive income',
     'the total change in equity from sources other than owners',
     'met in full in Chapters 3 and 15'],
]

HANDOUT = dict(
    id='1.2',
    n=2,
    pages=7,
    title='The elements, and the equation',
    sub='Ten elements · assets = liabilities + equity · what a '
        'transaction does to both sides',
    covers=['sec:1.2', 'fig:F01-03', 'sc:SC2-1', 'sc:SC2-2', 'p:P04',
            'p:P06', 'p:P07', 'term:asset', 'term:liability', 'term:equity',
            'term:revenue', 'term:expense', 'term:gain', 'term:loss',
            'term:accounting equation', 'term:net income'],
    skills=[('elements', 3), ('equation', 3), ('effects', 2)],
    flow=[
        ('speed', [
            'The three primary users are',
            'The two fundamental qualities are',
            'Which verb means "explain it in the notes"?',
            'Materiality belongs under which fundamental quality?',
            'Is a manager a primary user?',
            'Which quality lets you compare two companies?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Ten elements, and the line that divides them'),
        ('move', 'ORIENT', 'From what you already know. Two minutes.'),
        ('items', [
            dict(t='SHORT',
                 q='Orontes sells olive oil, which is its ordinary business. '
                   'It also sells an old delivery truck, which is not. Both '
                   'bring money in. Guess: does the book give those two the '
                   'same name?',
                 a='No — one is revenue, the other a gain',
                 why='Revenues come from central, ongoing operations. Gains '
                     'come from peripheral or incidental events.'),
        ]),
        ('move', 'MODEL',
         'Ten elements. One column is the book’s own definition; read '
         'the definitions, not the names.'),
        ('panel', 'The ten elements of the FASB conceptual framework',
         ELEMENTS,
         'Three of these describe the balance sheet at one date. The rest '
         'describe changes during a period.'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which three elements describe the balance sheet at one '
                   'date?',
                 a='Asset, liability, equity',
                 why='The other seven describe changes during a period.'),
            dict(t='SHORT',
                 q='Two elements share the words "central, ongoing '
                   'operations". Name them.',
                 a='Revenue and expense', why=''),
            dict(t='SHORT',
                 q='Two elements share the words "peripheral or incidental". '
                   'Name them.',
                 a='Gain and loss', why=''),
            dict(t='SHORT', lines=2,
                 q='The definition of equity does not describe a thing the '
                   'company owns. Copy the four words that say what it is '
                   'instead.',
                 a='the residual interest in the assets',
                 why='Equity is what is left after the liabilities are '
                     'deducted. It is a claim, not a resource.'),
            dict(t='TF',
                 q='A distribution to owners is one of the ten elements.',
                 a='T',
                 why='Investments by owners and distributions to owners are '
                     'both elements. A dividend is a distribution.'),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the test that decides whether money coming in is revenue or a '
         'gain.',
         [['If the money comes from the company’s ', 26,
           ' operations, it is ', 16, '.'],
          ['If it comes from a ', 22, ' or incidental event, it is a ', 14,
           '.']],
         ['central', 'ongoing', 'revenue', 'peripheral'],
         'Revenues and expenses come from the company’s central, ongoing '
         'operations. Gains and losses come from peripheral or incidental '
         'events.'),
        ('contrast',
         'Two sales by the same company, on the same day',
         [('Orontes sells olive oil to a supermarket',
           ['This is what Orontes exists to do.',
            'The amount received is 300.',
            'Revenue, or gain?']),
          ('Orontes sells its old delivery truck',
           ['Orontes is not in the truck business.',
            'The truck sold for more than its carrying amount.',
            'Revenue, or gain?'])],
         'Name each one, and write the single word in the definitions that '
         'decides between them.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which item is an expense?',
                 o=['A cash dividend paid to shareholders',
                    'Wages paid to plant workers',
                    'Repayment of a bank loan',
                    'Purchase of a new bottling line'],
                 a='B',
                 why='Wages are a cost of the company’s central '
                     'operations. A dividend is a distribution to owners; '
                     'repaying principal reduces a liability and an asset; a '
                     'bottling line is an asset whose cost becomes an expense '
                     'later, through depreciation.'),
        ]),
        ('check',
         'Which two elements come from central, ongoing operations, and which '
         'two come from peripheral events?',
         'Revenues and expenses are central and ongoing; gains and losses are '
         'peripheral or incidental.',
         'redo the READ THE MODEL questions of cycle A with the panel in '
         'front of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The equation that never tips'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='A company has assets of 500 and liabilities of 320. What '
                   'is left over for the owners?',
                 a='180', why='Equity = assets − liabilities = 500 '
                              '− 320 = 180.'),
        ]),
        ('move', 'MODEL',
         'One figure. The beam is not decoration: the two pans are the two '
         'sides of the equation, and the stack on the right is the point.'),
        ('fig', 'beam'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='How many blocks sit on the left pan, and how many on the '
                   'right?',
                 a='One on the left, two on the right', why=''),
            dict(t='FILL',
                 parts=['The equation under the beam reads: ', 16, ' = ', 16,
                        ' + ', 14, '.'],
                 a=['Assets', 'Liabilities', 'Equity'], whys=['', '', '']),
            dict(t='SHORT', lines=2,
                 q='The figure gives a reason why the two sides must stay '
                   'equal. Write it in your own words.',
                 a='Every asset is financed either by a creditor or by an '
                   'owner.',
                 why='Creditors (liabilities) or owners (equity) finance '
                     'every asset, so the two sides must stay equal.'),
            dict(t='SHORT',
                 q='Which word in the figure says that equity is what is left '
                   'over rather than a thing the company holds?',
                 a='Residual', why=''),
        ]),
        ('pair', 'Answer the next item alone, then compare.',
         'rearrange the equation on paper. Whoever can write the rearranged '
         'form is right.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the equation three ways: solved for each of its three parts.',
         [['Assets = ', 20, ' + ', 16, '          Liabilities = ', 16, ' ',
           '− ', 14, '          Equity = ', 16, ' − ', 18, ''],
          ['The equation holds after every transaction because every '
           'transaction has at least ', 14, ' effects.']],
         ['assets', 'liabilities', 'equity', 'two'],
         'Assets = Liabilities + Equity. The equation always holds, because '
         'creditors (liabilities) or owners (equity) finance every asset.'),
        ('contrast',
         'Two companies, one difference',
         [('Levant Foods', ['Assets 500', 'Liabilities 320', 'Equity ?']),
          ('Barada Trading', ['Assets 500', 'Liabilities 100', 'Equity ?']),
          ('Cedar Imports', ['Assets 500', 'Liabilities 500', 'Equity ?'])],
         'Fill in all three. The assets are identical, so write the one '
         'sentence that explains why the owners’ claim is not.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A company has total assets of 500 and total liabilities '
                   'of 320. What is its equity?',
                 o=['180', '320', '500', '820'],
                 a='A',
                 why='Equity = assets − liabilities = 500 − 320 = '
                     '180. Option D adds the liabilities instead of '
                     'deducting them.'),
            dict(t='MCQ',
                 q='A company has assets of 900 and liabilities of 350. It '
                   'then borrows 100 in cash and declares and pays a cash '
                   'dividend of 40. What is total equity after these '
                   'transactions?',
                 o=['450', '510', '550', '610'],
                 a='B',
                 why='Equity started at 900 − 350 = 550. Borrowing '
                     'changes assets and liabilities equally and leaves '
                     'equity alone. The dividend reduces equity by 40, so '
                     'equity is 510.'),
        ]),
        ('check',
         'A company’s assets rise by 800 and its liabilities rise by '
         '800. By how much does equity change?',
         'By nothing — equity is unchanged.',
         'redo the contrasting cases in cycle B.'),
        # ---------------------------------------------------------- CYCLE C
        ('cycle', 'C', 'What a transaction does to the equation'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Orontes pays 1,200 cash for a bottling line. Cash falls. '
                   'Does anything else on the left pan rise?',
                 a='Yes — equipment rises by the same 1,200',
                 why='One asset becomes another asset. Total assets do not '
                     'change.'),
        ]),
        ('move', 'MODEL',
         'Four transactions, worked. The last column is the one to watch.'),
        ('trace', 'Four transactions and what each does to the equation',
         [('Issue shares for cash 1,500',
           'assets +1,500 and equity +1,500 — both sides rise'),
          ('Borrow cash on a note 800',
           'assets +800 and liabilities +800 — both sides rise'),
          ('Buy a bottling line for cash 1,200',
           'assets +1,200 and −1,200 — one asset becomes another, '
           'nothing else moves'),
          ('Pay wages in cash 40',
           'assets −40 and equity −40 — an expense reduces the '
           'owners’ claim')]),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which of the four transactions leaves total assets '
                   'unchanged?',
                 a='Buying the bottling line for cash',
                 why='One asset (cash) becomes another asset (equipment).'),
            dict(t='SHORT',
                 q='Which of the four changes equity without any cash leaving '
                   'the owners’ side? Give the transaction and say '
                   'whether equity rose or fell.',
                 a='Paying wages — equity fell',
                 why='An expense reduces equity, and the cash goes to the '
                     'workers, not to the owners.'),
            dict(t='TF',
                 q='Borrowing 800 in cash increases the company’s '
                   'equity.',
                 a='F',
                 why='Cash from borrowing is financing. Assets and '
                     'liabilities both rise by 800 and equity is '
                     'untouched.'),
        ]),
        ('predict',
         'Before you answer the next two items, write what you expect a cash '
         'dividend to do to assets and to equity.',
         'A dividend declared but not yet paid moves liabilities and equity, '
         'and leaves assets alone until the cash goes out.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A company issues common stock for cash. What is the '
                   'effect on the accounting equation?',
                 o=['Assets increase and equity increases.',
                    'Assets increase and revenue increases.',
                    'Assets increase and liabilities increase.',
                    'There is no effect on the equation.'],
                 a='A',
                 why='Cash from issuing shares is an investment by owners, '
                     'not revenue and not borrowing.'),
            dict(t='MCQ',
                 q='Which transaction changes total assets but does NOT '
                   'change total equity?',
                 o=['Borrowing cash from a bank', 'Paying wages in cash',
                    'Selling goods on credit at a profit',
                    'Buying equipment for cash'],
                 a='A',
                 why='Borrowing raises assets and liabilities together. '
                     'Paying wages and selling at a profit both move equity; '
                     'buying equipment for cash leaves total assets '
                     'unchanged.'),
        ]),
        ('check',
         'Name one transaction that changes total assets without changing '
         'equity, and one that changes equity without changing total '
         'liabilities.',
         'Borrowing cash changes assets and liabilities only; paying wages in '
         'cash changes assets and equity only.',
         'redo the worked trace at the start of cycle C and read the right '
         'column aloud.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'beam',
         'Rebuild the beam. Label both pans, write the equation underneath, '
         'and add the one sentence that says why the two sides must stay '
         'equal.',
         'Left pan: assets. Right pan: liabilities above equity. Assets = '
         'Liabilities + Equity, because creditors or owners finance every '
         'asset.'),
        ('teach', 'a classmate who has just learned the word "equity"',
         'In three or four sentences, explain why equity is called a residual '
         'and why the equation can never be out of balance.',
         ['residual', 'assets', 'liabilities', 'finance'],
         'Equity is the residual interest in the assets after the liabilities '
         'are deducted, so it is measured as what is left rather than counted '
         'directly. The equation cannot be out of balance because creditors '
         'or owners finance every asset, and every transaction changes at '
         'least two of the three parts by matching amounts.'),
    ],
)
