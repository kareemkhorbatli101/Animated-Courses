"""Unit 19 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        19, 'People, Places and Things',
        'Defining relative clauses',
        ['I can describe a person by what they do.',
         'I can use who, which, that and where correctly.',
         'I can point somebody out to somebody else.'],
        ['person', 'shoe', 'cloth', 'shop', 'home'],
        alt='The opening page of Unit 19, People, Places and Things: the grammar '
            'point is the defining relative clause, and three things the learner '
            'will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Actor', 'mask'), ('Author', 'pencil'), ('Farmer', 'vegetable'), ('Tailor', 'needle'), ('Waiter', 'tray')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: actor, author, '
            'farmer, tailor, waiter.'),

 3: lambda: F.bank_strip(
        [('artist', 'palette'), ('athlete', 'runner'), ('builder', 'hammer'), ('singer', 'microphone')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: artist, athlete, builder, singer.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'the woman who runs the shop'),
         ('Tomas', 'nurse', 'the one who works nights'),
         ('Maya', 'book', 'the one who carries books'),
         ('Dani', 'kitchen', 'the boy who cooks badly'),
         ('Mr Okonkwo', 'home', 'the man who watches from the fourth floor'),
         ('Yuki', 'person', 'the one who knows everybody')],
        height=560,
        alt='How the street describes each of the six people at number 14 without '
            'using a name: the woman who runs the shop, the one who works nights, '
            'the one who carries books, the boy who cooks badly and loudly, the man '
            'who watches from the fourth floor, and the one who knows everybody.'),

 5: lambda: F.word_grid(
        [('Actor', 'mask'), ('Artist', 'palette'), ('Author', 'pencil'), ('Athlete', 'runner'), ('Builder', 'hammer'), ('Singer', 'microphone'), ('Tailor', 'needle')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: actor, '
            'artist, author, athlete, builder, singer, tailor, each with the '
            'thing it means drawn beside its number.'),

        # REVIEW: pronunciation section not recognised
 6: lambda: F.sound_shape(
        [REVIEW],
        height=460,
        alt='The pronunciation point of this unit, drawn.'),

 7: lambda: F.category_set(
        [('A tailor', 'cloth'), ('A builder', 'home'),
         ('An author', 'book'), ('An athlete', 'person')],
        height=460, cols=4,
        alt='The four jobs the table asks about, each on its own card: a tailor, a '
            'builder, an author and an athlete.'),

 8: lambda: F.label_me(
        [('who', 0.293, 0.13), ('which', 0.388, 0.30), ('that', 0.483, 0.47),
         ('where', 0.578, 0.64), ('whose', 0.668, 0.80)],
        height=620, draw=F.join_line,
        alt='Five pairs of boxes stepping down to the right, each pair joined by one '
            'link. The link shows what kind of thing the joining word takes: a '
            'filled circle for a person, a square for a thing, a circle and a '
            'square together for the word that takes either, a flat bar for a '
            'place, and a circle with a hook for the one that marks belonging. Five '
            'numbered lines run to the right for the learner to write each joining '
            'word.'),

 9: lambda: F.bank_strip(
        [('actor', 'mask'), ('farmer', 'vegetable'), ('waiter', 'tray'), ('artist', 'palette')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: actor, farmer, waiter, artist.'),
 10: lambda: F.writing_frame(
        [('Who the person is', 'The woman who opens the shop at seven.'),
         ('What they do', 'She is the one who knows which bus is late.'),
         ('What you do not know', 'I have never learned her name.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- who the person is, what they do, and what you do not know '
            'about them -- with a line of the model beside each one, each '
            'using who or that.'),

 11: lambda: F.annotated_lines(
        [('Amina is the woman who runs the shop.', 'who'),
         ('The shop that sells bread opens at seven.', 'that'),
         ('Tomas is the one who works nights.', 'who'),
         ('The bus which goes to the hospital is the 14.', 'which')],
        height=440,
        alt='Four lines from the notice with the joining word ringed in each: '
            'who, that, who, which. Two of the four are about a person, which '
            'is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('the woman who runs the shop', 'who — a person',
         'Only a person, and never a thing.', [0.28]),
        ('the bus which goes there', 'which — a thing',
         'Only a thing, and never a person.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left who, which joins a '
            'person and only a person. On the right which, which joins a thing and '
            'never a person — with that able to stand in either column, which is '
            'why it is the one people actually say.'),

 13: lambda: F.timeline(
        [('the shop', 'the woman who runs it'), ('the corner', 'the man who mends shoes'),
         ('number 9', 'the tailor'), ('number 12', 'the singer'),
         ('flat 1', 'the artist nobody has met')],
        height=460,
        alt='One street along a line, with each place described by the person in it: '
            'the shop and the woman who runs it, the corner and the man who mends '
            'shoes, the tailor at number 9, the singer at number 12, and the artist '
            'in flat 1 whom nobody has met.'),
 14: lambda: F.sort_bins(
        ['person', 'thing', 'place'],
        ['who runs the shop', 'which goes to the hospital',
         'where I live', 'that sells bread'],
        height=560,
        alt='The four phrases of this task as chips above three empty bins -- '
            'person, thing and place. Which chip goes in which bin is the '
            'exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('The woman which runs the shop.', 'The woman who runs the shop.'),
         ('The woman which runs the shop opens at seven.', None),
         ('The shop that it sells bread is on the corner.', None),
         ('This is the street which I live.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 19.2', 'Yuki and Amina', 'shop', 'the woman who knows which bus is late'),
         ('Track 19.3', 'Dani and Maya', 'shoe', 'the man who mends shoes'),
         ('Track 19.4', 'Amina', 'person', 'six people, six descriptions')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina how she knows the 14 '
            'is late, Dani and Maya argue about the man on Mill Lane who mends only '
            'the heels of shoes, and Amina says how the street describes each of '
            'the six.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'There is a man on Mill Lane who only mends.'),
         ('Maya', 'person', 'There is a man on Mill Lane who only mends.'),
         ('Dani', 'book', 'That can\u2019t be a job.'),
         ('Maya', 'person', 'He has done it for forty years.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: There is a man on Mill Lane who only mends. Maya: '
            'There is a man on Mill Lane who only mends. Dani: That can\u2019t be '
            'a job. Maya: He has done it for forty years.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Dani', 'book'), ('Mr Okonkwo', 'home')],
        ['the one who carries books in both',
         'the man who sees everything and says',
         'the one who works nights',
         'the boy whose cooking you can smell',
         'the one who knows everybody\u2019s name'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('Who is the person you see most often and cannot name?', 'person'),
         ('Which shop near you is the one everybody uses?', 'shop'),
         ('Where is the street where you grew up?', 'pin')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the woman who runs', 'person')]),
        ('Student B', [('the woman who runs', 'person')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask who it was', 'ask where',
                             'say you know the one', 'ask why they mentioned you'], 'person'),
        ('Card B — telling', ['name the person by what they do', 'narrow it with one more detail',
                              'wait to be recognised',
                              'give the reason last'], 'shoe'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask who it was, '
            'ask where, say you know the one, ask why they mentioned you. Card B, '
            'telling: name the person by what they do, narrow it with one more '
            'detail, wait to be recognised, give the reason last.'),
 22: lambda: F.talk_shape(
        [('the first person', 2, 'person'),
         ('the second', 2, 'guest'),
         ('the third', 2, 'crowd')],
        height=420,
        alt='The one-minute talk as three equal beats on a clock line, one '
            'for each of the three people in your street you describe without '
            'using any names.'),

 23: lambda: F.process_strip(
        [('a new face', 'person'), ('a description', 'book'), ('the street uses it', 'shop'),
         ('it sticks', 'plaque'), ('the name is never learned', 'home')],
        height=460,
        alt='How a street holds a person it has not been introduced to, in five '
            'stages with an arrow to the next: a new face arrives, a description is '
            'made of them, the street uses the description, the description sticks, '
            'and the name is never learned at all.'),

 24: lambda: F.word_grid(
        [('neighbour', 'home'), ('nickname', 'speech'), ('landmark', 'bridge'), ('description', 'speech')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'neighbour, nickname, landmark, description.'),

 25: lambda: F.world_strip(
        [('Mill Lane', 'plaque', 'no mill; a family called Mill paid for the road'),
         ('Half of one city', 'home', 'the daughters of the man who built them, then cousins'),
         ('Forty streets', 'plaque', 'one woman who ran a school, and one small book')],
        height=460,
        alt='Three places named after a person: Mill Lane, which has no mill and is '
            'named after a family called Mill who paid for the road; half of one '
            'city whose roads carry the names of the daughters of the man who built '
            'them, and then his cousins, because there were only eleven daughters; '
            'and about forty streets across England named after one woman who ran a '
            'school for children who could not hear, each chosen by a town office '
            'that had read the same small book.'),

 26: lambda: F.writing_frame(
        [('The person', 'There is a man who walks a dog past my window.'),
         ('What they did', 'He is the person who told me which bin day it was.'),
         ('How long', 'I have lived here four years.'),
         ('What never happens', 'I have never had a conversation with him.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'the person, described by what they do; one thing they did; how long you '
            'have been there; and the thing that never happens.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'It is not rude, and it is the only way.'),
         ('two or three reasons', 'Nobody minds being the woman who runs the shop.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('where at least once', 'The corner where the two roads meet.'),
         ('what happens there', 'There is nothing there.'),
         ('one thing that changed', 'There was a postbox, which went about.')],
        height=571,
        alt='The shape of the message in three steps -- where at least once, '
            'what happens there, one thing that changed -- with a line of the '
            'model beside each one.'),

 29: lambda: F.writing_frame(
        [('the description others use', 'I am the one who is always carrying something.'),
         ('whether it is fair', 'A chair, a plant, a box of books.'),
         ('how it started', 'Nobody has ever seen me walk down this street.')],
        height=571,
        alt='The shape of the reflection in three steps -- the description '
            'others use, whether it is fair, how it started -- with a line of '
            'the model beside each one.'),

 30: lambda: F.function_map(
        [('The one with the red bag.', 'narrowing it by what you can see now'),
         ('The man who was here yesterday.', 'narrowing it by when'),
         ('You know the one.', 'asking them to remember instead of listening'),
         ('Not that one — the other one.', 'correcting a wrong guess without explaining')],
        height=580,
        alt='Four things people say when they point somebody out, each with an arrow '
            'to what it does: narrowing it by what you can see now, narrowing it by '
            'when, asking them to remember instead of listening, and correcting a '
            'wrong guess without explaining it.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Who is the man who cleans the lane?'),
         ('Maya', 'person', 'Which man?'),
         ('Yuki', 'computer', 'Tall, hat, cleans the lane on Thursdays.'),
         ('Maya', 'person', 'That is the man Amina calls the caretaker.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Who is the man who cleans the lane? Maya: Which man? Yuki: '
            'Tall, hat, cleans the lane on Thursdays. Maya: That is the man '
            'Amina calls the caretaker.'),

 32: lambda: F.sequence_steps(
        [('Say what they do, if you know it.', 'speech'),
         ('Say where they were last.', 'pin'),
         ('Accept the correction if you were wrong.', 'before_now'),
         ('Say which one they are not.', 'speech')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the one with the old name',
         ['use your name', 'be surprised', 'say how long you have used it', 'do not apologise'], 'person'),
        ('Card B \u2014 the one with the real name',
         ['give the name', 'say how you know', 'let the other one keep theirs', 'say so out loud'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the one with the '
            'old name: use your name, be surprised, say how long you have '
            'used it, do not apologise. Card B \u2014 the one with the real name: '
            'give the name, say how you know, let the other one keep theirs, '
            'say so out loud.'),

 34: lambda: F.writing_frame(
        [('two things you can see', 'A man is coming on Thursday about the window.'),
         ('one thing they do', 'He is tall, he has a grey van.'),
         ('what to do', 'He will say he needs twenty minutes and he.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- two '
            'things you can see, one thing they do, what to do -- with a line '
            'of the model beside each one.'),

 35: lambda: F.before_after(
        ('On the loom', ['thin strips', 'planned before the first thread',
                         'lines that repeat'], 'loom'),
        ('On the cloth', ['sewn side by side', 'a name for every pattern',
                          'a sentence said by the cloth'], 'cloth'),
        height=520,
        alt='A pattern on a loom beside the cloth it becomes. On the loom: narrow '
            'strips, woven on a frame a man sits inside, planned before the first '
            'thread goes on. On the cloth: the strips sewn side by side, a name for '
            'every pattern, and a cloth that says something when it is worn.'),

 36: lambda: F.word_grid(
        [('loom', 'loom'), ('weave', 'loom'), ('pattern', 'cloth'), ('strip', 'ruler')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'loom, weave, pattern, strip.'),
 37: lambda: F.close_scene(
        [('flat 1', 'door'), ('the staircase', 'stairs'),
         ('the bread for the birds', 'bread'), ('two notes', 'envelope')],
        height=460,
        alt='The woman in flat 1 nobody has met, drawn as the things she '
            'leaves behind her: the door of flat 1, the staircase she painted '
            'one August in a better grey and left no note about, the bread '
            'Dani thinks she puts out for the birds, and the two notes Yuki '
            'wrote and never posted.'),

 38: lambda: F.decision_fork(
        'Somebody in your building has never spoken to anybody?',
        [('Knock',
          ['you meet her at last', 'she explains herself at her own door'],
          'door'),
         ('Write a note',
          ['she answers when she wants', 'she has to answer something'],
          'envelope'),
         ('Leave her alone',
          ['four words a year is a decision', 'nobody ever meets her'],
          'moon')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: knock, and ask her to explain herself to a '
            'stranger at her own front door; write a note, which she can '
            'answer when she wants; or leave her alone, because four years of '
            'four words a year is a decision and not an accident.'),

 39: lambda: F.bank_strip(
        [('actor', 'mask'), ('athlete', 'runner'), ('tailor', 'needle'), ('waiter', 'tray'), ('who', 'person'), ('where', 'pin'), ('unless', 'question'), ('factory', 'factory')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: actor, '
            'athlete, tailor, waiter, who, where, unless, factory.'),

 40: lambda: F.progress_strip(
        [('I can describe a person by what they do', False),
         ('I can use who, which, that and where correctly', False),
         ('I can point somebody out to somebody else', False),
         ('I can describe a person in 50–70 words without using a name', False),
         ('I can correct somebody about a name without a quarrel', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('actor', 'mask'), ('artist', 'palette'), ('author', 'pencil'), ('athlete', 'runner'), ('builder', 'hammer'), ('farmer', 'vegetable'), ('painter', 'brush'), ('singer', 'microphone'), ('tailor', 'needle'), ('waiter', 'tray')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 19 as picture cards on one page: '
            'actor, artist, author, athlete, builder, farmer, painter, '
            'singer, tailor, waiter.'),
}
