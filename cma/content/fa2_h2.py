# -*- coding: utf-8 -*-
"""Volume 2, Handout 2 — The Contract, the Obligations, the Price.

Covers A.2(y), steps 1 to 3 of the revenue model.
"""
from fadata import N, M, Y, PY
from data import money, num

GOODS, SERV, TIME, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

_SSPH = ['Promise in the contract', 'Standalone selling price', 'Distinct?']
_SSPW = [46, 28, 26]

HANDOUT = dict(
    n=2,
    title='The Contract, the Obligations, the Price',
    subtitle='Three steps before a single dollar is allocated: is there a contract, '
             'how many promises, and how much will we actually be entitled to?',
    register='R2 throughout, with R3 on variable consideration',

    lang=dict(
        register='R2 textbook English. The sentences carry conditions, so they are '
                 'longer than in Handout 1. Read each one twice.',
        collocations=['identify a performance obligation',
                      'a good or service is distinct',
                      'estimate variable consideration',
                      'constrain an estimate of revenue',
                      'combine two contracts', 'the most likely amount'],
        pairs=['distinct / separately identifiable',
               'expected value / most likely amount',
               'discount / rebate', 'stated price / transaction price'],
        nots=['A promise is not automatically a performance obligation. It has to '
              'be distinct, and that is two tests rather than one.',
              'The stated price is not the transaction price. Anything variable '
              'has to be estimated and brought into the total.'],
    ),

    objectives=[
        'State the criteria that make an agreement a contract for this purpose.',
        'Apply both limbs of the distinct test and say how many performance '
        'obligations a contract contains.',
        'Estimate variable consideration using the right one of the two methods.',
        'Apply the constraint and say what it is protecting against.',
        'Produce the transaction price for the Meridian contract.',
    ],

    terms=[
        ('distinct',
         'Capable of benefiting the customer on its own, and separately '
         'identifiable from the other promises in the contract.', 'متمايز',
         'Two limbs, and both must hold. Most exam questions turn on the second '
         'one, which is about the contract rather than about the item.'),
        ('standalone selling price',
         'The price at which an entity would sell a promised good or service '
         'separately.', 'سعر البيع المستقل',
         'Observable where the item is actually sold separately; estimated where '
         'it is not. It is the basis of the whole allocation.'),
        ('variable consideration',
         'An amount in a contract that is not fixed: a rebate, a bonus, a '
         'penalty, a right of return.', 'المقابل المتغير',
         'It must be estimated and included, not ignored until it is known.'),
        ('expected value',
         'The probability-weighted average of the possible outcomes.',
         'القيمة المتوقعة',
         'The right method when there are many possible outcomes, such as a '
         'volume rebate across hundreds of customers.'),
        ('most likely amount',
         'The single most probable outcome.', 'المبلغ الأكثر احتمالاً',
         'The right method when there are only two or three outcomes, such as a '
         'bonus that is either earned or not.'),
        ('constraint',
         'The rule that variable consideration is included only to the extent a '
         'significant reversal is not probable.', 'القيد على الإيرادات',
         'It is a brake on optimism, and it is asymmetric on purpose.'),
        ('significant financing component',
         'An interest element hidden inside a contract price because payment is '
         'well before or after delivery.', 'عنصر تمويلي جوهري',
         'Ignored where the gap is a year or less, which covers most contracts a '
         'question will give you.'),
    ],

    blocks=[
        ('scene', 'Three steps before any allocation', [
            'The Meridian contract has a stated price of %s. By the end of this '
            'handout you will know that the figure Northwind actually works with '
            'is %s, and why.' % (money(M.stated_price), money(M.price)),
            'Step 1 asks whether there is a contract at all. Step 2 asks how many '
            'separate promises it contains. Step 3 asks how much Northwind expects '
            'to be entitled to, which is not the same as what the paperwork says.',
            'None of these three steps allocates anything. Allocation is step 4, '
            'and it cannot begin until all three of these are settled.',
        ]),
        ('fig', 'ranked', 'Where the stated price goes before anything is allocated',
         [('Stated contract price', M.stated_price, money(M.stated_price), SLATE),
          ('Less the expected volume rebate', M.expected_rebate,
           money(-M.expected_rebate), RUST),
          ('Transaction price — step 3', M.price, money(M.price), GOODS)],
         'One subtraction, and it is an estimate rather than a fact. Part 3 is '
         'about how that estimate is made.'),

        ('part', 'Part 1 · Step 1', 'is there a contract?'),

        ('task', 'Exercise 2A',
         'State the criteria that make an agreement a contract for this purpose.',
         'Read and complete. Write one word in each space.',
         ['Handout 1, for who counts as a customer.'],
         ['Blank 1 is the quality that makes an agreement a contract in law, and '
          'it does not depend on paperwork.',
          'Blank 3 is about the customer rather than about the agreement.',
          'The last blank is what a company does with cash received under an '
          'arrangement that fails the test.']),
        ('fill', 'R2',
         ['A contract exists when the parties have approved the arrangement, the '
          'rights and the payment terms can be identified, and the agreement is '
          '{enforceable}. It need not be written: an oral order accepted and acted '
          'upon is a contract.',
          'Two further conditions matter. The arrangement must have commercial '
          '{substance}, so that the risk or timing of the entity’s cash flows '
          'is genuinely expected to change. And it must be probable that the entity '
          'will {collect} what it is entitled to, which is a judgement about this '
          'customer rather than about the agreement.',
          'Where an arrangement fails the test, revenue is not recognised at all. '
          'Any cash already received is held as a {liability} until either the '
          'criteria are met or the money becomes non-refundable with nothing left '
          'to deliver.'],
         {'enforceable': ('Enforceability, not paperwork, is the test.', ''),
          'substance': ('A circular arrangement that changes nothing fails here.',
                        ''),
          'collect': ('A judgement about the customer’s ability to pay.',
                      'Students read collectability as a measurement problem. At '
                      'step 1 it is a gate: fail it and there is no contract.'),
          'liability': ('Held, not recognised.', '')},
         ['written', 'profit', 'revenue']),
        ('fig', 'fork', 'Step 1, as a gate rather than a measurement',
         [('Approved, rights identifiable, enforceable, commercial substance?',
           'YES → continue to the collectability test', OK),
          ('Is collection of the consideration probable?',
           'YES → there is a contract; go to step 2', GOODS),
          ('Either test failed?',
           'NO contract: hold any cash as a liability and recognise nothing', RUST)]),

        ('part', 'Part 2 · Step 2', 'how many promises?'),

        ('prose', 'A contract may contain one promise or twenty. The unit that '
                  'matters is the performance obligation, and a promise becomes '
                  'one only if it is distinct. Distinct has two limbs, and both '
                  'have to hold.', 'R2'),
        ('prose', 'The first limb looks at the item: can the customer benefit from '
                  'it on its own, or together with resources it already has? The '
                  'second looks at the contract: is the promise separately '
                  'identifiable, or has the seller in substance promised a single '
                  'combined output that the individual items are merely inputs to?',
                  'R2'),

        ('task', 'Exercise 2B',
         'Apply both limbs of the distinct test to the three Meridian promises.',
         'Complete the table. Write yes or no in the last column, and be ready to '
         'say which limb decided it.',
         ['Exercise 2A, and the two paragraphs above.'],
         ['Ask the first limb first: could Meridian get a benefit from this on its '
          'own?',
          'Then ask the second: is Northwind selling three things, or one combined '
          'thing that these are inputs to?',
          'All three promises here are distinct. The exercise after this one shows '
          'a contract where they are not.']),
        ('table', _SSPH,
         [['%s flow controllers' % num(M.units), money(M.ssp_goods),
           '______________'],
          ['Installation on site', money(M.ssp_install), '______________'],
          ['24 months of technical support', money(M.ssp_support),
           '______________'],
          ['Total of the standalone selling prices', money(M.ssp_total), '']],
         GOODS, _SSPW),
        ('answers', 3),
        ('fig', 'matrix', 'The two limbs of distinct, applied',
         ['Flow controllers', 'Installation', 'Technical support'],
         ['Benefit on its own?', 'Separately identifiable?'],
         [['Yes — usable with Meridian’s own plant',
           'Yes — sold separately all the time'],
          ['Yes — any contractor could install them',
           'Yes — not a service that transforms the goods'],
          ['Yes — support has value on its own',
           'Yes — its own 24-month promise']],
         'Three promises, three performance obligations. Both limbs hold for each.'),

        ('task', 'Exercise 2C',
         'Decide how many performance obligations a contract contains when the '
         'second limb fails.',
         'Sort each contract by how many performance obligations it contains.',
         ['Exercise 2B'],
         ['The second limb is the one that fails in a construction case: the parts '
          'are inputs to one combined output.',
          'A good sold with a warranty that only assures it works is not two '
          'promises. A warranty that provides an extra service is.',
          'Count the promises the customer could sensibly have bought separately.']),
        ('sortgrid',
         ['The contract', 'ONE OBLIGATION', 'TWO OR MORE OBLIGATIONS'],
         ['Bricks, labour and design, to build one wall',
          'Controllers, installation and 24 months of support',
          'A laptop sold with a one-year assurance warranty',
          'A laptop sold with a three-year extended service plan',
          'Software, plus significant customisation that transforms it',
          'A machine, plus a separate annual maintenance contract'],
         ['ONE OBLIGATION', 'TWO OR MORE OBLIGATIONS', 'ONE OBLIGATION',
          'TWO OR MORE OBLIGATIONS', 'ONE OBLIGATION', 'TWO OR MORE OBLIGATIONS'],
         'The wall and the customised software both fail the second limb: the '
         'items are inputs to one combined output, not separable promises.'),
        ('fig', 'scale',
         'ASSURANCE WARRANTY — NOT A SEPARATE PROMISE',
         ['Only promises the product works as specified',
          'No separate price could be charged for it',
          'Accounted for as a provision, not as revenue',
          'One performance obligation'],
         'SERVICE WARRANTY — A SEPARATE PROMISE',
         ['Promises more than the product working',
          'The customer could buy it separately',
          'Part of the transaction price is allocated to it',
          'Two performance obligations']),

        ('part', 'Part 3 · Step 3', 'what we expect to be entitled to'),

        ('task', 'Exercise 2D',
         'Estimate variable consideration using the right method, and apply the '
         'constraint.',
         'Read and complete. This passage is written at exam pitch.',
         ['Exercises 2B and 2C'],
         ['Two methods exist and they are not interchangeable. The number of '
          'possible outcomes decides which.',
          'Blank 3 is the rule that limits how much of an estimate may be '
          'included.',
          'The last blank is the transaction price for the Meridian contract, and '
          'it is a figure you can compute.']),
        ('fill', 'R3',
         ['The stated price of the Meridian contract is %s, but Northwind has '
          'offered a rebate of %s if Meridian places a further order next year. '
          'Either the rebate is earned or it is not, so with only two possible '
          'outcomes the estimate uses the most {likely} amount rather than a '
          'probability-weighted average.' % (money(M.stated_price),
                                             money(M.expected_rebate)),
          'Where instead there were hundreds of possible outcomes — a '
          'volume rebate across a whole customer base, say — the appropriate '
          'method would be the {expected} value, which weights each outcome by its '
          'probability.',
          'Whichever method is used, the amount included is limited by the '
          '{constraint}: variable consideration is brought into the transaction '
          'price only to the extent that a significant reversal of cumulative '
          'revenue is not probable. It is a deliberate brake on optimism.',
          'Northwind judges the further order probable, so it expects to pay the '
          'rebate. The transaction price for step 4 is therefore %s less %s, which '
          'is {%s}.' % (money(M.stated_price), money(M.expected_rebate),
                        money(M.price))],
         {'likely': ('Two outcomes, so the most likely amount.', ''),
          'expected': ('Many outcomes, so a probability-weighted average.',
                       'Students use expected value for a binary bonus, which '
                       'produces a figure that cannot actually occur.'),
          'constraint': ('A brake on optimism, applied after the estimate.', ''),
          money(M.price): ('%s − %s.' % (money(M.stated_price),
                                              money(M.expected_rebate)), '')},
         [money(M.stated_price), 'fixed', 'probable']),
        ('fig', 'buckets', 'Which estimation method, and when',
         [('MOST LIKELY AMOUNT', GOODS,
           ['Two or three outcomes', 'A bonus: earned or not',
            'A penalty: incurred or not', 'The Meridian rebate', '']),
          ('EXPECTED VALUE', SERV,
           ['Many possible outcomes', 'Volume rebates across a customer base',
            'Returns across thousands of sales', 'A probability-weighted average',
            '']),
          ('THEN, EITHER WAY', RUST,
           ['Apply the constraint', 'Include only what will not significantly '
            'reverse', 'Reassess at each reporting date', '', ''])],
         'Pick the method from the shape of the uncertainty, not from which figure '
         'you prefer.'),

        ('task', 'Exercise 2E',
         'Produce the transaction price and say what has and has not been settled '
         'so far.',
         'Read and complete.',
         ['Exercise 2D'],
         ['Blank 1 is the number of performance obligations identified in Part 2.',
          'Blank 3 names the step that has still not been done.',
          'The last blank is the thing that cannot be done until step 4 is '
          'complete.']),
        ('fill', 'R2',
         ['Three steps are now settled. There is a contract, it contains {three} '
          'performance obligations, and the transaction price is %s after the '
          'expected rebate has been deducted.' % money(M.price),
          'Notice what has not happened. The %s of standalone selling prices '
          'exceeds the transaction price by %s, and that {discount} has not yet '
          'been attributed to anything.'
          % (money(M.ssp_total), money(M.discount)),
          'Attributing it is step {4}, and until it is done Northwind cannot say '
          'how much of the contract belongs to the controllers, how much to the '
          'installation, and how much to the support.',
          'And until that is known, step 5 cannot be done either, because there is '
          'nothing to {recognise} when each obligation is satisfied. Handout 3 '
          'does both.'],
         {'three': ('Controllers, installation, support.', ''),
          'discount': ('%s of standalone prices against a %s price.'
                       % (money(M.ssp_total), money(M.price)), ''),
          '4': ('Allocation is step 4.', ''),
          'recognise': ('No allocated amount, nothing to recognise.',
                        'Students jump to recognising the whole contract price on '
                        'delivery, which brings two years of support revenue into '
                        'the wrong year.')},
         ['two', 'premium', '5']),
        ('fig', 'bridge',
         'Standalone selling prices', M.ssp_total,
         [('Discount still to be attributed — step 4', -M.discount)],
         'Transaction price', M.price),

        ('watch', 'The discount of %s is spread across the obligations in '
                  'proportion to their standalone selling prices. It is not '
                  'applied to whichever promise is delivered last, and it is not '
                  'ignored. Handout 3 does the arithmetic.'
                  % money(M.discount)),

        ('part', 'Part 4 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A contract promises a machine and a three-year extended service '
                'plan that the customer could have bought separately. The number '
                'of performance obligations is:',
         ['One, because both relate to the same machine',
          'Two, because each is distinct',
          'Three, one for each year of the service plan',
          'One, because the service plan is a warranty'],
         1, 'Level B',
         'Both limbs of the distinct test hold for each promise, so there are two '
         'obligations. (C) confuses the number of obligations with the pattern of '
         'satisfying one of them. (D) would be right for an assurance warranty, '
         'which only promises the machine works.'),

        ('mcq', 'A contractor agrees to build a single warehouse, supplying '
                'design, materials and labour. The number of performance '
                'obligations is:',
         ['Three, because design, materials and labour are each capable of '
          'benefiting the customer',
          'One, because the individual items are inputs to one combined output',
          'Two, separating design from construction',
          'One, because construction contracts always contain a single obligation'],
         1, 'Level C',
         'The first limb may well be satisfied, but the second is not: the items '
         'are inputs to a combined output the customer contracted for. (A) applies '
         'only the first limb. (D) states a rule that does not exist — the '
         'test is applied to the facts each time.'),

        ('mcq', 'A seller will receive a $100,000 bonus if a project finishes early '
                'and nothing if it does not. It judges early completion 80% '
                'likely. The amount of variable consideration estimated using the '
                'appropriate method is:',
         ['$80,000, the expected value', '$100,000, the most likely amount',
          '$0, until the bonus is certain', '$50,000, the midpoint'],
         1, 'Level C',
         'With two outcomes, the most likely amount is the appropriate method, and '
         'that is $100,000. (A) applies expected value to a binary outcome and '
         'produces a figure that cannot occur. (C) ignores the requirement to '
         'estimate. The constraint is then applied separately to test whether the '
         'estimate may be included.'),

        ('mcq', 'The constraint on variable consideration requires that such '
                'amounts be included in the transaction price only to the extent '
                'that:',
         ['The amount has been received in cash',
          'A significant reversal of cumulative revenue recognised is not probable',
          'The customer has confirmed the amount in writing',
          'The amount can be measured to within 5%'],
         1, 'Level B',
         'That is the rule as written. (A) would defeat the purpose of estimating '
         'at all. (C) and (D) invent thresholds the standard does not contain. The '
         'constraint is deliberately asymmetric: it brakes optimism and not '
         'caution.'),

        ('mcq', 'An arrangement fails the collectability criterion in step 1. The '
                'seller has received a $30,000 non-refundable deposit. It should:',
         ['Recognise $30,000 of revenue immediately',
          'Recognise no revenue and present the $30,000 as a liability until the '
          'criteria are met or the obligations are discharged',
          'Recognise $30,000 as a gain',
          'Recognise revenue as the goods are delivered, ignoring step 1'],
         1, 'Level C',
         'Failing step 1 means there is no contract for accounting purposes, so '
         'nothing may be recognised; cash received is held. (D) is the tempting '
         'answer because the goods are real, but the model is sequential and step '
         '1 is a gate.'),

        ('mcq', 'The Meridian contract has a stated price of %s and an expected '
                'rebate of %s judged probable. The transaction price is:'
                % (money(M.stated_price), money(M.expected_rebate)),
         [money(M.stated_price), money(M.price), money(M.ssp_total),
          money(M.stated_price + M.expected_rebate)],
         1, 'Level A',
         '%s − %s = %s. (A) ignores the variable consideration entirely. (C) '
         'is the sum of standalone selling prices, which is a different figure '
         'used in step 4. (D) adds the rebate instead of deducting it.'
         % (money(M.stated_price), money(M.expected_rebate), money(M.price))),

        ('mcq', 'Which of the following is true of a significant financing '
                'component in a contract?',
         ['It is recognised in every contract where payment is not immediate',
          'It may be ignored where the period between transfer and payment is one '
          'year or less',
          'It increases revenue by the amount of interest implied',
          'It applies only to contracts with government customers'],
         1, 'Level B',
         'The practical expedient removes the question for gaps of a year or less, '
         'which covers most contracts an exam will set. (C) is backwards: the '
         'financing element is separated out of revenue and presented as interest. '
         '(D) is invented.'),

        ('tip', 'Work the steps in order and write the step number beside each '
                'figure you produce. Most wrong answers in this topic come from '
                'allocating before the transaction price has been settled, or from '
                'recognising before the allocation has been done.'),
    ],

    key_extra=[
        ('h3', 'Exercise 2B · the completed table'),
        ('table', _SSPH,
         [['%s flow controllers' % num(M.units), money(M.ssp_goods),
           'Yes — both limbs hold'],
          ['Installation on site', money(M.ssp_install),
           'Yes — any contractor could do it'],
          ['24 months of technical support', money(M.ssp_support),
           'Yes — its own 24-month promise'],
          ['Total of the standalone selling prices', money(M.ssp_total),
           'Three performance obligations']],
         GOODS, _SSPW),
        ('bullets', [
            'Step 1: there is a contract — approved, enforceable, with '
            'commercial substance, and collection is probable.',
            'Step 2: three performance obligations.',
            'Step 3: the transaction price is %s, after deducting the %s rebate '
            'estimated by the most likely amount.'
            % (money(M.price), money(M.expected_rebate)),
            'Still undone: the %s discount has not been attributed to anything. '
            'That is step 4, in Handout 3.' % money(M.discount),
        ]),
    ],
)
