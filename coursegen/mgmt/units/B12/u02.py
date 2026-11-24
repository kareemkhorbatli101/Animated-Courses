# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Boundaries and Permissions',
gram='modals of permission and ability',
ai='permissions and limits: what it may touch',
strap='CEFR B1 · Grammar: modals of permission and ability · AI: permissions and limits',
cando=['use can, may, be allowed to and be able to correctly in a rule',
       'tell the difference between what is possible and what is permitted',
       'write down what a process may touch and what it may not',
       'explain why a permission should be granted narrowly rather than widely',
       'say what a record of access does and does not prove'],
hero=('THE FOLDER NOBODY MEANT TO SHARE',
      ['It had access to everything, because that was easier.',
       'Nothing went wrong for five months.'],
      [(900, 'blue', 'short'), (1640, 'grey', 'long'), (2380, 'purple', 'short')]),
hero_cap='Permissions are boring until the first Tuesday on which they are not.',

warm=['What can you open at work that you have no business opening?',
      'Is there a difference between "you can" and "you may"?',
      'Who would know if somebody read a file they should not have read?'],
read=[
 'When Jonas set up the first automated runs, he gave them access to the whole client '
 'folder. This was not carelessness in the ordinary sense. Narrowing the access would have '
 'taken a morning, nothing in the runs needed anything outside their own area, and the '
 'folder was already restricted to staff. It was the easy choice and it was wrong in a way '
 'that took five months to show.',
 'In August, a reminder run was asked to pull client addresses and pulled them from the '
 'wrong file. The file it used was a list prepared for a possible sale of the business, '
 'which contained every client, every contract value, and a column of Dalia’s private '
 'notes about which clients were likely to leave.',
 'Nothing left the building. The run produced a draft set of letters, the draft went to '
 'Fatima for release as the process required, and Fatima noticed within about forty seconds '
 'that four of the letters were addressed to companies that had not been clients for two '
 'years. That is the only reason this is a story about permissions and not a story about a '
 'lawyer.',
 'The rule Arclight adopted afterwards is narrow and slightly annoying. Every run is given '
 'access to the folders it needs for the job it does, and nothing else. When a run needs a '
 'new folder, somebody has to grant it, by name, and the grant is written down with a date '
 'and a reason.',
 'Marta describes the principle as giving the smallest permission that does the job, and '
 'she is careful to add that it is not a protection against bad intentions. It is a '
 'protection against ordinary accidents, which are far more common and which nobody plans '
 'for because nobody intends them.'],
c_a=[('What access did Jonas give the first runs?', 'the whole client folder'),
     ('Why was that the easy choice?', 'narrowing it would have taken a morning and nothing seemed to need it'),
     ('What file did the August run use by mistake?', 'a list prepared for a possible sale of the business'),
     ('Who noticed, and how quickly?', 'Fatima, within about forty seconds, at release'),
     ('What is Marta’s principle?', 'give the smallest permission that does the job')],
c_b=[('Jonas restricted access carefully at the start.', 'F'),
     ('The sale list contained private notes about clients.', 'T'),
     ('Letters were sent to former clients.', 'F'),
     ('Fatima caught it at the release step.', 'T'),
     ('Marta says narrow permissions protect against bad intentions.', 'F'),
     ('A new folder grant must be written down with a date and a reason.', 'T')],
c_c=[('Narrowing the access would have taken a ____________.', 'morning'),
     ('The file contained a column of Dalia’s private ____________.', 'notes'),
     ('Four of the letters were addressed to companies that had not been clients for two ____________.', 'years'),
     ('Somebody has to ____________ it, by name.', 'grant'),
     ('Give the smallest ____________ that does the job.', 'permission'),
     ('It is a protection against ordinary ____________.', 'accidents')],
c_d=[('The failure was caught by ( a person / a rule ).', ['a person', 'a rule'], 0),
     ('The sale list was dangerous mainly because it held', ['addresses', 'contract values and private notes', 'invoices', 'passwords'], 1),
     ('Marta says narrow permissions protect against', ['bad intentions', 'ordinary accidents', 'clients', 'auditors'], 1),
     ('A new folder grant requires', ['nothing', 'a name, a date and a reason', 'a meeting', 'a vote'], 1),
     ('Nothing left the building because', ['the run failed', 'the release step existed', 'the file was locked', 'Jonas checked'], 1)],
c_e=('Can, may or be able to? Put each sentence in the right column.',
     [('The run can read the ledger folder.', 'Permitted'),
      ('It is able to open any file it is given.', 'Possible'),
      ('Only Fatima may release the queue.', 'Permitted'),
      ('It can produce 400 letters an hour.', 'Possible'),
      ('Staff are allowed to view the sale list.', 'Permitted'),
      ('It is able to read the sale list.', 'Possible')],
     ['Permitted', 'Possible']),

v_fig_title='WHAT IT MAY TOUCH',
v_fig=[('doc', 'a permission'), ('bank', 'access'), ('scale', 'a boundary'),
       ('note', 'an audit trail'), ('bulb', 'a guardrail'), ('chart', 'a restriction')],
v_fig_cap='Six words for the difference between what is possible and what is allowed.',
vocab=[
 ('permission', 'official agreement that somebody may do a particular thing'),
 ('authority', 'the right to decide or to act, given by a position'),
 ('access', 'the ability to reach and use something, such as a file'),
 ('credential', 'something that proves who you are, such as a password'),
 ('privilege', 'a right given to some people and not to others'),
 ('restriction', 'a rule limiting what may be done'),
 ('boundary', 'the line beyond which something does not go'),
 ('mandate', 'formal authority to act in a particular area'),
 ('sandbox', 'a separated space where work can be tried without affecting anything real'),
 ('read-only', 'able to be looked at but not changed'),
 ('revoke', 'to take back a permission that was given'),
 ('grant', 'to give somebody a permission formally'),
 ('audit trail', 'a record showing who did what, and when'),
 ('guardrail', 'a limit built in to stop a predictable kind of mistake'),
 ('override', 'to set aside a normal rule by deliberate decision'),
 ('lockout', 'being prevented from getting in at all'),
 ('segregation', 'keeping two things deliberately apart'),
 ('authorisation', 'the act of giving formal permission for something'),
 ('clearance', 'permission to see material of a particular kind'),
 ('scope', 'the range of things something is allowed to cover')],
v_a=[('A record showing who did what and when is an ____________.', 'audit trail'),
     ('A file you can look at but not change is ____________.', 'read-only'),
     ('To take back a permission is to ____________ it.', 'revoke'),
     ('A limit built in to stop a predictable mistake is a ____________.', 'guardrail'),
     ('A separated space for trying things safely is a ____________.', 'sandbox'),
     ('Keeping two things deliberately apart is ____________.', 'segregation'),
     ('Permission to see material of a particular kind is ____________.', 'clearance'),
     ('The range of things something may cover is its ____________.', 'scope')],
v_b=[('A credential is something that proves', 'who you are.'),
     ('To grant a permission is to give it', 'to somebody formally.'),
     ('A mandate is formal authority to act', 'in a particular area.'),
     ('To override a rule is to set it aside', 'by deliberate decision.'),
     ('A privilege is a right given to some people', 'and not to others.')],

g_title='Grammar: modals of permission and ability',
g_rule=['Can and be able to describe what is possible: it can read any folder it is given.',
        'May and be allowed to describe what is permitted: it may read the ledger folder only.',
        'In speech can often means may; in a written rule, keep them apart.',
        'Cannot describes impossibility; may not describes a prohibition. They are not the same.'],
g_fig=('LOOSE',
       ['It can read the client folder.',
        'Staff can open the sale list.',
        'It cannot send without a check.',
        'Anyone can release the queue.'],
       'PRECISE',
       ['It may read the ledger folder only.',
        'Only 3 named people may open the sale list.',
        'It may not send; Fatima releases.',
        'Only Fatima may release the queue.'],
       'describes what is possible',
       'describes what is permitted'),
g_fig_cap='Everything on the left was true in August. None of it was a rule.',
g_a=[('The run ____________ read the ledger folder only. (may)', 'may'),
     ('It ____________ open any folder it is given access to. (can)', 'can'),
     ('Only three named people ____________ open the sale list. (may)', 'may'),
     ('Staff are ____________ to view their own client files. (allow)', 'allowed'),
     ('It is ____________ to produce four hundred letters an hour. (able)', 'able'),
     ('Nobody ____________ release a queue without signing it. (may)', 'may'),
     ('____________ I ask who granted that access? (may)', 'May'),
     ('The run ____________ not write to the ledger at all. (may)', 'may'),
     ('She was not ____________ to approve her own expenses. (allow)', 'allowed')],
g_b=[('The run ( can / may ) read the ledger folder only — that is the rule.', ['can', 'may'], 1),
     ('It ____ open any folder it is given access to.', ['may', 'can', 'is allowed', 'might'], 1),
     ('Only three named people ____ open the sale list.', ['can', 'are able to', 'may', 'could'], 2),
     ('Staff are ____ to view their own client files.', ['able', 'allowed', 'possible', 'capable'], 1),
     ('It is ____ to produce four hundred letters an hour.', ['allowed', 'permitted', 'able', 'may'], 2),
     ('The run ____ write to the ledger at all.', ['cannot', 'may not', 'is not able', 'could not'], 1)],

d1=dict(title='Forty seconds',
        fig=(['Four of these are not clients.', 'Where did it get the addresses?'],
             ['The sale list.', 'It should not have been able to see that.']),
        cap='Fatima and Jonas, at the release step.',
        lines=[('Fatima', 'Four of these letters go to companies that left us two years ago.'),
               ('Jonas', 'They should not be in the ledger at all. Where did the addresses come from?'),
               ('Fatima', 'I do not know. The ledger does not have them.'),
               ('Jonas', 'Then it used another file. Give me a minute.'),
               ('Fatima', 'Which file?'),
               ('Jonas', 'The sale list. It is in the same folder and it has an address column.'),
               ('Fatima', 'The sale list has Dalia’s notes in it.'),
               ('Jonas', 'It does. Nothing went out, so nothing has happened.'),
               ('Fatima', 'Nothing has happened because I was looking. That is not the same thing.'),
               ('Jonas', 'No. It is not.'),
               ('Fatima', 'Why could it see that file at all?'),
               ('Jonas', 'Because I gave it the whole folder in February and never went back.')],
        a=[('What did Fatima notice?', 'four letters addressed to companies that had left two years earlier'),
           ('Which file had been used?', 'the sale list, which is in the same folder'),
           ('What does the sale list contain?', 'an address column and Dalia’s private notes'),
           ('Why does Fatima object to "nothing has happened"?', 'because nothing happened only because she was looking'),
           ('Why could the run see the file?', 'Jonas had given it access to the whole folder in February')],
        b=[('They should not be in the ____________ at all.', 'ledger'),
           ('It is in the same ____________ and it has an address column.', 'folder'),
           ('Nothing has happened because I was ____________.', 'looking'),
           ('I gave it the whole folder in ____________.', 'February')]),
d2=dict(title='Smallest permission',
        fig=(['Narrow everything.', 'That is a week of work.'],
             ['It is a week either way.', 'Not if nothing happens.']),
        cap='Marta and Jonas, the following morning.',
        lines=[('Marta', 'Every run gets the folders it needs and nothing else. Starting today.'),
               ('Jonas', 'That is a week of work across eleven runs, and most of them are fine.'),
               ('Marta', 'Most of them were fine yesterday too.'),
               ('Jonas', 'I can narrow the four that touch client data by Friday.'),
               ('Marta', 'Which four do not touch client data?'),
               ('Jonas', 'The internal ones. Reporting, scheduling, the inbox classifier.'),
               ('Marta', 'The inbox classifier reads client messages. That is client data.'),
               ('Jonas', 'It reads them and labels them. It does not store anything.'),
               ('Marta', 'It can see them. That is the only question I am asking.'),
               ('Jonas', 'Then you are asking me to narrow all eleven, which is the week I said.'),
               ('Marta', 'Yes. I am aware it is a week and I think you should spend it.'),
               ('Jonas', 'I will spend it. I still think nine of the eleven are a waste of my time.')],
        unresolved=True,
        a=[('What rule does Marta want?', 'every run gets the folders it needs and nothing else'),
           ('How long does Jonas say it will take?', 'a week across eleven runs'),
           ('Which runs does Jonas call internal?', 'reporting, scheduling and the inbox classifier'),
           ('Why does Marta disagree about the classifier?', 'because it can see client messages, whether or not it stores them'),
           ('Does Jonas accept the argument?', 'he agrees to do it but still thinks nine of the eleven are a waste of time')],
        b=[('Most of them were fine ____________ too.', 'yesterday'),
           ('It reads them and ____________ them.', 'labels'),
           ('It can ____________ them. That is the only question.', 'see'),
           ('I think you should ____________ it.', 'spend')]),

speak=[('Can or may?',
        ['Student A: say four things about your workplace using can.',
         'Student B: ask of each whether it means possible or permitted.',
         'Rewrite the permitted ones with may or be allowed to.']),
       ('Spoken specification: set the boundary',
        ['Choose a job somebody else could do for you.',
         'Brief it aloud, saying what they may touch and what they may not.',
         'Your partner names one thing you forgot to forbid. Add it.']),
       ('The smallest permission',
        ['In pairs, pick a system or a folder at your work.',
         'List who can reach it and who actually needs to.',
         'Name one access you would remove today, and one you could not.'])],

ext_title='Give the smallest permission that does the job',
ext_fig=figs.datatable('WHAT EACH RUN NEEDED, AND WHAT IT HAD',
                       ['Run', 'Needed', 'Had, in February', 'Gap'],
                       [['reminders', 'ledger folder', 'all client data', 'large'],
                        ['extraction', 'invoice folder', 'all client data', 'large'],
                        ['inbox classifier', 'the inbox', 'all client data', 'large'],
                        ['reporting', 'summary figures', 'all client data', 'large'],
                        ['scheduling', 'the calendar', 'all client data', 'large']]),
ext_fig_cap='Five runs, five different needs, one permission given to all of them.',
ext=[
 'Access is given broadly for an entirely understandable reason: narrowing it is work, and '
 'the work has to be done before anything has gone wrong, which is exactly when nobody '
 'wants to do it. The broad permission is not a decision anybody makes. It is a decision '
 'nobody makes, which is a different and more common thing.',
 'The principle that fixes it is old and has a name in several industries: give the smallest '
 'permission that lets the job be done. Not the smallest permission that feels safe, and not '
 'the permission that seemed about right at the time. The smallest one that works, '
 'determined by looking at what the job actually touches.',
 'It is worth being honest about what this does and does not protect you from. It does very '
 'little against somebody determined to misuse access they have been given, because they '
 'have been given it. What it protects against is the ordinary accident: the file in the '
 'wrong folder, the column with an unexpected name, the run that finds something nobody '
 'remembered was there.',
 'Those accidents are much more common than misuse, and they are the ones nobody plans for, '
 'because planning for an accident requires you to imagine being careless, which people are '
 'poor at. The narrow permission does the imagining for you: if the run cannot see the sale '
 'list, no sequence of reasonable mistakes causes it to use the sale list.',
 'The second half of the discipline is the record. Every grant written down with a name, a '
 'date and a reason, and every grant reviewed when the reason stops applying. This is dull '
 'and it is the part most often skipped. The cost of skipping it is that nobody will later '
 'be able to say why anything has the access it has.'],
dp1=('Accidental exposure',
     'Analyses of data incidents in small organisations consistently find that accidental '
     'exposure through over-broad access is reported more often than deliberate misuse.',
     'Source: general information-security reporting, 2026. Categories differ between studies.'),
e_a=[('Why is access usually given broadly?', 'because narrowing it is work that has to be done before anything goes wrong'),
     ('State the principle in one sentence.', 'give the smallest permission that lets the job be done'),
     ('What does a narrow permission not protect against?', 'somebody determined to misuse access they have been given'),
     ('What does it protect against?', 'ordinary accidents, such as a file in the wrong folder'),
     ('What is the second half of the discipline?', 'recording every grant with a name, a date and a reason, and reviewing it')],
e_b=[('Broad access is usually a deliberate decision.', 'F'),
     ('The principle is to give the permission that feels safe.', 'F'),
     ('Narrow permissions stop determined misuse.', 'F'),
     ('Accidents are more common than deliberate misuse.', 'T'),
     ('Recording grants is described as the part most often skipped.', 'T'),
     ('A narrow permission removes whole classes of accident.', 'T')],

w_model=(
 'Purpose: stop any run reaching data it has no business reaching. Scope: all 11 runs; the '
 'sale list and the staff folder are excluded from every run without exception. Inputs: the '
 'access register dated 3 September. Criteria: each run may read only the folders named for '
 'it in the register; no run may write to the ledger; each grant records a name, a date and '
 'a reason. Done: 11 runs re-granted and 1 updated register, by 17:00 on Friday. Fallback: '
 'if a run needs a folder not named in its grant, it stops and asks; it may not proceed on '
 'a folder granted to a different run.'),
w_fig=figs.handover('A GRANT, AND WHO MADE IT',
                    ['Name the run', 'Name the folders it needs', 'Name what it may not touch'],
                    'Marta signs the grant, with a date and a reason',
                    'A permission with no name on it belongs to nobody.'),
w_fig_cap='The fourth box is the one that makes the first three reviewable in two years.',
w_task='Write the access rule for a process in your own workplace.',
w_steps=['Name the process and the single job it exists to do.',
         'List the things it must be able to read, one by one.',
         'List at least two things it may not touch, by name.',
         'Say who grants an addition, and what they must record.',
         'Say what the process does when it needs something it has not been granted.'],
w_bank=['This run may read … only.', 'It may not … under any circumstances.',
        'A new folder may be granted only by … , who records …',
        'If the run needs … , it …', 'This grant is reviewed when …'],
w_check=['Have you listed what may be read, item by item?',
         'Have you named at least two things that are forbidden?',
         'Does a grant record a person, a date and a reason?',
         'Does the rule say what happens when something is missing?'],

t_title='Permissions and limits: what it may touch',
t_fig=figs.split('POSSIBLE AND PERMITTED',
                 'Possible — can, is able to',
                 ['It can open any folder it is given.',
                  'It is able to read every column.',
                  'It can produce 400 letters an hour.',
                  'It can reach the sale list.'],
                 'Permitted — may, is allowed to',
                 ['It may read the ledger folder only.',
                  'It may not write to the ledger.',
                  'Only Fatima may release a queue.',
                  'It may not open the sale list.']),
t_fig_cap='Every row on the left was true in February. Nobody had written a single row on the right.',
t_body=[
 'Write the permission as a list of folders rather than as a level of trust. Trust is not a '
 'specification and it does not survive being handed to somebody else; a list of folders '
 'does. This run may read the invoice folder and the supplier index. Two lines, and anybody '
 'can check them against what the run actually touched.',
 'Then write the forbidden list, which almost nobody writes because it feels like imagining '
 'crimes. It is not. It is imagining accidents, which are far more likely, and naming two '
 'or three things you know should never be reached means that no sequence of ordinary '
 'confusion gets to them. The sale list, the staff folder, the client’s own system.',
 'Finally, make the grant an event rather than a state. Somebody gives it, on a date, for a '
 'reason, and the reason can expire. Without that, the access a process holds becomes the '
 'sum of every emergency anybody ever had, and nobody can say which of them still applies.'],
t_say=[('List what it may read: ', 'This run may read the invoice folder and the supplier index.'),
       ('Name what it may not: ', 'It may not open the sale list or the staff folder.'),
       ('Make the grant an event: ', 'Marta granted this on 3 September, for the April reporting cycle.')],
t_bound=('A permission record does not tell you what was actually read. It tells you what '
         'was allowed, which is a different thing, and it will look complete and tidy even '
         'in a month when a run read nothing at all or read the same file nine hundred '
         'times. The register proves intention, not behaviour.'),
t_a=[('This run may read the invoice folder and the supplier ____________.', 'index'),
     ('It may not open the sale list or the ____________ folder.', 'staff'),
     ('Marta granted this on 3 September, for the April reporting ____________.', 'cycle'),
     ('Write the permission as a list of folders rather than as a level of ____________.', 'trust'),
     ('Naming the forbidden list is imagining ____________, not crimes.', 'accidents'),
     ('Make the grant an ____________ rather than a state.', 'event')],
t_b_rubric='Write the forbidden line each permission is missing.',
t_b=[('The reminder run may read the ledger folder.', 'it may not open the sale list, the staff folder or any client system'),
     ('The classifier may read the shared inbox.', 'it may not read personal mailboxes or write to any inbox'),
     ('The extraction run may read the invoice folder.', 'it may not write to the ledger or open the contracts folder'),
     ('The reporting run may read the summary figures.', 'it may not open the underlying client records or the sale list')],

case=dict(
 title='Decision Clinic · Narrow all eleven, or the four that matter?',
 brief=[
  'After the August near miss, Marta wants every run narrowed to exactly the folders it '
  'needs. Jonas estimates a week of his time across eleven runs and believes seven of them '
  'carry no realistic risk.',
  'Arclight has two pieces of work that week: a new client going live on the Thursday, and '
  'the September reporting cycle. Jonas is the only person who can do either of them, and '
  'he cannot do all three.',
  'Kenji has asked what happens to the new client if the go-live slips, and the answer is '
  'that it slips to the following month, because the client’s own year end is in the way.'],
 exhibit=figs.datatable('ELEVEN RUNS, BY WHAT THEY CAN REACH',
                        ['Run', 'Reaches client data?', 'Reaches the sale list?', 'Days to narrow'],
                        [['reminders', 'yes', 'yes', '0.5'],
                         ['extraction', 'yes', 'yes', '0.5'],
                         ['classifier', 'yes', 'yes', '1.0'],
                         ['reporting', 'yes', 'yes', '1.5'],
                         ['7 internal runs', 'no', 'yes', '1.5 total']]),
 exhibit_cap='Every run can reach the sale list, including the seven Jonas calls harmless.',
 exhibit_note='The seven internal runs do not touch client data. They are in the same parent '
              'folder as the sale list, which is why the third column reads as it does.',
 voices=[('Marta Olsen', 'risk and liability',
          'All eleven. The one that caused the near miss was in the group you would have '
          'called harmless in July.'),
         ('Jonas Riedel', 'systems and workflows',
          'Four runs, two and a half days, this week. The other seven in October. I cannot '
          'do a week of this and a go-live, and the go-live cannot move.'),
         ('Kenji Watanabe', 'finance',
          'If the go-live slips it slips a month, and that is eleven thousand euros of '
          'revenue sitting still. I would like somebody to say that number out loud before '
          'we decide.')],
 steps=[('Find it', 'How many runs can reach the sale list, and how long does each take?'),
        ('Compare it', 'What does narrowing all eleven give that narrowing four does not?'),
        ('Infer it', 'Why does Marta point at the group Jonas called harmless?'),
        ('Weigh it', 'A month of revenue against three days of exposure.'),
        ('Decide', 'What gets narrowed this week, and what is the plan for the rest?')],
 analysis=[('Find it. How many runs can reach the sale list?', 'all eleven'),
           ('Compare it. What is the specific risk in the seven internal runs?', 'they sit in the same parent folder as the sale list, so they can reach it although they do not need client data'),
           ('Infer it. Why is Marta’s point about July important?', 'because the run that caused the near miss had been classified as low risk'),
           ('Weigh it. What figure does Kenji want named?', 'eleven thousand euros if the go-live slips a month'),
           ('Decide. Is there an option neither of them has proposed?', 'moving the sale list out of the shared parent folder, which removes the exposure from all eleven in an hour')],
 decision='Write the decision Ines records on Monday.',
 decision_steps=['Say what happens to the sale list, first.',
                 'Say which runs are narrowed this week, and which wait.',
                 'Name the date the rest are done, and who checks that it happened.',
                 'Say what the company is accepting in the meantime, in plain words.'],
 bank=['The sale list moves to … by …', 'This week we narrow … ; the remaining … wait until …',
       '… confirms on … that this has happened.', 'Until then we are accepting…',
       'If … , we stop and reconsider.'],
 outcome='Ines moved the sale list and the staff folder out of the shared parent folder on '
         'the Monday morning, which took Jonas fifty minutes and removed the exposure from '
         'all eleven runs at once. The four client-facing runs were narrowed that week and '
         'the other seven in October. Nobody in the room had proposed moving the file, '
         'including Marta, who said afterwards that she had been arguing about permissions '
         'because permissions were the thing she knew about.',
 outcome_q=[('Why was moving the file better than either proposal?', 'it removed the exposure from all eleven runs in under an hour, without delaying the go-live'),
            ('What does Marta’s remark afterwards illustrate?', 'that people argue inside the frame they know best, which can hide a cheaper answer')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Set up the new client’s runs',
 task=['A twelfth client goes live on Thursday and Jonas is setting up their runs on the '
       'Tuesday. Dalia writes the brief between two other things, as usual.',
       'The client has given Arclight access to their own system, which is new and which '
       'nobody has written a rule about. Two of the three runs do not need it at all.'],
 draft=['Set up the new client’s runs before Thursday.',
        'Give them access to what they need.',
        'They will need to see their files and probably ours too.',
        'Keep it sensible and do not let it do anything daft.',
        'If something is missing just sort it out.',
        'Tell me when they are ready to go.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about permissions, containing no permission and no prohibition.',
 asked=['Each run granted only its own folders',
        'No run reaching the client’s own system',
        'Every grant recorded with a reason'],
 back=['All 3 runs granted the parent folder',
       '1 run writing into the client’s system',
       'No record of who granted what'],
 gap='What they need named no folders, "their files and probably ours too" named no boundary, '
     'and "just sort it out" granted Jonas the authority to extend access without telling anybody.',
 back_cap='Three new runs, one of which can write into another company’s system.',
 back_note='The run that could write into the client’s system never did. Nobody discovered '
           'it for nine weeks, and it was found during an unrelated review.',
 diagnosis=[('[1] "what they need" — which folders, exactly?', 'unscoped set'),
            ('[2] "their files and probably ours too" — whose, and which?', 'ambiguous referent'),
            ('[3] "keep it sensible" — sensible by what test?', 'unstated criterion'),
            ('[4] "do not let it do anything daft" — forbidden how?', 'unstated criterion'),
            ('[5] "if something is missing just sort it out" — missing from which list?', 'unscoped set'),
            ('[6] "when they are ready" — ready meaning what, and told how?', 'ambiguous referent')],
 rewrite='Rewrite the brief so that each run is granted a named list of folders, two things '
         'are explicitly forbidden, and nobody may widen access without recording it.',
 scaffold=['Why the three runs exist and what each one does',
           'Which folders each run may read, and what is forbidden to all three',
           'The access register and the client’s own agreement, both dated',
           'The read and write rules for each run, and who may grant an addition',
           'What is handed back on Wednesday, and in what form',
           'What a run does when it needs something it has not been granted'],
 bank=['Set up … runs so that …', 'Run … may read … only; no run may …',
       'Work from the access register dated …', 'Only … may grant an addition, recording …',
       'Return … by … on …', 'If a run needs … , it …'],
 check=['Does each run have its own named folder list?',
        'Are at least two things forbidden to every run, by name?',
        'Does the brief say who may widen access, and what they record?',
        'Is there a rule for the case where access is missing?'],
 model=['Bring the twelfth client live on Thursday without any run reaching data it does not need',
        'The 3 new runs for this client only; no run may reach the sale list, the staff folder or the client’s own system',
        'The access register dated 3 September and the client agreement dated 28 August',
        'The reminder run may read their ledger folder; the extraction run may read their invoice folder; the classifier may read their shared inbox; no run may write anywhere except Arclight’s own draft folder',
        '3 configured runs and 3 register entries, each naming the grantor, the date and the reason, handed back by 17:00 on Wednesday',
        'If a run needs a folder not named in its grant, stop and ask Marta; do not extend access and do not proceed on another run’s grant'],
 cost='1 run able to write into a client’s own system for 9 weeks, 0 recorded grants for 3 '
      'new runs, and a 2-day review in November to work out who had given what to whom.'),

rev_fig=figs.split('CAN AND MAY',
                   'Can / be able to — possible',
                   ['It can read any folder given to it.',
                    'It is able to see the sale list.',
                    'It can write to the ledger.',
                    'It can send 400 letters an hour.'],
                   'May / be allowed to — permitted',
                   ['It may read the ledger folder only.',
                    'It may not open the sale list.',
                    'It may not write to the ledger.',
                    'Only Fatima may release the queue.']),
rev_fig_cap='In February every sentence on the left was true and no sentence on the right existed.',
rev=dict(
 read=[('The principle in this unit is', ['trust your systems', 'the smallest permission that does the job', 'review everything weekly', 'restrict nothing'], 1),
       ('"May not" differs from "cannot" because', ['it is politer', 'it describes prohibition, not impossibility', 'it is stronger', 'it is older'], 1),
       ('Narrow permissions mainly protect against', ['deliberate misuse', 'ordinary accidents', 'clients', 'competitors'], 1),
       ('In the Clinic, the cheapest answer was to', ['narrow all eleven', 'narrow four', 'move the file', 'delay the go-live'], 2)],
 listen_text='Three lines and you have an access rule. List the folders it may read, one by '
             'one, because trust is not a specification. Name two things it may never touch, '
             'because that is imagining accidents and not crimes. And make the grant an '
             'event, with a person, a date and a reason, or nobody will later know '
             'why anything has what it has.',
 listen=[('List the folders it may read, one by ____________.', 'one'),
         ('____________ is not a specification.', 'Trust'),
         ('Name two things it may never ____________.', 'touch'),
         ('Make the grant an ____________.', 'event')],
 speak=['Name a system at your work. Your partner asks what it may not touch.',
        'If you cannot answer in two items, you have found this unit’s point.'],
 write='Write an access rule with a read list, a forbidden list and a named grantor.',
 vocab=[('A record showing who did what and when is an ____________.', 'audit trail'),
        ('A limit built in to stop a predictable mistake is a ____________.', 'guardrail'),
        ('To take back a permission is to ____________ it.', 'revoke'),
        ('A separated space for trying things safely is a ____________.', 'sandbox'),
        ('Keeping two things deliberately apart is ____________.', 'segregation')],
 gram=[('The run ____________ read the ledger folder only.', 'may'),
       ('It ____________ open any folder it is given access to.', 'can'),
       ('Staff are ____________ to view their own client files.', 'allowed'),
       ('It is ____________ to produce four hundred letters an hour.', 'able'),
       ('Nobody ____________ release a queue without signing it.', 'may')]),

found=['List what one process at your work can reach, and what it actually needs.',
       'Write two things it should never touch, by name.',
       'Find one access somebody has that nobody can explain the reason for.',
       'Ask who grants access where you work, and what they write down.'],
end_line='Nothing happened, because Fatima was looking. That is not the same as nothing happening.',
end_next='Next: Step by Step',
)
