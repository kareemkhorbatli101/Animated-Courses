# -*- coding: utf-8 -*-
import figs

U = dict(
num=2,
title='A Citizen in Trouble',
gram='defining relative clauses',
ai='the case that must reach a person immediately',
strap='CEFR B1 · Grammar: defining relative clauses · '
      'AI: the case that must reach a person immediately',
cando=['explain what consular assistance can and cannot do',
       'use defining relative clauses accurately',
       'take the first six facts of a detention case',
       'say why an escalation rule must be written in plain words',
       'write a six-line first record of a consular case'],

hero=('THE CASE THAT CANNOT WAIT UNTIL THURSDAY',
      ['A man who has not been charged, in a station nobody has named.',
       'Six facts, in eleven minutes, before anything else is done.'],
      [(720, 'blue', 'short'), (720, 'teal', 'long'), (720, 'grey', 'short')]),
hero_cap='The interview room behind the counter, where the first eleven minutes of a case are decided.',

warm=['What can a consulate actually do for a citizen who has been arrested?',
      'What would you most want somebody to find out first on your behalf?',
      'How do you take information from a person who is frightened?'],

read=[
 'Consular assistance is often misunderstood. A consulate cannot get a citizen out of '
 'prison, cannot pay a fine, cannot act as a lawyer and cannot ask for treatment that local '
 'nationals do not receive. What it can do is narrow, and it matters enormously.',
 'It can visit. It can tell a family. It can give a list of local lawyers. It can make sure '
 'that the person knows their rights in a language they understand, and that the '
 'authorities know a foreign state is watching the case.',
 'The first eleven minutes decide a detention case. There are six facts that an officer '
 'must leave the room with: the full name, the date of birth, where the person is held, '
 'when they were taken, whether a charge has been made, and who may be told.',
 'The last of the six is the one that is forgotten. A consulate may not tell a family '
 'anything without the detained person’s written authority, and a frightened relative on '
 'the telephone will not understand why.',
 'The section has an escalation rule: any case which involves a detention, a hospital '
 'admission or a child reaches the consul within thirty minutes, whatever time it is. The '
 'rule has been written in plain words so that nobody has to interpret it at midnight.'],

dp1=('What consular assistance covers', 'Consular services commonly publish an explicit '
     'list of what assistance can and cannot include, because unmanaged expectation is the '
     'largest single source of complaint in consular work.',
     'Source: reported consular practice, 2025–2026.'),

c_a=[('Name three things a consulate cannot do.', 'free a prisoner, pay a fine, act as a lawyer'),
     ('What can it do about a family?', 'tell them, with the person’s written authority'),
     ('How many facts must an officer leave with?', 'six'),
     ('Which of the six is most often forgotten?', 'who may be told'),
     ('How quickly must such a case reach the consul?', 'within thirty minutes'),
     ('Why is the rule written in plain words?', 'so nobody has to interpret it at midnight')],

c_b=[('A consulate can pay a fine for a citizen.', 'F'),
     ('A consulate can ask for better treatment than local nationals receive.', 'F'),
     ('A consulate can give a list of local lawyers.', 'T'),
     ('A family may be told without written authority.', 'F'),
     ('The escalation rule covers hospital admissions.', 'T'),
     ('The rule applies only in office hours.', 'F')],

c_c=[('The officer ____________ took the call wrote six facts down.', 'who'),
     ('A case ____________ involves a child reaches the consul at once.', 'which'),
     ('The station ____________ he is held is in Marnach.', 'where'),
     ('The form ____________ the family must sign is in two languages.', 'that'),
     ('The man ____________ brother telephoned lives in Ostport.', 'whose'),
     ('The day ____________ he was taken was a Saturday.', 'when')],

c_d=[('A defining relative clause ( identifies / adds extra information about ) the noun.', ['identifies', 'adds extra information about'], 0),
     ('Consular assistance is ( narrow but important / unlimited ).',
      ['narrow but important', 'unlimited'], 0),
     ('The sixth fact is about ( who may be told / the charge ).',
      ['who may be told', 'the charge'], 0),
     ('The escalation rule applies ( at any hour / in office hours ).',
      ['at any hour', 'in office hours'], 0),
     ('Plain words are used so that ( nobody has to interpret it / it sounds official ).',
      ['nobody has to interpret it', 'it sounds official'], 0)],

c_e=('Which relative pronoun? Put each gap in the right column.',
     [('the officer ___ took the call', 'who'),
      ('a case ___ involves a child', 'which'),
      ('the station ___ he is held', 'where'),
      ('the man ___ brother telephoned', 'whose'),
      ('the day ___ he was taken', 'when'),
      ('the form ___ must be signed', 'which')],
     ['who', 'which', 'where', 'whose', 'when']),

v_fig_title='THE FIRST ELEVEN MINUTES',
v_fig=[('people', 'next of kin'), ('key', 'a written authority'), ('doc', 'a case note'),
       ('clock', 'a detention'), ('chart', 'a notification'), ('door', 'a welfare visit')],
v_fig_cap='Six words that shape the first hour of a consular case.',

vocab=[
 ('consular assistance', 'the help a state may give its nationals abroad'),
 ('next of kin', 'the closest relative, to be informed in an emergency'),
 ('a detention', 'the holding of a person by the authorities'),
 ('custody', 'the state of being held by the police or a court'),
 ('a welfare visit', 'a visit made to check the condition and treatment of a detained person'),
 ('a local lawyer', 'a lawyer qualified in the host country'),
 ('a charge', 'the formal accusation that a person has committed an offence'),
 ('a court hearing', 'a session at which a court considers a case'),
 ('bail', 'the release of an accused person, often on conditions'),
 ('court interpretation', 'the provision of interpretation during legal proceedings'),
 ('a written authority', 'a signed permission allowing information to be shared'),
 ('a case officer', 'the officer responsible for one case from beginning to end'),
 ('an emergency travel document', 'a short-term document allowing one journey home'),
 ('repatriation', 'the return of a person to their own country'),
 ('a hospital admission', 'the entry of a patient into a hospital for treatment'),
 ('a medical report', 'a doctor’s written account of a patient’s condition'),
 ('a duty of confidentiality', 'the obligation not to disclose what one learns officially'),
 ('a notification', 'the formal act of informing an authority or a family'),
 ('a hardship loan', 'money lent to a citizen in difficulty, to be repaid'),
 ('a case note', 'the officer’s written record of one step in a case')],

v_a=[('The closest relative to be informed is the next of ____________.', 'kin'),
     ('A visit to check the condition of a detained person is a ____________ visit.', 'welfare'),
     ('The formal accusation of an offence is a ____________.', 'charge'),
     ('A signed permission to share information is a written ____________.', 'authority'),
     ('A short-term document for one journey home is an emergency travel ____________.', 'document'),
     ('Money lent to a citizen in difficulty is a hardship ____________.', 'loan'),
     ('The obligation not to disclose what you learn is a duty of ____________.', 'confidentiality'),
     ('The return of a person to their own country is ____________.', 'repatriation')],

v_b=[('Consular assistance is the help a state', 'may give its nationals abroad.'),
     ('Bail is the release of an accused person,', 'often on conditions.'),
     ('A case officer is the officer responsible for one case', 'from beginning to end.'),
     ('A medical report is a doctor’s written account', 'of a patient’s condition.'),
     ('Custody is the state of being held', 'by the police or a court.')],

g_title='Grammar: defining relative clauses',
g_rule=['A defining clause says which one: the officer who took the call.',
        'who for people, which or that for things, where for places, when for times.',
        'whose shows possession: the man whose brother telephoned.',
        'No commas, and never that after a comma: the case which involves a child (defining).'],
g_fig=('UNCLEAR',
       ['The officer wrote six facts. He took the call.',
        'A case reaches the consul. It involves a child.',
        'The station is in Marnach. He is held there.',
        'The man lives in Ostport. His brother telephoned.'],
       'CLEAR',
       ['The officer who took the call wrote six facts.',
        'A case which involves a child reaches the consul.',
        'The station where he is held is in Marnach.',
        'The man whose brother telephoned lives in Ostport.'],
       'eight short sentences the reader must join',
       'four sentences that join themselves'),
g_fig_cap='A defining clause tells you which one, and it needs no comma at all.',

g_a=[('The officer ____________ took the call wrote six facts.', 'who'),
     ('A case ____________ involves a child reaches the consul.', 'which'),
     ('The station ____________ he is held is in Marnach.', 'where'),
     ('The man ____________ brother telephoned lives in Ostport.', 'whose'),
     ('The day ____________ he was taken was a Saturday.', 'when'),
     ('The form ____________ the family signs is in two languages.', 'that'),
     ('The lawyer ____________ name is on the list speaks English.', 'whose'),
     ('The hospital ____________ she was admitted is outside the city.', 'where'),
     ('The rule ____________ covers detentions is on the wall.', 'which')],

g_b=[('The officer ( which / who ) took the call.', ['which', 'who'], 1),
     ('A case ( which / who ) involves a child.', ['which', 'who'], 0),
     ('The station ( where / which ) he is held.', ['where', 'which'], 0),
     ('The man ( whose / who’s ) brother telephoned.', ['whose', 'who’s'], 0),
     ('The day ( when / where ) he was taken.', ['when', 'where'], 0),
     ('The form ( that / what ) they sign.', ['that', 'what'], 0)],

d1=dict(
 title='Six facts before anything else',
 fig=(['What do I ask first?', 'Six things, then stop.'],
      ['And then?', 'Then you think. Not before.']),
 cap='Bassel Tannous and Nour, in the interview room, after a call from Marnach.',
 lines=[('Nour', 'A brother has telephoned about a detention. What do I ask first?'),
        ('Bassel', 'Six facts. Full name. Date of birth. Where. When. Charged or not. Who may be told.'),
        ('Nour', 'In that order?'),
        ('Bassel', 'In any order, but all six before you say anything reassuring.'),
        ('Nour', 'Why before?'),
        ('Bassel', 'Because once you comfort somebody, they stop giving facts and start giving feelings.'),
        ('Nour', 'And the sixth one, who may be told?'),
        ('Bassel', 'The hardest. We may not tell the family without the detained person’s authority.'),
        ('Nour', 'The brother will not understand that.'),
        ('Bassel', 'No. And you will explain it anyway, twice, in plain words.'),
        ('Nour', 'What if he refuses to accept it?'),
        ('Bassel', 'Then you say it a third time and you do not change the rule to end a difficult call.')],
 a=[('How many facts come first?', 'six'),
    ('Why take facts before comfort?', 'people stop giving facts once they are comforted'),
    ('Which fact is hardest?', 'who may be told'),
    ('What is needed to tell the family?', 'the detained person’s written authority'),
    ('What must the officer not do?', 'change the rule to end a difficult call')],
 b=[('Six facts before you say anything ____________.', 'reassuring'),
    ('They stop giving facts and start giving ____________.', 'feelings'),
    ('We may not tell the family without the detained person’s ____________.', 'authority'),
    ('You will explain it anyway, ____________.', 'twice')]),

d2=dict(
 title='Thirty minutes, whatever the hour',
 fig=(['The rule says thirty minutes.', 'At three in the morning as well?'],
      ['Especially then.', 'Then it must be a rule nobody interprets.']),
 cap='Rim Haddad and Bassel, writing the escalation rule for the wall.',
 lines=[('Rim', 'The old rule said serious cases are escalated promptly.'),
        ('Bassel', 'Which means nothing at three in the morning.'),
        ('Rim', 'It means whatever the tired person reading it decides it means.'),
        ('Bassel', 'So write the words that trigger it.'),
        ('Rim', 'Detention, hospital, child, missing. Any one of the four.'),
        ('Bassel', 'And the time?'),
        ('Rim', 'Thirty minutes. Not promptly, not as soon as possible. Thirty.'),
        ('Bassel', 'And who, by name?'),
        ('Rim', 'Not by name. By post, because names leave and posts do not.'),
        ('Bassel', 'The consul, then the deputy, then the duty officer.'),
        ('Rim', 'In that order, and the next one is tried after five minutes, not after an hour.'),
        ('Bassel', 'And if none of the three answers at three in the morning?')],
 unresolved=True,
 a=[('What was wrong with the old rule?', 'promptly means nothing at three in the morning'),
    ('Which four words trigger it?', 'detention, hospital, child, missing'),
    ('What is the time limit?', 'thirty minutes'),
    ('Why by post and not by name?', 'names leave and posts do not'),
    ('How long before trying the next person?', 'five minutes')],
 b=[('Which means nothing at three in the ____________.', 'morning'),
    ('Write the ____________ that trigger it.', 'words'),
    ('Not promptly, not as soon as possible. ____________.', 'Thirty'),
    ('Names leave and ____________ do not.', 'posts')]),

speak=[('Which one?',
        ['Describe eight people or things at your work using defining relative clauses.',
         'Your partner must identify each one exactly.',
         'Any sentence that needs a comma is rejected.']),
       ('The six facts',
        ['Student A reports a difficulty; Student B takes the six facts.',
         'B may not say anything reassuring until all six are written.',
         'Change roles, and make the caller harder to interrupt.']),
       ('Explaining a limit',
        ['Explain to your partner something your organisation cannot do.',
         'Your partner refuses to accept it twice.',
         'Explain it a third time without changing the rule.'])],

ext_title='Assistance is narrow, and the first hour is where the whole case is decided',
ext_fig=figs.datatable('WHAT A CONSULATE CAN AND CANNOT DO',
                       ['Request', 'Can', 'Cannot'],
                       [['visit a detained national', 'yes', '—'],
                        ['inform the family', 'with written authority', 'without it'],
                        ['provide a list of lawyers', 'yes', 'recommend one'],
                        ['pay a fine or bail', '—', 'no'],
                        ['ask for better treatment than locals get', '—', 'no'],
                        ['check the person knows their rights', 'yes', '—']]),
ext_fig_cap='Four things a consulate may do, and the two it may not are the two most often asked for.',
ext=[
 'The first hour of a consular case is worth more than the next three weeks. In that hour '
 'the facts are either captured or lost, the family is either told correctly or told '
 'something that must later be withdrawn, and the authorities either learn that a foreign '
 'state is watching, or do not.',
 'The six facts are not a formality. A name without a date of birth matches four people. A '
 'police station without a town matches eleven. A case recorded without the question of who '
 'may be told produces a second crisis three days later, inside the family.',
 'Escalation is the other half. A section that serves eighty people a day cannot escalate '
 'everything, and it must escalate some things immediately. The only workable rule is one '
 'written in words that need no interpretation at three in the morning.',
 'A sorting system can apply such a rule perfectly, and this is one of its best uses. Given '
 'four trigger words and a time limit, it will never be tired, never be busy and never '
 'decide that a case can probably wait until the morning.',
 'What it cannot do is notice the case that uses none of the four words. A message about a '
 'man who has not come home, written by somebody who does not know the word detention, is '
 'exactly the case the rule was written for and exactly the case it will miss.'],

dp2=('Rules that survive the night shift', 'Operational guidance commonly requires '
     'escalation criteria to be expressed as named triggers and fixed time limits rather '
     'than as judgements of seriousness, so that they can be applied consistently outside '
     'working hours.',
     'Source: reported operational practice, 2025–2026.'),

e_a=[('Why is the first hour so important?', 'facts are captured or lost and the family is told correctly or not'),
     ('What does a name without a date of birth match?', 'four people'),
     ('What does the sixth fact prevent?', 'a second crisis inside the family'),
     ('What makes an escalation rule workable?', 'words that need no interpretation at night'),
     ('What will a rule-based system miss?', 'a case that uses none of the trigger words')],
e_b=[('The first hour matters less than the next three weeks.', 'F'),
     ('A police station without a town is enough.', 'F'),
     ('Everything can be escalated immediately.', 'F'),
     ('A system applies a written rule without fatigue.', 'T'),
     ('A case can be urgent without using urgent words.', 'T'),
     ('Escalation should be based on a judgement of seriousness.', 'F')],

w_model='Purpose: so that any officer picking up this case tomorrow knows what is known and '
        'what is not. Scope: this detention only; the family’s other questions are recorded '
        'separately. Inputs: the telephone call of 11 April at 14:20 and the caller’s own '
        'words. Criteria: 6 lines giving the 6 facts, with each marked confirmed or '
        'unconfirmed. Done: 6 lines in the case file within 30 minutes of the call. '
        'Fallback: where a fact is not known, the line says not known and names who will '
        'find out.',
w_fig=figs.spec_card('SIX LINES, SIX FACTS',
                     [('Purpose', 'any officer tomorrow knows what is known'),
                      ('Scope', 'this detention only'),
                      ('Inputs', 'the call of 11 April, 14:20, in the caller’s words'),
                      ('Criteria', '6 facts, each marked confirmed or unconfirmed'),
                      ('Done', 'in the case file within 30 minutes'),
                      ('Fallback', 'not known: say so and name who will find out')]),
w_fig_cap='The words not known are more useful than a guess that looks like a fact.',
w_task='Write a six-line first record of a consular case.',
w_steps=['Line 1: the full name and the date of birth, as given.',
         'Line 2: where the person is held, with the town.',
         'Line 3: when they were taken, with the date and the hour if known.',
         'Line 4: whether a charge has been made, in the caller’s words.',
         'Line 5: who may be told, and whether written authority exists.',
         'Line 6: what you said you would do, and by when.'],
w_bank=['Name as given: … ; date of birth … (unconfirmed).',
        'Held at … , in … , according to … .',
        'Taken on … at about … .',
        'No charge reported as at … ; this is the caller’s account, not the authorities’.',
        'No written authority yet; the family has been told what that means.'],
w_check=['Is every line marked confirmed or unconfirmed?',
         'Is the town given as well as the station?',
         'Does line 4 say whose account it is?',
         'Does line 6 contain a time?'],

t_title='The case that must reach a person immediately',
t_fig=figs.split('AN ESCALATION RULE',
                 'A rule a system can apply',
                 ['any message naming a detention',
                  'any message naming a hospital',
                  'any message naming a child',
                  'within 30 minutes, at any hour'],
                 'A rule only a person can apply',
                 ['this caller sounds frightened',
                  'something about this is wrong',
                  'he has never written before',
                  'the family is not telling me everything']),
t_fig_cap='Write the left column down. Train people for the right column.',
t_body=[
 'An escalation rule is the clearest case in this course for giving work to a system. Four '
 'named words, a fixed time limit and an order of people to try. A system applies that '
 'perfectly at three in the morning, which is exactly when a human being applies it worst.',
 'So write the rule in words that need no interpretation. Not serious, not urgent, not '
 'promptly. Detention, hospital, court, child. Thirty minutes. Consul, then deputy, then '
 'duty officer, five minutes apart. Nobody has to decide anything.',
 'Then accept what the rule cannot reach. A family writing about a man who has not come '
 'home may use none of those words. That case is found by a person reading, which is why '
 'the section still reads, and why the sorting never deletes anything.'],
t_say=[('Name the triggers: ', 'These four words escalate a case, whatever else it says.'),
       ('Fix the time: ', 'Thirty minutes, at any hour, not promptly.'),
       ('Keep the reading: ', 'Everything else is still read by an officer the same day.')],
t_bound='A rule-based escalation finds only the cases that use the words in the rule. It '
        'cannot recognise a case described in ordinary language by somebody who does not '
        'know the official word for what has happened.',
t_a=[('These four words ____________ a case.', 'escalate'),
     ('Thirty minutes, at any ____________.', 'hour'),
     ('Everything else is still ____________ by an officer.', 'read'),
     ('Write the rule in words that need no ____________.', 'interpretation'),
     ('It finds only the cases that use the ____________ in the rule.', 'words'),
     ('Somebody who does not know the official ____________ for what has happened.', 'word')],
t_b_rubric='Say how each message is handled under the rule, and what remains.',
t_b=[('My son was taken by the police on Saturday.', 'escalated at once: it names a detention'),
     ('My father is in the hospital in Marnach.', 'escalated at once: it names a hospital'),
     ('My brother has not come home for four days.', 'not escalated by the rule; found only by reading'),
     ('I need a new passport urgently.', 'routine: urgently is not a trigger word')],

case=dict(
 title='The Decision Room · The authority nobody had asked for',
 brief=[
  'A citizen is detained in Marnach on a Saturday. His brother telephones on Tuesday. The '
  'section takes five of the six facts and escalates within twenty minutes. A welfare visit '
  'is arranged for Friday.',
  'Nobody asks the sixth question. On Wednesday the brother telephones again and asks what '
  'the officer has learned. The officer, wanting to help, tells him that his brother is '
  'well and has not yet been charged.',
  'The detained man had asked specifically that his family should not be told anything '
  'until he decided what to tell them himself. By Thursday his wife knows, through the '
  'brother, and the detained man finds out at the visit on Friday.'],
 exhibit=figs.datatable('SIX FACTS, FIVE TAKEN',
                        ['Fact', 'Taken?', 'Consequence'],
                        [['full name', 'yes', '—'],
                         ['date of birth', 'yes', '—'],
                         ['where held', 'yes', 'visit arranged'],
                         ['when taken', 'yes', '—'],
                         ['charged or not', 'yes', '—'],
                         ['who may be told', 'no', 'the family was told against his wishes']]),
 exhibit_cap='Five facts made the case workable. The sixth was the one that belonged to the detained man.',
 exhibit_note='Nothing was leaked and nothing was careless. An officer answered a direct '
              'question kindly, and the kindness belonged to a decision that was not hers.',
 voices=[('Bassel Tannous', 'consul',
          'She escalated in twenty minutes. On everything that was in the rule, she was faster than I am.'),
         ('Rim Haddad', 'consular assistant',
          'And the one thing not in the rule is the one that belongs to the man in the cell.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'Then it goes in the rule. A rule that holds five facts and not the sixth is not finished.')],
 steps=[('Find it', 'Which fact was not taken?'),
        ('Compare it', 'What did the officer do well and what was missed?'),
        ('Infer it', 'Why did the officer answer the brother?'),
        ('Weigh it', 'One more question against a family told against a man’s wishes.'),
        ('Decide', 'What must be established before anything is told to anybody?')],
 analysis=[('Find it. Which fact was missing?', 'who may be told'),
           ('Compare it. What was done well?', 'escalation within twenty minutes'),
           ('Infer it. Why did she answer?', 'she wanted to help a frightened relative'),
           ('Weigh it. What did it cost?', 'the family learned against the detained man’s wishes'),
           ('Decide. What comes before any disclosure?', 'written authority from the detained person')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is established before anything is said to a relative.',
                 'Say what an officer may say when no authority exists.',
                 'Say where the six facts are recorded and by when.',
                 'Say what happens when a relative refuses to accept the limit.'],
 bank=['Nothing about a detained person is told to anybody without written authority.',
       'Where no authority exists, the officer says only that the case is open and being handled.',
       'The 6 facts are recorded in the case file within 30 minutes of first contact.',
       'Where a relative refuses the limit, it is explained 3 times and not changed.'],
 outcome='The consul writes to the detained man, apologises plainly and records the error in '
         'the case file where it will be read at the next inspection. The six facts become a '
         'printed card at the counter and by every telephone, with the sixth in bold. Nothing '
         'about a detained person is now said to anybody until the written authority exists, '
         'and the officer who takes the call explains that limit in plain words, three times '
         'if necessary.',
 outcome_q=[('Who did the consul write to?', 'the detained man'),
            ('Where is the error recorded?', 'in the case file, for the next inspection'),
            ('What is on the card?', 'the six facts, with the sixth in bold'),
            ('What is needed before telling a family?', 'written authority'),
            ('How many times is the limit explained?', 'three, if necessary')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Deal with the detention cases',
 task=['A new officer was asked to take over the section’s detention work for a month.',
       'This is the instruction as it was given, and what the month produced.'],
 draft=['Deal with the detention cases.',
        'Get the details from the families.',
        'Escalate the serious ones.',
        'Keep the families informed.',
        'Record everything properly.',
        'Chase anything that goes quiet.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which details, what serious means, or what may be told.',
 asked=['The details', 'The serious ones escalated', 'Families kept informed'],
 back=['9 cases, 4 with no date of birth', '2 escalated late', '3 families told without authority'],
 gap='Nobody listed the facts, defined serious, or said that disclosure needs written authority.',
 back_cap='Nine cases, four of them unusable, and three disclosures that should not have been made.',
 back_note='Keep the families informed is a humane instruction and, written like that, it '
           'instructs an officer to do something the law of the case does not allow.',
 diagnosis=[('“the detention cases”', 'unscoped set'),
            ('“the details”', 'unscoped set'),
            ('“keep the families informed”', 'missing condition'),
            ('“anything that goes quiet”', 'missing condition'),
            ('“record everything properly”', 'undefined done'),
            ('“escalate the serious ones”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that no family is told anything without authority.',
 scaffold=['why the section handles these cases at all',
           'which cases, and over what period',
           'what six facts are taken, and from whom',
           'what escalation means, in words and minutes',
           'what is recorded, where and by when',
           'what may be said when no written authority exists'],
 bank=['Purpose: so that a detained national is visited, informed and not forgotten',
       'Scope: detentions notified between … and … ; court proceedings are handled by …',
       'Inputs: the first telephone call, in the caller’s own words',
       'Criteria: 6 facts per case; escalation within … minutes on the words …',
       'Done: case file entry within … minutes; welfare visit requested within … hours',
       'Fallback: with no written authority, the officer says only that the case is open'],
 check=['Are the six facts listed?',
        'Is escalation defined in minutes and words?',
        'Does it say what may be said without authority?',
        'Is there a deadline for the file entry?'],
 model=['so that a detained national is visited, informed and not forgotten',
        'detentions notified between 1 and 30 April; court proceedings are handled by the legal adviser',
        'the first telephone call, recorded in the caller’s own words',
        '6 facts per case; escalation within 30 minutes on the words detention, hospital, court, child',
        'case file entry within 30 minutes; welfare visit requested within 24 hours',
        'with no written authority, the officer says only that the case is open and being handled'],
 cost='4 of 9 cases had to be rebuilt from a second call to the family. 3 disclosures could '
      'not be withdrawn, and 1 of them reached a wife before her husband had decided to tell her.'),

feet=dict(
 title='On Your Feet · The brother on the telephone',
 setting=[
  'It is 16:50. A man telephones from another country about his brother, who was detained '
  'in Marnach four days ago. He is frightened, he is talking quickly, and he wants to know '
  'what you are going to do about it this evening.',
  'You have no written authority from the detained man, so you may tell this caller almost '
  'nothing. You also need six facts out of him before the counter closes. You have about '
  'ninety seconds before he decides you are useless.'],
 ladder=[('What are you doing?', 'take facts before giving comfort'),
         ('Is he all right?', 'the question you may not answer'),
         ('You are hiding behind rules', 'the turn where the limit is attacked')],
 cap='Three turns, and two of them ask you for something you must not give.',
 turns=[('Turn 1 · Caller', 'My brother was taken on Saturday. What are you going to do tonight?'),
        ('Turn 2 · Caller', 'Just tell me whether he is all right. That is all I am asking.'),
        ('Turn 3 · Caller', 'You are hiding behind rules while my brother is in a cell.')],
 holds=['I am going to help, and I need six short answers first.',
        'His full name, his date of birth, and the town — those three before anything else.',
        'I am not able to tell you about his condition, and I will explain why.',
        'He has the right to decide what his family is told, and that right is his, not mine.',
        'What I can tell you is what I will do, and when I will do it.',
        'I will telephone you tomorrow before twelve, whether or not there is news.'],
 redline='You must not tell him anything about his brother’s condition, charge or treatment '
         'without written authority, you must not say the rule is a formality, and you must '
         'not promise an outcome. Do not end the call without a time at which you will '
         'telephone him.',
 score=['Took the facts before offering any comfort.',
        'Refused the condition question clearly, and explained whose right it protects.',
        'Did not weaken the rule under pressure.',
        'Said what would be done and by when, which is what he can actually hold you to.',
        'Gave a fixed time for the next call.'],
 a=[('What comes before comfort?', 'the six facts'),
    ('Which three come first?', 'the full name, the date of birth and the town'),
    ('Why may you not answer about his condition?', 'the right to decide belongs to the detained man'),
    ('What may you tell him?', 'what you will do and when'),
    ('What must you not promise?', 'an outcome'),
    ('How must the call end?', 'with a fixed time for the next call')]),

rev_fig=figs.split('A CONSULAR CASE',
                   'A record nobody can act on',
                   ['Man detained, somewhere near Marnach.',
                    'Family very worried.',
                    'Will chase the authorities.',
                    'Told the brother he is fine.'],
                   'A record anybody can act on',
                   ['Name, DOB 14.03.1991 (unconfirmed).',
                    'Held at Marnach central station since Sat.',
                    'No charge reported — caller’s account.',
                    'No written authority; family told what that means.']),
rev_fig_cap='Every line on the right says how good the information is, as well as what it is.',
rev=dict(
 read=[('How many facts must be taken first?', ['six', 'three', 'ten', 'two'], 0),
       ('What may a consulate not do?',
        ['pay a fine', 'visit a detainee', 'give a list of lawyers', 'tell the authorities it is watching'], 0),
       ('How quickly must a detention reach the consul?',
        ['within thirty minutes', 'within a day', 'within an hour', 'by Friday'], 0),
       ('What is needed before telling a family?',
        ['written authority', 'a telephone call', 'a lawyer', 'nothing'], 0)],
 listen_text='Write the escalation rule in words that need no interpretation. Not serious, '
             'not urgent, not promptly. Detention, hospital, court, child. Thirty minutes. '
             'Consul, then deputy, then duty officer, five minutes apart.',
 listen=[('Write the rule in words that need no ____________.', 'interpretation'),
         ('Detention, hospital, court, ____________.', 'child'),
         ('____________ minutes.', 'Thirty'),
         ('Consul, then deputy, then ____________ officer.', 'duty')],
 speak=['Take the six facts from your partner, who is a frightened relative.',
        'You may say nothing reassuring until all six are written down.'],
 write='Write a six-line first record of a consular case.',
 vocab=[('The closest relative to be informed is the next of ____________.', 'kin'),
        ('A visit to check a detained person is a ____________ visit.', 'welfare'),
        ('A signed permission to share information is a written ____________.', 'authority'),
        ('Money lent to a citizen in difficulty is a hardship ____________.', 'loan')],
 gram=[('The officer ____________ took the call wrote six facts.', 'who'),
       ('A case ____________ involves a child is escalated.', 'which'),
       ('The hospital ____________ she was admitted is outside the city.', 'where'),
       ('The man ____________ brother telephoned lives here.', 'whose')]),

found=['Write the six facts on a card and keep it by every telephone in your section.',
       'Rewrite one of your own rules so that it needs no interpretation at 3 a.m.',
       'Practise explaining a limit three times without changing it.',
       'Ask who at your post may be told what, and write the answer down.'],
end_line='Six facts before comfort. Four words and thirty minutes. And keep reading everything else.',
end_next='Next: Passports, Powers and Proof')
