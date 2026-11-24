# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='The Community Meeting',
gram='we, one and the Mission: inclusive and distancing subjects',
ai='speaking to your own community abroad',
strap='CEFR B2 · Grammar: we, one and the Mission: inclusive and distancing subjects · '
      'AI: speaking to your own community abroad',
cando=['choose between we, one and the Mission according to what is true',
       'prepare a community meeting around the questions that will be asked',
       'answer an individual case question in public without deciding it',
       'say why warm generic remarks fail in a hall of individual cases',
       'write a six-line tasking for a community meeting'],

hero=('THEY DID NOT COME FOR REMARKS. THEY CAME WITH FOUR HUNDRED INDIVIDUAL CASES',
      ['Nine hundred warm, well-ordered words about shared endeavour.',
       'The first question was about one certificate, issued in 2019, in one name.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A hired hall in Ostport on a Saturday, two hundred and ten people, one interpreter at the back.',

warm=['What do people want from a meeting with their own Mission?',
      'When does we include your audience, and when does it exclude them?',
      'What can you promise in a hall, and what can you not?'],

read=[
 'A community meeting is not a speech with questions afterwards. It is four hundred individual '
 'cases in one room, of which perhaps twelve are asked out loud, and the remarks at the '
 'beginning are the price of admission rather than the point.',
 'Two hundred and ten people come to the hall in Ostport. They left in different years, they '
 'hold different documents, some have children in local schools and some have property they '
 'have not seen for a decade, and no two legal positions in the room are identical.',
 'Ambassador Walid Hourani asks for remarks and receives nine hundred words that are warm, '
 'well ordered and entirely in the register of a government addressing a public: shared '
 'endeavour, a new chapter, a Mission at the service of its people.',
 'Three sentences in the draft begin we will ensure, and each of the three concerns a matter '
 'decided by a ministry in the capital rather than by this Mission, which can forward a file '
 'and cannot decide one.',
 'The first question from the floor is about a single certificate issued in 2019 in one name, '
 'and the eleven that follow are equally specific, and all twelve of them are already in the '
 'Mission’s own enquiry log.'],

dp1=('Consular enquiry patterns', 'Consular practice commonly observes that the questions '
     'raised at community meetings closely follow the pattern of enquiries already received '
     'at the post, and that a post’s own enquiry log is therefore the best available guide to '
     'what will be asked.',
     'Source: general consular practice literature, 2025–2026.'),

c_a=[('What is a community meeting really?', 'individual cases in one room'),
     ('How many people came?', 'two hundred and ten'),
     ('What varies in the room?', 'the year of departure, documents and legal positions'),
     ('What register were the draft remarks in?', 'a government addressing a public'),
     ('How many sentences promised too much?', 'three'),
     ('Where were the twelve questions already recorded?', 'in the Mission’s enquiry log')],

c_b=[('A community meeting is a speech with questions.', 'F'),
     ('Everybody in the hall had the same legal position.', 'F'),
     ('The draft remarks were badly written.', 'F'),
     ('The Mission can decide the matters in question.', 'F'),
     ('The first question was highly specific.', 'T'),
     ('The enquiry log predicted the questions.', 'T')],

c_c=[('____________ cannot change the law, and I will not pretend otherwise.', 'We'),
     ('The ____________ can forward your file, and it cannot decide it.', 'Mission'),
     ('____________ hears this question at every meeting, and it deserves a straight answer.', 'One'),
     ('____________ are all waiting for the same decision from the capital.', 'We'),
     ('The ____________ will write to you within ten working days.', 'Mission'),
     ('____________ should not have to ask twice, and I am sorry that you did.', 'One')],

c_d=[('We including the audience means ( the Mission alone / we are in this together ).', ['the Mission alone', 'we are in this together'], 1),
     ('The Mission as a subject ( puts distance and precision in / warms the sentence ).',
      ['puts distance and precision in', 'warms the sentence'], 0),
     ('One is ( impersonal and formal / plural ).', ['impersonal and formal', 'plural'], 0),
     ('We will ensure, about another ministry’s decision, is ( a promise you cannot keep / modest ).',
      ['a promise you cannot keep', 'modest'], 0),
     ('The best guide to the questions is ( your own enquiry log / a draft of remarks ).',
      ['your own enquiry log', 'a draft of remarks'], 0)],

c_e=('Inclusive, institutional or impersonal? Put each subject in the right column.',
     [('We are all waiting for the same decision', 'inclusive'),
      ('The Mission can forward your file', 'institutional'),
      ('One hears this at every meeting', 'impersonal'),
      ('We cannot change the law', 'inclusive'),
      ('The Mission will write within ten days', 'institutional'),
      ('One should not have to ask twice', 'impersonal')],
     ['inclusive', 'institutional', 'impersonal']),

v_fig_title='A HALL ON A SATURDAY',
v_fig=[('people', 'a community meeting'), ('speech', 'a question from the floor'), ('doc', 'a translated handout'),
       ('key', 'a community representative'), ('clock', 'a follow-up surgery'), ('chart', 'a list of names collected')],
v_fig_cap='Six words for the hardest room a diplomat ever speaks in, because everybody in it has a case.',

vocab=[
 ('a community meeting', 'a public meeting held for nationals resident abroad'),
 ('a diaspora association', 'an organisation of nationals living abroad'),
 ('a hall hire', 'the renting of premises for a meeting'),
 ('a question from the floor', 'a question put by somebody attending'),
 ('a translated handout', 'printed information provided in another language'),
 ('an interpreter at the back', 'an interpreter placed to serve part of a room'),
 ('a returning national', 'a citizen who intends to go back to live'),
 ('a documentation enquiry', 'a question about papers and their validity'),
 ('a property question', 'a question about ownership of land or buildings'),
 ('a school recognition question', 'a question about whether studies abroad will be recognised'),
 ('a hostile questioner', 'somebody attending in order to object'),
 ('a round of applause', 'the clapping of an audience'),
 ('an angry silence', 'a silence that follows an unsatisfactory answer'),
 ('a promise not to make', 'an undertaking one has no authority to give'),
 ('a list of names collected', 'the record of those wishing to be contacted'),
 ('a follow-up surgery', 'individual appointments offered after a meeting'),
 ('a community representative', 'a person speaking for a group of nationals'),
 ('a question taken away', 'a question recorded for a later written answer'),
 ('a packed hall', 'premises filled beyond comfortable capacity'),
 ('an individual case', 'one person’s own matter')],

v_a=[('Individual appointments offered after a meeting are a follow-up ____________.', 'surgery'),
     ('An undertaking one has no authority to give is a promise not to ____________.', 'make'),
     ('A question recorded for a later written answer is a question taken ____________.', 'away'),
     ('A question about papers and their validity is a ____________ enquiry.', 'documentation'),
     ('A citizen who intends to go back to live is a ____________ national.', 'returning'),
     ('Printed information in another language is a ____________ handout.', 'translated'),
     ('A silence that follows an unsatisfactory answer is an angry ____________.', 'silence'),
     ('A person speaking for a group of nationals is a community ____________.', 'representative')],

v_b=[('A community meeting is a public meeting', 'held for nationals resident abroad.'),
     ('A diaspora association is an organisation', 'of nationals living abroad.'),
     ('A school recognition question is a question about', 'whether studies abroad will be recognised.'),
     ('A hostile questioner is somebody attending', 'in order to object.'),
     ('A list of names collected is the record', 'of those wishing to be contacted.')],

g_title='Grammar: we, one and the Mission: inclusive and distancing subjects',
g_rule=['We can mean the Mission, the state, or everybody in the room, and the audience hears '
        'whichever is least convenient for you.',
        'The Mission as the subject is precise and slightly distancing: the Mission can forward '
        'your file, and it cannot decide it.',
        'One is impersonal and formal, and it is useful for acknowledging a shared experience '
        'without claiming it: one hears this question at every meeting.',
        'Choose by what is true. We cannot change the law is honest if the audience cannot '
        'either; we will ensure is dishonest if the decision is another ministry’s.'],
g_fig=('WRONG SUBJECT',
       ['We will ensure your certificate is recognised.',
        'We are doing everything possible for you.',
        'The Mission understands how painful this is.',
        'We decided your application last March.'],
       'RIGHT SUBJECT',
       ['The Mission will forward your file; the decision is the ministry’s.',
        'One cannot do more from here than forward and chase, and I will do both.',
        'I understand how painful this is, and so does everybody in this room.',
        'The ministry decided your application last March; the Mission was informed in April.'],
       'four sentences claiming the wrong authority',
       'the same four, each with the subject the facts support'),
g_fig_cap='The subject of your sentence is a claim about who decides. Get it wrong and you have promised.',

g_a=[('____________ cannot change the law, and I will not pretend otherwise.', 'We'),
     ('The ____________ can forward your file, and it cannot decide it.', 'Mission'),
     ('____________ hears this question at every meeting.', 'One'),
     ('____________ are all waiting for the same decision from the capital.', 'We'),
     ('The ____________ will write to you within ten working days.', 'Mission'),
     ('____________ should not have to ask twice, and I am sorry that you did.', 'One'),
     ('The ____________ was informed of the decision in April.', 'Mission'),
     ('____________ have forty appointments on Monday and two hundred people here.', 'We'),
     ('____________ does not expect a hall to settle an individual case.', 'One')],

g_b=[('( The Mission will forward your file / We will ensure your file is approved ) — your authority.', ['The Mission will forward your file', 'We will ensure your file is approved'], 0),
     ('( I understand how painful this is / The Mission understands how painful this is ) — a person feels it.',
      ['I understand how painful this is', 'The Mission understands how painful this is'], 0),
     ('( The ministry decided last March / We decided last March ) — who actually decided.',
      ['The ministry decided last March', 'We decided last March'], 0),
     ('( One hears this at every meeting / We hear this at every meeting ) — acknowledge without claiming.',
      ['One hears this at every meeting', 'We hear this at every meeting'], 0),
     ('( We are all waiting for the same decision / The Mission is waiting ) — genuinely shared.',
      ['We are all waiting for the same decision', 'The Mission is waiting'], 0),
     ('( One cannot do more from here than forward and chase / We will do everything possible ) — exact.',
      ['One cannot do more from here than forward and chase', 'We will do everything possible'], 0)],

d1=dict(
 title='Nine hundred warm words',
 fig=(['It is warm and it is well ordered.', 'And what does it promise?'],
      ['Three things we cannot do.', 'Then it promises three things.']),
 cap='Ambassador Walid Hourani and Rim Haddad, the day before the meeting.',
 lines=[('Rim', 'You have the remarks?'),
        ('Hourani', 'Nine hundred words. Warm, well ordered, and better written than my own draft.'),
        ('Rim', 'Read me the third paragraph.'),
        ('Hourani', 'We will ensure that documents issued abroad are recognised without difficulty.'),
        ('Rim', 'The Mission cannot ensure that. The ministry decides it, case by case.'),
        ('Hourani', 'There are two more like it. We will ensure, twice again.'),
        ('Rim', 'Then there are three promises in nine hundred words, and the hall will remember all three.'),
        ('Hourani', 'And quote them back to me in October, correctly.'),
        ('Rim', 'What would you rather say?'),
        ('Hourani', 'That the Mission forwards and chases, that the decision is the ministry’s, and how long it takes.'),
        ('Rim', 'That is a shorter and much less popular paragraph.'),
        ('Hourani', 'It is also the only one I can still be standing behind next year.')],
 a=[('How long were the remarks?', 'nine hundred words'),
    ('What did the third paragraph promise?', 'that documents would be recognised without difficulty'),
    ('Who actually decides?', 'the ministry, case by case'),
    ('How many such promises were there?', 'three'),
    ('What does Hourani prefer to say?', 'that the Mission forwards and chases, and how long it takes')],
 b=[('Better written than my own ____________.', 'draft'),
    ('The hall will ____________ all three.', 'remember'),
    ('And quote them back to me in ____________.', 'October'),
    ('Standing behind next ____________.', 'year')]),

d2=dict(
 title='Twelve questions already in the log',
 fig=(['Twelve questions from the floor.', 'And how many were new?'],
      ['None of them.', 'Then why did we write remarks?']),
 cap='Hourani and Layla Sayegh, after the meeting.',
 lines=[('Layla', 'Twelve questions in fifty minutes.'),
        ('Hourani', 'And every one of them already in our enquiry log, some of them four times over.'),
        ('Layla', 'So we could have had the answers printed.'),
        ('Hourani', 'We could have had the answers printed, in two languages, and handed them at the door.'),
        ('Layla', 'Instead we had nine hundred words about a new chapter.'),
        ('Hourani', 'Which nobody came for. The hall came about certificates, schools and property.'),
        ('Layla', 'The property question was the one that went badly.'),
        ('Hourani', 'It went badly because I did not know the answer and I tried to be comforting.'),
        ('Layla', 'What should you have said?'),
        ('Hourani', 'That the Mission cannot advise on title, that it is a matter for the courts, and that I would write to him with the names of two local lawyers.'),
        ('Layla', 'And next time, the twelve answers at the door and twenty minutes of remarks.'),
        ('Hourani', 'Ten minutes. And what do we do about the four hundred who did not ask?')],
 unresolved=True,
 a=[('How many questions were asked?', 'twelve in fifty minutes'),
    ('How many were new?', 'none'),
    ('What could have been handed out at the door?', 'the twelve answers in two languages'),
    ('Why did the property question go badly?', 'he did not know and tried to be comforting'),
    ('What should he have said?', 'that it is a matter for the courts, with two names to follow')],
 b=[('Some of them four times ____________.', 'over'),
    ('Which nobody came ____________.', 'for'),
    ('I tried to be ____________.', 'comforting'),
    ('The twelve answers at the ____________.', 'door')]),

speak=[('Choose the subject',
        ['Make nine sentences about your organisation using we, one and its name.',
         'Your partner says who is claimed to be acting in each.',
         'Correct any where the subject claims an authority you lack.']),
       ('Twelve questions',
        ['List the twelve questions your own work is asked most often.',
         'Say for each who actually decides the answer.',
         'Draft one answer that names the decider and a time.']),
       ('No promise',
        ['Your partner asks four times for an assurance you cannot give.',
         'Refuse each time and say what you will actually do.',
         'Give a date in every answer.'])],

ext_title='Remarks are easy to write and the twelve questions are already in your own log',
ext_fig=figs.datatable('WHAT THE HALL ASKED, AND WHERE IT WAS ALREADY RECORDED',
                       ['Question', 'In the enquiry log?', 'Who decides it'],
                       [['a certificate issued in 2019', 'yes, 14 times', 'the ministry'],
                        ['recognition of school years', 'yes, 31 times', 'the ministry'],
                        ['property title', 'yes, 9 times', 'the courts'],
                        ['absence and obligations', 'yes, 22 times', 'the ministry'],
                        ['replacing a lost document', 'yes, 40 times', 'the Mission'],
                        ['eight further questions', 'yes, all of them', 'various']]),
ext_fig_cap='Twelve questions, none of them new, and only one of them the Mission itself decides.',
ext=[
 'A system writes community remarks fluently, and the remarks are pleasant, structured and '
 'warm. They are also written in the register such remarks are usually written in, which is '
 'the register of a government addressing a public, and the register itself produces promises.',
 'We will ensure is a natural phrase in that register and an impossible one for a Mission, '
 'because the matters most often raised at a community meeting are decided in a capital, in a '
 'ministry, or in a court, and a Mission forwards, chases and explains.',
 'The deeper problem is that nobody in the hall came for remarks. They came with individual '
 'cases, and a draft written from nothing but a subject heading cannot know what those cases '
 'are — but your own enquiry log can, and it is on the desk.',
 'Put the log through a system instead. Ask it to group six months of enquiries into the twelve '
 'questions that recur, with the number of times each was raised, and ask who decides each one, '
 'which your consular section already knows.',
 'Then print the twelve answers in both languages, hand them in at the door, speak for ten '
 'minutes rather than thirty, and spend the rest of the evening taking names for individual '
 'appointments. That is what a hall of four hundred cases actually needs.'],

dp2=('Expectation and authority', 'Consular guidance commonly warns against assurances at '
     'public meetings concerning matters determined by other authorities, since such '
     'assurances are recalled accurately by those who heard them and cannot be honoured by '
     'the post that gave them.',
     'Source: general consular practice literature, 2025–2026.'),

e_a=[('What register do generated remarks use?', 'a government addressing a public'),
     ('What does that register produce?', 'promises'),
     ('What does a Mission actually do?', 'forwards, chases and explains'),
     ('What should be put through a system instead?', 'the Mission’s own enquiry log'),
     ('What should be handed in at the door?', 'the twelve answers in both languages')],
e_b=[('Generated remarks are usually cold.', 'F'),
     ('We will ensure is natural in that register.', 'T'),
     ('A Mission decides most of these questions.', 'F'),
     ('The enquiry log predicts the questions.', 'T'),
     ('Ten minutes of remarks is better than thirty.', 'T'),
     ('Assurances at meetings are soon forgotten.', 'F')],

w_model='Purpose: so that the twelve questions the hall will ask are answered in writing '
        'before anybody asks them. Scope: the meeting of 18 May in Ostport; individual cases are '
        'dealt with at the follow-up surgery and not from the platform. Inputs: six months of '
        'the Mission’s enquiry log, the consular section’s note of who decides each question, '
        'and the hall’s capacity. Criteria: the 12 recurring questions with the number of times '
        'each was raised; for each, what the Mission can do, who decides, and how long it takes; '
        'no sentence beginning we will ensure; both languages. Done: the handout printed by 16:00 '
        'on 16 May and ten minutes of remarks cleared with the Ambassador. Fallback: where a '
        'question is decided elsewhere, the answer names the decider and offers a written reply '
        'within ten working days.',
w_fig=figs.spec_card('SIX LINES FOR A COMMUNITY MEETING',
                     [('Purpose', 'answer the twelve questions before they are asked'),
                      ('Scope', 'the meeting of 18 May; cases at the surgery'),
                      ('Inputs', 'six months of the enquiry log and who decides'),
                      ('Criteria', '12 questions, counts, decider, duration; no we will ensure'),
                      ('Done', 'handout by 16:00 on 16 May; ten minutes of remarks'),
                      ('Fallback', 'decided elsewhere: name the decider, write in ten days')]),
w_fig_cap='The deliverable is a handout and ten minutes, not thirty minutes and a hope.',
w_task='Write a six-line tasking for a community meeting.',
w_steps=['Line 1: what the preparation must achieve.',
         'Line 2: which meeting, and where individual cases go.',
         'Line 3: the enquiry log and the note of who decides.',
         'Line 4: the questions, the counts, the decider, the duration and the forbidden phrase.',
         'Line 5: what is printed and what is cleared, and by when.',
         'Line 6: what the answer says where the decision is elsewhere.'],
w_bank=['Purpose: so that the … questions the hall will ask are answered in writing before anybody asks them',
        'Scope: the meeting of … ; individual cases are dealt with at … ',
        'Inputs: … months of the enquiry log, and the note of who decides each question',
        'Criteria: the … recurring questions with counts; what the Mission can do, who decides, how long; no sentence beginning we will ensure',
        'Done: the handout printed by … and … minutes of remarks cleared',
        'Fallback: where a question is decided elsewhere, the answer names … '],
w_check=['Is the enquiry log the input rather than a subject heading?',
         'Does every answer name who decides?',
         'Is we will ensure forbidden?',
         'Are individual cases moved off the platform?'],

t_title='Speaking to your own community abroad',
t_fig=figs.split('BEFORE A HALL OF FOUR HUNDRED CASES',
                 'Put this in',
                 ['six months of your enquiry log',
                  'who decides each question',
                  'how long each decision takes',
                  'what the Mission itself can do'],
                 'Do not ask for',
                 ['warm opening remarks',
                  'a vision of a new chapter',
                  'assurances about recognition',
                  'anything beginning we will ensure']),
t_fig_cap='The log is the only honest source for what a community will ask you.',
t_body=[
 'Give it your own enquiry log for six months and ask it to group the enquiries into the '
 'twelve questions that recur, with a count against each, which is a task it does quickly and '
 'accurately and which no officer has time to do by hand.',
 'Then ask, for each of the twelve, three things: what the Mission itself can do, who actually '
 'decides, and how long that decision takes in practice. The first and third come from your '
 'consular section; the second is the one the hall most needs and least often hears.',
 'Forbid the register explicitly. Speaking to a community abroad is not addressing a public: '
 'ask for no opening remarks, no vision, and no sentence beginning we will ensure, and keep the '
 'platform to ten minutes. Then print the twelve answers in both languages, hand them in at the '
 'door, and spend the evening taking names for appointments.'],
t_say=[('Ask for the grouping: ', 'Group six months of enquiries into the twelve questions that recur, with counts.'),
       ('Ask for the three facts: ', 'For each: what we can do, who decides, how long it takes.'),
       ('Forbid the register: ', 'No opening remarks, no vision, nothing beginning we will ensure.')],
t_bound='A draft of remarks knows the subject of a meeting and nothing about the people in the '
        'hall. It does not know when they left, which documents they hold, which ministry '
        'decides their question, or that forty of them have asked the same thing twice already.',
t_a=[('Group six months of enquiries into the twelve questions that ____________.', 'recur'),
     ('With ____________.', 'counts'),
     ('For each: what we can do, who ____________, how long it takes.', 'decides'),
     ('No opening remarks, no ____________.', 'vision'),
     ('Nothing beginning we will ____________.', 'ensure'),
     ('Forty of them have asked the same thing ____________ already.', 'twice')],
t_b_rubric='Say whether each belongs on the platform or at the follow-up surgery.',
t_b=[('How long a replacement document takes.', 'the platform: it is the same for everybody'),
     ('One certificate issued in 2019 in one name.', 'the surgery: it is an individual case'),
     ('Who decides recognition of school years.', 'the platform: naming the decider helps all'),
     ('A property title dispute.', 'the surgery, and then a written answer with two names')],

case=dict(
 title='The Decision Room · Three promises in nine hundred words',
 brief=[
  'Two hundred and ten people attend a community meeting in a hired hall. They left in '
  'different years, hold different documents, and no two legal positions in the room are the '
  'same. Four hundred individual matters are represented; twelve are raised aloud.',
  'The drafted remarks run to nine hundred words and are warm and well ordered. Three sentences '
  'begin we will ensure, and each concerns a decision taken by a ministry in the capital or by a '
  'court, not by the Mission.',
  'All twelve questions asked from the floor appear in the Mission’s own enquiry log for the '
  'previous six months, one of them forty times. The log was not used in the preparation and '
  'was on the consular section’s desk throughout.'],
 exhibit=figs.datatable('NINETY MINUTES, AS SPENT AND AS NEEDED',
                        ['Item', 'As it happened', 'As it should have been'],
                        [['remarks', '30 min', '10 min'],
                         ['questions from the floor', '50 min', '30 min'],
                         ['handout of answers', 'none', '12 answers, 2 languages'],
                         ['names taken for appointments', '18', 'as many as asked'],
                         ['promises made', '3', '0'],
                         ['questions new to the Mission', '0', '0']]),
 exhibit_cap='Thirty minutes of remarks nobody came for, and no handout of the answers everybody came for.',
 exhibit_note='The register of community remarks produces assurances, and the assurances '
              'concern decisions the Mission does not take. Both facts are properties of the '
              'genre rather than mistakes of drafting.',
 voices=[('Ambassador Walid Hourani', 'head of mission',
          'The remarks were better written than mine and they contained three promises I cannot keep.'),
         ('Rim Haddad', 'consular assistant',
          'And every question from the floor was already in our log, one of them forty times over.'),
         ('Layla Sayegh', 'press and cultural attaché',
          'So the preparation was done on the wrong document. The log was the brief all along.')],
 steps=[('Find it', 'What did the draft contain?'),
        ('Compare it', 'The remarks against the enquiry log.'),
        ('Infer it', 'Why does the register promise?'),
        ('Weigh it', 'Warm remarks against twelve printed answers.'),
        ('Decide', 'How is a community meeting prepared?')],
 analysis=[('Find it. What was in it?', 'nine hundred warm words and three promises'),
           ('Compare it. Against the log?', 'all twelve questions were already recorded'),
           ('Infer it. Why promises?', 'the register of public remarks produces assurances'),
           ('Weigh it. What was needed?', 'twelve answers at the door and ten minutes of speech'),
           ('Decide. How is it prepared?', 'from the enquiry log, naming who decides')],
 decision='Decide the method, in four lines.',
 decision_steps=['Say what document the preparation starts from.',
                 'Say what each answer must name.',
                 'Say how long the platform takes.',
                 'Say what is never said from a platform.'],
 bank=['Preparation starts from the Mission’s own enquiry log, not from the subject of the meeting.',
       'Every answer names what the Mission can do, who decides, and how long the decision takes.',
       'The platform takes ten minutes, and the rest of the evening is appointments and names.',
       'Nothing is promised from a platform that the Mission does not itself decide.'],
 outcome='At the next meeting the twelve answers are handed out at the door in both languages, '
         'the remarks run nine minutes, and the questions from the floor number four, all of them '
         'about matters the handout could not settle. Sixty-one names are taken for appointments, '
         'and the property question is answered in writing within a week with the names of two '
         'local lawyers and no advice on title.',
 outcome_q=[('What was handed out at the door?', 'the twelve answers in both languages'),
            ('How long were the remarks?', 'nine minutes'),
            ('How many questions came from the floor?', 'four'),
            ('How many names were taken?', 'sixty-one'),
            ('How was the property question answered?', 'in writing, with two lawyers’ names and no advice on title')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write me something for the community meeting',
 task=['An Ambassador asked for remarks for a community meeting in a hired hall.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write me something for the community meeting.',
        'Two hundred people, Saturday.',
        'Warm, obviously.',
        'Reassure them about documents.',
        'Say we are here to help.',
        'Half an hour of material.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one asks for an assurance the Mission cannot give.',
 asked=['Something warm', 'Reassurance about documents', 'Half an hour'],
 back=['900 words', '3 sentences beginning we will ensure', '0 of the 12 real questions answered'],
 gap='Nobody supplied the enquiry log, or said that the Mission does not decide most of these questions.',
 back_cap='Half an hour of warmth for a hall that came with four hundred individual cases.',
 back_note='Reassure them about documents cannot be done honestly from this platform, because '
           'the Mission forwards and chases documents and a ministry decides them; the register '
           'will supply the reassurance anyway.',
 diagnosis=[('“reassure them about documents”', 'hidden assumption'),
            ('“we are here to help”', 'hidden assumption'),
            ('“something”', 'undefined done'),
            ('“warm, obviously”', 'undefined done'),
            ('“half an hour of material”', 'unbounded quantity'),
            ('“two hundred people”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that the twelve real questions are answered in writing.',
 scaffold=['what the preparation must achieve',
           'which meeting, and where individual cases go',
           'the enquiry log and the note of who decides',
           'the questions, counts, decider, duration and the forbidden phrase',
           'what is printed and cleared, and by when',
           'what the answer says where the decision is elsewhere'],
 bank=['Purpose: so that the questions the hall will ask are answered in writing before anybody asks them',
       'Scope: the meeting of … ; individual cases are dealt with at the follow-up surgery',
       'Inputs: … months of the Mission’s enquiry log and the consular note of who decides each question',
       'Criteria: the … recurring questions with counts; what we can do, who decides, how long; no sentence beginning we will ensure; both languages',
       'Done: the handout printed by … and … minutes of remarks cleared',
       'Fallback: where a question is decided elsewhere, the answer names the decider and offers a written reply within … '],
 check=['Is the enquiry log an input?',
        'Does every answer name the decider?',
        'Is the platform limited to ten minutes?',
        'Is we will ensure forbidden?'],
 model=['so that the twelve questions the hall will ask are answered in writing before anybody asks them',
        'the meeting of 18 May in Ostport; individual cases are dealt with at the follow-up surgery',
        'six months of the Mission’s enquiry log and the consular section’s note of who decides each question',
        'the 12 recurring questions with counts; for each, what the Mission can do, who decides, how long it takes; no sentence beginning we will ensure; both languages',
        'the handout printed by 16:00 on 16 May and 10 minutes of remarks cleared with the Ambassador',
        'where a question is decided elsewhere, the answer names the decider and offers a written reply within 10 working days'],
 cost='3 promises in 900 words, and 12 answers that were already in the log and were never '
      'printed.'),

feet=dict(
 title='On Your Feet · A man in the fourth row says you promised this last year',
 setting=[
  'You are forty minutes into the questions. A man in the fourth row stands and says that at '
  'last year’s meeting the Mission promised that documents issued abroad would be recognised, '
  'that he acted on that, and that his file has been refused.',
  'You were not at last year’s meeting. You do not know what was said, you cannot see the file, '
  'and two hundred people are listening to how you answer a man who says he was misled.'],
 ladder=[('You promised this last year', 'the undertaking you cannot verify'),
         ('So the Mission lied to us', 'the word you must not accept or ignore'),
         ('What are you going to do about my file?', 'the case you cannot decide in a hall')],
 cap='Three turns in a hall of two hundred and ten, with a refused file in his hand.',
 turns=[('Turn 1 · A man in the fourth row', 'At last year’s meeting the Mission promised that documents issued abroad would be recognised.'),
        ('Turn 2 · A man in the fourth row', 'So the Mission lied to us.'),
        ('Turn 3 · A man in the fourth row', 'What are you going to do about my file?')],
 holds=['I was not here last year and I am not going to dispute what you were told; I will find out.',
        'If you were given an assurance of that kind, it should not have been given, and I am sorry it was.',
        'I will not use the word lied, and I am not asking you to withdraw it either.',
        'What I can tell you now is that the Mission forwards and chases these files, and the ministry decides them.',
        'I cannot look at your file in this hall, and I would not want to discuss it in front of two hundred people.',
        'My consul will take your name tonight and I will write to you myself within ten working days, whatever the answer is.'],
 redline='You must not deny what was said last year, you must not repeat or accept the word '
         'lied, and you must not promise a result on his file. Do not discuss an individual '
         'case from the platform.',
 score=['Admitted not knowing what was said last year.',
        'Said plainly that such an assurance should not have been given.',
        'Declined the loaded word without correcting him.',
        'Stated the true division of authority.',
        'Moved the case off the platform with a name and a date.'],
 a=[('What do you admit?', 'that you were not there and do not know'),
    ('What do you concede?', 'that such an assurance should not have been given'),
    ('What do you do with the word lied?', 'decline to use it, without arguing'),
    ('What do you state?', 'that the Mission forwards and the ministry decides'),
    ('Why not discuss the file?', 'it is an individual case in front of two hundred people'),
    ('What do you promise?', 'a letter from you within ten working days')]),

rev_fig=figs.split('A COMMUNITY MEETING',
                   'Prepare',
                   ['the twelve recurring questions',
                    'who decides each one',
                    'how long each takes',
                    'a handout in both languages'],
                   'Do not prepare',
                   ['thirty minutes of remarks',
                    'assurances about recognition',
                    'anything beginning we will ensure',
                    'answers to individual cases']),
rev_fig_cap='Ten minutes on the platform, twelve answers at the door, and the evening for names.',
rev=dict(
 read=[('How many people came to the hall?',
        ['two hundred and ten', 'twelve', 'four hundred', 'sixty'], 0),
       ('How many questions were asked aloud?',
        ['twelve', 'four', 'twenty', 'none'], 0),
       ('How many of them were new to the Mission?',
        ['none', 'all', 'three', 'eleven'], 0),
       ('How many sentences promised too much?',
        ['three', 'one', 'nine', 'none'], 0)],
 listen_text='Group six months of enquiries into the twelve questions that recur, with a count '
             'against each. For every one, give what the Mission can do, who decides, and how '
             'long it takes. Ask for no opening remarks and nothing beginning we will ensure.',
 listen=[('Group six months of enquiries into the twelve questions that ____________.', 'recur'),
         ('With a ____________ against each.', 'count'),
         ('Give what the Mission can do and who ____________.', 'decides'),
         ('And nothing beginning we will ____________.', 'ensure')],
 speak=['Make nine sentences using we, one and your organisation’s name as subjects.',
        'Then refuse four times to give an assurance, saying what you will do instead.'],
 write='Write a six-line tasking for a community meeting.',
 vocab=[('Individual appointments after a meeting are a follow-up ____________.', 'surgery'),
        ('An undertaking one has no authority to give is a promise not to ____________.', 'make'),
        ('A question recorded for a later written answer is a question taken ____________.', 'away'),
        ('A citizen who intends to go back to live is a ____________ national.', 'returning')],
 gram=[('The ____________ forwards files and does not decide them.', 'Mission'),
       ('____________ hears this question at every meeting.', 'One'),
       ('____________ are all waiting for the same decision.', 'We'),
       ('The ____________ was informed of the decision in April.', 'Mission')]),

found=['Prepare a community meeting from your own enquiry log, not from its subject.',
       'Name who decides, and how long it takes, in every answer.',
       'Hand the twelve answers in at the door and speak for ten minutes.',
       'Never promise from a platform what another authority decides.'],
end_line='It writes warmth easily. Your log is the only brief the hall will recognise.',
end_next='Next: Speaking Before You Know')
