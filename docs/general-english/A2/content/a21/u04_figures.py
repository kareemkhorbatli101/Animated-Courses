"""EFDL A2 Unit 4 -- How Much, How Many. Quantity."""
from _common import make, runner, P, C

UNIT, BOOK = 4, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Ben counts the money',
    lambda: P.two_talk('cafe', 'lili', 'ben', 'How much is in the till?',
                       'Not much. It was a quiet day.',
                       pose_a='stand', pose_b='hold'))
fig(2, 'W', 'document', 'A week of spending',
    lambda: P.register('LILI · LAST WEEK',
                       (['What', 'How much', 'How often'], [0.38, 0.30, 0.32]),
                       [('Rent', '150', 'every week'), ('Food', '42', 'every week'),
                        ('Bus', '18', 'every week'), ('Phone', '12', 'every month')]))
fig(3, 'W', 'lexis', 'Six things you pay for',
    lambda: P.object_cards([(1, 'coin', None), (2, 'bread', None),
                            (3, 'ticket', None), (4, 'phone', None),
                            (5, 'book', 'amber'), (6, 'coat', 'navy')],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Much, many and a lot of',
    lambda: P.blocks([[('How much', 'teal'), ('money?', None)],
                      [('How many', 'amber'), ('coins?', None)],
                      [('a lot of', 'purple'), ('money, and of coins', None)]],
                     legend=[('you cannot count it', 'teal'),
                             ('you can count it', 'amber'),
                             ('both', 'purple')]))
fig(5, '1', 'contrast', 'A few and a little',
    lambda: P.blocks([[('a few', 'amber'), ('coins, notes, days', None)],
                      [('a little', 'teal'), ('money, time, water', None)],
                      [('not much', 'red'), ('less than you want', None)],
                      [('not many', 'red'), ('fewer than you want', None)]]))
fig(6, '1', 'data', 'How much each one spends',
    lambda: P.bar_compare('SPENDING EVERY WEEK',
                          [('Lili', 222, 'teal'), ('Ben', 140, 'amber'),
                           ('Rosa', 96, 'navy')]))
fig(7, '1', 'contrast', 'Saying the long numbers',
    lambda: P.blocks([[('150', 'teal'), ('a hundred and fifty', None)],
                      [('1,200', 'amber'), ('one thousand two hundred', None)],
                      [('25%', 'purple'), ('twenty-five percent', None)],
                      [('0.50', 'green'), ('fifty pence', None)]]))
fig(8, '1', 'document', 'A bank statement',
    lambda: P.register('GREENFIELD BANK · MAY',
                       (['Date', 'What', 'Out', 'Balance'],
                        [0.20, 0.34, 0.22, 0.24]),
                       [('2 May', 'rent', '600', '940'),
                        ('9 May', 'food', '52', '888'),
                        ('14 May', 'wage in', '', '1,488'),
                        ('20 May', 'phone', '12', '1,476')]))
fig(9, '1', 'lexis', 'Five money words',
    lambda: P.blocks([[('salary', 'teal'), ('money for your work', None)],
                      [('balance', 'green'), ('what is left', None)],
                      [('discount', 'amber'), ('a lower price', None)],
                      [('refund', 'purple'), ('money given back', None)],
                      [('debt', 'red'), ('money you owe', None)]]))

fig(10, '2', 'contrast', 'Countable and uncountable',
    lambda: P.sort_two(('YOU CAN COUNT IT', 'amber'), ('YOU CANNOT', 'teal'),
                       [('coin', None, 'coins'), ('milk', None, 'milk'),
                        ('egg', None, 'eggs'), ('bread', None, 'bread'),
                        ('ticket', None, 'tickets'), ('bottle', None, 'water')]))
fig(11, '2', 'contrast', 'How much and how many',
    lambda: P.qa_pairs([('How much does it cost?', 'Twelve pounds.'),
                        ('How many tickets?', 'Three, please.'),
                        ('Have you got much time?', 'Not much, no.')]))
fig(12, '2', 'data', 'Who has got how much',
    lambda: P.bar_compare('IN THE BANK TODAY',
                          [('Lili', 1476, 'teal'), ('Ben', 820, 'amber'),
                           ('Omar', 35, 'green')]))
fig(13, '2', 'contrast', 'A little and a few, again',
    lambda: P.then_now([('I have got a little money.', 'I have got a few coins.'),
                        ('There is not much milk.', 'There are not many eggs.')],
                       left='UNCOUNTABLE', right='COUNTABLE'))
fig(14, '2', 'data', 'Three prices to compare',
    lambda: P.rank_three('THE CHEAPEST TICKET',
                         [('By bus', 'ticket', None, '4.50'),
                          ('By train', 'train', 'green', '11.00'),
                          ('By plane', 'plane', None, '62.00')]))
fig(15, '2', 'contrast', 'Mistakes with much and many',
    lambda: P.verb_change([('How much coins?', 'How many coins?', 'new'),
                           ('I have got many time.', 'I have got much time.', 'new')],
                          size=27))

fig(16, '3', 'data', 'Four people at the bank',
    lambda: P.people_row([('rosa', '1', 'carry', 'basket'),
                          ('omar', '2', 'carry', 'backpack'),
                          ('ben', '3', 'hold', 'phone'),
                          ('fatima', '4', 'stand', None)], label_size=34))
fig(17, '3', 'document', 'What they paid in May',
    lambda: P.register('MAY · WHAT THEY PAID',
                       (['Who', 'Rent', 'Food', 'Travel'],
                        [0.24, 0.26, 0.24, 0.26]),
                       [('Lili', '600', '', ''),
                        ('Ben', '480', '', ''),
                        ('Rosa', '0', '', '')]))
fig(18, '3', 'document', 'The prices in the shop',
    lambda: P.rota('THE SHOP · PRICES', ['Small', 'Medium', 'Large'],
                   [('Coffee', ['1.80', '2.20', '']),
                    ('Bread', ['1.10', '1.60', '']),
                    ('Juice', ['2.00', '2.40', ''])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'milk', None), (2, 'egg', None),
                            (3, 'apple', None), (4, 'ticket', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Asking about the bill',
    lambda: P.two_talk('cafe', 'rosa', 'nadia', 'How much is that in all?',
                       'Nine pounds forty, please.',
                       pose_a='stand', pose_b='offer'))
fig(21, '4', 'contrast', 'Four questions about money',
    lambda: P.qa_pairs([('How much do you spend on food?', 'About forty a week.'),
                        ('How many hours do you work?', 'Thirty-five.'),
                        ('Can you afford it?', 'Not this month.'),
                        ('Is there a discount?', 'Yes, ten percent.')]))
fig(22, '4', 'data', 'Payday in four moments',
    lambda: P.panels([('The wage arrives.', 'green', 'ben', 'hold',
                       'It is in!'),
                      ('He pays the rent.', 'blue', 'ben', 'offer',
                       'Six hundred.'),
                      ('He buys food.', 'teal', 'ben', 'carry',
                       'Not too much.'),
                      ('He saves the rest.', 'amber', 'ben', 'think',
                       'For the summer.')]))
fig(23, '4', 'data', 'Three people to ask about money',
    lambda: P.badges([('Ben', 'shop', 'the counter', 'orange'),
                      ('Rosa', 'pension', 'every month', 'purple'),
                      ('Lili', 'wage', 'the cafe', 'yellow')]))

fig(24, '5', 'document', 'Two offers in the window',
    lambda: P.two_text(('THE SHOP · THIS WEEK',
                        ['Bread and milk: 10 percent off.',
                         'Buy three, pay for two.',
                         'The offer ends on Sunday.'], 'navy'),
                       ('THE CAFE · THIS WEEK',
                        ['Coffee and cake: 4.50 together.',
                         'Students pay half price.',
                         'Mondays only, until two.'], 'teal')))
fig(25, '5', 'document', 'Messages about a refund',
    lambda: P.phone('The Shop', [('me', 'The coat is too small.'),
                                 ('them', 'Bring the receipt and we will refund it.'),
                                 ('me', 'How many days have I got?'),
                                 ('them', 'Fourteen, from the day you bought it.')]))
fig(26, '5', 'document', 'What the bank charges',
    lambda: P.notice('GREENFIELD BANK · OUR CHARGES', [
        ('A new card', 'free'), ('Money from a machine', 'free'),
        ('Money abroad', '2 percent'), ('A late payment', '15'),
        'There is no charge if your balance stays over 100.'], col='navy'))
fig(27, '5', 'document', 'A letter about the rent',
    lambda: P.notice('FROM THE LANDLORD · JUNE', [
        ('Rent now', '600'), ('Rent from July', '620'),
        ('Why', 'the heating costs more'), ('Notice', 'one month'),
        'Telephone me if twenty pounds a month is too much.'], col='amber'))

fig(28, '6', 'document', 'A budget form',
    lambda: P.form('MY MONTH',
                   [('Money in', None), ('Rent', None), ('Food', None),
                    ('Travel', None), ('What is left', None)]))
fig(29, '6', 'data', 'Four lines about your money',
    lambda: P.writing_frame('My month', ['I spend a lot of money on ',
                                         'I spend a little on ',
                                         'I have not got many ',
                                         'I save about ']))
fig(30, '6', 'document', 'A model budget',
    lambda: P.two_text(('BEN WRITES',
                        ['I earn about 1,400 a month.',
                         'I spend a lot of money on rent and food.',
                         'I have not got many expenses after that.',
                         'I save a little every week, about twenty.'], 'purple'),
                       ('THE FOUR LINES',
                        ['1 what comes in',
                         '2 where a lot goes',
                         '3 what there is not much of',
                         '4 what you save'], 'steel')))

fig(31, '7', 'document', 'A real bank statement',
    lambda: P.register('GREENFIELD BANK · JUNE',
                       (['Date', 'What', 'In', 'Out', 'Balance'],
                        [0.17, 0.29, 0.17, 0.17, 0.20]),
                       [('1 June', 'rent', '', '620', '1,180'),
                        ('8 June', 'shop', '', '46', '1,134'),
                        ('14 June', 'wage', '1,420', '', '2,554'),
                        ('22 June', 'bus pass', '', '58', '2,496')]))
fig(32, '7', 'document', 'How to read it',
    lambda: P.notice('YOUR STATEMENT · WHAT IT MEANS', [
        ('In', 'money that arrived'), ('Out', 'money that left'),
        ('Balance', 'what is in the account'), ('A minus', 'you owe the bank'),
        'Telephone us within thirty days if a line is wrong.'], col='teal'))
fig(33, '7', 'data', 'Three ways to pay',
    lambda: P.object_cards([(1, 'coin', None), (2, 'card', None),
                            (3, 'phone', None)], cols=3, h=320))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'coin', None), (2, 'card', None),
                            (3, 'milk', None), (4, 'egg', None),
                            (5, 'ticket', None), (6, 'apple', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'Much or many, in blocks',
    lambda: P.blocks([[('How much', 'teal'), ('milk?', None)],
                      [('How many', 'amber'), ('eggs?', None)]],
                     legend=[('uncountable', 'teal'), ('countable', 'amber')]))
fig(36, '8', 'data', 'Three weeks of spending',
    lambda: P.bar_compare('FOOD, EVERY WEEK',
                          [('Week 1', 42, 'teal'), ('Week 2', 61, 'amber'),
                           ('Week 3', 38, 'navy')]))
fig(37, '8', 'data', 'Four answers about money',
    lambda: P.people_row([('ben', 'a', 'hold', 'phone'),
                          ('rosa', 'b', 'carry', 'basket'),
                          ('lili', 'c', 'stand', None),
                          ('omar', 'd', 'walk', 'ball')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can ask how much and how many.',
                      'I can use a lot of, a few and a little.',
                      'I can read a bank statement.',
                      'I can talk about what I spend and save.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
