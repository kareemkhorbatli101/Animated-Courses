# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Confident and Wrong',
gram='modals of deduction: must, may, might, cannot',
ai='fabrication: what a confident wrong answer looks like',
strap='CEFR B2 · Grammar: modals of deduction · AI: confident and wrong',
cando=['use must, may, might and cannot to grade a deduction',
       'say what follows necessarily and what only possibly follows',
       'describe what a fabricated answer looks like from the outside',
       'build a known-answer test for work your office relies on',
       'write a rule for what must be opened before a citation is used'],
hero=('IT CANNOT BE CHECKED BY READING IT',
      ['The answer was fluent, specific, correctly formatted and dated.',
       'Three of its four citations were to documents that do not exist.'],
      [(730, 'purple', 'long'), (1390, 'blue', 'short'),
       (2050, 'orange', 'long'), (2690, 'teal', 'short')]),
hero_cap='The Diplomatic Institute, demonstrating the failure to an entry course.',

warm=['How do you usually tell that something you are reading is wrong?',
      'What would a wrong answer have to look like for you not to notice?',
      'Which part of your work would be hardest to check by rereading it?'],
read=[
 'Maya Sarkis teaches the entry course at the Diplomatic Institute. The exercise she begins '
 'with has not changed since 2024, and she has never had a class get it right.',
 'She hands out a one-page answer to a research question about treaty practice. It is fluent, '
 'specific and correctly formatted. It cites four instruments, with years, article numbers '
 'and two short quotations. She asks the class to find what is wrong with it by reading it.',
 'They cannot, and nothing in the page allows them to. The answer contains no contradiction, '
 'no vagueness and no error of style. Its register is exactly that of a competent officer. '
 'The first instrument it cites is real and correctly described. The other three do not '
 'exist.',
 'Then she tells them to open the citations, and the exercise takes four minutes. The second '
 'instrument has a plausible name and a year in which no such instrument was concluded. The '
 'third is a real treaty with an invented article. The fourth is a real article with a '
 'quotation that is not in it.',
 'Her point to the class is not that the capability is unreliable, which she says is both '
 'true and useless as a lesson. Her point is about the shape of the failure. A wrong answer '
 'of this kind must be caught by opening something outside it, because it cannot be caught '
 'by reading it, however carefully. An officer who rereads is doing nothing at all.'],
c_a=[('What does Maya hand out?', 'a one-page answer to a research question on treaty practice'),
     ('How many instruments does it cite?', 'four, with years, article numbers and two quotations'),
     ('What does she first ask the class to do?', 'find what is wrong with it by reading it'),
     ('What is wrong with the four citations?', 'the first is real and correct; the other three do not exist as cited'),
     ('How long does the exercise take once they open the citations?', 'four minutes'),
     ('What is her point?', 'that this failure must be caught from outside the answer, not by rereading it')],
c_b=[('The answer contains errors of style.', 'F'),
     ('The register is that of a competent officer.', 'T'),
     ('The third citation is to a real treaty.', 'T'),
     ('The fourth citation quotes the article correctly.', 'F'),
     ('Maya says the lesson is that the capability is unreliable.', 'F'),
     ('Rereading catches this failure.', 'F')],
c_c=[('It is fluent, specific and correctly ____________.', 'formatted'),
     ('The answer contains no contradiction, no ____________ and no error of style.', 'vagueness'),
     ('A year in which no such instrument was ____________.', 'concluded'),
     ('A real treaty with an ____________ article.', 'invented'),
     ('It cannot be caught by ____________ it.', 'reading'),
     ('An officer who rereads is doing ____________ at all.', 'nothing')],
c_d=[('The failure must be caught from ( inside / outside ) the answer.', ['inside', 'outside'], 1),
     ('How many of the four citations were sound?', ['none', 'one', 'two', 'three'], 1),
     ('What is wrong with the third citation?', ['wrong year', 'an invented article in a real treaty', 'a wrong quotation', 'nothing'], 1),
     ('What does Maya call a true but useless lesson?', ['open the citations', 'the capability is unreliable', 'read carefully', 'use two sources'], 1),
     ('How long has the exercise been in use?', ['since 2024', 'since March', 'one term', 'ten years'], 1)],
c_e=('Match each modal to the strength of the deduction.',
     [('must be', 'the only possibility'),
      ('cannot be', 'excluded by the evidence'),
      ('may be', 'possible, no more'),
      ('might be', 'possible, and less likely'),
      ('is likely to be', 'probable on the evidence'),
      ('appears to be', 'what the evidence shows so far')],
     ['the only possibility', 'excluded by the evidence', 'possible, no more',
      'possible, and less likely', 'probable on the evidence', 'what the evidence shows so far']),

v_fig_title='THE SHAPE OF A WRONG ANSWER',
v_fig=[('bulb', 'a fluent error'), ('doc', 'an invented citation'), ('chart', 'a false precision'),
       ('key', 'a known-answer test'), ('shield', 'a control question'), ('clock', 'a silent failure')],
v_fig_cap='Six words for a failure that looks exactly like success.',
vocab=[
 ('a groundless statement', 'a plausible statement produced with no basis at all'),
 ('to fabricate', 'to produce a statement that has the form of a fact and no source'),
 ('a plausible answer', 'an answer that looks right to a competent reader'),
 ('a confident answer', 'an answer given without any mark of doubt'),
 ('an invented citation', 'a reference to a document that does not exist as cited'),
 ('a non-existent instrument', 'a treaty or agreement that was never concluded'),
 ('a reread', 'a second reading of the same text, which adds no outside evidence'),
 ('a sample check', 'the checking of a part in order to estimate the whole'),
 ('a false precision', 'a figure or detail more exact than the evidence supports'),
 ('a fluent error', 'a mistake expressed in correct and confident language'),
 ('a surface plausibility', 'the quality of looking right without being right'),
 ('an internal contradiction', 'two statements in one text that cannot both hold'),
 ('a sanity check', 'a quick test of whether a result could be true at all'),
 ('a known-answer test', 'a question whose correct answer is already known to the tester'),
 ('a trap question', 'a question designed so that a wrong method gives a wrong answer'),
 ('a control question', 'a question included to test the method rather than to learn'),
 ('an error rate', 'how often a method is wrong, over a measured set'),
 ('a failure mode', 'the characteristic way in which a method goes wrong'),
 ('a silent failure', 'a failure that produces no sign that anything is wrong'),
 ('a loud failure', 'a failure that announces itself')],
v_a=[('A reference to a document that does not exist as cited is an ____________.', 'invented citation'),
     ('A figure more exact than the evidence supports is a ____________.', 'false precision'),
     ('A question whose correct answer the tester already knows is a ____________.', 'known-answer test'),
     ('The characteristic way in which a method goes wrong is a ____________.', 'failure mode'),
     ('A failure that produces no sign that anything is wrong is a ____________.', 'silent failure'),
     ('A quick test of whether a result could be true at all is a ____________.', 'sanity check'),
     ('A mistake expressed in correct and confident language is a ____________.', 'fluent error'),
     ('A question included to test the method rather than to learn is a ____________.', 'control question')],
v_b=[('A groundless statement is a plausible statement', 'produced with no basis at all.'),
     ('A reread is a second reading of the same text,', 'which adds no outside evidence.'),
     ('A surface plausibility is the quality of looking right', 'without being right.'),
     ('An internal contradiction is two statements in one text', 'that cannot both hold.'),
     ('An error rate is how often a method is wrong,', 'over a measured set.')],

g_title='Grammar: modals of deduction',
g_rule=['Must be marks the only possibility left by the evidence.',
        'Cannot be marks a possibility the evidence excludes.',
        'May be and might be mark possibilities, might the weaker of the two.',
        'Add the evidence: on the gazette alone, it cannot be a 2019 instrument.'],
g_fig=('LOOSE',
       ['The citation is probably invented.',
        'Maybe the treaty exists.',
        'It must be wrong somehow.',
        'This could possibly be a real article.'],
       'PRECISE',
       ['No instrument of that name was concluded in 2019; the citation cannot be sound.',
        'The treaty exists; its article 9 may not.',
        'Three of four citations fail; the method must be producing them.',
        'The quotation might be from an earlier draft, though none is published.'],
       'four deductions with no evidence and no grading',
       'four deductions, each graded and each resting on something'),
g_fig_cap='Must, may, might, cannot — each one is a claim about the evidence, not about your mood.',
g_a=[('No instrument of that name exists; the citation ____________ be sound.', 'cannot'),
     ('Three of four citations fail; the method ____________ be producing them.', 'must'),
     ('The treaty exists; its article 9 ____________ not.', 'may'),
     ('The quotation ____________ be from an earlier draft, though none is published.', 'might'),
     ('The dredging began in March, so the decision ____________ be later than that.', 'cannot'),
     ('The steel was imported in April; the works ____________ have been planned before.', 'must'),
     ('It ____________ be a translation error, but the figures match.', 'may'),
     ('Nothing was published; we ____________ know what was decided.', 'cannot'),
     ('He was in Geneva all week; he ____________ have attended.', 'cannot')],
g_b=[('Must be marks ( the only possibility / a guess ).', ['the only possibility', 'a guess'], 0),
     ('No such instrument exists; the citation ____ be sound.', ['must', 'cannot', 'may', 'might'], 1),
     ('Three of four fail; the method ____ be producing them.', ['might', 'must', 'cannot', 'may not'], 1),
     ('Which is the weaker possibility?', ['must be', 'might be', 'cannot be', 'is'], 1),
     ('A deduction should be followed by', ['a hedge', 'the evidence', 'a figure', 'a date'], 1),
     ('He was in Geneva; he ____ have attended.', ['must', 'cannot', 'may', 'should'], 1)],

d1=dict(title='Open them',
        fig=(['I have read it three times.', 'Then you have learned nothing.'],
             ['It looks right.', 'That is the failure, not the test.']),
        cap='Maya Sarkis and an officer on the entry course.',
        lines=[('Officer', 'I have read it three times and I cannot find anything wrong.'),
               ('Maya', 'You cannot, and reading it a fourth time will not help. Nothing inside '
                        'the page tells you anything about the page.'),
               ('Officer', 'There is no contradiction in it.'),
               ('Maya', 'There is no contradiction in it because a contradiction is a mistake of '
                        'reasoning and this is not a mistake of reasoning. It is four '
                        'references, three of which point at nothing.'),
               ('Officer', 'Then how is anybody meant to notice?'),
               ('Maya', 'By opening them. That is the whole lesson and it takes four minutes.'),
               ('Officer', 'In my section nobody opens a citation that looks correctly '
                           'formatted.'),
               ('Maya', 'I know. That is why I run this exercise on the first morning rather '
                        'than the last, because by the last you would have decided that your '
                        'judgement is the safeguard.'),
               ('Officer', 'My judgement is quite good.'),
               ('Maya', 'Your judgement is excellent and it operates on what is in front of '
                        'you. This failure cannot be detected from what is in front of you. '
                        'Those are different problems and only one of them is yours.'),
               ('Officer', 'So the rule is: a citation used is a citation opened.'),
               ('Maya', 'A citation quoted is a citation opened. If you cannot open it, you say '
                        'in the brief that you could not, and then somebody senior decides '
                        'whether to risk it.')],
        a=[('Why does rereading not help?', 'because nothing inside the page tells you anything about the page'),
           ('Why is there no contradiction?', 'because it is not a mistake of reasoning but three references pointing at nothing'),
           ('How is it detected?', 'by opening the citations, which takes four minutes'),
           ('Why does Maya run it on the first morning?', 'because by the last, officers believe their judgement is the safeguard'),
           ('What is the rule she states?', 'a citation quoted is a citation opened, or the brief says it could not be')],
        b=[('Reading it a ____________ time will not help.', 'fourth'),
           ('Three of which point at ____________.', 'nothing'),
           ('It takes four ____________.', 'minutes'),
           ('Then somebody senior decides whether to ____________ it.', 'risk')]),
d2=dict(title='The control questions',
        fig=(['How do we know the error rate?', 'By asking what we already know.'],
             ['Ten a week?', 'Ten a week, and never announced.']),
        cap='Maya and Karim Dalati, designing the test.',
        lines=[('Karim', 'You want ten known-answer questions a week put through the research '
                        'step.'),
               ('Maya', 'Ten questions whose answers the Institute already holds, mixed in with '
                        'ordinary work and not marked as tests.'),
               ('Karim', 'Why not marked?'),
               ('Maya', 'Because a test everybody knows is a test is a test of behaviour, not of '
                        'the method. I want the error rate on a normal Tuesday.'),
               ('Karim', 'And what do we do with the number?'),
               ('Maya', 'Publish it by question type. The important thing is not the average. '
                        'It is which kinds of question fail, because that is the failure mode '
                        'and it is stable.'),
               ('Karim', 'My own expectation is that treaty citations fail most and figures '
                         'fail least.'),
               ('Maya', 'Mine too, and if we are both wrong that is worth more than the whole '
                        'programme.'),
               ('Karim', 'There is one thing I want on the record. A known-answer test tells us '
                         'the rate on questions we can score. The questions that matter are the '
                         'ones we cannot score, because nobody knows the answer, and those are '
                         'the only ones anybody asks seriously.'),
               ('Maya', 'That is true and I have no way round it. I can measure the method on '
                        'the easy half and I am asking the Ministry to generalise from that to '
                        'the hard half.'),
               ('Karim', 'Which may be reasonable and is not established.'),
               ('Maya', 'Put it in the minute in your words. I would rather the programme carry '
                        'its own limitation than have somebody discover it in three years and '
                        'conclude we were hiding it.')],
        a=[('What does Maya want?', 'ten known-answer questions a week, mixed in and not marked as tests'),
           ('Why not marked?', 'because a known test tests behaviour rather than the method'),
           ('What is to be published?', 'the error rate by question type, to show the failure mode'),
           ('What limitation does Karim raise?', 'that only scorable questions can be measured, and the serious ones are unscorable'),
           ('Is the limitation resolved?', 'no; it goes in the minute in Karim’s words')],
        b=[('A test everybody knows is a test is a test of ____________.', 'behaviour'),
           ('The error rate on a normal ____________.', 'Tuesday'),
           ('That is the failure ____________ and it is stable.', 'mode'),
           ('Which may be reasonable and is not ____________.', 'established')],
        unresolved=True),

speak=[('Grade the deduction',
        ['Student A: state a piece of evidence from your work.',
         'Student B: draw one conclusion with must, one with may and one with cannot.',
         'Say which conclusion the evidence actually supports.']),
       ('Design a trap',
        ['In pairs, write a question whose answer your office already knows.',
         'Say how a wrong method would answer it.',
         'Decide where in the week you would put it.']),
       ('Open it',
        ['Take three references from something you read this week.',
         'Say which you could open in four minutes.',
         'Say what you would write if you could not open one.'])],

ext_title='A fabricated answer has no internal sign of being wrong, so it must be checked from outside',
ext_fig=figs.source_check('THE INSTITUTE EXERCISE, CITATION BY CITATION',
                          [('instrument 1, 2016, article 3', 'exists, correctly described', 'verified'),
                           ('instrument 2, 2019, article 4', 'no instrument of that name in 2019', 'none'),
                           ('instrument 3, article 9', 'treaty exists; article 9 does not', 'none'),
                           ('instrument 4, article 2, quoted', 'article exists; quotation is not in it', 'none'),
                           ('the register and format of the page', 'that of a competent officer', 'verified'),
                           ('any internal contradiction', 'none found by 3 readings', 'none')]),
ext_fig_cap='The page passes every test that can be applied to the page.',
ext=[
 'The most discussed risk in this field is fabrication, and the discussion is usually '
 'unhelpful because it treats the matter as one of reliability. The question is not how often '
 'a confident answer is wrong. The question is what a wrong one looks like, because that '
 'determines whether any procedure can catch it.',
 'What it looks like is this. The language is correct and in register. The structure is the '
 'structure a competent officer would use. The detail is specific: years, article numbers, '
 'figures to a decimal place, short quotations in the right idiom. There is no hedging, no '
 'vagueness and no internal contradiction, because a fabricated citation is not a reasoning '
 'error and reasoning errors are what internal inspection detects.',
 'From that one fact everything practical follows. A failure with no internal sign cannot be '
 'caught by rereading, by a second opinion on the text, or by a more careful officer. It can '
 'only be caught by opening something outside the answer: the instrument, the article, the '
 'gazette, the figure at its published source. An officer who checks by rereading is '
 'performing a ritual, and a section whose safeguard is the seniority of the reader has no '
 'safeguard at all.',
 'Two practices follow, and services that take this seriously run both. The first is a rule '
 'at the point of use: a citation quoted is a citation opened, and where it cannot be opened '
 'the brief says so and somebody senior decides whether to carry it. The second is '
 'measurement: a set of questions whose answers the ministry already holds, put through the '
 'same process unmarked and mixed with ordinary work, with the error rate published by '
 'question type rather than as an average. The average is of little use; the failure mode is '
 'stable and tells an officer which kinds of question to distrust.',
 'The limitation of the second practice deserves stating rather than hiding. A known-answer '
 'test measures performance on questions that can be scored, which are by definition '
 'questions somebody has already answered. The questions that matter are the ones nobody has '
 'answered. Generalising from the first set to the second may be reasonable; it is not '
 'established, and a unit that records the gap in its own minute will be believed later by '
 'people who would otherwise think it had been concealed.'],
dp1=('Fabrication testing',
     'Analytical units in several foreign services introduced unmarked known-answer questions '
     'into live research work in 2025, publishing error rates by question type rather than as '
     'a single figure.',
     'Source: reported practice in diplomatic analytical quality control, 2025–2026.'),
e_a=[('Why is the reliability question unhelpful?', 'because what matters is what a wrong answer looks like, which decides whether procedure can catch it'),
     ('What does a fabricated answer look like?', 'correct register, competent structure, specific detail, no hedging and no contradiction'),
     ('Why can rereading not catch it?', 'because it is not a reasoning error, and internal inspection detects reasoning errors'),
     ('What are the two practices?', 'a citation quoted is a citation opened, and unmarked known-answer measurement'),
     ('What is the limitation of the second?', 'it measures only scorable questions, and the serious questions are unscorable')],
e_b=[('A fabricated answer usually contains vagueness.', 'F'),
     ('Seniority of the reader is a safeguard.', 'F'),
     ('The failure mode is stable.', 'T'),
     ('An average error rate is the most useful figure.', 'F'),
     ('Known-answer tests measure questions nobody has answered.', 'F'),
     ('Recording the gap makes a unit more credible later.', 'T')],

w_model=(
 'Purpose: establish the error rate of the research step by question type, so that officers '
 'know which kinds of answer to open and which they may rely on. Scope: 10 questions a week '
 'whose answers the Institute already holds, submitted through the ordinary queue; questions '
 'put by the Minister’s office are not to be used. Inputs: the Institute’s held answers and '
 'the step’s replies. Criteria: do not mark a test question as a test; score each reply as '
 'correct, wrong or unsupported; for every citation given, record whether the document exists '
 'and whether the quoted words appear in it; classify each question by type and report the '
 'rate for each type separately. Done: 1 quarterly table of error rates by question type, '
 'with the 40 to 130 questions scored, published to all sections. Fallback: where a reply '
 'cannot be scored because the held answer is itself uncertain, exclude the question and say '
 'how many were excluded.'),
w_fig=figs.spec_card('THE TASKING FOR A KNOWN-ANSWER TEST',
                     [('Purpose', 'which kinds of answer must be opened'),
                      ('Scope', '10 a week through the ordinary queue; no Minister’s questions'),
                      ('Inputs', 'the Institute’s held answers and the replies'),
                      ('Criteria', 'unmarked; scored three ways; citations opened; rates by type'),
                      ('Done', '1 quarterly table by type, published to all sections'),
                      ('Fallback', 'unscorable: exclude and report how many')]),
w_fig_cap='Rates by type, never an average: the average tells an officer nothing about tomorrow’s question.',
w_task='Write a tasking for a known-answer test in your own office.',
w_steps=['Say what officers are to do differently with the result.',
         'Say how many questions, from where, and which are excluded.',
         'Require the test questions to be unmarked.',
         'Require citations to be opened, not just read.',
         'Say what happens to a question that cannot be scored.'],
w_bank=['Establish … by … , so that officers know …',
        'Cover … ; … are not to be used.',
        'Work from … and …',
        'Do not mark … ; score each … ; for every citation, record … ; classify … and report … separately',
        'Where a reply cannot be scored … , exclude … and say …'],
w_check=['Is the purpose a change in behaviour rather than a number?',
         'Are the test questions unmarked?',
         'Must every citation be opened?',
         'Are rates reported by type rather than averaged?'],

t_title='Fabrication and how it is caught',
t_fig=figs.split('A FABRICATED ANSWER',
                 'Has',
                 ['correct register and structure',
                  'specific years and article numbers',
                  'quotations in the right idiom',
                  'no internal contradiction'],
                 'Lacks',
                 ['a document behind three citations',
                  'any internal sign of being wrong',
                  'any response to rereading',
                  'any detection from inside the page']),
t_fig_cap='Everything in the left column is why the right column cannot be seen.',
t_body=[
 'Treat fabrication as a question of shape rather than of reliability, because the shape is '
 'what decides whether any procedure can catch it. A fabricated answer is fluent, correctly '
 'structured, specific to a decimal place, and free of hedging and contradiction. It must be '
 'so: a fabricated citation is not a reasoning error, and internal inspection detects '
 'reasoning errors. There is nothing inside the page that bears on the page.',
 'Therefore the detection cannot be internal, and this is not a matter of care. An officer '
 'who rereads is performing a ritual; a section whose safeguard is a senior reader has no '
 'safeguard. What catches it is opening something outside the answer: the instrument, the '
 'article, the gazette, the figure at its published source. Four minutes, for an answer that '
 'may be quoted to a foreign state.',
 'So run two things together. A rule at the point of use: a citation quoted is a citation '
 'opened, and where it cannot be opened the brief says so and a senior officer decides '
 'whether to carry it. And measurement: questions whose answers the Ministry already holds, '
 'submitted unmarked through the ordinary queue, with rates published by question type. Record '
 'the limitation too, because you can only score questions somebody has already answered, and '
 'the questions that matter are the others.'],
t_say=[('State the rule: ', 'A citation quoted is a citation opened.'),
       ('Admit the gap: ', 'Citation 3 could not be opened; carried on the Director’s authority.'),
       ('Grade the deduction: ', 'No such instrument exists in 2019; the citation cannot be sound.')],
t_bound=('Nothing inside a fabricated answer indicates that it is one. Rereading, a second '
         'reader and a more senior reader all operate on the text and therefore detect '
         'nothing. Only an external document settles it, and a known-answer test measures only '
         'the questions somebody could already answer.'),
t_a=[('A citation quoted is a citation ____________.', 'opened'),
     ('Carried on the Director’s ____________.', 'authority'),
     ('No such instrument exists in 2019; the citation ____________ be sound.', 'cannot'),
     ('A fabricated citation is not a ____________ error.', 'reasoning'),
     ('An officer who rereads is performing a ____________.', 'ritual'),
     ('Rates published by question ____________.', 'type')],
t_b_rubric='Rewrite each deduction so that it is graded and rests on stated evidence.',
t_b=[('The citation is probably invented.', 'no instrument of that name was concluded in 2019, so the citation cannot be sound'),
     ('Maybe the treaty exists.', 'the treaty exists; its article 9 may not'),
     ('It must be wrong somewhere.', 'three of four citations fail, so the method must be producing them'),
     ('This could possibly be real.', 'the quotation might be from an earlier draft, though no draft is published')],

case=dict(
 title='The Decision Room · The citation nobody could open',
 brief=[
  'A brief for the Minister rests at one point on an instrument cited as a 2018 bilateral '
  'agreement between two third states. The Ministry does not hold it and it is not in any '
  'collection the Ministry can reach.',
  'The claim matters: it is the precedent on which the Ministry’s own proposed wording '
  'rests. Without it the wording has no precedent and the section would have to say so.',
  'Samir Haddad says the citation cannot be used. Hana Mourad says that a precedent the '
  'Ministry cannot open may still exist and that saying nothing also has a cost. Maya Sarkis '
  'is asked what the Institute teaches.'],
 exhibit=figs.datatable('THE CITATION IN QUESTION',
                        ['', 'Finding', 'Note'],
                        [['cited as', '2018 bilateral, article 6', '—'],
                         ['held by the Ministry', 'no', '—'],
                         ['in reachable collections', 'no', '4 searched'],
                         ['either state’s treaty series', 'not listed', 'both checked'],
                         ['referred to elsewhere', 'once, in a 2022 article', 'no citation given'],
                         ['other precedents for the wording', '0 found', '—']]),
 exhibit_cap='Not held, not listed, referred to once by somebody who also gave no citation.',
 exhibit_note='The 2022 article is a secondary account by an academic and names no document.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Strike it. We cannot open it, neither state lists it, and the only other reference '
          'is an academic who also could not cite it. That pattern is what an invented '
          'instrument looks like.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Bilateral instruments between third states are often unpublished. Absence from a '
          'treaty series is weak evidence. If we strike it, our wording goes up with no '
          'precedent, which is a real cost and not a safe one.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'The Institute teaches the officer to write what happened: cited, not held, not '
          'listed, one secondary reference. Then the Director decides. The error is not '
          'carrying it or striking it. The error is deciding silently.')],
 steps=[('Find it', 'What was searched, and with what result?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why is absence from a treaty series weak evidence?'),
        ('Weigh it', 'A possible real precedent against a possible invented one.'),
        ('Decide', 'What does the brief say about this citation?')],
 analysis=[('Find it. How many collections were searched?', 'four, plus both states’ treaty series'),
           ('Compare it. What does Samir conclude from the pattern?', 'that it is what an invented instrument looks like'),
           ('Infer it. Why might it still exist?', 'because bilateral instruments between third states are often unpublished'),
           ('Weigh it. What is the cost of striking it?', 'the Ministry’s wording goes up with no precedent at all'),
           ('Decide. What would you do?', 'answers vary; recording the search and letting the Director decide is the one option nobody opposes')],
 decision='Write what the brief says about the citation.',
 decision_steps=['Say whether the citation is carried, and in what form.',
                 'Say what the brief records about the search.',
                 'Say who decides and on what basis.',
                 'Say what happens if the instrument is later found or shown not to exist.'],
 bank=['The 2018 instrument is …',
       'The brief records that … collections were searched and …',
       'The decision to carry it is …',
       'If the instrument is later … , …',
       'This is reviewed …'],
 outcome='The citation was carried in a bracketed form, with one line recording that four '
         'collections and both treaty series had been searched without result and that the '
         'only other reference was secondary. The Director read the line and struck the '
         'citation, sending the wording up without a precedent. Eight months later the '
         'instrument surfaced in a third state’s published collection: it existed, and its '
         'article 6 said something different from what had been cited. Samir, who had wanted '
         'it struck as invented, says he was right to strike it and wrong about why, and that '
         'the line recording the search was what let anybody reconstruct the decision at all.',
 outcome_q=[('What did the Director do?', 'read the recorded line and struck the citation'),
            ('What turned out to be the case?', 'the instrument existed but its article 6 said something different')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Check the research before it goes up',
 task=['This is the checking instruction Policy Planning used before the Institute exercise '
       'was adopted across the Ministry.',
       'It was followed carefully and caught nothing of the kind it was written for.'],
 draft=['Check the research before it goes up.',
        'Read it through for errors.',
        'Satisfy yourself that it is sound.',
        'Query anything that looks doubtful.',
        'Have a senior officer look at it.',
        'Before it is sent.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, every one of which operates on the text and none outside it.',
 asked=['Every citation opened at its source',
        'A record of what could not be opened',
        'A decision taken by a named person'],
 back=['Three careful readings',
       'A senior officer’s initials',
       'Three invented citations carried through'],
 gap='"Read it through" and "satisfy yourself" are both internal, "anything that looks '
     'doubtful" cannot reach a failure with no appearance, and "a senior officer" adds a '
     'reader rather than a document.',
 back_cap='A checking process that was performed in full and could not have worked.',
 back_note='Every line describes reading. Nothing requires a document to be opened, which is '
           'the only act that could detect the failure.',
 diagnosis=[('[1] "check the research" — checked against what, outside it?', 'hidden assumption'),
            ('[2] "read it through for errors" — assumes the failure shows in the text', 'hidden assumption'),
            ('[3] "satisfy yourself that it is sound" — satisfied by what evidence?', 'undefined done'),
            ('[4] "query anything doubtful" — and where nothing looks doubtful?', 'missing condition'),
            ('[5] "have a senior officer look at it" — looking for what, recorded how?', 'undefined done'),
            ('[6] "before it is sent" — and if a source cannot be reached in time?', 'missing condition')],
 rewrite='Rewrite the instruction so that checking requires a document outside the text.',
 scaffold=['What the check is for and what it must detect',
           'Which documents must be opened and which are excluded',
           'What is to be opened: the instrument, the article, the figure at source',
           'Each citation opened, the words matched, failures recorded, nothing judged by appearance',
           'What is produced and before what point',
           'What to do where a source cannot be reached in time'],
 bank=['Check … so that … is detected before …',
       'Cover … ; … is out of scope.',
       'Open … , … and …',
       'For each citation, open … and confirm … ; record … ; do not rely on …',
       'Return … before …',
       'Where a source cannot be reached … , … and …'],
 check=['Does the check require a document outside the text?',
        'Is reliance on appearance forbidden?',
        'Are unopenable citations recorded?',
        'Is there a named decision where a source is unreachable?'],
 model=['Check every citation in the brief against its source so that an invented or misquoted citation is detected before the brief is sent',
        'Every citation and every figure in the brief; the drafter’s own assessments are out of scope',
        'The instrument or article cited, the gazette, and the published source of each figure',
        'For each citation, open the document and confirm that it exists, that the article cited exists and that any quoted words appear in it; record every citation that could not be opened; do not rely on the appearance or formatting of a citation as evidence that it is sound',
        '1 checked brief with a list of citations opened and citations not opened, before the brief leaves the section',
        'Where a source cannot be reached before the deadline, mark the citation as not opened and refer the decision to carry it to the Director'],
 cost='3 invented citations carried through a full checking process into a brief, 1 of which '
      'was quoted in correspondence with a third state.'),

rev_fig=figs.split('DEDUCTION',
                   'Ungraded',
                   ['The citation is probably invented.',
                    'Maybe the treaty exists.',
                    'It must be wrong somehow.',
                    'This could possibly be real.'],
                   'Graded',
                   ['No such instrument exists; it cannot be sound.',
                    'The treaty exists; article 9 may not.',
                    'Three of four fail; the method must produce them.',
                    'It might be from a draft, though none is published.']),
rev_fig_cap='Must, cannot, may, might — and the evidence in the same sentence.',
rev=dict(
 read=[('A fabricated answer contains', ['vagueness', 'no internal sign of error', 'contradictions', 'hedging'], 1),
       ('It can only be caught by', ['rereading', 'opening a document outside it', 'a senior reader', 'better formatting'], 1),
       ('Error rates should be published', ['as an average', 'by question type', 'annually only', 'not at all'], 1),
       ('In the Decision Room, what happened eight months later?', ['nothing', 'the instrument surfaced and said something different', 'it was proved invented', 'the brief was withdrawn'], 1)],
 listen_text='A failure with no internal sign cannot be caught by rereading, by a second '
             'opinion on the text, or by a more careful officer. It can only be caught by '
             'opening something outside the answer. An officer who checks by rereading is '
             'performing a ritual.',
 listen=[('A failure with no ____________ sign.', 'internal'),
         ('A second opinion on the ____________.', 'text'),
         ('Opening something ____________ the answer.', 'outside'),
         ('Performing a ____________.', 'ritual')],
 speak=['Say what you would open to check a claim in your own work.',
        'Grade one deduction from your work with must, may or cannot.'],
 write='Write one line recording a citation you could not open.',
 vocab=[('A reference to a document that does not exist as cited is an ____________.', 'invented citation'),
        ('A question whose correct answer the tester already knows is a ____________.', 'known-answer test'),
        ('The characteristic way in which a method goes wrong is a ____________.', 'failure mode'),
        ('A failure that produces no sign that anything is wrong is a ____________.', 'silent failure'),
        ('A figure more exact than the evidence supports is a ____________.', 'false precision')],
 gram=[('No instrument of that name exists; the citation ____________ be sound.', 'cannot'),
       ('Three of four citations fail; the method ____________ be producing them.', 'must'),
       ('The treaty exists; its article 9 ____________ not.', 'may'),
       ('The quotation ____________ be from an earlier draft.', 'might'),
       ('He was in Geneva all week; he ____________ have attended.', 'cannot')]),

found=['Open every citation in the next document you rely on.',
       'Write one question whose answer your office already holds.',
       'Ask your section what it does when a source cannot be opened.',
       'Grade three deductions from this week with must, may or cannot.'],
end_line='A failure with no internal sign must be caught from outside, or not at all.',
end_next='Next: A Country Brief in a Day',
)
