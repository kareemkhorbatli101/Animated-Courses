# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Watching the Narrative',
gram='participle clauses for background',
ai='media and narrative monitoring, and its limits',
strap='CEFR B2 · Grammar: participle clauses · AI: narrative monitoring and its limits',
cando=['use present and past participle clauses to carry background',
       'avoid the dangling participle by keeping the subject the same',
       'say what media monitoring measures and what it does not',
       'distinguish volume of coverage from influence on a decision',
       'write a monitoring tasking with a stated baseline and a named set of titles'],
hero=('COVERAGE IS NOT OPINION',
      ['Mentions rose by four hundred per cent in nine days.',
       'They rose in three titles, two of them owned by the same house.'],
      [(730, 'teal', 'long'), (1390, 'blue', 'short'),
       (2050, 'orange', 'long'), (2690, 'purple', 'short')]),
hero_cap='Press and Public Diplomacy, the morning the monitoring report arrived.',

warm=['What does your office want to know about how it is written about?',
      'What would a rise in coverage tell you, and what would it not?',
      'How would you tell a change of opinion from a change of volume?'],
read=[
 'Yara Ibrahim runs Press and Public Diplomacy with four officers and a monitoring report '
 'that arrives every morning at seven. Since February the report has been assembled over '
 'forty-one titles in five languages, which is more than her section could read in a week.',
 'In March the report showed a rise of four hundred per cent in mentions of the Ministry’s '
 'transit position across nine days, with the tone of coverage moving from neutral to '
 'critical. Read as it stood, it described a collapse in how the Ministry’s position was '
 'being received.',
 'Yara asked for the underlying items, and there were nineteen. Three titles carried all '
 'nineteen; two of those three are owned by the same house and had run the same syndicated '
 'item on consecutive days. Thirty-eight of the forty-one monitored titles had not mentioned '
 'the question at all.',
 'Karim Dalati, asked what the figure meant, said it meant that nineteen items existed. '
 'Having been asked for a tonal shift, the monitoring had reported one correctly; having not '
 'been asked how concentrated the coverage was, it had not said.',
 'The report now carries three figures where it carried one: volume, the number of distinct '
 'titles, and the number of distinct owners. The March rise, recalculated, was a rise in two '
 'houses. Yara says the useful sentence in any monitoring report is the one naming how few '
 'places a story is actually in.'],
c_a=[('How many titles are monitored, and in how many languages?', 'forty-one titles in five languages'),
     ('What did the March report show?', 'a four hundred per cent rise in mentions and a shift from neutral to critical'),
     ('How many underlying items were there?', 'nineteen'),
     ('How were they distributed?', 'three titles carried all nineteen; two of the three share an owner'),
     ('What did Karim say the figure meant?', 'that nineteen items existed'),
     ('What three figures does the report now carry?', 'volume, distinct titles and distinct owners')],
c_b=[('The section could read forty-one titles in a week.', 'F'),
     ('The tone shift was reported incorrectly.', 'F'),
     ('Thirty-eight titles did not mention the question.', 'T'),
     ('Two of the three titles share an owner.', 'T'),
     ('The monitoring had been asked about concentration.', 'F'),
     ('The March rise was a rise in two houses.', 'T')],
c_c=[('A monitoring report that arrives every morning at ____________.', 'seven'),
     ('The tone of coverage moving from neutral to ____________.', 'critical'),
     ('The same ____________ item on consecutive days.', 'syndicated'),
     ('It meant that nineteen items ____________.', 'existed'),
     ('Three figures where it carried ____________.', 'one'),
     ('How few ____________ a story is actually in.', 'places')],
c_d=[('The report measured ( volume and tone / opinion ).', ['volume and tone', 'opinion'], 0),
     ('How many titles carried the nineteen items?', ['nineteen', 'three', 'forty-one', 'thirty-eight'], 1),
     ('What had the monitoring not been asked?', ['about tone', 'how concentrated the coverage was', 'about volume', 'about languages'], 1),
     ('What does the third new figure count?', ['items', 'distinct owners', 'languages', 'days'], 1),
     ('What does Yara call the useful sentence?', ['the volume figure', 'how few places a story is in', 'the tone score', 'the headline'], 1)],
c_e=('Participle clause or main clause? Put each in the right column.',
     [('Having read the report, she asked for the items.', 'participle'),
      ('She read the report and asked for the items.', 'main clause'),
      ('Carried by three titles, the story looked larger.', 'participle'),
      ('Three titles carried the story.', 'main clause'),
      ('Owned by one house, two titles ran it twice.', 'participle'),
      ('Two titles ran it twice.', 'main clause')],
     ['participle', 'main clause']),

v_fig_title='WHAT MONITORING COUNTS',
v_fig=[('chart', 'a volume of coverage'), ('pin', 'a spike'), ('book', 'a monitored title'),
       ('bulb', 'a framing'), ('clock', 'a baseline level'), ('key', 'amplification')],
v_fig_cap='Six words for things that can be counted, none of which is an opinion.',
vocab=[
 ('media monitoring', 'the systematic watching of what published outlets say'),
 ('a narrative', 'a connected account that organises events into a story'),
 ('a monitored title', 'one publication included in a monitoring set'),
 ('reach', 'how many people a publication is estimated to be seen by'),
 ('an audience segment', 'a defined part of a public, by place, age or interest'),
 ('an audience share', 'the proportion of a public that a broadcaster holds'),
 ('a sentiment score', 'a number assigned to how favourable a text appears'),
 ('a tonal shift', 'a change in how favourable coverage is over time'),
 ('a framing', 'the terms in which a question is presented'),
 ('a theme', 'a subject that recurs across items'),
 ('a recurring phrase', 'a form of words that appears repeatedly across outlets'),
 ('a volume of coverage', 'how much has been published on a subject'),
 ('a spike', 'a sharp short rise above the usual level'),
 ('a baseline level', 'the usual level against which a rise is measured'),
 ('an echo', 'a repetition of an item that adds no new reporting'),
 ('amplification', 'the increase of a claim’s reach by repetition'),
 ('a syndicated item', 'one article published in several titles by arrangement'),
 ('an op-ed', 'an opinion article by a named writer outside the paper'),
 ('a column inch', 'a measure of how much space an item was given'),
 ('a broadcast slot', 'the time of day at which an item was transmitted')],
v_a=[('The usual level against which a rise is measured is a ____________.', 'baseline level'),
     ('One article published in several titles by arrangement is a ____________.', 'syndicated item'),
     ('A repetition of an item that adds no new reporting is an ____________.', 'echo'),
     ('The increase of a claim’s reach by repetition is ____________.', 'amplification'),
     ('A number assigned to how favourable a text appears is a ____________.', 'sentiment score'),
     ('The terms in which a question is presented are a ____________.', 'framing'),
     ('A measure of how much space an item was given is a ____________.', 'column inch'),
     ('A sharp short rise above the usual level is a ____________.', 'spike')],
v_b=[('Media monitoring is the systematic watching', 'of what published outlets say.'),
     ('A narrative is a connected account that organises', 'events into a story.'),
     ('Reach is how many people a publication', 'is estimated to be seen by.'),
     ('A recurring phrase is a form of words', 'that appears repeatedly across outlets.'),
     ('A broadcast slot is the time of day', 'at which an item was transmitted.')],

g_title='Grammar: participle clauses for background',
g_rule=['A present participle clause gives a simultaneous or causal background: carrying all '
        'nineteen items, three titles accounted for the rise.',
        'A past participle clause gives a passive background: owned by one house, two titles '
        'ran it twice.',
        'Having plus the past participle marks a prior event: having read the report, she '
        'asked for the items.',
        'The subject of the participle must be the subject of the main clause.'],
g_fig=('LOOSE',
       ['Reading the report, the figures were wrong.',
        'Owned by one house, she found two titles.',
        'Having asked for the items, there were nineteen.',
        'Being critical, the Ministry was surprised.'],
       'PRECISE',
       ['Reading the report, she found the figures misleading.',
        'Owned by one house, two titles ran the same item twice.',
        'Having asked for the items, she found nineteen.',
        'Critical in tone, the coverage surprised the Ministry.'],
       'four participles attached to the wrong subject',
       'four participle clauses whose subject is the main subject'),
g_fig_cap='A dangling participle in a brief attaches a fact to the wrong actor.',
g_a=[('____________ (read) the report, she asked for the items.', 'Having read'),
     ('____________ (own) by one house, two titles ran the same item.', 'Owned'),
     ('____________ (carry) all nineteen items, three titles accounted for the rise.', 'Carrying'),
     ('____________ (base) on a nine-day window, the figure was misleading.', 'Based'),
     ('____________ (ask) what it meant, he said nineteen items existed.', 'Asked'),
     ('____________ (recalculate), the rise was a rise in two houses.', 'Recalculated'),
     ('____________ (not be) asked about concentration, it had not reported it.', 'Not having been'),
     ('____________ (write) in five languages, the set covers the region.', 'Written'),
     ('____________ (publish) on consecutive days, the item appeared twice.', 'Published')],
g_b=[('The participle’s subject must be the ( nearest noun / main subject ).', ['nearest noun', 'main subject'], 1),
     ('____ the report, she found the figures misleading.', ['Read', 'Reading', 'To read', 'Having read it'], 1),
     ('____ by one house, two titles ran it twice.', ['Owning', 'Owned', 'Having owned', 'To own'], 1),
     ('Which marks a prior event?', ['reading', 'having read', 'read', 'to read'], 1),
     ('Which sentence dangles?', ['Reading the report, she found errors.', 'Reading the report, the errors were obvious.', 'Having read it, she asked.', 'Owned by one house, they ran it.'], 1),
     ('____ what it meant, he said nineteen items existed.', ['Asking', 'Asked', 'To ask', 'Having asking'], 1)],

d1=dict(title='Four hundred per cent of what?',
        fig=(['Mentions up four hundred per cent.', 'Across how many titles?'],
             ['Three.', 'Then say three.']),
        cap='Yara Ibrahim and Karim Dalati, with the March report.',
        lines=[('Yara', 'The report says mentions are up four hundred per cent over nine days '
                        'and the tone has moved from neutral to critical.'),
               ('Karim', 'Both figures are correct.'),
               ('Yara', 'Across how many titles?'),
               ('Karim', 'Three. Two of the three are owned by the same house and ran the same '
                         'syndicated item on consecutive days.'),
               ('Yara', 'And the other thirty-eight?'),
               ('Karim', 'Have not mentioned the question at all.'),
               ('Yara', 'Then the sentence I was about to put in front of the Minister describes '
                        'a collapse in how we are received, and what has happened is that two '
                        'houses have taken an interest.'),
               ('Karim', 'Asked for volume and tone, the monitoring gave volume and tone. Not '
                         'having been asked about concentration, it said nothing about it.'),
               ('Yara', 'I am not blaming the report. I am blaming the figure I nearly used, '
                        'which I would have defended on the ground that it came from a system.'),
               ('Karim', 'That is the common failure. A number that arrives at seven in the '
                         'morning in a table carries an authority that the same number spoken by '
                         'an officer would not.'),
               ('Yara', 'So the report gains two columns: distinct titles and distinct owners.'),
               ('Karim', 'And a baseline, because four hundred per cent of a very small number '
                         'is a sentence rather than a finding.')],
        a=[('What two figures did the report give?', 'a four hundred per cent rise in mentions and a shift to critical tone'),
           ('Across how many titles and owners?', 'three titles, two of them in one house'),
           ('How many titles were silent?', 'thirty-eight'),
           ('What had the monitoring not been asked?', 'about the concentration of the coverage'),
           ('What two columns are added?', 'distinct titles and distinct owners')],
        b=[('Ran the same ____________ item on consecutive days.', 'syndicated'),
           ('Two houses have taken an ____________.', 'interest'),
           ('A number that arrives at seven in the morning in a ____________.', 'table'),
           ('Four hundred per cent of a very small ____________.', 'number')]),
d2=dict(title='What a sentiment score is',
        fig=(['Sentiment has moved to minus 0.4.', 'Minus 0.4 of what?'],
             ['Of a scale we did not build.', 'Then what are we reporting?']),
        cap='Yara and Dr Hana Mourad, before the quarterly report.',
        lines=[('Hana', 'The quarterly draft says sentiment towards the Ministry has moved to '
                        'minus zero point four.'),
               ('Yara', 'That is the score the monitoring produces.'),
               ('Hana', 'On what scale, built by whom, validated against what?'),
               ('Yara', 'I do not know in detail. It is a scale from minus one to one, and the '
                        'movement over time has matched what my officers would have said by '
                        'reading.'),
               ('Hana', 'That is the strongest argument for it and it is also the weakest. It '
                        'matches your officers’ judgement, which means it is telling you what '
                        'you already know, and where it stops matching you will not be able to '
                        'tell whether it or they are wrong.'),
               ('Yara', 'I use it for direction and not for level. A move from neutral to '
                        'critical in a week is worth a telephone call. The number itself I would '
                        'not put in a brief.'),
               ('Hana', 'The draft puts it in a brief.'),
               ('Yara', 'Then I will take it out and write the direction in words, with the '
                        'number of titles and owners beside it.'),
               ('Hana', 'What troubles me is that direction is the cheap part. What the Ministry '
                         'wants to know is whether coverage is changing what anybody thinks, and '
                         'no amount of counting published words bears on that.'),
               ('Yara', 'It bears on it a little. Coverage is where opinion is formed.'),
               ('Hana', 'It is one of the places. The others are not published and we do not '
                        'monitor them, and I have no proposal for measuring any of it. I would '
                        'rather we recorded that we are measuring coverage and calling it '
                        'nothing else.'),
               ('Yara', 'Agreed, and I remain uneasy that the thing we can count is the thing '
                        'we will end up managing.')],
        a=[('What does the quarterly draft report?', 'that sentiment has moved to minus zero point four'),
           ('What does Hana ask about the scale?', 'who built it and what it was validated against'),
           ('Why is matching officers’ judgement a weak argument?', 'because it tells them what they know and gives no way to resolve a disagreement'),
           ('What does Yara use the score for?', 'direction, not level; the number itself she keeps out of briefs'),
           ('Is the deeper question resolved?', 'no; both record that coverage is not opinion and neither has a proposal')],
        b=[('A scale from minus one to ____________.', 'one'),
           ('I use it for ____________ and not for level.', 'direction'),
           ('Coverage is where ____________ is formed.', 'opinion'),
           ('The thing we can ____________ is the thing we will end up managing.', 'count')],
        unresolved=True),

speak=[('Background it',
        ['Student A: give two facts about a situation in your work.',
         'Student B: join them with a participle clause.',
         'Check that the participle’s subject is the main subject.']),
       ('Behind the figure',
        ['Describe a rise or fall reported in your field.',
         'Your partner asks: of what, from what baseline, across how many places.',
         'Rewrite the claim with those answers in it.']),
       ('Count or opinion',
        ['List four things your office could count about its public standing.',
         'Say for each what it does not tell you.',
         'Say which you would put in front of a Minister.'])],

ext_title='Monitoring counts published words across more titles than anyone could read; it does not measure opinion',
ext_fig=figs.datatable('THE MARCH RISE, UNPACKED',
                       ['Figure', 'As reported', 'As unpacked'],
                       [['change in mentions', '+400 per cent', 'from 4 to 19 items'],
                        ['window', '9 days', 'baseline not stated'],
                        ['titles carrying items', 'not reported', '3 of 41'],
                        ['distinct owners', 'not reported', '2'],
                        ['syndicated repetitions', 'not reported', '1 item, 2 titles, 2 days'],
                        ['titles not mentioning it', 'not reported', '38 of 41']]),
ext_fig_cap='One reported figure, five unreported ones, and the five are the story.',
ext=[
 'Media monitoring is work no press section has ever been able to do properly. Forty titles in '
 'five languages cannot be read every morning by four officers, and the sections that tried '
 'read the three they knew and inferred the rest. Assembling a daily report across the whole '
 'set, with volumes, themes, recurring phrases and tonal movement, is now routine, and the '
 'gain is real: a press section can see what it is actually being written about rather than '
 'what it happens to read.',
 'The first trap is concentration. A rise of four hundred per cent sounds like a change in a '
 'country’s press and may be a change in two newspapers, one of which reprinted the other. '
 'The remedy is not subtle. Report volume, the number of distinct titles, the number of '
 'distinct owners, and the baseline the rise is measured from, because four hundred per cent '
 'of four items is nineteen items and nineteen items is a sentence, not a shift.',
 'The second trap is the sentiment score. A number from minus one to one, produced daily, '
 'carries the authority of measurement without the properties of it: a press section usually '
 'cannot say who built the scale or what it was validated against, and its usual defence is '
 'that the movement matches what its officers would have said by reading. That defence is '
 'also the objection, since a measure that agrees with your judgement adds nothing, and on '
 'the day it disagrees you have no way of knowing which to believe. The practice that holds '
 'is to use such scores for direction and never for level, and to keep the number out of '
 'briefs while putting the direction in words.',
 'The third limit is the one that matters most and admits no remedy. Monitoring counts '
 'published words. What a ministry wants to know is whether coverage is changing what anybody '
 'thinks or does, and counting words does not bear on that except by assumption. Coverage is '
 'one of the places opinion is formed; the others are conversations, institutions and '
 'experience, none of which is published and none of which is monitored.',
 'An honest monitoring report therefore states what it measured and declines the larger claim. '
 'The risk of not doing so is specific and well known across press sections: a ministry that '
 'reports what it can count will in time manage what it can count, and will begin treating a '
 'rise in two newspapers as a problem to be solved.'],
dp1=('Narrative monitoring',
     'Foreign ministry press sections scaled automated media monitoring across many more '
     'titles and languages in 2025, and several added distinct-title and distinct-owner counts '
     'after concentrated coverage was reported as broad shifts.',
     'Source: reported practice in diplomatic press monitoring, 2025–2026.'),
e_a=[('What could no press section do before?', 'read forty titles in five languages every morning'),
     ('What is the first trap?', 'concentration: a large rise may be two newspapers, one reprinting the other'),
     ('What four figures should be reported?', 'volume, distinct titles, distinct owners and the baseline'),
     ('Why is the defence of a sentiment score also the objection?', 'because a measure that agrees with your judgement adds nothing and cannot settle a disagreement'),
     ('What is the third limit?', 'that counting published words does not bear on what anybody thinks or does')],
e_b=[('Monitoring measures opinion.', 'F'),
     ('A four hundred per cent rise is always broad.', 'F'),
     ('Distinct owners should be reported.', 'T'),
     ('A sentiment score should be used for level.', 'F'),
     ('Coverage is the only place opinion is formed.', 'F'),
     ('A ministry tends to manage what it can count.', 'T')],

w_model=(
 'Purpose: report what the monitored press published about the Ministry’s transit position, so '
 'that the section can see the shape of the coverage rather than the 3 titles it reads. '
 'Scope: the 41 titles on the monitored list, between 1 and 31 March; broadcast and social '
 'material are out of scope. Inputs: the published items from those 41 titles and the '
 'section’s own list of owners. Criteria: give the volume of items, the number of distinct '
 'titles, the number of distinct owners, and the 12-month baseline the change is measured '
 'from; identify any item carried in more than 1 title and count it once in the title count; '
 'report tonal movement in words and give no single score; name the recurring phrases with '
 'the number of titles using each. Done: 1 report of 1 page carrying all 4 counts, every '
 'morning by 07:00. Fallback: where the owner of a title is not on the section’s list, report '
 'the owner as not established rather than omitting the title.'),
w_fig=figs.spec_card('THE TASKING FOR A MONITORING REPORT',
                     [('Purpose', 'the shape of the coverage, not the 3 titles we read'),
                      ('Scope', '41 listed titles, 1–31 March; broadcast and social excluded'),
                      ('Inputs', 'the published items and the section’s list of owners'),
                      ('Criteria', 'volume, titles, owners, baseline; syndication counted once'),
                      ('Done', '1 page with all 4 counts, by 07:00 daily'),
                      ('Fallback', 'owner unknown: report as not established, keep the title')]),
w_fig_cap='Four counts, not one. A volume figure alone is the thing that gets misread.',
w_task='Write a monitoring tasking for your own office.',
w_steps=['Say what the section is to be able to see.',
         'Name the set of titles and the period.',
         'Require the four counts, including a baseline.',
         'Say how a syndicated item is counted.',
         'Say what happens where ownership cannot be established.'],
w_bank=['Report … so that the section can see … rather than …',
        'Cover … ; … are out of scope.',
        'Work from … and …',
        'Give … , … , … and the … baseline; identify … and count it … ; report tonal movement … and give no …',
        'Where the owner of a title is not … , report … rather than …'],
w_check=['Is the set of titles named and counted?',
         'Is a baseline required?',
         'Are distinct owners counted?',
         'Is a single sentiment score forbidden?'],

t_title='Narrative monitoring and its limits',
t_fig=figs.split('MONITORING',
                 'Measures',
                 ['how many items appeared',
                  'in how many titles and houses',
                  'which phrases recur, and where',
                  'how coverage moved against a baseline'],
                 'Does not measure',
                 ['what anybody thinks',
                  'what anybody will do',
                  'what is said in conversations',
                  'whether coverage changed a decision']),
t_fig_cap='The left column is countable and useful. The right column is what the Ministry actually wants.',
t_body=[
 'No press section has ever read its own press properly. Forty titles in five languages every '
 'morning is beyond four officers, so sections read three and inferred the rest. A daily '
 'assembly across the whole set, with volumes, themes and recurring phrases, lets a section '
 'see what it is being written about instead of what it happens to read, and that is a '
 'genuine change.',
 'Guard against two traps. Concentration first: a rise of four hundred per cent can be two '
 'newspapers, one of which reprinted the other, and the cure is to report volume, distinct '
 'titles, distinct owners and the baseline together, always. Four hundred per cent of four '
 'items is nineteen items, which is a sentence and not a shift. Then the sentiment score: it '
 'has the authority of a measurement without the properties of one, its usual defence is that '
 'it matches what officers would say by reading, and that is exactly why it adds nothing. Use '
 'it for direction, never for level, and keep the number out of briefs.',
 'The real limit admits no remedy and should be written into the report. Monitoring counts '
 'published words. Whether coverage is changing what anybody thinks or does is a different '
 'question, and conversations, institutions and experience are where much of that happens and '
 'none of it is published. A ministry that reports only what it can count will eventually '
 'manage what it can count, and will treat a rise in two newspapers as a problem.'],
t_say=[('Report four figures: ', 'Volume, distinct titles, distinct owners, and the baseline.'),
       ('Refuse the score: ', 'Tonal movement in words; no single sentiment figure.'),
       ('State the limit: ', 'This report measures coverage; it does not measure opinion.')],
t_bound=('Monitoring counts what has been published in the titles on its list. It cannot see '
         'what was said in rooms, cannot distinguish repetition from independent interest '
         'unless told to, and cannot establish that coverage changed anybody’s view. A rise '
         'is a fact about publishing, not about a public.'),
t_a=[('Volume, distinct titles, distinct owners, and the ____________.', 'baseline'),
     ('Tonal movement in words; no single ____________ figure.', 'sentiment'),
     ('This report measures coverage; it does not measure ____________.', 'opinion'),
     ('Four hundred per cent of four items is ____________ items.', 'nineteen'),
     ('Use it for direction, never for ____________.', 'level'),
     ('A rise is a fact about publishing, not about a ____________.', 'public')],
t_b_rubric='Rewrite each sentence so that the participle’s subject is the main subject.',
t_b=[('Reading the report, the figures were wrong.', 'reading the report, she found the figures misleading'),
     ('Owned by one house, she found two titles.', 'owned by one house, two titles ran the same item'),
     ('Having asked for the items, there were nineteen.', 'having asked for the items, she found nineteen'),
     ('Being critical, the Ministry was surprised.', 'critical in tone, the coverage surprised the Ministry')],

case=dict(
 title='The Decision Room · A rise in two houses',
 brief=[
  'The March coverage is concentrated in three titles, two of them in one house. The items '
  'repeat a phrase about the Ministry obstructing transit that appears nowhere else.',
  'Yara proposes no response, on the ground that answering three titles would carry the phrase '
  'into the other thirty-eight.',
  'The Minister’s office wants a rebuttal placed in the largest national title. Samir Haddad '
  'asks what the Ministry would say if asked where the phrase came from.'],
 exhibit=figs.datatable('THE COVERAGE, 1–31 MARCH',
                        ['', 'Figure', 'Note'],
                        [['items carrying the phrase', '19', '—'],
                         ['distinct titles', '3', 'of 41 monitored'],
                         ['distinct owners', '2', '—'],
                         ['syndicated repetitions', '11 of 19', '1 item, 2 titles'],
                         ['titles silent on the question', '38', '—'],
                         ['appearances of the phrase before March', '0', '12-month baseline']]),
 exhibit_cap='Eleven of nineteen items are one article printed twice; the phrase has no '
             'history before March.',
 exhibit_note='The largest national title, which the Minister’s office wants to use, has not '
              'carried the question at all.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'Say nothing. A rebuttal in the largest title puts the phrase in front of a '
          'readership that has never seen it, and the phrase is what we object to.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Before deciding, ask where the phrase came from. It has no history and appears in '
          'two houses in nine days. That pattern is worth establishing whatever we then do.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'The Minister’s office is answering a feeling that something must be done. The '
          'figures say three titles. I would send the figures up before anybody drafts a '
          'rebuttal.')],
 steps=[('Find it', 'How much of the volume is one article?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why would a rebuttal spread the phrase?'),
        ('Weigh it', 'Visible action against carrying a phrase to a new readership.'),
        ('Decide', 'What does the Ministry do about the March coverage?')],
 analysis=[('Find it. How many of the nineteen items are syndicated repetitions?', 'eleven'),
           ('Compare it. What does Samir want done first?', 'establishing where the phrase came from'),
           ('Infer it. Who has not seen the phrase?', 'the readership of the largest national title'),
           ('Weigh it. What is the baseline for the phrase?', 'zero appearances in twelve months before March'),
           ('Decide. What would you do?', 'answers vary; sending the figures up answers the office without spreading the phrase')],
 decision='Write what the Ministry does and what the Minister’s office is told.',
 decision_steps=['Say whether a rebuttal is placed, and where.',
                 'Say what figures go to the Minister’s office.',
                 'Say what is done about the origin of the phrase.',
                 'Say what would change the decision.'],
 bank=['No rebuttal is placed, on the ground that …',
       'The Minister’s office is sent …',
       'The origin of the phrase is …',
       'The decision would change if …',
       'This is reviewed …'],
 outcome='No rebuttal was placed. The four counts went to the Minister’s office with one line '
         'saying that thirty-eight of forty-one titles had not carried the question, and the '
         'request was withdrawn the same day. Tracing the phrase produced nothing: it appeared '
         'first in one of the two houses and no earlier use could be found. In July the same '
         'phrase appeared in eleven titles across four countries within six days, at which '
         'point the Ministry had a baseline, a first appearance and a documented absence of '
         'response, and could show that it had watched the phrase for four months before '
         'saying anything. Samir says the useful work was the tracing that found nothing, '
         'because it established the date.',
 outcome_q=[('Why was the request withdrawn?', 'because the four counts showed thirty-eight of forty-one titles were silent'),
            ('What made the July appearance manageable?', 'a baseline, a first appearance and a documented absence of response')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tell me how we are being covered',
 task=['This is the standing tasking under which the morning report was produced from February '
       'to March.',
       'It produced a figure that described a national shift and meant two newspapers.'],
 draft=['Report how the Ministry is being covered.',
        'Watch the main outlets.',
        'Flag any significant change in tone.',
        'Give the numbers.',
        'Note what is being said about us.',
        'Every morning.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and "the numbers" turned out to mean one number.',
 asked=['Volume, titles, owners and a baseline',
        'Syndicated items counted once',
        'Tonal movement in words, not a score'],
 back=['A single volume figure and a sentiment score',
       '11 repetitions counted as 11 items',
       'No baseline and no title count'],
 gap='"The main outlets" does not name the set, "significant change" sets no test, "the '
     'numbers" does not say which, and nothing says how an item printed in two titles is '
     'counted.',
 back_cap='A report that was correct every morning and misleading on the one morning it '
          'mattered.',
 back_note='Line four is the failure. One number is always the wrong number here, because '
           'volume without titles and owners cannot be interpreted.',
 diagnosis=[('[1] "how the Ministry is being covered" — in which titles, over what period?', 'unscoped set'),
            ('[2] "the main outlets" — which, and how many?', 'unscoped set'),
            ('[3] "any significant change in tone" — significant by what test?', 'unstated criterion'),
            ('[4] "give the numbers" — which numbers, against what baseline?', 'unstated criterion'),
            ('[5] nothing on syndicated items — counted once or twice?', 'unstated exception'),
            ('[6] nothing on titles whose owner is unknown — included or dropped?', 'unstated exception')],
 rewrite='Rewrite the tasking so that four counts are reported and syndication is handled.',
 scaffold=['What the section is to be able to see',
           'The named set of titles and the period, and what is excluded',
           'The items and the section’s list of owners',
           'The four counts, syndication counted once, tone in words, recurring phrases with title counts',
           'What is produced and by when each day',
           'What to do where ownership cannot be established'],
 bank=['Report … so that the section can see …',
       'Cover … ; … are out of scope.',
       'Work from … and …',
       'Give … , … , … and … ; identify … and count … ; report … in words and give no … ; name …',
       'Return 1 report of … , by …',
       'Where the owner … , report … rather than …'],
 check=['Are the titles named as a set with a number?',
        'Are four counts required, including a baseline?',
        'Is syndication counted once?',
        'Is an unknown owner reported rather than dropped?'],
 model=['Report what the monitored press published about the Ministry’s transit position, so that the section can see the shape of the coverage rather than the 3 titles it reads',
        'The 41 titles on the monitored list, between 1 and 31 March; broadcast and social material are out of scope',
        'The published items from those 41 titles and the section’s own list of owners',
        'Give the volume of items, the number of distinct titles, the number of distinct owners, and the 12-month baseline the change is measured from; identify any item carried in more than 1 title and count it once in the title count; report tonal movement in words and give no single score; name the recurring phrases with the number of titles using each',
        '1 report of 1 page carrying all 4 counts, every morning by 07:00',
        'Where the owner of a title is not on the section’s list, report the owner as not established rather than omitting the title'],
 cost='1 figure that would have gone to the Minister as a national shift in opinion and '
      'described 2 newspapers, and 1 rebuttal nearly placed in a title that had never carried '
      'the story.'),

rev_fig=figs.split('PARTICIPLE CLAUSES',
                   'Dangling',
                   ['Reading the report, the figures were wrong.',
                    'Owned by one house, she found two titles.',
                    'Having asked, there were nineteen.',
                    'Being critical, the Ministry was surprised.'],
                   'Attached',
                   ['Reading the report, she found errors.',
                    'Owned by one house, two titles ran it.',
                    'Having asked, she found nineteen.',
                    'Critical in tone, the coverage surprised us.']),
rev_fig_cap='The participle’s subject is the main clause’s subject, always.',
rev=dict(
 read=[('A four hundred per cent rise may be', ['a national shift', 'two newspapers', 'a tonal change', 'a new baseline'], 1),
       ('A sentiment score should be used for', ['level', 'direction', 'briefs', 'baselines'], 1),
       ('Monitoring cannot measure', ['volume', 'what anybody thinks', 'recurring phrases', 'distinct owners'], 1),
       ('In the Decision Room, what was sent to the Minister’s office?', ['a rebuttal', 'the four counts', 'a sentiment score', 'nothing'], 1)],
 listen_text='Monitoring counts published words. Whether coverage is changing what anybody '
             'thinks or does is a different question, and conversations, institutions and '
             'experience are where much of that happens, none of it published and none of it '
             'monitored.',
 listen=[('Monitoring counts published ____________.', 'words'),
         ('What anybody thinks or ____________.', 'does'),
         ('Conversations, institutions and ____________.', 'experience'),
         ('None of it ____________ and none of it monitored.', 'published')],
 speak=['Describe a rise in your field and say what baseline it is measured from.',
        'Join two facts about your work with a participle clause.'],
 write='Write one line stating the limit of a monitoring report.',
 vocab=[('The usual level against which a rise is measured is a ____________.', 'baseline level'),
        ('One article published in several titles by arrangement is a ____________.', 'syndicated item'),
        ('The increase of a claim’s reach by repetition is ____________.', 'amplification'),
        ('A number assigned to how favourable a text appears is a ____________.', 'sentiment score'),
        ('A measure of how much space an item was given is a ____________.', 'column inch')],
 gram=[('____________ (read) the report, she asked for the items.', 'Having read'),
       ('____________ (own) by one house, two titles ran the same item.', 'Owned'),
       ('____________ (carry) all nineteen items, three titles accounted for the rise.', 'Carrying'),
       ('____________ (ask) what it meant, he said nineteen items existed.', 'Asked'),
       ('____________ (recalculate), the rise was a rise in two houses.', 'Recalculated')]),

found=['Ask which titles your office actually monitors, and how many.',
       'Find a percentage in a report and work out its baseline.',
       'Count how many distinct owners carried a story about your field this week.',
       'Write one participle clause carrying background for a brief.'],
end_line='A rise is a fact about publishing, not about a public.',
end_next='Next: Patterns That Are Not There',
)
