# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='A Short Email to the Capital',
gram='the past simple: regular and irregular verbs',
ai='a first email draft that still sounds like you',
strap='CEFR A2 · Grammar: the past simple: regular and irregular verbs · '
      'AI: a first email draft that still sounds like you',
cando=['report what happened using regular and irregular past forms',
       'write a subject line that says what the message is',
       'tell the difference between what I saw and what I was told',
       'change a drafted sentence so that it says only what I mean',
       'write a six-line message to a capital'],

hero=('SEVEN LINES TO THE CAPITAL, AND ONE WORD THAT WAS NOT HERS',
      ['She wrote will. She meant may.',
       'In the capital, will is a commitment and may is a note.'],
      [(720, 'teal', 'long'), (720, 'grey', 'short'), (720, 'blue', 'short')]),
hero_cap='A desk in the chancery at 17:20, with a draft open and a deadline in two hours.',

warm=['What makes an email easy to answer quickly?',
      'What do you always put in a subject line?',
      'Has a draft ever said more than you meant to say?'],

read=[
 'On Monday Nour went to the host ministry. She met a protocol officer. They talked for '
 'twenty minutes. He said that the department hoped to confirm a date in November, but that '
 'nothing was decided and that he spoke for himself.',
 'She came back and wrote to the capital. The message had seven lines. It took her forty '
 'minutes, and she rewrote the first line four times, because she did not know how much to '
 'say and how much to leave out.',
 'A capital reads hundreds of messages a day. The subject line decides whether a message is '
 'read at eight in the morning or at six in the evening. Dalia Khoury, the desk officer at '
 'home, says she can tell from four words whether something needs her today.',
 'Nour asked a system for a first draft. The draft came back in four seconds. It was clear, '
 'well organised and polite. It was also firmer than the conversation had been. Where the '
 'officer said hoped, the draft said expected. Where Nour meant may, the draft said will.',
 'She noticed the second one and changed it. She did not notice the first one. In the '
 'capital, hoped and expected are not the same word, and the difference travelled further '
 'than the Mission did.'],

dp1=('What a capital reads first', 'Reporting guidance in several services asks officers to '
     'put the decision needed, the date and the source of a claim in the first two lines of '
     'any message, because desks triage by opening line rather than by length.',
     'Source: reported reporting practice, 2025–2026.'),

c_a=[('Where did Nour go on Monday?', 'to the host ministry'),
     ('How long did they talk?', 'twenty minutes'),
     ('What did the officer say about the date?', 'the department hoped to confirm one in November'),
     ('How many lines did her message have?', 'seven'),
     ('What did the draft say instead of hoped?', 'expected'),
     ('Which change did she notice?', 'will, which she changed to may')],

c_b=[('The protocol officer decided the date.', 'F'),
     ('He said he spoke for himself.', 'T'),
     ('Nour rewrote the first line four times.', 'T'),
     ('Dalia reads every message at eight in the morning.', 'F'),
     ('The draft was badly organised.', 'F'),
     ('Nour noticed both changes.', 'F')],

c_c=[('On Monday Nour ____________ (go) to the host ministry.', 'went'),
     ('She ____________ (meet) a protocol officer.', 'met'),
     ('They ____________ (talk) for twenty minutes.', 'talked'),
     ('He ____________ (say) that nothing was decided.', 'said'),
     ('She ____________ (write) seven lines.', 'wrote'),
     ('She ____________ (not notice) the first change.', 'did not notice')],

c_d=[('A subject line decides ( who sends it / when a message is read ).', ['who sends it', 'when a message is read'], 1),
     ('Hoped and expected are ( different / the same ).', ['different', 'the same'], 0),
     ('The officer spoke ( for himself / for the department ).',
      ['for himself', 'for the department'], 0),
     ('The draft was ( firmer / weaker ) than the conversation.', ['firmer', 'weaker'], 0),
     ('The dangerous change was the one she ( did not notice / changed ).',
      ['did not notice', 'changed'], 0)],

c_e=('Regular or irregular? Put each past form in the right column.',
     [('talked', 'regular'),
      ('went', 'irregular'),
      ('met', 'irregular'),
      ('asked', 'regular'),
      ('wrote', 'irregular'),
      ('noticed', 'regular')],
     ['regular', 'irregular']),

v_fig_title='THE PARTS OF A MESSAGE',
v_fig=[('doc', 'a subject line'), ('people', 'a recipient'), ('chart', 'an action point'),
       ('clock', 'a deadline'), ('key', 'a distribution list'), ('envelope', 'an attachment')],
v_fig_cap='Six words for the machinery of a message that is read in four seconds.',

vocab=[
 ('a subject line', 'the short line that says what a message is about'),
 ('a recipient', 'the person a message is addressed to'),
 ('a copy line', 'the list of people who receive a message for information'),
 ('an attachment', 'a file sent with a message'),
 ('a sign-off', 'the closing words and name at the end of a message'),
 ('a thread', 'a message and all the replies that follow it'),
 ('a reply-all', 'a reply sent to every recipient of the original message'),
 ('a read receipt', 'a confirmation that a message has been opened'),
 ('a distribution list', 'a named group of recipients used again and again'),
 ('a reporting line', 'the route by which information travels from a post to a capital'),
 ('a deadline', 'the time by which something must be finished'),
 ('a bullet point', 'one short item in a list, marked with a dot'),
 ('a follow-up', 'a later message or action that continues an earlier one'),
 ('an action point', 'a task recorded with an owner and a date'),
 ('an internal note', 'a message written for colleagues and not for anybody outside'),
 ('a house style', 'the way an organisation has agreed to write things'),
 ('a chaser', 'a short message asking for a reply that has not come'),
 ('a time stamp', 'the recorded time at which something was sent or done'),
 ('a draft reply', 'a reply written but not yet sent'),
 ('a covering line', 'the sentence that explains why something is attached')],

v_a=[('The short line that says what a message is about is the ____________ line.', 'subject'),
     ('A file sent with a message is an ____________.', 'attachment'),
     ('A message and all its replies are a ____________.', 'thread'),
     ('A task with an owner and a date is an ____________ point.', 'action'),
     ('A short message asking for a reply is a ____________.', 'chaser'),
     ('The recorded time of sending is a time ____________.', 'stamp'),
     ('The way an organisation agrees to write is its ____________ style.', 'house'),
     ('The closing words and name are the ____________.', 'sign-off')],

v_b=[('A distribution list is a named group of recipients', 'used again and again.'),
     ('A reporting line is the route by which information travels', 'from a post to a capital.'),
     ('A covering line is the sentence that explains', 'why something is attached.'),
     ('A read receipt is a confirmation', 'that a message has been opened.'),
     ('An internal note is a message written for colleagues', 'and not for anybody outside.')],

g_title='Grammar: the past simple: regular and irregular verbs',
g_rule=['Regular verbs add -ed: talked, asked, noticed, arrived, replied.',
        'Irregular verbs change: go/went, meet/met, write/wrote, say/said, come/came.',
        'Questions and negatives use did: Did she go? She did not go.',
        'After did, use the bare verb: She did not write, not She did not wrote.'],
g_fig=('WRONG',
       ['She did not wrote the message.',
        'He telled me yesterday.',
        'Did she went to the ministry?',
        'They meeted at four.'],
       'RIGHT',
       ['She did not write the message.',
        'He told me yesterday.',
        'Did she go to the ministry?',
        'They met at four.'],
       'four past forms that will be corrected for you',
       'the same four, correct the first time'),
g_fig_cap='After did, the verb loses its past form. It has already been said once.',

g_a=[('On Monday she ____________ (go) to the ministry.', 'went'),
     ('They ____________ (talk) for twenty minutes.', 'talked'),
     ('He ____________ (tell) her that nothing was decided.', 'told'),
     ('She ____________ (write) seven lines.', 'wrote'),
     ('____________ you (send) the message yesterday?', 'Did'),
     ('I ____________ not (notice) the second change.', 'did'),
     ('We ____________ (meet) the attaché at four.', 'met'),
     ('The capital ____________ (reply) at six.', 'replied'),
     ('She ____________ (not go) back on Tuesday.', 'did not go')],

g_b=[('She ( did not write / did not wrote ) the message.', ['did not write', 'did not wrote'], 0),
     ('He ( told / telled ) me yesterday.', ['told', 'telled'], 0),
     ('( Did she go / Did she went ) to the ministry?', ['Did she go', 'Did she went'], 0),
     ('They ( met / meeted ) at four.', ['met', 'meeted'], 0),
     ('We ( replied / replyed ) the same evening.', ['replied', 'replyed'], 0),
     ('I ( sent / sended ) it at 17:20.', ['sent', 'sended'], 0)],

d1=dict(
 title='Four words at the top',
 fig=(['Your subject line said update.', 'It was an update.'],
      ['So were ninety others.', 'Then what should it say?']),
 cap='Nour and Dalia Khoury, by telephone to the capital, on Tuesday.',
 lines=[('Dalia', 'I read your message at six in the evening, not at eight in the morning.'),
        ('Nour', 'Why so late?'),
        ('Dalia', 'Your subject line said Update from Calmar. So did ninety others.'),
        ('Nour', 'What should it have said?'),
        ('Dalia', 'What I have to do, and by when.'),
        ('Nour', 'There was nothing for you to do.'),
        ('Dalia', 'Then say that. No action: possible date in November.'),
        ('Nour', 'That is six words.'),
        ('Dalia', 'Six words that saved me opening it at all.'),
        ('Nour', 'And if I am not sure whether there is an action?'),
        ('Dalia', 'Then there is one, and it is mine, and I want to know at eight.'),
        ('Nour', 'Understood. Four words at the top, every time.')],
 a=[('When did Dalia read the message?', 'at six in the evening'),
    ('What did the subject line say?', 'Update from Calmar'),
    ('What should a subject line say?', 'what she has to do, and by when'),
    ('What six words does Dalia suggest?', 'no action: possible date in November'),
    ('What if the writer is unsure?', 'then there is an action and she wants it at eight')],
 b=[('I ____________ your message at six.', 'read'),
    ('So ____________ ninety others.', 'did'),
    ('Then ____________ that.', 'say'),
    ('Six words that ____________ me opening it.', 'saved')]),

d2=dict(
 title='It wrote expected and he said hoped',
 fig=(['The draft was excellent.', 'Was it true?'],
      ['Almost.', 'Almost is a word you cannot send.']),
 cap='Nour and Dr Suhair Kanaan, reading a sent message, on Wednesday morning.',
 lines=[('Dr Kanaan', 'Your message says the department expects to confirm in November.'),
        ('Nour', 'That is what the draft said.'),
        ('Dr Kanaan', 'What did the officer actually say?'),
        ('Nour', 'He said the department hoped to.'),
        ('Dr Kanaan', 'Those are two different pieces of information.'),
        ('Nour', 'The draft was clearer than he was.'),
        ('Dr Kanaan', 'Yes. That is what a drafting system does. It tidies away the doubt.'),
        ('Nour', 'I caught one word and missed the other.'),
        ('Dr Kanaan', 'You caught will. Will is loud. Expected is quiet and it travels further.'),
        ('Nour', 'So I should read the draft against my notes, not against my memory.'),
        ('Dr Kanaan', 'Yes. And when you took no notes, because it was a corridor?')],
 unresolved=True,
 a=[('What did the message say?', 'that the department expects to confirm'),
    ('What did the officer say?', 'that the department hoped to'),
    ('What does a drafting system do to doubt?', 'it tidies it away'),
    ('Which word did Nour catch?', 'will'),
    ('What should she read the draft against?', 'her notes, not her memory')],
 b=[('The draft was clearer than he ____________.', 'was'),
    ('It ____________ away the doubt.', 'tidies'),
    ('Expected is quiet and it travels ____________.', 'further'),
    ('Read the draft against your ____________.', 'notes')]),

speak=[('What happened yesterday',
        ['Tell your partner six things you did yesterday at work.',
         'Use three regular and three irregular past verbs.',
         'Your partner asks three questions with did.']),
       ('Four words at the top',
        ['Write subject lines for five real messages, aloud.',
         'Each one must say the action and the date.',
         'Your partner says which one they would open first.']),
       ('Said, told, hoped, expected',
        ['Report one conversation twice: once firmly, once carefully.',
         'Your partner says which version they would send.',
         'Decide what evidence you would need for the firm version.'])],

ext_title='A capital triages by the first line, and a draft always sounds more certain than a corridor',
ext_fig=figs.datatable('NINETY-ONE MESSAGES IN ONE MORNING',
                       ['Subject line', 'Opened at', 'Why'],
                       [['Update from Calmar', '18:10', 'no action, no date'],
                        ['No action: possible date November', '08:05', 'action stated'],
                        ['Urgent', '08:02', 'everything is urgent'],
                        ['Decision needed by Thu: visit dates', '08:03', 'decision and deadline'],
                        ['FW: FW: RE: programme', '17:40', 'nobody knows what it is'],
                        ['Detained national, Ostport, action today', '07:58', 'person and time']]),
ext_fig_cap='Six subject lines, and ten hours of difference in when they were read.',
ext=[
 'A message from a post competes with ninety others. The desk officer who receives it has '
 'to decide in four seconds whether it needs attention this morning or this week. That '
 'decision is made on the subject line, and nothing else.',
 'So a subject line is not a title. It is an instruction about priority. The best ones say '
 'three things: whether action is needed, by whom, and by when. No action is a perfectly '
 'good thing to say, and it is a kindness to say it.',
 'The body has a second problem. Reporting a conversation means separating three things: '
 'what you saw, what you were told, and what you concluded. These get mixed together very '
 'easily, and a reader in a capital cannot unmix them.',
 'A drafting system makes this harder, in a way that is easy to miss. It writes fluent, '
 'confident prose. Fluent, confident prose smooths over hedges. Hoped becomes expected. '
 'Suggested becomes said. A corridor remark becomes a departmental position.',
 'The remedy is small and dull. Read the draft against your notes, not against your memory '
 'of the meeting, and check every verb that carries certainty. If you took no notes, say so '
 'in the message, because that is information too.'],

dp2=('Why hedges matter in reporting', 'Reporting guidance commonly requires officers to '
     'distinguish observed fact, reported statement and personal assessment in separate '
     'sentences, because a reader in a capital has no way to recover the distinction once '
     'it is lost.',
     'Source: reported reporting practice, 2025–2026.'),

e_a=[('How many seconds does a desk officer take to triage?', 'four'),
     ('What is a subject line really for?', 'instructing about priority'),
     ('What three things should it say?', 'whether action is needed, by whom and by when'),
     ('What three things must a report separate?', 'what you saw, what you were told, what you concluded'),
     ('What does fluent prose do to hedges?', 'it smooths them over')],
e_b=[('A subject line is a title.', 'F'),
     ('No action is a useful thing to say.', 'T'),
     ('A reader can unmix fact and assessment later.', 'F'),
     ('A drafting system makes prose more cautious.', 'F'),
     ('You should read a draft against your notes.', 'T'),
     ('Having taken no notes is worth reporting.', 'T')],

w_model='Purpose: tell the capital what the host ministry said about November dates, so that '
        'the desk can decide whether to propose alternatives. Scope: the conversation of 14 '
        'October only. Inputs: my written note taken immediately afterwards. Criteria: 6 '
        'lines: subject line with action and date, what was said, who said it and in what '
        'capacity, what is not yet decided, what I recommend, what I will do next. Done: 6 '
        'lines, sent by 18:00 on 14 October. Fallback: where I have no note of a sentence, '
        'I say that it is from memory.',
w_fig=figs.spec_card('SIX LINES TO A CAPITAL',
                     [('Purpose', 'so the desk can decide about alternative dates'),
                      ('Scope', 'the conversation of 14 October only'),
                      ('Inputs', 'my written note, taken immediately after'),
                      ('Criteria', '6 lines: subject, said, who, undecided, recommend, next'),
                      ('Done', 'sent by 18:00 on 14 October'),
                      ('Fallback', 'no note of a sentence: say it is from memory')]),
w_fig_cap='Six lines, and the first one decides whether the other five are read today.',
w_task='Write a six-line message to a capital reporting one conversation.',
w_steps=['Line 1: a subject line with the action and the date.',
         'Line 2: what was said, in the speaker’s own strength of word.',
         'Line 3: who said it, and whether they spoke officially.',
         'Line 4: what is not yet decided.',
         'Line 5: what you recommend, marked as your view.',
         'Line 6: what you will do next, with a date.'],
w_bank=['No action: … expected by …',
        'Decision needed by …: …',
        'He said that the department hoped to …',
        'He spoke in his own capacity and not for the department.',
        'My own assessment, which he did not confirm, is that …'],
w_check=['Does line 1 say whether action is needed?',
         'Does line 2 use the speaker’s own word, not a stronger one?',
         'Is your assessment clearly marked as yours?',
         'Is there a date in line 6?'],

t_title='A first email draft that still sounds like you',
t_fig=figs.split('THE DRAFT AND THE TRUTH',
                 'What a draft does well',
                 ['order: first, then, finally',
                  'short sentences from long notes',
                  'a polite opening and close',
                  'a clean list of action points'],
                 'What a draft quietly changes',
                 ['hoped becomes expected',
                  'suggested becomes said',
                  'may becomes will',
                  'one official becomes the department']),
t_fig_cap='The left column saves twenty minutes. The right column costs a correction.',
t_body=[
 'Use a draft for shape, not for content. Give the system your notes and ask for an '
 'ordered, short message with a subject line. It will organise four messy paragraphs into '
 'six clear lines, and it will do it better than you can at ten past five.',
 'Then read it with one specific question in mind: has any word become stronger than what I '
 'heard? The words to watch are the small ones. Will, expects, agreed, confirmed, the '
 'department. Each of them turns a conversation into a commitment.',
 'Finally put yourself back in. A message from a post carries a person’s judgement, and the '
 'judgement is the part the capital cannot get anywhere else. Mark it as yours in plain '
 'words, and leave the hedges exactly where the other person put them.'],
t_say=[('Ask for shape: ', 'Order these notes into six short lines with a subject line.'),
       ('Check the strength: ', 'Which words here are stronger than my notes?'),
       ('Put yourself back: ', 'My own assessment, which he did not confirm, is that …')],
t_bound='A drafting system does not know what was actually said in the room, so it cannot '
        'tell a hedge from a position. It writes the most natural sentence, and the most '
        'natural sentence is almost always the more confident one.',
t_a=[('Order these notes into six short ____________.', 'lines'),
     ('Which words here are stronger than my ____________?', 'notes'),
     ('My own ____________, which he did not confirm, is that…', 'assessment'),
     ('Use a draft for ____________, not for content.', 'shape'),
     ('It cannot tell a ____________ from a position.', 'hedge'),
     ('The most natural sentence is the more ____________ one.', 'confident')],
t_b_rubric='Rewrite each drafted sentence so that it reports what was actually said.',
t_b=[('The department expects to confirm in November.',
      'one official said the department hoped to confirm in November'),
     ('They agreed to meet the delegation.',
      'he suggested a meeting; nothing was agreed'),
     ('The ministry will reply next week.',
      'he thought a reply might come next week, speaking personally'),
     ('They confirmed the venue.', 'the venue was mentioned, not confirmed')],

case=dict(
 title='The Decision Room · The word that travelled to a minister',
 brief=[
  'On 14 October Nour reports a corridor conversation. Her message, drafted with help and '
  'checked quickly, says that the host department expects to confirm a visit date in '
  'November. The protocol officer had said hoped, and had said he spoke for himself.',
  'On 21 October the capital includes the sentence in a submission to a minister. On 3 '
  'November the host ministry says no date is possible before February. The submission is '
  'now wrong, and it was wrong because of one verb.',
  'Dalia Khoury telephones the Mission. She is not angry. She wants to know how a corridor '
  'remark became a departmental expectation, and what the Mission will do so that it does '
  'not happen again.'],
 exhibit=figs.datatable('ONE SENTENCE, FOUR STAGES',
                        ['Stage', 'The words used', 'Strength'],
                        [['what the officer said', 'the department hoped to', 'personal hope'],
                         ['Nour’s note', 'hoped, speaks for himself', 'personal hope'],
                         ['the draft', 'expects to confirm', 'departmental expectation'],
                         ['the message sent', 'expects to confirm', 'departmental expectation'],
                         ['the submission', 'is expected to confirm', 'near certainty'],
                         ['the outcome', 'no date before February', '—']]),
 exhibit_cap='The note was right. Every stage after the note was a little firmer than the one before.',
 exhibit_note='Nobody exaggerated on purpose. Each stage simply used the most natural form '
              'of the sentence it received, and the natural form is always the confident one.',
 voices=[('Nour Ajami', 'third secretary',
          'I checked the draft for will. I did not think expects was a change at all.'),
         ('Dalia Khoury', 'desk officer',
          'I did not know he spoke personally. If I had known, the sentence would not have gone up.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The capacity was in her note and not in her message. That is the whole case.')],
 steps=[('Find it', 'Which word changed, and at which stage?'),
        ('Compare it', 'What is in the note that is missing from the message?'),
        ('Infer it', 'Why did nobody stop it at any stage?'),
        ('Weigh it', 'A slower message against a wrong submission to a minister.'),
        ('Decide', 'What must a report always carry?')],
 analysis=[('Find it. Which word changed?', 'hoped became expects'),
           ('Compare it. At which stage did it change?', 'in the draft'),
           ('Infer it. What was in the note but not the message?', 'that he spoke for himself'),
           ('Weigh it. Why did each stage firm it up?', 'each used the most natural form of the sentence'),
           ('Decide. What did the capital do with it?', 'put it in a submission to a minister')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what every reported statement must carry.',
                 'Say what an officer checks a draft against.',
                 'Say how a personal remark is marked.',
                 'Say what happens when there is no written note.'],
 bank=['Every reported statement names the speaker and the capacity in which they spoke.',
       'A draft is checked against the written note, not against memory.',
       'A personal remark is reported with the words speaking personally.',
       'Where there is no note, the message says that the account is from memory.'],
 outcome='Dr Kanaan writes four lines and sends them to the capital as well, because the '
         'rule only works if both ends use it. Every reported statement names the speaker '
         'and the capacity. Drafts are checked against the note. A personal remark carries '
         'the words speaking personally. Where there is no note, the message says so. Dalia '
         'adds one line at her end: a submission quotes the capacity or it does not quote.',
 outcome_q=[('What must every reported statement name?', 'the speaker and the capacity'),
            ('What is a draft checked against?', 'the written note'),
            ('How is a personal remark marked?', 'with the words speaking personally'),
            ('What if there is no note?', 'the message says the account is from memory'),
            ('What line did Dalia add?', 'a submission quotes the capacity or it does not quote')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Send something to the capital about the meeting',
 task=['An officer was asked to report a meeting to the capital before the end of the day.',
       'This is the instruction and what arrived in the desk officer’s inbox.'],
 draft=['Send something to the capital about the meeting.',
        'Cover the main points.',
        'Copy the usual people.',
        'Keep it reasonably short.',
        'Flag anything they should know.',
        'Get it off tonight.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which meeting, which people, or how short.',
 asked=['Something about the meeting', 'The main points', 'The usual people'],
 back=['3 pages', '14 recipients', 'No subject line, no action'],
 gap='Nobody said which meeting, what main means, or who the usual people are.',
 back_cap='Three pages reached fourteen people and nobody knew what to do with them.',
 back_note='Two of the fourteen recipients had left their posts, because the usual people '
           'was a distribution list last edited two years ago.',
 diagnosis=[('“something about the meeting”', 'unscoped set'),
            ('“the main points”', 'unstated criterion'),
            ('“the usual people”', 'unscoped set'),
            ('“reasonably short”', 'unbounded quantity'),
            ('“anything they should know”', 'unstated criterion'),
            ('“tonight”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that only one message can be sent.',
 scaffold=['why the capital needs this message',
           'which meeting, with its date and participants',
           'which notes the account is drawn from',
           'what the message must contain, line by line',
           'how long it is, and the time it is sent by',
           'what to do about a point you cannot source'],
 bank=['Purpose: so that the desk can decide …',
       'Scope: the meeting of … only; the earlier call is not covered',
       'Inputs: my written note of …, taken at …',
       'Criteria: … lines: subject with action, what was said, capacity, undecided, recommendation, next step',
       'Done: … lines to …, copied to …, sent by … on …',
       'Fallback: a point with no note is marked from memory or left out'],
 check=['Is the meeting identified by date?',
        'Is the recipient list named, not described?',
        'Is there a number of lines?',
        'Is there a time for sending?'],
 model=['so that the desk can decide whether to propose alternative dates',
        'the meeting of 14 October with the protocol department only',
        'my written note of 14 October, taken at 11:20',
        '6 lines: subject with action, what was said, capacity, undecided, recommendation, next step',
        '6 lines to the Verenia desk, copied to the 2 named officers, sent by 18:00 today',
        'a point with no note is marked from memory, or left out'],
 cost='3 pages took 90 minutes to write and were read by nobody in full. The 6-line version '
      'took 11 minutes and was answered the same evening.'),

feet=dict(
 title='On Your Feet · The capital telephones about one sentence',
 setting=[
  'It is 09:10 and the desk officer in the capital is on the line. A sentence from your '
  'message of last week has been quoted in a submission, and the host ministry has now said '
  'something different. She is not accusing you. She needs to know, this morning, what was '
  'actually said and how firm it was.',
  'You have your note somewhere. You remember the conversation, but not word for word. The '
  'submission is already with a minister’s office. You have about ninety seconds, and '
  'everything you say will be written down at her end.'],
 ladder=[('What exactly did he say?', 'separate your note from your memory'),
         ('Was that the department?', 'give the capacity, even when it weakens you'),
         ('Can we still use it?', 'the turn where you must not rescue yourself')],
 cap='Three turns. The third turn tempts you to make the sentence survive.',
 turns=[('Turn 1 · Desk officer', 'Can you tell me exactly what the official said about November?'),
        ('Turn 2 · Desk officer', 'And was he speaking for the department, or for himself?'),
        ('Turn 3 · Desk officer', 'So can I leave the sentence in the submission, or not?')],
 holds=['I have my note in front of me. I will read you the words I wrote.',
        'That part is from my note. The next part is from memory, and I will say so.',
        'He said hoped, not expected. The difference is mine to own.',
        'He told me he was speaking personally, and I did not carry that into my message.',
        'My recommendation is that the sentence comes out. It is not strong enough to stand.',
        'I can have a corrected two-line version with you in fifteen minutes.'],
 redline='You must not say that the sentence is probably still right, you must not blame the '
         'drafting, and you must not offer a new source you have not spoken to. Your own '
         'error is smaller than a second wrong sentence sent to repair the first.',
 score=['Separated the note from the memory, out loud, in the first answer.',
        'Gave the capacity even though it weakened the Mission’s reporting.',
        'Owned the change of word without explaining it away.',
        'Recommended the safe course rather than defending the sentence.',
        'Offered a concrete repair with a time on it.'],
 a=[('What do you read from, in the first answer?', 'your written note'),
    ('What must you say about the rest?', 'that it is from memory'),
    ('Which word did he actually use?', 'hoped'),
    ('What capacity was he speaking in?', 'his own, personally'),
    ('What do you recommend about the sentence?', 'that it comes out of the submission'),
    ('What must you not do to repair it?', 'offer a new source you have not spoken to')]),

rev_fig=figs.split('REPORTING A CONVERSATION',
                   'A sentence a capital cannot use',
                   ['They are positive about November.',
                    'The ministry expects to confirm.',
                    'It went well.',
                    'They agreed in principle.'],
                   'A sentence a capital can use',
                   ['One official, speaking personally, said the department hoped to confirm.',
                    'Nothing was decided and no date was given.',
                    'My own assessment is that February is more likely.',
                    'I will ask in writing on Monday.']),
rev_fig_cap='The right-hand column says who spoke, how firmly, and what is still open.',
rev=dict(
 read=[('When did Dalia read the first message?', ['at six in the evening', 'at eight', 'at noon', 'not at all'], 0),
       ('Which word did the draft change?', ['hoped to expects', 'may to might', 'said to told', 'met to saw'], 0),
       ('What must every reported statement name?',
        ['the speaker and the capacity', 'the date only', 'the building', 'the language'], 0),
       ('What is a draft checked against?',
        ['the written note', 'your memory', 'the previous message', 'the system'], 0)],
 listen_text='Use a draft for shape, not for content. Then ask one question: has any word '
             'become stronger than what I heard? Will, expects, agreed, confirmed, the '
             'department. Each one turns a conversation into a commitment.',
 listen=[('Use a draft for ____________, not for content.', 'shape'),
         ('Has any word become ____________ than what I heard?', 'stronger'),
         ('Will, expects, agreed, ____________.', 'confirmed'),
         ('Each one turns a conversation into a ____________.', 'commitment')],
 speak=['Report a meeting to your partner twice, firmly and then carefully.',
        'Your partner says which words carried certainty, and whether they were earned.'],
 write='Write a six-line message to a capital reporting one conversation.',
 vocab=[('The line that says what a message is about is the ____________ line.', 'subject'),
        ('A task with an owner and a date is an ____________ point.', 'action'),
        ('A short message asking for a reply is a ____________.', 'chaser'),
        ('A message and all its replies are a ____________.', 'thread')],
 gram=[('On Monday she ____________ to the ministry. (go)', 'went'),
       ('He ____________ me yesterday. (tell)', 'told'),
       ('____________ she send it at six? (do)', 'Did'),
       ('They ____________ at four. (meet)', 'met')]),

found=['Write five subject lines for messages you sent last month, with action and date.',
       'Compare one of your drafts with your notes and list every word that grew stronger.',
       'Learn the twenty irregular past forms you use most at work.',
       'Agree with your desk officer what no action should look like in a subject line.'],
end_line='Use the draft for shape. Keep the hedges exactly where the other person put them.',
end_next='Next: The Diary and the Appointment')
