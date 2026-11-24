# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='By Far, Nowhere Near',
gram='degree and intensity: by far, nowhere near, marginally',
ai='skill loss in your own team',
strap='CEFR C1 · Grammar: degree and intensity · AI: skill loss in your own team',
cando=['use by far, nowhere near, marginally and considerably with precision',
       'grade a comparison so that the degree carries real information',
       'design an exercise that measures whether a skill has been retained',
       'report a decline in capability without exaggerating or minimising it',
       'state what a drill does and does not establish'],
hero=('ONE DAY WITHOUT IT',
      ['By far the worst result was in the thing we were least worried about.',
       'And in one measure they were marginally better than the system.'],
      [(760, 'orange', 'short'), (1500, 'teal', 'long'),
       (2180, 'blue', 'short'), (2840, 'grey', 'long')]),
hero_cap='Nobody knows whether a skill has been retained until somebody arranges for it to be needed.',

warm=['Which skill in your team would be needed if a system stopped working tomorrow?',
      'When did anybody last use it?',
      'How would you find out whether it is still there, without waiting for an emergency?'],
read=[
 'The exercise took one day and was announced three weeks in advance, which Victor Sandoval '
 'now regards as its principal weakness. Four reviewers and three members of the checking '
 'team were given twelve sets of client documents and asked to produce mapping sheets by '
 'hand, with the drafting system switched off and the eleven-case library available on paper.',
 'The headline result was considerably better than Victor had feared and nowhere near the '
 'standard of the system. Nine of the twelve sheets were usable; two contained errors that '
 'would have reached a client; one was abandoned after ninety minutes. The mean time was two '
 'hours and eleven minutes against the system’s three minutes, which surprised nobody, and '
 'the error rate was four times the system’s, which surprised everybody.',
 'By far the worst performance was in a field nobody had identified as a risk: the '
 'identification of which figures were totals and which were components. Six of the twelve '
 'sheets got this wrong in at least one place. The system has handled it correctly for three '
 'years, nobody has ever had to think about it, and the convention it uses was never written '
 'down anywhere because it was never a decision anybody made.',
 'In one measure the team was marginally better than the system, and the finding is more '
 'interesting than the headline. On two of the twelve sets, documents were internally '
 'inconsistent in a way the system resolves by following its ordinary rule; two reviewers '
 'stopped, wrote a note, and asked the client. The system does not stop, and until the '
 'exercise nobody had considered whether it should.',
 'Priya Menon, who ran the exercise, has been careful about what it establishes. It shows '
 'that seven people performing an unfamiliar task once, with three weeks’ notice and a '
 'library on the desk, produce these results. It does not show what the same people would do '
 'at eight in the morning with a client waiting and no warning, which is the circumstance the '
 'exercise exists to be a proxy for, and which cannot be arranged without deceiving '
 'somebody.'],
c_a=[('How was the exercise set up?', 'seven people, twelve document sets, drafting system off, library on paper, three weeks’ notice'),
     ('What were the headline results?', 'nine usable sheets, two with client-reaching errors, one abandoned'),
     ('What was the worst area, and why was it a surprise?', 'identifying totals against components; nobody had identified it as a risk'),
     ('In what way was the team better than the system?', 'two reviewers stopped and asked the client about inconsistent documents'),
     ('What does Priya say the exercise does not show?', 'what the same people would do with no warning and a client waiting')],
c_b=[('The exercise was unannounced.', 'F'),
     ('The results were worse than Victor had feared.', 'F'),
     ('The mean time was two hours and eleven minutes.', 'T'),
     ('The totals-and-components convention was written down.', 'F'),
     ('The system stops when documents are inconsistent.', 'F'),
     ('The exercise is an exact proxy for a real outage.', 'F')],
c_c=[('Announced three weeks in ____________.', 'advance'),
     ('Nine of the twelve sheets were ____________.', 'usable'),
     ('The error rate was four times the system’s, which surprised ____________.', 'everybody'),
     ('It was never a decision anybody ____________.', 'made'),
     ('Two reviewers stopped, wrote a note, and asked the ____________.', 'client'),
     ('Which cannot be arranged without ____________ somebody.', 'deceiving')],
c_d=[('The worst area was one nobody had ( identified / measured ) as a risk.', ['identified', 'measured'], 0),
     ('How many sheets contained errors that would have reached a client?', ['none', 'two', 'six', 'nine'], 1),
     ('The totals-and-components convention', ['was documented', 'was never written down', 'was wrong', 'came from a client'], 1),
     ('What did two reviewers do that the system does not?', ['work faster', 'stop and ask the client', 'refuse the work', 'change the rule'], 1),
     ('Priya is careful about', ['the cost', 'what the exercise establishes', 'who took part', 'the date'], 1)],
c_e=('Which degree expression? Put each sentence in the right column.',
     [('By far the worst result was in totals.', 'by far'),
      ('They were nowhere near the system’s standard.', 'nowhere near'),
      ('In one measure they were marginally better.', 'marginally'),
      ('The result was considerably better than feared.', 'considerably'),
      ('By far the most useful finding was the second.', 'by far'),
      ('The time taken was nowhere near comparable.', 'nowhere near')],
     ['by far', 'nowhere near', 'marginally', 'considerably']),

v_fig_title='SKILL, AND WHAT HAPPENS TO IT',
v_fig=[('chart', 'atrophy'), ('scale', 'proficiency'), ('bulb', 'muscle memory'),
       ('doc', 'a skills matrix'), ('key', 'a competence check'), ('bank', 'a practice requirement')],
v_fig_cap='Six words for a capability that decays silently while the output stays good.',
vocab=[
 ('atrophy', 'the wasting away of a capability through lack of use'),
 ('proficiency', 'the level of skill somebody has, as a measurable standard'),
 ('skill currency', 'the state of a skill being recent enough to be relied on'),
 ('a competence check', 'a test establishing that somebody can still do the task'),
 ('muscle memory', 'the capacity to perform without conscious attention, from repetition'),
 ('degradation', 'the gradual worsening of a capability or a standard'),
 ('to lapse', 'to cease to be current, through the passage of time'),
 ('recertification', 'the renewing of a formal confirmation of competence'),
 ('a refresher', 'a short period of training to restore a lapsed skill'),
 ('facility', 'the quality of performing smoothly and without hesitation'),
 ('dexterity', 'skill in the physical or practical handling of a task'),
 ('rustiness', 'the slight loss of fluency that follows a period without practice'),
 ('a simulation', 'an arranged situation that stands in for a real one'),
 ('a drill', 'a rehearsal of a procedure, performed in order to keep it ready'),
 ('a dry run', 'a full rehearsal with nothing real at stake'),
 ('capability decay', 'the organisational loss of an ability nobody decided to give up'),
 ('hands-on', 'involving direct performance rather than supervision'),
 ('a skills matrix', 'a grid recording who can do what, to what standard'),
 ('to rehearse', 'to practise something in advance of needing it'),
 ('a practice requirement', 'the stated pattern of practice needed to keep a skill current')],
v_a=[('The wasting away of a capability through lack of use is ____________.', 'atrophy'),
     ('The state of a skill being recent enough to rely on is ____________.', 'skill currency'),
     ('The organisational loss of an ability nobody decided to give up is ____________.', 'capability decay'),
     ('A grid recording who can do what, to what standard, is a ____________.', 'skills matrix'),
     ('A rehearsal performed in order to keep a procedure ready is a ____________.', 'drill'),
     ('The stated pattern of practice needed to keep a skill current is a ____________.', 'practice requirement'),
     ('A short period of training to restore a lapsed skill is a ____________.', 'refresher'),
     ('A test establishing that somebody can still do the task is a ____________.', 'competence check')],
v_b=[('Proficiency is the level of skill somebody has,', 'as a measurable standard.'),
     ('Muscle memory is the capacity to perform', 'without conscious attention, from repetition.'),
     ('To lapse is to cease to be current,', 'through the passage of time.'),
     ('A simulation is an arranged situation', 'that stands in for a real one.'),
     ('Rustiness is the slight loss of fluency', 'that follows a period without practice.')],

g_title='Grammar: degree and intensity',
g_rule=['By far intensifies a superlative or a comparative: by far the worst, by far better.',
        'Nowhere near denies closeness: nowhere near the standard, nowhere near as fast.',
        'Marginally, somewhat, considerably and significantly grade a comparative precisely.',
        'A degree word is a claim about size; choose it to match your evidence, not your feeling.'],
g_fig=('LOOSE',
       ['It was by far worse than we feared.',
        'They were nowhere near as the system.',
        'In one measure they were marginal better.',
        'The result was considerable better.'],
       'PRECISE',
       ['It was by far the worst of the twelve.',
        'They were nowhere near as accurate as the system.',
        'In one measure they were marginally better.',
        'The result was considerably better.'],
       'four degree expressions misformed',
       'four that make a claim of a stated size'),
g_fig_cap='A degree word is the most frequently exaggerated word in a management report.',
g_a=[('____________ far the worst result was in the totals field.', 'By'),
     ('They were nowhere near ____________ accurate as the system.', 'as'),
     ('In one measure they were ____________ (marginal) better.', 'marginally'),
     ('The headline result was ____________ (considerable) better than feared.', 'considerably'),
     ('Two hours and eleven minutes is nowhere near ____________ to three minutes.', 'comparable'),
     ('The second finding was ____________ far the more useful of the two.', 'by'),
     ('The error rate was ____________ (significant) higher, at four times.', 'significantly'),
     ('Performance was ____________ (slight) worse in the afternoon.', 'slightly'),
     ('Of the twelve, this was ____________ (easy) by far the hardest set.', 'easily')],
g_b=[('A degree word is a claim about ( quality / size ).', ['quality', 'size'], 1),
     ('____ far the worst result was in totals.', ['For', 'By', 'At', 'In'], 1),
     ('They were nowhere near ____ accurate as the system.', ['so', 'as', 'than', 'that'], 1),
     ('In one measure they were ____ better.', ['marginal', 'marginally', 'margin', 'marginality'], 1),
     ('The result was ____ better than feared.', ['considerable', 'considerably', 'consideration', 'considering'], 1),
     ('Nowhere near denies', ['the fact', 'closeness', 'the measurement', 'the comparison'], 1)],

d1=dict(title='Totals and components',
        fig=(['Six of twelve got totals wrong.', 'Nobody predicted that.'],
             ['Why would they?', 'Because the system never got it wrong.']),
        cap='Victor and Priya, the evening of the exercise.',
        lines=[('Priya', 'Six of the twelve sheets confuse a total with a component somewhere. It is '
                         'by far the worst result and nobody had it on the risk list.'),
               ('Victor', 'Because the system has never got it wrong, so nobody has had to think '
                          'about it for three years.'),
               ('Priya', 'And when I went to look for the convention it uses, there is no document. '
                         'It was never a decision. Somebody wrote it into the drafting three years '
                         'ago and it has been right ever since.'),
               ('Victor', 'So the knowledge is in the system and nowhere else.'),
               ('Priya', 'The knowledge is in the system, which is fine, and the awareness that it is '
                         'a question at all is in nobody, which is not.'),
               ('Victor', 'That distinction is the most useful thing to come out of today.'),
               ('Priya', 'It is, and I want to be careful about the headline, because two of your '
                         'reviewers did something the system does not do.'),
               ('Victor', 'Which was?'),
               ('Priya', 'Two sets were internally inconsistent. The system resolves that by '
                         'following its ordinary rule. Two of them stopped, wrote a note and said '
                         'they would ask the client.'),
               ('Victor', 'Which is the right answer and the system has been doing the other thing '
                          'for three years.'),
               ('Priya', 'For three years, on an unknown number of occasions, because it does not '
                         'record that it had to choose.'),
               ('Victor', 'Then the finding of the day is not that we are rusty. It is that we found '
                          'two things about the system by switching it off, and neither was on the '
                          'list of things we were testing for.')],
        a=[('What was the worst result?', 'six of twelve sheets confusing a total with a component'),
           ('Why had nobody predicted it?', 'because the system has never got it wrong, so nobody has thought about it'),
           ('What distinction does Priya draw?', 'between the knowledge being in the system and the awareness that it is a question being in nobody'),
           ('What did two reviewers do?', 'stopped, wrote a note and said they would ask the client'),
           ('What is Victor’s conclusion?', 'that the day found two things about the system that were not being tested for')],
        b=[('It was never a ____________.', 'decision'),
           ('The awareness that it is a question at all is in ____________.', 'nobody'),
           ('It does not record that it had to ____________.', 'choose'),
           ('Neither was on the list of things we were ____________ for.', 'testing')]),
d2=dict(title='Three weeks’ notice',
        fig=(['Three weeks of notice.', 'Which makes it a best case.'],
             ['Then run it unannounced.', 'And tell the client what?']),
        cap='Priya and Marta.',
        lines=[('Marta', 'Your results are a best case. Three weeks’ notice, the library on the desk, '
                         'no client waiting.'),
               ('Priya', 'All true, and I would run it unannounced if I could see how.'),
               ('Marta', 'What stops you?'),
               ('Priya', 'Twelve real client jobs would be done badly. Nine usable out of twelve with '
                         'notice means something like six without, and two of the failures reach a '
                         'client.'),
               ('Marta', 'Use historical sets with known answers.'),
               ('Priya', 'Then it is not unannounced, because a reviewer handed a three-year-old set '
                         'knows exactly what is happening.'),
               ('Marta', 'So you cannot measure the thing you want to measure.'),
               ('Priya', 'I cannot measure it without either deceiving a client or deceiving my '
                         'colleagues, and I am not going to do the first.'),
               ('Marta', 'And the second?'),
               ('Priya', 'I have thought about it. I could insert unmarked sets into the ordinary '
                         'flow and simply not say. Nobody would be harmed and I would have the '
                         'number.'),
               ('Marta', 'And?'),
               ('Priya', 'And the first time somebody found out, every exercise I ever run again '
                         'would be read as a test rather than as a drill, which would cost more than '
                         'the number is worth. So I will keep announcing them and report the results '
                         'as a best case, in those words, every time.'),
               ('Marta', 'And when somebody quotes the number in a tender without the words, '
                         'as they will, you have reported honestly and the figure is still '
                         'doing the work of a claim you did not make.'),
               ('Priya', 'I know. I have no mechanism for that, and printing the caveat in '
                         'larger type is not one.')],
        unresolved=True,
        a=[('Why are the results a best case?', 'three weeks’ notice, the library available, no client waiting'),
           ('What stops an unannounced exercise with real jobs?', 'twelve real jobs would be done badly and two failures would reach a client'),
           ('Why do historical sets not work?', 'because a reviewer handed an old set knows what is happening'),
           ('What does Priya refuse to do?', 'deceive a client'),
           ('Why does she also reject unmarked sets?', 'because discovery would make every future exercise read as a test rather than a drill')],
        b=[('Your results are a best ____________.', 'case'),
           ('Something like six ____________ notice.', 'without'),
           ('Nobody would be harmed and I would have the ____________.', 'number'),
           ('Report the results as a best case, in those ____________, every time.', 'words')]),

speak=[('Say it correctly',
        ['Student A: compare six pairs of things using by far, nowhere near and marginally.',
         'Student B: ask what evidence supports each degree word.',
         'Find the one where the degree word claimed more than the evidence.']),
       ('Spoken specification: a drill',
        ['Choose a skill your team would need if a system failed.',
         'Brief aloud how you would test whether it is still there, and what the test proves.',
         'Your partner asks what your test cannot establish.']),
       ('Best case',
        ['In pairs, describe a measurement one of you has taken at work.',
         'Say in what respects the conditions were favourable.',
         'Find the measurement whose favourable conditions were never reported.'])],

ext_title='A skill that is never used is not retained, and nobody finds out by waiting',
ext_fig=figs.datatable('TWELVE SHEETS BY HAND',
                       ['Measure', 'By hand', 'System', 'Comparison'],
                       [['mean time', '2 h 11 min', '3 min', 'nowhere near'],
                        ['usable sheets', '9 of 12', '12 of 12', 'considerably worse'],
                        ['errors reaching a client', '2', '0.5 expected', 'four times'],
                        ['totals confused with components', '6 of 12', '0', 'by far the worst'],
                        ['stopped on inconsistent input', '2 of 2', '0 of 2', 'marginally better']]),
ext_fig_cap='Four rows worse and one better, and the better row was not being tested for.',
ext=[
 'An organisation cannot tell whether a skill has been retained by reasoning about it, and '
 'the ordinary measures are silent, because output quality stays high for as long as the '
 'system producing it stays available. The only way to establish the position is to arrange '
 'for the skill to be needed, which means a drill: a day on which the system is switched off '
 'and a known set of work is done by hand against a known standard.',
 'Such an exercise reliably produces three kinds of finding, only one of which is the one it '
 'was designed for. The first is the expected decline, usually smaller than the pessimists '
 'feared and nowhere near the standard the system achieves. The second is a collapse in some '
 'area nobody had on the risk list, typically a convention the system has handled silently '
 'and correctly for years, which was never a decision anybody made and is therefore written '
 'down nowhere.',
 'The third kind of finding is the most valuable and the easiest to lose in the reporting. In '
 'some respect the people will be better than the system, usually because they stop. A system '
 'given internally inconsistent input resolves it by its ordinary rule and does not record '
 'that it had to choose; a person stops, writes a note and asks. Switching the system off is '
 'frequently the only way an organisation discovers that this has been happening.',
 'The limitation of the method is severe and should be stated in the report rather than '
 'discovered by a reader. An announced exercise with reference material available and no '
 'client waiting is a best case, and the circumstance that matters is the unannounced morning '
 'with a deadline. Making the exercise realistic requires either deceiving colleagues or '
 'risking real work, and an organisation that resolves this by inserting unmarked cases into '
 'the real flow will find that the first disclosure converts every future drill into a test.',
 'The practical position is therefore to run announced drills, report them explicitly as best '
 'cases in those words, measure the same tasks each time so that the direction of travel is '
 'visible even if the absolute level is flattering, and treat the second and third kinds of '
 'finding as the main product. A drill that merely confirms people are slower has been run '
 'badly; a drill that tells you what the system has been deciding silently has paid for '
 'itself.'],
dp1=('Skill retention and recurrent practice',
     'Research in aviation and clinical training generally finds measurable decline in '
     'infrequently practised procedures within months, with announced assessments producing '
     'systematically better results than unannounced ones.',
     'Source: general human-factors and training literature, 2026.'),
e_a=[('Why are ordinary measures silent about skill loss?', 'because output quality stays high while the system remains available'),
     ('What are the three kinds of finding?', 'the expected decline, a collapse in an unlisted area, and a respect in which people are better'),
     ('Why is the second kind common?', 'because the system has handled a convention silently and correctly for years'),
     ('Why are people sometimes better?', 'because they stop on inconsistent input, and the system does not'),
     ('What is the honest way to report an announced drill?', 'explicitly as a best case, in those words')],
e_b=[('Skill retention can be established by reasoning about it.', 'F'),
     ('The expected decline is usually larger than pessimists feared.', 'F'),
     ('Collapsed areas are usually ones already on the risk list.', 'F'),
     ('A system records that it had to choose on inconsistent input.', 'F'),
     ('Unmarked cases in the real flow are a safe method.', 'F'),
     ('A drill that only shows people are slower has been run badly.', 'T')],

w_model=(
 'Purpose: establish whether the checking team can produce a mapping sheet without the '
 'drafting system, and record what the exercise cannot establish. Scope: the format survey '
 'only; the exception review is out of scope. Inputs: 12 document sets with known correct '
 'sheets, the 11-case library on paper, and the system’s error rates for the same 12 sets. '
 'Criteria: 7 participants, 12 sets, 1 working day; record time per sheet, usable or not, and '
 'every field in which an error occurs; compare each measure with the system’s result on the '
 'same sets using 1 stated degree expression; report every respect in which a participant '
 'did something the system does not do. Done: 1 results table of 5 measures, 1 list of fields '
 'with errors, and 1 paragraph headed what this does not establish. Fallback: where a '
 'participant abandons a set, record it as abandoned with the elapsed time rather than '
 'excluding it from the mean.'),
w_fig=figs.spec_card('THE DRILL BRIEF',
                     [('Purpose', 'establish whether the team can work without the system'),
                      ('Scope', 'the format survey only; exception review excluded'),
                      ('Inputs', '12 sets with known answers, the library on paper, system rates'),
                      ('Criteria', '7 people, 1 day; time, usability, every field in error'),
                      ('Done', '5-measure table, field list, "what this does not establish"'),
                      ('Fallback', 'abandoned set: record with elapsed time, do not exclude')]),
w_fig_cap='The last criterion is the one that makes the result quotable without being misleading.',
w_task='Write a drill specification for a skill your own team may have lost.',
w_steps=['Name the task and the standard it will be measured against.',
         'Fix the number of participants, cases and the time allowed.',
         'Require every field or step in which an error occurs to be recorded.',
         'Require a degree expression for each comparison, matched to the evidence.',
         'Require a paragraph stating what the exercise does not establish.'],
w_bank=['Establish whether … can … without … , and record what …',
        'Cover … only; … is out of scope.',
        'Work from … sets with known … , … , and …',
        'Record … per case, … , and every … in which an error occurs; compare each measure with … using 1 stated degree expression.',
        'Where a participant abandons a case, … rather than excluding it from …'],
w_check=['Is the comparison standard named and available?',
         'Must every field in error be recorded, not just the count?',
         'Is a degree expression required for each comparison?',
         'Is there a required statement of what the drill does not establish?'],

t_title='Skill loss in your own team',
t_fig=figs.split('WHAT A DRILL FINDS',
                 'What you went looking for',
                 ['they are slower than the system',
                  'the error rate is higher',
                  'some cases are abandoned',
                  'the gap is roughly as expected'],
                 'What you did not expect',
                 ['a collapse in an unlisted field',
                  'a convention written down nowhere',
                  'two people stopped and asked',
                  'the system never stops']),
t_fig_cap='The right-hand column is the reason to run the exercise at all.',
t_body=[
 'Arrange for the skill to be needed, because no amount of reasoning will tell you whether it '
 'is still there and your quality measures cannot see the question. Switch the system off for '
 'a day, hand out a known set of work with known answers, and record time, usability and '
 'every single field in which an error occurs. The whole exercise costs one day and most '
 'organisations have never run one.',
 'Then report it with degree words that match your evidence. Nowhere near the standard, '
 'considerably better than feared, marginally better in one measure, by far the worst result '
 'in a field nobody listed: each of those is a claim about size and each should be '
 'defensible from the table. A report that says performance was disappointing has thrown away '
 'the only thing the day produced.',
 'Above all, treat the unexpected findings as the product. A collapse in an area nobody '
 'worried about usually means the system has been handling a convention silently and nobody '
 'now knows it is a question; a respect in which people beat the system usually means they '
 'stop where it proceeds. And write the paragraph headed what this does not establish, '
 'because an announced drill with reference material and no deadline is a best case, and a '
 'figure quoted without that caveat will be quoted for years.'],
t_say=[('Arrange the need: ', 'One day, system off, twelve known sets.'),
       ('Match the degree: ', 'Nowhere near on time; marginally better on stopping.'),
       ('State the limit: ', 'This was announced three weeks ahead. It is a best case.')],
t_bound=('A drill establishes what these people did on this day under these conditions. It '
         'cannot establish what they would do unannounced with a client waiting, which is '
         'the circumstance of interest; realistic measurement requires deceiving colleagues '
         'or risking real work, and both costs are higher than the figure is worth.'),
t_a=[('One day, system off, twelve known ____________.', 'sets'),
     ('Nowhere near on time; ____________ better on stopping.', 'marginally'),
     ('This was announced three weeks ahead. It is a ____________ case.', 'best'),
     ('Your quality measures cannot see the ____________.', 'question'),
     ('Each of those is a claim about ____________.', 'size'),
     ('Treat the ____________ findings as the product.', 'unexpected')],
t_b_rubric='Rewrite each vague report sentence with a degree expression and a figure.',
t_b=[('Performance was disappointing.', 'the error rate was four times the system’s, which is considerably worse'),
     ('They were much slower.', 'two hours eleven against three minutes, which is nowhere near comparable'),
     ('One area was particularly weak.', 'by far the worst was totals against components, in six of twelve sheets'),
     ('In some ways they did better.', 'in one measure they were marginally better: two of two stopped on inconsistent input')],

case=dict(
 title='Decision Clinic · The convention nobody had decided',
 brief=[
  'The drill found that six of twelve hand-produced sheets confused a total with a component. '
  'The drafting system has applied a consistent convention to this for three years and has '
  'never been wrong. The convention appears in no document and was written by a developer who '
  'left two years ago.',
  'Jonas proposes documenting the convention, which takes a day. Priya proposes documenting '
  'it and also asking three clients whether it is the convention they would expect, which '
  'takes three weeks and raises a question with clients who have never raised it.',
  'Victor points out that if the convention turns out to be wrong for a client, the system has '
  'been producing wrong sheets for that client for three years, and that the firm would then '
  'have to decide what to do about three years of work.'],
 exhibit=figs.datatable('THE CONVENTION, AS IT STANDS',
                        ['', 'Position', 'Note'],
                        [['documented anywhere', 'no', '—'],
                         ['applied consistently', 'yes, 3 years', 'never flagged'],
                         ['author still at the firm', 'no', 'left 2 years ago'],
                         ['clients ever asked', 'no', '—'],
                         ['sheets produced under it', '~1,240', 'across 230 clients'],
                         ['hand-produced sheets getting it wrong', '6 of 12', '—']]),
 exhibit_cap='Twelve hundred sheets rest on a convention nobody chose and nobody has checked.',
 exhibit_note='No client has ever queried a total, which is consistent with the convention '
              'being right and also with nobody checking.',
 voices=[('Jonas Riedel', 'systems and workflows',
          'Document it and move on. It has been right for three years across twelve hundred '
          'sheets and two hundred and thirty clients. Asking three clients whether they agree '
          'with something that has never caused a problem invites a problem.'),
         ('Priya Menon', 'client, consultant',
          'It has not been right for three years. It has been unquestioned for three years, '
          'which is a different claim. Nobody checks totals against components downstream, so '
          'a wrong convention would produce exactly the silence we have.'),
         ('Victor Sandoval', 'operations and quality',
          'I want to name the thing both of you are circling. If we ask and the answer is bad, '
          'we own three years of defective sheets for that client. If we do not ask, we own '
          'them anyway and find out later from somebody else.')],
 steps=[('Find it', 'What is known about the convention?'),
        ('Compare it', 'What distinguishes "right" from "unquestioned"?'),
        ('Infer it', 'Why would a wrong convention produce silence?'),
        ('Weigh it', 'Raising a question nobody has asked against owning the answer later.'),
        ('Decide', 'Is the convention documented, checked, or both?')],
 analysis=[('Find it. How many sheets rest on the convention?', 'about twelve hundred, across two hundred and thirty clients'),
           ('Compare it. What is Priya’s distinction?', 'between a convention being right and being unquestioned'),
           ('Infer it. Why would error produce silence?', 'because nobody checks totals against components downstream'),
           ('Weigh it. What does Victor say about asking?', 'that the exposure exists whether or not the firm asks'),
           ('Decide. What would you do?', 'answers vary; the asymmetry is that asking converts an unknown exposure into a known one')],
 decision='Write what Arclight does about the convention.',
 decision_steps=['Say whether it is documented, and by when.',
                 'Say whether clients are asked, how many, and which.',
                 'Say what happens if a client says the convention is wrong.',
                 'Say what is done about sheets already produced.'],
 bank=['The convention is documented by …',
       '… clients are asked, chosen because …',
       'If a client says it is wrong, we …',
       'Sheets already produced …',
       'This is reviewed after …'],
 outcome='Arclight documented the convention and asked five clients, chosen for the variety of '
         'their document formats rather than their size. Four confirmed it. The fifth said it '
         'was the opposite of their internal practice and had been producing sheets they '
         'quietly corrected on receipt, which they had assumed was normal. Arclight reworked '
         'that client’s eleven months of sheets at its own cost. Jonas, who argued against '
         'asking, notes that the firm found an error that had been invisible to both parties '
         'and that his position would have left it invisible; he also notes that the client '
         'had been correcting it without complaint and that nobody can say whether the rework '
         'bought anything at all.',
 outcome_q=[('What did the fifth client reveal?', 'that the convention was the opposite of their practice and they had been correcting it on receipt'),
            ('What does Jonas say is still unresolved?', 'whether the rework bought anything, since the client had been correcting it without complaint')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Run a manual exercise',
 task=['This is the brief Victor wrote for the first attempt at a drill, abandoned on the day '
       'because the results could not be compared with anything.',
       'It arranged an activity rather than a measurement.'],
 draft=['Get the team to do some surveys by hand and see how they get on.',
        'Use a reasonable number of document sets.',
        'Turn the system off for the morning.',
        'Note anything that goes wrong.',
        'Let people use whatever reference material they need.',
        'Give me a sense of where we stand.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions producing an activity that cannot be compared with anything.',
 asked=['Known sets with known correct answers',
        'Every field in error recorded',
        'A statement of what it does not establish'],
 back=['Sets chosen on the day, answers unknown',
       '"Several errors, mostly minor"',
       'A figure quoted for a year'],
 gap='"See how they get on" defines no measurement, "a reasonable number" fixes no count, '
     '"note anything that goes wrong" produces adjectives rather than fields, and "whatever '
     'reference material they need" makes the conditions unrecorded and therefore the result '
     'unrepeatable.',
 back_cap='An activity, a sentence of adjectives, and a number that was quoted for a year.',
 back_note='Because the sets had no known correct answers, errors were counted only where '
           'somebody noticed them, which is the same failure the drill exists to expose.',
 diagnosis=[('[1] "see how they get on" — measured against what?', 'undefined done'),
            ('[2] "a reasonable number of sets" — how many, chosen how?', 'hidden assumption'),
            ('[3] "turn the system off for the morning" — and the sets that take longer?', 'missing condition'),
            ('[4] "note anything that goes wrong" — recorded at what granularity?', 'undefined done'),
            ('[5] "whatever reference material they need" — recorded, or not?', 'hidden assumption'),
            ('[6] "a sense of where we stand" — reported how, with what caveat?', 'missing condition')],
 rewrite='Rewrite the brief so that the sets have known answers, errors are recorded by field, '
         'and the conditions and limits are stated.',
 scaffold=['What must be established and what must be recorded as not established',
           'Which task is covered and what is out of scope',
           'The sets, reference material and comparison figures to be used',
           'The participants, the cases, the time, and what is recorded per case',
           'What comes back, in how many parts, and with what required paragraph',
           'What to do when a participant abandons a case'],
 bank=['Establish whether … can … without … , and record what the exercise cannot establish.',
       'Cover … only; … is out of scope.',
       'Work from … sets with known correct … , … on paper, and …',
       '… participants, … sets, … working day; record … , … , and every field in which … ; compare each measure with … using 1 stated degree expression.',
       'Return 1 results table of … measures, 1 list of … , and 1 paragraph headed …',
       'Where a participant abandons a set, … rather than excluding it from the mean.'],
 check=['Do the sets have known correct answers?',
        'Are errors recorded by field rather than counted?',
        'Are the conditions recorded so the result is repeatable?',
        'Is the "what this does not establish" paragraph required?'],
 model=['Establish whether the checking team can produce a mapping sheet without the drafting system, and record what the exercise cannot establish',
        'The format survey only; the exception review is out of scope',
        '12 document sets with known correct sheets, the 11-case library on paper, and the system’s error rates for the same 12 sets',
        '7 participants, 12 sets, 1 working day; record time per sheet, usable or not, and every field in which an error occurs; compare each measure with the system’s result on the same sets using 1 stated degree expression; report every respect in which a participant did something the system does not do',
        '1 results table of 5 measures, 1 list of fields with errors, and 1 paragraph headed what this does not establish, by 18 July',
        'Where a participant abandons a set, record it as abandoned with the elapsed time rather than excluding it from the mean'],
 cost='1 abandoned morning, 7 people for half a day, and a sentence of adjectives that was '
      'quoted as evidence of readiness for the following 11 months.'),

rev_fig=figs.split('DEGREE AND INTENSITY',
                   'Wrong',
                   ['It was by far worse than feared.',
                    'Nowhere near as the system.',
                    'They were marginal better.',
                    'The result was considerable better.'],
                   'Right',
                   ['It was by far the worst of the twelve.',
                    'Nowhere near as accurate as the system.',
                    'They were marginally better.',
                    'The result was considerably better.']),
rev_fig_cap='Four claims about size, each of which must be defensible from a table.',
rev=dict(
 read=[('Why are ordinary measures silent on skill loss?', ['nobody reports them', 'output stays good while the system is available', 'they are secret', 'they lag'], 1),
       ('The second kind of finding is usually', ['the expected decline', 'a collapse in an unlisted area', 'a cost saving', 'a complaint'], 1),
       ('People are sometimes better than the system because', ['they are faster', 'they stop', 'they guess', 'they skip steps'], 1),
       ('In the Clinic, what did the fifth client reveal?', ['nothing', 'the convention was the opposite of their practice', 'a pricing error', 'a late delivery'], 1)],
 listen_text='Arrange for the skill to be needed, because no amount of reasoning will tell you '
             'whether it is still there. Switch the system off for a day, hand out a known set '
             'of work with known answers, and record every field in which an error occurs. '
             'Then report it with degree words that match your evidence, and write the '
             'paragraph headed what this does not establish.',
 listen=[('Arrange for the skill to be ____________.', 'needed'),
         ('A known set of work with known ____________.', 'answers'),
         ('Degree words that match your ____________.', 'evidence'),
         ('The paragraph headed what this does not ____________.', 'establish')],
 speak=['Name a skill your team would need if a system stopped, and when it was last used.',
        'Say how you would measure it in one day, and what that would not establish.'],
 write='Write three comparisons using by far, nowhere near and marginally, each with a figure.',
 vocab=[('The wasting away of a capability through lack of use is ____________.', 'atrophy'),
        ('The state of a skill being recent enough to rely on is ____________.', 'skill currency'),
        ('The organisational loss of an ability nobody decided to give up is ____________.', 'capability decay'),
        ('A rehearsal performed to keep a procedure ready is a ____________.', 'drill'),
        ('A grid recording who can do what is a ____________.', 'skills matrix')],
 gram=[('____________ far the worst result was in the totals field.', 'By'),
       ('They were nowhere near ____________ accurate as the system.', 'as'),
       ('In one measure they were ____________ (marginal) better.', 'marginally'),
       ('The headline result was ____________ (considerable) better than feared.', 'considerably'),
       ('The error rate was ____________ (significant) higher, at four times.', 'significantly')]),

found=['Name the skill your team would need if its main system stopped tomorrow.',
       'Find out when anybody last performed it unaided.',
       'Design a one-day drill with known answers and a field-level record.',
       'Write the paragraph stating what your drill would not establish.'],
end_line='It has not been right for three years. It has been unquestioned for three years.',
end_next='Next: Claimed, Acknowledged, Conceded',
)
