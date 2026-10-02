# -*- coding: utf-8 -*-
"""Volume 3, Handout 1 — Receivables: When to Recognise, and at What Amount.

Covers the first half of A.2(a): the timing of recognition of accounts
receivable and the amount at which they are first recorded.
"""
from fadata import N, Y, PY
from data import money, num

AR, CASH, DISC, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_DISCH = ['Invoice', 'Terms', 'If paid within the discount period',
          'If paid after it']
_DISCW = [22, 20, 29, 29]

HANDOUT = dict(
    n=1,
    title='Receivables: When to Recognise, and at What Amount',
    subtitle='A receivable appears the moment a sale is earned, not the moment an '
             'invoice is typed. The amount is rarely the figure on the invoice.',
    register='R1 moving to R2',

    lang=dict(
        register='R1 while the two questions are separated, R2 once discounts and '
                 'interest arrive.',
        collocations=['recognise a receivable', 'record a sale on credit',
                      'offer terms of 2/10, net 30', 'take up a cash discount',
                      'measure a receivable at', 'collect an invoice'],
        pairs=['trade discount / cash discount',
               'invoice amount / carrying amount',
               'account receivable / note receivable',
               'recognition / measurement'],
        nots=['A trade discount is never recorded. It is simply not part of the '
              'price.',
              'A cash discount is recorded, because the customer may or may not '
              'take it and the company has to estimate which.'],
    ),

    objectives=[
        'Say when a receivable is first recognised, and why the invoice date is '
        'not the trigger.',
        'Distinguish a trade discount from a cash discount and say which one is '
        'recorded.',
        'Measure a receivable on initial recognition under both methods of '
        'handling cash discounts.',
        'Distinguish an account receivable from a note receivable.',
        'Say when a long-dated receivable has to be discounted, and when it does '
        'not.',
    ],

    terms=[
        ('trade receivable',
         'An amount owed by a customer for goods or services already supplied.',
         'الذمم المدينة التجارية',
         'Also called an account receivable. It arises from trading, which is what '
         'separates it from a loan the company has made.'),
        ('note receivable',
         'A receivable supported by a formal written promise, usually bearing '
         'interest.', 'أوراق القبض',
         'A note is a different instrument, not merely an overdue invoice. It '
         'usually carries a stated rate and a maturity date.'),
        ('trade discount',
         'A reduction off a list price, given to arrive at the actual price.',
         'خصم تجاري',
         'Never recorded anywhere. The sale is simply recorded at the net figure, '
         'and the list price is of no accounting interest.'),
        ('cash discount',
         'A reduction offered for paying early, such as 2% for payment within ten '
         'days.', 'خصم نقدي',
         'This one is recorded, because whether the customer takes it is unknown '
         'when the sale is made.'),
        ('gross method',
         'Recording the sale at the full invoice amount and the discount only if '
         'it is taken.', 'الطريقة الإجمالية',
         'Simpler, and it overstates revenue slightly where discounts are usually '
         'taken.'),
        ('net method',
         'Recording the sale at the amount expected after the discount.',
         'الطريقة الصافية',
         'Conceptually better and closer to how variable consideration is handled '
         'in Volume 2.'),
    ],

    blocks=[
        ('scene', 'The line you built in Volume 1, opened up', [
            'Northwind’s balance sheet reports accounts receivable of %s net '
            'of an allowance of %s, so customers owe %s in gross invoices.'
            % (money(N.ar_net), money(N.allowance), money(N.ar_gross)),
            'That one line hides three separate questions. When did each of those '
            'receivables first appear? What amount was each one recorded at? And '
            'how much of the total will actually be collected?',
            'This handout answers the first two. Handout 2 answers the third, and '
            'Handout 3 asks what happens when the company sells the receivable '
            'rather than waiting for it.',
        ]),
        ('fig', 'ranked', 'One balance sheet line, three questions',
         [('Gross invoices outstanding', N.ar_gross, money(N.ar_gross), AR),
          ('Less the part not expected to be collected', N.allowance,
           money(-N.allowance), RUST),
          ('Carrying amount reported', N.ar_net, money(N.ar_net), CASH)],
         'This handout fixes the top figure. Handout 2 fixes the middle one.',
         'Northwind at 31 December %s' % Y),

        ('part', 'Part 1 · When does a receivable appear?',
         'recognition, not invoicing'),

        ('task', 'Exercise 1A',
         'Say when a receivable is first recognised, and rule out the events that '
         'do not trigger it.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['Two of these blanks name events that feel like triggers and are not.',
          'Blank 3 is the single event that does create the receivable.',
          'The last blank is the word for an amount the company has an '
          'unconditional right to.']),
        ('fill', 'R1',
         ['A receivable does not appear when the customer places an {order}. An '
          'order is a promise to buy, and nothing has yet been supplied.',
          'It does not appear when the invoice is typed either. The {invoice} is '
          'paperwork, and a company that is slow with its paperwork does not '
          'thereby own less.',
          'It appears when the company has performed and the customer’s '
          'obligation to pay has become {unconditional}. For Northwind that is the '
          'moment the components are delivered and accepted.',
          'The word for that is a {receivable}: a right to consideration where '
          'only the passage of time stands between the company and the cash. If '
          'anything else stands in the way, the right is a contract asset instead, '
          'as Volume 2 showed.'],
         {'order': ('A promise to buy is not performance.', ''),
          'invoice': ('Paperwork, and its timing is largely the seller’s '
                      'choice.', ''),
          'unconditional': ('Only time stands in the way.', ''),
          'receivable': ('Unconditional right: a receivable.',
                         'Students date receivables from the invoice, which puts '
                         'year-end sales in the wrong period whenever invoicing '
                         'lags despatch.')},
         ['contract', 'payment', 'delivery']),
        ('fig', 'timeline', 'Four events, and only the third creates anything',
         [('Order placed', 'nothing is recorded', SLATE),
          ('Goods delivered and accepted',
           'revenue and a receivable are recognised', AR),
          ('Invoice sent', 'paperwork; nothing changes', SLATE),
          ('Cash collected', 'the receivable is cleared', CASH)],
         'The second event is the only one that creates the receivable. The others '
         'are administration, and a company controls their timing.'),

        ('part', 'Part 2 · Two kinds of discount',
         'one is recorded, one is invisible'),

        ('prose', 'The amount at which a receivable is first recorded is rarely '
                  'the list price, and two different reductions explain why. They '
                  'look similar in a stem and they are handled completely '
                  'differently.', 'R2'),
        ('prose', 'A trade discount is a reduction off a list price to arrive at '
                  'the price actually agreed. A customer buying in bulk pays 20% '
                  'less than the catalogue says. Nothing about that is an '
                  'accounting event: the sale is simply recorded at the agreed '
                  'figure, and the list price is never entered anywhere.', 'R2'),

        ('task', 'Exercise 1B',
         'Record a sale net of a trade discount and say why the list price is '
         'irrelevant.',
         'Complete the journal entry, then answer the question underneath it.',
         ['Exercise 1A, and the two paragraphs above.'],
         ['The list price is given to you so that you can ignore it. Work out the '
          'agreed price first.',
          'There is no account called trade discount, and there should not be.',
          'Both sides of the entry carry the same figure.']),
        ('journal', [
            ('J1', ('Components with a list price of $250,000 sold to a '
                    'distributor at a 20% trade discount.',
                    'No account records the discount. The sale is simply the '
                    'agreed figure.'),
             [('Accounts Receivable', 0, '', ''),
              ('Sales Revenue', 1, '', '')]),
        ]),
        ('fig', 'fork', 'Two discounts, two completely different treatments',
         [('Is it a reduction to reach the agreed price?',
           'TRADE DISCOUNT → never recorded; book the net figure', AR),
          ('Is it an incentive to pay early, which the customer may or may not '
           'take?',
           'CASH DISCOUNT → recorded, because it has to be estimated', DISC),
          ('Why does the difference matter?',
           'One changes the price. The other changes what is collected', RUST)]),

        ('task', 'Exercise 1C',
         'Measure a receivable under both methods of handling a cash discount.',
         'Complete the table. Write the amount recorded under each method and '
         'each outcome.',
         ['Exercise 1B'],
         ['Terms of 2/10, net 30 mean 2% off if paid within 10 days, and the whole '
          'amount due in 30.',
          'Under the gross method the sale goes in at the full figure and the '
          'discount is recorded only if it is taken.',
          'Under the net method the sale goes in at the discounted figure, and '
          'failing to take the discount produces a small gain.']),
        ('table', _DISCH,
         [['$100,000, terms 2/10 net 30', 'Gross method', '______________',
           '______________'],
          ['$100,000, terms 2/10 net 30', 'Net method', '______________',
           '______________']],
         DISC, _DISCW),
        ('answers', 4),
        ('fig', 'matrix', 'The same invoice, recorded two ways',
         ['Gross method', 'Net method'],
         ['Recorded at', 'If the discount is taken'],
         [['$100,000', 'A sales discount of $2,000 reduces revenue'],
          ['$98,000', 'Nothing further — it was already expected']],
         'The net method anticipates the discount; the gross method waits to see. '
         'Over the life of the receivable both reach the same cash.'),

        ('part', 'Part 3 · Notes, and the time value of money',
         'when a receivable has to be discounted'),

        ('task', 'Exercise 1D',
         'Distinguish an account receivable from a note receivable, and say when '
         'discounting is required.',
         'Read and complete.',
         ['Exercise 1C'],
         ['Blank 1 is the feature that makes a note a different instrument rather '
          'than an overdue invoice.',
          'Blank 3 is the length of time below which the question of discounting '
          'is set aside entirely.',
          'The last blank is what the interest element becomes if a long-dated '
          'receivable is discounted.']),
        ('fill', 'R2',
         ['An account receivable arises from an ordinary sale on credit. A note '
          'receivable is supported by a formal written promise to pay, normally '
          'with a stated {interest} rate and a maturity date, and it is a different '
          'instrument rather than an invoice that has gone unpaid for a long time.',
          'Both raise the same question once the term lengthens. An amount payable '
          'in three years is not worth its face value today, and recording it at '
          'face value would overstate both the asset and the {revenue} recognised '
          'on the sale.',
          'In practice the question is set aside for short receivables. Where the '
          'period between transfer and payment is one {year} or less, the '
          'practical expedient from Volume 2 applies and no discounting is '
          'required, which covers almost every trade receivable a question will '
          'give you.',
          'Where it does apply, the receivable is recorded at its present value, '
          'and the difference between that and the cash eventually collected is '
          'recognised as {interest} income over the period rather than as revenue '
          'on day one.'],
         {'interest': ('A stated rate is the hallmark of a note.', ''),
          'revenue': ('Face value would overstate both sides.', ''),
          'year': ('One year or less: no discounting needed.',
                   'Students discount every receivable in sight. For trade '
                   'receivables the expedient almost always applies.')},
         ['month', 'profit', 'maturity']),
        ('fig', 'scale',
         'ACCOUNT RECEIVABLE',
         ['Arises from an ordinary credit sale',
          'No formal instrument', 'Normally settled within 30 to 90 days',
          'Not discounted — under a year'],
         'NOTE RECEIVABLE',
         ['Supported by a written promise',
          'Normally bears a stated interest rate',
          'May run for several years',
          'Discounted where the term is long']),

        ('part', 'Part 4 · What the balance is made of',
         'Northwind at the year end'),

        ('task', 'Exercise 1E',
         'Account for the movement in gross receivables across the year.',
         'Read and complete.',
         ['Exercises 1A to 1D'],
         ['Blank 1 is the opening gross figure, which you can read from Volume '
          '1’s comparative column.',
          'Receivables rise with sales and fall with collections. Both appear.',
          'The last blank is the handout that deals with the amounts that were '
          'never collected at all.']),
        ('fill', 'R2',
         ['Gross receivables opened the year at %s and closed at {%s}, an increase '
          'of %s.' % (money(N.ar_gross_py), money(N.ar_gross),
                      money(N.ar_gross - N.ar_gross_py)),
          'Three things moved the balance. Credit sales of %s added to it, cash '
          'collections took most of that away again, and amounts judged '
          'uncollectible were removed from it altogether.' % money(N.sales),
          'The first two are this handout’s business, and they are '
          'mechanical. The third is a judgement, it came to %s during the year, '
          'and it is the whole subject of Handout {2}.' % money(N.writeoffs)],
         {money(N.ar_gross): ('From Volume 1’s balance sheet.', ''),
          '2': ('Uncollectible amounts are the next handout.', '')},
         [money(N.ar_net), money(N.sales), '3']),
        ('fig', 'bridge',
         'Gross receivables at 1 January %s' % Y, N.ar_gross_py,
         [('Credit sales during the year', N.sales),
          ('Cash collected from customers',
           -(N.sales - N.writeoffs - (N.ar_gross - N.ar_gross_py))),
          ('Amounts judged uncollectible and removed', -N.writeoffs)],
         'Gross receivables at 31 December %s' % Y, N.ar_gross),

        ('watch', 'Recognition and measurement are two separate questions and the '
                  'exam asks them separately. When a receivable appears is about '
                  'performance. What it is recorded at is about discounts, and '
                  'occasionally about time.'),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'Goods are delivered and accepted on 28 December. The invoice is '
                'raised on 4 January. The receivable should be recognised on:',
         ['4 January, when the invoice was raised',
          '28 December, when the obligation to pay became unconditional',
          'The date the customer pays',
          'The date the customer placed the order'],
         1, 'Level B',
         'Performance creates the receivable; invoicing is administration whose '
         'timing the seller largely controls. (A) is the most common error and it '
         'moves year-end sales into the wrong period. (C) is cash accounting and '
         '(D) predates any performance.'),

        ('mcq', 'A customer buys goods with a list price of $250,000 at a 20% trade '
                'discount. The sale is recorded at:',
         ['$250,000, with a $50,000 trade discount account',
          '$200,000, with no entry for the discount',
          '$250,000, with the discount disclosed in the notes',
          '$200,000, with a $50,000 reduction of revenue'],
         1, 'Level A',
         'A trade discount simply arrives at the agreed price; there is no account '
         'for it and nothing to disclose. (A) and (D) invent a discount account. '
         '(C) treats a pricing decision as though it were an accounting event.'),

        ('mcq', 'An invoice of $100,000 carries terms of 2/10, net 30. Under the '
                'net method the receivable is initially recorded at:',
         ['$100,000', '$98,000', '$102,000', '$80,000'],
         1, 'Level B',
         'The net method records the amount expected after the discount, which is '
         '$100,000 less 2%. (A) is the gross method. (C) adds the discount. (D) '
         'confuses a 2% cash discount with a 20% trade discount.'),

        ('mcq', 'Under the gross method, a customer pays within the discount period '
                'and takes a $2,000 cash discount. The $2,000 is:',
         ['Recorded as interest expense',
          'Recorded as a sales discount, reducing revenue',
          'Added to the estimate of amounts that will not be collected',
          'Not recorded, because the receivable has been settled'],
         1, 'Level B',
         'Under the gross method the discount is recorded when taken, as a '
         'reduction of revenue. (A) misclassifies a price concession as financing. '
         '(C) confuses a discount taken with an amount that will never arrive '
         '— two different things entirely.'),

        ('mcq', 'A receivable is due in 90 days. The appropriate measurement on '
                'initial recognition is:',
         ['Present value, discounted at the market rate',
          'Face value, because the practical expedient applies to periods of one '
          'year or less',
          'Face value less an estimated financing component',
          'Fair value as quoted in an active market'],
         1, 'Level B',
         'The practical expedient removes the discounting question for periods of '
         'a year or less, which covers nearly every trade receivable. (A) and (C) '
         'do work the standard excuses you from. (D) presumes a market that does '
         'not exist for trade receivables.'),

        ('mcq', 'Which of the following distinguishes a note receivable from an '
                'account receivable?',
         ['A note is always overdue',
          'A note is supported by a formal written promise and normally bears a '
          'stated interest rate',
          'A note arises only from sales to related parties',
          'A note is always non-current'],
         1, 'Level A',
         'The written instrument and the stated rate are the distinguishing '
         'features. (A) is a common misconception — a note is a different '
         'instrument, not a late invoice. (D) is false: notes can be short-term.'),

        ('mcq', 'Northwind’s gross receivables rose from %s to %s. Which of '
                'the following alone could explain the increase?'
                % (money(N.ar_gross_py), money(N.ar_gross)),
         ['An increase in the estimate of uncollectible amounts',
          'Credit sales exceeding collections plus amounts removed as '
          'uncollectible',
          'An increase in cash collections',
          'A larger removal of uncollectible accounts'],
         1, 'Level C',
         'Gross receivables rise when what is added exceeds what is taken away. (A) '
         'affects the estimate, which is a contra account and does not touch the '
         'gross figure at all. (C) and (D) both reduce gross receivables.'),

        ('tip', 'Separate the two questions in your head before you read the '
                'options: when did this receivable appear, and what was it '
                'recorded at? Mixing them is what makes discount questions feel '
                'harder than they are.'),
    ],

    key_extra=[
        ('h3', 'Exercise 1B · the completed entry'),
        ('journal', [
            ('J1', 'List price $250,000 less a 20% trade discount.',
             [('Accounts Receivable', 0, money(200_000), ''),
              ('Sales Revenue', 1, '', money(200_000))]),
        ]),
        ('h3', 'Exercise 1C · the completed table'),
        ('table', _DISCH,
         [['$100,000, terms 2/10 net 30', 'Gross method', 'Recorded at $100,000; '
           'a $2,000 sales discount is recorded when taken',
           'Recorded at $100,000; the full amount is collected'],
          ['$100,000, terms 2/10 net 30', 'Net method', 'Recorded at $98,000; '
           'nothing further is recorded',
           'Recorded at $98,000; the extra $2,000 collected is other income']],
         DISC, _DISCW),
    ],
)
