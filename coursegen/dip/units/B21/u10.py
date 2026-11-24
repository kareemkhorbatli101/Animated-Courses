# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='What You Agreed, and What You Did Not',
gram='the subjunctive in formal requirement: requests that it be',
ai='what was agreed, in the words that were agreed',
strap='CEFR B2 · Grammar: the subjunctive in formal requirement: requests that it be · '
      'AI: what was agreed, in the words that were agreed',
cando=['use the subjunctive in formal requests and requirements',
       'distinguish an agreed point from a divergent recollection',
       'confirm an understanding in the words both sides used',
       'say why a paraphrase of an agreement is a new agreement',
       'write a six-line tasking for a record of agreed conclusions'],

hero=('NINE AGREED POINTS, AND TWO OF THEM HAD NEVER BEEN AGREED BY ANYBODY',
      ['The prose was confident, the paraphrase was elegant, and the words were new.',
       'Where practicable had quietly disappeared from the only sentence that mattered.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='The end of a four-day round: two sets of notes, one summary and no agreed minute.',

warm=['How do you know what you have agreed with somebody?',
      'What is the difference between what was agreed and what you remember?',
      'When is a paraphrase dangerous?'],

read=[
 'At the end of a round, two delegations leave a room believing they have agreed something, '
 'and the only thing that is certainly true is that each of them believes it in slightly '
 'different words.',
 'Hala Darwish has her own session notes, the rolling text, and a four-paragraph summary sent '
 'by the other delegation’s secretary at eleven o’clock that night. She asks a system to '
 'produce a list of the points on which the two sides have agreed.',
 'It returns nine points in a page of confident, well-ordered prose, and the prose is the '
 'problem, because each point is a paraphrase: the parties agreed to consult before any change '
 'of schedule, rather than the words actually agreed.',
 'The words actually agreed were the parties will consult, where practicable, before any change '
 'of schedule, and where practicable is the subject of two days of argument and the whole value '
 'of the paragraph to the other side.',
 'Two of the nine points, moreover, appear in her notes and nowhere else. They may well have '
 'been agreed; nobody but her has written them down, which makes them a recollection rather '
 'than an agreement, and the distinction will matter in six months.'],

dp1=('Agreed conclusions', 'Practice commonly treats a point as agreed only where both '
     'parties hold the same form of words, which is why delegations exchange agreed minutes '
     'or confirming letters rather than relying on each side’s own record of a discussion.',
     'Source: general diplomatic practice literature, 2025–2026.'),

c_a=[('What do two delegations leave a room believing?', 'that they agreed something'),
     ('What is certainly true?', 'each believes it in different words'),
     ('What did Hala have?', 'her notes, the rolling text and a four-paragraph summary'),
     ('How many points came back?', 'nine, in paraphrase'),
     ('Which three words were missing?', 'where practicable'),
     ('What is wrong with two of the nine?', 'they appear only in her notes')],

c_b=[('Both delegations will remember the same words.', 'F'),
     ('A paraphrase preserves an agreed form of words.', 'F'),
     ('Where practicable was argued over for two days.', 'T'),
     ('A point in one side’s notes only is an agreement.', 'F'),
     ('The prose was well ordered.', 'T'),
     ('The distinction will matter later.', 'T')],

c_c=[('The delegation requests that the text ____________ circulated before Friday.', 'be'),
     ('We propose that the annex ____________ reopened at the next round.', 'be'),
     ('It is essential that each party ____________ the depositary.', 'notify'),
     ('The chair asks that the paragraph ____________ left in brackets.', 'be'),
     ('We require that the confirmation ____________ in writing.', 'be'),
     ('It is important that the record ____________ the agreed words.', 'use')],

c_d=[('Requests that it be circulated uses ( the subjunctive / the passive only ).', ['the subjunctive', 'the passive only'], 0),
     ('It is essential that each party notify has no ( final s / article ).',
      ['final s', 'article'], 0),
     ('A paraphrase of an agreement is ( a new agreement / the same agreement ).',
      ['a new agreement', 'the same agreement'], 0),
     ('A point in one record only is ( a recollection / an agreement ).',
      ['a recollection', 'an agreement'], 0),
     ('Where practicable was worth ( two days of argument / nothing ).',
      ['two days of argument', 'nothing'], 0)],

c_e=('Subjunctive or indicative? Put each in the right column.',
     [('requests that the text be circulated', 'subjunctive'),
      ('the text was circulated on Friday', 'indicative'),
      ('proposes that the annex be reopened', 'subjunctive'),
      ('the annex was reopened', 'indicative'),
      ('it is essential that each party notify', 'subjunctive'),
      ('each party notifies the depositary', 'indicative')],
     ['subjunctive', 'indicative']),

v_fig_title='CLOSING A ROUND',
v_fig=[('doc', 'an agreed minute'), ('key', 'a point of agreement'), ('chart', 'a divergent recollection'),
       ('speech', 'a chair’s conclusion'), ('clock', 'a final confirmation'), ('people', 'an exchange of letters')],
v_fig_cap='Six words for the hour in which a four-day round becomes a document or evaporates.',

vocab=[
 ('an agreed conclusion', 'a point both parties have accepted in the same words'),
 ('a common understanding', 'a shared view of what has been settled'),
 ('a divergent recollection', 'a different memory of what was agreed'),
 ('a confirming letter', 'a letter setting out what one side understands was agreed'),
 ('an exchange of letters', 'two letters together recording an understanding'),
 ('an agreed minute', 'a record of a meeting accepted by both sides'),
 ('a point of agreement', 'a matter on which the parties are at one'),
 ('a point of disagreement', 'a matter on which they remain apart'),
 ('a formal requirement', 'something a text obliges a party to do'),
 ('a request in writing', 'a request made in a document rather than orally'),
 ('a mutual confirmation', 'confirmation given by each side to the other'),
 ('an agreed text of conclusions', 'the wording of outcomes both sides accept'),
 ('a differing account', 'one party’s version where the other’s differs'),
 ('a correction of the record', 'a formal change to a written account'),
 ('an agreed form of words', 'wording both sides have expressly accepted'),
 ('a closing summary', 'the account given at the end of a session'),
 ('a chair’s conclusion', 'the chair’s statement of what a session settled'),
 ('an unagreed annex', 'an attachment whose wording is not yet accepted'),
 ('a provisional agreement', 'agreement subject to later confirmation'),
 ('a final confirmation', 'the last written acceptance of a text')],

v_a=[('A point both parties accepted in the same words is an agreed ____________.', 'conclusion'),
     ('A different memory of what was agreed is a ____________ recollection.', 'divergent'),
     ('A letter setting out what one side understands is a ____________ letter.', 'confirming'),
     ('A record accepted by both sides is an agreed ____________.', 'minute'),
     ('Wording both sides have expressly accepted is an agreed form of ____________.', 'words'),
     ('Agreement subject to later confirmation is a ____________ agreement.', 'provisional'),
     ('An attachment whose wording is not accepted is an ____________ annex.', 'unagreed'),
     ('A formal change to a written account is a ____________ of the record.', 'correction')],

v_b=[('An exchange of letters is two letters together', 'recording an understanding.'),
     ('A formal requirement is something a text', 'obliges a party to do.'),
     ('A chair’s conclusion is the chair’s statement', 'of what a session settled.'),
     ('A mutual confirmation is confirmation given', 'by each side to the other.'),
     ('A closing summary is the account given', 'at the end of a session.')],

g_title='Grammar: the subjunctive in formal requirement: requests that it be',
g_rule=['After request, propose, require, ask, insist, recommend and demand, the following '
        'verb takes its base form: requests that the text be circulated.',
        'The same applies after it is essential that, it is important that and it is necessary '
        'that: it is essential that each party notify the depositary.',
        'There is no third-person s and no does: not that each party notifies, and not that it '
        'does not apply.',
        'The negative is formed with not before the base form: requests that the paragraph not '
        'be reopened.'],
g_fig=('INFORMAL',
       ['We are asking for the text to be sent round before Friday.',
        'We think the annex should be reopened next time.',
        'Each party really has to tell the depositary.',
        'We would rather the paragraph was not reopened.'],
       'FORMAL',
       ['The delegation requests that the text be circulated before Friday.',
        'We propose that the annex be reopened at the next round.',
        'It is essential that each party notify the depositary.',
        'The delegation requests that the paragraph not be reopened.'],
       'four requests in the register of a telephone call',
       'the same four, in the register of an agreed minute'),
g_fig_cap='The subjunctive is the register of a formal record. It costs one letter and buys standing.',

g_a=[('The delegation requests that the text ____________ circulated before Friday.', 'be'),
     ('We propose that the annex ____________ reopened at the next round.', 'be'),
     ('It is essential that each party ____________ the depositary.', 'notify'),
     ('The chair asks that the paragraph ____________ left in brackets.', 'be'),
     ('We require that the confirmation ____________ in writing.', 'be'),
     ('It is important that the record ____________ the agreed words.', 'use'),
     ('The delegation requests that the paragraph not ____________ reopened.', 'be'),
     ('We recommend that each delegation ____________ its own minute.', 'keep'),
     ('It is necessary that the annex ____________ attached to the letter.', 'be')],

g_b=[('The delegation requests that the text ( is circulated / be circulated ) before Friday.', ['is circulated', 'be circulated'], 1),
     ('It is essential that each party ( notify / notifies ) the depositary.',
      ['notify', 'notifies'], 0),
     ('We propose that the annex ( be reopened / will be reopened ) at the next round.',
      ['be reopened', 'will be reopened'], 0),
     ('The delegation requests that the paragraph ( not be reopened / is not reopened ).',
      ['not be reopened', 'is not reopened'], 0),
     ('We recommend that each delegation ( keep / keeps ) its own minute.',
      ['keep', 'keeps'], 0),
     ('It is necessary that the annex ( be attached / is attached ) to the letter.',
      ['be attached', 'is attached'], 0)],

d1=dict(
 title='Nine points, elegantly rewritten',
 fig=(['Nine agreed points, in a page.', 'Read me the first one.'],
      ['Agreed to consult before any change.', 'And where did where practicable go?']),
 cap='Hala Darwish and Ambassador Walid Hourani, on the last morning of the round.',
 lines=[('Hourani', 'What do we have?'),
        ('Hala', 'Nine agreed points, drawn from my notes, the rolling text and their summary.'),
        ('Hourani', 'Read the first.'),
        ('Hala', 'The parties agreed to consult before any change of schedule.'),
        ('Hourani', 'That is not what we agreed. We agreed will consult, where practicable.'),
        ('Hala', 'The three words are gone. The sentence reads better without them.'),
        ('Hourani', 'It reads better and it commits them to something they refused for two days.'),
        ('Hala', 'So every point has to be in the agreed words, not in better words.'),
        ('Hourani', 'In the agreed words, and nothing else. What of the other eight?'),
        ('Hala', 'Six are accurate. Two appear in my notes and in nothing they have sent.'),
        ('Hourani', 'Then those two are your recollection. Write to them and ask for confirmation.'),
        ('Hala', 'And if they do not confirm, we have seven and we know which seven.')],
 a=[('How many points came back?', 'nine'),
    ('What was missing from the first?', 'where practicable'),
    ('Why does that matter?', 'they refused that commitment for two days'),
    ('How many were accurate?', 'six'),
    ('What must be done with the other two?', 'write and ask for confirmation')],
 b=[('It reads better and it ____________ them to something.', 'commits'),
    ('In the agreed ____________, and nothing else.', 'words'),
    ('Those two are your ____________.', 'recollection'),
    ('We have seven and we know which ____________.', 'seven')]),

d2=dict(
 title='The letter that goes tonight',
 fig=(['I am sending a confirming letter.', 'With the words or with your summary?'],
      ['The words. Quoted.', 'Then we shall see what they dispute.']),
 cap='Hala and Dalia Khoury, on the telephone that afternoon.',
 lines=[('Dalia', 'Are you sending anything tonight?'),
        ('Hala', 'A confirming letter. Seven points in the agreed words, quoted exactly, in order.'),
        ('Dalia', 'And the two you cannot support?'),
        ('Hala', 'In a separate paragraph, as our understanding, with a request that they confirm it.'),
        ('Dalia', 'Good. Do not mix them with the seven.'),
        ('Hala', 'They will be visibly separate. One paragraph is the record, the other is a question.'),
        ('Dalia', 'And if they answer the seven and ignore the two?'),
        ('Hala', 'Then the two are unconfirmed and I will say so in the file, in those words.'),
        ('Dalia', 'That is the right answer. One more thing: send it tonight, not Monday.'),
        ('Hala', 'Why tonight in particular?'),
        ('Dalia', 'Because their delegation is also writing its own version, and the first letter sets the ground.'),
        ('Hala', 'And if their letter arrives before mine and the words differ?')],
 unresolved=True,
 a=[('What is Hala sending?', 'a confirming letter with seven quoted points'),
    ('Where do the two unconfirmed points go?', 'in a separate paragraph, as a question'),
    ('What if they are ignored?', 'they remain unconfirmed and are so recorded'),
    ('When must the letter go?', 'tonight, not Monday'),
    ('Why?', 'the other side is writing its own version')],
 b=[('Seven points in the agreed words, quoted ____________.', 'exactly'),
    ('One paragraph is the record, the other is a ____________.', 'question'),
    ('I will say so in the ____________.', 'file'),
    ('The first letter sets the ____________.', 'ground')]),

speak=[('Request formally',
        ['Make nine formal requests using requests that, proposes that and it is essential that.',
         'Your partner checks that no verb carries a third-person s.',
         'Make three of them negative.']),
       ('Agreed or recollected?',
        ['List six things you believe you agreed with somebody this month.',
         'Say for each where the words exist in writing.',
         'Your partner challenges any you cannot locate.']),
       ('Quote, do not paraphrase',
        ['Take four agreed sentences and paraphrase each more elegantly.',
         'Your partner says what the paraphrase changed.',
         'Agree which version belongs in a letter.'])],

ext_title='A list of agreed points is only as good as its quotation marks',
ext_fig=figs.datatable('NINE POINTS, AND WHERE EACH ONE EXISTS',
                       ['Point', 'In their summary?', 'Status'],
                       [['consultation before change', 'yes, with where practicable', 'agreed, in their words'],
                        ['four-month period', 'yes', 'agreed'],
                        ['texts by 24 May', 'yes', 'agreed'],
                        ['review after five years', 'yes', 'agreed'],
                        ['annex treatment', 'no', 'our recollection only'],
                        ['working group in July', 'no', 'our recollection only']]),
ext_fig_cap='Four points that exist in two records, and two that exist in one notebook.',
ext=[
 'Producing a list of agreed conclusions from two sets of notes is useful, and it is useful '
 'in a very specific way: it shows you quickly which of your points appear in the other side’s '
 'account and which appear only in yours, which is the distinction that matters.',
 'The trap is the writing. A system asked for a list of agreed points will produce good prose, '
 'and good prose paraphrases: it tidies will consult, where practicable into agreed to consult, '
 'drops a qualifier that was fought over for two days, and does so in a register that sounds '
 'more official than the original.',
 'In a negotiation a paraphrase of an agreement is a new agreement, and it is always a new '
 'agreement in your own favour, because the qualifiers that get tidied away are the ones the '
 'other side insisted on and you resented.',
 'So instruct the opposite: every agreed point is to be quoted exactly from the text or the '
 'summary in which it appears, with its source named, and nothing is to be reworded for '
 'readability. A list of nine awkward quotations is worth more than a page of elegant prose.',
 'Then write the confirming letter the same night, quoting the agreed words, and put anything '
 'that exists only in your own record in a separate paragraph with a request that it be '
 'confirmed. What comes back, or does not, tells you what you actually have.'],

dp2=('Confirming letters', 'It is common practice for a delegation to send a confirming '
     'letter shortly after a round, quoting the wording it understands to have been agreed, '
     'so that any divergence of recollection emerges immediately rather than months later.',
     'Source: general diplomatic practice literature, 2025–2026.'),

e_a=[('What is the specific use of such a list?', 'showing which points appear in both records'),
     ('What is the trap?', 'good prose paraphrases'),
     ('Why is a paraphrase always in your favour?', 'the qualifiers you resented get tidied away'),
     ('What should the instruction require?', 'exact quotation with the source named'),
     ('What goes in a separate paragraph?', 'anything existing only in your own record')],
e_b=[('A paraphrase of an agreement is harmless.', 'F'),
     ('Awkward quotations are more useful than elegant prose.', 'T'),
     ('A confirming letter should wait until Monday.', 'F'),
     ('What comes back tells you what you have.', 'T'),
     ('Qualifiers are usually the other side’s insistence.', 'T'),
     ('A point in one record only is agreed.', 'F')],

w_model='Purpose: so that the delegation knows which conclusions exist in both records before '
        'the confirming letter goes tonight. Scope: the round of 22–25 May; the drafting group’s '
        'rolling text is treated as a separate source. Inputs: my session notes, the other '
        'delegation’s summary of 25 May, and versions 12 to 14 of the rolling text. Criteria: '
        'each point quoted exactly from the source in which it appears, with the source named; '
        'no rewording; points appearing in one record only listed separately. Done: the two '
        'lists with the head of mission by 15:00 on 26 May. Fallback: where the two records use '
        'different words for the same point, both are quoted and neither is reconciled.',
w_fig=figs.spec_card('SIX LINES FOR AGREED CONCLUSIONS',
                     [('Purpose', 'know which conclusions exist in both records'),
                      ('Scope', 'the round of 22–25 May'),
                      ('Inputs', 'my notes, their summary, versions 12–14'),
                      ('Criteria', 'exact quotation, source named, no rewording'),
                      ('Done', 'two lists by 15:00 on 26 May'),
                      ('Fallback', 'different words: quote both, reconcile neither')]),
w_fig_cap='The fallback line is the discipline: two wordings stay two wordings until somebody agrees one.',
w_task='Write a six-line tasking for a record of agreed conclusions.',
w_steps=['Line 1: what the list is for, and before what.',
         'Line 2: which round, and which sources are treated separately.',
         'Line 3: every record you hold, dated.',
         'Line 4: quotation, sources, no rewording, and the second list.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what is done where the two records differ in wording.'],
w_bank=['Purpose: so that the delegation knows which conclusions exist in both records before … ',
        'Scope: the round of … ; … treated as a separate source',
        'Inputs: my session notes, the other delegation’s summary of … , and versions … ',
        'Criteria: each point quoted exactly with its source; no rewording; one-record points listed separately',
        'Done: the two lists with … by … ',
        'Fallback: where the records use different words, … '],
w_check=['Does line 4 forbid rewording?',
         'Must every point name its source?',
         'Is there a second list for one-record points?',
         'Does line 6 refuse to reconcile two wordings?'],

t_title='What was agreed, in the words that were agreed',
t_fig=figs.split('AFTER A ROUND',
                 'Ask for this',
                 ['each point quoted exactly',
                  'the source of every quotation',
                  'a separate list of one-record points',
                  'both wordings where they differ'],
                 'Refuse this',
                 ['a tidied form of words',
                  'a single reconciled version',
                  'a dropped qualifier',
                  'a more official register']),
t_fig_cap='Quotation marks are the entire technique. Everything else is somebody rewriting a treaty.',
t_body=[
 'Give every record you hold — your session notes, the other side’s summary, the last versions '
 'of the rolling text — and ask for each apparently agreed point to be quoted exactly from the '
 'source in which it appears, with that source named, and for nothing to be reworded for '
 'readability.',
 'Ask for a second list of points that appear in only one record. Those are not agreements and '
 'must never sit in the same list as the rest; they are questions, and the right place for a '
 'question is a confirming letter with a request that it be confirmed.',
 'Where the two records use different words for the same point, require that both wordings be '
 'quoted and neither chosen. The difference between will consult, where practicable and agreed '
 'to consult is two days of other people’s work, and it is not yours to resolve by editing.'],
t_say=[('Ask for quotation: ', 'Quote each point exactly from the source it appears in, and name the source.'),
       ('Forbid tidying: ', 'Do not reword anything for readability.'),
       ('Ask for the second list: ', 'List separately every point that appears in only one record.')],
t_bound='A list built from records cannot tell you what was agreed; it can only tell you what '
        'each record says. Where a point exists in your notes alone, no amount of processing '
        'turns it into an agreement, and a confident paraphrase makes the gap invisible.',
t_a=[('Quote each point exactly from the ____________ it appears in.', 'source'),
     ('Do not ____________ anything for readability.', 'reword'),
     ('List separately every point in only one ____________.', 'record'),
     ('Both wordings ____________ quoted and neither chosen.', 'be'),
     ('It can only tell you what each record ____________.', 'says'),
     ('A confident paraphrase makes the ____________ invisible.', 'gap')],
t_b_rubric='Say whether each belongs in the agreed list, the second list or neither.',
t_b=[('Will consult, where practicable, quoted from their summary.',
      'the agreed list: it is in both records, quoted'),
     ('Agreed to consult before any change.', 'neither: it is a paraphrase nobody wrote'),
     ('The working group in July, from your notes only.', 'the second list: it is a question'),
     ('Two different wordings of the same point.', 'the agreed list, with both quoted')],

case=dict(
 title='The Decision Room · Nine points, six of them real',
 brief=[
  'A four-day round ends at six on a Friday. The delegation holds its own session notes, '
  'versions 12 to 14 of the rolling text, and a four-paragraph summary sent by the other '
  'delegation’s secretary at eleven that night.',
  'A list of agreed points produced from all three sources returns nine items in a page of '
  'well-ordered prose. Every item is a paraphrase. The first reads the parties agreed to '
  'consult before any change of schedule, where the words in both records are the parties will '
  'consult, where practicable, before any change of schedule.',
  'Of the nine, six appear in both records. Two appear only in the delegation’s own notes: the '
  'treatment of the annex and a working group in July. The ninth is a point on which the two '
  'records use plainly different words.'],
 exhibit=figs.datatable('THE FIRST POINT, THREE WAYS',
                        ['Source', 'Wording', 'Effect'],
                        [['rolling text v14', 'will consult, where practicable', 'qualified commitment'],
                         ['their summary', 'will consult, where practicable', 'qualified commitment'],
                         ['the generated list', 'agreed to consult', 'unqualified commitment'],
                         ['our notes', 'will consult where practicable', 'qualified commitment'],
                         ['two days of argument', 'about three words', 'their condition'],
                         ['what the letter quoted', 'will consult, where practicable', 'as agreed']]),
 exhibit_cap='Three records carry the qualifier and the elegant summary does not.',
 exhibit_note='The paraphrase is not inaccurate about the subject matter. It is inaccurate '
              'about the only part of the sentence either side cared about.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'It told me in minutes which of my nine points existed in their record too. That is the question.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'And rewrote the one sentence they spent two days qualifying, in our favour, elegantly.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'A confirming letter quoting the agreed words settles it tonight. A paraphrase settles nothing and claims everything.')],
 steps=[('Find it', 'What did the list return?'),
        ('Compare it', 'The paraphrase against the three records.'),
        ('Infer it', 'Why does paraphrase favour the writer?'),
        ('Weigh it', 'Minutes of comparison against a rewritten commitment.'),
        ('Decide', 'What goes into the confirming letter tonight?')],
 analysis=[('Find it. What came back?', 'nine paraphrased points'),
           ('Compare it. Paraphrase against records?', 'the qualifier was dropped from all nine'),
           ('Infer it. Why favour the writer?', 'the resented qualifiers are the ones tidied away'),
           ('Weigh it. What was useful?', 'the comparison of records, not the prose'),
           ('Decide. What is sent?', 'six quoted points, two as questions, both wordings on the ninth')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how an agreed point is recorded.',
                 'Say what is done with a point in one record only.',
                 'Say what is done where the wordings differ.',
                 'Say when the confirming letter goes.'],
 bank=['An agreed point is recorded only as an exact quotation, with the source named.',
       'A point appearing in one record only is sent as a question, in a separate paragraph.',
       'Where the records differ in wording, both wordings are quoted and neither is chosen.',
       'The confirming letter goes the same night, before the other side’s version sets the ground.'],
 outcome='The letter goes at 23:10 with six quoted conclusions, a separate paragraph asking '
         'that the annex treatment and the July working group be confirmed, and both wordings of '
         'the ninth point. The reply confirms the annex, says nothing about the working group, '
         'and proposes a third wording for the ninth, which is at least now a visible '
         'disagreement rather than an invisible one.',
 outcome_q=[('When did the letter go?', 'at 23:10'),
            ('How many conclusions were quoted?', 'six'),
            ('What was confirmed in reply?', 'the annex treatment'),
            ('What was ignored?', 'the July working group'),
            ('What happened to the ninth point?', 'they proposed a third wording')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tell me what we agreed',
 task=['A delegate asked for a list of agreed conclusions an hour after a round ended.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Tell me what we agreed.',
        'Here are my notes and their summary.',
        'Put it in clear English.',
        'Make it one page.',
        'Tidy up the wording.',
        'Leave out anything doubtful.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and line 5 cancels the only thing a record is for.',
 asked=['What we agreed', 'Clear English, one page', 'Nothing doubtful'],
 back=['9 points in elegant prose', '9 paraphrases, 0 quotations', '2 recollections listed as agreements'],
 gap='Nobody said that the words are the agreement, or that one-record points are not agreements.',
 back_cap='One tidy page in which three words that took two days have quietly disappeared.',
 back_note='Tidy up the wording and leave out anything doubtful are, in a negotiation record, '
           'instructions to rewrite an agreement and to hide the distinction between what both '
           'sides hold and what only you remember.',
 diagnosis=[('“what we agreed”', 'ambiguous referent'),
            ('“anything doubtful”', 'ambiguous referent'),
            ('“tidy up the wording”', 'unscoped set'),
            ('“clear English”', 'unscoped set'),
            ('“one page”', 'missing condition'),
            ('“my notes and their summary”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the agreed words survive and the gaps are visible.',
 scaffold=['why the list is wanted and before what',
           'which round, and which sources are separate',
           'every record held, dated',
           'quotation, named sources, no rewording, and the second list',
           'what is delivered, to whom and when',
           'what is done where the records differ in wording'],
 bank=['Purpose: so that the delegation knows which conclusions exist in both records before the letter goes',
       'Scope: the round of … ; the rolling text treated as a separate source',
       'Inputs: my session notes, their summary of … , and versions … to … ',
       'Criteria: each point quoted exactly with its source named; no rewording; one-record points listed separately',
       'Done: the two lists with … by … ',
       'Fallback: where the records use different words, both are quoted and neither reconciled'],
 check=['Does it require exact quotation?',
        'Does it forbid rewording for readability?',
        'Is there a separate list for one-record points?',
        'Does it refuse to reconcile two wordings?'],
 model=['so that the delegation knows which conclusions exist in both records before the confirming letter goes tonight',
        'the round of 22–25 May; the drafting group’s rolling text is treated as a separate source',
        'my session notes, the other delegation’s summary of 25 May, and versions 12 to 14 of the rolling text',
        'each point quoted exactly from its source, with the source named; no rewording; one-record points listed separately',
        'the two lists with the head of mission by 15:00 on 26 May',
        'where the records use different words for the same point, both are quoted and neither is reconciled'],
 cost='9 paraphrases for 0 quotations. 3 words that took 2 days to negotiate were tidied away '
      'in 1 sentence.'),

feet=dict(
 title='On Your Feet · Their delegation says you agreed something you did not',
 setting=[
  'Six weeks after the round, at the opening of the next session, the head of the other '
  'delegation states for the record that your delegation agreed in May that consultation would '
  'take place before any change of schedule.',
  'What was agreed was consultation where practicable. You have a confirming letter quoting '
  'those words, sent at 23:10 on the night of the round, and never contradicted. You do not '
  'have it in front of you.'],
 ladder=[('You agreed to consult before any change', 'the overstatement you must correct'),
         ('That is not our recollection', 'the clash of records in open session'),
         ('Then there is no agreement at all', 'the escalation you must refuse')],
 cap='Three turns at the opening of a session, with the previous round six weeks behind you.',
 turns=[('Turn 1 · Head of delegation', 'Your delegation agreed in May to consult before any change of schedule.'),
        ('Turn 2 · Head of delegation', 'That is not our recollection of what was said in the room.'),
        ('Turn 3 · Head of delegation', 'Then perhaps there was no agreement on consultation at all.')],
 holds=['What we agreed, and what I have in writing, is to consult where practicable.',
        'I would rather not rely on recollection, mine or yours, when both of us have documents.',
        'My delegation wrote to yours on the night of the round, quoting those words, and received no correction.',
        'I am not suggesting bad faith: six weeks is long enough for two honest memories to part company.',
        'There is an agreement, and it is the one in the letters; I do not accept that it falls away.',
        'May I propose that the secretariat circulate both letters before we continue, so that the record is one thing?'],
 redline='You must not accept the wider formulation to keep the room comfortable, you must '
         'not accuse the other delegation of misrepresenting the record, and you must not let '
         '"then there was no agreement" stand as a conclusion. Rely on the documents, not on '
         'your memory.',
 score=['Stated the agreed words, exactly, at the first opportunity.',
        'Moved the argument from recollection to documents.',
        'Cited the confirming letter and the absence of any correction.',
        'Refused the suggestion that the agreement had lapsed.',
        'Proposed a procedural step that settles the record.'],
 a=[('What do you state first?', 'the agreed words: to consult where practicable'),
    ('What do you refuse to rely on?', 'recollection, yours or theirs'),
    ('What document do you cite?', 'the confirming letter sent that night'),
    ('What makes it strong?', 'it was never corrected'),
    ('What conclusion must you refuse?', 'that there was no agreement at all'),
    ('What do you propose?', 'that both letters be circulated')]),

rev_fig=figs.split('AN AGREED CONCLUSION',
                   'Is',
                   ['the same words in both records',
                    'quoted, with the source named',
                    'confirmed in writing within a day',
                    'uncorrected by the other side'],
                   'Is not',
                   ['a tidier version of the words',
                    'a point in your notes alone',
                    'a reconciliation of two wordings',
                    'what you clearly remember']),
rev_fig_cap='Four tests on the left. Anything on the right is a question, and questions go in letters.',
rev=dict(
 read=[('How many points came back?',
        ['nine', 'six', 'two', 'four'], 0),
       ('Which words were dropped?',
        ['where practicable', 'before any change', 'the parties', 'of schedule'], 0),
       ('How many points were in both records?',
        ['six', 'nine', 'two', 'none'], 0),
       ('When should a confirming letter go?',
        ['the same night', 'on Monday', 'after six weeks', 'at the next round'], 0)],
 listen_text='Quote each point exactly from the source in which it appears and name the '
             'source. Do not reword anything for readability. List separately every point that '
             'appears in only one record, and send those as questions.',
 listen=[('Quote each point exactly and name the ____________.', 'source'),
         ('Do not ____________ anything for readability.', 'reword'),
         ('List separately every point in only one ____________.', 'record'),
         ('And send those as ____________.', 'questions')],
 speak=['Make nine formal requests using requests that, proposes that and it is essential that.',
        'Then list six things you believe you agreed and say where the words exist in writing.'],
 write='Write a six-line tasking for a record of agreed conclusions.',
 vocab=[('A different memory of what was agreed is a ____________ recollection.', 'divergent'),
        ('A record accepted by both sides is an agreed ____________.', 'minute'),
        ('Wording both sides expressly accepted is an agreed form of ____________.', 'words'),
        ('An attachment whose wording is not accepted is an ____________ annex.', 'unagreed')],
 gram=[('The delegation requests that the text ____________ circulated.', 'be'),
       ('We propose that the annex ____________ reopened.', 'be'),
       ('It is necessary that each delegation ____________ its own minute.', 'keep'),
       ('The delegation requests that the paragraph not ____________ reopened.', 'be')]),

found=['Record an agreed point only as an exact quotation, with its source named.',
       'Send a confirming letter the same night, in the words that were agreed.',
       'Put anything only you remember in a separate paragraph, as a question.',
       'Where two records differ, quote both and reconcile neither.'],
end_line='The agreement is the words. Everything else is what somebody remembers.',
end_next='Book 6: Speaking for the Country')
