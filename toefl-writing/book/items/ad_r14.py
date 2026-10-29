# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 085-090."""
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

ad('AD 085', 'Archaeology · agree / disagree',
   ('argue from what the evidence could not show',
    'modal speculation about the past', 'assemblage, stratigraphy, taphonomy, inference',
    'reasoning about absent evidence'),
   'Dr Whitfield',
   'Excavations of a settlement show no weapons and no defensive walls, '
   'and some archaeologists have described it as a peaceful society. '
   'Others argue that absence of evidence is being read as evidence of '
   'absence. How should such a claim be assessed?',
   [('Nils', 'The inference is reasonable. If a society fought, you would '
     'expect fortification and weapon deposits somewhere in two hundred '
     'years of occupation.'),
    ('Priya', 'You would expect them to survive, which is a different '
     'claim. Wooden palisades and wooden spears leave almost nothing. The '
     'site may be telling us about its soil chemistry, not its '
     'politics.')],
   P(['a.  Priya is making a taphonomic objection. State it precisely.',
      'b.  What would strengthen Nils’s inference without finding '
      'anything new?'],
     ['a.  What is an assemblage, and what is stratigraphy?',
      'b.  What does taphonomy study?'],
     ['State your position in one sentence about what the absence can '
      'support.']),
   ['Priya is right about the logic and Nils’s inference can be '
    'rescued, but only by adding something his argument currently '
    'assumes.',
    'The objection is not that the site was violent. It is that '
    'preservation is selective, so an empty category may record the '
    'burial conditions rather than the behaviour. Acidic soil destroys '
    'wood and bone within centuries, and in such a deposit the absence of '
    'wooden weapons is exactly what we would see whether or not they '
    'existed.',
    'What would repair the inference is a control. If the same deposits '
    'preserved wooden structures, textiles or unburnt bone from other '
    'contexts, then the absence of weapons becomes informative, because '
    'we know the soil would have kept them. Without that comparison '
    'Nils’s "you would expect" is doing work the evidence has not '
    'earned.',
    'So the claim should be assessed as conditional rather than refuted. '
    'The site may well have been unusually peaceful; the excavation as '
    'reported cannot distinguish that from a site whose weapons rotted. '
    'Stating which preservation conditions obtained would settle it, and '
    'that this was not reported is itself worth noticing.'],
   F(['a.  The response neither accepts nor rejects the original claim. '
      'Is that a position?',
      'b.  Why does it propose a control rather than more excavation?'],
     ['a.  "the absence of wooden weapons is exactly what we would see '
      'whether or not they existed" — why the modal?',
      'b.  "that this was not reported is itself worth noticing" — '
      'what is being implied?']),
   ['I think we should be very careful about saying that a society was '
    'peaceful just because we have not found weapons, because absence of '
    'evidence is not evidence of absence as Priya says. Archaeology '
    'always involves a lot of interpretation and we can never really know '
    'what ancient people were like. Many assumptions about the past have '
    'turned out to be wrong because archaeologists projected their own '
    'ideas onto the evidence. We should keep an open mind about this '
    'site.'],
   [('P1', [['a.  That the processes which form and preserve a deposit '
             'filter what survives, so an absence in the record may '
             'reflect preservation rather than past behaviour.'],
            ['b.  Evidence that the deposits preserve comparable organic '
             'material in other categories, which would show that weapons '
             'would have survived had they been there.']]),
    ('P2', [['a.  An assemblage is the set of artefacts recovered from a '
             'context; stratigraphy is the layered sequence of deposits '
             'and what it shows about order in time.'],
            ['b.  How remains are deposited, altered and destroyed between '
             'death or discard and excavation — the study of what the '
             'record has already filtered out.']]),
    ('P3', [['Model: "The absence supports the claim only if the deposits '
             'are shown to preserve comparable organic material."']]),
    ('F1', [['a.  Yes — it is a position about what the evidence can '
             'support, which is what the prompt asks for. Declining to '
             'rule on whether the society was peaceful is the correct '
             'answer when the data cannot distinguish the two '
             'possibilities.'],
            ['b.  Because the problem is not a shortage of finds but an '
             'untested assumption about preservation, and that assumption '
             'can be checked against material already excavated. More '
             'digging in the same soil would reproduce the same '
             'absence.']]),
    ('F2', [['a.  Because the claim is about what the evidence would look '
             'like under a hypothesis, not about what happened. The modal '
             'keeps the sentence in the space of possible records, which '
             'is where the whole objection lives.'],
            ['b.  That the original interpretation did not consider the '
             'taphonomic question at all. The omission is evidence about '
             'the argument’s quality rather than about the site, and '
             'saying so is a stronger criticism than disputing the '
             'conclusion.']]),
    ('F3', [['1.  It repeats Priya’s slogan without explaining the '
             'mechanism, so nothing is added to the discussion.'],
            ['2.  "We can never really know what ancient people were like" '
             'is a general scepticism that would defeat any archaeological '
             'claim, including the one it is defending.'],
            ['3.  No control, no preservation conditions, no account of '
             'what would make the absence informative — so the '
             'response offers no way to assess the claim, which is what was '
             'asked.']])]),

ad('AD 086', 'Nutrition · policy choice',
   ('choose the intervention that does not depend on attention',
    'passive causatives', 'reformulation, labelling, salience, compliance',
    'choosing between information and product change'),
   'Professor Oyelaran',
   'To reduce dietary salt intake, governments can require clear '
   'front-of-pack labelling, leaving the choice to consumers, or set '
   'mandatory limits that require manufacturers to reformulate products. '
   'Which approach should be preferred?',
   [('Hana', 'Labelling. People have a right to choose what they eat, and '
     'a government that quietly changes recipes is making that decision '
     'for them.'),
    ('Luis', 'Nobody chooses the salt in bread. Reformulation worked in '
     'the UK because it required nothing of anyone — intake fell in '
     'people who never read a label in their lives.')],
   P(['a.  Hana’s objection is about autonomy. Does reformulation '
      'actually restrict choice?',
      'b.  Why does an intervention that "requires nothing of anyone" '
      'tend to work better?'],
     ['a.  What is reformulation, and what is salience?',
      'b.  What does compliance mean in a regulatory sense?'],
     ['Choose in one sentence that answers the autonomy objection '
      'directly.']),
   ['Luis is right, and Hana’s objection applies less to '
    'reformulation than it first appears.',
    'The autonomy argument needs the salt to be chosen, and mostly it is '
    'not. Salt in bread, sauces and processed meat is a manufacturing '
    'decision made before the shopper arrives, and a gradual limit '
    'changes what is on offer rather than what anyone is permitted to '
    'buy. Nobody is prevented from salting their food; the discretionary '
    'salt cellar is untouched, and it accounts for a small share of '
    'intake.',
    'What settles it is distribution. Labelling works for people who '
    'read labels, and those are disproportionately the people already '
    'eating least salt, so an information policy widens the gap it is '
    'meant to close. Reformulation reaches everyone, including the people '
    'with the highest intake and the least time to be careful.',
    'So I would reformulate, with labelling alongside rather than '
    'instead. Hana’s principle is better served by having '
    'the limits set openly and the reductions published than by leaving '
    'them to be chosen in a shop, where almost nobody has the '
    'information to choose with.'],
   F(['a.  The response argues that reformulation does not restrict '
      'choice. Is that the strongest reply to Hana?',
      'b.  Why is the distributional point described as what settles it?'],
     ['a.  "having the limits set openly and the reductions published" '
      '— what does the causative construction do?',
      'b.  "where almost nobody has the information to choose with" '
      '— why end on this?']),
   ['I agree with Luis that reformulation is more effective because most '
    'people do not have time to read labels when they are shopping, and '
    'even if they do, the information is often confusing. Salt causes high '
    'blood pressure which leads to heart disease and strokes, so this is a '
    'serious public health issue that governments have a duty to address. '
    'Hana talks about freedom of choice but public health must take '
    'priority over individual preferences in cases like this.'],
   [('P1', [['a.  Barely. It changes the composition of products on sale '
             'but forbids nothing, and discretionary salt remains '
             'available. Her objection assumes the salt in processed food '
             'is a consumer choice, which it mostly is not.'],
            ['b.  Because it does not depend on attention, literacy, time '
             'or motivation, all of which are unevenly distributed and '
             'scarce exactly where intake is highest.']]),
    ('P2', [['a.  Reformulation is changing a product’s recipe to '
             'meet a standard; salience is how noticeable information is '
             'at the moment of choice.'],
            ['b.  Whether regulated parties actually meet the requirement '
             '— which for a gradual limit is far easier to monitor '
             'than consumer behaviour.']]),
    ('P3', [['Model: "Reformulate, because the salt in question was never '
             'chosen by the person eating it."']]),
    ('F1', [['a.  Yes, because it attacks the premise rather than '
             'outweighing it. Arguing that health beats autonomy concedes '
             'that autonomy is being overridden; showing that it is barely '
             'engaged leaves her objection with nothing to attach to.'],
            ['b.  Because both policies have some effect, so effectiveness '
             'alone would be a matter of degree. The fact that labelling '
             'helps the already-healthy and widens inequality is a '
             'difference in kind, and it is decisive for a population '
             'measure.']]),
    ('F2', [['a.  It keeps the focus on the arrangement rather than on the '
             'agent, which suits a sentence about transparency: what '
             'matters is that limits are open and reductions published, '
             'not who publishes them.'],
            ['b.  It returns the autonomy argument to Hana’s own '
             'terms and shows the shop to be the place where choice is '
             'least informed. That is a stronger ending than restating '
             'the health case.']]),
    ('F3', [['1.  "Public health must take priority over individual '
             'preferences" concedes that autonomy is being overridden, '
             'which gives Hana her argument back.'],
            ['2.  The reason reformulation works — that it reaches '
             'people who never engage with the information — is '
             'stated only as "people do not have time to read labels", '
             'with nothing about distribution.'],
            ['3.  The paragraph on salt and blood pressure answers a '
             'question nobody asked; neither speaker disputed that salt '
             'intake should fall.']])]),

ad('AD 087', 'Film studies · value trade-off',
   ('weigh fidelity against what the medium can do',
    'inversion after so', 'adaptation, source text, register, compression',
    'weighing fidelity against transformation'),
   'Dr Haddad',
   'Adaptations of novels are routinely criticised for departing from the '
   'book. Some argue fidelity is the proper standard, since the source is '
   'what audiences value. Others argue an adaptation that merely '
   'illustrates a novel has failed as a film. Which standard should '
   'apply?',
   [('Bea', 'Fidelity, within reason. If you remove the ending, you have '
     'made a different story and attached a title that sells tickets.'),
    ('Tom', 'Every adaptation removes something — two hours against '
     'four hundred pages. The question is not what was cut but whether '
     'what replaced it does the same work.')],
   P(['a.  Tom reframes the question. What is his new criterion?',
      'b.  Why is compression not merely a practical problem?'],
     ['a.  What is a source text, and what is register?',
      'b.  What does compression mean in adaptation?'],
     ['State your position in one sentence that names the standard you '
      'would apply.']),
   ['Tom has the better standard and Bea has identified the case where '
    'it fails, which is narrower than she thinks.',
    'The fidelity standard cannot be applied consistently. Every '
    'adaptation cuts, and nobody counts the cuts; what people call '
    'infidelity is almost always a change they disliked rather than a '
    'measurable distance from the text. So rarely is the complaint '
    'actually about quantity that the standard is doing no work.',
    'Tom’s criterion is better because it asks what a change '
    'achieves. A novel can give you a character’s interior '
    'monologue; a film cannot, so it must externalise that through '
    'gesture, framing or invented action. Judged by fidelity those '
    'inventions are departures. Judged by function they are translations, '
    'and the adaptation that refuses them produces the illustrated novel '
    'nobody wants.',
    'Bea is right about one case, though: where a change removes what the '
    'source was for. An ending that reverses the book’s judgement of '
    'its own events is not a translation but a different claim, and '
    'borrowing the title is then a form of trading on something you have '
    'declined to deliver. That is a narrow exception rather than a '
    'standard.'],
   F(['a.  The response adopts Tom’s standard and preserves '
      'Bea’s objection as an exception. Why is that stronger than '
      'rejecting her?',
      'b.  Why is the interior monologue example chosen?'],
     ['a.  "So rarely is the complaint actually about quantity that the '
      'standard is doing no work" — identify the inversion and say '
      'what it does.',
      'b.  "trading on something you have declined to deliver" — '
      'what kind of objection is this?']),
   ['In my opinion adaptations should be faithful to the original book '
    'because the author created that story and it is disrespectful to '
    'change it. I have often been disappointed when I read a book and then '
    'watched the film, because the characters were different from how I '
    'imagined them and important scenes were missing. Tom says films have '
    'less time but directors could make longer films or television series '
    'if they needed more space. Books are usually better than films '
    'anyway.'],
   [('P1', [['a.  Whether what replaces the cut material performs the same '
             'function in the new medium, rather than how much was '
             'retained.'],
            ['b.  Because what must be cut is not evenly distributed. '
             'Interiority, duration and narrative voice are the hardest '
             'things to carry over, so compression forces transformation '
             'rather than mere shortening.']]),
    ('P2', [['a.  The source text is the work being adapted; register is '
             'the level and tone of language appropriate to a '
             'situation.'],
            ['b.  Condensing the source so that fewer elements carry more '
             'of the work — which usually requires inventing material '
             'rather than only removing it.']]),
    ('P3', [['Model: "Judge an adaptation by whether its inventions do the '
             'work of what they replaced, not by how much survives."']]),
    ('F1', [['a.  Because her case is real and a standard that cannot '
             'accommodate it looks evasive. Isolating it as a narrow '
             'exception concedes the strongest example while denying it '
             'the status of a general rule.'],
            ['b.  Because it is the clearest case where fidelity and '
             'function pull apart. Reproducing the monologue faithfully '
             'is impossible, so any solution is technically unfaithful '
             '— which shows fidelity cannot be the operative '
             'standard.']]),
    ('F2', [['a.  "So rarely is the complaint ..." fronts the degree '
             'adverb and inverts subject and auxiliary. It raises the '
             'register at the point of the strongest claim and places the '
             'emphasis on the rarity, which is what the argument turns '
             'on.'],
            ['b.  An objection about honesty rather than about art. It '
             'concedes that the film may be good and locates the fault in '
             'the use of the title, which is exactly the narrow version of '
             'Bea’s complaint that survives.']]),
    ('F3', [['1.  "Directors could make longer films or television series" '
             'does not answer Tom’s point, which is about the '
             'different things the two media can do, not about '
             'duration.'],
            ['2.  The argument is entirely personal — characters '
             'differing from how the writer imagined them is not a '
             'standard anyone could apply.'],
            ['3.  "Books are usually better than films anyway" is '
             'irrelevant to the question of how an adaptation should be '
             'judged, and "disrespectful to change it" assumes the '
             'conclusion.']])]),

ad('AD 088', 'Demography · cause ranking',
   ('rank causes by which one others depend on',
    'cleft with what', 'fertility, cohort, opportunity cost, provision',
    'ranking causes of a demographic change'),
   'Professor Ikeda',
   'Birth rates have fallen well below replacement in many high-income '
   'countries. Explanations include the cost of housing, the career cost '
   'of childbearing for women, and changing values around family size. '
   'Which explains most of the decline?',
   [('Mei', 'Housing. People have children when they have room for them, '
     'and in every expensive city the first birth is being postponed into '
     'the thirties.'),
    ('Jonas', 'Rates fell in countries with cheap housing too. What '
     'changed everywhere is what a woman gives up by having a child '
     'early — and that is a labour-market fact, not a housing '
     'one.')],
   P(['a.  Jonas uses a variation argument. What is it?',
      'b.  Why is "changing values" difficult to rank as a cause?'],
     ['a.  What is opportunity cost, and what is a cohort?',
      'b.  Distinguish postponement from a fall in completed fertility.'],
     ['Rank the three in one sentence using a mechanism.']),
   ['Jonas has the primary cause and Mei has correctly described how it '
    'operates in one kind of economy.',
    'What has changed everywhere is the opportunity cost. A woman '
    'interrupting a career at twenty-eight loses earnings and seniority '
    'that do not return, and that penalty has grown precisely because '
    'women’s labour-market participation and qualifications have '
    'risen. Housing cannot explain the decline in countries where housing '
    'is cheap; the career penalty exists in all of them.',
    'Mei’s evidence is still doing work, though not as a rival '
    'cause. Expensive housing raises the cost of the space a child '
    'requires and therefore sharpens the same calculation, which is why '
    'the effect is strongest in exactly the cities she names. It is an '
    'amplifier rather than an engine.',
    'Values I would put third, because the direction of causation is '
    'unclear. Preferences about family size shift alongside the '
    'constraints rather than ahead of them, and surveys consistently '
    'find desired fertility well above achieved fertility — which is '
    'evidence that people are not getting what they want rather than '
    'wanting something different. So: opportunity cost first, housing '
    'second as amplifier, values third.'],
   F(['a.  Mei’s cause is demoted but not discarded. What role does '
      'it keep?',
      'b.  Why does the gap between desired and achieved fertility rank '
      'values last?'],
     ['a.  "What has changed everywhere is the opportunity cost" — '
      'identify the structure and say what it does.',
      'b.  "an amplifier rather than an engine" — why this '
      'metaphor?']),
   ['I think the main reason is economic because young people today cannot '
    'afford to have children. Housing is extremely expensive, wages have '
    'not increased, and childcare costs are very high in most countries. '
    'Jonas mentions careers but women should not have to choose between '
    'work and family, and governments should provide better maternity '
    'leave and free childcare. Values have also changed because young '
    'people today want to travel and enjoy their freedom before settling '
    'down.'],
   [('P1', [['a.  That the outcome fell in places where his '
             'opponent’s cause was absent, so that cause cannot '
             'account for the general pattern.'],
            ['b.  Because values move together with the constraints that '
             'shape them, so it is hard to show they are causing the '
             'change rather than registering it.']]),
    ('P2', [['a.  Opportunity cost is the value of the best alternative '
             'given up; a cohort is a group sharing a defining event, '
             'here a birth year.'],
            ['b.  Postponement shifts births later and may leave the final '
             'number unchanged; a fall in completed fertility means fewer '
             'children per woman by the end of her reproductive life. The '
             'two look identical for years.']]),
    ('P3', [['Model: "Career cost first because it is present everywhere '
             'rates fell, housing second as an amplifier, values third '
             'because they follow the constraints."']]),
    ('F1', [['a.  It explains the geography of the effect. Housing does '
             'not account for the decline as such, but it explains why '
             'the decline is sharpest in particular cities, which is real '
             'explanatory work at a smaller scale.'],
            ['b.  Because if people wanted fewer children, achieved '
             'fertility would match stated preferences. A persistent gap '
             'indicates constraint rather than preference, which places '
             'values downstream.']]),
    ('F2', [['a.  A what-cleft. It puts the writer’s candidate in '
             'focus position while implicitly contrasting it with the '
             'causes that did not change everywhere, so the ranking and '
             'its justification arrive in one sentence.'],
            ['b.  Because it states the relationship precisely in two '
             'words: housing increases the size of an effect it did not '
             'create. That is more exact than calling it a secondary '
             'cause, and it explains why the correlation Mei observes is '
             'genuine.']]),
    ('F3', [['1.  No ranking at all — three causes are listed and '
             'none is weighed against the others.'],
            ['2.  "Women should not have to choose" is a value judgement '
             'offered where Jonas made an empirical claim about '
             'opportunity cost, so his argument is not engaged.'],
            ['3.  "Young people want to travel and enjoy their freedom" '
             'treats values as a cause with no evidence, and the fact that '
             'rates fell in cheap-housing countries — the one piece '
             'of evidence in the discussion — is ignored.']])]),

ad('AD 089', 'Information science · agree / disagree',
   ('distinguish a problem of scale from a problem of kind',
    'correlative conjunctions', 'curation, provenance, moderation, amplification',
    'arguing about whether something is genuinely new'),
   'Dr Alvarez',
   'It is often claimed that online misinformation represents a new kind '
   'of threat. Sceptics reply that rumour, propaganda and forgery are as '
   'old as writing, and that the panic is a familiar response to a new '
   'medium. Is there anything new here?',
   [('Rosa', 'The mechanism is new. Earlier falsehoods needed a printer '
     'or a broadcaster; now the distribution is automated and optimised '
     'for engagement, which selects for exactly the content that '
     'misleads.'),
    ('Felix', 'Every new medium has been described in those words. The '
     'printing press produced a century of witch-hunting manuals. We '
     'adapted, built institutions, and we will again.')],
   P(['a.  Felix’s argument has a form. What is it, and what is its '
      'weakness?',
      'b.  What would make the current case different in kind rather '
      'than degree?'],
     ['a.  What is provenance, and what is amplification?',
      'b.  What is curation, and who used to do it?'],
     ['State your position in one sentence that names what is new.']),
   ['Rosa has identified something genuinely new, and Felix’s '
    'historical parallel is both correct and insufficient.',
    'His argument is an induction from past panics, and its weakness is '
    'that it would have been equally available at every point in the '
    'history he cites, including the ones where the adaptation took a '
    'century and a great many people died in the interval. "We adapted" '
    'describes an outcome, not a mechanism, and it says nothing about '
    'cost.',
    'What is new is neither the falsehood nor the speed but the '
    'selection. Earlier media had gatekeepers who were slow, biased and '
    'often wrong, but whose errors were not systematically correlated '
    'with falsity. An engagement-ranked feed is different in kind: it '
    'selects for emotional response, and false claims are cheaper to make '
    'emotionally compelling because they are not constrained by what '
    'happened. That is a mechanism which actively favours '
    'misinformation.',
    'So I would say both that Felix is right about the panic and that '
    'Rosa is right about the mechanism. The institutions he expects us to '
    'build will have to do something no previous institution did '
    '— not filter content, but alter what the distribution system '
    'rewards.'],
   F(['a.  The response concedes the historical parallel. How does it '
      'still establish novelty?',
      'b.  Why does it say false claims are "cheaper to make emotionally '
      'compelling"?'],
     ['a.  "both that Felix is right about the panic and that Rosa is '
      'right about the mechanism" — what do the correlatives do?',
      'b.  "whose errors were not systematically correlated with falsity" '
      '— why the careful qualification?']),
   ['I agree that online misinformation is a very serious new problem '
    'because social media allows false information to spread to millions '
    'of people within minutes, which was impossible in the past. We have '
    'seen the terrible consequences during elections and the pandemic. '
    'Felix says that every new technology causes panic but I think this '
    'time it really is different because the scale is so much bigger. '
    'Social media companies should take more responsibility for what is '
    'published on their platforms.'],
   [('P1', [['a.  An induction from past cases: previous panics were '
             'overblown, therefore this one is. Its weakness is that it '
             'cannot distinguish a case that is genuinely different, and '
             'it ignores what the adaptations cost.'],
            ['b.  A mechanism that selects for falsity rather than merely '
             'permitting it — something that makes false content '
             'systematically more likely to spread than true content.']]),
    ('P2', [['a.  Provenance is the traceable origin of a claim or '
             'document; amplification is the process by which a system '
             'increases a message’s reach.'],
            ['b.  Curation is selecting and organising what gets '
             'circulated; editors, publishers and broadcasters used to do '
             'it, slowly and with mixed motives.']]),
    ('P3', [['Model: "What is new is a distribution system that selects '
             'for emotional response, and so favours claims unconstrained '
             'by what happened."']]),
    ('F1', [['a.  By attacking the structure of Felix’s inference '
             'rather than his examples. An argument that would have been '
             'available in every past case cannot distinguish the case '
             'where the alarm is justified, so it cannot settle this '
             'one.'],
            ['b.  Because it names the asymmetry precisely. A true account '
             'is limited by the facts; a false one can be optimised '
             'freely, so under a system that ranks by emotional response '
             'falsehood has a structural advantage.']]),
    ('F2', [['a.  "Both ... and" marks the two concessions as a single '
             'coordinated position rather than as a hedge, which matters '
             'because the response is agreeing with speakers who think '
             'they disagree.'],
            ['b.  Because gatekeepers were obviously unreliable, and '
             'claiming otherwise would be easy to refute. The '
             'qualification concedes their failures while identifying the '
             'property that matters — their errors were not aligned '
             'with falsity, and a ranking algorithm’s are.']]),
    ('F3', [['1.  "This time it really is different because the scale is '
             'so much bigger" concedes that the difference is one of '
             'degree, which is exactly Felix’s point.'],
            ['2.  Rosa’s argument about selection and engagement '
             'ranking — the one mechanism in the discussion — is '
             'never used.'],
            ['3.  "Companies should take more responsibility" is a '
             'recommendation where the question asked whether the threat '
             'is new, and the elections and pandemic examples are asserted '
             'rather than analysed.']])]),

ad('AD 090', 'Urban studies · value trade-off',
   ('weigh a benefit to residents against one to newcomers',
    'fronted adverbials for contrast', 'tenure, displacement, density, affordability',
    'weighing incumbent interests against future ones'),
   'Professor Lindqvist',
   'Building dense housing in established neighbourhoods lowers city-wide '
   'rents over time but changes the character of those neighbourhoods and '
   'can displace existing residents during construction. Whose interests '
   'should planning serve?',
   [('Ada', 'The people who already live there. They built the community, '
     'they will bear the disruption, and "city-wide benefits" is what '
     'developers always say.'),
    ('Mark', 'The people who cannot live there are not in the room. Every '
     'consultation hears from residents and never from the family priced '
     'into a two-hour commute, and planning that only listens to the '
     'present produces a city for whoever arrived first.')],
   P(['a.  Mark is making a representation argument. State it precisely.',
      'b.  Why is displacement a different harm from change of '
      'character?'],
     ['a.  What is tenure, and what is affordability as a technical '
      'term?',
      'b.  Distinguish displacement from exclusion.'],
     ['Take a position in one sentence that names whose interest you are '
      'subordinating.']),
   ['Mark has the better argument and Ada has identified the harm that '
    'has to be paid for, which is a question of compensation rather than '
    'of veto.',
    'His representation point is the strongest thing said here. '
    'Consultation systematically samples one side of the trade-off: '
    'present residents attend and absent ones cannot, so a process that '
    'weighs the testimony it receives will always understate the cost of '
    'not building. That is a structural bias, not a matter of who shouts '
    'loudest.',
    'Ada’s objection should still be separated into two claims. '
    'Change of character is a real loss but not one that grounds a right '
    '— neighbourhoods change continuously and nobody is entitled to '
    'the version they arrived in. Displacement is different. Losing your '
    'home is a concentrated, severe and attributable harm, and the fact '
    'that the benefit is diffuse is exactly why it tends to go '
    'uncompensated.',
    'So I would build, and subordinate the preferences of existing '
    'residents to the needs of people who cannot live there — while '
    'treating displacement as a cost to be paid in full, with a right to '
    'return at the old rent. Without that, Ada is right that city-wide '
    'benefit is a phrase that bills the poorest residents for everybody '
    'else’s housing.'],
   F(['a.  The response splits Ada’s objection in two. Why does that '
      'strengthen the argument?',
      'b.  Why does it concede her closing point in the last sentence?'],
     ['a.  "Without that, Ada is right that..." — what does the '
      'fronted adverbial accomplish?',
      'b.  "nobody is entitled to the version they arrived in" — '
      'what kind of claim is this?']),
   ['I think we need to build more housing because the housing crisis is '
    'affecting millions of people and young people cannot afford to live '
    'anywhere near their work. Of course we should be sensitive to '
    'existing communities and try to preserve the character of '
    'neighbourhoods where possible, but we cannot let a small number of '
    'homeowners block development that benefits everyone. Ada says '
    'developers always talk about city-wide benefits but in this case the '
    'benefits are real and well documented.'],
   [('P1', [['a.  That the consultation process can only hear from people '
             'already present, so the interests of those excluded by high '
             'rents are systematically absent from the decision.'],
            ['b.  Change of character is diffuse, gradual and falls on '
             'everyone; displacement is a severe loss concentrated on '
             'identifiable individuals, which makes it compensable and far '
             'harder to justify.']]),
    ('P2', [['a.  Tenure is the legal basis on which a home is held '
             '— ownership, social rent, private rent; affordability '
             'is usually defined as housing cost below a set share of '
             'income.'],
            ['b.  Displacement removes people already there; exclusion '
             'keeps others out. Ada speaks for the displaced, Mark for '
             'the excluded.']]),
    ('P3', [['Model: "Build, subordinating existing residents’ '
             'preferences to those priced out, but pay displacement in '
             'full with a right to return."']]),
    ('F1', [['a.  Because the two claims deserve different answers, and '
             'treating them together lets the weaker one borrow the '
             'force of the stronger. Separating them concedes the serious '
             'harm while denying that preference about character grounds a '
             'veto.'],
            ['b.  Because it is correct about what usually happens. '
             'Granting it makes the compensation requirement a condition '
             'of the writer’s own position rather than a '
             'concession, and shows that the argument for building does '
             'not depend on ignoring her.']]),
    ('F2', [['a.  It makes the concession conditional on the proposal’s '
             'own safeguard, so the agreement with Ada is tied to the '
             'case where the recommendation is not followed. That is a '
             'way of conceding without retreating.'],
            ['b.  A claim about entitlement rather than value. It accepts '
             'that something is lost and denies that the loss generates a '
             'right, which is the precise move needed to subordinate the '
             'interest without dismissing it.']]),
    ('F3', [['1.  Displacement — the concentrated harm at the centre '
             'of Ada’s case — is never mentioned, so nothing is '
             'weighed.'],
            ['2.  "A small number of homeowners" mischaracterises her '
             'argument, which was about residents bearing disruption, not '
             'about property owners blocking change.'],
            ['3.  "The benefits are real and well documented" asserts what '
             'she disputed without evidence, and "preserve the character '
             'where possible" is a qualification with no content.']])]),
]
