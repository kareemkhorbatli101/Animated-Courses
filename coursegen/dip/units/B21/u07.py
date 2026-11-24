# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='When the Instruction Does Not Fit the Room',
gram='reference and substitution across a text',
ai='the gap between the instruction and the room',
strap='CEFR B2 · Grammar: reference and substitution across a text · '
      'AI: the gap between the instruction and the room',
cando=['use this, that, such, the former and do so to refer accurately across a text',
       'identify which premises of an instruction no longer hold',
       'hold a position when the facts have moved under it',
       'say why a suggested reformulation is not an authorisation',
       'write a six-line tasking for checking an instruction against events'],

hero=('THE INSTRUCTION WAS WRITTEN ON MONDAY FOR A WORLD THAT ENDED ON WEDNESDAY MORNING',
      ['Four premises. Two of them stopped being true at eight o’clock.',
       'It offered him a new form of words. That was the one thing he could not use.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A meeting in Rhene at ten, and a decree published two hours earlier.',

warm=['What do you do when an instruction assumes something that is no longer true?',
      'Who decides whether a changed fact matters?',
      'What can you say in a room when you have no new instruction?'],

read=[
 'An instruction is written at a desk, two days before the meeting it governs, by somebody '
 'who knows the file extremely well and cannot know what will happen on the morning of the '
 'meeting itself.',
 'Hala Darwish has one such instruction. It directs her to press for a transitional period of '
 'twelve months, and it rests on four premises, of which the third is that the other '
 'administration has not yet published its implementing decree.',
 'At eight o’clock on Wednesday the decree is published. It is eleven pages long, it is in '
 'force on signature, and it provides for a transitional period of four months, which the '
 'instruction does not mention because on Monday there was nothing to mention.',
 'She has two hours. She puts the instruction and the decree side by side and asks a system '
 'which of the instruction’s premises no longer hold, and it answers precisely: the third has '
 'failed outright and the fourth is now doubtful, with the paragraph references for both.',
 'Then it offers her a reformulated negotiating line that takes account of the decree, which '
 'is well judged, plausible and the single thing she is not permitted to use, because nobody '
 'in her government has seen it.'],

dp1=('Premises and instructions', 'Practice commonly recognises that an instruction rests on '
     'an assessment of circumstances at the time of drafting, and that an officer who finds '
     'those circumstances materially changed is expected to report and seek further '
     'direction rather than to adapt the instruction locally.',
     'Source: general diplomatic practice literature, 2025–2026.'),

c_a=[('When is an instruction written?', 'at a desk, days before the meeting'),
     ('What does Hala’s instruction direct?', 'pressing for a twelve-month transitional period'),
     ('How many premises does it rest on?', 'four'),
     ('What happened at eight o’clock?', 'the decree was published'),
     ('What transitional period does the decree give?', 'four months'),
     ('Which premises failed?', 'the third outright and the fourth in doubt')],

c_b=[('The instruction mentioned the decree.', 'F'),
     ('The decree was in force on signature.', 'T'),
     ('The system identified the failed premises precisely.', 'T'),
     ('Hala may use the reformulated line.', 'F'),
     ('Her government has seen the reformulation.', 'F'),
     ('She had two hours before the meeting.', 'T')],

c_c=[('The decree was published on Wednesday. ____________ changed the third premise.', 'This'),
     ('We have two options. ____________ is a holding reply.', 'The former'),
     ('They asked us to amend the text. We cannot ____________.', 'do so'),
     ('In ____________ a case, the officer seeks new instructions.', 'such'),
     ('There were four premises; two of ____________ no longer hold.', 'them'),
     ('He proposed a shorter period. We rejected ____________ proposal.', 'that')],

c_d=[('This usually refers to ( something coming next / something just mentioned ).', ['something coming next', 'something just mentioned'], 1),
     ('The former refers to ( the first of two / the earlier time ).',
      ['the first of two', 'the earlier time'], 0),
     ('Do so substitutes for ( a verb phrase / a noun ).', ['a verb phrase', 'a noun'], 0),
     ('The system was right about ( the failed premises / what to say instead ).',
      ['the failed premises', 'what to say instead'], 0),
     ('A reformulated line is ( a suggestion / an authorisation ).',
      ['a suggestion', 'an authorisation'], 0)],

c_e=('Reference or substitution? Put each in the right column.',
     [('This changed the third premise', 'reference'),
      ('We cannot do so', 'substitution'),
      ('In such a case', 'reference'),
      ('The former is a holding reply', 'reference'),
      ('We rejected that proposal', 'reference'),
      ('They did too', 'substitution')],
     ['reference', 'substitution']),

v_fig_title='WHEN THE GROUND MOVES',
v_fig=[('clock', 'a flash telegram'), ('doc', 'a superseded instruction'), ('speech', 'a holding reply'),
       ('key', 'a reserved position'), ('people', 'an out-of-hours contact'), ('chart', 'an interim report')],
v_fig_cap='Six words for the hours between a fact changing and an instruction catching up.',

vocab=[
 ('a change of circumstances', 'a development that alters the basis of an instruction'),
 ('a superseded instruction', 'a direction overtaken by events or by a later one'),
 ('a holding reply', 'an answer that commits to nothing while an instruction is sought'),
 ('a request for new instructions', 'a message asking the capital to direct afresh'),
 ('a reserved position', 'a position expressly left open for later decision'),
 ('an interim report', 'a report sent before the full account is possible'),
 ('a flash telegram', 'a message carrying the highest urgency marking'),
 ('an out-of-hours contact', 'the person reachable when an office is closed'),
 ('a contingency line', 'wording prepared in advance for a situation that may arise'),
 ('a judgement call', 'a decision taken by an officer without specific direction'),
 ('a post-hoc approval', 'approval given after an action has been taken'),
 ('an overnight instruction', 'a direction arriving while the Mission is closed'),
 ('a revised mandate', 'an altered authority to negotiate'),
 ('an exceeded authority', 'action going beyond what an officer was permitted to do'),
 ('a disclaimed statement', 'a statement a government declines to stand behind'),
 ('a withdrawn remark', 'something said and then formally taken back'),
 ('a clarification sought', 'a question put to the capital about the meaning of a direction'),
 ('an urgency marking', 'the label showing how quickly a message must be handled'),
 ('a telephone clearance', 'permission obtained by telephone and confirmed later'),
 ('a deferred reply', 'an answer postponed to a stated later time')],

v_a=[('An answer that commits to nothing is a ____________ reply.', 'holding'),
     ('A message carrying the highest urgency is a ____________ telegram.', 'flash'),
     ('Wording prepared for a situation that may arise is a ____________ line.', 'contingency'),
     ('A direction overtaken by events is a ____________ instruction.', 'superseded'),
     ('Action going beyond what was permitted is an ____________ authority.', 'exceeded'),
     ('Permission obtained by telephone is a telephone ____________.', 'clearance'),
     ('The label showing how quickly a message must be handled is an ____________ marking.', 'urgency'),
     ('A position expressly left open is a ____________ position.', 'reserved')],

v_b=[('A change of circumstances is a development', 'that alters the basis of an instruction.'),
     ('A judgement call is a decision taken by an officer', 'without specific direction.'),
     ('A disclaimed statement is a statement', 'a government declines to stand behind.'),
     ('A clarification sought is a question put to the capital', 'about the meaning of a direction.'),
     ('An interim report is a report sent', 'before the full account is possible.')],

g_title='Grammar: reference and substitution across a text',
g_rule=['This and that point back to something already written; this is nearer, that is more '
        'distant or less welcome.',
        'Such a case, such wording and such circumstances refer back to a kind of thing just '
        'described.',
        'The former and the latter pick out the first and second of two items, in that order '
        'and no other.',
        'Do so substitutes for a verb phrase: we were asked to amend the text and cannot do so.'],
g_fig=('REPETITIVE',
       ['The decree was published on Wednesday. The publication of the decree changed the third premise.',
        'We were asked to amend the text. We cannot amend the text.',
        'There are two options: a holding reply and a request for instructions. A holding reply is quicker.',
        'Where the circumstances have changed, the officer seeks instructions where the circumstances have changed.'],
       'COHESIVE',
       ['The decree was published on Wednesday. This changed the third premise.',
        'We were asked to amend the text. We cannot do so.',
        'There are two options: a holding reply and a request for instructions. The former is quicker.',
        'Where the circumstances have changed, the officer seeks instructions in such a case.'],
       'four sentences that repeat every noun',
       'the same four, held together by reference and substitution'),
g_fig_cap='Reference is economy. It is also risk: this must have exactly one possible referent.',

g_a=[('The decree was published. ____________ changed the third premise.', 'This'),
     ('We have two options. ____________ is a holding reply.', 'The former'),
     ('They asked us to amend the text. We cannot ____________.', 'do so'),
     ('In ____________ a case, the officer seeks new instructions.', 'such'),
     ('There were four premises; two of ____________ no longer hold.', 'them'),
     ('He proposed a shorter period. We rejected ____________ proposal.', 'that'),
     ('A flash telegram and a telephone call: ____________ is faster.', 'the latter'),
     ('We were invited to reformulate. We declined to ____________.', 'do so'),
     ('He gave two reasons. Neither of ____________ was persuasive.', 'them')],

g_b=[('The decree was published. ( This / It ) changed the third premise — refer to the whole event.', ['This', 'It'], 0),
     ('Two options: a holding reply and a request. ( The former / The latter ) is quicker — the holding reply.',
      ['The former', 'The latter'], 0),
     ('We were asked to amend it and cannot ( do so / do it ) — formal substitution.',
      ['do so', 'do it'], 0),
     ('In ( such a case / this case ) the officer seeks instructions — refer to a type.',
      ['such a case', 'this case'], 0),
     ('A telegram and a telephone call: ( the latter / the former ) is faster — the call.',
      ['the latter', 'the former'], 0),
     ('He gave two reasons. ( Neither of them / None of them ) was persuasive.',
      ['Neither of them', 'None of them'], 0)],

d1=dict(
 title='Two of the four have gone',
 fig=(['Two premises have failed.', 'Which two, and in which paragraphs?'],
      ['Three outright, four in doubt.', 'Then the instruction is not usable.']),
 cap='Hala Darwish and Ambassador Walid Hourani, at half past eight.',
 lines=[('Hourani', 'You have read the decree?'),
        ('Hala', 'Eleven pages, in force on signature, four-month transitional period.'),
        ('Hourani', 'And your instruction asks for twelve.'),
        ('Hala', 'It asks for twelve on four premises, and the third was that no decree existed.'),
        ('Hourani', 'So the third has failed. What of the others?'),
        ('Hala', 'The fourth assumed their ministry had discretion on timing. The decree removes it.'),
        ('Hourani', 'Two of four. That is not a detail, that is the instruction.'),
        ('Hala', 'I have a meeting at ten and the capital opens at nine.'),
        ('Hourani', 'Then you send a flash telegram now, in six lines, and you telephone the desk at nine.'),
        ('Hala', 'And at ten, if nothing has come back?'),
        ('Hourani', 'You attend, you listen, you take the decree point by point, and you commit to nothing.'),
        ('Hala', 'A holding reply, and a request for instructions in writing before I leave the room.')],
 a=[('What does the decree provide?', 'a four-month transitional period'),
    ('What did the instruction ask for?', 'twelve months'),
    ('What was the third premise?', 'that no decree existed'),
    ('What did the fourth assume?', 'that their ministry had discretion on timing'),
    ('What does Hourani tell her to do?', 'send a flash telegram and telephone at nine')],
 b=[('In ____________ on signature.', 'force'),
    ('That is not a detail, that is the ____________.', 'instruction'),
    ('You attend, you listen, and you commit to ____________.', 'nothing'),
    ('A ____________ reply, and a request for instructions.', 'holding')]),

d2=dict(
 title='The line it offered me',
 fig=(['It wrote me a new negotiating line.', 'And was it any good?'],
      ['It was rather good.', 'That is what makes it dangerous.']),
 cap='Hala and Dalia Khoury, on the telephone at nine.',
 lines=[('Dalia', 'I have your telegram. Two premises gone, you say.'),
        ('Hala', 'Three has failed and four is doubtful. Paragraph references are in the telegram.'),
        ('Dalia', 'Good. What do you propose?'),
        ('Hala', 'I propose nothing. I have a suggested line in front of me and I am not using it.'),
        ('Dalia', 'Where did the suggestion come from?'),
        ('Hala', 'The same place as the premise analysis. It read the decree and drafted a new approach.'),
        ('Dalia', 'Is it sensible?'),
        ('Hala', 'It is sensible, and it concedes eight months that nobody in the capital has agreed to concede.'),
        ('Dalia', 'Then do not say it out loud, not even as a hypothetical in a corridor.'),
        ('Hala', 'I will not. Can you give me anything before ten?'),
        ('Dalia', 'I can give you one sentence: you are taking note of the decree and reverting. Nothing else.'),
        ('Hala', 'And when do I get a real instruction, with a number in it?')],
 unresolved=True,
 a=[('What did Hala’s telegram report?', 'that two premises had failed, with references'),
    ('What does she propose?', 'nothing'),
    ('Where did the suggested line come from?', 'the same analysis that read the decree'),
    ('Why is it dangerous?', 'it concedes eight months nobody has agreed to'),
    ('What one sentence does Dalia authorise?', 'taking note of the decree and reverting')],
 b=[('I have a suggested line and I am not ____________ it.', 'using'),
    ('Not even as a hypothetical in a ____________.', 'corridor'),
    ('You are taking ____________ of the decree and reverting.', 'note'),
    ('A real instruction, with a ____________ in it.', 'number')]),

speak=[('Refer, do not repeat',
        ['Make nine pairs of sentences using this, such, the former, the latter and do so.',
         'Your partner says exactly what each word refers to.',
         'Rewrite any where two referents are possible.']),
       ('Which premises have failed?',
        ['Describe an instruction or plan you have been given.',
         'List its premises and say which still hold.',
         'Your partner challenges one of your premises.']),
       ('Commit to nothing',
        ['Your partner presses you four times for a position you do not have.',
         'Decline each time in different words, without rudeness.',
         'End by saying exactly what you will do next and when.'])],

ext_title='A system will tell you which premises have failed, and then offer you an authority it does not have',
ext_fig=figs.datatable('FOUR PREMISES AT EIGHT O’CLOCK AND AT TEN',
                       ['Premise', 'Status on Monday', 'Status at ten'],
                       [['the file is still at official level', 'held', 'holds'],
                        ['their finance ministry opposes', 'held', 'holds'],
                        ['no implementing decree exists', 'held', 'failed outright'],
                        ['their ministry has discretion on timing', 'held', 'doubtful'],
                        ['instruction: press for 12 months', 'sound', 'unusable as written'],
                        ['suggested new line: accept 4+8', 'not offered', 'offered, unauthorised']]),
ext_fig_cap='Four premises, two of them dead by breakfast, and one suggestion nobody in the capital has read.',
ext=[
 'Checking an instruction against a new document is one of the most useful things a system '
 'does, and it is useful precisely because it is mechanical: set out the premises, read the '
 'new text, and say which premises the new text contradicts, with paragraph references for '
 'each.',
 'Done by hand under time pressure, this is the step most often skipped. An officer reads a '
 'new decree, forms a general impression that the situation has changed, and walks into the '
 'room with a vague unease rather than a list of two failed premises and their paragraph '
 'numbers.',
 'The list is reportable. A flash telegram saying premises 3 and 4 of the instruction of 12 '
 'May no longer hold, see paragraphs 2 and 7 of the decree, is something a desk officer can '
 'act on in ten minutes, whereas the situation has changed is something nobody can act on at '
 'all.',
 'What follows the list is where the trouble begins, because a system asked what to do next '
 'will answer, and it will answer well. It will propose a reformulated line that accounts for '
 'the decree, and the proposal will be intelligent, proportionate and entirely without '
 'authority.',
 'Such a suggestion is not an instruction, and in a negotiation the distinction is the whole '
 'of the officer’s discipline: the analysis goes in the telegram, the suggestion goes nowhere, '
 'and in the room the officer takes note, reserves the position and reverts.'],

dp2=('Reserving a position', 'Negotiating practice commonly treats an express reservation of '
     'position, accompanied by an undertaking to revert, as the standard means by which a '
     'delegation avoids being bound while awaiting instructions.',
     'Source: reported negotiating practice, 2025–2026.'),

e_a=[('Why is premise-checking well suited to a system?', 'it is mechanical and reference-based'),
     ('What does an officer usually walk in with instead?', 'a vague unease'),
     ('Why is a list reportable?', 'a desk officer can act on it in ten minutes'),
     ('What will a system offer after the list?', 'a reformulated line'),
     ('What does the officer do in the room?', 'takes note, reserves the position and reverts')],
e_b=[('Premise-checking is usually done carefully under time pressure.', 'F'),
     ('Paragraph references make a report actionable.', 'T'),
     ('A suggested line carries authority.', 'F'),
     ('The analysis belongs in the telegram.', 'T'),
     ('Reserving a position avoids being bound.', 'T'),
     ('The situation has changed is an actionable report.', 'F')],

w_model='Purpose: so that the capital knows within the hour which premises of the instruction '
        'of 12 May no longer hold. Scope: the instruction of 12 May and the decree published '
        'at 08:00 on 14 May; the wider legislative programme is reported separately. Inputs: '
        'both texts in full, and the Mission’s note of the meeting of 2 May. Criteria: each '
        'premise listed with its status, held, failed or doubtful, and the paragraph of the '
        'decree that bears on it; no proposed reformulation of the negotiating line. Done: a '
        '6-line flash telegram sent by 09:15 and a telephone call to the desk at 09:00. '
        'Fallback: if no new instruction arrives by 10:00, the delegate takes note, reserves '
        'the position and reverts.',
w_fig=figs.spec_card('SIX LINES AT HALF PAST EIGHT',
                     [('Purpose', 'the capital knows which premises failed, within the hour'),
                      ('Scope', 'the instruction of 12 May and the decree of 14 May'),
                      ('Inputs', 'both texts in full and the note of 2 May'),
                      ('Criteria', 'each premise, its status and the paragraph; no reformulation'),
                      ('Done', 'flash telegram by 09:15; call at 09:00'),
                      ('Fallback', 'no instruction by 10:00: take note and reserve')]),
w_fig_cap='Line 4’s second half is the one that keeps an officer inside his authority.',
w_task='Write a six-line tasking for checking an instruction against a new document.',
w_steps=['Line 1: what the capital must know, and by when.',
         'Line 2: which instruction and which new document.',
         'Line 3: the inputs, in full.',
         'Line 4: what each premise must carry, and what must not be produced.',
         'Line 5: what is sent, to whom and by when.',
         'Line 6: what is said in the room if nothing comes back.'],
w_bank=['Purpose: so that the capital knows within … which premises of … no longer hold',
        'Scope: the instruction of … and the document published at … ',
        'Inputs: both texts in full, and … ',
        'Criteria: each premise with its status and the paragraph; no proposed reformulation',
        'Done: a … -line flash telegram by … and a call to the desk at … ',
        'Fallback: if no new instruction arrives by … , the delegate … '],
w_check=['Does line 4 forbid a proposed new line?',
         'Does each premise carry a paragraph reference?',
         'Is there a time for the telegram and the call?',
         'Does line 6 keep you unbound?'],

t_title='The gap between the instruction and the room',
t_fig=figs.split('AN INSTRUCTION AND A NEW FACT',
                 'Ask for this',
                 ['the premises of the instruction, listed',
                  'which the new document contradicts',
                  'the paragraph reference for each',
                  'what is now simply unknown'],
                 'Do not ask for this',
                 ['a new negotiating line',
                  'what you should concede',
                  'a form of words to use in the room',
                  'an opinion on what the capital will accept']),
t_fig_cap='The left column is reportable in six lines. The right column is somebody else’s job.',
t_body=[
 'Give both texts and ask for the instruction’s premises to be listed and tested one at a '
 'time against the new document, each marked held, failed or doubtful, with the paragraph that '
 'bears on it. Ask also for anything the new document makes simply unknown, because that is '
 'reportable too.',
 'Stop there, deliberately. The next question, what should I do about it, is the one the system '
 'will answer most fluently and the one answer you cannot carry into a room, because it has no '
 'standing: your government has not seen it, and a sensible-sounding concession is still a '
 'concession made without authority.',
 'Put the list in a flash telegram with the paragraph numbers, telephone the desk as soon as it '
 'opens, and in the meeting take the new document point by point, take note of it, reserve your '
 'position expressly and undertake to revert. Such a reply commits nothing and loses nothing.'],
t_say=[('Ask for the premises: ', 'List the premises of this instruction and test each against this decree.'),
       ('Ask for references: ', 'Mark each held, failed or doubtful, with the paragraph.'),
       ('Do not ask: ', 'Do not propose a new line; that is for the capital.')],
t_bound='A premise analysis is a reading of two documents. It does not know what your '
        'government will concede, what was traded in a corridor last month, or what your '
        'minister said to theirs in February, so any line it proposes is a guess with no '
        'authority behind it.',
t_a=[('List the ____________ of this instruction.', 'premises'),
     ('And test each against this ____________.', 'decree'),
     ('Mark each held, failed or ____________.', 'doubtful'),
     ('Do not propose a new ____________.', 'line'),
     ('It does not know what your government will ____________.', 'concede'),
     ('Reserve your position ____________.', 'expressly')],
t_b_rubric='Say whether each is reportable to the capital or not usable at all.',
t_b=[('Premise 3 has failed; see paragraph 2 of the decree.', 'reportable: it is a reading of texts'),
     ('We should accept four months plus eight.', 'not usable: nobody authorised it'),
     ('The decree makes their ministry’s discretion doubtful.', 'reportable, marked as doubtful'),
     ('They will probably settle at six months.', 'not usable: it is speculation')],

case=dict(
 title='The Decision Room · Two hours between the decree and the meeting',
 brief=[
  'An instruction of 12 May directs a delegate to press for a twelve-month transitional '
  'period, resting on four premises, the third of which is that the other administration has '
  'published no implementing decree.',
  'At 08:00 on 14 May the decree is published: eleven pages, in force on signature, providing '
  'for four months. A premise analysis produced in minutes finds the third premise failed '
  'outright and the fourth doubtful, with the paragraph of the decree that bears on each.',
  'The same analysis then offers a reformulated negotiating line, accepting four months with '
  'an eight-month technical extension, which is proportionate, well argued and has been seen '
  'by nobody in the delegate’s government. The meeting is at ten. The capital opens at nine.'],
 exhibit=figs.datatable('WHAT WAS SENT AND WHAT WAS NOT',
                        ['Item', 'Into the telegram?', 'Why'],
                        [['premise 3 failed, para 2', 'yes', 'a reading of the decree'],
                         ['premise 4 doubtful, para 7', 'yes', 'a reading of the decree'],
                         ['decree in force on signature', 'yes', 'a fact'],
                         ['four-month period', 'yes', 'a fact'],
                         ['proposed line: 4 plus 8', 'no', 'unauthorised'],
                         ['they will settle at six', 'no', 'speculation']]),
 exhibit_cap='Four items of fact and reference went. Two items of judgement stayed on the screen.',
 exhibit_note='The analysis and the suggestion came out of the same request in the same '
              'minute, and only one of them has any standing.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'In ten minutes I had two failed premises with paragraph numbers, which I could send.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'And a suggested concession of eight months that no Syrian official has agreed to.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'The first is reporting and the second is policy. The skill is telling them apart at half past eight.')],
 steps=[('Find it', 'What did the analysis establish?'),
        ('Compare it', 'The premise list against the suggested line.'),
        ('Infer it', 'Why has the suggestion no standing?'),
        ('Weigh it', 'Ten minutes of clarity against one unauthorised concession.'),
        ('Decide', 'What does the delegate send, and what does she say at ten?')],
 analysis=[('Find it. What was established?', 'premise 3 failed, premise 4 doubtful, with references'),
           ('Compare it. List against line?', 'one is a reading of texts, the other a policy choice'),
           ('Infer it. Why no standing?', 'no one in her government has seen or agreed it'),
           ('Weigh it. What is each worth?', 'the list is reportable; the line is unusable'),
           ('Decide. What happens at ten?', 'take note, reserve the position and revert')],
 decision='Decide the drill, in four lines.',
 decision_steps=['Say what is produced when a fact changes.',
                 'Say what goes into the telegram.',
                 'Say what is never carried into the room.',
                 'Say what is said in the room without instructions.'],
 bank=['When a new document appears, the instruction’s premises are listed and tested one by one.',
       'Each premise goes to the capital with its status and the paragraph that bears on it.',
       'No proposed reformulation of a negotiating line leaves the Mission, in writing or aloud.',
       'Without instructions the delegate takes note, reserves the position expressly and reverts.'],
 outcome='The telegram goes at 09:08 with six lines and four paragraph references. At 09:50 '
         'the capital sends one authorised sentence: the delegation takes note of the decree, '
         'reserves its position and will revert. Hala uses it twice in the meeting and nothing '
         'else. A revised mandate arrives on the Friday, instructing her to seek four months '
         'plus six, which is not the eight she had been offered on a screen.',
 outcome_q=[('When did the telegram go?', 'at 09:08'),
            ('What did the capital authorise?', 'one sentence: take note, reserve, revert'),
            ('How often did she use it?', 'twice, and nothing else'),
            ('When did the revised mandate arrive?', 'on the Friday'),
            ('What did it instruct?', 'four months plus six')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · This decree has just come out',
 task=['A delegate asked for help two hours before a meeting, with a new decree in hand.',
       'This is the instruction as it was given, and what came back.'],
 draft=['This decree has just come out.',
        'Here is my instruction.',
        'Tell me where I stand.',
        'What should I say at ten?',
        'Keep it short.',
        'Something I can use.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and two of them ask for exactly what the officer must not have.',
 asked=['Where I stand', 'What to say at ten', 'Something usable'],
 back=['2 failed premises, correctly found', '1 new negotiating line, unauthorised', '0 paragraph references'],
 gap='Nobody said that the analysis is wanted and the advice is not, or that references are required.',
 back_cap='The right analysis and the wrong offer, delivered together and indistinguishable in tone.',
 back_note='What should I say at ten invites a form of words, and a form of words produced '
           'outside the capital is a position taken without authority, however reasonable it '
           'sounds in the minute before a meeting.',
 diagnosis=[('“where I stand”', 'unstated criterion'),
            ('“something I can use”', 'unstated criterion'),
            ('“what should I say”', 'missing condition'),
            ('“keep it short”', 'missing condition'),
            ('“this decree”', 'unscoped set'),
            ('“my instruction”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that the analysis comes back and the advice does not.',
 scaffold=['why the analysis is wanted and by when',
           'which instruction and which document, dated',
           'the inputs, in full, and any Mission records',
           'what each premise carries, and what must not be produced',
           'what is delivered, in what form and by when',
           'what is said in the room if nothing arrives'],
 bank=['Purpose: so that the capital knows within … which premises no longer hold',
       'Scope: the instruction of … and the decree published at … ',
       'Inputs: both texts in full, and the Mission’s note of … ',
       'Criteria: each premise marked held, failed or doubtful, with the paragraph; no reformulation',
       'Done: a … -line telegram by … and a call to the desk at … ',
       'Fallback: if nothing arrives by … , take note, reserve the position and revert'],
 check=['Does it ask for paragraph references?',
        'Does it forbid a proposed line explicitly?',
        'Is there a time for the telegram and the call?',
        'Does line 6 give the words for the room?'],
 model=['so that the capital knows within the hour which premises of the instruction of 12 May no longer hold',
        'the instruction of 12 May and the decree published at 08:00 on 14 May',
        'both texts in full, and the Mission’s note of the meeting of 2 May',
        'each premise marked held, failed or doubtful, with the paragraph of the decree; no proposed reformulation',
        'a 6-line flash telegram by 09:15 and a telephone call to the desk at 09:00',
        'if no new instruction arrives by 10:00, take note, reserve the position expressly and revert'],
 cost='1 unauthorised line was produced in the same minute as 2 correct findings, and read '
      'in the same tone of voice.'),

feet=dict(
 title='On Your Feet · The chair asks for your position on a decree published two hours ago',
 setting=[
  'The meeting has reached the transitional period. The chair knows the decree was published '
  'this morning, knows you cannot have instructions, and asks you anyway, in front of eleven '
  'delegations, what your government’s position on it is.',
  'You have a premise analysis, a flash telegram sent at nine, and one authorised sentence '
  'that arrived at 09:50. You also have, on your screen, a reasonable-sounding new line that '
  'nobody has approved.'],
 ladder=[('What is your position on the decree?', 'the question you must answer with one sentence'),
         ('Four months is surely workable', 'the number you must not react to'),
         ('I will note your delegation as flexible', 'the characterisation you must refuse')],
 cap='Three turns in plenary, with eleven delegations listening.',
 turns=[('Turn 1 · The chair', 'What is your delegation’s position on the decree published this morning?'),
        ('Turn 2 · The chair', 'Four months is surely workable for a transition of this kind.'),
        ('Turn 3 · The chair', 'I shall note your delegation as flexible on the period, then.')],
 holds=['The delegation takes note of the decree, reserves its position and will revert.',
        'I received the text two hours ago, and I will not improvise a position on eleven pages.',
        'I am not going to be drawn on a number today, in either direction.',
        'Please record us as reserving our position, which is not the same as flexible.',
        'I will come back to this meeting, or to you directly, as soon as I am in a position to.',
        'What I can usefully do now is take the decree point by point, if the chair wishes.'],
 redline='You must not give a figure, you must not react to four months as though you were '
         'empowered to accept or reject it, and you must not allow reserved to be recorded as '
         'flexible. Nothing on your screen is a position of your government.',
 score=['Used the authorised sentence, exactly, as the answer.',
        'Declined to be drawn on any number.',
        'Gave a reason that was true: two hours and eleven pages.',
        'Corrected the record from flexible to reserving.',
        'Offered something procedural and useful instead.'],
 a=[('What is your answer to the first question?', 'the authorised sentence: note, reserve, revert'),
    ('What do you refuse to give?', 'a number'),
    ('What reason do you give?', 'two hours and eleven pages'),
    ('What characterisation do you correct?', 'flexible, to reserving our position'),
    ('What do you offer instead?', 'to take the decree point by point'),
    ('What is on your screen worth?', 'nothing: nobody authorised it')]),

rev_fig=figs.split('A FACT CHANGES AT EIGHT O’CLOCK',
                   'Reportable',
                   ['premise 3 failed, paragraph 2',
                    'premise 4 doubtful, paragraph 7',
                    'in force on signature',
                    'four-month period'],
                   'Not usable',
                   ['a reformulated negotiating line',
                    'a concession of eight months',
                    'a prediction of where they will settle',
                    'your own view of what is reasonable']),
rev_fig_cap='The left column goes in a telegram in six lines. The right column goes nowhere at all.',
rev=dict(
 read=[('What did the decree provide?',
        ['four months', 'twelve months', 'eight months', 'no period'], 0),
       ('How many premises failed or became doubtful?',
        ['two', 'four', 'one', 'none'], 0),
       ('What was offered that she could not use?',
        ['a reformulated line', 'a paragraph reference',
         'a holding reply', 'a flash telegram'], 0),
       ('What does a delegate without instructions do?',
        ['take note, reserve and revert', 'accept provisionally',
         'reject outright', 'leave the room'], 0)],
 listen_text='List the premises of the instruction and test each against the new document, '
             'marking it held, failed or doubtful with the paragraph that bears on it. Do not '
             'ask for a new line: that is for the capital.',
 listen=[('List the ____________ of the instruction.', 'premises'),
         ('Mark each held, failed or ____________.', 'doubtful'),
         ('With the ____________ that bears on it.', 'paragraph'),
         ('Do not ask for a new ____________.', 'line')],
 speak=['Make nine pairs of sentences using this, such, the former, the latter and do so.',
        'Then decline four times, politely, to give a position you do not have.'],
 write='Write a six-line tasking for checking an instruction against a new document.',
 vocab=[('An answer that commits to nothing is a ____________ reply.', 'holding'),
        ('A message of the highest urgency is a ____________ telegram.', 'flash'),
        ('Wording prepared for a situation that may arise is a ____________ line.', 'contingency'),
        ('A direction overtaken by events is a ____________ instruction.', 'superseded')],
 gram=[('The decree was published. ____________ changed the third premise.', 'This'),
       ('He gave two undertakings. ____________ was in writing.', 'The former'),
       ('They asked us to amend it. We cannot ____________.', 'do so'),
       ('In ____________ a case, the officer seeks instructions.', 'such')]),

found=['List the premises of your next instruction before the meeting, not after it.',
       'Report a failed premise with the paragraph that killed it.',
       'Never carry a suggested form of words into a room on your own authority.',
       'Learn one sentence by heart: the delegation takes note, reserves its position and will revert.'],
end_line='It can tell you the ground has moved. Only your capital can tell you where to stand.',
end_next='Next: Drafting Jointly, Word by Word')
