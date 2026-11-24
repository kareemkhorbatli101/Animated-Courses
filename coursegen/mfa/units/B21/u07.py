# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Patterns That Are Not There',
gram='degree and proportion stated precisely',
ai='coordinated narratives, and the risk of seeing patterns',
strap='CEFR B2 · Grammar: degree and proportion · AI: patterns that are not there',
cando=['state degree and proportion precisely: 3 of 41, not many',
       'use a share, a ratio and a percentage point correctly',
       'distinguish a coordinated pattern from a coincidence',
       'say what a base rate is and why a pattern needs one',
       'write a tasking that requires the base rate before the finding'],
hero=('ELEVEN TITLES, SIX DAYS, FOUR COUNTRIES',
      ['The phrase appeared in eleven titles in six days, having appeared nowhere in a year.',
       'So did forty-one other phrases that month, and nobody was coordinating those.'],
      [(730, 'purple', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'orange', 'short')]),
hero_cap='Policy Planning, the week the pattern report came in.',

warm=['When have you seen a pattern that turned out not to be one?',
      'What would make you believe that several events were coordinated?',
      'How often would the same thing happen by chance? How would you find out?'],
read=[
 'In July the phrase that had worried Press and Public Diplomacy in March appeared in eleven '
 'titles across four countries within six days. It had appeared nowhere at all in the '
 'preceding twelve months.',
 'A pattern report from the monitoring set put the matter plainly: a phrase with no history, '
 'eleven appearances in six days, four jurisdictions, and in nine of the eleven items the '
 'phrase appeared in the second paragraph. The report described the pattern as consistent '
 'with coordination.',
 'Dr Hana Mourad read it on the Friday and sent it up on the Monday with a covering note of '
 'her own saying that the Ministry assessed the campaign to be coordinated. She was asked, by '
 'the Minister’s office, how often such a pattern occurs when nothing is being coordinated. '
 'Nobody in the section knew.',
 'Karim Dalati ran the question over the monitoring archive for the previous year. Phrases '
 'with no twelve-month history appearing in eight or more titles within a week occurred '
 'forty-two times in that year. Of the forty-two, the section could identify a plausible '
 'organic cause for thirty-one: a court judgment, a published report, a speech, a football '
 'result. Eleven were unexplained.',
 'The pattern was still interesting after that exercise and it was no longer a finding. Hana '
 'withdrew the word assessed from her note and replaced it with a paragraph giving the base '
 'rate. She says the mistake was not the assessment, which may well be right. The mistake was '
 'that she had no idea how unusual the thing she was looking at actually was, and she had '
 'written as though she did.'],
c_a=[('Where did the phrase appear in July?', 'in eleven titles across four countries within six days'),
     ('What was its history?', 'none at all in the preceding twelve months'),
     ('What did the pattern report say?', 'that the pattern was consistent with coordination'),
     ('What question did the Minister’s office ask?', 'how often such a pattern occurs when nothing is coordinated'),
     ('What did the archive show?', 'forty-two such cases in a year, thirty-one with a plausible organic cause'),
     ('What did Hana change?', 'she withdrew "assessed" and gave the base rate instead')],
c_b=[('The phrase had a long history before July.', 'F'),
     ('In nine of eleven items it appeared in the second paragraph.', 'T'),
     ('The section knew the base rate when the note went up.', 'F'),
     ('Thirty-one of forty-two cases had a plausible organic cause.', 'T'),
     ('Hana concluded the assessment was certainly wrong.', 'F'),
     ('Eleven cases were unexplained.', 'T')],
c_c=[('A phrase with no ____________, eleven appearances in six days.', 'history'),
     ('The report described the pattern as consistent with ____________.', 'coordination'),
     ('Phrases appearing in eight or more titles within a ____________.', 'week'),
     ('A court judgment, a published report, a speech, a ____________ result.', 'football'),
     ('It was still interesting and it was no longer a ____________.', 'finding'),
     ('How ____________ the thing she was looking at actually was.', 'unusual')],
c_d=[('The base rate made the pattern ( uninteresting / not a finding ).', ['uninteresting', 'not a finding'], 1),
     ('How many titles carried the July phrase?', ['four', 'eleven', 'forty-two', 'thirty-one'], 1),
     ('How many comparable cases occurred in a year?', ['eleven', 'forty-two', 'four', 'nine'], 1),
     ('How many of those were unexplained?', ['thirty-one', 'eleven', 'forty-two', 'none'], 1),
     ('What did Hana say the mistake was?', ['the assessment', 'writing as though she knew how unusual it was', 'the monitoring', 'the timing'], 1)],
c_e=('Precise or vague? Put each expression in the right column.',
     [('3 of 41 titles', 'precise'),
      ('many outlets', 'vague'),
      ('a rise of 4 percentage points', 'precise'),
      ('a sharp rise', 'vague'),
      ('11 of 42 cases, or about a quarter', 'precise'),
      ('a significant proportion', 'vague')],
     ['precise', 'vague']),

v_fig_title='WHAT A PATTERN NEEDS',
v_fig=[('chart', 'a base rate'), ('pin', 'a cluster'), ('bulb', 'a false positive'),
       ('key', 'a correlation'), ('clock', 'a chance pattern'), ('shield', 'a causal link')],
v_fig_cap='Six words, and the first of them is the one most often missing.',
vocab=[
 ('a coincidence', 'two things occurring together with no connection between them'),
 ('a correlation', 'a tendency of two things to vary together'),
 ('a causal link', 'a connection in which one thing brings about another'),
 ('a coordinated campaign', 'activity directed from a single point towards one end'),
 ('an organic trend', 'a movement arising without direction from any single point'),
 ('a cluster', 'a group of occurrences close together in time or place'),
 ('an outlier', 'a case far away from the rest of its set'),
 ('a chance pattern', 'an arrangement that looks designed and arose at random'),
 ('a base rate', 'how often something occurs in the ordinary course of events'),
 ('a false positive', 'a case wrongly identified as what is being looked for'),
 ('a false negative', 'a case wrongly identified as not what is being looked for'),
 ('a trigger level', 'the point at which a measure is treated as worth reporting'),
 ('a proportion', 'a part considered in relation to the whole'),
 ('a share of the total', 'how much of the whole one part accounts for'),
 ('a ratio', 'the relation of one quantity to another, stated as a comparison'),
 ('a percentage point', 'the unit by which two percentages differ'),
 ('an order of magnitude', 'a factor of about ten'),
 ('a tenfold increase', 'a rise to ten times the original'),
 ('a marginal difference', 'a difference too small to carry weight'),
 ('a statistically meaningless difference', 'a difference no larger than ordinary variation')],
v_a=[('How often something occurs in the ordinary course of events is a ____________.', 'base rate'),
     ('An arrangement that looks designed and arose at random is a ____________.', 'chance pattern'),
     ('A case wrongly identified as what is being looked for is a ____________.', 'false positive'),
     ('The unit by which two percentages differ is a ____________.', 'percentage point'),
     ('A movement arising without direction from any single point is an ____________.', 'organic trend'),
     ('The point at which a measure is treated as worth reporting is a ____________.', 'trigger level'),
     ('A factor of about ten is an ____________.', 'order of magnitude'),
     ('A case far away from the rest of its set is an ____________.', 'outlier')],
v_b=[('A coincidence is two things occurring together', 'with no connection between them.'),
     ('A correlation is a tendency of two things', 'to vary together.'),
     ('A coordinated campaign is activity directed', 'from a single point towards one end.'),
     ('A ratio is the relation of one quantity to another,', 'stated as a comparison.'),
     ('A marginal difference is a difference', 'too small to carry weight.')],

g_title='Grammar: degree and proportion stated precisely',
g_rule=['Give the numerator and the denominator: 3 of 41, not many.',
        'A percentage point is the difference between percentages; per cent is the proportion.',
        'A ratio compares two quantities: 2 titles to 1 owner.',
        'Avoid sharp, significant and substantial unless a number follows.'],
g_fig=('LOOSE',
       ['Many titles carried the phrase.',
        'Coverage rose significantly.',
        'A substantial proportion were unexplained.',
        'Mentions increased sharply.'],
       'PRECISE',
       ['Eleven of forty-one titles carried the phrase.',
        'Coverage rose by 4 percentage points, from 9 to 13 per cent.',
        'Eleven of forty-two, or about a quarter, were unexplained.',
        'Mentions rose from 4 to 19 items in nine days.'],
       'four claims of degree with no quantity in them',
       'four claims in which the quantity is stated'),
g_fig_cap='Significantly is the most expensive word in a brief; it has to be replaced by a number.',
g_a=[('Eleven ____________ forty-one titles carried the phrase.', 'of'),
     ('Coverage rose by four percentage ____________, from 9 to 13 per cent.', 'points'),
     ('Eleven of forty-two, or about a ____________, were unexplained.', 'quarter'),
     ('Mentions rose ____________ 4 to 19 items in nine days.', 'from'),
     ('The ____________ of titles to owners was two to one.', 'ratio'),
     ('Three of forty-one is a ____________ of about seven per cent.', 'share'),
     ('A rise to ten times the original is a ____________ increase.', 'tenfold'),
     ('The difference was ____________: one item in forty-two.', 'marginal'),
     ('Thirty-one of forty-two had a plausible cause, a ____________ of three in four.', 'proportion')],
g_b=[('State degree with ( a number / an adjective ).', ['a number', 'an adjective'], 0),
     ('Coverage rose by four percentage ____.', ['per cent', 'points', 'shares', 'ratios'], 1),
     ('Eleven ____ forty-one titles carried it.', ['from', 'of', 'in all', 'over'], 1),
     ('Which word needs a number after it?', ['eleven', 'significantly', 'four', 'half'], 1),
     ('A factor of about ten is', ['a percentage point', 'an order of magnitude', 'a ratio', 'a base rate'], 1),
     ('Which is precise?', ['many titles', 'eleven of forty-one titles', 'a substantial share', 'a sharp rise'], 1)],

d1=dict(title='How often does that happen anyway?',
        fig=(['Eleven titles, six days, no history.', 'And how often does that happen anyway?'],
             ['I do not know.', 'Then you do not have a finding.']),
        cap='Dr Hana Mourad and Karim Dalati, on the Tuesday.',
        lines=[('Hana', 'The Minister’s office has asked how often a phrase with no history '
                        'appears in eight or more titles in a week when nobody is coordinating '
                        'anything.'),
               ('Karim', 'That is the right question and I do not know the answer.'),
               ('Hana', 'Nor do I, and I sent up a note on Monday using the word assessed.'),
               ('Karim', 'I can get the answer. We hold the monitoring archive for the whole of '
                         'last year and the question is a count.'),
               ('Hana', 'How long?'),
               ('Karim', 'An hour for the count, a day for the part that matters, which is '
                         'looking at each case and asking whether something ordinary explains '
                         'it.'),
               ('Hana', 'Do both. And give me the unexplained ones separately, because those are '
                        'the comparison that counts.'),
               ('Karim', 'Forty-two cases, thirty-one with an obvious cause, eleven unexplained. '
                         'A court judgment, a report, a speech, in one case a football result '
                         'that produced a phrase in nine papers in two days.'),
               ('Hana', 'So about a quarter of the cases look like ours and are almost certainly '
                        'nothing.'),
               ('Karim', 'Or they are also coordinated and we have eleven campaigns a year we '
                         'have never noticed. The base rate does not tell you which.'),
               ('Hana', 'It tells me that my note was written as though I knew something I did '
                        'not know.'),
               ('Karim', 'It tells you the pattern is one of about eleven a year. What it is '
                         'remains open.')],
        a=[('What did the Minister’s office ask?', 'how often such a pattern occurs with no coordination'),
           ('How long did the count take?', 'an hour for the count and a day for examining each case'),
           ('What were the figures?', 'forty-two cases, thirty-one explained, eleven unexplained'),
           ('What was one organic cause?', 'a football result that produced a phrase in nine papers in two days'),
           ('What does the base rate not tell them?', 'whether the unexplained cases are coordinated')],
        b=[('I sent up a note on Monday using the word ____________.', 'assessed'),
           ('Give me the ____________ ones separately.', 'unexplained'),
           ('About a ____________ of the cases look like ours.', 'quarter'),
           ('The pattern is one of about ____________ a year.', 'eleven')]),
d2=dict(title='The word assessed',
        fig=(['Withdraw assessed?', 'And replace it with the count.'],
             ['The office will read that as retreat.', 'The office asked the question.']),
        cap='Hana and Lina Khalil, redrafting the note.',
        lines=[('Lina', 'If you withdraw the word assessed, the Minister’s office will read it '
                        'as the section retreating under a question.'),
               ('Hana', 'The Minister’s office asked the question. They will read it as the '
                        'section answering.'),
               ('Lina', 'Some of them will. There is also a reading in which Policy Planning '
                        'made a claim on Monday and unmade it on Wednesday.'),
               ('Hana', 'There is, and it is the correct reading. I did make a claim on Monday '
                        'that I was not in a position to make.'),
               ('Lina', 'You were in a position to make it. The pattern is real, the phrase has '
                        'no history, and four jurisdictions in six days is not nothing.'),
               ('Hana', 'The pattern is real. What I did not have was any idea how unusual it '
                        'was, and a pattern without a base rate is a description, not an '
                        'assessment. I used the word that means I had done work I had not done.'),
               ('Lina', 'Then say both things. The pattern is as described, it is one of about '
                        'eleven unexplained cases a year, and the section does not assess '
                        'coordination on the present material.'),
               ('Hana', 'That is the note. And I want the eleven cases listed in an annex, '
                        'because if any of them later turns out to have been coordinated the '
                        'base rate changes.'),
               ('Lina', 'Which would make your Monday note right after all.'),
               ('Hana', 'It would make it lucky. Those are different and the difference is the '
                        'whole of the profession.')],
        a=[('What does Lina warn about?', 'that withdrawing "assessed" will read as retreat under a question'),
           ('What does Hana say the correct reading is?', 'that she made a claim on Monday she was not in a position to make'),
           ('What makes a pattern a description rather than an assessment?', 'the absence of a base rate'),
           ('What goes in the annex?', 'the eleven unexplained cases'),
           ('What distinction does Hana draw at the end?', 'between being right and being lucky')],
        b=[('A pattern without a base rate is a ____________.', 'description'),
           ('Four jurisdictions in six days is not ____________.', 'nothing'),
           ('The section does not assess ____________ on the present material.', 'coordination'),
           ('It would make it ____________.', 'lucky')]),

speak=[('Put a number on it',
        ['Student A: make six claims of degree about your work.',
         'Student B: replace every adjective of degree with a number.',
         'Say which claims survived the exercise.']),
       ('Find the base rate',
        ['Describe something unusual you noticed at work.',
         'Your partner asks how often it happens anyway.',
         'Say how you would find out.']),
       ('Coordinated or not',
        ['In pairs, invent a pattern that looks coordinated.',
         'List three ordinary explanations for it.',
         'Say what evidence would separate them.'])],

ext_title='A pattern without a base rate is a description; the base rate is the work',
ext_fig=figs.datatable('PHRASES WITH NO 12-MONTH HISTORY, 8+ TITLES IN A WEEK',
                       ['Explanation', 'Cases', 'Share'],
                       [['a court judgment or legal ruling', '9', '21 per cent'],
                        ['a published report or statistic', '8', '19 per cent'],
                        ['a speech or interview', '7', '17 per cent'],
                        ['a sporting or cultural event', '4', '10 per cent'],
                        ['other identifiable cause', '3', '7 per cent'],
                        ['no cause identified', '11', '26 per cent']]),
ext_fig_cap='Forty-two cases in a year. The July pattern belongs to the last row, which holds '
            'a quarter of them.',
ext=[
 'Pattern detection across a monitoring archive is one of the genuinely new things available '
 'to an analytical unit. A phrase with no history appearing in eleven titles across four '
 'jurisdictions in six days is the kind of fact nobody could previously have established, '
 'because nobody could read eleven titles in four languages and remember what had not been '
 'said in the preceding year.',
 'The capability therefore produces a stream of patterns, and every one of them looks '
 'meaningful, because a pattern is by construction an arrangement that stands out. This is '
 'where analytical units get into difficulty, and the difficulty is not technical. It is that '
 'a pattern is only informative against a background, and the background is usually unknown '
 'to the people reading the pattern.',
 'The missing quantity has a name. A base rate is how often the thing you are looking at '
 'happens in the ordinary course of events, when nothing is being coordinated and nobody is '
 'doing anything. Until you know it, a pattern is a description of what you found and not a '
 'finding about the world. The July phrase appeared in eleven titles in six days with no '
 'history, and so did forty-one other phrases that year, of which thirty-one had causes as '
 'ordinary as a court judgment or a football result.',
 'Establishing a base rate is work and it is work the capability can do. The count took an '
 'hour across a year of archive. The examination of each case, asking whether something '
 'ordinary explains it, took a day of an officer’s time and could not be skipped, because a '
 'raw count of forty-two would have been as misleading in the other direction.',
 'What the base rate does and does not settle is worth being exact about. It did not show that '
 'the July phrase was uncoordinated. It showed that the pattern was one of about eleven '
 'unexplained cases a year, which means either that such patterns arise ordinarily or that '
 'the Ministry has eleven campaigns a year it has never examined. Both are live. What the base '
 'rate removed was the word assessed, and the honest form of the note gives the pattern, gives '
 'the rate, and declines the conclusion.'],
dp1=('Pattern and coordination analysis',
     'Analytical units applying automated pattern detection to media archives in 2025 '
     'introduced base-rate requirements after early reports treated clusters as evidence of '
     'coordination without establishing ordinary frequency.',
     'Source: reported practice in diplomatic open-source analysis, 2025–2026.'),
e_a=[('What is newly possible?', 'establishing that a phrase with no history appeared in many titles across jurisdictions in days'),
     ('Why does every pattern look meaningful?', 'because a pattern is by construction an arrangement that stands out'),
     ('What is a base rate?', 'how often the thing happens in the ordinary course of events'),
     ('How long did establishing it take?', 'an hour for the count and a day to examine each case'),
     ('What did the base rate settle?', 'that the pattern was one of about eleven unexplained cases a year, not that it was uncoordinated')],
e_b=[('Pattern detection across archives is new.', 'T'),
     ('A pattern is informative on its own.', 'F'),
     ('A raw count without examination would have been enough.', 'F'),
     ('The base rate showed the phrase was uncoordinated.', 'F'),
     ('Either such patterns are ordinary or there are unexamined campaigns.', 'T'),
     ('The honest note declines the conclusion.', 'T')],

w_model=(
 'Purpose: establish how often a phrase with no 12-month history appears in 8 or more '
 'monitored titles within 7 days, so that the July pattern can be read against an ordinary '
 'rate. Scope: the monitoring archive for the 12 months to 30 June, over the 41 listed '
 'titles; the July case itself is excluded from the count. Inputs: the archive and the '
 'section’s list of public events. Criteria: count every case meeting the stated test and give '
 'the number; for each case name any identifiable ordinary cause and the evidence for it; '
 'report explained and unexplained cases separately and give each as a share of the total; do '
 'not describe any case as coordinated. Done: 1 table of cases with causes and 2 counts, and '
 '1 annex listing the unexplained cases, within 2 working days. Fallback: where a case has 2 '
 'or more candidate causes, list both and count the case as explained only if 1 is '
 'documented.'),
w_fig=figs.spec_card('THE TASKING FOR A BASE RATE',
                     [('Purpose', 'read the July pattern against an ordinary rate'),
                      ('Scope', '12 months to 30 June, 41 titles; July excluded'),
                      ('Inputs', 'the archive and the list of public events'),
                      ('Criteria', 'count by the stated test; causes named; explained and unexplained split'),
                      ('Done', '1 table, 2 counts and 1 annex, within 2 working days'),
                      ('Fallback', '2 candidate causes: list both, explained only if documented')]),
w_fig_cap='The July case is excluded from its own base rate, which is the clause people forget.',
w_task='Write a base-rate tasking for a pattern in your own work.',
w_steps=['Say what the rate is for.',
         'State the test exactly, with its numbers.',
         'Exclude the case under examination from the count.',
         'Require causes to be named with evidence.',
         'Say what to do where two causes are possible.'],
w_bank=['Establish how often … , so that … can be read against …',
        'Cover … ; … is excluded from the count.',
        'Work from … and …',
        'Count every case meeting … ; for each case name … ; report … separately and give … ; do not describe …',
        'Where a case has 2 or more candidate causes, … and count … only if …'],
w_check=['Is the test stated with numbers?',
         'Is the case under examination excluded?',
         'Must causes be named with evidence?',
         'Is calling a case coordinated forbidden?'],

t_title='Coordinated narratives and chance patterns',
t_fig=figs.split('A PATTERN REPORT',
                 'Tells you',
                 ['what appeared, where and when',
                  'that there was no prior use',
                  'how close together the items fell',
                  'what the items have in common'],
                 'Does not tell you',
                 ['how often that happens anyway',
                  'whether anybody directed it',
                  'what an ordinary cause would look like',
                  'whether you have found 1 of 42']),
t_fig_cap='The right-hand column is the base rate and the conclusion, and neither is in the report.',
t_body=[
 'Pattern detection across an archive is genuinely new. Nobody could previously establish that '
 'a phrase with no use in twelve months appeared in eleven titles in four languages inside six '
 'days, because nobody could read that much or remember what had not been said. The capability '
 'produces such facts cheaply and continuously.',
 'It also produces a stream of patterns that all look meaningful, because a pattern is an '
 'arrangement that stands out by construction. The question that turns a pattern into a '
 'finding is always the same: how often does this happen when nothing is going on? That '
 'quantity is the base rate, and without it a pattern report is a description of what was '
 'found, not a statement about the world. Phrases with no history reached eight or more titles '
 'in a week forty-two times last year, and thirty-one of those had causes as ordinary as a '
 'court judgment or a football result.',
 'Establish the rate before writing the finding, and be exact about what it buys. It does not '
 'show that the case in front of you is innocent. It places it: one of about eleven '
 'unexplained cases a year, which means either that such clusters arise ordinarily or that '
 'there are eleven campaigns nobody has examined. Both remain open, and the word that has to '
 'come out of the note is assessed, because that word claims work that was never done.'],
t_say=[('Ask the question: ', 'How often does this happen when nothing is going on?'),
       ('State the rate: ', '42 cases in 12 months, 11 of them unexplained.'),
       ('Decline the word: ', 'The section does not assess coordination on this material.')],
t_bound=('A pattern report can establish what occurred, where and how closely together. It '
         'cannot establish that anybody directed it, and it has no view on how often the same '
         'shape arises by chance. Supplied with a cluster and asked whether it is a campaign, '
         'any method will find the cluster again; only the base rate changes the answer.'),
t_a=[('How often does this happen when nothing is going ____________?', 'on'),
     ('42 cases in 12 months, 11 of them ____________.', 'unexplained'),
     ('The section does not ____________ coordination on this material.', 'assess'),
     ('A pattern is an arrangement that stands out by ____________.', 'construction'),
     ('Causes as ordinary as a court judgment or a ____________ result.', 'football'),
     ('That word claims ____________ that was never done.', 'work')],
t_b_rubric='Rewrite each claim of degree with the quantity stated.',
t_b=[('Many titles carried the phrase.', 'eleven of forty-one titles carried the phrase'),
     ('Coverage rose significantly.', 'coverage rose by four percentage points, from 9 to 13 per cent'),
     ('A substantial proportion were unexplained.', 'eleven of forty-two, or about a quarter, were unexplained'),
     ('Mentions increased sharply.', 'mentions rose from four to nineteen items in nine days')],

case=dict(
 title='The Decision Room · The eleven unexplained cases',
 brief=[
  'The base rate is established: forty-two clusters in twelve months, thirty-one explained, '
  'eleven not. The July phrase is one of the eleven.',
  'Hana’s revised note gives the pattern, the rate, and declines to assess coordination. The '
  'Minister’s office has accepted it.',
  'The question now is what to do about the eleven. Karim wants each examined. Hana, who had '
  'overstated the July case, now says examining eleven cases on no evidence will manufacture '
  'eleven campaigns. Maya Sarkis asks who will be trained to tell the difference.'],
 exhibit=figs.datatable('THE ELEVEN UNEXPLAINED CLUSTERS',
                        ['', 'Figure', 'Note'],
                        [['unexplained clusters in 12 months', '11', '26 per cent of 42'],
                         ['average titles per cluster', '9.4', 'range 8 to 14'],
                         ['average window', '5.1 days', 'range 3 to 7'],
                         ['clusters involving 3+ jurisdictions', '4', 'including July'],
                         ['officer-days to examine one properly', '~3', 'estimate'],
                         ['officer-days available this quarter', '6', '—']]),
 exhibit_cap='Eleven cases, three officer-days each, and six days available.',
 exhibit_note='Four of the eleven involve three or more jurisdictions, which the section treats '
              'as the harder test to explain innocently.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Examine all eleven over three quarters. Until we have looked, we do not know whether '
          'the unexplained quarter is ordinary noise or eleven things we have missed.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Examine the four with three or more jurisdictions and leave the rest. If we examine '
          'eleven cases looking for coordination we will find eleven patterns, because that is '
          'what looking does, and I have just done it once.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Whichever you choose, the officers doing it need to know what an innocent cluster '
          'looks like. The football result taught the section more than the July case did.')],
 steps=[('Find it', 'How many officer-days would eleven cases take?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Hana fear examining all eleven?'),
        ('Weigh it', 'Knowing against manufacturing what you look for.'),
        ('Decide', 'How many cases are examined, and what is taught?')],
 analysis=[('Find it. How many officer-days are available this quarter?', 'six, against about three a case'),
           ('Compare it. What does Hana propose?', 'examining the four cases involving three or more jurisdictions'),
           ('Infer it. What is her reason?', 'that looking for coordination in eleven cases will find eleven patterns'),
           ('Weigh it. What does Maya say taught the section most?', 'the football result, as an example of an innocent cluster'),
           ('Decide. What would you do?', 'answers vary; the four harder cases fit the available days and test the claim')],
 decision='Write what is examined and how the examination is constrained.',
 decision_steps=['Say which of the eleven are examined, and why those.',
                 'Say what each examination must establish before concluding anything.',
                 'Say what is recorded about cases not examined.',
                 'Say what new officers are taught about innocent clusters.'],
 bank=['Of the 11, … are examined, on the ground that …',
       'Each examination must first … before …',
       'Cases not examined are …',
       'Officers are taught …',
       'This is reviewed …'],
 outcome='Four cases were examined. Three turned out to have ordinary causes that the original '
         'sweep had missed: a trade association’s report, a translated opinion article, and a '
         'phrase from a court filing published in two jurisdictions on the same day. The '
         'fourth, including the July case, remained unexplained after three officer-days, and '
         'was recorded as such. The base rate was revised to thirty-four explained and eight '
         'unexplained. Hana, who had expected the examinations to manufacture campaigns, says '
         'they did the opposite, and that she had been generalising from her own error on the '
         'Monday rather than from anything about examinations.',
 outcome_q=[('What did the four examinations find?', 'three ordinary causes previously missed, and one still unexplained'),
            ('What does Hana say she got wrong?', 'that she generalised from her own error rather than from evidence about examinations')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Is this a campaign?',
 task=['This is the tasking Policy Planning issued on the Friday, before the base rate '
       'existed.',
       'It produced a report describing a pattern as consistent with coordination, which went '
       'up on the Monday as an assessment.'],
 draft=['Look at the sudden appearance of this phrase.',
        'Tell us whether it indicates a coordinated campaign.',
        'Check how widely it has spread.',
        'Look for anything that stands out.',
        'Compare with normal coverage.',
        'As soon as you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one asks a question the material cannot answer.',
 asked=['A base rate from the archive',
        'A stated test with numbers',
        'Ordinary causes named with evidence'],
 back=['A pattern described as consistent with coordination',
       'No count of comparable cases',
       'No examination of ordinary causes'],
 gap='"Whether it indicates a coordinated campaign" cannot be answered from appearances, "how '
     'widely" sets no test, "anything that stands out" guarantees a finding, and "compare with '
     'normal coverage" does not say what normal means or where it comes from.',
 back_cap='A report that found exactly what it was sent to look for, which is what looking '
          'does.',
 back_note='Line two is the failure, and line four makes it certain: asked for anything that '
           'stands out, any method returns something.',
 diagnosis=[('[1] "the sudden appearance" — sudden against what period?', 'hidden assumption'),
            ('[2] "whether it indicates a coordinated campaign" — answerable from published material?', 'hidden assumption'),
            ('[3] "how widely it has spread" — widely by what measure?', 'unstated criterion'),
            ('[4] "anything that stands out" — how many items, and judged how?', 'unbounded quantity'),
            ('[5] "compare with normal coverage" — normal defined how, over what archive?', 'unstated criterion'),
            ('[6] "as soon as you can" — how many cases examined, in how long?', 'unbounded quantity')],
 rewrite='Rewrite the tasking so that a base rate is produced and coordination is not asserted.',
 scaffold=['What the rate is for and what it will be read against',
           'The archive and period covered, and what is excluded',
           'The archive and the list of public events',
           'The test with its numbers, causes named with evidence, explained and unexplained split, no assertion of coordination',
           'The table, the counts, the annex and the time',
           'What to do where a case has two candidate causes'],
 bank=['Establish how often … , so that …',
       'Cover … ; … is excluded from the count.',
       'Work from … and …',
       'Count every case meeting … ; name … ; report … separately; do not describe …',
       'Return 1 table … and 1 annex … , within …',
       'Where a case has 2 or more … , …'],
 check=['Is a base rate required before any conclusion?',
        'Is the test expressed in numbers?',
        'Is the case under examination excluded from its own rate?',
        'Is asserting coordination forbidden?'],
 model=['Establish how often a phrase with no 12-month history appears in 8 or more monitored titles within 7 days, so that the July pattern can be read against an ordinary rate',
        'The monitoring archive for the 12 months to 30 June, over the 41 listed titles; the July case itself is excluded from the count',
        'The archive and the section’s list of public events',
        'Count every case meeting the stated test and give the number; for each case name any identifiable ordinary cause and the evidence for it; report explained and unexplained cases separately and give each as a share of the total; do not describe any case as coordinated',
        '1 table of cases with causes and 2 counts, and 1 annex listing the unexplained cases, within 2 working days',
        'Where a case has 2 or more candidate causes, list both and count the case as explained only if 1 is documented'],
 cost='1 note to the Minister’s office using the word assessed on a pattern that was 1 of '
      'about 42 comparable clusters in a year, withdrawn 2 days later.'),

rev_fig=figs.split('DEGREE',
                   'Vague',
                   ['Many titles carried it.',
                    'Coverage rose significantly.',
                    'A substantial proportion.',
                    'Mentions increased sharply.'],
                   'Precise',
                   ['Eleven of forty-one titles.',
                    'Up 4 percentage points, 9 to 13.',
                    'Eleven of forty-two, a quarter.',
                    'From 4 to 19 items in nine days.']),
rev_fig_cap='Numerator and denominator; points, not per cent; a ratio stated as a comparison.',
rev=dict(
 read=[('A pattern becomes a finding when you have', ['more titles', 'a base rate', 'a sentiment score', 'four jurisdictions'], 1),
       ('How many comparable clusters occurred in a year?', ['eleven', 'forty-two', 'four', 'thirty-one'], 1),
       ('The base rate showed that the July case was', ['innocent', 'one of about eleven unexplained a year', 'coordinated', 'unique'], 1),
       ('In the Decision Room, what did three of four examinations find?', ['coordination', 'ordinary causes previously missed', 'nothing at all', 'a new phrase'], 1)],
 listen_text='A pattern is by construction an arrangement that stands out, so every pattern '
             'looks meaningful. The question that turns a pattern into a finding is always the '
             'same: how often does this happen when nothing is going on? That quantity is the '
             'base rate.',
 listen=[('An arrangement that stands ____________.', 'out'),
         ('Every pattern looks ____________.', 'meaningful'),
         ('How often does this happen when nothing is going ____________?', 'on'),
         ('That quantity is the ____________ rate.', 'base')],
 speak=['State three degrees from your work with numbers rather than adjectives.',
        'Say how you would establish a base rate for something you watch.'],
 write='Write one line declining to assess coordination on present material.',
 vocab=[('How often something occurs in the ordinary course of events is a ____________.', 'base rate'),
        ('An arrangement that looks designed and arose at random is a ____________.', 'chance pattern'),
        ('A case wrongly identified as what is being looked for is a ____________.', 'false positive'),
        ('The unit by which two percentages differ is a ____________.', 'percentage point'),
        ('A factor of about ten is an ____________.', 'order of magnitude')],
 gram=[('Eleven ____________ forty-one titles carried the phrase.', 'of'),
       ('Coverage rose by four percentage ____________, from 9 to 13 per cent.', 'points'),
       ('Eleven of forty-two, or about a ____________, were unexplained.', 'quarter'),
       ('The ____________ of titles to owners was two to one.', 'ratio'),
       ('A rise to ten times the original is a ____________ increase.', 'tenfold')]),

found=['Take one pattern you have noticed and ask how often it happens anyway.',
       'Replace every adjective of degree in your next brief with a number.',
       'Find a cluster in your field and look for an ordinary cause.',
       'Ask where your office would get a base rate from.'],
end_line='Asked for anything that stands out, any method will find something.',
end_next='Next: A Number Needs a Neighbour',
)
