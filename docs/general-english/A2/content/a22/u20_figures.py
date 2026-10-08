"""Unit 20 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        20, 'News, Stories and Messages',
        'Reported speech',
        ['I can report what somebody said.',
         'I can use said, told and asked correctly.',
         'I can report a question without making it a question.'],
        ['newspaper', 'envelope', 'stamp', 'mobile', 'notebook'],
        alt='The opening page of Unit 20, News, Stories and Messages: the grammar '
            'point is reported speech, and three things the learner will be able to '
            'do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('News', 'newspaper'), ('Reply', 'envelope'), ('Envelope', 'envelope'), ('Stamp', 'stamp'), ('Rumour', 'speech')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: news, reply, '
            'envelope, stamp, rumour.'),

 3: lambda: F.bank_strip(
        [('text', 'mobile'), ('article', 'newspaper'), ('interview', 'speech'), ('reporter', 'newspaper')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: text, article, interview, reporter.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'said twenty minutes'),
         ('Tomas', 'nurse', 'said an hour'),
         ('Maya', 'book', 'said she had not seen a van'),
         ('Dani', 'mobile', 'said somebody had told him'),
         ('Mr Okonkwo', 'home', 'said one sentence, a week later'),
         ('Yuki', 'notebook', 'wrote down what each of them said')],
        height=560,
        alt='What each of the six people at number 14 said about the van on Alder '
            'Street: Amina said twenty minutes, Tomas said an hour, Maya said she '
            'had not seen a van at all, Dani said somebody had told him it was a '
            'lorry, Mr Okonkwo said one sentence a week later, and Yuki wrote down '
            'what each of them said on the day.'),

 5: lambda: F.word_grid(
        [('News', 'newspaper'), ('Text', 'mobile'), ('Reply', 'envelope'), ('Rumour', 'speech'), ('Article', 'newspaper'), ('Interview', 'speech'), ('Reporter', 'newspaper')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: news, '
            'text, reply, rumour, article, interview, reporter, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('He said, “I am tired”', 'said'),
         ('He said he was tired', 'said'),
         ('She asked, “Where is it?”', 'asked'),
         ('She asked where it was', 'asked')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: said, said, asked, asked. When you report a '
            'question the question mark goes, and so does the voice going up '
            'at the end.'),

 7: lambda: F.category_set(
        [('The van is outside', 'mobile'), ('I have not seen it', 'person'),
         ('Where is the key', 'key'), ('Ring me tonight', 'clock')],
        height=460, cols=4,
        alt='The four messages the table asks about, each on its own card: the van '
            'is outside, I have not seen it, where is the key, and ring me '
            'tonight.'),

 8: lambda: F.label_me(
        [('said', 0.293, 0.13), ('told', 0.388, 0.30), ('asked', 0.483, 0.47),
         ('answered', 0.578, 0.64), ('explained', 0.668, 0.80)],
        height=620, draw=F.report_steps,
        alt='Five pairs of boxes stepping down to the right. The left box of each '
            'pair carries a pair of quotation marks, for the words as they were '
            'said; the right box is plain, for the same thing reported. A bar '
            'between them carries one tick for each step the tense moves back, and '
            'one pair has a struck-out question mark above it, because a reported '
            'question loses its mark as well as its word order. Five numbered lines '
            'run to the right for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('news', 'newspaper'), ('stamp', 'stamp'), ('envelope', 'envelope'), ('false', 'cross')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: news, stamp, envelope, false.'),
 10: lambda: F.writing_frame(
        [('Who told you', 'Amina told me the van had been there since Tuesday.'),
         ('What they said', 'She said nobody had asked about it.'),
         ('What you said back', 'I said I had not noticed it at all.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- who told you, what they said, and what you said back -- with '
            'a line of the model beside each one, each using said or told.'),

 11: lambda: F.annotated_lines(
        [('She said the van was outside.', 'was'),
         ('He said he had not seen it.', 'had not seen'),
         ('She asked where the key was.', 'asked'),
         ('Amina told me the van had been there.', 'told me')],
        height=440,
        alt='Four reported sentences with the part that changed ringed in '
            'each: is becomes was, have not seen becomes had not seen, and a '
            'question loses its question order. That change is what the task '
            'asks the learner to find.'),

 12: lambda: F.grammar_contrast(
        ('“The van is outside.”', 'said like this — the present',
         'The words as they were said, with the mark.', [0.28]),
        ('She said the van was outside.', 'reported like this — one step back',
         'No mark, and the tense goes back a step.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the words as they were '
            'said, in the present and inside quotation marks. On the right the same '
            'thing reported: the marks are gone and the tense has moved back one '
            'step, which is the only change the learner has to make.'),

 13: lambda: F.timeline(
        [('on Tuesday', 'the van is outside'), ('at four', 'Amina counts twenty minutes'),
         ('at five', 'Tomas comes in at the end'), ('that day', 'Yuki writes it down'),
         ('a week later', 'Mr Okonkwo says one sentence')],
        height=460,
        alt='One April afternoon on a line, and how the story moved along the '
            'street: the van is outside on Tuesday, Amina counts twenty minutes at '
            'four, Tomas comes in at the end at five, Yuki writes it down that '
            'evening, and a week later Mr Okonkwo says one sentence.'),
 14: lambda: F.sort_bins(
        ['said', 'told'],
        ['the van was outside', 'me the van was outside',
         'he had not seen it', 'Yuki to write it down'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for said and one for told. Which chip goes in which bin is '
            'the exercise, so none of them is placed. Only one of the two '
            'takes a person straight after it.'),

 15: lambda: F.error_pairs(
        [('She said me the van was outside.', 'She told me the van was outside.'),
         ('She said me the van was outside.', None),
         ('He asked where was the key.', None),
         ('He said he has not seen it.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 20.2', 'Yuki and Maya', 'notebook', 'what Amina said about the van'),
         ('Track 20.3', 'Dani and Maya', 'mobile', 'the message nobody replied to'),
         ('Track 20.4', 'Amina', 'person', 'six people, six versions')],
        height=560,
        alt='The three listenings in this unit: Yuki and Maya compare what Amina and '
            'Tomas each said about the van, Dani asks Maya why she did not reply to '
            'his message, and Amina reports what each of the six said.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'Did you get my text?'),
         ('Maya', 'person', 'Which one?'),
         ('Dani', 'book', 'Thursday.'),
         ('Maya', 'person', 'I got it.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: Did you get my text? Maya: Which one? Dani: '
            'Thursday. Maya: I got it.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Dani', 'book'), ('Mr Okonkwo', 'home')],
        ['said somebody had told him it was',
         'said one sentence, and it mentioned',
         'said an hour',
         'said she had not seen a van',
         'wrote down what everybody said'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What did somebody tell you yesterday?', 'before_now'),
         ('What did you reply?', 'envelope'),
         ('What is the last thing you were asked that you did not answer?', 'before_now')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('a van, twenty minutes', 'pin')]),
        ('Student B', [('a bigger van, an hour', 'person')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask what was said', 'offer a different version',
                             'ask whether it is true', 'ask what to write down'], 'person'),
        ('Card B — reporting', ['report one person’s words', 'report the other’s exactly',
                                'answer the hard question in one word',
                                'say what to write'], 'notebook'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask what was '
            'said, offer a different version, ask whether it is true, ask what to '
            'write down. Card B, reporting: report one person’s words, report the '
            'other’s exactly, answer the hard question in one word, say what to '
            'write.'),
 22: lambda: F.talk_shape(
        [('what happened', 1, 'calendar'),
         ('what the first two said', 2, 'speech'),
         ('what the third said', 2, 'question')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: what '
            'happened, what the first two people said about it, and what the '
            'third said.'),

 23: lambda: F.process_strip(
        [('the first witness', 'person'), ('I think it was', 'mobile'),
         ('the colour goes', 'newspaper'), ('the hour goes', 'clock'),
         ('it was twenty minutes', 'notebook')],
        height=460,
        alt='One sentence passed along five people, in five stages with an arrow to '
            'the next: the first witness says she thinks it was about twenty '
            'minutes, then the colour goes, then the hour goes, and the fifth '
            'person says it was twenty minutes — shorter and surer, with nobody '
            'having lied anywhere along the line.'),

 24: lambda: F.word_grid(
        [('version', 'many_things'), ('witness', 'magnifier'), ('certainty', 'tick'), ('detail', 'magnifier')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'version, witness, certainty, detail.'),

 25: lambda: F.world_strip(
        [('A messenger', 'horse', 'about a hundred and sixty kilometres a day'),
         ('Towers on hilltops', 'siren', 'across France in two hours, and not in fog'),
         ('The telegraph', 'loudspeaker', 'a message moved with nothing moving')],
        height=460,
        alt='Three old ways of carrying news: a messenger on a horse, who managed '
            'about a hundred and sixty kilometres a day and was the limit for three '
            'thousand years; towers on hilltops with arms read through a telescope, '
            'which carried a short sentence across France in two hours but could '
            'not work at night or in fog; and the telegraph, the real break, '
            'because it was the first time a message could move without anything '
            'moving.'),

 26: lambda: F.writing_frame(
        [('Who told you', 'Amina told me the van had been outside since Tuesday.'),
         ('What she said', 'She said four people had walked past it.'),
         ('What you said', 'I said I had not seen it either.'),
         ('What she said then', 'She said that was her point.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'who told you, what they said, what you said back, and what they said '
            'to that.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'You should pass on what was said and not what.'),
         ('two or three reasons', 'The words are a fact and the meaning.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what you sent', 'I sent four lines at eleven at night.'),
         ('what came back', 'He replied with one word in the morning.'),
         ('what you do now', 'I had told him a great deal and he had asked.')],
        height=571,
        alt='The shape of the message in three steps -- what you sent, what '
            'came back, what you do now -- with a line of the model beside '
            'each one.'),

 29: lambda: F.writing_frame(
        [('which story', 'My family says I once would not get off a bus.'),
         ('whether it is true', 'I was four.'),
         ('how you know', 'I have been told this story at every table I.')],
        height=571,
        alt='The shape of the reflection in three steps -- which story, '
            'whether it is true, how you know -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('She said to tell you she can’t come.', 'passing on a message you were given'),
         ('Apparently there was a van.', 'passing it on without standing behind it'),
         ('Don’t say I told you.', 'asking to be left out of it'),
         ('I’ll ask her and let you know.', 'refusing to guess, and promising to find out')],
        height=580,
        alt='Four things people say when they pass on a message, each with an arrow '
            'to what it does: passing on a message you were given to pass on, '
            'passing something on without standing behind it, asking to be left out '
            'of it, and refusing to guess while promising to find out.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'You said one sentence about the van.'),
         ('Mr Okonkwo', 'home', 'I did.'),
         ('Yuki', 'computer', 'A week after everybody else.'),
         ('Mr Okonkwo', 'home', 'Six days.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: You said one sentence about the van. Mr Okonkwo: I did. '
            'Yuki: A week after everybody else. Mr Okonkwo: Six days.'),

 32: lambda: F.sequence_steps(
        [('Say what you do not know.', 'cross'),
         ('Say what they said, in their words.', 'speech'),
         ('Say when they said it.', 'speech'),
         ('Offer to go back and ask.', 'pricetag')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the one with the first account',
         ['give your version with its source', 'question the other source', 'notice the difference', 'propose one answer'], 'person'),
        ('Card B \u2014 the one with the second',
         ['give your version with its source', 'report the exact words', 'agree the wording is not the same', 'propose writing both'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the one with the '
            'first account: give your version with its source, question the '
            'other source, notice the difference in the wording, propose one '
            'answer. Card B \u2014 the one with the second: give your version with '
            'its source, report the exact words, agree the wording is not the '
            'same, propose writing both.'),

 34: lambda: F.writing_frame(
        [('who the message is from', 'Amina came up at about six.'),
         ('what they said', 'She said the van is going on Thursday.'),
         ('what they asked', 'She asked whether you had a second lock.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- who the '
            'message is from, what they said, what they asked -- with a line '
            'of the model beside each one.'),

 35: lambda: F.before_after(
        ('At six in the morning', ['the voice reads the local news', 'most wards',
                                   'it has never been turned off'], 'loudspeaker'),
        ('In the street', ['younger people do not hear it', 'a third could say',
                           'in a flood nobody checks a telephone'], 'person'),
        height=520,
        alt='A loudspeaker on a pole beside the street under it. At six in the '
            'morning: a voice reads the local news in most wards, on a system that '
            'has never been turned off. In the street under it: younger people say '
            'they do not hear it any more, a third of those asked could still say '
            'what had been announced, and the city has twice decided to keep the '
            'speakers because in a flood nobody checks a telephone.'),

 36: lambda: F.word_grid(
        [('loudspeaker', 'loudspeaker'), ('ward', 'bed'), ('announcement', 'loudspeaker'), ('survey', 'list')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'loudspeaker, ward, announcement, survey.'),
 37: lambda: F.close_scene(
        [('the notebook', 'notebook'), ('six pages with names', 'list'),
         ('the van', 'coach'), ('four arguments', 'speech')],
        height=460,
        alt='Yuki\'s notebook, drawn as what is in it: the book she started in '
            'her first month because she could not keep the names and the '
            'faces together, the six pages with names on them, the van each '
            'of them said something different about, and the four arguments '
            'it has settled in two years.'),

 38: lambda: F.decision_fork(
        'You keep notes on what people said. One of them has found out.',
        [('Stop',
          ['she gets what she asked for', 'she still does not know what is on it'],
          'cross'),
         ('Show her the page',
          ['it ends in a minute', 'she reads what you wrote'], 'notebook'),
         ('Keep it and say nothing',
          ['the notebook goes on', 'she goes on imagining the page'], 'moon')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: stop, and she still imagines what was on the '
            'page; show her the page, which ends it in a minute; or keep it '
            'and say nothing, and let her believe the worst of it.'),

 39: lambda: F.bank_strip(
        [('news', 'newspaper'), ('reply', 'envelope'), ('article', 'newspaper'), ('reporter', 'newspaper'), ('said', 'speech'), ('told', 'speech'), ('unless', 'question'), ('tailor', 'needle')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: news, '
            'reply, article, reporter, said, told, unless, tailor.'),

 40: lambda: F.progress_strip(
        [('I can report what somebody said', False),
         ('I can use said, told and asked correctly', False),
         ('I can report a question without making it a question', False),
         ('I can write a note passing on a message in 50–80 words', False),
         ('I can give two accounts of one event and say who said which', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('news', 'newspaper'), ('text', 'mobile'), ('reply', 'envelope'), ('false', 'cross'), ('rumour', 'speech'), ('article', 'newspaper'), ('interview', 'speech'), ('envelope', 'envelope'), ('stamp', 'stamp'), ('reporter', 'newspaper')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 20 as picture cards on one page: '
            'news, text, reply, false, rumour, article, interview, envelope, '
            'stamp, reporter.'),
}
