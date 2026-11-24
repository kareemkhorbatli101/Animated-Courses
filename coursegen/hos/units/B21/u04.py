# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Serious Incident in the First Twenty-Four Hours',
gram='the first day of an incident: facts, actions, what is not yet known',
ai='a first-day incident account sorted into facts, actions and unknowns',
strap='CEFR B2 · Grammar: the first day of an incident: facts, actions, what is not yet known · '
      'AI: a first-day incident account sorted into facts, actions and unknowns',
cando=['separate what is known from what is assumed on day one',
       'record actions taken with their times',
       'say plainly what is not yet known',
       'support staff involved without prejudging anything',
       'write a six-line tasking for a first-day account'],

hero=('ON DAY ONE YOU HAVE FACTS, ACTIONS AND UNKNOWNS.',
      ['Everything else is a theory,',
       'and a theory written on day one survives for years.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Twenty-four hours, three lists, and one sentence nobody should write.',

warm=['Who writes the first account of a serious incident where you work?',
      'What is in it that cannot be known yet?',
      'What happens to the staff involved that day?'],

vocab=[
 ('a fact established within an hour', 'something recorded and verifiable'),
 ('a fact that will take six weeks', 'something an investigation must establish'),
 ('an action taken immediately', 'what was done, with the time it was done'),
 ('an action that cannot be taken yet', 'what waits for a finding'),
 ('a thing that is not yet known', 'the honest third list'),
 ('a thing that will never be known', 'the limit of any investigation'),
 ('a sequence of events with times', 'the chronology as recorded'),
 ('a sequence somebody reconstructed from memory', 'a chronology to be treated with care'),
 ('a device that must be kept', 'equipment preserved for examination'),
 ('a record that must be secured', 'notes and data protected from change'),
 ('a member of staff who must be supported', 'a colleague in the worst week of their career'),
 ('a member of staff who must be stood down', 'a decision taken on risk, not on blame'),
 ('a duty of candour conversation', 'the statutory conversation with the patient or family'),
 ('a family who must be told today', 'the obligation that does not wait for findings'),
 ('a family who asks what happened', 'people entitled to what is known'),
 ('an answer you can give on day one', 'the facts and the actions'),
 ('an answer you cannot', 'the cause and the blame'),
 ('a statement to staff on the first day', 'what the department is told, and when'),
 ('a speculation nobody should voice', 'the sentence that reappears in evidence'),
 ('a decision to commission an investigation', 'the formal step with a named lead')],

read=[
 'At twenty past four a patient came to serious harm, and by six o’clock you are '
 'being asked what happened, by the family, by the department and by the '
 'executive on call.',
 'What you have on day one is three lists. The facts that are established and '
 'recorded; the actions that have been taken, each with the time it was taken; '
 'and the things that are not yet known.',
 'The third list is the one that takes courage, because every instinct is to '
 'offer a provisional explanation, and a provisional explanation written at six '
 'o’clock on the first evening will be quoted in two years.',
 'Day one also has obligations that do not wait for findings: the family must be '
 'told what is known today, the equipment must be preserved, the records must be '
 'secured, and the staff involved must be supported rather than interviewed.',
 'Standing somebody down is a decision about risk and must be said to be one, '
 'because a colleague who is sent home on the first evening and told nothing will '
 'reasonably conclude that they have been blamed.'],

dp1=('First-day handling', 'Patient safety guidance commonly recommends recording '
     'established facts separately from matters requiring investigation, '
     'preserving equipment and records, discharging duty of candour obligations '
     'promptly, supporting staff involved, and commissioning investigation under a '
     'named lead. Statutory duties are set by law and by the organisation’s own '
     'policy.',
     'Source: general patient safety guidance, 2025–2026.'),

c_a=[('What three lists do you have on day one?', 'established facts, actions with times, and what is not yet known'),
     ('Which list takes courage?', 'the third'),
     ('What happens to a provisional explanation?', 'it is quoted in two years'),
     ('What four obligations do not wait?', 'telling the family, preserving equipment, securing records and supporting staff'),
     ('What kind of decision is standing somebody down?', 'a decision about risk'),
     ('What will a colleague sent home and told nothing conclude?', 'that they have been blamed')],

c_b=[('Day one produces three lists.', 'T'),
     ('A provisional explanation is helpful on day one.', 'F'),
     ('The family must be told what is known today.', 'T'),
     ('Staff involved should be interviewed on day one.', 'F'),
     ('Equipment is preserved.', 'T'),
     ('Standing somebody down is about risk.', 'T')],

c_c=[('What ____________ established is recorded in the first list.', 'is'),
     ('The actions taken, each ____________ its time.', 'with'),
     ('What is not ____________ known goes in the third.', 'yet'),
     ('The family ____________ be told today.', 'must'),
     ('The equipment ____________ been preserved.', 'has'),
     ('She ____________ stood down on risk, not on blame.', 'was')],

c_d=[('Separate facts from ( assumptions / opinions of the family ).', ['assumptions', 'opinions of the family'], 0),
     ('Record actions ( with their times / in summary ).',
      ['with their times', 'in summary'], 0),
     ('Write the unknowns ( plainly / as provisional findings ).',
      ['plainly', 'as provisional findings'], 0),
     ('Treat staff involved as ( people to support / witnesses to interview ).',
      ['people to support', 'witnesses to interview'], 0),
     ('Say that standing down is ( about risk / not a judgement, without explaining ).',
      ['about risk', 'not a judgement, without explaining'], 0)],

c_e=('A day-one fact, a day-one action, an unknown or something nobody should '
     'write? Decide what each is.',
     [('the infusion was running at the recorded rate at four o’clock', 'a day-one fact'),
      ('the pump has been removed and sealed', 'a day-one action'),
      ('whether the rate was set correctly at handover', 'an unknown'),
      ('the night nurse was probably distracted', 'something nobody should write'),
      ('the family were told at six and will be updated on Friday', 'a day-one action'),
      ('why the alarm did not sound', 'an unknown')],
     ['a day-one fact', 'a day-one action', 'an unknown',
      'something nobody should write']),

v_fig_title='SIX WORDS OF A FIRST DAY',
v_fig=[('doc', 'a sequence of events with times'), ('key', 'a device that must be kept'),
       ('people', 'a member of staff who must be supported'),
       ('clock', 'a family who must be told today'),
       ('scale', 'a thing that is not yet known'),
       ('note', 'a speculation nobody should voice')],
v_fig_cap='Six words for twenty-four hours and three lists.',

v_a=[('Something an investigation must establish is a fact that will take six ____________.', 'weeks'),
     ('What waits for a finding is an action that cannot be taken ____________.', 'yet'),
     ('The limit of any investigation is a thing that will never be ____________.', 'known'),
     ('A chronology to be treated with care is a sequence somebody reconstructed from ____________.', 'memory'),
     ('Notes and data protected from change is a ____________ that must be secured.', 'record'),
     ('A decision taken on risk, not on blame, is a member of staff who must be stood ____________.', 'down'),
     ('The sentence that reappears in evidence is a ____________ nobody should voice.', 'speculation'),
     ('The formal step with a named lead is a decision to ____________ an investigation.', 'commission')],

v_b=[('An answer you can give on day one is the facts', 'and the actions.'),
     ('An answer you cannot is the cause', 'and the blame.'),
     ('A duty of candour conversation is the statutory', 'conversation with the patient or family.'),
     ('A member of staff who must be supported is a colleague', 'in the worst week of their career.'),
     ('A statement to staff on the first day is what the', 'department is told, and when.')],

g_title='Grammar: the first day of an incident: facts, actions, what is not yet known',
g_rule=['Write facts in the past simple with times and sources: at sixteen twenty '
        'the infusion pump was recorded as running at the prescribed rate.',
        'Write actions in the present perfect passive with times: the pump has '
        'been removed and sealed; the records have been secured as at eighteen '
        'hundred.',
        'Write unknowns as a plain list introduced by we do not yet know: we do '
        'not yet know whether the rate was altered at handover, or why the alarm '
        'did not sound.',
        'Never write probably, presumably or it seems likely in a first-day '
        'account. Those three words are how a theory becomes a finding without '
        'anybody deciding that it should.'],
g_fig=('LOOSE',
       ['It appears that the infusion may have been running too fast.',
        'The nurse concerned was presumably very busy at the time.',
        'The matter is being looked into as a matter of urgency.',
        'Staff have been reminded of the importance of checking.'],
       'PRECISE',
       ['At sixteen twenty the pump was recorded as running at the prescribed rate.',
        'The pump has been removed and sealed and the records secured as at eighteen hundred.',
        'We do not yet know whether the rate was altered at handover, or why no alarm sounded.',
        'An investigation has been commissioned under Dr Eze, who will report by the thirtieth.'],
       'four sentences that will be quoted in two years',
       'four sentences that will still be true in two years'),
g_fig_cap='The fact with a time. The action in the perfect. We do not yet know.',

g_a=[('At sixteen twenty the pump ____________ recorded as running correctly.', 'was'),
     ('The pump ____________ been removed and sealed.', 'has'),
     ('The records ____________ been secured.', 'have'),
     ('We do not ____________ know whether the rate was altered.', 'yet'),
     ('Or ____________ no alarm sounded.', 'why'),
     ('An investigation ____________ been commissioned.', 'has'),
     ('____________ Dr Eze.', 'Under'),
     ('Who will report ____________ the thirtieth.', 'by'),
     ('She ____________ stood down on risk.', 'was')],

g_b=[('( it appears the infusion may have run too fast / at sixteen twenty the pump was recorded as running correctly ) — the fact.', ['it appears the infusion may have run too fast', 'at sixteen twenty the pump was recorded as running correctly'], 1),
     ('( the pump has been removed and sealed / the matter is being looked into ) — the action.',
      ['the pump has been removed and sealed', 'the matter is being looked into'], 0),
     ('( we do not yet know whether the rate was altered / the nurse was presumably busy ) — the unknown.',
      ['we do not yet know whether the rate was altered', 'the nurse was presumably busy'], 0),
     ('( an investigation has been commissioned under Dr Eze / the matter is being treated seriously ) — the step.',
      ['an investigation has been commissioned under Dr Eze', 'the matter is being treated seriously'], 0),
     ('( the family were told at eighteen hundred / the family have been kept informed ) — the candour.',
      ['the family were told at eighteen hundred', 'the family have been kept informed'], 0),
     ('( she has been stood down while the pump is examined / she has been sent home ) — the staff decision.',
      ['she has been stood down while the pump is examined', 'she has been sent home'], 0)],

d1=dict(
 title='Three lists by eight o’clock',
 fig=(['Facts: nine.', 'Actions: six.'],
      ['Unknowns: four.', 'Theories: none.']), 
 cap='Siobhán Carrick and Dr Leila Rahman, medical director, at seven in the evening.',
 lines=[('Leila', 'The executive on call wants a summary by eight. What do we actually have?'),
        ('Siobhán', 'Nine facts with times, six actions taken, four things we do not know.'),
        ('Leila', 'And the obvious explanation?'),
        ('Siobhán', 'Goes nowhere near the paper. If I write it tonight it becomes the finding, and in two years somebody will read it as one.'),
        ('Leila', 'The family will ask me what happened at half past eight.'),
        ('Leila', 'Then tell them the nine facts and the six actions, and tell them the four things we do not know.'),
        ('Siobhán', 'That is a very exposed conversation to have on the first evening.'),
        ('Leila', 'It is less exposed than a theory we have to withdraw in March.'),
        ('Siobhán', 'And the nurse?'),
        ('Leila', 'Stood down while the pump is examined, told that it is about the pump and not about her, and given somebody to talk to who is not in her line of management.'),
        ('Siobhán', 'She will think she is being blamed whatever we say.'),
        ('Leila', 'She may. Saying it plainly, twice, in writing, is the most we can do, and not saying it is how we lose her.')],
 a=[('What does the executive want, and when?', 'a summary by eight o’clock'),
    ('What does the account contain?', 'nine facts with times, six actions and four unknowns'),
    ('Why is the obvious explanation excluded?', 'because written tonight it becomes the finding'),
    ('What are the family told?', 'the nine facts, the six actions and the four unknowns'),
    ('What is the nurse told?', 'that it is about the pump, not about her, with support outside her line management')],
 b=[('Nine facts ____________ times.', 'with'),
    ('It becomes the ____________.', 'finding'),
    ('Told that it is about the ____________.', 'pump'),
    ('Somebody to talk to who is ____________ in her line of management.', 'not')]),

d2=dict(
 title='The sentence that lasted two years',
 fig=(['Written day one.', 'Quoted at inquest.'],
      ['Investigation disagreed.', 'Family lost trust.']),
 cap='Siobhán Carrick and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'The 2024 incident summary said that the patient had probably been given the medication twice.'),
        ('Siobhán', 'The investigation found that she had not. The chart had been signed twice for one administration.'),
        ('Peter', 'And the family had been told the first version.'),
        ('Siobhán', 'They had, within six hours, by somebody doing exactly what we now say they should: telling them early.'),
        ('Peter', 'So early candour produced a wrong account.'),
        ('Siobhán', 'Early candour with a theory in it produced a wrong account. The facts in that summary were all correct.'),
        ('Peter', 'The family say the correction was the worst moment of the whole process.'),
        ('Siobhán', 'Worse than the death, in their words, because it made them doubt everything else we had said.'),
        ('Peter', 'Some would conclude that we should say less on day one.'),
        ('Siobhán', 'The opposite. Say the facts, the actions and the unknowns, and say that the cause is unknown, which is itself a true and sayable sentence.'),
        ('Peter', 'That requires more discipline than most people have at six in the evening.'),
        ('Siobhán', 'Which is why it is a form with three headings rather than a free paragraph, and why I sign the first one myself.')],
 unresolved=True,
 a=[('What did the 2024 summary say?', 'that the patient had probably been given the medication twice'),
    ('What did the investigation find?', 'that she had not; the chart had been signed twice for one administration'),
    ('What was the worst moment for the family?', 'the correction'),
    ('Why?', 'because it made them doubt everything else'),
    ('What does Siobhán propose?', 'a form with three headings, signed by her')],
 b=[('She had ____________.', 'not'),
    ('Within six ____________, by somebody doing what we now say they should.', 'hours'),
    ('It made them ____________ everything else.', 'doubt'),
    ('A form with three ____________.', 'headings')]),

speak=[('Three lists',
        ['Your partner describes six incidents.',
         'Sort each into facts, actions and unknowns.',
         'Three each, then swap.']),
       ('We do not yet know',
        ['Your partner offers six provisional explanations.',
         'Convert each into an unknown, plainly stated.',
         'Three each, then swap.']),
       ('Risk, not blame',
        ['Your partner describes six staff decisions.',
         'Say what you would tell the person, and in what words.',
         'Three each, then swap.'])],

ext_title='A first-day incident account sorted into facts, actions and unknowns',
ext_fig=figs.datatable('WHAT THE FIRST-DAY ACCOUNT CARRIES',
                       ['Line', 'Content'],
                       [['facts', 'established, with times and sources'],
                        ['actions', 'taken, with the time of each'],
                        ['unknowns', 'stated plainly, including the cause'],
                        ['preservation', 'equipment and records secured'],
                        ['people', 'family told, staff supported'],
                        ['the investigation', 'commissioned, with a named lead']]),
ext_fig_cap='Six lines in twenty-four hours, and no seventh line of theory.',
ext=[
 'A first-day incident account sorted into facts, actions and unknowns produces '
 'the only document from the first evening that will still be accurate in two '
 'years.',
 'Give it the chronology as recorded with its sources, the actions taken with '
 'their times, the equipment and records involved, and the statutory obligations '
 'that fall due today.',
 'Ask it to place every statement in exactly one of the three lists, and to '
 'refuse any sentence containing probably, presumably or appears to.',
 'Ask for the cause to appear in the unknown list by name, because an account '
 'that omits the cause altogether reads as though somebody is withholding it.',
 'Ask for the obligations with times: when the family were told, what they were '
 'told, when they will next be told, and what support has been offered to the '
 'staff involved.',
 'What it cannot do is sit with a family at half past eight and say that we do not '
 'know why. That sentence has to be said by a person who will still be there in '
 'six weeks.'],

dp2=('Early accounts', 'Patient safety literature commonly reports that '
     'provisional explanations recorded in initial accounts are frequently '
     'inconsistent with investigation findings, and that corrections to early '
     'accounts given to families are associated with substantial loss of trust.',
     'Source: general patient safety literature, 2025–2026.'),

e_a=[('What does the account produce?', 'the only first-evening document still accurate in two years'),
     ('What four things are given to it?', 'the chronology with sources, the actions with times, the equipment and records, and today’s statutory obligations'),
     ('Where does every statement go?', 'into exactly one of the three lists'),
     ('Which three words are refused?', 'probably, presumably and appears to'),
     ('Why name the cause as unknown?', 'because omitting it reads as withholding it')],
e_b=[('Every statement belongs to one list only.', 'T'),
     ('The cause appears in the unknown list.', 'T'),
     ('It sits with the family at half past eight.', 'F'),
     ('Obligations are recorded with times.', 'T'),
     ('Provisional explanations often conflict with findings.', 'T'),
     ('Corrections to early accounts are easily absorbed.', 'F')],

w_model='Purpose: so that the account written on the first evening is one we can '
       'still stand behind in two years. Scope: the operational and factual '
       'account; clinical findings are for the commissioned investigation, the '
       'duty of candour conversation is led by the clinician the policy names, and '
       'nothing in my account attributes cause. Inputs: the chronology as '
       'recorded with the source of each entry, the actions taken with their '
       'times, the equipment and records involved, the statutory obligations '
       'falling due today, and the line management of everybody involved. '
       'Criteria: every statement in exactly one of facts, actions or unknowns; no '
       'instance of probably, presumably or appears to; the cause named in the '
       'unknown list; the family contact recorded with time, content and next '
       'date; and any standing down expressed as a risk decision with the reason '
       'given to the person in writing. Done: the account is signed by me and '
       'issued to the executive on call, the investigation lead and the clinical '
       'director, in the same words. Fallback: where I am pressed for an '
       'explanation, I say that the cause is not yet known and that I shall not '
       'speculate, and I record that I was asked.',
w_fig=figs.spec_card('SIX LINES FOR A FIRST-DAY ACCOUNT',
                     [('Purpose', 'still defensible in two years'),
                      ('Scope', 'facts and actions; not cause, not candour'),
                      ('Inputs', 'chronology, actions, equipment, obligations, lines'),
                      ('Criteria', 'three lists, no hedging words, cause as unknown'),
                      ('Done', 'signed and issued in the same words to three people'),
                      ('Fallback', 'pressed: refuse to speculate and record the asking')]),
w_fig_cap='Six lines, and the sixth one is the hardest to hold at six in the evening.',
w_task='Write a six-line tasking for a first-day account.',
w_steps=['Line 1: say what the account must survive.',
         'Line 2: say what is yours, and what is not.',
         'Line 3: say what you are giving it.',
         'Line 4: say how statements are sorted and what is forbidden.',
         'Line 5: say who receives it and in what words.',
         'Line 6: say what you do when pressed for an explanation.'],
w_bank=['Purpose: so that the account written on the first evening is one we can still stand behind in two years',
        'Scope: the operational and factual account; clinical findings are for the commissioned investigation, the duty of candour conversation is led by the clinician the policy names, and nothing in my account attributes cause',
        'Inputs: the chronology as recorded with the source of each entry, the actions taken with their times, the equipment and records involved, today’s statutory obligations, and the line management of everybody involved',
        'Criteria: every statement in exactly one of facts, actions or unknowns; no instance of probably, presumably or appears to; the cause named in the unknown list; family contact recorded with time, content and next date; any standing down expressed as a risk decision with the reason given in writing',
        'Done: signed by me and issued to the executive on call, the investigation lead and the clinical director, in the same words',
        'Fallback: where I am pressed for an explanation, I say that the cause is not yet known and that I shall not speculate, and I record that I was asked'],
w_check=['Is every statement in one list only?',
         'Are the hedging words absent?',
         'Is the cause listed as unknown?',
         'Is the standing down expressed as risk?'],

t_title='A first-day incident account sorted into facts, actions and unknowns',
t_fig=figs.split('TWENTY-FOUR HOURS AND THREE LISTS',
                 'It can sort',
                 ['facts with times and sources',
                  'actions with times',
                  'unknowns, including the cause',
                  'obligations falling due today'],
                 'It must not supply',
                 ['a provisional explanation',
                  'a clinical finding',
                  'the candour conversation',
                  'a judgement about a colleague']),
t_fig_cap='It sorts the three lists. Saying we do not know is a person’s work.',
t_body=[
 'Give it the chronology with its sources, the actions with their times, the '
 'equipment and records, and today’s obligations.',
 'A first-day incident account sorted into facts, actions and unknowns places '
 'every statement in exactly one list.',
 'Then ask it to refuse probably, presumably and appears to.'],
t_say=[('Fact: ', 'At sixteen twenty the pump was recorded correct.'),
       ('Action: ', 'The pump has been removed and sealed.'),
       ('Not yet known: ', 'Whether the rate was altered at handover.')],
t_bound='It cannot sit with a family at half past eight and say that we do not '
        'know why, and it will not be there in six weeks when they ask again.',
t_a=[('Give it the chronology with its ____________.', 'sources'),
     ('And the actions with their ____________.', 'times'),
     ('And today’s ____________.', 'obligations'),
     ('Place every statement in one ____________.', 'list'),
     ('And refuse ____________, presumably and appears to.', 'probably'),
     ('And name the ____________ as not yet known.', 'cause')],
t_b_rubric='Say what the first-day work should do with each item.',
t_b=[('“it appears the infusion ran too fast”', 'move it to the unknown list'),
     ('“the nurse was presumably busy”', 'delete it entirely'),
     ('“the matter is being looked into”', 'name the lead and the reporting date'),
     ('a nurse sent home with no explanation', 'record it as a risk decision and tell her in writing')],

case=dict(
 title='The Decision Room · The theory that outlived the investigation',
 brief=[
  'A hospital’s initial incident summaries were written as narrative accounts '
  'including a provisional view of cause, on the view that an account without an '
  'explanation looked evasive.',
  'Over four years, 29 serious incidents were reported. In 11 the initial summary '
  'contained a provisional cause. In 7 of those 11 the investigation reached a '
  'different conclusion. In all 7 the family had been told the provisional '
  'account; 5 of those families subsequently made complaints citing the change of '
  'explanation.',
  'A three-heading form of facts, actions and unknowns was introduced, with '
  'hedging words prohibited. Over the following four years no initial account '
  'contained a cause, and complaints citing a change of explanation fell to none.'],
 exhibit=figs.datatable('FOUR YEARS OF SERIOUS INCIDENTS',
                        ['Item', 'Before / After'],
                        [['serious incidents', '29 / 26'],
                         ['initial summaries stating a cause', '11 / 0'],
                         ['investigations reaching a different cause', '7 of 11 / n/a'],
                         ['complaints citing a changed explanation', '5 / 0'],
                         ['families told within 24 hours', '21 / 26'],
                         ['staff offered support outside their line', '9 / 26']]),
 exhibit_cap='Early candour kept, and the theory removed from it.',
 exhibit_note='Seven of eleven provisional explanations were wrong. Candour was '
              'never the problem; the explanation inside it was.',
 voices=[('A senior manager', 'about accounts without a cause',
          'A summary that says we do not know why looks as though we are hiding something.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Seven families were given an explanation we later withdrew, and five of them stopped believing anything we said.'),
         ('A bereaved relative', 'about the correction',
          'The second meeting was worse than the first. If that was wrong, what else was?')],
 steps=[('Find it', 'How many summaries stated a cause?'),
        ('Compare it', 'Provisional causes against investigation findings.'),
        ('Infer it', 'Why did early explanations damage trust?'),
        ('Weigh it', 'Appearing open against being accurate.'),
        ('Decide', 'What does a first-day account contain?')],
 analysis=[('Find it. How many?', '11 of 29'),
           ('Compare it. How many differed?', '7 of the 11'),
           ('Infer it. Why the damage?', 'because a withdrawn explanation puts every other statement in doubt'),
           ('Weigh it. What was traded?', 'the appearance of openness for five complaints and seven wrong accounts'),
           ('Decide. What does it contain?', 'facts, actions and unknowns, with the cause listed as unknown')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how a first-day account is structured.',
                 'Say what may not appear in it.',
                 'Say what the family is told and when.',
                 'Say how staff involved are treated.'],
 bank=['Every initial account of a serious incident is recorded under three headings: facts established, actions taken with their times, and matters not yet known.',
       'No initial account states or implies a cause, and the words probably, presumably and appears to are not used in it.',
       'The patient or family is told within twenty-four hours what is known and what is not, and is given the date of the next contact.',
       'Any member of staff stood down is told in writing that the decision is a precaution about risk, and is offered support from outside their line of management.'],
 outcome='The hospital adopts the four lines. Initial summaries stating a cause '
         'fall from eleven to none, complaints citing a changed explanation from '
         'five to none, families told within twenty-four hours rise from '
         'twenty-one to twenty-six, and staff offered support outside their line '
         'from nine to twenty-six.',
 outcome_q=[('What happened to summaries stating a cause?', 'they fell from eleven to none'),
            ('What happened to complaints about changed explanations?', 'they fell from five to none'),
            ('What happened to families told within a day?', 'they rose from twenty-one to twenty-six'),
            ('What happened to support outside the line?', 'it rose from nine cases to twenty-six'),
            ('Over what period?', 'four years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · It appears that the infusion ran too fast',
 task=['This was the initial summary written at six o’clock on the evening of a '
       'serious incident.',
       'This is what it said.'],
 draft=['It appears that the infusion may have been running too fast.',
        'The nurse concerned was presumably extremely busy at the time.',
        'There seem to have been a number of pressures on the ward.',
        'The matter is being looked into as a matter of urgency.',
        'Staff have been reminded of the importance of checking rates.',
        'The family have been kept informed of developments.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines written at six o’clock that will be read out in two years.',
 asked=['it appears', 'presumably',
        'kept informed of developments'],
 back=['11 of 29 summaries stating a cause',
       '7 of 11 contradicted by investigation', '5 complaints about the change'],
 gap='Nobody could tell which statements were established, what had been done and when, or what was genuinely unknown.',
 back_cap='Six lines in which a theory, a judgement and an obligation are all guessed at.',
 back_note='“Staff have been reminded of the importance of checking” is an action '
           'that implies a cause, taken before anybody knows what happened.',
 diagnosis=[('“it appears”', 'hidden assumption'),
            ('“presumably extremely busy”', 'hidden assumption'),
            ('“a number of pressures”', 'unbounded quantity'),
            ('“there seem to have been”', 'unbounded quantity'),
            ('“kept informed of developments”', 'undefined done'),
            ('“staff have been reminded”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that it is still true in two years.',
 scaffold=['what the account must survive',
           'what is yours, and what is not',
           'what you are giving it',
           'how statements are sorted and what is forbidden',
           'who receives it and in what words',
           'what you do when pressed for an explanation'],
 bank=['Purpose: so that the account written on the first evening is one we can still stand behind in two years',
       'Scope: the operational and factual account; clinical findings are for the commissioned investigation, the duty of candour conversation is led by the clinician the policy names, and nothing in my account attributes cause',
       'Inputs: the chronology as recorded with the source of each entry, the actions taken with their times, the equipment and records involved, the statutory obligations falling due today, and the line management of everybody involved',
       'Criteria: every statement in exactly one of facts, actions or unknowns; no instance of probably, presumably or appears to; the cause named in the unknown list; the family contact recorded with time, content and next date; and any standing down expressed as a risk decision with the reason given to the person in writing',
       'Done: the account is signed by me and issued to the executive on call, the investigation lead and the clinical director, in the same words',
       'Fallback: where I am pressed for an explanation, I say that the cause is not yet known and that I shall not speculate, and I record that I was asked'],
 check=['Are the three lists separate?',
        'Are the hedging words gone?',
        'Is the family contact timed?',
        'Is the cause recorded as unknown?'],
 model=['so that the account written on the first evening is one we can still stand behind in two years',
        'the operational and factual account; clinical findings are for the commissioned investigation, the duty of candour conversation is led by the clinician the policy names, and nothing in my account attributes cause',
        'the chronology as recorded with the source of each entry, the actions taken with their times, the equipment and records involved, the statutory obligations falling due today, and the line management of everybody involved',
        'every statement in exactly one of facts, actions or unknowns; no instance of probably, presumably or appears to; the cause named in the unknown list; the family contact recorded with time, content and next date; and any standing down expressed as a risk decision with the reason given to the person in writing',
        'the account is signed by me and issued to the executive on call, the investigation lead and the clinical director, in the same words',
        'where I am pressed for an explanation, I say that the cause is not yet known and that I shall not speculate, and I record that I was asked'],
 cost='11 of 29 summaries stating a cause, 7 contradicted, and 5 complaints about the change.'),

lang=dict(
 title='The Unwelcome Number · Refusing to give an executive an explanation at six o’clock',
 setting=[
  'The executive on call wants a provisional explanation in the first-day summary. '
  'Siobhán intends to record the cause as not yet known.',
  'She has to refuse, protect the account, and not appear to be withholding '
  'anything from her own organisation.'],
 ladder=[('An executive who needs to brief', 'and a cause nobody knows'),
         ('Seven of eleven', 'provisional explanations that were wrong'),
         ('Either give the theory', 'or record the unknown and hold it')],
 cap='Nine facts, six actions, four unknowns, and one sentence refused.',
 turns=[('Turn 1 · Siobhán', 'The summary will record the cause as not yet known, and I am not going to put a provisional explanation in it.'),
        ('Turn 2 · Executive', 'I have to brief the chair at eight and I cannot tell her we have no idea.'),
        ('Turn 3 · Siobhán', 'You can tell her nine established facts, six actions already taken, and the four things we are investigating.')],
 holds=['Seven of our last eleven provisional explanations were contradicted by the investigation.',
        'In all seven the family had been given the first version, and five of them complained about the change.',
        'The facts in this summary are stronger than any theory I could offer tonight.',
        'If the chair wants a view, I shall give her mine verbally and say plainly that it is not evidence.',
        'Dr Eze reports by the thirtieth, and I shall brief the chair the same day.',
        'And if you judge that the organisation needs a provisional cause tonight, instruct me in writing and I shall record that you did.'],
 redline='Never write a provisional cause in a first-day account, and never let a '
         'family be told a theory as though it were a finding.',
 score=['Refused in the first sentence.',
        'Gave the historical proportion.',
        'Offered the facts as the stronger brief.',
        'Separated a verbal view from the record.',
        'Required any instruction to be in writing.'],
 a=[('What will the summary record?', 'the cause as not yet known'),
    ('What can the executive brief instead?', 'nine facts, six actions and four unknowns'),
    ('How many provisional explanations were wrong?', 'seven of eleven'),
    ('What happened in those seven?', 'the family had the first version; five complained about the change'),
    ('When does Dr Eze report?', 'by the thirtieth'),
    ('What is the redline?', 'never write a provisional cause in a first-day account')]),

rev_fig=figs.split('A FIRST-DAY ACCOUNT',
                   'Say',
                   ['at sixteen twenty the pump was recorded as correct',
                    'the pump has been removed and sealed',
                    'we do not yet know whether the rate was altered',
                    'an investigation has been commissioned under Dr Eze'],
                   'Never say',
                   ['it appears the infusion ran too fast',
                    'the nurse was presumably busy',
                    'the matter is being looked into',
                    'the family have been kept informed']),
rev_fig_cap='Four sentences still true in two years, and four quoted against you.',
rev=dict(
 read=[('What three lists exist on day one?',
        ['facts, actions and unknowns', 'causes, actions and people',
         'facts, theories and plans', 'who, what and when'], 0),
       ('What happens to a provisional explanation?',
        ['it is quoted in two years', 'it is forgotten',
         'it is replaced quietly', 'it reassures the family'], 0),
       ('What is standing somebody down?',
        ['a decision about risk', 'a disciplinary step',
         'a clinical judgement', 'a form of support'], 0),
       ('Which words are forbidden?',
        ['probably, presumably, appears to', 'unknown, unclear, pending',
         'immediately, urgently, promptly', 'recorded, secured, sealed'], 0)],
 listen_text='Give it the chronology with its sources, the actions with their '
             'times, the equipment and records, and today’s obligations. Place '
             'every statement in one list.',
 listen=[('Give it the chronology with its ____________.', 'sources'),
         ('And the actions with their ____________.', 'times'),
         ('And today’s ____________.', 'obligations'),
         ('Place every statement in one ____________.', 'list')],
 speak=['Sort six incidents into facts, actions and unknowns.',
        'Then convert six provisional explanations into plain unknowns.'],
 write='Write a six-line tasking for a first-day account.',
 vocab=[('Something recorded and verifiable is a fact established within an ____________.', 'hour'),
        ('Equipment preserved for examination is a ____________ that must be kept.', 'device'),
        ('People entitled to what is known is a family who asks what ____________.', 'happened'),
        ('What the department is told, and when, is a ____________ to staff on the first day.', 'statement')],
 gram=[('She ____________ stood down on risk.', 'was'),
       ('Who will report ____________ the thirtieth.', 'by'),
       ('____________ Dr Eze.', 'Under'),
       ('Or ____________ no alarm sounded.', 'why')]),

found=['Write three lists: facts with times, actions with times, and unknowns.',
       'Name the cause as unknown rather than omitting it.',
       'Tell the family today, with a date for the next conversation.',
       'Stand somebody down on risk, and say so to them in writing.'],
end_line='Seven of eleven provisional explanations were wrong, and five of the seven families stopped believing anything else the hospital had told them.',
end_next='Next: Telling Staff Something They Will Hate')
