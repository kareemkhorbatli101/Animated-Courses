# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='A Time Zone That Is Asleep',
gram='future forms for undertakings and expectations',
ai='a crisis that begins in a time zone that is asleep',
strap='CEFR C1 · Grammar: future forms · AI: a time zone that is asleep',
cando=['distinguish will, is to, is going to and is expected to in an undertaking',
       'state an expectation without turning it into a commitment',
       'say what can be held open in the first hour of a crisis and what cannot',
       'design a first-hour rule that does not depend on anybody being awake',
       'write a crisis tasking in which the unconfirmed stays unconfirmed'],
hero=('AT 02:40 THERE WERE TWO PEOPLE AWAKE',
      ['Nine hundred enquiries arrived in the first four hours.',
       'The duty officer answered forty-one of them, correctly, and slept at six.'],
      [(730, 'blue', 'long'), (1390, 'orange', 'short'),
       (2050, 'purple', 'long'), (2690, 'teal', 'short')]),
hero_cap='The operations room at 03:15, with the next shift four hours away.',

warm=['What happens in your organisation at three in the morning?',
      'What is the difference between what you will do and what you expect to happen?',
      'In a crisis, what is the cost of an answer that turns out to be wrong?'],
read=[
 'A crisis does not choose its hour. In February an earthquake in Lysmark began at 02:40 local '
 'time in the Ministry, which is to say in the middle of the night, with a duty officer, a '
 'security guard and nobody else in the building.',
 'By 06:40 the consular mailbox and the hotline had taken about nine hundred enquiries. The '
 'duty officer answered forty-one of them. She did this correctly, she recorded every call, '
 'and she went home at six having been awake for twenty hours.',
 'What now happens in that first hour is different. An acknowledgement goes to every enquiry '
 'within two minutes, in the language it arrived in, stating three things: that the Ministry '
 'is aware of the event, that it cannot yet confirm any information about individuals, and '
 'when the next statement will be issued. Enquiries naming an individual are placed in a '
 'single list for the morning team, sorted by the time they arrived.',
 'Rana Deeb had resisted the automatic acknowledgement in a crisis specifically, as distinct '
 'from the routine mailbox, on the ground that a mechanical reply to a family in terror is '
 'worse than silence. She had been in the operations room for two crises and had read the '
 'messages people send at four in the morning.',
 'She changed her position after the February event, and the reason is narrow. In the first '
 'four hours, eight hundred and fifty-nine families received nothing at all, and of those, two '
 'hundred and twelve wrote again before dawn, several of them to ask whether the Ministry was '
 'aware that anything had happened. Silence had not spared them a mechanical reply. It had '
 'told them nobody was there.'],
c_a=[('When did the February event begin, in Ministry time?', 'at 02:40, in the middle of the night'),
     ('How many enquiries arrived by 06:40, and how many were answered?', 'about nine hundred; forty-one were answered'),
     ('What does the acknowledgement now state?', 'that the Ministry is aware, that it cannot confirm anything about individuals, and when the next statement will come'),
     ('What happens to enquiries naming an individual?', 'they go into a single list for the morning team, sorted by arrival time'),
     ('What was Rana’s original objection?', 'that a mechanical reply to a family in terror is worse than silence'),
     ('What changed her position?', 'that 859 families received nothing and 212 wrote again before dawn')],
c_b=[('The duty officer acted incorrectly.', 'F'),
     ('The acknowledgement names a time for the next statement.', 'T'),
     ('Enquiries naming individuals are answered automatically.', 'F'),
     ('Rana had no experience of crisis rooms.', 'F'),
     ('Silence spared families a mechanical reply.', 'F'),
     ('Some families asked whether the Ministry was aware of the event.', 'T')],
c_c=[('A crisis does not choose its ____________.', 'hour'),
     ('She went home at six having been awake for twenty ____________.', 'hours'),
     ('That it cannot yet ____________ any information about individuals.', 'confirm'),
     ('Sorted by the time they ____________.', 'arrived'),
     ('The messages people send at four in the ____________.', 'morning'),
     ('It had told them nobody was ____________.', 'there')],
c_d=[('Silence in the first hours communicated ( absence / care ).', ['absence', 'care'], 0),
     ('How many families received nothing?', ['41', '859', '212', '900'], 1),
     ('How many wrote again before dawn?', ['41', '212', '859', '900'], 1),
     ('How fast does the acknowledgement go now?', ['two minutes', 'two hours', 'by dawn', 'next day'], 1),
     ('How is the individual list sorted?', ['by name', 'by arrival time', 'by language', 'by severity'], 1)],
c_e=('Match each form to what it does.',
     [('We will issue a statement at 08:00.', 'an undertaking'),
      ('A statement is to be issued at 08:00.', 'an instruction or arrangement'),
      ('A statement is going to be issued shortly.', 'a prediction from present signs'),
      ('A statement is expected at about 08:00.', 'an expectation, not a promise'),
      ('We cannot say when a statement will be issued.', 'a refusal to undertake'),
      ('We hope to issue a statement today.', 'an intention with no commitment')],
     ['an undertaking', 'an instruction or arrangement', 'a prediction from present signs',
      'an expectation, not a promise', 'a refusal to undertake', 'an intention with no commitment']),

v_fig_title='THE FIRST HOUR',
v_fig=[('clock', 'a first hour'), ('people', 'a crisis cell'), ('doc', 'a situation report'),
       ('key', 'a call-out list'), ('shield', 'an unconfirmed report'), ('pin', 'an assembly point')],
v_fig_cap='Six words for the hour in which nothing is known and everything is asked.',
vocab=[
 ('a crisis cell', 'the group convened to manage a crisis'),
 ('a call-out list', 'the list of people to be summoned, in order'),
 ('a first hour', 'the period in which the least is known and the most is decided'),
 ('a situation report', 'a periodic written account of what is known'),
 ('a casualty figure', 'the number of people reported killed or injured'),
 ('an unconfirmed report', 'information received and not yet verified'),
 ('a hotline', 'a telephone line opened for a particular event'),
 ('a call volume', 'the number of calls received in a period'),
 ('a surge', 'a sudden rise far above normal levels'),
 ('a standby roster', 'the list of officers available to be called in'),
 ('a handover between time zones', 'the passing of work from one office to another as hours pass'),
 ('a continuous rota', 'a pattern of shifts that leaves no hour uncovered'),
 ('a rapid deployment team', 'a team held ready to travel at short notice'),
 ('an evacuation', 'the organised removal of people from danger'),
 ('an assembly point', 'the place citizens are told to gather'),
 ('a travel advice notice', 'published advice about travel to a place'),
 ('a registration of citizens', 'the recording of citizens present in a country'),
 ('a reunification enquiry', 'an enquiry seeking to locate a relative'),
 ('a reception centre', 'a place where arriving people are received and processed'),
 ('a stand-down', 'the formal end of a crisis response')],
v_a=[('The period in which the least is known and the most is decided is a ____________.', 'first hour'),
     ('Information received and not yet verified is an ____________.', 'unconfirmed report'),
     ('A pattern of shifts that leaves no hour uncovered is a ____________.', 'continuous rota'),
     ('An enquiry seeking to locate a relative is a ____________.', 'reunification enquiry'),
     ('The formal end of a crisis response is a ____________.', 'stand-down'),
     ('The list of people to be summoned, in order, is a ____________.', 'call-out list'),
     ('The place citizens are told to gather is an ____________.', 'assembly point'),
     ('A sudden rise far above normal levels is a ____________.', 'surge')],
v_b=[('A crisis cell is the group convened', 'to manage a crisis.'),
     ('A situation report is a periodic written account', 'of what is known.'),
     ('A handover between time zones is the passing of work', 'from one office to another as hours pass.'),
     ('A rapid deployment team is a team held ready', 'to travel at short notice.'),
     ('A registration of citizens is the recording', 'of citizens present in a country.')],

g_title='Grammar: future forms for undertakings and expectations',
g_rule=['Will plus verb is an undertaking by the speaker: we will issue a statement at 08:00.',
        'Is to plus verb reports an arrangement or an instruction, not a promise.',
        'Is going to predicts from present evidence; is expected to reports an expectation.',
        'In a crisis, use will only for what the Ministry controls, and is expected to for '
        'everything else.'],
g_fig=('LOOSE',
       ['We will know more soon.',
        'The airport will reopen tomorrow.',
        'Flights are going to resume.',
        'We will find your brother.'],
       'PRECISE',
       ['We will issue a further statement at 08:00 whether or not we know more.',
        'The airport is expected to reopen tomorrow; that is the authorities’ statement, not '
        'ours.',
        'Flights are expected to resume on Thursday; no date has been confirmed.',
        'We will search the registration list and will tell you the result by 10:00.'],
       'four undertakings about things the Ministry does not control',
       'four statements separating what will be done from what is expected'),
g_fig_cap='In a crisis, will is a promise and is expected to is a report; confusing them is the '
          'commonest failure in the first hour.',
g_a=[('We ____________ issue a further statement at 08:00.', 'will'),
     ('The airport is ____________ to reopen tomorrow.', 'expected'),
     ('Flights are expected to ____________ on Thursday; no date has been confirmed.', 'resume'),
     ('We will search the registration list and ____________ tell you the result by 10:00.', 'will'),
     ('A statement ____________ to be issued every 2 hours.', 'is'),
     ('We cannot ____________ when the road will open.', 'say'),
     ('The team is ____________ to arrive on the first available flight.', 'expected'),
     ('We ____________ not confirm any information about individuals yet.', 'cannot'),
     ('The hotline ____________ remain open until further notice.', 'will')],
g_b=[('Will is used for what the Ministry ( hopes / controls ).', ['hopes', 'controls'], 1),
     ('The airport ____ to reopen tomorrow.', ['will', 'is expected', 'is going', 'will be expected'], 1),
     ('Which reports an arrangement?', ['will', 'is to', 'is going to', 'is expected to'], 1),
     ('Which is a prediction from present evidence?', ['will', 'is to', 'is going to', 'is expected to'], 1),
     ('We ____ issue a statement at 08:00.', ['are expected to', 'will', 'are going', 'hope'], 1),
     ('Which is the commonest first-hour failure?', ['too many statements', 'using will for what is not controlled', 'using is to', 'using cannot'], 1)],

d1=dict(title='Worse than silence',
        fig=(['A mechanical reply at four in the morning.', 'To a family in terror.'],
             ['And the alternative?', 'Eight hundred and fifty-nine of them got nothing.']),
        cap='Rana Deeb and Karim Dalati, after the February event.',
        lines=[('Karim', 'You opposed the automatic acknowledgement in a crisis. I want to know '
                         'whether you still do.'),
               ('Rana', 'I opposed it for a reason I still think is serious. A family whose son '
                        'is in a collapsed building writes at four in the morning and receives a '
                        'reply in two minutes that tells them nothing. That is a particular kind '
                        'of insult.'),
               ('Karim', 'And in February?'),
               ('Rana', 'In February eight hundred and fifty-nine families received nothing, and '
                        'two hundred and twelve of them wrote again before dawn. Several asked '
                        'whether we were aware that an earthquake had occurred.'),
               ('Karim', 'So they were not spared the insult.'),
               ('Rana', 'They were given a worse one. The reply I was trying to avoid says we '
                        'cannot tell you anything yet. The silence I preferred says nobody is '
                        'here. I had not understood that those are the two options, because I '
                        'had been in the room and I knew somebody was there.'),
               ('Karim', 'That is the thing experience does. You knew the duty officer was awake '
                         'and working, so silence did not read as absence to you.'),
               ('Rana', 'It read as a section under pressure doing its best, which is what it '
                        'was, and which is information nobody outside the building had.'),
               ('Karim', 'What does the acknowledgement have to say?'),
               ('Rana', 'Three things and nothing else. That we are aware of the event. That we '
                        'cannot confirm anything about individuals. And the hour at which the '
                        'next statement will be issued, which we will meet whether or not we '
                        'know anything by then.'),
               ('Karim', 'The third is the one that costs you something.'),
               ('Rana', 'The third is the whole of it. A time we will meet is the only thing we '
                        'have to give at 02:40, and it is worth more than any amount of '
                        'sympathy, because sympathy at that hour from an institution is not '
                        'believed.')],
        a=[('What was Rana’s objection?', 'that a mechanical reply to a family in terror is a particular kind of insult'),
           ('What happened in February?', '859 families received nothing and 212 wrote again before dawn'),
           ('What are the two real options?', 'a reply saying nothing can be told yet, or a silence saying nobody is there'),
           ('Why did silence not read as absence to her?', 'because she had been in the room and knew somebody was working'),
           ('What are the three things the acknowledgement says?', 'that the Ministry is aware, that nothing about individuals can be confirmed, and when the next statement comes')],
        b=[('A particular kind of ____________.', 'insult'),
           ('The silence I preferred says nobody is ____________.', 'here'),
           ('A time we will ____________.', 'meet'),
           ('Sympathy at that hour from an institution is not ____________.', 'believed')]),
d2=dict(title='Will and is expected to',
        fig=(['The airport will reopen tomorrow.', 'Whose undertaking is that?'],
             ['Theirs.', 'Then do not write will.']),
        cap='Rana and Yara Ibrahim, on the 08:00 statement.',
        lines=[('Yara', 'The draft says the airport will reopen tomorrow and flights will '
                        'resume on Thursday.'),
               ('Rana', 'Both of those come from the Lysmark authorities.'),
               ('Yara', 'Then the Ministry has just undertaken that an airport it does not '
                        'control will open. When it does not open, we will have lied to nine '
                        'hundred families, and the fact that somebody else told us will not be '
                        'in anybody’s memory.'),
               ('Rana', 'The authorities’ statement is the best information available.'),
               ('Yara', 'It is, and it goes in as an expectation reported with its source. The '
                        'airport is expected to reopen tomorrow; that is the Lysmark '
                        'authorities’ statement of this morning.'),
               ('Rana', 'Which is longer and colder.'),
               ('Yara', 'It is colder and it survives Thursday. In a crisis every sentence is '
                        'read again on the day it turns out to be wrong, and a sentence that '
                        'carried its source survives that reading and a sentence that did not is '
                        'quoted as a broken promise.'),
               ('Rana', 'So will is reserved for what we do.'),
               ('Yara', 'Will is reserved for what we do, which in the first hour is almost '
                        'nothing: we will issue a statement at a stated time, we will search a '
                        'list, we will tell you the result. Those three are entirely within our '
                        'control and they are what people want.'),
               ('Rana', 'Everything else is expected to, reported with a source.'),
               ('Yara', 'And where there is no source, we cannot say. Those three words are the '
                        'most useful sentence in a crisis and the hardest to get past a Minister '
                        'at eight in the morning.')],
        a=[('Where did the airport information come from?', 'the Lysmark authorities'),
           ('What is wrong with writing will?', 'the Ministry undertakes something it does not control'),
           ('How should it be written?', 'as an expectation reported with its source'),
           ('What is will reserved for?', 'what the Ministry does: issuing a statement, searching a list, reporting the result'),
           ('What are the three most useful words?', 'we cannot say')],
        b=[('Every sentence is read again on the day it turns out to be ____________.', 'wrong'),
           ('A sentence that carried its ____________ survives that reading.', 'source'),
           ('Quoted as a broken ____________.', 'promise'),
           ('The hardest to get past a Minister at eight in the ____________.', 'morning')]),

speak=[('Will and expected',
        ['Student A: make six statements about what will happen in your work next week.',
         'Student B: sort them into what you control and what you do not.',
         'Rewrite the second group as expectations with a source.']),
       ('The first hour',
        ['Describe what your office would do in the first hour of an emergency at 3 a.m.',
         'Say who would be awake.',
         'Say what could be sent without them.']),
       ('Three things only',
        ['Draft aloud a three-sentence acknowledgement for a crisis.',
         'Your partner removes anything that is not aware, cannot confirm, or a time.',
         'Say what is left.'])],

ext_title='In the first hour of a crisis the only things a ministry can give are an acknowledgement and a time it will meet',
ext_fig=figs.datatable('THE FIRST FOUR HOURS, FEBRUARY',
                       ['', 'As it happened', 'Under the rule'],
                       [['enquiries received', '~900', '~900'],
                        ['acknowledged within 2 minutes', '0', 'all'],
                        ['substantively answered', '41', '41'],
                        ['received nothing', '859', '0'],
                        ['wrote again before dawn', '212', 'not known'],
                        ['asked whether the Ministry knew', 'several', '0']]),
ext_fig_cap='The third row does not change. The fourth and sixth are the whole of the argument.',
ext=[
 'A crisis arrives at the hour it arrives, and roughly a third of them arrive when the '
 'ministry’s own capital is asleep. The staffing reality is a duty officer, a security guard '
 'and a telephone, against a volume that would overwhelm the section at midday.',
 'The temptation in that hour is to do what can be done well: answer a few enquiries properly, '
 'record them, and work until the next shift. That is what a conscientious duty officer does '
 'and it is a rational use of one person, and the arithmetic of it is brutal. Forty-one '
 'enquiries answered properly and eight hundred and fifty-nine families given nothing is not a '
 'section at its best; it is a section with no rule.',
 'What can be done without a person is narrow and it is not an answer. An acknowledgement, in '
 'the language of the enquiry, within two minutes, stating three things: that the ministry is '
 'aware of the event, that it cannot yet confirm any information about individuals, and the '
 'hour at which the next statement will be issued. That is all. It answers nobody’s question '
 'and it is not meant to.',
 'The objection to it is serious and is usually raised by people who have worked in an '
 'operations room: a mechanical reply to a family in terror is an insult, and silence at least '
 'does not pretend. The answer is that silence is not read as restraint. It is read as absence, '
 'and the families who write again before dawn asking whether the ministry is aware that an '
 'earthquake has occurred are telling you exactly what the silence said to them. An officer '
 'inside the building knows somebody is awake and working; nobody outside it does.',
 'The grammar of the first hour then carries most of the remaining risk, and it is a question '
 'of future forms. Will is an undertaking by the ministry and must be reserved for what the '
 'ministry controls, which in the first hour is almost nothing: it will issue a statement at a '
 'stated time, it will search a registration list, it will report the result. Everything else '
 'is an expectation and is reported with its source: the airport is expected to reopen '
 'tomorrow, which is the local authorities’ statement of this morning. Every sentence written '
 'in a crisis is read again on the day it turns out to be wrong, and the sentence that carried '
 'its source survives that reading while the sentence that said will is quoted as a broken '
 'promise.'],
dp1=('Crisis response out of hours',
     'Consular crisis arrangements in several foreign ministries adopted automatic '
     'acknowledgement with a committed next-statement time in 2025, reserving undertakings for '
     'ministry-controlled actions and reporting all other expectations with their source.',
     'Source: reported practice in consular crisis management, 2025–2026.'),
e_a=[('What is the staffing reality in the small hours?', 'a duty officer, a security guard and a telephone'),
     ('What does a conscientious duty officer do?', 'answers a few enquiries properly and works until the next shift'),
     ('What are the three things an acknowledgement states?', 'awareness, the inability to confirm anything about individuals, and the next statement time'),
     ('How is silence read?', 'as absence, not as restraint'),
     ('What must will be reserved for?', 'what the ministry controls: a statement at a stated time, a search, a report of the result')],
e_b=[('Most crises arrive in office hours.', 'F'),
     ('Forty-one answered properly is a section at its best.', 'F'),
     ('The acknowledgement answers the enquirer’s question.', 'F'),
     ('The objection to it is unserious.', 'F'),
     ('An expectation should carry its source.', 'T'),
     ('Every crisis sentence is read again later.', 'T')],

w_model=(
 'Purpose: acknowledge every enquiry arising from the event within 2 minutes, so that no '
 'family is left with silence while the Ministry has nothing to tell them. Scope: enquiries '
 'received on any channel from the declaration of the event until the crisis cell convenes; '
 'enquiries from posts and other ministries are out of scope and go to the duty officer. '
 'Inputs: the enquiry, the declared facts of the event, and the next-statement time set by the '
 'duty officer. Criteria: state 3 things only, that the Ministry is aware of the event, that it '
 'cannot confirm any information about individuals, and the hour of the next statement; give '
 'no casualty figure and no information about any named person; use will only of what the '
 'Ministry itself will do; place every enquiry naming an individual in 1 list sorted by time of '
 'arrival. Done: 1 acknowledgement per enquiry within 2 minutes, in the language of the '
 'enquiry, and 1 list of named individuals updated continuously. Fallback: where no '
 'next-statement time has been set, state that a statement will be issued within 2 hours and '
 'notify the duty officer that the time is unset.'),
w_fig=figs.spec_card('THE TASKING FOR THE FIRST HOUR',
                     [('Purpose', 'nobody left with silence while nothing can be told'),
                      ('Scope', 'all channels until the cell convenes; official traffic excluded'),
                      ('Inputs', 'the enquiry, the declared facts, the next-statement time'),
                      ('Criteria', '3 statements only; no figures; no names; will only of ourselves'),
                      ('Done', '1 acknowledgement in 2 minutes; 1 list by arrival time'),
                      ('Fallback', 'no time set: promise 2 hours and notify the duty officer')]),
w_fig_cap='Three things only, and the third is the one that is worth something.',
w_task='Write a first-hour tasking for an emergency in your own work.',
w_steps=['Say what must not happen to anybody who writes.',
         'Bound the channels and the period.',
         'Limit the content to three statements.',
         'Forbid figures and named individuals.',
         'Say what happens where no next time has been set.'],
w_bank=['Acknowledge … within … , so that no …',
        'Cover … ; … are out of scope and …',
        'Work from … , … and …',
        'State … only, that … , that … , and … ; give no … and no … ; use will only of … ; place …',
        'Where no … has been set, state that … and notify …'],
w_check=['Is the content limited to three statements?',
         'Are casualty figures and named individuals forbidden?',
         'Is will restricted to the Ministry’s own actions?',
         'Is there a rule for an unset next-statement time?'],

t_title='A crisis in a time zone that is asleep',
t_fig=figs.split('THE FIRST HOUR',
                 'Can be done without a person',
                 ['acknowledge every enquiry in 2 minutes',
                  'in the language it arrived in',
                  'state the next statement time',
                  'list every named individual by arrival'],
                 'Must wait for a person',
                 ['anything about a named individual',
                  'any casualty figure',
                  'any assessment of the event',
                  'any undertaking beyond our own conduct']),
t_fig_cap='The left column is worth having at 02:40; the right column is worth waiting for.',
t_body=[
 'A third of crises begin while the capital is asleep, against a duty officer and a security '
 'guard. The conscientious response is to answer a few enquiries properly and work until the '
 'next shift, and in February that produced forty-one answers and eight hundred and fifty-nine '
 'families with nothing, which is not a section at its best but a section without a rule.',
 'What can be done without a person is narrow and is not an answer: an acknowledgement in the '
 'language of the enquiry within two minutes, stating that the Ministry is aware, that it '
 'cannot confirm anything about individuals, and the hour of the next statement. Expect the '
 'objection, which comes from people who have sat in operations rooms: a mechanical reply to a '
 'family in terror is an insult. The reply is that silence is not read as restraint but as '
 'absence, and the families who write again before dawn to ask whether the Ministry knows an '
 'earthquake has happened are reporting what the silence told them.',
 'Then watch the future forms, which carry most of the remaining risk. Will is an undertaking '
 'and belongs only to what the Ministry controls: a statement at a stated hour, a search of a '
 'list, a report of the result. Everything else is expected to, with its source named. Every '
 'sentence written in a crisis is read again on the day it proves wrong, and a sentence that '
 'carried its source survives while one that said will is quoted as a broken promise.'],
t_say=[('Say the three things: ', 'We are aware; we cannot confirm anything about individuals; the next statement is at 08:00.'),
       ('Reserve the undertaking: ', 'We will search the registration list and tell you the result by 10:00.'),
       ('Report the expectation: ', 'The airport is expected to reopen tomorrow; that is the authorities’ statement.')],
t_bound=('An automatic acknowledgement can state awareness, an inability to confirm, and a '
         'time. It cannot say anything about a named person, cannot give a figure, and must '
         'not undertake anything the Ministry does not control. It answers nobody’s question '
         'and its entire value is that it is not silence and that the time in it is met.'),
t_a=[('We are aware; we cannot ____________ anything about individuals.', 'confirm'),
     ('We will search the ____________ list and tell you the result by 10:00.', 'registration'),
     ('Flights are ____________ to resume on Thursday.', 'expected'),
     ('Silence is not read as restraint but as ____________.', 'absence'),
     ('Will is an undertaking and belongs only to what the Ministry ____________.', 'controls'),
     ('Quoted as a broken ____________.', 'promise')],
t_b_rubric='Rewrite each so that undertakings and expectations are separated.',
t_b=[('We will know more soon.', 'we will issue a further statement at 08:00 whether or not we know more'),
     ('The airport will reopen tomorrow.', 'the airport is expected to reopen tomorrow; that is the authorities’ statement'),
     ('Flights are going to resume.', 'flights are expected to resume on Thursday; no date has been confirmed'),
     ('We will find your brother.', 'we will search the registration list and will tell you the result by 10:00')],

case=dict(
 title='The Decision Room · The time in the acknowledgement',
 brief=[
  'The acknowledgement names the hour of the next statement. In the February event the duty '
  'officer set 08:00 and the statement was issued at 09:40.',
  'About 900 families had been told 08:00. The Ministry received 310 enquiries between 08:00 '
  'and 09:40, most of them asking whether the statement had been issued.',
  'Rana wants the next-statement time to be set by rule at three hours rather than by the duty '
  'officer. Karim says a rule-set time will be met and ignored. Maya Sarkis asks what is '
  'issued at the stated hour when nothing is known.'],
 exhibit=figs.datatable('THE 08:00 THAT WAS 09:40',
                        ['', 'Figure', 'Note'],
                        [['families told 08:00', '~900', '—'],
                         ['statement actually issued', '09:40', '100 minutes late'],
                         ['enquiries between 08:00 and 09:40', '310', 'mostly asking why'],
                         ['officers in the building at 08:00', '4', 'cell convened 07:20'],
                         ['reason for the delay', 'awaiting a casualty figure', '—'],
                         ['the figure when it came', 'unconfirmed', 'not published']]),
 exhibit_cap='The statement was late by a hundred minutes, waiting for a figure that was not '
             'published when it arrived.',
 exhibit_note='No rule said what the 08:00 statement had to contain.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Set the time by rule at three hours. A duty officer at 03:00 cannot judge when a '
          'statement will be ready and should not have to.'),
         ('Karim Dalati', 'Information Security and Records',
          'A time set by rule will be met by issuing nothing of substance, which teaches '
          'families that our times are decorative. The failure in February was not the time; '
          'it was waiting for a figure.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Then say what the statement must contain. If it may say that nothing further is '
          'known, it can always be issued on time, and the hour means something.')],
 steps=[('Find it', 'Why was the statement late?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Karim fear a rule-set time?'),
        ('Weigh it', 'A judged time against a time that is always met.'),
        ('Decide', 'How is the time set, and what must the statement contain?')],
 analysis=[('Find it. What was the delay waiting for?', 'a casualty figure, which was unconfirmed and not published'),
           ('Compare it. What does Rana propose?', 'a next-statement time set by rule at three hours'),
           ('Infer it. What does Karim predict?', 'that the time will be met with nothing of substance and become decorative'),
           ('Weigh it. What does Maya propose?', 'defining what the statement must contain, including that nothing further is known'),
           ('Decide. What would you do?', 'answers vary; a defined minimum content makes a stated time always keepable')],
 decision='Write how the next-statement time works.',
 decision_steps=['Say how the time is set.',
                 'Say what the statement must contain at a minimum.',
                 'Say what happens if a figure is expected but not confirmed.',
                 'Say what is recorded when a stated time is missed.'],
 bank=['The next-statement time is …',
       'The statement must contain, at a minimum, …',
       'Where a figure is expected but not confirmed, …',
       'Where a stated time is missed, …',
       'This is reviewed …'],
 outcome='The time is set by the duty officer within a range of two to four hours, and the '
         'minimum content of every statement was defined: what is known, what is not known, '
         'what the Ministry is doing, and the next statement time. A statement may consist '
         'entirely of the second and fourth of those. In the next two events every stated time '
         'was met, one of them with a statement saying that nothing further was known and that '
         'the next statement would be at 14:00. Rana, who had wanted the time fixed by rule, '
         'says the defined content was the answer and that her proposal would have made the '
         'time keepable by making it meaningless, which is what Karim had said and she had '
         'heard as an objection to rules in general.',
 outcome_q=[('What was defined?', 'the minimum content: what is known, what is not, what the Ministry is doing, and the next time'),
            ('What does Rana now say about her proposal?', 'that it would have made the time keepable by making it meaningless')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Handle the first hour',
 task=['This is the out-of-hours instruction in force in February, written for a normal night.',
       'It was followed, and 859 families received nothing for four hours.'],
 draft=['The duty officer is to handle enquiries arising from any incident.',
        'Deal with the most serious first.',
        'Keep a record of calls.',
        'Call in support if needed.',
        'Issue a statement when the position is clear.',
        'Brief the incoming shift.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines written for a night with eleven enquiries, applied to a night with nine '
           'hundred.',
 asked=['Every enquiry acknowledged within 2 minutes',
        'A stated next-statement time',
        'Named individuals listed, not answered'],
 back=['41 enquiries answered properly',
       '859 receiving nothing',
       'A statement issued when the position was clear, which was 09:40'],
 gap='"Handle enquiries" assumes a volume one officer can handle, "the most serious first" '
     'requires a judgement at scale, "if needed" leaves the threshold unset, and "when the '
     'position is clear" has no time in it at all.',
 back_cap='A conscientious officer following a reasonable instruction, at a scale the '
          'instruction had never imagined.',
 back_note='Line five is the failure. In a crisis the position is never clear, so a statement '
           'conditioned on clarity is a statement with no time.',
 diagnosis=[('[1] "handle enquiries arising from any incident" — how many, over what period?', 'unbounded quantity'),
            ('[2] "the most serious first" — serious judged how, and at what volume?', 'unbounded quantity'),
            ('[3] "keep a record of calls" — recorded how, and complete when?', 'undefined done'),
            ('[4] "call in support if needed" — needed at what threshold, and whom?', 'missing condition'),
            ('[5] "issue a statement when the position is clear" — and if it is never clear?', 'missing condition'),
            ('[6] "brief the incoming shift" — briefed on what, in what form?', 'undefined done')],
 rewrite='Rewrite the instruction so that nobody is left in silence and the statement has a '
         'time.',
 scaffold=['What must not happen to anybody who writes',
           'The channels and the period covered, and what is excluded',
           'The enquiry, the declared facts and the next-statement time',
           'Three statements only, no figures, no names, will only of ourselves, a list by arrival',
           'The acknowledgement time and the list',
           'What to do where no next-statement time has been set'],
 bank=['Acknowledge … within … , so that …',
       'Cover … ; … are out of scope …',
       'Work from … , … and …',
       'State … only; give no … ; use will only of … ; place …',
       'Return 1 … within … , and 1 …',
       'Where no … , state that … and notify …'],
 check=['Is every enquiry acknowledged within a stated time?',
        'Is the content of the acknowledgement limited?',
        'Are named individuals listed rather than answered?',
        'Does the statement have a time rather than a condition?'],
 model=['Acknowledge every enquiry arising from the event within 2 minutes, so that no family is left with silence while the Ministry has nothing to tell them',
        'Enquiries received on any channel from the declaration of the event until the crisis cell convenes; enquiries from posts and other ministries are out of scope and go to the duty officer',
        'The enquiry, the declared facts of the event, and the next-statement time set by the duty officer',
        'State 3 things only, that the Ministry is aware of the event, that it cannot confirm any information about individuals, and the hour of the next statement; give no casualty figure and no information about any named person; use will only of what the Ministry itself will do; place every enquiry naming an individual in 1 list sorted by time of arrival',
        '1 acknowledgement per enquiry within 2 minutes, in the language of the enquiry, and 1 list of named individuals updated continuously',
        'Where no next-statement time has been set, state that a statement will be issued within 2 hours and notify the duty officer that the time is unset'],
 cost='859 families left in silence for 4 hours, 212 of whom wrote again before dawn, several '
      'to ask whether the Ministry was aware that an earthquake had occurred.'),

rev_fig=figs.split('FUTURE FORMS',
                   'Undertaking what we do not control',
                   ['We will know more soon.',
                    'The airport will reopen tomorrow.',
                    'Flights are going to resume.',
                    'We will find your brother.'],
                   'Separated',
                   ['We will issue a statement at 08:00.',
                    'The airport is expected to reopen …',
                    'Flights are expected to resume …',
                    'We will search the list and tell you by 10:00.']),
rev_fig_cap='Will for our own conduct; is expected to, with a source, for everything else.',
rev=dict(
 read=[('In February the duty officer answered', ['all enquiries', '41 of about 900', 'none', 'half'], 1),
       ('Silence in the first hours is read as', ['restraint', 'absence', 'care', 'efficiency'], 1),
       ('Will must be reserved for', ['the best information', 'what the Ministry controls', 'expectations', 'figures'], 1),
       ('In the Decision Room, what was defined?', ['the time by rule', 'the minimum content of a statement', 'the call-out list', 'nothing'], 1)],
 listen_text='Every sentence written in a crisis is read again on the day it turns out to be '
             'wrong, and the sentence that carried its source survives that reading while the '
             'sentence that said will is quoted as a broken promise.',
 listen=[('Read again on the day it turns out to be ____________.', 'wrong'),
         ('The sentence that carried its ____________.', 'source'),
         ('Survives that ____________.', 'reading'),
         ('Quoted as a broken ____________.', 'promise')],
 speak=['Say three things you will do and three you expect, with sources.',
        'Draft a three-sentence crisis acknowledgement aloud.'],
 write='Write one sentence reporting an expectation with its source.',
 vocab=[('The period in which the least is known and the most is decided is a ____________.', 'first hour'),
        ('Information received and not yet verified is an ____________.', 'unconfirmed report'),
        ('A pattern of shifts that leaves no hour uncovered is a ____________.', 'continuous rota'),
        ('An enquiry seeking to locate a relative is a ____________.', 'reunification enquiry'),
        ('The formal end of a crisis response is a ____________.', 'stand-down')],
 gram=[('We ____________ issue a further statement at 08:00.', 'will'),
       ('The airport is ____________ to reopen tomorrow.', 'expected'),
       ('A statement ____________ to be issued every 2 hours.', 'is'),
       ('The team is ____________ to arrive on the first available flight.', 'expected'),
       ('The hotline ____________ remain open until further notice.', 'will')]),

found=['Write the three sentences your office would send in the first two minutes of a crisis.',
       'Name the hour at which you would issue a second statement.',
       'Separate one list of next week’s events into undertakings and expectations.',
       'Find out who is awake in your organisation at three in the morning.'],
end_line='Silence is not read as restraint. It is read as absence.',
end_next='Next: Writing for People Who Are Not Diplomats',
)
