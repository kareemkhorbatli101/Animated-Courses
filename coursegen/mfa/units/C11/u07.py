# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Where an Error Is Expensive',
gram='the language of condolence and acknowledgement',
ai='visa and document workflows, where an error is expensive',
strap='CEFR C1 · Grammar: acknowledgement · AI: where an error is expensive',
cando=['acknowledge an error or a loss without evasion and without over-promising',
       'use I regret, the Ministry accepts and it should not have happened correctly',
       'say where a document workflow may be assisted and where it may not',
       'distinguish a decision from the preparation of a decision',
       'write a tasking that separates checking from deciding'],
hero=('HE MISSED HIS MOTHER’S FUNERAL',
      ['The application was refused on a ground that was correct in law.',
       'The document the refusal relied on had been placed on the wrong file.'],
      [(730, 'purple', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'orange', 'short')]),
hero_cap='Consular Affairs, the morning after the funeral, with the file open.',

warm=['Where in your work would a small administrative error cost somebody a great deal?',
      'What does a real acknowledgement of a mistake contain?',
      'What is the difference between preparing a decision and taking one?'],
read=[
 'In November a man applied for an emergency travel document in order to attend his mother’s '
 'funeral. The application was refused on the ground that the proof of relationship had not '
 'been supplied. The ground was correct in law and the document had in fact been supplied, '
 'four days earlier, and had been attached to another applicant’s file by an error in the '
 'intake step.',
 'The funeral was on the Thursday. The error was found on the Friday. The Ministry’s letter '
 'of the following Monday is the document Rana Deeb now uses when she trains new officers, '
 'because she wrote it four times and the first three drafts were the three ways of evading '
 'the thing that had happened.',
 'The first draft regretted that the application had not met the requirements. The second '
 'regretted the distress caused by the circumstances. The third explained the intake process '
 'at some length. The fourth said that the Ministry had refused the application because a '
 'document he had supplied had been attached to the wrong file by the Ministry, that this '
 'should not have happened, that he had been unable to attend his mother’s funeral as a '
 'result, and that the Ministry was sorry.',
 'The workflow was then changed, and the change is narrower than the section first proposed. '
 'The intake step still reads documents, extracts their type and date, and matches them to '
 'files, which it does accurately in about ninety-eight cases in a hundred. What it no longer '
 'does is produce a refusal on the ground that a document is missing.',
 'Where a document appears to be missing, the step now states what is missing and the file goes '
 'to an officer, who must search for it by the applicant’s name and date of birth across all '
 'files received in the preceding fourteen days before any refusal may issue. That search takes '
 'about three minutes and it is the only part of the change that would have prevented November.'],
c_a=[('Why was the application refused?', 'on the ground that the proof of relationship had not been supplied'),
     ('What had actually happened to the document?', 'it had been attached to another applicant’s file by an error in the intake step'),
     ('How many drafts did the letter take?', 'four'),
     ('What did the fourth draft say?', 'that the Ministry had misfiled a supplied document, that it should not have happened, what the consequence was, and that the Ministry was sorry'),
     ('What does the intake step no longer do?', 'produce a refusal on the ground that a document is missing'),
     ('What must an officer now do?', 'search by name and date of birth across all files received in the preceding fourteen days')],
c_b=[('The ground of refusal was wrong in law.', 'F'),
     ('The document had been supplied.', 'T'),
     ('The intake step is accurate in about 98 cases in 100.', 'T'),
     ('The step still issues refusals for missing documents.', 'F'),
     ('The search takes about three minutes.', 'T'),
     ('Rana’s first draft named the error.', 'F')],
c_c=[('The proof of relationship had not been ____________.', 'supplied'),
     ('Attached to another applicant’s file by an ____________ in the intake step.', 'error'),
     ('The three ways of ____________ the thing that had happened.', 'evading'),
     ('The second regretted the distress caused by the ____________.', 'circumstances'),
     ('That this should not have ____________.', 'happened'),
     ('Across all files received in the preceding fourteen ____________.', 'days')],
c_d=[('The refusal was ( unlawful / correct on a false premise ).', ['unlawful', 'correct on a false premise'], 1),
     ('When was the funeral?', ['Thursday', 'Friday', 'Monday', 'November'], 1),
     ('What did the third draft do?', ['apologised', 'explained the process at length', 'named the error', 'offered compensation'], 1),
     ('How accurate is the intake step?', ['about 98 in 100', 'about 80 in 100', 'perfectly', 'unknown'], 1),
     ('What is the only part of the change that would have prevented November?', ['the extraction', 'the three-minute search', 'the letter', 'the training'], 1)],
c_e=('Match each formulation to what it does.',
     [('I regret that the application did not meet the requirements.', 'blames the applicant'),
      ('I regret the distress caused by the circumstances.', 'blames nobody'),
      ('The Ministry attached your document to the wrong file.', 'names the actor'),
      ('This should not have happened.', 'accepts the standard was not met'),
      ('You were unable to attend your mother’s funeral as a result.', 'states the consequence'),
      ('I am sorry.', 'apologises')],
     ['blames the applicant', 'blames nobody', 'names the actor',
      'accepts the standard was not met', 'states the consequence', 'apologises']),

v_fig_title='A DOCUMENT WORKFLOW',
v_fig=[('doc', 'a supporting document'), ('key', 'an eligibility criterion'), ('shield', 'a ground of refusal'),
       ('clock', 'a processing time'), ('pin', 'a document checklist'), ('people', 'a compassionate ground')],
v_fig_cap='Six words from a process in which a clerical slip has consequences nobody can '
          'reverse.',
vocab=[
 ('a visa application', 'a request for permission to enter a state'),
 ('a supporting document', 'a document submitted to establish a fact in an application'),
 ('an eligibility criterion', 'a condition an applicant must satisfy'),
 ('a refusal', 'a decision not to grant an application'),
 ('a ground of refusal', 'the stated reason on which an application was refused'),
 ('an appeal right', 'the entitlement to have a decision reconsidered elsewhere'),
 ('a review of a decision', 'a fresh examination of a decision already taken'),
 ('a decision letter', 'the document communicating a decision and its grounds'),
 ('a processing time', 'the period an application takes to be decided'),
 ('a case queue', 'the ordered set of applications awaiting decision'),
 ('an expedited case', 'a case taken out of order for a stated reason'),
 ('a biometric appointment', 'an appointment at which identity data is recorded'),
 ('a sponsor letter', 'a letter from a person undertaking to support an applicant'),
 ('an invitation letter', 'a letter inviting an applicant for a stated purpose'),
 ('a proof of funds', 'evidence that an applicant can meet their own costs'),
 ('a document checklist', 'the list of documents an application requires'),
 ('an incomplete application', 'an application missing a required document'),
 ('a request for further information', 'a request to an applicant for more material'),
 ('a reconsideration', 'the re-examination of a decision by the body that took it'),
 ('a compassionate ground', 'a reason of urgency or hardship for departing from the ordinary course')],
v_a=[('The stated reason on which an application was refused is a ____________.', 'ground of refusal'),
     ('A reason of urgency or hardship for departing from the ordinary course is a ____________.', 'compassionate ground'),
     ('The re-examination of a decision by the body that took it is a ____________.', 'reconsideration'),
     ('A case taken out of order for a stated reason is an ____________.', 'expedited case'),
     ('Evidence that an applicant can meet their own costs is a ____________.', 'proof of funds'),
     ('The document communicating a decision and its grounds is a ____________.', 'decision letter'),
     ('The entitlement to have a decision reconsidered elsewhere is an ____________.', 'appeal right'),
     ('The ordered set of applications awaiting decision is a ____________.', 'case queue')],
v_b=[('A supporting document is a document submitted', 'to establish a fact in an application.'),
     ('An eligibility criterion is a condition', 'an applicant must satisfy.'),
     ('A processing time is the period', 'an application takes to be decided.'),
     ('An incomplete application is an application', 'missing a required document.'),
     ('A biometric appointment is an appointment', 'at which identity data is recorded.')],

g_title='Grammar: the language of condolence and acknowledgement',
g_rule=['I regret that plus a clause regrets a fact; I regret plus a noun regrets a thing.',
        'An acknowledgement names the actor: the Ministry attached your document to the wrong '
        'file.',
        'This should not have happened accepts a standard; I am sorry apologises. Both are '
        'needed and neither substitutes for the other.',
        'Never regret a circumstance where the Ministry was the cause: regret the act.'],
g_fig=('LOOSE',
       ['I regret that the application did not meet the requirements.',
        'I regret the distress caused by these circumstances.',
        'Errors of this kind are regrettable.',
        'The Ministry apologises for any inconvenience.'],
       'PRECISE',
       ['The Ministry attached a document you had supplied to another applicant’s file.',
        'This should not have happened.',
        'You were unable to attend your mother’s funeral as a result.',
        'I am sorry.'],
       'four regrets in which the Ministry is not the subject of any sentence',
       'four sentences naming the actor, the standard, the consequence and the apology'),
g_fig_cap='An acknowledgement in which the institution is never the subject is not an '
          'acknowledgement.',
g_a=[('The Ministry ____________ a document you had supplied to another file.', 'attached'),
     ('This should not ____________ happened.', 'have'),
     ('You were unable to attend your mother’s funeral ____________ a result.', 'as'),
     ('I ____________ sorry.', 'am'),
     ('I ____________ that the error was not found before Thursday.', 'regret'),
     ('The Ministry ____________ that the ground of refusal was based on its own error.', 'accepts'),
     ('No ____________ of this kind should reach a decision.', 'error'),
     ('I ____________ to explain what has been changed.', 'want'),
     ('The decision ____________ been withdrawn.', 'has')],
g_b=[('An acknowledgement must name ( the actor / the circumstances ).', ['the actor', 'the circumstances'], 0),
     ('Which accepts a standard?', ['I regret the distress', 'This should not have happened', 'Errors are regrettable', 'We apologise for any inconvenience'], 1),
     ('I regret that takes', ['a noun', 'a clause', 'an infinitive', 'a gerund'], 1),
     ('Which blames the applicant?', ['The Ministry attached your document wrongly.', 'I regret that the application did not meet the requirements.', 'This should not have happened.', 'I am sorry.'], 1),
     ('Does an apology substitute for accepting a standard?', ['yes', 'no', 'sometimes', 'only in writing'], 1),
     ('Which is an evasion?', ['The Ministry misfiled your document.', 'I regret the distress caused by these circumstances.', 'I am sorry.', 'This should not have happened.'], 1)],

d1=dict(title='Four drafts',
        fig=(['Draft one regretted the requirements.', 'Draft two regretted the circumstances.'],
             ['And draft four?', 'Draft four had us as the subject.']),
        cap='Rana Deeb and Maya Sarkis, who now uses the letter on the entry course.',
        lines=[('Maya', 'You wrote that letter four times. What was wrong with the first three?'),
               ('Rana', 'Each of them was a way of writing about what happened without the '
                        'Ministry being the subject of any sentence.'),
               ('Maya', 'Give me the first.'),
               ('Rana', 'I regret that the application did not meet the requirements. Which is '
                        'true and makes the application the actor, and in substance blames him '
                        'for failing to supply a document he supplied.'),
               ('Maya', 'And the second?'),
               ('Rana', 'I regret the distress caused by these circumstances. The circumstances '
                        'were us. There were no circumstances; there was a document and a file '
                        'and an error.'),
               ('Maya', 'The third explained the process.'),
               ('Rana', 'For a page and a half. I have read letters like that about my own '
                        'family and the effect is that somebody has decided to teach you about '
                        'their internal arrangements instead of answering you.'),
               ('Maya', 'What does the fourth do that the others do not?'),
               ('Rana', 'Four things in four sentences. It names what we did. It says it should '
                        'not have happened. It states what the consequence was for him, in his '
                        'words, not ours: he could not attend his mother’s funeral. And it says '
                        'I am sorry.'),
               ('Maya', 'Which of the four is hardest to write?'),
               ('Rana', 'The third. Naming the consequence is the sentence that makes it real, '
                        'and every instinct an institution has says leave it out, because the '
                        'reader already knows it and writing it down is an admission.'),
               ('Maya', 'And is it an admission?'),
               ('Rana', 'It is the admission. That is why it has to be there.')],
        a=[('What was wrong with the first draft?', 'it made the application the actor and in substance blamed him'),
           ('What was wrong with the second?', 'the circumstances were the Ministry; there were no circumstances'),
           ('What was wrong with the third?', 'it explained the process for a page and a half instead of answering him'),
           ('What four things does the fourth do?', 'names the act, accepts the standard, states the consequence, and apologises'),
           ('Which sentence is hardest?', 'the consequence, because writing it down is the admission')],
        b=[('The circumstances were ____________.', 'us'),
           ('Their internal ____________ instead of answering you.', 'arrangements'),
           ('In his words, not ____________.', 'ours'),
           ('It is the ____________. That is why it has to be there.', 'admission')]),
d2=dict(title='Three minutes',
        fig=(['Ninety-eight in a hundred.', 'And the other two?'],
             ['Searched by hand.', 'Three minutes each.']),
        cap='Rana and Karim Dalati, on the workflow change.',
        lines=[('Karim', 'Your section proposed removing the intake step from document handling '
                         'altogether.'),
               ('Rana', 'I proposed it on the Friday, when I had read the file, and I was '
                        'wrong.'),
               ('Karim', 'Why wrong?'),
               ('Rana', 'Because the step reads and files documents accurately in about '
                        'ninety-eight cases in a hundred, and the alternative is four officers '
                        'doing it at about ninety-four. Removing it would have produced more '
                        'misfiling and a six-week queue.'),
               ('Karim', 'So what did you change?'),
               ('Rana', 'One thing. The step no longer produces a refusal on the ground that a '
                        'document is missing. Where a document appears to be missing it says so '
                        'and the file goes to an officer, who searches by name and date of birth '
                        'across everything received in the previous fortnight before any refusal '
                        'can issue.'),
               ('Karim', 'Which is three minutes.'),
               ('Rana', 'Three minutes, on about four hundred cases a month, which is twenty '
                        'hours. That is the price and it is the only change that would have '
                        'prevented November.'),
               ('Karim', 'The general lesson is not about documents.'),
               ('Rana', 'The general lesson is that the step may prepare a decision and may not '
                        'take one where the decision is adverse and rests on an absence. An '
                        'absence is the one thing a filing error looks exactly like.'),
               ('Karim', 'I would put that sentence in the standing instruction.'),
               ('Rana', 'It is in the standing instruction. I would rather it had been there in '
                        'October, and the reason it was not is that nobody had asked what a '
                        'misfiled document looks like from inside the process.')],
        a=[('What had Rana proposed on the Friday?', 'removing the intake step from document handling altogether'),
           ('Why was that wrong?', 'because officers misfile more often and a queue would have formed'),
           ('What single change was made?', 'the step may no longer refuse on the ground that a document is missing'),
           ('What does the change cost?', 'about three minutes on four hundred cases a month, around twenty hours'),
           ('What is the general lesson?', 'that a step may prepare an adverse decision resting on an absence but not take it')],
        b=[('About ninety-eight cases in a ____________.', 'hundred'),
           ('Searches by name and date of ____________.', 'birth'),
           ('An absence is the one thing a filing error looks exactly ____________.', 'like'),
           ('Nobody had asked what a misfiled document looks like from inside the ____________.', 'process')]),

speak=[('Acknowledge it',
        ['Student A: describe a mistake your organisation might make.',
         'Student B: acknowledge it in four sentences: act, standard, consequence, apology.',
         'Check that the organisation is the subject of the first sentence.']),
       ('Prepare or decide',
        ['List five steps in a process you work in.',
         'Say for each whether it prepares a decision or takes one.',
         'Say which adverse decisions should never be taken without a person.']),
       ('The three-minute check',
        ['Name a check in your work that takes a few minutes.',
         'Say what it would prevent.',
         'Say how many cases a month it would apply to.'])],

ext_title='A step may prepare an adverse decision and must not take one that rests on an absence',
ext_fig=figs.datatable('THE NOVEMBER CASE',
                       ['Stage', 'What happened', 'What now happens'],
                       [['document received', 'read and typed correctly', 'unchanged'],
                        ['document filed', 'attached to another file', 'unchanged, 98 in 100'],
                        ['completeness check', 'recorded as missing', 'states what is missing'],
                        ['refusal', 'issued automatically', 'cannot be issued by the step'],
                        ['officer search', 'none', '3 minutes, by name and date of birth'],
                        ['decision', 'taken on a false premise', 'taken by an officer']]),
ext_fig_cap='Two stages are unchanged. The change is at the fourth row, and it is a prohibition.',
ext=[
 'Document workflows are the part of consular and visa work where assisted processing is most '
 'obviously justified. The volumes are large, the tasks are clerical, and the error rate of a '
 'step that reads a document, identifies its type and date and attaches it to a file is '
 'markedly lower than that of four officers doing the same work at the end of a long day. Any '
 'section that removes it in a panic will produce more misfiling, not less, together with a '
 'queue.',
 'The errors it does make are nevertheless of a particular kind, and the kind matters more than '
 'the rate. A misfiled document is indistinguishable, from inside the process, from a document '
 'that was never supplied. The file simply lacks it. Every completeness check then reports an '
 'absence, correctly, and every subsequent step is correct on a false premise.',
 'Where that false premise feeds a decision, the consequence falls entirely on the applicant '
 'and is often irreversible. A refusal on the ground that proof of relationship was not '
 'supplied is lawful, properly reasoned and unanswerable, and the funeral was on Thursday. No '
 'appeal mechanism operates at the speed of a funeral.',
 'The rule that follows is narrow and should be stated as a prohibition rather than as a '
 'safeguard: a step may prepare an adverse decision and may not issue one whose ground is the '
 'absence of something. Where a document appears to be missing, the step says what is missing '
 'and an officer searches for it under the applicant’s own identifiers across recent intake '
 'before any refusal issues. On the volumes of a medium-sized section that costs about twenty '
 'hours a month, and it is the only measure that addresses the actual failure.',
 'The letter that follows an error of this kind is the other half of the work and is harder '
 'than the rule. An institution’s instinct is to write about requirements, circumstances and '
 'processes, none of which has the institution as its subject. A real acknowledgement names '
 'what the ministry did, states that it should not have happened, states the consequence for '
 'the person in plain words, and apologises. The third of those is the one every draft omits, '
 'because writing down that a man missed his mother’s funeral is the admission, which is '
 'precisely why it belongs in the letter.'],
dp1=('Document workflow safeguards',
     'Consular and visa services in several foreign ministries retained automated document '
     'intake in 2025 while prohibiting automated refusals grounded on missing documents, '
     'requiring a manual search of recent intake first.',
     'Source: reported practice in consular and visa administration, 2025–2026.'),
e_a=[('Why is assisted document handling justified?', 'large volumes, clerical tasks, and a lower error rate than tired officers'),
     ('What kind of error does it make?', 'a misfiled document, which looks exactly like one never supplied'),
     ('Why does the kind matter more than the rate?', 'because every later step is then correct on a false premise'),
     ('What is the prohibition?', 'a step may prepare an adverse decision and may not issue one grounded on an absence'),
     ('What four things does a real acknowledgement contain?', 'the act, the standard, the consequence, and an apology')],
e_b=[('Removing the step would reduce misfiling.', 'F'),
     ('A misfiled document is distinguishable from a missing one inside the process.', 'F'),
     ('An appeal operates at the speed of a funeral.', 'F'),
     ('The safeguard is best written as a prohibition.', 'T'),
     ('The consequence sentence is the one usually omitted.', 'T'),
     ('An apology substitutes for accepting a standard.', 'F')],

w_model=(
 'Purpose: prepare each application for decision so that no refusal is issued on the ground '
 'that a document is absent until a person has searched for it. Scope: applications for '
 'emergency travel documents and visas received through the intake system; applications '
 'referred on compassionate grounds are out of scope and go directly to an officer. Inputs: '
 'the documents received, the published document checklist, and the intake record for the '
 'preceding 14 days. Criteria: read each document, record its type and date, and attach it to '
 'the named file; where a document on the checklist is not on the file, state which document is '
 'absent and refer the file to an officer; issue no refusal and state no ground of refusal; '
 'where 2 applications share a surname and a date of birth, flag both to the officer. Done: 1 '
 'prepared file per application with any absence stated, within 4 hours of intake, and no '
 'decision taken. Fallback: where a document cannot be read or typed, attach it to the file '
 'unclassified and refer the file rather than recording the document as absent.'),
w_fig=figs.spec_card('THE TASKING FOR DOCUMENT INTAKE',
                     [('Purpose', 'no refusal on an absence until a person has searched'),
                      ('Scope', 'intake applications; compassionate referrals excluded'),
                      ('Inputs', 'the documents, the checklist, 14 days of intake'),
                      ('Criteria', 'read, record, attach; state absences; issue no refusal'),
                      ('Done', '1 prepared file within 4 hours, no decision taken'),
                      ('Fallback', 'unreadable: attach unclassified and refer, never absent')]),
w_fig_cap='Issue no refusal and state no ground of refusal: the prohibition is the whole safeguard.',
w_task='Write a tasking for a document process in your own work.',
w_steps=['Say what no decision may rest on without a person.',
         'Bound the applications and exclude urgent referrals.',
         'Require absences to be stated rather than acted on.',
         'Forbid the issuing of an adverse decision.',
         'Say what happens where a document cannot be read.'],
w_bank=['Prepare … so that no … is issued on the ground that … until …',
        'Cover … ; … are out of scope and go directly to …',
        'Work from … , … and …',
        'Read … , record … , and attach … ; where … is not on the file, state … and refer … ; issue no … ; where … , flag …',
        'Where a document cannot be read … , attach … and refer … rather than …'],
w_check=['Is issuing a refusal forbidden in words?',
         'Must an absence be stated rather than acted on?',
         'Is an unreadable document referred rather than recorded absent?',
         'Is there a flag for applicants sharing identifiers?'],

t_title='Visa and document workflows',
t_fig=figs.split('AN INTAKE STEP',
                 'Should do',
                 ['read a document and type it',
                  'attach it to the named file',
                  'state what the checklist lacks',
                  'flag applicants with shared identifiers'],
                 'Must not do',
                 ['issue a refusal',
                  'state a ground of refusal',
                  'treat an absence as established',
                  'record an unreadable document as missing']),
t_fig_cap='The left column is 98 in 100 and worth having. The right column is where November happened.',
t_body=[
 'Assisted document handling is justified here on the figures: the volumes are large, the work '
 'is clerical, and a step that reads a document and attaches it to a file misfiles less often '
 'than four officers at the end of a long day. A section that removes it after an incident '
 'will produce more misfiling and a queue, which is what I proposed on the Friday and was '
 'wrong about by Monday.',
 'The errors it does make are of one kind, and the kind is what matters. A misfiled document '
 'is indistinguishable from a document never supplied, because the file simply lacks it. The '
 'completeness check then reports an absence correctly, and everything downstream is correct '
 'on a false premise, which is how a lawful, properly reasoned refusal issues in a case where '
 'the applicant did everything asked of him.',
 'So write the safeguard as a prohibition: a step may prepare an adverse decision and may not '
 'issue one whose ground is an absence. Where a document appears to be missing, an officer '
 'searches recent intake under the applicant’s own identifiers before any refusal — three '
 'minutes, twenty hours a month, and the only measure that reaches the actual failure. Then '
 'write the letter properly, which is harder: name what the Ministry did, say it should not '
 'have happened, state the consequence for the person in plain words, and apologise. Every '
 'draft omits the third, because writing down that a man missed his mother’s funeral is the '
 'admission.'],
t_say=[('State the prohibition: ', 'The step may prepare a decision and may not issue a refusal.'),
       ('Require the search: ', 'Searched by name and date of birth across 14 days of intake.'),
       ('Acknowledge properly: ', 'The Ministry misfiled your document. This should not have happened.')],
t_bound=('A step can read a document, type it and attach it, and it cannot tell a misfiling '
         'from an absence, because from inside the process they are the same fact. No '
         'completeness check reaches this and no appeal mechanism operates at the speed of a '
         'funeral, so the safeguard has to be a prohibition on the decision rather than an '
         'improvement to the check.'),
t_a=[('The step may prepare a decision and may not issue a ____________.', 'refusal'),
     ('Searched by name and date of ____________ across 14 days of intake.', 'birth'),
     ('The Ministry ____________ your document.', 'misfiled'),
     ('Indistinguishable from a document never ____________.', 'supplied'),
     ('Everything downstream is correct on a false ____________.', 'premise'),
     ('Writing down the consequence is the ____________.', 'admission')],
t_b_rubric='Rewrite each as an acknowledgement with the Ministry as the subject.',
t_b=[('I regret that the application did not meet the requirements.', 'the Ministry attached a document you had supplied to another applicant’s file'),
     ('I regret the distress caused by these circumstances.', 'this should not have happened'),
     ('Errors of this kind are regrettable.', 'you were unable to attend your mother’s funeral as a result'),
     ('The Ministry apologises for any inconvenience.', 'I am sorry')],

case=dict(
 title='The Decision Room · What else rests on an absence',
 brief=[
  'The prohibition now covers refusals grounded on a missing document. Karim has asked what '
  'else in the Ministry rests on an absence.',
  'Three cases were found: a registration treated as lapsed because no renewal was recorded, a '
  'benefit withdrawn because no proof of residence was on file, and a case closed because the '
  'applicant was recorded as not having replied.',
  'Rana wants the prohibition extended to all three. Yara Ibrahim says a general prohibition '
  'will be read as a prohibition on automation itself. Maya Sarkis asks how an officer is '
  'supposed to search for something that was never there.'],
 exhibit=figs.datatable('DECISIONS RESTING ON AN ABSENCE',
                        ['', 'Volume a month', 'Searchable?'],
                        [['refusal: document missing', '~400', 'yes, by identifiers'],
                         ['registration lapsed: no renewal', '~1,200', 'yes, by identifiers'],
                         ['benefit withdrawn: no proof of residence', '~30', 'yes'],
                         ['case closed: applicant did not reply', '~900', 'partly'],
                         ['of those, replies later found', '19 last year', 'misrouted'],
                         ['officer minutes per search', '3', '—']]),
 exhibit_cap='Two and a half thousand decisions a month rest on something not being there.',
 exhibit_note='Of the 900 closed for no reply, 19 replies were later found to have been '
              'misrouted.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Extend it to all four. Every one of them is a decision against a person on the '
          'ground that something is not there, and in 19 cases last year it was there.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'Four prohibitions covering two and a half thousand decisions a month is not a '
          'safeguard, it is the end of assisted processing, and the queue will fall on the same '
          'people.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Separate the searchable from the unsearchable. An officer can look for a document '
          'under a name. Nobody can look for a reply that was never sent, so that case needs a '
          'different device.')],
 steps=[('Find it', 'How many decisions a month rest on an absence?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Yara expect the queue to fall on the same people?'),
        ('Weigh it', 'Four prohibitions against the volume they cover.'),
        ('Decide', 'Which decisions require a search, and what covers the rest?')],
 analysis=[('Find it. How many replies were later found?', 'nineteen, misrouted'),
           ('Compare it. What does Maya propose?', 'separating searchable absences from unsearchable ones'),
           ('Infer it. What is Yara’s concern?', 'that a general prohibition ends assisted processing and creates a queue'),
           ('Weigh it. What does a search cost?', 'three minutes'),
           ('Decide. What would you do?', 'answers vary; a search where searchable and a second notice where not')],
 decision='Write the rule for decisions resting on an absence.',
 decision_steps=['Say which absences require an officer search.',
                 'Say what covers an absence that cannot be searched.',
                 'Say what is recorded when a search finds the item.',
                 'Say what is measured each quarter.'],
 bank=['Where the absent item can be searched for by … , …',
       'Where it cannot be searched for, …',
       'Where a search finds the item, …',
       'Each quarter the Ministry measures …',
       'This is reviewed …'],
 outcome='Searchable absences require a three-minute officer search before any adverse '
         'decision, which covers about 1,630 decisions a month and costs about eighty hours. '
         'For the unsearchable case a different device was adopted: no case is closed for want '
         'of a reply until a second notice has been sent by a different channel and fourteen '
         'days have passed. In the following year 41 replies arrived after a second notice, of '
         'which 11 had been misrouted and 30 had never been received at all. Yara, who had '
         'feared the end of assisted processing, says the second notice cost less than the '
         'searches and found more, and that she had been arguing against prohibitions in '
         'general when the question was which device fits which failure.',
 outcome_q=[('What covers an unsearchable absence?', 'a second notice by a different channel and fourteen days'),
            ('What did the second notice produce?', 'forty-one replies, eleven misrouted and thirty never received')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Process the applications',
 task=['This is the intake instruction in force in November.',
       'It was followed exactly and produced a lawful refusal that cost a man his mother’s '
       'funeral.'],
 draft=['Process incoming applications.',
        'Check each against the document checklist.',
        'Refuse incomplete applications with the appropriate ground.',
        'Deal with urgent cases quickly.',
        'Keep processing times down.',
        'Refer anything unclear.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third authorises a decision on the one fact the process cannot '
           'establish.',
 asked=['Absences stated and referred, not acted on',
        'No refusal issued by the step',
        'A search of recent intake before any refusal'],
 back=['Correct reading and typing of documents',
       'A correct checklist comparison',
       'A refusal on a ground that was false in fact'],
 gap='"Refuse incomplete applications" treats an absence on the file as an absence in fact, '
     '"urgent cases quickly" names no test, "keep processing times down" sets the incentive '
     'against searching, and "anything unclear" does not include a clear absence.',
 back_cap='An instruction that was carried out correctly at every step and produced a decision '
          'nobody could defend.',
 back_note='Line three is the failure, and line five makes it worse: a section rewarded for '
           'processing time will not spend three minutes searching.',
 diagnosis=[('[1] "process incoming applications" — which, within what time?', 'undefined done'),
            ('[2] "check against the checklist" — and if the file lacks something supplied?', 'missing condition'),
            ('[3] "refuse incomplete applications" — refusal issued by whom?', 'undefined done'),
            ('[4] "urgent cases quickly" — urgent by what test?', 'unstated criterion'),
            ('[5] "keep processing times down" — against what standard, and at what cost?', 'unstated criterion'),
            ('[6] "refer anything unclear" — and a clear absence that may be a misfiling?', 'missing condition')],
 rewrite='Rewrite the instruction so that no refusal may issue on an absence without a search.',
 scaffold=['What no decision may rest on without a person',
           'The applications covered and the urgent referrals excluded',
           'The documents, the checklist and recent intake',
           'Read, record, attach; absences stated and referred; no refusal; shared identifiers flagged',
           'A prepared file within a stated time, and no decision taken',
           'What to do where a document cannot be read'],
 bank=['Prepare … so that no … until …',
       'Cover … ; … go directly to …',
       'Work from … , … and …',
       'Read … ; where … , state … and refer … ; issue no … ; where … , flag …',
       'Return 1 prepared file … within … , and …',
       'Where a document cannot be read … , … rather than …'],
 check=['Is the step forbidden to issue a refusal?',
        'Is an absence referred rather than acted on?',
        'Is a search of recent intake required?',
        'Is the incentive to process quickly bounded?'],
 model=['Prepare each application for decision so that no refusal is issued on the ground that a document is absent until a person has searched for it',
        'Applications for emergency travel documents and visas received through the intake system; applications referred on compassionate grounds are out of scope and go directly to an officer',
        'The documents received, the published document checklist, and the intake record for the preceding 14 days',
        'Read each document, record its type and date, and attach it to the named file; where a document on the checklist is not on the file, state which document is absent and refer the file to an officer; issue no refusal and state no ground of refusal; where 2 applications share a surname and a date of birth, flag both to the officer',
        '1 prepared file per application with any absence stated, within 4 hours of intake, and no decision taken',
        'Where a document cannot be read or typed, attach it to the file unclassified and refer the file rather than recording the document as absent'],
 cost='1 refusal, lawful and properly reasoned, issued on the ground that a document was '
      'missing when the Ministry had attached it to another applicant’s file, 2 days before a '
      'funeral the applicant could not attend.'),

rev_fig=figs.split('ACKNOWLEDGEMENT',
                   'Evasion',
                   ['I regret that the application did not meet …',
                    'I regret the distress caused by …',
                    'Errors of this kind are regrettable.',
                    'We apologise for any inconvenience.'],
                   'Acknowledgement',
                   ['The Ministry attached your document to …',
                    'This should not have happened.',
                    'You could not attend your mother’s funeral …',
                    'I am sorry.']),
rev_fig_cap='The act, the standard, the consequence, the apology — and the Ministry as subject.',
rev=dict(
 read=[('A misfiled document looks, from inside the process, like', ['an error', 'a document never supplied', 'a duplicate', 'a late submission'], 1),
       ('The safeguard is best written as', ['a better check', 'a prohibition on the decision', 'a training note', 'an appeal right'], 1),
       ('The sentence every draft omits is', ['the apology', 'the consequence', 'the act', 'the standard'], 1),
       ('In the Decision Room, what covered the unsearchable case?', ['a search', 'a second notice by another channel', 'nothing', 'a prohibition'], 1)],
 listen_text='A misfiled document is indistinguishable, from inside the process, from a '
             'document that was never supplied. The file simply lacks it. Every completeness '
             'check then reports an absence, correctly, and every subsequent step is correct '
             'on a false premise.',
 listen=[('Indistinguishable, from inside the ____________.', 'process'),
         ('The file simply ____________ it.', 'lacks'),
         ('Reports an absence, ____________.', 'correctly'),
         ('Correct on a false ____________.', 'premise')],
 speak=['Acknowledge a mistake in four sentences with your organisation as the subject.',
        'Name one adverse decision in your work that rests on an absence.'],
 write='Write one prohibition on a decision resting on an absence.',
 vocab=[('The stated reason on which an application was refused is a ____________.', 'ground of refusal'),
        ('A reason of urgency or hardship for departing from the ordinary course is a ____________.', 'compassionate ground'),
        ('The re-examination of a decision by the body that took it is a ____________.', 'reconsideration'),
        ('A case taken out of order for a stated reason is an ____________.', 'expedited case'),
        ('The document communicating a decision and its grounds is a ____________.', 'decision letter')],
 gram=[('The Ministry ____________ a document you had supplied to another file.', 'attached'),
       ('This should not ____________ happened.', 'have'),
       ('You were unable to attend your mother’s funeral ____________ a result.', 'as'),
       ('The Ministry ____________ that the ground of refusal was based on its own error.', 'accepts'),
       ('I ____________ that the error was not found before Thursday.', 'regret')]),

found=['Find one decision in your work that rests on something not being there.',
       'Say what a three-minute search would cost at your volumes.',
       'Write a four-sentence acknowledgement for a mistake your office has made.',
       'Check whether your process can tell a misfiling from an absence.'],
end_line='An absence on a file is the one thing a filing error looks exactly like.',
end_next='Next: A Condolence Cannot Be Generated',
)
