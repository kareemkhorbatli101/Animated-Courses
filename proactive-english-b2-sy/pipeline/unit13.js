// Proactive English B2 · Syria Edition · Book 2 · Unit 13 — Student's Book
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

out.push(h1('Unit 13  Interviews at B2'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'This is the first unit of Book 2 and it is about **being asked questions by people who will decide something about you.** Every cycle is an answer with a shape, and the shape is the one the whole of Book 1 was building: **say the thing that can be checked, and put the figure beside it.**',
  '**13.1** answers a competency question in **four sentences**.   **13.2** keeps the narrative tenses straight at speaking speed.   **13.3** answers the question you were **not** asked, and says that you are doing so.   **13.4** asks the panel a question that changes their mind about you.   **13.5** handles the question about money in **one** sentence.   **13.6** writes the four competency answers out, eighty words each.   **13.7** explains a job description to somebody who is not sure they can do it.',
  '**Exam practice in 13.7:** B2 First **Reading and Use of English Part 6** (gapped text), **Writing Part 1** (the essay) and **Listening Part 1** (eight short extracts).',
  '⚠ **Bring two things to the first lesson.** **One:** a job description — your own, somebody else\'s, or one you have been sent. **Two:** one occasion at work this year when you did something that did not work, **with the figure.** 13.1 runs on the second of these, and **the answers that fail in this unit all fail in the same place: the fourth sentence.**',
  '**And one thing that is not new.** The peer-review slip stays at band 2 for the whole of Book 2: **the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.** It changed once, in Unit 7, and it will not change again.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));
out.push(sp());
out.push(box('Welcome back — the second year', [
  '**Class 5A, Room 14, September.** Mondays and Thursdays, as for the last two years. **Twelve of you were here in June and eleven are here now.**',
  '**Mrs Mansour is not coming back, and the reason is the subject of this unit.** She was appointed in August to run the afternoon analyser work at her own hospital — a post that did not exist in March — and it takes two evenings a week. ⚠ **She was interviewed for it on the strength of a page she wrote in B1 Unit 23.6**, under her own name, about eighteen hours of one night in October. **Her letter is read aloud in 13.1 and it is about the four sentences**, which is where this unit starts.',
  '**Nothing else changes.** The cycle is the same seven; the bands are the same; the slip is the same. **What changes is the stakes of the writing**: from Unit 14 on, every document in this book is one that somebody else has to act on, negotiate against, build to, or refuse.',
  '⚠ **And one date to put in your diary now.** **In 24.6 you will open the letter you sealed at the end of B1**, two years ago, and you will write one to your C1 self. **If you cannot find yours, say so in September and not in June** — Ms Huda has the four that were left in the room.',
], C.lyellow, C.orange));

// ===================== 13.1 =====================
out.push(pb());
out.push(h2('13.1  Four sentences'));
out.push(p('**Function:** answering a competency question in four sentences   ·   **Grammar:** situation · action · result · and what you would change   ·   **Pronunciation:** the full stop after the fourth sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one occasion this year when something you did at work did not work**, in one sentence, with the figure. ⚠ **Nobody explains yet.** Your teacher writes the eleven on the board and counts how many contain a number.'));
out.push(board('It went badly and we learned a lot from it.', 'Nine of the forty went out with the paperwork incomplete.'));
out.push(p('**b**  Which answer could a panel write down? **1** _I am a very organised person._  **2** _I rewrote the handover sheet in March and the admissions it predicts have been right eleven times in fourteen._  **3** _I always try my best in difficult situations._  **4** _We had a problem with communication._  **5** _I asked for the code in February and in July, was refused twice, and got it in twelve days the third time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the four sentences, and which one does Ms Huda say almost everybody leaves out?   **A** situation, action, result, and **what you would change** — and the fourth is the one left out   **B** greeting, situation, result, thanks — and the first is left out   **C** problem, feeling, action, result — and the second is left out'));
out.push(p('**b**  Listen again. **1** What does Mrs Mansour\'s letter say the panel asked her about?   **2** What does Ms Huda say the fourth sentence is really being tested for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  The fourth sentence', [
  ['Ms Huda', 'Before anything else, a letter, and it is the only one I shall read this year. _"They asked me about a night when the second analyser was down for eighteen hours. I had the page I wrote about it, so I had the figures, and I got through the first three sentences without thinking. Then the chairman asked what I would do differently and I said nothing — I said I thought we had handled it well. I got the post, and I have thought about that answer for three weeks. **It was the only dishonest thing I said in forty minutes.**"_ That is Yara Mansour, who is not with us this year.'],
  ['Omar', 'She got the post, though.'],
  ['Ms Huda', '**She did, and she is still thinking about it in August, which is the interesting part.** ⚠ **A competency answer is four sentences.** **One: the situation, with a figure.** **Two: what you did.** **Three: what happened, with a figure.** **Four: what you would change.**'],
  ['Dima', 'And the fourth is the one people leave out.'],
  ['Ms Huda', '**Almost everybody leaves it out, and the ones who do not leave it out answer it with _nothing_.** ⚠ **That is worse**, because _nothing_ is an answer and it is the wrong one.'],
  ['Adnan', 'What is the fourth sentence testing? It is not the thing that went wrong — they have already heard that.'],
  ['Ms Huda', '**It is testing whether you can be told anything.** ⚠ **A person who would change nothing about their best piece of work cannot be managed, trained or corrected** — **and every panel in the world knows it, which is why the question is always asked and never explained.**'],
  ['Bassel', 'And if the thing genuinely went well?'],
  ['Ms Huda', '**Mr Tahhan, it went well and you would still do one thing differently, and you know what it is.** ⚠ **Say the smallest true one.** _I would have written the exclusion down before we started, not after._ **A small true change beats a large invented one**, and a panel can tell the difference in about four words.'],
  ['Bassel', 'Mine is that I agreed the order before I had read the conditions page.'],
  ['Ms Huda', '**That is the fourth sentence, and it took you nine words.** **Now the other three.** ⚠ **The commonest failure is not the fourth sentence at all** — **it is that sentences one and two have no figure in them**, so the panel has nothing to write down.'],
  ['Rim', 'How long should the whole thing be?'],
  ['Ms Huda', '**Forty seconds, and the fourth sentence is about eight of them.** ⚠ **An answer over a minute and a half has become a story**, and a panel listening to a story stops writing. **Watch the pens: when the pens stop, you have stopped being assessed and started being endured.**'],
  ['Mazen', 'And if they ask a second question about the same thing?'],
  ['Ms Huda', '**Then the four sentences did their work.** ⚠ **A follow-up question is the best result in an interview**, and an answer that invites one is better than an answer that closes the subject. **Sentence four is what invites it**, because it is the only one of the four that leaves something open.'],
  ['Jad', 'So the shape is the point, not the story.'],
  ['Ms Huda', '🔊 **The shape is the point, and the full stop after the fourth sentence is part of the shape.** ⚠ **Stop.** **Do not add a fifth sentence to fill the silence** — the silence is the panel writing, **and a candidate who talks through it has taken away the only thing they came to produce.**'],
]));
out.push(sp());
out.push(box('Language box – the four-sentence answer', [
  '**Four sentences, in this order, in about forty seconds.** **1 The situation, with a figure.** _Nine of our forty consignments left with the paperwork incomplete._ **2 What you did.** _I wrote to the distributor conceding our own fault in the same sentence as the ask._ **3 What happened, with a figure.** _The code was on every slip twelve days later._ ⚠ **4 What you would change.** _I would have conceded it in February, not in the third letter._',
  '⚠ **The fourth sentence is the one almost everybody leaves out**, and the ones who do not leave it out answer it with **_nothing_** — **which is worse, because _nothing_ is an answer and it is the wrong one.**',
  '**What the fourth sentence is testing, and it is not the mistake.** ⚠ **It is testing whether you can be told anything.** **A person who would change nothing about their best piece of work cannot be managed, trained or corrected** — **and every panel knows it, which is why the question is always asked and never explained.**',
  '**And if it genuinely went well, say the smallest true change.** _I would have written the exclusion down before we started, not after._ ⚠ **A small true change beats a large invented one**, and a panel can tell the difference in about four words.',
  '**The commonest failure is not the fourth sentence.** ⚠ **It is that sentences one and two have no figure in them**, so the panel has nothing to write down. **Count the figures in your own answer before you worry about anything else: two is the minimum and three is better.**',
  '**Length.** **Forty seconds**, of which the fourth sentence is about eight. ⚠ **An answer over a minute and a half has become a story, and a panel listening to a story stops writing.** **Watch the pens.**',
  '**A follow-up question is the best result in an interview**, and sentence four is what invites one: ⚠ **it is the only one of the four that leaves something open.** **An answer that closes the subject has closed it.**',
  '**Pronunciation.** 🔊 **Track 13.2** **The full stop after the fourth sentence is part of the shape. Stop.** ⚠ **Do not add a fifth sentence to fill the silence** — the silence is the panel writing, **and a candidate who talks through it has taken away the only thing they came to produce.**',
  '**Practise:** Give the four sentences in forty seconds. **1** something that worked  **2** something that did not  **3** something that worked for the wrong reason  **4** one with three figures in it  **5** one where the fourth sentence is nine words',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a row from the card and gives the four sentences. B holds a pen and **writes down every figure A says** — nothing else. ⚠ **At the end B reads back what is on the paper.** **Two rows on each card produce an empty page**, and B must say which and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(situation, with a figure)_ __________. _(what I did)_ __________. _(what happened, with a figure)_ __________. _(what I would change)_ __________.'],
  ['B', '_(reads back the figures)_ __________.'],
  ['B', 'Figures: ______. Fourth sentence: **present / missing / _nothing_**.'],
]));
out.push(table(['Card A – tell me about a time when…', 'Card B – tell me about a time when…'], [
  ['_…you changed somebody\'s mind in writing._', '_…you had to refuse something._'],
  ['_⚠ …you worked well in a team._', '_⚠ …you showed initiative._'],
  ['_…you were wrong about a figure._', '_…a document you wrote was acted on._'],
  ['_⚠ …you handled pressure._', '_⚠ …you went beyond what was asked._'],
  ['_…you asked for something twice and got it the third time._', '_…you found a fault in your own work._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the figures from each of the ten answers, and whether the fourth sentence was present, missing or _nothing_. Then the count: **the four rows marked ⚠ produced no figures at all**, and all four are questions phrased as qualities rather than as occasions. ⚠ **That is the finding: a question with no occasion in it invites an answer with no figure in it** — and the candidate has to supply the occasion.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own occasion from Stage 1 and write the four sentences out in full. ⚠ **Underline every figure.** **If there are fewer than two, the first two sentences are not finished** — go back to them before you touch the fourth.'));
out.push(p('**b**  Swap. Your partner reads only your fourth sentence aloud and says what it tells them about you as a colleague. ⚠ Then the hard one: **if your fourth sentence is _nothing_, your partner writes one for you**, and you say whether it is true.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda read the one letter of the year, from Yara Mansour, who is not with the class this year. The panel asked her about a night when the second analyser was down for eighteen hours; she had the page she wrote about it, so she had the figures, and she got through the first three sentences without thinking. Then the chairman asked what she would do differently and she said nothing — she said she thought they had handled it well. She got the post, and she has thought about that answer for three weeks, and she calls it the only dishonest thing she said in forty minutes. Omar said she got the post though, and she did, and she is still thinking about it in August, which is the interesting part. So: a competency answer is four sentences. The situation with a figure, what you did, what happened with a figure, and what you would change. Dima said the fourth is the one people leave out, and almost everybody does — and the ones who do not leave it out answer it with nothing, which is worse, because nothing is an answer and it is the wrong one. Adnan asked what the fourth sentence is testing, since the panel has already heard the thing that went wrong, and it is testing whether you can be told anything: a person who would change nothing about their best piece of work cannot be managed, trained or corrected, and every panel knows it, which is why the question is always asked and never explained. Bassel asked what to do if the thing genuinely went well, and the answer is to say the smallest true change — a small true one beats a large invented one, and a panel can tell the difference in about four words. His own was that he agreed the order before he had read the conditions page, which took nine words. And Rim asked about length: forty seconds, of which the fourth sentence is about eight. Mazen asked what happens if they ask a second question about the same thing, and then the four sentences did their work: a follow-up question is the best result in an interview. Sentence four is what invites it, because it is the only one of the four that leaves something open. And Jad said so the shape is the point and not the story, which it is — and the full stop after the fourth sentence is part of the shape. Stop. Do not add a fifth sentence to fill the silence, because the silence is the panel writing, and a candidate who talks through it has taken away the only thing they came to produce._'));
out.push(p('**Listener task:** write your partner\'s fourth sentence and the number of figures in their first two.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four answers Bassel writes out before his interview. Answer the questions.'));
out.push(model([
  '**FOUR ANSWERS, WRITTEN OUT** · B. Tahhan · 14 September · _for myself, not to be read aloud_',
  '**Why I am writing these down at all.** ⚠ **Not to learn them.** An answer learned by heart arrives in the room at the wrong speed and the panel hears the rehearsal. **I am writing them down because writing is where I find out that sentence one has no figure in it**, and I would rather find that out at a table than in a chair.',
  '**1 · A time when a document I wrote was acted on.** We print to order for a ministry contract: **fourteen people, two machines, nineteen years.** The conditions page ran to **eleven clauses** and the client had crossed out **nine** of them. I wrote one page setting out what each crossing-out removed, in their own numbering, with the cost of each against it. **Seven of the nine were put back inside a fortnight**, and the two that were not are the two I had costed at under ten thousand pounds. ⚠ **What I would change: I would have sent it before I signed, not after.**',
  '**2 · A time when I was wrong about a figure.** I told the client the older machine could carry **a third** of the order. It carried **about a fifth**, measured over six weeks, and I had used a figure from 2019 without saying it was from 2019. **The schedule slipped eleven days.** ⚠ **What I would change: I would put the year beside every figure I quote from memory, which costs four words.**',
  '**3 · A time when I refused something.** The client asked for a second colour at the original price. I said no in one sentence and gave the reason once — **a second colour is a second pass and a second pass is two days** — and then said what I could do instead, at what cost. **They took the alternative.** ⚠ **What I would change: I gave the reason twice in the first draft, and the second time weakened it.**',
  '**4 · A time when I found a fault in my own work.** The exclusion clause I wrote said _standard stock_ and did not define it. **A reader could have read it four ways and one of the four would have cost us about four hundred thousand pounds.** Nobody read it that way, which is luck and not a defence. ⚠ **What I would change: I would have had somebody who wanted to disagree with me read it, which is what I do now with everything over one page.**',
  '**And the thing all four have in common, which I did not see until they were on one sheet.** ⚠ **Every one of my fourth sentences is about doing something earlier.** **That is either a real pattern or a lazy one, and I would rather the panel found it than that I pretended it was not there.**',
]));
out.push(item('1', 'Why does he say he is writing the answers down, and why not to learn them?'));
out.push(item('2', 'What was wrong with the figure in the second answer, and what would he change?'));
out.push(item('3', 'What do all four of his fourth sentences have in common, and what does he say about that?'));
out.push(writers([
  'Four written answers, eighty words each: **a line saying why you are writing them** → **four answers, each one situation with a figure · action · result with a figure · what you would change** → **and a last line naming anything the four have in common.**',
  '⚠ **Write them to find the fault, not to learn the words.** _Writing is where I find out that sentence one has no figure in it._ **An answer learned by heart arrives at the wrong speed and the panel hears the rehearsal.**',
  '**Put the figure in sentence one, not in sentence three.** _Fourteen people, two machines, nineteen years._ ⚠ **A result with a figure and a situation without one reads as a boast**; the same figures either side read as a record.',
  '**Keep the fourth sentence small, true and specific.** _I would put the year beside every figure I quote from memory, which costs four words._ ⚠ **Name the cost of the change**, which is what separates a resolution from an intention.',
  '⚠ And **read the four fourth sentences together at the end.** **If they share a pattern, say so before the panel finds it** — _that is either a real pattern or a lazy one_ — **because a pattern you have named is evidence and a pattern they find is a conclusion.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two of your four answers (80 words or more).'));
out.push(p('**FOUR ANSWERS, WRITTEN OUT** · ______________ · ______________   **Why I am writing these down.** ⚠ ______________.   **1 · A time when ______________.** ______________ _(the situation, with a figure)_. I ______________. **______________** _(what happened, with a figure)_. ⚠ **What I would change: ______________.**   **2 · A time when ______________.** ______________. I ______________. **______________.** ⚠ **What I would change: ______________, which costs ______________.**   **And the thing they have in common.** ⚠ ______________ — **which is either ______________ or ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A figure in sentence one of each answer, not only in sentence three',
  'A fourth sentence in every answer, and none of them _nothing_',
  'The cost of the change named',
  'A last line on what the fourth sentences have in common',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their four fourth sentences**, one after another, and the room says what the four have in common.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write all four answers (180 words or more), to the shape in the writer\'s box: a figure in sentence one of each, a real fourth sentence in each, and the pattern named at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a figure in sentence one, a fourth sentence that is not _nothing_, the cost of the change, and the pattern named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one answer aloud in forty seconds, with a partner holding a pen and writing down only the figures.** ⚠ The room watches the pen. **When the pen stops before the answer does, that is where the answer became a story.** Then the sentence the cycle ends on, which is Mrs Mansour\'s: **it was the only dishonest thing I said in forty minutes.**'));
out.push(hw('Write all four answers (80+ words each). ⚠ Then do the thing Mr Tahhan did: **put the four fourth sentences on one line and read them together.** **If all four say the same kind of thing, that is a finding about you and not a fault in the answers** — and it is better found at your own table than across a desk by three people with pens. **Bring the one line to the next lesson**, and bring the count of figures in your first sentences: **two is the minimum and three is better, and a first sentence with none in it is not finished.** **13.2 is about the tenses inside sentence one**, and a narrative that slips there takes the figures with it.'));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  The tenses, at speed'));
out.push(p('**Function:** keeping the narrative tenses straight under pressure   ·   **Grammar:** the past perfect inside a past narrative, at speaking speed   ·   **Pronunciation:** the contracted _\'d_ that carries the whole sequence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Tell your partner the **order** of three things in the occasion you chose for 13.1 — what happened first, second and third — and then tell it **in the order a listener needs**, which is often not the same. ⚠ Your partner says where the two orders differ.'));
out.push(board('We sent it and then we found the figure was old.', 'We had used a figure from 2019 before anybody checked it.'));
out.push(p('**b**  Which sentence puts the two events in the right relation? **1** _I signed the order and I read the conditions page._  **2** _I had signed the order before I read the conditions page._  **3** _I read the conditions page and then I had signed the order._  **4** _By the time the page came back, I had already agreed the price._  **5** _The schedule slipped eleven days after we had quoted from a figure that was six years old._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say goes wrong with the past perfect under pressure, and what is her test for whether you need it?   **A** students use it too much; the test is length   **B** **students drop it when they speed up** — and the test is whether **one event explains the other**, not whether one is older   **C** students use the wrong auxiliary; the test is the adverb'));
out.push(p('**b**  Listen again. **1** What does Mr Barghouti say he does when he feels the sequence slipping?   **2** What does Ms Huda say about the contracted _\'d_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  Before, and because of', [
  ['Ms Huda', 'Mr Tahhan\'s second answer, at speed. Say it in twenty seconds.'],
  ['Bassel', 'I told the client the older machine could carry a third of the order. It carried about a fifth. I used a figure from 2019 and I did not say it was from 2019 and the schedule slipped eleven days.'],
  ['Ms Huda', '⚠ **Four past simples in a row, and the sequence has gone.** **Which of those four happened first?**'],
  ['Bassel', 'Using the 2019 figure. That was before any of it.'],
  ['Ms Huda', '**Then say so, and it costs one syllable.** _I\'d used a figure from 2019._ ⚠ **This is what goes wrong under pressure: students do not misuse the past perfect, they drop it** — **and the listener then has to reconstruct the order from the content, which costs them about two seconds a sentence.**'],
  ['Adnan', 'I feel it slipping and then I do not know whether I need it.'],
  ['Ms Huda', '**There is a test and it is not about which event is older.** ⚠ **Ask whether one event explains the other.** **If it does, the explaining one takes the past perfect**, whatever the order on the clock. **The 2019 figure explains the slipped schedule, so it goes back.**'],
  ['Adnan', 'And if they are just two things that happened?'],
  ['Ms Huda', '**Then two past simples and no past perfect, and a student who puts one in has made the listener look for a connection that is not there.** ⚠ **Over-using it is a real fault and it is rarer than the other one** — **about one answer in nine in this room, against eight in nine that drop it.**'],
  ['Dima', 'What do you do when you feel it going?'],
  ['Adnan', 'I slow down for one word. Not the sentence — the one word. _I\'d._ If I can get that out, the rest of the sentence arranges itself behind it.'],
  ['Ms Huda', '**That is the best practical answer anybody has given to this, and it is worth copying.** ⚠ **The whole sequence is carried by one contracted syllable**, and the syllable is the thing that disappears when you speed up. **Slow down for the _\'d_ and let the rest run.**'],
  ['Jad', 'Is the contraction all right in an interview? It sounds informal.'],
  ['Ms Huda', '🔊 **It is not informal; it is spoken English.** ⚠ **_I had used_ said in full in an interview sounds like a prepared sentence, which is the thing you are trying not to sound like.** **Contract it and stress the verb after it** — _I\'d **used** a figure from 2019_ — **and the stress is what tells the listener the sequence matters.**'],
  ['Rim', 'And writing it afterwards?'],
  ['Ms Huda', '**In writing you may use the full form and often should, because a reader has no stress to go on.** ⚠ **But the rule is the same one** — **the explaining event goes back** — **and a written answer with four past simples in a row has the same fault as a spoken one, only slower.**'],
  ['Mazen', 'So the test is one question.'],
  ['Ms Huda', '**One question: does this explain that?** ⚠ **Not: which came first.** **The clock is the wrong instrument here**, and it is the one most students reach for.'],
]));
out.push(sp());
out.push(box('Language box – the past perfect under pressure', [
  '**The fault is not misuse; it is loss.** ⚠ **Under pressure students do not use the past perfect wrongly — they drop it**, and four past simples in a row leave the listener to reconstruct the order from the content, **which costs about two seconds a sentence.**',
  '**The test, and it is not about which event is older.** ⚠ **Does one event _explain_ the other?** **If it does, the explaining one goes into the past perfect**, whatever the order on the clock. _I\'d used a figure from 2019, and the schedule slipped eleven days._',
  '**And if they are simply two things that happened, use two past simples.** ⚠ **A past perfect where there is nothing to explain makes the listener look for a connection that is not there.** **Over-use is a real fault and is rarer: about one answer in nine, against eight in nine that drop it.**',
  '**Mr Barghouti\'s method, and it is the best practical answer in this book to a tense problem.** ⚠ **Slow down for one word, not for the sentence.** _I\'d._ **If that syllable gets out, the rest of the sentence arranges itself behind it.**',
  '**The contraction is not informal; it is spoken English.** ⚠ **_I had used_ said in full in an interview sounds like a prepared sentence**, which is the thing you are trying not to sound like.',
  '**The shapes.** _I\'d **used** X before Y._ _By the time Z came back, I\'d already **agreed** the price._ _We\'d **quoted** from a figure that was six years old, and the schedule slipped._ ⚠ **And the one that does the most work in an interview:** _It turned out that we\'d **been** working from the 2019 sheet all along._',
  '**In writing, the full form is often right**, because a reader has no stress to go on. ⚠ **But the rule does not change** — the explaining event goes back — **and a written answer with four past simples in a row has the same fault as a spoken one, only slower.**',
  '**Pronunciation.** 🔊 **Track 13.4** **Contract it and stress the verb after it:** _I\'d **used** a figure from 2019._ ⚠ **The stress is what tells the listener the sequence matters**, and an unstressed verb after _\'d_ throws the sequence away again.',
  '**Practise:** Join the two events so that the explaining one goes back. **1** a figure and a slip  **2** a signature and a conditions page  **3** a refusal and a concession  **4** two things with no connection, in two past simples  **5** one with _by the time_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two events from the card **in the order they happened**. B joins them into one sentence, putting the explaining event into the past perfect — **or says that there is nothing to explain and uses two past simples.** ⚠ **Two rows on each card have no explanatory link at all.** Swap cards.'));
out.push(dlg(null, [
  ['A', 'First __________. Then __________.'],
  ['B', '__________ , **and** __________. _(or)_ **There is nothing to explain** — __________ **and** __________.'],
]));
out.push(table(['Card A – two events', 'Card B – two events'], [
  ['_We quoted from a 2019 figure. / The schedule slipped eleven days._', '_I conceded a fault of our own. / The code appeared on every slip._'],
  ['_⚠ The post was advertised in July. / The analyser was serviced in July._', '_⚠ The gate was repainted in May. / The timetable changed in May._'],
  ['_I signed the order. / I read the conditions page._', '_The thread was closed. / The questions moved to the second thread._'],
  ['_⚠ Two machines were bought in 2011. / Fourteen people work there now._', '_⚠ The bulletin went monthly. / The office moved to the second floor._'],
  ['_Nine of forty went out incomplete. / The distributor refused twice._', '_Nobody defined "standard stock". / A reader could have read it four ways._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the ten, the tense B chose and the one word that carried it. Then the count: **six need a past perfect and four do not** — the four are the rows marked ⚠, where two things happened at the same time and neither explains the other. ⚠ **A pair who put one in all ten has made the rarer fault.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your 13.1 answer again, **in twenty seconds**, with your partner listening for one thing only: **the first verb that should have gone back and did not.** ⚠ They stop you at it. Say the sentence again with the _\'d_ in.'));
out.push(p('**b**  Swap. Then both of you do it once more at **interview speed**, which is faster than you think, and count how many _\'d_s survive. ⚠ **Most people lose one between the first telling and the second**, and it is almost always in sentence one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel gave his second answer at speed, in twenty seconds, and it came out as four past simples in a row, so the sequence had gone. Asked which of the four happened first, he said using the 2019 figure, which was before any of it — and then say so, because it costs one syllable: I had used a figure from 2019. This is what goes wrong under pressure: students do not misuse the past perfect, they drop it, and the listener then has to reconstruct the order from the content, which costs about two seconds a sentence. Adnan said he feels it slipping and then does not know whether he needs it, and there is a test, and it is not about which event is older: ask whether one event explains the other. If it does, the explaining one takes the past perfect, whatever the order on the clock — the 2019 figure explains the slipped schedule, so it goes back. And if they are just two things that happened, two past simples and no past perfect, since a student who puts one in has made the listener look for a connection that is not there. Over-using it is a real fault and is rarer, about one answer in nine against eight in nine that drop it. Dima asked what Adnan does when he feels it going, and he slows down for one word — not the sentence, the one word, I had. If he can get that out, the rest of the sentence arranges itself behind it, which is the best practical answer anybody has given to this. Jad asked whether the contraction is all right in an interview, and it is not informal but spoken English: The full form said in an interview sounds like a prepared sentence, which is the thing you are trying not to sound like, and the fix is to contract it and stress the verb after it, because the stress is what tells the listener the sequence matters. Rim asked about writing it afterwards, and in writing you may use the full form and often should, because a reader has no stress to go on — but the rule is the same one, the explaining event goes back, and a written answer with four past simples in a row has the same fault as a spoken one, only slower. And Mazen said so the test is one question, which it is: does this explain that? Not which came first. The clock is the wrong instrument here and it is the one most students reach for._'));
out.push(p('**Listener task:** write the one verb your partner lost between the first telling and the second.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes about a sequence he got wrong in writing. Answer the questions.'));
out.push(model([
  '**THE ORDER I PUT IT IN, AND THE ORDER IT HAPPENED IN** · M. Hariri · 21 September',
  '**A letter of mine was answered last month with a question I did not expect: _which of these did you do first?_** ⚠ **The letter was eleven sentences long and every verb in it was a past simple.** **I had put the events in the order they happened and had still managed to hide the order**, which took me a fortnight to understand.',
  '**What the letter said.** That **fifteen handsets of one model** came back in six weeks, that **eleven of the fifteen** were from one batch, that I started a fault book in September, and that I wrote to the distributor in November. **All true, all in order, all past simple.**',
  '**What the reader could not tell.** ⚠ **Whether I started the fault book _because_ of the handsets or whether the handsets turned up in a book I was keeping anyway.** **Those are two different letters.** The first says I noticed something; the second says I had a record and the record found it. **The second is much stronger and it is the true one.**',
  '**The sentence that fixed it, and it is one syllable longer.** _By the time the eleventh came in, **I\'d been keeping the fault book for seven weeks**, and the batch number was in it every time._ ⚠ **One past perfect continuous, and the reader now knows that the record came first.** **Nothing else in the letter changed.**',
  '**Why this matters more in writing than in speech.** A listener can ask. ⚠ **A reader guesses, and a reader who guesses wrong has a version of your work in their head that you cannot correct**, because you will never know they have it. **The question I was asked was a piece of luck: most readers do not ask, they just believe the weaker version.**',
  '**What I do now, and it costs one reading.** **I read the letter once for verbs only**, and I ask of each one: **does this explain any of the others?** ⚠ **If it does and it is in a past simple, it goes back.** **In the eleven-sentence letter, exactly two verbs should have gone back and neither had.**',
  '**And the thing I would change about the fortnight.** ⚠ **I spent it rewriting the letter.** **I should have spent four minutes answering the question he actually asked** — _which of these did you do first?_ — **because he had told me precisely what was missing and I treated it as criticism instead of as information.**',
]));
out.push(item('1', 'What could the reader of his letter not tell, and why are the two versions different?'));
out.push(item('2', 'What sentence fixed it, and what does the reader now know?'));
out.push(item('3', 'What does he do now when he checks a letter, and what did he find in the eleven-sentence one?'));
out.push(writers([
  'A page about a sequence you got wrong in writing: **the question you were asked** → **what your document said** → **what the reader could not tell, and the two versions it left open** → **the one sentence that fixed it** → **why this matters more in writing than in speech** → **the check you now run** → **and what you would change about your own response.**',
  '⚠ **Name the two versions.** _The first says I noticed something; the second says I had a record and the record found it._ **A sequence fault is not a grammar point until you can show the two readings it allows**, and the two readings are what make the page worth writing.',
  '**Quote the fixed sentence in full and say what it cost.** _By the time the eleventh came in, I\'d been keeping the fault book for seven weeks._ ⚠ **One syllable.** **A correction with its price on it is believed; one without reads as a resolution.**',
  '**Say why writing is worse than speech here.** _A listener can ask; a reader guesses._ ⚠ **And add the part that stings:** _a reader who guesses wrong has a version of your work you cannot correct, because you will never know they have it._',
  '⚠ And **end on your own handling, not on the grammar.** _I spent a fortnight rewriting and should have spent four minutes answering the question he asked._ **Treating information as criticism is the expensive mistake in this page**, and it is not a mistake about tense.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a sequence you got wrong (80 words or more).'));
out.push(p('**THE ORDER I PUT IT IN, AND THE ORDER IT HAPPENED IN** · ______________ · ______________   **The question I was asked.** _"______________"_ ⚠ ______________.   **What it said.** ______________. **All true, all in order, all ______________.**   **What the reader could not tell.** ⚠ Whether ______________ **or** whether ______________. **Those are two different ______________**, and the ______________ is the true one.   **The sentence that fixed it.** _______________._ ⚠ **One ______________ longer.**   **Why it matters more in writing.** A listener ______________. ⚠ **A reader ______________.**   **The check I run now.** ______________. **In the ______________, exactly ______________ should have gone back.**   **And what I would change.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The two readings the document left open, both stated',
  'The fixed sentence quoted in full, with its cost',
  'Why a reader is worse off than a listener',
  'A last paragraph about your own handling, not about tense',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their fixed sentence**, and the room says which of the two readings it closes.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the two readings named, the fixed sentence quoted with its cost, and the last paragraph about your own handling.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the two readings both stated, the fixed sentence quoted with its cost, and a last paragraph about handling rather than tense.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your own first paragraph aloud and ask the room one question: _which of these did I do first?_** ⚠ If more than one answer comes back, the paragraph has the fault the page is about. Then the sentence the cycle ends on, which is Mr Hariri\'s: **most readers do not ask, they just believe the weaker version.**'));
out.push(hw('Write the page (80+ words). ⚠ Then take **the last letter you sent that is over ten sentences** and read it **once for verbs only**: does any of them explain another? **Count how many should have gone back.** 13.3 is about a different kind of mismatch — **the question you were not asked.**'));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  The question you were not asked'));
out.push(p('**Function:** answering a question you were not asked, and saying that you are doing so   ·   **Grammar:** _if what you are asking is whether …, then_   ·   **Pronunciation:** the rise that turns a reframing into a request for permission'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A asks a question that is **not quite the right question** about B\'s work — something slightly off. ⚠ **B answers it exactly as asked, with no adjustment at all.** Both notice what that costs. Then B does it again, naming the mismatch first.'));
out.push(board('Well, what I think you really mean is…', 'If what you are asking is whether the batch was faulty, then no — and the question underneath it is a different one.'));
out.push(p('**b**  Which version names the mismatch without correcting the asker? **1** _That is the wrong question._  **2** _If what you are asking is whether we can do it by Friday, then yes; if you are asking whether it will be checked by Friday, then no._  **3** _You have misunderstood the process._  **4** _I think there is a confusion here._  **5** _I can answer that two ways and they have different answers — may I give you both?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is the difference between reframing a question and correcting the asker, and what does she say about doing it twice?   **A** there is no difference; both are rude   **B** **a reframing offers two answers and lets the asker choose; a correction tells them they are wrong** — and **doing it twice in one interview is once too many**   **C** a reframing is longer; doing it twice is fine'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say happens to a panel that is corrected?   **2** What does Ms Huda say you must do after reframing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  If what you are asking is', [
  ['Ms Huda', 'Mrs Shaaban. I ask you: _how do you ensure quality?_ Answer it exactly as asked.'],
  ['Rim', '_(a pause)_ We have procedures and we follow them.'],
  ['Ms Huda', '**Which is true and is worth nothing, and you knew that while you were saying it.** ⚠ **The question had no occasion in it**, so your answer had no figure in it. **That is 13.1 again from the other end: a bad question produces a bad answer unless somebody does something about it.**'],
  ['Rim', 'And the something is?'],
  ['Ms Huda', '**Name the two questions and let them choose.** _If what you are asking is whether we have procedures, then yes, and I can send them. If you are asking what proportion of what leaves this depot has been checked against them, then it is thirty-one of forty last quarter and I can tell you about the nine._'],
  ['Rim', 'The second one is the one I want to answer.'],
  ['Ms Huda', '**Of course it is, and that is precisely why you must offer both.** ⚠ **A reframing that offers one answer is not a reframing, it is a substitution** — **you have answered your own question and the panel has noticed.**'],
  ['Dima', 'I have sat on the other side of this. ⚠ **A panel that is corrected stops listening to the content and starts listening to the manner**, and you cannot get them back in the time available. **It is not that they are offended. It is that you have given them a second thing to assess and they only had time for the first.**'],
  ['Ms Huda', '**That is the whole argument in two sentences and it is better than mine.** ⚠ **The cost of correcting is not the offence; it is the attention.**'],
  ['Adnan', 'How often can you do it?'],
  ['Ms Huda', '**Once.** ⚠ **Twice in one interview and you are a person who finds questions imprecise**, which is a true thing about you that you should not be advertising. **If the second question is also wrong, answer it as asked and let it go.**'],
  ['Jad', 'And afterwards? Do you just carry on?'],
  ['Ms Huda', '**No, and this is the part everybody forgets. After you reframe, you must actually answer the question they asked** — **the one you set aside** — **in one sentence, at the end.** ⚠ **_And on the first of those, yes: the procedures exist and I can send them._** **Otherwise you have not answered two questions; you have dodged one.**'],
  ['Bassel', 'That feels like the opposite of what reframing is for.'],
  ['Ms Huda', '**It is what makes reframing honest rather than clever.** ⚠ **Anybody can redirect a question. The move that costs something is redirecting it and then coming back to pay for it.**'],
  ['Mazen', 'And the tone? It can sound like a lecture.'],
  ['Ms Huda', '🔊 **Put a rise on the end of the reframing, not a fall.** _…then it is thirty-one of forty?_ ⚠ **A rise makes it a request for permission to answer the second one; a fall makes it an announcement that the second one is the real question.** **Same words, and only one of the two is survivable.**'],
]));
out.push(sp());
out.push(box('Language box – naming the mismatch', [
  '**The shape, and it offers two answers.** _If what you are asking is whether **X**, then **A**. If you are asking **Y**, then **B**._ ⚠ **A reframing that offers one answer is not a reframing; it is a substitution** — **you have answered your own question and the asker has noticed.**',
  '**Why not simply correct them?** ⚠ **The cost is not the offence; it is the attention.** **A panel that is corrected stops listening to the content and starts listening to the manner** — **you have given them a second thing to assess and they only had time for the first.**',
  '**Once per interview.** ⚠ **Twice and you are a person who finds questions imprecise**, which is a true thing about you that you should not be advertising. **If the second bad question comes, answer it as asked and let it go.**',
  '**And the part everybody forgets: come back and pay.** ⚠ **After the reframing, answer the question they actually asked, in one sentence, at the end.** _And on the first of those, yes: the procedures exist and I can send them._ **Otherwise you have not answered two questions; you have dodged one.**',
  '⚠ **That return is what makes the move honest rather than clever.** **Anybody can redirect a question. The move that costs something is redirecting it and then coming back to pay for it.**',
  '**The shapes.** _If what you are asking is whether…, then…_ _I can answer that two ways and they have different answers — may I give you both?_ _There is a version of that question I can put a figure on; shall I take that one first?_ ⚠ **And the one to avoid entirely:** _what I think you really mean is…_ — **which tells somebody what they mean.**',
  '**Pronunciation.** 🔊 **Track 13.6** **A rise at the end of the reframing, not a fall.** ⚠ **A rise makes it a request for permission; a fall makes it an announcement that the second question is the real one.** **Same words, and only one of the two is survivable.**',
  '**And the test for whether a question needs reframing at all, because most do not.** ⚠ **Reframe only when the question as asked cannot take a figure.** **If you can answer it with a number and an occasion, answer it** — **a reframing offered to a perfectly good question is the worst of all the versions.**',
  '**Practise:** Reframe, offer both, and come back to the first. **1** _how do you ensure quality?_  **2** _are you good with deadlines?_  **3** _can you do it by Friday?_  **4** one that needs no reframing at all  **5** one where you answer as asked because it is the second time',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the question from the card. B decides: **reframe and offer both, or answer as asked.** ⚠ **Three rows on each card need no reframing** — they can take a figure as they stand — **and B must answer those straight.** Then B returns to the set-aside question in one sentence. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', '_(reframe)_ If what you are asking is whether __________, then __________. If you are asking __________, then __________. _(rise)_'],
  ['B', '_(and the return)_ And on the first of those, __________.'],
]));
out.push(table(['Card A – the question', 'Card B – the question'], [
  ['_How do you ensure quality?_', '_Are you good under pressure?_'],
  ['_⚠ How many consignments left incomplete last quarter?_', '_⚠ When did you start the fault book?_'],
  ['_Can you do it by Friday?_', '_Do you have experience of difficult clients?_'],
  ['_⚠ What did the conditions page cost you?_', '_⚠ How many of the eleven clauses went back?_'],
  ['_⚠ How long have you been there?_', '_⚠ What proportion was checked?_'],
  ['_Are you a details person?_', '_Would you describe yourself as a team player?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each question, whether B reframed or answered straight, and whether the return sentence came. Then the count: **three of the six on each card need no reframing** — the rows marked ⚠, all of which already contain an occasion or a number. ⚠ **And the commonest fault is not over-reframing: it is the missing return.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write out the **worst question you have actually been asked about your work** — the one that could not take a figure. ⚠ Then write the two questions it might be, and the two answers, and the return sentence.'));
out.push(p('**b**  Swap and perform. Your partner listens for two things: **whether both answers were offered** and **whether the rise was there.** ⚠ Then they say the reframing back to you **with a fall at the end**, so that you hear the difference in your own words.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim was asked how she ensures quality and answered it exactly as asked: we have procedures and we follow them. Which is true and is worth nothing, and she knew that while she was saying it — the question had no occasion in it, so the answer had no figure in it, which is 13.1 from the other end. The something to do about it is to name the two questions and let them choose: if what you are asking is whether we have procedures, then yes and I can send them; if you are asking what proportion of what leaves this depot has been checked against them, then it is thirty-one of forty last quarter and I can tell you about the nine. Rim said the second is the one she wants to answer, and of course it is, and that is precisely why both must be offered: a reframing that offers one answer is not a reframing but a substitution, and the panel has noticed. Dima, who has sat on the other side of this, said a panel that is corrected stops listening to the content and starts listening to the manner, and you cannot get them back in the time available — it is not that they are offended, it is that you have given them a second thing to assess and they only had time for the first. The cost of correcting is not the offence; it is the attention. Adnan asked how often you can do it, and once: twice in one interview and you are a person who finds questions imprecise, which is a true thing about you that you should not be advertising. And Jad asked what happens afterwards, which is the part everybody forgets: after you reframe you must answer the question they asked, the one you set aside, in one sentence at the end. Otherwise you have not answered two questions; you have dodged one. Bassel said that feels like the opposite of what reframing is for, and it is what makes reframing honest rather than clever: anybody can redirect a question, and the move that costs something is redirecting it and then coming back to pay for it. And Mazen asked about the tone, since it can sound like a lecture, and the answer is in one feature — put a rise on the end of the reframing and not a fall. A rise makes it a request for permission to answer the second one; a fall makes it an announcement that the second one is the real question. Same words, and only one of the two is survivable._'));
out.push(p('**Listener task:** write your partner\'s two questions and their return sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima writes after sitting on a panel. Answer the questions.'));
out.push(model([
  '**FROM THE OTHER SIDE OF THE DESK** · D. Khoury · 28 September · _for the two colleagues who sat with me_',
  '**We interviewed nine people for one post last week and I want to write down what I saw while it is still accurate.** ⚠ **The thing that decided it was not experience and it was not confidence.** **It was what candidates did with four questions that were badly asked, and I asked three of the four.**',
  '**The questions were bad in one particular way.** _How do you ensure quality? Are you good under pressure? Do you pay attention to detail?_ ⚠ **None of them can take a figure**, which means none of them can be answered well. **We wrote them in twenty minutes and we should have spent an hour.**',
  '**Six of the nine answered them as asked**, and the six answers were interchangeable. I have them in front of me and **I cannot now tell you which candidate gave which.** That is not a criticism of the six; it is a description of what our question did to them.',
  '**Two of the nine corrected us.** ⚠ _That is really a question about process rather than about me._ **True, and both of them lost the room inside a sentence** — not because we were offended, but because we started attending to how they were speaking. **We had come to assess one thing and were suddenly assessing two.**',
  '**One did something else.** She said: _If you are asking whether we have procedures, then yes and I can send them. If you are asking what proportion of what leaves our depot was checked against them last quarter, then it is thirty-one of forty, and I can tell you about the nine._ ⚠ **Then she stopped and waited.** **We chose the second, she gave us the nine, and at the end she said: _and on the first, yes, the procedures exist._**',
  '**That last sentence is why she got the post.** ⚠ **The reframing is a technique and three people could have been taught it in an afternoon. The return is a disposition.** **She had set our question aside and she came back and paid for it**, and nobody does that who is only trying to get through the room.',
  '**And what I would change, which is about us and not about them.** ⚠ **We should have written the four questions with a figure in each** — _what proportion…_, _how many…_, _on how many occasions…_ — **because a panel that asks unanswerable questions is assessing the candidates\' recovery from its own bad drafting**, and that is not what the post is for.',
]));
out.push(item('1', 'What was wrong with the four questions, and what did it do to six of the nine candidates?'));
out.push(item('2', 'What happened to the two who corrected the panel, and why?'));
out.push(item('3', 'Which sentence does she say got the candidate the post, and what is the difference she draws?'));
out.push(writers([
  'A note from the other side of a decision: **what actually decided it** → **the questions, and what was wrong with them** → **what most people did** → **what the two who corrected you did** → **what the one who reframed did, quoted in full** → **the sentence that decided it, and why** → **and what you would change about your own part.**',
  '⚠ **Quote the good answer in full and let it run.** **A summary of a reframing loses the thing it is about**, which is the pair of alternatives and the pause after them. **Then print the return sentence on its own**, because that is the one the page is for.',
  '**Be exact about why correcting failed.** _Not because we were offended, but because we started attending to how they were speaking._ ⚠ **The cost is the attention and not the offence**, and a page that says _it is rude_ has taught nothing.',
  '**Draw the distinction in one line.** _The reframing is a technique; the return is a disposition._ ⚠ **One sentence that separates what can be taught from what cannot** is worth more to the reader than the whole account before it.',
  '⚠ And **end on your own fault, in figures.** _We wrote them in twenty minutes and should have spent an hour._ **A panel that asks unanswerable questions is assessing recovery from its own drafting** — **and admitting that is what makes the rest of the note usable by the two colleagues it is written for.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note from the other side (80 words or more).'));
out.push(p('**FROM THE OTHER SIDE OF THE DESK** · ______________ · ______________   **We ______________ and the thing that decided it was not ______________.** ⚠ **It was ______________.**   **The questions were bad in one particular way.** _"______________"_ ⚠ **None of them can ______________.**   **______ of the ______ answered them as asked**, and the answers were ______________.   **______ corrected us.** ⚠ ______________, **and ______________ — not because ______________, but because ______________.**   **One did something else.** _"______________"_ ⚠ **Then ______________.**   **And at the end: _"______________."_** **That sentence is why ______________.** ⚠ **The reframing is ______________; the return is ______________.**   **And what I would change, which is about us.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The good answer quoted in full, with its pause',
  'The return sentence printed on its own',
  'The cost of correcting named as attention, not offence',
  'A last paragraph on your own part, with a figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their return sentence**, and the room says what it tells them about the person who said it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the good answer quoted whole, the return printed alone, and your own fault in figures at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the good answer quoted in full, the return sentence alone, correcting costed as attention, and your own fault in figures.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the reframing aloud twice — once with a rise and once with a fall — and let the room say which one of the two speakers it would have appointed.** ⚠ **Nobody in any class has ever chosen the fall**, and most people cannot hear the difference in their own voice until somebody says it back to them. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **the reframing is a technique and the return is a disposition.**'));
out.push(hw('Write the note (80+ words). ⚠ Then find **the worst question in a form or an application you have been sent** and rewrite it with a figure in it — _what proportion…_, _how many…_ **13.4 turns the questioning round**: the question **you** ask the panel.'));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  The question you ask them'));
out.push(p('**Function:** asking the panel a question that changes their mind about you   ·   **Grammar:** the mechanism question, asked upwards _(B1 22.5, raised)_   ·   **Pronunciation:** the question asked at ordinary speed, with no apology in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the last question you asked somebody more senior than you**, word for word. ⚠ Your teacher writes them up and sorts them into two columns: **questions about what** and **questions about how.** **Count each column.**'));
out.push(board('Is there anything else you need from me?', 'How does a request like mine actually reach the person who decides it?'));
out.push(p('**b**  Which question would change a panel\'s mind about the person asking it? **1** _What are the opportunities for progression?_  **2** _When you have had this post filled well before, what did that person do in the first three months?_  **3** _Is there a probation period?_  **4** _What would have to be true in a year for you to say this appointment had worked?_  **5** _Do you offer training?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What kind of question does Ms Huda say changes a panel\'s mind, and what does she say about asking it at the end?   **A** a question about pay; ask it first   **B** **a question about how something works, which only somebody who has thought about the job can ask** — and at the end it is the last thing they hear   **C** a question about the company history; do not ask one at all'));
out.push(p('**b**  Listen again. **1** What does Mr Attar say he used to ask, and why did it do nothing?   **2** What does Ms Huda say about asking a question you already know the answer to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  Asked upwards', [
  ['Ms Huda', 'Every interview ends the same way: _do you have any questions for us?_ Mr Attar, what did you use to say?'],
  ['Jad', '_Is there training?_ Every time. For two years.'],
  ['Ms Huda', '**And what did it do?**'],
  ['Jad', 'Nothing. They said yes, there is training, and we all stood up.'],
  ['Ms Huda', '⚠ **It did nothing because the answer was always going to be yes**, and a question whose answer you can predict is not a question — **it is a courtesy with a question mark on it.** **It costs you the one moment in the interview where you are the one speaking by right.**'],
  ['Omar', 'So what do you ask?'],
  ['Ms Huda', '**Ask how something works.** ⚠ **A mechanism question — B1 22.5, now asked upwards.** _How does a request like mine actually reach the person who decides it?_ **That question cannot be asked by somebody who has not thought about the job**, and that is the whole of its value.'],
  ['Dima', 'And it is not flattery, which is the other thing people try.'],
  ['Ms Huda', '**It is the opposite of flattery, because it may produce an answer you do not like.** ⚠ **That is the risk and it is the reason it works**: **a question you would not mind either answer to is a question you did not need to ask.**'],
  ['Adnan', 'What about asking something you already know the answer to? To show that you know it.'],
  ['Ms Huda', '⚠ **Never.** **It is the only move in an interview that can be detected with certainty**, because the panel watches you receive the answer and nobody receives known information convincingly. **And you have spent the moment on a performance instead of on a fact.**'],
  ['Bassel', 'Is there a question that works in every interview?'],
  ['Ms Huda', '**There is one and it is nearly unfair.** _What would have to be true in a year for you to say this appointment had worked?_ ⚠ **It makes the panel state their criteria out loud, often for the first time**, and it tells you more in ninety seconds than the advertisement did in a page.'],
  ['Rim', 'Does it ever go wrong?'],
  ['Ms Huda', '**It goes wrong when they cannot answer it**, and that is information too. ⚠ **A panel that cannot say what success would look like has not decided what the post is for**, and you now know something about the place that no reference would have told you.'],
  ['Mazen', 'How many questions?'],
  ['Ms Huda', '**One good one and then stop.** ⚠ **Three questions at the end is an interrogation and the room has been sitting for an hour.** **If the answer to your one question opens something, follow it once — and once only.**'],
  ['Jad', 'And how do you say it without sounding as though you have prepared it? Because I will have prepared it.'],
  ['Ms Huda', '🔊 **At ordinary speed, with nothing in front of it.** ⚠ **The apology is what gives it away** — _I was just wondering, if you do not mind, whether possibly…_ — **eleven words of permission-seeking before a question you are entitled to ask.** **Drop them all and the sentence sounds thought about rather than rehearsed.**'],
]));
out.push(sp());
out.push(box('Language box – the question asked upwards', [
  '**Why the usual question does nothing.** ⚠ _Is there training?_ **The answer was always going to be yes**, and a question whose answer you can predict is **a courtesy with a question mark on it.** **It costs you the one moment in the interview where you speak by right.**',
  '**Ask how something works — the mechanism question of B1 22.5, now asked upwards.** _How does a request like mine actually reach the person who decides it?_ ⚠ **That question cannot be asked by somebody who has not thought about the job**, and that is the whole of its value.',
  '**It is the opposite of flattery, because it may produce an answer you do not like.** ⚠ **That is the risk and it is the reason it works:** **a question you would not mind either answer to is a question you did not need to ask.**',
  '⚠ **Never ask something you already know the answer to.** **It is the only move in an interview that can be detected with certainty**, because the panel watches you receive the answer, **and nobody receives known information convincingly.**',
  '**The one that works almost everywhere, and is nearly unfair.** _What would have to be true in a year for you to say this appointment had worked?_ ⚠ **It makes the panel state their criteria out loud, often for the first time.**',
  '**And when it fails, it still pays.** ⚠ **A panel that cannot answer it has not decided what the post is for**, and you now know something about the place that no reference would have told you.',
  '**One question, then stop.** ⚠ **Three at the end is an interrogation and the room has been sitting for an hour.** **If the answer opens something, follow it once — and once only.**',
  '**Pronunciation.** 🔊 **Track 13.8** **At ordinary speed, with nothing in front of it.** ⚠ **The apology is what gives it away** — _I was just wondering, if you do not mind, whether possibly…_ — **eleven words of permission-seeking before a question you are entitled to ask.** **Drop them all.**',
  '**Practise:** Ask the mechanism question, with nothing in front of it. **1** about how a decision reaches the decider  **2** about what the last person in the post did first  **3** the one-year question  **4** a follow-up to an answer you did not like  **5** one you would genuinely not mind either answer to — and say why you would not ask it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the panel and reads the post from the card. B asks **one** question — **about a mechanism, not about a fact** — and A answers honestly, including _I do not know._ ⚠ **Two rows on each card are posts whose description contradicts itself**, and B\'s question should find it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the post)_ __________.'],
  ['B', '__________? _(ordinary speed, nothing in front of it)_'],
  ['A', '__________. _(or)_ **I do not know.**'],
]));
out.push(table(['Card A – the post', 'Card B – the post'], [
  ['_Coordinator: "you will own the handover process."_', '_Supervisor: "you will improve quality across four sites."_'],
  ['_⚠ Clerk: "you will decide refusals, subject to approval of all refusals."_', '_⚠ Editor: "you will have full editorial control, within agreed guidelines."_'],
  ['_Analyst: "you will produce the monthly figures."_', '_Officer: "you will handle difficult correspondence."_'],
  ['_⚠ Lead: "you will set the standard, which is set centrally."_', '_⚠ Manager: "you will have a free hand, reporting weekly on all decisions."_'],
  ['_Trainer: "you will bring new staff up to speed."_', '_Buyer: "you will negotiate with three suppliers."_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each question, and whether it was about a mechanism or a fact. Then the four rows marked ⚠: **each contains a contradiction between what is promised and what is reserved**, and the mechanism question is what exposes it. ⚠ **A question that produces _I do not know_ has done more work than one that produces a fluent answer.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the job description you brought and write **one mechanism question** about it. ⚠ **Then write both answers you might get** — the one you want and the one you do not — **and say whether you would still want the post after the second.** **If the answer is yes to both, the question is not doing any work.**'));
out.push(p('**b**  Swap. Your partner plays the panel and gives you **the answer you did not want.** ⚠ Then you follow it once — **once only** — and stop.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Every interview ends with do you have any questions for us, and Jad used to say is there training, every time, for two years — and it did nothing, because they said yes there is training and everybody stood up. It did nothing because the answer was always going to be yes, and a question whose answer you can predict is not a question but a courtesy with a question mark on it, and it costs you the one moment in the interview where you are the one speaking by right. So ask how something works: a mechanism question, which is B1 22.5 now asked upwards. How does a request like mine actually reach the person who decides it? That question cannot be asked by somebody who has not thought about the job, and that is the whole of its value. Dima said it is not flattery, and it is the opposite, because it may produce an answer you do not like — which is the risk and is the reason it works: a question you would not mind either answer to is a question you did not need to ask. Adnan asked about asking something you already know the answer to, to show that you know it, and never: it is the only move in an interview that can be detected with certainty, because the panel watches you receive the answer and nobody receives known information convincingly. Bassel asked whether there is a question that works in every interview, and there is one and it is nearly unfair: what would have to be true in a year for you to say this appointment had worked? It makes the panel state their criteria out loud, often for the first time. And Rim asked whether it ever goes wrong, and it goes wrong when they cannot answer it — which is information too, because a panel that cannot say what success would look like has not decided what the post is for, and you now know something about the place that no reference would have told you. Mazen asked how many questions, and one good one and then stop: three at the end is an interrogation and the room has been sitting for an hour, and if the answer opens something you follow it once and once only. And Jad asked how to say it without sounding as though it has been prepared, when it will have been prepared — at ordinary speed, with nothing in front of it. The apology is what gives it away, eleven words of permission-seeking in front of a question you are entitled to ask, and dropping them all is what makes the sentence sound thought about rather than rehearsed._'));
out.push(p('**Listener task:** write your partner\'s question and the answer they did not want.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad writes after asking one question. Answer the questions.'));
out.push(model([
  '**ONE QUESTION, AND WHAT IT COST ME TO ASK IT** · J. Attar · 5 October',
  '**For two years I ended every interview by asking whether there was training.** ⚠ **The answer was yes four times out of four, I learned nothing on any of the four occasions, and I was not appointed on three of them.** **This is about the fifth.**',
  '**What I asked instead.** _When this post has been filled well before, what did that person do in their first three months?_ ⚠ **I had rehearsed it, and I said it at ordinary speed with nothing in front of it**, which took more preparation than the sentence did.',
  '**What came back, and it was not what I wanted.** The chairman said that the post had been filled twice and that **neither person had lasted a year.** ⚠ **The first had rewritten the documentation and nobody used it; the second had asked for a decision about the documentation and had not got one in eleven months.**',
  '**Why I did not stop there.** Because that answer names a mechanism and the mechanism is the job. **I followed it once**: _so is the difficulty producing the document, or getting a decision about it?_ **He said the second, and said it quickly**, which told me he had known it before I asked.',
  '**What it cost.** ⚠ **It cost me the comfortable ending.** We did not stand up on a pleasant note; we stood up on something unresolved, **and I went home believing I had talked myself out of it.** **I had not**, but I believed it for nine days.',
  '**And what it bought, which I did not expect.** **The offer, when it came, named the decision problem in the second paragraph** and said that the post now reports to somebody who can take that decision. ⚠ **Nobody changes a reporting line because of a question at the end of an interview.** **What they do is write down the thing they have been avoiding, because somebody from outside has just said it out loud** — **and I was the only one of the four candidates who had.**',
  '**What I would change.** ⚠ **I would ask the one-year question as well**, which I had prepared and did not use because I had decided in advance to ask only one. **One good question and then stop is right in a room that is tired; it is not right when the first answer opens the whole post.** **The rule is one question and one follow-up, and I used my follow-up on a narrowing rather than on the second question.**',
]));
out.push(item('1', 'What did he ask for two years, and what does he say it achieved?'));
out.push(item('2', 'What did the chairman\'s answer reveal, and how did he follow it up?'));
out.push(item('3', 'What does he say the question bought, and what would he change?'));
out.push(writers([
  'A page about one question: **what you used to ask and what it achieved** → **what you asked instead, quoted** → **the answer, especially if it was not the one you wanted** → **why you did not stop** → **what it cost** → **what it bought** → **and what you would change.**',
  '⚠ **Put the failure of the old question in figures.** _Yes four times out of four, nothing learned on any of the four, not appointed on three._ **A page that says the old question was weak has asserted it; one that counts it has shown it.**',
  '**Quote the question exactly, and say how you delivered it.** _At ordinary speed with nothing in front of it, which took more preparation than the sentence did._ ⚠ **The delivery is half the move** and a reader who is going to copy this needs it.',
  '**Keep the cost honest and in time.** _I went home believing I had talked myself out of it. I had not, but I believed it for nine days._ ⚠ **A cost with a duration on it is believed**; _it was uncomfortable_ is not a cost.',
  '⚠ And **be exact about what the question changed and what it did not.** _Nobody changes a reporting line because of a question at the end of an interview. What they do is write down the thing they have been avoiding._ **That distinction is the page**, and without it the whole thing reads as luck claimed as technique.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about one question (80 words or more).'));
out.push(p('**ONE QUESTION, AND WHAT IT COST ME TO ASK IT** · ______________ · ______________   **For ______________ I ended every ______________ by asking ______________.** ⚠ **The answer was ______________ out of ______________, I learned ______________, and ______________.**   **What I asked instead.** _"______________?"_ ⚠ **I said it ______________**, which took ______________.   **What came back, and it was not what I wanted.** ______________. ⚠ ______________.   **Why I did not stop there.** Because ______________. **I followed it once:** _"______________?"_   **What it cost.** ⚠ ______________ — **and I believed it for ______________.**   **And what it bought.** ______________. ⚠ **Nobody ______________. What they do is ______________.**   **What I would change.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The old question costed in figures',
  'The new question quoted, with how it was delivered',
  'A cost with a duration on it',
  'The distinction between what the question changed and what it did not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their question**, at ordinary speed, and the room says what it would have told a panel about them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the old question costed, the new one quoted with its delivery, the cost in time, and the distinction at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the old question in figures, the new one quoted with its delivery, a cost with a duration, and the distinction between what changed and what did not.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Ask your question across the room, at ordinary speed, with nothing in front of it.** ⚠ The room listens for the apology and says how many words of it they heard. **Most people hear between four and eleven in their own.** Then the sentence the cycle ends on, which is Mr Attar\'s: **I was the only one of the four candidates who had said it out loud.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do the thing the cycle refuses to let you avoid: **write the answer you would not want to your own question**, and say whether you would still take the post. **If you would still take it whatever the answer, the question was decoration** — **go back and write one you would mind the answer to.** **And write the one-year question out as well, in your own words**, even if you decide not to use it: **a panel that cannot say what success would look like in twelve months has told you something no reference would have.** **13.5 is the one-sentence answer** — **about money**, which is the hardest sentence in the room and the shortest.'));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  One sentence about money'));
out.push(p('**Function:** handling the question about money in one sentence   ·   **Grammar:** the figure, the reason, and no third sentence   ·   **Pronunciation:** the figure said without a rise, and the silence after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, and nobody has to use a real number. A asks _what are you looking for?_ ⚠ **B answers and then counts their own words.** **Most answers run to between forty and ninety, and the figure usually arrives last or not at all.** Then B does it again in under fifteen.'));
out.push(board('Well, it depends really on the whole package, and I am fairly flexible…', 'Eight hundred thousand a month, which is what the February scale puts the work at.'));
out.push(p('**b**  Which answer is one sentence with a figure and a reason? **1** _I am flexible._  **2** _Whatever you think is fair._  **3** _Eight hundred thousand a month, which is what the February scale puts this work at._  **4** _I would not want to undersell myself but I am not unreasonable either._  **5** _I am currently on seven hundred and fifty and I would be looking for a modest increase._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the one sentence contains, and what does she say about the third sentence?   **A** a range and an apology; the third sentence should justify the range   **B** **a figure and the reason for it** — and **there is no third sentence**, because the third sentence is always the one that negotiates against yourself   **C** a figure only; the third sentence should ask about benefits'));
out.push(p('**b**  Listen again. **1** What does Mrs Sweidan say she said after her figure, and what happened?   **2** What does Ms Huda say about ranges?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  The figure, the reason, and nothing', [
  ['Ms Huda', 'Mrs Sweidan. _What are you looking for?_'],
  ['Lubna', 'I gave a figure. Then I said _but obviously I am flexible on that._'],
  ['Ms Huda', '**And what did you get?**'],
  ['Lubna', 'The figure I had said, minus the flexibility. ⚠ **They took the second sentence as the offer**, which I now think is exactly what it was.'],
  ['Ms Huda', '**It is what it was, and she is not being hard on herself.** ⚠ **The third sentence in this answer is always a negotiation against yourself**, and you are the only person in the room doing any negotiating.'],
  ['Omar', 'So the answer is one sentence.'],
  ['Ms Huda', '**One sentence with two things in it: a figure, and the reason for that figure.** _Eight hundred thousand a month, which is what the February scale puts this work at._ ⚠ **Then stop and let it be uncomfortable for four seconds, because it is their turn.**'],
  ['Adnan', 'Why does the reason matter? They are not going to check it.'],
  ['Ms Huda', '**Because a figure with a reason is a position and a figure without one is a wish.** ⚠ **A wish can be refused; a position has to be argued with** — **and most people will not argue with a scale, a published rate or a documented comparison, because arguing means producing one of their own.**'],
  ['Dima', 'And if you genuinely do not know what the work pays?'],
  ['Ms Huda', '**Then say the thing you do know and name what it is.** _I have been doing the same work at seven-fifty; I am asking for eight-fifty because the specification adds the four sites._ ⚠ **That is a reason and it is checkable.** **_It is what I am worth_ is not a reason, it is a feeling with a number attached.**'],
  ['Rim', 'What about a range? Everybody says give a range.'],
  ['Ms Huda', '⚠ **A range is one number and it is the bottom one.** **Nobody has ever been offered the top of a range they gave themselves.** **If you must give one, make the bottom the number you actually want and let the top do whatever it does.**'],
  ['Bassel', 'And if they ask first and you have not decided?'],
  ['Ms Huda', '**Then you have made the mistake earlier, before the room.** ⚠ **The figure is decided at a table with a piece of paper on it, not in a chair with three people looking at you.** **Write it down the night before and take the decision out of the room.**'],
  ['Jad', 'Is it ever right to refuse the question?'],
  ['Ms Huda', '**Rarely, and never by saying _I would rather not say._** ⚠ **If you must defer, defer to a document and a date:** _I would rather see the specification first; may I come back to you on Thursday with a figure?_ **That is a deferral with a mechanism in it**, and it is the only version that does not read as evasion.'],
  ['Mazen', 'And saying the number out loud? It is the hardest sentence in the interview.'],
  ['Ms Huda', '🔊 **It is, and the difficulty is audible in one feature: the rise.** ⚠ _Eight hundred thousand?_ **A figure said with a rise is an offer to be talked down and everybody in the room hears it.** **Say it flat, and then say nothing at all.**'],
]));
out.push(sp());
out.push(box('Language box – the one-sentence answer about money', [
  '**One sentence, two things: a figure and the reason for it.** _Eight hundred thousand a month, which is what the February scale puts this work at._ ⚠ **Then stop, and let four seconds be uncomfortable, because it is their turn.**',
  '⚠ **There is no third sentence, and the third sentence is always a negotiation against yourself.** _But obviously I am flexible on that._ **They will take the second sentence as the offer, which is what it is** — **and you are the only person in the room doing any negotiating.**',
  '**Why the reason matters even though nobody will check it.** ⚠ **A figure with a reason is a position; a figure without one is a wish.** **A wish can be refused; a position has to be argued with** — **and arguing means producing a scale, a rate or a comparison of their own.**',
  '**If you do not know what the work pays, say what you do know and name it.** _I have been doing the same work at seven-fifty; I am asking for eight-fifty because the specification adds the four sites._ ⚠ **That is checkable.** **_It is what I am worth_ is a feeling with a number attached.**',
  '⚠ **A range is one number and it is the bottom one.** **Nobody has ever been offered the top of a range they gave themselves.** **If you must give one, make the bottom the number you actually want.**',
  '**The figure is decided the night before, at a table, on paper.** ⚠ **Not in a chair with three people looking at you.** **Take the decision out of the room before you go into it.**',
  '**Deferring, if you must: never _I would rather not say._** ⚠ **Defer to a document and a date.** _I would rather see the specification first; may I come back to you on Thursday with a figure?_ **A deferral with a mechanism in it is the only version that does not read as evasion.**',
  '**Pronunciation.** 🔊 **Track 13.10** **The difficulty is audible in one feature: the rise.** ⚠ _Eight hundred thousand?_ **A figure said with a rise is an offer to be talked down, and everybody in the room hears it.** **Say it flat, and then say nothing at all.**',
  '**Practise:** One sentence, a figure and a reason, said flat. **1** with a published scale  **2** with your current figure and what the post adds  **3** a range whose bottom is the real number  **4** a deferral with a document and a date  **5** the same answer with a rise, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the question from the card. B gives **one sentence: a figure and a reason**, said flat, and then **says nothing for four seconds while A counts them.** ⚠ **Two rows on each card are designed to pull a third sentence out of you**, and B must not give one. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', '__________ , **which is** __________. _(flat, then four seconds of nothing)_'],
  ['A', '_(counts)_ one, two, three, four.'],
]));
out.push(table(['Card A – the question', 'Card B – the question'], [
  ['_What are you looking for?_', '_What are your salary expectations?_'],
  ['_⚠ That is rather more than we had in mind._', '_⚠ Is there any flexibility in that?_'],
  ['_What are you on at the moment?_', '_What would it take to get you here?_'],
  ['_⚠ (silence, and a raised eyebrow)_', '_⚠ Most people in this post are on rather less._'],
  ['_Have you seen the published scale?_', '_Would you take it at the bottom of the band?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the figure, the reason, and whether a third sentence appeared. Then the count: **the four rows marked ⚠ produced a third sentence in most pairs**, and three of the four are not questions at all — a silence, an eyebrow and a statement. ⚠ **The third sentence is pulled out by things that are not questions**, and the defence is to treat a non-question as a non-question.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own one sentence — **figure and reason** — on a piece of paper, **tonight\'s decision made at a table.** ⚠ **No range unless the bottom of it is the number you want.**'));
out.push(p('**b**  Swap and perform, and your partner does **the eyebrow**. ⚠ Then they do it again and **you answer the eyebrow with one more sentence** — and both of you see what that sentence did to the figure.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna gave a figure and then said but obviously I am flexible on that, and she got the figure she had said minus the flexibility: they took the second sentence as the offer, which she now thinks is exactly what it was. It is what it was, and she is not being hard on herself — the third sentence in this answer is always a negotiation against yourself, and you are the only person in the room doing any negotiating. So the answer is one sentence with two things in it: a figure, and the reason for that figure. Eight hundred thousand a month, which is what the February scale puts this work at. Then stop, and let it be uncomfortable for four seconds, because it is their turn. Adnan asked why the reason matters when nobody is going to check it, and because a figure with a reason is a position and a figure without one is a wish: a wish can be refused, a position has to be argued with, and most people will not argue with a scale or a published rate because arguing means producing one of their own. Dima asked what to do if you genuinely do not know what the work pays, and then say the thing you do know and name what it is — I have been doing the same work at seven-fifty and I am asking for eight-fifty because the specification adds the four sites. That is checkable, and it is what I am worth is a feeling with a number attached. Rim asked about ranges, since everybody says give a range, and a range is one number and it is the bottom one: nobody has ever been offered the top of a range they gave themselves. And Bassel asked what to do if you have not decided, and then the mistake was made earlier — the figure is decided at a table with a piece of paper on it, the night before, and not in a chair with three people looking at you. Jad asked whether it is ever right to refuse the question, and rarely, and never by saying you would rather not say: if you must defer, defer to a document and a date — I would rather see the specification first, may I come back to you on Thursday with a figure — because a deferral with a mechanism in it is the only version that does not read as evasion. And Mazen said saying the number out loud is the hardest sentence in the interview, which it is, and the difficulty is audible in one feature: the rise. A figure said with a rise is an offer to be talked down and everybody in the room hears it._'));
out.push(p('**Listener task:** write your partner\'s one sentence and what their answer to the eyebrow did to it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lubna writes to a colleague before that colleague\'s interview. Answer the questions.'));
out.push(model([
  '**WHAT I SAID AFTER THE FIGURE** · L. Sweidan · 12 October · _for H., on Thursday_',
  '**You asked me what to say about money and I am going to tell you what I said, because what I said cost me about ninety thousand a month and I know the exact sentence.**',
  '**The sentence before it was right.** I had a figure and I had a reason — **the published scale for the grade, with the site allowance that the specification adds** — and I said it flat and did not look away. ⚠ **That part took eleven words and was the best-prepared thing I said all morning.**',
  '**Then I said: _but obviously I am flexible on that._** ⚠ **Six words.** **The offer came at the figure minus the flexibility**, and I want to be precise about why that is not unfair of them: **I had made two offers in four seconds and they accepted the lower one.** **Anybody would.**',
  '**What I think the six words were doing.** They were not about money. ⚠ **They were about the four seconds of silence after the figure**, which I could not sit through. **The silence is the whole mechanism**: the figure is theirs to answer and the silence is their turn, **and I took their turn away from them because it was uncomfortable.**',
  '**So the practical advice is not about what to say. It is about what to do with your hands for four seconds.** ⚠ **Count them.** **One, two, three, four, and somebody else will speak** — **they always do, and it will not be you.**',
  '**And one thing I would not change.** **The reason.** ⚠ **Nobody argued with the scale**, and I now think nobody ever does, **because arguing with a published figure means producing a different published figure and they have not got one in the room.** **The reason is why the first number survived at all.**',
  '**What to do on Thursday.** **One sentence. Figure, reason, flat. Then your hands and four seconds.** ⚠ **And if they do the eyebrow, the eyebrow is not a question** — **and you do not have to answer things that are not questions.** **If they ask a second time in words, answer it in the same words you used the first time**, because a figure repeated unchanged is a position and a figure adjusted on being asked twice was never one.',
]));
out.push(item('1', 'What does she say the eleven words did, and what did the six words do?'));
out.push(item('2', 'What does she say the six words were really about?'));
out.push(item('3', 'What is the one thing she would not change, and why?'));
out.push(writers([
  'A note to somebody about to do the thing you got wrong: **what it cost, in figures, in the first line** → **the part that was right** → **the exact sentence that was wrong, quoted and counted** → **what you now think that sentence was doing** → **the practical advice, which is usually not about words** → **what you would not change** → **and what to do on the day.**',
  '⚠ **Put the cost in the first sentence and make it a number.** _What I said cost me about ninety thousand a month and I know the exact sentence._ **A note that works up to the cost has lost the reader before it arrives.**',
  '**Quote the wrong sentence and count its words.** _But obviously I am flexible on that. Six words._ ⚠ **Then defend the other side:** _I had made two offers in four seconds and they accepted the lower one. Anybody would._ **A note that blames the reader of your own sentence teaches nothing.**',
  '**Find what the words were really about.** _They were about the four seconds of silence, which I could not sit through._ ⚠ **The real advice is almost never about the words**, and a note that stops at the words has stopped one step early.',
  '⚠ And **name the thing that worked, with its mechanism.** _Nobody argued with the scale, because arguing with a published figure means producing a different published figure._ **One paragraph of what to keep makes the rest of the note usable on Thursday.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note to somebody about to do it (80 words or more).'));
out.push(p('**WHAT I SAID AFTER ______________** · ______________ · ______________ · _for _______________   **You asked me ______________, and what I said cost ______________ and I know the exact sentence.**   **The sentence before it was right.** ______________. ⚠ **That took ______________ words and was ______________.**   **Then I said: _"______________."_** ⚠ **______ words.** ______________, **and I want to be precise about why that is not unfair of them: ______________.**   **What I think those words were doing.** ⚠ **They were not about ______________. They were about ______________.**   **So the practical advice is not about what to say.** ⚠ ______________.   **And one thing I would not change.** ______________, **because ______________.**   **What to do on ______________.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The cost in the first sentence, as a figure',
  'The wrong sentence quoted and counted, and the other side defended',
  'What the words were really about',
  'One paragraph on what you would not change, with its mechanism',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their wrong sentence** and say how many words it was, and the room says what it offered.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the cost first and in figures, the wrong sentence quoted and counted, what it was really about, and what you would keep.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the cost as a figure in the first sentence, the wrong sentence quoted and counted, what it was really about, and what you would keep.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your one sentence to the room, flat, and then count four seconds out loud together.** ⚠ Nobody finds the four seconds easy and that is the content of the cycle. Then the sentence the cycle ends on, which is Mrs Sweidan\'s: **the eyebrow is not a question, and you do not have to answer things that are not questions.**'));
out.push(hw('Write the note (80+ words). ⚠ Then do the thing that takes a table and a piece of paper: **write your own figure and your own reason, tonight, and put it where you will find it.** **13.6 writes all four competency answers out** — eighty words each, and they are the pages you take in with you.'));

// ===================== 13.6 =====================
out.push(h2('13.6  The four, written out'));
out.push(p('**Function:** writing the four competency answers out, eighty words each   ·   **Grammar:** the written answer as rehearsal, not as a script   ·   **Pronunciation:** reading a written answer without the reading audible in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A reads one of their 13.1 answers **off the page, word for word.** B says where they can hear the page. ⚠ Then A says the same answer **without looking at it** and B says what was lost and what was gained. **Something is always lost; it is usually a figure.**'));
out.push(board('_(read off the page)_ The situation was that nine of our forty consignments…', '_(from the page, not off it)_ Nine of our forty went out incomplete. I wrote to the distributor…'));
out.push(p('**b**  Which of these is a rehearsal and which is a script? **1** _four answers written out, read twice, then put away_  **2** _four answers written out and memorised word for word_  **3** _four answers written out and reduced to four lines of figures_  **4** _no writing at all; it is better to be natural_  **5** _four answers written out, and the four fourth sentences learned exactly_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the writing is for, and what does she say should be memorised?   **A** the writing is a script; memorise all of it   **B** **the writing is for finding the missing figure** — and the only thing to memorise is **the figures**, because they are the only part a panel can check   **C** the writing is for confidence; memorise the opening'));
out.push(p('**b**  Listen again. **1** What does Mr Tahhan say happened when he wrote his out?   **2** What does Ms Huda say about the eighty words?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  Written, and then put away', [
  ['Ms Huda', 'Mr Tahhan wrote four answers out before his interview. What happened while you were writing them?'],
  ['Bassel', 'Three of the four had no number in the first sentence. ⚠ **I would not have known that from saying them** — they sounded perfectly all right out loud.'],
  ['Ms Huda', '**That is what the writing is for, and it is the only thing it is for.** ⚠ **Writing is slower than speech, and the gap between the two is where you see what is missing.** **A spoken answer covers its own holes with fluency; a written one cannot.**'],
  ['Dima', 'And then you put them away.'],
  ['Ms Huda', '**You read them twice and you put them away.** ⚠ **A memorised answer arrives in the room at the wrong speed** — **about a fifth faster than speech and with no hesitation in it at all** — **and a panel hears that before it hears a word of the content.**'],
  ['Rim', 'Is there anything you do memorise?'],
  ['Ms Huda', '**The figures.** ⚠ **Nine of forty. Eleven of fifteen. Thirty-one of forty. Twelve days.** **Those are the only part of your answer a panel can check and the only part you cannot improvise**, and a figure half-remembered in a room is worse than no figure at all.'],
  ['Omar', 'Why eighty words? It seems arbitrary.'],
  ['Ms Huda', '**It is not arbitrary; it is forty seconds of speech.** ⚠ **If your four sentences will not go into eighty words on paper, they will not go into forty seconds in a room**, and the thing you will cut under pressure is the fourth sentence. **Cut it at the table instead, see how much you hate it, and then put it back.**'],
  ['Adnan', 'Mine came out at a hundred and forty.'],
  ['Ms Huda', '**Then sixty of them are the situation**, and that is true of nearly every first draft. ⚠ **The situation is the part you know best and it is the part they need least.** **Twenty words of situation, twenty of action, twenty of result, twenty of change.**'],
  ['Mazen', 'And reading them aloud? To check them.'],
  ['Ms Huda', '🔊 **Read them aloud once and listen for one thing: the comma that is really a full stop.** ⚠ **Written answers run long sentences together, and a sentence you cannot say in one breath is a sentence the panel will lose the end of.** **Break it where you breathe.**'],
  ['Lubna', 'Does the order of the four matter? I put my best one last.'],
  ['Ms Huda', '**Put it second.** ⚠ **The first answer is heard while the panel is still settling and the last is heard while they are thinking about the time** — **and the second is the only one that gets their whole attention.**'],
  ['Jad', 'And if a question comes that is not one of the four?'],
  ['Ms Huda', '**Then you have the shape and you have not got the words, which is the right way round.** ⚠ **Four written answers do not prepare you for four questions; they prepare you for the shape of any question**, **and the shape is what you are actually taking into the room.**'],
]));
out.push(sp());
out.push(box('Language box – writing it out', [
  '**What the writing is for, and it is the only thing it is for.** ⚠ **Finding the missing figure.** **Writing is slower than speech and the gap between the two is where you see what is missing** — **a spoken answer covers its holes with fluency; a written one cannot.**',
  '**Read them twice and put them away.** ⚠ **A memorised answer arrives at the wrong speed** — about a fifth faster than speech, with no hesitation in it — **and a panel hears that before it hears a word of the content.**',
  '**Memorise one thing only: the figures.** ⚠ **Nine of forty. Eleven of fifteen. Twelve days.** **They are the only part a panel can check and the only part you cannot improvise**, and **a figure half-remembered in a room is worse than no figure at all.**',
  '**Why eighty words: because eighty words is forty seconds of speech.** ⚠ **If the four sentences will not go into eighty words on paper, they will not go into forty seconds in a room** — **and the thing you will cut under pressure is the fourth sentence.** **Cut it at the table, see how much you hate it, and put it back.**',
  '**The division, and the first draft always breaks it in the same place.** **Twenty words of situation, twenty of action, twenty of result, twenty of change.** ⚠ **A hundred-and-forty-word draft has sixty words of situation** — **the part you know best and they need least.**',
  '**Read aloud once, and listen for one thing: the comma that is really a full stop.** ⚠ **Written answers run long sentences together, and a sentence you cannot say in one breath is one the panel will lose the end of.** **Break it where you breathe.**',
  '**And what four written answers actually prepare you for.** ⚠ **Not four questions.** **The shape of any question** — **and the shape is what you take into the room, which is why you can afford to leave the words at home.**',
  '**Pronunciation.** 🔊 **Track 13.12** **Read it from the page, not off it.** ⚠ **The difference is audible in the first four words** — a read answer begins on an even stress and a spoken one does not — **and the fix is to look up before you start and not down.**',
  '**Practise:** Write and then say, in eighty words and forty seconds. **1** one with three figures  **2** one cut from a hundred and forty  **3** one with the fourth sentence restored after cutting it  **4** one read from the page  **5** the same one said without the page',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the draft from the card and **B cuts it to eighty words out loud**, saying what goes. ⚠ **In two rows on each card the thing B will reach for first is the fourth sentence** — **and B must find eighty words without touching it.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the draft, ______ words)_ __________.'],
  ['B', 'Out: __________. Kept: __________. **The fourth sentence stays.**'],
]));
out.push(table(['Card A – the draft', 'Card B – the draft'], [
  ['_140 words; 60 of them situation._', '_120 words; the result has no figure._'],
  ['_⚠ 95 words; every word is working._', '_⚠ 88 words; the fourth sentence is 30 of them._'],
  ['_160 words; two situations in one answer._', '_110 words; the action is described twice._'],
  ['_⚠ 84 words; the figures are in sentence three only._', '_⚠ 92 words; the reason is given three times._'],
  ['_130 words; the fourth sentence is "nothing"._', '_150 words; the first sentence is an opinion._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the cuts for each draft and the final count. Then the four rows marked ⚠: **each is a draft where the easy cut is the wrong one**, and a pair that reached for the fourth sentence should say so. ⚠ **The commonest right answer is the second half of the situation**, which is where sixty of the hundred and forty always are.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **all four** of your answers out, eighty words each. ⚠ **Count them.** Then do the test: **cover the page and say one of them**, and have your partner write down the figures you produce. **Compare with the page.**'));
out.push(p('**b**  Swap pages. Your partner reads one of your answers aloud **as written**, and you listen for the comma that is really a full stop. ⚠ Then they hand the page back and you say the same answer **looking at them and not at it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel wrote four answers out before his interview, and what happened while he was writing them is that three of the four had no number in the first sentence. He would not have known that from saying them — they sounded perfectly all right out loud. That is what the writing is for and it is the only thing it is for: writing is slower than speech, and the gap between the two is where you see what is missing, because a spoken answer covers its own holes with fluency and a written one cannot. Dima said and then you put them away, and you read them twice and put them away: a memorised answer arrives in the room at the wrong speed, about a fifth faster than speech and with no hesitation in it at all, and a panel hears that before it hears a word of the content. Rim asked whether there is anything you do memorise, and the figures — nine of forty, eleven of fifteen, twelve days. Those are the only part a panel can check and the only part you cannot improvise, and a figure half-remembered in a room is worse than no figure at all. Omar asked why eighty words, since it seems arbitrary, and it is not arbitrary but forty seconds of speech: if the four sentences will not go into eighty words on paper they will not go into forty seconds in a room, and the thing you cut under pressure is the fourth sentence. Adnan said his came out at a hundred and forty, and then sixty of them are the situation, which is true of nearly every first draft — the situation is the part you know best and the part they need least, and the division is twenty words of situation, twenty of action, twenty of result and twenty of change. Mazen asked about reading them aloud to check them, and read them aloud once and listen for one thing: the comma that is really a full stop. Written answers run long sentences together, and a sentence you cannot say in one breath is a sentence the panel will lose the end of, so break it where you breathe. And Jad asked what happens if a question comes that is not one of the four, and then you have the shape and you have not got the words, which is the right way round: four written answers do not prepare you for four questions, they prepare you for the shape of any question, and the shape is what you are actually taking into the room._'));
out.push(p('**Listener task:** write the number of figures your partner produced from memory against the number on their page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Hiba\'s page about writing her own four out. Answer the questions.'));
out.push(model([
  '**EIGHTY WORDS, FOUR TIMES** · H. Nasser · 19 October',
  '**I have been assessed against published criteria and I have had to sign the assessment, which most people in this room have not.** ⚠ **It did not make writing these four any easier, and I want to say why, because the reason is useful.**',
  '**What I expected.** That having been assessed, I would know what assessors want. ⚠ **What I actually know is what one assessor wanted on one morning in November**, and the three words she wrote — _range not demonstrated_ — **took me a year to understand and are still the only three I can quote.**',
  '**What happened when I wrote the four out.** Three of them were about the same incident from three angles. ⚠ **I had four answers and one occasion**, and I did not see it until they were on one sheet. **A panel asking four questions would have heard the same story four times**, which is worse than having only one story, because it looks like having four.',
  '**What I did about it.** I went looking for occasions rather than for answers. **I now have four from four different terms**, and two of the four are things I would not have volunteered: **the observation I failed, and a lesson I abandoned eleven minutes in.** ⚠ **Both of them have better fourth sentences than my successes do**, which I should have predicted and did not.',
  '**The counting.** My first drafts were **134, 96, 171 and 88 words.** ⚠ **In the two long ones, the situation was more than half.** The 88 was the abandoned lesson, and it was short **because I have told nobody about it and therefore have no practised version to pad it with.** **Short, in a first draft, turns out to be a sign of honesty rather than of thinness.**',
  '**And the thing I shall actually carry.** ⚠ **Not the words.** **Eight figures on one line**: _3 words · 1 year · 11 minutes · 4 terms · 2 of 4 · 19 of 24 · 6 weeks · 1 signature._ **I can hold eight figures under pressure and I cannot hold three hundred and twenty words**, and the figures are the only part anybody can check.',
  '**What I would change.** **I would have written these two years ago, when nothing depended on them.** ⚠ **I wrote them this month because there is a post**, and a page written because something depends on it is written by a person who wants a particular answer — **which is the condition this whole course has been teaching us to notice in other people.**',
]));
out.push(item('1', 'What did she expect having been assessed would give her, and what does she actually know?'));
out.push(item('2', 'What did she find when the four were on one sheet, and what did she do about it?'));
out.push(item('3', 'What will she carry into the room, and what would she change?'));
out.push(writers([
  'A page about writing your four out: **what you expected to find** → **what writing them actually showed** → **what you did about it** → **the counting, with the real word counts** → **the thing you will carry instead of words** → **and what you would change.**',
  '⚠ **Print the real word counts.** _134, 96, 171 and 88._ **Four honest numbers do more for a reader than any description of the process**, and the pattern inside them is usually the finding.',
  '**Say what the short draft means.** _It was short because I have told nobody about it and therefore have no practised version to pad it with._ ⚠ **Short in a first draft is a sign of honesty rather than of thinness**, and most writers assume the opposite about their own.',
  '**Name what you will carry, and make it small enough to hold.** _Eight figures on one line._ ⚠ **A page that ends _and then I learned them_ has not finished.** **Say what survives pressure and what does not.**',
  '⚠ And **turn the last paragraph on yourself.** _A page written because something depends on it is written by a person who wants a particular answer._ **That is the course\'s own instrument applied to the writer**, and a page that applies it only to other people has not understood it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about writing your four out (80 words or more).'));
out.push(p('**EIGHTY WORDS, FOUR TIMES** · ______________ · ______________   **What I expected.** ______________. ⚠ **What I actually ______________ is ______________.**   **What happened when I wrote them out.** ______________. ⚠ **I had ______________ and ______________**, and I did not see it until ______________.   **What I did about it.** ______________. **Two of the four are things I would not have volunteered: ______________ and ______________.** ⚠ **Both have better fourth sentences than my successes do.**   **The counting.** ______, ______, ______ and ______ words. ⚠ **In the long ones, ______________.** **The short one was short because ______________.**   **And the thing I shall carry.** ⚠ **Not the words.** ______________.   **What I would change.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The four real word counts printed',
  'What the short draft means, said explicitly',
  'The thing carried instead of words, small enough to hold',
  'A last paragraph that turns the instrument on the writer',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their four word counts and their one line of figures**, and the room says what the pattern in the counts shows.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the real counts, the meaning of the short one, what you carry, and the last paragraph turned on yourself.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the four real word counts, the meaning of the short draft, the thing carried instead of words, and the instrument turned on the writer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one of your four aloud from the page, then look up and say it again without it.** ⚠ The room writes down the figures both times and says which ones went missing. **Something always does.** Then the sentence the cycle ends on, which is Mrs Nasser\'s: **I can hold eight figures under pressure and I cannot hold three hundred and twenty words.**'));
out.push(hw('Write all four out (80 words each) and **count them.** ⚠ Then make your own one line of figures and carry it for a week. **13.7 turns the whole unit round**: you explain a job description to somebody who is not sure they can do it.'));

// ===================== 13.7 =====================
out.push(h2('13.7  Review & Mediate: The job description and the person reading it'));
out.push(p('**Function:** explaining a job description to somebody who is not sure they can do it   ·   **Recycling:** Unit 13   ·   **Exam practice:** B2 First Reading and Use of English Part 6 · Writing Part 1 · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I had used a figure from 2019 before I would send it.  **2** If what you are asking is whether we have procedures, I am answering yes.  **3** She was appointed in August, which the post did not exist in March.  **4** He decided applying for the post after reading the line.  **5** He draw on four terms of his own teaching.  **6** A question who answer you can predict is not a question.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the job description, and the two readings of it that reached Ms Huda in the same week.'));
out.push(box(null, [
  '**THE DESCRIPTION, AND TWO PEOPLE READING IT** _(one post, one page, two readers)_',
  '**The page.** _"**Coordinator, records.** You will own the handover process across four sites. **Essential:** five years\' experience in a records environment; demonstrated ability to work under pressure; excellent communication skills; a recognised qualification in information management **or equivalent experience.** **Desirable:** familiarity with two or more record systems; experience of training others."_',
  '**The first reader.** _"I have four years, not five. I have no qualification. I am not going to apply."_',
  '**The second reader.** _"I have eleven years, three systems and I have trained nine people. I shall apply and I shall ask for the top of the band."_',
  '⚠ **Both readers are the same person\'s colleagues, and the first reader is the stronger candidate.**',
  '**And the thing neither of them noticed.** **_Or equivalent experience_**, which is in the Essential list, **and which the panel put there deliberately.**',
  '**The question for the cycle.** _What does this page actually require?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a job description is a record of, and what is the one question that settles whether a requirement is real?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  What the page actually requires', [
  ['Ms Huda', 'Two readings of one page, in the same week, by two colleagues. Mrs Khoury — which of the two readers is right about the page?'],
  ['Dima', 'Neither, and the first one is the better candidate. ⚠ **She has read _five years_ and stopped**, and the line goes on for six more words.'],
  ['Ms Huda', '**Then do the mediation, and it is three moves.** One: **read every Essential line to the end**, including the clause after the comma. Two: **ask of each requirement — can it be failed?** Three: ⚠ **separate what the page says from what the page is a record of.**'],
  ['Omar', 'What is it a record of?'],
  ['Ms Huda', '⚠ **An argument that happened in a room you were not in.** **_Or equivalent experience_ is there because somebody fought for it**, probably after losing a good candidate to the sentence before it. **Every strange clause in a job description is a scar.**'],
  ['Adnan', 'I write these. That is exactly what they are.'],
  ['Ms Huda', '**Say more, Mr Barghouti, because nobody else in this room has drafted one.**'],
  ['Adnan', '⚠ **Three of the seven lines on that page cannot be failed.** _Excellent communication skills. Demonstrated ability to work under pressure._ **Nobody has ever been rejected on those** — they are there so that the panel can refuse somebody afterwards **without having written down the real reason**, and I have watched it done twice.'],
  ['Ms Huda', '⚠ **Which is the finding of this cycle: a requirement that cannot be failed is not a requirement, it is a reserve power.** **And 16.1 is where you learn to write criteria that can be failed**, so hold that.'],
  ['Rim', 'So what does the first reader do?'],
  ['Ms Huda', '**She applies, and she answers the real requirement, which is the four sites.** ⚠ **The number in _five years_ is a proxy and the page tells you so six words later. The number in _four sites_ is not a proxy** — **it is the work.**'],
  ['Bassel', 'How do you tell a proxy from the work?'],
  ['Ms Huda', '**One question, and it is the one that settles all of these.** ⚠ **_If I could do the work, would this line still matter?_** **If no, it is a proxy.** **Five years is a proxy for judgement; four sites is the job.**'],
  ['Mazen', 'And the second reader, who is going to ask for the top of the band?'],
  ['Ms Huda', '**He has read the Desirable list as a scoreboard**, which is the other way of getting it wrong. ⚠ **Desirable lines do not add up to a stronger claim; they are the things the panel will settle for if nobody has the Essential ones.** **He is bidding on the wrong column.**'],
  ['Jad', 'And what do you actually say to the first reader? That is the hard part.'],
  ['Ms Huda', '🔊 **Not _you should apply._** ⚠ **Read her the line to the end, in her hearing, and stop.** **_Or equivalent experience._** **Then ask her the one question about the four sites and let her answer it.** **A person talked into applying withdraws in a fortnight; a person who has read the line herself does not.**'],
]));
out.push(sp());
out.push(box('Language box – reading a job description', [
  '**The three moves.** **1** **Read every Essential line to the end**, including the clause after the comma. **2** **Ask of each requirement: can it be failed?** ⚠ **3** **Separate what the page says from what the page is a record of.**',
  '⚠ **A job description is a record of an argument that happened in a room you were not in.** **_Or equivalent experience_ is there because somebody fought for it**, probably after losing a good candidate to the sentence before it. **Every strange clause in a job description is a scar.**',
  '**The finding, and Mr Barghouti has drafted these.** ⚠ **A requirement that cannot be failed is not a requirement; it is a reserve power.** _Excellent communication skills. Demonstrated ability to work under pressure._ **Nobody has ever been rejected on those** — **they are there so that a panel can refuse somebody without writing down the real reason.** _(And **16.1** is where you learn to write criteria that can be failed.)_',
  '**The one question that settles all of them.** ⚠ **_If I could do the work, would this line still matter?_** **If no, it is a proxy.** **Five years is a proxy for judgement; four sites is the job.**',
  '**The other way of getting it wrong, and it is the confident reader\'s way.** ⚠ **Desirable lines are not a scoreboard.** **They do not add up to a stronger claim; they are what the panel will settle for if nobody has the Essential ones.** **A reader who bids on that column is bidding on the wrong one.**',
  '**And what you actually say to somebody who is not going to apply.** ⚠ **Not _you should apply._** **Read them the line to the end, in their hearing, and stop.** **Then ask the one question and let them answer it.** **A person talked into applying withdraws in a fortnight; a person who has read the line themselves does not.**',
  '**Pronunciation.** 🔊 **Track 13.14** **Read the Essential line to the end and stop at the full stop, not at the comma.** ⚠ **Most readers hear _five years\' experience_ and stop breathing**; the six words that follow it are said quietly in every version of this page and they are the six that matter.',
  '**One warning about the mediation, because it is the one every mediator fails.** ⚠ **Do not tell either reader what to do.** The mediator\'s work is **the three moves and the one question**, and nothing else: **advice given here is advice about somebody else\'s career from somebody who has read one page of it.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a description and two readings and does **not** show them. A reads the page, then both readings. B makes the three moves: **which lines can be failed, which are proxies, and what the page is a record of.** ⚠ **In one of the two pairs the two readings are not both honest** — one reader has added a requirement that is not on the page. Change roles with the other pair.'));
out.push(table(['Pair A – coordinator, records', 'Pair B – supervisor, four sites'], [
  ['_First reader: "four years, not five — I shall not apply."_', '_First reader: "it says a driving licence; I have not got one."_'],
  ['_Second reader: "eleven years, three systems — top of the band."_', '_⚠ Second reader: "it does not say a licence anywhere."_'],
  ['_The page: "five years… or equivalent experience."_', '_The page: "you will visit four sites a month."_'],
  ['_⚠ Three Essential lines cannot be failed._', '_⚠ The licence is not on the page; the first reader supplied it._'],
  ['_⚠ Both readings are honest and both are wrong._', '_⚠ One reader has added a requirement that is not there._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the proxies, the unfailable lines and the record for each pair. ⚠ **Pair B is the one with the invented requirement** — _a driving licence_ appears nowhere on the page — **and the distinction is the one the cycle rests on: misreading a line is honest and supplying one is not.** About half the pairs call Pair B a misreading; **the test is whether the words are on the page.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the job description you brought and do the three moves on it in writing: ⚠ **mark every line that cannot be failed, every line that is a proxy, and the one clause that is a scar.** Then the question the cycle ends on: **write the one line on that page that is actually the work**, and say whether you could do it.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the page actually requires:  _Two readings of one page in the same week, by two colleagues. Asked which reader is right about the page, Dima said neither, and the first one is the better candidate: she has read five years and stopped, and the line goes on for six more words. So the mediation, which is three moves: read every Essential line to the end including the clause after the comma; ask of each requirement whether it can be failed; and separate what the page says from what the page is a record of. Omar asked what it is a record of, and it is a record of an argument that happened in a room you were not in — or equivalent experience is there because somebody fought for it, probably after losing a good candidate to the sentence before it, and every strange clause in a job description is a scar. Adnan, who writes these, said that is exactly what they are, and that three of the seven lines on that page cannot be failed: excellent communication skills, demonstrated ability to work under pressure. Nobody has ever been rejected on those — they are there so that the panel can refuse somebody afterwards without having written down the real reason, and he has watched it done twice. Which is the finding: a requirement that cannot be failed is not a requirement, it is a reserve power. Rim asked what the first reader does, and she applies and answers the real requirement, which is the four sites: the number in five years is a proxy and the page says so six words later, and the number in four sites is the work. Bassel asked how you tell a proxy from the work, and one question settles all of them — if I could do the work, would this line still matter? And Mazen asked about the second reader, who has read the Desirable list as a scoreboard, which is the other way of getting it wrong: Desirable lines do not add up to a stronger claim, they are the things the panel will settle for if nobody has the Essential ones, and he is bidding on the wrong column. Jad asked what you actually say to the first reader, which is the hard part, and the answer is not that she should apply. Read her the line to the end, in her hearing, and stop — or equivalent experience — and then ask her the one question about the four sites and let her answer it. A person talked into applying withdraws in a fortnight; a person who has read the line herself does not._'));
out.push(p('**Listener task:** write the one line on your own page that is actually the work.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 6)', 7));
out.push(p('Six sentences have been removed from the text below. Choose from the sentences **A–G** the one which fits each gap (**1–6**). **There is one extra sentence which you do not need to use.**'));
out.push(box(null, [
  '**THE LINES NOBODY CAN FAIL**',
  'I have drafted job descriptions for nineteen years and I have never once rejected a candidate on the grounds of excellent communication skills. **(1)** ______ That is not a criticism of the phrase; it is a description of what it does.',
  'A requirement is a requirement when a candidate can read it and know whether they have failed it. _Five years in a records environment_ can be failed, and so can _experience of two or more systems_. **(2)** ______ They cannot be failed because nothing a candidate could write would settle them either way.',
  'Why, then, are they on every page? **(3)** ______ A panel that has decided against somebody for a reason it would rather not write down reaches for the line that cannot be failed, and the line is on the page precisely so that it can be reached for. I have watched this twice and I have done it once.',
  'The second thing a description does is record an argument. **(4)** ______ Somebody in that room had lost a good candidate to the sentence before it, and six words were the price of their agreement. A reader who stops at the comma never learns that the argument took place.',
  'There is a test that settles almost every line on such a page, and it takes four seconds. **(5)** ______ Five years is a proxy for judgement, and judgement is what the panel actually wants; four sites is not a proxy for anything, because it is the work itself.',
  'None of this makes the pages honest. **(6)** ______ What it does is let a reader tell the two kinds of line apart — and the reader who can do that applies for posts the page appears to exclude them from, which is the only practical use I have found for nineteen years of writing them.',
  '**A** Ask whether the line would still matter if you could already do the work.',
  '**B** Nor does it make them shorter, which is the complaint I hear most often.',
  '**C** The clause after the comma was fought for by one person in one meeting.',
  '**D** In nineteen years I have written that phrase, or one indistinguishable from it, into every page I have drafted.',
  '**E** Because a panel needs a line it can refuse on without explaining itself.',
  '**F** The best candidates read the Desirable list first, which is a mistake of a different kind.',
  '**G** But the two phrases about communication and pressure cannot.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a job description and its reader (80 words or more).'));
out.push(p('**ONE PAGE, TWO READERS** · ______________   **The page.** _"______________"_   **The first reader.** _"______________"_   **The second reader.** _"______________"_   **Which is right?** ⚠ **______________**, and ______________ **is the better candidate.**   **Lines that cannot be failed:** ______________. ⚠ **A requirement that cannot be failed is ______________.**   **Proxies:** ______________. **The work:** ______________.   **What the page is a record of.** ⚠ ______________ — **and ______________ is a scar.**   **And what I would say to the first reader.** ⚠ **Not ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every Essential line read to the end, including the clause after the comma',
  'The lines that cannot be failed, named',
  'Proxy and work separated by the one question',
  'What is said to the reader — and it is not _you should apply_',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The first essay of Book 2, and the shape has not changed since Unit 3: four paragraphs, one job each, the concession third with the objection in its first sentence and a figure in sentence four.** **What Book 2 adds is the stakes of the content**, and nothing about the form.',
  'In your English class you have been talking about how people are chosen for jobs. Your teacher has asked you to write an **essay**.',
  '_"Experience should matter more than qualifications when somebody is appointed."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view. Write **180–220 words**.',
  'Notes — write about: **1** what a qualification proves   **2** what experience proves   **3** ______________ _(your own idea)_',
  '⚠ **All three notes, and your own idea alone in the last paragraph, where it is read.** **A paragraph with two jobs loses the organisation mark.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ a figure from 2019 before anybody checked it.   a) have used   b) had used   c) was using',
  '2  If what you are asking is whether we have procedures, ___ yes.   a) then   b) so   c) that',
  '3  She was appointed to a post ___ did not exist in March.   a) what   b) which   c) who',
  '4  She had to ___ up on the two record systems before the interview.   a) brush   b) brushing   c) brushed',
  '5  A candidate who can ___ on four terms of her own teaching has four occasions, not one.   a) draw   b) drawn   c) drew',
  '6  Every ___ for the post was asked the same four badly written questions.   a) application   b) apply   c) applicant',
  '7  The page carried one ___ that nobody could possibly fail.   a) require   b) requiring   c) requirement',
  '8  By the time the offer came, she ___ about the question for nine days.   a) was thinking   b) had been thinking   c) has been thinking',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – eight short extracts).** 🔊 **Track 13.15** You will hear people talking in eight different situations. For questions **1–8**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  You hear a man talking about an interview answer. What does he say he left out?   **A** the figures   **B** what he would change   **C** the result',
  '**2**  You hear a woman talking about a question she was asked. What does she say about it?   **A** it could not take a figure   **B** it was unfair   **C** she had prepared for it',
  '**3**  You hear a man describing a letter he wrote. What was the problem with it?   **A** it was too long   **B** the reader could not tell which thing he did first   **C** the figures were wrong',
  '**4**  You hear a woman talking about money in an interview. What does she regret?   **A** the figure she gave   **B** the sentence after the figure   **C** not giving a range',
  '**5**  You hear a man talking about writing answers out. What does he say the writing showed him?   **A** that his answers were too short   **B** that three of them had no figure in the first sentence   **C** that he should memorise them',
  '**6**  You hear a woman on a panel. What does she say decided the appointment?   **A** experience   **B** what candidates did with four badly asked questions   **C** confidence',
  '**7**  You hear a man talking about a job description. What does he say about the clause after the comma?   **A** it is usually a mistake   **B** it records an argument somebody won   **C** it should be deleted',
  '**8**  You hear a woman talking about a question she asked a panel. What did the answer tell her?   **A** that the post had been filled twice and neither person lasted a year   **B** that the panel had not read her application   **C** that the salary was fixed',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['1', '_(man)_ Three sentences went perfectly well. Situation, what I did, what happened — all with numbers in them, all fine. And then he asked what I would do differently and I said I thought we had handled it well, which is the one answer that is not an answer. I have thought about it for three weeks.'],
  ['2', '_(woman)_ How do you ensure quality? There is no occasion in it anywhere, so there is no number I could possibly give back. I said we have procedures and we follow them, which is perfectly true and tells them nothing whatever about me. The fault is in the question and I still had to deal with it.'],
  ['3', '_(man)_ Eleven sentences and every verb a past simple. He wrote back asking which of them I did first — and he was right, you could not tell. Either I started the book because the handsets came back, or they turned up in a book I was already keeping. Those are two quite different letters and mine was the weaker one.'],
  ['4', '_(woman)_ The figure was right. I had the published scale and the site allowance and I said it flat. Then I said six more words about being flexible, and the offer came at the figure minus the flexibility. They had two offers in four seconds and they took the lower one. Anybody would.'],
  ['5', '_(man)_ I would never have known from saying them. Out loud they sounded perfectly complete. On paper, three of the four started with something that had no number in it at all, and the panel would have had nothing to write down for the first fifteen seconds of each answer.'],
  ['6', '_(woman)_ Nine people, one post. It was not experience and it was not confidence, and I have the notes in front of me. It was what they did with four questions that we had written badly — I wrote three of the four myself, in about twenty minutes, and we should have spent an hour.'],
  ['7', '_(man)_ Or equivalent experience. Six words after a comma, and people read the sentence up to the comma and stop. Somebody sat in a meeting and fought for those six words, almost certainly because they had just lost somebody good to the clause in front of them. It is a scar, and the page is full of them.'],
  ['8', '_(woman)_ I asked what the last person in the post had done in their first three months. He said the post had been filled twice and that neither of them had lasted a year, and then he told me why, which he need not have done. I went home certain I had ruined it.'],
]));
out.push(p('**C  Writing.** Write the essay (180–220 words): four paragraphs, one job each, all three notes, the concession third with a figure in sentence four.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ answer a competency question in four sentences, with a figure in the first',
  '☐ give a fourth sentence that is a real change, and not _nothing_',
  '☐ keep the past perfect under pressure by slowing down for one syllable',
  '☐ name a mismatch between the question asked and the question answerable, and offer both',
  '☐ come back and answer the question I set aside',
  '☐ ask a panel a question about a mechanism, with no apology in front of it',
  '☐ say one sentence about money — a figure and a reason — and then nothing',
  '☐ tell a requirement that can be failed from one that cannot, and a proxy from the work',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _apply for · go up for · sit in on · run through · brush up on · be up against · come across as · talk up · size up · draw on · take on · play to_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 13.7 draws on this)_: _recruit → **recruitment** · compete → **competence** · appoint → **appointment** · apply → **applicant** · require → **requirement** · assess → **assessable** · equivalent → **equivalence** · describe → **description** · capable → **capability**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
