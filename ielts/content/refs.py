# -*- coding: utf-8 -*-
"""The back-matter references: language, writing, speaking.

Benchmark factor 23 scored this 0 against Cambridge's 3. Complete IELTS
puts a grammar reference at the back with the full paradigm and extra
practice, and every grammar box in the units points at it. We had nothing
at all: sixty grammar points in Volume 3, each explained in an average of
61 words on the page it appeared on, and nowhere to look anything up.

Every entry carries four things, and the second is the one no textbook
reference usually has:

  pattern   the full paradigm, not the slice the cycle needed
  errors    the three mistakes learners at THIS band actually make, so
            the entry corrects rather than merely informs
  items     eight more questions, with answers, for the learner who got
            the cycle's six wrong
  seen      the cycles that point here, filled by gate13 rather than by
            hand, so the reference cannot claim a cycle that dropped it

gate13 rule 3 fails the build where a cycle points at an entry that is not
in LANG, which is the whole reason a pointer is worth printing.
"""

LANG = {

 'L4': dict(
  title='Embedded questions',
  also='indirect questions, reported questions',
  pattern=[
   'A direct question inverts: Is the grade correct?  Where is the form?',
   'An embedded question does not invert. After a phrase like I would be '
   'grateful if you could tell me, or Could you let me know, the clause '
   'goes back to statement order: subject, then verb.',
   'With a yes/no question, join the clause with whether (or if): '
   'tell me whether the grade is correct.',
   'With a wh- question, the question word itself does the joining: '
   'tell me where the form is.',
   'No question mark is needed unless the whole sentence is a question. '
   '“I should be glad to know whether a resit is acceptable.” is a '
   'statement. “Could you tell me whether a resit is acceptable?” is a '
   'question, because Could you tell me is.'],
  errors=[
   'Keeping the inversion: “tell me whether is the grade correct”. This '
   'is the commonest error at band 6 and it is the one an examiner '
   'notices first, because it happens in the politest sentence in the '
   'letter.',
   'Using if where two alternatives are stated: “I should like to know '
   'if the grade is the printed one or the quoted one.” Whether is the '
   'safer word wherever an or follows.',
   'Adding do or did: “tell me where did you send it”. The auxiliary '
   'belongs to the direct question and does not survive embedding.'],
  items=[
   ('Where is the deadline published? → Could you tell me ____________?',
    'where the deadline is published'),
   ('Has the reference arrived? → I am writing to ask ____________.',
    'whether the reference has arrived'),
   ('Who marks the personal statement? → I should be glad to know '
    '____________.', 'who marks the personal statement'),
   ('Did my application reach you? → Please let me know ____________.',
    'whether my application reached you'),
   ('When will the decision be released? → I would be grateful if you '
    'could tell me ____________.', 'when the decision will be released'),
   ('Is a resit acceptable, or must it be a first sitting? → I should '
    'like to know ____________.',
    'whether a resit is acceptable or it must be a first sitting'),
   ('How many referees are required? → Could you confirm ____________?',
    'how many referees are required'),
   ('What does the fee cover? → I am writing to ask ____________.',
    'what the fee covers')],
  seen=[]),

 'L12': dict(
  title='What-clauses, and saying what a thing actually is',
  also='nominal relative clauses, cleft sentences',
  pattern=[
   'A what-clause is a noun made out of a whole question: '
   'What the test measures is reading speed. The clause What the test '
   'measures is the subject of is.',
   'It is the natural way to separate a thing from the claim made about '
   'it, which is exactly what an argument about measurement needs: '
   '“What this number shows is how many applied, not how many were '
   'suitable.”',
   'The cleft form puts the emphasis where you want it: '
   '“It is the school, not the student, that the figure describes.”',
   'A what-clause takes a singular verb even when the thing it names is '
   'plural: What the figures show is a widening gap.'],
  errors=[
   'Making the verb agree with the noun at the end rather than with the '
   'clause: “What the figures show are a widening gap.” The subject is '
   'the clause, so it is show... is.',
   'Using what where a relative pronoun is wanted: “the thing what the '
   'test measures”. What already contains its own antecedent; either '
   'write what the test measures or the thing that the test measures, '
   'never both.',
   'Starting every sentence this way. The structure is emphatic, and an '
   'essay in which every sentence is emphatic has no emphasis in it at '
   'all. Twice in an essay is plenty.'],
  items=[
   ('The test measures recall. (begin: What) ____________',
    'What the test measures is recall.'),
   ('The figure describes the school, not the student. (begin: It is) '
    '____________',
    'It is the school, not the student, that the figure describes.'),
   ('The data show a fall in applications. (begin: What) ____________',
    'What the data show is a fall in applications.'),
   ('Correct: What the figures show are three separate trends. '
    '____________', 'What the figures show is three separate trends.'),
   ('He wants a clear criterion. (begin: What) ____________',
    'What he wants is a clear criterion.'),
   ('Correct: the thing what the measure counts. ____________',
    'what the measure counts'),
   ('The policy changed the intake, not the attainment. (begin: It was) '
    '____________',
    'It was the intake, not the attainment, that the policy changed.'),
   ('The study proves correlation. (begin: All that) ____________',
    'All that the study proves is correlation.')],
  seen=[]),

 'L6': dict(
  title='Comparing figures',
  also='comparatives, proportions, approximation',
  pattern=[
   'Three ways to compare two numbers, and they are not interchangeable.',
   'Difference: X is 14 points higher than Y. Use for an absolute gap, '
   'and name the unit - points, per cent, thousands.',
   'Ratio: X is nearly twice Y; X is about half as large as Y. Use where '
   'the relation matters more than the size.',
   'Percentage change: X rose by 14 per cent, from 50 to 57. Note by for '
   'the change and to for the destination.',
   'Approximation, in rising order of looseness: just over, a little '
   'over, about, roughly, nearly, almost, well over.',
   'A percentage point is not a per cent. A rise from 40% to 44% is a '
   'rise of four percentage points and of ten per cent.'],
  errors=[
   'Writing “increased by 57 per cent” when the figure reached 57 per '
   'cent. By is the size of the change; to is where it ended.',
   'Using double comparatives: “more higher”, “more easier”.',
   'Confusing percentage points with per cent, which an examiner reads '
   'as a failure of accuracy rather than of grammar and which costs '
   'marks in Task 1 every time.'],
  items=[
   ('Men 52, women 48. (begin: Men earn) ____________',
    'Men earn four thousand more than women.'),
   ('22 and 52. (use: well over) ____________',
    'Medicine pays well over twice what creative arts pays.'),
   ('From 40% to 44%. (use: percentage points) ____________',
    'a rise of four percentage points'),
   ('Correct: it increased by 57 per cent, reaching 57. ____________',
    'it increased to 57 per cent'),
   ('36 and 35. (use: much the same) ____________',
    'Law and engineering pay much the same.'),
   ('27 against 22. (use: a little over) ____________',
    'Humanities pay a little over what creative arts pay.'),
   ('Correct: humanities are more lower than law. ____________',
    'humanities are lower than law'),
   ('49 and 42. (use: seven points) ____________',
    'The gap in economics is seven points.')],
  seen=[]),

 'L9': dict(
  title='Cause, correlation and the language between them',
  also='hedged causation, predictors',
  pattern=[
   'English has a ladder of words between two things moving together and '
   'one thing making the other happen, and an academic text spends most '
   'of its time in the middle of it.',
   'Association only: is associated with, is linked to, goes with, '
   'tends to accompany, predicts.',
   'Hedged causation: appears to contribute to, is likely to be one '
   'cause of, may account for part of, is implicated in.',
   'Asserted causation: causes, produces, brings about, is responsible '
   'for, leads to.',
   'A predictor is not a cause. X predicts Y says only that knowing X '
   'improves your guess about Y; it is silent on whether changing X '
   'would change anything.',
   'The grammar that marks the difference is modal and adverbial, not '
   'lexical: may, appears to, in part, on this evidence.'],
  errors=[
   'Reading predicts as causes, and then writing a Task 2 conclusion '
   'the evidence does not support. This is a Task Response problem '
   'before it is a grammar one.',
   'Hedging twice: “it may possibly perhaps contribute”. One hedge per '
   'claim. Two read as evasion.',
   'Dropping the hedge in the conclusion after carrying it all through '
   'the essay. The conclusion is where examiners look for overclaiming.'],
  items=[
   ('Vocabulary at five and reading at eleven move together. (use: '
    'associated) ____________',
    'Vocabulary at five is associated with reading at eleven.'),
   ('The evidence is weak. (use: may account for part of) ____________',
    'Early vocabulary may account for part of the later gap.'),
   ('Correct: the study proves that nursery causes higher attainment. '
    '____________',
    'the study suggests that nursery contributes to higher attainment'),
   ('X improves a guess about Y. (use: predictor) ____________',
    'X is a predictor of Y.'),
   ('Correct: it may possibly perhaps be a factor. ____________',
    'it may be a factor'),
   ('Two things rise together, cause unknown. (use: goes with) '
    '____________', 'The rise in one goes with a rise in the other.'),
   ('Strong experimental evidence. (use: brings about) ____________',
    'The programme brings about a measurable gain.'),
   ('Correct: therefore spending definitely closes the gap. '
    '____________',
    'therefore spending appears to narrow the gap, at least in part')],
  seen=[]),

 'L10': dict(
  title='Conceding without losing the argument',
  also='concession, counter-argument, contrast',
  pattern=[
   'A concession admits something true for the other side and then goes '
   'on. The going on is the whole point: a concession with no second '
   'half is a surrender.',
   'Subordinating: Although / While / Even though the programme is '
   'expensive, it is cheaper than the alternative.',
   'Adverbial: The programme is expensive. Even so, / Nevertheless, / '
   'All the same, it is cheaper than the alternative.',
   'Fronted and emphatic: Expensive though it is, the programme...',
   'Granting a point explicitly: Granted, the evidence is thin. / There '
   'is something in this. / This is true as far as it goes.',
   'Word order matters: the clause you concede comes first and the '
   'clause you believe comes second, because an English sentence puts '
   'its weight at the end.'],
  errors=[
   'Although with but: “Although it is expensive, but it works.” One '
   'connector, not two.',
   'Conceding in the last sentence of a paragraph, which leaves the '
   'reader holding the other side’s point. Concede first, argue second.',
   'Using however as a subordinator: “However it is expensive, it '
   'works.” However joins sentences, not clauses; use although.'],
  items=[
   ('It is expensive. It works. (use: Although) ____________',
    'Although it is expensive, it works.'),
   ('Correct: Although it is costly, but the gain is real. ____________',
    'Although it is costly, the gain is real.'),
   ('The evidence is thin. The direction is clear. (use: Granted) '
    '____________', 'Granted, the evidence is thin; the direction is '
    'nonetheless clear.'),
   ('Correct: However the sample is small, the result held. '
    '____________', 'Although the sample is small, the result held.'),
   ('Hard to scale. Worth trying. (use: Even so) ____________',
    'It is hard to scale. Even so, it is worth trying.'),
   ('Small effect. Cheap. (use: While) ____________',
    'While the effect is small, the measure is cheap.'),
   ('Fronted: It is expensive but it works. (begin: Expensive) '
    '____________', 'Expensive though it is, it works.'),
   ('Correct: This is true as far as it goes, and therefore the policy '
    'fails. ____________',
    'This is true as far as it goes, but it does not settle the '
    'question.')],
  seen=[]),
}

WRITING = {}
SPEAKING = {}
