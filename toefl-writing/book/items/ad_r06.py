# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 036-041."""
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

ad('AD 036', 'Education · agree or disagree with a claim',
   ('ask what a comparison holds constant',
    'conditional qualification', 'cohort, selection, value added, intake',
    'questioning an international comparison'),
   'Professor Adeyemi',
   'International league tables of school performance are often used to '
   'argue that one country’s education system is superior to '
   'another’s, and to justify importing its methods. How much weight '
   'should be put on such comparisons?',
   [('Elif', 'Some, but much less than they get. The countries at the top '
     'differ from those below in a dozen ways that have nothing to do with '
     'pedagogy — child poverty, teacher selectivity, tracking age. The '
     'method is the one thing that gets copied.'),
    ('Marco', 'That is a reason for care, not for dismissal. We would not '
     'refuse to compare health systems because populations differ. The '
     'tables are the only systematic evidence we have, and the alternative '
     'is copying whatever is fashionable.')],
   P(['a.  Marco makes an argument about alternatives. Restate it.',
      'b.  Does Elif’s objection apply equally to all uses of the '
      'tables?'],
     ['a.  What is a cohort, and what is value added?',
      'b.  Why does the age at which a system tracks pupils matter for a '
      'cross-country comparison?'],
     ['Grant Marco the point about alternatives and keep Elif’s '
      'caution, in one sentence.']),
   ['Marco is right that "the data is confounded" is not by itself an '
    'argument for ignoring data, and Elif is right that the confounders here '
    'are not minor. The way through is to notice that the tables support '
    'some inferences and not others. Ranking systems is almost worthless, '
    'because the ranking is dominated by intake. Tracking a single '
    'country’s change over time is much better, because the intake is '
    'roughly held constant and the thing that varies is policy.',
    'That distinction also explains the pattern of failed borrowing. What '
    'gets imported is usually a visible feature of a high-ranking system '
    '— a curriculum, a testing regime — and what cannot be '
    'imported is the thing that most plausibly produced the result, such as '
    'how selective entry to teaching is or how early children are sorted. So '
    'I would use the tables as Marco wants but for Elif’s reasons: not '
    'to find out who is best, which they cannot tell us, but to find out '
    'which of our own changes moved anything, which they can.'],
   F(['a.  The response distinguishes two uses of the same data. Name them.',
      'b.  Why does it say the tables should be used "as Marco wants but '
      'for Elif’s reasons"?'],
     ['a.  "the thing that most plausibly produced the result" — why '
      '"most plausibly" rather than a flat claim?',
      'b.  "which they cannot tell us ... which they can" — what does '
      'the parallel do at the end of a response?']),
   ['I think we should be very careful with these international '
    'comparisons because every country has its own culture and history and '
    'what works in one place may not work in another. For example in some '
    'Asian countries students study many more hours and have a lot of '
    'pressure, which is not necessarily a good model for other countries '
    'even if their results are better. Also the tables only measure some '
    'subjects like mathematics and science and they do not measure '
    'creativity or critical thinking. In my opinion each country should '
    'develop its own system according to its own needs and values.'],
   [('P1', [['a.  That decisions will be made anyway, and in the absence of '
             'systematic evidence they will be made on fashion or '
             'anecdote — so imperfect evidence beats none.'],
            ['b.  No, and that is the opening. Confounding by intake '
             'destroys cross-country ranking but leaves within-country '
             'comparison over time largely intact, because the intake '
             'changes slowly.']]),
    ('P2', [['a.  A cohort is a group passing through together; value added '
             'is the progress a school produces net of what pupils arrived '
             'with.'],
            ['b.  Because systems that sort pupils at ten and at sixteen '
             'produce different distributions by fifteen, when the tests are '
             'taken — so the comparison is measuring the sorting as '
             'much as the teaching.']]),
    ('P3', [['Model: "The tables cannot rank systems because intake '
             'dominates, but they can track one system over time, which is '
             'the use worth having."']]),
    ('F1', [['a.  Cross-sectional ranking between countries, and '
             'longitudinal tracking within one. The first is dominated by '
             'confounders; the second holds most of them roughly constant.'],
            ['b.  Because Marco wants the data used and Elif has supplied '
             'the reason that constrains how. The response adopts his '
             'conclusion about use and her analysis of what the data can '
             'bear — which is a genuine synthesis rather than a '
             'split-the-difference.']]),
    ('F2', [['a.  Because the writer is claiming a causal story without '
             'evidence to establish it, and "most plausibly" marks that '
             'honestly. The argument only needs the feature to be a '
             'candidate, not a proven cause.'],
            ['b.  It closes on a matched pair that states the limit and the '
             'use in the same breath, so the reader leaves with the '
             'distinction rather than with a recommendation. Parallelism at '
             'the end of a response is a reliable way to make the '
             'conclusion memorable.']]),
    ('F3', [['1.  It argues against a position neither classmate holds. '
             'Nobody proposed copying study hours, and Marco explicitly '
             'conceded the need for care.'],
            ['2.  The point about unmeasured subjects is a real one but it '
             'is asserted and dropped, and "each country should develop its '
             'own system" is the conclusion of no argument.'],
            ['3.  Language: "these international comparisons", "the tables", '
             '"its own needs and values" — and "some Asian countries" '
             'does a lot of work without naming anything checkable.']])]),

ad('AD 037', 'Business and economics · policy choice',
   ('ask who the rule binds and who it merely inconveniences',
    'conditional consequence', 'compliance cost, threshold, de minimis, disclosure',
    'arguing about regulation without reaching for burden or greed'),
   'Dr Castellanos',
   'Proposals to require companies to publish detailed supply-chain audits '
   'are often resisted on the grounds of cost, particularly for smaller '
   'firms. Should such reporting be required of all companies, or only of '
   'large ones?',
   [('Ines', 'All of them, with support for the small. Exempting small '
     'firms creates a tier where the practices you are trying to stop simply '
     'relocate, and the subcontracting chains that hide the worst abuses are '
     'made of small firms.'),
    ('Yusuf', 'Thresholds exist for a reason. A fixed compliance cost is '
     'regressive: it is a rounding error for a multinational and a month of '
     'margin for a firm with twelve employees. Universal rules written for '
     'big companies kill small ones and call it fairness.')],
   P(['a.  Both are making distributional arguments. About what, '
      'respectively?',
      'b.  Is there a version of the rule that avoids both problems?'],
     ['a.  What is a compliance cost, and what does de minimis mean?',
      'b.  Why is a fixed cost described as regressive?'],
     ['State the design problem in one sentence rather than taking a side.']),
   ['Ines is right about where the abuses sit and Yusuf is right about who '
    'pays, and both follow from the same feature: the cost of an audit is '
    'largely fixed. That is what makes exemption thresholds attractive and '
    'also what makes them leaky, because a chain can be reorganised into '
    'units below any threshold you set.',
    'If the problem is a fixed cost, the answer is to stop each firm bearing '
    'it separately. Require the disclosure from the firm at the top of the '
    'chain, for the whole chain, rather than from each participant: one '
    'audit, paid for by the party with the margin to absorb it, covering '
    'precisely the small suppliers Ines is worried about. Yusuf’s '
    'twelve-person firm then has an obligation to answer questions rather '
    'than to commission a report, which is an order of magnitude cheaper and '
    'cannot be escaped by splitting the company. The threshold debate is '
    'really an argument about who holds the duty, and it has been conducted '
    'as though the only options were everyone and the big ones.'],
   F(['a.  The response traces both positions to one underlying fact. What '
      'is it?',
      'b.  What does the proposal do that a threshold cannot?'],
     ['a.  "it has been conducted as though the only options were everyone '
      'and the big ones" — what is this sentence doing?',
      'b.  "an order of magnitude cheaper" — why quantify loosely '
      'rather than precisely?']),
   ['I agree with Ines that all companies should be obliged to publish these '
    'audits because consumers have the right to know how the products they '
    'buy are made, and because exploitation often happens exactly in the '
    'small subcontractors that nobody controls. Of course it is more '
    'difficult for small companies but the government could give them '
    'subsidies or simplified forms to help them. If we only regulate the '
    'big multinationals they will just move their production to smaller '
    'suppliers to avoid the rules, which is exactly what we want to prevent.'],
   [('P1', [['a.  Ines about where the harm falls — on workers in small '
             'subcontractors. Yusuf about where the cost falls — on '
             'small firms. They are arguing about different distributions '
             'and both are correct.'],
            ['b.  Yes, if the duty is relocated rather than scaled. That is '
             'the response’s move and neither classmate considers it, '
             'because both treat the duty as necessarily attaching to each '
             'firm.']]),
    ('P2', [['a.  The cost of meeting a regulation, as distinct from any '
             'penalty. De minimis is a threshold below which a rule does not '
             'apply because the amounts are too small to be worth '
             'administering.'],
            ['b.  Because it takes a larger share of a small firm’s '
             'revenue than a large one’s — the same mechanism by '
             'which a flat tax is regressive.']]),
    ('P3', [['Model: "The audit cost is largely fixed, so any rule that '
             'attaches it to each firm must either crush small ones or '
             'exempt them and leak."']]),
    ('F1', [['a.  That audit costs are largely fixed rather than '
             'proportional. Exemptions are attractive because of it and '
             'leaky because of it, so one feature generates the whole '
             'dilemma.'],
            ['b.  It cannot be escaped by restructuring. A threshold applies '
             'to a unit and units can be split; a chain-wide duty on the '
             'lead firm follows the goods rather than the corporate form, so '
             'reorganising below it achieves nothing.']]),
    ('F2', [['a.  Naming the unexamined assumption shared by both sides, '
             'which is how the response earns the right to introduce a third '
             'option. It also attributes the error to the debate rather than '
             'to either classmate.'],
            ['b.  Because the writer does not have the figure and should not '
             'pretend to. The argument needs only that the difference is '
             'large, and a loose but honest quantification is stronger than '
             'a precise invented one.']]),
    ('F3', [['1.  Yusuf’s argument is acknowledged and then answered '
             'with "subsidies or simplified forms", which is a gesture '
             'rather than a mechanism and leaves the fixed cost in place.'],
            ['2.  The final sentence is Ines’s point restated, not a '
             'contribution, and the response never asks who should hold the '
             'duty.'],
            ['3.  Language: "the big multinationals", "the small '
             'subcontractors", "the products they buy" over-articled; '
             '"nobody controls" should be "nobody oversees"; "exploitation '
             'often happens" is asserted without any source.']])]),

ad('AD 038', 'Technology and AI · responsibility: who should act',
   ('allocate a duty to whoever can see the whole picture',
    'modals of obligation across agents', 'provenance, downstream, auditable, deployer',
    'allocating duty along a chain where nobody sees all of it'),
   'Dr Sorensen',
   'When an automated hiring tool is found to disadvantage a protected '
   'group, responsibility is contested between the company that built the '
   'model, the employer that deployed it, and the regulator. Where should it '
   'sit?',
   [('Maya', 'The builder. They chose the training data and the objective '
     'function, and they are the only party with the expertise to know what '
     'the model is doing. An employer buying a tool cannot reasonably be '
     'expected to audit a neural network.'),
    ('Tom', 'The employer. They decide to use it, they benefit from it, and '
     'they are the ones in a legal relationship with the applicant. '
     'Outsourcing a decision does not outsource the duty that goes with '
     'making it.')],
   P(['a.  Maya argues from capability and Tom from relationship. Which '
      'does discrimination law usually follow?',
      'b.  What can the employer observe that the builder cannot?'],
     ['a.  What is a deployer, and what does downstream mean here?',
      'b.  What makes a system auditable?'],
     ['Allocate the duty in one sentence that gives each party the part '
      'they can actually perform.']),
   ['Maya and Tom are each right about a different duty, and the argument '
    'only looks binary because both are called responsibility. The builder '
    'is the only party who can know what the model optimises and on what it '
    'was trained, so the duty to document belongs there. The employer is the '
    'only party who can see the outcome in their own applicant pool, '
    'including the people who never applied, so the duty to monitor belongs '
    'there. Neither can discharge the other’s.',
    'That split also explains why the current arrangement fails. A vendor '
    'supplies a model with no provenance statement; an employer runs it '
    'without outcome data because it is nobody’s job to collect it; and '
    'when a pattern emerges each can truthfully say the information needed '
    'to see it was held by the other. The regulator’s role is then '
    'neither to build nor to monitor but to require that the two be '
    'connected — a documentation standard on the builder and an '
    'outcome-reporting duty on the deployer. Responsibility does not have to '
    'be allocated whole, and insisting that it does is what keeps this '
    'argument circular.'],
   F(['a.  The response assigns different duties by a single criterion. '
      'What is it?',
      'b.  The final sentence makes a general claim. What is it, and is it '
      'earned?'],
     ['a.  "including the people who never applied" — why does this '
      'clause matter so much?',
      'b.  "each can truthfully say the information needed to see it was '
      'held by the other" — what makes "truthfully" the key word?']),
   ['In my opinion the responsibility should be shared between all the '
    'actors because each of them plays a role in this process. The company '
    'that creates the algorithm must make sure it is not biased and test it '
    'properly before selling it. The employer must also check that the tool '
    'is working correctly and not discriminating against candidates. And the '
    'regulator must create clear rules and controls to protect the citizens. '
    'If everybody does their job then these problems will not happen and the '
    'recruitment process will be fair for everybody.'],
   [('P1', [['a.  Relationship, usually. The duty not to discriminate '
             'attaches to the party making the decision about the '
             'applicant, which is Tom’s point — though that does '
             'not settle who can detect the problem.'],
            ['b.  Their own outcomes: who applied, who was filtered, who was '
             'hired, and by group. The builder sees the model; only the '
             'employer sees what it did in their context.']]),
    ('P2', [['a.  The deployer is the party putting the system into use. '
             'Downstream means after the model is supplied — the uses '
             'and effects the builder does not control.'],
            ['b.  That its inputs, decisions and outcomes can be inspected '
             'and reconstructed afterwards by someone who was not involved '
             'in building it.']]),
    ('P3', [['Model: "The builder must document what the model optimises and '
             'on what it was trained; the employer must monitor outcomes in '
             'their own pool; the regulator must require the two to '
             'connect."']]),
    ('F1', [['a.  Who can see the relevant information. Each duty is '
             'assigned to the only party in a position to discharge it, '
             'which is why neither can be substituted for the other.'],
            ['b.  That responsibility need not be allocated as a single '
             'whole. It is earned, because the preceding paragraphs have '
             'shown a concrete case in which splitting it produces a '
             'workable arrangement and insisting on unity produces '
             'deadlock.']]),
    ('F2', [['a.  Because the most serious effects of a filtering tool are '
             'on people who are deterred from applying at all, and those '
             'never appear in the model’s outputs. Only the employer, '
             'looking at their own pipeline against the labour market, has '
             'any chance of seeing it — which is the strongest '
             'argument for locating monitoring there.'],
            ['b.  Because it establishes that the failure is structural '
             'rather than evasive. If both parties can be honest and the '
             'problem still goes undetected, no amount of good faith fixes '
             'it, and the remedy has to be a rule about information rather '
             'than about conduct.']]),
    ('F3', [['1.  It allocates to everyone, which is the answer the question '
             'was designed to improve on, and neither classmate’s '
             'argument is engaged.'],
            ['2.  "Make sure it is not biased" and "check that the tool is '
             'working correctly" assume the detection problem away — '
             'the whole difficulty is that neither party can do this alone.'],
            ['3.  "If everybody does their job then these problems will not '
             'happen" is an unearned absolute, and "the recruitment process '
             'will be fair for everybody" does not follow from anything. '
             'Language: "all the actors", "the citizens", "the algorithm" '
             'over-articled.']])]),

ad('AD 039', 'Environment · value trade-off',
   ('ask whether the two goods are measured on the same scale',
    'comparative of importance', 'biodiversity, offset, irreversibility, discounting',
    'weighing a present cost against a future one'),
   'Professor Haugen',
   'A proposed rail line would cut journey times substantially and reduce '
   'road traffic, but would pass through an ancient woodland that cannot be '
   'recreated. Which should weigh more heavily — the long-term '
   'transport benefit, or the irreversible loss?',
   [('Nils', 'The transport benefit. Emissions avoided over a century are '
     'real and cumulative; a few hundred hectares of woodland, however old, '
     'is a local loss. We cannot treat every irreplaceable thing as '
     'infinitely valuable or nothing gets built.'),
    ('Aisha', 'Irreversibility is not just a large cost, it is a different '
     'kind of cost. A mistake about emissions can be corrected by later '
     'policy; a mistake about a four-hundred-year-old woodland cannot be '
     'corrected by anything. That asymmetry should dominate.')],
   P(['a.  Aisha is making a claim about kinds rather than quantities. '
      'Restate it.',
      'b.  Nils raises a practical worry. What is it, and is it fair?'],
     ['a.  What is discounting, and why is it contested for environmental '
      'goods?',
      'b.  What is an offset, and why is it harder here than for carbon?'],
     ['State the asymmetry in one sentence without claiming either good is '
      'infinite.']),
   ['Aisha’s point is the stronger one and it is narrower than it '
    'sounds. She is not claiming the woodland is infinitely valuable, which '
    'is the claim Nils is answering; she is claiming that an error has '
    'different properties in each direction. If we build and are wrong, '
    'nothing restores the woodland. If we do not build and are wrong, the '
    'route can be revisited, at a cost, for as long as the land remains '
    'undeveloped.',
    'That argues for a decision rule rather than a verdict: where one option '
    'forecloses and the other does not, the foreclosing option should have '
    'to clear a higher bar, not an infinite one. Applied here it means the '
    'transport case has to be strong enough to survive the loss of the '
    'cheapest alternative alignments, and those are usually the ones '
    'rejected early on cost. Nils is right that treating everything '
    'irreplaceable as decisive would stop all building; he is wrong that the '
    'alternative is treating it as one cost among others. There is a middle '
    'position, and it is the one that most planning systems claim to hold '
    'and routinely do not.'],
   F(['a.  The response says Nils is answering a claim Aisha did not make. '
      'What claim?',
      'b.  The proposed rule is specific. What does it require of the '
      'transport case?'],
     ['a.  "not an infinite one" — why insert this three-word '
      'qualification?',
      'b.  "that most planning systems claim to hold and routinely do not" '
      '— what does the closing clause achieve?']),
   ['I think the environment must come first because once we destroy an '
    'ancient forest it is gone for ever and future generations will never '
    'see it. We already have too much infrastructure and we are destroying '
    'nature everywhere for economic reasons. The train would save some time '
    'for passengers but is this really more important than a forest which '
    'has existed for four hundred years and which is home to many species? '
    'In my opinion the government should find another route even if it costs '
    'more money, because nature has no price.'],
   [('P1', [['a.  That the two options differ in whether error can be '
             'corrected, which is a structural property rather than a '
             'quantity on the same scale.'],
            ['b.  That if everything irreplaceable is decisive, nothing is '
             'ever built. It is fair as stated, and it is why the response '
             'proposes a higher bar rather than a veto.']]),
    ('P2', [['a.  Discounting is valuing future costs and benefits at less '
             'than present ones. It is contested for environmental goods '
             'because at any positive rate an irreversible loss far enough '
             'ahead becomes negligible, which many find absurd.'],
            ['b.  An offset is compensating a loss elsewhere. It is harder '
             'here because a carbon tonne is fungible and a four-hundred-'
             'year-old ecosystem is not — planting trees does not '
             'produce ancient woodland for four centuries.']]),
    ('P3', [['Model: "The two errors differ in kind: one can be revisited '
             'and the other cannot, which is a reason to demand more of the '
             'irreversible option rather than to forbid it."']]),
    ('F1', [['a.  That the woodland is infinitely valuable, or that '
             'irreplaceability is automatically decisive. Aisha claimed '
             'only that irreversibility has a particular structure.'],
            ['b.  That it survives the loss of the cheaper alternative '
             'alignments — in other words, that the case must be strong '
             'enough to justify this route specifically, not merely a rail '
             'line in general. That is a demanding and checkable test.']]),
    ('F2', [['a.  It blocks the reading Nils is primed for, in which any '
             'argument for extra weight is an argument for a veto. Three '
             'words prevent the whole response from being dismissed as the '
             'position he has already rebutted.'],
            ['b.  It turns the proposal from an invention into a standard '
             'already nominally in force, which makes it far harder to '
             'reject — and lands the criticism on practice rather than '
             'on principle.']]),
    ('F3', [['1.  It argues the position Nils already answered, treating '
             'the woodland as decisive without engaging his point that this '
             'would stop all building.'],
            ['2.  "Nature has no price" is precisely the infinite-value '
             'claim, asserted rather than defended, and "find another route '
             'even if it costs more" ignores that cost falls on someone.'],
            ['3.  The emissions benefit — the actual environmental case '
             'for the line — is reduced to "save some time for '
             'passengers", which misrepresents the other side. Language: '
             '"the environment", "nature", "future generations" used as '
             'slogans rather than as terms in an argument.']])]),

ad('AD 040', 'Media and communication · responsibility: who should act',
   ('ask which party can act without needing anyone’s permission',
    'modals of obligation across agents', 'moderation, scale, liability, redress',
    'allocating duty where the obvious candidate cannot cope'),
   'Dr Oyelowo',
   'Online harassment of individuals is widespread and the response is '
   'inconsistent. Who should bear primary responsibility for dealing with '
   'it — the platforms, the police, or the users themselves?',
   [('Reem', 'The platforms. They have the data, the tools and the '
     'contractual relationship with the abuser. The police cannot act at '
     'this volume and will not act for most of it.'),
    ('Felix', 'The police, however badly they do it now. Harassment is a '
     'crime and the remedy for a crime should not be a company’s terms '
     'of service, decided privately with no appeal and no record. Handing it '
     'to platforms means giving up on redress.')],
   P(['a.  Felix concedes that the police do this badly. What is his '
      'argument despite that?',
      'b.  Reem makes a capacity argument. Does Felix answer it?'],
     ['a.  What is redress, and why does it matter that moderation offers '
      'none?',
      'b.  Why does scale change what moderation can be?'],
     ['Separate what each party can do, in one sentence.']),
   ['Felix is right about what is lost and Reem is right about what is '
    'possible, and the disagreement survives because both are describing the '
    'same act — removal of a post — as though it were the whole '
    'remedy. It is not. Platform action stops the conduct and offers no '
    'finding, no record and no appeal; criminal process offers all three and '
    'reaches perhaps one case in a thousand. Those are complements, not '
    'rivals.',
    'What is missing is the thing neither provides: a route by which a '
    'pattern becomes visible. A platform sees every message and treats them '
    'one at a time; the police see one report and cannot see the account '
    'history behind it. So I would put immediate action with the platforms, '
    'because they are the only party who can act without anyone’s '
    'permission, and place on them a duty to preserve and disclose on '
    'request — which is what converts a thousand deleted posts into the '
    'evidence Felix’s process needs. The users themselves I would leave '
    'out of it entirely: responsibility that falls on the person being '
    'harmed is not a policy, it is an absence of one.'],
   F(['a.  The response says both are describing the same act. Which, and '
      'why is noticing that decisive?',
      'b.  The third option in the question is dismissed in one sentence. '
      'Is that adequate?'],
     ['a.  "the only party who can act without anyone’s permission" '
      '— what criterion is being applied?',
      'b.  "it is an absence of one" — what does the short final '
      'clause do?']),
   ['In my opinion the platforms have the main responsibility because they '
    'created these spaces and they are earning a lot of money from them, so '
    'they must also take care of the safety of their users. They have '
    'thousands of engineers and artificial intelligence, so they could '
    'certainly do much more if they wanted, but they prefer not to spend '
    'money on moderation. Of course the police should also intervene in the '
    'most serious cases, and users should report the abuse when they see it. '
    'Governments should impose heavy fines on the platforms that do not '
    'protect their users.'],
   [('P1', [['a.  That a private process cannot deliver what a legal one '
             'can — a finding, a record, an appeal — so treating '
             'moderation as the remedy abandons redress even where it '
             'removes the content.'],
            ['b.  No. He addresses what the police ought to provide and not '
             'whether they can provide it at volume, which is the gap the '
             'response fills.']]),
    ('P2', [['a.  Redress is a remedy for a wrong — a determination '
             'that it happened and a consequence. Moderation offers neither, '
             'so the person harmed gets quiet rather than justice.'],
            ['b.  Because at a billion messages a day, moderation cannot be '
             'adjudication. It becomes classification under time pressure, '
             'which is a different activity with different error '
             'properties.']]),
    ('P3', [['Model: "Platforms can stop the conduct immediately but offer '
             'no finding; the police can offer a finding but cannot reach '
             'the volume."']]),
    ('F1', [['a.  Removal of content. It is decisive because once you see '
             'that removal is only one component of a remedy, the question '
             'stops being who should do it and becomes who should do which '
             'part.'],
            ['b.  Yes, provided the dismissal gives a reason, which it does: '
             'assigning responsibility to the person being harmed is not an '
             'allocation of duty but a failure to make one. Brevity is '
             'appropriate because the option does not survive being stated '
             'clearly.']]),
    ('F2', [['a.  Capacity to act unilaterally. A duty placed on a party '
             'that must first obtain a warrant, a court order or another '
             'company’s cooperation will not be discharged at speed, '
             'which is the whole problem with the status quo.'],
            ['b.  It lands the judgement after a long sentence, in four '
             'words, and converts a policy proposal into a definition. The '
             'rhythm does the work: anything longer would argue the point '
             'where the short form simply settles it.']]),
    ('F3', [['1.  It allocates to everyone and then adds fines, without '
             'engaging Felix’s argument that private processes offer no '
             'redress.'],
            ['2.  "They could certainly do much more if they wanted" '
             'attributes the problem to unwillingness and never addresses '
             'scale, which was Reem’s actual claim.'],
            ['3.  "Users should report the abuse" places a duty on the '
             'harmed party without noticing. Language: "the platforms", "the '
             'safety of their users", "the most serious cases" '
             'over-articled; "artificial intelligence" is invoked as though '
             'it were a resource rather than a method.']])]),

ad('AD 041b', 'Psychology and society · responsibility: who should act',
   ('ask who can change the condition rather than who caused it',
    'modals of obligation across agents', 'determinant, intervention, locus, upstream',
    'assigning duty without implying blame'),
   'Dr Almeida',
   'Loneliness among older people is associated with worse health outcomes '
   'and higher care costs. Responsibility for addressing it is variously '
   'placed on families, local government and health services. Where does it '
   'belong?',
   [('Greta', 'Families, uncomfortable as that is. No service replaces '
     'being known, and a state that takes over the duty removes the '
     'expectation that anyone else will perform it.'),
    ('Sam', 'That is a prescription nobody can act on. Families are '
     'dispersed, often working two jobs, sometimes estranged for good '
     'reasons. Assigning a duty to people who cannot discharge it is a way '
     'of assigning it to nobody.')],
   P(['a.  Sam makes an argument about feasibility. Does it answer '
      'Greta’s point?',
      'b.  Greta raises a crowding-out worry. State it precisely.'],
     ['a.  What is a determinant, and what does upstream mean here?',
      'b.  What is the locus of an intervention?'],
     ['State who should act in one sentence that avoids blaming anyone.']),
   ['Sam is right that a duty nobody can discharge is not a duty, and Greta '
    'is pointing at something real that his objection does not reach. Her '
    'worry is not that families should be compelled but that provision can '
    'displace what it was meant to supplement — and there is some '
    'evidence for that in other domains. The question is whether it applies '
    'to this one.',
    'I do not think it does, because the mechanism is wrong. Crowding out '
    'happens where a service substitutes for an identical good: paid care '
    'can replace unpaid care because the task is the same. Being known is '
    'not a task and no service supplies it, which means a befriending scheme '
    'cannot displace a relationship it is incapable of providing. What it '
    'can do is reduce the isolation that makes contact harder to restart. So '
    'I would place the duty with local government, on the narrow ground that '
    'it is the only body that can identify who is isolated at all — '
    'through housing, libraries, adult services — and that identifying '
    'them is the part families, by definition, cannot do for the people who '
    'have nobody.'],
   F(['a.  The response takes Greta’s worry seriously and then rejects '
      'it. On what grounds?',
      'b.  The final clause gives a reason for choosing local government. '
      'What makes it strong?'],
     ['a.  "Being known is not a task" — why is this five-word sentence '
      'the pivot of the response?',
      'b.  "by definition" — what is it doing?']),
   ['I think this is a problem of modern society where people are more and '
    'more individualistic and do not care about their neighbours or even '
    'their own parents. In the past families lived together and the older '
    'people were respected and included in family life, but today everybody '
    'is busy with work and technology. In my opinion families should take '
    'more responsibility for their elderly relatives, but also the '
    'government should provide services like day centres and home visits, '
    'and communities should organise activities for older people so they do '
    'not feel alone.'],
   [('P1', [['a.  Partly. It shows the duty cannot be enforced, but not that '
             'Greta is wrong about what happens when the state assumes it '
             '— those are different claims.'],
            ['b.  That public provision may reduce the informal care '
             'families would otherwise supply, so the total rises by less '
             'than the service provides, or not at all.']]),
    ('P2', [['a.  A determinant is a factor that shapes an outcome; '
             'upstream means acting on the conditions rather than the '
             'symptom.'],
            ['b.  The point in a causal chain where the intervention is '
             'applied — which is exactly what the response is '
             'choosing.']]),
    ('P3', [['Model: "The duty should sit with local government, not because '
             'families have failed but because it is the only body that can '
             'find the people who have no family at all."']]),
    ('F1', [['a.  On the mechanism. Crowding out requires the service and '
             'the informal good to be substitutes, and the response argues '
             'they are not — so the worry is well founded in general '
             'and inapplicable here.'],
            ['b.  It identifies something only that body can do, rather '
             'than something it would be nice for it to do. A duty '
             'allocated by unique capability is far harder to argue with '
             'than one allocated by resources or by fault.']]),
    ('F2', [['a.  Because the entire rejection of Greta’s worry turns '
             'on it. If being known were a task, a service could perform it '
             'and displacement would follow; because it is not, the '
             'substitution the worry requires cannot occur.'],
            ['b.  It marks the claim as true by the meaning of the terms '
             'rather than by evidence: people who have nobody have, by '
             'definition, no family to notice them. That makes the '
             'justification for a public locus airtight rather than '
             'empirical.']]),
    ('F3', [['1.  It opens with a generalised lament about modern society '
             'that neither classmate raised and that supports no '
             'conclusion.'],
            ['2.  It allocates to everyone — families, government, '
             'communities — which is the answer the question exists to '
             'improve on, and Greta’s crowding-out worry is '
             'contradicted without being noticed.'],
            ['3.  Language: "the older people", "family life", "the '
             'government" over-articled; "do not care about their '
             'neighbours" is an unsupported claim about motives; and the '
             'nostalgia in the second sentence is doing the work that '
             'evidence should.']])]),
]
