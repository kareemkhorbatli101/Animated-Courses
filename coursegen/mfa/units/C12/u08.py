# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='The Day It Is Unavailable',
gram='cohesion: reference, substitution and lexical chains',
ai='the day the system is unavailable, in a crisis',
strap='CEFR C1 · Grammar: cohesion · AI: the day it is unavailable',
cando=['build cohesion with reference, substitution and a lexical chain',
       'keep a long instruction readable without repeating a noun eleven times',
       'say what a fallback must be able to do and how it is tested',
       'identify an untested assumption inside a continuity plan',
       'write a drill instruction that produces a finding rather than a reassurance'],
hero=('FOUR HOURS ON A TUESDAY',
      ['The fallback worked exactly as written, in a quiet week, in March.',
       'Nobody had asked what it would do with nine hundred enquiries an hour.'],
      [(730, 'purple', 'long'), (1390, 'blue', 'short'),
       (2050, 'orange', 'long'), (2690, 'teal', 'short')]),
hero_cap='Information Security and Records, after the first drill anybody had failed.',

warm=['What would your office do if its systems were unavailable for a day?',
      'Has that ever been tested at your busiest hour?',
      'What in the plan has never been tried?'],
read=[
 'The Ministry has a continuity plan for consular systems, and it is a good one: a reversion '
 'to paper forms, a printed reference set of the nine standard answers in two languages, a '
 'telephone tree, and a manual register for welfare cases.',
 'It was tested in March, on a Tuesday afternoon in a quiet week, for four hours. The '
 'fallback worked exactly as written. The section answered forty enquiries by hand, logged '
 'them in the manual register, and reported that the plan was sound.',
 'In October Karim Dalati ran the drill again, at nine in the morning in the last week of '
 'August, with the volume the section actually receives in that week. The plan failed in '
 'eleven minutes. The printed reference set exists in two languages and the section receives '
 'enquiries in eleven. The manual register has one page per case and the section was receiving '
 'nine hundred enquiries an hour.',
 'Nothing in the plan was wrong. Every element of it worked. What had never been tested was '
 'the plan at volume, and the volume is the only circumstance in which the plan will ever be '
 'needed, because a system that fails on a quiet Tuesday is an inconvenience and one that '
 'fails in a crisis is the reason the plan exists.',
 'The plan now has a stated capacity: it is designed to hold two hundred enquiries an hour in '
 'two languages, with everything above that acknowledged and queued, and it says so in its '
 'first paragraph. Karim says the sentence that matters is the one admitting what the fallback '
 'cannot do, because a plan with no stated capacity will be assumed to have the capacity of '
 'the system it replaces.'],
c_a=[('What does the continuity plan consist of?', 'paper forms, a printed reference set, a telephone tree and a manual register'),
     ('When was it first tested, and with what result?', 'on a quiet Tuesday afternoon in March, and it worked as written'),
     ('When was it tested again?', 'at nine in the morning in the last week of August'),
     ('How long did it last?', 'eleven minutes'),
     ('Why did it fail?', 'two languages against eleven, and one page per case against nine hundred enquiries an hour'),
     ('What does the plan now state?', 'a capacity of two hundred enquiries an hour in two languages')],
c_b=[('The plan was badly written.', 'F'),
     ('The March test was passed.', 'T'),
     ('The October drill used real August volumes.', 'T'),
     ('The printed set covers eleven languages.', 'F'),
     ('The plan now states its capacity in the first paragraph.', 'T'),
     ('A plan with no stated capacity is assumed to have none.', 'F')],
c_c=[('A reversion to ____________ forms.', 'paper'),
     ('Logged them in the manual ____________.', 'register'),
     ('The plan failed in eleven ____________.', 'minutes'),
     ('The only circumstance in which the plan will ever be ____________.', 'needed'),
     ('Everything above that acknowledged and ____________.', 'queued'),
     ('Assumed to have the capacity of the system it ____________.', 'replaces')],
c_d=[('The plan had never been tested at ( volume / all ).', ['volume', 'all'], 0),
     ('How many languages does the printed set cover?', ['eleven', 'two', 'nine', 'one'], 1),
     ('What was the August hourly volume?', ['forty', 'nine hundred', 'two hundred', 'eleven'], 1),
     ('What is the stated capacity?', ['nine hundred an hour', 'two hundred an hour', 'forty an hour', 'unlimited'], 1),
     ('What does Karim say is the sentence that matters?', ['the capacity', 'the admission of what it cannot do', 'the languages', 'the register'], 1)],
c_e=('Match each cohesive device to what it does.',
     [('it, they', 'reference back to a noun'),
      ('the plan, the arrangement, the fallback', 'a lexical chain'),
      ('do so', 'substitution for a verb phrase'),
      ('the former, the latter', 'picks out one of two'),
      ('such a case', 'reference to a described situation'),
      ('this', 'reference to a whole preceding statement')],
     ['reference back to a noun', 'a lexical chain', 'substitution for a verb phrase',
      'picks out one of two', 'reference to a described situation',
      'reference to a whole preceding statement']),

v_fig_title='WHEN IT IS NOT THERE',
v_fig=[('clock', 'an outage'), ('doc', 'a paper form'), ('book', 'a printed reference set'),
       ('people', 'a telephone tree'), ('key', 'a tested fallback'), ('bulb', 'an untested assumption')],
v_fig_cap='Six words for the arrangements that are only ever used on the worst day.',
vocab=[
 ('an outage', 'a period during which a service is not available'),
 ('an unavailability', 'the state of a service being unusable'),
 ('a fallback procedure', 'the procedure used when the ordinary one cannot be'),
 ('a manual process', 'a process performed by people without the system'),
 ('a paper form', 'a printed form completed by hand'),
 ('a standby arrangement', 'an arrangement held ready and not in use'),
 ('a drill', 'a rehearsal of a procedure under conditions resembling the real ones'),
 ('a tested fallback', 'a fallback that has been exercised rather than written'),
 ('an untested assumption', 'something a plan relies on and has never tried'),
 ('a recovery time', 'the period between a failure and the restoration of service'),
 ('a dependency map', 'a record of what each process relies on'),
 ('a cascading failure', 'a failure that causes others in turn'),
 ('a reversion to paper', 'the return to a paper process when a system is unavailable'),
 ('a printed reference set', 'the standard material kept on paper for use in an outage'),
 ('an offline copy', 'a copy held where no network is required to reach it'),
 ('a telephone tree', 'the ordered list by which people are reached by telephone'),
 ('a service desk', 'the point at which faults are reported and tracked'),
 ('a restoration', 'the return of a service to use'),
 ('a post-incident review', 'the examination held after a failure'),
 ('a continuity plan', 'the written plan for operating without a system')],
v_a=[('A fallback that has been exercised rather than written is a ____________.', 'tested fallback'),
     ('Something a plan relies on and has never tried is an ____________.', 'untested assumption'),
     ('A rehearsal under conditions resembling the real ones is a ____________.', 'drill'),
     ('A record of what each process relies on is a ____________.', 'dependency map'),
     ('The standard material kept on paper for use in an outage is a ____________.', 'printed reference set'),
     ('A failure that causes others in turn is a ____________.', 'cascading failure'),
     ('The period between a failure and restoration is a ____________.', 'recovery time'),
     ('The examination held after a failure is a ____________.', 'post-incident review')],
v_b=[('An outage is a period during which', 'a service is not available.'),
     ('A manual process is a process performed', 'by people without the system.'),
     ('An offline copy is a copy held where', 'no network is required to reach it.'),
     ('A telephone tree is the ordered list by which', 'people are reached by telephone.'),
     ('A continuity plan is the written plan', 'for operating without a system.')],

g_title='Grammar: cohesion — reference, substitution and lexical chains',
g_rule=['Reference points back with it, they, this and such: the fallback … it … such a case.',
        'Substitution replaces a repeated element: the section did so; the first does, the '
        'second does not.',
        'A lexical chain varies the noun without changing the thing: the plan, the '
        'arrangement, the fallback.',
        'In an instruction, a lexical chain must not be used where the reader might take two '
        'words for two things.'],
g_fig=('LOOSE',
       ['The plan is tested. The plan is tested annually. The plan was tested in March.',
        'The fallback works and the arrangement held and the procedure was followed.',
        'It failed in eleven minutes and this was because of this.',
        'The section answered them and the section logged them.'],
       'PRECISE',
       ['The plan is tested annually; it was last tested in March.',
        'The fallback held, and the procedure was followed throughout.',
        'It failed in 11 minutes, because the printed set covers 2 languages and the enquiries '
        'arrive in 11.',
        'The section answered the enquiries and logged them in the manual register.'],
       'a repeated noun, a chain that may be three things, and two empty references',
       'reference, substitution and a chain that is plainly one thing'),
g_fig_cap='In an instruction a synonym is a risk: two words will be read as two things.',
g_a=[('The plan is tested annually; ____________ was last tested in March.', 'it'),
     ('The fallback held, and the procedure was ____________ throughout.', 'followed'),
     ('It failed in 11 minutes, ____________ the printed set covers 2 languages.', 'because'),
     ('The section answered the enquiries and logged ____________ in the register.', 'them'),
     ('In ____________ a case the duty officer is to be informed.', 'such'),
     ('The first language is covered; the second is ____________.', 'not'),
     ('The fallback was tested in March and ____________ again in October.', 'tested'),
     ('____________ is the only circumstance in which the plan will be needed.', 'This'),
     ('Two hundred an hour is the capacity; above ____________ , enquiries are queued.', 'that')],
g_b=[('A lexical chain varies the ( meaning / noun ).', ['meaning', 'noun'], 1),
     ('Substitution replaces', ['a noun with a synonym', 'a repeated element', 'a clause with a noun', 'a verb with a noun'], 1),
     ('In an instruction a synonym risks', ['repetition', 'being read as a second thing', 'formality', 'cohesion'], 1),
     ('In ____ a case the duty officer is to be informed.', ['this', 'such', 'that', 'which'], 1),
     ('Which is an empty reference?', ['It failed in 11 minutes because the set covers 2 languages.', 'This was because of this.', 'The section logged them.', 'Above that, enquiries are queued.'], 1),
     ('Which does the work of a repeated verb phrase?', ['such', 'does so', 'this', 'the latter'], 1)],

d1=dict(title='Eleven minutes',
        fig=(['It passed in March.', 'On a quiet Tuesday.'],
             ['And in August?', 'Eleven minutes.']),
        cap='Karim Dalati and Rana Deeb, after the October drill.',
        lines=[('Rana', 'The plan passed in March. Four hours, forty enquiries, everything '
                        'logged.'),
               ('Karim', 'It passed a test of whether its parts work. They do. The printed set '
                         'is accurate, the forms are usable, the telephone tree reaches '
                         'everybody.'),
               ('Rana', 'And in October?'),
               ('Karim', 'I ran it at nine in the morning in the last week of August, at the '
                         'volume you actually receive. It failed in eleven minutes.'),
               ('Rana', 'On what?'),
               ('Karim', 'Two things, neither of which is a defect in the plan. The printed '
                         'reference set covers two languages. You receive enquiries in eleven. '
                         'And the manual register has one page per case, which is fine at forty '
                         'an hour and absurd at nine hundred.'),
               ('Rana', 'So the plan is written for a quiet Tuesday.'),
               ('Karim', 'The plan is written for the only day on which it was ever tested, and '
                         'the day it will be needed is the opposite of that day, because a '
                         'system that fails on a quiet Tuesday is an inconvenience.'),
               ('Rana', 'Then the plan needs a stated capacity.'),
               ('Karim', 'A stated capacity and an admission. Two hundred an hour in two '
                         'languages, everything above that acknowledged and queued, printed in '
                         'the first paragraph where nobody can miss it.'),
               ('Rana', 'That will read badly to anybody who finds it in a crisis.'),
               ('Karim', 'It will read very badly, and the alternative is that they find out at '
                         'eleven minutes past nine.')],
        a=[('What did the March test establish?', 'that the parts of the plan work'),
           ('When did Karim run the October drill?', 'at nine in the morning in the last week of August, at real volume'),
           ('What two things failed?', 'two languages against eleven, and one page per case at nine hundred an hour'),
           ('Why is the plan written for the wrong day?', 'because it was tested on the only day on which it was ever tested'),
           ('What does Karim want in the first paragraph?', 'the stated capacity and an admission of what the fallback cannot do')],
        b=[('A test of whether its ____________ work.', 'parts'),
           ('Fine at forty an hour and ____________ at nine hundred.', 'absurd'),
           ('A system that fails on a quiet Tuesday is an ____________.', 'inconvenience'),
           ('They find out at eleven minutes ____________ nine.', 'past')]),
d2=dict(title='The drill that can be failed',
        fig=(['Every drill has passed.', 'For nine years.'],
             ['Then they are not drills.', 'They are demonstrations.']),
        cap='Karim and Maya Sarkis.',
        lines=[('Maya', 'Your records show nine years of continuity drills and no failures until '
                        'October.'),
               ('Karim', 'Nine years of drills designed by the people who wrote the plans, run '
                         'at times they chose, at volumes they could handle.'),
               ('Maya', 'Which is not dishonesty.'),
               ('Karim', 'It is not dishonesty at all. If I design a drill I will choose a '
                         'Tuesday, because I want the section to be able to do the exercise, and '
                         'a drill that collapses in eleven minutes feels like a waste of a '
                         'section’s morning.'),
               ('Maya', 'And is it?'),
               ('Karim', 'It is the most useful morning this Ministry has spent on continuity in '
                         'nine years. The point of a drill is to produce a finding, and a drill '
                         'that cannot be failed produces a reassurance.'),
               ('Maya', 'So who should design them?'),
               ('Karim', 'Not the author of the plan, which is my own position and makes me the '
                         'wrong person to run them for consular systems, because I wrote the '
                         'continuity rules.'),
               ('Maya', 'You ran this one.'),
               ('Karim', 'I ran this one and I chose the hardest hour I could find, and I am '
                         'aware that proves nothing about the next one, because I also know '
                         'where the plan is weak and may yet choose an hour that tests the part '
                         'I am confident about.'),
               ('Maya', 'Then the Institute should set them.'),
               ('Karim', 'That is better than my running them and it is not a solution, because '
                         'the Institute will ask me what to test.')],
        a=[('What do nine years of records show?', 'nine years of drills and no failures until October'),
           ('Who designed those drills?', 'the people who wrote the plans, at times and volumes they chose'),
           ('Why is that not dishonesty?', 'because a designer wants the section to be able to do the exercise'),
           ('What does a drill that cannot be failed produce?', 'a reassurance rather than a finding'),
           ('Why is the Institute setting them not a solution?', 'because the Institute will ask Karim what to test')],
        b=[('At volumes they could ____________.', 'handle'),
           ('A waste of a section’s ____________.', 'morning'),
           ('A drill that cannot be ____________ produces a reassurance.', 'failed'),
           ('I also know where the plan is ____________.', 'weak')]),

speak=[('Keep it cohesive',
        ['Student A: read out a short instruction with a noun repeated four times.',
         'Student B: rewrite it using reference and substitution.',
         'Say where a synonym would have been dangerous.']),
       ('The worst hour',
        ['Name the hour at which an outage would hurt your office most.',
         'Say what your fallback would do in it.',
         'Say what has never been tried.']),
       ('Design a drill you could fail',
        ['Propose a drill for your own office.',
         'Say what result would count as a failure.',
         'Your partner asks who chose the hour.'])],

ext_title='A fallback tested in a quiet hour has been tested in the one circumstance in which it will never be needed',
ext_fig=figs.datatable('TWO DRILLS',
                       ['', 'March', 'October'],
                       [['day and hour', 'quiet Tuesday afternoon', 'last week of August, 09:00'],
                        ['enquiries in the period', '40 in 4 hours', '900 in the first hour'],
                        ['languages arriving', '2', '11'],
                        ['printed set covers', '2 languages', '2 languages'],
                        ['manual register', '1 page per case', '1 page per case'],
                        ['result', 'plan sound', 'failed in 11 minutes']]),
ext_fig_cap='Rows four and five are identical in both columns. Rows one to three are the drill.',
ext=[
 'Every ministry has a continuity plan and most of them are good documents: a reversion to '
 'paper, a printed reference set, a telephone tree, a manual register. The elements work. They '
 'have been checked, and the checking was not a formality.',
 'The checking was nevertheless conducted at a time the checkers chose, and the time they chose '
 'was a quiet one, for a reason that has nothing to do with bad faith. A person designing a '
 'drill wants the section to be able to complete the exercise; a drill that collapses after '
 'eleven minutes feels like a wasted morning, and a drill that the section passes feels like a '
 'validated plan.',
 'The consequence is that the plan has been tested in the only circumstance in which it will '
 'never be used. A system that fails on a quiet Tuesday is an inconvenience managed by waiting. '
 'A system that fails at nine in the morning in the busiest week of the year is the reason the '
 'plan exists, and that is the hour at which nobody has ever tried it.',
 'What fails at volume is usually not the procedure but a quantity buried inside it. A printed '
 'reference set in two languages is adequate until the enquiries arrive in eleven. A manual '
 'register with one page per case is sensible at forty an hour and unusable at nine hundred. '
 'Neither is a defect in the plan as written; both are assumptions about scale that nobody '
 'wrote down because the plan was never read against a real hour.',
 'Two practices follow. A continuity plan should state its capacity in its first paragraph — '
 'this plan handles two hundred enquiries an hour in two languages, and above that enquiries '
 'are acknowledged and queued — because a plan with no stated capacity will be assumed to '
 'have the capacity of the system it replaces. And a drill should be designed by somebody who '
 'did not write the plan, at an hour they choose, with a stated condition that would count as '
 'a failure. A drill that cannot be failed produces a reassurance, and a reassurance about a '
 'continuity plan is worse than no drill at all, because it is believed.'],
dp1=('Continuity drills',
     'Information security sections in several foreign ministries moved continuity drills to '
     'peak-volume periods in 2025 and began publishing stated fallback capacities, having found '
     'plans validated only under low load.',
     'Source: reported practice in diplomatic continuity planning, 2025–2026.'),
e_a=[('What is usually sound about a continuity plan?', 'its elements, which have been checked'),
     ('Why is a quiet hour chosen?', 'because a designer wants the section to complete the exercise'),
     ('What circumstance has the plan been tested in?', 'the one in which it will never be used'),
     ('What fails at volume?', 'a quantity buried in the plan, not the procedure'),
     ('What are the two practices?', 'a stated capacity in the first paragraph, and a drill designed by somebody else with a failure condition')],
e_b=[('The elements of the plan did not work.', 'F'),
     ('Choosing a quiet hour is dishonest.', 'F'),
     ('A plan with no stated capacity is assumed to have none.', 'F'),
     ('The printed set was a defect in the plan as written.', 'F'),
     ('A drill should be designed by the plan’s author.', 'F'),
     ('A reassurance about continuity is worse than no drill.', 'T')],

w_model=(
 'Purpose: establish what the consular fallback can do at the volume at which it will be '
 'needed, so that its capacity can be stated. Scope: the consular continuity plan and the '
 'sections that would operate it; the plans of other ministries are out of scope. Inputs: the '
 'plan as written, the enquiry volumes for the busiest week of the previous year, and the '
 'languages in which enquiries were received. Criteria: run the drill at the hour of highest '
 'volume in the year and not at a time chosen by the section; use the real volume and the real '
 'language distribution; state in advance what would count as a failure; do not assist the '
 'section during the drill; stop the drill when the stated failure condition is met and record '
 'the elapsed time. Done: 1 drill report giving the elapsed time to failure or 4 hours without '
 'failure, with the quantity that failed first identified. Fallback: where the real volume '
 'cannot be reproduced, run the drill at the highest volume that can be and say in the report '
 'what proportion of the real volume that was.'),
w_fig=figs.spec_card('THE TASKING FOR A CONTINUITY DRILL',
                     [('Purpose', 'what the fallback can do at the volume that will need it'),
                      ('Scope', 'the consular plan and its operating sections'),
                      ('Inputs', 'the plan, last year’s peak volumes, the language distribution'),
                      ('Criteria', 'the worst hour, real volume, a stated failure condition, no help'),
                      ('Done', '1 report giving time to failure and the quantity that failed'),
                      ('Fallback', 'volume unreproducible: run lower and state the proportion')]),
w_fig_cap='State in advance what would count as a failure: a drill without one cannot produce a finding.',
w_task='Write a drill tasking for a fallback in your own work.',
w_steps=['Say what the drill is to establish.',
         'Name the plan and the sections covered.',
         'Require the worst hour and the real volume.',
         'Require a failure condition stated in advance.',
         'Say what happens where the volume cannot be reproduced.'],
w_bank=['Establish what … can do at … , so that …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Run the drill at … and not at … ; use … ; state in advance … ; do not … ; stop … and record …',
        'Where … cannot be reproduced, run … and say …'],
w_check=['Is the hour chosen by somebody other than the section?',
         'Is the real volume and language mix required?',
         'Is a failure condition stated in advance?',
         'Is the time to failure recorded?'],

t_title='The day the system is unavailable',
t_fig=figs.split('A CONTINUITY PLAN',
                 'Tested',
                 ['that the forms are usable',
                  'that the printed set is accurate',
                  'that the telephone tree reaches people',
                  'on a quiet Tuesday afternoon'],
                 'Untested',
                 ['two languages against eleven',
                  'one page per case at 900 an hour',
                  'the hour it will actually be needed',
                  'anything that would count as a failure']),
t_fig_cap='The left column is real and was never the question.',
t_body=[
 'A continuity plan is usually a good document whose elements have been checked, and the '
 'checking was not a formality: the forms work, the printed set is accurate, the telephone '
 'tree reaches everybody. Say that first, because what follows is not a criticism of the plan.',
 'It was checked at an hour the checkers chose, and they chose a quiet one for an entirely '
 'honest reason: a designer wants the section to complete the exercise, and a drill that '
 'collapses in eleven minutes feels like a wasted morning. So the plan has been validated in '
 'the one circumstance in which it will never be needed, because a failure on a quiet Tuesday '
 'is an inconvenience managed by waiting.',
 'What then fails is a quantity inside the plan rather than the plan itself. Two languages in '
 'the printed set against eleven in the enquiries; one page per case in the manual register '
 'against nine hundred enquiries an hour. So state the capacity in the first paragraph — two '
 'hundred an hour in two languages, everything above acknowledged and queued — because a plan '
 'that states no capacity will be assumed to have the capacity of the system it replaces. And '
 'let somebody who did not write the plan design the drill, at an hour they choose, with a '
 'condition stated in advance that would count as a failure, since a drill that cannot be '
 'failed produces a reassurance, and a reassurance is worse than nothing because it is '
 'believed.'],
t_say=[('State the capacity: ', '200 enquiries an hour in 2 languages; above that, queued.'),
       ('Set the failure condition: ', 'The drill fails if the register is more than 20 cases behind.'),
       ('Choose the hour elsewhere: ', 'The hour is set by Information Security, not by the section.')],
t_bound=('A drill establishes what happened in the hour it was run and nothing about any other '
         'hour. A plan’s elements can be sound while a quantity inside it makes the whole '
         'unusable, and the author of a plan is the wrong person to design its test, because '
         'they know where it is weak and will choose an hour on which something can be '
         'demonstrated.'),
t_a=[('200 enquiries an hour in 2 languages; above that, ____________.', 'queued'),
     ('The drill fails if the register is more than 20 cases ____________.', 'behind'),
     ('The hour is set by Information Security, not by the ____________.', 'section'),
     ('A failure on a quiet Tuesday is an inconvenience managed by ____________.', 'waiting'),
     ('A quantity inside the plan rather than the plan ____________.', 'itself'),
     ('A reassurance is worse than nothing because it is ____________.', 'believed')],
t_b_rubric='Rewrite each for cohesion, without repeating the noun or risking a synonym.',
t_b=[('The plan is tested. The plan is tested annually. The plan was tested in March.', 'the plan is tested annually; it was last tested in March'),
     ('The fallback works and the arrangement held and the procedure was followed.', 'the fallback held, and the procedure was followed throughout'),
     ('It failed in eleven minutes and this was because of this.', 'it failed in eleven minutes, because the printed set covers two languages and the enquiries arrive in eleven'),
     ('The section answered them and the section logged them.', 'the section answered the enquiries and logged them in the manual register')],

case=dict(
 title='The Decision Room · What the first paragraph says',
 brief=[
  'The plan will now state its capacity: two hundred enquiries an hour in two languages, with '
  'everything above that acknowledged and queued.',
  'Rana Deeb points out that in the week it would be needed the section receives nine hundred '
  'an hour in eleven languages, so the stated capacity is a statement that the plan covers '
  'about a fifth of the need.',
  'Karim wants the sentence in the first paragraph. Yara Ibrahim says a continuity plan stating '
  'that it covers a fifth of the need will be read by somebody outside the Ministry sooner or '
  'later. Hana asks what the alternative sentence would be.'],
 exhibit=figs.datatable('THE GAP',
                        ['', 'Need in the peak week', 'Fallback capacity'],
                        [['enquiries an hour', '~900', '200'],
                         ['languages', '11', '2'],
                         ['welfare cases a day', '~55', '~15'],
                         ['acknowledgement within', '2 minutes', 'not possible'],
                         ['proportion of need covered', '—', 'about a fifth'],
                         ['cost of raising capacity to 900', 'stated', 'not approved']]),
 exhibit_cap='A fifth of the need, and the cost of the other four fifths has been stated and '
             'not approved.',
 exhibit_note='Raising the printed set to 11 languages costs little; raising the manual '
              'register to 900 an hour requires staff the Ministry does not have.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Put it in the first paragraph. A duty officer reading the plan at nine in the '
          'morning in August needs to know in the first ten seconds that it will not hold.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'A document saying the Ministry can cover a fifth of its consular need in a crisis '
          'will be quoted. I am not arguing for concealment; I am saying the sentence will be '
          'read by people who have no interest in the arithmetic.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then propose the alternative sentence, because the only alternative I can construct '
          'is silence, and silence is what produced eleven minutes in October.')],
 steps=[('Find it', 'What proportion of the need does the fallback cover?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Yara expect the sentence to be quoted?'),
        ('Weigh it', 'A duty officer at nine in the morning against a reader with no interest in arithmetic.'),
        ('Decide', 'What does the first paragraph say?')],
 analysis=[('Find it. What is the hourly gap?', 'two hundred against about nine hundred'),
           ('Compare it. What is Yara not arguing for?', 'concealment'),
           ('Infer it. What is Hana’s challenge?', 'that the only alternative she can construct is silence'),
           ('Weigh it. Which part of the gap is cheap to close?', 'the printed set in eleven languages'),
           ('Decide. What would you do?', 'answers vary; stating the capacity and the cost of closing it answers both concerns')],
 decision='Write the first paragraph of the plan.',
 decision_steps=['Say what capacity is stated.',
                 'Say what is said about what happens above it.',
                 'Say whether the cost of closing the gap is stated.',
                 'Say who is told, and how often.'],
 bank=['This plan handles …',
       'Above that, enquiries are …',
       'The cost of raising capacity to … is …',
       'The Ministry is informed …',
       'This is reviewed …'],
 outcome='The first paragraph states the capacity, states that above it enquiries are '
         'acknowledged and queued, and states the cost of raising capacity to the peak need, '
         'which Karim had not originally proposed and which turned out to be the sentence that '
         'mattered. The printed set was extended to eleven languages within a month, for almost '
         'nothing. The manual register remains at its old capacity and the cost of changing it '
         'is now in a document that goes to the Ministry annually. Yara, who had feared the '
         'quotation, says the cost sentence changed the document from an admission into a '
         'request and that she would have opposed the version without it.',
 outcome_q=[('What three things does the first paragraph now state?', 'the capacity, what happens above it, and the cost of raising it'),
            ('What does Yara say the cost sentence did?', 'changed the document from an admission into a request')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Test the continuity plan',
 task=['This is the drill instruction used for nine years, under which every drill was passed.',
       'It produced nine annual reassurances and one failure in eleven minutes when somebody '
       'changed the hour.'],
 draft=['Test the continuity plan annually.',
        'Arrange a convenient time with the section.',
        'Exercise the main elements of the plan.',
        'Confirm that the procedures work.',
        'Report the outcome.',
        'Note any difficulties.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one chooses the hour the plan will never be needed in.',
 asked=['The hour of highest volume, set externally',
        'A failure condition stated in advance',
        'The real volume and language distribution'],
 back=['9 annual drills, all passed',
       'Quiet afternoons chosen by agreement',
       'No stated condition that would count as a failure'],
 gap='"A convenient time with the section" selects the wrong hour by construction, "the main '
     'elements" tests parts and not the whole, "confirm that the procedures work" names the '
     'desired result in the instruction, and "any difficulties" is not a failure condition.',
 back_cap='Nine years of validated plans and a fallback that lasted eleven minutes.',
 back_note='Line four is the worst of them. An instruction to confirm something will produce a '
           'confirmation, and the drill becomes a demonstration.',
 diagnosis=[('[1] "test the plan annually" — at which hour, and chosen by whom?', 'unscoped set'),
            ('[2] "a convenient time with the section" — and the hour it would be needed?', 'missing condition'),
            ('[3] "the main elements" — which, and the whole plan at once?', 'unscoped set'),
            ('[4] "confirm that the procedures work" — confirm, or establish whether?', 'undefined done'),
            ('[5] "report the outcome" — pass or fail against what condition?', 'undefined done'),
            ('[6] "note any difficulties" — and if the plan collapses?', 'missing condition')],
 rewrite='Rewrite the instruction so that the drill can be failed and is run at the worst hour.',
 scaffold=['What the drill is to establish',
           'The plan and sections covered, and what is excluded',
           'The plan, the peak volumes and the language distribution',
           'The worst hour set externally, real volume, a failure condition, no assistance',
           'The report, the time to failure and the quantity that failed',
           'What to do where the volume cannot be reproduced'],
 bank=['Establish what … can do at … , so that …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Run the drill at … and not at … ; use … ; state in advance … ; do not … ; stop …',
       'Return 1 report giving … , with … identified',
       'Where … , run … and say …'],
 check=['Is the hour set by somebody other than the section?',
        'Is a failure condition stated before the drill?',
        'Is the real language mix used?',
        'Is the word confirm replaced?'],
 model=['Establish what the consular fallback can do at the volume at which it will be needed, so that its capacity can be stated',
        'The consular continuity plan and the sections that would operate it; the plans of other ministries are out of scope',
        'The plan as written, the enquiry volumes for the busiest week of the previous year, and the languages in which enquiries were received',
        'Run the drill at the hour of highest volume in the year and not at a time chosen by the section; use the real volume and the real language distribution; state in advance what would count as a failure; do not assist the section during the drill; stop the drill when the stated failure condition is met and record the elapsed time',
        '1 drill report giving the elapsed time to failure or 4 hours without failure, with the quantity that failed first identified',
        'Where the real volume cannot be reproduced, run the drill at the highest volume that can be and say in the report what proportion of the real volume that was'],
 cost='9 years of continuity drills, all passed, protecting a fallback that held for 11 minutes '
      'at the volume it exists for.'),

rev_fig=figs.split('COHESION',
                   'Clumsy',
                   ['The plan. The plan. The plan.',
                    'The fallback, the arrangement, the procedure.',
                    'This was because of this.',
                    'The section answered them and the section logged them.'],
                   'Cohesive',
                   ['The plan … it … last tested in March.',
                    'The fallback held, and the procedure was followed.',
                    'It failed because the set covers 2 languages.',
                    'The section answered the enquiries and logged them.']),
rev_fig_cap='Reference, substitution and a lexical chain that is plainly one thing.',
rev=dict(
 read=[('The March test established', ['that the plan was sound', 'that its parts work', 'the capacity', 'the language mix'], 1),
       ('What failed at volume was', ['the procedure', 'a quantity inside the plan', 'the staff', 'the telephone tree'], 1),
       ('A plan with no stated capacity is assumed to have', ['none', 'the capacity of the system it replaces', 'two hundred', 'unlimited capacity'], 1),
       ('In the Decision Room, what else does the first paragraph state?', ['nothing', 'the cost of raising capacity', 'the languages', 'the author'], 1)],
 listen_text='A person designing a drill wants the section to be able to complete the '
             'exercise; a drill that collapses after eleven minutes feels like a wasted '
             'morning, and a drill that the section passes feels like a validated plan.',
 listen=[('Wants the section to be able to ____________ the exercise.', 'complete'),
         ('Collapses after eleven ____________.', 'minutes'),
         ('Feels like a ____________ morning.', 'wasted'),
         ('Feels like a ____________ plan.', 'validated')],
 speak=['Say what your fallback would do at your busiest hour.',
        'Rewrite a repetitive instruction using reference and substitution.'],
 write='Write one failure condition for a drill in your own office.',
 vocab=[('A fallback that has been exercised rather than written is a ____________.', 'tested fallback'),
        ('Something a plan relies on and has never tried is an ____________.', 'untested assumption'),
        ('A record of what each process relies on is a ____________.', 'dependency map'),
        ('The standard material kept on paper for use in an outage is a ____________.', 'printed reference set'),
        ('The examination held after a failure is a ____________.', 'post-incident review')],
 gram=[('The plan is tested annually; ____________ was last tested in March.', 'it'),
       ('The section answered the enquiries and logged ____________ in the register.', 'them'),
       ('In ____________ a case the duty officer is to be informed.', 'such'),
       ('The first language is covered; the second is ____________.', 'not'),
       ('Two hundred an hour is the capacity; above ____________ , enquiries are queued.', 'that')]),

found=['Find out when your continuity plan was last tested and at what hour.',
       'Find one quantity inside it that assumes a quiet day.',
       'Write the failure condition for the next drill.',
       'Ask who chose the hour.'],
end_line='A drill that cannot be failed produces a reassurance, and a reassurance is believed.',
end_next='Next: Nuance and the Things That Need a Person',
)
