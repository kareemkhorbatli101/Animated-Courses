// Proactive English B2 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band.** Name the criterion, then **copy the line you are marking** — the line itself and not a summary of it — and then say what you found. Three sentences, three criteria, three quoted lines.';

out.push(h1('Unit 3  The Essay'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'In **1.7** you wrote an essay you had not been taught how to write, and you were asked to date it and keep it. This unit teaches the form, and **3.7 reads that essay again**. The distance is the lesson and there is no other way to get it.',
  '**3.1** is the thesis sentence: one sentence somebody can disagree with.   **3.2** is the shape, and the hardest instruction in the unit — **which of the two given points you will concede**.   **3.3** adds the third point, which is yours, and says why it is not obvious.   **3.4** supports a point with **one** example and no more.   **3.5** is the conclusion that follows from the paragraphs and adds one thing.   **3.6** is the whole essay to the exam shape, in forty minutes.   **3.7** marks somebody else\'s essay against the four band descriptors — and then your own 1.7 essay.',
  '**Exam practice in 3.7:** B2 First **Reading and Use of English Part 1** (multiple-choice cloze), **Writing Part 1** (the essay, now taught) and **Listening Part 3** (multiple matching).',
  '⚠ **Bring the 1.7 essay, with its date on it, unimproved.** If you have rewritten it, bring both and say which is which.',
  '**And bring one essay-shaped argument you have lost** — at work, at home, in writing or out loud — where you believe you were right and did not carry it. **3.2** is built on the point you should have conceded and did not.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 3.1 =====================
out.push(pb());
out.push(h2('3.1  One sentence somebody can disagree with'));
out.push(p('**Function:** stating a position in one sentence that can be disagreed with   ·   **Grammar:** the thesis sentence · _X, rather than Y, is what…_   ·   **Pronunciation:** the stress that falls on the contrast'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the argument you lost, in one sentence. Your teacher asks one question of it: **could a reasonable person disagree with that and be wrong?** If nobody can be wrong, you have not stated a position — you have described a situation.'));
out.push(board('Explaining things properly matters.', 'Time, rather than patience, is what full explanation actually costs.'));
out.push(p('**b**  Which is a position? **1** _Communication is important._  **2** _Most offices explain too little rather than too much._  **3** _There are advantages and disadvantages._  **4** _A full explanation costs the reader more than it costs the writer._  **5** _This is a complex issue._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is wrong with most of the twelve thesis sentences, and what is the shape she gives them?   **A** they are too long; put the verb first   **B** nobody could disagree with them; _X, rather than Y, is what…_   **C** they are too short; add a reason'));
out.push(p('**b**  Listen again. **1** What does Dima say the newspaper test is?   **2** What does Ms Huda say the examiner is reading the first sentence for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  Something somebody can be wrong about', [
  ['Ms Huda', 'Twelve sentences, one each, and I am going to be unkind about eleven of them. The question is not whether the sentence is true. It is whether somebody could disagree with it **and be wrong**. Mr Darwish.'],
  ['Omar', '_Explaining things properly matters._'],
  ['Ms Huda', 'Could anybody disagree with that?'],
  ['Omar', 'No.'],
  ['Ms Huda', 'Then it is not a position, and an examiner reading it has learnt nothing about you except that you can write a sentence. Try again, and put a cost in it.'],
  ['Omar', '_Explaining things properly costs more time than it saves._'],
  ['Ms Huda', '**Now** somebody can disagree, and in fact I do. That is a position. Mrs Khoury, the newspaper test.'],
  ['Dima', 'It is what I do with a contributor\'s first sentence. If I can write _or the opposite_ after it and the sentence still sounds sensible, it says nothing. _Communication is important_ — or the opposite — _communication is not important_. The second one is absurd, which means the first one was empty.'],
  ['Jad', 'And if the opposite sounds sensible too?'],
  ['Dima', 'Then you have a position, and you have to defend it. _Most offices explain too little rather than too much_ — the opposite is _most offices explain too much_, and plenty of people believe that. So the sentence is doing work.'],
  ['Ms Huda', 'Which brings us to the shape, and it is the most useful single structure in this book: **_X, rather than Y, is what…_** It forces the contrast into the grammar, where it cannot be lost. _Time, rather than patience, is what full explanation actually costs._'],
  ['Hiba', 'Why does the contrast have to be in the grammar?'],
  ['Ms Huda', 'Because a position is a choice between two things, and a sentence that names only one of them leaves the examiner to guess the other. _Explanation costs time_ — costs time rather than what? Money? Goodwill? ⚠ The reader fills the gap themselves, and then they are arguing with their own sentence instead of yours.'],
  ['Nour', 'Mine was _the note template needs a new field_.'],
  ['Ms Huda', 'Which is a request, not a position. What is the position behind it?'],
  ['Nour', '_The absence of a field, rather than the carelessness of the people filling it in, is what loses the promises._ And that is the sentence I have never written in eight months, because it says the people are not at fault and I had not decided whether I believed that.'],
  ['Ms Huda', '⚠ **And that is why the thesis sentence is written first and not last.** You cannot find out what you think by writing three paragraphs and seeing where you end up. You find out by trying to write one sentence somebody could be wrong about, and noticing which version you are willing to sign.'],
  ['Adnan', 'The examiner reads it first.'],
  ['Ms Huda', 'The examiner reads it first and reads it for one thing: **is there a position here, and will the rest of the essay be about it?** Two hundred words is not long enough to arrive at an opinion. It is long enough to hold one.'],
]));
out.push(sp());
out.push(box('Language box – the thesis sentence', [
  '**The test, and it is the only one that matters.** Not _is it true_ and not _does it sound well_: **could a reasonable person disagree with it and be wrong?** _Communication is important_ — nobody can be wrong. _Explaining properly costs more time than it saves_ — plenty of people can be wrong, including the writer.',
  '**The newspaper test, which is faster.** Write _or the opposite_ after your sentence. If the opposite is absurd, the sentence is empty. If the opposite is something somebody you know believes, you have a position.',
  '**The shape: _X, rather than Y, is what…_** _Time, **rather than patience**, is what full explanation actually costs._ · _The absence of a field, **rather than the carelessness of the people filling it in**, is what loses the promises._ ⚠ The contrast goes into the **grammar**, where it cannot be lost in summary — which is 22.2 from last year, now doing a different job.',
  '**Three other shapes that carry a position, and all three are B2 and above.** _It is not that X; it is that Y._ · _What matters here is not X but Y._ · _The question is not whether X, but whether Y._ Keep one of them for the conclusion in 3.5, because a conclusion that repeats the thesis sentence in the same shape reads as a sentence you have memorised.',
  '⚠ **A request is not a position, and students confuse them constantly.** _The template needs a new field_ is a request. The position behind it is _the absence of a field, rather than the carelessness of the people filling it in, is what loses the promises_ — and the position is harder to write because it commits you to something about the people.',
  '**Write it first, not last.** You cannot find your position by writing three paragraphs and seeing where you arrive. You find it by trying to write one sentence somebody could be wrong about and noticing **which version you are willing to sign**.',
  '**What the examiner is reading it for.** One thing: **is there a position here, and will the rest be about it?** Two hundred words is not long enough to arrive at an opinion; it is long enough to hold one.',
  '**Pronunciation.** 🔊 **Track 3.2** In _X, rather than Y, is what…_ the stress falls on **both halves of the contrast and nowhere else**: _**TIME**, rather than **PATience**, is what full explanation costs._ ⚠ Students stress _rather_, which is the one word in the sentence carrying no information, and the contrast then disappears in speech even though it is there in the grammar.',
  '**Practise:** Write the thesis sentence, then apply the newspaper test out loud. **1** explaining at work  **2** meetings  **3** written rules  **4** working from memory  **5** asking questions',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a topic from the card and their thesis sentence. B applies the newspaper test out loud — _or the opposite_ — and says whether anybody could be wrong. A then says the same position in the _X, rather than Y_ shape. B names the Y. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(topic)_ __________. _(thesis)_ __________.'],
  ['B', 'Or the opposite: __________. That is / is not something somebody could be wrong about.'],
  ['A', '_(in the shape)_ __________, rather than __________, is what __________.'],
  ['B', 'Your Y is __________ — and until you said it I had assumed __________.'],
]));
out.push(table(['Card A – the topic', 'Card B – the topic'], [
  ['_explaining at work_', '_written rules_'],
  ['_meetings_', '_working from memory_'],
  ['_asking questions_', '_being corrected_'],
  ['_training somebody new_', '_keeping records_'],
  ['_apologising in writing_', '_saying you do not know_'],
  ['_changing a form_', '_being given a deadline_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight thesis sentences and mark each **position** or **situation**. Then the count: on a first run it is about **three positions in eight** — and the five that fail nearly all fail the same way, by naming X and leaving Y to the reader.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the argument you lost and write the thesis sentence you should have opened with. Then say the Y out loud — the thing you are saying it is **not** — and say whether you believe that.'));
out.push(p('**b**  Swap. Then each of you disagree with your partner\'s thesis sentence, properly, in one sentence. If you cannot, say so, because that means the sentence is still a situation.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Twelve sentences, one each, and Ms Huda said she was going to be unkind about eleven of them — because the question is not whether the sentence is true but whether somebody could disagree with it and be wrong. Omar\'s was that explaining things properly matters, and nobody could disagree, so it is not a position and an examiner reading it has learnt nothing except that he can write a sentence. Asked to put a cost in it, he said explaining things properly costs more time than it saves, and Ms Huda said now somebody can disagree, and in fact she does. Then Dima gave the newspaper test, which is what she does with a contributor\'s first sentence: write "or the opposite" after it, and if the opposite sounds absurd the sentence says nothing. Communication is important — or the opposite — communication is not important. The second is absurd, so the first was empty. Jad asked what happens if the opposite sounds sensible too, and Dima said then you have a position and you have to defend it. Which brought the shape, and Ms Huda called it the most useful single structure in the book: X, rather than Y, is what. Time, rather than patience, is what full explanation actually costs. Hiba asked why the contrast has to be in the grammar, and the answer is that a position is a choice between two things, and a sentence naming only one leaves the examiner to guess the other — and then they argue with their own sentence instead of yours. Then Nour said hers was that the note template needs a new field, and Ms Huda said that is a request and not a position, and asked for the position behind it. Nour said: the absence of a field, rather than the carelessness of the people filling it in, is what loses the promises — and that is the sentence she has never written in eight months, because it says the people are not at fault and she had not decided whether she believed that. Which is why the thesis sentence is written first and not last: you cannot find out what you think by writing three paragraphs and seeing where you end up, but by trying to write one sentence somebody could be wrong about and noticing which version you are willing to sign._'));
out.push(p('**Listener task:** write one thesis sentence from the room and the Y in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first paragraph Nour writes, four times over, with the thesis sentence changing each time. Answer the questions.'));
out.push(model([
  '**ONE PARAGRAPH, FOUR THESIS SENTENCES** · N. Sabbagh · 2 October',
  'I have written the first paragraph of the same argument four times this week, changing nothing but the first sentence. The four are below in the order I wrote them, and the last one is the only one I would sign.',
  '**One.** _"The recording of telephone undertakings is an important matter."_ Nobody can disagree with this. It took me four minutes to write and it says nothing at all; I have been opening notes like this for a year.',
  '**Two.** _"The note template needs a field for the promise date."_ Somebody can disagree with this, but it is a **request** and not a position: a reader who says no has refused a change, not an argument, and there is nothing left to say to them.',
  '**Three.** _"The note template is badly designed."_ A position, and a bad one — because it is about the template, which nobody built on purpose and nobody defends, so there is no argument to be had and I have insulted whoever owns it for nothing.',
  '**Four.** _"The absence of a field, rather than the carelessness of the people taking the calls, is what loses the promises."_ Thirty-four of forty-one calls, and **this is the sentence I did not write for eight months.** It commits me to something: that the people on the telephone are not at fault. I believe that, and I had never had to say so, because the agentless versions let me complain without taking a side.',
  '**What the fourth one costs me, which is the reason I avoided it.** If the people are not at fault, then I am asking for a change to a system rather than a change in behaviour — which is a larger request, goes to somebody more senior, and cannot be dropped quietly if it is refused.',
  '**One thing I had not expected, about the order.** I wrote them in the order above, worst first, and I could not have written the fourth without having written the first three. The empty version is not a failure of thinking; it is the first thing the mind produces, and the only way past it seems to be to write it down and look at it.',
  '**And the thing the four of them together taught me.** The emptiest version was the one I could write fastest. **The one I believed took eight months**, and the eight months were not research; they were the time it took to be willing to say that nobody was at fault.',
]));
out.push(item('1', 'Why does she say the second version is a request and not a position?'));
out.push(item('2', 'What is wrong with the third version, which is a position?'));
out.push(item('3', 'What does the fourth version commit her to, and what does that cost?'));
out.push(writers([
  'A page that shows one paragraph with four thesis sentences: **say what you changed and what you did not** → **the empty version, and how fast you wrote it** → **the request version, and why a reader can only refuse it** → **the bad position, and whom it insults for nothing** → **the one you would sign, with its figure** → **what it commits you to** → **and what the four together taught you**.',
  '**Print the empty one first and admit how fast it came.** _It took me four minutes to write and it says nothing at all._ A page that shows only the good version teaches nobody, because the reader cannot see which move produced it.',
  '⚠ **Say what the position commits you to.** _That the people on the telephone are not at fault._ A thesis sentence is a liability, not a decoration: if it costs you nothing to assert, nobody can disagree with it, and if nobody can disagree with it you have written version one again.',
  'Distinguish the request from the position in one line each. _A reader who says no has refused a change, not an argument._ That sentence is what stops a reader treating your essay as a form to be declined.',
  '⚠ And end on the arithmetic of your own delay. _The emptiest version was the one I could write fastest; the one I believed took eight months._ Eight months is not research time. It is the time it took to be willing to say something.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows one paragraph with four thesis sentences (80 words or more).'));
out.push(p('**ONE PARAGRAPH, FOUR THESIS SENTENCES** · ______________ · ______________   I have written the first paragraph of the same argument four times, changing nothing but ______________.   **One.** "______________" Nobody can disagree with this. It took me ______________ to write.   **Two.** "______________" Somebody can disagree, but it is a **request**: a reader who says no has ______________.   **Three.** "______________" A position, and a bad one, because ______________.   **Four.** "______________" And this is the sentence I did not write for ______________.   **What the fourth costs me.** ______________.   **And the thing the four taught me.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Four versions, in the order they were written',
  'The empty one admitted, with how fast it came',
  'The request told apart from the position, in one line each',
  'What the signed version commits the writer to',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their fourth version and the thing it commits them to.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): what you changed, the four versions with what is wrong with each, the one you would sign with its figure, what it commits you to, and what the four taught you.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the empty version printed and admitted, the request told apart from the position, what the signed version commits you to.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your fourth version and let one person disagree with it.** If nobody can, it goes back, and it will go back about three times in a class of twelve. Then the sentence to leave the cycle on, which is Nour\'s: **the emptiest version was the one I could write fastest** — and that is true of every essay any of you will write this year.'));
out.push(hw('Write the page (80+ words). Then take your 1.7 essay — do not improve it — and **underline its first sentence**. Write beside it: position or situation.'));

// ===================== 3.2 =====================
out.push(pb());
out.push(h2('3.2  The point you should have conceded'));
out.push(p('**Function:** taking the two points you are given and saying which you will concede   ·   **Grammar:** the four-paragraph shape · planning in four lines   ·   **Pronunciation:** the concession and the limit, in two tones'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the argument you lost again, and then say **the one thing the other side was right about**. Not a courtesy — a thing you now accept. If you cannot name one, say so, and the class will come back to you at the end.'));
out.push(board('They were wrong about all of it.', 'They were right that it takes longer, and it does.'));
out.push(p('**b**  Which is a concession and which is a courtesy? **1** _I understand that views differ._  **2** _It does take about four seconds longer, and on a short shift that is real._  **3** _Of course there are two sides to this._  **4** _Their figure was right and mine was out by nine._  **5** _I respect the opposite opinion._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say an examiner is looking for in the second paragraph, and what does Mazen discover about the argument he lost?   **A** more examples; that he was wrong   **B** a conceded point with a limit on it; that the point he refused to concede was the true one   **C** a longer conclusion; that he should have been louder'));
out.push(p('**b**  Listen again. **1** What are the four lines of the plan?   **2** What does Ms Huda say happens to an essay that concedes nothing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  Which one will you give up?', [
  ['Ms Huda', 'The exam gives you two points and asks for a third of your own. Tonight: **which of the two will you concede?** Not which will you mention — which will you **give up**.'],
  ['Omar', 'Why would you give one up? You are supposed to be arguing.'],
  ['Ms Huda', 'Because an essay that concedes nothing is read as an essay by somebody who has not thought about it. ⚠ **A reader believes a writer who has given something away and nobody else.** That is not a rule about politeness. It is a rule about evidence: if you have conceded nothing, the reader cannot tell whether you have weighed anything or simply arrived with an opinion.'],
  ['Hiba', 'But then you have agreed with the other side.'],
  ['Ms Huda', 'You have agreed with **one point**, and then you have put a **limit** on it, and the limit is the paragraph. _It does take four seconds longer, and on a short shift that is real — but four seconds is not what stopped the four sites using the sheet; two of them were never sent one._ Concede, then limit. Mr Hariri, the argument you lost.'],
  ['Mazen', 'Nine drafts, fourteen months, and I lost it in September. I had two points against me: that I had asked for four units and not a replacement, and that I had accepted them in January. I spent nine drafts refusing both.'],
  ['Ms Huda', 'Which one was true?'],
  ['Mazen', 'The second. I did accept them in January, and I accepted them because I wanted them, and that is the whole of 1.5. I refused to concede the one thing I now say out loud in every cycle.'],
  ['Nour', 'So the concession was the argument.'],
  ['Ms Huda', '⚠ **The concession is where the argument actually is.** The point you cannot give up is the point you have not examined — and nine times in ten it is the one the other side is right about. Now the plan, and it is four lines and never more.'],
  ['Dima', 'Four lines for a two-hundred-word essay?'],
  ['Ms Huda', 'Four lines, and the essay takes forty minutes with them and never finishes without them. **Line one: the position, in the _X rather than Y_ shape.** **Line two: which given point I concede, and the limit.** **Line three: the given point I hold, and the one example.** **Line four: my own third point, and the one thing the conclusion adds.** That is the whole plan. Four lines, about four minutes.'],
  ['Jad', 'And the paragraphs are the lines?'],
  ['Ms Huda', 'One paragraph each, in that order, about forty words for the first and about fifty-five for the others. Two hundred and five words, which is inside the band with nothing to spare — so a fifth paragraph is not an option and a long first paragraph costs you the conclusion.'],
  ['Adnan', 'Where does the second given point go, if I concede the first?'],
  ['Ms Huda', 'Inside the **limit** on your concession, or at the head of the conclusion. ⚠ Both notes have to appear or the examiner marks you down for content, and students who concede one and then forget the other lose marks for a thing they knew.'],
  ['Rim', 'What if both of them are true?'],
  ['Ms Huda', 'Then concede the **larger** one and hold the one you can put a figure against — and say in the conclusion that the other is true too. That is a harder essay and a better one, and the examiner has read four hundred that concede nothing.'],
]));
out.push(sp());
out.push(box('Language box – the four lines, and the concession', [
  '**The plan, and it is four lines and never more.** **1** the position, in the _X rather than Y_ shape.   **2** which given point I **concede**, and the **limit**.   **3** the given point I **hold**, and the **one example**.   **4** my own **third point**, and the one thing the conclusion **adds**. About four minutes to write; the essay takes forty with it and does not finish without it.',
  '**The four paragraphs and their lengths.** About **40** words, then **55**, **55**, **55** — two hundred and five, which is inside 180–220 with nothing to spare. ⚠ A fifth paragraph is not an option, and a first paragraph of seventy words costs you the conclusion.',
  '**Concede, then limit — and the limit is the paragraph.** _It does take four seconds longer, and on a short shift that is real_ **but** _four seconds is not what stopped the four sites; two of them were never sent a sheet._ The concession is one sentence; the limit is the other two.',
  '**The language of conceding.** _It is true that…_ · _I accept that…_ · _There is no question that…_ · _Admittedly…_ — and then the limit: _…but that is not what decides it_ · _…which does not settle the question_ · _…and yet the figure points the other way_.',
  '⚠ **A courtesy is not a concession, and an examiner can tell at a glance.** _I understand that views differ_ concedes nothing and costs nothing. _Their figure was right and mine was out by nine_ concedes something and costs something. The test is whether you have given up a thing you would rather keep.',
  '**Why it is worth marks and not just good manners.** A reader believes a writer who has given something away and nobody else. **If you have conceded nothing, the reader cannot tell whether you weighed anything or simply arrived with an opinion.**',
  '**And the hard truth of the cycle: the point you cannot give up is the point you have not examined.** Nine times in ten it is the one the other side is right about.',
  '**Pronunciation.** 🔊 **Track 3.4** The concession and the limit are spoken in **two tones**: the concession flat and unhurried, a clear pause, then the limit faster and a little lower — _it does take four seconds longer ‖ and that is real ‖ **but four seconds is not what stopped them**_. ⚠ Run them together and the listener hears a single grudging sentence, which is worse than no concession at all.',
  '**Practise:** For each, name the point you would concede and put a limit on it. **1** explaining everything fully  **2** written rules at work  **3** meetings before decisions  **4** keeping records by hand  **5** asking a stranger for help',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a question and its two given points from the card. B says which one they will concede and gives the **limit** in one sentence. A says whether that was a concession or a courtesy. Then A takes the other side and does the same. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the question)_ __________. _(points)_ **1** __________ **2** __________.'],
  ['B', 'I concede __________. _(limit)_ It is true that __________, but __________.'],
  ['A', 'That was a **concession / courtesy**, because __________.'],
  ['B', 'And the point I am holding is __________, because I can put __________ against it.'],
]));
out.push(table(['Card A – the question and its two points', 'Card B – the question and its two points'], [
  ['_Is it always better to explain fully?_ · time · the person who does not know', '_Should rules at work be written down?_ · memory · disagreement'],
  ['_Are meetings a waste of time?_ · decisions · the people not in the room', '_Should everything be recorded?_ · effort · what is lost'],
  ['_Is it better to ask or to work it out?_ · speed · looking foolish', '_Should forms be short or complete?_ · the reader · the file'],
  ['_Should you say you do not know?_ · trust · authority', '_Is a deadline a help or a threat?_ · planning · honesty'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight concessions and mark each **concession** or **courtesy**. Then the count: on a first run it is about **three real concessions in eight**, and the five courtesies are almost all the same four phrases — _views differ_, _two sides_, _I respect_, _of course_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your four lines for the argument you lost — the plan and not the essay — in four minutes. Then read line **two** out loud, which is the concession and the limit.'));
out.push(p('**b**  Swap. Then each of you say whether your partner has conceded the **larger** of the two points or the easier one, and how you can tell.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The exam gives you two points and asks for a third of your own, and the question for the evening was which of the two you will concede — not mention, give up. Omar asked why you would give one up when you are supposed to be arguing, and Ms Huda said because an essay that concedes nothing reads as an essay by somebody who has not thought about it: a reader believes a writer who has given something away and nobody else, which is not a rule about politeness but about evidence. If you have conceded nothing, the reader cannot tell whether you weighed anything or arrived with an opinion. Hiba said but then you have agreed with the other side, and Ms Huda said you have agreed with one point and then put a limit on it, and the limit is the paragraph — it does take four seconds longer and on a short shift that is real, but four seconds is not what stopped the four sites using the sheet, because two of them were never sent one. Concede, then limit. Then Mazen\'s argument. Nine drafts, fourteen months, lost in September, with two points against him: that he had asked for four units and not a replacement, and that he had accepted them in January. He spent nine drafts refusing both. Asked which was true, he said the second — he did accept them in January, and he accepted them because he wanted them, which is the whole of 1.5, and he refused to concede the one thing he now says out loud in every cycle. Nour said so the concession was the argument, and Ms Huda said the concession is where the argument actually is: the point you cannot give up is the point you have not examined, and nine times in ten it is the one the other side is right about. Then the plan, four lines and never more: the position in the X rather than Y shape; which given point I concede and the limit; the given point I hold and the one example; my own third point and the one thing the conclusion adds. Four minutes, and the essay takes forty with it and never finishes without it._'));
out.push(p('**Listener task:** write your own line two — the concession and the limit — and mark whether it costs you anything.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mazen\'s four lines and then the second paragraph he built from line two. Answer the questions.'));
out.push(model([
  '**FOUR LINES, AND THE PARAGRAPH THAT CAME OUT OF LINE TWO** · M. Hariri · 3 October',
  '_The question: should you ever accept something you have said in writing that you do not want? Given: the cost of refusing · what the other side has already conceded._',
  '**Line one — the position.** _Consistency, rather than firmness, is what a refusal in writing actually costs you._',
  '**Line two — the point I concede, and the limit.** _Concede: I did accept the four units, having twice said in writing that I was not asking for a replacement. Limit: the inconsistency is real and it is not what the meeting was about._',
  '**Line three — the point I hold, and the one example.** _Hold: the specification was the object and I got it. Example: nine drafts, fourteen months, eleven minutes — one example and no more._',
  '**Line four — my own third point, and what the conclusion adds.** _Third point: a letter that has never been contradicted has usually never been read. Adds: the September meeting failed on delivery and not on content._',
  '_______________________________________________',
  '**And the second paragraph, written from line two in about six minutes.** _"It is true that I accepted the four units in January, having twice stated in writing that I was not asking for a replacement, and the inconsistency is a real one which I would rather not have to explain. But an inconsistency is not an argument against the thing I was asking for. The question in the room was whether the specification existed, and it did; whether I had been consistent about the units is a separate matter and nobody in the room raised it."_',
  '**What the paragraph does that nine drafts never did.** It says the thing against me **first**, in my own words, before anybody else can say it — and then it says what it is not. Nine drafts put that sentence last, as a defence, where it reads as a confession.',
  '**What the limit is doing, in grammatical terms, because it took me nine drafts not to see it.** The concession is a main clause and the limit is a main clause, and between them there is a full stop and a _but_. Nine of my drafts put the concession in a subordinate clause — _although I accepted them in January_ — which buries it, and a buried concession is read as an excuse rather than as a judgement.',
  '**And the one line of the four I could not write at the first attempt.** Line two. I wrote lines one, three and four in about three minutes and sat for eleven more over line two, because writing it down meant deciding that the inconsistency was real.',
]));
out.push(item('1', 'What does he concede in line two, and what limit does he put on it?'));
out.push(item('2', 'What does the paragraph do that nine drafts never did?'));
out.push(item('3', 'Which of the four lines took him longest, and why?'));
out.push(writers([
  'A page that shows the four lines and one paragraph built from them: **the question and its two given points** → **line one, the position** → **line two, the concession and the limit** → **line three, the point held and the one example** → **line four, the third point and what the conclusion adds** → **a line across the page** → **the paragraph, written out** → **what it does that your old version did not** → **and which line took longest**.',
  '**Keep the four lines as lines.** Not sentences, not a paragraph — four lines with labels, which is what makes them writable in four minutes and checkable by somebody else in one.',
  '⚠ **Put the concession in the writer\'s own words and put it first.** _It is true that I accepted the four units…_ A thing said against you by you, early, reads as judgement; the same thing said last reads as a confession, and nine drafts of Mazen\'s put it last.',
  '**The limit is two sentences, not a clause.** _But an inconsistency is not an argument against the thing I was asking for. The question in the room was whether the specification existed._ One sentence refuses the inference; the second says what the question actually was.',
  '⚠ And say which line took longest, because it is always the concession. _Eleven minutes over line two, because writing it down meant deciding that the inconsistency was real._ That is not a confession of slowness; it is the evidence that the thinking happened.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the four lines and the paragraph that comes out of line two (80 words or more).'));
out.push(p('_The question: ______________. Given: ______________ · ______________._   **Line one — the position.** ______________, rather than ______________, is what ______________.   **Line two — the point I concede, and the limit.** _Concede:_ ______________. _Limit:_ ______________.   **Line three — the point I hold, and the one example.** _Hold:_ ______________. _Example:_ ______________.   **Line four — my own third point, and what the conclusion adds.** _Third point:_ ______________. _Adds:_ ______________.   ____________________________________   **The paragraph from line two.** "It is true that ______________, and ______________. But ______________. The question ______________."   **What it does that my old version did not.** ______________.   **And which line took longest.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Four lines, labelled, as lines and not as sentences',
  'A concession that costs the writer something, in their own words, first',
  'A limit in two sentences — the refusal and then the real question',
  'Which line took longest, and it is line two',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read line two only, and the room says whether it costs them anything.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the question and its two points, the four lines, the paragraph built from line two, what it does that your old version did not, and which line took longest.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a concession that costs something, a limit in two sentences, the four lines kept as lines.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read line two and let the room vote: concession or courtesy?** The vote is usually close and the four courtesy phrases will all appear. Then the sentence to leave the cycle on, which is the hard one: **the point you cannot give up is the point you have not examined** — and in Mazen\'s case it cost him nine drafts and fourteen months to find that out.'));
out.push(hw('Write the page (80+ words). Then look at your 1.7 essay and find out whether it concedes anything at all. Do not change it. Write **yes** or **no** in the margin and the date.'));

// ===================== 3.3 =====================
out.push(pb());
out.push(h2('3.3  The third point, which is yours'));
out.push(p('**Function:** adding the third point, which is your own, and saying why it is not obvious   ·   **Grammar:** _a third consideration, which is rarely raised, is…_   ·   **Pronunciation:** the parenthetical that signals a new point'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the two points the exam question would give you on your own topic. Then say a **third** that nobody has mentioned to you. If your third point is a restatement of one of the first two, say so — most are.'));
out.push(board('And there is also the cost.', 'A third consideration, which is rarely raised, is who finds out first.'));
out.push(p('**b**  Which is a genuine third point, and which is a restatement? **1** _It also takes time._  **2** _Nobody ever asks who the explanation is for._  **3** _It is also expensive._  **4** _The person who explains learns what they did not know._  **5** _It is important for communication._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give for a third point, and what is Hiba\'s third point about explaining?   **A** that it be long; that it costs money   **B** that the examiner could not have predicted it from the two given points; that the person who explains finds out what they did not know   **C** that it be last; that it is important'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say the words _rarely raised_ are a promise?   **2** What does Dima say about a third point that is really a fourth example?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  Something the examiner could not have guessed', [
  ['Ms Huda', 'The exam gives you two points and a blank line that says _your own idea_. Most candidates write a third sentence about one of the first two and call it an idea. Tonight: **a third point is something the examiner could not have predicted from the two given to you.**'],
  ['Hiba', 'That is a high test.'],
  ['Ms Huda', 'It is the test, and it is also the easiest mark in the paper to earn, because almost nobody tries. Give me one. Explaining things fully: time, and the person who does not know. Third point.'],
  ['Hiba', '**The person who explains finds out what they did not know.** I have taught the same four months of grammar for six years and I did not understand the continuous forms until I had to explain them to a trainee.'],
  ['Ms Huda', 'Could that have been predicted from _time_ and _the person who does not know_?'],
  ['Omar', 'No. It is about the explainer and both of theirs are about the listener.'],
  ['Ms Huda', '⚠ **Which is the mechanism, and it is worth writing down: a third point is usually found by changing who the sentence is about.** Both given points are about the reader. Yours is about the writer. Or both are about the cost and yours is about who finds out. Or both are about now and yours is about a year from now.'],
  ['Dima', 'I get a lot of third points that are really a fourth example of point two.'],
  ['Ms Huda', 'Everybody does, and there is a test for it. Take your third point and ask: **could it be a sentence inside paragraph two?** If it could, it is an example and not a point. _It is also expensive_ sits perfectly well inside a paragraph about time. _Nobody ever asks who the explanation is for_ does not sit anywhere; it needs its own paragraph, which is how you know.'],
  ['Jad', 'And you say it is rarely raised?'],
  ['Ms Huda', 'You do, in those words or something like them — _a third consideration, which is rarely raised, is…_ ⚠ And that is a **promise**, which means you have to keep it: if the thing you then say is obvious, the phrase works against you and the examiner has been told to expect something and has not had it. A candidate who writes _rarely raised_ and then says _it also takes time_ has marked their own paper.'],
  ['Nour', 'Mine would be about the template, and both given points would be about the people.'],
  ['Ms Huda', 'Then you have your third point by the mechanism, and notice what it does to the essay: paragraph two concedes something about the people, paragraph three holds something about the people, and paragraph four moves the whole argument to the **system**. The essay has gone somewhere, which is what _develops_ means on the band descriptors.'],
  ['Adnan', 'Four years of writing notices and nobody has ever asked me for my own idea.'],
  ['Rim', 'Mine would be that a letter nobody answers has usually not been read, and both the given points would be about what the letter says.'],
  ['Ms Huda', 'Which is the mechanism again — both given points about the text, yours about the reader. Nobody asks, in an office. The paper asks, and it is the one place where the thing you have noticed and never said is worth two marks. ⚠ **Bring the unsaid thing. It is almost always the best paragraph in the essay.**'],
]));
out.push(sp());
out.push(box('Language box – the third point', [
  '**The test.** A third point is something **the examiner could not have predicted from the two points given to you**. It is the easiest mark in the paper to earn, because almost nobody tries for it.',
  '**The mechanism, and it is reliable: change who or what the sentence is about.** Both given points about the **reader** → make yours about the **writer**. Both about the **cost** → make yours about **who finds out**. Both about **now** → make yours about **a year from now**. Both about the **people** → make yours about the **system**.',
  '**The test that catches a false third point.** Ask: **could this be a sentence inside paragraph two?** _It is also expensive_ sits perfectly inside a paragraph about time, so it is an **example**. _Nobody ever asks who the explanation is for_ sits nowhere, so it needs a paragraph of its own — which is how you know it is a point.',
  '**The phrase, and the three alternatives.** _A third consideration, **which is rarely raised**, is…_ · _There is a further point, and it is one I have not seen made: …_ · _What is almost never asked is…_ · _A third thing, which cuts across both of these, is…_',
  '⚠ **_Rarely raised_ is a promise and you have to keep it.** You have told the examiner to expect something they have not thought of. If what follows is obvious, the phrase works against you and you have marked your own paper.',
  '**What a genuine third point does to the whole essay.** Paragraph two concedes something about the people; paragraph three holds something about the people; paragraph four moves the argument to the system. **The essay has gone somewhere — and that is what _develops the topic_ means on the band descriptors.**',
  '**And where to find yours.** The thing you have noticed at work and never said, because nobody asks. _Nobody asks, in an office. The paper asks._ It is almost always the best paragraph in the essay.',
  '**Pronunciation.** 🔊 **Track 3.6** The parenthetical is spoken **lower and faster, between two pauses**, and the point itself comes back up: _a third consideration ‖ which is rarely raised ‖ **is who finds out first**_. ⚠ Said at one pitch the whole sentence sounds like a formula, and the examiner — who has heard it four hundred times — stops listening before the point arrives.',
  '**Practise:** Give the two obvious points, then a third by changing who the sentence is about. **1** training somebody new  **2** written rules  **3** deadlines  **4** keeping records  **5** admitting a mistake',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a topic and the two obvious points. B gives a third and names **what they changed** — who it is about, when it is about, or what it is about. A applies the paragraph-two test: could it sit inside paragraph two? Swap cards.'));
out.push(dlg(null, [
  ['A', '_(topic)_ __________. The two obvious points are __________ and __________.'],
  ['B', 'A third consideration, which is rarely raised, is __________. I changed __________.'],
  ['A', 'Could it sit inside paragraph two? __________ — so it is a **point / an example**.'],
  ['B', 'And the reason nobody raises it is __________.'],
]));
out.push(table(['Card A – topic and its two obvious points', 'Card B – topic and its two obvious points'], [
  ['_training somebody new_ · time · their mistakes', '_written rules_ · memory · disputes'],
  ['_deadlines_ · pressure · planning', '_keeping records_ · effort · evidence'],
  ['_admitting a mistake_ · trust · blame', '_asking for help_ · speed · pride'],
  ['_short forms_ · the reader · the file', '_meetings_ · time · agreement'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight third points and mark each **point** or **example**. Then the finding: the ones that pass are almost all produced by **changing who the sentence is about**, and the ones that fail are almost all about **cost** — because cost is where everybody goes when they cannot think of anything.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your own third point on your own topic, in the full phrase, and then say **why nobody raises it**. The second half is the harder one and it is where the paragraph comes from.'));
out.push(p('**b**  Swap. Then each of you try to put your partner\'s third point inside their paragraph two. If it fits, it is an example, and they need another one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The exam gives you two points and a blank line that says "your own idea", and most candidates write a third sentence about one of the first two and call it an idea. So the test: a third point is something the examiner could not have predicted from the two given to you. Hiba said that is a high test, and Ms Huda said it is the test and also the easiest mark in the paper to earn, because almost nobody tries. Then Hiba gave one. Explaining things fully: time, and the person who does not know. Her third point — the person who explains finds out what they did not know. She has taught the same four months of grammar for six years and did not understand the continuous forms until she had to explain them to a trainee. Could that have been predicted? Omar said no: it is about the explainer and both of the given points are about the listener. Which is the mechanism, and it is worth writing down — a third point is usually found by changing who the sentence is about. Both given points about the reader; yours about the writer. Both about the cost; yours about who finds out. Both about now; yours about a year from now. Then Dima said she gets a lot of third points that are really a fourth example of point two, and Ms Huda gave the test for it: take the third point and ask whether it could be a sentence inside paragraph two. "It is also expensive" sits perfectly well inside a paragraph about time. "Nobody ever asks who the explanation is for" does not sit anywhere, which is how you know. And the phrase — a third consideration, which is rarely raised — is a promise, so you have to keep it: a candidate who writes "rarely raised" and then says "it also takes time" has marked their own paper. Then Adnan said four years of writing notices and nobody has ever asked him for his own idea, and Ms Huda said nobody asks in an office, the paper asks, and it is the one place where the thing you have noticed and never said is worth two marks._'));
out.push(p('**Listener task:** write your third point and the one word you changed to get it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the third paragraph Hiba writes, and the two she threw away. Answer the questions.'));
out.push(model([
  '**THE THIRD PARAGRAPH, AND THE TWO BEFORE IT** · H. Nasser · 4 October',
  '_The question: is it always better to explain something fully than to assume the other person understands? Given: time · the person who does not know._',
  '**The first third point I wrote, and threw away.** _"A third consideration is the cost in time to the organisation."_ It is an example of point one wearing a hat. It would sit inside paragraph two without a seam, and I knew that and wrote it anyway because it was four o\'clock.',
  '**The second, which was better and still failed.** _"A third consideration is that some people prefer to work things out for themselves."_ Predictable from _the person who does not know_: it is the same person, viewed kindly. The examiner has read it.',
  '**The third, which is the one I kept.** _"A third consideration, which is rarely raised, is that the person doing the explaining is the one who finds out what they did not know. I have taught the same four months of grammar for six years. I did not understand the continuous forms until a trainee asked me a question I could not answer, and the gap had been in my teaching, unnoticed, for five of those six years."_',
  '**What I changed to get it.** Both given points are about the **listener**. Mine is about the **speaker**. That is the whole move and it took about a minute once I had seen it.',
  '**Why nobody raises it, which is the sentence the paragraph needed.** Because it makes explaining sound like something you do for yourself, and that is not how anybody talks about teaching. ⚠ **A point that is rarely raised is rarely raised for a reason, and saying the reason is what makes the paragraph land instead of merely surprising.**',
  '**What I shall do differently in the exam, which is the only practical thing on this page.** Write the third point on the plan line **before** paragraph two, not after paragraph three. I have now twice reached paragraph four with nothing of my own in hand and written the first thing available, and the first thing available is always a cost.',
  '**And the thing I notice about the three versions.** The first took one minute, the second four, and the third about twenty — and the twenty were nearly all spent on the last clause, _unnoticed, for five of those six years_, which is the only part of it that costs me anything.',
]));
out.push(item('1', 'Why did she throw away the first third point, and why the second?'));
out.push(item('2', 'What did she change to get the third one, and how long did it take once she saw it?'));
out.push(item('3', 'Why does she say nobody raises it, and why does that sentence matter?'));
out.push(writers([
  'A page that shows a third point and the two before it: **the question and its two given points** → **the first attempt and why it fails** → **the second and why it still fails** → **the one you kept, written out in full** → **what you changed to get it** → **why nobody raises it** → **and the time the three took**.',
  '**Print the two you threw away.** _It would sit inside paragraph two without a seam, and I knew that and wrote it anyway because it was four o\'clock._ The discarded versions are the teaching; the kept one on its own is a performance.',
  '⚠ **Name the move in grammatical terms, not as inspiration.** _Both given points are about the listener. Mine is about the speaker._ That sentence is what lets a reader do the same thing to a different question, and it is the only transferable part of the page.',
  '**Say why nobody raises it.** _Because it makes explaining sound like something you do for yourself._ A point that is rarely raised is rarely raised **for a reason**, and giving the reason is what makes the paragraph land rather than merely surprise.',
  '⚠ And put the time against each version. _One minute, four minutes, about twenty_ — and the twenty nearly all spent on the one clause that costs the writer something. The timings are the evidence that the last version is not luck.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows your third point and the two before it (80 words or more).'));
out.push(p('_The question: ______________. Given: ______________ · ______________._   **The first third point I wrote, and threw away.** "______________" It is ______________.   **The second, which was better and still failed.** "______________" Predictable from ______________.   **The third, which is the one I kept.** "A third consideration, which is rarely raised, is ______________. ______________. ______________."   **What I changed to get it.** Both given points are about ______________. Mine is about ______________.   **Why nobody raises it.** ______________.   **And the time the three took.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both discarded versions printed, with the fault in each',
  'The move named grammatically — who or what the sentence is about',
  'One sentence saying why nobody raises it',
  'A time against each of the three versions',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the version they threw away and say what was wrong with it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the question, the two discarded versions with their faults, the third point in full, the move you made, why nobody raises it, and the three timings.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the discarded versions printed, the move named grammatically, the reason nobody raises it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your third point and let the room try to fit it inside your paragraph two.** About a third will fit, and those students need another one tonight. Then the sentence to leave the cycle on, which is Adnan\'s: **nobody asks, in an office — the paper asks**, and it is the one place where the thing you have noticed for four years and never said is worth two marks.'));
out.push(hw('Write the page (80+ words). Then read the 1.7 essay again and write in the margin whether it has a **third point** at all, and if so, which of the two given ones it is really about.'));

// ===================== 3.4 =====================
out.push(pb());
out.push(h2('3.4  One example, and no more'));
out.push(p('**Function:** supporting a point with one example and no more   ·   **Grammar:** _take the case of_ · _one instance is enough to show that_   ·   **Pronunciation:** the example read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one of your points and then give **three** examples of it, out loud, in a row. Then say which of the three is the strongest, and why — and the answer is never _because it is the biggest_.'));
out.push(board('There are many examples of this.', 'Take the case of the four sites that were never sent a sheet.'));
out.push(p('**b**  Which example is doing work? **1** _For instance, this happens a lot._  **2** _Take the case of the four pallets at eleven degrees._  **3** _There are numerous examples of this problem._  **4** _One instance is enough: nineteen of twenty-two calls in a single month._  **5** _This can be seen in many organisations._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say three examples are worse than one, and what makes an example strong?   **A** they take too long; the biggest number   **B** three means the writer is not sure which one works; that it can be checked and that it could have gone the other way   **C** the examiner only reads one; the most recent one'));
out.push(p('**b**  Listen again. **1** What does Rim say about the example she had been using for three years?   **2** What does Ms Huda say an example must be able to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  Three examples means you do not know which one works', [
  ['Ms Huda', 'Two hundred words, four paragraphs, and in each body paragraph **one** example. Not two, not _for instance_ followed by three things. One.'],
  ['Jad', 'Three is more convincing.'],
  ['Ms Huda', 'Three is **less** convincing, and here is why, and it is not about length. ⚠ **Three examples tell the reader that the writer does not know which one works.** A writer who knows puts the one down and stops. A writer who is hoping puts three down and lets you choose, and a reader can feel the difference in about four words.'],
  ['Omar', 'So how do you choose?'],
  ['Ms Huda', 'Two tests. **Can it be checked?** And — this is the one nobody is taught — **could it have gone the other way?** An example that could only ever have come out as it did is an illustration, not evidence. Mrs Shaaban, your refusal example.'],
  ['Rim', 'For three years I have said: _nobody ever argues with the template._ I used it as my example of the template working.'],
  ['Ms Huda', 'Could it have gone the other way?'],
  ['Rim', 'No. The template cannot be argued with, so of course nobody argues with it. The example was the claim again in different words.'],
  ['Dima', 'That is circular.'],
  ['Rim', 'It is, and I have put it in writing about nine times. The example that **could** have gone the other way is the eleven degrees: I put a figure in two letters and twice somebody wrote back to argue with it. They might not have. That is why it counts.'],
  ['Ms Huda', '⚠ **Which is the whole cycle: an example earns its place by having been able to fail.** Nineteen of twenty-two could have been nine of twenty-two. Eleven degrees could have been two. Four sites that were never sent a sheet could have been nought.'],
  ['Hiba', 'And if the only example I have is a small one?'],
  ['Ms Huda', 'A small example that could have failed beats a large one that could not. _Two suppliers telephoned_ is better evidence than _nobody has ever complained_, and it is smaller by every measure except the one that matters.'],
  ['Nour', 'What about the phrase? I always write _for example_.'],
  ['Ms Huda', '_For example_ is not wrong and it is not doing anything. The shapes that do something are **_take the case of…_**, which commits you to one, and **_one instance is enough to show that…_**, which tells the reader you have chosen rather than collected. ⚠ And the second one is a promise, like _rarely raised_: if your instance is not enough, you have said so yourself.'],
  ['Adnan', 'In a notice you give none at all.'],
  ['Ms Huda', 'In a notice you give none, which is why four years of notices is no preparation for this paper. ⚠ And one last thing, about how it is read aloud: **the example goes in flat.** No emphasis, no slowing down, no _and this is the important part_. A figure that has been introduced with ceremony has been asked to carry more than it can.'],
]));
out.push(sp());
out.push(box('Language box – one example', [
  '**One per body paragraph. Not two, and not _for instance_ followed by three things.** Three examples tell the reader that the writer **does not know which one works** — and a reader feels that in about four words.',
  '**The two tests, in this order.** **1 Can it be checked?** A figure, a date, a count, a named document. **2 Could it have gone the other way?** ⚠ The second is the one nobody is taught, and it is the one that matters: _nineteen of twenty-two_ could have been nine of twenty-two; _nobody ever argues with the template_ could not have come out any other way, because the template cannot be argued with.',
  '⚠ **An example that could not have failed is the claim again in different words.** That is circular, and it is the commonest fault in a B2 body paragraph — commoner than having no example at all.',
  '**A small example that could have failed beats a large one that could not.** _Two suppliers telephoned_ is better evidence than _nobody has ever complained_, and it is smaller by every measure except the one that counts.',
  '**The shapes that do something.** _**Take the case of** the four sites that were never sent a sheet._ — commits you to one.   _**One instance is enough to show that** the figure was available all along._ — tells the reader you have **chosen** rather than collected.   _**In one month alone**, nineteen of the twenty-two…_ — puts the limit of the claim in front of the figure.',
  '**And two shapes that do nothing.** _For example_ — not wrong, not working. _There are many examples of this_ — which is three examples with the examples left out, and the examiner reads it as having none.',
  '⚠ **_One instance is enough_ is a promise.** If your instance is not enough, you have said so yourself, and the examiner has your own word for it.',
  '**Pronunciation.** 🔊 **Track 3.8** The example goes in **flat** — no emphasis, no slowing, no rise before the figure: _take the case of the four sites that were never sent a sheet._ ⚠ A figure introduced with ceremony has been asked to carry more than it can, and a listener discounts it for exactly that reason.',
  '**Practise:** For each point, give one example and say whether it could have gone the other way. **1** a form that nobody fills in  **2** a rule nobody follows  **3** a question nobody asks  **4** a figure nobody has  **5** a change nobody noticed',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a point from the card. B gives **one** example in one of the working shapes. A applies both tests out loud — can it be checked, could it have gone the other way. B then gives a **second, worse** example and says why it is worse. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the point)_ __________.'],
  ['B', 'Take the case of __________.'],
  ['A', 'Checked? __________. Could it have gone the other way? __________.'],
  ['B', 'A worse example would be __________, and it is worse because __________.'],
]));
out.push(table(['Card A – the point', 'Card B – the point'], [
  ['_A form nobody fills in is not a form._', '_A rule nobody follows has not been made._'],
  ['_The figure was available all along._', '_The people were not the problem._'],
  ['_Nobody asks the question that matters._', '_A change nobody noticed did not happen._'],
  ['_Silence is not agreement._', '_A deadline nobody set is not a deadline._'],
  ['_An explanation teaches the explainer._', '_A short page is read more often._'],
  ['_The cost falls on somebody not in the room._', '_A record with no date cannot be counted._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight examples and mark each **could have failed** or **could not**. Then the count: on a first run it is about **half** — and the ones that could not have failed are almost all of the form _nobody has ever complained_, which is the shape to watch for in your own work.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your one example for paragraph three, in a working shape. Then say what it could have been instead — the figure or outcome that would have made your point wrong.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s example is circular: does it restate the point in other words? If it does, ask them for the smaller one they did not use.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two hundred words, four paragraphs, and one example in each body paragraph — not two, and not "for instance" followed by three things. Jad said three is more convincing, and Ms Huda said three is less convincing, and not because of length: three examples tell the reader that the writer does not know which one works. A writer who knows puts the one down and stops; a writer who is hoping puts three down and lets you choose, and a reader can feel the difference in about four words. Then the two tests. Can it be checked? And — the one nobody is taught — could it have gone the other way? An example that could only ever have come out as it did is an illustration and not evidence. So Rim offered hers: for three years she has said that nobody ever argues with the template, and used it as her example of the template working. Could it have gone the other way? No — the template cannot be argued with, so of course nobody argues with it, and the example was the claim again in different words. Dima said that is circular, and Rim said it is, and she has put it in writing about nine times. The example that could have gone the other way is the eleven degrees: she put a figure in two letters and twice somebody wrote back to argue with it, and they might not have, which is why it counts. Which is the whole cycle — an example earns its place by having been able to fail. Hiba asked what to do if the only example is a small one, and Ms Huda said a small example that could have failed beats a large one that could not: two suppliers telephoned is better evidence than nobody has ever complained, and it is smaller by every measure except the one that matters. Then the shapes. "For example" is not wrong and is not doing anything; "take the case of" commits you to one, and "one instance is enough to show that" tells the reader you have chosen rather than collected — and it is a promise, so if your instance is not enough you have said so yourself._'));
out.push(p('**Listener task:** write your example and the figure it could have been instead.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two body paragraphs Rim writes — the old one with three examples and the new one with one. Answer the questions.'));
out.push(model([
  '**THE SAME PARAGRAPH, THREE EXAMPLES AND THEN ONE** · R. Shaaban · 5 October',
  '_The point in both: a letter that cannot be argued with has not been answered._',
  '**The old paragraph, with three examples.** _"There are numerous examples of this. For instance, our refusal template has been sent about ninety times and nobody has ever argued with it. Suppliers rarely respond to formal notices in general. In addition, many offices report that their standard letters go unchallenged. It is clear that this is a widespread problem."_ Sixty-two words, three examples, and not one figure that anybody could check.',
  '**Why all three fail, which took me an evening to see.** _Nobody has ever argued with it_ could not have gone the other way: the template cannot be argued with. _Suppliers rarely respond_ is somebody else\'s impression and not mine. _Many offices report_ is nobody at all. **Three examples, none of which could have failed, and the paragraph ends by telling the reader it is clear.**',
  '**The new paragraph, with one.** _"Take the case of the two letters I sent in September with a figure in them. Both said that four pallets had arrived eleven degrees above the specified maximum; both named the consignment. In three years of sending the template, nobody had written back. Within a fortnight, two suppliers had — one to argue about where the pallets had stood overnight, and one to say the figure was wrong by two degrees. They might have said nothing. That is why those two replies count and ninety silences do not."_ Eighty-one words, one example, and every figure in it could have come out differently.',
  '**What I had been doing, in one line.** Collecting silence and calling it agreement — which is the sentence from 1.2 arriving again, and I had not noticed that it was also a fault in my evidence and not only in my letters.',
  '**One more test I have started using, and it takes four seconds.** Read the example and ask: **what number would have made me wrong?** For the eleven degrees it is two degrees, and I can say it instantly. For _nobody has ever argued_ there is no such number, and the absence of an answer is the fault.',
  '**And the thing about length.** The new paragraph is nineteen words longer than the old one and contains **one** example instead of three. The three took sixty-two words because none of them could be given in detail: an example that cannot be checked has nothing to put in it.',
]));
out.push(item('1', 'Why does she say all three of the old examples fail?'));
out.push(item('2', 'What makes the two replies count and the ninety silences not?'));
out.push(item('3', 'What does she notice about the length of the two paragraphs, and why?'));
out.push(writers([
  'A page that shows a paragraph with three examples and then with one: **the point, stated once for both** → **the old paragraph, quoted and counted** → **why each of the three fails** → **the new paragraph, quoted and counted** → **what you had been doing, in one line** → **and the thing about length**.',
  '**Quote the bad paragraph in full and count it.** _Sixty-two words, three examples, and not one figure that anybody could check._ A page that describes the old version instead of printing it asks the reader to take the fault on trust.',
  '⚠ **Fail each example separately and name the kind of failure.** _Could not have gone the other way_ · _somebody else\'s impression_ · _nobody at all_. Three different faults, and a reader who can name them can find them in their own work; _they were all vague_ teaches nothing.',
  '**Say what the figure could have been.** _One to say the figure was wrong by two degrees. They might have said nothing._ Two sentences, and they are what turn an anecdote into evidence.',
  '⚠ And make the point about length, because it is counter-intuitive and it is the thing a student will not believe: **the three examples took sixty-two words precisely because none of them could be given in detail.** An example that cannot be checked has nothing to put in it, so it has to be padded.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows your paragraph with three examples and then with one (80 words or more).'));
out.push(p('_The point in both: ______________._   **The old paragraph, with three examples.** "______________" ______ words, three examples, and ______________.   **Why all three fail.** ______________ could not have gone the other way. ______________ is somebody else\'s impression. ______________ is nobody at all.   **The new paragraph, with one.** "Take the case of ______________. ______________. They might have ______________. That is why ______________."   **What I had been doing, in one line.** ______________.   **And the thing about length.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The old paragraph quoted in full and counted',
  'Each of the three examples failed separately, with the kind of failure named',
  'One example, with what it could have been instead',
  'The point about length, stated as the counter-intuitive thing it is',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the example they have dropped and say which of the three failures it was.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the point, the old paragraph quoted and counted, why each example fails, the new paragraph with one example, what you had been doing, and the thing about length.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the old paragraph quoted and counted, each example failed separately, the one example with what it could have been instead.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the one thing your example could have been instead.** The students who cannot answer are the students whose example is circular, and they will know it as they try. Then the sentence to leave the cycle on, which is Rim\'s: **an example earns its place by having been able to fail** — and ninety silences are not an example of anything.'));
out.push(hw('Write the page (80+ words). Then find the examples in your 1.7 essay — do not change it — and mark each one **could have failed** or **could not**. Most essays will have none at all.'));

// ===================== 3.5 =====================
out.push(pb());
out.push(h2('3.5  On balance, and one thing more'));
out.push(p('**Function:** writing a conclusion that follows from the paragraphs and adds one thing   ·   **Grammar:** _on balance_ · _the question is therefore not whether … but_   ·   **Pronunciation:** the fall at the end of the last sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your position again, and then say your conclusion. If the two are the same sentence in different words, say so — about three-quarters of the room will find they are.'));
out.push(board('So in conclusion, explaining fully is best.', 'On balance the cost is real; the question is therefore not whether to explain but who should find out first.'));
out.push(p('**b**  Which conclusion adds something? **1** _In conclusion, there are advantages and disadvantages._  **2** _On balance the time is worth spending, and the person who gains most is the one explaining._  **3** _To sum up, this is an important issue._  **4** _The question is therefore not whether the rule is right, but whether anybody has read it._  **5** _In my opinion, I think it is better._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a conclusion must do beyond summarising, and what does Lubna find about her own?   **A** be shorter; that it was too long   **B** add one thing that follows from the paragraphs and was not in any of them; that hers repeated paragraph one word for word   **C** ask a question; that it was fine'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say _on balance_ commits you to?   **2** What does Omar say about the examiner and the last sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  A conclusion that is not the first paragraph again', [
  ['Ms Huda', 'Four paragraphs. The fourth is the one almost everybody wastes, and they waste it in exactly the same way. Miss Sweidan, read your conclusion and then read your first paragraph.'],
  ['Lubna', '_"In conclusion, a full explanation is better than an assumption."_ And paragraph one: _"Explaining fully is better than assuming the other person understands."_'],
  ['Ms Huda', 'So what has the reader gained from paragraph four?'],
  ['Lubna', 'Nothing. I have told them where I started and called it where I finished.'],
  ['Ms Huda', '⚠ **A conclusion must do two things: follow from the paragraphs, and add one thing that was not in any of them.** Only one. Not a new argument — there is no room — but one consequence, one limit, or one question that the three paragraphs have made askable and that nobody could have asked before reading them.'],
  ['Jad', 'How is that different from a new argument?'],
  ['Ms Huda', 'A new argument would need its own evidence. The thing you add needs none, because the paragraphs have already earned it. _On balance the cost in time is real; the person who gains most from the explaining is the one doing it._ The second half is new, and paragraph three has already paid for it.'],
  ['Dima', 'And _on balance_?'],
  ['Ms Huda', '**_On balance_ commits you to having weighed something**, which means it is only honest after a concession. A candidate who concedes nothing in paragraph two and writes _on balance_ in paragraph four has used a weighing word with nothing in the scales, and the examiner reads that as a formula. ⚠ If you did not concede, do not write _on balance_.'],
  ['Omar', 'Does the examiner read the last sentence properly?'],
  ['Ms Huda', 'The examiner reads the first sentence and the last sentence most carefully of all, and they read them **together** — because that pair tells them whether the essay went anywhere. Two sentences, forty words, and the whole of _develops the topic_ is decided by them.'],
  ['Hiba', 'So the last sentence is the second most important in the essay.'],
  ['Ms Huda', 'It is, and most candidates spend their last four minutes on it when they have nothing left. Which is why line four of the plan exists: **you write what the conclusion adds before you write paragraph two.**'],
  ['Rim', 'Mine would be that the two replies came from the two letters with a figure in them.'],
  ['Ms Huda', 'And is that in paragraph three?'],
  ['Rim', 'The replies are. What is not in paragraph three is that I shall now never know what the other eighty-eight letters would have done, because I did not put a figure in them — and I cannot go back.'],
  ['Ms Huda', '⚠ **That is a conclusion.** It follows from the paragraph, it adds something nobody could have said before reading it, and it costs the writer something. And one shape worth having for exactly this: **_the question is therefore not whether … but whether …_** — which refuses the question as asked and replaces it, and is the strongest ending available at B2.'],
  ['Adnan', 'Is that not rude?'],
  ['Ms Huda', 'It is confident, which is different, and it is only earned if your three paragraphs have shown that the question as asked was the wrong one. Used without that, it is the rudest sentence in the paper.'],
]));
out.push(sp());
out.push(box('Language box – the conclusion', [
  '**It must do two things: follow from the paragraphs, and add one thing that was in none of them.** Only one — not a new argument, which would need its own evidence, but **one consequence, one limit, or one question the three paragraphs have made askable**.',
  '**The shapes, strongest last.** _**In conclusion**, …_ — does nothing; the examiner has read it four hundred times.   _**On balance**, X is worth Y, and …_ — commits you to having weighed something.   _**What this comes down to** is not X but Y._   _**The question is therefore not whether** X **but whether** Y._ — refuses the question as asked and replaces it: the strongest ending available at B2, and the rudest if it is not earned.',
  '⚠ **_On balance_ is only honest after a concession.** Concede nothing in paragraph two and write _on balance_ in paragraph four, and you have used a weighing word with nothing in the scales. **If you did not concede, do not write it.**',
  '**The commonest waste in the whole paper: paragraph four is paragraph one again in different words.** _In conclusion, a full explanation is better than an assumption_ against _explaining fully is better than assuming_. The reader has been told where you started and had it called where you finished.',
  '**What the examiner does with it.** They read the **first sentence and the last sentence together**, and more carefully than anything in between, because that pair is what tells them whether the essay went anywhere. Forty words decide _develops the topic_.',
  '⚠ **Which is why line four of the plan exists: you write what the conclusion adds _before_ you write paragraph two.** Most candidates reach the conclusion with four minutes left and nothing in hand, and then write paragraph one again.',
  '**And the best conclusions cost the writer something.** _I shall now never know what the other eighty-eight letters would have done, because I did not put a figure in them — and I cannot go back._ It follows from the paragraph, it was in none of them, and it is not comfortable.',
  '**Pronunciation.** 🔊 **Track 3.10** The last sentence takes a **long fall on its final stressed word and nothing after it**: _…but whether anybody has **READ** it._ ⚠ A conclusion read with a rise, or with a tailing-off, sounds like a paragraph that has been abandoned rather than finished — and in the Speaking paper the same fall ends a long turn.',
  '**Practise:** Write the one thing your conclusion adds, then say which of the four shapes it needs. **1** explaining fully  **2** written rules  **3** deadlines  **4** keeping records  **5** asking questions',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their position and the three things their body paragraphs establish. B writes the conclusion — one shape, one added thing — and names which of the three paragraphs pays for it. A says whether it is new or paragraph one again. Swap.'));
out.push(dlg(null, [
  ['A', '_(position)_ __________. _(paragraphs establish)_ __________, __________, __________.'],
  ['B', '_(conclusion)_ __________. The thing I have added is __________, and paragraph __________ pays for it.'],
  ['A', 'That is **new / paragraph one again**, because __________.'],
  ['B', 'And it costs you __________.'],
]));
out.push(table(['Card A – the position', 'Card B – the position'], [
  ['_Time, rather than patience, is what explaining costs._', '_Memory, rather than goodwill, is what unwritten rules rely on._'],
  ['_The absence of a field, not carelessness, loses the promises._', '_A deadline nobody set is a deadline nobody owns._'],
  ['_A letter that cannot be argued with has not been answered._', '_A record with no date cannot be counted._'],
  ['_The explainer learns more than the listener._', '_A short page is read more often than a complete one._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight conclusions and mark each **adds something** or **paragraph one again**. Then the count: on a first run it is about **two in eight** that add anything — and of the six that fail, four will contain the words _in conclusion_ and nothing else.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your conclusion in one of the three working shapes, with the one added thing. Then say which paragraph pays for it, and what it costs you.'));
out.push(p('**b**  Swap. Then each of you read your partner\'s **first and last** sentences aloud, one after the other with nothing in between, and say whether the essay went anywhere.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Four paragraphs, and the fourth is the one almost everybody wastes in exactly the same way. Lubna read hers — in conclusion, a full explanation is better than an assumption — and then read her first paragraph: explaining fully is better than assuming the other person understands. Asked what the reader had gained from paragraph four, she said nothing: she had told them where she started and called it where she finished. So the rule. A conclusion must do two things — follow from the paragraphs, and add one thing that was in none of them. Only one, and not a new argument, because a new argument needs its own evidence; one consequence, one limit, or one question the three paragraphs have made askable. Jad asked how that differs from a new argument, and Ms Huda said the thing you add needs no evidence because the paragraphs have already paid for it. Then Dima asked about "on balance", and the answer is that it commits you to having weighed something, so it is only honest after a concession: concede nothing in paragraph two, write "on balance" in paragraph four, and you have used a weighing word with nothing in the scales. Omar asked whether the examiner reads the last sentence properly, and Ms Huda said they read the first and the last most carefully of all, and read them together, because that pair tells them whether the essay went anywhere — forty words, and the whole of "develops the topic" decided by them. Which is why line four of the plan exists: you write what the conclusion adds before you write paragraph two. Then Rim gave hers. Her paragraph three has the two replies in it; what is not in it is that she will now never know what the other eighty-eight letters would have done, because she did not put a figure in them, and she cannot go back. Ms Huda said that is a conclusion: it follows, it adds something nobody could have said before reading the paragraph, and it costs the writer something._'));
out.push(p('**Listener task:** write your first and last sentences, side by side, and say whether the essay went anywhere.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four conclusions Lubna writes to the same essay. Answer the questions.'));
out.push(model([
  '**FOUR CONCLUSIONS TO ONE ESSAY** · L. Sweidan · 6 October',
  '_The position: a measurement that two people read differently is not a technical fact. The paragraphs established: that Mr Rifai and I read the 1974 detail differently; that the 30 mm is checkable and the drawing is not; and that a discrepancy with nobody in it gets solved rather than settled._',
  '**One — paragraph one again.** _"In conclusion, a measurement two people disagree about is not a technical fact."_ Thirteen words, and the reader has gained nothing at all. This is the version I wrote first and it took forty seconds.',
  '**Two — a summary, which is better and still wastes the paragraph.** _"On balance, then, the discrepancy is a disagreement and not a fault in the drawing."_ It weighs, which is honest because I conceded in paragraph two that Mr Rifai may be right. But it adds nothing, and _on balance_ has been spent on a restatement.',
  '**Three — adding one thing, and this is the one I kept.** _"On balance the 30 mm is a disagreement and not a fault in the drawing; what follows from that is not a better measurement but a third measurer, and the scaffold comes down on 4 October."_ The added thing is the **consequence**: paragraph three showed why solving is the wrong action, and the conclusion names the right one and dates it.',
  '**Four — refusing the question, which I did not dare use.** _"The question is therefore not whether the 1974 detail is as drawn, but whether anybody will measure it before the render goes back."_ It is the strongest of the four and I did not use it, because I am twelve days into a disagreement with a man who has nineteen years on me, and refusing the question in writing is a thing you do from a stronger position than mine.',
  '**What the four of them taught me about time.** The first took forty seconds, the third took about fifteen minutes, and the fifteen minutes were spent working out **which of my three paragraphs had paid for the thing I wanted to add**. That is the whole of the work.',
  '**What I now think the four of them are, as a set.** A ladder, and the rungs are not interchangeable: you cannot write the third without having written the second, and you cannot see what is wrong with the second until the first is on the paper. Four conclusions is not four attempts at one sentence. It is one process with four visible stages.',
  '**And the thing I shall say about the fourth.** It is the best sentence I wrote this week and I am not going to send it. **Knowing which conclusion you have earned is part of the skill, and so is knowing which one you can afford.**',
]));
out.push(item('1', 'Why does she say the second conclusion is better and still wastes the paragraph?'));
out.push(item('2', 'What does the third one add, and which paragraph pays for it?'));
out.push(item('3', 'Why does she not use the fourth, which she says is the strongest?'));
out.push(writers([
  'A page that shows four conclusions to one essay: **the position and what the paragraphs established** → **the restatement, with how fast it came** → **the summary, and why weighing is not adding** → **the one you kept, with the paragraph that pays for it** → **the one you did not dare use** → **what the four taught you about time** → **and the thing about the one you are not sending**.',
  '**Print the restatement and time it.** _Thirteen words, and the reader has gained nothing at all. It took forty seconds._ The forty seconds is the point: the worst conclusion is always the fastest, which is why it survives into the exam.',
  '⚠ **Distinguish weighing from adding, because students think _on balance_ is the work.** _It weighs, which is honest … but it adds nothing, and_ on balance _has been spent on a restatement._ A weighing word on a restatement is worse than no weighing word, because it promises a judgement and delivers a repetition.',
  '**Name the paragraph that pays.** _Paragraph three showed why solving is the wrong action, and the conclusion names the right one._ If no paragraph pays for it, the added thing is a new argument and there is no room for one.',
  '⚠ And say which conclusion you can afford. _It is the best sentence I wrote this week and I am not going to send it._ **Knowing which conclusion you have earned is part of the skill, and so is knowing which one your position allows.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows four conclusions to one essay (80 words or more).'));
out.push(p('_The position: ______________. The paragraphs established: ______________; ______________; and ______________._   **One — paragraph one again.** "______________" ______ words, and the reader has gained ______________. It took ______________.   **Two — a summary.** "______________" It weighs, which is honest because ______________. But it adds ______________.   **Three — adding one thing.** "______________" The added thing is ______________, and paragraph ______ pays for it.   **Four — refusing the question.** "The question is therefore not whether ______________, but whether ______________."   **What the four taught me about time.** ______________.   **And the thing about the one I am not sending.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Four conclusions, in the order written, with the restatement first',
  'Weighing told apart from adding, in one sentence',
  'The paragraph that pays for the added thing, named',
  'One judgement about which conclusion the writer can afford',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read conclusion one and conclusion three, one after the other, and the room says what has been added.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the position and what the paragraphs established, the four conclusions with what is wrong or right about each, what the four taught you about time, and the thing about the one you are not sending.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the restatement printed and timed, weighing told apart from adding, the paying paragraph named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your first sentence and your last sentence, one after the other, with nothing in between.** The room says whether the essay went anywhere, and in about a third of cases it will say no. Then the sentence to leave the cycle on, which is Lubna\'s: **knowing which conclusion you have earned is part of the skill, and so is knowing which one you can afford.**'));
out.push(hw('Write the page (80+ words). Then read the first and last sentences of your 1.7 essay, one after the other, and write in the margin: **went somewhere** or **came back**. Do not change anything.'));

// ===================== 3.6 =====================
out.push(pb());
out.push(h2('3.6  Forty minutes'));
out.push(p('**Function:** writing the full essay to the exam shape, in forty minutes   ·   **Grammar:** 180–220 words · four paragraphs · one conceded point   ·   **Pronunciation:** reading your own essay aloud at speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads a question and its two notes once. You have **four minutes** and you write the **four lines** — the plan and not the essay. Then two students read their four lines aloud and the class says which line is weakest.'));
out.push(board('I will think about it as I write.', 'Line two: concede the time. Limit: four seconds is not what stopped them.'));
out.push(p('**b**  How long should each take? **1** reading the question  **2** the four lines  **3** paragraphs one to three  **4** paragraph four  **5** reading it back'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does Ms Huda divide the forty minutes, and what does she say is the one thing never to do with the last four?   **A** ten minutes a paragraph; never check spelling   **B** four, four, twenty-four, four, four; never use them to add a fifth paragraph   **C** twenty on the plan; never read it back'));
out.push(p('**b**  Listen again. **1** What does Jad find when he counts his essay?   **2** What does Ms Huda say about a 250-word essay?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  Four, four, twenty-four, four, four', [
  ['Ms Huda', 'Forty minutes, and I am going to give you the division I give every class, because the paper is not won by writing better than the person next to you. It is won by **not running out of time in paragraph three**.'],
  ['Omar', 'What is the division?'],
  ['Ms Huda', '**Four** minutes reading the question and underlining the two notes. **Four** on the four lines. **Twenty-four** on paragraphs one to three. **Four** on paragraph four. **Four** reading it back. Forty.'],
  ['Jad', 'Four minutes just reading the question?'],
  ['Ms Huda', 'Four minutes, and most of it on one thing: **which note am I conceding?** A candidate who starts writing before that is decided writes paragraph two twice. ⚠ And underline the two notes on the paper. Not mentally — on the paper, because an essay that omits one of them loses content marks whatever else is right about it.'],
  ['Jad', 'I counted mine from last week. Two hundred and fifty-one words.'],
  ['Ms Huda', 'And what happened at the end of it?'],
  ['Jad', 'The conclusion is one sentence and it is paragraph one again.'],
  ['Ms Huda', 'Which is what always happens. ⚠ **A 250-word essay is not a longer essay; it is an essay with no conclusion.** The band is 180 to 220 and the top of it is a warning and not a target: at 220 you have written forty-five words a paragraph and had time to read it back. At 250 you have taken the conclusion\'s four minutes and spent them in paragraph two.'],
  ['Hiba', 'Is it marked down for length?'],
  ['Ms Huda', 'It is marked down for what the length did to it, which is worse, because the candidate thinks they have been punished for being thorough. Mrs Nasser, the last four minutes. What are they for?'],
  ['Hiba', 'Reading it back.'],
  ['Ms Huda', 'Reading it back and looking for **four** things, in this order: both notes present; a concession with a limit; one example and not three; and the first and last sentences read together. ⚠ Nothing else. Not spelling, not vocabulary, not making it nicer. Four checks, four minutes, and they are the four that carry marks.'],
  ['Nour', 'What if the reading back finds something wrong?'],
  ['Ms Huda', 'Then you make the smallest repair that fixes it. A missing note is one clause. A missing concession is one sentence in front of paragraph two. **Do not rewrite a paragraph in the last four minutes** — you will not finish, and an unfinished repair costs more than the fault did.'],
  ['Adnan', 'And if I have written nine words too many?'],
  ['Ms Huda', 'Leave them. Nine words over is nothing and counting them costs a minute you need. The length matters at the ends: under 160 or over 240 and the examiner notices. Between those, it is the four checks that decide the mark.'],
]));
out.push(sp());
out.push(box('Language box – the forty minutes, and this unit\'s two declared sets', [
  '**The division, and it is the same every time.** **4** reading the question and underlining the two notes · **4** on the four lines · **24** on paragraphs one to three · **4** on paragraph four · **4** reading it back.',
  '**The first four minutes are mostly one question: _which note am I conceding?_** A candidate who starts writing before that is decided writes paragraph two twice. ⚠ Underline both notes **on the paper** — an essay that omits one loses content marks whatever else is right about it.',
  '⚠ **A 250-word essay is not a longer essay; it is an essay with no conclusion.** 180–220, and the top of the band is a warning and not a target: at 220 you have had time to read it back; at 250 you have spent the conclusion\'s four minutes in paragraph two.',
  '**The four checks for the last four minutes, in this order.** **1** Are **both notes** there? **2** Is there a **concession with a limit**? **3** Is there **one** example and not three? **4** Read the **first and last sentences together** — did the essay go anywhere? Nothing else: not spelling, not vocabulary, not making it nicer.',
  '**And the repair rule.** Make the **smallest** repair that fixes it: a missing note is one clause; a missing concession is one sentence in front of paragraph two. **Never rewrite a paragraph in the last four minutes** — an unfinished repair costs more than the fault did.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _set out · put forward · back up · bear out · rule out · stand by · give ground · hold back · follow through · point out · allow for · come round to_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 3.7 draws on this)_: _argue → **argument** · consider → **consideration** · conclude → **conclusion** · assume → **assumption** · object → **objection** · persuade → **persuasion** · relevant → **relevance** · justify → **justification** · concede → **concession**._',
  '**One more use for the four lines, and it is the one students discover in the exam.** If the clock beats you, **the plan is the essay in note form**, and a paragraph written from line four in ninety seconds will always score more than a fourth paragraph that is not there. ⚠ Candidates who lose the conclusion almost never lose it for want of ideas; they lose it because nothing was written down in minute eight.',
  '**And a word about the handwriting, which nobody mentions.** Twenty-four minutes for three paragraphs assumes you can write about nine words a minute without stopping. If you cannot, the remedy is not to write faster but to make line three shorter — one example, named on the plan, so that no decision is left for the writing.',
  '**Pronunciation.** 🔊 **Track 3.12** Reading your own essay back **at speed and under your breath**, which is how the last four minutes are actually spent: the four checks are audible, and the one that is loudest is the concession — _it is true that_ ‖ **_but_** — because a missing _but_ is a missing limit. ⚠ A candidate who reads back silently finds spelling; a candidate who reads back under their breath finds structure.',
  '**Practise:** Four lines in four minutes, then the four checks on a partner\'s essay. **1** explaining fully  **2** written rules  **3** deadlines  **4** records  **5** asking for help',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs **against the clock**. A reads the question and its two notes from the card. B has **four minutes** for the four lines, out loud at the end. A then applies one check only: **which note is being conceded, and is there a limit?** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the question, read once)_ __________. _(notes)_ **1** __________ **2** __________.'],
  ['B', '_(four minutes later)_ Line one __________. Line two __________. Line three __________. Line four __________.'],
  ['A', 'You are conceding __________, and the limit is / is not there because __________.'],
  ['B', 'And the line I am least sure of is __________.'],
]));
out.push(table(['Card A – question and notes', 'Card B – question and notes'], [
  ['_"It is always better to explain fully." Do you agree?_ · time · the person who does not know', '_"Rules at work should always be written down." Do you agree?_ · memory · disagreement'],
  ['_"Deadlines make people work better." Do you agree?_ · pressure · honesty', '_"Everything important should be recorded." Do you agree?_ · effort · what is lost'],
  ['_"It is better to ask than to work it out." Do you agree?_ · speed · confidence', '_"A short document is a better document." Do you agree?_ · the reader · the file'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight sets of four lines and mark which line each pair found weakest. Then the finding: it is **line two** in six or seven of eight — the concession — and it is weakest in the same way every time, by being a courtesy rather than a cost.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Four minutes, four lines, on a question your teacher gives you now. Then read line two aloud and say what it costs you.'));
out.push(p('**b**  Swap plans — not essays. Then each of you say which of your partner\'s four lines will be the hardest to write into fifty-five words, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Forty minutes, and the division Ms Huda gives every class, because the paper is not won by writing better than the person next to you but by not running out of time in paragraph three. Four minutes reading the question and underlining the two notes. Four on the four lines. Twenty-four on paragraphs one to three. Four on paragraph four. Four reading it back. Jad asked whether four minutes is really needed just to read the question, and the answer is that most of it goes on one thing — which note am I conceding? — because a candidate who starts writing before that is decided writes paragraph two twice. And the notes are underlined on the paper and not mentally, because an essay that omits one of them loses content marks whatever else is right about it. Then Jad said he had counted his from last week: two hundred and fifty-one words, with a conclusion of one sentence that is paragraph one again. Which is what always happens. A 250-word essay is not a longer essay; it is an essay with no conclusion. The band is 180 to 220 and the top of it is a warning and not a target: at 220 you have had time to read it back, and at 250 you have taken the conclusion\'s four minutes and spent them in paragraph two. Hiba asked whether it is marked down for length, and Ms Huda said it is marked down for what the length did to it, which is worse, because the candidate thinks they have been punished for being thorough. Then the last four minutes, and the four checks in order: both notes present, a concession with a limit, one example and not three, and the first and last sentences read together. Nothing else — not spelling, not vocabulary, not making it nicer. And the repair rule: make the smallest repair that fixes it, and never rewrite a paragraph in the last four minutes, because an unfinished repair costs more than the fault did. And Adnan asked what to do about being nine words over, and Ms Huda said leave them: nine words over is nothing and counting them costs a minute you need. The length matters at the ends — under a hundred and sixty or over two hundred and forty and the examiner notices — and between those it is the four checks that decide the mark, which is why the last four minutes are spent on the checks and not on the count._'));
out.push(p('**Listener task:** write the division of the forty minutes from memory, and your own line two.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Jad\'s essay, written in forty minutes, with the timings in the margin. Answer the questions.'));
out.push(model([
  '**WRITTEN IN FORTY MINUTES, WITH THE CLOCK** · J. Attar · 7 October · **207 words**',
  '_The question: "It is always better to explain something fully than to assume that the other person already understands." Do you agree? Notes: time · the person who does not know · your own idea._',
  '**Paragraph one** _(wrote it at 08.08, four minutes in)_ _Time, rather than patience, is what a full explanation actually costs — and the cost falls on both people, not only on the one doing the explaining. Whether it is worth paying depends less on the subject than on who finds out first._',
  '**Paragraph two** _(08.12)_ _It is true that explaining fully takes longer, and on a busy day that is a real cost rather than a theoretical one; four seconds on a form, repeated ninety times a month, is an hour. But length is not what stops people explaining. Of the four sites in my own work that never adopted a new sheet, two had simply never been sent one, and no amount of time would have helped them._',
  '**Paragraph three** _(08.21)_ _The second difficulty is more serious: the person who does not know usually cannot say so. Take the case of a newcomer who was given eight written rules and could act on four. She did not ask about the other four, because asking would have meant admitting she had not understood something that everybody else evidently had._',
  '**Paragraph four** _(08.30, with four minutes left)_ _A third consideration, which is rarely raised, is that the person doing the explaining is the one who finds out what they did not know. On balance the time is worth spending — and the one who gains most is not the person who was told, but the person who had to find the words._',
  '**What the clock told me that I had not expected.** Paragraph three took nine minutes and the other two took four and five. It is the paragraph with the note I am **holding**, and I had assumed the conceded one would be the slow one. It was not: conceding is quick once you have decided which, and defending is slow because the example has to be chosen.',
  '**What the reading-back found at 08.34, and what I did about it.** Both notes present. Concession with a limit, yes. One example, yes — in paragraph three. **But paragraph two had no example at all**, so I added _four seconds on a form, repeated ninety times a month, is an hour_, which is one clause and took about forty seconds. And the first and last sentences read together go somewhere: _who finds out first_ to _the person who had to find the words_.',
]));
out.push(item('1', 'What did the reading-back find, and what did he do about it?'));
out.push(item('2', 'Which note does he concede, and what limit does he put on it?'));
out.push(item('3', 'How do his first and last sentences go together?'));
out.push(writers([
  'An essay to the exam shape: **paragraph one, about forty words — the position in the _X rather than Y_ shape** → **paragraph two, about fifty-five — the conceded note with its limit and one example** → **paragraph three, about fifty-five — the note you hold, with one example** → **paragraph four, about fifty-five — your third point and the conclusion that adds one thing**.',
  '**Put the clock in the margin while you practise, and take it out in the exam.** _08.08 · 08.12 · 08.21 · 08.30 · 08.34._ A student who has never seen their own timings cannot tell whether they are slow at planning or slow at paragraph three, and those need different remedies.',
  '⚠ **An example in every body paragraph, including the conceded one.** Jad\'s reading-back found paragraph two had none, and that is the commonest gap: a concession feels like a courtesy, so it gets no evidence — and a conceded point with no figure reads as a thing the writer has not checked either.',
  '**Keep the repair to one clause.** _Four seconds on a form, repeated ninety times a month, is an hour_ — forty seconds of writing, inside an existing sentence. That is what the last four minutes are for.',
  '⚠ And test the pair before you stop. _Who finds out first_ → _the person who had to find the words_. If the first and last sentences are the same sentence in other words, the conclusion is still paragraph one, however good the middle is.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the essay to the shape (80 words or more for now; the full 180–220 comes in Stage 7).'));
out.push(p('_The question: ______________. Notes: ______________ · ______________ · your own idea._   **One.** ______________, rather than ______________, is what ______________. ______________.   **Two.** It is true that ______________, and ______________. But ______________. Take the case of ______________.   **Three.** The second difficulty is ______________: ______________. One instance is enough: ______________.   **Four.** A third consideration, which is rarely raised, is ______________. On balance ______________ — and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both given notes present, and both underlined on the question',
  'A concession with a limit, and an example inside the conceded paragraph',
  'One example per body paragraph, and not two',
  'First and last sentences read together — did it go anywhere?',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read paragraph two only, and the room applies check two.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full essay, **180–220 words**, four paragraphs, to the shape, with the timings in the margin. Then spend the last four minutes on the four checks and write down what they found.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both notes present, a concession with a limit and an example, the first and last sentences read together.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say what your reading-back found, and nothing else.** Collect the faults on the board as four tallies — missing note, missing limit, three examples, conclusion came back. Then the figure to leave the cycle on: in a first class the commonest fault is **the missing example inside the conceded paragraph**, and almost nobody predicts it.'));
out.push(hw('Write the essay (180–220 words) in **forty minutes, with a clock**, and write the five timings in the margin. Then do the four checks and write down what they found, in four lines.'));

// ===================== 3.7 =====================
out.push(pb());
out.push(h2('3.7  Review & Mediate: Marking the essay you wrote in 1.7'));
out.push(p('**Function:** marking somebody else\'s essay against the four band descriptors   ·   **Recycling:** Unit 3   ·   **Exam practice:** B2 First Reading and Use of English Part 1 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Time, rather than patience, are what explaining costs.  **2** A third consideration, which is rare raised, is who finds out.  **3** Make the case of the four sites that were never sent a sheet.  **4** One instance is enough to showing that the figure was there.  **5** The question is therefore not whether the rule is right, and whether anybody has read it.  **6** His concede that the figure was wrong was the only objection.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four band descriptors, in the words the class put them in.'));
out.push(box(null, [
  '**THE FOUR, IN PLAIN WORDS** _(agreed by the class, 8 October)_',
  '**1 Content** — _Are both given notes there, and is there a third thing of your own?_ Nothing about quality: a note that is missing is missing, and no amount of good writing covers it.',
  '**2 Communicative achievement** — _Does it read like an essay, and does it hold one position throughout?_ This is where _on balance_ with nothing in the scales is caught.',
  '**3 Organisation** — _Four paragraphs, in the right order, and does the last one add something?_ This is where a conclusion that is paragraph one again loses the mark.',
  '**4 Language** — _Range and accuracy, and in that order._ Eleven correct simple sentences score below eight sentences of three shapes with two errors in them — which is _range not demonstrated_ from Unit 1, arriving in a mark scheme.',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. Which descriptor does the class find hardest to mark, and what happens when they read their own 1.7 essays?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  The essays from the first evening', [
  ['Ms Huda', 'Four descriptors, and you are going to mark each other before you mark yourselves. Which of the four is hardest?'],
  ['Dima', 'The second. Content I can count. Organisation I can count. Language I can see. But whether it _reads like an essay_ is an opinion.'],
  ['Ms Huda', 'It is the hardest and it is not an opinion, and here is the question that makes it countable: **does the writer hold the same position in paragraph four as in paragraph one, and did they get there by weighing rather than by repeating?** A writer who concedes nothing and then writes _on balance_ has failed descriptor two, and you can point at the word.'],
  ['Omar', 'So descriptor two is really about the concession.'],
  ['Ms Huda', 'At B2 it very largely is. Now take out what you wrote on the first evening.'],
  ['Jad', 'Mine is dated the eighth of September and it is one paragraph.'],
  ['Hiba', 'Mine has four paragraphs and no position. I have written _there are advantages and disadvantages_ in the first line and again in the last.'],
  ['Nour', 'Mine concedes nothing at all. I did not know there was anything to concede.'],
  ['Mazen', 'Mine has three examples in one paragraph and none in the other two.'],
  ['Ms Huda', 'Mark it. Honestly, on the four, and then say one thing it does well, because there will be one.'],
  ['Lubna', 'Content: one note of the two, so it fails. Organisation: three paragraphs. Language: accurate throughout, and all of one shape. And the thing it does well — it has a figure in it. Thirty millimetres, in the second line, on the eighth of September, before anybody had taught me anything.'],
  ['Ms Huda', '⚠ **Which is what I want this cycle to leave you with, and it is not the failure.** Every one of those essays has one thing in it that four weeks of teaching did not put there. Mr Attar\'s is one paragraph and the last sentence of it is the only genuinely third point in the room. Mrs Nasser\'s concedes nothing and is the best-organised page of the twelve.'],
  ['Adnan', 'Mine is four lines long and I remember writing it. I did not know what an essay was.'],
  ['Ms Huda', 'And now you do, and you have the four lines. ⚠ So the honest arithmetic of the unit: **what you have gained in four weeks is a shape and a concession.** You have not gained a position — Miss Sweidan had one on the eighth of September and did not know it was one. **The shape is teachable in four weeks. Having something to say was already there.**'],
  ['Dima', 'That is more encouraging than it sounds.'],
  ['Ms Huda', 'It is meant to be, and it is also a warning: a candidate who learns the shape and brings nothing to put in it writes a perfectly organised essay with nothing in it, and that is descriptor one and descriptor two gone. **Keep the 1.7 essay. It is the only evidence you will ever have of what you brought.**'],
]));
out.push(sp());
out.push(box('Language box – the four descriptors, and what each is really asking', [
  '**1 Content — a count, not a judgement.** Both given notes present? A third thing of your own? ⚠ A missing note cannot be covered by good writing, and it is the commonest single loss in the paper.',
  '**2 Communicative achievement — made countable.** _Does the writer hold the same position in paragraph four as in paragraph one, and did they get there by **weighing** rather than by **repeating**?_ At B2 this is very largely **the concession**: no concession and an _on balance_ is a failure you can point at.',
  '**3 Organisation — four paragraphs in the right order, and the last one adds something.** This is where a conclusion that is paragraph one again loses the mark, and it is the cheapest mark in the paper to keep.',
  '**4 Language — range and accuracy, in that order.** Eleven correct simple sentences score **below** eight sentences of three shapes with two errors in them. ⚠ That is _range not demonstrated_ from Unit 1 appearing in a mark scheme, and it is the single most counter-intuitive fact about the paper.',
  '**How to mark somebody else\'s, in four minutes.** Count the notes _(1)_. Find the concession and the _on balance_ and see whether they match _(2)_. Count the paragraphs and read the first and last together _(3)_. Count the **shapes**, not the errors _(4)_.',
  '⚠ **And the rule for marking a classmate: name one thing it does well, and name it last.** Not kindness — accuracy. Every essay in a B2 class has something in it that the teaching did not put there, and a mark sheet that finds only faults has missed the part that cannot be taught.',
  '**The arithmetic of this unit, stated plainly.** What four weeks have given you is **a shape and a concession**. What you had already is **something to say**. A candidate who learns the shape and brings nothing to put in it writes a perfectly organised essay with nothing in it — descriptors one and two both gone.',
  '**What to do with your own 1.7 essay after you have marked it, and it is one thing.** Keep it. Do not improve it and do not throw it away. It is the only evidence you will ever have of **what you brought** as opposed to what you were taught, and in Unit 12 you will be asked for it again.',
  '**And one warning about marking a classmate, because every class makes this mistake once.** You are marking the **essay** against four descriptors and not the writer against each other. An essay that fails content and concedes well is more use to its author than one that passes content and weighs nothing, and a mark sheet that does not say so has graded a performance instead of describing a page.',
  '**Pronunciation.** 🔊 **Track 3.14** Reading a mark aloud to the person who wrote it: **the descriptor flat, the finding slower, the one good thing last and unhurried** — _content ‖ one note of the two ‖ **and it has a figure in the second line**_. ⚠ Run the good thing in first and it sounds like a preamble; put it last and it is the sentence they remember.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the essays below and does **not** show it. A reads it once, then marks it aloud on the four descriptors. B must say, from the reading alone, **which descriptor is the weakest** and **what the one good thing is**. Change roles with the other essay.'));
out.push(table(['Essay A – 186 words, by a candidate who has learnt the shape', 'Essay B – 214 words, by a candidate who has not'], [
  ['_Four paragraphs. Position in the X rather than Y shape. Both notes present._', '_Two paragraphs. No position: "there are advantages and disadvantages" twice._'],
  ['_Paragraph two: "I understand that views differ, but…" — a courtesy, not a concession._', '_Paragraph one concedes a real thing: "their figure was right and mine was out by nine."_'],
  ['_Three examples in paragraph three, none of them checkable._', '_One example, with a date and a count, which could have gone the other way._'],
  ['_Conclusion: "In conclusion, it is better to explain fully." Paragraph one again._', '_No conclusion at all; it stops in the middle of a sentence about the figure._'],
  ['_Language: eleven sentences, all of one shape, no errors._', '_Language: six sentences, four shapes, five errors._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each essay, the weakest descriptor and the one good thing. On **A** the weakest is **2** — the shape is there and nothing has been weighed. On **B** it is **3**, and the good thing is a concession with an example that could have failed. ⚠ **A marks higher on three descriptors and B is the essay that will improve**, and saying why is the stage.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Swap your **3.6** essay with your partner and mark it on the four descriptors, in four minutes, with the one good thing last. Then take out your **1.7** essay, mark it on the same four, and say one thing it does that your 3.6 essay does not.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you found in the two essays, four weeks apart:  _Four descriptors, and the class marked each other before marking themselves. Dima said the second is the hardest: content she can count, organisation she can count, language she can see, but whether it reads like an essay is an opinion. Ms Huda said it is the hardest and it is not an opinion, and gave the question that makes it countable — does the writer hold the same position in paragraph four as in paragraph one, and did they get there by weighing rather than by repeating? A writer who concedes nothing and then writes "on balance" has failed descriptor two, and you can point at the word. Omar said so descriptor two is really about the concession, and at B2 it very largely is. Then the first-evening essays came out. Jad\'s is dated the eighth of September and is one paragraph. Hiba\'s has four paragraphs and no position — "there are advantages and disadvantages" in the first line and again in the last. Nour\'s concedes nothing at all, and she said she did not know there was anything to concede. Mazen\'s has three examples in one paragraph and none in the other two. So they marked them honestly on the four, and then said one thing each did well, because there always is one. Lubna\'s: content, one note of the two, so it fails; organisation, three paragraphs; language, accurate throughout and all of one shape. And the thing it does well — it has a figure in it. Thirty millimetres, in the second line, on the eighth of September, before anybody had taught her anything. Which is what Ms Huda wanted the cycle to leave them with, and it is not the failure: every one of those essays has one thing in it that four weeks of teaching did not put there. Jad\'s is one paragraph and the last sentence of it is the only genuinely third point in the room. Hiba\'s concedes nothing and is the best-organised page of the twelve. Adnan said his is four lines long and that he did not know what an essay was. And now he does, and he has the four lines. So the honest arithmetic of the unit: what they have gained in four weeks is a shape and a concession. What they have not gained is a position — Lubna had one on the eighth of September and did not know it was one. The shape is teachable in four weeks; having something to say was already there. And the warning that goes with it: a candidate who learns the shape and brings nothing to put in it writes a perfectly organised essay with nothing in it, which is descriptors one and two gone._'));
out.push(p('**Listener task:** write the one thing your 1.7 essay does that your 3.6 essay does not.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**WHAT A MARKER IS LOOKING FOR**',
  'Most candidates who write a two-hundred-word argument **(1)** ______ the same mistake: they concede nothing at all. It is an understandable error, since conceding feels like losing ground, and yet a reader **(2)** ______ far more attention to a writer who has given something away than to one who has not. It is worth **(3)** ______ in mind that two hundred words is not enough space to arrive at an opinion; it is only enough to hold one, and a marker is looking for evidence that the writer has **(4)** ______ the question rather than simply answered it.',
  'The evidence is usually an example. One well-chosen instance will bear out a point better than three vague ones, because three **(5)** ______ the reader that the writer could not decide which was strongest. A conclusion, similarly, should take the **(6)** ______ one step beyond the paragraphs in front of it, and no further. What it may not do is repeat the opening.',
  'None of this is new. Nobody has ever **(7)** ______ to it, and nobody much does it either. On **(8)** ______, the candidates who do it are not the ones with the best English.',
  '**1** A do   B make   C take   D have      **2** A gives   B puts   C pays   D takes',
  '**3** A holding   B carrying   C having   D bearing      **4** A weighed   B measured   C counted   D valued',
  '**5** A say   B speak   C tell   D talk      **6** A arguing   B argument   C argue   D argued',
  '**7** A argued   B opposed   C refused   D objected      **8** A balance   B average   C whole   D total',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mark sheet for your partner\'s essay (80 words or more).'));
out.push(p('**MARKED FOR ______________** · ______________   **1 Content.** Note one: ______________. Note two: ______________. Own idea: ______________. → ______________.   **2 Communicative achievement.** The position in paragraph one: ______________. In paragraph four: ______________. Concession: ______________. _On balance_: ______________. → ______________.   **3 Organisation.** ______ paragraphs. First and last read together: ______________. → ______________.   **4 Language.** ______ shapes, ______ errors. → ______________.   **And the one thing it does well.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Content marked by counting, not by judging',
  'The concession and the _on balance_ checked against each other',
  'First and last sentences quoted side by side',
  'Shapes counted before errors — and one good thing, last',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **This is the same task you were given in 1.7, and you have the 1.7 essay in front of you.** Do not look at it until you have finished. Then put the two side by side and keep both.',
  'In your English class you have been talking about explaining things at work. Your teacher has asked you to write an essay.',
  '_"It is always better to explain something fully than to assume that the other person already understands." Do you agree?_',
  'Write an essay using **all the notes** and giving **reasons** for your point of view. Write **180–220 words**.',
  'Notes — write about: **1** time   **2** the person who does not know   **3** ______________ _(your own idea)_',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Time, rather than patience, ___ what full explanation costs.   a) is   b) are   c) being',
  '2  ___ that it takes longer, four seconds is not what stopped them.   a) Truly it is   b) It is truly   c) It is true',
  '3  A third consideration, which is ___ raised, is who finds out first.   a) rare   b) rarely   c) rarer',
  '4  ___ the case of the four sites that were never sent a sheet.   a) Take   b) Make   c) Give',
  '5  One instance is enough to ___ that the figure was available all along.   a) showing   b) show   c) be shown',
  '6  The question is therefore not whether the rule is right, ___ whether anybody has read it.   a) and   b) or   c) but',
  '7  His ___ that the figure was wrong was the only objection anybody made.   a) concede   b) concession   c) conceding',
  '8  On ___, the cost falls on the person who was not in the room.   a) balance   b) the balance   c) balancing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 3.15** You will hear five people saying what they learnt from writing an essay. For questions **1–5**, choose from the list (**A–H**) what each speaker says. There are **three extra letters** you will not need.'));
[
  '**A** I found that my strongest sentence was one I decided not to use.',
  '**B** I discovered that my conclusion was my opening sentence again.',
  '**C** I realised that the point I would not give up was the one I had not examined.',
  '**D** I learnt that my best example was the smallest one I had.',
  '**E** I found that I had left one of the two given notes out altogether.',
  '**F** I discovered that the faster I wrote, the emptier the sentence was.',
  '**G** I realised that nobody had ever asked me for an idea of my own before.',
  '**H** I found that I had run out of time before the last paragraph.',
].forEach(t => out.push(p(t, { indent: 200, after: 30 })));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 60 }));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['1  Man', 'I had two points against me and I spent nine drafts refusing both of them. One of them was true. I did accept the four units in January, having said twice in writing that I was not asking for a replacement, and the inconsistency is real. Refusing to write that down was the reason the whole thing took fourteen months, and it turns out it was the only sentence worth writing.'],
  ['2  Woman', 'I wrote four endings to the same page. The fourth one refuses the question as it was asked and replaces it, and it is far better than the one I used. I am not going to use it. I am twelve days into a disagreement with a man who has nineteen years on me, and that sentence needs a stronger position than the one I am in.'],
  ['3  Woman', 'For three years I used the same piece of evidence: nobody has ever argued with the template. Ninety letters, no replies. It turns out that proves nothing, because the template cannot be argued with. What counts is two replies in a fortnight to the two letters where I put a figure in — and two is a smaller number than ninety by every measure except the one that matters.'],
  ['4  Man', 'Two hundred and fifty-one words, which I had thought was thorough. By the time I reached the fourth paragraph I had four minutes left and one sentence in me, and the paragraph shows it. I had not run out of things to say. I had run out of minutes, in paragraph two, and I did not know it until I counted.'],
  ['5  Man', 'Nineteen years of drafting paragraphs, and I have never once been asked what I think about anything. The form does not have a space for it. The paper has a blank line that says _your own idea_, and the first time I saw it I could not think of a single thing — and then I thought of four, and all four were things I have known for about a decade.'],
]));
out.push(p('**C  Writing.** Write the essay (180–220 words), four paragraphs, to the shape, in **forty minutes with a clock**, and write the five timings in the margin.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write one sentence somebody could disagree with and be wrong about',
  '☐ use the _X, rather than Y, is what…_ shape and put the contrast in the grammar',
  '☐ write the four lines of the plan in four minutes',
  '☐ concede one of the two given points and put a limit on it',
  '☐ add a third point the examiner could not have predicted, and say why nobody raises it',
  '☐ support a point with **one** example that could have gone the other way',
  '☐ write a conclusion that adds one thing and is not paragraph one again',
  '☐ mark an essay on the four descriptors, counting rather than judging',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 4 – SPECULATING AT RANGE', [
  'Unit 3 was about holding a position. **Unit 4** is about saying how sure you are — in **nine steps instead of three** — and about the difference between what you know and what you have worked out.',
  '**4.3 teaches B2 Speaking Part 2**, the pair of photographs, and it is the first time this course has asked you to speak for a full minute without being interrupted. **4.4** is the thirty-second response to somebody else\'s pair, which is the part candidates lose marks on without ever being told why.',
  '⚠ **Bring the paragraph you rewrote in 2.7** — the one you rewrote for the person it was about. **4.6** separates what you know from what you infer, and that paragraph is the first place most of you will find you have been mixing the two.',
  '**And bring two photographs** — on a telephone is fine — of **the same thing at two different times**: a form before and after a change, a room, a shelf, a street. 4.3 runs on your own pairs and not on mine.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
