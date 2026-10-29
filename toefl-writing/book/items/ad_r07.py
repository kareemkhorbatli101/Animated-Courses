# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 042-047."""
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

ad('AD 042', 'Arts and culture · value trade-off',
   ('ask what the restriction protects and what it prevents',
    'conditional qualification', 'canon, prescription, breadth, cultural capital',
    'arguing about curriculum without defending your own taste'),
   'Professor Rahimi',
   'School literature curricula are often prescribed centrally, with a fixed '
   'list of set texts. Supporters say a shared canon gives everyone the same '
   'cultural reference points; critics say prescription crowds out texts '
   'that would actually be read. Which matters more?',
   [('Leyla', 'Shared reference points. A common curriculum is one of the '
     'few things that gives a student from any background the same '
     'furniture in their head as everyone else. Abolishing the list does '
     'not free teachers, it privatises the canon.'),
    ('Sven', 'That assumes the shared texts are read rather than endured. A '
     'list that produces compliance rather than reading gives nobody '
     'anything, and the students who already have books at home are the '
     'ones who survive it.')],
   P(['a.  Sven does not deny the value of shared reference points. What '
      'does he deny?',
      'b.  Leyla uses the phrase "privatises the canon". Unpack it.'],
     ['a.  What is cultural capital, and who has it before school starts?',
      'b.  Distinguish prescription from a core with options.'],
     ['Grant Sven the point about endurance and keep Leyla’s goal, in '
      'one sentence.']),
   ['Leyla’s argument is stronger than the usual version of it, because '
    'it identifies what replaces a public list: not freedom but a hundred '
    'private lists, which will track the confidence and reading history of '
    'individual teachers. Sven is right that compliance is not reading, but '
    'that is an argument about which texts and how they are taught, not '
    'about whether anything is shared.',
    'What both leave out is that a list does two separable things. It '
    'specifies what is read and it specifies what is examined, and the '
    'second is what produces the endurance Sven describes. A curriculum '
    'could name twenty texts, require four, and examine on the skill rather '
    'than the text — which keeps Leyla’s shared furniture, since '
    'the overlap across any four of twenty is substantial, while removing '
    'the mechanism that turns a novel into a revision object. I would keep '
    'prescription and move it off the examination, which is where the '
    'damage he identifies actually comes from.'],
   F(['a.  The response strengthens Leyla’s argument before using it. '
      'Why is that worth doing?',
      'b.  What two functions of a list does it separate, and what follows?'],
     ['a.  "the same furniture in their head" is Leyla’s phrase and the '
      'response reuses it. Why, when AD 022 advised against reusing an '
      'opponent’s metaphor?',
      'b.  "turns a novel into a revision object" — what is the force '
      'of the noun?']),
   ['In my opinion literature should not be imposed on students because '
    'every person has different tastes and interests, and forcing teenagers '
    'to read old books that they do not understand only makes them hate '
    'reading for the rest of their lives. I remember studying Shakespeare at '
    'school and nobody in my class understood anything, we just memorised '
    'what the teacher said for the exam. Teachers should be free to choose '
    'modern books that speak to young people today, and then maybe students '
    'will actually enjoy reading instead of seeing it as a punishment.'],
   [('P1', [['a.  That the list delivers them. His claim is about what '
             'happens in practice, not about whether a shared canon would be '
             'good if it worked.'],
            ['b.  That abolishing a public list does not abolish selection; '
             'it moves it to individual teachers and schools, where it '
             'becomes invisible, unaccountable and unequal.']]),
    ('P2', [['a.  Familiarity with the references, habits and forms a '
             'society rewards. Children from book-owning households arrive '
             'with it, which is why Sven says they survive a bad list.'],
            ['b.  Prescription fixes the texts; a core with options fixes '
             'some and leaves the rest open — which is the structure '
             'the response ends up proposing.']]),
    ('P3', [['Model: "The endurance Sven describes comes from examining the '
             'text rather than from prescribing it, so you can keep the '
             'shared list and lose the compliance."']]),
    ('F1', [['a.  Because the weak version — shared culture is good '
             '— is easy to dismiss as nostalgia, and defeating it would '
             'prove nothing. Strengthening a position before engaging it is '
             'also the clearest signal that you are arguing rather than '
             'scoring.'],
            ['b.  Specifying what is read, and specifying what is examined. '
             'Once separated, Sven’s harm attaches to the second and '
             'Leyla’s benefit to the first, so both can be had.']]),
    ('F2', [['a.  Because this phrase is a description rather than a frame. '
             'AD 022’s warning was about adopting a metaphor that '
             'builds in the conclusion; "the same furniture in their head" '
             'carries no conclusion and names the thing precisely, so '
             'reusing it is a courtesy rather than a concession.'],
            ['b.  The nominalisation converts an activity into a category of '
             'object, which is exactly what the examination does to the '
             'novel. The grammar enacts the complaint.']]),
    ('F3', [['1.  It argues against prescription without engaging '
             'Leyla’s point that abolition privatises rather than '
             'removes the canon — the central argument in the '
             'discussion.'],
            ['2.  The evidence is a personal anecdote generalised to '
             '"nobody in my class", and "makes them hate reading for the '
             'rest of their lives" is an unhedged causal claim.'],
            ['3.  "Books that speak to young people today" is exactly the '
             'teacher-level selection Leyla identified as the problem, '
             'adopted without noticing. Language: a comma splice at '
             '"understood anything, we just memorised"; "old books" and '
             '"modern books" do no analytic work.']])]),

ad('AD 043', 'Health and medicine · responsibility: who should act',
   ('ask where the information and the authority meet',
    'modals of obligation across agents', 'prescriber, dispensing, adherence, polypharmacy',
    'allocating a duty across a fragmented system'),
   'Professor Ikeda',
   'Older patients are often taking many medicines prescribed by different '
   'specialists, with interactions nobody has reviewed. Who should be '
   'responsible for reviewing the whole list — the specialists, the '
   'general practitioner, or the pharmacist?',
   [('Ravi', 'The general practitioner. They are the one clinician with a '
     'relationship to the whole patient rather than to one organ, and the '
     'record sits with them.'),
    ('Mei', 'The pharmacist, in practice. They are the only person who sees '
     'every item actually dispensed rather than everything intended, they '
     'are trained in interactions specifically, and they have more '
     'consultation time per patient than any GP does.')],
   P(['a.  Ravi argues from relationship and record; Mei from information '
      'and time. Which is the binding constraint?',
      'b.  Why does "everything dispensed" differ from "everything '
      'prescribed"?'],
     ['a.  What is polypharmacy, and what is deprescribing?',
      'b.  What does a prescriber do that a dispenser does not?'],
     ['Allocate the duty in one sentence that acknowledges what each party '
      'uniquely has.']),
   ['Mei has the better of this on information and Ravi on authority, and '
    'the gap between those two is exactly where the problem lives. A '
    'pharmacist can see that an eighty-year-old is on three drugs that '
    'should not be combined and cannot stop any of them; a GP can stop them '
    'and may not know they are all being taken, because the record shows '
    'what was prescribed rather than what was collected and swallowed.',
    'So the duty should be split along that line rather than assigned '
    'whole. The review belongs with the pharmacist, who has the data and the '
    'time, and the decision belongs with the GP, who has the authority and '
    'the patient. What is missing is not a responsible party but an '
    'obligation on the first to send and on the second to respond — at '
    'present a pharmacist who spots an interaction can write to a GP and '
    'receive nothing, which is not a failure of either of them. Specialists '
    'I would leave out of the review entirely, not because they matter less '
    'but because a system in which four people are each partly responsible '
    'for the whole is the system we already have.'],
   F(['a.  The response gives specialists no role. What is the argument?',
      'b.  "which is not a failure of either of them" — what does this '
      'clause protect?'],
     ['a.  "cannot stop any of them ... may not know they are all being '
      'taken" — what does the parallel establish?',
      'b.  "collected and swallowed" — why two verbs?']),
   ['I think that all the health professionals should work together as a '
    'team to solve this problem because each of them has important '
    'information about the patient. The specialists know their own field '
    'very well, the general practitioner knows the patient and his history, '
    'and the pharmacist knows the medicines and their interactions. If they '
    'communicate better and share the information through a common digital '
    'system then these dangerous situations could be avoided. The patient '
    'and the family should also be informed and involved in the decisions '
    'about the treatment.'],
   [('P1', [['a.  Information, if the question is who can detect the '
             'problem; authority, if it is who can fix it. The response’s '
             'move is to notice that they are held by different people.'],
            ['b.  Because patients do not always collect prescriptions and '
             'do not always take what they collect, and because items bought '
             'without prescription never appear in the record at all.']]),
    ('P2', [['a.  Polypharmacy is being on many medicines at once; '
             'deprescribing is the deliberate withdrawal of some.'],
            ['b.  A prescriber decides what should be taken and carries the '
             'clinical and legal responsibility; a dispenser supplies it and '
             'checks it, with no power to change the decision.']]),
    ('P3', [['Model: "The review belongs with the pharmacist, who has the '
             'data and the time; the decision belongs with the GP, who has '
             'the authority."']]),
    ('F1', [['a.  That diffusing responsibility across four parties is '
             'precisely the current arrangement and the reason nobody does '
             'it. Adding a party to a coordination failure makes it worse, '
             'not better.'],
            ['b.  It converts the argument from a criticism of individuals '
             'into one about structure, which is both fairer and more '
             'useful: if neither party is failing, exhortation will not '
             'help and only an obligation will.']]),
    ('F2', [['a.  A symmetry of partial capacity — each party is '
             'missing exactly what the other has. Setting the two clauses in '
             'parallel makes the complementarity visible in a single '
             'sentence, which is what licenses the split that follows.'],
            ['b.  Because they are different failure points. A patient may '
             'collect and not take, or take and not collect what was '
             'prescribed, and both break the record in different ways. The '
             'pair specifies the gap precisely rather than gesturing at it.']]),
    ('F3', [['1.  It allocates to everyone and adds the family, which is '
             'the answer the question exists to improve on.'],
            ['2.  "If they communicate better and share information through '
             'a common digital system" assumes the solution rather than '
             'proposing it — the difficulty is that nobody is obliged '
             'to act on what is shared, which is never addressed.'],
            ['3.  Language: "the health professionals", "the patient and his '
             'history" (generic "their"), "the medicines and their '
             'interactions", "the decisions about the treatment" — '
             'over-articled throughout; and "dangerous situations could be '
             'avoided" is agentless where the whole question is about '
             'agency.']])]),

ad('AD 044', 'Law and ethics · cause ranking',
   ('rank causes by which one the remedy would have to address',
    'causal chain with result clauses', 'backlog, disclosure, legal aid, attrition',
    'ranking causes of an institutional failure'),
   'Dr Ferreira',
   'Criminal cases in many jurisdictions now take far longer to reach trial '
   'than a decade ago. Proposed causes include court closures, the volume of '
   'digital evidence, and cuts to legal aid. Which explains most of the '
   'delay?',
   [('Nour', 'Court closures. Fewer courtrooms and fewer sitting days means '
     'a queue, and everything else is a detail on top of a capacity '
     'problem.'),
    ('Erik', 'Digital disclosure. A case that once involved a few statements '
     'now involves three phones and forty thousand messages, all of which '
     'must be reviewed. The work per case has grown faster than the capacity '
     'has shrunk.')],
   P(['a.  Nour’s and Erik’s causes act on different quantities. '
      'Which, respectively?',
      'b.  Why does the third cause, legal aid, matter for attrition rather '
      'than for delay?'],
     ['a.  What is disclosure, and why is it the slow stage?',
      'b.  What is attrition in a justice system?'],
     ['Rank the causes in one sentence using what a remedy would have to '
      'change.']),
   ['Nour is describing reduced capacity and Erik increased work per case, '
    'and those multiply rather than add — which is why the delay has '
    'grown faster than either change on its own. The way to rank them is to '
    'ask which a remedy would have to address. Reopening courts without '
    'reducing the disclosure burden buys a proportional improvement and '
    'leaves the growth rate untouched, with the result that the backlog '
    'resumes rising from a lower base. Reducing the per-case burden changes '
    'the slope.',
    'So I would put disclosure first, not because the effect is larger today '
    '— it may not be — but because it is the term that is still '
    'growing. Capacity second, since it sets the level. Legal aid I would '
    'rank third for delay and first for something else: its effect is on '
    'who is represented and therefore on how many cases collapse or are '
    'resolved badly, which does not show up as waiting time at all. That is '
    'worth saying because a delay-focused debate will keep finding legal aid '
    'irrelevant, and it is not — it is simply causing a different '
    'harm.'],
   F(['a.  The response says the two causes "multiply rather than add". Why '
      'does that matter?',
      'b.  It ranks legal aid third and then says it is first for something '
      'else. Is that evasion?'],
     ['a.  "with the result that the backlog resumes rising from a lower '
      'base" — why a result clause?',
      'b.  "it is simply causing a different harm" — what does '
      '"simply" do?']),
   ['In my opinion the main cause is the lack of funding for the justice '
    'system in general. Governments have been cutting budgets for years and '
    'the consequences are visible everywhere: courts are closing, there are '
    'not enough judges and staff, legal aid is disappearing so many people '
    'cannot defend themselves properly. Of course the digital evidence also '
    'creates more work as Erik says, but if there were enough resources the '
    'system could handle it. Justice delayed is justice denied, and '
    'governments must understand that this is not a sector where you can '
    'save money without serious consequences.'],
   [('P1', [['a.  Nour on the rate at which cases can be processed; Erik on '
             'the work each case requires.'],
            ['b.  Because an unrepresented or poorly represented defendant '
             'affects whether a case proceeds and how it ends, not how long '
             'the queue is — so it shows up in outcomes rather than in '
             'waiting times.']]),
    ('P2', [['a.  The process of identifying and sharing material that might '
             'assist the defence or undermine the prosecution. It is slow '
             'because the volume must be reviewed by someone qualified to '
             'judge relevance.'],
            ['b.  Cases dropping out of the system before resolution '
             '— withdrawn, discontinued, or collapsing at trial.']]),
    ('P3', [['Model: "Reopening courts changes the level and reducing the '
             'disclosure burden changes the slope, so disclosure is the '
             'cause a remedy has to reach."']]),
    ('F1', [['a.  Because additive causes can be offset by fixing either '
             'one, while multiplicative ones cannot — halving the '
             'per-case burden and halving the capacity leaves you where you '
             'started. It explains why the delay grew faster than either '
             'input changed.'],
            ['b.  No, because it gives a reason: legal aid acts on a '
             'different outcome variable. Evasion would be refusing to rank; '
             'this ranks it on the stated question and then says what it is '
             'the main cause of, which is more informative rather than less.']]),
    ('F2', [['a.  Because the argument needs a determinate consequence of '
             'the partial remedy — that the growth resumes — and '
             'that consequence is the whole case for ranking disclosure '
             'first. A looser connector would leave it as a possibility '
             'rather than a prediction.'],
            ['b.  It marks the correction as small and obvious, which lets '
             'the writer rescue legal aid from irrelevance without appearing '
             'to overturn their own ranking. A longer qualification would '
             'make the point seem like a retraction.']]),
    ('F3', [['1.  It replaces all three candidate causes with a single '
             'upstream one and so answers a different question — '
             'ranking was required and none is offered.'],
            ['2.  "If there were enough resources the system could handle '
             'it" dismisses Erik’s point without engaging the claim '
             'that the work per case is growing faster than capacity could '
             'plausibly follow.'],
            ['3.  "Justice delayed is justice denied" is a slogan standing '
             'where the argument should be, and the final sentence addresses '
             'governments rather than the question. Language: "the justice '
             'system", "the consequences", "the digital evidence" '
             'over-articled.']])]),

ad('AD 045', 'Urban planning and transport · responsibility: who should act',
   ('ask who owns the externality',
    'modals of obligation across agents', 'externality, developer contribution, uplift, in perpetuity',
    'allocating cost between parties who all benefit'),
   'Professor Lindqvist',
   'A new housing development will add two thousand residents to an area '
   'whose bus service, school places and surgery capacity are already full. '
   'Who should pay for the additional infrastructure — the developer, '
   'the local authority, or the new residents themselves?',
   [('Pia', 'The developer. The value of the land rises the moment planning '
     'permission is granted, and that uplift is created by the public '
     'decision, not by anything the developer did. Capturing part of it to '
     'pay for the consequences is the least they can be asked.'),
    ('Marek', 'Charge the developer too much and the scheme does not get '
     'built, and the housing shortage that caused this is worse. The costs '
     'fall on everyone who benefits, which includes the existing residents '
     'whose area gets a better bus route.')],
   P(['a.  Marek makes a feasibility argument. Does it concede Pia’s '
      'principle?',
      'b.  Who actually bears a developer contribution in the long run?'],
     ['a.  What is land value uplift, and what creates it?',
      'b.  What does "in perpetuity" mean in a funding agreement, and why '
      'does it matter?'],
     ['State who should pay in one sentence that distinguishes the capital '
      'cost from the running cost.']),
   ['Pia is right about where the value comes from and Marek is right that '
    'a charge can be set high enough to stop the scheme, and the two are '
    'compatible because uplift is large. A contribution can take a '
    'substantial share and still leave the scheme viable; what matters is '
    'whether the charge is set before the land is bought, because a '
    'developer who has already paid a price that assumed no contribution '
    'really cannot absorb one. The incidence depends almost entirely on '
    'timing.',
    'The distinction neither of them draws is between the capital cost and '
    'the running cost. A developer contribution can build a surgery; it '
    'cannot staff one in perpetuity, and almost every argument of this kind '
    'is conducted as though the building were the expensive part. It is not. '
    'So I would take the capital cost from uplift, as Pia wants, set the '
    'rate well in advance so Marek’s viability problem does not arise, '
    'and be honest that the recurring cost falls on general taxation and '
    'always will — which is not a failure of the system but a fact '
    'about what developer contributions can and cannot do.'],
   F(['a.  The response says "the incidence depends almost entirely on '
      'timing". Explain.',
      'b.  What does the second paragraph accuse the whole debate of?'],
     ['a.  "and always will" — three words at the end of a clause. '
      'What is their effect?',
      'b.  "which is not a failure of the system but a fact about what '
      'developer contributions can and cannot do" — name the '
      'structure.']),
   ['I think the developers should pay because they are the ones who make '
    'huge profits from these projects while the local community has to deal '
    'with the consequences like traffic, overcrowded schools and waiting '
    'lists at the doctor. They always promise to contribute but then they '
    'negotiate to reduce their obligations and in the end the local '
    'authority has to pay with public money. The government should impose '
    'strict rules so that developers cannot escape their responsibilities '
    'and the new infrastructure is built before the houses are occupied.'],
   [('P1', [['a.  It does not dispute that uplift is publicly created; it '
             'claims that a charge above some level stops the project. So '
             'the disagreement is about level rather than principle.'],
            ['b.  Largely the landowner, through a lower land price '
             '— provided the charge is known before the land is '
             'bought. That is the fact the response builds on.']]),
    ('P2', [['a.  The increase in land value when permission to build is '
             'granted. It is created by the planning decision rather than by '
             'the owner.'],
            ['b.  Continuing indefinitely. It matters because infrastructure '
             'has running costs that a one-off contribution cannot cover, '
             'which is the response’s central point.']]),
    ('P3', [['Model: "Capital costs should come from uplift with the rate '
             'fixed before land is traded; running costs fall on general '
             'taxation and cannot be made to do otherwise."']]),
    ('F1', [['a.  If the charge is known before the land is purchased, the '
             'buyer bids less and the landowner bears it. If it is imposed '
             'afterwards, the developer has already paid a price assuming no '
             'charge and must absorb it from margin, which is where '
             'Marek’s viability failure comes from.'],
            ['b.  Of treating the building as the expensive part. Both '
             'positions assume the question is who funds construction, when '
             'the recurring cost of staffing and operating is larger and '
             'cannot be met from a one-off payment at all.']]),
    ('F2', [['a.  They convert a concession into a settled fact and close '
             'off the expectation that some better arrangement might be '
             'found. The brevity is what makes it read as realism rather '
             'than resignation.'],
            ['b.  A "not ... but" correlative, used to reframe a limitation '
             'as a definition. It prevents the admission being read as a '
             'criticism of the proposal, which is what would otherwise '
             'undermine the whole conclusion.']]),
    ('F3', [['1.  It never engages Marek’s viability argument, which '
             'was the only objection on the table.'],
            ['2.  "They always promise and then negotiate to reduce their '
             'obligations" is an assertion about conduct offered instead of '
             'an argument about incidence, and the timing question that '
             'determines who actually pays is absent.'],
            ['3.  The capital and running costs are never distinguished, so '
             '"the new infrastructure is built before the houses are '
             'occupied" addresses only the smaller half. Language: "the '
             'developers", "the local community", "the local authority", '
             '"the government" over-articled; "huge profits" is unsupported.']])]),

ad('AD 046b', 'Environment · agree or disagree with a claim',
   ('check whether the comparison controls for the thing being compared',
    'hedged generalisation with tend to', 'life cycle, embodied carbon, footprint, boundary',
    'disagreeing with a claim that sounds quantitative'),
   'Dr Haugen',
   'It is often said that buying a second-hand item is always better for '
   'the environment than buying new, however inefficient the old item is. '
   'How far do you accept this?',
   [('Ana', 'Mostly accept it. The carbon is already in the object. '
     'Manufacturing dominates the footprint of most goods, so extending a '
     'life avoids the largest single emission.'),
    ('Rui', 'For most goods yes, but "always" is doing a lot of work. For '
     'anything that consumes energy over a long life — a fridge, a '
     'car, a boiler — the use phase dwarfs manufacture, and keeping an '
     'inefficient one going can be worse than replacing it.')],
   P(['a.  How much do Ana and Rui actually disagree?',
      'b.  What determines which of them is right for a given object?'],
     ['a.  What is embodied carbon, and what is a use phase?',
      'b.  What is a system boundary, and why does it decide the answer?'],
     ['State the condition that separates the two cases, in one sentence.']),
   ['Rui is right and the disagreement is narrower than it looks: Ana’s '
    'claim holds for objects whose footprint is dominated by manufacture, '
    'and his for objects dominated by use. That is not a matter of opinion '
    'but of the ratio, and the ratio is known for most product categories. '
    'Clothes, furniture and tools tend to sit well on Ana’s side; '
    'anything with a motor or a heating element tends to sit on Rui’s.',
    'What neither says is that the "always" in the original claim is doing '
    'something other than describing the world. It is a heuristic, and '
    'heuristics are judged by the decisions they produce rather than by '
    'their accuracy in every case. Told to weigh embodied against '
    'operational carbon for each purchase, most people will do neither and '
    'will buy new, because that is the default the advertising supports. '
    'Told always to buy second-hand, they will be right on most purchases '
    'and wrong on a few large ones. I would keep the rule and attach the '
    'exception to it explicitly — second-hand unless it burns something '
    'or runs continuously — which is still a rule a person can follow '
    'in a shop.'],
   F(['a.  The response accepts Rui and then defends the claim he '
      'criticised. On what grounds?',
      'b.  What test is being applied to the heuristic?'],
     ['a.  "tend to sit well on Ana’s side" — why hedge a claim '
      'the writer has just called a matter of known ratios?',
      'b.  "second-hand unless it burns something or runs continuously" '
      '— why is this formulation better than the accurate one?']),
   ['I completely agree that buying second-hand is better for the '
    'environment because it reduces waste and avoids the production of new '
    'goods which consumes a lot of energy and raw materials. Our society is '
    'based on overconsumption and people change their phones and clothes '
    'every year for no reason, which is a disaster for the planet. Rui says '
    'that old fridges consume more electricity but I think this is a detail '
    'compared to the general problem of consumerism. We should all buy less '
    'and repair more instead of always looking for something new.'],
   [('P1', [['a.  Very little about the facts. Ana says manufacture '
             'dominates and Rui agrees for most goods; he adds a category '
             'where it does not.'],
            ['b.  The ratio of embodied to operational emissions over the '
             'remaining life — which is an empirical question with '
             'known answers by product type.']]),
    ('P2', [['a.  Embodied carbon is emitted making the object; the use '
             'phase is what it emits while in service.'],
            ['b.  What you count as part of the system. It decides the '
             'answer because excluding the use phase makes second-hand '
             'always better by construction, which is how the "always" '
             'claim survives.']]),
    ('P3', [['Model: "Ana is right where manufacture dominates the footprint '
             'and Rui where use does, which is a question about the object '
             'rather than about the principle."']]),
    ('F1', [['a.  On the grounds that the claim is a decision rule rather '
             'than a description, and rules are judged by the aggregate '
             'quality of the decisions they produce. A rule that is wrong '
             'in ten per cent of cases may still beat case-by-case analysis '
             'that nobody performs.'],
            ['b.  Whether it produces better decisions than the realistic '
             'alternative — which is not perfect analysis but the '
             'default behaviour people fall back on.']]),
    ('F2', [['a.  Because the writer does not have the figures to hand and '
             'the categories are not uniform — some furniture contains '
             'electronics, some tools are powered. The hedge keeps the claim '
             'exactly as strong as the knowledge behind it.'],
            ['b.  Because it can be applied in a shop in two seconds without '
             'data. An accurate rule nobody can execute is worse than an '
             'approximate rule that everyone can, which is the whole '
             'argument of the paragraph enacted in its own conclusion.']]),
    ('F3', [['1.  Rui’s exception is the only substantive point in the '
             'discussion and it is dismissed as "a detail" without '
             'argument — and it is exactly where the large emissions '
             'are.'],
            ['2.  The response answers a different question, about '
             'consumerism, which neither classmate raised.'],
            ['3.  "Which is a disaster for the planet" and "we should all '
             'buy less and repair more" are exhortation rather than '
             'analysis. Language: "the production of new goods", "the '
             'general problem of consumerism", "the planet" — and '
             '"for no reason" is a claim about motives offered as fact.']])]),

ad('AD 047', 'Business and economics · value trade-off',
   ('ask what each option does to the people with least slack',
    'comparative of importance', 'flexibility, precarity, predictability, scheduling',
    'weighing two goods that are both called flexibility'),
   'Dr Castellanos',
   'Flexible scheduling is defended both by employers, who want to match '
   'staffing to demand, and by workers, who want control over their hours. '
   'When those two conflict, whose flexibility should take priority?',
   [('Tomas', 'The employer’s, within limits. A business that cannot '
     'adjust staffing to demand carries costs that eventually show up as '
     'fewer jobs. Predictability for workers is valuable but it is not free, '
     'and somebody pays for it.'),
    ('Ife', 'The worker’s, and I would put it more strongly. The '
     'employer’s flexibility is a cost-management preference; the '
     'worker’s is the ability to arrange childcare, a second job or a '
     'course. Those are not the same kind of interest.')],
   P(['a.  Ife claims the two interests differ in kind. On what basis?',
      'b.  Tomas says predictability "is not free". Who does he think pays?'],
     ['a.  Distinguish flexibility from precarity.',
      'b.  What is a zero-hours contract, and what is a guaranteed-hours '
      'floor?'],
     ['State the asymmetry in one sentence without dismissing the '
      'employer’s interest.']),
   ['Ife is right about the asymmetry and Tomas is right that it has a '
    'price, and the question is who is best placed to carry it. Variation in '
    'demand is a fact about the business and somebody must absorb it; the '
    'argument is really about whether it is absorbed by an organisation '
    'with reserves and insurance or by individuals with neither. Put that '
    'way, Tomas’s own logic favours Ife: risk is cheapest where it can '
    'be pooled, and a firm pools across weeks and staff while a worker '
    'cannot pool at all.',
    'The qualification I would add is that this is not really about '
    'flexibility, which both sides claim. It is about who holds the option. '
    'A shift offered with a fortnight’s notice that the worker may '
    'decline is flexibility for both; the same shift offered at twelve '
    'hours’ notice with consequences for refusing is flexibility for '
    'one. The policy question is therefore not how much variation to allow '
    'but how far in advance it must be announced, which is measurable, '
    'enforceable, and leaves the employer free to vary staffing as much as '
    'the business genuinely requires.'],
   F(['a.  The response uses Tomas’s own reasoning against his '
      'conclusion. How?',
      'b.  It replaces the policy question. From what to what?'],
     ['a.  "while a worker cannot pool at all" — why does this clause '
      'settle the risk argument?',
      'b.  "It is about who holds the option." Why the short sentence?']),
   ['In my opinion workers should have priority because they are the weaker '
    'party in this relationship and they need stability to organise their '
    'lives, especially if they have children or study at the same time. '
    'Companies always talk about flexibility but what they really mean is '
    'that they want to pay people only when they need them, without any '
    'commitment. Of course businesses need to adapt to the market, but they '
    'have much more power and resources than individual workers, so they '
    'should be the ones who adapt. Governments should ban zero-hours '
    'contracts and guarantee a minimum number of hours.'],
   [('P1', [['a.  That one party’s interest is in managing costs and '
             'the other’s is in meeting fixed external obligations '
             '— childcare, study, a second job — which cannot be '
             'rescheduled at short notice.'],
            ['b.  Ultimately workers, through fewer jobs, if the cost of '
             'carrying idle staffing capacity makes employment more '
             'expensive.']]),
    ('P2', [['a.  Flexibility is the capacity to vary; precarity is '
             'exposure to variation you do not control. The same contract '
             'can be one for the employer and the other for the worker.'],
            ['b.  A zero-hours contract guarantees no minimum work; a '
             'guaranteed-hours floor commits the employer to a minimum while '
             'leaving the rest variable.']]),
    ('P3', [['Model: "Both want flexibility, but the employer wants the '
             'option and the worker wants the predictability, and those '
             'cannot both be held by the same party."']]),
    ('F1', [['a.  He argues that predictability has a cost and somebody '
             'must pay. The response accepts that and asks who can carry the '
             'cost most cheaply — and on standard risk reasoning that '
             'is the party able to pool it, which is the firm. His premise '
             'reaches her conclusion.'],
            ['b.  From how much variation should be permitted, to how much '
             'notice must be given. That converts an unresolvable conflict '
             'of interests into a measurable parameter.']]),
    ('F2', [['a.  Because the case for placing risk with the employer rests '
             'on pooling, and a single worker with one income stream has '
             'nothing to pool across. It is the step that makes the '
             'conclusion follow from Tomas’s own premise rather than '
             'from a competing value judgement.'],
            ['b.  It lands the reframing in five words after two long '
             'sentences, which makes it read as a realisation rather than '
             'an assertion. The rhythm marks the pivot of the response.']]),
    ('F3', [['1.  It restates Ife with more force and never engages '
             'Tomas’s argument that predictability has a cost somebody '
             'bears.'],
            ['2.  "They have much more power and resources, so they should '
             'be the ones who adapt" asserts a conclusion from an imbalance '
             'without showing why power implies the duty — the pooling '
             'argument that would justify it is absent.'],
            ['3.  The notice-period distinction, which is where the policy '
             'actually lives, never appears; and the ban proposed at the end '
             'is not connected to anything argued. Language: "the weaker '
             'party", "the market", "individual workers" over-articled; '
             '"companies always talk about" is unsupported.']])]),
]
