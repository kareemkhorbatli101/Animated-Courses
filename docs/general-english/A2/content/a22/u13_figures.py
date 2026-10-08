"""Unit 13 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        13, 'Rules and Places',
        'Must, have to and mustn’t',
        ['I can say what is necessary, forbidden and not necessary.',
         'I can ask what the rules of a place are.',
         'I can write the rules for a shared space in 50–70 words.'],
        ['notice', 'guard', 'locker', 'book', 'home'],
        alt='The opening page of Unit 13, Rules and Places: the grammar point is '
            'must, have to and mustn’t, and three things the learner will be able to '
            'do by the end of the unit.'),

 2: lambda: F.scene(
        [('the landing', 'home', 'no bin bag, ever'),
         ('the front door', 'notice', 'you must pull it shut'),
         ('the shop', 'shop', 'nobody parks before nine'),
         ('good morning', 'person', 'you don’t have to'),
         ('Tomas’s door', 'nurse', 'not before two'),
         ('the side door', 'locker', 'not after nine, and nobody knows why')],
        height=560,
        alt='Six rules at number 14 that nobody ever wrote down: no bin bag on the '
            'landing, you must pull the front door shut, nobody parks in front of '
            'the shop before nine, you do not have to say good morning, you do not '
            'knock on Tomas’s door before two, and nobody uses the side door after '
            'nine.'),

 3: lambda: F.category_set(
        [('A library', 'book'), ('A pool', 'cup'), ('A gallery', 'notice'),
         ('A night bus', 'bus'), ('A club', 'home'), ('A shop', 'shop')],
        height=600,
        alt='Six places, each on its own card: a library, a pool, a gallery, a night '
            'bus, a club and a shop.'),

 4: lambda: F.label_me(
        [('mustn’t', 0.24, 0.12), ('must', 0.34, 0.33),
         ('don’t have to', 0.46, 0.54), ('member', 0.58, 0.74), ('fee', 0.72, 0.90)],
        height=620, draw=F.rule_wall,
        alt='A wall with five notices on it, each carrying a different mark: a '
            'crossed circle, a tick, an open square, a key, and one with a plain '
            'line and nothing else. Five numbered lines run to the right for the '
            'learner to write each word.'),

 5: lambda: F.grammar_contrast(
        ('mustn’t', 'forbidden',
         'You mustn’t touch the paintings.', [0.10]),
        ('don’t have to', 'not necessary',
         'You don’t have to pay a fee.', [0.90]),
        height=640,
        alt='The unit’s grammar as two columns, set as far apart as the page allows. '
            'On the left mustn’t, which forbids, with its mark at the closed end. On '
            'the right don’t have to, which frees, with its mark at the open end. '
            'The two sound alike and mean opposite things.'),

 6: lambda: F.timeline(
        [('the door', 'you must show your card'), ('the desk', 'you have to be a member'),
         ('the locker', 'bags go in, and it is free'), ('the room', 'you mustn’t touch'),
         ('the garden', 'you don’t have to be quiet')],
        height=460,
        alt='One visit on a line, from the door to the garden: you must show your '
            'card at the door, you have to be a member at the desk, bags go in a '
            'free locker, you mustn’t touch anything in the room, and in the garden '
            'you do not have to be quiet.'),

 7: lambda: F.speakers(
        [('Track 13.2', 'Yuki and a guard', 'guard', 'the guard and the bag'),
         ('Track 13.3', 'Dani and Amina', 'shop', 'the rules of the shop'),
         ('Track 13.4', 'Amina', 'person', 'six people, six rules')],
        height=560,
        alt='The three listenings in this unit: a gallery guard tells Yuki what she '
            'must and need not leave at the door, Amina lists the four rules of her '
            'shop to Dani, and Amina describes the one rule each of the six will not '
            'break.'),

 8: lambda: F.cue_cards(
        ('Card A — asking', ['ask one thing at a time', 'ask about the fee',
                             'check what is forbidden', 'thank them'], 'person'),
        ('Card B — telling', ['say what is necessary', 'say plainly what is free',
                              'name the thing people forget', 'do not explain it'], 'guard'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask one thing at '
            'a time, ask about the fee, check what is forbidden, thank them. Card B, '
            'telling: say what is necessary, say plainly what is free, name the one '
            'thing people forget, do not explain the rule.'),

 9: lambda: F.process_strip(
        [('a reason you can see', 'notice'), ('fairness', 'person'),
         ('somebody will mention it', 'guard'), ('the rule is kept', 'home'),
         ('take one away', 'moon')],
        height=460,
        alt='What a rule needs, in five stages with an arrow to the next: a reason '
            'you can see, fairness, somebody willing to mention it, and then the '
            'rule is kept. Take any one of the three away and the notice stays on '
            'the wall and means nothing.'),

 10: lambda: F.world_strip(
        [('a pool', 'cup', 'the lane: fast one side, slow the other'),
         ('a cinema', 'notice', 'the aisle seat, and whose knees move'),
         ('a night train', 'bus', 'the quiet carriage, nobody wrote it down')],
        height=460,
        alt='Three places and the one rule each lives by: in a pool the lane, fast '
            'on one side and slow on the other; in a cinema the aisle seat and whose '
            'knees move; and on a night train the quiet carriage at the end, which '
            'nobody ever wrote down.'),

 11: lambda: F.writing_frame(
        [('One thing you must do', 'You must wash anything you use.'),
         ('One thing you mustn’t', 'You mustn’t leave food with no name on it.'),
         ('The reason', 'Somebody always throws it out and feels bad.'),
         ('One thing that is free', 'You don’t have to buy anything.')],
        height=520,
        alt='The shape of the rules the learner is about to write, in four steps: '
            'one thing you must do, one thing you mustn’t, the reason behind it, and '
            'one thing you do not have to do.'),

 12: lambda: F.function_map(
        [('Members only beyond this point.', 'you mustn’t go in unless you belong'),
         ('Please respect our neighbours.', 'be quiet when you leave'),
         ('No charge for the first hour.', 'you don’t have to pay yet'),
         ('Staff will ask to see your bag.', 'a guard will stop you, and it is not personal')],
        height=580,
        alt='Four things a sign says, each with an arrow to what it actually means: '
            'you mustn’t go in unless you belong, be quiet when you leave, you do '
            'not have to pay yet, and a guard will stop you and it is not personal.'),

 13: lambda: F.before_after(
        ('The room before', ['smoke indoors', 'thirty years of custom',
                             '“it will never hold”'], 'cup'),
        ('The room after', ['the rule came in on a Monday', 'kept by the end of that week',
                            'no guards, almost no fines'], 'notice'),
        height=520,
        alt='One room before the rule and after it. Before: smoke indoors, thirty '
            'years of custom, and everybody saying it would never hold. After: the '
            'rule came in on a Monday, almost everybody was keeping it by the end of '
            'that week, with no guards and almost no fines.'),

 14: lambda: F.progress_strip(
        [('I can say what is necessary, forbidden and not necessary', False),
         ('I can use must, have to, mustn’t and don’t have to correctly', False),
         ('I can ask what the rules of a place are', False),
         ('I can write the rules for a shared space in 50–70 words', False),
         ('I can ask why a rule exists without arguing', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
