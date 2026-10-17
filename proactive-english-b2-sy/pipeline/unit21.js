// Proactive English B2 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 21  Specifications and Acceptance Criteria'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**21.1** A criterion you can fail   ·   **21.2** The band, and not the point   ·   **21.3** Who checks it, how, and with what',
  '**21.4** The word two people read differently   ·   **21.5** What this does not cover   ·   **21.6** The whole specification   ·   **21.7** Review & Mediate: the writer of the criterion and the man who has to meet it',
  '⚠ **Unit 16 wrote criteria that are failed by people.** **This unit writes them for things** — **a consignment, a drawing, a batch of handsets, a floor** — **and the difference is that a thing cannot explain itself.**',
  '**And the connection with 20 is worth making on the first day.** ⚠ **A specification is a bad-news letter written before the news** — **it says, in advance and in writing, what will be refused and why** — **and a supplier who has one has been told on the Monday what he would otherwise learn at the gate on the Thursday.**',
], C.lteal, C.teal));

// ===================== 21.1 =====================
out.push(pb());
out.push(h2('21.1  A criterion you can fail'));
out.push(p('**Function:** writing an acceptance criterion that can be failed   ·   **Grammar:** the criterion sentence — a thing, a limit and a figure   ·   **Pronunciation:** a figure read with its unit'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a specification you have worked to or written. ⚠ **Find one line in it and ask the question this unit turns on:** _could a delivery fail this line, and could two people looking at the same thing agree that it had?_ **Most lines fail the second half, and they are the lines that cause the arguments at the gate.**'));
out.push(board('The packaging must arrive undamaged and the goods must be in good condition.', 'No carton is to show a crush of more than 10 mm on any face.'));
out.push(p('**b**  Which can be failed? **1** _The packaging must be undamaged._  **2** _No carton is to show a crush of more than 10 mm on any face._  **3** _The surface must be properly finished._  **4** _The batch is to be delivered in good condition._  **5** _Not fewer than 48 of the 50 handsets are to ring on the first dial._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a criterion needs, and what does she say the word _undamaged_ costs?   **A** a stronger word; nothing   **B** **a thing, a limit and a figure** — and **_undamaged_ costs the argument at the gate, because it puts the quality manager\'s eye against the driver\'s eye with no document between them**   **C** a signature; the time it takes'));
out.push(p('**b**  Listen again. **1** What happened to Ms Shaaban over the January consignment?   **2** What does Ms Huda say about the word _properly_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  Undamaged', [
  ['Ms Huda', 'Ms Shaaban. The January consignment, and the two hours at the gate.'],
  ['Rim', '**I refused it on one line of our own specification:** _the packaging must arrive undamaged._ ⚠ **Four cartons out of ninety had a corner pushed in.**'],
  ['Ms Huda', '**And the driver?**'],
  ['Rim', '**He said they were undamaged.** ⚠ **And he was not being difficult.** **He meant that nothing inside them had moved and that he had carried that line for four years without a load being refused.**'],
  ['Ms Huda', '**So you had the same word and two readings of it. What was between you?**'],
  ['Rim', '⚠ **Nothing.** **My eye against his eye, and the line does not say whose eye decides.**'],
  ['Ms Huda', '**Which is the whole unit in one sentence.** ⚠ **A criterion that cannot be failed by a method cannot be passed by one either** — **and the person at the gate with the clipboard will always lose, because they are asking the other man to accept a judgement instead of a figure.**'],
  ['Omar', 'What does a criterion need, then?'],
  ['Ms Huda', '**Three things, and most lines have one.** ⚠ **A thing — what is being judged.** **A limit — more than, fewer than, within.** **And a figure, with its unit.**'],
  ['Rim', '**Ours has the thing and nothing else.**'],
  ['Ms Huda', '**Write the line again with all three.**'],
  ['Rim', '⚠ _No carton is to show a crush of more than ten millimetres on any face._ **And that is the line I could have held in front of him for two minutes instead of two hours.**'],
  ['Lubna', 'And the words that look like criteria?'],
  ['Ms Huda', '⚠ **_Properly_, _adequately_, _suitably_, _in good condition_, _to a high standard_, _as required_.** **Six words, and every one of them moves the decision from the page to whoever is standing there.**'],
  ['Mazen', 'I write _properly tested_ on every batch of handsets I send back.'],
  ['Ms Huda', '**And what does the man who receives them do?**'],
  ['Mazen', '⚠ **Whatever he likes, and then telephones me about it.** **Last month he dialled one number on one handset out of fifty.**'],
  ['Ms Huda', '**Which is the cost of _properly_ and it is not a small one.** ⚠ **_Properly tested_ gave him fifty handsets and no instruction, so he invented a test, and the test he invented is the cheapest one available to him.** **A word that leaves the method open is a word that chooses the cheapest method.**'],
  ['Dima', 'And reading the figures out loud?'],
  ['Ms Huda', '🔊 **The figure and its unit together, as one word, and the unit never dropped.** ⚠ **_Ten millimetres_, not _ten_.** **_Forty-eight of the fifty_, not _forty-eight_.** **A figure read without its unit is heard as an opinion about size.**'],
]));
out.push(sp());
out.push(box('Language box – a criterion you can fail', [
  '**A criterion needs three things and most lines have one.** ⚠ **A thing** _(what is being judged)_ · **a limit** _(more than, fewer than, within)_ · **a figure, with its unit.** _No carton is to show a crush of **more than 10 mm** on **any face**._',
  '⚠ **The test of a criterion: could a delivery fail it, and could two people looking at the same thing agree that it had?** **Most lines pass the first half and fail the second** — **and the second half is where the arguments at the gate come from.**',
  '**A criterion that cannot be failed by a method cannot be passed by one either.** ⚠ **The person with the clipboard will always lose**, **because they are asking the other man to accept a judgement instead of a figure.**',
  '**The six words that look like criteria and are not.** ⚠ _properly_ · _adequately_ · _suitably_ · _in good condition_ · _to a high standard_ · _as required_. **Every one of them moves the decision from the page to whoever is standing there.**',
  '⚠ **And a word that leaves the method open chooses the cheapest method.** **_Properly tested_ gave a man fifty handsets and no instruction, so he dialled one number on one of them** — **which is what _properly_ is worth when somebody else is paying for the time.**',
  '**The shapes.** _No ______ is to show ______ of more than ______._ _Not fewer than ______ of the ______ are to ______._ _Each ______ is to be within ______ of ______._ ⚠ **And the ones to strike out:** _must be undamaged_ · _must be properly finished_ · _in good condition_ · _to the satisfaction of the inspector_.',
  '**Pronunciation.** 🔊 **Track 21.2** **The figure and its unit together, as one word, and the unit never dropped.** ⚠ _Ten millimetres_, **not** _ten_. _Forty-eight of the fifty_, **not** _forty-eight_. **A figure read without its unit is heard as an opinion about size.**',
  '**And one thing about _undamaged_, which is the word this cycle began with.** ⚠ **It is not a weak word; it is a word with two honest readings** — **the quality manager means the carton and the driver means the contents** — **and a line that carries two honest readings is worse than a line that carries none, because both parties think they have the document on their side.**',
  '**Practise:** Rewrite as criteria that can be failed. **1** the packaging  **2** the surface finish  **3** the handsets  **4** the delivery time  **5** one with two honest readings, and the repair',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the line from the card. B rewrites it aloud as **a criterion with a thing, a limit and a figure.** ⚠ **Two rows on each card carry two honest readings** rather than none, and B must say what the two readings are before repairing the line. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line as written)_ __________.'],
  ['B', '**No __________ is to __________ more than __________.**'],
]));
out.push(table(['Card A – the line as written', 'Card B – the line as written'], [
  ['_The packaging must arrive undamaged._', '_The handsets are to be properly tested._'],
  ['_⚠ The consignment is to be delivered promptly._', '_⚠ The floor is to be level._'],
  ['_The surface must be properly finished._', '_The documents are to be submitted in good time._'],
  ['_⚠ The goods must be in good condition._', '_⚠ The batch is to be clean._'],
  ['_The work is to be to a high standard._', '_The index is to be adequately checked._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each repaired line, with its thing, its limit and its figure. ⚠ **The four rows marked ⚠ carry two honest readings rather than none** — _promptly_, _level_, _in good condition_, _clean_ — **and a line with two honest readings is worse than a line with none, because both parties believe the document is on their side.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take one line from a specification you work to. ⚠ **Rewrite it with a thing, a limit and a figure** — **and then read the old line and the new one to your partner and ask which of them a driver could argue with for two hours.**'));
out.push(p('**b**  Swap and perform. Your partner reads your figure **without its unit** and then with it. ⚠ They say which one sounds like an opinion.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim refused the January consignment on one line of her own specification — the packaging must arrive undamaged — because four cartons out of ninety had a corner pushed in. The driver said they were undamaged, and he was not being difficult: he meant that nothing inside them had moved, and he had carried that line for four years without a load being refused. So they had the same word and two readings of it, and nothing between them: her eye against his eye, and the line does not say whose eye decides. Which is the whole unit in one sentence — a criterion that cannot be failed by a method cannot be passed by one either, and the person at the gate with the clipboard will always lose, because they are asking the other man to accept a judgement instead of a figure. Omar asked what a criterion needs, and three things, of which most lines have one: a thing, which is what is being judged; a limit, which is more than, fewer than or within; and a figure, with its unit. Rim said hers has the thing and nothing else, and wrote the line again: no carton is to show a crush of more than ten millimetres on any face — the line she could have held in front of him for two minutes instead of two hours. Lubna asked about the words that look like criteria, and there are six of them: properly, adequately, suitably, in good condition, to a high standard, as required, and every one moves the decision from the page to whoever is standing there. Mazen said he writes properly tested on every batch of handsets, and the man who receives them dialled one number on one handset out of fifty — which is the cost of properly, because a word that leaves the method open chooses the cheapest method available. And Dima asked about the figures: the figure and its unit together, as one word, because a figure read without its unit is heard as an opinion about size._'));
out.push(p('**Listener task:** write your partner\'s repaired line, with its thing, its limit and its figure.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rim circulates after the January consignment, and the note under it. Answer the questions.'));
out.push(model([
  '**QUALITY DEPARTMENT · ACCEPTANCE CRITERIA, INWARD CONSIGNMENTS** _(issue 2 · 14 February · replaces issue 1 of 3 January)_',
  '**Why this page exists, which is one sentence.** ⚠ **On 9 January I spent two hours at the gate refusing a consignment on the line _the packaging must arrive undamaged_**, **and at the end of the two hours the line was still true for me and still true for the driver.**',
  '**1  Cartons.** **No carton is to show a crush of more than 10 mm on any face.** ⚠ **Measured on the deepest point of the crush with the steel rule kept at the gate.** **Checked on every carton in the top layer of each pallet and on four cartons drawn from the second layer.**',
  '**2  Seals.** **Every carton is to carry an unbroken seal.** ⚠ **A seal that has been cut and taped is a broken seal.** **This is the one line on the page with no figure in it, and it does not need one, because a seal is either unbroken or it is not** — **which is the test of whether a criterion needs a figure at all.**',
  '**3  Batch marking.** **The batch number on the carton is to be the batch number on the delivery note, in all twelve digits.** ⚠ **Not the first six.** **Four of the eleven disputes last year were a carton and a note agreeing in the first six digits and differing in the last two.**',
  '**4  Temperature, where it applies.** **Each of the four probes is to read within 2 degrees of the figure on the note.** ⚠ **Not the average of the four** — **the average of eleven degrees and seven degrees is nine, and nine is inside the band while neither reading is.**',
  '**5  What happens on failure, because a criterion with no consequence is a request.** ⚠ **A failure on 1 or 3 is a partial refusal: the cartons that fail are refused and the rest are taken in.** **A failure on 2 or 4 refuses the pallet.** **The driver is given the figure in writing at the gate and does not wait for a letter.**',
  '**NOTE for the department, which did not go out with the page.** ⚠ **Issue 1 had eleven lines and this has five.** **Six of the eleven could not be failed by any method** — _in good condition_, _properly stacked_, _suitable for storage_ — **and they were the six that produced every argument.** **I have not made the specification stricter; I have made it shorter and checkable.** **The driver on the ninth of January now gets a figure at the gate, and he has refused nothing since, which is the point.**',
]));
out.push(item('1', 'Why does line 2 have no figure in it, and what does that tell you?'));
out.push(item('2', 'What is the difference between a failure on line 1 and a failure on line 4?'));
out.push(item('3', 'What does the note say about the eleven lines of issue 1?'));
out.push(writers([
  'A page of acceptance criteria: **why the page exists, in one sentence** → **the criteria, numbered, each with a thing, a limit and a figure** → **the method beside each figure** → **and what happens on failure, because a criterion with no consequence is a request.**',
  '⚠ **Put the method in the same line as the figure.** _Measured on the deepest point with the steel rule kept at the gate._ **A figure with no method is an invitation to two readings, and the two readings arrive at the gate together.**',
  '**Say which lines need no figure.** ⚠ **A seal is either unbroken or it is not.** **The test is whether the thing has two states or a range** — **and a line with two states that has been given a figure is as bad as a range that has been given none.**',
  '**Refuse the average.** ⚠ _Each of the four probes is to read within 2 degrees_, **not** _the average of the four_. **The average of eleven degrees and seven degrees is nine, and nine is inside the band while neither reading is** — **which is how a specification passes a load it was written to refuse.**',
  '⚠ And **grade the consequences.** **A failure on the marking refuses the cartons; a failure on the seal refuses the pallet.** **A specification with one consequence for everything is a specification somebody will stop applying by March.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page of acceptance criteria (80 words or more).'));
out.push(p('**______________ · ACCEPTANCE CRITERIA, ______________** _(issue ______ · ______________)_   **Why this page exists.** ⚠ **On ______________ I ______________ on the line _______________._**   **1  ______________.** **No ______________ is to ______________ more than ______________.** ⚠ **Measured ______________ with ______________.** **Checked on ______________.**   **2  ______________.** **Every ______________ is to ______________.** ⚠ **This line has no figure, because ______________.**   **3  ______________.** ⚠ **Not ______________** — **because ______________.**   **4  What happens on failure.** ⚠ **A failure on ______ is ______________.** **A failure on ______ ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each criterion has a thing, a limit and a figure with its unit',
  'The method of checking is in the same line as the figure',
  'Any line without a figure says why it does not need one',
  'What happens on failure, graded line by line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one criterion only**, and the room says whether a delivery could fail it and whether two people would agree that it had.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: why it exists, the numbered criteria with their methods, the line that needs no figure, and the graded consequences.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a thing, a limit and a figure in every line, the method beside the figure, a stated reason for any line without one, and graded consequences.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one of your criteria, and then read it with the figure removed and _properly_ put in its place.** ⚠ **The room says which version a driver could argue with for two hours** — **and then the harder question, which is whose time the argument is paid for in.** **It is the clipboard\'s, every time.** Then the sentence the cycle ends on, which is Ms Shaaban\'s: **at the end of the two hours the line was still true for me and still true for the driver.**'));
out.push(hw('Bring **one line** from a specification you work to that cannot be failed by any method, and the repaired version with its thing, its limit and its figure. ⚠ **Bring the method as well** — **the instrument, the place on the thing, and how many you check** — **because a figure with no method produces the same two hours at a different gate.**'));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  The band, and not the point'));
out.push(p('**Function:** writing a tolerance — the two limits rather than the target   ·   **Grammar:** _not less than · no more than · within ± · between … and …_   ·   **Pronunciation:** the two limits said as a pair'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Find a figure in a drawing or a specification you work to and ask what happens at the figure plus one.** **If the document does not say, somebody decides it on the day** — **and in most arguments about a figure, nobody has ever written down how much is too much.**'));
out.push(board('The gap should be thirty millimetres, more or less.', 'The gap is to be between 28 and 32 mm.'));
out.push(p('**b**  Which gives a band? **1** _The gap is to be 30 mm._  **2** _The gap is to be between 28 and 32 mm._  **3** _The gap is to be approximately 30 mm._  **4** _The gap is to be 30 mm ± 2 mm._  **5** _The gap is to be as close as possible to 30 mm._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a figure with no band does?   **A** nothing; it is understood   **B** **it makes every delivery either a pass or a failure at somebody\'s discretion** — and **the discretion is exercised by whoever is under the most pressure that week**   **C** it protects the buyer'));
out.push(p('**b**  Listen again. **1** What happened with Ms Sweidan\'s thirty millimetres?   **2** What does Ms Huda say about a tolerance that is tighter than the process?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  Thirty-one', [
  ['Ms Huda', 'Ms Sweidan. The joinery, and the thirty-one millimetres.'],
  ['Lubna', '**My drawing said thirty millimetres and the shadow gap came back at thirty-one.** ⚠ **I accepted it, and I could not say why I had accepted it.**'],
  ['Ms Huda', '**What would you have done at thirty-three?**'],
  ['Lubna', '⚠ **Refused it.** **And I cannot tell you what happens at thirty-two, which is the part that keeps me awake.**'],
  ['Ms Huda', '**Then your drawing has a target and no criterion.** ⚠ **A figure with no band is not a specification; it is a wish with a number attached to it** — **and the number makes it look like a specification, which is the dangerous part.**'],
  ['Rim', 'And who decides, in practice?'],
  ['Ms Huda', '⚠ **Whoever is under the most pressure that week.** **In February it is the buyer and the gap comes back at thirty; in June the programme is late and thirty-four goes in.** **Same drawing.**'],
  ['Lubna', '**So I write both limits.**'],
  ['Ms Huda', '**Both limits, and they are not always symmetrical, which is the next thing.** ⚠ _Between 28 and 32 mm._ **Or, where only one direction matters,** _not less than 28 mm_ **and nothing said about the upper, because a gap that is too wide is ugly and a gap that is too narrow does not take the movement.**'],
  ['Jad', 'Is a tighter band not always safer?'],
  ['Ms Huda', '⚠ **No, and this is the thing that surprises people.** **A band tighter than the process that makes the thing is a band that will be broken and then ignored** — **and once one line on a page is routinely ignored, the page is not a specification any more; it is a leaflet.**'],
  ['Mazen', 'How do you know what the process can hold?'],
  ['Ms Huda', '⚠ **You ask the man who runs it, before you issue the page, and you write down what he says.** **Twenty minutes, and it is the twenty minutes nobody spends.**'],
  ['Rim', '**And if he says he cannot hold the band I need?**'],
  ['Ms Huda', '**Then you have found that out in February rather than in June, which is worth the twenty minutes on its own.** ⚠ **And you have three choices and all three are honest: widen the band, change the process, or write the band you need and accept that you will be refusing work.** **What you must not do is write a band nobody can hold and then not refuse the work, because the third time you let it through, the band is gone.**'],
  ['Dima', 'And saying two limits out loud?'],
  ['Ms Huda', '🔊 **As a pair, with the fall on the second.** ⚠ _Between twenty-eight and thirty-**two**._ **Not two separate figures with a pause between them, which is how people read a range they do not believe in.**'],
  ['Omar', 'And the word _approximately_?'],
  ['Ms Huda', '⚠ **It is _properly_ from the last cycle with a figure next to it.** **_Approximately 30 mm_ tells the maker to use his judgement and tells the inspector to use hers** — **and the two judgements meet at the gate, exactly as they did on the ninth of January.**'],
]));
out.push(sp());
out.push(box('Language box – the band, and not the point', [
  '**A figure with no band is a wish with a number attached to it.** ⚠ **The number makes it look like a specification, which is the dangerous part.** _The gap is to be 30 mm_ **does not say what happens at 31.**',
  '**Who decides, when the page does not.** ⚠ **Whoever is under the most pressure that week.** **In February it is the buyer and the gap comes back at 30; in June the programme is late and 34 goes in** — **same drawing.**',
  '**The forms.** _between 28 and 32 mm_ · _30 mm ± 2 mm_ · _not less than 28 mm_ · _no more than 32 mm_ · _within 2 mm of the figure on the note_. ⚠ **And the ones that give no band:** _approximately_ · _about_ · _in the region of_ · _as close as possible to_.',
  '⚠ **Bands are not always symmetrical, and saying so is a professional act.** _Not less than 28 mm_, **with nothing said about the upper limit**, **because a gap that is too narrow does not take the movement and a gap that is too wide is only ugly.**',
  '**A band tighter than the process is a band that will be broken and then ignored.** ⚠ **And once one line on a page is routinely ignored, the page is not a specification; it is a leaflet.**',
  '**So ask the man who runs the process what it can hold, before you issue the page, and write down what he says.** ⚠ **Twenty minutes, and it is the twenty minutes nobody spends.** **If he cannot hold your band you have three honest choices — widen it, change the process, or keep it and accept that you will be refusing work** — **and one dishonest one, which is to keep it and not refuse.**',
  '**Pronunciation.** 🔊 **Track 21.4** **The two limits as a pair, with the fall on the second.** ⚠ _Between twenty-eight and thirty-**two**._ **Not two separate figures with a pause between them, which is how people read a range they do not believe in.**',
  '**And _approximately_ is _properly_ with a figure next to it.** ⚠ **_Approximately 30 mm_ tells the maker to use his judgement and the inspector to use hers** — **and the two judgements meet at the gate.**',
  '**Practise:** Give both limits. **1** a gap  **2** a weight  **3** a delivery window  **4** one where only the lower limit matters, and why  **5** one your process cannot hold, and the three honest choices',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the target figure from the card. B supplies **both limits**, and says **which direction actually matters and why.** ⚠ **Two rows on each card are asymmetrical** — only one limit does any work — **and B must say which and leave the other open.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the target)_ __________.'],
  ['B', '**Between __________ and __________** _(or)_ **not less than __________, and nothing said about the other, because __________.**'],
]));
out.push(table(['Card A – the target', 'Card B – the target'], [
  ['_A shadow gap of 30 mm._', '_A carton crush limit._'],
  ['_⚠ A load-bearing cover: 25 mm of concrete._', '_⚠ A seal: unbroken._'],
  ['_A delivery between 08.00 and 10.00._', '_A probe reading of 4 degrees._'],
  ['_⚠ A handset ring test: 50 handsets._', '_⚠ A proof correction window of 48 hours._'],
  ['_A print run of 12,000 sheets._', '_An index entry count of 400._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both limits for each target, and for the asymmetrical rows the direction that matters. ⚠ **Four rows do only one direction of work** — **concrete cover, a seal, the handset count and the proof window** — **and a band written on both sides of a one-sided requirement invites an argument about the side nobody cares about.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a figure you work to. ⚠ **Write both limits**, **and then ask the person who makes the thing whether the process can hold them** — **or, if you cannot ask today, write down what you believe the answer is and what you would do if it were no.**'));
out.push(p('**b**  Swap and perform. Your partner reads your band **as two separate figures with a pause** and then as a pair. ⚠ They say which one sounds believed in.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna\'s drawing said thirty millimetres and the shadow gap came back at thirty-one. She accepted it and could not say why she had accepted it. Asked what she would have done at thirty-three, she said she would have refused it — and she cannot say what happens at thirty-two, which is the part that keeps her awake. So her drawing has a target and no criterion: a figure with no band is not a specification but a wish with a number attached, and the number makes it look like a specification, which is the dangerous part. Rim asked who decides in practice, and whoever is under the most pressure that week — in February it is the buyer and the gap comes back at thirty, and in June the programme is late and thirty-four goes in, off the same drawing. So she writes both limits, and they are not always symmetrical: between twenty-eight and thirty-two, or, where only one direction matters, not less than twenty-eight and nothing said about the upper, because a gap that is too narrow does not take the movement and one that is too wide is only ugly. Jad asked whether a tighter band is not always safer, and no: a band tighter than the process that makes the thing will be broken and then ignored, and once one line on a page is routinely ignored the page is not a specification but a leaflet. Mazen asked how you know what the process can hold, and you ask the man who runs it before you issue the page and write down what he says — twenty minutes, and the twenty minutes nobody spends. Rim asked what happens if he cannot hold the band, and then you have found it out in February rather than June: widen the band, change the process, or keep it and accept that you will be refusing work. What you must not do is keep it and then not refuse, because the third time you let it through the band is gone. And Omar asked about approximately, which is properly with a figure next to it._'));
out.push(p('**Listener task:** write your partner\'s two limits, and whether the process can hold them.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lubna sends with the revised drawing, and the note under it. Answer the questions.'));
out.push(model([
  '**SHADOW GAP, EAST ELEVATION · TOLERANCES** _(drawing A-214, revision C · 3 March · to Mr Kabbani, joinery)_',
  '**What revision C changes, and it is only the tolerances.** ⚠ **Revision B gave a figure for every gap and a band for none of them.** **Four of the twelve gaps came back outside the figure and I accepted all four, which means revision B was not a specification.**',
  '**1  The shadow gap at the window heads.** **Between 28 and 32 mm.** ⚠ **Measured at three points on each head** — **two hundred millimetres in from each end and at the centre** — **with the gauge, not a rule.**',
  '**2  The gap at the cill.** **Not less than 26 mm, and no upper limit.** ⚠ **This one is asymmetrical and I want to say why.** **Below twenty-six the timber closes on the frame in August and the door of the cupboard behind it will not shut** — **and above thirty-two it is only a line that an architect can see and a client cannot.**',
  '**3  Alignment between adjacent heads.** **Within 1.5 mm of each other, whatever the gap is.** ⚠ **This is the tightest line on the drawing and it is tighter than the others on purpose.** **The eye reads the difference between two gaps and it does not read the gap** — **which is why a run of gaps at thirty-one is better work than a run alternating between twenty-nine and thirty-two.**',
  '**4  What I asked Mr Kabbani before I issued this.** ⚠ **Whether his saw and his fixing can hold one and a half millimetres across a run of four heads.** **He said yes on the heads and no across the whole elevation, because the blockwork behind it is out by six millimetres at the north end** — **which is not his work and was not on any drawing I had.**',
  '**5  So the drawing now says something it did not say in revision B.** **Across the whole elevation: within 4 mm.** ⚠ **Within the four heads of each bay: within 1.5 mm.** **Two bands for the same dimension at two scales, because that is what the building can actually hold.**',
  '**NOTE for the file, which did not go to the joiner.** ⚠ **The twenty minutes with Mr Kabbani produced the six millimetres in the blockwork, which nobody had recorded anywhere.** **Revision B would have had me refusing his joinery in July for somebody else\'s wall.** **I should also record that he has worked to one and a half millimetres on three previous jobs and has never been given it in writing** — **he assumed it, and on this elevation his assumption would have been wrong.**',
]));
out.push(item('1', 'Why is the gap at the cill asymmetrical, and what is the reason given for each side?'));
out.push(item('2', 'Why are there two bands for the alignment, and what decided them?'));
out.push(item('3', 'What did the twenty minutes with the joiner produce?'));
out.push(writers([
  'A tolerance note: **what the revision changes and why the last one was not a specification** → **each dimension with both limits** → **the method and the places it is measured** → **the asymmetrical ones, with the reason for each side** → **and what you asked the maker before you issued it.**',
  '⚠ **Say which line is the tightest and why it is tighter than the others.** _The eye reads the difference between two gaps and does not read the gap._ **A tolerance with a reason attached survives the week the programme is late; one without a reason is the first thing traded.**',
  '**Give two bands at two scales where the thing has two scales.** ⚠ _Within 1.5 mm inside each bay; within 4 mm across the elevation._ **One band for both is either unbuildable or useless, and which of the two it is depends on which number you chose.**',
  '**Record what the maker told you.** ⚠ _He said yes on the heads and no across the elevation, because the blockwork is out by six millimetres at the north end._ **That sentence is worth more than the drawing, because it is the only place the six millimetres is written down.**',
  '⚠ And **say what the last revision cost.** _Four of the twelve gaps came back outside the figure and I accepted all four, which means revision B was not a specification._ **A writer who records their own failed line is a writer whose next line is believed.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the tolerance note (80 words or more).'));
out.push(p('**______________ · TOLERANCES** _(______________, revision ______ · ______________)_   **What this revision changes.** ⚠ **The last one gave ______________ and ______________ for none of them.**   **1  ______________.** **Between ______ and ______.** ⚠ **Measured at ______________ with ______________.**   **2  ______________.** **Not less than ______, and no upper limit.** ⚠ **This one is asymmetrical and I want to say why.** **Below ______ ______________; above ______ ______________.**   **3  ______________.** ⚠ **Within ______, and it is the tightest line here on purpose, because ______________.**   **4  What I asked ______________ before I issued this.** ⚠ ______________. **He said ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both limits on every dimension, with the unit',
  'The method and the places the measurement is taken',
  'Asymmetrical bands marked, with a reason for each side',
  'What the maker said the process can hold, recorded',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one tolerance only**, and the room says whether the process has been asked and what the answer was.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full tolerance note (180 words or more), to the shape in the writer\'s box: what the revision changes, both limits with methods, the asymmetrical lines with reasons, and what the maker said.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both limits on every figure, the measuring method and places, a reason on each side of any asymmetrical band, and the maker\'s answer recorded.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your tightest tolerance, and say what you would do if the maker could not hold it.** ⚠ **The room listens for which of the three honest choices you take** — **widen it, change the process, or keep it and refuse work** — **and for the fourth answer, which is the one everybody gives and which is not a choice at all.** Then the sentence the cycle ends on, which is Ms Sweidan\'s: **I accepted it, and I could not say why I had accepted it.**'));
out.push(hw('Bring **one figure** you work to that has no band, with **both limits written** and the direction that actually matters marked. ⚠ **And bring what the person who makes the thing says the process can hold** — **by telephone if you cannot see them** — **because a band written without that answer is a band you will break yourself by June.**'));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  Who checks it, how, and with what'));
out.push(p('**Function:** writing the method of verification beside the criterion   ·   **Grammar:** the passive of verification — _is to be checked by · against · on a sample of_   ·   **Pronunciation:** the instrument named and not swallowed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Take a criterion with a good figure in it and ask the four questions nobody writes down:** _who checks it · with what · against which document · and how many._ **A figure with four unanswered questions behind it is four arguments waiting for a Thursday.**'));
out.push(board('Somebody will check the handsets before they go back.', 'Each handset is to be checked by the bench technician against the test card, on all fifty.'));
out.push(p('**b**  Which gives a method? **1** _The batch is to be tested._  **2** _Each handset is to be checked by the bench technician against the test card, on all fifty._  **3** _The batch is to be tested before despatch._  **4** _Testing is the responsibility of the supplier._  **5** _Four units are to be drawn at random and checked against clause 3 with the meter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a criterion with no method measures?   **A** the thing   **B** **the equipment and the habits of whoever happens to check it** — and **a specification that does that is comparing suppliers by their instruments and not by their work**   **C** nothing at all'));
out.push(p('**b**  Listen again. **1** What were the four questions behind Mr Hariri\'s handset batch?   **2** What does Ms Huda say about _at random_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  One number on one handset', [
  ['Ms Huda', 'Mr Hariri. Fifty handsets, and the one number.'],
  ['Mazen', '**I sent fifty back to the exchange marked _properly tested_.** ⚠ **The man there dialled one number on one handset and signed for the batch.**'],
  ['Ms Huda', '**And three weeks later?**'],
  ['Mazen', '⚠ **Eleven came back.** **Nine of them dial out and will not receive** — **which is the fault my own test does not look at either, and I had not noticed that until I wrote it down.**'],
  ['Ms Huda', '**So the two of you have different tests and neither of them is written anywhere.** ⚠ **Which means the specification measures your bench and his desk, and not the handsets.**'],
  ['Rim', 'What does a method need?'],
  ['Ms Huda', '**Four things, and they are four questions nobody writes down.** ⚠ **Who checks it. With what. Against which document. And how many.**'],
  ['Mazen', '**Mine answers none of them.**'],
  ['Ms Huda', '**Answer them out loud, now, for the handsets.**'],
  ['Mazen', '⚠ _Each handset is to be checked by the bench technician, with the line simulator, against the test card of 4 March, on all fifty._ **And the test card has to say dial out and receive, because nine of the eleven were the second one.**'],
  ['Jad', 'And when the sample is not all of them?'],
  ['Ms Huda', '⚠ **Then the number and the way they are drawn, both.** _Four units drawn from different pallets_ **is a method;** _four units at random_ **is a word that sounds like one.**'],
  ['Omar', 'Is _at random_ not stricter than choosing?'],
  ['Ms Huda', '**It is stricter in a laboratory and looser at a gate.** ⚠ **Nobody at a gate is random.** **A man in a hurry takes the four cartons he can reach, which are the four on the near corner of the top layer** — **and those are the four the loader put there because they are the best.**'],
  ['Rim', '**Which is why my page says the top layer and four from the second.**'],
  ['Ms Huda', '**And that is a method, because somebody else could repeat it and get the same answer.** ⚠ **That is the test of a method: another person, on another day, arriving at the same result** — **and if they would not, you have written a preference.**'],
  ['Lubna', 'And the instrument?'],
  ['Ms Huda', '⚠ **Named, and the one kept where the check happens.** _With the steel rule kept at the gate_, **not** _with a rule_. **Two rules disagree by half a millimetre and the argument that follows is about the rules.**'],
  ['Dima', 'And saying all that out loud?'],
  ['Ms Huda', '🔊 **The instrument gets its own stress and is never swallowed.** ⚠ _Checked with the **line simulator** against the **test card**._ **People run the four answers together into one breath, and the one that disappears is always the instrument** — **which is the one the other side needed to hear.**'],
]));
out.push(sp());
out.push(box('Language box – who checks it, how, and with what', [
  '**A method answers four questions, and they are the four nobody writes down.** ⚠ **Who checks it · with what · against which document · and how many.** _Each handset is to be checked **by the bench technician**, **with the line simulator**, **against the test card of 4 March**, **on all fifty**._',
  '**A criterion with no method measures the equipment and the habits of whoever happens to check it.** ⚠ **A specification that does that is comparing suppliers by their instruments and not by their work.**',
  '**The forms.** _is to be checked by_ · _against clause 3_ · _with the gauge kept at the gate_ · _on a sample of four drawn from different pallets_ · _at three points on each head_ · _before despatch and again on arrival_.',
  '⚠ **_At random_ is stricter in a laboratory and looser at a gate, because nobody at a gate is random.** **A man in a hurry takes the four cartons he can reach, and those are the four the loader put there because they are the best.**',
  '**The test of a method: another person, on another day, arriving at the same result.** ⚠ **If they would not, you have written a preference** — **and a preference cannot be met in advance, which is the whole reason the supplier needed the method.**',
  '**Name the instrument, and name the one kept where the check happens.** ⚠ _With the steel rule kept at the gate_, **not** _with a rule_. **Two rules disagree by half a millimetre and the argument that follows is about the rules.**',
  '**Pronunciation.** 🔊 **Track 21.6** **The instrument gets its own stress and is never swallowed.** ⚠ _Checked with the **line simulator** against the **test card**._ **People run the four answers together into one breath, and the one that disappears is always the instrument.**',
  '**And one thing about writing the method down that is not about arguments at all.** ⚠ **Mr Hariri found, in the act of writing his own test, that it does not look at incoming calls** — **and nine of his eleven returns were incoming.** **A method written down is a method you can read; a method in somebody\'s hands is invisible to the person using it.**',
  '**Practise:** Write the method. **1** the handsets  **2** the cartons  **3** the shadow gap  **4** one with a sample, drawn so that another person could repeat it  **5** one where writing the method shows the test is looking at the wrong thing',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criterion from the card. B supplies **the method: who, with what, against which document, and how many.** ⚠ **Two rows on each card are sampled rather than checked in full**, and B must draw the sample so that **another person on another day would arrive at the same result.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the criterion)_ __________.'],
  ['B', '**Checked by __________, with __________, against __________, on __________.**'],
]));
out.push(table(['Card A – the criterion', 'Card B – the criterion'], [
  ['_No carton is to show a crush of more than 10 mm._', '_Each handset is to dial out and receive._'],
  ['_⚠ The batch marking is to match the delivery note._', '_⚠ The shadow gaps are to be within 1.5 mm of each other._'],
  ['_Each probe is to read within 2 degrees of the note._', '_The proof is to carry no uncorrected marked error._'],
  ['_⚠ The index entries are to match the text pages._', '_⚠ The print run is to be within 2 per cent of 12,000._'],
  ['_Every carton is to carry an unbroken seal._', '_The minutes are to carry the date of every action._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four answers for each criterion, with the instrument named. ⚠ **The four rows marked ⚠ are sampled**, and a sample is only a method if it says **how many and how drawn** — _four from different pallets_, **not** _four at random_, **because nobody at a gate is random.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a criterion you work to. ⚠ **Write its method in one sentence, with all four answers** — **and then ask the question Mr Hariri found:** _does my own test actually look at the thing that comes back?_'));
out.push(p('**b**  Swap and perform. Your partner reads your method **swallowing the instrument** and then stressing it. ⚠ They say which one could be repeated by somebody else.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen sent fifty handsets back to the exchange marked properly tested, and the man there dialled one number on one handset and signed for the batch. Three weeks later eleven came back, nine of which dial out and will not receive — which is the fault his own test does not look at either, and he had not noticed that until he wrote it down. So the two of them have different tests and neither is written anywhere, which means the specification measures his bench and the other man\'s desk and not the handsets. Rim asked what a method needs, and four things, which are four questions nobody writes down: who checks it, with what, against which document, and how many. Mazen answered them out loud for the handsets — each handset is to be checked by the bench technician, with the line simulator, against the test card of the fourth of March, on all fifty — and added that the test card has to say dial out and receive, because nine of the eleven were the second one. Jad asked about samples, and then the number and the way they are drawn, both: four units drawn from different pallets is a method, and four units at random is a word that sounds like one. Omar asked whether at random is not stricter than choosing, and it is stricter in a laboratory and looser at a gate, because nobody at a gate is random — a man in a hurry takes the four cartons he can reach, which are the four the loader put there because they are the best. Rim said that is why her page names the top layer and four from the second, and that is a method because somebody else could repeat it and get the same answer, which is the test of a method. Lubna asked about the instrument: named, and the one kept where the check happens, because two rules disagree by half a millimetre and the argument that follows is about the rules._'));
out.push(p('**Listener task:** write your partner\'s method, with all four answers and the instrument named.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the test card Mazen writes for the handset batches, and the note under it. Answer the questions.'));
out.push(model([
  '**HANDSET RETURNS · TEST CARD** _(card 3 · 4 March · replaces the verbal arrangement of eleven years)_',
  '**Why there is a card at all.** ⚠ **In February I returned fifty handsets marked _properly tested_ and the exchange dialled one number on one of them.** **Eleven came back in March and nine of the eleven dial out and will not receive** — **a fault my own bench test does not look at.** **Both of us were testing and neither of us was testing the same thing.**',
  '**1  Who.** **Every handset on this card is checked by me at the bench before it leaves, and by the duty technician at the exchange on arrival.** ⚠ **Both signatures on the same card, and the card travels with the batch.**',
  '**2  With what.** **The line simulator at the bench; the test line at the exchange.** ⚠ **Not a live subscriber line in either place** — **a live line is busy when it is busy, and a handset that fails on a busy line has not failed.**',
  '**3  Against what, and this is the part that was missing.** **Four tests on every handset: dial out · receive · hold without dropping for two minutes · and the earpiece at the volume on the card.** ⚠ **_Receive_ is new in card 3.** **It was in nobody\'s test and it is nine of the eleven returns.**',
  '**4  How many.** **All fifty, both ends.** ⚠ **Not a sample, and I want to put the reason here rather than leave it to be asked.** **These are handsets that have already failed once and been mended; the population is not a production batch and a sample of four tells you nothing about the other forty-six.**',
  '**5  What a failure means.** ⚠ **A handset that fails any of the four goes back to my bench and does not go into the batch.** **A handset that fails at the exchange comes back with the card marked at the test it failed** — **the test, not the word _faulty_** — **and that one word is why eleven came back in March with nothing written on them.**',
  '**NOTE for my own file.** ⚠ **The eleven years of _properly tested_ cost me about four afternoons a year of handsets going backwards and forwards.** **The card took forty minutes to write and the argument with the exchange about receiving took one telephone call, because once the four tests were on paper there was nothing left to disagree about.** **What I mind is that the gap was in my test and not in theirs, and I had been blaming them since the autumn.**',
]));
out.push(item('1', 'Why is a live subscriber line excluded at both ends?'));
out.push(item('2', 'Why are all fifty checked rather than a sample?'));
out.push(item('3', 'What does the note say the eleven years cost, and where was the gap?'));
out.push(writers([
  'A test card: **why the card exists** → **who checks, at both ends** → **with what, and what is excluded** → **against what, test by test** → **how many, with the reason for a sample or for all of them** → **and what a failure means, marked at the test and not with a word.**',
  '⚠ **Exclude the instrument that produces false failures and say why.** _Not a live subscriber line: a live line is busy when it is busy, and a handset that fails on a busy line has not failed._ **An exclusion with its reason attached is never argued with.**',
  '**List the tests, and mark the one that is new.** ⚠ _Receive is new in card 3. It was in nobody\'s test and it is nine of the eleven returns._ **A new line with its evidence beside it is adopted; a new line on its own is resented.**',
  '**Give the reason for the sample size before anybody asks.** ⚠ _These are handsets that have already failed once; the population is not a production batch and a sample of four tells you nothing about the other forty-six._ **Sample sizes are the line suppliers test first.**',
  '⚠ And **require the failure to be marked at the test.** _The test, not the word faulty._ **The word _faulty_ is why eleven handsets came back with nothing written on them** — **and a returns note with no test named on it is a month of somebody\'s afternoons.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the test card (80 words or more).'));
out.push(p('**______________ · TEST CARD** _(card ______ · ______________)_   **Why there is a card at all.** ⚠ **In ______________ I ______________ marked _______________ and ______________.**   **1  Who.** ______________, **and by ______________ on arrival.** ⚠ **Both signatures on ______________.**   **2  With what.** ______________. ⚠ **Not ______________** — **because ______________.**   **3  Against what.** **______ tests on every ______________: ______________ · ______________ · ______________.** ⚠ **______________ is new, and it is ______________.**   **4  How many.** ______________. ⚠ **And the reason, rather than leaving it to be asked:** ______________.   **5  What a failure means.** ⚠ ______________ **marked at the test, not with the word ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Who checks, named, at both ends where there are two',
  'The instrument named, and what is excluded with its reason',
  'The tests listed one by one, with any new one marked',
  'How many, with the reason for the number',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their _with what_ line only**, and the room says whether another person on another day would get the same result.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full test card (180 words or more), to the shape in the writer\'s box: why it exists, who, with what and what is excluded, the tests one by one, how many and why, and what a failure means.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: who checks, the instrument named with its exclusions, the tests listed one by one, the sample size with its reason, and a failure marked at the test.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your method, and then answer Mr Hariri\'s question about your own test:** _does it look at the thing that actually comes back?_ ⚠ **The room listens for whether the gap you found is in your test or in theirs** — **and in this room it has been in the writer\'s own test about half the time.** Then the sentence the cycle ends on, which is Mr Hariri\'s: **both of us were testing and neither of us was testing the same thing.**'));
out.push(hw('Write **the method for one criterion you work to**, with all four answers and the instrument named. ⚠ **Then find out what the other side actually does** — **ask them, do not assume** — **and bring the difference between the two methods, because that difference is where your returns come from.**'));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  The word two people read differently'));
out.push(p('**Function:** finding and defining the word that carries two honest readings   ·   **Grammar:** the defining clause that narrows a term — _by ___ is meant · for the purposes of this clause_   ·   **Pronunciation:** stress on the defined word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Read a clause you work to and look for the word that both sides would swear they understood.** **It is almost never a technical word.** **It is _immediately_, _working day_, _complete_, _new_, _available_, _final_** — **ordinary words, which is why nobody checks them.**'));
out.push(board('We will respond immediately and the work will be complete by Thursday.', 'By _immediately_ is meant within four working hours of the call being logged.'));
out.push(p('**b**  Which word carries two honest readings? **1** _within 48 hours_  **2** _immediately_  **3** _by 2 April_  **4** _a complete set of drawings_  **5** _at 10 mm_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Ms Huda say the dangerous words are?   **A** in the technical vocabulary   **B** **in the ordinary words both sides are sure they understand** — and **a definition is cheapest at the moment nobody thinks it is needed**   **C** in the figures'));
out.push(p('**b**  Listen again. **1** What did _immediately_ mean to each side in Mr Darwish\'s contract?   **2** What does Ms Huda say about glossaries?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  Immediately', [
  ['Ms Huda', 'Mr Darwish. Eleven sites, and the word _immediately_.'],
  ['Omar', '**Our maintenance clause says faults will be attended to immediately.** ⚠ **Both sides signed it and both sides meant something different, and we found that out in the second year.**'],
  ['Ms Huda', '**What did each of you mean?**'],
  ['Omar', '**I meant somebody starts on it as soon as the call is logged.** ⚠ **They meant the next time an engineer is in that governorate**, **which for two of the eleven sites is a fortnight.**'],
  ['Ms Huda', '**And was either of you reading it wrongly?**'],
  ['Omar', '⚠ **No, and that is what I cannot get past.** **_Immediately_ means without delay, and their engineer does not delay** — **he goes when he goes to that governorate.**'],
  ['Ms Huda', '**So the word is not vague; it is ordinary, which is worse.** ⚠ **Nobody checks an ordinary word.** **Both sides read it, both sides understood it, and neither of them had any reason to ask.**'],
  ['Rim', 'Where are these words, usually?'],
  ['Ms Huda', '⚠ **Never in the technical vocabulary.** **_Immediately_, _working day_, _complete_, _new_, _available_, _final_, _on site_** — **ordinary words, every one, and every one of them has two defensible readings in a contract.**'],
  ['Adnan', '_Working day_ has cost me a fortnight of arguments in nineteen years.'],
  ['Ms Huda', '**Say the two readings.**'],
  ['Adnan', '⚠ **Mine is Sunday to Thursday, and the ministry\'s includes the Saturday their registry opens** — **so a five-day period is five days to me and six to them, and the difference falls on whoever is late.**'],
  ['Lubna', 'And the remedy?'],
  ['Ms Huda', '**Define it in the clause, where it is used.** ⚠ _By_ immediately _is meant within four working hours of the call being logged._ **One sentence, in the clause, not in a glossary.**'],
  ['Jad', 'Why not a glossary? We have one.'],
  ['Ms Huda', '⚠ **Because a glossary is read once, by the person who writes it.** **The man standing at a site at four in the afternoon reads the clause in front of him and nothing else** — **and a definition three pages away from the word it defines may as well be in another document.**'],
  ['Omar', '**And how do you find the word before it costs you two years?**'],
  ['Ms Huda', '**Read the clause as the other side, and look for the reading that suits them.** ⚠ **Not the unreasonable reading** — **the reasonable one that is not yours.** **If you can construct it in under a minute, so can they, and they will, on the day it matters to them.**'],
  ['Dima', 'And saying the definition out loud?'],
  ['Ms Huda', '🔊 **The stress goes on the defined word and nowhere else.** ⚠ _By **immediately** is meant within four working hours._ **People stress _four working hours_, which is the part nobody is arguing about** — **the argument is about the word, so the word takes the stress.**'],
]));
out.push(sp());
out.push(box('Language box – the word two people read differently', [
  '**The dangerous words are never the technical ones.** ⚠ _immediately_ · _working day_ · _complete_ · _new_ · _available_ · _final_ · _on site_ · _reasonable notice_. **Ordinary words, every one, and every one with two defensible readings.**',
  '**And the reason is that nobody checks an ordinary word.** ⚠ **Both sides read it, both sides understood it, and neither of them had any reason to ask** — **which is why the discovery comes in the second year and not in the first week.**',
  '**_Immediately_, in one maintenance contract.** ⚠ **The customer meant _somebody starts when the call is logged_; the supplier meant _the next time an engineer is in that governorate_, which for two sites is a fortnight.** **Neither reading is wrong.**',
  '**The forms.** _By_ immediately _is meant ______._ _For the purposes of this clause, a working day is ______._ _Complete, in clause 4, means ______ and does not include ______._ ⚠ **And the one that does the most work:** _and does not include_.',
  '**Define it in the clause, not in a glossary.** ⚠ **A glossary is read once, by the person who writes it.** **The man standing at a site at four in the afternoon reads the clause in front of him and nothing else** — **and a definition three pages away may as well be in another document.**',
  '**How to find the word before it costs you two years.** ⚠ **Read the clause as the other side and look for the reading that suits them** — **not the unreasonable reading, the reasonable one that is not yours.** **If you can construct it in under a minute, so can they, and they will on the day it matters.**',
  '**Pronunciation.** 🔊 **Track 21.8** **The stress goes on the defined word and nowhere else.** ⚠ _By **immediately** is meant within four working hours._ **People stress _four working hours_, which is the part nobody is arguing about.**',
  '**And one thing about defining a word you have been using for years, which feels like an insult and is not.** ⚠ **A definition added in year three does not accuse anybody of anything; it records that two honest readings existed** — **and the sentence that makes it bearable is:** _we have both been reading this differently and neither of us noticed._',
  '**Practise:** Define the word. **1** _immediately_  **2** _working day_  **3** _complete_  **4** one with _and does not include_  **5** one you have been using for years, with the sentence that makes the definition bearable',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the clause from the card. B finds **the ordinary word with two readings**, gives **both readings**, and then **defines it in the clause.** ⚠ **Two rows on each card contain two such words**, and B must say which one the money turns on. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the clause)_ __________.'],
  ['B', '**Two readings of __________: __________ and __________.** **By __________ is meant __________.**'],
]));
out.push(table(['Card A – the clause', 'Card B – the clause'], [
  ['_Faults will be attended to immediately._', '_A complete set of drawings is to be issued._'],
  ['_⚠ Delivery within five working days of a firm order._', '_⚠ New parts only, available from stock._'],
  ['_The proof is to be returned corrected._', '_Payment on satisfactory completion._'],
  ['_⚠ Reasonable notice of a site visit._', '_⚠ The final version is to be lodged with the registry._'],
  ['_Spare handsets are to be held on site._', '_The index is to be checked against the text._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the word, both readings, and the definition. ⚠ **The four rows marked ⚠ contain two ordinary words each** — _within_ and _firm_ · _new_ and _available_ · _reasonable_ and _notice_ · _final_ and _lodged_ — **and the pairs must say which one the money turns on, because defining the wrong one of the two is the commonest way a definition is wasted.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a clause you work to. ⚠ **Read it as the other side and find the reasonable reading that is not yours.** **Then define the word in the clause** — **and add the sentence that makes a definition in year three bearable.**'));
out.push(p('**b**  Swap and perform. Your partner reads your definition **stressing the figure** and then **stressing the word.** ⚠ They say which one answers the argument.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar\'s maintenance clause says faults will be attended to immediately. Both sides signed it, both sides meant something different, and they found that out in the second year. He meant that somebody starts on it as soon as the call is logged; they meant the next time an engineer is in that governorate, which for two of the eleven sites is a fortnight. Asked whether either of them was reading it wrongly, he said no, and that is what he cannot get past: immediately means without delay, and their engineer does not delay — he goes when he goes to that governorate. So the word is not vague; it is ordinary, which is worse, because nobody checks an ordinary word. Both sides read it, both understood it, and neither had any reason to ask. Rim asked where these words usually are, and never in the technical vocabulary: immediately, working day, complete, new, available, final, on site — ordinary words, every one, and every one with two defensible readings in a contract. Adnan said working day has cost him a fortnight of arguments in nineteen years: his is Sunday to Thursday and the ministry\'s includes the Saturday their registry opens, so a five-day period is five days to him and six to them, and the difference falls on whoever is late. Lubna asked about the remedy, and define it in the clause where it is used — by immediately is meant within four working hours of the call being logged, one sentence, in the clause and not in a glossary. Jad asked why not a glossary, since they have one, and because a glossary is read once, by the person who writes it: the man standing at a site at four in the afternoon reads the clause in front of him and nothing else. And how you find the word before it costs two years: read the clause as the other side and look for the reasonable reading that is not yours. Not the unreasonable reading, which anybody can dismiss, but the reasonable one that happens not to be yours — and if you can construct it in under a minute, so can they, and they will, on the day it matters to them rather than to you._'));
out.push(p('**Listener task:** write your partner\'s word, both readings, and the definition.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the amendment Omar sends to the maintenance contract, and the note under it. Answer the questions.'));
out.push(model([
  '**MAINTENANCE AGREEMENT, ELEVEN SITES · AMENDMENT 2 — DEFINITIONS IN CLAUSE 6** _(11 April · to Mr Rifai)_',
  '**Why this amendment, and I want to be plain that it is not a complaint.** ⚠ **Clause 6 says faults will be attended to immediately.** **In two years I have read that as _somebody starts when the call is logged_ and you have read it as _the next time an engineer is in that governorate_** — **and both readings are defensible, which is why neither of us raised it.**',
  '**1  By _immediately_ is meant: an engineer on site within four working hours of the call being logged,** ⚠ **or, for Deir Atiyah and Salkhad, within one working day.** **Two figures, because the two of us both know that four hours to Salkhad is not a promise anybody can keep, and a clause that contains an impossible figure is a clause that gets ignored in all eleven places.**',
  '**2  By _working hours_ is meant: 08.00 to 16.00, Sunday to Thursday.** ⚠ **A fault logged at 15.00 on Thursday is due by 11.00 on Sunday.** **I have put the worked example in because the definition without it took four telephone calls last January.**',
  '**3  By _attended to_ is meant: an engineer physically at the machine, with the fault diagnosed and either repaired or a part ordered in writing.** ⚠ **It does not mean a telephone call, and it does not mean a remote session** — **not because those are worthless, but because for six of the eleven sites the fault is a cable or a drive and no remote session has ever mended one.**',
  '**4  What I am not asking for, and this is the part I would want to read if I were you.** ⚠ **I am not asking for a shorter time than four hours, and I am not asking for anything on a Friday or a Saturday.** **The clause as you have been reading it has given me nine of the eleven sites inside a day for two years** — **it is the two that are a fortnight, and those two are the ones with the one machine each.**',
  '**NOTE for my own file.** ⚠ **The cost of the two years is about forty hours of my own time and one lost morning for the registry at Salkhad.** **The cost of the amendment is two definitions and a worked example.** **I should record that Mr Rifai offered the one working day for the two distant sites himself, in the first telephone call, before I had asked** — **which is what happens when a definition is put as a difference of reading rather than as a failure.**',
]));
out.push(item('1', 'Why are there two figures in definition 1, and what is the reason given?'));
out.push(item('2', 'Why does the amendment say what _attended to_ does not mean?'));
out.push(item('3', 'What does the note say about how Mr Rifai responded, and why?'));
out.push(writers([
  'A definitions amendment: **why it exists, as two honest readings and not a complaint** → **each definition, in the clause** → **a worked example of the hardest one** → **what the term does not include, with the reason** → **and what you are not asking for.**',
  '⚠ **Put the definition where the word is used, and give a second figure where one figure would be impossible.** _Four working hours, or one working day for the two distant sites._ **A clause containing an impossible figure is ignored in all eleven places, not just the impossible two.**',
  '**Work one example through.** ⚠ _A fault logged at 15.00 on Thursday is due by 11.00 on Sunday._ **A definition with a worked example beside it saves four telephone calls, and the four calls are always about the boundary.**',
  '**Say what the term does not include, and say why it is excluded rather than merely excluding it.** ⚠ _Not because remote sessions are worthless, but because for six of the eleven sites the fault is a cable and no remote session has ever mended one._',
  '⚠ And **say what you are not asking for.** _I am not asking for a shorter time than four hours, and not for anything on a Friday._ **A definition offered as a difference of reading gets the concession volunteered in the first telephone call; one offered as a failure gets a lawyer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the definitions amendment (80 words or more).'));
out.push(p('**______________ · AMENDMENT ______ — DEFINITIONS IN CLAUSE ______** _(______________)_   **Why this amendment, and it is not a complaint.** ⚠ **Clause ______ says _______________.** **I have read that as ______________ and you have read it as ______________** — **and both readings are defensible, which is why ______________.**   **1  By _______________ is meant ______________,** ⚠ **or, for ______________, ______________.** **Two figures, because ______________.**   **2  By _______________ is meant ______________.** ⚠ **A ______________ at ______________ is due by ______________.**   **3  It does not mean ______________** — ⚠ **not because ______________, but because ______________.**   **4  What I am not asking for.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reason given as two honest readings, not as a complaint',
  'Each definition placed in the clause where the word is used',
  'A worked example of the boundary case',
  'What the term does not include, with the reason for excluding it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one definition only**, and the room says whether a person standing at a site at four in the afternoon could apply it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full amendment (180 words or more), to the shape in the writer\'s box: two honest readings, the definitions in the clause, a worked example, the exclusions with reasons, and what you are not asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: two honest readings rather than a complaint, the definition in the clause, a worked boundary example, exclusions with their reasons, and what you are not asking for.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the ordinary word you found, and both readings of it.** ⚠ **The room votes on which reading it would have taken** — **and the vote splits, every time, which is the demonstration the cycle is built on.** **Then say how long the two readings have been running side by side.** Then the sentence the cycle ends on, which is Mr Darwish\'s: **both sides signed it and both sides meant something different, and we found that out in the second year.**'));
out.push(hw('Take **one clause** you work to and read it as the other side. ⚠ **Bring the ordinary word, both reasonable readings, and the definition written into the clause** — **with the worked example of the boundary case**, **because the boundary is where the four telephone calls come from.**'));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  What this does not cover'));
out.push(p('**Function:** writing the scope and the exclusions of a specification   ·   **Grammar:** _this clause does not cover · other than · save for · excluding_   ·   **Pronunciation:** an exclusion said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a specification you work to. ⚠ **Ask what it does not cover, and then ask where that is written.** **In almost every case the answer to the first is long and the answer to the second is nowhere** — **and everything that is nowhere is assumed to be covered by the other side.**'));
out.push(board('The specification covers the forum, so I assume it covers the archive too.', 'This specification does not cover the archive, which is specified separately in document 4.'));
out.push(p('**b**  Which states an exclusion? **1** _This specification covers the upload module._  **2** _This specification does not cover the archive._  **3** _The archive may be dealt with elsewhere._  **4** _Other than the archive, all modules are covered._  **5** _The specification is comprehensive._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say an unwritten exclusion becomes?   **A** nothing   **B** **somebody else\'s assumption that it was included** — and **the person who did not write it down is the person who pays for it**   **C** a question at the meeting'));
out.push(p('**b**  Listen again. **1** What happened with Mr Attar\'s forum specification?   **2** What does Ms Huda say about the word _comprehensive_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  The archive was not in it', [
  ['Ms Huda', 'Mr Attar. The forum, and the archive.'],
  ['Jad', '**I wrote a specification for the forum: eleven criteria, every one with a figure and a method.** ⚠ **It is the best document I have written and it says nothing about the archive.**'],
  ['Ms Huda', '**And what did the other side think?**'],
  ['Jad', '⚠ **That the archive was in it.** **Not unreasonably** — **the archive is reached from the forum and it is on the same machine.**'],
  ['Ms Huda', '**Did your specification say it was not in it?**'],
  ['Jad', '⚠ **No.** **It said what it covered and never said what it did not** — **and I had thought those were the same sentence.**'],
  ['Ms Huda', '**They are not, and the gap between them is the subject of this cycle.** ⚠ **An exclusion that is not written down becomes somebody else\'s assumption that it was included** — **and the person who did not write it down is the person who pays.**'],
  ['Rim', 'Why does stating what you cover not do the work?'],
  ['Ms Huda', '**Because a reader with a thing in front of them that is not on your list has two explanations and chooses the kinder one.** ⚠ **Either you left it out on purpose, which means somebody must specify it, or you took it as obvious.** **Everybody chooses _obvious_, because _obvious_ costs them nothing today.**'],
  ['Omar', 'And how long should the exclusions be?'],
  ['Ms Huda', '⚠ **Shorter than people fear and longer than they write.** **Four lines on most documents.** **And they go near the front, not in an appendix** — **an exclusion in an appendix is an exclusion nobody has read.**'],
  ['Lubna', 'Does it not look evasive?'],
  ['Ms Huda', '**It looks evasive if you write the exclusion and stop.** ⚠ **It looks professional if you write where the thing is covered instead.** _This does not cover the archive, which is specified in document 4._ **An exclusion with a destination is a service; one without a destination is a door being shut.**'],
  ['Adnan', 'And when there is no destination?'],
  ['Ms Huda', '⚠ **Then you say that, and you say whose it is to write.** _The archive is not covered here and is not covered anywhere; it needs a specification and it is not mine to write._ **Which is an uncomfortable sentence and the most useful one on the page.**'],
  ['Jad', '**And the word _comprehensive_, which is in my covering letter?**'],
  ['Ms Huda', '⚠ **Strike it out.** **_Comprehensive_ is a promise about everything you have not thought of** — **and it converts every gap you did not notice into a thing you undertook to cover.** **No document has ever been improved by that word.**'],
  ['Dima', 'And reading an exclusion out loud?'],
  ['Ms Huda', '🔊 **Flat, at the same speed as everything else, with no apology in it.** ⚠ **People drop their voice on an exclusion** — _this, ah, does not cover the archive_ — **and a dropped voice invites the other side to try, because it tells them the writer is not sure the line will hold.**'],
]));
out.push(sp());
out.push(box('Language box – what this does not cover', [
  '**Saying what you cover is not the same sentence as saying what you do not.** ⚠ **An exclusion that is not written down becomes somebody else\'s assumption that it was included** — **and the person who did not write it down is the person who pays.**',
  '**Why stating the scope does not do the work.** ⚠ **A reader with a thing in front of them that is not on your list has two explanations and chooses the kinder one** — **either you left it out on purpose or you took it as obvious** — **and everybody chooses _obvious_, because _obvious_ costs them nothing today.**',
  '**The forms.** _This specification does not cover ______._ _Other than ______, all ______ are covered._ _Save for ______._ _Excluding ______, which is specified in ______._ ⚠ **And the one that does the most work:** _and is not covered anywhere_.',
  '**Length and position.** ⚠ **Shorter than people fear and longer than they write** — **four lines on most documents** — **and near the front, not in an appendix.** **An exclusion in an appendix is an exclusion nobody has read.**',
  '**An exclusion with a destination is a service; one without a destination is a door being shut.** ⚠ _This does not cover the archive, which is specified in document 4._ **And where there is no destination, say that too, and say whose it is to write:** _it needs a specification and it is not mine to write._',
  '⚠ **Strike out _comprehensive_.** **It is a promise about everything you have not thought of** — **and it converts every gap you did not notice into a thing you undertook to cover.** **No document has ever been improved by that word.**',
  '**Pronunciation.** 🔊 **Track 21.10** **Flat, at the same speed as everything else, with no apology in it.** ⚠ **People drop their voice on an exclusion** — _this, ah, does not cover the archive_ — **and a dropped voice invites the other side to try, because it tells them the writer is not sure the line will hold.**',
  '**And one thing about the exclusion that is uncomfortable to write, which is the one worth most.** ⚠ _It is not covered anywhere and it is not mine to write._ **Nobody thanks a writer for that sentence in April and somebody always finds it in September** — **and it is the only sentence that puts the gap in front of the person who can close it.**',
  '**Practise:** State the exclusion. **1** with a destination  **2** with no destination, and whose it is  **3** using _other than_  **4** one near the front rather than in an appendix  **5** one that strikes out _comprehensive_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the scope from the card. B states **what it does not cover**, with **a destination where there is one.** ⚠ **Two rows on each card have no destination at all**, and B must say so and say **whose it is to write.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(what the document covers)_ __________.'],
  ['B', '**This does not cover __________, which is __________** _(or)_ **__________, and it is not covered anywhere; it is __________ to write.**'],
]));
out.push(table(['Card A – what it covers', 'Card B – what it covers'], [
  ['_The forum: eleven criteria for the upload module._', '_Inward consignments: cartons, seals, marking, temperature._'],
  ['_⚠ The east elevation joinery._', '_⚠ The handset test card, bench and exchange._'],
  ['_The proof-reading of the weekly bulletin._', '_The minutes of the Tuesday committee._'],
  ['_⚠ The maintenance of eleven sites, 08.00–16.00._', '_⚠ The index of the quarterly index volume._'],
  ['_The print run and the batch marking._', '_The escalation calls logged before 14.00._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each exclusion and its destination. ⚠ **The four rows marked ⚠ have no destination anywhere** — **the blockwork behind the joinery, the handsets in service, the sites out of hours, and the index\'s own cross-references** — **and the pairs must name whose it is to write.** **That sentence is the one nobody thanks you for in April.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a specification you work to. ⚠ **Write four lines of exclusions**, **each with a destination or with the words _and is not covered anywhere_** — **and then find out whether anybody on the other side has been assuming the opposite.**'));
out.push(p('**b**  Swap and perform. Your partner reads your hardest exclusion **dropping their voice** and then flat. ⚠ They say which one invites an argument.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad wrote a specification for the forum: eleven criteria, every one with a figure and a method. It is the best document he has written and it says nothing about the archive. The other side thought the archive was in it — not unreasonably, since the archive is reached from the forum and sits on the same machine. His specification did not say it was out: it said what it covered and never said what it did not, and he had thought those were the same sentence. They are not, and the gap between them is the subject of the cycle: an exclusion that is not written down becomes somebody else\'s assumption that it was included, and the person who did not write it down is the person who pays. Rim asked why stating what you cover does not do the work, and because a reader with a thing in front of them that is not on your list has two explanations and chooses the kinder one — either you left it out on purpose, which means somebody must specify it, or you took it as obvious, and everybody chooses obvious, because obvious costs them nothing today. Omar asked how long the exclusions should be, and shorter than people fear and longer than they write: four lines on most documents, near the front and not in an appendix, because an exclusion in an appendix is an exclusion nobody has read. Lubna asked whether it does not look evasive, and it looks evasive if you write the exclusion and stop; it looks professional if you write where the thing is covered instead — this does not cover the archive, which is specified in document 4. Adnan asked what happens when there is no destination, and then you say that, and you say whose it is to write, which is an uncomfortable sentence and the most useful one on the page. And Jad asked about comprehensive, which is in his covering letter: strike it out, because it is a promise about everything you have not thought of._'));
out.push(p('**Listener task:** write your partner\'s four exclusions, and which of them has no destination.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the scope page Jad adds to the forum specification, and the note under it. Answer the questions.'));
out.push(model([
  '**FORUM SPECIFICATION · SCOPE AND EXCLUSIONS** _(page 1, issue 3 · 2 May · to be read before the eleven criteria)_',
  '**What this document covers.** **The upload module: the eleven criteria at pages 2 to 5, each with a figure and a method.** ⚠ **Nothing else on this machine is covered by this document**, **and the four lines below exist because issue 2 said the first sentence and not the second.**',
  '**1  The archive is not covered here.** ⚠ **It is specified in document 4 of 19 April, which Mr Hamwi holds.** **The archive is reached from the forum and sits on the same machine, which is exactly why everybody assumed it was in this one** — **and I did not say that it was not, in two issues.**',
  '**2  The index of the archive is not covered here and is not covered anywhere.** ⚠ **It needs a specification and it is not mine to write.** **Four hundred entries were loaded in March against no criteria at all, and nobody has been asked to check them against the pages they point to.** **I am putting this in writing because it is the only way the gap gets in front of somebody who can close it.**',
  '**3  Restoration after a failure is not covered here.** **It is covered by the standing arrangement with the maintenance contractor, clause 6 as amended on 11 April.** ⚠ **I have given the clause and the date rather than the word _maintenance_, because _maintenance_ is one of the ordinary words that two people read differently.**',
  '**4  Training of the eleven people who will use the forum is not covered by any specification and does not need one.** ⚠ **It needs eight afternoons and a room, and that is a different kind of document.** **I am listing it only because it was asked about twice, and a question asked twice belongs in writing.**',
  '**5  And one word struck out of my covering letter of 19 April.** ⚠ **I had written that the specification was _comprehensive_.** **It was not and no specification is** — **and the word would have turned every one of the four gaps above into something I had undertaken to cover.**',
  '**NOTE for the file.** ⚠ **Issue 2 was eleven good criteria and a missing page.** **The eleven have not changed at all between issue 2 and issue 3: what has been added is the page that says what they are not about.** **The four hundred index entries are the real finding** — **they have been in use since March, and until I wrote line 2 above, there was no document anywhere in which their absence was recorded.**',
]));
out.push(item('1', 'Why does line 1 explain that the archive sits on the same machine?'));
out.push(item('2', 'Which exclusion has no destination, and what does the writer say about it?'));
out.push(item('3', 'What word was struck out, and what would it have done?'));
out.push(writers([
  'A scope page: **what the document covers, in one sentence** → **the sentence that says nothing else is covered** → **the exclusions, each with a destination** → **the one with no destination, and whose it is to write** → **and the word you have struck out of your own covering letter.**',
  '⚠ **Say why the assumption was reasonable.** _The archive is reached from the forum and sits on the same machine, which is exactly why everybody assumed it was in this one._ **An exclusion that concedes the assumption is accepted; one that implies the reader was careless is appealed.**',
  '**Give the clause and the date rather than the word.** ⚠ _Clause 6 as amended on 11 April_, **not** _maintenance_. **A destination that is itself an ordinary word has simply moved the problem to another document.**',
  '**And write the exclusion with no destination, however uncomfortable it reads.** ⚠ _It needs a specification and it is not mine to write._ **Nobody thanks you for it in April and somebody always finds it in September.**',
  '⚠ And **record what did not change.** _The eleven criteria have not changed at all between issue 2 and issue 3; what has been added is the page that says what they are not about._ **A reader who knows the technical content is unaltered reads a new issue in four minutes instead of forty.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the scope page (80 words or more).'));
out.push(p('**______________ · SCOPE AND EXCLUSIONS** _(page 1, issue ______ · ______________)_   **What this document covers.** ______________. ⚠ **Nothing else ______________ is covered by this document**, **and the lines below exist because ______________.**   **1  ______________ is not covered here.** ⚠ **It is specified in ______________.** **It ______________, which is exactly why everybody assumed ______________.**   **2  ______________ is not covered here and is not covered anywhere.** ⚠ **It needs ______________ and it is not ______________ to write.**   **3  ______________ is not covered here.** **It is covered by ______________, clause ______ of ______________.**   **4  And one word struck out of my covering letter.** ⚠ **I had written _______________. It was not, and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What the document covers, and the sentence that nothing else is',
  'Each exclusion with a destination: a document, a clause and a date',
  'The exclusion with no destination, and whose it is to write',
  'No _comprehensive_ anywhere, in the page or the covering letter',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one exclusion only**, and the room says whether it has a destination and whether the destination is itself an ordinary word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full scope page (180 words or more), to the shape in the writer\'s box: what is covered, the sentence that nothing else is, the exclusions with destinations, the one with none, and the word struck out.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: what is covered plus the sentence that nothing else is, a destination on every exclusion, the one with no destination named with its owner, and no _comprehensive_.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your exclusion that has no destination, flat and without apology.** ⚠ **The room says who in their own organisation would have to close that gap** — **and then the question the cycle turns on, which is how long the gap has been open.** **Twice it has been longer than the writer had worked there.** Then the sentence the cycle ends on, which is Mr Attar\'s: **it said what it covered and never said what it did not, and I had thought those were the same sentence.**'));
out.push(hw('Write **four lines of exclusions** for a document you work to, **each with a destination** — **a document, a clause and a date** — ⚠ **and at least one with the words _and is not covered anywhere_, with whose it is to write.** **Then ask one person on the other side whether they had assumed it was included.**'));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The whole specification'));
out.push(p('**Function:** assembling the whole document — scope, definitions, criteria, methods, consequences   ·   **Grammar:** numbering and cross-reference — _clause 3.2 · see 4 below · as defined in 2_   ·   **Pronunciation:** reading a numbered clause aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Put the parts of a specification in the order a reader needs them**, not the order you wrote them in: _scope · exclusions · definitions · criteria with methods · consequences of failure · issue and date._ **Then say which part most documents put last and most readers need first.**'));
out.push(board('The specification is attached; the definitions are at the back.', 'Scope at 1, exclusions at 2, definitions at 3, and the criteria do not begin until page 2.'));
out.push(p('**b**  Which belongs in the first page? **1** the criteria  **2** the scope  **3** the exclusions  **4** the definitions of the ordinary words  **5** the date and issue number'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about the order of the parts?   **A** it does not matter if everything is there   **B** **it is the order a reader needs, not the order you wrote them in** — and **the definitions come before the criteria, because a criterion read with the wrong definition is worse than no criterion at all**   **C** the criteria always come first'));
out.push(p('**b**  Listen again. **1** What is the one part Ms Huda says nobody writes?   **2** What does she say about the issue number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  The order a reader needs', [
  ['Ms Huda', 'Six parts, and the five cycles have given you four of them. Ms Shaaban, name them.'],
  ['Rim', '**Criteria with figures. Methods. Definitions. Exclusions.** ⚠ **And the two we have not done are the scope and the consequences.**'],
  ['Ms Huda', '**The consequences you did in 21.1, at line 5 of your own page.** **What order do the six go in?**'],
  ['Rim', '⚠ **Scope, exclusions, definitions, criteria with their methods, consequences, and the issue and date.**'],
  ['Omar', 'Why do definitions come before the criteria?'],
  ['Ms Huda', '⚠ **Because a criterion read with the wrong definition is worse than no criterion at all.** **A man who reads _attended to_ his own way and then reads your four-hour figure has a precise number attached to the wrong obligation** — **and he will meet it, in good faith, and still be in breach.**'],
  ['Jad', 'And the part nobody writes?'],
  ['Ms Huda', '**The scope, in one sentence, with the sentence that nothing else is covered.** ⚠ **Everybody writes a title and believes the title has done it.** _Forum specification_ **is a title.** _This covers the upload module and nothing else on the machine_ **is a scope.**'],
  ['Adnan', 'And the issue number — does it earn its place on the first page?'],
  ['Ms Huda', '⚠ **It is the cheapest line on the document and the one that settles the most arguments.** **_Issue 3 of 2 May, replacing issue 2 of 19 April._** **Two men at a gate with different issues of the same page is the commonest dispute there is, and neither of them is wrong.**'],
  ['Lubna', 'And cross-references?'],
  ['Ms Huda', '**Numbered, so that they can be pointed at.** ⚠ _As defined in 2_ · _see 5 below_ · _the limits in 3.2_. **And never _as mentioned above_** — **above is not a place.**'],
  ['Mazen', 'How long should the whole thing be?'],
  ['Ms Huda', '⚠ **As long as the criteria require and no longer, and the test is not length.** **The test is whether every line could be failed and whether a line that cannot be failed has a reason for being there** — **a definition, a scope, a consequence.** **Everything else is a leaflet pretending to be a specification.**'],
  ['Rim', '**Issue 1 of my page had eleven lines and issue 2 has five.**'],
  ['Ms Huda', '**And is issue 2 stricter or looser?**'],
  ['Rim', '⚠ **Neither.** **It is checkable.** **Six of the eleven could not be failed by any method, and those six were producing all the arguments** — **so removing them removed the arguments and not the standard.**'],
  ['Dima', 'And reading a numbered clause out loud?'],
  ['Ms Huda', '🔊 **The number first, then a pause, then the clause** — **and the number said as digits and not as a phrase.** ⚠ _Three point two._ **Not** _the second part of the third bit._ **People say the second, and then nobody can find it.**'],
]));
out.push(sp());
out.push(box('Language box – the whole specification', [
  '**Six parts, in the order a reader needs them.** ⚠ **1 Scope · 2 Exclusions · 3 Definitions · 4 Criteria with their methods · 5 Consequences of failure · 6 Issue and date.** **Not the order you wrote them in.**',
  '**Definitions before criteria, always.** ⚠ **A criterion read with the wrong definition is worse than no criterion at all** — **a man who reads _attended to_ his own way and then reads your four-hour figure has a precise number attached to the wrong obligation, and he will meet it in good faith and still be in breach.**',
  '**The part nobody writes is the scope.** ⚠ **Everybody writes a title and believes the title has done it.** _Forum specification_ **is a title.** _This covers the upload module and nothing else on the machine_ **is a scope.**',
  '**The issue number is the cheapest line on the document and settles the most arguments.** ⚠ _Issue 3 of 2 May, replacing issue 2 of 19 April._ **Two men at a gate with different issues of the same page is the commonest dispute there is, and neither of them is wrong.**',
  '**Cross-references are numbered so that they can be pointed at.** ⚠ _As defined in 2_ · _see 5 below_ · _the limits in 3.2_. **And never _as mentioned above_** — **above is not a place.**',
  '**The test of length is not length.** ⚠ **It is whether every line could be failed, and whether a line that cannot be failed has a reason for being there** — **a definition, a scope, a consequence.** **Everything else is a leaflet pretending to be a specification.**',
  '**Pronunciation.** 🔊 **Track 21.12** **The number first, then a pause, then the clause, and the number said as digits.** ⚠ _Three point two._ **Not** _the second part of the third bit_. **People say the second, and then nobody can find it.**',
  '**And one thing about shortening a specification, which is the opposite of what people expect.** ⚠ **Eleven lines became five, and the five are neither stricter nor looser than the eleven: they are checkable.** **The six that went were the six producing every argument** — **so removing them removed the arguments and not the standard.**',
  '**Practise:** Assemble. **1** the scope sentence  **2** two exclusions with destinations  **3** one definition  **4** one criterion with its method and consequence  **5** the issue line, with what it replaces',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a document from the card. B assembles it aloud in **the six parts, in the reader\'s order.** ⚠ **Two rows on each card are documents whose definitions matter more than their figures**, and B must say which ordinary word has to be defined before any criterion can be read. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the document)_ __________.'],
  ['B', '**Scope: __________. Exclusions: __________. Definitions: __________. Criteria: __________. On failure: __________. Issue __________.**'],
]));
out.push(table(['Card A – the document', 'Card B – the document'], [
  ['_Acceptance criteria for inward consignments._', '_The handset test card._'],
  ['_⚠ The maintenance clause for eleven sites._', '_⚠ The proof-reading standard for the bulletin._'],
  ['_Tolerances for the east elevation joinery._', '_The forum upload module._'],
  ['_⚠ The minuting standard for the Tuesday committee._', '_⚠ The escalation-logging standard._'],
  ['_The batch-marking rule for the press._', '_The index checking standard._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the six parts for each document, in order. ⚠ **The four rows marked ⚠ turn on a definition and not on a figure** — _attended to_ · _corrected_ · _action_ · _escalation_ — **and in each the criterion is easy and the ordinary word is the whole document.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the pieces you have written across 21.1 to 21.5. ⚠ **Assemble them in the reader\'s order and number them** — **and then check the one thing that is almost certainly missing, which is the scope sentence and the sentence that nothing else is covered.**'));
out.push(p('**b**  Swap and perform. Your partner reads one of your clause numbers **as a phrase** and then **as digits.** ⚠ They say which one they could find.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Six parts, and the five cycles had given the class four of them. Rim named criteria with figures, methods, definitions and exclusions, and said the two not yet done were the scope and the consequences — and the consequences she had in fact done in 21.1, at line 5 of her own page. The order is scope, exclusions, definitions, criteria with their methods, consequences, and the issue and date. Omar asked why definitions come before the criteria, and because a criterion read with the wrong definition is worse than no criterion at all: a man who reads attended to his own way and then reads your four-hour figure has a precise number attached to the wrong obligation, and he will meet it in good faith and still be in breach. Jad asked what the part nobody writes is, and the scope, in one sentence, with the sentence that nothing else is covered — everybody writes a title and believes the title has done it. Adnan asked whether the issue number earns its place on the first page, and it is the cheapest line on the document and the one that settles the most arguments: two men at a gate with different issues of the same page is the commonest dispute there is, and neither of them is wrong. Lubna asked about cross-references, and numbered, so that they can be pointed at, and never as mentioned above, because above is not a place. Mazen asked how long the whole thing should be, and the test is not length: it is whether every line could be failed, and whether a line that cannot be failed has a reason for being there. Rim said issue 1 of her page had eleven lines and issue 2 has five, and issue 2 is neither stricter nor looser — it is checkable, because six of the eleven could not be failed by any method and those six were producing all the arguments. And Dima asked about reading a numbered clause out loud: the number first, then a pause, then the clause, and the number said as digits rather than as a phrase — three point two, and not the second part of the third bit — because people say the phrase and then nobody can find the clause at all._'));
out.push(p('**Listener task:** write your partner\'s six parts in order, and which one was missing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the whole specification Rim issues in May, and the note under it. Answer the questions.'));
out.push(model([
  '**INWARD CONSIGNMENTS · SPECIFICATION** _(issue 3 of 9 May, replacing issue 2 of 14 February)_',
  '**1  Scope.** **This specification covers the acceptance of inward consignments at the Qassaa gate.** ⚠ **It covers nothing else** — **not storage, not the condition of goods after acceptance, and not the carrier\'s own loading.**',
  '**2  Exclusions.** **2.1** **Storage after acceptance: see the store standard of 4 March.** **2.2** **Damage found after acceptance is not covered here and is not covered anywhere; it needs a procedure and it is not mine to write.** ⚠ **Eleven claims last year arrived under this heading and were settled by argument.**',
  '**3  Definitions.** **3.1** **By _crush_ is meant a permanent deformation of the carton wall, measured at its deepest point.** **A bowed carton that returns to shape when the pallet is unbanded is not crushed.** ⚠ **3.2** **By _the top layer_ is meant every carton visible without moving another carton.** **Not the cartons on the near corner** — **this was the reading one of my own inspectors took for four months.**',
  '**4  Criteria and methods.** **4.1** **No carton is to show a crush of more than 10 mm on any face, measured with the steel rule kept at the gate, on all cartons in the top layer as defined in 3.2 and on four cartons drawn from the second layer, one from each quarter of the pallet.** ⚠ **4.2** **Every carton is to carry an unbroken seal; a seal cut and taped is broken.** **No figure, and none needed: a seal has two states.** **4.3** **The batch number on the carton is to match the delivery note in all twelve digits; not the first six.** **4.4** **Each of the four probes is to read within 2 degrees of the figure on the note; not the average of the four.**',
  '**5  Consequences.** **5.1** **A failure on 4.1 or 4.3 refuses the cartons that fail; the remainder is taken in.** **5.2** **A failure on 4.2 or 4.4 refuses the pallet.** ⚠ **5.3** **The driver is given the failing figure in writing at the gate and does not wait for a letter.**',
  '**6  Issue.** **Issue 3 of 9 May, replacing issue 2 of 14 February, which replaced issue 1 of 3 January.** ⚠ **The criteria at 4 have not changed since 14 February.** **What is new in issue 3 is the scope at 1, the exclusions at 2 and the definition at 3.2.**',
  '**NOTE for the department.** ⚠ **Issue 1 had eleven criteria, issue 2 five, and issue 3 has four and two definitions.** **The definition at 3.2 came out of asking an inspector what he does, which is the twenty minutes of 21.2 spent on my own people instead of on a supplier.** **He had been checking the near corner for four months and he was reading the page correctly** — **the page said _the top layer_ and never said what that meant.**',
]));
out.push(item('1', 'What is new in issue 3, and what has not changed?'));
out.push(item('2', 'Why does 4.2 have no figure in it?'));
out.push(item('3', 'What did asking the inspector produce, and whose fault does the note say it was?'));
out.push(writers([
  'A whole specification: **1 scope, with the sentence that nothing else is covered** → **2 exclusions, each with a destination** → **3 definitions of the ordinary words** → **4 criteria, each with its method in the same clause** → **5 consequences, graded** → **6 issue and date, with what it replaces.**',
  '⚠ **Number everything to two levels so that it can be pointed at.** _A failure on 4.1 or 4.3 refuses the cartons that fail._ **A consequence that names clause numbers can be applied by somebody who has not read the document.**',
  '**Define the ordinary words of your own trade, not the technical ones.** ⚠ _By the top layer is meant every carton visible without moving another carton. Not the cartons on the near corner._ **That reading was an inspector\'s, for four months, and he was reading the page correctly.**',
  '**Say what has not changed since the last issue.** ⚠ _The criteria at 4 have not changed since 14 February; what is new is the scope, the exclusions and one definition._ **It is the line that gets a new issue read instead of filed.**',
  '⚠ And **keep the issue line, with the chain.** _Issue 3 of 9 May, replacing issue 2 of 14 February, which replaced issue 1 of 3 January._ **Two men at a gate holding different issues of the same page is the commonest dispute there is, and the chain is what ends it in nine seconds.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the whole specification (80 words or more).'));
out.push(p('**______________ · SPECIFICATION** _(issue ______ of ______________, replacing ______________)_   **1  Scope.** ______________. ⚠ **It covers nothing else** — **not ______________, not ______________.**   **2  Exclusions.** **2.1** ______________: **see ______________.** **2.2** ⚠ ______________ **is not covered anywhere; it needs ______________ and it is not ______________ to write.**   **3  Definitions.** **3.1** **By _______________ is meant ______________.** ⚠ **3.2** **By _______________ is meant ______________. Not ______________.**   **4  Criteria and methods.** **4.1** **No ______________ is to ______________ more than ______________, measured with ______________, on ______________.** **4.2** ______________; ⚠ **no figure, and none needed, because ______________.**   **5  Consequences.** **5.1** **A failure on ______ ______________.** **5.2** **A failure on ______ ______________.**   **6  Issue.** ⚠ **Issue ______ of ______________. The criteria at 4 have ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Six parts, in the reader\'s order, with definitions before criteria',
  'Numbered to two levels, so that consequences can name clauses',
  'The ordinary words of your own trade defined, not the technical ones',
  'The issue line with its chain, and what has not changed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their scope sentence and their issue line only**, and the room says whether a reader would know what is not covered.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full specification (180 words or more), to the shape in the writer\'s box: the six parts in the reader\'s order, numbered to two levels, with the methods in the clauses and the consequences naming clause numbers.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: six parts in the reader\'s order, definitions before criteria, methods inside the clauses, graded consequences naming clause numbers, and the issue line with its chain.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your clause 1 and then your clause 6, and nothing in between.** ⚠ **The room says what the document is about and what it is not about** — **and whether it could tell which issue it was holding.** **Then the count: how many lines has it lost, and is it stricter, looser or checkable?** Then the sentence the cycle ends on, which is Ms Shaaban\'s: **six of the eleven could not be failed by any method, and those six were producing all the arguments.**'));
out.push(hw('Assemble **the whole specification** from the pieces of 21.1 to 21.5, numbered to two levels. ⚠ **Then do the twenty minutes on your own people rather than on a supplier** — **ask one person who applies your page what they actually do** — **and bring the definition that comes out of it, because it will be a definition and not a figure.**'));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: The writer of the criterion and the man who has to meet it'));
out.push(p('**Function:** mediating between a specification that is right and a supplier who is also right   ·   **Recycling:** Unit 21   ·   **Exam practice:** B2 First Reading and Use of English Part 7 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The specify runs to four pages.  **2** The gap is outside the tolerate.  **3** A verify of the batch takes twenty minutes.  **4** We need a define of _working day_.  **5** The inspect found four crushed cartons.  **6** Any deviate from 4.1 refuses the cartons that fail.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the specification clause, and what each side says about it.'));
out.push(box(null, [
  '**ONE CLAUSE, TWO ACCOUNTS** _(the quality manager and the supplier, eleven weeks apart)_',
  '**The clause.** _"4.1 No carton is to show a crush of more than 10 mm on any face, measured with the steel rule kept at the gate, on all cartons in the top layer as defined in 3.2 and on four cartons drawn from the second layer, one from each quarter of the pallet. A failure refuses the cartons that fail; the remainder is taken in."_',
  '**The quality manager.** _"It is the best clause I have written. A thing, a limit, a figure, a method, a sample and a consequence, and it took eleven disputes down to one. I sent issue 2 to all four suppliers in February and asked for comments. Nobody sent any."_',
  '**The supplier.** _"It is the clearest page any customer has sent me. My cartons come off a hand-banded pallet and ten millimetres is about what the banding does on its own. I read it in February and I said nothing, because a man who writes back in February saying your figure is too tight is a man who cannot do the work."_',
  '⚠ **Both accounts are accurate and neither of them is about the clause.**',
  '**And the thing the specification cannot do.** **A specification is written by the party who applies it and met by the party who cannot change it** — **and the twenty minutes of 21.2 is advice the writer can take and the supplier cannot ask for.**',
  '**The question for the cycle.** _Who makes it safe to say that the figure is too tight?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the specification cannot do, and what is the one line that would have changed February?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  Nobody sent any comments', [
  ['Ms Huda', 'A clause that does everything this unit teaches, and a supplier who read it in February and said nothing. Ms Shaaban — is the clause wrong?'],
  ['Rim', 'No. ⚠ **I would write it again.** **And Mr Deeb is right as well, which is the part I had not expected.**'],
  ['Ms Huda', '**Say his account in his words.**'],
  ['Rim', '⚠ _A man who writes back in February saying your figure is too tight is a man who cannot do the work._ **And I asked four suppliers for comments and I believed the silence meant agreement.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the clause is for from what its reader could do about it.** ⚠ Two: **find the thing the document cannot do.** Three: **say whether the writer can supply it.**'],
  ['Omar', 'What is the clause for?'],
  ['Rim', '**Letting a driver and an inspector reach the same answer in two minutes at a gate.** ⚠ **It does that.** **Eleven disputes down to one.**'],
  ['Ms Huda', '**And the thing it cannot do?**'],
  ['Jad', '⚠ **Ask.** **A specification is written by the party who applies it and met by the party who cannot change it** — **and the twenty minutes of 21.2 is advice the writer can take and the supplier cannot ask for.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **Everything in this unit has been addressed to the writer.** **Nothing in it tells a supplier how to say _your figure is tighter than my banding_ without sounding like a man who cannot do the work** — **and until somebody does, the silence will keep arriving and keep being read as agreement.**'],
  ['Mazen', '**And I have been on the other side of that.** ⚠ **I have never once written back to the exchange about a test card.**'],
  ['Ms Huda', '**So what can Ms Shaaban supply?**'],
  ['Adnan', ' ⚠ **A line on the page itself.** _Issue 2 is for comment until 30 April; a comment on a figure will not be held against a tender._ **Seventeen words, and it is the only thing in this unit that makes the silence worth breaking.**'],
  ['Ms Huda', '**And whose decision is that?**'],
  ['Adnan', '⚠ **Ms Shaaban\'s, and only hers.** **A supplier cannot make it safe to speak; the person who awards the work is the only person who can** — **and she has never said it, because it had not occurred to her that silence was expensive.**'],
  ['Lubna', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks generous.** ⚠ **Do not widen the figure because somebody stayed silent** — **you would be guessing, and ten millimetres may be right.** **And do not ask for comments without saying what a comment costs the person who sends one.**'],
  ['Dima', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The manager\'s account is a description of a method and the supplier\'s is a description of a silence** — **and the second is harder to read aloud without sounding like an accusation.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the writer of the criterion and the man who has to meet it', [
  '**The three moves.** ⚠ **1 Separate what the clause is for from what its reader could do about it.** **2 Find the thing the document cannot do.** **3 Say whether the writer can supply it.**',
  '⚠ **The finding, and it is new: a specification is written by the party who applies it and met by the party who cannot change it.** **The twenty minutes of 21.2 is advice the writer can take and the supplier cannot ask for.**',
  '**Why the supplier does not speak.** ⚠ _A man who writes back in February saying your figure is too tight is a man who cannot do the work._ **The silence is not agreement and it is not dishonesty; it is the correct commercial reading of an invitation with no protection attached to it.**',
  '**And why the writer misreads it.** ⚠ **She asked four suppliers for comments and received none, which she took for agreement** — **and nothing in the unit, up to 21.6, would have told her otherwise.** **Everything in this unit is addressed to the writer.**',
  '**What the writer can supply: one line on the page itself.** ⚠ _Issue 2 is for comment until 30 April; a comment on a figure will not be held against a tender._ **Seventeen words, and the only thing in the unit that makes the silence worth breaking.**',
  '⚠ **And whose decision that is: the writer\'s, and only hers.** **A supplier cannot make it safe to speak** — **the person who awards the work is the only person who can, and she has never said it, because it had not occurred to her that silence was expensive.**',
  '**Two things not to do, and the second looks generous.** ⚠ **Do not widen the figure because somebody stayed silent** — **you would be guessing, and ten millimetres may be right.** **And do not ask for comments without saying what a comment costs the person who sends one.**',
  '**Pronunciation.** 🔊 **Track 21.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The manager\'s is a description of a method and the supplier\'s is a description of a silence** — **and the second is harder to read without sounding like an accusation.**',
  '**And one sentence any specification can carry tomorrow, which costs nothing.** ⚠ _If a figure on this page is tighter than your process, say so before you tender; it will not count against you._ **Nineteen words, and it hands the problem to the only party with the power to solve it.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a clause and two accounts of it, and does **not** show them. A reads the clause, then both accounts. B makes the three moves: **what the clause is for, the thing it cannot do, and whether the writer can supply it.** ⚠ **In one of the two pairs the clause is genuinely defective** — the figure has no method — **and B must say so rather than looking for a silence.** Change roles with the other pair.'));
out.push(table(['Pair A – the carton clause', 'Pair B – the handset clause'], [
  ['_Thing, limit, figure, method, sample and consequence._', '_⚠ A figure with no method and no sample._'],
  ['_Writer: "it took eleven disputes down to one."_', '_Writer: "I wrote properly tested and assumed the rest."_'],
  ['_Supplier: "I said nothing, because a man who writes back in February…"_', '_Receiver: "I dialled one number on one handset."_'],
  ['_⚠ The question: who makes it safe to speak._', '_⚠ Not that question: there is no method to comment on._'],
  ['_⚠ Answerable, by the writer, and she has never said it._', '_⚠ The clause is defective and the remedy is 21.3._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a silence problem:** **a figure with no method has failed before anybody could comment on it**, and no invitation will mend it. **Two different faults, two different remedies** — **a line added to the page by the person who awards the work, and a method written today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last specification you were sent and did not comment on** and do the three moves on it in writing. ⚠ **Name the figure you knew was wrong.** Then the question the cycle ends on: **what would have had to be on the page for you to have said so?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the specification cannot do:  _A clause that does everything the unit teaches, and a supplier who read it in February and said nothing. Asked whether the clause is wrong, Rim said no — she would write it again, and Mr Deeb is right as well, which is the part she had not expected. His account in his own words: a man who writes back in February saying your figure is too tight is a man who cannot do the work. And she asked four suppliers for comments and believed the silence meant agreement. So the mediation, in three moves: separate what the clause is for from what its reader could do about it; find the thing the document cannot do; and say whether the writer can supply it. The clause is for letting a driver and an inspector reach the same answer in two minutes at a gate, and it does that — eleven disputes down to one. The thing it cannot do, Jad said, is ask: a specification is written by the party who applies it and met by the party who cannot change it, and the twenty minutes of 21.2 is advice the writer can take and the supplier cannot ask for. Which is the finding of the cycle and it is new — everything in the unit has been addressed to the writer, and nothing in it tells a supplier how to say that a figure is tighter than his banding without sounding like a man who cannot do the work. Mazen said he has been on the other side of that and has never once written back to the exchange about a test card. Adnan said what she can supply is a line on the page itself: issue 2 is for comment until the thirtieth of April, and a comment on a figure will not be held against a tender. Seventeen words. And whose decision that is: hers, and only hers, because a supplier cannot make it safe to speak and the person who awards the work is the only person who can. Lubna asked what we must not do: do not widen the figure because somebody stayed silent, and do not ask for comments without saying what a comment costs._'));
out.push(p('**Listener task:** write the figure you knew was wrong, and what would have had to be on the page.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 7)', 7));
out.push(p('You are going to read four accounts of a specification at work. For questions **1–6**, choose from the people **A–D**. The people may be chosen more than once.'));
out.push(box(null, [
  '**FOUR PEOPLE ON A DOCUMENT THAT WAS NOT READ THE WAY IT WAS WRITTEN**',
  '**A**  Eleven lines became five and the five are neither stricter nor looser; they are checkable. Six of the eleven could not be failed by any method — in good condition, properly stacked, suitable for storage — and those six produced every argument I had at the gate for three years. What I had not expected is where the next finding came from. I asked one of my own inspectors what he actually does, which took twenty minutes, and he had been checking the four cartons on the near corner since January. He was reading the page correctly. The page said the top layer and never said what that meant, and the man who wrote the page was me.',
  '**B**  The drawing said thirty millimetres and the joinery came back at thirty-one. I accepted it and I could not have told you why I accepted it, and I would have refused thirty-three. So the drawing had a target and no criterion, which is a wish with a number attached, and the number is what makes it look like a document. Before I issued the revision I spent twenty minutes with the joiner and he told me his saw holds a millimetre and a half across four heads but not across the elevation, because the blockwork behind it is out by six millimetres at the north end. That six millimetres was on no drawing I held. It is the only place it is now written down.',
  '**C**  I sent fifty handsets back marked properly tested and the exchange dialled one number on one of them. Eleven came back three weeks later and nine of the eleven dial out and will not receive — which is a fault my own bench test does not look at either. I found that out in the act of writing the test card and not before. Both of us had been testing for eleven years and neither of us was testing the same thing, and I had been blaming the exchange since the autumn. The card took forty minutes to write. The argument about receiving took one telephone call, because once the four tests were on paper there was nothing left to disagree about.',
  '**D**  It is the clearest page any customer has sent me and the figure is tighter than my banding by about the width of the banding. I read it in February, I knew, and I said nothing. Write back to a customer in February to tell her that her figure is too tight and you are a supplier who cannot do the work — so the sensible thing is silence, and then you tender, and then you argue at the gate in June when somebody has to take the load. If there had been one line on the page saying a comment on a figure would not count against me, she would have had my answer the same week. There was no such line and I do not blame her for that; it had not occurred to me either until she asked me about it afterwards.',
  '',
  '**Which person…**',
  '**1**  says that shortening a document did not change how strict it was?   _______',
  '**2**  describes finding that two parties had been testing different things?   _______',
  '**3**  explains a commercial reason for not raising an objection?   _______',
  '**4**  mentions a fact that was recorded nowhere until they wrote it down?   _______',
  '**5**  says that a figure without a limit around it only looks like a requirement?   _______',
  '**6**  says that putting something in writing removed the disagreement almost at once?   _______',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a specification and the man who has to meet it (80 words or more).'));
out.push(p('**ONE CLAUSE, TWO ACCOUNTS** · ______________   **The clause.** _"______________"_   **The writer.** _"______________"_   **The supplier.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the clause is for.** ______________. ⚠ **It did that.**   **The thing the document cannot do.** ⚠ ______________.   **Can the writer supply it?** ______________, **because ______________.**   **What the writer can supply.** ⚠ **One line on the page:** _"______________."_   **Whose decision is that?** ⚠ ______________.   **And what I am not doing.** ⚠ **Widening a figure because ______________**, and **asking for comments without ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the clause is for, separated from what its reader could do',
  'The thing the document cannot do, named in one sentence',
  'The line the writer can supply, and whose decision it is',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The essay, and the shape is the one you know: the question answered in the first sentence, both notes used with one developed further than the other, your own third point, and a conclusion that is not a summary.** **What Unit 21 adds is the finding of 21.7** — **so the third note can be the thing a written rule cannot do, which is ask.**',
  'In your English class you have been discussing written standards at work. Your teacher has asked you to write an **essay** answering this question:',
  '**Do written rules at work solve more problems than they create?**',
  '**Notes.** Write about: **1** clarity   **2** the cost of writing them   **3** ______________ _(your own idea)_',
  'Write your **essay** in **140–190 words.**',
  '⚠ **Both given notes, or the content mark goes.** **And the third note is where the marks are** — **a third point taken from the unit** _(the word two people read differently, the exclusion nobody wrote, the silence that was read as agreement)_ **is worth more than a general observation about bureaucracy.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ runs to four pages and the criteria do not begin until page two.   a) specification   b) specify   c) specifying',
  '2  The gap came back at thirty-one, which is inside the ___.   a) tolerate   b) tolerance   c) tolerant',
  '3  The card carries no ___ of the batch at either end.   a) verify   b) verified   c) verification',
  '4  We need a ___ of _working day_, because yours has six days in it.   a) definition   b) define   c) defining',
  '5  The ___ of 9 May found four crushed cartons in the top layer of the second pallet.   a) inspect   b) inspection   c) inspecting',
  '6  A single ___ from 4.1 refuses the cartons that fail and no others.   a) deviate   b) deviating   c) deviation',
  '7  I have had no ___ that the roller arrived, and I am not relying on the date.   a) confirmation   b) confirm   c) confirming',
  '8  The ___ of the new test card took one telephone call.   a) adopt   b) adopting   c) adoption',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – multiple choice).** 🔊 **Track 21.15** You will hear people talking in eight different situations. For questions **1–8**, choose the best answer (**A**, **B** or **C**).'));
[
  '**1**  You hear a woman talking about a line in her own specification. What does she say the trouble with it was?   **A** it was too strict   **B** it had two honest readings   **C** the driver had not read it',
  '**2**  You hear a man talking about a figure on a drawing. What does he say a figure with no band is?   **A** stricter than a band   **B** a drawing error   **C** a wish with a number attached',
  '**3**  You hear two colleagues discussing a test. What do they agree a method must do?   **A** be repeatable by another person on another day   **B** name an instrument   **C** cover every unit in the batch',
  '**4**  You hear a man talking about a word in a contract. Why does he say nobody checked it?   **A** it was technical   **B** it was in a glossary   **C** it was ordinary',
  '**5**  You hear a woman talking about an exclusion. What does she say it must have?   **A** a destination   **B** an apology   **C** an appendix',
  '**6**  You hear a man reading from a specification. Which part of it is he reading?   **A** a criterion   **B** the issue line   **C** the scope',
  '**7**  You hear two colleagues talking about a silence. What do they conclude about it?   **A** it meant agreement   **B** it was a sensible commercial decision   **C** it was dishonest',
  '**8**  You hear a woman at the end of a meeting. What does she say she will add to the page?   **A** a wider figure   **B** a line protecting a comment on a figure   **C** a glossary',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['Extract 1', '**Woman.** The line said the packaging must arrive undamaged. Four cartons out of ninety had a corner pushed in, so I refused the load, and the driver said they were undamaged — and he was not being difficult. He meant the contents had not moved. Two hours at the gate, and at the end of it the line was still true for me and still true for him.'],
  ['Extract 2', '**Man.** Thirty millimetres, and it came back at thirty-one, and I took it. I would have refused thirty-three and I cannot tell you what happens at thirty-two. So what I had on that drawing was not a specification at all. It was a wish with a number attached to it, and the number is what made it look like a document.'],
  ['Extract 3', '**Man.** So four units at random. — **Woman.** Four units drawn from different pallets, one from each quarter. — **Man.** Is random not stricter? — **Woman.** Nobody at a gate is random. A man in a hurry takes the four he can reach. Mine is a method because you could do it tomorrow and get my answer; yours is a word that sounds like one.'],
  ['Extract 4', '**Man.** It was not a technical term. It was _immediately_. Both of us read it, both of us understood it, and neither of us had the faintest reason to ask the other what he meant by it — which is precisely why it ran for two years. Nobody checks an ordinary word. That is the whole of it.'],
  ['Extract 5', '**Woman.** If you write that you do not cover the archive and stop there, you have shut a door. If you write that it is covered in document four of the nineteenth of April, you have done the man a service. And where it is covered nowhere at all, you say that too, and you say whose it is to write. Nobody thanks you for that sentence in April.'],
  ['Extract 6', '**Man.** _This specification covers the acceptance of inward consignments at the Qassaa gate. It covers nothing else — not storage, not the condition of goods after acceptance, and not the carrier\'s own loading._'],
  ['Extract 7', '**Woman.** I asked four suppliers for comments in February and not one of them wrote back. — **Man.** And you read that as agreement. — **Woman.** I read it as agreement, and one of them had known since February that my figure was about the width of his banding. — **Man.** He was not being dishonest. He was being commercial. Write back in February and you are the supplier who cannot do the work.'],
  ['Extract 8', '**Woman.** I am not touching the ten millimetres, because I would be guessing and it may well be right. What is going on the front of issue three is seventeen words: this issue is for comment until the thirtieth of April, and a comment on a figure will not be held against a tender. I am the only person who can write that sentence.'],
]));
out.push(p('**C  Writing.** Write the specification (180–220 words): the scope with its exclusions, two criteria with their methods, one definition, and the consequences of failure.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a criterion with a thing, a limit and a figure with its unit',
  '☐ give both limits of a band, and say which direction does the work',
  '☐ write the method: who checks, with what, against what, and how many',
  '☐ find the ordinary word that carries two honest readings, and define it in the clause',
  '☐ state what a document does not cover, with a destination for each exclusion',
  '☐ assemble the six parts in the order a reader needs them',
  '☐ grade the consequences of failure, naming clause numbers',
  '☐ say what a written rule cannot do, and who is the only person who can supply it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _lay down · tie down · build in · tighten up · put in for · work to · iron out · nail down · keep to · trade off · factor in · map out_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 21.7 draws on this)_: _specify → **specification** · tolerate → **tolerance** · interpret → **interpretation** · verify → **verification** · define → **definition** · inspect → **inspection** · deviate → **deviation** · confirm → **confirmation** · adopt → **adoption**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
