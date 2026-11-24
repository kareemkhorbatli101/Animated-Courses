# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='Somebody Raising a Concern About the Organisation',
gram='receiving a concern about the organisation itself',
ai='a concern about the organisation received, recorded and routed',
strap='CEFR B2 · Grammar: receiving a concern about the organisation itself · '
      'AI: a concern about the organisation received, recorded and routed',
cando=['receive a concern without defending the organisation first',
       'route a concern away from the people it is about',
       'say what you can and cannot promise about identity',
       'watch for detriment after somebody has spoken up',
       'write a six-line tasking for receiving a concern'],

hero=('THE FIRST SENTENCE DECIDES WHETHER ANYBODY SPEAKS AGAIN.',
      ['Defend the organisation in that sentence',
       'and you have closed the subject for a decade.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='One concern, one route away from you, and six months of watching afterwards.',

warm=['Who would somebody tell where you work?',
      'What would happen next?',
      'What has somebody raised that turned out to be right?'],

vocab=[
 ('a concern about the organisation itself', 'a concern no manager inside it can own alone'),
 ('a concern about a colleague', 'a concern needing a different route'),
 ('a concern raised anonymously', 'information you can act on but not clarify'),
 ('a concern raised openly', 'a person who has taken a risk in person'),
 ('a person who fears being identified', 'somebody whose fear is itself evidence'),
 ('a person who has already been identified', 'somebody now needing protection'),
 ('a protected disclosure', 'a disclosure with legal protection attached'),
 ('a route outside the line management', 'the only route that works for some concerns'),
 ('a named freedom to speak up guardian', 'a person independent of the line'),
 ('a regulator the person may go to', 'the route you must tell them exists'),
 ('a concern you must not investigate yourself', 'a concern about your own service or team'),
 ('a concern that must go to the board', 'a concern about the organisation’s systems'),
 ('a thing you must tell the person who raised it', 'what will happen, and when'),
 ('a thing you must not promise them', 'that nobody will ever know who they are'),
 ('a detriment you must watch for', 'a rota change, an exclusion, a cooled relationship'),
 ('a record of who knew and when', 'the trail that protects the person'),
 ('a concern that turns out to be wrong', 'a concern that must still be welcomed'),
 ('a concern that turns out to be right', 'the reason the route exists'),
 ('a culture in which nobody raises anything', 'the most dangerous state an organisation can reach'),
 ('a thank you that is meant', 'the sentence people remember years later')],

read=[
 'A staff nurse asks to see you and says that the escalation area is being used '
 'in a way she believes to be unsafe, and that she has raised it twice with her '
 'own ward manager.',
 'The first sentence you say will be remembered for ten years. If it defends the '
 'organisation, explains the pressures or corrects her language, she will not come '
 'back, and nor will the four people she talks to.',
 'So the first sentence is thank you, the second asks what she would like to '
 'happen, and the third is an honest statement of what you can and cannot do '
 'about her identity.',
 'You may not promise that nobody will know who she is: the concern names her own '
 'ward manager, and investigating it will make her identifiable whatever is '
 'written down.',
 'And because the concern is about a decision you were part of, it cannot be '
 'investigated by you. It goes to the guardian and to the board, and you tell her '
 'that in the room, not afterwards.'],

dp1=('Speaking up', 'Guidance on raising concerns commonly recommends routes '
     'independent of line management, named guardians, written confirmation of '
     'what will happen, protection from detriment, and escalation to the board or '
     'a regulator where the concern relates to the organisation itself. Legal '
     'protections are set by law and by the organisation’s own policy.',
     'Source: general healthcare governance guidance, 2025–2026.'),

c_a=[('What has the nurse raised?', 'that the escalation area is being used in a way she believes unsafe'),
     ('How many times has she raised it before?', 'twice, with her own ward manager'),
     ('What does the first sentence decide?', 'whether anybody speaks again'),
     ('What are the first three sentences?', 'thank you; what would you like to happen; and what can and cannot be promised'),
     ('What may not be promised?', 'that nobody will know who she is'),
     ('Why can the concern not be investigated by you?', 'because it concerns a decision you were part of')],

c_b=[('The nurse has raised it twice already.', 'T'),
     ('The first sentence should explain the pressures.', 'F'),
     ('Anonymity can be guaranteed.', 'F'),
     ('The concern goes to the guardian and the board.', 'T'),
     ('She is told the route in the room.', 'T'),
     ('A concern that is wrong must still be welcomed.', 'T')],

c_c=[('Thank you ____________ coming to tell me.', 'for'),
     ('What ____________ you like to happen?', 'would'),
     ('I cannot ____________ that nobody will know.', 'promise'),
     ('This concern ____________ a decision I was part of.', 'concerns'),
     ('It ____________ go to the guardian and the board.', 'will'),
     ('I ____________ write to you by Friday with the route.', 'shall')],

c_d=[('Begin with ( the context / thank you ).', ['the context', 'thank you'], 1),
     ('Ask ( what she would like to happen / for more detail at once ).',
      ['what she would like to happen', 'for more detail at once'], 0),
     ('Be honest about ( identity / the likely outcome ).',
      ['identity', 'the likely outcome'], 0),
     ('Route it ( away from yourself / through your own team ).',
      ['away from yourself', 'through your own team'], 0),
     ('Watch afterwards for ( detriment / her performance ).',
      ['detriment', 'her performance'], 0)],

c_e=('Thank, route away, protect or must not promise? Decide what each action is.',
     [('“thank you for coming to tell me”', 'thank'),
      ('sending it to the guardian and the board', 'route away'),
      ('checking her rota has not changed in six months', 'protect'),
      ('“nobody will ever know it was you”', 'must not promise'),
      ('recording who has been told and when', 'protect'),
      ('“this will have no consequences for you at all”', 'must not promise')],
     ['thank', 'route away', 'protect', 'must not promise']),

v_fig_title='SIX WORDS OF A CONCERN RECEIVED',
v_fig=[('people', 'a named freedom to speak up guardian'), ('key', 'a route outside the line management'),
       ('doc', 'a record of who knew and when'),
       ('scale', 'a detriment you must watch for'),
       ('clock', 'a thing you must tell the person who raised it'),
       ('note', 'a thank you that is meant')],
v_fig_cap='Six words for one conversation and ten years of consequence.',

v_a=[('A concern needing a different route is a concern about a ____________.', 'colleague'),
     ('Information you can act on but not clarify is a concern raised ____________.', 'anonymously'),
     ('Somebody whose fear is itself evidence is a person who fears being ____________.', 'identified'),
     ('A disclosure with legal protection attached is a ____________ disclosure.', 'protected'),
     ('The route you must tell them exists is a ____________ the person may go to.', 'regulator'),
     ('A concern about your own service or team is a concern you must not ____________ yourself.', 'investigate'),
     ('That nobody will ever know who they are is a thing you must not ____________ them.', 'promise'),
     ('The most dangerous state an organisation can reach is a culture in which nobody raises ____________.', 'anything')],

v_b=[('A concern about the organisation itself is a concern', 'no manager inside it can own alone.'),
     ('A person who has already been identified is somebody', 'now needing protection.'),
     ('A concern that must go to the board is a concern', 'about the organisation’s systems.'),
     ('A concern that turns out to be wrong is a concern', 'that must still be welcomed.'),
     ('A concern that turns out to be right is the reason', 'the route exists.')],

g_title='Grammar: receiving a concern about the organisation itself',
g_rule=['Begin with thank you and nothing else in the sentence. Thank you for '
        'coming to tell me. Any clause after it that begins with although, '
        'however or of course cancels it.',
        'Ask what the person wants with would: what would you like to happen? The '
        'conditional offers a choice rather than extracting a demand.',
        'Be exact about identity with can and cannot: I can keep your name out of '
        'the written record; I cannot promise that nobody will work out who raised '
        'this.',
        'Route it away from yourself in the active voice, naming the destination: '
        'I am sending this to the guardian and to the board, because it concerns a '
        'decision I took part in.'],
g_fig=('LOOSE',
       ['Thank you, although I think you may not have the full picture.',
        'Of course everything will be treated in the strictest confidence.',
        'I shall look into this myself and see what has happened.',
        'Do try not to worry about it in the meantime.'],
       'PRECISE',
       ['Thank you for coming to tell me.',
        'I can keep your name out of the written record; I cannot promise that nobody will work out who raised this.',
        'I am sending this to the guardian and to the board, because it concerns a decision I took part in.',
        'I shall write to you by Friday setting out who has it and what happens next.'],
       'four sentences that end a conversation for a decade',
       'four sentences that begin a process'),
g_fig_cap='Thank you, full stop. I can; I cannot. I am sending it to. I shall write by.',

g_a=[('Thank you ____________ coming to tell me.', 'for'),
     ('What ____________ you like to happen?', 'would'),
     ('I ____________ keep your name out of the written record.', 'can'),
     ('I ____________ promise that nobody will work it out.', 'cannot'),
     ('I ____________ sending this to the guardian.', 'am'),
     ('Because it concerns a decision I ____________ part in.', 'took'),
     ('I ____________ write to you by Friday.', 'shall'),
     ('Setting ____________ who has it.', 'out'),
     ('And what ____________ next.', 'happens')],

g_b=[('( Thank you for coming to tell me / thank you, although you may not have the full picture ) — the opening.', ['Thank you for coming to tell me', 'thank you, although you may not have the full picture'], 0),
     ('( I can keep your name out of the record but cannot promise anonymity / everything will be treated in confidence ) — the honesty.',
      ['I can keep your name out of the record but cannot promise anonymity', 'everything will be treated in confidence'], 0),
     ('( I am sending this to the guardian and the board / I shall look into this myself ) — the route.',
      ['I am sending this to the guardian and the board', 'I shall look into this myself'], 0),
     ('( I shall write to you by Friday / I shall let you know how it goes ) — the undertaking.',
      ['I shall write to you by Friday', 'I shall let you know how it goes'], 0),
     ('( what would you like to happen? / what exactly are you alleging? ) — the question.',
      ['what would you like to happen?', 'what exactly are you alleging?'], 0),
     ('( I shall check your rota and your access in six months / do try not to worry ) — the protection.',
      ['I shall check your rota and your access in six months', 'do try not to worry'], 0)],

d1=dict(
 title='Thank you, and then the route',
 fig=(['Raised twice before.', 'Heard once.'],
      ['Routed away.', 'Watched for six months.']),
 cap='Siobhán Carrick and a staff nurse, behind a closed door.',
 lines=[('Nurse', 'I think the way we are using the escalation corridor is unsafe, and I have said so twice to my manager.'),
        ('Siobhán', 'Thank you for coming to tell me.'),
        ('Nurse', 'You are going to tell me about the pressures we are under.'),
        ('Siobhán', 'No. What would you like to happen?'),
        ('Nurse', 'I would like somebody who is not us to look at it.'),
        ('Siobhán', 'That is what will happen, and it has to, because I was part of the decision to open the corridor.'),
        ('Nurse', 'Will my name be on it?'),
        ('Siobhán', 'Not in the written record. I cannot promise that nobody will work it out, because the concern names your manager and the ward.'),
        ('Nurse', 'Then I am exposed whatever you write.'),
        ('Siobhán', 'You are more exposed than I would like, and I am not going to pretend otherwise. What I can do is tell you exactly who will have it, watch your rota and your access for six months, and treat any change as a serious matter in itself.'),
        ('Nurse', 'And if the review says I was wrong?'),
        ('Siobhán', 'Then you were wrong about a serious thing for good reasons, and I shall say so in writing, and nothing about your position changes.')],
 a=[('What has the nurse raised, and how often?', 'the use of the escalation corridor, twice before'),
    ('What is Siobhán’s first sentence?', 'thank you for coming to tell me'),
    ('What does the nurse want?', 'somebody who is not them to look at it'),
    ('Why can Siobhán not investigate?', 'she was part of the decision to open the corridor'),
    ('What is promised about identity?', 'that her name is not in the record, but not that nobody will work it out')],
 b=[('Thank you ____________ coming to tell me.', 'for'),
    ('What ____________ you like to happen?', 'would'),
    ('I was part of the ____________.', 'decision'),
    ('I shall watch your rota for six ____________.', 'months')]),

d2=dict(
 title='The concern that went back to the line',
 fig=(['Raised to a guardian.', 'Sent to the manager.'],
      ['Shift changed.', 'Nobody raised anything for two years.']),
 cap='Siobhán Carrick and Dr Leila Rahman, medical director.',
 lines=[('Leila', 'The 2023 concern about the night rota went to the guardian and then back to the manager it was about.'),
        ('Siobhán', 'Who then changed the complainant’s shifts within a fortnight.'),
        ('Leila', 'He says the change was unconnected and part of a planned rotation.'),
        ('Siobhán', 'It may have been. The question is not whether he intended detriment; it is what the ward concluded.'),
        ('Leila', 'The ward concluded that raising something gets your shifts changed.'),
        ('Siobhán', 'And nobody from that ward has raised anything since, which is the most expensive consequence in this whole file.'),
        ('Leila', 'The guardian says she had no other route for it.'),
        ('Siobhán', 'Then the policy failed her as much as it failed him. A concern about a manager cannot be routed through that manager, however small the organisation.'),
        ('Leila', 'Some of these concerns genuinely need the line manager’s knowledge to resolve.'),
        ('Siobhán', 'Many do, and then the person raising it is asked first, and told exactly who will be told, and given the choice to stop.'),
        ('Leila', 'And if they say stop, and the concern is serious?'),
        ('Siobhán', 'Then we act on it anyway and tell them that we are going to, before we do, which is the only honest version of that conversation.')],
 unresolved=True,
 a=[('Where did the 2023 concern go?', 'to the guardian and then back to the manager it was about'),
    ('What happened within a fortnight?', 'the complainant’s shifts were changed'),
    ('What did the ward conclude?', 'that raising something gets your shifts changed'),
    ('What has happened since?', 'nobody from that ward has raised anything'),
    ('What happens when somebody asks you to stop?', 'you act anyway if it is serious, and tell them before you do')],
 b=[('Back to the manager it was ____________.', 'about'),
    ('What the ward ____________.', 'concluded'),
    ('Nobody has raised anything ____________.', 'since'),
    ('Tell them that we are going to, ____________ we do.', 'before')]),

speak=[('The first sentence',
        ['Your partner raises six concerns.',
         'Respond with thank you and one question, and nothing else.',
         'Three each, then swap.']),
       ('Can and cannot',
        ['Your partner asks you for six guarantees about identity.',
         'Say what you can and cannot promise.',
         'Three each, then swap.']),
       ('Route it away',
        ['Your partner describes six concerns.',
         'Say who should receive each, and why not you.',
         'Three each, then swap.'])],

ext_title='A concern about the organisation received, recorded and routed',
ext_fig=figs.datatable('WHAT THE RECEIPT CARRIES',
                       ['Line', 'Content'],
                       [['the thanks', 'first, and unqualified'],
                        ['what they want', 'asked, and recorded'],
                        ['identity', 'what can and cannot be promised'],
                        ['the route', 'away from anybody implicated'],
                        ['the undertaking', 'who will have it, and when they will hear'],
                        ['the watch', 'detriment checks, with dates']]),
ext_fig_cap='Six lines, and the first one decides whether there is ever a seventh.',
ext=[
 'A concern about the organisation received, recorded and routed keeps a person '
 'who has taken a risk from concluding that the risk was pointless.',
 'Give it the concern as the person described it, their own account of what they '
 'want, the people and decisions implicated, the policy’s routes, and your own '
 'involvement in whatever is complained of.',
 'Ask it to identify everybody who cannot receive the concern, starting with '
 'anybody named in it and anybody who took part in the decision complained of, '
 'including you.',
 'Ask for the identity position to be stated as what can and cannot be promised, '
 'because an undeliverable assurance of anonymity is the commonest way of '
 'betraying somebody.',
 'Ask for a schedule of detriment checks with dates, covering the rota, access, '
 'training and anything else that could be changed quietly.',
 'What it cannot do is say thank you in a way that is believed. That depends on '
 'what the person already thinks of you, and on whether the last person who spoke '
 'up still works here.'],

dp2=('Speaking up outcomes', 'Governance literature commonly reports that '
     'concerns routed back to the subject of the concern are followed by sharp '
     'falls in subsequent reporting from the same area, and that assurances of '
     'anonymity which cannot be delivered are a frequent cause of lasting '
     'distrust.',
     'Source: general healthcare governance literature, 2025–2026.'),

e_a=[('What does the receipt prevent?', 'a person concluding that the risk was pointless'),
     ('What five things are given to it?', 'the concern as described, what they want, the people implicated, the policy routes and your own involvement'),
     ('Who cannot receive the concern?', 'anybody named in it, anybody who took the decision, and you'),
     ('How is identity stated?', 'as what can and cannot be promised'),
     ('What does the detriment schedule cover?', 'the rota, access, training and anything changeable quietly')],
e_b=[('People who cannot receive the concern are identified.', 'T'),
     ('Identity is stated as can and cannot.', 'T'),
     ('It says thank you convincingly.', 'F'),
     ('Detriment checks carry dates.', 'T'),
     ('Concerns routed back reduce later reporting.', 'T'),
     ('Undeliverable anonymity assurances are harmless.', 'F')],

w_model='Purpose: so that somebody who raises a concern about this organisation '
       'concludes afterwards that raising it was worth doing. Scope: concerns '
       'about operational decisions, systems and culture; clinical practice '
       'concerns go to the medical director, concerns naming me go to the '
       'guardian and the chair, and anything alleging a criminal offence goes to '
       'corporate affairs the same day. Inputs: the concern in the person’s own '
       'words, what they say they want to happen, everybody and every decision '
       'implicated, my own involvement in those decisions, the policy’s routes '
       'including the guardian and the regulator, and the person’s rota and access '
       'arrangements. Criteria: thanks first and unqualified; the person asked '
       'what they want and the answer recorded; the identity position stated as '
       'what can and cannot be promised; the concern routed away from everybody '
       'implicated including me; the person told in the room who will receive it; '
       'and detriment checks scheduled with dates. Done: confirmed in writing '
       'within five working days, naming who holds it and when they will hear '
       'again. Fallback: where the person asks me not to proceed and the concern '
       'is serious, I tell them that I shall proceed anyway, and I tell them '
       'before I do.',
w_fig=figs.spec_card('SIX LINES FOR RECEIVING A CONCERN',
                     [('Purpose', 'they conclude afterwards that it was worth doing'),
                      ('Scope', 'systems and culture; not clinical, not concerns about me'),
                      ('Inputs', 'their words, what they want, who is implicated, routes'),
                      ('Criteria', 'thanks, their wishes, honest identity, route away'),
                      ('Done', 'in writing in five days, with names and dates'),
                      ('Fallback', 'asked to stop: proceed, and say so first')]),
w_fig_cap='Six lines, and the sixth one is the only honest version of that conversation.',
w_task='Write a six-line tasking for receiving a concern.',
w_steps=['Line 1: say what the person must conclude afterwards.',
         'Line 2: say which concerns are yours, and where the others go.',
         'Line 3: say what you are giving it.',
         'Line 4: say what must happen in the conversation.',
         'Line 5: say what is confirmed in writing and when.',
         'Line 6: say what you do when they ask you not to proceed.'],
w_bank=['Purpose: so that somebody who raises a concern about this organisation concludes afterwards that raising it was worth doing',
        'Scope: concerns about operational decisions, systems and culture; clinical practice concerns go to the medical director, concerns naming me go to the guardian and the chair, and allegations of crime go to corporate affairs',
        'Inputs: the concern in the person’s own words, what they say they want, everybody and every decision implicated, my own involvement, the policy’s routes including the guardian and the regulator, and the person’s rota and access arrangements',
        'Criteria: thanks first and unqualified; the person asked what they want and the answer recorded; identity stated as what can and cannot be promised; the concern routed away from everybody implicated including me; the person told in the room who will receive it; detriment checks scheduled with dates',
        'Done: confirmed in writing within five working days, naming who holds it and when they will hear again',
        'Fallback: where the person asks me not to proceed and the concern is serious, I tell them that I shall proceed anyway, and I tell them before I do'],
w_check=['Was the first sentence thanks alone?',
         'Is the identity position honest?',
         'Is the route away from everybody implicated?',
         'Are detriment checks scheduled?'],

t_title='A concern about the organisation received, recorded and routed',
t_fig=figs.split('ONE CONCERN AND TEN YEARS',
                 'It can set out',
                 ['who may not receive it',
                  'the honest identity position',
                  'the routes in the policy',
                  'the detriment check schedule'],
                 'It must not supply',
                 ['the thank you',
                  'a promise of anonymity',
                  'a judgement on the concern',
                  'the trust in the room']),
t_fig_cap='It sets out the route. Being believed depends on what happened last time.',
t_body=[
 'Give it the concern in the person’s words, what they want, everybody '
 'implicated, the policy routes and your own involvement.',
 'A concern about the organisation received, recorded and routed identifies '
 'everybody who may not receive it.',
 'Then ask for the detriment checks, with dates.'],
t_say=[('Thank you: ', 'For coming to tell me.'),
       ('I can: ', 'Keep your name out of the record.'),
       ('I cannot: ', 'Promise nobody will work it out.')],
t_bound='It cannot say thank you in a way that is believed, and it will not know '
        'whether the last person who spoke up still works here.',
t_a=[('Give it the concern in the person’s own ____________.', 'words'),
     ('And what they say they ____________.', 'want'),
     ('And everybody ____________.', 'implicated'),
     ('Identify everybody who may not ____________ it.', 'receive'),
     ('And the honest ____________ position.', 'identity'),
     ('And the ____________ checks, with dates.', 'detriment')],
t_b_rubric='Say what the receiving work should do with each item.',
t_b=[('“thank you, although you may not have the full picture”', 'remove everything after thank you'),
     ('“everything will be in the strictest confidence”', 'state what can and cannot be promised'),
     ('“I shall look into this myself”', 'route it away from everybody implicated'),
     ('a concern naming a ward manager', 'schedule detriment checks with dates')],

case=dict(
 title='The Decision Room · The ward that stopped speaking',
 brief=[
  'A hospital’s policy allowed concerns to be investigated by the directorate in '
  'which they arose, including by managers named in them, where the concern was '
  'judged not to be serious.',
  'Over four years, 63 concerns were raised. 18 were investigated within the '
  'directorate complained of. In 5 of those 18 the person raising the concern '
  'experienced a change of rota, exclusion from a meeting or loss of a training '
  'opportunity within two months. Reporting from the three areas involved fell by '
  '81 per cent over the following year.',
  'The policy was changed so that no concern is investigated by anybody named in '
  'it or in the line above the person raising it, with detriment checks at two, '
  'four and six months. Reporting from those areas returned to its previous level '
  'within eighteen months.'],
 exhibit=figs.datatable('FOUR YEARS OF CONCERNS RAISED',
                        ['Item', 'Before / After'],
                        [['concerns raised', '63 / 71'],
                         ['investigated within the directorate complained of', '18 / 0'],
                         ['detriment within two months', '5 / 0'],
                         ['reporting from affected areas', 'down 81 per cent / recovered'],
                         ['anonymity assurances given', '22 / 0'],
                         ['assurances that could not be kept', '9 / 0']]),
 exhibit_cap='The same policy intent, with the route moved outside the line.',
 exhibit_note='Nine of twenty-two assurances of anonymity could not be kept. In '
              'each case the person had been told that nobody would know.',
 voices=[('A directorate manager', 'about local investigation',
          'The person who knows the service best is the person who runs it. Sending everything outside wastes weeks.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Five people had their rota or their training changed within two months of speaking up.'),
         ('A staff nurse', 'about the aftermath',
          'I was moved to nights three weeks later. I was told it was unconnected and I have never believed it.')],
 steps=[('Find it', 'How many were investigated locally?'),
        ('Compare it', 'Local investigation against subsequent detriment.'),
        ('Infer it', 'Why did reporting collapse?'),
        ('Weigh it', 'Local knowledge against eighty-one per cent fewer concerns.'),
        ('Decide', 'Who may investigate a concern?')],
 analysis=[('Find it. How many?', '18 of 63'),
           ('Compare it. How many suffered detriment?', '5 of the 18'),
           ('Infer it. Why the collapse?', 'because a ward draws its conclusion from what happened to the last person'),
           ('Weigh it. What was traded?', 'weeks of speed for eighty-one per cent of the hospital’s own warning system'),
           ('Decide. Who may investigate?', 'nobody named in it or in the line above the person raising it')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say who may not investigate a concern.',
                 'Say what may be promised about identity.',
                 'Say what the person is told, and when.',
                 'Say how detriment is monitored.'],
 bank=['No concern is investigated by any person named in it, by anybody who took part in a decision complained of, or by anybody in the line management of the person raising it.',
       'No assurance of anonymity is given beyond what can be delivered, and the person is told plainly what may become apparent to others.',
       'Every person raising a concern is told in the conversation who will receive it, and is confirmed in writing within five working days of who holds it and when they will next hear.',
       'The rota, access, training and working arrangements of any person who has raised a concern are checked at two, four and six months, and any change is examined as a potential detriment.'],
 outcome='The hospital adopts the four lines. Concerns investigated within the '
         'directorate complained of fall from eighteen to none, detriment within '
         'two months from five cases to none, undeliverable anonymity assurances '
         'from nine to none, and reporting from the affected areas recovers to its '
         'previous level within eighteen months.',
 outcome_q=[('What happened to local investigation?', 'it fell from eighteen cases to none'),
            ('What happened to detriment?', 'it fell from five cases to none'),
            ('What happened to undeliverable assurances?', 'they fell from nine to none'),
            ('What happened to reporting?', 'it recovered within eighteen months'),
            ('What had it fallen by?', 'eighty-one per cent')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · In the strictest confidence',
 task=['This was the note a manager made of a conversation in which a nurse raised '
       'a concern.',
       'This is what it said.'],
 draft=['Thank you, although I think she may not have the full picture.',
        'I explained some of the pressures the department has been under.',
        'I assured her that everything would be treated in the strictest confidence.',
        'I said I would look into it myself and see what had happened.',
        'I advised her not to worry about it in the meantime.',
        'I said we would catch up again at some point soon.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines in which a concern is received, corrected and absorbed.',
 asked=['may not have the full picture', 'the strictest confidence',
        'look into it myself'],
 back=['18 of 63 concerns investigated locally', '5 cases of detriment',
       'reporting down 81 per cent'],
 gap='Nobody could tell what she wanted, who would receive it, what could be promised, or what would happen next.',
 back_cap='Six lines that will be the last concern that ward ever raises.',
 back_note='“I would look into it myself” was written by a manager who had taken '
           'part in the decision the concern was about.',
 diagnosis=[('“some of the pressures”', 'unscoped set'),
            ('“at some point soon”', 'unscoped set'),
            ('“the strictest confidence”', 'unstated exception'),
            ('“look into it myself”', 'hidden assumption'),
            ('“may not have the full picture”', 'hidden assumption'),
            ('“not to worry about it”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that she would raise something again.',
 scaffold=['what the person must conclude afterwards',
           'which concerns are yours, and where the others go',
           'what you are giving it',
           'what must happen in the conversation',
           'what is confirmed in writing and when',
           'what you do when they ask you not to proceed'],
 bank=['Purpose: so that somebody who raises a concern about this organisation concludes afterwards that raising it was worth doing',
       'Scope: concerns about operational decisions, systems and culture; clinical practice concerns go to the medical director, concerns naming me go to the guardian and the chair, and anything alleging a criminal offence goes to corporate affairs the same day',
       'Inputs: the concern in the person’s own words, what they say they want to happen, everybody and every decision implicated, my own involvement in those decisions, the policy’s routes including the guardian and the regulator, and the person’s rota and access arrangements',
       'Criteria: thanks first and unqualified; the person asked what they want and the answer recorded; the identity position stated as what can and cannot be promised; the concern routed away from everybody implicated including me; the person told in the room who will receive it; and detriment checks scheduled with dates',
       'Done: confirmed in writing within five working days, naming who holds it and when they will hear again',
       'Fallback: where the person asks me not to proceed and the concern is serious, I tell them that I shall proceed anyway, and I tell them before I do'],
 check=['Is the first sentence thanks alone?',
        'Is the identity position honest?',
        'Is it routed away from the manager involved?',
        'Is there a date for the written confirmation?'],
 model=['so that somebody who raises a concern about this organisation concludes afterwards that raising it was worth doing',
        'concerns about operational decisions, systems and culture; clinical practice concerns go to the medical director, concerns naming me go to the guardian and the chair, and anything alleging a criminal offence goes to corporate affairs the same day',
        'the concern in the person’s own words, what they say they want to happen, everybody and every decision implicated, my own involvement in those decisions, the policy’s routes including the guardian and the regulator, and the person’s rota and access arrangements',
        'thanks first and unqualified; the person asked what they want and the answer recorded; the identity position stated as what can and cannot be promised; the concern routed away from everybody implicated including me; the person told in the room who will receive it; and detriment checks scheduled with dates',
        'confirmed in writing within five working days, naming who holds it and when they will hear again',
        'where the person asks me not to proceed and the concern is serious, I tell them that I shall proceed anyway, and I tell them before I do'],
 cost='18 of 63 concerns investigated locally, 5 cases of detriment, and reporting down 81 per cent.'),

lang=dict(
 title='The Unwelcome Number · Telling a nurse she cannot be promised anonymity',
 setting=[
  'A nurse has raised a serious concern that names her own ward manager. She wants '
  'an assurance that nobody will know it was her, and it cannot be given.',
  'Siobhán has to refuse the assurance, keep the concern alive, and leave the '
  'nurse better protected than a promise would have left her.'],
 ladder=[('A nurse who has taken a risk', 'and an assurance nobody can give'),
         ('One concern', 'that names her own manager'),
         ('Either promise and fail', 'or refuse and protect')],
 cap='One concern, one ward, one manager named, and six months of watching.',
 turns=[('Turn 1 · Nurse', 'I need to know that nobody will find out it was me.'),
        ('Turn 2 · Siobhán', 'I cannot promise that, and I am not going to pretend otherwise.'),
        ('Turn 3 · Nurse', 'Then I have just ended my career on this ward for nothing.')],
 holds=['Your name will not be in the written record, and I shall tell you exactly who holds it.',
        'Nine of our last twenty-two anonymity assurances could not be kept, and the people were told they would be.',
        'What I can do is check your rota, your access and your training at two, four and six months.',
        'Any change in those will be examined as a possible detriment, by somebody who is not me.',
        'The concern goes to the guardian and the board, because I was part of the decision it is about.',
        'And if you would rather not proceed, tell me; if I judge it too serious to stop, I shall say so to you before I do anything.'],
 redline='Never give an assurance of anonymity that cannot be delivered, and '
         'never let a concern be investigated by the person it names.',
 score=['Refused the assurance in the first sentence.',
        'Gave the historical figure.',
        'Offered concrete protection with dates.',
        'Routed the concern away from herself.',
        'Offered honesty about proceeding against her wishes.'],
 a=[('What does the nurse ask for?', 'an assurance that nobody will find out'),
    ('What is the answer?', 'that it cannot be promised'),
    ('How many past assurances failed?', 'nine of twenty-two'),
    ('What protection is offered?', 'rota, access and training checks at two, four and six months'),
    ('Why does the concern leave Siobhán?', 'because she was part of the decision it concerns'),
    ('What is the redline?', 'never give an anonymity assurance that cannot be delivered')]),

rev_fig=figs.split('A CONCERN RECEIVED',
                   'Say',
                   ['thank you for coming to tell me',
                    'what would you like to happen?',
                    'I can keep your name out; I cannot promise anonymity',
                    'this goes to the guardian and the board, not to me'],
                   'Never say',
                   ['thank you, although you may not have the full picture',
                    'let me explain the pressures we are under',
                    'everything will be in the strictest confidence',
                    'I shall look into it myself']),
rev_fig_cap='Four sentences that begin a process, and four that end one for a decade.',
rev=dict(
 read=[('What does the first sentence decide?',
        ['whether anybody speaks again', 'whether the concern is valid',
         'who investigates it', 'what the policy requires'], 0),
       ('What are the first three sentences?',
        ['thank you; what would you like; what can and cannot be promised',
         'thank you; the context; the process',
         'the policy; the route; the timescale',
         'thank you; the pressures; the reassurance'], 0),
       ('What may not be promised?',
        ['that nobody will know who raised it', 'that it will be investigated',
         'that she will hear the outcome', 'that detriment will be examined'], 0),
       ('Why can the manager not investigate?',
        ['the concern is about a decision she took part in',
         'she is too busy',
         'the policy forbids all local work',
         'the guardian insists'], 0)],
 listen_text='Give it the concern in the person’s words, what they want, everybody '
             'implicated, the policy routes and your own involvement. Identify who '
             'may not receive it.',
 listen=[('Give it the concern in the person’s own ____________.', 'words'),
         ('And what they say they ____________.', 'want'),
         ('And everybody ____________.', 'implicated'),
         ('Identify everybody who may not ____________ it.', 'receive')],
 speak=['Respond to six concerns with thanks and one question.',
        'Then state what can and cannot be promised about identity.'],
 write='Write a six-line tasking for receiving a concern.',
 vocab=[('A person who has taken a risk in person is a concern raised ____________.', 'openly'),
        ('A person independent of the line is a named freedom to speak up ____________.', 'guardian'),
        ('The trail that protects the person is a record of who ____________ and when.', 'knew'),
        ('The sentence people remember years later is a ____________ that is meant.', 'thank you')],
 gram=[('And what ____________ next.', 'happens'),
       ('Setting ____________ who has it.', 'out'),
       ('Because it concerns a decision I ____________ part in.', 'took'),
       ('I ____________ sending this to the guardian.', 'am')]),

found=['Say thank you, and put nothing after it.',
       'Ask what the person wants to happen, and record the answer.',
       'Say what you can and cannot promise about identity.',
       'Route it away from everybody implicated, including yourself.'],
end_line='Reporting from three areas fell by eighty-one per cent after five people who spoke up had their rota, their meetings or their training quietly changed.',
end_next='Next: An Inspection, and What You Show')
