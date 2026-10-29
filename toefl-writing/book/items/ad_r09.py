# -*- coding: utf-8 -*-
"""Discussion practice: AD 054-059."""
from _kit import ad


def P(a, b, c):
    return [('P1', 'Decode the task', a),
            ('P2', 'Prime the vocabulary', b),
            ('P3', 'Write it before you read it', c)]


def F(a, b):
    return [('F1', 'Take the answer apart', a),
            ('F2', 'Harvest the language', b),
            ('F3', 'Why this is a 5 and that is a 3',
             ['Name the three things that hold the version below at band 3.'])]


ITEMS = [

ad('AD 054', 'Economics · agree / disagree',
   ('concede the mechanism and dispute its reach',
    'inversion after negative adverbials', 'subsidy, incidence, pass-through, deadweight',
    'disputing scope rather than direction'),
   'Dr Alvarez',
   'Some governments subsidise university tuition so that students pay '
    'little or nothing. Supporters argue this widens access to higher '
    'education. Critics argue the benefit flows mainly to students who '
    'would have attended anyway, and that the money would do more good '
    'earlier in the education system. Does free tuition widen access?',
   [('Ravi', 'It obviously does. Cost is the single biggest thing stopping '
     'people from going to university. Remove it and more people go. '
     'Countries with free tuition have higher participation rates than '
     'countries without.'),
    ('Elin', 'But who actually goes? In the countries Ravi is thinking of, '
     'the students are still overwhelmingly middle class. The barrier was '
     'never only the fee — it was school attainment at sixteen, which '
     'free tuition does nothing about.')],
   P(['a.  Ravi and Elin are not actually disagreeing about the same thing. '
      'What are their two different claims?',
      'b.  The prompt separates "widens access" from "benefits those who '
      'would have attended anyway". Why does that distinction matter?'],
     ['a.  What is the incidence of a subsidy, and what is pass-through?',
      'b.  What does it mean to say a policy is inframarginal — that '
      'it pays for behaviour that would have happened anyway?'],
     ['Take a position in one sentence that concedes Ravi’s mechanism '
      'and limits it.']),
   ['Free tuition does widen access, but by less than its cost implies, '
    'and Elin says why: it is paid overwhelmingly to '
    'students who were already going.',
    'Ravi is right that cost deters, and the participation figures are '
    'real. What they do not show is who the extra students are. If a '
    'subsidy worth thirty thousand a student lifts participation by five '
    'points, the state is paying twenty students in order to recruit one. '
    'The other nineteen are inframarginal: the money is a transfer to them '
    'rather than a lever on anybody. That is not an argument against the '
    'transfer, but it is an argument against calling it an access policy.',
    'Elin’s point about attainment at sixteen is stronger because it '
    'identifies where the selection happens. A student '
    'who leaves school without the grades to apply is not helped by a zero '
    'fee; they were filtered out four years earlier. Nowhere in a free '
    'tuition system does the fee removal reach that filter.',
    'The policy should be judged against the alternative use of the same '
    'money. Thirty thousand per marginal '
    'student, spent on early-years provision or on teaching in the lowest '
    'attaining schools, would alter who is eligible to apply rather than '
    'who can afford to accept. That is the harder intervention and the one '
    'that widens access.'],
   F(['a.  The response agrees with Ravi’s mechanism and still rejects '
      'his conclusion. How is that consistent?',
      'b.  Why does the response put numbers on the argument rather than '
      'arguing in general terms?'],
     ['a.  "Nowhere in a free tuition system does the fee removal reach '
      'that filter" — identify the inversion and say what it is for.',
      'b.  "That is not an argument against the transfer, but it is an '
      'argument against calling it an access policy" — what is this '
      'distinction doing?']),
   ['I agree with Ravi because cost is really the main barrier for students '
    'and if university is free then more students can afford to go, which is '
    'obviously good for society. Elin says the students are still middle '
    'class but I think this is changing slowly and we should be patient. In '
    'my country tuition is very expensive and many of my friends could not '
    'continue their studies because of money, so I know how important this '
    'issue is. Free tuition is a human right in my opinion and governments '
    'should pay for it.'],
   [('P1', [['a.  Ravi claims that removing the fee increases total '
             'participation. Elin claims it does not change the social '
             'composition of who participates. Both can be true at once, '
             'which is why neither refutes the other.'],
            ['b.  Because a policy can raise the headline number while '
             'spending almost all of its money on people whose behaviour it '
             'did not change. "Widens access" and "is good value" are '
             'separate questions, and the prompt is asking the first while '
             'the critics are answering the second.']]),
    ('P2', [['a.  Incidence is who actually ends up better off; pass-through '
             'is how much of the subsidy reaches the intended party rather '
             'than being absorbed elsewhere — by rising fees, for '
             'example.'],
            ['b.  It means the policy pays people who were already inside '
             'the decision. Only the marginal cases are bought by the '
             'policy; everyone else receives a transfer.']]),
    ('P3', [['Model: "Free tuition widens access, but it buys one additional '
             'student for every nineteen it simply pays."']]),
    ('F1', [['a.  Because the mechanism is about deterrence at the margin '
             'and the conclusion is about the policy as a whole. Granting '
             'that cost deters some students is compatible with holding that '
             'the policy is a poor instrument for reaching them, and '
             'conceding the mechanism is what makes the limitation '
             'credible.'],
            ['b.  Because the whole dispute turns on proportion. "Some '
             'students are helped" is true under any numbers; the argument '
             'only becomes an argument once you show that the ratio of '
             'transfer to leverage is nineteen to one. Illustrative figures '
             'make a structural point visible.']]),
    ('F2', [['a.  The negative adverbial "nowhere" fronts the clause and '
             'forces inversion: "does the fee removal reach". It puts the '
             'emphasis on the absence rather than on the subject, and it '
             'raises the register at the point where the response is '
             'landing its strongest structural claim.'],
            ['b.  It separates two objections that are easy to conflate. '
             'The response is not saying the money is wasted — a '
             'transfer to students may be defensible — it is saying '
             'the policy is misdescribed. That is a narrower and far more '
             'defensible claim.']]),
    ('F3', [['1.  No engagement with Elin at all beyond restating her point '
             'and dismissing it with "this is changing slowly and we should '
             'be patient", which is not an answer.'],
            ['2.  The argument is anecdotal and then declarative: personal '
             'experience followed by "a human right in my opinion", which '
             'converts an empirical question about access into an assertion '
             'that cannot be examined.'],
            ['3.  "Which is obviously good for society" does the work that '
             'the argument was supposed to do, and the whole response '
             'ignores the prompt’s actual question about where the '
             'benefit flows.']])]),

ad('AD 055', 'Public health · policy choice',
   ('choose the option whose failure mode is cheapest',
    'comparative conditionals', 'uptake, coverage, mandate, nudge',
    'choosing between a mandate and an incentive'),
   'Professor Oyelaran',
   'To raise vaccination rates, a city can either require vaccination for '
    'school enrolment, with exemptions, or run a voluntary campaign with '
    'free clinics, reminders and small payments. The mandate achieves higher '
    'coverage. The voluntary approach avoids resistance. Which should the '
    'city choose?',
   [('Nadia', 'The mandate. Public health is not a matter of individual '
     'preference when the benefit depends on coverage levels. A voluntary '
     'campaign reaches the people who were already inclined and stalls '
     'exactly where it matters.'),
    ('Theo', 'Mandates create a political backlash that outlasts the '
     'policy. Once vaccination becomes a question of state compulsion, you '
     'have handed the refusers a cause, and the next vaccine is harder than '
     'this one.')],
   P(['a.  Both speakers are making predictions, not moral claims. What is '
      'each predicting?',
      'b.  The prompt says the mandate achieves higher coverage. Does that '
      'settle it?'],
     ['a.  Distinguish uptake from coverage.',
      'b.  What is a nudge, in the policy sense?'],
     ['Choose in one sentence that names what you are willing to lose.']),
   ['I would take the mandate, and I would take it because of Theo’s '
    'objection rather than in spite of it.',
    'Theo is describing a real cost, but he has the sequence wrong. '
    'Backlash is loudest where a mandate arrives after a voluntary campaign '
    'has visibly failed, because by then refusal has had time to organise. '
    'A mandate introduced as the ordinary '
    'condition of school enrolment, alongside the other dozen conditions '
    'nobody argues about, never becomes the subject of a campaign at all. '
    'The more a requirement looks like administration, the less it looks '
    'like compulsion.',
    'Nadia’s point about coverage levels is the substantive one. Herd '
    'protection is not linear: the difference between eighty-five and '
    'ninety-two per cent is not seven per cent more benefit but the '
    'difference between outbreaks that burn out and outbreaks that do not. '
    'A voluntary campaign that plateaus at eighty-five has not achieved most '
    'of the goal; it has achieved almost none of the thing that matters.',
    'What decides it for me is the failure mode. If the mandate is '
    'resisted, the city has high coverage and an argument on its hands. If '
    'the voluntary campaign underperforms, the city has an outbreak and then '
    'has to introduce the mandate anyway, in the worst possible conditions. '
    'I would rather manage the first failure than the second.'],
   F(['a.  The response takes Nadia’s side but spends its longest '
      'paragraph on Theo. Why is that the right allocation?',
      'b.  The final paragraph changes the basis of the decision. What is '
      'the new basis and why is it stronger?'],
     ['a.  "The more a requirement looks like administration, the less it '
      'looks like compulsion" — name the structure and say what it '
      'buys.',
      'b.  "it has achieved almost none of the thing that matters" — '
      'why this phrasing rather than "it has failed"?']),
   ['I think the city should choose the mandate because health is more '
    'important than personal freedom and the government has a duty to '
    'protect everybody, especially children who cannot decide for '
    'themselves. Theo worries about backlash but in my opinion we cannot '
    'let a small minority of people who refuse science decide policy for the '
    'majority. Nadia is completely right that voluntary campaigns do not '
    'work well enough. Vaccination has saved millions of lives and this is '
    'not something we should negotiate about.'],
   [('P1', [['a.  Nadia predicts that a voluntary campaign plateaus below '
             'the level where coverage produces its benefit. Theo predicts '
             'that a mandate generates durable political opposition that '
             'raises the cost of future public health measures.'],
            ['b.  No. Higher coverage now is one of the two things in '
             'dispute; the other is the cost imposed on later policies. A '
             'measure can win on the first and lose overall.']]),
    ('P2', [['a.  Uptake is the proportion who accept when offered; '
             'coverage is the proportion of the population protected. A '
             'campaign can have excellent uptake among those it reaches and '
             'poor coverage.'],
            ['b.  A change to how a choice is presented that shifts '
             'behaviour without removing the option — reminders, '
             'defaults, small payments.']]),
    ('P3', [['Model: "I would take the mandate and accept a political '
             'argument, because the alternative failure is an outbreak '
             'followed by the same mandate."']]),
    ('F1', [['a.  Because Nadia’s claim is granted by the prompt '
             '— it says the mandate achieves higher coverage — '
             'so defending it adds nothing. The only live question is '
             'whether Theo’s cost outweighs that, so the argument has '
             'to be won there.'],
            ['b.  It moves from comparing expected outcomes to comparing '
             'what happens when each option fails. That is stronger because '
             'both speakers’ predictions are uncertain, while the two '
             'failure modes can be described concretely and are plainly '
             'asymmetric.']]),
    ('F2', [['a.  A double comparative conditional — the more X, the '
             'less Y. It states a relationship rather than a fact, which '
             'lets the response make a general claim about how mandates are '
             'received without having to prove it in a particular case.'],
            ['b.  Because "failed" invites the reply that eighty-five per '
             'cent is a substantial achievement, which it is in uptake '
             'terms. The phrasing concedes the achievement and relocates '
             'the failure to the specific thing coverage was for, which is '
             'the non-linear benefit just described.']]),
    ('F3', [['1.  Theo’s objection is about future policy cost and the '
             'response answers it with "we cannot let a small minority '
             'decide policy", which addresses a different argument entirely.'],
            ['2.  "People who refuse science" characterises the opposition '
             'rather than engaging with the prediction about backlash, and '
             '"this is not something we should negotiate about" declines the '
             'comparison the prompt asks for.'],
            ['3.  No mechanism anywhere — nothing about coverage '
             'thresholds, exemption rates, or how a mandate is introduced, '
             'so the choice rests entirely on the assertion that health '
             'outweighs freedom.']])]),

ad('AD 056', 'History · cause ranking',
   ('rank causes by what removing each would have changed',
    'past counterfactual conditionals', 'proximate, structural, contingency, precipitate',
    'ranking causes of a historical outcome'),
   'Dr Whitfield',
   'Historians disagree about why literacy spread so rapidly in parts of '
    'early modern Europe. Candidate explanations include the printing press, '
    'religious reform that required personal reading of scripture, and the '
    'growth of commerce, which made record keeping valuable. Which was most '
    'important, and why?',
   [('Ines', 'The press, clearly. Before it, books were scarce enough that '
     'literacy had almost no use outside a clerical career. Cheap print '
     'created the reason to learn.'),
    ('Mateo', 'Print existed in regions where literacy stayed low for two '
     'centuries. What varied was whether ordinary people were required to '
     'read something — and in the Protestant areas they were, by their '
     'own church.')],
   P(['a.  Mateo’s objection has a particular logical form. What is '
      'it?',
      'b.  What would you need to know to rank these three causes rather '
      'than just list them?'],
     ['a.  Distinguish a proximate from a structural cause.',
      'b.  What does it mean for an event to precipitate an outcome?'],
     ['Rank the three in one sentence using a removal test.']),
   ['Mateo has the better method even if his answer is incomplete, and the '
    'reason is that he is testing causes by variation rather than by '
    'plausibility.',
    'Ines is describing a necessary condition. Had print not existed, mass '
    'literacy would have been impossible at any price, so the press belongs '
    'in any account. But necessary conditions are poor explanations of '
    'timing and distribution, and that is what the question asks about. '
    'Print was available across Europe within fifty years; literacy was '
    'not. A cause that is uniformly present cannot explain an outcome that '
    'varies.',
    'That is why I would rank religious reform first. It supplied the one '
    'thing print could not: an obligation. Had the reformed churches not '
    'required households to read scripture themselves, cheap books would '
    'have been cheap books, and we can see what that looks like in the '
    'regions where print arrived without the obligation. Commerce I would '
    'put third, because it created demand among a narrow group — '
    'merchants and clerks — whose literacy was already likely, and it '
    'tends to follow prosperity rather than produce the broad household '
    'literacy the question is about.',
    'So: reform as the cause that explains variation, print as the '
    'condition that made the variation possible, commerce as a reinforcing '
    'factor that deepened literacy where it had already arrived.'],
   F(['a.  The response ranks Ines’s cause second and still calls it '
      'indispensable. How can both hold?',
      'b.  Commerce is dismissed in three clauses. Is that too fast?'],
     ['a.  "Had the reformed churches not required households to read '
      'scripture themselves, cheap books would have been cheap books" '
      '— identify the structure and say why it is used twice.',
      'b.  "A cause that is uniformly present cannot explain an outcome '
      'that varies" — why state this as a general principle?']),
   ['In my opinion all three factors were important and it is difficult to '
    'say which one was the most important because they all worked together. '
    'The printing press made books cheaper, religion made people want to '
    'read the Bible, and commerce meant that reading and writing were useful '
    'skills for business. I think Ines and Mateo both make good points. '
    'History is usually complicated like this and there is rarely one single '
    'cause for a big change in society. Probably the combination of all '
    'three is the real explanation.'],
   [('P1', [['a.  It is a variation argument: the proposed cause was '
             'present where the outcome was absent, so it cannot by itself '
             'account for the outcome. That does not show print was '
             'unimportant, only that it cannot explain the pattern.'],
            ['b.  You need to know what each cause would have left '
             'unchanged if removed, and whether it varied in the same '
             'places and at the same times as the outcome. Ranking requires '
             'counterfactuals and co-variation, not a judgement about which '
             'sounds weightiest.']]),
    ('P2', [['a.  A proximate cause is the immediate trigger; a structural '
             'cause is the underlying condition that makes the trigger '
             'effective. Print is structural here and the reading obligation '
             'proximate.'],
            ['b.  To bring it about sooner or more sharply than it would '
             'otherwise have occurred — which is a weaker claim than '
             'causing it, and often the honest one.']]),
    ('P3', [['Model: "Remove reform and literacy stalls; remove print and '
             'it is impossible; remove commerce and it is slower — so '
             'reform first, print as the condition, commerce third."']]),
    ('F2', [['a.  An inverted past counterfactual — "Had X not ..., Y '
             'would have ...". It appears twice because the ranking rests '
             'entirely on removal tests, and the construction states the '
             'test in its own grammar: once to concede print’s '
             'necessity, once to establish reform’s explanatory '
             'priority.'],
            ['b.  Because stating the principle makes the move transparent '
             'and portable, rather than looking like a convenient objection '
             'to Ines. It also does the work in one sentence that an '
             'accumulation of regional examples would otherwise require.']]),
    ('F1', [['a.  Because necessity and explanatory power are different '
             'things. Print is a condition without which nothing follows, '
             'and precisely because it was everywhere it cannot explain why '
             'literacy rose in some places and not others. Ranking is about '
             'the second question.'],
            ['b.  It is brief but it gives a reason of the right kind '
             '— commerce raised demand in a group whose literacy was '
             'already probable, so removing it changes little about '
             'household literacy. The brevity is proportionate: a weaker '
             'candidate needs a reason, not a paragraph.']]),
    ('F3', [['1.  It refuses the task. The prompt asks which was most '
             'important and the response answers that all three were, which '
             'is not a position.'],
            ['2.  "They all worked together" and "history is usually '
             'complicated" are claims about historiography, not about '
             'literacy, and they would fit any question of this shape.'],
            ['3.  Neither Ines nor Mateo is engaged — "both make good '
             'points" is the only reference to either, and Mateo’s '
             'specific objection about print in low-literacy regions is '
             'left standing untouched.']])]),

ad('AD 057', 'Engineering · value trade-off',
   ('price the trade-off in the units the decision is made in',
    'result clauses with so ... that', 'tolerance, redundancy, overdesign, duty cycle',
    'trading cost against margin of safety'),
   'Professor Lindqvist',
   'Engineers often face a choice between designing to the expected load '
    'with a modest safety margin, which is cheaper and lighter, and '
    'designing with substantial redundancy, which costs more and may never '
    'be needed. Where should the balance sit, and who should decide?',
   [('Hana', 'Err on the side of redundancy. The cost of over-engineering '
     'is money; the cost of under-engineering can be lives. Those are not '
     'comparable quantities and should not be traded off.'),
    ('Luc', 'They are traded off, constantly, whether we admit it or not. '
     'A bridge built to Hana’s standard costs three times as much, so '
     'two of the three get built — and the people who would have used '
     'the third one drive on a worse road.')],
   P(['a.  Luc is not disagreeing that safety matters. What is he actually '
      'claiming?',
      'b.  The prompt asks two questions. Why is the second one not a '
      'throwaway?'],
     ['a.  What is a tolerance, and what is redundancy?',
      'b.  What is a duty cycle, and why would it change a margin?'],
     ['State your position in one sentence that names the unit the '
      'trade-off is measured in.']),
   ['Luc is right about the arithmetic and wrong about who does it: the '
    'second half of the prompt is where this is decided.',
    'Hana’s instinct is right at the level of a single component: an engineer who shaves a margin to save money on a '
    'load-bearing member has made an error, not a trade-off. But Luc has '
    'identified something real: margins are not free. '
    'If a standard is set so high that only two '
    'of three bridges are built, the risk has not been eliminated — it '
    'has been moved onto the road the third bridge would have replaced, '
    'where nobody is accountable for it.',
    'The trade-off therefore has to be made in a common unit, and the only '
    'honest one is expected harm across the system rather than cost per '
    'structure. Once you count the third bridge, Hana’s standard may '
    'cost more lives than it saves, which is an argument she should want '
    'to hear.',
    'That calculation is not an engineer’s to make, which is where '
    'I part from Luc. Their obligation is to state in numbers '
    'what each margin buys and costs, and to refuse to build below the '
    'floor. What to spend on avoided deaths is a decision made '
    'badly but legitimately by governments; an engineer who makes it '
    'privately substitutes their own risk appetite for everyone '
    'else’s.'],
   F(['a.  The response agrees with Luc’s arithmetic and refuses his '
      'conclusion. What is the dividing line?',
      'b.  "which is an argument she should want to hear" — what is '
      'this doing for Hana’s position?'],
     ['a.  "If a standard is set so high that only two of three bridges are '
      'built" — identify the structure and say why it suits this '
      'argument.',
      'b.  "made badly but legitimately" — why concede the first '
      'adverb?']),
   ['I agree with Hana that safety should always come first because human '
    'life cannot be measured in money. Engineers have a professional and '
    'ethical responsibility to protect the public and if a design is not '
    'safe enough then it should not be built, no matter what it costs. Luc '
    'talks about bridges not being built but I think governments can always '
    'find the money if they really want to, especially for infrastructure '
    'which is so important for the economy. Safety standards exist for a '
    'reason and we should respect them.'],
   [('P1', [['a.  That the trade-off is already being made implicitly, and '
             'that refusing to make it explicitly does not remove the risk '
             'but relocates it to places nobody is measuring.'],
            ['b.  Because "where should the balance sit" and "who should '
             'decide" can have different answers. Agreeing that a trade-off '
             'exists does not settle who has the authority to make it, and '
             'that is the sharper question.']]),
    ('P2', [['a.  A tolerance is the permitted deviation from a specified '
             'value; redundancy is additional capacity or duplicate load '
             'paths so that one failure is not total.'],
            ['b.  The pattern of loading over time. A structure loaded '
             'rarely and predictably needs a different margin from one '
             'cycled to near capacity daily, because fatigue accumulates.']]),
    ('P3', [['Model: "The trade-off has to be priced in expected harm '
             'across the system, not cost per structure, and priced by '
             'governments rather than by engineers."']]),
    ('F1', [['a.  Between the calculation and the authority to make it. The '
             'response accepts that margins must be weighed against '
             'foregone projects, and denies that the weighing is an '
             'engineering decision — the engineer supplies the numbers '
             'and holds the floor.'],
            ['b.  It reframes the systemic count as something that could '
             'support her goal rather than defeat it. If her standard costs '
             'net lives, she has a reason internal to her own commitments '
             'to revise it, which is a far more persuasive move than telling '
             'her that money matters too.']]),
    ('F2', [['a.  A result clause — so high that only two of three get '
             'built. It ties the consequence directly to the degree of the '
             'standard, which is exactly the relationship in dispute, and '
             'avoids asserting that high standards are bad in themselves.'],
            ['b.  Because without it the sentence sounds like a defence of '
             'government competence, which nobody believes and which is not '
             'the point. Conceding that the decision is made badly isolates '
             'the real claim — that it is still the right body to make '
             'it — and makes that claim harder to dismiss.']]),
    ('F3', [['1.  "Human life cannot be measured in money" is asserted and '
             'then immediately contradicted by the request that governments '
             '"find the money", which is a measurement.'],
            ['2.  Luc’s actual argument — that the unbuilt third '
             'bridge carries risk of its own — is never addressed; '
             '"governments can always find the money if they really want to" '
             'denies the premise without evidence.'],
            ['3.  The prompt’s second question, who should decide, is '
             'not answered at all, and "safety standards exist for a reason" '
             'closes the discussion rather than contributing to it.']])]),

ad('AD 058', 'Linguistics · agree / disagree',
   ('distinguish a descriptive claim from a prescriptive one',
    'generic reference', 'prescriptive, descriptive, register, standard variety',
    'arguing about language change'),
   'Dr Haddad',
   'It is often said that language is deteriorating — that young '
    'people write less carefully, that distinctions are being lost, and '
    'that digital communication accelerates the decline. Linguists '
    'generally reject this. Is there anything to the complaint?',
   [('Ola', 'Nothing at all. Every generation has said it since Latin. '
     'Change is not decay — the distinctions being "lost" were '
     'themselves innovations that someone once complained about.'),
    ('Ben', 'That answer is too quick. Even if the system is not '
     'degrading, individual writers can be worse at producing the variety '
     'that gets them a job. Telling them change is natural does not help '
     'them.')],
   P(['a.  Ola and Ben are answering different questions. Identify each.',
      'b.  The prompt asks whether there is "anything to" the complaint. '
      'Why is that phrasing an opening?'],
     ['a.  Distinguish prescriptive from descriptive claims about language.',
      'b.  What is a standard variety, and what is register?'],
     ['State your position in one sentence that separates the two '
      'questions.']),
   ['Ola is right about the language and Ben about the writers, '
    'and the complaint survives only in that second form.',
    'As a claim about the system the thesis is false, '
    'and Ola gives the reason: every distinction mourned was '
    'once an innovation: the loss of the subjunctive in English is '
    'mourned by people who do not mourn the loss of the dual number, the '
    'difference being that nobody alive remembers the second. A language '
    'with a hundred million speakers does not degrade; it redistributes '
    'its resources, losing an inflection and acquiring a discourse '
    'marker.',
    'But Ben has identified what the complaint is about: not the '
    'system but command of one variety. The '
    'ability to produce standard written English on demand is unevenly '
    'distributed, is strongly correlated with schooling and class, and '
    'is still what gatekeepers test. A student who cannot switch into '
    'that register is disadvantaged whether or not linguistics approves of '
    'the gatekeeping.',
    'So the complaint is misdescribed rather than baseless. What people '
    'notice is real — writing that fails where the '
    'standard variety is expected — and they explain it wrongly, as '
    'decay in the language rather than as unequal access to one register of '
    'it. The honest position is that nothing '
    'is '
    'wrong with the language and something is wrong with who gets taught '
    'to use its prestige form.'],
   F(['a.  The response grants the complaint in a reduced form. What '
      'exactly is granted?',
      'b.  Why does the second paragraph bring in the dual number?'],
     ['a.  "A language with a hundred million speakers does not degrade" '
      '— why the generic, and what does it exclude?',
      'b.  "misdescribed rather than baseless" — what work does this '
      'pairing do?']),
   ['I completely agree with Ola because linguists have proven that '
    'language change is a natural process and not a decline. Older people '
    'always complain about young people, this has happened throughout '
    'history and it is a kind of prejudice. Shakespeare invented many words '
    'and nobody complains about him now. Ben says students need to write '
    'properly for jobs but I think employers should be more open-minded and '
    'accept different ways of writing instead of judging people by old '
    'fashioned rules. Language belongs to the people who speak it.'],
   [('P1', [['a.  Ola answers whether the language system is degrading '
             '— a descriptive question. Ben answers whether '
             'individuals are worse at producing a prestige variety '
             '— a question about skill distribution. Both can be '
             'answered independently.'],
            ['b.  Because it does not ask whether the complaint is correct '
             'but whether any part of it tracks something real. That invites '
             'a reduced version rather than a straight yes or no, and the '
             'strongest response finds the part that survives.']]),
    ('P2', [['a.  A descriptive claim reports how people use language; a '
             'prescriptive claim says how they ought to. The deterioration '
             'thesis dresses the second as the first.'],
            ['b.  A standard variety is the codified form used in '
             'education, publishing and administration; register is '
             'variation by situation — the ability to switch is what '
             'Ben is really describing.']]),
    ('P3', [['Model: "The language is not deteriorating, but command of its '
             'standard variety is unequally distributed, and that is what '
             'the complaint is really noticing."']]),
    ('F1', [['a.  Not that the language is degrading, but that the thing '
             'people observe — writing that fails where the standard '
             'variety is expected — is real, and that the explanation '
             'they reach for is the wrong one. The observation is granted; '
             'the diagnosis is refused.'],
            ['b.  Because it shows that mourning a distinction depends on '
             'living memory rather than on the distinction’s value. '
             'Nobody mourns the dual number, which was lost the same way, '
             'so the asymmetry exposes the complaint as generational rather '
             'than linguistic.']]),
    ('F2', [['a.  The generic makes a claim about languages of that kind '
             'rather than about English, so it does not depend on the '
             'particular distinctions in dispute. It excludes the real case '
             'of endangered languages with few speakers, where loss of '
             'resources is not redistribution — the hedge is doing '
             'genuine work.'],
            ['b.  It separates two ways a complaint can fail. Baseless '
             'means there is nothing to see; misdescribed means the '
             'observation is sound and the account of it is wrong. Choosing '
             'the second is what lets the response agree with Ola on the '
             'linguistics and still take the complainants seriously.']]),
    ('F3', [['1.  Ben’s point is answered with what employers ought to '
             'do, which does not help the student in front of you and does '
             'not engage the claim about unequal command.'],
            ['2.  "Linguists have proven" and "language belongs to the '
             'people who speak it" are appeals to authority and to slogan '
             'where an argument was needed.'],
            ['3.  The Shakespeare example is not relevant to the '
             'complaint — nobody objects to coinage — and there '
             'is a comma splice in the second sentence.']])]),

ad('AD 059', 'Business · policy choice',
   ('choose by asking which option is reversible',
    'concessive although / while clauses', 'pilot, roll-out, sunk cost, attrition',
    'choosing between a pilot and a full roll-out'),
   'Professor Ikeda',
   'A company considering a four-day week can pilot it in one division for '
    'six months or adopt it across the company at once. A pilot generates '
    'evidence but signals that the change may be withdrawn. A full adoption '
    'commits everyone but cannot easily be reversed. Which approach is '
    'better?',
   [('Yuki', 'Pilot it. You do not restructure an entire company on a '
     'hypothesis. Six months of data on one division costs almost nothing '
     'and tells you whether the thing works.'),
    ('Priya', 'A pilot of a four-day week measures the wrong thing. People '
     'in the pilot division know they are being watched and that the policy '
     'might be taken away, so they overwork to protect it. You learn how '
     'people behave under observation, not how the policy performs.')],
   P(['a.  Priya is making a methodological objection, not a political '
      'one. State it precisely.',
      'b.  The prompt says full adoption "cannot easily be reversed". Is '
      'that true, and does it matter?'],
     ['a.  What is attrition, and what is a sunk cost?',
      'b.  Distinguish a pilot from a phased roll-out.'],
     ['Choose in one sentence that answers Priya’s objection rather '
      'than ignoring it.']),
   ['Priya has found the real flaw, and the response is not to drop the '
    'pilot but to change what it measures.',
    'Her objection is sound. A division that knows its four-day week is '
    'conditional on good numbers will produce them, and the '
    'mechanism is obvious: people compress, skip breaks and answer email on '
    'the fifth day. Six months of that says nothing about the steady '
    'state. Yuki’s cheap '
    'evidence is cheap partly because it is not evidence.',
    'But the conclusion does not follow. Although a pilot cannot measure '
    'sustained productivity, it can measure things that observation does not '
    'contaminate — whether coverage gaps appear on Fridays, whether '
    'clients notice, whether the scheduling system can actually handle it. '
    'Those are the '
    'operational questions that sink the policy in practice, and they are '
    'answerable precisely because they do not depend on '
    'anyone’s goodwill.',
    'So I would pilot, with the question narrowed to feasibility rather '
    'than performance, and I would say so openly to the division. What '
    'decides it is reversibility: a pilot that fails costs a division six '
    'awkward months, while a full adoption that fails has to be withdrawn '
    'from everyone, and a withdrawn benefit does more damage '
    'than a benefit never granted. When the downside is asymmetric, the '
    'reversible option is worth a weaker test.'],
   F(['a.  The response accepts Priya’s objection and still chooses '
      'Yuki’s option. What makes that coherent?',
      'b.  "and I would say so openly to the division" — why does '
      'this matter methodologically?'],
     ['a.  "Although a pilot cannot measure sustained productivity, it can '
      'measure ..." — why the concessive, and why in that order?',
      'b.  "a withdrawn benefit does more damage than a benefit never '
      'granted" — what kind of claim is this?']),
   ['I think the company should pilot the four-day week first because it is '
    'much safer to test a big change before applying it everywhere. If the '
    'pilot is successful then they can expand it, and if not they have not '
    'wasted money. Priya makes an interesting point about people being '
    'watched but I think most employees would be honest and anyway managers '
    'can monitor the results carefully to make sure the data is accurate. A '
    'four-day week is a great idea in general and many companies have tried '
    'it with good results.'],
   [('P1', [['a.  That the pilot’s conditions change the behaviour '
             'being measured, so the result does not generalise to the '
             'permanent policy. It is an observation effect, not a claim '
             'that pilots are unfair.'],
            ['b.  Partly. It could be withdrawn, but withdrawing a benefit '
             'already granted imposes costs — morale, attrition, '
             'reputation — that make it practically very difficult. '
             'That asymmetry is what makes reversibility the decisive '
             'consideration.']]),
    ('P2', [['a.  Attrition is the rate at which staff leave; a sunk cost '
             'is an expenditure already incurred, which should not '
             'influence a forward-looking decision but usually does.'],
            ['b.  A pilot tests whether to proceed and may be abandoned; a '
             'phased roll-out has already decided to proceed and is '
             'sequencing the implementation.']]),
    ('P3', [['Model: "Pilot it, but measure feasibility rather than '
             'productivity, because that is the part observation does not '
             'distort."']]),
    ('F1', [['a.  Because her objection defeats one use of a pilot, not '
             'pilots as such. Once the research question is narrowed to '
             'operational feasibility, the observation effect she describes '
             'no longer threatens the finding, so the method survives with a '
             'smaller claim attached.'],
            ['b.  Because telling the division that the pilot is not '
             'assessing their output removes the incentive Priya '
             'identified. The observation effect depends on what people '
             'believe is being judged, so changing that belief is part of '
             'the design rather than a courtesy.']]),
    ('F2', [['a.  The concessive puts the conceded point first, so the '
             'response is seen to accept Priya’s objection before '
             'limiting it. Reversing the order would read as a rebuttal '
             'with a grudging qualifier, which is a weaker position from '
             'which to then adopt her opponent’s option.'],
            ['b.  An empirical claim about how losses are experienced '
             'relative to gains, used here to establish that the two failure '
             'modes are not symmetric. It is the load-bearing premise of the '
             'final decision, which is why it is stated plainly rather than '
             'assumed.']]),
    ('F3', [['1.  Priya’s objection is acknowledged and then answered '
             'with "most employees would be honest", which misreads it '
             '— the effect she describes needs no dishonesty.'],
            ['2.  "Managers can monitor the results carefully to make sure '
             'the data is accurate" proposes more observation as the cure '
             'for an observation effect, which makes it worse.'],
            ['3.  "A four-day week is a great idea in general" and "many '
             'companies have tried it with good results" answer a question '
             'the prompt did not ask, and nothing is said about '
             'reversibility or about what the pilot should measure.']])]),
]
