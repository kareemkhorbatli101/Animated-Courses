"""Unit 14 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        14, 'Health and Feeling Better',
        'Should and shouldn’t',
        ['I can say how I feel and how long it has been.',
         'I can give advice with should and shouldn’t.',
         'I can write advice for somebody ill in 50–70 words.'],
        ['thermometer', 'pill', 'bed', 'cup', 'person'],
        alt='The opening page of Unit 14, Health and Feeling Better: the grammar '
            'point is should and shouldn’t, and three things the learner will be '
            'able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Pain', 'pill'), ('Headache', 'pill'), ('Fever', 'thermometer'), ('Throat', 'person'), ('Medicine', 'pill')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: pain, '
            'headache, fever, throat, medicine.'),

 3: lambda: F.bank_strip(
        [('doctor', 'nurse'), ('sick', 'bed'), ('pill', 'pill'), ('healthy', 'apple')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: doctor, sick, pill, healthy.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'you should eat something'),
         ('Tomas', 'nurse', 'drink water and go to bed'),
         ('Maya', 'book', 'you should look it up'),
         ('Dani', 'kitchen', 'you shouldn’t worry'),
         ('Mr Okonkwo', 'home', 'go outside for ten minutes'),
         ('Yuki', 'cup', 'says nothing, brings soup')],
        height=560,
        alt='What each of the six people at number 14 says you should do: Amina says '
            'eat something, Tomas says drink water and go to bed, Maya says look it '
            'up, Dani says you shouldn’t worry, Mr Okonkwo says go outside for ten '
            'minutes, and Yuki says nothing and brings soup.'),

 5: lambda: F.word_grid(
        [('Pain', 'pill'), ('Fever', 'thermometer'), ('Medicine', 'pill'), ('Healthy', 'apple'), ('Dentist', 'tooth'), ('Throat', 'person'), ('Sick', 'bed')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: pain, '
            'fever, medicine, healthy, dentist, throat, sick, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('You should rest', 'should'),
         ('You shouldn\u2019t wait', 'shouldn\u2019t'),
         ('Should I go?', 'Should'),
         ('Yes, you should', 'should')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: should, shouldn\u2019t, Should, should.'),

 7: lambda: F.category_set(
        [('A cold', 'thermometer'), ('A headache', 'person'), ('A tooth', 'home'),
         ('A cut', 'pill'), ('A fever', 'bed'), ('A throat', 'cup')],
        height=600,
        alt='Six everyday problems, each on its own card: a cold, a headache, a '
            'tooth, a cut, a fever and a throat.'),

 8: lambda: F.label_me(
        [('could', 0.78, 0.18), ('should', 0.62, 0.26),
         ('shouldn’t', 0.46, 0.34), ('must', 0.30, 0.42), ('now', 0.18, 0.88)],
        height=620, draw=F.advice_ladder,
        alt='Five rungs climbing from the bottom of the panel to the top, each wider '
            'and darker than the one below it, with an arrow up the right-hand side. '
            'The lowest rung is the lightest and the smallest. Five numbered lines '
            'run to the right for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('throat', 'person'), ('headache', 'pill'), ('healthy', 'apple'), ('pain', 'pill')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: throat, headache, healthy, pain.'),
 10: lambda: F.writing_frame(
        [('What they should do', 'You should drink more than you want to.'),
         ('What they should not do', 'You shouldn\u2019t take medicine for a small fever.'),
         ('When to see somebody', 'If your throat is still bad after five days, see somebody.')],
        height=571,
        alt='The shape of the two or three sentences of advice, in three '
            'steps -- what they should do, what they should not do, and when '
            'to see somebody -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('You should drink more water.', 'should'),
         ('You shouldn\u2019t go to work today.', 'shouldn\u2019t'),
         ('Should I see a doctor?', 'Should'),
         ('What should I take for it?', 'should')],
        height=440,
        alt='Four lines from the notice with should or shouldn\u2019t ringed in '
            'each. Two give advice and two ask for it, which is the question '
            'the task asks.'),

 12: lambda: F.grammar_contrast(
        ('should', 'advice for doing it',
         'You should drink more water.', [0.72]),
        ('shouldn’t', 'advice against doing it',
         'You shouldn’t go to work.', [0.28]),
        height=640,
        alt='The unit’s grammar as two columns. On the left should, which advises '
            'doing a thing, with its mark towards the yes end. On the right '
            'shouldn’t, which advises against it, with its mark towards the no end.'),

 13: lambda: F.timeline(
        [('day one', 'rest and drink'), ('day two', 'stay at home'),
         ('day four', 'still a fever?'), ('day five', 'see somebody'),
         ('day ten', 'better')],
        height=460,
        alt='One cold on a line: rest and drink on the first day, stay at home on '
            'the second, ask on the fourth whether the fever is still there, see '
            'somebody on the fifth, and better by the tenth.'),
 14: lambda: F.sort_bins(
        ['advice', 'against', 'asking'],
        ['go to work today', 'see a doctor', 'rest for two days',
         'take for it'],
        height=560,
        alt='The four sentences of this task as chips above three empty bins '
            '-- advice, advice against, and asking for advice. Which chip '
            'goes in which bin is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('You should to rest.', 'You should rest.'),
         ('You should to rest for two days.', None),
         ('You don\u2019t should go to work.', None),
         ('Should I to see a doctor?', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 14.2', 'Yuki and Tomas', 'nurse', 'asking the nurse next door'),
         ('Track 14.3', 'Dani and a chemist', 'pill', 'at the chemist'),
         ('Track 14.4', 'Amina', 'person', 'six people, six kinds of advice')],
        height=560,
        alt='The three listenings in this unit: Tomas tells Yuki what he will and '
            'will not say on a staircase, a chemist gives Dani the cheap answer, and '
            'Amina describes the six kinds of advice she is given every week.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'I need something for a throat.'),
         ('Chemist', 'person', 'Does it hurt, or is it dry?'),
         ('Dani', 'book', 'It hurts.'),
         ('Chemist', 'person', 'And how long?')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: I need something for a throat. Chemist: Does it '
            'hurt, or is it dry? Dani: It hurts. Chemist: And how long?'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['says go outside for ten minutes',
         'says rest and water',
         'says look it up, and frightens herself',
         'says nothing and leaves soup by the door',
         'says you should take two of everything'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What should somebody do for a cold where you come from?', 'list'),
         ('What advice do people give that you think is wrong?', 'crowd'),
         ('Who do you ask first when you feel ill, and why?', 'person')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('drink water', 'pin')]),
        ('Student B', [('drink warm water', 'person')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['say the problem in four words', 'answer plainly',
                             'ask what you should take', 'ask when to worry'], 'person'),
        ('Card B — advising', ['ask two questions first', 'give the cheap answer too',
                               'say when to see somebody', 'do not frighten them'], 'pill'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: say the problem '
            'in four words, answer the questions plainly, ask what you should take, '
            'ask when to worry. Card B, advising: ask two questions first, give the '
            'cheap answer as well, say when they should see somebody, do not '
            'frighten them.'),
 22: lambda: F.talk_shape(
        [('where you grew up', 1, 'home'),
         ('what people do for a cold', 2, 'cup'),
         ('which part you think works', 2, 'tick')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: where you '
            'grew up, what people do for a cold there, and which part you '
            'think works.'),

 23: lambda: F.process_strip(
        [('a small worry', 'moon'), ('a screen at night', 'book'),
         ('every answer at once', 'clock'), ('worse, not wiser', 'person'),
         ('how long is it now?', 'thermometer')],
        height=460,
        alt='One small worry in five stages with an arrow to the next: the worry, a '
            'screen at night, every possible answer listed at once, a person who '
            'feels worse rather than wiser, and the one question that sorts it: how '
            'long is it now?'),

 24: lambda: F.word_grid(
        [('symptom', 'thermometer'), ('harmless', 'tick'), ('reassure', 'hands'), ('calm', 'moon')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'symptom, harmless, reassure, calm.'),

 25: lambda: F.world_strip(
        [('soup', 'cup', 'warm water and salt, which is most of it'),
         ('steam', 'thermometer', 'nothing to the illness, twenty good minutes'),
         ('honey', 'pill', 'it coats a throat, and a child will take it')],
        height=460,
        alt='Three old remedies and what each one really does: soup, which gets warm '
            'water and salt into somebody who stopped drinking; steam, which does '
            'nothing to the illness and twenty good minutes to a blocked nose; and '
            'honey, which coats a throat that hurts and tastes good enough that a '
            'child will take it.'),

 26: lambda: F.writing_frame(
        [('What they should do', 'You should drink much more than you want to.'),
         ('What they shouldn’t', 'You shouldn’t go in tomorrow.'),
         ('When to see somebody', 'If the fever is still there after four days.'),
         ('One kind thing', 'And eat something, even if it is only toast.')],
        height=520,
        alt='The shape of the advice the learner is about to write, in four steps: '
            'what they should do, what they shouldn’t, when to see somebody, and one '
            'kind thing at the end.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'No, and the argument is not about being kind.'),
         ('two or three reasons', 'One person at a desk with a fever costs.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('who gave the advice', 'My grandmother said I should put a cut onion.'),
         ('what it was', 'I thought it was nonsense and I was right.'),
         ('whether you took it', 'I did it anyway for eleven years.')],
        height=571,
        alt='The shape of the message in three steps -- who gave the advice, '
            'what it was, whether you took it -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('what you tell people', 'I tell everybody they should go to bed.'),
         ('what you do', 'I know exactly what I should do.'),
         ('why', 'What I do instead is read one more chapter.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you tell '
            'people, what you do, why -- with a line of the model beside each '
            'one.'),

 30: lambda: F.function_map(
        [('It started on Tuesday and it has not changed.', 'the length, which is the first question'),
         ('It is worse at night.', 'the one detail that changes the answer'),
         ('I have taken nothing for it.', 'what you have already tried'),
         ('I am not worried, I just want to check.', 'why you came')],
        height=580,
        alt='Four things a person says about how they feel, each with an arrow to '
            'what it does: giving the length, giving the one detail that changes the '
            'answer, saying what has already been tried, and saying why they came.'),

 31: lambda: F.dialogue_strip(
        [('Maya', 'person', 'It is probably nothing.'),
         ('Tomas', 'nurse', 'Probably.'),
         ('Maya', 'person', 'So I should leave it.'),
         ('Tomas', 'nurse', 'You said probably nothing twice in one minute.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Maya: It is probably nothing. Tomas: Probably. Maya: So I should '
            'leave it. Tomas: You said probably nothing twice in one minute.'),

 32: lambda: F.sequence_steps(
        [('Say what you have already tried.', 'speech'),
         ('Say how long it has been there.', 'speech'),
         ('Say why you came today.', 'speech'),
         ('Say what makes it better or worse.', 'speech')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 unsure',
         ['say it is probably nothing', 'say it twice without noticing', 'push back once', 'decide'], 'person'),
        ('Card B \u2014 listening',
         ['do not say what is wrong', 'notice what they repeat', 'give one reason, not four', 'let them decide'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 unsure: say it is '
            'probably nothing, say it twice without noticing, push back once, '
            'decide. Card B \u2014 listening: do not say what is wrong, notice '
            'what they repeat, give one reason, not four, let them decide.'),

 34: lambda: F.writing_frame(
        [('what is wrong', 'I would like an appointment this week if.'),
         ('how long', 'I get a headache every day.'),
         ('what you have tried', 'I am sleeping and drinking normally and I.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- what is '
            'wrong, how long, what you have tried -- with a line of the model '
            'beside each one.'),

 35: lambda: F.before_after(
        ('Everybody to a doctor', ['one waiting room', 'three weeks for everybody',
                                   'the small and the bad together'], 'home'),
        ('A nurse on the line first', ['how long, how bad', 'most people sent to somebody else',
                                       'a chemist takes the minor list'], 'nurse'),
        height=520,
        alt='Two ways of answering the first question about health. Everybody to a '
            'doctor: one waiting room, three weeks for everybody, and the small '
            'problems sitting with the bad ones. A nurse on the line first: how '
            'long and how bad, most people sent to somebody other than a doctor, '
            'and a chemist handling the minor list.'),

 36: lambda: F.word_grid(
        [('triage', 'list'), ('pharmacist', 'pill'), ('minor', 'stones'), ('urgent', 'siren')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'triage, pharmacist, minor, urgent.'),
 37: lambda: F.close_scene(
        [('the top flight', 'home'), ('nine days', 'calendar'),
         ('the shop shut', 'shop'), ('bread up four flights', 'bread')],
        height=460,
        alt='The nine days it went through number 14, drawn from the top '
            'down: the top flat where it started with Yuki, the nine days it '
            'took, the two days Amina shut the shop for the only time in '
            'eleven years, and the bread Mr Okonkwo carried up four flights '
            'at seventy-one.'),

 38: lambda: F.decision_fork(
        'A neighbour is clearly ill and says they are fine?',
        [('Say nothing',
          ['you ask them for nothing', 'they are worse by Thursday'], 'cross'),
         ('Ask once and leave it',
          ['they know you can see it', 'an ill person has to answer'], 'speech'),
         ('Bring something round',
          ['they do no work at all', 'you may be in the way'], 'bowl')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: say nothing and they are worse by Thursday; ask '
            'once, which makes an ill person answer a question; or bring '
            'something round, which you can walk past in a way you cannot '
            'walk past a conversation.'),

 39: lambda: F.bank_strip(
        [('fever', 'thermometer'), ('medicine', 'pill'), ('dentist', 'tooth'), ('healthy', 'apple'), ('should', 'list'), ('shouldn\u2019t', 'cross'), ('guard', 'guard'), ('storm', 'rain')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: fever, '
            'medicine, dentist, healthy, should, shouldn\u2019t, guard, storm.'),

 40: lambda: F.progress_strip(
        [('I can say how I feel and how long it has been', False),
         ('I can give advice with should and shouldn’t', False),
         ('I can ask for advice at a chemist or a surgery', False),
         ('I can write advice for somebody ill in 50–70 words', False),
         ('I can tell somebody they should see a doctor', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('pain', 'pill'), ('headache', 'pill'), ('medicine', 'pill'), ('pill', 'pill'), ('healthy', 'apple'), ('sick', 'bed'), ('doctor', 'nurse'), ('fever', 'thermometer'), ('throat', 'person'), ('dentist', 'tooth')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 14 as picture cards on one page: '
            'pain, headache, medicine, pill, healthy, sick, doctor, fever, '
            'throat, dentist.'),
}
