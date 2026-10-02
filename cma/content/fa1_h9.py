# -*- coding: utf-8 -*-
"""Volume 1, Handout 9 — What Each Statement Cannot Tell You.

Covers A.1(d): the limitations of each financial statement.
"""
from fadata import N, Y, PY
from data import money, num

BS, IS, SCE, SCF = '6D3F7E', '1F7A6A', 'C9762E', '2B6CB0'
SLATE, RUST = '44506B', 'B2531F'

_LIMH = ['Statement', 'What it does well', 'What it cannot tell you']
_LIMW = [22, 37, 41]


HANDOUT = dict(
    n=9,
    title='What Each Statement Cannot Tell You',
    subtitle='Eight handouts built these statements. This one is about reading them '
             'honestly, which means knowing where each of them stops.',
    register='R2 throughout, closing at R3',

    lang=dict(
        register='R2 textbook English, rising to R3 for the final passage. The '
                 'vocabulary here is evaluative: it describes limits and doubts.',
        collocations=['carry an asset at historical cost',
                      'rely on an estimate', 'omit an item from the statements',
                      'disclose in the notes', 'distort a comparison',
                      'window-dress a balance sheet'],
        pairs=['recognised / disclosed', 'cost / value',
               'omitted / immaterial', 'measured / estimated'],
        nots=['A figure in the statements is not a fact about value. It is the '
              'result of applying a measurement rule.',
              'Not everything valuable is an asset. Most of what makes a company '
              'worth buying never appears on its balance sheet.'],
    ),

    objectives=[
        'Name three limitations that apply to the balance sheet and give an '
        'example of each.',
        'Say why net income is more open to judgement than operating cash flow.',
        'Explain why a company’s most valuable resources may not appear as '
        'assets.',
        'Recognise window dressing from a pattern of year-end movements.',
        'State what the notes add, and why recognition and disclosure are not the '
        'same thing.',
    ],

    terms=[
        ('historical cost',
         'Measuring an asset at what was paid for it, rather than what it is now '
         'worth.', 'التكلفة التاريخية',
         'The default measurement basis. It is reliable and it is often badly out '
         'of date, and both halves of that matter.'),
        ('internally generated intangible',
         'A brand, a reputation or a trained workforce the company built rather '
         'than bought.', 'أصل غير ملموس مولد داخلياً',
         'Almost never recognised, because the cost of building it cannot be '
         'separated from the cost of running the business.'),
        ('materiality',
         'The threshold above which an omission or error would change a '
         'user’s decision.', 'الأهمية النسبية',
         'It is judged by the effect on the reader, not by the size of the number '
         'on its own.'),
        ('window dressing',
         'Arranging transactions near the year end to make the statements look '
         'better at that date.', 'تجميل القوائم المالية',
         'Mostly legal, and mostly visible: the balance sheet improves at one date '
         'while the cash flow statement shows nothing has changed.'),
        ('conservatism',
         'A bias towards caution when an estimate is uncertain.', 'التحفظ',
         'It makes statements asymmetric: bad news tends to be recognised earlier '
         'than good news.'),
    ],

    blocks=[
        ('scene', 'Eight handouts of building, one of doubting', [
            'You have now built all four of Northwind’s statements and proved '
            'them against one another. Total assets are %s, net income is %s, and '
            'operating cash flow is %s.'
            % (money(N.total_assets), money(N.net_income), money(N.cfo)),
            'None of those figures is a fact about Northwind in the way that its '
            'cash balance is a fact. Each is the result of applying a measurement '
            'rule, and a different but equally acceptable rule would have given a '
            'different number.',
            'This handout is about where each statement stops. It is not a '
            'criticism of the statements. A reader who knows the limits reads them '
            'better, and the exam tests exactly that reader.',
        ]),
        ('fig', 'buckets', 'Three reasons every figure here is softer than it looks',
         [('MEASUREMENT', BS,
           ['Assets at what was paid',
            'not at what they are worth',
            'Some items at fair value',
            'The mixture is not comparable', '']),
          ('JUDGEMENT', IS,
           ['How long equipment lasts',
            'How much will be collected',
            'When revenue is earned',
            'Each is an honest estimate', '']),
          ('OMISSION', SCF,
           ['Brand built, not bought',
            'A trained workforce',
            'A reputation for service',
            'None of them is an asset', ''])],
         'Write one more example of your own in each column. Every one you can '
         'name is a question you will not get wrong.'),

        ('part', 'Part 1 · The balance sheet', 'cost, mixture and omission'),

        ('task', 'Exercise 9A',
         'Name three limitations of the balance sheet and give an example of each.',
         'Read and complete. Write one word in each space.',
         ['Handout 2, for what the balance sheet reports.'],
         ['Each paragraph is one limitation. The blank names it or names its '
          'consequence.',
          'Blank 1 is the measurement basis most assets use.',
          'The last blank is the kind of resource that is built rather than '
          'bought, and therefore never recognised.']),
        ('fill', 'R2',
         ['Most of what the balance sheet reports is measured at {historical} cost: '
          'what was paid, less what has been written off since. Northwind’s '
          'warehouse sits at a figure fixed years ago, and no reader can tell from '
          'the statement what it would fetch today.',
          'The second limitation follows from the first. A few items — the '
          'debt securities, for one — are carried at current value instead, '
          'so the total of %s is a {mixture} of two measurement bases added '
          'together. The total is arithmetically correct and economically '
          'meaningless.' % money(N.total_assets),
          'The third is what is not there at all. Northwind’s relationships '
          'with its suppliers, the knowledge of its warehouse staff and its '
          'reputation for next-day delivery are real resources, and none of them '
          'is an {asset} on this statement.',
          'The rule behind that omission is consistent rather than arbitrary. A '
          'brand bought from somebody else has a price and is recognised; a brand '
          'built by trading well has no separable cost, so an {internally} '
          'generated intangible is almost never recognised at all.'],
         {'historical': ('What was paid, not what it is worth.', ''),
          'mixture': ('Two bases added together in one total.',
                      'Students read total assets as a value. It is a sum of '
                      'figures measured on different bases.'),
          'asset': ('Real resources that are not assets.', ''),
          'internally': ('Built, not bought, so no separable cost.', '')},
         ['current', 'liability', 'external']),
        ('fig', 'scale',
         'ON THE BALANCE SHEET',
         ['The warehouse, at what was paid',
          'Inventory, at cost',
          'A brand, if it was bought',
          'Goodwill %s, from an acquisition' % money(N.goodwill)],
         'NOT ON IT AT ALL',
         ['What the warehouse is worth today',
          'Supplier relationships',
          'A brand the company built itself',
          'The experience of the staff']),

        ('part', 'Part 2 · The income statement',
         'where judgement enters'),

        ('prose', 'Net income is the most quoted figure in the statements and the '
                  'most dependent on judgement. Three estimates alone move it, and '
                  'all three are made by the people whose results are being '
                  'measured.', 'R2'),
        ('prose', 'How long equipment will last decides the depreciation charge. '
                  'How much of the receivables will be collected decides the charge '
                  'for credit losses. When a sale has been earned decides which '
                  'year the revenue falls in. Each judgement is honest and '
                  'defensible, and each one changes net income.', 'R2'),

        ('prose', 'There is a bias built into those judgements, and it has a '
                  'name. Conservatism pushes an accountant towards caution when an '
                  'estimate is genuinely uncertain, so a probable loss tends to be '
                  'recognised sooner than a probable gain. It makes the statements '
                  'asymmetric on purpose, and a reader comparing two years should '
                  'know that the asymmetry is there.', 'R2'),

        ('task', 'Exercise 9B',
         'Say how a change in one estimate moves net income, and whether cash '
         'moves with it.',
         'Complete the table. Write the direction of the effect on net income, and '
         'whether operating cash flow moves.',
         ['Exercise 9A, and the two paragraphs above.'],
         ['Each row is a change in one estimate only. Hold everything else '
          'constant.',
          'Ask whether any cash actually leaves the company because of the change.',
          'The last row is different from the first three. Read it carefully.']),
        ('table', ['Change in an estimate', 'Effect on net income',
                   'Effect on operating cash flow'],
         [['Equipment judged to last 10 years instead of 8',
           '______________', '______________'],
          ['The allowance for credit losses raised by %s' % money(50_000),
           '______________', '______________'],
          ['Revenue on a shipment judged earned in %s, not %s' % (Y, PY),
           '______________', '______________'],
          ['A customer actually pays an invoice in cash',
           '______________', '______________']],
         IS, [40, 30, 30]),
        ('answers', 8),
        ('fig', 'matrix', 'Judgement moves profit, not cash',
         ['Longer useful life', 'Larger allowance', 'Revenue pulled forward',
          'A customer pays'],
         ['Net income', 'Operating cash flow'],
         [['Higher — less depreciation', 'Unchanged'],
          ['Lower — bigger charge', 'Unchanged'],
          ['Higher this year', 'Unchanged'],
          ['Unchanged — already recognised', 'Higher']],
         'Three estimates move profit and none of them moves cash. The one event '
         'that moves cash does not move profit. That asymmetry is the whole '
         'argument for reading both statements.'),

        ('part', 'Part 3 · Timing, and the pattern it leaves',
         'window dressing'),

        ('task', 'Exercise 9C',
         'Recognise window dressing from a pattern of year-end movements.',
         'Read and complete.',
         ['Exercise 9B'],
         ['Blank 2 is the ratio that a year-end repayment is designed to improve.',
          'Blank 3 is the statement that gives the game away, because it covers the '
          'whole year rather than one date.',
          'The last blank is why most of this behaviour is not fraud.']),
        ('fill', 'R2',
         ['The balance sheet reports one date, and a company knows in advance which '
          'date that is. Paying down a short-term loan on 30 December and redrawing '
          'it on 2 January changes nothing about the business, and it changes the '
          'statement.',
          'What it improves is the current {ratio}: current assets divided by '
          'current liabilities, measured at the one date the reader is shown. Any '
          'measure taken at a single moment can be arranged for in advance.',
          'What exposes it is the statement of cash {flows}, which covers the whole '
          'year rather than one instant, and the comparative figures, which let a '
          'reader see a pattern repeating every December.',
          'Most of this is not fraud. The transactions are real and they are '
          'recorded correctly, which is exactly why it is a {limitation} of the '
          'statements rather than a breach of them.'],
         {'ratio': ('A single-date measure, and therefore arrangeable.', ''),
          'flows': ('A period statement cannot be dressed at one date.', ''),
          'limitation': ('Real transactions, correctly recorded.',
                         'Students look for a rule that has been broken. Usually '
                         'none has been, and that is the point.')},
         ['margin', 'fraud', 'balance']),
        ('fig', 'timeline', 'The pattern a reader can see',
         [('30 December', 'short-term loan repaid; the ratio improves', IS),
          ('31 December', 'the balance sheet is drawn up at this date', BS),
          ('2 January', 'the loan is redrawn; nothing has changed', RUST)],
         'The balance sheet sees only the middle of these three. The cash flow '
         'statement and the comparatives see all three.'),

        ('part', 'Part 4 · What the notes add',
         'recognition is not the same as disclosure'),

        ('task', 'Exercise 9D',
         'Say what the notes add and why a disclosed item is not the same as a '
         'recognised one.',
         'Match each item to how it is reported.',
         ['Exercise 9C'],
         ['Ask whether the item changes a total on the face of a statement. If it '
          'does, it is recognised.',
          'Two of these change no total at all.',
          'The last one changes a total only when a condition is met.']),
        ('match',
         ['Depreciation of %s for the year' % money(N.depreciation),
          'The useful lives management has assumed',
          'A lawsuit the company will probably lose, amount estimable',
          'A lawsuit the company might lose, outcome genuinely uncertain',
          'A warehouse acquired by issuing shares'],
         ['Recognised — it changes net income and the carrying amount',
          'Disclosed — the figure is already recognised; this explains it',
          'Recognised — a probable, measurable obligation is a liability',
          'Disclosed — not probable enough to recognise, too important to omit',
          'Disclosed — significant, but no cash moved, so no statement line'],
         ['A', 'B', 'C', 'D', 'E'],
         'Recognition changes a total. Disclosure changes a reader’s '
         'understanding and leaves every total alone.'),
        ('fig', 'fork', 'Recognised, disclosed, or neither?',
         [('Is it probable, and can the amount be measured reliably?',
           'YES → RECOGNISE: it changes a total on the face', IS),
          ('Not probable or not measurable, but would change a decision?',
           'YES → DISCLOSE: the notes, with no effect on any total', SCF),
          ('Neither probable nor significant to a reader?',
           'Omit it — this is what materiality is for', SLATE)]),

        ('part', 'Part 5 · All four, side by side',
         'the summary to take into the exam'),

        ('table', _LIMH,
         [['Balance sheet',
           'Shows what is controlled and owed at a date, and what the claims rank',
           'Historical cost mixed with current value; omits internally generated '
           'intangibles; can be arranged for at one date'],
          ['Income statement',
           'Shows performance over a period, separated into subtotals',
           'Depends on estimates made by management; can be shifted between '
           'periods; does not show cash'],
          ['Changes in equity',
           'Shows every movement in the owners’ claim, with none left out',
           'Says nothing about whether the movements were good for the business'],
          ['Cash flows',
           'Reports facts, with almost no judgement anywhere in it',
           'Says nothing about profitability; a company can look healthy by not '
           'investing']],
         SLATE, _LIMW),

        ('task', 'Exercise 9E',
         'Say why cash flow is the hardest statement to manipulate, and what it '
         'still cannot show.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 9A to 9D, and the table above.'],
         ['Blank 1 is what the cash flow statement contains almost none of, '
          'compared with the other three.',
          'Blank 3 is the thing a company can stop doing to make its cash look '
          'better in the short run.',
          'The final blank is the practice this handout has been building towards '
          'all the way through.']),
        ('fill', 'R3',
         ['Of the four statements the cash flow statement rests on the least '
          '{judgement}. A payment either left the bank or it did not, and no '
          'assumption about useful lives or collectability can change the figure.',
          'That is why an analyst comparing two companies on the same industry will '
          'often start with operating cash flow rather than with net {income}, and '
          'why a persistent gap between the two is treated as a warning rather '
          'than as a curiosity.',
          'It is not beyond arrangement either. A company that stops replacing its '
          'equipment reports stronger cash flow immediately, because the '
          '{investing} outflow disappears while the trade carries on unchanged — '
          'for a while.',
          'No single statement is sufficient, which is the conclusion this volume '
          'has been building towards. The four are read {together}, and each one is '
          'the control on the others.'],
         {'judgement': ('Facts, not estimates.', ''),
          'income': ('A persistent gap between the two is a warning.', ''),
          'investing': ('Starving the business improves cash in the short run.',
                        'Students treat strong operating cash flow as proof of '
                        'health without checking what was spent on assets.'),
          'together': ('Each is the control on the others.', '')},
         ['revenue', 'financing', 'separately']),
        ('fig', 'ranked', 'How much judgement each statement rests on',
         [('Income statement', 4, 'most judgement', RUST),
          ('Balance sheet', 3, 'historical cost and estimates', BS),
          ('Changes in equity', 2, 'mostly mechanical', SCE),
          ('Cash flow statement', 1, 'least judgement', IS)],
         'The bar is a rank, not an amount. Read the statements in the opposite '
         'order to the one they are presented in, and the soft figures are checked '
         'by the hard ones.'),

        ('watch', 'Every limitation in this handout is a feature of honest '
                  'statements prepared correctly. None of them is fraud. The exam '
                  'asks you to read carefully, not to suspect wrongdoing.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A company’s balance sheet reports total assets of %s. A user '
                'concludes that the company could be sold for approximately that '
                'amount. This conclusion is:' % money(N.total_assets),
         ['Correct, because assets are measured at fair value',
          'Incorrect, because assets are measured on mixed bases and valuable '
          'resources are omitted',
          'Correct, provided the company has no liabilities',
          'Incorrect, because total assets always understate liabilities'],
         1, 'Level B',
         'Most assets sit at historical cost, a few at current value, and '
         'internally generated intangibles are absent entirely. (A) is false for '
         'most of the balance sheet. (C) confuses assets with net assets and still '
         'assumes the figures are values. (D) is not a meaningful statement.'),

        ('mcq', 'Which of the following is LEAST affected by management '
                'judgement?',
         ['Net income', 'The carrying amount of property, plant and equipment',
          'Cash provided by operating activities', 'The allowance for credit '
          'losses'],
         2, 'Level B',
         'Operating cash flow records payments that either happened or did not. '
         '(A) absorbs every estimate. (B) depends on useful lives and impairment '
         'judgements. (D) is an estimate by definition.'),

        ('mcq', 'A company has built a widely recognised brand over twenty years '
                'without acquiring it. On its balance sheet the brand is:',
         ['Recognised as an intangible asset at its estimated fair value',
          'Recognised as goodwill',
          'Not recognised, because its cost cannot be separated from the cost of '
          'operating the business',
          'Recognised only if the company intends to sell it'],
         2, 'Level C',
         'Internally generated intangibles are almost never recognised because no '
         'separable cost exists. (B) is the common error: goodwill arises on '
         'acquisition, not from trading well. The practical consequence is that the '
         'most valuable thing some companies own never appears on their statements.'),

        ('mcq', 'A company repays a short-term loan on 30 December and redraws it '
                'on 2 January. This is best described as:',
         ['Fraudulent financial reporting',
          'An error requiring restatement',
          'Window dressing: real transactions arranged to improve a measure taken '
          'at one date',
          'A non-cash transaction requiring disclosure'],
         2, 'Level C',
         'The transactions are real and correctly recorded, which is precisely why '
         'it is a limitation of a single-date statement rather than a breach of the '
         'rules. (A) and (B) overstate it. (D) is wrong: cash moved both times.'),

        ('mcq', 'An item is disclosed in the notes rather than recognised in the '
                'statements. The consequence is that:',
         ['It affects no total on the face of any statement',
          'It affects net income but not the balance sheet',
          'It affects the balance sheet but not net income',
          'It is immaterial by definition'],
         0, 'Level B',
         'Disclosure informs the reader and changes no total, which is why any '
         'ratio built on a total is unaffected by it. (D) reverses the logic: items '
         'are disclosed precisely because they are material enough to matter.'),

        ('mcq', 'Management extends the assumed useful life of equipment from eight '
                'years to ten. In the current year this will:',
         ['Increase net income and increase operating cash flow',
          'Increase net income and leave operating cash flow unchanged',
          'Leave net income unchanged and increase operating cash flow',
          'Decrease net income and leave operating cash flow unchanged'],
         1, 'Level C',
         'A longer life means a smaller depreciation charge, so net income rises. '
         'No cash moves — the equipment was paid for when it was bought — '
         'so operating cash flow is unchanged. This asymmetry is the single '
         'strongest argument for reading both statements together.'),

        ('mcq', 'An analyst observes that a company reports rising net income while '
                'operating cash flow falls for three consecutive years. The most '
                'appropriate response is:',
         ['To conclude that fraud has occurred',
          'To ignore the cash flow statement, since net income is the measure of '
          'performance',
          'To investigate the working capital movements and the revenue '
          'recognition judgements behind the gap',
          'To conclude that the company has stopped investing'],
         2, 'Level C',
         'A persistent gap is a signal to investigate, not a conclusion in itself: '
         'it may be growth tying up working capital, or it may be aggressive '
         'recognition. (A) leaps far beyond the evidence. (B) discards the hardest '
         'figure available. (D) would show in investing, not operating.'),

        ('tip', 'When a question asks what a statement cannot tell you, work '
                'through three words in order: measurement, judgement, omission. '
                'Almost every limitation the CMA examines is one of those three, '
                'and naming the category usually names the answer.'),
    ],

    key_extra=[
        ('h3', 'Exercise 9B · the completed table'),
        ('table', ['Change in an estimate', 'Effect on net income',
                   'Effect on operating cash flow'],
         [['Equipment judged to last 10 years instead of 8',
           'Higher — the annual depreciation charge falls', 'Unchanged'],
          ['The allowance for credit losses raised by %s' % money(50_000),
           'Lower — a larger charge for credit losses', 'Unchanged'],
          ['Revenue on a shipment judged earned in %s, not %s' % (Y, PY),
           'Higher this year, lower last year', 'Unchanged'],
          ['A customer actually pays an invoice in cash',
           'Unchanged — the revenue was recognised when the sale was made',
           'Higher — a receivable has become cash']],
         IS, [40, 30, 30]),
        ('h3', 'The four statements and their limits'),
        ('table', _LIMH,
         [['Balance sheet',
           'What is controlled and owed at a date',
           'Cost mixed with value; internally generated intangibles omitted; '
           'arrangeable at one date'],
          ['Income statement', 'Performance over a period',
           'Rests on management estimates; shiftable between periods; not cash'],
          ['Changes in equity', 'Every movement in the owners’ claim',
           'Does not say whether the movements were good for the business'],
          ['Cash flows', 'Facts, with little judgement',
           'Silent on profitability; improved in the short run by not investing']],
         SLATE, _LIMW),
    ],
)
