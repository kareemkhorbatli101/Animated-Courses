# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 003-008."""
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

ad('AD 003', 'Education · policy choice',
   ('attack the assumption both sides share',
    'conditional qualification', 'streaming, attainment gap, self-concept',
    'disagreeing with the question rather than the answers'),
   'Dr Whitfield',
   'Many schools group pupils by ability for core subjects, on the argument '
   'that teaching can then be pitched accurately. Others keep mixed classes, '
   'arguing that grouping entrenches early judgements. Should schools stream '
   'pupils by ability?',
   [('Nadia', 'Yes. A teacher facing thirty pupils at six different levels '
     'teaches to the middle and loses both ends. Grouping lets the strong '
     'move and the struggling get the pace they need.'),
    ('Theo', 'No. Streaming decisions are made at seven or eight on '
     'evidence that is mostly about how much reading happened at home, and '
     'they are almost never reversed. You are not sorting ability, you are '
     'fixing a starting position in place.')],
   P(['a.  Nadia argues about teaching; what does Theo argue about?',
      'b.  What do they both assume that the response could question?'],
     ['a.  What is an attainment gap, and what is a pupil’s '
      'self-concept?',
      'b.  Distinguish streaming, setting and banding.'],
     ['Accept Nadia’s teaching problem and Theo’s objection in one '
      'sentence, and point at what follows. Under 35 words.']),
   ['Both are right about different things, and the thing they share is the '
    'assumption that grouping is permanent. Nadia’s problem is real: a '
    'single class spanning six levels is genuinely hard to teach well. '
    'Theo’s objection is also real, but it is an objection to '
    'irreversibility rather than to grouping as such — a set reviewed '
    'every term on current work is a different instrument from a stream '
    'assigned at seven.',
    'So I would keep the grouping and attack the permanence. The evidence '
    'that matters here is not whether streamed pupils do better on average, '
    'which is roughly a wash, but what happens to the bottom group: they get '
    'the least experienced teachers and a narrowed curriculum, which makes '
    'the original judgement true. Fix the movement between sets and the '
    'staffing of the lowest one, and most of what Theo is objecting to '
    'disappears without costing Nadia her teachable class.'],
   F(['a.  The response names something neither classmate said. What is it?',
      'b.  The second paragraph rejects the obvious evidence. Why?'],
     ['a.  "which makes the original judgement true" — what is being '
      'described, and why is it the strongest sentence in the response?',
      'b.  "a set reviewed every term ... is a different instrument from a '
      'stream assigned at seven". Why "instrument"?']),
   ['In my opinion this is a difficult question because both students have '
    'good arguments. Nadia is right that the teacher cannot teach all the '
    'levels at the same time and some students will be bored while others '
    'cannot follow. But Theo is also right that it is not fair to decide the '
    'future of a child when he is only seven years old. I think the best '
    'solution is that the schools should group the students but they should '
    'also give extra support to the weaker ones so everybody can improve and '
    'nobody is left behind.'],
   [('P1', [['a.  Theo argues about measurement and consequence — what '
             'the grouping decision is actually made on, and what it does to '
             'the pupil afterwards.'],
            ['b.  That grouping is a single permanent act. Nadia defends it '
             'as such and Theo attacks it as such; neither considers a '
             'grouping that is reviewed, which is where the response goes.']]),
    ('P2', [['a.  The attainment gap is the difference in measured '
             'achievement between groups, usually by background. '
             'Self-concept is a pupil’s own sense of what kind of '
             'learner they are, and it is the mechanism by which a label '
             'becomes a result.'],
            ['b.  Streaming puts a pupil in one group for everything; '
             'setting groups them subject by subject; banding is a coarser '
             'grouping into broad bands. The distinction matters because '
             'setting is reversible in a way streaming is not.']]),
    ('P3', [['Model: "Theo’s objection is to irreversibility rather '
             'than to grouping, which means the answer is a set reviewed '
             'every term rather than no grouping at all."']]),
    ('F1', [['a.  That the bottom group gets the least experienced teachers '
             'and a narrowed curriculum. Nadia assumes grouping improves '
             'teaching for everyone; Theo assumes the harm is in the '
             'labelling. Neither names what actually happens to the lowest '
             'set after it is formed.'],
            ['b.  Because average outcomes hide the distribution. If '
             'streaming helps the top and harms the bottom by similar '
             'amounts, the average shows nothing while the policy question '
             '— who bears the cost — is entirely unanswered.']]),
    ('F2', [['a.  A self-fulfilling prophecy: the prediction made at seven '
             'causes the conditions that make it come true. It is the '
             'strongest sentence because it converts Theo’s fairness '
             'objection into a causal claim, which is both harder to '
             'dismiss and open to a fix.'],
            ['b.  Because an instrument is a tool chosen for a purpose and '
             'judged by whether it achieves it. Calling both things '
             '"grouping" hides the difference; calling them two instruments '
             'makes the design question visible.']]),
    ('F3', [['1.  It takes no position. "Both have good arguments" followed '
             'by a compromise that neither would dispute.'],
            ['2.  Nothing is added. Every point is a restatement, and "give '
             'extra support to the weaker ones" is exactly the vague remedy '
             'that the question about streaming exists to interrogate.'],
            ['3.  Language: "when he is only seven years old" (generic '
             '"they"), "the schools should group the students" '
             '(over-articled), "nobody is left behind" is a slogan rather '
             'than an argument.']])]),

ad('AD 004', 'Business and economics · cause ranking',
   ('rank by what is removable, not by what is largest',
    'causal chain with result clauses', 'barrier to entry, network effect, moat',
    'ranking causes when one of them is unfashionable'),
   'Professor Danquah',
   'A handful of firms dominate most digital markets. Explanations include '
   'network effects, the cost of data, and weak enforcement of competition '
   'law. Which of these do you think most explains the concentration?',
   [('Lea', 'Network effects. A platform gets better as more people use it, '
     'so the leader pulls away for reasons that have nothing to do with '
     'conduct. It is a property of the market, not a wrongdoing.'),
    ('Sam', 'Enforcement. Network effects are real but they are not new '
     '— telephone networks had them. What is new is that regulators '
     'stopped blocking acquisitions, so leaders bought the competitors who '
     'might have displaced them.')],
   P(['a.  Lea treats concentration as natural and Sam as chosen. Which '
      'claim is easier to test?',
      'b.  What would a third cause have to explain to beat both?'],
     ['a.  What is a barrier to entry, and what is a moat in this context?',
      'b.  Why does "network effect" sound like an excuse and "acquisition" '
      'like an accusation?'],
     ['Rank the causes in one sentence using a removability test.']),
   ['Sam has the better of this, and the reason is in his own example. Lea '
    'is right that network effects are a property of the market rather than '
    'a wrongdoing, but telephone networks had them too and were regulated '
    'into interoperability, with the result that the effect stopped '
    'conferring durable dominance. So network effects are a necessary '
    'condition and not a sufficient one, which makes them a poor candidate '
    'for the main driver — they were present in cases that ended '
    'differently.',
    'Where I would add something is the data cost, which neither of them '
    'ranks. It matters less as a barrier than as a reason acquisitions are '
    'so valuable: a firm buys a rival not for its revenue but for its '
    'behavioural data, which deepens its own advantage at the moment the '
    'competitor disappears. That links the two causes rather than ranking '
    'them separately. If I had to order them I would put enforcement first, '
    'because it is the only one a government can change, data second as the '
    'thing enforcement is failing to price, and network effects third '
    '— real, but the constant in the equation rather than the variable.'],
   F(['a.  The response uses Lea’s strongest fact against her. Which '
      'fact, and how?',
      'b.  Why does it end by calling network effects "the constant rather '
      'than the variable"?'],
     ['a.  "with the result that the effect stopped conferring durable '
      'dominance" — why a result clause rather than "so"?',
      'b.  "at the moment the competitor disappears" — what does this '
      'phrase add that "when it is bought" would not?']),
   ['I think all the three factors mentioned by the professor are important '
    'and they are working together to create this situation. Lea is right '
    'about the network effects because people want to use the same platform '
    'as their friends, and Sam is right that the governments should control '
    'the big acquisitions better. Also the data is very important because the '
    'companies who have more data can make better products. So my opinion is '
    'that we need stronger laws and more competition in the market so the '
    'consumers will have more choice and better prices.'],
   [('P1', [['a.  Sam’s. Enforcement decisions are documented events '
             '— you can list the acquisitions that were and were not '
             'blocked. "The market tends this way naturally" is much harder '
             'to falsify.'],
            ['b.  It would have to explain why the same forces produced '
             'concentration here and not in earlier markets with the same '
             'properties. That is the test the response applies.']]),
    ('P2', [['a.  A barrier to entry is anything that makes it costly for a '
             'new firm to compete; a moat is the incumbent’s term for '
             'the same thing seen from inside — a durable advantage '
             'that protects existing profits.'],
            ['b.  Because one names a property of the system and the other '
             'names an act by a person. Which word a discussion settles on '
             'often decides the policy conclusion before any evidence is '
             'examined, which is worth noticing when it happens to you.']]),
    ('P3', [['Model: "Network effects were present in markets that did not '
             'concentrate, so the variable is enforcement, with data cost as '
             'the reason acquisitions are worth making."']]),
    ('F1', [['a.  The telephone network. Lea offers network effects as a '
             'natural law; the telephone case shows the same law producing a '
             'different outcome under different regulation, which converts '
             'her constant into Sam’s variable.'],
            ['b.  Because a cause that is always present cannot explain an '
             'outcome that varies. It is the same move as distinguishing a '
             'necessary from a sufficient condition, expressed in a way a '
             'reader remembers.']]),
    ('F2', [['a.  Because "so" would suggest a loose consequence, where the '
             'argument needs the regulation to be the specific thing that '
             'disarmed the effect. A result clause states a determinate '
             'outcome, which is what makes the counter-example bite.'],
            ['b.  It makes the timing the point: the data advantage deepens '
             'exactly when the competitive threat ends, so the two effects '
             'compound. "When it is bought" would report the transaction; '
             'the fuller phrase reports the mechanism.']]),
    ('F3', [['1.  It refuses to rank, although ranking was the question.'],
            ['2.  Each cause is restated in the classmates’ own terms '
             'with nothing added, and the closing recommendation — '
             'stronger laws, more choice, better prices — follows from '
             'nothing in the response.'],
            ['3.  Language: "all the three factors" (all three), "they are '
             'working together" for a general truth (work), "the '
             'governments" (governments).']])]),

ad('AD 005', 'Technology and AI · value trade-off',
   ('ask what the automated version makes impossible, not what it makes faster',
    'contrastive whereas', 'triage, discretion, audit trail, edge case',
    'arguing about automation without romanticising human judgement'),
   'Dr Sorensen',
   'Public bodies increasingly use automated systems to decide routine '
   'cases: benefit eligibility, visa triage, parking appeals. Supporters cite '
   'consistency and speed; critics cite the loss of discretion. Which matters '
   'more in administrative decisions — consistency, or the capacity to '
   'judge the particular case?',
   [('Mariam', 'Consistency. Human discretion in these systems is not wise '
     'judgement, it is whichever official you happen to get, and it falls '
     'hardest on people who cannot argue back. A rule applied identically to '
     'everyone is the fairer thing.'),
    ('Elias', 'Discretion. Every rule written in advance meets a case its '
     'author did not imagine, and in administration those cases are not rare '
     '— they are the whole difficulty. A system that cannot recognise '
     'an exception will produce absurd outcomes with perfect consistency.')],
   P(['a.  Both describe a failure mode. Name each in three words.',
      'b.  Is there a version of the system that has neither failure?'],
     ['a.  What is triage, and what is an edge case?',
      'b.  What is an audit trail, and why would it matter to Mariam?'],
     ['State the trade-off in one sentence that refuses to call either side '
      'wrong.']),
   ['Mariam and Elias are describing the two failure modes of the same '
    'system, and both happen. The useful question is which failure is '
    'visible. An inconsistent human decision leaves a trace — a '
    'different official, a different outcome, something to appeal against '
    '— whereas an automated decision that is wrong in the same way '
    'every time looks exactly like a correct one, because consistency is the '
    'evidence we normally use to detect fairness.',
    'That points to a design rather than a choice between them. Automate the '
    'decision and keep the discretion at the point of challenge: a system '
    'that decides routinely but is required to explain, and to route any '
    'case the applicant disputes to a person with the power to depart from '
    'the rule. Elias is right that the edge cases are the difficulty, but '
    'they announce themselves — the person affected knows. What is '
    'needed is not a cleverer rule but a cheap and visible way of saying '
    'this one is wrong, which is precisely what automated systems are '
    'usually built without.'],
   F(['a.  The response argues that one failure is worse. On what grounds?',
      'b.  Find the sentence that solves Elias’s problem without '
      'requiring the system to be clever.'],
     ['a.  "whereas an automated decision that is wrong in the same way '
      'every time looks exactly like a correct one" — what does '
      '"whereas" do here?',
      'b.  "they announce themselves" — who are "they", and why is '
      'this the hinge of the argument?']),
   ['This is a very important topic in our modern society. I think that '
    'technology can help the governments to work faster and to treat all the '
    'people in the same way without discrimination, which is a big advantage. '
    'However the machines cannot understand the human situations and the '
    'special cases like Elias said, because they do not have emotions and '
    'they only follow the programming. In my opinion the best approach is a '
    'combination of both, so the computer can do the simple cases and the '
    'humans can check the difficult ones. In this way we can have the '
    'advantages of the technology and also the human understanding.'],
   [('P1', [['a.  Mariam: arbitrary human variation. Elias: rigid '
             'systematic error.'],
            ['b.  Yes, if the two are separated in time: automate the '
             'decision, humanise the challenge. That is the response’s '
             'move, and neither classmate considers it because both treat '
             'the choice as happening once, at the point of decision.']]),
    ('P2', [['a.  Triage is sorting cases by urgency or type before '
             'deciding them. An edge case is one that falls at the boundary '
             'of a rule, where the rule’s author did not think clearly '
             'or at all.'],
            ['b.  A record of what was decided and why. It matters to '
             'Mariam because her complaint about human discretion is '
             'precisely that it is unrecorded and unaccountable — so an '
             'automated system without an audit trail loses her main '
             'advantage.']]),
    ('P3', [['Model: "Both are describing real failures, and the question is '
             'which one a system can be built to notice."']]),
    ('F1', [['a.  Detectability. Inconsistent error is self-advertising; '
             'consistent error is camouflaged by the very property that is '
             'supposed to demonstrate fairness. That is an argument neither '
             'classmate makes and it reframes consistency as a risk rather '
             'than a virtue.'],
            ['b.  "route any case the applicant disputes to a person with '
             'the power to depart from the rule". The system does not have '
             'to identify edge cases; the affected person does it for free.']]),
    ('F2', [['a.  Straight contrast between two equally real situations '
             '— not concession. Neither clause is being given up, which '
             'is right, because the argument depends on both being true.'],
            ['b.  The edge cases. It is the hinge because it dissolves the '
             'apparent need for a system clever enough to recognise its own '
             'limits: the information is already in the hands of the person '
             'affected, and the only design problem is making it cheap for '
             'them to transmit it.']]),
    ('F3', [['1.  The conclusion — computers do simple cases, humans do '
             'difficult ones — is exactly what both classmates already '
             'assume, and it begs the question, since identifying the '
             'difficult cases is the whole problem.'],
            ['2.  The support is a cliche about machines lacking emotions, '
             'which is not what Elias argued; he argued about rules written '
             'in advance, which is a point about specification rather than '
             'feeling.'],
            ['3.  Language: "the governments", "the people", "the '
             'technology" all over-articled; "the human situations" is '
             'vague; and the opening sentence contributes nothing.']])]),

ad('AD 006', 'Environment · agree or disagree with a claim',
   ('separate a claim about physics from a claim about politics',
    'hedged generalisation', 'baseload, intermittency, grid, dispatchable',
    'disagreeing on technical ground without claiming expertise'),
   'Professor Haugen',
   'It is sometimes argued that renewable energy cannot supply a modern grid '
   'because wind and solar are intermittent, and that nuclear is therefore '
   'unavoidable. How convincing do you find that argument?',
   [('Bea', 'Fairly convincing. Demand does not fall when the wind drops. '
     'Something has to be dispatchable, and at the scale a national grid '
     'needs, that is nuclear or gas.'),
    ('Kwame', 'Not very. The intermittency argument was made when storage '
     'was expensive and interconnection was thin, and both have changed '
     'faster than the argument has. It is a claim about 2010 being repeated '
     'in 2026.')],
   P(['a.  Is their disagreement about physics or about dates?',
      'b.  Neither is an engineer. How should that shape your response?'],
     ['a.  Define baseload, dispatchable and intermittency.',
      'b.  Why is "the grid" a more useful subject than "renewables"?'],
     ['Grant Bea the physics and dispute the inference, in one sentence.']),
   ['The argument is right about the physics and wrong about what follows '
    'from it. Bea is correct that something must be dispatchable: demand is '
    'inelastic over hours and the wind does drop. But dispatchable is not a '
    'synonym for nuclear — storage, interconnection and demand '
    'shifting are all dispatchable in the relevant sense, and the question '
    'is their cost rather than their existence. Kwame’s point about '
    'dates is the sharper one: an argument about what is affordable has to '
    'be re-run when the prices move, and these prices have moved by an order '
    'of magnitude.',
    'Where I would be more cautious than Kwame is on scale. Storage at grid '
    'scale for several consecutive still winter days is a different problem '
    'from storage overnight, and the cost curves that have fallen so far are '
    'mostly for the second. So I would say the intermittency argument no '
    'longer shows that nuclear is unavoidable, but it has not yet been shown '
    'to be irrelevant either — which tends to mean the honest answer is '
    'about the last ten per cent of the grid rather than about renewables in '
    'general.'],
   F(['a.  The response concedes to Bea in the first clause. What does that '
      'make possible?',
      'b.  It then disagrees with Kwame. Why is it important to do both?'],
     ['a.  "dispatchable is not a synonym for nuclear" — why attack the '
      'word rather than the conclusion?',
      'b.  "which tends to mean the honest answer is about the last ten per '
      'cent" — what is "tends to" protecting?']),
   ['I agree with Kwame because I believe that renewable energy is the future '
    'and we must stop using the dangerous nuclear power which creates waste '
    'for thousands of years. Many countries like Germany are closing their '
    'nuclear plants and investing in wind and solar, and the prices of the '
    'batteries are falling every year. Bea is worried about the wind not '
    'blowing but we can build more interconnections between the countries so '
    'when there is no wind in one place there is wind in another place. So I '
    'think with enough investment we can have a grid with one hundred per '
    'cent renewable energy.'],
   [('P1', [['a.  About dates. Both accept that supply must match demand; '
             'they disagree about whether the cost figures that made nuclear '
             'necessary are current.'],
            ['b.  It should argue about the structure of the claim rather '
             'than adjudicate the engineering — which is what the model '
             'does by separating a physical necessity from an economic one.']]),
    ('P2', [['a.  Baseload is the minimum continuous demand; dispatchable '
             'means able to be turned up on command; intermittency is '
             'supply that varies with weather rather than with need.'],
            ['b.  Because the problem is a system property, not a property '
             'of any generator. Framing it as "can renewables do it" invites '
             'a yes or no; framing it as "what does the grid need at each '
             'hour" invites the actual answer.']]),
    ('P3', [['Model: "Something must be dispatchable, but dispatchable is '
             'not a synonym for nuclear."']]),
    ('F1', [['a.  It establishes that the writer is not denying the '
             'constraint, so the disagreement that follows cannot be '
             'dismissed as wishful. Conceding the physics is what buys the '
             'right to dispute the economics.'],
            ['b.  Because agreeing entirely with one classmate is rarely a '
             'contribution, and because Kwame overstates. Qualifying the '
             'side you broadly favour is the clearest signal that you are '
             'reasoning rather than choosing a team.']]),
    ('F2', [['a.  Because the conclusion follows validly from the premise '
             'once the word is read as a synonym. The argument is not wrong '
             'in its logic but in a hidden definition, and naming that is '
             'both more precise and harder to rebut.'],
            ['b.  Against the charge of overclaiming. The writer is drawing '
             'an inference about where a debate should go, not stating a '
             'fact about grids, and the hedge marks the difference honestly.']]),
    ('F3', [['1.  It argues from a position rather than with the '
             'classmates. Nuclear waste is not what either of them raised, '
             'and Bea’s dispatchability point is never answered.'],
            ['2.  The evidence is asserted and partly wrong-footed: Germany '
             'is offered as a success without noting what replaced the '
             'nuclear output, which is the obvious objection.'],
            ['3.  Language: "the dangerous nuclear power", "the prices of '
             'the batteries", "another place" — and the conclusion '
             '"one hundred per cent" is exactly the unhedged absolute the '
             'topic punishes.']])]),

ad('AD 007', 'Health and medicine · responsibility: who should act',
   ('ask which agent has both the information and the power',
    'modals of obligation across agents', 'adherence, formulary, prescribing, gatekeeping',
    'assigning responsibility without blaming patients'),
   'Dr Ikeda',
   'Antibiotic resistance is driven partly by over-prescription, partly by '
   'patients not completing courses, and partly by agricultural use. Where '
   'should the main effort to slow it be directed?',
   [('Hana', 'At prescribing. Doctors write the prescriptions, and a '
     'meaningful share are written for conditions antibiotics cannot treat, '
     'often because the appointment is short and refusing takes longer than '
     'agreeing.'),
    ('Victor', 'At agriculture. Human medicine is a minority of total use in '
     'many countries. Tightening clinical prescribing while livestock use '
     'continues is rearranging the smaller half of the problem.')],
   P(['a.  Both cite shares of total use. Does the larger share settle it?',
      'b.  What does Hana’s explanation of why doctors over-prescribe '
      'open up?'],
     ['a.  What is a formulary, and what is gatekeeping in clinical '
      'practice?',
      'b.  Why is "adherence" better than "patient compliance"?'],
     ['Rank the three targets in one sentence by tractability rather than '
      'size.']),
   ['Victor is right about the arithmetic and I do not think it decides the '
    'question. The relevant comparison is not which source is larger but '
    'which unit of effort removes more use, and those come apart sharply '
    'here. Agricultural use is concentrated in a small number of large '
    'buyers and is already regulated in several jurisdictions, so a single '
    'rule change moves a great deal; clinical over-prescription is spread '
    'across hundreds of thousands of individual consultations, each with its '
    'own two-minute pressure to agree.',
    'That argues for Victor’s target and Hana’s diagnosis '
    'together. What she identifies is not a failure of knowledge — '
    'doctors know which infections are viral — but a structural '
    'incentive: refusing costs the clinician time they do not have. '
    'Campaigns aimed at prescriber awareness therefore keep failing, because '
    'awareness was never the binding constraint. If I had to put effort '
    'somewhere beyond agriculture, it would go to the thing that makes '
    'refusal cheap: a same-day point-of-care test, so the conversation ends '
    'with evidence rather than with a negotiation.'],
   F(['a.  The response rejects a comparison both classmates accept. Which '
      'one?',
      'b.  It says awareness campaigns keep failing. What claim is that '
      'built on?'],
     ['a.  "those come apart sharply here" — what is "those", and why '
      'is this sentence the pivot?',
      'b.  "the thing that makes refusal cheap" — why define the target '
      'by its function rather than name the test first?']),
   ['I think that all the three causes are responsible for this very serious '
    'problem which is threatening the health of all humanity. The doctors '
    'should be more careful and not give antibiotics for a simple flu, the '
    'patients should always finish their treatment even if they feel better, '
    'and the farmers should stop using antibiotics for the animals just to '
    'make them grow faster. Governments should make strict laws and also '
    'educate the population about this danger through campaigns in the media '
    'and in the schools. If everybody takes responsibility we can protect the '
    'antibiotics for the future generations.'],
   [('P1', [['a.  No. Share of use measures the size of a source, not how '
             'much of it can be removed per unit of effort, and those are '
             'different quantities. A large source that is hard to move may '
             'be a worse target than a small one that is easy.'],
            ['b.  It reframes over-prescription as an incentive problem '
             'rather than an ignorance problem, which is what makes '
             'awareness campaigns the wrong instrument.']]),
    ('P2', [['a.  A formulary is the approved list of drugs a prescriber may '
             'use. Gatekeeping is the role of controlling access to a '
             'treatment or a referral — which is precisely the role '
             'that takes time to perform against a patient’s '
             'expectation.'],
            ['b.  Because "compliance" frames the patient as obeying, which '
             'both misdescribes the relationship and locates the fault in '
             'them. "Adherence" describes the behaviour without the '
             'moralising, and is now the standard term.']]),
    ('P3', [['Model: "Agriculture first because a few rules reach a few '
             'large buyers, prescribing second because the pressure is '
             'structural rather than informational, and course completion '
             'last because it is spread across everybody."']]),
    ('F1', [['a.  Share of total use. Hana implicitly defends her target '
             'despite it and Victor explicitly argues from it; the response '
             'says the comparison is the wrong one for choosing where effort '
             'goes.'],
            ['b.  On Hana’s own account of the mechanism. If doctors '
             'already know and prescribe anyway because refusing is costly, '
             'then an intervention that supplies knowledge addresses '
             'something that was never missing.']]),
    ('F2', [['a.  Size of source and removability per unit of effort. It is '
             'the pivot because everything after it follows from treating '
             'those as two separate quantities, which is the response’s '
             'one original move.'],
            ['b.  Because the function is the argument and the test is only '
             'one way of discharging it. Naming the function first makes the '
             'proposal survive being wrong about the specific technology.']]),
    ('F3', [['1.  It assigns responsibility to everyone, which is the one '
             'answer the question rules out by asking where the main effort '
             'should go.'],
            ['2.  Nothing is weighed. The three causes are restated as a '
             'list of duties, and the recommendation — strict laws and '
             'education — is the generic pairing that follows from no '
             'particular analysis.'],
            ['3.  Language: "all the three causes", "a simple flu" (flu is '
             'viral, so the example undercuts itself), "the antibiotics for '
             'the future generations".']])]),

ad('AD 008', 'Media and communication · agree or disagree with a claim',
   ('test a claim about audiences against what audiences actually do',
    'counterfactual would have', 'engagement, reach, legacy media, gatekeeper',
    'disagreeing with a popular diagnosis'),
   'Dr Oyelowo',
   'It is often said that the decline of local newspapers has damaged civic '
   'life: fewer council meetings covered, lower turnout, more corruption. '
   'How far do you accept this account?',
   [('Pia', 'I accept it. The studies are reasonably consistent — where '
     'a local paper closes, municipal borrowing costs rise and contested '
     'elections fall. Somebody was watching, and now nobody is.'),
    ('Rafe', 'I am not convinced the paper was the cause. Local papers '
     'declined because advertising moved, and the same shift changed how '
     'people spend their evenings. The watching and the turnout may both be '
     'downstream of something else.')],
   P(['a.  Rafe is making a specific methodological objection. Name it.',
      'b.  What kind of evidence would answer him?'],
     ['a.  Distinguish reach, engagement and influence.',
      'b.  What is a gatekeeper in media, and did local papers act as one?'],
     ['State Rafe’s objection and what would settle it, in one '
      'sentence.']),
   ['Rafe is describing confounding, and it is the right worry: if '
    'advertising revenue moved for reasons unrelated to civic life, then '
    'papers closing and attention drifting could both be effects of the same '
    'cause. But it is answerable, and some of the work has answered it. The '
    'studies Pia is thinking of mostly compare towns that lost a paper with '
    'similar towns that did not, in the same years and the same advertising '
    'market, and they find the borrowing-cost effect appearing after closure '
    'rather than before. Had the shift been purely economic, the two groups '
    'would have moved together.',
    'What I would take from Rafe is a narrowing rather than a rejection. The '
    'mechanism that survives is specific and unglamorous: somebody attending '
    'meetings and writing down what was decided. That function is separable '
    'from newspapers, and where it has been replaced — by a funded '
    'local reporting scheme, or in a few places by a council obliged to '
    'publish minutes properly — the effects seem to soften. So the '
    'claim is true about the function and only incidentally about the paper, '
    'which matters, because you cannot bring back the advertising but you '
    'can pay somebody to sit in the room.'],
   F(['a.  The response accepts Rafe’s objection and then defeats it. '
      'With what?',
      'b.  What does the final clause recommend, and why is it a '
      'contribution rather than a summary?'],
     ['a.  "Had the shift been purely economic, the two groups would have '
      'moved together." Identify the structure and say why the inversion '
      'suits a written argument.',
      'b.  "specific and unglamorous" — what is the adjective pair '
      'doing?']),
   ['I completely agree with Pia because the local newspapers are very '
    'important for the democracy. When there is no journalist to control the '
    'local politicians they can do whatever they want and nobody will know '
    'about the corruption. In my city the local newspaper closed two years '
    'ago and now we do not have any information about what is happening in '
    'the municipality. Rafe says maybe there is another reason but I think '
    'the connection is very clear. The governments should support the local '
    'press with subsidies so they can continue their important work for the '
    'society.'],
   [('P1', [['a.  Confounding — a third variable producing both the '
             'closure and the civic decline, so the correlation between them '
             'is not causal.'],
            ['b.  A comparison that holds the third variable fixed: towns in '
             'the same advertising market and the same years, differing only '
             'in whether a paper closed, with the timing of the effect '
             'checked against the closure date.']]),
    ('P2', [['a.  Reach is how many are exposed; engagement is what they do '
             'with it; influence is whether anything changes as a result. '
             'Media arguments slide between the three constantly.'],
            ['b.  A gatekeeper decides what reaches the public. Local papers '
             'did act as one, which is both the strength of Pia’s case '
             'and a reason to be careful about romanticising them.']]),
    ('P3', [['Model: "Rafe is describing confounding, and the test is '
             'whether the effect appears after closure in towns that lost a '
             'paper but not in comparable towns that did not."']]),
    ('F1', [['a.  With the design of the studies rather than with their '
             'conclusions — matched comparison towns and the timing of '
             'the effect relative to closure. Answering a methodological '
             'objection requires a methodological answer, not more results.'],
            ['b.  Paying somebody to attend meetings, independently of '
             'whether a newspaper exists. It is a contribution because both '
             'classmates treat the newspaper as the unit: Pia defends it and '
             'Rafe doubts it, and neither separates the institution from the '
             'function it happened to perform.']]),
    ('F2', [['a.  An inverted third conditional (family 3, structure 24). '
             'The inversion is slightly more formal and avoids a fourth "if" '
             'in a paragraph already carrying conditionals, which keeps the '
             'prose from becoming monotonous.'],
            ['b.  Lowering the emotional temperature deliberately. The '
             'civic-decline argument is usually made in grand terms; '
             'describing the mechanism as unglamorous signals that the '
             'writer is identifying a replaceable function rather than '
             'mourning an institution, which is what makes the final '
             'recommendation possible.']]),
    ('F3', [['1.  Rafe is not answered. "I think the connection is very '
             'clear" restates the belief he questioned without engaging the '
             'objection, which was about causation.'],
            ['2.  The evidence is a single anecdote about the writer’s '
             'own city, which is exactly the kind of case Rafe’s '
             'objection predicts would look convincing and prove nothing.'],
            ['3.  Language: "the local newspapers", "the democracy", "the '
             'society" all over-articled; "control the local politicians" '
             'is a false friend for "hold to account"; and the subsidy '
             'proposal appears without argument.']])]),
]
