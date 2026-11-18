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
 'L32': dict(
  title='The passive for a mechanism',
  also='agentless passive, naming passive, scientific passive',
  pattern=[
   'The passive is be plus the past participle: is detected, was '
   'measured, has been shown, will be reported. The tense sits on be '
   'and the participle never changes.',
   'Use it when the agent is unknown, unimportant, or obvious. In a '
   'description of how something works all three are usually true at '
   'once, which is why mechanism paragraphs are full of passives and '
   'why an active version of the same paragraph reads as a story about '
   'researchers rather than an account of a process.',
   'Add the agent with by only where it is informative: the ring is '
   'fitted by somebody who holds a permit tells you something; the '
   'sample was measured by scientists tells you nothing and costs four '
   'words.',
   'The naming passive introduces a technical term after you have '
   'described the thing: that event is called a recovery; this process '
   'is known as imprinting; the result is referred to as the raw age. '
   'It is the single most useful structure in a science answer, '
   'because it lets you define once and then use the term.',
   'The passive with a reporting verb hedges as well as describes: it '
   'is thought to be, it is believed that, it has been suggested that. '
   'These let you report a claim without owning it, which Task 2 needs '
   'constantly.',
   'Keep the chain readable by putting the known thing first. The '
   'light splits a molecule; the molecule is then held at an angle. '
   'Each sentence begins with what the last one ended on, and the '
   'passive is what lets you do that without inventing a subject.'],
  errors=[
   'Supplying an agent that carries no information: by scientists, by '
   'researchers, by experts. Three of these in a paragraph is the '
   'commonest way a band 6 answer reads as padded, and removing them '
   'costs nothing.',
   'Leaving out be: the compass thought to be in the eye. The '
   'participle cannot carry the tense on its own, and this slip is '
   'noticed immediately because the sentence has no finite verb.',
   'Using the passive where the agent is the point. Three groups have '
   'reported results is stronger than results have been reported, '
   'because the number of groups is the evidence.'],
  items=[
   ('Something guides the bird. → passive', 'The bird is guided.'),
   ('A cell detects direction. → passive, agent kept',
    'Direction is detected by a cell.'),
   ('Scientists call this orientation. → naming passive',
    'This is called orientation.'),
   ('They know this as the clock-shift experiment.',
    'This is known as the clock-shift experiment.'),
   ('Correct: The effect thought to be small.',
    'The effect is thought to be small.'),
   ('Correct: This is call magnetoreception.',
    'This is called magnetoreception.'),
   ('Remove the empty agent: the sample was measured by scientists.',
    'the sample was measured'),
   ('Report without owning: the molecule is the right one.',
    'The molecule is thought to be the right one.')],
  seen=[]),

 'L33': dict(
  title='Hedging a scientific claim',
  also='epistemic modality, evidentials, reporting verbs',
  pattern=[
   'A hedge marks how far the evidence goes, and in academic English '
   'it is information rather than politeness. Removing the hedges from '
   'a science paragraph does not make it stronger; it makes it false.',
   'Three families. Modal: may, might, could, is likely to. These say '
   'how probable. Reporting: is thought to, is believed to, appears '
   'to, seems to. These say who thinks so, without naming them. '
   'Evidential: suggests, indicates, demonstrates, is consistent with. '
   'These say what the evidence does.',
   'The evidential family is ordered and the order is worth learning: '
   'is consistent with is weakest, then suggests, then indicates, then '
   'shows, then demonstrates. Moving one step up that list without '
   'more evidence is the commonest overclaim in a candidate essay.',
   'Is consistent with means the evidence would look like this if the '
   'claim were true, and would also look like this under other claims. '
   'It is not weak agreement; it is an explicit refusal to decide, and '
   'a Yes/No/Not Given statement that turns it into shows is NO.',
   'Hedges stack, and stacking is normal: it may be that the effect is '
   'too small to be used. Two hedges in one clause is not clumsy in '
   'this register. Four is.',
   'Where a thing has been shown, say so without a hedge. A paragraph '
   'in which everything is hedged equally tells the reader nothing '
   'about which parts are secure, and that distinction is the whole '
   'value of hedging.'],
  errors=[
   'Using prove. Almost nothing outside mathematics is proved, and the '
   'word signals to an examiner that the candidate has not understood '
   'how evidence works. Show, indicate and demonstrate are all '
   'available and all safer.',
   'Treating is consistent with as agreement. The phrase allows the '
   'claim and removes its force at the same time, and a reader who '
   'misses the second half will misread the paragraph and two '
   'questions.',
   'Hedging the thing that is certain and asserting the thing that is '
   'not. The usual cause is hedging by habit rather than by evidence, '
   'and the result reads as uniformly vague.'],
  items=[
   ('Add the hedge: the chemistry works in a living eye. (not shown)',
    'The chemistry may work in a living eye.'),
   ('Add the hedge: magnetite is a sensor. (disputed)',
    'Magnetite is thought to be a sensor.'),
   ('Three studies fit. What verb?',
    'The results are consistent with the claim.'),
   ('Strong evidence, not proof. What verb?',
    'The evidence indicates that...'),
   ('Correct: The result is consistent to the theory.',
    'The result is consistent with the theory.'),
   ('Correct: This experiment proves the mechanism.',
    'This experiment indicates that the mechanism may operate.'),
   ('Order these: shows, is consistent with, suggests.',
    'is consistent with < suggests < shows'),
   ('Remove the force without disputing: attendance rose after the '
    'campaign.',
    'attendance rose after the campaign, which is consistent with '
    'several explanations')],
  seen=[]),

 'L34': dict(
  title='Sequence and simultaneity',
  also='time clauses, as, while, once, by the time',
  pattern=[
   'Four conjunctions do most of the work. As and while join things '
   'that happen together; once and by the time join things that happen '
   'in order, with the second depending on the first.',
   'The tense after a time conjunction is never the future, even when '
   'the meaning is: once the ant reaches the nest, the count will be '
   'reset. Reaches, not will reach. This is the single most frequent '
   'error at this band in time clauses and it is entirely mechanical.',
   'By the time takes the perfect in the clause that follows it, '
   'because it means at the point when that had already happened: by '
   'the time the stilts were fitted, the outward count had already '
   'been made.',
   'As has two meanings and the context separates them. As the ant '
   'walks out is time; as the ground is hot is reason. If both '
   'readings are possible, use while for time and since for reason.',
   'A time clause can come first or second, and the comma follows the '
   'position: Once it reaches the nest, the count is reset. The count '
   'is reset once it reaches the nest. Front it when the time is the '
   'point; leave it at the end when the event is.',
   'For a process description, the plain markers are better than the '
   'elaborate ones. First, next, once this is complete, finally. '
   'Subsequently and thereupon read as decoration and an examiner has '
   'seen them four hundred times this week.'],
  errors=[
   'Will after a time conjunction: once it will reach the nest. The '
   'future is carried by the main clause and never by the time clause.',
   'Using by the time with a simple past where the perfect is needed: '
   'by the time the stilts were fitted, the count was made. The '
   'perfect is what says the count came first, which is the whole '
   'meaning.',
   'Using as for reason in a sentence where a time reading is also '
   'available. As the sample was taken from an open context, it was '
   'rejected - is that when, or because? Since removes the ambiguity '
   'at no cost.'],
  items=[
   ('Join with as: The ant walks out. It counts strides.',
    'As the ant walks out, it counts its strides.'),
   ('Join with once: It reaches the nest. The count is reset.',
    'Once it reaches the nest, the count is reset.'),
   ('Join with by the time: It has gone 200 m. The error is small.',
    'By the time it has gone 200 metres, the error is still small.'),
   ('Correct: Once the recording will start, you cannot go back.',
    'Once the recording starts, you cannot go back.'),
   ('Correct: By the time we arrived, the tour left.',
    'By the time we arrived, the tour had left.'),
   ('Join with while: The count runs. Direction comes from the sky.',
    'While the count runs, the direction comes from the sky.'),
   ('Disambiguate: As the soil was acid, the bone was lost.',
    'Since the soil was acid, the bone was lost.'),
   ('Four plain markers for a process.',
    'first, next, once this is complete, finally')],
  seen=[]),

 'L35': dict(
  title='Quantity, approximation and the limits of a figure',
  also='approximators, ranges, proportions, hedged superlatives',
  pattern=[
   'Four devices. Approximators: about, roughly, approximately, some, '
   'of the order of, in the region of. Ranges: between X and Y, from X '
   'to Y, X to Y. Proportions: a high proportion of, close to half, '
   'rather under a quarter, the majority of. Hedged superlatives: '
   'among the longest, one of the few, arguably the largest.',
   'Of the order of is the most useful and least used. It claims the '
   'right power of ten and nothing more - of the order of three '
   'thousand kilometres - and it is exactly right when you know the '
   'scale and not the figure.',
   'A range means the true value is somewhere inside it, and the '
   'probability belongs with it where you have one: between 1040 and '
   '1160 at 95 per cent confidence. A range without a probability is '
   'still honest; a point estimate without one is usually not.',
   'Per cent and percentage point are different measures and both are '
   'often needed in one sentence. A share rising from 20 to 25 has '
   'risen by five percentage points and by a quarter.',
   'Use a proportion when you do not know the count and a count when '
   'you do. A high proportion of salmon return is honest where nobody '
   'has counted; 83 per cent of salmon return is a claim about a '
   'measurement.',
   'Hedge the superlative unless you have checked. Among the longest '
   'migrations costs two words and cannot be wrong; the longest '
   'migration can be, and an examiner who knows the subject will '
   'notice.'],
  errors=[
   'False precision. Writing 15 days where the evidence supports ten '
   'to twenty is marked as inaccuracy, not as confidence, and it is '
   'the commonest Task 1 error at band 6.',
   'Confusing per cent with percentage point, usually in the direction '
   'that makes the change sound larger.',
   'Stacking approximators: about roughly fifty. One is information '
   'and two is a writer who has not decided.'],
  items=[
   ('Estimates run from 10 to 20 days. Write it.',
    'between ten and twenty days'),
   ('You know the scale, not the figure: 2,900 km.',
    'of the order of three thousand kilometres'),
   ('Most do, nobody has counted.',
    'a high proportion of them'),
   ('20% to 25%: two correct descriptions.',
    'up five percentage points; up by a quarter'),
   ('Hedge: it is the longest migration of any fish.',
    'it is among the longest migrations of any fish'),
   ('Correct: about roughly fifty per cent.', 'about fifty per cent'),
   ('Slightly under half failed.', 'close to half failed'),
   ('A range with its probability.',
    '1040 to 1160 at 95 per cent confidence')],
  seen=[]),

 'L36': dict(
  title='The argument from mechanism',
  also='if-then, falsifiability, hypothetical conditionals',
  pattern=[
   'An argument from mechanism says that because a thing works in a '
   'particular way, a consequence follows whether anybody wants it or '
   'not. It needs three structures and they do different jobs.',
   'The mechanism itself goes in the present simple, in both clauses, '
   'because it is a general truth: if a route is learned by making '
   'decisions, removing the decisions removes the learning. No will '
   'anywhere.',
   'The prediction goes in the first conditional: if the ant counts '
   'strides, it will overshoot. Present in the if-clause, will in the '
   'main clause. This is the form that makes a claim about the actual '
   'world and can therefore be tested.',
   'The test - what would have to be true for the argument to fail - '
   'goes in the second conditional: if the loss reversed within a '
   'month, nothing would have been lost. The past form here is '
   'distance, not time: you are naming a possibility without claiming '
   'it happens.',
   'Finish the test by saying what follows from it. I hold my position '
   'less firmly because of it. A test that stops at the admission is a '
   'concession; a test that states its own consequence is an argument '
   'about how much to believe, and examiners see almost none of them.',
   'The mechanism sentence should be one your opponent could accept. '
   'If it is already your conclusion, you have not found the '
   'mechanism, and the essay will read as an opinion with connectives '
   'in it.'],
  errors=[
   'Writing will in the if-clause: if the ant will count strides. The '
   'condition never takes will in any of the three forms above.',
   'Mixing the second conditional: if the loss would reverse, nothing '
   'is lost. The if-clause takes the past form and the main clause '
   'takes would: if the loss reversed, nothing would have been lost.',
   'Offering a concession where a test was needed. Some people '
   'disagree names no evidence and cannot change anybody’s mind; '
   'if X were found, my argument would fail does both.'],
  items=[
   ('Mechanism: routes are learned by junction decisions.',
    'If routes are learned by making decisions, a driver who makes '
    'none learns nothing.'),
   ('Prediction: the ant counts strides, stilts fitted.',
    'If the ant counts strides, it will overshoot.'),
   ('Test: the loss might reverse.',
    'If the loss reversed, nothing would have been lost.'),
   ('Correct: If the ant will count strides, it overshoots.',
    'If the ant counts strides, it will overshoot.'),
   ('Correct: If the loss would reverse, nothing is lost.',
    'If the loss reversed, nothing would have been lost.'),
   ('Say what follows from: nobody has tested this.',
    'so I hold the claim provisionally and would change it on one '
    'good study'),
   ('Turn into a test: some people disagree.',
    'If it were shown that the effect reverses, my argument would '
    'fail.'),
   ('Is this a mechanism? Satellite navigation is bad for us.',
    'No - it is the conclusion. The mechanism is that a skill not '
    'exercised decays.')],
  seen=[]),

 'L37': dict(
  title='Dating, and degrees of certainty about time',
  also='approximate dates, ranges, bounds, relative dating',
  pattern=[
   'Four kinds of date and they make four different claims. The '
   'approximate date: c. 1200, about the twelfth century, around the '
   'year 500. The c. stands for circa and is read as about; it is '
   'written before the figure and takes a full stop.',
   'The range: between 1150 and 1300, from the second to the fourth '
   'century. A range says the true date lies inside it, and in '
   'scientific dating it comes with a probability attached.',
   'The bound: no earlier than 1974, not before the twelfth century, '
   'after 1900. A bound fixes one end and leaves the other open, and '
   'it is what a dated object gives you about the layer it sits in - '
   'the earliest the layer can be, never the latest.',
   'The relative date: later than the layer beneath it, earlier than '
   'the wall it is cut by, contemporary with the hearth. Relative '
   'dates commit to an order and to nothing else, and most of '
   'archaeology, geology and manuscript study runs on them.',
   'State the condition inside the claim where one exists: the lower '
   'layer is earlier, provided neither has been disturbed. Writing '
   'the limit into the sentence that makes the claim is marked as '
   'precision, and writing it in a separate sentence afterwards reads '
   'as retreat.',
   'Prepositions. Date to, not date at: the hearth dates to c. 1200. '
   'In the twelfth century, not at. Between X and Y, not between X to '
   'Y.'],
  errors=[
   'Using a single figure where the evidence gives a range, which '
   'claims a precision nobody has and is marked as inaccuracy.',
   'Taking a dated object as dating the layer it was found in. A coin '
   'of 1106 says the layer is no earlier than 1106 and says nothing '
   'at all about how much later it is.',
   'Dates at: the hearth dates at 1200. The verb takes to, and this '
   'is a preposition error an examiner notices because the sentence '
   'is otherwise technical.'],
  items=[
   ('Approximately 1200. Write it.', 'c. 1200'),
   ('Twelfth or thirteenth century. Write it as a range.',
    'between 1100 and 1300'),
   ('The topsoil contains a 1974 coin. What date does that give?',
    'no earlier than 1974'),
   ('The clay lies above the occupation layer.',
    'The clay is later than the occupation layer.'),
   ('Correct: The hearth dates at c. 1200.',
    'The hearth dates to c. 1200.'),
   ('Correct: between 1150 to 1300.', 'between 1150 and 1300'),
   ('Add the condition: the lower layer is earlier.',
    'the lower layer is earlier, provided neither has been disturbed'),
   ('A layer takes the date of which object in it?',
    'the latest one')],
  seen=[]),

 'L38': dict(
  title='Relative clauses that identify',
  also='defining and non-defining clauses, reduced relatives',
  pattern=[
   'A defining relative clause says which one and takes no commas: '
   'the layer that contains the hearth. Remove it and the reader no '
   'longer knows which layer you mean.',
   'A non-defining clause adds information about something already '
   'identified and takes a comma at both ends: context 412, which '
   'contained the hearth, was sampled three times. Remove it and the '
   'sentence still identifies its subject.',
   'That cannot introduce a non-defining clause in standard written '
   'English. Which can do both jobs; that can only define. Where you '
   'have put a comma, use which.',
   'The reduced relative drops the relative pronoun and the verb be, '
   'and it is the form technical writing prefers: the samples taken '
   'from an open context, the curve running flat across that period. '
   'It is shorter, and it is available whenever the full clause would '
   'be passive or progressive.',
   'The verb agrees with the thing the clause describes, not with the '
   'nearest noun: the samples which were taken, not which was taken. '
   'This is the commonest agreement error at band 6 and it happens '
   'because the writer has lost the subject by the time they reach '
   'the verb.',
   'Where and when are relatives too, for places and times: the '
   'context where the hearth was found, the season when the barn was '
   'excavated. They save an awkward in which and at which.'],
  errors=[
   'Comma plus that. A non-defining clause cannot begin with that, '
   'and this is one of the few rules in English that is genuinely '
   'absolute in writing.',
   'One comma instead of two. A non-defining clause needs closing as '
   'well as opening, and a missing second comma leaves the reader '
   'looking for the main verb.',
   'Agreement with the nearest noun rather than with the subject: a '
   'collection of samples which was taken. The samples were taken, '
   'whatever the collection did.'],
  items=[
   ('Join, defining: The layer contains the hearth. It is 60 cm '
    'thick.',
    'The layer that contains the hearth is 60 cm thick.'),
   ('Join, non-defining: Context 412 was sampled. It had the hearth.',
    'Context 412, which contained the hearth, was sampled.'),
   ('Reduce: the samples that were taken from an open context.',
    'the samples taken from an open context'),
   ('Reduce: the curve that runs flat across that period.',
    'the curve running flat across that period'),
   ('Correct: The samples, that were taken from 412, were charcoal.',
    'The samples that were taken from 412 were charcoal.'),
   ('Correct: The samples which was taken were charcoal.',
    'The samples which were taken were charcoal.'),
   ('Correct: The range, which is 1040 to 1160 was narrowed.',
    'The range, which is 1040 to 1160, was narrowed.'),
   ('Use where: the context in which the hearth was found.',
    'the context where the hearth was found')],
  seen=[]),

 'L39': dict(
  title='Reporting an interval',
  also='elapse, separate, it was not until, fronted time phrases',
  pattern=[
   'Four structures, and the choice between them decides whether your '
   'sentence is about an event or about a gap. Elapse and pass take '
   'the interval as subject: four years elapsed between the end of '
   'fieldwork and publication.',
   'Separate takes the interval as subject and the two events as '
   'objects: three years separate the scatter from the survey. Note '
   'the plural verb after a plural interval, and note from rather '
   'than and.',
   'It was not until X that Y is the cleft for a delayed event, and '
   'it puts the emphasis on how long the wait was: it was not until '
   '2019 that a trench was opened. The that is obligatory.',
   'A fronted time phrase sets a point and then says what had already '
   'happened by it, which needs the perfect: by the end of season '
   'three, the barn had been excavated.',
   'Making the interval the subject is what turns a caption into an '
   'analysis. The survey took place three years later is about the '
   'survey; three years separate them is about the gap, and on a '
   'timeline the gaps are the subject.',
   'Hang the comparison off the interval once you have fronted it: '
   'five years pass before the first trench, which is the single '
   'longest interval on the diagram. A writer whose subjects are '
   'events has nowhere natural to put that clause.'],
  errors=[
   'Elapse with a passive: four years were elapsed. Elapse is '
   'intransitive and has no passive.',
   'Separate with and instead of from: three years separate X and Y '
   'is understood and is not the collocation; separate X from Y is.',
   'Omitting that from the cleft: it was not until 2019 a trench was '
   'opened. The that is not optional in this structure.'],
  items=[
   ('Survey 2014, trench 2019. Interval as subject.',
    'Five years separate the survey from the trench.'),
   ('Fieldwork ended 2021, report 2025.',
    'Four years elapsed between the end of fieldwork and the report.'),
   ('A trench was only opened in 2019. Use a cleft.',
    'It was not until 2019 that a trench was opened.'),
   ('By season three the barn was dug. Use the perfect.',
    'By the end of season three the barn had been excavated.'),
   ('Correct: Four years were elapsed.', 'Four years elapsed.'),
   ('Correct: Three years separate the scatter and the survey.',
    'Three years separate the scatter from the survey.'),
   ('Correct: It was not until 2019 a trench was opened.',
    'It was not until 2019 that a trench was opened.'),
   ('Add a comparison: three years separate the first two stages.',
    'three years separate the first two stages, the shortest gap in '
    'the project')],
  seen=[]),

 'L40': dict(
  title='Reporting an absence without overclaiming',
  also='negative evidence, inverted conditionals, argument from '
       'silence',
  pattern=[
   'Four statements about the same absence, in order of strength. '
   'There is no evidence of X. X is absent from the record. No X was '
   'recovered. Had X been present, it would have survived. Only the '
   'last is an argument, and it needs the other three to have been '
   'established first.',
   'The weakest form says nothing about the world: there is no '
   'evidence of textile production is a statement about the evidence '
   'and is compatible with a great deal of textile production.',
   'The method form - no fish bone was recovered, although the soil '
   'was not sieved - is the honest default, because it reports what '
   'was done as well as what was found, and the reader can judge.',
   'The strong form uses the inverted conditional: had it been there, '
   'it would have survived. Had replaces if and the subject follows '
   'it; there is no comma before had and there is one after the '
   'clause. The main clause takes would have plus the participle.',
   'Three questions turn an absence into evidence, and they are '
   'ordered because each assumes the last: would it have survived, '
   'would the excavation have recovered it, would it have been '
   'recognised? State which of the three you are relying on.',
   'Absence of evidence is not evidence of absence is a slogan and is '
   'sometimes false. The accurate version is that an absence is '
   'evidence exactly when the three questions can be answered, which '
   'is longer and is what you should write.'],
  errors=[
   'Jumping to the strong form without the argument. Nobody found any '
   'textile, therefore they had none - the sentence needs a clause '
   'about what would have survived and does not have one.',
   'Is not evidence rather than is no evidence: there is not evidence '
   'of textile production. No is the determiner English uses here.',
   'Using the ordinary conditional where the inverted one is wanted '
   'in formal writing. If it had been there is correct and plainer; '
   'had it been there is the register this kind of argument is '
   'written in, and a Part 3 passage will use it.'],
  items=[
   ('No bone found, no sieving. Report it honestly.',
    'No fish bone was recovered, although the soil was not sieved.'),
   ('Nothing organic survives here. Report the absence of cloth.',
    'No textile survives, as would be expected in this soil.'),
   ('Sterile layer, material would have survived. Strong form.',
    'Had the site been occupied, material would have survived.'),
   ('Correct: There is not evidence of textile production.',
    'There is no evidence of textile production.'),
   ('Invert: If it had been there, it would have survived.',
    'Had it been there, it would have survived.'),
   ('Correct: Had it been there, it would survive.',
    'Had it been there, it would have survived.'),
   ('Name the three questions.',
    'would it survive, would it be recovered, would it be recognised'),
   ('Why is the slogan sometimes false?',
    'because a well-posed absence is real evidence')],
  seen=[]),

 'L41': dict(
  title='Attributing a position and distancing yourself from it',
  also='attributive frames, concession, denial of entailment',
  pattern=[
   'Four devices, and together they let you give an opposing case its '
   'full strength without being read as holding it.',
   'The attributive frame opens a paragraph and governs everything '
   'after it: on this view, proponents argue, the case rests on, as '
   'its holders would put it. One frame covers five sentences, which '
   'is why it is the most economical device in argumentative English.',
   'The strongest version promises accuracy rather than agreement: a '
   'case that deserves to be stated as they state it. It buys the '
   'reader’s trust for the disagreement that comes later, and it '
   'costs one clause.',
   'The concession plus denial of entailment is the pair that does '
   'the real work: the acquisition was lawful, and it does not follow '
   'that the object is in the right place. You accept the fact and '
   'refuse the conclusion, which is much harder to answer than '
   'disputing the fact.',
   'The priority claim says which question has to be settled first: '
   'the dispute is prior to the question of title; the question of '
   'purpose comes before the question of entitlement. It is how you '
   'reframe without changing the subject.',
   'Punctuation matters here. According to them, title passed - comma '
   'after the frame. On this view, the museum is a trustee - comma '
   'again. The frame is an adverbial and takes one.'],
  errors=[
   'Omitting the frame, so that an examiner cannot tell whose view is '
   'being read and marks the whole paragraph as the candidate’s '
   'own. This is the single commonest reason a discussion essay reads '
   'as self-contradictory.',
   'According to them say that - a frame followed by a reporting '
   'verb. According to them takes a clause directly: according to '
   'them, title passed.',
   'Stating the opposing case as nobody holds it. We like having it '
   'is not the museums’ case, and an essay that answers it is '
   'arguing against nobody.'],
  items=[
   ('Attribute: Museums are trustees for everybody.',
    'On this view, museums are trustees for everybody.'),
   ('Attribute: The transfer was not consensual.',
    'Proponents of return argue that the transfer was not '
    'consensual.'),
   ('Concede and deny the entailment: it was legal.',
    'It was lawful, and it does not follow that it was right.'),
   ('Reframe: the real question is what a museum is for.',
    'The question of purpose is prior to the question of title.'),
   ('Correct: According to them say the title passed.',
    'According to them, title passed.'),
   ('Promise accuracy, not agreement.',
    'a case that deserves to be stated as they state it'),
   ('Attribute a safety claim to a museum.',
    'The holding institutions argue that the object is safer where '
    'it is.'),
   ('Why frame at all?',
    'so the reader can tell whose view they are reading')],
  seen=[]),
}

WRITING = {

 'W1': dict(
  title='Task 1 General Training: the letter',
  also='formal letter, semi-formal letter, letter of request, letter of complaint',
  pattern=[
   'Read the three bullet points before you read the situation. They are '
   'the mark scheme. An answer that covers two of them fully and the '
   'third in half a sentence cannot reach band 6 on Task Achievement, '
   'however well it is written, and this is the commonest reason a good '
   'letter is marked at 5.5.',
   'Decide the relationship, because it fixes everything else. You know '
   'the name and you have dealt with them: semi-formal, Dear Dr Ahmed, '
   'contractions avoided but not hunted. You do not know the name: '
   'formal, Dear Sir or Madam, Yours faithfully. A friend: informal, and '
   'in this volume that is the rarest of the three.',
   'Open with the purpose in one sentence - I am writing to ask whether, '
   'I am writing to complain about, I am writing to apply for. Do not '
   'open by explaining who you are: the next sentence does that, and the '
   'reader of a complaint wants the complaint first.',
   'Give one paragraph to each bullet, in the order the bullets give '
   'them. The examiner reads with the bullets beside them, so a '
   'reordered answer costs nothing but the time it takes them to check, '
   'and an answer in order costs nothing at all.',
   'Close by saying what you want to happen. A complaint that asks for '
   'nothing has not complained; a request that does not say what a reply '
   'should contain invites a reply that does not contain it.',
   'Sign off to match the opening. Dear Sir or Madam goes with Yours '
   'faithfully; a name goes with Yours sincerely; a friend goes with '
   'Best wishes. One hundred and fifty words is the minimum and about a '
   'hundred and eighty is comfortable.'],
  errors=[
   'Covering the third bullet in half a sentence. It is usually the '
   'bullet that asks for something awkward - what you want done, or what '
   'you would accept instead - which is exactly why it is there.',
   'Mixing registers: Dear Sir or Madam followed by I was gutted. An '
   'examiner reads tone as one decision, so a single informal phrase in '
   'a formal letter is more visible than six grammar slips.',
   'Writing the situation back to the reader. The reader was there. Half '
   'a page restating it is half a page not spent on the bullets.'],
  items=[
   ('You do not know the reader’s name. Open and close.',
    'Dear Sir or Madam ... Yours faithfully'),
   ('You know the name. Close.', 'Yours sincerely'),
   ('Open formally: you want to know whether a refund is possible.',
    'I am writing to ask whether a refund is possible in these '
    'circumstances.'),
   ('Open a complaint about a delivery three weeks late.',
    'I am writing to complain about a delivery that is now three weeks '
    'overdue.'),
   ('How many bullets must be covered, and how?',
    'all three, each with its own paragraph'),
   ('Rewrite informally: I should be grateful if you could advise me.',
    'Could you let me know?'),
   ('Rewrite formally: I want my money back.',
    'I should be grateful if the fee could be refunded.'),
   ('Close by saying what you want to happen.',
    'I should be grateful if you would confirm in writing that the '
    'charge has been cancelled.')],
  seen=[]),

 'W2': dict(
  title='Task 1 Academic: a chart or a table',
  also='bar chart, line graph, pie chart, table, describing data',
  pattern=[
   'Spend the first two minutes on the axes, not on the shape. What is '
   'measured, in what units, over what period, for which groups. A '
   'confident answer about the wrong units scores below a hesitant '
   'answer about the right ones.',
   'Write four paragraphs. One: what the visual shows, in your own '
   'words, with no numbers at all. Two: the overview, which is the '
   'largest pattern and the paragraph that decides the band. Three and '
   'four: support, two or three figures each, chosen because they '
   'illustrate the overview rather than because they come first on the '
   'page.',
   'An overview is never a list. It is one of four shapes: everything '
   'rose and one thing did not; two groups diverged; the ranking held '
   'while the totals changed; the gap closed. Find the shape, write it '
   'in one sentence, and the rest of the answer has somewhere to go.',
   'Quote selectively. About six well-chosen figures read as a '
   'description; twenty read as a transcription, and Coherence is marked '
   'down for it. Round where rounding is honest - just over a third, '
   'nearly twice as many - and be exact where the exact figure is the '
   'point.',
   'Use the language of change for a time series (rose, fell, levelled '
   'off, more than doubled) and the language of comparison for a '
   'snapshot (twice as many, the largest share, roughly equal). Mixing '
   'them is the clearest sign a candidate has not read the axis.',
   'Never explain why. Task 1 Academic asks what the data shows. A '
   'sentence beginning This is probably because earns nothing and costs '
   'the words the overview needed.'],
  errors=[
   'No overview. An answer accurate in every detail and without an '
   'overview paragraph is capped at band 5 on Task Achievement, and it '
   'is the commonest capped answer in the paper.',
   'Describing each series in turn, one paragraph each. It feels '
   'organised and reads as a list, because nothing in it says what the '
   'data as a whole does.',
   'Confusing per cent with percentage point. A share moving from 20 to '
   '25 has risen by five percentage points and by a quarter; both are '
   'true and they are not interchangeable.'],
  items=[
   ('How many paragraphs, and what are they?',
    'four: what it shows, the overview, two of support'),
   ('Which paragraph decides the band?', 'the overview'),
   ('A share moves from 20% to 25%. Two correct descriptions.',
    'up five percentage points; up by a quarter'),
   ('Rewrite with the language of change: the figure was higher in 2020.',
    'the figure rose to a peak in 2020'),
   ('Rewrite with the language of comparison: Spain 40, France 20.',
    'Spain had twice as many as France'),
   ('Should you explain the cause?',
    'no - Task 1 Academic asks what the data shows'),
   ('Write the overview shape: all rose except one.',
    'every category rose over the period, with the single exception of X'),
   ('About how many figures belong in one answer?',
    'about six, chosen to illustrate the overview')],
  seen=[]),

 'W3': dict(
  title='Task 1 Academic: a process, a map or a hybrid',
  also='diagram, flow chart, plan, two visuals, mixed visuals',
  pattern=[
   'A process has no numbers and so no overview of size. Its overview is '
   'the count and the kind: a six-stage process running from raw '
   'material to finished product, of which four stages are mechanical '
   'and two are manual.',
   'Describe a process in the present simple passive, because the agent '
   'is not the point: the pulp is heated, the sheets are pressed, the '
   'product is stored. Sequence it with the plain markers - first, next, '
   'once this is complete, finally - and do not promote them to '
   'subsequently and thereupon, which read as decoration.',
   'A map or plan is a before and after, so its overview is the single '
   'largest change: the site changed from agricultural to residential '
   'use, with the two farm buildings retained. Then take one frame - the '
   'compass, or a landmark - and keep it: to the north, along the '
   'eastern boundary, opposite the station.',
   'A hybrid gives two or three visuals of different kinds. One '
   'paragraph each produces three accurate descriptions and no answer. '
   'The overview of a hybrid is a relationship between the visuals, and '
   'relationships are not visible: ask what the second visual tells you '
   'about the first, and write the answer to that as your overview.',
   'In a hybrid, attribute every figure to its source - according to the '
   'table, the chart shows, while the diagram gives. It costs four words '
   'a sentence and it is the clearest signal that you have understood '
   'the task rather than described the page.',
   'Tenses follow the labels, not the task. A map dated 1990 and 2020 '
   'takes the past for both; a plan labelled now and proposed takes the '
   'present and will or is to be.'],
  errors=[
   'Writing a process in the active with an invented agent: workers then '
   'heat the pulp. Nothing on the diagram says who does it, and the '
   'passive is the structure that lets you avoid inventing.',
   'Giving each visual of a hybrid its own paragraph and stopping. Three '
   'descriptions are not an answer to a question asked once.',
   'Changing frame halfway through a map - two sentences by compass, then '
   'two by what is near the river. The reader loses the site, and the '
   'Coherence mark goes with it.'],
  items=[
   ('Rewrite in the passive: workers heat the pulp.',
    'the pulp is heated'),
   ('Rewrite in the passive: the machine presses the sheets.',
    'the sheets are pressed'),
   ('What is the overview of a process?',
    'the number of stages and their kind, from input to output'),
   ('What is the overview of a map?',
    'the single largest change between the two states'),
   ('What is the overview of a hybrid?',
    'a relationship between the two visuals'),
   ('Attribute a figure to a table in four words.',
    'according to the table'),
   ('A plan is labelled now and proposed. Which tenses?',
    'present for now, will or is to be for proposed'),
   ('Sequence four stages without decoration.',
    'first, next, once this is complete, finally')],
  seen=[]),

 'W4': dict(
  title='Task 2: the five question forms, and what each one asks',
  also='essay types, opinion, discussion, problem and solution, two-part, '
       'evaluate a claim',
  pattern=[
   'Every Task 2 question is one of five forms, and the form tells you '
   'the shape of the answer. Read the instruction line, not the topic: '
   'the topic decides your content and the instruction decides your '
   'structure, and candidates who read only the topic write the same '
   'essay every time.',
   'To what extent do you agree or disagree - an opinion essay. Take a '
   'position in the introduction, hold it for both body paragraphs, and '
   'concede one point to the other side inside your own argument rather '
   'than in a paragraph of its own. A balanced answer to this form is an '
   'answer that has not answered.',
   'Discuss both views and give your own opinion - a discussion essay. '
   'One body paragraph for each view, fairly, and then your own opinion '
   'in the conclusion, where it must be one of the two or a stated third '
   'position. The commonest failure is giving no opinion at all, because '
   'the first two paragraphs felt like the whole task.',
   'What are the causes and what can be done - a problem and solution '
   'essay. One paragraph of causes and one of solutions, with the '
   'solutions matched to the causes you named. A solution that answers a '
   'cause you did not mention reads as a list of good ideas.',
   'A two-part question asks two things in two sentences - why is this '
   'happening, and is it a positive development. Answer both, give each '
   'a paragraph, and in the conclusion say which of the two answers '
   'matters more. Answering one of the two is capped at band 5 on Task '
   'Response however good the answer is.',
   'Evaluate this claim - the form this volume ends on. The claim is not '
   'true or false in itself: it is true relative to a standard. Name the '
   'standard in the introduction, follow one standard in each body '
   'paragraph, and in the conclusion say which standard you adopt and '
   'why. Your position is a position about the standard.',
   'Two hundred and fifty words is the minimum for every form. Between '
   'two hundred and seventy and three hundred is comfortable; four '
   'hundred is a Coherence risk, not a bonus.'],
  errors=[
   'Writing a balanced essay for an agree-or-disagree question. The form '
   'asks for a position and the band descriptors ask for a clear '
   'position throughout; two fair paragraphs and a fence-sitting '
   'conclusion is the single commonest band-5.5 essay.',
   'Answering only the first half of a two-part question. The second '
   'sentence of the prompt is a separate task and it carries the same '
   'weight.',
   'Giving the conclusion a new idea. A conclusion restates the position '
   'and says what follows from it. A new argument in the last three '
   'lines has nowhere to be developed and reads as an answer that ran '
   'out of plan.'],
  items=[
   ('To what extent do you agree? What shape?',
    'take one position and hold it; concede inside your own argument'),
   ('Discuss both views and give your own opinion. Where does the '
    'opinion go?', 'in the conclusion, and it must be stated'),
   ('Causes and solutions: what must match?',
    'each solution must answer a cause you named'),
   ('A two-part question. What is capped at band 5?',
    'answering only one of the two parts'),
   ('Evaluate this claim: what goes in the introduction?',
    'the standard, or the two standards, the claim can be judged by'),
   ('What is the minimum length?', '250 words'),
   ('What belongs in a conclusion?',
    'the position restated and what follows from it - no new idea'),
   ('Which line of the prompt decides your structure?',
    'the instruction line, not the topic')],
  seen=[]),

 'W5': dict(
  title='Task 2: the paragraph that develops',
  also='body paragraph, topic sentence, development, examples',
  pattern=[
   'A body paragraph has four moves and they are always in this order: '
   'the claim, the reason, the illustration, and the link back to the '
   'question. Four sentences is enough and six is plenty. A paragraph '
   'that is missing the fourth move is the commonest thing in a '
   'band-5.5 essay, because the writer can see the link and assumes the '
   'reader can.',
   'The claim is one sentence and it is the paragraph in miniature. If '
   'your topic sentence could open any paragraph in the essay, it is not '
   'a claim; it is a heading.',
   'The reason is the sentence candidates skip. It answers why the claim '
   'is true, and it is where the marks for development are: an example '
   'with no reason in front of it is evidence for something unstated.',
   'The illustration can be specific without being verifiable. For '
   'instance, a city that introduced a congestion charge is better than '
   'for instance, London in 2003, if you are not sure of the year, '
   'because an invented fact that is wrong does more damage than a '
   'general one that is right.',
   'The link back uses the question’s own words once. Not in '
   'conclusion, not therefore we can see, but which is why the cost '
   'falls on the people least able to carry it - the phrase from the '
   'prompt, put to work.',
   'Two developed paragraphs beat three thin ones at every band. If you '
   'are running out of time, finish the paragraph you are in rather than '
   'starting another.'],
  errors=[
   'A topic sentence that is a topic: Another important point is '
   'education. That names the subject and makes no claim, so nothing in '
   'the paragraph can support it.',
   'Example without reason. Three sentences of example after a claim '
   'look like development and are marked as repetition, because the '
   'paragraph never says why.',
   'Listing. Four short claims in one paragraph, none developed, is the '
   'shape that produces a long essay and a 5.5: the descriptors reward '
   'development, not coverage.'],
  items=[
   ('Name the four moves of a body paragraph.',
    'claim, reason, illustration, link back'),
   ('Which move do candidates most often skip?', 'the reason'),
   ('Rewrite as a claim: Another important point is education.',
    'Education is the lever that works fastest, because it changes '
    'behaviour before the next generation inherits it.'),
   ('How specific should an illustration be?',
    'specific in kind, and only as specific in fact as you are sure of'),
   ('How does the link back avoid sounding mechanical?',
    'it uses the question’s own words once, inside a sentence of '
    'your own'),
   ('Two developed paragraphs or three thin ones?',
    'two developed, at every band'),
   ('You have four minutes left and are mid-paragraph. What do you do?',
    'finish that paragraph rather than start another'),
   ('How long is a body paragraph, in sentences?',
    'four is enough, six is plenty')],
  seen=[]),

 'W6': dict(
  title='Task 2: five minutes of planning',
  also='brainstorming, outlining, idea selection, time management',
  pattern=[
   'Spend five of the forty minutes planning and you will finish. Spend '
   'none and you will write two paragraphs twice. The plan is not an '
   'essay in note form: it is four decisions.',
   'Decision one, the form. Read the instruction line and name the form - '
   'opinion, discussion, causes and solutions, two-part, evaluate. '
   'Everything else follows from it.',
   'Decision two, generate. Write down every idea you have, badly, for '
   'ninety seconds. Six to ten is normal. Do not judge them while you '
   'are generating, because the judging stops the generating, and the '
   'idea you need is usually the fifth.',
   'Decision three, discard. Apply six tests and keep two ideas. Does it '
   'answer the question as asked? Can I give a reason for it? Can I '
   'illustrate it? Is it different from my other idea, not a restatement '
   'of it? Can it be developed in four sentences? Is it one I can write '
   'in English I control? An idea that fails any of the six costs more '
   'than it is worth.',
   'Decision four, order. Put the stronger idea second, because the '
   'reader finishes there and the conclusion is next to it. The only '
   'exception is where the first idea is a premise the second needs.',
   'Write the plan as four lines in the margin and then do not look at '
   'it again until you reach the conclusion. A plan consulted every '
   'paragraph becomes an outline you are transcribing, and transcription '
   'reads flat.'],
  errors=[
   'Judging while generating. Two ideas, both cautious, and a stuck '
   'writer at minute eight. Generate first and badly; discard second and '
   'ruthlessly.',
   'Keeping two ideas that are one idea. People would be healthier and '
   'the health service would cost less is one idea twice, and the second '
   'paragraph will repeat the first with different nouns.',
   'Planning content and not form. A list of ideas with no decision '
   'about the shape of the answer leaves the hardest decision for minute '
   'thirty-five, when there is no time to take it.'],
  items=[
   ('How long should planning take?', 'about five minutes of the forty'),
   ('Name the four decisions.', 'form, generate, discard, order'),
   ('How many ideas should you generate?', 'six to ten, quickly and badly'),
   ('How many do you keep?', 'two'),
   ('Give three of the six discard tests.',
    'does it answer the question; can I give a reason; is it different '
    'from my other idea'),
   ('Where does the stronger idea go?',
    'second, next to the conclusion'),
   ('When is the weaker idea first legitimately?',
    'when it is a premise the stronger one needs'),
   ('Why is "people would be healthier and the service would cost less" '
    'a bad pair?', 'it is one idea stated twice')],
  seen=[]),
}

SPEAKING = {

 'S1': dict(
  title='Part 1: the two-sentence answer',
  also='introduction, familiar topics, short questions, four to five minutes',
  pattern=[
   'Part 1 lasts four to five minutes and asks about you - where you '
   'live, what you do, what you like. The questions are easy and that '
   'is the trap: a candidate who answers them in three words sounds '
   'like a candidate who cannot say more, and a candidate who answers '
   'them for ninety seconds is interrupted.',
   'Answer in two sentences. The first answers the question directly. '
   'The second adds a reason, a detail or a contrast. Do you enjoy '
   'cooking? Not really, no. I can manage about four dishes and I make '
   'all four of them too often.',
   'Do not rehearse. Part 1 answers that have been learnt are '
   'recognisable within two sentences, because they are fluent in a way '
   'the rest of the test is not, and an examiner who hears a rehearsed '
   'answer discounts the fluency it shows.',
   'Say I do not know when you do not, and then say something anyway: I '
   'have never thought about it, but I suppose it would be the quiet. '
   'That sentence is worth more than a confident irrelevance, because '
   'it is a sentence nobody could have prepared.',
   'The examiner will not help you. If a question does not land, say '
   'sorry, do you mean X or Y - once. This is a legitimate move in Part '
   '1 and it is not a mark against you.',
   'Vocabulary from your own life beats vocabulary from a list. Name '
   'the dish, the street, the subject. A specific noun in Part 1 is the '
   'cheapest Lexical Resource mark in the test.'],
  errors=[
   'The three-word answer. Yes, I do. The question is answered and '
   'nothing has been shown, and Part 1 is four minutes of nothing if '
   'every answer is like that.',
   'The ninety-second answer. The examiner has nine questions to ask '
   'and will interrupt, and being interrupted twice costs you the '
   'Fluency mark you were trying to earn.',
   'The rehearsed paragraph. It is audible, and the examiner '
   'compensates by weighting Parts 2 and 3 more heavily, which is the '
   'opposite of what the candidate wanted.'],
  items=[
   ('How long is Part 1?', 'four to five minutes'),
   ('How long should an answer be?',
    'two sentences: the answer, then a reason or detail'),
   ('Answer in two sentences: Do you enjoy cooking?',
    'Not really. I can manage about four dishes and I make all four of '
    'them too often.'),
   ('You do not understand the question. What do you say?',
    'Sorry, do you mean X or Y? - once'),
   ('You have no opinion. What do you say?',
    'I have never thought about it, but I suppose...'),
   ('Why is a rehearsed answer a problem?',
    'it is audible, and it makes the examiner discount the fluency'),
   ('What is the cheapest vocabulary mark in Part 1?',
    'a specific noun from your own life'),
   ('Will the examiner help you if you dry up?',
    'no - they move to the next question')],
  seen=[]),

 'S2': dict(
  title='Part 2: the long turn',
  also='the card, two minutes, one minute to prepare, cue card',
  pattern=[
   'You get a card, one minute with paper and pencil, and then you talk '
   'for one to two minutes without interruption. The examiner stops you '
   'at two minutes. Talking for seventy seconds is the commonest Part 2 '
   'and it costs a band on Fluency.',
   'Use the minute on the last line of the card, not the first. The '
   'card has three bullets and then a line beginning and explain why, or '
   'and say how you felt. That last line is where the development marks '
   'are and it is the line candidates run out of time to reach.',
   'Write four words, not sentences. One per bullet and one for the last '
   'line. Sentences written in the minute get read aloud, and read-aloud '
   'English is flat and slow.',
   'Choose a real example, even if it is not the best one. The card asks '
   'you to describe a time you helped someone, and a small real occasion '
   'you remember produces specific detail; an impressive invented one '
   'produces generalities and runs dry at forty seconds.',
   'Narrate in the past and signpost plainly: this was about three years '
   'ago, the reason I remember it, the thing I did not expect. Four '
   'signposts in two minutes is enough structure for the examiner to '
   'follow and for you to find your way back if you lose the thread.',
   'If you reach the end of the card with time left, answer the last '
   'line again at greater depth, or say what you would do differently. '
   'Do not stop early and do not ask whether that is enough.'],
  errors=[
   'Finishing at seventy seconds. The descriptors reward a sustained '
   'long turn, and the one skill Part 2 tests is keeping going.',
   'Spending the minute on the first bullet. The last line of the card '
   'carries the development, and an answer that never reaches it has '
   'answered the easy part of the question.',
   'Choosing an impressive topic over a remembered one. Invented '
   'examples have no detail in them, and detail is what two minutes '
   'needs.'],
  items=[
   ('How long do you speak?', 'one to two minutes, until the examiner '
    'stops you'),
   ('What do you do with the preparation minute?',
    'write four words, one per bullet and one for the last line'),
   ('Which line of the card matters most?',
    'the last one - and explain why, or and say how you felt'),
   ('Why write words and not sentences?',
    'sentences get read aloud, and read-aloud English is flat'),
   ('Real example or impressive example?',
    'real - it has detail in it'),
   ('You reach the end of the card at ninety seconds. What now?',
    'answer the last line again at greater depth'),
   ('Give three plain signposts for a narrative.',
    'this was about three years ago; the reason I remember it; the thing '
    'I did not expect'),
   ('What is the one skill Part 2 tests?', 'keeping going'),
   ],
  seen=[]),

 'S3': dict(
  title='Part 3: the abstract discussion',
  also='follow-up questions, four to five minutes, half-agreement, '
       'speculation',
  pattern=[
   'Part 3 moves from your life to the general question behind it, '
   'lasts four to five minutes, and is where the band is decided, '
   'because it is the only part where you have to think in English '
   'rather than remember in it.',
   'Answer in three moves: position, reason, example or limit. Do you '
   'think governments should fund sport? Up to a point, yes. The '
   'argument that persuades me is the public health one, because it is '
   'the only benefit that reaches people who never watch. Where I would '
   'stop is stadium funding.',
   'Half-agreement is the most useful habit in Part 3 and the one '
   'candidates arrive without. Up to a point; in some contexts; that is '
   'true of X but not of Y. It shows the grammar of qualification and it '
   'keeps you honest, which is easier to sustain than a position you do '
   'not hold.',
   'Speculate when asked to. Many Part 3 questions are about the future '
   'or about what would happen, and they want the conditional: I imagine '
   'what would happen is, my guess is that, it would depend on whether. '
   'A flat present-tense answer to a hypothetical question reads as a '
   'misunderstanding.',
   'Say what the question depends on when it depends on something. It '
   'depends what you mean by successful - and then answer for each '
   'meaning. That is four words of qualification and a whole band of '
   'difference, and it is the Part 3 version of the Task 2 standard.',
   'You may disagree with the examiner, and in Part 3 it is often the '
   'better answer. They are not stating a view; they are giving you '
   'something to push against.'],
  errors=[
   'Answering a general question with a personal anecdote. Part 3 has '
   'left your life behind; an answer that returns to it is answering '
   'Part 1 again.',
   'Taking a strong position you cannot defend for ninety seconds, '
   'because it sounded decisive. Half-agreement is both easier and '
   'better marked.',
   'Answering a hypothetical in the present simple. If sport were free, '
   'more children play is a grammar error in the one place the examiner '
   'is listening for the structure.'],
  items=[
   ('Name the three moves of a Part 3 answer.',
    'position, reason, example or limit'),
   ('Give three ways to half-agree.',
    'up to a point; in some contexts; that is true of X but not of Y'),
   ('The question is hypothetical. Which structures?',
    'the conditional: it would depend on whether; I imagine what would '
    'happen is'),
   ('The question turns on a vague word. What do you say?',
    'It depends what you mean by X - and then answer for each meaning'),
   ('May you disagree with the examiner?',
    'yes, and it is often the better answer'),
   ('Why is a personal anecdote wrong here?',
    'Part 3 asks the general question, not your experience'),
   ('Correct: If sport were free, more children play.',
    'If sport were free, more children would play'),
   ('Which part decides the band, and why?',
    'Part 3 - it is the only part where you think in English rather than '
    'remember in it')],
  seen=[]),

 'S4': dict(
  title='Across all three parts: fluency, repair and pronunciation',
  also='hesitation, self-correction, intonation, stress, recording yourself',
  pattern=[
   'Fluency is not speed. It is the absence of the kind of pause that '
   'makes a listener work. A slow speaker who pauses between sentences '
   'is fluent; a fast speaker who pauses in the middle of every clause '
   'is not, and the second is the commoner problem at band 6.',
   'Learn two repair phrases and use them: what I mean is, or rather. '
   'A self-correction made out loud and finished is marked as range, '
   'not as error. An abandoned sentence is marked as a breakdown, and '
   'the difference between them is four words.',
   'Buy time with content, not with noise. The honest answer is that I '
   'am not sure, but is a sentence. Er, hmm, how can I say is not, and '
   'three of them in a minute is what the descriptors call noticeable '
   'hesitation.',
   'Pronunciation is marked on whether you are understood without '
   'effort, not on whether you sound British. Two things carry most of '
   'it: word stress on long words, because the wrong stress makes a '
   'known word unrecognisable, and sentence stress, because stressing '
   'the content words is what makes a long sentence followable.',
   'Intonation does grammatical work in English. A rising tone on a '
   'statement turns it into a question, which in Part 3 makes a position '
   'sound like a guess. Fall at the end of a statement you mean.',
   'Record yourself once a week and listen to the whole thing. Nobody '
   'can rate their own speaking from memory, and the gap between what '
   'you meant to say and what you said is exactly what the examiner '
   'hears. It is the single most useful hour in a week of preparation.'],
  errors=[
   'Abandoning sentences. Starting again from the subject three times in '
   'a minute is marked as breakdown even when each attempt is better '
   'than the last. Finish the sentence, then correct it with what I mean '
   'is.',
   'Filling pauses with noise. Er and hmm are heard as hesitation; a '
   'sentence about not being sure is heard as language.',
   'Speaking faster to sound fluent. It increases mid-clause pausing and '
   'damages pronunciation at the same time, which is two criteria for '
   'the price of one.'],
  items=[
   ('Is fluency speed?', 'no - it is the absence of pauses that make a '
    'listener work'),
   ('Give two repair phrases.', 'what I mean is; or rather'),
   ('How is a finished self-correction marked?', 'as range, not error'),
   ('How is an abandoned sentence marked?', 'as a breakdown'),
   ('Buy two seconds with content.',
    'The honest answer is that I am not sure, but...'),
   ('Which two kinds of stress carry pronunciation?',
    'word stress on long words, and sentence stress on content words'),
   ('What does a rising tone do to a statement?',
    'turns it into a question, so a position sounds like a guess'),
   ('What is the single most useful preparation hour in a week?',
    'recording yourself and listening to the whole thing')],
  seen=[]),
}
