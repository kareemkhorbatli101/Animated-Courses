# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 018-023."""
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

ad('AD 018', 'Education · value trade-off',
   ('ask what each option forecloses, not what it delivers',
    'comparative of importance', 'breadth, specialisation, transferable, cohort',
    'arguing about curriculum without defending your own subject'),
   'Professor Adeyemi',
   'Some systems require students to specialise at sixteen; others keep a '
   'broad curriculum to eighteen or beyond. Specialists go deeper sooner; '
   'generalists keep their options open longer. Which matters more at that '
   'age — depth, or keeping options open?',
   [('Mira', 'Depth. Three subjects taken seriously at seventeen is what '
     'makes a first year at university possible at all. Breadth sounds '
     'generous but it produces students who have touched nine things and '
     'can do none of them.'),
    ('Oskar', 'Options. Most sixteen-year-olds do not know what they want, '
     'and a choice made then is effectively irreversible — you cannot '
     'pick up mathematics at twenty if you dropped it at sixteen. The cost '
     'falls hardest on students without anyone at home to advise them.')],
   P(['a.  Oskar makes a point about irreversibility and a point about '
      'equity. Separate them.',
      'b.  Does Mira’s argument require specialisation at sixteen '
      'specifically?'],
     ['a.  What are transferable skills, and why is the term often used '
      'loosely?',
      'b.  Distinguish breadth from superficiality.'],
     ['Grant Mira the depth argument and keep Oskar’s conclusion, in '
      'one sentence.']),
   ['Mira is right that depth is what makes a first year possible, and that '
    'is an argument about what students arrive knowing, not about when the '
    'narrowing has to happen. Oskar’s point about irreversibility is '
    'the one that decides it: the asymmetry between dropping mathematics at '
    'sixteen and picking it up at twenty is severe, and it is not symmetric '
    'with the cost of specialising a year later. One forecloses, the other '
    'merely delays.',
    'What neither says is that the two systems differ less in depth than in '
    'who does the choosing. A sixteen-year-old in a specialising system is '
    'not weighing subjects; they are following whichever ones went well in '
    'the previous two years, which largely means whichever ones were taught '
    'well. Oskar’s equity point is really this: the apparent choice '
    'encodes the quality of the teaching the student happened to get, and '
    'then makes it permanent. I would specialise late and narrowly rather '
    'than early and broadly — two subjects at seventeen rather than '
    'three at sixteen would keep Mira’s depth and most of '
    'Oskar’s doors.'],
   F(['a.  The response claims an asymmetry. State it in one sentence.',
      'b.  Find the sentence that reinterprets Oskar’s equity point. '
      'What does it add?'],
     ['a.  "One forecloses, the other merely delays." Why is this short '
      'sentence placed where it is?',
      'b.  "whichever ones were taught well" — what claim is smuggled '
      'into this clause?']),
   ['I think both students make very good points and this is a difficult '
    'question for every education system in the world. Mira is right that '
    'students need deep knowledge to succeed at university, especially in '
    'subjects like medicine or engineering where you need a strong base. '
    'But Oskar is also right that sixteen is very young to decide your whole '
    'future and many students change their mind later. In my opinion the '
    'best system would be a balance where students specialise a little but '
    'also continue with some general subjects, so they have both depth and '
    'flexibility for the future.'],
   [('P1', [['a.  Irreversibility: a subject dropped at sixteen cannot '
             'realistically be resumed. Equity: students with advisers at '
             'home make that choice better, so the irreversibility bites '
             'unequally.'],
            ['b.  No. It requires that students arrive at university with '
             'depth, which is compatible with specialising at seventeen or '
             'eighteen. Noticing that the argument does not reach the date '
             'is the opening.']]),
    ('P2', [['a.  Skills claimed to carry across domains. The term is loose '
             'because the evidence for transfer is weak for most of what is '
             'claimed, and it is often used to justify breadth without '
             'specifying what transfers.'],
            ['b.  Breadth is range with sufficient depth to be real; '
             'superficiality is range without it. Mira is attacking the '
             'second and calling it the first.']]),
    ('P3', [['Model: "Depth is an argument about what students arrive '
             'knowing, not about when they must narrow — and only one '
             'of the two errors is reversible."']]),
    ('F1', [['a.  Specialising a year too late costs some depth, which can '
             'be made up; specialising a year too early closes a subject '
             'permanently. The costs are not of the same kind, so they '
             'cannot simply be traded off.'],
            ['b.  "the apparent choice encodes the quality of the teaching '
             'the student happened to get, and then makes it permanent." It '
             'converts his fairness point into a causal mechanism: the '
             'system is not merely harder on some students, it '
             'systematically converts a school’s weakness into a '
             'pupil’s permanent limit.']]),
    ('F2', [['a.  At the end of the paragraph, where it lands as the '
             'conclusion of the asymmetry argument. Its brevity after two '
             'long sentences is what gives it force — the contrast in '
             'rhythm does work the words alone would not.'],
            ['b.  That subject choice at sixteen is largely determined by '
             'teaching quality rather than aptitude or interest. It is a '
             'strong empirical claim, and placing it in a relative clause '
             'lets it function as a premise without being argued for '
             '— which is efficient, and worth noticing when others do '
             'it to you.']]),
    ('F3', [['1.  It takes no position, and the compromise proposed '
             '— specialise a little, keep some general subjects '
             '— is what every system already claims to do.'],
            ['2.  Nothing is added. Both positions are restated, and the '
             'medicine and engineering examples support Mira without '
             'engaging Oskar’s irreversibility point at all.'],
            ['3.  Language: "this is a difficult question for every '
             'education system in the world" is filler; "decide your whole '
             'future" and "flexibility for the future" repeat; "a strong '
             'base" should be "a strong foundation".']])]),

ad('AD 019', 'Technology and AI · agree or disagree with a claim',
   ('check whether the comparison is with the alternative or with perfection',
    'comparative of importance', 'baseline, error rate, automation bias, liability',
    'arguing about risk without demanding a standard nobody meets'),
   'Dr Sorensen',
   'Automated systems now outperform human readers on several diagnostic '
   'imaging tasks under test conditions. Critics argue that errors by such '
   'systems are unacceptable in a way human errors are not. How do you assess '
   'that argument?',
   [('Lior', 'The objection confuses two things. If the system is more '
     'accurate than the radiologist, refusing it means choosing more missed '
     'cancers in order to feel better about who made the mistake. That is a '
     'preference about blame, not about patients.'),
    ('Dana', 'It is not only about blame. A human error is one error; a '
     'systematic error in a model is the same error repeated across every '
     'hospital that licenses it, and nobody notices because consistency '
     'looks like competence.')],
   P(['a.  Does Dana dispute Lior’s accuracy claim?',
      'b.  What would have to be true for Lior’s argument to go '
      'through?'],
     ['a.  What is a baseline, and why does the choice of baseline often '
      'settle an argument about technology?',
      'b.  What is automation bias?'],
     ['Grant Lior the arithmetic and keep Dana’s objection, in one '
      'sentence.']),
   ['Lior is right about the comparison most critics get wrong: the baseline '
    'is the radiologist, not a system that never errs. But Dana is pointing '
    'at something his framing cannot capture, which is that the two kinds of '
    'error have different shapes. Independent human errors are roughly '
    'random and partly cancel across a population; a correlated model error '
    'does not cancel, it accumulates, and it accumulates in whichever '
    'subgroup was thin in the training data.',
    'So the aggregate accuracy figure both of them are arguing about is the '
    'wrong statistic. What matters is the worst subgroup error rate and '
    'whether anyone is measuring it, and the honest answer at present is '
    'that licensing regimes mostly do not require it. I would deploy these '
    'systems — Lior’s point about missed cancers is not '
    'rhetorical — but with mandatory stratified reporting and a human '
    'reader retained on a sample, which is the only arrangement under which '
    'Dana’s failure mode would ever be detected.'],
   F(['a.  The response says the statistic both classmates argue about is '
      'the wrong one. Why?',
      'b.  What does retaining a human reader "on a sample" achieve that '
      'retaining one for every scan would not?'],
     ['a.  "it does not cancel, it accumulates" — what is the effect of '
      'the bare repetition of structure?',
      'b.  "Lior’s point about missed cancers is not rhetorical" '
      '— why insert this concession so late?']),
   ['I believe that we should be very careful with artificial intelligence '
    'in medicine because the health of the patients is the most important '
    'thing and we cannot take any risk with human lives. Even if the '
    'machines are more accurate in the tests, the real world is different '
    'and there can be many unexpected situations. Also the patients want to '
    'be treated by a human doctor who can understand their feelings and '
    'explain the results to them with empathy. So in my opinion AI can be '
    'used as a support tool for the doctors but the final decision must '
    'always be taken by a human being.'],
   [('P1', [['a.  No. She concedes it implicitly and attacks the structure '
             'of the errors rather than their number, which is why Lior’s '
             'reply about blame misses her.'],
            ['b.  That errors are comparable units — that one missed '
             'case from a model is equivalent to one from a human. '
             'Dana’s point is precisely that they are not, because '
             'they are correlated.']]),
    ('P2', [['a.  The thing you compare against. It settles arguments '
             'because comparing a new system with perfection almost always '
             'condemns it, while comparing it with current practice often '
             'vindicates it — and the choice is usually made silently.'],
            ['b.  The tendency to accept an automated recommendation without '
             'the scrutiny one would apply to a human one, which is what '
             'makes a correlated error so hard to catch.']]),
    ('P3', [['Model: "The right comparison is the radiologist rather than '
             'perfection, but human errors are independent and model errors '
             'are correlated, so the same accuracy figure means different '
             'things."']]),
    ('F1', [['a.  Because an aggregate rate averages over subgroups, and the '
             'failure Dana describes is concentrated in a subgroup. A system '
             'can beat the human average while being worse than the human '
             'for a particular population, and the headline figure will not '
             'show it.'],
            ['b.  It preserves detection at a fraction of the cost. The '
             'point of the human is no longer to catch each error but to '
             'generate an independent signal that would diverge from the '
             'model if the model drifted — which is exactly what a '
             'sample can do.']]),
    ('F2', [['a.  The parallel clauses set the two behaviours side by side '
             'with nothing between them, so the contrast lands without being '
             'explained. Dropping the conjunction speeds the sentence up at '
             'the point where the argument turns.'],
            ['b.  Because the writer has just spent a paragraph agreeing '
             'with Dana and is about to recommend deployment anyway. '
             'Conceding the force of Lior’s point immediately before '
             'the recommendation is what makes the recommendation read as a '
             'judgement rather than a hedge.']]),
    ('F3', [['1.  It engages neither classmate. Lior’s baseline '
             'argument and Dana’s correlation argument are both absent, '
             'replaced by general caution.'],
            ['2.  "The real world is different" and "unexpected situations" '
             'are unfalsifiable, and the empathy point answers a question '
             'about diagnostic accuracy with one about consultation.'],
            ['3.  Language: "the health of the patients", "the machines", '
             '"the doctors" over-articled; "we cannot take any risk with '
             'human lives" is an absolute that no medical system has ever '
             'met.']])]),

ad('AD 020', 'Business and economics · responsibility: who should act',
   ('locate the actor who bears the cost of acting and the benefit of not',
    'modals of obligation across agents', 'free rider, first mover, externality, collective action',
    'assigning duties when acting alone is self-defeating'),
   'Dr Castellanos',
   'Firms that raise wages, cut emissions or lengthen contracts ahead of '
   'their competitors often lose market share for doing so. Who should be '
   'responsible for raising standards — individual firms, industry '
   'bodies, or the state?',
   [('Karim', 'Firms. Waiting for regulation is how nothing happens for '
     'twenty years. Plenty of companies have raised standards unilaterally '
     'and survived, and some have been rewarded for it.'),
    ('Elsa', 'The state. A firm that moves first takes the whole cost and '
     'shares the benefit with every competitor who did not. Asking '
     'individual firms to solve that is asking them to lose on purpose, and '
     'most boards are not permitted to.')],
   P(['a.  Elsa names a structural problem. What is it called?',
      'b.  Karim offers counter-examples. What would make them decisive, '
      'and are they?'],
     ['a.  What is a free rider, and what is a first-mover disadvantage?',
      'b.  What is a collective action problem?'],
     ['Grant Karim his examples and keep Elsa’s conclusion, in one '
      'sentence.']),
   ['Elsa has the structure right and Karim’s examples do not touch it. '
    'The firms that raised standards unilaterally and prospered are mostly '
    'ones where the standard was visible to customers — coffee '
    'sourcing, not warehouse scheduling. Where the improvement is invisible '
    'at the point of sale, there is no mechanism by which the market rewards '
    'it, and the first mover simply pays. His counter-examples are therefore '
    'selected on the variable that does the work.',
    'But the conclusion is not simply the state, because the state is slow '
    'and industry bodies exist precisely for this. The useful distinction is '
    'between standards that can be verified by a buyer and standards that '
    'cannot. The first can be left to firms with a credible label behind '
    'them; the second need a floor that applies to everyone simultaneously, '
    'which is what removes the disadvantage of moving first. That floor can '
    'come from a regulator or from a binding industry agreement — what '
    'matters is not which body issues it but that nobody can defect from '
    'it, which is the one feature Karim’s voluntarism cannot supply.'],
   F(['a.  The response says Karim’s examples are "selected on the '
      'variable that does the work". Explain.',
      'b.  It then declines to simply endorse Elsa. On what basis?'],
     ['a.  "nobody can defect from it" — where does "defect" come from, '
      'and what does importing it do?',
      'b.  "coffee sourcing, not warehouse scheduling" — why two '
      'concrete examples rather than a general statement?']),
   ['In my opinion all three actors have responsibility in this matter '
    'because improving standards is a shared goal for the whole society. The '
    'companies should act ethically and not only think about their profits, '
    'the industry associations should create codes of conduct for their '
    'members, and the governments should make laws and control that they are '
    'respected. Elsa is right that it is difficult for one company alone but '
    'if more companies decide to do the right thing then it will become '
    'normal in the sector and the others will follow. So I think we need '
    'cooperation between all the actors to achieve a real change.'],
   [('P1', [['a.  A collective action problem, with a first-mover '
             'disadvantage: the cost is private and the benefit is shared, '
             'so the rational individual move is to wait.'],
            ['b.  They would be decisive if they were drawn from cases where '
             'the improvement was invisible to buyers. They are not, which '
             'is what the response identifies.']]),
    ('P2', [['a.  A free rider takes a benefit without paying for it. A '
             'first-mover disadvantage is the cost borne by whoever acts '
             'before the others, which the free riders then share in.'],
            ['b.  A situation in which everyone would be better off if all '
             'acted, but each is individually better off not acting. It is '
             'the entire content of Elsa’s argument.']]),
    ('P3', [['Model: "His examples are all cases where the buyer could see '
             'the standard, which is exactly the condition under which the '
             'collective action problem does not arise."']]),
    ('F1', [['a.  The examples are not a random sample of firms that raised '
             'standards; they are the ones where raising standards was '
             'commercially visible. Since visibility is precisely what '
             'determines whether the market rewards the move, the sample is '
             'selected on the explanatory variable and cannot test the '
             'claim.'],
            ['b.  On speed and on the existence of an alternative '
             'instrument. Her diagnosis is right but her remedy is too '
             'narrow: what the problem needs is a binding floor, and a '
             'regulator is one way of producing one but not the only way.']]),
    ('F2', [['a.  From game theory, where defection is the unilateral move '
             'away from a cooperative agreement. Importing it names the '
             'precise property the floor must have, and makes clear that the '
             'issue is enforceability rather than authority.'],
            ['b.  Because the distinction between visible and invisible '
             'standards is abstract and the examples make it instantly '
             'checkable. The reader tests the claim against two cases they '
             'already understand, which is faster than any definition.']]),
    ('F3', [['1.  It distributes responsibility to everyone, which is the '
             'answer the question was designed to make you improve on.'],
            ['2.  Elsa’s structural point is acknowledged and then '
             'dissolved by wishful thinking: "if more companies decide to do '
             'the right thing then it will become normal" simply asserts '
             'that the collective action problem solves itself.'],
            ['3.  Language: "control that they are respected" is a false '
             'friend for "enforce them"; "the whole society", "the '
             'companies", "the governments" over-articled; "a real change" '
             'is vague.']])]),

ad('AD 021b', 'Law and ethics · value trade-off',
   ('ask who is protected by the rule and who by the exception',
    'conditional qualification', 'anonymity, open justice, reporting restriction, in camera',
    'weighing two principles that are both genuinely important'),
   'Dr Ferreira',
   'Court proceedings are normally public, on the principle that justice '
   'must be seen to be done. In some cases — sexual offences, children, '
   'certain witnesses — reporting is restricted. Where should the '
   'balance lie between open justice and the protection of those involved?',
   [('Noor', 'Protection, more often than now. Open justice is a principle '
     'about institutions being watched, and that is satisfied by the '
     'proceedings being attended and reported in substance. It does not '
     'require that a complainant’s name be searchable for ever.'),
    ('Felix', 'Open justice, and I am wary of the direction. Every '
     'restriction is justified by a sympathetic case, and the accumulated '
     'effect is a court system the public cannot follow. Anonymity for '
     'complainants is one thing; the same mechanism is used to protect '
     'institutions from embarrassment.')],
   P(['a.  Do Noor and Felix disagree about complainant anonymity?',
      'b.  Felix makes an argument about accumulation. Why is it harder to '
      'answer than an argument about a single case?'],
     ['a.  What does "in camera" mean, and how does it differ from a '
      'reporting restriction?',
      'b.  What is open justice meant to protect against?'],
     ['Identify the thing both would accept, in one sentence, and say what '
      'it implies.']),
   ['They agree about the case that is usually argued and disagree about the '
    'one that matters. Noor’s distinction is the right one: open '
    'justice is a claim about scrutiny of the court, which is satisfied by '
    'the substance being reportable, and nothing about it requires a '
    'complainant’s name to be permanently searchable. Felix does not '
    'really dispute that. His worry is about who else uses the mechanism.',
    'That suggests the balance should not be struck case by case at all, but '
    'by asking what the restriction protects. A rule that anonymises natural '
    'persons in defined categories operates automatically and cannot be '
    'applied for; a rule that lets a party apply for restrictions on grounds '
    'of harm is the one that institutions use, because they can afford the '
    'application and the complainant cannot. So I would extend the automatic '
    'protections Noor wants and narrow sharply the discretionary ones Felix '
    'fears, which are different instruments that the debate persistently '
    'treats as one.'],
   F(['a.  The response says the two agree "about the case that is usually '
      'argued". Which case, and why does noticing that matter?',
      'b.  What distinction does the second paragraph introduce?'],
     ['a.  "because they can afford the application and the complainant '
      'cannot" — what kind of argument is this?',
      'b.  "which are different instruments that the debate persistently '
      'treats as one" — what work does this closing clause do?']),
   ['This is a very sensitive issue and I can see both sides. On one hand it '
    'is very important that the victims of serious crimes are protected and '
    'that their identity is not published in the newspapers, because they '
    'have suffered enough and they should not suffer again from the public '
    'attention. On the other hand Felix is right that the justice must be '
    'transparent because otherwise people will not trust the system. In my '
    'opinion the judges should decide in each case individually what is the '
    'best solution, taking into account all the circumstances.'],
   [('P1', [['a.  No. Both accept it; Noor argues for it and Felix says '
             '"anonymity for complainants is one thing". The disagreement is '
             'about what else the same mechanism covers.'],
            ['b.  Because each individual restriction can be defended on its '
             'merits while the aggregate is still bad. An argument about '
             'accumulation cannot be met by defending any particular case, '
             'which is what makes it hard to answer and easy to ignore.']]),
    ('P2', [['a.  "In camera" means the hearing itself is held in private; a '
             'reporting restriction allows the hearing to be attended but '
             'limits what may be published. The second is far less '
             'intrusive on open justice.'],
            ['b.  Against secret proceedings, arbitrary decisions and '
             'judicial misconduct — it is a check on the court, not a '
             'right to know about the parties.']]),
    ('P3', [['Model: "Both accept anonymity for complainants, so the real '
             'question is whether the same mechanism should be available to '
             'institutions."']]),
    ('F1', [['a.  Complainant anonymity in sexual offence cases. Noticing it '
             'matters because the entire public debate is conducted over '
             'that case, which neither of them disputes — so arguing it '
             'again would contribute nothing.'],
            ['b.  Between automatic protections attaching to a category of '
             'person and discretionary ones granted on application. It is '
             'the distinction that separates Noor’s goal from '
             'Felix’s fear, and it is invisible while both are called '
             '"reporting restrictions".']]),
    ('F2', [['a.  A distributive argument about access to a legal mechanism. '
             'It says the discretionary rule is formally available to '
             'everyone and practically available to the well-resourced, '
             'which is why it drifts towards protecting institutions.'],
            ['b.  It names the error the whole discussion has been making '
             'and attributes it to the debate rather than to either '
             'classmate, which lets the writer correct both without '
             'criticising either.']]),
    ('F3', [['1.  It restates the uncontroversial case at length and never '
             'reaches the disagreement, which is about institutional use of '
             'the same mechanism.'],
            ['2.  The recommendation — judges decide case by case '
             '— is the status quo, and it is precisely what Felix’s '
             'accumulation argument is directed against, so it answers him '
             'by ignoring him.'],
            ['3.  Language: "the victims", "the justice", "the public '
             'attention" over-articled; "they have suffered enough" is '
             'sentiment rather than argument; "what is the best solution" '
             'has statement order wrong in an embedded question.']])]),

ad('AD 022', 'Arts and culture · agree or disagree with a claim',
   ('separate a claim about quality from a claim about conditions',
    'counterfactual would have', 'patronage, commission, precarity, canon',
    'disagreeing with a nostalgic claim'),
   'Professor Rahimi',
   'It is sometimes said that art has suffered since artists stopped being '
   'supported by patrons and had to survive in a market. Others argue the '
   'market freed artists from the tastes of the powerful. What do you think?',
   [('Ilse', 'The market freed them. Patronage meant painting what a cardinal '
     'or a duke wanted, on his terms, with his relatives in the corner of '
     'the picture. Whatever the market’s faults, nobody has to flatter '
     'anybody to sell a novel.'),
    ('Marcus', 'The market has its own patron, which is scale. You do not '
     'have to flatter a duke, you have to be legible to a hundred thousand '
     'strangers, and that constrains what can be made just as effectively '
     '— only invisibly, because nobody signs the commission.')],
   P(['a.  Marcus is not defending patronage. What is he doing?',
      'b.  What evidence could decide between them?'],
     ['a.  What is precarity, and how does it differ from poverty?',
      'b.  What is a commission, and who sets its terms?'],
     ['State what both agree on and where they actually differ, in one '
      'sentence.']),
   ['Both agree that art is shaped by whoever pays, and they differ about '
    'whether a diffuse payer constrains less than a named one. Ilse has the '
    'better of the comparison as she frames it: a duke could require '
    'specific content, and a market cannot. But Marcus is pointing at '
    'something the comparison hides, which is that the two systems fail '
    'differently. Patronage produced flattery and left everything outside '
    'the patron’s interest unmade; the market produces legibility and '
    'leaves unmade whatever cannot find an audience quickly.',
    'What decides it, I think, is not which constraint is tighter but '
    'whether the constraint can be escaped. Under patronage there was one '
    'route and refusing it meant not working. A market has many buyers of '
    'different sizes, and the small ones subsidise exactly the work the '
    'large ones will not take — which is why the mid-list and the small '
    'press matter out of all proportion to their revenue. Had the market '
    'consisted only of its largest buyers, Marcus would be straightforwardly '
    'right; what makes Ilse right is plurality rather than freedom.'],
   F(['a.  The response reframes the question in the second paragraph. From '
      'what to what?',
      'b.  Why does it say "what makes Ilse right is plurality rather than '
      'freedom"?'],
     ['a.  "Had the market consisted only of its largest buyers, Marcus '
      'would be straightforwardly right" — what does the concession '
      'achieve?',
      'b.  "nobody signs the commission" is Marcus’s phrase. Why does '
      'the response not reuse it?']),
   ['I agree with Ilse that the market gave the artists freedom because now '
    'they can create whatever they want without asking permission from a '
    'rich patron. In the past the artists were like servants and they had to '
    'follow the orders of the church or the aristocracy, which limited their '
    'creativity a lot. Today an artist can express his own personal vision '
    'and find his public directly, especially with the internet which allows '
    'everybody to publish their work without intermediaries. Of course it is '
    'difficult to earn money from art but at least the artists are free, and '
    'freedom is the most important thing for creation.'],
   [('P1', [['a.  Arguing that the market is also a patron, differing in '
             'visibility rather than in kind. He is attacking the premise '
             'that the market is the absence of a patron.'],
            ['b.  What gets made under each system, particularly at the '
             'margins — what patronage left unmade, and what the market '
             'leaves unmade. Both are visible in the historical record.']]),
    ('P2', [['a.  Precarity is insecurity of income and status — '
             'unpredictability rather than absolute lack. An artist can be '
             'precarious without being poor, and the instability is itself '
             'the constraint.'],
            ['b.  A work ordered in advance, with the terms set by whoever '
             'pays. Marcus’s point is that the market issues the same '
             'instruction without anyone having to write it down.']]),
    ('P3', [['Model: "They agree that art follows the money and differ about '
             'whether a diffuse payer constrains less than a named one."']]),
    ('F1', [['a.  From which constraint is tighter, to whether the '
             'constraint can be escaped. That shifts the argument onto '
             'structure, where the plurality of buyers becomes the decisive '
             'fact.'],
            ['b.  Because freedom is Ilse’s word and it overstates: no '
             'artist is unconstrained. Plurality is the property that '
             'actually does the work — many buyers of different sizes '
             '— and it is a weaker and more defensible claim.']]),
    ('F2', [['a.  It grants Marcus the strongest version of his position '
             'under a specified condition, which both shows the argument has '
             'been taken seriously and identifies exactly what the '
             'disagreement turns on. A concession that names its own '
             'condition is an argument, not a courtesy.'],
            ['b.  Because reusing an opponent’s phrase adopts his '
             'framing. The response accepts the observation and declines the '
             'metaphor, which is what allows it to arrive at a different '
             'conclusion from the same fact.']]),
    ('F3', [['1.  It never engages Marcus, whose entire point is that the '
             'market constrains invisibly. "Create whatever they want" is '
             'the claim he disputed.'],
            ['2.  The internet is introduced as evidence of freedom without '
             'noticing that it is the clearest case of his argument '
             '— reach at scale, rewarding legibility.'],
            ['3.  Language: "the artists" throughout, "his own personal '
             'vision" (redundant, and generic "their" would be better), and '
             '"freedom is the most important thing for creation" is '
             'assertion standing in for the conclusion.']])]),

ad('AD 023', 'Health and medicine · cause ranking',
   ('rank by what each cause predicts about who is affected',
    'causal chain with result clauses', 'incidence, confounder, gradient, upstream',
    'ranking causes where one is behavioural and one is structural'),
   'Professor Ikeda',
   'Rates of type 2 diabetes have risen sharply in most high-income '
   'countries. Explanations include diet, physical inactivity and the social '
   'gradient in income and work. Which of these best explains the rise?',
   [('Ana', 'Diet, and specifically what changed in it. Activity levels have '
     'fallen slowly for a century; the composition of cheap food changed '
     'fast and the curve bends with it.'),
    ('Ravi', 'The gradient. Incidence tracks income more tightly than it '
     'tracks any individual behaviour, and the behaviours themselves follow '
     'the income. Treating diet as the cause stops the analysis one step too '
     'early.')],
   P(['a.  Ravi says diet is "one step too early". What does he mean?',
      'b.  Is there a version of Ana’s claim that survives his '
      'objection?'],
     ['a.  What is incidence, and how does it differ from prevalence?',
      'b.  What does "upstream" mean in public health?'],
     ['Rank the three causes in one sentence using what each predicts about '
      'who gets ill.']),
   ['Ravi is right that the gradient is the better predictor and I do not '
    'think that settles it, because the two claims answer different '
    'questions. The gradient explains who gets ill; it does not explain why '
    'the rate rose, since income inequality in several of these countries '
    'moved far less than incidence did. Ana’s point survives that '
    'test: the composition of cheap calories changed quickly, with the '
    'result that the same income now buys a different metabolic exposure '
    'than it did in 1980.',
    'So I would rank them by question rather than against each other. For '
    'the rise, diet composition first, because it is the variable that moved '
    'on the right timescale. For the distribution, the gradient first, '
    'because it determines who meets that exposure and who can avoid it. '
    'Inactivity I would put third on both counts — real, but a slow '
    'trend cannot produce a fast change. The practical consequence is that '
    'interventions aimed at individual behaviour tend to work best on people '
    'who have the slack to use them, which is why they so often widen the '
    'gradient while improving the average.'],
   F(['a.  The response splits the question in two. What are the two '
      'questions, and why is that not evasion?',
      'b.  The last sentence makes a policy claim. How does it follow from '
      'the ranking?'],
     ['a.  "with the result that the same income now buys a different '
      'metabolic exposure" — why a result clause here?',
      'b.  "a slow trend cannot produce a fast change" — what general '
      'principle is this, and where else in this book have you met it?']),
   ['I think that all these factors are important and they are all connected '
    'to each other in a complex way. Modern people eat too much sugar and '
    'processed food, they sit all day in the office and in the car, and they '
    'do not have time to cook healthy meals or to do exercise because of '
    'their stressful lives. Also poor people cannot afford healthy food '
    'which is more expensive than junk food. In my opinion governments '
    'should educate people about nutrition from childhood and also tax the '
    'sugary drinks so people will consume less of them and the rates of '
    'diabetes will decrease.'],
   [('P1', [['a.  That diet is itself an effect of income and conditions, so '
             'naming it as the cause stops before reaching what determines '
             'it.'],
            ['b.  Yes — that what changed over time was the '
             'composition of cheap food, which is a claim about a variable '
             'that moved, not about individual choice. That is the version '
             'the response rescues.']]),
    ('P2', [['a.  Incidence is new cases in a period; prevalence is total '
             'cases at a time. A rise in prevalence can reflect better '
             'survival rather than more disease, so the distinction matters.'],
            ['b.  Acting on the conditions that produce exposure rather than '
             'on the exposure itself — income, housing, food '
             'environment rather than individual behaviour.']]),
    ('P3', [['Model: "The gradient predicts who gets ill, diet composition '
             'predicts when the rate rose, and inactivity predicts neither '
             'on the relevant timescale."']]),
    ('F1', [['a.  Why the rate rose, and who it falls on. It is not evasion '
             'because each question gets a definite answer and a reason; '
             'evasion would be declining to rank at all. Separating them is '
             'what reveals that the two classmates were never answering the '
             'same question.'],
            ['b.  If the gradient determines who can act on advice, then an '
             'intervention requiring individual capacity will be taken up '
             'unevenly — improving the mean while widening the spread. '
             'The ranking supplies the mechanism and the policy claim '
             'follows from it.']]),
    ('F2', [['a.  Because the argument needs a determinate consequence: the '
             'change in food composition produced a specific altered '
             'exposure at constant income. A looser connector would leave '
             'the causal claim vaguer than the argument requires.'],
            ['b.  That a constant or slowly moving variable cannot explain a '
             'rapidly moving outcome. You met it in AD 001 with league '
             'tables and in AD 004 with network effects — it is one of '
             'the most reliable tools in cause ranking.']]),
    ('F3', [['1.  It refuses to rank, which was the question, and lists '
             'causes instead.'],
            ['2.  The two classmates are not engaged: Ana’s timing '
             'argument and Ravi’s gradient argument both disappear into '
             'a general description of modern life.'],
            ['3.  The recommendations contradict the one analytic point it '
             'makes — having said poor people cannot afford healthy '
             'food, it proposes education and a consumption tax, both of '
             'which fall hardest on the same group. Language: "the sugary '
             'drinks", "the rates of diabetes" over-articled.']])]),
]
