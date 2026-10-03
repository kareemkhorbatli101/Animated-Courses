# -*- coding: utf-8 -*-
"""Handout 7.8 — The whole chapter, interleaved, with the spiral back."""

HANDOUT = dict(
    id='7.8',
    n=8,
    pages=5,
    title='The whole chapter',
    sub='The map · mixed practice with the sections shuffled · two '
        'questions that reach back to Chapter 1',
    covers=['fig:F07-10', 'sec:summary', 'p:P7-15', 'p:P7-16', 'p:P7-17',
            'w:W7'],
    skills=[('map', 3), ('mixed', 0)],
    derived={},
    flow=[
        ('speed', [
            'The rule for which goods are ours is',
            'The test for an inventoriable cost is',
            'FIFO leaves which costs in ending inventory?',
            'Prices rising: which method gives the lowest tax?',
            'An overstated count does what to year 1 income?',
            'Does IFRS allow LIFO?',
            'The LIFO reserve is FIFO inventory less',
            'Which method is the same under both systems?',
        ]),
        # ---------------------------------------------------------- CYCLE A
        ('cycle', 'A', 'Five decisions, in order'),
        ('move', 'ORIENT', ''),
        ('items', [
            dict(t='SHORT',
                 q='Every unit a company had is in one of exactly two places '
                   'at the year end. Name both.',
                 a='Still in inventory, or part of cost of goods sold',
                 why='There is no third place for it to be.'),
        ]),
        ('move', 'MODEL',
         'The chapter as five decisions, each one taken before the next.'),
        ('fig', 'ch7_map'),
        ('move', 'READ THE MODEL', ''),
        ('items', [
            dict(t='SHORT',
                 q='Which decision comes first, and what is the single word '
                   'it turns on?',
                 a='Which goods belong — control', why=''),
            dict(t='SHORT',
                 q='Which decision splits one total into two?',
                 a='Which costs leave — the cost flow assumption', why=''),
            dict(t='SHORT',
                 q='The last box is about a wrong count. What does it say '
                   'happens over two years?',
                 a='The error reverses in the next year and then cancels',
                 why=''),
            dict(t='SHORT', lines=2,
                 q='Pick any one arrow and write, in one sentence, why the '
                   'decision at its tail has to be taken first.',
                 a='Any defensible answer, for example: you cannot cost the '
                   'goods until you know which goods are yours',
                 why='The map records the order the decisions have to be '
                     'taken in.'),
        ]),
        ('panel', 'What IFRS does differently, in one line',
         [['Under IAS 2', 'Status'],
          ['FIFO', 'allowed'],
          ['Weighted average', 'allowed'],
          ['Specific identification',
           'required for items that are not interchangeable'],
          ['LIFO', 'NOT allowed']],
         'Cedar Retail, the IFRS company in this book, therefore uses '
         'FIFO.'),
        ('move', 'INVENT THE RULE', ''),
        ('rule',
         'Write the chapter in two sentences: what is split, and what the '
         'split decides.',
         [['A cost flow assumption splits the cost of ', 22,
           ' between cost of goods sold and ', 18, '.'],
          ['In rising prices, ', 10, ' gives higher income, tax and '
           'inventory, and ', 10, ' gives lower ones.']],
         ['goods available', 'ending inventory', 'FIFO', 'LIFO'],
         'A cost flow assumption splits the cost of goods available between '
         'cost of goods sold and ending inventory. In rising prices, FIFO '
         'gives higher income, taxes and inventory, and LIFO gives lower '
         'ones; the LIFO reserve connects the two.'),
        ('contrast',
         'Two decisions that both change ending inventory',
         [('A carton is wrongly left out of the count',
           ['Does goods available for sale change?',
            'Does ending inventory change?',
            'Does cost of goods sold change?']),
          ('The company switches from FIFO to LIFO',
           ['Does goods available for sale change?',
            'Does ending inventory change?',
            'Does cost of goods sold change?'])],
         'Answer all three rows for each. Then write the one sentence that '
         'says why only one of the two is an error.'),
        ('check',
         'Name the five decisions of this chapter, in order.',
         'Which goods belong; which costs belong; which costs leave; what the '
         'choice does to income, tax and assets; what a wrong count does.',
         'redo the READ THE MODEL questions of cycle A with the map in front '
         'of you.'),
        # ---------------------------------------------------------- CYCLE B
        ('cycle', 'B', 'Mixed practice, and two from Chapter 1', 'practice'),
        ('move', 'ORIENT',
         'From here the questions do not come in section order, and two of '
         'them reach back to Chapter 1.'),
        ('items', [
            dict(t='SHORT',
                 q='Before you start: name the five sections of this chapter '
                   'in two or three words each, so you can place each '
                   'question as you read it.',
                 a='Which goods; which costs; cost flow; effects; errors',
                 lines=2, why=''),
        ]),
        ('move', 'APPLY', ''),
        ('items', [
            dict(t='MCQ',
                 q='Orontes buys olives on account. What is the effect '
                   'immediately after the purchase?',
                 o=['Assets increase and liabilities increase.',
                    'Expenses increase and net income decreases.',
                    'Assets increase and equity increases.',
                    'There is no effect until Orontes pays.'],
                 a='A',
                 why='Inventory is an asset and the payable is a liability. '
                     'Buying inventory is not an expense, and the goods are '
                     'controlled from the moment of purchase.'),
            dict(t='MCQ',
                 q='Orontes records cost of goods sold at the same time as '
                   'the related sales revenue. Which approach does this '
                   'follow?',
                 o=['Systematic and rational allocation',
                    'Matching by cause and effect', 'Immediate recognition',
                    'Specific identification for unique items'],
                 a='B',
                 why='Cost of goods sold links directly to one sale, which is '
                     'the cause-and-effect way of applying matching.'),
            dict(t='TF',
                 q='A consignee includes consigned goods in its inventory '
                   'when they sit on its own shelves.',
                 a='F',
                 why='The consignee never includes them. The goods stay in '
                     'the consignor’s inventory.'),
            dict(t='MCQ',
                 q='Prices are rising. A company wants the LOWEST income tax '
                   'this year. Which method should it choose, and what must '
                   'it accept?',
                 o=['FIFO, and accept a lower ending inventory',
                    'LIFO, and accept reporting lower profits to investors',
                    'The weighted average, and accept a moving average',
                    'Specific identification, and accept tracking every unit'],
                 a='B',
                 why='LIFO gives the lowest taxable income when prices rise, '
                     'and the conformity rule means the same lower profits '
                     'must be reported in the financial statements.'),
            dict(t='MCQ',
                 q='Cedar Retail S.A.L. reports under IFRS. Which method '
                   'may it NOT use?',
                 o=['FIFO', 'Weighted average', 'LIFO',
                    'Specific identification for unique items'],
                 a='C',
                 why='IAS 2 prohibits LIFO. It allows FIFO and the '
                     'weighted average, and requires specific '
                     'identification for items that are not '
                     'interchangeable.'),
            dict(t='MCQ',
                 q='Which cost would NOT be included in the cost of '
                   'inventory?',
                 o=['Import duty that cannot be reclaimed',
                    'Insurance while the goods are in transit',
                    'Freight paid to deliver goods to a customer',
                    'Handling on arrival at the plant'],
                 a='C',
                 why='Freight-out happens after the goods are ready, so it is '
                     'a selling expense. The other three all help bring the '
                     'goods to their present condition and location.'),
            dict(t='MCQ',
                 q='Ending inventory for the current year is overstated. '
                   'Which figure is NOT affected this year?',
                 o=['Cost of goods sold', 'Net income', 'Total assets',
                    'Goods available for sale'],
                 a='D',
                 why='Goods available is beginning inventory plus purchases, '
                     'and neither of those is touched by a miscount of the '
                     'closing stock.'),
        ]),
        ('pair',
         'Compare all six answers with your partner before reading any key.',
         'for each one you disagree on, name the section it belongs to first. '
         'Most disagreements turn out to be about the section, not the '
         'answer.'),
        ('check',
         'Of the six questions you have just answered, which two did not come '
         'from this chapter at all? Name the chapter they came from.',
         'The purchase on account and the cost-of-goods-sold matching '
         'question, both from Chapter 1.',
         'go back to the MODEL move of cycle A and check which of the five '
         'boxes each of the other four belonged in.'),
        # ---------------------------------------------------------- CLOSE
        ('build', 'ch7_map',
         'Rebuild the chapter map from memory. Write all five decisions in '
         'order, and the rule that settles each one.',
         'Which goods belong: control at the year-end date, wherever they '
         'sit. Which costs belong: everything that brings them to their '
         'present condition and location. Which costs leave: the cost flow '
         'assumption cuts goods available into two. What the choice does: in '
         'rising prices FIFO gives higher income, tax and inventory. What a '
         'wrong count does: the error reverses next year and then cancels.'),
        ('teach', 'a student starting this chapter tomorrow',
         'In five or six sentences, write the whole chapter: which goods, '
         'which costs, how the costs split, what the choice does when prices '
         'rise, and what happens when the count is wrong.',
         ['control', 'condition and location', 'goods available',
          'cost of goods sold', 'LIFO reserve', 'counterbalancing'],
         'Inventory includes the goods a company controls at the year-end '
         'date, wherever they are, so shipping terms and consignments matter '
         'more than where the cartons are standing. Its cost includes '
         'everything needed to bring the goods to their present condition and '
         'location, but not selling, administrative or abnormal costs. A cost '
         'flow assumption then splits the cost of goods available between '
         'cost of goods sold and ending inventory, and the split is a '
         'decision about costs rather than about physical movement. In rising '
         'prices FIFO gives higher income, tax and inventory and LIFO gives '
         'lower ones, with the LIFO reserve as the bridge between them. An '
         'error in ending inventory reverses in the following year, so it is '
         'counterbalancing and retained earnings are correct after two '
         'years.'),
    ],
)
