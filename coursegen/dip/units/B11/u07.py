# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='Notes That Become a Record',
gram='the past continuous and the past simple together',
ai='notes into a record, without inventing what was said',
strap='CEFR B1 · Grammar: the past continuous and the past simple together · '
      'AI: notes into a record, without inventing what was said',
cando=['narrate events with the past continuous and the past simple',
       'turn rough notes into a record of conversation',
       'distinguish what was said from what was meant',
       'say what a drafting system may and may not add to a record',
       'write a six-line record of conversation'],

hero=('A RECORD THAT WAS SMOOTHER THAN THE MEETING HAD BEEN',
      ['While the director was speaking, the officer wrote nine words.',
       'The record that came back had four sentences and a conclusion.'],
      [(720, 'teal', 'long'), (720, 'grey', 'short'), (720, 'purple', 'long')]),
hero_cap='A notebook with nine words on the page, beside a printed record with four paragraphs.',

warm=['How much do you write down while somebody is talking?',
      'What is the difference between what somebody said and what they meant?',
      'Who reads your notes after you have left a post?'],

read=[
 'A record of conversation is the main product of a mission. Somebody met somebody, '
 'something was said, and the record is the only part of it that will exist in four years. '
 'Everything else is memory, and memory leaves with the officer.',
 'The problem is physical. While a director is speaking, an officer is listening, thinking '
 'about the next question and writing at the same time. Nine words on a page is a normal '
 'result, and nine words is not a record.',
 'So the notes are expanded afterwards, usually within the hour, while the memory is still '
 'warm. This is the dangerous moment. The expansion is honest and it is also '
 'reconstruction, and reconstruction smooths a conversation into something tidier than it was.',
 'Omar was writing notes while the director was explaining the licensing changes. He wrote '
 'four words about timing. When he expanded them, he produced a sentence giving a date the '
 'director had not given, because a date was the obvious thing to have meant.',
 'A drafting system makes this faster and the risk larger. Given nine words it will produce '
 'four fluent sentences, and the four sentences will contain things that were not in the '
 'nine words, written in the same confident voice as the things that were.'],

dp1=('Why records are written within the hour', 'Reporting practice commonly requires a '
     'record of conversation to be written while contemporaneous notes are still '
     'intelligible, and to distinguish on its face between what was recorded at the time '
     'and what is supplied from memory.',
     'Source: reported reporting practice, 2025–2026.'),

c_a=[('What is the main product of a mission?', 'a record of conversation'),
     ('Why is note-taking difficult?', 'an officer listens, thinks and writes at the same time'),
     ('When are notes expanded?', 'usually within the hour'),
     ('What was Omar doing while the director explained?', 'writing notes'),
     ('What did his expansion add?', 'a date the director had not given'),
     ('What does a drafting system add to nine words?', 'four fluent sentences')],

c_b=[('Memory stays at a post after an officer leaves.', 'F'),
     ('Nine words on a page is unusual.', 'F'),
     ('Expansion is dishonest by nature.', 'F'),
     ('Reconstruction tends to smooth a conversation.', 'T'),
     ('The director gave a date.', 'F'),
     ('A system writes additions in a different voice.', 'F')],

c_c=[('While the director ____________ (speak), the officer wrote nine words.', 'was speaking'),
     ('He ____________ (write) notes when the telephone rang.', 'was writing'),
     ('She ____________ (leave) the room while he was explaining.', 'left'),
     ('They ____________ (discuss) the changes when the minister arrived.', 'were discussing'),
     ('He ____________ (notice) the gap while he was expanding the notes.', 'noticed'),
     ('We ____________ (wait) outside when the meeting ended.', 'were waiting')],

c_d=[('The past continuous describes ( a completed action / a longer action in progress ).', ['a completed action', 'a longer action in progress'], 1),
     ('Nine words is ( not a record / a sufficient record ).',
      ['not a record', 'a sufficient record'], 0),
     ('Expansion is dangerous because it is ( reconstruction / dishonest ).',
      ['reconstruction', 'dishonest'], 0),
     ('The added date was ( the obvious thing to have meant / a deliberate invention ).',
      ['the obvious thing to have meant', 'a deliberate invention'], 0),
     ('A system’s additions are written ( in the same voice as the rest / in brackets ).',
      ['in the same voice as the rest', 'in brackets'], 0)],

c_e=('Past simple or past continuous? Put each verb in the right column.',
     [('was speaking', 'past continuous'),
      ('wrote', 'past simple'),
      ('were discussing', 'past continuous'),
      ('left', 'past simple'),
      ('was expanding', 'past continuous'),
      ('noticed', 'past simple')],
     ['past simple', 'past continuous']),

v_fig_title='FROM NINE WORDS TO A RECORD',
v_fig=[('doc', 'a contemporaneous note'), ('people', 'an attribution'), ('key', 'a verbatim note'),
       ('chart', 'a paraphrase'), ('clock', 'a draft record'), ('door', 'a disputed passage')],
v_fig_cap='Six words for the distance between a notebook and a file.',

vocab=[
 ('a record of conversation', 'the official written account of a meeting or a call'),
 ('a verbatim note', 'a note of the exact words used'),
 ('a paraphrase', 'a restatement of what was said in different words'),
 ('an attribution', 'the naming of the person to whom a statement belongs'),
 ('a time of writing', 'the moment at which a record was actually written'),
 ('a contemporaneous note', 'a note made at the time of the events it describes'),
 ('a recollection', 'what a person remembers, as distinct from what was recorded'),
 ('a draft record', 'a record not yet cleared or filed'),
 ('a clearance', 'the approval of a text by the officer responsible for it'),
 ('a correction', 'a change made to put right something recorded wrongly'),
 ('an addendum', 'material added to a record after it was written'),
 ('a marginal note', 'a remark written beside the main text'),
 ('a transcript', 'a full written version of what was spoken'),
 ('a summary of points', 'a short list of the matters covered'),
 ('a disputed passage', 'a part of a record that the participants do not agree about'),
 ('a note-taker', 'the person whose task in a meeting is to record it'),
 ('an agreed action', 'something the parties have undertaken to do'),
 ('a file reference', 'the code by which a record is found again'),
 ('an aide-memoire', 'a short written note left with a counterpart after a conversation'),
 ('a point of record', 'a statement recorded so that it may be relied on later')],

v_a=[('A note of the exact words used is a ____________ note.', 'verbatim'),
     ('A note made at the time is a ____________ note.', 'contemporaneous'),
     ('The naming of the person a statement belongs to is an ____________.', 'attribution'),
     ('A part of a record the participants disagree about is a ____________ passage.', 'disputed'),
     ('Material added later is an ____________.', 'addendum'),
     ('A short note left with a counterpart is an ____________.', 'aide-memoire'),
     ('The code by which a record is found is a file ____________.', 'reference'),
     ('A statement recorded so it may be relied on is a point of ____________.', 'record')],

v_b=[('A paraphrase is a restatement of what was said', 'in different words.'),
     ('A recollection is what a person remembers,', 'as distinct from what was recorded.'),
     ('A clearance is the approval of a text', 'by the officer responsible for it.'),
     ('A transcript is a full written version', 'of what was spoken.'),
     ('An agreed action is something the parties', 'have undertaken to do.')],

g_title='Grammar: the past continuous and the past simple together',
g_rule=['The past continuous sets the longer action: While the director was speaking…',
        'The past simple gives the shorter event inside it: …the telephone rang.',
        'Use while or as with the continuous, and when with the simple.',
        'Two continuous actions at once: While he was writing, she was listening.'],
g_fig=('WRONG',
       ['While the director spoke, the telephone was ringing once.',
        'When he was writing, the meeting was ending suddenly.',
        'She was leaving the room while he explained a long time.',
        'They discussed it when the minister was arriving.'],
       'RIGHT',
       ['While the director was speaking, the telephone rang.',
        'When he had written it, the meeting ended.',
        'She left the room while he was explaining.',
        'They were discussing it when the minister arrived.'],
       'four sentences with the tenses the wrong way round',
       'the same four, the long action and the short one in place'),
g_fig_cap='The continuous is the background. The simple is what happened in front of it.',

g_a=[('While the director ____________ (speak), the officer wrote nine words.', 'was speaking'),
     ('He ____________ (write) notes when the telephone rang.', 'was writing'),
     ('She ____________ (leave) the room while he was explaining.', 'left'),
     ('They ____________ (discuss) the changes when the minister arrived.', 'were discussing'),
     ('He ____________ (notice) the gap while he was expanding the notes.', 'noticed'),
     ('We ____________ (wait) outside when the meeting ended.', 'were waiting'),
     ('As I ____________ (read) the draft, I found two added facts.', 'was reading'),
     ('The line ____________ (go) dead while she was speaking.', 'went'),
     ('What ____________ you (do) when the record arrived?', 'were')],

g_b=[('While the director ( was speaking / spoke ), the telephone rang.', ['was speaking', 'spoke'], 0),
     ('She ( left / was leaving ) the room while he was explaining.',
      ['left', 'was leaving'], 0),
     ('They ( were discussing / discussed ) it when the minister arrived.',
      ['were discussing', 'discussed'], 0),
     ('The line ( went / was going ) dead while she was speaking.',
      ['went', 'was going'], 0),
     ('As I ( was reading / read ) the draft, I found two added facts.',
      ['was reading', 'read'], 0),
     ('What ( were you doing / did you do ) when it arrived?',
      ['were you doing', 'did you do'], 0)],

d1=dict(
 title='Nine words and four sentences',
 fig=(['Your note says four words about timing.', 'And the record says a date.'],
      ['Where did the date come from?', 'From the obvious meaning.']),
 cap='Bassel Tannous and Omar, a visiting translation officer, over a draft record.',
 lines=[('Bassel', 'Your note on timing is four words. The record gives a date.'),
        ('Omar', 'The date was what he obviously meant.'),
        ('Bassel', 'Obviously to you, in the room, an hour later.'),
        ('Omar', 'He said the changes would come in before the end of the quarter.'),
        ('Bassel', 'Is that in your note?'),
        ('Omar', 'My note says changes, quarter, before.'),
        ('Bassel', 'Then write changes, quarter, before, and say that the note is in three words.'),
        ('Omar', 'That looks thin.'),
        ('Bassel', 'Thin and true. The reader can ask. They cannot unask a date.'),
        ('Omar', 'And if the capital needs a date to plan?'),
        ('Bassel', 'Then we go back and ask him for one, which takes four minutes.'),
        ('Omar', 'And the record says that we asked, and when.')],
 a=[('How many words were in the note on timing?', 'four'),
    ('What did the record give?', 'a date'),
    ('What did the note actually say?', 'changes, quarter, before'),
    ('What does Bassel prefer?', 'thin and true'),
    ('What happens if the capital needs a date?', 'they go back and ask for one')],
 b=[('Obviously to you, in the ____________.', 'room'),
    ('Thin and ____________.', 'true'),
    ('They cannot ____________ a date.', 'unask'),
    ('The record says that we ____________ .', 'asked')]),

d2=dict(
 title='It filled the gaps because gaps are untidy',
 fig=(['Nine words in, four sentences out.', 'Where did the rest come from?'],
      ['From what usually follows.', 'Not from the meeting, then.']),
 cap='Nour and Rim Haddad, comparing a note with a generated record.',
 lines=[('Nour', 'I gave it nine words of notes and it produced four sentences.'),
        ('Rim', 'Were the four sentences wrong?'),
        ('Nour', 'Three were right. The fourth said the director welcomed the proposal.'),
        ('Rim', 'Did he?'),
        ('Nour', 'He said nothing about it at all. He moved on to the next item.'),
        ('Rim', 'So it supplied the normal ending of that kind of exchange.'),
        ('Nour', 'Exactly. It wrote what usually happens, not what happened.'),
        ('Rim', 'And the sentence looks exactly like the three that are true.'),
        ('Nour', 'That is what worries me. I cannot see which is which afterwards.'),
        ('Rim', 'Then mark the notes before you expand them. Verbatim in quotation marks.'),
        ('Nour', 'And everything not in quotation marks is reconstruction.'),
        ('Rim', 'And when you remember something clearly that you did not write down?')],
 unresolved=True,
 a=[('How many sentences came from nine words?', 'four'),
    ('How many were right?', 'three'),
    ('What did the fourth say?', 'that the director welcomed the proposal'),
    ('What did the director actually do?', 'he moved on to the next item'),
    ('What does Rim suggest?', 'marking verbatim notes in quotation marks')],
 b=[('It wrote what ____________ happens.', 'usually'),
    ('It looks exactly like the three that are ____________.', 'true'),
    ('Mark the notes before you ____________ them.', 'expand'),
    ('Everything not in quotation marks is ____________.', 'reconstruction')]),

speak=[('Background and event',
        ['Describe six moments at work with while and when.',
         'Each sentence must have one continuous and one simple verb.',
         'Your partner says which action was the background.']),
       ('Nine words',
        ['Your partner talks for ninety seconds about their work.',
         'Write no more than nine words while they speak.',
         'Then reconstruct it aloud and let them correct you.']),
       ('Said or meant',
        ['Read out six sentences from a record.',
         'Your partner marks each as what was said or what was meant.',
         'Rewrite the meant ones so that they are honest.'])],

ext_title='A record is worth exactly what the reader can trust about where each sentence came from',
ext_fig=figs.datatable('NINE WORDS, FOUR SENTENCES',
                       ['Sentence in the record', 'Source', 'Safe?'],
                       [['changes expected in the quarter', 'the note', 'yes'],
                        ['licensing section will consult', 'the note', 'yes'],
                        ['no date was given', 'the note, by absence', 'yes'],
                        ['the director welcomed the proposal', 'what usually happens', 'no'],
                        ['a date before 30 June', 'the officer’s inference', 'no'],
                        ['the meeting lasted 25 minutes', 'the diary', 'yes']]),
ext_fig_cap='Four of six sentences are traceable. The two that are not look exactly like the four that are.',
ext=[
 'Note-taking is a physical problem before it is an intellectual one. While somebody is '
 'speaking, an officer is listening, forming the next question and writing. Something has '
 'to give, and what gives is the writing. Nine words on a page is normal.',
 'The record is therefore always a reconstruction. That is not a scandal; it is the nature '
 'of the work, and it is why records are written within the hour and why the best officers '
 'develop a shorthand that captures numbers, names and the exact words that matter.',
 'The risk is that reconstruction tidies. A conversation that wandered becomes an argument '
 'in three parts. A silence becomes agreement. A hesitation becomes a position. None of '
 'this is dishonest, and all of it is wrong.',
 'A drafting system does the tidying faster and more convincingly. Given nine words it '
 'produces four well-formed sentences, and some of them will describe what usually happens '
 'in such a meeting rather than what happened in this one.',
 'The remedy is traceability. Mark verbatim notes in quotation marks. Mark reconstruction '
 'as reconstruction. Write no date, no number and no agreement that is not in the notes, '
 'and say in the record that the point was not covered, which is itself information.'],

dp2=('Marking what is verbatim', 'Record-keeping guidance commonly asks officers to '
     'distinguish verbatim quotation from paraphrase within the body of a record, so that a '
     'later reader can tell which sentences can be relied on as the speaker’s own words.',
     'Source: reported record-keeping practice, 2025–2026.'),

e_a=[('Why is note-taking physically difficult?', 'listening, thinking and writing happen at once'),
     ('Why are records written within the hour?', 'because they are reconstructions and memory fades'),
     ('What does reconstruction tend to do?', 'tidy a conversation into something it was not'),
     ('What does a drafting system add?', 'what usually happens in such a meeting'),
     ('What is the remedy?', 'traceability: marking verbatim and reconstruction')],
e_b=[('Nine words is an unusual result.', 'F'),
     ('A record is always a reconstruction.', 'T'),
     ('Tidying is dishonest by intention.', 'F'),
     ('A system marks its additions clearly.', 'F'),
     ('Not covering a point is information.', 'T'),
     ('Quotation marks help a later reader.', 'T')],

w_model='Purpose: so that a reader in four years can tell what was said from what was '
        'understood. Scope: the meeting with the licensing director on 9 May; the corridor '
        'conversation afterwards is recorded separately. Inputs: my contemporaneous notes, '
        'written in the meeting, and the diary for the timings. Criteria: 6 lines, with '
        'verbatim words in quotation marks, every other sentence marked as paraphrase, and '
        'any point not covered stated as not covered. Done: 6 lines in the file within 60 '
        'minutes of the meeting. Fallback: where memory and notes differ, the notes are '
        'recorded and the memory is added as a marked recollection.',
w_fig=figs.spec_card('SIX LINES A READER CAN WEIGH',
                     [('Purpose', 'said and understood, kept apart'),
                      ('Scope', 'the meeting of 9 May only'),
                      ('Inputs', 'contemporaneous notes and the diary'),
                      ('Criteria', 'verbatim in quotes, paraphrase marked, gaps stated'),
                      ('Done', 'in the file within 60 minutes'),
                      ('Fallback', 'notes recorded; memory added as a marked recollection')]),
w_fig_cap='The phrase not covered is one of the most useful in a record.',
w_task='Write a six-line record of a conversation you have had.',
w_steps=['Line 1: who met whom, where and when, with the duration.',
         'Line 2: the first point, with any exact words in quotation marks.',
         'Line 3: the second point, marked as paraphrase.',
         'Line 4: anything agreed, with who undertook what.',
         'Line 5: one point that was not covered, stated as not covered.',
         'Line 6: your own assessment, marked as yours.'],
w_bank=['… met … at … on … ; the meeting lasted … minutes.',
        'He said that “…”.',
        'In substance, and not verbatim, he explained that … .',
        'No date was given and the point was not pressed.',
        'My own assessment, which he did not confirm, is that … .'],
w_check=['Are verbatim words in quotation marks?',
         'Is every paraphrase marked as one?',
         'Is at least one gap stated?',
         'Is your assessment clearly separated?'],

t_title='Notes into a record, without inventing what was said',
t_fig=figs.split('NINE WORDS OF NOTES',
                 'Ask for this',
                 ['order the points as they were raised',
                  'expand only what is in the notes',
                  'list every point the notes do not cover',
                  'keep my abbreviations as I wrote them'],
                 'Refuse this',
                 ['a natural-sounding narrative',
                  'a conclusion that rounds it off',
                  'the usual ending of such a meeting',
                  'any date or number not in the notes']),
t_fig_cap='The left column saves twenty minutes. The right column is what makes the record evidence.',
t_body=[
 'Expanding notes into a record is slow, dull work that a system does quickly. Give it the '
 'notes and ask for the points in the order they were raised, expanded only from what is '
 'there, with your abbreviations preserved rather than interpreted.',
 'Then ask for the opposite list, which is the valuable one: every point the notes do not '
 'cover. That list tells you what to go back and ask, and it is far easier to see from '
 'outside a conversation than from inside it.',
 'What you must forbid is completion. A fluent record of a wandering meeting is a false '
 'record. Say explicitly that no date, number, agreement or reaction may appear unless it '
 'is in the notes, and that a gap must be written as a gap.'],
t_say=[('Bound the expansion: ', 'Expand only what is in these notes; add nothing.'),
       ('Ask for the gaps: ', 'List every point these notes do not cover.'),
       ('Forbid completion: ', 'No date, number or reaction that is not written here.')],
t_bound='A system expanding notes does not know what happened in the room, so it supplies '
        'what usually happens. It writes a supplied sentence in the same voice as a recorded '
        'one, and the record gives a later reader no way to tell them apart.',
t_a=[('Expand only what is in these ____________.', 'notes'),
     ('List every point these notes do not ____________.', 'cover'),
     ('No date, number or ____________ that is not written here.', 'reaction'),
     ('It supplies what ____________ happens.', 'usually'),
     ('A supplied sentence is in the same ____________ as a recorded one.', 'voice'),
     ('A gap must be written as a ____________.', 'gap')],
t_b_rubric='Say whether each sentence may appear in the record, and why.',
t_b=[('He said “before the end of the quarter”.', 'yes: it is verbatim and in the notes'),
     ('The changes will take effect on 30 June.', 'no: the date was inferred, not given'),
     ('The director welcomed the proposal.', 'no: nothing was said; he moved on'),
     ('The question of fees was not covered.', 'yes: a stated gap is information')],

case=dict(
 title='The Decision Room · The sentence that nobody said',
 brief=[
  'On 9 May an officer meets the licensing director for twenty-five minutes and takes nine '
  'words of notes. Within the hour he expands them with help into a record of four '
  'sentences, which is cleared and filed.',
  'One sentence says that the director welcomed the Mission’s proposal. The director said '
  'nothing about the proposal. He moved to the next item without comment, which is a '
  'different fact and, in licensing, an important one.',
  'In September the capital cites the record in a submission. In October the director tells '
  'a visiting delegation that he has never expressed a view on the proposal. The Mission '
  'has a cleared record saying that he did.'],
 exhibit=figs.datatable('WHERE EACH SENTENCE CAME FROM',
                        ['Sentence', 'In the notes?', 'In the meeting?'],
                        [['changes expected this quarter', 'yes', 'yes'],
                         ['licensing section will consult', 'yes', 'yes'],
                         ['no date was given', 'by absence', 'yes'],
                         ['the director welcomed the proposal', 'no', 'no'],
                         ['cleared by', '—', 'the consul'],
                         ['cited in a submission', '—', 'September']]),
 exhibit_cap='Three sentences were traceable. The fourth was the one the capital used.',
 exhibit_note='Nobody invented anything deliberately. The sentence is what usually follows '
              'a proposal in such a meeting, which is exactly why it was written and why '
              'nobody questioned it.',
 voices=[('Nour Ajami', 'third secretary',
          'Expanding nine words took four minutes instead of forty. I am not going back to forty.'),
         ('Rim Haddad', 'consular assistant',
          'Then mark what is verbatim. Four minutes plus quotation marks is still four minutes.'),
         ('Bassel Tannous', 'consul',
          'I cleared it. I read four fluent sentences and did not ask where the fourth came from.')],
 steps=[('Find it', 'Which sentence was not in the notes?'),
        ('Compare it', 'What did the director actually do?'),
        ('Infer it', 'Why did nobody question it at clearance?'),
        ('Weigh it', 'Quotation marks against a disputed sentence in a ministerial submission.'),
        ('Decide', 'What must a record show about each sentence?')],
 analysis=[('Find it. Which sentence was unsupported?', 'that the director welcomed the proposal'),
           ('Compare it. What did he do?', 'he moved to the next item without comment'),
           ('Infer it. Why was it not questioned?', 'it read exactly like the three true sentences'),
           ('Weigh it. What did it cost?', 'a cleared record contradicted by the director himself'),
           ('Decide. What must a record show?', 'where each sentence came from')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how verbatim words are marked.',
                 'Say what may not appear in a record.',
                 'Say how a gap is recorded.',
                 'Say what the clearing officer must ask.'],
 bank=['Verbatim words appear in quotation marks; everything else is marked as paraphrase.',
       'No date, number, agreement or reaction appears unless it is in the notes.',
       'A point not covered is recorded as not covered.',
       'The clearing officer asks, for any striking sentence, where it came from.'],
 outcome='The Mission corrects the record, notifies the capital and tells the director’s '
         'office in writing that the sentence was the Mission’s error. The record now shows '
         'its sources: quotation marks for verbatim, a marked paraphrase for the rest, and '
         'the words not covered wherever a point was not reached. Clearance adds one '
         'question, asked of any sentence that sounds like a conclusion: where did this '
         'come from?',
 outcome_q=[('What did the Mission tell the director’s office?', 'that the sentence was the Mission’s error'),
            ('What marks verbatim words?', 'quotation marks'),
            ('How is an uncovered point recorded?', 'with the words not covered'),
            ('What question does clearance add?', 'where did this sentence come from'),
            ('Who corrected the record?', 'the Mission')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Write up the meeting',
 task=['An officer came back from a ministry with a notebook and was asked for a record.',
       'This is the instruction as it was given, and what was filed.'],
 draft=['Write up the meeting.',
        'Include the main points.',
        'Make it read properly.',
        'Fill in anything obvious.',
        'Get it on the file today.',
        'Flag anything we should follow up.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and one of them positively invites the officer to invent.',
 asked=['The main points', 'Reads properly', 'Anything obvious filled in'],
 back=['4 fluent sentences', '2 of them not in the notes', '0 gaps recorded'],
 gap='Nobody said what may not be added, how verbatim is marked, or that gaps must be stated.',
 back_cap='Four sentences, two of them supplied, and no sign on the page of which was which.',
 back_note='Fill in anything obvious is the single most dangerous instruction in reporting, '
           'because what is obvious an hour later is usually what normally happens.',
 diagnosis=[('“the main points”', 'unstated criterion'),
            ('“make it read properly”', 'unstated criterion'),
            ('“anything obvious”', 'ambiguous referent'),
            ('“anything we should follow up”', 'ambiguous referent'),
            ('“write up the meeting”', 'unscoped set'),
            ('“today”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that nothing can be supplied without being marked.',
 scaffold=['why the record exists and who will read it',
           'which meeting, and what is excluded',
           'which notes it is drawn from',
           'what may appear, how it is marked, and what may not',
           'how long it is and by when it is filed',
           'what to do where memory and notes differ'],
 bank=['Purpose: so that a reader in … years can tell what was said from what was understood',
       'Scope: the meeting of … only; the corridor conversation is recorded separately',
       'Inputs: my contemporaneous notes and the diary',
       'Criteria: verbatim in quotation marks, paraphrase marked, nothing added',
       'Done: … lines in the file within … minutes',
       'Fallback: where memory and notes differ, the notes are recorded and memory marked'],
 check=['Does it forbid additions?',
        'Does it say how verbatim is marked?',
        'Does it require gaps to be stated?',
        'Is there a time limit in minutes?'],
 model=['so that a reader in four years can tell what was said from what was understood',
        'the meeting of 9 May with the licensing director; the corridor exchange is separate',
        'my contemporaneous notes of 9 May and the diary entry for the timings',
        'verbatim words in quotation marks; all else marked as paraphrase; no date or reaction added',
        '6 lines in the case file within 60 minutes of the meeting',
        'where memory and notes differ, the notes are recorded and the memory marked as recollection'],
 cost='2 supplied sentences survived clearance and 1 was cited in a submission 4 months '
      'later. Quotation marks would have cost 20 seconds.'),

feet=dict(
 title='On Your Feet · The director says he never said it',
 setting=[
  'You are at a reception. The licensing director, pleasantly and in front of two other '
  'guests, mentions that he has heard your Mission believes he welcomed its proposal, and '
  'that he has never expressed a view on it at all.',
  'He is right. Your Mission’s record says he welcomed it, the record has been cleared and '
  'cited, and you were not at the meeting. You have about ninety seconds and two witnesses.'],
 ladder=[('I never said that', 'accept without conceding what you do not know'),
         ('Your record says otherwise', 'the turn where you must not defend the file'),
         ('Perhaps somebody misunderstood', 'the escape he offers you')],
 cap='Three turns, two witnesses, and a cleared record you cannot rely on.',
 turns=[('Turn 1 · Director', 'I am told your Mission believes I welcomed the proposal. I never said so.'),
        ('Turn 2 · Director', 'And yet your record apparently says it. How does that happen?'),
        ('Turn 3 · Director', 'No doubt somebody simply misunderstood me. These things happen.')],
 holds=['Thank you for telling me directly. I would rather hear it from you.',
        'I was not at that meeting, so I will not try to tell you what was said.',
        'If our record says that and you did not say it, then our record is wrong.',
        'I will check it against the notes tomorrow and write to you either way.',
        'It would not be right for me to say it was a misunderstanding until I know.',
        'If it was our error, you will have that in writing from us, not only from me.'],
 redline='You must not defend the record, you must not blame your colleague in front of '
         'guests, and you must not accept his kind suggestion that it was a misunderstanding '
         'before you know. Do not promise that the record will be corrected before you have '
         'seen the notes.',
 score=['Thanked him for raising it directly.',
        'Said plainly that you were not there and would not guess.',
        'Accepted the possibility that the Mission is wrong, without conceding the fact.',
        'Refused the easy excuse he offered.',
        'Committed to checking against the notes and writing either way.'],
 a=[('What do you say first?', 'thank him for raising it directly'),
    ('What do you admit immediately?', 'that you were not there and will not guess'),
    ('What do you not defend?', 'the record'),
    ('Why refuse his suggestion?', 'you do not yet know whether it was a misunderstanding'),
    ('What do you commit to?', 'checking the notes and writing either way'),
    ('What must you not do in front of guests?', 'blame your colleague')]),

rev_fig=figs.split('A RECORD OF CONVERSATION',
                   'A sentence a reader cannot weigh',
                   ['He welcomed the proposal.',
                    'The changes come in on 30 June.',
                    'He was broadly positive.',
                    'We agreed to keep in touch.'],
                   'A sentence a reader can weigh',
                   ['He said “before the end of the quarter”.',
                    'No date was given; the point was not pressed.',
                    'In substance, not verbatim, he explained that…',
                    'My own assessment, which he did not confirm, is…']),
rev_fig_cap='Every line on the right says where it came from.',
rev=dict(
 read=[('How many words were in the notes?', ['nine', 'four', 'ninety', 'none'], 0),
       ('Which sentence was unsupported?',
        ['that he welcomed the proposal', 'that changes were expected',
         'that no date was given', 'that the section would consult'], 0),
       ('How are verbatim words marked?',
        ['in quotation marks', 'in capitals', 'in bold', 'not at all'], 0),
       ('What question does clearance now ask?',
        ['where did this sentence come from', 'is it long enough', 'is it fluent', 'who typed it'], 0)],
 listen_text='Expand only what is in the notes. Ask for the list of points the notes do not '
             'cover. Forbid any date, number, agreement or reaction that is not written '
             'down, and record a gap as a gap.',
 listen=[('Expand only what is in the ____________.', 'notes'),
         ('Ask for the points the notes do not ____________.', 'cover'),
         ('Forbid any date, number, agreement or ____________.', 'reaction'),
         ('Record a gap as a ____________.', 'gap')],
 speak=['Take nine words of notes while your partner speaks for ninety seconds.',
        'Reconstruct it aloud, marking which parts are reconstruction.'],
 write='Write a six-line record of a conversation you have had.',
 vocab=[('A note of the exact words used is a ____________ note.', 'verbatim'),
        ('A note made at the time is a ____________ note.', 'contemporaneous'),
        ('Material added later is an ____________.', 'addendum'),
        ('A short note left with a counterpart is an ____________.', 'aide-memoire')],
 gram=[('While he ____________ speaking, the telephone rang.', 'was'),
       ('She ____________ the room while he was explaining. (leave)', 'left'),
       ('They ____________ discussing it when she arrived.', 'were'),
       ('The line ____________ dead while she was speaking. (go)', 'went')]),

found=['Mark the verbatim parts of your next set of notes in quotation marks.',
       'Write not covered in your next record wherever a point was not reached.',
       'Ask of one cleared record: where did each sentence in it come from?',
       'Develop a shorthand for numbers, names and the exact words that matter.'],
end_line='Expand what is there. Mark what is yours. Write the gaps as gaps.',
end_next='Next: A Cable of One Page')
