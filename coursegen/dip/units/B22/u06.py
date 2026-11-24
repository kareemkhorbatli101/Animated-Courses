# -*- coding: utf-8 -*-
import figs

U = dict(
num=6,
title='A Crisis at Post',
gram='ellipsis, and what must never be left out',
ai='the first hour of a crisis at post',
strap='CEFR B2 · Grammar: ellipsis, and what must never be left out · '
      'AI: the first hour of a crisis at post',
cando=['write a situation report in telegraphic style without losing the essentials',
       'work through the first hour of a crisis in order',
       'reconcile a generic plan against what your post actually has',
       'say why an unverified figure must never enter a Mission statement',
       'write a six-line tasking for a first-hour plan'],

hero=('TWENTY-TWO ACTIONS IN THE RIGHT ORDER, AND FOUR OF THEM NEEDED PEOPLE WE DO NOT HAVE',
      ['A twenty-four-hour line with three staff. A wardens’ network that lapsed in 2024.',
       'And nothing at all about the only door, which opens onto the square.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A fire in the market adjoining the square in Ostport, 14:10, with a crowd between the Mission and the street.',

warm=['What are the first three things you would do in a crisis at your post?',
      'What must never be left out of a short report?',
      'Which part of a plan depends on your own building?'],

read=[
 'At ten past two a fire starts in the market adjoining the square in Ostport. By twenty past '
 'the square is full, the street is closed, and the Mission’s only public entrance opens '
 'directly onto it.',
 'Bassel Tannous has four staff in the building, two visitors in the waiting room, a consular '
 'queue that has dispersed into the crowd, and a crisis plan written two years ago by somebody '
 'who has since left.',
 'He asks for a first-hour action list and gets twenty-two actions in forty seconds, in a '
 'sensible order: account for staff, secure the entrance, inform the capital, open a line for '
 'enquiries, prepare a holding statement, log everything with times.',
 'It is better than the plan in the drawer. Four of the twenty-two, however, assume a '
 'twenty-four-hour telephone line staffed by three people and an active wardens’ network, and '
 'the Mission has neither: the network lapsed when its coordinator left in 2024.',
 'Nothing in the list mentions the door. The single fact that governs this crisis at this post '
 '— that the only exit gives onto the square — appears in no generic plan, and it is the first '
 'thing a visitor will ask about.'],

dp1=('Generic and local plans', 'Crisis-management practice commonly holds that a generic '
     'action list must be reconciled against the actual staffing, premises and local '
     'arrangements of the post concerned, since a plan assuming resources that do not exist '
     'fails at the moment it is needed.',
     'Source: general crisis management literature, 2025–2026.'),

c_a=[('When did the fire start?', 'at ten past two'),
     ('What is the problem with the building?', 'its only public entrance opens onto the square'),
     ('How many people were inside?', 'four staff and two visitors'),
     ('How old was the crisis plan?', 'two years'),
     ('How many actions were produced, and how fast?', 'twenty-two in forty seconds'),
     ('What did four of them assume?', 'a staffed line and an active wardens’ network')],

c_b=[('The square emptied by twenty past two.', 'F'),
     ('The consular queue dispersed into the crowd.', 'T'),
     ('The generated list was worse than the old plan.', 'F'),
     ('The wardens’ network is active.', 'F'),
     ('The list mentioned the entrance.', 'F'),
     ('Visitors will ask about the door.', 'T')],

c_c=[('All staff accounted for. Two visitors ____________.', 'unaccounted'),
     ('Entrance secured at 14:25. Rear door ____________.', 'locked'),
     ('Capital informed 14:32. Acknowledgement ____________ awaited.', 'still'),
     ('Four staff in building; two ____________ leave.', 'on'),
     ('No casualties reported to us. Press figures ____________ verified.', 'not'),
     ('Line open from 15:00. One officer ____________ duty.', 'on')],

c_d=[('Ellipsis in a report omits ( words the reader can supply / facts ).', ['words the reader can supply', 'facts'], 0),
     ('A situation report must always keep ( the time and the source / the adjectives ).',
      ['the time and the source', 'the adjectives'], 0),
     ('Not verified must never be ( omitted / abbreviated ).', ['omitted', 'abbreviated'], 0),
     ('The generic list omitted ( the building’s only door / the order of actions ).',
      ['the building’s only door', 'the order of actions'], 0),
     ('A press casualty figure in a Mission statement is ( unverified / official ).',
      ['unverified', 'official'], 0)],

c_e=('Safe to omit, or never? Put each element in the right column.',
     [('the article before a noun', 'safe to omit'),
      ('the time of the information', 'never'),
      ('the auxiliary verb', 'safe to omit'),
      ('whether a fact is verified', 'never'),
      ('a subject the reader can supply', 'safe to omit'),
      ('the source of a figure', 'never')],
     ['safe to omit', 'never']),

v_fig_title='THE FIRST HOUR',
v_fig=[('clock', 'a first report'), ('people', 'a muster'), ('doc', 'an incident log'),
       ('key', 'a verified fact'), ('speech', 'a holding statement'), ('chart', 'an hourly return')],
v_fig_cap='Six words for sixty minutes in which everything written down becomes the record.',

vocab=[
 ('a crisis cell', 'the small group that manages a crisis at a post'),
 ('a first report', 'the earliest account sent to the capital'),
 ('a casualty figure', 'a number of persons injured or killed'),
 ('an emergency telephone line', 'a number opened for urgent enquiries'),
 ('a muster', 'the accounting for all persons present'),
 ('a shelter-in-place instruction', 'a direction to remain where one is'),
 ('a travel warning', 'public advice against travel to an area'),
 ('a verified fact', 'something confirmed by a reliable source'),
 ('an unverified report', 'information not yet confirmed'),
 ('a holding statement', 'a short public statement issued before the facts are complete'),
 ('a rolling update', 'information reissued as it changes'),
 ('a time of last confirmation', 'the moment at which information was last checked'),
 ('an incident log', 'the running written record of a crisis'),
 ('a point of contact', 'the named person others should approach'),
 ('a crisis checklist', 'the list of actions to be taken in order'),
 ('an evacuation plan', 'the arrangements for leaving premises or a country'),
 ('a wardens’ network', 'volunteers who pass information to nationals in an area'),
 ('a reunification of families', 'the bringing together of separated relatives'),
 ('a family liaison contact', 'the officer dealing with relatives of those affected'),
 ('an hourly return', 'a report submitted every hour')],

v_a=[('The accounting for all persons present is a ____________.', 'muster'),
     ('The running written record of a crisis is an incident ____________.', 'log'),
     ('The moment information was last checked is the time of last ____________.', 'confirmation'),
     ('A direction to remain where one is is a ____________ instruction.', 'shelter-in-place'),
     ('Volunteers who pass information to nationals form a ____________ network.', 'wardens’'),
     ('A report submitted every hour is an ____________ return.', 'hourly'),
     ('The officer dealing with relatives is a family ____________ contact.', 'liaison'),
     ('Information reissued as it changes is a ____________ update.', 'rolling')],

v_b=[('A crisis cell is the small group', 'that manages a crisis at a post.'),
     ('A holding statement is a short public statement', 'issued before the facts are complete.'),
     ('An unverified report is information', 'not yet confirmed.'),
     ('An evacuation plan is the arrangements', 'for leaving premises or a country.'),
     ('A point of contact is the named person', 'others should approach.')],

g_title='Grammar: ellipsis, and what must never be left out',
g_rule=['Ellipsis omits words the reader can supply: all staff accounted for, rather than all '
        'staff have been accounted for.',
        'It is the register of logs, musters and hourly returns, and it makes a report readable '
        'at speed.',
        'Four things are never elided: the time, the source, whether a fact is verified, and who '
        'is acting.',
        'So write: 14:25 entrance secured (duty guard, confirmed). Short, and complete in every '
        'way that matters.'],
g_fig=('TOO FULL OR TOO EMPTY',
       ['It has been confirmed that all of the staff have now been accounted for.',
        'Casualties reported.',
        'The entrance has been secured by the duty guard, who has confirmed this to me.',
        'Capital informed.'],
       'ELLIPTICAL AND COMPLETE',
       ['14:22 all staff accounted for (muster, confirmed).',
        '14:40 casualty figures in local press; not verified.',
        '14:25 entrance secured (duty guard, confirmed).',
        '14:32 capital informed by telephone; acknowledgement awaited.'],
       'two sentences too long and two missing everything',
       'the same four, short, timed, sourced and marked for verification'),
g_fig_cap='Omit the grammar. Never omit the clock, the source, the verification or the actor.',

g_a=[('All staff accounted for. Two visitors ____________.', 'unaccounted'),
     ('Entrance secured at 14:25. Rear door ____________.', 'locked'),
     ('Capital informed 14:32. Acknowledgement ____________ awaited.', 'still'),
     ('Four staff in building; two ____________ leave.', 'on'),
     ('No casualties reported to us. Press figures ____________ verified.', 'not'),
     ('Line open from 15:00. One officer ____________ duty.', 'on'),
     ('Square closed. Rear access ____________ passable on foot.', 'still'),
     ('Two enquiries received. Both ____________ answered.', 'already'),
     ('Log opened 14:12. Entries ____________ timed.', 'all')],

g_b=[('( 14:22 all staff accounted for (muster, confirmed) / All staff are fine ) — a log entry.', ['All staff are fine', '14:22 all staff accounted for (muster, confirmed)'], 1),
     ('( 14:40 casualty figures in local press; not verified / Casualties reported ) — keep the verification.',
      ['14:40 casualty figures in local press; not verified', 'Casualties reported'], 0),
     ('( 14:25 entrance secured (duty guard) / The entrance has been secured by the duty guard, who confirmed it ) — the register.',
      ['14:25 entrance secured (duty guard)', 'The entrance has been secured by the duty guard, who confirmed it'], 0),
     ('( 14:32 capital informed by telephone / Capital informed ) — keep the means.',
      ['14:32 capital informed by telephone', 'Capital informed'], 0),
     ('( Two visitors unaccounted at 14:22 / Two visitors unaccounted ) — keep the time.',
      ['Two visitors unaccounted at 14:22', 'Two visitors unaccounted'], 0),
     ('( Rear access still passable on foot (reported by driver, 14:50) / Rear access fine ) — source and time.',
      ['Rear access still passable on foot (reported by driver, 14:50)', 'Rear access fine'], 0)],

d1=dict(
 title='Twenty-two actions and one door',
 fig=(['Twenty-two actions in forty seconds.', 'Which of them can we actually do?'],
      ['Eighteen.', 'And which one is missing?']),
 cap='Bassel Tannous and Rim Haddad, 14:18.',
 lines=[('Rim', 'The square is full and the street is closed.'),
        ('Bassel', 'I have a first-hour list. Twenty-two actions, in a sensible order.'),
        ('Rim', 'Read me the first four.'),
        ('Bassel', 'Account for everybody. Secure the entrance. Inform the capital. Open an enquiry line.'),
        ('Rim', 'The enquiry line needs three people for twenty-four hours. We are four in the building.'),
        ('Bassel', 'Then one officer, from three o’clock, and we say the hours in the statement.'),
        ('Rim', 'Action nine is the wardens’ network. There has not been one since Nadia left in 2024.'),
        ('Bassel', 'Strike it, and put rebuild the network on next month’s list rather than this hour’s.'),
        ('Rim', 'And what is not on the list at all?'),
        ('Bassel', 'The door. Our only public entrance opens onto the square, and nobody can reach us.'),
        ('Rim', 'That is the first thing anybody will ask, and it decides the next three actions.'),
        ('Bassel', 'Then the rear gate, and a notice at the front, and the notice goes up before the statement.')],
 a=[('How many actions were produced?', 'twenty-two'),
    ('How many could the Mission actually do?', 'eighteen'),
    ('What does the enquiry line require?', 'three people for twenty-four hours'),
    ('What happened to the wardens’ network?', 'it lapsed when its coordinator left'),
    ('What was missing from the list?', 'the building’s only entrance')],
 b=[('In a ____________ order.', 'sensible'),
    ('We say the ____________ in the statement.', 'hours'),
    ('Nobody can ____________ us.', 'reach'),
    ('The notice goes up before the ____________.', 'statement')]),

d2=dict(
 title='The number from the press',
 fig=(['The draft statement has a figure in it.', 'From where?'],
      ['The local radio.', 'Then it does not go out.']),
 cap='Bassel and Dr Suhair Kanaan, 14:47.',
 lines=[('Suhair', 'Read me the holding statement.'),
        ('Bassel', 'The Mission is aware of the fire in the market, in which eleven people are reported injured.'),
        ('Suhair', 'Who reported eleven?'),
        ('Bassel', 'The local radio station, at twenty-five past two.'),
        ('Suhair', 'And have the authorities confirmed any figure to us?'),
        ('Bassel', 'Nothing yet. I telephoned at twenty-nine past and the line was engaged.'),
        ('Suhair', 'Then the number comes out. We do not put a casualty figure in our own voice.'),
        ('Bassel', 'The draft had it in the first sentence, which reads perfectly naturally.'),
        ('Suhair', 'It reads naturally because that is how such statements read. Ours cannot.'),
        ('Bassel', 'So: aware of the fire, no Syrian nationals known to be affected, a line open from three.'),
        ('Suhair', 'And the hours of the line, and the time of your last confirmation on nationals.'),
        ('Bassel', 'Fourteen forty. And if a figure is confirmed to us at four o’clock?')],
 unresolved=True,
 a=[('What figure was in the draft?', 'eleven injured'),
    ('Where did it come from?', 'a local radio station'),
    ('Had the authorities confirmed anything?', 'nothing yet'),
    ('Why must the figure come out?', 'a Mission does not give casualty figures in its own voice'),
    ('What must the statement include?', 'the line’s hours and the time of last confirmation')],
 b=[('The line was ____________.', 'engaged'),
    ('We do not put a casualty ____________ in our own voice.', 'figure'),
    ('It reads ____________ because that is how such statements read.', 'naturally'),
    ('No Syrian nationals known to be ____________.', 'affected')]),

speak=[('Log it',
        ['Turn nine full sentences into log entries with time, source and verification.',
         'Your partner checks that nothing essential was elided.',
         'Read three of them aloud at speed.']),
       ('Eighteen of twenty-two',
        ['Take a generic action list for a crisis you can imagine.',
         'Say which actions your own organisation could actually perform today.',
         'Name the one local fact the list does not know.']),
       ('No number in our voice',
        ['Your partner presses you four times for a casualty figure.',
         'Decline each time and say what you can confirm instead.',
         'Give the time of your last confirmation every time.'])],

ext_title='A generic first hour is better than no plan at all, and it does not know where your door is',
ext_fig=figs.datatable('TWENTY-TWO ACTIONS, RECONCILED',
                       ['Action', 'Possible today?', 'What was done'],
                       [['account for all present', 'yes', 'muster at 14:22'],
                        ['secure the entrance', 'yes', 'secured 14:25'],
                        ['inform the capital', 'yes', 'telephoned 14:32'],
                        ['24-hour line, 3 staff', 'no', '1 officer, 15:00–20:00'],
                        ['activate wardens’ network', 'no', 'network lapsed in 2024'],
                        ['notice on the entrance', 'not listed', 'added, 14:35']]),
ext_fig_cap='Eighteen actions performed, two reduced to what the post can do, and one added that no list contained.',
ext=[
 'A first-hour action list is the clearest case in this book of a generated document being '
 'better than the one in the drawer, because the one in the drawer was written two years ago by '
 'an officer who has left, and nobody has read it since.',
 'Twenty-two actions in a sensible order, produced in forty seconds while a square fills with '
 'people, is a genuine operational gain. It will not forget to open a log, and under pressure '
 'that is exactly what people forget.',
 'Two kinds of error follow from the same cause, which is that the list describes a Mission in '
 'general. It assumes staff and arrangements a particular post may not have, and it omits the '
 'single local fact that governs everything, which here is a door.',
 'The second kind of error is more dangerous in writing. A drafted holding statement will '
 'contain a casualty figure, because holding statements contain casualty figures, and the figure '
 'will come from whatever reporting it has seen, unattributed and unverified.',
 'A Mission that puts an unconfirmed number into its own statement has made that number '
 'official in the only way that matters to a family reading it. So reconcile the list against '
 'your own staffing in the first five minutes, add your local fact, and take every number out of '
 'your own voice until somebody with authority has confirmed it to you.'],

dp2=('Casualty information', 'Crisis-communication practice commonly provides that casualty '
     'figures are issued by the responsible national authorities and not by foreign missions, '
     'which confine themselves to what they have confirmed about their own nationals and to '
     'the time of that confirmation.',
     'Source: general crisis management literature, 2025–2026.'),

e_a=[('Why is a generated list better than the drawer plan?', 'the drawer plan is two years old and unread'),
     ('What do people forget under pressure?', 'to open a log'),
     ('What two errors share one cause?', 'assumed resources and the missing local fact'),
     ('Why does a draft statement contain a figure?', 'because such statements contain figures'),
     ('What does a Mission confine itself to?', 'what it has confirmed about its own nationals')],
e_b=[('The drawer plan had been read recently.', 'F'),
     ('Opening a log is easily forgotten.', 'T'),
     ('A generic list knows your premises.', 'F'),
     ('An unconfirmed figure becomes official once you publish it.', 'T'),
     ('Casualty figures are for the national authorities.', 'T'),
     ('Reconciliation can wait until the second hour.', 'F')],

w_model='Purpose: so that the Mission completes the first hour correctly with the staff '
        'actually present. Scope: the incident in the square from 14:10; the consular enquiries '
        'of the following days are handled separately. Inputs: the Mission’s staffing today, the '
        'premises plan including entrances, the lapsed wardens’ list, and the incident log from '
        '14:12. Criteria: actions in order, each marked possible or not possible with today’s '
        'staff; any action requiring staff we do not have rewritten to what one officer can do; '
        'the premises fact stated first; no casualty figure in any text in our own voice. Done: '
        'the reconciled list in the crisis cell by 14:30 and an hourly return thereafter. '
        'Fallback: where a figure is reported but unconfirmed, it is logged with its source and '
        'time and kept out of every statement.',
w_fig=figs.spec_card('SIX LINES FOR A FIRST HOUR',
                     [('Purpose', 'complete the first hour with the staff present'),
                      ('Scope', 'the incident from 14:10'),
                      ('Inputs', 'today’s staffing, the premises plan, the log'),
                      ('Criteria', 'ordered, marked possible, premises first, no figures'),
                      ('Done', 'reconciled list by 14:30; hourly returns'),
                      ('Fallback', 'unconfirmed figure: log it, never publish it')]),
w_fig_cap='Line 4 holds the four rules that turn a generic list into this post’s list.',
w_task='Write a six-line tasking for a first-hour plan.',
w_steps=['Line 1: what must be completed, and with whom.',
         'Line 2: which incident, from what time, and what is separate.',
         'Line 3: staffing, premises, lapsed arrangements and the log.',
         'Line 4: order, feasibility marking, the premises fact and the rule on figures.',
         'Line 5: when the reconciled list is ready and what follows.',
         'Line 6: what is done with an unconfirmed figure.'],
w_bank=['Purpose: so that the Mission completes the first hour with the staff actually present',
        'Scope: the incident … from … ; … handled separately',
        'Inputs: today’s staffing, the premises plan including entrances, … , and the log from … ',
        'Criteria: actions in order, each marked possible or not with today’s staff; the premises fact first; no casualty figure in our own voice',
        'Done: the reconciled list in the crisis cell by … and an hourly return thereafter',
        'Fallback: where a figure is reported but unconfirmed, … '],
w_check=['Does line 3 include the premises plan?',
         'Is every action marked for feasibility today?',
         'Is the local premises fact placed first?',
         'Are casualty figures excluded from your own voice?'],

t_title='The first hour of a crisis at post',
t_fig=figs.split('AT 14:12',
                 'Ask for this',
                 ['twenty actions in order',
                  'each one marked for who does it',
                  'the log format, with times',
                  'the holding statement without numbers'],
                 'Supply this in five minutes',
                 ['how many staff are in the building',
                  'which arrangements have lapsed',
                  'where your only entrance is',
                  'what you have actually confirmed']),
t_fig_cap='Forty seconds for the order of the hour; five minutes to make it this building’s hour.',
t_body=[
 'Ask for the first hour as a numbered list of actions with the person responsible for each, '
 'and ask for it to begin with accounting for everybody and opening a timed log, because those '
 'two are the ones that are forgotten and the ones everything later depends on.',
 'Then reconcile it against today, out loud, with whoever is in the room: how many of us are '
 'here, which of these actions needs more people than that, and which arrangement in this list '
 'no longer exists. Rewrite the impossible actions as what one officer can actually do, and say '
 'the hours.',
 'Then add the local fact. Every post has one thing that governs its own crises — a single '
 'entrance, a road that floods, a landlord who holds the only key — and no generic list contains '
 'it. State it first, and keep every number you have not confirmed out of your own voice.'],
t_say=[('Ask for the hour: ', 'Twenty actions for the first hour, in order, with who does each.'),
       ('Reconcile it: ', 'We are four in the building today: which of these cannot be done?'),
       ('Strike the numbers: ', 'Draft the statement with no casualty figure of any kind.')],
t_bound='A first-hour list describes a Mission in general. It does not know how many officers '
        'are in the building today, that the wardens’ network lapsed in 2024, or that the only '
        'public entrance opens onto the square where the incident is.',
t_a=[('Twenty actions for the first hour, with who does ____________.', 'each'),
     ('We are four in the building ____________.', 'today'),
     ('Draft the statement with no casualty ____________ of any kind.', 'figure'),
     ('It does not know how many officers are in the ____________.', 'building'),
     ('That the wardens’ network ____________ in 2024.', 'lapsed'),
     ('Keep every number you have not ____________ out of your own voice.', 'confirmed')],
t_b_rubric='Say whether each belongs in the first hour or must be struck.',
t_b=[('Account for everybody and open a timed log.', 'first hour: everything depends on it'),
     ('Activate the wardens’ network.', 'struck: the network lapsed in 2024'),
     ('Put a notice on the entrance before the statement.', 'first hour: it is this post’s own fact'),
     ('Issue a statement giving eleven injured.', 'struck: the figure is unverified')],

case=dict(
 title='The Decision Room · Eighteen of twenty-two, and a door nobody listed',
 brief=[
  'A fire in an adjoining market fills the square outside a consulate at ten past two. Four '
  'staff are in the building with two visitors; the consular queue has dispersed into the '
  'crowd; the street is closed and the building’s only public entrance opens onto the square.',
  'A first-hour action list of twenty-two items is produced in forty seconds, in a sensible '
  'order, and is markedly better than the two-year-old plan in the drawer. Four of the actions '
  'assume a twenty-four-hour enquiry line staffed by three officers and an active wardens’ '
  'network that lapsed in 2024.',
  'The accompanying holding statement contains a casualty figure of eleven injured, taken '
  'without attribution from a local radio report of 14:25, which no authority has confirmed to '
  'the Mission.'],
 exhibit=figs.datatable('THE HOUR AS IT HAPPENED',
                        ['Time', 'Entry', 'Source'],
                        [['14:12', 'log opened', 'consul'],
                         ['14:22', 'all staff and visitors accounted for', 'muster'],
                         ['14:25', 'entrance secured', 'duty guard'],
                         ['14:32', 'capital informed by telephone', 'consul'],
                         ['14:35', 'notice on entrance, rear gate opened', 'consul'],
                         ['14:40', 'no nationals known affected', 'last confirmation']]),
 exhibit_cap='Six entries, each with a time and a source, and not one casualty figure among them.',
 exhibit_note='The entry at 14:35 is the one the generic list did not contain, and it is the '
              'one every caller asked about for the rest of the afternoon.',
 voices=[('Bassel Tannous', 'consul',
          'Twenty-two actions in forty seconds while a square filled up. The plan in the drawer would not have helped.'),
         ('Rim Haddad', 'consular assistant',
          'And four of them needed a network that has not existed since Nadia left.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And a number from the radio in our own first sentence, which would have made it ours.')],
 steps=[('Find it', 'What did the list get right?'),
        ('Compare it', 'The twenty-two actions against today’s staffing.'),
        ('Infer it', 'Why is the door missing?'),
        ('Weigh it', 'Forty seconds of order against four impossible actions.'),
        ('Decide', 'What is done in the first five minutes of any crisis?')],
 analysis=[('Find it. What was right?', 'twenty-two actions in a sensible order, in forty seconds'),
           ('Compare it. Against staffing?', 'four actions needed people and a network we lack'),
           ('Infer it. Why no door?', 'a generic list cannot know this building'),
           ('Weigh it. What is the balance?', 'a real gain, requiring five minutes of reconciliation'),
           ('Decide. What comes first?', 'muster, log, reconcile, and the local fact')],
 decision='Decide the drill, in four lines.',
 decision_steps=['Say what the first two actions always are.',
                 'Say what is done with a generic list.',
                 'Say where the local fact goes.',
                 'Say what may never appear in a Mission statement.'],
 bank=['The first two actions are always to account for everybody and to open a timed log.',
       'A generic list is reconciled against today’s staffing within five minutes, and impossible actions are rewritten.',
       'The post’s own governing fact is stated first and acted on before any statement is issued.',
       'No casualty figure appears in a Mission statement until an authority has confirmed it to the Mission.'],
 outcome='The notice goes on the entrance at 14:35 and the rear gate is opened, which is how '
         'the two visitors leave and how the first enquirer reaches the building. The statement '
         'goes out at 15:05 with no figure, the hours of the line, and the time of the Mission’s '
         'last confirmation on nationals. At 17:20 the authorities confirm a figure, and the '
         'Mission still does not publish it, because it is theirs to publish.',
 outcome_q=[('What went up at 14:35?', 'a notice on the entrance'),
            ('How did the visitors leave?', 'by the rear gate'),
            ('What did the statement contain?', 'no figure, the line’s hours, the time of last confirmation'),
            ('When was a figure confirmed?', 'at 17:20'),
            ('Did the Mission publish it?', 'no: it was theirs to publish')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · What do I do in the next hour?',
 task=['A consul asked for a first-hour plan eight minutes into a crisis.',
       'This is the instruction as it was given, and what came back.'],
 draft=['What do I do in the next hour?',
        'There is a fire in the square.',
        'Give me the standard steps.',
        'And a statement I can put out.',
        'Assume normal staffing.',
        'Quickly, please.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one is the reason four actions were impossible.',
 asked=['The standard steps', 'A statement', 'Normal staffing'],
 back=['22 actions, good order', '4 impossible with 4 staff', '1 unverified figure in the statement'],
 gap='Nobody said how many staff were present, where the entrance was, or that no figure may be used.',
 back_cap='A sound generic hour for a Mission with three more officers and a working network.',
 back_note='Assume normal staffing is the instruction that produced four unusable actions, and '
           'give me a statement I can put out invited a casualty figure, because that is what '
           'such statements contain.',
 diagnosis=[('“the standard steps”', 'ambiguous referent'),
            ('“a statement”', 'ambiguous referent'),
            ('“assume normal staffing”', 'hidden assumption'),
            ('“there is a fire in the square”', 'hidden assumption'),
            ('“quickly, please”', 'unstated exception'),
            ('“the next hour”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that the list fits this building and this afternoon.',
 scaffold=['what must be completed, and with whom',
           'which incident, from what time, and what is separate',
           'staffing, premises, lapsed arrangements and the log',
           'order, feasibility, the local fact and the rule on figures',
           'when the list is ready and what follows',
           'what is done with an unconfirmed figure'],
 bank=['Purpose: so that the Mission completes the first hour with the … staff actually present',
       'Scope: the incident in the square from … ; later consular enquiries handled separately',
       'Inputs: today’s staffing, the premises plan including entrances, the lapsed wardens’ list, and the log from … ',
       'Criteria: actions in order, each marked possible or not with today’s staff; impossible actions rewritten; the premises fact first; no casualty figure in our own voice',
       'Done: the reconciled list in the crisis cell by … and an hourly return thereafter',
       'Fallback: an unconfirmed figure is logged with its source and time and kept out of every statement'],
 check=['Is the number of staff present stated?',
        'Is the premises plan an input?',
        'Must impossible actions be rewritten rather than dropped?',
        'Are casualty figures excluded?'],
 model=['so that the Mission completes the first hour correctly with the 4 staff actually present',
        'the incident in the square from 14:10; the consular enquiries of the following days are handled separately',
        'today’s staffing, the premises plan including entrances, the lapsed wardens’ list, and the incident log from 14:12',
        'actions in order, each marked possible or not with today’s staff; impossible actions rewritten to what 1 officer can do; the premises fact stated first; no casualty figure in our own voice',
        'the reconciled list in the crisis cell by 14:30 and an hourly return thereafter',
        'where a figure is reported but unconfirmed, it is logged with its source and time and kept out of every statement'],
 cost='4 of 22 actions needed staff we do not have, and 1 unverified figure would have become '
      'the Mission’s own.'),

feet=dict(
 title='On Your Feet · A relative is at the rear gate asking about her brother',
 setting=[
  'It is a quarter past three. The statement has gone out, the line is open, and a woman has '
  'come to the rear gate. Her brother works in the market and she has not reached him since two '
  'o’clock.',
  'You know nothing about her brother. You have no casualty information of any kind, you cannot '
  'enter the square, and the authorities have not answered your telephone calls since half past '
  'two.'],
 ladder=[('Is my brother on a list?', 'the question you cannot answer'),
         ('The radio said eleven injured', 'the figure you must not adopt'),
         ('You are not even trying', 'the accusation you must take without arguing')],
 cap='Three turns at a rear gate, with nothing confirmed to you at all.',
 turns=[('Turn 1 · The woman', 'Is my brother on any list you have?'),
        ('Turn 2 · The woman', 'The radio said eleven people were injured. Is he one of them?'),
        ('Turn 3 · The woman', 'You are not even trying to find out.')],
 holds=['I have no list, and I am not going to tell you anything I have not been told myself.',
        'I have not been given any names or any numbers by the authorities, and I last tried at ten past three.',
        'I am not going to repeat a figure I cannot confirm, because you would hear it from me as a fact.',
        'What I can do is take his name and his place of work now, and ask about him by name.',
        'I will telephone you myself the moment I am told anything, whether it is good or not.',
        'I understand why it looks that way, and I would rather tell you what I am actually doing than defend myself.'],
 redline='You must not repeat the radio figure, you must not speculate about one person, and '
         'you must not promise that he is safe or that you will find him. Do not defend the '
         'Mission; say what you are doing.',
 score=['Said plainly that there is no list and nothing confirmed.',
        'Gave the time of the last attempt to reach the authorities.',
        'Refused to repeat the unconfirmed figure, and said why.',
        'Took the name and offered a specific action.',
        'Promised a call either way, without promising an outcome.'],
 a=[('What do you say about a list?', 'that you have none and have been told nothing'),
    ('What do you give her?', 'the time of your last attempt to reach the authorities'),
    ('Why not repeat the radio figure?', 'she would hear it from you as a fact'),
    ('What do you take?', 'his name and place of work'),
    ('What do you promise?', 'to telephone her either way'),
    ('What do you not do?', 'defend the Mission')]),

rev_fig=figs.split('A LOG ENTRY',
                   'Always has',
                   ['the time, to the minute',
                    'the source of the information',
                    'whether it is verified',
                    'who acted'],
                   'Can omit',
                   ['articles and auxiliaries',
                    'a subject the reader supplies',
                    'any adjective at all',
                    'everything else']),
rev_fig_cap='14:25 entrance secured (duty guard, confirmed). Four words of grammar gone, nothing of substance.',
rev=dict(
 read=[('When did the fire start?',
        ['at ten past two', 'at noon', 'at four', 'overnight'], 0),
       ('How many actions were produced?',
        ['twenty-two', 'four', 'eleven', 'eighteen'], 0),
       ('What lapsed in 2024?',
        ['the wardens’ network', 'the evacuation plan',
         'the enquiry line', 'the incident log'], 0),
       ('What was missing from the generic list?',
        ['the building’s only entrance', 'the muster',
         'the log', 'the holding statement'], 0)],
 listen_text='Ask for twenty actions in order with the person responsible for each, beginning '
             'with the muster and a timed log. Reconcile the list against today’s staffing '
             'within five minutes, add your post’s own governing fact, and keep every '
             'unconfirmed number out of your own voice.',
 listen=[('Ask for twenty actions in order with the person ____________.', 'responsible'),
         ('Beginning with the muster and a timed ____________.', 'log'),
         ('Reconcile the list against today’s ____________.', 'staffing'),
         ('Keep every unconfirmed ____________ out of your own voice.', 'number')],
 speak=['Turn nine full sentences into log entries with time, source and verification.',
        'Then decline four times to give a casualty figure, saying what you can confirm.'],
 write='Write a six-line tasking for a first-hour plan.',
 vocab=[('The accounting for all persons present is a ____________.', 'muster'),
        ('The running written record of a crisis is an incident ____________.', 'log'),
        ('A direction to remain where one is is a ____________ instruction.', 'shelter-in-place'),
        ('A report submitted every hour is an ____________ return.', 'hourly')],
 gram=[('Square closed. Rear access ____________ passable on foot.', 'still'),
       ('Two enquiries received. Both ____________ answered.', 'already'),
       ('One officer on duty. Line open ____________ 15:00.', 'from'),
       ('Log opened 14:12. Entries ____________ timed.', 'all')]),

found=['Account for everybody and open a timed log before anything else.',
       'Reconcile any generic action list against today’s staffing within five minutes.',
       'Write your post’s own governing fact at the top of its crisis plan.',
       'Keep every unconfirmed number out of your Mission’s own voice.'],
end_line='Forty seconds buys you the order of the hour. Five minutes makes it your hour.',
end_next='Next: The Community Meeting')
