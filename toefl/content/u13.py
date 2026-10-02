# -*- coding: utf-8 -*-
"""Unit 13 · Music and Sound."""

UNIT = dict(
    n=13, vol=2, title='Music and Sound',
    icons=('note', 'headphones', 'chart'),
    subs=('How sound travels', 'A concert and a noise complaint', 'Music and memory'),
    grammar='Adverbs of manner and degree',
    field='frequency, rhythm, emotion',
    opener_line='This unit is about how things are done — loudly, gradually, almost '
                'completely. Adverbs are the grammar of that, and they are worth more marks '
                'than their size suggests.',

    candos=[
        'complete word endings in a text about sound and hearing',
        'read a concert listing and a residents’ notice and find the rule',
        'follow a passage that explains why one kind of memory is unusually strong',
        'understand a difficult conversation between neighbours',
        'describe how something is done, out loud, without preparing',
        'write a polite complaint, and a post that resists an easy explanation',
    ],

    acad=[
        ('mode', 'a way in which something is done or happens'),
        ('range', 'the limits between which something varies'),
        ('series', 'a number of similar things in order'),
        ('constant', 'not changing'),
        ('alter', 'to change'),
        ('modify', 'to change something slightly'),
        ('discrete', 'separate and distinct'),
        ('notion', 'an idea or belief'),
        ('positive', 'good, or certain'),
        ('negate', 'to make something have no effect'),
        ('emphasis', 'special importance given to something'),
        ('stress', 'force or pressure; also extra force on a syllable'),
        ('tense', 'stretched tight; nervous'),
        ('relax', 'to become less tense'),
        ('dramatic', 'sudden and noticeable'),
        ('portion', 'a part of a whole'),
        ('overall', 'taking everything into account'),
        ('correspond', 'to match or be equivalent to'),
        ('differentiate', 'to see or show a difference'),
        ('coincide', 'to happen at the same time'),
        ('physical', 'connected with the body or with matter'),
        ('item', 'a single thing in a list or group'),
        ('technical', 'connected with the practical details of a subject'),
        ('instance', 'a particular example'),
    ],
    campus=[
        ('concert', 'a performance of music'),
        ('rehearsal', 'a practice before a performance'),
        ('venue', 'the place where an event happens'),
        ('ticket', 'a paper or code that lets you in'),
        ('headphones', 'speakers worn over the ears'),
        ('speaker', 'a device that produces sound'),
        ('noise complaint', 'a formal objection about sound'),
        ('neighbour', 'a person living next to you'),
        ('quiet hours', 'times when noise is not allowed'),
        ('soundcheck', 'a test of equipment before a performance'),
        ('band', 'a group of musicians'),
        ('encore', 'an extra piece played after the end'),
    ],
    vocab_talk=[
        'What range of music do you listen to? Has it altered in the last few years?',
        'Describe an instance when music changed your mood dramatically.',
        'Does your taste in music correspond to your friends’, or differ from it?',
        'Which sound relaxes you most, and which makes you tense?',
    ],
    again=['perceive', 'vary', 'significant', 'intense', 'distinct', 'retain', 'component', 'impact'],

    r1=dict(
        sub='How sound travels',
        skill=('Science and everyday words mix here',
               ['This field uses both technical nouns (-ency, -ation) and plain verbs (-ed, '
                '-ing).',
                'Count the dashes before choosing between -ion and -ation.',
                'A gap in a comparative or superlative is short: -er is two, -est is three.',
                'Read the sentence back with your ending in place.']),
        guided_text='Sound is movement. A string vib-----, it pushes the air beside it, and that '
                    'push travels outwards as a wave. The faster the vibration, the hig--- the '
                    'note sounds. A wave that is big--- is not higher; it is simply lou---, '
                    'because loudness and pitch are two differ--- things.',
        guided_hint='1  vib-----  →  rates  (vibrates)',
        guided=['rates', 'her', 'ger', 'der', 'ent'],
        exam_text='People use high and loud as though they were the same, and they are not '
                  'rela---. Pitch depends on how often a string vibr---- each second: faster '
                  'vibration, higher note, and nothing to do with how hard you pl--- it. '
                  'Loudness depends on how f-- the air moves, which is the size of the wave '
                  'rather than its sp---. You can play the same note very qui---- or very '
                  'loudly, and you can play a quiet note that is extremely h---. A second '
                  'confusion is worth clearing up at the same t---. Sound needs something to '
                  'travel thro---: air, water, steel, anything with particles to push. In a '
                  'vacuum there is noth--- to push, so there is no sound at all, which is why '
                  'films set in space are quietly lying to you.',
        exam=['ted', 'ates', 'uck', 'ar', 'eed', 'etly', 'igh', 'ime', 'ugh', 'ing'],
    ),

    r2=dict(
        sub='A concert and a noise complaint',
        skill=('Rules about time are tested precisely',
               ['Quiet hours, curfews and deadlines carry exact times. Note them to the minute.',
                'A rule with an exception for one night is always worth a question.',
                'A complaints procedure has steps. Expect to be asked which step comes first.',
                'Two documents about the same rule may differ; the newer one wins.']),
        docs=[
            ('notice', 'Marlow Halls · noise and the end-of-term concert', [
                '# Quiet hours',
                'Sunday to Thursday   23.00 – 07.30',
                'Friday and Saturday   00.30 – 08.30',
                '# Rehearsing in halls',
                '* Acoustic instruments only, and only between 10.00 and 20.00.',
                '* Amplified practice must be booked in the music room, Block E basement.',
                '# If you are disturbed',
                '* Speak to the person first if you reasonably can. Most noise is thoughtless, '
                'not deliberate.',
                '* If that fails, report it on the portal, with the date and the times.',
                '* Call the night porter only if it is after midnight and continuing.',
                '# One exception',
                '* On the night of the end-of-term concert, quiet hours begin at 01.00 for '
                'everyone.',
            ], 'notice'),
            ('email', 'all-marlow@northgate.edu', 'warden.marlow@northgate.edu',
             '02/12/2026', 'End-of-term concert — new venue and a later finish', [
                 'Dear residents,',
                 '',
                 'Two changes to Friday’s concert. It has moved from the Marlow common',
                 'room to the Hartley Hall, which is further from the bedrooms and has',
                 'a licence until midnight rather than eleven.',
                 '',
                 'Because the venue has changed, the usual one-night extension to quiet',
                 'hours is no longer needed. Quiet hours on Friday are the normal',
                 'weekend ones, from half past twelve.',
                 '',
                 'If you were planning not to go because of the noise, you may now be',
                 'able to get some sleep and some music.',
                 '',
                 'Dr Halloran, Warden',
             ]),
        ],
        guided=[
            ('When do quiet hours begin on a Tuesday?',
             ('22.00', '23.00', '00.30', '08.30'), 1,
             'Sunday to Thursday, 23.00–07.30; the later time is the weekend rule.'),
            ('When may acoustic instruments be played in halls?',
             ('Any time', '10.00–20.00', '08.30–23.00', 'Only at weekends'), 1,
             'Acoustic instruments only, and only between those hours.'),
            ('Where must amplified practice take place?',
             ('In a bedroom', 'In the common room', 'In the Block E music room',
              'In Hartley Hall'), 2,
             'Amplified practice must be booked in the music room, Block E basement.'),
            ('What should a disturbed resident do first?',
             ('Report it on the portal', 'Call the night porter',
              'Speak to the person if they reasonably can', 'Email the warden'), 2,
             'Most noise is thoughtless, not deliberate — the notice gives the reason for the '
             'order.'),
        ],
        exam=[
            ('What has changed about the concert?',
             ('The date', 'The venue and the finishing time', 'The performers',
              'The ticket price'), 1,
             'Moved to Hartley Hall, with a licence until midnight rather than eleven.'),
            ('Why is the one-night extension no longer needed?',
             ('Fewer people are coming', 'The concert finishes earlier',
              'The new venue is further from the bedrooms', 'Quiet hours have been abolished'), 2,
             'Because the venue has changed, so the noise no longer reaches the rooms.'),
            ('When do quiet hours begin on the Friday of the concert?',
             ('23.00', '00.30', '01.00', 'They do not apply'), 1,
             'The normal weekend rule applies, which the notice gives as 00.30.'),
            ('What does the warden suggest residents may now get?',
             ('A refund', 'Both sleep and music', 'A later start on Saturday',
              'A different room'), 1,
             'The last line makes exactly that point to people who had decided not to go.'),
            ('A resident disturbed at 00.45 by continuing noise should',
             ('wait until morning', 'report it on the portal only',
              'call the night porter', 'speak to the warden'), 2,
             'After midnight and continuing is the stated condition for calling the porter.'),
            ('What can be inferred about the old venue?',
             ('It was closer to the bedrooms', 'It was larger', 'It had no licence',
              'It was cheaper'), 0,
             'The new one is described as further from the bedrooms, which is why the extension '
             'was needed before.'),
        ],
    ),

    r3=dict(
        sub='Music and memory',
        title='Why a Tune Brings Back a Memory',
        words=280,
        paras=[
            'Almost everyone has had the experience: a few seconds of a song and a whole '
            'afternoon from twenty years ago arrives, complete with the weather. It feels '
            'magical, and the usual explanation — that music is somehow stored differently — is '
            'not quite right. What is unusual is not the storage. It is the retrieval.',
            'Memories are easiest to recover when the conditions at recall resemble the '
            'conditions at encoding. A song is an unusually good match, because it is identical '
            'every time. The weather, your mood, the room and your own voice all change between '
            'one year and the next; a recording does not. Four bars of it reproduce a fragment '
            'of the original moment exactly, and the rest of the moment comes with it.',
            'Two further facts make the effect stronger than it looks. The first is that the '
            'memories recovered this way cluster heavily in adolescence and early adulthood, the '
            'period psychologists call the reminiscence bump, when a great deal is happening for '
            'the first time and is therefore encoded in detail. The second is that music of that '
            'period is usually heard repeatedly, in company, and attached to events that '
            'mattered. So the apparent magic has a dull explanation: it is not that music '
            'reaches memory by a special route. It is that a recording is the only part of your '
            'past that can be played back without having changed.',
        ],
        skill=('Watch the author replace one explanation with another',
               ['A passage that says the usual explanation is not quite right will give a '
                'better one. Find it.',
                'Technical terms defined in passing (encoding, retrieval) are usually tested.',
                'A named effect, such as the reminiscence bump, will be asked about.',
                'The author’s own summary is usually the last sentence.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why music is stored differently from other memories',
              'Why music is unusually good at bringing memories back',
              'How adolescence affects memory', 'How recordings are made'), 1,
             'The author explicitly moves the explanation from storage to retrieval.'),
            ('According to paragraph 1, what is NOT unusual about musical memory?',
             ('The retrieval', 'The storage', 'The detail', 'The emotion'), 1,
             'What is unusual is not the storage. It is the retrieval.'),
            ('When are memories easiest to recover?',
             ('When they are recent', 'When conditions at recall resemble those at encoding',
              'When they are emotional', 'When they are repeated often'), 1,
             'That is the general principle the whole explanation rests on.'),
            ('Why is a song an unusually good match?',
             ('It is emotional', 'It is short', 'It is identical every time',
              'It is heard in company'), 2,
             'The weather, mood and room all change; the recording does not.'),
        ],
        exam=[
            ('What is the reminiscence bump?',
             ('A sudden loud passage in music', 'A cluster of memories from adolescence and '
              'early adulthood', 'A failure of memory in old age',
              'A technique for remembering'), 1,
             'The passage names and dates it in the same sentence.'),
            ('Why is that period encoded in detail?',
             ('People are younger and healthier', 'A great deal is happening for the first time',
              'Music was better then', 'There is more free time'), 1,
             'First-time events are encoded in more detail, which is the stated reason.'),
            ('All of the following are given as reasons the effect is strong EXCEPT:',
             ('A recording does not change', 'Music of that period is heard repeatedly',
              'Music is attached to events that mattered', 'Music is processed in a separate '
              'part of the brain'), 3,
             'That is precisely the explanation the author rejects at the start.'),
            ('The word "encoding" in paragraph 2 refers to',
             ('the moment a memory is formed', 'the moment it is recalled',
              'the way music is recorded', 'the way a brain stores sound'), 0,
             'It is contrasted with recall, so it means the laying down of the memory.'),
            ('What does the author call the explanation?',
             ('Magical', 'Dull', 'Controversial', 'Incomplete'), 1,
             'The apparent magic has a dull explanation — the author’s own word.'),
            ('What can be inferred about photographs?',
             ('They work better than music', 'They are also unchanged, but reproduce less of '
              'the moment', 'They are not used in memory research',
              'They cause the reminiscence bump'), 1,
             'The argument turns on reproducing a fragment of the moment exactly; a photograph '
             'is unchanged but silent and still.'),
            ('Which best states the main idea of paragraph 3?',
             ('Music is best in adolescence', 'Two ordinary facts explain most of the apparent '
              'magic', 'Memory declines with age',
              'Recordings should be preserved'), 1,
             'The paragraph adds two facts and then draws exactly that conclusion.'),
        ],
    ),

    l1=dict(
        sub='A concert and a noise complaint',
        caption='A student speaks to a neighbour about noise',
        skill=('Hear the tone as well as the facts',
               ['A difficult conversation has a tone question as well as detail questions.',
                'Listen for softening: I am sure you did not realise, it is only that…',
                'What each speaker offers to do is the usual last question.',
                'Note any time or number mentioned — they are rarely decorative.']),
        warm=[
            ('Woman: Sorry — have you got a minute?',
             ('About eleven o’clock.', 'Of course. Is something wrong?',
              'It’s in Block E.', 'Yes, it was loud.'), 1,
             'A request for a moment is answered by granting it.'),
            ('Man: Was it keeping you awake?',
             ('Until about one.', 'It was, a bit.', 'In the music room.',
              'No, I play the bass.'), 1,
             'A yes/no question about effect, answered honestly and mildly.'),
            ('Woman: I did not realise anyone could hear it.',
             ('The walls are quite thin.', 'At half past twelve.',
              'Yes, I can hear it.', 'It was a rehearsal.'), 0,
             'A statement of surprise is met with the explanation.'),
        ],
        script=[
            ('Woman', 'Sorry to knock. I am in the room below — Mina.'),
            ('Man', 'Oh. The bass.'),
            ('Woman', 'The bass.'),
            ('Man', 'I am so sorry. I genuinely did not know it carried. I had headphones on, so '
                    'from in here it is almost silent.'),
            ('Woman', 'That is the problem with bass — the headphones take away the part you '
                      'hear and leave the part I hear. It is the floor rather than the air.'),
            ('Man', 'How late was it?'),
            ('Woman', 'Half past one, Tuesday. I nearly rang the porter and then I thought I '
                      'would rather just ask.'),
            ('Man', 'I would much rather you asked. What if I move the amp onto something soft?'),
            ('Woman', 'That would help a little. Honestly, the music room in Block E would help a '
                      'lot more, and you can book it.'),
            ('Man', 'After eight at night?'),
            ('Woman', 'Until eleven, I think. Worth checking. And I am not trying to stop you '
                      'practising — I would just like to sleep on a Tuesday.'),
            ('Man', 'Fair. I will book it tomorrow.'),
        ],
        items=[
            ('Why has the woman come to the man’s room?',
             ('To invite him to a concert', 'To ask him about noise at night',
              'To borrow equipment', 'To complain to the warden'), 1,
             'She identifies herself as the neighbour below and names the bass.'),
            ('Why did the man not realise he was disturbing anyone?',
             ('He was out', 'He was wearing headphones', 'He plays quietly',
              'He practises in the music room'), 1,
             'From in here it is almost silent, because the headphones remove what he would hear.'),
            ('What does the woman explain about bass?',
             ('It is louder than other instruments', 'It travels through the floor rather than '
              'the air', 'It cannot be played with headphones',
              'It is worse at night'), 1,
             'The headphones take away the part you hear and leave the part I hear.'),
            ('Why did the woman not call the night porter?',
             ('It was before midnight', 'She did not know the number',
              'She preferred to ask him directly', 'The porter was unavailable'), 2,
             'I nearly rang the porter and then I thought I would rather just ask.'),
            ('What does the man first offer to do?',
             ('Stop playing', 'Move the amplifier onto something soft',
              'Book the music room', 'Practise during the day'), 1,
             'The music room is the woman’s suggestion, which comes afterwards.'),
            ('What does the woman make clear at the end?',
             ('She will report him', 'She does not want to stop him practising',
              'She also plays an instrument', 'She is moving out'), 1,
             'I would just like to sleep on a Tuesday.'),
        ],
    ),

    l2=dict(
        sub='A concert and a noise complaint',
        caption='An announcement about the end-of-term concert',
        poster=['New venue: Hartley Hall',
                'Licence until midnight',
                'Quiet hours as normal: 00.30'],
        skill=('Catch a cancelled exception',
               ['Announcements sometimes remove a special rule. That removal is testable.',
                'Note the reason — it usually explains a second detail as well.',
                'A time stated twice is certain to be asked about.',
                'What stays the same matters as much as what changes.']),
        warm=[
            ('Man: Where is the concert now?',
             ('At midnight.', 'In Hartley Hall.', 'Because of the noise.',
              'Yes, it moved.'), 1,
             'Where wants a place.'),
            ('Woman: Is it later than last year?',
             ('Until midnight, so yes.', 'In the common room.',
              'Because of the licence.', 'No, it is Friday.'), 0,
             'A comparison question answered with the fact that settles it.'),
            ('Man: Do quiet hours change that night?',
             ('At half past twelve.', 'No — the normal weekend time applies.',
              'In Hartley Hall.', 'Yes, until one.'), 1,
             'A do-they-change question wants a yes or no about the rule.'),
        ],
        script=[
            ('Woman', 'Two things about Friday’s end-of-term concert. First, it has moved. It '
                      'was going to be in the Marlow common room, which is directly below forty '
                      'bedrooms, and it is now in Hartley Hall, which is a hundred metres away '
                      'across the car park. Hartley also has a licence until midnight, where '
                      'the common room had one until eleven, so the concert is an hour longer '
                      'than planned. Second, and this follows from the first: we had arranged a '
                      'one-night extension to quiet hours, pushing them back to one in the '
                      'morning. That is cancelled. Because the noise is no longer underneath '
                      'anybody, Friday’s quiet hours are simply the normal weekend ones, from '
                      'half past twelve. So if you were planning to be away on Friday because '
                      'you could not face it, you may want to reconsider — you can now go to '
                      'the concert and still sleep in your own bed afterwards. Tickets are '
                      'still four pounds and still from the porters’ lodge.'),
        ],
        items=[
            ('Why has the concert moved?',
             ('More tickets were sold', 'The common room is directly below bedrooms',
              'The common room was double-booked', 'Hartley Hall is cheaper'), 1,
             'Directly below forty bedrooms, against a hundred metres away.'),
            ('How much longer is the concert than planned?',
             ('Half an hour', 'An hour', 'Two hours', 'It is shorter'), 1,
             'A licence until midnight rather than eleven.'),
            ('What has been cancelled?',
             ('The concert', 'The one-night extension to quiet hours',
              'The ticket sale', 'The soundcheck'), 1,
             'That is cancelled — and the speaker explains why it is no longer needed.'),
            ('When do quiet hours start on Friday?',
             ('23.00', '00.30', '01.00', 'They do not'), 1,
             'The normal weekend time, half past twelve.'),
            ('What has not changed?',
             ('The venue', 'The finishing time', 'The price and where tickets are sold',
              'The quiet-hours extension'), 2,
             'Still four pounds and still from the porters’ lodge.'),
        ],
    ),

    l3=dict(
        sub='How sound travels',
        caption='A talk on what makes one note higher than another',
        board=['Pitch = frequency (vibrations per second)',
               'Loudness = amplitude (size of the wave)',
               'Two independent things',
               'Octave = double the frequency'],
        skill=('Keep two variables apart',
               ['A talk that separates two things people confuse will test whether you kept '
                'them separate.',
                'Note which word goes with which quantity.',
                'A worked number (double, half, four times) is almost always tested.',
                'The last example usually carries the main idea.']),
        warm=[
            ('Woman: Which one is pitch?',
             ('Frequency.', 'The size of the wave.', 'On the board.', 'Yes, it is.'), 0,
             'The question asks which of two quantities, and the answer names it.'),
            ('Man: What happens if you double the frequency?',
             ('It gets louder.', 'You go up an octave.', 'About four hundred.',
              'Yes, it does.'), 1,
             'A what-happens-if question wants the consequence.'),
            ('Woman: Did she give the number for A?',
             ('Four hundred and forty.', 'It is a frequency.', 'Yes, twice.',
              'In the second half.'), 0,
             'A did-she-give question is answered by giving the number.'),
        ],
        script=[
            ('Professor', 'Two words, and students mix them up for a whole term, so let us be '
                          'slow. Pitch is frequency: how many times per second the string goes '
                          'back and forth. Concert A is four hundred and forty times a second. '
                          'Loudness is amplitude: how far the string moves each time, which '
                          'decides how far the air moves. They are completely independent. You '
                          'can play a very high note very quietly and a very low note very '
                          'loudly, and nothing about one tells you anything about the other. '
                          'Now the interesting part. Double the frequency and you do not get a '
                          'note that sounds twice as high. You get the same note, higher up — '
                          'what we call an octave. Eight hundred and eighty is also an A. Halve '
                          'it and two hundred and twenty is an A as well. Every musical system '
                          'anybody has ever built, anywhere in the world, treats those as the '
                          'same note, and nobody fully agrees on why. That is not a small fact. '
                          'It means the octave is not a European convention. It is something '
                          'about ears.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Pitch and loudness are independent, and the octave is universal',
              'Students find acoustics difficult', 'Concert A is 440 hertz',
              'Music varies between cultures'), 0,
             'The talk separates the two quantities and then makes its claim about the octave.'),
            ('What is pitch?',
             ('How far the string moves', 'How many times per second it vibrates',
              'How loud the note is', 'How long the note lasts'), 1,
             'Pitch is frequency, defined in the second sentence.'),
            ('What happens if you double the frequency?',
             ('The note is twice as high', 'The note is twice as loud',
              'You get the same note an octave higher', 'Nothing audible changes'), 2,
             'Eight hundred and eighty is also an A.'),
            ('Why does the speaker mention 220?',
             ('It is the lowest audible note', 'It shows halving gives the same note too',
              'It is the loudness of concert A', 'It is an error in the textbook'), 1,
             'Halve it and two hundred and twenty is an A as well.'),
            ('What does the speaker say about the octave across cultures?',
             ('It is a European convention', 'Every musical system treats it the same way',
              'Only some systems use it', 'It was invented in the nineteenth century'), 1,
             'Every musical system anybody has ever built, anywhere in the world.'),
            ('What does the speaker conclude from that?',
             ('Musical training is unnecessary', 'The octave is something about ears rather '
              'than culture', 'Western music is more advanced',
              'The explanation is well understood'), 1,
             'It is something about ears — and she adds that nobody fully agrees why.'),
        ],
    ),

    sp=[
        dict(sub='How sound travels', focus='stress in adverbs',
             skill=('Put the stress where the meaning is',
                    ['In extremely quietly the stress is on quiet, not on extreme.',
                     'Adverbs of degree (almost, hardly, completely) usually take less stress '
                     'than the word they modify.',
                     'Hardly and nearly change the meaning completely. Say them clearly.',
                     'Finish the sentence even if the stress goes wrong.']),
             repeat=['It vibrates quickly.',
                     'The note sounds slightly higher.',
                     'He plays extremely quietly after eleven.',
                     'The sound travels gradually outwards through the air.',
                     'I could hardly hear it, although the floor was moving.',
                     'The two quantities are completely independent of one another.',
                     'A note played very softly on a low string can carry further through a building than one played loudly on a high one.'],
             theme='music you listen to',
             qs=['First, what do you listen to while you work?',
                 'Music affects concentration differently for different people. How does it '
                 'affect yours, and why do you think that is?',
                 'Some people say that listening to music while studying always makes you work '
                 'worse. Do you agree? Why or why not?',
                 'Finally, should libraries provide rooms where people can work with music '
                 'playing? Why or why not?'],
             model=[(2, 'Instrumental music helps and anything with words destroys it, which I '
                        'assume is because the words compete with the reading.'),
                    (3, 'Not always, no. It probably depends on the task — I can file and '
                        'listen, and I cannot read and listen.')],
             selfcheck=['I stressed the word that carried the meaning',
                        'I said hardly and nearly clearly',
                        'I gave a reason after every opinion']),
        dict(sub='A concert and a noise complaint', focus='complaining politely',
             skill=('Complain about the effect, not the person',
                    ['I am finding it hard to sleep beats You are too loud.',
                     'Assume good faith out loud: I am sure you did not realise.',
                     'Propose a solution. A complaint with a solution is a request.',
                     'End by making it easy to agree.']),
             repeat=['I am sure you did not realise.',
                     'It carries through the floor rather than the wall.',
                     'I would much rather ask you than report it.',
                     'Would it help if you booked the music room instead?',
                     'I am not trying to stop you practising at all, honestly.',
                     'It is only after about half past twelve that it becomes difficult.',
                     'If you could move the amplifier onto something soft, that alone would probably make most of the difference.'],
             theme='living with other people',
             qs=['To start, do you live with other people?',
                 'Shared living produces friction. What causes it where you live, and why do '
                 'you think that is?',
                 'Some people argue that it is always better to raise a problem directly than to '
                 'report it. Do you agree? Why or why not?',
                 'Last question. Should universities set rules about noise, or leave students to '
                 'sort it out? Why?'],
             model=[(2, 'Washing up, every time. I think it is because it is the one thing '
                        'everybody notices and nobody has agreed about.'),
                    (3, 'Usually, yes, but not always. If somebody has already been asked twice, '
                        'reporting it is not a failure of nerve.')],
             selfcheck=['I described the effect rather than blaming',
                        'I proposed at least one solution',
                        'I stayed polite without being vague']),
        dict(sub='Music and memory', focus='academic register',
             skill=('Report a mechanism, not a feeling',
                    ['Use the unit’s words: correspond, coincide, differentiate, instance, '
                     'notion.',
                     'Say what the research shows before you say what you think.',
                     'Replace it is amazing with the effect is unusually strong because…',
                     'Mark yourself against the three statements below.']),
             repeat=['The effect is unusually strong.',
                     'Recall is easiest when conditions correspond.',
                     'A recording does not alter between one year and the next.',
                     'These memories cluster in adolescence and early adulthood.',
                     'The notion that music is stored separately is not supported.',
                     'What differentiates music from a photograph is that it unfolds in time.',
                     'The apparent magic has a dull explanation: a recording is the only part of your past that can be played back without having changed.'],
             theme='memory and the past',
             qs=['First, what is your earliest clear memory?',
                 'People trust their memories to different degrees. How much do you trust yours, '
                 'and why?',
                 'Some people argue that we should write things down because memory cannot be '
                 'relied on. Do you agree? Why or why not?',
                 'Finally, is it a good thing that some memories fade? Why or why not?'],
             model=[(2, 'Less than I used to. We read a study last term showing that one word in '
                        'a question can change what people remember seeing.'),
                    (4, 'Probably, yes. A memory that stayed as sharp as the day it formed would '
                        'make it very difficult to stop being angry about anything.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I reported the mechanism before my opinion',
                        'I avoided it is amazing in favour of a reason']),
    ],

    w1=dict(
        sub='How sound travels',
        skill=('Degree questions',
               ['How well, how often, how loudly, how quickly — these open most items here.',
                'The adverb goes next to how, not at the end: How loudly does it play?',
                'In an embedded question the order stays a statement: do you know how often it '
                'happens.',
                'Use every tile exactly once.']),
        guided=[
            ('The string vibrates 440 times a second.',
             ['often', 'how', 'does', 'the', 'string', 'vibrate'],
             'How often does the string vibrate?'),
            ('He plays very quietly after eleven.',
             ['know', 'you', 'do', 'how', 'quietly', 'he', 'plays'],
             'Do you know how quietly he plays?'),
            ('The sound carries through the floor.',
             ['does', 'how', 'the', 'sound', 'carry'],
             'How does the sound carry?'),
        ],
        exam=[
            ('The concert now finishes at midnight.',
             ['time', 'what', 'does', 'the', 'concert', 'finish'],
             'What time does the concert finish?'),
            ('Quiet hours begin at half past twelve on Friday.',
             ['tell', 'can', 'you', 'me', 'when', 'quiet', 'hours', 'begin'],
             'Can you tell me when quiet hours begin?'),
            ('The music room can be booked until eleven.',
             ['late', 'how', 'can', 'I', 'book', 'it'],
             'How late can I book it?'),
            ('Doubling the frequency gives the same note an octave higher.',
             ['know', 'do', 'you', 'what', 'happens', 'if', 'you', 'double', 'it'],
             'Do you know what happens if you double it?'),
            ('The student who complained lives directly below.',
             ['the', 'student', 'who', 'complained', 'lives', 'directly', 'below'],
             'The student who complained lives directly below.'),
            ('Tickets cost four pounds from the porters’ lodge.',
             ['much', 'how', 'do', 'tickets', 'cost'],
             'How much do tickets cost?'),
            ('These memories come mostly from adolescence.',
             ['know', 'do', 'you', 'why', 'they', 'come', 'from', 'adolescence'],
             'Do you know why they come from adolescence?'),
        ],
    ),
    w2=dict(
        sub='A concert and a noise complaint',
        to='warden.marlow@northgate.edu',
        date='04/12/2026',
        subject='Noise from the room above — and a suggestion',
        scenario=[
            'You have twice spoken politely to the student in the room above about bass practice '
            'after midnight. He has been apologetic both times and it has continued. The notice '
            'says to report it on the portal, but you also think there is a practical cause: the '
            'Block E music room is only bookable until eight in the evening.',
            'Write an email to the warden.',
        ],
        bullets=['Say what has happened and what you have already done.',
                 'Report the specific times.',
                 'Suggest the change you think would solve it.'],
        skill=('Report facts, propose a fix',
               ['Dates and times make a complaint actionable. Without them it is a mood.',
                'Say what you tried first. It shows you followed the procedure.',
                'Propose a change to the system, not a punishment for the person.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Dr Halloran,',
            'I am in room 212 and I am writing about bass practice in the room above, 312. I '
            'have spoken to the student twice, on 20 and 27 November. He was apologetic on both '
            'occasions and I do not think he is being deliberate — bass carries through the '
            'floor and he cannot hear it himself through headphones.',
            'It has happened again since: Tuesday 2 December until about 01.30, and Wednesday 3 '
            'December until about 00.50.',
            'Rather than a warning, could the music room in Block E be bookable later than eight '
            'in the evening? He has told me he practises late because that is when he is free, '
            'and at the moment the only room that would solve the problem is closed by then.',
            'Thank you,',
            'Mina Petrova, room 212',
        ],
        notes=['Both earlier conversations are dated, which proves the procedure was followed.',
               'The writer explicitly removes malice from the account, which makes the rest '
               'credible.',
               'The two incidents are given with dates and approximate end times — exactly what '
               'the notice asks for.',
               'The suggestion is a change to the timetable rather than a punishment, which is '
               'what makes it likely to be acted on.'],
    ),
    w3=dict(
        sub='Music and memory',
        prof='Dr Nakashima',
        question='Research suggests that the memories music brings back cluster in adolescence '
                 'and early adulthood. Some care homes now build personal playlists from the '
                 'music residents heard between fifteen and twenty-five. Is this a serious '
                 'treatment or a pleasant distraction? Why?',
        posts=[('Rosa', 'w',
                'A serious treatment. The mechanism is understood: a recording is unchanged, so '
                'it matches the original conditions better than anything else can, and those '
                'years are encoded in unusual detail. That is not a distraction. It is a key '
                'that happens to fit.'),
               ('Alan', 'm',
                'I would call it care rather than treatment, and I think the difference matters. '
                'A treatment changes the course of a condition. Nothing here suggests the '
                'condition changes at all. What changes is the hour, and an hour is worth '
                'having, but we should say what it is.')],
        skill=('Argue about a definition when that is the real question',
               ['This disagreement is about what counts as a treatment, not about the evidence.',
                'Say so, then say which definition is the useful one here, and why.',
                'Use the mechanism from the passage to decide it.',
                'At least 100 words in ten minutes.']),
        starters=['Rosa and Alan agree about the evidence and disagree about the word:…',
                  'Alan’s distinction is real, but it may be the wrong one here, because…',
                  'If a treatment has to change the course of a condition, then…',
                  'What I would want to know is…'],
        model=[
            'Rosa and Alan agree about every fact and disagree about one word, which is worth '
            'noticing before anybody argues further.',
            'Alan’s distinction is real. A treatment changes the course of a condition, and '
            'nothing in the research suggests that playing a 1968 record slows anything down. '
            'But I am not sure that is the right test in this case. The passage explains the '
            'mechanism precisely: a recording is the only part of the past that can be played '
            'back unchanged, and those years are encoded in unusual detail. The key fits, as '
            'Rosa says.',
            'What I would want to know is whether the hour has effects outside the hour — '
            'whether a resident who has been listening eats better, sleeps better or speaks more '
            'that evening. If it does, Alan’s line has been crossed on his own definition. If it '
            'does not, he is right, and it is still worth doing.',
        ],
        model_words=164,
    ),

    gram=dict(
        title='Adverbs of manner and degree',
        headers=['Form', 'Example'],
        rows=[
            ['adjective + -ly', 'quiet → quietly; dramatic → dramatically'],
            ['Irregular', 'good → well; fast → fast; hard → hard'],
            ['Position: after the verb or object', 'He plays the bass quietly.'],
            ['Degree before an adjective or adverb', 'extremely quiet; almost completely'],
            ['hard / hardly are different words', 'He works hard. He hardly works.'],
            ['Comparative adverb', 'more quietly; faster; better'],
            ['How + adverb question', 'How quietly does he play?'],
        ],
        notes=[
            'Manner adverbs say how something is done. Degree adverbs say how much, and go in '
            'front of the word they modify: almost silent, extremely quietly.',
            'Hardly is not the adverb of hard. Hard means with effort; hardly means almost not '
            'at all. The test does use this pair.',
            'Do not put an adverb between a verb and its object. Not *he plays quietly the bass*.',
        ],
        watch='Good is an adjective and well is its adverb. He plays good is wrong; he plays '
              'well is right. The exception is feel good, which is about state rather than '
              'manner.',
        ex=[
            ('Make the adverb and put it in the right place.',
             ['He plays the bass. (quiet) →',
              'She explained it. (clear) →',
              'The note sounds higher. (slight) →',
              'They arrived. (late) →',
              'He works. (hard) →',
              'She sings. (good) →'],
             ['He plays the bass quietly.', 'She explained it clearly.',
              'The note sounds slightly higher.', 'They arrived late.',
              'He works hard.', 'She sings well.']),
            ('Choose hard or hardly.',
             ['I could __________ hear it, although the floor was moving.',
              'She works very __________ and still has time to rehearse.',
              'There was __________ anybody at the soundcheck.',
              'The question was __________ to answer.'],
             ['hardly', 'hard', 'hardly', 'hard']),
            ('Correct the mistake in each sentence.',
             ['He plays quietly the bass.',
              'She sings very good.',
              'The two things are complete independent.'],
             ['He plays the bass quietly.', 'She sings very well.',
              'The two things are completely independent.']),
        ],
        bas='Build a Sentence asks these as degree questions: How loudly does it play? How often '
            'does it happen? The adverb stays beside how and never moves to the end.',
    ),

    rev=dict(
        vocab=[
            ('not changing', 'constant'),
            ('to change something slightly', 'modify'),
            ('separate and distinct', 'discrete'),
            ('an idea or belief', 'notion'),
            ('to make something have no effect', 'negate'),
            ('sudden and noticeable', 'dramatic'),
            ('to match or be equivalent to', 'correspond'),
            ('to happen at the same time', 'coincide'),
            ('to see or show a difference', 'differentiate'),
            ('a particular example', 'instance'),
            ('times when noise is not allowed', 'quiet hours'),
            ('a test of equipment before a performance', 'soundcheck'),
        ],
        gram=[
            ('He plays the bass __________ (quiet).', 'quietly'),
            ('I could __________ hear it, although the floor moved.', 'hardly'),
            ('She sings very __________ (good).', 'well'),
            ('The note sounds __________ (slight) higher.', 'slightly'),
            ('The two things are __________ (complete) independent.', 'completely'),
            ('She works very __________ and still finds time.', 'hard'),
            ('They arrived __________ (late) for the soundcheck.', 'late'),
            ('__________ (how / loud) does it play at night?', 'How loudly'),
        ],
        mini=[
            ('According to the passage on page 58, what is unusual about musical memory is',
             ('how it is stored', 'how it is retrieved', 'how long it lasts',
              'how emotional it is'), 1,
             'What is unusual is not the storage. It is the retrieval.'),
            ('In the talk, doubling the frequency gives',
             ('a note twice as high', 'a note twice as loud',
              'the same note an octave higher', 'no audible change'), 2,
             '880 is also an A, and halving gives 220, which is an A too.'),
            ('Which sentence is correct?',
             ('He plays quietly the bass.', 'She sings very good.',
              'I could hardly hear it.', 'The two things are complete independent.'), 2,
             'Hardly means almost not at all; the others misplace the adverb or use an adjective '
             'for one.'),
            ('A resident disturbed at 00.45 by continuing noise should',
             ('wait until morning', 'report it on the portal only',
              'call the night porter', 'speak to the warden first'), 2,
             'After midnight and continuing is the condition the notice gives.'),
            ('In Complete the Words, a gap of two dashes after an adjective stem is most likely',
             ('-ly', '-er', '-est', '-ing'), 1,
             '-er is two letters; -ly is also two but attaches to an adjective to make an adverb, '
             'and the stem decides.'),
            ('In Reading, an inference question asks for',
             ('a fact stated in the text', 'something the text supports but does not state',
              'the meaning of a word', 'the main idea'), 1,
             'Inference items must be supported by the passage but are never quoted from it.'),
        ],
    ),
    tip='In Listen and Repeat, say the whole sentence or say nothing. Half a sentence, however '
        'accurate, scores lower than a complete one delivered slowly — the task is testing '
        'whether you can hold a whole utterance, not whether you can pronounce its first four '
        'words.',
)
