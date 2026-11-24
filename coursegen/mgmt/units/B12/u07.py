# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Where Are We',
gram='present perfect and past simple',
ai='the human checkpoint: where a person signs',
strap='CEFR B1 · Grammar: present perfect and past simple · AI: the human checkpoint',
cando=['choose between the present perfect and the past simple when reporting status',
       'say what has been done and what was done at a particular time',
       'place a checkpoint where a person has to sign before work continues',
       'say what a signature is actually confirming, in words',
       'explain why a checkpoint nobody can fail is not a checkpoint'],
hero=('THE QUEUE, HELD, WAITING FOR ONE NAME',
      ['Three hundred and thirty-eight letters, ready.',
       'None of them moves until somebody says so.'],
      [(900, 'teal', 'long'), (1680, 'orange', 'short'), (2420, 'grey', 'long')]),
hero_cap='The checkpoint: the one place in a process where a person is required.',

warm=['When did you last sign something without reading it?',
      'What is the difference between "I have sent it" and "I sent it on Tuesday"?',
      'What would make a check at your work impossible to do carelessly?'],
read=[
 'Every outbound run at Arclight stops before it sends. The letters are prepared, the queue '
 'is held, and nothing leaves until Fatima releases it. This is the checkpoint, and it is '
 'the single most important arrangement in the company.',
 'It is also the arrangement that fails most quietly. For the first three months Fatima '
 'read every letter and the release took about forty minutes. By month five she was '
 'releasing in under a minute, and she could not have told you what she had looked at. '
 'Nothing had gone wrong, which is exactly how it happens.',
 'Thomas asked her one Thursday what she was confirming when she pressed release. She said '
 'that the letters were fine. He asked how she knew. She said she would have noticed if they '
 'were not, which is true of a page of eleven letters and not true of a page of three '
 'hundred and thirty-eight.',
 'What they changed was not the checkpoint but what it asks. Fatima no longer releases '
 'letters; she confirms four specific things. That the export is under two days old. That '
 'the exclusion count matches the ledger. That no account on the excluded list appears in '
 'the queue. That one letter, chosen at random, matches the standard.',
 'Each of those can be got wrong, which is the point. A check that cannot be failed is not '
 'a check, it is a ceremony, and the difference between the two is invisible from outside '
 'until the month something is actually wrong. The release now takes four minutes and '
 'Fatima says it is the first time she has known what she was signing.'],
c_a=[('What happens before any outbound run sends?', 'the queue is held and nothing leaves until Fatima releases it'),
     ('How long did the release take in month five?', 'under a minute'),
     ('What question did Thomas ask?', 'what she was confirming when she pressed release'),
     ('What four things does she confirm now?', 'the export age, the exclusion count, that no excluded account is in the queue, and that one random letter matches the standard'),
     ('What is a check that cannot be failed?', 'a ceremony')],
c_b=[('The checkpoint was removed.', 'F'),
     ('Fatima read every letter in the first three months.', 'T'),
     ('Something had gone wrong by month five.', 'F'),
     ('She now confirms four specific things.', 'T'),
     ('The release now takes forty minutes.', 'F'),
     ('Each of the four confirmations can be got wrong.', 'T')],
c_c=[('Nothing leaves until Fatima ____________ it.', 'releases'),
     ('She could not have told you what she had ____________ at.', 'looked'),
     ('She would have ____________ if they were not.', 'noticed'),
     ('That the export is under two days ____________.', 'old'),
     ('One letter, chosen at ____________.', 'random'),
     ('A check that cannot be failed is a ____________.', 'ceremony')],
c_d=[('The checkpoint failed by becoming ( slower / automatic ).', ['slower', 'automatic'], 1),
     ('The fix was to change', ['who signs', 'what the check asks', 'the timing', 'the software'], 1),
     ('Each of the four confirmations is useful because it', ['is quick', 'can be failed', 'is written down', 'is formal'], 1),
     ('Fatima’s original answer was that she', ['read them all', 'would have noticed', 'checked a sample', 'trusted the system'], 1),
     ('The release now takes', ['under a minute', 'four minutes', 'forty minutes', 'an hour'], 1)],
c_e=('Present perfect or past simple? Put each one in the right column.',
     [('I have released the queue.', 'Present perfect'),
      ('I released it at ten this morning.', 'Past simple'),
      ('She has checked the exclusions.', 'Present perfect'),
      ('She checked them on Tuesday.', 'Past simple'),
      ('We have not sent anything yet.', 'Present perfect'),
      ('We sent them last Friday.', 'Past simple')],
     ['Present perfect', 'Past simple']),

v_fig_title='WHO SIGNS, AND FOR WHAT',
v_fig=[('scale', 'a checkpoint'), ('doc', 'release'), ('people', 'a gatekeeper'),
       ('note', 'countersign'), ('chart', 'status'), ('bulb', 'dual control')],
v_fig_cap='Six words for the place where a process stops and asks a person.',
vocab=[
 ('status', 'where something has got to, at the moment of asking'),
 ('progress', 'movement towards a finished state'),
 ('checkpoint', 'a point where work stops until somebody confirms something'),
 ('countersign', 'to add a second signature confirming the first'),
 ('release', 'to allow held work to continue'),
 ('approve', 'to agree formally that something may proceed'),
 ('endorse', 'to state publicly that you support something'),
 ('verify', 'to establish that something is true by checking it'),
 ('vet', 'to examine something carefully before accepting it'),
 ('gatekeeper', 'the person whose agreement is needed before work passes'),
 ('hold', 'a deliberate pause during which nothing moves'),
 ('dual control', 'an arrangement requiring two people to act together'),
 ('escalation', 'passing a matter to somebody with more authority'),
 ('interim', 'covering the period until the final version arrives'),
 ('outstanding', 'still not done, and still expected'),
 ('complete', 'finished, with nothing remaining'),
 ('partial', 'done in part only'),
 ('to date', 'counted from the beginning up to now'),
 ('cumulative', 'adding up as each new amount is included'),
 ('stage gate', 'a point between stages that work may not pass without approval')],
v_a=[('A point where work stops until somebody confirms something is a ____________.', 'checkpoint'),
     ('An arrangement requiring two people to act together is ____________.', 'dual control'),
     ('To establish that something is true by checking is to ____________ it.', 'verify'),
     ('The person whose agreement is needed is the ____________.', 'gatekeeper'),
     ('Work still not done and still expected is ____________.', 'outstanding'),
     ('A figure counted from the beginning up to now is the total ____________.', 'to date'),
     ('Passing a matter to higher authority is ____________.', 'escalation'),
     ('A version covering the period until the final one is ____________.', 'interim')],
v_b=[('To countersign is to add a second signature', 'confirming the first.'),
     ('To vet something is to examine it carefully', 'before accepting it.'),
     ('A hold is a deliberate pause during which', 'nothing moves.'),
     ('Cumulative means adding up as each', 'new amount is included.'),
     ('A stage gate is a point work may not pass', 'without approval.')],

g_title='Grammar: present perfect and past simple',
g_rule=['Present perfect links the past to now: I have released the queue. It is done.',
        'Past simple places an event at a finished time: I released it at ten.',
        'Use the present perfect for status, and the past simple when the time is named.',
        'Yet, already and still belong with the present perfect; yesterday and last week do not.'],
g_fig=('LOOSE',
       ['It is all done.',
        'The letters went out.',
        'I did the check.',
        'Nothing is outstanding.'],
       'PRECISE',
       ['I have released 338 letters.',
        'They were sent at 10:14 on 14 March.',
        'I have checked all 4 confirmations.',
        '2 exclusions have not been resolved.'],
       'a report with no verifiable content',
       'a status with numbers and times in it'),
g_fig_cap='Status that cannot be checked is not status. It is reassurance.',
g_a=[('I ____________ released the queue. (have)', 'have'),
     ('I ____________ it at ten this morning. (release)', 'released'),
     ('She ____________ checked all four confirmations. (have)', 'has'),
     ('She ____________ them on Tuesday afternoon. (check)', 'checked'),
     ('We ____________ not sent anything yet. (have)', 'have'),
     ('They ____________ out at 10:14 on 14 March. (go)', 'went'),
     ('Two exclusions ____________ not been resolved. (have)', 'have'),
     ('He ____________ the export yesterday. (take)', 'took'),
     ('Nothing ____________ left the building so far. (have)', 'has')],
g_b=[('I ( have released / released ) the queue — it is done.', ['have released', 'released'], 0),
     ('They ____ out at 10:14 on 14 March.', ['have gone', 'went', 'go', 'had gone'], 1),
     ('She ____ all four confirmations.', ['checked already', 'has checked', 'did check', 'was checking'], 1),
     ('We have not sent anything ____.', ['already', 'yesterday', 'yet', 'then'], 2),
     ('He ____ the export yesterday.', ['has taken', 'took', 'takes', 'has took'], 1),
     ('Nothing ____ the building so far.', ['left', 'has left', 'leaves', 'had left'], 1)],

d1=dict(title='What are you confirming?',
        fig=(['You release it in under a minute.', 'Nothing has ever been wrong.'],
             ['What are you confirming?', 'That they are fine. I think.']),
        cap='Thomas and Fatima, on a Thursday.',
        lines=[('Thomas', 'You released three hundred and thirty-eight letters in fifty seconds.'),
               ('Fatima', 'Nothing has gone wrong in five months.'),
               ('Thomas', 'What are you confirming when you press it?'),
               ('Fatima', 'That the letters are fine.'),
               ('Thomas', 'How do you know they are fine?'),
               ('Fatima', 'I would have noticed if they were not.'),
               ('Thomas', 'You would have noticed on a page of eleven. This is three hundred.'),
               ('Fatima', 'That is not a comfortable sentence.'),
               ('Thomas', 'It is not meant to be. What could you actually check in four minutes?'),
               ('Fatima', 'The export date. The exclusion count. Whether any excluded account is in there.'),
               ('Thomas', 'Three things, each of which could be wrong.'),
               ('Fatima', 'Then that is what I should be signing, and not the word fine.')],
        a=[('How long did the release take?', 'fifty seconds, for three hundred and thirty-eight letters'),
           ('What was Fatima confirming?', 'that the letters were fine'),
           ('Why is "I would have noticed" not good enough?', 'because it is true of eleven letters and not of three hundred'),
           ('What three things does she name?', 'the export date, the exclusion count, and whether an excluded account is in the queue'),
           ('What does she conclude?', 'that those are what she should be signing, not the word fine')],
        b=[('Nothing has gone wrong in five ____________.', 'months'),
           ('I would have ____________ if they were not.', 'noticed'),
           ('That is not a comfortable ____________.', 'sentence'),
           ('Each of which could be ____________.', 'wrong')]),
d2=dict(title='A check you cannot fail',
        fig=(['Everybody signs it every time.', 'Has anybody ever not signed?'],
             ['Not once in two years.', 'Then it is not a check.']),
        cap='Marta and Jonas, about a different checkpoint.',
        lines=[('Marta', 'The data-handling checkpoint. How many times has somebody refused to sign?'),
               ('Jonas', 'Not once in two years.'),
               ('Marta', 'Then it is not a check. It is a door that is always open.'),
               ('Jonas', 'Or the work has always been correct.'),
               ('Marta', 'In two years? With eleven staff and four hundred runs?'),
               ('Jonas', 'Unlikely, when you put it like that.'),
               ('Marta', 'What does the signer actually look at?'),
               ('Jonas', 'A summary page. It says what the run covered.'),
               ('Marta', 'Does the summary page have anything on it that could be wrong?'),
               ('Jonas', 'It has what the run reported about itself.'),
               ('Marta', 'So the thing being checked is writing the report that is being checked.'),
               ('Jonas', 'Yes. I do not have a defence for that and I have been signing it myself.')],
        a=[('How often has somebody refused to sign?', 'not once in two years'),
           ('What does Marta conclude from that?', 'that it is not a check but a door that is always open'),
           ('What does the signer look at?', 'a summary page saying what the run covered'),
           ('What is wrong with the summary page?', 'it contains what the run reported about itself'),
           ('How does Jonas respond?', 'he admits he has no defence and has been signing it himself')],
        b=[('It is a ____________ that is always open.', 'door'),
           ('With eleven staff and four hundred ____________?', 'runs'),
           ('It has what the run reported about ____________.', 'itself'),
           ('I do not have a ____________ for that.', 'defence')]),

speak=[('Perfect or simple?',
        ['Student A: report four things about this week, two with a time and two without.',
         'Student B: say which tense each needed and why.',
         'Find one where both tenses would work, and say what changes.']),
       ('Spoken specification: design a checkpoint',
        ['Choose work at your organisation that somebody signs off.',
         'Brief aloud what the signer confirms: three things, each of which could be wrong.',
         'Your partner asks how each one could fail. If one cannot, replace it.']),
       ('Has anybody ever said no?',
        ['In pairs, name three approvals at your workplace.',
         'For each, ask whether anybody has ever refused.',
         'Decide which of the three is a ceremony, and what would make it real.'])],

ext_title='A check that cannot be failed is a ceremony',
ext_fig=figs.datatable('FIVE MONTHS OF RELEASES',
                       ['Month', 'Letters', 'Release time', 'What was confirmed'],
                       [['month 1', '302', '41 min', 'every letter read'],
                        ['month 2', '318', '22 min', 'most letters skimmed'],
                        ['month 3', '330', '8 min', 'a glance at the top'],
                        ['month 5', '338', '50 sec', 'that it looked normal'],
                        ['after the change', '341', '4 min', '4 named facts']]),
ext_fig_cap='The fourth row is where almost every checkpoint ends up if nobody looks at it.',
ext=[
 'A human checkpoint is the main safeguard most small companies have, and it decays in a '
 'predictable way that nobody plans for. It is created carefully, performed thoroughly for '
 'a few weeks, and then gets faster, because nothing ever goes wrong and the person doing '
 'it has eleven other things to do. The decay is not carelessness. It is a reasonable '
 'response to a long run of good outcomes.',
 'The problem is that the checkpoint still exists on paper, and everybody continues to '
 'behave as though it is being performed at the standard of week one. Decisions get made '
 'downstream on the strength of a signature that now means something much weaker than it '
 'did, and nobody has been told, because nobody has noticed.',
 'The fix is not to demand more diligence, which lasts about three weeks. It is to change '
 'what the checkpoint asks. A checkpoint that asks somebody to confirm that the work is '
 'fine will decay, because fine is unbounded and cannot be done quickly. A checkpoint that '
 'asks for four specific facts can be done properly in four minutes and either is done or '
 'is not.',
 'The test of a good checkpoint is whether it can be failed. If nobody has ever refused to '
 'sign, one of two things is true: either the work has been perfect for two years, which is '
 'unlikely in any organisation with people in it, or the check does not examine anything '
 'capable of being wrong. The second is far more common and much harder to see from inside.',
 'There is a related trap worth naming. A checkpoint that examines a summary produced by '
 'the same process it is checking is not examining anything independent. It will report that '
 'the run covered what the run believes it covered, which is true by construction and '
 'useless. Whatever the signer looks at has to come from somewhere other than the thing '
 'being signed off.'],
dp1=('Approval decay',
     'Studies of inspection and approval processes commonly report that time spent per item '
     'falls substantially over the first months of operation, independently of workload.',
     'Source: general quality-assurance and human-factors research, 2026. Rates vary by setting.'),
e_a=[('How does a checkpoint decay?', 'it gets faster over time because nothing goes wrong and the person is busy'),
     ('Why is the decay not carelessness?', 'because it is a reasonable response to a long run of good outcomes'),
     ('Why does demanding more diligence not work?', 'because it lasts about three weeks'),
     ('What is the test of a good checkpoint?', 'whether it can be failed'),
     ('What is the related trap?', 'checking a summary produced by the process being checked, which is true by construction')],
e_b=[('Checkpoint decay is caused mainly by carelessness.', 'F'),
     ('People downstream usually know the signature has weakened.', 'F'),
     ('A checkpoint asking for four specific facts resists decay better.', 'T'),
     ('If nobody has ever refused, the work is probably perfect.', 'F'),
     ('A self-produced summary is independent evidence.', 'F'),
     ('More diligence is the recommended fix.', 'F')],

w_model=(
 'Purpose: make sure that the release of a reminder run confirms something real. Scope: all '
 'outbound runs; internal reports are excluded and need no release. Inputs: the queue, the '
 'ledger export with its date, and the exclusions list. Criteria: the releaser confirms 4 '
 'facts — that the export is under 2 days old, that the exclusion count matches the ledger, '
 'that no excluded account appears in the queue, and that 1 letter chosen at random matches '
 'the standard. Done: 1 release record naming the person, the time and the 4 confirmations. '
 'Fallback: if any of the 4 cannot be confirmed, the queue is not released and Dalia is '
 'told within the hour.'),
w_fig=figs.handover('A CHECKPOINT THAT CAN BE FAILED',
                    ['Build the queue', 'Hold it', 'Present 4 checkable facts'],
                    'Fatima confirms 4 facts in 4 minutes, or does not release',
                    'Each of the four can be wrong. That is the design.'),
w_fig_cap='The fourth box is the checkpoint. The third box is what makes it survive five months.',
w_task='Design a checkpoint for work that leaves your organisation.',
w_steps=['Name the work and the moment it stops.',
         'Write three or four things the signer confirms, each one capable of being wrong.',
         'Say where the evidence for each one comes from, and make sure it is not the work itself.',
         'Put a time on the check: how long it should take when done properly.',
         'Say what happens when one of the confirmations fails.'],
w_bank=['Nothing is … until … confirms …', 'The releaser confirms that …',
        'The evidence for … comes from … , not from …',
        'Properly done, this takes about …', 'If any confirmation fails, …'],
w_check=['Could every confirmation on your list turn out to be wrong?',
         'Does any of them rest on a summary produced by the work itself?',
         'Have you put a realistic time on the check?',
         'Is there an instruction for a failed confirmation, and does it name a person?'],

t_title='The human checkpoint: where a person signs',
t_fig=figs.split('TWO CHECKPOINTS',
                 'Decays — cannot be failed',
                 ['Confirm the letters are fine.',
                  'Check the run completed.',
                  'Make sure nothing looks wrong.',
                  'Sign if you are happy.'],
                 'Survives — can be failed',
                 ['Export under 2 days old?',
                  'Exclusion count matches the ledger?',
                  'Any excluded account in the queue?',
                  'Does 1 random letter match GOOD?']),
t_fig_cap='The right-hand column takes four minutes and produces a real answer four times.',
t_body=[
 'Place the checkpoint where the work becomes irreversible, which is usually immediately '
 'before something leaves the building. Earlier is cheaper and catches less; later is not '
 'possible. Then hold the work rather than merely notifying somebody, because a notification '
 'that work is about to go is not a checkpoint, it is a courtesy.',
 'Write what the signer confirms as a short list of facts rather than as a judgement. Three '
 'or four, each capable of being wrong, each answerable from something other than the work '
 'itself. This is the whole design. A judgement decays towards a glance; a list of four '
 'facts is either done or visibly not done.',
 'Then watch the time it takes, because the time is the symptom. A check that took forty '
 'minutes and now takes fifty seconds has not become efficient. Somebody should ask what '
 'was dropped, and the honest answer is usually everything, slowly, without any single '
 'moment where a decision was made.'],
t_say=[('Hold, do not notify: ', 'Nothing is released until Fatima confirms the four facts.'),
       ('List the facts: ', 'Confirm the export is under two days old, and the counts match.'),
       ('Watch the time: ', 'Properly done this takes four minutes. Fifty seconds is a symptom.')],
t_bound=('A checkpoint confirms the four things it asks about and nothing else. A run can '
         'pass all four confirmations and still be wrong in a way nobody listed, and the '
         'release record will look exactly the same as it does in a month when everything '
         'was right.'),
t_a=[('Nothing is released until Fatima confirms the four ____________.', 'facts'),
     ('Confirm the export is under two days ____________.', 'old'),
     ('Properly done this takes four ____________.', 'minutes'),
     ('Place the checkpoint where the work becomes ____________.', 'irreversible'),
     ('A notification that work is about to go is a ____________.', 'courtesy'),
     ('A judgement decays towards a ____________.', 'glance')],
t_b_rubric='Rewrite each checkpoint question so that it could be failed.',
t_b=[('Confirm the letters are fine.', 'confirm that one letter chosen at random matches the GOOD example'),
     ('Check the run completed.', 'confirm that the sent count equals the queue count, from two different sources'),
     ('Make sure nothing is wrong.', 'confirm that no account on the exclusions list appears in the queue'),
     ('Sign if you are happy.', 'confirm that the export is under two days old, from the file date')],

case=dict(
 title='Decision Clinic · Two signatures, or one better one?',
 brief=[
  'The four-fact release has been running for seven months and has stopped three runs: one '
  'stale export, one count mismatch and one excluded account that had reappeared in the '
  'queue after a client paid and then cancelled the payment.',
  'Marta wants a second signature on any run over two hundred letters. Dual control, she '
  'says, is standard practice for anything irreversible at volume.',
  'Fatima points out that the second signer would be looking at the same four facts, '
  'confirmed by the same evidence, four minutes after she did. Kenji has costed it at about '
  'ninety minutes a month.'],
 exhibit=figs.datatable('SEVEN MONTHS OF RELEASES',
                        ['', 'Runs', 'Stopped', 'Found by'],
                        [['under 200 letters', '41', '1', 'the count check'],
                         ['over 200 letters', '28', '2', 'the export check, the exclusions check'],
                         ['total', '69', '3', '—'],
                         ['errors found later', '—', '2', 'clients'],
                         ['of those 2, covered by the 4 facts', '—', '0', '—']]),
 exhibit_cap='Three stopped by the check. Two found afterwards by clients, neither of them covered by the four facts.',
 exhibit_note='The two client-found errors were a wrong amount on one letter and a letter '
              'in the wrong register. Neither is among the four confirmations.',
 voices=[('Marta Olsen', 'risk and liability',
          'Two signatures on anything over two hundred. If the first signer is wrong, a '
          'second person is the only thing between us and the client.'),
         ('Fatima Zahra', 'client manager',
          'The second signer confirms the same four facts from the same evidence. If I '
          'read the export date wrongly, so will they. That is not dual control, that is '
          'the same check twice.'),
         ('Thomas Reed', 'service delivery',
          'Both of the errors clients found were outside the four facts. We are debating '
          'how many people should check the things that have never been wrong.')],
 steps=[('Find it', 'How many errors were found by the check, and how many by clients?'),
        ('Compare it', 'What does a second signature add, given the same evidence?'),
        ('Infer it', 'Why does Thomas say the debate is about the wrong thing?'),
        ('Weigh it', 'Ninety minutes a month against two errors nobody is checking for.'),
        ('Decide', 'What changes about the release, and what stays?')],
 analysis=[('Find it. How many errors did clients find?', 'two, neither of them covered by the four confirmations'),
           ('Compare it. What would a second signature add?', 'very little, since it confirms the same facts from the same evidence'),
           ('Infer it. What is Thomas’s point?', 'that effort is being added to checks that have been reliable, while the actual failures are unchecked'),
           ('Weigh it. What would ninety minutes a month buy instead?', 'a fifth and sixth confirmation covering amount and register'),
           ('Decide. What would you change?', 'add confirmations for the two failure types clients found, rather than duplicating the existing four')],
 decision='Write the revised release checklist.',
 decision_steps=['Say how many confirmations there are now, and list the new ones.',
                 'Say where the evidence for each new one comes from.',
                 'Say whether a second signature is required, and on what.',
                 'Say when the list will be reviewed, and against what evidence.'],
 bank=['The releaser now confirms … facts.', 'The evidence for … comes from …',
       'A second signature is required only for …', 'This list is reviewed every … , using …',
       'A confirmation is added whenever …'],
 outcome='Two confirmations were added, both drawn from the errors clients had found: that '
         'one letter chosen at random has the amount matching its ledger line, and that its '
         'register matches the GOOD example. The release went from four minutes to about '
         'six. No second signature was introduced. Over the following year the check stopped '
         'five runs, three of them on the two new confirmations, and Marta said that she '
         'had been proposing a general remedy where a specific one existed.',
 outcome_q=[('Why would a second signature have added little?', 'because it would confirm the same four facts from the same evidence'),
            ('What principle did the outcome follow?', 'add checks for the failures you have actually seen, rather than duplicating checks that work')],
 tags=[]),

lab=dict(
 title='Brief Lab · Set up the release step',
 task=['This is the brief that created the release checkpoint in the first place, written '
       'in the week after the near miss in Book 1.',
       'It has a hold, which is more than most companies have, and it has a named person. '
       'What it does not have is any statement of what the person is confirming, which is '
       'why the check took fifty seconds by month five.'],
 draft=['Nothing should go out without somebody checking it first.',
        'Hold the queue and get it looked at.',
        'Fatima can do it, or whoever is around.',
        'Check it over properly before releasing.',
        'If it all looks right, let it go.',
        'Let me know it has been done.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A checkpoint with a hold, a person and nothing that could be failed.',
 asked=['4 named facts, each checkable',
        'One named releaser, not a rota',
        'A record of what was confirmed'],
 back=['A judgement of whether it looked right',
       'Whoever was free that morning',
       'No record beyond "released"'],
 gap='Check it over properly set no list, whoever is around set no owner, and if it all looks '
     'right asked for a feeling that gets faster every month until it takes fifty seconds.',
 back_cap='A real hold, a real person, and nothing being checked by month five.',
 back_note='Nothing went wrong for five months, which is why nobody looked at it. The '
           'checkpoint was still in the written process and had stopped existing in practice.',
 diagnosis=[('[1] "somebody checking it" — which somebody?', 'ambiguous referent'),
            ('[2] "get it looked at" — looked at for what?', 'unscoped set'),
            ('[3] "Fatima, or whoever is around" — who owns it?', 'ambiguous referent'),
            ('[4] "check it over properly" — finished when?', 'undefined done'),
            ('[5] "if it all looks right" — right against what?', 'unscoped set'),
            ('[6] "let me know it has been done" — done meaning what?', 'undefined done')],
 rewrite='Rewrite the brief so that the releaser confirms a short list of facts, each of '
         'which could turn out to be wrong.',
 scaffold=['Why nothing may leave without a person confirming something',
           'Which runs are covered, and which need no release at all',
           'The queue, the export with its date, and the exclusions list',
           'The facts the releaser confirms, and where the evidence for each one comes from',
           'The release record, naming the person, the time and each confirmation',
           'What happens when one of the confirmations cannot be made'],
 bank=['Nothing in … may leave until …', 'This applies to … ; … needs no release.',
       'The releaser confirms that … , that … and that …',
       'The evidence for … comes from … , not from …',
       'Record … , … and …', 'If any confirmation fails, …'],
 check=['Could each confirmation on your list be wrong?',
        'Does any confirmation rest on the work reporting about itself?',
        'Is the releaser one named person rather than whoever is free?',
        'Does the record show what was confirmed, not only that something was?'],
 model=['Make sure that nothing irreversible leaves Arclight without a person confirming something real',
        'All outbound runs; internal reports are excluded and need no release',
        'The held queue, the ledger export with its file date, and the exclusions list',
        'Fatima confirms 4 facts: that the export is under 2 days old, that the exclusion count matches the ledger, that no excluded account appears in the queue, and that 1 letter chosen at random matches the GOOD example; the export date comes from the file, not from the run’s own summary',
        '1 release record naming the person, the time and each of the 4 confirmations, kept for 12 months',
        'If any of the 4 cannot be confirmed, the queue is not released and Dalia is told within the hour'],
 cost='5 months of a checkpoint that existed on paper and not in practice, 1 release taking '
      '50 seconds for 338 irreversible letters, and no way afterwards to say what had been '
      'checked in any of those months.'),

rev_fig=figs.split('PERFECT AND SIMPLE',
                   'Present perfect — status now',
                   ['I have released the queue.',
                    'She has checked all four.',
                    'We have not sent anything yet.',
                    'Two exclusions have not been resolved.'],
                   'Past simple — a named time',
                   ['I released it at 10:14.',
                    'She checked them on Tuesday.',
                    'We sent them last Friday.',
                    'He took the export yesterday.']),
rev_fig_cap='Status takes the perfect. A named time takes the simple.',
rev=dict(
 read=[('A checkpoint decays because', ['people are careless', 'nothing goes wrong and people are busy', 'rules change', 'volume falls'], 1),
       ('The present perfect is used for', ['a named past time', 'status now', 'the future', 'habits'], 1),
       ('A good checkpoint can be', ['done quickly', 'failed', 'delegated', 'skipped'], 1),
       ('In the Clinic, what was added instead of a second signature?', ['more staff', 'two new confirmations', 'a longer hold', 'nothing'], 1)],
 listen_text='Put the checkpoint where the work becomes irreversible, and hold the work '
             'rather than notifying somebody. Then write what the signer confirms as three '
             'or four facts, each of which could be wrong, and each answerable from '
             'something other than the work itself. And watch the time it takes, because a '
             'check that has got faster has usually got emptier.',
 listen=[('Put the checkpoint where the work becomes ____________.', 'irreversible'),
         ('____________ the work rather than notifying somebody.', 'Hold'),
         ('Three or four facts, each of which could be ____________.', 'wrong'),
         ('A check that has got faster has usually got ____________.', 'emptier')],
 speak=['Name an approval at your work. Your partner asks what it confirms and how it could fail.',
        'If there is no answer to the second question, redesign it together.'],
 write='Write a release checklist of four facts, each with its source of evidence.',
 vocab=[('A point where work stops until somebody confirms something is a ____________.', 'checkpoint'),
        ('An arrangement requiring two people to act together is ____________.', 'dual control'),
        ('The person whose agreement is needed is the ____________.', 'gatekeeper'),
        ('Work still not done and still expected is ____________.', 'outstanding'),
        ('To examine something carefully before accepting it is to ____________ it.', 'vet')],
 gram=[('I ____________ released the queue.', 'have'),
       ('They ____________ out at 10:14 on 14 March.', 'went'),
       ('She ____________ checked all four confirmations.', 'has'),
       ('We ____________ not sent anything yet.', 'have'),
       ('He ____________ the export yesterday.', 'took')]),

found=['Find an approval at your work and ask how often it has been refused.',
       'Write down what one signature at your work actually confirms.',
       'Check whether any of those confirmations rests on the work reporting about itself.',
       'Time a check you perform, and compare it with the first time you did it.'],
end_line='Fifty seconds for three hundred and thirty-eight irreversible letters, and nothing had gone wrong yet.',
end_next='Next: What Has Been Happening',
)
