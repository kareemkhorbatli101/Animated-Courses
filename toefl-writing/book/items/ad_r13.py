# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 079-084."""
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

ad('AD 079', 'Linguistics · policy choice',
   ('choose by asking what the child loses either way',
    'gerund subjects', 'immersion, transfer, bilingual, medium of instruction',
    'choosing a language of instruction'),
   'Dr Haddad',
   'Where children speak a home language different from the national one, '
   'schools can teach in the national language from the start, for fastest '
   'acquisition, or begin in the home language and transition later, which '
   'protects early learning but delays fluency. Which should a system '
   'choose?',
   [('Zofia', 'Immersion. The national language is what opens every door '
     'later, and children acquire it fastest when it is the only medium. '
     'Delaying it is a kindness that costs them at eighteen.'),
    ('Tunde', 'A child who cannot follow the lesson is not learning '
     'maths or the language. The evidence from transitional programmes is '
     'that they end up better at both — the early years are not a '
     'cost, they are the foundation.')],
   P(['a.  Both speakers want the child fluent in the national language. '
      'What divides them?',
      'b.  What is being traded against what in the first three years?'],
     ['a.  What is a medium of instruction, and what is transfer?',
      'b.  Distinguish immersion from submersion.'],
     ['Choose in one sentence that names what is lost in the first three '
      'years.']),
   ['Tunde has the stronger case, and the reason is that '
    'Zofia’s argument treats language acquisition as the only thing '
    'happening in a classroom.',
    'Her point about later access is true and should not be minimised. '
    'A child who leaves school without the national language is shut out '
    'of higher education and most employment, and no amount of home-'
    'language literacy compensates for that. Any transitional model has '
    'to deliver fluency, not merely postpone it.',
    'But teaching in a language a child does not yet understand costs '
    'more than time. Those years are when number sense, reading and the '
    'habit of following an argument are built, and losing them is not '
    'recoverable later in the way vocabulary is. The transfer evidence is '
    'the crucial part of Tunde’s case: literacy acquired in a first '
    'language carries over, so beginning at home is not a detour but a '
    'shorter route to the same place.',
    'So I would begin in the home language with the national language '
    'taught as a subject from year one, and switch medium around year '
    'four. That answers Zofia’s real worry, which is not when the '
    'national language starts but whether it is ever actually mastered.'],
   F(['a.  The response gives Zofia’s concern a whole paragraph '
      'before disagreeing. What does that accomplish?',
      'b.  Why is the transfer evidence called "the crucial part"?'],
     ['a.  "teaching in a language a child does not yet understand costs '
      'more than time" — why a gerund as subject?',
      'b.  "not when the national language starts but whether it is ever '
      'actually mastered" — what does this reframing do?']),
   ['I think children should be taught in their mother tongue first '
    'because language is a fundamental part of identity and culture, and '
    'forcing children to abandon their home language is a form of '
    'cultural erasure. Many indigenous languages have disappeared because '
    'of education policies like this. Zofia says the national language '
    'opens doors but children can learn it later as a second language '
    'without any problem, as many bilingual people prove. Education '
    'should respect diversity.'],
   [('P1', [['a.  When it should be introduced as the medium, and whether '
             'the early years spent in the home language are a cost or an '
             'investment.'],
            ['b.  Early fluency in the national language against '
             'comprehension of everything else being taught — '
             'numeracy, literacy and the habit of reasoning.']]),
    ('P2', [['a.  The medium of instruction is the language lessons are '
             'taught in; transfer is the carrying over of skills learned '
             'in one language to another.'],
            ['b.  Immersion supports a learner in a new language with '
             'teaching designed for that; submersion simply places them in '
             'it unsupported. The second is what Tunde is objecting to.']]),
    ('P3', [['Model: "Begin in the home language, because what is lost in '
             'those years is not vocabulary but numeracy and reading."']]),
    ('F1', [['a.  It establishes that the writer takes the cost of '
             'delayed fluency seriously, so the conclusion is not a '
             'preference for cultural accommodation over opportunity. The '
             'final proposal is then visibly designed to meet her '
             'requirement.'],
            ['b.  Because without it, beginning in the home language is a '
             'delay to be justified by other goods. With it, the early '
             'years contribute directly to later national-language '
             'literacy, which removes the trade-off Zofia assumes.']]),
    ('F2', [['a.  The gerund phrase lets a whole action be the subject of '
             'a claim about its cost, which is the precise move: the '
             'response is not arguing about languages but about what the '
             'practice does. It also keeps the sentence short enough to '
             'land.'],
            ['b.  It separates the thing Zofia cares about from the thing '
             'she is defending. Her goal is mastery; immersion is only a '
             'means, and the response can satisfy the goal while rejecting '
             'the means.']]),
    ('F3', [['1.  Zofia’s argument is answered with "children can '
             'learn it later without any problem", which is the claim in '
             'dispute and is asserted with no support.'],
            ['2.  The response is about identity and cultural erasure, '
             'which neither speaker raised — the prompt asks which '
             'policy serves the child’s learning.'],
            ['3.  No proposal: no transition point, no treatment of the '
             'national language as a subject, nothing about transfer, so '
             'the policy question is not answered.']])]),

ad('AD 080', 'Astronomy · value trade-off',
   ('justify a cost by what only this project can produce',
    'infinitives of purpose', 'aperture, baseline, duplication, cadence',
    'justifying expenditure on fundamental research'),
   'Professor Lindgren',
   'Large astronomical facilities cost billions and answer questions with '
   'no foreseeable application. Some argue that in a period of competing '
   'public needs this is indefensible. Others argue that fundamental '
   'science cannot be justified by application and should not try. How '
   'should such spending be defended?',
   [('Petra', 'Not by pretending it will cure something. The honest '
     'defence is that knowing how the universe works is a good in itself, '
     'and a society rich enough to argue about this can afford it.'),
    ('Samir', 'That defence loses every budget round, and deserves to. If '
     'you cannot say why this telescope rather than a hospital, you are '
     'asking for a subsidy for curiosity.')],
   P(['a.  Samir is not hostile to astronomy. What is he demanding?',
      'b.  Why might the honest defence and the effective defence be '
      'different?'],
     ['a.  What is aperture, and what is a baseline in observational '
      'astronomy?',
      'b.  What does cadence mean, and why does it matter to a survey?'],
     ['State your position in one sentence that names what only this '
      'spending buys.']),
   ['Petra is right about what the value is and Samir is right that she '
    'has not answered the question actually being asked.',
    'Her defence is honest and insufficient. "A good in itself" is true '
    'of many things competing for the same money, so it establishes that '
    'astronomy belongs in the category of things worth funding without '
    'saying how much. A finance ministry is not asking whether knowledge '
    'is valuable; it is asking what this instrument delivers that the '
    'next cheapest option does not.',
    'That question can be answered. A facility of this aperture is built '
    'to observe things no existing instrument can reach, and the case for '
    'it rests on what becomes measurable rather than on eventual '
    'applications. It also produces things that are not knowledge at all '
    '— detector technology, large-scale data methods, and several '
    'thousand people trained to solve problems nobody has solved before.',
    'So I would defend it as Samir demands and on Petra’s grounds: '
    'specify the questions only this aperture can settle, state the '
    'spillovers without overselling them, and accept that the comparison '
    'with a hospital is legitimate. Refusing the comparison is what makes '
    'the request look like a subsidy for curiosity.'],
   F(['a.  The response accepts Samir’s framing. What does it refuse '
      'to accept?',
      'b.  Why mention detector technology and trained people?'],
     ['a.  "is built to observe things no existing instrument can reach" '
      '— what do the infinitives of purpose contribute?',
      'b.  "accept that the comparison with a hospital is legitimate" '
      '— why concede this?']),
   ['I believe we should continue to fund fundamental research because '
    'science has always driven human progress and many great discoveries '
    'had no obvious application at first. For example nobody thought '
    'quantum mechanics would be useful but now we have computers and '
    'lasers. Samir asks why a telescope rather than a hospital but I think '
    'this is a false choice because the amounts spent on science are tiny '
    'compared to military budgets. Curiosity is what makes us human.'],
   [('P1', [['a.  A comparative justification — a reason to prefer '
             'this spending to the next best use of the same money. He '
             'accepts the value and rejects the refusal to rank.'],
            ['b.  Because the honest reason is non-comparative, and budget '
             'decisions are comparative. A true account of why something '
             'is valuable need not answer why it is more valuable than the '
             'alternative.']]),
    ('P2', [['a.  Aperture is the collecting area of a telescope, which '
             'sets what faint objects it can see; a baseline is the '
             'separation between instruments, which sets resolution.'],
            ['b.  How often a survey revisits the same patch of sky '
             '— which determines whether changing phenomena can be '
             'detected at all.']]),
    ('P3', [['Model: "Defend it by naming the questions only this aperture '
             'can settle, not by promising applications."']]),
    ('F1', [['a.  It refuses the implication that a comparative case must '
             'be an applied one. The comparison can be made in terms of '
             'what becomes measurable, which is a reason of the right '
             'kind without pretending the telescope will cure anything.'],
            ['b.  Because they are comparative benefits that do not '
             'require overselling. They are produced by this spending and '
             'not by the alternative, which is exactly the form of '
             'argument Samir asked for, while remaining true.']]),
    ('F2', [['a.  They state the instrument’s purpose as its '
             'justification, which is the structure of the whole argument: '
             'the case rests on what it is for rather than on what might '
             'follow from it.'],
            ['b.  Because refusing the comparison is what makes '
             'scientists sound as though they are claiming exemption. '
             'Granting that the hospital is a real alternative is the '
             'precondition for being taken seriously when you then argue '
             'you should win.']]),
    ('F3', [['1.  "Nobody thought quantum mechanics would be useful but '
             'now we have computers" is exactly the application-based '
             'defence Petra rejects, and it is offered without noticing '
             'the contradiction.'],
            ['2.  "The amounts are tiny compared to military budgets" '
             'answers the comparison with a different comparison, which '
             'does not establish that this spending beats a hospital.'],
            ['3.  "Curiosity is what makes us human" is a slogan, and '
             'nothing is said about what this particular facility would '
             'make measurable.']])]),

ad('AD 081', 'Public policy · agree / disagree',
   ('distinguish a target from an instrument',
    'passive with by means of', 'incentive, mandate, elasticity, regressive',
    'arguing about how a goal should be pursued'),
   'Professor Adeyemi',
   'To cut urban car use, cities can charge for driving or invest in '
   'alternatives. Charging works quickly but falls hardest on those with '
   'least choice. Investment is fairer but slow and does not by itself '
   'reduce traffic. Which approach is right?',
   [('Elif', 'Charge. Every city that priced driving saw traffic fall '
     'within a year; every city that only built transit saw congestion '
     'stay flat as new drivers filled the road.'),
    ('Owen', 'And in those cities the people who stopped driving were the '
     'ones who could least afford not to. A charge is a tax on people '
     'whose jobs start before the first bus.')],
   P(['a.  Owen does not dispute that charging works. What is his '
      'objection?',
      'b.  Why does investment alone fail to reduce traffic?'],
     ['a.  What does regressive mean, and what is elasticity of demand?',
      'b.  Distinguish a target from an instrument.'],
     ['Take a position in one sentence that keeps both effects.']),
   ['Elif is right about what works and Owen is right about who pays, and '
    'these are answers to different questions — one about the '
    'instrument, one about its distribution.',
    'The evidence on charging is not really contestable. Road space '
    'behaves like any other free good: expand supply and it fills, which '
    'is why investment alone leaves congestion flat. If the target is '
    'fewer cars, pricing is the only instrument that has reliably hit it.',
    'Owen’s objection is therefore not an argument for investment '
    'instead. It is an argument about what is done with the revenue. A '
    'charge whose proceeds are returned as a flat rebate, or spent on '
    'the services used by the people least able to avoid the charge, is '
    'progressive overall even though the charge itself is regressive. '
    'The harm he describes is caused by the design rather than by the '
    'instrument.',
    'So: charge, and hypothecate the revenue to night buses and outer-'
    'suburb services by means of a published formula rather than at a '
    'city’s discretion. Owen is right that this is usually promised '
    'and rarely delivered, which is a reason to bind it in the scheme '
    'rather than a reason not to charge.'],
   F(['a.  The response says the two speakers answer different questions. '
      'What are they?',
      'b.  Why insist on a published formula rather than a commitment?'],
     ['a.  "is progressive overall even though the charge itself is '
      'regressive" — why is the distinction between the charge and '
      'the scheme important?',
      'b.  "which is a reason to bind it in the scheme rather than a '
      'reason not to charge" — what move is this?']),
   ['I agree with Owen because road charges are unfair to poor people who '
    'have no alternative but to drive, especially those who work night '
    'shifts or live far from the city centre. Rich people will simply pay '
    'the charge and continue driving, so it does not even solve the '
    'problem, it just turns the roads into a privilege for the wealthy. '
    'Cities should invest in good public transport that is cheap and '
    'reliable, and then people will choose to leave their cars at home '
    'voluntarily.'],
   [('P1', [['a.  That the burden falls on those with the fewest '
             'alternatives, so the instrument achieves the target at the '
             'expense of the least able to adapt.'],
            ['b.  Because freed road space is immediately taken up by '
             'journeys that were previously deterred by congestion. '
             'Without a price, capacity gains convert into more driving '
             'rather than less.']]),
    ('P2', [['a.  Regressive means taking a larger share of income from '
             'poorer payers; elasticity of demand is how much consumption '
             'responds to price.'],
            ['b.  A target is the outcome sought; an instrument is the '
             'tool used to reach it. Owen’s objection is to the '
             'instrument’s incidence, not to the target.']]),
    ('P3', [['Model: "Charge, and return the revenue as services for the '
             'people with the fewest alternatives."']]),
    ('F1', [['a.  Which instrument reduces traffic, and how its costs are '
             'distributed. Elif answers the first and Owen the second, '
             'so neither refutes the other and a complete answer needs '
             'both.'],
            ['b.  Because Owen’s objection is empirically well '
             'founded — revenue promises are routinely broken. A '
             'formula written into the scheme is the only form of the '
             'commitment that survives a change of administration.']]),
    ('F2', [['a.  Because it separates the incidence of one payment from '
             'the incidence of the whole policy. A regressive charge '
             'inside a progressive scheme is a familiar and defensible '
             'design, and the distinction is what lets the response accept '
             'Owen’s facts without his conclusion.'],
            ['b.  It converts an objection into a design requirement. The '
             'risk is granted and relocated to the part of the proposal '
             'that can be fixed, which leaves nothing attached to the '
             'instrument itself.']]),
    ('F3', [['1.  "It does not even solve the problem" contradicts '
             'Elif’s evidence by assertion, and the claim that rich '
             'drivers simply pay is inconsistent with traffic falling '
             'within a year.'],
            ['2.  "Then people will choose to leave their cars at home '
             'voluntarily" ignores the induced-demand mechanism, which is '
             'the reason investment alone failed in the cities cited.'],
            ['3.  Nothing is said about revenue use, so the one available '
             'answer to the fairness objection is never considered; there '
             'is also a comma splice in the second sentence.']])]),

ad('AD 082', 'History of science · cause ranking',
   ('rank causes by which one made the others usable',
    'nominal clauses as complements', 'instrumentation, paradigm, replication, patronage',
    'ranking causes of a scientific advance'),
   'Dr Whitfield',
   'Why did experimental science develop so rapidly in seventeenth-century '
   'Europe? Candidate explanations include new instruments, new '
   'institutions such as scientific societies, and a philosophical shift '
   'towards experiment as a source of knowledge. Which was most important?',
   [('Mira', 'Instruments. The telescope and the air pump let people see '
     'things no argument could settle, and the arguments changed because '
     'the evidence did.'),
    ('Jakob', 'Instruments existed for decades before anyone built a '
     'practice around them. What was new was that a society of people '
     'agreed to witness, record and repeat each other’s experiments '
     '— that is the invention.')],
   P(['a.  Jakob’s objection has the same structure as a common '
      'objection in causal reasoning. Name it.',
      'b.  Why would the philosophical shift be hard to rank?'],
     ['a.  What is replication, and what is patronage?',
      'b.  What is instrumentation, and why is it more than apparatus?'],
     ['Rank the three in one sentence using a removal test.']),
   ['Jakob has the better of it, and the reason is that his candidate is '
    'what turned Mira’s into evidence.',
    'An instrument on its own settles nothing. A telescope shows one man '
    'four moons; what makes those moons a fact is that others build the '
    'same instrument, look, and agree. Before the societies, '
    'observations were testimony and could be denied as such — '
    'which is exactly what happened to the early telescopic claims.',
    'That the instruments came first does not make them primary. They '
    'were available for decades without producing cumulative knowledge, '
    'and nothing about the glass changed in the interval. What changed '
    'was the existence of a body that could certify a result, which is '
    'the condition under which an instrument becomes an argument.',
    'The philosophical shift I would place third, not because it was '
    'unimportant but because it is hard to separate from the practice it '
    'describes. People argued for experiment while building the societies '
    'that did it, and a cause that is partly the same event as its effect '
    'cannot be ranked against it. So: institutions first, instruments '
    'second as the necessary material condition, philosophy third as '
    'articulation rather than engine.'],
   F(['a.  The response ranks instruments second while calling them '
      'necessary. Why is that not a contradiction?',
      'b.  Why is the philosophical shift demoted on methodological '
      'rather than historical grounds?'],
     ['a.  "That the instruments came first does not make them primary" '
      '— identify the structure and say why it opens the paragraph.',
      'b.  "observations were testimony and could be denied as such" '
      '— what does this claim establish?']),
   ['In my opinion all three factors were essential and it is impossible '
    'to separate them because they developed together. New instruments '
    'allowed new observations, scientific societies allowed scientists to '
    'share their findings, and the new philosophy encouraged '
    'experimentation. Mira and Jakob are both partly right. The '
    'seventeenth century was a remarkable period of change in many areas '
    'of life, not only science, and I think the scientific revolution was '
    'part of this broader transformation of European society.'],
   [('P1', [['a.  A variation argument: the proposed cause was present '
             'before the effect appeared, so something else must account '
             'for the timing.'],
            ['b.  Because it is hard to distinguish from the practice it '
             'justified. If the shift and the institutions are the same '
             'development described two ways, neither can be the cause of '
             'the other.']]),
    ('P2', [['a.  Replication is independent repetition of an experiment '
             'to confirm its result; patronage is the funding and '
             'protection of enquiry by wealthy sponsors.'],
            ['b.  Instrumentation includes the techniques, calibration and '
             'conventions for using apparatus — which is Jakob’s '
             'point in different words.']]),
    ('P3', [['Model: "Remove the societies and observations stay '
             'testimony; remove the instruments and there is nothing to '
             'witness; remove the philosophy and the practice continues '
             'unarticulated."']]),
    ('F1', [['a.  Because necessity and primacy answer different '
             'questions. The instruments were indispensable and were '
             'already present, so they cannot explain why the change '
             'happened when it did — which is what the ranking is '
             'about.'],
            ['b.  Because the historical evidence cannot separate it from '
             'the institutions. Ranking requires that causes be '
             'independently identifiable, and this one is partly '
             'constituted by its supposed effect.']]),
    ('F2', [['a.  A nominal that-clause as subject. It lets the sentence '
             'take the opposing argument as its topic and dispose of it in '
             'one line, which is the cleanest way to open a paragraph that '
             'demotes a strong candidate.'],
            ['b.  That the problem was epistemic rather than technical. '
             'Testimony can be refused by anyone; a replicated result '
             'cannot, which is precisely the function the societies '
             'supplied.']]),
    ('F3', [['1.  It refuses to rank, which is what the prompt asks for, '
             'and "impossible to separate them" is asserted rather than '
             'argued.'],
            ['2.  Jakob’s specific objection — that instruments '
             'predate the practice by decades — is never addressed, '
             'so the strongest evidence in the discussion goes unused.'],
            ['3.  The final sentence is about the seventeenth century in '
             'general and contributes nothing to the question; "both '
             'partly right" is the whole of the engagement with either '
             'speaker.']])]),

ad('AD 083', 'Ethics · value trade-off',
   ('weigh a duty to the near against a duty to the distant',
    'correlative comparatives', 'obligation, impartiality, partiality, demandingness',
    'weighing special obligations against impartial ones'),
   'Dr Amari',
   'If a stranger’s life can be saved at small cost, many argue we are '
   'obliged to do so, and that distance is morally irrelevant. Others '
   'reply that such a principle would consume our lives and leaves no room '
   'for the attachments that give them meaning. Where should the line be?',
   [('Kai', 'The argument is sound and the discomfort is not a refutation. '
     'If you would pull a child from a pond, the fact that the child is in '
     'another country changes nothing morally.'),
    ('Noa', 'It changes everything practically. A principle that never '
     'stops demanding is not a moral theory, it is a recipe for burnout '
     'and for treating your own children as competing claims.')],
   P(['a.  Noa’s objection is about demandingness. Is that a moral '
      'objection or a psychological one?',
      'b.  Why does Kai use the pond case rather than arguing from '
      'principle?'],
     ['a.  What does impartiality mean here, and what is partiality?',
      'b.  What is a supererogatory act?'],
     ['Take a position in one sentence that gives each side something.']),
   ['Kai has the better argument and Noa has identified something his '
    'conclusion cannot accommodate, which means the principle needs a '
    'ceiling rather than a rejection.',
    'The pond case does its work. Distance, nationality and visibility '
    'are not morally relevant features, and no one defending partiality '
    'has produced a reason why they should be. The more honestly you look '
    'at the comparison, the harder it is to say the near child matters '
    'more.',
    'But Noa is not simply reporting discomfort. A principle with no '
    'upper bound makes every ordinary good — a holiday, a '
    'friendship, a child’s music lessons — into a wrong, and a '
    'theory on which almost every life is seriously immoral has lost '
    'contact with what it was built to explain. That is a philosophical '
    'objection, not a plea for comfort.',
    'So I would accept Kai’s principle as the ground of a duty and '
    'Noa’s point as a limit on its extent: a demanding but bounded '
    'obligation, specified as a share of income rather than as whatever '
    'is left over. The less open-ended the duty, the more likely it is '
    'to be met — which matters more to the distant child than the '
    'theoretical maximum ever has.'],
   F(['a.  The response insists Noa’s objection is philosophical '
      'rather than psychological. Why does that matter?',
      'b.  Why specify the duty as a share of income?'],
     ['a.  "The less open-ended the duty, the more likely it is to be '
      'met" — identify the structure and say what it adds.',
      'b.  "a holiday, a friendship, a child’s music lessons" '
      '— why these three examples?']),
   ['I agree with Kai that we have a duty to help people in need wherever '
    'they are, because all human beings have equal moral worth and it '
    'would be arbitrary to care less about someone just because they live '
    'far away. Of course Noa is right that we cannot give away '
    'everything, nobody is perfect and we all have our own families to '
    'look after. I think everyone should do what they reasonably can '
    'according to their circumstances.'],
   [('P1', [['a.  Moral, if it is pressed properly. A theory implying that '
             'nearly every life is seriously wrong has a problem with its '
             'own subject matter, which is a reason to doubt it rather '
             'than a report of how hard it feels.'],
            ['b.  Because it isolates the variable. Everyone agrees about '
             'the pond, so any difference in the distant case must come '
             'from a feature the pond case lacks — and those features '
             'look morally irrelevant.']]),
    ('P2', [['a.  Impartiality is giving everyone’s interests equal '
             'weight; partiality is the extra weight given to those close '
             'to us.'],
            ['b.  An act that is good but beyond what duty requires '
             '— the category Noa needs and Kai’s principle '
             'threatens to abolish.']]),
    ('P3', [['Model: "Accept the duty and cap it, because a bounded '
             'obligation is one people actually discharge."']]),
    ('F1', [['a.  Because a psychological complaint can be answered by '
             'telling people to try harder, while a structural objection '
             'to the theory cannot. Recasting it as philosophical is what '
             'earns Noa a modification of the principle rather than '
             'encouragement.'],
            ['b.  Because a proportional duty is bounded, assessable and '
             'leaves room for the attachments Noa is defending, while '
             '"whatever is left over" has no upper limit and so generates '
             'exactly the objection.']]),
    ('F2', [['a.  Correlative comparatives — the less X, the more Y. '
             'They state the practical relationship the whole proposal '
             'rests on, and they let the response end on a consequence for '
             'the distant child rather than on a concession to comfort.'],
            ['b.  Because they are ordinary and recognisably good, not '
             'luxuries. If the principle condemns friendship and a '
             'child’s music lessons, the objection cannot be '
             'dismissed as self-indulgence.']]),
    ('F3', [['1.  "Everyone should do what they reasonably can according '
             'to their circumstances" is unfalsifiable and sets no limit, '
             'so it takes no position on where the line falls.'],
            ['2.  "Nobody is perfect" treats Noa’s objection as being '
             'about human weakness, which is the weaker reading and the '
             'one Kai can easily answer.'],
            ['3.  Kai’s pond argument is accepted and its demanding '
             'implications are never faced, so the two halves of the '
             'response contradict each other without noticing.']])]),

ad('AD 084', 'Materials science · policy choice',
   ('choose the option that keeps the next decision open',
    'participial clauses', 'recycling, feedstock, degradation, lifecycle',
    'choosing between two waste strategies'),
   'Professor Zhou',
   'For plastic waste, a region can invest in mechanical recycling, which '
   'is cheap but degrades the material each cycle, or in chemical recycling, '
   'which recovers feedstock quality but is energy-intensive and '
   'commercially unproven. Which should receive public investment?',
   [('Ida', 'Mechanical. It works now, at scale, and most plastic waste is '
     'packaging that does not need virgin-quality material. Chemical '
     'recycling is a promise with a pilot plant.'),
    ('Rafa', 'Mechanical recycling just postpones disposal — four or '
     'five cycles and it is waste anyway. Investing in it locks in a '
     'system that cannot close the loop.')],
   P(['a.  Rafa concedes mechanical recycling works. What is his '
      'objection?',
      'b.  What does "locks in" mean, and why is it a serious charge?'],
     ['a.  What is feedstock, and what is degradation in this context?',
      'b.  What is a lifecycle assessment?'],
     ['Choose in one sentence that names what your choice keeps '
      'available.']),
   ['Ida should get the money now and Rafa should get it in the research '
    'budget, because the two claims operate on different timescales.',
    'Her case is simply that one technology exists. Mechanical recycling '
    'diverts material today at a cost per tonne that chemical processes '
    'will not match for years, and for packaging the quality loss is '
    'largely irrelevant. Waiting for the better option has a measurable '
    'cost in landfilled tonnes.',
    'Rafa’s lock-in point is the one that needs care. Having built '
    'sorting infrastructure, collection contracts and reprocessing plants '
    'around mechanical recycling, a region does acquire an interest in '
    'continuing with it, and that is a real risk rather than a '
    'speculative one. But most of that infrastructure — collection, '
    'sorting, washing — is needed by chemical recycling too. The '
    'lock-in is weaker than it looks because the shared half is the '
    'expensive half.',
    'So: fund mechanical recycling for deployment and chemical recycling '
    'for development, and procure sorting equipment specified to feed '
    'either. That takes the tonnes Ida can deliver now without '
    'foreclosing the system Rafa wants, which is the only part of his '
    'objection that money can answer.'],
   F(['a.  The response gives each speaker a different budget. Why is '
      'that not evasion?',
      'b.  Why does the shared infrastructure matter so much to the '
      'argument?'],
     ['a.  "Having built sorting infrastructure ... a region does acquire '
      'an interest" — what does the participial clause do?',
      'b.  "procure sorting equipment specified to feed either" — '
      'why is this the operative recommendation?']),
   ['I think we should invest in chemical recycling because it is the only '
    'real solution to the plastic crisis, which is one of the biggest '
    'environmental problems we face. Mechanical recycling is not true '
    'recycling because the plastic gets worse each time and eventually '
    'ends up in landfill or the ocean anyway. We need to think long term '
    'and invest in innovation rather than continuing with inadequate '
    'solutions. Ida says chemical recycling is unproven but all new '
    'technologies are unproven at first.'],
   [('P1', [['a.  That it cannot close the loop. Each cycle degrades the '
             'material, so the waste is deferred rather than eliminated, '
             'and investment in it entrenches a system with a built-in '
             'endpoint.'],
            ['b.  It means that investment creates sunk costs, contracts '
             'and interests that make later change expensive. It is '
             'serious because it turns a reasonable interim choice into a '
             'long-term constraint.']]),
    ('P2', [['a.  Feedstock is raw input material for manufacture; '
             'degradation is the loss of polymer properties with each '
             'reprocessing cycle.'],
            ['b.  An accounting of environmental impacts across a '
             'product’s whole life, from extraction to disposal '
             '— which is how the energy cost of chemical recycling '
             'gets compared with the tonnes mechanical recycling '
             'diverts.']]),
    ('P3', [['Model: "Deploy mechanical recycling now and fund chemical '
             'research, buying sorting equipment that can feed either."']]),
    ('F1', [['a.  Because deployment and development answer different '
             'questions, and the response says which gets which and why. '
             'Evasion would be funding both without specifying the role of '
             'each or addressing the lock-in risk.'],
            ['b.  Because lock-in is the whole of Rafa’s objection, '
             'and it depends on the investment being specific to one '
             'route. If the expensive assets serve both, the objection '
             'shrinks to the reprocessing plants themselves.']]),
    ('F2', [['a.  It compresses the causal history into the front of the '
             'sentence, so the sentence can state the consequence without '
             'a separate clause. That keeps the concession to Rafa brisk '
             'rather than laboured.'],
            ['b.  Because it is the one decision that actually preserves '
             'the option. Everything else in the proposal would be '
             'compatible with lock-in; specifying the sorting equipment is '
             'what prevents it.']]),
    ('F3', [['1.  "All new technologies are unproven at first" does not '
             'answer Ida’s point, which is about what can be '
             'deployed now against a measurable cost in landfilled '
             'tonnes.'],
            ['2.  "The only real solution" is asserted, with nothing about '
             'the energy cost that the prompt explicitly raises.'],
            ['3.  No account of lock-in, shared infrastructure, or how the '
             'two routes might be sequenced — so the policy question '
             'is answered by preference rather than by argument.']])]),
]
