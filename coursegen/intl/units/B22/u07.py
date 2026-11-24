# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='Speaking to a Community That Is Not Your Own',
gram='parallelism and the rule of three in a short speech',
ai='speaking to a community that is not your own',
strap='CEFR B2 · Grammar: parallelism and the rule of three in a short speech · '
      'AI: speaking to a community that is not your own',
cando=['build parallel structures and triads in a short speech',
       'speak to a community whose expectations you do not share',
       'distinguish promises within your power from those beyond it',
       'find out what a community has already been promised',
       'write a six-line tasking for a community address'],

hero=('SIX MINUTES OF WARMTH, AND ONE PROMISE THAT WAS NOT HERS TO MAKE',
      ['The speech was generous, well judged and warmly received.',
       'The sentence about visa appointments is quoted back eleven months later.'],
      [(1080, 'blue', 'long'), (260, 'grey', 'short'), (280, 'teal', 'short')]),
hero_cap='A six-minute address to a community association, and the sentence that outlived it.',

warm=['Have you spoken to a group whose expectations you did not know?',
      'What had they been promised before you arrived?',
      'What can you actually deliver?'],

read=[
 'The Ambassador is to speak for six minutes at the annual gathering of a community association '
 'with some nine hundred members, most of whom were born in the host country and hold the '
 'nationality of hers.',
 'The speech is prepared with care. It thanks the association, names three of its projects, '
 'acknowledges a long-standing grievance about documents and promises that the Mission will '
 'look at the question of appointments.',
 'The promise is warmly received, and it is not hers to make. Appointments are allocated by a '
 'system in the capital; the Mission can expedite three a week and no more.',
 'What the community had been promised before, by two of her predecessors, was precisely this: '
 'that the question would be looked at. Nobody in the Mission knew that, because no record of '
 'the undertakings given to this association existed.',
 'Speaking to a community that is not your own requires three things: knowing what it has '
 'already been told, saying only what is within your power, and writing down what you have '
 'said.'],

dp1=('Undertakings to communities', 'Practice in community engagement commonly requires a '
     'record of undertakings given, with the officer who gave them and the outcome, since '
     'repeated general assurances are a principal source of distrust.',
     'Source: general community engagement guidance, 2025–2026.'),

c_a=[('How long is the address?', 'six minutes'),
     ('How large is the association?', 'about nine hundred members'),
     ('What grievance is acknowledged?', 'a long-standing one about documents'),
     ('What is promised?', 'that the Mission will look at appointments'),
     ('How many appointments can the Mission expedite?', 'three a week'),
     ('Who had promised the same thing before?', 'two of her predecessors')],

c_b=[('The speech was badly prepared.', 'F'),
     ('The promise was within her power.', 'F'),
     ('The Mission had a record of past undertakings.', 'F'),
     ('Appointments are allocated locally.', 'F'),
     ('The same promise had been made before.', 'T'),
     ('Most members were born in the host country.', 'T')],

c_c=[('We have listened, we have recorded, and we ____________ act.', 'shall'),
     ('Three things are within our power: to expedite, to explain and to ____________.', 'record'),
     ('Not a promise, not a hope, but a ____________.', 'commitment'),
     ('We shall do what we can, we shall say what we ____________, and we shall write it down.', 'cannot'),
     ('To thank you, to hear you and to ____________ you is why I came.', 'answer'),
     ('It is not quick, it is not complete, and it is not ____________.', 'enough')],

c_d=[('Parallelism means ( variety / the same grammatical form repeated ).', ['variety', 'the same grammatical form repeated'], 1),
     ('The rule of three groups items in ( threes / pairs ).', ['threes', 'pairs'], 0),
     ('A triad of three infinitives must keep ( to in each / to in the first only ).',
      ['to in each', 'to in the first only'], 0),
     ('Parallelism helps a second-language audience because it ( is predictable / is formal ).',
      ['is predictable', 'is formal'], 0),
     ('The promise about appointments was ( beyond her power / within it ).',
      ['beyond her power', 'within it'], 0)],

c_e=('Within your power or beyond it? Put each promise in the right column.',
     [('to expedite three appointments a week', 'within'),
      ('to change the appointment system', 'beyond'),
      ('to answer every letter within ten days', 'within'),
      ('to shorten the waiting time nationally', 'beyond'),
      ('to publish the current waiting time', 'within'),
      ('to amend the nationality rules', 'beyond')],
     ['within', 'beyond']),

v_fig_title='A COMMUNITY IN SIX WORDS',
v_fig=[('people', 'a community of interest'), ('key', 'a promise within your power'), ('doc', 'a record of what was asked'),
       ('clock', 'a follow-up after a visit'), ('chart', 'a grievance of long standing'), ('speech', 'a thanks in the local language')],
v_fig_cap='Six words for six minutes that nine hundred people will remember for a year.',

vocab=[
 ('a community of interest', 'a group sharing a common concern'),
 ('a diaspora', 'people of one origin living elsewhere'),
 ('a religious holiday', 'a day of religious observance'),
 ('a style of addressing somebody', 'the correct way of addressing somebody'),
 ('a greeting appropriate to an occasion', 'the right words for the day'),
 ('a dress expected', 'what guests are expected to wear'),
 ('a seating of guests', 'where guests are placed'),
 ('an invitation extended through a leader', 'an invitation passed via a community figure'),
 ('a gatekeeper', 'somebody controlling access to a group'),
 ('a host of an event', 'the person or body receiving guests'),
 ('a translation into a community language', 'a version in the group’s own language'),
 ('a question of representation', 'who speaks for whom'),
 ('a grievance of long standing', 'a complaint of many years'),
 ('a promise within your power', 'an undertaking you can keep'),
 ('a promise beyond it', 'an undertaking you cannot keep'),
 ('a follow-up after a visit', 'what is done afterwards'),
 ('a record of what was asked', 'a written note of requests made'),
 ('a courtesy of leaving early', 'a polite early departure'),
 ('a photograph with consent of a group', 'a picture taken with everyone’s agreement'),
 ('a thanks in the local language', 'gratitude expressed in their language')],

v_a=[('An undertaking you can keep is a promise within your ____________.', 'power'),
     ('Somebody controlling access to a group is a ____________.', 'gatekeeper'),
     ('A complaint of many years is a ____________ of long standing.', 'grievance'),
     ('A written note of requests made is a record of what was ____________.', 'asked'),
     ('Who speaks for whom is a question of ____________.', 'representation'),
     ('A version in the group’s own language is a translation into a ____________ language.', 'community'),
     ('The correct way of addressing somebody is a ____________ of addressing somebody.', 'style'),
     ('Gratitude expressed in their language is a thanks in the ____________ language.', 'local')],

v_b=[('A diaspora is people of one origin', 'living elsewhere.'),
     ('An invitation extended through a leader is an invitation', 'passed via a community figure.'),
     ('A follow-up after a visit is what is done', 'afterwards.'),
     ('A courtesy of leaving early is a polite', 'early departure.'),
     ('A dress expected is what guests', 'are expected to wear.')],

g_title='Grammar: parallelism and the rule of three in a short speech',
g_rule=['Parallelism repeats a grammatical form across items: we have listened, we have '
        'recorded, and we shall act.',
        'A triad of infinitives keeps to in each: to thank you, to hear you and to answer you.',
        'The rule of three gives a short speech its shape: three ideas, three examples, three '
        'promises. More than three is a list; fewer is an assertion.',
        'In a second language, parallelism is a kindness rather than a flourish, because the '
        'second and third items are predictable once the first has been understood.'],
g_fig=('LOOSE',
       ['We listened, there was a record made, and action will follow.',
        'To thank you, hearing you and we will answer.',
        'It is not quick, incomplete, and not enough either.',
        'Three things we can do: expediting, explanation and to record.'],
       'PRECISE',
       ['We have listened, we have recorded, and we shall act.',
        'To thank you, to hear you and to answer you.',
        'It is not quick, it is not complete, and it is not enough.',
        'Three things are within our power: to expedite, to explain and to record.'],

       'four triads broken by changes of form',
       'the same four with the form held across all three'),
g_fig_cap='Hold the form across all three. The audience hears the shape before it hears the words.',

g_a=[('We have listened, we have recorded, and we ____________ act.', 'shall'),
     ('Three things are within our power: to expedite, to explain and to ____________.', 'record'),
     ('Not a promise, not a hope, but a ____________.', 'commitment'),
     ('We shall do what we can, we shall say what we ____________, and we shall write it down.', 'cannot'),
     ('To thank you, to hear you and to ____________ you is why I came.', 'answer'),
     ('It is not quick, it is not complete, and it is not ____________.', 'enough'),
     ('We came to listen, we stayed to ____________, and we shall return to report.', 'learn'),
     ('This is your association, your city and your ____________.', 'country'),
     ('We can expedite three, we can publish the waiting time, and we can ____________ every letter.', 'answer')],

g_b=[('( We have listened, we have recorded, and we shall act / We listened, a record was made, and action will follow ) — parallel.', ['We have listened, we have recorded, and we shall act', 'We listened, a record was made, and action will follow'], 0),
     ('( to thank you, to hear you and to answer you / to thank you, hearing you and we will answer ) — parallel infinitives.',
      ['to thank you, to hear you and to answer you',
       'to thank you, hearing you and we will answer'], 0),
     ('( It is not quick, it is not complete, and it is not enough / It is not quick, incomplete, and not enough either ) — parallel.',
      ['It is not quick, it is not complete, and it is not enough',
       'It is not quick, incomplete, and not enough either'], 0),
     ('( to expedite, to explain and to record / expediting, explanation and to record ) — one form.',
      ['to expedite, to explain and to record',
       'expediting, explanation and to record'], 0),
     ('( This is your association, your city and your country / This is your association, the city here and your country ) — parallel.',
      ['This is your association, your city and your country',
       'This is your association, the city here and your country'], 0),
     ('( We came to listen, we stayed to learn, and we shall return to report / We came listening, stayed for learning and will report ) — parallel.',
      ['We came to listen, we stayed to learn, and we shall return to report',
       'We came listening, stayed for learning and will report'], 0)],

d1=dict(
 title='What they were promised in 2019',
 fig=(['They were very warm.', 'They have heard it before.'],
      ['Heard what?', 'That it would be looked at.']),
 cap='Ambassador Clara Mendel and Amara Sow, after the gathering.',
 lines=[('Amara', 'They were warm, and two people quoted your predecessor to me afterwards.'),
        ('Mendel', 'Quoted him saying what?'),
        ('Amara', 'That the question of appointments would be looked at. In 2019, and again in 2022.'),
        ('Mendel', 'Which is almost exactly what I said tonight.'),
        ('Amara', 'In the same room, to many of the same people.'),
        ('Mendel', 'Why did nobody tell me?'),
        ('Amara', 'Because we keep no record of what has been promised to this association.'),
        ('Mendel', 'Then the third general assurance is worse than none.'),
        ('Amara', 'The third is heard as a refusal, and politely received as one.'),
        ('Mendel', 'What could I have said instead?'),
        ('Amara', 'Three appointments a week, which you control; the current waiting time published monthly; and every letter answered within ten days.'),
        ('Mendel', 'Smaller, concrete, and mine to give.')],
 a=[('What did two people quote?', 'the predecessor’s promise to look at appointments'),
    ('In which years?', '2019 and 2022'),
    ('Why did nobody warn her?', 'no record of promises to the association exists'),
    ('How is a third general assurance heard?', 'as a refusal'),
    ('What could she have offered?', 'three appointments a week, published waiting times, letters answered in ten days')],
 b=[('In the same ____________.', 'room'),
    ('We keep no ____________.', 'record'),
    ('Heard as a ____________.', 'refusal'),
    ('Smaller, concrete, and ____________ to give.', 'mine')]),

d2=dict(
 title='Who speaks for nine hundred people',
 fig=(['The chairman invited us.', 'And who invited the chairman?'],
      ['The committee.', 'Of how many?']),
 cap='Mendel and Elena Duarte, planning the next visit.',
 lines=[('Elena', 'Your invitation came through the chairman of the association.'),
        ('Mendel', 'Who has been chairman for eleven years.'),
        ('Elena', 'And who decides, in practice, which members you meet.'),
        ('Mendel', 'Is that improper?'),
        ('Elena', 'It is entirely normal, and it means you have met the chairman’s nine hundred, not the city’s.'),
        ('Mendel', 'How do I meet anybody else without discourtesy?'),
        ('Elena', 'You accept his invitation, you thank him publicly, and you ask him to introduce you to the younger members.'),
        ('Mendel', 'Which he may decline to do.'),
        ('Elena', 'Then you hold a consular open morning, which anybody may attend without any invitation at all.'),
        ('Mendel', 'And the chairman is invited to open it.'),
        ('Elena', 'Which costs him nothing and gives you the other half of the community.'),
        ('Mendel', 'And if the two halves disagree about what the Mission should do?')],
 unresolved=True,
 a=[('Through whom did the invitation come?', 'the chairman of the association'),
    ('How long has he been chairman?', 'eleven years'),
    ('What does he decide in practice?', 'which members she meets'),
    ('Is that improper?', 'no, it is entirely normal'),
    ('What is the remedy?', 'an open morning anybody may attend, opened by the chairman')],
 b=[('The chairman’s nine ____________.', 'hundred'),
    ('You thank him ____________.', 'publicly'),
    ('Without any ____________ at all.', 'invitation'),
    ('Which costs him ____________.', 'nothing')]),

speak=[('Three, held',
        ['Make six triads about your own work.',
         'Hold the grammatical form across all three items.',
         'Your partner objects to any that changes form.']),
       ('Within or beyond',
        ['List eight things a visitor might promise your organisation.',
         'Your partner sorts them into within your power and beyond it.',
         'Offer the three smallest that are genuinely yours.']),
       ('Who invited you',
        ['Describe an event you were invited to.',
         'Your partner asks who decided the guest list.',
         'Say how you would meet the people who were not on it.'])],

ext_title='A third general assurance is heard as a refusal',
ext_fig=figs.datatable('WHAT HAD BEEN PROMISED BEFORE',
                       ['Year', 'Promise', 'Outcome'],
                       [['2019', 'the question will be looked at', 'nothing recorded'],
                        ['2022', 'the question will be looked at', 'nothing recorded'],
                        ['this year', 'the Mission will look at it', 'pending'],
                        ['—', 'appointments expedited', 'three a week, available'],
                        ['—', 'waiting time published', 'possible, never done'],
                        ['—', 'letters answered in ten days', 'possible, never promised']]),
 ext=[
 'Preparing an address to a community is work a system does well: the association’s history, '
 'its projects, the names of its officers, the religious calendar, the correct modes of address '
 'and a form of thanks in the community’s own language.',
 'Two things it cannot supply, and both of them decide how the speech is heard. The first is '
 'what the community has already been promised, which exists in nobody’s file because no record '
 'of undertakings has been kept. The second is which promises are actually within the speaker’s '
 'power.',
 'The first matters because a general assurance repeated for the third time is not received as '
 'warmth. It is received, politely, as a refusal, and the politeness conceals the damage until '
 'somebody quotes the 2019 version back at you.',
 'The second matters because the attractive promises are almost always the ones beyond your '
 'power. The appointment system belongs to a capital; the nationality rules belong to a '
 'legislature; the waiting time belongs to arithmetic. What belongs to a mission is small, '
 'concrete and deliverable: three expedited appointments a week, a published waiting time, a '
 'letter answered in ten days.',
 'So require two things in the instruction that no document will volunteer: every undertaking '
 'given to this community in the last ten years, with its outcome, and a list of possible '
 'offers divided into those within the Mission’s own gift and those requiring a decision '
 'elsewhere.',
 'Then write down what you said, within the week, and put it where your successor will find it. '
 'We have listened, we have recorded, and we shall act is a triad that only works if the second '
 'clause is literally true.'],

dp2=('Access and representation', 'Engagement practice commonly notes that invitations extended '
     'through a community office reach that office’s own networks, and recommends at least one '
     'open occasion to which attendance requires no invitation.',
     'Source: general community engagement guidance, 2025–2026.'),

ext_fig_cap='Three identical assurances in six years, and three concrete offers never made.',
ext_title2='',
e_a=[('What can a system supply?', 'history, projects, officers, calendar, modes of address'),
     ('What can it not supply?', 'past undertakings and the limits of your power'),
     ('How is a third general assurance received?', 'as a refusal, politely'),
     ('Where do attractive promises usually belong?', 'to somebody else’s gift'),
     ('What belongs to a mission?', 'small, concrete, deliverable things')],
e_b=[('A general assurance repeated is received as warmth.', 'F'),
     ('Records of undertakings usually exist.', 'F'),
     ('The appointment system belongs to the Mission.', 'F'),
     ('Three expedited appointments a week is deliverable.', 'T'),
     ('An open occasion needs no invitation.', 'T'),
     ('What was said should be written down within the week.', 'T')],

w_model='Purpose: so that I offer this association three things I can actually deliver, and '
        'repeat nothing it has already been promised. Scope: Saturday’s address to the '
        'association in Varkent; the consular open morning is planned separately. Inputs: the '
        'association’s own publications, our consular files for the last ten years, and the '
        'notes of my two predecessors’ visits. Criteria: every undertaking given to this '
        'community in the last ten years, with the officer who gave it and what followed; a '
        'list of possible offers divided into those within the Mission’s own gift and those '
        'requiring a decision elsewhere; the correct modes of address and a form of thanks in '
        'the community’s language, checked with a native speaker; three ideas in the speech and '
        'no more. Done: with me by Thursday. Fallback: where it cannot be established whether a '
        'promise was given, the speech offers only what is within our gift.',
w_fig=figs.spec_card('SIX LINES FOR A COMMUNITY ADDRESS',
                     [('Purpose', 'three deliverable offers, nothing repeated'),
                      ('Scope', 'Saturday’s address; the open morning separately'),
                      ('Inputs', 'their publications, our files, predecessors’ notes'),
                      ('Criteria', 'past undertakings with outcomes; offers sorted by gift'),
                      ('Done', 'Thursday'),
                      ('Fallback', 'unestablished promise: offer only what is ours')]),
w_fig_cap='The first criterion is a search of your own files, and it is the one nobody asks for.',
w_task='Write a six-line tasking for a community address.',
w_steps=['Line 1: say what you must be able to offer, and what you must avoid.',
         'Line 2: say which occasion, and what is planned separately.',
         'Line 3: say what you are giving it.',
         'Line 4: say the undertakings, the division of offers and the courtesies.',
         'Line 5: say when you need it.',
         'Line 6: say what happens where a past promise cannot be established.'],
w_bank=['Purpose: so that I offer … three things I can actually deliver, and repeat nothing it has already been promised',
        'Scope: … ’s address to … ; the open morning is planned separately',
        'Inputs: the association’s own publications, our consular files, and my predecessors’ notes',
        'Criteria: every undertaking given in the last ten years with the officer and the outcome; possible offers divided into those within our gift and those requiring a decision elsewhere; modes of address and a form of thanks checked with a native speaker; three ideas and no more',
        'Done: with me by … . Fallback: where it cannot be established whether a promise was given, the speech offers only what is within our gift'],
w_check=['Does it search our own files for past promises?',
         'Are offers divided by whose gift they are?',
         'Are the courtesies checked with a native speaker?',
         'Are there only three ideas?'],

t_title='Speaking to a community that is not your own',
t_fig=figs.split('SIX MINUTES, NINE HUNDRED PEOPLE',
                 'It can give you',
                 ['the association’s history',
                  'its projects and officers',
                  'the religious calendar',
                  'modes of address and thanks'],
                 'You must establish',
                 ['what they were promised',
                  'by whom, and what followed',
                  'what is in your own gift',
                  'who was not invited']),
t_fig_cap='The left column is preparation. The right column decides whether you are believed.',
t_body=[
 'Ask for the courtesies and the history, which it does well: the association’s projects and '
 'officers, the religious calendar, the correct modes of address, and a form of thanks in the '
 'community’s own language to be checked with a native speaker.',
 'Then require the two things no document volunteers. First, every undertaking given to this '
 'community in the last ten years, with the officer who gave it and what followed; a general '
 'assurance repeated a third time is heard as a refusal. Second, a division of possible offers '
 'into those within the Mission’s own gift and those requiring a decision elsewhere.',
 'Offer three things, small and concrete, and write down afterwards what you said. We have '
 'listened, we have recorded, and we shall act is a triad whose middle clause is a filing '
 'instruction.'],
t_say=[('Ask for the history: ', 'The projects, the officers, the calendar, the forms of address.'),
       ('Require the record: ', 'Every undertaking given to this community in ten years, with its outcome.'),
       ('Divide the offers: ', 'Within our own gift, or requiring a decision elsewhere.')],
t_bound='It can read everything published about the association and nothing about what the '
        'Mission has promised it. That record exists only in files it cannot search and in the '
        'memory of people who were in the room.',
t_a=[('The projects, the officers, the ____________.', 'calendar'),
     ('Every ____________ given in ten years.', 'undertaking'),
     ('With its ____________.', 'outcome'),
     ('Within our own ____________.', 'gift'),
     ('Offer ____________ things, small and concrete.', 'three'),
     ('A general assurance repeated is heard as a ____________.', 'refusal')],
t_b_rubric='Say whether each offer is within a mission’s own gift.',
t_b=[('Expediting three appointments a week.', 'yes'),
     ('Changing the appointment system.', 'no: a decision elsewhere'),
     ('Publishing the current waiting time monthly.', 'yes'),
     ('Amending the nationality rules.', 'no: a legislature')],

case=dict(
 title='The Decision Room · The third time the question would be looked at',
 brief=[
  'A head of mission addresses the annual gathering of a community association of some nine '
  'hundred members for six minutes. The speech thanks the association, names three of its '
  'projects and acknowledges a long-standing grievance about documents.',
  'It promises that the Mission will look at the question of appointments. Appointments are '
  'allocated by a system in the capital; the Mission can expedite three a week.',
  'Two of her predecessors gave the same assurance, in 2019 and 2022, in the same room. The '
  'Mission holds no record of undertakings given to this association, and nobody warned her.'],
 exhibit=figs.datatable('WHAT WAS AVAILABLE TO OFFER',
                        ['Offer', 'Whose gift', 'Ever offered?'],
                        [['expedite three a week', 'the Mission', 'no'],
                         ['publish the waiting time', 'the Mission', 'no'],
                         ['answer letters in ten days', 'the Mission', 'no'],
                         ['change the appointment system', 'the capital', 'promised three times'],
                         ['shorten national waiting times', 'the capital', 'no'],
                         ['amend nationality rules', 'a legislature', 'no']]),
 exhibit_cap='Three deliverable offers never made, and one undeliverable assurance made three times.',
 exhibit_note='The speech was generous and well judged. Its single promise was the one thing '
              'in it that the Mission could not perform.',
 voices=[('Amara Sow', 'senior locally engaged assistant',
          'Two people quoted your predecessor to me afterwards. In this room, in 2019.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'Then the third general assurance is worse than none, and it was the only promise I made.'),
         ('Elena Duarte', 'delegate, the Assembly',
          'And the invitation came through a chairman of eleven years, so you met his nine hundred.')],
 steps=[('Find it', 'What was promised?'),
        ('Compare it', 'The promise against the Mission’s power.'),
        ('Infer it', 'Why did nobody warn her?'),
        ('Weigh it', 'Three small concrete offers.'),
        ('Decide', 'What governs a community address?')],
 analysis=[('Find it. What was promised?', 'that appointments would be looked at'),
           ('Compare it. Whose gift is that?', 'the capital’s, not the Mission’s'),
           ('Infer it. Why no warning?', 'no record of undertakings existed'),
           ('Weigh it. What was available?', 'three concrete offers in the Mission’s gift'),
           ('Decide. What governs it?', 'the record, the division of offers, and writing it down')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is established before the speech.',
                 'Say what may be promised.',
                 'Say what is done afterwards.',
                 'Say how the community is met more widely.'],
 bank=['Before any community address, every undertaking given to that community in the last ten years is established, with its outcome.',
       'Only offers within the Mission’s own gift are made, and no more than three.',
       'What was said is written down within the week and filed where a successor will find it.',
       'At least one occasion a year is open to attendance without invitation, so that access does not depend on one office.'],
 outcome='A register of undertakings is opened, with eleven entries recovered from files and '
         'four from the memories of staff. The three concrete offers are made at a consular '
         'open morning six weeks later, which four hundred people attend and which the '
         'association’s chairman opens. The waiting time is published monthly from that month, '
         'and the question of appointments is raised with the capital as a formal submission '
         'rather than a promise.',
 outcome_q=[('What was opened?', 'a register of undertakings'),
            ('How many entries were recovered?', 'eleven from files and four from memory'),
            ('Where were the offers made?', 'at a consular open morning'),
            ('How many attended?', 'four hundred'),
            ('What happened to the appointments question?', 'it went to the capital as a formal submission')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write me six minutes for Saturday',
 task=['A head of mission asked for an address to a community association.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write me six minutes for Saturday.',
        'Warm and generous.',
        'Acknowledge their concerns.',
        'Promise we will help.',
        'The same as the one last year.',
        'By Friday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “promise we will help” produced the one sentence beyond her power.',
 asked=['Warm and generous', 'The same as last year', 'Promise we will help'],
 back=['6 minutes', '3 projects named', '1 promise outside our gift'],
 gap='Nobody asked what this community had already been promised, or what lay within the Mission’s power.',
 back_cap='A generous and well-judged speech containing the Mission’s third identical assurance.',
 back_note='“Promise we will help” has no object and no limit, so the draft supplied the most '
           'attractive available promise, which was the one belonging to somebody else.',
 diagnosis=[('“six minutes for Saturday”', 'unscoped set'),
            ('“their concerns”', 'ambiguous referent'),
            ('“promise we will help”', 'hidden assumption'),
            ('“acknowledge their concerns”', 'unscoped set'),
            ('“the same as the one last year”', 'ambiguous referent'),
            ('“by Friday”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that nothing is promised twice and nothing beyond your gift.',
 scaffold=['what you must be able to offer, and what you must avoid',
           'which occasion, and what is planned separately',
           'what you are giving it',
           'the undertakings, the division of offers and the courtesies',
           'when you need it',
           'what happens where a past promise cannot be established'],
 bank=['Purpose: so that I offer this association three things I can actually deliver, and repeat nothing it has already been promised',
       'Scope: Saturday’s address to the association in Varkent; the consular open morning is planned separately',
       'Inputs: the association’s own publications, our consular files for the last ten years, and the notes of my two predecessors’ visits',
       'Criteria: every undertaking given to this community in the last ten years, with the officer who gave it and what followed; a list of possible offers divided into those within the Mission’s own gift and those requiring a decision elsewhere; the correct modes of address and a form of thanks in the community’s language, checked with a native speaker; three ideas in the speech and no more',
       'Done: with me by Thursday',
       'Fallback: where it cannot be established whether a promise was given, the speech offers only what is within our gift'],
 check=['Are past undertakings established?',
        'Are offers divided by whose gift?',
        'Are there only three ideas?',
        'Are the courtesies checked locally?'],
 model=['so that I offer this association three things I can actually deliver, and repeat nothing it has already been promised',
        'Saturday’s address to the association in Varkent; the consular open morning is planned separately',
        'the association’s own publications, our consular files for the last ten years, and the notes of my two predecessors’ visits',
        'every undertaking given to this community in the last ten years, with the officer who gave it and what followed; a list of possible offers divided into those within the Mission’s own gift and those requiring a decision elsewhere; the correct modes of address and a form of thanks in the community’s language, checked with a native speaker; three ideas in the speech and no more',
        'with me by Thursday',
        'where it cannot be established whether a promise was given, the speech offers only what is within our gift'],
 cost='6 minutes, 3 projects named, 1 promise outside our gift, and the third identical assurance in six years.'),

lang=dict(
 title='Across the Language Line · A thanks pronounced almost right',
 setting=[
  'The Ambassador closes with a sentence of thanks in the community’s own language, learned '
  'from a transliteration. One vowel is wrong, and the word she says means something close to '
  'farewell at a funeral.',
  'The room is kind about it. Three people mention it afterwards, two with amusement and one '
  'with evident discomfort.'],
 ladder=[('A sentence of thanks', 'learned from a transliteration'),
         ('One vowel wrong', 'and a funeral word'),
         ('A kind room', 'and one person uncomfortable')],
 cap='A courtesy attempted, and a transliteration that could not carry it.',
 turns=[('Turn 1 · A member', 'Thank you for trying our language.'),
        ('Turn 2 · Mendel', 'Did I say it correctly?'),
        ('Turn 3 · The member', 'Almost. The last word is the one used at funerals.')],
 holds=['Thank you for telling me; I would much rather know.',
        'Would you say it for me, and let me repeat it until it is right?',
        'Is there a form that is safer for somebody with my accent?',
        'I shall say it correctly next time, or not at all.',
        'May I ask you to record it for me?',
        'I will have it checked by a speaker before I use it again.'],
 redline='Never use a phrase in another language learned only from writing, and never abandon '
         'the courtesy altogether because it was once said wrongly.',
 score=['Thanked the member for the correction.',
        'Asked to be taught the pronunciation.',
        'Asked for a safer form.',
        'Undertook to say it correctly or not at all.',
        'Arranged to have it checked by a speaker.'],
 a=[('How was the thanks learned?', 'from a transliteration'),
    ('What was wrong?', 'one vowel'),
    ('What did the word come to mean?', 'something close to a funeral farewell'),
    ('How did the room react?', 'kindly, with one person uncomfortable'),
    ('What should be done?', 'have it taught and checked by a speaker'),
    ('What should not be done?', 'abandon the courtesy altogether')]),

rev_fig=figs.split('A COMMUNITY ADDRESS',
                   'Establish first',
                   ['past undertakings',
                    'who gave them',
                    'what followed',
                    'who was not invited'],
                   'Then offer',
                   ['three things, concrete',
                    'all within your gift',
                    'written down afterwards',
                    'filed for a successor']),
rev_fig_cap='Four facts before the speech and four properties in it, and the fourth assurance is never needed.',
rev=dict(
 read=[('How long was the address?',
        ['six minutes', 'eleven minutes', 'half an hour', 'four minutes'], 0),
       ('What was promised?',
        ['that appointments would be looked at', 'three appointments a week',
         'a published waiting time', 'nothing'], 0),
       ('Who had promised the same before?',
        ['two predecessors', 'the capital', 'nobody', 'the chairman'], 0),
       ('How many appointments can the Mission expedite?',
        ['three a week', 'nine hundred', 'none', 'ten a day'], 0)],
 listen_text='Require every undertaking given to the community in ten years with its outcome, '
             'and a division of possible offers into those within our gift and those requiring '
             'a decision elsewhere; then offer three concrete things.',
 listen=[('Every ____________ given in ten years.', 'undertaking'),
         ('With its ____________.', 'outcome'),
         ('Those within our ____________.', 'gift'),
         ('Then offer three ____________ things.', 'concrete')],
 speak=['Build six triads, holding the grammatical form across all three items.',
        'Then sort eight possible promises into those within your power and those beyond it.'],
 write='Write a six-line tasking for a community address.',
 vocab=[('An undertaking you can keep is a promise within your ____________.', 'power'),
        ('Somebody controlling access to a group is a ____________.', 'gatekeeper'),
        ('A complaint of many years is a ____________ of long standing.', 'grievance'),
        ('Who speaks for whom is a question of ____________.', 'representation')],
 gram=[('We came to listen, we stayed to ____________, and we shall return to report.', 'learn'),
       ('This is your association, your city and your ____________.', 'country'),
       ('We can expedite three, publish the waiting time, and ____________ every letter.', 'answer'),
       ('We shall write, we shall telephone, and we shall ____________.', 'return')]),

found=['Establish what a community has already been promised, and by whom.',
       'Offer only what is within your own gift, and offer three things.',
       'Write down what you said within the week, and file it for your successor.',
       'Hold one occasion a year that needs no invitation at all.'],
end_line='The third time a question will be looked at, the room hears a refusal.',
end_next='Next: Saying What You Do Not Know')
