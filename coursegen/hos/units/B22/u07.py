# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='A Consultation on Closing Something',
gram='a consultation: the proposal, the alternatives, the deadline',
ai='a consultation document drafted with alternatives that are real',
strap='CEFR B2 · Grammar: a consultation: the proposal, the alternatives, the deadline · '
      'AI: a consultation document drafted with alternatives that are real',
cando=['write a proposal as a question rather than a conclusion',
       'include alternatives the organisation would actually accept',
       'say what has already been decided and is out of scope',
       'give a reason for refusing an alternative',
       'write a six-line tasking for a consultation document'],

hero=('AN ALTERNATIVE YOU WOULD REFUSE IS NOT AN ALTERNATIVE.',
      ['Three options, two of them impossible,',
       'is one option with decoration.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Twelve weeks, three options, and one of them the organisation would accept.',

warm=['What was the last consultation you read?',
      'Which option did it want?',
      'Would it have accepted any of the others?'],

vocab=[
 ('a proposal written as a question', 'a proposal that can be answered'),
 ('a proposal written as a conclusion', 'a proposal that invites only objection'),
 ('an alternative that is genuinely possible', 'an option the organisation would accept'),
 ('an alternative included to look fair', 'an option that damages the whole document'),
 ('a do nothing option in a consultation', 'the comparator that must be costed'),
 ('a deadline of twelve weeks', 'the period the law or policy requires'),
 ('a deadline nobody can meet', 'a period that makes the exercise a formality'),
 ('a group that will be affected most', 'the group whose response you must seek'),
 ('a group that will not respond', 'the group you must go and find'),
 ('a response from an organisation', 'a response with resources behind it'),
 ('a response from one person', 'a response that may carry the decisive point'),
 ('a response that changes the proposal', 'the evidence a consultation was real'),
 ('a response that is recorded and refused', 'the response that needs a reason'),
 ('a report on what people said', 'the account of the responses'),
 ('a report on what we decided', 'the account of the decision'),
 ('an equality consideration', 'the analysis required by law'),
 ('a decision taken before the consultation closed', 'the failure that voids the exercise'),
 ('a decision taken after it', 'a decision capable of being influenced'),
 ('a reason given for not accepting an alternative', 'the sentence that proves you read it'),
 ('a letter to everybody who responded', 'the courtesy that makes the next one possible')],

read=[
 'The consultation document offers three options: close the unit, close the unit '
 'with a longer transition, and retain the unit at a cost the organisation has '
 'already said it cannot fund.',
 'That is one option with two pieces of decoration, and every reader who has seen '
 'a consultation before will recognise it within a page.',
 'An alternative belongs in a consultation only if the organisation would accept '
 'it. If retaining the unit is genuinely impossible, say so, say why, and do not '
 'list it as an option.',
 'Say also what has already been decided and is therefore outside the exercise. A '
 'consultation that invites views on a settled matter produces responses that '
 'cannot be answered and a reputation that cannot be repaired.',
 'And where you refuse an alternative that was proposed in a response, give the '
 'reason. The sentence that proves a consultation was real is the sentence '
 'explaining why a particular suggestion was not adopted.'],

dp1=('Consultation', 'Consultation guidance commonly recommends presenting '
     'options the decision-maker would be prepared to adopt, stating what has '
     'already been decided, costing a do-nothing comparator, allowing an adequate '
     'period, and reporting reasons for rejecting suggestions. Statutory duties '
     'are set by law.',
     'Source: general public consultation guidance, 2025–2026.'),

c_a=[('What three options are offered?', 'closure, closure with a longer transition, and retention at an unfundable cost'),
     ('What is it in reality?', 'one option with two pieces of decoration'),
     ('When does an alternative belong in a consultation?', 'only if the organisation would accept it'),
     ('What is said about a settled matter?', 'that it is outside the exercise'),
     ('What does a consultation on a settled matter produce?', 'unanswerable responses and a damaged reputation'),
     ('What proves a consultation was real?', 'the reason given for not adopting a suggestion')],

c_b=[('Three genuine options are offered.', 'F'),
     ('Readers recognise decorative options quickly.', 'T'),
     ('An unfundable option should be listed as an option.', 'F'),
     ('What is already decided is stated.', 'T'),
     ('A do-nothing comparator is costed.', 'T'),
     ('Reasons are given for refusing suggestions.', 'T')],

c_c=[('We ____________ asking whether the unit should close in June or in September.', 'are'),
     ('The board ____________ decided that the unit will close.', 'has'),
     ('That decision ____________ outside this consultation.', 'is'),
     ('Retention ____________ cost about two million a year.', 'would'),
     ('Which we ____________ fund without closing two others.', 'cannot'),
     ('The consultation ____________ for twelve weeks.', 'runs')],

c_d=[('Write the proposal as ( a conclusion / a question ).', ['a conclusion', 'a question'], 1),
     ('Include only alternatives you ( would accept / can describe ).',
      ['would accept', 'can describe'], 0),
     ('State ( what is already decided / only what is open ).',
      ['what is already decided', 'only what is open'], 0),
     ('Cost ( the do-nothing option / the preferred option only ).',
      ['the do-nothing option', 'the preferred option only'], 0),
     ('Give ( a reason for refusing a suggestion / a summary of responses ).',
      ['a reason for refusing a suggestion', 'a summary of responses'], 0)],

c_e=('A real alternative, decoration, out of scope or a required analysis? Decide '
     'what each is.',
     [('closure in September rather than June', 'a real alternative'),
      ('retention at a cost already refused', 'decoration'),
      ('whether the unit closes at all', 'out of scope'),
      ('the effect on patients without a car', 'a required analysis'),
      ('transferring two clinics to the health centre', 'a real alternative'),
      ('whether the hospital should exist', 'out of scope')],
     ['a real alternative', 'decoration', 'out of scope',
      'a required analysis']),

v_fig_title='SIX WORDS OF A CONSULTATION',
v_fig=[('doc', 'a proposal written as a question'), ('key', 'an alternative that is genuinely possible'),
       ('scale', 'a do nothing option in a consultation'),
       ('people', 'a group that will not respond'),
       ('clock', 'a deadline of twelve weeks'),
       ('note', 'a reason given for not accepting an alternative')],
v_fig_cap='Six words for twelve weeks and three options.',

v_a=[('A proposal that invites only objection is a proposal written as a ____________.', 'conclusion'),
     ('An option that damages the whole document is an alternative included to look ____________.', 'fair'),
     ('A period that makes the exercise a formality is a deadline nobody can ____________.', 'meet'),
     ('The group you must go and find is a group that will not ____________.', 'respond'),
     ('A response that may carry the decisive point is a response from one ____________.', 'person'),
     ('The evidence a consultation was real is a response that ____________ the proposal.', 'changes'),
     ('The failure that voids the exercise is a decision taken ____________ the consultation closed.', 'before'),
     ('The courtesy that makes the next one possible is a letter to everybody who ____________.', 'responded')],

v_b=[('A do nothing option in a consultation is the comparator', 'that must be costed.'),
     ('A group that will be affected most is the group', 'whose response you must seek.'),
     ('A response that is recorded and refused is the response', 'that needs a reason.'),
     ('An equality consideration is the analysis', 'required by law.'),
     ('A decision taken after it is a decision', 'capable of being influenced.')],

g_title='Grammar: a consultation: the proposal, the alternatives, the deadline',
g_rule=['Write the proposal as a question with whether: we are asking whether the '
        'unit should close in June or in September. The form admits that the '
        'answer is not yet settled.',
        'Mark what is settled with has decided and is outside: the board has '
        'decided that the unit will close; that decision is outside this '
        'consultation.',
        'Cost a refused option rather than omitting it: retention would cost about '
        'two million a year, which we cannot fund without closing two other '
        'services.',
        'Give reasons for refusal in the response report with we have not adopted '
        'and because: we have not adopted the suggestion of a weekend clinic '
        'because the staffing required is not available in this district.'],
g_fig=('LOOSE',
       ['We are consulting on proposals for the future of local services.',
        'A number of options have been considered in developing this proposal.',
        'We welcome views from all interested parties on the way forward.',
        'All responses will be carefully considered before a decision is taken.'],
       'PRECISE',
       ['We are asking whether the unit should close in June or in September.',
        'The board has decided that the unit will close; that decision is outside this consultation.',
        'Retention would cost about two million a year, which we cannot fund without closing two other services.',
        'The consultation closes on the eleventh of March and the board will decide on the twenty-ninth.'],
       'four sentences that produce unanswerable responses',
       'four sentences that produce usable ones'),
g_fig_cap='We are asking whether. Has decided; is outside. Would cost. Closes on; will decide on.',

g_a=[('We ____________ asking whether the unit should close in June.', 'are'),
     ('____________ in September.', 'Or'),
     ('The board ____________ decided that the unit will close.', 'has'),
     ('That decision ____________ outside this consultation.', 'is'),
     ('Retention ____________ cost about two million a year.', 'would'),
     ('Which we cannot fund ____________ closing two other services.', 'without'),
     ('The consultation ____________ on the eleventh of March.', 'closes'),
     ('And the board will decide ____________ the twenty-ninth.', 'on'),
     ('We ____________ not adopted the weekend clinic suggestion.', 'have')],

g_b=[('( we are asking whether the unit should close in June or September / we are consulting on proposals ) — the proposal.', ['we are asking whether the unit should close in June or September', 'we are consulting on proposals'], 0),
     ('( the board has decided the unit will close; that is outside this consultation / a number of options have been considered ) — the scope.',
      ['the board has decided the unit will close; that is outside this consultation', 'a number of options have been considered'], 0),
     ('( retention would cost two million, which we cannot fund / retention was considered and discounted ) — the refused option.',
      ['retention would cost two million, which we cannot fund', 'retention was considered and discounted'], 0),
     ('( closes on the eleventh, decision on the twenty-ninth / responses will be considered in due course ) — the dates.',
      ['closes on the eleventh, decision on the twenty-ninth', 'responses will be considered in due course'], 0),
     ('( we have not adopted the weekend clinic because the staffing is unavailable / all responses were carefully considered ) — the reason.',
      ['we have not adopted the weekend clinic because the staffing is unavailable', 'all responses were carefully considered'], 0),
     ('( two options, both of which we would accept / three options, one of them fundable ) — the honesty.',
      ['two options, both of which we would accept', 'three options, one of them fundable'], 0)],

d1=dict(
 title='Three options and one of them real',
 fig=(['Three options.', 'One fundable.'],
      ['Two options.', 'Both acceptable.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, over a draft consultation.',
 lines=[('Siobhán', 'Three options: close in June, close in September, or retain with investment.'),
        ('Margarida', 'Would we accept the third?'),
        ('Siobhán', 'No. It costs two million a year and the board refused it in March.'),
        ('Margarida', 'Then it is not an option and listing it is the worst thing in this document.'),
        ('Siobhán', 'It demonstrates that we considered retention.'),
        ('Margarida', 'It demonstrates that we are willing to invite people to argue for something we have already refused, and they will spend their evenings doing it.'),
        ('Siobhán', 'If we remove it, the consultation has two options that differ by three months.'),
        ('Margarida', 'Then that is the consultation, and we say so plainly: the closure is decided, the timing is not, and here is what each timing costs.'),
        ('Siobhán', 'That is a very small consultation.'),
        ('Margarida', 'It is an honest one. And we add the retention cost in full, with the board’s March decision, so that anybody who wants to challenge the closure knows exactly where to challenge it.'),
        ('Siobhán', 'Somebody will say we have narrowed it deliberately.'),
        ('Margarida', 'We have narrowed it accurately, which is the only defence either of us will have in a year.')],
 a=[('What are the three options?', 'close in June, close in September, or retain with investment'),
    ('Would the third be accepted?', 'no; it costs two million and was refused in March'),
    ('Why is listing it the worst thing?', 'because it invites people to argue for something already refused'),
    ('What does the consultation become?', 'two options differing by three months'),
    ('What is added?', 'the retention cost in full, with the board’s March decision')],
 b=[('Would we ____________ the third?', 'accept'),
    ('They will spend their ____________ doing it.', 'evenings'),
    ('The closure is decided, the ____________ is not.', 'timing'),
    ('We have narrowed it ____________.', 'accurately')]),

d2=dict(
 title='The decision taken in week nine',
 fig=(['Twelve-week consultation.', 'Decision in week nine.'],
      ['Responses unread.', 'Exercise void.']),
 cap='Margarida Pires and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'The Elmfield consultation ran for twelve weeks and the contract was signed in week nine.'),
        ('Margarida', 'Which means the last three weeks of responses were read by nobody who could act on them.'),
        ('Peter', 'The executive says the signature was administratively necessary.'),
        ('Margarida', 'It may have been. The effect is that forty-one people wrote to us after the decision had been taken and nobody told them.'),
        ('Peter', 'Could it be challenged?'),
        ('Margarida', 'It could, and the challenge would succeed, and the remedy would be to do the whole thing again.'),
        ('Peter', 'What do we tell the forty-one?'),
        ('Margarida', 'That the decision was taken on the ninth of February, before their responses were received, that this was wrong, and that we are reopening the decision for four weeks.'),
        ('Peter', 'Reopening it will delay the project by a quarter.'),
        ('Margarida', 'A quarter is what an invalid consultation costs. The alternative is to defend it, lose, and spend a year.'),
        ('Peter', 'Who should have noticed in week nine?'),
        ('Margarida', 'I should. The consultation was mine, and nobody asked me whether the contract could be signed, because nobody connected the two.')],
 unresolved=True,
 a=[('When was the contract signed?', 'in week nine of a twelve-week consultation'),
    ('What does that mean for the last three weeks?', 'the responses were read by nobody who could act'),
    ('How many people wrote afterwards?', 'forty-one'),
    ('What does Margarida propose?', 'telling them, admitting it was wrong, and reopening for four weeks'),
    ('Who should have noticed?', 'Margarida, because the consultation was hers')],
 b=[('Read by nobody who could ____________ on them.', 'act'),
    ('The decision was taken on the ____________ of February.', 'ninth'),
    ('We are ____________ the decision for four weeks.', 'reopening'),
    ('Nobody ____________ the two.', 'connected')]),

speak=[('Would you accept it',
        ['Your partner gives you six consultation options.',
         'Say which the organisation would actually accept.',
         'Three each, then swap.']),
       ('Outside this consultation',
        ['Your partner gives you six settled matters.',
         'State each as decided and out of scope, with its date.',
         'Three each, then swap.']),
       ('Because',
        ['Your partner proposes six suggestions you must refuse.',
         'Give a reason for each refusal.',
         'Three each, then swap.'])],

ext_title='A consultation document drafted with alternatives that are real',
ext_fig=figs.datatable('WHAT THE DOCUMENT CARRIES',
                       ['Line', 'Content'],
                       [['the proposal', 'as a question, with whether'],
                        ['the alternatives', 'only those you would accept'],
                        ['the refused options', 'costed, with the decision date'],
                        ['what is settled', 'stated as outside the scope'],
                        ['the dates', 'closing date and decision date'],
                        ['the analysis', 'the equality consideration required']]),
ext_fig_cap='Six lines, and the second one is where consultations are lost.',
ext=[
 'A consultation document drafted with alternatives that are real produces '
 'responses an organisation can act on rather than evenings of wasted effort.',
 'Give it the decision already taken with its date, the options the organisation '
 'would genuinely accept, the cost of every option including doing nothing, the '
 'groups most affected, and the statutory period.',
 'Ask it to remove every option the organisation would refuse, and to state the '
 'cost of each removed option with the date of the decision refusing it.',
 'Ask for the proposal to be phrased as a question, because a proposal phrased as '
 'a conclusion produces objection rather than information.',
 'Ask for the closing date and the decision date in the same sentence, so that '
 'nobody can take the decision before the responses are in.',
 'What it cannot do is go and find the people who will not respond. The group most '
 'affected by a closure is usually the group least likely to write a letter, and '
 'somebody has to go to them.'],

dp2=('Consultation practice', 'Consultation literature commonly reports that '
     'options the decision-maker would not accept reduce confidence in the whole '
     'exercise, that decisions taken before a consultation closes are frequently '
     'successfully challenged, and that groups most affected respond least.',
     'Source: general public consultation literature, 2025–2026.'),

e_a=[('What does the document produce?', 'responses an organisation can act on'),
     ('What five things are given to it?', 'the decision taken with its date, the acceptable options, the costs including doing nothing, the groups most affected and the statutory period'),
     ('What is removed?', 'every option the organisation would refuse'),
     ('How is the proposal phrased?', 'as a question'),
     ('Which two dates appear together?', 'the closing date and the decision date')],
e_b=[('Options that would be refused are removed.', 'T'),
     ('Removed options are costed with their refusal date.', 'T'),
     ('It visits the groups who will not respond.', 'F'),
     ('The closing and decision dates appear together.', 'T'),
     ('Unacceptable options reduce confidence.', 'T'),
     ('The most affected groups respond most.', 'F')],

w_model='Purpose: so that a consultation produces responses we can act on and '
       'survives being challenged. Scope: consultations on operational and service '
       'change that I run; statutory consultation duties are advised on by the '
       'legal team, clinical options are specified by the medical director, and I '
       'present no option the board would refuse. Inputs: the decision already '
       'taken with its date, the options the organisation would genuinely accept, '
       'the cost of every option including doing nothing, the groups most affected '
       'with how they can be reached, the statutory period, and the date the '
       'decision will be taken. Criteria: the proposal phrased as a question; only '
       'options we would accept presented as options; every refused option costed '
       'with the date it was refused; the settled decision stated as outside the '
       'scope; the closing date and the decision date in the same sentence; and '
       'the equality analysis attached. Done: published for the full period, with '
       'direct contact made with the groups least likely to respond, and a '
       'response report giving reasons for every suggestion not adopted. Fallback: '
       'where a decision has been taken before the consultation closed, I say so, '
       'reopen the decision, and write to everybody who responded.',
w_fig=figs.spec_card('SIX LINES FOR A CONSULTATION',
                     [('Purpose', 'usable responses, and survives challenge'),
                      ('Scope', 'service consultations I run; no options we would refuse'),
                      ('Inputs', 'the decision, acceptable options, costs, groups, dates'),
                      ('Criteria', 'a question, real options, refused ones costed'),
                      ('Done', 'full period, the hard-to-reach contacted, reasons given'),
                      ('Fallback', 'decided early: say so and reopen it')]),
w_fig_cap='Six lines, and the sixth one costs a quarter and saves a year.',
w_task='Write a six-line tasking for a consultation document.',
w_steps=['Line 1: say what the consultation must produce and survive.',
         'Line 2: say which consultations are yours, and what you may not present.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the document must contain and exclude.',
         'Line 5: say how it is published and reported.',
         'Line 6: say what you do when a decision was taken early.'],
w_bank=['Purpose: so that a consultation produces responses we can act on and survives being challenged',
        'Scope: consultations on operational and service change that I run; statutory duties are advised on by the legal team and I present no option the board would refuse',
        'Inputs: the decision already taken with its date, the options we would genuinely accept, the cost of every option including doing nothing, the groups most affected with how they can be reached, the statutory period, and the decision date',
        'Criteria: the proposal as a question; only options we would accept presented as options; every refused option costed with the date it was refused; the settled decision stated as outside the scope; the closing and decision dates in one sentence; the equality analysis attached',
        'Done: published for the full period, with direct contact made with the groups least likely to respond, and a response report giving reasons for every suggestion not adopted',
        'Fallback: where a decision has been taken before the consultation closed, I say so, reopen the decision, and write to everybody who responded'],
w_check=['Is the proposal a question?',
         'Are all listed options ones you would accept?',
         'Is the settled decision marked out of scope?',
         'Are both dates in one sentence?'],

t_title='A consultation document drafted with alternatives that are real',
t_fig=figs.split('THREE OPTIONS AND ONE REAL',
                 'It can draft',
                 ['the proposal as a question',
                  'the acceptable options',
                  'the costed refusals',
                  'the scope statement'],
                 'It must not supply',
                 ['an option we would refuse',
                  'the people who will not write',
                  'the decision itself',
                  'the courage to narrow it']),
t_fig_cap='It drafts the document. Going to find the silent groups is the work.',
t_body=[
 'Give it the decision already taken with its date, the options you would accept, '
 'the costs including doing nothing and the groups most affected.',
 'A consultation document drafted with alternatives that are real removes every '
 'option the organisation would refuse.',
 'Then ask for the closing date and the decision date in one sentence.'],
t_say=[('We are asking whether: ', 'The unit closes in June or September.'),
       ('Outside this consultation: ', 'The decision to close, taken in March.'),
       ('Retention would cost: ', 'Two million a year, refused in March.')],
t_bound='It cannot go and find the people who will not write a letter, and they '
        'are usually the people a closure affects most.',
t_a=[('Give it the decision already ____________.', 'taken'),
     ('And the options you would ____________.', 'accept'),
     ('And the costs including doing ____________.', 'nothing'),
     ('Remove every option we would ____________.', 'refuse'),
     ('And cost each ____________ option.', 'refused'),
     ('And put both ____________ in one sentence.', 'dates')],
t_b_rubric='Say what the consultation work should do with each item.',
t_b=[('an option refused by the board in March', 'remove it and cost it with the date'),
     ('“we are consulting on proposals”', 'phrase the proposal as a question'),
     ('a settled decision presented as open', 'state it as outside the scope'),
     ('a group that never responds', 'make direct contact with them')],

case=dict(
 title='The Decision Room · The option nobody would have funded',
 brief=[
  'A hospital ran service consultations presenting three options, one of which was '
  'invariably a retention option at a cost the board had already refused.',
  'Over five years, 9 consultations were run. In 7 a retention option was '
  'presented that the board had previously refused on cost. Those 7 attracted a '
  'mean of 212 responses, of which a mean of 148 argued for the refused option. 2 '
  'consultations were challenged, and in 1 case a decision taken before the '
  'closing date was quashed. 3 of 9 consultations included direct contact with the '
  'most affected group.',
  'A rule was introduced that only options the board would accept are presented, '
  'with refused options costed and dated. Responses fell to a mean of 94, of which '
  'a mean of 71 addressed the actual question.'],
 exhibit=figs.datatable('FIVE YEARS OF CONSULTATIONS',
                        ['Item', 'Before / After'],
                        [['consultations run', '9 / 8'],
                         ['presenting a previously refused option', '7 / 0'],
                         ['mean responses', '212 / 94'],
                         ['mean responses addressing the question', '64 / 71'],
                         ['challenges', '2 / 0'],
                         ['direct contact with the most affected group', '3 of 9 / 8 of 8']]),
 exhibit_cap='Half the responses, and more of them about the question actually asked.',
 exhibit_note='A mean of a hundred and forty-eight responses to each consultation '
              'argued for an option the board had already refused on cost, and '
              'every one of those letters was written for nothing.',
 voices=[('A director', 'about presenting retention',
          'Leaving retention out of the document looks as though we never considered keeping the service.'),
         ('Margarida Pires', 'director of corporate affairs',
          'A hundred and forty-eight people a time wrote to us arguing for something the board had refused, and we knew it when we published.'),
         ('A campaign organiser', 'about the exercise',
          'We spent eleven weeks making the case for retention. It was never on the table and they knew that in week one.')],
 steps=[('Find it', 'How many consultations presented a refused option?'),
        ('Compare it', 'Responses received against responses on the question.'),
        ('Infer it', 'Why did a decorative option damage the exercise?'),
        ('Weigh it', 'Appearing open-minded against a hundred and forty-eight wasted letters.'),
        ('Decide', 'What options may appear in a consultation?')],
 analysis=[('Find it. How many?', '7 of 9'),
           ('Compare it. How many on the question?', 'a mean of 64 out of 212'),
           ('Infer it. Why the damage?', 'because people spent weeks arguing for something already refused'),
           ('Weigh it. What was traded?', 'the appearance of open-mindedness for a hundred and forty-eight wasted letters each time'),
           ('Decide. What may appear?', 'only options the decision-maker would accept')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say which options may be presented.',
                 'Say how refused options are handled.',
                 'Say what is said about settled decisions.',
                 'Say what happens about the groups most affected.'],
 bank=['A consultation presents only those options which the decision-maker would be prepared to adopt.',
       'Any option previously refused is set out with its cost and the date of the decision refusing it, and is not presented as an option.',
       'Any matter already decided is identified as such, with the date of the decision, and is stated to be outside the scope of the consultation.',
       'Direct contact is made during every consultation with the group most affected by the proposal, and the method and response are recorded.'],
 outcome='The hospital adopts the four lines. Consultations presenting a '
         'previously refused option fall from seven to none, mean responses fall '
         'from two hundred and twelve to ninety-four while responses addressing '
         'the question rise from sixty-four to seventy-one, challenges fall from '
         'two to none, and direct contact with the most affected group rises from '
         'three consultations to all eight.',
 outcome_q=[('What happened to refused options?', 'they no longer appear as options'),
            ('What happened to responses on the question?', 'they rose from sixty-four to seventy-one'),
            ('What happened to challenges?', 'there were none'),
            ('What happened to direct contact?', 'it rose from three consultations to all eight'),
            ('How many responses argued for the refused option before?', 'a mean of a hundred and forty-eight')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Consulting on proposals for the future',
 task=['This was the opening of a consultation document on a ward closure.',
       'This is what it said.'],
 draft=['We are consulting on proposals for the future of local services.',
        'A number of options have been considered in developing this proposal.',
        'Option three would retain the current service with additional investment.',
        'We welcome views from all interested parties on the way forward.',
        'All responses will be carefully considered before a decision is taken.',
        'The consultation will run for a period of several weeks.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of consultation offering an option the board refused in March.',
 asked=['proposals for the future', 'a number of options',
        'a period of several weeks'],
 back=['7 of 9 consultations presenting a refused option',
       'a mean of 148 responses arguing for it', '2 challenges'],
 gap='Nobody could tell what question was being asked, which options were real, what was already decided, or when the decision would be taken.',
 back_cap='Six lines that will produce a hundred and forty-eight letters nobody can act on.',
 back_note='“Option three would retain the current service” described a cost the '
           'board had refused eleven weeks before publication.',
 diagnosis=[('“proposals for the future of local services”', 'unscoped set'),
            ('“all interested parties”', 'unscoped set'),
            ('“a number of options”', 'unbounded quantity'),
            ('“several weeks”', 'unbounded quantity'),
            ('“option three would retain the service”', 'hidden assumption'),
            ('“carefully considered”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the responses can be acted on.',
 scaffold=['what the consultation must produce and survive',
           'which consultations are yours, and what you may not present',
           'what you are giving it',
           'what the document must contain and exclude',
           'how it is published and reported',
           'what you do when a decision was taken early'],
 bank=['Purpose: so that a consultation produces responses we can act on and survives being challenged',
       'Scope: consultations on operational and service change that I run; statutory consultation duties are advised on by the legal team, clinical options are specified by the medical director, and I present no option the board would refuse',
       'Inputs: the decision already taken with its date, the options the organisation would genuinely accept, the cost of every option including doing nothing, the groups most affected with how they can be reached, the statutory period, and the date the decision will be taken',
       'Criteria: the proposal phrased as a question; only options we would accept presented as options; every refused option costed with the date it was refused; the settled decision stated as outside the scope; the closing date and the decision date in the same sentence; and the equality analysis attached',
       'Done: published for the full period, with direct contact made with the groups least likely to respond, and a response report giving reasons for every suggestion not adopted',
       'Fallback: where a decision has been taken before the consultation closed, I say so, reopen the decision, and write to everybody who responded'],
 check=['Is the proposal a question?',
        'Is the refused option removed and costed?',
        'Is the settled decision marked?',
        'Are both dates given?'],
 model=['so that a consultation produces responses we can act on and survives being challenged',
        'consultations on operational and service change that I run; statutory consultation duties are advised on by the legal team, clinical options are specified by the medical director, and I present no option the board would refuse',
        'the decision already taken with its date, the options the organisation would genuinely accept, the cost of every option including doing nothing, the groups most affected with how they can be reached, the statutory period, and the date the decision will be taken',
        'the proposal phrased as a question; only options we would accept presented as options; every refused option costed with the date it was refused; the settled decision stated as outside the scope; the closing date and the decision date in the same sentence; and the equality analysis attached',
        'published for the full period, with direct contact made with the groups least likely to respond, and a response report giving reasons for every suggestion not adopted',
        'where a decision has been taken before the consultation closed, I say so, reopen the decision, and write to everybody who responded'],
 cost='7 of 9 consultations offering a refused option, 148 responses a time arguing for it, and 2 challenges.'),

lang=dict(
 title='The Unwelcome Number · Removing the option a campaign has been arguing for',
 setting=[
  'The draft consultation lists retention as option three. The board refused that '
  'cost in March, and a local campaign has already begun preparing its case for '
  'it.',
  'Margarida intends to remove the option and say why, knowing that the campaign '
  'will read the removal as closing down debate.'],
 ladder=[('A campaign preparing a case', 'for an option already refused'),
         ('A hundred and forty-eight letters', 'written for nothing last time'),
         ('Either keep the option', 'or remove it and publish the refusal')],
 cap='Three options, one fundable, and eleven weeks of somebody’s evenings.',
 turns=[('Turn 1 · Margarida', 'Option three is coming out, and the document will say that the board refused that cost on the ninth of March.'),
        ('Turn 2 · Adviser', 'The campaign will say we have closed down the debate before it started.'),
        ('Turn 3 · Margarida', 'Last time a hundred and forty-eight people argued for an option we had already refused, and we let them.')],
 holds=['The refusal and its cost will be published in full, so the campaign can challenge the refusal itself.',
        'Challenging the refusal is a better use of eleven weeks than arguing for an option nobody will fund.',
        'The commissioner’s address and the board’s own route are in the document.',
        'Two of our last nine consultations were challenged, and the one that failed had an option like this in it.',
        'I shall meet the campaign before publication and tell them this to their faces.',
        'And if they can show the board a funding route we have missed, the refusal can be revisited and I shall say so in the document.'],
 redline='Never consult on an option the organisation would refuse, and never let '
         'people spend eleven weeks arguing for something already decided.',
 score=['Stated the removal and the reason first.',
        'Gave the figure for wasted letters.',
        'Published the refusal for challenge.',
        'Offered to meet the campaign in advance.',
        'Left a route by which the refusal could be revisited.'],
 a=[('What is removed?', 'option three, retention'),
    ('What will the document say?', 'that the board refused that cost on the ninth of March'),
    ('How many argued for a refused option last time?', 'a hundred and forty-eight'),
    ('What can the campaign challenge instead?', 'the refusal itself'),
    ('What will Margarida do before publication?', 'meet the campaign and tell them in person'),
    ('What is the redline?', 'never consult on an option the organisation would refuse')]),

rev_fig=figs.split('A CONSULTATION',
                   'Say',
                   ['we are asking whether the unit closes in June or September',
                    'the board has decided it will close; that is outside this consultation',
                    'retention would cost two million, refused on the ninth of March',
                    'the consultation closes on the eleventh; the board decides on the twenty-ninth'],
                   'Never say',
                   ['we are consulting on proposals for the future',
                    'a number of options have been considered',
                    'we welcome views from all interested parties',
                    'responses will be carefully considered']),
rev_fig_cap='Four sentences that produce usable responses, and four that waste eleven weeks.',
rev=dict(
 read=[('What are the three options in the draft?',
        ['closure in June, closure in September, retention',
         'closure, transfer, retention',
         'retention, investment, transfer',
         'closure, consultation, review'], 0),
       ('When does an alternative belong in a consultation?',
        ['only if the organisation would accept it',
         'if it has been considered',
         'if somebody has proposed it',
         'if it is affordable in principle'], 0),
       ('What does a consultation on a settled matter produce?',
        ['responses that cannot be answered', 'useful information',
         'a stronger decision', 'a shorter process'], 0),
       ('What proves a consultation was real?',
        ['the reason given for not adopting a suggestion',
         'the number of responses',
         'the length of the period',
         'the size of the document'], 0)],
 listen_text='Give it the decision already taken with its date, the options you '
             'would accept, the costs including doing nothing and the groups most '
             'affected. Remove every option you would refuse.',
 listen=[('Give it the decision already ____________.', 'taken'),
         ('And the options you would ____________.', 'accept'),
         ('And the costs including doing ____________.', 'nothing'),
         ('Remove every option we would ____________.', 'refuse')],
 speak=['Say which of six options an organisation would actually accept.',
        'Then give reasons for refusing six suggestions.'],
 write='Write a six-line tasking for a consultation document.',
 vocab=[('A proposal that can be answered is a proposal written as a ____________.', 'question'),
        ('The period the law or policy requires is a deadline of twelve ____________.', 'weeks'),
        ('A response with resources behind it is a response from an ____________.', 'organisation'),
        ('The account of the decision is a report on what we ____________.', 'decided')],
 gram=[('We ____________ not adopted the weekend clinic suggestion.', 'have'),
       ('And the board will decide ____________ the twenty-ninth.', 'on'),
       ('Which we cannot fund ____________ closing two other services.', 'without'),
       ('____________ in September.', 'Or')]),

found=['Phrase the proposal as a question.',
       'Present only options you would accept, and cost the ones you refuse.',
       'State what is already decided and out of scope, with its date.',
       'Give a reason for every suggestion you do not adopt.'],
end_line='A hundred and forty-eight people a time argued for an option the board had already refused, and every one of those letters was written for nothing.',
end_next='Next: A Workforce Plan for Five Years')
