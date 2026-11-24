# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='A Workforce Plan for Five Years',
gram='a long plan in conditionals, with its assumptions named',
ai='a five-year plan drafted in conditionals with its assumptions named',
strap='CEFR B2 · Grammar: a long plan in conditionals, with its assumptions named · '
      'AI: a five-year plan drafted in conditionals with its assumptions named',
cando=['write a long plan in conditionals rather than certainties',
       'name every assumption the plan rests on',
       'separate lead times of months from lead times of years',
       'set the trigger that forces a rewrite',
       'write a six-line tasking for a five-year plan'],

hero=('A FIVE-YEAR PLAN IS A SET OF CONDITIONALS.',
      ['Write it as certainties and it will be quoted at you in 2031',
       'by somebody who was not in the room.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Five years, nine assumptions, and one trigger that forces a rewrite.',

warm=['What five-year plan does your organisation have?',
      'What does it assume?',
      'What would have to change for it to be rewritten?'],

vocab=[
 ('a plan in five one-year steps', 'a plan you can correct annually'),
 ('a plan that is one five-year promise', 'a plan that will be wrong in year two'),
 ('an assumption about retirement', 'the workforce assumption that moves most'),
 ('an assumption about training places', 'a number set outside the organisation'),
 ('an assumption about immigration rules', 'an assumption that may change without notice'),
 ('an assumption nobody wrote down', 'the assumption that will be denied later'),
 ('a conditional you can defend', 'a claim with its condition attached'),
 ('a certainty you cannot', 'a claim that will be quoted against you'),
 ('a scenario in which nothing changes', 'the baseline, which never happens'),
 ('a scenario in which two things change', 'the useful scenario'),
 ('a figure that compounds over five years', 'a small annual change with a large end'),
 ('a figure that is flat', 'a figure somebody has not thought about'),
 ('a post you can grow yourself', 'a post with an internal pipeline'),
 ('a post you must recruit', 'a post exposed to a national market'),
 ('a lead time of three years', 'a decision that must be taken now'),
 ('a lead time of three months', 'a decision that can wait'),
 ('a plan reviewed every April', 'a plan that stays alive'),
 ('a plan nobody reads after year one', 'the usual fate of a five-year plan'),
 ('a trigger that forces a rewrite', 'the condition that admits the plan has failed'),
 ('a number the board will quote in 2031', 'the figure to be careful about today')],

read=[
 'The workforce plan says that the hospital will have two hundred and twelve '
 'nurses in 2031. It will not, because nobody can know that, and the sentence '
 'will be read in 2031 by somebody who was not here.',
 'Write it in conditionals. If retirements continue at the present rate, and if '
 'the two training places are funded, we shall have about two hundred and twelve '
 'nurses in 2031.',
 'Then name the assumptions, all of them, in a list with numbers against them: '
 'nine retirements a year, two funded training places, no change in registration '
 'requirements, and so on.',
 'Separate the lead times. A consultant post takes three years to grow and about '
 'nine months to recruit; a ward clerk takes six weeks. The three-year items are '
 'the only ones that have to be decided this year.',
 'And set the trigger. If retirements exceed fourteen in any year, this plan is '
 'rewritten rather than adjusted, because a plan patched four times is no longer '
 'a plan.'],

dp1=('Workforce planning', 'Workforce planning guidance commonly recommends '
     'expressing projections conditionally, documenting assumptions with their '
     'values, distinguishing roles by lead time, reviewing annually, and setting '
     'thresholds that trigger revision. Methods are set by the organisation’s own '
     'planning framework.',
     'Source: general workforce planning guidance, 2025–2026.'),

c_a=[('What does the plan say about 2031?', 'that the hospital will have two hundred and twelve nurses'),
     ('Why is that wrong?', 'because nobody can know it'),
     ('How should it be written?', 'in conditionals'),
     ('What are the assumptions listed with?', 'numbers against them'),
     ('How long does a consultant post take to grow?', 'three years'),
     ('What is the trigger?', 'retirements exceeding fourteen in any year')],

c_b=[('The plan projects two hundred and twelve nurses.', 'T'),
     ('Projections should be stated as certainties.', 'F'),
     ('Assumptions carry numbers.', 'T'),
     ('A ward clerk takes three years.', 'F'),
     ('Three-year items must be decided this year.', 'T'),
     ('A patched plan is rewritten.', 'T')],

c_c=[('____________ retirements continue at the present rate, we shall have about 212.', 'If'),
     ('And ____________ the two training places are funded.', 'if'),
     ('We ____________ have about two hundred and twelve in 2031.', 'shall'),
     ('A consultant post ____________ three years to grow.', 'takes'),
     ('____________ retirements exceed fourteen, the plan is rewritten.', 'If'),
     ('The plan ____________ reviewed every April.', 'is')],

c_d=[('Write the plan in ( conditionals / certainties ).', ['conditionals', 'certainties'], 0),
     ('List assumptions ( with their values / by theme ).',
      ['with their values', 'by theme'], 0),
     ('Decide this year the items with ( three-year lead times / short lead times ).',
      ['three-year lead times', 'short lead times'], 0),
     ('Set ( a trigger for rewriting / an annual target ).',
      ['a trigger for rewriting', 'an annual target'], 0),
     ('Review ( every April / at the end of five years ).',
      ['every April', 'at the end of five years'], 0)],

c_e=('A conditional, an assumption, a long lead time or a trigger? Decide what '
     'each is.',
     [('if retirements continue at nine a year', 'a conditional'),
      ('nine retirements a year', 'an assumption'),
      ('a consultant post takes three years to grow', 'a long lead time'),
      ('retirements above fourteen in any year', 'a trigger'),
      ('two funded training places a year', 'an assumption'),
      ('a change in registration requirements', 'a trigger')],
     ['a conditional', 'an assumption', 'a long lead time', 'a trigger']),

v_fig_title='SIX WORDS OF A FIVE-YEAR PLAN',
v_fig=[('doc', 'a plan in five one-year steps'), ('key', 'a conditional you can defend'),
       ('scale', 'an assumption nobody wrote down'),
       ('clock', 'a lead time of three years'),
       ('people', 'a post you must recruit'),
       ('note', 'a trigger that forces a rewrite')],
v_fig_cap='Six words for five years and nine assumptions.',

v_a=[('A plan that will be wrong in year two is a plan that is one five-year ____________.', 'promise'),
     ('The workforce assumption that moves most is an assumption about ____________.', 'retirement'),
     ('An assumption that may change without notice is an assumption about ____________ rules.', 'immigration'),
     ('A claim that will be quoted against you is a ____________ you cannot defend.', 'certainty'),
     ('The baseline, which never happens, is a scenario in which ____________ changes.', 'nothing'),
     ('A small annual change with a large end is a figure that ____________ over five years.', 'compounds'),
     ('A post exposed to a national market is a post you must ____________.', 'recruit'),
     ('The usual fate of a five-year plan is a plan nobody reads after year ____________.', 'one')],

v_b=[('An assumption about training places is a number', 'set outside the organisation.'),
     ('A figure that is flat is a figure', 'somebody has not thought about.'),
     ('A post you can grow yourself is a post', 'with an internal pipeline.'),
     ('A plan reviewed every April is a plan', 'that stays alive.'),
     ('A number the board will quote in 2031 is the figure', 'to be careful about today.')],

g_title='Grammar: a long plan in conditionals, with its assumptions named',
g_rule=['Write every projection as a first conditional with its conditions '
        'stacked: if retirements continue at nine a year, and if the two training '
        'places are funded, we shall have about two hundred and twelve nurses in '
        '2031.',
        'Write assumptions as a numbered list of values rather than prose: nine '
        'retirements a year; two funded training places; no change in '
        'registration requirements.',
        'Write lead times with takes and the period: a consultant post takes three '
        'years to grow and about nine months to recruit.',
        'Write the trigger as a conditional with rewritten: if retirements exceed '
        'fourteen in any year, this plan is rewritten rather than adjusted.'],
g_fig=('LOOSE',
       ['The trust will have 212 nurses by 2031.',
        'Workforce supply is expected to improve over the period.',
        'We shall continue to develop our internal pipeline.',
        'The plan will be kept under review as circumstances change.'],
       'PRECISE',
       ['If retirements continue at nine a year and the two training places are funded, we shall have about 212 nurses in 2031.',
        'This plan assumes nine retirements a year, two funded training places and no change in registration requirements.',
        'A consultant post takes three years to grow and nine months to recruit; a ward clerk takes six weeks.',
        'If retirements exceed fourteen in any year, this plan is rewritten rather than adjusted.'],
       'four sentences that will be quoted in 2031',
       'four sentences that will still be defensible in 2031'),
g_fig_cap='If, and if, we shall have about. This plan assumes. Takes. If, rewritten.',

g_a=[('____________ retirements continue at nine a year.', 'If'),
     ('And the two training places ____________ funded.', 'are'),
     ('We ____________ have about 212 nurses in 2031.', 'shall'),
     ('This plan ____________ nine retirements a year.', 'assumes'),
     ('A consultant post ____________ three years to grow.', 'takes'),
     ('And nine months ____________ recruit.', 'to'),
     ('____________ retirements exceed fourteen in any year.', 'If'),
     ('This plan ____________ rewritten rather than adjusted.', 'is'),
     ('The assumptions ____________ reviewed every April.', 'are')],

g_b=[('( the trust will have 212 nurses by 2031 / if retirements continue at nine a year, we shall have about 212 ) — the projection.', ['the trust will have 212 nurses by 2031', 'if retirements continue at nine a year, we shall have about 212'], 1),
     ('( this plan assumes nine retirements a year / workforce supply is expected to improve ) — the assumption.',
      ['this plan assumes nine retirements a year', 'workforce supply is expected to improve'], 0),
     ('( a consultant post takes three years to grow / we shall develop our internal pipeline ) — the lead time.',
      ['a consultant post takes three years to grow', 'we shall develop our internal pipeline'], 0),
     ('( if retirements exceed fourteen, this plan is rewritten / the plan will be kept under review ) — the trigger.',
      ['if retirements exceed fourteen, this plan is rewritten', 'the plan will be kept under review'], 0),
     ('( reviewed every April against the nine assumptions / reviewed as circumstances change ) — the review.',
      ['reviewed every April against the nine assumptions', 'reviewed as circumstances change'], 0),
     ('( about 212 / 212 ) — the precision.',
      ['about 212', '212'], 0)],

d1=dict(
 title='Nine assumptions and one trigger',
 fig=(['Five years.', 'Nine assumptions.'],
      ['Two lead times.', 'One trigger.']),
 cap='Margarida Pires and Hana Kowalczyk, people manager, over a workforce plan.',
 lines=[('Hana', 'The plan says two hundred and twelve nurses in 2031.'),
        ('Margarida', 'On what assumptions?'),
        ('Hana', 'Nine retirements a year, two funded training places, and no change in registration requirements.'),
        ('Margarida', 'Then say that in the sentence, because in 2031 somebody will read two hundred and twelve as a promise made by us.'),
        ('Hana', 'The conditional form makes it look evasive.'),
        ('Margarida', 'It makes it look true. A flat figure in a five-year plan is the thing a successor quotes when they are explaining a shortfall they inherited.'),
        ('Hana', 'And the assumptions in a list?'),
        ('Margarida', 'Nine of them, with numbers, on one page. The retirement assumption is the one that will move, and it is the first on the list.'),
        ('Hana', 'What about the consultant posts?'),
        ('Margarida', 'Three years to grow one. Which means the only decisions this plan actually has to take this year are the three-year ones, and there are four of those.'),
        ('Hana', 'And if the assumptions fail?'),
        ('Margarida', 'If retirements go above fourteen in a year, we rewrite it rather than patch it. A plan patched four times is a document nobody believes, including us.')],
 a=[('What does the plan project?', 'two hundred and twelve nurses in 2031'),
    ('What are the three main assumptions?', 'nine retirements a year, two funded training places, no change in registration'),
    ('Why state them in the sentence?', 'because in 2031 the figure will be read as a promise'),
    ('How many three-year decisions are there?', 'four'),
    ('What is the rewrite trigger?', 'retirements above fourteen in a year')],
 b=[('____________ what assumptions?', 'On'),
    ('A ____________ figure in a five-year plan.', 'flat'),
    ('Three years to ____________ one.', 'grow'),
    ('We ____________ it rather than patch it.', 'rewrite')]),

d2=dict(
 title='The assumption nobody wrote down',
 fig=(['Plan of 2026.', 'Assumption unwritten.'],
      ['Shortfall of 31.', 'Nobody accountable.']),
 cap='Margarida Pires and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'The 2026 plan projected a nursing establishment we are thirty-one short of.'),
        ('Margarida', 'It assumed four funded training places a year. Two were funded.'),
        ('Peter', 'Does the plan say it assumed four?'),
        ('Margarida', 'No. The assumption was in a spreadsheet, and the spreadsheet was on the laptop of somebody who left in 2027.'),
        ('Peter', 'So the plan looks as though it was simply wrong.'),
        ('Margarida', 'It looks as though we were optimistic, and the actual position is that the plan was correct and an external assumption failed.'),
        ('Peter', 'That is a significant difference for whoever wrote it.'),
        ('Margarida', 'It is the difference between a planning error and a funding decision taken elsewhere, and we cannot now demonstrate which it was.'),
        ('Peter', 'Could you reconstruct it?'),
        ('Margarida', 'Partly, from the minutes, and a partial reconstruction four years later is worth very little against a document that should have said it on page one.'),
        ('Peter', 'What do you want in future plans?'),
        ('Margarida', 'Every assumption on one page, with its value, its source, and the name of whoever supplied it. Nine lines, and they are the most valuable page in the plan.')],
 unresolved=True,
 a=[('How short is the establishment?', 'thirty-one'),
    ('What did the plan assume?', 'four funded training places a year'),
    ('How many were funded?', 'two'),
    ('Where was the assumption recorded?', 'in a spreadsheet on the laptop of somebody who left'),
    ('What does Margarida want?', 'every assumption on one page with its value, source and supplier')],
 b=[('Two ____________ funded.', 'were'),
    ('It looks as though we were ____________.', 'optimistic'),
    ('A ____________ reconstruction four years later.', 'partial'),
    ('The most valuable ____________ in the plan.', 'page')]),

speak=[('Add the condition',
        ['Your partner reads out six flat projections.',
         'Restate each as a conditional with its assumptions.',
         'Three each, then swap.']),
       ('Name the assumptions',
        ['Your partner gives you six plans.',
         'List the assumptions each must rest on, with values.',
         'Three each, then swap.']),
       ('Which must be decided now',
        ['Your partner gives you eight posts with lead times.',
         'Say which decisions cannot wait a year.',
         'Four each, then swap.'])],

ext_title='A five-year plan drafted in conditionals with its assumptions named',
ext_fig=figs.datatable('WHAT THE PLAN CARRIES',
                       ['Line', 'Content'],
                       [['the projection', 'conditional, with its conditions'],
                        ['the assumptions', 'values, sources and suppliers'],
                        ['the lead times', 'years and months, separated'],
                        ['this year’s decisions', 'the long-lead items only'],
                        ['the review', 'annual, against the assumptions'],
                        ['the trigger', 'the condition that forces a rewrite']]),
ext_fig_cap='Six lines, and the second one is the page a successor will need.',
ext=[
 'A five-year plan drafted in conditionals with its assumptions named produces a '
 'document a successor can audit rather than inherit.',
 'Give it the current establishment, the leaving and joining rates, the external '
 'numbers with their sources, the lead time for each role, and the decisions that '
 'cannot be deferred.',
 'Ask for every projection as a conditional, with the conditions stated in the '
 'same sentence rather than in an appendix.',
 'Ask for an assumptions page carrying the value, the source and the name of '
 'whoever supplied each figure, since the assumption nobody wrote down is the one '
 'that will be denied.',
 'Ask it to separate roles with lead times over two years from the rest, because '
 'those are the only decisions a five-year plan genuinely has to take in its '
 'first year.',
 'What it cannot do is decide what to do if two assumptions fail at once. That is '
 'judgement under uncertainty, and the plan exists to make it possible rather '
 'than to replace it.'],

dp2=('Long-range planning', 'Workforce planning literature commonly reports that '
     'projections stated without their assumptions are frequently cited as '
     'commitments, that undocumented assumptions cannot be audited after '
     'personnel changes, and that plans without revision triggers are patched '
     'repeatedly rather than rewritten.',
     'Source: general workforce planning literature, 2025–2026.'),

e_a=[('What does the plan produce?', 'a document a successor can audit rather than inherit'),
     ('What five things are given to it?', 'the establishment, the rates, the external numbers with sources, the lead times and the undeferrable decisions'),
     ('Where are the conditions stated?', 'in the same sentence as the projection'),
     ('What does the assumptions page carry?', 'the value, the source and the name of whoever supplied each figure'),
     ('Which roles are separated?', 'those with lead times over two years')],
e_b=[('Projections are conditional.', 'T'),
     ('Assumptions carry sources and suppliers.', 'T'),
     ('It decides what to do if two assumptions fail.', 'F'),
     ('Long-lead roles are separated.', 'T'),
     ('Projections without assumptions are cited as commitments.', 'T'),
     ('Plans without triggers are rewritten promptly.', 'F')],

w_model='Purpose: so that a plan written now can be audited in five years by '
       'somebody who was not here. Scope: the non-medical workforce plan for this '
       'organisation; medical workforce planning is the medical director’s, and '
       'national training numbers are set outside the organisation and are inputs '
       'rather than decisions. Inputs: the current establishment, leaving and '
       'joining rates for the last five years, the external numbers with their '
       'sources and the people who supplied them, the lead time for each role, '
       'and the decisions that cannot be deferred beyond this year. Criteria: '
       'every projection stated as a conditional with its conditions in the same '
       'sentence; an assumptions page giving the value, source and supplier of '
       'each figure; roles separated by lead time with those over two years '
       'listed as this year’s decisions; an annual review against the assumptions '
       'in April; and a stated trigger that forces a rewrite. Done: published '
       'with the assumptions page first, and the figure in every projection '
       'expressed as about rather than exactly. Fallback: where two assumptions '
       'fail in the same year, the plan is rewritten rather than adjusted, and I '
       'say so to the board at the time.',
w_fig=figs.spec_card('SIX LINES FOR A FIVE-YEAR PLAN',
                     [('Purpose', 'auditable in five years by a stranger'),
                      ('Scope', 'non-medical workforce; national numbers are inputs'),
                      ('Inputs', 'establishment, rates, external numbers, lead times'),
                      ('Criteria', 'conditionals, assumptions page, lead-time split'),
                      ('Done', 'assumptions page first, every figure “about”'),
                      ('Fallback', 'two failures: rewrite, and say so')]),
w_fig_cap='Six lines, and the second page is worth more than the other twenty.',
w_task='Write a six-line tasking for a five-year plan.',
w_steps=['Line 1: say who the plan must be auditable by.',
         'Line 2: say which workforce is yours, and what is an input.',
         'Line 3: say what you are giving it.',
         'Line 4: say how projections and assumptions are written.',
         'Line 5: say what is published first and how figures are expressed.',
         'Line 6: say what you do when two assumptions fail.'],
w_bank=['Purpose: so that a plan written now can be audited in five years by somebody who was not here',
        'Scope: the non-medical workforce plan for this organisation; medical workforce planning is the medical director’s and national training numbers are inputs rather than decisions',
        'Inputs: the current establishment, five years of leaving and joining rates, the external numbers with their sources and suppliers, the lead time for each role, and the decisions that cannot be deferred',
        'Criteria: every projection a conditional with its conditions in the same sentence; an assumptions page giving value, source and supplier; roles separated by lead time with those over two years listed as this year’s decisions; an April review; a stated rewrite trigger',
        'Done: published with the assumptions page first, and every projected figure expressed as about rather than exactly',
        'Fallback: where two assumptions fail in the same year, the plan is rewritten rather than adjusted, and I say so to the board at the time'],
w_check=['Is every projection conditional?',
         'Does the assumptions page name sources and suppliers?',
         'Are long-lead roles separated?',
         'Is there a rewrite trigger?'],

t_title='A five-year plan drafted in conditionals with its assumptions named',
t_fig=figs.split('FIVE YEARS AND NINE ASSUMPTIONS',
                 'It can draft',
                 ['conditional projections',
                  'the assumptions page',
                  'the lead-time split',
                  'the rewrite trigger'],
                 'It must not supply',
                 ['a flat figure for 2031',
                  'an assumption nobody supplied',
                  'the judgement when two fail',
                  'the decision to rewrite']),
t_fig_cap='It drafts the plan. Judgement when two assumptions fail is yours.',
t_body=[
 'Give it the establishment, five years of rates, the external numbers with their '
 'sources, and the lead time for each role.',
 'A five-year plan drafted in conditionals with its assumptions named states '
 'every projection with its conditions.',
 'Then ask for the assumptions page, with values, sources and suppliers.'],
t_say=[('If retirements continue: ', 'At nine a year.'),
       ('And if: ', 'The two training places are funded.'),
       ('We shall have: ', 'About two hundred and twelve in 2031.')],
t_bound='It cannot decide what to do when two assumptions fail at once, and that '
        'is the judgement the plan exists to make possible.',
t_a=[('Give it the current ____________.', 'establishment'),
     ('And five years of ____________.', 'rates'),
     ('And the external numbers with their ____________.', 'sources'),
     ('State every projection with its ____________.', 'conditions'),
     ('And the assumptions page with ____________.', 'values'),
     ('And the ____________ time for each role.', 'lead')],
t_b_rubric='Say what the planning work should do with each item.',
t_b=[('“the trust will have 212 nurses by 2031”', 'restate it as a conditional'),
     ('an assumption held in a spreadsheet', 'put it on the assumptions page with its supplier'),
     ('a consultant post and a ward clerk', 'separate them by lead time'),
     ('“kept under review as circumstances change”', 'state the trigger that forces a rewrite')],

case=dict(
 title='The Decision Room · The four training places that were two',
 brief=[
  'A hospital published five-year workforce plans stating projected establishments '
  'as figures, with assumptions held in working spreadsheets rather than the '
  'published document.',
  'Over ten years, three plans were published. Each projected an establishment '
  'that was not reached: shortfalls of 31, 18 and 24 posts. In each case the '
  'principal cause was an external assumption that failed, and in none of the '
  'three could the assumption be evidenced from the published plan. Two of the '
  'three authors had left before the shortfall emerged.',
  'The fourth plan stated every projection conditionally, with a nine-line '
  'assumptions page giving values, sources and suppliers, and a rewrite trigger. '
  'When one assumption failed in year two, the plan was rewritten within a quarter '
  'and the board accepted the cause.'],
 exhibit=figs.datatable('TEN YEARS OF WORKFORCE PLANS',
                        ['Item', 'First three / Fourth'],
                        [['plans published', '3 / 1'],
                         ['projections stated as flat figures', '3 / 0'],
                         ['assumptions published', '0 / 9'],
                         ['shortfalls against projection', '31, 18, 24 / 11'],
                         ['causes evidenced from the plan', '0 of 3 / 1 of 1'],
                         ['plans rewritten rather than patched', '0 / 1']]),
 exhibit_cap='The same uncertainty, written down, and a cause that could be shown.',
 exhibit_note='In all three earlier plans the principal cause of the shortfall was '
              'an assumption that failed. In none of them could the assumption be '
              'produced from the document.',
 voices=[('A planning manager', 'about conditionals',
          'A board asked for a number. Giving them a sentence with two ifs in it reads as though we do not know our own business.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Three flat numbers produced three shortfalls that looked like our incompetence and were mostly somebody else’s funding decision.'),
         ('A successor', 'inheriting the 2026 plan',
          'I could not tell what the plan had assumed, so I could not tell whether it had been wrong or unlucky.')],
 steps=[('Find it', 'How many projections were stated as flat figures?'),
        ('Compare it', 'Shortfalls against causes evidenced.'),
        ('Infer it', 'Why could the causes not be shown?'),
        ('Weigh it', 'A clean number against three unexplained shortfalls.'),
        ('Decide', 'How is a five-year projection stated?')],
 analysis=[('Find it. How many?', 'all three'),
           ('Compare it. How many causes evidenced?', 'none of three'),
           ('Infer it. Why not?', 'because the assumptions lived outside the document'),
           ('Weigh it. What was traded?', 'a clean figure for three shortfalls that looked like incompetence'),
           ('Decide. How stated?', 'conditionally, with a published assumptions page')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how a projection is stated.',
                 'Say where assumptions live.',
                 'Say how roles are distinguished.',
                 'Say when a plan is rewritten.'],
 bank=['Every projection in a plan of more than two years is stated as a conditional, with the conditions on which it depends in the same sentence.',
       'Every assumption is published in the plan itself with its value, its source and the name of the person or body that supplied it.',
       'Roles with a lead time of more than two years are listed separately as decisions required in the current year.',
       'The plan states a threshold which, if crossed, requires the plan to be rewritten rather than adjusted.'],
 outcome='The organisation adopts the four lines. The fourth plan states no flat '
         'projections and publishes nine assumptions, its shortfall is eleven '
         'posts rather than between eighteen and thirty-one, the cause is '
         'evidenced from the document itself, and the plan is rewritten within a '
         'quarter of an assumption failing.',
 outcome_q=[('What happened to flat projections?', 'there were none'),
            ('How many assumptions were published?', 'nine'),
            ('What was the shortfall?', 'eleven posts, against eighteen to thirty-one'),
            ('Could the cause be evidenced?', 'yes, from the document'),
            ('How quickly was the plan rewritten?', 'within a quarter')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · The trust will have 212 nurses by 2031',
 task=['This was the workforce section of a published five-year plan.',
       'This is what it said.'],
 draft=['The trust will have 212 registered nurses in post by 2031.',
        'Workforce supply is expected to improve over the period.',
        'We shall continue to develop our internal pipeline of talent.',
        'A number of national factors will influence delivery of the plan.',
        'The plan will be kept under review as circumstances change.',
        'Further detail is held by the workforce planning team.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of a five-year plan with no condition and no assumption in them.',
 asked=['will have 212', 'expected to improve',
        'a number of national factors'],
 back=['3 plans with flat projections', 'shortfalls of 31, 18 and 24',
       'no cause evidenced from any plan'],
 gap='Nobody could tell what the figure depended on, who supplied any assumption, or what would trigger a rewrite.',
 back_cap='Six lines that will be quoted in 2031 as a promise this organisation made.',
 back_note='“Further detail is held by the workforce planning team” described a '
           'spreadsheet on the laptop of somebody who left in 2027.',
 diagnosis=[('“a number of national factors”', 'unscoped set'),
            ('“our internal pipeline of talent”', 'unscoped set'),
            ('“expected to improve”', 'hidden assumption'),
            ('“will have 212”', 'hidden assumption'),
            ('“kept under review”', 'undefined done'),
            ('“held by the workforce planning team”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that a successor could audit it.',
 scaffold=['who the plan must be auditable by',
           'which workforce is yours, and what is an input',
           'what you are giving it',
           'how projections and assumptions are written',
           'what is published first and how figures are expressed',
           'what you do when two assumptions fail'],
 bank=['Purpose: so that a plan written now can be audited in five years by somebody who was not here',
       'Scope: the non-medical workforce plan for this organisation; medical workforce planning is the medical director’s, and national training numbers are set outside the organisation and are inputs rather than decisions',
       'Inputs: the current establishment, leaving and joining rates for the last five years, the external numbers with their sources and the people who supplied them, the lead time for each role, and the decisions that cannot be deferred beyond this year',
       'Criteria: every projection stated as a conditional with its conditions in the same sentence; an assumptions page giving the value, source and supplier of each figure; roles separated by lead time with those over two years listed as this year’s decisions; an annual review against the assumptions in April; and a stated trigger that forces a rewrite',
       'Done: published with the assumptions page first, and the figure in every projection expressed as about rather than exactly',
       'Fallback: where two assumptions fail in the same year, the plan is rewritten rather than adjusted, and I say so to the board at the time'],
 check=['Is the projection conditional?',
        'Are the assumptions published with suppliers?',
        'Are long-lead roles separated?',
        'Is there a rewrite trigger?'],
 model=['so that a plan written now can be audited in five years by somebody who was not here',
        'the non-medical workforce plan for this organisation; medical workforce planning is the medical director’s, and national training numbers are set outside the organisation and are inputs rather than decisions',
        'the current establishment, leaving and joining rates for the last five years, the external numbers with their sources and the people who supplied them, the lead time for each role, and the decisions that cannot be deferred beyond this year',
        'every projection stated as a conditional with its conditions in the same sentence; an assumptions page giving the value, source and supplier of each figure; roles separated by lead time with those over two years listed as this year’s decisions; an annual review against the assumptions in April; and a stated trigger that forces a rewrite',
        'published with the assumptions page first, and the figure in every projection expressed as about rather than exactly',
        'where two assumptions fail in the same year, the plan is rewritten rather than adjusted, and I say so to the board at the time'],
 cost='3 plans of flat projections, shortfalls of 31, 18 and 24, and no cause evidenced from any of them.'),

lang=dict(
 title='The Unwelcome Number · Refusing the board a single number for 2031',
 setting=[
  'The board has asked for a single nursing establishment figure for 2031. '
  'Margarida intends to give a conditional sentence and a nine-line assumptions '
  'page.',
  'She has to refuse the clean number, keep the board’s confidence, and accept '
  'that the plan will look less certain than its predecessors.'],
 ladder=[('A board that wants a number', 'and a figure nobody can know'),
         ('Three flat projections', 'and three unexplained shortfalls'),
         ('Either give them the number', 'or give them the conditions')],
 cap='Five years, nine assumptions, and one figure the board wants plain.',
 turns=[('Turn 1 · Margarida', 'The plan will say that if retirements continue at nine a year and the two training places are funded, we shall have about two hundred and twelve nurses in 2031.'),
        ('Turn 2 · Board member', 'That is not a plan, it is a hedge. We asked for the establishment in 2031.'),
        ('Turn 3 · Margarida', 'Our last three plans gave the establishment plainly, and the shortfalls were thirty-one, eighteen and twenty-four.')],
 holds=['In none of those three could we show the board which assumption had failed.',
        'The assumptions page is nine lines and names who supplied each figure.',
        'If the training places are funded, the number is about two hundred and twelve and I shall be held to it.',
        'If they are not, the board will be able to see in April that the plan has broken, rather than in 2031.',
        'The four three-year decisions are in the plan as decisions for this year, and those are firm.',
        'And if the conditional form makes the plan unusable for the board’s purposes, tell me and I shall add a single-figure summary with the conditions printed beneath it.'],
 redline='Never publish a five-year projection without the assumptions it rests '
         'on, and never let a successor inherit a figure they cannot audit.',
 score=['Gave the conditional sentence first.',
        'Gave the three previous shortfalls.',
        'Named the assumptions page and its suppliers.',
        'Kept the four long-lead decisions firm.',
        'Offered a compromise form on request.'],
 a=[('What will the plan say about 2031?', 'about two hundred and twelve, conditionally'),
    ('What does the board want?', 'the establishment stated plainly'),
    ('What were the three previous shortfalls?', 'thirty-one, eighteen and twenty-four'),
    ('How long is the assumptions page?', 'nine lines'),
    ('What stays firm?', 'the four three-year decisions'),
    ('What is the redline?', 'never publish a five-year projection without its assumptions')]),

rev_fig=figs.split('A FIVE-YEAR PLAN',
                   'Say',
                   ['if retirements continue at nine a year',
                    'and if the two training places are funded',
                    'we shall have about two hundred and twelve in 2031',
                    'if retirements exceed fourteen, the plan is rewritten'],
                   'Never say',
                   ['the trust will have 212 nurses by 2031',
                    'supply is expected to improve',
                    'a number of national factors',
                    'kept under review as circumstances change']),
rev_fig_cap='Four sentences defensible in 2031, and four quoted against you in it.',
rev=dict(
 read=[('What does the plan project?',
        ['about 212 nurses in 2031', '31 nurses', '14 retirements', 'two training places'], 0),
       ('How should a projection be written?',
        ['as a conditional with its conditions', 'as a single figure',
         'as a range', 'as a target'], 0),
       ('How long does a consultant post take to grow?',
        ['three years', 'nine months', 'six weeks', 'five years'], 0),
       ('What is the rewrite trigger?',
        ['retirements above fourteen in a year', 'a shortfall of ten',
         'a new chief executive', 'an annual review'], 0)],
 listen_text='Give it the establishment, five years of rates, the external numbers '
             'with their sources, and the lead time for each role. State every '
             'projection with its conditions.',
 listen=[('Give it the current ____________.', 'establishment'),
         ('And five years of ____________.', 'rates'),
         ('And the external numbers with their ____________.', 'sources'),
         ('State every projection with its ____________.', 'conditions')],
 speak=['Restate six flat projections as conditionals.',
        'Then list the assumptions each rests on.'],
 write='Write a six-line tasking for a five-year plan.',
 vocab=[('A plan you can correct annually is a plan in five one-year ____________.', 'steps'),
        ('The useful scenario is a scenario in which ____________ things change.', 'two'),
        ('A decision that can wait is a lead time of three ____________.', 'months'),
        ('The condition that admits the plan has failed is a ____________ that forces a rewrite.', 'trigger')],
 gram=[('The assumptions ____________ reviewed every April.', 'are'),
       ('This plan ____________ rewritten rather than adjusted.', 'is'),
       ('And nine months ____________ recruit.', 'to'),
       ('And the two training places ____________ funded.', 'are')]),

found=['State every projection as a conditional, with its conditions.',
       'Publish the assumptions with their values, sources and suppliers.',
       'Separate the three-year decisions from everything else.',
       'Set the trigger that forces a rewrite rather than a patch.'],
end_line='In all three earlier plans the shortfall was caused by an assumption that failed, and in none of them could the assumption be produced from the document.',
end_next='Next: A Figure the Board Will Not Like')
