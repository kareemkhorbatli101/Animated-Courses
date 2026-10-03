# -*- coding: utf-8 -*-
"""Handout 1.12 — The whole chapter, interleaved."""

HANDOUT = dict(
    id='1.12',
    n=12,
    pages=4,
    title='The whole chapter',
    sub='The map · mixed practice with the topics shuffled · one '
        'written explanation',
    covers=['fig:F01-01', 'fig:F01-11', 'sec:summary', 'p:P07', 'p:P13',
            'term:comprehensive income'],
    skills=[('map', 3), ('mixed', 0)],
    derived={'120': 'revenue 300 less cost of goods sold 180, the net '
                    'effect of that one sale on equity and on net income'},
    flow=[
        ('speed', [
            'The three primary users are',
            'Equity = assets −',
            'Debit increases which three account types?',
            'Which basis does U.S. GAAP require?',
            'Which body writes U.S. GAAP?',
            'Which statement reports at a date?',
            'A dividend reduces which equity account?',
            'Cash received in advance creates a',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'How the seven topics depend on each other'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Everything in this chapter ends at one place. Name it.',
                 a='The four statements', why=''),
        ]),
        ('move', 'MODEL',
         'The chapter as a map. The arrows are dependencies: what you have to '
         'understand before what.'),
        ('fig', 'chapter_map'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which two topics feed into the accrual basis and '
                   'matching?',
                 a='Users and what makes information useful, and elements and '
                   'the accounting equation', why=''),
            dict(t='SHORT',
                 q='Which topic feeds into "who writes the rules"?',
                 a='Double entry: debits and credits', why=''),
            dict(t='SHORT',
                 q='Which box does the trial balance point into?',
                 a='The four statements', why=''),
            dict(t='SHORT', lines=2,
                 q='Pick any one arrow on the map and write, in one sentence, '
                   'why the topic at its tail has to come first.',
                 a='Any defensible answer, for example: you cannot classify a '
                   'transaction into assets and equity until you know what '
                   'the elements are',
                 why='The map records dependencies, not an order of '
                     'importance.'),
        ]),
        ('trace', 'The chapter in one worked transaction',
         [('Orontes sells olive oil on credit for 300, costing 180',
           'a revenue and an expense, both from central ongoing operations'),
          ('Dr Accounts receivable 300; Cr Sales revenue 300',
           'equal debits and credits, so the equation stays in balance'),
          ('Dr Cost of goods sold 180; Cr Inventory 180',
           'the cost is matched to the revenue it produced, by cause and '
           'effect'),
          ('Recorded in the month of delivery, not of payment',
           'the accrual basis decides the period, not the cash'),
          ('Net income rises by 120, and so does equity',
           'net income flows into retained earnings, which the balance sheet '
           'then carries'),
          ('Cash does not move at all',
           'which is why the statement of cash flows is a separate statement')
          ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the chapter in two sentences: what the statements are built '
         'from, and what decides the period an item falls in.',
         [['The statements are built from ', 16, ', which the ', 22,
           ' links as assets = liabilities + equity.'],
          ['The ', 16, ' basis puts revenue in the period it is ', 12,
           ' and an expense in the period it is ', 14, '.']],
         ['elements', 'accounting equation', 'accrual', 'earned', 'incurred'],
         'The statements are built from elements that the accounting equation '
         'links: assets equal liabilities plus equity. Every transaction is '
         'recorded with equal debits and credits. The accrual basis records '
         'revenues when they are earned and expenses when they are incurred, '
         'and it matches expenses to the revenues they help to produce.'),
        ('contrast',
         'Two topics, and what each one settles',
         [('Elements and the accounting equation',
           ['What does it settle?', 'Which statement does it describe?',
            'Does it say anything about WHEN an item is recorded?']),
          ('The accrual basis and matching',
           ['What does it settle?', 'Which statement does it describe?',
            'Does it say anything about WHEN an item is recorded?'])],
         'Answer all three rows for each. Then write the one sentence that '
         'says why a company needs both and not one or the other.'),
        ('check',
         'Name the two topics that have to be understood before the accrual '
         'basis makes sense.',
         'Users and the qualities of useful information, and the elements '
         'with the accounting equation.',
         'redo the READ THE MODEL questions of cycle A with the map in front '
         'of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B',
         'Mixed practice — the topics deliberately shuffled',
         'practice'),
        ('move', 'ORIENT',
         'From here the questions do not come in topic order. Decide what '
         'each one is about before you answer it.'),
        ('items', [
            dict(t='SHORT',
                 q='Write, in two or three words each, the topic that each of '
                   'the next eight questions will be about once you have read '
                   'it. Do this after you answer them, as a check.',
                 a='Answers will vary; the point is that you can name the '
                   'topic from the stem', lines=2, why=''),
        ]),
        ('panel', 'The six topics these questions are drawn from',
         [['Topic', 'The question it answers'],
          ['Users and the qualities',
           'who the statements are for, and what makes a number useful'],
          ['Elements and the equation',
           'what the statements are built from'],
          ['Double entry', 'which side of an account increases it'],
          ['The accrual basis and matching',
           'which period an item falls in'],
          ['Who writes the rules',
           'which body produces what, and where it is kept'],
          ['The four statements',
           'what each one reports, and how they join up']],
         'Name the topic of each question below before you answer it.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='A company has assets of 900 and liabilities of 350. It '
                   'then borrows 100 in cash and declares and pays a cash '
                   'dividend of 40. What is total equity after these '
                   'transactions?',
                 o=['450', '510', '550', '610'],
                 a='B',
                 why='Equity began at 550. Borrowing leaves equity alone; the '
                     'dividend of 40 reduces it to 510.'),
            dict(t='MCQ',
                 q='Which statement explains why retained earnings changed '
                   'during the year?',
                 o=['The statement of changes in equity', 'The balance sheet',
                    'The statement of cash flows', 'The income statement'],
                 a='A',
                 why='The balance sheet gives only the closing figure.'),
            dict(t='TF',
                 q='Comprehensive income is the total change in equity from '
                   'sources other than owners.',
                 a='T',
                 why='That is the book’s definition of the element.'),
            dict(t='MCQ',
                 q='Orontes receives 800 in cash from a bank on a five-year '
                   'note. Immediately after, which pair of totals has risen?',
                 o=['assets and equity', 'assets and liabilities',
                    'assets and revenue', 'liabilities and equity'],
                 a='B',
                 why='Cash from borrowing is financing, not revenue, and it '
                     'does not touch the owners’ claim.'),
            dict(t='MCQ',
                 q='Which of the following is NOT a fundamental quality of '
                   'useful information?',
                 o=['relevance', 'faithful representation', 'comparability',
                    'materiality'],
                 a='C',
                 why='Comparability is an enhancing quality. Materiality is '
                     'part of relevance, which is fundamental.'),
            dict(t='MCQ',
                 q='A company pays 24 for twelve months of rent in advance. '
                   'What is the NET EFFECT on total assets immediately after '
                   'the payment?',
                 o=['an increase of 24', 'a decrease of 24', 'no change',
                    'it depends on when the rent is used'],
                 a='C',
                 why='Cash of 24 becomes prepaid rent of 24: one asset '
                     'becomes another, so no total moves.'),
            dict(t='MCQ',
                 q='Which account would you expect to find with a credit '
                   'balance in a trial balance?',
                 o=['Prepaid rent', 'Dividends declared', 'Inventory',
                    'Allowance for credit losses'],
                 a='D',
                 why='It is a contra-asset account, so it takes the opposite '
                     'side to the asset it reduces. The other three are all '
                     'debits.'),
            dict(t='MCQ',
                 q='Which body’s standards does the CMA exam test, and '
                   'which body’s does it ask you to compare them with?',
                 o=['FASB, and the IASB', 'SEC, and the PCAOB',
                    'IASB, and the FASB', 'PCAOB, and the SEC'],
                 a='A',
                 why='The exam tests U.S. GAAP, which the FASB writes, and '
                     'asks about the main differences from IFRS, which the '
                     'IASB writes.'),
        ]),
        ('pair',
         'Compare all eight answers with your partner before you read any '
         'key.',
         'for each one you disagree on, say which topic the question belongs '
         'to first. Most disagreements turn out to be about the topic rather '
         'than the answer.'),
        ('check',
         'Of the eight questions you have just answered, which one did you '
         'find hardest to place in a topic? Name the topic it belonged to.',
         'Answers will vary; the topic names are users and qualities, '
         'elements and the equation, double entry, the accrual basis, the '
         'rule makers, and the four statements.',
         'go back to the MODEL move of cycle A and find the box on the map '
         'that the question belonged in.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'chapter_map',
         'Rebuild the chapter map from memory. Draw all seven boxes and the '
         'arrows between them.',
         'Users and qualities, elements and the equation, and double entry at '
         'the top; the accrual basis and matching, and who writes the rules, '
         'in the middle; the trial balance and the four statements at the '
         'foot, with everything ending at the four statements.'),
        ('teach', 'a student starting this chapter tomorrow',
         'In five or six sentences, write the whole chapter: who the '
         'statements are for, what they are built from, how a transaction is '
         'recorded, what decides the period, who writes the rules, and how '
         'the four statements join up.',
         ['primary users', 'elements', 'accounting equation', 'debits',
          'accrual basis', 'net income'],
         'General-purpose financial statements serve investors, lenders and '
         'other creditors, and useful information is relevant and faithfully '
         'represented. The statements are built from elements that the '
         'accounting equation links: assets equal liabilities plus equity. '
         'Every transaction is recorded with equal debits and credits. The '
         'accrual basis records revenues when they are earned and expenses '
         'when they are incurred, and matches expenses to the revenues they '
         'help to produce. The FASB writes U.S. GAAP in the Codification and '
         'the IASB writes IFRS; the exam uses U.S. GAAP and tests the main '
         'differences. The balance sheet shows one date while the other three '
         'statements cover a period, and net income and cash are what link '
         'them.'),
    ],
)
