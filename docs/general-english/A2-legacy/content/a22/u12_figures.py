"""Unit 12 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        12, 'Weather and What Might Happen',
        'Will and might',
        ['I can talk about the weather and say what it will do.',
         'I can use will, won’t and might correctly.',
         'I can write a weather warning in 50–70 words.'],
        ['sun', 'cloud', 'rain', 'snow', 'wind'],
        alt='The opening page of Unit 12, Weather and What Might Happen: the grammar '
            'point is will and might, and three things the learner will be able to do '
            'by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Storm', 'rain'), ('Shower', 'rain'), ('Fog', 'cloud'), ('Flood', 'water'), ('Ice', 'snow')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: storm, shower, '
            'fog, flood, ice.'),

 3: lambda: F.bank_strip(
        [('sunny', 'sun'), ('wind', 'wind'), ('freeze', 'snow'),
         ('temperature', 'thermometer')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: sunny, wind, freeze, temperature.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'it will rain, her shoulder says'),
         ('Tomas', 'nurse', 'it might snow; he rides in'),
         ('Maya', 'book', 'she will take a coat'),
         ('Dani', 'kitchen', 'it will be fine; he is wrong'),
         ('Mr Okonkwo', 'home', 'says nothing, brings an umbrella'),
         ('Yuki', 'cup', 'reads it twice, then asks Amina')],
        height=560,
        alt='What each of the six people at number 14 thinks the weather will do: '
            'Amina says it will rain because her shoulder says so, Tomas says it '
            'might snow and rides in anyway, Maya will take a coat, Dani says it '
            'will be fine and is wrong, Mr Okonkwo says nothing and brings an '
            'umbrella, and Yuki reads the forecast twice and then asks Amina.'),

 5: lambda: F.word_grid(
        [('Storm', 'rain'), ('Shower', 'rain'), ('Temperature', 'thermometer'), ('Fog', 'cloud'), ('Freeze', 'snow'), ('Flood', 'water'), ('Wind', 'wind')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: storm, '
            'shower, temperature, fog, freeze, flood, wind, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('It will rain', 'will'),
         ('It won\u2019t rain', 'won\u2019t'),
         ('I\u2019ll bring one', 'I\u2019ll'),
         ('I won\u2019t need it', 'won\u2019t')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: will, won\u2019t, I\u2019ll, won\u2019t.'),

 7: lambda: F.category_set(
        [('Heavy rain', 'rain'), ('Ice', 'snow'), ('Fog', 'cloud'),
         ('Thirty degrees', 'sun'), ('A storm', 'wind'), ('A flood', 'bridge')],
        height=600,
        alt='Six kinds of weather, each on its own card: heavy rain, ice, fog, '
            'thirty degrees, a storm and a flood.'),

 8: lambda: F.label_me(
        [('sunny', 0.30, 0.10), ('cloud', 0.36, 0.29),
         ('shower', 0.42, 0.49), ('snow', 0.50, 0.69), ('fog', 0.70, 0.87)],
        height=620, draw=F.sky_strip,
        alt='Five skies in a row above one ground line: a clear sun, a cloud, a '
            'cloud with rain falling from it, a cloud with crossed flakes under it, '
            'and three flat bands low down with nothing visible behind them. Five '
            'numbered lines run to the right for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('storm', 'rain'), ('ice', 'snow'), ('degree', 'thermometer'),
         ('sunny', 'sun')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: storm, ice, degree, sunny.'),
 10: lambda: F.writing_frame(
        [('What it usually does', 'It rains here in short showers.'),
         ('What happens twice a winter', 'We get fog twice a winter and the buses stop.'),
         ('What almost never happens', 'It never freezes hard enough for ice.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what the weather usually does, what happens twice a winter, '
            'and what almost never happens -- with a line of the model beside '
            'each one.'),

 11: lambda: F.annotated_lines(
        [('It will rain this afternoon.', 'will'),
         ('It might snow on Thursday.', 'might'),
         ('It won\u2019t be warm again until April.', 'won\u2019t'),
         ('I might take the bus.', 'might')],
        height=440,
        alt='Four lines from the notice with will, won\u2019t or might ringed in '
            'each. Two are sure and two are only possible, which is the '
            'question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('will · won’t', 'sure',
         'It will rain. It won’t be warm.', [0.80]),
        ('might', 'possible, not sure',
         'It might snow on Thursday.', [0.36, 0.64]),
        height=640,
        alt='The unit’s grammar as two columns. On the left will and won’t for what '
            'is sure, with one mark close to the certain end. On the right might for '
            'what is possible, with two marks in the middle, because it may go '
            'either way.'),

 13: lambda: F.timeline(
        [('this afternoon', 'it will rain'), ('Thursday', 'it might snow'),
         ('Thursday night', 'ice on the hill'), ('Friday', 'the buses won’t run'),
         ('April', 'warm again')],
        height=460,
        alt='One week of forecasts on a line: rain this afternoon for certain, '
            'possible snow on Thursday, ice on the hill on Thursday night, no buses '
            'on Friday, and warm again in April.'),
 14: lambda: F.sort_bins(
        ['sure', 'possible'],
        ['snow on Thursday', 'warm until April', 'take the bus',
         'bring an umbrella'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for what is sure and one for what is only possible. Which '
            'chip goes in which bin is the exercise, so none of them is '
            'placed.'),

 15: lambda: F.error_pairs(
        [('It will to rain.', 'It will rain.'),
         ('It will to rain this afternoon.', None),
         ('It might snows on Thursday.', None),
         ('Maybe it will perhaps rain later.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 12.2', 'Yuki and Amina', 'shop', 'the shoulder and the radio'),
         ('Track 12.3', 'Dani and Maya', 'bus', 'a journey that might not happen'),
         ('Track 12.4', 'Amina', 'person', 'six people, six forecasts')],
        height=560,
        alt='The three listenings in this unit: Amina tells Yuki her shoulder beats '
            'the radio, Maya talks Dani out of travelling into ice, and Amina '
            'describes all six forecasts she hears before nine.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'I\u2019m going to my brother\u2019s on Friday.'),
         ('Maya', 'person', 'There\u2019s ice coming Thursday night.'),
         ('Dani', 'book', 'The train will run.'),
         ('Maya', 'person', 'The buses to the station won\u2019t run in that.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: I\u2019m going to my brother\u2019s on Friday. Maya: There\u2019s '
            'ice coming Thursday night. Dani: The train will run. Maya: The '
            'buses to the station won\u2019t run in that.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['says nothing and carries an umbrella',
         'reads it twice and then asks Amina',
         'says it might snow and rides in anyway',
         'takes a coat whatever anybody says',
         'checks the river before it rains'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What will the weather do tomorrow where you are?', 'pin'),
         ('What weather stops everything where you live?', 'pin'),
         ('What do you always carry, and have you ever needed it?', 'question')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('Monday rain', 'cloud')]),
        ('Student B', [('Monday rain', 'rain')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — warning', ['say what is coming and when', 'say what will stop',
                              'do not say what to do', 'wait'], 'cloud'),
        ('Card B — deciding', ['say your plan', 'hear the problem',
                               'change one thing', 'say the new plan'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A, warning: say what is '
            'coming and when, say what will stop, do not say what to do, wait. Card '
            'B, deciding: say your plan, hear the problem, change one thing, say the '
            'new plan out loud.'),
 22: lambda: F.talk_shape(
        [('where you grew up', 1, 'home'),
         ('what it will do in each season', 2, 'cloud'),
         ('what people do about it', 2, 'umbrella')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: where you '
            'grew up, what the weather will do in each season, and what '
            'people do about it.'),

 23: lambda: F.process_strip(
        [('sixty in a hundred', 'cloud'), ('six wet mornings', 'rain'),
         ('four dry ones', 'sun'), ('the Saturday you remember', 'clock'),
         ('“it is never right”', 'person')],
        height=460,
        alt='Why a forecast is not believed, in five stages with an arrow to the '
            'next: sixty in a hundred means six wet mornings out of ten and four dry '
            'ones, but the one dry Saturday somebody called off is the one they '
            'remember, and so the forecast is never right.'),

 24: lambda: F.word_grid(
        [('forecast', 'cloud'), ('probably', 'question'), ('promised', 'speech'), ('straight', 'arrow_up')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'forecast, probably, promised, straight.'),

 25: lambda: F.world_strip(
        [('the south of Spain', 'home', 'small windows, thick shutters'),
         ('Bergen', 'bridge', 'wooden houses on stone'),
         ('the far north of Japan', 'snow', 'low roofs, doors that open inwards')],
        height=460,
        alt='Three places and what the weather built: small windows and thick '
            'shutters in the south of Spain, wooden houses built on stone in '
            'Bergen, and low roofs with doors that open inwards in the far north of '
            'Japan.'),

 26: lambda: F.writing_frame(
        [('What is coming, and when', 'There is ice coming on Thursday night.'),
         ('What it will stop', 'The buses will not run before nine.'),
         ('One thing to do', 'Go on Thursday, or go late on Friday.'),
         ('What you are doing', 'I will put salt on our steps.')],
        height=520,
        alt='The shape of the warning the learner is about to write, in four steps: '
            'what is coming and when, what it will stop, one thing the reader can '
            'do, and what you are doing yourself.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'It does, and not in the way people say.'),
         ('two or three reasons', 'Cold does not make anybody serious.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('the plan', 'We had the whole thing planned.'),
         ('what the weather did', 'On the Friday the forecast turned and said.'),
         ('what you did', 'It rained for twenty minutes at two and then.')],
        height=571,
        alt='The shape of the message in three steps -- the plan, what the '
            'weather did, what you did -- with a line of the model beside '
            'each one.'),

 29: lambda: F.writing_frame(
        [('what you would choose', 'I would choose a cold.'),
         ('why', 'Soft and wet is four months of the same grey.'),
         ('what you would give up', 'Cold and dry is hard, and it is also bright.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you would '
            'choose, why, what you would give up -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('Rain will spread from the west by midday.', 'sure, with a time'),
         ('A shower is possible inland.', 'possible, and only somewhere'),
         ('It will not get above four degrees.', 'sure, and it is a limit'),
         ('Conditions may become difficult overnight.', 'possible, warning you quietly')],
        height=580,
        alt='Four lines from a forecast, each with an arrow to how sure it is: sure '
            'with a time, possible and only somewhere, sure and a limit, and '
            'possible with a quiet warning inside it.'),

 31: lambda: F.dialogue_strip(
        [('Maya', 'person', 'They said the river might come up on Tuesday.'),
         ('Tomas', 'nurse', 'They say that every winter.'),
         ('Maya', 'person', 'They were right in the winter you were.'),
         ('Tomas', 'nurse', 'Was it bad?')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Maya: They said the river might come up on Tuesday. Tomas: They '
            'say that every winter. Maya: They were right in the winter you '
            'were. Tomas: Was it bad?'),

 32: lambda: F.sequence_steps(
        [('Say what you are doing yourself.', 'speech'),
         ('Say how sure you are.', 'speech'),
         ('Give one thing they can do.', 'tick'),
         ('Say what it will stop.', 'arrow_right')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 warning',
         ['say it once, plainly', 'say how sure you are', 'give one fact, not five', 'say what you are doing yourself'], 'warning'),
        ('Card B \u2014 not worried',
         ['say why you are not', 'ask one real question', 'change your mind or do not', 'say what you will actually do'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 warning: say it '
            'once, plainly, say how sure you are, give one fact, not five, '
            'say what you are doing yourself. Card B \u2014 not worried: say why '
            'you are not, ask one real question, change your mind or do not, '
            'say what you will actually do.'),

 34: lambda: F.writing_frame(
        [('what might happen and when', 'The river might come up on Tuesday night.'),
         ('how sure you are', 'It did the same twice before.'),
         ('one thing to do', 'Move anything that matters off a ground floor.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- what '
            'might happen and when, how sure you are, one thing to do -- with '
            'a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('A year of dust', ['a dry country', 'the radio says nothing',
                            'everybody stands outside'], 'sun'),
        ('The week the rain arrives', ['it reaches the south coast', 'six weeks moving north',
                                       'the harvest turns on it'], 'rain'),
        height=520,
        alt='Two halves of one year. A year of dust: a dry country, the radio with '
            'nothing to say, and everybody standing outside. The week the rain '
            'arrives: it reaches the south coast, moves north for six weeks, and the '
            'whole harvest turns on whether it is early, late or thin.'),

 36: lambda: F.word_grid(
        [('monsoon', 'rain'), ('harvest', 'vegetable'), ('arrival', 'airport'), ('dam', 'bridge')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'monsoon, harvest, arrival, dam.'),
 37: lambda: F.close_scene(
        [('the river', 'water'), ('the shop door', 'shop'),
         ('books moved up', 'book'), ('the fourth floor', 'stairs')],
        height=460,
        alt='The winter the river came up, drawn through number 14: the river '
            'itself, the shop door where Amina lost two days of trade and a '
            'freezer, the books Maya moved up and felt silly about on Monday, '
            'and the fourth floor that lost nothing at all.'),

 38: lambda: F.decision_fork(
        'A warning says bad weather might come, and it might not?',
        [('Do nothing until you are sure',
          ['no work at all', 'by then it is in the shop'], 'cross'),
         ('Do the small cheap thing now',
          ['ten minutes of work', 'you might feel silly'], 'tick'),
         ('Warn everybody else as well',
          ['five people move their books up', 'some of them will not believe it'],
          'loudspeaker')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: do nothing until you are sure, and by then the '
            'water is in the shop; do the small cheap thing now for ten '
            'minutes of work and the risk of feeling silly; or warn everybody '
            'else as well.'),

 39: lambda: F.bank_strip(
        [('temperature', 'thermometer'), ('junction', 'junction'),
         ('storm', 'rain'), ('might', 'question'), ('flood', 'water'),
         ('shower', 'rain'), ('will', 'arrow_right'), ('diary', 'notebook')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: temperature, '
            'junction, storm, might, flood, shower, will, diary.'),

 40: lambda: F.progress_strip(
        [('I can talk about the weather and say what it will do', False),
         ('I can use will, won’t and might correctly', False),
         ('I can understand a forecast and a warning', False),
         ('I can write a weather warning in 50–70 words', False),
         ('I can warn somebody who is not worried', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('storm', 'rain'), ('shower', 'rain'), ('temperature', 'thermometer'), ('degree', 'thermometer'), ('ice', 'snow'), ('fog', 'cloud'), ('wind', 'wind'), ('sunny', 'sun'), ('freeze', 'snow'), ('flood', 'water')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 12 as picture cards on one page: '
            'storm, shower, temperature, degree, ice, fog, wind, sunny, '
            'freeze, flood.'),
}
