# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 073-078."""
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

ad('AD 073', 'Biology · agree / disagree',
   ('refuse a false dichotomy by naming the interaction',
    'comparative with as ... as', 'heritable, plasticity, phenotype, variance',
    'answering a nature-versus-nurture question properly'),
   'Professor Ikeda',
   'Public argument still treats traits as either inherited or produced by '
   'environment. Biologists usually say the question is malformed. Is that '
   'an evasion, or is the dichotomy genuinely false?',
   [('Liv', 'It is not an evasion. Height is highly heritable and also '
     'rose ten centimetres in a century on better nutrition. Both '
     'statements are true and neither is a percentage of the other.'),
    ('Dan', 'That sounds like a way of never answering. Heritability '
     'estimates give numbers. If a trait is 80% heritable, surely that '
     'means something about how much environment can do.')],
   P(['a.  Dan’s question is reasonable. What does he misunderstand '
      'about a heritability estimate?',
      'b.  Why is Liv’s height example so effective?'],
     ['a.  What is a phenotype, and what is variance?',
      'b.  What does plasticity mean in this context?'],
     ['State your position in one sentence about what heritability '
      'measures.']),
   ['Liv is right and Dan has put his finger on exactly why biologists '
    'sound evasive: the number he is quoting does not mean what its '
    'phrasing suggests.',
    'Heritability is not the proportion of a trait caused by genes. It is '
    'the proportion of variation in a particular population at a '
    'particular time that tracks genetic variation. If everyone in a '
    'population eats well, nutrition stops contributing to the '
    'differences between them, and heritability rises without any gene '
    'becoming more powerful. The number is as much a fact about the '
    'environment as about the genome.',
    'That is why Liv’s example settles it. Height can be 80% '
    'heritable within a generation and still shift ten centimetres '
    'between generations, because the first statement is about '
    'differences among contemporaries and the second about a change in '
    'conditions affecting everyone.',
    'So the dichotomy is genuinely false, and not because the answer is '
    '"a bit of both". It is false because the two factors do not partition '
    'a trait at all — they interact, and the statistic that appears '
    'to divide them is measuring something else. Dan is owed that '
    'explanation rather than the usual refusal to answer.'],
   F(['a.  The response agrees with Liv but spends most of its length on '
      'Dan. Why?',
      'b.  Why does the last paragraph reject "a bit of both"?'],
     ['a.  "The number is as much a fact about the environment as about '
      'the genome" — what does the comparative achieve?',
      'b.  "differences among contemporaries" versus "a change in '
      'conditions affecting everyone" — why this contrast?']),
   ['I agree that the question is too simple because obviously both genes '
    'and environment play an important role in human development. '
    'Scientists have shown that identical twins raised apart are similar '
    'in many ways but also different in others, which proves that both '
    'factors matter. For example a person may inherit a talent for music '
    'but they will never become a musician without training and '
    'opportunity. So in my opinion it is about fifty-fifty and we should '
    'stop arguing about it.'],
   [('P1', [['a.  He treats heritability as the share of the trait caused '
             'by genes, when it is the share of variation in one '
             'population attributable to genetic variation — a '
             'statistic about differences, not about causes within an '
             'individual.'],
            ['b.  Because it gives two true statements that sound '
             'contradictory under Dan’s reading and are perfectly '
             'consistent under the correct one, which exposes the '
             'misunderstanding without having to define anything.']]),
    ('P2', [['a.  A phenotype is an observable characteristic; variance is '
             'the statistical spread of a trait across a population.'],
            ['b.  The capacity of a genotype to produce different '
             'phenotypes under different conditions — which is '
             'precisely what a single heritability figure conceals.']]),
    ('P3', [['Model: "Heritability measures how much of the variation in '
             'one population tracks genetic variation, not how much of a '
             'trait is caused by genes."']]),
    ('F1', [['a.  Because Liv’s position is correct but Dan’s '
             'objection is the one the discussion turns on. He has raised '
             'the strongest version of the lay view, and answering it is '
             'the only way to show the dichotomy is false rather than '
             'merely unfashionable.'],
            ['b.  Because "a bit of both" accepts the premise that the '
             'trait divides into two portions, which is the error. The '
             'factors interact, so no partition exists to be split at any '
             'ratio.']]),
    ('F2', [['a.  The as ... as comparison makes the two readings '
             'equivalent rather than ranking them, which is the precise '
             'claim: the figure cannot be interpreted without knowing the '
             'environmental conditions of the population measured.'],
            ['b.  It names the two different things the two statements are '
             'about. Once that is visible the apparent contradiction '
             'disappears, which is what makes the explanation do real work '
             'rather than just asserting that both matter.']]),
    ('F3', [['1.  "It is about fifty-fifty" commits the exact error under '
             'discussion — treating the trait as divisible into two '
             'shares.'],
            ['2.  Dan’s specific question about what an 80% figure '
             'means is never addressed, so the response does not engage '
             'the point at issue.'],
            ['3.  The twin study is described as proving that "both '
             'factors matter", which nobody disputed, and "we should stop '
             'arguing about it" declines the question the prompt asks.']])]),

ad('AD 074', 'Law · policy choice',
   ('choose the rule that fails safely',
    'relative clauses with whereby', 'burden, presumption, disclosure, remedy',
    'choosing who bears a burden of proof'),
   'Dr Amari',
   'In disputes between consumers and large firms, evidence is usually held '
   'by the firm. Some systems place the burden on the consumer to prove '
   'fault; others presume fault and require the firm to disprove it. Which '
   'allocation is better?',
   [('Sol', 'Presume fault. The party holding the evidence should bear the '
     'burden, otherwise the rule rewards whoever controls the records.'),
    ('Ren', 'Reverse the burden and every disappointed customer has a free '
     'claim. Firms will settle nuisance cases rather than litigate, and the '
     'cost lands on honest customers in the price.')],
   P(['a.  Both speakers are predicting behaviour. What does each predict?',
      'b.  Why does the location of the evidence matter to a burden rule?'],
     ['a.  What is a presumption, and what is disclosure?',
      'b.  What is a remedy, in legal terms?'],
     ['Choose in one sentence that names the failure mode you accept.']),
   ['Sol has the better rule, and Ren has identified the cost that has to '
    'be designed around rather than a reason to reject it.',
    'The informational point is decisive. A burden placed on the party '
    'without access to the evidence is not a high standard but an '
    'unmeetable one, and a rule whereby the holder of the records decides '
    'what the court sees is not a rule about fault at all. That is the '
    'situation Sol is describing and it is indefensible.',
    'Ren’s nuisance-claim worry is real but it is an argument about '
    'filtering, not about burdens. A presumption can be triggered only '
    'once a claimant shows a defect and a loss, which costs a genuine '
    'claimant little and a speculative one everything. Jurisdictions that '
    'reversed the burden without such a threshold did see the behaviour he '
    'predicts.',
    'What settles it for me is which way each rule fails. Under '
    'Ren’s allocation the failures are invisible: consumers with good '
    'claims abandon them, and nothing appears in any statistic. Under '
    'Sol’s, the failures are visible and expensive — bad claims '
    'brought and settled — which is precisely why they get fixed. I '
    'would rather have the error that shows up.'],
   F(['a.  The response accepts Ren’s prediction as accurate. How '
      'does it still reject his conclusion?',
      'b.  Why is visibility of failure treated as decisive?'],
     ['a.  "a rule whereby the holder of the records decides what the '
      'court sees" — what does the relative clause with whereby '
      'contribute?',
      'b.  "the error that shows up" — why end on this?']),
   ['I think the burden should be on the company because large '
    'corporations have much more money and power than ordinary consumers, '
    'and they can afford expensive lawyers while a normal person cannot. '
    'It is simply not fair for a consumer to have to prove something when '
    'the company is hiding all the information. Ren is worried about false '
    'claims but I think most people are honest and would not waste their '
    'time making a claim with no reason. Consumer protection laws exist to '
    'defend the weaker party.'],
   [('P1', [['a.  Sol predicts that a consumer-side burden systematically '
             'defeats valid claims. Ren predicts that a firm-side burden '
             'generates invalid ones that get settled rather than '
             'tested.'],
            ['b.  Because a burden is only meaningful if the party bearing '
             'it can discharge it. Placing it on the side without access '
             'converts a standard of proof into an outcome.']]),
    ('P2', [['a.  A presumption is a conclusion the law draws unless '
             'rebutted; disclosure is the compelled production of '
             'documents to the other side.'],
            ['b.  What a court can give a successful claimant — '
             'damages, repair, rescission. The adequacy of the remedy '
             'affects whether a claim is worth bringing at all.']]),
    ('P3', [['Model: "Presume fault once a defect and a loss are shown, '
             'accepting that some weak claims will be settled rather than '
             'tested."']]),
    ('F1', [['a.  By treating it as a design problem with a known '
             'solution. A threshold requirement screens speculative claims '
             'without restoring the informational asymmetry, so his '
             'prediction becomes a constraint on how the presumption is '
             'built rather than an argument for the other rule.'],
            ['b.  Because both rules produce errors, so the question is '
             'which errors a system can detect and correct. Invisible '
             'failures accumulate indefinitely; visible ones generate '
             'pressure for reform.']]),
    ('F2', [['a.  It compresses the mechanism of the objection into a '
             'single noun phrase, so the sentence can assert that such an '
             'arrangement is not a rule about fault. Spelling it out in a '
             'separate sentence would lose the force of the equation.'],
            ['b.  Because it states the choice in one phrase and in the '
             'writer’s own terms. It also concedes openly that the '
             'preferred rule produces errors, which makes the position '
             'look chosen rather than assumed.']]),
    ('F3', [['1.  The argument is about resources and fairness in general, '
             'not about who holds the evidence — which is the actual '
             'basis for a burden rule.'],
            ['2.  "Most people are honest and would not waste their time" '
             'answers Ren’s incentive argument with an assertion '
             'about character, and ignores that firms settle rather than '
             'litigate regardless of the claim’s merit.'],
            ['3.  No threshold, no mechanism, no failure mode considered '
             '— "consumer protection laws exist to defend the weaker '
             'party" restates the conclusion as a premise.']])]),

ad('AD 075', 'Psychology · value trade-off',
   ('weigh a benefit to the many against a cost to the few',
    'concessive even if', 'screening, incidence, stigma, threshold',
    'weighing a benefit against a harm from false identification'),
   'Dr Brennan',
   'Universities are considering routine mental-health screening at '
   'enrolment. Supporters say it finds students who would not come forward. '
   'Critics say large-scale screening produces many false positives, '
   'pathologises ordinary distress and may deter disclosure. Should it be '
   'introduced?',
   [('Yara', 'Introduce it. The students who most need help are the least '
     'likely to ask for it, and an opt-out questionnaire costs almost '
     'nothing.'),
    ('Emil', 'Screening a low-incidence condition produces mostly false '
     'positives, however good the instrument. You would be telling '
     'hundreds of well students they may be unwell, and they talk to each '
     'other.')],
   P(['a.  Emil’s objection is statistical. Why does low incidence '
      'matter?',
      'b.  What does Yara’s argument depend on that is not about '
      'screening?'],
     ['a.  What is incidence, and what is a threshold?',
      'b.  What does it mean to pathologise something?'],
     ['Take a position in one sentence that names what you would change '
      'about the proposal.']),
   ['Yara is identifying a real failure and Emil is describing why her '
    'remedy would not fix it, and the proposal should be changed rather '
    'than adopted or dropped.',
    'The statistical point has to be conceded. When a condition is rare, '
    'even an accurate instrument flags more well students than unwell '
    'ones, because the well group is so much larger. That is not a '
    'criticism of any particular questionnaire and cannot be engineered '
    'away by improving it.',
    'But Emil’s conclusion does not follow, because the harm he '
    'describes comes from what the university does with a flag rather '
    'than from the flag itself. Even if two-thirds of those identified '
    'are well, a result that triggers an offer of a conversation rather '
    'than a diagnosis costs them very little. The pathologising he '
    'rightly fears is a consequence of treating a screening score as a '
    'finding.',
    'So I would support screening that no student ever sees the output '
    'of — used to offer support universally to the flagged group, '
    'with no label attached and no record kept. That keeps '
    'Yara’s reach, and it means a false positive costs a student one '
    'declined email rather than a year of thinking something is wrong with '
    'them.'],
   F(['a.  The response concedes the statistics entirely. Where does it '
      'find room to disagree?',
      'b.  Why does the proposal insist students never see their own '
      'result?'],
     ['a.  "Even if two-thirds of those identified are well" — why '
      'the concessive?',
      'b.  "one declined email rather than a year of thinking something is '
      'wrong with them" — what does this comparison do?']),
   ['I think mental health screening is a good idea because mental health '
    'problems among students are increasing and universities have a '
    'responsibility to support their students. Many students suffer in '
    'silence because of stigma and are afraid to ask for help, so '
    'screening could identify them early. Emil worries about false '
    'positives but I think it is better to be safe than sorry, and if some '
    'healthy students are contacted unnecessarily that is not a serious '
    'problem compared to helping someone in a crisis.'],
   [('P1', [['a.  Because the number of false positives depends on the '
             'size of the healthy group. With a rare condition that group '
             'is enormous, so even a small error rate produces more false '
             'flags than true ones.'],
            ['b.  On the claim that those most in need will not '
             'self-refer. That is a premise about help-seeking behaviour, '
             'and the case for screening collapses without it.']]),
    ('P2', [['a.  Incidence is the rate of new cases in a population; a '
             'threshold is the score at which a screen counts as '
             'positive.'],
            ['b.  To recast an ordinary experience as a medical disorder '
             '— the harm Emil attributes to mass screening.']]),
    ('P3', [['Model: "Screen, but never report a score to a student '
             '— use it only to offer support, so a false positive '
             'costs one declined email."']]),
    ('F1', [['a.  In the consequences rather than the arithmetic. Emil '
             'treats the false-positive rate as settling the question, '
             'and the response points out that what a false positive '
             'costs depends entirely on how the result is used.'],
            ['b.  Because the harm is the label, not the flag. A student '
             'who never learns they were identified cannot be '
             'pathologised by the identification, which is what converts '
             'Emil’s decisive objection into a manageable cost.']]),
    ('F2', [['a.  It grants the opponent his worst figure and argues from '
             'inside it, which is stronger than disputing the rate. If the '
             'position survives his numbers it does not depend on '
             'contesting them.'],
            ['b.  It puts both costs in concrete, comparable terms, so the '
             'asymmetry is visible rather than asserted. "Minimal harm" '
             'would have been a claim; this is a description the reader can '
             'check against their own experience.']]),
    ('F3', [['1.  "Better to be safe than sorry" is exactly the reasoning '
             'Emil’s objection defeats, and the base-rate problem is '
             'never engaged.'],
            ['2.  "If some healthy students are contacted unnecessarily '
             'that is not a serious problem" asserts what the question '
             'asks us to weigh, with no account of what being contacted '
             'would involve.'],
            ['3.  Nothing is said about how a result would be '
             'communicated, recorded or acted on, so the response has no '
             'proposal — only a preference.']])]),

ad('AD 076', 'Journalism · agree / disagree',
   ('distinguish a duty to report from a duty to publish',
    'modal perfect for retrospective judgement', 'verification, public interest, embargo, source',
    'judging a publication decision'),
   'Professor Oyelaran',
   'A newspaper obtained and published documents showing that a public '
   'official had lied about a safety inspection. The documents were leaked '
   'in breach of confidentiality, and publication identified the junior '
   'employee who leaked them. Was publication justified?',
   [('Nils', 'Yes. The lie was about public safety. A newspaper that sits '
     'on that because of how it arrived has confused its own comfort with '
     'ethics.'),
    ('Joy', 'The story was justified; identifying the leaker was not. They '
     'published the public interest and the source in the same breath, and '
     'only one of those was necessary.')],
   P(['a.  Joy is not disputing the story. What is she separating?',
      'b.  Why is the identification of the source a different question '
      'from publication?'],
     ['a.  What is verification, and what is an embargo?',
      'b.  What does public interest mean as a journalistic test?'],
     ['State your position in one sentence that separates two decisions.']),
   ['Joy has the sharper analysis, and the reason is that two decisions '
    'have been collapsed into one and only the first of them was '
    'defensible.',
    'Nils is right about the story. A documented lie about a safety '
    'inspection is squarely in the public interest, and the manner of '
    'acquisition does not weigh against publishing what the documents '
    'show. A paper that declined would have been protecting the official, '
    'whatever it told itself.',
    'But identifying the employee served no part of that interest. '
    'Readers needed to know that the inspection records had been '
    'falsified; they did not need to know who photocopied them. The paper '
    'should have published the substance and withheld the name, and it '
    'could have done so without weakening the story at all — '
    'provenance can be attested without being disclosed.',
    'So my position is that the public-interest test applies to each '
    'piece of information separately, not to the story as a package. '
    'Nils’s argument justifies the first decision and is silent on '
    'the second, which is how a paper ends up exposing the one person in '
    'the account who took a risk to make it possible.'],
   F(['a.  The response agrees with Nils about the story. Why spend a '
      'paragraph on that before disagreeing?',
      'b.  Why insist the test applies "to each piece of information '
      'separately"?'],
     ['a.  "The paper should have published the substance and withheld '
      'the name" — why the modal perfect throughout this paragraph?',
      'b.  "the one person in the account who took a risk to make it '
      'possible" — what does this phrasing achieve?']),
   ['I agree that the newspaper was right to publish because the public '
    'has a right to know when officials lie, especially about something as '
    'important as safety. Journalism plays an essential role in holding '
    'power accountable and we should not criticise journalists for doing '
    'their job. Joy makes a fair point about the leaker and I agree it was '
    'unfortunate for that person, but ultimately the public interest must '
    'come first and the story was clearly in the public interest.'],
   [('P1', [['a.  The decision to publish the substance from the decision '
             'to identify the source. She accepts the first and objects '
             'only to the second.'],
            ['b.  Because the source’s identity carries no public '
             'interest of its own, while publishing it imposes a severe '
             'cost on one identifiable person. The two pieces of '
             'information have to be justified separately.']]),
    ('P2', [['a.  Verification is independently establishing that material '
             'is genuine; an embargo is an agreed delay before '
             'publication.'],
            ['b.  That the value of the information to the public '
             'outweighs the harm or the breach involved in obtaining and '
             'publishing it.']]),
    ('P3', [['Model: "Publishing the falsified records was justified; '
             'naming the employee who leaked them was not, because that '
             'name served no public interest."']]),
    ('F1', [['a.  Because Nils’s argument is correct as far as it '
             'goes, and conceding it fully removes any suggestion that the '
             'objection is squeamishness about leaks. The disagreement then '
             'lands precisely where it belongs.'],
            ['b.  Because a package test lets a strong justification for '
             'one element carry everything published alongside it. Applying '
             'it item by item is what exposes the identification as '
             'unjustified while leaving the story intact.']]),
    ('F2', [['a.  Because the decision has already been taken and the '
             'question is retrospective. "Should have published ... could '
             'have done so" evaluates a completed act, which is what the '
             'prompt asks for, rather than recommending a policy.'],
            ['b.  It locates the cost on a specific person and notes what '
             'they did for the story, so the objection is not abstract '
             'ethics but a concrete unfairness. It also contrasts their '
             'exposure with the official’s, which is the point.']]),
    ('F3', [['1.  Joy’s distinction is acknowledged and then '
             'dissolved — "the public interest must come first" '
             'answers a question about the story with a claim that is '
             'supposed to cover the name as well.'],
            ['2.  "We should not criticise journalists for doing their '
             'job" declines the evaluation the prompt requests.'],
            ['3.  "Unfortunate for that person" treats a serious and '
             'avoidable harm as a side effect, and nothing is said about '
             'whether the name was necessary to the story.']])]),

ad('AD 077', 'Agriculture · policy choice',
   ('choose by asking which option is robust to being wrong',
    'subordination with provided that', 'yield, subsidy, monoculture, resilience',
    'choosing between intensification and diversification'),
   'Dr Ferris',
   'To feed a growing population, agricultural policy can support '
   'intensification — higher yields on less land, with more inputs '
   '— or diversification, with mixed cropping and lower average '
   'yields but greater resilience. Which should be supported?',
   [('Bram', 'Intensification. Higher yields per hectare mean less land '
     'farmed, which is the single biggest thing we can do for '
     'biodiversity. Romanticising mixed farming costs forests.'),
    ('Chiara', 'Until the single variety fails. Monoculture is efficient '
     'right up to the year it is not, and then the failure is total and '
     'correlated across a whole region.')],
   P(['a.  Chiara is not disputing average yields. What is she disputing?',
      'b.  Why might the right answer depend on how confident we are '
      'about future conditions?'],
     ['a.  What is a monoculture, and what is resilience?',
      'b.  Distinguish average yield from yield variance.'],
     ['Choose in one sentence that names the risk you are buying.']),
   ['Bram has the better argument under stable conditions and '
    'Chiara’s objection is about exactly the conditions we are '
    'heading into, which is why I would weight towards diversification.',
    'The land-sparing case is strong and often under-appreciated. '
    'Doubling yields on existing farmland genuinely does protect forest, '
    'and a policy that lowers yields while demand rises exports '
    'deforestation elsewhere. That cost is real and falls on '
    'biodiversity, which is what Bram is defending.',
    'Chiara’s point is about the shape of the risk rather than its '
    'size. A system optimised for average yield has correlated failure: '
    'the same variety, the same pathogen, the same drought, across a '
    'region at once. Provided conditions stay within the range the '
    'optimisation assumed, that is a good trade. Climate projections are '
    'precisely a statement that they will not.',
    'So my position is intensification where the climate signal is weak '
    'and diversification where it is strong, with public support tilted '
    'towards the second because its benefit appears only in bad years and '
    'no individual farmer can capture it. Average yield is what a market '
    'already rewards; variance is the thing policy has to buy.'],
   F(['a.  The response concedes the land-sparing argument in full. Why '
      'does that not decide the question?',
      'b.  The final paragraph gives a reason for public support '
      'specifically. What is it?'],
     ['a.  "Provided conditions stay within the range the optimisation '
      'assumed, that is a good trade" — what does the subordinator '
      'do?',
      'b.  "variance is the thing policy has to buy" — why end here?']),
   ['I think we should support diversification because industrial farming '
    'has done enormous damage to the environment with pesticides and '
    'fertilisers, and it is not sustainable in the long term. Traditional '
    'mixed farming is much better for soil health and biodiversity, and '
    'small farmers deserve support rather than large agribusiness. Bram '
    'says higher yields save land but I think we could feed everyone '
    'already if we reduced food waste and ate less meat, so we do not '
    'really need to increase yields at all.'],
   [('P1', [['a.  The variance. She accepts that average yield is higher '
             'and argues that the distribution of outcomes, including rare '
             'total failures, is what matters for food security.'],
            ['b.  Because optimisation is only safe within the range of '
             'conditions assumed. Greater uncertainty raises the value of '
             'resilience relative to average performance.']]),
    ('P2', [['a.  A monoculture is a single crop or variety grown over a '
             'large area; resilience is the capacity to keep functioning '
             'through a shock.'],
            ['b.  Average yield is the expected output; variance is how '
             'much it fluctuates. A high average with high variance can be '
             'worse for food security than a lower, steadier one.']]),
    ('P3', [['Model: "Tilt support towards diversification, accepting lower '
             'average yields, because correlated failure is the risk we '
             'can least afford."']]),
    ('F1', [['a.  Because it establishes only that intensification is '
             'better on average. The question is which to support under '
             'uncertainty, and an argument about expected yield does not '
             'address what happens in the tail.'],
            ['b.  That resilience is a public good. Its benefit appears '
             'only in bad years and cannot be captured by the farmer who '
             'paid for it, so markets under-supply it while rewarding '
             'average yield — which is the classic case for '
             'subsidy.']]),
    ('F2', [['a.  It makes the concession conditional and names the '
             'condition precisely, so the agreement with Bram is genuine '
             'but bounded. The next sentence then removes the condition, '
             'which is far more economical than disputing his case '
             'directly.'],
            ['b.  Because it states in one clause why this is a policy '
             'question at all. The market already does half the job, so '
             'public money should buy the half it cannot — which '
             'answers "which should be supported" rather than "which is '
             'better".']]),
    ('F3', [['1.  "We could feed everyone already if we reduced food waste '
             'and ate less meat" changes the subject — the prompt '
             'asks which agricultural policy to support, not whether '
             'demand could be reduced.'],
            ['2.  Bram’s land-sparing argument is dismissed rather '
             'than weighed, and the deforestation consequence of lower '
             'yields is never addressed.'],
            ['3.  "Small farmers deserve support rather than large '
             'agribusiness" substitutes a preference about who farms for '
             'the question of which system is more robust, and '
             'Chiara’s point about correlated failure goes '
             'unused.']])]),

ad('AD 078', 'Business · agree / disagree',
   ('test a claim against the case where it costs something',
    'conditional with unless', 'stakeholder, fiduciary, externality, mandate',
    'testing a claim about corporate purpose'),
   'Professor Zhou',
   'It is often said that companies should serve all their stakeholders '
   '— workers, communities and the environment — rather than only '
   'shareholders. Critics argue this gives managers an excuse to answer to '
   'nobody. Is stakeholder governance an improvement?',
   [('Ines', 'Obviously. A company that treats its workers and its town as '
     'costs to be minimised externalises everything it can. Shareholder '
     'primacy is how we got here.'),
    ('Max', 'And who holds a manager to account under the alternative? '
     'Shareholder value is a bad objective with one great virtue: it is '
     'measurable and someone can be fired for missing it.')],
   P(['a.  Max is making an accountability argument, not a moral one. '
      'Explain.',
      'b.  What would a genuine test of stakeholder governance look like?'],
     ['a.  What is an externality, and what is a fiduciary duty?',
      'b.  What does mandate mean here?'],
     ['State your position in one sentence that names the hard case.']),
   ['Max has the stronger objection and Ines is right about the problem, '
    'which means the answer is neither primacy nor stakeholderism as '
    'usually stated.',
    'Ines’s diagnosis is accurate. A firm instructed to maximise '
    'one number will push every cost it can outside its own accounts, '
    'and pollution, insecure work and abandoned towns are what that looks '
    'like. Nobody defending shareholder value has a good answer to it.',
    'But Max has identified why the alternative rarely helps. '
    'Unless a stakeholder obligation is specific and enforceable by '
    'someone, it functions as a defence rather than a duty: a manager '
    'can justify almost any decision by naming a stakeholder it served. '
    'The hard case is a manager who underperforms and cites community '
    'benefit, and under most stakeholder frameworks nobody has standing '
    'to challenge that.',
    'So the improvement I would argue for is not a broader objective but '
    'narrower constraints — enforceable obligations on emissions, '
    'wages and consultation, with shareholders left to hold managers to '
    'account against what remains. That keeps Max’s accountability '
    'and removes Ines’s externalities, which a vaguer mandate does '
    'neither.'],
   F(['a.  The response rejects both stated positions. What is its own?',
      'b.  Why does it name "a manager who underperforms and cites '
      'community benefit"?'],
     ['a.  "Unless a stakeholder obligation is specific and enforceable '
      'by someone, it functions as a defence rather than a duty" — '
      'what does unless do here?',
      'b.  "narrower constraints" rather than "a broader objective" '
      '— what is the contrast doing?']),
   ['I strongly agree that companies should consider all stakeholders '
    'because businesses do not exist in a vacuum and they have a social '
    'responsibility to the communities where they operate. Only caring '
    'about profit leads to exploitation of workers and destruction of the '
    'environment, as we have seen many times. Max worries about '
    'accountability but I think companies that treat people well are '
    'usually more successful in the long run anyway, so there is no real '
    'conflict between doing good and making money.'],
   [('P1', [['a.  He is asking who can enforce an objective, not whether '
             'it is desirable. A goal nobody can measure or sanction is '
             'not a constraint on managers at all.'],
            ['b.  A case where serving a stakeholder costs shareholders '
             'real money and the decision is challenged. If the framework '
             'only operates where interests align, it is doing no work.']]),
    ('P2', [['a.  An externality is a cost imposed on third parties and '
             'not borne by the firm; a fiduciary duty is a legal '
             'obligation to act in another party’s interest.'],
            ['b.  The authority and instruction under which managers act '
             '— what they can be held to.']]),
    ('P3', [['Model: "Stakeholder language helps only where the '
             'obligations are specific and enforceable; otherwise the hard '
             'case is a manager who underperforms and cites the '
             'community."']]),
    ('F1', [['a.  Enforceable sectoral constraints on emissions, wages and '
             'consultation, with a single measurable objective inside '
             'them. It accepts Ines’s diagnosis and Max’s '
             'accountability requirement rather than splitting the '
             'difference between their conclusions.'],
            ['b.  Because that is the case where the two positions come '
             'apart. Stakeholder governance is costless where interests '
             'align, so any test of it has to be a case where someone '
             'loses — and the response shows nobody can contest the '
             'manager’s claim.']]),
    ('F2', [['a.  It makes the criticism conditional and states the '
             'condition that would answer it, so the response is not '
             'opposing stakeholder governance as such. That turns an '
             'objection into a specification.'],
            ['b.  It names the structural choice. A broader objective '
             'dilutes accountability; narrower constraints preserve it '
             'while ruling out the behaviour Ines objects to, so the '
             'contrast carries the whole argument in four words.']]),
    ('F3', [['1.  "There is no real conflict between doing good and making '
             'money" denies the premise of the question, which is about '
             'what happens when there is one.'],
            ['2.  Max’s accountability objection is named and then '
             'answered with a claim about long-run profitability, which is '
             'not about accountability at all.'],
            ['3.  No mechanism, no enforcement, no hard case — the '
             'response agrees with a sentiment rather than taking a '
             'position on governance.']])]),
]
