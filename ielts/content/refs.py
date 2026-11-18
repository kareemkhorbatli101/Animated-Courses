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

 'L13': dict(
  title='Dividing a subject before arguing about it',
  also='enumeration, separating questions',
  pattern=[
   'Announce, number, separate. There are two questions here. The first '
   'is whether X. The second is who should Y.',
   'The first and the second take a singular verb, and are followed by '
   'whether, by a wh- word, or by a noun phrase - never by a that-clause: '
   'The first is whether it works, not The first is that it works.',
   'Other openings: Two things are being run together here. / It is worth '
   'separating two claims. / This is really two arguments.',
   'The payoff sentence names the kind of each question: one is a question '
   'about evidence, the other a question about fairness. That is what '
   'makes the division useful rather than decorative.',
   'Having divided, answer one and say you are doing so. An essay that '
   'divides and then argues about both at once has wasted the move.'],
  errors=[
   'There are two question here. The noun must agree: two questions.',
   'The first is that whether it works. Whether already does the joining; '
   'that is one word too many.',
   'Dividing and then not using the division. If the two questions are not '
   'answered separately, the reader is left wondering why they were '
   'separated, and the examiner reads it as a memorised opening.'],
  items=[
   ('Should universities lower offers? Divide it. ____________',
    'whether it widens access; whether it is fair to other applicants'),
   ('Should employers fund retraining? Divide it. ____________',
    'whether retraining works; who ought to pay for it'),
   ('Correct: There are two question here. ____________',
    'There are two questions here.'),
   ('Correct: The first is that whether the policy works. ____________',
    'The first is whether the policy works.'),
   ('Name the kinds: does the drug work / should we fund it. '
    '____________', 'one is about evidence, the other about priorities'),
   ('Should we build on the floodplain? Divide it. ____________',
    'whether it is safe; who bears the risk if it is not'),
   ('Open the division in four words. ____________',
    'Two things are being run together.'),
   ('Correct: This is really two argument. ____________',
    'This is really two arguments.')],
  seen=[]),

 'L14': dict(
  title='Aggregates and individuals',
  also='it does not follow, composition and division',
  pattern=[
   'A claim about a total is not a claim about a member of it, and English '
   'marks the refusal explicitly: It does not follow that...',
   'The full shape is three parts. State the aggregate fairly. Deny the '
   'inference with it does not follow that, or that establishes nothing '
   'about. Name the two different subjects: a market is not a person; an '
   'average is not a household.',
   'Useful variants: which is consistent with X / that is a claim about Y, '
   'not about Z / true of the market, false of the worker.',
   'Note the tense: it does not follow is present simple and stays present '
   'even when both claims are in the past.',
   'The reverse error has its own shape: this person did badly, therefore '
   'the policy failed. Deny it the same way.'],
  errors=[
   'Using but where it does not follow is wanted. But marks a contrast and '
   'says nothing about why the first claim fails to settle the second; the '
   'longer phrase is doing logical work that but cannot do.',
   'It does not follow to the weavers found work. The phrase takes a '
   'that-clause: it does not follow that the weavers found work.',
   'Granting the aggregate and then disputing it anyway, which abandons '
   'the move. The point is to leave the aggregate standing.'],
  items=[
   ('Employment rose. The weavers did not recover. ____________',
    'Employment rose; it does not follow that the weavers recovered.'),
   ('Average earnings rose. Most workers earned less. ____________',
    'Average earnings rose, which is consistent with most workers '
    'earning less.'),
   ('Correct: it does not follow to the market adjusted. ____________',
    'it does not follow that the market adjusted'),
   ('The share fell. There were fewer of them. ____________',
    'The share fell; it does not follow that the number fell.'),
   ('Name the two subjects: the national total, the weaver. '
    '____________', 'a market has no lifespan; a person has forty years'),
   ('One school failed. The programme is useless. ____________',
    'One school failed; that establishes nothing about the programme.'),
   ('Rewrite with but removed: employment rose but people suffered. '
    '____________',
    'Employment rose; it does not follow that nobody bore a cost.'),
   ('Correct: it did not follow that the weavers found work, in 1830. '
    '____________', 'it does not follow that the weavers found work')],
  seen=[]),

 'L15': dict(
  title='Saying what prevented something',
  also='prevent, stop, keep from, obstacles',
  pattern=[
   'Four patterns, and three of them trip learners on the preposition.',
   'prevent somebody FROM doing something - and the from may be dropped: '
   'the delay prevented us (from) attending.',
   'stop somebody FROM doing something - here from may also be dropped.',
   'keep somebody FROM doing something - from is obligatory.',
   'A noun subject is normal and often better than a person: the lack of '
   'transport prevented many from attending, not many people could not '
   'attend because there was no transport.',
   'For a softer, more formal version: made it difficult for us to attend '
   '/ meant that we were unable to attend.'],
  errors=[
   'prevent somebody TO do something. The infinitive is wrong after '
   'prevent, stop and keep; use the -ing form.',
   'avoid to do. Avoid takes -ing as well: avoid attending.',
   'Writing I could not come because I was ill in a formal letter, where '
   'illness prevented me from attending is the register wanted. This is a '
   'General Training Task 1 marking point rather than a grammar one.'],
  items=[
   ('The strike. We did not travel. (prevent) ____________',
    'The strike prevented us from travelling.'),
   ('Correct: the delay prevented us to attend. ____________',
    'the delay prevented us from attending'),
   ('No childcare. She did not take the course. (keep) ____________',
    'The lack of childcare kept her from taking the course.'),
   ('Correct: I avoided to answer. ____________', 'I avoided answering.'),
   ('Formal register: I was ill so I did not come. ____________',
    'Illness prevented me from attending.'),
   ('The fee. Many did not apply. (stop) ____________',
    'The fee stopped many from applying.'),
   ('Softer: the deadline made attendance impossible. ____________',
    'The deadline made it difficult for us to attend.'),
   ('Correct: nothing prevented from us going. ____________',
    'nothing prevented us from going')],
  seen=[]),

 'L16': dict(
  title='Judging a decision rather than an outcome',
  also='hindsight, reasonable at the time, how-much questions',
  pattern=[
   'A decision can be right and turn out badly. English separates the two '
   'with a cluster of fixed phrases, and they are worth learning whole.',
   'On the information available at the time, the decision was '
   'reasonable.',
   'With hindsight it was wrong; that is not the same as saying it was '
   'unreasonable.',
   'The question is not whether it worked but whether it was defensible.',
   'Replacing a yes-or-no question with a how-much question: The question '
   'is not whether X but how far X / how much of Y is due to Z. This is '
   'the move that rescues an argument stuck between two absolutes.',
   'Note the structure: not whether... but how far..., with both halves '
   'in the same grammatical form.'],
  errors=[
   'In hindsight. The idiom is with hindsight, or in retrospect.',
   'The question is not whether it worked but if it was fair. Keep both '
   'halves the same: not whether... but whether..., or not whether... but '
   'how far...',
   'Using this move to avoid answering. If you replace the question you '
   'must answer the new one, or Task Response reads it as evasion.'],
  items=[
   ('It failed, but nobody could have known. ____________',
    'On the information available at the time, the decision was '
    'reasonable.'),
   ('Correct: In hindsight it was wrong. ____________',
    'With hindsight it was wrong.'),
   ('Turn into a how-much question: did the policy cause the fall? '
    '____________',
    'The question is not whether it caused the fall but how much of it '
    'it explains.'),
   ('Correct: the question is not whether it worked but if it was fair. '
    '____________',
    'the question is not whether it worked but whether it was fair'),
   ('A right decision, a bad result. ____________',
    'The decision was defensible even though the outcome was poor.'),
   ('Turn into a how-much question: is the drought due to climate '
    'change? ____________',
    'The question is not whether climate change caused it but how far '
    'it made it likelier.'),
   ('Correct: judged by hindsight, they were unreasonable. '
    '____________',
    'judged with hindsight the decision was wrong, which is not the '
    'same as unreasonable'),
   ('Name the standard: what should they have known? ____________',
    'the information available at the time')],
  seen=[]),

 'L17': dict(
  title='Saying what something is not',
  also='negative definition, contrastive definition',
  pattern=[
   'Defining by exclusion is often clearer than defining directly, and it '
   'is how technical writing introduces a term the reader half knows.',
   'X is not Y. It is Z. - the blunt, effective pair of sentences.',
   'X is not so much Y as Z. - where Y is partly true.',
   'Rather than Y, X is Z. / What X is not is Y.',
   'The strongest version names the mistake being corrected: The problem '
   'is not the water. It is where the water goes.',
   'Keep the two halves parallel in form, or the contrast blurs: not a '
   'question of money but a question of time, not not about money but it '
   'is time.'],
  errors=[
   'It is not so much Y than Z. The comparative is as, not than.',
   'Unbalanced halves: not a shortage of money but it takes a long time.',
   'Negating without replacing. X is not Y, full stop, leaves the reader '
   'with nothing; a negative definition must supply the positive.'],
  items=[
   ('The problem is water, no - it is drainage. ____________',
    'The problem is not the water. It is where the water goes.'),
   ('Correct: it is not so much a flood than a failure to drain. '
    '____________', 'not so much a flood as a failure to drain'),
   ('Money, partly; mostly time. ____________',
    'It is not so much a question of money as of time.'),
   ('Correct: not a shortage of staff but it takes training. '
    '____________',
    'not a shortage of staff but a shortage of training'),
   ('Use What X is not: the scheme is not a subsidy. ____________',
    'What the scheme is not is a subsidy.'),
   ('Use Rather than: it is prevention, not treatment. ____________',
    'Rather than treatment, it is prevention.'),
   ('Name the mistake: people think it is the rain. ____________',
    'The problem is not the rainfall but the hard ground it falls on.'),
   ('Correct: this is not a quota. ____________',
    'This is not a quota; it is a lower threshold applied case by '
    'case.')],
  seen=[]),

 'L18': dict(
  title='Asserting a right',
  also='entitlement, obligation, be entitled to',
  pattern=[
   'The grammar of a right is modal and the register is fixed, which makes '
   'it one of the most learnable things in the language.',
   'I am entitled to a copy. / I have the right to request it. / I am '
   'requesting it under section 12.',
   'The obligation on the other side: you are required to respond within '
   'one calendar month. / the controller must provide the data.',
   'Polite but firm is the register: I should be grateful if you would '
   'confirm, not I demand.',
   'Note the preposition: entitled TO a thing, entitled TO DO something; '
   'and the quantifier: within one calendar month, not within one month '
   'calendar.',
   'A deadline sentence is standard and worth memorising: I look forward '
   'to your response within the statutory period.'],
  errors=[
   'I am entitled for a copy, or entitled of. The preposition is to.',
   'I demand / I insist you to send. Demand takes that plus the bare '
   'subjunctive (I demand that it be sent) and is in any case the wrong '
   'register for a Task 1 letter.',
   'Confusing right with duty: you have the right to respond, said to the '
   'organisation, grants them a permission you did not mean to grant.'],
  items=[
   ('Correct: I am entitled for a copy. ____________',
    'I am entitled to a copy.'),
   ('State the obligation: they have to reply in a month. ____________',
    'You are required to respond within one calendar month.'),
   ('Polite but firm: send it now. ____________',
    'I should be grateful if you would confirm when it will be sent.'),
   ('Correct: I demand you to erase the data. ____________',
    'I am requesting that the data be erased.'),
   ('Name the basis: section 12 of the Act. ____________',
    'I am making this request under section 12 of the Act.'),
   ('Correct: I have the right of request it. ____________',
    'I have the right to request it.'),
   ('A closing deadline sentence. ____________',
    'I look forward to your response within the statutory period.'),
   ('Correct: you have the right to answer me within a month. '
    '____________', 'you are required to answer within a month')],
  seen=[]),

 'L19': dict(
  title='Trade-offs and exchanges',
  also='at the cost of, in return for, the more... the more',
  pattern=[
   'A trade-off says that getting one thing costs another, and English has '
   'half a dozen ways to say it precisely.',
   'at the cost of / at the expense of: convenience at the cost of '
   'privacy.',
   'in return for / in exchange for: people give up data in return for a '
   'free service.',
   'The more... the more / the less: the more precise the profile, the '
   'less anonymous the person.',
   'There is a trade-off between X and Y. / X comes at a price, and the '
   'price is Y.',
   'Note the comma in the the more... the more pattern, and that both '
   'halves invert nothing: the more data they hold, the better the '
   'prediction is.'],
  errors=[
   'At the cost to privacy. The preposition is of.',
   'More the profile is precise, less the person is anonymous. The pattern '
   'needs the in both halves: the more precise..., the less anonymous...',
   'In exchange of. The preposition is for.'],
  items=[
   ('Convenience, and privacy is lost. ____________',
    'convenience at the cost of privacy'),
   ('Correct: in exchange of a discount. ____________',
    'in exchange for a discount'),
   ('More data, better prediction. ____________',
    'The more data they hold, the better the prediction.'),
   ('Correct: at the cost to accuracy. ____________',
    'at the cost of accuracy'),
   ('Free service, data given up. ____________',
    'People give up data in return for a free service.'),
   ('Name it as a trade-off: speed against accuracy. ____________',
    'There is a trade-off between speed and accuracy.'),
   ('Correct: more it is precise, less it is private. ____________',
    'the more precise it is, the less private it is'),
   ('X has a price. ____________',
    'Convenience comes at a price, and the price is privacy.')],
  seen=[]),

 'L20': dict(
  title='Scope: only, even, at least, and where they go',
  also='focusing adverbs, scope ambiguity',
  pattern=[
   'Only, even, just, at least and also attach to whatever follows them, '
   'and moving one moves the meaning of the sentence.',
   'Only the regulator may inspect the data. (nobody else may)',
   'The regulator may only inspect the data. (and may do nothing else '
   'with it)',
   'The regulator may inspect only the data. (not the code, not the '
   'staff)',
   'All three are grammatical, all three mean different things, and in '
   'speech stress does the work the position does in writing.',
   'Repairing an ambiguity: put the word immediately before what it '
   'limits, or rewrite with it is only X that...'],
  errors=[
   'Putting only before the verb by habit, which is natural in speech and '
   'ambiguous in writing: I only read the first page can mean I read '
   'nothing else or I did nothing but read.',
   'Even with a negative: he did not even read it is fine; he even did '
   'not read it is not.',
   'At least used as a hedge where a number is wanted. At least three '
   'means three or more; at least, I think so means something quite '
   'different and should not be in an academic sentence.'],
  items=[
   ('Nobody else may inspect it. ____________',
    'Only the regulator may inspect the data.'),
   ('They may do nothing else with it. ____________',
    'The regulator may only inspect the data.'),
   ('Not the code, just the data. ____________',
    'The regulator may inspect only the data.'),
   ('Correct: he even did not open the file. ____________',
    'he did not even open the file'),
   ('Remove the ambiguity: I only read the first page. ____________',
    'I read only the first page.'),
   ('Use a cleft to fix the scope: only the regulator. ____________',
    'It is only the regulator that may inspect the data.'),
   ('Correct: at least, three records were affected. ____________',
    'at least three records were affected'),
   ('Place also: the scheme covers staff and contractors. '
    '____________', 'The scheme covers contractors as well as staff.')],
  seen=[]),
 'L21': dict(
  title='Grounds and evidence in a formal objection',
  also='complaints, representations, substantiation',
  pattern=[
   'An objection that states a feeling is filed; one that states a ground '
   'and attaches a checkable fact has to be answered. The shape is fixed.',
   'Announce the number: I am writing to object on two grounds.',
   'Number them: The first is... The second is...',
   'Attach evidence to each: I have kept a dated log, which I am happy to '
   'supply. / This is recorded in the published minutes of 14 March.',
   'Hedge where you are unsure of a detail, so a small error cannot sink '
   'the whole: the conditions appear to forbid, as I understand the '
   'procedure.',
   'Close with what you want: I would ask the committee to refuse the '
   'application, or in the alternative to impose a condition.'],
  errors=[
   'on the ground OF that it is noisy. Either on the ground THAT, or on '
   'the grounds of NOISE - a that-clause or a noun, not both.',
   'Writing the strongest sentence first. An objection is read by somebody '
   'with forty of them; the grounds go at the top and the feeling, if it '
   'appears at all, goes last.',
   'Asserting what you cannot show. One unsupported claim invites the '
   'reply that the whole objection is unsupported.'],
  items=[
   ('The noise is unbearable. (give a ground with evidence)',
    'On eleven occasions since March I have recorded arrivals after '
    'midnight.'),
   ('Correct: I object on the ground of that it is unsafe.',
    'I object on the ground that it is unsafe.'),
   ('Announce two grounds in eight words.',
    'I am writing to object on two grounds.'),
   ('Hedge a detail you are unsure of.',
    'The conditions appear to forbid this, as I understand them.'),
   ('Nobody consulted us. (make it checkable)',
    'No notice was displayed in this street, contrary to the published '
    'procedure.'),
   ('Correct: I demand that you to refuse it.',
    'I would ask the committee to refuse it.'),
   ('Add an alternative request.',
    'or in the alternative to impose a condition limiting occupancy'),
   ('Offer your evidence without sending it.',
    'I have kept a dated log, which I am happy to supply.')],
  seen=[]),

 'L22': dict(
  title='Parallel and correlative structures',
  also='not only but, both and, either or, neither nor',
  pattern=[
   'Correlatives come in pairs and both halves must be the same kind of '
   'thing: both the gain AND the loss, not only the rent BUT ALSO the '
   'supply.',
   'not only... but (also): after not only at the start of a sentence the '
   'subject and verb MUST invert. Not only has the street changed, but...',
   'The same inversion follows no sooner, rarely, seldom, at no point and '
   'under no circumstances, all of which are useful in a Task 2 opening.',
   'both... and takes a plural verb: both the gain and the loss ARE real.',
   'either... or and neither... nor take the verb from the NEARER subject: '
   'neither the council nor the residents WERE consulted.',
   'A plain parallel needs no correlative at all and is often better: it '
   'has gained a bakery and lost a butcher.'],
  errors=[
   'Not only the rent has risen - no inversion. Write Not only HAS the '
   'rent risen.',
   'Unbalanced halves: not only a shortage of money but it takes time. '
   'Both halves must be the same grammatical shape.',
   'both the gain and the loss IS real. Both takes a plural verb.'],
  items=[
   ('The street changed. The objectors left. (not only)',
    'Not only has the street changed, but the objectors have left.'),
   ('Correct: Not only the rent has risen.',
    'Not only has the rent risen.'),
   ('Correct: both the gain and the loss is real.',
    'both the gain and the loss are real'),
   ('The council was not consulted. The residents were not consulted. '
    '(neither)',
    'Neither the council nor the residents were consulted.'),
   ('It gained a bakery. It lost a butcher. (plain parallel)',
    'It has gained a bakery and lost a butcher.'),
   ('Correct: not only a shortage of money but it takes time.',
    'not only a shortage of money but a shortage of time'),
   ('Nothing was said at any stage. (at no point)',
    'At no point was anything said.'),
   ('Correct: neither the operator or the owner was informed.',
    'neither the operator nor the owner was informed')],
  seen=[]),

 'L23': dict(
  title='Where a benefit falls, and who bears a cost',
  also='distribution, incidence, accrue, be borne by',
  pattern=[
   'Benefits accrue TO somebody; costs are borne BY somebody. The two '
   'prepositions are fixed and are reversed by learners constantly.',
   'Other verbs of distribution: fall on, be captured by, be concentrated '
   'in, be spread across, flow to.',
   'The useful pairing is conceding size while disputing distribution: the '
   'benefit is real and is concentrated where it is least needed.',
   'Incidence is the technical noun: the incidence of the tax falls on '
   'tenants rather than on landlords.',
   'A gross figure is before deductions, a net figure after. Quoting the '
   'gross and spending the net is the commonest sleight in any public '
   'argument about money.'],
  errors=[
   'the benefit accrues the shareholders - the preposition to is '
   'obligatory.',
   'the cost is borne to residents - costs are borne BY.',
   'Treating a distribution argument as a size argument. Saying the gain '
   'is smaller than claimed and saying it goes to the wrong people are '
   'different objections and need different evidence.'],
  items=[
   ('The operator gets a third.', 'A third accrues to the operator.'),
   ('Residents pay for it.', 'The cost is borne by residents.'),
   ('Correct: the benefit accrues the owners.',
    'the benefit accrues to the owners'),
   ('The gain is real but badly placed.',
    'The benefit is real and is concentrated where it is least needed.'),
   ('Tenants end up paying the tax. (incidence)',
    'The incidence of the tax falls on tenants.'),
   ('Correct: the cost is borne to the taxpayer.',
    'the cost is borne by the taxpayer'),
   ('Before deductions / after deductions.', 'gross / net'),
   ('Most of it goes to a few people. (concentrated)',
    'The benefit is concentrated in a small number of hands.')],
  seen=[]),

 'L24': dict(
  title='Conditionals, inverted and counterfactual',
  also='were, had, unintended consequences',
  pattern=[
   'The inverted conditional drops if and inverts: Were a cap imposed, '
   'some supply would move. Had the premium been general, the objection '
   'would have been decisive.',
   'Were is used for the unreal present and future; Had for the unreal '
   'past. Should is used for a remote possibility: Should the measure '
   'fail, little will have been lost.',
   'No if is used and none may be added: If were a cap imposed is wrong.',
   'The form is formal and unmistakably band 7 when correct, which is '
   'exactly why it should be used twice in an essay and not six times.',
   'It is the natural grammar for a counterfactual - what would have '
   'happened otherwise - and therefore for any argument about unintended '
   'effects.'],
  errors=[
   'If were a cap imposed. The if and the inversion are alternatives, '
   'never both.',
   'Were a cap would be imposed. The inverted clause takes the bare past '
   'subjunctive, not would.',
   'Mixing the times: Had a cap been imposed, some supply would move - the '
   'past condition needs would have moved.'],
  items=[
   ('If a cap were imposed, supply would move.',
    'Were a cap imposed, supply would move.'),
   ('If the premium had been general, the objection would have held.',
    'Had the premium been general, the objection would have held.'),
   ('Correct: If were the measure introduced, nothing would change.',
    'Were the measure introduced, nothing would change.'),
   ('Correct: Had a cap been imposed, supply would move.',
    'Had a cap been imposed, supply would have moved.'),
   ('If the council measures it, we will know. (should)',
    'Should the council measure it, we will know.'),
   ('If I were you. (inverted)', 'Were I you.'),
   ('Correct: Were the policy would fail, we would learn something.',
    'Were the policy to fail, we would learn something.'),
   ('If it had not rained, nothing would have flooded.',
    'Had it not rained, nothing would have flooded.')],
  seen=[]),

 'L25': dict(
  title='Describing a place: zones, not dates',
  also='maps, plans, spatial organisation',
  pattern=[
   'A map or plan is organised in space and a chart in time, so the '
   'ordering words are different: to the north of, beyond, adjoining, '
   'set back from, at the junction of, bounded by.',
   'Choose one direction and hold it - clockwise, or north to south, or '
   'from the entrance inwards - and say which you have chosen.',
   'Relative position needs a fixed reference: the library stands opposite '
   'the station, rather than the library is on the right.',
   'For a before-and-after pair, the organising principle is what changed, '
   'not where things are: the woodland was cleared and replaced by '
   'housing, while the lake was retained.',
   'Retained, demolished, converted, extended and relocated are the five '
   'verbs a plan comparison is mostly made of, and all five take the '
   'passive.'],
  errors=[
   'On the right and on the left, which depend on where the reader is '
   'standing. Use compass directions or named features.',
   'Describing a plan chronologically when nothing has changed, or '
   'spatially when the task is a before-and-after.',
   'in the north of the site vs to the north of the site - the first is '
   'inside it, the second outside. Both are tested.'],
  items=[
   ('The library is near the station. (fixed reference)',
    'The library stands opposite the station.'),
   ('Correct: the car park is on the right of the site.',
    'the car park is to the east of the site'),
   ('The woodland went and houses came. (passive)',
    'The woodland was cleared and replaced by housing.'),
   ('The lake stayed.', 'The lake was retained.'),
   ('Inside the northern part of the site.', 'in the north of the site'),
   ('Outside it, further north.', 'to the north of the site'),
   ('Say your direction of travel.',
    'Moving clockwise from the main entrance...'),
   ('The old hall became flats.',
    'The hall was converted into flats.')],
  seen=[]),

 'L26': dict(
  title='Metadiscourse: telling the reader the shape',
  also='signposting your own argument',
  pattern=[
   'Metadiscourse is writing about your own writing, and in an essay a '
   'little is worth a great deal: it tells a marker you have a structure '
   'before they have read it.',
   'Announcing: This essay argues that X. Two considerations are '
   'decisive. I shall take them in turn.',
   'Positioning: The first of these is... / Having established X, I turn '
   'to Y. / The remaining objection is...',
   'Limiting: I leave aside the question of X, which is a separate '
   'argument. / Nothing here turns on Y.',
   'The limiting move is the one nobody uses and the one that most '
   'impresses, because it shows you can see the boundary of your own '
   'claim.'],
  errors=[
   'Overdoing it. Three metadiscourse sentences in a 260-word essay is '
   'plenty; eight reads as a candidate describing an essay rather than '
   'writing one.',
   'In this essay I will discuss about the topic - discuss takes no '
   'preposition.',
   'Announcing a structure you then do not follow, which is worse than '
   'announcing nothing.'],
  items=[
   ('State your thesis in six words.', 'This essay argues that X.'),
   ('Correct: I will discuss about two reasons.',
    'I will discuss two reasons.'),
   ('Say you will take two things in order.',
    'Two considerations are decisive, and I shall take them in turn.'),
   ('Move from the first to the second.',
    'Having established X, I turn to Y.'),
   ('Set something aside explicitly.',
    'I leave aside the question of cost, which is a separate '
    'argument.'),
   ('Say that nothing depends on a detail.',
    'Nothing here turns on the exact figure.'),
   ('Introduce the last objection.',
    'The remaining objection is that...'),
   ('Correct: Firstly, secondly, thirdly, fourthly, fifthly.',
    'use two or three, not five')],
  seen=[]),

 'L27': dict(
  title='Proposing something in a formal letter',
  also='requests, justification, offers',
  pattern=[
   'A proposal letter has four parts and they are always in this order: '
   'what you want, why it is reasonable, what you will do, what you are '
   'asking the reader to do.',
   'What you want: I am writing to propose / to request / to ask whether '
   'the committee would consider.',
   'Why: because the present arrangement does X; a comparable scheme at Y '
   'has done Z.',
   'What you offer: I would be willing to / members of the group have '
   'agreed to / we would undertake to.',
   'The ask: I would be grateful if you could let me know whether / I '
   'should be happy to discuss this at the next meeting.',
   'Offering something is the part learners omit and the part that moves '
   'a proposal from a request to a partnership.'],
  errors=[
   'I am writing for propose - the infinitive is to propose.',
   'Asking without offering, which reads as a demand however politely it '
   'is phrased.',
   'I would be grateful if you could to let me know - no to after could.'],
  items=[
   ('Say what you want in eight words.',
    'I am writing to propose a change to the letting policy.'),
   ('Correct: I am writing for request a meeting.',
    'I am writing to request a meeting.'),
   ('Justify with a comparison.',
    'A comparable scheme in the next district has cut the waiting list '
    'by half.'),
   ('Offer something.',
    'Members of the association would be willing to clear the plots '
    'themselves.'),
   ('Correct: we would undertake clearing the site.',
    'we would undertake to clear the site'),
   ('Make the ask.',
    'I would be grateful if you could let me know whether this could be '
    'considered.'),
   ('Offer to discuss.',
    'I should be happy to discuss this at the next meeting.'),
   ('Correct: I would be grateful if you could to reply.',
    'I would be grateful if you could reply.')],
  seen=[]),

 'L28': dict(
  title='Other things equal, and the honest comparison',
  also='ceteris paribus, scope statements, like for like',
  pattern=[
   'Almost every comparison worth making needs a clause saying what was '
   'held constant, and the clause is short: other things being equal, on '
   'comparable land, in the same year, like for like.',
   'Other things being equal is a participle clause and takes no verb of '
   'its own: not other things are being equal.',
   'The scope statement names what the comparison does NOT cover: this '
   'holds for cereals and has not been tested for livestock.',
   'A comparison without a scope statement is read as a universal claim, '
   'which is almost never what the evidence supports.',
   'Useful pairs: on the same soil / across different soils; within a '
   'single year / over a rotation; per hectare / per calorie.'],
  errors=[
   'other things are equal - it is a participle clause: other things '
   'being equal.',
   'Comparing per hectare and per calorie as though they were the same '
   'measure, which is the error the whole of unit 28 cycle 5 is about.',
   'Omitting the scope and then defending the universal claim you did not '
   'mean to make.'],
  items=[
   ('Add the clause: organic yields are lower.',
    'Other things being equal, organic yields are lower.'),
   ('Correct: other things are being equal, the costs are similar.',
    'other things being equal, the costs are similar'),
   ('Name what is not covered.',
    'This holds for cereals and has not been tested for livestock.'),
   ('Make the comparison like for like.',
    'On comparable soil and in the same season, the difference is about '
    'a fifth.'),
   ('Correct: it yields more per hectare and per calorie than the '
    'other.', 'say which measure you mean'),
   ('Limit to one year.',
    'Within a single year; over a full rotation the gap narrows.'),
   ('State the unit.', 'measured per hectare rather than per calorie'),
   ('Correct: organic farming is worse.',
    'Other things being equal, organic yields are lower per hectare.')],
  seen=[]),

 'L29': dict(
  title='Reporting what somebody claims',
  also='reporting verbs, stance, attribution',
  pattern=[
   'A reporting verb carries your opinion of the claim whether you meant '
   'it to or not, and examiners read it exactly.',
   'Neutral: says, states, reports, notes, observes.',
   'Sympathetic: argues, shows, demonstrates, points out, establishes.',
   'Distancing: claims, asserts, alleges, maintains, purports to show.',
   'Points out and shows both concede that the thing is true. Claims and '
   'alleges both suggest it is not. Choosing wrongly attributes to '
   'yourself an opinion you did not intend.',
   'The grammar: most take a that-clause; a few take an object plus to be '
   '(regarded it as, held it to be); allege and claim are followed by '
   'that in careful writing.'],
  errors=[
   'Using claims for a view you accept, which tells the reader you do '
   'not.',
   'Using shows or demonstrates for a view you are about to reject, '
   'which concedes the argument in the verb.',
   'He said about the policy - say takes no about; say that, or speak '
   'about.'],
  items=[
   ('Report neutrally: the committee found no breach.',
    'The committee reported that it had found no breach.'),
   ('Report with agreement: the study found an effect.',
    'The study shows that there is an effect.'),
   ('Report with distance: the company says it is safe.',
    'The company claims that it is safe.'),
   ('Correct: he said about the new rule.',
    'he spoke about the new rule'),
   ('Concede a true point from the other side.',
    'As the editor points out, the timecode confirms it.'),
   ('Correct: the paper claims, and I agree, that the effect is real.',
    'the paper shows that the effect is real'),
   ('Report a view you will reject.',
    'It is maintained that correction is futile.'),
   ('Correct: critics alleges the figure is wrong.',
    'critics allege that the figure is wrong')],
  seen=[]),

 'L30': dict(
  title='Hedging where the disagreement is real',
  also='calibrated claims, epistemic modality',
  pattern=[
   'Hedging is not softening. It is saying exactly how much you are '
   'claiming, and in a genuinely contested question that is the whole '
   'skill.',
   'Quantity: in part, to some degree, in most cases, in the cases so far '
   'examined.',
   'Confidence: on the present evidence, as far as the data allow, it '
   'appears that, the balance of evidence suggests.',
   'Scope: for this population, in the short term, where X holds.',
   'One hedge per claim. Two reads as evasion and costs you more than no '
   'hedge at all.',
   'The strongest move in a contested question is to hedge the claim and '
   'then say what would settle it: this is what a testable position looks '
   'like.'],
  errors=[
   'Stacking: it may possibly perhaps be the case that.',
   'Hedging the body and dropping the hedge in the conclusion, which is '
   'where examiners look for overclaiming.',
   'Hedging a fact. On the present evidence the sun rises in the east is '
   'not caution, it is noise.'],
  items=[
   ('The correction worked. (hedge the quantity)',
    'The correction worked in part.'),
   ('Hedge the confidence.',
    'On the present evidence, the correction appears to work.'),
   ('Hedge the scope.',
    'The correction works for readers who saw the original.'),
   ('Correct: it may possibly perhaps help.', 'it may help'),
   ('Say what would settle it.',
    'A trial with a delayed correction would settle this.'),
   ('Correct: the effect is definitely real, probably.',
    'the effect appears to be real'),
   ('Hedge a strong claim without weakening it.',
    'The balance of evidence supports this, and no study yet '
    'contradicts it.'),
   ('Correct: on the present evidence, water boils at 100 degrees.',
    'water boils at 100 degrees')],
  seen=[]),

 'L31': dict(
  title='Evaluative claims and the evidence for them',
  also='value judgements, criteria, by what standard',
  pattern=[
   'An evaluative claim - this is unfair, that is better, the rule works - '
   'is not settled by evidence alone, because it needs a standard as well. '
   'Saying the standard is what makes it arguable.',
   'The shape: X is unfair BY THE STANDARD OF Y. / Judged by competitive '
   'balance, the rule has failed. / If the test is participation rather '
   'than excellence, the picture reverses.',
   'Naming the criterion first turns a disagreement about values into a '
   'disagreement about facts, which is the only kind that can be settled.',
   'Useful frames: on what standard? / better for whom? / over what '
   'period? / compared with what alternative?',
   'The strongest evaluative paragraphs name the standard, apply it, and '
   'then name the standard that would give the opposite answer.'],
  errors=[
   'Asserting an evaluation without a criterion, which cannot be argued '
   'with and is therefore marked as undeveloped.',
   'Changing criterion mid-essay without saying so, so that the '
   'conclusion does not follow from the body.',
   'Treating better as though it were a fact about the world rather than a '
   'relation between a thing and a standard.'],
  items=[
   ('The rule is unfair. (name the standard)',
    'The rule is unfair by the standard of competitive balance.'),
   ('The scheme worked. (for whom, over what period)',
    'The scheme worked for established clubs, over a single season.'),
   ('Correct: this policy is simply better.',
    'this policy is better if the test is participation'),
   ('Give the standard that reverses it.',
    'If the test is excellence rather than participation, the picture '
    'reverses.'),
   ('Ask the right question of a claim.',
    'Better compared with what alternative?'),
   ('Correct: the rule failed, therefore it was wrong.',
    'the rule failed by its own stated criterion'),
   ('Name a period.', 'over three seasons rather than one'),
   ('Make an evaluation arguable in ten words.',
    'Judged by access rather than revenue, the scheme has failed.')],
  seen=[]),
}

WRITING = {}
SPEAKING = {}
