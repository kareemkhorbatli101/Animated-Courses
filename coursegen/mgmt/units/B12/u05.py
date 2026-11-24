# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Passing On What We Were Told',
gram='reported statements',
ai='working from your own documents',
strap='CEFR B1 · Grammar: reported statements · AI: working from your own documents',
cando=['report what somebody said without changing what they committed to',
       'shift tenses correctly when reporting a statement',
       'point a question at my own documents rather than at general knowledge',
       'name which version of a document is the one to work from',
       'explain why a document store needs an owner and a date'],
hero=('SEVEN VERSIONS OF THE SAME POLICY',
      ['Four of them are in the shared folder.',
       'Nobody can say which one is current.'],
      [(840, 'grey', 'long'), (1580, 'blue', 'short'), (2320, 'orange', 'long')]),
hero_cap='The archive problem, which is nearly always a problem about dates and owners.',

warm=['How do you know which version of a document at work is the current one?',
      'What happens to "I will look into it" when you report it a week later?',
      'When did you last give somebody an answer from a document that was out of date?'],
read=[
 'Arclight answers about sixty client questions a week that have answers somewhere in its '
 'own documents. What is the notice period, what did we agree about weekend cover, who signs '
 'off a credit note over five hundred euros. The answers exist. Finding them used to take '
 'between two minutes and forty.',
 'Pointing the work at Arclight’s own folder changed the two-minutes-to-forty into about '
 'twenty seconds, and introduced a problem nobody had anticipated. The folder contained '
 'seven versions of the service policy, four of them in the main directory with names like '
 'policy_v3_final and policy_v3_final_revised.',
 'For eleven days, answers came back correctly quoted from documents that had been replaced. '
 'They were accurate in the only sense that matters to a quotation: the words really were in '
 'the file. They were wrong in the sense that matters to a client, because the file had '
 'stopped being the policy in February.',
 'The fix was not technical. Dalia created one folder called Current, with exactly one '
 'version of each document in it, each with a date and a named owner. Everything else moved '
 'to Archive, and the rule is that questions are answered from Current only. Archive is for '
 'establishing what used to be true, which is a different question.',
 'Marta pointed out the second half of the same problem, which is about people rather than '
 'files. When Fatima tells a client what a document says, she is reporting a statement, and '
 'reported statements drift. He said he would look into it becomes he promised to sort it '
 'out, in two steps, across about a week, and nobody is lying at any point.'],
c_a=[('How many client questions a week have answers in the documents?', 'about sixty'),
     ('How long did finding an answer used to take?', 'between two minutes and forty'),
     ('What problem appeared after pointing the work at the folder?', 'seven versions of the service policy, with no way to tell which was current'),
     ('In what sense were the answers accurate?', 'the words really were in the file that was quoted'),
     ('What is the rule now?', 'questions are answered from the Current folder only')],
c_b=[('Finding answers became faster.', 'T'),
     ('The quoted words were not actually in the files.', 'F'),
     ('The policy had stopped being current in February.', 'T'),
     ('The fix required new technology.', 'F'),
     ('Archive is used for answering client questions.', 'F'),
     ('Reported statements can drift without anybody lying.', 'T')],
c_c=[('Finding them used to take between two minutes and ____________.', 'forty'),
     ('Four of them were in the main ____________.', 'directory'),
     ('For eleven ____________, answers came back correctly quoted.', 'days'),
     ('Dalia created one folder called ____________.', 'Current'),
     ('Archive is for establishing what ____________ to be true.', 'used'),
     ('Reported statements ____________.', 'drift')],
c_d=[('The answers were ( current / accurate ).', ['current', 'accurate'], 1),
     ('The real problem was', ['the speed of search', 'which version was authoritative', 'the wording of questions', 'client expectations'], 1),
     ('The Current folder contains', ['everything', 'one version of each document', 'nothing', 'only policies'], 1),
     ('Archive exists to answer', ['client questions', 'what used to be true', 'nothing', 'legal questions'], 1),
     ('Marta’s second point was about', ['files', 'people reporting statements', 'clients', 'dates'], 1)],
c_e=('Direct or reported? Put each one in the right column.',
     [('"I will look into it."', 'Direct'),
      ('He said he would look into it.', 'Reported'),
      ('"The notice period is sixty days."', 'Direct'),
      ('She said the notice period was sixty days.', 'Reported'),
      ('"We have replaced that policy."', 'Direct'),
      ('They said they had replaced that policy.', 'Reported')],
     ['Direct', 'Reported']),

v_fig_title='WHERE THE ANSWER CAME FROM',
v_fig=[('doc', 'provenance'), ('bank', 'a repository'), ('note', 'a citation'),
       ('scale', 'authoritative'), ('chart', 'a version'), ('bulb', 'hearsay')],
v_fig_cap='Six words for the difference between an answer and a sourced answer.',
vocab=[
 ('provenance', 'the record of where something came from and how it got here'),
 ('attribution', 'naming the person or document a statement came from'),
 ('hearsay', 'something known only because somebody else said it'),
 ('second-hand', 'received from somebody else rather than directly'),
 ('relay', 'to pass a message on from one party to another'),
 ('cite', 'to name a source in support of a statement'),
 ('quote', 'to repeat somebody’s exact words'),
 ('excerpt', 'a short part taken from a longer document'),
 ('corpus', 'the whole body of documents being worked from'),
 ('repository', 'the place where documents are kept and found'),
 ('archive', 'a store of material kept for reference but no longer in use'),
 ('retrieve', 'to find and bring back something stored'),
 ('cross-reference', 'to check one document against another'),
 ('version', 'one particular issue of a document among several'),
 ('superseded', 'replaced by something later and no longer in force'),
 ('authoritative', 'accepted as the version that settles the question'),
 ('primary source', 'the original document itself, not an account of it'),
 ('passage', 'a short continuous section of a text'),
 ('distort', 'to change the shape of something so it misrepresents the original'),
 ('circulate', 'to pass something round among a group of people')],
v_a=[('A document replaced by a later one is ____________.', 'superseded'),
     ('The record of where something came from is its ____________.', 'provenance'),
     ('The whole body of documents being worked from is the ____________.', 'corpus'),
     ('A store of material kept for reference but not in use is an ____________.', 'archive'),
     ('The version accepted as settling the question is the ____________ one.', 'authoritative'),
     ('To check one document against another is to ____________.', 'cross-reference'),
     ('Something known only because somebody said it is ____________.', 'hearsay'),
     ('The original document itself is the ____________.', 'primary source')],
v_b=[('To cite something is to name a source', 'in support of a statement.'),
     ('An excerpt is a short part taken', 'from a longer document.'),
     ('To relay a message is to pass it on', 'from one party to another.'),
     ('To distort something is to change its shape', 'so that it misrepresents the original.'),
     ('Attribution is naming the person or document', 'a statement came from.')],

g_title='Grammar: reported statements',
g_rule=['Tenses usually shift back: "it is sixty days" becomes she said it was sixty days.',
        'Will becomes would, can becomes could, must stays or becomes had to.',
        'Keep the words that carry a commitment exactly as they were said.',
        'If the fact is still true, the present tense may stay: she said the policy is current.'],
g_fig=('LOOSE',
       ['He promised to sort it out.',
        'They agreed to the new terms.',
        'She confirmed the figure.',
        'He accepted the delay.'],
       'PRECISE',
       ['He said he would look into it.',
        'They said they would consider the terms.',
        'She said the figure looked right to her.',
        'He said that was fine, and left it with us.'],
       'a summary that has gained a commitment',
       'what was actually said, reported'),
g_fig_cap='Four pairs. In each one, the left-hand version is what gets repeated in a meeting.',
g_a=[('He said the notice period ____________ sixty days. (be)', 'was'),
     ('She said she ____________ look into it. (will)', 'would'),
     ('They said they ____________ replaced the policy. (have)', 'had'),
     ('He said he ____________ not sign it until Friday. (can)', 'could'),
     ('She told me the folder ____________ out of date. (be)', 'was'),
     ('They said the index ____________ updated on Mondays. (be)', 'is'),
     ('He said that he ____________ already sent it. (have)', 'had'),
     ('She said the client ____________ ring back. (will)', 'would'),
     ('They said they ____________ to check with Marta. (have)', 'had')],
g_b=[('He said the notice period ( was / is ) sixty days.', ['was', 'is'], 0),
     ('She said she ____ look into it.', ['will', 'would', 'shall', 'is going'], 1),
     ('They said they ____ replaced the policy.', ['have', 'has', 'had', 'having'], 2),
     ('He said he ____ not sign it until Friday.', ['can', 'could', 'cannot', 'will'], 1),
     ('She said the policy ____ still current, and it is.', ['was', 'were', 'is', 'had been'], 2),
     ('They said they ____ to check with Marta.', ['have', 'has', 'had', 'having'], 2)],

d1=dict(title='Which version is the policy?',
        fig=(['It quoted clause four correctly.', 'From which file?'],
             ['policy_v3_final.', 'That stopped being the policy in February.']),
        cap='Fatima and Jonas, eleven days in.',
        lines=[('Fatima', 'The answer quotes clause four exactly. I checked the file myself.'),
               ('Jonas', 'Which file?'),
               ('Fatima', 'policy_v3_final. It is in the main folder.'),
               ('Jonas', 'So is policy_v3_final_revised, and that one is dated February.'),
               ('Fatima', 'Then the quotation is right and the answer is wrong.'),
               ('Jonas', 'Correct. Those two things are entirely compatible.'),
               ('Fatima', 'How many questions have we answered from that file?'),
               ('Jonas', 'Eleven days of them. I would guess about ninety.'),
               ('Fatima', 'And every one of them was properly sourced.'),
               ('Jonas', 'Beautifully sourced. To a document that was replaced three months ago.'),
               ('Fatima', 'So the source rule from Book One does not help here.'),
               ('Jonas', 'It helps. It just does not do this job as well as it does its own.')],
        a=[('What did Fatima check?', 'that the answer quoted clause four exactly'),
           ('What is wrong with the file?', 'it was replaced by a revised version in February'),
           ('How many questions may have been answered from it?', 'about ninety, over eleven days'),
           ('What two things are compatible?', 'the quotation being right and the answer being wrong'),
           ('What does Jonas say about the source rule?', 'that it helps, but does not solve this problem')],
        b=[('I checked the ____________ myself.', 'file'),
           ('That one is dated ____________.', 'February'),
           ('Eleven days of them. About ____________.', 'ninety'),
           ('Beautifully ____________.', 'sourced')]),
d2=dict(title='He said he would look into it',
        fig=(['You told me he promised.', 'He said he would look into it.'],
             ['That is not what I passed on.', 'No. It is what he said.']),
        cap='Marta and Fatima, three steps down a chain.',
        lines=[('Marta', 'The note says the supplier promised to resolve it by Friday.'),
               ('Fatima', 'He said he would look into it. That is what he actually said.'),
               ('Marta', 'Those are two different sentences with two different consequences.'),
               ('Fatima', 'I did not write the note. Thomas wrote it from what I told him.'),
               ('Marta', 'And what did you tell him?'),
               ('Fatima', 'That the supplier was going to sort it out. Which is what I understood.'),
               ('Marta', 'So in two steps, look into became sort out became promised.'),
               ('Fatima', 'Nobody lied at any point in that chain.'),
               ('Marta', 'Nobody ever does. That is what makes it worth a rule.'),
               ('Fatima', 'A rule saying what?'),
               ('Marta', 'Anything that could be a commitment gets passed on in the original words.'),
               ('Fatima', 'Then the notes get longer and nobody will read them.')],
        a=[('What does the note say?', 'that the supplier promised to resolve it by Friday'),
           ('What did the supplier actually say?', 'that he would look into it'),
           ('How many steps did the chain have?', 'two'),
           ('What does Marta say about lying?', 'that nobody ever does, which is what makes it worth a rule'),
           ('What rule does she propose?', 'anything that could be a commitment is passed on in the original words')],
        b=[('The supplier ____________ to resolve it by Friday.', 'promised'),
           ('That is what I ____________.', 'understood'),
           ('Nobody ____________ at any point in that chain.', 'lied'),
           ('Passed on in the ____________ words.', 'original')]),

speak=[('Report it back',
        ['Student A: say three sentences about your work, including one promise.',
         'Student B: report them to a third person, or back to A, starting "You said...".',
         'Check the promise. Did it get stronger or weaker?']),
       ('Spoken specification: point at the document',
        ['Choose a question somebody might ask about your organisation.',
         'Brief your partner aloud: name the document, its version and where it lives.',
         'They ask one question. If it is "which version?", you left that out.']),
       ('Current or archive?',
        ['In pairs, list four documents you rely on at work.',
         'For each, say who owns it and how you know it is current.',
         'Name the one where neither of you could answer, and say what you would do.'])],

ext_title='Pointing the question at your own documents',
ext_fig=figs.datatable('WHAT HAPPENED IN ELEVEN DAYS',
                       ['', 'Before', 'After pointing at the folder', 'After Current/Archive'],
                       [['time to answer', '2–40 min', '20 sec', '20 sec'],
                        ['answers quoted', 'rarely', 'always', 'always'],
                        ['answers from live docs', 'usually', 'not always', 'always'],
                        ['versions in main folder', '7', '7', '1'],
                        ['owner named', 'no', 'no', 'yes']]),
ext_fig_cap='The second column fixed speed. The third column was still wrong. The fourth fixed it.',
ext=[
 'A great deal of what a company needs to know is already written down somewhere inside it, '
 'and the difficulty has never been that the knowledge does not exist. The difficulty is '
 'that it is distributed across folders, attachments and old messages in a way that makes '
 'finding it cost more than the answer is worth, so people guess instead, or ask somebody '
 'who guesses.',
 'Pointing a question at your own documents rather than at general knowledge changes this '
 'completely, and it is probably the single most useful thing a small company can do in '
 'the first month. The answers become specific to you, they can be quoted, and the quotation '
 'can be checked against the file by anybody with thirty seconds.',
 'What it exposes, immediately and uncomfortably, is the state of the documents themselves. '
 'A person searching a folder applies judgement without noticing: they see policy_v3_final '
 'and policy_v3_final_revised, register that one of them has a later date, and open that '
 'one. Nothing in the retrieval of a document does that for you unless somebody has made '
 'the folder say which is which.',
 'So the preparation is unglamorous and it is the whole job. One place for current '
 'documents. One version of each. A date and a named owner on every one. Everything '
 'superseded moved somewhere else and labelled as superseded. This takes an afternoon for a '
 'small company and it is the afternoon that decides whether the rest works.',
 'The same discipline has a human half, which is older and harder. When somebody reports '
 'what a document or a person said, the report drifts towards the stronger reading: looked '
 'into becomes dealt with, considering becomes agreeing, may becomes will. Nobody lies. '
 'Each step is a small reasonable compression, and after three steps the sentence commits '
 'somebody to something they never said.'],
dp1=('Time spent finding information',
     'Workplace studies repeatedly find that knowledge workers spend a substantial share of '
     'the week locating information that already exists within their organisation.',
     'Source: general knowledge-work research, 2026. Estimates vary widely by method.'),
e_a=[('What is the real difficulty with internal knowledge?', 'not that it does not exist, but that finding it costs more than the answer is worth'),
     ('What changes when questions are pointed at your own documents?', 'answers become specific, quotable and checkable against the file'),
     ('What judgement does a person apply without noticing?', 'choosing the file with the later date when two look similar'),
     ('What does the preparation consist of?', 'one place for current documents, one version of each, a date and an owner'),
     ('How do reported statements drift?', 'towards the stronger reading, in small reasonable steps')],
e_b=[('The knowledge usually does not exist.', 'F'),
     ('Quoted answers can be checked against the file.', 'T'),
     ('Retrieval chooses the later version automatically.', 'F'),
     ('The preparation takes about an afternoon for a small company.', 'T'),
     ('Drift in reported statements requires somebody to lie.', 'F'),
     ('Superseded documents should be labelled as superseded.', 'T')],

w_model=(
 'Purpose: answer client questions from what Arclight has actually agreed, not from what '
 'anybody remembers. Scope: questions about service terms; questions about price are '
 'excluded and go to Kenji. Inputs: the Current folder only, which holds 1 version of each '
 'document, each dated and owned. Criteria: every answer quotes the passage it rests on and '
 'names the document, its version and its date; the Archive folder may not be used to '
 'answer a question about what is true now. Done: 1 answer, 1 quotation, 1 document '
 'reference. Fallback: if 2 documents in Current disagree, answer "unresolved", quote both '
 'and tell the owner named on each.'),
w_fig=figs.spec_card('WHAT A DOCUMENT NEEDS BEFORE IT CAN BE USED',
                     [('One place', 'Current holds exactly 1 version of each document'),
                      ('One version', 'Everything else moves to Archive, labelled superseded'),
                      ('A date', 'On the face of the document, not only in the file name'),
                      ('An owner', 'A named person, not a team'),
                      ('A rule', 'Questions about now are answered from Current only'),
                      ('A conflict rule', 'Two Current documents disagree: answer unresolved')]),
w_fig_cap='Six lines of housekeeping. The afternoon that decides whether anything else works.',
w_task='Write a brief for answering questions from your own documents.',
w_steps=['Name the folder or store, and say what is in it and what is not.',
         'Say which kinds of question are in scope and which go elsewhere.',
         'Require the document name, version and date in every answer.',
         'Forbid using superseded material to answer a question about the present.',
         'Say what happens when two current documents disagree.'],
w_bank=['Answer from … only.', 'Every answer must name … , … and …',
        '… may not be used to answer a question about …',
        'If two documents disagree, …', 'Questions about … go to … instead.'],
w_check=['Does your store hold exactly one version of each document?',
         'Does every document carry a date and a named owner?',
         'Does the brief forbid answering from the archive?',
         'Is there a rule for two current documents that contradict each other?'],

t_title='Working from your own documents',
t_fig=figs.split('TWO KINDS OF ANSWER',
                 'From general knowledge',
                 ['A notice period is usually 30 or 90 days.',
                  'Most firms allow weekend cover.',
                  'Credit notes are normally signed by a manager.',
                  'Policies are typically reviewed annually.'],
                 'From your own documents',
                 ['Clause 7 says 60 days, policy v4, 2 Feb.',
                  'The cover annex says Saturdays only.',
                  'Over 500 euros: Marta signs, section 3.',
                  'This policy was last changed on 2 February.']),
t_fig_cap='The left column is true in general and useless in particular.',
t_body=[
 'Say where to look, and mean exactly one place. Answer from the Current folder is a '
 'specification; answer from our documents is not, because our documents includes eleven '
 'years of attachments and four versions of everything. The whole value of pointing a '
 'question at your own material depends on the material being a defined set.',
 'Then require the reference, not just the quotation. A passage plus a document name, a '
 'version and a date can be checked in thirty seconds and can also be shown to be stale, '
 'which a bare quotation cannot. This is the difference between the eleven days at Arclight '
 'and what came afterwards, and the only thing that changed was three extra words in the '
 'answer.',
 'And write the conflict rule, because in any real company two current documents will '
 'eventually disagree. The honest answer in that case is that it is unresolved, with both '
 'passages quoted and both owners told. Anything else forces a choice between two '
 'authoritative texts, which is a decision a person should be making.'],
t_say=[('Define the set: ', 'Answer from the Current folder only, not from Archive.'),
       ('Require the reference: ', 'Name the document, its version and its date with every answer.'),
       ('Handle the conflict: ', 'If two current documents disagree, answer unresolved and quote both.')],
t_bound=('Working from your own documents cannot tell you that a document is wrong. A policy '
         'that was badly drafted in February will be quoted faithfully, with its version and '
         'its date, for as long as it sits in the Current folder, and the care taken over '
         'the reference will make the error look more solid rather than less.'),
t_a=[('Answer from the ____________ folder only.', 'Current'),
     ('Name the document, its version and its ____________.', 'date'),
     ('If two current documents disagree, answer ____________.', 'unresolved'),
     ('Our documents includes eleven years of ____________.', 'attachments'),
     ('A bare quotation cannot be shown to be ____________.', 'stale'),
     ('That is a decision a ____________ should be making.', 'person')],
t_b_rubric='Say what each instruction has to add before it can be followed.',
t_b=[('Answer from our documents.', 'name the one folder, and say that Archive is excluded'),
     ('Quote the relevant clause.', 'add the document name, its version and its date'),
     ('Use the service policy.', 'say which version, since four are in the folder'),
     ('Check what we agreed.', 'name the document and say what happens if two of them disagree')],

case=dict(
 title='Decision Clinic · Who owns the Current folder?',
 brief=[
  'The Current folder has been running for five months and the eleven-day problem has not '
  'recurred. Every document in it has a date and a named owner, and answers quote all three.',
  'In October, Thomas noticed that four of the nineteen documents in Current had not been '
  'touched for over a year, including the weekend cover annex, which describes an '
  'arrangement Arclight stopped offering in March.',
  'The owner of that annex is Dalia. She has not looked at it since she wrote it. Nobody '
  'has told her to, and nothing in the arrangement says when an owner should review '
  'anything.'],
 exhibit=figs.datatable('NINETEEN DOCUMENTS IN CURRENT',
                        ['Age since last change', 'Documents', 'Still accurate?', 'Owner reviewed?'],
                        [['under 3 months', '9', 'yes', 'yes'],
                         ['3 to 12 months', '6', 'yes', 'informally'],
                         ['over 12 months', '4', '3 of 4', 'no'],
                         ['the cover annex', '19 months', 'no', 'no'],
                         ['answers quoting it', '7 this year', '—', '—']]),
 exhibit_cap='Seven clients were told about an arrangement that ended in March.',
 exhibit_note='All seven answers were correctly sourced, correctly versioned and correctly '
              'dated. The date shown was nineteen months old and nobody reading it noticed.',
 voices=[('Thomas Reed', 'service delivery',
          'Put a review date on every document and chase it. If nobody owns the chasing, '
          'ownership is just a name in a corner of a page.'),
         ('Dalia Rahman', 'co-founder',
          'I own four documents and I have never been asked about any of them. I would '
          'rather have a calendar entry than another rule nobody enforces.'),
         ('Marta Olsen', 'risk and liability',
          'The answers carried a nineteen-month-old date and seven people read them without '
          'blinking. I am less worried about the review than about the fact that the date '
          'was there and nobody used it.')],
 steps=[('Find it', 'How many documents are over a year old, and how many answers quoted one?'),
        ('Compare it', 'What does a review date give, and what does showing the date give?'),
        ('Infer it', 'Why did nobody notice a nineteen-month-old date?'),
        ('Weigh it', 'A recurring review against a check at the point of answering.'),
        ('Decide', 'What changes, and who does it?')],
 analysis=[('Find it. How many answers quoted the stale annex?', 'seven this year'),
           ('Compare it. What does Marta say the shown date failed to do?', 'it was present and nobody acted on it'),
           ('Infer it. Why might an old date be ignored?', 'because it appears on every answer, so it stops being information'),
           ('Weigh it. What does a review date cost?', 'somebody has to chase it, or it becomes another unenforced rule'),
           ('Decide. What would make an old date impossible to ignore?', 'flagging any answer that rests on a document older than a stated age')],
 decision='Write the change to how answers are produced.',
 decision_steps=['Say what happens to a document that passes its review date.',
                 'Say what happens to an answer that quotes an old document.',
                 'Name who is told, and when.',
                 'Say what age counts as old, with a number.'],
 bank=['Every document in Current carries a review date of …',
       'An answer resting on a document older than … is …',
       '… is told when …', 'If the owner does not review by … , then …',
       'The threshold is … months, chosen because …'],
 outcome='Arclight did both, but the one that worked was the second. Any answer resting on a '
         'document more than nine months old is flagged before it goes out, which produced '
         'eleven flags in the first fortnight and found two more stale documents. The '
         'twelve-month review calendar produced one review in three months and then stopped, '
         'exactly as Dalia had predicted of a rule with no chaser.',
 outcome_q=[('Why did the flag work better than the review calendar?', 'because it fires at the moment the stale document is actually being used, and needs nobody to remember'),
            ('What did Dalia predict correctly?', 'that a review rule with nobody chasing it would quietly stop happening')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Answer from what we have agreed',
 task=['This is the brief Dalia wrote on the day the folder work started, before anybody had '
       'thought about versions. It is the brief that produced eleven days of correctly '
       'quoted, out-of-date answers.',
       'She knows there are old versions in the folder. She has known for a year. It does '
       'not occur to her to mention it, because she has always simply opened the right one.'],
 draft=['From now on, answer client questions from our own documents.',
        'Use whatever is in the shared folder.',
        'Quote the relevant bit so people can check it.',
        'If there is more than one, use the sensible one.',
        'Make sure the answers are accurate.',
        'Flag it to me if you are not sure.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that asks for sourcing and never asks which source.',
 asked=['One named folder, one version each',
        'Document, version and date with every answer',
        'A rule for two documents that disagree'],
 back=['7 versions, any of them quotable',
       'Passages quoted with no version or date',
       'Conflicts resolved silently by picking one'],
 gap='Our own documents named no folder, whatever is in the shared folder named no version, '
     'and the sensible one handed the choice between four policies to whoever was answering.',
 back_cap='Ninety answers in eleven days, every one of them properly quoted.',
 back_note='Not one of the ninety answers was wrong about what the quoted document said. '
           'About thirty of them were wrong about what Arclight currently does.',
 diagnosis=[('[1] "our own documents" — which store, exactly?', 'unscoped set'),
            ('[2] "whatever is in the shared folder" — including superseded versions?', 'unscoped set'),
            ('[3] "quote the relevant bit" — relevant by what test?', 'unstated criterion'),
            ('[4] "if there is more than one, use the sensible one" — which one?', 'ambiguous referent'),
            ('[5] "make sure the answers are accurate" — accurate to the file, or to now?', 'ambiguous referent'),
            ('[6] "if you are not sure" — sure about what?', 'unstated criterion')],
 rewrite='Rewrite the brief so that there is one named store, one version of each document, '
         'and a written rule for the case where two of them disagree.',
 scaffold=['Why answers should come from documents rather than from memory',
           'Which questions are in scope, and which go to somebody else',
           'The one folder that may be used, and the one that may not',
           'What every answer must name beside the quotation',
           'What an answer consists of, and what comes back with it',
           'What to do when two current documents contradict each other'],
 bank=['Answer … questions from … so that …',
       'Cover questions about … ; questions about … go to …',
       'Use the … folder only; the … folder may not be used for …',
       'Every answer must quote … and name … , … and …',
       'Return … for each question.', 'If two documents disagree, …'],
 check=['Does the brief name exactly one store to answer from?',
        'Must every answer carry a version and a date?',
        'Is the archive explicitly excluded for questions about the present?',
        'Is there a rule for two current documents that conflict?'],
 model=['Answer client questions from what Arclight has actually agreed, rather than from what anybody remembers',
        'Questions about service terms; questions about price go to Kenji and are out of scope',
        'The Current folder only, which holds 1 version of each document, each carrying a date and a named owner; the Archive folder may not be used',
        'Every answer must quote the passage it rests on and name the document, its version and its date; an answer may not rest on a superseded document',
        '1 answer, 1 quotation and 1 full document reference for each question, returned the same day',
        'If 2 documents in Current disagree, answer "unresolved", quote both passages and tell the owner named on each'],
 cost='About 90 answers over 11 days quoting a policy replaced in February, roughly 30 of '
      'them wrong about current practice, 2 client corrections and 1 renegotiated term that '
      'cost 1,100 euros to honour.'),

rev_fig=figs.split('DIRECT AND REPORTED',
                   'What was said',
                   ['"I will look into it."',
                    '"The notice period is 60 days."',
                    '"We may be able to help."',
                    '"That is fine, leave it with me."'],
                   'What it becomes',
                   ['He said he would look into it.',
                    'She said it was 60 days.',
                    'They said they might be able to help.',
                    'He said that was fine.']),
rev_fig_cap='Report the words. The summary that replaces them always gains a commitment.',
rev=dict(
 read=[('The eleven-day problem was caused by', ['wrong quotations', 'superseded documents', 'slow searching', 'client error'], 1),
       ('In reported speech, "will" usually becomes', ['was', 'would', 'had', 'did'], 1),
       ('The Archive folder exists to answer', ['questions about now', 'questions about what used to be true', 'price questions', 'nothing'], 1),
       ('In the Clinic, what worked better than a review calendar?', ['more owners', 'flagging answers from old documents', 'deleting files', 'monthly meetings'], 1)],
 listen_text='Three lines. Name one folder and say the archive is excluded, because our '
             'documents is not a set. Require the document name, the version and the date '
             'with every quotation, because a bare quotation cannot be shown to be stale. '
             'And write the conflict rule, because two current documents will disagree '
             'eventually and that decision belongs to a person.',
 listen=[('Name one ____________ and say the archive is excluded.', 'folder'),
         ('Require the document name, the version and the ____________.', 'date'),
         ('A bare quotation cannot be shown to be ____________.', 'stale'),
         ('That decision belongs to a ____________.', 'person')],
 speak=['Tell your partner a document you rely on. They ask which version and who owns it.',
        'If you cannot answer both, you have found this unit’s afternoon of work.'],
 write='Write the rule for which documents may be used to answer a question about now.',
 vocab=[('A document replaced by a later one is ____________.', 'superseded'),
        ('The record of where something came from is its ____________.', 'provenance'),
        ('The version accepted as settling the question is the ____________ one.', 'authoritative'),
        ('To check one document against another is to ____________.', 'cross-reference'),
        ('Something known only because somebody said it is ____________.', 'hearsay')],
 gram=[('He said the notice period ____________ sixty days.', 'was'),
       ('She said she ____________ look into it.', 'would'),
       ('They said they ____________ replaced the policy.', 'had'),
       ('He said he ____________ not sign it until Friday.', 'could'),
       ('They said they ____________ to check with Marta.', 'had')]),

found=['Find out how many versions of one important document exist where you work.',
       'Put a date and an owner on one document you rely on.',
       'Report something somebody told you this week, in their words, and compare.',
       'Ask what your organisation does when two current documents disagree.'],
end_line='Ninety answers, every one correctly quoted, about thirty of them no longer true.',
end_next='Next: One Shape Every Time',
)
