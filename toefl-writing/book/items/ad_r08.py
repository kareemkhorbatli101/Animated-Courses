# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 048-053."""
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

ad('AD 048', 'Education · cause ranking',
   ('rank causes by which one the others run through',
    'cleft for emphasis', 'retention, workload, attrition, induction',
    'ranking causes of a workforce problem'),
   'Professor Adeyemi',
   'In many systems around a third of new teachers leave within five years. '
   'Proposed explanations include pay, workload and the quality of support '
   'in the first two years. Which explains most of the attrition?',
   [('Hana', 'Pay. Teaching competes with every other graduate employer, '
     'and the ones who leave mostly go somewhere that pays more for fewer '
     'hours. Everything else is a reason people give.'),
    ('Dmitri', 'Workload, and specifically its unpredictability. People '
     'tolerate long hours in plenty of professions. What they do not '
     'tolerate is having no control over which hours, which is what '
     'cover, marking deadlines and inspection cycles produce.')],
   P(['a.  Hana distinguishes real causes from stated reasons. Is that a '
      'fair move?',
      'b.  What does Dmitri add to "workload" that makes it a different '
      'claim?'],
     ['a.  What is attrition, and what is retention?',
      'b.  What is induction, and why is it usually the first thing cut?'],
     ['Rank the causes in one sentence using which one the others operate '
      'through.']),
   ['Hana is right that stated reasons are unreliable and Dmitri is right '
    'about what the stated reasons are tracking. But I think both are '
    'ranking causes of dissatisfaction rather than causes of leaving, and '
    'those come apart. Plenty of dissatisfied teachers stay for years. What '
    'distinguishes the ones who go is almost always that they have a '
    'concrete alternative and a moment at which acting on it is possible, '
    'and that is where the first two years matter.',
    'It is the support in those years, not the pay or the workload, that '
    'determines whether someone acquires the thing that makes the job '
    'bearable — a working method, a department that covers for them, a '
    'sense that next year will be easier. Without it the workload Dmitri '
    'describes never becomes predictable, because predictability is '
    'something you build rather than something you are given, and pay then '
    'does the work Hana attributes to it. So I would rank induction first, '
    'workload second as the thing induction is supposed to make survivable, '
    'and pay third: the mechanism by which people leave rather than the '
    'reason they want to.'],
   F(['a.  The response distinguishes two things usually treated as one. '
      'What are they?',
      'b.  Pay is ranked last and called a mechanism. What does that mean?'],
     ['a.  "It is the support in those years, not the pay or the workload, '
      'that determines ..." — name the device.',
      'b.  "predictability is something you build rather than something you '
      'are given" — what does this claim do to Dmitri’s position?']),
   ['I think all three factors are important because teaching is a very '
    'difficult profession today. Teachers are not paid enough for the '
    'responsibility they have, they work in the evenings and at weekends '
    'correcting homework and preparing lessons, and young teachers are often '
    'left alone without any support in their first year. Society should '
    'value teachers more because they are educating the next generation and '
    'this is one of the most important jobs. Governments should increase '
    'salaries and reduce the administrative burden so that good teachers '
    'stay in the profession.'],
   [('P1', [['a.  Yes, and it is a real methodological point: exit '
             'interviews collect socially acceptable reasons. But it cuts '
             'both ways — pay is also the most acceptable thing to '
             'say, so the same objection applies to her own answer.'],
            ['b.  Variance rather than volume. Long hours you control are a '
             'different thing from long hours imposed at short notice, and '
             'only the second produces the loss of autonomy that drives '
             'people out.']]),
    ('P2', [['a.  Attrition is the rate of leaving; retention is the share '
             'who stay. They are complements, but policies are usually '
             'designed for one and measured by the other.'],
            ['b.  Structured support for new entrants — mentoring, '
             'reduced timetable, observation. It is cut first because its '
             'benefit appears three years later and its cost appears now.']]),
    ('P3', [['Model: "Pay and workload cause dissatisfaction, but it is the '
             'first two years that determine whether anyone acquires the '
             'means to tolerate them."']]),
    ('F1', [['a.  Causes of dissatisfaction and causes of leaving. People '
             'can be dissatisfied for a decade without acting; what converts '
             'dissatisfaction into departure is a separate question that '
             'neither classmate asks.'],
            ['b.  That pay is how the departure happens — it provides '
             'the alternative and the comparison — rather than why the '
             'person wanted to go. Mechanisms matter for policy, but '
             'confusing them with motives produces the wrong remedy.']]),
    ('F2', [['a.  An it-cleft (family 8, structure 59). It is needed because '
             'the sentence is correcting a ranking: the cleft sets support '
             'against pay and workload explicitly rather than merely '
             'asserting a new first place.'],
            ['b.  It accepts his diagnosis and relocates the remedy. If '
             'predictability is built by acquiring method and support, then '
             'unpredictable workload is a symptom of inadequate induction '
             'rather than an independent cause — which is why it ranks '
             'second rather than first.']]),
    ('F3', [['1.  It refuses to rank, and then adds no analysis of its own.'],
            ['2.  Hana’s point about stated reasons and Dmitri’s '
             'about unpredictability — the only two arguments in the '
             'discussion — are both absent.'],
            ['3.  "Society should value teachers more" and "educating the '
             'next generation" are sentiment standing where the argument '
             'should be. Language: "the responsibility they have", "the next '
             'generation", "the profession" over-articled; "correcting '
             'homework" should be "marking".']])]),

ad('AD 049', 'Technology and AI · policy choice',
   ('ask what the rule costs the people it is meant to protect',
    'conditional qualification', 'consent, data minimisation, friction, opt-out',
    'arguing about a protective rule that may not protect'),
   'Dr Sorensen',
   'Privacy regulation typically requires websites to obtain consent before '
   'collecting data. In practice this produces consent banners that almost '
   'everyone accepts without reading. Should consent remain the basis of '
   'data protection?',
   [('Lena', 'No. Consent that nobody reads is not consent, and the banner '
     'has become a way of transferring responsibility to the user. The basis '
     'should be what a company is permitted to do, not what it can get '
     'somebody to click.'),
    ('Omar', 'I would keep consent but fix its implementation. Removing it '
     'means somebody else decides what data about me may be collected, and '
     'the record of regulators making that judgement well is not '
     'encouraging.')],
   P(['a.  Omar is not defending the banners. What is he defending?',
      'b.  Lena’s objection is about effectiveness. Does Omar deny '
      'it?'],
     ['a.  What is data minimisation, and how does it differ from consent?',
      'b.  What is friction, and why is it sometimes protective?'],
     ['State what both would accept, in one sentence, and what follows.']),
   ['Both accept that the banners fail and disagree about what replaces '
    'them, and Omar’s worry is the one usually waved away. He is not '
    'defending consent as practised; he is pointing out that the '
    'alternative concentrates the judgement somewhere, and a regulator who '
    'decides what may be collected about everyone is a larger target than a '
    'user who decides for themselves badly.',
    'What resolves it is that the two are not exclusive. The reason consent '
    'is doing so much work is that almost everything is permitted if the '
    'user agrees, so the banner is the only control point. Set a floor of '
    'prohibited collection regardless of consent — as Lena wants '
    '— and consent then governs only the territory above it, which is '
    'small enough that a meaningful choice could actually be presented. That '
    'gives Omar his individual judgement where individual judgement is '
    'appropriate, and removes it from the cases where nobody’s click '
    'should make a difference. The banner is a symptom of a rule that '
    'permits too much, not an argument against asking people what they '
    'want.'],
   F(['a.  The response says the banner is "a symptom". Of what?',
      'b.  What does the proposal give each classmate?'],
     ['a.  "a larger target than a user who decides for themselves badly" '
      '— what is the implied argument?',
      'b.  "small enough that a meaningful choice could actually be '
      'presented" — why is this the key clause?']),
   ['I completely agree with Lena because these cookie banners are '
    'absolutely useless and everybody just clicks accept to make them '
    'disappear. Nobody has time to read pages of legal text for every '
    'website they visit, and anyway the companies write them in a way that '
    'nobody can understand. They collect our data and sell it to '
    'advertisers and we have no real control over it. Governments should '
    'simply prohibit the collection of personal data without a real '
    'necessity, instead of making us click on these annoying windows all '
    'day.'],
   [('P1', [['a.  Individual decision rights — the principle that the '
             'person the data is about should have a say, as distinct from '
             'the banner as a mechanism.'],
            ['b.  No. He concedes the implementation is broken and argues '
             'about what replaces it, which is why Lena’s evidence does '
             'not reach him.']]),
    ('P2', [['a.  Data minimisation limits collection to what is necessary '
             'for a stated purpose, regardless of permission. Consent asks '
             'whether the person agrees. One constrains the company, the '
             'other the user.'],
            ['b.  Anything that makes an action take more effort. It is '
             'protective when it slows a choice people would regret making '
             'quickly — though a banner adds friction without adding '
             'deliberation, which is why it fails.']]),
    ('P3', [['Model: "Both accept the banners fail, so the question is '
             'whether consent should govern everything or only what survives '
             'a floor of prohibited collection."']]),
    ('F1', [['a.  Of a permissive underlying rule. If consent can authorise '
             'almost anything, it becomes the only place where any control '
             'is exercised, and the pressure on it produces the banner.'],
            ['b.  Lena gets collection limits that do not depend on anyone '
             'reading anything; Omar keeps individual choice over the '
             'residual, where it is both meaningful and reviewable.']]),
    ('F2', [['a.  That errors by a central decision-maker are correlated and '
             'affect everyone, while errors by individuals are distributed '
             'and partly cancel — the same structural argument that '
             'appeared about model error in AD 019.'],
            ['b.  Because it explains why the proposal fixes consent rather '
             'than abandoning it. A choice over a small, comprehensible '
             'domain can be a real choice; the banner fails precisely '
             'because the domain is unbounded.']]),
    ('F3', [['1.  It agrees with Lena and never engages Omar, whose '
             'objection — that removing consent relocates the judgement '
             '— is the only argument against her position.'],
            ['2.  "Prohibit collection without a real necessity" is '
             'precisely Lena’s proposal restated, with "real necessity" '
             'left undefined, so nothing is contributed.'],
            ['3.  "They collect our data and sell it to advertisers" is '
             'asserted without qualification and is not uniformly true. '
             'Language: "the companies", "our data", "these annoying '
             'windows" — register drops to the conversational, and '
             '"absolutely useless" is editorial.']])]),

ad('AD 050', 'Media and communication · value trade-off',
   ('ask what each option does to the thing nobody is measuring',
    'contrastive whereas', 'paywall, reach, sustainability, public good',
    'weighing access against survival'),
   'Dr Oyelowo',
   'Many newspapers have moved behind paywalls, which has stabilised their '
   'finances but reduced readership. Others remain free and depend on '
   'advertising. Which matters more for journalism — reaching the '
   'largest audience, or being paid for by its readers?',
   [('Sofia', 'Being paid by readers. Advertising funding makes the reader '
     'the product and rewards whatever holds attention, which is how we got '
     'the current mess. A paywall aligns the paper with the people who read '
     'it.'),
    ('Ben', 'Reach, because journalism that nobody outside the subscribing '
     'class reads is not doing the job. The accountability function works '
     'through being widely known, not through being well funded. A paywalled '
     'investigation that three thousand people read changes nothing.')],
   P(['a.  Sofia argues about incentives and Ben about function. Can both '
      'be right?',
      'b.  What does Ben mean by the accountability function?'],
     ['a.  What is a public good, and is journalism one?',
      'b.  Distinguish reach from engagement.'],
     ['State the trade-off in one sentence that does not favour either '
      'side.']),
   ['Both are right and they are describing different products. Sofia is '
    'describing journalism as a service to its readers, which a '
    'subscription funds well; Ben is describing journalism as a check on '
    'power, which works through what everybody knows and cannot be funded by '
    'the people who benefit from it, because they are everybody. The first '
    'is a club good and the second is a public good, and expecting one '
    'funding model to produce both is the mistake.',
    'That suggests the question is not which matters more but which part of '
    'the output should sit where. Several papers already do something like '
    'this, dropping the paywall on a story once it matters — which is '
    'an admission that the two functions have different economics. The '
    'honest version would be to decide in advance: investigations and '
    'anything bearing on a public decision outside the wall, everything else '
    'inside it. Sofia’s incentive argument then still holds for the '
    'funded part, whereas Ben’s reach argument governs the part that '
    'has to be free — and the cost of that free part is a subsidy the '
    'subscribers pay, which is worth saying out loud.'],
   F(['a.  The response uses two economic terms to split the question. '
      'What work do they do?',
      'b.  The last clause says the subscribers pay a subsidy. Why end '
      'there?'],
     ['a.  "whereas Ben’s reach argument governs the part that has to '
      'be free" — why "whereas"?',
      'b.  "which is an admission that the two functions have different '
      'economics" — what does calling it an admission achieve?']),
   ['In my opinion quality journalism cannot be free because journalists '
    'need to be paid and investigations are very expensive to produce. If '
    'everything is free then newspapers have to depend on advertising and '
    'clickbait, which destroys the quality of the information. Of course it '
    'is a problem that poorer people cannot afford subscriptions, so maybe '
    'there could be reduced prices for students and low-income readers. But '
    'in general I think readers must understand that good journalism has a '
    'cost and that if they want it they have to pay for it.'],
   [('P1', [['a.  Yes. One is a claim about what funding does to editorial '
             'incentives; the other about what readership does to '
             'journalism’s civic effect. Neither contradicts the '
             'other.'],
            ['b.  That journalism constrains those in power by making their '
             'conduct widely known — which depends on circulation '
             'rather than on revenue.']]),
    ('P2', [['a.  A good that is non-excludable and non-rival — nobody '
             'can be kept from the benefit and one person’s use does '
             'not reduce another’s. The accountability effect of '
             'journalism is one; the article itself need not be.'],
            ['b.  Reach is how many are exposed; engagement is what they do '
             'with it. Ben’s argument needs only reach.']]),
    ('P3', [['Model: "A subscription funds journalism well and a paywall '
             'defeats the part of it that works by being widely known."']]),
    ('F1', [['a.  They convert a values dispute into a classification one. '
             'Once the output is split into a club good and a public good, '
             'the funding question has a different answer for each, and the '
             'apparent conflict dissolves.'],
            ['b.  Because it is the uncomfortable consequence the proposal '
             'carries, and declining to state it would make the solution '
             'look costless. Naming who pays is what distinguishes a policy '
             'from a wish.']]),
    ('F2', [['a.  Because both clauses are being asserted as true of '
             'different domains — straight contrast, not concession. '
             'Neither argument is being given up, which is the whole point '
             'of the split.'],
            ['b.  It turns existing practice into evidence for the '
             'argument. Papers that drop the wall on important stories are '
             'already behaving as though the two functions differ, which is '
             'far stronger than asserting the distinction theoretically.']]),
    ('F3', [['1.  It never engages Ben, whose argument is that funded '
             'journalism nobody reads fails at its main job — cost is '
             'not his objection.'],
            ['2.  The concession about poorer readers is treated as a '
             'pricing problem, which misses the point: the issue is the '
             'public effect of the reporting, not the affordability of the '
             'product.'],
            ['3.  "Readers must understand that good journalism has a cost" '
             'is an exhortation rather than an argument. Language: "the '
             'quality of the information", "the information" over-articled; '
             '"clickbait" is used as an explanation rather than described.']])]),

ad('AD 051b', 'Law and ethics · agree or disagree with a claim',
   ('check what a comparison between two systems holds constant',
    'counterfactual would have', 'adversarial, inquisitorial, conviction rate, due process',
    'disagreeing about a system you have not lived under'),
   'Dr Ferreira',
   'It is sometimes argued that inquisitorial systems, in which a judge '
   'directs the investigation, produce more accurate verdicts than '
   'adversarial ones, in which two parties contest the evidence. How '
   'convincing is this?',
   [('Anders', 'Fairly convincing. An adversarial trial is a contest '
     'between unequally resourced parties, and the better-funded side wins '
     'more often than the truth does. A judge who directs the investigation '
     'has no client.'),
    ('Priya', 'That compares an idealised inquisitorial judge with a real '
     'adversarial lawyer. A judge who both investigates and decides has '
     'nobody checking the line of inquiry they chose not to pursue, and the '
     'failures of inquisitorial systems are exactly that.')],
   P(['a.  Priya accuses Anders of a specific comparison error. Name it.',
      'b.  What evidence would actually settle the question?'],
     ['a.  Distinguish adversarial from inquisitorial.',
      'b.  Why is conviction rate a poor measure of accuracy?'],
     ['State the comparison error in one sentence and what it implies.']),
   ['Priya has identified the error that makes most of this debate '
    'unproductive: each side compares its own system as designed with the '
    'other as practised. Anders is right that resource inequality distorts '
    'adversarial trials; Priya is right that an investigating judge '
    'concentrates the choice of line of inquiry in one unreviewed place. '
    'Both failures are real and neither follows from the design.',
    'What would settle it is not available in the form the question '
    'assumes. We cannot observe accuracy directly, because the ground truth '
    'is exactly what the trial was trying to establish. The usable proxies '
    '— exoneration rates, appellate reversal, retrial outcomes '
    '— are themselves artefacts of how easy each system makes it to '
    'reopen a case, and inquisitorial systems tend to make it harder. Had '
    'the two produced identical error rates, the adversarial one would still '
    'report more errors, because it is built to surface them. That is not a '
    'reason to prefer either, but it is a reason to distrust every '
    'comparison that has been offered in either direction.'],
   F(['a.  The response refuses to decide. Why is that not a failure to '
      'take a position?',
      'b.  What is the argument about the proxies?'],
     ['a.  "Had the two produced identical error rates, the adversarial one '
      'would still report more errors" — what does the counterfactual '
      'demonstrate?',
      'b.  "each side compares its own system as designed with the other as '
      'practised" — why is this formulation efficient?']),
   ['I think the inquisitorial system is better because the judge is '
    'neutral and looks for the truth, while in the adversarial system the '
    'lawyers only want to win their case and they can hide evidence that is '
    'not favourable to their client. Also rich defendants can pay expensive '
    'lawyers and get better results, which is not fair for poor people who '
    'depend on public defenders. Priya says that the judge can also make '
    'mistakes but at least there is no conflict of interest, and judges are '
    'professionals who are trained to be objective.'],
   [('P1', [['a.  Comparing the ideal form of one system with the actual '
             'operation of the other — sometimes called the nirvana '
             'fallacy.'],
            ['b.  A measure of accuracy independent of the systems '
             'themselves, which is precisely what does not exist — the '
             'response’s second paragraph.']]),
    ('P2', [['a.  In an adversarial system two parties investigate and '
             'contest, and the judge arbitrates. In an inquisitorial one the '
             'judge directs the investigation and the parties have a '
             'narrower role.'],
            ['b.  Because it confounds how many guilty people are convicted '
             'with how many innocent ones are, and both move with '
             'prosecutorial discretion rather than with trial accuracy.']]),
    ('P3', [['Model: "Each side is comparing its own system as designed '
             'with the other as practised, which guarantees that whichever '
             'system you start from wins."']]),
    ('F1', [['a.  Because it takes a definite position about the evidence '
             '— that the available comparisons are systematically '
             'biased and cannot support either conclusion. That is a claim '
             'with content, and it is argued for. Declining to answer an '
             'unanswerable question is only evasion if you do not show it is '
             'unanswerable.'],
            ['b.  That exoneration and reversal rates measure how easy a '
             'system makes it to reopen a case, not how often it was wrong. '
             'A system that surfaces its errors will look worse than one '
             'that conceals them, independently of accuracy.']]),
    ('F2', [['a.  That the measurement bias exists even in the case where '
             'the two systems are equally accurate — which isolates the '
             'artefact from any real difference and shows it cannot be '
             'corrected by better data of the same kind.'],
            ['b.  It names the error once, abstractly, in a form that '
             'applies to both classmates simultaneously. Diagnosing both '
             'positions in a single clause is far more economical than '
             'answering each in turn, and it is more even-handed.']]),
    ('F3', [['1.  It commits exactly the error Priya identified — the '
             'neutral truth-seeking judge is the idealised version, set '
             'against lawyers described at their worst.'],
            ['2.  Her actual objection, that nobody reviews the line of '
             'inquiry the judge did not pursue, is answered with "judges are '
             'trained to be objective", which assumes away the structural '
             'point.'],
            ['3.  "They can hide evidence" is a serious claim made without '
             'qualification, and disclosure obligations go unmentioned. '
             'Language: "the lawyers", "the truth", "poor people who depend '
             'on public defenders" — and "not fair for" should be '
             '"unfair to".']])]),

ad('AD 052', 'Psychology and society · agree or disagree with a claim',
   ('ask whether the effect survives the obvious confound',
    'hedged generalisation', 'correlation, confound, self-selection, dose-response',
    'assessing a claim people want to be true'),
   'Dr Almeida',
   'Studies regularly report that people who take part in community '
   'activities — choirs, sports clubs, volunteering — are '
   'healthier and happier. It is often concluded that such activity should '
   'be prescribed. How convincing is the inference?',
   [('Lucas', 'Not very. Healthier and more sociable people join choirs. '
     'The arrow almost certainly runs the other way, or both ways, and '
     'prescribing membership to someone who is unwell and isolated is not '
     'the same experiment.'),
    ('Nadia', 'The self-selection point is right but it is not the whole '
     'story. There are trials where people were allocated to activity '
     'rather than choosing it, and the effects are smaller but they are '
     'there. The question is whether smaller is still worth doing.')],
   P(['a.  Nadia concedes Lucas’s objection. What does she then do '
      'with it?',
      'b.  Why does allocation rather than choice change what the study '
      'measures?'],
     ['a.  What is self-selection, and what is a dose-response '
      'relationship?',
      'b.  Why does an effect getting smaller under randomisation support '
      'rather than undermine the causal claim?'],
     ['State what the trials show in one sentence that neither overstates '
      'nor dismisses.']),
   ['Nadia has the better of this because she has the evidence that '
    'addresses Lucas’s objection rather than merely acknowledging it. '
    'Randomised allocation removes the self-selection he identifies, and a '
    'surviving effect, however reduced, is evidence of causation in a way '
    'that no amount of observational data could be. The shrinkage is itself '
    'informative: it is roughly what you would expect if selection accounted '
    'for most but not all of the association.',
    'Where I would be more cautious than either is about what is being '
    'prescribed. The trials allocate people to an activity; prescription '
    'allocates them to an activity they have been told is good for them by '
    'a clinician, which is a different intervention and may be a worse one. '
    'Something that works because it is chosen tends not to survive becoming '
    'an instruction — and the mechanism everyone proposes, that these '
    'activities supply relationships, is precisely the kind of thing that '
    'depends on wanting to be there. So I would accept the causal claim and '
    'treat the delivery question as unsettled, which is roughly where the '
    'evidence actually is and considerably less than the policy assumes.'],
   F(['a.  The response distinguishes the trials from the policy. On what '
      'basis?',
      'b.  Why does it say the shrinkage is "itself informative"?'],
     ['a.  "tends not to survive becoming an instruction" — what does '
      'the hedge protect?',
      'b.  "considerably less than the policy assumes" — what does '
      'this final clause do?']),
   ['I think this is obviously true because everybody knows that social '
    'contact is good for mental health, especially for elderly people who '
    'are often isolated and lonely. Singing in a choir or playing sport also '
    'gives physical exercise and a sense of belonging to a group, which are '
    'both very important for wellbeing. Lucas says that healthy people join '
    'these activities but I think this is only partly true because many '
    'people start when they are already in difficulty and they improve a '
    'lot. Doctors should definitely prescribe these activities instead of '
    'giving antidepressants to everybody.'],
   [('P1', [['a.  Accepts it as an explanation of most of the association '
             'and then produces the evidence that is immune to it, which is '
             'how an objection should be answered.'],
            ['b.  Because allocation breaks the link between the '
             'participant’s prior health and their presence in the '
             'activity, so any remaining difference cannot be explained by '
             'who chose to join.']]),
    ('P2', [['a.  Self-selection is people choosing into a group for reasons '
             'related to the outcome. A dose-response relationship is more '
             'exposure producing more effect, which is some evidence of '
             'causation.'],
            ['b.  Because it is what you would predict if the observational '
             'estimate was inflated by selection: removing the selection '
             'should shrink the effect without eliminating it. An unchanged '
             'effect would be more suspicious, not less.']]),
    ('P3', [['Model: "Allocation studies show a real but considerably '
             'smaller effect than the observational ones, which is what you '
             'would expect if selection explained most of the gap."']]),
    ('F1', [['a.  On what is actually administered. The trial gives people '
             'an activity; prescription gives them an activity plus a '
             'clinical instruction, and the proposed mechanism '
             '— relationships — is one that instruction may '
             'undermine.'],
            ['b.  Because the size of the change carries information about '
             'the structure of the original association. It is not merely a '
             'weaker result; it is the result you would have predicted on '
             'Lucas’s hypothesis, which makes it unusually strong '
             'evidence.']]),
    ('F2', [['a.  Against the obvious counter-example — plenty of '
             'prescribed things work. The claim is about a tendency in '
             'interventions whose mechanism is voluntary engagement, and the '
             'hedge keeps it there.'],
            ['b.  It converts an academic qualification into a criticism of '
             'practice, and it does so without a separate sentence. The '
             'response ends on a judgement about the policy rather than on a '
             'summary of the evidence.']]),
    ('F3', [['1.  "Obviously true because everybody knows" is precisely the '
             'reasoning the discussion was questioning, and Nadia’s '
             'trial evidence — the only thing that answers Lucas '
             '— is never mentioned.'],
            ['2.  The rebuttal of Lucas is an anecdotal claim ("many people '
             'start when they are already in difficulty") offered against a '
             'statistical objection it cannot touch.'],
            ['3.  "Instead of giving antidepressants to everybody" is a '
             'policy conclusion about a different treatment that nothing in '
             'the response supports. Language: "elderly people", "a sense of '
             'belonging to a group", "these activities" — and "very '
             'important for wellbeing" is filler.']])]),

ad('AD 053', 'Urban planning and transport · agree or disagree with a claim',
   ('test a claim against the case it was not built from',
    'conditional qualification', 'density, amenity, catchment, viability',
    'disagreeing with a model that works somewhere else'),
   'Professor Lindqvist',
   'The "fifteen-minute city" proposes that daily needs should be reachable '
   'within a short walk or cycle. Supporters point to reduced car dependence '
   'and stronger local economies; critics say it works only in places that '
   'are already dense and already wealthy. How far does the idea travel?',
   [('Marta', 'It travels further than critics allow. The principle is '
     'about where things are put, not about how rich the area is — a '
     'school, a surgery and a shop within a walk is a planning decision, and '
     'plenty of poor dense neighbourhoods already have it.'),
    ('Oskar', 'The binding constraint is not planning, it is viability. A '
     'shop needs a catchment that spends. In a low-income low-density area '
     'you can zone for a high street all you like and nothing will open.')],
   P(['a.  Marta and Oskar each identify a constraint. Which, '
      'respectively?',
      'b.  Does Marta’s counter-example answer Oskar?'],
     ['a.  What is a catchment, and what makes a use viable?',
      'b.  What is amenity, and how is it different from infrastructure?'],
     ['State the condition under which each is right, in one sentence.']),
   ['Marta is right about dense poor neighbourhoods and Oskar is right '
    'about sparse ones, and her counter-example is doing the work his '
    'argument predicts. A dense low-income area has a catchment: not much '
    'money per household, but enough households within walking distance to '
    'support a shop. So the two constraints are not rivals — density '
    'supplies the catchment, income determines what kind of use it '
    'supports, and the model needs the first much more than the second.',
    'That matters because it tells you where the idea fails, which is '
    'neither of the cases they are arguing about. It fails in low-density '
    'suburbs of any income, where no amount of zoning produces a catchment '
    'within a walk and the honest answer is either to accept car dependence '
    'or to change the density, which is a far larger intervention than the '
    'fifteen-minute framing suggests. Presented as a planning idea it sounds '
    'cheap; applied where it is most needed it is a redevelopment '
    'programme, and that is the thing its advocates tend not to say.'],
   F(['a.  The response reconciles the two by separating two variables. '
      'Which?',
      'b.  It then identifies a third case. Why is that the contribution?'],
     ['a.  "her counter-example is doing the work his argument predicts" '
      '— unpack this.',
      'b.  "Presented as a planning idea it sounds cheap" — what is '
      'the criticism?']),
   ['I think the fifteen-minute city is a very good idea because it reduces '
    'car use and pollution and it makes neighbourhoods more human and '
    'liveable. People would spend less time in traffic and more time with '
    'their families, and local businesses would benefit from having more '
    'customers nearby. Of course it is easier to implement in dense European '
    'cities than in American suburbs, but I think every city should try to '
    'move in this direction as much as possible, with better public '
    'transport and more mixed-use zoning.'],
   [('P1', [['a.  Marta identifies planning decisions — where things '
             'are put. Oskar identifies commercial viability — whether '
             'a use can survive once put there.'],
            ['b.  Partly, and not in the way she intends. Dense poor areas '
             'have shops because density supplies the catchment, which is '
             'consistent with his argument rather than against it.']]),
    ('P2', [['a.  A catchment is the population a use can draw on. '
             'Viability is whether revenue from that catchment covers '
             'costs.'],
            ['b.  Amenity is the day-to-day facilities that make a place '
             'usable — shops, parks, surgeries. Infrastructure is the '
             'network beneath them. The fifteen-minute idea is about '
             'amenity, which is why it is cheaper to assert than to '
             'deliver.']]),
    ('P3', [['Model: "Density supplies the catchment and income determines '
             'what it supports, so the model needs density far more than '
             'wealth."']]),
    ('F1', [['a.  Density and income, which the debate treats as a single '
             'variable called deprivation. Once separated, Marta’s '
             'cases and Oskar’s stop contradicting each other.'],
            ['b.  Because both classmates are arguing about dense areas, '
             'where the model works, and about whether poverty prevents it. '
             'The case where it genuinely fails — low density at any '
             'income — is the one neither raises, and it is where most '
             'of the population the policy is aimed at actually lives.']]),
    ('F2', [['a.  She offers dense poor neighbourhoods as evidence against '
             'his viability argument, but the thing that makes those '
             'neighbourhoods work is density, which is the mechanism his '
             'argument runs on. Her counter-example confirms his model while '
             'appearing to refute it.'],
            ['b.  That the framing conceals the cost. Describing it as a '
             'planning principle implies the work is rezoning, when in the '
             'places it is most needed the work is rebuilding at higher '
             'density — which is a different scale of commitment and '
             'tends to go unmentioned.']]),
    ('F3', [['1.  It lists benefits nobody disputed and never engages '
             'Oskar’s viability argument, which is the only objection '
             'on the table.'],
            ['2.  "Easier in dense European cities than in American '
             'suburbs" brushes against the real distinction and then drops '
             'it without analysis.'],
            ['3.  "Every city should try to move in this direction as much '
             'as possible" is a recommendation with no content, and "more '
             'human and liveable" is doing the work evidence should. '
             'Language: "local businesses", "the fifteen-minute city" is '
             'fine but "more time with their families" is sentiment rather '
             'than argument.']])]),
]
