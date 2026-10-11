"""EFDL A1.2 Unit 17 -- Would You Like? Polite requests and shopping."""
from _common import make, runner, P, C

UNIT, BOOK = 17, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'At the counter',
    lambda: P.two_talk('cafe', 'rosa', 'nadia', 'Would you like a coffee?',
                       'Yes, please. How much is it?', pose_a='stand', pose_b='offer'))
fig(2, 'W', 'lexis', 'Six things to buy',
    lambda: P.object_cards([(1, 'coin', None), (2, 'bag', 'brown'),
                            (3, 'hat', 'red'), (4, 'coat', 'navy'),
                            (5, 'book', 'purple'), (6, 'cup', None)],
                           cols=6, h=320))

fig(3, '1', 'contrast', 'A polite way to ask',
    lambda: P.blocks([[('Would you like', 'teal'), ('a coffee?', None)],
                      [('I would like', 'teal'), ('a sandwich.', None)],
                      [('Can I have', 'purple'), ('the bill, please?', None)]],
                     legend=[('would like', 'teal'), ('can I have', 'purple')]))
fig(4, '1', 'document', 'A receipt',
    lambda: P.notice('THE CAFE · RECEIPT', [
        ('a coffee', '2.00'), ('a cake', '2.50'), ('a sandwich', '3.50'),
        ('Total', '8.00'),
        'You gave 10.00. Your change is 2.00.']))
fig(5, '1', 'lexis', 'Money words',
    lambda: P.blocks([[('a note', 'green'), ('10.00', None)],
                      [('a coin', 'teal'), ('1.00', None)],
                      [('change', 'amber'), ('2.00 back', None)]],
                     legend=[('paper money', 'green'), ('metal money', 'teal'),
                             ('money back', 'amber')]))
fig(6, '1', 'document', 'Sizes in the shop',
    lambda: P.register('THE SHOP · SIZES',
                       (['Thing', 'Small', 'Medium', 'Large'], [0.28, 0.24, 0.24,
                                                                0.24]),
                       [('a coat', '40', '45', '50'), ('a hat', '9', '11', '13'),
                        ('a bag', '18', '22', '26')]))

fig(7, '2', 'contrast', 'Would like and like',
    lambda: P.then_now([('I like coffee.', 'I would like a coffee.'),
                        ('She likes cake.', 'She would like a cake.')],
                       left='ALWAYS TRUE', right='RIGHT NOW'))
fig(8, '2', 'contrast', 'Asking and answering',
    lambda: P.qa_pairs([('Would you like a coffee?', 'Yes, please.'),
                        ('Would you like anything else?', 'No, thanks.'),
                        ('How would you like to pay?', 'By card, please.')]))
fig(9, '2', 'contrast', 'The short form',
    lambda: P.contraction([('I would like', "I'd like", 'woul'),
                           ('He would like', "He'd like", 'woul')]))

fig(10, '3', 'data', 'Four customers',
    lambda: P.people_row([('rosa', '1', 'carry', 'basket'), ('ben', '2', 'hold',
                                                             'phone'),
                          ('lili', '3', 'hold', 'book'), ('marek', '4', 'hold',
                                                          'toolbox')],
                         label_size=34))
fig(11, '3', 'document', 'What they paid',
    lambda: P.register('THE SHOP · TODAY',
                       (['Who', 'Thing', 'Price', 'Paid'], [0.24, 0.28, 0.24,
                                                            0.24]),
                       [('Rosa', 'a coat', '45', 'cash'), ('Ben', 'a hat', '11',
                                                           'card'),
                        ('Lili', 'a bag', '18', 'card'), ('Marek', 'a book', '7',
                                                          'cash')]))
fig(12, '3', 'lexis', 'Four ways to pay',
    lambda: P.object_cards([(1, 'coin', None), (2, 'badge', 'blue'),
                            (3, 'phone', None), (4, 'envelope', None)],
                           cols=4, h=320))

fig(13, '4', 'data', 'Buying a coat',
    lambda: P.two_talk('street', 'lili', 'ben', "I'd like this coat, please.",
                       'Would you like a bag?', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'In the shop',
    lambda: P.qa_pairs([("I'd like this, please.", 'Of course.'),
                        ('Have you got a bigger one?', 'Yes, here you are.'),
                        ('How much is that?', "That's 45 pounds.")]))

fig(15, '5', 'document', 'A shop notice',
    lambda: P.notice('THE SHOP', [
        ('Opens', '8.00'), ('Closes', '20.00'), ('Cards', 'yes'),
        ('Return a thing', 'in 14 days'),
        'Please ask if you would like another size.']))
fig(16, '5', 'document', 'Messages about a coat',
    lambda: P.phone('Lili', [('them', 'Would you like the red coat?'),
                             ('me', "I'd like the navy one."),
                             ('them', 'What size?'), ('me', 'Medium, please.')]))

fig(17, '6', 'document', 'A form for an order',
    lambda: P.form('MY ORDER',
                   [('I would like', None), ('Size', None), ('Colour', None),
                    ('I will pay by', None)]))
fig(18, '6', 'data', 'Four lines for a shop',
    lambda: P.writing_frame('In the shop', ["I'd like ", 'The size is ',
                                            'The colour is ', 'I will pay by ']))

fig(19, '7', 'document', 'A long receipt',
    lambda: P.notice('THE SHOP · RECEIPT', [
        ('a coat, medium', '45.00'), ('a hat, small', '9.00'),
        ('Total', '54.00'), ('You gave', '60.00'),
        'Your change is 6.00. Thank you!']))
fig(20, '7', 'data', 'Three prices in the shop',
    lambda: P.rank_three('THE MOST EXPENSIVE',
                         [('A coat', 'coat', 'navy', '45'),
                          ('A bag', 'bag', 'brown', '18'),
                          ('A hat', 'hat', 'red', '9')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'coin', None), (2, 'coat', 'green'),
                            (3, 'hat', 'amber'), (4, 'bag', 'red'),
                            (5, 'cup', None), (6, 'book', 'teal')],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can ask in a polite way.',
                      'I can use I would like.',
                      'I can ask about size and colour.',
                      'I can pay and count my change.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
