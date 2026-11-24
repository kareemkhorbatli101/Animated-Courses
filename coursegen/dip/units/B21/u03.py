# -*- coding: utf-8 -*-
import figs

U = dict(
num=3,
title='The Margins of a Conference',
gram='nominalisation in a written position',
ai='the margins: finding the five people worth meeting',
strap='CEFR B2 · Grammar: nominalisation in a written position · '
      'AI: the margins: finding the five people worth meeting',
cando=['nominalise an action without losing the actor',
       'compress a position into formal written sentences',
       'plan the margins of a conference around five meetings',
       'say what a generated shortlist of counterparts can and cannot rank',
       'write a six-line tasking for a margins programme'],

hero=('THE PLENARY LASTS THREE DAYS AND DECIDES NOTHING THAT WAS NOT DECIDED IN THE CORRIDOR',
      ['Four hundred delegates, twenty-two speeches and one coffee queue that matters.',
       'The shortlist said five names. Four were right; the fifth was unreachable.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A regional conference in Rhene, where the real business is done between the sessions.',

warm=['Where is the useful part of a large conference?',
      'How would you decide which five people to meet in two days?',
      'What makes a request for a short meeting succeed?'],

read=[
 'A conference of four hundred delegates produces a declaration that was substantially '
 'agreed before anybody arrived, which means that the value of attending lies almost '
 'entirely in the margins: the twenty-minute bilateral slots, the corridor meetings, the '
 'side events and the coffee queue.',
 'Since a delegation of three cannot meet four hundred people in two days, the question is '
 'not how to be busy but which five counterparts are worth the time, and that question has '
 'to be answered before the slot requests go in, because the useful people are booked by '
 'Tuesday.',
 'Hala Darwish therefore asks a system to go through the published delegation list of two '
 'hundred and eleven names and produce a shortlist of five, ranked by relevance to the two '
 'files her delegation actually needs to move, with a one-line reason for each.',
 'The shortlist is intelligent. Four of the five names are people she would have chosen '
 'herself after a week of reading, and it finds them in six minutes, with the file and the '
 'reason attached to each.',
 'The fifth name is the head of a delegation who, as everybody in the room knows but no '
 'document records, has not accepted a bilateral request from anybody for two years and '
 'delegates every file of substance to a deputy whose name is not on the published list at '
 'all.'],

dp1=('Why the margins matter', 'Conference practice commonly holds that the formal outcome '
     'of a large multilateral meeting is largely settled in advance, and that the '
     'incremental value of attendance therefore lies in bilateral contact at the margins.',
     'Source: reported conference practice, 2025–2026.'),

c_a=[('How many delegates are at the conference?', 'about four hundred'),
     ('When is the declaration substantially agreed?', 'before anybody arrives'),
     ('How many names are on the published list?', 'two hundred and eleven'),
     ('How many names did the shortlist give?', 'five, ranked, with reasons'),
     ('How long did it take?', 'six minutes'),
     ('What was wrong with the fifth name?', 'he accepts no bilateral requests')],

c_b=[('The declaration is written during the conference.', 'F'),
     ('A delegation of three can meet four hundred people.', 'F'),
     ('Slot requests must go in early.', 'T'),
     ('Four of the five names were good choices.', 'T'),
     ('The fifth name delegates substance to a deputy.', 'T'),
     ('The deputy appears on the published list.', 'F')],

c_c=[('They decided late. The late ____________ caused the difficulty.', 'decision'),
     ('They did not consult us. The absence of ____________ is regretted.', 'consultation'),
     ('They implemented it badly. The ____________ was defective.', 'implementation'),
     ('We withdrew the amendment. The ____________ was conditional.', 'withdrawal'),
     ('They refused twice. The second ____________ was unexplained.', 'refusal'),
     ('We agreed in March. The ____________ of March stands.', 'agreement')],

c_d=[('Nominalisation turns a verb into a ( adverb / noun ).', ['adverb', 'noun'], 1),
     ('It is used to ( compress a position / add detail ).',
      ['compress a position', 'add detail'], 0),
     ('Its danger is that it ( hides the actor / lengthens the text ).',
      ['hides the actor', 'lengthens the text'], 0),
     ('The shortlist was ( fast and nearly right / slow ).',
      ['fast and nearly right', 'slow'], 0),
     ('The fifth name was wrong because he ( refuses meetings / had left ).',
      ['refuses meetings', 'had left'], 0)],

c_e=('Verb or noun? Put each form in the right column.',
     [('to decide', 'verb'), ('the decision', 'noun'),
      ('to consult', 'verb'), ('the consultation', 'noun'),
      ('to withdraw', 'verb'), ('the withdrawal', 'noun')],
     ['verb', 'noun']),

v_fig_title='WHERE THE WORK HAPPENS',
v_fig=[('people', 'a corridor meeting'), ('clock', 'a bilateral slot'), ('doc', 'a delegation list'),
       ('key', 'a calling card'), ('chart', 'a side event'), ('speech', 'a plenary session')],
v_fig_cap='Six words for the parts of a conference that are not in the programme.',

vocab=[
 ('the margins', 'the bilateral and informal contact around a formal meeting'),
 ('a bilateral slot', 'a short meeting time allocated between two delegations'),
 ('a conference venue', 'the building in which a conference is held'),
 ('a plenary session', 'a session attended by all delegations together'),
 ('a coffee queue', 'the line for refreshment, where delegates meet informally'),
 ('a calling card', 'a small printed card giving a diplomat’s name and post'),
 ('a delegation list', 'the published list of who is attending for each party'),
 ('a seating list', 'the order in which delegations are placed in a room'),
 ('a badge', 'the identification worn to enter a conference'),
 ('a side event', 'a smaller meeting held alongside a conference'),
 ('a corridor meeting', 'an unscheduled conversation outside the meeting rooms'),
 ('a bilateral request', 'a formal request for a meeting between two parties'),
 ('a slot request', 'an application for a specific meeting time'),
 ('a conference room', 'a room assigned for formal business'),
 ('a speakers’ list', 'the order in which delegations will address a session'),
 ('a conference secretariat', 'the staff who run a conference’s arrangements'),
 ('an accreditation desk', 'the point at which delegates are registered and admitted'),
 ('a bilateral programme', 'a delegation’s planned series of bilateral meetings'),
 ('a holding room', 'a room where a delegation waits before a meeting'),
 ('a slot confirmation', 'written confirmation that a meeting time is agreed')],

v_a=[('An application for a specific meeting time is a slot ____________.', 'request'),
     ('The staff who run the arrangements are the conference ____________.', 'secretariat'),
     ('The point at which delegates are registered is an ____________ desk.', 'accreditation'),
     ('The order in which delegations will speak is a ____________ list.', 'speakers’'),
     ('A room where a delegation waits is a ____________ room.', 'holding'),
     ('A smaller meeting held alongside a conference is a ____________ event.', 'side'),
     ('The identification worn to enter is a ____________.', 'badge'),
     ('A delegation’s planned series of meetings is a bilateral ____________.', 'programme')],

v_b=[('The margins are the bilateral and informal contact', 'around a formal meeting.'),
     ('A plenary session is a session attended', 'by all delegations together.'),
     ('A calling card is a small printed card', 'giving a diplomat’s name and post.'),
     ('A seating list is the order in which', 'delegations are placed in a room.'),
     ('A corridor meeting is an unscheduled conversation', 'outside the meeting rooms.')],

g_title='Grammar: nominalisation in a written position',
g_rule=['A nominalisation turns a verb into a noun: decide becomes the decision, consult '
        'becomes consultation, withdraw becomes withdrawal.',
        'Written positions use it to compress several clauses into one formal sentence.',
        'The danger is that the actor disappears: a decision was taken says nothing about who '
        'took it.',
        'So nominalise the action and keep the actor visible: the Committee’s decision, not '
        'simply the decision.'],
g_fig=('LOOSE',
       ['They decided without asking us, and we are concerned.',
        'Somebody implemented it badly and it failed.',
        'They refused again and did not say why.',
        'We withdrew it because they moved on timing.'],
       'PRECISE',
       ['The Committee’s decision without prior consultation of the delegation is a matter of concern.',
        'The Secretariat’s defective implementation of article 4 caused the failure.',
        'The second refusal by the host delegation was unexplained.',
        'The delegation’s withdrawal of the amendment followed their movement on timing.'],
       'four clear sentences too informal for a position',
       'the same four, compressed, with every actor still named'),
g_fig_cap='Nominalise the action. Never delete the actor: that is how a position becomes evasive.',

g_a=[('They decided late. The late ____________ caused the difficulty.', 'decision'),
     ('They did not consult us. The absence of ____________ is regretted.', 'consultation'),
     ('They implemented it badly. The defective ____________ caused the failure.', 'implementation'),
     ('We withdrew the amendment. The ____________ was conditional.', 'withdrawal'),
     ('They refused twice. The second ____________ was unexplained.', 'refusal'),
     ('We agreed in March. The ____________ of March stands.', 'agreement'),
     ('They arrived late. The late ____________ of the delegation was noted.', 'arrival'),
     ('They proposed it in May. The ____________ of May was not pursued.', 'proposal'),
     ('They objected to article 9. The ____________ was recorded in the summary.', 'objection')],

g_b=[('( The Committee’s decision / A decision ) was taken without consultation — name the actor.', ['The Committee’s decision', 'A decision'], 0),
     ('( The Secretariat’s implementation / The implementation ) was defective.',
      ['The Secretariat’s implementation', 'The implementation'], 0),
     ('( The second refusal by the host delegation / The second refusal ) was unexplained.',
      ['The second refusal by the host delegation', 'The second refusal'], 0),
     ('( The delegation’s withdrawal / The withdrawal ) was conditional.',
      ['The delegation’s withdrawal', 'The withdrawal'], 0),
     ('( Their objection to article 9 / An objection ) is recorded in the summary.',
      ['Their objection to article 9', 'An objection'], 0),
     ('( Our proposal of May / The May proposal ) was not pursued — whose?',
      ['Our proposal of May', 'The May proposal'], 0)],

d1=dict(
 title='Five names out of two hundred and eleven',
 fig=(['Two hundred and eleven names.', 'And how many are worth two days?'],
      ['Five, it says.', 'Show me the reasons, not the names.']),
 cap='Hala Darwish and Ambassador Walid Hourani, eight days before the conference.',
 lines=[('Hourani', 'How many are attending?'),
        ('Hala', 'Two hundred and eleven on the published list, from fifty-one delegations.'),
        ('Hourani', 'And we are three. So?'),
        ('Hala', 'Five names, ranked against our two live files, with one line of reason each.'),
        ('Hourani', 'Read me the reasons. The names tell me nothing on their own.'),
        ('Hala', 'Transit, transit, the funding instrument, the funding instrument, and the chair.'),
        ('Hourani', 'Four of those I would have chosen myself. The chair I would not.'),
        ('Hala', 'Because of his position on the file?'),
        ('Hourani', 'Because he has taken no bilateral request from anybody since 2024. Everything goes to his deputy.'),
        ('Hala', 'Who is not on the published list.'),
        ('Hourani', 'He never is. Put in for the deputy, and put the requests in today, not Thursday.'),
        ('Hala', 'Today. And the fifth slot goes to whoever answers first.')],
 a=[('How many delegates and delegations?', 'two hundred and eleven from fifty-one'),
    ('What did the shortlist attach to each name?', 'one line of reason'),
    ('How many names would Hourani have chosen too?', 'four'),
    ('Why was the chair a poor choice?', 'he accepts no bilateral requests'),
    ('Who should be approached instead?', 'his deputy, who is not on the list')],
 b=[('The names tell me nothing on their ____________.', 'own'),
    ('Everything goes to his ____________.', 'deputy'),
    ('Put the requests in ____________, not Thursday.', 'today'),
    ('Ranked against our two live ____________.', 'files')]),

d2=dict(
 title='The deputy who is not on the list',
 fig=(['The deputy answered in an hour.', 'And the chair?'],
      ['Nothing, as predicted.', 'Nobody writes that down.']),
 cap='Hala and Rim Haddad, three days before the conference.',
 lines=[('Rim', 'Did the slots come back?'),
        ('Hala', 'Four confirmed. The chair’s office has not replied and will not.'),
        ('Rim', 'The deputy?'),
        ('Hala', 'Confirmed within the hour, and he asked what we wanted to discuss, which is a good sign.'),
        ('Rim', 'So the shortlist was right about the file and wrong about the person.'),
        ('Hala', 'It was right about everything that has been published, which is a great deal.'),
        ('Rim', 'And wrong about the one thing everybody at the conference knows and nobody prints.'),
        ('Hala', 'Is there a way to get that into the next shortlist?'),
        ('Rim', 'You could write it down yourself. A note in the file: who answers, who delegates, who never replies.'),
        ('Hala', 'For fifty-one delegations.'),
        ('Rim', 'For the eleven we deal with. Start with those, and add one line after every conference.'),
        ('Hala', 'And in four years it becomes the thing no system has.')],
 unresolved=True,
 a=[('How many slots were confirmed?', 'four'),
    ('How fast did the deputy reply?', 'within the hour'),
    ('What was the shortlist right about?', 'everything published'),
    ('What does Rim suggest writing down?', 'who answers, who delegates, who never replies'),
    ('How many delegations should they start with?', 'eleven')],
 b=[('The chair’s office has not ____________.', 'replied'),
    ('Right about everything that has been ____________.', 'published'),
    ('A note in the ____________.', 'file'),
    ('Add one line after every ____________.', 'conference')]),

speak=[('Nominalise it',
        ['Take nine informal sentences about a meeting and compress each one.',
         'Keep the actor visible in every compressed version.',
         'Your partner says who did what in each of your sentences.']),
       ('Five out of two hundred',
        ['Describe a conference you might attend and your two live files.',
         'Name the five people you would try to meet, with one reason each.',
         'Your partner challenges one choice and you defend or drop it.']),
       ('Who never replies?',
        ['Name an organisation whose senior figure is unreachable.',
         'Say who actually answers in their place.',
         'Agree how you would record that for your successor.'])],

ext_title='A shortlist from a delegation list is fast and well reasoned, and it cannot know who answers his own post',
ext_fig=figs.datatable('THE FIVE NAMES, AND WHAT HAPPENED',
                       ['Name on the shortlist', 'Reason given', 'Outcome'],
                       [['delegate, Astrene', 'transit, ranked 1', 'slot confirmed'],
                        ['delegate, Lysmark', 'transit, ranked 2', 'slot confirmed'],
                        ['delegate, Oristan', 'funding instrument', 'slot confirmed'],
                        ['delegate, Tarnia', 'funding instrument', 'slot confirmed'],
                        ['the chair', 'convenes both files', 'no reply, as expected'],
                        ['his deputy', 'not on the list', 'confirmed in 1 hour']]),
ext_fig_cap='Five names from a published list, four of them right, and the useful sixth found by a colleague.',
ext=[
 'A published delegation list is exactly the kind of document a system handles well: two '
 'hundred and eleven names with titles and delegations, which can be cross-referenced '
 'against your own live files and ranked by relevance in a few minutes, with a stated reason '
 'for every name.',
 'That is a real gain in a two-day conference, because the alternative is a week of reading '
 'or, more commonly, meeting whoever happens to be standing in the coffee queue, which is '
 'how most margins programmes are actually assembled.',
 'The limit is not the reasoning but the record. A list gives titles, and a title is a claim '
 'about authority that is often untrue: the head of delegation who delegates everything, the '
 'deputy who decides, the adviser who drafts the text everybody then argues about.',
 'None of that is published anywhere, and it is known instead by the people who have sat in '
 'the room: a long-serving colleague, an interpreter, a predecessor, the officer at another '
 'Mission who dealt with the same delegation last year.',
 'So take the ranked shortlist, which is good, and put one question to a person before the '
 'requests go in: of these five, who answers his own correspondence, and who should I be '
 'asking for instead?'],

dp2=('Title and authority', 'Diplomatic practice commonly notes that the formal seniority '
     'shown on a delegation list is an unreliable guide to who holds decision-making '
     'authority on a particular file, and that this information is transmitted informally '
     'rather than published.',
     'Source: reported conference practice, 2025–2026.'),

e_a=[('Why is a delegation list well suited to a system?', 'it is structured published data'),
     ('What is the usual alternative to a ranked shortlist?', 'a week of reading or the coffee queue'),
     ('What is a title a claim about?', 'authority, and often untrue'),
     ('Who knows who really decides?', 'colleagues, interpreters and predecessors'),
     ('What question should be put to a person?', 'who answers his own correspondence')],
e_b=[('A delegation list is unstructured material.', 'F'),
     ('Ranking by relevance to live files is useful.', 'T'),
     ('A title reliably shows who decides.', 'F'),
     ('Authority on a file is often transmitted informally.', 'T'),
     ('Most margins programmes are carefully planned.', 'F'),
     ('One question to a colleague can correct a shortlist.', 'T')],

w_model='Purpose: so that the delegation obtains four bilateral slots that move the transit '
        'and funding files. Scope: the Regional Council conference of 18–19 March; the '
        'plenary interventions are drafted separately. Inputs: the published delegation list '
        'of 211 names, our two live file summaries, and one conversation with the officer who '
        'attended last year. Criteria: 5 ranked names, each with the file, the reason and the '
        'person who actually answers. Done: 5 names and 5 draft slot requests with the head '
        'of delegation by 12:00 on 6 March. Fallback: where a head of delegation is known not '
        'to answer, the request is addressed to the deputy and the file is noted.',
w_fig=figs.spec_card('SIX LINES FOR A MARGINS PROGRAMME',
                     [('Purpose', 'four slots that move two files'),
                      ('Scope', 'the conference of 18–19 March'),
                      ('Inputs', '211 names, 2 file summaries, 1 conversation'),
                      ('Criteria', 'five names, each with file, reason and who answers'),
                      ('Done', '5 requests cleared by 12:00 on 6 March'),
                      ('Fallback', 'address the deputy where the chair does not answer')]),
w_fig_cap='Six lines, and line 3 is the one that saves the fifth slot.',
w_task='Write a six-line tasking for a margins programme.',
w_steps=['Line 1: how many slots, and which files they must move.',
         'Line 2: which conference, and what is drafted separately.',
         'Line 3: the inputs, including one conversation with a person.',
         'Line 4: what each name must come with.',
         'Line 5: how many requests, cleared by whom and when.',
         'Line 6: what is done where the named person does not answer.'],
w_bank=['Purpose: so that the delegation obtains … slots that move … .',
        'Scope: the conference of … ; … is drafted separately.',
        'Inputs: the published list of … names, … file summaries, … conversation with … .',
        'Criteria: … ranked names, each with the file, the reason and who answers.',
        'Done: … requests cleared by … at … . Fallback: where … , the request goes to … .'],
w_check=['Does line 1 state a number of slots and the files?',
         'Does line 3 include a person as an input?',
         'Does line 4 require who actually answers?',
         'Does line 6 cover the unreachable counterpart?'],

t_title='The margins: finding the five people worth meeting',
t_fig=figs.split('BEFORE A CONFERENCE',
                 'Ask the system for this',
                 ['five names from the published list',
                  'ranked against our live files',
                  'one line of reason for each',
                  'the side events that touch our files'],
                 'Ask a colleague for this',
                 ['which of them answers his own post',
                  'who decides when the chair does not',
                  'who was unhelpful last year',
                  'whose adviser drafts the text']),
t_fig_cap='Six minutes for the ranking; one conversation for the fifth slot.',
t_body=[
 'Give the system the published delegation list, your two or three live files, and the '
 'instruction to produce five names ranked by relevance, each with the file it belongs to '
 'and one line explaining why that person is worth twenty minutes of a two-day conference.',
 'Ask it in the same request for the side events that touch your files, because a side event '
 'is often a cheaper way to meet four relevant people than four separate slot requests, and '
 'the programme is published in the same document.',
 'Then take the five names to somebody who has dealt with those delegations and ask one '
 'question: which of these answers his own correspondence? The answer may move a name down '
 'the list and bring an unpublished deputy to the top of it, which no ranking of titles '
 'could have done.'],
t_say=[('Ask for the ranking: ', 'Five names from this list, ranked against these two files, with reasons.'),
       ('Ask for the side events: ', 'Which side events touch either file?'),
       ('Ask a person: ', 'Which of these five answers his own correspondence?')],
t_bound='A shortlist is built from titles and published positions. It cannot know who '
        'delegates every file to a deputy, who has refused all bilateral requests for two '
        'years, or whose adviser actually drafts the text, because none of that is written '
        'down anywhere.',
t_a=[('Five names, ranked against these two ____________.', 'files'),
     ('Which side events ____________ either file?', 'touch'),
     ('Which of these answers his own ____________?', 'correspondence'),
     ('A shortlist is built from titles and published ____________.', 'positions'),
     ('Who delegates every file to a ____________.', 'deputy'),
     ('Whose adviser actually ____________ the text.', 'drafts')],
t_b_rubric='Say whether each could come from the published list alone.',
t_b=[('The title and delegation of each attendee.', 'yes: that is what the list is'),
     ('Which head of delegation never answers.', 'no: nobody publishes that'),
     ('Which side events are scheduled.', 'yes: it is in the programme'),
     ('Whose adviser drafts the negotiating text.', 'no: ask somebody who was there')],

case=dict(
 title='The Decision Room · Four slots, and the fifth addressed to the wrong man',
 brief=[
  'A delegation of three attends a two-day conference of two hundred and eleven delegates '
  'with two live files. A ranked shortlist of five names is produced from the published list '
  'in six minutes, each name carrying its file and a one-line reason.',
  'Four of the five are sound and the slots are confirmed. The fifth is the chair of the '
  'committee that convenes both files, who has, as several colleagues know and no document '
  'states, accepted no bilateral request from any delegation since 2024.',
  'Had the request gone in as drafted, the delegation would have waited for a reply that was '
  'never coming and lost the fifth slot entirely. The head of mission recognised the name and '
  'the request was redirected to a deputy who does not appear on the published list.'],
 exhibit=figs.datatable('FIVE REQUESTS, AS SENT AND AS THEY SHOULD HAVE BEEN',
                        ['Addressed to', 'From the list?', 'Reply'],
                        [['delegate, Astrene', 'yes', 'confirmed, day 1'],
                         ['delegate, Lysmark', 'yes', 'confirmed, day 1'],
                         ['delegate, Oristan', 'yes', 'confirmed, day 2'],
                         ['delegate, Tarnia', 'yes', 'confirmed, day 2'],
                         ['the chair (as drafted)', 'yes', 'none expected'],
                         ['his deputy (as sent)', 'no', 'confirmed in 1 hour']]),
 exhibit_cap='Five names from the list; the one that worked was not on it.',
 exhibit_note='The ranking was correct on every published criterion. The correction came '
              'from a colleague who had sat opposite the chair twice.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'Six minutes for a ranking I would have needed a week to produce, and four of five were right.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'And the fifth would have cost you a slot, because a title is not the same thing as authority.'),
         ('Rim Haddad', 'consular assistant',
          'Which nobody has written down, so each new officer discovers it for the first time.')],
 steps=[('Find it', 'What did the shortlist get right?'),
        ('Compare it', 'The chair’s title against the chair’s practice.'),
        ('Infer it', 'Why could no ranking have known?'),
        ('Weigh it', 'Six minutes saved against one slot nearly lost.'),
        ('Decide', 'What is added to the shortlist before requests go out?')],
 analysis=[('Find it. What did the shortlist get right?', 'four of five names, with files and reasons'),
           ('Compare it. Title against practice?', 'the chair convenes both files but answers nobody'),
           ('Infer it. Why was it unknown?', 'his practice is published nowhere'),
           ('Weigh it. What was the cost of six minutes?', 'almost one of five slots'),
           ('Decide. What is added before sending?', 'one question to somebody who has met them')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what the shortlist is produced from.',
                 'Say what question is put to a person before requests go out.',
                 'Say what is done when a counterpart is known not to answer.',
                 'Say what the Mission records after each conference.'],
 bank=['Every margins programme begins with a ranked shortlist from the published list.',
       'Before any request is sent, one officer who has met the counterparts is asked who answers.',
       'Where a counterpart is known not to answer, the request is addressed to the person who does.',
       'After each conference, one line per delegation is added to the file: who answers, who decides, who delegates.'],
 outcome='Four slots run as planned, and the deputy’s meeting produces the only movement on '
         'the funding file in six months. The Mission begins a one-page note on the eleven '
         'delegations it deals with most, recording who answers and who decides, which is '
         'added to after every conference. The shortlist is produced again next time, because '
         'four of five in six minutes is worth having.',
 outcome_q=[('How many slots ran as planned?', 'four'),
            ('What did the deputy’s meeting produce?', 'the only movement on the funding file in six months'),
            ('What did the Mission begin?', 'a one-page note on eleven delegations'),
            ('What does the note record?', 'who answers and who decides'),
            ('Will the shortlist be used again?', 'yes, because four of five in six minutes is worth having')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Who should we meet at the conference?',
 task=['A delegate asked for a margins programme nine days before a two-day conference.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Who should we meet at the conference?',
        'Go through the delegation list.',
        'Pick the important ones.',
        'Our files are transit and funding.',
        'Rank them somehow.',
        'Send me a list this week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and nothing that says how many names or what makes one important.',
 asked=['The delegation list', 'The important ones', 'Ranked somehow'],
 back=['211 names considered', '38 names returned as important', '0 criterion stated for the ranking'],
 gap='Nobody said how many slots exist, what important means, or who must actually answer.',
 back_cap='Thirty-eight important names for a delegation of three with four slots.',
 back_note='Pick the important ones has no meaning until somebody says important for which '
           'file, and ranked somehow is not a criterion at all.',
 diagnosis=[('“the important ones”', 'unstated criterion'),
            ('“rank them somehow”', 'unstated criterion'),
            ('“who should we meet”', 'ambiguous referent'),
            ('“our files”', 'ambiguous referent'),
            ('“a list this week”', 'missing condition'),
            ('“go through the list”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that five usable names come back.',
 scaffold=['why the meetings are wanted and what they must move',
           'which conference, and what is prepared separately',
           'which list, which file summaries, and which person is consulted',
           'how many names, ranked by what, with what attached to each',
           'what is delivered, to whom and by when',
           'what is done where a named counterpart does not answer'],
 bank=['Purpose: so that the delegation obtains … slots that move … and … ',
       'Scope: the conference of … ; the plenary intervention is drafted separately',
       'Inputs: the published list of … names, … file summaries, … conversation with … ',
       'Criteria: … names ranked by relevance to the named file, each with reason and who answers',
       'Done: … names and … draft requests with … by … ',
       'Fallback: where a counterpart is known not to answer, the request is addressed to … '],
 check=['Is the number of names stated?',
        'Is the ranking criterion named, not left as somehow?',
        'Are the two files named rather than called our files?',
        'Is there a rule for the counterpart who does not answer?'],
 model=['so that the delegation obtains 4 slots that move the transit and funding files',
        'the conference of 18–19 March; the plenary intervention is drafted separately',
        'the published list of 211 names, 2 file summaries, 1 conversation with last year’s officer',
        '5 names ranked by relevance to the named file, each with reason and who answers',
        '5 names and 5 draft requests with the head of delegation by 12:00 on 6 March',
        'where a counterpart is known not to answer, the request is addressed to his deputy'],
 cost='38 names returned for 4 slots. 1 stated criterion and 1 stated number would have '
      'returned 5.'),

feet=dict(
 title='On Your Feet · A head of delegation stops you in the coffee queue',
 setting=[
  'On the first morning of the conference, in the coffee queue, the head of a delegation you '
  'have never met introduces himself, says he has read your delegation’s paper, and asks you '
  'directly whether your government will support his amendment in the afternoon session.',
  'You have no instruction on his amendment. You have forty seconds before the queue moves, '
  'no note-taker, and two of his officials are standing behind him listening to every word.'],
 ladder=[('Will you support my amendment?', 'the question you cannot answer'),
         ('It is a small thing, surely', 'the pressure to minimise it'),
         ('I will tell the chair you are with us', 'the words you must not let stand')],
 cap='Three turns in a coffee queue, with two of his officials listening.',
 turns=[('Turn 1 · Head of delegation', 'Will your government support my amendment this afternoon?'),
        ('Turn 2 · Head of delegation', 'It is a very small change. Surely you do not need an instruction for that.'),
        ('Turn 3 · Head of delegation', 'Good. I will tell the chair your delegation is with us.')],
 holds=['I am glad you raised it with me directly, and I would rather be useful than quick.',
        'I have no instruction on that amendment, and I am not going to improvise one in a queue.',
        'Small or large is not mine to judge: what I can do is put it to my capital today.',
        'I will read the text properly this morning and come back to you before the session.',
        'Please do not tell the chair we are with you, because I have not said that and cannot.',
        'If it helps, send me the text now and I will give you an answer, one way or the other, by two o’clock.'],
 redline='You must not indicate support or opposition without an instruction, you must not '
         'let an inference about your position stand uncorrected because correcting it is '
         'awkward, and you must not accept his description of the amendment as small. Say '
         'nothing you would not want quoted to the chair.',
 score=['Thanked him for raising it directly.',
        'Stated plainly that there is no instruction.',
        'Refused to judge the amendment’s size.',
        'Corrected the inference about support, explicitly and at once.',
        'Gave a time by which a real answer would come.'],
 a=[('What is the first thing you say?', 'that you are glad he raised it directly'),
    ('What do you state plainly?', 'that you have no instruction'),
    ('What do you refuse to judge?', 'whether the amendment is small'),
    ('What must you correct at once?', 'that your delegation is with him'),
    ('What do you offer instead?', 'to read the text and answer by a stated time'),
    ('Why does the audience matter?', 'two of his officials will repeat what you say')]),

rev_fig=figs.split('A MARGINS PROGRAMME',
                   'From the published list',
                   ['every name, title and delegation',
                    'relevance to our live files',
                    'a ranking with stated reasons',
                    'the side events and their subjects'],
                   'From a colleague',
                   ['who answers his own correspondence',
                    'who decides when the chair will not',
                    'who was obstructive last year',
                    'whose adviser holds the pen']),
rev_fig_cap='The left column takes six minutes. The right column takes one conversation and saves a slot.',
rev=dict(
 read=[('How many delegates attended?',
        ['two hundred and eleven', 'five', 'fifty-one', 'four thousand'], 0),
       ('How long did the shortlist take?',
        ['six minutes', 'six days', 'a week', 'two hours'], 0),
       ('What was wrong with the fifth name?',
        ['he accepts no bilateral requests', 'he had retired', 'he was absent', 'he held no file'], 0),
       ('Who was approached instead?',
        ['his deputy', 'the secretariat', 'the chair', 'nobody'], 0)],
 listen_text='Ask for five names from the published list, ranked against your live files, '
             'with one line of reason for each. Then ask a colleague which of the five '
             'answers his own correspondence, because a title is not authority.',
 listen=[('Ask for five names from the published ____________.', 'list'),
         ('Ranked against your live ____________.', 'files'),
         ('With one line of ____________ for each.', 'reason'),
         ('A title is not ____________.', 'authority')],
 speak=['Compress nine informal sentences into formal written positions, keeping every actor visible.',
        'Then name the five people you would meet at a conference, with one reason each.'],
 write='Write a six-line tasking for a margins programme.',
 vocab=[('An application for a specific meeting time is a slot ____________.', 'request'),
        ('The staff who run the arrangements are the conference ____________.', 'secretariat'),
        ('A smaller meeting held alongside a conference is a ____________ event.', 'side'),
        ('A room where a delegation waits is a ____________ room.', 'holding')],
 gram=[('They refused the request. The ____________ was conveyed in writing.', 'refusal'),
       ('They departed on Tuesday. The ____________ was unannounced.', 'departure'),
       ('They approved the annex. The ____________ was given in May.', 'approval'),
       ('They cancelled the visit. The ____________ was explained by letter.', 'cancellation')]),

found=['Rank your next conference’s delegation list against your live files before you arrive.',
       'Ask one colleague which of your five names answers his own correspondence.',
       'Compress your next position into nominalised sentences, with the actor named in each.',
       'Start a one-page note on who answers and who decides at the delegations you deal with.'],
end_line='A list gives you titles. Only a person tells you who answers.',
end_next='Next: A Memorandum of Understanding')
