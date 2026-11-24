# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='What You Must Be Able to Show',
gram='conditional perfects in argument',
ai='the record: what you must be able to show afterwards',
strap='CEFR C1 · Grammar: conditional perfects · AI: what you must be able to show',
cando=['use the third conditional and mixed forms to argue about a past decision',
       'distinguish what would have happened from what did happen',
       'say what a record of an assisted decision must contain',
       'design a log that answers the question an inquiry will ask',
       'write a retention rule that survives the people who wrote it'],
hero=('WHAT WAS IN FRONT OF THE OFFICER',
      ['The decision was recorded, the officer was named, the date was there.',
       'What the officer had been shown was not recorded anywhere.'],
      [(730, 'purple', 'long'), (1390, 'orange', 'short'),
       (2050, 'teal', 'long'), (2690, 'blue', 'short')]),
hero_cap='Information Security and Records, answering a question about a decision of 2023.',

warm=['If a decision of yours were examined in four years, what would the file show?',
      'Would it show what you were looking at when you took it?',
      'What would you want to be able to prove?'],
read=[
 'In January the Ministry was asked to explain a visa refusal taken in 2023. The file was in '
 'good order: the application, the documents, the decision, the ground, the officer’s name and '
 'the date.',
 'The question asked was not whether the decision was right. It was what the officer had been '
 'shown when she took it. By 2023 the intake step was producing a one-page summary of each '
 'application, and the summary rather than the file was what an officer read.',
 'That summary had not been retained. The system held the documents and the decision and did '
 'not hold the intermediate page, because nobody had classified it as a record. It had been '
 'treated as a convenience, like a sticky note.',
 'Karim Dalati’s answer to the question was that the Ministry could not say. Had the summary '
 'been retained, he could have shown exactly what the officer saw; had the officer worked from '
 'the file, there would have been nothing to retain. The Ministry had moved from the second '
 'position to the first without noticing that it had changed what a record is.',
 'The rule since February is that any document presented to a decision-maker is retained with '
 'the decision, for the same period as the decision, whether or not anybody regards it as a '
 'record. Karim says the rule is crude and will retain a great deal of rubbish, and that the '
 'alternative is a Ministry that can show its decisions and not its reasons.'],
c_a=[('What was the Ministry asked in January?', 'to explain a visa refusal taken in 2023'),
     ('What did the file contain?', 'the application, documents, decision, ground, officer’s name and date'),
     ('What was the question actually about?', 'what the officer had been shown when she took the decision'),
     ('Why was that not answerable?', 'the one-page summary had not been retained'),
     ('Why had it not been retained?', 'nobody had classified it as a record; it was treated as a convenience'),
     ('What is the rule since February?', 'any document presented to a decision-maker is retained with the decision for the same period')],
c_b=[('The file contained the decision, the ground and the officer\u2019s name.', 'T'),
     ('The question was whether the decision was right.', 'F'),
     ('The officer read the summary rather than the file.', 'T'),
     ('The summary was classified as a record.', 'F'),
     ('Karim says the new rule is precise.', 'F'),
     ('The rule retains documents whether or not they are regarded as records.', 'T')],
c_c=[('The officer’s name and the ____________.', 'date'),
     ('The summary rather than the ____________ was what an officer read.', 'file'),
     ('It had been treated as a ____________.', 'convenience'),
     ('The Ministry could not ____________.', 'say'),
     ('Without noticing that it had changed what a ____________ is.', 'record'),
     ('A Ministry that can show its decisions and not its ____________.', 'reasons')],
c_d=[('The failure was in the ( decision / record ).', ['decision', 'record'], 1),
     ('What was the summary?', ['a file', 'a one-page summary of the application', 'a decision letter', 'a log'], 1),
     ('How long is a presented document now retained?', ['a year', 'as long as the decision', 'a month', 'not at all'], 1),
     ('What does Karim say the rule will retain?', ['only records', 'a great deal of rubbish', 'nothing', 'summaries only'], 1),
     ('What is the alternative to the rule?', ['a shorter retention', 'showing decisions but not reasons', 'no decisions', 'more officers'], 1)],
c_e=('Match each form to what it claims.',
     [('Had the summary been retained, I could have shown it.', 'a past condition unfulfilled'),
      ('If the officer had worked from the file, there would have been nothing to retain.', 'a different past, a different result'),
      ('If the summary existed, I could show it.', 'a present condition unfulfilled'),
      ('Had we known, we would have kept it.', 'a past condition, with a past result'),
      ('If we kept everything, we would find nothing.', 'a general hypothetical'),
      ('Had the rule been written in 2022, this would not have arisen.', 'a counterfactual about a rule')],
     ['a past condition unfulfilled', 'a different past, a different result',
      'a present condition unfulfilled', 'a past condition, with a past result',
      'a general hypothetical', 'a counterfactual about a rule']),

v_fig_title='THE RECORD',
v_fig=[('doc', 'an audit trail'), ('clock', 'a timestamped action'), ('key', 'a system of record'),
       ('shield', 'a tamper-evident log'), ('book', 'a retention period'), ('pin', 'a chain of custody')],
v_fig_cap='Six words for what remains when everybody who was there has left.',
vocab=[
 ('an audit trail', 'the sequence of recorded actions showing what was done'),
 ('a log entry', 'one recorded action, with its time and its actor'),
 ('a system of record', 'the system whose version of a fact is authoritative'),
 ('a version history', 'the record of successive states of a document'),
 ('a timestamped action', 'an action recorded with the time at which it occurred'),
 ('a user identity', 'the named person to whom a recorded action is attributed'),
 ('a retention period', 'the time for which a record must be kept'),
 ('a disposal schedule', 'the rules stating when records are destroyed'),
 ('an immutable record', 'a record that cannot be altered after it is made'),
 ('a tamper-evident log', 'a log in which alteration can be detected'),
 ('a reconstruction of a decision', 'the showing of how a decision came to be taken'),
 ('an inquiry', 'a formal examination of what was done and why'),
 ('an information request', 'a request by a member of the public for recorded information'),
 ('a parliamentary question', 'a question put to a minister in a legislature'),
 ('a discovery obligation', 'a duty to produce documents in legal proceedings'),
 ('a chain of custody', 'the record of who held something and when'),
 ('a contemporaneous note', 'a note made at the time of the events it records'),
 ('a reviewable decision', 'a decision that can be examined by somebody else'),
 ('an explanation on demand', 'the duty to give reasons when asked'),
 ('a burden of proof', 'the obligation to establish a fact rather than assert it')],
v_a=[('The system whose version of a fact is authoritative is a ____________.', 'system of record'),
     ('A log in which alteration can be detected is a ____________.', 'tamper-evident log'),
     ('The showing of how a decision came to be taken is a ____________.', 'reconstruction of a decision'),
     ('The rules stating when records are destroyed are a ____________.', 'disposal schedule'),
     ('The record of who held something and when is a ____________.', 'chain of custody'),
     ('A note made at the time of the events it records is a ____________.', 'contemporaneous note'),
     ('The duty to give reasons when asked is an ____________.', 'explanation on demand'),
     ('The obligation to establish a fact rather than assert it is a ____________.', 'burden of proof')],
v_b=[('An audit trail is the sequence of recorded actions', 'showing what was done.'),
     ('A retention period is the time', 'for which a record must be kept.'),
     ('An immutable record is a record that cannot', 'be altered after it is made.'),
     ('A discovery obligation is a duty to produce documents', 'in legal proceedings.'),
     ('A reviewable decision is a decision that can', 'be examined by somebody else.')],

g_title='Grammar: conditional perfects in argument',
g_rule=['The third conditional argues about a past that did not happen: had it been retained, '
        'I could have shown it.',
        'Inversion replaces if in formal argument: had the rule existed, this would not have '
        'arisen.',
        'A mixed conditional joins a past condition to a present result: if we had kept it, we '
        'would know now.',
        'Use a conditional perfect to establish what a different decision would have produced, '
        'never to excuse what happened.'],
g_fig=('LOOSE',
       ['If we would have kept it, we could show it.',
        'Had we knew, we would keep it.',
        'If the rule existed in 2022, this would not happen.',
        'We should have kept it, but anyway nobody asked until now.'],
       'PRECISE',
       ['Had the summary been retained, the Ministry could have shown what the officer saw.',
        'Had the officer worked from the file, there would have been nothing to retain.',
        'Had the rule been written in 2022, the question would not have arisen.',
        'If we had retained it, we would be able to answer the question now.'],
       'two malformed conditionals, one wrong tense and one excuse',
       'three third conditionals and one mixed conditional, none of them excusing anything'),
g_fig_cap='Had plus the past participle, inverted: the register of an argument about the past.',
g_a=[('____________ the summary been retained, the Ministry could have shown it.', 'Had'),
     ('Had the officer worked from the file, there ____________ have been nothing to retain.', 'would'),
     ('Had the rule been written in 2022, the question would not have ____________.', 'arisen'),
     ('If we had retained it, we ____________ be able to answer now.', 'would'),
     ('____________ anybody classified the page as a record, it would have been kept.', 'Had'),
     ('The Ministry could not have ____________ the question even in 2023.', 'answered'),
     ('Had we kept everything, we ____________ have found nothing.', 'would'),
     ('If the officer ____________ (read) the file, the file would be the record.', 'had read'),
     ('____________ it been a sticky note, nobody would have asked.', 'Had')],
g_b=[('Had plus past participle replaces ( if plus past perfect / if plus present ).', ['if plus past perfect', 'if plus present'], 0),
     ('____ the summary been retained, I could have shown it.', ['If', 'Had', 'Would', 'Should'], 1),
     ('A mixed conditional joins', ['two past clauses', 'a past condition and a present result', 'two present clauses', 'a future and a past'], 1),
     ('Which is malformed?', ['Had we known, we would have kept it.', 'If we would have kept it, we could show it.', 'If we had kept it, we would know.', 'Had the rule existed, this would not have arisen.'], 1),
     ('A conditional perfect should not be used to', ['establish a counterfactual', 'excuse what happened', 'argue formally', 'state a result'], 1),
     ('Had the officer worked from the file, there ____ nothing to retain.', ['would be', 'would have been', 'will be', 'had been'], 1)],

d1=dict(title='What she was shown',
        fig=(['The file is in good order.', 'And the question is not about the file.'],
             ['What was she shown?', 'A page we did not keep.']),
        cap='Karim Dalati and Rana Deeb, in January.',
        lines=[('Rana', 'They are asking about a refusal from 2023. The file has everything: '
                        'application, documents, decision, ground, officer, date.'),
               ('Karim', 'The question is what she was looking at when she decided.'),
               ('Rana', 'The file.'),
               ('Karim', 'By 2023 nobody read the file. The intake step produced a one-page '
                         'summary and the officer read that. It took four minutes instead of '
                         'twenty and it was accurate.'),
               ('Rana', 'And the summary?'),
               ('Karim', 'Not retained. The system kept the documents and the decision. The '
                         'page in between was treated as a convenience, like a sticky note '
                         'somebody throws away.'),
               ('Rana', 'So we can show what she decided and not what she was deciding from.'),
               ('Karim', 'Which is the position I have to put in writing. Had the summary been '
                         'retained, I could have shown exactly what she saw. Had she worked from '
                         'the file, there would have been nothing to retain, because the file is '
                         'the record and we have it.'),
               ('Rana', 'We moved from one of those to the other.'),
               ('Karim', 'We moved from one to the other in about eight months, and nobody '
                         'decided that the thing an officer actually reads had changed. It '
                         'changed because it was faster.'),
               ('Rana', 'Then everything presented to a decision-maker is a record.'),
               ('Karim', 'That is the rule I have written, and it will retain an enormous '
                         'quantity of rubbish, and I prefer rubbish to a Ministry that can show '
                         'its decisions and not its reasons.')],
        a=[('What does the file contain?', 'the application, documents, decision, ground, officer and date'),
           ('What did the officer actually read?', 'a one-page summary produced by the intake step'),
           ('Why was the summary not retained?', 'it was treated as a convenience, like a sticky note'),
           ('What are the two third conditionals Karim states?', 'had it been retained he could have shown it; had she worked from the file there would have been nothing to retain'),
           ('What is the new rule?', 'that everything presented to a decision-maker is a record')],
        b=[('It took four minutes instead of ____________.', 'twenty'),
           ('The page in between was treated as a ____________.', 'convenience'),
           ('Nobody ____________ that the thing an officer actually reads had changed.', 'decided'),
           ('I prefer rubbish to a Ministry that can show its decisions and not its ____________.', 'reasons')]),
d2=dict(title='Everything is a great deal',
        fig=(['Everything presented.', 'That is forty thousand pages a month.'],
             ['And the retention period?', 'The same as the decision.']),
        cap='Karim and Dr Hana Mourad.',
        lines=[('Hana', 'Everything presented to a decision-maker, retained for as long as the '
                        'decision. What is the volume?'),
               ('Karim', 'About forty thousand pages a month across the Ministry, most of them '
                         'summaries nobody will ever read again.'),
               ('Hana', 'And the retention period on a visa decision?'),
               ('Karim', 'Seven years. On a treaty matter, indefinitely.'),
               ('Hana', 'So you are proposing to retain forty thousand pages a month '
                        'indefinitely in some cases, on the theory that one of them in ten '
                        'thousand will be asked about.'),
               ('Karim', 'That is a fair description and the storage cost is trivial, which is '
                         'not my difficulty with it.'),
               ('Hana', 'What is?'),
               ('Karim', 'That a retained summary is discoverable. If a page is a record, it '
                         'can be requested, and a one-page summary written for speed is a worse '
                         'document to have in public than the file it summarised, because it '
                         'compresses and a compression always loses a qualification.'),
               ('Hana', 'So the rule that protects the Ministry from one question exposes it to '
                        'another.'),
               ('Karim', 'Exactly, and I cannot see the way out. If I do not retain, I cannot '
                         'show what the officer saw. If I retain, I have created forty thousand '
                         'pages a month of compressed prose that can be quoted against us.'),
               ('Hana', 'Which would you rather defend?'),
               ('Karim', 'I would rather defend a bad summary that we kept than a good decision '
                         'we cannot explain. That is a preference and not an argument, and I '
                         'have written the rule on the strength of it, which I am not entirely '
                         'comfortable with.')],
        a=[('What is the volume?', 'about forty thousand pages a month across the Ministry'),
           ('What are the retention periods?', 'seven years on a visa decision, indefinite on a treaty matter'),
           ('What is Karim’s difficulty?', 'that a retained summary is discoverable'),
           ('Why is a summary a worse document to have in public?', 'because compression always loses a qualification'),
           ('How is it resolved?', 'it is not; Karim records that he has written the rule on a preference')],
        b=[('The storage cost is ____________.', 'trivial'),
           ('A compression always loses a ____________.', 'qualification'),
           ('Quoted ____________ us.', 'against'),
           ('That is a preference and not an ____________.', 'argument')],
        unresolved=True),

speak=[('Argue about the past',
        ['Student A: describe something that went wrong in your work.',
         'Student B: state two third conditionals about it, with inversion.',
         'Check that neither of them excuses anybody.']),
       ('What would the file show',
        ['Take a decision you took this month.',
         'Say what the file would show about it in four years.',
         'Say what it would not show.']),
       ('Keep or not keep',
        ['Name a working document your office does not retain.',
         'Say what retaining it would prove.',
         'Say what retaining it would expose.'])],

ext_title='The record must show what was in front of the decision-maker, which is no longer the file',
ext_fig=figs.datatable('THE 2023 DECISION, AS RECORDED',
                       ['Element', 'Retained?', 'Answers which question?'],
                       [['the application', 'yes', 'what was applied for'],
                        ['the supporting documents', 'yes', 'what was supplied'],
                        ['the decision and its ground', 'yes', 'what was decided'],
                        ['the officer and the date', 'yes', 'who and when'],
                        ['the 1-page summary read', 'no', 'what she was shown'],
                        ['the time she spent', 'no', 'how closely she read it']]),
ext_fig_cap='Four questions answered and the two that an inquiry asks unanswered.',
ext=[
 'A ministry’s record of a decision has traditionally consisted of the material on which the '
 'decision was taken, because the material on which it was taken was the file. An officer read '
 'the file, took the decision, and recorded it; the file and the decision together constituted '
 'a complete account, and a reviewer four years later could see exactly what the officer saw.',
 'That identity has quietly broken. Where an intake step produces a one-page summary and the '
 'officer reads the summary, the file is no longer what was in front of the decision-maker. '
 'The decision rests on a document that is accurate, derived, and in most ministries not '
 'retained, because nobody classified it as a record: it looked like a working aid, and '
 'working aids are thrown away.',
 'Nothing was decided here either. The change happened because reading a summary takes four '
 'minutes and reading a file takes twenty, and within a year the thing an officer actually '
 'read had changed while the definition of the record had not. The consequence appears only '
 'when somebody asks the one question a reviewer always asks, which is not whether the '
 'decision was right but what the decision-maker had in front of them.',
 'The rule that answers it is crude and has to be: any document presented to a decision-maker '
 'is retained with the decision, for the same period as the decision, whether or not anybody '
 'regards it as a record. The volume is large and the storage cost is not the difficulty.',
 'The difficulty is that retention creates discoverability, and this is a genuine conflict '
 'rather than a problem with a solution. A one-page summary written for speed compresses, and '
 'compression loses qualifications; retained, it becomes a document that can be requested, '
 'quoted and compared unfavourably with the file it summarised. A ministry that does not '
 'retain cannot show what its officer saw; a ministry that retains has manufactured many '
 'thousands of compressed documents a month that can be quoted against it. The honest position '
 'is to choose, to state which exposure you prefer, and to record that it is a preference.'],
dp1=('Records of assisted decisions',
     'Information management sections in several foreign ministries extended retention in 2025 '
     'to cover derived summaries presented to decision-makers, having found that files no '
     'longer showed what a decision-maker had read.',
     'Source: reported practice in diplomatic records management, 2025–2026.'),
e_a=[('What did the record traditionally consist of?', 'the material on which the decision was taken, which was the file'),
     ('What has broken?', 'the identity between the file and what was in front of the decision-maker'),
     ('Why did the change happen?', 'because reading a summary takes four minutes and a file twenty'),
     ('What question does a reviewer always ask?', 'what the decision-maker had in front of them'),
     ('What is the genuine conflict?', 'that retention creates discoverability of compressed documents')],
e_b=[('The file still shows what the officer read.', 'F'),
     ('The change was decided.', 'F'),
     ('Storage cost is the main difficulty.', 'F'),
     ('Compression loses qualifications.', 'T'),
     ('There is a solution that avoids both exposures.', 'F'),
     ('The rule is necessarily crude.', 'T')],

w_model=(
 'Purpose: retain what was in front of each decision-maker, so that a decision taken today can '
 'be reconstructed in 7 years. Scope: every document presented to an officer taking a decision, '
 'including derived summaries, extracts and translations; drafts the officer produced and '
 'discarded are out of scope. Inputs: the decision record, the documents presented, and the '
 'Ministry’s disposal schedule. Criteria: retain each presented document with the decision, '
 'for the retention period of the decision, whether or not it is classified as a record; '
 'record for each the time it was presented and the officer to whom it was presented; where a '
 'document was generated and then superseded before the decision, retain both and mark the '
 'order; alter no retained document after the decision. Done: 1 retained set per decision, '
 'complete at the moment the decision is recorded. Fallback: where a presented document cannot '
 'be retained for technical reasons, record that it was presented, what it was, and that it '
 'was not retained.'),
w_fig=figs.spec_card('THE TASKING FOR A DECISION RECORD',
                     [('Purpose', 'a decision reconstructable in 7 years'),
                      ('Scope', 'everything presented, summaries included; discarded drafts excluded'),
                      ('Inputs', 'the decision record, the documents, the disposal schedule'),
                      ('Criteria', 'retained with the decision; times and recipients; nothing altered'),
                      ('Done', '1 retained set, complete when the decision is recorded'),
                      ('Fallback', 'cannot retain: record that it was presented and not retained')]),
w_fig_cap='Whether or not it is classified as a record: the clause that catches the document nobody thought was one.',
w_task='Write a retention tasking for decisions in your own work.',
w_steps=['Say what must be reconstructable, and over what period.',
         'Name what is presented and exclude what is not.',
         'Require retention regardless of classification.',
         'Require the time and the recipient.',
         'Say what happens where retention is impossible.'],
w_bank=['Retain … so that … can be reconstructed in …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Retain … for … , whether or not … ; record for each … ; where … , retain both and … ; alter …',
        'Where … cannot be retained … , record …'],
w_check=['Does retention attach to presentation rather than classification?',
         'Is the retention period tied to the decision?',
         'Is alteration after the decision forbidden?',
         'Is a failure to retain itself recorded?'],

t_title='The record and what it must show',
t_fig=figs.split('A DECISION RECORD',
                 'Used to be enough',
                 ['the application and documents',
                  'the decision and its ground',
                  'the officer and the date',
                  'because the file was what she read'],
                 'Now also needed',
                 ['the summary she actually read',
                  'when it was presented, and to whom',
                  'any superseded version',
                  'a note where something could not be kept']),
t_fig_cap='The left column is unchanged and no longer sufficient.',
t_body=[
 'A record of a decision has always consisted of the material the decision rested on, and for '
 'a century that material was the file. An officer read the file, decided, and recorded the '
 'decision; a reviewer four years later saw what the officer saw. The identity between the '
 'file and the decision-maker’s view was so reliable that nobody stated it.',
 'It has broken, and not by anybody’s decision. Where an intake step produces a one-page '
 'summary, the officer reads the summary, because four minutes beats twenty; the file is still '
 'retained and is no longer what was in front of her. The question a reviewer always asks is '
 'not whether the decision was right but what the decision-maker had before them, and that '
 'question becomes unanswerable within about a year of the summary appearing.',
 'So write the crude rule: any document presented to a decision-maker is retained with the '
 'decision, for the same period, whether or not anybody calls it a record, with the time and '
 'the recipient. And then state the conflict honestly, because there is no version of this '
 'that avoids it. Retained summaries are discoverable, compression loses qualifications, and a '
 'ministry that keeps them has manufactured thousands of compressed documents a month that can '
 'be quoted against it; a ministry that does not keep them cannot show what its officer saw. '
 'Choose, say which exposure you prefer, and record that it is a preference.'],
t_say=[('Attach retention to presentation: ', 'Any document presented is retained with the decision.'),
       ('Record the moment: ', 'Presented at 14:12 to the deciding officer.'),
       ('State the preference: ', 'The Ministry prefers a discoverable summary to an unexplainable decision.')],
t_bound=('A record can show what was presented and when; it cannot show how closely it was '
         'read, what weight the officer gave it, or what she already knew. Retention answers '
         'the reviewer’s question and creates a discoverable document in the same act, and no '
         'rule removes that conflict. What a ministry can do is decide which exposure it '
         'prefers and write down that it chose.'),
t_a=[('Any document ____________ is retained with the decision.', 'presented'),
     ('Presented at 14:12 to the ____________ officer.', 'deciding'),
     ('The Ministry prefers a discoverable summary to an ____________ decision.', 'unexplainable'),
     ('Four minutes beats ____________.', 'twenty'),
     ('That question becomes ____________ within about a year.', 'unanswerable'),
     ('Compression loses ____________.', 'qualifications')],
t_b_rubric='Rewrite each as a correct conditional perfect.',
t_b=[('If we would have kept it, we could show it.', 'had the summary been retained, the Ministry could have shown what the officer saw'),
     ('Had we knew, we would keep it.', 'had the officer worked from the file, there would have been nothing to retain'),
     ('If the rule existed in 2022, this would not happen.', 'had the rule been written in 2022, the question would not have arisen'),
     ('We should have kept it, but nobody asked until now.', 'if we had retained it, we would be able to answer the question now')],

case=dict(
 title='The Decision Room · Which exposure the Ministry prefers',
 brief=[
  'The retention rule will create about forty thousand pages a month of derived summaries, '
  'retained for the period of the decisions they supported.',
  'Samir Haddad advises that retained summaries are disclosable on an information request and '
  'producible in proceedings, and that a summary compressing a file will in some cases look '
  'worse than the file.',
  'Karim wants the rule as written. Samir proposes retaining summaries but marking them as '
  'working documents. Hana asks what the Ministry would say in the one case where the summary '
  'and the file differ.'],
 exhibit=figs.datatable('THE TWO EXPOSURES',
                        ['', 'If not retained', 'If retained'],
                        [['can show what the officer read', 'no', 'yes'],
                         ['pages created monthly', '0', '~40,000'],
                         ['disclosable on request', 'n/a', 'yes'],
                         ['producible in proceedings', 'n/a', 'yes'],
                         ['risk of a summary that misleads', 'unseen', 'visible and quotable'],
                         ['storage cost', 'nil', 'trivial']]),
 exhibit_cap='Neither column is safe, and the right-hand one is the only one in which the '
             'Ministry can answer a question.',
 exhibit_note='In 3 sampled cases of 200, the summary omitted a qualification present in the '
              'file.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Retain, unmarked. A document marked working is still disclosable and the marking '
          'will be read as an attempt to discount it, which is worse than not marking it.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Then at least record, on each decision, whether the officer also opened the file. '
          'In the three sampled cases where the summary omitted a qualification, that single '
          'fact is the whole of the Ministry’s defence.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'And answer the question before it is asked. Where the summary and the file differ, '
          'what does the Ministry say? If the answer is invented in the moment, it will be '
          'invented badly.')],
 steps=[('Find it', 'In how many sampled cases did the summary omit a qualification?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Karim object to marking?'),
        ('Weigh it', 'Two exposures, neither avoidable.'),
        ('Decide', 'What is retained, how is it marked, and what is the standing answer?')],
 analysis=[('Find it. How many of 200 sampled summaries omitted a qualification?', 'three'),
           ('Compare it. What does Samir propose recording?', 'whether the officer also opened the file'),
           ('Infer it. What is Karim’s objection to marking?', 'that it will be read as an attempt to discount the document'),
           ('Weigh it. What is the storage cost?', 'trivial'),
           ('Decide. What would you do?', 'answers vary; recording whether the file was opened costs nothing and is the only new fact')],
 decision='Write the retention and disclosure position.',
 decision_steps=['Say what is retained and how it is marked.',
                 'Say what else is recorded about each decision.',
                 'Say what the Ministry says where the summary and the file differ.',
                 'Say what is sampled and how often.'],
 bank=['Presented documents are retained …',
       'Each decision also records …',
       'Where a summary and the file differ, the Ministry states …',
       'Summaries are sampled …',
       'This is reviewed …'],
 outcome='Summaries are retained unmarked. Each decision also records whether the officer '
         'opened the underlying file, which turned out to be true in 71 per cent of cases and '
         'is now the first thing any reviewer is shown. The standing answer, written before it '
         'was needed, is that the summary is a working aid, the file is the record of what was '
         'supplied, and the decision is taken on both. In the first year two information '
         'requests produced summaries, in neither of which the summary and the file differed. '
         'Samir says the useful part was writing the standing answer in a quiet month, because '
         'the same sentence drafted during a request would have read as a defence.',
 outcome_q=[('What else does each decision now record?', 'whether the officer opened the underlying file'),
            ('Why did the standing answer matter?', 'because the same sentence drafted during a request would have read as a defence')],
 tags=[]),

lab=dict(
 title='Brief Lab · Keep the record',
 task=['This is the retention instruction in force until February, written in 2016 and never '
       'amended.',
       'It was complied with completely, and the Ministry could not say what its officer had '
       'read.'],
 draft=['Retain the records of each decision.',
        'Keep the application and the supporting documents.',
        'Record the decision, the ground and the officer.',
        'Dispose of working papers in the usual way.',
        'Apply the retention periods in the schedule.',
        'Review the instruction periodically.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines written when the file was what an officer read.',
 asked=['Everything presented to the decision-maker retained',
        'The time and recipient of each presentation',
        'A note where retention is impossible'],
 back=['A complete file for every decision',
       'No record of the summary the officer read',
       'Working papers disposed of, including the summary'],
 gap='"The records of each decision" assumes the record is the file, "working papers" caught '
     'the one document that mattered, "in the usual way" preserved a 2016 practice, and '
     '"periodically" meant nine years.',
 back_cap='An instruction obeyed exactly, which destroyed the only document the question was '
          'about.',
 back_note='Line four is the failure. In 2016 a working paper was a sticky note; by 2023 it was '
           'the document the decision rested on, and the instruction had not moved.',
 diagnosis=[('[1] "the records of each decision" — which documents count as records?', 'unstated criterion'),
            ('[2] "the application and the supporting documents" — and derived summaries?', 'missing condition'),
            ('[3] "the decision, the ground and the officer" — and what was presented?', 'missing condition'),
            ('[4] "working papers" — including a summary the decision rested on?', 'unstated criterion'),
            ('[5] "the retention periods in the schedule" — for documents the schedule does not list?', 'undefined done'),
            ('[6] "review periodically" — at what interval, and triggered by what?', 'undefined done')],
 rewrite='Rewrite the instruction so that what was presented is retained whatever it is called.',
 scaffold=['What must be reconstructable, and for how long',
           'Everything presented, and what is excluded',
           'The decision record, the documents and the schedule',
           'Retention by presentation, times and recipients, superseded versions, no alteration',
           'One retained set, complete when the decision is recorded',
           'What to do where retention is impossible'],
 bank=['Retain … so that … can be reconstructed in …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Retain … whether or not … ; record … ; where … , retain both and … ; alter …',
       'Return 1 retained set per … , complete at …',
       'Where … , record …'],
 check=['Is retention triggered by presentation?',
        'Is the classification of the document made irrelevant?',
        'Are times and recipients recorded?',
        'Is a failure to retain itself recorded?'],
 model=['Retain what was in front of each decision-maker, so that a decision taken today can be reconstructed in 7 years',
        'Every document presented to an officer taking a decision, including derived summaries, extracts and translations; drafts the officer produced and discarded are out of scope',
        'The decision record, the documents presented, and the Ministry’s disposal schedule',
        'Retain each presented document with the decision, for the retention period of the decision, whether or not it is classified as a record; record for each the time it was presented and the officer to whom it was presented; where a document was generated and then superseded before the decision, retain both and mark the order; alter no retained document after the decision',
        '1 retained set per decision, complete at the moment the decision is recorded',
        'Where a presented document cannot be retained for technical reasons, record that it was presented, what it was, and that it was not retained'],
 cost='1 question about a 2023 decision that the Ministry could not answer, and an unknown '
      'number of decisions between 2022 and 2026 whose basis was disposed of as a working '
      'paper.'),

rev_fig=figs.split('CONDITIONAL PERFECTS',
                   'Malformed',
                   ['If we would have kept it …',
                    'Had we knew …',
                    'If the rule existed in 2022 …',
                    'We should have kept it, but nobody asked.'],
                   'Correct',
                   ['Had the summary been retained …',
                    'Had the officer worked from the file …',
                    'Had the rule been written in 2022 …',
                    'If we had retained it, we would know now.']),
rev_fig_cap='Had plus past participle; would have plus past participle; mixed for a present result.',
rev=dict(
 read=[('The record traditionally consisted of', ['the summary', 'the file the decision rested on', 'the log', 'the decision alone'], 1),
       ('The identity broke because', ['a decision was taken', 'reading a summary is faster', 'files were lost', 'rules changed'], 1),
       ('Retention creates', ['safety', 'discoverability', 'accuracy', 'compression'], 1),
       ('In the Decision Room, what else is now recorded?', ['nothing', 'whether the officer opened the file', 'the reading time', 'the marking'], 1)],
 listen_text='The question a reviewer always asks is not whether the decision was right but '
             'what the decision-maker had before them, and that question becomes unanswerable '
             'within about a year of the summary appearing.',
 listen=[('Not whether the decision was ____________.', 'right'),
         ('What the decision-maker had ____________ them.', 'before'),
         ('That question becomes ____________.', 'unanswerable'),
         ('Within about a year of the summary ____________.', 'appearing')],
 speak=['State two third conditionals about something that went wrong at work.',
        'Say what your file would not show about a decision you took.'],
 write='Write one retention line triggered by presentation rather than classification.',
 vocab=[('The system whose version of a fact is authoritative is a ____________.', 'system of record'),
        ('A log in which alteration can be detected is a ____________.', 'tamper-evident log'),
        ('The showing of how a decision came to be taken is a ____________.', 'reconstruction of a decision'),
        ('The record of who held something and when is a ____________.', 'chain of custody'),
        ('The duty to give reasons when asked is an ____________.', 'explanation on demand')],
 gram=[('____________ the summary been retained, the Ministry could have shown it.', 'Had'),
       ('Had the officer worked from the file, there ____________ have been nothing to retain.', 'would'),
       ('Had the rule been written in 2022, the question would not have ____________.', 'arisen'),
       ('If we had retained it, we ____________ be able to answer now.', 'would'),
       ('____________ it been a sticky note, nobody would have asked.', 'Had')]),

found=['Ask what your office retains of what a decision-maker actually read.',
       'Find one working document that is now the basis of a decision.',
       'State two third conditionals about a past failure in your work.',
       'Check when your retention instruction was last amended.'],
end_line='The file is still the record, and it is no longer what the officer read.',
end_next='Next: Who Answers for the Brief',
)
