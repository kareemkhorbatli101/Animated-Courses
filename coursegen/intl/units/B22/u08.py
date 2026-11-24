# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='Saying What You Do Not Know',
gram='hedges, boosters and neutral verbs',
ai='saying what you do not know, in a language that is not yours',
strap='CEFR B2 · Grammar: hedges, boosters and neutral verbs · '
      'AI: saying what you do not know, in a language that is not yours',
cando=['hedge and boost accurately rather than vaguely',
       'say that you do not know without sounding evasive',
       'choose neutral verbs for contested facts',
       'commit to a time by which you will answer',
       'write a six-line tasking for an answer you cannot yet give'],

hero=('“I DO NOT KNOW” IS FOUR WORDS, AND IT TOOK ELEVEN TO AVOID THEM',
      ['The answer sounded informed and committed to nothing.',
       'The next morning’s headline was about evasion.'],
      [(1040, 'grey', 'long'), (300, 'teal', 'short'), (280, 'blue', 'short')]),
hero_cap='A question at a press conference, and two ways of not knowing the answer.',

warm=['When did you last say “I do not know” at work?',
      'What stopped you, if you did not?',
      'What does an audience hear instead?'],

read=[
 'The question at the press conference is factual and specific: how many applications were '
 'refused last year. Nobody in the room knows, including the Ambassador.',
 'The answer given is eleven words long, contains two hedges and a booster, and commits to '
 'nothing: the figures are of course kept under continuous review and will be published in the '
 'usual way.',
 'The next morning’s coverage is not about applications. It is about an ambassador who would '
 'not answer a simple question, which is a story the Mission has manufactured for itself.',
 'What was available was shorter: I do not know, I shall find out, and I shall telephone you '
 'before five o’clock tomorrow. Three clauses, one admission and one deadline.',
 'In a second language the temptation is stronger, because a prepared formula is easier to say '
 'than an admission. The formula, however, is what sounds evasive, and in any language an '
 'admission with a deadline sounds like competence.'],

dp1=('Admissions of ignorance', 'Communication practice commonly finds that an express '
     'statement of what is not known, coupled with a specific undertaking to revert, is '
     'received more favourably than a general formulation that avoids the question.',
     'Source: general media practice literature, 2025–2026.'),

c_a=[('What was the question?', 'how many applications were refused last year'),
     ('Who knew the answer?', 'nobody in the room'),
     ('How long was the answer given?', 'eleven words'),
     ('What did the coverage concern?', 'an ambassador who would not answer'),
     ('What was the better answer?', 'I do not know, I shall find out, and I shall telephone you by five'),
     ('Why is the temptation stronger in a second language?', 'a formula is easier to say than an admission')],

c_b=[('Somebody in the room knew the figure.', 'F'),
     ('The answer committed the Mission to something.', 'F'),
     ('The coverage was about applications.', 'F'),
     ('An admission with a deadline sounds competent.', 'T'),
     ('A prepared formula is harder to say.', 'F'),
     ('Three clauses were enough.', 'T')],

c_c=[('The figure ____________ to be about nine hundred, but I shall confirm it.', 'appears'),
     ('I ____________ not know, and I shall find out.', 'do'),
     ('It is ____________ that the number rose, though I cannot say by how much.', 'likely'),
     ('I am ____________ that the figure is published annually.', 'certain'),
     ('The Mission ____________ no view on the merits of individual cases.', 'takes'),
     ('I ____________ the question away and answer it tomorrow.', 'shall take')],

c_d=[('A hedge ( weakens a claim honestly / hides a claim ).', ['weakens a claim honestly', 'hides a claim'], 0),
     ('A booster ( strengthens a claim / softens it ).', ['strengthens a claim', 'softens it'], 0),
     ('A neutral verb is one that ( takes no side / is passive ).',
      ['takes no side', 'is passive'], 0),
     ('Two hedges and a booster in one sentence usually sound ( evasive / precise ).',
      ['evasive', 'precise'], 0),
     ('An admission needs ( a deadline / an apology ).', ['a deadline', 'an apology'], 0)],

c_e=('Hedge, booster or neutral? Put each expression in the right column.',
     [('it appears that', 'hedge'), ('I am certain that', 'booster'),
      ('the Mission takes no view', 'neutral'), ('it is likely that', 'hedge'),
      ('without any doubt', 'booster'), ('the position is that', 'neutral')],
     ['hedge', 'booster', 'neutral']),

v_fig_title='NOT KNOWING IN SIX WORDS',
v_fig=[('speech', 'an admission of ignorance'), ('key', 'a limit of knowledge'), ('clock', 'a time by which an answer will come'),
       ('doc', 'a question taken away'), ('chart', 'a refusal to speculate'), ('people', 'a referral to a colleague')],
v_fig_cap='Six words for the moment at which not knowing becomes either competence or evasion.',

vocab=[
 ('an admission of ignorance', 'saying plainly that you do not know'),
 ('a limit of knowledge', 'the point beyond which you cannot speak'),
 ('a statement of what is being established', 'saying what is being found out'),
 ('a refusal to speculate', 'declining to guess'),
 ('a competence of another authority', 'a matter belonging to somebody else'),
 ('an undertaking to revert', 'a promise to come back with an answer'),
 ('a time by which an answer will come', 'a deadline you set yourself'),
 ('a question taken away', 'a question accepted for later answer'),
 ('a confidence not feigned', 'assurance that is genuine'),
 ('a hedge that is honest', 'a qualification that reflects real doubt'),
 ('a booster that overstates', 'an intensifier beyond the evidence'),
 ('a neutral verb', 'a verb taking no side'),
 ('an appearance of evasion', 'seeming to avoid a question'),
 ('a loss of credibility', 'being less believed than before'),
 ('a recovery of credibility', 'being believed again'),
 ('a correction of your own statement', 'putting your own error right'),
 ('an acknowledgement of error', 'admitting a mistake'),
 ('a question outside a mandate', 'a question you have no authority on'),
 ('a referral to a colleague', 'passing a question to the right person'),
 ('a note of what was not known', 'a record of the gap at the time')],

v_a=[('Saying plainly that you do not know is an admission of ____________.', 'ignorance'),
     ('A promise to come back with an answer is an ____________ to revert.', 'undertaking'),
     ('A question accepted for later answer is a question taken ____________.', 'away'),
     ('An intensifier beyond the evidence is a ____________ that overstates.', 'booster'),
     ('Seeming to avoid a question is an ____________ of evasion.', 'appearance'),
     ('Passing a question to the right person is a ____________ to a colleague.', 'referral'),
     ('A record of the gap at the time is a note of what was not ____________.', 'known'),
     ('A verb taking no side is a ____________ verb.', 'neutral')],

v_b=[('A limit of knowledge is the point', 'beyond which you cannot speak.'),
     ('A competence of another authority is a matter', 'belonging to somebody else.'),
     ('A hedge that is honest is a qualification', 'that reflects real doubt.'),
     ('A recovery of credibility is being believed', 'again.'),
     ('A correction of your own statement is putting', 'your own error right.')],

g_title='Grammar: hedges, boosters and neutral verbs',
g_rule=['A hedge marks genuine uncertainty: it appears that, it is likely that, as far as I '
        'know, on the information I have.',
        'A booster strengthens: I am certain that, without any doubt, plainly. Use one only '
        'where the evidence carries it, since a booster on a weak claim destroys the credit of '
        'the strong ones.',
        'A neutral verb reports without taking a side: the Mission takes no view; the position '
        'is that; the authorities have stated.',
        'Hedges, boosters and neutral verbs are not degrees of politeness. Two hedges and a '
        'booster in one sentence is not caution but evasion, and will be heard as such in every '
        'language.'],
g_fig=('LOOSE',
       ['The figures are of course kept under continuous review.',
        'I think probably it may be around nine hundred or so.',
        'Obviously we are certainly looking at all of this.',
        'It is not for me to comment on such matters at all.'],
       'PRECISE',
       ['I do not know the figure. I shall find it and telephone you tomorrow.',
        'It appears to be about nine hundred; I shall confirm it.',
        'I am certain the figure is published annually.',
        'That is a matter for the host authorities, and I shall give you the name.'],
       'four evasive formulations',
       'the same four with an honest hedge, a justified booster or a referral'),
g_fig_cap='One hedge where there is doubt. One booster where there is evidence. Never both at once.',

g_a=[('The figure ____________ to be about nine hundred, but I shall confirm it.', 'appears'),
     ('I ____________ not know, and I shall find out.', 'do'),
     ('It is ____________ that the number rose, though I cannot say by how much.', 'likely'),
     ('I am ____________ that the figure is published annually.', 'certain'),
     ('The Mission ____________ no view on the merits of individual cases.', 'takes'),
     ('I shall ____________ the question away and answer it tomorrow.', 'take'),
     ('As far as ____________ know, no decision has been taken.', 'I'),
     ('On the information I ____________, the application is still open.', 'have'),
     ('The authorities ____________ stated that the inquiry continues.', 'have')],

g_b=[('( The figures are kept under continuous review / I do not know the figure; I shall telephone you tomorrow ) — honest.', ['The figures are kept under continuous review', 'I do not know the figure; I shall telephone you tomorrow'], 1),
     ('( It appears to be about nine hundred / I think probably it may be around nine hundred or so ) — one hedge.',
      ['It appears to be about nine hundred',
       'I think probably it may be around nine hundred or so'], 0),
     ('( I am certain the figure is published annually / Obviously we are certainly looking at this ) — justified booster.',
      ['I am certain the figure is published annually',
       'Obviously we are certainly looking at this'], 0),
     ('( That is a matter for the host authorities, and I shall give you the name / It is not for me to comment on such matters ) — referral.',
      ['That is a matter for the host authorities, and I shall give you the name',
       'It is not for me to comment on such matters'], 0),
     ('( As far as I know, no decision has been taken / As far as I am knowing, no decision ) — form.',
      ['As far as I know, no decision has been taken',
       'As far as I am knowing, no decision'], 0),
     ('( The Mission takes no view on individual cases / The Mission does not really think about individual cases ) — neutral verb.',
      ['The Mission takes no view on individual cases',
       'The Mission does not really think about individual cases'], 0)],

d1=dict(
 title='Eleven words to avoid four',
 fig=(['Nobody knew the figure.', 'And nobody said so.'],
      ['What did we say?', 'Eleven words about continuous review.']),
 cap='Ambassador Clara Mendel and Yuki Tanaka, reading the coverage.',
 lines=[('Yuki', 'The story this morning is not about refusals. It is about you not answering.'),
        ('Mendel', 'I did not know the figure.'),
        ('Yuki', 'Which is an entirely respectable position, and you did not take it.'),
        ('Mendel', 'I said the figures were kept under continuous review.'),
        ('Yuki', 'Two hedges and a booster, eleven words, committing us to nothing.'),
        ('Mendel', 'In my own language I would have said I do not know.'),
        ('Yuki', 'And in English the prepared formula was easier to reach for.'),
        ('Mendel', 'Which is how a second language makes you sound evasive.'),
        ('Yuki', 'The alternative was three clauses. I do not know. I shall find out. I shall telephone you before five tomorrow.'),
        ('Mendel', 'And then I must telephone her before five tomorrow.'),
        ('Yuki', 'Which is the whole of the cost, and the whole of the credit.'),
        ('Mendel', 'Four words, a promise and a deadline.')],
 a=[('What was the story about?', 'the Ambassador not answering'),
    ('Did she know the figure?', 'no'),
    ('What did she say?', 'that the figures were kept under continuous review'),
    ('What was the alternative?', 'I do not know; I shall find out; I shall telephone by five'),
    ('What is the cost of that?', 'having to telephone by five')],
 b=[('Two hedges and a ____________.', 'booster'),
    ('The prepared ____________ was easier.', 'formula'),
    ('Three ____________.', 'clauses'),
    ('A promise and a ____________.', 'deadline')]),

d2=dict(
 title='Not knowing, and not being allowed to say',
 fig=(['I know and cannot say.', 'Then say that.'],
      ['Is that not worse?', 'It is different, and it is true.']),
 cap='Mendel and Elena Duarte, before a second press conference.',
 lines=[('Elena', 'There is a second question where you know the answer and may not give it.'),
        ('Mendel', 'Which is a different problem from not knowing.'),
        ('Elena', 'And must not be answered with the same words, or you will have lied twice.'),
        ('Mendel', 'What do I say?'),
        ('Elena', 'That you are not able to discuss it, and why — and the why must be real.'),
        ('Mendel', 'Because it concerns an individual’s private information.'),
        ('Elena', 'Then say that. A reason is not a refusal; a refusal without a reason is.'),
        ('Mendel', 'And if they press?'),
        ('Elena', 'You repeat the reason once, in the same words, and you do not elaborate.'),
        ('Mendel', 'Three categories, then: I do not know; I know and may not say; and that is for another authority.'),
        ('Elena', 'With a deadline for the first, a reason for the second, and a name for the third.'),
        ('Mendel', 'And what do I do when I am not sure which category a question falls into?')],
 unresolved=True,
 a=[('What is the second problem?', 'knowing and not being permitted to say'),
    ('Why must the words differ?', 'otherwise it is two untruths'),
    ('What must accompany a refusal?', 'a real reason'),
    ('What if they press?', 'repeat the reason once, without elaborating'),
    ('What are the three categories?', 'not knowing, not permitted, another authority')],
 b=[('A reason is not a ____________.', 'refusal'),
    ('You repeat the reason ____________.', 'once'),
    ('A ____________ for the first.', 'deadline'),
    ('And a ____________ for the third.', 'name')]),

speak=[('One hedge, one booster',
        ['Make eight claims about your work.',
         'Hedge the uncertain ones once and boost the certain ones once.',
         'Your partner objects to any sentence with both.']),
       ('Three clauses',
        ['Your partner asks you six factual questions you cannot answer.',
         'Answer each in three clauses: do not know, will find out, by when.',
         'They hold you to each deadline.']),
       ('Which category',
        ['Your partner asks eight questions.',
         'Sort each into not knowing, not permitted, or another authority.',
         'Give the deadline, the reason or the name accordingly.'])],

ext_title='An admission with a deadline sounds like competence in any language',
ext_fig=figs.datatable('THREE KINDS OF NOT ANSWERING',
                       ['Situation', 'What to say', 'What it needs'],
                       [['I do not know', 'say so plainly', 'a deadline'],
                        ['I know and may not say', 'say so, with the reason', 'a real reason'],
                        ['another authority decides', 'say whose it is', 'a name'],
                        ['I am not certain', 'one honest hedge', 'a figure to confirm'],
                        ['I am certain', 'one booster, no hedge', 'the evidence'],
                        ['the matter is contested', 'a neutral verb', 'no side taken']]),
ext_fig_cap='Six situations, six formulations, and not one of them a prepared phrase about review.',
ext=[
 'Preparing answers is a task a system performs well, and it produces, among others, the '
 'formulations that sound informed and commit to nothing. Those formulations are the most '
 'dangerous output it offers, because they are the easiest thing to say under pressure in a '
 'second language.',
 'The difficulty is not linguistic incompetence but the opposite. A speaker working in an '
 'additional language reaches for the prepared phrase precisely because it is prepared, and the '
 'prepared phrase is almost always the evasive one.',
 'There are three distinct situations and they require three different answers. Not knowing '
 'requires a plain admission and a deadline. Knowing and not being permitted to say requires a '
 'statement that you cannot discuss it and the real reason why. A matter belonging to another '
 'authority requires the name of that authority.',
 'Each needs its own instruction and none of them may be answered with the words used for '
 'another, because a listener who hears the same formula twice concludes, correctly, that one of '
 'them was untrue.',
 'Hedges and boosters do the fine work. One honest hedge marks real doubt — it appears to be '
 'about nine hundred — and one justified booster marks real certainty. Two hedges and a booster '
 'in a single sentence is not caution; it is the sound of evasion, and it translates into every '
 'language unchanged.',
 'And the deadline is the whole of the discipline. An officer who says I shall telephone you '
 'before five tomorrow has bought the credit of an honest answer and incurred an obligation '
 'that must be met at a quarter to five.'],

dp2=('Reasons for refusal', 'Practice distinguishes an inability to comment, which requires a '
     'stated reason, from an absence of knowledge, which requires an undertaking to revert; '
     'using one formulation for both is commonly found to damage credibility.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('What is the most dangerous output?', 'formulations that sound informed and commit to nothing'),
     ('Why does a second language make it worse?', 'the prepared phrase is easiest under pressure'),
     ('What does not knowing require?', 'a plain admission and a deadline'),
     ('What does not being permitted require?', 'a statement and the real reason'),
     ('What does another authority’s matter require?', 'the name of that authority')],
e_b=[('Prepared formulations are the safest answers.', 'F'),
     ('The three situations need the same words.', 'F'),
     ('Two hedges and a booster sound cautious.', 'F'),
     ('A deadline must actually be met.', 'T'),
     ('One honest hedge marks real doubt.', 'T'),
     ('An admission can sound competent.', 'T')],

w_model='Purpose: so that I can answer tomorrow’s questions honestly in three different ways '
        'rather than evasively in one. Scope: the press conference on Thursday; the written '
        'briefing for the capital is separate. Inputs: the twenty likeliest questions, our own '
        'figures where we hold them, and the list of matters on which I am not permitted to '
        'comment. Criteria: each question marked as answerable, not known, not permitted or for '
        'another authority; for each not known, the words of the admission and a deadline I can '
        'meet; for each not permitted, the real reason in one sentence; for each belonging '
        'elsewhere, the name and office of the right authority; no answer containing more than '
        'one hedge, and no sentence containing a hedge and a booster together. Done: with me by '
        'Wednesday evening. Fallback: where it is unclear which category a question falls into, '
        'it is marked unclear and I shall decide in the room.',
w_fig=figs.spec_card('SIX LINES FOR AN ANSWER YOU CANNOT GIVE',
                     [('Purpose', 'honest in three ways, not evasive in one'),
                      ('Scope', 'Thursday’s press conference'),
                      ('Inputs', 'likely questions, our figures, the restricted list'),
                      ('Criteria', 'four categories; deadlines; reasons; names; one hedge only'),
                      ('Done', 'Wednesday evening'),
                      ('Fallback', 'unclear category: I decide in the room')]),
w_fig_cap='Four categories, and the discipline is that each has its own words.',
w_task='Write a six-line tasking for answers to questions you cannot yet answer.',
w_steps=['Line 1: say what you must be able to do.',
         'Line 2: say which occasion, and what is separate.',
         'Line 3: say what you are giving it.',
         'Line 4: say the categories, the deadlines, the reasons and the hedge rule.',
         'Line 5: say when you need it.',
         'Line 6: say what happens where the category is unclear.'],
w_bank=['Purpose: so that I can answer … honestly in three different ways rather than evasively in one',
        'Scope: the press conference on … ; the written briefing is separate',
        'Inputs: the likeliest questions, our own figures, and the list of matters on which I may not comment',
        'Criteria: each question marked answerable, not known, not permitted or for another authority; a deadline for each not known; a real reason for each not permitted; a name for each belonging elsewhere; no more than one hedge in an answer and never a hedge with a booster',
        'Done: with me by … . Fallback: where the category is unclear, it is marked unclear and I shall decide in the room'],
w_check=['Are the four categories applied?',
         'Does every admission carry a deadline?',
         'Does every refusal carry a real reason?',
         'Is one hedge the maximum?'],

t_title='Saying what you do not know, in a language that is not yours',
t_fig=figs.split('THREE SITUATIONS',
                 'Say plainly',
                 ['I do not know',
                  'I may not discuss it',
                  'that is for another authority',
                  'I am not yet certain'],
                 'And attach',
                 ['a deadline',
                  'the real reason',
                  'a name and an office',
                  'one honest hedge']),
t_fig_cap='Four admissions, four attachments, and no prepared phrase about continuous review.',
t_body=[
 'Mark every likely question into four categories before you go in: answerable, not known, not '
 'permitted, and for another authority. The categories matter more than the wording, because '
 'the wrong category produces the wrong kind of answer however well it is phrased.',
 'Attach to each category the thing that makes it honest: a deadline you can meet to every '
 'admission of ignorance; the real reason to every refusal; the name and office of the right '
 'authority to every referral.',
 'Then bar the formulations that sound informed and commit to nothing. No answer carries more '
 'than one hedge, no sentence carries a hedge and a booster together, and nothing anywhere is '
 'kept under continuous review.'],
t_say=[('Set the categories: ', 'Answerable, not known, not permitted, another authority.'),
       ('Attach the deadline: ', 'I shall telephone you before five tomorrow.'),
       ('Bar the formula: ', 'No answer containing more than one hedge, and none about review.')],
t_bound='It will produce the evasive formulation on request and will not warn you that it is '
        'evasive, because the sentence is grammatical, polite and true. In a second language it '
        'is also the easiest thing in the folder to say.',
t_a=[('Mark every question into four ____________.', 'categories'),
     ('A ____________ you can meet.', 'deadline'),
     ('The ____________ reason to every refusal.', 'real'),
     ('A name and an ____________ to every referral.', 'office'),
     ('No answer carries more than one ____________.', 'hedge'),
     ('Nothing is kept under continuous ____________.', 'review')],
t_b_rubric='Say which category each question falls into.',
t_b=[('How many applications were refused last year?', 'not known: admit and set a deadline'),
     ('Why was this individual’s application refused?', 'not permitted: give the reason'),
     ('When will the host ministry decide?', 'another authority: give the name'),
     ('What is the Mission’s published waiting time?', 'answerable')],

case=dict(
 title='The Decision Room · Eleven words and a headline about evasion',
 brief=[
  'At a press conference a journalist asks how many applications were refused in the previous '
  'year. Nobody present knows, and the figure is held by a system in the capital.',
  'The answer given runs to eleven words, contains two hedges and a booster, and commits the '
  'Mission to nothing. The following morning’s coverage concerns the Ambassador’s failure to '
  'answer rather than the figure.',
  'Available instead were three clauses: an admission, an undertaking and a deadline. A second '
  'question at the same conference concerned an individual case, which the Ambassador knew '
  'about and was not permitted to discuss.'],
 exhibit=figs.datatable('TWO QUESTIONS, FOUR POSSIBLE ANSWERS',
                        ['Question', 'What was said', 'What was available'],
                        [['how many refusals?', 'kept under review', 'I do not know; by five tomorrow'],
                         ['why this case?', 'kept under review', 'I may not say; it is private information'],
                         ['the same words twice', 'yes', 'no'],
                         ['hedges in one answer', 'two', 'one'],
                         ['boosters', 'one', 'none'],
                         ['deadlines offered', 'none', 'one']]),
 exhibit_cap='The same formula for two different situations, which told the room that one of them was untrue.',
 exhibit_note='The formulation was accurate, courteous and grammatical. It was also the easiest '
              'sentence in the folder to say in a second language.',
 voices=[('Yuki Tanaka', 'press officer',
          'Two hedges and a booster, eleven words, and a story about evasion the next morning.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'In my first language the admission would have come easily. In English I reached for the formula.'),
         ('Elena Duarte', 'delegate, the Assembly',
          'And using one formula for two situations means the room concludes that one answer was false.')],
 steps=[('Find it', 'What was asked and what was said?'),
        ('Compare it', 'The formula against the admission.'),
        ('Infer it', 'Why was the formula chosen?'),
        ('Weigh it', 'A deadline that must be met.'),
        ('Decide', 'How are such questions answered?')],
 analysis=[('Find it. What was asked?', 'a factual figure, and an individual case'),
           ('Compare it. What was said?', 'the same eleven-word formula to both'),
           ('Infer it. Why?', 'a prepared phrase is easiest in a second language'),
           ('Weigh it. What is the cost?', 'a telephone call before five'),
           ('Decide. How are they answered?', 'by category, with a deadline, a reason or a name')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how questions are categorised.',
                 'Say what accompanies an admission.',
                 'Say what accompanies a refusal.',
                 'Say what is barred.'],
 bank=['Questions are marked before any appearance as answerable, not known, not permitted or for another authority.',
       'An admission of ignorance is accompanied by a deadline the officer can meet, and the deadline is met.',
       'A refusal to discuss is accompanied by the real reason, stated once and not elaborated.',
       'No answer contains more than one hedge, and no sentence contains a hedge and a booster together.'],
 outcome='The figure is obtained and telephoned to the journalist at four twenty the following '
         'afternoon, and is published with the Mission’s explanation of how refusals are '
         'counted. The individual case is answered with the reason, which is reported in one '
         'line. Over the following six months the Mission answers four further questions with '
         'an admission and a deadline, meets all four, and is quoted in that paper as a mission '
         'that answers questions.',
 outcome_q=[('When was the figure telephoned?', 'at four twenty the following afternoon'),
            ('What was published with it?', 'the Mission’s explanation of the counting'),
            ('How was the individual case answered?', 'with the real reason, reported in one line'),
            ('How many later admissions were made?', 'four, all with deadlines met'),
            ('How was the Mission then described?', 'as a mission that answers questions')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Prepare answers for the difficult questions',
 task=['A head of mission asked for answers to the difficult questions at a press conference.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Prepare answers for the difficult questions.',
        'The ones we cannot answer.',
        'Something I can say.',
        'Nothing that commits us.',
        'Every question, with no exceptions.',
        'By Wednesday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “nothing that commits us” is a specification for evasion.',
 asked=['Every question, no exceptions', 'Something I can say', 'Nothing that commits us'],
 back=['9 formulations', '14 hedges', '0 deadlines'],
 gap='Nobody distinguished not knowing from not being permitted, and nobody asked for a deadline.',
 back_cap='Nine courteous formulations, every one of which sounds informed and promises nothing.',
 back_note='“Nothing that commits us” and “something I can say” are the two instructions that '
           'produce the continuous review sentence, which is what evasion sounds like.',
 diagnosis=[('“the difficult questions”', 'unscoped set'),
            ('“with no exceptions”', 'unstated exception'),
            ('“nothing that commits us”', 'hidden assumption'),
            ('“every question”', 'unstated exception'),
            ('“the ones we cannot answer”', 'unscoped set'),
            ('“by Wednesday”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that each kind of question gets its own honest answer.',
 scaffold=['what you must be able to do',
           'which occasion, and what is separate',
           'what you are giving it',
           'the categories, the deadlines, the reasons and the hedge rule',
           'when you need it',
           'what happens where the category is unclear'],
 bank=['Purpose: so that I can answer tomorrow’s questions honestly in three different ways rather than evasively in one',
       'Scope: the press conference on Thursday; the written briefing for the capital is separate',
       'Inputs: the twenty likeliest questions, our own figures where we hold them, and the list of matters on which I am not permitted to comment',
       'Criteria: each question marked as answerable, not known, not permitted or for another authority; for each not known, the words of the admission and a deadline I can meet; for each not permitted, the real reason in one sentence; for each belonging elsewhere, the name and office of the right authority; no answer containing more than one hedge, and no sentence containing a hedge and a booster together',
       'Done: with me by Wednesday evening',
       'Fallback: where it is unclear which category a question falls into, it is marked unclear and I shall decide in the room'],
 check=['Are the four categories used?',
        'Does every admission carry a deadline?',
        'Does every refusal carry a reason?',
        'Is the hedge limit stated?'],
 model=['so that I can answer tomorrow’s questions honestly in three different ways rather than evasively in one',
        'the press conference on Thursday; the written briefing for the capital is separate',
        'the twenty likeliest questions, our own figures where we hold them, and the list of matters on which I am not permitted to comment',
        'each question marked as answerable, not known, not permitted or for another authority; for each not known, the words of the admission and a deadline I can meet; for each not permitted, the real reason in one sentence; for each belonging elsewhere, the name and office of the right authority; no answer containing more than one hedge, and no sentence containing a hedge and a booster together',
        'with me by Wednesday evening',
        'where it is unclear which category a question falls into, it is marked unclear and I shall decide in the room'],
 cost='9 formulations, 14 hedges, 0 deadlines, and a headline about an ambassador who would not answer.'),

lang=dict(
 title='Across the Language Line · An admission that sounds like incompetence locally',
 setting=[
  'In the host country’s official culture, a senior official who says I do not know is '
  'understood to be admitting unpreparedness, and the admission is reported as such.',
  'A local colleague warns that the honest formulation, delivered without more, will be '
  'received as weakness rather than candour, and that what is expected is an admission framed '
  'as a commitment.'],
 ladder=[('“I do not know”', 'candour in one culture'),
         ('The same words', 'unpreparedness in another'),
         ('A deadline attached', 'and it becomes a commitment')],
 cap='The same four words, candid in one convention and careless in another.',
 turns=[('Turn 1 · A local colleague', 'Saying only that you do not know will be reported as unpreparedness.'),
        ('Turn 2 · Mendel', 'Then how is it said here?'),
        ('Turn 3 · The colleague', 'With the undertaking first and the admission second.')],
 holds=['How would a senior official here say that they do not yet have a figure?',
        'Would it help to put the undertaking before the admission?',
        'I shall have that figure for you by five tomorrow; I do not have it tonight.',
        'I am not willing to guess, and I am willing to be held to a time.',
        'Is there a formulation that is candid here without sounding unprepared?',
        'I will use your wording and keep the deadline.'],
 redline='Never guess in order to avoid appearing unprepared, and never adopt a local '
         'formulation that implies you have the figure when you do not.',
 score=['Asked how a senior official here would put it.',
        'Offered to reverse the order of undertaking and admission.',
        'Kept the refusal to guess explicit.',
        'Accepted being held to a time.',
        'Used the local wording without implying knowledge.'],
 a=[('How is “I do not know” received there?', 'as an admission of unpreparedness'),
    ('What is expected instead?', 'an admission framed as a commitment'),
    ('What order is suggested?', 'the undertaking first, the admission second'),
    ('What must not be done to avoid looking unprepared?', 'guess'),
    ('What must the local wording not imply?', 'that the figure is held'),
    ('What stays in either version?', 'the deadline')]),

rev_fig=figs.split('FOUR CATEGORIES',
                   'Mark each question',
                   ['answerable',
                    'not known',
                    'not permitted',
                    'for another authority'],
                   'Attach',
                   ['the answer',
                    'a deadline',
                    'the real reason',
                    'a name and office']),
rev_fig_cap='Four marks and four attachments, and nothing is ever kept under continuous review.',
rev=dict(
 read=[('What was the question?',
        ['how many applications were refused', 'why one case was refused',
         'when the ministry would decide', 'what the waiting time was'], 0),
       ('How long was the answer given?',
        ['eleven words', 'four words', 'three clauses', 'a minute'], 0),
       ('What was the coverage about?',
        ['the failure to answer', 'the refusal figures',
         'the individual case', 'the waiting time'], 0),
       ('What must accompany an admission of ignorance?',
        ['a deadline', 'an apology', 'a hedge', 'a reason'], 0)],
 listen_text='Mark every likely question as answerable, not known, not permitted or for another '
             'authority; attach a deadline, a real reason or a name accordingly; and allow no '
             'answer more than one hedge.',
 listen=[('Mark every question into four ____________.', 'categories'),
         ('Attach a ____________ to every admission.', 'deadline'),
         ('A real ____________ to every refusal.', 'reason'),
         ('And no more than one ____________.', 'hedge')],
 speak=['Hedge four uncertain claims once each and boost four certain ones once each.',
        'Then answer six questions you cannot answer, each in three clauses with a deadline.'],
 write='Write a six-line tasking for answers to questions you cannot yet answer.',
 vocab=[('Saying plainly that you do not know is an admission of ____________.', 'ignorance'),
        ('A promise to come back with an answer is an ____________ to revert.', 'undertaking'),
        ('Seeming to avoid a question is an ____________ of evasion.', 'appearance'),
        ('A verb taking no side is a ____________ verb.', 'neutral')],
 gram=[('As far as ____________ know, no decision has been taken.', 'I'),
       ('On the information I ____________, the application is still open.', 'have'),
       ('The authorities ____________ stated that the inquiry continues.', 'have'),
       ('The figure ____________ to be about nine hundred.', 'appears')]),

found=['Mark every question as answerable, not known, not permitted or for another authority.',
       'Attach a deadline to every admission, and then meet it.',
       'Give the real reason for every refusal, once, without elaborating.',
       'Allow one hedge where there is doubt, and never a hedge with a booster.'],
end_line='An admission with a deadline sounds like competence. A formula sounds like evasion.',
end_next='Next: The Handover')
