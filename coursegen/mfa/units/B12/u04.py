# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='The Transcript Is Not the Meeting',
gram='non-defining relative clauses for background',
ai='transcription, and what a transcript is not',
strap='CEFR B1 · Grammar: non-defining relative clauses · AI: what a transcript is not',
cando=['add background with a non-defining clause, correctly punctuated',
       'tell a defining clause from a non-defining one by the commas',
       'say what a transcript records and what it cannot record',
       'decide when a transcript may be used and when a record is needed',
       'write a rule about who may read a transcript of a meeting'],
hero=('EVERY WORD, AND NOT THE MEETING',
      ['The transcript has eleven thousand words and every one is correct.',
       'It does not contain the four seconds when nobody spoke.'],
      [(730, 'blue', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'teal', 'short')]),
hero_cap='The committee room in Geneva, forty minutes after the session rose.',

warm=['Has a meeting you attended ever been recorded? What was done with the recording?',
      'What happens in a meeting that no transcript could contain?',
      'Who in your ministry may read a transcript of a negotiation?'],
read=[
 'Nadia Barakat works in Geneva, where the Ministry sits on three committees and sends '
 'delegates to perhaps forty meetings a month. Since January the delegation has used a '
 'transcription step, which produces a full written text of a session within minutes of its '
 'close.',
 'The gain is obvious and large. A delegate who has spoken for twenty minutes and listened '
 'for three hours no longer has to reconstruct what was said from notes written while also '
 'speaking. The transcript is complete, accurate on names and figures, and arrives before '
 'the delegate has left the building.',
 'In March the committee discussed a draft paragraph on inspection rights. The Kavaran '
 'delegate, who had opposed the paragraph for two sessions, was asked directly whether his '
 'delegation could accept the new wording. He said that he would consult his capital.',
 'That sentence is in the transcript, correctly. What is not in the transcript is that he '
 'waited four seconds before saying it, looked at the Lysmark delegation while he waited, and '
 'said it in a tone that everybody in the room understood as yes. Nadia recorded in her own '
 'account that Kavara would accept.',
 'Her account and the transcript do not contradict each other and they do not say the same '
 'thing. The transcript says what was said, which is the narrower fact. Nadia’s record says '
 'what happened, which is what the Ministry needs, and only a person who was present can '
 'write it.'],
c_a=[('How many meetings a month does the delegation attend?', 'about forty'),
     ('When does the transcript arrive?', 'within minutes of the session closing'),
     ('What was the Kavaran delegate asked?', 'whether his delegation could accept the new wording'),
     ('What did he say?', 'that he would consult his capital'),
     ('What is not in the transcript?', 'the four-second pause, the look at Lysmark, and the tone'),
     ('What did Nadia record?', 'that Kavara would accept')],
c_b=[('The transcript is inaccurate on names.', 'F'),
     ('The delegate had opposed the paragraph for two sessions.', 'T'),
     ('The transcript and Nadia’s record contradict each other.', 'F'),
     ('The transcript says what happened.', 'F'),
     ('Only somebody present could write Nadia’s record.', 'T'),
     ('The transcript arrives the next day.', 'F')],
c_c=[('He no longer has to ____________ what was said from notes.', 'reconstruct'),
     ('The committee discussed a draft paragraph on inspection ____________.', 'rights'),
     ('He said that he would consult his ____________.', 'capital'),
     ('Everybody in the room understood it as ____________.', 'yes'),
     ('The transcript says what was ____________.', 'said'),
     ('Nadia’s record says what ____________.', 'happened')],
c_d=[('The transcript and the record differ in ( what they record / accuracy ).', ['what they record', 'accuracy'], 0),
     ('How long did the delegate wait?', ['one second', 'four seconds', 'a minute', 'he did not wait'], 1),
     ('Where did he look?', ['at the chair', 'at the Lysmark delegation', 'at his papers', 'at Nadia'], 1),
     ('What does the Ministry need?', ['what was said', 'what happened', 'the exact words', 'the timing'], 1),
     ('Who can write a record of what happened?', ['anybody', 'a person who was present', 'the chair', 'the secretariat'], 1)],
c_e=('Defining or non-defining? Put each sentence in the right column.',
     [('The delegate who spoke first was Kavaran.', 'defining'),
      ('The Kavaran delegate, who had opposed it, agreed.', 'non-defining'),
      ('The paragraph that was redrafted is now agreed.', 'defining'),
      ('Paragraph seven, which was redrafted twice, is agreed.', 'non-defining'),
      ('The session where this happened ran late.', 'defining'),
      ('Geneva, where the committee sits, is an hour ahead.', 'non-defining')],
     ['defining', 'non-defining']),

v_fig_title='WHAT A ROOM CONTAINS',
v_fig=[('people', 'an interpreter'), ('book', 'a floor language'), ('clock', 'a pause'),
       ('bulb', 'an inflection'), ('doc', 'a turn'), ('key', 'an aside')],
v_fig_cap='Six words for the parts of a meeting, most of which no text records.',
vocab=[
 ('an utterance', 'one stretch of speech by one speaker'),
 ('an aside', 'a remark made quietly, not to the meeting as a whole'),
 ('a pause', 'a silence inside or between utterances'),
 ('an interjection', 'a short remark made while somebody else is speaking'),
 ('to interrupt', 'to speak before another speaker has finished'),
 ('an interpreter', 'the person who renders speech into another language as it is spoken'),
 ('consecutive interpretation', 'interpreting after the speaker has finished a passage'),
 ('simultaneous interpretation', 'interpreting while the speaker is still speaking'),
 ('a booth', 'the enclosed position from which an interpreter works'),
 ('a floor language', 'the language actually being spoken in the room'),
 ('a relay', 'interpreting through a third language when no direct pair exists'),
 ('an inflection', 'a change of pitch that changes what a sentence conveys'),
 ('emphasis', 'the weight given to a word to make it carry more'),
 ('a filler', 'a sound or word used while thinking, carrying no content'),
 ('a hesitation', 'a break that shows the speaker is not certain'),
 ('body language', 'what posture, movement and expression convey'),
 ('a gesture', 'a movement that carries meaning'),
 ('eye contact', 'who looks at whom, and when'),
 ('intonation', 'the pattern of pitch across a sentence'),
 ('a turn', 'one person’s opportunity to speak before another takes over')],
v_a=[('Interpreting while the speaker is still speaking is ____________.', 'simultaneous interpretation'),
     ('Interpreting through a third language is a ____________.', 'relay'),
     ('The language actually being spoken in the room is the ____________.', 'floor language'),
     ('A break that shows the speaker is not certain is a ____________.', 'hesitation'),
     ('A sound or word used while thinking is a ____________.', 'filler'),
     ('The pattern of pitch across a sentence is ____________.', 'intonation'),
     ('One person’s opportunity to speak is a ____________.', 'turn'),
     ('A remark made quietly, not to the meeting, is an ____________.', 'aside')],
v_b=[('An utterance is one stretch of speech', 'by one speaker.'),
     ('An interjection is a short remark made', 'while somebody else is speaking.'),
     ('A booth is the enclosed position', 'from which an interpreter works.'),
     ('An inflection is a change of pitch', 'that changes what a sentence conveys.'),
     ('Eye contact is who looks at whom,', 'and when.')],

g_title='Grammar: non-defining relative clauses',
g_rule=['A non-defining clause adds background and is marked off by commas.',
        'Use who or which; never use that in a non-defining clause.',
        'The pronoun can never be left out of a non-defining clause.',
        'The sentence must still make sense if the clause is removed.'],
g_fig=('LOOSE',
       ['The Kavaran delegate that had opposed it agreed.',
        'Paragraph seven which was redrafted twice is agreed.',
        'Geneva, the committee sits there, is an hour ahead.',
        'The chair, was Oristani, closed the session.'],
       'PRECISE',
       ['The Kavaran delegate, who had opposed it, agreed.',
        'Paragraph seven, which was redrafted twice, is agreed.',
        'Geneva, where the committee sits, is an hour ahead.',
        'The chair, who was Oristani, closed the session.'],
       'a that, two missing commas and a missing pronoun',
       'four clauses that add background and could be removed'),
g_fig_cap='The commas are the grammar here; without them the sentence means something else.',
g_a=[('The Kavaran delegate, ____________ had opposed it, agreed.', 'who'),
     ('Paragraph seven, ____________ was redrafted twice, is now agreed.', 'which'),
     ('Geneva, ____________ the committee sits, is an hour ahead.', 'where'),
     ('The chair, ____________ was Oristani, closed the session.', 'who'),
     ('The transcript, ____________ runs to eleven thousand words, is complete.', 'which'),
     ('Nadia, ____________ was present throughout, wrote the record.', 'who'),
     ('The March session, ____________ lasted four hours, is on the file.', 'which'),
     ('The interpreter, ____________ booth is at the back, heard it clearly.', 'whose'),
     ('The delegation, ____________ we met in January, has not replied.', 'which')],
g_b=[('A non-defining clause is marked off by ( brackets / commas ).', ['brackets', 'commas'], 1),
     ('The Kavaran delegate, ____ had opposed it, agreed.', ['that', 'who', 'which', 'whom'], 1),
     ('Paragraph seven, ____ was redrafted twice, is agreed.', ['that', 'which', 'who', 'where'], 1),
     ('In a non-defining clause the pronoun', ['may be left out', 'can never be left out', 'is optional', 'is a comma'], 1),
     ('Geneva, ____ the committee sits, is an hour ahead.', ['which', 'where', 'that', 'who'], 1),
     ('Which is never used in a non-defining clause?', ['who', 'that', 'which', 'where'], 1)],

d1=dict(title='Four seconds that are not in it',
        fig=(['He said he would consult.', 'That is what the transcript says.'],
             ['And the room?', 'The room heard yes.']),
        cap='Nadia Barakat and Lina, by telephone.',
        lines=[('Nadia', 'My record says Kavara will accept. The transcript says he will consult '
                         'his capital.'),
               ('Lina', 'Those are different.'),
               ('Nadia', 'They are not contradictory. He did say he would consult his capital. '
                         'That is in the text and it is correct.'),
               ('Lina', 'Then why does your record say something else?'),
               ('Nadia', 'Because he waited four seconds first. He looked at the Lysmark '
                         'delegation while he waited. And the way he said it was not the way you '
                         'say it when the answer is no.'),
               ('Lina', 'None of which is in the transcript.'),
               ('Nadia', 'None of which can be in a transcript. A transcript is a list of '
                         'utterances. The four seconds are not an utterance.'),
               ('Lina', 'Could it mark the pause?'),
               ('Nadia', 'It could mark that there was a pause. It cannot mark that the pause '
                         'was a decision, and in that room the pause was the decision.'),
               ('Lina', 'So the record and the transcript do different jobs.'),
               ('Nadia', 'The transcript says what was said. The record says what happened. Only '
                         'the second one is any use to the Ministry.'),
               ('Lina', 'And only somebody in the room can write it.')],
        a=[('What does Nadia’s record say?', 'that Kavara will accept'),
           ('What does the transcript say?', 'that he will consult his capital'),
           ('Are the two in conflict?', 'no; both are correct'),
           ('What are the three things not in the transcript?', 'the four-second pause, the look at Lysmark, and the tone'),
           ('What can a transcript not mark?', 'that a pause was a decision')],
        b=[('A transcript is a list of ____________.', 'utterances'),
           ('In that room the pause was the ____________.', 'decision'),
           ('The record says what ____________.', 'happened'),
           ('Only somebody in the ____________ can write it.', 'room')]),
d2=dict(title='Who may read it',
        fig=(['Eleven thousand words.', 'And who may read them?'],
             ['Anybody on the delegation.', 'That is not what we agreed in the room.']),
        cap='Nadia and Marta Olsen of the Ministry’s legal side, who was visiting Geneva.',
        lines=[('Nadia', 'The transcripts are held on the delegation file. Anybody on the '
                         'delegation can open them.'),
               ('Marta', 'Including the parts where other delegations spoke informally before '
                         'the session opened?'),
               ('Nadia', 'The recording starts when the session opens.'),
               ('Marta', 'Does it. Who switches it on?'),
               ('Nadia', 'The secretariat, usually. Sometimes it runs from when the room is '
                         'unlocked.'),
               ('Marta', 'Then you have, on a Ministry file, informal remarks that delegates '
                         'made believing themselves to be off the record.'),
               ('Nadia', 'I had not thought of it in those terms. I have thought of it as a '
                         'convenience.'),
               ('Marta', 'It is a convenience. It is also a holding of other people’s words, and '
                         'if one of those delegations ever learns what is on our file, the '
                         'convenience will not be what anybody remembers.'),
               ('Nadia', 'So we cut the openings.'),
               ('Marta', 'Cut them, write down that you cut them, and write down the rule. Then '
                         'when somebody asks in four years, there is an answer.'),
               ('Nadia', 'I will do all three. I am slightly embarrassed that it took a lawyer '
                         'visiting from the capital to raise it.'),
               ('Marta', 'It took a lawyer because lawyers are the people who imagine the '
                         'conversation in four years. That is the whole of the trade.')],
        a=[('Where are the transcripts held?', 'on the delegation file, open to anybody on the delegation'),
           ('When does the recording start?', 'when the session opens, or sometimes when the room is unlocked'),
           ('What is therefore on the file?', 'informal remarks made off the record by other delegations'),
           ('What does Marta want done?', 'cut the openings, record that they were cut, and write the rule'),
           ('Why does Marta say a lawyer raised it?', 'because lawyers imagine the conversation in four years')],
        b=[('Sometimes it runs from when the room is ____________.', 'unlocked'),
           ('Delegates who believed themselves to be off the ____________.', 'record'),
           ('It is also a holding of other people’s ____________.', 'words'),
           ('Lawyers are the people who imagine the conversation in four ____________.', 'years')]),

speak=[('Say it correctly',
        ['Student A: say six sentences adding background with a non-defining clause.',
         'Student B: check the commas and the pronoun in each.',
         'Find the sentence that changes meaning if the commas are removed.']),
       ('Spoken tasking',
        ['Describe a meeting you attended, in four sentences.',
         'Say one thing that happened which no transcript would contain.',
         'Your partner asks how you would record it.']),
       ('What the room knew',
        ['In pairs, recall a moment where a silence carried meaning.',
         'Say how you would write it in a record.',
         'Find the case where you could not write it at all.'])],

ext_title='A transcript records utterances; a record of conversation records what happened, and only one of them is useful',
ext_fig=figs.datatable('ONE EXCHANGE, TWO DOCUMENTS',
                       ['What occurred', 'In the transcript?', 'In the record?'],
                       [['the question put to Kavara', 'yes, verbatim', 'yes, in substance'],
                        ['the four-second pause', 'as a gap, if marked', 'yes, and what it meant'],
                        ['the look at Lysmark', 'no', 'yes'],
                        ['the tone of the answer', 'no', 'yes'],
                        ['the words of the answer', 'yes, verbatim', 'yes'],
                        ['what the room understood', 'no', 'yes, as the drafter’s judgement']]),
ext_fig_cap='Two of six things are in both. Three are in only one, and they are the three that decided it.',
ext=[
 'Transcription is among the first capabilities a foreign service adopts, and the reason is '
 'straightforward. A delegate who has spoken for twenty minutes and listened for three hours '
 'cannot also take a full note, and a complete, accurate text arriving minutes after a '
 'session closes removes an evening of reconstruction and a set of errors nobody could '
 'otherwise avoid.',
 'What a transcript is, however, is a list of utterances. It records who said what, in order, '
 'and it is very good at names, figures and the exact wording of a proposal. It is not a '
 'record of a meeting, and the difference is not a matter of completeness. A transcript can be '
 'a hundred per cent complete and still contain almost none of what a delegation needs to '
 'report.',
 'The things it cannot contain are the things that are not utterances. A pause before an '
 'answer. Who looked at whom while the pause lasted. The difference between a formula spoken '
 'as a refusal and the same formula spoken as an acceptance. In a committee room these carry '
 'a great deal of the meaning, and an experienced delegate reads them as naturally as the '
 'words.',
 'So the transcript does not replace the record of conversation; it changes what the record '
 'is for. Freed from reconstructing the words, the delegate writes what the words alone do '
 'not show: that Kavara will in fact accept, that the Lysmark delegation was being consulted '
 'silently, that the chair moved on faster than the agenda required.',
 'One further matter follows from holding a complete text, and it is usually noticed late. A '
 'recording that begins when the room is unlocked captures informal remarks made by other '
 'delegations in the belief that nothing was being recorded. Those words then sit on a '
 'ministry file. Deciding where the transcript begins, and writing that decision down, is '
 'part of using transcription properly.'],
dp1=('Transcription in multilateral work',
     'International organisations expanded speech-to-text and automated transcription '
     'through 2025 under budget pressure, while delegations continued to require human '
     'oversight and to treat the written record as subordinate to it.',
     'Source: reported practice in multilateral conference services, 2025–2026.'),
e_a=[('Why is transcription adopted early?', 'a delegate who speaks and listens cannot also take a full note'),
     ('What is a transcript?', 'a list of utterances, recording who said what in order'),
     ('What can it not contain?', 'pauses, who looked at whom, and the difference between tones'),
     ('How does it change the record of conversation?', 'it frees the delegate to write what the words alone do not show'),
     ('What follows from holding a complete text?', 'informal off-the-record remarks may sit on a ministry file')],
e_b=[('A complete transcript is a complete record of a meeting.', 'F'),
     ('Transcripts are good at names and figures.', 'T'),
     ('A pause is an utterance.', 'F'),
     ('The transcript replaces the record of conversation.', 'F'),
     ('Where a recording begins is worth deciding.', 'T'),
     ('Delegations have stopped requiring human oversight.', 'F')],

w_model=(
 'Purpose: record the committee session of 14 March so that the Ministry knows what happened, '
 'not only what was said. Scope: the session itself, from the chair’s opening to the close; '
 'remarks made before the chair opened are out of scope and are not to be transcribed. '
 'Inputs: the transcript, the delegate’s own notes, and the agenda. Criteria: 1 page; state '
 'for each agenda item what was decided, and where a delegation’s position changed, say what '
 'in the room showed it; mark clearly which statements are the drafter’s reading rather than '
 'quotation; attach the transcript as an annex and do not reproduce it. Done: 1 record of no '
 'more than 8 paragraphs, within 24 hours. Fallback: where the drafter cannot say what a '
 'silence or a tone meant, record that it occurred and that its meaning was unclear.'),
w_fig=figs.spec_card('THE TASKING FOR A SESSION RECORD',
                     [('Purpose', 'record what happened, not only what was said'),
                      ('Scope', 'from the chair’s opening to the close; pre-session excluded'),
                      ('Inputs', 'the transcript, the delegate’s notes, the agenda'),
                      ('Criteria', 'what was decided; what showed a change; readings marked'),
                      ('Done', '8 paragraphs or fewer, within 24 hours'),
                      ('Fallback', 'meaning unclear: record that it occurred and say so')]),
w_fig_cap='The scope line decides where the recording starts, which is a decision somebody must take.',
w_task='Write a tasking for a record of a meeting in your own work.',
w_steps=['Say what the record is for and what it must show.',
         'Say where the session begins and ends, for recording purposes.',
         'Require a statement of what in the room showed a change.',
         'Require the drafter’s readings to be marked as readings.',
         'Say what to do where a silence cannot be interpreted.'],
w_bank=['Record … so that the Ministry knows … , not only …',
        'Cover … ; … is out of scope and is not to be …',
        'Work from … , … and …',
        'State for each … what was decided, and where … , say what in the room … ; mark clearly which statements are …',
        'Where the drafter cannot say what … meant, record that …'],
w_check=['Does the scope say where recording begins?',
         'Must the drafter say what showed a change of position?',
         'Are readings marked as readings rather than quotation?',
         'Is there a rule for an uninterpretable silence?'],

t_title='Transcription, and what a transcript is not',
t_fig=figs.split('TWO DOCUMENTS FROM ONE ROOM',
                 'The transcript',
                 ['every word, in order',
                  'names and figures exact',
                  'arrives in minutes',
                  'says what was said'],
                 'The record of conversation',
                 ['what was decided',
                  'what showed a change of position',
                  'written by somebody present',
                  'says what happened']),
t_fig_cap='The left-hand column is free. The right-hand column is the one the Ministry acts on.',
t_body=[
 'Take transcription without argument. A delegate cannot speak for twenty minutes, listen for '
 'three hours and take a reliable note of the whole session, and a complete accurate text '
 'arriving before they leave the building removes an evening of reconstruction and a class of '
 'errors nobody could avoid otherwise.',
 'Then be exact about what you now have. A transcript is a list of utterances. It will be '
 'right about names, figures and the wording of a proposal, and it contains nothing that is '
 'not speech: not the pause before an answer, not who was being looked at during it, not the '
 'difference between a formula spoken as a refusal and the same formula spoken as consent.',
 'So write the record of conversation differently rather than stopping writing it. The words '
 'are now free, which means the record can spend its space on what the words do not show: '
 'what was decided, what in the room showed a delegation moving, and which of those judgements '
 'is yours rather than quotation. And decide where the recording starts, because a machine '
 'that runs from the moment the room is unlocked will hold other delegations’ informal '
 'remarks on your file.'],
t_say=[('Name the two: ', 'The transcript says what was said; the record says what happened.'),
       ('Mark the reading: ', 'In my judgement, Kavara will accept.'),
       ('Set the start: ', 'Recording begins when the chair opens the session.')],
t_bound=('A transcript is a faithful list of utterances. It cannot record a silence as a '
         'decision, it cannot show who was being addressed, and completeness does not make it '
         'a record. A delegation that keeps only transcripts has a perfect text of every '
         'meeting and no account of any of them.'),
t_a=[('The transcript says what was said; the record says what ____________.', 'happened'),
     ('In my ____________, Kavara will accept.', 'judgement'),
     ('Recording begins when the chair ____________ the session.', 'opens'),
     ('A transcript is a list of ____________.', 'utterances'),
     ('The words are now ____________.', 'free'),
     ('A perfect text of every meeting and no ____________ of any of them.', 'account')],
t_b_rubric='Rewrite each line so that it records what happened rather than what was said.',
t_b=[('The Kavaran delegate said he would consult his capital.', 'Kavara will accept; the delegate consulted Lysmark by eye before answering'),
     ('The chair moved to the next item.', 'the chair moved on faster than the agenda allowed, closing the discussion'),
     ('No delegation spoke on paragraph nine.', 'paragraph nine drew no intervention, which in this committee means it is agreed'),
     ('The Oristani delegate repeated her earlier statement.', 'Oristan has not moved; the repetition was word for word')],

case=dict(
 title='The Decision Room · Eleven minutes before the chair opened',
 brief=[
  'The transcription in Geneva has been running from the moment the room is unlocked, which '
  'in a typical session is about eleven minutes before the chair opens it.',
  'Those eleven minutes contain informal exchanges between delegations, including on two '
  'occasions remarks by a Kavaran delegate about his own capital’s position that he would '
  'certainly not have made on the record.',
  'Marta Olsen wants the openings deleted from all 61 transcripts held and the rule changed. '
  'Nadia agrees about the rule and is uneasy about deleting a record the Ministry holds. '
  'Karim Dalati says deleting is the one thing that will be impossible to explain later.'],
 exhibit=figs.datatable('SIXTY-ONE TRANSCRIPTS',
                        ['', 'Figure', 'Note'],
                        [['sessions transcribed since January', '61', '—'],
                         ['typical pre-opening minutes', '~11', 'room unlocked'],
                         ['containing informal remarks', '38', 'estimate'],
                         ['containing remarks on a capital’s position', '2', 'Kavara'],
                         ['other delegations aware', 'none', '—'],
                         ['Ministry rule on where recording starts', 'none', 'until now']]),
 exhibit_cap='Thirty-eight transcripts hold conversations the speakers believed were not being recorded.',
 exhibit_note='No other delegation has asked, and the committee has no rule of its own about '
              'recordings made by delegations.',
 voices=[('Marta Olsen', 'Risk and liability, visiting',
          'Delete the openings and change the rule. We are holding other delegations’ '
          'unguarded words on a government file, and there is no purpose for which we need '
          'them.'),
         ('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'I agree about the rule from tomorrow. Deleting sixty-one openings is destroying '
          'part of a record the Ministry holds, and I would want somebody more senior than me '
          'to decide that.'),
         ('Karim Dalati', 'Information Security and Records',
          'Deletion is the thing you cannot explain afterwards. Seal them, record that they '
          'are sealed and why, and let the rule run from tomorrow. Then every question has an '
          'answer.')],
 steps=[('Find it', 'What do the openings contain?'),
        ('Compare it', 'What are the three proposals?'),
        ('Infer it', 'Why does Karim prefer sealing to deleting?'),
        ('Weigh it', 'Holding words nobody meant to give against destroying a record.'),
        ('Decide', 'What happens to the sixty-one, and what is the rule?')],
 analysis=[('Find it. How many transcripts contain informal remarks?', 'about thirty-eight'),
           ('Compare it. What does Marta propose?', 'deleting the openings and changing the rule'),
           ('Infer it. What is Karim’s objection to deletion?', 'that it cannot be explained afterwards'),
           ('Weigh it. What is Nadia’s hesitation?', 'that destroying part of a Ministry record is above her level'),
           ('Decide. What would you do?', 'answers vary; sealing preserves both the record and the answer')],
 decision='Write what happens to the transcripts and when recording starts.',
 decision_steps=['Say what is done with the sixty-one openings.',
                 'Say when recording begins from now on.',
                 'Say who may open a sealed opening, and on what authority.',
                 'Say what is recorded about the decision itself.'],
 bank=['The … openings are …',
       'From … , recording begins …',
       'A sealed opening may be opened only by …',
       'The decision is recorded in …',
       'This is reviewed …'],
 outcome='The sixty-one openings were sealed rather than deleted, with a minute recording why, '
         'and transcription now begins when the chair opens the session. Eighteen months later '
         'a committee-wide question about delegations’ recording practice was circulated by '
         'the secretariat, and the Ministry was able to answer it in three sentences with '
         'dates. Marta, who had wanted deletion, says the sealing turned out to be the better '
         'answer for a reason she had not considered, which is that the question came from the '
         'secretariat rather than from the delegation whose words were on the file.',
 outcome_q=[('What happened to the openings?', 'they were sealed, not deleted, with a minute recording why'),
            ('Why does Marta accept she was wrong?', 'because the question came from the secretariat, and the Ministry could answer it with dates')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write up the Geneva session',
 task=['This is the tasking the delegation worked to when transcription was introduced in '
       'January, written as a short standing instruction.',
       'It produced records that were shorter, faster and emptier than the ones they '
       'replaced.'],
 draft=['Write up each session from the transcript.',
        'Cover what was said on each item.',
        'Note any changes of position.',
        'Keep it accurate to the text.',
        'Attach anything relevant.',
        'Within a day or two.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one quietly forbids the only part worth writing.',
 asked=['What was decided on each item',
        'What in the room showed a change',
        'The drafter’s readings, marked as readings'],
 back=['Accurate 3-page records',
       'Quotation from the transcript throughout',
       'Nothing a transcript could not have said'],
 gap='"From the transcript" makes the text the only source, "what was said" is the narrower '
     'fact, "accurate to the text" forbids a judgement that goes beyond the words, and '
     '"anything relevant" leaves the attachment question open.',
 back_cap='Records that were faithful to eleven thousand words and silent about the meeting.',
 back_note='Instruction four is the failure. A record that cannot go beyond the text cannot '
           'say that a pause was a decision.',
 diagnosis=[('[1] "from the transcript" — and from the delegate’s own observation?', 'ambiguous referent'),
            ('[2] "what was said on each item" — or what was decided?', 'undefined done'),
            ('[3] "note any changes of position" — shown by what?', 'unstated criterion'),
            ('[4] "accurate to the text" — may a judgement go beyond it?', 'unstated criterion'),
            ('[5] "anything relevant" — attached, or reproduced?', 'ambiguous referent'),
            ('[6] "within a day or two" — finished meaning drafted, or cleared?', 'undefined done')],
 rewrite='Rewrite the tasking so that the record says what happened and marks the drafter’s '
         'readings.',
 scaffold=['What the record is for, and what it must show beyond the words',
           'Where the session begins and ends for recording purposes',
           'The transcript, the notes and the agenda to work from',
           'What each item carries, how a change is evidenced, and how readings are marked',
           'How long the record is and by when',
           'What to do where a silence cannot be interpreted'],
 bank=['Record … so that the Ministry knows … , not only …',
       'Cover … from … to … ; … is out of scope and is not to be transcribed.',
       'Work from … , … and …',
       'State for each item … ; where a delegation’s position changed, say … ; mark clearly which statements are … ; attach … and do not …',
       'Return 1 record of no more than … , within …',
       'Where the drafter cannot say what … meant, …'],
 check=['Does the record have a source besides the transcript?',
        'Must the drafter say what showed a change?',
        'Are readings distinguished from quotation?',
        'Is the start of recording fixed?'],
 model=['Record the committee session of 14 March so that the Ministry knows what happened, not only what was said',
        'The session itself, from the chair’s opening to the close; remarks made before the chair opened are out of scope and are not to be transcribed',
        'The transcript, the delegate’s own notes, and the agenda',
        '1 page; state for each agenda item what was decided, and where a delegation’s position changed, say what in the room showed it; mark clearly which statements are the drafter’s reading rather than quotation; attach the transcript as an annex and do not reproduce it',
        '1 record of no more than 8 paragraphs, within 24 hours',
        'Where the drafter cannot say what a silence or a tone meant, record that it occurred and that its meaning was unclear'],
 cost='3 months of records faithful to the text and empty of the meeting, and 61 transcripts '
      'holding 11 minutes each of other delegations’ unguarded conversation.'),

rev_fig=figs.split('NON-DEFINING CLAUSES',
                   'Wrong',
                   ['The delegate that had opposed it agreed.',
                    'Paragraph seven which was redrafted is agreed.',
                    'Geneva, the committee sits there, is ahead.',
                    'The chair, was Oristani, closed it.'],
                   'Right',
                   ['The delegate, who had opposed it, agreed.',
                    'Paragraph seven, which was redrafted, is agreed.',
                    'Geneva, where the committee sits, is ahead.',
                    'The chair, who was Oristani, closed it.']),
rev_fig_cap='Commas, the right pronoun, and never that.',
rev=dict(
 read=[('A transcript is', ['a record of a meeting', 'a list of utterances', 'a summary', 'an agenda'], 1),
       ('What can a transcript not record?', ['names', 'that a pause was a decision', 'figures', 'wording'], 1),
       ('The record of conversation should now spend its space on', ['the words', 'what the words do not show', 'the agenda', 'the attendance'], 1),
       ('In the Decision Room, what happened to the openings?', ['deleted', 'sealed', 'published', 'kept open'], 1)],
 listen_text='Take transcription without argument, because a delegate cannot speak for twenty '
             'minutes, listen for three hours and take a reliable note. Then be exact about '
             'what you have: a transcript is a list of utterances and contains nothing that '
             'is not speech. So write the record differently, because the words are now free.',
 listen=[('Listen for three ____________.', 'hours'),
         ('A transcript is a list of ____________.', 'utterances'),
         ('Contains nothing that is not ____________.', 'speech'),
         ('The words are now ____________.', 'free')],
 speak=['Describe something that happened in a meeting which no transcript would contain.',
        'Say how you would write it in a record.'],
 write='Write one sentence of a record that marks a judgement as a judgement.',
 vocab=[('Interpreting while the speaker is still speaking is ____________.', 'simultaneous interpretation'),
        ('The language actually being spoken in the room is the ____________.', 'floor language'),
        ('A break that shows the speaker is not certain is a ____________.', 'hesitation'),
        ('The pattern of pitch across a sentence is ____________.', 'intonation'),
        ('A remark made quietly, not to the meeting, is an ____________.', 'aside')],
 gram=[('The Kavaran delegate, ____________ had opposed it, agreed.', 'who'),
       ('Paragraph seven, ____________ was redrafted twice, is agreed.', 'which'),
       ('Geneva, ____________ the committee sits, is an hour ahead.', 'where'),
       ('Nadia, ____________ was present throughout, wrote the record.', 'who'),
       ('The interpreter, ____________ booth is at the back, heard it clearly.', 'whose')]),

found=['Ask when a recording in your office starts, and who decided.',
       'Write one thing from a recent meeting that no transcript would hold.',
       'Mark one sentence in your next record as your own judgement.',
       'Find out who may read a transcript your office holds.'],
end_line='The transcript says what was said. The record says what happened.',
end_next='Next: Two Accounts of One Meeting',
)
