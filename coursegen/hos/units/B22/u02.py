# -*- coding: utf-8 -*-
import figs

U = dict(
num=2,
title='Chairing a Committee That Decides Something',
gram='chairing to a decision: the question, the options, the resolution',
ai='a committee agenda built around decisions rather than updates',
strap='CEFR B2 · Grammar: chairing to a decision: the question, the options, the resolution · '
      'AI: a committee agenda built around decisions rather than updates',
cando=['open an item with the question it answers',
       'bring in the people who have not spoken',
       'summarise before a decision rather than after it',
       'read a resolution back to the room',
       'write a six-line tasking for a committee agenda'],

hero=('EVERY ITEM IS A QUESTION OR IT IS NOT AN ITEM.',
      ['An agenda of nouns produces a meeting of speeches.',
       'An agenda of questions produces a meeting of decisions.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Nine items, four questions, and one resolution read back before the vote.',

warm=['How many items on your last committee agenda were questions?',
      'Who spoke most, and who did not speak?',
      'What was decided, and where is it written?'],

vocab=[
 ('an agenda of decisions', 'an agenda written as questions'),
 ('an agenda of updates', 'an agenda written as nouns'),
 ('a question the committee is answering', 'the only proper form of an item'),
 ('an item with no question in it', 'an item that will produce speeches'),
 ('a paper taken as read', 'a paper everybody has actually read'),
 ('a paper read aloud to the room', 'twenty minutes nobody needed'),
 ('a chair who summarises before the vote', 'a chair who makes the decision visible'),
 ('a chair who lets the loudest voice decide', 'a chair who has delegated the decision'),
 ('a member who has not spoken', 'the person the chair must bring in'),
 ('a member who always speaks first', 'the person the chair must sometimes hold'),
 ('a conflict of interest declared', 'an interest on the record'),
 ('a conflict nobody mentioned', 'a decision that may be void'),
 ('a decision taken by silence', 'a decision nobody can later own'),
 ('a decision taken by a show of hands', 'a decision with a count behind it'),
 ('a resolution read back to the room', 'the sentence everybody has heard the same way'),
 ('a minute written during the meeting', 'a minute that matches the meeting'),
 ('an action with an owner and a date', 'the only kind of action'),
 ('a meeting that overruns by forty minutes', 'a meeting whose last items were not decided'),
 ('an item deferred for the third time', 'an item somebody must now own or kill'),
 ('a meeting that ends early', 'the mark of an agenda written properly')],

read=[
 'The agenda has nine items and seven of them are nouns: finance, workforce, '
 'quality, estates. A noun cannot be answered, so each will produce a speech and '
 'nothing will be decided.',
 'Rewrite every item as the question the committee is being asked. Shall we close '
 'the Harbourview unit on the thirtieth of June? How many beds shall we commission '
 'at Marlowe for the winter?',
 'Then open each item by reading the question aloud, say how long the item has, '
 'and ask the person who has done the work to speak for two minutes rather than '
 'reading their paper.',
 'Bring in the people who have not spoken, by name, before the people who always '
 'do. The quietest member of most committees is the one who has read the '
 'appendix.',
 'And before any vote, read the resolution back in the words the minute will use, '
 'so that nine people are agreeing to the same sentence rather than to the same '
 'atmosphere.'],

dp1=('Chairing', 'Governance guidance commonly recommends agendas framed as '
     'decisions, stated time allocations, declarations of interest at the outset, '
     'summary of the proposition before any vote, and contemporaneous minuting of '
     'resolutions. Procedures are set by the organisation’s standing orders.',
     'Source: general corporate governance guidance, 2025–2026.'),

c_a=[('How many items are nouns?', 'seven of nine'),
     ('Why can a noun not be answered?', 'because it is not a question'),
     ('How is each item rewritten?', 'as the question the committee is being asked'),
     ('What are the three things done when opening an item?',
      'read the question, state the time, and ask for two minutes rather than the paper'),
     ('Who is brought in first?', 'the people who have not spoken, by name'),
     ('What happens before any vote?', 'the resolution is read back in the minute’s words')],

c_b=[('Seven of the nine items are nouns.', 'T'),
     ('A noun can be answered.', 'F'),
     ('Each item is opened by reading the question aloud.', 'T'),
     ('The papers are read aloud to the room.', 'F'),
     ('Quiet members are brought in by name.', 'T'),
     ('The resolution is read back before the vote.', 'T')],

c_c=[('____________ we close the unit on the thirtieth of June?', 'Shall'),
     ('How many beds ____________ we commission for the winter?', 'shall'),
     ('This item ____________ twelve minutes.', 'has'),
     ('Dr Eze, you ____________ not spoken on this.', 'have'),
     ('The resolution ____________ that we approve the closure.', 'is'),
     ('I ____________ read it back before we vote.', 'shall')],

c_d=[('Write each item as ( a question / a subject heading ).', ['a question', 'a subject heading'], 0),
     ('Ask the author for ( two minutes / the paper read aloud ).',
      ['two minutes', 'the paper read aloud'], 0),
     ('Bring in ( those who have not spoken / the senior members ).',
      ['those who have not spoken', 'the senior members'], 0),
     ('Summarise ( before the vote / after it ).',
      ['before the vote', 'after it'], 0),
     ('Minute the resolution ( during the meeting / afterwards ).',
      ['during the meeting', 'afterwards'], 0)],

c_e=('A question, a noun, a resolution or an action? Decide what each is.',
     [('shall we close the Harbourview unit on the thirtieth of June?', 'a question'),
      ('workforce', 'a noun'),
      ('that the committee approves closure with effect from the thirtieth of June', 'a resolution'),
      ('Amara Nwosu to confirm transport arrangements by the ninth', 'an action'),
      ('how many beds shall we commission at Marlowe?', 'a question'),
      ('estates update', 'a noun')],
     ['a question', 'a noun', 'a resolution', 'an action']),

v_fig_title='SIX WORDS OF A COMMITTEE CHAIRED',
v_fig=[('doc', 'an agenda of decisions'), ('key', 'a question the committee is answering'),
       ('people', 'a member who has not spoken'),
       ('scale', 'a resolution read back to the room'),
       ('clock', 'a meeting that ends early'),
       ('note', 'an action with an owner and a date')],
v_fig_cap='Six words for nine items and four decisions.',

v_a=[('An agenda written as nouns is an agenda of ____________.', 'updates'),
     ('An item that will produce speeches is an item with no ____________ in it.', 'question'),
     ('Twenty minutes nobody needed is a paper read ____________ to the room.', 'aloud'),
     ('A chair who has delegated the decision is a chair who lets the ____________ voice decide.', 'loudest'),
     ('A decision that may be void is a conflict nobody ____________.', 'mentioned'),
     ('A decision nobody can later own is a decision taken by ____________.', 'silence'),
     ('A minute that matches the meeting is a minute written ____________ the meeting.', 'during'),
     ('An item somebody must now own or kill is an item ____________ for the third time.', 'deferred')],

v_b=[('A paper taken as read is a paper everybody', 'has actually read.'),
     ('A member who always speaks first is the person', 'the chair must sometimes hold.'),
     ('A decision taken by a show of hands is a decision', 'with a count behind it.'),
     ('A meeting that overruns by forty minutes is a meeting', 'whose last items were not decided.'),
     ('A meeting that ends early is the mark', 'of an agenda written properly.')],

g_title='Grammar: chairing to a decision: the question, the options, the resolution',
g_rule=['Write items as direct questions with shall we: shall we close the '
        'Harbourview unit on the thirtieth of June? The form makes the answer '
        'either yes or no, which is what a committee is for.',
        'Allocate time out loud with has: this item has twelve minutes. The verb '
        'is in the present and it is a statement rather than a hope.',
        'Bring somebody in by name and in the perfect: Dr Eze, you have not spoken '
        'on this. The perfect is a fact rather than a reproach.',
        'Read the resolution back with the resolution is that: the resolution is '
        'that the committee approves closure with effect from the thirtieth of '
        'June. Then ask for the vote, and not before.'],
g_fig=('LOOSE',
       ['Item four, workforce. Siobhán, do you want to take us through the paper?',
        'Does anybody have any thoughts on this before we move on?',
        'I think there is broad agreement in the room, so we shall proceed.',
        'We are running rather short of time, so let us come back to item eight.'],
       'PRECISE',
       ['Item four: shall we commission fourteen additional beds at Marlowe for the winter? This item has twelve minutes.',
        'Siobhán, two minutes on the recommendation, and we have all read the paper.',
        'Grace, you have not spoken on this, and you run the service.',
        'The resolution is that the committee approves fourteen beds at Marlowe from the first of November. Those in favour?'],
       'four sentences that produce a discussion',
       'four sentences that produce a minute'),
g_fig_cap='Shall we. This item has. You have not spoken. The resolution is that.',

g_a=[('Item four: ____________ we commission fourteen beds?', 'shall'),
     ('This item ____________ twelve minutes.', 'has'),
     ('Siobhán, two minutes ____________ the recommendation.', 'on'),
     ('We ____________ all read the paper.', 'have'),
     ('Grace, you ____________ not spoken on this.', 'have'),
     ('And you ____________ the service.', 'run'),
     ('The resolution ____________ that the committee approves fourteen beds.', 'is'),
     ('____________ the first of November.', 'From'),
     ('Those ____________ favour?', 'in')],

g_b=[('( item four, workforce / shall we commission fourteen beds at Marlowe? ) — the item.', ['item four, workforce', 'shall we commission fourteen beds at Marlowe?'], 1),
     ('( this item has twelve minutes / we are a little tight for time ) — the time.',
      ['this item has twelve minutes', 'we are a little tight for time'], 0),
     ('( two minutes on the recommendation / do take us through the paper ) — the introduction.',
      ['two minutes on the recommendation', 'do take us through the paper'], 0),
     ('( Grace, you have not spoken and you run the service / does anybody have any thoughts? ) — bringing in.',
      ['Grace, you have not spoken and you run the service', 'does anybody have any thoughts?'], 0),
     ('( the resolution is that the committee approves fourteen beds from November / there is broad agreement ) — the resolution.',
      ['the resolution is that the committee approves fourteen beds from November', 'there is broad agreement'], 0),
     ('( those in favour? / I think we are agreed ) — the vote.',
      ['those in favour?', 'I think we are agreed'], 0)],

d1=dict(
 title='Nine nouns and four questions',
 fig=(['Nine items.', 'Seven nouns.'],
      ['Four questions.', 'Ends at twenty past.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, over a draft agenda.',
 lines=[('Siobhán', 'Nine items: finance, workforce, quality, estates, digital, two reports and two updates.'),
        ('Margarida', 'What is the committee deciding under workforce?'),
        ('Siobhán', 'Whether to commission fourteen beds at Marlowe for the winter.'),
        ('Margarida', 'Then that is the item. Shall we commission fourteen beds at Marlowe from the first of November?'),
        ('Siobhán', 'And the ones that are genuinely updates?'),
        ('Margarida', 'Go in the pack and are not on the agenda. If nobody has a question, an update is a document.'),
        ('Siobhán', 'Somebody will say their item has been demoted.'),
        ('Margarida', 'Somebody always does, and the answer is that their paper will be read by nine people instead of described to them for twenty minutes.'),
        ('Siobhán', 'You have put twelve minutes against the Marlowe item.'),
        ('Margarida', 'And I shall say so when I open it, because an unstated time allowance is always spent by the first speaker.'),
        ('Siobhán', 'And the vote?'),
        ('Margarida', 'I read the resolution back in the words the minute will use, and then I ask. Nine people agreeing to an atmosphere is how we got the pathology paper.')],
 a=[('How many items and how many nouns?', 'nine items, seven of them nouns'),
    ('What is the real workforce question?', 'whether to commission fourteen beds at Marlowe from the first of November'),
    ('What happens to genuine updates?', 'they go in the pack and off the agenda'),
    ('Why state the time allowance aloud?', 'because an unstated allowance is spent by the first speaker'),
    ('What is done before the vote?', 'the resolution is read back in the minute’s words')],
 b=[('What is the committee ____________?', 'deciding'),
    ('An update is a ____________.', 'document'),
    ('Twelve minutes ____________ the Marlowe item.', 'against'),
    ('Nine people agreeing to an ____________.', 'atmosphere')]),

d2=dict(
 title='The decision taken by silence',
 fig=(['No vote taken.', 'Minute says approved.'],
      ['Two members dissent.', 'Nobody recorded it.']),
 cap='Margarida Pires and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'The March minute says the committee approved the digital contract. I do not remember a vote.'),
        ('Margarida', 'There was no vote. The chair said there seemed to be agreement and moved on.'),
        ('Peter', 'Two of us had reservations and said so.'),
        ('Margarida', 'And the minute does not record them, because the chair summarised after the discussion rather than before the decision.'),
        ('Peter', 'Is the decision valid?'),
        ('Margarida', 'Probably, and that is not the point. It is a decision nobody in the room can now describe in the same words.'),
        ('Peter', 'The chair would say that forcing a vote on every item would be adversarial.'),
        ('Margarida', 'A show of hands is not adversarial, it is arithmetic. What is adversarial is discovering in June that you were counted as supporting something.'),
        ('Peter', 'What do you want in the standing orders?'),
        ('Margarida', 'That every decision is preceded by the resolution read aloud, and that dissent is recorded by name where a member asks for it.'),
        ('Peter', 'Some members will never ask.'),
        ('Margarida', 'Then the chair asks them, which takes four seconds and is the whole of the job.')],
 unresolved=True,
 a=[('What does the March minute say?', 'that the committee approved the digital contract'),
    ('What happened in the room?', 'the chair said there seemed to be agreement and moved on'),
    ('What is missing from the minute?', 'the reservations of two members'),
    ('Why is a show of hands not adversarial?', 'because it is arithmetic'),
    ('What does Margarida want in the standing orders?', 'the resolution read aloud before every decision, and dissent recorded by name on request')],
 b=[('There was no ____________.', 'vote'),
    ('Summarised ____________ the discussion rather than before the decision.', 'after'),
    ('A show of hands is ____________.', 'arithmetic'),
    ('Which takes four ____________.', 'seconds')]),

speak=[('Turn it into a question',
        ['Your partner reads out eight noun agenda items.',
         'Rewrite each as the question the committee must answer.',
         'Four each, then swap.']),
       ('Bring them in',
        ['Your partner plays a committee in which two members dominate.',
         'Bring in the silent members by name.',
         'Three each, then swap.']),
       ('Read it back',
        ['Your partner gives you six loose agreements.',
         'Read back a resolution in the words a minute would use.',
         'Three each, then swap.'])],

ext_title='A committee agenda built around decisions rather than updates',
ext_fig=figs.datatable('WHAT THE AGENDA CARRIES',
                       ['Line', 'Content'],
                       [['the question', 'each item as a question'],
                        ['the time', 'minutes allocated to each'],
                        ['the paper', 'taken as read, two minutes spoken'],
                        ['the resolution', 'drafted in advance, read aloud'],
                        ['the updates', 'in the pack, off the agenda'],
                        ['the actions', 'owner and date against each']]),
ext_fig_cap='Six lines per agenda, and the fifth one gives you back forty minutes.',
ext=[
 'A committee agenda built around decisions rather than updates turns nine '
 'speeches into four decisions and sends everybody away ten minutes early.',
 'Give it the draft agenda, the papers, what each item is actually asking the '
 'committee to settle, the declared interests, and the actions outstanding from '
 'the last meeting.',
 'Ask it to rewrite every item as a direct question and to move anything with no '
 'question in it into the pack as a document.',
 'Ask for a draft resolution against every decision item, written in the words a '
 'minute would use, so the chair can read it aloud before the vote.',
 'Ask for a time allocation against each item that adds to less than the meeting, '
 'and for the items most likely to be deferred to be placed first rather than '
 'last.',
 'What it cannot do is notice that the person who runs the service has not '
 'spoken. Looking round a room and seeing who is silent is the whole art of '
 'chairing, and it cannot be delegated to an agenda.'],

dp2=('Meeting effectiveness', 'Governance literature commonly reports that '
     'agendas framed as questions with stated time allocations produce more '
     'recorded decisions per meeting, and that decisions taken without a stated '
     'resolution are more often disputed afterwards.',
     'Source: general corporate governance literature, 2025–2026.'),

e_a=[('What does the agenda turn nine speeches into?', 'four decisions, ending ten minutes early'),
     ('What five things are given to it?', 'the draft agenda, the papers, what each item is settling, the declared interests and the outstanding actions'),
     ('What happens to an item with no question?', 'it goes into the pack as a document'),
     ('What is drafted against every decision item?', 'a resolution in the words a minute would use'),
     ('Where are items likely to be deferred placed?', 'first rather than last')],
e_b=[('Every item is rewritten as a question.', 'T'),
     ('A draft resolution accompanies each decision item.', 'T'),
     ('It notices who has not spoken.', 'F'),
     ('Time allocations add to less than the meeting.', 'T'),
     ('Question-framed agendas produce more decisions.', 'T'),
     ('Decisions without a stated resolution are rarely disputed.', 'F')],

w_model='Purpose: so that a committee of nine leaves having decided four things '
       'it can describe in the same words. Scope: the committees I chair; the '
       'board’s own business is the chair’s, clinical quality decisions require '
       'the medical director’s presence, and no item is taken that falls outside '
       'the committee’s terms of reference. Inputs: the draft agenda, the papers, '
       'what each item is actually asking the committee to settle, the declared '
       'interests, the actions outstanding, and the time available. Criteria: '
       'every item written as a direct question; anything without a question '
       'moved into the pack; a time allocation against each item adding to less '
       'than the meeting; a draft resolution for every decision item in the words '
       'the minute will use; interests declared at the outset; and items likely to '
       'be deferred placed first. Done: the resolution is read aloud before every '
       'vote, the decision and any dissent are minuted during the meeting, and '
       'every action carries an owner and a date. Fallback: where an item has been '
       'deferred twice, I either allocate it the time it needs or remove it and '
       'tell its author that it will not return.',
w_fig=figs.spec_card('SIX LINES FOR A COMMITTEE AGENDA',
                     [('Purpose', 'four decisions described in the same words'),
                      ('Scope', 'committees I chair; within the terms of reference'),
                      ('Inputs', 'agenda, papers, real questions, interests, actions'),
                      ('Criteria', 'questions, times, draft resolutions, deferrals first'),
                      ('Done', 'read aloud, minuted live, actions owned and dated'),
                      ('Fallback', 'deferred twice: give it time or kill it')]),
w_fig_cap='Six lines, and the sixth one is how an agenda stops growing.',
w_task='Write a six-line tasking for a committee agenda.',
w_steps=['Line 1: say what the committee must leave having done.',
         'Line 2: say which committees are yours, and what is out of scope.',
         'Line 3: say what you are giving it.',
         'Line 4: say what every item must be and carry.',
         'Line 5: say what happens at the moment of decision.',
         'Line 6: say what you do with an item deferred twice.'],
w_bank=['Purpose: so that a committee of nine leaves having decided four things it can describe in the same words',
        'Scope: the committees I chair; the board’s own business is the chair’s, clinical quality decisions require the medical director’s presence, and nothing outside the terms of reference is taken',
        'Inputs: the draft agenda, the papers, what each item is actually asking the committee to settle, the declared interests, the actions outstanding, and the time available',
        'Criteria: every item a direct question; anything without a question moved into the pack; a time allocation against each item adding to less than the meeting; a draft resolution in the minute’s words; interests declared at the outset; likely deferrals placed first',
        'Done: the resolution is read aloud before every vote, the decision and any dissent are minuted during the meeting, and every action carries an owner and a date',
        'Fallback: where an item has been deferred twice, I either allocate it the time it needs or remove it and tell its author that it will not return'],
w_check=['Is every item a question?',
         'Has every decision item a draft resolution?',
         'Do the time allocations add up?',
         'Are actions owned and dated?'],

t_title='A committee agenda built around decisions rather than updates',
t_fig=figs.split('NINE ITEMS AND FOUR DECISIONS',
                 'It can draft',
                 ['items as questions',
                  'time allocations',
                  'draft resolutions',
                  'the pack of documents'],
                 'It must not supply',
                 ['who has not spoken',
                  'the judgement of the room',
                  'the decision itself',
                  'the courage to kill an item']),
t_fig_cap='It drafts the agenda. Seeing who is silent is the art of chairing.',
t_body=[
 'Give it the draft agenda, the papers, what each item is settling, the declared '
 'interests and the time available.',
 'A committee agenda built around decisions rather than updates rewrites every '
 'item as a direct question.',
 'Then ask for a draft resolution in the words the minute will use.'],
t_say=[('Item four: ', 'Shall we commission fourteen beds at Marlowe?'),
       ('This item has: ', 'Twelve minutes.'),
       ('The resolution is: ', 'That the committee approves fourteen beds.')],
t_bound='It cannot notice that the person who runs the service has not spoken, and '
        'that noticing is most of what a chair is for.',
t_a=[('Give it the draft ____________.', 'agenda'),
     ('And what each item is ____________.', 'settling'),
     ('And the declared ____________.', 'interests'),
     ('Rewrite every item as a direct ____________.', 'question'),
     ('And draft a ____________ for each decision.', 'resolution'),
     ('In the words the ____________ will use.', 'minute')],
t_b_rubric='Say what the agenda work should do with each item.',
t_b=[('“item four: workforce”', 'rewrite it as the question being settled'),
     ('a paper with no decision in it', 'move it into the pack as a document'),
     ('“there seems to be broad agreement”', 'draft a resolution to read aloud'),
     ('an item deferred twice already', 'place it first or remove it')],

case=dict(
 title='The Decision Room · The agenda of nouns',
 brief=[
  'A hospital committee used a standing agenda of subject headings, with papers '
  'presented by their authors and decisions recorded as they emerged.',
  'Over two years, 24 meetings considered 196 items. 41 decisions were recorded. 17 '
  'items were deferred three times or more. The mean overrun was 34 minutes, and '
  'the last two items were deferred in 19 of the 24 meetings. In 6 cases a '
  'recorded decision was later disputed by a member who said they had not agreed '
  'to it.',
  'The agenda was rewritten as questions with time allocations, with updates moved '
  'into the pack and resolutions read aloud before each vote. Recorded decisions '
  'rose to 78 in 24 meetings and disputed decisions fell to none.'],
 exhibit=figs.datatable('TWO YEARS OF ONE COMMITTEE',
                        ['Item', 'Before / After'],
                        [['items on the agenda', '196 / 104'],
                         ['decisions recorded', '41 / 78'],
                         ['items deferred three times or more', '17 / 2'],
                         ['mean overrun in minutes', '34 / −6'],
                         ['meetings whose last items were deferred', '19 / 3'],
                         ['decisions later disputed by a member', '6 / 0']]),
 exhibit_cap='Half the items, twice the decisions, and the meeting ending early.',
 exhibit_note='Six recorded decisions were later disputed. In each case the chair '
              'had summarised after the discussion rather than reading a '
              'resolution before the vote.',
 voices=[('A committee member', 'about an agenda of questions',
          'Forcing every item into a yes or no removes the nuance that committees exist to provide.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Nuance produced forty-one decisions in two years and six of them were disputed.'),
         ('A service director', 'about her deferred item',
          'It was last on the agenda three times. I prepared three times. Nobody ever told me it was not going to be heard.')],
 steps=[('Find it', 'How many decisions were recorded?'),
        ('Compare it', 'Items considered against decisions taken.'),
        ('Infer it', 'Why did noun agendas produce fewer decisions?'),
        ('Weigh it', 'Nuance against seventeen items deferred three times.'),
        ('Decide', 'How is an agenda written?')],
 analysis=[('Find it. How many?', '41 decisions from 196 items'),
           ('Compare it. What changed?', '78 decisions from 104 items'),
           ('Infer it. Why fewer?', 'because a heading invites a speech and a question invites an answer'),
           ('Weigh it. What was traded?', 'nuance for seventeen items prepared three times and never heard'),
           ('Decide. How written?', 'as questions, with times, resolutions and updates in the pack')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how an item is written.',
                 'Say what happens to updates.',
                 'Say what happens before a decision.',
                 'Say what happens to a twice-deferred item.'],
 bank=['Every agenda item is written as a question the committee is being asked to answer, and no item appears as a subject heading alone.',
       'Material for information is circulated in the pack and does not appear on the agenda unless a member has asked a question about it.',
       'Before any decision the chair reads aloud the resolution in the words in which it will be minuted, and the decision and any dissent are recorded during the meeting.',
       'An item deferred twice is either given the time it requires at the next meeting or removed, and its author is told which.'],
 outcome='The committee adopts the four lines. Items fall from a hundred and '
         'ninety-six to a hundred and four while recorded decisions rise from '
         'forty-one to seventy-eight, items deferred three times or more fall from '
         'seventeen to two, the mean overrun becomes a mean finish six minutes '
         'early, and no decision is later disputed.',
 outcome_q=[('What happened to the number of items?', 'it fell from 196 to 104'),
            ('What happened to decisions?', 'they rose from forty-one to seventy-eight'),
            ('What happened to repeated deferrals?', 'they fell from seventeen to two'),
            ('What happened to the overrun?', 'it became a finish six minutes early'),
            ('What happened to disputed decisions?', 'there were none')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Item four, workforce',
 task=['This was the agenda circulated for a committee meeting of two hours.',
       'This is what it said.'],
 draft=['Item four: workforce.',
        'Item five: finance and performance update.',
        'Item six: estates matters.',
        'Item seven: digital programme report.',
        'Item eight: items for information.',
        'Item nine: any other business.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six items, no questions, and no time against any of them.',
 asked=['workforce', 'estates matters',
        'any other business'],
 back=['41 decisions from 196 items', '17 items deferred three times',
       'a mean overrun of 34 minutes'],
 gap='Nobody could tell what the committee was being asked to decide, how long any item had, or what a decision would say.',
 back_cap='Six items that will produce six speeches and one deferral.',
 back_note='“Any other business” was where the digital contract was approved, '
           'without a paper and without a vote.',
 diagnosis=[('“workforce”', 'unscoped set'),
            ('“estates matters”', 'unscoped set'),
            ('“items for information”', 'unbounded quantity'),
            ('“any other business”', 'unbounded quantity'),
            ('“update”', 'undefined done'),
            ('“report”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that the committee decides four things.',
 scaffold=['what the committee must leave having done',
           'which committees are yours, and what is out of scope',
           'what you are giving it',
           'what every item must be and carry',
           'what happens at the moment of decision',
           'what you do with an item deferred twice'],
 bank=['Purpose: so that a committee of nine leaves having decided four things it can describe in the same words',
       'Scope: the committees I chair; the board’s own business is the chair’s, clinical quality decisions require the medical director’s presence, and no item is taken that falls outside the committee’s terms of reference',
       'Inputs: the draft agenda, the papers, what each item is actually asking the committee to settle, the declared interests, the actions outstanding, and the time available',
       'Criteria: every item written as a direct question; anything without a question moved into the pack; a time allocation against each item adding to less than the meeting; a draft resolution for every decision item in the words the minute will use; interests declared at the outset; and items likely to be deferred placed first',
       'Done: the resolution is read aloud before every vote, the decision and any dissent are minuted during the meeting, and every action carries an owner and a date',
       'Fallback: where an item has been deferred twice, I either allocate it the time it needs or remove it and tell its author that it will not return'],
 check=['Is every item a question?',
        'Has each item a time?',
        'Is there a draft resolution?',
        'Are the updates in the pack?'],
 model=['so that a committee of nine leaves having decided four things it can describe in the same words',
        'the committees I chair; the board’s own business is the chair’s, clinical quality decisions require the medical director’s presence, and no item is taken that falls outside the committee’s terms of reference',
        'the draft agenda, the papers, what each item is actually asking the committee to settle, the declared interests, the actions outstanding, and the time available',
        'every item written as a direct question; anything without a question moved into the pack; a time allocation against each item adding to less than the meeting; a draft resolution for every decision item in the words the minute will use; interests declared at the outset; and items likely to be deferred placed first',
        'the resolution is read aloud before every vote, the decision and any dissent are minuted during the meeting, and every action carries an owner and a date',
        'where an item has been deferred twice, I either allocate it the time it needs or remove it and tell its author that it will not return'],
 cost='41 decisions from 196 items, 17 items deferred three times, and a mean overrun of 34 minutes.'),

lang=dict(
 title='The Unwelcome Number · Telling a chair that his summaries decided things',
 setting=[
  'A committee chair summarises discussions and moves on without a vote. Six of '
  'his recorded decisions have been disputed by members.',
  'Margarida has to change the practice, keep a respected chair’s authority, and '
  'not suggest he has been manipulating anybody.'],
 ladder=[('A chair avoiding adversarial votes', 'and six disputed decisions'),
         ('Six of forty-one', 'decisions a member says they did not take'),
         ('Either keep the consensual style', 'or require the resolution read aloud')],
 cap='Forty-one decisions, six disputed, and four seconds to read a sentence.',
 turns=[('Turn 1 · Margarida', 'Six of the forty-one decisions this committee recorded have been disputed by a member who says they did not agree.'),
        ('Turn 2 · Chair', 'I summarise what I hear. A vote on every item would make this an adversarial committee.'),
        ('Turn 3 · Margarida', 'Reading the resolution aloud takes four seconds, and it is what lets nine people agree to the same sentence.')],
 holds=['Nobody thinks you steered anything; a summary is simply not a resolution.',
        'In all six cases the summary came after the discussion rather than before the decision.',
        'A show of hands is arithmetic, and the minute can record it without naming anybody.',
        'Where a member wants dissent recorded by name, they get it, and you ask the quiet ones whether they do.',
        'I shall draft the resolutions in advance so you are reading rather than composing.',
        'And if this makes the committee feel adversarial after three meetings, tell me and we shall look at it again.'],
 redline='Never record a decision that was not stated aloud before it was taken, '
         'and never let silence stand for assent.',
 score=['Gave the proportion in the first sentence.',
        'Cleared the chair of steering.',
        'Named the structural cause.',
        'Offered to draft the resolutions.',
        'Set a date to reconsider.'],
 a=[('How many decisions were disputed?', 'six of forty-one'),
    ('What is the chair’s objection?', 'that voting on every item is adversarial'),
    ('How long does reading a resolution take?', 'four seconds'),
    ('What was wrong in all six cases?', 'the summary came after the discussion rather than before the decision'),
    ('What will Margarida do?', 'draft the resolutions in advance'),
    ('What is the redline?', 'never let silence stand for assent')]),

rev_fig=figs.split('A COMMITTEE CHAIRED',
                   'Say',
                   ['shall we commission fourteen beds at Marlowe?',
                    'this item has twelve minutes',
                    'Grace, you have not spoken, and you run the service',
                    'the resolution is that the committee approves fourteen beds'],
                   'Never say',
                   ['item four, workforce',
                    'do take us through the paper',
                    'does anybody have any thoughts?',
                    'there seems to be broad agreement']),
rev_fig_cap='Four sentences that produce a minute, and four that produce a deferral.',
rev=dict(
 read=[('How many items are nouns?',
        ['seven of nine', 'two of nine', 'all nine', 'four of nine'], 0),
       ('How is an item rewritten?',
        ['as the question the committee is asked', 'as a shorter heading',
         'as a recommendation', 'as an action'], 0),
       ('Who is brought in first?',
        ['those who have not spoken', 'the senior members',
         'the paper’s author', 'the finance director'], 0),
       ('What happens before any vote?',
        ['the resolution is read back in the minute’s words',
         'the discussion is summarised',
         'the paper is read aloud',
         'the chair gives a view'], 0)],
 listen_text='Give it the draft agenda, the papers, what each item is settling, '
             'the declared interests and the time available. Rewrite every item as '
             'a question.',
 listen=[('Give it the draft ____________.', 'agenda'),
         ('And what each item is ____________.', 'settling'),
         ('And the declared ____________.', 'interests'),
         ('Rewrite every item as a direct ____________.', 'question')],
 speak=['Turn eight noun items into questions.',
        'Then read back six resolutions in a minute’s words.'],
 write='Write a six-line tasking for a committee agenda.',
 vocab=[('An agenda written as questions is an agenda of ____________.', 'decisions'),
        ('An interest on the record is a conflict of interest ____________.', 'declared'),
        ('The person the chair must bring in is a member who has not ____________.', 'spoken'),
        ('The only kind of action is an action with an ____________ and a date.', 'owner')],
 gram=[('Those ____________ favour?', 'in'),
       ('____________ the first of November.', 'From'),
       ('And you ____________ the service.', 'run'),
       ('We ____________ all read the paper.', 'have')]),

found=['Write every item as the question the committee must answer.',
       'State the time an item has when you open it.',
       'Bring in the people who have not spoken, by name.',
       'Read the resolution aloud before the vote, and minute it there and then.'],
end_line='Six recorded decisions were disputed by members who had sat through them, and in every case the chair had summarised after the discussion rather than before the decision.',
end_next='Next: A Strategy That Says What You Will Stop')
