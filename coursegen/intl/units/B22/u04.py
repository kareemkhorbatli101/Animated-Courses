# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Speech to an Audience Listening in English',
gram='mixed conditionals in explaining consequences',
ai='a speech for an audience listening in its second language',
strap='CEFR B2 · Grammar: mixed conditionals in explaining consequences · '
      'AI: a speech for an audience listening in its second language',
cando=['use mixed conditionals to explain consequences accurately',
       'write a speech for an audience listening in a second language',
       'choose a rate of delivery an audience can follow',
       'build signposts and repetition into a short speech',
       'write a six-line tasking for a speech'],

hero=('TWELVE MINUTES, AND THE ROOM FOLLOWED FOR FOUR',
      ['Four hundred people, almost all listening in their second language.',
       'The speech was written at the pace of a native reader.'],
      [(1100, 'grey', 'long'), (280, 'teal', 'short'), (240, 'blue', 'short')]),
hero_cap='A twelve-minute address at a university in Lindhall, to an audience of four hundred.',

warm=['Have you listened to a speech in a second language?',
      'What made it possible to follow, or impossible?',
      'What do you remember from it?'],

read=[
 'The address is twelve minutes long and is given to four hundred people, almost all of whom '
 'are listening in English as a second or third language and none of whom has the text.',
 'It is written in the register of a published lecture: three subordinate clauses in the second '
 'sentence, four statistics to one decimal place, two references to writers unknown locally and '
 'no repetition at all.',
 'If the speech had been written for the ear, it would have contained three ideas rather than '
 'eleven, and each would have been stated twice. As it is, the audience follows for about four '
 'minutes and then listens politely.',
 'Had the Ambassador known this, she would have cut eight of the eleven ideas, which is the '
 'thing nobody wishes to do and the only thing that would have helped.',
 'A speech to an audience listening in a second language is not a shorter version of a written '
 'text. It is three ideas, repeated, with signposts, at a hundred and twenty words a minute.'],

dp1=('Speaking to second-language audiences', 'Practice for addresses to audiences listening '
     'in an additional language commonly recommends a reduced number of main ideas, explicit '
     'signposting, deliberate repetition of key formulations and a moderated rate of delivery.',
     'Source: general public speaking guidance, 2025–2026.'),

c_a=[('How long is the address?', 'twelve minutes'),
     ('How many people are in the audience?', 'four hundred'),
     ('How many ideas does the speech contain?', 'eleven'),
     ('How long does the audience follow?', 'about four minutes'),
     ('How many ideas should it have contained?', 'three'),
     ('What rate is recommended?', 'a hundred and twenty words a minute')],

c_b=[('The audience had the text.', 'F'),
     ('The speech was badly written.', 'F'),
     ('Eleven ideas is too many.', 'T'),
     ('Repetition would have helped.', 'T'),
     ('A speech is a shorter written text.', 'F'),
     ('Most listeners were using a second language.', 'T')],

c_c=[('If the speech had been written for the ear, it ____________ contain three ideas.', 'would'),
     ('Had she known this, she ____________ have cut eight of the eleven.', 'would'),
     ('If I ____________ a better speaker, I would still slow down.', 'were'),
     ('If we had rehearsed it aloud, we ____________ know where it fails.', 'would'),
     ('She would be speaking more slowly if she ____________ seen the room.', 'had'),
     ('If the room had the text, they ____________ not be struggling now.', 'would')],

c_d=[('A mixed conditional joins ( a past condition and a present result / two past events ).', ['a past condition and a present result', 'two past events'], 0),
     ('“If we had rehearsed it, we would know” describes ( a present consequence of a past omission / a future plan ).',
      ['a present consequence of a past omission', 'a future plan'], 0),
     ('“Had she known” is ( a formal inversion of if she had known / a question ).',
      ['a formal inversion of if she had known', 'a question'], 0),
     ('The speech failed because of ( too many ideas / poor English ).',
      ['too many ideas', 'poor English'], 0),
     ('Repetition in such a speech is ( necessary / a fault ).',
      ['necessary', 'a fault'], 0)],

c_e=('Helps or hinders a second-language audience? Put each feature in the right column.',
     [('three ideas, each stated twice', 'helps'),
      ('eleven ideas, each stated once', 'hinders'),
      ('explicit signposts', 'helps'),
      ('statistics to one decimal place', 'hinders'),
      ('a local example', 'helps'),
      ('a literary allusion', 'hinders')],
     ['helps', 'hinders']),

v_fig_title='A SPEECH IN SIX WORDS',
v_fig=[('speech', 'a speech of twelve minutes'), ('people', 'an audience in its second language'), ('clock', 'a rate of speaking'),
       ('key', 'a signpost in a speech'), ('chart', 'a number rounded for speech'), ('doc', 'a handout of the text')],
v_fig_cap='Six words for twelve minutes in front of four hundred people.',

vocab=[
 ('a speech of twelve minutes', 'an address of a fixed short length'),
 ('an audience in its second language', 'listeners using an additional language'),
 ('a rate of speaking', 'how fast a speaker delivers'),
 ('a signpost in a speech', 'a phrase saying where you are'),
 ('a repetition of a key phrase', 'a formulation said again deliberately'),
 ('a short sentence of emphasis', 'a brief sentence that lands a point'),
 ('a number rounded for speech', 'a figure simplified to be heard'),
 ('an example that is local', 'an illustration from the host country'),
 ('a name pronounced correctly', 'a name said as its owner says it'),
 ('a joke that does not travel', 'humour that fails in translation'),
 ('an opening of thanks', 'the courtesy at the beginning'),
 ('a closing of invitation', 'an ending that invites a response'),
 ('a handout of the text', 'copies of the speech given out'),
 ('a slide with six words', 'a visual carrying almost no text'),
 ('a pause for the room', 'a silence left for the audience'),
 ('a line that draws applause', 'a sentence an audience responds to'),
 ('a question from the floor', 'a question asked by the audience'),
 ('a microphone held low', 'a microphone too far from the mouth'),
 ('a lectern', 'the stand a speaker reads from'),
 ('a time check', 'a glance at the clock while speaking')],

v_a=[('A phrase saying where you are is a ____________ in a speech.', 'signpost'),
     ('A figure simplified to be heard is a number ____________ for speech.', 'rounded'),
     ('An illustration from the host country is an example that is ____________.', 'local'),
     ('A silence left for the audience is a ____________ for the room.', 'pause'),
     ('A sentence an audience responds to is a line that draws ____________.', 'applause'),
     ('A microphone too far from the mouth is a microphone held ____________.', 'low'),
     ('The stand a speaker reads from is a ____________.', 'lectern'),
     ('Copies of the speech given out are a ____________ of the text.', 'handout')],

v_b=[('An audience in its second language is listeners', 'using an additional language.'),
     ('A repetition of a key phrase is a formulation', 'said again deliberately.'),
     ('A name pronounced correctly is a name', 'said as its owner says it.'),
     ('A closing of invitation is an ending', 'that invites a response.'),
     ('A time check is a glance at the clock', 'while speaking.')],

g_title='Grammar: mixed conditionals in explaining consequences',
g_rule=['A mixed conditional joins a past condition to a present result: if we had rehearsed it '
        'aloud, we would know where it fails.',
        'It also joins a present condition to a past result: if she were a careless speaker, she '
        'would not have cut the passage.',
        'Had + subject + past participle is a formal inversion of if … had: had she known this, '
        'she would have cut eight ideas.',
        'Mixed conditionals are the natural form for explaining consequences after the event, '
        'which is most of what a post-mortem consists of. Keep them to one a paragraph: they '
        'are heavy.'],
g_fig=('LOOSE',
       ['We didn’t rehearse, so now we don’t know where it fails.',
        'If she knew this, she cut eight ideas.',
        'If the room had the text, they are not struggling.',
        'She is slow now because she saw the room before.'],
       'PRECISE',
       ['If we had rehearsed it aloud, we would know where it fails.',
        'Had she known this, she would have cut eight of the eleven ideas.',
        'If the room had the text, they would not be struggling now.',
        'She would be speaking more slowly if she had seen the room.'],

       'four consequences stated loosely',
       'the same four in mixed conditional form'),
g_fig_cap='Past condition, present result. Or present condition, past result. Once a paragraph.',

g_a=[('If the speech had been written for the ear, it ____________ contain three ideas.', 'would'),
     ('Had she known this, she ____________ have cut eight of the eleven.', 'would'),
     ('If I ____________ a better speaker, I would still slow down.', 'were'),
     ('If we had rehearsed it aloud, we ____________ know where it fails.', 'would'),
     ('She would be speaking more slowly if she ____________ seen the room.', 'had'),
     ('If the room had the text, they ____________ not be struggling now.', 'would'),
     ('____________ we been told the audience, we would have written differently.', 'Had'),
     ('If the figures were simpler, the room ____________ have followed them.', 'would'),
     ('We would know the right length if we ____________ timed it.', 'had')],

g_b=[('( We didn’t rehearse so now we don’t know / If we had rehearsed it, we would know where it fails ) — mixed conditional.', ['We didn’t rehearse so now we don’t know', 'If we had rehearsed it, we would know where it fails'], 1),
     ('( Had she known this, she would have cut eight ideas / If she knew this, she cut eight ideas ) — form.',
      ['Had she known this, she would have cut eight ideas',
       'If she knew this, she cut eight ideas'], 0),
     ('( If the room had the text, they would not be struggling / If the room had the text, they are not struggling ) — result.',
      ['If the room had the text, they would not be struggling',
       'If the room had the text, they are not struggling'], 0),
     ('( She would be speaking more slowly if she had seen the room / She is slow now because she saw the room before ) — conditional.',
      ['She would be speaking more slowly if she had seen the room',
       'She is slow now because she saw the room before'], 0),
     ('( Had we been told the audience, we would have written differently / Have we been told the audience, we would write ) — inversion.',
      ['Had we been told the audience, we would have written differently',
       'Have we been told the audience, we would write'], 0),
     ('( We would know the right length if we had timed it / We would know the right length if we would time it ) — form.',
      ['We would know the right length if we had timed it',
       'We would know the right length if we would time it'], 0)],

d1=dict(
 title='Four minutes of twelve',
 fig=(['They were very polite.', 'For eight of the twelve minutes.'],
      ['How do you know?', 'Nobody turned a page or a head.']),
 cap='Ambassador Clara Mendel and Yuki Tanaka, leaving the hall.',
 lines=[('Yuki', 'They followed you for about four minutes.'),
        ('Mendel', 'They were attentive throughout.'),
        ('Yuki', 'They were polite throughout. After the fourth minute nobody reacted to anything.'),
        ('Mendel', 'What happened in the fourth minute?'),
        ('Yuki', 'Three subordinate clauses and a figure to one decimal place.'),
        ('Mendel', 'Which is how I would write it for a journal.'),
        ('Yuki', 'And four hundred people were listening in their second or third language, with no text.'),
        ('Mendel', 'How many ideas should there have been?'),
        ('Yuki', 'Three, each said twice, with a signpost before each one.'),
        ('Mendel', 'Had I known that, I would have cut eight of the eleven.'),
        ('Yuki', 'Which nobody wishes to do, and which is the only thing that helps.'),
        ('Mendel', 'Three ideas, two sayings each, a hundred and twenty words a minute.')],
 a=[('How long did they follow?', 'about four minutes'),
    ('What happened in the fourth minute?', 'three subordinate clauses and a decimal figure'),
    ('How many were listening in a second language?', 'almost all four hundred'),
    ('How many ideas should there have been?', 'three, each said twice'),
    ('What rate is right?', 'a hundred and twenty words a minute')],
 b=[('They were ____________ throughout.', 'polite'),
    ('With no ____________.', 'text'),
    ('A ____________ before each one.', 'signpost'),
    ('Which nobody ____________ to do.', 'wishes')]),

d2=dict(
 title='The example from the next street',
 fig=(['Shall I keep the statistics?', 'Keep one, rounded.'],
      ['And instead?', 'The workshop on the next street.']),
 cap='Mendel and Amara Sow, revising the speech for a second occasion.',
 lines=[('Amara', 'You have four statistics. How many will anybody remember?'),
        ('Mendel', 'None, probably.'),
        ('Amara', 'Keep one, rounded to a whole number, and give it twice.'),
        ('Mendel', 'And the other three?'),
        ('Amara', 'Replace them with one example from this city. The workshop on the next street employs eleven people because of this programme.'),
        ('Mendel', 'Which is a smaller fact than any of the statistics.'),
        ('Amara', 'And the only one that will be repeated at dinner tonight.'),
        ('Mendel', 'How do I know it is true?'),
        ('Amara', 'Because I visited it on Tuesday and asked them, which is why it belongs in the speech.'),
        ('Mendel', 'And the names of the people in it?'),
        ('Amara', 'With their permission, and pronounced as they pronounce them. I will write them out for you.'),
        ('Mendel', 'And if the local example makes the national programme look small?')],
 unresolved=True,
 a=[('How many statistics are in the speech?', 'four'),
    ('How many should be kept?', 'one, rounded and given twice'),
    ('What replaces the others?', 'one local example'),
    ('What is the example?', 'a workshop on the next street employing eleven people'),
    ('What is needed for the names?', 'permission and correct pronunciation')],
 b=[('Rounded to a whole ____________.', 'number'),
    ('Repeated at ____________ tonight.', 'dinner'),
    ('I ____________ it on Tuesday.', 'visited'),
    ('Pronounced as they ____________ them.', 'pronounce')]),

speak=[('Mixed consequences',
        ['Describe four things that went wrong in your work.',
         'Explain each with a mixed conditional.',
         'Your partner checks that the tenses are genuinely mixed.']),
       ('Three ideas',
        ['Take a subject you could speak on for twenty minutes.',
         'Reduce it to three ideas with your partner.',
         'Say each one twice, in different words.']),
       ('One local example',
        ['Describe a programme in general terms.',
         'Your partner asks for one concrete local example.',
         'Give it in four sentences, with a name and a number.'])],

ext_title='A speech for the ear is not a shorter text; it is a different structure',
ext_fig=figs.datatable('TWELVE MINUTES, TWO WAYS',
                       ['Written for the page', 'Written for the ear'],
                       [['eleven ideas', 'three ideas'],
                        ['each stated once', 'each stated twice'],
                        ['four statistics to one decimal', 'one rounded figure, twice'],
                        ['two literary allusions', 'one local example'],
                        ['no signposts', 'a signpost before each idea'],
                        ['160 words a minute', '120 words a minute']]),
ext_fig_cap='Six differences, the same twelve minutes, and about three times as much retained.',
ext=[
 'A twelve-minute speech can be drafted quickly and will read admirably. Reading admirably is '
 'the problem: the properties that make a text good on the page are a poor guide to what an '
 'audience can follow by ear in a second language.',
 'Three constraints govern such a speech, and all three must be stated in the instruction. '
 'There are at most three main ideas. Each is stated twice, in different words, the second time '
 'more simply. And each is preceded by an explicit signpost, of the kind a published text would '
 'regard as crude.',
 'Numbers are rounded for the ear. One figure a speech, given twice, will be remembered; four '
 'figures to one decimal place will not be heard at all, and a decimal place in speech is '
 'almost always noise.',
 'One concrete local example is worth more than any statistic, and it must be genuinely local '
 'and genuinely checked: a workshop on the next street, visited on Tuesday, employing a number '
 'of people somebody has counted.',
 'Rate matters as much as content. A hundred and twenty words a minute is comfortable for an '
 'audience in an additional language; a hundred and sixty is a reading speed, and at a hundred '
 'and sixty the second half of every sentence is lost.',
 'Had any of this been difficult, it would be worth the eleven ideas. It is not difficult: it '
 'is simply uncomfortable, because the work consists almost entirely of removing good material '
 'that the speaker would prefer to keep.'],

dp2=('Local examples', 'Communication practice commonly finds concrete local illustration more '
     'durable in audience recall than aggregate statistics, provided the illustration is '
     'verifiable and used with the consent of those described.',
     'Source: general public speaking guidance, 2025–2026.'),

e_a=[('Why is reading admirably a problem?', 'page qualities mislead about what the ear follows'),
     ('How many main ideas at most?', 'three'),
     ('How often is each stated?', 'twice, the second time more simply'),
     ('How many figures should a speech carry?', 'one, rounded, given twice'),
     ('What rate suits such an audience?', 'a hundred and twenty words a minute')],
e_b=[('Signposts are too crude for a speech.', 'F'),
     ('A decimal place is usually noise in speech.', 'T'),
     ('A local example must be checked.', 'T'),
     ('A hundred and sixty words a minute is comfortable.', 'F'),
     ('The work is mostly removal.', 'T'),
     ('Eleven ideas can be followed in twelve minutes.', 'F')],

w_model='Purpose: so that four hundred people listening in their second language leave with '
        'three things they can repeat. Scope: Thursday’s twelve-minute address at the '
        'university; the written version for the website is a separate text. Inputs: our '
        'programme figures, Amara’s note of her visit to the workshop on Rail Street, and the '
        'names of the people there with their consent. Criteria: three main ideas and no more, '
        'each stated twice and the second time in simpler words; a signpost before each idea; '
        'one figure only, rounded to a whole number and given twice; one local example with a '
        'name and a counted number; no allusion, no idiom; total length twelve minutes at a '
        'hundred and twenty words a minute, which is about fourteen hundred words. Done: with '
        'me by Tuesday, for reading aloud and timing. Fallback: where an idea cannot be stated '
        'twice within the length, it is removed rather than compressed.',
w_fig=figs.spec_card('SIX LINES FOR A SPEECH',
                     [('Purpose', 'three things four hundred people can repeat'),
                      ('Scope', 'Thursday’s address; the website text is separate'),
                      ('Inputs', 'figures, the workshop visit, names with consent'),
                      ('Criteria', 'three ideas, said twice; one rounded figure; 120 words a minute'),
                      ('Done', 'Tuesday, for reading aloud and timing'),
                      ('Fallback', 'cannot be said twice: remove it')]),
w_fig_cap='The fallback does the hard work: an idea that will not fit twice does not belong.',
w_task='Write a six-line tasking for a speech to a second-language audience.',
w_steps=['Line 1: say what the audience must leave with.',
         'Line 2: say which occasion, and what is a separate text.',
         'Line 3: say what you are giving it.',
         'Line 4: say the number of ideas, the repetition, the figure and the rate.',
         'Line 5: say when you need it and what you will do with it.',
         'Line 6: say what happens to an idea that will not fit twice.'],
w_bank=['Purpose: so that … listening in their second language leave with three things they can repeat',
        'Scope: … ’s … -minute address; the written version is a separate text',
        'Inputs: our figures, the note of the visit to … , and names with their consent',
        'Criteria: three main ideas and no more, each stated twice and more simply the second time; a signpost before each; one figure only, rounded and given twice; one local example with a name and a counted number; no allusion or idiom; … minutes at a hundred and twenty words a minute',
        'Done: with me by … , for reading aloud and timing. Fallback: an idea that cannot be stated twice within the length is removed'],
w_check=['Are there only three ideas?',
         'Is each stated twice?',
         'Is there one rounded figure?',
         'Is the length set in speaking minutes?'],

t_title='A speech for an audience listening in its second language',
t_fig=figs.split('TWELVE MINUTES',
                 'Specify',
                 ['three ideas, no more',
                  'each stated twice',
                  'a signpost before each',
                  '120 words a minute'],
                 'Supply yourself',
                 ['one local example',
                  'a name with consent',
                  'a counted number',
                  'the pronunciation']),
t_fig_cap='The structure can be specified. The local example has to be visited.',
t_body=[
 'State the audience in the instruction, because it determines the structure: four hundred '
 'people listening in a second or third language, without the text in front of them.',
 'Require three main ideas and no more, each stated twice and more simply the second time, '
 'with an explicit signpost before each; one figure only, rounded to a whole number and given '
 'twice; no allusion and no idiom; and a length of twelve minutes at a hundred and twenty '
 'words a minute, which is about fourteen hundred words.',
 'Supply the local example yourself, because it cannot be found in any document you hold: a '
 'workshop somebody has visited, a number somebody has counted, and names given with consent '
 'and pronounced as their owners pronounce them. That example is what the room will repeat '
 'tonight.'],
t_say=[('Name the audience: ', 'Four hundred people listening in a second language, with no text.'),
       ('Cap the ideas: ', 'Three ideas, each stated twice, the second time more simply.'),
       ('Set the rate: ', 'Twelve minutes at a hundred and twenty words a minute.')],
t_bound='It writes for a reader who can go back over a sentence, and it has no way of knowing '
        'how fast you speak or how much of your audience is working in a third language. '
        'Nothing in the text tells you where the room stopped following.',
t_a=[('Three main ideas and no ____________.', 'more'),
     ('Each stated ____________.', 'twice'),
     ('A ____________ before each.', 'signpost'),
     ('One figure, ____________ to a whole number.', 'rounded'),
     ('A hundred and ____________ words a minute.', 'twenty'),
     ('Names given with ____________.', 'consent')],
t_b_rubric='Say whether each belongs in such a speech.',
t_b=[('Four statistics to one decimal place.', 'no: one rounded figure'),
     ('A signpost before each main idea.', 'yes'),
     ('A literary allusion unknown locally.', 'no'),
     ('A workshop on the next street, visited on Tuesday.', 'yes')],

case=dict(
 title='The Decision Room · Eleven ideas and four hundred people',
 brief=[
  'A head of mission gives a twelve-minute address at a university to four hundred people, '
  'almost all of whom are listening in a second or third language. No text is distributed.',
  'The speech contains eleven main ideas, each stated once; four statistics to one decimal '
  'place; two references to writers not read locally; no signposts; and no repetition. It is '
  'delivered at about a hundred and sixty words a minute.',
  'Observation of the room suggests attention is held for about four minutes. Three questions '
  'are asked afterwards, all of them about the first two minutes.'],
 exhibit=figs.datatable('WHAT THE ROOM RETAINED',
                        ['Part of the speech', 'Evidence of retention'],
                        [['first two minutes', 'three questions asked'],
                         ['minutes three and four', 'one question'],
                         ['minutes five to eight', 'none'],
                         ['minutes nine to twelve', 'none'],
                         ['the four statistics', 'none quoted'],
                         ['the two allusions', 'none mentioned']]),
 exhibit_cap='Four minutes of retention from twelve minutes of excellent material.',
 exhibit_note='The audience was attentive and courteous. Attention and comprehension are not '
              'the same thing, and only one of them can be seen from a lectern.',
 voices=[('Yuki Tanaka', 'press officer',
          'After the fourth minute nobody reacted to anything. They were polite, not lost in thought.'),
         ('Amara Sow', 'senior locally engaged assistant',
          'One rounded figure and one workshop on the next street would be repeated at dinner.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'Had I known, I would have cut eight of eleven ideas, which is the part nobody wants to do.')],
 steps=[('Find it', 'What did the speech contain?'),
        ('Compare it', 'Attention against comprehension.'),
        ('Infer it', 'Why did it fail after four minutes?'),
        ('Weigh it', 'Eight ideas removed.'),
        ('Decide', 'How is such a speech built?')],
 analysis=[('Find it. What was in it?', 'eleven ideas, four statistics, two allusions'),
           ('Compare it. What was retained?', 'the first four minutes'),
           ('Infer it. Why?', 'density and rate, with no repetition or signposts'),
           ('Weigh it. What must go?', 'eight of the eleven ideas'),
           ('Decide. How is it built?', 'three ideas, said twice, signposted, at 120 words a minute')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how many ideas a short speech carries.',
                 'Say how each is treated.',
                 'Say what happens to figures.',
                 'Say at what rate it is delivered.'],
 bank=['A speech to an audience listening in an additional language carries at most three main ideas.',
       'Each idea is stated twice, the second time in simpler words, and is preceded by an explicit signpost.',
       'One figure only is used, rounded to a whole number and given twice; a concrete local example replaces the others.',
       'Delivery is at about a hundred and twenty words a minute, and the length of the text is set accordingly.'],
 outcome='The address is rewritten to three ideas in fourteen hundred words, with one rounded '
         'figure and the workshop on Rail Street named with its owners’ consent. Delivered at a '
         'second university, it produces eleven questions, of which four concern the workshop. '
         'The local press reports the workshop rather than the programme, and the programme’s '
         'enquiries from local firms rise in the following month.',
 outcome_q=[('How many ideas in the rewritten speech?', 'three'),
            ('How long is the text?', 'fourteen hundred words'),
            ('How many questions did it produce?', 'eleven'),
            ('What did the press report?', 'the workshop rather than the programme'),
            ('What rose in the following month?', 'enquiries from local firms')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Draft me twelve minutes',
 task=['A head of mission asked for a university address.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Draft me twelve minutes for the university.',
        'Our whole programme, with no exceptions.',
        'Serious and substantial.',
        'Use the statistics.',
        'Something memorable.',
        'By Tuesday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “our whole programme” guaranteed eleven ideas in twelve minutes.',
 asked=['Our whole programme, no exceptions', 'Serious and substantial', 'Use the statistics'],
 back=['11 ideas', '4 statistics to one decimal', '0 repetitions'],
 gap='Nobody said the audience would be listening in a second language without the text.',
 back_cap='A substantial and serious speech that four hundred people followed for four minutes.',
 back_note='“Serious and substantial” rewards density, and density is exactly what a '
           'second-language audience cannot follow by ear.',
 diagnosis=[('“twelve minutes for the university”', 'unscoped set'),
            ('“our whole programme”', 'unstated exception'),
            ('“serious and substantial”', 'unstated criterion'),
            ('“with no exceptions”', 'unstated exception'),
            ('“something memorable”', 'unstated criterion'),
            ('“by Tuesday”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that the speech is built for the ear.',
 scaffold=['what the audience must leave with',
           'which occasion, and what is a separate text',
           'what you are giving it',
           'the number of ideas, the repetition, the figure and the rate',
           'when you need it and what you will do with it',
           'what happens to an idea that will not fit twice'],
 bank=['Purpose: so that four hundred people listening in their second language leave with three things they can repeat',
       'Scope: Thursday’s twelve-minute address at the university; the written version for the website is a separate text',
       'Inputs: our programme figures, Amara’s note of her visit to the workshop on Rail Street, and the names of the people there with their consent',
       'Criteria: three main ideas and no more, each stated twice and the second time in simpler words; a signpost before each idea; one figure only, rounded to a whole number and given twice; one local example with a name and a counted number; no allusion, no idiom; total length twelve minutes at a hundred and twenty words a minute',
       'Done: with me by Tuesday, for reading aloud and timing',
       'Fallback: where an idea cannot be stated twice within the length, it is removed rather than compressed'],
 check=['Is the audience named?',
        'Are there only three ideas?',
        'Is each stated twice?',
        'Is the rate specified?'],
 model=['so that four hundred people listening in their second language leave with three things they can repeat',
        'Thursday’s twelve-minute address at the university; the written version for the website is a separate text',
        'our programme figures, Amara’s note of her visit to the workshop on Rail Street, and the names of the people there with their consent',
        'three main ideas and no more, each stated twice and the second time in simpler words; a signpost before each idea; one figure only, rounded to a whole number and given twice; one local example with a name and a counted number; no allusion, no idiom; total length twelve minutes at a hundred and twenty words a minute, which is about fourteen hundred words',
        'with me by Tuesday, for reading aloud and timing',
        'where an idea cannot be stated twice within the length, it is removed rather than compressed'],
 cost='11 ideas, 4 decimal statistics, 0 repetitions, and four minutes of comprehension in twelve.'),

lang=dict(
 title='Across the Language Line · A rate of speech that sounds like impatience',
 setting=[
  'The Ambassador slows to a hundred and twenty words a minute, as advised. In the host '
  'country’s public speaking conventions, a slow delivery to a mixed audience can read as '
  'condescension.',
  'A local colleague says afterwards that two rows of students thought she believed them unable '
  'to understand English, which is the opposite of what the slowing was for.'],
 ladder=[('A slower delivery', 'intended as a courtesy'),
         ('A local convention', 'in which slowness may condescend'),
         ('Two rows of students', 'who heard condescension')],
 cap='The same rate of speech, a kindness in one convention and a slight in another.',
 turns=[('Turn 1 · A local colleague', 'Some of the students thought you were speaking down to them.'),
        ('Turn 2 · Mendel', 'I slowed down so that everybody could follow.'),
        ('Turn 3 · The colleague', 'Then say so at the beginning, in one line.')],
 holds=['Thank you for telling me; that is the opposite of what I intended.',
        'I slow down because I am speaking my own language to people speaking theirs.',
        'Would it help to say that in one line at the beginning?',
        'How would you put it, so that it does not sound like an apology?',
        'I would rather be told this than go on causing it.',
        'I will keep the rate and add the explanation.'],
 redline='Never speed up to avoid seeming condescending, and never explain the slowing in words '
         'that suggest the audience’s English is the difficulty.',
 score=['Thanked the colleague for the observation.',
        'Explained the reason for the rate.',
        'Asked for a local form of words.',
        'Kept the rate rather than the impression.',
        'Avoided making it about the audience’s English.'],
 a=[('What rate did she adopt?', 'a hundred and twenty words a minute'),
    ('How was it read by some?', 'as condescension'),
    ('What was it intended as?', 'a courtesy'),
    ('What is the remedy?', 'one line of explanation at the beginning'),
    ('What must not change?', 'the rate'),
    ('What must the explanation avoid?', 'suggesting the audience’s English is the problem')]),

rev_fig=figs.split('A SPEECH FOR THE EAR',
                   'Three ideas',
                   ['stated twice each',
                    'signposted before each',
                    'one rounded figure',
                    'one local example'],
                   'At the right pace',
                   ['120 words a minute',
                    'pauses between ideas',
                    'no allusion or idiom',
                    'names pronounced correctly']),
rev_fig_cap='Eight properties, twelve minutes, and three things the room can repeat.',
rev=dict(
 read=[('How long was the address?',
        ['twelve minutes', 'four minutes', 'twenty minutes', 'an hour'], 0),
       ('How many ideas did it contain?',
        ['eleven', 'three', 'four', 'none'], 0),
       ('How long did the audience follow?',
        ['about four minutes', 'the whole speech',
         'eight minutes', 'two minutes'], 0),
       ('What rate suits such an audience?',
        ['a hundred and twenty words a minute', 'a hundred and sixty',
         'two hundred', 'as fast as possible'], 0)],
 listen_text='Name the audience, cap the ideas at three, state each twice with a signpost '
             'before it, use one rounded figure twice, and set the length in minutes at a '
             'hundred and twenty words a minute.',
 listen=[('Name the ____________.', 'audience'),
         ('Cap the ideas at ____________.', 'three'),
         ('State each ____________.', 'twice'),
         ('One ____________ figure, twice.', 'rounded')],
 speak=['Explain four consequences using mixed conditionals.',
        'Then reduce a twenty-minute subject to three ideas, each stated twice.'],
 write='Write a six-line tasking for a speech to a second-language audience.',
 vocab=[('A phrase saying where you are is a ____________ in a speech.', 'signpost'),
        ('A figure simplified to be heard is a number ____________ for speech.', 'rounded'),
        ('A silence left for the audience is a ____________ for the room.', 'pause'),
        ('The stand a speaker reads from is a ____________.', 'lectern')],
 gram=[('____________ we been told the audience, we would have written differently.', 'Had'),
       ('If the figures were simpler, the room ____________ have followed them.', 'would'),
       ('We would know the right length if we ____________ timed it.', 'had'),
       ('____________ the hall been smaller, we would have needed no microphone.', 'Had')]),

found=['Name the audience in the instruction, because it determines the structure.',
       'Carry three ideas at most, each stated twice and signposted.',
       'Use one rounded figure and one checked local example.',
       'Set the length in speaking minutes at about a hundred and twenty words a minute.'],
end_line='Attention can be seen from a lectern. Comprehension cannot.',
end_next='Next: A Story You Cannot Read')
