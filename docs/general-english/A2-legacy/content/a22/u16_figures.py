"""Unit 16 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        16, 'Then and Now',
        'Present perfect and past simple',
        ['I can say when something finished and when something still runs.',
         'I can use since and for correctly.',
         'I can describe a place as it was and as it is.'],
        ['clock', 'camera', 'record', 'shop', 'home'],
        alt='The opening page of Unit 16, Then and Now: the grammar point is the '
            'present perfect against the past simple, and three things the learner '
            'will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Modern', 'screen'), ('Century', 'calendar'), ('Childhood', 'person'), ('Nowadays', 'screen'), ('Engine', 'factory')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: modern, '
            'century, childhood, nowadays, engine.'),

 3: lambda: F.bank_strip(
        [('camera', 'camera'), ('mobile', 'mobile'), ('computer', 'computer'), ('record', 'record')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: camera, mobile, computer, record.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'has not changed the shelves'),
         ('Tomas', 'nurse', 'has worked nights since twenty-four'),
         ('Maya', 'home', 'has lived in three of the five flats'),
         ('Dani', 'kitchen', 'has changed nothing at all'),
         ('Mr Okonkwo', 'person', 'has seen off two owners'),
         ('Yuki', 'cup', 'has learned all of their names')],
        height=560,
        alt='What has changed for each of the six people at number 14, and what has '
            'not: Amina has not changed the shelves of her shop in eleven years, '
            'Tomas has worked nights since he was twenty-four, Maya has lived in '
            'three of the five flats, Dani has changed nothing at all, Mr Okonkwo '
            'has seen off two owners, and Yuki has learned all of their names.'),

 5: lambda: F.word_grid(
        [('Modern', 'screen'), ('Century', 'calendar'), ('Childhood', 'person'), ('Record', 'record'), ('Engine', 'factory'), ('Camera', 'camera'), ('Nowadays', 'screen')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: modern, '
            'century, childhood, record, engine, camera, nowadays, each with '
            'the thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('I lived there', 'lived'),
         ('I have lived there', 'have'),
         ('It changed', 'changed'),
         ('It has changed', 'has')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: lived, have, changed, has. The word that changes '
            'is never the verb; it is the little word in front of it.'),

 7: lambda: F.category_set(
        [('A letter', 'notice'), ('A camera', 'camera'),
         ('A map', 'sign'), ('A telephone', 'mobile')],
        height=460, cols=4,
        alt='The four things the table asks about, each on its own card: a letter, a '
            'camera, a map and a telephone.'),

 8: lambda: F.label_me(
        [('in March', 0.293, 0.13), ('since March', 0.388, 0.30),
         ('for four years', 0.483, 0.47), ('four years ago', 0.578, 0.64),
         ('this year', 0.668, 0.80)],
        height=620, draw=F.change_line,
        alt='One street’s time drawn as a line running left to right, with five '
            'different marks on it: a closed box for a finished month, a circle '
            'with the line carrying on past it for a starting point, a bar capped '
            'at both ends for a measured length, a circle with a stem for one point '
            'counted back from now, and an open bracket for a period that has not '
            'finished. Five numbered lines run to the right for the learner to '
            'write each time phrase.'),

 9: lambda: F.bank_strip(
        [('gas', 'factory'), ('childhood', 'person'), ('modern', 'screen'),
         ('engine', 'factory')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: gas, childhood, modern, engine.'),
 10: lambda: F.writing_frame(
        [('What changed', 'The market moved in the spring.'),
         ('What it has been like since', 'The square has been quiet ever since.'),
         ('What there is now', 'Nowadays there are four tables outside a coffee shop.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what changed, what it has been like since, and what there is '
            'now -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('Amina opened the shop eleven years ago.', 'opened'),
         ('She has not changed the shelves since.', 'has not changed'),
         ('Tomas started at twenty-four.', 'started'),
         ('He has worked nights ever since.', 'has worked')],
        height=440,
        alt='Four lines from the notice with the verb ringed in each. Two '
            'carry a finished time and two run up to now, which is the '
            'question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('She opened the shop eleven years ago.', 'a finished time you can name',
         'One point, and the sentence names it.', [0.28]),
        ('She has not changed it since.', 'from then until now',
         'A line that starts and reaches now.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the past simple for a '
            'finished time, with one mark on the exact point the sentence names. On '
            'the right the present perfect, with three marks running from that '
            'point up to now, because no time is named and the line is still open.'),

 13: lambda: F.timeline(
        [('eleven years ago', 'Amina opened the shop'),
         ('at twenty-four', 'Tomas started at the hospital'),
         ('four years ago', 'Maya moved in'),
         ('in the spring', 'the market moved'),
         ('this morning', 'the square is still quiet')],
        height=460,
        alt='One street on a line, from eleven years ago to this morning: Amina '
            'opened the shop eleven years ago, Tomas started at the hospital at '
            'twenty-four, Maya moved in four years ago, the market moved in the '
            'spring, and the square is still quiet this morning.'),
 14: lambda: F.sort_bins(
        ['finished', 'up to now'],
        ['eleven years ago', 'the shelves since', 'at twenty-four',
         'nights for four years'],
        height=540,
        alt='The four phrases of this task as chips above two empty bins, one '
            'for a finished time and one for a time running up to now. Which '
            'chip goes in which bin is the exercise, so none of them is '
            'placed.'),

 15: lambda: F.error_pairs(
        [('I have lived here since four years.', 'I have lived here for four years.'),
         ('I have lived here since four years.', None),
         ('She has opened the shop in March.', None),
         ('He works nights since he was twenty-four.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 16.2', 'Yuki and Mr Okonkwo', 'shop', 'what the street used to be'),
         ('Track 16.3', 'Dani and Maya', 'camera', 'the camera that still works'),
         ('Track 16.4', 'Amina', 'person', 'six people, six changes')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Mr Okonkwo what was on the '
            'street before, Dani asks Maya why she still uses a camera that takes '
            'film, and Amina describes what has changed for each of the six.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'You still use that?'),
         ('Maya', 'person', 'I have used it since I was fifteen.'),
         ('Dani', 'book', 'It takes film.'),
         ('Maya', 'person', 'There\u2019s still film in the shop on the corner.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: You still use that? Maya: I have used it since I was '
            'fifteen. Dani: It takes film. Maya: There\u2019s still film in the '
            'shop on the corner.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Dani', 'book'), ('Mr Okonkwo', 'home')],
        ['has lived in three of the five flats',
         'has changed nothing',
         'has done nights since he was twenty-four',
         'has seen off two owners',
         'has learned every name in the building'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What has changed where you live since you arrived?', 'pin'),
         ('What was there before it?', 'before_now'),
         ('What has not changed at all, and are you glad?', 'before_now')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the market moved', 'many_things')]),
        ('Student B', [('the market is still', 'one_thing')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask what was there before', 'ask again, further back',
                             'ask about one more thing', 'say what you think'], 'person'),
        ('Card B — telling', ['name the thing that was there', 'give one finished date',
                              'give one thing that still runs',
                              'do not say whether it is better'], 'shop'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask what was there '
            'before, ask again further back, ask about one more thing, say what you '
            'think. Card B, telling: name the thing that was there, give one '
            'finished date, give one thing that still runs, do not say whether it is '
            'better.'),
 22: lambda: F.talk_shape(
        [('your street when you arrived', 2, 'before_now'),
         ('your street now', 2, 'street')],
        height=420,
        alt='The one-minute talk as two beats on a clock line, each the same '
            'width: your street as it was when you arrived, and your street '
            'as it is now.'),

 23: lambda: F.process_strip(
        [('looks wrong', 'cloud'), ('dated', 'camera'), ('thirty years', 'clock'),
         ('a period', 'book'), ('history', 'home')],
        height=460,
        alt='How a recent thing becomes an old thing, in five stages with an arrow to '
            'the next: it looks wrong, it looks dated, about thirty years pass, it '
            'becomes a period, and in the end it reads as history.'),

 24: lambda: F.word_grid(
        [('fashion', 'coat'), ('dated', 'calendar'), ('taste', 'cup'), ('period', 'calendar')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'fashion, dated, taste, period.'),

 25: lambda: F.world_strip(
        [('Records', 'record', 'back thirty years later, because they are slow'),
         ('Trams', 'tram', 'hard to move, which is why they went and why they return'),
         ('The bicycle lane', 'bicycle', 'kept in the Netherlands, and back out of it')],
        height=460,
        alt='Three things people threw away and then wanted again: records, which '
            'came back thirty years later because they are slow and you have to '
            'choose; trams, which are hard to move, the reason they were taken out '
            'and the reason they are being laid again; and bicycle lanes, which the '
            'Dutch cities kept and which have travelled back out of the Netherlands '
            'to the countries that invented them.'),

 26: lambda: F.writing_frame(
        [('The finished time', 'The market moved in the spring.'),
         ('The line to now', 'The square has been quiet ever since.'),
         ('One thing before', 'There was a shoe shop on the corner until ten years ago.'),
         ('One thing unchanged', 'The school has not changed.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: one '
            'finished time, one line that runs to now, one thing that was there '
            'before, and one thing that has not changed at all.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'It was not, and most of the ones saying.'),
         ('two or three reasons', 'What has improved is almost everything.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what has not changed', 'I have had the same walk for nine years.'),
         ('how long', 'Everything round it has changed twice.'),
         ('why it has lasted', 'The walk has lasted because nobody has ever.')],
        height=571,
        alt='The shape of the message in three steps -- what has not changed, '
            'how long, why it has lasted -- with a line of the model beside '
            'each one.'),

 29: lambda: F.writing_frame(
        [('what the photograph shows', 'There is a photograph of me at nineteen.'),
         ('how it has changed for you', 'I have looked at it about twice in ten years.'),
         ('why', 'Nothing in the photograph has changed.')],
        height=571,
        alt='The shape of the reflection in three steps -- what the '
            'photograph shows, how it has changed for you, why -- with a line '
            'of the model beside each one.'),

 30: lambda: F.function_map(
        [('There used to be a market here.', 'saying what was there before'),
         ('It has been like this since the spring.', 'giving a starting point for now'),
         ('It was better, and I would say that anyway.',
          'admitting your opinion may be wrong'),
         ('I have not been back for years.', 'saying your information is old')],
        height=580,
        alt='Four things people say about change, each with an arrow to what it does: '
            'saying what was there before, giving a starting point for now, admitting '
            'your own opinion may be wrong, and saying that your information is old.'),

 31: lambda: F.dialogue_strip(
        [('Amina', 'shop', 'It was a bread shop.'),
         ('Mr Okonkwo', 'home', 'It was never a bread shop.'),
         ('Amina', 'shop', 'I have lived here eleven years and it was.'),
         ('Mr Okonkwo', 'home', 'You came in the last two years of it.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Amina: It was a bread shop. Mr Okonkwo: It was never a bread '
            'shop. Amina: I have lived here eleven years and it was. Mr '
            'Okonkwo: You came in the last two years of it.'),

 32: lambda: F.sequence_steps(
        [('Say how long you have been watching.', 'before_now'),
         ('Say what was there before.', 'before_now'),
         ('Say what you think, and that you would think.', 'speech'),
         ('Say when it changed.', 'speech')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the newer one',
         ['say what you remember', 'say how long you have been here', 'hear the correction', 'agree out loud'], 'person'),
        ('Card B \u2014 the older one',
         ['correct the fact, not the person', 'give the longer stretch', 'explain why they remember', 'do not win'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the newer one: '
            'say what you remember, say how long you have been here, hear the '
            'correction, agree out loud. Card B \u2014 the older one: correct the '
            'fact, not the person, give the longer stretch, explain why they '
            'remember it that way, do not win.'),

 34: lambda: F.writing_frame(
        [('two things that have', 'The market has gone; it moved to the car park.'),
         ('one finished date', 'The shoe shop closed ten years ago.'),
         ('one thing that has', 'The school has not changed and neither has.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- two '
            'things that have, one finished date, one thing that has -- with '
            'a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('The painting', ['every window', 'every sign', 'paid by the detail'], 'painting'),
        ('The street', ['the same window', 'the same sign',
                        'not the memory of anybody living'], 'home'),
        height=520,
        alt='A painting on a wall beside a street built to match it. The painting has '
            'every window and every sign in it, because the man who painted it was '
            'paid by the detail. The street repeats the same windows and the same '
            'signs, because the ones rebuilding it went back to the painting and not '
            'to the memory of anybody living.'),

 36: lambda: F.word_grid(
        [('rebuild', 'hammer'), ('detail', 'magnifier'), ('painting', 'painting'), ('centre', 'pin')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'rebuild, detail, painting, centre.'),
 37: lambda: F.close_scene(
        [('tools', 'spanner'), ('a bread shop', 'bread'),
         ('the phone shop', 'mobile'), ('the hinge', 'door')],
        height=460,
        alt='The four things the corner has been in thirty years, in the '
            'order they came: tools for twenty of those years, the bread shop '
            'Amina went into every morning for two years, the phone shop Maya '
            'says it has always been, and the hinge Mr Okonkwo bought there '
            'in his first week and still has.'),

 38: lambda: F.decision_fork(
        'A place you know is about to change. What do you do?',
        [('Write down what it was',
          ['memory is the part you can keep', 'nobody will ask for it now'],
          'notebook'),
         ('Say nothing and let it go',
          ['nothing to do', 'five people will say five things'], 'cross'),
         ('Tell everybody who will listen',
          ['they all hear it', 'nobody asked you to'],
          'loudspeaker')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: write down what it was, because memory is the '
            'only part you can keep; say nothing, and in ten years five '
            'people will say five different things; or tell everybody, when '
            'somebody about to lose something does not want a speech about '
            'it.'),

 39: lambda: F.bank_strip(
        [('engine', 'factory'), ('pain', 'pill'), ('modern', 'screen'),
         ('has not changed', 'before_now'), ('nowadays', 'screen'),
         ('childhood', 'person'), ('opened', 'door'), ('abroad', 'plane')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'engine, pain, modern, has not changed, nowadays, childhood, '
            'opened, abroad.'),

 40: lambda: F.progress_strip(
        [('I can say when something finished and when something still runs', False),
         ('I can use since and for correctly', False),
         ('I can describe a place as it was and as it is', False),
         ('I can write about a change in 50–70 words', False),
         ('I can correct somebody about the past without arguing', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('modern', 'screen'), ('century', 'calendar'), ('childhood', 'person'), ('nowadays', 'screen'), ('camera', 'camera'), ('record', 'record'), ('engine', 'factory'), ('gas', 'factory'), ('computer', 'computer'), ('mobile', 'mobile')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 16 as picture cards on one page: '
            'modern, century, childhood, nowadays, camera, record, engine, '
            'gas, computer, mobile.'),
}
