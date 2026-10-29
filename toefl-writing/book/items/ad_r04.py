# -*- coding: utf-8 -*-
"""Academic Discussion practice: AD 024-029."""
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

ad('AD 024', 'Psychology and society · cause ranking',
   ('prefer the cause that explains the timing',
    'causal chain with result clauses', 'cohort effect, period effect, self-report, salience',
    'ranking causes for a trend everyone has a theory about'),
   'Dr Almeida',
   'Across many countries, the age at which people form long-term '
   'partnerships and have children has risen steadily. Explanations offered '
   'include housing costs, longer education, and changed expectations about '
   'what a relationship should be. Which best explains the shift?',
   [('Tove', 'Housing. The age curve tracks the price-to-income ratio '
     'almost everywhere, and it moved in the countries where housing moved. '
     'Expectations are downstream of being unable to afford a spare room.'),
    ('Hugo', 'Education and the labour market it feeds. People finish '
     'training later, start earning later, and move cities more often in '
     'their twenties. Housing is part of that story but it is not the '
     'engine.')],
   P(['a.  Both cite timing. What would decide between two causes that both '
      'move at roughly the right moment?',
      'b.  What is the third explanation doing in the question, and why do '
      'neither of them take it seriously?'],
     ['a.  Distinguish a cohort effect from a period effect.',
      'b.  Why is "expectations" the hardest of the three to measure?'],
     ['Rank the causes in one sentence using a case where they come apart.']),
   ['The way to choose between Tove and Hugo is to find somewhere the two '
    'come apart, and they do. Countries with cheap housing and long '
    'education — much of eastern Europe through the 2000s — still '
    'show the shift, which is hard for Tove; countries where education '
    'lengths were stable but housing costs tripled show it too, which is '
    'hard for Hugo. A cause present in both arms of that comparison is doing '
    'the work, and the obvious candidate is the one neither of them will '
    'touch.',
    'Changed expectations is treated as soft because it is self-reported, '
    'but it has a hard version: the expected duration of the commitment '
    'rose. When a partnership is expected to last and to involve equal '
    'careers, the cost of choosing wrongly rises, with the result that '
    'people search longer. That predicts exactly what we see — later '
    'first partnership, not fewer partnerships — and it predicts it in '
    'rich and poor housing markets alike. I would put expectations first, '
    'education second as the thing that supplies the opportunity to search, '
    'and housing third: a real constraint, but one that should produce '
    'different living arrangements rather than later ones, and largely does.'],
   F(['a.  The response uses a comparison to break a tie. Reconstruct it in '
      'one sentence.',
      'b.  It rescues the explanation both classmates dismissed. How?'],
     ['a.  "with the result that people search longer" — why a result '
      'clause rather than "so"?',
      'b.  "the one neither of them will touch" — what is the effect of '
      'withholding the name until the next paragraph?']),
   ['I think that all these reasons contribute to this phenomenon which we '
    'can observe in many countries today. Of course housing is very '
    'expensive now and young people cannot buy an apartment like their '
    'parents did at the same age, so they postpone having a family. Also '
    'they study for many years and they want to build their career first '
    'before thinking about children. And society has changed a lot, young '
    'people today want to enjoy their freedom and travel before they settle '
    'down. In my opinion governments should help young families with '
    'subsidies and affordable housing so they can start a family earlier.'],
   [('P1', [['a.  A case where one is present and the other absent. If the '
             'trend appears when only one cause is present, that one is '
             'doing the work; if it appears in both, something common to '
             'both is.'],
            ['b.  It is the explanation that cannot be measured with '
             'administrative data, so both reach for the variables that come '
             'with statistics. That is a selection effect in the argument '
             'rather than in the world, and the response exploits it.']]),
    ('P2', [['a.  A cohort effect is a lasting difference between people '
             'born at different times; a period effect hits everyone alive '
             'at a given moment regardless of age. Housing shocks are '
             'period effects; changed expectations look more like cohort '
             'ones.'],
            ['b.  Because it is available only through self-report, and '
             'what people say they expect is shaped by what is currently '
             'normal — so the measure moves with the outcome it is '
             'meant to explain.']]),
    ('P3', [['Model: "The shift appears in places with cheap housing and in '
             'places with short education, so whatever is common to both '
             '— the rising cost of choosing wrongly — is the '
             'better candidate."']]),
    ('F1', [['a.  The trend appears both where housing is cheap and where '
             'education is short, so neither alone can be the engine, and '
             'the cause common to both cases is the one to look for.'],
            ['b.  By giving it a version that is not self-reported: not '
             '"people want different things" but "the expected duration and '
             'symmetry of the commitment rose, which raises the cost of '
             'error". That is a structural claim with testable '
             'consequences.']]),
    ('F2', [['a.  Because the argument needs the longer search to follow '
             'determinately from the raised cost of error. A result clause '
             'asserts that connection; "so" would leave it as a loose '
             'association, and the whole ranking depends on it holding.'],
            ['b.  It creates a small gap the reader fills themselves, and '
             'the reader almost always fills it correctly — which means '
             'the third explanation arrives as their own thought rather '
             'than as the writer’s assertion. It also marks the '
             'paragraph break as a turn.']]),
    ('F3', [['1.  It refuses to rank, listing all three with equal weight.'],
            ['2.  Nothing is tested. Each cause is asserted with a '
             'plausible story and none is checked against a case where it '
             'would fail, which is what the question was asking for.'],
            ['3.  The recommendation does not follow: if education and '
             'expectations matter as the response itself says, housing '
             'subsidies address a third of the problem. Language: "like '
             'their parents did at the same age" needs "as"; "young people '
             'today want to enjoy their freedom" is a stereotype offered as '
             'evidence.']])]),

ad('AD 025', 'Urban planning and transport · policy choice',
   ('ask what a measure does to the people who cannot comply',
    'conditional qualification', 'compliance, retrofit, grandfathering, phase-in',
    'arguing about a rule whose cost falls before its benefit'),
   'Professor Lindqvist',
   'Several cities have announced that older, higher-emission vehicles will '
   'be banned from central areas within three years. Supporters cite air '
   'quality; opponents say the burden falls on those least able to replace a '
   'car. Should such bans go ahead on that timetable?',
   [('Mette', 'Yes. Air pollution kills people now, disproportionately the '
     'poorest, who live on the busiest roads and do not own cars at all. '
     'Delay is not neutral — it is a decision to keep the current '
     'deaths.'),
    ('Idris', 'The principle is right and three years is not. A van that is '
     'a tradesman’s entire business cannot be replaced on that '
     'timetable, and a ban that forces it will simply push those journeys '
     'and those people out of the city economy.')],
   P(['a.  Do Mette and Idris disagree about the policy or about the '
      'schedule?',
      'b.  Mette makes a distributional argument too. How does it cut '
      'against Idris’s?'],
     ['a.  What is grandfathering, and what is a phase-in?',
      'b.  What is a retrofit, and why does it matter here?'],
     ['State the real disagreement in one sentence and name what would '
      'resolve it.']),
   ['They agree on the policy and disagree about three years, and Mette has '
    'the stronger half of the distributional argument. The people breathing '
    'the worst air are poorer than the people driving through it, and '
    'Idris’s tradesman, whatever his cash-flow problem, owns a capital '
    'asset. A delay transfers a measurable health cost from van owners to '
    'residents, and that trade should be made explicitly if it is made at '
    'all.',
    'But his objection survives in a narrower form, and it is about '
    'liquidity rather than wealth. The problem with a three-year ban is not '
    'that compliance is unaffordable in total but that it is unaffordable '
    'now, by people whose asset cannot be sold for anything near what the '
    'replacement costs. That is a financing failure, and financing failures '
    'have financing answers: a scrappage payment tied to the ban date, or a '
    'retrofit grant, or a loan repaid out of the lower running costs. If I '
    'had to choose between delaying the ban and funding compliance, I would '
    'fund compliance — because the delay costs lives on a schedule and '
    'the money costs a budget line.'],
   F(['a.  The response reclassifies Idris’s objection. From what to '
      'what, and why does that help him?',
      'b.  The last sentence sets two costs against each other. What makes '
      'the comparison fair?'],
     ['a.  "owns a capital asset" — why this phrase rather than "owns a '
      'van"?',
      'b.  "costs lives on a schedule" — what does "on a schedule" '
      'add?']),
   ['I agree with Idris because it is not fair to punish ordinary people who '
    'cannot afford to buy a new car, especially in this economic situation '
    'when everything is becoming more expensive. The governments always make '
    'these decisions without thinking about the consequences for normal '
    'families. Of course pollution is a problem and we must do something '
    'about it, but three years is really too short and people need more time '
    'to prepare. I think a better solution would be to improve public '
    'transport first so people will not need their cars, and then introduce '
    'the ban later when everybody has an alternative.'],
   [('P1', [['a.  The schedule. Idris says explicitly that the principle is '
             'right, so arguing for the ban as such answers nobody.'],
            ['b.  It identifies a different poor group — non-driving '
             'residents of polluted streets — whose interest runs the '
             'other way. That converts the question from rich against poor '
             'into poor against poor, which is harder and more honest.']]),
    ('P2', [['a.  Grandfathering exempts those already in a position when '
             'the rule changes; a phase-in applies the rule gradually to '
             'everyone. The first creates a permanent two-tier rule, the '
             'second does not.'],
            ['b.  Fitting equipment to an existing vehicle to meet the '
             'standard. It matters because it is far cheaper than '
             'replacement, which changes the size of the problem Idris is '
             'describing.']]),
    ('P3', [['Model: "Both want the ban, so the question is whether three '
             'years is a liquidity problem that can be financed or a real '
             'impossibility."']]),
    ('F1', [['a.  From a fairness objection to a liquidity one. It helps him '
             'because fairness objections are met with counter-claims about '
             'fairness, which he loses here; a liquidity problem has '
             'concrete remedies and therefore survives into the policy.'],
            ['b.  Both are stated in their own units rather than converted '
             'into a common one. The writer is not claiming the lives are '
             'worth more than the money in some calculated sense, only that '
             'one cost is irreversible and the other is not — which is '
             'a claim about kind rather than magnitude.']]),
    ('F2', [['a.  Because it names the thing that undermines his case: a van '
             'is wealth, even when it cannot be converted to cash quickly. '
             'Using the economic term makes the concession precise and sets '
             'up the liquidity distinction in the next paragraph.'],
            ['b.  That the deaths are not a vague background but a rate '
             'running while the decision is deferred. It makes delay an '
             'active choice with a quantity attached, which is Mette’s '
             'argument given sharper form.']]),
    ('F3', [['1.  It agrees with Idris without engaging Mette at all — '
             'the people harmed by the pollution never appear, so the '
             'distributional question is answered only on one side.'],
            ['2.  The alternative proposed, public transport first, is '
             'offered with no timescale or cost and would delay the ban '
             'indefinitely, which is the thing at issue.'],
            ['3.  Language: "the governments always make these decisions '
             'without thinking" is unsupported and rhetorical; "normal '
             'families", "this economic situation", "everything is becoming '
             'more expensive" are vague; "punish" prejudges the question.']])]),

ad('AD 026', 'Business and economics · agree or disagree with a claim',
   ('check whether a measured correlation points the way the claim assumes',
    'counterfactual would have', 'causation, selection, productivity, attrition',
    'questioning a result that flatters everyone'),
   'Dr Castellanos',
   'Trials of a four-day week have generally reported that productivity is '
   'maintained or improved and that staff wellbeing rises. How convincing do '
   'you find this evidence?',
   [('Priya', 'Quite convincing. The results replicate across sectors and '
     'countries, and the mechanism is plausible: people cut the meetings and '
     'the slack rather than the work.'),
    ('Owen', 'I would be careful. The firms in these trials volunteered. A '
     'company that thinks it can lose a day without losing output is a '
     'company with a day to lose, and that is not most companies.')],
   P(['a.  Owen names a specific methodological problem. What is it?',
      'b.  Does his objection show the result is wrong?'],
     ['a.  What is selection bias, and what is attrition in a trial?',
      'b.  Why is "productivity" a slippery word across sectors?'],
     ['Grant Priya the finding and limit it, in one sentence.']),
   ['Owen is describing selection and he is right that it limits what the '
    'trials show. But it limits it in a specific direction worth naming: the '
    'results tell us what happens when firms that expect to succeed try '
    'this, which is good evidence that it can work and poor evidence about '
    'the average firm. Had participation been random, the effect would '
    'almost certainly be smaller — though note it would have to be '
    'implausibly smaller to be zero, given the size of the reported gains.',
    'What I would add is that the mechanism Priya describes predicts exactly '
    'this pattern. If the gain comes from cutting slack, then the firms with '
    'the most slack gain the most, and those are precisely the firms likely '
    'to volunteer. So selection is not an alternative explanation competing '
    'with hers; it is what her explanation predicts. That makes the evidence '
    'more coherent and less generalisable at the same time, which is an '
    'uncomfortable combination and probably the honest reading: a four-day '
    'week is a good way of removing waste where waste exists, and not a '
    'productivity technology.'],
   F(['a.  The response says selection "is what her explanation predicts". '
      'Why is that a stronger move than treating them as rival '
      'explanations?',
      'b.  What is the final sentence conceding, and to whom?'],
     ['a.  "Had participation been random, the effect would almost certainly '
      'be smaller" — why the inverted conditional?',
      'b.  "more coherent and less generalisable at the same time" — '
      'why point out that this is uncomfortable?']),
   ['I think the four-day week is a very good idea and the results of these '
    'trials prove that it works. Employees who are less tired are more '
    'motivated and they concentrate better, so they can do the same amount '
    'of work in less time. It is also better for their mental health and for '
    'their families, and companies can save money on electricity and other '
    'costs. Owen says the companies chose to participate but I think this is '
    'normal because somebody has to try it first, and now other companies '
    'can follow their example. In my opinion all countries should move to a '
    'four-day week.'],
   [('P1', [['a.  Selection bias — the participating firms are not a '
             'random sample, and the characteristic that made them '
             'volunteer is plausibly the one that produces the result.'],
            ['b.  No. It shows the result may not generalise. The trials can '
             'be internally valid and externally limited at once, and '
             'collapsing those two is the commonest error in reading '
             'evidence of this kind.']]),
    ('P2', [['a.  Selection bias is non-random entry into the sample; '
             'attrition is non-random exit from it. Both distort, and '
             'attrition matters here because firms that failed may simply '
             'have stopped reporting.'],
            ['b.  Because it means output per hour in some sectors and '
             'output per worker in others, and in services it is often '
             'measured by revenue, which responds to price as well as to '
             'work.']]),
    ('P3', [['Model: "The trials show that a four-day week can work in firms '
             'that expect it to, which is a real finding and a much smaller '
             'one than the headline."']]),
    ('F1', [['a.  Because treating them as rivals invites an unresolvable '
             'argument about which is true. Showing that her mechanism '
             'generates his selection means both are true and the evidence '
             'becomes interpretable rather than contested.'],
            ['b.  To both, and that is the point. Priya gets a real '
             'mechanism that works; Owen gets the limit on generalisation. '
             'The concession is that neither of their positions survives '
             'intact, which is usually what an honest reading produces.']]),
    ('F2', [['a.  Because the counterfactual is central and a fourth "if" '
             'would be clumsy in a paragraph already carrying conditionals. '
             'The inversion is also slightly more formal, which suits a '
             'claim about what the evidence would have shown.'],
            ['b.  Because readers resist conclusions that do not resolve '
             'neatly, and naming the discomfort disarms the suspicion that '
             'the writer has failed to make up their mind. It signals that '
             'the untidiness is in the evidence rather than in the '
             'reasoning.']]),
    ('F3', [['1.  It asserts that the trials "prove" what Owen has just '
             'given a reason to doubt, and then dismisses his objection with '
             '"somebody has to try it first", which concedes his point '
             'without noticing.'],
            ['2.  The supporting reasons are generic benefits rather than '
             'evidence about productivity, and the electricity saving is '
             'irrelevant to the claim at issue.'],
            ['3.  "All countries should move to a four-day week" is an '
             'unhedged absolute drawn from evidence the response has just '
             'been told is non-representative. Language: "the results of '
             'these trials prove", "the companies chose to participate" '
             'over-articled.']])]),

ad('AD 027', 'Education · responsibility: who should act',
   ('ask who is able to act, then who should pay',
    'modals of obligation across agents', 'remit, capacity, statutory, discretionary',
    'assigning a duty that nobody currently owns'),
   'Professor Adeyemi',
   'Many students arrive at university unable to write at the level their '
   'courses assume. Who should be responsible for addressing this — '
   'schools, universities, or the students themselves?',
   [('Bea', 'Universities. Whatever schools should have done, the students '
     'are here now, and a university that admits someone has accepted that '
     'they can be taught. Pointing upstream is a way of not teaching them.'),
    ('Nils', 'Schools, and saying so matters. If universities absorb the '
     'problem silently, the school system never has to confront it, and '
     'every cohort arrives in the same state while universities spend '
     'teaching budgets on remediation.')],
   P(['a.  Both accept the students are here and need help. What is '
      'actually in dispute?',
      'b.  Nils makes an argument about incentives. Restate it in one '
      'sentence.'],
     ['a.  Distinguish statutory from discretionary duties.',
      'b.  What is remediation, and why is the word contested?'],
     ['Separate the duty to act from the duty to pay, in one sentence.']),
   ['Bea is right about who must act and Nils is right about who should pay, '
    'and the argument only looks like a disagreement because those two '
    'duties have been collapsed. The student in front of you is a university '
    'problem whatever its origin; the recurrence of the problem every '
    'September is a schools problem, and absorbing it quietly does remove '
    'the signal that would otherwise reach the school system.',
    'The way to hold both is to teach and to publish. A university can run '
    'the writing provision Bea wants and report, by sending institution, '
    'what proportion of its intake needed it — which converts '
    'Nils’s incentive argument into something that operates without '
    'anyone refusing to teach anybody. If I had to locate the remaining gap '
    'it is not in either place but between them: nobody has ever had to '
    'specify what level of writing a course assumes, so the schools cannot '
    'aim at it and the universities cannot say it has been missed. A duty '
    'that nobody can discharge is usually one that nobody has stated '
    'precisely enough.'],
   F(['a.  The response splits one duty into two. Name them, and say why '
      'the split dissolves the argument.',
      'b.  The final sentence identifies a third location for the problem. '
      'What is it?'],
     ['a.  "absorbing it quietly does remove the signal" — what is the '
      'emphatic "does" doing?',
      'b.  "A duty that nobody can discharge is usually one that nobody has '
      'stated precisely enough." Why end on a generalisation?']),
   ['In my opinion the responsibility belongs to everybody in the education '
    'system. The schools should prepare the students better for university '
    'and teach them how to write academic essays, the universities should '
    'provide support courses for those who need them, and the students '
    'themselves must also make an effort and practise their writing. If '
    'everybody does their part then the problem can be solved. Also I think '
    'reading more books would help a lot because when you read good writing '
    'you learn how to write well yourself.'],
   [('P1', [['a.  Who bears the cost, and whether absorbing it has effects '
             'beyond the students currently enrolled.'],
            ['b.  If universities quietly fix what schools failed to do, the '
             'school system faces no consequence and the failure repeats '
             'indefinitely.']]),
    ('P2', [['a.  A statutory duty is imposed by law and must be performed; '
             'a discretionary one may be performed at the body’s '
             'judgement. Writing support is almost everywhere '
             'discretionary, which is why it is funded first and cut '
             'first.'],
            ['b.  Teaching that repairs a gap in prior preparation. It is '
             'contested because it implies deficiency in the student rather '
             'than mismatch between what was taught and what is assumed.']]),
    ('P3', [['Model: "Universities have to act because the students are '
             'theirs now; schools have to answer because the recurrence is '
             'theirs."']]),
    ('F1', [['a.  The duty to act and the duty to pay or answer. The split '
             'dissolves the argument because each classmate was defending a '
             'different one, and nothing in either position requires the '
             'other to be false.'],
            ['b.  The absence of a stated standard. Neither schools nor '
             'universities can be held to a level that has never been '
             'specified, so the duty cannot be allocated to either — '
             'which is a point neither classmate reached.']]),
    ('F2', [['a.  Conceding Nils’s point with emphasis before the '
             'response goes on to propose teaching anyway. The emphatic '
             '"does" makes the concession unmistakable, which buys '
             'permission for the proposal that follows (family 8, structure '
             '65).'],
            ['b.  Because the specific finding — no stated standard '
             '— is more useful as an instance of a general pattern the '
             'reader can apply elsewhere. It also lands the response on a '
             'claim rather than on a recommendation, which is harder to '
             'dismiss.']]),
    ('F3', [['1.  It allocates responsibility to everyone, which is the '
             'answer the question exists to improve on, and never engages '
             'Nils’s incentive argument.'],
            ['2.  "If everybody does their part then the problem can be '
             'solved" is the conclusion of no argument, and the reading '
             'recommendation at the end belongs to a different question.'],
            ['3.  Language: "the schools", "the universities", "the students '
             'themselves" over-articled; "make an effort and practise their '
             'writing" is vague; and the final sentence shifts to second '
             'person mid-paragraph.']])]),

ad('AD 028', 'Technology and AI · cause ranking',
   ('rank by which cause would still produce the effect alone',
    'cleft for emphasis', 'friction, default, dark pattern, attention',
    'ranking causes where one is a design choice'),
   'Dr Sorensen',
   'People spend far longer on their phones than they report wanting to. '
   'Explanations include the design of the applications, the absence of '
   'competing activities, and ordinary habit. Which explains most of the '
   'gap?',
   [('Rosa', 'Design. Infinite scroll, autoplay and notifications are not '
     'accidents; they are the output of teams measured on time spent. The '
     'gap between wanting and doing is manufactured.'),
    ('Jonas', 'Habit. People overshoot on everything they do automatically '
     '— television did this before phones, and radio before that. '
     'Blaming design flatters us: it makes an old failure of self-command '
     'into something done to us.')],
   P(['a.  Jonas’s historical comparison is doing argumentative work. '
      'What work?',
      'b.  What would show that design adds something habit does not?'],
     ['a.  What is friction in interface design, and what is a default?',
      'b.  What is a dark pattern?'],
     ['Rank the causes in one sentence using what each predicts about the '
      'size of the gap.']),
   ['Jonas is right that the phenomenon predates the technology, and that is '
    'exactly what makes the comparison useful rather than decisive. '
    'Television produced the same overshoot, but the gap was bounded by '
    'things design cannot remove: the schedule ended, the tape ran out, the '
    'programme finished. What is new is not the appetite but the removal of '
    'every natural stopping point, and it is the stopping point, not the '
    'appetite, that the design teams were working on.',
    'So I would put design first, on a narrow and defensible version of '
    'Rosa’s claim: design did not create the habit, it deleted the '
    'friction that used to terminate it. Habit I would rank second, since '
    'without it there is nothing for the design to act on — but it is '
    'the constant across a century and cannot explain a change. The absence '
    'of competing activities I would put third and treat with suspicion, '
    'because it is mostly an effect: the alternatives did not disappear and '
    'then leave a vacuum, they became harder to choose once the default '
    'required no decision at all.'],
   F(['a.  The response narrows Rosa’s claim. To what, and why is the '
      'narrower version stronger?',
      'b.  Why is the third cause "treated with suspicion" rather than '
      'simply ranked last?'],
     ['a.  "it is the stopping point, not the appetite, that the design '
      'teams were working on" — name the device and say what it '
      'achieves.',
      'b.  "cannot explain a change" — where have you met this '
      'principle before in this book?']),
   ['I think the main reason is the design of the applications because the '
    'companies want us to spend as much time as possible on their platforms '
    'so they can show us more advertisements and make more money. They hire '
    'psychologists to make the apps addictive, with notifications and '
    'infinite scrolling and all these tricks. Of course habit also plays a '
    'role as Jonas says, and people should have more self-control, but I '
    'think it is mainly the responsibility of the technology companies. '
    'Governments should regulate these practices to protect the users, '
    'especially children who are the most vulnerable.'],
   [('P1', [['a.  It separates the appetite from the technology, which '
             'undermines the claim that design created the problem. If the '
             'overshoot predates the phone, design cannot be its cause.'],
            ['b.  Evidence that the size of the gap changed when the design '
             'changed, holding the appetite constant — which is what '
             'the removal of stopping points provides.']]),
    ('P2', [['a.  Friction is anything that makes an action take more '
             'effort; a default is what happens if the user does nothing. '
             'Both are design choices and both are invisible to the user.'],
            ['b.  An interface deliberately designed to produce a choice the '
             'user would not make if the options were presented neutrally.']]),
    ('P3', [['Model: "Habit explains the appetite and is constant; design '
             'explains the size of the overshoot because it removed the '
             'stopping points that used to bound it."']]),
    ('F1', [['a.  To the claim that design removed the natural terminators '
             'rather than that it manufactured the desire. It is stronger '
             'because it survives Jonas’s historical comparison '
             '— indeed it uses it — whereas the broad version '
             'does not.'],
            ['b.  Because treating it as a cause at all may be an error. '
             'The response argues it is downstream of the other two, so '
             'ranking it third without comment would concede that it belongs '
             'on the same list.']]),
    ('F2', [['a.  An it-cleft (family 8, structure 59). It isolates the '
             'stopping point from the appetite and contrasts them '
             'explicitly, which is the precise distinction the whole '
             'ranking rests on.'],
            ['b.  In AD 001 (psychology constant, distribution system '
             'changed), AD 004 (network effects) and AD 023 (inactivity). A '
             'constant cannot explain a variable, and it is the most '
             'reliable single tool in these cause-ranking questions.']]),
    ('F3', [['1.  It never engages Jonas’s argument, which was that the '
             'pattern predates the technology. "Habit also plays a role" '
             'acknowledges him without answering.'],
            ['2.  The explanation offered is motive rather than mechanism '
             '— advertising revenue explains why firms would want more '
             'time, not how they obtain it against the user’s stated '
             'preference.'],
            ['3.  The regulation proposal and the reference to children '
             'arrive at the end without argument. Language: "the companies", '
             '"the users", "the technology companies" over-articled; '
             '"addictive" is asserted rather than defined.']])]),

ad('AD 029', 'Law and ethics · responsibility: who should act',
   ('ask who can bear the duty without a conflict of interest',
    'nominalisation for abstraction', 'self-regulation, capture, standing, duty of care',
    'allocating a duty between parties who both have reasons to avoid it'),
   'Dr Ferreira',
   'When a product sold online causes harm, responsibility may lie with the '
   'manufacturer, the platform that listed it, or the regulator that failed '
   'to catch it. Where should primary responsibility sit?',
   [('Anja', 'The platform. It takes a commission on every sale, it '
     'controls who may list, and in many cases the manufacturer is beyond '
     'the reach of any court the buyer can use. Responsibility should follow '
     'the party that can actually be sued.'),
    ('Pawel', 'That is convenience dressed as principle. The platform did '
     'not design the product and cannot test every item on a marketplace of '
     'millions. Making it liable produces either censorship of small sellers '
     'or a fee that buyers pay, and in neither case does the dangerous '
     'product improve.')],
   P(['a.  Anja argues from enforceability, Pawel from fault. Which does '
      'the law usually follow?',
      'b.  Pawel predicts two consequences. Are they both bad?'],
     ['a.  What is regulatory capture, and what is standing?',
      'b.  What is a duty of care, and what makes one reasonable to impose?'],
     ['Grant Pawel the fault point and keep Anja’s conclusion, in one '
      'sentence.']),
   ['Pawel is right that the platform did not design the product, and Anja '
    'is right that fault without enforceability protects nobody. The way '
    'through is to notice that liability does not have to track blame; it '
    'often tracks the cheapest avoider — the party who could have '
    'prevented the harm at least cost. That is not the manufacturer, who is '
    'beyond jurisdiction, and it is not the buyer, who cannot test a kettle. '
    'It is the platform, not because it is culpable but because it is the '
    'only party positioned to impose a condition on listing.',
    'Pawel’s consequences then become design constraints rather than '
    'objections. A liability rule that required testing of every item would '
    'indeed shut out small sellers; one that required a platform to hold '
    'proof of conformity for product categories with known failure modes, '
    'and to be liable only where it did not, would not. That is a much '
    'narrower duty, it is auditable, and it falls on information the '
    'platform already collects. The regulator’s role is then to specify '
    'the categories, which is the one task none of the private parties can '
    'do without a conflict of interest.'],
   F(['a.  The response introduces a principle neither classmate used. '
      'Name it and say what it settles.',
      'b.  How does it use Pawel’s objections rather than rejecting '
      'them?'],
     ['a.  "not because it is culpable but because it is the only party '
      'positioned to impose a condition" — name the structure and its '
      'effect.',
      'b.  "which is the one task none of the private parties can do '
      'without a conflict of interest" — what does this clause do for '
      'the regulator?']),
   ['I think the main responsibility must be on the manufacturer because '
    'they are the ones who made the dangerous product and they knew or '
    'should have known that it was not safe. The platform is just an '
    'intermediary which connects the sellers and the buyers, it cannot '
    'control millions of products. Of course the platform should remove the '
    'product when somebody reports it, and the regulator should also do its '
    'job better and check the products before they arrive on the market. But '
    'the real responsibility is of the company who produced the item and '
    'they should pay compensation to the victims.'],
   [('P1', [['a.  Fault, ordinarily — but not exclusively. Several '
             'areas of law allocate liability by capacity to prevent rather '
             'than by blame, which is the opening the response uses.'],
            ['b.  No. Shutting out small sellers is a genuine harm; a fee '
             'spread across buyers is a cost but may be an efficient one, '
             'since it prices the risk into the transaction. Separating them '
             'is what lets the second paragraph answer only the real '
             'objection.']]),
    ('P2', [['a.  Capture is a regulator coming to serve the industry it '
             'oversees. Standing is the right to bring a case at all '
             '— and the buyer often has none against a foreign '
             'manufacturer, which is Anja’s point.'],
            ['b.  An obligation to take reasonable care to avoid harm to '
             'others. It is reasonable to impose where the party can '
             'foresee the harm and can act at proportionate cost.']]),
    ('P3', [['Model: "Liability should follow the cheapest avoider rather '
             'than the designer, and on a marketplace that is the platform '
             '— not because it is at fault but because it is the only '
             'party able to set a condition on listing."']]),
    ('F1', [['a.  The cheapest-avoider principle. It settles the argument '
             'because it explains how Pawel can be right about fault while '
             'Anja is right about where liability belongs — the two '
             'were answering different questions about the same rule.'],
            ['b.  It treats them as specifications. Each objection names a '
             'version of the rule that would fail, which tells you what the '
             'workable version must avoid: not testing every item, and not a '
             'duty so broad that compliance costs more than the harm.']]),
    ('F2', [['a.  A "not ... but" correlative. It rejects the ground Pawel '
             'assumed the argument had to be fought on while accepting his '
             'factual claim, which is what makes the conclusion survive his '
             'objection.'],
            ['b.  It assigns the regulator the residual task and justifies '
             'it by a property — absence of conflict — rather than '
             'by authority. That makes the allocation principled rather '
             'than conventional, and it answers the third option in the '
             'professor’s question, which neither classmate addressed.']]),
    ('F3', [['1.  It answers a question about where responsibility should '
             'sit with a claim about who is at fault, and never engages '
             'Anja’s point that the manufacturer may be unreachable.'],
            ['2.  The remedies offered are the status quo — take down '
             'on report, regulator should do better — with no account '
             'of why either currently fails.'],
            ['3.  Language: "the real responsibility is of the company" '
             '(lies with); "the sellers and the buyers", "the market", "the '
             'victims" over-articled; "they knew or should have known" is a '
             'legal formula used without the standard it belongs to.']])]),
]
