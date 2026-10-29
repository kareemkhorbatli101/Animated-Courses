# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 091-096 (completes the task to 100)."""
from _kit import ad


def P(a, b, c):
    return [('P1', 'Find the axis of disagreement', a),
            ('P2', 'Prime the vocabulary', b),
            ('P3', 'Write it before you read it', c)]


def F(a, b):
    return [('F1', 'Take the answer apart', a),
            ('F2', 'Harvest the language', b),
            ('F3', 'Why this is a 5 and that is a 3',
             ['Name the three things that hold the response below at band 3.'])]


ITEMS = [

ad('AD 091', 'Neuroscience · agree / disagree',
   ('distinguish a finding from the claim built on it',
    'hedged reporting verbs', 'correlate, localisation, inference, construct',
    'assessing what an imaging result shows'),
   'Dr Brennan',
   'Brain imaging studies are often reported as showing that a mental '
   'state "is" a particular pattern of activity. Critics argue this '
   'confuses correlation with identity and that the inference from image '
   'to mind is far weaker than the headlines suggest. Is the criticism '
   'fair?',
   [('Ravi', 'It is fair about the reporting and unfair about the '
     'science. No one in the field claims an image shows a thought. They '
     'claim a region’s activity covaries with a task.'),
    ('Sofia', 'Then why are the papers titled the way they are? If a '
     'discipline systematically publishes under claims it does not hold, '
     'the overclaiming is not only journalism.')],
   P(['a.  Ravi and Sofia agree about the inference. What do they '
      'disagree about?',
      'b.  Why is reverse inference the central problem here?'],
     ['a.  What does it mean for two things to covary, and what is '
      'localisation?',
      'b.  What is a psychological construct?'],
     ['State your position in one sentence about what an image '
      'supports.']),
   ['Ravi is right about what the field claims and Sofia is right that '
    'the claim and the publication are not the same thing.',
    'The methodological point is not in dispute. An image shows that '
    'activity in a region covaries with performance of a task, which '
    'licenses no statement about what the region does and certainly none '
    'about identity. The fallacy is reverse inference: observing that a '
    'region activates during fear does not entitle anyone to read fear '
    'off activation in that region, because the same region activates '
    'during a dozen other things.',
    'Sofia’s complaint survives that concession. A title reading '
    '"the brain’s fear centre" is a claim, whoever wrote it, and the '
    'authors approved it. It is reported as established what the methods '
    'section carefully declines to assert, and the gap between the two is '
    'not journalism.',
    'So the criticism is fair against the literature as published and '
    'unfair against the inference as practised. Those are different '
    'targets, and treating them as one is what lets each side feel '
    'vindicated — the researchers point at their methods and the '
    'critics at the titles, and both are looking at something real.'],
   F(['a.  The response agrees with both speakers. Why is that not '
      'fence-sitting?',
      'b.  Why does it define reverse inference rather than just name the '
      'problem?'],
     ['a.  "It is reported as established what the methods section '
      'carefully declines to assert" — why the passive reporting '
      'verb?',
      'b.  "both are looking at something real" — what does this '
      'resolve?']),
   ['I agree with the critics because the media often exaggerates '
    'scientific findings and gives people a false impression of what '
    'neuroscience can actually do. Many popular articles claim that '
    'scientists can read our minds or detect lies from brain scans, which '
    'is not true. However I also think brain imaging is a very valuable '
    'tool that has taught us a great deal about the brain. Ravi is right '
    'that scientists themselves are usually more careful than '
    'journalists.'],
   [('P1', [['a.  Where responsibility for the overclaiming lies. Ravi '
             'locates it in reporting; Sofia argues the literature itself '
             'is published under claims it does not support.'],
            ['b.  Because it is the step that turns a legitimate finding '
             'into an illegitimate conclusion — inferring the mental '
             'state from the activation rather than the activation from '
             'the state.']]),
    ('P2', [['a.  To covary is to vary together without any claim about '
             'cause; localisation is the attribution of a function to a '
             'particular region.'],
            ['b.  A theoretical entity like attention or fear, defined by '
             'how it is measured rather than observed directly — '
             'which is part of why the inference is so fragile.']]),
    ('P3', [['Model: "An image supports a statement that activity covaried '
             'with a task, and nothing about what the region is for."']]),
    ('F1', [['a.  Because it identifies that they are making claims about '
             'different objects — the inference as practised and the '
             'literature as published — and says so explicitly. '
             'Fence-sitting would be saying both have a point without '
             'locating where.'],
            ['b.  Because the whole dispute turns on one inferential step, '
             'and naming it without explaining it leaves the reader unable '
             'to see why the criticism bites. The definition is doing the '
             'argumentative work.']]),
    ('F2', [['a.  It keeps the sentence on what the publication asserts '
             'rather than on who asserted it, which is the point: the '
             'overclaiming is a property of the literature regardless of '
             'whether the author or the editor wrote the title.'],
            ['b.  It states the diagnosis in one clause: the two sides are '
             'describing different parts of the same practice, so the '
             'disagreement is not about facts. That explains the '
             'persistence of the dispute rather than just adjudicating '
             'it.']]),
    ('F3', [['1.  The response is about media exaggeration, which both '
             'speakers already agree on, so it contributes nothing to the '
             'point at issue.'],
            ['2.  Sofia’s specific claim — that the papers '
             'themselves are titled as overclaims — is never '
             'addressed.'],
            ['3.  "Brain imaging is a very valuable tool that has taught '
             'us a great deal" is a general endorsement standing in for a '
             'position on what an image supports.']])]),

ad('AD 092', 'Sport science · policy choice',
   ('choose the rule whose enforcement is possible',
    'relative clauses with whose', 'eligibility, category, enforcement, threshold',
    'choosing a rule that must be administrable'),
   'Professor Adeyemi',
   'Competitive sport divides athletes into categories, but every boundary '
   'is contested. Some argue categories should track the trait that most '
   'affects performance; others that they should be simple, stable and '
   'cheap to administer, even at some cost in precision. Which principle '
   'should govern?',
   [('Ilse', 'Accuracy. A category that does not track performance is not '
     'a fair contest, and we have the measurement tools to do better than '
     'the crude divisions we inherited.'),
    ('Kwame', 'A rule whose application requires a panel and a laboratory '
     'is not a rule, it is a case-by-case judgement — and those get '
     'made by whoever has the best lawyer.')],
   P(['a.  Kwame is making an administrability argument. Why is that not '
      'merely practical?',
      'b.  What does a category in sport have to do besides be '
      'accurate?'],
     ['a.  What is eligibility, and what is a threshold?',
      'b.  What does administrability mean for a rule?'],
     ['Choose in one sentence that names the precision you give up.']),
   ['Kwame has the stronger principle, and the reason is that a rule '
    'nobody can apply consistently produces less fairness than a cruder '
    'rule applied the same way to everyone.',
    'Ilse is right that inherited categories are crude and that better '
    'measurement is available. Where a trait demonstrably dominates '
    'performance, a category ignoring it is not a contest in any '
    'meaningful sense, and defending tradition for its own sake is not '
    'an argument.',
    'But a category is not only a description; it is an instruction to '
    'officials. A rule whose application requires contested '
    'measurements, expert interpretation and a right of appeal will be '
    'applied differently in a national championship and a school meet, '
    'and the variation will track resources rather than physiology. '
    'That is a fairness cost, not an inconvenience, and it falls on '
    'exactly the athletes with least access to representation.',
    'So I would set categories on the smallest number of bright-line '
    'criteria that capture most of the performance difference, accept the '
    'unfairness at the margins, and publish the threshold with its '
    'justification. Ilse’s precision is worth having only where it '
    'can be delivered identically at every level of the sport, which in '
    'practice means rarely.'],
   F(['a.  The response treats administrability as a fairness question '
      'rather than a practical one. How does it get there?',
      'b.  Why does it insist on publishing the threshold with its '
      'justification?'],
     ['a.  "A rule whose application requires contested measurements" '
      '— what does the whose-clause contribute?',
      'b.  "accept the unfairness at the margins" — why state the '
      'cost so plainly?']),
   ['I think fairness is the most important principle in sport, so '
    'categories should be as accurate as possible and based on scientific '
    'evidence rather than tradition. Athletes train their whole lives and '
    'they deserve to compete on a level playing field. Of course this is a '
    'complicated and sensitive issue and there are no easy answers, but '
    'sports organisations should consult experts and make decisions based '
    'on the best available research rather than on public opinion or '
    'prejudice.'],
   [('P1', [['a.  Because a rule that cannot be applied uniformly '
             'produces different outcomes for similar athletes, and that '
             'is an unfairness of the same kind the accurate category was '
             'meant to remove.'],
            ['b.  It has to be applicable by officials with ordinary '
             'resources, stable enough to plan a career around, and '
             'resistant to litigation.']]),
    ('P2', [['a.  Eligibility is whether an athlete may compete in a '
             'category; a threshold is the value at which the boundary is '
             'drawn.'],
            ['b.  Whether it can be applied consistently by the people who '
             'must apply it, with the information actually available to '
             'them.']]),
    ('P3', [['Model: "Use the fewest bright-line criteria that capture '
             'most of the difference, accepting unfairness at the '
             'margins."']]),
    ('F1', [['a.  By showing that inconsistent application produces '
             'outcomes tracking resources rather than physiology. Once the '
             'variation is systematic and falls on the least represented '
             'athletes, it is a fairness defect rather than an '
             'administrative one.'],
            ['b.  Because a bright line that is admitted to be imprecise '
             'can be argued with and revised, while one presented as '
             'scientific invites endless litigation about the '
             'science. Publishing the reasoning is what makes a crude rule '
             'legitimate.']]),
    ('F2', [['a.  It attaches the disqualifying property to the rule in a '
             'single phrase, so the sentence can go straight to the '
             'consequence. It also echoes Kwame’s own construction, '
             'which marks the response as taking up his argument rather '
             'than restating it.'],
            ['b.  Because every option in this question is unfair to '
             'someone, and a position that hides its cost is not a '
             'position. Naming it also pre-empts the obvious objection and '
             'makes the comparison with Ilse’s option honest.']]),
    ('F3', [['1.  "There are no easy answers" and "consult experts" avoid '
             'the choice the prompt requires.'],
            ['2.  Kwame’s argument about enforcement is never '
             'engaged — "based on the best available research" is '
             'precisely the approach he says cannot be applied '
             'consistently.'],
            ['3.  "A level playing field" and "fairness is the most '
             'important principle" restate the problem as if it were the '
             'solution, with no criterion, threshold or trade-off '
             'anywhere.']])]),

ad('AD 093', 'Translation studies · value trade-off',
   ('weigh accuracy against the effect the original had',
    'as if / as though clauses', 'equivalence, domestication, register, idiom',
    'weighing literal accuracy against equivalent effect'),
   'Dr Haddad',
   'Translators choose between rendering a text closely, preserving its '
   'strangeness, and rendering it so that it reads as naturally as the '
   'original did to its first readers. The first respects the source; the '
   'second respects the reader. Which should take priority?',
   [('Pia', 'Closeness. A translation that smooths everything into fluent '
     'English tells the reader nothing about how the original thought. '
     'The strangeness is information.'),
    ('Dan', 'Strangeness the author did not put there is not information, '
     'it is noise. A joke that was funny in Polish and is merely odd in '
     'English has been mistranslated, however literally.')],
   P(['a.  Dan’s example is doing specific work. Why a joke?',
      'b.  Can both standards be met at once? Under what conditions?'],
     ['a.  What is equivalence, and what is domestication?',
      'b.  What is an idiom, and why is it the hard case?'],
     ['Take a position in one sentence that distinguishes two kinds of '
      'strangeness.']),
   ['Dan is right in the case he chooses and Pia is right about most '
    'other cases, and the distinction they are both missing is between '
    'strangeness that was there and strangeness the translation '
    'introduced.',
    'His joke argument is unanswerable on its own terms. Humour works by '
    'effect; a joke that lands as a curiosity has failed completely, and '
    'the literal words are no defence. The same holds for anything whose '
    'function is immediate — insults, slogans, the rhythm of '
    'speech.',
    'But most of a text is not like that. When a novel reads as though '
    'its narrator thinks in longer units than an English novelist would, '
    'that is a fact about the original and smoothing it away removes '
    'something the author did. Pia is right that fluency is not neutral: '
    'it is a choice that makes every literature sound like the '
    'translating one.',
    'So my position is that the translator should preserve strangeness '
    'that the original had and remove strangeness that only the '
    'translation creates. The test is whether a first reader would have '
    'found the passage odd. Where they would, keeping it is accuracy; '
    'where they would not, keeping it is a mistake wearing the clothes '
    'of fidelity.'],
   F(['a.  The response says both speakers are missing a distinction. '
      'What is it, and why does it dissolve the dispute?',
      'b.  Why does the second paragraph extend Dan’s point to '
      'insults and slogans?'],
     ['a.  "When a novel reads as though its narrator thinks in longer '
      'units" — what does the as though clause do?',
      'b.  "a mistake wearing the clothes of fidelity" — why this '
      'image?']),
   ['I think translators should try to be as faithful as possible to the '
    'original text because the author chose their words carefully and it '
    'is not the translator’s job to rewrite the book. At the same '
    'time the translation has to be readable, otherwise nobody will enjoy '
    'it. Dan gives a good example about jokes which shows that sometimes '
    'you have to change things. I think a good translator finds a balance '
    'between the two approaches depending on the text.'],
   [('P1', [['a.  Because humour is defined by its effect. It is the '
             'clearest case where literal accuracy and faithful '
             'translation come apart, so it is hard for Pia to absorb '
             'without qualification.'],
            ['b.  Yes, wherever the original was itself fluent and '
             'ordinary. The conflict only arises where the source is '
             'strange, and then the question is whose strangeness it '
             'is.']]),
    ('P2', [['a.  Equivalence is the relation a translation aims to have '
             'with its source; domestication is adapting a text to the '
             'target culture’s norms.'],
            ['b.  An expression whose meaning is not derivable from its '
             'parts. It is the hard case because literal rendering '
             'preserves the words and destroys the meaning.']]),
    ('P3', [['Model: "Keep the strangeness the original had and remove the '
             'strangeness the translation creates."']]),
    ('F1', [['a.  Between strangeness present in the source and '
             'strangeness produced by the act of translating. It dissolves '
             'the dispute because each speaker is right about one of those '
             'and they have been arguing as though there were only '
             'one.'],
            ['b.  Because a principle resting on one example looks like an '
             'exception. Extending it to everything whose function is '
             'immediate shows Dan has identified a category rather than a '
             'special case, which is what makes the concession '
             'substantial.']]),
    ('F2', [['a.  It describes an impression the prose creates rather '
             'than a fact about the narrator, which is exactly the right '
             'register for a claim about how a translated text reads. '
             'Asserting it directly would overstate.'],
            ['b.  Because it names the specific failure: not carelessness '
             'but a choice that presents itself as the careful one. That '
             'is the trap in Pia’s position, and the image makes it '
             'memorable without accusing her of anything.']]),
    ('F3', [['1.  "A good translator finds a balance depending on the '
             'text" is the conclusion the question asks to be argued for, '
             'offered as if it were an argument.'],
            ['2.  Pia’s claim that fluency is not neutral — the '
             'most interesting thing said — is not engaged at all.'],
            ['3.  No criterion for when to depart from the words, so the '
             '"balance" cannot be applied to any actual case.']])]),

ad('AD 094', 'Operations research · agree / disagree',
   ('question what an optimum is defined over',
    'relative clauses with for which', 'objective function, constraint, optimum, robustness',
    'questioning the objective rather than the solution'),
   'Professor Zhou',
   'Scheduling algorithms now allocate shifts in hospitals, warehouses and '
   'call centres, producing rosters that are provably optimal against '
   'stated objectives. Critics say the results are nonetheless worse for '
   'the people working them. Can both be true?',
   [('Nina', 'Of course both are true. The optimum is optimal for the '
     'objective someone wrote down, and nobody wrote down "a life".'),
    ('Pavel', 'Then the fix is to write better objectives, not to '
     'abandon optimisation. Hand-made rosters were optimal for whoever '
     'was friends with the supervisor.')],
   P(['a.  Pavel concedes the criticism. What is his counter-claim?',
      'b.  Why might some objectives be hard to write down at all?'],
     ['a.  What is an objective function, and what is a constraint?',
      'b.  What does robustness mean for a schedule?'],
     ['State your position in one sentence about what optimisation can '
      'and cannot fix.']),
   ['Both are true, and Pavel’s remedy is right about the method '
    'and incomplete about what it can reach.',
    'Nina’s diagnosis is exact. An optimum is only ever optimal for '
    'the function it was given, and the things a roster destroys '
    '— predictability, the ability to arrange childcare, a weekend '
    'that coincides with somebody else’s — are not usually in '
    'the function. They are not excluded deliberately; they are absent '
    'because nobody could cost them, and anything uncosted becomes a free '
    'variable the solver will spend.',
    'His reply is still substantially right. The comparison is not with '
    'a perfect roster but with a human one, which was optimal for '
    'convenience and favour, and many of these preferences can in fact be '
    'written down: no shift pattern for which an employee has less than '
    'eleven hours between shifts, two consecutive days off a fortnight, '
    'stability of the pattern itself.',
    'What his answer cannot reach is anything whose value is contextual '
    'rather than statable — which weekend matters to which person '
    'this month. So I would optimise against far more constraints and '
    'leave a block of shifts for workers to swap among themselves, '
    'because what cannot be written into the objective has to be left '
    'outside the solver rather than treated as having no value.'],
   F(['a.  The response accepts Nina’s diagnosis and Pavel’s '
      'remedy. Where does it go beyond both?',
      'b.  Why does it list specific constraints?'],
     ['a.  "no shift pattern for which an employee has less than eleven '
      'hours between shifts" — what does the for which clause '
      'contribute?',
      'b.  "anything uncosted becomes a free variable the solver will '
      'spend" — what does this explain?']),
   ['I agree that algorithms can produce bad results for workers because '
    'they only care about efficiency and not about human beings. '
    'Companies use these systems to maximise profit and minimise labour '
    'costs, which means unpredictable hours and stressful working '
    'conditions. Technology should serve people, not the other way round. '
    'Pavel says we should write better objectives but I think the real '
    'problem is that companies do not care about their employees, so they '
    'will never choose objectives that prioritise worker wellbeing.'],
   [('P1', [['a.  That the fault is in the objective rather than in '
             'optimisation, and that the alternative — human '
             'scheduling — was also optimising, for worse things.'],
            ['b.  Because some values are contextual: which particular '
             'weekend matters depends on circumstances the worker knows '
             'and the system cannot, so no general function captures '
             'them.']]),
    ('P2', [['a.  The objective function is the quantity being maximised '
             'or minimised; a constraint is a condition any admissible '
             'solution must satisfy.'],
            ['b.  How well it survives disruption — sickness, demand '
             'spikes — without cascading changes through everyone '
             'else’s shifts.']]),
    ('P3', [['Model: "Optimisation can absorb any preference that can be '
             'stated, so what cannot be stated must be left outside the '
             'solver."']]),
    ('F1', [['a.  In distinguishing preferences that can be written as '
             'constraints from those that cannot, and proposing that the '
             'second be handled by leaving slack for workers to allocate '
             'themselves. Neither speaker separates those.'],
            ['b.  Because Pavel’s claim that objectives can be '
             'improved is only persuasive if improvement is demonstrable. '
             'Three concrete constraints show the claim is not '
             'hand-waving, and they also mark where the list stops.']]),
    ('F2', [['a.  It lets a constraint be expressed as a property of the '
             'pattern itself, which is how such rules are actually '
             'written. The precision is the point: it shows the response '
             'knows what a constraint looks like rather than gesturing at '
             '"better objectives".'],
            ['b.  Why the harm is systematic rather than malicious. A '
             'solver does not neglect uncosted goods; it actively consumes '
             'them, because they are the cheapest thing available to '
             'trade. That is a stronger account than indifference.']]),
    ('F3', [['1.  "Companies do not care about their employees, so they '
             'will never choose better objectives" changes the subject '
             'from whether optimisation can accommodate the values to '
             'whether anyone wants it to.'],
            ['2.  "Technology should serve people, not the other way '
             'round" is a slogan where a mechanism was needed.'],
            ['3.  No distinction between statable and contextual '
             'preferences, no constraint, no proposal — and '
             'Pavel’s point that hand-made rosters favoured '
             'the supervisor’s friends is never answered.']])]),

ad('AD 095', 'Social policy · policy choice',
   ('choose by asking what each option assumes about people',
    'noun clauses as objects', 'conditionality, take-up, means test, stigma',
    'choosing between universal and targeted provision'),
   'Dr Ferris',
   'A government can provide free school meals to all children or only to '
   'those below an income threshold. Universal provision costs more and '
   'subsidises families who could pay; targeting directs money where it is '
   'needed but requires families to apply and be assessed. Which is '
   'better?',
   [('Grace', 'Target it. Every pound spent on a family that can afford '
     'lunch is a pound not spent on one that cannot. Universalism is how '
     'middle-class voters get subsidised.'),
    ('Idris', 'And a third of eligible families never claim. Means-tested '
     'meals reach fewer poor children than universal ones do, which makes '
     'targeting efficient on paper and worse in the hall.')],
   P(['a.  Idris does not dispute the arithmetic. What does he add?',
      'b.  Why is take-up a design question rather than an '
      'administrative detail?'],
     ['a.  What is a means test, and what is take-up?',
      'b.  What is conditionality in benefits policy?'],
     ['Choose in one sentence that names the cost you accept.']),
   ['Idris has the better argument, and it is not about generosity but '
    'about which policy delivers more meals to poor children per pound '
    'spent.',
    'Grace’s accounting is correct and incomplete. It assumes that '
    'targeting reaches the targeted, and the evidence is that it does '
    'not: application requires knowing about the scheme, producing '
    'documents, and declaring poverty to a school. Each step loses '
    'families, and the ones lost are disproportionately the most '
    'chaotic, which is to say the ones the policy exists for.',
    'There is also the stigma effect, which Grace’s model has no '
    'place for. A child identified at the till as a free-meals case may '
    'not take the meal at all, and schools report exactly this. '
    'Universalism removes the identification along with the application, '
    'and that is not a side benefit — it is a large part of why '
    'take-up differs.',
    'So I would provide universally and accept that some families who '
    'could pay will not, recovering what I could through the tax system '
    'rather than at the school gate. Grace is right that this subsidises '
    'people who do not need it; I would rather pay that than lose the '
    'third of eligible children a means test reliably loses.'],
   F(['a.  The response grants that universalism subsidises the '
      'comfortable. Why accept rather than minimise that?',
      'b.  Why propose recovering the cost through tax?'],
     ['a.  "It assumes that targeting reaches the targeted" — what '
      'does the noun clause do?',
      'b.  "efficient on paper and worse in the hall" — Idris’s '
      'phrase. Why pick up a speaker’s wording?']),
   ['I think free school meals should be available to all children '
    'because no child should ever be hungry at school and education '
    'should be free for everyone. Means testing is humiliating and '
    'bureaucratic, and it divides children into categories which is bad '
    'for their self-esteem. Grace is worried about the cost but '
    'governments waste money on many less important things, and investing '
    'in children is always worthwhile. A well-fed child learns better and '
    'this benefits society as a whole.'],
   [('P1', [['a.  That the targeted policy fails to reach a large share of '
             'those it targets, so its theoretical efficiency does not '
             'survive contact with how people claim.'],
            ['b.  Because every feature of a scheme — how you apply, '
             'what you must prove, who can see — changes who '
             'receives it. Take-up is produced by the design, not '
             'separate from it.']]),
    ('P2', [['a.  A means test assesses income to determine eligibility; '
             'take-up is the proportion of eligible people who actually '
             'receive the benefit.'],
            ['b.  Making receipt depend on meeting requirements or '
             'behaviours — each of which is another point at which '
             'take-up falls.']]),
    ('P3', [['Model: "Provide universally and accept subsidising families '
             'who could pay, because a means test loses a third of the '
             'children it is for."']]),
    ('F1', [['a.  Because it is true and conceding it moves the argument '
             'onto ground the response can win. Once the cost is admitted, '
             'the comparison is between a known waste and a known failure '
             'to reach children — and that comparison favours '
             'universalism.'],
            ['b.  Because it answers Grace’s objection without '
             'reintroducing the mechanism that causes the problem. '
             'Recovery at the school gate requires identification; '
             'recovery through tax does not.']]),
    ('F2', [['a.  It names the hidden premise as the object of "assumes", '
             'so the criticism is of a specific unstated step rather than '
             'of her conclusion. That is a more precise objection and one '
             'she cannot simply deny.'],
            ['b.  It credits the argument to its author and compresses the '
             'whole case into four words already in the discussion. Using '
             'a speaker’s own formulation also shows the response is '
             'building on the conversation rather than restarting it.']]),
    ('F3', [['1.  "Governments waste money on many less important things" '
             'does not answer Grace’s argument, which is about the '
             'best use of a fixed sum within this policy.'],
            ['2.  Take-up — the one piece of evidence in the '
             'discussion — is never mentioned, so the strongest '
             'available argument goes unused.'],
            ['3.  "No child should ever be hungry" and "investing in '
             'children is always worthwhile" are sentiments that would '
             'apply equally to the targeted option, so they do not choose '
             'between them.']])]),

ad('AD 096', 'Philosophy of science · agree / disagree',
   ('distinguish a demarcation problem from a quality problem',
    'subjunctive in that-clauses after demand', 'falsifiable, auxiliary hypothesis, parsimony, prediction',
    'arguing about what makes a theory scientific'),
   'Dr Amari',
   'A familiar criterion holds that a theory is scientific only if it '
   'makes predictions that could turn out false. Critics note that real '
   'theories are rarely abandoned on a single failed prediction '
   '— they acquire modifications instead. Does the criterion '
   'survive?',
   [('Lin', 'It survives as a criterion for good practice even if not for '
     'demarcation. A field that answers every failure with a new '
     'modification has stopped testing anything.'),
    ('Jonas', 'But every successful theory did that too. Newtonian '
     'mechanics survived an anomalous orbit by positing an unseen planet, '
     'and the planet was there. You cannot tell the difference in '
     'advance.')],
   P(['a.  Jonas’s example is well chosen. What does it establish?',
      'b.  If the difference cannot be told in advance, what is the '
      'criterion still good for?'],
     ['a.  What is an auxiliary hypothesis, and what is parsimony?',
      'b.  What does falsifiable mean, precisely?'],
     ['State your position in one sentence about what the criterion can '
      'do.']),
   ['Lin is right and Jonas has shown why her criterion cannot be applied '
    'when it would be most useful, which is a serious limitation rather '
    'than a refutation.',
    'His Neptune case establishes that rescuing a theory with an '
    'auxiliary hypothesis is not in itself unscientific. The modification '
    'was ad hoc by any reasonable description, and it was also correct, '
    'and nothing available at the time distinguished it from the '
    'modifications that turned out to be evasions.',
    'What survives is a demand, not a test: that each modification itself '
    'be checkable. The unseen planet was a prediction with a position and '
    'a mass, and it could have failed; an adjustment that merely '
    'accommodates the anomaly and predicts nothing further cannot. That '
    'distinction is available at the time, which is what Jonas’s '
    'objection seemed to deny.',
    'So the criterion is not a line between science and non-science and '
    'was never going to be. It is a standard applied to each move a '
    'theory makes, and a research programme whose successive '
    'modifications generate no new testable content is degenerating, '
    'whatever it is called. Lin’s instinct is right and needs this '
    'reformulation to answer Jonas.'],
   F(['a.  The response accepts the Neptune case fully. How does it '
      'recover the criterion?',
      'b.  Why does it say the criterion was "never going to be" a line '
      'between science and non-science?'],
     ['a.  "a demand ... that each modification itself be checkable" '
      '— why the subjunctive?',
      'b.  "whatever it is called" — what is this dismissing?']),
   ['I agree with Lin that falsifiability is important because a theory '
    'that cannot be tested is not really scientific, it is more like a '
    'belief. Popper was right that science progresses by trying to refute '
    'theories rather than confirm them. Jonas gives an interesting example '
    'about Neptune but I think this was a special case, and in general '
    'scientists do abandon theories when the evidence is against them, as '
    'happened with phlogiston and the ether.'],
   [('P1', [['a.  That an ad hoc rescue can be correct, so being ad hoc is '
             'not sufficient for being unscientific. It blocks the simple '
             'version of the criterion.'],
            ['b.  Assessing a research programme over time, and judging '
             'whether each modification adds testable content — '
             'retrospective or ongoing evaluation rather than a '
             'classification at a moment.']]),
    ('P2', [['a.  An auxiliary hypothesis is an added assumption that '
             'reconciles a theory with a recalcitrant observation; '
             'parsimony is the preference for fewer such assumptions.'],
            ['b.  That the theory entails some observation statement '
             'which, if it were observed to be otherwise, would count '
             'against it. It is a property of the theory, not of the '
             'scientist.']]),
    ('P3', [['Model: "The criterion works as a standard for each '
             'modification — it must itself be testable — not as '
             'a boundary around science."']]),
    ('F1', [['a.  By relocating it. Instead of asking whether the theory '
             'is falsifiable, it asks whether the rescue is — and the '
             'unseen planet was, while an accommodation predicting nothing '
             'further is not. That distinction is available at the '
             'time.'],
            ['b.  Because theories are not tested in isolation: any '
             'prediction depends on auxiliary assumptions, so a failed '
             'prediction never points at one claim. A criterion '
             'classifying whole theories was always going to fail on '
             'that.']]),
    ('F2', [['a.  Because "demand" takes a subjunctive complement, and the '
             'form marks the clause as a requirement rather than a '
             'description. The grammar itself distinguishes a standard '
             'being imposed from a fact being reported.'],
            ['b.  The demarcation question. Once the criterion is a '
             'standard for moves rather than a label for fields, whether '
             'something counts as science becomes a secondary matter '
             '— which is the response’s main structural '
             'claim.']]),
    ('F3', [['1.  "This was a special case" dismisses Jonas’s '
             'counter-example without saying what makes it special, which '
             'is precisely the question.'],
            ['2.  Phlogiston and the ether show that theories are '
             'sometimes abandoned, which nobody denied — the issue is '
             'how to tell a legitimate rescue from an evasion.'],
            ['3.  "A theory that cannot be tested is not really '
             'scientific" restates the criterion under challenge, and '
             'there is a comma splice in the first sentence.']])]),
]
