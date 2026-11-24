# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Partner Organisation and a Shared Problem',
gram='a shared problem: neither of us alone, both of us together',
ai='a joint problem stated so that neither partner owns it alone',
strap='CEFR B2 · Grammar: a shared problem: neither of us alone, both of us together · '
      'AI: a joint problem stated so that neither partner owns it alone',
cando=['state a problem so that neither partner can refuse it',
       'agree one figure before arguing about causes',
       'make the first concession without losing the position',
       'solve a problem at the lowest level that can solve it',
       'write a six-line tasking for a joint problem statement'],

hero=('AGREE THE FIGURE BEFORE YOU ARGUE ABOUT THE CAUSE.',
      ['Two organisations with two sets of numbers',
       'will spend a year discussing arithmetic instead of patients.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Thirty-one delayed discharges, two organisations, and one figure both will accept.',

warm=['What problem where you work belongs to two organisations?',
      'Which figures do the two sides disagree about?',
      'Who meets about it, and at what level?'],

vocab=[
 ('a problem neither organisation owns', 'a problem that will persist for years'),
 ('a problem both organisations blame', 'a problem with two confident accounts'),
 ('a patient waiting between two services', 'the person the dispute is about'),
 ('a cost that falls on one and is caused by the other', 'the structural source of the quarrel'),
 ('a meeting of two chief executives', 'the level that should rarely be needed'),
 ('a meeting of two operational managers', 'the level at which most of it is solved'),
 ('a shared figure both sides accept', 'the precondition for any progress'),
 ('a figure each side disputes', 'a year of meetings about arithmetic'),
 ('a joint plan with two owners', 'a plan that will be delivered'),
 ('a joint plan with none', 'a plan that exists only in a minute'),
 ('an agreement that survives a change of personnel', 'an agreement written down properly'),
 ('an agreement that does not', 'an agreement between two individuals'),
 ('a letter written for the file', 'a letter that solves nothing and protects somebody'),
 ('a letter written to solve something', 'a letter with an offer in it'),
 ('an escalation to a commissioner', 'a step that changes the relationship'),
 ('an escalation that damages a relationship', 'the cost of being right too early'),
 ('a concession made first', 'the move that makes the second one possible'),
 ('a concession made in return', 'the evidence that the first one worked'),
 ('a problem solved at the level below', 'the cheapest resolution available'),
 ('a problem that needed both chief executives', 'the rare case where escalation was right')],

read=[
 'Thirty-one patients are waiting in hospital beds for care that another '
 'organisation arranges. The hospital counts thirty-one; the council counts '
 'nineteen; both counts are honest.',
 'Nothing can be solved while the figures differ, because every meeting becomes a '
 'discussion of definitions, and after a year both sides can recite the other’s '
 'arithmetic and neither has moved a patient.',
 'So the first task is one figure. Agree the definition, agree who counts, agree '
 'the day of the week, and publish the same number in both organisations’ board '
 'papers.',
 'Then state the problem so that neither side can refuse it. Neither of us can '
 'solve this alone: we cannot discharge without your assessments, and you cannot '
 'assess faster without our ward staff releasing people before eleven.',
 'And make the first concession yourself. The partner who concedes first in a '
 'stuck relationship is not the weaker party; they are the party that has decided '
 'to end the stalemate.'],

dp1=('Joint working', 'Partnership guidance commonly recommends agreeing a shared '
     'data definition before analysing a disputed problem, stating mutual '
     'dependencies explicitly, naming an owner in each organisation, and resolving '
     'at the lowest effective level. Arrangements are set by the partnership’s own '
     'agreements.',
     'Source: general partnership working guidance, 2025–2026.'),

c_a=[('What are the two counts?', 'thirty-one by the hospital, nineteen by the council'),
     ('What is said about both counts?', 'that both are honest'),
     ('Why can nothing be solved while the figures differ?', 'because every meeting becomes a discussion of definitions'),
     ('What is the first task?', 'one figure, with an agreed definition and counter'),
     ('How is the problem stated?', 'so that neither side can refuse it'),
     ('Who makes the first concession?', 'you')],

c_b=[('The hospital counts thirty-one.', 'T'),
     ('One of the counts is dishonest.', 'F'),
     ('The same number is published by both organisations.', 'T'),
     ('Conceding first is a sign of weakness.', 'F'),
     ('Neither side can solve it alone.', 'T'),
     ('Most of it is solved below chief executive level.', 'T')],

c_c=[('____________ of us can solve this alone.', 'Neither'),
     ('We cannot discharge ____________ your assessments.', 'without'),
     ('And you cannot assess faster ____________ our staff release people early.', 'unless'),
     ('____________ of us together can move eleven patients a week.', 'Both'),
     ('The figure ____________ been agreed as twenty-six.', 'has'),
     ('I ____________ make the first move.', 'shall')],

c_d=[('Agree ( the figure / the cause ) first.', ['the figure', 'the cause'], 0),
     ('State the problem so that ( neither side can refuse it / your side is protected ).',
      ['neither side can refuse it', 'your side is protected'], 0),
     ('Give the joint plan ( two owners / a joint committee ).',
      ['two owners', 'a joint committee'], 0),
     ('Solve it at ( the lowest effective level / chief executive level ).',
      ['the lowest effective level', 'chief executive level'], 0),
     ('Make the first concession ( yourself / when they do ).',
      ['yourself', 'when they do'], 0)],

c_e=('A shared figure, a mutual dependency, a concession or an escalation? Decide '
     'what each is.',
     [('twenty-six, counted on Wednesdays by both', 'a shared figure'),
      ('we cannot discharge without your assessments', 'a mutual dependency'),
      ('we shall release patients before eleven from Monday', 'a concession'),
      ('a letter from both chief executives to the commissioner', 'an escalation'),
      ('you cannot assess faster unless we release earlier', 'a mutual dependency'),
      ('they will fund two extra assessors for a quarter', 'a concession')],
     ['a shared figure', 'a mutual dependency', 'a concession',
      'an escalation']),

v_fig_title='SIX WORDS OF A SHARED PROBLEM',
v_fig=[('scale', 'a shared figure both sides accept'), ('people', 'a patient waiting between two services'),
       ('key', 'a concession made first'),
       ('doc', 'a joint plan with two owners'),
       ('clock', 'a problem solved at the level below'),
       ('note', 'an agreement that survives a change of personnel')],
v_fig_cap='Six words for two organisations and one patient.',

v_a=[('A problem that will persist for years is a problem neither organisation ____________.', 'owns'),
     ('The structural source of the quarrel is a cost that falls on one and is ____________ by the other.', 'caused'),
     ('The level at which most of it is solved is a meeting of two ____________ managers.', 'operational'),
     ('A year of meetings about arithmetic is a figure each side ____________.', 'disputes'),
     ('A plan that exists only in a minute is a joint plan with ____________.', 'none'),
     ('A letter that solves nothing and protects somebody is a letter written for the ____________.', 'file'),
     ('The cost of being right too early is an escalation that ____________ a relationship.', 'damages'),
     ('The cheapest resolution available is a problem solved at the level ____________.', 'below')],

v_b=[('A problem both organisations blame is a problem', 'with two confident accounts.'),
     ('An agreement that does not survive is an agreement', 'between two individuals.'),
     ('A letter written to solve something is a letter', 'with an offer in it.'),
     ('A concession made in return is the evidence', 'that the first one worked.'),
     ('A problem that needed both chief executives is the rare', 'case where escalation was right.')],

g_title='Grammar: a shared problem: neither of us alone, both of us together',
g_rule=['Use neither of us can to open a shared statement: neither of us can solve '
        'this alone. The construction removes the question of fault before it is '
        'asked.',
        'Use cannot without and cannot unless for the two dependencies: we cannot '
        'discharge without your assessments; you cannot assess faster unless our '
        'wards release people before eleven.',
        'Use both of us together can for the joint claim, with a number: both of '
        'us together can move eleven patients a week.',
        'Make the concession in the simple future and unconditionally: we shall '
        'release patients before eleven from Monday. A conditional concession is '
        'not a concession but a proposal.'],
g_fig=('LOOSE',
       ['There are long-standing challenges in the discharge pathway.',
        'Both organisations need to work more closely together.',
        'Data quality issues have made the position difficult to assess.',
        'We should perhaps consider a joint improvement group.'],
       'PRECISE',
       ['Neither of us can solve this alone.',
        'We cannot discharge without your assessments; you cannot assess faster unless our wards release people before eleven.',
        'Both of us together can move about eleven patients a week.',
        'We shall release patients before eleven from Monday, whatever you decide.'],
       'four sentences that produce a joint group',
       'four sentences that produce eleven patients'),
g_fig_cap='Neither of us can. Cannot without; cannot unless. Both of us together can. We shall.',

g_a=[('____________ of us can solve this alone.', 'Neither'),
     ('We cannot discharge ____________ your assessments.', 'without'),
     ('You cannot assess faster ____________ our wards release people early.', 'unless'),
     ('____________ of us together can move eleven patients a week.', 'Both'),
     ('We ____________ release patients before eleven from Monday.', 'shall'),
     ('____________ you decide.', 'Whatever'),
     ('The figure ____________ agreed as twenty-six.', 'is'),
     ('Counted ____________ Wednesdays by both of us.', 'on'),
     ('I ____________ made the first move.', 'have')],

g_b=[('( there are long-standing challenges / neither of us can solve this alone ) — the opening.', ['there are long-standing challenges', 'neither of us can solve this alone'], 1),
     ('( we cannot discharge without your assessments / both organisations need to work together ) — the dependency.',
      ['we cannot discharge without your assessments', 'both organisations need to work together'], 0),
     ('( both of us together can move eleven patients a week / closer working would bring benefits ) — the claim.',
      ['both of us together can move eleven patients a week', 'closer working would bring benefits'], 0),
     ('( we shall release patients before eleven from Monday / we are willing to look at our processes ) — the concession.',
      ['we shall release patients before eleven from Monday', 'we are willing to look at our processes'], 0),
     ('( the figure is twenty-six, counted on Wednesdays by both / data quality issues persist ) — the figure.',
      ['the figure is twenty-six, counted on Wednesdays by both', 'data quality issues persist'], 0),
     ('( Amara Nwosu and Hana Kowalczyk own this jointly / a joint improvement group will be established ) — the owners.',
      ['Amara Nwosu and Hana Kowalczyk own this jointly', 'a joint improvement group will be established'], 0)],

d1=dict(
 title='Thirty-one, nineteen, twenty-six',
 fig=(['Hospital: 31.', 'Council: 19.'],
      ['Agreed: 26.', 'Moved: 11 a week.']),
 cap='Margarida Pires and a director from the council, over a disputed figure.',
 lines=[('Council director', 'Your board paper says thirty-one. Ours says nineteen. One of us is wrong.'),
        ('Margarida', 'Neither of us is wrong. You count from the date of referral and we count from the date of medical fitness.'),
        ('Council director', 'Then we have spent a year arguing about a definition.'),
        ('Margarida', 'We have, and I propose we spend twenty minutes ending it. One definition, one counter, one day of the week.'),
        ('Council director', 'Which definition?'),
        ('Margarida', 'Yours, with the medically fit date added as a second column. If I take your definition the argument ends today, and I would rather lose the definition than the year.'),
        ('Council director', 'That is a concession I was not expecting.'),
        ('Margarida', 'It is also a cheap one, and I shall ask for something in return in a moment.'),
        ('Council director', 'Which is?'),
        ('Margarida', 'Two assessors for one quarter. And from Monday our wards will release patients before eleven, whatever you decide about the assessors.'),
        ('Council director', 'Unconditionally?'),
        ('Margarida', 'Unconditionally. A conditional concession is a proposal, and we have exchanged proposals for a year.')],
 a=[('What are the two figures?', 'thirty-one and nineteen'),
    ('Why do they differ?', 'one counts from referral, the other from medical fitness'),
    ('What does Margarida propose?', 'one definition, one counter and one day of the week'),
    ('Whose definition does she take?', 'the council’s, with a second column added'),
    ('What is conceded unconditionally?', 'releasing patients before eleven from Monday')],
 b=[('____________ of us is wrong.', 'Neither'),
    ('I would rather lose the definition than the ____________.', 'year'),
    ('Two assessors for one ____________.', 'quarter'),
    ('A conditional concession is a ____________.', 'proposal')]),

d2=dict(
 title='The escalation that cost two years',
 fig=(['Letter to commissioner.', 'Position won.'],
      ['Relationship lost.', 'Nothing moved.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive.',
 lines=[('Siobhán', 'In 2023 we wrote to the commissioner about the council’s assessment times. We were entirely right.'),
        ('Margarida', 'And for two years afterwards nothing was agreed below chief executive level with that council.'),
        ('Siobhán', 'Their director felt ambushed.'),
        ('Margarida', 'He was ambushed. The letter went the day after a meeting at which we had said nothing about writing it.'),
        ('Siobhán', 'The facts in it were accurate.'),
        ('Margarida', 'They were, and being right in the wrong week cost us about two hundred patient weeks of delay.'),
        ('Siobhán', 'Some escalations are necessary.'),
        ('Margarida', 'They are, and the test is whether the person you are escalating past knows that you are doing it before it happens.'),
        ('Siobhán', 'That gives them the chance to pre-empt you.'),
        ('Margarida', 'Which is the point. If telling them in advance solves the problem, you did not need the escalation.'),
        ('Siobhán', 'And if they pre-empt you dishonestly?'),
        ('Margarida', 'Then you escalate with their letter attached, and you have both the facts and the relationship with everybody else in the system.')],
 unresolved=True,
 a=[('What happened in 2023?', 'a letter to the commissioner about assessment times'),
    ('What did it cost?', 'two years without agreement below chief executive level'),
    ('Why was the director ambushed?', 'the letter went the day after a meeting where nothing was said'),
    ('What is the test for an escalation?', 'whether the person you escalate past knows beforehand'),
    ('What if telling them solves it?', 'then the escalation was not needed')],
 b=[('We were entirely ____________.', 'right'),
    ('Being right in the wrong ____________.', 'week'),
    ('Knows that you are doing it ____________ it happens.', 'before'),
    ('With their letter ____________.', 'attached')]),

speak=[('Neither of us alone',
        ['Your partner describes six shared problems.',
         'State each so that neither side can refuse it.',
         'Three each, then swap.']),
       ('One figure',
        ['Your partner gives you six disputed counts.',
         'Propose a definition, a counter and a day.',
         'Three each, then swap.']),
       ('Concede first',
        ['Your partner gives you six stalemates.',
         'Make an unconditional concession and ask for one in return.',
         'Three each, then swap.'])],

ext_title='A joint problem stated so that neither partner owns it alone',
ext_fig=figs.datatable('WHAT THE STATEMENT CARRIES',
                       ['Line', 'Content'],
                       [['the shared figure', 'one definition, one counter, one day'],
                        ['our dependency', 'what we cannot do without them'],
                        ['their dependency', 'what they cannot do without us'],
                        ['the joint claim', 'what both together can achieve'],
                        ['the first concession', 'unconditional, and ours'],
                        ['the owners', 'one named person in each organisation']]),
ext_fig_cap='Six lines, and the fifth one is the one that ends a stalemate.',
ext=[
 'A joint problem stated so that neither partner owns it alone produces a document '
 'that both organisations can put to their own boards without rewriting it.',
 'Give it both organisations’ figures with their definitions, the dependencies in '
 'both directions, what each side has already offered, and the history of any '
 'previous escalation.',
 'Ask it to propose one definition, one counting party and one day of the week, '
 'and to say plainly which organisation is giving up its own definition.',
 'Ask for the dependencies to be stated in both directions in the same sentence, '
 'so that neither side can read the document as an accusation.',
 'Ask for one unconditional concession from our side, because an exchange of '
 'conditional offers is what both organisations have been doing for a year.',
 'What it cannot do is judge whether this is the week to escalate. Being right in '
 'the wrong week costs more than being patient in the right one, and that is a '
 'judgement about people you both know.'],

dp2=('Partnership working', 'Partnership literature commonly reports that '
     'disputes over shared performance figures delay joint action, that unilateral '
     'escalation reduces subsequent local agreement, and that reciprocity '
     'typically follows an unconditional first concession.',
     'Source: general partnership working literature, 2025–2026.'),

e_a=[('What does the statement produce?', 'a document both organisations can put to their own boards'),
     ('What four things are given to it?', 'both figures with definitions, the dependencies, what has been offered, and the escalation history'),
     ('What three things are proposed about the figure?', 'one definition, one counting party and one day of the week'),
     ('Why state dependencies in both directions?', 'so neither side can read it as an accusation'),
     ('How many unconditional concessions?', 'one, from our side')],
e_b=[('One definition and one counter are proposed.', 'T'),
     ('Dependencies are stated in both directions.', 'T'),
     ('It judges whether to escalate this week.', 'F'),
     ('One unconditional concession comes from our side.', 'T'),
     ('Disputed figures delay joint action.', 'T'),
     ('Conditional offers typically break a stalemate.', 'F')],

w_model='Purpose: so that a problem belonging to two organisations can be stated '
       'in one document that neither can refuse. Scope: operational problems '
       'shared with partner organisations where I hold the relationship; '
       'contractual disputes go to procurement, and clinical pathway design '
       'belongs to the clinicians in both organisations. Inputs: both '
       'organisations’ figures with the definition behind each, the dependencies '
       'in both directions, what each side has already offered, the history of any '
       'escalation, and the names of the two people who could own this. Criteria: '
       'one agreed definition, one counting party and one day of the week, with '
       'the concession of definition attributed to whichever of us gives it up; '
       'the dependencies stated in both directions in a single sentence; one claim '
       'expressed as what both together can achieve, with a number; one '
       'unconditional concession from us; and one named owner in each '
       'organisation. Done: agreed at operational level and put to both boards in '
       'identical words. Fallback: where escalation becomes necessary, I tell the '
       'person I am escalating past before I do it, and I accept that if telling '
       'them solves the problem the escalation was unnecessary.',
w_fig=figs.spec_card('SIX LINES FOR A JOINT PROBLEM',
                     [('Purpose', 'one document neither organisation can refuse'),
                      ('Scope', 'shared operational problems; not contracts, not pathways'),
                      ('Inputs', 'both figures, dependencies, offers, escalation history'),
                      ('Criteria', 'one figure, both dependencies, one concession'),
                      ('Done', 'agreed operationally, to both boards in one wording'),
                      ('Fallback', 'escalate only after telling the person first')]),
w_fig_cap='Six lines, and the sixth one is what keeps a system working afterwards.',
w_task='Write a six-line tasking for a joint problem statement.',
w_steps=['Line 1: say what the document must achieve.',
         'Line 2: say which problems are yours, and which are not.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the statement must settle and contain.',
         'Line 5: say how it is agreed and where it goes.',
         'Line 6: say what you do before escalating.'],
w_bank=['Purpose: so that a problem belonging to two organisations can be stated in one document that neither can refuse',
        'Scope: operational problems shared with partner organisations where I hold the relationship; contractual disputes go to procurement and clinical pathway design belongs to the clinicians',
        'Inputs: both organisations’ figures with the definition behind each, the dependencies in both directions, what each side has offered, the escalation history, and the names of the two people who could own this',
        'Criteria: one agreed definition, one counting party and one day of the week, with the concession of definition attributed; the dependencies in both directions in one sentence; one joint claim with a number; one unconditional concession from us; one named owner in each organisation',
        'Done: agreed at operational level and put to both boards in identical words',
        'Fallback: where escalation becomes necessary, I tell the person I am escalating past before I do it'],
w_check=['Is there one figure with one definition?',
         'Are both dependencies stated?',
         'Is there an unconditional concession from us?',
         'Is there a named owner on each side?'],

t_title='A joint problem stated so that neither partner owns it alone',
t_fig=figs.split('THIRTY-ONE AND NINETEEN',
                 'It can draft',
                 ['one definition and counter',
                  'both dependencies',
                  'the joint claim with a number',
                  'the unconditional concession'],
                 'It must not decide',
                 ['whether to escalate',
                  'what the relationship is worth',
                  'who is to blame',
                  'what to give up']),
t_fig_cap='It drafts the statement. Choosing the week to escalate is judgement about people.',
t_body=[
 'Give it both figures with their definitions, the dependencies in both '
 'directions, what each side has offered and the escalation history.',
 'A joint problem stated so that neither partner owns it alone proposes one '
 'figure and states both dependencies.',
 'Then ask for one unconditional concession from your side.'],
t_say=[('Neither of us: ', 'Can solve this alone.'),
       ('We cannot: ', 'Discharge without your assessments.'),
       ('You cannot: ', 'Assess faster unless we release by eleven.')],
t_bound='It cannot judge whether this is the week to escalate, and being right in '
        'the wrong week cost two hundred patient weeks in 2023.',
t_a=[('Give it both figures with their ____________.', 'definitions'),
     ('And the dependencies in both ____________.', 'directions'),
     ('And what each side has ____________.', 'offered'),
     ('Propose one ____________ and one counter.', 'definition'),
     ('And state both ____________.', 'dependencies'),
     ('And one ____________ concession from your side.', 'unconditional')],
t_b_rubric='Say what the joint statement should do with each item.',
t_b=[('thirty-one against nineteen', 'propose one definition, counter and day'),
     ('“both organisations must work together”', 'state what each cannot do without the other'),
     ('“we are willing to look at our processes”', 'make one unconditional concession'),
     ('a planned letter to the commissioner', 'tell the person you are escalating past first')],

case=dict(
 title='The Decision Room · Thirty-one against nineteen',
 brief=[
  'A hospital and a council each reported the number of patients delayed in '
  'hospital awaiting social care, using different definitions, and each presented '
  'its own figure to its own board.',
  'Over two years, 31 joint meetings were held. A review found that 19 of those '
  'meetings had included a discussion of the discrepancy between the two figures. '
  'No joint plan was agreed. The mean number of patients delayed rose from 24 to '
  '31. One unilateral escalation to the commissioner was followed by eighteen '
  'months in which no agreement was reached below chief executive level.',
  'A single definition was agreed, counted by the council on Wednesdays, with the '
  'hospital’s own measure retained as a second column. A joint plan with two named '
  'owners followed within six weeks, and the mean number delayed fell to 17.'],
 exhibit=figs.datatable('TWO YEARS OF A SHARED PROBLEM',
                        ['Item', 'Before / After'],
                        [['joint meetings held', '31 / 14'],
                         ['meetings discussing the discrepancy', '19 / 0'],
                         ['joint plans agreed', '0 / 1'],
                         ['mean patients delayed', '24 rising to 31 / 17'],
                         ['unilateral escalations', '1 / 0'],
                         ['agreements reached below chief executive level', '2 / 11']]),
 exhibit_cap='Half the meetings, one definition, and fourteen fewer people waiting.',
 exhibit_note='Nineteen of thirty-one joint meetings included a discussion of '
              'arithmetic. Neither organisation had been willing to adopt the '
              'other’s definition.',
 voices=[('A hospital director', 'about adopting the council’s definition',
          'Our figure is the clinically meaningful one. Adopting theirs understates the harm to patients.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Defending our definition for two years cost us fourteen patients a week waiting in beds.'),
         ('A council director', 'about the concession',
          'They gave up their definition in twenty minutes. That is the only reason I agreed to the two assessors.')],
 steps=[('Find it', 'How many meetings discussed the discrepancy?'),
        ('Compare it', 'Meetings held against plans agreed.'),
        ('Infer it', 'Why did the dispute prevent action?'),
        ('Weigh it', 'A clinically preferable definition against fourteen patients a week.'),
        ('Decide', 'What must happen before a shared problem is analysed?')],
 analysis=[('Find it. How many?', '19 of 31'),
           ('Compare it. How many plans?', 'none in two years'),
           ('Infer it. Why?', 'because every discussion returned to definitions'),
           ('Weigh it. What was traded?', 'a preferred definition for fourteen patients a week'),
           ('Decide. What must happen first?', 'one definition, one counter and one day')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what must be agreed before analysis.',
                 'Say how dependencies are stated.',
                 'Say who owns a joint plan.',
                 'Say what precedes an escalation.'],
 bank=['Before a shared problem is analysed, the two organisations agree one definition, one counting party and one reporting day, and publish the same figure.',
       'Every joint problem statement sets out in a single sentence what each organisation cannot achieve without the other.',
       'Every joint plan names one individual owner in each organisation, and survives the departure of either by naming the post as well as the person.',
       'No escalation to a third party is made without first telling the person in the partner organisation who is being escalated past.'],
 outcome='Both organisations adopt the four lines. Meetings discussing the '
         'discrepancy fall from nineteen to none, a joint plan is agreed within '
         'six weeks, the mean number of patients delayed falls from thirty-one to '
         'seventeen, agreements below chief executive level rise from two to '
         'eleven, and there are no unilateral escalations.',
 outcome_q=[('What happened to arithmetic discussions?', 'they fell from nineteen meetings to none'),
            ('What happened to the joint plan?', 'one was agreed within six weeks'),
            ('What happened to patients delayed?', 'the mean fell from thirty-one to seventeen'),
            ('What happened to local agreements?', 'they rose from two to eleven'),
            ('Over what period?', 'two years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Long-standing challenges in the pathway',
 task=['This was the joint statement drafted after a meeting between the two '
       'organisations.',
       'This is what it said.'],
 draft=['There are long-standing challenges in the discharge pathway.',
        'Both organisations recognise the need to work more closely together.',
        'Data quality issues have made the position difficult to assess.',
        'A joint improvement group will be established in due course.',
        'Both parties remain committed to the shared ambition.',
        'Progress will be reported through existing governance arrangements.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about a shared problem with no figure and no owner in them.',
 asked=['long-standing challenges', 'data quality issues',
        'in due course'],
 back=['19 of 31 meetings discussing the discrepancy',
       'no joint plan in two years', 'mean delays rising from 24 to 31'],
 gap='Nobody could tell what the figure is, what each side cannot do without the other, who owns anything, or when.',
 back_cap='Six lines that will be agreed by both boards and change nothing.',
 back_note='“Data quality issues” describes two organisations each refusing to '
           'adopt the other’s definition for two years.',
 diagnosis=[('“long-standing challenges”', 'unscoped set'),
            ('“data quality issues”', 'unscoped set'),
            ('“work more closely together”', 'undefined done'),
            ('“in due course”', 'undefined done'),
            ('“the shared ambition”', 'ambiguous referent'),
            ('“existing governance arrangements”', 'ambiguous referent')],
 rewrite='Rewrite it on the six lines so that neither organisation can refuse it.',
 scaffold=['what the document must achieve',
           'which problems are yours, and which are not',
           'what you are giving it',
           'what the statement must settle and contain',
           'how it is agreed and where it goes',
           'what you do before escalating'],
 bank=['Purpose: so that a problem belonging to two organisations can be stated in one document that neither can refuse',
       'Scope: operational problems shared with partner organisations where I hold the relationship; contractual disputes go to procurement, and clinical pathway design belongs to the clinicians in both organisations',
       'Inputs: both organisations’ figures with the definition behind each, the dependencies in both directions, what each side has already offered, the history of any escalation, and the names of the two people who could own this',
       'Criteria: one agreed definition, one counting party and one day of the week, with the concession of definition attributed to whichever of us gives it up; the dependencies stated in both directions in a single sentence; one claim expressed as what both together can achieve, with a number; one unconditional concession from us; and one named owner in each organisation',
       'Done: agreed at operational level and put to both boards in identical words',
       'Fallback: where escalation becomes necessary, I tell the person I am escalating past before I do it, and I accept that if telling them solves the problem the escalation was unnecessary'],
 check=['Is there one figure and one definition?',
        'Are both dependencies stated?',
        'Is there an unconditional concession?',
        'Is there an owner on each side?'],
 model=['so that a problem belonging to two organisations can be stated in one document that neither can refuse',
        'operational problems shared with partner organisations where I hold the relationship; contractual disputes go to procurement, and clinical pathway design belongs to the clinicians in both organisations',
        'both organisations’ figures with the definition behind each, the dependencies in both directions, what each side has already offered, the history of any escalation, and the names of the two people who could own this',
        'one agreed definition, one counting party and one day of the week, with the concession of definition attributed to whichever of us gives it up; the dependencies stated in both directions in a single sentence; one claim expressed as what both together can achieve, with a number; one unconditional concession from us; and one named owner in each organisation',
        'agreed at operational level and put to both boards in identical words',
        'where escalation becomes necessary, I tell the person I am escalating past before I do it, and I accept that if telling them solves the problem the escalation was unnecessary'],
 cost='19 of 31 meetings about arithmetic, no joint plan in two years, and delays rising from 24 to 31.'),

lang=dict(
 title='The Unwelcome Number · Giving up your own definition in twenty minutes',
 setting=[
  'The hospital’s definition of delayed discharge is clinically preferable and has '
  'been defended for two years. Margarida intends to adopt the council’s instead.',
  'She has to overrule her own colleagues, keep the clinical point alive as a '
  'second column, and accept that the published figure will look better than the '
  'truth.'],
 ladder=[('Colleagues defending a better measure', 'and two years without a plan'),
         ('Thirty-one against nineteen', 'and nineteen meetings about arithmetic'),
         ('Either defend the definition', 'or adopt theirs and keep the column')],
 cap='Two definitions, two years, and fourteen patients a week.',
 turns=[('Turn 1 · Margarida', 'We shall adopt the council’s definition, and keep our own measure as a second column.'),
        ('Turn 2 · Hospital director', 'Their definition understates the harm. Adopting it tells our board the problem is smaller than it is.'),
        ('Turn 3 · Margarida', 'Nineteen of our last thirty-one joint meetings were spent on the discrepancy, and the mean delay rose from twenty-four to thirty-one.')],
 holds=['The second column keeps your clinical point in every paper we publish.',
        'I shall explain the change in the board paper, in one paragraph, under my own name.',
        'Giving up the definition is what bought the two assessors for next quarter.',
        'Nobody is conceding the argument about harm; we are conceding a counting rule.',
        'If the agreed figure is used to minimise the problem publicly, I shall correct it myself.',
        'And if in six months the single figure has produced no plan, I shall go back to ours and say why.'],
 redline='Never let a disagreement about a counting rule prevent two '
         'organisations from acting, and never lose the clinical point while '
         'conceding the definition.',
 score=['Stated the decision in the first sentence.',
        'Kept the clinical measure as a column.',
        'Gave the two-year cost.',
        'Named what the concession bought.',
        'Set a six-month reversal test.'],
 a=[('Whose definition will be adopted?', 'the council’s'),
    ('What is kept?', 'the hospital’s own measure, as a second column'),
    ('How many meetings were spent on the discrepancy?', 'nineteen of thirty-one'),
    ('What did the mean delay do?', 'rose from twenty-four to thirty-one'),
    ('What did the concession buy?', 'two assessors for the next quarter'),
    ('What is the redline?', 'never let a counting rule prevent two organisations from acting')]),

rev_fig=figs.split('A SHARED PROBLEM',
                   'Say',
                   ['neither of us can solve this alone',
                    'we cannot discharge without your assessments',
                    'you cannot assess faster unless we release by eleven',
                    'we shall release by eleven from Monday, whatever you decide'],
                   'Never say',
                   ['there are long-standing challenges',
                    'both organisations must work together',
                    'data quality issues persist',
                    'a joint improvement group will be established']),
rev_fig_cap='Four sentences that move eleven patients, and four that produce a group.',
rev=dict(
 read=[('What are the two counts?',
        ['thirty-one and nineteen', 'twenty-six and seventeen',
         'thirty-one and twenty-six', 'nineteen and eleven'], 0),
       ('What must be agreed first?',
        ['one figure, with a definition and a counter', 'the cause',
         'the joint plan', 'the escalation route'], 0),
       ('Who makes the first concession?',
        ['you', 'the partner', 'neither', 'the commissioner'], 0),
       ('What is a conditional concession?',
        ['a proposal', 'a concession', 'an escalation', 'an agreement'], 0)],
 listen_text='Give it both figures with their definitions, the dependencies in '
             'both directions, what each side has offered and the escalation '
             'history. Propose one definition.',
 listen=[('Give it both figures with their ____________.', 'definitions'),
         ('And the dependencies in both ____________.', 'directions'),
         ('And what each side has ____________.', 'offered'),
         ('Propose one ____________ and one counter.', 'definition')],
 speak=['State six shared problems so that neither side can refuse them.',
        'Then make an unconditional concession in each.'],
 write='Write a six-line tasking for a joint problem statement.',
 vocab=[('The person the dispute is about is a patient waiting between two ____________.', 'services'),
        ('The precondition for any progress is a shared ____________ both sides accept.', 'figure'),
        ('A plan that will be delivered is a joint plan with ____________ owners.', 'two'),
        ('A step that changes the relationship is an escalation to a ____________.', 'commissioner')],
 gram=[('I ____________ made the first move.', 'have'),
       ('Counted ____________ Wednesdays by both of us.', 'on'),
       ('____________ you decide.', 'Whatever'),
       ('The figure ____________ agreed as twenty-six.', 'is')]),

found=['Agree one figure, one definition and one counter before anything else.',
       'State what each side cannot do without the other, in one sentence.',
       'Make the first concession yourself, and make it unconditional.',
       'Tell the person you are escalating past before you escalate.'],
end_line='Nineteen of thirty-one joint meetings were spent on arithmetic, because neither organisation would adopt the other’s counting rule.',
end_next='Next: A Regulator’s Question, Answered Exactly')
