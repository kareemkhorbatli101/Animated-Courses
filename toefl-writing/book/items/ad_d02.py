# -*- coding: utf-8 -*-
"""Academic Discussion - Environment, Health, Media, Urban planning."""

T = 'WRITE FOR AN ACADEMIC DISCUSSION'
M = '10 minutes'
INSTR = ['Express and support your opinion.',
         'Make a contribution to the discussion in your own words.',
         'An effective response will contain at least 100 words.']

ITEMS = [

# ------------------------------------------------------------------ 011
{
 'id': 'AD 011', 'task': T, 'time': M,
 'function': 'Environment · responsibility: who should act',
 'payload': {
   'Strategy': 'distinguish levels — individual, firm, state — before assigning blame',
   'Grammar': 'modals of obligation across different agents',
   'Vocabulary': 'externality, offset, systemic, discretionary',
   'Convention': 'disagreeing with a moral position without sounding cynical',
 },
 'prof_name': 'Dr Haugen',
 'professor': [
   'Campaigns to reduce household emissions ask individuals to fly less, eat '
   'less meat and insulate their homes. Critics argue that this shifts '
   'attention from the small number of firms and governments whose decisions '
   'dominate the total. Where should responsibility for reducing emissions '
   'mainly lie — with individuals, or with institutions?'],
 'students': [
   ('Freya',
    'With institutions, clearly. A hundred companies account for most '
    'industrial emissions since the 1980s. Asking households to change their '
    'diet while those decisions go unexamined is a distraction, and I think '
    'a deliberate one.'),
   ('Daniel',
    'I think that lets us all off too easily. Firms produce what people buy. '
    'If demand for flights and beef does not fall, a regulation simply moves '
    'production somewhere else. Individual choices are where demand actually '
    'comes from.'),
 ],
 'instructions': INSTR,
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Freya is talking about where emissions are produced. What is Daniel '
     'talking about?',
     'b.  Could both be entirely right? What would have to be true?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  An ', ('externality', {'italic': True}),
      ' is a cost not paid by whoever causes it. Who pays the externality of '
      'a cheap flight?'],
     ['b.  Distinguish ', ('systemic', {'italic': True}), ' from ',
      ('discretionary', {'italic': True}),
      '. Which word describes a choice a person can actually make?'],
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, accept Daniel’s mechanism and show that it '
     'supports Freya’s conclusion. Under 35 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “both individuals and institutions have a role to play'
     '” a band-3 sentence?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Daniel is right about the mechanism and I think it points the other way. '
   'Demand does drive production — but demand is not a free-floating sum '
   'of private choices; it is shaped by what is cheap, available and '
   'default. A household that flies because the train costs three times as '
   'much has not made a discretionary choice in any useful sense.',
   'So the question is less who is to blame than who can change the price. '
   'Freya’s hundred firms matter not because their emissions are large '
   'but because they, and the governments that tax them, set the conditions '
   'under which individual choices are made. Individual action still counts, '
   'though I would count it differently: its real value is political rather '
   'than arithmetical. People who have already changed their own habits are '
   'the ones who vote for the regulation that makes everyone else change '
   'theirs.',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The response agrees with Daniel and sides with Freya. Trace the '
     'step that makes that possible.',
     'b.  Find the sentence that redefines the question. What is gained by '
     'replacing “who is responsible” with “who can change the '
     'price”?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “Demand ', ('does', {'italic': True}),
      ' drive production.” Why the emphatic ', ('do', {'italic': True}),
      ' here?'],
     ['b.  “not because their emissions are large but because they '
      '… set the conditions”. Name the structure, and say why the '
      'first half has to be conceded for the second to land.'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('political rather than arithmetical', {'italic': True}),
      ' — what distinction is this drawing, and why is it the key to the '
      'whole response?'],
     ['b.  ', ('free-floating', {'italic': True}),
      ' applied to demand. What picture does it deny?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Using the official band descriptors at the front of this book, name the '
     'three things that hold the response below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Discussion: should airlines be required to show the emissions of each '
     'flight at the point of booking? One classmate says it will change '
     'behaviour; another says people will ignore it. In 50 words, accept the '
     'second classmate’s prediction and show it argues for the policy '
     'anyway.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'In my opinion both individuals and institutions have a role to play in '
   'this important issue. Freya is right that the big companies are '
   'producing most of the pollution and they should be controlled by the '
   'governments with strict laws and big fines. But Daniel is also right '
   'because if people continue to buy these products then the companies will '
   'continue to produce them, so the consumers have power too. I think the '
   'best solution is that everybody should do their part, the governments '
   'should make laws, the companies should be more responsible and the '
   'people should change their habits. If we all work together we can solve '
   'this problem for the future generations.',
 ],
 'keys': [
  ('P1', [
    ['a.  Where emissions are ', ('caused', {'bold': True}),
     ' — which is not the same as where they are produced. Freya is '
     'pointing at a smokestack; Daniel is pointing at the purchase that '
     'lit it.'],
    ['b.  Yes. It only requires that production and causation can come apart '
     '— which they do whenever the conditions of choice are set by '
     'someone other than the chooser. That gap is the whole of the '
     'response.'],
  ]),
  ('P2', [
    ['a.  Everyone except the passenger and the airline — which is '
     'precisely what makes it an externality, and why individual virtue '
     'cannot fix it.'],
    ['b.  ', ('Discretionary', {'bold': True}),
     ' — a choice genuinely at the person’s discretion. ',
     ('Systemic', {'italic': True}),
     ' describes the structure the choice is made inside. Most arguments '
     'about personal responsibility turn on whether a given choice is '
     'actually discretionary.'],
  ]),
  ('P3', [
    ['Model: ', ('Demand does drive production, but demand is itself shaped '
                 'by price and availability — which are set by exactly '
                 'the institutions Freya is pointing at.', {'italic': True})],
    ['You have granted his causal chain in full and simply followed it one '
     'link further back.'],
  ]),
  ('P4', [
    ['Because nobody in the discussion denies it. Freya does not claim '
     'individuals are irrelevant; Daniel does not claim firms are blameless. '
     'A sentence both participants already agree with adds nothing, and ',
     ('contribution', {'italic': True}), ' is the rubric’s word.'],
  ]),
  ('F1', [
    ['a.  By separating the ', ('mechanism', {'italic': True}),
     ' from the ', ('conclusion', {'italic': True}),
     '. Daniel’s mechanism is that demand drives production. The '
     'response accepts it, then asks what drives demand — and the '
     'answer is institutions. His own causal chain reaches her conclusion '
     'if you follow it one step further.'],
    ['b.  “So the question is less who is to blame than who can change '
     'the price.” Blame is backward-looking and produces an argument '
     'nobody wins; capacity to act is forward-looking and has an answer. It '
     'also dissolves the false opposition, because the agent who can change '
     'the price is not necessarily the agent who emitted the carbon.'],
  ]),
  ('F2', [
    ['a.  Because the writer is about to disagree with Daniel and wants the '
     'concession to be unmistakable first. The emphatic ',
     ('do', {'italic': True}),
     ' grants the point more strongly than a plain assertion would, which '
     'buys permission for the ', ('but', {'italic': True}),
     '. (Family 8, structure 65.)'],
    ['b.  ', ('not because … but because …', {'italic': True}),
     ' — a correlative pair setting two explanations against each '
     'other. The first has to be conceded because it is Freya’s own '
     'stated reason: the response is telling her that her conclusion is '
     'right for a better reason than the one she gave, which is a far more '
     'interesting move than simply agreeing.'],
  ]),
  ('F3', [
    ['a.  Between action that reduces emissions by its own quantity, and '
     'action that changes who holds power. Arithmetically one household’s '
     'diet is negligible; politically it produces a voter who will support '
     'regulation. The distinction rescues individual action from '
     'Freya’s dismissal without conceding Daniel’s point — '
     'and it is a claim neither of them made.'],
    ['b.  The picture of demand as something that simply exists, prior to '
     'and independent of the market — as if preferences arrived from '
     'nowhere. Denying that picture is what licenses the whole argument.'],
  ]),
  ('F4', [
    ['1.  ', ('It takes no position.', {'bold': True}),
     ' It restates Freya, restates Daniel, and concludes that everybody '
     'should do their part. The task requires an opinion; this carefully '
     'avoids having one.'],
    ['2.  ', ('Nothing is added.', {'bold': True}),
     ' Every claim in it has already been made by one of the two '
     'classmates. There is no mechanism, no distinction, no example '
     '— and the closing sentence about working together for future '
     'generations could be attached to any environmental question ever '
     'asked.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “the big companies are producing” (produce — a '
     'habitual fact), “they should be controlled by the governments'
     '” (over-articled), “the people should change” (people), '
     'and a long comma splice through “everybody should do their part, '
     'the governments should make laws”.'],
  ]),
  ('F5', [
    ['Model: ', ('The prediction is probably right: most people will book '
                 'the cheap flight anyway. But a label that is ignored at '
                 'the point of sale still creates the dataset and the '
                 'public number that regulation later needs. Disclosure '
                 'rules rarely change behaviour directly; they change what '
                 'can be argued about afterwards.', {'italic': True})],
  ]),
 ],
},

# ------------------------------------------------------------------ 021
{
 'id': 'AD 021', 'task': T, 'time': M,
 'function': 'Health and medicine · policy choice',
 'payload': {
   'Strategy': 'ask what a policy does to the people it does not reach',
   'Grammar': 'the causal chain with result clauses',
   'Vocabulary': 'uptake, adherence, stigma, screening, threshold',
   'Convention': 'arguing about a sensitive policy without moralising',
 },
 'prof_name': 'Professor Ikeda',
 'professor': [
   'Some health systems charge a small fee for appointments missed without '
   'notice, arguing that missed slots waste capacity that others need. '
   'Others refuse, arguing that the patients who miss appointments are '
   'disproportionately those who can least afford a fine. Should missed '
   'appointments carry a charge?'],
 'students': [
   ('Sofia',
    'Yes. A missed slot is not a victimless act — somebody else waited '
    'longer for it. A small charge is the clearest possible signal that the '
    'appointment has a value, and most systems waive it where there is '
    'genuine hardship.'),
   ('Tom',
    'No. The people who miss appointments most are those with unstable work, '
    'caring duties or poor transport. A charge does not teach them the value '
    'of the slot; it teaches them that the clinic is somewhere that fines '
    'you, and they stop coming at all.'),
 ],
 'instructions': INSTR,
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Sofia is arguing about incentives. What is Tom arguing about?',
     'b.  Both predict a behavioural effect. Whose prediction is easier to '
     'test, and does that make it more likely to be true?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Distinguish ', ('uptake', {'italic': True}), ' from ',
      ('adherence', {'italic': True}), '.'],
     'b.  What is a ', 'threshold effect', ', and why might it matter for a '
     'fee that is small for most people?',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, grant Sofia that the charge works and still conclude '
     'against it. Under 35 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “Health care should be free for everybody because health is '
     'a human right” a weak contribution here, even though many people '
     'believe it?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Sofia is almost certainly right that a charge reduces missed '
   'appointments. The question Tom is raising is what it does to the people '
   'it does not deter, and that is the one that decides the policy.',
   'A fee works by making a missed slot costly. For a patient with a '
   'predictable week, the cost lands once and changes nothing else. For a '
   'patient whose week is not predictable, the cost arrives repeatedly, '
   'cannot be avoided by trying harder, and attaches itself to the clinic '
   'rather than to the behaviour — so the rational response is to '
   'disengage. The policy therefore improves its own headline measure while '
   'worsening the thing the measure exists to track.',
   'Hardship waivers do not rescue it, because a waiver has to be applied '
   'for, and the paperwork falls hardest on exactly the patients it is meant '
   'to protect. I would spend the same administrative effort on reminders '
   'and on letting people rebook without speaking to anyone, both of which '
   'reduce missed appointments without selecting against anybody.',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The first paragraph concedes the central empirical claim. What has '
     'that bought?',
     'b.  Find the sentence that turns Sofia’s own safeguard against '
     'her. Why is attacking the waiver more effective than attacking the fee?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “the cost arrives repeatedly, cannot be avoided by trying '
      'harder, and attaches itself to the clinic”. Three verbs in '
      'parallel. What is the cumulative effect?'],
     ['b.  “improves its own headline measure while worsening the thing '
      'the measure exists to track”. What is ',
      ('while', {'italic': True}), ' doing — time or contrast?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('selecting against', {'italic': True}),
      ' — where does this phrase come from, and what does importing it '
      'here achieve?'],
     ['b.  Why ', ('disengage', {'italic': True}), ' rather than ',
      ('stop coming', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the response below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Discussion: should employers be allowed to offer lower insurance '
     'premiums to staff who meet fitness targets? In 50 words, concede that '
     'the scheme would improve average fitness and argue against it anyway.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'I strongly agree with Tom about this question. In my opinion it is very '
   'unfair to charge money from the patients who miss their appointments '
   'because most of them are poor people who have difficult lives and many '
   'problems. Health is a human right and it should be free for everybody, '
   'this is a basic principle in a civilised society. Also the clinics should '
   'understand that sometimes people cannot come because of the transport or '
   'the work or the children. Instead of punishing these people the '
   'government should give more money to the health system so there will be '
   'more appointments available for everybody who needs them.',
 ],
 'keys': [
  ('P1', [
    ['a.  Distribution — not whether the incentive works on average, '
     'but on whom it works and whom it drives away. Sofia is reasoning about '
     'a representative patient; Tom about the tail.'],
    ['b.  Sofia’s. A fall in missed appointments is easy to measure, '
     'and will appear. Tom’s prediction — that some patients '
     'quietly stop coming — shows up as an absence, which is precisely '
     'the kind of effect that does not get measured. Easier to test does not '
     'mean more likely to be true; it means more likely to be ',
     ('reported', {'italic': True}), ', which is a different thing, and '
     'exploiting that gap is what the model response does.'],
  ]),
  ('P2', [
    ['a.  ', ('Uptake', {'bold': True}),
     ' is whether people start — attend at all. ',
     ('Adherence', {'bold': True}),
     ' is whether they keep going, or follow a treatment through. A charge '
     'may improve one while destroying the other.'],
    ['b.  An effect that only appears once a quantity crosses some level. A '
     'fee that is trivial for most people may cross a threshold for a '
     'minority, where it stops being a nuisance and becomes a reason to '
     'avoid the service altogether. Averages hide threshold effects, which '
     'is why a policy can look successful and still fail.'],
  ]),
  ('P3', [
    ['Model: ', ('A charge probably does reduce missed appointments, but it '
                 'reduces them by removing the patients who can least '
                 'afford to be removed.', {'italic': True})],
    ['Granting the mechanism and attacking the selection is far stronger '
     'than disputing whether the fee works — an argument you would '
     'probably lose.'],
  ]),
  ('P4', [
    ['Because it answers a different question. Nobody asked whether care '
     'should be free; they asked whether a specific charge for a specific '
     'behaviour does more good than harm. Reaching for a general principle '
     'instead of engaging with the mechanism is the commonest way a strongly '
     'held view produces a weak discussion post.'],
  ]),
  ('F1', [
    ['a.  Credibility and ground. Having agreed that the fee works, the '
     'writer can no longer be answered with evidence that it works — '
     'which is the only evidence Sofia has. The argument is moved onto '
     'territory where her strongest fact is already spent.'],
    ['b.  “Hardship waivers do not rescue it, because a waiver has to '
     'be applied for.” Attacking the fee invites a defence; attacking '
     'the safeguard closes the escape route. Sofia’s position depends '
     'on the waiver doing the protective work, so showing that the waiver '
     'has the same distributional flaw as the fee undoes the whole structure '
     'rather than one part of it.'],
  ]),
  ('F2', [
    ['a.  Accumulation. Each verb adds a separate property of the cost, and '
     'because they share one subject the reader experiences them as a single '
     'mounting burden rather than three claims. The parallel also makes the '
     'middle one — ', ('cannot be avoided by trying harder',
                            {'italic': True}),
     ' — land as a fact about the world rather than an excuse.'],
    ['b.  Contrast. ', ('While', {'italic': True}),
     ' has both senses, and here the simultaneity is the point: the two '
     'things happen at once and in opposite directions, which is exactly '
     'what makes the policy perverse.'],
  ]),
  ('F3', [
    ['a.  From biology and statistics — selection pressure, selection '
     'bias. Importing it makes the charge sound like an impersonal filter '
     'operating on a population rather than a punishment aimed at '
     'individuals, which is both more accurate and more damning. It also '
     'avoids moralising, which was the trap this question set.'],
    ['b.  ', ('Disengage', {'italic': True}),
     ' describes a relationship ending rather than a single act, and it '
     'carries no implication of a decision. That matters: the writer is '
     'arguing that these patients are not choosing to defy the clinic, they '
     'are drifting out of contact with it.'],
  ]),
  ('F4', [
    ['1.  ', ('It argues from principle, not mechanism.', {'bold': True}),
     ' “Health is a human right” is a claim about what ought to be '
     'free, which does not address whether this particular charge helps or '
     'harms. It also simply repeats Tom’s position with more feeling.'],
    ['2.  ', ('The proposal ignores the question.', {'bold': True}),
     ' “the government should give more money” is true of every '
     'health policy question and was not what was asked. No alternative to '
     'the charge is offered that could actually be implemented by a clinic.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “charge money from” (charge a fee to), “because of the '
     'transport or the work or the children” (over-articled), and a '
     'comma splice at “free for everybody, this is a basic '
     'principle”. The response is also longer than the band-5 model '
     'and makes a third as many distinct points.'],
  ]),
  ('F5', [
    ['Model: ', ('Average fitness would almost certainly rise. But the '
                 'premium is not really a reward for exercising; it is a '
                 'penalty on the people whose jobs, health or hours make '
                 'the targets unreachable — and those are the people '
                 'already paying most for insurance.', {'italic': True})],
  ]),
 ],
},

# ------------------------------------------------------------------ 031
{
 'id': 'AD 031', 'task': T, 'time': M,
 'function': 'Media and communication · cause ranking',
 'payload': {
   'Strategy': 'rank causes by what changes if you remove each one',
   'Grammar': 'the comparative of importance; cleft for emphasis',
   'Vocabulary': 'amplify, incentive, attention economy, moderation',
   'Convention': 'ranking without dismissing the causes you rank lower',
 },
 'prof_name': 'Dr Oyelowo',
 'professor': [
   'False stories spread faster online than accurate ones. Explanations '
   'offered include the design of recommendation systems, the business model '
   'that rewards attention, and ordinary human psychology. Which of these do '
   'you think is the main driver, and why?'],
 'students': [
   ('Nour',
    'The algorithms. A recommendation system optimised for engagement will '
    'find that outrage engages, and promote it. Change the optimisation '
    'target and the problem shrinks overnight — it is an engineering '
    'decision, not a fact about people.'),
   ('Jakob',
    'I would say psychology. People shared rumours long before there were '
    'feeds, and they share them now because novelty and indignation are '
    'rewarding. The algorithm only finds what is already there.'),
 ],
 'instructions': INSTR,
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Both agree the algorithm promotes outrage. What exactly do they '
     'disagree about?',
     'b.  The professor asks for the main driver. What test would let you '
     'rank causes rather than just list them?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  What does it mean to ', ('amplify', {'italic': True}),
      ' something, and how is it different from ',
      ('causing', {'italic': True}), ' it?'],
     'b.  In the phrase ', 'attention economy', ', what is being bought and '
     'sold?',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, rank the three causes using the test you chose in P1b. '
     'Under 35 words.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why is “all three causes are connected and it is impossible to say '
     'which is most important” a band-3 answer?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'The useful test is counterfactual: remove each cause and ask what '
   'remains. Remove human psychology and nothing spreads, so Jakob is right '
   'that it is necessary. But it is also constant — it was the same in '
   '1600 — and a constant cannot explain a change. What changed is the '
   'distribution system, so Nour has the better claim to the main driver.',
   'Where I would part company with Nour is the word overnight. The '
   'optimisation target is not a free engineering choice; it is downstream of '
   'a business model that sells attention, and a firm that optimised for '
   'accuracy instead would lose to one that did not. That is why the problem '
   'has survived a decade of moderation teams. Ranked properly, I would put '
   'the business model first, the algorithm second as its instrument, and '
   'psychology third — not least important, but least changeable, and '
   'in policy what matters is the lever you can actually pull.',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The response reorders the question’s own list. What justifies '
     'adding nothing new but reranking?',
     'b.  Find the phrase that protects Jakob’s cause while ranking it '
     'last. Why does that matter?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “What changed is the distribution system.” Name the '
      'device and say why it is the right shape for this sentence.'],
     ['b.  “a firm that optimised for accuracy instead ',
      ('would lose', {'italic': True}),
      ' to one that did not”. Why the unreal conditional for a claim '
      'the writer believes is true?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('downstream of', {'italic': True}),
      ' — what relation does it assert, and why is it more precise than ',
      ('caused by', {'italic': True}), '?'],
     ['b.  ', ('the lever you can actually pull', {'italic': True}),
      ' — what does this metaphor smuggle into the argument?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name the three things that hold the response below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'Discussion: what most explains falling attendance at live music '
     '— ticket prices, streaming, or changed social habits? In 50 '
     'words, rank them using a counterfactual test.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'This is a very interesting question and I think all three causes are '
   'connected to each other so it is impossible to say which one is the most '
   'important. Nour is right that the algorithms are promoting the bad '
   'content because the companies want more clicks and more money. But Jakob '
   'is also right because people are always interested in shocking news and '
   'they like to share it with their friends to get attention. So in my '
   'opinion the algorithm and the psychology are working together and we '
   'cannot separate them. The solution is that the companies should control '
   'better their platforms and the people should be more educated about how '
   'to check the information before sharing it.',
 ],
 'keys': [
  ('P1', [
    ['a.  Whether the algorithm is the ', ('cause', {'italic': True}),
     ' or the ', ('amplifier', {'italic': True}),
     '. Nour treats it as the thing generating the outcome; Jakob treats it '
     'as a mirror that finds what people already want.'],
    ['b.  The counterfactual: remove each cause in turn and see what '
     'survives. A cause whose removal changes nothing is not doing the work, '
     'however necessary it is. This also separates ',
     ('necessary', {'italic': True}), ' from ',
     ('explanatory', {'italic': True}), ', which is the distinction the '
     'whole question turns on.'],
  ]),
  ('P2', [
    ['a.  To amplify is to increase the reach of something that already '
     'exists. A cause brings it into being. The word choice is the entire '
     'disagreement between Nour and Jakob, compressed into one verb.'],
    ['b.  The user’s attention is the product; advertisers are the '
     'buyers; the platform is the seller. Naming this makes clear that the '
     'firm’s revenue rises with engagement regardless of what is '
     'engaging — which is the structural fact the model builds on.'],
  ]),
  ('P3', [
    ['Model: ', ('Psychology is necessary but constant, so it cannot explain '
                 'a change; what changed is the distribution system, and '
                 'behind that, the model that pays for it.',
                 {'italic': True})],
    ['The move is to distinguish a necessary condition from an explanatory '
     'one. A constant can never explain a variable.'],
  ]),
  ('P4', [
    ['Because the question asked for a ranking and this declines to produce '
     'one. “Everything is connected” is true of every causal '
     'question and therefore informative about none. It also abandons the '
     'one thing the task rewards: a position, supported.'],
  ]),
  ('F1', [
    ['a.  The reranking ', ('is', {'italic': True}),
     ' the new thing. Neither classmate mentioned the business model as a '
     'separate cause from the algorithm, and separating them is what lets '
     'the writer explain why a decade of moderation has failed. A '
     'contribution need not be a new fact; a better-organised set of the '
     'existing facts counts, provided it explains something the original '
     'ordering could not.'],
    ['b.  “not least important, but least changeable”. It matters '
     'because Jakob’s cause is genuinely fundamental, and a ranking '
     'that appeared to dismiss it would be both wrong and needlessly '
     'combative. The phrase keeps his point intact while explaining why it '
     'does not decide the policy.'],
  ]),
  ('F2', [
    ['a.  A wh-cleft (family 8, structure 60). It is right here because the '
     'sentence is answering an implicit question — ',
     ('what changed?', {'italic': True}),
     ' — and the cleft puts the answer in the stressed final position, '
     'immediately after a sentence about what did ',
     ('not', {'italic': True}), ' change.'],
    ['b.  Because no such firm exists to point at, so the claim is about a '
     'world we can reason about but not observe. The unreal form is '
     'honest about that, and paradoxically makes the argument harder to '
     'attack: it claims a mechanism rather than a fact.'],
  ]),
  ('F3', [
    ['a.  That the algorithm is a consequence of the business model and '
     'constrained by it, in a one-way flow. ',
     ('Caused by', {'italic': True}),
     ' would be cruder — it suggests a single event producing another, '
     'where the real relation is an ongoing constraint. The metaphor also '
     'implies you cannot fix the lower thing without changing the higher '
     'one, which is the policy conclusion.'],
    ['b.  That the purpose of ranking causes is to act on them. That is an '
     'assumption, not a given — one could rank causes to understand '
     'rather than to intervene. The metaphor makes the writer’s '
     'criterion feel like common sense, which is exactly what a good '
     'metaphor does in an argument. Worth noticing when it is done to you.'],
  ]),
  ('F4', [
    ['1.  ', ('It refuses the task.', {'bold': True}),
     ' The question asked which cause is the main driver; the answer is that '
     'it is impossible to say. Declining to rank is a position, but it needs '
     'to be argued for — here it is simply asserted and then abandoned.'],
    ['2.  ', ('Nothing is added, and the close is generic.', {'bold': True}),
     ' Both classmates are restated. The final recommendation — '
     'platforms should do better and people should be educated — '
     'appears in every discussion of this topic ever written and follows '
     'from nothing in the response.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “the algorithms are promoting” (promote), “people are '
     'always interested” (are always interested is acceptable but '
     '“are working together” for a general truth is not), '
     '“control better their platforms” (control their platforms '
     'better — adverb placement), and a run-on opening sentence.'],
  ]),
  ('F5', [
    ['Model: ', ('Remove streaming and people still stay in; remove cheap '
                 'tickets and attendance falls but does not collapse; '
                 'remove the social habit of going out together and nothing '
                 'else matters. I would rank habit first, price second and '
                 'streaming third — streaming is a symptom of the '
                 'first, not a rival to it.', {'italic': True})],
  ]),
 ],
},
]
