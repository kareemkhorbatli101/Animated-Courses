# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='The Interview Request',
gram='question forms under pressure, and the question behind them',
ai='interview preparation: the questions you will actually be asked',
strap='CEFR B2 · Grammar: question forms under pressure, and the question behind them · '
      'AI: interview preparation: the questions you will actually be asked',
cando=['recognise the question behind a question',
       'answer negative, tag and multi-part questions without being trapped',
       'agree the ground rules of an interview before accepting it',
       'say what a predicted question list can and cannot contain',
       'write a six-line tasking for interview preparation'],

hero=('THIRTY PREDICTED QUESTIONS, TWENTY-TWO OF THEM ASKED, AND THE TWO THAT HURT WERE NOT ON THE LIST',
      ['The published record gave her almost everything she would ask.',
       'Her best question came from a reception she had attended herself.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A twenty-minute recorded interview in Calmar, requested on Monday for the Thursday.',

warm=['What is the difference between a question and the question behind it?',
      'What would you want agreed before accepting an interview?',
      'Which question would you least like to be asked in public?'],

read=[
 'An interview request arrives as four polite lines and a deadline, and the four lines contain '
 'almost none of the information an Ambassador needs: the length, the format, whether it is '
 'live, who else is appearing and what the first question will be.',
 'Ambassador Walid Hourani answers none of it on Monday. He asks instead for the ground rules '
 'in writing, agrees twenty minutes recorded rather than live, declines to appear alongside a '
 'commentator, and seeks a clearance from the capital on two subjects he expects to arise.',
 'Then he prepares, which means predicting questions. A system reads a year of the '
 'broadcaster’s published output, the interviewer’s own pieces, and everything published about '
 'the Mission, and produces thirty likely questions ranked by probability.',
 'Twenty-six are plausible and twenty-two are in fact asked, in one form or another, which is a '
 'remarkable return on twenty minutes of preparation and considerably better than his own list '
 'of eight.',
 'Her two best questions are not on the list at all. One concerns a remark he made at a '
 'reception in February, which was never published and which she heard him make; the other is '
 'about his own career, and no corpus holds it.'],

dp1=('Ground rules', 'Media practice commonly distinguishes between on-the-record, '
     'background and non-attributable exchanges, and treats the terms of an interview — '
     'length, format, whether live or recorded, and who else appears — as matters agreed '
     'beforehand rather than discovered in the studio.',
     'Source: general media practice literature, 2025–2026.'),

c_a=[('What does an interview request usually contain?', 'four polite lines and a deadline'),
     ('What did Hourani ask for first?', 'the ground rules in writing'),
     ('What format did he agree?', 'twenty minutes recorded, not live'),
     ('How many questions were predicted?', 'thirty, ranked by probability'),
     ('How many were actually asked?', 'twenty-two'),
     ('Where did her best question come from?', 'a reception she had attended')],

c_b=[('He accepted the request on Monday.', 'F'),
     ('He agreed to appear with a commentator.', 'F'),
     ('He sought a clearance on two subjects.', 'T'),
     ('His own list had eight questions.', 'T'),
     ('Twenty-six of the thirty were plausible.', 'T'),
     ('Her best questions were on the list.', 'F')],

c_c=[('____________ it true that the Mission has had no reply since March?', 'Isn’t'),
     ('You did say in February that the matter was closed, ____________ you?', 'didn’t'),
     ('____________ exactly do you expect the agreement to be signed?', 'When'),
     ('____________ of the two subjects would you rather begin with?', 'Which'),
     ('____________ has the Mission not published the figures?', 'Why'),
     ('You would accept a shorter period, ____________ you?', 'wouldn’t')],

c_d=[('A negative question invites you to ( change the subject / accept its premise ).', ['change the subject', 'accept its premise'], 1),
     ('A tag question is designed to get ( agreement / information ).',
      ['agreement', 'information'], 0),
     ('When will you publish the figures? presupposes ( that you will / that you have ).',
      ['that you will', 'that you have'], 0),
     ('The prediction worked because the record is ( published / private ).',
      ['published', 'private'], 0),
     ('Her best question came from ( her own presence / a document ).',
      ['her own presence', 'a document'], 0)],

c_e=('Negative, tag or presupposing? Put each question in the right column.',
     [('Isn’t it true that there has been no reply?', 'negative'),
      ('You said it was closed, didn’t you?', 'tag'),
      ('When will you publish the figures?', 'presupposing'),
      ('Don’t you accept the delay is yours?', 'negative'),
      ('You would accept six months, wouldn’t you?', 'tag'),
      ('Why has the Mission concealed this?', 'presupposing')],
     ['negative', 'tag', 'presupposing']),

v_fig_title='BEFORE YOU SAY YES',
v_fig=[('doc', 'an interview request'), ('key', 'a ground rule'), ('clock', 'an interview length'),
       ('speech', 'a live broadcast'), ('people', 'a studio guest'), ('chart', 'a question list requested')],
v_fig_cap='Six words for the hour between a request arriving and an answer being given.',

vocab=[
 ('an interview request', 'a formal approach asking for an interview'),
 ('a ground rule', 'a condition agreed before an interview takes place'),
 ('an attributable quotation', 'words that may be published with the speaker’s name'),
 ('a non-attributable remark', 'words that may be used without naming the speaker'),
 ('an interview length', 'the agreed duration of an interview'),
 ('a live broadcast', 'transmission at the moment of speaking'),
 ('a recorded interview', 'an interview transmitted after editing'),
 ('an opening question', 'the first question put to a guest'),
 ('a closing question', 'the last question, often the sharpest'),
 ('a follow-up question', 'a question pressing the previous answer'),
 ('a leading question', 'a question framed to suggest its own answer'),
 ('a hostile question', 'a question intended to put the speaker at a disadvantage'),
 ('a question in bad faith', 'a question asked with no interest in the answer'),
 ('an agreed subject', 'a topic both sides accept will be covered'),
 ('a subject ruled out', 'a topic excluded by agreement beforehand'),
 ('an interviewer’s brief', 'the notes prepared for an interviewer'),
 ('a studio guest', 'another participant appearing in the same programme'),
 ('a transcript check', 'the reading of a transcript for accuracy'),
 ('a clearance from the capital', 'authority to speak on a named subject'),
 ('a question list requested', 'a request to be told the questions in advance')],

v_a=[('A condition agreed before an interview is a ____________ rule.', 'ground'),
     ('A topic excluded beforehand is a subject ruled ____________.', 'out'),
     ('Authority to speak on a named subject is a ____________ from the capital.', 'clearance'),
     ('A question framed to suggest its answer is a ____________ question.', 'leading'),
     ('Words that may be used without naming the speaker are a ____________ remark.', 'non-attributable'),
     ('The reading of a transcript for accuracy is a transcript ____________.', 'check'),
     ('The last question, often the sharpest, is a ____________ question.', 'closing'),
     ('Another participant in the same programme is a studio ____________.', 'guest')],

v_b=[('An attributable quotation is words that may be published', 'with the speaker’s name.'),
     ('A recorded interview is an interview transmitted', 'after editing.'),
     ('A question in bad faith is a question asked', 'with no interest in the answer.'),
     ('An interviewer’s brief is the notes', 'prepared for an interviewer.'),
     ('A follow-up question is a question', 'pressing the previous answer.')],

g_title='Grammar: question forms under pressure, and the question behind them',
g_rule=['A negative question (Isn’t it true that …?) asks you to accept a premise before you '
        'answer; deal with the premise first.',
        'A tag question (You said that, didn’t you?) seeks agreement, not information.',
        'A presupposing question (When will you publish the figures?) assumes a fact; if the '
        'assumption is wrong, say so before answering.',
        'A multi-part question lets the interviewer choose which part you answered; answer the '
        'part you can and name the part you are leaving.'],
g_fig=('THE QUESTION ASKED',
       ['Isn’t it true that there has been no reply since March?',
        'You said in February it was closed, didn’t you?',
        'When will the Mission publish the figures?',
        'Why has the Mission concealed the delay?'],
       'THE QUESTION BEHIND IT',
       ['Who is responsible for the delay, and will you say so?',
        'Will you now admit you were wrong in February?',
        'Do the figures exist, and are they bad?',
        'Will you accept the word concealed?'],
       'four questions as the interviewer says them',
       'the same four as the interviewer means them'),
g_fig_cap='Answer the question behind the question, and say which words of the question you do not accept.',

g_a=[('____________ it true that the Mission has had no reply since March?', 'Isn’t'),
     ('You did say in February that the matter was closed, ____________ you?', 'didn’t'),
     ('____________ exactly do you expect the agreement to be signed?', 'When'),
     ('____________ of the two subjects would you rather begin with?', 'Which'),
     ('____________ has the Mission not published the figures?', 'Why'),
     ('You would accept a shorter period, ____________ you?', 'wouldn’t'),
     ('____________ you accept that the delay is the Mission’s?', 'Don’t'),
     ('____________ anybody at the Mission read the decree before Tuesday?', 'Did'),
     ('There has been no progress at all, ____________ there?', 'has')],

g_b=[('( Isn’t it true that / Is it true that ) there has been no reply — the hostile form.', ['Isn’t it true that', 'Is it true that'], 0),
     ('You said it was closed, ( didn’t you / did you ) — the agreement-seeking tag.',
      ['didn’t you', 'did you'], 0),
     ('( When will you publish the figures / Will you publish figures ) — presupposes you will.',
      ['When will you publish the figures', 'Will you publish figures'], 0),
     ('( Why has the Mission concealed this / Has anything been withheld ) — presupposes concealment.',
      ['Why has the Mission concealed this', 'Has anything been withheld'], 0),
     ('There has been no progress, ( has there / hasn’t there ) — after a negative statement.',
      ['has there', 'hasn’t there'], 0),
     ('( Which of the two would you take first / Would you take one of these ) — a genuine choice.',
      ['Which of the two would you take first', 'Would you take one of these'], 0)],

d1=dict(
 title='Four lines and a deadline',
 fig=(['They want twenty minutes on Thursday.', 'Live or recorded?'],
      ['The letter does not say.', 'Then we do not answer yet.']),
 cap='Ambassador Walid Hourani and Layla Sayegh, Monday morning.',
 lines=[('Layla', 'An interview request. Twenty minutes, Thursday, their main evening programme.'),
        ('Hourani', 'Live or recorded?'),
        ('Layla', 'It does not say.'),
        ('Hourani', 'Who else is appearing?'),
        ('Layla', 'It does not say that either. Four lines and a deadline of tomorrow.'),
        ('Hourani', 'Then write back today with four questions of our own, politely.'),
        ('Layla', 'Length, format, other guests, and subjects.'),
        ('Hourani', 'And whether a transcript may be checked for accuracy, which they will refuse.'),
        ('Layla', 'They will say the questions cannot be supplied in advance.'),
        ('Hourani', 'They are right about that, and we should not ask. Subjects are a different matter.'),
        ('Layla', 'And if they will only do it live, alongside a commentator?'),
        ('Hourani', 'Then we decline this week and offer a recorded interview next week, and mean it.')],
 a=[('What was requested?', 'twenty minutes on Thursday'),
    ('What did the letter not say?', 'live or recorded, and who else appears'),
    ('What four questions will Layla ask?', 'length, format, other guests and subjects'),
    ('What should they not ask for?', 'the questions in advance'),
    ('What is offered if the terms are refused?', 'a recorded interview next week')],
 b=[('Four lines and a ____________ of tomorrow.', 'deadline'),
    ('Whether a ____________ may be checked for accuracy.', 'transcript'),
    ('Subjects are a different ____________.', 'matter'),
    ('We decline this week and ____________ it.', 'mean')]),

d2=dict(
 title='Thirty questions, and the two she kept',
 fig=(['Thirty questions. Twenty-two came up.', 'And the two that did not?'],
      ['February. The reception.', 'She was standing next to you.']),
 cap='Hourani and Layla, after the recording.',
 lines=[('Layla', 'How was it?'),
        ('Hourani', 'Twenty-two of the thirty, in one form or another. The preparation held.'),
        ('Layla', 'And the rest?'),
        ('Hourani', 'Two questions I had not seen coming, and both of them were better than the thirty.'),
        ('Layla', 'What were they?'),
        ('Hourani', 'What I said at the February reception about the timetable, which was never printed.'),
        ('Layla', 'She was there. I remember her by the window.'),
        ('Hourani', 'She was, and she wrote it down, and nothing we read could have told us that.'),
        ('Layla', 'And the second?'),
        ('Hourani', 'My own career. Where I served before, and what I did in those years.'),
        ('Layla', 'That is in no corpus and in every interviewer’s notebook.'),
        ('Hourani', 'And it is the question I must have an answer to before the next request arrives.')],
 unresolved=True,
 a=[('How many predicted questions came up?', 'twenty-two of thirty'),
    ('How many were unforeseen?', 'two'),
    ('What was the first about?', 'a remark at the February reception'),
    ('Why could it not be predicted?', 'it was never published'),
    ('What was the second about?', 'his own career')],
 b=[('The preparation ____________.', 'held'),
    ('Which was never ____________.', 'printed'),
    ('She was there and she wrote it ____________.', 'down'),
    ('In every interviewer’s ____________.', 'notebook')]),

speak=[('The question behind it',
        ['Your partner asks nine hostile questions from a list you write together.',
         'Say in each case what the question behind it is.',
         'Then answer the question behind it in one sentence.']),
       ('Four questions before yes',
        ['Your partner brings an interview request in four lines.',
         'Ask the four questions you need answered before accepting.',
         'Decide whether you would accept the terms offered.']),
       ('Do not accept the word',
        ['Your partner asks five questions containing a word you reject.',
         'Decline the word and answer the question, in that order.',
         'Keep each answer under twenty seconds.'])],

ext_title='A prediction from the published record is astonishingly good, and the best question in the room was never published',
ext_fig=figs.datatable('THIRTY PREDICTED, AND WHAT WAS ASKED',
                       ['Source of the question', 'Predicted?', 'Asked?'],
                       [['the broadcaster’s own coverage', 'yes, 11 questions', '9 asked'],
                        ['the interviewer’s past pieces', 'yes, 8 questions', '7 asked'],
                        ['published material on the Mission', 'yes, 11 questions', '6 asked'],
                        ['a remark at a reception in February', 'no', 'asked, and pressed'],
                        ['the Ambassador’s own career', 'no', 'asked at the end'],
                        ['total', '30', '24']]),
ext_fig_cap='Twenty-four questions asked, twenty-two of them anticipated, and the two that were not were the two that mattered.',
ext=[
 'Predicting interview questions is a task a system performs better than a Mission press '
 'officer, and it is worth being plain about why: the raw material is entirely published, '
 'abundant and patterned, and interviewers are far more consistent than they would like to '
 'believe.',
 'A year of a programme’s output shows what it asks about, in what order and with what '
 'formulations. A particular interviewer’s own pieces show which words she favours, which '
 'premises she builds into questions, and whether she opens softly or goes straight at the '
 'difficulty.',
 'Thirty ranked questions produced in minutes, of which twenty-two are asked in some form, is '
 'preparation an Ambassador could not previously buy at any price, and it changes what twenty '
 'minutes in a studio feels like.',
 'The two questions that were not predicted came from the two sources no corpus contains: '
 'something the interviewer heard with her own ears at a reception, and the ordinary human '
 'curiosity about the person in front of her.',
 'So add two things to any predicted list. First, every unscripted thing you have said in '
 'public in the last year, which only you and your press officer can reconstruct. Second, the '
 'four questions about yourself that you would least like to be asked.'],

dp2=('The unpublished remark', 'Press-handling guidance commonly advises that remarks made at '
     'receptions, briefings and social occasions may be used by journalists who were present, '
     'and that a speaker should assume that anything said in such a setting may be raised '
     'later in an interview.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('Why is question prediction well suited to a system?', 'the material is published and patterned'),
     ('What does a year of output show?', 'what a programme asks, in what order and how'),
     ('What do an interviewer’s own pieces show?', 'her favoured words and premises'),
     ('Which two sources are never in a corpus?', 'what she heard herself, and curiosity about you'),
     ('What two things must you add to the list?',
      'your own unscripted remarks and the questions about yourself')],
e_b=[('Interviewers are less consistent than they think.', 'F'),
     ('Twenty-two of thirty is a strong return.', 'T'),
     ('A reception remark cannot be raised later.', 'F'),
     ('Only you can reconstruct your own unscripted remarks.', 'T'),
     ('Personal questions appear in published corpora.', 'F'),
     ('Prediction changes what a studio feels like.', 'T')],

w_model='Purpose: so that the Ambassador is not surprised in a twenty-minute recorded '
        'interview on Thursday. Scope: the interview of 14 March; the panel appearance in April '
        'is prepared separately. Inputs: a year of the programme’s published output, the '
        'interviewer’s own pieces of the last two years, published material on the Mission, and '
        'our own note of the Ambassador’s public remarks since January. Criteria: 30 likely '
        'questions ranked by probability, each with the premise it contains and the word in it '
        'we would not accept; 4 questions about the Ambassador himself listed separately. Done: '
        'the list with the Ambassador by 17:00 on 12 March. Fallback: where a question would '
        'require a clearance we do not hold, the subject is referred to the capital on 11 March.',
w_fig=figs.spec_card('SIX LINES FOR AN INTERVIEW',
                     [('Purpose', 'no surprises in 20 recorded minutes'),
                      ('Scope', 'the interview of 14 March'),
                      ('Inputs', 'a year of output, her own pieces, our note of his remarks'),
                      ('Criteria', '30 ranked questions, premises and words; 4 personal'),
                      ('Done', 'with the Ambassador by 17:00 on 12 March'),
                      ('Fallback', 'no clearance: refer the subject on 11 March')]),
w_fig_cap='Line 3’s last clause is the one a system cannot supply: what he said when nobody printed it.',
w_task='Write a six-line tasking for interview preparation.',
w_steps=['Line 1: what the preparation must prevent, and when.',
         'Line 2: which interview, and what is prepared separately.',
         'Line 3: the published inputs and your own note of unscripted remarks.',
         'Line 4: how many questions, ranked how, with what attached.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what is done where a clearance is missing.'],
w_bank=['Purpose: so that the Ambassador is not surprised in … on … ',
        'Scope: the interview of … ; … is prepared separately',
        'Inputs: a year of … , the interviewer’s pieces, and our note of public remarks since … ',
        'Criteria: … questions ranked by probability, each with its premise and the word we reject',
        'Done: the list with … by … . Fallback: where a clearance is lacking, … '],
w_check=['Does line 3 include your own note of unscripted remarks?',
         'Does each question carry its premise?',
         'Are personal questions listed separately?',
         'Does line 6 refer missing clearances in time?'],

t_title='Interview preparation: the questions you will actually be asked',
t_fig=figs.split('BEFORE A STUDIO',
                 'A system can predict',
                 ['what the programme always asks',
                  'the interviewer’s favoured premises',
                  'the questions published coverage invites',
                  'the order she is likely to use'],
                 'Only you can supply',
                 ['what you said at a reception',
                  'what you said off the cuff in June',
                  'the questions about your own past',
                  'what you are not cleared to discuss']),
t_fig_cap='Thirty questions from the record, and four from your own memory of your own mouth.',
t_body=[
 'Give it a year of the programme’s output, the interviewer’s own pieces, and everything '
 'published about your Mission, and ask for thirty likely questions ranked by probability, each '
 'one written in the form she would actually use rather than as a topic.',
 'Ask for two things with each question: the premise it contains, and the word in it you would '
 'not want to repeat. Questions arrive with words attached — concealed, failed, refused — and a '
 'predicted list is most useful when it shows you the word before the camera does.',
 'Then add what no corpus holds. Sit with your press officer and reconstruct every unscripted '
 'public remark you have made since January, and write down the four questions about your own '
 'career you would least like to be asked. Those four are the ones you must be able to answer '
 'in two sentences.'],
t_say=[('Ask for the questions: ', 'Thirty likely questions, ranked, in the form she would use.'),
       ('Ask for the premises: ', 'For each, the premise it contains and the word I should not repeat.'),
       ('Ask yourself: ', 'What have I said in public since January that was never printed?')],
t_bound='A prediction is built from what has been published. It cannot know what a journalist '
        'heard you say at a reception, what a local official told her last week, or what she is '
        'simply curious about, and those are frequently her best questions.',
t_a=[('Thirty likely questions, ranked, in the form she would ____________.', 'use'),
     ('The ____________ it contains.', 'premise'),
     ('And the word I should not ____________.', 'repeat'),
     ('What have I said in public that was never ____________?', 'printed'),
     ('What a journalist heard you say at a ____________.', 'reception'),
     ('Or what she is simply ____________ about.', 'curious')],
t_b_rubric='Say whether each question could have been predicted from the published record.',
t_b=[('A question about the figures in last month’s report.', 'yes: the report is published'),
     ('A question about a remark at a reception.', 'no: nobody printed it'),
     ('A question the programme asks every guest.', 'yes: it is in a year of output'),
     ('A question about where you served in 2014.', 'no, unless your own career is published')],

case=dict(
 title='The Decision Room · Twenty-two of thirty, and the February reception',
 brief=[
  'An interview request arrives in four lines with a deadline of the following day. The '
  'Mission replies with four questions of its own and agrees twenty minutes recorded, with no '
  'other guest and two subjects named as agreed.',
  'A predicted list of thirty questions is produced from a year of the programme’s output, the '
  'interviewer’s own pieces and published material on the Mission. Twenty-two of the thirty are '
  'asked in some form during the recording.',
  'Two questions are not on the list. The first concerns a remark the Ambassador made at a '
  'reception in February, which was never published and which the interviewer heard herself. '
  'The second is about his own career before this post.'],
 exhibit=figs.datatable('TWENTY MINUTES, QUESTION BY QUESTION',
                        ['Question', 'Predicted?', 'Answer given'],
                        [['the timetable', 'yes, ranked 2', 'prepared'],
                         ['the figures in the report', 'yes, ranked 5', 'prepared'],
                         ['the delay since March', 'yes, ranked 1', 'prepared'],
                         ['the February reception remark', 'no', 'improvised, and weaker'],
                         ['his career before this post', 'no', 'improvised, and adequate'],
                         ['nineteen others', 'yes', 'prepared']]),
 exhibit_cap='Two improvised answers out of twenty-four, and both of them are the ones that were used.',
 exhibit_note='The prediction was excellent on everything published. Both gaps lay outside '
              'the published record, and only one of them could have been closed by the '
              'Mission’s own note-keeping.',
 voices=[('Ambassador Walid Hourani', 'head of mission',
          'Twenty-two of thirty. I have never walked into a studio that well prepared in thirty years.'),
         ('Layla Sayegh', 'press and cultural attaché',
          'And the clip they used was the one about February, which we could have reconstructed ourselves.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'So the gap is not in the prediction. It is in our record of what the Ambassador says in public.')],
 steps=[('Find it', 'What did the prediction achieve?'),
        ('Compare it', 'The predicted questions against the two that were used.'),
        ('Infer it', 'Why were those two invisible?'),
        ('Weigh it', 'Twenty-two prepared answers against two improvised ones.'),
        ('Decide', 'What does the Mission add to its preparation?')],
 analysis=[('Find it. What did it achieve?', 'twenty-two of thirty questions anticipated'),
           ('Compare it. Predicted against used?', 'both broadcast clips were unpredicted'),
           ('Infer it. Why invisible?', 'one was unpublished, the other personal'),
           ('Weigh it. What is the balance?', 'strong preparation with two unguarded answers'),
           ('Decide. What is added?', 'a note of unscripted remarks and four personal questions')],
 decision='Decide the standing preparation, in four lines.',
 decision_steps=['Say what is agreed before an interview is accepted.',
                 'Say what is predicted and from what.',
                 'Say what the Mission keeps that no corpus holds.',
                 'Say what the Ambassador prepares about himself.'],
 bank=['No interview is accepted until length, format, other guests and subjects are agreed in writing.',
       'Thirty ranked questions are predicted from the programme’s output, the interviewer’s pieces and published material.',
       'The Mission keeps a running note of every unscripted public remark the Ambassador makes.',
       'The Ambassador keeps two-sentence answers to the four questions about himself he least wants asked.'],
 outcome='The clip used in the broadcast is the February answer, which is adequate rather '
         'than good. The Mission begins a running note of unscripted remarks the same week, one '
         'line per occasion, and by June it holds forty-one entries. At the next interview the '
         'predicted list has thirty-four questions, four of them drawn from that note, and two '
         'of the four are asked.',
 outcome_q=[('Which answer was used in the broadcast?', 'the February one'),
            ('How good was it?', 'adequate rather than good'),
            ('What did the Mission begin?', 'a running note of unscripted remarks'),
            ('How many entries by June?', 'forty-one'),
            ('How many of the four new questions were asked?', 'two')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Get me ready for Thursday',
 task=['An Ambassador asked his press officer to prepare him for a recorded interview.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Get me ready for Thursday.',
        'They will ask about the usual things.',
        'Give me the likely questions.',
        'And some good answers.',
        'Not too many pages.',
        'By Wednesday evening.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them names the interview, the programme or the subjects.',
 asked=['Ready for Thursday', 'The likely questions', 'Some good answers'],
 back=['41 questions, unranked', '0 premises identified', '0 questions about the Ambassador'],
 gap='Nobody said which programme, which interviewer, how many questions, or that the premises matter.',
 back_cap='Forty-one topics in no order, with no premise shown and nothing personal.',
 back_note='The usual things is the whole difficulty: an interviewer’s questions are not '
           'topics but formulations, and the word inside a formulation is what a guest has to '
           'decide in half a second whether to repeat.',
 diagnosis=[('“the usual things”', 'hidden assumption'),
            ('“the likely questions”', 'hidden assumption'),
            ('“ready for Thursday”', 'undefined done'),
            ('“some good answers”', 'undefined done'),
            ('“a lot of detail”', 'unbounded quantity'),
            ('“not too many pages”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that the list is ranked and the premises are visible.',
 scaffold=['what the preparation must prevent, and when',
           'which interview and which programme, and what is separate',
           'the published inputs and your own note of remarks',
           'how many questions, ranked how, with what attached to each',
           'what is delivered, to whom and by when',
           'what is done where a clearance is missing'],
 bank=['Purpose: so that the Ambassador is not surprised in a … -minute … interview on … ',
       'Scope: the interview of … ; … is prepared separately',
       'Inputs: a year of the programme’s output, the interviewer’s pieces, and our note of public remarks since … ',
       'Criteria: … questions ranked by probability, each with its premise and the word we reject; … personal questions listed separately',
       'Done: the list with the Ambassador by … ',
       'Fallback: where a question would need a clearance we do not hold, the subject is referred by … '],
 check=['Is the programme and the interviewer named?',
        'Is the number of questions stated?',
        'Must each question show its premise?',
        'Are personal questions listed separately?'],
 model=['so that the Ambassador is not surprised in a 20-minute recorded interview on 14 March',
        'the interview of 14 March; the panel appearance in April is prepared separately',
        'a year of the programme’s output, the interviewer’s pieces of 2 years, and our note of his public remarks since January',
        '30 questions ranked by probability, each with its premise and the word we would not repeat; 4 personal questions listed separately',
        'the list with the Ambassador by 17:00 on 12 March',
        'where a question would need a clearance we do not hold, the subject is referred to the capital on 11 March'],
 cost='41 unranked topics for 20 minutes of air. 1 stated number and 1 stated premise '
      'requirement would have produced a usable list.'),

feet=dict(
 title='On Your Feet · The first question is not the one you prepared',
 setting=[
  'The recording begins. You have thirty ranked questions in your head and an answer for each '
  'of the first five. The interviewer does not use any of them.',
  'She opens instead with something you said at a reception in February, which was never '
  'published and which you only half remember saying, and she has it almost word for word.'],
 ladder=[('In February you said the timetable had slipped', 'the remark you half remember'),
         ('Were you misinformed, or misleading us?', 'the two-part trap'),
         ('So you accept the Mission got it wrong', 'the summary you must not let stand')],
 cap='Three turns at the top of a twenty-minute recording.',
 turns=[('Turn 1 · The interviewer', 'At a reception in February you said the timetable had already slipped.'),
        ('Turn 2 · The interviewer', 'So were you misinformed at the time, or were you misleading us?'),
        ('Turn 3 · The interviewer', 'Then you accept that the Mission got the timetable wrong.')],
 holds=['I do not have a note of that evening in front of me, so let me tell you what the position is.',
        'If I said the timetable had slipped, it had, and I would say the same today.',
        'I am not going to choose between your two words, because neither of them describes what happened.',
        'What happened is that a date moved, we said so, and we said it in public rather than waiting.',
        'I accept that the first timetable was wrong. I do not accept that it was concealed.',
        'If it is useful, I can tell you exactly what the current dates are and who decides them.'],
 redline='You must not deny a remark you may well have made, you must not choose between two '
         'hostile characterisations because you are offered only those two, and you must not '
         'repeat the word misleading. Do not guess at what you said; speak to what the position '
         'is.',
 score=['Did not deny or confirm the exact words without a note.',
        'Stood behind the substance of what was said.',
        'Refused both offered characterisations, explicitly.',
        'Conceded the part that was true, in plain words.',
        'Declined to repeat the hostile word, and offered facts instead.'],
 a=[('Why not deny the remark?', 'you may well have made it and have no note'),
    ('What do you stand behind?', 'the substance: the timetable had slipped'),
    ('What do you refuse?', 'choosing between misinformed and misleading'),
    ('What do you concede?', 'that the first timetable was wrong'),
    ('What do you not accept?', 'that anything was concealed'),
    ('What do you offer instead?', 'the current dates and who decides them')]),

rev_fig=figs.split('AN INTERVIEW REQUEST',
                   'Agree first',
                   ['the length and the format',
                    'live or recorded',
                    'any other guest',
                    'the subjects, and any ruled out'],
                   'Prepare second',
                   ['thirty ranked questions',
                    'the premise in each',
                    'the word you will not repeat',
                    'four questions about yourself']),
rev_fig_cap='Nothing is prepared until the terms are agreed, and nothing is agreed in a telephone call.',
rev=dict(
 read=[('How long was the interview?',
        ['twenty minutes', 'an hour', 'five minutes', 'two hours'], 0),
       ('How many questions were predicted?',
        ['thirty', 'eight', 'twenty-two', 'four'], 0),
       ('How many were asked in some form?',
        ['twenty-two', 'thirty', 'two', 'eleven'], 0),
       ('Where did the unpredicted question come from?',
        ['a reception she attended', 'a published report',
         'the interviewer’s own pieces', 'the Mission’s website'], 0)],
 listen_text='Ask for thirty likely questions ranked by probability, in the form the '
             'interviewer would use, each with the premise it contains and the word you should '
             'not repeat. Then add your own unscripted remarks and four questions about yourself.',
 listen=[('Ask for thirty likely questions ranked by ____________.', 'probability'),
         ('Each with the ____________ it contains.', 'premise'),
         ('And the word you should not ____________.', 'repeat'),
         ('Then add four questions about ____________.', 'yourself')],
 speak=['Answer nine hostile questions by naming the question behind each one.',
        'Then ask the four questions you need answered before accepting an interview.'],
 write='Write a six-line tasking for interview preparation.',
 vocab=[('A condition agreed beforehand is a ____________ rule.', 'ground'),
        ('A topic excluded beforehand is a subject ruled ____________.', 'out'),
        ('Authority to speak on a subject is a ____________ from the capital.', 'clearance'),
        ('A question framed to suggest its answer is a ____________ question.', 'leading')],
 gram=[('____________ it true that there has been no reply?', 'Isn’t'),
       ('You said it was closed, ____________ you?', 'didn’t'),
       ('____________ you accept that the delay is ours?', 'Don’t'),
       ('There has been no progress, ____________ there?', 'has')]),

found=['Agree length, format, other guests and subjects before you accept an interview.',
       'Ask for thirty ranked questions in the interviewer’s own formulations.',
       'Keep a running note of every unscripted public remark you make.',
       'Have two-sentence answers ready to the four questions about yourself you dread.'],
end_line='It can predict what has been printed. Only you remember what you said out loud.',
end_next='Next: A Panel and Three Minutes')
