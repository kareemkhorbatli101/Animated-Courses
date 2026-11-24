# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Long Descriptions, Short Sentences',
gram='complex noun phrases and premodification',
ai='the roles that appear and the roles that go',
strap='CEFR C1 · Grammar: complex noun phrases · AI: the roles that appear and the roles that go',
cando=['build a complex noun phrase with the modifiers in the right order',
       'decide when to unpack a long noun phrase into a clause',
       'describe a role that has appeared and one that has disappeared',
       'identify where a career ladder has lost its lowest rung',
       'write a job description that says what the person decides'],
hero=('THE RUNG THAT WENT MISSING',
      ['Four new titles in two years, every one of them senior.',
       'And the job that taught everybody everything no longer exists.'],
      [(780, 'teal', 'long'), (1500, 'purple', 'short'),
       (2200, 'orange', 'long'), (2840, 'grey', 'short')]),
hero_cap='Roles do not vanish by decision; they stop being advertised.',

warm=['Which job titles exist in your organisation now that did not exist three years ago?',
      'Which have quietly stopped being advertised?',
      'How did the people now in senior roles learn what they know?'],
read=[
 'Arclight’s hiring plan for next year contains four roles that did not exist in the firm '
 'three years ago: an exception rule author, a client format curator, a knowledge librarian '
 'and a workflow systems lead. All four are graded at or above the firm’s midpoint, all four '
 'require three to five years of experience, and all four were written by people who were '
 'describing work the firm had discovered it needed.',
 'What the plan does not contain, and has not contained for two years, is the junior checking '
 'role that every one of those four posts assumes somebody has done. Nobody retired it. It '
 'simply stopped appearing, because the work it consisted of is now drafted by systems and '
 'confirmed by people at a higher grade, and a recruitment plan is a list of gaps rather than '
 'a map of a career.',
 'The consequence Dalia Rahman identified in October is not a staffing problem but a '
 'structural one. The firm now has a career ladder whose lowest remaining rung requires three '
 'years of experience that the firm itself no longer provides anywhere, which means every '
 'junior appointment must be somebody else’s former junior, and the number of organisations '
 'still producing them is falling.',
 'The four new roles are genuinely new and genuinely valuable, which is the part that makes '
 'the situation hard to argue about. An exception rule author who can write the distinction '
 'between a case requiring client knowledge and a case requiring care is worth several '
 'reviewers, and nothing in the firm’s previous structure would have produced that job '
 'description. The complaint is not that the new roles appeared; it is that nothing was put '
 'in the space the old one left.',
 'Dalia’s proposal is deliberately modest and has been resisted on grounds nobody expected. '
 'She wants a two-year entry role whose first year consists substantially of work the systems '
 'could do, performed by hand, for the purpose of producing people who have done it. Kenji '
 'Watanabe has calculated what that costs and asked, reasonably, which client is paying for '
 'it.'],
c_a=[('What four new roles does the hiring plan contain?', 'exception rule author, client format curator, knowledge librarian, workflow systems lead'),
     ('What has not appeared in the plan for two years?', 'the junior checking role'),
     ('Why did it stop appearing?', 'the work is now drafted by systems and confirmed at a higher grade'),
     ('What is the structural consequence?', 'the lowest rung requires experience the firm no longer provides'),
     ('What is Dalia’s proposal, and Kenji’s objection?', 'a two-year entry role doing work by hand; he asks which client is paying for it')],
c_b=[('The four new roles are junior.', 'F'),
     ('Somebody decided to retire the junior checking role.', 'F'),
     ('A recruitment plan is a map of a career.', 'F'),
     ('The new roles are valuable.', 'T'),
     ('Dalia wants a two-year entry role.', 'T'),
     ('Kenji supports the proposal without reservation.', 'F')],
c_c=[('All four are graded at or above the firm’s ____________.', 'midpoint'),
     ('A recruitment plan is a list of ____________.', 'gaps'),
     ('Every junior appointment must be somebody else’s former ____________.', 'junior'),
     ('Nothing was put in the ____________ the old one left.', 'space'),
     ('For the purpose of producing people who have ____________ it.', 'done'),
     ('Which client is ____________ for it?', 'paying')],
c_d=[('The junior role disappeared by ( decision / default ).', ['decision', 'default'], 1),
     ('How many years of experience do the new roles require?', ['none', 'three to five', 'ten', 'one'], 1),
     ('The firm must now recruit juniors who are', ['newly qualified', 'somebody else’s former juniors', 'internal', 'contractors'], 1),
     ('Dalia’s proposed role lasts', ['six months', 'two years', 'five years', 'indefinitely'], 1),
     ('Kenji’s objection is about', ['quality', 'who pays for it', 'grading', 'titles'], 1)],
c_e=('Noun phrase or clause? Put each version in the right column.',
     [('a client-facing intake review process', 'noun phrase'),
      ('a process by which we review intake with the client', 'clause'),
      ('a two-year hand-performed entry role', 'noun phrase'),
      ('an entry role lasting two years in which the work is done by hand', 'clause'),
      ('the exception rule author post', 'noun phrase'),
      ('the post of somebody who writes the exception rules', 'clause')],
     ['noun phrase', 'clause']),

v_fig_title='ROLES, GRADES AND LADDERS',
v_fig=[('doc', 'a job description'), ('chart', 'a career ladder'), ('scale', 'a grade'),
       ('bulb', 'a competency'), ('bank', 'headcount'), ('key', 'a remit')],
v_fig_cap='Six words for the architecture that decides who can ever be hired.',
vocab=[
 ('a role', 'the work one person is accountable for, as distinct from their title'),
 ('a job description', 'the written statement of what a role does and decides'),
 ('redeployment', 'the moving of a person to different work rather than out'),
 ('a vacancy', 'an approved role with nobody currently in it'),
 ('role closure', 'the removal of a post, rather than of the person in it'),
 ('reskilling', 'equipping somebody to do work different from what they trained for'),
 ('a career ladder', 'the ordered sequence of roles through which somebody can rise'),
 ('an entry-level role', 'the role somebody can hold with no prior experience of it'),
 ('a grade', 'the band that fixes a role’s pay and its standing'),
 ('a remit', 'the stated boundary of what somebody is authorised to do'),
 ('a title', 'the name a role is given, which may describe it or may not'),
 ('headcount', 'the number of people, as a controlled figure'),
 ('a specialism', 'a narrow field in which somebody is unusually capable'),
 ('a generalist', 'somebody competent across a range rather than deep in one'),
 ('to reassign', 'to give somebody different work by decision'),
 ('displacement', 'the loss of work to something or somebody else'),
 ('augmentation', 'the addition of capability to a person rather than its replacement'),
 ('a hiring plan', 'the approved list of roles to be filled in a period'),
 ('a competency', 'a capability stated so that it can be assessed'),
 ('workforce planning', 'deciding what capabilities an organisation will need and when')],
v_a=[('The role somebody can hold with no prior experience is an ____________.', 'entry-level role'),
     ('The ordered sequence of roles through which somebody can rise is a ____________.', 'career ladder'),
     ('The stated boundary of what somebody may do is their ____________.', 'remit'),
     ('The removal of a post rather than of a person is ____________.', 'role closure'),
     ('Equipping somebody for work different from their training is ____________.', 'reskilling'),
     ('The addition of capability to a person rather than its replacement is ____________.', 'augmentation'),
     ('A capability stated so that it can be assessed is a ____________.', 'competency'),
     ('An approved role with nobody in it is a ____________.', 'vacancy')],
v_b=[('A job description is the written statement', 'of what a role does and decides.'),
     ('A grade is the band that fixes', 'a role’s pay and its standing.'),
     ('Workforce planning is deciding what capabilities', 'an organisation will need and when.'),
     ('Displacement is the loss of work', 'to something or somebody else.'),
     ('A generalist is somebody competent across a range', 'rather than deep in one.')],

g_title='Grammar: complex noun phrases and premodification',
g_rule=['Modifiers before a noun run in a settled order: opinion, size, age, shape, origin, material, purpose.',
        'Numbers and compounds hyphenate before the noun: a two-year role, a client-facing step.',
        'Three premodifiers is usually the practical limit before meaning becomes guesswork.',
        'Past that limit, unpack the phrase into a clause: a role lasting two years in which...'],
g_fig=('LOOSE',
       ['a two years entry level hand performed role',
        'a client facing intake review process',
        'the exception rules authoring senior post',
        'an improved new systems workflow lead'],
       'PRECISE',
       ['a two-year entry-level role, performed by hand',
        'a client-facing intake review',
        'the senior post of exception rule author',
        'a lead for the new workflow systems'],
       'four phrases stacked past the limit',
       'four unpacked, hyphenated or reordered'),
g_fig_cap='A noun phrase of five modifiers is not concise; it is a puzzle with a deadline.',
g_a=[('a role lasting two years → a ____________ role', 'two-year'),
     ('a step that faces the client → a ____________ step', 'client-facing'),
     ('work performed by hand → ____________ work', 'hand-performed'),
     ('a plan for hiring → a ____________ plan', 'hiring'),
     ('a review that happens every quarter → a ____________ review', 'quarterly'),
     ('Unpack: a three stage client approval sign off process → a process of ____________.', 'three stages in which the client signs off'),
     ('a post for authoring exception rules → the post of ____________', 'exception rule author'),
     ('a librarian for knowledge → a ____________', 'knowledge librarian'),
     ('an author of rules who is senior → a ____________ rule author', 'senior exception')],
g_b=[('Three premodifiers is usually the practical ( limit / minimum ).', ['limit', 'minimum'], 0),
     ('Which is correctly hyphenated?', ['a two years role', 'a two-year role', 'a two year’s role', 'a two-years role'], 1),
     ('Which should be unpacked into a clause?', ['a hiring plan', 'a client-facing step', 'a three stage client approval sign off process', 'a quarterly review'], 2),
     ('a step that faces the client →', ['a client facing step', 'a client-facing step', 'a clients-facing step', 'a facing-client step'], 1),
     ('The settled order of modifiers ends with', ['size', 'purpose', 'opinion', 'age'], 1),
     ('a post for authoring exception rules →', ['the exception rules authoring post', 'the post of exception rule author', 'the authoring exception post', 'the rules exception post'], 1)],

d1=dict(title='Four new titles, all senior',
        fig=(['Four roles that did not exist.', 'All of them above the midpoint.'],
             ['And the one below?', 'It stopped being advertised.']),
        cap='Dalia and Thomas, over the hiring plan.',
        lines=[('Dalia', 'Four new roles, all at or above the midpoint, all requiring three to five '
                         'years. Who has those three to five years?'),
               ('Thomas', 'People who have done the junior work somewhere.'),
               ('Dalia', 'Where? We do not have a junior role any more and have not advertised one '
                         'for two years.'),
               ('Thomas', 'Nobody decided that. The work went into the drafting system and what was '
                          'left needed somebody at a higher grade to confirm it.'),
               ('Dalia', 'I know nobody decided it, which is the thing I find difficult. A role '
                         'disappeared from this firm without a single meeting.'),
               ('Thomas', 'Is that not simply what happens?'),
               ('Dalia', 'It is what happens, and it leaves us with a career ladder whose bottom rung '
                         'requires experience nobody is producing. Including us.'),
               ('Thomas', 'Then we recruit from firms that still have the junior work.'),
               ('Dalia', 'For how long? Those firms are solving the same problem with the same '
                         'systems, on roughly our timetable.'),
               ('Thomas', 'So we are all going to be hiring people with three years of experience '
                          'from a pool that nobody is filling.'),
               ('Dalia', 'That is the position, and it does not become a crisis in any particular '
                         'quarter, which is why nothing will be done about it unless somebody writes '
                         'it down.'),
               ('Thomas', 'Then write it down and put a number on it, because a structural worry '
                          'without a number loses to a vacancy with a start date every single time.')],
        a=[('What do all four new roles require?', 'three to five years of experience'),
           ('How long since a junior role was advertised?', 'two years'),
           ('What does Dalia find most difficult?', 'that a role disappeared without a single meeting'),
           ('Why is recruiting from other firms a short-term answer?', 'because they are solving the same problem on the same timetable'),
           ('What does Thomas say a structural worry needs?', 'a number, or it loses to a vacancy with a start date')],
        b=[('All requiring three to five ____________.', 'years'),
           ('A role disappeared without a single ____________.', 'meeting'),
           ('A pool that nobody is ____________.', 'filling'),
           ('It does not become a ____________ in any particular quarter.', 'crisis')]),
d2=dict(title='Which client is paying for it?',
        fig=(['A two-year entry role.', 'Doing work the systems could do.'],
             ['On purpose?', 'That is the entire point.']),
        cap='Dalia and Kenji.',
        lines=[('Kenji', 'Your two-year role spends its first year doing work a system does in a '
                         'fifth of the time. I have costed it at ninety-four thousand over the two '
                         'years, net of what they produce.'),
               ('Dalia', 'That sounds about right.'),
               ('Kenji', 'Then my question is the dull one. Which client is paying for it?'),
               ('Dalia', 'No client. The firm is, out of the money the systems saved.'),
               ('Kenji', 'The money the systems saved has been allocated three times already, '
                         'including to the fixed-fee conversion. I am not being obstructive, I am '
                         'telling you there is no unallocated pool.'),
               ('Dalia', 'Then it competes with something, and I would like to know what.'),
               ('Kenji', 'On current plans it competes with the knowledge librarian post, which '
                         'exists to preserve what the junior role used to teach.'),
               ('Dalia', 'That is an uncomfortable sentence.'),
               ('Kenji', 'It is an accurate one. We can have the thing that records what people '
                         'learned or the thing that lets people learn it, and on this year’s numbers '
                         'not both.'),
               ('Dalia', 'The librarian post is cheaper and inspectable, so it will win.'),
               ('Kenji', 'It will win, and I think it should win this year, and I also think that if '
                         'it wins for four years in a row we will have a firm full of people '
                         'curating a record of judgement nobody in the building can exercise.'),
               ('Dalia', 'So you agree with me and you are going to recommend against me.'),
               ('Kenji', 'Yes. I do not know how to resolve that and I am not going to pretend the '
                         'numbers resolve it.')],
        unresolved=True,
        a=[('What has Kenji costed the role at?', 'ninety-four thousand over two years, net of what they produce'),
           ('Who would pay for it?', 'the firm, out of savings that are already allocated'),
           ('What does it compete with?', 'the knowledge librarian post'),
           ('Why is that uncomfortable?', 'because the librarian exists to preserve what the junior role used to teach'),
           ('What is Kenji’s position?', 'he agrees with Dalia and will recommend against her, and says the numbers do not resolve it')],
        b=[('Net of what they ____________.', 'produce'),
           ('There is no unallocated ____________.', 'pool'),
           ('Cheaper and ____________, so it will win.', 'inspectable'),
           ('A record of judgement nobody in the building can ____________.', 'exercise')]),

speak=[('Say it correctly',
        ['Student A: read out six long noun phrases from documents at your work.',
         'Student B: say which have more than three modifiers and unpack those into clauses.',
         'Find the one whose meaning changed when it was unpacked.']),
       ('Spoken specification: a role that has appeared',
        ['Name a role in your organisation that did not exist three years ago.',
         'Brief aloud what it decides, what its remit is, and what experience it assumes.',
         'Your partner asks where somebody would get that experience now.']),
       ('The missing rung',
        ['In pairs, identify your organisation’s lowest-level role.',
         'Say what it teaches and whether it is still being advertised.',
         'Find the case where the entry role has gone and nobody decided it.'])],

ext_title='New roles get job descriptions; disappearing roles get nothing, because nobody decides them',
ext_fig=figs.datatable('ARCLIGHT’S ROLES, THREE YEARS APART',
                       ['Role', 'Then', 'Now', 'Grade'],
                       [['junior checker', '14', '0', 'entry'],
                        ['reviewer', '3', '3', 'mid'],
                        ['exception rule author', '0', '1', 'senior'],
                        ['client format curator', '0', '2', 'mid+'],
                        ['knowledge librarian', '0', '1', 'mid+'],
                        ['workflow systems lead', '0', '1', 'senior']]),
ext_fig_cap='Five roles created by decision; one removed by nobody, and it was the only entry point.',
ext=[
 'The roles a capability creates are usually noticed and the roles it removes usually are '
 'not, and the asymmetry has an administrative cause rather than a political one. A new role '
 'requires a job description, a grade, an approval and a budget line, so it passes through '
 'every mechanism an organisation has for thinking; a disappearing role requires none of '
 'those, because it disappears by not being advertised, which is an absence of events rather '
 'than an event.',
 'The roles that appear tend to share a shape. They are concerned with specifying, curating, '
 'supervising and explaining: writing the rule that distinguishes two kinds of case, keeping '
 'a body of reference material correct, deciding what must never be delegated, accounting '
 'afterwards for a decision a system contributed to. These are genuinely valuable and they '
 'are, almost without exception, graded above the entry level, because they presuppose '
 'somebody who already understands the work.',
 'The roles that go are the ones whose content was volume rather than judgement, and it is '
 'worth stating plainly that this is usually a relief to the people who held them. The '
 'difficulty is second-order: those roles were where the firm taught, and the teaching was '
 'incidental to the volume. Removing the drudgery removes the apprenticeship, and the senior '
 'roles that appear in its place all assume the apprenticeship happened somewhere.',
 'At the level of a single firm this problem is deferrable indefinitely, because experienced '
 'people can be recruited from firms that still have the junior work. At the level of a '
 'market it is not deferrable at all, because those firms are making the same change on the '
 'same timetable, and the pool everybody is recruiting from is being refilled by nobody. The '
 'absence does not produce a crisis in any particular quarter, which is precisely why it is '
 'not managed.',
 'A firm that wants to act has one honest option and should cost it openly: create an entry '
 'role whose first year consists substantially of work the systems could do, performed by '
 'hand, for the stated purpose of producing people who have done it. This is expensive, it '
 'has no client paying for it, and it competes directly with the roles created to preserve '
 'the knowledge the entry role used to generate, which is an irony worth naming rather than '
 'resolving with rhetoric.'],
dp1=('Entry-level roles and capability change',
     'Labour-market studies of technological change generally find employment effects '
     'concentrated in entry-level and routine-task roles, with firms reporting difficulty '
     'recruiting mid-level staff several years later.',
     'Source: general labour-economics literature, 2026. Effects differ markedly by sector.'),
e_a=[('Why are removed roles not noticed?', 'because they disappear by not being advertised, which is an absence of events'),
     ('What shape do new roles share?', 'specifying, curating, supervising and explaining, graded above entry level'),
     ('What was incidental to the drudgery?', 'the teaching: the apprenticeship was a by-product of the volume'),
     ('Why is the problem deferrable for a firm but not a market?', 'because every firm is recruiting from a pool nobody is refilling'),
     ('What is the one honest option?', 'an entry role doing work by hand for the stated purpose of producing experience')],
e_b=[('New roles pass through an organisation’s thinking mechanisms.', 'T'),
     ('Disappearing roles require a decision.', 'F'),
     ('The removed roles were usually full of judgement.', 'F'),
     ('Losing the drudgery also loses the apprenticeship.', 'T'),
     ('A single firm cannot defer the problem.', 'F'),
     ('The honest option has a client paying for it.', 'F')],

w_model=(
 'Purpose: decide whether Arclight creates a 2-year entry role, and state what it competes '
 'with, so that the choice is made rather than deferred. Scope: the checking and review '
 'functions; advisory recruitment is out of scope. Inputs: the hiring plan for next year, the '
 '3 years of role counts, and Kenji’s cost model dated 7 October. Criteria: state the cost '
 'over 2 years net of output; name the 1 post it competes with and the grade of each; state '
 'how many hand-performed sheets the first year requires and that the number is a judgement; '
 'state the 2 conditions under which the role would be withdrawn. Done: 1 recommendation of '
 'no more than 2 pages, 1 costed comparison of the 2 competing posts, and 1 named decision '
 'owner. Fallback: where the cost cannot be met from existing budget, say which post is not '
 'created rather than recommending both and leaving the conflict to the hiring process.'),
w_fig=figs.datatable('TWO POSTS, ONE BUDGET',
                     ['', 'Entry role (2 years)', 'Knowledge librarian'],
                     [['cost, net of output', '94,000 EUR', '71,000 EUR'],
                      ['grade', 'entry', 'mid+'],
                      ['output inspectable on completion', 'no', 'yes'],
                      ['preserves the answers', 'no', 'yes'],
                      ['produces people who have done it', 'yes', 'no']]),
w_fig_cap='The cheaper post produces the inspectable thing, which is why it wins.',
w_task='Write a specification for a role decision in your own organisation.',
w_steps=['State the cost over the full period, net of what the role produces.',
         'Name the post or activity it competes with, and the grade of each.',
         'Express the learning requirement as a number and admit it is a judgement.',
         'State the conditions under which the role would be withdrawn.',
         'Say what happens if the budget will not carry both.'],
w_bank=['Decide whether … , and state what it competes with, so that …',
        'Cover … ; … is out of scope.',
        'Work from … , the … years of … , and … dated …',
        'State the cost over … net of … ; name the … it competes with; state … and that the number is a judgement.',
        'Where the cost cannot be met from … , say which post is not created rather than …'],
w_check=['Is the cost stated net of output?',
         'Is the competing post named rather than implied?',
         'Is the learning number admitted to be a judgement?',
         'Is there a rule forbidding recommending both?'],

t_title='The roles that appear and the roles that go',
t_fig=figs.split('TWO KINDS OF ROLE CHANGE',
                 'Appearing — by decision',
                 ['a job description is written',
                  'a grade is set and approved',
                  'a budget line is created',
                  'somebody owns the outcome'],
                 'Going — by default',
                 ['nobody writes anything',
                  'the post is simply not advertised',
                  'the budget line lapses',
                  'nobody is accountable for the gap']),
t_fig_cap='Only one of these columns passes through any mechanism for thinking.',
t_body=[
 'List the roles your organisation has created in three years and the roles it has stopped '
 'advertising, side by side, and notice that only the first list went through any approval. '
 'The second list is where your capability problems will come from, and nothing in your '
 'management processes will raise it, because the disappearance of a role is an absence of '
 'events and your processes are built to examine events.',
 'Then check the lowest rung specifically. For every role you are currently recruiting, ask '
 'where a candidate would get the experience it requires, and keep asking until you reach '
 'either a role you still offer or an admission that you are relying on other organisations. '
 'If it is the second, find out whether those organisations are making the same change you '
 'are, because the answer is usually yes and on a similar timetable.',
 'If you decide to act, cost it openly and name what it displaces. An entry role that spends '
 'its first year on work a system could do, performed by hand for the purpose of producing '
 'people who have done it, is a real and defensible answer with no client paying for it. It '
 'will compete with the posts created to preserve the knowledge it used to generate, and the '
 'honest way to put that to a board is as a choice between recording judgement and producing '
 'people who can exercise it, rather than as a staffing request.'],
t_say=[('List both: ', 'Which roles have we created, and which have we stopped advertising?'),
       ('Check the rung: ', 'Where would a candidate get those three years now?'),
       ('Name the conflict: ', 'This competes with the librarian post, at this grade.')],
t_bound=('A role analysis shows what has appeared and what has gone. It cannot tell you how '
         'many hand-performed repetitions produce competence, whether a recruited outsider’s '
         'experience is equivalent to one of your own, or how long the external pool will '
         'last. Those are judgements, and should be recorded as such.'),
t_a=[('Which roles have we created, and which have we stopped ____________?', 'advertising'),
     ('Where would a candidate get those three ____________ now?', 'years'),
     ('This ____________ with the librarian post, at this grade.', 'competes'),
     ('The disappearance of a role is an ____________ of events.', 'absence'),
     ('For the purpose of producing people who have ____________ it.', 'done'),
     ('A choice between recording judgement and producing people who can ____________ it.', 'exercise')],
t_b_rubric='Rewrite each hiring statement so that it names the experience assumption.',
t_b=[('We need an exception rule author with three years’ experience.', 'we need three years of experience in a role we have not offered for two years'),
     ('We are recruiting externally for the curator posts.', 'we are recruiting from firms that still run the junior work we removed'),
     ('Headcount is flat year on year.', 'headcount is flat and the entry grade has gone from fourteen to nought'),
     ('The hiring plan is fully approved.', 'the hiring plan approves five senior roles and no route into any of them')],

case=dict(
 title='Decision Clinic · The post that was never created',
 brief=[
  'Two years ago Dalia proposed a two-year entry role. The board did not reject it; it '
  'deferred it to the following cycle, and then to the cycle after that, each time in favour '
  'of a post with a vacancy and a start date.',
  'This year Arclight needed two client format curators. Fourteen applications arrived, of '
  'which three met the experience requirement, and all three came from one competitor who had '
  'kept its junior checking work. Two were hired at eighteen per cent above the plan’s '
  'midpoint.',
  'Ines now says the entry role should have been created two years ago. Kenji points out that '
  'the eighteen per cent premium on two posts is twenty-two thousand euros a year, against '
  'ninety-four thousand over two years for the entry role, and that the deferral has been '
  'cheaper every year so far.'],
 exhibit=figs.datatable('TWO YEARS OF DEFERRAL, PRICED',
                        ['', 'Year 1', 'Year 2', 'This year'],
                        [['entry role cost if created', '47,000', '47,000', '0'],
                         ['hiring premium paid', '0', '0', '22,000'],
                         ['qualified applicants', '—', '—', '3 of 14'],
                         ['sources of those applicants', '—', '—', '1 firm'],
                         ['cumulative cost of deferral', '0', '0', '22,000']]),
 exhibit_cap='Deferral has been cheaper in every single year, which is how it reached its third year.',
 exhibit_note='The premium figure covers two posts in one year and says nothing about what the '
              'same market will cost in three years, when the one remaining source may have '
              'made the same change.',
 voices=[('Ines Carvalho', 'managing director',
          'Three qualified applicants out of fourteen, all from one firm. We are one '
          'competitor’s decision away from having no recruitment market at all, and I signed '
          'each of the deferrals myself.'),
         ('Kenji Watanabe', 'finance',
          'Each deferral was correct on the numbers available at the time and the cumulative '
          'cost is twenty-two thousand against ninety-four. I would defer it again this year '
          'on the same arithmetic, and I think that is the actual problem rather than a '
          'defence of it.'),
         ('Dalia Rahman', 'co-founder',
          'The arithmetic will favour deferral every year until the year it is catastrophic, '
          'because the cost of the role is immediate and the cost of not having it is '
          'somebody else’s problem until suddenly it is ours. That is not an argument about '
          'numbers.')],
 steps=[('Find it', 'What has deferral cost so far?'),
        ('Compare it', 'How does that compare with creating the role?'),
        ('Infer it', 'Why does Kenji say the arithmetic is the problem?'),
        ('Weigh it', 'A cheaper present against a market with one remaining source.'),
        ('Decide', 'Is the role created this year, and on what reasoning?')],
 analysis=[('Find it. What premium was paid?', 'twenty-two thousand euros a year on two posts'),
           ('Compare it. What would the role have cost?', 'ninety-four thousand over two years'),
           ('Infer it. Why is the arithmetic the problem?', 'because it favours deferral every year until the year it does not'),
           ('Weigh it. What is the real exposure?', 'that the single remaining source firm makes the same change'),
           ('Decide. What reasoning would justify creating it?', 'that the decision cannot be made on annual cost comparison at all')],
 decision='Write Arclight’s decision on the entry role.',
 decision_steps=['Say whether the role is created and from when.',
                 'Say what it displaces, by name.',
                 'Say what reasoning is used, given that annual arithmetic favours deferral.',
                 'Say what would cause the role to be withdrawn.'],
 bank=['The … role is created from …',
       'It displaces …',
       'The decision is not made on … because …',
       'We would withdraw it if …',
       'This is reviewed every …'],
 outcome='Arclight created the entry role from the following April, displacing the knowledge '
         'librarian post for a year, and recorded in the board minute that the decision was '
         'deliberately not made on an annual cost comparison. Two of the first three '
         'appointments were still with the firm at two years and one has since become a '
         'reviewer. Kenji notes that the sole source competitor has not yet made the change '
         'everybody predicted, that the market has therefore not tightened as feared, and that '
         'on the evidence available the deferral he recommended each year would have remained '
         'the cheaper course; he adds that he does not regard this as vindication, because the '
         'firm now has a reviewer it could not have recruited.',
 outcome_q=[('What has happened to the predicted market tightening?', 'it has not yet occurred; the source competitor has not made the change'),
            ('Why does Kenji not treat that as vindication?', 'because the firm now has a reviewer it could not have recruited')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write next year’s hiring plan',
 task=['This is the brief that produced the hiring plan containing four senior roles and no '
       'route into any of them.',
       'It is a competent brief about filling gaps, and it contains nothing that would have '
       'caused anybody to notice the missing rung.'],
 draft=['Put together next year’s hiring plan.',
        'Work from what the department heads say they need.',
        'Grade the new roles appropriately.',
        'Keep the total within the agreed headcount envelope.',
        'Flag anything unusual.',
        'Have it ready for the budget round.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that asks what is needed and never asks what has gone.',
 asked=['Roles to be filled, with grades',
        'A comparison with the roles of three years ago',
        'Where the required experience now comes from'],
 back=['5 senior roles, correctly graded',
       'No comparison with prior years',
       'No note on experience sources'],
 gap='"What the department heads say they need" guarantees a list of present gaps, "grade '
     'appropriately" sets no reference, "within the headcount envelope" permits a flat total '
     'that hides a changed shape, and "anything unusual" leaves the reader to recognise a '
     'structural absence as unusual.',
 back_cap='A plan that was right about every role in it and silent about the one not in it.',
 back_note='The headcount envelope was met exactly. The entry grade went from fourteen to '
           'nought inside a flat total, and no line in the plan showed it.',
 diagnosis=[('[1] "what the department heads say they need" — needs now, or capability later?', 'hidden assumption'),
            ('[2] "grade appropriately" — against which reference points?', 'missing condition'),
            ('[3] "within the headcount envelope" — and if the shape changes inside the total?', 'unstated exception'),
            ('[4] "flag anything unusual" — unusual against what baseline?', 'missing condition'),
            ('[5] no instruction to compare with prior years', 'hidden assumption'),
            ('[6] "ready for the budget round" — and if a structural issue needs longer?', 'unstated exception')],
 rewrite='Rewrite the brief so that the plan must compare with three years ago, show the '
         'grade distribution, and state where each required experience is obtained.',
 scaffold=['What the plan must decide, and what it must not conceal',
           'Which functions it covers and which are out of scope',
           'The plans, counts and cost models it is built from',
           'What each role line must carry, including the source of its required experience',
           'What comes back, in how many parts, and by when',
           'What to do where no internal source of the experience exists'],
 bank=['Decide … , and state … , so that …',
       'Cover … ; … is out of scope.',
       'Work from … , the … years of role counts, and … dated …',
       'For each role give … , … , and where a candidate obtains … ; show the grade distribution against …',
       'Where no internal source of the required experience exists, … rather than …'],
 check=['Must the plan compare with three years ago?',
        'Is the grade distribution required, not just the total?',
        'Must each role state where its experience comes from?',
        'Is there a rule for a role with no internal source?'],
 model=['Decide whether Arclight creates a 2-year entry role, and state what it competes with, so that the choice is made rather than deferred',
        'The checking and review functions; advisory recruitment is out of scope',
        'The hiring plan for next year, the 3 years of role counts, and Kenji’s cost model dated 7 October',
        'For each role give the grade, the required experience, and where a candidate obtains it; show the grade distribution against the distribution 3 years ago; state the cost of the entry role over 2 years net of output and name the 1 post it competes with',
        '1 recommendation of no more than 2 pages, 1 costed comparison of the 2 competing posts, and 1 named decision owner, by 14 November',
        'Where the cost cannot be met from existing budget, say which post is not created rather than recommending both and leaving the conflict to the hiring process'],
 cost='2 budget rounds in which the structural question was not visible, 22,000 EUR a year of '
      'hiring premium, and 3 qualified applicants from 1 firm when 2 posts finally opened.'),

rev_fig=figs.split('COMPLEX NOUN PHRASES',
                   'Stacked past the limit',
                   ['a two years entry level hand performed role',
                    'a client facing intake review process',
                    'the exception rules authoring senior post',
                    'an improved new systems workflow lead'],
                   'Hyphenated, reordered or unpacked',
                   ['a two-year entry-level role, done by hand',
                    'a client-facing intake review',
                    'the senior post of exception rule author',
                    'a lead for the new workflow systems']),
rev_fig_cap='Three modifiers is the working limit; past it, use a clause.',
rev=dict(
 read=[('Why are removed roles not noticed?', ['nobody cares', 'they disappear by not being advertised', 'they are secret', 'they are cheap'], 1),
       ('New roles are typically concerned with', ['volume', 'specifying and curating', 'transcription', 'intake'], 1),
       ('The apprenticeship was', ['deliberate', 'a by-product of the volume', 'contractual', 'external'], 1),
       ('In the Clinic, how many qualified applicants came, and from how many firms?', ['14 from 9', '3 from 1', '5 from 3', '2 from 2'], 1)],
 listen_text='List the roles your organisation has created in three years and the roles it '
             'has stopped advertising, side by side, and notice that only the first list went '
             'through any approval. Then check the lowest rung: for every role you are '
             'recruiting, ask where a candidate would get the experience it requires, and keep '
             'asking until you reach a role you still offer or an admission.',
 listen=[('Only the first list went through any ____________.', 'approval'),
         ('Then check the lowest ____________.', 'rung'),
         ('Ask where a candidate would get the ____________ it requires.', 'experience'),
         ('Until you reach a role you still offer or an ____________.', 'admission')],
 speak=['Name a role your organisation has stopped advertising, and what it used to teach.',
        'Say where the experience for your most senior vacancy now comes from.'],
 write='Write one complex noun phrase from your work and then unpack it into a clause.',
 vocab=[('The role somebody can hold with no prior experience is an ____________.', 'entry-level role'),
        ('The stated boundary of what somebody may do is their ____________.', 'remit'),
        ('Equipping somebody for different work is ____________.', 'reskilling'),
        ('A capability stated so that it can be assessed is a ____________.', 'competency'),
        ('The addition of capability to a person is ____________.', 'augmentation')],
 gram=[('a role lasting two years → a ____________ role', 'two-year'),
       ('a step that faces the client → a ____________ step', 'client-facing'),
       ('work performed by hand → ____________ work', 'hand-performed'),
       ('a post for authoring exception rules → the post of ____________', 'exception rule author'),
       ('a librarian for knowledge → a ____________', 'knowledge librarian')]),

found=['List the roles your organisation created and the ones it stopped advertising.',
       'Ask where a candidate for your most senior vacancy gets their experience.',
       'Find out whether your source organisations are making the same change.',
       'Cost an entry role and name the post it would displace.'],
end_line='A structural worry without a number loses to a vacancy with a start date.',
end_next='Next: Unless and Provided That',
)
