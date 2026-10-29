# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 067-072."""
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

ad('AD 067', 'Medicine · policy choice',
   ('choose by asking what the rule does in the hard case',
    'passive with modal auxiliaries', 'triage, allocation, utility, prognosis',
    'choosing a rationing rule'),
   'Dr Ferris',
   'When a scarce treatment cannot be given to everyone who needs it, '
   'hospitals must choose a rule. Some allocate by expected benefit, '
   'treating those likely to gain most. Others use a lottery among all '
   'eligible patients. Which rule is better?',
   [('Mei', 'Expected benefit. A rule that ignores prognosis wastes the '
     'treatment, and the point of the treatment is to produce health.'),
    ('Arno', 'Prognosis tracks everything else — age, comorbidity, '
     'how well someone has been treated up to now. A benefit rule quietly '
     'allocates by advantage and calls it medicine.')],
   P(['a.  Arno is not denying that prognosis predicts outcome. What is he '
      'claiming?',
      'b.  Why does the lottery have any appeal at all, given it ignores '
      'useful information?'],
     ['a.  What is prognosis, and what is triage?',
      'b.  What does utility mean in an allocation rule?'],
     ['Choose in one sentence that names the hard case your rule '
      'produces.']),
   ['I would allocate by expected benefit with a floor, because the '
    'lottery buys fairness at a price that falls on the patients it is '
    'supposed to protect.',
    'Mei’s case is strong where the differences are large. If one '
    'patient will gain fifteen years and another three months, a coin '
    'toss is not neutrality but indifference to the outcome, and the three '
    'months are not improved by having been chosen at random.',
    'Arno’s objection should still be taken seriously, because it is '
    'about what gets counted. If prognosis is scored using factors that '
    'track prior access to care, the rule converts past disadvantage into '
    'future disadvantage, and that can be done without anyone intending '
    'it. The answer is to restrict what may be used in the estimate '
    '— the immediate clinical picture, not life expectancy or social '
    'circumstance.',
    'So the rule I would defend is a narrow benefit estimate with a '
    'lottery among patients whose estimates are close. That keeps '
    'Mei’s gain where the differences are real and removes the '
    'spurious precision Arno is right to distrust, which is where a '
    'benefit rule does its quiet discriminating.'],
   F(['a.  The response adopts Mei’s rule and Arno’s '
      'safeguards. Is that a compromise or an argument?',
      'b.  Why does the final proposal use a lottery only for close '
      'cases?'],
     ['a.  "that can be done without anyone intending it" — why '
      'stress the absence of intent?',
      'b.  "a coin toss is not neutrality but indifference to the '
      'outcome" — what distinction is being drawn?']),
   ['This is a very difficult ethical question and I think both options '
    'have advantages and disadvantages. On the one hand we want to save as '
    'many lives as possible, but on the other hand every human life has '
    'equal value and it is wrong to say that one patient deserves treatment '
    'more than another. Doctors should decide based on their professional '
    'judgement and their medical knowledge. In my opinion a combination of '
    'both approaches would probably be the fairest solution for everyone.'],
   [('P1', [['a.  That prognosis is correlated with social advantage, so '
             'scoring by it imports inequality into the allocation while '
             'appearing to use only clinical facts.'],
            ['b.  Because it cannot be gamed, requires no contestable '
             'estimate, and treats every eligible patient as equally a '
             'candidate. Its appeal is procedural rather than '
             'outcome-based.']]),
    ('P2', [['a.  Prognosis is the predicted course of a condition; '
             'triage is sorting patients by urgency and likely benefit '
             'when resources are limited.'],
            ['b.  The aggregate good produced — here, health gained '
             'across all patients rather than for any one of them.']]),
    ('P3', [['Model: "Allocate by a narrow clinical benefit estimate, with '
             'a lottery wherever the estimates are close."']]),
    ('F1', [['a.  An argument, because each element answers a specific '
             'objection rather than splitting the difference. Mei’s '
             'rule survives where the differences are large; '
             'Arno’s constraint applies where the estimate stops '
             'being reliable.'],
            ['b.  Because the lottery’s virtue is that it refuses to '
             'pretend to a precision that is not there. Where two '
             'estimates differ by months, the difference is inside the '
             'margin of error, and randomising is more honest than '
             'ranking.']]),
    ('F2', [['a.  Because the usual reply to Arno is that nobody is '
             'discriminating. Locating the harm in the scoring rather '
             'than in anyone’s motives makes the objection '
             'unanswerable by good faith, which is what forces a design '
             'change.'],
            ['b.  Between a procedure that treats patients equally and one '
             'that declines to care what happens to them. It concedes that '
             'the lottery is impartial while denying that impartiality is '
             'the only value at stake.']]),
    ('F3', [['1.  It takes no position. "A combination of both approaches" '
             'specifies nothing about when each would apply, which is the '
             'entire question.'],
            ['2.  "Doctors should decide based on professional judgement" '
             'avoids the problem — the dispute is about what rule '
             'that judgement should follow.'],
            ['3.  Neither speaker is engaged: Mei’s efficiency '
             'argument and Arno’s point about prognosis tracking '
             'advantage are both left untouched, and "every human life has '
             'equal value" is asserted without being connected to either '
             'rule.']])]),

ad('AD 068', 'Literature · agree / disagree',
   ('argue from what the text does rather than what it means',
    'present tense for textual description', 'canon, close reading, context, intention',
    'arguing about how a text should be read'),
   'Professor Haddad',
   'Some critics hold that a work should be read on its own terms, without '
   'reference to the author’s life or intentions. Others argue that '
   'this makes criticism a parlour game and that historical context is '
   'essential to understanding. Where do you stand?',
   [('Theo', 'The text is what we have. An author’s stated intention '
     'is just another reader’s opinion, and often a worse one '
     '— writers are notoriously bad at saying what they made.'),
    ('Rosa', 'That works for lyric poems and nothing else. You cannot read '
     'a satire without knowing what it satirises. Context is not optional '
     'decoration, it is sometimes the entire meaning.')],
   P(['a.  Rosa’s example is chosen carefully. Why satire?',
      'b.  Is Theo committed to rejecting all external information?'],
     ['a.  What is close reading, and what is the canon?',
      'b.  Distinguish an author’s intention from a work’s '
      'meaning.'],
     ['Take a position in one sentence that says what context is for.']),
   ['Rosa wins the particular case and Theo is right about the general '
    'principle, and the two are reconciled once we ask what context '
    'supplies.',
    'Her example is well chosen because satire depends on a target. A '
    'reader who does not know what is being mocked does not read the '
    'satire weakly; they read a different text, often a straight one. '
    'Context here is not interpretation but decoding — it tells you '
    'what the words meant, in the way a dictionary does.',
    'That is quite different from what Theo is refusing. His target is '
    'the move from "the author said she meant X" to "the work means X", '
    'and he is right to refuse it. An author’s account of her own '
    'book is evidence about her intentions and not about what she '
    'produced; the gap between the two is where most interesting '
    'criticism happens.',
    'So I would say context is admissible as evidence of what the words '
    'did at the time, and inadmissible as a verdict on what the work '
    'achieves. We need the history to read the sentence and the sentence '
    'to judge the book, and confusing those two uses is what makes this '
    'argument feel unresolvable.'],
   F(['a.  The response splits context into two uses. What are they?',
      'b.  Why does it say a reader without the target reads "a different '
      'text" rather than a worse one?'],
     ['a.  "satire depends on a target" — why is the whole response '
      'written in the present tense?',
      'b.  "We need the history to read the sentence and the sentence to '
      'judge the book" — what does the symmetry accomplish?']),
   ['I agree with Rosa because I think it is impossible to understand '
    'literature without knowing the historical background of the period in '
    'which it was written. Every writer is influenced by their society and '
    'their personal experiences, so if we ignore this we will certainly '
    'misunderstand the text. For example when I studied Dickens at school '
    'our teacher explained the social conditions of Victorian England and '
    'this helped us a lot. Theo is right that authors can be wrong about '
    'their own work but context is still very important.'],
   [('P1', [['a.  Because satire has a referent outside itself. It is the '
             'clearest case where missing the context produces not a '
             'thinner reading but a wrong one, so it is hard for Theo to '
             'absorb.'],
            ['b.  No. He is rejecting intention as authority over '
             'meaning, which is compatible with using historical '
             'information to establish what words denoted. His position '
             'only looks extreme if those are run together.']]),
    ('P2', [['a.  Close reading is detailed attention to the text’s '
             'own language; the canon is the body of works a tradition '
             'treats as central.'],
            ['b.  Intention is what the author aimed to do; meaning is '
             'what the work supports. They can diverge, and the divergence '
             'is itself a critical subject.']]),
    ('P3', [['Model: "Context tells us what the words meant; it does not '
             'tell us what the work achieves."']]),
    ('F1', [['a.  Decoding — recovering what the words denoted to '
             'their first readers — and adjudication, using the '
             'author’s intentions to settle what the work means. The '
             'first is necessary, the second is what Theo rightly '
             'rejects.'],
            ['b.  Because "worse" implies the same object imperfectly '
             'grasped, while a satire read straight is a different object '
             'altogether. That is what makes Rosa’s case decisive '
             'rather than a matter of degree.']]),
    ('F2', [['a.  Because claims about what a text does are treated as '
             'standing facts about the work rather than as historical '
             'events. The present tense is the convention that marks '
             'textual description, and using it consistently keeps '
             'description separate from the historical claims around it.'],
            ['b.  It assigns each side one half of the process in a single '
             'balanced sentence, so the resolution is audible in the '
             'structure. It also stops the conclusion sounding like a '
             'concession to either speaker.']]),
    ('F3', [['1.  Theo’s actual argument — that intention is not '
             'authority — is acknowledged and then set aside with '
             '"but context is still very important", which does not '
             'answer it.'],
            ['2.  "Impossible to understand literature without knowing the '
             'historical background" is far stronger than Rosa’s '
             'claim and is not defended; the Dickens anecdote shows only '
             'that context can help.'],
            ['3.  No distinction is drawn between context as decoding and '
             'context as authority, so the response never reaches the point '
             'at issue.']])]),

ad('AD 069', 'Statistics · agree / disagree',
   ('distinguish a measurement problem from a substantive one',
    'defining relative clauses', 'proxy, construct, validity, confounding',
    'challenging what a number measures'),
   'Dr Alvarez',
   'University rankings are widely criticised, yet widely used. Defenders '
   'say an imperfect measure is better than none, since applicants '
   'otherwise choose on reputation and rumour. Critics say a bad measure '
   'is worse than none because it changes behaviour. Who is right?',
   [('Kofi', 'Imperfect beats nothing. Before rankings, prestige was '
     'self-perpetuating and invisible. At least a ranking states its '
     'criteria and can be argued with.'),
    ('Leila', 'And universities then optimise for the criteria. Once '
     'spending per student is scored, you get spending, not learning. The '
     'measure does not just describe the sector, it reshapes it.')],
   P(['a.  Leila’s objection is about a feedback effect. State it in '
      'one sentence.',
      'b.  Does Kofi’s "better than nothing" survive that '
      'objection?'],
     ['a.  What is a proxy, and what is construct validity?',
      'b.  What does it mean for a measure to be gamed?'],
     ['Take a position in one sentence about when a bad measure is worse '
      'than none.']),
   ['Leila has the stronger argument, and the reason is that Kofi is '
    'comparing a ranking to no information when he should be comparing it '
    'to the behaviour it causes.',
    'His point about transparency is fair. A published criterion can be '
    'disputed in a way that reputation cannot, and that is a genuine gain '
    'over a sector ordered by rumour. But it is a gain in accountability, '
    'not in accuracy, and accountability for the wrong quantity is not '
    'obviously worth having.',
    'The effect Leila describes is what settles it. A measure that '
    'changes what it measures stops being a proxy for the thing and '
    'becomes a target in its own right. Spending per student was chosen '
    'because it correlated with teaching quality; once universities '
    'allocate budgets to raise it, the correlation that justified the '
    'proxy is the first thing destroyed.',
    'So my position is narrow: a bad measure is worse than none whenever '
    'it is consequential enough to be optimised against. Rankings that '
    'nobody acted on would be harmless and useless; rankings that drive '
    'admissions and funding are neither, and that is precisely why the '
    'measurement problem here is a substantive one.'],
   F(['a.  The response says Kofi is making the wrong comparison. What is '
      'the right one?',
      'b.  Why does it concede that transparency is a real gain?'],
     ['a.  "a bad measure is worse than none whenever it is consequential '
      'enough to be optimised against" — what does the relative '
      'clause do?',
      'b.  "the correlation that justified the proxy is the first thing '
      'destroyed" — why end the paragraph here?']),
   ['I think rankings are generally a bad thing because they create a lot '
    'of pressure and stress for universities and students, and they often '
    'use criteria that do not really reflect the quality of teaching. Many '
    'excellent universities are ranked low simply because they do not have '
    'a lot of research money. Leila is right that universities try to '
    'improve their position in the table instead of improving education. '
    'Students should choose a university based on what is right for them '
    'personally, not on a number in a newspaper.'],
   [('P1', [['a.  That the act of measuring changes the behaviour being '
             'measured, so the measure’s validity degrades as its '
             'influence grows.'],
            ['b.  Only if the alternative to a ranking is genuinely a '
             'vacuum. If the ranking actively redirects institutional '
             'spending, the comparison is between rumour and distorted '
             'incentives, which is a different question.']]),
    ('P2', [['a.  A proxy is an observable stand-in for something that '
             'cannot be measured directly; construct validity is the '
             'extent to which it actually captures the intended '
             'concept.'],
            ['b.  To raise the score without improving the underlying '
             'quality it was meant to indicate.']]),
    ('P3', [['Model: "A bad measure is worse than none once it is '
             'consequential enough that institutions reorganise around '
             'it."']]),
    ('F1', [['a.  Between the ranking and the world the ranking creates '
             '— not between the ranking and silence. Once a measure '
             'changes behaviour, the pre-measurement world is no longer '
             'the alternative on offer.'],
            ['b.  Because it is true and because the concession isolates '
             'the real disagreement. Granting that rankings improve '
             'accountability makes the subsequent point — that '
             'accountability for the wrong quantity is of little value '
             '— harder to deflect.']]),
    ('F2', [['a.  It restricts the claim to a defined condition, so the '
             'response is not asserting that all imperfect measures are '
             'harmful. That restriction is what makes the position '
             'defensible and also identifies which rankings are the '
             'problem.'],
            ['b.  Because it names the precise mechanism of the failure in '
             'one clause. The proxy was justified by a correlation, and '
             'optimisation attacks that correlation first, which is a '
             'sharper claim than saying the measure becomes '
             'inaccurate.']]),
    ('F3', [['1.  "They create pressure and stress" and "many excellent '
             'universities are ranked low" are complaints about rankings, '
             'not answers to Kofi’s argument that the alternative is '
             'worse.'],
            ['2.  Leila’s feedback point is restated rather than '
             'developed — nothing explains why optimisation '
             'undermines the measure itself.'],
            ['3.  "Students should choose based on what is right for them '
             'personally" is advice to individuals where the question is '
             'about an institutional measure, so the response never '
             'addresses the comparison it was asked to make.']])]),

ad('AD 070', 'Architecture · value trade-off',
   ('weigh a cost that is visible against one that is not',
    'contrastive while clauses', 'fabric, retrofit, embodied carbon, listed',
    'weighing preservation against performance'),
   'Professor Lindqvist',
   'Historic buildings are often poorly insulated and expensive to heat, '
   'but regulations and public feeling restrict alterations to their '
   'fabric. Some argue the climate case for deep retrofit must override '
   'conservation rules. Others say demolition and loss are worse. What '
   'should take priority?',
   [('Juno', 'Retrofit, and stop treating window frames as sacred. '
     'Buildings are a quarter of emissions. A beautiful facade is not '
     'worth a century of gas.'),
    ('Pieter', 'Replacing a building emits more than heating an old one '
     'badly for decades — the carbon is already in the walls. '
     'Conservation is often the low-carbon option and nobody counts it '
     'that way.')],
   P(['a.  Pieter is making a counting argument, not an aesthetic one. '
      'Explain.',
      'b.  Juno and Pieter may not actually be proposing different things. '
      'Why not?'],
     ['a.  What is embodied carbon, and what is a retrofit?',
      'b.  What does fabric mean in a building context, and what does '
      'listed mean?'],
     ['Take a position in one sentence that names what is being left out '
      'of the sum.']),
   ['Pieter is right about the accounting and Juno is right about the '
    'rules, and the two conclusions are compatible once demolition is '
    'separated from alteration.',
    'The embodied carbon point is decisive against demolition. A '
    'masonry building represents emissions already spent, and replacing '
    'it with a better-performing one takes decades to repay that debt '
    '— by which time the grid has largely decarbonised anyway and '
    'the operational saving is worth much less. On those numbers '
    'conservation usually wins.',
    'But that is not an argument against altering what stands, and this '
    'is where Juno has a point the accounting does not answer. '
    'Conservation rules often protect appearance rather than fabric, so '
    'they block internal insulation and secondary glazing that would cost '
    'no heritage at all, while permitting the slow decay of buildings '
    'nobody can afford to heat. The rules are failing on their own terms '
    'as well as on climate ones.',
    'So my position is: keep the building, and change what the rules '
    'protect. A regime that defends the street elevation and leaves the '
    'inside alone would deliver nearly all of Juno’s saving and all '
    'of Pieter’s.'],
   F(['a.  The response says the two speakers are compatible. What makes '
      'that more than a dodge?',
      'b.  Why mention that unaffordable buildings decay?'],
     ['a.  "they block internal insulation ... while permitting the slow '
      'decay of buildings nobody can afford to heat" — what does the '
      'while-clause do?',
      'b.  "by which time the grid has largely decarbonised anyway" '
      '— why include this?']),
   ['I believe we must prioritise the environment because climate change '
    'is an emergency and we do not have time to worry about old windows. '
    'Of course historic buildings are beautiful and part of our cultural '
    'heritage, and I understand why people want to protect them, but '
    'future generations will not thank us for saving facades if the planet '
    'is uninhabitable. Pieter makes an interesting point about embodied '
    'carbon which I had not considered, but I still think energy '
    'efficiency has to come first.'],
   [('P1', [['a.  He is claiming that the carbon already spent building '
             'the structure belongs in the comparison, and that leaving it '
             'out makes replacement look better than it is.'],
            ['b.  Because Juno wants alteration and Pieter is arguing '
             'against demolition. Both can be satisfied by a rule that '
             'permits changing a retained building, which neither of them '
             'states.']]),
    ('P2', [['a.  Embodied carbon is the emissions from producing and '
             'assembling the materials; a retrofit upgrades an existing '
             'building’s performance.'],
            ['b.  Fabric is the physical material of the building; listed '
             'means legally protected, which restricts what may be '
             'altered.']]),
    ('P3', [['Model: "The carbon already in the walls belongs in the sum, '
             'which makes keeping the building right and the current '
             'alteration rules wrong."']]),
    ('F1', [['a.  That it identifies a specific distinction neither '
             'speaker drew — between demolishing and altering '
             '— and shows each argument applies to a different one. '
             'A dodge would assert that both have a point without '
             'locating where.'],
            ['b.  Because it shows the current rules failing by the '
             'conservation standard itself. A building left to rot is a '
             'heritage loss, so the argument for reform no longer depends '
             'on climate priorities overriding conservation ones.']]),
    ('F2', [['a.  It sets the rules’ two effects against each other '
             'in one sentence — what they block and what they allow '
             '— which is the cleanest way to show that the regime is '
             'incoherent rather than merely strict.'],
            ['b.  Because the operational saving from a new building is '
             'usually valued at today’s carbon intensity. If the grid '
             'cleans up during the payback period, the saving shrinks and '
             'the embodied debt does not, which strengthens Pieter’s '
             'case considerably.']]),
    ('F3', [['1.  Pieter’s argument is called interesting and then '
             'set aside — "but I still think energy efficiency has to '
             'come first" — without any engagement with the '
             'accounting.'],
            ['2.  "We do not have time to worry about old windows" '
             'dismisses the conservation position rather than weighing it, '
             'which is what a trade-off question asks for.'],
            ['3.  No distinction between demolition and alteration, no '
             'mention of what the rules actually protect, and "future '
             'generations will not thank us" is rhetoric standing in for '
             'the comparison.']])]),

ad('AD 097', 'Education · policy choice',
   ('choose the option whose benefit is hardest to get otherwise',
    'parallel structure in lists', 'streaming, mixed ability, attainment, differentiation',
    'choosing between two school structures'),
   'Professor Adeyemi',
   'Schools can group pupils by attainment for core subjects or teach '
   'mixed-ability classes throughout. Grouping lets teaching be pitched '
   'precisely; mixed-ability classes avoid labelling pupils early and tend '
   'to lift the lowest attainers. Which should a school choose?',
   [('Bea', 'Group them. A class spanning four years of attainment serves '
     'nobody — the teacher pitches to the middle and both ends are '
     'wasted.'),
    ('Noor', 'The evidence says the bottom set learns less, and children '
     'put in it at seven are still in it at sixteen. The precision is real '
     'but it is bought from the pupils who can least afford it.')],
   P(['a.  Noor concedes Bea’s mechanism. What is her objection '
      'then?',
      'b.  Why does the age of first grouping matter so much?'],
     ['a.  What is differentiation, and what is streaming?',
      'b.  Distinguish attainment from ability.'],
     ['Choose in one sentence that names what your option gives up.']),
   ['Noor has the better of it, though not for the reason usually given, '
    'and Bea’s problem is real enough that the answer cannot simply '
    'be mixed-ability throughout.',
    'The precision Bea describes is genuine: teaching a four-year span in '
    'one room is a practical impossibility, and pretending otherwise '
    'leaves the lowest attainers quietly unsupported in a different way. '
    'That is the cost of Noor’s position and it should be '
    'acknowledged.',
    'But the evidence she points to is about something grouping does '
    'uniquely. A pupil placed low at seven receives a slower curriculum, '
    'lower expectations and less experienced teaching, and the gap that '
    'justified the placement widens until it justifies itself. That is a '
    'mechanism no amount of good teaching inside the set can offset, '
    'because it operates through what is taught rather than how well.',
    'So I would choose mixed-ability classes with in-class grouping that '
    'is reviewed termly and never applied to the whole curriculum. It '
    'keeps the pitching Bea needs, it refuses the permanence that does '
    'the damage, and it is the one arrangement whose benefit cannot be '
    'obtained under the alternative — a pupil in the bottom stream '
    'cannot be regrouped by a better teacher.'],
   F(['a.  The response concedes that mixed-ability teaching also fails '
      'the lowest attainers. Why admit that?',
      'b.  Why is the final paragraph’s test "whose benefit cannot be '
      'obtained under the alternative"?'],
     ['a.  "a slower curriculum, lower expectations and less experienced '
      'teaching" — why three items in that form?',
      'b.  "the gap that justified the placement widens until it justifies '
      'itself" — what is being described?']),
   ['I think mixed ability classes are better because every child deserves '
    'an equal chance and it is wrong to label children as clever or stupid '
    'at a young age. This can damage their confidence and become a '
    'self-fulfilling prophecy. In my own school we were divided into '
    'groups and the students in the lower group were often treated badly '
    'by teachers and other students, which was very unfair. Bea says '
    'teachers cannot teach a wide range but good teachers can always find '
    'ways to help every student.'],
   [('P1', [['a.  That the cost of the precision falls on the pupils it '
             'is least defensible to charge. She accepts that grouping '
             'improves pitching and denies that the gain justifies the '
             'distribution of the loss.'],
            ['b.  Because an early placement is made on the least reliable '
             'evidence and is the most likely to become permanent, so the '
             'error compounds for the longest time.']]),
    ('P2', [['a.  Differentiation is adapting teaching to different '
             'learners within a class; streaming is assigning pupils to '
             'classes by attainment across subjects.'],
            ['b.  Attainment is what a pupil has achieved so far; ability '
             'is a claim about capacity. Grouping measures the first and '
             'is routinely read as the second.']]),
    ('P3', [['Model: "Mixed-ability classes with temporary in-class '
             'grouping, accepting that pitching will be harder, because '
             'permanence is what does the damage."']]),
    ('F1', [['a.  Because the concession is true and because it removes '
             'the easy objection. A position that denies any cost to '
             'mixed-ability teaching is not credible to anyone who has '
             'taught, and naming the cost lets the argument turn on which '
             'cost is worse.'],
            ['b.  Because both options have benefits, so listing them '
             'settles nothing. Asking which benefit is unavailable under '
             'the other identifies what is genuinely at stake — and '
             'good teaching can improve a set but cannot move a pupil out '
             'of it.']]),
    ('F2', [['a.  The parallel noun phrases make the three effects read as '
             'one compound disadvantage rather than three separate '
             'complaints, which is the point: they arrive together and '
             'reinforce each other.'],
            ['b.  A self-reinforcing loop. The placement produces the '
             'conditions that confirm it, so the evidence for the decision '
             'is partly created by the decision — which is why '
             'reviewing placements termly is the operative safeguard.']]),
    ('F3', [['1.  "Good teachers can always find ways to help every '
             'student" dismisses Bea’s practical objection by '
             'assertion, and would prove that no grouping is ever '
             'necessary.'],
            ['2.  The argument is anecdotal — one school, poorly '
             'treated pupils — where the prompt points to evidence '
             'about attainment.'],
            ['3.  "Clever or stupid" misstates what grouping claims to '
             'measure, and no actual arrangement is proposed, so the policy '
             'question is not answered.']])]),

ad('AD 072', 'Economics · cause ranking',
   ('rank causes by which one the policy can reach',
    'inversion with not only', 'supply, demand, elasticity, planning',
    'ranking causes of a price rise'),
   'Dr Whitfield',
   'Housing costs have risen far faster than incomes in many cities. '
   'Suggested causes include restrictive planning rules, low interest '
   'rates inflating asset prices, and the concentration of jobs in a few '
   'metropolitan areas. Which matters most?',
   [('Hugo', 'Planning. Where building is permitted, prices track '
     'construction costs; where it is not, they track whatever buyers can '
     'borrow. Everything else is downstream of supply.'),
    ('Aiko', 'Then why did prices rise in cities that did build? Cheap '
     'credit raised what everyone could bid, and supply cannot outrun a '
     'bidding war that is funded externally.')],
   P(['a.  Aiko’s question is a test of Hugo’s theory. What '
      'would it take to answer it?',
      'b.  Why might the third cause be the deepest and still rank last?'],
     ['a.  What is elasticity of supply, and why is it central here?',
      'b.  Distinguish an asset price from a consumption price.'],
     ['Rank the three in one sentence using a mechanism.']),
   ['Hugo has the primary cause and Aiko has correctly identified what '
    'determines how much damage it does.',
    'The two are not rivals. Cheap credit raises what buyers can bid, but '
    'where supply responds, extra bidding power produces extra houses '
    'rather than extra price. Not only does restricted supply raise prices '
    'directly, it converts every demand-side shock into a price rise '
    'instead of a quantity one. That is why planning ranks first: it is '
    'the condition that gives credit its effect.',
    'Aiko’s counter-example needs a closer look. The cities that '
    '"did build" mostly built at the periphery while restricting '
    'development where jobs are, so supply was elastic in the wrong place. '
    'That is consistent with Hugo rather than against him.',
    'Job concentration I would put third despite being the deepest cause, '
    'because it is the one policy can least reach. It explains why demand '
    'is where it is; it does not explain why that demand becomes price '
    'rather than construction. So: planning first as the binding '
    'constraint, credit second as the force it converts, and '
    'agglomeration third as the background that neither created nor could '
    'resolve the problem.'],
   F(['a.  The response reinterprets Aiko’s counter-example rather '
      'than rejecting it. Why is that stronger?',
      'b.  Why does the deepest cause rank last?'],
     ['a.  "Not only does restricted supply raise prices directly, it '
      'converts..." — identify the inversion and say what it '
      'contributes.',
      'b.  "supply was elastic in the wrong place" — why is this '
      'phrasing precise?']),
   ['In my opinion the main cause is that there are not enough houses '
    'being built, which is a simple matter of supply and demand. '
    'Governments should build more social housing and make it easier to '
    'get planning permission. Aiko mentions interest rates but central '
    'banks cannot keep rates high forever because this would damage the '
    'economy. The concentration of jobs in big cities is also a problem '
    'and governments should try to create more jobs in smaller towns so '
    'that people do not all move to the same places.'],
   [('P1', [['a.  Evidence about where those cities built relative to '
             'where demand was. If the building happened away from jobs, '
             'supply was not in fact responsive and the counter-example '
             'dissolves.'],
            ['b.  Because ranking is about explanatory and practical '
             'priority, not depth. A cause that explains the pattern but '
             'cannot be altered does less work in an account aimed at '
             'policy.']]),
    ('P2', [['a.  Elasticity of supply is how much quantity responds to '
             'price. Where it is high, demand shocks produce building; '
             'where it is low, they produce price rises — which is '
             'the whole argument.'],
            ['b.  A consumption price reflects the cost of using '
             'something; an asset price reflects expected future returns '
             'and is far more sensitive to credit conditions.']]),
    ('P3', [['Model: "Planning first because it converts demand into price '
             'rather than houses, credit second as the demand it converts, '
             'job concentration third."']]),
    ('F1', [['a.  Because rejecting it would leave the evidence standing '
             'against Hugo. Showing that the building happened away from '
             'demand turns her apparent counter-example into a '
             'confirmation, which is a far more damaging reply.'],
            ['b.  Because it is upstream of the demand but says nothing '
             'about why that demand becomes price instead of '
             'construction, and because policy cannot relocate '
             'agglomeration. Depth and explanatory priority come '
             'apart.']]),
    ('F2', [['a.  "Not only does restricted supply raise prices" inverts '
             'subject and auxiliary after the fronted negative. It marks '
             'the second effect as the more important one, which is '
             'exactly the claim — the conversion of demand into price '
             'is what makes planning primary.'],
            ['b.  Because it concedes the fact Aiko cites — building '
             'did occur — while denying its relevance. Elasticity is '
             'location-specific, so aggregate construction figures can '
             'coexist with a binding constraint where it matters.']]),
    ('F3', [['1.  It does not rank. Three causes are mentioned and all are '
             'given policy recommendations, with no account of which '
             'explains most.'],
            ['2.  Aiko’s argument is answered with a claim about what '
             'central banks can do, which is beside the point — her '
             'claim was about the effect of credit on prices, not about '
             'policy feasibility.'],
            ['3.  "A simple matter of supply and demand" names no '
             'mechanism, and the counter-example about cities that did '
             'build is never addressed at all.']])]),
]
