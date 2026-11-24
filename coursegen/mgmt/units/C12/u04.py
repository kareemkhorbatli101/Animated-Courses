# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='We Ought To Have',
gram="modal perfects for evaluation: ought to have, needn't have",
ai='bias, and where it enters',
strap='CEFR C1 · Grammar: modal perfects · AI: bias, and where it enters',
cando=["use ought to have, should have, needn't have and might have accurately",
       'evaluate a past decision without either excusing or condemning it',
       'identify the point in a process at which a bias entered',
       'distinguish a biased rule from a rule trained on a biased record',
       'specify a test that would show whether an outcome is disparate'],
hero=('WHERE DID IT ENTER?',
      ['The rule was not written by anybody who held a prejudice.',
       'It learned ours, from the only evidence we had.'],
      [(800, 'teal', 'short'), (1480, 'grey', 'long'),
       (2180, 'orange', 'short'), (2840, 'purple', 'long')]),
hero_cap='A record of past decisions carries every mistake those decisions contained.',

warm=['What past record does your organisation use to decide about the future?',
      'Who is in that record, and who is missing from it?',
      'What would you have to measure to know whether a rule treats groups differently?'],
read=[
 'The intake scoring that Arclight introduced two years ago does a narrow and useful thing: '
 'it estimates, from an enquiry, whether a prospective client is likely to be served well, '
 'and it declines about one enquiry in six without a person reading it. It was built from '
 'eleven years of the firm’s own records and nobody involved in building it held any view '
 'whatever about the kinds of business that ought to be declined.',
 'In October, reviewing the declines for a different purpose, Fatima Zahra noticed that '
 'enquiries from businesses with fewer than five employees were being declined at four times '
 'the rate of everything else. She ought to have been able to explain it in a sentence, '
 'because small businesses do bring more unstandardised documents, and she found that she '
 'could not, because the ratio was far larger than that explanation supports.',
 'What the investigation found was a selection effect of the firm’s own making. In its fourth '
 'and fifth years Arclight had taken on nineteen very small clients, had served them badly '
 'because its processes at the time assumed a finance department that those clients did not '
 'have, and had lost fourteen of them inside a year. Those nineteen are the whole of the '
 'training record for businesses of that size, and the scoring had learned, correctly from '
 'the evidence, that Arclight serves such clients badly.',
 'Jonas Riedel’s summary is the one the board eventually adopted. The rule is not biased '
 'against small businesses; it is accurately reporting a historical fact about Arclight that '
 'ceased to be true four years ago, and it has no way of knowing that the processes which '
 'caused those failures were replaced in the seventh year. We needn’t have wondered whether '
 'somebody had put a prejudice into it. We ought to have asked who was in the record.',
 'The remedy adopted was narrow and uncomfortable. All enquiries from businesses below the '
 'size threshold now go to a person, the scoring’s output on them is recorded but not acted '
 'on, and the firm has undertaken to review the position when it has sixty such clients '
 'served under current processes. At the present rate of enquiry that will take about five '
 'years, which Marta Olsen describes as the honest answer and Fatima as an answer that will '
 'be quietly abandoned in two.'],
c_a=[('What does the intake scoring do?', 'estimates from an enquiry whether a client is likely to be served well, declining about one in six'),
     ('What did Fatima notice?', 'that very small businesses were declined at four times the rate of everything else'),
     ('What caused it?', 'nineteen very small clients served badly in years four and five, fourteen lost within a year'),
     ('What is Jonas’s summary?', 'that the rule accurately reports a fact about Arclight that stopped being true four years ago'),
     ('What is the remedy?', 'such enquiries go to a person, the score is recorded but not acted on, reviewed at sixty clients')],
c_b=[('Somebody built a prejudice into the scoring deliberately.', 'F'),
     ('Small businesses do bring more unstandardised documents.', 'T'),
     ('That explanation accounted for the whole ratio.', 'F'),
     ('Arclight’s early processes assumed a finance department.', 'T'),
     ('The scoring has no way of knowing the processes were replaced.', 'T'),
     ('The review will take about five years.', 'T')],
c_c=[('It declines about one enquiry in ____________.', 'six'),
     ('The ratio was far larger than that explanation ____________.', 'supports'),
     ('A selection effect of the firm’s own ____________.', 'making'),
     ('Those nineteen are the whole of the ____________ record for businesses of that size.', 'training'),
     ('We ought to have asked who was in the ____________.', 'record'),
     ('An answer that will be quietly ____________ in two.', 'abandoned')],
c_d=[('The bias entered through the ( record / rule ).', ['record', 'rule'], 0),
     ('How many very small clients are in the training record?', ['sixty', 'nineteen', 'fourteen', 'two hundred'], 1),
     ('What did Arclight’s early processes assume?', ['a large document volume', 'a finance department', 'a single contact', 'monthly billing'], 1),
     ('The scoring’s output on small businesses is now', ['ignored entirely', 'recorded but not acted on', 'doubled', 'published'], 1),
     ('Fatima expects the five-year review to be', ['completed early', 'quietly abandoned', 'extended', 'repeated'], 1)],
c_e=('Which modal perfect? Put each sentence in the right column.',
     [('We ought to have asked who was in the record.', 'ought to have'),
      ("We needn't have wondered about prejudice.", "needn't have"),
      ('Somebody might have noticed this earlier.', 'might have'),
      ('We should have measured the base rates.', 'should have'),
      ('She ought to have been able to explain it.', 'ought to have'),
      ("They needn't have rebuilt the whole model.", "needn't have")],
     ['ought to have', "needn't have", 'might have', 'should have']),

v_fig_title='WHERE BIAS ENTERS',
v_fig=[('chart', 'a base rate'), ('scale', 'calibration'), ('bulb', 'a proxy variable'),
       ('doc', 'sampling bias'), ('key', 'a blind spot'), ('bank', 'a selection effect')],
v_fig_cap='Six words for the places a disparity comes from, only one of which is the rule itself.',
vocab=[
 ('systematic distortion', 'a consistent departure from what a fair or accurate result would be'),
 ('a proxy variable', 'something measurable that stands in for what you actually care about'),
 ('representativeness', 'the degree to which a sample resembles the population it stands for'),
 ('sampling bias', 'distortion arising from how the cases in a record were selected'),
 ('a disparate outcome', 'a result that differs systematically between groups'),
 ('a protected characteristic', 'an attribute on which the law forbids adverse treatment'),
 ('calibration', 'the agreement between stated confidence and observed frequency'),
 ('a false positive', 'a case wrongly identified as belonging to the category'),
 ('a false negative', 'a case wrongly identified as not belonging to it'),
 ('a base rate', 'how often something occurs in the population before any test'),
 ('a confounder', 'a third factor that explains an apparent relation between two others'),
 ('a selection effect', 'distortion caused by which cases came to be in the record at all'),
 ('aggregation', 'the combining of cases, which can conceal differences between them'),
 ('a feedback effect', 'the tendency of a decision to produce the evidence that justifies it'),
 ('fairness', 'the property of treating comparable cases comparably, on a stated definition'),
 ('a bias audit', 'a structured test of whether outcomes differ between groups'),
 ('a counterfactual test', 'a check of what the decision would have been with one attribute changed'),
 ('a threshold effect', 'a disparity created by where a cut-off was placed'),
 ('stratification', 'the dividing of a population into groups before measuring'),
 ('a blind spot', 'a region of cases about which a record contains almost nothing')],
v_a=[('Distortion caused by which cases are in the record at all is a ____________.', 'selection effect'),
     ('A third factor explaining an apparent relation is a ____________.', 'confounder'),
     ('How often something occurs before any test is the ____________.', 'base rate'),
     ('A check of what the decision would be with one attribute changed is a ____________.', 'counterfactual test'),
     ('A disparity created by where a cut-off was placed is a ____________.', 'threshold effect'),
     ('The tendency of a decision to produce the evidence that justifies it is a ____________.', 'feedback effect'),
     ('A region of cases about which a record holds almost nothing is a ____________.', 'blind spot'),
     ('The agreement between stated confidence and observed frequency is ____________.', 'calibration')],
v_b=[('A proxy variable is something measurable that stands in', 'for what you actually care about.'),
     ('Representativeness is the degree to which a sample', 'resembles the population it stands for.'),
     ('Aggregation is the combining of cases,', 'which can conceal differences between them.'),
     ('A bias audit is a structured test of whether', 'outcomes differ between groups.'),
     ('Stratification is the dividing of a population', 'into groups before measuring.')],

g_title='Grammar: modal perfects for evaluation',
g_rule=['Ought to have and should have: the right thing was not done. We ought to have asked.',
        "Needn't have: something was done that turned out to be unnecessary.",
        'Did not need to: it was unnecessary and may not have been done at all.',
        'Might have and could have: a possibility that existed, with no blame attached.'],
g_fig=('LOOSE',
       ['We ought to asked who was in the record.',
        "We didn't need to have worried about prejudice.",
        'Somebody might noticed this earlier.',
        'We should of measured the base rates.'],
       'PRECISE',
       ['We ought to have asked who was in the record.',
        "We needn't have worried about prejudice.",
        'Somebody might have noticed this earlier.',
        'We should have measured the base rates.'],
       'four modal perfects malformed',
       'four correct, including the commonest error'),
g_fig_cap='Should of for should have is the single most frequent written error in professional English.',
g_a=[('We ____________ (ought/ask) who was in the record.', 'ought to have asked'),
     ("We ____________ (need not/worry) about deliberate prejudice.", "needn't have worried"),
     ('Somebody ____________ (might/notice) this a year earlier.', 'might have noticed'),
     ('We ____________ (should/measure) the base rates at the outset.', 'should have measured'),
     ('She ____________ (ought/be) able to explain it in a sentence.', 'ought to have been'),
     ("They ____________ (need not/rebuild) the whole model.", "needn't have rebuilt"),
     ('Fatima ____________ (could/miss) it entirely, had she not been looking elsewhere.', 'could have missed'),
     ('The board ____________ (should/ask) what the training record contained.', 'should have asked'),
     ('We ____________ (ought/not/act) on a score we had not tested.', 'ought not to have acted')],
g_b=[('We ( should of / should have ) asked who was in the record.', ['should of', 'should have'], 1),
     ("____ have worried about prejudice.", ["We didn't needed to", "We needn't", 'We not need', 'We needn’t to'], 1),
     ('Somebody ____ this a year earlier.', ['might noticed', 'might have noticed', 'might of noticed', 'might to notice'], 1),
     ('We ____ who was in the record.', ['ought to asked', 'ought to have asked', 'ought have asked', 'ought asking'], 1),
     ("Needn't have means the thing", ['was not done', 'was done and was unnecessary', 'should be done', 'was forbidden'], 1),
     ('Might have carries', ['blame', 'no blame', 'obligation', 'permission'], 1)],

d1=dict(title='Four times the rate',
        fig=(['Four times, for under five employees.', 'That is not a rounding error.'],
             ['Can you explain it?', 'Partly, and the part I can explain is small.']),
        cap='Fatima and Jonas, October.',
        lines=[('Fatima', 'Businesses with fewer than five employees are declined at four times the '
                          'rate of everything else. I was looking at something else entirely.'),
               ('Jonas', 'Some of that is real. Their documents are less standardised and the work '
                         'genuinely is harder.'),
               ('Fatima', 'I thought that too and I went looking for the size of it. On our own '
                          'figures, less standardised documents account for something like a third '
                          'more work, not four times the decline rate.'),
               ('Jonas', 'Then something else is in there. Who is in the training record for that '
                         'size of business?'),
               ('Fatima', 'Nineteen clients, all of them from years four and five.'),
               ('Jonas', 'And what happened to them?'),
               ('Fatima', 'We lost fourteen within a year. I have read the files and we served them '
                          'badly, because everything we did then assumed somebody in a finance '
                          'department who could answer a question by Tuesday.'),
               ('Jonas', 'Which we replaced in year seven.'),
               ('Fatima', 'Which we replaced in year seven, and the record does not know that. The '
                          'rule has learned, accurately, that Arclight serves very small businesses '
                          'badly, from the only nineteen cases where Arclight tried.'),
               ('Jonas', 'So the rule is right about the past and wrong about us.'),
               ('Fatima', 'And it will stay right about the past for ever, because every decline '
                          'prevents the case that would correct it.')],
        a=[('What rate of decline did Fatima find?', 'four times that of everything else'),
           ('How much does document variation explain?', 'about a third more work, not a fourfold decline rate'),
           ('Who is in the training record for that size?', 'nineteen clients from years four and five'),
           ('Why were they served badly?', 'because the processes then assumed a finance department'),
           ('Why will the record stay wrong?', 'because every decline prevents the case that would correct it')],
        b=[('I was looking at something else ____________.', 'entirely'),
           ('Somebody who could answer a question by ____________.', 'Tuesday'),
           ('The rule is right about the past and wrong about ____________.', 'us'),
           ('Every decline prevents the case that would ____________ it.', 'correct')]),
d2=dict(title='Who put it there?',
        fig=(['Nobody put a prejudice in it.', 'I accept that entirely.'],
             ['Then the rule is not biased.', 'The rule is fine. The record is us.']),
        cap='Thomas and Marta.',
        lines=[('Thomas', 'I want to be clear that nobody built a prejudice into this. I have read '
                          'the specification and there is no view in it about small businesses at '
                          'all.'),
               ('Marta', 'I accept that entirely and it is not the question. We needn’t have '
                         'wondered about anybody’s intentions.'),
               ('Thomas', 'Then what is the question?'),
               ('Marta', 'What was in the record. And the answer is nineteen clients we failed, '
                         'because of processes we have since replaced, and nothing else of that '
                         'size.'),
               ('Thomas', 'That is not bias in any sense I would use the word.'),
               ('Marta', 'It produces a disparate outcome by size, which is the only sense the word '
                         'needs to have for our purposes. Whether anybody intended it changes the '
                         'remedy and not the finding.'),
               ('Thomas', 'How does it change the remedy?'),
               ('Marta', 'If somebody had put a view in, you would take the view out. Nobody did, so '
                         'we have to generate evidence we do not have, by serving the clients the '
                         'rule tells us not to serve, and waiting.'),
               ('Thomas', 'For how long?'),
               ('Marta', 'Sixty clients under current processes, which at our enquiry rate is about '
                         'five years.'),
               ('Thomas', 'Then say five years in the board paper, in those words, because somebody '
                          'will otherwise write a review date eighteen months out and we will all '
                          'pretend that was the plan.'),
               ('Marta', 'That is exactly what would happen and I am grateful you said it before I '
                         'drafted it.')],
        a=[('What does Thomas establish about the specification?', 'that it contains no view about small businesses'),
           ('Why is that not the question?', 'because the question is what was in the record'),
           ('What sense of bias does Marta use?', 'that it produces a disparate outcome by size'),
           ('How does intention change matters?', 'it changes the remedy, not the finding'),
           ('Why must five years be stated explicitly?', 'because otherwise a shorter review date will be written and treated as the plan')],
        b=[('There is no ____________ in it about small businesses.', 'view'),
           ('Whether anybody intended it changes the ____________ and not the finding.', 'remedy'),
           ('We have to generate evidence we do not ____________.', 'have'),
           ('Somebody will otherwise write a review date eighteen months ____________.', 'out')]),

speak=[('Say it correctly',
        ['Student A: evaluate six past decisions using ought to have and should have.',
         "Student B: convert two of them to needn't have, and say how the meaning changed.",
         'Find the one where might have removed the blame appropriately.']),
       ('Spoken specification: who is in the record?',
        ['Choose a decision your organisation makes from a historical record.',
         'Brief aloud who is in that record and who is missing.',
         'Your partner asks what the record would say about a group you have never served.']),
       ('Where did it enter?',
        ['In pairs, take a disparity one of you has seen at work.',
         'Work through the places it could have entered: record, proxy, threshold, feedback.',
         'Find the one you cannot rule out.'])],

ext_title='Bias usually enters through the record, not through the rule',
ext_fig=figs.datatable('NINETEEN CLIENTS, AND WHAT THEY TAUGHT',
                       ['', 'Figure', 'Note'],
                       [['very small clients ever served', '19', 'all from years 4 and 5'],
                        ['lost within a year', '14', 'processes assumed a finance team'],
                        ['processes replaced', 'year 7', 'record does not know'],
                        ['decline rate, under 5 employees', '4×', 'against all others'],
                        ['explained by document variation', 'about 1.3×', '—'],
                        ['clients needed to retest', '60', 'about 5 years']]),
ext_fig_cap='The unexplained gap between 1.3 and 4 is the whole of the finding.',
ext=[
 'Discussions of bias in automated decisions tend to begin by looking for a prejudice in the '
 'rule, and in professional settings that search is usually fruitless and always '
 'insufficient. A rule built from an organisation’s own records inherits every systematic '
 'feature of those records, including the organisation’s past failures, its past refusals, '
 'and the groups it has simply never dealt with. Nobody has to hold a view for a disparity to '
 'appear.',
 'The commonest mechanism is a selection effect in which the record contains few cases of a '
 'kind and those few went badly, usually because the organisation was not then equipped to '
 'handle them. A rule learning from that record reports, accurately, that such cases go '
 'badly here. It cannot know that the processes responsible were replaced four years later, '
 'because a record of outcomes contains no account of why the outcomes occurred.',
 'This mechanism has a second property that makes it stable, and it is the one that matters '
 'most for management. Every decline prevents the acquisition of the case that would have '
 'corrected the record. A disparity of this kind does not decay; it is maintained by its own '
 'operation, and the absence of counter-evidence is produced by the very decisions the '
 'missing evidence would overturn.',
 'The diagnostic sequence is short and worth running on any rule derived from historical '
 'data. First, measure the outcome rate by group and compare it with the rate the known '
 'causes would predict; the gap is the finding. Second, count the cases of that group in the '
 'record. Third, read what happened to them and why. Fourth, ask whether the cause still '
 'exists. Most of the work is in the third step and it requires reading files, not running '
 'analyses.',
 'The remedy, where intention is absent, is unsatisfying and should be stated as such. There '
 'is nothing to remove; there is only evidence to generate, which means deliberately serving '
 'the cases the rule declines, recording the rule’s output without acting on it, and waiting '
 'until enough cases exist to retest. That wait is usually measured in years, and the '
 'temptation to write a shorter review date should be resisted in the document itself, '
 'because a date nobody believes is worse than a date nobody likes.'],
dp1=('Historical data and disparate outcomes',
     'Research on statistical decision systems consistently finds that disparities more often '
     'originate in the training record than in the model, and that feedback loops can '
     'maintain a disparity indefinitely by suppressing counter-evidence.',
     'Source: general literature on algorithmic fairness, 2026.'),
e_a=[('Why is searching the rule for a prejudice insufficient?', 'because a rule inherits the systematic features of the record, including past failures'),
     ('What is the commonest mechanism?', 'a selection effect: few cases of a kind, and those few went badly'),
     ('Why can a rule not know the cause was removed?', 'because a record of outcomes contains no account of why they occurred'),
     ('What makes such a disparity stable?', 'every decline prevents the case that would correct the record'),
     ('What is the remedy where intention is absent?', 'generating evidence by serving declined cases and waiting to retest')],
e_b=[('A disparity requires somebody to hold a view.', 'F'),
     ('A rule trained on a biased record reports that record accurately.', 'T'),
     ('Such disparities decay over time on their own.', 'F'),
     ('Most of the diagnostic work is running analyses.', 'F'),
     ('Where intention is absent there is something to remove.', 'F'),
     ('A review date nobody believes is worse than one nobody likes.', 'T')],

w_model=(
 'Purpose: establish whether the intake scoring produces a disparate outcome by client size '
 'that the known causes do not explain, and if so where it entered. Scope: the 2 years of '
 'intake decisions and the 11 years of records the scoring was built from; the pricing model '
 'is out of scope. Inputs: the 4,100 intake decisions, the 11-year client outcome record, and '
 'the process change note dated 3 March of year 7. Criteria: give the decline rate by '
 'employee band for 4 bands; state for each band the rate the known causes predict and the '
 'gap, to 1 decimal place; count the clients of each band in the training record and read the '
 'file of every lost client in the smallest band; state for each loss whether its cause still '
 'exists. Done: 1 table of 4 bands, 1 reading of all 19 files, and 1 statement of where the '
 'disparity entered. Fallback: where a loss cannot be attributed to a cause from the file, '
 'record it as unexplained and count it against neither the current nor the former processes.'),
w_fig=figs.datatable('THE DIAGNOSTIC SEQUENCE',
                     ['Step', 'What it asks', 'Where the work is'],
                     [['1. measure', 'what is the rate by group?', 'minutes'],
                      ['2. predict', 'what do known causes predict?', 'hours'],
                      ['3. count', 'how many such cases are in the record?', 'minutes'],
                      ['4. read', 'what happened to them, and why?', 'days'],
                      ['5. ask', 'does the cause still exist?', 'hours']]),
w_fig_cap='Four of the five steps are quick. The fourth is reading files, and it is the one that answers the question.',
w_task='Write a bias-diagnostic specification for a rule your organisation uses.',
w_steps=['Define the groups and the bands you will measure by.',
         'Require the predicted rate from known causes as well as the observed rate.',
         'Require the count of cases of each group in the training record.',
         'Require the files of the adverse cases to be read, not merely counted.',
         'Say what happens to a case whose cause cannot be established.'],
w_bank=['Establish whether … produces a disparate outcome by … that … do not explain, and if so …',
        'Cover … ; … is out of scope.',
        'Work from the … decisions, the … record, and … dated …',
        'Give the … rate by … for … bands; state for each band the rate … and the gap to … ; count … and read the file of …',
        'Where a loss cannot be attributed to a cause from the file, … rather than …'],
w_check=['Are the groups and bands defined before measuring?',
         'Is a predicted rate required alongside the observed rate?',
         'Must the adverse files be read rather than counted?',
         'Is there an honest category for unexplained cases?'],

t_title='Bias, and where it enters',
t_fig=figs.split('TWO PLACES TO LOOK',
                 'The rule — usually innocent',
                 ['does it mention the attribute?',
                  'does it use a proxy for it?',
                  'where is the threshold set?',
                  'who wrote the specification?'],
                 'The record — usually the cause',
                 ['how many such cases are in it?',
                  'what happened to them?',
                  'why did that happen?',
                  'does that cause still exist?']),
t_fig_cap='Both columns are worth asking. Only the right-hand one usually answers the question.',
t_body=[
 'Measure the outcome by group before anybody argues about whether a bias was intended, and '
 'set the observed '
 'rate against the rate your known causes would predict. If small clients bring a third more '
 'work and are declined four times as often, the gap between one point three and four is the '
 'finding, and no amount of reassurance about the specification addresses it. The measurement '
 'takes an afternoon and reorders the conversation.',
 'Then go to the record rather than to the rule, and count. A disparity usually originates in '
 'a group of which the record holds very few cases, all of them old, most of them failures, '
 'and those failures caused by processes the organisation has since replaced. Read those '
 'files, which takes days rather than hours, and ask of each failure whether its cause still '
 'exists. A rule learning from outcomes cannot know that a cause was removed, because the '
 'record of an outcome contains no account of why it happened.',
 'Finally, say plainly what the remedy requires and how long it will take. Where nobody put a '
 'view in, there is nothing to take out: the only remedy is to generate the evidence the '
 'record lacks, by serving the cases the rule declines while recording its output and not '
 'acting on it, until enough cases exist to retest. That is usually several years. Write the '
 'real number in the document, because a review date chosen for comfort will be missed and '
 'then forgotten, and the disparity will have been maintained in the meantime by the very '
 'decisions it caused.'],
t_say=[('Measure first: ', 'What is the rate by group, against what the causes predict?'),
       ('Count the record: ', 'How many such cases are in it, and what happened to them?'),
       ('State the wait: ', 'Sixty cases under current processes, which is five years.')],
t_bound=('This diagnosis can show that a disparity exists and where it came from. It cannot '
         'tell you which definition of fairness to apply, several of which are mutually '
         'incompatible; it cannot establish a cause from an outcome record alone; and it '
         'cannot shorten the wait required to generate the missing evidence.'),
t_a=[('What is the rate by group, against what the causes ____________?', 'predict'),
     ('How many such cases are in it, and what ____________ to them?', 'happened'),
     ('Sixty cases under current processes, which is five ____________.', 'years'),
     ('The gap between one point three and four is the ____________.', 'finding'),
     ('A rule learning from outcomes cannot know that a cause was ____________.', 'removed'),
     ('A review date chosen for ____________ will be missed and then forgotten.', 'comfort')],
t_b_rubric='Rewrite each reassurance as a question about the record.',
t_b=[('There is no prejudice in the specification.', 'how many clients of that size are in the training record?'),
     ('The rule only uses objective factors.', 'what happened to the nineteen such clients we have served?'),
     ('The outcome difference reflects real difficulty.', 'what decline rate does that difficulty predict, against the four we observe?'),
     ('We will review it next year.', 'we will retest at sixty such clients, which is about five years')],

case=dict(
 title='Decision Clinic · The review date nobody believed',
 brief=[
  'Arclight undertook to retest the intake scoring when it had served sixty very small '
  'clients under current processes, which at the prevailing enquiry rate is about five years. '
  'The board paper said five years.',
  'Eighteen months later the firm has served twenty-two such clients, of whom nineteen are '
  'still clients and the service measures are indistinguishable from the rest of the book. '
  'Fatima proposes retesting now on twenty-two rather than waiting for sixty.',
  'Jonas objects that twenty-two was not the number agreed and that retesting on a sample '
  'chosen because it looks favourable is how the original problem was created. Marta points '
  'out that the sixty was itself an estimate nobody defended at the time.'],
 exhibit=figs.datatable('EIGHTEEN MONTHS IN',
                        ['', 'Agreed plan', 'Position now'],
                        [['clients needed to retest', '60', '22 served'],
                         ['retained at 12 months', '—', '19 of 22'],
                         ['service measures', '—', 'as the rest of the book'],
                         ['time elapsed', '5 years', '18 months'],
                         ['declines still being made', '—', 'score recorded, not acted on']]),
 exhibit_cap='Twenty-two cases pointing one way, and a commitment to wait for sixty.',
 exhibit_note='Twenty-two clients over eighteen months is a small sample and they were accepted '
              'by people who knew the rule had declined them.',
 voices=[('Fatima Zahra', 'client manager',
          'Nineteen of twenty-two retained and service measures in line with the book. We are '
          'declining businesses today on the strength of nineteen failures from eleven years '
          'ago while holding twenty-two successes we have decided not to look at.'),
         ('Jonas Riedel', 'systems and workflows',
          'Sixty was the number. Retesting at twenty-two because the twenty-two look good is '
          'exactly the selection effect that produced the original disparity, with the sign '
          'reversed. I would rather wait and be sure.'),
         ('Marta Olsen', 'risk and liability',
          'Sixty was an estimate I wrote in an afternoon and nobody challenged. Treating it as '
          'a threshold with properties it never had is not rigour. The honest position is that '
          'we chose a round number and should now choose a defensible one.')],
 steps=[('Find it', 'What has happened in eighteen months?'),
        ('Compare it', 'How does the new evidence compare with the old?'),
        ('Infer it', 'Why does Jonas call early retesting a selection effect?'),
        ('Weigh it', 'The cost of waiting against the risk of retesting on a favourable sample.'),
        ('Decide', 'Retest now, at sixty, or on some other basis?')],
 analysis=[('Find it. How many very small clients have been served?', 'twenty-two, of whom nineteen remain'),
           ('Compare it. What is the old evidence?', 'nineteen failures from years four and five'),
           ('Infer it. What is Jonas’s concern?', 'that choosing to retest because the sample looks good repeats the original error'),
           ('Weigh it. What is the cost of waiting?', 'continuing to decline businesses on eleven-year-old evidence'),
           ('Decide. What would you do?', 'answers vary; a defensible answer fixes a rule for when to retest rather than a number')],
 decision='Write Arclight’s rule for when a disputed scoring rule is retested.',
 decision_steps=['Say on what basis the retest is triggered.',
                 'Say who decides and on what evidence.',
                 'Say what protects the retest from a favourable sample.',
                 'Say what happens to declines in the meantime.'],
 bank=['The scoring is retested when …',
       '… decides, on …',
       'To prevent a favourable sample, …',
       'In the meantime, declines …',
       'This is minuted at …'],
 outcome='Arclight replaced the sixty-client threshold with a rule: the scoring is retested '
         'whenever the band holds twenty or more clients served under current processes, with '
         'the retest specified in writing before the data is examined. On that rule the retest '
         'happened at twenty-two, the disparity was found to be unsupported, and the scoring '
         'now declines nobody on size alone. Jonas, who argued for waiting, wrote the rule '
         'that the retest be specified before the data is seen, and says that provision is the '
         'only reason he accepts the result; Fatima agrees and notes that it would have been '
         'worth having five years earlier.',
 outcome_q=[('What replaced the sixty-client threshold?', 'a retest whenever the band holds twenty or more clients under current processes'),
            ('What provision makes Jonas accept the result?', 'that the retest be specified in writing before the data is examined')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Look into the decline rates',
 task=['This is the brief Ines wrote the day Fatima raised the four-times figure, intending to '
       'establish whether there was a problem.',
       'It produced a careful statistical analysis that answered a question nobody had asked '
       'and left the real one untouched.'],
 draft=['Look into whether our intake scoring is treating anybody unfairly.',
        'Check the model for any inappropriate factors.',
        'Compare outcomes across the obvious categories.',
        'Rule out the innocent explanations.',
        'Get a statistician to look at it if needed.',
        'Report back with a conclusion.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions pointing at the model, and none at the record.',
 asked=['Observed rates against predicted rates by band',
        'The count of each band in the training record',
        'The files of the adverse cases, read'],
 back=['A 9-page analysis of model factors',
       '"No inappropriate factors present"',
       'No count, no files read'],
 gap='"Treating anybody unfairly" names no definition, "the model for inappropriate factors" '
     'directs the whole enquiry at the rule, "the obvious categories" leaves the bands to the '
     'reader, and "rule out the innocent explanations" asks for elimination without requiring '
     'the predicted rate that would make elimination possible.',
 back_cap='Nine pages establishing that the model was clean, which was never in doubt.',
 back_note='Nobody counted how many very small clients were in the training record. The count '
           'is nineteen and takes one query.',
 diagnosis=[('[1] "treating anybody unfairly" — unfair on which definition?', 'unstated criterion'),
            ('[2] "the model for inappropriate factors" — and if the model is clean?', 'hidden assumption'),
            ('[3] "the obvious categories" — which bands, by what measure?', 'ambiguous referent'),
            ('[4] "rule out the innocent explanations" — ruled out against what predicted rate?', 'unstated criterion'),
            ('[5] "a statistician if needed" — needed judged by whom?', 'ambiguous referent'),
            ('[6] no instruction to examine the training record', 'hidden assumption')],
 rewrite='Rewrite the brief so that it requires the predicted rate, the record count and the '
         'reading of the adverse files.',
 scaffold=['What must be established, and what it governs',
           'Which decisions and records are covered, and what is out of scope',
           'The decisions, outcome records and change notes it is built from',
           'The rates by band, the predicted rates, the counts, and the files to be read',
           'What comes back, in how many parts, and by when',
           'What to do with a case whose cause cannot be established'],
 bank=['Establish whether … produces a disparate outcome by … that … do not explain, and if so where …',
       'Cover … ; … is out of scope.',
       'Work from the … decisions, the … record, and … dated …',
       'Give the decline rate by … for … bands; state the rate the known causes predict and the gap to … ; count … and read the file of every …',
       'Return 1 table of … bands, 1 reading of … files, and 1 statement of …, by …',
       'Where a loss cannot be attributed to a cause from the file, … rather than …'],
 check=['Does the brief require a predicted rate as well as an observed one?',
        'Must the training record be counted by band?',
        'Must the adverse files be read?',
        'Is there a category for unexplained losses?'],
 model=['Establish whether the intake scoring produces a disparate outcome by client size that the known causes do not explain, and if so where it entered',
        'The 2 years of intake decisions and the 11 years of records the scoring was built from; the pricing model is out of scope',
        'The 4,100 intake decisions, the 11-year client outcome record, and the process change note dated 3 March of year 7',
        'Give the decline rate by employee band for 4 bands; state for each band the rate the known causes predict and the gap, to 1 decimal place; count the clients of each band in the training record and read the file of every lost client in the smallest band; state for each loss whether its cause still exists',
        '1 table of 4 bands, 1 reading of all 19 files, and 1 statement of where the disparity entered, by 30 November',
        'Where a loss cannot be attributed to a cause from the file, record it as unexplained and count it against neither the current nor the former processes'],
 cost='9 pages establishing that the model was clean, 3 weeks of delay, 1 statistician’s fee, '
      'and roughly 180 further enquiries declined while the real question went unasked.'),

rev_fig=figs.split('MODAL PERFECTS',
                   'Wrong',
                   ['We ought to asked.',
                    "We didn't need to have worried.",
                    'Somebody might noticed it.',
                    'We should of measured it.'],
                   'Right',
                   ['We ought to have asked.',
                    "We needn't have worried.",
                    'Somebody might have noticed it.',
                    'We should have measured it.']),
rev_fig_cap='The fourth pair is the commonest written error in professional English.',
rev=dict(
 read=[('Bias usually enters through', ['the rule', 'the record', 'the threshold', 'the specification'], 1),
       ('A rule trained on a biased record', ['invents a prejudice', 'reports that record accurately', 'ignores the record', 'is unbiased'], 1),
       ('Such disparities are stable because', ['nobody looks', 'declines suppress the correcting evidence', 'rules are fixed', 'records are long'], 1),
       ('In the Clinic, what provision made the retest acceptable?', ['waiting for sixty', 'specifying the retest before seeing the data', 'a larger sample', 'an external review'], 1)],
 listen_text='Measure the outcome by group before anybody argues about intentions, and set '
             'the observed rate against the rate your known causes would predict. Then go to '
             'the record rather than to the rule, and count. Read the files of the adverse '
             'cases and ask of each failure whether its cause still exists.',
 listen=[('Before anybody argues about ____________.', 'intentions'),
         ('Against the rate your known causes would ____________.', 'predict'),
         ('Go to the record rather than to the ____________.', 'rule'),
         ('Ask of each failure whether its cause still ____________.', 'exists')],
 speak=['Name a decision your organisation makes from a historical record.',
        'Say who is missing from that record and what the record would say about them.'],
 write="Write one sentence with ought to have and one with needn't have about a past decision.",
 vocab=[('Distortion caused by which cases are in the record is a ____________.', 'selection effect'),
        ('How often something occurs before any test is the ____________.', 'base rate'),
        ('A disparity created by where a cut-off was placed is a ____________.', 'threshold effect'),
        ('A third factor explaining an apparent relation is a ____________.', 'confounder'),
        ('A region of cases a record says almost nothing about is a ____________.', 'blind spot')],
 gram=[('We ____________ (ought/ask) who was in the record.', 'ought to have asked'),
       ("We ____________ (need not/worry) about deliberate prejudice.", "needn't have worried"),
       ('Somebody ____________ (might/notice) this a year earlier.', 'might have noticed'),
       ('We ____________ (should/measure) the base rates at the outset.', 'should have measured'),
       ('She ____________ (ought/be) able to explain it in a sentence.', 'ought to have been')]),

found=['Find a decision your organisation makes from its own historical record.',
       'Count how many cases of your smallest group that record contains.',
       'Read the files of the ones that went badly and ask whether the cause still exists.',
       'Write the real retest date, not a comfortable one.'],
end_line='Every decline prevents the case that would correct it.',
end_next='Next: There Is A Case For',
)
