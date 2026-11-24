# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='An Inspection, and What You Show',
gram='an inspection: what you show, what you say, what you do not say',
ai='an inspection answer drafted from the evidence that exists',
strap='CEFR B2 · Grammar: an inspection: what you show, what you say, what you do not say · '
      'AI: an inspection answer drafted from the evidence that exists',
cando=['answer only what the evidence supports',
       'say plainly when a document does not exist',
       'let staff answer for themselves',
       'distinguish a finding you knew about from one that surprises you',
       'write a six-line tasking for an inspection answer'],

hero=('AN INSPECTION FINDS WHAT IS THERE ON A TUESDAY.',
      ['The organisation that improves for three weeks',
       'has told the regulator exactly what it is.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Three weeks of notice, forty-one documents, and one policy that expired in 2023.',

warm=['What was the last inspection where you work, and what did it find?',
      'What changed in the three weeks before it?',
      'Who spoke to the inspectors, and who was kept away?'],

vocab=[
 ('an inspection announced three weeks ahead', 'an inspection that invites preparation'),
 ('an inspection with no notice', 'an inspection that finds the ordinary day'),
 ('a document you can produce in an hour', 'evidence that exists and is findable'),
 ('a document that does not exist', 'a gap to be stated rather than explained'),
 ('a policy ratified and in date', 'a policy you can hand over'),
 ('a policy that expired in 2023', 'a policy whose expiry is itself a finding'),
 ('a practice that is better than the policy', 'the case for rewriting the policy'),
 ('a practice that is worse', 'the finding the inspection will make'),
 ('an answer you can evidence', 'the only kind worth giving'),
 ('an answer you hope is true', 'the answer that produces a second visit'),
 ('a tour of a ward you have prepared', 'a tour that shows preparation, not care'),
 ('a tour of a ward you have not', 'a tour that shows the service'),
 ('a member of staff who tells the truth', 'the organisation’s best witness'),
 ('a manager who talks over them', 'the worst thing in any inspection'),
 ('a question asked of a porter', 'the question that reveals the culture'),
 ('a finding you already knew about', 'a finding with a date in your own records'),
 ('a finding that surprises you', 'a finding about your own blindness'),
 ('an action plan written before the report', 'evidence that you understood the finding'),
 ('a regulator who returns in six months', 'the reason improvement must be real'),
 ('an organisation that improves for an inspection', 'an organisation that has described itself')],

read=[
 'The inspection is announced for the fourteenth, and within a day somebody has '
 'proposed painting a corridor, rewriting two policies and moving the worst of '
 'the storage out of a ward.',
 'The painting is harmless and the policies may be overdue anyway, but the '
 'instinct behind all three is the same, and it is the instinct an inspection '
 'exists to detect.',
 'What you show is what is there. Where a document does not exist, you say that '
 'it does not exist, with the date you last considered writing one, rather than '
 'producing something drafted on the eleventh and presented as practice.',
 'Where practice is better than the policy, say so and show the practice; where '
 'it is worse, say so before the inspector finds it, because a finding you '
 'volunteer is a finding about a hospital that knows itself.',
 'And let staff answer. A manager who completes a porter’s sentence has told the '
 'inspector more about the organisation than any policy in the folder.'],

dp1=('Inspection', 'Regulatory guidance commonly recommends presenting evidence '
     'as it exists, declaring absent documentation, allowing staff to answer '
     'directly, and distinguishing known from unknown findings. Inspection '
     'frameworks and the duty of co-operation are set by the regulator and by '
     'law.',
     'Source: general healthcare regulation guidance, 2025–2026.'),

c_a=[('What is proposed within a day of the announcement?', 'painting a corridor, rewriting two policies and moving storage'),
     ('What is the instinct behind all three?', 'the instinct an inspection exists to detect'),
     ('What do you do where a document does not exist?', 'say so, with the date you last considered writing one'),
     ('What do you do where practice is better than the policy?', 'say so and show the practice'),
     ('What do you do where it is worse?', 'say so before the inspector finds it'),
     ('What does a manager completing a porter’s sentence reveal?', 'more about the organisation than any policy')],

c_b=[('Painting a corridor before an inspection is harmless in itself.', 'T'),
     ('A document drafted on the eleventh may be presented as practice.', 'F'),
     ('An absent document is declared.', 'T'),
     ('Managers should answer for their staff.', 'F'),
     ('A volunteered finding shows self-knowledge.', 'T'),
     ('The regulator may return in six months.', 'T')],

c_c=[('We ____________ show you the audit from March.', 'can'),
     ('That document ____________ not exist.', 'does'),
     ('We last considered writing one ____________ 2023.', 'in'),
     ('Our practice ____________ better than the policy here.', 'is'),
     ('I ____________ rather you heard it from the ward sister.', 'would'),
     ('We ____________ known about this since February.', 'have')],

c_d=[('Show ( what is there / what you can improve in three weeks ).', ['what is there', 'what you can improve in three weeks'], 0),
     ('Declare ( an absent document / only what is asked ).',
      ['an absent document', 'only what is asked'], 0),
     ('Volunteer ( a finding you know about / nothing unprompted ).',
      ['a finding you know about', 'nothing unprompted'], 0),
     ('Let ( staff answer / managers summarise ).',
      ['staff answer', 'managers summarise'], 0),
     ('Write the action plan ( when the finding is clear / after the report ).',
      ['when the finding is clear', 'after the report'], 0)],

c_e=('Evidence that exists, an absent document, a known finding or a thing you '
     'must not do? Decide what each is.',
     [('the March audit, in the folder', 'evidence that exists'),
      ('no record of ventilation checks since 2023', 'an absent document'),
      ('we have known about the storage since February', 'a known finding'),
      ('drafting a policy on the eleventh and dating it March', 'a thing you must not do'),
      ('the escalation area has been open since September', 'a known finding'),
      ('answering for a porter who was asked directly', 'a thing you must not do')],
     ['evidence that exists', 'an absent document', 'a known finding',
      'a thing you must not do']),

v_fig_title='SIX WORDS OF AN INSPECTION',
v_fig=[('doc', 'a document you can produce in an hour'), ('key', 'a document that does not exist'),
       ('people', 'a member of staff who tells the truth'),
       ('scale', 'a practice that is worse'),
       ('clock', 'a regulator who returns in six months'),
       ('note', 'a finding you already knew about')],
v_fig_cap='Six words for forty-one documents and one Tuesday.',

v_a=[('An inspection that finds the ordinary day is an inspection with no ____________.', 'notice'),
     ('A gap to be stated rather than explained is a document that does not ____________.', 'exist'),
     ('A policy whose expiry is itself a finding is a policy that ____________ in 2023.', 'expired'),
     ('The answer that produces a second visit is an answer you ____________ is true.', 'hope'),
     ('A tour that shows preparation, not care, is a tour of a ward you have ____________.', 'prepared'),
     ('The worst thing in any inspection is a manager who talks ____________ them.', 'over'),
     ('A finding about your own blindness is a finding that ____________ you.', 'surprises'),
     ('An organisation that has described itself is an organisation that ____________ for an inspection.', 'improves')],

v_b=[('A practice that is better than the policy is the case', 'for rewriting the policy.'),
     ('A question asked of a porter is the question', 'that reveals the culture.'),
     ('A finding you already knew about is a finding', 'with a date in your own records.'),
     ('An action plan written before the report is evidence', 'that you understood the finding.'),
     ('A policy ratified and in date is a policy', 'you can hand over.')],

g_title='Grammar: an inspection: what you show, what you say, what you do not say',
g_rule=['Offer evidence with we can show you and name the document and its date: '
        'we can show you the ventilation audit of the fourth of March.',
        'Declare an absence plainly, in the present simple: that document does not '
        'exist. Then give the history: we last considered writing one in 2023 and '
        'did not.',
        'Volunteer a known finding before it is found, using we have known: we have '
        'known since February that the storage on ward six is unacceptable, and '
        'here is what we have done and not done.',
        'Hand a question to the person it was asked of: I would rather you heard '
        'that from the ward sister. Never answer for somebody who has been asked '
        'directly.'],
g_fig=('LOOSE',
       ['We have a comprehensive suite of policies in this area.',
        'That documentation should be available somewhere.',
        'Practice on the ward is generally very good indeed.',
        'What my colleague means is that we do it slightly differently.'],
       'PRECISE',
       ['We can show you the ventilation audit of the fourth of March and the two that preceded it.',
        'That document does not exist; we last considered writing one in 2023.',
        'We have known since February that the storage on ward six is unacceptable, and we have not solved it.',
        'I would rather you heard that from the ward sister, who does it every day.'],
       'four sentences that will be tested and fail',
       'four sentences that are already true'),
g_fig_cap='We can show you. It does not exist. We have known since. I would rather you heard.',

g_a=[('We ____________ show you the audit of the fourth of March.', 'can'),
     ('And the two that ____________ it.', 'preceded'),
     ('That document ____________ not exist.', 'does'),
     ('We last ____________ writing one in 2023.', 'considered'),
     ('We ____________ known since February.', 'have'),
     ('And we ____________ not solved it.', 'have'),
     ('I ____________ rather you heard that from the ward sister.', 'would'),
     ('Who does it ____________ day.', 'every'),
     ('The regulator ____________ in six months.', 'returns')],

g_b=[('( we have a comprehensive suite of policies / we can show you the audit of the fourth of March ) — the evidence.', ['we have a comprehensive suite of policies', 'we can show you the audit of the fourth of March'], 1),
     ('( that document does not exist / it should be available somewhere ) — the absence.',
      ['that document does not exist', 'it should be available somewhere'], 0),
     ('( we have known since February and have not solved it / practice is generally very good ) — the known finding.',
      ['we have known since February and have not solved it', 'practice is generally very good'], 0),
     ('( I would rather you heard that from the ward sister / what my colleague means is ) — the handover.',
      ['I would rather you heard that from the ward sister', 'what my colleague means is'], 0),
     ('( our practice here is better than our policy / our policy is under review ) — the honest mismatch.',
      ['our practice here is better than our policy', 'our policy is under review'], 0),
     ('( the action plan was written in February / an action plan will follow the report ) — the plan.',
      ['the action plan was written in February', 'an action plan will follow the report'], 0)],

d1=dict(
 title='What is there on a Tuesday',
 fig=(['Three weeks’ notice.', 'Four proposals.'],
      ['One policy expired.', 'One finding volunteered.']),
 cap='Siobhán Carrick and Amara Nwosu, operations manager, after the announcement.',
 lines=[('Amara', 'Three weeks. I have a list: paint the east corridor, rewrite the ventilation policy, move the storage off ward six, and brief the staff.'),
        ('Siobhán', 'Paint the corridor if it needs painting. What is the ventilation policy?'),
        ('Amara', 'It expired in 2023 and nobody has ratified a new one.'),
        ('Siobhán', 'Then it expired in 2023 and we say so. A policy dated the eleventh of this month is worse than no policy at all.'),
        ('Amara', 'It will be a finding.'),
        ('Siobhán', 'It is already a finding. The only question is whether we tell them or they tell us.'),
        ('Amara', 'And the storage on ward six?'),
        ('Siobhán', 'Has been unacceptable since February, and we have a record of saying so twice. Show them the record and the reason it is still there.'),
        ('Amara', 'That is a very exposed position.'),
        ('Siobhán', 'It is the position we are actually in. What I will not have is a ward tidied for a Tuesday and untidied by Thursday.'),
        ('Amara', 'And briefing the staff?'),
        ('Siobhán', 'Tell them what an inspection is, tell them to answer honestly, and tell them nobody will be asked afterwards what they said.')],
 a=[('What is on Amara’s list?', 'painting a corridor, rewriting a policy, moving storage and briefing staff'),
    ('When did the ventilation policy expire?', 'in 2023'),
    ('Why not write a new one now?', 'because a policy dated the eleventh is worse than none'),
    ('How long has the storage been unacceptable?', 'since February, with a record of saying so twice'),
    ('What are staff told?', 'what an inspection is, to answer honestly, and that nobody will be asked what they said')],
 b=[('It ____________ in 2023.', 'expired'),
    ('Whether we ____________ them or they tell us.', 'tell'),
    ('Show them the ____________.', 'record'),
    ('Nobody will be asked afterwards what they ____________.', 'said')]),

d2=dict(
 title='The manager who answered for the porter',
 fig=(['Porter asked.', 'Manager answered.'],
      ['One finding.', 'About the culture.']),
 cap='Siobhán Carrick and Dr Leila Rahman, medical director, after the visit.',
 lines=[('Leila', 'The report has a paragraph about a manager answering a question put to a porter.'),
        ('Siobhán', 'I watched it happen. The porter was two words into a correct answer.'),
        ('Leila', 'He says he was helping, because the porter looked nervous.'),
        ('Siobhán', 'The porter looked nervous because a stranger with a clipboard asked him a question, which is normal.'),
        ('Leila', 'The intervention lasted about four seconds.'),
        ('Siobhán', 'And produced a finding about whether staff feel able to speak. Four seconds was enough, because it was evidence rather than an opinion.'),
        ('Leila', 'He is a good manager who did one clumsy thing.'),
        ('Siobhán', 'He is, and that is what makes it worth saying to him properly rather than letting him read it in a report.'),
        ('Leila', 'Some people will say the inspectors were looking for something.'),
        ('Siobhán', 'They were looking at what happened in front of them. We do that too, and we call it observation.'),
        ('Leila', 'What do we do before the next one?'),
        ('Siobhán', 'Tell every manager one sentence: if somebody else is asked, you say nothing at all, even when they are wrong.')],
 unresolved=True,
 a=[('What does the report contain?', 'a paragraph about a manager answering for a porter'),
    ('How long did the intervention last?', 'about four seconds'),
    ('What finding did it produce?', 'one about whether staff feel able to speak'),
    ('Why does it count as evidence?', 'because it was observed rather than opined'),
    ('What is the one sentence for managers?', 'if somebody else is asked, say nothing at all')],
 b=[('The porter was two words ____________ a correct answer.', 'into'),
    ('Four seconds was ____________.', 'enough'),
    ('Worth saying to him ____________.', 'properly'),
    ('You say nothing at ____________.', 'all')]),

speak=[('We can show you',
        ['Your partner asks for six documents.',
         'Say which exist, with dates, and which do not.',
         'Three each, then swap.']),
       ('Volunteer it',
        ['Your partner names six problems you already know about.',
         'Volunteer each with the date you first knew.',
         'Three each, then swap.']),
       ('Say nothing',
        ['Your partner plays an inspector questioning a colleague.',
         'Practise saying nothing, including when they are wrong.',
         'Three each, then swap.'])],

ext_title='An inspection answer drafted from the evidence that exists',
ext_fig=figs.datatable('WHAT THE ANSWER CARRIES',
                       ['Line', 'Content'],
                       [['what exists', 'documents with dates'],
                        ['what does not', 'absences, stated plainly'],
                        ['the mismatch', 'where practice differs from policy'],
                        ['known findings', 'with the date first known'],
                        ['who answers', 'the person who does the work'],
                        ['the plan', 'what is already being done']]),
ext_fig_cap='Six lines of evidence, and the second one is the one organisations invent.',
ext=[
 'An inspection answer drafted from the evidence that exists keeps an '
 'organisation from describing a version of itself that will not survive a '
 'Tuesday.',
 'Give it the questions or the framework, the documents that exist with their '
 'dates and ratification status, the known problems with the date each was first '
 'recorded, and the practice as it is actually carried out.',
 'Ask it to mark every absent document as absent rather than drafting a '
 'substitute, and to give the history of the absence where there is one.',
 'Ask it to identify every place where practice and policy differ, in both '
 'directions, since practice better than policy is a finding about the policy.',
 'Ask for known problems to be volunteered with the date first known and what has '
 'been done since, because a problem you raise yourself is evidence of a '
 'functioning organisation.',
 'What it cannot do is stop a manager from answering for a porter. Four seconds '
 'of that will tell an inspector more than forty-one documents, and the only '
 'remedy is a conversation beforehand.'],

dp2=('Inspection findings', 'Regulatory literature commonly reports that '
     'organisations volunteering known problems are assessed more favourably on '
     'governance than those where the same problems are discovered, and that '
     'observed interactions carry substantial evidential weight.',
     'Source: general healthcare regulation literature, 2025–2026.'),

e_a=[('What does the answer prevent?', 'describing a version of the organisation that will not survive a Tuesday'),
     ('What four things are given to it?', 'the framework, the documents with dates, the known problems with dates, and the actual practice'),
     ('What happens to an absent document?', 'it is marked absent, with the history of the absence'),
     ('Why identify mismatches in both directions?', 'because practice better than policy is a finding about the policy'),
     ('Why volunteer known problems?', 'because it is evidence of a functioning organisation')],
e_b=[('Absent documents are declared rather than drafted.', 'T'),
     ('Mismatches are identified in both directions.', 'T'),
     ('It stops a manager answering for a porter.', 'F'),
     ('Known problems carry the date first known.', 'T'),
     ('Volunteered problems are assessed more favourably.', 'T'),
     ('Observed interactions carry little weight.', 'F')],

w_model='Purpose: so that what we show a regulator is what is there on an '
       'ordinary Tuesday. Scope: operational evidence and documentation for this '
       'site; clinical evidence is presented by the clinical directors, and no '
       'document is created after the announcement and presented as pre-existing. '
       'Inputs: the inspection framework or questions, every relevant document '
       'with its date and ratification status, the problems we already know about '
       'with the date each was first recorded, the practice as carried out, and '
       'the rota for the inspection days. Criteria: every document offered with '
       'its date; every absence declared with its history; every mismatch between '
       'practice and policy stated in both directions; every known problem '
       'volunteered with the date first known and what has been done; and the '
       'person who does the work answering questions about it. Done: a single '
       'evidence pack given to the inspection team on arrival and to the staff who '
       'may be asked about it. Fallback: where a manager is tempted to answer for '
       'somebody else, the rule is absolute silence, including where the colleague '
       'is wrong, and any correction is given to the inspector afterwards in '
       'writing.',
w_fig=figs.spec_card('SIX LINES FOR AN INSPECTION ANSWER',
                     [('Purpose', 'what is there on an ordinary Tuesday'),
                      ('Scope', 'operational evidence; nothing created after the notice'),
                      ('Inputs', 'framework, documents, known problems, real practice'),
                      ('Criteria', 'dates, declared absences, mismatches, volunteering'),
                      ('Done', 'one pack, to the team and to the staff'),
                      ('Fallback', 'never answer for a colleague; correct in writing after')]),
w_fig_cap='Six lines, and the sixth one costs four seconds and buys a paragraph.',
w_task='Write a six-line tasking for an inspection answer.',
w_steps=['Line 1: say what the regulator must see.',
         'Line 2: say which evidence is yours, and what may never be created.',
         'Line 3: say what you are giving it.',
         'Line 4: say what every answer must carry.',
         'Line 5: say what is produced and who else gets it.',
         'Line 6: say what a manager does when a colleague is asked.'],
w_bank=['Purpose: so that what we show a regulator is what is there on an ordinary Tuesday',
        'Scope: operational evidence and documentation for this site; clinical evidence is presented by the clinical directors and no document is created after the announcement and presented as pre-existing',
        'Inputs: the inspection framework or questions, every relevant document with its date and ratification status, the problems we already know about with the date each was first recorded, the practice as carried out, and the rota for the inspection days',
        'Criteria: every document offered with its date; every absence declared with its history; every mismatch between practice and policy stated in both directions; every known problem volunteered with its date and what has been done; the person who does the work answering about it',
        'Done: a single evidence pack given to the inspection team on arrival and to the staff who may be asked about it',
        'Fallback: where a manager is tempted to answer for somebody else, the rule is absolute silence, and any correction is given to the inspector afterwards in writing'],
w_check=['Is every document dated?',
         'Is every absence declared?',
         'Are known problems volunteered with dates?',
         'Does the person who does the work answer?'],

t_title='An inspection answer drafted from the evidence that exists',
t_fig=figs.split('FORTY-ONE DOCUMENTS AND ONE TUESDAY',
                 'It can assemble',
                 ['documents with dates',
                  'declared absences',
                  'practice and policy mismatches',
                  'known problems with their dates'],
                 'It must not supply',
                 ['a document created this week',
                  'a clinical answer',
                  'silence from a manager',
                  'the culture on the ward']),
t_fig_cap='It assembles the evidence. Four seconds of silence is a decision.',
t_body=[
 'Give it the framework, every document with its date, the known problems with '
 'their dates and the practice as carried out.',
 'An inspection answer drafted from the evidence that exists declares every '
 'absence rather than filling it.',
 'Then ask for every mismatch between practice and policy, in both directions.'],
t_say=[('We can show you: ', 'The audit of the fourth of March.'),
       ('That does not exist: ', 'We last considered it in 2023.'),
       ('We have known since: ', 'February, and have not solved it.')],
t_bound='It cannot stop a manager answering for a porter, and four seconds of '
        'that outweighs forty-one documents.',
t_a=[('Give it the inspection ____________.', 'framework'),
     ('And every document with its ____________.', 'date'),
     ('And the known problems with their ____________.', 'dates'),
     ('Declare every ____________.', 'absence'),
     ('And every ____________ between practice and policy.', 'mismatch'),
     ('In both ____________.', 'directions')],
t_b_rubric='Say what the inspection work should do with each item.',
t_b=[('“we have a comprehensive suite of policies”', 'name each document with its date'),
     ('a policy that expired in 2023', 'declare it expired rather than redrafting it'),
     ('storage unacceptable since February', 'volunteer it with the date first known'),
     ('a porter asked a direct question', 'leave the answer to the porter')],

case=dict(
 title='The Decision Room · The three weeks before the fourteenth',
 brief=[
  'A hospital prepared for announced inspections with a programme of works, '
  'policy drafting and ward preparation in the preceding three weeks.',
  'Over five years, four announced inspections were preceded by a mean of 23 '
  'policies ratified in the final fortnight and 9 areas decluttered. Reports in '
  'all four cases included findings on governance that referred to documentation '
  'created shortly before the visit. An unannounced inspection in the fifth year '
  'produced 11 findings, 7 of which the organisation’s own records showed it had '
  'known about for more than six months.',
  'The practice was changed: nothing is created after an announcement, known '
  'problems are volunteered with their dates, and no area is prepared beyond '
  'ordinary standards. The next report recorded no governance finding on '
  'documentation and noted the organisation’s self-awareness.'],
 exhibit=figs.datatable('FIVE YEARS OF INSPECTIONS',
                        ['Item', 'Before / After'],
                        [['policies ratified in the final fortnight', '23 / 2'],
                         ['areas prepared beyond normal standards', '9 / 0'],
                         ['findings on documentation timing', '4 of 4 visits / 0'],
                         ['known problems volunteered', '0 / 7'],
                         ['findings the organisation already knew of', '7 of 11 / 7 of 9'],
                         ['governance rating', 'requires improvement / good']]),
 exhibit_cap='The same hospital, shown as it is, rated better for saying so.',
 exhibit_note='Seven of eleven findings in the unannounced inspection were already '
              'in the hospital’s own records. The inspection did not discover '
              'them; it discovered that nobody had acted.',
 voices=[('A directorate manager', 'about preparation',
          'Not preparing for an inspection is not integrity, it is negligence towards your own staff.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Twenty-three policies ratified in a fortnight is a finding in itself, and it was one in all four reports.'),
         ('An inspector', 'quoted in a report',
          'The service was able to identify its own shortcomings and the dates on which it had identified them.')],
 steps=[('Find it', 'How many policies were ratified in the final fortnight?'),
        ('Compare it', 'Preparation against findings on documentation.'),
        ('Infer it', 'Why did preparation produce findings?'),
        ('Weigh it', 'The appearance of order against a governance rating.'),
        ('Decide', 'What is shown to a regulator?')],
 analysis=[('Find it. How many?', 'a mean of 23'),
           ('Compare it. What was found?', 'a documentation finding in all four visits'),
           ('Infer it. Why?', 'because dates are visible and tell their own story'),
           ('Weigh it. What was traded?', 'tidiness for a governance rating'),
           ('Decide. What is shown?', 'what exists, with absences declared and problems volunteered')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what may be created after an announcement.',
                 'Say what is done about absent documents.',
                 'Say what is volunteered.',
                 'Say who answers a question.'],
 bank=['No document is created after an inspection is announced and presented as evidence of established practice.',
       'Where a required document does not exist, its absence is stated together with the date on which its creation was last considered.',
       'Every problem already known to the organisation is volunteered to the inspection team with the date it was first recorded and an account of what has been done since.',
       'A question put to a member of staff is answered by that member of staff, and any correction is provided to the inspection team afterwards in writing.'],
 outcome='The hospital adopts the four lines. Policies ratified in the final '
         'fortnight fall from twenty-three to two, areas prepared beyond ordinary '
         'standards from nine to none, findings on documentation timing from every '
         'visit to none, volunteered problems rise from none to seven, and the '
         'governance rating rises from requires improvement to good.',
 outcome_q=[('What happened to last-minute policy ratification?', 'it fell from twenty-three to two'),
            ('What happened to findings about documentation timing?', 'there were none'),
            ('What happened to volunteered problems?', 'they rose from none to seven'),
            ('What happened to the governance rating?', 'it rose to good'),
            ('How many findings had the hospital already known of?', 'seven of eleven')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · A comprehensive suite of policies',
 task=['This was the briefing note prepared for managers before an inspection.',
       'This is what it said.'],
 draft=['We have a comprehensive suite of policies covering this area.',
        'Any documentation requested should be available somewhere.',
        'Practice on the wards is generally very good indeed.',
        'Please ensure your areas are presented to the usual high standard.',
        'If a colleague is unsure, do feel free to help them out.',
        'Any issues will of course be addressed in due course.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of inspection briefing, and five of them will produce findings.',
 asked=['available somewhere', 'the usual high standard',
        'help them out'],
 back=['23 policies ratified in the final fortnight',
       'documentation findings in 4 of 4 visits', '7 of 11 findings already known'],
 gap='Nobody could tell which documents exist, which do not, what we already know, or who answers a question.',
 back_cap='Six lines that invite preparation, invention and interruption.',
 back_note='“Do feel free to help them out” is the sentence that produced a '
           'paragraph about whether staff feel able to speak.',
 diagnosis=[('“a comprehensive suite”', 'unbounded quantity'),
            ('“generally very good”', 'unbounded quantity'),
            ('“available somewhere”', 'ambiguous referent'),
            ('“the usual high standard”', 'ambiguous referent'),
            ('“help them out”', 'unstated exception'),
            ('“in due course”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that the inspection sees the hospital.',
 scaffold=['what the regulator must see',
           'which evidence is yours, and what may never be created',
           'what you are giving it',
           'what every answer must carry',
           'what is produced and who else gets it',
           'what a manager does when a colleague is asked'],
 bank=['Purpose: so that what we show a regulator is what is there on an ordinary Tuesday',
       'Scope: operational evidence and documentation for this site; clinical evidence is presented by the clinical directors, and no document is created after the announcement and presented as pre-existing',
       'Inputs: the inspection framework or questions, every relevant document with its date and ratification status, the problems we already know about with the date each was first recorded, the practice as carried out, and the rota for the inspection days',
       'Criteria: every document offered with its date; every absence declared with its history; every mismatch between practice and policy stated in both directions; every known problem volunteered with the date first known and what has been done; and the person who does the work answering questions about it',
       'Done: a single evidence pack given to the inspection team on arrival and to the staff who may be asked about it',
       'Fallback: where a manager is tempted to answer for somebody else, the rule is absolute silence, including where the colleague is wrong, and any correction is given to the inspector afterwards in writing'],
 check=['Are documents named with dates?',
        'Are absences declared?',
        'Are known problems volunteered?',
        'Is the silence rule stated?'],
 model=['so that what we show a regulator is what is there on an ordinary Tuesday',
        'operational evidence and documentation for this site; clinical evidence is presented by the clinical directors, and no document is created after the announcement and presented as pre-existing',
        'the inspection framework or questions, every relevant document with its date and ratification status, the problems we already know about with the date each was first recorded, the practice as carried out, and the rota for the inspection days',
        'every document offered with its date; every absence declared with its history; every mismatch between practice and policy stated in both directions; every known problem volunteered with the date first known and what has been done; and the person who does the work answering questions about it',
        'a single evidence pack given to the inspection team on arrival and to the staff who may be asked about it',
        'where a manager is tempted to answer for somebody else, the rule is absolute silence, including where the colleague is wrong, and any correction is given to the inspector afterwards in writing'],
 cost='23 policies ratified in a fortnight, documentation findings in every visit, and 7 of 11 findings already known.'),

lang=dict(
 title='The Unwelcome Number · Refusing to ratify twenty-three policies in a fortnight',
 setting=[
  'A directorate manager has prepared twenty-three policies for ratification '
  'before an announced inspection. Siobhán intends to ratify two and declare the '
  'rest as expired.',
  'She has to stop the programme without implying that wanting good documentation '
  'was wrong.'],
 ladder=[('A manager doing what he was taught', 'and dates an inspector can read'),
         ('Twenty-three policies', 'in fourteen days'),
         ('Either ratify them all', 'or declare the gaps and take the finding')],
 cap='Twenty-three policies, fourteen days, four reports that noticed.',
 turns=[('Turn 1 · Siobhán', 'We shall ratify the two that were already drafted in September and declare the other twenty-one as expired.'),
        ('Turn 2 · Manager', 'Twenty-one expired policies in an inspection is a governance finding on its own.'),
        ('Turn 3 · Siobhán', 'So is twenty-three ratified in a fortnight, and that finding appeared in all four of our last reports.')],
 holds=['An inspector reads ratification dates before reading policies.',
        'Declaring a gap with its history shows an organisation that knows itself.',
        'Your instinct to fix the documentation is right; the timing is what makes it evidence.',
        'I shall put the twenty-one into a programme with dates and show them that programme.',
        'The finding will say that our policy framework is out of date, which is true.',
        'And if the report criticises the declaration rather than the gap, I shall say in the board meeting that the decision was mine.'],
 redline='Never create or ratify a document after an announcement in order to '
         'present it as established practice.',
 score=['Stated the decision in the first sentence.',
        'Answered the governance point with the history.',
        'Credited the manager’s instinct.',
        'Offered a dated programme instead.',
        'Took the consequence publicly.'],
 a=[('How many policies will be ratified?', 'two, drafted in September'),
    ('What happens to the other twenty-one?', 'they are declared expired'),
    ('What appeared in all four previous reports?', 'a finding about documentation ratified shortly before the visit'),
    ('What does an inspector read first?', 'ratification dates'),
    ('What is offered instead?', 'a dated programme for the twenty-one'),
    ('What is the redline?', 'never create a document after an announcement to present it as practice')]),

rev_fig=figs.split('AN INSPECTION ANSWER',
                   'Say',
                   ['we can show you the audit of the fourth of March',
                    'that document does not exist; we last considered it in 2023',
                    'we have known since February and have not solved it',
                    'I would rather you heard that from the ward sister'],
                   'Never say',
                   ['we have a comprehensive suite of policies',
                    'it should be available somewhere',
                    'practice is generally very good',
                    'what my colleague means is']),
rev_fig_cap='Four sentences already true, and four that will be tested and fail.',
rev=dict(
 read=[('What does an inspection find?',
        ['what is there on a Tuesday', 'what the policies describe',
         'what was prepared', 'what the managers say'], 0),
       ('What is done with an absent document?',
        ['its absence is declared with its history', 'a substitute is drafted',
         'it is omitted from the pack', 'it is described as under review'], 0),
       ('When is a known problem volunteered?',
        ['before the inspector finds it', 'only if asked',
         'in the action plan afterwards', 'never'], 0),
       ('What does a manager do when a colleague is asked?',
        ['says nothing at all', 'clarifies briefly',
         'answers if the colleague is wrong', 'summarises afterwards'], 0)],
 listen_text='Give it the framework, every document with its date, the known '
             'problems with their dates and the practice as carried out. Declare '
             'every absence.',
 listen=[('Give it the inspection ____________.', 'framework'),
         ('And every document with its ____________.', 'date'),
         ('And the known problems with their ____________.', 'dates'),
         ('Declare every ____________.', 'absence')],
 speak=['Say which of six documents exist, with dates, and which do not.',
        'Then volunteer six known problems with the dates first known.'],
 write='Write a six-line tasking for an inspection answer.',
 vocab=[('An inspection that invites preparation is an inspection announced three weeks ____________.', 'ahead'),
        ('The organisation’s best witness is a member of staff who tells the ____________.', 'truth'),
        ('The finding the inspection will make is a practice that is ____________.', 'worse'),
        ('The reason improvement must be real is a regulator who ____________ in six months.', 'returns')],
 gram=[('The regulator ____________ in six months.', 'returns'),
       ('Who does it ____________ day.', 'every'),
       ('And we ____________ not solved it.', 'have'),
       ('And the two that ____________ it.', 'preceded')]),

found=['Show what exists, with its date.',
       'Declare what does not exist, with the history of the absence.',
       'Volunteer what you already know, with the date you knew it.',
       'Let the person who does the work answer, and say nothing.'],
end_line='Seven of eleven findings were already in the hospital’s own records; the inspection discovered not the problems but the fact that nobody had acted.',
end_next='Next: An Apology From an Organisation')
