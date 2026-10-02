# -*- coding: utf-8 -*-
"""Volume 2, Handout 1 — When Has a Company Earned It?

Covers A.2(x): applying revenue recognition principles to various types of
transaction.
"""
from fadata import N, M, Y, PY
from data import money, num

GOODS, SERV, TIME, SLATE = '6D3F7E', '1F7A6A', 'C9762E', '44506B'
RUST, OK = 'B2531F', '2B6CB0'

HANDOUT = dict(
    n=1,
    title='When Has a Company Earned It?',
    subtitle='Cash arriving is not revenue, and an invoice sent is not revenue. '
             'One test decides, and it has nothing to do with either of them.',
    register='R1 throughout, ending at R2',

    lang=dict(
        register='R1 Teaching English. Short sentences, one idea each. The '
                 'vocabulary of this volume is introduced here.',
        collocations=['recognise revenue', 'transfer control of a good',
                      'satisfy a performance obligation',
                      'enter into a contract with a customer',
                      'enforceable rights and obligations',
                      'the customer obtains control'],
        pairs=['receive cash / recognise revenue',
               'deliver / invoice', 'customer / counterparty',
               'risk and reward / control'],
        nots=['Receiving cash is not earning it. A deposit is a liability until '
              'the company does something for it.',
              'Sending an invoice is not earning it either. An invoice is a '
              'request for payment, not evidence of performance.'],
    ),

    objectives=[
        'State the single event that triggers revenue recognition.',
        'Say why cash received in advance is a liability rather than revenue.',
        'Identify who the customer is in a transaction, and why it matters.',
        'Apply the control test to goods, to services, and to a combination of '
        'both.',
        'Name the five steps and say what each one decides.',
    ],

    terms=[
        ('revenue',
         'Income arising from the activities an entity is in business to carry '
         'on.', 'الإيرادات',
         'Only from ordinary activities. Selling an old van produces a gain, not '
         'revenue, however large it is.'),
        ('customer',
         'A party that has contracted to obtain goods or services that are an '
         'output of the entity’s ordinary activities.', 'العميل',
         'Not every counterparty is a customer. A partner sharing the risk of a '
         'joint activity is not one, and the standard does not apply to them.'),
        ('contract',
         'An agreement between two or more parties that creates enforceable '
         'rights and obligations.', 'العقد',
         'It need not be written. What it must be is enforceable, and that is a '
         'question of law rather than of paperwork.'),
        ('performance obligation',
         'A promise in a contract to transfer a good or service that stands on '
         'its own.',
         'التزام الأداء',
         'The unit of account for the whole model. Everything in Handout 2 '
         'depends on identifying these correctly.'),
        ('control',
         'The ability to direct the use of an asset and obtain substantially all '
         'of its remaining benefits.', 'السيطرة',
         'Control is the test. The older rule asked about risks and rewards, and '
         'the exam still writes that phrase into wrong answers.'),
        ('contract liability',
         'An obligation to transfer goods or services for which the entity has '
         'already been paid.', 'التزام العقد',
         'The modern name for deferred revenue or unearned revenue. All three '
         'mean the same thing.'),
    ],

    blocks=[
        ('scene', 'One contract, worked for four handouts', [
            'In October %s Northwind signed its largest contract of the year with '
            '%s, a company that builds municipal water treatment plants.' % (Y,
                                                                             M.customer),
            'Northwind promised three things: %s flow controllers, the '
            'installation of those controllers on site, and twenty-four months of '
            'technical support afterwards. The stated price of the whole package '
            'is %s.' % (num(M.units), money(M.stated_price)),
            'That one contract will occupy this entire volume. By the end of '
            'Handout 3 you will know exactly how much of it belongs to %s, and '
            'the answer is nothing like the whole.' % Y,
            'This handout asks the question underneath all of it: what has '
            'Northwind actually earned?',
        ]),
        ('fig', 'workplace', '%s · the contract signed in October' % N.short,
         [('Ms Haidar', 'Northwind controller', 'h', GOODS),
          ('Mr Saab', 'Meridian procurement', 'm', SERV),
          ('Ms Okonkwo', 'Northwind field engineer', 'w', TIME)],
         [('container', '%s controllers' % num(M.units)),
          ('crane', 'installation on site'), ('clock', '24 months of support'),
          ('money', money(M.stated_price))],
         'Three promises in one contract, and they are not earned at the same '
         'time.'),

        ('part', 'Part 1 · Not cash, not an invoice', 'what actually triggers it'),

        ('task', 'Exercise 1A',
         'State what triggers revenue recognition, and rule out the two things '
         'that do not.',
         'Read and complete. Write one word in each space.',
         ['Nothing — this is the first exercise in the volume.'],
         ['Two of these blanks are things students wrongly believe trigger '
          'revenue. The sentences tell you they do not.',
          'Blank 3 is the single word that does trigger it.',
          'Blank 5 is what cash received in advance becomes instead.']),
        ('fill', 'R1',
         ['Revenue is not recognised when the money arrives. A customer who pays '
          'a deposit in advance has given Northwind {cash}, but Northwind has not '
          'yet done anything for it.',
          'Revenue is not recognised when the invoice is sent either. An '
          '{invoice} is a request for payment. The company can send one early, '
          'late, or not at all, and none of that changes what it has earned.',
          'Revenue is recognised when the customer obtains {control} of what was '
          'promised. Control means the customer can direct the use of the thing '
          'and take substantially all of the benefit from it.',
          'For the controllers, that happens when they are {delivered} and '
          'Meridian can do what it likes with them. For the support, it happens '
          'month by month as the service is provided.',
          'Until then, anything Meridian has paid sits on Northwind’s balance '
          'sheet as a contract {liability}: a promise the company still owes.'],
         {'cash': ('Money in the bank is not performance.', ''),
          'invoice': ('A request for payment, not evidence of earning.', ''),
          'control': ('The one test. Everything else follows from it.',
                      'Students answer with risks and rewards, which was the old '
                      'rule. The exam keeps that phrase alive in wrong answers.'),
          'delivered': ('Control passes on delivery for ordinary goods.', ''),
          'liability': ('Paid for, not yet delivered: an obligation.', '')},
         ['profit', 'order', 'asset']),
        ('fig', 'fork', 'Three events, and only one of them matters',
         [('The customer pays a deposit',
           'NO revenue — a contract liability is recorded instead', RUST),
          ('Northwind sends an invoice',
           'NO revenue — an invoice is a request, not performance', RUST),
          ('The customer obtains CONTROL of what was promised',
           'REVENUE — this, and only this', GOODS)]),

        ('part', 'Part 2 · Control, not risks and rewards',
         'the test and the one it replaced'),

        ('prose', 'The older rule asked whether the risks and rewards of ownership '
                  'had passed. The current rule asks whether control has passed. '
                  'Most of the time the two give the same answer, which is why the '
                  'difference is easy to overlook and worth being careful about.',
                  'R2'),
        ('prose', 'Control is about what the customer can do: direct the use of '
                  'the asset, and obtain substantially all of its remaining '
                  'benefits. A customer who has taken delivery, can sell the goods '
                  'on, and bears the loss if they are damaged has control, even if '
                  'a small warranty obligation remains with the seller.', 'R2'),

        ('task', 'Exercise 1B',
         'Apply the control test to five situations, including two where it is '
         'contested.',
         'Sort each situation into the column that says whether control has '
         'passed.',
         ['Exercise 1A, and the two paragraphs above.'],
         ['Ask what the customer can actually do with the goods, not where the '
          'goods are sitting.',
          'Physical possession is evidence of control, not proof of it. Two of '
          'these turn on exactly that.',
          'The consignment case is the one most students get wrong. Who can '
          'direct the use of the goods while they sit in the shop?']),
        ('sortgrid',
         ['Situation at 31 December %s' % Y, 'CONTROL HAS PASSED',
          'CONTROL HAS NOT PASSED'],
         ['Controllers delivered to Meridian’s site and accepted',
          'Goods sent to a distributor on consignment, unsold',
          'Goods shipped, in transit, title passing on despatch',
          'A deposit received for controllers not yet made',
          'Goods held in Northwind’s warehouse at the customer’s request, '
          'invoiced and separately identified',
          'Installation work half finished on site'],
         ['CONTROL HAS PASSED', 'CONTROL HAS NOT PASSED', 'CONTROL HAS PASSED',
          'CONTROL HAS NOT PASSED', 'CONTROL HAS PASSED',
          'CONTROL HAS NOT PASSED'],
         'Consignment goods are still the seller’s: the distributor can send '
         'them back. The bill-and-hold case is the reverse — the customer '
         'controls goods it has not collected.'),
        ('fig', 'matrix', 'Where the goods are is not the question',
         ['Delivered and accepted', 'On consignment, unsold',
          'Bill and hold, at customer’s request', 'In transit, title passed'],
         ['Who holds the goods', 'Who controls them'],
         [['The customer', 'The customer — revenue'],
          ['The distributor', 'Northwind — no revenue'],
          ['Northwind', 'The customer — revenue'],
          ['The carrier', 'The customer — revenue']],
         'Two of these four separate possession from control, and they separate it '
         'in opposite directions.'),

        ('part', 'Part 3 · Who is the customer?',
         'the question asked before any of the others'),

        ('task', 'Exercise 1C',
         'Identify the customer, and say why some counterparties are not '
         'customers.',
         'Read and complete.',
         ['Exercise 1B'],
         ['Blank 1 is the phrase that defines what a customer is contracting to '
          'obtain.',
          'Blank 2 is the kind of arrangement where the other party shares the '
          'risk instead of buying an output.',
          'The last blank is what the company is doing when it merely arranges a '
          'sale for somebody else.']),
        ('fill', 'R2',
         ['A customer is a party that has contracted to obtain goods or services '
          'that are an {output} of the entity’s ordinary activities. '
          'Meridian is plainly a customer: it is buying exactly what Northwind is '
          'in business to sell.',
          'Not every counterparty is. If Northwind entered a {collaboration} with '
          'another manufacturer to develop a new controller, sharing the costs and '
          'the risks of the project, that party would not be a customer, and the '
          'revenue standard would not apply to the arrangement at all.',
          'A third case changes the amount rather than the existence of revenue. '
          'Where Northwind merely arranges for another company’s goods to '
          'reach a buyer, it is acting as an {agent}, and it recognises only the '
          'commission it keeps rather than the whole amount the buyer pays.'],
         {'output': ('An output of ordinary activities, which is the test.', ''),
          'collaboration': ('Sharing risk, not buying an output.', ''),
          'agent': ('Commission only, not the gross amount.',
                    'Students recognise the gross amount for an agent, which can '
                    'multiply reported revenue several times over without changing '
                    'profit at all.')},
         ['principal', 'supplier', 'input']),
        ('fig', 'scale',
         'NORTHWIND AS PRINCIPAL',
         ['Controls the goods before transfer',
          'Sets the price',
          'Bears the inventory risk',
          'Recognises the GROSS amount'],
         'NORTHWIND AS AGENT',
         ['Never controls the goods',
          'Price set by the other party',
          'No inventory risk',
          'Recognises the COMMISSION only']),

        ('part', 'Part 4 · The five steps', 'the map for the rest of the volume'),

        ('task', 'Exercise 1D',
         'Name the five steps and say what each one decides.',
         'Match each step to the question it answers.',
         ['Exercises 1A to 1C'],
         ['The steps are in order, and the order matters: each one needs the '
          'answer from the one before it.',
          'Two of the five are about the amount. Two are about the units. One is '
          'about timing.',
          'Step 5 is the one this handout has been about.']),
        ('match',
         ['Step 1 · Identify the contract',
          'Step 2 · Identify the performance obligations',
          'Step 3 · Determine the transaction price',
          'Step 4 · Allocate the price to the obligations',
          'Step 5 · Recognise revenue as each obligation is satisfied'],
         ['Is there an enforceable agreement with a customer at all?',
          'How many separate promises did we make?',
          'How much do we expect to be entitled to, including estimates?',
          'How much of that total belongs to each promise?',
          'When has the customer obtained control of each one?'],
         ['A', 'B', 'C', 'D', 'E'],
         'Handout 2 works steps 1 to 3. Handout 3 works steps 4 and 5. This '
         'handout has been about the idea underneath step 5.'),
        ('fig', 'ranked', 'The five steps, and where this volume works each one',
         [('Step 1 · the contract', 1, 'Handout 2', SLATE),
          ('Step 2 · the obligations', 2, 'Handout 2', SLATE),
          ('Step 3 · the transaction price', 3, 'Handout 2', SERV),
          ('Step 4 · allocate the price', 4, 'Handout 3', GOODS),
          ('Step 5 · recognise as satisfied', 5, 'Handout 3', TIME)],
         'The bar is the step number, not an amount. Steps are worked in order, '
         'because each one needs the answer from the step before it.'),

        ('watch', 'The whole of this contract is %s, and Northwind will recognise '
                  '%s of it in %s. Everything in Handouts 2 and 3 exists to get '
                  'from the first figure to the second.'
                  % (money(M.stated_price), money(M.recognised), Y)),

        ('part', 'Part 5 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A customer pays a $50,000 deposit in November for equipment to be '
                'manufactured and delivered the following March. At 31 December '
                'the seller should report:',
         ['Revenue of $50,000',
          'A contract liability of $50,000',
          'A receivable of $50,000',
          'Neither revenue nor a liability, because the equipment does not exist '
          'yet'],
         1, 'Level A',
         'Cash has been received for a promise not yet performed, so an obligation '
         'is recognised. (A) recognises revenue before anything has been earned. '
         '(C) reverses the position — the seller owes goods, not the other way '
         'round. (D) ignores the cash that has actually changed hands.'),

        ('mcq', 'Under the current revenue standard, revenue from the sale of goods '
                'is recognised when:',
         ['The risks and rewards of ownership have transferred to the buyer',
          'The customer obtains control of the goods',
          'The invoice is issued to the customer',
          'Payment is received from the customer'],
         1, 'Level A',
         'Control is the test. (A) is the superseded rule and the most frequently '
         'chosen wrong answer, because it is still taught in older texts. (C) and '
         '(D) are administrative events the seller can largely choose the timing '
         'of.'),

        ('mcq', 'Northwind ships goods to a distributor on consignment. The '
                'distributor may return any unsold goods at any time. On shipment, '
                'Northwind should:',
         ['Recognise revenue, because the goods have left its warehouse',
          'Recognise revenue, because the distributor has physical possession',
          'Recognise no revenue, because control has not passed to the '
          'distributor',
          'Recognise half the revenue, reflecting expected sell-through'],
         2, 'Level B',
         'The distributor cannot direct the use of the goods and can hand them '
         'back, so control has not passed. (A) and (B) both mistake possession for '
         'control. (D) is not a treatment the standard permits.'),

        ('mcq', 'A travel website arranges hotel rooms for travellers. It never '
                'controls the rooms, the hotel sets the price, and the website '
                'keeps 12% of each booking. The website should recognise revenue '
                'equal to:',
         ['The full amount paid by the traveller',
          '12% of the amount paid by the traveller',
          'The amount paid by the traveller less the cost of the room, presented '
          'as cost of sales',
          'Nothing until the traveller completes the stay'],
         1, 'Level C',
         'It is acting as an agent, so revenue is the commission. (A) and (C) '
         'present the gross amount, which can multiply reported revenue many times '
         'over without changing profit by a cent — which is exactly why the '
         'distinction is examined.'),

        ('mcq', 'Which of the following is NOT a customer for the purposes of the '
                'revenue standard?',
         ['A buyer of goods the entity routinely sells',
          'A party sharing the costs and risks of a joint development project '
          'with the entity',
          'A government department buying the entity’s standard product',
          'A distributor purchasing goods for resale'],
         1, 'Level B',
         'A collaborator sharing risk is not obtaining an output of the '
         'entity’s ordinary activities, so the revenue standard does not '
         'apply to the arrangement. The other three are all buying what the entity '
         'is in business to sell.'),

        ('mcq', 'Goods are held in the seller’s warehouse at the '
                'customer’s written request, invoiced, separately identified '
                'and ready to ship. Control:',
         ['Has not passed, because the seller still has physical possession',
          'Has passed, provided the arrangement is substantive and the goods are '
          'identified as the customer’s',
          'Has passed only when the goods are collected',
          'Cannot pass while the seller holds the goods'],
         1, 'Level C',
         'This is a bill-and-hold arrangement, and control can pass although the '
         'seller holds the goods. (A) and (D) treat possession as decisive, which '
         'the consignment case in this handout already disproved in the opposite '
         'direction.'),

        ('mcq', 'Which step of the five-step model determines how much of a '
                'contract’s total price belongs to each promise?',
         ['Step 2 · identify the performance obligations',
          'Step 3 · determine the transaction price',
          'Step 4 · allocate the transaction price',
          'Step 5 · recognise revenue when an obligation is satisfied'],
         2, 'Level A',
         'Step 4 does the allocation. Step 2 decides how many promises there are, '
         'step 3 decides the total, and step 5 decides when each allocated amount '
         'is recognised. The order matters, and allocation cannot be done before '
         'the total is known.'),

        ('tip', 'Whenever a question describes a payment, stop and ask what the '
                'seller has actually done for the customer so far. The answer to '
                'that question, not the movement of the money, decides how much '
                'revenue there is.'),
    ],

    key_extra=[
        ('h3', 'The five steps, and what each one decides'),
        ('table', ['Step', 'Question it answers', 'Worked in'],
         [['1 · Identify the contract',
           'Is there an enforceable agreement with a customer?', 'Handout 2'],
          ['2 · Identify the performance obligations',
           'How many separate promises were made?', 'Handout 2'],
          ['3 · Determine the transaction price',
           'How much do we expect to be entitled to?', 'Handout 2'],
          ['4 · Allocate the transaction price',
           'How much belongs to each promise?', 'Handout 3'],
          ['5 · Recognise revenue',
           'When has control of each promise passed?', 'Handout 3']],
         GOODS, [30, 48, 22]),
    ],
)
