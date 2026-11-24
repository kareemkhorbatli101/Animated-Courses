# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='Four Officers, Forty Officers’ Reach',
gram='conditionals of advice and warning',
ai='surge capacity: four officers with the reach of forty',
strap='CEFR C1 · Grammar: conditionals of advice and warning · AI: surge capacity',
cando=['give advice and warning in conditional form without hedging the warning away',
       'use should, were to and unless in a warning that can be acted on',
       'say what surge capacity multiplies and what it does not',
       'identify the quality floor that must hold at any volume',
       'write a tasking that states what degrades first when load rises'],
hero=('THE SECTION DID NOT FALL OVER',
      ['Twelve thousand four hundred enquiries in August, answered in eleven minutes.',
       'The four officers on the welfare list each carried ninety cases at once.'],
      [(730, 'teal', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='Consular Affairs in the fourth week of August, which used to be unsurvivable.',

warm=['What happens to the quality of your work when the volume doubles?',
      'Which part of your work cannot be done faster, however much help you have?',
      'What would you want to fail first if you were overwhelmed?'],
read=[
 'In August the section received twelve thousand four hundred enquiries, half again its normal '
 'volume, and the median first response was eleven minutes. Two years earlier the same volume '
 'had produced a four-week queue, nine hundred complaints and two officers on sick leave.',
 'What multiplied was the handling of the routine. Nine categories, answered directly, in '
 'eleven languages: the triage step absorbed the entire increase without any change in '
 'staffing, which is what surge capacity means in practice.',
 'What did not multiply was the welfare caseload. The whole-text routing rule sent about '
 'eleven hundred cases to duty officers, of which about nine hundred were real, and those cases '
 'require a person to read a file, telephone a family, write to a prison and wait. Four '
 'officers carried them, at about ninety open cases each.',
 'Rana Deeb had told the Ministry in June that the section could take a peak of fifteen '
 'thousand without additional staff. She based this on the triage figures, which were correct, '
 'and she was wrong, because the figure that constrains the section is not the number of '
 'enquiries but the number of welfare cases, and that number rises with the volume while the '
 'capacity to handle it does not.',
 'The section now reports two numbers rather than one: enquiries received, and open welfare '
 'cases per officer. The second has a stated ceiling of sixty, above which the section informs '
 'the Ministry that it is operating in a degraded mode and names what has stopped: in August '
 'what stopped was the second welfare visit in long detentions, which nobody outside the '
 'section noticed and which Rana regards as the most serious thing that happened all year.'],
c_a=[('How many enquiries arrived in August, and how fast were they answered?', 'twelve thousand four hundred, with a median first response of eleven minutes'),
     ('What had the same volume produced two years earlier?', 'a four-week queue, nine hundred complaints and two officers on sick leave'),
     ('What multiplied?', 'the handling of the nine routine categories, in eleven languages'),
     ('What did not multiply?', 'the welfare caseload, which requires a person to read, telephone, write and wait'),
     ('What had Rana told the Ministry in June?', 'that the section could take a peak of fifteen thousand without additional staff'),
     ('What two numbers does the section now report?', 'enquiries received, and open welfare cases per officer')],
c_b=[('The triage step absorbed the increase without extra staff.', 'T'),
     ('About nine hundred of the routed cases were real.', 'T'),
     ('Four officers carried about ninety open cases each.', 'T'),
     ('Rana’s June figures were incorrect.', 'F'),
     ('The ceiling on open welfare cases is sixty.', 'T'),
     ('What stopped in August was noticed outside the section.', 'F')],
c_c=[('Half again its normal ____________.', 'volume'),
     ('The triage step ____________ the entire increase.', 'absorbed'),
     ('Telephone a family, write to a prison and ____________.', 'wait'),
     ('The figure that ____________ the section.', 'constrains'),
     ('Operating in a ____________ mode.', 'degraded'),
     ('The second welfare visit in long ____________.', 'detentions')],
c_d=[('The constraint is the number of ( enquiries / welfare cases ).', ['enquiries', 'welfare cases'], 1),
     ('How many cases were routed to duty officers?', ['900', '1,100', '12,400', '60'], 1),
     ('How many open cases did each officer carry?', ['sixty', 'about ninety', 'eleven', 'four'], 1),
     ('What is the stated ceiling?', ['ninety', 'sixty', 'fifteen thousand', 'none'], 1),
     ('What stopped in August?', ['the triage', 'the second welfare visit in long detentions', 'the hotline', 'the replies'], 1)],
c_e=('Match each conditional to what it does.',
     [('If you raise the ceiling, cases will be missed.', 'warns of a consequence'),
      ('If you were to raise the ceiling, cases would be missed.', 'warns more tentatively'),
      ('Should the ceiling be raised, the section will report it.', 'states what follows formally'),
      ('Unless the ceiling holds, the second visit stops.', 'names the condition for a loss'),
      ('You should not raise the ceiling.', 'advises directly'),
      ('I would not raise the ceiling.', 'advises by example')],
     ['warns of a consequence', 'warns more tentatively', 'states what follows formally',
      'names the condition for a loss', 'advises directly', 'advises by example']),

v_fig_title='CAPACITY',
v_fig=[('chart', 'a peak load'), ('clock', 'a throughput'), ('pin', 'a bottleneck'),
       ('shield', 'a quality floor'), ('people', 'a supervision ratio'), ('bulb', 'a degraded mode')],
v_fig_cap='Six words for what happens to work when there is more of it than there are people.',
vocab=[
 ('a surge capacity', 'the ability to handle a volume above the normal level'),
 ('a baseline staffing', 'the number of officers available in ordinary conditions'),
 ('a peak load', 'the highest volume a service must handle'),
 ('a throughput', 'the quantity of work completed in a period'),
 ('a bottleneck', 'the step that limits the whole process'),
 ('a quality floor', 'the standard below which work may not fall at any volume'),
 ('a spot audit', 'an unannounced check of a sample of work'),
 ('a sampling rate', 'the proportion of cases checked'),
 ('a reviewer', 'the person who checks another’s work'),
 ('a second pair of eyes', 'a second person looking at the same case'),
 ('a workload per officer', 'the number of open cases one officer carries'),
 ('an exhaustion risk', 'the danger that sustained overload degrades judgement'),
 ('a sustainable pace', 'a rate of work that can be maintained without loss'),
 ('a temporary redeployment', 'the moving of officers from one duty to another for a period'),
 ('a trained reserve', 'officers trained in advance to be called on'),
 ('an induction', 'the training given before somebody takes up a duty'),
 ('a supervision ratio', 'the number of officers one supervisor can properly oversee'),
 ('a rate of error under load', 'how often work goes wrong when volume is high'),
 ('a capacity ceiling', 'the stated maximum beyond which a service declares a change'),
 ('a degraded mode', 'an announced reduced level of service with what has stopped named')],
v_a=[('The standard below which work may not fall at any volume is a ____________.', 'quality floor'),
     ('An announced reduced level of service with what has stopped named is a ____________.', 'degraded mode'),
     ('The step that limits the whole process is a ____________.', 'bottleneck'),
     ('The number of officers one supervisor can properly oversee is a ____________.', 'supervision ratio'),
     ('The danger that sustained overload degrades judgement is an ____________.', 'exhaustion risk'),
     ('Officers trained in advance to be called on are a ____________.', 'trained reserve'),
     ('The stated maximum beyond which a service declares a change is a ____________.', 'capacity ceiling'),
     ('An unannounced check of a sample of work is a ____________.', 'spot audit')],
v_b=[('A surge capacity is the ability to handle', 'a volume above the normal level.'),
     ('A throughput is the quantity of work', 'completed in a period.'),
     ('A sustainable pace is a rate of work', 'that can be maintained without loss.'),
     ('A temporary redeployment is the moving of officers', 'from one duty to another for a period.'),
     ('A rate of error under load is how often work', 'goes wrong when volume is high.')],

g_title='Grammar: conditionals of advice and warning',
g_rule=['If plus present, will plus verb warns of a likely consequence.',
        'If X were to happen, Y would follow is more tentative and is not weaker in substance.',
        'Should X happen states the condition formally, as in official writing.',
        'Unless names the condition for a loss: unless the ceiling holds, the second visit '
        'stops.'],
g_fig=('LOOSE',
       ['Raising the ceiling might possibly cause problems.',
        'There could perhaps be some risk to quality.',
        'It would probably be better not to.',
        'Care should be taken.'],
       'PRECISE',
       ['If the ceiling is raised to 90, the second welfare visit in long detentions will '
        'stop.',
        'Were the sampling rate reduced, errors under load would not be found for 6 weeks.',
        'Should the volume exceed 15,000, the section will declare a degraded mode.',
        'Unless 2 officers are added by 1 July, 4 officers will carry 90 cases each in '
        'August.'],
       'four warnings from which the consequence has been removed',
       'four warnings in which the condition and the consequence are both stated'),
g_fig_cap='A warning with no named consequence is read as a preference, and preferences are '
          'overruled.',
g_a=[('If the ceiling ____________ raised to 90, the second welfare visit will stop.', 'is'),
     ('____________ the sampling rate reduced, errors would not be found for 6 weeks.', 'Were'),
     ('____________ the volume exceed 15,000, the section will declare a degraded mode.', 'Should'),
     ('____________ 2 officers are added by 1 July, 4 officers will carry 90 cases each.', 'Unless'),
     ('If the section ____________ (operate) above the ceiling, it reports the fact.', 'operates'),
     ('I ____________ not raise the ceiling before the peak.', 'would'),
     ('You ____________ not reduce the sampling rate in August.', 'should'),
     ('If we ____________ (have) added two officers in June, August would have held.', 'had'),
     ('Were the peak to ____________ 15,000, the second visit would stop first.', 'exceed')],
g_b=[('A warning needs ( a named consequence / a preference ).', ['a named consequence', 'a preference'], 0),
     ('____ the sampling rate reduced, errors would be missed.', ['If', 'Were', 'Unless', 'Should be'], 1),
     ('____ the volume exceed 15,000, the section will declare …', ['If', 'Should', 'Were', 'Unless'], 1),
     ('Unless names', ['a preference', 'the condition for a loss', 'a consequence', 'an advice'], 1),
     ('Which is a warning that can be acted on?', ['Care should be taken.', 'If the ceiling is raised, the second visit will stop.', 'There could be some risk.', 'It would probably be better not to.'], 1),
     ('Which is advice by example?', ['You should not.', 'I would not raise the ceiling.', 'Care is needed.', 'Should it be raised …'], 1)],

d1=dict(title='Fifteen thousand',
        fig=(['The section can take fifteen thousand.', 'On the triage figures.'],
             ['Which were right.', 'And were the wrong figures.']),
        cap='Rana Deeb and Karim Dalati, in September.',
        lines=[('Karim', 'In June you told the Ministry the section could take a peak of fifteen '
                         'thousand without additional staff.'),
               ('Rana', 'I did, on the triage figures, which were correct. The triage step '
                        'absorbed the August increase without a single extra officer and would '
                        'have absorbed fifteen thousand.'),
               ('Karim', 'And yet.'),
               ('Rana', 'And yet the number that constrains this section is not enquiries. It is '
                        'open welfare cases, and that number rises with the enquiries while the '
                        'capacity to carry them does not rise at all.'),
               ('Karim', 'Because they require a person.'),
               ('Rana', 'They require a person to read a file, telephone a family, write to a '
                        'prison and then wait eleven days for an answer. Nothing in that '
                        'sequence can be compressed and the waiting is most of it.'),
               ('Karim', 'How many cases were your officers carrying?'),
               ('Rana', 'About ninety each. The number at which I know the work is done properly '
                        'is sixty, and I have known that for years without ever having written '
                        'it down.'),
               ('Karim', 'What happened at ninety?'),
               ('Rana', 'The second welfare visit in long detentions stopped. Nobody outside the '
                        'section noticed, no complaint was made, and if you ask me what the most '
                        'serious thing that happened in this section this year was, it is that.'),
               ('Karim', 'Your June statement was true and useless.'),
               ('Rana', 'It was true about the thing that had improved and silent about the '
                        'thing that had not, which is the characteristic error of a section '
                        'reporting its own transformation.')],
        a=[('What did Rana tell the Ministry in June?', 'that the section could take fifteen thousand without additional staff'),
           ('Were the triage figures correct?', 'yes'),
           ('What actually constrains the section?', 'open welfare cases per officer'),
           ('What cannot be compressed?', 'reading, telephoning, writing and waiting, and the waiting is most of it'),
           ('What stopped at ninety cases?', 'the second welfare visit in long detentions')],
        b=[('Wait eleven days for an ____________.', 'answer'),
           ('The number at which I know the work is done properly is ____________.', 'sixty'),
           ('No complaint was ____________.', 'made'),
           ('The characteristic error of a section reporting its own ____________.', 'transformation')]),
d2=dict(title='What stops first',
        fig=(['Something stopped in August.', 'And nobody noticed.'],
             ['Which is the problem.', 'Which is the whole problem.']),
        cap='Rana and Maya Sarkis.',
        lines=[('Maya', 'You say the second welfare visit stopped and nobody noticed. How did it '
                        'stop? Was it decided?'),
               ('Rana', 'Nothing was decided. Four officers with ninety cases each did the things '
                        'that had deadlines and the things where somebody was waiting on the '
                        'telephone, and the second visit in a long detention has neither.'),
               ('Maya', 'So the work that degrades first is the work nobody is chasing.'),
               ('Rana', 'Always, and in this section that happens to be the work that matters '
                        'most, because a detained citizen in the fourth month is exactly the '
                        'person nobody is chasing.'),
               ('Maya', 'Then the section has to name in advance what will stop.'),
               ('Rana', 'That is what the ceiling is for. Above sixty open cases I declare a '
                        'degraded mode and I name what has stopped, in writing, to the Ministry.'),
               ('Maya', 'Will that be welcome?'),
               ('Rana', 'It will not. A section that declares a degraded mode is a section '
                        'admitting it cannot cope, and the first reaction will be that other '
                        'sections manage without declaring anything.'),
               ('Maya', 'They manage by letting something stop quietly.'),
               ('Rana', 'Every one of them, and none of them knows which thing, because nobody '
                        'has ever had to write it down. If I am asked whether I am certain that '
                        'sixty is the right number, the honest answer is that I know ninety is '
                        'too many and that sixty is where I have watched the work hold.'),
               ('Maya', 'A number from experience rather than from measurement.'),
               ('Rana', 'Which I would defend and cannot prove, and I would rather put it in '
                        'writing at sixty than leave it at whatever each officer can bear.')],
        a=[('How did the second visit stop?', 'nothing was decided; it had no deadline and nobody waiting'),
           ('What degrades first?', 'the work nobody is chasing'),
           ('Why does that matter most here?', 'because a detained citizen in the fourth month is who nobody chases'),
           ('What is the ceiling for?', 'declaring a degraded mode and naming what has stopped'),
           ('How was the number sixty arrived at?', 'from experience: ninety is too many and sixty is where the work holds')],
        b=[('The things where somebody was waiting on the ____________.', 'telephone'),
           ('A section admitting it cannot ____________.', 'cope'),
           ('They manage by letting something stop ____________.', 'quietly'),
           ('Which I would defend and cannot ____________.', 'prove')]),

speak=[('Warn with a consequence',
        ['Student A: propose a change that would increase the load on your team.',
         'Student B: warn against it with a named condition and a named consequence.',
         'Do it twice, once with if and once with unless.']),
       ('What stops first',
        ['Name the part of your work that nobody chases.',
         'Say what would happen to it if the volume rose by half.',
         'Say who would notice.']),
       ('The number you know',
        ['Name a workload at which you know your work holds.',
         'Say how you know it.',
         'Your partner asks what you would accept as evidence that it is wrong.'])],

ext_title='Surge capacity multiplies the handling of the routine and leaves the human caseload exactly where it was',
ext_fig=figs.datatable('AUGUST, TWO YEARS APART',
                       ['', 'Two years ago', 'This August'],
                       [['enquiries received', '~12,000', '12,400'],
                        ['median first response', '4 weeks', '11 minutes'],
                        ['complaints', '~900', '260'],
                        ['welfare cases routed', 'not routed', '~1,100'],
                        ['open cases per officer', 'not counted', '~90'],
                        ['second welfare visits made', 'not counted', 'stopped']]),
ext_fig_cap='Three rows transformed, one row created, and the last row is the one that was '
            'never counted at either date.',
ext=[
 'Surge capacity is the clearest institutional gain available here, and the figures are not in '
 'dispute. A section of eleven officers that could not survive a seasonal peak now absorbs it '
 'without additional staff: the routine categories are answered directly, in every language '
 'the enquiries arrive in, at a median of eleven minutes, and the volume can rise by half '
 'without any change in the queue.',
 'The error that follows is a reporting error and it is almost inevitable, because the figures '
 'that improve are the figures a section has always collected. Enquiries received, response '
 'times, complaints: all of these transform, and a section that reports them honestly will '
 'tell its ministry that it can absorb a far higher peak, which is true of everything the '
 'section counts.',
 'What constrains such a section is not the enquiry volume but the human caseload inside it, '
 'and that caseload scales with the volume while the capacity to carry it does not scale at '
 'all. A welfare case requires an officer to read a file, telephone a family, write to a '
 'prison and then wait, and the waiting is most of the elapsed time and all of the '
 'irreducibility. Four officers can carry sixty open cases each properly and ninety '
 'improperly, and nothing in any system changes that number.',
 'What happens at ninety is the part worth attending to. No decision is taken. The officers do '
 'the work with deadlines and the work where somebody is waiting on the telephone, and the '
 'work that has neither simply stops. In a consular section that is the second welfare visit '
 'in a long detention, which is to say the attention paid to the person who has been in a cell '
 'for four months and whose family has stopped telephoning. Nobody complains, because the '
 'people affected are the ones who have already stopped expecting anything.',
 'The practice that answers it is a stated ceiling and a declared degraded mode: above a named '
 'caseload the section informs the ministry that it is operating below its own standard and '
 'names what has stopped. This is unwelcome, and the first response will be that other '
 'sections manage without declaring anything, which is true in the sense that they let '
 'something stop quietly and do not know what it is. A number arrived at from experience and '
 'written down is better than a number nobody has ever stated, even where it cannot be proved.'],
dp1=('Consular surge capacity',
     'Consular services in several foreign ministries absorbed seasonal peaks without '
     'additional staffing in 2025 through automated handling of routine categories, while '
     'introducing stated caseload ceilings for welfare cases and declared reductions in '
     'service above them.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('What is not in dispute?', 'that a section can absorb a seasonal peak without additional staff'),
     ('Why is the reporting error almost inevitable?', 'because the figures that improve are the ones a section has always collected'),
     ('What constrains the section?', 'the human caseload, which scales with volume while capacity does not'),
     ('What happens at ninety cases?', 'no decision is taken, and the work with no deadline and nobody waiting stops'),
     ('What is the practice that answers it?', 'a stated ceiling and a declared degraded mode naming what has stopped')],
e_b=[('The routine handling gains are disputed.', 'F'),
     ('Welfare capacity scales with the volume.', 'F'),
     ('The waiting in a welfare case can be compressed.', 'F'),
     ('A decision is taken when work stops at ninety cases.', 'F'),
     ('Those affected are usually the ones who complain.', 'F'),
     ('A stated ceiling is unwelcome.', 'T')],

w_model=(
 'Purpose: report the section’s capacity so that the Ministry knows what has stopped as well '
 'as what has improved. Scope: the monthly figures for enquiries and for welfare cases; '
 'figures for other sections are out of scope. Inputs: the triage record, the welfare case '
 'list, and the section’s stated ceiling of 60 open cases per officer. Criteria: give '
 'enquiries received and median first response; give open welfare cases per officer against '
 'the ceiling of 60; where the ceiling is exceeded, state that the section is operating in a '
 'degraded mode and name each activity that has stopped; give no capacity estimate based on '
 'enquiry volume alone. Done: 1 report of 1 page carrying both figures, monthly, with any '
 'degraded mode declared in the first line. Fallback: where an activity has stopped without a '
 'decision, record it as stopped and say that no decision was taken.'),
w_fig=figs.spec_card('THE TASKING FOR A CAPACITY REPORT',
                     [('Purpose', 'what has stopped as well as what has improved'),
                      ('Scope', 'enquiries and welfare cases; other sections excluded'),
                      ('Inputs', 'the triage record, the case list, the ceiling of 60'),
                      ('Criteria', 'both figures; degraded mode named; no volume-only estimates'),
                      ('Done', '1 page monthly, degraded mode in the first line'),
                      ('Fallback', 'stopped without a decision: recorded as such')]),
w_fig_cap='Give no capacity estimate based on enquiry volume alone: that is the sentence that cost August.',
w_task='Write a capacity tasking for your own office.',
w_steps=['Say what the report must prevent the organisation from believing.',
         'Name both figures and exclude comparisons with others.',
         'State the ceiling as a number.',
         'Require what has stopped to be named.',
         'Say what happens where something stopped without a decision.'],
w_bank=['Report … so that … knows … as well as …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Give … ; give … against … ; where … is exceeded, state … and name … ; give no …',
        'Where an activity has stopped without … , record … and say …'],
w_check=['Are both figures required?',
         'Is the ceiling a number?',
         'Must stopped activities be named?',
         'Are volume-only capacity estimates forbidden?'],

t_title='Surge capacity and what it does not multiply',
t_fig=figs.split('WHEN THE VOLUME RISES BY HALF',
                 'Scales',
                 ['the 9 routine categories',
                  'replies in 11 languages',
                  'acknowledgements',
                  'the median response time'],
                 'Does not scale',
                 ['reading a file',
                  'telephoning a family',
                  'writing to a prison',
                  'waiting 11 days for an answer']),
t_fig_cap='The left column absorbs an August. The right column is the section.',
t_body=[
 'Take the gain, which is real: a section that could not survive a seasonal peak now absorbs '
 'it with the same eleven officers, answering the routine categories directly in every '
 'language at a median of eleven minutes. The figures are not in dispute.',
 'Then be careful about what they license you to say, because the figures that improved are '
 'the figures a section has always collected. Enquiries, response times and complaints all '
 'transform; the constraint is the human caseload inside the volume, and that scales with the '
 'enquiries while the capacity to carry it does not. Four officers can hold sixty open welfare '
 'cases each properly and ninety improperly, and nothing changes that.',
 'Watch what happens at ninety, because no decision is taken. Officers do the work with '
 'deadlines and the work where somebody is waiting on the telephone, and the work with neither '
 'stops: in a consular section, the second welfare visit in a long detention, which is the '
 'attention paid to the person in a cell in the fourth month whose family has stopped '
 'telephoning. Nobody complains, because the affected have stopped expecting anything. So '
 'state a ceiling, declare a degraded mode above it, and name what has stopped. Expect to be '
 'told that other sections manage without declaring anything; they manage by letting something '
 'stop quietly and not knowing what it is.'],
t_say=[('Report both numbers: ', 'Enquiries received, and open welfare cases per officer.'),
       ('Declare the mode: ', 'Above 60 cases per officer the section declares a degraded mode.'),
       ('Name what stopped: ', 'The second welfare visit in detentions over 90 days has stopped.')],
t_bound=('Assistance multiplies the handling of what is routine and leaves untouched the work '
         'that consists of reading, telephoning, writing and waiting. A section reporting only '
         'the figures it has always collected will overstate its capacity in perfect good '
         'faith, and the activity that fails under load is the one with no deadline and nobody '
         'chasing it, which is why nobody will notice.'),
t_a=[('Enquiries received, and open welfare cases per ____________.', 'officer'),
     ('Above 60 cases per officer the section declares a ____________ mode.', 'degraded'),
     ('The second welfare ____________ in detentions over 90 days has stopped.', 'visit'),
     ('The capacity to carry it does not ____________.', 'scale'),
     ('The work with neither ____________.', 'stops'),
     ('They manage by letting something stop ____________.', 'quietly')],
t_b_rubric='Rewrite each as a warning with a named condition and consequence.',
t_b=[('Raising the ceiling might possibly cause problems.', 'if the ceiling is raised to 90, the second welfare visit in long detentions will stop'),
     ('There could perhaps be some risk to quality.', 'were the sampling rate reduced, errors under load would not be found for six weeks'),
     ('It would probably be better not to.', 'should the volume exceed 15,000, the section will declare a degraded mode'),
     ('Care should be taken.', 'unless two officers are added by 1 July, four officers will carry ninety cases each in August')],

case=dict(
 title='The Decision Room · Sixty, and who says so',
 brief=[
  'The ceiling of sixty open welfare cases per officer is Rana’s figure, from experience. She '
  'cannot prove it.',
  'The Ministry has asked for the basis. If the figure were ninety, no degraded mode would have '
  'been declared in August and nothing would have been reported.',
  'Rana proposes keeping sixty and saying plainly that it is a judgement. Hana Mourad wants it '
  'measured. Karim Dalati points out that measuring it means running the section above the '
  'ceiling on purpose.'],
 exhibit=figs.datatable('WHAT IS KNOWN ABOUT THE NUMBER',
                        ['', 'Finding', 'Basis'],
                        [['work holds at 60', 'yes, in Rana’s judgement', 'experience'],
                         ['work degrades at 90', 'yes, observed in August', 'the stopped visits'],
                         ['the point between', 'not known', '—'],
                         ['errors under load', 'not sampled in August', 'no capacity to sample'],
                         ['comparable figures elsewhere', 'none published', '—'],
                         ['cost of 2 more officers', 'stated', 'establishment figures']]),
 exhibit_cap='Two points are known and everything between them is judgement.',
 exhibit_note='Sampling of case quality was itself one of the activities that stopped in '
              'August.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Keep sixty and say it is a judgement from experience. A stated judgement can be '
          'argued with. An unstated one governs the section anyway.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Measure it. A figure that cannot be defended will be moved by whoever next needs it '
          'moved, and the argument will be won by the person with no number at all.'),
         ('Karim Dalati', 'Information Security and Records',
          'Measuring it means deliberately running at 70, 80 and 90 and sampling the quality, '
          'which means deliberately degrading the service to people in cells in order to '
          'establish where it degrades.')],
 steps=[('Find it', 'What is known about the number?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why is measurement uncomfortable here?'),
        ('Weigh it', 'A defensible figure against the cost of establishing it.'),
        ('Decide', 'What is the ceiling, and on what basis?')],
 analysis=[('Find it. What two points are known?', 'that the work holds at sixty and degrades at ninety'),
           ('Compare it. What does Hana warn?', 'that an undefended figure will be moved by whoever needs it moved'),
           ('Infer it. What would measurement require?', 'running the section above the ceiling on purpose and sampling quality'),
           ('Weigh it. What stopped the sampling in August?', 'the load itself; sampling was one of the activities that stopped'),
           ('Decide. What would you do?', 'answers vary; sampling at the existing level and recording the judgement is the only option that harms nobody')],
 decision='Write the basis of the ceiling.',
 decision_steps=['Say what the ceiling is.',
                 'Say what its basis is, in words.',
                 'Say what evidence would change it.',
                 'Say what is sampled, and at what load.'],
 bank=['The ceiling is …',
       'Its basis is …',
       'It would be changed by …',
       'Case quality is sampled at …',
       'This is reviewed …'],
 outcome='The ceiling stayed at sixty, described in the standing instruction as a judgement '
         'from the Head of Section’s experience, with a note that it has not been measured and '
         'that measuring it would require deliberate degradation. Sampling of case quality was '
         'restored at ordinary load, at twenty cases a month, and after a year the sampling at '
         'loads between fifty and sixty-five showed the first measurable decline at '
         'fifty-eight, which is lower than Rana’s figure. Hana, who had wanted the number '
         'measured, says the sampling answered her objection and that Karim had been right that '
         'the measurement she asked for could not be taken; what could be taken was a different '
         'measurement at a load nobody had to be harmed to produce.',
 outcome_q=[('What was the ceiling’s stated basis?', 'a judgement from experience, with a note that it has not been measured'),
            ('What did a year of sampling show?', 'the first measurable decline at fifty-eight cases, below the stated ceiling')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Report the section’s capacity',
 task=['This is the reporting instruction under which Rana told the Ministry in June that the '
       'section could absorb fifteen thousand enquiries.',
       'Every figure in that report was accurate.'],
 draft=['Report the section’s performance and capacity.',
        'Give the volumes and the response times.',
        'Say what the section could absorb.',
        'Note any pressures.',
        'Keep it to a page.',
        'Monthly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third asks for a capacity estimate from the only figures that '
           'improved.',
 asked=['Both figures: enquiries and cases per officer',
        'A stated ceiling with a declared degraded mode',
        'Stopped activities named'],
 back=['Accurate volumes and response times',
       'A capacity estimate of 15,000',
       'No mention of welfare caseload at all'],
 gap='"Performance and capacity" invites the available figures, "what the section could '
     'absorb" asks for an estimate from them, "any pressures" has no test and no ceiling, and '
     'nothing requires a stopped activity to be named.',
 back_cap='A report in which every number was right and the conclusion was wrong by a quarter '
          'of the work.',
 back_note='Line three is the failure. A capacity estimate drawn from the figures that scale '
           'will always overstate the capacity of the part that does not.',
 diagnosis=[('[1] "performance and capacity" — measured by which figures?', 'hidden assumption'),
            ('[2] "the volumes and the response times" — assumes these describe the work', 'hidden assumption'),
            ('[3] "what the section could absorb" — absorb to what standard?', 'missing condition'),
            ('[4] "note any pressures" — how many, and above what level?', 'unbounded quantity'),
            ('[5] "keep it to a page" — and if an activity has stopped?', 'missing condition'),
            ('[6] "monthly" — how many figures, against what comparator?', 'unbounded quantity')],
 rewrite='Rewrite the instruction so that the constraint is reported as well as the gain.',
 scaffold=['What the report must prevent the Ministry from believing',
           'The figures covered and the comparisons excluded',
           'The triage record, the case list and the ceiling',
           'Both figures, the ceiling, a declared degraded mode, named stoppages, no volume-only estimates',
           'The length, the frequency and the first line',
           'What to do where an activity stopped without a decision'],
 bank=['Report … so that … knows …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Give … ; give … against … ; where … , state … and name … ; give no …',
       'Return 1 report of … , … , with … in the first line',
       'Where an activity has stopped … , record …'],
 check=['Is the welfare figure required?',
        'Is the ceiling stated as a number?',
        'Is a volume-only capacity estimate forbidden?',
        'Must a stoppage be named in the first line?'],
 model=['Report the section’s capacity so that the Ministry knows what has stopped as well as what has improved',
        'The monthly figures for enquiries and for welfare cases; figures for other sections are out of scope',
        'The triage record, the welfare case list, and the section’s stated ceiling of 60 open cases per officer',
        'Give enquiries received and median first response; give open welfare cases per officer against the ceiling of 60; where the ceiling is exceeded, state that the section is operating in a degraded mode and name each activity that has stopped; give no capacity estimate based on enquiry volume alone',
        '1 report of 1 page carrying both figures, monthly, with any degraded mode declared in the first line',
        'Where an activity has stopped without a decision, record it as stopped and say that no decision was taken'],
 cost='1 statement to the Ministry that the section could absorb 15,000 enquiries, true of '
      'everything the section counted, and 4 weeks in which the second welfare visit in long '
      'detentions stopped without a decision.'),

rev_fig=figs.split('WARNINGS',
                   'No consequence',
                   ['Raising it might cause problems.',
                    'There could be some risk.',
                    'It would be better not to.',
                    'Care should be taken.'],
                   'Condition and consequence',
                   ['If the ceiling is raised to 90, the second visit stops.',
                    'Were sampling reduced, errors would be missed 6 weeks.',
                    'Should volume exceed 15,000, a degraded mode is declared.',
                    'Unless 2 officers are added, 4 carry 90 each.']),
rev_fig_cap='If plus will; were to plus would; should plus inversion; unless for a loss.',
rev=dict(
 read=[('What does surge capacity multiply?', ['the welfare caseload', 'the handling of the routine', 'the waiting', 'the staff'], 1),
       ('What constrains the section?', ['enquiries', 'open welfare cases per officer', 'languages', 'complaints'], 1),
       ('What stops first under load?', ['the routine replies', 'the work nobody is chasing', 'the hotline', 'the reporting'], 1),
       ('In the Decision Room, what did a year of sampling show?', ['sixty was right', 'decline began at fifty-eight', 'ninety was safe', 'nothing'], 1)],
 listen_text='The officers do the work with deadlines and the work where somebody is waiting '
             'on the telephone, and the work that has neither simply stops. Nobody complains, '
             'because the people affected are the ones who have already stopped expecting '
             'anything.',
 listen=[('The work with ____________.', 'deadlines'),
         ('Somebody waiting on the ____________.', 'telephone'),
         ('The work that has neither simply ____________.', 'stops'),
         ('Already stopped ____________ anything.', 'expecting')],
 speak=['Warn against a change with a named condition and consequence.',
        'Name the work in your office that would stop first under load.'],
 write='Write one line declaring a degraded mode and naming what has stopped.',
 vocab=[('The standard below which work may not fall at any volume is a ____________.', 'quality floor'),
        ('An announced reduced level of service with what has stopped named is a ____________.', 'degraded mode'),
        ('The step that limits the whole process is a ____________.', 'bottleneck'),
        ('The number of officers one supervisor can properly oversee is a ____________.', 'supervision ratio'),
        ('The stated maximum beyond which a service declares a change is a ____________.', 'capacity ceiling')],
 gram=[('If the ceiling ____________ raised to 90, the second welfare visit will stop.', 'is'),
       ('____________ the sampling rate reduced, errors would not be found for 6 weeks.', 'Were'),
       ('____________ the volume exceed 15,000, the section will declare a degraded mode.', 'Should'),
       ('____________ 2 officers are added by 1 July, 4 officers will carry 90 cases each.', 'Unless'),
       ('You ____________ not reduce the sampling rate in August.', 'should')]),

found=['Count the open cases each person in your office is carrying.',
       'Name the load at which you know the work holds.',
       'Say what would stop first if the volume rose by half.',
       'Write one warning with a named condition and consequence.'],
end_line='The work that fails under load is the work nobody is chasing.',
end_next='Next: What Scale Does to a Mistake',
)
