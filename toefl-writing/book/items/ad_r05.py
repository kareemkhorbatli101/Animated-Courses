# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 030-035."""
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

ad('AD 030', 'Media and communication · policy choice',
   ('ask what a rule does to the marginal case, not the obvious one',
    'conditional qualification', 'verification, provenance, takedown, chilling effect',
    'arguing about speech rules without reaching for free-speech slogans'),
   'Dr Oyelowo',
   'Several platforms now label or demote posts that fact-checkers have '
   'rated false. Supporters say this reduces the spread of harmful claims; '
   'critics say it makes private companies arbiters of truth. Should '
   'platforms label content in this way?',
   [('Mina', 'Yes. The alternative is not neutrality, it is amplification '
     'by whatever maximises engagement, which already favours the false. A '
     'label is a mild intervention against a strong existing bias.'),
    ('Petros', 'The strongest cases for labelling are the clearest ones, '
     'and those are not where the system operates. Most contested claims are '
     'uncertain rather than false, and a process built for the obvious case '
     'will be applied to the uncertain one, because that is where the '
     'volume is.')],
   P(['a.  Petros concedes the obvious case. What is his actual argument?',
      'b.  Mina says the alternative is not neutrality. Why does that '
      'matter?'],
     ['a.  What is provenance, and how does it differ from verification?',
      'b.  What is a chilling effect, and who would feel it here?'],
     ['Accept Petros’s point about the marginal case and keep '
      'Mina’s conclusion, in one sentence.']),
   ['Mina is right that the status quo is not neutral, and Petros is right '
    'that the marginal case is where any rule actually lives. Those are '
    'compatible, and together they argue for labelling of a particular kind. '
    'The trouble with a true-or-false label is that it has to resolve '
    'uncertainty in order to apply, so it performs worst exactly where most '
    'of the volume is.',
    'What does not have that problem is provenance. A label that reports '
    'where a claim came from, when it first appeared, and whether the image '
    'is what it purports to be makes no judgement about truth and is '
    'verifiable mechanically. It also happens to address the failure mode '
    'Mina identifies: engagement-driven amplification works best on material '
    'whose origins are obscure. I would label provenance universally and '
    'reserve falsity ratings for the narrow class where the claim is '
    'checkable against a public record — which concedes most of '
    'Petros’s territory while giving up almost nothing Mina wanted, '
    'since she was arguing about spread rather than about adjudication.'],
   F(['a.  The response proposes a different kind of label. Why does that '
      'answer Petros rather than evade him?',
      'b.  The last clause claims Mina loses almost nothing. On what '
      'grounds?'],
     ['a.  "it has to resolve uncertainty in order to apply" — why is '
      'this the decisive sentence?',
      'b.  "which is checkable against a public record" — what does '
      'this phrase do to the scope of the proposal?']),
   ['I think platforms should definitely label false information because '
    'fake news is a very serious danger for our democracies and many people '
    'believe everything they read online without checking. During the '
    'pandemic we saw how dangerous misinformation can be for public health. '
    'Of course Petros is right that it is difficult to decide what is true '
    'and what is false in some cases, but I think it is better to do '
    'something than nothing. The platforms have the money and the technology '
    'to do this properly, and governments should force them to take '
    'responsibility.'],
   [('P1', [['a.  That a system justified by easy cases will inevitably be '
             'applied to hard ones, because the hard ones are the bulk of '
             'the traffic. It is an argument about scope creep, not about '
             'whether lies are bad.'],
            ['b.  Because it denies the critics their implicit baseline. If '
             'doing nothing were neutral, intervention would need a strong '
             'justification; if doing nothing already amplifies falsehood, '
             'the comparison is between two interventions.']]),
    ('P2', [['a.  Provenance is the origin and history of a piece of '
             'content; verification is the determination that a claim is '
             'true. Provenance is largely a matter of record, which is why '
             'it can be automated.'],
            ['b.  Deterrence of legitimate expression by the risk of '
             'sanction. Here it falls on people making uncertain but '
             'reasonable claims, who may self-censor rather than risk a '
             'label.']]),
    ('P3', [['Model: "A truth label has to resolve uncertainty to apply, so '
             'it fails where the volume is — but a provenance label '
             'does not, and that is where most of the spread comes from."']]),
    ('F1', [['a.  Because his objection was precisely about the kind of '
             'judgement the label requires. A label that makes no truth '
             'judgement is not a narrower version of the thing he objected '
             'to; it is a different instrument that his argument does not '
             'reach.'],
            ['b.  Because her case was about amplification, not '
             'adjudication. She wants false material to spread less; if '
             'provenance labelling achieves that, she has her outcome '
             'without needing anyone to rule on truth.']]),
    ('F2', [['a.  Because it identifies the structural reason the system '
             'fails at the margin, rather than merely asserting that it '
             'does. A label must take a side to be applied at all, so '
             'uncertainty is not a case it handles badly — it is a case '
             'it cannot handle.'],
            ['b.  It narrows the surviving falsity label to a class where '
             'Petros’s objection does not apply, and does so by naming '
             'a test rather than a topic — which makes the scope '
             'auditable instead of a matter of judgement.']]),
    ('F3', [['1.  Petros’s argument is acknowledged and then waved '
             'away with "better to do something than nothing", which is the '
             'reasoning his objection was specifically about.'],
            ['2.  Nothing is added: the pandemic example supports a claim '
             'nobody disputed, and "the platforms have the money and the '
             'technology" assumes the problem is resources when the '
             'difficulty identified was epistemic.'],
            ['3.  Language: "our democracies", "the platforms", "the money '
             'and the technology" over-articled; "fake news" is used as '
             'though it were a defined category, which is the very thing at '
             'issue.']])]),

ad('AD 031b', 'Environment · cause ranking',
   ('rank by what each cause predicts about where the effect appears',
    'causal chain with result clauses', 'runoff, abstraction, sewage, catchment',
    'ranking causes when one actor is politically unpopular'),
   'Professor Haugen',
   'Rivers in many countries have deteriorated sharply in ecological '
   'condition. Candidate causes include sewage discharge, agricultural '
   'runoff, and water abstraction for supply. Which is the main driver?',
   [('Dag', 'Sewage. It is the one with a named culprit, a public record of '
     'discharges and a regulator that has been asleep. Everything else is a '
     'diffuse story that lets the responsible party hide.'),
    ('Sara', 'Agriculture, by a distance. Nutrient runoff affects far more '
     'river length than discharge points do, and it does not stop when the '
     'rain does. Sewage is the one people can photograph, which is not the '
     'same as the one doing most of the damage.')],
   P(['a.  Sara makes a claim about why sewage is salient. What is it?',
      'b.  What measurement would settle the ranking?'],
     ['a.  What is a catchment, and what is diffuse pollution?',
      'b.  What is abstraction, and why might it amplify the other two?'],
     ['Rank the causes in one sentence using where in the river each '
      'predicts damage.']),
   ['Sara has the better of the comparison and Dag has the better of the '
    'politics, which is worth separating. The spatial test decides it: '
    'discharge damage is concentrated downstream of outfalls and recovers '
    'with distance, whereas nutrient enrichment appears across whole '
    'catchments including headwaters with no sewage infrastructure at all. '
    'Those headwater sites are the control, and they are in poor condition.',
    'Abstraction I would rank second rather than third, because it is not '
    'really a parallel cause — it is a multiplier. Removing flow '
    'concentrates whatever else is present, with the result that the same '
    'nutrient load produces worse outcomes in a depleted river than in a '
    'full one. That makes it the cheapest lever even though it is not the '
    'largest source. Dag’s point survives in a different form: sewage '
    'is the cause with an identifiable defendant, and in a system where '
    'enforcement follows attribution, the diffuse source will go unaddressed '
    'however large it is. That is an argument about institutions rather than '
    'about rivers, and it is the better version of his case.'],
   F(['a.  The response names a "control". What is it and why does it '
      'decide the question?',
      'b.  It reranks abstraction upward on a different criterion. Which?'],
     ['a.  "with the result that the same nutrient load produces worse '
      'outcomes in a depleted river" — why a result clause?',
      'b.  "Dag’s point survives in a different form" — what does '
      'this sentence do for the response’s structure?']),
   ['I agree with Dag that the water companies are the main responsible for '
    'the pollution of the rivers because they are discharging raw sewage '
    'directly into the water to save money, which is a scandal. They make '
    'enormous profits and pay dividends to their shareholders while the '
    'rivers are dying. Of course agriculture also pollutes with fertilisers '
    'and pesticides, but the farmers are small businesses and they do not '
    'have the same resources. The government must impose much heavier fines '
    'on the water companies and force them to invest in the infrastructure.'],
   [('P1', [['a.  That visibility and photographability drive public '
             'attribution, which is a claim about perception rather than '
             'about ecology — and it explains Dag’s position '
             'without contradicting his facts.'],
            ['b.  River length or site count in poor condition attributable '
             'to each source, and in particular the condition of sites with '
             'no sewage input.']]),
    ('P2', [['a.  A catchment is the whole area draining to a river. Diffuse '
             'pollution enters across that area rather than at a point, '
             'which is what makes it hard to attribute and regulate.'],
            ['b.  Taking water out for supply. It amplifies because the same '
             'quantity of pollutant in less water is a higher '
             'concentration.']]),
    ('P3', [['Model: "Sewage damage is concentrated below outfalls while '
             'nutrient damage appears in headwaters with no sewerage, so '
             'agriculture is the larger driver and abstraction the '
             'multiplier."']]),
    ('F1', [['a.  Headwater sites with no sewage infrastructure. They decide '
             'it because they isolate one cause: if those sites were '
             'healthy, sewage would be doing the work, and they are not.'],
            ['b.  Tractability rather than magnitude — it is the '
             'cheapest lever because changing flow is easier than changing '
             'land use, and because it modifies the effect of everything '
             'else. Ranking by what you can move is a legitimate second '
             'ordering, provided you say that is what you are doing.']]),
    ('F2', [['a.  Because the argument needs the concentration effect to '
             'follow determinately from reduced flow. That is the whole '
             'basis for promoting abstraction to a multiplier, so a looser '
             'connector would weaken the claim the ranking depends on.'],
            ['b.  It closes the response by returning to the classmate who '
             'was ranked second, and rescues his position on different '
             'ground. That is more generous and more interesting than simply '
             'declaring a winner, and it introduces the institutional point '
             'neither had made.']]),
    ('F3', [['1.  It never engages Sara’s spatial argument, which was '
             'the only evidence offered in the discussion.'],
            ['2.  The reasoning is about culpability and resources rather '
             'than about causes: "the farmers are small businesses" is a '
             'reason not to fine them, not a reason they pollute less.'],
            ['3.  Language: "the main responsible" (those mainly '
             'responsible); "the pollution of the rivers", "the '
             'infrastructure", "the government" over-articled; "the rivers '
             'are dying" is rhetoric standing in for the measurement the '
             'question needed.']])]),

ad('AD 032', 'Arts and culture · policy choice',
   ('ask what a restitution rule implies for the cases nobody is arguing '
    'about',
    'conditional qualification', 'provenance, restitution, deaccession, custodianship',
    'arguing about a sensitive claim without caricaturing either side'),
   'Professor Rahimi',
   'Museums in Europe and North America hold large collections acquired '
   'during colonial rule. Some have begun returning items to their countries '
   'of origin; others argue that universal museums serve a purpose that '
   'dispersal would destroy. Should such objects be returned?',
   [('Kemi', 'Yes, as a default. The acquisition was not consensual and the '
     'burden of proof should sit with the holder, not the claimant. '
     '"Universal museum" is a nineteenth-century idea defended mainly by the '
     'institutions that benefit from it.'),
    ('Henrik', 'I accept the principle for documented loot and I am wary of '
     'a general default. Most collections are mixed — purchase, gift, '
     'excavation, seizure — and a rule that returns everything on a '
     'presumption will also move objects whose history is genuinely '
     'ambiguous, with no mechanism for getting it wrong.')],
   P(['a.  How much do Kemi and Henrik actually disagree about?',
      'b.  Henrik raises "no mechanism for getting it wrong". What is he '
      'pointing at?'],
     ['a.  What is provenance research, and what is deaccession?',
      'b.  Distinguish ownership from custodianship.'],
     ['Identify the real point of disagreement in one sentence.']),
   ['They agree about documented loot and disagree about where uncertainty '
    'should fall, which is the whole of the question and the part that '
    'usually goes unargued. Kemi’s burden-of-proof point is the strong '
    'one: an institution that cannot establish how it acquired something has '
    'no good answer to the person whose ancestors made it, and the asymmetry '
    'of records is itself a product of the acquisition. Henrik is right that '
    'collections are mixed, but mixedness is an argument for case-by-case '
    'research, not for a presumption in favour of the holder.',
    'Where his objection has real force is in the irreversibility, and that '
    'is addressable without conceding the presumption. Transfer of title '
    'does not have to mean physical dispersal: a rule that returns ownership '
    'by default while allowing loan arrangements negotiated by the new owner '
    'gets Kemi’s principle and most of Henrik’s universal museum, '
    'and it puts the decision about where an object sits with the party that '
    'has the better claim to make it. The thing that cannot survive is the '
    'current arrangement, in which the institution that benefits from the '
    'ambiguity is also the one that adjudicates it.'],
   F(['a.  The response separates two things usually treated as one. What?',
      'b.  Why is the final sentence more damaging to Henrik than to Kemi?'],
     ['a.  "the asymmetry of records is itself a product of the '
      'acquisition" — what does this claim do to Henrik’s '
      'position?',
      'b.  "mixedness is an argument for case-by-case research, not for a '
      'presumption" — name the structure.']),
   ['I think that the museums should return all these objects to their '
    'countries of origin because they were stolen during the colonial period '
    'and they belong to the people who created them. It is not acceptable '
    'that European museums are full of treasures taken from Africa and Asia '
    'while the countries of origin have nothing. Henrik says that some '
    'objects were bought legally but at that time the power relation was '
    'completely unequal so these purchases were not really free. The '
    'museums should be ashamed and return everything as soon as possible.'],
   [('P1', [['a.  Less than the debate suggests. Both accept return for '
             'documented loot; the dispute is about the default where the '
             'record is incomplete.'],
            ['b.  Irreversibility. A wrongly returned object cannot easily '
             'be recovered, and unlike a wrongly retained one there is no '
             'continuing institution to press the claim against.']]),
    ('P2', [['a.  Provenance research traces an object’s chain of '
             'ownership; deaccession is the formal removal of an item from a '
             'collection, which most museums are legally restricted in '
             'doing.'],
            ['b.  Ownership is title; custodianship is care and possession '
             'without title. The distinction is what makes the '
             'response’s proposal possible.']]),
    ('P3', [['Model: "They agree about documented loot, so the question is '
             'only who bears the burden where the record is incomplete."']]),
    ('F1', [['a.  Ownership from location. The debate is conducted as though '
             'returning title meant moving the object, and separating them '
             'dissolves most of the conflict.'],
            ['b.  Because his position depends on the holder retaining the '
             'benefit of the doubt, and the sentence identifies that the '
             'holder is also the adjudicator — a conflict of interest '
             'that no appeal to curatorial expertise answers. Kemi’s '
             'position does not rest on anyone adjudicating their own case.']]),
    ('F2', [['a.  It turns his evidential difficulty into evidence against '
             'him: the records are poor because of how the objects were '
             'taken, so incompleteness cannot be a reason to favour the '
             'taker. It converts a practical obstacle into a moral '
             'argument.'],
            ['b.  A "not ... but" correlative, used to accept a premise and '
             'deny the inference. It is the same move as AD 001 and AD 011 '
             '— granting the fact and disputing what follows is the '
             'most reusable single structure in this task.']]),
    ('F3', [['1.  It argues past Henrik rather than with him: he explicitly '
             'accepts return for documented loot, so "they were stolen" '
             'addresses a position nobody holds.'],
            ['2.  The one engagement — that unequal power invalidates '
             'purchase — is a serious argument stated and then '
             'abandoned without development.'],
            ['3.  "The museums should be ashamed" is moralising rather than '
             'argument, and "return everything as soon as possible" ignores '
             'the ambiguity the discussion was about. Language: "the '
             'countries of origin", "the colonial period", "the power '
             'relation" over-articled.']])]),

ad('AD 033', 'Psychology and society · value trade-off',
   ('ask which good is recoverable if you choose wrongly',
    'comparative of importance', 'autonomy, paternalism, nudge, informed consent',
    'arguing about paternalism without insulting either side'),
   'Dr Almeida',
   'Policies that automatically enrol people in pension schemes, organ '
   'donation registers or default savings plans raise participation '
   'dramatically. Critics call them manipulation; defenders call them '
   'sensible defaults. Which matters more here — the outcome, or the '
   'quality of the choice?',
   [('Juno', 'The outcome. Every option set has a default; there is no '
     'neutral arrangement. Choosing a default that benefits most people is '
     'not manipulation, it is the unavoidable exercise of a choice someone '
     'has to make.'),
    ('Theo', 'That argument proves too much. It would justify any default '
     'anyone thought beneficial, and the test of "benefits most people" is '
     'applied by the same body that sets it. The quality of the choice '
     'matters because it is the only check on whoever is choosing for us.')],
   P(['a.  Theo says Juno’s argument "proves too much". What does that '
      'phrase mean?',
      'b.  Does Juno’s point about neutrality survive his objection?'],
     ['a.  What is a nudge, and how is it distinguished from a mandate?',
      'b.  What does informed consent require that a default does not?'],
     ['State the distinction that saves Juno’s point from Theo’s '
      'objection, in one sentence.']),
   ['Juno is right that there is no neutral default and Theo is right that '
    'the argument does not stop where she wants it to. What rescues her '
    'position is not the benefit of the default but the cost of leaving it: '
    'automatic enrolment in a pension is reversible in a form, while an '
    'automatic organ donation register is not reversible by anyone who did '
    'not notice they were on it. Those are not the same kind of policy '
    'merely because both are defaults.',
    'So the trade-off is not outcome against choice-quality in general. It '
    'is whether a wrong default can be cheaply undone by the person it was '
    'wrong for. Where exit is one form and no stigma, Juno’s argument '
    'is close to decisive and Theo’s check is the exit itself. Where '
    'exit is costly, socially marked or impossible — which is true of '
    'rather more defaults than their designers admit — the default is '
    'functioning as a mandate and should be argued for as one. That would '
    'rule out several schemes currently defended by exactly the argument '
    'Juno is making.'],
   F(['a.  The response substitutes one criterion for another. What for '
      'what?',
      'b.  Why does it end by saying the test would rule several schemes '
      'out?'],
     ['a.  "not the benefit of the default but the cost of leaving it" '
      '— name the structure and its function.',
      'b.  "which is true of rather more defaults than their designers '
      'admit" — what is the function of this aside?']),
   ['In my opinion this is a question of balance between efficiency and '
    'freedom. It is true that automatic enrolment increases participation a '
    'lot and that many people are too lazy or too busy to make these '
    'decisions themselves, so the default helps them. But on the other hand '
    'people must be free to decide about their own life and their own body, '
    'especially in the case of organ donation which is a very personal '
    'decision. I think the best solution is to have defaults but also to '
    'inform people very clearly about their options so they can choose '
    'consciously if they want.'],
   [('P1', [['a.  That the argument, if valid, would also justify '
             'conclusions its author would reject — so something in it '
             'is too broad.'],
            ['b.  Yes. The non-existence of a neutral default is simply '
             'true. What fails is the move from there to "therefore choose '
             'the beneficial one", which needs a further premise about who '
             'decides and how it is checked.']]),
    ('P2', [['a.  A nudge changes the architecture of a choice without '
             'removing options; a mandate removes them. The response argues '
             'that some nudges are mandates in practice.'],
            ['b.  That the person knows they are choosing, understands the '
             'alternatives, and acts. A default requires none of these and '
             'often works precisely because they are absent.']]),
    ('P3', [['Model: "The defence works where exit is cheap and fails where '
             'it is not, which is a distinction between defaults rather '
             'than between outcome and autonomy."']]),
    ('F1', [['a.  Benefit of the default, replaced by reversibility of the '
             'error. The first requires someone to adjudicate what is good '
             'for people, which is Theo’s objection; the second is a '
             'property of the scheme that can be assessed without that '
             'judgement.'],
            ['b.  Because a criterion that endorses everything currently '
             'done is not a criterion. Showing that it bites — that it '
             'rules things out — is what demonstrates it is doing work '
             'rather than rationalising.']]),
    ('F2', [['a.  A "not ... but" correlative. It replaces the criterion in '
             'a single sentence, with the rejected one named so the reader '
             'can see exactly what has been swapped.'],
            ['b.  It converts the distinction from a philosophical one into '
             'a practical accusation, and it does so in a subordinate clause '
             'so the claim is made without having to be defended at '
             'length — efficient, and worth noticing when it is done to '
             'you.']]),
    ('F3', [['1.  It restates the two positions as "efficiency versus '
             'freedom" and proposes informing people, which is Juno’s '
             'position with a leaflet attached and does not engage Theo’s '
             'point about who checks the chooser.'],
            ['2.  "Too lazy or too busy" is a judgement about the people the '
             'policy affects, offered as though it were an argument for the '
             'policy.'],
            ['3.  Language: "their own life and their own body" (lives, '
             'bodies), "choose consciously" (make an informed choice), and '
             '"a question of balance" announces a conclusion the response '
             'never reaches.']])]),

ad('AD 034', 'Health and medicine · agree or disagree with a claim',
   ('separate what a study measured from what it is cited for',
    'hedged generalisation', 'surrogate endpoint, relative risk, absolute risk, power',
    'questioning a headline finding without rejecting the science'),
   'Professor Ikeda',
   'Reports regularly announce that a particular food or habit raises the '
   'risk of a disease by some percentage. Critics say these findings are '
   'routinely overstated. How should we read them?',
   [('Clara', 'Sceptically, but not dismissively. Most are observational, '
     'the effect sizes are small, and the reported figure is almost always '
     'relative risk, which sounds enormous when the underlying risk is '
     'tiny.'),
    ('Diego', 'I would go further. The problem is not the studies, which '
     'usually state their limits, but the chain between the paper and the '
     'headline. Each step is individually reasonable and the output is '
     'routinely false.')],
   P(['a.  Clara blames the statistics and Diego the transmission. Are they '
      'incompatible?',
      'b.  What would improve the situation on each diagnosis?'],
     ['a.  Distinguish relative risk from absolute risk with an example.',
      'b.  What is a surrogate endpoint, and why is it a risk?'],
     ['State what the reader should actually do with such a report, in one '
      'sentence.']),
   ['Clara and Diego are describing two links in the same chain, and I think '
    'Diego has identified the one that breaks. Relative risk is not a '
    'distortion in the paper — it is the right measure for a question '
    'about mechanism, and the absolute figures are usually in the tables. '
    'What happens is that each handover drops a qualifier: the paper says '
    'association, the press release says linked to, the headline says '
    'causes, and nobody along the way has said anything they would have to '
    'retract.',
    'That diagnosis has a practical upshot, which is what makes it worth '
    'preferring. If the problem were statistical naivety, the remedy would '
    'be educating readers, which has been tried for thirty years. If the '
    'problem is a chain in which each step is locally defensible, the remedy '
    'is structural: require the absolute risk in the press release, which is '
    'the single point where the number is still attached to the people who '
    'calculated it. I would add only that this tends to understate how much '
    'the original choice of question matters — a study powered to '
    'detect a small effect in a large cohort will find one, and finding one '
    'is what makes it publishable at all.'],
   F(['a.  The response prefers one diagnosis for a reason other than truth. '
      'What reason?',
      'b.  The final sentence adds a third problem. What is it, and why is '
      'it placed last?'],
     ['a.  "the paper says association, the press release says linked to, '
      'the headline says causes" — what does the bare sequence achieve?',
      'b.  "nobody along the way has said anything they would have to '
      'retract" — why is this the most damning clause in the '
      'paragraph?']),
   ['I agree with Clara that we should be sceptical about these studies '
    'because the media always exaggerate to get more clicks and attention. '
    'One day they say coffee is good for you and the next day they say it '
    'causes cancer, so people do not know what to believe anymore. Also many '
    'studies are financed by the food industry which has an interest in the '
    'results. In my opinion people should use common sense and follow a '
    'balanced diet instead of worrying about every new study that comes out '
    'in the newspapers.'],
   [('P1', [['a.  No — they are consecutive. Clara describes a property '
             'of the measure, Diego a property of its transmission, and both '
             'are true.'],
            ['b.  On Clara’s, statistical literacy among readers. On '
             'Diego’s, an intervention at a specific handover point. '
             'The second is far more tractable, which is the '
             'response’s argument.']]),
    ('P2', [['a.  If risk rises from 2 in 10,000 to 3 in 10,000, the '
             'relative risk is 50 per cent and the absolute increase is 1 in '
             '10,000. Both are true; only one belongs in a headline.'],
            ['b.  A measurable stand-in for the outcome you care about '
             '— cholesterol for heart attacks, tumour shrinkage for '
             'survival. It is a risk because interventions can move the '
             'surrogate without moving the outcome.']]),
    ('P3', [['Model: "Find the absolute risk before reacting to the '
             'percentage, and check whether the study claims association or '
             'causation."']]),
    ('F1', [['a.  Tractability. Both diagnoses may be correct, but one '
             'yields an intervention at a single identifiable point and the '
             'other yields a thirty-year education programme that has '
             'already been tried. Preferring the actionable diagnosis is '
             'legitimate provided you say that is the criterion.'],
            ['b.  Publication incentives — that the choice of question '
             'and the power of the study make a positive finding near '
             'certain. It goes last because it undermines the proposed '
             'remedy as well as the problem, and acknowledging that is more '
             'honest than closing on a tidy fix.']]),
    ('F2', [['a.  It enacts the drift it describes. Three clauses, three '
             'verbs, each a small step from the last, so the reader '
             'experiences the slide rather than being told about it.'],
            ['b.  Because it rules out the comforting explanation. If '
             'nobody lied, the failure is in the structure rather than in '
             'anyone’s conduct — which means it will recur '
             'indefinitely unless the structure changes, and no amount of '
             'good faith prevents it.']]),
    ('F3', [['1.  Diego’s argument about the chain is never engaged; '
             '"the media always exaggerate" is a cruder version of it '
             'attributed to bad motive rather than structure.'],
            ['2.  Industry funding is introduced as a third factor without '
             'evidence and without connection to the two positions on the '
             'table.'],
            ['3.  "Use common sense and follow a balanced diet" abandons the '
             'question, which was how to read such reports. Language: "the '
             'media", "the food industry", "the newspapers" over-articled; '
             '"anymore" should be "any more".']])]),

ad('AD 035', 'Urban planning and transport · cause ranking',
   ('rank causes by which one the others depend on',
    'cleft for emphasis', 'severance, modal shift, catchment, desire line',
    'ranking causes where the obvious one is a symptom'),
   'Professor Lindqvist',
   'Cycling rates differ enormously between cities that are otherwise '
   'similar in size, income and climate. Proposed explanations include '
   'infrastructure, topography and cultural attitudes to cycling. Which '
   'explains most of the variation?',
   [('Lars', 'Infrastructure, and it is not close. Where there is a '
     'connected network of protected lanes, people cycle; where there is '
     'not, they do not, regardless of what they say they would like.'),
    ('Yuki', 'Culture is doing more work than that allows. Two cities can '
     'build the same lanes and get different results, because whether '
     'cycling is seen as normal or as something for a particular kind of '
     'person determines who will use them.')],
   P(['a.  Yuki concedes that infrastructure matters. What is her actual '
      'claim?',
      'b.  Which position is harder to act on, and does that make it less '
      'likely to be true?'],
     ['a.  What is modal shift, and what is a desire line?',
      'b.  What is severance, and why does it matter for networks?'],
     ['Rank the causes in one sentence using which depends on which.']),
   ['Lars is right and Yuki has identified the thing that makes his claim '
    'look weaker than it is. The cities that built lanes and saw little '
    'change mostly built disconnected ones — a protected lane that ends '
    'at a roundabout is not infrastructure in the relevant sense, because '
    'the whole journey has to be rideable for any of it to be used. It is '
    'network completeness, not lane kilometres, that predicts the outcome, '
    'and the apparent cultural residual largely disappears when you measure '
    'the right thing.',
    'That does not dispose of culture, but it relocates it. Attitudes look '
    'like a cause and behave like a lagging indicator: the cities now '
    'described as having a cycling culture mostly acquired it in the twenty '
    'years after they built the network, not before. If culture were the '
    'driver, the sequence would run the other way, and in the well '
    'documented cases it does not. So I would rank network completeness '
    'first, topography second — real, and the one genuinely exogenous '
    'constraint — and culture third, as something largely produced by '
    'the first and worth measuring as an outcome rather than an input.'],
   F(['a.  The response reinterprets the evidence Yuki relies on. How?',
      'b.  Why does it call topography "the one genuinely exogenous '
      'constraint"?'],
     ['a.  "It is network completeness, not lane kilometres, that predicts '
      'the outcome" — name the device and say why it is needed.',
      'b.  "behave like a lagging indicator" — what does the phrase '
      'claim, and what evidence would refute it?']),
   ['I think all three factors are important and they influence each other. '
    'Obviously you need good infrastructure because people will not cycle if '
    'it is dangerous, but you also need the right mentality because in some '
    'countries people think that cycling is only for poor people or for '
    'sport. The topography is also a factor because nobody wants to climb a '
    'big hill every day to go to work. So cities should build cycle lanes '
    'and at the same time make campaigns to promote cycling as a healthy and '
    'ecological way of transport, and then more people will use the bicycle.'],
   [('P1', [['a.  That the same infrastructure produces different results '
             'depending on social meaning — so infrastructure is '
             'necessary but not sufficient.'],
            ['b.  Culture is harder to act on. That has no bearing on '
             'whether it is true, and treating tractability as evidence is a '
             'common and invisible error — though it is a legitimate '
             'reason to prefer one policy over another once the causal '
             'question is settled.']]),
    ('P2', [['a.  Modal shift is movement of journeys from one mode to '
             'another. A desire line is the route people would take if '
             'unobstructed, which is why networks that ignore them go '
             'unused.'],
            ['b.  Severance is a barrier cutting a route in two. It matters '
             'because a single severance can make an otherwise complete '
             'network useless for the journeys that cross it.']]),
    ('P3', [['Model: "Network completeness explains most of the variation, '
             'topography constrains it, and culture mostly follows the '
             'network rather than preceding it."']]),
    ('F1', [['a.  By reinterpreting her counter-examples. The cities that '
             'built lanes without result were building disconnected '
             'segments, so they are not cases of the same infrastructure '
             'producing different outcomes — they are cases of '
             'different infrastructure.'],
            ['b.  Because it is the only one of the three that policy cannot '
             'alter. Infrastructure is built and culture is downstream of '
             'it, but hills are given — which makes topography the only '
             'genuine independent variable and worth separating from the '
             'others.']]),
    ('F2', [['a.  An it-cleft (family 8, structure 59). It is needed because '
             'the sentence is correcting a measure rather than stating a '
             'fact: the contrast between completeness and kilometres is the '
             'content, and the cleft puts both terms in opposition where a '
             'plain sentence would bury one.'],
            ['b.  That attitudes change after the behaviour rather than '
             'causing it. It would be refuted by well documented cases where '
             'a measured shift in attitudes preceded both the network and '
             'the rise in cycling — which is exactly the evidence the '
             'response says is absent.']]),
    ('F3', [['1.  It refuses to rank, which was the question.'],
            ['2.  The classmates are not engaged: Yuki’s point about '
             'the same lanes producing different results, which is the only '
             'real argument on the table, is replaced by a generic remark '
             'about mentality.'],
            ['3.  The recommendation — build lanes and run campaigns '
             '— follows from no analysis, and the response never asks '
             'whether campaigns work. Language: "the topography", "the '
             'bicycle", "way of transport" (means of transport), "make '
             'campaigns" (run campaigns).']])]),
]
