# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='What a Draft Cannot Tell You',
gram='discourse markers of sequence and priority',
ai='what a draft cannot tell you about the room',
strap='CEFR B2 · Grammar: markers of sequence and priority · AI: what a draft cannot tell you',
cando=['order an argument with first, above all, in the first place and finally',
       'mark priority distinctly from sequence',
       'say which facts about a negotiation exist only in the room',
       'recognise when a well-prepared text is the wrong instrument',
       'write a tasking that asks for the text and leaves the room to the delegation'],
hero=('EVERYTHING ON PAPER WAS RIGHT',
      ['The text was right, the precedents were right, the fallbacks were referenced.',
       'The Oristani delegate had been told that morning that he would be replaced.'],
      [(730, 'purple', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'orange', 'short')]),
hero_cap='The sixth round, in which nothing in the preparation was wrong and nothing worked.',

warm=['What have you known about a meeting that was in no document?',
      'When has a well-prepared position failed for reasons outside the subject?',
      'What would you want to tell a successor that you could not write down?'],
read=[
 'By the sixth round the Ministry’s preparation was as good as Samir Haddad had ever made it. '
 'The text was agreed internally, the positions were referenced, the fallbacks carried '
 'precedents, the red lines were signed, the delegation had rehearsed eleven times and the '
 'bracket history was on one page.',
 'The round achieved nothing. The Oristani delegation declined three formulations it had '
 'proposed itself in the fifth round, raised two questions that had been closed since March, '
 'and left at the end of the second day.',
 'The explanation arrived three weeks later and was in no document: the Oristani head of '
 'delegation had been told on the first morning that he would be replaced after the round, '
 'and had spent two days declining to settle anything his successor might wish to reopen. '
 'Nothing in the subject matter was involved at all.',
 'Samir had reasoned in January that the quality of preparation determines the quality of a '
 'round, which is a statement he still regards as true in the large and which led him to '
 'conclude that a round that fails indicates a failure of preparation. That conclusion is '
 'false, and holding it cost his section a bad fortnight examining documents in which there '
 'was nothing to find.',
 'What he now writes at the top of every round report is a line headed Room: what was true of '
 'the room and is in no document. In the sixth round that line reads, in the event, that the '
 'other side could not settle. He says the line is often empty and is worth the trouble on the '
 'occasions when it is not, because the alternative is a Ministry that explains every failure '
 'by the only evidence it keeps, which is paper.'],
c_a=[('How good was the preparation?', 'as good as Samir had made it: referenced, signed, rehearsed, with a bracket history'),
     ('What did the round achieve?', 'nothing; three formulations were declined and two closed questions reopened'),
     ('What was the explanation?', 'the Oristani head of delegation had been told he would be replaced'),
     ('Why did he decline to settle?', 'so as not to settle anything his successor might wish to reopen'),
     ('What false conclusion had Samir drawn?', 'that a round which fails indicates a failure of preparation'),
     ('What line does he now write?', 'Room: what was true of the room and is in no document')],
c_b=[('The subject matter explained the failure.', 'F'),
     ('The delegation had rehearsed eleven times.', 'T'),
     ('The explanation was in a document.', 'F'),
     ('Samir now regards preparation as unimportant.', 'F'),
     ('The Room line is often empty.', 'T'),
     ('The Oristani side left at the end of the second day.', 'T')],
c_c=[('The fallbacks carried ____________.', 'precedents'),
     ('Raised two questions that had been ____________ since March.', 'closed'),
     ('Had spent two days declining to settle anything his ____________ might wish to reopen.', 'successor'),
     ('A bad fortnight examining documents in which there was nothing to ____________.', 'find'),
     ('What was true of the room and is in no ____________.', 'document'),
     ('The only evidence it keeps, which is ____________.', 'paper')],
c_d=[('The round failed for reasons ( outside the subject / in the text ).', ['outside the subject', 'in the text'], 0),
     ('How many formulations were declined?', ['two', 'three', 'eleven', 'none'], 1),
     ('When was the Oristani head told?', ['in March', 'on the first morning', 'after the round', 'in January'], 1),
     ('What did Samir’s false conclusion cost?', ['nothing', 'a bad fortnight', 'a round', 'a position'], 1),
     ('Why is the Room line worth the trouble?', ['it is always full', 'because paper is the only evidence otherwise', 'it is required', 'it is short'], 1)],
c_e=('Sequence or priority? Put each marker in the right column.',
     [('first', 'sequence'), ('above all', 'priority'), ('in the first place', 'priority'),
      ('then', 'sequence'), ('finally', 'sequence'), ('most importantly', 'priority')],
     ['sequence', 'priority']),

v_fig_title='WHAT LIVES ONLY IN THE ROOM',
v_fig=[('people', 'a dynamic'), ('bulb', 'a mood'), ('key', 'a standing'),
       ('clock', 'a fatigue'), ('shield', 'a face-saving formula'), ('pin', 'an internal division')],
v_fig_cap='Six things that decide rounds and appear in no file.',
vocab=[
 ('a room', 'the people present and what is true between them'),
 ('a dynamic', 'the pattern of behaviour between the people present'),
 ('a mood', 'the prevailing feeling in a room at a time'),
 ('a standing', 'the weight a person’s word carries with others'),
 ('a reputation', 'what others expect of a person before they speak'),
 ('a personal relationship', 'the particular connection between two individuals'),
 ('a trust built over years', 'confidence between people that took time to establish'),
 ('a tone of an exchange', 'the manner in which two sides speak to each other'),
 ('a mandate constraint', 'a limit on what a delegation may agree'),
 ('a domestic constraint', 'a limit imposed by politics at home'),
 ('an internal division', 'disagreement within one side'),
 ('a line of authority', 'who may decide what, within a delegation'),
 ('an imposed deadline', 'a time limit set by something outside the negotiation'),
 ('a fatigue', 'the loss of judgement that comes from long sessions'),
 ('a face-saving formula', 'wording that lets a side move without appearing to retreat'),
 ('a loss of face', 'public damage to a person’s or a state’s standing'),
 ('an informal understanding', 'an agreement that is real and unwritten'),
 ('a handshake', 'an act of commitment with no text behind it'),
 ('a change of instruction mid-round', 'new instructions arriving during a session'),
 ('a reading of the other side', 'a judgement about what the other side will do')],
v_a=[('The weight a person’s word carries with others is a ____________.', 'standing'),
     ('Wording that lets a side move without appearing to retreat is a ____________.', 'face-saving formula'),
     ('A limit imposed by politics at home is a ____________.', 'domestic constraint'),
     ('An agreement that is real and unwritten is an ____________.', 'informal understanding'),
     ('A judgement about what the other side will do is a ____________.', 'reading of the other side'),
     ('The loss of judgement that comes from long sessions is a ____________.', 'fatigue'),
     ('Disagreement within one side is an ____________.', 'internal division'),
     ('A time limit set by something outside the negotiation is an ____________.', 'imposed deadline')],
v_b=[('A room is the people present', 'and what is true between them.'),
     ('A dynamic is the pattern of behaviour', 'between the people present.'),
     ('A line of authority is who may decide what,', 'within a delegation.'),
     ('A loss of face is public damage', 'to a person’s or a state’s standing.'),
     ('A handshake is an act of commitment', 'with no text behind it.')],

g_title='Grammar: discourse markers of sequence and priority',
g_rule=['First, then, next and finally order steps in time or in presentation.',
        'Above all, most importantly and in the first place order things by weight.',
        'In the first place marks priority, not time; firstly marks time.',
        'Do not mix the two systems in one list, or the reader cannot tell order from '
        'importance.'],
g_fig=('LOOSE',
       ['Firstly the text, and most importantly the precedents, then the room.',
        'Finally and above all, the delegation was tired.',
        'First of all the biggest problem was the mandate.',
        'Lastly, which matters most, the room.'],
       'PRECISE',
       ['First the text, then the precedents, then the room.',
        'Above all, the delegation was tired; the text was secondary.',
        'In the first place the mandate was the obstacle; the drafting came second.',
        'Finally, and least important of the three, the seating.'],
       'four lists in which order and weight are mixed',
       'four lists using one system each, or marking the change'),
g_fig_cap='A list that mixes order with importance tells the reader neither.',
g_a=[('____________ the text, then the precedents, then the room.', 'First'),
     ('____________ all, the delegation was tired.', 'Above'),
     ('In the ____________ place the mandate was the obstacle.', 'first'),
     ('____________, and least important of the three, the seating.', 'Finally'),
     ('Most ____________, the other side could not settle.', 'importantly'),
     ('____________, the text was agreed; second, the fallbacks were referenced.', 'First'),
     ('The drafting came ____________.', 'second'),
     ('____________ of the three obstacles, the mandate was the real one.', 'First'),
     ('____________, nothing in the subject matter was involved.', 'Finally')],
g_b=[('In the first place marks ( time / priority ).', ['time', 'priority'], 1),
     ('____ all, the delegation was tired.', ['Finally', 'Above', 'First', 'Next'], 1),
     ('Which marks time?', ['above all', 'then', 'most importantly', 'in the first place'], 1),
     ('Mixing the two systems tells the reader', ['both', 'neither', 'the order', 'the weight'], 1),
     ('____, and least important of the three, the seating.', ['Above all', 'Finally', 'In the first place', 'Most importantly'], 1),
     ('Which marks weight?', ['next', 'most importantly', 'then', 'finally'], 1)],

d1=dict(title='Nothing in the subject was involved',
        fig=(['Three formulations declined.', 'Which they proposed themselves.'],
             ['So we misread the text.', 'We misread the man.']),
        cap='Samir Haddad and Ambassador Faris Said.',
        lines=[('Samir', 'They declined three formulations they proposed in the fifth round. I '
                         'have been through the text four times.'),
               ('Faris', 'You will not find it in the text.'),
               ('Samir', 'Then where?'),
               ('Faris', 'He was told on the first morning that he is being replaced after the '
                         'round. He spent two days making sure he settled nothing his successor '
                         'might want to reopen.'),
               ('Samir', 'How do you know?'),
               ('Faris', 'His deputy told my deputy on the second evening, and I have had the '
                         'same conversation from the other side of it twice in my career.'),
               ('Samir', 'None of which is in any document.'),
               ('Faris', 'None of which could be. And above all it is not a failure of your '
                         'preparation, which was the best I have worked from.'),
               ('Samir', 'I spent a fortnight looking for the failure in the preparation, '
                         'because I had concluded in January that a round which fails indicates '
                         'a failure of preparation.'),
               ('Faris', 'That is true often enough to be dangerous.'),
               ('Samir', 'It is the kind of statement that is true in the large and false about '
                         'any particular Tuesday. I will not make that mistake in that form '
                         'again, and I expect to make it in some other form.'),
               ('Faris', 'Then put a line at the top of the round report for what was true of '
                         'the room, and I will fill it in when there is something to say.')],
        a=[('What did the Oristani side do?', 'declined three formulations it had itself proposed'),
           ('What was the reason?', 'its head of delegation had been told he was being replaced'),
           ('How was it learned?', 'his deputy told Faris’s deputy on the second evening'),
           ('What conclusion had Samir drawn in January?', 'that a round which fails indicates a failure of preparation'),
           ('What does Faris propose?', 'a line at the top of the round report for what was true of the room')],
        b=[('He settled nothing his ____________ might want to reopen.', 'successor'),
           ('The best I have ____________ from.', 'worked'),
           ('True in the large and false about any particular ____________.', 'Tuesday'),
           ('A line at the top of the round ____________.', 'report')]),
d2=dict(title='The line that is usually empty',
        fig=(['A line for the room.', 'Usually empty.'],
             ['Then why keep it?', 'For the rounds that are not usual.']),
        cap='Samir and Dr Hana Mourad.',
        lines=[('Hana', 'You want a line at the top of every round report headed Room.'),
               ('Samir', 'What was true of the room and is in no document. One or two sentences, '
                         'or the word none.'),
               ('Hana', 'Most reports will say none.'),
               ('Samir', 'Most will. In the sixth round it would have said that the other side '
                         'could not settle, and the Ministry would have saved a fortnight and '
                         'three wrong conclusions.'),
               ('Hana', 'There is a risk. A line asking for what is not in the documents is a '
                        'line that invites speculation, and in two years somebody will read '
                        'speculation as fact.'),
               ('Samir', 'Then the line carries how it is known. Told to my deputy by their '
                         'deputy on the second evening. That is a source and a date, which is '
                         'what the rest of our practice requires everywhere else.'),
               ('Hana', 'And where the delegation is only guessing?'),
               ('Samir', 'Then it says so, in those words. The delegation’s reading, no source.'),
               ('Hana', 'That I can accept. What I want recorded is that this line will '
                        'sometimes be wrong in a way nothing can check, which is not true of any '
                        'other part of a round report.'),
               ('Samir', 'It is the only part of the report that rests on what people say to '
                         'each other in corridors, and I would rather have it with that warning '
                         'than not have it.'),
               ('Hana', 'Then put the warning in the standing instruction and not in a note that '
                        'nobody reads twice.')],
        a=[('What is the Room line?', 'one or two sentences on what was true of the room and is in no document'),
           ('What will most reports say?', 'none'),
           ('What would it have said in the sixth round?', 'that the other side could not settle'),
           ('What is Hana’s risk?', 'that a line inviting what is not documented invites speculation read later as fact'),
           ('How is that met?', 'the line carries how it is known, or says the delegation’s reading, no source')],
        b=[('What was true of the room and is in no ____________.', 'document'),
           ('That is a ____________ and a date.', 'source'),
           ('The delegation’s reading, no ____________.', 'source'),
           ('Rests on what people say to each other in ____________.', 'corridors')]),

speak=[('Order and weight',
        ['Student A: list four obstacles in a situation at work, in time order.',
         'Student B: list the same four by importance.',
         'Say aloud which markers you used for each and do not mix them.']),
       ('The room',
        ['Describe a meeting that went differently from how it was prepared.',
         'Say what was true of the room that was in no document.',
         'Your partner asks how you knew.']),
       ('The line that is empty',
        ['Take a recent meeting of your own.',
         'Say whether a Room line would have been empty.',
         'If not, say what it would have said and how you knew it.'])],

ext_title='Preparation can be complete and a round can fail for reasons that exist only among the people present',
ext_fig=figs.datatable('THE SIXTH ROUND',
                       ['', 'Finding', 'In a document?'],
                       [['the text agreed internally', 'yes', 'yes'],
                        ['positions and fallbacks referenced', 'yes', 'yes'],
                        ['red lines signed by the authority', 'yes', 'yes'],
                        ['rehearsals completed', '11', 'yes'],
                        ['the other head of delegation being replaced', 'yes', 'no'],
                        ['what explained the round', 'the last row', 'no']]),
ext_fig_cap='Five rows of excellent preparation and one row that decided the round.',
ext=[
 'A section that has adopted every practice in this book arrives at a round with a text agreed '
 'internally, positions and fallbacks carrying references, limits signed by the competent '
 'authority, a bracket history on one page and a delegation that has rehearsed. This is a '
 'material improvement on what was possible three years ago and the gains are real on every '
 'measure a ministry keeps.',
 'And then a round fails for a reason that is in none of it. The other head of delegation has '
 'been told that morning that he is to be replaced, and spends two days declining to settle '
 'anything his successor might wish to reopen, including three formulations he proposed '
 'himself in the previous round. Nothing in the subject matter is involved. No document on '
 'either side contains the explanation, and the explanation is the whole of what happened.',
 'The danger at this point is specific and it follows from the improvement rather than from '
 'any failure. A ministry that has invested in preparation, and can see the quality of its own '
 'documents, will explain outcomes with the evidence it keeps. If every position is referenced '
 'and the round still failed, the reference must have been wrong; the section examines its '
 'documents, finds nothing, and examines them again. The general proposition that preparation '
 'determines outcomes is true enough to be dangerous: it is true across fifty rounds and false '
 'about any particular Tuesday.',
 'What exists only in the room is a short and stable list: who has standing with whom, what '
 'the other delegation can and cannot agree this week, whether anybody is tired, whether there '
 'is a division on the other side, what will cause a loss of face, and whether somebody is '
 'about to be replaced. These decide rounds. None of them is published, most are learned in '
 'corridors, and a ministry that keeps no place for them will account for its failures using '
 'the only evidence it has, which is paper.',
 'The practice that answers it is small: a line at the top of the round report, headed Room, '
 'for what was true of the room and is in no document, carrying how it is known, and saying '
 'either none or the delegation’s reading, no source. Most reports will say none. The line '
 'earns its place on the rounds that would otherwise be explained wrongly for a fortnight, and '
 'it is the one part of a round report that rests on corridors and cannot be checked, which '
 'has to be said in the instruction rather than discovered by a successor.'],
dp1=('Reporting the unwritten',
     'Delegations in several foreign services added a short standing field to round reports in '
     '2025 for circumstances bearing on the negotiation that appear in no document, with a '
     'requirement to state how each was known.',
     'Source: reported practice in diplomatic negotiation reporting, 2025–2026.'),
e_a=[('What does a well-prepared section arrive with?', 'an agreed text, referenced positions and fallbacks, signed limits, a bracket history and rehearsals'),
     ('What explained the sixth round?', 'that the other head of delegation was being replaced'),
     ('What is the specific danger?', 'explaining outcomes with the evidence the ministry keeps, which is paper'),
     ('Why is the general proposition dangerous?', 'because it is true across fifty rounds and false about any particular Tuesday'),
     ('What is on the short list of what exists only in the room?', 'standing, what the other side can agree, fatigue, division, face, and replacement')],
e_b=[('The gains from preparation are unreal.', 'F'),
     ('The explanation was in a document on the Oristani side.', 'F'),
     ('Preparation determines outcomes across many rounds.', 'T'),
     ('Most Room lines will carry something.', 'F'),
     ('The Room line must say how it is known.', 'T'),
     ('The Room line can be checked like the rest of the report.', 'F')],

w_model=(
 'Purpose: report the sixth round so that a reader can see what was agreed, what was not, and '
 'what bore on the round that appears in no document. Scope: the 2 days of the round and the '
 'exchanges in its margins; the text itself is reported separately and is out of scope here. '
 'Inputs: the delegation’s notes, the chair’s summary, and what members of the delegation '
 'were told in the margins. Criteria: report what was agreed and what was declined, by '
 'article; state for each declined formulation whether the other side had previously proposed '
 'it; in the Room line, state what was true of the room and is in no document, with how it is '
 'known, or state none; where the delegation is reading rather than reporting, say the '
 'delegation’s reading, no source. Done: 1 report of 2 pages with the Room line first, '
 'within 24 hours of the close. Fallback: where the delegation cannot say why a position '
 'changed, say that it cannot and do not offer a reason.'),
w_fig=figs.spec_card('THE TASKING FOR A ROUND REPORT',
                     [('Purpose', 'what was agreed, what was not, and what bore on it'),
                      ('Scope', 'the 2 days and the margins; the text reported separately'),
                      ('Inputs', 'the notes, the chair’s summary, what was said in the margins'),
                      ('Criteria', 'agreed and declined by article; the Room line with its source'),
                      ('Done', '2 pages with the Room line first, within 24 hours'),
                      ('Fallback', 'no explanation available: say so, offer no reason')]),
w_fig_cap='The Room line comes first and is usually the word none.',
w_task='Write a report tasking for a meeting in your own work.',
w_steps=['Say what the reader must be able to see.',
         'Bound the occasion and separate the text.',
         'Require the unwritten circumstances with their source.',
         'Require a reading to be labelled as a reading.',
         'Say what to do where no explanation is available.'],
w_bank=['Report … so that a reader can see … , … and …',
        'Cover … ; … is reported separately and is out of scope here.',
        'Work from … , … and …',
        'Report … by … ; state for each … ; in the Room line, state … , with … , or state … ; where the delegation is reading … , say …',
        'Where the delegation cannot say why … , say that it cannot and do not …'],
w_check=['Is the Room line required, with its source?',
         'Must a reading be labelled as one?',
         'Is offering an unsupported reason forbidden?',
         'Is the word none permitted?'],

t_title='What a draft cannot tell you about the room',
t_fig=figs.split('A ROUND',
                 'Prepared on paper',
                 ['the text, agreed internally',
                  'positions and fallbacks, referenced',
                  'limits, signed',
                  'rehearsals, completed'],
                 'Decided in the room',
                 ['who has standing with whom',
                  'what the other side can agree this week',
                  'who is tired, and who is divided',
                  'who is about to be replaced']),
t_fig_cap='Everything on the left is now achievable. Everything on the right decides rounds.',
t_body=[
 'A section using every practice in this book arrives with a text agreed internally, positions '
 'and fallbacks carrying references, limits signed by the competent authority, a bracket '
 'history on a page and a rehearsed delegation. That is a real improvement and nothing here '
 'argues otherwise.',
 'Then a round fails for a reason in none of it. The other head of delegation is told on the '
 'first morning that he is to be replaced and spends two days settling nothing his successor '
 'might reopen, including formulations he proposed himself. The danger that follows is created '
 'by the improvement: a section that can see the quality of its own documents will explain '
 'outcomes with documents, and will spend a fortnight looking for an error that is not there. '
 'Preparation determines outcomes across fifty rounds and explains nothing about one Tuesday.',
 'So keep a place for the room. Above all, the list of what lives there is short and stable: '
 'standing, what the other side can agree this week, fatigue, internal division, face, and '
 'replacement. Then make it a line at the top of the round report, headed Room, carrying how '
 'it is known, and permitted to say none or the delegation’s reading, no source. Finally, say '
 'in the instruction that this line cannot be checked, which is true of no other part of the '
 'report and is why it has to be labelled rather than trusted.'],
t_say=[('Keep the line: ', 'Room: what was true of the room and is in no document.'),
       ('Source it: ', 'Told to my deputy by their deputy on the second evening.'),
       ('Label the guess: ', 'The delegation’s reading, no source.')],
t_bound=('No preparation reaches what is true only among the people present, and no document '
         'records it unless somebody writes it down from a corridor. A ministry with excellent '
         'documents and no place for the room will explain its failures from the evidence it '
         'keeps, which is the one failure that gets worse as the preparation gets better.'),
t_a=[('Room: what was true of the room and is in no ____________.', 'document'),
     ('Told to my deputy by their deputy on the second ____________.', 'evening'),
     ('The delegation’s reading, no ____________.', 'source'),
     ('Preparation determines outcomes across fifty ____________.', 'rounds'),
     ('Standing, fatigue, internal division, face, and ____________.', 'replacement'),
     ('The one failure that gets worse as the preparation gets ____________.', 'better')],
t_b_rubric='Rewrite each list so that one system is used, or the change is marked.',
t_b=[('Firstly the text, and most importantly the precedents, then the room.', 'first the text, then the precedents, then the room'),
     ('Finally and above all, the delegation was tired.', 'above all, the delegation was tired; the text was secondary'),
     ('First of all the biggest problem was the mandate.', 'in the first place the mandate was the obstacle; the drafting came second'),
     ('Lastly, which matters most, the room.', 'finally, and least important of the three, the seating')],

case=dict(
 title='The Decision Room · A line that cannot be checked',
 brief=[
  'The Room line has been in use for a year. In 31 round reports it said none 24 times; on 7 '
  'occasions it carried something, and on 5 of those the something explained the round.',
  'On one occasion it carried a reading that turned out to be wrong: a delegation recorded '
  'that the other side was internally divided, and the division did not exist.',
  'The wrong reading was quoted in a brief nine months later. Samir, who proposed the line, '
  'must decide whether it survives. Hana had warned of exactly this. Nadia says the line is '
  'the most useful thing in a round report.'],
 exhibit=figs.datatable('THE ROOM LINE, 31 REPORTS',
                        ['', 'Figure', 'Note'],
                        [['reports with the line', '31', '—'],
                         ['saying none', '24', '—'],
                         ['carrying something', '7', '—'],
                         ['of those, with a stated source', '5', '—'],
                         ['of those, explained the round', '5', '—'],
                         ['labelled reading, no source', '2', '1 of them wrong']]),
 exhibit_cap='Every line with a source proved useful. One of the two unsourced readings was '
             'wrong and was quoted.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'I warned that an unsourced line would be read as fact in two years, and it was read '
          'as fact in nine months. Keep the sourced half and abolish the unsourced half.'),
         ('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'The unsourced reading is often the only thing a delegation has, and sometimes it is '
          'right. Abolish it and delegations will stop writing the sourced ones too, because '
          'the habit is one habit.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Five of five sourced lines explained a round. One of two unsourced lines was wrong. '
          'The figures favour keeping both and marking the second more loudly than we do.')],
 steps=[('Find it', 'How many lines carried a stated source?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Nadia say the habit is one habit?'),
        ('Weigh it', 'A wrong reading quoted against a reading that is sometimes all there is.'),
        ('Decide', 'Does the unsourced reading survive, and how is it marked?')],
 analysis=[('Find it. How many of the seven had a source?', 'five, and all five explained the round'),
           ('Compare it. What does Hana propose?', 'keeping the sourced half and abolishing the unsourced half'),
           ('Infer it. What does Nadia predict?', 'that abolishing one will stop delegations writing the other'),
           ('Weigh it. How soon was the wrong reading quoted as fact?', 'nine months'),
           ('Decide. What would you do?', 'answers vary; the figures favour keeping both with a stronger mark on the unsourced')],
 exhibit_note='The wrong reading was quoted in a brief 9 months later without its label.',
 decision='Write the rule for the Room line.',
 decision_steps=['Say whether an unsourced reading may be recorded.',
                 'Say how it must be marked.',
                 'Say what happens when it is quoted elsewhere.',
                 'Say what is measured and when it is reviewed again.'],
 bank=['An unsourced reading …',
       'It is marked …',
       'Where it is quoted in another document, …',
       'The number of lines … is reviewed …',
       'This is reviewed …'],
 outcome='Unsourced readings survived, under a heavier mark: the words no source, the '
         'delegation’s reading only are printed on the same line and must be carried whenever '
         'the line is quoted anywhere else, and a quotation without them is treated as a '
         'misquotation. In the following year the line carried something on nine occasions, '
         'six with sources, and no unsourced reading was quoted without its label. Hana, who '
         'had wanted the unsourced half abolished, says the carrying rule was the answer and '
         'that her objection had been to the absence of a rule rather than to the readings '
         'themselves, which she had not distinguished at the time.',
 outcome_q=[('What mark must an unsourced reading carry?', 'no source, the delegation’s reading only, carried whenever it is quoted'),
            ('What does Hana now say her objection really was?', 'to the absence of a carrying rule rather than to the readings')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Report the sixth round',
 task=['This is the tasking the delegation worked to when it reported the sixth round.',
       'The report ran to two accurate pages and sent the section looking for an error in its '
       'own documents for a fortnight.'],
 draft=['Report the round.',
        'Say what was agreed and what was not.',
        'Explain why the round did not progress.',
        'Cover the formal sessions.',
        'Include anything relevant from the margins.',
        'As soon as possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third asks for an explanation from material that does not '
           'contain one.',
 asked=['A Room line with its source, or none',
        'Readings labelled as readings',
        'No reason offered where none is known'],
 back=['2 accurate pages on the formal sessions',
       'An explanation drawn from the text',
       'A fortnight spent auditing the preparation'],
 gap='"Explain why the round did not progress" assumes the reason is in the material, "the '
     'formal sessions" excludes the margins where the explanation was, "anything relevant" '
     'sets no test, and "as soon as possible" fixes nothing.',
 back_cap='A report that explained a failure from the only evidence it had, which was the '
          'wrong evidence.',
 back_note='Line three is the failure. Asked to explain from documents, a report explains from '
           'documents, and the explanation was in a corridor.',
 diagnosis=[('[1] "report the round" — which sessions, and the margins too?', 'unscoped set'),
            ('[2] "explain why the round did not progress" — assumes the reason is in the material', 'hidden assumption'),
            ('[3] "cover the formal sessions" — assumes the formal sessions contain the round', 'hidden assumption'),
            ('[4] "anything relevant from the margins" — relevant by what test, and sourced how?', 'unscoped set'),
            ('[5] "as soon as possible" — finished when, and sent to whom?', 'undefined done'),
            ('[6] nothing on unexplained changes — a reason offered anyway?', 'undefined done')],
 rewrite='Rewrite the tasking so that the unwritten is reported with its source and nothing is '
         'invented.',
 scaffold=['What the reader must be able to see',
           'The occasion covered and what is reported elsewhere',
           'The notes, the summary and what was said in the margins',
           'Agreed and declined by article; the Room line with its source; readings labelled',
           'The length, the order and the deadline',
           'What to do where no explanation is available'],
 bank=['Report … so that a reader can see …',
       'Cover … ; … is out of scope here.',
       'Work from … , … and …',
       'Report … ; state for each … ; in the Room line state … , with … , or … ; where the delegation is reading, …',
       'Return 1 report of … with … first, within …',
       'Where the delegation cannot say why … , … and do not …'],
 check=['Is the Room line required and allowed to say none?',
        'Must the margins be covered?',
        'Must a reading be labelled?',
        'Is inventing a reason forbidden?'],
 model=['Report the sixth round so that a reader can see what was agreed, what was not, and what bore on the round that appears in no document',
        'The 2 days of the round and the exchanges in its margins; the text itself is reported separately and is out of scope here',
        'The delegation’s notes, the chair’s summary, and what members of the delegation were told in the margins',
        'Report what was agreed and what was declined, by article; state for each declined formulation whether the other side had previously proposed it; in the Room line, state what was true of the room and is in no document, with how it is known, or state none; where the delegation is reading rather than reporting, say the delegation’s reading, no source',
        '1 report of 2 pages with the Room line first, within 24 hours of the close',
        'Where the delegation cannot say why a position changed, say that it cannot and do not offer a reason'],
 cost='1 fortnight of a legal section auditing documents in which there was no error, and 3 '
      'wrong conclusions about a counterpart’s position drawn from a change of personnel '
      'nobody had recorded.'),

rev_fig=figs.split('SEQUENCE AND PRIORITY',
                   'Mixed',
                   ['Firstly the text, and most importantly …',
                    'Finally and above all, the delegation …',
                    'First of all the biggest problem …',
                    'Lastly, which matters most …'],
                   'Separate',
                   ['First the text, then the precedents.',
                    'Above all, the delegation was tired.',
                    'In the first place the mandate …',
                    'Finally, and least important …']),
rev_fig_cap='First, then, finally for order; above all, in the first place for weight.',
rev=dict(
 read=[('The sixth round failed because', ['the text was wrong', 'the other head was being replaced', 'the fallbacks were unreferenced', 'the rehearsals were thin'], 1),
       ('The danger created by good preparation is', ['complacency', 'explaining outcomes from paper', 'over-rehearsal', 'longer briefs'], 1),
       ('Most Room lines say', ['something', 'none', 'a reading', 'a source'], 1),
       ('In the Decision Room, what rule was adopted?', ['abolition', 'a carrying rule for the label', 'a new field', 'nothing'], 1)],
 listen_text='A ministry that has invested in preparation, and can see the quality of its own '
             'documents, will explain outcomes with the evidence it keeps. If every position '
             'is referenced and the round still failed, the reference must have been wrong.',
 listen=[('Can see the ____________ of its own documents.', 'quality'),
         ('Explain outcomes with the evidence it ____________.', 'keeps'),
         ('If every position is ____________.', 'referenced'),
         ('The reference must have been ____________.', 'wrong')],
 speak=['Say what was true of a recent meeting that was in no document.',
        'Order four obstacles once by time and once by weight.'],
 write='Write one Room line for a meeting of your own, with its source.',
 vocab=[('The weight a person’s word carries with others is a ____________.', 'standing'),
        ('Wording that lets a side move without appearing to retreat is a ____________.', 'face-saving formula'),
        ('An agreement that is real and unwritten is an ____________.', 'informal understanding'),
        ('A judgement about what the other side will do is a ____________.', 'reading of the other side'),
        ('Disagreement within one side is an ____________.', 'internal division')],
 gram=[('____________ the text, then the precedents, then the room.', 'First'),
       ('____________ all, the delegation was tired.', 'Above'),
       ('In the ____________ place the mandate was the obstacle.', 'first'),
       ('____________, and least important of the three, the seating.', 'Finally'),
       ('Most ____________, the other side could not settle.', 'importantly')]),

found=['Write a Room line for the last meeting you attended.',
       'Ask a colleague what they knew about a meeting that was in no document.',
       'Check whether your office records why a counterpart changed position.',
       'Separate order from importance in your next list of four.'],
end_line='The better the preparation, the more tempting it is to explain a failure from paper.',
end_next='Book 5: Citizens, Public and Crisis',
)
