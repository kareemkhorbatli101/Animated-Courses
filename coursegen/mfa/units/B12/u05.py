# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Two Accounts of One Meeting',
gram='sequencing and time linkers in a chronology',
ai='comparing two accounts of the same meeting',
strap='CEFR B1 · Grammar: sequencing and time linkers · AI: comparing two accounts',
cando=['order events with before, after, while, then and by the time',
       'use subsequently, in the interim and simultaneously correctly',
       'set two accounts of one meeting side by side',
       'say what a divergence between accounts does and does not prove',
       'write a tasking that asks for differences, not for a winner'],
hero=('THE SAME NINETY MINUTES, TWICE',
      ['Both officers were in the room for all of it.',
       'One account says a commitment was given. The other does not mention it.'],
      [(730, 'blue', 'long'), (1390, 'orange', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='Two records of the bilateral of 9 April, filed eleven hours apart.',

warm=['Have two people ever described a meeting you attended differently?',
      'Which of them was wrong?',
      'What would you do if two official records of one meeting disagreed?'],
read=[
 'On 9 April the Ministry held a ninety-minute bilateral with Oristan. Two officers attended '
 'and both took notes: Lina Khalil from Bilateral Affairs, and a second officer from the '
 'economic side.',
 'Lina filed her account that evening. The second officer filed his the following morning. '
 'Before either had read the other, both accounts were on the file.',
 'Lina’s account says that the Oristani side undertook to circulate a draft text by the end '
 'of May. The second account covers the same item in two sentences and does not mention a '
 'date at all.',
 'When the divergence was noticed, three weeks later, nobody could say which account was '
 'right. Lina remembered the undertaking clearly. The second officer remembered a remark '
 'about May that he had taken as an aspiration rather than a commitment, and he had therefore '
 'left it out.',
 'The Ministry now runs both accounts of any meeting through a comparison step before either '
 'is filed. The comparison does not decide who is right, which it cannot do, and it was never '
 'asked to. It lists what one account contains and the other does not, and then two people '
 'who were in the room talk for five minutes while the meeting is still fresh.'],
c_a=[('How long was the bilateral?', 'ninety minutes'),
     ('Who attended for the Ministry?', 'Lina Khalil and a second officer from the economic side'),
     ('When did each file?', 'Lina that evening, the second officer the following morning'),
     ('What does Lina’s account say about a draft text?', 'that Oristan undertook to circulate one by the end of May'),
     ('Why did the second officer leave it out?', 'he took the remark about May as an aspiration, not a commitment'),
     ('What does the comparison step do?', 'it lists what one account contains and the other does not')],
c_b=[('Both officers were in the room.', 'T'),
     ('They read each other’s accounts before filing.', 'F'),
     ('The divergence was noticed the same week.', 'F'),
     ('The comparison decides which account is right.', 'F'),
     ('Two people who were present then talk for five minutes.', 'T'),
     ('The second account gives a date.', 'F')],
c_c=[('Both officers took ____________.', 'notes'),
     ('The Oristani side ____________ to circulate a draft text.', 'undertook'),
     ('He had taken it as an ____________ rather than a commitment.', 'aspiration'),
     ('Nobody could say which account was ____________.', 'right'),
     ('The comparison does not decide who is ____________.', 'right'),
     ('While the meeting is still ____________.', 'fresh')],
c_d=[('The comparison step runs ( after / before ) filing.', ['after', 'before'], 1),
     ('How long after the meeting was the divergence noticed?', ['one day', 'three weeks', 'three months', 'a year'], 1),
     ('What did Lina remember?', ['nothing', 'the undertaking clearly', 'a date in June', 'an aspiration'], 1),
     ('What cannot the comparison do?', ['list differences', 'decide who is right', 'read both', 'run fast'], 1),
     ('Who settles the divergence?', ['the comparison', 'two people who were in the room', 'the Director', 'Oristan'], 1)],
c_e=('Put each linker in the right column.',
     [('before', 'order'), ('subsequently', 'order'), ('while', 'at the same time'),
      ('simultaneously', 'at the same time'), ('by the time', 'order'),
      ('in the interim', 'between two points')],
     ['order', 'at the same time', 'between two points']),

v_fig_title='TWO RECORDS, ONE ROOM',
v_fig=[('doc', 'an account'), ('doc', 'a second account'), ('chart', 'a timeline'),
       ('clock', 'an interval'), ('bulb', 'to cross-check'), ('pin', 'a mismatch')],
v_fig_cap='Six words for setting one record beside another.',
vocab=[
 ('an account', 'a written record of what happened at a meeting'),
 ('a second account', 'a record of the same event written independently'),
 ('to diverge', 'to differ, where agreement was expected'),
 ('a mismatch', 'a point at which two records do not agree'),
 ('to cross-check', 'to test one record against another'),
 ('to bear out', 'to support, where another record has said the same'),
 ('a silence in the record', 'a point an account does not mention at all'),
 ('a sequence', 'the order in which things happened'),
 ('chronology', 'the arrangement of events by time'),
 ('to date-stamp', 'to mark a document with the time it was made'),
 ('a timeline', 'a list of events in the order they occurred'),
 ('to precede', 'to come before'),
 ('to follow on', 'to come after, and because of'),
 ('simultaneously', 'at the same time as something else'),
 ('subsequently', 'after that, and later than it'),
 ('in the interim', 'in the period between two stated points'),
 ('an interval', 'the time between two events'),
 ('to overlap', 'to cover some of the same ground'),
 ('a running note', 'a note taken continuously during a meeting'),
 ('a marginal note', 'a short remark written beside the main text')],
v_a=[('A point at which two records do not agree is a ____________.', 'mismatch'),
     ('To test one record against another is to ____________.', 'cross-check'),
     ('A point an account does not mention at all is a ____________.', 'silence in the record'),
     ('To mark a document with the time it was made is to ____________.', 'date-stamp'),
     ('In the period between two stated points is ____________.', 'in the interim'),
     ('To come after, and because of, is to ____________.', 'follow on'),
     ('A note taken continuously during a meeting is a ____________.', 'running note'),
     ('A short remark written beside the main text is a ____________.', 'marginal note')],
v_b=[('An account is a written record', 'of what happened at a meeting.'),
     ('To bear out is to support,', 'where another record has said the same.'),
     ('Chronology is the arrangement', 'of events by time.'),
     ('An interval is the time', 'between two events.'),
     ('To overlap is to cover', 'some of the same ground.')],

g_title='Grammar: sequencing and time linkers',
g_rule=['Before, after and while join two clauses: while the chair spoke, he wrote.',
        'Then and subsequently begin a new sentence about a later event.',
        'By the time gives a point by which something had already happened.',
        'In the interim covers the period between two points you have named.'],
g_fig=('LOOSE',
       ['She filed, and he filed, and then it was noticed.',
        'The draft came. Also a note came.',
        'Nothing happened and three weeks passed.',
        'After. The divergence was found.'],
       'PRECISE',
       ['She filed that evening; he filed the following morning.',
        'The draft arrived, and a note followed on from it.',
        'In the interim, three weeks passed and nothing was asked.',
        'By the time the divergence was found, both were on the file.'],
       'three ands and a sentence with no main verb',
       'four sentences in which the order is stated'),
g_fig_cap='Order is not optional in a record; the reader cannot supply it.',
g_a=[('____________ she filed her account, she had read nothing of his.', 'Before'),
     ('He filed ____________ the following morning.', 'his'),
     ('____________ the chair spoke, she wrote a running note.', 'While'),
     ('The draft arrived, and a note ____________ on from it.', 'followed'),
     ('____________, three weeks passed and nothing was asked.', 'In the interim'),
     ('____________ the divergence was found, both accounts were on the file.', 'By the time'),
     ('The comparison runs ____________ either account is filed.', 'before'),
     ('Two people then talk ____________ five minutes.', 'for'),
     ('____________, the Ministry changed the rule.', 'Subsequently')],
g_b=[('The comparison runs ( before / in the interim ) filing.', ['before', 'in the interim'], 0),
     ('____ the chair spoke, she wrote a running note.', ['By the time', 'While', 'Subsequently', 'In the interim'], 1),
     ('____ the divergence was found, both were on the file.', ['While', 'By the time', 'Then', 'Before'], 1),
     ('Three weeks passed ____ and nothing was asked.', ['simultaneously', 'in the interim', 'before', 'by then'], 1),
     ('A later event can begin with', ['while', 'subsequently', 'before', 'during'], 1),
     ('Which means at the same time?', ['subsequently', 'simultaneously', 'in the interim', 'by the time'], 1)],

d1=dict(title='Neither of us was wrong',
        fig=(['My account says end of May.', 'Mine does not say May at all.'],
             ['Then one of us is wrong.', 'Or we heard the same words differently.']),
        cap='Lina Khalil and the officer who attended for the economic side.',
        lines=[('Lina', 'My account says Oristan undertook to circulate a draft by the end of '
                        'May. Yours does not mention a date.'),
               ('Officer', 'Because I did not hear an undertaking. I heard somebody say they '
                           'hoped to have something by May.'),
               ('Lina', 'He said by the end of May. I wrote it as he said it.'),
               ('Officer', 'I am sure you did. The question is what it was.'),
               ('Lina', 'Which we cannot settle three weeks later.'),
               ('Officer', 'No. If we had cross-checked that evening, while both of us still '
                           'had the room in our heads, it would have taken four minutes.'),
               ('Lina', 'Instead we both filed and neither read the other.'),
               ('Officer', 'And in the interim the Director has quoted your date to the '
                           'Minister.'),
               ('Lina', 'That is the part that matters. If Oristan circulates nothing by May, '
                         'the Ministry will have told its Minister something it cannot support.'),
               ('Officer', 'So we write to Oristan now and ask them to confirm the timing in '
                            'writing.'),
               ('Lina', 'Which is what we should have done on the tenth of April.'),
               ('Officer', 'It is what the comparison would have made us do on the tenth of '
                           'April.')],
        a=[('What does Lina’s account say?', 'that Oristan undertook to circulate a draft by the end of May'),
           ('What did the second officer hear?', 'somebody saying they hoped to have something by May'),
           ('How long would a cross-check that evening have taken?', 'four minutes'),
           ('What has happened in the interim?', 'the Director has quoted Lina’s date to the Minister'),
           ('What do they decide to do?', 'write to Oristan and ask them to confirm the timing in writing')],
        b=[('I heard somebody say they ____________ to have something by May.', 'hoped'),
           ('While both of us still had the ____________ in our heads.', 'room'),
           ('Something it cannot ____________.', 'support'),
           ('Confirm the timing in ____________.', 'writing')]),
d2=dict(title='It lists; it does not judge',
        fig=(['Which account does it say is right?', 'Neither. It lists the differences.'],
             ['Then what is it for?', 'For making two people talk.']),
        cap='Dr Hana Mourad and Lina, at the Monday meeting.',
        lines=[('Hana', 'I have read the comparison of the two April accounts. It is useful. It '
                        'also does not tell me which officer to believe.'),
               ('Lina', 'It is not able to. It was not in the room.'),
               ('Hana', 'Then I want to be careful about how we describe it, because the '
                        'Director will ask what it concluded, and the honest answer is nothing.'),
               ('Lina', 'The honest answer is that it found four differences, one of which '
                        'turned out to matter a great deal.'),
               ('Hana', 'That is a better answer. Though I notice we only know it mattered '
                        'because two people then argued about it.'),
               ('Lina', 'Yes. The list is the beginning of the work.'),
               ('Hana', 'What concerns me is the opposite case. Two accounts agree completely. '
                        'The comparison finds nothing. Everybody relaxes.'),
               ('Lina', 'And they might agree because both officers wrote from the same '
                        'transcript.'),
               ('Hana', 'Which is exactly what will happen now that transcripts arrive in '
                        'minutes. Agreement will stop meaning anything, and it will take us '
                        'two years to notice.'),
               ('Lina', 'So we require the accounts to be written independently and say so on '
                        'the face of them.'),
               ('Hana', 'We require it, and I still think agreement will quietly become '
                        'agreement with the transcript rather than agreement about the meeting. '
                        'I do not have an answer to that.'),
               ('Lina', 'Nor do I. I would rather we both say so than pretend the rule solves '
                        'it.')],
        a=[('What does the comparison not tell Hana?', 'which officer to believe'),
           ('Why not?', 'because it was not in the room'),
           ('How many differences did it find?', 'four, one of which mattered a great deal'),
           ('What is Hana’s worry about agreement?', 'that accounts may agree only because both were written from the same transcript'),
           ('Is the worry resolved?', 'no; both say they have no answer to it')],
        b=[('It was not in the ____________.', 'room'),
           ('The list is the beginning of the ____________.', 'work'),
           ('Agreement will stop meaning ____________.', 'anything'),
           ('Written ____________ and say so on the face of them.', 'independently')],
        unresolved=True),

speak=[('Say it in order',
        ['Student A: describe four events in the order they happened.',
         'Use before, while, then and by the time once each.',
         'Student B: retell them using subsequently and in the interim.']),
       ('Two accounts',
        ['In pairs, describe the same recent meeting separately, in four sentences.',
         'Compare. List the differences without deciding who is right.',
         'Say which difference would matter if this were a record.']),
       ('The five-minute talk',
        ['Role-play the conversation two officers have after a comparison.',
         'Your aim is to settle each difference or record that it is unsettled.',
         'Say what you would write to the other side.'])],

ext_title='A comparison lists what two accounts do not share; it cannot say which of them is right',
ext_fig=figs.source_check('FOUR DIFFERENCES, 9 APRIL',
                          [('Oristan undertook to circulate a draft by end of May', 'account 1 only', 'single'),
                           ('the meeting ran ninety minutes', 'both accounts', 'verified'),
                           ('Oristan raised the transit question', 'both accounts', 'verified'),
                           ('the Oristani side asked for the file reference', 'account 2 only', 'single'),
                           ('the chair proposed a further meeting in June', 'account 2 only', 'single'),
                           ('what the May remark was meant as', 'neither account', 'none')],
                          note='Two items are borne out by both accounts. Three rest on one. '
                               'The last is in neither, and it is the one that mattered.'),
ext_fig_cap='The comparison produced this list. It produced no verdict, and could not.',
ext=[
 'A record of conversation is written by a person, from notes, hours after the event. Where '
 'two officers attended, the Ministry holds two such records, and for most of the history of '
 'diplomacy nobody read them side by side, because doing so took an afternoon and the '
 'afternoon was never available.',
 'Setting two accounts side by side is now cheap. A comparison step can list, in a minute, '
 'what the first account contains and the second does not, what both contain, and where the '
 'two describe the same item in terms that do not match. Several foreign services use '
 'exactly this to close the gap between a meeting and the moment its record becomes final.',
 'What such a comparison produces is a list of differences. It does not produce a finding. It '
 'was not in the room, it has no way to know which officer heard correctly, and any tool that '
 'offered to tell you would be inventing. The value is that the list arrives while both '
 'officers can still remember, and a divergence that takes four minutes to settle on the '
 'evening of the meeting takes three weeks and a letter if it is found in May.',
 'Two cautions follow. The first is that silence is a difference too, and the hardest kind: '
 'the item that appears in neither account, because both officers assumed the other had '
 'written it down. A comparison between two documents cannot see what is in neither.',
 'The second is that agreement will stop being informative. Once a transcript arrives minutes '
 'after a session, two officers writing from it will produce accounts that match, and the '
 'match will say nothing about the meeting. The practice only works if the accounts are '
 'written independently, and the requirement has to be stated and recorded, because nobody '
 'will remember why it was there.'],
dp1=('Reconciling records',
     'Services that introduced automated document comparison in 2025 report its value as '
     'speed of flagging rather than adjudication, and pair it with a required human '
     'conversation between the drafters.',
     'Source: reported practice in foreign-service record management, 2025–2026.'),
e_a=[('Why did nobody compare accounts before?', 'it took an afternoon that was never available'),
     ('What can a comparison list?', 'what one account has and the other does not, what both have, and where terms do not match'),
     ('What can it not produce?', 'a finding about which officer is right'),
     ('What is the hardest kind of difference?', 'the item that appears in neither account'),
     ('Why must accounts be written independently?', 'otherwise both are written from the transcript and agreement means nothing')],
e_b=[('A comparison can say which officer is right.', 'F'),
     ('Silence is a kind of difference.', 'T'),
     ('A divergence found on the evening takes four minutes.', 'T'),
     ('Agreement between two accounts always means the meeting is clear.', 'F'),
     ('The independence requirement should be recorded.', 'T'),
     ('A comparison can see what is in neither account.', 'F')],

w_model=(
 'Purpose: find the differences between the 2 accounts of the bilateral of 9 April so that '
 'they can be settled while both drafters still remember the meeting. Scope: the 2 accounts '
 'filed by the Ministry’s own attendees; the Oristani readout and the transcript are out of '
 'scope. Inputs: account 1 and account 2 as filed, and nothing else. Criteria: list every '
 'item that appears in 1 account and not the other; list every item where the 2 accounts '
 'describe the same thing in terms that do not match; do not state which account is correct; '
 'where an item concerns a date, a figure or an undertaking, mark it as material. Done: 1 list '
 'of differences, 1 page, within 2 hours of the second account being filed. Fallback: if '
 'either account is missing, report that 1 account is not available and list nothing.'),
w_fig=figs.spec_card('THE TASKING FOR A COMPARISON',
                     [('Purpose', 'find differences while both drafters still remember'),
                      ('Scope', 'the 2 Ministry accounts only'),
                      ('Inputs', 'account 1 and account 2 as filed, nothing else'),
                      ('Criteria', 'what one has and the other lacks; mismatched terms; no verdict'),
                      ('Done', '1 list, 1 page, within 2 hours of the second filing'),
                      ('Fallback', 'one account missing: say so and list nothing')]),
w_fig_cap='The criteria line forbids a verdict, which is the only line that stops one appearing.',
w_task='Write a tasking for a comparison of two accounts in your own work.',
w_steps=['Say what the comparison is for and when it must arrive.',
         'Say which documents are in and which are out.',
         'Require differences in both directions, and mismatched terms.',
         'Forbid a statement of which account is correct.',
         'Say what to do if one document is missing.'],
w_bank=['Find the differences between … so that …',
        'Cover … ; … are out of scope.',
        'Work from … , and nothing else.',
        'List every item that … ; do not state which … ; where an item concerns … , mark it as …',
        'If … is missing, report that … and list nothing.'],
w_check=['Does the purpose say why speed matters?',
         'Are differences required in both directions?',
         'Is a verdict explicitly forbidden?',
         'Is there a rule for a missing document?'],

t_title='Comparing two accounts of the same event',
t_fig=figs.split('WHAT A COMPARISON DOES',
                 'It can',
                 ['list what only account 1 has',
                  'list what only account 2 has',
                  'flag terms that do not match',
                  'arrive in a minute'],
                 'It cannot',
                 ['say which officer is right',
                  'see what is in neither account',
                  'know what a remark was meant as',
                  'replace five minutes of talking']),
t_fig_cap='Four things it does for nothing, and four it must never be asked for.',
t_body=[
 'Where two officers attended a meeting, the Ministry has two accounts, and until recently '
 'nobody set them side by side, because the comparison took an afternoon. A comparison step '
 'now does it in a minute, and the gain is not thoroughness; it is timing. A difference found '
 'on the evening of the meeting is settled in four minutes by the two people who were there. '
 'The same difference found in May costs three weeks and a letter to the other side.',
 'Be exact about what it gives you. It gives a list of differences in both directions, and '
 'places where the two accounts describe one item in words that do not match. It does not '
 'give a finding, because it was not in the room and nothing in either document records what '
 'a remark was meant as. Ask it which account is right and you will get an answer, and the '
 'answer will be an invention.',
 'Two things are easy to miss. Silence is a difference and the comparison cannot see it: an '
 'item left out of both accounts, because each officer assumed the other had it, is '
 'invisible to any method that reads only the two documents. And agreement is about to stop '
 'being informative, because two officers writing from the same transcript will produce '
 'matching accounts of a meeting neither of them has reconstructed. Require the accounts to '
 'be independent, and write down why the requirement exists.'],
t_say=[('Set the limit: ', 'List the differences; do not say which account is correct.'),
       ('Set the clock: ', 'Within 2 hours of the second account being filed.'),
       ('Set the rule: ', 'The 2 accounts are to be written independently.')],
t_bound=('A comparison reads two documents. It cannot adjudicate between them, cannot see an '
         'item that is in neither, and cannot tell independent agreement from two officers '
         'copying one transcript. Its whole value is that it arrives early enough for the '
         'people who were present to settle what it found.'),
t_a=[('List the differences; do not say which account is ____________.', 'correct'),
     ('Within 2 hours of the second account being ____________.', 'filed'),
     ('The 2 accounts are to be written ____________.', 'independently'),
     ('A difference found in May costs three weeks and a ____________.', 'letter'),
     ('____________ is a difference and the comparison cannot see it.', 'Silence'),
     ('The answer will be an ____________.', 'invention')],
t_b_rubric='Rewrite each line so that the order of events is stated.',
t_b=[('She filed and he filed and it was noticed.', 'she filed that evening; he filed the following morning; by the time it was noticed, three weeks had passed'),
     ('The draft came and a note came.', 'the draft arrived, and a note followed on from it'),
     ('Nothing happened for three weeks.', 'in the interim, three weeks passed and nothing was asked'),
     ('The comparison runs and the officers talk.', 'the comparison runs before either account is filed; the officers then talk for five minutes')],

case=dict(
 title='The Decision Room · Four differences, one that mattered',
 brief=[
  'The comparison of the two 9 April accounts found four differences. Three were trivial. The '
  'fourth was the end-of-May undertaking, which appears in account 1 and not in account 2.',
  'In the interim the Director had quoted the May date in a note to the Minister. It is now 2 '
  'May and Oristan has circulated nothing.',
  'Lina wants the Ministry to write to Oristan asking them to confirm the timing. Dr Hana '
  'Mourad wants the note to the Minister corrected first. Samir Haddad from Legal and '
  'Treaties says that asking Oristan to confirm an undertaking they may not have given is '
  'itself a step with consequences.'],
 exhibit=figs.datatable('THE 9 APRIL FILE',
                        ['', 'Account 1', 'Account 2'],
                        [['filed', '9 April, 21:40', '10 April, 08:15'],
                         ['the end-of-May undertaking', 'recorded', 'not mentioned'],
                         ['the transit question', 'recorded', 'recorded'],
                         ['the request for a file reference', 'not mentioned', 'recorded'],
                         ['a further meeting in June', 'not mentioned', 'recorded'],
                         ['what the May remark was meant as', 'not stated', 'not stated']]),
 exhibit_cap='Both accounts are silent on the one question that would settle the matter.',
 exhibit_note='The note to the Minister of 15 April states that a draft text is expected by '
              'the end of May.',
 voices=[('Lina Khalil', 'Bilateral Affairs',
          'Write to Oristan and ask them to confirm the timing. We need to know, and they are '
          'the only people who can tell us.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Correct the note to the Minister first. Whatever Oristan says, the Ministry has '
          'told the Minister something it cannot currently support, and that is the fact we '
          'control.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Asking them to confirm an undertaking tells them we think they gave one. If they '
          'did not, we have just asserted a commitment on their behalf, in writing, and they '
          'will remember it.')],
 steps=[('Find it', 'What does each account say about May?'),
        ('Compare it', 'What are the three proposals?'),
        ('Infer it', 'Why is Samir cautious about writing to Oristan?'),
        ('Weigh it', 'Knowing the truth against asserting something on another state’s behalf.'),
        ('Decide', 'What does the Ministry do, and in what order?')],
 analysis=[('Find it. Which account records the undertaking?', 'account 1 only'),
           ('Compare it. What does Hana want done first?', 'the note to the Minister corrected'),
           ('Infer it. What is Samir’s objection?', 'that asking asserts a commitment Oristan may not have given'),
           ('Weigh it. What does the Ministry control?', 'what it has told its own Minister'),
           ('Decide. What would you do?', 'answers vary; the internal correction can be made without telling Oristan anything')],
 decision='Write what the Ministry does, in order.',
 decision_steps=['Say what is done about the note to the Minister.',
                 'Say whether anything is sent to Oristan, and in what terms.',
                 'Say what is recorded about the divergence itself.',
                 'Say what changes for future bilaterals with two attendees.'],
 bank=['The note of 15 April is …',
       'Oristan is … ; the enquiry is framed as …',
       'The divergence is recorded …',
       'From … , two accounts of one meeting are …',
       'This is reviewed …'],
 outcome='The note to the Minister was corrected on 3 May to say that the expected timing was '
         'not confirmed, and the divergence was recorded on the file with both accounts. '
         'Nothing was sent to Oristan. At the next bilateral on 20 May the Oristani side '
         'referred to a draft they expected to circulate in June, which told the Ministry what '
         'it needed without its having asserted anything. Samir says the useful part was the '
         'eighteen days of saying nothing, which was also the hardest part to argue for at the '
         'time.',
 outcome_q=[('What was corrected, and when?', 'the note to the Minister, on 3 May'),
            ('How did the Ministry learn the timing?', 'Oristan referred to a June draft at the next bilateral, without being asked')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Ask for the differences',
 task=['This is the tasking written when the comparison step was first tried, in the week '
       'after the April divergence came to light.',
       'It produced a one-page answer that confidently named the account the Ministry should '
       'rely on.'],
 draft=['Compare the two accounts of the meeting.',
        'Say which one is more reliable.',
        'Flag anything important.',
        'Use whatever is on the file.',
        'Keep it short.',
        'Today if possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one asks for the one thing no comparison can give.',
 asked=['The differences in both directions',
        'Which differences are material',
        'No verdict on reliability'],
 back=['A verdict naming account 1 as reliable',
       'Three reasons, all invented',
       'No list of differences at all'],
 gap='"Which one is more reliable" asks for a judgement the method cannot make, "anything '
     'important" leaves the test unstated, "whatever is on the file" lets the transcript and '
     'the Oristani readout in, and "today if possible" sets no condition for failure.',
 back_cap='A confident page about which officer to believe, built on nothing.',
 back_note='Line two is the whole failure. Asked for a verdict, it supplied one.',
 diagnosis=[('[1] "the two accounts" — which two, of the four documents on the file?', 'ambiguous referent'),
            ('[2] "which one is more reliable" — judged against what?', 'unstated criterion'),
            ('[3] "anything important" — important by what test?', 'unstated criterion'),
            ('[4] "whatever is on the file" — the transcript too?', 'ambiguous referent'),
            ('[5] "keep it short" — and if a difference needs a paragraph?', 'missing condition'),
            ('[6] "today if possible" — and if it is not possible?', 'missing condition')],
 rewrite='Rewrite the tasking so that it asks for differences and forbids a verdict.',
 scaffold=['Why the comparison is wanted and when it must arrive',
           'Which two documents, and what is excluded',
           'The two accounts as filed, and nothing else',
           'Differences in both directions, mismatched terms, no verdict, material items marked',
           'One page and the deadline',
           'What to do if one account is missing'],
 bank=['Find the differences between … so that …',
       'Cover … ; … are out of scope.',
       'Work from … , and nothing else.',
       'List every item that … ; list every item where … ; do not state … ; mark …',
       'Return 1 list of … , within …',
       'If … , report that … and list nothing.'],
 check=['Are the two documents named exactly?',
        'Is a verdict forbidden in words?',
        'Is "material" defined?',
        'Is there a rule for a missing account?'],
 model=['Find the differences between the 2 accounts of the bilateral of 9 April so that they can be settled while both drafters still remember the meeting',
        'The 2 accounts filed by the Ministry’s own attendees; the Oristani readout and the transcript are out of scope',
        'Account 1 and account 2 as filed, and nothing else',
        'List every item that appears in 1 account and not the other; list every item where the 2 accounts describe the same thing in terms that do not match; do not state which account is correct; where an item concerns a date, a figure or an undertaking, mark it as material',
        '1 list of differences, 1 page, within 2 hours of the second account being filed',
        'If either account is missing, report that 1 account is not available and list nothing'],
 cost='23 days during which the Minister held a date the Ministry could not support, and a '
      'letter to Oristan that was nearly sent.'),

rev_fig=figs.split('TIME LINKERS',
                   'Loose',
                   ['She filed and he filed and it was seen.',
                    'The draft came. Also a note came.',
                    'Nothing happened and three weeks passed.',
                    'After. The divergence was found.'],
                   'Precise',
                   ['She filed that evening; he filed the next morning.',
                    'The draft arrived, and a note followed on from it.',
                    'In the interim, three weeks passed.',
                    'By the time it was found, both were on the file.']),
rev_fig_cap='Before, while, then, by the time, in the interim, subsequently.',
rev=dict(
 read=[('A comparison of two accounts produces', ['a verdict', 'a list of differences', 'a transcript', 'a timeline of the meeting'], 1),
       ('The hardest kind of difference is', ['a date', 'an item in neither account', 'a figure', 'a name'], 1),
       ('Accounts must be written', ['from the transcript', 'independently', 'together', 'by one officer'], 1),
       ('In the Decision Room, what was sent to Oristan?', ['a letter', 'nothing', 'a correction', 'a draft'], 1)],
 listen_text='A difference found on the evening of the meeting is settled in four minutes by '
             'the two people who were there. The same difference found in May costs three '
             'weeks and a letter. So the gain is not thoroughness; it is timing. And silence '
             'is a difference the comparison cannot see.',
 listen=[('Settled in four ____________.', 'minutes'),
         ('Costs three weeks and a ____________.', 'letter'),
         ('The gain is not thoroughness; it is ____________.', 'timing'),
         ('____________ is a difference the comparison cannot see.', 'Silence')],
 speak=['Describe a meeting in order, using four time linkers.',
        'Say what you would do if your account and a colleague’s diverged.'],
 write='Write one line of a tasking that forbids a verdict.',
 vocab=[('A point at which two records do not agree is a ____________.', 'mismatch'),
        ('To test one record against another is to ____________.', 'cross-check'),
        ('In the period between two stated points is ____________.', 'in the interim'),
        ('A note taken continuously during a meeting is a ____________.', 'running note'),
        ('To come after, and because of, is to ____________.', 'follow on')],
 gram=[('____________ she filed, she had read nothing of his.', 'Before'),
       ('____________ the chair spoke, she wrote a running note.', 'While'),
       ('____________, three weeks passed and nothing was asked.', 'In the interim'),
       ('____________ the divergence was found, both were on the file.', 'By the time'),
       ('____________, the Ministry changed the rule.', 'Subsequently')]),

found=['Find a meeting in your work that two people attended and compare the records.',
       'List the differences without deciding who is right.',
       'Ask the other person about the one difference that matters.',
       'Write the independence rule for your own office in one sentence.'],
end_line='The list is the beginning of the work, not the end of it.',
end_next='Next: Findable in Four Years',
)
