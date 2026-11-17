# -*- coding: utf-8 -*-
"""Foundation 1, Unit 4 - Shopping and Money.

Tills, offers, returns, and then the two readings that carry the weight:
where a household's money actually goes, and how a shopper tells a real
offer from a false one. The online vocabulary of Volume 1 sits in this
unit because this is where a student at this level first meets it: an
account, a password, a link in a message that should not be pressed.
"""

_WEEK = dict(kind='bar',
             title='What a family spends in a week',
             sub='pounds a week, one household of four',
             cats=['Food', 'Housing', 'Travel', 'Other'],
             series=[('Pounds', [96.0, 210.0, 54.0, 72.0])],
             ylab='pounds')

_TWO = dict(kind='bar',
            title='Spending on food, housing and travel in two countries',
            sub='share of household spending, per cent',
            cats=['Food', 'Housing', 'Travel'],
            series=[('Country A', [14.0, 34.0, 13.0]),
                    ('Country B', [27.0, 22.0, 9.0])],
            ylab='per cent')

UNIT = dict(
 n=4, vol=7, level='A1-A2', band='below 4.0',
 theme='Shopping and Money',
 opener=(
   'This unit is about money going out: at a till, in a sale, and in a '
   'message that wants you to press a link. You will read shop notices '
   'and a returns policy, describe what a family spends in a week, '
   'compare two countries, and finish with how to tell a real offer '
   'from a false one. The technique page is recovering from a miss, '
   'which is the difference between losing one mark and losing four.'),

 cycles=[
  dict(
   sub='In the shop',
   step=1,
   read=[
    dict(heading='Bexley Stores: signs at the till',
         kind='Shop notices', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Short notices are read for the one word that differs',
                ['Four notices usually say four different things about '
                 'the same subject. Find the difference, not the '
                 'meaning.',
                 'Numbers and days are the answers. Underline them '
                 'before you read the questions.']),
         paras=[
          'A. Cash only at this till. The card machine here is out of '
          'use and a replacement arrives on Friday.',
          'B. Please have your card ready. This till usually serves '
          'twice as many customers as the others, so a few seconds '
          'saves everybody a minute.',
          'C. Baskets only. Nine items or fewer. A trolley at this till '
          'slows the whole row down.',
          'D. Receipts are needed for any refund. Keep the page from '
          'the till: we cannot simply look it up.'],
         items=[
          ('Which till does not take cards?', ['A', 'B', 'C', 'D'], 0,
           'Notice A: the card machine is out of use.',
           {1: 'Notice B asks customers to have a card ready.', 2: 'Notice C limits the till to baskets of nine items.', 3: 'Notice D is about receipts for refunds.'}),
          ('A new card machine is expected before the weekend.',
           ['True', 'False', 'Not Given'], 0,
           'Notice A says a replacement arrives on Friday.',
           {1: 'The notice names a day, and Friday is before the '
               'weekend.', 2: 'The day is printed on the notice, so it is not left '
               'out.'}),
          ('A customer with ten items may use till C.',
           ['True', 'False', 'Not Given'], 1,
           'Notice C allows nine items or fewer.',
           {0: 'Ten is more than the nine the notice allows.', 2: 'The limit is printed on the notice itself.'}),
          ('Which till is the busiest?', ['A', 'B', 'C', 'D'], 1,
           'Notice B: twice as many customers as the others.',
           {0: 'Notice A is the till with no card machine.', 2: 'Notice C is the baskets-only till.', 3: 'Notice D is about receipts for refunds.'}),
          ('A refund can be given without a receipt.',
           ['True', 'False', 'Not Given'], 1,
           'Notice D says receipts are needed for any refund.',
           {0: 'The notice says the opposite of this.', 2: 'The notice states the rule, so it is not left out.'})])],
   listen=[
    dict(heading='Paying at the till', part='Part 1',
         task='A short exchange at a supermarket till · note completion', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Cashier', 'Good afternoon. Do you have a loyalty card?'),
          ('Customer', 'I do, but I cannot find it.'),
          ('Cashier', 'I can look it up with your telephone number.'),
          ('Customer', 'Seven seven one, four two nine.'),
          ('Cashier', 'Thank you. That is twenty-three pounds forty.'),
          ('Customer', 'Is the bread in the offer?'),
          ('Cashier', 'The offer is two for one, and you have one, so '
           'no. The second one is free if you want to go back.'),
          ('Customer', 'I will leave it. Card, please.'),
          ('Cashier', 'The machine on this till is slow today. Press '
           'the green button and then wait.'),
          ('Customer', 'It says to try again.'),
          ('Cashier', 'Try once more. If it fails twice, I will move '
           'you to till four.'),
          ('Customer', 'It has gone through.'),
          ('Cashier', 'Do you want the receipt?'),
          ('Customer', 'Yes, please. I may bring the kettle back.'),
          ('Cashier', 'Then keep it. Fourteen days with a receipt, and '
           'nothing at all without one.')],
         items=[
          ('The customer gives a ____________ number instead of a '
           'card.', None, 'telephone',
           'The cashier can look the account up with it.'),
          ('The total is twenty-three pounds ____________.', None,
           'forty', 'The cashier says it after the loyalty card.'),
          ('The bread offer is ____________ for one.', None, 'two',
           'The customer has only one, so it does not apply.'),
          ('If the card fails twice, the customer moves to till '
           '____________.', None, 'four',
           'The machine on this till is slow today.'),
          ('Goods can be returned within ____________ days with a '
           'receipt.', None, 'fourteen',
           'And not at all without one, the cashier says.')])],
   speak=dict(
    part='Part 1', focus='Shops you go to',
    intro='Name the shop, then say why you go there. The reason is the '
          'sentence that is marked.',
    qs=['Where do you do most of your shopping?',
        'Do you prefer small shops or large ones?',
        'How do you usually pay?',
        'Do you enjoy shopping?'],
    shape=[('answer', 'I do most of my shopping at a supermarket near '
            'the station.'),
           ('support', 'It is open until ten, which matters because I '
            'finish work at eight.'),
           ('follow-up', 'For fruit I use the market instead, because '
            'the quality is better and it costs less.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a friend to buy something for you',
         prompt='You cannot get to the shops. Write a note to a friend. '
                'In your note: ask your friend to buy something; say '
                'exactly what you need; say how you will pay them back.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hi Omar,',
          'Could you get a few things for me when you go to Bexley '
          'Stores? I am waiting in for an engineer and cannot leave the '
          'flat.',
          'I need a loaf of bread, two litres of milk and a packet of '
          'the green tea, not the ordinary one. If the bread is on the '
          'two for one offer, take both, and I will use the second.',
          'I will pay you back on Thursday when I see you, or I can '
          'send it tonight if you would rather. Thank you, and tell me '
          'what it comes to.',
          'Lena'],
         notes=['The reason comes before the list, so the friend knows '
                'why they are being asked.',
                'The list is exact: quantity, kind, and what not to '
                'buy. A vague list causes a second message.',
                'Two ways to pay are offered, which makes it easy to '
                'say yes.'],
         criterion=[('All three points answered', 'Task Achievement'),
                    ('An exact list with quantities', 'Task '
                     'Achievement'),
                    ('A clear offer to repay', 'Task Response'),
                    ('A friendly, short note', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present simple questions: do you, does it',
    explain='Use do with I, you, we and they, and does with he, she and '
            'it. The main verb has no -s after does.',
    examples=['Do you have a loyalty card?',
              'Does the offer include bread?',
              'Do they open on Sunday?',
              'Does it cost more at the till?'],
    items=[('(you / have) a receipt?', 'Do you have a receipt?'),
           ('(the shop / open) on Sunday?',
            'Does the shop open on Sunday?'),
           ('(they / take) cards here?', 'Do they take cards here?'),
           ('(it / cost) more than the other one?',
            'Does it cost more than the other one?'),
           ('(we / need) a basket?', 'Do we need a basket?')],
    task='Write each question with do or does.'),
   vocab=[('costs', 'the amounts of money that must be paid'),
          ('usually', 'most of the time'),
          ('rule', 'something that says what you must or must not do'),
          ('speed', 'how fast something moves or happens'),
          ('twice', 'two times'),
          ('itself', 'that thing and nothing else'),
          ('page', 'one side of a sheet of paper'),
          ('simply', 'only, or in an easy way'),
          ('quality', 'how good something is')],
   expr=[('Do you have a loyalty card?', 'the first question at a '
          'till'),
         ('Is this in the offer?', 'checking a price'),
         ('I will leave it, thank you.', 'deciding not to buy'),
         ('Can I have the receipt?', 'asking for proof of purchase')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Prices and offers',
   step=1,
   read=[
    dict(heading='Half price this week: a sale poster',
         kind='Poster', task='Sentence completion and short answer',
         band='gt_short', qtype='Questions 11-15',
         qkind=('note/table/flow-chart completion',),
         paras=[
          'Half price on all winter coats until Saturday. The price on '
          'the label is the price you pay: nothing is added at the '
          'till.',
          'Three for two on all tins and packets. The cheapest of the '
          'three is free, and the offer includes the large package '
          'sizes this week only.',
          'Members save a further five per cent. Join at the desk or '
          'through the link on our page. You will need an email address '
          'and a password, and the card arrives separately in about '
          'nine days.'],
         items=[
          ('The coat offer ends on ____________.', None, 'Saturday',
           'Paragraph 1: half price until then.'),
          ('The price you pay is the price on the ____________.', None,
           'label', 'Paragraph 1: nothing is added at the till.'),
          ('In the three for two offer, which item is free?', None,
           'the cheapest', 'Paragraph 2, of the three bought.'),
          ('Members save a further ____________ per cent.', None,
           'five', 'Paragraph 3, on top of the other offers.'),
          ('The membership card arrives in about ____________ days.',
           None, 'nine', 'Paragraph 3, separately from the account.')])],
   listen=[
    dict(heading='Which offer is better?', part='Part 2',
         task='One speaker comparing two offers · note completion', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Speaker', 'Two shops, the same washing powder, and two '
           'offers that look the same. They are not, and the difference '
           'is about four pounds a month.'),
          ('Speaker', 'The first shop has three for two. You take three '
           'boxes and pay for two, so each box costs you about two '
           'pounds sixty.'),
          ('Speaker', 'The second has half price on one box, which '
           'sounds better and is not, because their ordinary price is '
           'higher. Half of four pounds twenty is two pounds ten, but '
           'you may only have one box at that price.'),
          ('Speaker', 'So which is better depends on how much you use. '
           'If you buy one box a month, the second shop wins. If you '
           'buy three, the first one does, and it is not close.'),
          ('Speaker', 'The lesson is to work out the price for the '
           'amount you actually use. Shops design offers for the '
           'customer who does not do that, and most of us do not.'),
          ('Speaker', 'One more thing. Check whether the offer includes '
           'the large size. Usually it does not, and the large size is '
           'where the real saving is.')],
         items=[
          ('The difference between the offers is about ____________ '
           'pounds a month.', None, 'four',
           'The speaker says so at the start.'),
          ('In the first shop each box costs about two pounds '
           '____________.', None, 'sixty',
           'Three boxes for the price of two.'),
          ('Half of four pounds twenty is two pounds ____________.',
           None, 'ten', 'But only one box may be bought at that price.'),
          ('If you buy ____________ boxes a month the first shop is '
           'better.', None, 'three',
           'If you buy one, the second shop wins.'),
          ('Offers usually do not include the ____________ size.',
           None, 'large', 'Which is where the real saving is.')])],
   speak=dict(
    part='Part 1', focus='Saving money',
    intro='Give one habit, then say what it saves. A number makes the '
          'answer concrete.',
    qs=['Do you try to save money when you shop?',
        'Do you plan what you buy?',
        'Are offers in shops really cheaper?',
        'What do you never spend money on?'],
    shape=[('answer', 'I write a list before I go and I do not buy '
            'anything that is not on it.'),
           ('support', 'That saves me about ten pounds a week, which is '
            'forty a month.'),
           ('follow-up', 'I do not trust offers unless I work out the '
            'price for the amount I actually use.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='What a family spends in a week',
         figure=_WEEK,
         prompt='The chart shows what one family of four spends in a '
                'week. Describe the chart and make one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the weekly spending of one family of four, '
          'divided into four kinds.',
          'Housing takes by far the largest share, at two hundred and '
          'ten pounds. This is more than twice what the family spends '
          'on food, which is ninety-six pounds, and nearly four times '
          'what it spends on travel.',
          'Travel is the smallest at fifty-four pounds, and other '
          'spending is seventy-two.',
          'Housing alone accounts for almost half of the total, so a '
          'change in rent would matter more to this family than a '
          'change in any other price.'],
         notes=['The largest category comes first, with its number.',
                'The comparison uses multiples rather than the word '
                '"more", which is what lifts the band.',
                'The closing sentence draws out what the shape means, '
                'without giving an opinion about it.'],
         criterion=[('Largest and smallest with numbers', 'Task '
                     'Achievement'),
                    ('Comparison using a multiple', 'Task Response'),
                    ('A closing sentence about the shape', 'Coherence '
                     'and Cohesion'),
                    ('All four categories covered', 'Task '
                     'Achievement')])],
   gram=dict(
    point='Comparatives with money: cheaper, more expensive',
    explain='Use than after a comparative. For two prices, say cheaper '
            'than or more expensive than, not more cheap.',
    examples=['The large size is cheaper than two small ones.',
              'This shop is more expensive than the market.',
              'Housing costs more than food.',
              'Travel is the cheapest of the four.'],
    items=[('This shop is (expensive) than the market.',
            'This shop is more expensive than the market.'),
           ('The large box is (cheap) than two small ones.',
            'The large box is cheaper than two small ones.'),
           ('Housing costs (much) than food.',
            'Housing costs more than food.'),
           ('Travel is the (cheap) of the four.',
            'Travel is the cheapest of the four.'),
           ('Tea is (cheap) than coffee here.',
            'Tea is cheaper than coffee here.')],
    task='Write each sentence with the right comparative.'),
   vocab=[('nine', 'the number 9'),
          ('password', 'a secret word that lets you into an account'),
          ('gains', 'things won or added'),
          ('separate', 'not joined to the others'),
          ('package', 'a box or parcel of goods'),
          ('link', 'a word you press to open a page'),
          ('accurate', 'exactly right'),
          ('includes', 'has as one of its parts'),
          ('search', 'to look for something')],
   expr=[('Three for the price of two.', 'describing an offer'),
         ('It sounds better and it is not.', 'warning about an offer'),
         ('Work out the price for what you use.', 'giving practical '
          'advice'),
         ('Does the offer include the large size?', 'the question to '
          'ask')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Taking something back',
   step=2,
   read=[
    dict(heading='Returns: what you need to know',
         kind='Notice', task='Sentence completion, short answer and matching features',
         band='gt_work', qtype='Questions 21-25',
         skill=('A policy is read for the exception, not the rule',
                ['The first line gives the normal rule. The questions '
                 'are usually about the lines after it.',
                 'Words like unless, except and however mark where the '
                 'answers are.']),
         paras=[
          'Goods may be returned within fourteen days with a receipt. '
          'Without a receipt we can offer an exchange only, and at the '
          'price the item is selling for today.',
          'Faulty goods are different. If an item is faulty you may '
          'return it at any time within a year, and the law does not '
          'depend on our policy. We will repair it, replace it or '
          'refund it, and after the first thirty days the choice is '
          'ours rather than yours.',
          'Electrical goods must be returned with the installation '
          'guide and any cable attached. An item without its parts '
          'cannot be sold again.',
          'Earrings and food cannot be returned unless they are '
          'faulty. That is not our rule but the law, and the '
          'alternative every shop follows.'],
         items=[
          ('Which is the best heading for paragraph 1?',
           ['Returning with a receipt, and without one', 'Faulty goods and the law', 'Electrical goods and their parts', 'Earrings and food'],
           0, 'Fourteen days with a receipt; exchange without one.',
           {1: 'Faulty goods are paragraph 2, where the law decides.', 2: 'Electrical goods and their parts are paragraph 3.', 3: 'Earrings and food are the subject of paragraph 4.'}),
          ('Which is the best heading for paragraph 2?',
           ['What cannot be returned at all', 'When the law overrides the shop policy', 'Keeping the guide and the cable', 'The fourteen-day rule'],
           1, 'A year for faulty goods, whatever the policy says.',
           {0: 'What cannot be returned at all is paragraph 4.', 2: 'The guide and the cable are paragraph 3.', 3: 'The fourteen-day rule is paragraph 1.'}),
          ('After thirty days, who chooses between repair and refund?',
           None, 'the shop', 'Paragraph 2: the choice is theirs.'),
          ('Which is the best heading for paragraph 3?',
           ['Returning a coat', 'What must come back with the item', 'Refunds after thirty days', 'Goods that are never returnable'],
           1, 'The guide and any cable, or it cannot be sold again.',
           {0: 'No coat is mentioned anywhere in this text.', 2: 'The thirty days are in paragraph 2.', 3: 'Goods that are never returnable are paragraph 4.'}),
          ('Which cannot be returned unless faulty?',
           ['coats', 'electrical goods', 'food', 'books'], 2,
           'Paragraph 4, along with earrings.',
           {0: 'Coats may be returned within fourteen days.', 1: 'Electrical goods may be returned with their parts.', 3: 'Books are not among the exceptions in paragraph 4.'})])],
   listen=[
    dict(heading='Returning a jacket', part='Part 1',
         task='A conversation at a customer desk · note completion', band='l1',
         qtype='Questions 26-30',
         script=[
          ('Desk', 'Good morning. How can I help?'),
          ('Customer', 'I would like to return this jacket. It is the '
           'wrong size.'),
          ('Desk', 'Do you have the receipt?'),
          ('Customer', 'I have the message on my telephone. Is that '
           'enough?'),
          ('Desk', 'That is fine. It shows the date, which is what we '
           'need. Bought on the second, so you are well inside the '
           'fourteen days.'),
          ('Customer', 'Can I have the money back?'),
          ('Desk', 'Yes, to the same card. It takes three working days '
           'to reach you.'),
          ('Customer', 'Could I exchange it for the next size '
           'instead?'),
          ('Desk', 'We have the next size in black but not in green.'),
          ('Customer', 'Then I will take the refund.'),
          ('Desk', 'One moment. Is the label still attached?'),
          ('Customer', 'Yes, I did not take it off.'),
          ('Desk', 'Good. Without the label it would be an exchange '
           'only. Press the green button on the machine, please.'),
          ('Customer', 'Done.'),
          ('Desk', 'Three working days. Keep the message until it '
           'arrives.')],
         items=[
          ('Why is the jacket being returned?', None, 'the wrong size',
           'The first thing the customer says.'),
          ('Instead of a paper receipt the customer has a '
           '____________.', None, 'message',
           'On a telephone, and it shows the date.'),
          ('The jacket was bought on the ____________.', None,
           'second', 'Well inside the fourteen days.'),
          ('How many working days does the refund take?', None,
           'three', 'And goes back to the same card.'),
          ('Without the ____________ it would be an exchange only.',
           None, 'label', 'The customer did not take it off.')])],
   speak=dict(
    part='Part 2', focus='A thing you bought',
    longturn=[('I am going to talk about something I bought recently. It is a '
               'pair of walking boots.'),
              ('I bought them about two months ago in a shop in the centre of '
               'my town. The shop sells clothes for walking and camping. I did '
               'not buy them on the internet, because I wanted to try them on '
               'first.'),
              ('I chose them for two reasons. The first reason is the price. '
               'They were not the cheapest boots in the shop, and not '
               'the most expensive. They cost about sixty. The second '
               'reason is that the man in the shop measured my feet. '
               'He said my old size was too small, and he was right.'),
              ('I am very happy with them. I have used them about ten times, '
               'in rain and in dry weather, and my feet have stayed '
               'dry and have not hurt. One small problem is that they '
               'are heavy, so I do not wear them in town. But for '
               'walking in the hills they are much better than my old '
               'ones, and I think they will last for years.')],
    intro=('One minute to prepare. Follow the four bullets in order and do '
           'not stop to correct yourself.'),
    cue=('Describe something you bought recently.',
         ['say what it was and where you bought it',
          'say why you chose it',
          'say whether you were happy with it',
          'and explain whether you would buy it again']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Did you look at the price in other shops?',
        'Who did you buy it for?'],
    shape=[('answer', 'I bought a winter jacket last month from a shop '
            'in the town centre.'),
           ('support', 'It was half price, which is why I looked at it '
            'at all.'),
           ('support', 'I chose it because it has deep pockets and it '
            'washes well.'),
           ('follow-up', 'The size was wrong at first and I had to take '
            'it back, but the second one has been perfect.')]),
   write=[
    dict(task='Task 2', heading='Should shops take everything back?',
         prompt='Some people think shops should accept any item a '
                'customer returns. Others think there should be limits. '
                'What do you think? Give your opinion and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Shops should take most things back, but not everything',
               [('Easy returns are good for customers and for shops',
                 ['a customer who can return something buys more',
                  'a shop that refuses once loses that customer for '
                  'years']),
                ('Some limits protect other customers',
                 ['food and earrings cannot be sold again safely',
                  'the cost of accepting everything appears in every '
                  'price'])]),
         model=[
          'Some people believe a shop should accept any return. I think '
          'most returns should be easy, but that a few limits are '
          'fair.',
          'Easy returns help both sides. A customer who knows an item '
          'can be returned will buy something they are unsure about, '
          'and most of those items are kept. A shop that refuses once '
          'can lose that customer for years, which costs far more than '
          'one refund.',
          'However, some limits protect everybody. Food and earrings '
          'cannot be sold again safely, so a shop that took them back '
          'would simply throw them away. The cost of that does not '
          'disappear: it appears in the price every other customer '
          'pays.',
          'So my view is that returns should be simple and quick, with '
          'a small number of exceptions that are printed clearly before '
          'the sale rather than explained afterwards.'],
         notes=['The opinion is not one of the two extremes, and it is '
                'stated in the first paragraph anyway.',
                'The second reason explains who pays, which is the kind '
                'of support that is hard to argue with.',
                'The conclusion adds a condition rather than repeating '
                'the opinion.'],
         criterion=[('A clear opinion in the first paragraph',
                     'Task Response'),
                    ('Two reasons of different kinds', 'Task '
                     'Response'),
                    ('A conclusion that adds a condition', 'Coherence '
                     'and Cohesion'),
                    ('Past and present used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Past simple questions and negatives',
    fix=dict(
     text=('I buyed a pair of walking boots two months ago. I did not bought '
           'them on the internet, because I wanted to try them on. Where you '
           'did buy them? In a shop in the centre of the town. They cost about '
           'sixty, and the man in the shop measured my feet. He said my old '
           'size was too small, and he was right.'),
     faults=[('I buyed a pair of walking boots',
              'I bought a pair of walking boots',
              ('Buy is irregular: the past form is bought, and there is no '
               'form buyed.')),
             ('I did not bought them',
              'I did not buy them',
              ('After did not the verb goes back to its plain form: did not '
               'buy.')),
             ('Where you did buy them?',
              'Where did you buy them?',
              ('In a question did comes before the subject: did you, not you '
               'did.'))]),
    explain='Use did for questions and did not for negatives. The main '
            'verb goes back to its plain form.',
    examples=['Did you keep the receipt?',
              'I did not take the label off.',
              'Where did you buy it?',
              'It did not fit.'],
    items=[('(you / keep) the receipt?', 'Did you keep the receipt?'),
           ('I (not take) the label off.',
            'I did not take the label off.'),
           ('(where / you / buy) it?', 'Where did you buy it?'),
           ('It (not fit).', 'It did not fit.'),
           ('(they / give) you a refund?',
            'Did they give you a refund?')],
    task='Write each sentence as a past question or negative.'),
   vocab=[('travel', 'to go from one place to another'),
          ('describe', 'to say what something is like'),
          ('alternative', 'another choice'),
          ('installation', 'putting equipment in and setting it up'),
          ('connection', 'a join between two things'),
          ('guide', 'a book or person that shows you how'),
          ('invisible', 'that cannot be seen'),
          ('attached', 'joined on'),
          ('replacement', 'a new one that takes the place of the old')],
   expr=[('I would like to return this.', 'opening a return'),
         ('Do you have the receipt?', 'the first question you are '
          'asked'),
         ('Could I exchange it instead?', 'asking for an alternative'),
         ('It is the wrong size.', 'giving the reason for a return')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Where money goes',
   step=2,
   read=[
    dict(heading='What households spend, and why it differs',
         kind='Short factual article',
         task='Short answer, sentence completion and matching features',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Ask a family where its money goes and the answer is usually '
          'wrong. People are not lying. Spending that happens once a '
          'month is remembered, and spending that happens every day is '
          'not. When households keep an accurate record for a month, '
          'the same pattern appears almost everywhere. Housing takes '
          'the largest share. Food takes the second, and travel a '
          'smaller share than almost anybody expects.',
          'The interesting differences are between countries rather '
          'than between families. In a richer country, housing can '
          'reach a third of all spending while food falls to around a '
          'seventh. In a poorer country those two shares move towards '
          'each other, and food can be the larger of the two. This is '
          'one of the most reliable measurements in the subject: as '
          'income rises, the share spent on food falls, even though the '
          'amount spent on food rises.',
          'What is discussed less is how the remaining share behaves. '
          'Spending on equipment, on a television, on anything that '
          'exists to be owned rather than eaten, grows faster than '
          'income in the years when a country becomes richer, then '
          'settles. Companies design products for that window and '
          'advertise hardest inside it, which is one reason the same '
          'goods become popular in one country a decade after another.'],
         items=[
          ('Which share of spending is the largest?', None, 'housing',
           'Paragraph 1, in almost every record kept.'),
          ('Spending that happens every ____________ is the hardest to '
           'remember.', None, 'day',
           'Paragraph 1: monthly spending is remembered.'),
          ('In a richer country housing can reach a ____________ of '
           'all spending.', None, 'third',
           'Paragraph 2, while food falls to a seventh.'),
          ('As income rises, the ____________ spent on food falls.',
           None, 'share',
           'Paragraph 2, although the amount rises.'),
          (
           'Which grows faster than income while a country becomes '
           'richer?',
           ['food', 'housing', 'spending on goods to own', 'travel'], 2,
           'Paragraph 3, before it settles.',
           {0: 'The share spent on food falls as income rises.', 1: 'Housing takes the largest share but does not outgrow '
               'income.', 3: 'Travel takes a smaller share than anybody expects.'}),
          ('Companies advertise hardest inside that ____________.',
           None, 'window', 'Paragraph 3, which is when goods spread.')])],
   listen=[
    dict(heading='A talk about family spending', part='Part 4',
         task='A short lecture to first-year students · note completion', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I am going to give you one law, and it is as '
           'close to a law as this subject has. As a household gets '
           'richer, the share of its money that goes on food falls.'),
          ('Speaker', 'Notice what that does not say. It does not say '
           'the family spends less on food. It spends more, and better. '
           'What falls is the share, because everything else grows '
           'faster.'),
          ('Speaker', 'This became important because it gives you a way '
           'to compare countries without trusting what anybody says '
           'about income. If food is a third of spending, you are '
           'looking at a poor country, whatever the official figures '
           'claim.'),
          ('Speaker', 'The second thing to watch is equipment: a '
           'television, a washing machine, a telephone. That spending '
           'grows faster than income for about twenty years and then '
           'settles. Companies know the dates and move their '
           'advertising from country to country as the window opens.'),
          ('Speaker', 'Nobody in this room is immune to that, and the '
           'opinion you have about which products you chose freely is '
           'worth examining. The pattern exists whether or not you '
           'believe you are part of it.')],
         items=[
          ('As a household gets richer, spending on food',
           ['falls in amount', 'rises in amount but falls as a share', 'stays exactly the same', 'rises as a share'],
           1, 'The speaker stresses that the amount itself rises.',
           {0: 'He says the amount rises; it is the share that falls.', 2: 'Neither the amount nor the share stays the same.', 3: 'The share is the thing he says goes down.'}),
          ('If food is a ____________ of spending, the country is '
           'poor.', None, 'third',
           'Whatever the official figures say.'),
          ('Spending on equipment grows faster than income for about',
           ['two years', 'twenty years', 'two hundred years', 'twelve years'],
           1, 'And then it settles, the speaker says.',
           {0: 'Two years is far shorter than the period he gives.', 2: 'Two hundred years is far longer than anything he '
               'claims.', 3: 'Twelve sounds close to it but is not the number.'}),
          ('What do companies move from country to country?', None,
           'advertising', 'As the window opens in each one.'),
          ('The speaker says the pattern holds',
           ['only in poorer countries', 'only for people who believe it', 'whether or not you think you are part of it', 'only where advertising is allowed'],
           2, 'Nobody in the room is immune, he says.',
           {0: 'He uses the share spent on food to compare countries, '
               'not to limit the pattern to some of them.', 1: 'That is the opposite of what he says.', 3: 'Advertising moves between countries in his account; it '
               'does not switch the pattern off.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Things people spend too much on',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: give the thing, then the reason people '
           'overspend on it. Two reasons is enough.'),
    cue=('Describe something you spend money on every month.',
         ['say what it is',
          'say roughly how much you spend',
          'say why you spend it',
          'and explain whether you could spend less']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Have you ever tried to cut it?',
        'Do other people you know spend the same?',
        'What do people spend too much money on?',
        'Is it easier to save now than it was?',
        'Should schools teach children about money?'],
    shape=[('answer', 'I think people spend most on things they buy '
            'without noticing.'),
           ('support', 'A coffee every morning is three pounds a day '
            'and nobody counts it.'),
           ('support', 'Large payments are remembered and small daily '
            'ones are not.'),
           ('follow-up', 'That is also why writing everything down for '
            'a month changes behaviour more than any advice.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Spending on food, housing and travel in two countries',
         figure=_TWO,
         prompt='The chart shows the share of household spending in two '
                'countries. Describe the chart and compare the two.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart compares how households in two countries divide '
          'their spending between food, housing and travel.',
          'The two countries are almost opposites on the first two '
          'categories. In Country A, housing takes thirty-four per cent '
          'and food fourteen. In Country B, food takes twenty-seven per '
          'cent and housing twenty-two.',
          'Travel is the smallest share in both, at thirteen per cent '
          'and nine per cent.',
          'The pattern in Country B, where food takes more than '
          'housing, is the one usually seen in a poorer country, while '
          "Country A's shares are those of a richer one."],
         notes=['The answer groups the two countries before giving any '
                'single number, which is what a comparison needs.',
                'Both figures are given for each category, so no '
                'comparison is left for the reader to make.',
                'The final sentence interprets the pattern, which is '
                'allowed because it follows from the figures.'],
         criterion=[('Both countries described together', 'Task '
                     'Achievement'),
                    ('All three categories with both figures',
                     'Task Achievement'),
                    ('A comparison, not two descriptions', 'Task '
                     'Response'),
                    ('Percentages written correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Percentages and fractions in speech',
    explain='Say a third, a quarter, a half. With per cent, use the '
            'number: thirty-four per cent.',
    examples=['Housing takes a third of all spending.',
              'Food is fourteen per cent.',
              'Travel is less than a tenth.',
              'Almost half the total goes on housing.'],
    items=[('Housing takes 33% of spending.',
            'Housing takes a third of spending.'),
           ('Food is 14%.', 'Food is fourteen per cent.'),
           ('Travel is 9%.', 'Travel is nine per cent.'),
           ('Housing is 50% of the total.',
            'Housing is half of the total.'),
           ('Food is 25% in that country.',
            'Food is a quarter in that country.')],
    task='Write each figure as a fraction or in words.'),
   vocab=[('became', 'past of become'),
          ('opinion', 'what somebody thinks about something'),
          ('television', 'a machine that shows programmes'),
          ('equipment', 'the machines and tools needed for a job'),
          ('designed', 'planned and made for a purpose'),
          ('product', 'something made to be sold'),
          ('exists', 'is real, is there'),
          ('discussed', 'talked about'),
          ('exploit', 'to use something unfairly for your own gain')],
   expr=[('As income rises, the share falls.', 'describing a '
          'relationship'),
         ('Notice what that does not say.', 'preventing a '
          'misunderstanding'),
         ('Whatever the official figures claim.', 'doubting a source'),
         ('Nobody is immune to that.', 'including the listener')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Markets, shops and false offers',
   step=3,
   read=[
    dict(heading='How to tell a real offer from a false one',
         kind='Short factual article',
         task='Matching information and sentence completion',
         band='acad', qtype='Questions 42-47',
         paras=[
          'A false offer is rarely a lie. If it were a simple lie it '
          'would be illegal and easy to stop. What is legal, and '
          'therefore common, is an offer that is true and arranged so '
          'that a shopper in a hurry draws the wrong conclusion. A '
          'price raised for six weeks and then cut is a real cut from a '
          'real price, and it is also nothing at all. A shop that does '
          'this is not breaking the law; it is using the way attention '
          'works.',
          'The second kind arrives in a message. Press this link, reset '
          'your password, your account will close today. Here the test '
          'is not the offer but the hurry. A real company gives you '
          'time, because it has no reason not to. A fake one must act '
          'before you think, and so every one of these messages, '
          'without exception, contains a reason why you must act now. '
          'That single feature identifies them more reliably than '
          'spelling or a strange address.',
          'The defence is dull and it works. Never press a link in a '
          'message; go to the page yourself. Check the price of the '
          'thing you want in two shops before you look at any offer at '
          'all. And when something feels complicated, stop, because '
          'complication is not an accident. An expert in this field '
          'said it plainly: confusion is not a side effect of a bad '
          'offer, it is the product being sold.'],
         items=[
          (
           'Which paragraph explains why a false offer is usually '
           'legal?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 0,
           'A true price arranged to mislead.',
           {1: 'Paragraph 2 gives the feature every fake message '
               'shares.', 2: 'Paragraph 3 is the defence, not the explanation.'}),
          ('Which paragraph gives one feature every fake message has?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'A reason why you must act now.',
           {0: 'Paragraph 1 is about prices that are true but '
               'arranged.', 2: 'Paragraph 3 tells you what to do rather than what to '
               'notice.'}),
          ('Which paragraph gives the defence?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'Go to the page yourself; check two shops.',
           {0: 'Paragraph 1 explains the trick; it does not answer it.', 1: 'Paragraph 2 names the warning sign, which is not yet a '
               'defence.'}),
          ('A price is often raised for ____________ weeks before it is '
           'cut.', None, 'six',
           'Paragraph 1, which makes the cut meaningless.'),
          ('In a fake message, the thing to notice is the '
           '____________.', None, 'hurry',
           'Paragraph 2: a real company gives you time.'),
          ('Check the price in ____________ shops before looking at an '
           'offer.', None, 'two', 'Paragraph 3, as the dull defence.')])],
   listen=[
    dict(heading='Two shoppers disagree', part='Part 3',
         task='A discussion between two students · sentence completion and short answer', band='l3',
         qtype='Questions 48-52',
         bank=['A', 'B', 'C'],
         reuse=True,
         banklabel='A  Priya    B  Dan    C  both of them',
         script=[
          ('Tutor', 'You tested whether offers save money. What did you '
           'find?'),
          ('Priya', 'We tracked forty offers in two shops for six '
           'weeks. Eleven of them were cheaper than the ordinary price '
           'somewhere else on the same day.'),
          ('Tutor', 'Eleven out of forty.'),
          ('Dan', 'Which sounds terrible, but I read it differently. '
           'Eleven real savings is not nothing, and the shopper who '
           'checks finds them.'),
          ('Priya', 'The shopper who checks spends twenty minutes to '
           'save two pounds. Unfortunately that is most of what we '
           'found.'),
          ('Dan', 'For a large purchase it is worth it. Nobody is '
           'saying check for twenty minutes before buying milk.'),
          ('Tutor', 'Did any shop raise a price first?'),
          ('Priya', 'Six did, and all six were within the law, because '
           'the higher price had been charged for long enough.'),
          ('Dan', 'That is the part I would put first in the report. It '
           'is legal, and people assume it is not, so they trust the '
           'word sale more than they should.'),
          ('Priya', 'Agreed. We disagree about the conclusion, not the '
           'numbers.'),
          ('Tutor', 'Then write both conclusions and let the reader '
           'choose.')],
         items=[
          (
           'Gives the number of offers tracked and the number that '
           'saved money.', None, 'A',
           'Forty over six weeks, of which eleven did.'),
          ('Says eleven real savings is not nothing.', None, 'B',
           'And that the shopper who checks finds them.'),
          ('Says checking costs twenty minutes to save two pounds.',
           None, 'A', 'Which is most of what the study found.'),
          ('Wants the legality of raising a price first put first.',
           None, 'B', 'Because people assume it is not legal.'),
          ('Agrees that the disagreement is about the conclusion.',
           None, 'C', 'Priya says it and Dan is asked to write his own.')])],
   speak=dict(
    part='Part 3', focus='Small shops and big shops',
    sounds=[('Prices and numbers must be very clear, because the examiner '
             'cannot guess them. Say sixty and sixteen, fifty and fifteen, and '
             'make them different.'),
            ('In sixteen the end is strong. In sixty the beginning is strong. '
             'Say them together six times.'),
            ('Shop words have the stress at the front: MARket, SUPermarket, '
             'EXpensive is the exception and takes the second part.'),
            ('Practise one sentence: they cost about sixty, which was not the '
             'cheapest. Keep the number clear.'),
            ('Record yourself saying five prices. Listen to them the next day '
             'and write down what you hear.')],
    intro='Compare the two, then say which you prefer and why. Do not '
          'describe only one.',
    qs=['Are small shops better than large ones?',
        'Will all shopping be online in the future?',
        'Should governments control prices?'],
    shape=[('answer', 'Large shops are cheaper and small shops are '
            'better at everything else.'),
           ('support', 'A supermarket buys in bulk, so its prices are '
            'lower for the same goods.'),
           ('support', 'A small shop knows what you buy and will order '
            'something for you.'),
           ('follow-up', 'I use both, which is probably why the small '
            'one near me has survived.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Complaining about a shop that would not help',
         prompt='You tried to return a faulty item and the shop '
                'refused. Write a letter to the manager. In your '
                'letter: say what you bought and when; explain what is '
                'wrong; say what you want the shop to do.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'On 2 March I bought a kettle at your Bexley Road shop for '
          'twenty-six pounds. The receipt number is 4417.',
          'The kettle stopped working after nine days. It switches on '
          'and then turns itself off after a few seconds. I returned it '
          'on 12 March with the receipt and the box, and your assistant '
          'told me that electrical goods cannot be returned at all. '
          'That is not correct for a faulty item.',
          'I would like a refund to the card I paid with. If you prefer '
          'to replace it, I will accept that, but I would like an '
          'answer within fourteen days.',
          'Yours faithfully,',
          'A. Costa'],
         notes=['The first paragraph gives date, shop, price and '
                'receipt number. A complaint without those is answered '
                'slowly.',
                'The fault is described by what it does, not by the '
                'word "broken".',
                'The letter says what it wants and offers an '
                'alternative, with a date.'],
         criterion=[('Date, item and receipt in the first paragraph',
                     'Task Achievement'),
                    ('The fault described by behaviour', 'Task '
                     'Response'),
                    ('A clear request with a deadline', 'Task '
                     'Achievement'),
                    ('Formal opening and closing', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='would like and would rather',
    explain='Use would like plus to and a verb, or plus a noun. Use '
            'would rather plus a plain verb, with no to.',
    examples=['I would like a refund.',
              'I would like to return this.',
              'I would rather have a replacement.',
              'Would you rather wait?'],
    items=[('I (like) a refund, please.', 'I would like a refund, '
            'please.'),
           ('I (like / return) this item.',
            'I would like to return this item.'),
           ('I (rather / have) a replacement.',
            'I would rather have a replacement.'),
           ('(you / rather / wait) until Friday?',
            'Would you rather wait until Friday?'),
           ('She (rather / not) go back to that shop.',
            'She would rather not go back to that shop.')],
    task='Write each sentence with would like or would rather.'),
   vocab=[('reset', 'to set something back to the start'),
          ('press', 'to push with a finger'),
          ('apart', 'separated, not together'),
          ('fake', 'not real, made to look real'),
          ('unfortunately', 'sadly, it is a pity that'),
          ('legal', 'allowed by law'),
          ('complicated', 'with many parts, hard to understand'),
          ('expert', 'a person who knows a subject very well')],
   expr=[('Never press a link in a message.', 'a rule you can always '
          'follow'),
         ('The thing to notice is the hurry.', 'naming the real '
          'signal'),
         ('It is legal, and people assume it is not.',
          'correcting an assumption'),
         ('I would like an answer within fourteen days.',
          'setting a deadline politely')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Recovering from a miss: let one go and catch the next',
  body='This page is about the most expensive two seconds in the '
       'Listening test. You miss an answer. What happens next decides '
       'whether you lose one mark or four. Here is the sequence that '
       'destroys a section, and every candidate has lived it. You miss '
       'question 24. You keep listening for it, because it must be '
       'coming. The speakers move on to question 25 and you half hear '
       'it, because half your attention is still on 24. Now you have '
       'missed two, and you are behind, and being behind is what causes '
       'the next miss. By question 27 you are not listening to the '
       'recording at all; you are listening to yourself being annoyed. '
       'The fix has to be physical, because a decision made in the '
       'moment will not be kept. Put a dot in the margin and move your '
       'pen to the next question. The dot is the whole technique: it '
       'is a promise to come back, and it lets your attention let go. '
       'At the end of the section you will have thirty seconds, and '
       'the dotted questions are where you guess. Never leave a dotted '
       'question blank. There is no penalty for a wrong answer, so a '
       'guess at a plausible number or name is free, and in a year of '
       'teaching this I have seen a guess be right often enough to '
       'change a band.',
  panel=[('Dot it', 'A dot in the margin is a promise to come back.'),
         ('Move the pen', 'Your pen on the next question moves your '
          'attention.'),
         ('Guess at the end', 'Thirty seconds, every dot filled in.'),
         ('Never leave a blank', 'A wrong answer costs nothing more '
          'than a blank.')],
  qs=['How many questions did you dot?',
      'Did you lose the question after each dot?',
      'Did you fill in every dot at the end?',
      'Did any guess turn out to be right?',
      'What were you thinking about at question 27?'],
  task='Do the five listening sections without pausing. Dot every miss. '
       'Count how many of the questions straight after a dot you also '
       'got wrong, and try to make that number zero in unit 5.'),

 outlining=dict(
  title='Fill the outline: six sentences, two main ideas',
  body='Unit 1 gave you four sentences under two ideas. This is the '
       'same shape with one more sentence under each idea, and the '
       'extra sentence is the one that lifts a short answer towards a '
       'real one. The shape is: idea, support, and consequence. The '
       'idea is what you think. The support is a fact, a number or an '
       'example. The consequence is what follows from it, and it is the '
       'sentence most candidates never write. Take "easy returns are '
       'good for shops". The support is "a customer who can return '
       'something will buy something they are unsure about". The '
       'consequence is "and most of those items are kept, so the shop '
       'sells more than it refunds". Without that third sentence the '
       'paragraph states a position. With it, the paragraph argues. Do '
       'this twice and you have six sentences, which with an opening '
       'and a closing line is a complete answer of about 150 words. '
       'Write the six sentences as six short lines on your plan before '
       'you write a single sentence of the answer. The plan takes four '
       'minutes and saves eight.',
  frame=('Shops should take most things back, but not everything',
         [('Easy returns help the shop as well as the customer',
           ['a customer who can return something buys what they are '
            'unsure about',
            'most of those items are kept, so the shop sells more than '
            'it refunds']),
          ('A few limits protect every other customer',
           ['food and earrings cannot be sold again safely',
            'what a shop throws away appears in the price everybody '
            'pays'])]),
  qs=['What is the idea, in five words?',
      'What fact or number supports it?',
      'What follows from that support?',
      'Have you written six lines before starting?',
      'Does any line repeat another in new words?'],
  task='Plan the cycle 3 question as six lines: idea, support and '
       'consequence, twice. Then write the answer from the plan '
       'without adding anything new.',
  answers=['the consequence sentence is the one that argues',
           'an idea with support but no consequence states a position',
           'six lines is about 150 words of finished answer',
           'four minutes of planning saves eight of writing',
           'anything not in the plan does not go in the answer']),

 candos=['I can read four short notices and say how they differ',
         'I can return something and answer the questions I am asked',
         'I can describe a chart with two countries and three '
         'categories',
         'I can recognise a message that is trying to hurry me',
         'I can plan six sentences before I write an opinion answer'],

 tip=('Every fake message contains a reason why you must act now. That '
      'single feature identifies them more reliably than spelling, a '
      'strange address, or anything else you have been told to look '
      'for.'))
