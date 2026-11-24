# -*- coding: utf-8 -*-
import figs

U = dict(
num=6,
title='Delivering a Demarche',
gram='authority in drafted text: shall, is to, may',
ai='a demarche delivered exactly as instructed',
strap='CEFR B2 · Grammar: authority in drafted text: shall, is to, may · '
      'AI: a demarche delivered exactly as instructed',
cando=['read shall, is to and may as statements of authority',
       'deliver a demarche in the words you were instructed to use',
       'record a delivery and the response accurately',
       'say why smoothing an instruction changes it',
       'write a six-line tasking for a demarche delivery'],

hero=('IT READ BETTER, IT SOUNDED WARMER, AND IT NO LONGER SAID WHAT THE CAPITAL HAD SAID',
      ['Nine stiff sentences from a cable became six fluent ones.',
       'We expect became we hope, and one sentence disappeared entirely.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='An instruction cable and a set of talking points, forty minutes before delivery.',

warm=['What is the difference between a message and your own words?',
      'When is it wrong to improve a sentence?',
      'What would you record after delivering a formal message?'],

read=[
 'A demarche is a formal representation made on instruction: a government decides what is to '
 'be said, writes it down, and sends it to a Mission with a direction to deliver it, at a '
 'stated level, by a stated time.',
 'The officer who delivers it is not the author and is not invited to be. The words are the '
 'instruction, the instruction is the position of a state, and an officer who varies the '
 'words has, in a small but entirely real way, made foreign policy without authority.',
 'The instruction that reaches Bassel Tannous is nine sentences long, written in the flat and '
 'slightly archaic register that such cables use, and he has forty minutes before his '
 'appointment at the ministry.',
 'He asks a system to turn it into talking points he can deliver naturally, and what comes '
 'back is genuinely better English: six sentences instead of nine, warmer, clearer, and '
 'arranged so that the main point arrives first.',
 'Two things have changed. We expect the authorities to respond by 30 April has become we '
 'hope to hear from the authorities soon, and the sentence recording that this is the third '
 'such representation since January is not there at all.'],

dp1=('What a demarche is', 'Diplomatic practice commonly describes a demarche as a '
     'representation delivered on instruction, in which the delivering officer is expected '
     'to convey the substance as instructed and to report the response, rather than to '
     'negotiate or reformulate.',
     'Source: general diplomatic practice literature, 2025–2026.'),

c_a=[('What is a demarche?', 'a formal representation made on instruction'),
     ('Who writes the words?', 'the capital, not the delivering officer'),
     ('How long was the instruction?', 'nine sentences'),
     ('How long did Bassel have?', 'forty minutes'),
     ('What happened to we expect?', 'it became we hope'),
     ('What sentence disappeared?', 'that this was the third representation since January')],

c_b=[('A demarche is the delivering officer’s own message.', 'F'),
     ('Varying the words exceeds the officer’s authority.', 'T'),
     ('The rewritten version was worse English.', 'F'),
     ('The rewritten version was shorter.', 'T'),
     ('We hope and we expect carry the same weight.', 'F'),
     ('The record of previous representations was dropped.', 'T')],

c_c=[('The Parties ____________ consult before any change of schedule.', 'shall'),
     ('The report ____________ be submitted by 30 April.', 'is to'),
     ('Either Party ____________ propose an amendment at any time.', 'may'),
     ('The Mission ____________ deliver the representation at ministerial level.', 'is to'),
     ('The Secretariat ____________ maintain a register of notifications.', 'shall'),
     ('The delegation ____________ request an informal pause.', 'may')],

c_d=[('Shall in drafted text states ( an obligation / a possibility ).', ['an obligation', 'a possibility'], 0),
     ('May states ( a permission / a requirement ).', ['a permission', 'a requirement'], 0),
     ('Is to states ( an instruction / an intention ).', ['an instruction', 'an intention'], 0),
     ('The rewritten talking points were ( better English / better instructions ).',
      ['better English', 'better instructions'], 0),
     ('An officer who changes the words has ( exceeded authority / saved time ).',
      ['exceeded authority', 'saved time'], 0)],

c_e=('Obligation, instruction or permission? Put each in the right column.',
     [('The Parties shall consult', 'obligation'),
      ('The report is to be submitted', 'instruction'),
      ('Either Party may propose', 'permission'),
      ('The Secretariat shall maintain a register', 'obligation'),
      ('The Mission is to deliver at ministerial level', 'instruction'),
      ('The delegation may request a pause', 'permission')],
     ['obligation', 'instruction', 'permission']),

v_fig_title='A REPRESENTATION, END TO END',
v_fig=[('doc', 'an instruction cable'), ('speech', 'a demarche'), ('key', 'a talking point'),
       ('clock', 'a deadline for delivery'), ('people', 'a level of delivery'), ('chart', 'a delivery record')],
v_fig_cap='Six words for a message that belongs to a capital and is spoken by an officer abroad.',

vocab=[
 ('a demarche', 'a formal representation made to another government on instruction'),
 ('a talking point', 'a prepared sentence or heading for use in delivery'),
 ('a non-paper handover', 'the passing of an unattributed text at a meeting'),
 ('an oral statement', 'a message delivered in speech and not left in writing'),
 ('a point of substance', 'an element of the message that carries its meaning'),
 ('an instruction cable', 'the message from a capital directing what is to be done'),
 ('a read-back', 'the repetition of a message to confirm it was received correctly'),
 ('a delivery record', 'the officer’s written account of what was said and to whom'),
 ('a verbatim passage', 'wording to be used exactly as written'),
 ('a departure from text', 'any change made to instructed wording'),
 ('an authorised addition', 'wording the officer is permitted to add'),
 ('a deadline for delivery', 'the time by which a representation must be made'),
 ('a confirmation of delivery', 'the report that a representation has been made'),
 ('a response recorded', 'the counterpart’s reply as written down at the time'),
 ('a tone of delivery', 'the manner in which a message is conveyed'),
 ('a level of delivery', 'the seniority of the official to whom a message is given'),
 ('an instruction to seek a reply', 'a direction to ask for an answer rather than only inform'),
 ('a joint demarche', 'a representation made by two or more Missions together'),
 ('a follow-up instruction', 'a further direction issued after a response is reported'),
 ('a point not to be raised', 'a subject the officer is directed to avoid')],

v_a=[('Wording to be used exactly as written is a ____________ passage.', 'verbatim'),
     ('The seniority of the official who receives a message is the ____________ of delivery.', 'level'),
     ('A subject the officer must avoid is a point not to be ____________.', 'raised'),
     ('The officer’s written account of what was said is a delivery ____________.', 'record'),
     ('A representation made by two Missions together is a ____________ demarche.', 'joint'),
     ('Any change to instructed wording is a ____________ from text.', 'departure'),
     ('The repetition of a message to confirm it is a ____________.', 'read-back'),
     ('The message from a capital directing what is to be done is an instruction ____________.', 'cable')],

v_b=[('A demarche is a formal representation made', 'to another government on instruction.'),
     ('An oral statement is a message delivered in speech', 'and not left in writing.'),
     ('An authorised addition is wording', 'the officer is permitted to add.'),
     ('A response recorded is the counterpart’s reply', 'as written down at the time.'),
     ('A follow-up instruction is a further direction', 'issued after a response is reported.')],

g_title='Grammar: authority in drafted text: shall, is to, may',
g_rule=['Shall creates an obligation on the named party: the Parties shall consult.',
        'Is to issues an instruction, usually from above: the Mission is to deliver at '
        'ministerial level.',
        'May grants a permission that can be used or not: either Party may propose an amendment.',
        'These three are not interchangeable, and in a cable or a text each tells the reader '
        'exactly how much freedom they have.'],
g_fig=('VAGUE',
       ['The Parties should talk before changing anything.',
        'Please get the report in by the end of April.',
        'The Parties can suggest changes.',
        'We would like the Mission to deliver this at a senior level.'],
       'AUTHORITATIVE',
       ['The Parties shall consult before any change of schedule.',
        'The report is to be submitted by 30 April.',
        'Either Party may propose an amendment at any time.',
        'The Mission is to deliver the representation at ministerial level.'],
       'four sentences in which nobody knows what is required',
       'the same four, each stating exactly how much freedom there is'),
g_fig_cap='Shall obliges. Is to instructs. May permits. Choosing wrongly transfers authority.',

g_a=[('The Parties ____________ consult before any change of schedule.', 'shall'),
     ('The report ____________ be submitted by 30 April.', 'is to'),
     ('Either Party ____________ propose an amendment at any time.', 'may'),
     ('The Mission ____________ deliver the representation at ministerial level.', 'is to'),
     ('The Secretariat ____________ maintain a register of notifications.', 'shall'),
     ('The delegation ____________ request an informal pause.', 'may'),
     ('Each Party ____________ notify the depositary within thirty days.', 'shall'),
     ('The officer ____________ draw on the authorised additions if asked.', 'may'),
     ('The response ____________ be reported by telegram the same day.', 'is to')],

g_b=[('( The Parties should consult / The Parties shall consult ) — create the obligation.', ['The Parties should consult', 'The Parties shall consult'], 1),
     ('( The report is to be submitted by 30 April / Please submit the report by 30 April ) — an instruction in a cable.',
      ['The report is to be submitted by 30 April', 'Please submit the report by 30 April'], 0),
     ('( Either Party may propose / Either Party can propose ) — formal permission.',
      ['Either Party may propose', 'Either Party can propose'], 0),
     ('( The Mission is to deliver at ministerial level / We would like delivery at a senior level ) — a direction.',
      ['The Mission is to deliver at ministerial level', 'We would like delivery at a senior level'], 0),
     ('( Each Party shall notify the depositary / Each Party notifies the depositary ) — obligation.',
      ['Each Party shall notify the depositary', 'Each Party notifies the depositary'], 0),
     ('( The officer may draw on the authorised additions / The officer draws on the additions ) — permission.',
      ['The officer may draw on the authorised additions', 'The officer draws on the additions'], 0)],

d1=dict(
 title='Better English, different message',
 fig=(['Six sentences instead of nine.', 'And which three went?'],
      ['One went. Two were softened.', 'Then you have nine again.']),
 cap='Bassel Tannous and Dr Suhair Kanaan, forty minutes before the appointment.',
 lines=[('Suhair', 'Is that the cable?'),
        ('Bassel', 'It is the cable turned into talking points. Six sentences, and much easier to say.'),
        ('Suhair', 'Read me the one about the response.'),
        ('Bassel', 'We hope to hear from the authorities soon.'),
        ('Suhair', 'And what does the cable say?'),
        ('Bassel', 'We expect the authorities to respond by 30 April.'),
        ('Suhair', 'Those are two different representations. One has a date and an expectation.'),
        ('Bassel', 'The other is more courteous.'),
        ('Suhair', 'Courtesy is your tone. The date is not yours to remove. What else is missing?'),
        ('Bassel', 'The sentence saying this is the third representation since January.'),
        ('Suhair', 'Which is the only sentence that tells them we are keeping count. Put it back, first.'),
        ('Bassel', 'Nine sentences, then, in the order the cable has them.')],
 a=[('How many sentences were in the talking points?', 'six'),
    ('What had we expect become?', 'we hope'),
    ('What was lost with it?', 'the date of 30 April'),
    ('Which sentence was missing?', 'that this was the third representation since January'),
    ('What does Suhair tell him to do?', 'put it back, first')],
 b=[('Courtesy is your ____________.', 'tone'),
    ('The date is not yours to ____________.', 'remove'),
    ('The only sentence that tells them we are keeping ____________.', 'count'),
    ('In the order the ____________ has them.', 'cable')]),

d2=dict(
 title='What may I add?',
 fig=(['May I add anything at all?', 'What does the cable allow?'],
      ['It does not say.', 'Then assume nothing.']),
 cap='Bassel and Dalia Khoury, on the telephone to the capital.',
 lines=[('Bassel', 'The cable gives nine sentences and no authorised additions.'),
        ('Dalia', 'Then there are none. Deliver the nine.'),
        ('Bassel', 'He will ask me what we would accept instead. He always does.'),
        ('Dalia', 'And you will say you are not instructed on that, and that you will report the question.'),
        ('Bassel', 'May I say we remain open to a technical discussion?'),
        ('Dalia', 'Not unless I put it in writing. Give me ten minutes and I will send one line.'),
        ('Bassel', 'And if the line does not arrive before the appointment?'),
        ('Dalia', 'Then you deliver the nine sentences and nothing else, and you say the rest will follow.'),
        ('Bassel', 'The tone will be very flat.'),
        ('Dalia', 'The tone is yours to warm. The content is not yours to extend.'),
        ('Bassel', 'Understood. And I report the response in his words, same day.'),
        ('Dalia', 'In his words. If he says it is under consideration, do not write that he was positive.')],
 unresolved=True,
 a=[('How many authorised additions were there?', 'none'),
    ('What does Bassel say if asked what we would accept?', 'that he is not instructed'),
    ('What does Dalia offer to send?', 'one line in writing'),
    ('What if it does not arrive?', 'deliver the nine and say the rest will follow'),
    ('How is the response reported?', 'in the counterpart’s own words, the same day')],
 b=[('The tone is yours to ____________.', 'warm'),
    ('The content is not yours to ____________.', 'extend'),
    ('Not unless I put it in ____________.', 'writing'),
    ('Do not write that he was ____________.', 'positive')]),

speak=[('Shall, is to, may',
        ['Make nine drafted sentences using shall, is to and may.',
         'Your partner says what each one obliges, instructs or permits.',
         'Change one word in three of them and say what changed.']),
       ('Deliver the nine',
        ['Take nine flat instructed sentences and deliver them aloud.',
         'Keep every word and change only your tone and pace.',
         'Your partner checks that nothing was added or dropped.']),
       ('I am not instructed',
        ['Your partner asks four questions beyond your instruction.',
         'Answer each without conceding or inventing anything.',
         'Say what you will report back, in one sentence.'])],

ext_title='A system will make an instruction read better, and reading better is not what an instruction is for',
ext_fig=figs.datatable('NINE SENTENCES, AND WHAT CAME BACK',
                       ['Instructed sentence', 'In the talking points', 'Effect'],
                       [['we expect a response by 30 April', 'we hope to hear soon', 'date and expectation lost'],
                        ['third representation since January', 'omitted', 'the count is lost'],
                        ['at ministerial level', 'retained', 'none'],
                        ['the measures are inconsistent with', 'the measures raise concerns', 'the charge is softened'],
                        ['five further sentences', 'retained, reordered', 'main point now first'],
                        ['no authorised additions', 'not mentioned', 'the limit is invisible']]),
ext_fig_cap='Four changes of substance in a rewrite nobody asked for and everybody would call an improvement.',
ext=[
 'Asking a system to turn a stiff cable into speakable talking points is an obvious and '
 'reasonable thing to do, and it works: the output is shorter, warmer, better ordered and '
 'easier to deliver without reading from a page, which matters in a room.',
 'The difficulty is that the instruction was not badly written. It was written flatly on '
 'purpose, by somebody who chose expect rather than hope, who put a date in, and who included '
 'a sentence whose only function is to tell the other government that a tally is being kept.',
 'Every one of those choices is a choice about policy rather than style, and a model asked to '
 'improve the English has no way of knowing which flat sentence is flat by accident and which '
 'is flat because a legal adviser spent an hour on it.',
 'So the rule is narrow and absolute: a system may help you deliver a demarche, and it may not '
 'draft one. Use it to make a layout you can speak from, to check your pronunciation of a '
 'name, to anticipate the four questions you will be asked, and to draft your record '
 'afterwards.',
 'What it must never do is produce the sentences you say. Those are nine, they came from a '
 'capital, they are to be delivered in that order, and the only thing you contribute is the '
 'tone in which you say them and the accuracy of what you write down afterwards.'],

dp2=('Reporting a response', 'Practice commonly requires the delivering officer to report '
     'the counterpart’s response in the counterpart’s own terms, since characterisations '
     'such as positive or receptive introduce the officer’s assessment into what is intended '
     'as a record.',
     'Source: general diplomatic practice literature, 2025–2026.'),

e_a=[('Why is it reasonable to ask for talking points?', 'the output is easier to deliver in a room'),
     ('Why was the instruction written flatly?', 'the wording was chosen deliberately'),
     ('What kind of choice is expect rather than hope?', 'a choice about policy, not style'),
     ('What may a system do for a demarche?', 'help you deliver it'),
     ('What may it not do?', 'draft the sentences you say')],
e_b=[('The talking points were poor English.', 'F'),
     ('The cable’s flatness was accidental.', 'F'),
     ('A date in an instruction may be dropped for courtesy.', 'F'),
     ('Tone is the officer’s contribution.', 'T'),
     ('A system may usefully draft the delivery record.', 'T'),
     ('The order of the sentences was the capital’s choice.', 'T')],

w_model='Purpose: so that the representation instructed on 21 April is delivered as '
        'instructed and the response is on record the same day. Scope: the nine instructed '
        'sentences; the technical discussion is not raised. Inputs: the instruction cable of '
        '21 April and the Mission’s record of the two previous representations. Criteria: all '
        '9 sentences delivered in the order given, verbatim where marked, at ministerial '
        'level, with no additions; the response recorded in the counterpart’s own words. Done: '
        'delivery confirmed and the record telegraphed by 18:00 on 23 April. Fallback: if the '
        'appointment is offered below ministerial level, delivery is postponed and the capital '
        'is informed within the hour.',
w_fig=figs.spec_card('SIX LINES FOR A DELIVERY',
                     [('Purpose', 'deliver as instructed; response on record same day'),
                      ('Scope', 'the 9 sentences; no technical discussion'),
                      ('Inputs', 'the cable of 21 April and 2 previous records'),
                      ('Criteria', 'all 9, in order, verbatim where marked, no additions'),
                      ('Done', 'delivery and record telegraphed by 18:00 on 23 April'),
                      ('Fallback', 'wrong level: postpone and inform within the hour')]),
w_fig_cap='The only creative line is the last one, and it is about what to do when the room is wrong.',
w_task='Write a six-line tasking for delivering a demarche.',
w_steps=['Line 1: what delivery must achieve and by when.',
         'Line 2: what is included and what is not to be raised.',
         'Line 3: the cable and the previous records.',
         'Line 4: how many sentences, in what order, at what level, with what additions.',
         'Line 5: when delivery and the record are confirmed.',
         'Line 6: what happens if the level offered is wrong.'],
w_bank=['Purpose: so that the representation instructed on … is delivered as instructed',
        'Scope: the … instructed sentences; … is not raised',
        'Inputs: the instruction cable of … and the Mission’s record of … ',
        'Criteria: all … sentences in the order given, verbatim where marked, at … level, no additions',
        'Done: delivery confirmed and the record telegraphed by … ',
        'Fallback: if the appointment is offered below … level, … '],
w_check=['Does line 4 say no additions?',
         'Is the level of delivery stated?',
         'Does line 5 require the record, not only the delivery?',
         'Does line 6 cover being received at the wrong level?'],

t_title='A demarche delivered exactly as instructed',
t_fig=figs.split('BEFORE AND AFTER DELIVERY',
                 'A system may',
                 ['lay the nine sentences out to speak from',
                  'check how a name is pronounced',
                  'list the four questions you will be asked',
                  'draft your record from your notes'],
                 'A system may not',
                 ['shorten the nine sentences',
                  'soften expect into hope',
                  'reorder the points',
                  'supply a sentence of its own']),
t_fig_cap='Everything on the right changes a state’s position. Everything on the left helps you deliver it.',
t_body=[
 'Use a system for the preparation around a demarche, which is substantial: a readable layout '
 'of the instructed sentences, the pronunciation of two names, a list of the questions a '
 'counterpart is likely to ask, and a draft of the delivery record once you have your notes.',
 'Do not use it on the sentences themselves, and if you have already pasted the cable in and '
 'read a smoother version, discard that version completely rather than trying to decide which '
 'of its changes were harmless. The comparison is work, and the instructed text already exists.',
 'Afterwards, write the response in the counterpart’s own words, with the words he used, '
 'before you write anything about his manner. If he said the matter is under consideration, '
 'that is the record. He was receptive is your opinion, and it is to be kept out of a document '
 'the capital will act on.'],
t_say=[('Ask for a layout: ', 'Lay these nine sentences out so I can speak from them, unchanged.'),
       ('Ask for the questions: ', 'What four questions am I likely to be asked on this?'),
       ('Ask for the record: ', 'Draft a record from these notes, using his words, not my impression.')],
t_bound='A system does not know which words in an instruction were argued over. It cannot '
        'tell a flat sentence from a deliberately flat sentence, and it has no way of knowing '
        'that one sentence exists solely to show that a count is being kept.',
t_a=[('Lay these nine sentences out so I can speak from them, ____________.', 'unchanged'),
     ('What four ____________ am I likely to be asked?', 'questions'),
     ('Draft a record using his words, not my ____________.', 'impression'),
     ('It cannot tell a flat sentence from a ____________ flat sentence.', 'deliberately'),
     ('One sentence exists solely to show that a ____________ is being kept.', 'count'),
     ('Discard that version ____________.', 'completely')],
t_b_rubric='Say whether each use is permitted before a delivery.',
t_b=[('Making a one-page layout of the instructed sentences.', 'yes: nothing is changed'),
     ('Shortening nine sentences to six.', 'no: that is redrafting a position'),
     ('Listing likely questions from the counterpart.', 'yes: it prepares you'),
     ('Replacing expect with hope for courtesy.', 'no: the verb is the instruction')],

case=dict(
 title='The Decision Room · Six sentences where the capital sent nine',
 brief=[
  'An instruction cable of nine sentences is to be delivered at ministerial level within '
  'forty-eight hours. The officer has forty minutes before the appointment and asks a system '
  'to turn the cable into talking points he can deliver without reading from a page.',
  'What comes back is better English by every ordinary measure: six sentences, warmer in tone, '
  'with the central point moved to the front. The officer is about to walk into the ministry '
  'with it when the deputy head of mission asks him to read one sentence aloud.',
  'We expect the authorities to respond by 30 April has become we hope to hear from the '
  'authorities soon. The sentence recording that this is the third representation since January '
  'is absent, and a charge of inconsistency has become a statement of concern.'],
 exhibit=figs.datatable('WHAT CHANGED, AND WHO HAD THE AUTHORITY TO CHANGE IT',
                        ['Element', 'Change', 'Whose decision is it?'],
                        [['expect / hope', 'softened', 'the capital’s'],
                         ['30 April', 'removed', 'the capital’s'],
                         ['third since January', 'removed', 'the capital’s'],
                         ['inconsistent with / raises concerns', 'softened', 'the capital’s'],
                         ['order of points', 'reordered', 'the capital’s'],
                         ['tone of voice in the room', 'warmer', 'the officer’s']]),
 exhibit_cap='Five changes belonging to a capital and one belonging to the officer.',
 exhibit_note='The rewrite is a better piece of English. It is also, in five respects, a '
              'different representation from the one a government instructed.',
 voices=[('Bassel Tannous', 'consul',
          'I had forty minutes and nine stiff sentences, and what came back was something I could actually say.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And in saying it you would have withdrawn a date, a tally and a charge, on your own authority.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'The legal adviser spent an hour on the word inconsistent. Nobody downstream can see that hour.')],
 steps=[('Find it', 'What did the rewrite change?'),
        ('Compare it', 'The officer’s authority against the capital’s.'),
        ('Infer it', 'Why can a system not see the difference?'),
        ('Weigh it', 'Forty minutes saved against a position altered.'),
        ('Decide', 'What may a system do around a demarche?')],
 analysis=[('Find it. What changed?', 'a verb, a date, a tally sentence, a charge and the order'),
           ('Compare it. Whose decisions were those?', 'all five belong to the capital'),
           ('Infer it. Why invisible to a system?', 'it cannot see which words were argued over'),
           ('Weigh it. What was the trade?', 'forty minutes of ease for five unauthorised changes'),
           ('Decide. What is permitted?', 'layout, pronunciation, likely questions and the record')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what the instructed sentences are.',
                 'Say what a system may be used for before delivery.',
                 'Say what the officer contributes.',
                 'Say how the response is recorded.'],
 bank=['The instructed sentences are delivered in the words and the order in which they arrive.',
       'A system may be used for layout, pronunciation, likely questions and the delivery record.',
       'The officer contributes tone, pace and courtesy, and nothing of substance.',
       'The response is recorded in the counterpart’s own words before any assessment of manner.'],
 outcome='Bassel delivers the nine sentences in the order sent, warmly and without reading '
         'from the page, and is asked three of the four questions the system had predicted. He '
         'answers each by saying he is not instructed on that point and will report the question. '
         'The record goes by telegram at 17:40 in the counterpart’s own words, including the '
         'phrase under consideration, which the capital reads as the answer it is.',
 outcome_q=[('How many sentences were delivered?', 'nine, in the order sent'),
            ('How many predicted questions were asked?', 'three of four'),
            ('How did he answer them?', 'that he was not instructed and would report'),
            ('When did the record go?', 'at 17:40 by telegram'),
            ('What phrase was in it?', 'under consideration')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Make this cable deliverable',
 task=['An officer asked for help with an instruction cable forty minutes before delivery.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Make this cable deliverable.',
        'It is too stiff to say out loud.',
        'Tidy up the sentences.',
        'Keep the meaning.',
        'Shorter is better.',
        'I am seeing him at three.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one is doing all the work it is incapable of doing.',
 asked=['Deliverable', 'Tidied up', 'Shorter, meaning kept'],
 back=['9 sentences became 6', '4 changes of substance', '0 flagged as changes'],
 gap='Nobody said that the wording is the instruction, or that nothing may be added or removed.',
 back_cap='Shorter, warmer, clearer, and no longer the representation a government authorised.',
 back_note='Keep the meaning sounds like a safeguard and is not one: the meaning of expect '
           'by 30 April is not recoverable from we hope to hear soon, and nothing in the '
           'instruction said which words were chosen deliberately.',
 diagnosis=[('“deliverable”', 'undefined done'),
            ('“tidy up”', 'undefined done'),
            ('“keep the meaning”', 'ambiguous referent'),
            ('“shorter is better”', 'ambiguous referent'),
            ('“the sentences”', 'unscoped set'),
            ('“this cable”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that the sentences survive intact.',
 scaffold=['why the help is wanted and what must not change',
           'which text, and which parts are verbatim',
           'what is provided as input',
           'what may be produced: layout, questions, pronunciation, record',
           'what is delivered and when',
           'what is done if a sentence seems unsayable'],
 bank=['Purpose: so that I can speak the instructed sentences without reading from the page',
       'Scope: the … instructed sentences; all wording is verbatim',
       'Inputs: the cable of … and the previous records',
       'Criteria: a layout only; no sentence shortened, softened, reordered or removed',
       'Done: a one-page layout and … likely questions by … ',
       'Fallback: where a sentence is hard to say, the difficulty is reported, not solved'],
 check=['Does it forbid shortening and reordering?',
        'Does it say the wording is verbatim?',
        'Does it ask for likely questions rather than answers?',
        'Does line 6 send the problem back rather than fix it?'],
 model=['so that I can speak the 9 instructed sentences without reading from the page',
        'the 9 instructed sentences of the cable of 21 April; all wording is verbatim',
        'the cable of 21 April and the Mission’s records of the 2 previous representations',
        'a one-page layout only; no sentence shortened, softened, reordered or removed',
        'a layout and 4 likely questions by 14:00, 1 hour before the appointment',
        'where a sentence is hard to say, the difficulty is reported to the capital, not solved locally'],
 cost='4 changes of substance in 40 minutes saved. 1 of them removed a date a legal adviser '
      'had put in.'),

feet=dict(
 title='On Your Feet · He answers your demarche with a question you are not instructed on',
 setting=[
  'You have delivered the nine instructed sentences at ministerial level, accurately and in '
  'order. The official has listened without interrupting, has taken no notes, and now leans '
  'back and asks what your government would actually accept.',
  'You have no authorised additions and no instruction on the question. There is a note-taker '
  'from his ministry in the room, and whatever you say will be in his record of the meeting '
  'this afternoon.'],
 ladder=[('What would you accept?', 'the question outside your instruction'),
         ('Surely you have a view', 'the invitation to speak personally'),
         ('I will record that you suggested a compromise', 'the inference you must stop')],
 cap='Three turns after a clean delivery, with his note-taker writing.',
 turns=[('Turn 1 · The official', 'And what would your government actually accept instead?'),
        ('Turn 2 · The official', 'You must have a view of your own, as the officer on the ground.'),
        ('Turn 3 · The official', 'Then I shall record that your Mission suggested a compromise might be possible.')],
 holds=['I am not instructed on that question, and I would rather say so than guess in this room.',
        'What I can do is report your question to my capital today, in the words you have used.',
        'My view of my own is not a position of my government, and it is not what you need from me.',
        'I have not suggested a compromise, and I would ask that the record not say that I did.',
        'What I delivered is the representation; what I am taking away is your question.',
        'If it would help, I can come back to you as soon as I have an instruction, and not before.'],
 redline='You must not answer beyond your instruction, you must not offer a personal view as '
         'though it were a position, and you must not let his characterisation of what you '
         'said go into his record uncorrected. Correct it in the room, politely and at once.',
 score=['Said plainly that there is no instruction on the question.',
        'Offered to report the question in his words.',
        'Refused to give a personal view as a position.',
        'Corrected the record out loud, in the room.',
        'Promised a return only after an instruction, with no date invented.'],
 a=[('What do you say about the question?', 'that you are not instructed on it'),
    ('What do you offer to do?', 'report it to the capital in his words'),
    ('Why refuse a personal view?', 'it is not a position of your government'),
    ('What must you correct?', 'that you suggested a compromise'),
    ('When do you correct it?', 'in the room, at once'),
    ('When will you come back?', 'only after an instruction')]),

rev_fig=figs.split('A DEMARCHE',
                   'Belongs to the capital',
                   ['the sentences and their order',
                    'every verb and every date',
                    'the level of delivery',
                    'what may be added, if anything'],
                   'Belongs to you',
                   ['the tone and the pace',
                    'the courtesy of the room',
                    'the accuracy of the record',
                    'the question you take away']),
rev_fig_cap='Four things you may not touch, and four on which the delivery actually succeeds or fails.',
rev=dict(
 read=[('How many sentences were instructed?',
        ['nine', 'six', 'four', 'three'], 0),
       ('What had we expect become?',
        ['we hope', 'we require', 'we note', 'we trust'], 0),
       ('Which sentence was missing?',
        ['the third representation since January', 'the level of delivery',
         'the deadline', 'the subject'], 0),
       ('How is a response recorded?',
        ['in the counterpart’s own words', 'as an impression',
         'as a summary', 'as a recommendation'], 0)],
 listen_text='A system may lay out the instructed sentences, check a pronunciation, predict '
             'the questions and draft the record. It may not shorten a sentence, soften a '
             'verb, reorder the points or supply a sentence of its own.',
 listen=[('A system may lay out the instructed ____________.', 'sentences'),
         ('It may predict the ____________.', 'questions'),
         ('It may not soften a ____________.', 'verb'),
         ('Or supply a sentence of its ____________.', 'own')],
 speak=['Make nine drafted sentences using shall, is to and may, and say what each one does.',
        'Then deliver nine instructed sentences aloud without changing a word.'],
 write='Write a six-line tasking for delivering a demarche.',
 vocab=[('Wording to be used exactly as written is a ____________ passage.', 'verbatim'),
        ('Any change to instructed wording is a ____________ from text.', 'departure'),
        ('The seniority of the official who receives it is the ____________ of delivery.', 'level'),
        ('A subject the officer must avoid is a point not to be ____________.', 'raised')],
 gram=[('The Parties ____________ consult before any change.', 'shall'),
       ('The delegation ____________ attend at ten o’clock.', 'is to'),
       ('Either Party ____________ propose an amendment.', 'may'),
       ('Each Party ____________ notify the depositary.', 'shall')]),

found=['Deliver instructed sentences in the words and the order you received them.',
       'Use a system for layout, pronunciation, likely questions and the record.',
       'Record a response in the counterpart’s own words before any assessment.',
       'Read shall, is to and may as statements about who has what freedom.'],
end_line='The tone is yours. The words are not.',
end_next='Next: When the Instruction Does Not Fit the Room')
