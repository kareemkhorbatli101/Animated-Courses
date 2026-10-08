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

 2: lambda: F.word_grid(
        [('Law', 'plaque'), ('Allowed', 'tick'), ('Private', 'key'), ('Guard', 'guard'), ('Fee', 'coins')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: law, allowed, '
            'private, guard, fee.'),

 3: lambda: F.bank_strip(
        [('silence', 'moon'), ('smoking', 'cross'), ('uniform', 'guard'), ('member', 'certificate')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: silence, smoking, uniform, member.'),

 4: lambda: F.scene(
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

 5: lambda: F.word_grid(
        [('Law', 'plaque'), ('Licence', 'certificate'), ('Member', 'certificate'), ('Uniform', 'guard'), ('Guard', 'guard'), ('Fee', 'coins'), ('Silence', 'moon')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: law, '
            'licence, member, uniform, guard, fee, silence, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('You must wait', 'must'),
         ('You mustn\u2019t wait', 'mustn\u2019t'),
         ('You have to wait', 'have to'),
         ('You don\u2019t have to wait', 'don\u2019t')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: must, mustn\u2019t, have to, don\u2019t.'),

 7: lambda: F.category_set(
        [('A library', 'book'), ('A pool', 'cup'), ('A gallery', 'notice'),
         ('A night bus', 'bus'), ('A club', 'home'), ('A shop', 'shop')],
        height=600,
        alt='Six places, each on its own card: a library, a pool, a gallery, a night '
            'bus, a club and a shop.'),

 8: lambda: F.label_me(
        [('mustn’t', 0.24, 0.12), ('must', 0.34, 0.33),
         ('don’t have to', 0.46, 0.54), ('member', 0.58, 0.74), ('fee', 0.72, 0.90)],
        height=620, draw=F.rule_wall,
        alt='A wall with five notices on it, each carrying a different mark: a '
            'crossed circle, a tick, an open square, a key, and one with a plain '
            'line and nothing else. Five numbered lines run to the right for the '
            'learner to write each word.'),

 9: lambda: F.bank_strip(
        [('private', 'key'), ('allowed', 'tick'), ('law', 'plaque'), ('smoking', 'cross')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: private, allowed, law, smoking.'),
 10: lambda: F.writing_frame(
        [('What you must not do', 'You must not leave anything on the stairs.'),
         ('Why everybody keeps it', 'Everybody keeps that one because of the fire door.'),
         ('What you do not have to do', 'You do not have to tell anybody when you move out.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what you must not do, why everybody keeps that rule, and what '
            'you do not have to do -- with a line of the model beside each '
            'one.'),

 11: lambda: F.annotated_lines(
        [('You must show your card at the desk.', 'must'),
         ('You have to be a member to use the room.', 'have to'),
         ('You mustn\u2019t touch the paintings.', 'mustn\u2019t'),
         ('You don\u2019t have to pay a fee.', 'don\u2019t have to')],
        height=440,
        alt='Four lines from the notice with the rule word ringed in each: '
            'must, have to, mustn\u2019t and don\u2019t have to. Two say you cannot and '
            'one says you need not, which is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('mustn’t', 'forbidden',
         'You mustn’t touch the paintings.', [0.10]),
        ('don’t have to', 'not necessary',
         'You don’t have to pay a fee.', [0.90]),
        height=640,
        alt='The unit’s grammar as two columns, set as far apart as the page allows. '
            'On the left mustn’t, which forbids, with its mark at the closed end. On '
            'the right don’t have to, which frees, with its mark at the open end. '
            'The two sound alike and mean opposite things.'),

 13: lambda: F.timeline(
        [('the door', 'you must show your card'), ('the desk', 'you have to be a member'),
         ('the locker', 'bags go in, and it is free'), ('the room', 'you mustn’t touch'),
         ('the garden', 'you don’t have to be quiet')],
        height=460,
        alt='One visit on a line, from the door to the garden: you must show your '
            'card at the door, you have to be a member at the desk, bags go in a '
            'free locker, you mustn’t touch anything in the room, and in the garden '
            'you do not have to be quiet.'),
 14: lambda: F.sort_bins(
        ['necessary', 'forbidden', 'not necessary'],
        ['touch the paintings', 'pay a fee', 'be a member',
         'be quiet in the garden'],
        height=560,
        alt='The four rules of this task as chips above three empty bins -- '
            'necessary, forbidden and not necessary. Which chip goes in which '
            'bin is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('You don\u2019t must touch it.', 'You mustn\u2019t touch it.'),
         ('You don\u2019t must touch the paintings.', None),
         ('You mustn\u2019t pay, the gallery is free.', None),
         ('You have to showing your card at the desk.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 13.2', 'Yuki and a guard', 'guard', 'the guard and the bag'),
         ('Track 13.3', 'Dani and Amina', 'shop', 'the rules of the shop'),
         ('Track 13.4', 'Amina', 'person', 'six people, six rules')],
        height=560,
        alt='The three listenings in this unit: a gallery guard tells Yuki what she '
            'must and need not leave at the door, Amina lists the four rules of her '
            'shop to Dani, and Amina describes the one rule each of the six will not '
            'break.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'Amina, do you have rules in here?'),
         ('Amina', 'shop', 'Four.'),
         ('Dani', 'book', 'And the fourth?'),
         ('Amina', 'shop', 'You mustn\u2019t tell me what you think.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: Amina, do you have rules in here? Amina: Four. Dani: '
            'And the fourth? Amina: You mustn\u2019t tell me what you think.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['mustn\u2019t be late, because of the hospital',
         'asks what the rule is before anything',
         'must have the front door shut behind her',
         'keeps every rule and makes two more',
         'pays the fee a week late every month'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What must you not do in your building or your street?', 'pin'),
         ('What do people think you have to do, but you do not?', 'cross'),
         ('What is one rule you think is wrong?', 'question')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('you must shower first', 'rain')]),
        ('Student B', [('you must shower first', 'cross')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask one thing at a time', 'ask about the fee',
                             'check what is forbidden', 'thank them'], 'person'),
        ('Card B — telling', ['say what is necessary', 'say plainly what is free',
                              'name the thing people forget', 'do not explain it'], 'guard'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask one thing at '
            'a time, ask about the fee, check what is forbidden, thank them. Card B, '
            'telling: say what is necessary, say plainly what is free, name the one '
            'thing people forget, do not explain the rule.'),
 22: lambda: F.talk_shape(
        [('which place', 1, 'pin'),
         ('its three most important rules', 3, 'list'),
         ('what happens if you break one', 1, 'warning')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: which place '
            'it is, its three most important rules, and what happens if you '
            'break one.'),

 23: lambda: F.process_strip(
        [('a reason you can see', 'notice'), ('fairness', 'person'),
         ('somebody will mention it', 'guard'), ('the rule is kept', 'home'),
         ('take one away', 'moon')],
        height=460,
        alt='What a rule needs, in five stages with an arrow to the next: a reason '
            'you can see, fairness, somebody willing to mention it, and then the '
            'rule is kept. Take any one of the three away and the notice stays on '
            'the wall and means nothing.'),

 24: lambda: F.word_grid(
        [('obey', 'tick'), ('fairness', 'scales'), ('excuse', 'speech'), ('reason', 'question')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: obey, '
            'fairness, excuse, reason.'),

 25: lambda: F.world_strip(
        [('a pool', 'cup', 'the lane: fast one side, slow the other'),
         ('a cinema', 'notice', 'the aisle seat, and whose knees move'),
         ('a night train', 'bus', 'the quiet carriage, nobody wrote it down')],
        height=460,
        alt='Three places and the one rule each lives by: in a pool the lane, fast '
            'on one side and slow on the other; in a cinema the aisle seat and whose '
            'knees move; and on a night train the quiet carriage at the end, which '
            'nobody ever wrote down.'),

 26: lambda: F.writing_frame(
        [('One thing you must do', 'You must wash anything you use.'),
         ('One thing you mustn’t', 'You mustn’t leave food with no name on it.'),
         ('The reason', 'Somebody always throws it out and feels bad.'),
         ('One thing that is free', 'You don’t have to buy anything.')],
        height=520,
        alt='The shape of the rules the learner is about to write, in four steps: '
            'one thing you must do, one thing you mustn’t, the reason behind it, and '
            'one thing you do not have to do.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'Write it down, and I say that as somebody who.'),
         ('two or three reasons', 'A rule nobody wrote is a rule you learn by.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what you did', 'I stood on the left on an escalator for about.'),
         ('what happened', 'A whole city went round me making a noise I.'),
         ('what you do now', 'Nobody said anything.')],
        height=571,
        alt='The shape of the message in three steps -- what you did, what '
            'happened, what you do now -- with a line of the model beside '
            'each one.'),

 29: lambda: F.writing_frame(
        [('which rule', 'I would change the rule that a library must.'),
         ('why', 'Quiet, yes.'),
         ('what you would put in its', 'No sound makes a room where a child cannot.')],
        height=571,
        alt='The shape of the reflection in three steps -- which rule, why, '
            'what you would put in its -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('Members only beyond this point.', 'you mustn’t go in unless you belong'),
         ('Please respect our neighbours.', 'be quiet when you leave'),
         ('No charge for the first hour.', 'you don’t have to pay yet'),
         ('Staff will ask to see your bag.', 'a guard will stop you, and it is not personal')],
        height=580,
        alt='Four things a sign says, each with an arrow to what it actually means: '
            'you mustn’t go in unless you belong, be quiet when you leave, you do '
            'not have to pay yet, and a guard will stop you and it is not personal.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Why must the bins go out after six?'),
         ('Amina', 'shop', 'Because the big van comes at seven.'),
         ('Yuki', 'computer', 'Nobody mentioned that to me.'),
         ('Amina', 'shop', 'You find out when somebody is cross with you.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Why must the bins go out after six? Amina: Because the big '
            'van comes at seven. Yuki: Nobody mentioned that to me. Amina: '
            'You find out when somebody is cross with you.'),

 32: lambda: F.sequence_steps(
        [('Say what happens if nobody keeps it.', 'speech'),
         ('Give the reason behind it.', 'question'),
         ('Say who it does not apply to.', 'person'),
         ('Ask whether that makes sense.', 'question')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 asking',
         ['ask why, not whether', 'say you were not told', 'say what you think of it', 'ask one more'], 'question'),
        ('Card B \u2014 explaining',
         ['give the reason in one sentence', 'admit what you do not know', 'do not defend the system', 'agree where you agree'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 asking: ask why, '
            'not whether, say you were not told, say what you think of it, '
            'ask one more. Card B \u2014 explaining: give the reason in one '
            'sentence, admit what you do not know, do not defend the system, '
            'agree where you agree.'),

 34: lambda: F.writing_frame(
        [('the rule in the first', 'You must shut this door, not push it to.'),
         ('the reason', 'The lock is slow and it looks shut when.'),
         ('one thing you do not have', 'You don\u2019t have to lock it during the day.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- the rule '
            'in the first, the reason, one thing you do not have -- with a '
            'line of the model beside each one.'),

 35: lambda: F.before_after(
        ('The room before', ['smoke indoors', 'thirty years of custom',
                             '“it will never hold”'], 'cup'),
        ('The room after', ['the rule came in on a Monday', 'kept by the end of that week',
                            'no guards, almost no fines'], 'notice'),
        height=520,
        alt='One room before the rule and after it. Before: smoke indoors, thirty '
            'years of custom, and everybody saying it would never hold. After: the '
            'rule came in on a Monday, almost everybody was keeping it by the end of '
            'that week, with no guards and almost no fines.'),

 36: lambda: F.word_grid(
        [('indoors', 'home'), ('custom', 'calendar'), ('habit', 'cup'), ('owner', 'person')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'indoors, custom, habit, owner.'),
 37: lambda: F.close_scene(
        [('the bins after six', 'bin'), ('the front door', 'door'),
         ('in front of the shop', 'shop'), ('the side door', 'key')],
        height=460,
        alt='The eleven rules nobody wrote down, drawn where they live: the '
            'bins that go out after six, the front door you must pull shut '
            'and not push to, the space in front of the shop where nobody '
            'parks before nine, and the side door nobody uses after nine for '
            'a reason nobody now alive knows.'),

 38: lambda: F.decision_fork(
        'A place you belong to has rules nobody has written down?',
        [('Write them on a notice',
          ['everybody can read them', 'a building is not a station'], 'notice'),
         ('Tell each new person yourself',
          ['it is a way of meeting them', 'you have to be there'], 'speech'),
         ('Leave it as it is',
          ['nothing to do', 'a new person finds out when somebody tells them'],
          'cross')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: write them on a notice, which makes a building '
            'sound like a station; tell each new person yourself, which is a '
            'way of meeting them; or leave it, and a new person finds out '
            'when somebody tells them off.'),

 39: lambda: F.bank_strip(
        [('licence', 'certificate'), ('guard', 'guard'), ('fee', 'coins'), ('member', 'certificate'), ('mustn\u2019t', 'cross'), ('don\u2019t have to', 'cross'), ('storm', 'rain'), ('diary', 'notebook')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'licence, guard, fee, member, mustn\u2019t, don\u2019t have to, storm, '
            'diary.'),

 40: lambda: F.progress_strip(
        [('I can say what is necessary, forbidden and not necessary', False),
         ('I can use must, have to, mustn’t and don’t have to correctly', False),
         ('I can ask what the rules of a place are', False),
         ('I can write the rules for a shared space in 50–70 words', False),
         ('I can ask why a rule exists without arguing', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('law', 'plaque'), ('allowed', 'tick'), ('silence', 'moon'), ('smoking', 'cross'), ('member', 'certificate'), ('private', 'key'), ('uniform', 'guard'), ('licence', 'certificate'), ('guard', 'guard'), ('fee', 'coins')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 13 as picture cards on one page: '
            'law, allowed, silence, smoking, member, private, uniform, '
            'licence, guard, fee.'),
}
