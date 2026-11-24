# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='Correcting the Record Without a Quarrel',
gram='stance verbs: acknowledge, regret, reject, welcome',
ai='correcting a false claim without amplifying it',
strap='CEFR B2 · Grammar: stance verbs: acknowledge, regret, reject, welcome · '
      'AI: correcting a false claim without amplifying it',
cando=['choose stance verbs that say exactly how much you accept',
       'decide whether a false claim should be answered at all',
       'correct a factual error without repeating the claim',
       'say why a rebuttal can multiply the reach of what it answers',
       'write a six-line tasking for a correction'],

hero=('A NINE-HUNDRED-WORD REBUTTAL OF A CLAIM ELEVEN PEOPLE HAD READ',
      ['Five numbered points, each one sound, each one repeating the claim.',
       'A telephone call to the editor took four minutes and cost nothing.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A false figure in a weekly with a small circulation, noticed by the Mission at nine on Friday.',

warm=['When is it better not to answer a false claim?',
      'What does a long rebuttal do for the claim it answers?',
      'How would you correct one number without discussing anything else?'],

read=[
 'A weekly paper in Ostport prints a figure about the Mission’s consular caseload that is '
 'wrong by a factor of four, in a column of opinion, in a publication with a circulation of a '
 'few thousand and no detectable readership among officials.',
 'The Mission notices at nine on Friday. Layla Sayegh asks for a correction and receives nine '
 'hundred words in five numbered points, each one accurate, each one well argued, and each one '
 'quoting the claim it answers.',
 'It is a good rebuttal. It is also, if published, the most widely read account of the false '
 'figure that will ever exist, because the Mission’s own channels reach considerably more '
 'people than the weekly does.',
 'Two of the five points are not factual at all. They answer matters of interpretation — '
 'whether the Mission is sufficiently visible, whether it has been slow — on which the writer '
 'is entitled to his view and the Mission cannot be right.',
 'What the draft cannot know is the one fact that decides the question: the editor is reachable, '
 'has corrected a figure for the Mission before, and will do so again on a telephone call that '
 'takes four minutes.'],

dp1=('Amplification', 'Communication practice commonly warns that a public response to a '
     'low-reach claim can increase that claim’s audience substantially, and advises that the '
     'decision whether to respond be taken on reach and salience rather than on the merits of '
     'the claim alone.',
     'Source: general public communication guidance, 2025–2026.'),

c_a=[('How wrong was the figure?', 'by a factor of four'),
     ('What kind of publication was it?', 'a weekly with a small circulation'),
     ('What came back?', 'nine hundred words in five numbered points'),
     ('What would publishing it do?', 'make the false figure more widely read'),
     ('How many points were not factual?', 'two'),
     ('What decides the question?', 'that the editor is reachable and has corrected before')],

c_b=[('The figure appeared in a news report.', 'F'),
     ('The rebuttal was inaccurate.', 'F'),
     ('The Mission’s channels reach more people than the weekly.', 'T'),
     ('Matters of interpretation can be corrected.', 'F'),
     ('The editor had corrected a figure before.', 'T'),
     ('A telephone call took four minutes.', 'T')],

c_c=[('We ____________ that the figure published on Friday is incorrect.', 'note'),
     ('The Mission ____________ the suggestion that any case was concealed.', 'rejects'),
     ('We ____________ that the error was repeated in a second column.', 'regret'),
     ('The Mission ____________ the newspaper’s decision to publish a correction.', 'welcomes'),
     ('We ____________ that the caseload has grown, as the column says.', 'acknowledge'),
     ('The Mission cannot ____________ the characterisation of its consular work.', 'accept')],

c_d=[('Acknowledge means you ( deny it / accept the point ).', ['deny it', 'accept the point'], 1),
     ('Reject is used for ( an allegation / a figure ).', ['an allegation', 'a figure'], 0),
     ('Note is used when you ( record without accepting / agree ).',
      ['record without accepting', 'agree'], 0),
     ('Welcome is used for ( something the other side did well / an error ).',
      ['something the other side did well', 'an error'], 0),
     ('A rebuttal of a low-reach claim may ( enlarge its audience / end it ).',
      ['enlarge its audience', 'end it'], 0)],

c_e=('Which stance? Put each sentence in the right column.',
     [('We acknowledge that the caseload has grown', 'accepting'),
      ('The Mission rejects the suggestion of concealment', 'rejecting'),
      ('We note that the figure is incorrect', 'recording'),
      ('We welcome the published correction', 'accepting'),
      ('The Mission cannot accept that characterisation', 'rejecting'),
      ('We note the column of 14 March', 'recording')],
     ['accepting', 'rejecting', 'recording']),

v_fig_title='A WRONG NUMBER IN PRINT',
v_fig=[('doc', 'a false claim'), ('chart', 'a reach of a claim'), ('key', 'a single-sentence correction'),
       ('speech', 'a quiet word'), ('people', 'a complaint to a broadcaster'), ('clock', 'a decision not to respond')],
v_fig_cap='Six words for a decision that is about arithmetic, not about who is right.',

vocab=[
 ('a correction request', 'a request that a publication put a fact right'),
 ('a false claim', 'an assertion that is not true'),
 ('an amplification', 'the enlargement of a claim’s audience'),
 ('a reach of a claim', 'the number of people a claim has actually reached'),
 ('a letter to the editor', 'a letter written for publication'),
 ('a statement of fact', 'an assertion capable of being true or false'),
 ('a point-by-point rebuttal', 'a reply answering each assertion in turn'),
 ('a single-sentence correction', 'a correction confined to one sentence'),
 ('a complaint to a broadcaster', 'a formal objection made to a broadcasting organisation'),
 ('a factual error', 'a mistake about something checkable'),
 ('a matter of interpretation', 'a question on which views may differ legitimately'),
 ('a decision not to respond', 'a deliberate choice to say nothing'),
 ('a response in kind', 'a reply matching the tone of the original'),
 ('a quiet word', 'an informal approach made privately'),
 ('an escalation', 'the raising of a matter to a higher level'),
 ('a published correction', 'a correction printed or broadcast'),
 ('a circulation figure', 'the number of copies a publication distributes'),
 ('a repetition of a claim', 'the restating of an assertion by somebody else'),
 ('a search result', 'what appears when a subject is looked up'),
 ('a record set straight', 'a false impression formally put right')],

v_a=[('The enlargement of a claim’s audience is an ____________.', 'amplification'),
     ('A question on which views may differ is a matter of ____________.', 'interpretation'),
     ('An informal approach made privately is a ____________ word.', 'quiet'),
     ('A reply answering each assertion in turn is a ____________ rebuttal.', 'point-by-point'),
     ('The number of copies a publication distributes is a ____________ figure.', 'circulation'),
     ('A deliberate choice to say nothing is a decision not to ____________.', 'respond'),
     ('A correction confined to one sentence is a ____________ correction.', 'single-sentence'),
     ('The raising of a matter to a higher level is an ____________.', 'escalation')],

v_b=[('A correction request is a request', 'that a publication put a fact right.'),
     ('A statement of fact is an assertion', 'capable of being true or false.'),
     ('A reach of a claim is the number of people', 'a claim has actually reached.'),
     ('A response in kind is a reply', 'matching the tone of the original.'),
     ('A record set straight is a false impression', 'formally put right.')],

g_title='Grammar: stance verbs: acknowledge, regret, reject, welcome',
g_rule=['Acknowledge accepts a point: we acknowledge that the caseload has grown.',
        'Note records something without accepting it: we note the column of 14 March.',
        'Regret expresses regret about a fact, usually your own: we regret that the error was '
        'repeated.',
        'Reject refuses an allegation, and cannot accept refuses a characterisation; welcome '
        'approves something the other party has done.'],
g_fig=('UNDIFFERENTIATED',
       ['We disagree with the whole article.',
        'The article is wrong about everything.',
        'We are unhappy about the second column.',
        'The newspaper finally did the right thing.'],
       'PRECISELY PLACED',
       ['We acknowledge that the caseload has grown; the figure given for it is wrong.',
        'The Mission rejects the suggestion that any case was concealed.',
        'We regret that the error was repeated in a second column.',
        'The Mission welcomes the newspaper’s decision to publish a correction.'],
       'four sentences that reject or accept everything at once',
       'the same four, each placing exactly one stance on exactly one point'),
g_fig_cap='A stance verb is a measuring instrument. Reject a claim, note a column, welcome a correction.',

g_a=[('We ____________ that the figure published on Friday is incorrect.', 'note'),
     ('The Mission ____________ the suggestion that any case was concealed.', 'rejects'),
     ('We ____________ that the error was repeated in a second column.', 'regret'),
     ('The Mission ____________ the newspaper’s decision to publish a correction.', 'welcomes'),
     ('We ____________ that the caseload has grown, as the column says.', 'acknowledge'),
     ('The Mission cannot ____________ the characterisation of its consular work.', 'accept'),
     ('We ____________ the editor’s letter of 18 March without further comment.', 'note'),
     ('The Mission ____________ any suggestion of discourtesy to applicants.', 'rejects'),
     ('We ____________ the delay in replying to the enquiry of 2 March.', 'regret')],

g_b=[('( We acknowledge that the caseload has grown / We disagree with the article ) — accept what is true.', ['We acknowledge that the caseload has grown', 'We disagree with the article'], 0),
     ('The Mission ( rejects the suggestion of concealment / is unhappy about the suggestion ) — an allegation.',
      ['rejects the suggestion of concealment', 'is unhappy about the suggestion'], 0),
     ('( We note the column of 14 March / We accept the column of 14 March ) — record only.',
      ['We note the column of 14 March', 'We accept the column of 14 March'], 0),
     ('( We welcome the published correction / The newspaper finally did the right thing ) — formal approval.',
      ['We welcome the published correction', 'The newspaper finally did the right thing'], 0),
     ('The Mission ( cannot accept that characterisation / rejects that characterisation ) — of a description, not an allegation.',
      ['cannot accept that characterisation', 'rejects that characterisation'], 0),
     ('( We regret the delay in replying / We reject the delay in replying ) — your own conduct.',
      ['We regret the delay in replying', 'We reject the delay in replying'], 0)],

d1=dict(
 title='Nine hundred words for eleven readers',
 fig=(['Five points, nine hundred words.', 'And how many people read the column?'],
      ['A few thousand copies.', 'And how many will read your reply?']),
 cap='Layla Sayegh and Dr Suhair Kanaan, Friday morning.',
 lines=[('Suhair', 'What is the claim?'),
        ('Layla', 'A consular figure, wrong by a factor of four, in a weekly opinion column.'),
        ('Suhair', 'Circulation?'),
        ('Layla', 'A few thousand. No officials read it that we know of.'),
        ('Suhair', 'And your draft?'),
        ('Layla', 'Nine hundred words, five numbered points, every one of them correct.'),
        ('Suhair', 'Which our own channels would put in front of ten times as many people as the column reached.'),
        ('Layla', 'Including the false figure, quoted five times.'),
        ('Suhair', 'Quoted five times, in a document that will be searchable for years.'),
        ('Layla', 'Then the figure stands uncorrected.'),
        ('Suhair', 'Or you telephone the editor, who corrected a figure for us in October.'),
        ('Layla', 'Four minutes, and nobody else ever knows it happened.')],
 a=[('How wrong was the figure?', 'by a factor of four'),
    ('What was the circulation?', 'a few thousand'),
    ('How long was the draft?', 'nine hundred words, five points'),
    ('What would publication do?', 'put the false figure before far more people'),
    ('What does Suhair suggest instead?', 'telephoning the editor')],
 b=[('No officials read it that we ____________ of.', 'know'),
    ('Quoted five ____________.', 'times'),
    ('Searchable for ____________.', 'years'),
    ('Nobody else ever ____________ it happened.', 'knows')]),

d2=dict(
 title='Two points that cannot be corrected',
 fig=(['Point four says we are not visible enough.', 'And is he wrong?'],
      ['He is entitled to think it.', 'Then it is not a correction.']),
 cap='Layla and Ambassador Walid Hourani, after the telephone call.',
 lines=[('Hourani', 'The figure is corrected?'),
        ('Layla', 'In next week’s edition, one sentence, and a note on the website today.'),
        ('Hourani', 'Good. And the rest of your five points?'),
        ('Layla', 'Two were factual and are dealt with. Two are not factual at all.'),
        ('Hourani', 'Which two?'),
        ('Layla', 'That the Mission is insufficiently visible, and that it has been slow.'),
        ('Hourani', 'Both of which a reader may believe, and neither of which is a matter of fact.'),
        ('Layla', 'The draft answered them in the same numbered style as the figure.'),
        ('Hourani', 'Which is how a correction becomes a quarrel. We correct facts and we live with opinions.'),
        ('Layla', 'And if the opinion is unfair?'),
        ('Hourani', 'Then it is unfair, and the remedy is to be more visible, not to write him a letter.'),
        ('Layla', 'And if the same writer repeats the figure next month, after a correction?')],
 unresolved=True,
 a=[('How was the figure corrected?', 'one sentence next week and a website note'),
    ('How many points were factual?', 'two'),
    ('What were the other two?', 'that the Mission is not visible and has been slow'),
    ('Why can they not be corrected?', 'they are not matters of fact'),
    ('What is the remedy for the visibility point?', 'to be more visible')],
 b=[('One sentence, and a note on the ____________.', 'website'),
    ('How a correction becomes a ____________.', 'quarrel'),
    ('We correct facts and we live with ____________.', 'opinions'),
    ('The remedy is to be more ____________.', 'visible')]),

speak=[('Place the stance',
        ['Make nine sentences using acknowledge, note, regret, reject and welcome.',
         'Your partner says how much each one accepts.',
         'Correct any that reject a fact or note an allegation.']),
       ('Fact or interpretation?',
        ['List six statements made about an organisation you know.',
         'Sort them into facts and interpretations.',
         'Say which could be corrected and which could not.']),
       ('Do we answer at all?',
        ['Describe a false claim and where it appeared.',
         'Estimate its reach and the reach of your reply.',
         'Decide and defend whether to respond publicly.'])],

ext_title='A rebuttal is a language task, and whether to publish one is an arithmetic task',
ext_fig=figs.datatable('WHO WOULD READ WHAT',
                       ['Document', 'Reach', 'Contains the false figure?'],
                       [['the original column', 'a few thousand copies', 'once'],
                        ['our 900-word rebuttal', 'about ten times that', 'five times'],
                        ['a one-sentence correction in the weekly', 'the same readers', 'no'],
                        ['a note on the editor’s website', 'small, but searchable', 'no'],
                        ['a telephone call to the editor', 'two people', 'no'],
                        ['no response at all', 'nobody new', 'no']]),
ext_fig_cap='The strongest document on the list is also the one that spreads the error furthest.',
ext=[
 'Drafting a correction is a task a system does well, and it does the hardest part of it well: '
 'it separates the assertions, answers each in turn, keeps the tone level and avoids the two '
 'temptations of an aggrieved press officer, which are sarcasm and length.',
 'The draft it produced here is accurate on both factual points, and an official who published '
 'it would be publishing nothing untrue. The difficulty is not in the text at all, which is why '
 'it is easy to miss.',
 'Whether to answer a claim depends on its reach, on who has noticed it, on whether anybody '
 'with influence believes it, and on what answering would do to all three. None of that is in '
 'the claim, and none of it is in the draft.',
 'A system also treats every assertion as answerable, because every assertion is answerable in '
 'language. It does not distinguish a wrong number, which can be corrected, from a view about '
 'visibility, which cannot be corrected and can only be argued with, and arguing is a quarrel.',
 'So do the arithmetic first and the drafting second. Establish the reach of the claim and the '
 'reach of every available answer, separate the facts from the interpretations, and start with '
 'the smallest instrument that works, which is very often a telephone call to an editor who has '
 'done it before.'],

dp2=('Fact and comment', 'Press practice commonly distinguishes between statements of fact, '
     'which are subject to correction, and expressions of opinion, which are not, and '
     'complaints procedures are generally confined to the former.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('What does a drafted correction do well?', 'separates assertions and keeps the tone level'),
     ('What are the two temptations?', 'sarcasm and length'),
     ('What does the decision to answer depend on?', 'reach, who noticed and what answering would do'),
     ('Why does a system treat everything as answerable?', 'every assertion is answerable in language'),
     ('What is the smallest instrument?', 'a telephone call to the editor')],
e_b=[('The draft contained untrue statements.', 'F'),
     ('Reach is part of the claim itself.', 'F'),
     ('A view about visibility can be corrected.', 'F'),
     ('Arguing with an opinion is a quarrel.', 'T'),
     ('Arithmetic comes before drafting.', 'T'),
     ('A telephone call may be enough.', 'T')],

w_model='Purpose: so that the incorrect consular figure is corrected without increasing the '
        'number of people who see it. Scope: the figure in the column of 14 March; the writer’s '
        'views on visibility are not answered. Inputs: the column, our consular statistics for '
        'the period, the publication’s circulation figure, and the Mission’s record of previous '
        'contact with the editor. Criteria: the factual errors listed separately from the '
        'matters of interpretation; for each factual error, the smallest instrument that would '
        'correct it; no draft that repeats the incorrect figure more than once. Done: a '
        'recommendation with the Ambassador by 12:00 on Friday. Fallback: if the figure is '
        'repeated after a correction, the matter is escalated in writing and not in public.',
w_fig=figs.spec_card('SIX LINES FOR A CORRECTION',
                     [('Purpose', 'correct the figure without spreading it'),
                      ('Scope', 'the figure only; not the views'),
                      ('Inputs', 'the column, our statistics, circulation, previous contact'),
                      ('Criteria', 'facts apart from views; smallest instrument; one repetition'),
                      ('Done', 'recommendation by 12:00 on Friday'),
                      ('Fallback', 'repetition: escalate in writing, not in public')]),
w_fig_cap='Line 4 holds three rules, and the third one alone would have halved the draft.',
w_task='Write a six-line tasking for a correction.',
w_steps=['Line 1: what the correction must achieve and what it must avoid.',
         'Line 2: which claim, and what is not being answered.',
         'Line 3: the claim, your own data, the reach, and your record with the outlet.',
         'Line 4: the separation, the instrument and the repetition limit.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what happens if the claim is repeated.'],
w_bank=['Purpose: so that … is corrected without increasing the number of people who see it',
        'Scope: the … in the column of … ; the writer’s views on … are not answered',
        'Inputs: the column, our … for the period, the circulation figure, and our record of contact with … ',
        'Criteria: factual errors listed separately from matters of interpretation; the smallest instrument for each; no draft repeating the figure more than once',
        'Done: a recommendation with … by … ',
        'Fallback: if the claim is repeated after a correction, … '],
w_check=['Does line 1 name amplification as the thing to avoid?',
         'Are interpretations excluded from the correction?',
         'Is the smallest instrument required?',
         'Is there a limit on repeating the false figure?'],

t_title='Correcting a false claim without amplifying it',
t_fig=figs.split('A FALSE CLAIM IN PRINT',
                 'Ask for this',
                 ['the factual errors, listed',
                  'the matters of interpretation, listed',
                  'a one-sentence correction of each fact',
                  'the smallest instrument that would work'],
                 'Decide this yourself',
                 ['the reach of the claim',
                  'the reach of each answer',
                  'whether anybody who matters noticed',
                  'whether a telephone call will do']),
t_fig_cap='The left column is drafting. The right column is the decision, and it is arithmetic.',
t_body=[
 'Ask first for a sorting rather than a draft: which assertions in this piece are statements of '
 'fact, which are expressions of opinion, and for each factual error what the correct figure is '
 'with its source. That list is the useful product, and it takes a minute.',
 'Then ask for the shortest possible correction of each factual error — one sentence, with the '
 'false figure quoted once at most and preferably not at all — and ask explicitly for the '
 'smallest instrument: a telephone call, a letter to the editor, a note on a website, a formal '
 'complaint.',
 'Then do the part no draft can do. Find out the reach of the claim and the reach of your '
 'possible answers, ask whether anybody whose opinion matters has seen it, and remember that an '
 'answer published by a Mission travels further and lasts longer than the column it answers.'],
t_say=[('Ask for the sorting: ', 'Which assertions here are facts and which are opinions?'),
       ('Ask for the shortest form: ', 'One sentence per factual error, quoting the wrong figure once at most.'),
       ('Ask for the instrument: ', 'What is the smallest step that would correct this?')],
t_bound='A draft knows the words of a claim and nothing about its reach. It does not know the '
        'circulation of the publication, whether any official has read it, whether the editor '
        'takes telephone calls, or how long your own reply will remain searchable.',
t_a=[('Which assertions here are facts and which are ____________?', 'opinions'),
     ('One sentence per factual ____________.', 'error'),
     ('Quoting the wrong figure once at ____________.', 'most'),
     ('What is the ____________ step that would correct this?', 'smallest'),
     ('It does not know the ____________ of the publication.', 'circulation'),
     ('Or how long your own reply will remain ____________.', 'searchable')],
t_b_rubric='Say whether each can be corrected or only argued with.',
t_b=[('A consular figure wrong by a factor of four.', 'corrected: it is a fact with a source'),
     ('A view that the Mission is insufficiently visible.', 'argued with: it is an opinion'),
     ('A date given wrongly as March rather than May.', 'corrected: the record shows it'),
     ('A view that the Mission has been slow.', 'argued with, or answered by being faster')],

case=dict(
 title='The Decision Room · The most widely read version of a false figure',
 brief=[
  'A weekly publication with a circulation of a few thousand prints an opinion column '
  'containing a consular figure wrong by a factor of four. No official readership is known, and '
  'nobody has raised it with the Mission.',
  'A drafted reply runs to nine hundred words in five numbered points. All five are accurate in '
  'what they say. Two answer factual errors; two answer opinions about visibility and speed; one '
  'answers a characterisation.',
  'Published on the Mission’s own channels, the reply would reach perhaps ten times the column’s '
  'readership, would quote the false figure five times, and would remain searchable '
  'indefinitely. The editor, meanwhile, corrected a figure for the Mission five months earlier '
  'after a four-minute telephone call.'],
 exhibit=figs.datatable('FIVE POINTS, SORTED',
                        ['Point', 'Kind', 'Can it be corrected?'],
                        [['the consular figure', 'fact', 'yes, with our statistics'],
                         ['the date of the visa change', 'fact', 'yes, with the notice'],
                         ['the Mission is not visible enough', 'opinion', 'no'],
                         ['the Mission has been slow', 'opinion', 'no'],
                         ['consular work is treated as low priority', 'characterisation', 'no'],
                         ['total requiring a correction', '2 of 5', '—']]),
 exhibit_cap='Two of five points are correctable, and the draft answered all five in the same voice.',
 exhibit_note='Answering an opinion in the register of a correction converts a disagreement '
              'into a quarrel, and a quarrel is reported where a correction is not.',
 voices=[('Layla Sayegh', 'press and cultural attaché',
          'Nine hundred accurate words in four minutes, and better tempered than anything I would have written.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And it would have taken a figure eleven people had seen and put it in front of thousands.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'Correct the two facts, by telephone, and answer the opinions by being visible next month.')],
 steps=[('Find it', 'What did the draft contain?'),
        ('Compare it', 'The reach of the column against the reach of the reply.'),
        ('Infer it', 'Why does a draft answer everything?'),
        ('Weigh it', 'A strong public reply against a four-minute call.'),
        ('Decide', 'What is the Mission’s rule for false claims?')],
 analysis=[('Find it. What was in it?', 'five accurate points, nine hundred words'),
           ('Compare it. Which reach is larger?', 'the Mission’s own channels, by about ten times'),
           ('Infer it. Why answer everything?', 'every assertion is answerable in language'),
           ('Weigh it. What is the trade?', 'a satisfying reply against a wider false figure'),
           ('Decide. What is the rule?', 'sort facts from opinions and use the smallest instrument')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is established before anything is drafted.',
                 'Say how assertions are sorted.',
                 'Say which instrument is used first.',
                 'Say what is done about opinions.'],
 bank=['Before anything is drafted, the reach of the claim and the reach of each possible answer are established.',
       'Assertions are sorted into statements of fact, which may be corrected, and opinions, which may not.',
       'The smallest instrument that would correct a fact is used first, beginning with a telephone call.',
       'Opinions are answered by conduct rather than by correspondence.'],
 outcome='Layla telephones the editor at half past eleven. The figure is corrected in one '
         'sentence in the following edition and in a dated note on the website the same day. The '
         'false figure is never repeated by the Mission. The two opinions go unanswered, and in '
         'the following quarter the Mission holds three public events in Ostport, which is the '
         'only answer to a charge of invisibility that has ever worked.',
 outcome_q=[('When did she telephone?', 'at half past eleven'),
            ('How was the figure corrected?', 'one sentence and a dated website note'),
            ('How often did the Mission repeat the figure?', 'never'),
            ('What happened to the two opinions?', 'they went unanswered'),
            ('How were they answered in the end?', 'by three public events in Ostport')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Draft me a reply to this',
 task=['A press attaché asked for a reply to a column containing a false figure.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Draft me a reply to this.',
        'He has got the figures completely wrong.',
        'Take it point by point.',
        'Be firm but polite.',
        'Cover everything he says.',
        'I would like to send it today.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one guarantees a quarrel about two opinions.',
 asked=['A reply', 'Point by point', 'Everything he says'],
 back=['900 words, 5 points', '2 opinions answered as if factual', '5 repetitions of the false figure'],
 gap='Nobody said that opinions cannot be corrected, or that the reply must not spread the figure.',
 back_cap='Five numbered points, three of which no correction procedure anywhere would accept.',
 back_note='Cover everything he says is the instruction that turns a correction into a '
           'dispute, because three of the five things he says are not capable of being right '
           'or wrong.',
 diagnosis=[('“cover everything”', 'unbounded quantity'),
            ('“point by point”', 'unbounded quantity'),
            ('“a reply”', 'undefined done'),
            ('“firm but polite”', 'undefined done'),
            ('“today”', 'missing condition'),
            ('“this”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that only facts are corrected and the figure is not spread.',
 scaffold=['what the correction must achieve and avoid',
           'which claim, and what is not answered',
           'the column, your data, the reach and your record with the outlet',
           'the separation of fact from opinion, the instrument and the repetition limit',
           'what is delivered, to whom and when',
           'what happens if the claim is repeated'],
 bank=['Purpose: so that the incorrect figure is corrected without increasing the number of people who see it',
       'Scope: the figure in the column of … ; the views on visibility and speed are not answered',
       'Inputs: the column, our statistics for the period, the circulation figure, and our record of contact with the editor',
       'Criteria: facts listed separately from interpretations; the smallest instrument for each; no draft repeating the figure more than once',
       'Done: a recommendation with the Ambassador by … ',
       'Fallback: if the figure is repeated after a correction, the matter is escalated in writing, not in public'],
 check=['Does it forbid answering the opinions?',
        'Is the smallest instrument required?',
        'Is repetition of the false figure limited?',
        'Is the reach of the claim an input?'],
 model=['so that the incorrect consular figure is corrected without increasing the number of people who see it',
        'the figure in the column of 14 March; the writer’s views on visibility and speed are not answered',
        'the column, our consular statistics for the period, the publication’s circulation figure, and our record of previous contact with the editor',
        'factual errors listed separately from matters of interpretation; the smallest instrument that would correct each; no draft repeating the figure more than once',
        'a recommendation with the Ambassador by 12:00 on Friday',
        'if the figure is repeated after a correction, the matter is escalated in writing and not in public'],
 cost='5 repetitions of a false figure in 1 reply, before an audience about 10 times the size '
      'of the column’s.'),

feet=dict(
 title='On Your Feet · The writer telephones you about your correction',
 setting=[
  'The editor has agreed to correct the figure. Twenty minutes later the writer of the column '
  'telephones you himself, courteous and annoyed, to ask why you went to his editor rather than '
  'to him.',
  'He also wants to know whether you dispute the rest of his column, and he is plainly hoping '
  'you will, because a quarrel with a Mission is a better column than the one he wrote.'],
 ladder=[('Why go to my editor?', 'the procedural complaint you must answer plainly'),
         ('Do you dispute the rest?', 'the invitation to a quarrel'),
         ('So you accept the rest of it', 'the inference you must not leave either')],
 cap='Three turns on the telephone, with a second column already half written.',
 turns=[('Turn 1 · The writer', 'Why did you go to my editor rather than to me?'),
        ('Turn 2 · The writer', 'Do you dispute the rest of what I wrote?'),
        ('Turn 3 · The writer', 'Then you accept the rest of it.')],
 holds=['I went to the editor because a published figure is corrected by the publication, and that is the only reason.',
        'I am happy to talk to you directly, and I would rather do it before publication than after.',
        'One figure was wrong and it is being corrected. On the rest, you are entitled to your view.',
        'I neither accept nor dispute an opinion; it is not mine to correct.',
        'If you think the Mission is not visible enough, come to the three events we are holding in Ostport.',
        'And if you want the consular figures for any period, ask me and you will have them the same day.'],
 redline='You must not dispute the opinions, you must not accept them either, and you must not '
         'be drawn into saying anything about the writer or the editor. Do not imply that going '
         'to the editor was a complaint about him.',
 score=['Explained the procedural choice in one plain sentence.',
        'Offered direct contact in future, without apologising for the correction.',
        'Confined the correction to the figure.',
        'Refused both to accept and to dispute the opinions.',
        'Offered something concrete: events and figures on request.'],
 a=[('Why did you go to the editor?', 'because a publication corrects its own published figure'),
    ('What do you offer him?', 'direct contact before publication in future'),
    ('What is being corrected?', 'one figure'),
    ('What do you do with his opinions?', 'neither accept nor dispute them'),
    ('What concrete thing do you offer?', 'the events, and the figures on request'),
    ('What must you not imply?', 'that you complained about him')]),

rev_fig=figs.split('A FALSE CLAIM',
                   'Correct a fact',
                   ['a figure with a source',
                    'a date the record shows',
                    'a name or a title',
                    'by the smallest instrument'],
                   'Do not correct a view',
                   ['that you are not visible',
                    'that you were slow',
                    'that your priorities are wrong',
                    'that your work is unimpressive']),
rev_fig_cap='The left column ends in a sentence. The right column ends in a quarrel, or in better conduct.',
rev=dict(
 read=[('How wrong was the figure?',
        ['by a factor of four', 'by one', 'by half', 'by ten'], 0),
       ('How long was the drafted reply?',
        ['nine hundred words', 'one sentence', 'four pages', 'eleven words'], 0),
       ('How many of the five points were factual?',
        ['two', 'five', 'none', 'four'], 0),
       ('What corrected the figure in the end?',
        ['a telephone call to the editor', 'a public statement',
         'a formal complaint', 'a letter to the editor'], 0)],
 listen_text='Ask which assertions are facts and which are opinions, and for the shortest '
             'correction of each factual error, quoting the wrong figure once at most. Then '
             'establish the reach of the claim and of every answer, and use the smallest '
             'instrument.',
 listen=[('Ask which assertions are facts and which are ____________.', 'opinions'),
         ('The shortest correction of each factual ____________.', 'error'),
         ('Quoting the wrong figure once at ____________.', 'most'),
         ('Then establish the ____________ of the claim.', 'reach')],
 speak=['Make nine sentences using acknowledge, note, regret, reject and welcome.',
        'Then decide aloud whether a false claim should be answered publicly, and why.'],
 write='Write a six-line tasking for a correction.',
 vocab=[('The enlargement of a claim’s audience is an ____________.', 'amplification'),
        ('A question on which views may differ is a matter of ____________.', 'interpretation'),
        ('An informal approach made privately is a ____________ word.', 'quiet'),
        ('A deliberate choice to say nothing is a decision not to ____________.', 'respond')],
 gram=[('We ____________ the editor’s letter of 18 March.', 'note'),
       ('The Mission ____________ the suggestion of concealment.', 'rejects'),
       ('We ____________ the delay in replying.', 'regret'),
       ('The Mission ____________ the published correction.', 'welcomes')]),

found=['Establish the reach of a claim before you draft a word.',
       'Sort assertions into facts, which you may correct, and opinions, which you may not.',
       'Use the smallest instrument first, and telephone before you publish.',
       'Quote a false figure once at most, and preferably never.'],
end_line='It will answer every sentence. Only you know which ones are worth answering.',
end_next='Next: A Crisis at Post')
