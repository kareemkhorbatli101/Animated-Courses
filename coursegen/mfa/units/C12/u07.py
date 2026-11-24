# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='A Service That No Longer Drafts',
gram='the third and mixed conditionals in a post-mortem',
ai='skill loss in a service that no longer drafts',
strap='CEFR C1 · Grammar: third and mixed conditionals · AI: a service that no longer drafts',
cando=['argue in a post-mortem with third and mixed conditionals',
       'distinguish what would have happened from what would now be the case',
       'say which skills decay when a task is assisted and which do not',
       'design a practice requirement that is not a ritual',
       'write a tasking that preserves the exercise and not only the output'],
hero=('NOBODY UNDER THIRTY-FIVE HAS WRITTEN ONE COLD',
      ['Eleven of fourteen desk officers have never drafted a note verbale unaided.',
       'All fourteen can correct one in four minutes, and do it well.'],
      [(730, 'orange', 'long'), (1390, 'purple', 'short'),
       (2050, 'teal', 'long'), (2690, 'blue', 'short')]),
hero_cap='The Diplomatic Institute, after the first unassisted exercise in four years.',

warm=['What can you do now that you could not do five years ago?',
      'What could you do five years ago that you could not do today?',
      'Which of your skills would you notice losing, and which would you not?'],
read=[
 'In November the Institute set an exercise it had not set since 2022: fourteen desk officers '
 'were asked to draft a note verbale from a file, unaided, in an hour.',
 'The results were not what Maya Sarkis had expected. Eleven of the fourteen had never done '
 'it. Of those eleven, seven produced a note that would have been sent with corrections, three '
 'produced something the Ministry would not have sent, and one produced nothing in the hour.',
 'The same fourteen officers, given a drafted note with four defects in it, found between three '
 'and four of the defects in an average of four minutes. On that test they performed better '
 'than the 2019 cohort, whose average was two and a half defects in eleven minutes.',
 'Maya’s report drew the distinction carefully. The skill of correction has improved, because '
 'officers now do it twenty times a week. The skill of composition has gone, because nobody '
 'composes. These are different skills and the Ministry had been treating the second as a '
 'proxy for the first.',
 'Her recommendation was modest and was accepted: four unassisted drafting exercises a year for '
 'every officer in their first six years, marked and discussed. She says she had wanted twelve '
 'and asked for four, and that if she had asked for twelve she would have got none, which is '
 'a judgement about committees rather than about training.'],
c_a=[('What exercise did the Institute set?', 'drafting a note verbale from a file, unaided, in an hour'),
     ('How many of the fourteen had never done it?', 'eleven'),
     ('What were the results among those eleven?', 'seven sendable with corrections, three unsendable, one produced nothing'),
     ('How did the fourteen perform on correction?', 'they found three to four defects of four in about four minutes'),
     ('How does that compare with 2019?', 'better: the 2019 cohort found two and a half in eleven minutes'),
     ('What was the recommendation?', 'four unassisted drafting exercises a year for officers in their first six years')],
c_b=[('The exercise had been set every year.', 'F'),
     ('All fourteen officers had drafted a note before.', 'F'),
     ('The officers are worse at correction than the 2019 cohort.', 'F'),
     ('Composition and correction are the same skill.', 'F'),
     ('Maya asked for twelve exercises.', 'F'),
     ('The recommendation was accepted.', 'T')],
c_c=[('Asked to draft a note verbale from a file, ____________.', 'unaided'),
     ('Seven produced a note that would have been sent with ____________.', 'corrections'),
     ('Officers now do it twenty times a ____________.', 'week'),
     ('The skill of ____________ has gone, because nobody composes.', 'composition'),
     ('Treating the second as a ____________ for the first.', 'proxy'),
     ('A judgement about ____________ rather than about training.', 'committees')],
c_d=[('Correction has ( decayed / improved ).', ['decayed', 'improved'], 1),
     ('How many produced nothing?', ['none', 'one', 'three', 'seven'], 1),
     ('How many defects were in the drafted note?', ['two', 'four', 'eleven', 'fourteen'], 1),
     ('What did the 2019 cohort average?', ['four defects', 'two and a half defects', 'three defects', 'none'], 1),
     ('How many exercises a year were accepted?', ['twelve', 'four', 'one', 'none'], 1)],
c_e=('Match each conditional to what it claims.',
     [('If we had kept the exercise, they would have drafted better.', 'a past cause, a past result'),
      ('If we had kept the exercise, they would be able to draft now.', 'a past cause, a present result'),
      ('If they could draft, we would not need the exercise.', 'a present condition, a present result'),
      ('Had she asked for twelve, she would have got none.', 'a past cause, a past result'),
      ('If the skill mattered less, this would not be a problem.', 'a hypothetical present'),
      ('If nobody had noticed, we would still be assuming it.', 'a past cause, a present result')],
     ['a past cause, a past result', 'a past cause, a present result',
      'a present condition, a present result', 'a hypothetical present']),

v_fig_title='SKILL',
v_fig=[('people', 'an apprenticeship'), ('doc', 'a first draft written cold'), ('clock', 'a practice opportunity'),
       ('chart', 'a proficiency test'), ('bulb', 'a skill fade'), ('key', 'a deliberate practice')],
v_fig_cap='Six words for what a service keeps by using it.',
vocab=[
 ('a skill', 'an ability acquired by practice and lost without it'),
 ('a skill fade', 'the gradual loss of an ability that is not exercised'),
 ('a drafting hand', 'the acquired facility of composing a document from nothing'),
 ('an apprenticeship', 'learning by doing the work beside somebody who can'),
 ('a practice opportunity', 'an occasion on which a skill is actually exercised'),
 ('a repetition', 'one performance of a task, counted towards fluency'),
 ('a feedback loop', 'the return of information about how a performance went'),
 ('a correction by a senior', 'the marking of a junior’s work by somebody experienced'),
 ('a first draft written cold', 'a draft composed without assistance or a model'),
 ('an unassisted exercise', 'a training task performed without help of any kind'),
 ('a proficiency test', 'a test of whether a skill is present at a stated level'),
 ('a cohort', 'the group of officers who entered together'),
 ('an entry course', 'the training given on joining a service'),
 ('a mid-career course', 'training given to officers with some years of service'),
 ('a maintenance of skill', 'the deliberate exercise of an ability to keep it'),
 ('a deliberate practice', 'practice aimed at a weakness rather than at output'),
 ('an overreliance', 'dependence beyond what the circumstances justify'),
 ('a residual capability', 'what remains of an ability after long disuse'),
 ('a deskilling', 'the loss of an ability across a body of people'),
 ('a reskilling', 'the deliberate rebuilding of a lost ability')],
v_a=[('The gradual loss of an ability that is not exercised is a ____________.', 'skill fade'),
     ('A draft composed without assistance or a model is a ____________.', 'first draft written cold'),
     ('Practice aimed at a weakness rather than at output is a ____________.', 'deliberate practice'),
     ('What remains of an ability after long disuse is a ____________.', 'residual capability'),
     ('The loss of an ability across a body of people is a ____________.', 'deskilling'),
     ('Learning by doing the work beside somebody who can is an ____________.', 'apprenticeship'),
     ('Dependence beyond what the circumstances justify is an ____________.', 'overreliance'),
     ('The deliberate exercise of an ability to keep it is a ____________.', 'maintenance of skill')],
v_b=[('A skill is an ability acquired by practice', 'and lost without it.'),
     ('A feedback loop is the return of information', 'about how a performance went.'),
     ('A proficiency test is a test of whether a skill', 'is present at a stated level.'),
     ('A cohort is the group of officers', 'who entered together.'),
     ('A reskilling is the deliberate rebuilding', 'of a lost ability.')],

g_title='Grammar: the third and mixed conditionals in a post-mortem',
g_rule=['The third conditional joins a past condition to a past result: if we had kept the '
        'exercise, they would have drafted better.',
        'A mixed conditional joins a past condition to a present result: if we had kept it, '
        'they would be able to draft now.',
        'The second conditional states a hypothetical present: if the skill mattered less, '
        'this would not be a problem.',
        'In a post-mortem, choose the form by what you are claiming, because the forms make '
        'different claims about the present.'],
g_fig=('LOOSE',
       ['If we kept the exercise they would draft better.',
        'If we had kept it they would have been able to draft now.',
        'If they would have practised, they could do it.',
        'If the exercise was kept, this would not happen.'],
       'PRECISE',
       ['If we had kept the exercise, the 11 would have drafted competently.',
        'If we had kept the exercise, the 11 would be able to draft today.',
        'If they had practised 4 times a year, they would have 16 repetitions each.',
        'If composition mattered less than correction, the loss would not matter.'],
       'four mixed-up forms claiming nothing in particular',
       'two third conditionals, one about repetitions and one hypothetical present'),
g_fig_cap='The third conditional argues about a lost past; the mixed conditional argues about '
          'a present you can still change.',
g_a=[('If we had kept the exercise, the 11 ____________ have drafted competently.', 'would'),
     ('If we had kept the exercise, the 11 would ____________ able to draft today.', 'be'),
     ('If they ____________ practised 4 times a year, they would have 16 repetitions.', 'had'),
     ('If composition ____________ less than correction, the loss would not matter.', 'mattered'),
     ('Had she asked for twelve, she ____________ have got none.', 'would'),
     ('If nobody had noticed, we would ____________ be assuming it.', 'still'),
     ('If the Institute ____________ (set) the exercise in 2023, we would know more.', 'had set'),
     ('They would not be able to draft today even if we ____________ (keep) it.', 'had kept'),
     ('If correction were the same skill, the figures ____________ not diverge.', 'would')],
g_b=[('A mixed conditional joins a past condition to a ( present / past ) result.', ['present', 'past'], 0),
     ('If we had kept it, they ____ able to draft today.', ['would have been', 'would be', 'will be', 'had been'], 1),
     ('Which states a hypothetical present?', ['the third conditional', 'the second conditional', 'the mixed conditional', 'the first conditional'], 1),
     ('Which is malformed?', ['If we had kept it, they would have drafted.', 'If they would have practised, they could do it.', 'If we had kept it, they would be able now.', 'If it mattered less, this would not matter.'], 1),
     ('In a post-mortem the form is chosen by', ['register', 'what you are claiming', 'length', 'tense agreement'], 1),
     ('Had she asked for twelve, she ____ none.', ['would get', 'would have got', 'will get', 'had got'], 1)],

d1=dict(title='Better at one, lost the other',
        fig=(['Eleven have never drafted one.', 'And all fourteen correct better than 2019.'],
             ['Then what has been lost?', 'Composition. Nothing else.']),
        cap='Maya Sarkis and Karim Dalati, in November.',
        lines=[('Karim', 'Eleven of fourteen have never drafted a note verbale unaided. That is '
                         'the headline everybody will take.'),
               ('Maya', 'It is half the result and the wrong half to take alone. The same '
                        'fourteen found three to four defects in a drafted note in four '
                        'minutes. The 2019 cohort found two and a half in eleven.'),
               ('Karim', 'So they are better than their predecessors.'),
               ('Maya', 'At correction they are substantially better, and the reason is '
                        'obvious: they correct twenty drafts a week and the 2019 cohort '
                        'corrected two. Twenty repetitions a week will make anybody better at '
                        'anything.'),
               ('Karim', 'And composition?'),
               ('Maya', 'Has gone, in eleven of fourteen, because nobody composes. Not degraded '
                        '— absent. One of them produced nothing at all in the hour, which I had '
                        'not thought possible in an officer of four years’ service.'),
               ('Karim', 'Does composition matter if correction is better?'),
               ('Maya', 'That is the question the Ministry has been answering by assumption for '
                        'four years. My view is that it matters in two circumstances: when '
                        'there is nothing to correct, and when the thing to be corrected is '
                        'subtly wrong in a way that only somebody who has built one from '
                        'nothing recognises.'),
               ('Karim', 'The second is the one I would want evidence for.'),
               ('Maya', 'So would I, and I have none. What I have is seven of eleven drafts that '
                        'would have gone out with corrections, which tells you the skill is '
                        'recoverable, and three that would not, which tells you it is not '
                        'automatic.')],
        a=[('What is the headline everybody will take?', 'that eleven of fourteen have never drafted unaided'),
           ('What is the other half of the result?', 'that the fourteen correct better than the 2019 cohort'),
           ('Why are they better at correction?', 'because they correct twenty drafts a week against two'),
           ('What has happened to composition?', 'it is absent, not degraded, in eleven of fourteen'),
           ('In which two circumstances does Maya say composition matters?', 'when there is nothing to correct, and when a draft is subtly wrong')],
        b=[('Twenty ____________ a week will make anybody better.', 'repetitions'),
           ('Not degraded — ____________.', 'absent'),
           ('Answering by ____________ for four years.', 'assumption'),
           ('Which tells you the skill is ____________.', 'recoverable')]),
d2=dict(title='Four, not twelve',
        fig=(['She asked for four.', 'She wanted twelve.'],
             ['Why not ask?', 'Because twelve gets none.']),
        cap='Maya and Dr Hana Mourad.',
        lines=[('Hana', 'You recommended four unassisted exercises a year. What would be '
                        'enough?'),
               ('Maya', 'Twelve. One a month, marked, discussed, and taken seriously enough to '
                        'appear in an appraisal.'),
               ('Hana', 'Then why did you ask for four?'),
               ('Maya', 'Because if I had asked for twelve I would have got none. Twelve a year '
                        'for every officer in their first six years is forty-eight hours of '
                        'officer time and a training officer’s whole post, and the proposal '
                        'would have gone to a committee that would have asked for evidence of '
                        'benefit, which I do not have.'),
               ('Hana', 'Four will not maintain the skill.'),
               ('Maya', 'Four will not maintain it. Four will tell us, within two years, how '
                        'fast it decays and whether it recovers, which is the evidence I would '
                        'need to ask for twelve.'),
               ('Hana', 'So the recommendation is an instrument rather than a remedy.'),
               ('Maya', 'It is a measurement dressed as a remedy, and I am uncomfortable '
                        'presenting it as the latter. If I describe it as a measurement, nobody '
                        'approves it; if I describe it as a remedy, I have overstated what four '
                        'exercises can do.'),
               ('Hana', 'What did you write?'),
               ('Maya', 'I wrote that four exercises a year will maintain a minimum familiarity '
                        'and will allow the rate of decay to be measured. Both halves are true '
                        'and the first half is what will be read.'),
               ('Hana', 'I would rather the second half were in the first sentence.'),
               ('Maya', 'So would I, and I did not do it, and I am not sure I was wrong.')],
        a=[('What would be enough, in Maya’s view?', 'twelve exercises a year, marked and appearing in an appraisal'),
           ('Why did she ask for four?', 'because asking for twelve would have produced none'),
           ('What will four achieve?', 'they will show how fast the skill decays and whether it recovers'),
           ('What does she call the recommendation?', 'a measurement dressed as a remedy'),
           ('How is it left?', 'unresolved; she is not sure she was wrong to lead with the first half')],
        b=[('Forty-eight hours of ____________ time.', 'officer'),
           ('Evidence of ____________, which I do not have.', 'benefit'),
           ('A ____________ dressed as a remedy.', 'measurement'),
           ('The first half is what will be ____________.', 'read')]),

speak=[('Post-mortem conditionals',
        ['Student A: describe something that stopped being practised in your work.',
         'Student B: state one third conditional and one mixed conditional about it.',
         'Say which one describes a present you can still change.']),
       ('Two skills',
        ['Name a task in your work that is now assisted.',
         'Say which skill in it has improved and which has decayed.',
         'Say how you would test each.']),
       ('Ask for four',
        ['Propose a training requirement for your office.',
         'Say what you actually want and what you would ask for.',
         'Your partner asks what the difference costs.'])],

ext_title='Correction improves with repetition and composition disappears without it, and they are not the same skill',
ext_fig=figs.datatable('FOURTEEN OFFICERS, TWO TESTS',
                       ['', '2019 cohort', 'This cohort'],
                       [['drafted a note unaided before', 'all', '3 of 14'],
                        ['produced a sendable draft unaided', 'not tested', '7 of 11'],
                        ['produced nothing in the hour', 'not tested', '1 of 11'],
                        ['defects found of 4', '2.5', '3 to 4'],
                        ['minutes taken to find them', '11', '4'],
                        ['drafts corrected weekly', '2', '20']]),
ext_fig_cap='The lower three rows explain the upper three, in both directions.',
ext=[
 'A service that has used assisted drafting for four years will find, if it troubles to test, '
 'that its officers have become markedly better at one thing and have lost another entirely, '
 'and that nobody noticed either change because the output of the section improved throughout.',
 'What improves is correction, and it improves for an ordinary reason: an officer who corrects '
 'twenty drafts a week performs a task twenty times a week that their predecessor performed '
 'twice. On a test of finding defects in a drafted document, a current cohort outperforms a '
 'cohort from before assistance by a wide margin and in a third of the time. This is a real '
 'gain and it is rarely mentioned, because the discussion of skill loss is conducted entirely '
 'in the language of loss.',
 'What disappears is composition, and the word to use is disappears rather than decays. An '
 'officer who has never built a document from a file and a blank page has not lost a skill; '
 'they have never had it. In a tested cohort of fourteen, eleven had never done it, and of '
 'those eleven one produced nothing at all within the hour allowed.',
 'Whether that matters is the question a ministry usually answers by assumption, and the '
 'honest answer has two defensible parts and one that is not yet evidenced. Composition '
 'matters when there is nothing to correct, which happens on the day the system is '
 'unavailable. It matters when a draft is subtly wrong in a way that is recognised only by '
 'somebody who has built one. The first is demonstrable. The second is widely believed, '
 'including by the present author, and has not been shown.',
 'A practice requirement is the available remedy and it has a characteristic political problem. '
 'The quantity that would maintain the skill is large enough to require evidence of benefit, '
 'and the evidence does not exist because nobody has been practising. A smaller quantity will '
 'not maintain the skill and will measure how fast it decays, which is the evidence required '
 'to ask for the larger one. A trainer who presents the smaller quantity as a remedy has '
 'overstated it; one who presents it as a measurement will not have it approved. That is a '
 'real dilemma and the usual resolution is to write both halves and let the first be read.'],
dp1=('Skill maintenance',
     'Diplomatic academies in several foreign services reintroduced unassisted drafting '
     'exercises in 2025 after testing showed strong improvement in editing and the absence of '
     'composition experience in recent cohorts.',
     'Source: reported practice in diplomatic training, 2025–2026.'),
e_a=[('What two changes does a tested service find?', 'markedly better correction and lost composition'),
     ('Why does correction improve?', 'because an officer corrects twenty drafts a week against two'),
     ('Why is "disappears" the right word?', 'because an officer who never composed has not lost a skill but never had it'),
     ('Which part of the case for composition is demonstrable?', 'that it matters when there is nothing to correct'),
     ('What is the dilemma of a practice requirement?', 'the quantity that would work needs evidence that only practice could produce')],
e_b=[('Output of the section declined over the four years.', 'F'),
     ('Correction improved by a wide margin.', 'T'),
     ('Composition decayed gradually in the cohort tested.', 'F'),
     ('The subtlety argument has been demonstrated.', 'F'),
     ('A small requirement maintains the skill.', 'F'),
     ('A small requirement can measure the rate of decay.', 'T')],

w_model=(
 'Purpose: establish whether officers can compose the documents they correct, so that the '
 'Ministry knows what it has. Scope: officers in their first 6 years of service; officers with '
 'more than 6 years are out of scope in the first round. Inputs: a real file from the archive '
 'with its outcome removed, and 1 hour. Criteria: give no model, no previous example and no '
 'assistance of any kind; mark each draft as sendable, sendable with corrections, or not '
 'sendable, and state why; record the time at which each officer stopped; set the same '
 'exercise 4 times a year and use a different file each time. Done: 1 marked draft per officer '
 'per exercise, with a cohort summary after each round, and a decay figure after 2 years. '
 'Fallback: where an officer produces nothing within the hour, record that and set no further '
 'exercise until they have been given 1 supervised draft.'),
w_fig=figs.spec_card('THE TASKING FOR AN UNASSISTED EXERCISE',
                     [('Purpose', 'whether officers can compose what they correct'),
                      ('Scope', 'officers in their first 6 years'),
                      ('Inputs', 'a real archive file with its outcome removed, and 1 hour'),
                      ('Criteria', 'no model, no assistance; marked 3 ways; stopping time recorded'),
                      ('Done', '1 marked draft each, a cohort summary, a decay figure at 2 years'),
                      ('Fallback', 'nothing produced: recorded, and 1 supervised draft first')]),
w_fig_cap='Give no model: a model turns a composition exercise into a correction exercise.',
w_task='Write a practice tasking for a skill your own office no longer exercises.',
w_steps=['Say what the exercise is to establish.',
         'Name who takes it and who does not.',
         'Forbid models and assistance.',
         'Require a three-way marking and a stopping time.',
         'Say what happens where an officer produces nothing.'],
w_bank=['Establish whether … so that … knows …',
        'Cover … ; … are out of scope in …',
        'Work from … and …',
        'Give no … ; mark each … as … and state … ; record … ; set … and use …',
        'Where an officer produces nothing … , record … and set …'],
w_check=['Are models and assistance forbidden?',
         'Is the marking three-way with reasons?',
         'Is the stopping time recorded?',
         'Is a decay figure required after a stated period?'],

t_title='Skill loss in a service that no longer drafts',
t_fig=figs.split('AFTER FOUR YEARS',
                 'Improved',
                 ['finding defects in a draft',
                  'speed of correction',
                  'recognising a missing qualification',
                  'judging a register'],
                 'Absent',
                 ['composing from a file and a blank page',
                  'knowing what to put first',
                  'producing anything in an hour, for some',
                  'the judgement that comes from having built one']),
t_fig_cap='The left column is a real gain and is never mentioned; the right column is what the '
          'headline will say.',
t_body=[
 'Test before describing. A service four years into assisted drafting will find that its '
 'officers correct far better than their predecessors — three to four defects of four in four '
 'minutes, against two and a half in eleven — for the ordinary reason that they now perform '
 'that task twenty times a week instead of twice. Say this first, because the discussion of '
 'skill is conducted entirely in the language of loss and the gain is real.',
 'Then say what is absent, and use that word. Eleven of fourteen officers had never composed a '
 'note from a file and a blank page; they have not lost the skill, they have never had it, and '
 'one of them produced nothing at all within the hour. Whether this matters is usually settled '
 'by assumption, and the honest position has two parts: it certainly matters when there is '
 'nothing to correct, and it probably matters because a draft that is subtly wrong is '
 'recognised by somebody who has built one, which is believed and not shown.',
 'Then face the arithmetic of the remedy. The quantity of practice that would maintain the '
 'skill is large enough to require evidence of benefit, and there is no evidence because '
 'nobody has practised; a smaller quantity will not maintain it and will measure its decay, '
 'which is the evidence needed to ask for more. If I had asked for twelve exercises I would '
 'have got none, and if we had kept the exercise in 2022 we would now know the decay rate and '
 'would not be guessing.'],
t_say=[('Report the gain first: ', '3 to 4 defects of 4, in 4 minutes, against 2.5 in 11.'),
       ('Use the right word: ', 'Composition is absent in 11 of 14, not degraded.'),
       ('Admit the instrument: ', '4 exercises will measure the decay; 12 would maintain the skill.')],
t_bound=('A test establishes what a cohort can do today and cannot establish what the lost '
         'skill is worth, because the value of composition in correcting a subtly wrong draft '
         'is believed and unmeasured. A small practice requirement measures decay and does not '
         'prevent it, and a trainer who calls it a remedy has overstated it in order to have '
         'it approved.'),
t_a=[('3 to 4 defects of 4, in 4 minutes, against 2.5 in ____________.', '11'),
     ('Composition is ____________ in 11 of 14, not degraded.', 'absent'),
     ('4 exercises will ____________ the decay; 12 would maintain the skill.', 'measure'),
     ('They have not lost the skill, they have never ____________ it.', 'had'),
     ('Believed and not ____________.', 'shown'),
     ('Overstated it in order to have it ____________.', 'approved')],
t_b_rubric='Rewrite each with the conditional form that makes the claim intended.',
t_b=[('If we kept the exercise they would draft better.', 'if we had kept the exercise, the eleven would have drafted competently'),
     ('If we had kept it they would have been able to draft now.', 'if we had kept the exercise, the eleven would be able to draft today'),
     ('If they would have practised, they could do it.', 'if they had practised four times a year, they would have sixteen repetitions each'),
     ('If the exercise was kept, this would not happen.', 'if composition mattered less than correction, the loss would not matter')],

case=dict(
 title='The Decision Room · Who takes the exercise',
 brief=[
  'Four unassisted exercises a year have been approved for officers in their first six years. '
  'That is fifty-one officers.',
  'The three officers in the tested cohort who could draft are all over forty, and the officers '
  'who mark the exercises are the same people.',
  'Maya proposes extending the requirement to all officers under fifteen years’ service. Karim '
  'says the markers are the binding constraint. Rana Deeb says her section cannot release '
  'officers for four hours a year without a degraded mode.'],
 exhibit=figs.datatable('THE REQUIREMENT AS APPROVED',
                        ['', 'Figure', 'Note'],
                        [['officers in scope', '51', 'first 6 years'],
                         ['exercises a year each', '4', '1 hour each'],
                         ['officer hours a year', '204', '—'],
                         ['officers able to mark competently', '9', 'all over 40'],
                         ['marking hours a year', '~100', 'at 30 minutes a draft'],
                         ['officers if extended to 15 years', '147', '588 hours']]),
 exhibit_cap='Fifty-one officers, nine markers, and an extension would treble both.',
 exhibit_note='Of the 9 competent markers, 4 retire within 6 years.',
 voices=[('Maya Sarkis', 'the Diplomatic Institute',
          'Extend it. The officers between six and fifteen years are the ones who will be '
          'marking in ten years, and four of my nine markers retire within six.'),
         ('Karim Dalati', 'Information Security and Records',
          'The markers are the constraint and they are the people who can still draft. Extend '
          'the requirement and you consume the marking capacity you are trying to replace.'),
         ('Rana Deeb', 'Consular Affairs',
          'And four hours a year per officer sounds small until you ask which four hours. In '
          'August I cannot release anybody, and the exercise will be done in March by officers '
          'who have been told to get it out of the way.')],
 steps=[('Find it', 'How many competent markers are there, and what happens to them?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does extending the requirement threaten the marking?'),
        ('Weigh it', 'Replacing a capability against consuming the people who have it.'),
        ('Decide', 'Who takes the exercise, and when?')],
 analysis=[('Find it. How many of the nine markers retire within six years?', 'four'),
           ('Compare it. What does Karim identify as the constraint?', 'the markers, who are the people who can still draft'),
           ('Infer it. What is Rana’s practical objection?', 'that four hours a year will be taken in March to get it out of the way'),
           ('Weigh it. How many hours would an extension require?', 'five hundred and eighty-eight officer hours'),
           ('Decide. What would you do?', 'answers vary; marking by the six-to-fifteen group creates markers while extending practice')],
 decision='Write who takes the exercise and who marks it.',
 decision_steps=['Say which officers take the exercise.',
                 'Say who marks, and what marking does for the marker.',
                 'Say when in the year the exercises fall.',
                 'Say what is measured after two years.'],
 bank=['The exercise is taken by …',
       'Marking is done by … , for whom marking counts as …',
       'Exercises fall in …',
       'After 2 years the Institute measures …',
       'This is reviewed …'],
 outcome='The exercise stayed with the fifty-one, and marking was extended to officers between '
         'six and fifteen years, for whom marking a draft counts as one of their own four '
         'exercises. That created thirty-eight additional markers within two years and gave the '
         'middle group the practice Maya had wanted without any additional officer hours. '
         'Exercises fall in the four quietest weeks of each section’s year, nominated by the '
         'section. Karim, who had opposed extension, says the marking device was the answer and '
         'that he had been treating marking as a cost when it is the only form of composition '
         'practice that produces something somebody needs.',
 outcome_q=[('Who marks, and what does it count as?', 'officers between six and fifteen years, for whom marking counts as one of their four exercises'),
            ('What does Karim say he got wrong?', 'treating marking as a cost rather than as composition practice with a use')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Train the drafters',
 task=['This is the training instruction that replaced the unassisted exercise in 2022.',
       'It was followed for four years and produced officers who correct better than any '
       'cohort on record and cannot compose.'],
 draft=['Train officers in drafting using the Ministry’s standard documents.',
        'Have them work on realistic material.',
        'Provide examples and models.',
        'Give feedback on their work.',
        'Cover the main document types.',
        'Report on progress annually.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third one turned every exercise into a correction exercise.',
 asked=['At least one exercise with no model',
        'A three-way marking with reasons',
        'A measurement of what officers can do unaided'],
 back=['Officers trained on models, extensively',
       'Correction skills better than any cohort',
       'No record of what anybody could do unaided'],
 gap='"Realistic material" with a model is a correction task, "provide examples and models" '
     'removes composition entirely, "feedback on their work" does not say against what '
     'standard, and "report on progress" measures the thing being taught rather than the thing '
     'being lost.',
 back_cap='Four years of training that improved the skill in use and never tested the one '
          'going.',
 back_note='Line three is the failure, and it was pedagogically respectable: a model is the '
           'fastest way to teach a format and the surest way to prevent composition.',
 diagnosis=[('[1] "train officers in drafting" — composing or correcting?', 'hidden assumption'),
            ('[2] "realistic material" — with or without a model?', 'hidden assumption'),
            ('[3] "provide examples and models" — how many, and in every exercise?', 'unbounded quantity'),
            ('[4] "give feedback on their work" — against what standard, and recorded how?', 'undefined done'),
            ('[5] "cover the main document types" — how many, and to what depth?', 'unbounded quantity'),
            ('[6] "report on progress annually" — progress in which skill, measured how?', 'undefined done')],
 rewrite='Rewrite the instruction so that composition is exercised and measured without a '
         'model.',
 scaffold=['What the exercise is to establish',
           'Which officers take it and which do not',
           'A real file with its outcome removed, and an hour',
           'No model or assistance, three-way marking with reasons, stopping time, four a year',
           'What is produced per officer and per cohort, and a decay figure',
           'What to do where an officer produces nothing'],
 bank=['Establish whether … so that …',
       'Cover … ; … are out of scope …',
       'Work from … and …',
       'Give no … ; mark each as … and state … ; record … ; set …',
       'Return 1 … per officer per exercise, with … , and … after …',
       'Where an officer produces nothing … , …'],
 check=['Is a model forbidden in at least one exercise?',
        'Is the marking three-way with reasons?',
        'Is the unaided skill measured separately?',
        'Is a decay figure required?'],
 model=['Establish whether officers can compose the documents they correct, so that the Ministry knows what it has',
        'Officers in their first 6 years of service; officers with more than 6 years are out of scope in the first round',
        'A real file from the archive with its outcome removed, and 1 hour',
        'Give no model, no previous example and no assistance of any kind; mark each draft as sendable, sendable with corrections, or not sendable, and state why; record the time at which each officer stopped; set the same exercise 4 times a year and use a different file each time',
        '1 marked draft per officer per exercise, with a cohort summary after each round, and a decay figure after 2 years',
        'Where an officer produces nothing within the hour, record that and set no further exercise until they have been given 1 supervised draft'],
 cost='4 years in which no officer was asked to compose anything and 11 of 14 in a tested '
      'cohort had never done it, 1 of whom produced nothing in an hour.'),

rev_fig=figs.split('CONDITIONALS',
                   'Mixed up',
                   ['If we kept it they would draft better.',
                    'If we had kept it they would have been able now.',
                    'If they would have practised …',
                    'If the exercise was kept …'],
                   'Correct',
                   ['If we had kept it, they would have drafted well.',
                    'If we had kept it, they would be able to draft today.',
                    'If they had practised 4 times a year …',
                    'If composition mattered less …']),
rev_fig_cap='Third: past cause, past result. Mixed: past cause, present result. Second: hypothetical present.',
rev=dict(
 read=[('What has improved in four years?', ['composition', 'correction', 'both', 'neither'], 1),
       ('Composition in the cohort is', ['degraded', 'absent in eleven of fourteen', 'unchanged', 'improved'], 1),
       ('Four exercises a year will', ['maintain the skill', 'measure its decay', 'replace training', 'do nothing'], 1),
       ('In the Decision Room, who marks the exercises now?', ['the nine', 'officers between six and fifteen years', 'nobody', 'the Institute'], 1)],
 listen_text='An officer who has never built a document from a file and a blank page has not '
             'lost a skill; they have never had it. In a tested cohort of fourteen, eleven had '
             'never done it, and one produced nothing at all within the hour allowed.',
 listen=[('From a file and a blank ____________.', 'page'),
         ('They have never ____________ it.', 'had'),
         ('In a tested ____________ of fourteen.', 'cohort'),
         ('Produced nothing at all within the hour ____________.', 'allowed')],
 speak=['State one third and one mixed conditional about a lost practice in your office.',
        'Name a skill of yours that has improved and one that has gone.'],
 write='Write one exercise instruction that forbids a model.',
 vocab=[('The gradual loss of an ability that is not exercised is a ____________.', 'skill fade'),
        ('A draft composed without assistance or a model is a ____________.', 'first draft written cold'),
        ('Practice aimed at a weakness rather than at output is a ____________.', 'deliberate practice'),
        ('The loss of an ability across a body of people is a ____________.', 'deskilling'),
        ('Dependence beyond what the circumstances justify is an ____________.', 'overreliance')],
 gram=[('If we had kept the exercise, the 11 ____________ have drafted competently.', 'would'),
       ('If we had kept the exercise, the 11 would ____________ able to draft today.', 'be'),
       ('If they ____________ practised 4 times a year, they would have 16 repetitions.', 'had'),
       ('Had she asked for twelve, she ____________ have got none.', 'would'),
       ('If nobody had noticed, we would ____________ be assuming it.', 'still')]),

found=['Try one document in your work from a blank page, with no model.',
       'Say which skill in your work has improved by repetition.',
       'Name one skill in your office that nobody now exercises.',
       'State one mixed conditional about a decision taken four years ago.'],
end_line='They have not lost the skill; they have never had it.',
end_next='Next: The Day It Is Unavailable',
)
