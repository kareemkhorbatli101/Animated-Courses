# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 060-065."""
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

ad('AD 060', 'Sociology · agree / disagree',
   ('convert a moral claim into a testable one',
    'cleft sentences for emphasis', 'cohesion, atomisation, civic, associational',
    'testing a claim about social decline'),
   'Dr Brennan',
   'It is often argued that community life is weakening — that people '
   'join fewer organisations, know fewer neighbours and trust strangers '
   'less than their grandparents did. Others say the forms have changed '
   'rather than declined. Which is closer to the truth?',
   [('Sara', 'The decline is measurable. Membership of unions, churches, '
     'clubs and parent associations is down everywhere, and nothing has '
     'replaced them at the same scale.'),
    ('Idris', 'Measured by what, though? Those were the institutions the '
     'twentieth century happened to use. People now organise around '
     'interests rather than places, and that does not show up in '
     'membership figures at all.')],
   P(['a.  Idris is making a measurement objection. State it precisely.',
      'b.  What would count as evidence that the forms had changed rather '
      'than declined?'],
     ['a.  What is social cohesion, and what is atomisation?',
      'b.  What does associational mean in this context?'],
     ['Take a position in one sentence that names what would settle it.']),
   ['Sara is measuring something real and Idris is right that it is not '
    'quite the thing in dispute.',
    'The membership figures are not in doubt. What is in doubt is whether '
    'membership of formal organisations is the right indicator of '
    'cohesion, and Idris has a point: an interest-based network leaves no '
    'register to count. But his alternative has to do the same work, and '
    'this is where I part from him. The function those institutions '
    'performed was repeated contact with people you had not chosen '
    '— neighbours, colleagues, fellow parishioners. Interest-based '
    'networks are selected, so they do not produce that contact at all.',
    'It is that function, not the membership figures, that I think has '
    'genuinely declined. The test would be whether people still have '
    'regular dealings with others unlike themselves, and the available '
    'evidence on neighbourhood ties and cross-class friendship suggests '
    'they do not.',
    'So the honest answer is that both are partly right and the dispute '
    'is about which loss matters. Idris is correct that counting clubs '
    'understates what exists now; Sara is correct that something has gone, '
    'and it is the unchosen contact rather than the clubhouse.'],
   F(['a.  The response accepts Idris’s objection and then turns it '
      'against him. How?',
      'b.  Why does the third paragraph propose a test?'],
     ['a.  "It is that function, not the membership figures, that I think '
      'has genuinely declined" — identify the structure and say what '
      'it does.',
      'b.  "it is the unchosen contact rather than the clubhouse" — '
      'why end on this contrast?']),
   ['I think both Sara and Idris have good arguments but I agree more with '
    'Idris because society is always changing and we should not be '
    'nostalgic about the past. Young people today are very connected '
    'through social media and online communities, which my grandparents '
    'never had. It is true that fewer people go to church but that does not '
    'mean they care less about each other. In my country people still have '
    'very strong family and neighbour relationships, so I do not think '
    'community is disappearing at all.'],
   [('P1', [['a.  That the indicator captures only one historical form of '
             'association, so a fall in it does not establish a fall in '
             'the underlying thing. The measure and the concept have come '
             'apart.'],
            ['b.  Evidence that the functions the old institutions '
             'performed — repeated contact, mutual obligation, '
             'collective action — are now performed elsewhere. '
             'Showing that new groups exist is not enough; they have to do '
             'the same work.']]),
    ('P2', [['a.  Cohesion is the density of ties and shared obligation in '
             'a population; atomisation is its breakdown into separate '
             'individuals.'],
            ['b.  Relating to formal membership organisations — which '
             'is exactly the narrow sense Idris is objecting to.']]),
    ('P3', [['Model: "The question is whether people still have regular '
             'dealings with others they did not choose, and that is what '
             'the membership figures only indirectly measure."']]),
    ('F1', [['a.  By accepting that membership is a poor measure and then '
             'applying the same standard to his alternative. If the test is '
             'what the institutions did rather than what they were called, '
             'interest-based networks fail it, because they are chosen and '
             'the old forms were not.'],
            ['b.  Because the dispute has become about which indicator is '
             'right, and that cannot be settled by assertion. Naming a '
             'test — contact with people unlike yourself — '
             'converts a disagreement about values into one about '
             'evidence.']]),
    ('F2', [['a.  A cleft: "It is that function ... that has declined." It '
             'puts the writer’s candidate in focus position and '
             'explicitly displaces Sara’s, which is more precise than '
             'simply asserting a different indicator.'],
            ['b.  Because it summarises the whole argument in one '
             'opposition. The clubhouse is the form Sara counted; the '
             'unchosen contact is the function the response says was lost, '
             'and ending there fixes the distinction in the '
             'reader’s mind.']]),
    ('F3', [['1.  "Society is always changing and we should not be '
             'nostalgic" answers nobody’s argument — neither '
             'speaker claimed the past was better, only that something '
             'measurable has changed.'],
            ['2.  "Young people are very connected through social media" is '
             'offered as a replacement without any claim that it performs '
             'the same function, which is precisely what is in dispute.'],
            ['3.  "In my country people still have very strong family and '
             'neighbour relationships" is a single observation set against '
             'population-level evidence, and no test or indicator is '
             'proposed anywhere.']])]),

ad('AD 062', 'Computer science · policy choice',
   ('choose by asking who bears the cost of being wrong',
    'conditional perfect', 'false positive, threshold, audit, appeal',
    'choosing where to set a decision threshold'),
   'Professor Zhou',
   'A university is deploying software to flag possible plagiarism. It can '
   'be tuned to flag more cases, catching nearly all misconduct but '
   'generating many false accusations, or fewer, missing some but rarely '
   'accusing the innocent. Where should the threshold sit?',
   [('Marta', 'Set it high — flag few. A false accusation of cheating '
     'follows a student for years even when it is withdrawn, and the harm '
     'is not symmetrical with letting someone get away with it.'),
    ('Tom', 'If the tool misses most cheating, honest students pay for it '
     'in devalued degrees and in the knowledge that the rules are '
     'unenforced. Under-detection is a harm too, just a diffuse one.')],
   P(['a.  Both speakers agree the tool errs. What do they disagree '
      'about?',
      'b.  Why does the existence of an appeal process change the '
      'calculation?'],
     ['a.  What is a false positive, and what is a threshold?',
      'b.  What does it mean to audit a decision process?'],
     ['Choose in one sentence that names who pays for each kind of '
      'error.']),
   ['Marta is right about where the threshold should sit, but Tom has '
    'identified the cost she is asking honest students to absorb, and the '
    'answer is to stop treating the threshold as the only variable.',
    'The asymmetry Marta describes is real. A flagged student faces an '
    'investigation, a delayed result and a file entry, and that happens '
    'whether or not the flag was sound; the cost of a miss falls on '
    'nobody in particular. Had the two errors been symmetrical, Tom’s '
    'argument would carry, but they are not, and the burden of proof '
    'belongs where the harm is concentrated.',
    'What Tom’s objection should buy is not a lower threshold but a '
    'different design. A flag that triggers an automatic accusation forces '
    'the trade-off he describes; a flag that triggers a human reading of '
    'the script does not, because the second filter catches the false '
    'positives before they cost anybody anything.',
    'So: set the threshold low enough to catch most misconduct, and make '
    'the flag an instruction to a human rather than a charge. The expensive '
    'thing is the accusation, not the detection, and once those are '
    'separated the dilemma mostly dissolves.'],
   F(['a.  The response reframes the question rather than answering it as '
      'posed. Is that legitimate?',
      'b.  Why does the final paragraph choose a low threshold when the '
      'second paragraph sided with Marta?'],
     ['a.  "Had the two errors been symmetrical, Tom’s argument would '
      'carry" — identify the structure and say what it concedes.',
      'b.  "The expensive thing is the accusation, not the detection" '
      '— why state it this way?']),
   ['I agree with Marta that it is better to set the threshold high because '
    'accusing an innocent student of cheating is a terrible thing that can '
    'ruin their reputation and their future. It is a basic principle of '
    'justice that it is better to let a guilty person go free than to punish '
    'an innocent one. Tom says honest students suffer from devalued degrees '
    'but I think this is a much smaller problem and anyway most students are '
    'honest so there is not much cheating to detect in the first place.'],
   [('P1', [['a.  Which error is worse, and therefore which way the tool '
             'should be biased. Marta weighs concentrated harm to '
             'individuals; Tom weighs diffuse harm to the cohort.'],
            ['b.  Because an appeal converts some false positives into '
             'corrected decisions, which lowers the cost of flagging '
             '— though not to zero, since the investigation itself is '
             'part of the harm.']]),
    ('P2', [['a.  A false positive is a flag raised where there was no '
             'misconduct; the threshold is the score above which the system '
             'raises one.'],
            ['b.  To check a sample of its decisions independently, which '
             'is how you discover what the error rates actually are rather '
             'than what the vendor claims.']]),
    ('P3', [['Model: "A false positive is paid for by one identifiable '
             'student and a miss by everybody slightly, so the threshold '
             'should protect the individual — and the flag should not '
             'be an accusation."']]),
    ('F1', [['a.  Yes, because the dilemma as posed assumes the flag and '
             'the accusation are the same event, and that assumption is a '
             'design choice rather than a fact. Attacking a false premise '
             'is stronger than choosing between the options it forces.'],
            ['b.  Because the reason for siding with Marta was the cost of '
             'false accusations, and once a human filter sits between the '
             'flag and the accusation that cost falls sharply. The '
             'threshold can then be low without producing the harm she was '
             'protecting against.']]),
    ('F2', [['a.  An inverted conditional perfect. It concedes that '
             'Tom’s reasoning is valid and locates the disagreement in '
             'a premise — the symmetry of the two errors — which '
             'is a far more respectful and more damaging objection than '
             'denying his conclusion.'],
            ['b.  Because it isolates which step in the process creates the '
             'harm. Framed that way, the design fix is obvious, whereas '
             '"we should be careful with accusations" would leave the '
             'reader with a sentiment rather than a mechanism.']]),
    ('F3', [['1.  "Most students are honest so there is not much cheating '
             'to detect" is an empirical claim with no support, and it '
             'denies Tom’s premise instead of weighing it.'],
            ['2.  The justice principle is asserted as though the case were '
             'a criminal trial, without addressing Tom’s point that '
             'the diffuse harm also falls on innocent people.'],
            ['3.  Nothing about design, appeal, human review or audit '
             '— the response accepts the dilemma exactly as posed and '
             'so cannot get beyond picking a side.']])]),

ad('AD 063', 'Anthropology · agree / disagree',
   ('distinguish what a practice does from what participants say it does',
    'reduced relative clauses', 'informant, emic, function, reflexivity',
    'separating participants’ accounts from analysis'),
   'Dr Oyelaran',
   'Anthropologists sometimes find that a practice persists for reasons '
   'quite different from those its participants give. Some argue the '
   'analyst’s account is then the better one. Others argue that '
   'overriding participants’ own understanding is both arrogant and '
   'bad method. What do you think?',
   [('Nina', 'If the function of a ritual is to redistribute food in a '
     'lean season, that is what it does, whatever people say about '
     'ancestors. The analysis is not a competing belief, it is an '
     'explanation.'),
    ('Pavel', 'And who decides what the function is? That move has been '
     'used to tell people their own lives are false consciousness for a '
     'century. The participants are the only ones with access to what the '
     'practice means.')],
   P(['a.  Nina and Pavel use "function" and "meaning" differently. How?',
      'b.  Is there a version of Pavel’s objection that survives '
      'Nina’s distinction?'],
     ['a.  What does emic mean, and what is an informant?',
      'b.  What is reflexivity in ethnographic method?'],
     ['State your position in one sentence that separates two kinds of '
      'question.']),
   ['Nina has the distinction right and Pavel has the warning right, and '
    'both are needed because they answer different questions.',
    'A practice can have effects nobody intends, and describing them is '
    'not contradicting anyone. If a mortuary feast reliably moves protein '
    'from households with a surplus to households without one, that '
    'happens whether or not the participants have a word for it, and an '
    'account mentioning only ancestors is incomplete rather than wrong. '
    'Nina is right that this is not a competing belief.',
    'Pavel’s objection bites at a different point. The danger is not '
    'explaining effects but inferring purposes — sliding from "this '
    'redistributes food" to "this exists in order to redistribute food, '
    'and the ancestors are a story people tell themselves". The second '
    'claim is about motive, it is usually unfalsifiable, and it is where '
    'the arrogance he describes lives.',
    'So the rule I would take from both is that an analyst may describe '
    'consequences the participants do not name, and may not replace their '
    'account of purpose with a better one. Effects are observable; '
    'meanings reported by the people who hold them are the data, not a '
    'rival hypothesis to be corrected.'],
   F(['a.  The response assigns each speaker a different question. What '
      'are the two questions?',
      'b.  Why is the distinction between effects and purposes doing the '
      'decisive work?'],
     ['a.  "an account mentioning only ancestors is incomplete rather than '
      'wrong" — identify the reduced relative and say why it is '
      'compressed.',
      'b.  "meanings reported by the people who hold them are the data" '
      '— what does calling them data accomplish?']),
   ['This is a very interesting question and I can see both sides. I think '
    'anthropologists should respect the culture they are studying and not '
    'impose their own Western ideas on other people, because this was a big '
    'problem in the colonial period. However science also needs to look for '
    'objective explanations. In my opinion the best approach is to combine '
    'both perspectives and listen carefully to what local people say while '
    'also doing careful analysis. Pavel is right that we should be humble '
    'about what we can know.'],
   [('P1', [['a.  Nina uses function to mean the effect a practice '
             'reliably has; Pavel uses meaning to denote what it is for '
             'those who perform it. The two are not rivals unless function '
             'is read as purpose.'],
            ['b.  Yes — the objection to inferring motive. Saying '
             'what a practice does is observational; saying it exists in '
             'order to do that, and that participants are mistaken about '
             'why they act, is the move Pavel is right to resist.']]),
    ('P2', [['a.  Emic describes an account framed in the participants’ '
             'own categories; an informant is a participant who supplies '
             'the ethnographer with such an account.'],
            ['b.  The analyst’s systematic attention to their own '
             'position and its effect on what they record — the '
             'discipline’s answer to exactly Pavel’s worry.']]),
    ('P3', [['Model: "An analyst may describe effects participants do not '
             'name, but may not replace their account of purpose with a '
             'better one."']]),
    ('F1', [['a.  What does this practice do, and what does it mean to '
             'those who perform it. The first is answerable from '
             'observation; the second only from participants. Treating them '
             'as one question is what generates the quarrel.'],
            ['b.  Because it is the line between an addition and a '
             'replacement. Describing an effect adds to the '
             'participants’ account; attributing a hidden purpose '
             'overwrites it, and only the second is the imposition Pavel '
             'objects to.']]),
    ('F2', [['a.  "mentioning only ancestors" is a reduced relative for '
             '"that mentions only ancestors". The compression keeps the '
             'sentence’s weight on the contrast that follows '
             '— incomplete rather than wrong — which is the '
             'point being made.'],
            ['b.  It gives them a definite methodological status. Data can '
             'be interpreted but not contradicted by the analyst, which is '
             'exactly the protection Pavel wants, stated in terms Nina '
             'cannot object to.']]),
    ('F3', [['1.  Neither speaker’s argument is engaged. The '
             'distinction between function and meaning, which is the whole '
             'dispute, is never addressed.'],
            ['2.  "Combine both perspectives" is a refusal to take a '
             'position dressed as a synthesis, with no account of how the '
             'two would be combined or what happens when they conflict.'],
            ['3.  "Not impose their own Western ideas" and "science needs '
             'objective explanations" are slogans from opposite sides '
             'placed side by side, and the colonial reference is '
             'decorative — it does no work in the argument.']])]),

ad('AD 064', 'Environmental science · value trade-off',
   ('trade off by identifying which loss is irreversible',
    'future perfect', 'offset, mitigation, baseline, habitat',
    'weighing a reversible cost against an irreversible one'),
   'Professor Lindgren',
   'A wind farm proposed on moorland would cut regional emissions '
   'substantially but would damage a peat bog and the habitat of a declining '
   'bird species. Developers offer to fund restoration elsewhere. Should '
   'the project go ahead?',
   [('Felix', 'Yes. Climate change is the larger threat to that bird than '
     'any wind farm, and refusing low-carbon projects on local '
     'environmental grounds is how nothing gets built.'),
    ('Ama', 'Peat that took eight thousand years to form is not restorable '
     'by a grant. Offsets assume the two sites are interchangeable, and '
     'with a specific breeding population they are not.')],
   P(['a.  Felix and Ama both claim to be protecting the environment. What '
      'divides them?',
      'b.  What does an offset have to be true for it to work?'],
     ['a.  What is mitigation, and what is a baseline?',
      'b.  Distinguish habitat from range.'],
     ['Take a position in one sentence built on reversibility.']),
   ['Ama has the stronger case, and the reason is reversibility rather '
    'than the relative size of the two harms.',
    'Felix is right that climate change threatens the bird more than '
    'turbines do, and the argument that local objections block '
    'decarbonisation is a real one. But his reasoning compares two '
    'quantities of harm as though both were recoverable. They are not. By '
    '2100 the emissions this farm avoids will have been avoided by other '
    'means too, because the whole grid will have changed; the peat, once '
    'cut, will not have re-formed, and the breeding population, once '
    'lost, will not have returned.',
    'That is what makes Ama’s point about offsets decisive rather '
    'than merely cautious. An offset works when the resource is fungible '
    '— a tonne of carbon is a tonne anywhere. Eight thousand years '
    'of peat and one breeding population are not fungible, so the grant '
    'buys something other than what is being destroyed.',
    'My position is that the project should go ahead only if it can be '
    'sited off the peat, and that this is a planning question rather than '
    'a yes or no. Where an irreversible loss can be avoided by moving a '
    'reversible gain, the burden is on the developer to move.'],
   F(['a.  The response grants Felix’s comparison of harms and still '
      'rejects his conclusion. On what basis?',
      'b.  The last paragraph refuses a straight answer. Is that evasion?'],
     ['a.  "the peat, once cut, will not have re-formed" — why the '
      'future perfect three times in that paragraph?',
      'b.  "the grant buys something other than what is being destroyed" '
      '— why this formulation?']),
   ['I think we should build the wind farm because climate change is the '
    'most urgent problem facing humanity and we cannot afford to delay the '
    'transition to renewable energy. Ama is worried about the peat bog and '
    'the birds, which I understand, but we have to accept some sacrifices '
    'for the greater good. The developers are offering money for '
    'restoration elsewhere which shows they are being responsible. If every '
    'community blocks wind farms then we will never reduce emissions and in '
    'the end the birds will suffer much more.'],
   [('P1', [['a.  Felix weighs aggregate climate risk; Ama weighs the '
             'specific, non-substitutable thing on the site. The dispute '
             'is about whether environmental goods can be traded against '
             'each other at all.'],
            ['b.  That the thing restored is equivalent to the thing lost '
             '— fungible in kind, quantity and time. Carbon is '
             'roughly fungible; an ancient peat formation and a particular '
             'breeding population are not.']]),
    ('P2', [['a.  Mitigation is reducing a harm at source; a baseline is '
             'the reference state against which change is measured.'],
            ['b.  Habitat is the conditions a species needs to live and '
             'breed; range is the geographical area it occupies. A species '
             'can keep its range while losing the habitat that sustains '
             'breeding.']]),
    ('P3', [['Model: "The emissions saved here will be saved elsewhere '
             'eventually; the peat and the breeding population will not '
             'come back, so the irreversible loss should decide."']]),
    ('F1', [['a.  On the asymmetry between a reversible and an '
             'irreversible loss. The comparison of magnitudes is only '
             'valid if both quantities remain available to be traded, and '
             'one of them disappears permanently once taken.'],
            ['b.  No, because the question as posed assumes the site is '
             'fixed, and it is not. Identifying that the conflict is '
             'avoidable is a stronger answer than accepting the trade-off '
             'and picking a side, and the response still says where the '
             'burden lies.']]),
    ('F2', [['a.  Because the argument is about what will be true looking '
             'back from a future point. The future perfect lets all three '
             'outcomes be compared at the same horizon, which is the only '
             'way the reversibility difference becomes visible.'],
            ['b.  It states the objection without claiming the offset is '
             'worthless. The restoration grant may do real good '
             'elsewhere; it simply does not replace this. That is more '
             'precise, and harder to answer, than calling offsets a '
             'sham.']]),
    ('F3', [['1.  "We have to accept some sacrifices for the greater good" '
             'restates the dilemma instead of resolving it, and never '
             'engages Ama’s specific claim about fungibility.'],
            ['2.  "The developers are offering money which shows they are '
             'being responsible" treats the offer as evidence of good '
             'faith rather than examining whether it replaces what is '
             'lost.'],
            ['3.  "If every community blocks wind farms" answers a general '
             'argument nobody made, and the possibility of a different '
             'site — the obvious move — is never considered.']])]),

ad('AD 065', 'Philosophy · agree / disagree',
   ('test a principle against the case it was built to cover',
    'subjunctive in hypotheticals', 'intuition, principle, defeasible, revise',
    'testing a moral principle against a counter-example'),
   'Dr Amari',
   'A familiar principle holds that we should always act so as to produce '
   'the most good overall. Critics offer cases where this seems to license '
   'something monstrous — harming one person to benefit many. '
   'Defenders reply that our intuitions in such cases are unreliable. Who '
   'has the better of this?',
   [('Jonas', 'The counter-examples are decisive. If a theory tells you to '
     'harvest one patient’s organs to save five, the theory is wrong, '
     'and no amount of argument should move you off that.'),
    ('Lin', 'Intuitions have licensed slavery and told us the sun goes '
     'round the earth. "I just feel this is wrong" is where an argument '
     'starts, not where it ends.')],
   P(['a.  Jonas and Lin disagree about evidence, not about the case. '
      'Explain.',
      'b.  What would it take for a counter-example to defeat a '
      'principle?'],
     ['a.  What is a defeasible claim?',
      'b.  Distinguish revising a principle from abandoning it.'],
     ['State your position in one sentence about what intuitions are '
      'evidence of.']),
   ['Lin is right that intuitions are revisable and wrong to conclude that '
    'they carry no weight, and the organ case shows why.',
    'Her historical point cuts both ways. Were intuitions worthless, the '
    'intuition that slavery is monstrous would also be worthless, and it '
    'was that intuition, pressed against the arguments of the day, which '
    'did the work. What history shows is not that intuitions are '
    'unreliable but that they are defeasible — evidence that can be '
    'outweighed, like any other.',
    'That is enough to answer Jonas too. His case is strong not because '
    'the feeling is intense but because it is stable under reflection, '
    'shared across traditions that agree on little else, and not '
    'explicable as self-interest. Those are the marks of an intuition '
    'worth keeping, and they are absent in the historical cases Lin '
    'cites, which tracked the interests of those who held them.',
    'So I would say the organ case defeats the principle in its simple '
    'form, and that the right response is revision rather than '
    'abandonment. If the theory cannot accommodate a constraint on using '
    'people, it should acquire one; a theory that survives only by telling '
    'us our firmest judgements are illusions has stopped being tested by '
    'anything.'],
   F(['a.  The response turns Lin’s historical argument against her. '
      'How exactly?',
      'b.  Three marks of a trustworthy intuition are given. Why does the '
      'argument need them?'],
     ['a.  "Were intuitions worthless, the intuition that slavery is '
      'monstrous would also be worthless" — identify the structure '
      'and say why it is used here.',
      'b.  "has stopped being tested by anything" — what kind of '
      'objection is this?']),
   ['I agree with Jonas because some things are simply wrong and we do not '
    'need a philosophical argument to know that killing an innocent patient '
    'to take their organs is murder. No theory can justify such an act. Lin '
    'mentions slavery but I think this is a different situation because now '
    'we know better and our moral understanding has progressed. Human '
    'rights are universal and they cannot be sacrificed for the benefit of '
    'the majority, otherwise any crime could be justified by saying it '
    'helps more people.'],
   [('P1', [['a.  Both accept that the organ case feels monstrous. They '
             'disagree about whether that feeling is evidence against the '
             'theory or a datum the theory may overrule.'],
            ['b.  The intuition would have to be more secure than the '
             'principle’s support, and not explicable by bias, '
             'interest or error. A counter-example defeats a principle only '
             'when the judgement it rests on is harder to give up than the '
             'principle is.']]),
    ('P2', [['a.  One that provides genuine support but can be overridden '
             'by stronger considerations — as opposed to one that is '
             'either conclusive or worthless.'],
            ['b.  Revising adds a constraint or qualification while '
             'keeping the core; abandoning discards it. Most '
             'counter-examples warrant the first.']]),
    ('P3', [['Model: "Intuitions are defeasible evidence, which is why the '
             'organ case counts against the principle without settling '
             'everything."']]),
    ('F1', [['a.  By noting that the abolitionist conviction was itself an '
             'intuition. If intuitions have no evidential weight, the '
             'judgement Lin relies on to show they are unreliable is also '
             'weightless, so her argument undercuts its own premise.'],
            ['b.  Because without them "intuitions are defeasible '
             'evidence" is unusable — anyone can call their own '
             'conviction the reliable kind. Stability under reflection, '
             'cross-traditional agreement and independence from '
             'self-interest give a test that the historical cases fail and '
             'the organ case passes.']]),
    ('F2', [['a.  An inverted subjunctive conditional. It states the '
             'opponent’s premise as a supposition and follows it to a '
             'consequence she must reject, which is cleaner than asserting '
             'that intuitions matter.'],
            ['b.  A methodological one: a theory immune to counter-example '
             'is not confirmed but unfalsifiable. It shifts the complaint '
             'from the theory’s verdict to its relationship with '
             'evidence, which is harder to answer.']]),
    ('F3', [['1.  "Some things are simply wrong and we do not need a '
             'philosophical argument" declines the question, which is '
             'precisely whether that response is legitimate.'],
            ['2.  Lin’s argument is dismissed with "now we know '
             'better and our moral understanding has progressed" — '
             'which assumes the reliability of current intuitions, the '
             'very thing in dispute.'],
            ['3.  "Human rights are universal" is asserted rather than '
             'defended, and no distinction is drawn between revising the '
             'principle and rejecting it, so there is no position on the '
             'actual question.']])]),

ad('AD 066', 'Political science · cause ranking',
   ('rank causes by which one the others operate through',
    'passive with by-agents', 'turnout, salience, mobilisation, franchise',
    'ranking causes of low participation'),
   'Professor Ikeda',
   'Voter turnout among citizens under thirty is far below that of older '
   'groups in most democracies. Suggested explanations include '
   'disaffection with parties, the practical difficulty of registering and '
   'voting, and the fact that policy rarely addresses young '
   'people’s priorities. Which matters most?',
   [('Dalia', 'Disaffection. Young voters are not prevented from voting, '
     'they have concluded it changes nothing, and they are not obviously '
     'wrong.'),
    ('Owen', 'That is the explanation that flatters everyone and changes '
     'nothing. Turnout rises when registration is automatic and polling '
     'stations are near campuses. Friction explains more than feeling '
     'does.')],
   P(['a.  Owen’s objection is partly about evidence and partly about '
      'what explanations are for. Separate the two.',
      'b.  How could disaffection and friction be the same story rather '
      'than rival ones?'],
     ['a.  What is salience, and what is mobilisation?',
      'b.  What is the franchise, and how does it differ from turnout?'],
     ['Rank the three in one sentence using a mechanism, not a '
      'preference.']),
   ['Owen is right that friction explains more of the variation, and '
    'Dalia is describing the condition that makes friction decisive.',
    'The evidence favours Owen. Turnout moves sharply when registration '
    'is made automatic or polling is brought onto campus, and it does so '
    'without any change in what young people think of parties. A cause '
    'whose removal shifts the outcome is doing explanatory work; '
    'disaffection, which is reported at similar levels in high-turnout and '
    'low-turnout systems, is not.',
    'But this is where the two accounts join rather than compete. '
    'Friction deters only those who are not strongly motivated. A voter '
    'convinced the election matters will queue for an hour; one who '
    'suspects it does not will be stopped by a form. So disaffection does '
    'not cause abstention directly — it removes the margin of '
    'motivation that friction then consumes.',
    'My ranking follows from that. Friction first, because it is the '
    'proximate cause and the one that is removable; disaffection second, '
    'as the condition that makes small costs decisive; and policy '
    'neglect third, since it is upstream of the disaffection and is itself '
    'partly produced by low turnout, which is how the cycle sustains '
    'itself.'],
   F(['a.  The response ranks Dalia’s cause second but treats it as '
      'necessary. Is that coherent?',
      'b.  Why is policy neglect placed third rather than first, given it '
      'causes the disaffection?'],
     ['a.  "it is upstream of the disaffection and is itself partly '
      'produced by low turnout" — what does the by-agent passive do '
      'here?',
      'b.  "it removes the margin of motivation that friction then '
      'consumes" — why state the relationship this way?']),
   ['In my opinion the main reason young people do not vote is that '
    'politicians do not care about young people’s issues like housing '
    'and climate change, so young people feel that voting is pointless. '
    'Dalia is right about this. If parties offered real policies for young '
    'people then turnout would increase a lot. Owen talks about '
    'registration but I think this is only a small practical issue and the '
    'real problem is much deeper. Young people are not lazy, they are '
    'disappointed, and politicians should listen to them more.'],
   [('P1', [['a.  The evidential part is that friction accounts for more '
             'measured variation in turnout. The other part is that '
             'disaffection, even if real, yields no intervention — it '
             'is an explanation that cannot be acted on.'],
            ['b.  If disaffection lowers motivation and friction converts '
             'low motivation into abstention, they are stages in one '
             'mechanism. The question then becomes which stage is '
             'proximate and which removable.']]),
    ('P2', [['a.  Salience is how much an issue weighs in a '
             'voter’s decision; mobilisation is the organised effort '
             'to get supporters to vote.'],
            ['b.  The franchise is the legal right to vote; turnout is the '
             'proportion who exercise it. Confusing them is how barriers '
             'get described as apathy.']]),
    ('P3', [['Model: "Friction first because removing it moves turnout, '
             'disaffection second because it leaves no motivation to absorb '
             'friction, policy neglect third as the upstream cause of '
             'both."']]),
    ('F1', [['a.  Yes. Necessary and primary are different things. '
             'Disaffection supplies the background condition; friction is '
             'the step at which the outcome is actually decided, and '
             'ranking is about where the mechanism turns.'],
            ['b.  Because it operates only through disaffection, which in '
             'turn operates only through friction, so it is two steps from '
             'the outcome. It is also partly an effect of low turnout, '
             'which makes it a poor candidate for the primary cause.']]),
    ('F2', [['a.  It names the agent while keeping policy neglect as the '
             'grammatical subject, so the sentence can state that the '
             'third-ranked cause is also an effect without losing the '
             'thread of the ranking. That is what identifies the loop.'],
            ['b.  Because it makes the two causes sequential rather than '
             'competing. Each speaker’s candidate keeps its role, and '
             'the ranking follows from the order of the steps instead of '
             'from a judgement about which matters more.']]),
    ('F3', [['1.  It ranks nothing. The prompt asks which matters most and '
             'the response asserts one cause without comparing mechanisms '
             'or weighing evidence.'],
            ['2.  Owen’s evidence — that turnout moves when '
             'registration changes and feeling does not — is '
             'dismissed as "only a small practical issue" with no '
             'counter-evidence.'],
            ['3.  "Politicians should listen to them more" is a '
             'recommendation where an explanation was asked for, and '
             '"young people are not lazy, they are disappointed" answers an '
             'accusation neither speaker made; the sentence is also a comma '
             'splice.']])]),
]
