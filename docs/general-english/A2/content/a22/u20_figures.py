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

 16: lambda: F.speakers(
        [('Track 20.2', 'Yuki and Maya', 'notebook', 'what Amina said about the van'),
         ('Track 20.3', 'Dani and Maya', 'mobile', 'the message nobody replied to'),
         ('Track 20.4', 'Amina', 'person', 'six people, six versions')],
        height=560,
        alt='The three listenings in this unit: Yuki and Maya compare what Amina and '
            'Tomas each said about the van, Dani asks Maya why she did not reply to '
            'his message, and Amina reports what each of the six said.'),

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

 40: lambda: F.progress_strip(
        [('I can report what somebody said', False),
         ('I can use said, told and asked correctly', False),
         ('I can report a question without making it a question', False),
         ('I can write a note passing on a message in 50–80 words', False),
         ('I can give two accounts of one event and say who said which', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
