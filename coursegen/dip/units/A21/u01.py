# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='The First Morning at the Mission',
gram='the present simple for routine and fact',
ai='a translation you can check, and one you cannot',
strap='CEFR A2 · Grammar: the present simple for routine and fact · '
      'AI: a translation you can check, and one you cannot',
cando=['say what a mission is and who works in it',
       'describe a working day with the present simple',
       'ask three simple questions at a front desk',
       'say when a translation is safe to use',
       'write four short lines about my first morning'],

hero=('ONE BUILDING, FOUR DOORS, AND NOBODY EXPLAINS IT',
      ['The Mission opens at eight. Nour arrives at ten to eight.',
       'Nobody meets her. The door is locked. She waits.'],
      [(720, 'teal', 'long'), (720, 'blue', 'short'),
       (720, 'purple', 'long'), (720, 'orange', 'short')]),
hero_cap='The front of the Mission in Calmar, on a Monday in September, at ten to eight.',

warm=['What do you think happens in an embassy building every morning?',
      'Who opens the door of an office where you have worked?',
      'When you arrive somewhere new, what do you ask first?'],

read=[
 'Nour Ajami arrives in Calmar on a Sunday. It rains. Her suitcase is heavy and the taxi '
 'driver speaks a language she is still learning. On Monday she walks to the Mission. She '
 'arrives at ten to eight. The door is locked.',
 'The Mission opens at eight. A man opens the door at two minutes past. He is Firas Obeid. '
 'He runs the administration and he holds every key in the building. He looks at her and '
 'asks one question. Are you the new third secretary? She says yes. He says good, because '
 'the desk is empty and the post has been empty for five months.',
 'The building has four floors. The chancery is on the first two floors. The consular '
 'section is on the ground floor, with its own door to the street. The Ambassador works on '
 'the third floor. The residence is in another street, twenty minutes away. Nobody explains '
 'this to Nour. She learns it by walking.',
 'At nine o’clock she meets Dr Suhair Kanaan, the deputy head of mission. Dr Kanaan is '
 'direct. She says that the Mission has nine people. Four are posted from home. Five are '
 'locally engaged, and they know the host system better than anybody else in the building. '
 'She says Nour should learn their names today, before she learns anything else.',
 'At eleven Nour has her first task. A letter arrives from the host ministry. It is in the '
 'local language. Nour puts it into a translation system and reads the English. The English '
 'is clear. It is also wrong in one place, and she does not know which place.'],

dp1=('What services do first', 'Published accounts of foreign services describe arrival '
     'briefings that cover the building, the people and the local legal position in the '
     'first week, because an officer who learns these by accident learns them late.',
     'Source: reported practice in several foreign services, 2025–2026.'),

c_a=[('Which day does Nour arrive in Calmar?', 'Sunday'),
     ('What time does the Mission open?', 'eight o’clock'),
     ('Who opens the door?', 'Firas Obeid'),
     ('How many people work at the Mission?', 'nine'),
     ('Where is the consular section?', 'on the ground floor'),
     ('What is wrong with the English translation?', 'one place is wrong and she does not know which')],

c_b=[('Nour arrives at the Mission at ten past eight.', 'F'),
     ('The post of third secretary was empty for five months.', 'T'),
     ('The residence is inside the Mission building.', 'F'),
     ('Five of the nine staff are locally engaged.', 'T'),
     ('Dr Kanaan tells Nour to learn the names of the staff.', 'T'),
     ('The letter from the host ministry is in English.', 'F')],

c_c=[('The Mission ____________ at eight o’clock.', 'opens'),
     ('Firas Obeid ____________ every key in the building.', 'holds'),
     ('The chancery ____________ on the first two floors.', 'is'),
     ('Nour ____________ the building by walking.', 'learns'),
     ('Five members of staff ____________ locally engaged.', 'are'),
     ('The letter ____________ from the host ministry.', 'comes')],

c_d=[('The present simple here describes a ( single event / routine ).', ['single event', 'routine'], 1),
     ('Nour learns the building ( from a briefing / by walking ).',
      ['by walking', 'from a briefing'], 0),
     ('The locally engaged staff know the host system ( better / less well ) than others.',
      ['better', 'less well'], 0),
     ('Dr Kanaan’s first instruction is about ( names / files ).', ['names', 'files'], 0),
     ('The translation is ( clear and partly wrong / unclear and right ).',
      ['clear and partly wrong', 'unclear and right'], 0)],

c_e=('Which part of the Mission? Put each thing in the right column.',
     [('visas and passports', 'consular section'),
      ('the Ambassador’s office', 'third floor'),
      ('the keys and the accounts', 'administration'),
      ('political reporting', 'chancery'),
      ('the front door at eight', 'administration'),
      ('a citizen at the window', 'consular section')],
     ['chancery', 'consular section', 'administration', 'third floor']),

v_fig_title='THE BUILDING AND THE PEOPLE IN IT',
v_fig=[('door', 'a mission'), ('people', 'a section'), ('key', 'a security pass'),
       ('doc', 'a diplomatic list'), ('clock', 'a time difference'), ('flag', 'a post')],
v_fig_cap='Six words you need before lunch on the first day.',

vocab=[
 ('a mission', 'an embassy, a consulate general or a permanent delegation abroad'),
 ('a post', 'the place abroad where an officer serves, and the length of that service'),
 ('a chancery', 'the main offices of an embassy, where the political work is done'),
 ('a residence', 'the house where the head of mission lives and receives guests'),
 ('a head of mission', 'the officer who leads the mission and answers for it'),
 ('a deputy head of mission', 'the second officer, who runs the mission day to day'),
 ('a third secretary', 'a junior diplomatic rank, often an officer’s first post abroad'),
 ('a section', 'a part of a mission that does one kind of work'),
 ('a locally engaged member of staff', 'a colleague employed in the host country, not posted from home'),
 ('a security pass', 'the card that opens doors inside a building'),
 ('a diplomatic list', 'the official list of accredited officers at every mission in a country'),
 ('a counterpart', 'the person who does your job on the other side'),
 ('a working language', 'the language a mission or meeting uses for its business'),
 ('a time difference', 'the number of hours between the capital and the post'),
 ('a predecessor', 'the officer who held your post before you'),
 ('a handover', 'what a departing officer leaves so the next one can continue'),
 ('an orientation', 'the first explanation of a place, its people and its rules'),
 ('a duty officer', 'the officer responsible outside working hours'),
 ('a front desk', 'the place where visitors arrive and are received'),
 ('a working day', 'the hours a mission is open and staffed')],

v_a=[('The main offices of an embassy are the ____________.', 'chancery'),
     ('The officer who leads a mission is the ____________.', 'head of mission'),
     ('The card that opens doors is a ____________.', 'security pass'),
     ('The person who did your job before you is your ____________.', 'predecessor'),
     ('The officer responsible at night is the ____________.', 'duty officer'),
     ('Colleagues employed in the host country are ____________ staff.', 'locally engaged'),
     ('The hours between the capital and the post are the ____________.', 'time difference'),
     ('What a departing officer leaves behind is a ____________.', 'handover')],

v_b=[('A mission is an embassy, a consulate general', 'or a permanent delegation abroad.'),
     ('A residence is the house where the head of mission', 'lives and receives guests.'),
     ('A counterpart is the person who does your job', 'on the other side.'),
     ('A diplomatic list is the official list of accredited officers', 'at every mission in a country.'),
     ('A working language is the language a mission', 'uses for its business.')],

g_title='Grammar: the present simple for routine and fact',
g_rule=['Use the present simple for what is always true: The Mission has nine staff.',
        'Use it for routine: The door opens at eight. The pouch leaves on Thursdays.',
        'Add -s in the third person singular: she works, he holds, it opens.',
        'For questions and negatives use do and does: Does the section open at eight?'],
g_fig=('NOT A ROUTINE',
       ['The Mission is opening at eight.',
        'Firas is holding every key.',
        'The consular section is having its own door.',
        'Dr Kanaan is wanting the names today.'],
       'A ROUTINE OR A FACT',
       ['The Mission opens at eight.',
        'Firas holds every key.',
        'The consular section has its own door.',
        'Dr Kanaan wants the names today.'],
       'four sentences about things that do not change',
       'the same four, in the present simple'),
g_fig_cap='The present continuous is for now. The present simple is for always.',

g_a=[('The Mission ____________ (open) at eight.', 'opens'),
     ('Firas ____________ (hold) every key.', 'holds'),
     ('The consular section ____________ (have) its own door.', 'has'),
     ('Nine people ____________ (work) in the building.', 'work'),
     ('The pouch ____________ (leave) on Thursdays.', 'leaves'),
     ('Dr Kanaan ____________ (run) the Mission day to day.', 'runs'),
     ('____________ the front desk open at eight? (do)', 'Does'),
     ('The Ambassador ____________ not (sign) routine letters.', 'does'),
     ('We ____________ (use) English as a working language.', 'use')],

g_b=[('The Mission ( opens / is opening ) at eight every day.', ['opens', 'is opening'], 0),
     ('She ( work / works ) in the consular section.', ['works', 'work'], 0),
     ('( Do / Does ) the duty officer answer at night?', ['Does', 'Do'], 0),
     ('He ( doesn’t hold / don’t hold ) the keys.', ['doesn’t hold', 'don’t hold'], 0),
     ('The pouch ( leave / leaves ) on Thursdays.', ['leaves', 'leave'], 0),
     ('They ( are knowing / know ) the host system well.', ['know', 'are knowing'], 0)],

d1=dict(
 title='Are you the new third secretary?',
 fig=(['The door opens at eight.', 'You are ten minutes early.'],
      ['Nobody told me that.', 'Nobody told me anything.']),
 cap='Firas Obeid and Nour, at the front door, two minutes past eight.',
 lines=[('Firas', 'Good morning. The door opens at eight. You are early.'),
        ('Nour', 'I am sorry. Nobody told me the time.'),
        ('Firas', 'Nobody tells anybody anything here. Are you the new third secretary?'),
        ('Nour', 'Yes. Nour Ajami. I arrived yesterday.'),
        ('Firas', 'Good. The desk is empty. It has been empty for five months.'),
        ('Nour', 'Who shows me the building?'),
        ('Firas', 'I do, in four minutes. Then I open the consular door.'),
        ('Nour', 'Do I need a pass?'),
        ('Firas', 'You need a pass, a photograph and a signature. I have none of them.'),
        ('Nour', 'When can I have one?'),
        ('Firas', 'Today, if you bring the photograph. Tomorrow, if you do not.'),
        ('Nour', 'Then I bring the photograph at two.')],
 a=[('What time does the door open?', 'eight o’clock'),
    ('How long has the desk been empty?', 'five months'),
    ('What three things does Firas need for a pass?', 'a photograph, a signature and the form'),
    ('When does Firas open the consular door?', 'four minutes later'),
    ('What does Nour promise to bring?', 'the photograph, at two')],
 b=[('The door ____________ at eight.', 'opens'),
    ('Nobody ____________ anybody anything here.', 'tells'),
    ('I ____________ none of them.', 'have'),
    ('Then I ____________ the photograph at two.', 'bring')]),

d2=dict(
 title='Is the English right?',
 fig=(['The English is clear.', 'Clear is not the same as right.'],
      ['Then how do I know?', 'You ask a person.']),
 cap='Nour and Rim Haddad, over a translated letter, at half past eleven.',
 lines=[('Nour', 'The letter is in the local language. I have an English version.'),
        ('Rim', 'Who made the English version?'),
        ('Nour', 'A translation system. It took four seconds.'),
        ('Rim', 'Is the English clear?'),
        ('Nour', 'Very clear.'),
        ('Rim', 'Clear is not the same as right. Show me the original.'),
        ('Nour', 'Here. The English says the meeting is confirmed.'),
        ('Rim', 'The original says the meeting is proposed. That is not the same word.'),
        ('Nour', 'So the system invented a confirmation.'),
        ('Rim', 'It chose a common word. Common is not correct. I read both languages, so ask me.'),
        ('Nour', 'And when you are not here?')],
 unresolved=True,
 a=[('Who made the English version?', 'a translation system'),
    ('How long did it take?', 'four seconds'),
    ('What does the English say?', 'the meeting is confirmed'),
    ('What does the original say?', 'the meeting is proposed'),
    ('What does Rim say about clear English?', 'clear is not the same as right')],
 b=[('Clear is not the same as ____________.', 'right'),
    ('The original says the meeting is ____________.', 'proposed'),
    ('Common is not ____________.', 'correct'),
    ('I read both ____________, so ask me.', 'languages')]),

speak=[('Say it as a routine',
        ['Student A: say six things that happen every day at your place of work.',
         'Use the present simple and a time: The door opens at eight.',
         'Student B: ask one question about each with do or does.']),
       ('The building',
        ['Describe your building to a partner in six sentences.',
         'Say what is on each floor and who works there.',
         'Your partner draws it, then shows you what they drew.']),
       ('Three questions at a front desk',
        ['Student A is new. Student B is at the front desk.',
         'Ask for the section, the person and the time.',
         'Change roles and do it again without looking at the page.'])],

ext_title='Nine people, five languages, and one door that opens at eight',
ext_fig=figs.datatable('A WORKING DAY AT A SMALL MISSION',
                       ['Hour', 'What happens', 'Who'],
                       [['08:00', 'the building opens', 'administration'],
                        ['08:30', 'the consular window opens', 'consular section'],
                        ['09:00', 'the morning meeting', 'all posted staff'],
                        ['11:00', 'post and letters from the host ministry', 'chancery'],
                        ['14:00', 'appointments outside the building', 'chancery'],
                        ['17:00', 'the duty phone starts', 'the duty officer']]),
ext_fig_cap='Six fixed hours. Everything else in the day moves.',
ext=[
 'A small mission is nine people and a timetable. Four officers are posted from home. Five '
 'colleagues are engaged locally. The posted officers change every three or four years. The '
 'local colleagues often stay for twenty.',
 'This matters more than it sounds. The memory of a mission lives with the people who do '
 'not leave. They know which office answers, which form is refused, and which number '
 'actually rings at night. A new officer who ignores them repeats every old mistake.',
 'The day has fixed points. The building opens at eight. The consular window opens at half '
 'past eight. There is a morning meeting at nine. The post from the host ministry arrives '
 'at eleven. At five the duty phone starts, and it belongs to one named person.',
 'Between the fixed points the day is not fixed at all. A citizen arrives without an '
 'appointment. A letter arrives in a language nobody in the room reads well. The capital '
 'asks for something by the end of the day, and the end of the day in the capital is not '
 'the end of the day here.',
 'So the first week is not about diplomacy. It is about the building, the people and the '
 'clock. An officer who knows these three things can be useful in week two. An officer who '
 'does not is still asking where the forms are in month two.',
 'There is one more thing the first week teaches. A letter arrives in a language you do not '
 'read, and a translation system gives you clear English in four seconds. Some of that '
 'translation you can check, because you hold the original or a colleague reads both '
 'languages. Some of it you cannot check at all, and that difference decides what you may '
 'put in writing.'],

dp2=('Why services brief on the building first', 'Services that give new officers a written '
     'orientation in the first week report fewer procedural errors in the first quarter '
     'than services that leave arrival to chance.',
     'Source: reported practice in diplomatic staff training, 2025–2026.'),

e_a=[('How many people work at the mission?', 'nine'),
     ('How often do posted officers change?', 'every three or four years'),
     ('Who holds the memory of a mission?', 'the locally engaged staff who do not leave'),
     ('What starts at five?', 'the duty phone'),
     ('What is the first week really about?', 'the building, the people and the clock')],
e_b=[('Four officers are posted from home.', 'T'),
     ('Local colleagues usually stay for three years.', 'F'),
     ('The morning meeting is at nine.', 'T'),
     ('The post arrives at eight.', 'F'),
     ('The duty phone belongs to one named person.', 'T'),
     ('The first week is mostly about policy.', 'F')],

w_model='Purpose: tell the capital that I have arrived and taken up the post. Scope: my '
        'arrival only; no report on the Mission. Inputs: the date of arrival, the post, the '
        'name of my predecessor. Criteria: 4 lines, 1 date, 1 name, 1 contact number. Done: '
        '4 lines, sent by 17:00 on day 1. Fallback: if the pass is not issued, say so in '
        'line 4 and give the date it is expected.',
w_fig=figs.spec_card('FOUR LINES, SIX DECISIONS',
                     [('Purpose', 'tell the capital I have taken up the post'),
                      ('Scope', 'my arrival only, not the Mission'),
                      ('Inputs', 'date, post, predecessor’s name'),
                      ('Criteria', '4 lines, 1 date, 1 name, 1 number'),
                      ('Done', '4 lines, sent by 17:00 on day 1'),
                      ('Fallback', 'no pass yet: say so, with the expected date')]),
w_fig_cap='A four-line message still has six decisions inside it.',
w_task='Write four lines to the capital about your first morning at a post.',
w_steps=['Line 1: the date you arrived and the post you have taken up.',
         'Line 2: the name of the officer who handed over, or that there was none.',
         'Line 3: one practical fact the capital needs, with a number.',
         'Line 4: one thing that is not yet done, and the date it will be.',
         'Use the present simple for what is now routine.'],
w_bank=['I arrived on … and took up the post of … on …',
        'My predecessor, …, left the post on …',
        'The Mission has … staff, of whom … are locally engaged.',
        'My security pass is expected on …',
        'The working day here runs from … to …'],
w_check=['Is there a date in line 1?',
         'Is there a name, or a clear statement that there is none?',
         'Is there one number?',
         'Does line 4 give a date, not the word soon?'],

t_title='A translation you can check, and one you cannot',
t_fig=figs.split('TWO KINDS OF TRANSLATION',
                 'You can check it',
                 ['a letter you also have in the original',
                  'a word a colleague reads in both languages',
                  'a term that appears in an official glossary',
                  'a number, a date or a name'],
                 'You cannot check it',
                 ['a long text in a language nobody here reads',
                  'a word with two possible meanings and no context',
                  'a polite form that may be a refusal',
                  'a legal term with no agreed equivalent']),
t_fig_cap='The left column is safe to use today. The right column needs a person.',
t_body=[
 'A translation system is fast and it is often right. It reads a letter in four seconds and '
 'gives you clear English. The danger is not the speed. The danger is that the English is '
 'always clear, even when it is wrong.',
 'So divide every translation into two kinds. The first kind you can check: you have the '
 'original, or a colleague reads both languages, or the word is a name, a date or a number. '
 'Use that translation today. The second kind you cannot check. Use it to understand, never '
 'to act, and never to quote.',
 'In a mission this rule has a simple shape. A translation you cannot check never goes into '
 'a report, a note or a reply. It goes into your head, so that you know what to ask a person '
 'about. That is a real use, and it is not the same as trusting it.'],
t_say=[('Name the kind: ', 'Is this a translation I can check, or one I cannot?'),
       ('State the check: ', 'I have the original and Rim reads both languages.'),
       ('State the limit: ', 'I understand the letter. I will not quote it until it is checked.')],
t_bound='A translation system does not know that a polite form in one language is a refusal '
        'in another, and it cannot tell you that it has guessed. It gives a clear sentence '
        'for a doubtful one, and it never says that it is unsure.',
t_a=[('Is this a translation I can ____________, or one I cannot?', 'check'),
     ('I have the ____________ and a colleague reads both languages.', 'original'),
     ('I understand the letter. I will not ____________ it yet.', 'quote'),
     ('Clear is not the same as ____________.', 'right'),
     ('A system never says that it is ____________.', 'unsure'),
     ('Use it to understand, never to ____________.', 'act')],
t_b_rubric='Say whether each translation can be checked, and how.',
t_b=[('A letter in the local language, and the original is on your desk.',
      'can be checked against the original'),
     ('A long legal text and nobody at the Mission reads that language.',
      'cannot be checked; understand only, do not quote'),
     ('A date and a reference number in a note.', 'can be checked; numbers carry across'),
     ('A short polite sentence that may be a refusal.',
      'cannot be checked; ask a person who reads both languages')],

case=dict(
 title='The Decision Room · The word that meant proposed',
 brief=[
  'At 11:00 a letter arrives from the host ministry. It is in the local language. Nour puts '
  'it into a translation system. The English says that a meeting on 14 September is '
  'confirmed. She writes four lines to the capital and says the meeting is confirmed.',
  'At 16:00 Rim Haddad reads the original. The original word means proposed, not confirmed. '
  'The host ministry has offered a date. It has not agreed one. The capital has already '
  'been told that a date exists.',
  'Dr Kanaan has to decide what the Mission does now, and what it does next time a letter '
  'arrives in a language the duty officer cannot read.'],
 exhibit=figs.datatable('THE SAME LETTER, THREE READINGS',
                        ['Source', 'What it says about 14 September', 'Checked by'],
                        [['the original letter', 'a date is proposed', 'Rim Haddad'],
                         ['the machine translation', 'the meeting is confirmed', 'nobody'],
                         ['the message to the capital', 'the meeting is confirmed', 'nobody'],
                         ['the host ministry diary', 'no entry yet', 'Rim Haddad']]),
 exhibit_cap='One letter, two meanings, and only one of them was checked.',
 exhibit_note='Three of the four rows come from the same sentence. The difference between '
              'proposed and confirmed is one word, and it is the whole meaning.',
 voices=[('Nour Ajami', 'third secretary',
          'The English was completely clear. It did not look like a guess.'),
         ('Rim Haddad', 'consular assistant',
          'It never looks like a guess. That is the problem with it.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The error is not the translation. The error is that we reported an unchecked word.')],
 steps=[('Find it', 'Which word changed the meaning?'),
        ('Compare it', 'What do the four rows actually say?'),
        ('Infer it', 'Why did nobody notice before 16:00?'),
        ('Weigh it', 'A wrong word against a slow reply to the capital.'),
        ('Decide', 'What goes to the capital now, and what changes tomorrow?')],
 analysis=[('Find it. Which word changed the meaning?', 'proposed became confirmed'),
           ('Compare it. How many rows were checked by a person?', 'two'),
           ('Infer it. Why did nobody notice the error?', 'the English was clear and nobody read the original'),
           ('Weigh it. What did the capital believe at 12:00?', 'that a date was agreed'),
           ('Decide. What is the cost of correcting it now?', 'one short correction, and some trust')],
 decision='Decide what Dr Kanaan does, in four lines.',
 decision_steps=['Say what goes to the capital today, and by when.',
                 'Say who reads an original before anything is reported.',
                 'Say what happens when that person is not in the building.',
                 'Say which words are never taken from a machine translation.'],
 bank=['A correction is sent to the capital by 17:00 today.',
       'No letter is reported until one named person has read the original.',
       'Where no reader is available, the report says the text is unchecked.',
       'Dates, agreement and refusal are never quoted from a machine translation.'],
 outcome='Dr Kanaan sends a two-line correction at 16:40. She makes one rule: a letter in '
         'the local language is reported only after a named person has read the original. '
         'Where nobody can, the report says so in the first line. Nour keeps using the '
         'translation system every day, because she now knows what it is for.',
 outcome_q=[('What time did the correction go?', '16:40'),
            ('What must happen before a letter is reported?', 'a named person reads the original'),
            ('What goes in the first line if nobody can read it?', 'that the text is unchecked'),
            ('Does Nour stop using the system?', 'no, she keeps using it'),
            ('What changed, the tool or the rule?', 'the rule')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Translate the letters',
 task=['This is the instruction as Nour received it, word for word, at ten past eleven.',
       'Read it, then look at what came back at noon.'],
 draft=['Translate the letters from the host ministry.',
        'Do the recent ones.',
        'Give me the important points.',
        'Keep it short.',
        'Make it good enough to send on.',
        'I need it before I go out.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says how many letters, or how recent, or how short.',
 asked=['Translations of the letters', 'The important points', 'Something I can send on'],
 back=['41 letters, 18 months', 'Every paragraph, summarised', 'Nothing that can be sent'],
 gap='Nobody said how many letters, how old, or what important means.',
 back_cap='Forty-one letters came back because nobody said four.',
 back_note='The system did not fail. It answered the instruction it was given, and the '
           'instruction had no number in it anywhere.',
 diagnosis=[('“the letters from the host ministry”', 'unscoped set'),
            ('“the recent ones”', 'unscoped set'),
            ('“the important points”', 'unstated criterion'),
            ('“keep it short”', 'unbounded quantity'),
            ('“good enough to send on”', 'unstated criterion'),
            ('“before I go out”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that only one thing can come back.',
 scaffold=['why the translation is needed',
           'which letters, by date and number',
           'where the letters are',
           'what each summary must contain',
           'how long it is and when it is due',
           'what to do with a letter nobody can read'],
 bank=['Purpose: so that … can decide …',
       'Scope: the … letters received between … and … ; everything else excluded',
       'Inputs: the folder …, and the original of each letter',
       'Criteria: … lines per letter, each with the date, the sender and the request',
       'Done: … pages, by … on …',
       'Fallback: where a letter cannot be checked, list it and do not summarise it'],
 check=['Is there a number of letters?',
        'Are the dates stated?',
        'Does it say what each summary must contain?',
        'Is there a time, not the word soon?'],
 model=['so that the Ambassador can prepare for 14 September',
        'the 4 letters received between 1 and 11 September; nothing earlier',
        'the chancery folder, with the original of each letter',
        '3 lines per letter: the date, the sender and what is asked for',
        '1 page, by 14:00 today',
        'a letter nobody can read in the original: list it, do not summarise it'],
 cost='Nour read 41 letters for ninety minutes and used four of them. Six words would have '
      'saved eighty-five minutes on her first morning.'),

feet=dict(
 title='On Your Feet · The front desk of the host ministry',
 setting=[
  'It is your fourth day. Dr Kanaan sends you to the host ministry to collect a document. '
  'You have no appointment, because the document is routine and the Mission always collects '
  'it on a Thursday. You have your Mission card. You do not yet have your diplomatic '
  'identity card, because it takes three weeks.',
  'The protocol officer at the front desk is polite and busy. There is a queue behind you. '
  'You want the document, and you want to be remembered as somebody who is easy to deal '
  'with. You have about ninety seconds.'],
 ladder=[('Who are you?', 'name, rank and mission, in one sentence'),
         ('Any appointment?', 'say no plainly, then give one piece of evidence'),
         ('Not on the list', 'the turn you cannot fully answer')],
 cap='Three turns. The third one is the turn you cannot fully answer.',
 turns=[('Turn 1 · Protocol officer', 'Good morning. Who are you, please, and which mission?'),
        ('Turn 2 · Protocol officer', 'And do you have an appointment this morning?'),
        ('Turn 3 · Protocol officer', 'I see. Your name is not on today’s list. Who told you to come?')],
 holds=['My name is …, third secretary at the Mission of …',
        'I am here for the routine Thursday collection.',
        'May I give you the reference on the letter?',
        'I do not have an appointment, and I understand that.',
        'My identity card is still being issued. Here is my Mission card.',
        'If today is not possible, may I ask who I should write to?'],
 redline='You must not say that you have an appointment when you do not, and you must not '
         'say that the Ambassador sent you unless the Ambassador sent you. Do not promise '
         'that the Mission will do anything in return, because you cannot promise that.',
 score=['Gave a name, a rank and a mission in the first sentence.',
        'Said plainly that there was no appointment, without apologising three times.',
        'Offered one piece of evidence: a reference, a card or a date.',
        'Ended with a question that gives the other person an easy way to help.',
        'Invented nothing, and promised nothing.'],
 a=[('What three things does the first answer need?', 'a name, a rank and a mission'),
    ('Do you have an appointment?', 'no'),
    ('What do you show instead of a diplomatic identity card?', 'the Mission card'),
    ('What must you never claim?', 'an appointment you do not have'),
    ('Who may you not say sent you?', 'the Ambassador, unless he did'),
    ('How should the ninety seconds end?', 'with a question the other person can answer easily')]),

rev_fig=figs.split('ON THE FIRST MORNING',
                   'A sentence that helps nobody',
                   ['I am new.', 'Somebody told me to come.',
                    'I think it opens early.', 'I will ask about the letter.'],
                   'A sentence that works',
                   ['I am Nour Ajami, third secretary.',
                    'Dr Kanaan asked me to collect the document.',
                    'The building opens at eight.',
                    'The letter of 9 September is unchecked.']),
rev_fig_cap='Every sentence on the right has a name, a time or a number in it.',
rev=dict(
 read=[('What time does the Mission open?', ['eight', 'nine', 'half past eight', 'ten'], 0),
       ('How many staff are locally engaged?', ['five', 'four', 'nine', 'two'], 0),
       ('What did the original letter actually say?',
        ['proposed', 'confirmed', 'refused', 'postponed'], 0),
       ('What is the rule after the Decision Room?',
        ['a named person reads the original', 'translations are banned',
         'letters go unreported', 'the capital translates everything'], 0)],
 listen_text='The Mission opens at eight. The consular window opens at half past eight. The '
             'morning meeting is at nine. The post arrives at eleven. The duty phone starts '
             'at five, and it belongs to one named person.',
 listen=[('The Mission opens at ____________.', 'eight'),
         ('The consular window opens at ____________ past eight.', 'half'),
         ('The post arrives at ____________.', 'eleven'),
         ('The duty phone belongs to one ____________ person.', 'named')],
 speak=['Tell your partner the timetable of your own working day in six sentences.',
        'Your partner asks three questions with do or does.'],
 write='Write four lines to the capital reporting that you have taken up your post.',
 vocab=[('The main offices of an embassy are the ____________.', 'chancery'),
        ('The officer responsible at night is the ____________ officer.', 'duty'),
        ('The person who held your post before you is your ____________.', 'predecessor'),
        ('A colleague employed in the host country is ____________ engaged.', 'locally')],
 gram=[('The door ____________ (open) at eight.', 'opens'),
       ('Five colleagues ____________ (be) locally engaged.', 'are'),
       ('____________ the duty officer answer at night?', 'Does'),
       ('He ____________ not hold the keys.', 'does')]),

found=['Write your own timetable of a working day, in the present simple, with six times.',
       'Learn the names and jobs of every person in your building this week.',
       'Make two lists: translations you can check, and translations you cannot.',
       'Practise the front-desk round with a colleague until it takes under ninety seconds.'],
end_line='The building, the people and the clock. Learn those three and week two is useful.',
end_next='Next: Who Does What in the Building')
