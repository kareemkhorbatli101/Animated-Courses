# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='From Notes to a Record',
gram='present simple and present continuous for procedure and state',
ai='turning notes of a conversation into a record',
strap='CEFR B1 · Grammar: present simple and continuous · AI: notes into a record',
cando=['describe a standing procedure in the present simple',
       'describe what is happening now in the present continuous',
       'turn rough notes into a record somebody can rely on',
       'say what a record must contain and what it must not add',
       'explain why a smooth record can be less true than a rough one'],
hero=('SEVEN PAGES OF NOTES, ONE PAGE OF RECORD',
      ['The record read beautifully. Every sentence was clear.',
       'The one hesitation that mattered had been tidied away.'],
      [(740, 'blue', 'short'), (1400, 'teal', 'long'),
       (2060, 'purple', 'short'), (2700, 'orange', 'long')]),
hero_cap='The Verenia desk, forty minutes after the call ended.',

warm=['Who writes the record of a meeting in your office, and when?',
      'What must a record contain before anybody can rely on it?',
      'Have you ever read a record of a meeting you attended, and disagreed with it?'],
read=[
 'The Ministry keeps a record of every substantive conversation with a foreign official, and '
 'this is not a formality. Four years later, when somebody asks what was agreed, the record '
 'is what the Ministry has. Lina Khalil writes two or three of them a week, and she writes '
 'them within the day, because the procedure says so and because memory does not improve '
 'with waiting.',
 'In April she took a telephone call from the Verenian embassy about visa arrangements for '
 'the visit. She took seven pages of notes in a mixture of English and Arabic, with arrows '
 'and crossings-out, as everybody does. That afternoon she put the notes through a drafting '
 'system and asked it for a record of conversation.',
 'What came back was excellent. It ran to one page, it used the Ministry’s house form, it '
 'put the points in a sensible order and it read as if a careful officer had written it '
 'slowly. Lina read it twice, could find nothing wrong with it, and sent it for clearance '
 'the same afternoon.',
 'Omar Nasri, who clears records for the department, asked her one question. The Verenian '
 'counsellor had hesitated over the question of whether visas would be issued at the border, '
 'and had said that he believed so but would confirm. In the record this appeared as a plain '
 'statement that visas would be issued at the border.',
 'Nothing in the record was invented, and the drafting system had not been careless. It had '
 'done the thing it does well, which is to turn rough material into smooth prose. The '
 'hesitation was in Lina’s notes as a question mark and two words, and a question mark is '
 'not a sentence, so it did not survive the journey into clear English.'],
c_a=[('How often does the Ministry keep a record of a conversation?', 'of every substantive conversation with a foreign official'),
     ('Why does Lina write records within the day?', 'because the procedure says so and memory does not improve with waiting'),
     ('How many pages of notes did she take?', 'seven'),
     ('What did Omar Nasri notice?', 'that a hesitation had become a plain statement'),
     ('What had the Verenian counsellor actually said?', 'that he believed so but would confirm'),
     ('Why did the hesitation not survive?', 'because it was a question mark and two words, and a question mark is not a sentence')],
c_b=[('Records are kept only of meetings, not calls.', 'F'),
     ('Lina writes two or three records a week.', 'T'),
     ('The draft record was badly written.', 'F'),
     ('The system invented information.', 'F'),
     ('The counsellor had promised visas at the border.', 'F'),
     ('Omar Nasri clears records for the department.', 'T')],
c_c=[('The record is what the Ministry ____________ four years later.', 'has'),
     ('She took seven pages of notes with arrows and ____________.', 'crossings-out'),
     ('It used the Ministry’s house ____________.', 'form'),
     ('She sent it for ____________ the same afternoon.', 'clearance'),
     ('He said that he believed so but would ____________.', 'confirm'),
     ('It turns rough material into smooth ____________.', 'prose')],
c_d=[('The system did its job ( well / badly ), and that was the problem.', ['well', 'badly'], 0),
     ('How long was the draft record?', ['seven pages', 'one page', 'four pages', 'two pages'], 1),
     ('What happened to the hesitation?', ['it was invented', 'it became a plain statement', 'it was deleted entirely', 'it was marked in red'], 1),
     ('Why does Lina write records the same day?', ['the system requires it', 'procedure, and because memory fades', 'Omar insists', 'for the Minister'], 1),
     ('A question mark in notes is', ['a sentence', 'not a sentence', 'an instruction', 'a heading'], 1)],
c_e=('Simple or continuous? Put each sentence in the right column.',
     [('The Ministry keeps a record of every conversation.', 'present simple'),
      ('Lina is writing the record now.', 'present continuous'),
      ('Records go to clearance within the day.', 'present simple'),
      ('Omar is clearing three records this morning.', 'present continuous'),
      ('The procedure requires a record within 24 hours.', 'present simple'),
      ('They are still waiting for confirmation.', 'present continuous')],
     ['present simple', 'present continuous']),

v_fig_title='THE LIFE OF A RECORD',
v_fig=[('doc', 'a record of conversation'), ('note', 'a readout'), ('book', 'a transcript'),
       ('seal', 'clearance'), ('envelope', 'a distribution list'), ('key', 'to redact')],
v_fig_cap='Six words for what happens to a conversation after it ends.',
vocab=[
 ('a record of conversation', 'the Ministry’s own written account of what was said'),
 ('a readout', 'a short account of a meeting given to people who were not there'),
 ('a transcript', 'a word-for-word written version of what was spoken'),
 ('verbatim', 'in exactly the words used, with nothing changed'),
 ('a summary record', 'an account that gives the substance without every word'),
 ('an aide-mémoire', 'a written note left with the other side so nothing is forgotten'),
 ('a draft', 'a version that is not yet the final one'),
 ('a final version', 'the version that is signed, filed and relied upon'),
 ('to initial', 'to put your initials on a paper to show you have seen it'),
 ('to clear', 'to approve a draft for sending, after checking it'),
 ('clearance', 'the approval a draft must have before it leaves'),
 ('a drafting officer', 'the officer who writes the first version'),
 ('to amend', 'to change a text that already exists'),
 ('an amendment', 'a particular change made to a text'),
 ('a margin note', 'a short comment written beside the text'),
 ('to redact', 'to remove part of a document before it is shown to others'),
 ('a paragraph', 'a numbered block of a document, cited by its number'),
 ('a heading', 'the line that says what a document or section is about'),
 ('a date line', 'the line giving the date and place a document was made'),
 ('a distribution list', 'the list of who receives a copy')],
v_a=[('The Ministry’s own written account of what was said is a ____________.', 'record of conversation'),
     ('A word-for-word written version of speech is a ____________.', 'transcript'),
     ('In exactly the words used, with nothing changed, is ____________.', 'verbatim'),
     ('The approval a draft must have before it leaves is ____________.', 'clearance'),
     ('To remove part of a document before showing it is to ____________ it.', 'redact'),
     ('The list of who receives a copy is the ____________.', 'distribution list'),
     ('A written note left with the other side is an ____________.', 'aide-mémoire'),
     ('A short account for people who were not there is a ____________.', 'readout')],
v_b=[('A summary record gives the substance', 'without every word.'),
     ('To initial is to put your initials on a paper', 'to show you have seen it.'),
     ('A drafting officer is the officer', 'who writes the first version.'),
     ('A margin note is a short comment', 'written beside the text.'),
     ('A date line gives the date and place', 'a document was made.')],

g_title='Grammar: present simple and present continuous',
g_rule=['Use the present simple for procedure and for what is always true.',
        'Use the present continuous for what is happening now, or around now.',
        'Procedures in a ministry handbook are written in the present simple.',
        'State verbs such as know, believe, contain and require are rarely continuous.'],
g_fig=('LOOSE',
       ['The Ministry is keeping a record of every conversation.',
        'Records are going to clearance within the day.',
        'Omar clears three records this morning.',
        'He is believing that visas will be issued.'],
       'PRECISE',
       ['The Ministry keeps a record of every conversation.',
        'Records go to clearance within the day.',
        'Omar is clearing three records this morning.',
        'He believes that visas will be issued.'],
       'two procedures wrongly in the continuous',
       'procedures simple, this morning’s work continuous'),
g_fig_cap='A handbook is written in the simple. A situation report is written in the continuous.',
g_a=[('The Ministry ____________ (keep) a record of every conversation.', 'keeps'),
     ('Lina ____________ (write) the record of the April call at the moment.', 'is writing'),
     ('Records ____________ (go) to clearance within the day.', 'go'),
     ('Omar ____________ (clear) three records this morning.', 'is clearing'),
     ('The procedure ____________ (require) a record within 24 hours.', 'requires'),
     ('They ____________ (still/wait) for confirmation from the embassy.', 'are still waiting'),
     ('The file ____________ (contain) eleven notes verbales.', 'contains'),
     ('We ____________ (prepare) the programme this week.', 'are preparing'),
     ('He ____________ (believe) the dates are acceptable.', 'believes')],
g_b=[('Procedures are written in the ( present continuous / present simple ).', ['present continuous', 'present simple'], 1),
     ('The Ministry ____ a record of every conversation.', ['is keeping', 'keeps', 'keep', 'is kept'], 1),
     ('Omar ____ three records this morning.', ['clears', 'is clearing', 'clear', 'has clear'], 1),
     ('The file ____ eleven notes verbales.', ['is containing', 'contains', 'contain', 'is contained'], 1),
     ('They ____ for confirmation.', ['still wait', 'are still waiting', 'still waiting', 'is still waiting'], 1),
     ('Which verb is rarely continuous?', ['prepare', 'believe', 'write', 'send'], 1)],

d1=dict(title='He said he believed so',
        fig=(['The record says visas will be issued.', 'He said he believed so.'],
             ['Is that different?', 'In four years it will be.']),
        cap='Omar Nasri and Lina, at clearance.',
        lines=[('Omar', 'Paragraph four says visas will be issued at the border. Is that what he '
                        'said?'),
               ('Lina', 'He said he believed so and would confirm. It is in my notes.'),
               ('Omar', 'Then the record is wrong, and it is wrong in the direction that costs us '
                        'something.'),
               ('Lina', 'Nobody invented anything. The draft tidied it.'),
               ('Omar', 'Tidying is what it does. It takes rough material and makes smooth prose, '
                        'and a hesitation is rough material.'),
               ('Lina', 'In my notes the hesitation is a question mark and two words.'),
               ('Omar', 'A question mark is not a sentence, so nothing carries it across. The '
                        'system writes sentences, and every sentence it writes sounds decided.'),
               ('Lina', 'So I must write the hesitation as a sentence before I start.'),
               ('Omar', 'Write it as a sentence in your notes. He believes so and will confirm. '
                        'Then it arrives in the record as what it is.'),
               ('Lina', 'That is more work during the call.'),
               ('Omar', 'It is about four seconds of work during the call, and it is the only part '
                        'of the call that will matter in four years.'),
               ('Lina', 'I will change how I take notes, which I did not expect this morning.')],
        a=[('What does paragraph four say?', 'that visas will be issued at the border'),
           ('What did the counsellor actually say?', 'that he believed so and would confirm'),
           ('What does the drafting system do with rough material?', 'it makes smooth prose of it'),
           ('Why did the hesitation disappear?', 'because it was a question mark, and a question mark is not a sentence'),
           ('What does Omar advise?', 'to write the hesitation as a full sentence in the notes')],
        b=[('It is wrong in the direction that ____________ us something.', 'costs'),
           ('Every sentence it writes sounds ____________.', 'decided'),
           ('He believes so and will ____________.', 'confirm'),
           ('About four seconds of work during the ____________.', 'call')]),
d2=dict(title='What a record is for',
        fig=(['Who reads these?', 'Nobody, for four years.'],
             ['Then why the care?', 'Because of the fourth year.']),
        cap='Lina and Tarek Zayed, later that week.',
        lines=[('Lina', 'I wrote three records this week and nobody has read any of them.'),
               ('Tarek', 'That is normal. They are not written to be read this week.'),
               ('Lina', 'Then who reads them?'),
               ('Tarek', 'A desk officer in four years, who was not born into this file and has no '
                         'idea what anybody meant. Everything they know, they will get from you.'),
               ('Lina', 'That is an uncomfortable thought.'),
               ('Tarek', 'It is the whole discipline. Write for a stranger who cannot ask you '
                         'anything, because by then you will have moved three times.'),
               ('Lina', 'And the system writes beautifully for that stranger.'),
               ('Tarek', 'It writes clearly for that stranger, which is not the same. Clear and '
                         'wrong is worse than rough and right, because the stranger believes it.'),
               ('Lina', 'So what do I keep from the rough version?'),
               ('Tarek', 'Everything that was uncertain. The record must be as uncertain as the '
                         'conversation was, and no more certain.'),
               ('Lina', 'That is a sentence I am going to put above my desk.'),
               ('Tarek', 'Put it there. Then read it each time the draft comes back reading well.')],
        a=[('Who will read the records, in Tarek’s view?', 'a desk officer in four years'),
           ('What will that officer know?', 'only what the record tells them'),
           ('What is the discipline?', 'writing for a stranger who cannot ask you anything'),
           ('Why is clear and wrong worse than rough and right?', 'because the stranger believes it'),
           ('How certain must the record be?', 'as uncertain as the conversation was, and no more certain')],
        b=[('They are not written to be read this ____________.', 'week'),
           ('A stranger who cannot ____________ you anything.', 'ask'),
           ('Clear and wrong is worse than rough and ____________.', 'right'),
           ('Read it each time the draft comes back reading ____________.', 'well')]),

speak=[('Say it correctly',
        ['Student A: describe three standing procedures in your office.',
         'Student B: describe three things that are happening this week.',
         'Find the sentence where the wrong form changed the meaning.']),
       ('Spoken tasking',
        ['Describe a conversation you had this week, aloud, in three sentences.',
         'Mark where you were certain and where you were not.',
         'Your partner repeats it back and checks that the uncertainty survived.']),
       ('As uncertain as the conversation',
        ['In pairs, read out a short record one of you has written.',
         'Find any sentence that sounds more decided than the conversation was.',
         'Rewrite that sentence so that it carries the doubt.'])],

ext_title='A record is written for a stranger four years away, and it must be exactly as certain as the conversation was',
ext_fig=figs.datatable('WHAT WAS SAID, AND WHAT THE DRAFT MADE OF IT',
                       ['In the notes', 'In the draft record', 'Difference'],
                       [['visas at border?  believes so', 'visas will be issued at the border', 'doubt removed'],
                        ['dates ok — check w/ protocol', 'the dates are agreed', 'condition removed'],
                        ['3 or 4 in delegation', 'the delegation will number four', 'range narrowed'],
                        ['he laughed, moved on', '—', 'omitted'],
                        ['no answer on the centre', 'the matter was not discussed', 'changed in kind']]),
ext_fig_cap='Nothing here is invented. Four things are more definite than the conversation was.',
ext=[
 'A record of conversation is not a story about a meeting; it is the Ministry’s evidence of '
 'what was said. It will be read years later by somebody who was not there, who cannot '
 'telephone you, and who will treat every sentence in it as a fact about the world. That is '
 'why the form is strict and why the drafting is taught.',
 'Systems that turn notes into records do one thing extremely well, and it is worth naming '
 'precisely. They take rough, broken material and produce fluent, ordered prose in the house '
 'style. The work is fast, the result is usually better written than a tired officer would '
 'manage at six in the evening, and the saving is real.',
 'The risk comes from the same ability. Hesitation, qualification and silence are rough '
 'material, and smoothing is what the system does. A question mark becomes a statement, a '
 'range becomes a figure, and a point that was avoided becomes a point that was not '
 'discussed. Nothing is invented; everything becomes a little more certain than it was.',
 'The remedy is at the note-taking stage and not at the drafting stage, which is what most '
 'officers get wrong. If the doubt is a question mark in your notes, nothing can carry it '
 'across, because the system writes sentences and a question mark is not one. If the doubt is '
 'a sentence in your notes, it survives into the record untouched.',
 'So the discipline is to write uncertainty as uncertainty while the conversation is still '
 'happening. He believes so and will confirm. She did not answer the question about the '
 'centre. The delegation is three or four, not yet fixed. Four extra seconds during a call '
 'buys a record that is as certain as the conversation was, and no more.'],
dp1=('Transcription and summarisation in diplomatic services',
     'Foreign ministries adopting these systems have reported transcription and '
     'summarisation among the earliest and most successful uses, with hours of recorded '
     'dialogue processed in minutes.',
     'Source: reported practice in a European foreign ministry, 2025.'),
e_a=[('What is a record of conversation?', 'the Ministry’s evidence of what was said'),
     ('What do these systems do extremely well?', 'turn rough broken material into fluent ordered prose'),
     ('Where does the risk come from?', 'the same ability: smoothing removes hesitation and qualification'),
     ('At which stage is the remedy?', 'at the note-taking stage, not the drafting stage'),
     ('What is the discipline?', 'writing uncertainty as uncertainty while the conversation is happening')],
e_b=[('A record is a story about a meeting.', 'F'),
     ('The reader years later can telephone the drafter.', 'F'),
     ('Smoothing is a fault in the system.', 'F'),
     ('A question mark survives into the record.', 'F'),
     ('Doubt written as a sentence survives.', 'T'),
     ('The remedy belongs at the drafting stage.', 'F')],

w_model=(
 'Purpose: record the telephone call of 12 April with the Verenian embassy so that the file '
 'shows what was said about visas. Scope: the call of 12 April only; earlier exchanges are '
 'out of scope. Inputs: the 7 pages of notes taken during the call. Criteria: 1 page in the '
 'house form; every point that was left uncertain must appear as uncertain, in the speaker’s '
 'own terms; give the date of the call in the date line; number the paragraphs. Done: 1 '
 'record of no more than 6 paragraphs, sent for clearance the same day. Fallback: where the '
 'notes do not show whether a point was agreed, record that the notes do not show it, rather '
 'than choosing the likely reading.'),
w_fig=figs.spec_card('THE TASKING FOR A RECORD',
                     [('Purpose', 'record the call of 12 April so the file shows what was said'),
                      ('Scope', 'the call of 12 April only; earlier exchanges excluded'),
                      ('Inputs', 'the 7 pages of notes taken during the call'),
                      ('Criteria', 'house form; uncertainty kept; dated; paragraphs numbered'),
                      ('Done', '1 record of 6 paragraphs or fewer, cleared the same day'),
                      ('Fallback', 'notes unclear: say so, do not choose the likely reading')]),
w_fig_cap='The fallback line is the one that stops a record becoming tidier than the truth.',
w_task='Write a tasking for a record of a conversation you had this month.',
w_steps=['Say which conversation, by date, and what is out of scope.',
         'Say what the record is built from.',
         'Require every uncertainty to appear as an uncertainty.',
         'Fix the length and the clearance deadline.',
         'Say what to do where the notes do not show what happened.'],
w_bank=['Record the … of … so that the file shows …',
        'Cover … only; … is out of scope.',
        'Work from …',
        'Every point left uncertain must appear …',
        'Where the notes do not show … , record that …'],
w_check=['Is the conversation identified by date?',
         'Must uncertainty be preserved in the speaker’s terms?',
         'Is the length a number of paragraphs?',
         'Is there a rule for notes that do not show what happened?'],

t_title='Turning notes of a conversation into a record',
t_fig=figs.split('ROUGH MATERIAL AND WHAT BECOMES OF IT',
                 'In your notes',
                 ['visas at border?  believes so',
                  'dates ok — check w/ protocol',
                  '3 or 4 in delegation',
                  'no answer on the centre'],
                 'Written as a sentence instead',
                 ['He believes so and will confirm.',
                  'The dates are acceptable subject to protocol.',
                  'The delegation is three or four, not yet fixed.',
                  'She did not answer on the centre.']),
t_fig_cap='The right-hand column survives the journey into a record. The left-hand column does not.',
t_body=[
 'Use these systems for records, because this is genuinely one of the things they do best. '
 'They take seven pages of arrows, abbreviations and half-sentences and return one page in '
 'the house form, correctly ordered, at six in the evening when you are tired. The time saved '
 'is real and the written quality is usually higher than a late draft of your own.',
 'Then protect the one thing the process destroys. Fluent prose is made of statements, and '
 'hesitation, conditions, ranges and silences are not statements. They will be smoothed into '
 'something more definite, not because the system is careless but because that is what '
 'smoothing means. Nothing will be invented, and everything will be slightly more certain '
 'than it was.',
 'Do the work during the conversation rather than afterwards. Write each uncertainty as a '
 'whole sentence in your notes, in the speaker’s own terms, at the moment it happens. He '
 'believes so and will confirm. She did not answer. Four seconds each time, and the record '
 'that reaches the file in four years is as certain as the conversation was, which is the '
 'only standard that matters.'],
t_say=[('Name the form: ', 'A record of conversation, in the house form, one page.'),
       ('Keep the doubt: ', 'He believes so and will confirm.'),
       ('Mark the silence: ', 'She did not answer the question about the centre.')],
t_bound=('These systems turn notes into prose. They cannot know what was said and not '
         'written down, they cannot tell a hesitation from a pause, and they produce the same '
         'confident sentences whether your notes were full or thin. A record is only as good '
         'as the notes behind it, and nothing downstream can repair thin notes.'),
t_a=[('A record of conversation, in the house form, one ____________.', 'page'),
     ('He believes so and will ____________.', 'confirm'),
     ('She did not ____________ the question about the centre.', 'answer'),
     ('Fluent prose is made of ____________.', 'statements'),
     ('Do the work during the ____________ rather than afterwards.', 'conversation'),
     ('A record is only as good as the ____________ behind it.', 'notes')],
t_b_rubric='Rewrite each note as a full sentence that will survive into the record.',
t_b=[('visas at border?  believes so', 'He believes visas will be issued at the border and will confirm'),
     ('dates ok — check w/ protocol', 'The dates are acceptable subject to confirmation by Protocol'),
     ('3 or 4 in delegation', 'The delegation will number three or four; the figure is not yet fixed'),
     ('no answer on the centre', 'She did not answer the question about the cultural centre')],

case=dict(
 title='The Decision Room · The record that was cleared too quickly',
 brief=[
  'The April record went to clearance the same afternoon and was corrected by Omar Nasri '
  'before it was filed. Lina then looked back at the eleven records she had written since '
  'joining.',
  'In four of the eleven, a point that had been conditional in her notes appeared as settled '
  'in the record. Three of the four had already been cleared and filed. None has yet caused a '
  'difficulty, and two concern matters that are now closed.',
  'Dr Mourad must decide what happens to the three filed records, and whether anything is '
  'said to the Verenian embassy, which has copies of two of them.'],
 exhibit=figs.datatable('ELEVEN RECORDS, REREAD',
                        ['', 'Count', 'Note'],
                        [['records written since March', '11', '—'],
                         ['condition lost in the drafting', '4', '—'],
                         ['already cleared and filed', '3', '—'],
                         ['matters now closed', '2', 'no practical effect'],
                         ['copies held by the embassy', '2', 'both from the four'],
                         ['difficulties caused so far', '0', '—']]),
 exhibit_cap='Four records are more certain than the conversations were. Two of them are in somebody else’s file.',
 exhibit_note='The embassy holds the two records because they were agreed readouts, not because '
              'of any failure of handling.',
 voices=[('Omar Nasri', 'Translation and Documentation',
          'Correct all four and reissue the two the embassy holds. A record that we know is '
          'wrong and leave on the file is a different thing from one we have not noticed.'),
         ('Tarek Zayed', 'Protocol',
          'Reissuing a readout three weeks later tells the embassy we had a drafting problem. '
          'Correct the file copies, say nothing, and watch the two live matters.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'I would rather send the corrections, and I am the person who would have to explain '
          'them, so I am not sure my view should count for much here.')],
 steps=[('Find it', 'How many records lost a condition?'),
        ('Compare it', 'How many are closed and how many are live?'),
        ('Infer it', 'Why does Omar distinguish noticed from unnoticed?'),
        ('Weigh it', 'An awkward correction against a wrong record left standing.'),
        ('Decide', 'What is corrected, and what is said?')],
 analysis=[('Find it. How many of the eleven lost a condition?', 'four'),
           ('Compare it. How many matters are now closed?', 'two'),
           ('Infer it. What is Omar’s distinction?', 'between an error we have not noticed and one we know about and leave'),
           ('Weigh it. What does Tarek weigh against correcting?', 'what reissuing tells the embassy about the Ministry'),
           ('Decide. What would you do?', 'answers vary; the two live matters and the two embassy copies are the test')],
 decision='Write what the Ministry does about the four records.',
 decision_steps=['Say which records are corrected, and by when.',
                 'Say what is sent to the embassy, if anything.',
                 'Say what changes in how records are drafted.',
                 'Say who clears a record from now on.'],
 bank=['The … records are … by …',
       'The embassy is …',
       'From now on a record …',
       '… clears every …',
       'This is reviewed …'],
 outcome='All four records were corrected on the file, and the two readouts held by the '
         'embassy were reissued with a short covering note saying that paragraph numbering and '
         'two conditions had been corrected. The embassy replied thanking the Ministry and '
         'attaching a correction of its own to one of the same records, which nobody had '
         'expected. Tarek, who had argued against reissuing, says the reply does not change '
         'his view, because one courteous embassy is not evidence about embassies.',
 outcome_q=[('What did the embassy do in reply?', 'thanked the Ministry and attached a correction of its own'),
            ('Why does Tarek not change his view?', 'because one courteous reply is not evidence about embassies in general')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write up the call',
 task=['This is the tasking Lina gave herself, written at the top of her notes, which is how '
       'most records in most ministries begin.',
       'It produced a record that was clear, well formed, correctly filed and more certain '
       'than the conversation had been.'],
 draft=['Write up the call for the file.',
        'Cover the main points.',
        'Use the usual format.',
        'Keep the important detail.',
        'Tidy up the rough bits.',
        'Get it cleared today.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, one of which instructs the drafter to destroy the evidence.',
 asked=['One page in the house form',
        'Every uncertainty kept as an uncertainty',
        'Paragraphs numbered, date line correct'],
 back=['One page, house form, well written',
       '4 conditions silently removed',
       'Cleared the same afternoon'],
 gap='"The main points" names no set, "the usual format" states no test, "important detail" '
     'gives no standard, and "tidy up the rough bits" instructs the drafter to remove exactly '
     'the hesitations the record exists to preserve.',
 back_cap='A good record of a conversation that was less settled than the record says.',
 back_note='Instruction five is the whole failure. The rough bits were the uncertainty, and '
           'the uncertainty was the thing worth recording.',
 diagnosis=[('[1] "write up the call" — as a record, a readout or a transcript?', 'undefined done'),
            ('[2] "the main points" — which points, chosen how?', 'unscoped set'),
            ('[3] "the usual format" — which form, with what elements?', 'undefined done'),
            ('[4] "important detail" — important by what test?', 'unstated criterion'),
            ('[5] "tidy up the rough bits" — including the hesitations?', 'unstated criterion'),
            ('[6] "get it cleared today" — cleared by whom?', 'unscoped set')],
 rewrite='Rewrite the tasking so that the form, the length and the treatment of uncertainty '
         'are all fixed before drafting begins.',
 scaffold=['What the record is for, and who will read it',
           'Which conversation is covered, and what is not',
           'What the record is built from',
           'The form, the treatment of uncertainty, and what each paragraph carries',
           'How long it is, and when it is cleared',
           'What to do where the notes do not show what happened'],
 bank=['Record the … of … so that the file shows …',
       'Cover … only; … is out of scope.',
       'Work from the … pages of notes …',
       'Produce 1 page in … ; every point left uncertain must … ; number …',
       'Return 1 record of no more than … , cleared …',
       'Where the notes do not show … , record that …'],
 check=['Is the form named rather than called usual?',
        'Must uncertainty be kept in the speaker’s terms?',
        'Is the length given as a number of paragraphs?',
        'Is there a rule forbidding a likely reading?'],
 model=['Record the telephone call of 12 April with the Verenian embassy so that the file shows what was said about visas',
        'The call of 12 April only; earlier exchanges are out of scope',
        'The 7 pages of notes taken during the call',
        '1 page in the house form; every point left uncertain must appear as uncertain, in the speaker’s own terms; the date of the call in the date line; paragraphs numbered',
        '1 record of no more than 6 paragraphs, sent for clearance the same day',
        'Where the notes do not show whether a point was agreed, record that the notes do not show it, rather than choosing the likely reading'],
 cost='4 records in 11 carrying a certainty the conversations did not have, 2 of them in a '
      'foreign embassy’s file, and 3 weeks before anybody read them again.'),

rev_fig=figs.split('SIMPLE AND CONTINUOUS',
                   'Procedure — present simple',
                   ['The Ministry keeps a record.',
                    'Records go to clearance within the day.',
                    'The procedure requires 24 hours.',
                    'The file contains eleven notes.'],
                   'Now — present continuous',
                   ['Lina is writing the record.',
                    'Omar is clearing three this morning.',
                    'They are still waiting for confirmation.',
                    'We are preparing the programme.']),
rev_fig_cap='A handbook uses the left column. A report on this week uses the right.',
rev=dict(
 read=[('A record of conversation is', ['a story', 'the Ministry’s evidence', 'a transcript', 'a readout'], 1),
       ('Smoothing removes', ['facts', 'hesitation and qualification', 'names', 'dates'], 1),
       ('The remedy belongs at the stage of', ['clearance', 'note-taking', 'filing', 'drafting'], 1),
       ('In the Decision Room, how many records lost a condition?', ['one', 'four', 'eleven', 'none'], 1)],
 listen_text='Use these systems for records, because this is one of the things they do best. '
             'Then protect the one thing the process destroys, which is uncertainty. Fluent '
             'prose is made of statements, and hesitation is not a statement. Write each '
             'uncertainty as a whole sentence in your notes, at the moment it happens.',
 listen=[('One of the things they do ____________.', 'best'),
         ('Protect the one thing the process ____________.', 'destroys'),
         ('Fluent prose is made of ____________.', 'statements'),
         ('Write each uncertainty as a whole ____________.', 'sentence')],
 speak=['Describe one conversation from this week in three sentences.',
        'Mark where you were certain and where you were not.'],
 write='Write one sentence recording something you were told but not promised.',
 vocab=[('A word-for-word written version of speech is a ____________.', 'transcript'),
        ('In exactly the words used is ____________.', 'verbatim'),
        ('The approval a draft must have before it leaves is ____________.', 'clearance'),
        ('To remove part of a document before showing it is to ____________ it.', 'redact'),
        ('A written note left with the other side is an ____________.', 'aide-mémoire')],
 gram=[('The Ministry ____________ (keep) a record of every conversation.', 'keeps'),
       ('Lina ____________ (write) the record at the moment.', 'is writing'),
       ('Omar ____________ (clear) three records this morning.', 'is clearing'),
       ('The file ____________ (contain) eleven notes verbales.', 'contains'),
       ('He ____________ (believe) the dates are acceptable.', 'believes')]),

found=['Write one uncertainty from today as a full sentence.',
       'Reread a record you wrote and find a sentence more certain than the meeting was.',
       'Ask who will read your records in four years.',
       'Add the treatment of uncertainty to the next tasking you write.'],
end_line='The record must be as uncertain as the conversation was, and no more certain.',
end_next='Next: The Note Verbale',
)
