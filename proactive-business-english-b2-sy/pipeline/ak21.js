// Proactive Business English B2 · Syria Edition · Book 2 · Unit 21 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
// ⚠ Double-quoted, always — see the note at the head of ak18.js.
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 21  Proposals, and the Option You Argue Against'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 21 is the only unit in either book in which writing something honestly produces an answer nobody in the story had.** **Everything before it taught how to write down what you already knew.** ⚠ **This unit\'s payoff is what honest writing turns up** — **and the payoff is practical rather than moral, which is the only version a class will act on.**',
  '⚠ **The six things taught.** ⚠ **The reader\'s real question (21.1) · a real option set (21.2) · pricing the status quo (21.3) · sorting assumptions (21.4) · the option you recommend against (21.5) · the ask (21.6).**',
  '⚠ **The single most useful idea is in 21.3 and it is counter-intuitive:** ⚠ **changing nothing requires no decision, no capital and no signature, which makes it the strongest option in any room and the only one with no champion.** **Nobody proposes it; it arrives by itself as a postponement** — **and a postponement nobody has priced is indistinguishable from a decision nobody has taken.**',
  '⚠ **Its third cost is the one never written and the one that decides matters: what DECAYS while nobody is deciding.** ⚠ **The evidence for the decision goes stale, and then the honest answer is *we would have to count again*** — **which is how most postponements become permanent.**',
  '⚠ **21.5 is the hardest cycle in Book 2 to teach, because the honest move carries a real risk of losing.** ⚠ **The argument for it is not fairness.** **It is that a caricature is an expensive win: the reader who later hears the real case reads everything else in the paper in that light, and the writer has spent something they cannot get back on a decision that went their way anyway.**',
  '⚠ **And 21.7 is the return on 21.5, delivered as arithmetic.** ⚠ **The fourth option became visible only because section 5 contained the word *untestable*** — **and a caricature of option C would not have contained it.** *You cannot find the test for an assumption you have not stated as an assumption.*',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2, a report, 120 to 140 words, 20 marks**; **the exam practice is Reading Part 1, matching, seven questions, the third time in the level.**',
], C.grey, C.navy));

// ===================== 21.1 =====================
out.push(h2('21.1  The question your reader actually has'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half produces the finding: almost nobody has ever been told what question their reader had, and most have never asked.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It contains a decision with two answers and a date.** **The first is a subject, and a subject cannot be answered or decided.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **How much of the 1.1 million must be spent before the firm knows whether it is working** — **asked by Mr Sayegh in a corridor, in those words.**  2 ⚠ **Write your guess at the question on the first line and let the reader correct it** — **eight seconds against eleven hundred words.**'));
out.push(p('⚠ **The finding question is the transferable part and it should be drilled.** ⚠ **Not *what do you want to know*, which produces a subject, but *what are you going to DO with this paper*, which produces a decision** — **and a decision has a date, an owner and two or more answers.**'));
out.push(p('⚠ **The commonest failure is answering a question that has been decided**, ⚠ **and it reads to the reader as not having listened** — **which contaminates the rest of the paper regardless of its quality.**'));
out.push(p('⚠ **And the declared guess is the move learners resist hardest.** ⚠ *This paper answers one question: ___. If that is the wrong question, tell me.* **It costs one line and eight seconds; the undeclared guess costs the whole paper** — **and a reader who corrects the line has handed the writer the paper they should have written, free.**'));
out.push(p('**Language box – Practise (sample):**  _**The paper I owe: a note on our vehicle costs.**_ ⚠ _**What will they do with it?** Decide whether to renew the two leases that expire in September or buy._ ⚠ _**The question, in one line:** should the two leases expiring in September be renewed or replaced by purchase, and what is the difference over four years?_ ⚠ _**Already decided:** that we keep three vehicles. I had written two pages about fleet size._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I have to write a paper about our vehicle costs. They want the whole picture.'],
  ['B', 'What will they DO with it?'],
  ['A', '…Decide about the two leases that expire in September.'],
  ['B', 'So the question is whether to renew or to buy, by when?'],
  ['A', 'By August, because the leases need three months\' notice.'],
  ['B', 'Has any part of that been decided already?'],
  ['A', 'That we keep three vehicles. That was settled in March.'],
  ['B', 'And how much of your draft is about fleet size?'],
  ['A', 'Two pages of four.'],
  ['B', 'Which is half a paper answering a question from March.']
]));
out.push(note("The sequence works because B never argues with the whole picture; B simply asks what the reader will do and lets the specific decision displace it. Learners arrive at the whole picture honestly — it is what a writer produces when nobody has told them the decision — so treating it as laziness loses the room. The closing exchange is the one to make the class feel: half a paper answering a question settled in March, and the writer would have submitted it without ever discovering that."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One question in one line, with a date in it, and the part of the subject that is already decided.** ⚠ **Insist on the date** — **a question with no date has no decision in it, and the test is whether the reader could act on a different day and get the same answer.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two papers', [
  '⚠ **1  The subject:** **vehicle costs.** ⚠ **What the reader will do:** **decide on the two September leases.** ⚠ **The question:** **renew the two leases or buy, and what is the difference over four years?** ⚠ **Already decided:** **three vehicles, settled in March** — **and two of my four pages were about that.**',
  '⚠ **2  The subject:** **the night shift.** ⚠ **What the reader will do:** ⚠ **nothing** — **and that is the answer.** **I asked, and the honest reply was that he wanted to be reassured rather than to decide.** ⚠ **So what the paper owes is one page saying what the night shift costs and what it earns, and no options at all** — **because an options paper for a reader who is not deciding is a paper that creates a decision nobody wanted.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The subject is vehicle costs. The reader will decide on the two September leases. So the question is whether to renew or to buy, by August, because notice is three months. And three vehicles was settled in March, so it comes out._'));
out.push(note("The second sample is the finding worth the whole cycle and it comes from asking rather than guessing. The reader wanted reassurance, not a decision — and the learner's conclusion is exactly right: an options paper written for somebody who is not deciding manufactures a decision nobody asked for, and then somebody has to take it. Teach the class that what will you do with it has three possible answers, and nothing is one of them, and that it changes the document completely rather than cancelling it."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ *How much of the 1.1 million must be committed in June, before the firm knows whether the site works?* ⚠ **And the invitation:** *if that is the wrong question, tell me and I will write the other one.*'));
out.push(p('**2** ⚠ **That Homs reopens, decided 4 February on the count; and that it is sixty square metres on the Hama road at 1.1 million, decided in the same minute.** ⚠ **He wants it noticed because his December paper argued for both and this is not that paper** — **which stops it being read as a second attempt.**'));
out.push(p('**3** ⚠ **That he proposed the reopening in December and was wrong about the threshold: he said a hundred and fifty and the count came in at a hundred and ninety-six.** ⚠ **He asks the reader to read his eight-week test with that in mind.**'));
out.push(p('⚠ **The disclosure is at the FRONT and that is the teaching point.** ⚠ **At the back it reads as a confession; at the front it is information** — **and it makes the rest of the paper more credible rather than less, which learners do not believe until they see it.**'));
out.push(p('⚠ **And the answer is on page 1, in one line, with the cost of the alternative.** ⚠ *About 640,000 in June; the rest can wait eight weeks, and waiting costs about 35,000.* **A proposal written to be read in order is a proposal written for somebody who is not busy.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (121 words)', [
  '**VEHICLES: THE SEPTEMBER LEASES. PAGE 1. R. Haddad, 2 June. One page and a table.**',
  '⚠ **This paper answers one question: should the two leases expiring in September be renewed, or replaced by purchase? If that is the wrong question, tell me and I will write the other one.**',
  '⚠ **What is already decided and is not in this paper. That we keep three vehicles: settled in March. I have written nothing about fleet size and I want that noticed, because my February note argued for two and this is not that note.**',
  '⚠ **The answer, in one line, so that nobody has to reach the table. Renew one and buy one. Over four years that is about 180,000 cheaper than renewing both, and about 95,000 dearer than buying both, and the 95,000 buys the ability to hand one back in 2029.**',
  '⚠ **One thing about my own position. I argued for a smaller fleet in February and lost, so a reader should know that the person writing this is the person who wanted fewer vehicles.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A question with no date and no two answers.** ⚠ **A paper that still contains the settled part.** ⚠ **The answer withheld until a later page.** ⚠ **And a position disclosed at the back** — **which is the one fault on this page that makes the paper worse rather than merely weaker.**'));
out.push(p('⚠ **The cost clause.** ⚠ *Moving your position statement to the front means Mr Sayegh reads it before your figures rather than after, which is uncomfortable for a day.* **A day of discomfort is a real cost, it is the right size, and naming it is what gets the move made.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the question line only.** ⚠ **The class says of each whether it contains a decision, two answers and a date.** **Expect about half to be subjects with question marks.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (224 words)', [
  '⚠ **I once wrote fourteen pages about our warehouse layout and the question was whether to keep the mezzanine.**',
  '**Nobody told me. I asked what they wanted and was told "a proper look at the warehouse", so I gave them a proper look at the warehouse: flows, racking, labour, the lot.**',
  '⚠ **The meeting lasted eleven minutes.** **The owner asked whether the mezzanine should stay, somebody said my paper did not really address it, and the decision was deferred for three months because there was nothing to decide on.**',
  '⚠ **The mezzanine was in my paper. It was on page nine, in a paragraph about vertical storage, and it did not have a figure against it.**',
  '⚠ **What I understand now is that I had been told the question and had not recognised it.** **"A proper look at the warehouse" was what he said when he did not know how to say "is the mezzanine worth the floor it stands on".** ⚠ **If I had asked what he was going to do with the paper, he would have said "decide about the mezzanine", and I would have written two pages instead of fourteen.**',
  '⚠ **The three months cost us a season of the mezzanine either way.** **And the part I find hardest is that fourteen pages looked like effort and two pages would have looked like laziness** — **to me, not to him. He wanted the two.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is there a decision in this question?*** **A subject, however well specified, is not one.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the writer find out the real question only after submitting? Usually all three** — **and in at least one the real question had been said out loud by somebody before the paper was started, which is the pattern of the cycle.**'));
out.push(note("The last paragraph of that sample is worth reading out, because it names the obstacle honestly: fourteen pages looked like effort and two would have looked like laziness, to the writer and not to the reader. That is the real reason papers answer the wrong question, and it is not ignorance of the technique. Ask the class how long their last paper was and how long the answer to the actual question would have been. The ratio is usually between three and seven to one."));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  A real option set'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Everybody has an example and everybody could tell.** **The *how* is the useful half: usually the preferred option came last, had more detail, or was the only one with a figure.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **Its three options differ in floor and in commitment timing** — **two dimensions.** **The first offers one course of action at two speeds plus a decided option.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Could a sensible person choose each one? Do they differ in something other than degree? Has any of them already been decided?**  2 ⚠ **Seeing the preference is fine; what they must not see is that the others were put there to lose** — **because then they stop assessing the options and start looking for what else has been arranged.**'));
out.push(p('⚠ **The three tests are mechanical and a class can apply them to any set in two minutes.** ⚠ **Run them on the learners\' own sets before discussing the principle**, **because about half of all first sets contain a dial between two options.**'));
out.push(p('⚠ **A dial belongs inside an option, not between two of them.** ⚠ **That is the sentence to put on the board** — **and the diagnostic question is *what do they differ in besides the number?***'));
out.push(p('⚠ **And the real third option is usually the one the writer has not written down because they think it is wrong.** ⚠ **Leaving it out does not remove it from the reader\'s mind** — **it removes it from the one document where the writer could have answered it, so the question arrives in the meeting with nobody prepared.**'));
out.push(p('**Language box – Practise (sample):**  _**The decision: the two September leases.**_ ⚠ _**A** renew both. **B** buy both. **C** renew one and buy one._ ⚠ _**Tests:** all three choosable; they differ in ownership and in flexibility, not in degree; none decided._ ⚠ _**The one I had not written:** hand both back and hire by the day for the four peak months, which is the hire firm\'s own proposal and which I dislike** — **and which somebody who expects our volumes to fall would choose.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Option A is renew both leases. Option B is renew both but on three years instead of five. Option C is renew both on two years.'],
  ['B', 'What do those three differ in besides the number of years?'],
  ['A', '…Nothing.'],
  ['B', 'So it is one option with a dial. Where does the dial belong?'],
  ['A', 'Inside the option.'],
  ['B', 'And what are the real alternatives?'],
  ['A', 'Buying. And handing them back and hiring.'],
  ['B', 'The second one you have not written down. Why not?'],
  ['A', 'Because I think it is wrong.'],
  ['B', 'Which is not a reason to leave it out. It is the reason to answer it.']
]));
out.push(note("Three years of lease and two years of lease is the exact shape of the fault and classes produce it constantly, because a term length feels like a substantive choice. The diagnostic is one question — what do they differ in besides the number — and it settles the matter without argument. Then B's last line does the rest: thinking an option is wrong is the reason to answer it in the paper, not the reason to omit it, and the learner who omits it will meet it across a table with nothing prepared."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three options passing all three tests, and the one line saying what they differ in.** ⚠ **Mark the differ-in line hardest** — **a set whose dimensions cannot be named in one line is a set the reader cannot hold in their head.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — one decision', [
  '⚠ **A  Renew both leases.** **Choosable: yes. Differs in kind: ownership. Still open: yes.** ⚠ **Differs in: no capital, no residual value, fixed for five years.**',
  '⚠ **B  Buy both.** **Choosable: yes. Differs in kind: yes. Still open: yes.** ⚠ **Differs in: 940,000 of capital, a residual, and no exit before 2031.**',
  '⚠ **C  Hand both back; hire by the day for four peak months.** ⚠ **Choosable: yes** — **by anybody who expects our volumes to fall, which is the hire firm\'s own case and which I dislike.** **Still open: yes.** ⚠ **Differs in: no capital, no commitment, and about 40 per cent more per vehicle-day.**',
  '⚠ **They differ in two things: how much capital is committed, and how long we are committed for.** **Everything else about them is the same.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _A is renew both, B is buy both, C is hand back and hire. They differ in capital committed and in length of commitment. The one I had not written down was C, and it fails test one for me and passes it for somebody who expects our volumes to fall._'));
out.push(note("Note what the sample does with option C: it names the position from which C is right and attributes it to the hire firm, who have an interest. That is both honest and useful — a reader can discount an interested source themselves, and a writer who names the interest has demonstrated they are not hiding it. The differ-in line at the end is the piece to insist on in marking, because a reader who has it can compare three options at once and a reader who does not will compare them in pairs and lose the third."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **How much floor they take and how much is committed before the firm knows whether the site works.** ⚠ **Everything else about them is the same, and saying so is what lets a reader hold all three at once.**'));
out.push(p('**2** ⚠ **It names, for each option, the person who could reasonably choose it.** ⚠ **Writing it changed the writer\'s own view of option C** — **which he had been treating as nobody\'s position when it was in fact the position the previous office manager took in February with reasons.**'));
out.push(p('**3** ⚠ **Because A and B are the same floor and the same site and differ in one thing only: whether 460,000 is committed before or after eight weeks of trading.** ⚠ **So B is not a slower A** — **it is A with a test in the middle, which is a difference in kind.**'));
out.push(p('⚠ **The *cost of being wrong* row is the one to copy into every option table.** ⚠ **It is what makes option B visible as a different kind of thing rather than a smaller A**, **and in most real option sets it is the row that decides the matter.**'));
out.push(p('⚠ **And the untestable figure is flagged in its cell rather than in the appendix, for a stated reason.** ⚠ *A figure with an untestable assumption behind it is more dangerous in a table than in a paragraph* — **because a table reads as arithmetic.** **That is a format judgement worth teaching on its own.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (126 words)', [
  '**VEHICLES, PAGE 2: THE OPTIONS. R. Haddad, 2 June.**',
  '⚠ **The three options differ in two things only: how much capital we commit, and how long we are committed for. Everything else about them is the same.**',
  table(['', 'A  Renew both', 'B  Buy both', 'C  Hand back, hire'], [
    ['**capital**', '**nil**', '**940,000**', '**nil**'],
    ['**committed until**', '**2032**', '⚠ **2031, with a residual**', '⚠ **nothing**'],
    ['**four-year cost**', '**1.62 m**', '**1.44 m**', '⚠ **1.71 m**, **on last year\'s volumes, which may not hold**'],
    ['⚠ **cost of being wrong**', '**five years of a vehicle we do not need**', '**940,000 and a sale in a poor market**', '⚠ **about 90,000 a year of premium, cancellable at a month**'],
    ['⚠ **who could choose it**', '**anybody who wants no capital out**', '**anybody confident of our volumes to 2031**', '⚠ **anybody who expects volumes to fall** — **which is the hire firm\'s case, and they have an interest**'],
  ], [1.8, 2.2, 2.2, 3.2]),
  '⚠ **What I have NOT done. I have not offered the same lease at three different terms. A and B differ in ownership and C differs in commitment, and none of the three is another one with a dial on it.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A missing differ-in line.** ⚠ **A dial between two options.** ⚠ **A decided option in the set.** ⚠ **A *who could choose it* cell saying *nobody*** — **which means the option should come out.** ⚠ **And an untestable figure left unflagged in a table.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *who could choose it* row only.** ⚠ **The class says of each whether the position named is somebody\'s real one, and whether the writer has said where that person\'s interest lies.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (227 words)', [
  '⚠ **Somebody once gave me three options for a new telephone system and I took the second one, and I knew before I opened the paper which one I was going to take.**',
  '**Option one was to keep the existing system. Option two was the system he wanted. Option three was a system from a supplier he described as "not usually suitable for firms of our size".**',
  '⚠ **How I could tell: option two had a table and the other two had a paragraph each.** **Option three\'s paragraph contained the phrase "would require significant retraining", which was not costed. Option one\'s paragraph did not mention that the existing system was out of support in eighteen months, which I found out afterwards from the supplier.**',
  '⚠ **I took option two and it was the right system.** **That is the part that annoys me most.**',
  '⚠ **What it cost was not the decision.** **It was that for the next two years I read everything he sent me looking for the option with the table** — **and twice I asked for figures on an option he had dismissed, and both times the figures were fine and the dismissal had been lazy rather than dishonest.**',
  '⚠ **So the caricature cost him two years of being checked on things he was right about.** **He got his telephone system in one afternoon and paid for it in small amounts for a very long time, and I do not think he ever knew.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *could a sensible person choose this one?*** **Apply it to each option in the text, not to the writer\'s conclusion.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many could the reader tell which option was wanted? Usually all three, and that is not the fault.** ⚠ **The fault is in the one where the reader could also tell that the others were there to lose** — **and ask what that did to how they read the next paper from the same person.**'));
out.push(note("That piece is the best argument for 21.5 in the whole key and it arrives two cycles early, which is fine — use it. The learner took the right option, says so, and then prices what the caricature actually cost: two years of having every paper checked, including the ones that were right. And the last sentence is the thing to leave with a class: he paid in small amounts for a very long time and probably never knew. That is the honest shape of the cost, and it is why the argument against caricature is prudential rather than ethical."));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  Pricing the option of changing nothing'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is reliably bleak: in almost no case had anybody costed the status quo, and in most cases the proposal is remembered as rejected when it was in fact postponed.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It has a figure, a source, a thing that will be lost, and a date** — **and *doing nothing is not an option* is the sentence this cycle exists to abolish.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What you do not earn; what you lose that was available; and what gets harder.**  2 ⚠ **That it is the single most useless sentence in business writing, because it tells a reader that the writer would rather not price it** — **and the reader is the person who may choose it.**'));
out.push(p('⚠ **Teach the mechanism before the three costs, because the mechanism is what makes the three costs necessary.** ⚠ **Changing nothing needs no decision, no capital and no signature.** **Nobody proposes it; it arrives by itself, as a postponement.**'));
out.push(p('⚠ **And the sentence to memorise:** ⚠ *a postponement nobody has priced is indistinguishable from a decision nobody has taken.* **The firm will later believe it decided something and the file will show that it did not** — **which is 18.4 and 21.3 being the same finding from two directions.**'));
out.push(p('⚠ **The third cost is the one never written.** ⚠ **The evidence for the decision decays while nobody is deciding**, **so in September the honest answer is *we would have to count again*, which is another two months** — **and that is the mechanism by which a postponement becomes permanent rather than a choice anybody made.**'));
out.push(p('**Language box – Practise (sample):**  _**The proposal: replace the two forklifts.**_ ⚠ _**What we do not earn:** about 300 hours of downtime a year at the maintenance log\'s own figures, which is about 420,000 of handling capacity._ ⚠ _**What we lose that was available:** the trade-in on the older machine falls below the scrap threshold in about eight months, which is 60,000._ ⚠ _**What decays:** the maintenance log stops being evidence once the machines are rebuilt in February, and after that nobody can show what they used to cost._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I will write that doing nothing is not an option.'],
  ['B', 'What does that sentence tell the reader?'],
  ['A', 'That the status quo is unacceptable.'],
  ['B', 'It tells them you would rather not price it. Who is most likely to choose it?'],
  ['A', '…The people reading the paper.'],
  ['B', 'So the gap in your paper is exactly where their own preference lives.'],
  ['A', 'Put like that it is the worst place to have a gap.'],
  ['B', 'And the three costs take four lines. What do you not earn?'],
  ['A', 'About 420,000 of handling capacity, on the maintenance log.'],
  ['B', 'Which is somebody else\'s figure. Good. Keep going.']
]));
out.push(note("The move that lands is B's third question: who is most likely to choose the status quo? The answer is the reader, and so the unpriced option is a gap located exactly where the reader's own inclination sits. Learners find that argument unanswerable, in a way that general appeals to completeness are not. The other thing to insist on is the source: a foregone figure produced by the proposer is the least believed number on any page, and the same figure from a maintenance log or a colleague's count is the most."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **All three costs, and whose count the first figure comes from.** ⚠ **Then what decays** — **and insist on a date by which somebody would be right to call the evidence stale.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two proposals', [
  '⚠ **1  Replace the two forklifts.** ⚠ **Do not earn:** **about 420,000 of handling capacity, on the maintenance log\'s own downtime figures.** ⚠ **Lose that was available:** **the trade-in on the older machine, about 60,000, which falls below the scrap threshold in about eight months.** ⚠ **What decays:** **the maintenance log stops being evidence when the machines are rebuilt in February.**',
  '⚠ **2  Take the unit next door.** ⚠ **Do not earn:** **nothing measurable, and I want that written** — **we have no count of turned-away work.** ⚠ **Lose that was available:** **the unit, which the agent says goes in four months.** ⚠ **What decays:** ⚠ **nothing** — **and so the honest position is that this proposal has one real cost of waiting and not three, which makes it weaker than I had been arguing.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The proposal is the forklifts. Changing nothing means we do not earn about 420,000 of handling capacity, on the maintenance log\'s figures. We lose a 60,000 trade-in, which goes in eight months. And what decays is the log itself, once the machines are rebuilt in February._'));
out.push(note("The second sample is the one to praise, because the learner applies the three costs honestly and finds that two of them are empty — and then says so, concluding that the proposal is weaker than they had been arguing. That is the method working against its user, which is the only evidence that it is a method rather than a rhetorical device. Make the point explicitly: if the three costs always come out large, the class is filling them in rather than measuring them."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Hala Mourad\'s walk-in counts at Mezzeh and Baghdad Street, scaled to the February Homs count.** ⚠ **He says so because they are her figures and not his, and the scaling is in the appendix** — **a foregone figure from the proposer is the least believed number on any page.**'));
out.push(p('**2** ⚠ **That the count goes stale: by September it is seven months old and anybody who says it needs retaking will be right, which is a further two months and about 9,000.** ⚠ **And he says it is NOT an argument for haste** — **it is the observation that the evidence decays while nobody is deciding.**'));
out.push(p('**3** ⚠ **That changing nothing is the worst option.** ⚠ **For a firm that thinks the February count was a fluke, changing nothing is correct and the 2.3 million is imaginary** — **and he concedes that his whole case rests on the count being real, which is what option B tests.**'));
out.push(p('⚠ **The *it is not an argument for haste* sentence is doing structural work and should not be read as politeness.** ⚠ **Without it the decay row reads as pressure, and a reader who feels pressed discounts the figure** — **so the sentence protects the number rather than the relationship.**'));
out.push(p('⚠ **And the last paragraph separates caution from inertia, which both sides conflate.** ⚠ *The difference is not courage; it is that one of them produces evidence and the other produces a stale count.* **That sentence protects option B from being read as the brave choice, which is the fastest way to lose it in a cautious room.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (128 words)', [
  '**FORKLIFTS, SECTION 4: THE OPTION OF CHANGING NOTHING. R. Haddad, 5 June.**',
  '⚠ **I am setting this out as an option because it is one, and because it requires no decision from anybody. If no capital is approved in June, this is what happens, and it happens by itself.**',
  table(['', 'The cost', 'Where the figure comes from'], [
    ['**what we do not earn**', '**about 420,000 of handling capacity**', '⚠ **the maintenance log\'s own downtime hours, kept by the fitter and not by me, at about 300 hours a year**'],
    ['**what we lose that was available**', '**about 60,000 of trade-in on the older machine**', '**the dealer\'s written quotation, valid to October; after that it is below the scrap threshold**'],
    ['⚠ **what gets harder**', '⚠ **the log stops being evidence**', '⚠ **both machines are due for rebuild in February; after that nobody can show what they used to cost, and anybody who asks for new figures will be right**'],
  ], [2, 2.6, 4.4]),
  '⚠ **The third row is not an argument for haste. It is the observation that our only evidence has an expiry date on it, and the expiry date is a decision somebody else already took about the rebuild.**',
  '⚠ **One thing I am not going to claim. For anybody who thinks our volumes will fall in 2028, changing nothing is correct and the 420,000 is imaginary.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ *Doing nothing is not an option*, **anywhere.** ⚠ **A first figure sourced to the writer.** ⚠ **A missing decay cost, or one with no date.** ⚠ **A missing *for anybody who thinks X, this is correct*** — **which is the sentence that makes the rest of the section credible.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the decay cost only.** ⚠ **The class says of each what will have gone stale and by when somebody would be right to say so.** **A decay with no date is not a decay, it is a worry.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (230 words)', [
  '⚠ **In 2024 I proposed moving our stock to a single location and the proposal was never rejected.**',
  '**It was discussed in March, deferred to May for costings, discussed in May, deferred to September because two people were away, and in September somebody said the figures were six months old. They were.**',
  '⚠ **Nobody ever voted against it.** **There is no minute anywhere saying the firm decided not to do it, and if you asked the owner today he would say we looked at it and it did not stack up** — **which is not what happened.**',
  '⚠ **What it cost, as far as I can work out: we paid two rents for another two years, which is about 1.1 million, and in 2026 the second landlord raised us 9 per cent because he knew we were not going anywhere.**',
  '⚠ **And the thing I did not understand in 2024 is that the deferral in May was the decision.** **Everything after it was administration.** **By September the figures were genuinely stale and the person who said so was right, and the honest answer was to start again, and nobody had the appetite.**',
  '⚠ **If I wrote it today I would put the three costs on page one and the third one in capitals: THESE FIGURES EXPIRE IN SEPTEMBER.** ⚠ **Not to create pressure** — **so that the May meeting understood that deferring to September was choosing, and would have had to say so in a minute.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *was the status quo ever priced?*** **And the follow-up: was the postponement ever minuted as a decision?**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the proposal lose to a postponement rather than a rejection? Usually all three** — **and in none was the postponement minuted as a decision, which is the whole finding of the cycle.**'));
out.push(note("That piece is the cycle proved on a real case and the last two paragraphs are the lesson. The deferral in May was the decision and everything afterwards was administration; by September the evidence had genuinely expired and the person who said so was right. The learner's remedy is also correct and worth adopting: put the expiry on page one, not to create pressure but so that the meeting which defers understands that it is choosing and has to say so in a minute. A priced decay turns a drift into a decision, which is all anybody can ask of a document."));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  What has to be true'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the sort: about half of what nobody checked was checkable, and that half is the painful half.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **Three items, each sorted into its own kind, with a test on the testable one and nil on the untestable one.** *Assuming conditions remain stable* **cannot fail in a way anybody could identify afterwards.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That a projection with untestable upside inside it gets discounted further than the upside is worth, because the reader cannot tell which part is which** — *so you lose four by keeping two.*  2 ⚠ **Two things: it tells a reader which parts of the case are claims and which are arithmetic; and in eighteen months it tells everybody which assumption failed and whether anybody could have known.**'));
out.push(p('⚠ **Teach the three kinds first, because most of what learners call assumptions are figures with ranges.** ⚠ **Sorting them out shortens the real list to two or three things**, **which is the point and also the relief.**'));
out.push(p('⚠ **The *lose four by keeping two* argument is the one that persuades, and it is arithmetic rather than principle.** ⚠ **A reader faced with a nine-million projection containing two million they cannot separate out discounts the whole figure to about five** — **so the writer who keeps the two loses four.**'));
out.push(p('⚠ **Keep the upside as a note outside the arithmetic.** ⚠ *Not in the projection; if it returns, add about 2 m.* **The reader keeps the information, the arithmetic stays clean, and a surprise on the good side is the only kind anybody forgives.**'));
out.push(p('⚠ **And the second purpose is the one that matters in eighteen months.** ⚠ **Which assumption failed, and could anybody have known** — **the difference between a mistake and a gamble.** **Nobody can reconstruct that afterwards without the list, which is why a post-mortem without one always becomes an argument about character.**'));
out.push(p('**Language box – Practise (sample):**  _**The plan: the single stock location.**_ ⚠ _**Figure with a range:** the fit-out, 310 to 360,000, three quotations._ ⚠ _**Testable:** that picking time falls by 20 per cent** — **tested by four weeks of timed picking from the second week, decision point 30 September.**_ ⚠ _**Untestable:** that the second landlord would not have raised us anyway.** **Assumed at nil; if he would have, the saving is 9 per cent larger and I have not counted it.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I cannot take the export recovery out. It is probably real.'],
  ['B', 'How much of your projection is it?'],
  ['A', 'About 1.2 of the 4.8.'],
  ['B', 'Can the reader separate it from the other 3.6?'],
  ['A', 'Not as it stands.'],
  ['B', 'So what will they do with 4.8?'],
  ['A', '…Discount it. Probably to three and a half.'],
  ['B', 'You have lost 1.3 by keeping 1.2.'],
  ['A', 'And if I take it out, I have a 3.6 that nobody argues with.'],
  ['B', 'And a note saying add 1.2 if it happens, which they keep and do not discount.']
]));
out.push(note("This is arithmetic rather than exhortation and that is why it works. Make the learner produce their own discount figure — they always discount further than the suspect item is worth, because they are reasoning as readers rather than as writers for the first time in the exercise. The note is the other half: the information survives, outside the arithmetic, and a reader treats an explicit upside note as intelligence rather than as a claim. Nobody ever discounts a sentence beginning not in the projection."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One list sorted into the three kinds.** ⚠ **Then which option in the proposal is the test for the testable item** — **and where none is, say so, because that is a gap in the proposal rather than in the list.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — one plan sorted', [
  '⚠ **1  The fit-out at 335,000.** ⚠ **Kind:** **a figure with a range, 310 to 360, from three quotations.** ⚠ **What to do:** **move it out of the list; at 360 the plan still works and at 310 we are 25,000 better off and nothing else changes.**',
  '⚠ **2  That picking time falls by 20 per cent.** ⚠ **Kind:** **testable.** ⚠ **The test:** **four weeks of timed picking from week two, on the warehouse manager\'s stopwatch and not mine. Decision point 30 September.**',
  '⚠ **3  That the second landlord would not have raised us anyway.** ⚠ **Kind:** **untestable.** ⚠ **Assumed at nil.** **If he would have, the saving is about 9 per cent larger, and that is not in any figure in this paper.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _This works if the fit-out is 335,000, which is a figure with a range of 310 to 360; if picking time falls by 20 per cent, which four weeks of timed picking will test by 30 September; and if the second landlord would not have raised us anyway, which nobody can check and which I have assumed at nil._'));
out.push(note("The third item is the kind learners reliably miss, because it is a counterfactual rather than a forecast — whether the landlord would have raised the rent anyway. Counterfactuals are the purest untestable assumptions and they are usually hiding inside a saving. Ask the class, of every saving in their plans, what the world would have done if they had done nothing; about a third of the time there is a counterfactual in there that has quietly been assumed favourably."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **As a figure with a range, not an assumption** — **598, 640 and 711, using the middle one.** ⚠ **And he says what the range changes:** *at 711 the June commitment is 711 and option B still works; at 598 we are 42,000 better off and nothing else changes.*'));
out.push(p('**2** ⚠ **The northern wholesale trade, and the second chemist closing.** ⚠ *The agent has an interest in telling me this and I have treated it as worth nothing.*'));
out.push(p('**3** ⚠ **So that in eighteen months, if the site has not worked, the firm can say which of these failed and whether anybody could have known.** ⚠ **The two sentences are: a count of 140 is a testable assumption that failed with the test in the plan; a wholesale recovery with sixty square metres taken is an untestable one and nobody was negligent.**'));
out.push(p('⚠ **The *not for persuasion* line is what makes the appendix honest, and it should be marked.** ⚠ **An assumptions page written to persuade will contain only the assumptions that survive**, **and the one the firm needs in eighteen months is the one that did not.**'));
out.push(p('⚠ **And *I have put nothing in, and I want it noted that I wanted to* is worth five minutes.** ⚠ **It records the writer\'s own temptation** — **which tells a reader that the nil is a decision rather than an oversight, and is the most credible thing on the page.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (131 words)', [
  '**STOCK CONSOLIDATION, APPENDIX A: WHAT HAS TO BE TRUE. R. Haddad, 6 June.**',
  '⚠ **Not assumptions at all — figures with ranges. The fit-out is 335,000, from quotations at 310, 335 and 360. At 360 the plan still works; at 310 we are 25,000 better off and nothing else changes.**',
  '⚠ **Testable, with the test and the date. That picking time falls by 20 per cent. Test: four weeks of timed picking from week two, on the warehouse manager\'s stopwatch and not mine. Decision point: 30 September.**',
  '⚠ **Untestable, and therefore assumed at nil. That the second landlord would not have raised us in 2026 anyway. If he would have, the saving is about 9 per cent larger, and that figure is nowhere in this paper. I wanted to include it and have not.**',
  '⚠ **What this appendix is for, which is not persuasion. So that in eighteen months anybody can say which of these failed and whether it was a mistake or a gamble.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ *Conditions remain stable*, **or anything that cannot fail identifiably.** ⚠ **A figure sitting in the assumptions list.** ⚠ **A test with no date.** ⚠ **Untestable upside inside the arithmetic.** ⚠ **And a missing *not for persuasion* line, without which the page will have been written selectively.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the untestable items only.** ⚠ **The class says of each whether it has been assumed at nil, and whether the note names whose interest the upside serves.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (226 words)', [
  '⚠ **In 2023 we took on a contract on the assumption that the customer\'s second site would open in the spring.**',
  '**It did not open until the following March. The contract lost us about 700,000 and we have been arguing ever since about whose fault it was.**',
  '⚠ **Here is what I now understand about that argument.** **It cannot be settled, because nobody wrote the assumption down, and so there is no way to establish whether it was testable.**',
  '⚠ **I think it was.** **Their planning application was public. Their fit-out contractor was a firm we use. Two telephone calls in February would have told us the second site was six months behind, and I did not make them because it had not occurred to me that the opening date was an assumption** — **it was in their letter, so it felt like a fact.**',
  '⚠ **That is the thing I would teach anybody.** **A date in somebody else\'s letter is an assumption, not a fact, and it belongs in the testable column with a telephone call against it.**',
  '⚠ **And if I had written it down and made the calls and been told the spring, it would have been a gamble that failed and nobody would have been at fault.** ⚠ **Because I did not write it down, we have had three years of a disagreement that no document can settle, and that is worth more than the 700,000 to me.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *was this testable, and was it tested?*** **And the useful follow-up: did it feel like a fact because somebody else had written it down?**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many had the failed assumption been written down beforehand? Usually none** — **and that is why nobody could afterwards say whether it was a mistake or a gamble, which is the question every post-mortem actually turns on.**'));
out.push(note("Two things in that sample are worth taking into any class. The first is the finding that a date in somebody else's letter feels like a fact because it is written down, when it is an assumption with a telephone call against it — and that category accounts for a great many failed plans. The second is the last paragraph: the money is not the loss the learner minds. Three years of an unsettleable disagreement is, and the assumptions page is the only thing that could have prevented it. That is the second purpose of the page doing more work than the first."));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  The option you recommend against, priced'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the test and most learners cannot do it on the first attempt** — **which is itself the finding, and should be said so without reproach.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **A figure in the option\'s own terms, the condition under which it is right, and a named person who holds that position with reasons.** **The first is two adjectives.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The best of it in its own terms with a figure; the condition under which it is right; and the writer\'s reason for thinking the condition is not met, with a check.**  2 ⚠ **Because the moment somebody states the real case in the meeting, the paper looks as though it had not understood it** — **and everything else in it is then read in that light.**'));
out.push(p('⚠ **The argument for this cycle is prudential and must be put that way.** ⚠ **A caricature is not a cheap win, it is an expensive one.** **Losing on a fair statement costs one decision; winning on a caricature costs the reader\'s trust in every later paper** — **and the second is not recoverable.**'));
out.push(p('⚠ **A figure in the other option\'s own terms is the demonstration that you understood it.** ⚠ *1.4 m of turnover at our margin.* **Not your discount of it** — **their best version of it, which is most of what a reader is actually assessing when they read a rejected option.**'));
out.push(p('⚠ **Name the condition and whose position it is.** ⚠ **An option with no condition is a straw man; one with a condition and a name is an argument somebody is having** — **and this is 18.5 again, where a rejected option in a file needed its re-examination condition.**'));
out.push(p('⚠ **And give the reason WITH a check.** ⚠ *The March walk-in figures would show it either way.* **A reason with no check is an opinion; a reason with a runnable check is an invitation** — **and a reader who can test the objection usually accepts it without running it.**'));
out.push(p('**Language box – Practise (sample):**  _**The option I argue against: hand both vehicles back and hire.**_ ⚠ _**The best of it:** no capital, cancellable at a month, and about 90,000 a year of premium buys the right to be wrong about 2028 volumes** — **which is cheap insurance if you think they will fall.**_ ⚠ _**Right if:** our volumes fall more than 15 per cent by 2028. That is the hire firm\'s case and also our own sales manager\'s, who said so in April._ ⚠ _**My reason, and the check:** our order book for 2027 is 11 per cent ahead; a reader can see the booked orders in the appendix._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'There is honestly nothing good about hiring. It costs 40 per cent more a day.'],
  ['B', 'Who proposed it?'],
  ['A', 'The hire firm. And our own sales manager, in April.'],
  ['B', 'What did he say?'],
  ['A', '…That if volumes fall we are stuck with vehicles for five years.'],
  ['B', 'Is that nothing?'],
  ['A', 'No. It is cheap insurance, if you think volumes will fall.'],
  ['B', 'How cheap? Give me the figure in its own terms.'],
  ['A', 'About 90,000 a year buys the right to be wrong about 2028.'],
  ['B', 'Which is the best point in the paper and you were going to leave it out.']
]));
out.push(note("The learner's opening claim is sincere and that is the thing to handle carefully: they are not concealing the other case, they genuinely cannot see it, because they have been arguing against the option for weeks. Who proposed it is the question that unlocks it, every time, because a real person with reasons has to be reconstructed. And notice what emerges: cheap insurance against being wrong, at 90,000 a year — which is a better statement of the case than the hire firm itself made, and the learner produced it in four exchanges."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The three parts for one option.** ⚠ **Then what the writer would lose if the reader chose it, and what they would lose by caricaturing it** — **and make them say both, because the comparison is the argument.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two options argued against', [
  '⚠ **1  Hand the vehicles back and hire.** ⚠ **The best of it:** **no capital, cancellable at a month; about 90,000 a year buys the right to be wrong about 2028 volumes.** ⚠ **Right if:** **volumes fall more than 15 per cent** — **the hire firm\'s case and our sales manager\'s, stated in April.** ⚠ **My reason and the check:** **the 2027 order book is 11 per cent ahead; the booked orders are in the appendix.**',
  '⚠ **2  Keep the mezzanine.** ⚠ **The best of it:** **it holds about 200 pallets of slow stock that would otherwise block the floor, and removing it costs 70,000 we would never see back.** ⚠ **Right if:** **the slow lines stay** — **which is the buyer\'s position, and she has been right about slow lines twice.** ⚠ **My reason and the check:** ⚠ **I cannot check this one.** **Whether the slow lines stay is a commercial judgement and hers is better than mine, so my objection to this option is weaker than my objection to option 1 and I have said so.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I recommend against hiring. The best of it is that 90,000 a year buys the right to be wrong about 2028. It is right if volumes fall more than 15 per cent, which is the sales manager\'s position. I think the condition is not met because the 2027 order book is 11 per cent ahead, and a reader can check the booked orders in the appendix._'));
out.push(note("The second entry does something the cycle does not ask for and it is the right answer: the learner finds that on this option they have no check, that the person holding the other view has a better record than they do, and that their objection is therefore weaker than their objection to the first option — and they say so. Ranking your own objections by strength is more persuasive than asserting all of them equally, and it costs nothing, because a reader can usually tell anyway."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Twice the floor for 300,000 a year, supporting about 1.4 million more turnover at the firm\'s margin; a lower fit-out per square metre because the wholesaler\'s shelving stays; and a likelier rent-free period after nine months empty, with the agent hinting at three months.**'));
out.push(p('**2** ⚠ **That the count was taken when the competing chemist had just reopened after a refit and was advertising; and that a sixty-square-metre unit cannot hold the wholesale lines at all, so a walk-in count measures the wrong thing for half the opportunity.** ⚠ **The writer says the second is better.**'));
out.push(p('**3** ⚠ **That the arithmetic turns on whether the wholesale trade is worth nothing and nobody in the firm can establish that it is.** ⚠ **And that a reader who takes the wholesale trade seriously should choose option C and would not be making a mistake** — *they would be disagreeing with me about one number that neither of us can check.*'));
out.push(p('⚠ **The third good point about option C is the one to notice, because nobody raised it.** ⚠ **The rent-free period after nine months empty is a point FOR the option that the writer found himself** — **and a writer who finds a point for the other side that nobody had made has established, beyond argument, that they are not managing the comparison.**'));
out.push(p('⚠ **And the ranking of the opposing reasons costs almost nothing and buys everything.** ⚠ *Both are real points and the second is better than the first.* **Conceding that one of the other side\'s reasons is strong buys the reader\'s attention for your answer to it, which is the only thing you wanted.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (136 words)', [
  '**VEHICLES, SECTION 5: OPTION C, AGAINST WHICH I RECOMMEND. R. Haddad, 7 June. Second draft.**',
  '⚠ **The best of it, in its own terms. No capital out, cancellable at a month, and about 90,000 a year of premium buys the right to be wrong about 2028 volumes. And one point nobody has raised: hire vehicles are replaced on failure within a day, where ours are off the road for about five days, which on last year\'s two failures was worth about 30,000.**',
  '⚠ **The condition, and whose position it is. Option C is right if our volumes fall more than 15 per cent by 2028. That is the hire firm\'s case and also our sales manager\'s, stated on 14 April, and his reason was specific: two of our four largest customers are themselves on short contracts.**',
  '⚠ **Why I think it is not met, and how a reader can check. The 2027 order book is 11 per cent ahead of 2026 at the same date; the booked orders are at the appendix. On his point about the short contracts I have no answer, and I have not pretended to.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A *best of it* with no figure.** ⚠ **A condition with no named holder.** ⚠ **Opposing reasons listed but not ranked.** ⚠ **A reason with no runnable check.** ⚠ **And a section that answers everything** — **which is the tell that something has been left out, because a real option always has one point you cannot answer.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *best of it* paragraph only.** ⚠ **The class says of each whether it contains a point the writer was not asked for.** **That is the test of whether the other case has really been made rather than reported.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (229 words)', [
  '⚠ **I argued for two years against taking on a second shift, and I won, and I would now like to write the other case properly because I have never done it.**',
  '**The case for the second shift was put by our production supervisor. What I said about it was that it would cost us more in supervision than it earned in output, which was true and was not his argument.**',
  '⚠ **His argument, as well as I can state it: a single shift means every machine failure is a day lost, because there is no night to catch up in. With two shifts, a morning failure is recovered the same night. He had the figures** — **eleven failures in 2023, about nine days lost, roughly 400,000 of output.**',
  '⚠ **It is right if machine failures continue at eleven a year. That is his position and he kept the log himself.**',
  '⚠ **My reason for thinking it is not met: we replaced the two worst machines in 2024 and failures fell to four. A reader can check the log, which he still keeps.** ⚠ **But I should say that his case was correct in 2023 and I won the argument in 2023, which means I won it for the wrong reason and was then rescued by a capital decision somebody else took.**',
  '⚠ **I have never said that to him, and writing it down has made it fairly obvious that I should.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *would the other side recognise their own case here?*** **Where the text states the other case better than the writer\'s own summary of it at the time, say so** — **that is the cycle working.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many would the other side recognise their own case? Usually one of three** — **and ask the other two what the person holding that view actually said, because in most cases nobody ever asked them.**'));
out.push(note("That piece is the most useful thing a learner can discover in this cycle: writing the other case properly, two years late, reveals that they won the argument for the wrong reason and were rescued by somebody else's capital decision. The last line is the right conclusion and should not be softened. Note also the structure — the learner states the supervisor's case with his own figures from his own log, which is what in its own terms means and is why the exercise cannot be done from memory of one's own objections."));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The ask'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the diagnosis: almost nobody named a date, and almost everybody got a conversation instead of a decision.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **A verb, an object, a body, a date, and the thing not being sought now with its return date.** **The first asks for guidance, which nobody can give and nobody can be held to.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What you want decided as a verb with an object; who decides it; when; and what happens if they do not decide it then.**  2 ⚠ **Mark it as not an ask, in its own line** — **because an unmarked non-ask gets treated as an ask by somebody, refused, and counted against you.**'));
out.push(p('⚠ **Guidance is the word to abolish.** ⚠ **Nobody can give it and nobody can be held to it**, **and four weeks later neither party can say what was decided** — **which is the commonest way a good paper produces nothing at all.**'));
out.push(p('⚠ **The fourth part is a timetable and not a threat, and it only reads as a threat if written as one.** ⚠ **Dates and no adjectives.** **A board that decides without knowing the timetable will ask in September why nobody mentioned it, and they will be asking the writer.**'));
out.push(p('⚠ **The identical top-and-bottom rule is Unit 6 at B2 and the only lesson in this course that has cost the firm money twice.** ⚠ **Not a shorter version at the top** — **the same four lines, word for word, because somebody will read one of the two and quote it, and if they differ by a word that word is what the meeting will be about.**'));
out.push(p('**Language box – Practise (sample):**  _**The ask:**_ ⚠ _**I ask the owner, on 20 June, to approve 335,000 for the stock consolidation, being the fit-out at the middle quotation and four weeks of double-running.**_ ⚠ _**I ask him to note that the racking, about 95,000, is not sought now and returns to him at week six.**_ ⚠ _**If it is not approved on 20 June, the double-running falls in the peak and the timed picking cannot be done before November.**_ ⚠ _**The mezzanine is not a decision for 20 June.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I would be grateful for the owner\'s guidance on how to proceed.'],
  ['B', 'What will the minute say in four weeks?'],
  ['A', '…That it was discussed.'],
  ['B', 'And what will you do on the strength of it?'],
  ['A', 'Nothing. I will wait to be told.'],
  ['B', 'And he will wait to be asked. What verb do you want?'],
  ['A', 'Approve. Approve 335,000.'],
  ['B', 'Who? When?'],
  ['A', 'The owner, on 20 June.'],
  ['B', 'And that is the first time anybody in this conversation could be held to anything.']
]));
out.push(note("B's closing line is the one to keep: the first time anybody could be held to anything. Learners defend guidance as courtesy and it is not discourteous — it is simply empty, and the emptiness is symmetrical. The writer waits to be told and the reader waits to be asked, and the paper has produced a meeting. The exchange is also short enough to run on every learner in a class in ten minutes, which is worth doing, because the rewrite is always the same four words: a verb, an object, a body, a date."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One ask in four parts.** ⚠ **Then why the top and bottom versions must be identical, and what happens if they differ by a word** — **and the two examples from this firm\'s own history, which are the only argument anybody needs.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two asks', [
  '⚠ **1  What:** **approve 335,000 for the consolidation fit-out.** ⚠ **Who:** **the owner.** ⚠ **When:** **20 June, at that meeting.** ⚠ **If not:** **the double-running falls in the peak and the timed picking cannot be done before November, so the 20 per cent claim is untested until the new year.**',
  '⚠ **2  What:** **agree that the mezzanine decision waits for the picking figures.** ⚠ **Who:** **the owner.** ⚠ **When:** **20 June.** ⚠ **If not:** ⚠ **nothing happens, and that is the honest answer** — **so this is not really an ask and I am going to mark it as a note instead, which is what 21.6 says to do.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I ask the owner to approve 335,000 on 20 June. If it is not approved then, the double-running falls in the peak and the picking cannot be timed before November. And the part of my paper that is not an ask is the mezzanine, which I have marked as a note._'));
out.push(note("The second entry is the test applied honestly and failing, which is the right outcome: the learner discovers that nothing happens if the reader does not agree, concludes it is not an ask, and marks it as a note. That is exactly the move the cycle prescribes and learners usually need to find it for themselves before they believe in it. The diagnostic is the fourth part: if you cannot say what happens when the reader does not decide, you were not asking for a decision."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Line 1 asks, with what the money is for. Line 2 says what is not sought now and when it returns. Line 3 gives the consequence of delay, in dates. Line 4 marks the non-ask and says what would follow if the board did take a view on it.**'));
out.push(p('**2** ⚠ **Because somebody will read one of the two and quote it.** ⚠ **The two examples: the three letters of September 2026, where the sentence carrying the date differed slightly in each and the difference became the argument; and the auditor\'s sentence quoted in half for two years.**'));
out.push(p('**3** ⚠ **Because it is written in dates and contains no adjective.** ⚠ **And because a board deciding without knowing that the test slips to September has been given an incomplete paper** — *the kind of incompleteness nobody notices until September, when it will be my fault and not theirs.*'));
out.push(p('⚠ **The fourth line is the best sentence on the page and it costs the writer his own recommendation.** ⚠ *If the board does take a view on it, option C and not option B is the one that follows.* **It is 21.5 and 21.6 arriving in one clause** — **and a writer who includes it has made the paper usable by a reader who disagrees with them, which is the only kind of usefulness a proposal has.**'));
out.push(p('⚠ **And *I have read them aloud one after the other to check* is a method, not a flourish.** ⚠ **A difference between two versions is audible in about four seconds and invisible on a desk** — **which is the same finding as the Book 1 Mid-Book Test\'s advice about finishing early.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (124 words)', [
  '**STOCK CONSOLIDATION: THE ASK. R. Haddad, 7 June. These four lines appear at the top of page 1 and at the foot of page 2, in the same words.**',
  '⚠ **I ask the owner, on 20 June, to approve 335,000 for the consolidation, being the fit-out at the middle quotation and four weeks of double-running.**',
  '⚠ **I ask him to note that the racking, about 95,000, is not sought now and returns to him at week six, on 1 August, with four weeks of timed picking attached.**',
  '⚠ **If it is not approved on 20 June, the double-running falls inside the peak, the timed picking cannot be done before November, and the 20 per cent claim is untested until the new year.**',
  '⚠ **The mezzanine is not a decision for 20 June. It is recorded so that nobody later thinks it was overlooked, and so that if the picking figures come in below 10 per cent, the mezzanine stays and this whole paper was wrong.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Guidance, a steer, thoughts, or views.** ⚠ **An ask with no date.** ⚠ **A consequence with an adjective in it.** ⚠ **An unmarked non-ask.** ⚠ **And two versions that differ** — **have them read aloud, because that is the only way the difference is found.**'));
out.push(p('⚠ **One thing to reward in the sample above.** ⚠ *If the picking figures come in below 10 per cent, the mezzanine stays and this whole paper was wrong.* **A writer who states the condition on which their own paper fails has made the ask much easier to grant**, **because the reader can see what they are not being asked to believe for ever.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — read the top and bottom versions aloud, one after the other.** ⚠ **The class listens for a difference, and a difference is audible in about four seconds.** **Expect one pair in three to differ, usually by a number or a date.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (221 words)', [
  '⚠ **The best paper I ever wrote produced nothing, and I know exactly which sentence did it.**',
  '**It was a twelve-page analysis of our returns process. Good figures, honest about what I could not establish, three real options. The last line said: "I would welcome the opportunity to discuss the way forward."**',
  '⚠ **What happened: it was discussed, twice, in meetings where it was the fourth item.** **Everybody agreed it was a good paper. Nobody decided anything, because nobody had been asked to.**',
  '⚠ **Eighteen months later a customer complained, the returns process came up again, and somebody said we should look into it.** **I said there was a paper. Nobody could find it. I had it.**',
  '⚠ **What was missing was all four parts.** **No verb, no body, no date, and no consequence of delay** — **and I had thought the last line was the polite ending rather than the ask.**',
  '⚠ **What I should have written: I ask you, at the June meeting, to approve option two and to authorise the two weeks of re-training it needs. If it is not approved in June, the re-training falls in the peak and cannot start before October.**',
  '⚠ **Four lines. The other twelve pages were fine.** ⚠ **And I have thought since about how many good papers in this company have died of their last sentence.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *which of the four parts is missing?*** **Name it specifically rather than saying the ask is weak.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **Which part was missing most often? It is the fourth, every time** — **and in most cases the writer had decided it would look like pressure, which is the belief this cycle exists to correct.**'));
out.push(note("The last line of that sample is the one to end the cycle on: how many good papers in this company have died of their last sentence. Everything else in the piece supports it — twelve good pages, three real options, honest about its gaps, and a closing sentence that asked for nothing and got it. Ask the class to go and look at the last line of the last paper they wrote. In most cases it will be some version of I would welcome the opportunity to discuss, and in most cases nothing happened."));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: the paper strong enough to defeat its author'));
out.push(stage('1', 'Get ready – Unit 21 quiz'));
out.push(table(['', 'The answer'], [
  ['**21.1**', '⚠ *What are you going to DO with this paper?* — **not *what do you want to know*, which produces a subject.**'],
  ['**21.2**', '⚠ **Could a sensible person choose each one? Do they differ in more than degree? Has any been decided?**'],
  ['**21.3**', '⚠ **What you do not earn · what you lose that was available · what gets harder.**'],
  ['**21.4**', '⚠ **Assume it at nil, say that you have, and put the upside in a note outside the arithmetic.**'],
  ['**21.5**', '⚠ **The best of it in its own terms with a figure · the condition and whose position it is · your reason, with a check.**'],
  ['**21.6**', '⚠ **What, who, when, and what happens if not** — **and the fourth is always the missing one.**'],
], [1, 7]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because if the board takes option C she commits 1.9 million on a reopening she argued against in December** — **so of the three people in the room she has the largest personal reason to want section 5 weakened, which is why she will not touch it.**  2 ⚠ **Take the sixty square metres and a written option over the adjoining sixty for six months at a fee** — **which converts the untestable wholesale assumption into a dated test: eight weeks for the walk-in count, November for the wholesale decision at a May price.**'));
out.push(p('⚠ **The chain of causation is the whole cycle and should be drawn on the board.** ⚠ **Nadia insists on a fair section 5 → section 5 contains the word *untestable* → Nour asks why that stays true → the empty unit next door becomes a mechanism → the assumption acquires a date.** ⚠ **Remove the first step and the chain does not start.**'));
out.push(p('⚠ *You cannot find the test for an assumption you have not stated as an assumption.* ⚠ **That sentence joins 21.4 to 21.5 and is the most reusable thing in the unit** — **and it explains why the argument for fairness in 21.5 is practical rather than moral.**'));
out.push(p('⚠ **Nour\'s declaration of her own interest is the move to teach separately.** ⚠ **The person with the largest reason to want a paper weakened is the person who must not touch it, and saying so out loud is what makes the rest of the conversation possible** — **because Bassel had just asked her to authorise it and she had wanted to.**'));
out.push(p('⚠ **And the four-word question is the practical takeaway.** ⚠ *Why does that stay true?* **Applied to any sentence containing *cannot be checked*, it is the most productive question in Unit 21** — **because most untestable things are untestable only under the arrangement that happens to have been proposed.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The five steps, with a sample run.**'));
out.push(table(['B asks', 'A answers (sample)'], [
  ['**Which sentence says something cannot be checked?**', '⚠ **"We cannot know whether the slow lines will sell before we commit the racking."**'],
  ['**Why does that stay true? What arrangement makes it untestable?**', '⚠ **Because the racking is bought and installed in one order, so we find out after we have committed.**'],
  ['**What would have to be different for somebody to check it?**', '⚠ **Racking for one aisle first, and the slow lines in it for six weeks.**'],
  ['**Can you buy that for a fee rather than a decision?**', '⚠ **The supplier will hold the price on the remaining aisles for ninety days for 4,000.**'],
  ['**And what date would the test then have?**', '⚠ **Six weeks from installation, so about 15 August, with the price held to 18 September.**'],
], [3.4, 5.6]));
out.push(note("Run this on a real sentence from a learner's own work and insist on the second step, which is where the thinking happens. Why does that stay true almost always has the same answer: because of the order in which we had planned to do things. The fourth step is the one nobody reaches unaided — can you buy the test as a fee — and in the sample it costs four thousand to convert an unverifiable commitment into a dated one. That ratio is typical, and it is why fourth options are not in original option sets: nobody looks for a fee when they are choosing between decisions."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One *cannot be checked* sentence, why it stays true, the arrangement that would change it, the fee and the date.** ⚠ **And the chain** — **because a class that can recite the chain understands why 21.5 is worth its risk.**'));
out.push(stage('4', 'Your turn'));
out.push(sample('Sample — two untestable things', [
  '⚠ **1  The untestable thing:** **whether the slow lines will sell once they are reachable.** ⚠ **Why it stays untestable:** **the racking is ordered and installed in one go.** ⚠ **What would make it testable:** **one aisle first, six weeks of trading.** ⚠ **The fee and the date:** **4,000 to hold the price ninety days; test complete about 15 August.**',
  '⚠ **2  The untestable thing:** **whether our largest customer would move if we raised prices 4 per cent.** ⚠ **Why it stays untestable:** **we would have to raise them to find out, and the raise is irreversible in practice.** ⚠ **What would make it testable:** ⚠ **nothing I can construct.** **A partial raise on two lines is still a raise, and they will not answer a hypothetical.** ⚠ **So this one is genuinely untestable and goes to Appendix A at nil, which is the honest outcome and not a failure of the exercise.**',
]));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The mediation, in full.** ⚠ **Three people are right and the resolution is not a compromise** — **it is a fourth option that none of them had.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Bassel**', '⚠ **a fairly stated option C may defeat his recommendation, and his own paper will have done it**', '⚠ **authorship of the winning option** — **and he writes into the paper that Nour found it, after being told not to**'],
  ['**Nadia**', '⚠ **a paper written properly cannot be unwritten because the writer has seen where it leads**', '**nothing, and she says so**'],
  ['**Nour**', '⚠ **she has the largest personal reason to want section 5 weak, which disqualifies her from touching it**', '⚠ **her December position** — **she goes to the board recommending a larger commitment than the one she opposed**'],
], [1, 4.4, 4.4]));
out.push(p('**Report (sample):**  _Everybody is right. Bassel is right that a fair section 5 may defeat him. Nadia is right that it cannot be unwritten. Nour is right that she is the wrong person to want it weakened. So section 6 is a fourth option — sixty square metres plus a written option over the adjoining sixty for six months at about 45,000 — and Bassel gives up authorship while Nour gives up her December position._'));
out.push(p('⚠ **And the line the unit exists for:** *"I would not have found it reading a paper with three lines of straw in the middle of it."* ⚠ **Mark it as the return on 21.5, and mark that it is a practical return** — **put to a class that thinks fairness in a proposal is a courtesy, it is the only argument that changes behaviour.**'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7'], [['Answer', 'C', 'A', 'E', 'B', 'D', 'A', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**1 C** — *the right option if demand in the eastern district is larger*, **with 180,000 and 900,000 attached.**  **2 A** — *guidance*, *any steer*, **neither of which anybody can be held to.**  **3 E** — *the full amount at once · over two stages · over three stages*, **one course of action at three speeds.**  **4 B** — *that is the cost of taking no decision, and it is not nil*, **with 14,000 and six weeks.**  **5 D** — *assumed it at nil and said so; that figure appears nowhere in my arithmetic.*  **6 A** — *the way forward*, **no verb, no body, no date.**  **7 C** — *the view the previous manager set out in his note of 3 March, and his reasons were specific.***'));
out.push(p('⚠ **A and C are each used twice, and the rubric says a text may be used more than once.** ⚠ **Candidates read that and then distribute seven answers across five texts as though each must appear** — **which is the commonest Part 1 fault in the real examination and costs two marks here.**'));
out.push(p('⚠ **The method to teach: match on the single distinctive move in each extract rather than on its subject.** ⚠ **A is a guidance request; B is a priced decay; C is a named opposing view with figures; D is an excluded figure; E is three speeds.** **Five moves, seven questions** — **and once the moves are named, the repeats look obvious rather than suspicious.**'));
out.push(p('⚠ **Questions 2 and 6 both point at A and candidates often split them.** ⚠ **They test different faults in the same extract: 2 is about what cannot be held to, 6 is about the absence of a decision, an owner and a date** — **and one short extract can fail in two ways at once, which is exactly what makes it the worst of the five.**'));
out.push(stage('6', 'Write with help – Writing Part 2 sample'));
out.push(sample('Sample answer (132 words)', [
  '**REPORT: FUNDING THE CONSOLIDATION**',
  '**To:** **the owner**   **From:** **R. Haddad**   **Date:** **7 June**',
  '**The options.** **A commits the full 430,000 in June. B commits 335,000 in June and the remaining 95,000 at week six, after four weeks of timed picking. They differ in one thing: whether we spend before or after the evidence.**',
  '**What changing nothing costs.** **We pay two rents for a further year, about 540,000, and the picking figures we would rely on in 2028 will by then be four years old and taken on different racking.**',
  '**Recommendation and ask.** **I recommend B. I ask you to approve 335,000 on 20 June. If it is not approved then, the double-running falls inside the peak and the picking cannot be timed before November, so the 20 per cent claim stays untested until the new year.**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '⚠ **the options as a CONTRAST, with what they differ in** — **no mark for two descriptions side by side**'],
  ['**2**', '⚠ **the status quo priced, with a figure**'],
  ['**2**', '⚠ **and a decay** — **what will have gone stale, and that is the second mark here**'],
  ['**2**', '**a recommendation and an ask with a date**'],
  ['**1**', '⚠ **the consequence of delay, in dates and with no adjective**'],
  ['**1**', '120 to 140 words, with the count written at the end'],
], [1, 5]));
out.push(p('⚠ **The decay mark is the one that will be lost, and candidates lose it by pricing the status quo in money alone.** ⚠ *We pay two rents for a further year, about 540,000* **scores the figure and not the decay.** **The second mark needs the sentence about the picking figures being four years old and taken on different racking** — **which is what 21.3 calls the third cost and what nobody writes.**'));
out.push(p('⚠ **And do not accept two options described in parallel as a contrast.** ⚠ *A commits the full amount; B commits part of it* **is a description.** *They differ in one thing: whether we spend before or after the evidence* **is the contrast, and it is eleven words.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Two descriptions in place of a contrast.** ⚠ **A priced status quo with no decay.** ⚠ **An ask with no date.** ⚠ **An adjective in the consequence sentence.** ⚠ **And a word count outside 120 to 140.**'));
out.push(stage('7', 'Write freely'));
out.push(p('⚠ **Mark the five steps applied to a real case.** ⚠ **The honest outcome in about a third of cases is the second sample\'s: the thing is genuinely untestable and goes to the appendix at nil** — **and that is the exercise working, not failing.** **A class in which every learner finds a fourth option has been inventing them.**'));
out.push(pb());
out.push(stage('✓', 'Marking the unit check', 15));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'a', 'b', 'a', 'c', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one each. ⚠ **the fourth option: sixty square metres plus a written option over the adjoining sixty (1) · that she argued against the reopening in December, was wrong about neither threshold, and was now recommending a larger commitment than the one she had opposed, said in the first two minutes rather than on being asked (1) · that the fourth option was not in the first draft, became visible only when section 5 was written fairly, and was found by N. Mansour** — ⚠ **written in against her instruction, because a paper that takes credit for somebody else\'s idea is a paper nobody checks the rest of (2) · forty-five thousand, and in writing from the agent (1) · nothing, and she said so at the time (1).**',
  '**C  Reading — 5 marks:** ⚠ **the three good things: twice the floor for 300,000 supporting 1.4 m of turnover, the shelving staying, and the likelier rent-free period (2)** · **the second reason, about the wholesale lines (1)** · ⚠ **that the arithmetic turns on the wholesale trade being worth nothing, that nobody can establish it, and that a reader who chooses C would not be making a mistake (2).**',
  '**D  Writing — 6 marks:** **what you do not earn (1)** · ⚠ **with a source that is not the writer\'s own (1)** · **what you lose that was available (1)** · ⚠ **what decays (2)** · **and a date by which somebody would be right to call the evidence stale (1).**',
  '**Total 25.** ⚠ **The profile to expect: A high, B split, C split, D low.** ⚠ **B loses the third gap, which is worth two marks and asks for Bassel\'s reason as well as the fact.** ⚠ **C loses the third question, where candidates give the concession and omit *and would not be making a mistake*, which is the clause the whole of 21.5 turns on.** ⚠ **And D is the weakest section in the unit** — **the decay cost is missing from well over half of papers, and in most of those the writer has instead given a second money figure, which is 21.3\'s exact finding reproduced under examination conditions.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five faults to watch. First, the paper that answers a settled question. The remedy is one question asked of the reader — what are you going to DO with this paper — and it produces a decision where what do you want to know produces a subject. Where the reader cannot be asked, make them declare the guess on line one and invite correction: one line and eight seconds against eleven hundred words. Expect at least one learner to discover that their reader does not want a decision at all, which changes the document completely rather than cancelling it. Second, the option set with a dial in it. Run the three tests on the learners' own sets before discussing the principle, because about half of all first sets offer one course of action at two or three speeds, and a term length or a staging profile feels like a substantive choice. The diagnostic is four words: what do they differ in besides the number? And then ask for the option they have not written down, which is almost always the one they think is wrong — and thinking it wrong is the reason to answer it rather than the reason to omit it. Third, the unpriced status quo, and this is the cycle that transfers furthest beyond proposals. Teach the mechanism before the three costs: changing nothing requires no decision, no capital and no signature, so nobody proposes it and it arrives by itself as a postponement, and a postponement nobody has priced is indistinguishable from a decision nobody has taken. The third cost is the one never written — what decays while nobody is deciding — and it is the mechanism by which a postponement becomes permanent. Insist on a date by which somebody would be right to call the evidence stale, and insist that the first figure come from somebody else's count, because a foregone figure produced by the proposer is the least believed number on any page. Fourth, the mixed assumption list. Most of what learners call assumptions are figures with ranges; sorting those out leaves a real list of two or three things, which is both the point and the relief. The argument for assuming the untestable at nil is arithmetic and not prudence — make the learner produce their own discount and they will always discount further than the suspect item is worth, which is lose four by keeping two — and the upside survives as a note outside the arithmetic, where nobody discounts it. And teach the second purpose of the list, because it is the one that matters in eighteen months: which assumption failed, and could anybody have known, which is the difference between a mistake and a gamble and cannot be reconstructed afterwards without the page. Fifth, and this is where to spend the most time, the caricatured option. The argument is prudential rather than ethical and must be put that way: a caricature is an expensive win, because the reader who later hears the real case reads everything else in the paper in that light, and that is not recoverable. When a learner says there is honestly nothing good about the option, ask who proposed it and what they said; a real person with reasons has to be reconstructed, and the best statement of the other case usually arrives in four exchanges. Two notes on 21.7. Draw the chain on the board — a fair section 5 contains the word untestable, which prompts why does that stay true, which turns an empty unit next door into a mechanism, which gives the assumption a date — because the chain is the practical return on fairness and it does not start without the first step. And teach Nour's declaration as a move in its own right: the person with the largest reason to want a paper weakened is the person who must not touch it, and saying so out loud is what made the rest of the conversation possible. Finally, warn the class against inventing fourth options. In about a third of real cases the thing is genuinely untestable, goes to the appendix at nil, and that is the exercise working."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 21 · Answer Key');
module.exports = out;
