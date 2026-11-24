# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='The Diary and the Appointment',
gram='prepositions of time: at, on, in, by, until',
ai='calendars, time zones and the appointment that moved',
strap='CEFR A2 · Grammar: prepositions of time: at, on, in, by, until · '
      'AI: calendars, time zones and the appointment that moved',
cando=['use at, on, in, by and until correctly with times and dates',
       'read a diary across two time zones without making an error',
       'ask for and confirm an appointment in writing',
       'say what a scheduling system does not know about a country',
       'write a five-line confirmation of a meeting'],

hero=('TWO WEEKENDS, THREE TIME ZONES, ONE MINISTER',
      ['The capital rests on Friday. The host country rests on Sunday.',
       'The system found a slot that suited nobody at all.'],
      [(720, 'teal', 'long'), (720, 'blue', 'short'), (720, 'grey', 'short')]),
hero_cap='A diary open on two screens, with a proposed meeting on a day that does not exist for one side.',

warm=['When is the weekend in your country, and when is it where you are posted?',
      'How far ahead do you ask for an appointment with a senior official?',
      'What happens in your office when a meeting is moved by two hours?'],

read=[
 'The Mission runs on two calendars. The capital works from Sunday to Thursday. The host '
 'country works from Monday to Friday. There is one day each week when both are open and '
 'nobody is travelling, and that day is usually Wednesday.',
 'There is also a time difference of two hours. A message sent at five in the afternoon in '
 'Calmar arrives in the capital at seven, when the desk is closed. A telephone call at nine '
 'in the capital reaches the Mission at seven, when the building is locked.',
 'Appointments at the host ministry are made in writing. A request for a director takes ten '
 'days. A request for a minister takes four weeks and is sometimes refused without a '
 'reason. Tarek says that the lead time is the whole skill.',
 'In October the Ambassador asked for a meeting with a director in the trade department. '
 'Nour sent the request on 2 October. The reply came on 14 October and offered 29 October at '
 'nine, which is a public holiday in the host country for part of the city.',
 'Nour had used a scheduling system to find the free slots. It read both diaries correctly '
 'and proposed four times. It did not know about the regional holiday, because the regional '
 'holiday is set by the city and published in the local language only.'],

dp1=('What scheduling misses', 'Missions commonly report that automated scheduling fails '
     'most often on local and regional public holidays, religious observance and school '
     'terms, because these are published locally and are not held in international '
     'calendar data.',
     'Source: reported practice in diplomatic administration, 2025–2026.'),

c_a=[('Which days does the capital work?', 'Sunday to Thursday'),
     ('Which day is usually open for both?', 'Wednesday'),
     ('What is the time difference?', 'two hours'),
     ('How long does a request for a minister take?', 'four weeks'),
     ('When did the reply come?', 'on 14 October'),
     ('What did the system not know?', 'about the regional holiday')],

c_b=[('The host country works from Sunday to Thursday.', 'F'),
     ('A message sent at five arrives when the desk is closed.', 'T'),
     ('A request for a director takes ten days.', 'T'),
     ('A ministerial request is never refused.', 'F'),
     ('The system read both diaries correctly.', 'T'),
     ('The regional holiday is published in English.', 'F')],

c_c=[('The meeting is ____________ nine o’clock.', 'at'),
     ('The reply came ____________ 14 October.', 'on'),
     ('The request takes four weeks ____________ October.', 'in'),
     ('Please reply ____________ Thursday at the latest.', 'by'),
     ('The office is closed ____________ Monday morning.', 'until'),
     ('We work ____________ Monday to Friday.', 'from')],

c_d=[('Use at with ( clock times / days ).', ['clock times', 'days'], 0),
     ('Use on with ( days and dates / months ).', ['days and dates', 'months'], 0),
     ('By Thursday means ( not later than Thursday / on Thursday only ).',
      ['not later than Thursday', 'on Thursday only'], 0),
     ('The two calendars overlap on ( Wednesday / Friday ).', ['Wednesday', 'Friday'], 0),
     ('The system failed because of ( local data / arithmetic ).', ['local data', 'arithmetic'], 0)],

c_e=('At, on, in or by? Put each phrase in the right column.',
     [('nine o’clock', 'at'),
      ('14 October', 'on'),
      ('October', 'in'),
      ('Thursday at the latest', 'by'),
      ('Wednesday morning', 'on'),
      ('two weeks’ time', 'in')],
     ['at', 'on', 'in', 'by']),

v_fig_title='THE DIARY OF A MISSION',
v_fig=[('clock', 'a lead time'), ('doc', 'an agenda'), ('chart', 'a time zone'),
       ('people', 'a courtesy call'), ('door', 'a site visit'), ('key', 'a confirmation')],
v_fig_cap='Six words that decide whether a meeting happens at all.',

vocab=[
 ('an agenda', 'the list of items to be discussed at a meeting'),
 ('a time zone', 'a region where the same clock time is used'),
 ('a working week', 'the days on which an organisation is normally open'),
 ('a public holiday', 'a day on which offices are closed by law or custom'),
 ('a lead time', 'the period needed between asking for something and getting it'),
 ('a confirmation', 'a message establishing that something agreed will happen'),
 ('a postponement', 'the moving of an event to a later time'),
 ('a cancellation', 'the ending of an arrangement that will not now happen'),
 ('a rescheduling', 'the setting of a new time for something already arranged'),
 ('a clash', 'two commitments arranged for the same time'),
 ('punctuality', 'the practice of arriving at the agreed time'),
 ('a standing meeting', 'a meeting that happens regularly without a new invitation'),
 ('a courtesy call', 'a short visit made to show respect rather than to transact business'),
 ('a site visit', 'a visit made to see a place rather than to meet in an office'),
 ('travel time', 'the time needed to get from one appointment to the next'),
 ('a buffer', 'spare time left between two commitments'),
 ('a half-day', 'a period of about four working hours'),
 ('a reminder', 'a message sent to make sure something is not forgotten'),
 ('a calendar entry', 'the record of an appointment in a diary system'),
 ('an observance', 'a day or period marked by religious or national custom')],

v_a=[('The list of items for a meeting is an ____________.', 'agenda'),
     ('The period needed between asking and getting is the ____________ time.', 'lead'),
     ('The moving of an event to a later time is a ____________.', 'postponement'),
     ('Two commitments at the same time are a ____________.', 'clash'),
     ('A short visit to show respect is a ____________ call.', 'courtesy'),
     ('Spare time between two commitments is a ____________.', 'buffer'),
     ('A day marked by religious custom is an ____________.', 'observance'),
     ('A visit to see a place is a ____________ visit.', 'site')],

v_b=[('A working week is the days on which an organisation', 'is normally open.'),
     ('A standing meeting is a meeting that happens regularly', 'without a new invitation.'),
     ('A confirmation is a message establishing', 'that something agreed will happen.'),
     ('A time zone is a region where', 'the same clock time is used.'),
     ('Travel time is the time needed to get', 'from one appointment to the next.')],

g_title='Grammar: prepositions of time: at, on, in, by, until',
g_rule=['at + clock times and some fixed phrases: at nine, at noon, at the weekend.',
        'on + days and dates: on Wednesday, on 14 October, on the morning of the visit.',
        'in + months, seasons, years and periods: in October, in two weeks, in the morning.',
        'by = not later than. until = continuously up to that point.'],
g_fig=('WRONG',
       ['The meeting is in nine o’clock.',
        'We will reply until Thursday.',
        'He arrives at 14 October.',
        'The office is closed by Monday.'],
       'RIGHT',
       ['The meeting is at nine o’clock.',
        'We will reply by Thursday.',
        'He arrives on 14 October.',
        'The office is closed until Monday.'],
       'four sentences that will be misread',
       'the same four, with the right preposition'),
g_fig_cap='By is a deadline. Until is a state that continues.',

g_a=[('The meeting is ____________ nine o’clock.', 'at'),
     ('He arrives ____________ 14 October.', 'on'),
     ('The reply came ____________ two weeks.', 'in'),
     ('Please confirm ____________ Thursday at the latest.', 'by'),
     ('The office is closed ____________ Monday morning.', 'until'),
     ('We meet ____________ Wednesday afternoons.', 'on'),
     ('The Ambassador is away ____________ the end of the month.', 'until'),
     ('The visit takes place ____________ November.', 'in'),
     ('Lunch is ____________ half past twelve.', 'at')],

g_b=[('The meeting is ( in / at ) nine.', ['in', 'at'], 1),
     ('We will reply ( by / until ) Thursday.', ['by', 'until'], 0),
     ('He arrives ( on / at ) 14 October.', ['on', 'at'], 0),
     ('The office is closed ( until / by ) Monday.', ['until', 'by'], 0),
     ('The visit is ( in / on ) November.', ['in', 'on'], 0),
     ('We meet ( on / in ) Wednesday mornings.', ['on', 'in'], 0)],

d1=dict(
 title='That day is a holiday in half the city',
 fig=(['They offered the twenty-ninth.', 'Half the city is closed.'],
      ['It was not in the calendar.', 'It is in the newspaper.']),
 cap='Nour and Tarek Sabbagh, reading the reply from the trade department, on 14 October.',
 lines=[('Nour', 'They have offered the twenty-ninth at nine.'),
        ('Tarek', 'The twenty-ninth is a holiday in this city.'),
        ('Nour', 'It is not in any calendar I looked at.'),
        ('Tarek', 'It is a regional observance. The city sets it, not the state.'),
        ('Nour', 'Will the ministry be open?'),
        ('Tarek', 'The ministry will be open. The director may not be.'),
        ('Nour', 'So do I accept it?'),
        ('Tarek', 'Accept it, and ask whether the director is working that day.'),
        ('Nour', 'That sounds like refusing without refusing.'),
        ('Tarek', 'It is. You never refuse a slot. You ask a question about it.'),
        ('Nour', 'And if he is working?'),
        ('Tarek', 'Then we go, and we are the only ones in the building, which is excellent.')],
 a=[('What day did they offer?', 'the twenty-ninth at nine'),
    ('Why is that day difficult?', 'it is a regional observance in the city'),
    ('Who sets the observance?', 'the city, not the state'),
    ('What does Tarek advise?', 'accept, and ask whether the director is working'),
    ('Why never refuse a slot?', 'you ask a question about it instead')],
 b=[('They have offered the twenty-ninth ____________ nine.', 'at'),
    ('It is a regional ____________.', 'observance'),
    ('You never ____________ a slot.', 'refuse'),
    ('Then we ____________, and we are the only ones there.', 'go')]),

d2=dict(
 title='It knows the clock, not the country',
 fig=(['It found four free slots.', 'Free for whom?'],
      ['Free in both diaries.', 'A diary is not a country.']),
 cap='Nour and Dalia Khoury, by telephone, about a proposed programme.',
 lines=[('Dalia', 'Your system proposed Thursday at four in your time.'),
        ('Nour', 'Both diaries were free.'),
        ('Dalia', 'Four in Calmar is six here. We close at five.'),
        ('Nour', 'It had the time zone right.'),
        ('Dalia', 'It had the arithmetic right. Arithmetic is not an office.'),
        ('Nour', 'So I should give it our closing times as a rule.'),
        ('Dalia', 'Yes, and our weekend, and the days the Minister travels.'),
        ('Nour', 'That is a long list.'),
        ('Dalia', 'It is eleven lines, and I will send it to you today.'),
        ('Nour', 'And the host side? Their holidays are published in the local language.'),
        ('Dalia', 'That part is yours. I cannot help you from here, and neither can it.')],
 unresolved=True,
 a=[('What did the system propose?', 'Thursday at four in Calmar time'),
    ('Why was that wrong?', 'four in Calmar is six in the capital, after closing'),
    ('What did the system get right?', 'the arithmetic of the time zone'),
    ('What should Nour give it?', 'closing times, the weekend and the Minister’s travel days'),
    ('Which part cannot be helped from the capital?', 'host-country holidays in the local language')],
 b=[('Four in Calmar is ____________ here.', 'six'),
    ('Arithmetic is not an ____________.', 'office'),
    ('It is ____________ lines.', 'eleven'),
    ('That part is ____________.', 'yours')]),

speak=[('At, on, in, by',
        ['Say ten appointments aloud, each with a different preposition of time.',
         'Your partner corrects any that are wrong.',
         'Then swap and do it again with dates instead of days.']),
       ('Two calendars',
        ['Draw your working week and your partner’s side by side.',
         'Find every hour when both are open.',
         'Say what you would do if there were only two such hours.']),
       ('Confirm it',
        ['Student A offers a meeting time by telephone.',
         'Student B confirms it, repeating day, date, time and place.',
         'Student A changes one detail silently; Student B must catch it.'])],

ext_title='A diary is a map of two countries, and a scheduling system has only seen the clock',
ext_fig=figs.datatable('WHAT THE SYSTEM KNEW AND DID NOT KNOW',
                       ['Fact', 'In the data', 'Known locally'],
                       [['the time difference', 'yes', 'yes'],
                        ['both office diaries', 'yes', 'yes'],
                        ['the capital’s weekend', 'partly', 'yes'],
                        ['the host state holidays', 'yes', 'yes'],
                        ['the city observance', 'no', 'yes'],
                        ['the Minister’s travel days', 'no', 'yes']]),
ext_fig_cap='Four rows the system had, and two rows that decided the meeting.',
ext=[
 'A mission lives between two working weeks. The capital and the host country rarely rest '
 'on the same days, and the overlap can be as little as three days. Add a time difference '
 'and the overlap becomes a handful of hours in the middle of each of those days.',
 'On top of this sits the lead time. Senior appointments cannot be asked for next week. A '
 'director takes ten days. A minister takes a month, and the answer may be no, with no '
 'reason given, which is normal and is not an insult.',
 'A scheduling system is genuinely good at the arithmetic of this. It reads two diaries, '
 'applies the time difference correctly, excludes national holidays and proposes slots in '
 'seconds. Doing that by hand across two calendars is slow and error-prone.',
 'What it does not have is local knowledge. Regional observances, school terms, the day the '
 'Minister always travels, the week the host ministry is at a conference: these are either '
 'unpublished or published only in the local language, and nothing in the data sees them.',
 'So feed it the rules you know and accept that the list is never complete. Give it the '
 'closing times, the weekends, the travel patterns and the holidays you have collected. '
 'Then show the proposed slots to a local colleague before you send anything to anybody.'],

dp2=('Lead times are part of the skill', 'Protocol practice commonly treats appointment lead '
     'times as a planning constraint rather than an administrative detail, because a '
     'request made with too little notice is often refused without any reason being given.',
     'Source: reported protocol practice, 2025–2026.'),

e_a=[('How small can the overlap of two working weeks be?', 'as little as three days'),
     ('How long does a ministerial appointment take?', 'about a month'),
     ('What is a scheduling system good at?', 'the arithmetic of two diaries and time zones'),
     ('What does it not have?', 'local knowledge of observances and travel patterns'),
     ('Who should see the slots before they are sent?', 'a local colleague')],
e_b=[('Two working weeks always overlap fully.', 'F'),
     ('A refusal without a reason is an insult.', 'F'),
     ('A system can apply a time difference correctly.', 'T'),
     ('Regional observances are in international calendar data.', 'F'),
     ('The list of local rules is never complete.', 'T'),
     ('Lead time is an administrative detail only.', 'F')],

w_model='Purpose: confirm one appointment so that neither side has to telephone again. '
        'Scope: the meeting with the trade director only; the courtesy call is not covered. '
        'Inputs: the department’s reply of 14 October and the Ambassador’s diary. Criteria: '
        '5 lines giving the day and date, the time in both time zones, the place, the '
        'participants by name and the agenda in 1 sentence. Done: 5 lines, sent by 16:00 on '
        '15 October. Fallback: if the director is not working that day, ask for 2 '
        'alternative dates in the same week.',
w_fig=figs.spec_card('FIVE LINES THAT END THE TELEPHONING',
                     [('Purpose', 'confirm one appointment, once'),
                      ('Scope', 'the trade director meeting only'),
                      ('Inputs', 'the reply of 14 October and the diary'),
                      ('Criteria', 'day, date, both times, place, names, agenda'),
                      ('Done', 'sent by 16:00 on 15 October'),
                      ('Fallback', 'director not working: ask for 2 alternatives')]),
w_fig_cap='A confirmation exists so that nobody has to remember the conversation.',
w_task='Write a five-line confirmation of a meeting.',
w_steps=['Line 1: the day and the date, written in full.',
         'Line 2: the time, with both time zones if two countries are involved.',
         'Line 3: the place, with the entrance and the floor.',
         'Line 4: who will attend, by name and rank.',
         'Line 5: the agenda in one sentence, and what you will bring.'],
w_bank=['The Mission confirms the meeting on Wednesday 29 October.',
        'The meeting is at 09:00 local time, which is 11:00 in the capital.',
        'The Ambassador will be accompanied by …',
        'The Mission understands that the subject is …',
        'The Mission will bring … copies of …'],
w_check=['Is the day written as well as the date?',
         'Are both times given where two countries are involved?',
         'Are the names and ranks given?',
         'Does line 5 say what you will bring?'],

t_title='Calendars, time zones and the appointment that moved',
t_fig=figs.split('SCHEDULING ACROSS TWO COUNTRIES',
                 'Let the system do this',
                 ['apply a two-hour difference to 40 slots',
                  'exclude both national holiday lists',
                  'find the hours both offices are open',
                  'rebuild a programme when one meeting moves'],
                 'Only a person knows this',
                 ['the city observance on the twenty-ninth',
                  'the week the department is at a conference',
                  'the day the Minister always travels',
                  'that nine o’clock means half past nine here']),
t_fig_cap='The clock is arithmetic. The country is knowledge, and it is held by people.',
t_body=[
 'Scheduling across two countries is exactly the kind of arithmetic that should be given '
 'away. Two diaries, a time difference, two holiday lists and forty possible slots is slow, '
 'dull work in which a tired officer makes mistakes at five in the afternoon.',
 'So give the system everything that is a rule: office hours at both ends, both weekends, '
 'national holidays, travel time between buildings, and the minimum buffer you keep between '
 'appointments. Written down once, these eleven or twelve lines serve for a whole tour.',
 'Then treat the result as a proposal, not a programme. Show it to somebody local before it '
 'leaves the building. Regional observances, school terms and the private habits of senior '
 'people are the things that actually move meetings, and none of them is in any dataset.'],
t_say=[('Give it the rules: ', 'Both offices work from … to …; the weekends are … and …'),
       ('Ask for proposals: ', 'Propose 4 slots that satisfy all of these rules.'),
       ('Check it locally: ', 'Tarek, is there anything about these four dates I should know?')],
t_bound='A scheduling system does not know about regional observances, school terms or the '
        'travel habits of senior officials, because these are not published in the data it '
        'uses. It will propose an impossible day with the same confidence as a good one.',
t_a=[('Both offices work from nine ____________ five.', 'to'),
     ('Propose four ____________ that satisfy all these rules.', 'slots'),
     ('Is there anything about these dates I should ____________?', 'know'),
     ('Give the system everything that is a ____________.', 'rule'),
     ('Treat the result as a ____________, not a programme.', 'proposal'),
     ('None of them is in any ____________.', 'dataset')],
t_b_rubric='Say whether a system can settle each question, and who can.',
t_b=[('Is 16:00 in Calmar inside office hours in the capital?',
      'yes: it is arithmetic, once the hours are given'),
     ('Is the twenty-ninth a working day in this city?',
      'no: a local colleague knows the regional observance'),
     ('Can the Ambassador reach the ministry in twenty minutes?',
      'no: travel time at that hour is local knowledge'),
     ('Which four slots suit both diaries?', 'yes: that is exactly what it is good at')],

case=dict(
 title='The Decision Room · The programme that fell on a holiday',
 brief=[
  'A delegation of four is coming from the capital for three days in late October. Nour '
  'builds the programme with a scheduling system: eleven meetings, two site visits, travel '
  'time between each. The programme is accepted by the capital on 16 October.',
  'On 24 October the host ministry telephones. The second day of the visit, 29 October, is '
  'a regional observance. Four of the eleven meetings cannot take place. Two of the four '
  'are the reason the delegation is coming at all.',
  'The flights are booked and cannot be changed without cost. The Mission has five working '
  'days. Dr Kanaan has to decide what to rebuild, what to drop, and what to tell the '
  'capital about how this happened.'],
 exhibit=figs.datatable('ELEVEN MEETINGS, ONE DAY LOST',
                        ['Day', 'Meetings', 'Status', 'Can it move?'],
                        [['28 October', '4', 'confirmed', '—'],
                         ['29 October', '4', 'regional observance', '2 can move'],
                         ['30 October', '3', 'confirmed', '—'],
                         ['the 2 key meetings', 'on the 29th', 'at risk', 'both ministries asked'],
                         ['site visit 1', 'on the 29th', 'cancelled', 'no'],
                         ['flights', 'fixed', 'booked', 'no']]),
 exhibit_cap='Four meetings on one day, and the two that justify the visit are both on it.',
 exhibit_note='The scheduling was arithmetically perfect. Every meeting fitted the diaries, '
              'the travel times and the national holiday list. The regional day was not in '
              'any list the Mission had.',
 voices=[('Nour Ajami', 'third secretary',
          'I gave it every rule I had been given. The rule I needed was not written anywhere.'),
         ('Tarek Sabbagh', 'protocol and liaison',
          'It is written in the city newspaper every September. In the local language.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'We asked a new officer to know something no new officer can know, and then called it her error.')],
 steps=[('Find it', 'Which day failed, and which meetings were on it?'),
        ('Compare it', 'What was in the holiday list and what was not?'),
        ('Infer it', 'Why did nobody at the Mission catch it before 24 October?'),
        ('Weigh it', 'Rebuilding a day against admitting the gap to the capital.'),
        ('Decide', 'Who checks a programme before it is sent, and against what?')],
 analysis=[('Find it. Which day was lost?', '29 October'),
           ('Compare it. How many meetings were on it?', 'four'),
           ('Infer it. How many of those justify the visit?', 'two'),
           ('Weigh it. What was missing from the holiday list?', 'the regional observance'),
           ('Decide. Why could Nour not have known?', 'it is published locally, in the local language')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what the Mission keeps for local dates, and who keeps it.',
                 'Say who checks a draft programme before it leaves.',
                 'Say what is written to the capital about the cause.',
                 'Say how the two key meetings are rescued.'],
 bank=['The Mission keeps a local dates file, maintained by the protocol officer.',
       'A draft programme is checked by a locally engaged colleague before it is sent.',
       'The report to the capital names the gap in the Mission’s own file, not the officer.',
       'The two key meetings are asked for on the 28th and the 30th, by note, the same day.'],
 outcome='Dr Kanaan writes to the capital the same afternoon and says that the Mission had '
         'no local dates file, which is the Mission’s fault and not a new officer’s. Tarek '
         'starts the file that week: regional observances, school terms, the conference '
         'weeks of three ministries, and the travel habits the Mission has noticed. Both '
         'key meetings move, one to the 28th and one to the 30th. The site visit is lost.',
 outcome_q=[('What does the Mission now keep?', 'a local dates file'),
            ('Who maintains it?', 'the protocol officer'),
            ('Who checks a draft programme?', 'a locally engaged colleague'),
            ('What did the report to the capital blame?', 'the Mission’s missing file'),
            ('What was lost in the end?', 'the site visit')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Set up the meetings for the visit',
 task=['A delegation was coming and somebody had to build a three-day programme.',
       'This is the instruction as it was given, and what came back two days later.'],
 draft=['Set up the meetings for the visit.',
        'The usual ministries.',
        'Fit in as much as you can.',
        'Leave some time for travel.',
        'Make sure the important ones happen.',
        'Have it ready before they come.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which ministries, how many meetings, or by when.',
 asked=['Meetings with the usual ministries', 'As much as possible', 'The important ones'],
 back=['17 meetings in 3 days', 'No gaps over 15 minutes', 'Two key meetings on one day'],
 gap='Nobody said how many meetings a day, which are essential, or how much travel time.',
 back_cap='Seventeen meetings fitted the diary and no human being.',
 back_note='As much as you can was read as a maximum. It was intended as a minimum with '
           'room to breathe, and nothing in the instruction said which.',
 diagnosis=[('“the meetings for the visit”', 'unscoped set'),
            ('“the usual ministries”', 'unscoped set'),
            ('“as much as you can”', 'unbounded quantity'),
            ('“some time for travel”', 'unbounded quantity'),
            ('“the important ones”', 'unstated criterion'),
            ('“before they come”', 'unstated criterion')],
 rewrite='Rewrite it on the six lines so that only one programme can come back.',
 scaffold=['why the delegation is travelling',
           'which ministries and which days',
           'which diaries and dates files are used',
           'how many meetings a day, with travel and buffer times',
           'what finished means, and the day it is due',
           'what to do if an essential meeting cannot be placed'],
 bank=['Purpose: so that the delegation can …',
       'Scope: the … ministries listed, on … to …; courtesy calls excluded',
       'Inputs: both diaries, the national holiday list and the local dates file',
       'Criteria: no more than … meetings a day, … minutes travel, … minutes buffer',
       'Done: a draft programme by … on …, checked by a local colleague',
       'Fallback: an essential meeting that cannot be placed is reported at once, not moved'],
 check=['Are the ministries named?',
        'Is there a maximum number of meetings a day?',
        'Is the local dates file named as an input?',
        'Is there a check by a local colleague?'],
 model=['so that the delegation can agree a trade programme before the end of the year',
        'the 4 ministries listed, on 28 to 30 October; courtesy calls excluded',
        'both diaries, the national holiday list and the Mission’s local dates file',
        'no more than 4 meetings a day, 40 minutes travel, 20 minutes buffer',
        'a draft programme by 12:00 on 20 October, checked by a locally engaged colleague',
        'an essential meeting that cannot be placed is reported the same day, not moved'],
 cost='17 meetings took 2 days to arrange and 4 of them were cancelled by the delegation on '
      'arrival. The 2 that mattered were both on the 1 day that disappeared.'),

feet=dict(
 title='On Your Feet · The ministry moves the meeting by telephone',
 setting=[
  'It is 16:50 on the day before a confirmed meeting between the Ambassador and a director. '
  'The director’s office telephones. They want to move the meeting to 08:00 tomorrow, two '
  'hours earlier, and they cannot say why.',
  'The Ambassador has another commitment at 08:45 on the other side of the city. You cannot '
  'reach him for twenty minutes. You must not refuse a slot, you must not accept something '
  'the Ambassador cannot do, and you have about ninety seconds.'],
 ladder=[('Two hours earlier', 'accept in principle, protect the detail'),
         ('Or not at all', 'hear the pressure without being moved by it'),
         ('Can you decide now?', 'the turn where you must hold without refusing')],
 cap='Three turns. The third one asks you to commit on somebody else’s behalf.',
 turns=[('Turn 1 · Director’s office', 'We would like to move tomorrow’s meeting to eight o’clock.'),
        ('Turn 2 · Director’s office', 'If eight is not possible, the director cannot see the Ambassador this month.'),
        ('Turn 3 · Director’s office', 'Can you confirm now? I need to close the diary this evening.')],
 holds=['Thank you. In principle, yes, and I will confirm within thirty minutes.',
        'May I ask how long the director expects the meeting to last?',
        'The Ambassador has a commitment at 08:45. Would 08:00 to 08:35 be enough?',
        'I would rather give you a certain answer in half an hour than an uncertain one now.',
        'May I have your direct number so that I do not go through the switchboard?',
        'If I cannot reach the Ambassador, I will call you anyway, by six.'],
 redline='You must not confirm a time the Ambassador may not be able to keep, you must not '
         'refuse the slot, and you must not say that the Ambassador is busy, because that '
         'invites the answer that the director is busier. Never let the call end without a '
         'time at which you will call back.',
 score=['Accepted in principle within the first sentence.',
        'Asked for the one fact that makes the new time workable: the length.',
        'Protected the later commitment without naming it as more important.',
        'Gave a time for the call-back and a way to be reached.',
        'Did not confirm anything on behalf of somebody unreachable.'],
 a=[('What do you say in the first sentence?', 'that in principle yes, with a time to confirm'),
    ('Which fact do you ask for?', 'how long the meeting is expected to last'),
    ('What is the Ambassador’s conflict?', 'a commitment at 08:45 across the city'),
    ('What must you never confirm?', 'a time the Ambassador may not be able to keep'),
    ('Why not say the Ambassador is busy?', 'it invites the reply that the director is busier'),
    ('What must the call always end with?', 'a time at which you will call back')]),

rev_fig=figs.split('ARRANGING A MEETING',
                   'A sentence that creates a second call',
                   ['Shall we say Wednesday morning?',
                    'Some time around nine.',
                    'At your office, I assume.',
                    'We will bring the papers.'],
                   'A sentence that ends the matter',
                   ['Wednesday 29 October, at 09:00 local time.',
                    '11:00 in the capital.',
                    'Trade department, second floor, east entrance.',
                    'Four copies of the draft memorandum.']),
rev_fig_cap='The right-hand column leaves nothing for anybody to guess or to telephone about.',
rev=dict(
 read=[('Which days does the capital work?',
        ['Sunday to Thursday', 'Monday to Friday', 'Tuesday to Saturday', 'every day'], 0),
       ('How long does a ministerial appointment take?',
        ['four weeks', 'four days', 'ten days', 'one week'], 0),
       ('What did the scheduling system not know?',
        ['the regional observance', 'the time difference', 'the diaries', 'the travel time'], 0),
       ('Who now checks a draft programme?',
        ['a locally engaged colleague', 'the capital', 'the system', 'nobody'], 0)],
 listen_text='Give the system everything that is a rule: office hours at both ends, both '
             'weekends, national holidays, travel time and your minimum buffer. Then treat '
             'the result as a proposal and show it to somebody local before it leaves.',
 listen=[('Give the system everything that is a ____________.', 'rule'),
         ('Office hours at both ____________.', 'ends'),
         ('Treat the result as a ____________.', 'proposal'),
         ('Show it to somebody ____________.', 'local')],
 speak=['Arrange a meeting with your partner across two time zones, out loud.',
        'Confirm it in five sentences with day, date, both times, place and agenda.'],
 write='Write a five-line confirmation of a meeting.',
 vocab=[('The period between asking and getting is the ____________ time.', 'lead'),
        ('Two commitments at the same time are a ____________.', 'clash'),
        ('Spare time between commitments is a ____________.', 'buffer'),
        ('A short visit to show respect is a ____________ call.', 'courtesy')],
 gram=[('The call is ____________ half past four.', 'at'),
       ('He arrives ____________ 14 October.', 'on'),
       ('Please confirm ____________ Thursday.', 'by'),
       ('The office is closed ____________ Monday.', 'until')]),

found=['Start a local dates file for your post: observances, school terms, conference weeks.',
       'Write the eleven scheduling rules of your own service on one page.',
       'Practise confirming a meeting in five lines, in under four minutes.',
       'Find out which day each ministry you deal with holds its internal meeting.'],
end_line='A system knows the clock. A colleague knows the country. Ask both, in that order.',
end_next='Next: Asking for Help in a New City')
