# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='We Require That It Be',
gram='formal requirement: we require that it be',
ai='compounding: systems that improve because they were used',
strap='CEFR C1 · Grammar: formal requirement · AI: compounding through use',
cando=['use the mandative subjunctive in formal requirements correctly',
       'write a requirement that survives being read by a lawyer',
       'explain how a system improves because it was used, and when it does not',
       'identify what must be captured for an improvement to compound',
       'state the limits of a correction record as evidence'],
hero=('TWO YEARS OF CORRECTIONS, UNRECORDED',
      ['Every correction was a lesson, and we kept none of them.',
       'It is essential that each correction be logged with its reason.'],
      [(780, 'orange', 'long'), (1500, 'teal', 'short'),
       (2200, 'purple', 'long'), (2840, 'grey', 'short')]),
hero_cap='A system improves through use only if somebody decided to keep the use.',

warm=['What does your organisation correct repeatedly without recording the correction?',
      'Who would know, in two years, why a correction was made today?',
      'What would have to be captured for a process to get better by being used?'],
read=[
 'For two years the reviewers at Arclight corrected the drafting system perhaps forty times a '
 'month, and in each case they fixed the output and moved on. The corrections were not '
 'recorded anywhere beyond the corrected document itself, which means that the firm performed '
 'roughly a thousand acts of teaching and retained none of them.',
 'The discovery was Jonas Riedel’s and it arrived in an unwelcome form. Asked to improve the '
 'drafting on the format survey, he found that the only evidence of what it got wrong was '
 'eleven cases Victor Sandoval happened to remember, and that reconstructing the rest would '
 'require comparing a thousand drafts with a thousand finished sheets, which was possible, '
 'cost five weeks, and recovered the reason for a correction in about a third of cases.',
 'The requirement Marta Olsen then drafted is two sentences long and is worded with a '
 'formality that irritated several people. Arclight requires that every correction to a '
 'system-produced draft be logged with the field corrected, the correction made and a reason '
 'of not fewer than five words; and that no correction be released to a client until it has '
 'been so logged. It is essential, the note adds, that the reason describe the cause rather '
 'than the remedy.',
 'The effect over the following nine months was larger than anybody had predicted and arrived '
 'in a shape nobody had predicted either. The logged reasons made the drafting measurably '
 'better on the commonest fourteen fields; they made no difference at all on the fields that '
 'were already right; and they revealed that two of the fields everybody considered '
 'problematic were in fact correct, and that the reviewers had been introducing an error '
 'while fixing a presentation they disliked.',
 'What has not happened is the compounding Kenji Watanabe had put in the business case, which '
 'assumed the improvement rate of the first quarter would continue. It did not. The curve '
 'flattened in month seven, and his revised note says plainly that the firm has exhausted the '
 'cases that occur often enough to learn from, and that the remaining errors are rare, '
 'various and expensive to teach.'],
c_a=[('How many corrections a month were made, and what was recorded?', 'about forty a month; nothing beyond the corrected document'),
     ('What did Jonas find when asked to improve the drafting?', 'that the only evidence was eleven cases Victor remembered'),
     ('What does Marta’s requirement demand?', 'that every correction be logged with field, correction and a reason of at least five words'),
     ('What did the logged reasons reveal about two fields?', 'that they were correct and reviewers had been introducing an error'),
     ('What has not happened?', 'the compounding assumed in the business case; the curve flattened in month seven')],
c_b=[('The corrections were recorded in a log from the start.', 'F'),
     ('Reconstructing the reasons was impossible.', 'F'),
     ('Marta’s requirement is two sentences long.', 'T'),
     ('The reason must describe the remedy rather than the cause.', 'F'),
     ('The drafting improved on the commonest fourteen fields.', 'T'),
     ('The improvement rate continued as forecast.', 'F')],
c_c=[('Roughly a thousand acts of ____________, and retained none.', 'teaching'),
     ('Recovered the reason for a correction in about a ____________ of cases.', 'third'),
     ('A reason of not fewer than five ____________.', 'words'),
     ('The reason must describe the ____________ rather than the remedy.', 'cause'),
     ('Fixing a presentation they ____________.', 'disliked'),
     ('The remaining errors are rare, various and expensive to ____________.', 'teach')],
c_d=[('A system improves through use only if the use is ( repeated / kept ).', ['repeated', 'kept'], 1),
     ('How much of the historical reasoning could be reconstructed?', ['all of it', 'about a third', 'none', 'nine tenths'], 1),
     ('What did the log reveal about two problematic fields?', ['they were worse than thought', 'they were correct and reviewers were introducing errors', 'they were missing', 'they were duplicated'], 1),
     ('When did the improvement curve flatten?', ['month one', 'month seven', 'month nine', 'it has not'], 1),
     ('Why has compounding stopped?', ['the log failed', 'the frequent cases are exhausted', 'staff left', 'volumes fell'], 1)],
c_e=('Subjunctive or indicative? Put each sentence in the right column.',
     [('We require that every correction be logged.', 'subjunctive'),
      ('Every correction is logged.', 'indicative'),
      ('It is essential that the reason describe the cause.', 'subjunctive'),
      ('The reason describes the cause.', 'indicative'),
      ('We insist that no correction be released unlogged.', 'subjunctive'),
      ('No correction is released unlogged.', 'indicative')],
     ['subjunctive', 'indicative']),

v_fig_title='HOW A SYSTEM GETS BETTER',
v_fig=[('chart', 'an improvement curve'), ('bulb', 'a feedback loop'), ('doc', 'labelled data'),
       ('bank', 'a data asset'), ('scale', 'a baseline measure'), ('key', 'an edge case')],
v_fig_cap='Six words for the machinery by which use becomes improvement, or fails to.',
vocab=[
 ('a feedback loop', 'an arrangement in which output is fed back to change future output'),
 ('to accrue', 'to accumulate steadily over time as a result of what is done'),
 ('a flywheel', 'a mechanism in which each turn makes the next turn easier'),
 ('network effects', 'the increase in value to each user as the number of users grows'),
 ('a data asset', 'accumulated data that has value because of what it permits'),
 ('an improvement curve', 'the line describing how performance changes with experience'),
 ('labelled data', 'records in which the correct answer has been recorded alongside'),
 ('reinforcement', 'the strengthening of a behaviour by what follows it'),
 ('iteration', 'one pass of a repeated cycle of change and measurement'),
 ('a virtuous circle', 'a sequence in which each effect improves its own cause'),
 ('a baseline measure', 'the performance figure taken before any change is made'),
 ('retraining', 'the reworking of a system on newly accumulated evidence'),
 ('telemetry', 'measurements sent automatically from a process as it runs'),
 ('instrumentation', 'the deliberate fitting of measurement into a process'),
 ('a correction', 'an intervention recording that an output was wrong, and how'),
 ('a signal', 'an observation that carries information about what is true'),
 ('an edge case', 'a case at the boundary of what the design anticipated'),
 ('a learning rate', 'how fast performance improves per unit of evidence'),
 ('a plateau', 'the point at which further effort stops producing improvement'),
 ('a diminishing return', 'a gain that grows smaller with each additional unit of effort')],
v_a=[('Records in which the correct answer is recorded alongside are ____________.', 'labelled data'),
     ('The point at which further effort stops producing improvement is a ____________.', 'plateau'),
     ('The deliberate fitting of measurement into a process is ____________.', 'instrumentation'),
     ('A case at the boundary of what the design anticipated is an ____________.', 'edge case'),
     ('The performance figure taken before any change is a ____________.', 'baseline measure'),
     ('A mechanism in which each turn makes the next easier is a ____________.', 'flywheel'),
     ('The reworking of a system on newly accumulated evidence is ____________.', 'retraining'),
     ('To accumulate steadily as a result of what is done is to ____________.', 'accrue')],
v_b=[('A feedback loop is an arrangement in which output', 'is fed back to change future output.'),
     ('Network effects are the increase in value to each user', 'as the number of users grows.'),
     ('A data asset is accumulated data that has value', 'because of what it permits.'),
     ('A learning rate is how fast performance improves', 'per unit of evidence.'),
     ('A diminishing return is a gain that grows smaller', 'with each additional unit of effort.')],

g_title='Grammar: formal requirement with the subjunctive',
g_rule=['After require, insist, demand, essential, vital and imperative, use the bare infinitive.',
        'We require that every correction be logged, not is logged or should be logged.',
        'The form does not change for person or number: that he be, that they be, that it be.',
        'Negation precedes the verb: we require that no correction be released unlogged.'],
g_fig=('LOOSE',
       ['We require that every correction is logged.',
        'It is essential that the reason describes the cause.',
        'We insist that no correction is released unlogged.',
        'It is imperative that he submits it by Friday.'],
       'PRECISE',
       ['We require that every correction be logged.',
        'It is essential that the reason describe the cause.',
        'We insist that no correction be released unlogged.',
        'It is imperative that he submit it by Friday.'],
       'four indicatives where a requirement was meant',
       'four subjunctives, as formal usage requires'),
g_fig_cap='The subjunctive signals that this is a requirement and not a description.',
g_a=[('We require that every correction ____________ (be) logged.', 'be'),
     ('It is essential that the reason ____________ (describe) the cause.', 'describe'),
     ('We insist that no correction ____________ (be) released unlogged.', 'be'),
     ('It is imperative that he ____________ (submit) it by Friday.', 'submit'),
     ('Marta demanded that the clause ____________ (appear) in every contract.', 'appear'),
     ('It is vital that the log ____________ (contain) a reason of five words.', 'contain'),
     ('We require that each reviewer ____________ (record) the field corrected.', 'record'),
     ('It is essential that nothing ____________ (go) to a client unlogged.', 'go'),
     ('The board requires that the figure ____________ (be) restated each quarter.', 'be')],
g_b=[('We require that every correction ( be / is ) logged.', ['be', 'is'], 0),
     ('It is essential that the reason ____ the cause.', ['describes', 'describe', 'is describing', 'will describe'], 1),
     ('We insist that no correction ____ released unlogged.', ['is', 'be', 'will be', 'should', ], 1),
     ('It is imperative that he ____ it by Friday.', ['submits', 'submit', 'will submit', 'is submitting'], 1),
     ('Marta demanded that the clause ____ in every contract.', ['appears', 'appear', 'appeared', 'will appear'], 1),
     ('The subjunctive form for they is', ['are', 'be', 'were', 'being'], 1)],

d1=dict(title='A thousand lessons, none kept',
        fig=(['Forty corrections a month.', 'For two years.'],
             ['And the log?', 'There is no log.']),
        cap='Jonas and Victor, in the week of the discovery.',
        lines=[('Jonas', 'I was asked to improve the drafting. The first thing I needed was a list of '
                         'what it gets wrong.'),
               ('Victor', 'We correct it about forty times a month.'),
               ('Jonas', 'I know. Where is that recorded?'),
               ('Victor', 'In the corrected sheet. We fix the field and the sheet goes out right.'),
               ('Jonas', 'So the correction exists and the reason for it does not. Two years, forty a '
                         'month, which is roughly a thousand pieces of teaching that went nowhere.'),
               ('Victor', 'When you put it that way it sounds negligent. It did not feel negligent, it '
                          'felt like finishing the work.'),
               ('Jonas', 'It was finishing the work. The log is a different activity that nobody asked '
                         'for and that takes twenty seconds a time.'),
               ('Victor', 'Twenty seconds times a thousand is five and a half hours over two years, '
                          'which is nothing.'),
               ('Jonas', 'It is nothing, and the thing it would have bought is the only evidence base '
                         'the improvement work has. I can reconstruct about a third of it by comparing '
                         'drafts with finished sheets, and it will take five weeks.'),
               ('Victor', 'Do the five weeks. And write the requirement so that it is not optional, '
                          'because if it is phrased as good practice it will survive four weeks.'),
               ('Jonas', 'Marta is drafting it. It will say that we require that every correction be '
                         'logged, in that register, which people will find pompous.'),
               ('Victor', 'Let them. Pompous and unambiguous beats friendly and ignored, and I say '
                          'that as somebody who will be logging forty a month.')],
        a=[('What did Jonas need first?', 'a list of what the drafting gets wrong'),
           ('Where were corrections recorded?', 'only in the corrected sheet itself'),
           ('How long does logging take per correction?', 'about twenty seconds'),
           ('How much can be reconstructed, and at what cost?', 'about a third, in five weeks'),
           ('Why must the requirement be formally worded?', 'because phrased as good practice it would survive four weeks')],
        b=[('The correction exists and the ____________ for it does not.', 'reason'),
           ('It felt like finishing the ____________.', 'work'),
           ('The only ____________ base the improvement work has.', 'evidence'),
           ('Pompous and unambiguous beats friendly and ____________.', 'ignored')]),
d2=dict(title='The curve that flattened',
        fig=(['Month one to six: a real curve.', 'Month seven: flat.'],
             ['So the business case was wrong.', 'The business case was a straight line.']),
        cap='Kenji and Jonas, at month nine.',
        lines=[('Kenji', 'My business case assumed the first quarter’s improvement rate would '
                         'continue for three years. It stopped in month seven.'),
               ('Jonas', 'It did not stop, it flattened. We are still improving at about a tenth of '
                         'the earlier rate.'),
               ('Kenji', 'A tenth of the rate against a straight-line forecast is a large miss, and '
                         'I wrote the forecast.'),
               ('Jonas', 'The cause is not mysterious. We have learned everything there is to learn '
                         'from errors that happen often. What is left is rare, and each rare case '
                         'teaches us about one client.'),
               ('Kenji', 'Then the data asset is finite.'),
               ('Jonas', 'The useful part of it is finite at this volume. At ten times the volume '
                         'the rare cases would occur often enough to learn from, which is an argument '
                         'for growth that I do not entirely trust.'),
               ('Kenji', 'Why not?'),
               ('Jonas', 'Because it is the argument every firm in this position makes, and it is '
                         'unfalsifiable until you have done it. If it is wrong, you have ten times '
                         'the volume and the same error rate.'),
               ('Kenji', 'I have to restate the three-year figure for the board. What do I say the '
                         'improvement will be?'),
               ('Jonas', 'I do not know. I can tell you the rate for the last three months and I '
                         'cannot tell you whether it is a plateau or a step before another rise.'),
               ('Kenji', 'The board will ask which.'),
               ('Jonas', 'Then tell them nobody knows, and that the honest number is the last three '
                         'months extended flat, which will look like pessimism and is the only figure '
                         'I would defend.')],
        unresolved=True,
        a=[('What did Kenji’s business case assume?', 'that the first quarter’s improvement rate would continue for three years'),
           ('What is the current rate?', 'about a tenth of the earlier rate'),
           ('Why has it flattened?', 'because the frequent errors have been learned from and what remains is rare'),
           ('What is the argument for growth, and why does Jonas distrust it?', 'that volume would make rare cases frequent; it is unfalsifiable until attempted'),
           ('What figure does Jonas say he would defend?', 'the last three months extended flat')],
        b=[('It did not stop, it ____________.', 'flattened'),
           ('Each rare case teaches us about one ____________.', 'client'),
           ('It is ____________ until you have done it.', 'unfalsifiable'),
           ('Which will look like ____________.', 'pessimism')]),

speak=[('Say it correctly',
        ['Student A: state six requirements using require, insist, essential and imperative.',
         'Student B: check the subjunctive form in each.',
         'Find the one that would be better as a plain instruction.']),
       ('Spoken specification: what must be captured',
        ['Name something your organisation corrects repeatedly.',
         'Brief aloud what would have to be logged for the correction to teach anything.',
         'Your partner asks how long the logging takes and who will resent it.']),
       ('Flat or a step?',
        ['In pairs, describe an improvement that slowed down at your work.',
         'Argue one side each: a plateau, or a pause before another rise.',
         'Find what evidence would settle it, and whether you have it.'])],

ext_title='Use produces improvement only where somebody decided to keep the use',
ext_fig=figs.datatable('NINE MONTHS OF LOGGED CORRECTIONS',
                       ['Field group', 'Corrections logged', 'Error rate change', 'Note'],
                       [['the 14 commonest fields', '2,180', '−68%', 'the whole of the gain'],
                        ['fields already correct', '31', 'no change', 'nothing to learn'],
                        ['2 fields thought faulty', '94', '+4%', 'reviewers were wrong'],
                        ['rare client-specific fields', '206', '−3%', 'each teaches 1 client'],
                        ['month 1 to 6 rate', '—', '−11% a month', '—'],
                        ['month 7 to 9 rate', '—', '−1.1% a month', '—']]),
ext_fig_cap='The gain is concentrated, the plateau is real, and one row reverses a firm belief.',
ext=[
 'The claim that systems improve because they are used is true in a narrow and conditional '
 'sense that is usually lost in the retelling. Use generates evidence about what the system '
 'got wrong; evidence improves the system; but the evidence exists only if somebody recorded '
 'it, and the natural behaviour of a competent worker who finds an error is to correct it and '
 'proceed, which destroys the evidence in the act of using it.',
 'This is why the discipline is a logging requirement rather than an aspiration, and why its '
 'wording matters more than its sentiment. A correction must be logged with the field, the '
 'change and a reason describing the cause rather than the remedy, because a log of remedies '
 'records what was done and a log of causes records what was learned. The difference is '
 'invisible in the first month and decisive in the first year.',
 'Where the requirement is adopted, three findings recur with some regularity. The gain '
 'concentrates almost entirely in the commonest cases, because those are the ones that '
 'generate enough instances to generalise from; the fields that were already correct learn '
 'nothing, which is obvious in retrospect and never predicted; and a proportion of the '
 'corrections turn out to be the reviewer introducing an error while adjusting something they '
 'merely disliked, which only a log can reveal and which is uncomfortable to publish.',
 'The compounding itself is real and bounded, and business cases written on its first quarter '
 'are reliably wrong. A learning curve on a fixed volume of work exhausts the frequent cases '
 'in a matter of months and then flattens, because what remains is rare, heterogeneous and '
 'specific to individual customers. There is a legitimate argument that greater volume makes '
 'the rare cases frequent and restarts the curve, and it should be labelled as what it is: a '
 'proposition that cannot be tested without first incurring the cost.',
 'The practical instruction is therefore to require the log at once, to word the requirement '
 'formally so that it does not decay into good practice, to measure the learning rate monthly '
 'rather than quarterly, and to forecast with the last three months extended flat. That '
 'forecast will look pessimistic beside the first quarter and will be the only figure anybody '
 'can defend when the curve turns over.'],
dp1=('Learning curves and data accumulation',
     'Empirical work on learning curves in operations and in statistical systems generally '
     'finds rapid early gains on frequent cases followed by a pronounced flattening, with '
     'further improvement requiring disproportionately more data.',
     'Source: general literature on learning curves, 2026. Shapes vary by task.'),
e_a=[('In what sense do systems improve through use?', 'use generates evidence, but only if somebody records it'),
     ('Why does competent work destroy the evidence?', 'because the natural act is to correct the error and proceed'),
     ('What is the difference between logging causes and remedies?', 'a remedy log records what was done; a cause log records what was learned'),
     ('Where does the gain concentrate, and why?', 'in the commonest cases, because they generate enough instances to generalise from'),
     ('How should the improvement be forecast?', 'with the last three months extended flat')],
e_b=[('Use improves a system automatically.', 'F'),
     ('A log of remedies is as useful as a log of causes.', 'F'),
     ('Fields that were already correct still produce learning.', 'F'),
     ('Some corrections are reviewers introducing errors.', 'T'),
     ('Learning curves on fixed volumes flatten.', 'T'),
     ('The volume argument can be tested without incurring the cost.', 'F')],

w_model=(
 'Purpose: require that every correction to a system-produced draft be captured in a form '
 'that can teach, and that the learning rate be reported monthly. Scope: the format survey '
 'and the fee note; advisory documents are out of scope. Inputs: the 9 months of logged '
 'corrections, the 11 cases Victor recorded from memory, and the baseline error rates dated '
 '1 March. Criteria: require that each correction be logged with the field, the change and a '
 'reason of not fewer than 5 words describing the cause; require that no corrected draft be '
 'released to a client before the log entry exists; report the error rate per field group '
 'each month; forecast the next 12 months using the last 3 months extended flat. Done: 1 '
 'contract clause of no more than 2 sentences, 1 monthly report of 6 rows, and 1 forecast on '
 'the flat basis. Fallback: where a reviewer cannot state a cause, require that the entry '
 'record cause unknown explicitly rather than permitting a description of the remedy.'),
w_fig=figs.spec_card('THE LOGGING REQUIREMENT',
                     [('Purpose', 'capture every correction in a form that can teach'),
                      ('Scope', 'format survey and fee note; advisory excluded'),
                      ('Inputs', '9 months of logs, 11 remembered cases, baselines of 1 March'),
                      ('Criteria', 'field, change, 5-word cause; no release before the entry exists'),
                      ('Done', '2-sentence clause, 6-row monthly report, flat-basis forecast'),
                      ('Fallback', 'no cause available: record cause unknown, never the remedy')]),
w_fig_cap='The fallback row prevents a cause log from degenerating into a remedy log.',
w_task='Write a logging requirement for corrections in your own organisation.',
w_steps=['Say what must be logged, field by field, with a minimum length for the reason.',
         'Require the reason to describe the cause rather than the remedy.',
         'Make the log a precondition of release, not a subsequent task.',
         'Set the reporting period and what each report must contain.',
         'Say what is recorded when no cause can be stated.'],
w_bank=['Require that every … be captured in a form that … , and that … be reported …',
        'Cover … ; … is out of scope.',
        'Work from the … months of … , the … cases … , and … dated …',
        'Require that each … be logged with … , … and a reason of not fewer than … words describing …',
        'Where a reviewer cannot state a cause, require that … rather than permitting …'],
w_check=['Does the requirement use the subjunctive, so that it reads as a requirement?',
         'Is a minimum reason length stated?',
         'Is the log a precondition of release?',
         'Is "cause unknown" an explicit permitted entry?'],

t_title='Compounding: systems that improve because they were used',
t_fig=figs.split('TWO LOGS OF THE SAME CORRECTION',
                 'A remedy log — teaches nothing',
                 ['field 7: changed to 12/04',
                  'field 7: corrected',
                  'field 7: adjusted per client',
                  'field 7: fixed'],
                 'A cause log — teaches',
                 ['field 7: client writes dates DD/MM',
                  'field 7: their supplier changed format',
                  'field 7: two fields merged upstream',
                  'field 7: cause unknown']),
t_fig_cap='The same four corrections, and only the right-hand column is evidence.',
t_body=[
 'Require the log before you require anything else, and require it in the formal register, '
 'because a logging instruction phrased as good practice has a half-life of about four weeks. '
 'We require that every correction be logged with the field, the change and a reason of not '
 'fewer than five words; we require that no corrected output be released before the entry '
 'exists. The register is not pomposity, it is the difference between a rule and a '
 'suggestion.',
 'Then insist that the reason describe the cause and not the remedy, and make cause unknown '
 'an explicitly permitted entry so that the alternative to honesty is not invention. A log '
 'full of corrected and adjusted records a thousand events and teaches nothing; a log saying '
 'this client writes dates the other way round teaches once and applies for years. The '
 'twenty seconds per entry is the entire cost and it is the cheapest asset your organisation '
 'can build.',
 'Finally, measure the learning rate monthly and forecast it flat. Improvement on a fixed '
 'volume of work concentrates in the frequent cases, exhausts them within months, and then '
 'flattens hard, and every business case written on a first quarter is wrong in the same '
 'direction. Take the last three months, extend them flat, and say openly that the case for '
 'a second rise rests on volume you do not yet have and cannot test without spending the '
 'money.'],
t_say=[('Require it formally: ', 'We require that every correction be logged with its cause.'),
       ('Permit ignorance: ', 'Cause unknown is an acceptable entry; adjusted is not.'),
       ('Forecast flat: ', 'The last three months, extended flat, is the defensible figure.')],
t_bound=('A correction log records the errors somebody noticed. It is silent about errors '
         'nobody noticed, which are the ones that reach clients, and it therefore cannot '
         'measure the true error rate. It also records the reviewer’s belief about the cause, '
         'which the log itself has shown to be wrong in a measurable proportion of cases.'),
t_a=[('We require that every correction ____________ logged with its cause.', 'be'),
     ('Cause ____________ is an acceptable entry; adjusted is not.', 'unknown'),
     ('The last three months, extended ____________, is the defensible figure.', 'flat'),
     ('A logging instruction phrased as good practice has a ____________ of four weeks.', 'half-life'),
     ('The twenty seconds per entry is the entire ____________.', 'cost'),
     ('Improvement concentrates in the ____________ cases.', 'frequent')],
t_b_rubric='Rewrite each log entry so that it records a cause.',
t_b=[('field 7: corrected', 'field 7: this client writes dates as DD/MM'),
     ('field 3: adjusted per client request', 'field 3: their supplier merged two fields in March'),
     ('field 11: fixed formatting', 'field 11: cause unknown; presentation changed, no error found'),
     ('field 2: changed to match the sheet', 'field 2: the sheet template was updated and the draft was not')],

case=dict(
 title='Decision Clinic · The corrections that were errors',
 brief=[
  'Nine months of logged corrections showed that on two fields the reviewers had been '
  'correcting output that was already right, introducing an error in ninety-four cases, '
  'because they disliked a presentation convention the system used.',
  'Of the ninety-four, sixty-one reached clients. None has been complained about. The error '
  'is cosmetic in eighty-eight cases and substantive in six, all six with the same client, '
  'whose own system reads the field automatically.',
  'Jonas wants all ninety-four disclosed to the clients concerned. Marta wants the six '
  'substantive cases disclosed and the eighty-eight recorded internally. Fatima Zahra points '
  'out that the eighty-eight were introduced by named reviewers whose work is reviewed on '
  'accuracy, and asks what happens to them.'],
 exhibit=figs.datatable('NINETY-FOUR CORRECTIONS THAT WERE ERRORS',
                        ['', 'Count', 'Reached client', 'Effect'],
                        [['cosmetic', '88', '57', 'none observed'],
                         ['substantive', '6', '4', 'misread by client system'],
                         ['clients affected', '19', '—', '—'],
                         ['reviewers involved', '3', '—', 'all senior'],
                         ['complaints received', '0', '—', '—']]),
 exhibit_cap='Six cases matter, eighty-eight do not, and the log is why anybody knows either.',
 exhibit_note='The cosmetic classification is Victor’s and no client has been asked whether '
              'they agree with it.',
 voices=[('Jonas Riedel', 'systems and workflows',
          'Disclose all ninety-four. The moment we start sorting our own errors into the ones '
          'worth mentioning, the log becomes a thing people manage rather than a thing people '
          'fill in.'),
         ('Marta Olsen', 'risk and liability',
          'Disclose the six, which are real, and record the eighty-eight. Telling nineteen '
          'clients about a presentation convention they never noticed buys nothing and spends '
          'the credibility we will need the next time something substantive happens.'),
         ('Fatima Zahra', 'client manager',
          'Neither of you has answered the question that will decide whether the log survives. '
          'Three senior reviewers are measured on accuracy and the log has just recorded '
          'ninety-four errors against them. If that counts against them, the log is finished '
          'by Friday.')],
 steps=[('Find it', 'What do the ninety-four cases consist of?'),
        ('Compare it', 'How many are substantive and how many reached clients?'),
        ('Infer it', 'Why does Fatima say the reviewers’ position decides the log’s survival?'),
        ('Weigh it', 'Full disclosure against spending credibility on a cosmetic matter.'),
        ('Decide', 'What is disclosed, and what happens to the three reviewers?')],
 analysis=[('Find it. How many were substantive?', 'six, all with one client whose system reads the field'),
           ('Compare it. How many reached clients in total?', 'sixty-one of ninety-four'),
           ('Infer it. What is Fatima’s point?', 'that if logged errors count against reviewers, nobody will log'),
           ('Weigh it. What does disclosing all ninety-four cost?', 'credibility spent on a matter nineteen clients never noticed'),
           ('Decide. What would you do?', 'answers vary; any answer must settle the reviewers’ position explicitly')],
 decision='Write Arclight’s disclosure decision and its position on the reviewers.',
 decision_steps=['Say what is disclosed, to whom, and by when.',
                 'Say what is recorded internally and who may see it.',
                 'Say explicitly how logged errors bear on a reviewer’s assessment.',
                 'Say what would change the disclosure decision.'],
 bank=['We disclose … to … by …',
       'The … cases are recorded … and visible to …',
       'A correction logged under this requirement …',
       'We would disclose more widely if …',
       'This is reviewed after …'],
 outcome='Arclight disclosed the six substantive cases to the client concerned, recorded the '
         'eighty-eight internally, and stated in writing that an error disclosed by a '
         'reviewer’s own log entry does not count against that reviewer’s assessment, while '
         'an error found by somebody else does. Logging rates held. Fourteen months later a '
         'different client learned of the cosmetic convention from a departing employee and '
         'asked why they had not been told; the conversation was uncomfortable and the '
         'relationship was unaffected. Jonas regards this as the cost of Marta’s position '
         'being paid late rather than avoided; Marta accepts that the cost was real and '
         'maintains that disclosing nineteen times to avoid it would have cost more.',
 outcome_q=[('What protects the logging rate?', 'that an error disclosed by a reviewer’s own log does not count against them'),
            ('What happened fourteen months later?', 'another client learned of the convention from a departing employee and asked why they had not been told')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Start logging the corrections',
 task=['This is the first attempt at the logging requirement, written by Jonas before Marta '
       'rewrote it, and it lasted five weeks.',
       'Everybody complied with it and the resulting log taught nothing at all, which is the '
       'most expensive kind of compliance.'],
 draft=['Please start noting down corrections when you make them.',
        'Record enough detail to be useful later.',
        'Do it for the main document types.',
        'Skip it where the correction is trivial.',
        'Try to do it the same day.',
        'We will review how it is going in due course.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six requests, fully complied with, producing eleven hundred entries of no value.',
 asked=['Field, change and a cause of 5 words or more',
        'The log as a precondition of release',
        'A monthly learning-rate report'],
 back=['1,100 entries averaging 2 words',
       '"corrected", "adjusted", "fixed"',
       'No report, no baseline'],
 gap='"Enough detail to be useful later" sets no minimum and no content, "the main document '
     'types" names no set, "where the correction is trivial" lets the reviewer decide what '
     'evidence to destroy, and "the same day" permits release before the entry exists.',
 back_cap='Eleven hundred entries, two words each, and not one of them a cause.',
 back_note='The word trivial excluded exactly the ninety-four cosmetic corrections that later '
           'turned out to contain six substantive errors.',
 diagnosis=[('[1] "enough detail to be useful later" — useful for what, at what minimum?', 'undefined done'),
            ('[2] "the main document types" — which types, listed where?', 'hidden assumption'),
            ('[3] "skip it where trivial" — trivial judged by whom, against what?', 'unstated exception'),
            ('[4] "try to do it the same day" — before or after release?', 'unstated exception'),
            ('[5] no instruction on cause versus remedy', 'hidden assumption'),
            ('[6] "review how it is going in due course" — measured how, when?', 'undefined done')],
 rewrite='Rewrite the requirement so that it fixes the content of an entry, makes the entry a '
         'precondition of release, and permits cause unknown.',
 scaffold=['What must be captured and what must be reported',
           'Which document types are covered and which are not',
           'The logs, remembered cases and baselines it is built from',
           'What each entry must contain, when it must exist, and how the rate is reported',
           'What comes back: the clause, the report, the forecast basis',
           'What to record when no cause can be stated'],
 bank=['Require that every … be captured in a form that … , and that … be reported …',
       'Cover … ; … is out of scope.',
       'Work from the … months of … , the … cases … , and … dated …',
       'Require that each correction be logged with … , … and a reason of not fewer than … words describing … ; require that no … be released before …',
       'Return 1 clause of no more than … sentences, 1 monthly report of … rows, and 1 forecast on …',
       'Where a reviewer cannot state a cause, require that … rather than permitting …'],
 check=['Is a minimum reason length fixed?',
        'Must the reason describe the cause rather than the remedy?',
        'Is the entry a precondition of release?',
        'Is "cause unknown" explicitly permitted?'],
 model=['Require that every correction to a system-produced draft be captured in a form that can teach, and that the learning rate be reported monthly',
        'The format survey and the fee note; advisory documents are out of scope',
        'The 9 months of logged corrections, the 11 cases Victor recorded from memory, and the baseline error rates dated 1 March',
        'Require that each correction be logged with the field, the change and a reason of not fewer than 5 words describing the cause; require that no corrected draft be released to a client before the log entry exists; report the error rate per field group each month; forecast the next 12 months using the last 3 months extended flat',
        '1 contract clause of no more than 2 sentences, 1 monthly report of 6 rows, and 1 forecast on the flat basis, by 31 March',
        'Where a reviewer cannot state a cause, require that the entry record cause unknown explicitly rather than permitting a description of the remedy'],
 cost='5 weeks of full compliance, 1,100 entries averaging 2 words, the 94 cosmetic cases '
      'excluded as trivial, and 5 weeks of reconstruction to recover a third of what was lost.'),

rev_fig=figs.split('FORMAL REQUIREMENT',
                   'Indicative — a description',
                   ['We require that it is logged.',
                    'It is essential that it describes the cause.',
                    'We insist that it is not released.',
                    'It is imperative that he submits it.'],
                   'Subjunctive — a requirement',
                   ['We require that it be logged.',
                    'It is essential that it describe the cause.',
                    'We insist that it not be released.',
                    'It is imperative that he submit it.']),
rev_fig_cap='One letter of difference, and the whole force of the sentence.',
rev=dict(
 read=[('Use improves a system only if', ['volumes are high', 'somebody records the evidence', 'staff are senior', 'the system is new'], 1),
       ('A log should record', ['the remedy', 'the cause', 'the reviewer', 'the time taken'], 1),
       ('Learning on a fixed volume', ['continues indefinitely', 'flattens after months', 'never starts', 'reverses'], 1),
       ('In the Clinic, what protected the logging rate?', ['bonuses', 'self-disclosed errors not counting against reviewers', 'anonymity', 'fewer reviews'], 1)],
 listen_text='Require the log before you require anything else, and require it in the formal '
             'register, because a logging instruction phrased as good practice has a half-life '
             'of four weeks. Then insist that the reason describe the cause and not the '
             'remedy, and make cause unknown an explicitly permitted entry. Finally, measure '
             'the learning rate monthly and forecast it flat.',
 listen=[('A half-life of ____________ weeks.', 'four'),
         ('The reason must describe the cause and not the ____________.', 'remedy'),
         ('Make cause ____________ an explicitly permitted entry.', 'unknown'),
         ('Measure the learning rate monthly and forecast it ____________.', 'flat')],
 speak=['Name something your organisation corrects repeatedly and say what a cause log would hold.',
        'Say how you would forecast its improvement after six months.'],
 write='Write one formal requirement using the subjunctive after require or essential.',
 vocab=[('Records in which the correct answer is recorded alongside are ____________.', 'labelled data'),
        ('The point at which further effort stops producing improvement is a ____________.', 'plateau'),
        ('A case at the boundary of what the design anticipated is an ____________.', 'edge case'),
        ('The deliberate fitting of measurement into a process is ____________.', 'instrumentation'),
        ('How fast performance improves per unit of evidence is the ____________.', 'learning rate')],
 gram=[('We require that every correction ____________ (be) logged.', 'be'),
       ('It is essential that the reason ____________ (describe) the cause.', 'describe'),
       ('We insist that no correction ____________ (be) released unlogged.', 'be'),
       ('It is imperative that he ____________ (submit) it by Friday.', 'submit'),
       ('It is vital that the log ____________ (contain) a reason of five words.', 'contain')]),

found=['Find one thing your organisation corrects repeatedly without recording why.',
       'Write the logging requirement in the formal register.',
       'Make "cause unknown" an explicitly permitted entry.',
       'Forecast your next year on the last three months extended flat.'],
end_line='Pompous and unambiguous beats friendly and ignored.',
end_next='Next: First, Above All, Finally',
)
