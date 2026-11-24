# -*- coding: utf-8 -*-
import figs

U = dict(
num=6,
title='An Enquiry From a Journalist',
gram='answering a journalist: what may be said, what may not',
ai='a press answer drafted inside what may actually be said',
strap='CEFR B2 · Grammar: answering a journalist: what may be said, what may not · '
      'AI: a press answer drafted inside what may actually be said',
cando=['answer what can be answered and refuse the rest with a reason',
       'refuse to discuss an identifiable patient',
       'correct a false premise before answering a question',
       'write a line that survives being quoted on its own',
       'write a six-line tasking for a press answer'],

hero=('EVERY SENTENCE WILL BE QUOTED ALONE.',
      ['Write nothing that needs the sentence before it',
       'in order not to be a different statement.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Four questions, a five o’clock deadline, and one sentence about a patient you may not discuss.',

warm=['Who answers the press where you work?',
      'What may never be said about a patient?',
      'What happens where you work when the deadline is in two hours?'],

vocab=[
 ('a deadline a journalist gives you', 'the hour by which an answer is useful'),
 ('a deadline you can ask to extend', 'the request that is sometimes granted'),
 ('a question with a false premise', 'a question you must correct before answering'),
 ('a question you must not answer at all', 'anything that would identify a patient'),
 ('a thing already in the public domain', 'what somebody else has already published'),
 ('a thing about one identifiable patient', 'the limit set by law and confidence'),
 ('a statement agreed with the family first', 'the only proper route to a patient’s story'),
 ('a statement issued without them', 'a disclosure you cannot withdraw'),
 ('a no comment that sounds like guilt', 'a refusal without a reason'),
 ('a plain refusal with a reason', 'a refusal a reader will accept'),
 ('a figure you would rather not confirm', 'a number that is nonetheless true'),
 ('a figure already published elsewhere', 'a number there is no point withholding'),
 ('an on the record answer', 'what you are prepared to see printed'),
 ('an off the record conversation you should decline', 'the conversation that becomes a quotation'),
 ('a correction you must request', 'the response to a published error'),
 ('a story that will run anyway', 'the reason to be in it accurately'),
 ('a line that survives being quoted alone', 'a sentence with its own context inside it'),
 ('a line that only works in context', 'the sentence that will be misquoted'),
 ('a spokesman who knows the facts', 'somebody who can answer'),
 ('a spokesman who knows the policy', 'somebody who knows what may be said')],

read=[
 'A journalist telephones at three o’clock with four questions and a deadline of '
 'five. Two of the questions you can answer, one rests on a false premise, and '
 'one is about an identifiable patient.',
 'Answer the two plainly, with figures if the figures are published or '
 'publishable. Withholding a number that is already in a public board paper makes '
 'the organisation look as though it has something to hide and achieves nothing '
 'whatever.',
 'Correct the false premise before answering the question that rests on it, '
 'because an answer to a question containing an error endorses the error.',
 'Refuse the patient question plainly and with its reason: we do not discuss the '
 'care of individual patients, and if the family wishes us to answer we shall do '
 'so with their consent.',
 'And write every sentence as though it will appear alone, because it will. A '
 'sentence that is defensible only when read with the sentence before it is a '
 'sentence you have not yet finished writing.'],

dp1=('Media enquiries', 'Communications guidance commonly recommends answering '
     'what can properly be answered, correcting factual errors in questions, '
     'declining to comment on identifiable individuals, and seeking consent before '
     'discussing any patient’s care. Confidentiality duties are set by law and '
     'professional codes.',
     'Source: general healthcare communications guidance, 2025–2026.'),

c_a=[('How many questions and how long?', 'four questions, with a deadline of five o’clock'),
     ('Which can be answered?', 'two of the four'),
     ('What is wrong with the third?', 'it rests on a false premise'),
     ('What is wrong with the fourth?', 'it concerns an identifiable patient'),
     ('Why not withhold a published figure?', 'it looks evasive and achieves nothing'),
     ('How is every sentence written?', 'as though it will appear alone')],

c_b=[('Two of the four questions can be answered.', 'T'),
     ('A false premise may be left uncorrected.', 'F'),
     ('A published figure may as well be confirmed.', 'T'),
     ('An identifiable patient may be discussed with care.', 'F'),
     ('Refusals carry a reason.', 'T'),
     ('Every sentence must survive alone.', 'T')],

c_c=[('We ____________ confirm that eleven beds were closed.', 'can'),
     ('We ____________ not discuss the care of individual patients.', 'do'),
     ('That figure ____________ published in our board papers in March.', 'was'),
     ('The premise of your third question ____________ not correct.', 'is'),
     ('If the family ____________ us to answer, we shall do so.', 'wish'),
     ('I ____________ decline to speak off the record.', 'shall')],

c_d=[('Correct a false premise ( before answering / in passing ).', ['before answering', 'in passing'], 0),
     ('Refuse with ( a reason / no comment ).',
      ['a reason', 'no comment'], 0),
     ('Confirm ( a published figure / nothing without clearance ).',
      ['a published figure', 'nothing without clearance'], 0),
     ('Discuss a patient ( only with consent / in general terms ).',
      ['only with consent', 'in general terms'], 0),
     ('Write each sentence to ( survive alone / read well together ).',
      ['survive alone', 'read well together'], 0)],

c_e=('Answerable, false premise, not answerable at all, or already public? Decide '
     'what each question is.',
     [('how many beds were closed last month?', 'answerable'),
      ('why did you close the unit without consulting anybody?', 'false premise'),
      ('what was wrong with the patient who died on Tuesday?', 'not answerable at all'),
      ('what was your deficit in the March board papers?', 'already public'),
      ('how long was the longest trolley wait?', 'answerable'),
      ('which nurse was suspended?', 'not answerable at all')],
     ['answerable', 'false premise', 'not answerable at all',
      'already public']),

v_fig_title='SIX WORDS OF A PRESS ANSWER',
v_fig=[('clock', 'a deadline a journalist gives you'), ('key', 'a question you must not answer at all'),
       ('people', 'a statement agreed with the family first'),
       ('doc', 'a figure already published elsewhere'),
       ('scale', 'a plain refusal with a reason'),
       ('note', 'a line that survives being quoted alone')],
v_fig_cap='Six words for four questions and two hours.',

v_a=[('The request that is sometimes granted is a deadline you can ask to ____________.', 'extend'),
     ('A question you must correct before answering is a question with a false ____________.', 'premise'),
     ('The limit set by law and confidence is a thing about one ____________ patient.', 'identifiable'),
     ('A disclosure you cannot withdraw is a statement issued ____________ them.', 'without'),
     ('A refusal without a reason is a no comment that sounds like ____________.', 'guilt'),
     ('The conversation that becomes a quotation is an off the record conversation you should ____________.', 'decline'),
     ('The reason to be in it accurately is a story that will run ____________.', 'anyway'),
     ('The sentence that will be misquoted is a line that only works in ____________.', 'context')],

v_b=[('A figure you would rather not confirm is a number', 'that is nonetheless true.'),
     ('An on the record answer is what you are', 'prepared to see printed.'),
     ('A correction you must request is the response', 'to a published error.'),
     ('A spokesman who knows the facts is somebody', 'who can answer.'),
     ('A spokesman who knows the policy is somebody', 'who knows what may be said.')],

g_title='Grammar: answering a journalist: what may be said, what may not',
g_rule=['Answer with we can confirm and the figure, which is plain and bounded: we '
        'can confirm that sixteen beds were closed in October, nine of them for '
        'infection control.',
        'Refuse with we do not and the reason in the same sentence: we do not '
        'discuss the care of individual patients, because we cannot do so without '
        'their consent.',
        'Correct a premise before answering, using the premise is not correct: the '
        'premise of your third question is not correct; the unit was not closed, '
        'and admissions continue.',
        'Decline the off-the-record offer in the first person and without '
        'explanation: I shall answer on the record or not at all.'],
g_fig=('LOOSE',
       ['We are unable to comment on this matter at the present time.',
        'Patient confidentiality prevents us from discussing any of this.',
        'The trust is committed to the highest standards of care.',
        'It would be inappropriate to go into detail at this stage.'],
       'PRECISE',
       ['We can confirm that sixteen beds were closed in October, nine of them for infection control.',
        'We do not discuss the care of individual patients, because we cannot do so without their consent.',
        'The premise of your third question is not correct: the unit has not closed and admissions continue.',
        'If the family wish us to answer your fourth question, we shall do so with their written consent.'],
       'four sentences that read as concealment',
       'four sentences that answer what can be answered'),
g_fig_cap='We can confirm. We do not, because. The premise is not correct. With consent.',

g_a=[('We ____________ confirm that sixteen beds were closed.', 'can'),
     ('Nine ____________ them for infection control.', 'of'),
     ('We ____________ not discuss individual patients.', 'do'),
     ('Because we cannot do so ____________ their consent.', 'without'),
     ('The premise of your third question ____________ not correct.', 'is'),
     ('The unit ____________ not closed.', 'has'),
     ('Admissions ____________.', 'continue'),
     ('If the family ____________ us to answer.', 'wish'),
     ('I ____________ answer on the record or not at all.', 'shall')],

g_b=[('( we are unable to comment / we can confirm sixteen beds were closed, nine for infection control ) — the answer.', ['we are unable to comment', 'we can confirm sixteen beds were closed, nine for infection control'], 1),
     ('( we do not discuss individual patients, because we cannot without consent / patient confidentiality prevents us ) — the refusal.',
      ['we do not discuss individual patients, because we cannot without consent', 'patient confidentiality prevents us'], 0),
     ('( the premise of your third question is not correct / we would not accept that characterisation ) — the correction.',
      ['the premise of your third question is not correct', 'we would not accept that characterisation'], 0),
     ('( if the family wish us to answer, we shall with their consent / it would be inappropriate to comment ) — the route.',
      ['if the family wish us to answer, we shall with their consent', 'it would be inappropriate to comment'], 0),
     ('( I shall answer on the record or not at all / I can give you some background informally ) — the record.',
      ['I shall answer on the record or not at all', 'I can give you some background informally'], 0),
     ('( that figure was published in our March board papers / I shall have to check what is public ) — the published figure.',
      ['that figure was published in our March board papers', 'I shall have to check what is public'], 0)],

d1=dict(
 title='Four questions and two hours',
 fig=(['Four questions.', 'Two answerable.'],
      ['One premise wrong.', 'One refused.']),
 cap='Siobhán Carrick and Margarida Pires, communications director.',
 lines=[('Margarida', 'Four questions, deadline five o’clock. The first two are about bed closures.'),
        ('Siobhán', 'Both answerable. Sixteen in October, nine infection control, seven staffing. All of it is in the March and November board papers.'),
        ('Margarida', 'Legal would rather we did not confirm the staffing figure.'),
        ('Siobhán', 'It is published. Declining to confirm a published number is the only thing in this that would actually make a story.'),
        ('Margarida', 'The third asks why we closed the unit without consulting anybody.'),
        ('Siobhán', 'The unit has not closed. So we correct that first, in its own sentence, and then answer what remains of the question.'),
        ('Margarida', 'And the fourth is about the patient who died on Tuesday.'),
        ('Siobhán', 'We do not discuss individual patients. With the reason, in the same sentence, and with the route: if the family want us to answer, we shall, with their written consent.'),
        ('Margarida', 'He will ask me for background off the record.'),
        ('Siobhán', 'Then decline. Every off-the-record conversation I have ever heard of ended up in print as a source close to the trust.'),
        ('Margarida', 'Can we ask for more time?'),
        ('Siobhán', 'Ask, and expect no. Then send what we have by half past four, because a story written without us is written about us.')],
 a=[('How many questions and what deadline?', 'four, by five o’clock'),
    ('What are the bed figures?', 'sixteen in October, nine infection control, seven staffing'),
    ('Why confirm the staffing figure?', 'because it is published, and declining would make a story'),
    ('What is wrong with the third question?', 'the unit has not closed'),
    ('What is the answer about the patient?', 'that individual patients are not discussed, with the consent route offered')],
 b=[('All of it is in the board ____________.', 'papers'),
    ('We correct that ____________.', 'first'),
    ('With their written ____________.', 'consent'),
    ('A story written without us is written ____________ us.', 'about')]),

d2=dict(
 title='The sentence that was quoted alone',
 fig=(['Three sentences.', 'One printed.'],
      ['Context lost.', 'Correction refused.']),
 cap='Siobhán Carrick and Margarida Pires, the following week.',
 lines=[('Margarida', 'They printed one sentence of the three, and it reads as though we are blaming the staff.'),
        ('Siobhán', 'Which sentence?'),
        ('Margarida', '“The checks that should have been carried out were not carried out on this occasion.”'),
        ('Siobhán', 'In context it was followed by a sentence about why the checks were impossible that night.'),
        ('Margarida', 'The second sentence was not printed.'),
        ('Siobhán', 'Then the first should never have been written in that form. It needed the second one in order not to be an accusation.'),
        ('Margarida', 'We can ask for a correction.'),
        ('Siobhán', 'We can, and they will decline, because the quotation is accurate. That is the point: it was accurate and it was ours.'),
        ('Margarida', 'So what should it have said?'),
        ('Siobhán', 'That the checks required by the policy were not possible with the staffing available that night, in one sentence, which cannot be cut in half.'),
        ('Margarida', 'That is a harder sentence to write under a deadline.'),
        ('Siobhán', 'It is, and the staff who read it on Thursday had to live with the easier one.')],
 unresolved=True,
 a=[('How many sentences were printed?', 'one of the three'),
    ('What did the printed sentence read as?', 'blaming the staff'),
    ('What followed it in the original?', 'a sentence about why the checks were impossible'),
    ('Why will a correction be declined?', 'because the quotation was accurate'),
    ('What should the sentence have said?', 'that the policy checks were not possible with the staffing available that night')],
 b=[('They printed one sentence of the ____________.', 'three'),
    ('It needed the second one in order not to be an ____________.', 'accusation'),
    ('It was accurate and it was ____________.', 'ours'),
    ('Which cannot be cut in ____________.', 'half')]),

speak=[('Answerable or not',
        ['Your partner reads out eight press questions.',
         'Sort them into answerable, false premise and not answerable.',
         'Four each, then swap.']),
       ('Refuse with a reason',
        ['Your partner asks you six things you cannot answer.',
         'Refuse each in one sentence with its reason.',
         'Three each, then swap.']),
       ('Survives alone',
        ['Your partner gives you six two-sentence answers.',
         'Rewrite each as one sentence that cannot be cut in half.',
         'Three each, then swap.'])],

ext_title='A press answer drafted inside what may actually be said',
ext_fig=figs.datatable('WHAT THE ANSWER CARRIES',
                       ['Line', 'Content'],
                       [['what is answered', 'with figures where published'],
                        ['what is corrected', 'any false premise, first'],
                        ['what is refused', 'with the reason in the sentence'],
                        ['the consent route', 'how a patient question could be answered'],
                        ['the record', 'on the record only'],
                        ['the test', 'each sentence quotable alone']]),
ext_fig_cap='Six lines before five o’clock, and each one must stand by itself.',
ext=[
 'A press answer drafted inside what may actually be said separates the questions '
 'you can answer from the ones you cannot, and gives a reason for each refusal.',
 'Give it the questions as asked, the figures already in the public domain with '
 'their sources, the confidentiality position, and the deadline.',
 'Ask it to correct any false premise in its own sentence before the answer that '
 'would otherwise endorse it.',
 'Ask for every refusal to carry its reason in the same sentence, since a refusal '
 'without one reads as concealment whatever the circumstances.',
 'Ask it to test each sentence for whether it could be printed alone without '
 'becoming a different statement, and to rewrite any that could not.',
 'What it cannot do is judge what the family would want said about their relative. '
 'That requires asking them, and asking them is a conversation, not a '
 'clearance.'],

dp2=('Media handling', 'Communications literature commonly reports that refusals '
     'to confirm information already in the public domain attract additional '
     'coverage, and that statements requiring surrounding context are frequently '
     'quoted without it.',
     'Source: general healthcare communications literature, 2025–2026.'),

e_a=[('What does the answer separate?', 'questions you can answer from those you cannot'),
     ('What four things are given to it?', 'the questions, the published figures with sources, the confidentiality position and the deadline'),
     ('Where does a correction go?', 'in its own sentence, before the answer'),
     ('What must every refusal carry?', 'its reason, in the same sentence'),
     ('What is each sentence tested for?', 'whether it could be printed alone')],
e_b=[('False premises are corrected first.', 'T'),
     ('Refusals carry their reasons.', 'T'),
     ('It judges what a family would want.', 'F'),
     ('Each sentence is tested for standing alone.', 'T'),
     ('Refusing published information attracts coverage.', 'T'),
     ('Statements needing context are usually quoted with it.', 'F')],

w_model='Purpose: so that what we say is accurate, sayable and still accurate '
       'when one sentence of it is printed on its own. Scope: operational '
       'enquiries about this site; clinical matters are answered by the medical '
       'director, anything about an identifiable patient requires that patient’s '
       'or the family’s written consent, and employment matters are not discussed '
       'at all. Inputs: the questions exactly as asked, the figures already in '
       'the public domain with the paper and date of each, the confidentiality '
       'position, any consent already given, and the journalist’s deadline. '
       'Criteria: every answerable question answered with a figure where one is '
       'publishable; any false premise corrected in its own sentence before the '
       'answer; every refusal carrying its reason; the consent route offered where '
       'a patient question could properly be answered; nothing said off the '
       'record; and every sentence capable of being printed alone. Done: issued on '
       'the record before the deadline, with the same text given to anybody else '
       'who asks. Fallback: where I cannot answer within the deadline, I say what '
       'I can confirm now and when the rest will follow, rather than letting the '
       'story be written without us.',
w_fig=figs.spec_card('SIX LINES FOR A PRESS ANSWER',
                     [('Purpose', 'accurate when one sentence is printed alone'),
                      ('Scope', 'operational; not clinical, not patients, not staff'),
                      ('Inputs', 'the questions, published figures, consent, deadline'),
                      ('Criteria', 'answer, correct, refuse with reason, quotable alone'),
                      ('Done', 'on the record, before the deadline, same text to all'),
                      ('Fallback', 'partial now, with a time for the rest')]),
w_fig_cap='Six lines, and the sixth one keeps you in a story that will run regardless.',
w_task='Write a six-line tasking for a press answer.',
w_steps=['Line 1: say what every sentence must survive.',
         'Line 2: say which enquiries are yours, and what requires consent.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the answer must do with each kind of question.',
         'Line 5: say how it is issued and to whom.',
         'Line 6: say what you do when the deadline cannot be met.'],
w_bank=['Purpose: so that what we say is accurate, sayable and still accurate when one sentence of it is printed on its own',
        'Scope: operational enquiries about this site; clinical matters are answered by the medical director, anything about an identifiable patient requires written consent, and employment matters are not discussed',
        'Inputs: the questions exactly as asked, the figures already in the public domain with the paper and date of each, the confidentiality position, any consent already given, and the deadline',
        'Criteria: every answerable question answered with a publishable figure; any false premise corrected in its own sentence first; every refusal carrying its reason; the consent route offered where appropriate; nothing off the record; every sentence printable alone',
        'Done: issued on the record before the deadline, with the same text given to anybody else who asks',
        'Fallback: where I cannot answer within the deadline, I say what I can confirm now and when the rest will follow'],
w_check=['Is every refusal reasoned?',
         'Is each false premise corrected first?',
         'Could each sentence be printed alone?',
         'Is every figure publishable?'],

t_title='A press answer drafted inside what may actually be said',
t_fig=figs.split('FOUR QUESTIONS AND TWO HOURS',
                 'It can draft',
                 ['answers with published figures',
                  'the premise correction',
                  'refusals with reasons',
                  'the stands-alone test'],
                 'It must not decide',
                 ['what the family would want',
                  'what is clinically accurate',
                  'whether to speak at all',
                  'what to say off the record']),
t_fig_cap='It drafts the answer. Asking the family is a conversation, not a clearance.',
t_body=[
 'Give it the questions as asked, the published figures with their sources, the '
 'confidentiality position and the deadline.',
 'A press answer drafted inside what may actually be said separates the '
 'answerable from the refused, with reasons.',
 'Then ask it to test every sentence for standing alone.'],
t_say=[('We can confirm: ', 'Sixteen beds closed in October.'),
       ('The premise is wrong: ', 'The unit has not closed.'),
       ('We do not: ', 'Discuss individual patients, without consent.')],
t_bound='It cannot judge what a family would want said about their relative, and '
        'it will not make the telephone call that would find out.',
t_a=[('Give it the questions as ____________.', 'asked'),
     ('And the published figures with their ____________.', 'sources'),
     ('And the ____________ position.', 'confidentiality'),
     ('Separate the answerable from the ____________.', 'refused'),
     ('With ____________ for each refusal.', 'reasons'),
     ('And test every sentence for standing ____________.', 'alone')],
t_b_rubric='Say what the press work should do with each item.',
t_b=[('“we are unable to comment at this time”', 'refuse with the reason in the sentence'),
     ('“why did you close the unit?”', 'correct the premise in its own sentence'),
     ('a figure in the March board papers', 'confirm it and cite the paper'),
     ('a two-sentence answer', 'rewrite it so neither half can be cut')],

case=dict(
 title='The Decision Room · The sentence that was printed alone',
 brief=[
  'A hospital answered media enquiries with statements of several sentences, on '
  'the view that context protected the organisation and its staff.',
  'Over three years, 46 statements were issued. 29 were quoted in part. In 11 '
  'cases a single sentence was printed without the sentence that qualified it, and '
  'in 4 of those the printed sentence read as attributing fault to staff. Two '
  'requests for correction were declined on the ground that the quotation was '
  'accurate.',
  'A rule was introduced that every sentence be capable of standing alone, with '
  'qualification inside the sentence rather than after it. Over the following '
  'three years sentences printed misleadingly fell to 1.'],
 exhibit=figs.datatable('THREE YEARS OF MEDIA STATEMENTS',
                        ['Item', 'Before / After'],
                        [['statements issued', '46 / 41'],
                         ['quoted in part', '29 / 27'],
                         ['single sentence printed without its qualifier', '11 / 1'],
                         ['printed as attributing fault to staff', '4 / 0'],
                         ['corrections requested', '2 / 0'],
                         ['corrections obtained', '0 / 0']]),
 exhibit_cap='The same coverage, with the qualification moved inside the sentence.',
 exhibit_note='Four sentences written to be fair to staff were printed in a form '
              'that blamed them, and every one of those quotations was accurate.',
 voices=[('A press officer', 'about single sentences',
          'If every sentence has to carry its own qualification, the statement reads like a legal document.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Four of our own sentences were printed as accusations against our own staff.'),
         ('A ward sister', 'about the printed sentence',
          'My team read that the checks were not carried out. The next sentence, which said they could not be, was not there.')],
 steps=[('Find it', 'How many statements were quoted in part?'),
        ('Compare it', 'Partial quotation against misleading effect.'),
        ('Infer it', 'Why did context fail to protect?'),
        ('Weigh it', 'Readability against four accusations.'),
        ('Decide', 'How is a statement written?')],
 analysis=[('Find it. How many?', '29 of 46'),
           ('Compare it. How many misleading?', '11, of which 4 blamed staff'),
           ('Infer it. Why did it fail?', 'because context is not printed and cannot be relied on'),
           ('Weigh it. What was traded?', 'elegance for four public accusations against staff'),
           ('Decide. How written?', 'with every sentence able to stand alone')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how each sentence must function.',
                 'Say what every refusal contains.',
                 'Say what is done with a false premise.',
                 'Say what may be said about an identifiable patient.'],
 bank=['Every sentence in a statement to the media is written so that it remains accurate and fair if printed without any other sentence.',
       'Every refusal to answer states the reason for the refusal in the same sentence as the refusal.',
       'Any factual error in a question is corrected in a separate sentence before any part of that question is answered.',
       'Nothing is said about an identifiable patient without that patient’s or their family’s written consent, and the route by which consent could be given is offered.'],
 outcome='The hospital adopts the four lines. Over the following three years '
         'single sentences printed without their qualification fall from eleven to '
         'one, sentences printed as attributing fault to staff fall from four to '
         'none, and requests for correction fall from two to none, while the '
         'proportion of statements quoted in part is almost unchanged at '
         'twenty-seven of forty-one.',
 outcome_q=[('What happened to misleading partial quotations?', 'they fell from eleven to one'),
            ('What happened to sentences blaming staff?', 'they fell from four to none'),
            ('What happened to correction requests?', 'there were none'),
            ('How many corrections had been obtained before?', 'none'),
            ('Over what period?', 'three years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Unable to comment at the present time',
 task=['This was the statement issued in response to four press questions.',
       'This is what it said.'],
 draft=['We are unable to comment on this matter at the present time.',
        'Patient confidentiality prevents us from discussing any of these issues.',
        'The trust is committed to the highest standards of patient care.',
        'A number of factors affect bed availability at any given time.',
        'It would not be appropriate to go into further detail at this stage.',
        'We shall of course keep the public informed as matters develop.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that answer none of four questions, two of which were answerable.',
 asked=['unable to comment', 'a number of factors',
        'as matters develop'],
 back=['29 of 46 statements quoted in part',
       '11 single sentences printed without qualifiers', '4 reading as blame'],
 gap='Nobody could tell which questions were refused, why, which figures were public, or how a patient question might properly be answered.',
 back_cap='Six lines that will produce a story about a trust that would not answer.',
 back_note='“Patient confidentiality prevents us from discussing any of these '
           'issues” was used to refuse two questions about bed numbers.',
 diagnosis=[('“a number of factors”', 'unscoped set'),
            ('“any of these issues”', 'unscoped set'),
            ('“at the present time”', 'unstated criterion'),
            ('“at this stage”', 'unstated criterion'),
            ('“as matters develop”', 'undefined done'),
            ('“committed to the highest standards”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that two questions are answered and two refusals are reasoned.',
 scaffold=['what every sentence must survive',
           'which enquiries are yours, and what requires consent',
           'what you are giving it',
           'what the answer must do with each kind of question',
           'how it is issued and to whom',
           'what you do when the deadline cannot be met'],
 bank=['Purpose: so that what we say is accurate, sayable and still accurate when one sentence of it is printed on its own',
       'Scope: operational enquiries about this site; clinical matters are answered by the medical director, anything about an identifiable patient requires that patient’s or the family’s written consent, and employment matters are not discussed at all',
       'Inputs: the questions exactly as asked, the figures already in the public domain with the paper and date of each, the confidentiality position, any consent already given, and the journalist’s deadline',
       'Criteria: every answerable question answered with a figure where one is publishable; any false premise corrected in its own sentence before the answer; every refusal carrying its reason; the consent route offered where a patient question could properly be answered; nothing said off the record; and every sentence capable of being printed alone',
       'Done: issued on the record before the deadline, with the same text given to anybody else who asks',
       'Fallback: where I cannot answer within the deadline, I say what I can confirm now and when the rest will follow, rather than letting the story be written without us'],
 check=['Are the answerable questions answered?',
        'Does every refusal carry its reason?',
        'Is the false premise corrected?',
        'Could each sentence stand alone?'],
 model=['so that what we say is accurate, sayable and still accurate when one sentence of it is printed on its own',
        'operational enquiries about this site; clinical matters are answered by the medical director, anything about an identifiable patient requires that patient’s or the family’s written consent, and employment matters are not discussed at all',
        'the questions exactly as asked, the figures already in the public domain with the paper and date of each, the confidentiality position, any consent already given, and the journalist’s deadline',
        'every answerable question answered with a figure where one is publishable; any false premise corrected in its own sentence before the answer; every refusal carrying its reason; the consent route offered where a patient question could properly be answered; nothing said off the record; and every sentence capable of being printed alone',
        'issued on the record before the deadline, with the same text given to anybody else who asks',
        'where I cannot answer within the deadline, I say what I can confirm now and when the rest will follow, rather than letting the story be written without us'],
 cost='29 of 46 statements quoted in part, 11 sentences printed without their qualifier, and 4 reading as blame.'),

lang=dict(
 title='The Unwelcome Number · Confirming a figure the legal team would rather withhold',
 setting=[
  'A journalist has asked how many beds were closed for want of staff. The figure '
  'is seven and it is in the November board papers. The legal team would rather it '
  'were not confirmed.',
  'Siobhán has to confirm it, keep the legal team’s cooperation, and not imply '
  'that caution was unreasonable.'],
 ladder=[('A legal team protecting the trust', 'and a figure already published'),
         ('Seven beds', 'in a public board paper'),
         ('Either decline to confirm', 'or confirm it and cite the paper')],
 cap='Seven beds, one published paper, and a five o’clock deadline.',
 turns=[('Turn 1 · Siobhán', 'We shall confirm that seven beds were closed for want of staff, and cite the November board paper.'),
        ('Turn 2 · Legal adviser', 'Confirming it makes us the source of the figure rather than a document nobody reads.'),
        ('Turn 3 · Siobhán', 'Declining to confirm a published number is itself the story, and it is a worse one.')],
 holds=['The paper is on our own website and has been since the twelfth of November.',
        'A refusal would be reported as the trust declining to say how many beds it had closed.',
        'Your advice is right about anything unpublished, and I shall follow it there.',
        'The sentence will carry the reason inside it, so it cannot be printed as an admission alone.',
        'I shall issue it on the record and send the same words to anybody else who asks.',
        'And if confirming published figures ever produces a worse outcome than withholding them, bring me the case and I shall change the practice.'],
 redline='Never decline to confirm a figure the organisation has already '
         'published, and never make a legal adviser carry an operational judgement.',
 score=['Stated the decision in the first sentence.',
        'Named where the figure is already published.',
        'Credited the advice for unpublished material.',
        'Took the decision as her own.',
        'Offered a test that could reverse the practice.'],
 a=[('How many beds were closed for want of staff?', 'seven'),
    ('Where is the figure published?', 'the November board papers, on the website'),
    ('What would a refusal be reported as?', 'the trust declining to say how many beds it had closed'),
    ('Where does the legal advice hold?', 'for anything unpublished'),
    ('How will the sentence be written?', 'with the reason inside it'),
    ('What is the redline?', 'never decline to confirm a figure already published')]),

rev_fig=figs.split('A PRESS ANSWER',
                   'Say',
                   ['we can confirm sixteen beds were closed in October',
                    'the premise of your third question is not correct',
                    'we do not discuss individual patients, because consent is needed',
                    'if the family wish us to answer, we shall'],
                   'Never say',
                   ['unable to comment at the present time',
                    'confidentiality prevents us discussing any of this',
                    'committed to the highest standards',
                    'we shall keep the public informed']),
rev_fig_cap='Four sentences that answer, and four that make a story out of silence.',
rev=dict(
 read=[('How many of the four questions can be answered?',
        ['two', 'all four', 'none', 'three'], 0),
       ('What is done with a false premise?',
        ['it is corrected in its own sentence first', 'it is ignored',
         'it is answered as asked', 'it is referred to legal'], 0),
       ('Why confirm a published figure?',
        ['withholding it looks evasive and achieves nothing',
         'the journalist insists',
         'the policy requires it',
         'it avoids a correction'], 0),
       ('How is every sentence written?',
        ['to survive being printed alone', 'to read well in sequence',
         'as briefly as possible', 'with legal clearance'], 0)],
 listen_text='Give it the questions as asked, the published figures with their '
             'sources, the confidentiality position and the deadline. Separate the '
             'answerable from the refused.',
 listen=[('Give it the questions as ____________.', 'asked'),
         ('And the published figures with their ____________.', 'sources'),
         ('And the ____________ position.', 'confidentiality'),
         ('Separate the answerable from the ____________.', 'refused')],
 speak=['Sort eight press questions into answerable, false premise and refused.',
        'Then rewrite six answers so no half can be cut.'],
 write='Write a six-line tasking for a press answer.',
 vocab=[('The hour by which an answer is useful is a ____________ a journalist gives you.', 'deadline'),
        ('What somebody else has already published is a thing already in the public ____________.', 'domain'),
        ('A refusal a reader will accept is a plain refusal with a ____________.', 'reason'),
        ('Somebody who knows what may be said is a spokesman who knows the ____________.', 'policy')],
 gram=[('I ____________ answer on the record or not at all.', 'shall'),
       ('Admissions ____________.', 'continue'),
       ('If the family ____________ us to answer.', 'wish'),
       ('Because we cannot do so ____________ their consent.', 'without')]),

found=['Answer what can be answered, with figures where they are published.',
       'Correct a false premise in its own sentence, first.',
       'Refuse with the reason inside the same sentence.',
       'Write every sentence to survive being printed alone.'],
end_line='Four sentences written to be fair to staff were printed as accusations against them, and every one of those quotations was accurate.',
end_next='Next: Somebody Raising a Concern About the Organisation')
