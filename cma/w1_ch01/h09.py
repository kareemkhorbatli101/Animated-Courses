# -*- coding: utf-8 -*-
"""Handout 1.9 — The four statements, and the two links that join them."""

FOUR = [
    ['Statement', 'The question it answers', 'Time'],
    ['Balance sheet',
     'What does the company have and owe, and what is the owners’ claim?',
     'at a date'],
    ['Income statement', 'How did the company perform?', 'for a period'],
    ['Statement of changes in equity',
     'Why did each equity account change?', 'for a period'],
    ['Statement of cash flows',
     'Where did cash come from, and where did it go?', 'for a period'],
]

HANDOUT = dict(
    id='1.9',
    n=9,
    pages=5,
    title='The four statements, and how they link',
    sub='One at a date, three for a period · net income into retained '
        'earnings · the change in cash',
    covers=['sec:1.6', 'fig:F01-09', 'box:TERM BRIDGE:1.6', 'sc:SC6-1',
            'p:P13', 'p:P14', 'term:balance sheet',
            'term:statement of financial position', 'term:income statement',
            'term:statement of changes in equity',
            'term:statement of cash flows'],
    skills=[('statements', 3), ('articulation', 3)],
    flow=[
        ('speed', [
            'Which body writes U.S. GAAP?',
            'What does an ASU amend?',
            'Which body sets auditing standards?',
            'Revenue is recorded when the goods are',
            'Matching matches expenses to',
            'Share premium is the IFRS name for',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Four statements, four questions'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='"What the company owns today" and "what the company '
                   'earned over the year" are different kinds of fact. Which '
                   'of the two needs a single date rather than a span of '
                   'time?',
                 a='What the company owns today',
                 why='The balance sheet shows position at one date. The other '
                     'statements cover a period.'),
        ]),
        ('move', 'MODEL',
         'Four statements. The right-hand column is the one the exam tests '
         'hardest.'),
        ('panel', 'Each statement answers a different question', FOUR, ''),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='How many of the four cover a period, and how many report '
                   'at a single date?',
                 a='Three cover a period; one reports at a date', why=''),
            dict(t='MATCH',
                 q='Write the letter of the statement that answers each '
                   'question.',
                 left=['Where did cash come from, and where did it go?',
                       'How did the company perform?',
                       'Why did each equity account change?',
                       'What does the company have and owe?'],
                 right=['Balance sheet', 'Income statement',
                        'Statement of changes in equity',
                        'Statement of cash flows'],
                 a=['D', 'B', 'C', 'A'], whys=['', '', '', '']),
            dict(t='SHORT',
                 q='Which statement would you read to find out why retained '
                   'earnings are not what they were a year ago?',
                 a='The statement of changes in equity', why=''),
        ]),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the test that sorts a statement into "at a date" or "for a '
         'period".',
         [['If the statement reports what the company ', 10, ' and ', 10,
           ', it is at a ', 10, '.'],
          ['If it reports what ', 16, ' over time, it is for a ', 12, '.']],
         ['has', 'owes', 'date', 'changed', 'period'],
         'The balance sheet shows position at one date. The other statements '
         'cover a period.'),
        ('contrast',
         'Two statements of the same company, same year',
         [('Balance sheet',
           ['Cash 1,050.', 'Is that a total for the period, or a position?',
            'At a date, or for a period?']),
          ('Statement of cash flows',
           ['Net change in cash 1,060.',
            'Is that a total for the period, or a position?',
            'At a date, or for a period?'])],
         'Both are about cash. Answer both questions for each, and write the '
         'one word that separates a position from a flow.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Which statement reports amounts at a single date?',
                 o=['The income statement', 'The balance sheet',
                    'The statement of changes in equity',
                    'The statement of cash flows'],
                 a='B',
                 why='The balance sheet shows position at one date. The other '
                     'three all cover a period.'),
            dict(t='MCQ',
                 q='Which statement explains why retained earnings changed '
                   'during the year?',
                 o=['The statement of changes in equity', 'The balance sheet',
                    'The statement of cash flows', 'The income statement'],
                 a='A',
                 why='That statement exists to say why each equity account '
                     'changed. The balance sheet gives only the closing '
                     'figure.'),
        ]),
        ('check',
         'Which single statement reports at a date, and what do the other '
         'three have in common?',
         'The balance sheet reports at a date; the other three cover a '
         'period.',
         'redo the matching item in cycle A with the panel open.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'The two links'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Net income is the bottom line of one statement. Guess '
                   'which equity account it ends up inside.',
                 a='Retained earnings', why=''),
        ]),
        ('move', 'MODEL',
         'The four statements again, this time with the two links drawn.'),
        ('fig', 'articulation'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='The first link carries one figure from the income '
                   'statement. Name the figure and say where it lands.',
                 a='Net income, which lands in retained earnings in the '
                   'statement of changes in equity, and from there on the '
                   'balance sheet', why=''),
            dict(t='SHORT',
                 q='The second link carries a figure from the statement of '
                   'cash flows. Name it and say what it explains.',
                 a='The net change in cash, which explains the cash balance '
                   'on the balance sheet', why=''),
            dict(t='SHORT',
                 q='Which of the four boxes in the figure is drawn as the one '
                   'both links arrive at?',
                 a='The balance sheet', why=''),
            dict(t='SHORT',
                 q='The band under the figure gives two numbers for the same '
                   'month. Write both, and say what the difference between '
                   'them is evidence of.',
                 a='Net income 80 and a cash rise of 1,060 — evidence of '
                   'the accrual basis', why=''),
        ]),
        ('predict',
         'Before the next move: January’s net income was 80 and the '
         'dividend declared was 50. Write what you expect the change in '
         'retained earnings to be.',
         'Retained earnings rose by 30: net income of 80 less the dividend of '
         '50.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the two links as two sentences.',
         [[22, ' flows into ', 22, ' in the statement of changes in equity.'],
          ['The net change in ', 10, ' explains the ', 10,
           ' balance on the balance sheet.']],
         ['net income', 'retained earnings', 'cash'],
         'Net income flows into retained earnings, and the net change in cash '
         'explains the cash balance on the balance sheet.'),
        ('contrast',
         'Two figures that both come out of the same January',
         [('Net income 80',
           ['Which statement reports it?',
            'Which equity account does it end up in?',
            'Does it say where the cash went?']),
          ('Net change in cash 1,060',
           ['Which statement reports it?',
            'Which balance sheet line does it explain?',
            'Does it say whether the company traded profitably?'])],
         'Answer all three rows for each, then write the one sentence that '
         'says why a reader needs both figures and not just one.'),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Net income for the period flows directly into:',
                 o=['the cash balance on the balance sheet.',
                    'retained earnings in the statement of changes in equity.',
                    'total liabilities.', 'common stock.'],
                 a='B',
                 why='Net income is accumulated in retained earnings. It does '
                     'not go into cash, into liabilities, or into common '
                     'stock, which holds only par value.'),
            dict(t='GRID',
                 q='Complete the reconciliation of January for Orontes, using '
                   'the figures given.',
                 h=['Line', 'Amount'],
                 rows=[['Sales revenue', '300'],
                       ['less cost of goods sold', '180'],
                       ['less wages expense', '40'],
                       ['Net income', ''],
                       ['less dividend declared', '50'],
                       ['Increase in retained earnings', '']],
                 w=[62, 38],
                 a=['net income 80', 'increase in retained earnings 30'],
                 whys=['300 − 180 − 40 = 80.',
                       'Net income of 80 less the dividend of 50 leaves 30.']),
            dict(t='GRID',
                 q='And the other link. Complete the change in cash for '
                   'January.',
                 h=['Line', 'Amount'],
                 rows=[['Operating outflow', '(40)'],
                       ['Investing outflow', '(1,200)'],
                       ['Financing inflow', '2,300'],
                       ['Increase in cash', '']],
                 w=[62, 38],
                 a=['increase in cash 1,060'],
                 whys=['2,300 − 1,200 − 40 = 1,060, which is the '
                       'figure the balance sheet’s cash must agree '
                       'with.']),
        ]),
        ('check',
         'Name the two links, and say which statement both of them arrive '
         'at.',
         'Net income into retained earnings, and the net change in cash into '
         'the cash balance. Both arrive at the balance sheet.',
         'redo the READ THE MODEL questions of cycle B with the figure in '
         'front of you.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'articulation',
         'Rebuild the figure. Draw all four statements, mark which one is at '
         'a date, and draw both links with the figure each one carries.',
         'Income statement, statement of changes in equity, statement of cash '
         'flows (all for a period) and the balance sheet (at a date). Net '
         'income runs from the income statement through retained earnings to '
         'the balance sheet; the net change in cash runs from the statement '
         'of cash flows to the cash balance.'),
        ('teach', 'an investor who has only ever looked at profit',
         'In three or four sentences, explain why reading the income '
         'statement alone is not enough, using Orontes’ January as the '
         'example.',
         ['net income', 'cash', 'balance sheet', 'period'],
         'The income statement gives net income for a period, which for '
         'Orontes in January was 80, but it says nothing about where the '
         'money went. The statement of cash flows shows that cash actually '
         'rose by 1,060, almost all of it from owners and lenders rather than '
         'from trading. The balance sheet then shows the position at the date '
         'the period ended, and both of the other figures have to agree with '
         'it.'),
    ],
)
