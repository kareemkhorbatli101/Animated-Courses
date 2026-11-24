# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Did Anybody Read It',
gram='ellipsis, and what must never be left out',
ai='measuring whether anybody actually read it',
strap='CEFR C1 · Grammar: ellipsis · AI: did anybody read it',
cando=['use ellipsis to avoid repetition without losing the subject or the condition',
       'identify the elements of a sentence that may never be elided',
       'distinguish a proxy measure from an outcome measure',
       'say what a readership figure does and does not establish',
       'write a measurement tasking that names the question the figure answers'],
hero=('FOUR HUNDRED THOUSAND READERS',
      ['The campaign reached four hundred thousand people, which is accurate.',
       'Nobody had asked what any of them did differently.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='Press and Public Diplomacy, with a quarterly report that looks like a success.',

warm=['How does your organisation know whether anybody read what it published?',
      'What would you measure if you wanted to know whether it worked?',
      'What is the difference between being read and being acted on?'],
read=[
 'The quarterly report of Press and Public Diplomacy had for years reported reach: the number '
 'of people estimated to have seen each item. The figure for the spring campaign on consular '
 'registration was four hundred and ten thousand, which was correct and had been calculated '
 'carefully.',
 'In June Yara Ibrahim asked a question nobody in the section could answer, which was how many '
 'citizens had registered as a result. The registration figures existed, in Consular Affairs, '
 'and had risen by eleven per cent over the quarter.',
 'Eleven per cent of a small base is about nine hundred people. Four hundred and ten thousand '
 'had seen the campaign. Nothing in either figure establishes a connection between them, and '
 'registration had also risen by nine per cent in the equivalent quarter of the previous year, '
 'when there had been no campaign at all.',
 'Karim Dalati had said in March that reach was a vanity measure and that the section should '
 'stop reporting it. Yara had disagreed, and still does: reach is the only figure available '
 'weekly, it is genuinely informative about whether an item was distributed, and a section '
 'that measures nothing because the available measure is imperfect ends by measuring nothing.',
 'What the section does now is report reach, registrations, and the equivalent quarter of the '
 'previous year, in that order, on the same page, with one sentence saying that the second '
 'cannot be attributed to the first. Karim says the third column is what he had actually been '
 'asking for and that he had asked for the wrong thing in March.'],
c_a=[('What had the quarterly report reported for years?', 'reach: the number estimated to have seen each item'),
     ('What was the spring figure?', 'four hundred and ten thousand'),
     ('What question could nobody answer?', 'how many citizens had registered as a result'),
     ('By how much had registration risen?', 'eleven per cent over the quarter, about nine hundred people'),
     ('What had happened the previous year?', 'registration rose nine per cent with no campaign'),
     ('What does the report now carry?', 'reach, registrations and the equivalent quarter of the previous year')],
c_b=[('The reach figure was incorrectly calculated.', 'F'),
     ('The registration figures existed elsewhere in the Ministry.', 'T'),
     ('Eleven per cent represented about nine hundred people.', 'T'),
     ('Yara agreed that reach should be dropped.', 'F'),
     ('The report now says the second figure cannot be attributed to the first.', 'T'),
     ('Karim maintains his March position unchanged.', 'F')],
c_c=[('The number of people estimated to have ____________ each item.', 'seen'),
     ('How many citizens had registered as a ____________.', 'result'),
     ('Eleven per cent of a small ____________.', 'base'),
     ('A section that measures nothing because the available measure is ____________.', 'imperfect'),
     ('With one sentence saying that the second cannot be ____________ to the first.', 'attributed'),
     ('He had asked for the wrong ____________ in March.', 'thing')],
c_d=[('Reach is ( informative about distribution only / useless ).', ['informative about distribution only', 'useless'], 0),
     ('How many people saw the campaign?', ['900', '410,000', '11,000', '9,000'], 1),
     ('What was the previous year’s rise?', ['eleven per cent', 'nine per cent', 'none', 'two per cent'], 1),
     ('What is in the third column?', ['reach', 'the equivalent quarter of the previous year', 'registrations', 'the campaign cost'], 1),
     ('What does Karim concede?', ['that reach is useful', 'that he had asked for the wrong thing', 'that the campaign worked', 'that the figures are wrong'], 1)],
c_e=('What has been left out? Match each elliptical sentence to the missing element.',
     [('Registration rose; reach did too.', 'the verb phrase'),
      ('We measured reach but not outcomes.', 'the verb and object'),
      ('The campaign ran in March, the survey in June.', 'the verb'),
      ('Some sections measure outcomes; others do not.', 'the verb phrase'),
      ('Reported, but not attributed.', 'the subject and auxiliary'),
      ('If so, the figure stands.', 'the whole condition')],
     ['the verb phrase', 'the verb and object', 'the verb',
      'the subject and auxiliary', 'the whole condition']),

v_fig_title='WHAT CAN BE COUNTED',
v_fig=[('chart', 'a page view'), ('clock', 'a dwell time'), ('pin', 'a scroll depth'),
       ('bulb', 'a vanity metric'), ('key', 'a proxy measure'), ('doc', 'an outcome measure')],
v_fig_cap='Six words for the gap between what is countable and what is wanted.',
vocab=[
 ('a page view', 'one occasion on which a page was opened'),
 ('a unique visitor', 'one person counted once however often they return'),
 ('a dwell time', 'how long a reader remained on a page'),
 ('a bounce', 'a visit that leaves without going further'),
 ('a scroll depth', 'how far down a page a reader went'),
 ('a click-through', 'a visit that followed a link onwards'),
 ('an open rate', 'the proportion of messages that were opened'),
 ('a referral source', 'where a visit came from'),
 ('a repeat visit', 'a return by somebody who has been before'),
 ('a reach figure', 'an estimate of how many people saw an item'),
 ('an engagement figure', 'a count of responses of any kind to an item'),
 ('a vanity metric', 'a figure that rises reliably and means little'),
 ('a proxy measure', 'something countable that stands in for what is wanted'),
 ('an outcome measure', 'a measure of the thing actually wanted'),
 ('a sample survey', 'the questioning of a part in order to learn about the whole'),
 ('a follow-up question', 'a further question put to the same respondent'),
 ('a self-reported understanding', 'what a reader says they understood'),
 ('an action taken', 'something a reader did that can be observed'),
 ('a call avoided', 'an enquiry that was not made because an answer was published'),
 ('a counterfactual', 'what would have happened in the absence of the action')],
v_a=[('A figure that rises reliably and means little is a ____________.', 'vanity metric'),
     ('Something countable that stands in for what is wanted is a ____________.', 'proxy measure'),
     ('What would have happened in the absence of the action is a ____________.', 'counterfactual'),
     ('An enquiry that was not made because an answer was published is a ____________.', 'call avoided'),
     ('How far down a page a reader went is a ____________.', 'scroll depth'),
     ('A visit that leaves without going further is a ____________.', 'bounce'),
     ('One person counted once however often they return is a ____________.', 'unique visitor'),
     ('What a reader says they understood is a ____________.', 'self-reported understanding')],
v_b=[('A page view is one occasion', 'on which a page was opened.'),
     ('A reach figure is an estimate of how many', 'people saw an item.'),
     ('An outcome measure is a measure', 'of the thing actually wanted.'),
     ('A sample survey is the questioning of a part', 'in order to learn about the whole.'),
     ('An action taken is something a reader did', 'that can be observed.')],

g_title='Grammar: ellipsis, and what must never be left out',
g_rule=['Ellipsis omits what the reader can supply: registration rose; reach did too.',
        'An auxiliary may stand for a whole verb phrase: some sections do, others do not.',
        'Never elide a condition, a quantity or a negative, because the reader will supply '
        'the wrong one.',
        'In a figure-bearing sentence, never elide the comparator: rose by 11 per cent on '
        'what?'],
g_fig=('LOOSE',
       ['Registration rose eleven per cent.',
        'Reach was up, and engagement.',
        'Some items work better.',
        'If so, we should continue.'],
       'PRECISE',
       ['Registration rose 11 per cent on the previous quarter, and 9 per cent in the same '
        'quarter last year with no campaign.',
        'Reach rose by a third; engagement rose by 4 per cent.',
        'Items with a named action in the first line produce 3 times the click-through of '
        'those without.',
        'If the rise holds for 2 further quarters, the campaign should continue.'],
       'four sentences in which the comparator or the condition has gone',
       'four sentences in which nothing a reader needs has been elided'),
g_fig_cap='Ellipsis is a courtesy to the reader until it removes the comparator, when it '
          'becomes a claim.',
g_a=[('Registration rose 11 per cent ____________ the previous quarter.', 'on'),
     ('Reach rose by a third; engagement rose ____________ 4 per cent.', 'by'),
     ('Some sections measure outcomes; others ____________ not.', 'do'),
     ('If the rise ____________ for 2 further quarters, the campaign should continue.', 'holds'),
     ('The campaign ran in March, the survey ____________ June.', 'in'),
     ('Reported, but not ____________.', 'attributed'),
     ('Items with a named action produce 3 times the click-through of those ____________.', 'without'),
     ('Registration rose; reach ____________ too.', 'did'),
     ('We measured reach but ____________ outcomes.', 'not')],
g_b=[('Ellipsis omits what the reader ( must guess / can supply ).', ['must guess', 'can supply'], 1),
     ('Which may never be elided?', ['a repeated noun', 'a condition', 'a repeated verb', 'an adverb'], 1),
     ('Rose by 11 per cent requires', ['an adjective', 'a comparator', 'a date only', 'nothing'], 1),
     ('Some sections do, others ____', ['do not', 'not', 'are not', 'no'], 1),
     ('Which is a claim disguised as ellipsis?', ['Reach rose by a third.', 'Registration rose eleven per cent.', 'Engagement rose by 4 per cent.', 'The survey ran in June.'], 1),
     ('What must never be elided in a figure-bearing sentence?', ['the verb', 'the comparator', 'the subject', 'the adverb'], 1)],

d1=dict(title='Nine hundred people',
        fig=(['Four hundred and ten thousand reached.', 'And nine hundred registered.'],
             ['Eleven per cent.', 'Of a small base.']),
        cap='Yara Ibrahim and Rana Deeb, in June.',
        lines=[('Yara', 'The campaign reached four hundred and ten thousand people. How many '
                        'registered?'),
               ('Rana', 'Registrations rose eleven per cent over the quarter. That is about nine '
                        'hundred people.'),
               ('Yara', 'Out of four hundred and ten thousand.'),
               ('Rana', 'Out of the number who saw it, which is not the same as the number who '
                        'needed to register. Most of the four hundred thousand are already '
                        'registered or are not citizens.'),
               ('Yara', 'That is a fair point and it does not rescue the figure, because I '
                        'cannot tell you how many of the nine hundred registered because of the '
                        'campaign.'),
               ('Rana', 'Nor can I. Registrations rose nine per cent in the same quarter last '
                        'year and there was no campaign.'),
               ('Yara', 'So the honest statement is that reach was four hundred and ten '
                        'thousand, registrations rose eleven per cent against nine per cent in '
                        'the equivalent quarter, and no attribution can be made.'),
               ('Rana', 'Which is a less satisfying report than the one you have been sending '
                        'for six years.'),
               ('Yara', 'It is a report that cannot be quoted back at me in two years when '
                        'somebody asks what four hundred and ten thousand bought. That is worth '
                        'more than the satisfaction.'),
               ('Rana', 'Then put my figure next to yours and put last year beside both. I would '
                        'rather my eleven per cent were read with the nine than alone.'),
               ('Yara', 'That is the whole change and it takes a column.')],
        a=[('How many people saw the campaign?', 'four hundred and ten thousand'),
           ('How many registered, and over what period?', 'about nine hundred, over the quarter'),
           ('What is Rana’s fair point?', 'that most of those reached are already registered or are not citizens'),
           ('What was last year’s rise?', 'nine per cent, with no campaign'),
           ('What is the honest statement?', 'reach, the rise, the equivalent quarter, and that no attribution can be made')],
        b=[('Not the same as the number who needed to ____________.', 'register'),
           ('Registrations rose nine per cent in the same quarter ____________ year.', 'last'),
           ('No ____________ can be made.', 'attribution'),
           ('I would rather my eleven per cent were read with the ____________.', 'nine')]),
d2=dict(title='The measure you can take',
        fig=(['Reach is a vanity metric.', 'And it is the one I have weekly.'],
             ['Then it will be managed.', 'And measuring nothing is managed too.']),
        cap='Karim Dalati and Yara, in March and again in June.',
        lines=[('Karim', 'Reach is a vanity metric. It rises when you publish more, it says '
                         'nothing about effect, and the section will end by managing it.'),
               ('Yara', 'All three of those are true. Reach is also the only figure I can take '
                        'every week, and it does tell me one real thing, which is whether an '
                        'item was distributed at all.'),
               ('Karim', 'Which you could learn from a smaller figure.'),
               ('Yara', 'I could, and my objection to dropping it is different. A section that '
                        'stops measuring because its available measure is imperfect does not '
                        'move to a better measure. It stops measuring, and then nobody can say '
                        'anything about anything, which is the condition this section was in '
                        'before 2024.'),
               ('Karim', 'That is a stronger argument than I expected and it does not answer '
                         'the management problem.'),
               ('Yara', 'Nothing answers the management problem except putting a second figure '
                        'beside the first that does not move when you publish more.'),
               ('Karim', 'Registrations.'),
               ('Yara', 'Registrations, and the same quarter of the previous year, so that '
                        'neither figure can be read alone.'),
               ('Karim', 'In March I asked you to stop reporting reach. What I wanted was the '
                         'third column, and I did not know how to ask for it, so I asked you to '
                         'drop the first.'),
               ('Yara', 'Which I would have resisted for three years. The column took a '
                        'fortnight.')],
        a=[('What three things does Karim say about reach?', 'it rises with publication, says nothing about effect, and will be managed'),
           ('What does reach genuinely tell Yara?', 'whether an item was distributed at all'),
           ('What is her objection to dropping it?', 'that a section which stops measuring does not move to a better measure'),
           ('What answers the management problem?', 'a second figure that does not move when more is published'),
           ('What does Karim concede?', 'that he had wanted the third column and asked for the wrong thing')],
        b=[('It rises when you ____________ more.', 'publish'),
           ('It stops ____________, and then nobody can say anything.', 'measuring'),
           ('A second figure that does not ____________ when you publish more.', 'move'),
           ('The column took a ____________.', 'fortnight')]),

speak=[('Never elide the comparator',
        ['Student A: state six changes in figures from your own work.',
         'Student B: ask on what, against what, over what period.',
         'Rewrite each so that nothing a reader needs is missing.']),
       ('Proxy or outcome',
        ['List four things your office counts.',
         'Say for each whether it is a proxy or the thing wanted.',
         'Say what the outcome measure would be.']),
       ('The third column',
        ['Take a figure your office reports.',
         'Say what figure should sit beside it so that it cannot be read alone.',
         'Say who holds that figure.'])],

ext_title='A readership figure establishes distribution; it establishes nothing about effect, and it rises when you publish more',
ext_fig=figs.datatable('THE SPRING CAMPAIGN',
                       ['', 'Figure', 'What it establishes'],
                       [['reach', '410,000', 'the item was distributed'],
                        ['median dwell time', '14 seconds', 'most readers did not finish'],
                        ['registrations, this quarter', '+11 per cent', 'registrations rose'],
                        ['registrations, same quarter 2024', '+9 per cent', 'they rise anyway'],
                        ['registrations attributable', 'not established', '—'],
                        ['calls avoided', 'not measured', '—']]),
ext_fig_cap='Four measurable rows, one that cannot be established, and one nobody has tried.',
ext=[
 'Measurement is now cheap in a way it has never been for a press or public diplomacy section. '
 'A ministry can know how many people opened a page, how long they stayed, how far down they '
 'went, where they came from and what they did next, weekly, for every item it publishes. For '
 'a section that spent decades publishing into silence, this is a genuine change and it should '
 'be used.',
 'What is cheap to measure, however, is distribution, and distribution is not effect. A reach '
 'figure of four hundred and ten thousand is accurate, carefully calculated and answers the '
 'question whether an item was distributed. It does not answer the question anybody actually '
 'has, which is whether a citizen who needed to register did so, and it has one property that '
 'makes it dangerous as a management figure: it rises when the section publishes more, which '
 'is something the section controls.',
 'The outcome figure usually exists and is usually held by somebody else. Registrations are in '
 'consular records; visa applications are in another system; calls to a hotline are counted by '
 'the people who answer them. Nothing technical prevents a section from putting the outcome '
 'figure beside its own, and the obstacle is institutional: the outcome figure belongs to '
 'another section and does not flatter anybody.',
 'Even with both figures, attribution is not available. Registrations rose eleven per cent in '
 'the quarter of the campaign and nine per cent in the equivalent quarter of the previous year '
 'with no campaign at all, and no honest sentence connects the four hundred and ten thousand '
 'to the nine hundred. The practice that works is to report the proxy, the outcome and the '
 'equivalent period of the previous year together, with one sentence stating that no '
 'attribution can be made, so that neither figure can be read alone and nobody is invited to '
 'infer a connection the section cannot defend.',
 'The temptation, when a measure is shown to be imperfect, is to stop reporting it. That '
 'usually produces no better measure and no measure at all, and a section that can say nothing '
 'quantitative about its own work is in a weaker position than one reporting a flawed figure '
 'with its caveat attached. The answer to a vanity metric is a second figure that does not '
 'move when the section publishes more, not the removal of the first.'],
dp1=('Measuring public communication',
     'Foreign ministry communication sections instrumented published material in 2025 and '
     'began reporting outcome figures held by other sections alongside reach, with explicit '
     'statements that attribution was not established.',
     'Source: reported practice in diplomatic public communication, 2025–2026.'),
e_a=[('What can a section now know weekly?', 'opens, dwell time, scroll depth, referral source and what readers did next'),
     ('What is cheap to measure?', 'distribution, which is not effect'),
     ('Why is reach dangerous as a management figure?', 'because it rises when the section publishes more, which the section controls'),
     ('Where does the outcome figure usually sit?', 'with another section, in consular or other records'),
     ('What is the practice that works?', 'reporting proxy, outcome and the equivalent previous period with no attribution claimed')],
e_b=[('Measurement is as expensive as it used to be.', 'F'),
     ('A reach figure answers whether a citizen registered.', 'F'),
     ('The outcome figure usually does not exist.', 'F'),
     ('Attribution can be established from the two figures.', 'F'),
     ('Dropping a flawed measure usually produces a better one.', 'F'),
     ('The answer to a vanity metric is a second figure.', 'T')],

w_model=(
 'Purpose: report what can be established about each published item, so that nobody can read a '
 'reach figure as a statement of effect. Scope: the 14 items published in the quarter; items '
 'published before the instrumentation was installed are out of scope. Inputs: the page '
 'figures, the consular registration figures for the quarter and for the equivalent quarter of '
 'the previous year, and the published item itself. Criteria: give the reach figure with the '
 'method by which it was estimated; give the outcome figure held by the responsible section, '
 'naming that section; give the same outcome figure for the equivalent quarter of the previous '
 'year; state in 1 sentence that no attribution between the 2 can be established; give no '
 'figure as a percentage without its base. Done: 1 report of 2 pages carrying 3 figures per '
 'item, within 10 working days of the quarter end. Fallback: where no outcome figure exists for '
 'an item, say that none exists and name what would have to be counted.'),
w_fig=figs.spec_card('THE TASKING FOR A QUARTERLY REPORT',
                     [('Purpose', 'nobody reads reach as a statement of effect'),
                      ('Scope', 'the 14 instrumented items of the quarter'),
                      ('Inputs', 'page figures, registrations this year and last, the item'),
                      ('Criteria', 'reach with its method; the outcome figure and its owner; last year'),
                      ('Done', '2 pages, 3 figures per item, within 10 working days'),
                      ('Fallback', 'no outcome figure: say so and name what would be counted')]),
w_fig_cap='No percentage without its base: eleven per cent of a small base is nine hundred people.',
w_task='Write a measurement tasking for something your own office publishes.',
w_steps=['Say what the report must prevent a reader from concluding.',
         'Bound the items and the period.',
         'Require the outcome figure and name who holds it.',
         'Require the equivalent previous period.',
         'Say what happens where no outcome figure exists.'],
w_bank=['Report … so that nobody can read … as …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Give … with … ; give … , naming … ; give … for the equivalent … ; state in 1 sentence that … ; give no percentage without …',
        'Where no outcome figure exists … , say … and name …'],
w_check=['Is the outcome figure required with its owner?',
         'Is the equivalent previous period required?',
         'Is a statement of non-attribution required?',
         'Is a percentage without a base forbidden?'],

t_title='Measuring whether anybody read it',
t_fig=figs.split('MEASUREMENT',
                 'Cheap and real',
                 ['how many opened it',
                  'how long they stayed',
                  'how far they scrolled',
                  'where they came from'],
                 'Expensive or impossible',
                 ['whether anybody acted',
                  'whether the item caused it',
                  'what would have happened anyway',
                  'the calls that were never made']),
t_fig_cap='The left column is distribution. The right column is the question.',
t_body=[
 'A section that published into silence for decades can now know, weekly, how many people '
 'opened an item, how long they stayed and how far down they went. Use it: it is a real '
 'change and the figures are honest about what they count.',
 'What they count is distribution, and distribution is not effect. Four hundred and ten '
 'thousand is an accurate answer to whether an item went out, and it has the property that '
 'makes it unsafe as a management figure: it rises when the section publishes more, which the '
 'section controls. The outcome figure almost always exists and is held by another section, '
 'which is an institutional obstacle rather than a technical one.',
 'And even with both, attribution is unavailable. Registrations rose eleven per cent in the '
 'campaign quarter and nine per cent in the same quarter of the previous year with no '
 'campaign. So report three figures together — the proxy, the outcome, and the outcome in the '
 'equivalent earlier period — with one sentence saying that no attribution can be made, and '
 'never give a percentage without its base, because eleven per cent of a small base is nine '
 'hundred people. When somebody objects that the proxy is a vanity figure they will usually be '
 'right and will usually propose dropping it; the answer is a second figure that does not move '
 'when you publish more, because a section that stops measuring does not start measuring '
 'better.'],
t_say=[('Name what it establishes: ', 'Reach establishes that the item was distributed.'),
       ('Add the owner: ', 'Registrations, from Consular Affairs: plus 11 per cent, about 900.'),
       ('Refuse the attribution: ', 'No attribution between these figures can be established.')],
t_bound=('Measurement establishes that a page was opened and for how long. It cannot establish '
         'that anybody acted, cannot establish that the item caused what followed, and cannot '
         'count the enquiry that was never made because an answer had been published. A figure '
         'that the section can raise by publishing more will be raised by publishing more.'),
t_a=[('Reach establishes that the item was ____________.', 'distributed'),
     ('Registrations, from Consular Affairs: plus 11 per cent, about ____________.', '900'),
     ('No ____________ between these figures can be established.', 'attribution'),
     ('It rises when the section publishes ____________.', 'more'),
     ('Eleven per cent of a small base is nine hundred ____________.', 'people'),
     ('A section that stops measuring does not start measuring ____________.', 'better')],
t_b_rubric='Rewrite each so that nothing the reader needs has been elided.',
t_b=[('Registration rose eleven per cent.', 'registration rose 11 per cent on the previous quarter, and 9 per cent in the same quarter last year with no campaign'),
     ('Reach was up, and engagement.', 'reach rose by a third; engagement rose by 4 per cent'),
     ('Some items work better.', 'items with a named action in the first line produce three times the click-through of those without'),
     ('If so, we should continue.', 'if the rise holds for two further quarters, the campaign should continue')],

case=dict(
 title='The Decision Room · The figure the Minister quotes',
 brief=[
  'The Minister has twice quoted the reach figure in public as evidence that the Ministry’s '
  'consular communication is working.',
  'The new report carries the three figures and the non-attribution sentence, and the briefing '
  'note to the Minister’s office carries only reach, because the office asks for one figure.',
  'Yara wants to send all three to the Minister’s office. Rana says the office will take the '
  'largest. Karim says the problem is the request for one figure and that nobody has ever '
  'answered it with a refusal.'],
 exhibit=figs.datatable('WHAT GOES UP, AND WHAT IS QUOTED',
                        ['', 'In the report', 'In the briefing note'],
                        [['reach', 'yes, with method', 'yes'],
                         ['registrations', 'yes, with owner', 'no'],
                         ['equivalent quarter last year', 'yes', 'no'],
                         ['non-attribution sentence', 'yes', 'no'],
                         ['figures quoted publicly by the Minister', '—', 'reach, twice'],
                         ['requests from the office for 1 figure', '—', 'every quarter']]),
 exhibit_cap='The report is honest and the briefing note is the document that is read.',
 exhibit_note='The office’s request is for 1 figure that can be used in a speech.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'Send all three. If the office wants one figure it can choose, and the '
          'non-attribution sentence travels with them.'),
         ('Rana Deeb', 'Consular Affairs',
          'The office will take four hundred and ten thousand, because it is the largest and '
          'the most quotable. Sending three figures is how we tell ourselves we warned '
          'somebody.'),
         ('Karim Dalati', 'Information Security and Records',
          'Then answer the actual request. They want one figure for a speech. Give them one '
          'figure that is defensible: 900 citizens registered this quarter, against 740 in the '
          'same quarter last year. It is smaller and it cannot be taken apart.')],
 steps=[('Find it', 'What has the Minister quoted?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Rana expect the largest figure to be chosen?'),
        ('Weigh it', 'A complete report nobody reads against one defensible figure.'),
        ('Decide', 'What goes in the briefing note?')],
 analysis=[('Find it. How many times has reach been quoted publicly?', 'twice'),
           ('Compare it. What does Karim propose?', 'one defensible figure: 900 registrations against 740 last year'),
           ('Infer it. Why would the office take reach?', 'because it is the largest and the most quotable'),
           ('Weigh it. What does the office actually ask for?', 'one figure that can be used in a speech'),
           ('Decide. What would you do?', 'answers vary; supplying one defensible figure answers the request instead of resisting it')],
 decision='Write what the briefing note contains.',
 decision_steps=['Say which figure goes up, and with what comparator.',
                 'Say whether reach is included at all.',
                 'Say what is said if the Minister asks for a larger figure.',
                 'Say what the report continues to carry.'],
 bank=['The briefing note gives …',
       'Reach is …',
       'If a larger figure is requested, the section …',
       'The quarterly report continues to carry …',
       'This is reviewed …'],
 outcome='The briefing note now gives one figure: the number of citizens who registered, with '
         'the same quarter of the previous year beside it. Reach appears in the report and not '
         'in the note. The Minister used the registration figure in a speech in October and was '
         'asked by a journalist how many people the campaign had reached; the answer, given '
         'from the report, was four hundred and ten thousand with the non-attribution sentence '
         'attached, and the exchange ended there. Yara, who had wanted all three figures sent, '
         'says Karim was right that the request was for one figure and that she had been trying '
         'to win an argument about completeness when the office had asked a practical question.',
 outcome_q=[('What does the briefing note give?', 'one figure, registrations, with the same quarter of the previous year'),
            ('What does Yara conclude?', 'that she had argued about completeness when a practical question had been asked')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Report the quarter',
 task=['This is the reporting instruction the section used for six years.',
       'It produced accurate reach figures that were twice quoted in public as evidence of '
       'effect.'],
 draft=['Report the quarter’s public communication activity.',
        'Give the reach of each item.',
        'Show the trend against last quarter.',
        'Highlight the most successful items.',
        'Keep it to two pages.',
        'Submit it after the quarter ends.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one defines success as the figure the section controls.',
 asked=['An outcome figure with its owner',
        'The equivalent quarter of the previous year',
        'A statement that attribution is not established'],
 back=['Accurate reach figures for 14 items',
       'A rising trend, because more was published',
       '"Most successful" meaning most widely distributed'],
 gap='"Reach of each item" measures distribution, "the trend against last quarter" rises when '
     'output rises, "most successful" is undefined and defaults to the largest figure, and '
     'nothing requires an outcome figure at all.',
 back_cap='Six years of accurate reporting in which the only measure was the one the section '
          'could raise at will.',
 back_note='Line four is the failure. Success defined by the available figure makes the '
           'available figure the objective.',
 diagnosis=[('[1] "the quarter’s activity" — which items, and over what dates?', 'unstated criterion'),
            ('[2] "the reach of each item" — assumes reach is the measure of interest', 'hidden assumption'),
            ('[3] "the trend against last quarter" — assumes the comparison is meaningful when output changed', 'hidden assumption'),
            ('[4] "the most successful items" — successful by what test?', 'unstated criterion'),
            ('[5] nothing on outcome figures held elsewhere — included or not?', 'unstated exception'),
            ('[6] nothing on items with no outcome figure — omitted or named?', 'unstated exception')],
 rewrite='Rewrite the instruction so that a reader cannot take reach for effect.',
 scaffold=['What the report must prevent a reader from concluding',
           'The items and period covered, and what is excluded',
           'The page figures, the outcome figures and the item',
           'Reach with its method, the outcome with its owner, last year, non-attribution, bases given',
           'The length, the figures per item and the deadline',
           'What to do where no outcome figure exists'],
 bank=['Report … so that nobody can read … as …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Give … with … ; give … , naming … ; give … ; state … ; give no percentage without …',
       'Return 1 report of … carrying … per item, within …',
       'Where no outcome figure exists … , … and name …'],
 check=['Is an outcome figure required?',
        'Is the owner of the outcome figure named?',
        'Is non-attribution stated explicitly?',
        'Are percentages required to carry their bases?'],
 model=['Report what can be established about each published item, so that nobody can read a reach figure as a statement of effect',
        'The 14 items published in the quarter; items published before the instrumentation was installed are out of scope',
        'The page figures, the consular registration figures for the quarter and for the equivalent quarter of the previous year, and the published item itself',
        'Give the reach figure with the method by which it was estimated; give the outcome figure held by the responsible section, naming that section; give the same outcome figure for the equivalent quarter of the previous year; state in 1 sentence that no attribution between the 2 can be established; give no figure as a percentage without its base',
        '1 report of 2 pages carrying 3 figures per item, within 10 working days of the quarter end',
        'Where no outcome figure exists for an item, say that none exists and name what would have to be counted'],
 cost='6 years of reporting in which the only measure was one the section could raise by '
      'publishing more, and 2 public statements treating it as evidence of effect.'),

rev_fig=figs.split('ELLIPSIS',
                   'Too much left out',
                   ['Registration rose eleven per cent.',
                    'Reach was up, and engagement.',
                    'Some items work better.',
                    'If so, we should continue.'],
                   'Nothing needed left out',
                   ['… on the previous quarter, against 9 last year.',
                    'Reach rose by a third; engagement by 4 per cent.',
                    'Items with a named action: 3 times the click-through.',
                    'If the rise holds for 2 quarters …']),
rev_fig_cap='Never elide a condition, a quantity, a negative or a comparator.',
rev=dict(
 read=[('A reach figure establishes', ['effect', 'that the item was distributed', 'understanding', 'action'], 1),
       ('Reach is unsafe as a management figure because', ['it is inaccurate', 'the section can raise it at will', 'it is small', 'it is quarterly'], 1),
       ('The outcome figure usually', ['does not exist', 'is held by another section', 'is secret', 'is the same as reach'], 1),
       ('In the Decision Room, what does the briefing note now give?', ['reach', 'registrations with last year', 'all three figures', 'nothing'], 1)],
 listen_text='Registrations rose eleven per cent in the quarter of the campaign and nine per '
             'cent in the equivalent quarter of the previous year with no campaign at all, and '
             'no honest sentence connects the four hundred and ten thousand to the nine '
             'hundred.',
 listen=[('Rose eleven per cent in the quarter of the ____________.', 'campaign'),
         ('Nine per cent in the ____________ quarter.', 'equivalent'),
         ('With no campaign at ____________.', 'all'),
         ('No honest sentence ____________ them.', 'connects')],
 speak=['State one figure from your work with its base and its comparator.',
        'Say what outcome figure should sit beside something your office counts.'],
 write='Write one sentence stating that attribution cannot be established.',
 vocab=[('A figure that rises reliably and means little is a ____________.', 'vanity metric'),
        ('Something countable that stands in for what is wanted is a ____________.', 'proxy measure'),
        ('What would have happened in the absence of the action is a ____________.', 'counterfactual'),
        ('An enquiry that was not made because an answer was published is a ____________.', 'call avoided'),
        ('How far down a page a reader went is a ____________.', 'scroll depth')],
 gram=[('Registration rose 11 per cent ____________ the previous quarter.', 'on'),
       ('Reach rose by a third; engagement rose ____________ 4 per cent.', 'by'),
       ('Some sections measure outcomes; others ____________ not.', 'do'),
       ('If the rise ____________ for 2 further quarters, the campaign should continue.', 'holds'),
       ('We measured reach but ____________ outcomes.', 'not')]),

found=['Find one figure your office reports and ask what it establishes.',
       'Name the outcome figure that should sit beside it, and who holds it.',
       'Add a base to every percentage in your next report.',
       'Write the non-attribution sentence for one claim you have made.'],
end_line='A figure a section can raise by publishing more will be raised by publishing more.',
end_next='Next: Where an Error Is Expensive',
)
