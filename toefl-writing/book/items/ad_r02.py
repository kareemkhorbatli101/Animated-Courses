# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 012-017."""
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

ad('AD 012', 'Environment · policy choice',
   ('judge a scheme by what it does to the next decision, not this one',
    'conditional consequence', 'offset, additionality, permanence, leakage',
    'criticising a popular mechanism without sounding obstructive'),
   'Dr Haugen',
   'Carbon offsetting lets an emitter pay for reductions elsewhere — '
   'tree planting, cookstoves, avoided deforestation — instead of '
   'cutting its own emissions. Should offsetting count towards a '
   'company’s climate targets?',
   [('Ines', 'Yes, with standards. A tonne is a tonne wherever it is '
     'avoided, and offsetting moves money to the places where reductions are '
     'cheapest. Refusing it on principle makes decarbonisation more '
     'expensive and therefore slower.'),
    ('Jonah', 'No. Most offsets fail the additionality test — the trees '
     'were going to be planted anyway, or they burn down in ten years. '
     'Companies buy a number, not a reduction, and the number lets them '
     'postpone the changes that matter.')],
   P(['a.  Ines argues from economics, Jonah from measurement. Which claim '
      'would have to be false for the other to win?',
      'b.  Jonah makes two separate objections. Separate them.'],
     ['a.  Define additionality, permanence and leakage.',
      'b.  Why is "a tonne is a tonne" a claim about physics being used as '
      'a claim about accounting?'],
     ['Grant Ines the economics and keep Jonah’s conclusion, in one '
      'sentence.']),
   ['Ines is right that cheapness matters and Jonah is right that most '
    'offsets are not real, and those two facts are connected rather than '
    'opposed. Offsets are cheap precisely because the market cannot verify '
    'additionality: a project that would have happened anyway costs almost '
    'nothing to certify, so the cheapest tonnes are systematically the least '
    'real ones. If verification were tight enough to satisfy Jonah, the '
    'price would rise to something close to the cost of cutting your own '
    'emissions, and Ines’s efficiency argument would largely '
    'disappear.',
    'So I would not ban offsetting, but I would stop it counting towards a '
    'target. The distinction matters: as a voluntary payment on top of a '
    'reduction obligation, an offset does some good even if a fraction fail. '
    'As a substitute for the obligation it does harm, because it licenses '
    'postponement of exactly the capital decisions — furnaces, fleets, '
    'buildings — that take fifteen years to turn over. Jonah’s '
    'real point is not that offsets are fraudulent but that they are '
    'fungible with time, and time is the thing we cannot buy more of.'],
   F(['a.  The response claims the two classmates’ positions are '
      'connected. What is the link?',
      'b.  It ends by reinterpreting Jonah’s objection. What does the '
      'reinterpretation add?'],
     ['a.  "If verification were tight enough ... the price would rise" '
      '— why the unreal conditional for an argument the writer '
      'believes?',
      'b.  "fungible with time" — what does "fungible" mean, and why is '
      'the phrase the point of the whole response?']),
   ['I agree with Jonah because carbon offsetting is just a way for the big '
    'companies to continue polluting while they pretend to be green. They '
    'plant some trees in Africa or South America and then they say they are '
    'carbon neutral, which is not true at all. Ines says it is cheaper but I '
    'think the environment is more important than the money. The companies '
    'should reduce their own emissions in their own factories instead of '
    'paying others to do it for them. Governments should ban this practice '
    'and force the companies to become really sustainable.'],
   [('P1', [['a.  Neither, as stated — which is the opening. Ines '
             'argues offsets are efficient; Jonah argues they are not real. '
             'Both can be true of different offsets, and the response finds '
             'the mechanism that links them.'],
            ['b.  That offsets are often not additional or permanent (a '
             'measurement failure), and that buying them delays real cuts (a '
             'behavioural consequence). The second survives even if the '
             'first is fixed.']]),
    ('P2', [['a.  Additionality: the reduction would not have happened '
             'without the payment. Permanence: it stays reduced. Leakage: '
             'the emitting activity moves elsewhere rather than stopping.'],
            ['b.  Because physical equivalence does not imply accounting '
             'equivalence. A tonne avoided is identical to a tonne avoided; '
             'a tonne claimed is not, and the entire dispute is about the '
             'gap between them.']]),
    ('P3', [['Model: "Offsets are cheap because they are unverifiable, so '
             'the efficiency Ines values and the unreality Jonah objects to '
             'are the same fact seen twice."']]),
    ('F1', [['a.  Price. Cheapness is produced by weak verification, so you '
             'cannot have Ines’s cost advantage and Jonah’s '
             'rigour at once. That turns an apparent disagreement into a '
             'trade-off with a mechanism behind it.'],
            ['b.  It separates fraud from substitution. If offsets were '
             'merely fraudulent, better auditing would fix them. If the '
             'problem is that they trade against time, then even perfect '
             'offsets would still delay the slow capital decisions — '
             'which is a much harder objection and one Jonah had not quite '
             'made.']]),
    ('F2', [['a.  Because tight verification does not currently exist, so '
             'the claim is about a world we can reason about but not '
             'observe. The unreal form is honest about that and makes the '
             'argument about a mechanism rather than a disputed fact.'],
            ['b.  Fungible means interchangeable, one unit substitutable for '
             'another. The phrase is the point because it identifies what is '
             'actually being traded: not pollution for trees, but action now '
             'for action later — and that trade is the one that cannot '
             'be made good.']]),
    ('F3', [['1.  It never engages Ines. Her argument is about the cost of '
             'decarbonisation; "the environment is more important than the '
             'money" answers an argument she did not make.'],
            ['2.  Nothing is added beyond Jonah’s position restated '
             'with more indignation, and "ban this practice" arrives without '
             'any consideration of what replaces the finance.'],
            ['3.  Language: "the big companies", "the money", "the '
             'companies" over-articled throughout; "really sustainable" is '
             'vague; and the geography ("trees in Africa or South America") '
             'is decorative rather than evidential.']])]),

ad('AD 013', 'Health and medicine · value trade-off',
   ('ask whether the two goods are actually in competition',
    'comparative of importance', 'triage, waiting list, acuity, capacity',
    'arguing about rationing without pretending it can be avoided'),
   'Professor Ikeda',
   'When demand exceeds capacity, should a health system treat patients in '
   'order of arrival, or in order of clinical need? Order of arrival is '
   'transparent and resists manipulation; order of need saves more life-years '
   'but requires judgements that can be disputed.',
   [('Alina', 'Need, obviously. Treating a routine case ahead of an urgent '
     'one because it arrived first is indefensible, whatever its '
     'administrative virtues.'),
    ('Ben', 'I would not dismiss arrival order so quickly. Need-based triage '
     'is only as good as the assessment, and in practice the people who get '
     'reassessed upward are the ones who know how to insist. A queue is '
     'crude but it is very hard to game.')],
   P(['a.  Ben is not arguing that arrival order is fairer in principle. '
      'What is he arguing?',
      'b.  Is this a disagreement about values or about institutions?'],
     ['a.  What is acuity, and how does it differ from urgency?',
      'b.  What does it mean to game a system?'],
     ['State what both would accept, and what follows, in one sentence.']),
   ['Ben is making an institutional argument rather than an ethical one, and '
    'Alina has not answered it. Nobody thinks arrival order is intrinsically '
    'fairer than need; the claim is that a rule requiring judgement will be '
    'bent towards whoever is best at applying pressure, and the evidence on '
    'that is not encouraging.',
    'But the conclusion does not follow, because the choice is not between '
    'two rules applied by the same people. What makes need-based triage '
    'gameable is discretion exercised case by case at the point of contact. '
    'Formalise the assessment — a scored tool applied by someone other '
    'than the clinician the patient is lobbying, with the score recorded and '
    'auditable — and most of Ben’s problem goes. The queue’s '
    'real virtue is not its crudeness but its auditability, and that is a '
    'property you can build into a clinical measure. So I would say need, '
    'with Ben’s objection answered by instrumentation rather than by '
    'abandoning the principle.'],
   F(['a.  The response says Alina has not answered Ben. Why not?',
      'b.  It identifies the queue’s "real virtue" as something other '
      'than what Ben said. What is gained?'],
     ['a.  "a rule requiring judgement will be bent towards whoever is best '
      'at applying pressure" — why passive?',
      'b.  "answered by instrumentation rather than by abandoning the '
      'principle" — what does the parallel do?']),
   ['This is a very difficult ethical question and I can understand both '
    'points of view. On one hand it is obvious that a patient with a serious '
    'condition must be treated before a patient with a small problem, '
    'because otherwise people could die while they are waiting. On the other '
    'hand Ben is right that some patients are more aggressive and they push '
    'to get treated faster, which is not fair for the quiet people. In my '
    'opinion the hospitals should treat the urgent cases first but also they '
    'should make sure that the system is fair and transparent for everybody.'],
   [('P1', [['a.  That a need-based rule will be captured in practice by '
             'articulate and persistent patients, so its real-world '
             'distribution may be worse than a crude rule that cannot be '
             'influenced.'],
            ['b.  About institutions. Both would prefer need if assessment '
             'were reliable; they disagree about whether it can be made so.']]),
    ('P2', [['a.  Acuity is the severity and instability of a condition '
             '— how sick, how fast deteriorating. Urgency is how soon '
             'intervention is needed, which usually follows from acuity but '
             'is not identical to it.'],
            ['b.  To exploit the rules to get an outcome the rules were not '
             'intended to give, without breaking them.']]),
    ('P3', [['Model: "Both would choose need if the assessment were '
             'reliable, so the question is whether it can be made '
             'auditable rather than which principle is better."']]),
    ('F1', [['a.  Because she replies to the ethical claim ("indefensible") '
             'when Ben conceded that and raised a different one about '
             'implementation. Answering the argument someone did not make is '
             'the commonest way a discussion stalls.'],
            ['b.  It converts Ben’s point from a reason to keep queues '
             'into a design requirement for triage. Crudeness cannot be '
             'transferred to a clinical tool, but auditability can — so '
             'naming the right property is what makes the synthesis '
             'possible.']]),
    ('F2', [['a.  Because naming an agent would turn a structural claim into '
             'an accusation about particular clinicians. The passive keeps '
             'it a property of the rule, which is what the argument needs.'],
            ['b.  It sets two responses to the same objection side by side '
             'in matched grammar, so the reader sees that abandoning the '
             'principle was only one of the available moves — and the '
             'weaker one.']]),
    ('F3', [['1.  It takes no position, despite the question asking which '
             'matters more.'],
            ['2.  Ben’s argument is restated as "some patients are more '
             'aggressive", losing the institutional point entirely; the '
             'closing recommendation that the system should be "fair and '
             'transparent" is what everyone already wants and names no '
             'mechanism.'],
            ['3.  Language: "a small problem", "not fair for the quiet '
             'people", "the hospitals", "the urgent cases" — register '
             'is conversational throughout and the articles are '
             'systematically wrong.']])]),

ad('AD 014', 'Psychology and society · policy choice',
   ('separate the effect of a policy from the effect of announcing it',
    'nominalisation for abstraction', 'disclosure, stigma, salience, uptake',
    'arguing about a measure intended to help a group it might expose'),
   'Dr Almeida',
   'Some universities now ask applicants to declare mental health conditions '
   'so that support can be arranged in advance. Others have stopped asking, '
   'arguing that the question deters applications and that disclosure should '
   'be voluntary and late. Should universities ask at the application stage?',
   [('Ruth', 'They should ask. Support arranged in September is support that '
     'works; support arranged in February, after a crisis, is damage '
     'limitation. The students who most need it are the least likely to '
     'come forward unprompted.'),
    ('Idris', 'They should not. An applicant deciding whether to tick a box '
     'on a competitive application is not making a free choice, and many '
     'will conclude that honesty costs them a place. You cannot build a '
     'support system on a question people are afraid to answer truthfully.')],
   P(['a.  Both want the same outcome. What exactly do they disagree about?',
      'b.  Idris makes a claim about what applicants believe. Does it matter '
      'whether the belief is true?'],
     ['a.  What is salience, and what is uptake?',
      'b.  Distinguish stigma from discrimination.'],
     ['Grant Idris’s point about fear and keep Ruth’s outcome, in '
      'one sentence.']),
   ['Idris is right about the mechanism and I think it argues for changing '
    'when the question is asked rather than whether. His point does not '
    'actually depend on universities discriminating; it depends on '
    'applicants believing they might, and that belief is rational given how '
    'little anyone can verify about how a declaration is used. So the '
    'question as currently framed collects the least information from '
    'exactly the people Ruth wants to reach — which makes it worse than '
    'useless, because it also produces a list that looks complete.',
    'The fix is separation. Ask after the offer is unconditional and before '
    'registration, by which point the applicant has nothing left to lose and '
    'support can still be arranged for September. That is Ruth’s timing '
    'without Idris’s coercion. The remaining difficulty is her stronger '
    'claim, that the students most in need will not come forward unprompted '
    '— but that is an argument for asking everyone a routine question '
    'at registration, not for asking it while the place is still in doubt.'],
   F(['a.  The response says the current question is "worse than useless". '
      'Why worse?',
      'b.  Ruth’s stronger claim is handled separately at the end. Why '
      'not earlier?'],
     ['a.  "it depends on applicants believing they might" — why is '
      'this distinction the hinge of the argument?',
      'b.  "That is Ruth’s timing without Idris’s coercion." What '
      'is the effect of naming both classmates in one short sentence?']),
   ['I think this is a very sensitive topic and both students raise '
    'important points about mental health which is a serious issue among '
    'young people today. Ruth is right that the universities should prepare '
    'the support in advance because many students suffer in silence and do '
    'not ask for help. However Idris is also right that students may be '
    'afraid to declare their condition because of the stigma and the '
    'possible discrimination. In my opinion universities should ask the '
    'question but they must guarantee complete confidentiality and explain '
    'clearly that the answer will not affect the admission decision, so the '
    'students will feel safe to be honest.'],
   [('P1', [['a.  Timing and conditions, not principle. Both want support '
             'arranged early; they disagree about whether a question asked '
             'during a competitive process can collect honest answers.'],
            ['b.  No, and that is the strongest form of his argument. If '
             'applicants believe disclosure is risky they will under-report '
             'whether or not the belief is accurate, so the data is '
             'corrupted either way.']]),
    ('P2', [['a.  Salience is how prominent something is in attention; '
             'uptake is how many people actually use a service offered.'],
            ['b.  Stigma is the social mark attached to a condition; '
             'discrimination is differential treatment. Stigma can suppress '
             'disclosure entirely in the absence of any discrimination.']]),
    ('P3', [['Model: "The fear is rational whether or not it is justified, '
             'which is an argument for moving the question after the offer '
             'rather than removing it."']]),
    ('F1', [['a.  Because a partial list presented as complete is more '
             'dangerous than no list. A university that believes it knows '
             'who needs support will plan against that figure, and the '
             'students missing from it are the ones Ruth identified as most '
             'at risk.'],
            ['b.  Because it survives the main argument. Once the timing is '
             'fixed, her claim about non-disclosure is still live — and '
             'dealing with it last shows the writer has followed the '
             'argument to the end rather than stopping at a tidy synthesis.']]),
    ('F2', [['a.  Because it makes the objection immune to the obvious '
             'rebuttal. A university can truthfully say it does not '
             'discriminate; it cannot make applicants believe that, and '
             'belief is what determines the answers. The argument therefore '
             'survives the reassurance that would otherwise defeat it.'],
            ['b.  It presents the proposal as a synthesis rather than a '
             'third position, which makes it much harder to object to '
             '— each classmate is being offered the thing they asked '
             'for.']]),
    ('F3', [['1.  The proposed solution is exactly what Idris pre-empted. '
             'Guaranteeing confidentiality and explaining that it will not '
             'affect admission is a reassurance; his argument was that '
             'reassurance does not change behaviour under competitive '
             'pressure.'],
            ['2.  No position is really taken and nothing is added: both are '
             'restated, and the timing question — the actual axis of '
             'disagreement — is never identified.'],
            ['3.  Language: "the universities", "the stigma", "the '
             'admission decision" over-articled; "suffer in silence" and '
             '"feel safe to be honest" are stock phrases rather than '
             'analysis.']])]),

ad('AD 015', 'Law and ethics · agree or disagree with a claim',
   ('test a rule by the cases it was not written for',
    'the counterfactual', 'precedent, codify, discretion, bright line',
    'arguing about rules without invoking natural justice'),
   'Dr Ferreira',
   'Some argue that sentencing should follow fixed guidelines so that '
   'identical offences receive identical penalties. Others argue that '
   'identical offences are rarer than they look, and that fixed tariffs '
   'produce injustice in the name of consistency. What is your view?',
   [('Mei', 'Fixed guidelines. Disparities in sentencing track the judge, '
     'the day of the week and the defendant’s background far more than '
     'anyone is comfortable admitting. Consistency is not a bureaucratic '
     'value; it is what equality before the law means in practice.'),
    ('Tomas', 'Guidelines flatten exactly the differences that matter. Two '
     'identical thefts committed by a first offender and by someone '
     'coerced into it are not the same case, and a tariff that cannot see '
     'the difference is not delivering equality, only uniformity.')],
   P(['a.  Mei and Tomas use "equality" differently. How?',
      'b.  What evidence would distinguish their positions?'],
     ['a.  What is a bright-line rule, and what is its advantage?',
      'b.  Distinguish precedent from guideline.'],
     ['State the distinction between uniformity and equality in one '
      'sentence, and say what follows.']),
   ['Tomas is right that the cases differ and Mei is right about where '
    'discretion actually goes, and the second is the harder fact. If '
    'unstructured judgement reliably tracked morally relevant differences we '
    'would not see the day-of-the-week effects; what it tracks instead is '
    'whatever the judge finds salient, which includes things nobody would '
    'defend if asked. So the choice is not between seeing the differences '
    'and ignoring them. It is between discretion that is unexamined and '
    'discretion that has to be written down.',
    'That points to structured rather than fixed guidelines: a starting '
    'point by offence, with the mitigating factors enumerated, and a '
    'requirement to state in writing which ones were applied and why. Coerced '
    'participation is then visible as a named reason rather than as an '
    'unexplained variance, and Tomas gets his distinction in a form Mei can '
    'audit. Had the argument been about whether circumstances matter it '
    'would be unanswerable on his side; it is really about whether they are '
    'better handled silently or on the record.'],
   F(['a.  The response reframes the choice in the fourth sentence. What are '
      'the two options it offers instead?',
      'b.  Why does it say Mei’s fact is "the harder" one?'],
     ['a.  "Had the argument been about whether circumstances matter it '
      'would be unanswerable on his side" — identify the structure and '
      'say what the concession achieves.',
      'b.  "unexplained variance" — where is this phrase borrowed from, '
      'and what does importing it do?']),
   ['In my opinion the judges should have the freedom to decide the sentence '
    'because every case is different and only the judge who sees the '
    'defendant can understand the real situation. If we apply fixed rules '
    'then the justice becomes like a machine without humanity, which is very '
    'dangerous for the society. Of course Mei is right that there are some '
    'differences between the judges but I think this is a small problem '
    'compared to the risk of injustice from the automatic sentences. The '
    'solution is to train the judges better so they can take fair decisions '
    'in all the cases.'],
   [('P1', [['a.  Mei means equality of outcome for like cases, measured '
             'across defendants. Tomas means equality of treatment as '
             'individuals, which requires attending to unlike features. The '
             'word covers two different things.'],
            ['b.  Data on what unstructured discretion actually tracks. If '
             'it correlates with morally relevant features, Tomas is '
             'vindicated; if with the judge’s identity or the time of '
             'day, Mei is — and that evidence exists.']]),
    ('P2', [['a.  A rule with a sharp threshold and no discretion at the '
             'boundary. Its advantage is predictability and resistance to '
             'pressure; its cost is that it cannot see cases near the line.'],
            ['b.  Precedent binds through decided cases and develops '
             'incrementally; a guideline is issued in advance and states a '
             'range. Guidelines constrain more predictably but adapt more '
             'slowly.']]),
    ('P3', [['Model: "Uniformity is treating cases alike; equality is '
             'treating relevantly similar cases alike, which means the '
             'question is who decides what is relevant and whether they have '
             'to say so."']]),
    ('F1', [['a.  Discretion that is unexamined, and discretion that has to '
             'be written down. Neither classmate offered the second, and it '
             'dissolves the apparent choice between seeing differences and '
             'ignoring them.'],
            ['b.  Because Tomas’s claim is a priori — of course '
             'cases differ — while Mei’s is empirical and '
             'uncomfortable. An argument that has to accommodate an '
             'unwelcome fact is doing more work than one that only has to '
             'accommodate an obvious one.']]),
    ('F2', [['a.  An inverted third conditional. The concession is '
             'generous — it grants that on one reading Tomas simply '
             'wins — and that generosity is what makes the '
             'reinterpretation persuasive rather than evasive.'],
            ['b.  From statistics: variance not accounted for by the model. '
             'Importing it reframes judicial discretion as something '
             'measurable, which is precisely Mei’s ground, and lets the '
             'writer treat "unexplained" as the defect rather than '
             '"discretionary".']]),
    ('F3', [['1.  Mei’s evidence is dismissed as "a small problem" '
             'without engaging it — and it was the only empirical claim '
             'in the discussion.'],
            ['2.  The remedy, better training, is asserted with no account '
             'of why it would fix effects that are largely unconscious, and '
             'nothing new is contributed.'],
            ['3.  Language: "the justice becomes like a machine without '
             'humanity" is rhetoric rather than argument; "dangerous for the '
             'society", "the automatic sentences", "all the cases" are all '
             'over-articled.']])]),

ad('AD 016', 'Arts and culture · cause ranking',
   ('rank causes by what each predicts that the others do not',
    'cleft for emphasis', 'canon, gatekeeping, discoverability, long tail',
    'ranking causes in a field where taste is at stake'),
   'Professor Rahimi',
   'Fewer new novels reach a wide readership than a generation ago, although '
   'more are published. Suggested explanations include the collapse of book '
   'review pages, the economics of retail and the sheer volume of '
   'competition. Which best explains it?',
   [('Olga', 'Volume. When four hundred literary novels appear in a season, '
     'attention has to fragment — no mechanism could make them all '
     'visible, and the ones that break through do so almost at random.'),
    ('Pavel', 'Reviews. What has gone is not attention but curation. A '
     'reader used to have three or four trusted sources that would surface '
     'ten books a year. Volume only became a problem once the filter '
     'disappeared.')],
   P(['a.  Olga and Pavel both accept the volume figure. What do they '
      'disagree about?',
      'b.  Which position predicts that recommendation algorithms should '
      'have solved the problem?'],
     ['a.  What is discoverability, and what is the long tail?',
      'b.  What does a gatekeeper do, and what is lost when one disappears?'],
     ['Rank the causes in one sentence using what each predicts.']),
   ['Pavel has the better account, and the test is what each explanation '
    'predicts. If volume alone were the problem, algorithmic recommendation '
    'should have fixed it — there has never been more capacity to match '
    'a book to a reader. It has not, and what it produces instead is '
    'concentration: recommendations are trained on sales, so they amplify '
    'whatever is already moving. That is a curation failure, not a capacity '
    'one, and it is exactly what Pavel’s account predicts and '
    'Olga’s does not.',
    'What I would add is that retail economics is not a third cause but the '
    'reason the first two interact. It is the loss of the mid-list — '
    'the book expected to sell modestly — that removed the commercial '
    'space in which a slow-building reputation used to be possible. A '
    'reviewer’s recommendation only mattered because a bookshop would '
    'keep the title on the shelf long enough for it to work. So I would rank '
    'curation first, retail second as the thing that made curation '
    'effective, and volume third: real, but the condition the other two were '
    'supposed to manage.'],
   F(['a.  The response uses a prediction to decide between the two '
      'accounts. State it in one sentence.',
      'b.  Retail is promoted from third cause to something else. What?'],
     ['a.  "It is the loss of the mid-list that removed the commercial '
      'space" — name the device and say why it suits this sentence.',
      'b.  "the condition the other two were supposed to manage" — what '
      'does this do to Olga’s position?']),
   ['I think all these reasons are true and they are connected with each '
    'other. It is certainly true that there are too many books today and the '
    'readers cannot know which one to choose, and also the newspapers do not '
    'have book reviews anymore because they are losing money. Another reason '
    'is that young people prefer to watch series on streaming platforms '
    'instead of reading novels, so the market for literature is becoming '
    'smaller every year. In my opinion publishers should invest more in '
    'promoting new authors and schools should encourage children to read '
    'more books from an early age.'],
   [('P1', [['a.  Whether volume is sufficient on its own. Olga treats it '
             'as the cause; Pavel treats it as a condition that only became '
             'harmful when the filter went.'],
            ['b.  Olga’s. If the problem is purely matching at scale, '
             'better matching technology should have resolved it — '
             'which is the test the response applies.']]),
    ('P2', [['a.  Discoverability is how easily a work can be found by '
             'someone who would want it. The long tail is the large number '
             'of low-selling titles that collectively rival the hits.'],
            ['b.  A gatekeeper decides what reaches the public. What is lost '
             'is not only selection but the shared reference point: when '
             'everyone read the same three reviewers, a recommendation '
             'created a conversation as well as a sale.']]),
    ('P3', [['Model: "If volume were the cause, recommendation algorithms '
             'would have solved it; they have concentrated attention '
             'instead, which is what a curation failure predicts."']]),
    ('F1', [['a.  If capacity to match readers to books were the binding '
             'constraint, the enormous increase in that capacity would have '
             'eased the problem; it did not, so the constraint lies '
             'elsewhere.'],
            ['b.  Into the enabling condition for curation — the reason '
             'a review could work at all. That is a structural relation '
             'rather than a parallel cause, and recognising it is what '
             'allows a ranking instead of a list.']]),
    ('F2', [['a.  An it-cleft (family 8, structure 59). It isolates the '
             'mid-list from the several things that changed in retail and '
             'contrasts it with them, which is precisely the discrimination '
             'the sentence needs to make.'],
            ['b.  It concedes that she is describing something real while '
             'denying it explanatory force — volume is the problem the '
             'system existed to solve, so its presence cannot explain the '
             'system’s failure. The concession is what keeps the '
             'ranking from reading as a dismissal.']]),
    ('F3', [['1.  It refuses to rank, and then introduces a fourth cause '
             '(streaming) that was not in the question and is not weighed '
             'against the others.'],
            ['2.  Nothing distinguishes the causes; each is asserted and '
             'none is tested, and the recommendations at the end '
             '— publishers should promote, schools should encourage '
             '— follow from no part of the analysis.'],
            ['3.  Language: "the readers", "the newspapers", "the market for '
             'literature" over-articled; "anymore" should be "any more"; and '
             '"connected with each other" is doing the work that an argument '
             'should.']])]),

ad('AD 017', 'Urban planning and transport · agree or disagree with a claim',
   ('check whether a measured effect is the effect being claimed',
    'hedged generalisation with tend to', 'modal share, induced demand, severance, density',
    'disagreeing with an intuitive claim using its own evidence'),
   'Professor Lindqvist',
   'It is often said that building more housing in a city lowers rents. '
   'Opponents point to new developments where rents rose in the surrounding '
   'streets. How convincing is the claim that building more housing makes a '
   'city more affordable?',
   [('Ruth', 'It is close to arithmetic. If more people want to live '
     'somewhere than there are homes, prices rise; add homes and you relieve '
     'the pressure. The local examples are selection: developers build where '
     'rents are already rising.'),
    ('Sami', 'The local evidence is not so easily dismissed. New blocks '
     'change a neighbourhood’s character and reputation, and that '
     'raises what people will pay nearby. Whatever happens city-wide, the '
     'people displaced are real.')],
   P(['a.  Are Ruth and Sami talking about the same geographic scale?',
      'b.  Can both of their empirical claims be true at once?'],
     ['a.  What is modal share, and what is severance?',
      'b.  What does "selection" mean in Ruth’s last sentence?'],
     ['Reconcile the two scales in one sentence and say what follows for '
      'policy.']),
   ['Both claims can be true, and I think they are. Ruth is describing a '
    'city-wide effect and Sami a local one, and the evidence tends to find '
    'exactly that pattern: new supply lowers rents across a metropolitan '
    'area while raising them within a few hundred metres of the new '
    'building. They are not competing accounts of one quantity; they are two '
    'quantities, and the dispute survives only because both are reported as '
    '"the effect on rents".',
    'What follows is not that the local effect is a price worth paying, '
    'which is how this argument usually ends. The city-wide gain accrues to '
    'everyone, including future arrivals who do not yet live there, while '
    'the local loss falls on identifiable people who do. That is a '
    'distributive problem, and it has distributive answers — a share of '
    'the uplift captured for the neighbourhood, or rights of return for '
    'displaced tenants. Build and compensate is a coherent position; build '
    'and tell people the aggregate is positive is the one that keeps losing '
    'planning fights, and deserves to.'],
   F(['a.  The response says the dispute "survives only because" of '
      'something. What?',
      'b.  The last sentence criticises a position close to Ruth’s. On '
      'what grounds?'],
     ['a.  "the evidence tends to find exactly that pattern" — what is '
      '"tends to" doing for a writer who cannot cite the studies?',
      'b.  "and deserves to" — three words at the end of a sentence. '
      'What is their effect?']),
   ['I agree with Ruth because this is basic economics, if the supply '
    'increases then the price goes down, it is the law of supply and demand '
    'which works in every market. Sami is talking about gentrification which '
    'is a different problem, and anyway if we do not build new houses the '
    'situation will become even worse for everybody because the population '
    'is growing. The governments should remove the bureaucratic obstacles '
    'and allow the construction companies to build more and faster, then the '
    'housing crisis will be solved.'],
   [('P1', [['a.  No. Ruth is describing a metropolitan market, Sami a few '
             'streets. Nearly all the heat in this argument comes from that '
             'slippage.'],
            ['b.  Yes, and they usually are. There is no contradiction in '
             'new supply lowering the average while raising it locally, '
             'because they are different averages over different areas.']]),
    ('P2', [['a.  Modal share is the proportion of journeys by each mode. '
             'Severance is the division of a neighbourhood by '
             'infrastructure.'],
            ['b.  Selection bias — the sample is not random. Developers '
             'choose sites where rents are already climbing, so a '
             'correlation between building and rising rents may show where '
             'they built rather than what building did.']]),
    ('P3', [['Model: "New supply tends to lower rents across a city and '
             'raise them next door, which makes this a distributive question '
             'rather than a disagreement about whether to build."']]),
    ('F1', [['a.  That both quantities are reported under the same phrase, '
             '"the effect on rents". Once they are named separately there is '
             'no disagreement left about the facts.'],
            ['b.  That it answers a distributive objection with an aggregate '
             'figure. The people bearing the local cost are not the people '
             'receiving the city-wide benefit, and telling them the total is '
             'positive is not a response to their objection.']]),
    ('F2', [['a.  It claims a tendency in the literature rather than a '
             'specific finding, which is honest about the writer’s '
             'position and cannot be refuted by one contrary study. Claiming '
             'more than you can source is the fastest way to lose a reader '
             'who knows the field.'],
            ['b.  They convert a description into a judgement, briefly, '
             'after the analysis has earned it. The brevity is what makes it '
             'land — a longer version would read as editorialising, '
             'where three words read as a conclusion.']]),
    ('F3', [['1.  It dismisses Sami by relabelling his point '
             '("gentrification ... a different problem") rather than '
             'engaging it, and never addresses who bears the local cost.'],
            ['2.  "Basic economics" and "the law of supply and demand" are '
             'invoked as though they settle an empirical question about '
             'magnitudes and distribution, which they do not.'],
            ['3.  Language: a comma splice in the first sentence, "the '
             'governments", "the construction companies", "the housing '
             'crisis will be solved" — an unhedged absolute of exactly '
             'the kind this topic punishes.']])]),
]
