// Proactive Business English B2 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a reader in five years · a self-contained document · the context that must be inside the document · to name an office and the person then in it · a file note for 2032 · the reason, not the decision · a reason nobody wrote down · what was considered and rejected · an option recorded as not taken · to write before the question is asked · an index line · a document that outlives its author · a stranger reading your file · an assumption a stranger will make · what a reader will not know · to date a practice · a practice recorded as a practice · a file that cannot answer · a decision indistinguishable from a habit · to write for the second reader · a file that survives its filer · a note nobody asked for · the three sentences that make it stand alone · a cross-reference that will survive · a reference to a document that is gone · to record a person by office · a successor\'s question · a note read by somebody new to the company · to leave the reason on the file · a question nobody has asked yet · the file as the only witness · a document with no surrounding file';
const COLLOC = 'to outlive a file · to date a practice · to record a reason · to trace an office · to write for a successor · to leave a reason on a file · to re-propose an option · to index a note';
const BACK_AT_B2 = 'institutional memory · unrecorded · a record of practice';

out.push(h1('Unit 18  The Long Read, and the Document That Outlives You'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**18.1**  write for a reader in five years, who will not know and will assume',
  '**18.2**  put the context inside the document, because the file around it will be gone',
  '**18.3**  name people and offices so that a stranger can trace them',
  '**18.4**  write the reason and not only the decision',
  '**18.5**  record what was considered and rejected, so that 2032 does not re-propose it',
  '**18.6**  write the file note for a question nobody has asked yet, with its index line',
  '**18.7**  Review & Mediate: the Homs file, and two decisions with no reason written down',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ A hundred and ninety-six, and eight years of silence', [
  '⚠ **The walk-in count on the Hama road ran from 5 January to 1 February and came in at a hundred and ninety-six customers a week.** **Nour\'s threshold was two hundred and twenty and Bassel\'s was a hundred and fifty.** ⚠ **The figure landed between them, which is exactly what 16.3 said would happen and nobody believed.**',
  '⚠ **So the decision was Mr Ayoub\'s, and on 4 February he took it: Homs reopens on 1 April, at sixty square metres on the Hama road.** **He had recorded in December that he would probably take it, which means nobody is surprised.**',
  '⚠ **And now somebody has to write the Homs file.** **The store opened in 2019 and closed in 2021, both times on his decision, and the reason for the closure is recorded nowhere** — ⚠ **not in the 2021 board note, not in the audit file, not in the four internal letters at pages 74 to 78 of last month\'s bundle.** **It is in his head, and he is handing over the office in April.**',
  '⚠ **This unit is that file.** **It is written for somebody who does not work here yet** — ⚠ **and the hardest thing in it is that the only person who knows why Homs closed has never been asked, in five years, by anybody.**',
], C.lyellow, C.orange));

// ======================= CYCLE 18.1 =======================
out.push(pb());
out.push(h2('18.1  The reader in five years'));
out.push(p('**Function:** writing for a reader who is not in the company yet   ·   **Grammar:** _they will not know that X; they will assume that Y_   ·   **Pronunciation:** a future reader described in the present'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something everybody at your work knows and nobody has written down. ⚠ Then say who would have to be told, and in what year.'));
out.push(p('**b**  Which is written for 2032? _the Homs store closed in 2021 · the Homs store closed in November 2021 on the decision of the office manager, Mr K. Ayoub, who had also decided to open it in 2019_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say the reader in five years will assume?   **A** nothing   **B** that a decision with no reason on the file was obvious at the time   **C** that the file is complete'));
out.push(p('**b**  Listen again. **1** What are the three things a stranger will not know? **2** What does he say the difference is between a decision and a habit, on a file?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  "They will assume it was obvious"', [
  ['Nour', 'Who am I writing the Homs file for?'],
  ['Mr Sayegh', '⚠ **Somebody who does not work here yet.** ⚠ **Start with what they will not know.**'],
  ['Nour', 'They will not know who Mr Ayoub is.'],
  ['Mr Sayegh', '⚠ **They will not know that, and two more things that matter more.** ⚠ **They will not know that the same person decided both times. And they will not know that nobody counted the walk-in trade, because nothing on the file says anybody should have.**'],
  ['Nour', 'And what will they assume?'],
  ['Mr Sayegh', '⚠ **That a decision with no reason on the file was obvious at the time.** ⚠ **That is the assumption a stranger always makes, and it is almost never true** — **because the reasons that get written down are the contested ones.**'],
  ['Nour', 'So an unrecorded reason looks like no reason needed.'],
  ['Mr Sayegh', '⚠ **It looks like a habit.** ⚠ **And on a file, five years later, a decision and a habit are indistinguishable** — **unless somebody wrote the reason, which is the whole of what you are doing.**'],
  ['Nour', 'Mr Ayoub will say it was obvious.'],
  ['Mr Sayegh', '⚠ **He will say it was obvious that it was failing, which is true, and it is not the reason.** ⚠ **The reason is why he closed it rather than changing it** — **and that is the sentence nobody has ever asked him for.**'],
  ['Nour', 'And if he cannot remember?'],
  ['Mr Sayegh', '⚠ **Then you write that he cannot remember, with the date you asked** — **which is worth a great deal more than nothing and is the second-best document available.**'],
  ['Nour', 'What is the best?'],
  ['Mr Sayegh', '⚠ **The one somebody should have written in November 2021, in about forty words, and nobody did** — **because nothing had to be done about it and there was nowhere for it to go.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing for a reader in five years**',
  table(['', 'What they will not know', 'What they will assume'], [
    ['**the people**', '⚠ **who anybody is, or what office they held**', '⚠ **that a name on a document is a name the firm still knows**'],
    ['⚠ **the pattern**', '⚠ **that the same person decided both times**', '**that two similar decisions were taken by whoever was there**'],
    ['⚠ **the absence**', '⚠ **that nobody counted the walk-in trade** — **because nothing says anybody should have**', '**that what was measured was what mattered**'],
    ['⚠ **the reason**', '**(it is not on the file)**', '⚠ **that a decision with no reason was obvious at the time** — **which is almost never true**'],
  ], [1.4, 3.6, 4]),
  '⚠ **Start with what the reader will not know, and write the list before you write anything else.** ⚠ **Three or four items, and the useful ones are never the people** — **they are the pattern and the absence, which nobody thinks to record because everybody present can see them.**',
  '⚠ **The assumption a stranger always makes is that an unrecorded reason was an obvious one.** ⚠ **It is almost never true**, **because the reasons that get written down are the contested ones** — **so the quiet decisions, taken by one person who was sure, are the ones with nothing on the file.**',
  '⚠ **On a file five years later, a decision and a habit are indistinguishable.** ⚠ **The only thing that separates them is a recorded reason** — **and that is not a point about diligence, it is a point about what a document can carry.**',
  '⚠ **_It was obvious that it was failing_ is not a reason.** ⚠ **The reason is why it was closed rather than changed** — **and the difference between those two sentences is the whole of Unit 18.**',
  '⚠ **And where the reason cannot be recovered, record that it cannot, with the date you asked.** ⚠ **It is the second-best document available and it is much better than nothing** — **because it tells a reader in 2032 that somebody tried in 2027, and when.**',
  '**Practise:** Take a decision at your work with no reason on the file. Write what a stranger will not know, and what they will assume instead.',
  '**Useful phrases:**  somebody who does not work here yet  ·  they will assume it was obvious  ·  a decision and a habit are indistinguishable  ·  closed rather than changed  ·  with the date you asked',
  '**Pronunciation – a future reader in the present.** 🔊 **Track 18.2** Listen twice. ⚠ **The first says *they will not know that the same person decided both times* at an even pace.** ⚠ **The second stresses *the same person*.** **Even, it is one item on a list; stressed, it is an accusation, and a file is not the place for one.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a decision; B builds the list.'));
out.push(dlg(null, [
  ['A', 'The decision is __________, taken in __________.'],
  ['B', '⚠ **Who is the reader?**'],
  ['A', '__________.'],
  ['B', '⚠ **What will they not know? Not the people. The pattern.**'],
  ['A', '__________.'],
  ['B', '⚠ **And what was not measured?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what will they assume about the reason?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then is this a decision or a habit, on the file as it stands?**'],
]));
out.push(table(['Role card 1 — the people instead of the pattern', 'Role card 2 — it was obvious'], [[
  '⚠ **A lists what a stranger will not know and lists people: who Mr Ayoub is, who Bassel is, what the administration office does.** ⚠ **B accepts all of it and asks what else** — **twice.** ⚠ **B\'s point: the people are the easy half and the useful items are the pattern and the absence, which nobody records because everybody present can see them.**',
  '⚠ **A reports that Mr Ayoub says the closure was obvious.** ⚠ **B agrees that it was obvious the store was failing and asks why he closed it rather than changing it.** ⚠ **B\'s point: *it was obvious it was failing* is a description of the situation and not a reason for the decision** — **and the difference is the only thing a file in 2032 will need.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three things a stranger will not know, and the assumption they will make. ⚠ Then say in one sentence what separates a decision from a habit on a file.'));
out.push(PHRASE_CARD(['does not work here yet', 'the pattern, not the people', 'they will assume it was obvious', 'closed rather than changed', 'decision or habit?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** decisions at your work with no reason on the file.'));
out.push(table(['The decision, and when', 'What a stranger will not know', 'What they will assume', 'Decision or habit, on the file?'], [['', '', '', ''], ['', '', '', '']], [2, 2.8, 2.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The decision is _______, taken in _______. A stranger will not know _______, _______ and _______. They will assume _______. On the file as it stands it is a _______._'));
out.push(p('**Listener task:** count how many decisions would read as habits. ⚠ Then ask how many had a reason written down anywhere, and expect very few — and ask, of those, whether the reason was contested at the time.'));
out.push(p('**Board clinic:** your teacher writes four lists on the board — find the one that lists only people, and the one that offers *it was obvious* as a reason. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE: WHO THIS IS WRITTEN FOR. 6 February. N. Mansour. Homs file, page 1 of 6.**',
  '⚠ **This file is written for somebody who does not work at Sham Trading yet.** **It is written in February, two months before the office manager who took both earlier decisions hands over, and it is written because nothing on the existing file says why Homs closed.**',
  table(['What the reader will not know', 'What they will assume instead'], [
    ['⚠ **that the same person decided to open Homs in 2019 and to close it in 2021** — **Mr K. Ayoub, office manager 2011 to 2027**', '⚠ **that two similar decisions four years apart were taken by whoever held the office**'],
    ['⚠ **that nobody ever counted the walk-in trade at Homs** — **and that nothing on the file says anybody should have**', '⚠ **that what was measured was what mattered, because that is what a file looks like**'],
    ['⚠ **that the counter lines were restocked on booked-order demand** — **which is in no document and was established from the ledgers in December 2026**', '**that the fall in counter turnover was a fall in demand**'],
    ['⚠ **that the reason for the 2021 closure is not on the file** — **and was not on it in 2021 either**', '⚠ **that a decision with no reason recorded was obvious at the time**'],
  ], [4.6, 4.4]),
  '⚠ **The fourth row is why this file exists.** ⚠ **A decision with no reason on the file is indistinguishable, five years later, from a habit** — **and the reader in 2032 will have the 2021 board note, which says that the store closed, and four internal letters that say when.**',
  '⚠ **What is on this file, and in what order.** **Page 2: the dates and the people, by office. Page 3: the reason for the 2019 opening and the reason for the 2021 closure, the second of them reconstructed and marked as such. Page 4: what was considered and rejected both times. Page 5: the 2026 count and the reopening. Page 6: the index.**',
  '⚠ **One thing I am recording about my own position.** **I argued against the reopening in December and I wrote both papers.** ⚠ **A reader in 2032 should know that the person who assembled this file was against the decision it ends with**, **because every judgement in it is mine and that is the relevant fact about me.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the file written in February?'));
out.push(item('2', 'Which row does the writer say is why the file exists, and what will the 2032 reader have instead?'));
out.push(item('3', 'What does she record about her own position, and why?'));
out.push(box('Writer\'s box', [
  '**The *who this is for* page — five parts:** ⚠ **the reader, named as somebody not yet employed** → **why the file is being written now** → ⚠ **a table of *will not know · will assume instead*** → **the contents, in order** → ⚠ **and your own position in it.**',
  '⚠ **Name the reader as somebody who does not work here yet.** ⚠ **It is the only description that stops a writer assuming shared knowledge** — **and *for the file* or *for future reference* does not, because both are addressed to nobody.**',
  '⚠ **Say why now.** ⚠ *Two months before the office manager who took both earlier decisions hands over.* **A file written at a particular moment for a particular reason is a document; one written *for completeness* is an exercise** — **and the reader in 2032 will want to know what prompted it.**',
  '⚠ **Put *will assume instead* beside *will not know*, and make the assumptions plausible.** ⚠ *That what was measured was what mattered, because that is what a file looks like.* **A stranger\'s assumption is not a mistake, it is the only available reading** — **and writing it down is what makes the gap visible.**',
  '⚠ **Give the contents in order, with what is on each page.** ⚠ **Six lines** — **because a reader in 2032 will arrive with one question and needs to know which page answers it before reading any of them.**',
  '⚠ **And record your own position.** ⚠ *The person who assembled this file was against the decision it ends with.* **It is the relevant fact about the author and a reader cannot find it anywhere else** — **and a file whose compiler had a view that is not disclosed is a file that will be re-read suspiciously the moment anybody works it out.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *who this is for* page for a file at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE: WHO THIS IS WRITTEN FOR. ______________. ______________. Page 1 of ______________.**   ⚠ **This file is written for somebody who does not work at ______________ yet.** **It is written in ______________, because ______________.**   **What the reader will not know** | **What they will assume instead**   ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________**   ⚠ **The ______________ row is why this file exists.** ⚠ **______________.**   ⚠ **What is on this file, and in what order. ______________.**   ⚠ **One thing I am recording about my own position. ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The reader named as somebody not yet employed', ''],
  ['Why the file is being written now', ''],
  ['*Will assume instead* beside every *will not know*', ''],
  ['The contents in order, page by page', ''],
  ['The writer\'s own position, disclosed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *will assume instead* column. ⚠ The class says of each whether the assumption is the only available reading of the file as it stands.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something everybody at your work knows and nobody has written down (**200 to 240 words**). Say what it is, who knows, how long they will be there, what a stranger would assume instead, and what forty words would have fixed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _decision or habit, on the file as it stands?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the only person who knows due to leave within five years? Usually two of three — ⚠ **and in most cases nobody has ever asked them, which is the finding of the unit arriving in its first cycle.**'));
out.push(box('Homework', ['Write your final text. Then take one decision at your work and write what a stranger in 2032 will assume about it from the file as it stands (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.2 =======================
out.push(pb());
out.push(h2('18.2  The context inside the document'));
out.push(p('**Function:** making a document self-contained   ·   **Grammar:** _at that date the company had X · the practice then was Y_   ·   **Pronunciation:** a context sentence read as information, not as throat-clearing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a document at your work that cannot be understood without three other documents. ⚠ Then say whether those three will still be findable in 2032.'));
out.push(p('**b**  Which stands alone? _see the 2021 board note · in 2021 the company had two sites and one van, and a third site was a sixth of turnover; the board note of November 2021 is at page 74 of the arbitration bundle_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about the cross-references?   **A** there are too many   **B** four of the six point at documents that may not be findable in 2032, and the fix is three sentences of context rather than better references   **C** they are wrong'));
out.push(p('**b**  Listen again. **1** What are the three sentences she wants? **2** Why does she say a cross-reference is worse than no reference at all?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  "Three sentences, and then the reference"', [
  ['Nadia', 'Page three refers to six documents. I can find two of them.'],
  ['Nour', 'They are all in the file somewhere.'],
  ['Nadia', '⚠ **Somewhere is not a reference.** ⚠ **And in 2032 four of the six will be in a box or will not exist** — **the 2021 board note is a loose sheet, the costing is on a spreadsheet nobody has opened since, and two of them are letters in a folder by month.**'],
  ['Nour', 'So I give better references.'],
  ['Nadia', '⚠ **No. You write the context inside the document and then give the reference.** ⚠ **Three sentences, and they are the same three every time.**'],
  ['Nour', 'Which three?'],
  ['Nadia', '⚠ **What the company was then. What the practice was then. And what the figure meant then.**'],
  ['Nour', 'Give me them for Homs.'],
  ['Nadia', '⚠ **In 2021 Sham Trading had two sites, one van and nineteen staff, and Homs was about a sixth of turnover.** ⚠ **The practice then was that stock was ordered against booked orders for every site, including Homs.** ⚠ **And 11.8 million was, at that date, about the turnover of the Mezzeh counter alone.**'],
  ['Nour', 'The third one is the useful one.'],
  ['Nadia', '⚠ **It is the one a stranger cannot reconstruct at all.** ⚠ **A figure without its scale is a figure that will be misread in either direction** — **and in 2032 nobody will know whether 11.8 million was large.**'],
  ['Nour', 'And then the reference.'],
  ['Nadia', '⚠ **Then the reference, and it is a bonus rather than the point.** ⚠ **A document that needs a reference to be understood is a document that stops working on the day somebody loses a folder** — **and a reference with nothing behind it is worse than none, because it tells a reader there is an answer somewhere and they cannot have it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The context inside the document — three sentences**',
  table(['', 'The sentence', 'Why it cannot be reconstructed'], [
    ['**1 what the company was**', '⚠ *in 2021 Sham Trading had two sites, one van and nineteen staff*', '**a stranger has no idea of the scale of the firm at that date**'],
    ['**2 what the practice was**', '⚠ *the practice then was that stock was ordered against booked orders for every site*', '⚠ **and the practice has since changed, so the current practice is a false guide**'],
    ['⚠ **3 what the figure meant**', '⚠ *11.8 million was, at that date, about the turnover of the Mezzeh counter alone*', '⚠ **a figure without its scale will be misread in either direction** — **and this is the one nobody writes**'],
    ['**then the reference**', '**[p. 74 of the arbitration bundle]**', '⚠ **a bonus and not the point** — **and a reference with nothing behind it is worse than none**'],
  ], [1.6, 3.6, 3.8]),
  '⚠ **A document that needs a reference to be understood stops working on the day somebody loses a folder.** ⚠ **Write the context inside it, and then give the reference** — **in that order, because the order is what makes the document survive.**',
  '⚠ **The three sentences are the same three every time.** ⚠ **What the company was then · what the practice was then · what the figure meant then** — **and the third is the one nobody writes and the one a stranger cannot reconstruct from anything.**',
  '⚠ **A figure without its scale will be misread in either direction.** ⚠ **In 2032 nobody will know whether 11.8 million was large** — **and *about the turnover of the Mezzeh counter alone* costs nine words and fixes it permanently.**',
  '⚠ **Say what the practice was THEN, and expect it to have changed.** ⚠ **The current practice is a false guide to an old decision**, **and a stranger will use it, because it is the only practice they have ever seen.**',
  '⚠ **And a reference with nothing behind it is worse than no reference at all.** ⚠ **It tells a reader that there is an answer somewhere and that they cannot have it** — **which is a worse condition than not knowing there was ever an answer.**',
  '**Practise:** Take a document of yours that needs others to be understood. Write the three context sentences, and then decide whether the references are still worth giving.',
  '**Useful phrases:**  somewhere is not a reference  ·  what the company was then  ·  what the practice was then  ·  what the figure meant then  ·  a bonus, not the point',
  '**Pronunciation – context as information.** 🔊 **Track 18.4** Listen twice. ⚠ **The first reads *in 2021 Sham Trading had two sites, one van and nineteen staff* briskly, as information.** ⚠ **The second reads it slowly, as a preamble.** **Brisk, it is three facts; slow, it is throat-clearing, and a reader skips it and then needs it.** Say it four times, briskly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a reference; B asks for the context.'));
out.push(dlg(null, [
  ['A', 'See the __________ of __________.'],
  ['B', '⚠ **Will I be able to find that in 2032?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write the context. What was the company then?**'],
  ['A', '__________.'],
  ['B', '⚠ **What was the practice then?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what did the figure mean then?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now give the reference, and it is a bonus.**'],
]));
out.push(table(['Role card 1 — better references', 'Role card 2 — the figure with no scale'], [[
  '⚠ **A proposes fixing the problem with more precise references: page numbers, dates, folder names.** ⚠ **B asks which of the six documents will exist in 2032 and in what form** — **a loose sheet, a spreadsheet nobody has opened, two letters in a folder by month.** ⚠ **B\'s point: a document that needs a reference to be understood stops working the day somebody loses a folder, so the context goes inside.**',
  '⚠ **A has given the 2021 turnover as 11.8 million and considers it a fact that needs no help.** ⚠ **B asks whether that is large.** ⚠ **B\'s point: a figure without its scale is misread in either direction, and in 2032 nobody will know** — **and *about the turnover of the Mezzeh counter alone* costs nine words and is the sentence nobody ever writes.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three context sentences for one figure of your own. ⚠ Then say why a reference with nothing behind it is worse than none.'));
out.push(PHRASE_CARD(['somewhere is not a reference', 'the company then', 'the practice then', 'the figure then', 'a bonus, not the point']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** documents of yours that need others. Write the context for each.'));
out.push(table(['The document', 'What the company was then', 'What the practice was then', 'What the figure meant then'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.4, 2.4, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The document is _______. In _______ the company had _______. The practice then was _______. And _______ was, at that date, _______. The reference is _______, and it is a bonus._'));
out.push(p('**Listener task:** count how many of the referenced documents would be findable in 2032. ⚠ Then ask how many of the writers had ever written the third sentence, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four context paragraphs on the board — find the one with no scale on its figure, and the one whose practice sentence describes the current practice rather than the one at the time. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE, PAGE 2: THE DATES, THE PEOPLE, AND WHAT THE COMPANY WAS. 6 February. N. Mansour.**',
  '⚠ **What the company was, at each date.**',
  table(['', '2019', '2021', '2026'], [
    ['**sites**', '**two: Mezzeh, and Baghdad Street, which opened on 8 June**', '**three: and Homs**', '**two**'],
    ['**vans**', '**one**', '**one**', '**one, and hired**'],
    ['**staff**', '**sixteen**', '**nineteen**', '**twenty-three**'],
    ['**turnover**', '**about 71 million**', '**about 83 million**', '**about 148 million**'],
    ['⚠ **what Homs was**', '**opened September; a sixth of floor area**', '⚠ **about a seventh of turnover; 11.8 million, which was then about the Mezzeh counter alone**', '⚠ **closed; the site let to a chemist in 2022**'],
  ], [1.4, 2.4, 3, 2.4]),
  '⚠ **What the practice was, at each date.** **In 2019 and 2021 stock was ordered against booked orders at every site, including Homs, and no site counted customers who came in without an order.** ⚠ **The practice changed at Mezzeh in 2024 and at Baghdad Street in 2025, and it has never been written down as a practice at all** — **it changed because Hala began keeping a tally and nobody stopped her.**',
  '⚠ **The people, by office.** **Office manager: K. Ayoub, 2011 to April 2027. Administration: N. Mansour from 2024; before that the office had no coordinator. Accounts: N. Sayegh throughout. Sales: B. Nassif from 2022. Warehouse: Y. Khalil throughout. External auditor: Z. Attar since 2019.**',
  '⚠ **Two sentences a stranger cannot reconstruct and will need.** ⚠ **First: in 2021 one van served three sites, and the Homs stock was carried on the same van as the Ghouta run, which moved to Mondays and Wednesdays on 1 March, after the Homs years.** ⚠ **Second: 11.8 million in 2021 was about the same as the Mezzeh counter alone, so Homs was never a large part of this company and the closure was not a large event in the year it happened.**',
  '⚠ **The second of those is the one that will be misread.** **A reader in 2032 looking at 11.8 million against today\'s turnover will think Homs was trivial.** ⚠ **A reader looking at it against 2021\'s will think it was a seventh of the business.** **Both are true and the second is the one that mattered at the time.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the page say about the practice of counting customers, and when it changed?'));
out.push(item('2', 'Why are the people given by office rather than only by name?'));
out.push(item('3', 'Which sentence does the writer say will be misread, and what are the two readings?'));
out.push(box('Writer\'s box', [
  '**The context page — five parts:** ⚠ **a table of what the company was at each date** → ⚠ **what the practice was, and when it changed** → **the people, by office with dates** → ⚠ **the two or three sentences a stranger cannot reconstruct** → ⚠ **and the one that will be misread, with both readings.**',
  '⚠ **Put the dates in columns and the facts in rows.** ⚠ **Sites, vans, staff, turnover** — **four rows and a reader can see the shape of the firm at three dates in ten seconds**, **which no amount of prose does.**',
  '⚠ **Say when the practice changed and how.** ⚠ *It changed at Mezzeh in 2024 and at Baghdad Street in 2025, and it has never been written down as a practice at all.* **And then how it changed:** *Hala began keeping a tally and nobody stopped her.* **That is a practice with a date and an author, which is the rarest thing in any file.**',
  '⚠ **Give people by office, with dates, and note the offices that did not exist.** ⚠ *Administration: N. Mansour from 2024; before that the office had no coordinator.* **A stranger reading a 2021 document will otherwise look for the coordinator who signed it.**',
  '⚠ **Write the two or three sentences nobody can reconstruct.** ⚠ **One van serving three sites, and the Homs stock on the Ghouta van** — **operational facts that are in no document and change how every figure reads.**',
  '⚠ **And name the figure that will be misread, with BOTH readings.** ⚠ **11.8 million against today\'s turnover looks trivial; against 2021\'s it is a seventh of the business** — **and saying which one mattered at the time is the only way a stranger gets it right.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the context page for a file at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE, PAGE 2: THE DATES, THE PEOPLE, AND WHAT THE COMPANY WAS. ______________. ______________.**   ⚠ **What the company was, at each date.**   **** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   ⚠ **______________** | **______________** | ⚠ **______________** | **______________**   ⚠ **What the practice was, at each date. ______________.** ⚠ **The practice changed in ______________, and it has never been written down as a practice at all** — **it changed because ______________.**   ⚠ **The people, by office. ______________.**   ⚠ **Two sentences a stranger cannot reconstruct and will need.** ⚠ **First: ______________.** ⚠ **Second: ______________.**   ⚠ **The second of those is the one that will be misread. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dates in columns, facts in rows', ''],
  ['When the practice changed, and how', ''],
  ['People by office, with the offices that did not exist', ''],
  ['Two sentences a stranger cannot reconstruct', ''],
  ['The figure that will be misread, with both readings', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what the figure meant then* sentence. ⚠ The class says whether a stranger could tell from it whether the figure was large.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work that cannot be understood on its own (**200 to 240 words**). Say what it needs, whether those things will exist in 2032, and write the three context sentences it is missing.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the figure given its scale?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the referenced documents still be findable? Usually one of three — ⚠ **and in that one it is because somebody keeps them personally, which is an arrangement with a retirement date on it.**'));
out.push(box('Homework', ['Write your final text. Then take one figure in a document of yours and write the sentence that says what it meant at the time (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.3 =======================
out.push(pb());
out.push(h2('18.3  The office, and the person then in it'));
out.push(p('**Function:** naming people so a stranger can trace them   ·   **Grammar:** _the administration office (then: N. Mansour)_   ·   **Pronunciation:** an office and a name read as one unit'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a name that appears in your firm\'s documents and that a new colleague would not recognise. ⚠ Then say what office that person held.'));
out.push(p('**b**  Which can a stranger trace? _agreed with Hala · agreed with the counter supervisor at Mezzeh (then: H. Mourad)_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina find in the old file?   **A** the wrong names   **B** nineteen first names and no offices, so the file cannot be traced   **C** no names at all'));
out.push(p('**b**  Listen again. **1** What is the form Nour gives her? **2** Why does Nour say you record the office even when the office no longer exists?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  "Nineteen first names"', [
  ['Lina', 'The old Homs file has nineteen first names in it. Abu Khalil. Ghassan. Someone called the Doctor.'],
  ['Nour', '⚠ **And no offices.**'],
  ['Lina', 'None. Who is the Doctor?'],
  ['Nour', '⚠ **Nobody knows, and that is the state the file is in** — **three of those nineteen are people this company has had no contact with since 2021.**'],
  ['Lina', 'So what do I write?'],
  ['Nour', '⚠ **The office first, then the person then in it, in brackets.** ⚠ **The counter supervisor at Mezzeh, then H. Mourad. Not Hala.**'],
  ['Lina', 'Everyone knows Hala.'],
  ['Nour', '⚠ **Everyone here now.** ⚠ **In 2032 the useful half is the office, because the office is the thing a reader can look up** — **a name is only a name, and the firm will have had three counter supervisors by then.**'],
  ['Lina', 'And if the office does not exist any more?'],
  ['Nour', '⚠ **You record it anyway, and you say it no longer exists.** ⚠ **The Homs branch office was a real office with real decisions attached to it, and a reader needs to know that decisions came from there and that there is nobody to ask.**'],
  ['Lina', 'What about the ones I cannot identify?'],
  ['Nour', '⚠ **You list them as unidentified, by name, with the documents they appear in.** ⚠ **It is a worse answer than an office and it is far better than leaving them in the prose as though they were obvious** — **and if somebody recognises a name in 2032 the list is where they will look.**'],
  ['Lina', 'And the Doctor?'],
  ['Nour', '⚠ **Goes on that list, with the four letters he appears in and the dates.** ⚠ **Somebody in this company knows who he was** — **and there is an honest chance that it is Mr Ayoub and that nobody has ever asked him either.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The office, then the person**',
  table(['', 'Not this', 'This'], [
    ['**a current colleague**', '⚠ *agreed with Hala*', '⚠ *agreed with the counter supervisor at Mezzeh (then: H. Mourad)*'],
    ['**a signature**', '*signed K. Ayoub*', '⚠ *signed by the office manager, K. Ayoub (office manager 2011–2027)*'],
    ['⚠ **a vanished office**', '*the Homs office decided*', '⚠ *the Homs branch office (closed 2021; no successor office)*'],
    ['⚠ **an unidentified name**', '⚠ *as the Doctor confirmed*', '⚠ *a person referred to as "the Doctor" in four letters of March–July 2021; not identified* — **and the name goes on the unidentified list**'],
  ], [1.6, 3, 4.4]),
  '⚠ **Office first, person in brackets.** ⚠ **The office is the half a reader can look up** — **a name is only a name, and a firm has three counter supervisors in ten years.**',
  '⚠ **Put the dates on the office-holder.** ⚠ *Office manager 2011–2027.* **It lets a reader date any document by its signature, which is the single most useful thing a file can give a stranger.**',
  '⚠ **Record an office that no longer exists, and say so.** ⚠ *The Homs branch office (closed 2021; no successor office).* **Decisions came from there, and a reader needs to know both that they did and that there is nobody to ask.**',
  '⚠ **And list the names you cannot identify, rather than leaving them in the prose.** ⚠ *A person referred to as "the Doctor" in four letters of March–July 2021; not identified.* **With the documents and the dates** — **because the list is where somebody who recognises the name in 2032 will look, and leaving him in the prose as though he were obvious is the one thing that guarantees he never gets identified.**',
  '**Practise:** Take five names from your own documents. Write each as office, then person, then dates. Mark the ones you cannot do.',
  '**Useful phrases:**  nineteen first names and no offices  ·  the office is what a reader can look up  ·  then: _______  ·  no successor office  ·  not identified',
  '**Pronunciation – office and name as one unit.** 🔊 **Track 18.6** Listen twice. ⚠ **The first says *the counter supervisor at Mezzeh, then H. Mourad* as one phrase with the pause before *then*.** ⚠ **The second pauses after *Mezzeh* and after *then*.** **One unit, it is a reference; chopped, it sounds like an afterthought.** Say it four times as one unit.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a person; B asks for the office.'));
out.push(dlg(null, [
  ['A', 'It was agreed with __________.'],
  ['B', '⚠ **What office did they hold?**'],
  ['A', '__________.'],
  ['B', '⚠ **And between what dates?**'],
  ['A', '__________.'],
  ['B', '⚠ **Does the office still exist?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write it as office, person, dates** — **and if you cannot identify them, say so and list them.**'],
  ['A', '__________.'],
  ['B', '⚠ **Could a stranger in 2032 trace that?**'],
]));
out.push(table(['Role card 1 — everyone knows Hala', 'Role card 2 — the obvious stranger'], [[
  '⚠ **A objects that writing *the counter supervisor at Mezzeh (then: H. Mourad)* is absurd because everybody knows Hala.** ⚠ **B agrees that everybody here now does, and asks who the counter supervisor will be in 2032.** ⚠ **B\'s point: the office is the half a reader can look up, and the firm will have had three of them.**',
  '⚠ **A has left four references to "the Doctor" in the prose, reasoning that somebody will know.** ⚠ **B asks who, and whether anybody has been asked in five years.** ⚠ **B\'s point: an unidentified name left in the prose reads as obvious and is therefore never queried** — **on a list marked *not identified* it is a question, and questions get answered.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write three names from your own work in the office-then-person form. ⚠ Then say what you do with a name you cannot identify.'));
out.push(PHRASE_CARD(['what office?', 'between what dates?', 'then: _______', 'no successor office', 'not identified']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** names from documents at your work.'));
out.push(table(['The name as written', 'The office', 'Dates held', 'Does the office still exist?'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.8, 1.8, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The document says _______. The office was _______, held from _______ to _______. The office _______ exist now. So I would write _______._'));
out.push(p('**Listener task:** count how many names could not be traced to an office. ⚠ Then ask how many belong on an unidentified list, and whether anybody has ever been asked about them.'));
out.push(p('**Board clinic:** your teacher writes four reference lines on the board — find the one with a first name and no office, and the one that treats a vanished office as though it still existed. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE, PAGE 2A: THE PEOPLE, AND THE NAMES I CANNOT TRACE. 7 February. N. Mansour.**',
  '⚠ **Traced. Office, then the person then in it, with dates.**',
  table(['Office', 'Then', 'Dates', 'Now'], [
    ['**office manager**', '**K. Ayoub**', '**2011 – April 2027**', '⚠ **hands over in April; successor not yet named**'],
    ['**accounts**', '**N. Sayegh**', '**2016 –**', '**the same**'],
    ['⚠ **Homs branch office**', '⚠ **R. Mardini, branch supervisor**', '**Sept 2019 – Nov 2021**', '⚠ **office closed; no successor office; last contact 2022**'],
    ['**counter supervisor, Mezzeh**', '**H. Mourad**', '**2023 –**', '⚠ **the same; was not here in 2021 and appears in no 2019–21 document**'],
    ['**external auditor**', '**Z. Attar**', '**2019 –**', '**the same**'],
  ], [2.6, 2.4, 2, 3]),
  '⚠ **Not traced. Six names, with the documents they appear in.**',
  '⚠ **"Abu Khalil" — four delivery notes, Oct 2019 to Jan 2020; probably a carrier, not identified. "The Doctor" — four letters, March to July 2021, twice as the person to be consulted on the lease; not identified. "Ghassan" — the 2021 stock list, as the person who held the keys. And three further first names in the daily sheets.**',
  '⚠ **I have asked nobody about these, because I have been reading the file and not the company.** **Mr Ayoub was here throughout and can almost certainly name five of the six in a ten-minute conversation.** ⚠ **The reason I am recording that rather than simply doing it is that he hands over in April, and if this page is still unanswered in May it will be unanswerable** — **and the next person to read it should know that it was answerable in February.**',
  '⚠ **One name I have deliberately left alone.** **"The Doctor" appears as the person to be consulted on the lease, and the lease was signed by the office manager.** ⚠ **If he was an adviser, somebody paid him and accounts will have it; if he was a relative of the landlord, nobody will have written it down** — **and I am not going to guess which in a file that will outlive all of us.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is the Homs branch office recorded, and what three things does the *Now* column say about it?'));
out.push(item('2', 'Why does the writer record that she has asked nobody, rather than simply asking?'));
out.push(item('3', 'Which name has she left alone, and what are the two possibilities she declines to choose between?'));
out.push(box('Writer\'s box', [
  '**The people page — five parts:** ⚠ **a traced table of office · then · dates · now** → ⚠ **a not-traced list with the documents and dates** → ⚠ **who could answer it and by when** → **why you are recording the gap rather than closing it** → ⚠ **and any name you are deliberately not guessing at.**',
  '⚠ **Four columns: office, then, dates, now.** ⚠ **The *now* column is the one a stranger needs and nobody writes** — **the same · office closed, no successor · hands over in April.**',
  '⚠ **Note who was NOT there.** ⚠ *Was not here in 2021 and appears in no 2019–21 document.* **It stops a reader attributing an old decision to a current colleague, which is the commonest error a stranger makes in a long file.**',
  '⚠ **List the names you cannot trace, with the documents and the dates, and a guess marked as a guess.** ⚠ *Probably a carrier, not identified.* **A marked guess is usable; an unmarked one becomes a fact in about four years.**',
  '⚠ **Say who could answer it and by when.** ⚠ *He hands over in April, and if this page is still unanswered in May it will be unanswerable.* **A gap with an expiry date on it is an action; a gap without one is a decoration.**',
  '⚠ **And name what you are deliberately not guessing.** ⚠ *If he was an adviser, somebody paid him; if he was a relative of the landlord, nobody will have written it down* — **and refusing to choose, in writing, is the strongest thing a long file can do with a question it cannot answer.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the people page for a file at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE, PAGE 2A: THE PEOPLE, AND THE NAMES I CANNOT TRACE. ______________. ______________.**   ⚠ **Traced. Office, then the person then in it, with dates.**   **Office** | **Then** | **Dates** | **Now**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | ⚠ **______________**   ⚠ **______________** | **______________** | **______________** | ⚠ **______________**   ⚠ **Not traced. ______________ names, with the documents they appear in.**   ⚠ **______________.**   ⚠ **I have asked nobody about these, because ______________.** ⚠ **______________ can almost certainly name ______________.** ⚠ **The reason I am recording that rather than simply doing it is ______________.**   ⚠ **One name I have deliberately left alone. ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Office, then person, with dates', ''],
  ['A *now* column on every office', ''],
  ['Untraced names listed with their documents', ''],
  ['Every guess marked as a guess', ''],
  ['Who could answer it, and by when', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *now* column. ⚠ The class says of each whether a stranger would know who to ask today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the names in your firm\'s older documents (**200 to 240 words**). Say how many you could trace, who could trace the rest, how long that person will be there, and what you would record if they left tomorrow.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could a stranger trace this?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the person who could trace the names near retirement or already gone? ⚠ **Usually at least one is already gone, and in that case the names are now permanent** — **which is the clearest thing this unit has to say about timing.**'));
out.push(box('Homework', ['Write your final text. Then take three names from your firm\'s documents and write each as office, person, dates and now (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.4 =======================
out.push(pb());
out.push(h2('18.4  The reason, not the decision'));
out.push(p('**Function:** recording why rather than what   ·   **Grammar:** _we closed it rather than changing it, because…_   ·   **Pronunciation:** *rather than* carrying the stress'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work and then say what the alternative was. ⚠ If you cannot say the alternative, say so — it is the commoner answer.'));
out.push(p('**b**  Which is a reason? _Homs was closed in November 2021 · Homs was closed rather than restocked, because a year of restocking would have cost about 4 million and nobody could say what it would prove_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub give Nour?   **A** nothing   **B** the reason, which is that he could not tell whether the fall was the site or the stock and would not spend a year finding out   **C** a document'));
out.push(p('**b**  Listen again. **1** What is the sentence Nour says is not a reason? **2** What does Mr Ayoub say when she asks why it was never written down?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  "Rather than what?"', [
  ['Nour', 'Mr Ayoub, why did you close Homs?'],
  ['Mr Ayoub', 'It was losing money. You have the figures.'],
  ['Nour', '⚠ **I have the figures. That is why it was in trouble.** ⚠ **I am asking why you closed it rather than changing it.**'],
  ['Mr Ayoub', '(pause) ⚠ **Because I could not tell whether the counter trade had gone because of the site or because of the stock.** ⚠ **And I was not going to spend a year finding out.**'],
  ['Nour', 'Say more about that.'],
  ['Mr Ayoub', '⚠ **If it was the site, restocking changed nothing and I would lose another year\'s rent.** ⚠ **If it was the stock, restocking fixed it, and it would have cost about four million to try, and I would still not have known which it was afterwards** — **because a shop that improves after restocking might just be a shop that got better weather.**'],
  ['Nour', 'So you closed it because the test was not worth the cost.'],
  ['Mr Ayoub', '⚠ **I closed it because the test was expensive and the answer was not reliable.** **Those are different things, and the second one is why.**'],
  ['Nour', 'That is the clearest thing on this file and it is not on the file.'],
  ['Mr Ayoub', 'It was obvious at the time.'],
  ['Nour', '⚠ **It was obvious to you.** ⚠ **The board note says the store closed. The audit file says when. Nothing anywhere says *rather than*.**'],
  ['Mr Ayoub', '(pause) ⚠ **Nobody asked me.** **For five years. Not the auditor, not the board, not you until today.**'],
  ['Nour', '⚠ **No. And in April you hand over, and after that the sentence does not exist.** ⚠ **May I write it down in your words and bring it to you to sign?**'],
  ['Mr Ayoub', '⚠ **Write it down.** **I will tell you where you have got it wrong, and you will find I remember the four million better than the rest of it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The reason, not the decision**',
  table(['', 'What is usually on the file', 'What a reason looks like'], [
    ['**the decision**', '⚠ *Homs was closed in November 2021*', '**(this is the decision, and it is already recorded)**'],
    ['**the situation**', '⚠ *it was losing money* — **this is why it was in trouble**', '**(a description, not a reason)**'],
    ['⚠ **the reason**', '**(usually missing)**', '⚠ *closed rather than restocked, because I could not tell whether the fall was the site or the stock*'],
    ['⚠ **the reason behind that**', '**(always missing)**', '⚠ *the test would have cost about 4 million AND the answer would not have been reliable* — **two things, and the second is the real one**'],
  ], [1.8, 3.4, 3.8]),
  '⚠ **The question that produces a reason is *rather than what?*** ⚠ **Not why did you do it** — **which gets you the situation** — **but why this rather than the obvious alternative, which is the only form that cannot be answered with figures everybody already has.**',
  '⚠ **A reason has an alternative in it.** ⚠ *Closed rather than restocked.* **A sentence with no *rather than* is a description of circumstances, and five years later it reads as an inevitability.**',
  '⚠ **Record both halves when there are two.** ⚠ *The test was expensive AND the answer would not have been reliable.* **He distinguishes them himself, and the second is the real reason** — **and a file that keeps only the cost records a thrifty decision instead of a careful one.**',
  '⚠ **Write it in their words and take it back to them.** ⚠ *May I write it down in your words and bring it to you to sign?* **A reconstructed reason that the person has corrected is a document; one you have paraphrased is your account of their reasoning.**',
  '⚠ **And *it was obvious at the time* means *obvious to me*.** ⚠ **The honest reply to it is that nobody asked** — **which is almost always true, and is a fact about the firm and not about the person.**',
  '**Practise:** Take a decision at your work. Ask *rather than what?* and write the answer with both halves if it has two.',
  '**Useful phrases:**  rather than changing it  ·  that is why it was in trouble  ·  the test was expensive and the answer was not reliable  ·  nothing says _rather than_  ·  in your words, and bring it to you',
  '**Pronunciation – *rather than*.** 🔊 **Track 18.8** Listen twice. ⚠ **The first stresses *rather than changing it*.** ⚠ **The second stresses *why you closed it*.** **The first asks about the alternative and gets a reason; the second asks about the decision and gets the figures again.** Say it four times with the stress on *rather than*.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a decision; B asks for the reason.'));
out.push(dlg(null, [
  ['A', 'We __________, in __________.'],
  ['B', '⚠ **Rather than what?**'],
  ['A', '__________.'],
  ['B', '⚠ **And why that rather than that?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that one reason or two?**'],
  ['A', '__________.'],
  ['B', '⚠ **Which of the two was the real one?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that sentence anywhere on the file?**'],
]));
out.push(table(['Role card 1 — the figures again', 'Role card 2 — it was obvious'], [[
  '⚠ **A answers *rather than what?* with the figures: the losses, the rent, the turnover.** ⚠ **B accepts the figures, says they explain why it was in trouble, and asks the question again.** ⚠ **B\'s point: the situation is already on the file in four places** — **the alternative not taken is on it nowhere, and that is the only thing being asked for.**',
  '⚠ **A says the reason was obvious at the time and needed no recording.** ⚠ **B asks obvious to whom, and who has asked in five years.** ⚠ **B\'s point: *obvious at the time* means obvious to the person deciding, and the honest answer is that nobody asked** — **which is a fact about the firm rather than a criticism of anybody.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason in *X rather than Y, because Z* form. ⚠ Then say whether it has two halves and which is the real one.'));
out.push(PHRASE_CARD(['rather than what?', 'that is why it was in trouble', 'one reason or two?', 'which was the real one?', 'is it on the file?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** decisions at your work.'));
out.push(table(['The decision', 'Rather than what?', 'Because — and both halves if two', 'On the file?'], [['', '', '', ''], ['', '', '', '']], [2, 2, 3.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We _______, rather than _______, because _______. There are _______ halves to that, and the real one is _______. It is recorded _______._'));
out.push(p('**Listener task:** count how many reasons are on the file in any form. ⚠ Then ask, of the ones that are not, who the only person is who knows — and how long they will be there.'));
out.push(p('**Board clinic:** your teacher writes four reasons on the board — find the one that is a description of circumstances, and the one with two halves given as one. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE, PAGE 3: THE REASONS. 9 February. N. Mansour. Reconstructed; see the status line on each.**',
  '⚠ **3.1  The 2019 opening. Status: contemporaneous. Source: the board note of 14 August 2019, page 2.**',
  '**The store was opened because the firm had two sites in Damascus and no presence north, and because a sixty-square-metre unit on the Hama road came available at a rent the board minuted as "a third of what we would pay next year".** ⚠ **The alternative recorded as rejected was a van route out of Mezzeh, rejected because it would not hold stock.** **This is the one reason on the whole file that was written down at the time, and it was written down because the board disagreed about it.**',
  '⚠ **3.2  The 2021 closure. Status: RECONSTRUCTED. Source: K. Ayoub, in conversation, 9 February. Corrected and initialled by him on 11 February. NOT a contemporaneous record.**',
  '**In his words, as corrected by him: "I closed it rather than restocking it because I could not tell whether the counter trade had gone because of the site or because of the stock. Restocking would have cost about four million to try. If it was the site, that bought nothing. And even if the shop improved afterwards I would not have known which of the two it was, because a shop that improves after restocking might simply have had a better season. The cost I could have borne. It was the unreliability of the answer I would not pay for."**',
  '⚠ **One thing the ledgers add that he did not say.** **The December 2026 ledger reading established that the counter lines were restocked on booked-order demand, so the lines that fell were the lines never reordered.** ⚠ **That is a third possibility he did not name and could have: that the fall was neither the site nor the stock in general, but one restocking rule.** **He was shown this on 11 February and his answer is recorded at 3.2(a): "That is right, and I did not see it. It would have changed what I tried. I do not know that it would have changed what I decided."**',
  '⚠ **Why 3.2 is marked RECONSTRUCTED and 3.1 is not.** **3.1 was written in 2019 by people who disagreed. 3.2 was written in 2027 by one person recalling 2021, and memory of a decision reorganises itself around the outcome.** ⚠ **It is the best available record and it is not the same kind of record** — **and a reader in 2032 who cannot see the difference will weigh them equally, which would be wrong.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why was the 2019 reason the only one written down at the time?'));
out.push(item('2', 'What do the ledgers add, and what does Mr Ayoub say about it?'));
out.push(item('3', 'Why is 3.2 marked RECONSTRUCTED, and what would a reader do wrong without that mark?'));
out.push(box('Writer\'s box', [
  '**The reasons page — five parts:** ⚠ **a status line on every reason** → **the reason in *X rather than Y, because Z* form** → ⚠ **the reason in their own words where it is reconstructed, corrected and initialled** → ⚠ **what the evidence adds that they did not say, with their answer to it** → ⚠ **and why the statuses differ.**',
  '⚠ **Put a status line on every reason: contemporaneous, or RECONSTRUCTED with the source and the date.** ⚠ **Two reasons of different kinds on one page, unmarked, will be weighed equally** — **and the difference between 2019 and 2027 is the most important thing on the page.**',
  '⚠ **Quote a reconstructed reason in the person\'s own words, and get it corrected and initialled.** ⚠ *Corrected and initialled by him on 11 February.* **The correction is what turns your account of their reasoning into their record of it.**',
  '⚠ **Keep both halves and keep their ranking.** ⚠ *The cost I could have borne. It was the unreliability of the answer I would not pay for.* **He ranks them himself, and a file that keeps only the cost records a thrifty decision instead of a careful one.**',
  '⚠ **Add what the evidence says that they did not, and take it back to them.** ⚠ **A third possibility he did not name and could have — and his answer: *it would have changed what I tried; I do not know that it would have changed what I decided.*** **That answer is worth more than the finding, because it tells a reader what the finding is and is not.**',
  '⚠ **And say why the statuses differ, in two sentences.** ⚠ *Memory of a decision reorganises itself around the outcome.* **Not as a doubt about the person** — **as a fact about the kind of document a reconstruction is.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reasons page for two decisions at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE, PAGE ______________: THE REASONS. ______________. ______________.**   ⚠ **1  ______________. Status: ______________. Source: ______________.**   **______________ rather than ______________, because ______________.** ⚠ **The alternative recorded as rejected was ______________.**   ⚠ **2  ______________. Status: RECONSTRUCTED. Source: ______________, in conversation, ______________. Corrected and initialled on ______________.**   **In their words: "______________."**   ⚠ **One thing the evidence adds that they did not say. ______________.** ⚠ **Their answer: "______________."**   ⚠ **Why the statuses differ. ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A status line on every reason', ''],
  ['*Rather than* in every reason', ''],
  ['The reconstructed reason in their words, initialled', ''],
  ['Both halves, in their ranking', ''],
  ['Why the statuses differ', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *rather than* clause. ⚠ The class says of each whether it names an alternative somebody could actually have taken.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a reason at your work that only one person knows (**200 to 240 words**). Say what the decision was, what the alternative was, why nobody wrote it down, how long that person will be there, and what you would ask them this week.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is this the reason or the situation?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did nobody write the reason down because nobody asked? ⚠ **Usually all three** — **and the finding of the unit is that an unrecorded reason is almost never a concealed one.**'));
out.push(box('Homework', ['Write your final text. Then take one decision at your work, ask somebody *rather than what?*, and write their answer in their words (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.5 =======================
out.push(pb());
out.push(h2('18.5  What was considered and rejected'));
out.push(p('**Function:** recording the options not taken   ·   **Grammar:** _X was considered and rejected, because Y; it would now be worth re-examining if Z_   ·   **Pronunciation:** a rejected option read neutrally'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your firm has considered twice without knowing it had considered it before. ⚠ Then say what it cost the second time.'));
out.push(p('**b**  Which protects 2032? _the van route was rejected · a van route out of Mezzeh was considered in 2019 and rejected because it would not hold stock; it would be worth re-examining if the firm had a second van_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Bassel discovered?   **A** nothing   **B** that the van route he proposed in December was considered and rejected in 2019, and that he spent three weeks on it   **C** a document'));
out.push(p('**b**  Listen again. **1** Why does Nour say a rejected option needs a re-examination condition? **2** What does Bassel say he would still have done differently?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  "I spent three weeks on it"', [
  ['Bassel', 'The van route. I put it to Mr Ayoub in December as a new idea.'],
  ['Nour', '⚠ **It is in the 2019 board note, rejected.** ⚠ **Page two, two lines.**'],
  ['Bassel', 'Two lines. I spent three weeks on it.'],
  ['Nour', '⚠ **And the two lines would have saved you the three weeks** — **which is the only argument for writing them that anybody ever needs.**'],
  ['Bassel', 'Rejected for what reason?'],
  ['Nour', '⚠ **That it would not hold stock. One van, three sites.**'],
  ['Bassel', 'That reason has gone. We hire a second van four months a year now.'],
  ['Nour', '⚠ **Which is exactly why a rejected option needs its condition written beside it.** ⚠ **Not just *rejected because* but *worth re-examining if*.**'],
  ['Bassel', 'Say that again.'],
  ['Nour', '⚠ **A rejected option with only a reason reads as closed for ever.** ⚠ **A rejected option with a condition reads as open the day the condition changes** — **and yours changed in 2024 and nobody noticed, because the note said rejected and stopped.**'],
  ['Bassel', 'So I was right in December.'],
  ['Nour', '⚠ **You were right in December and you got there the expensive way.** **Three weeks, and you presented it as new, which means the board could not weigh it against what it was weighed against in 2019.**'],
  ['Bassel', 'What would you have had me do?'],
  ['Nour', '⚠ **The same proposal, with a first line saying this was considered in 2019 and rejected because of the van, and the van has changed.** ⚠ **That is a stronger paper than mine was** — **because a proposal that has already survived one rejection on a reason that has since gone is a better thing than a new idea.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The rejected option — three parts, not one**',
  table(['', 'Usually written', 'What it needs'], [
    ['**the option**', '⚠ *the van route was rejected*', '⚠ *a van route out of Mezzeh was considered in 2019 and rejected*'],
    ['**the reason**', '**(sometimes)**', '⚠ *because it would not hold stock — one van, three sites*'],
    ['⚠ **the condition**', '⚠ **(almost never)**', '⚠ *worth re-examining if the firm had a second van* — **and it hired one four months a year from 2024**'],
  ], [1.6, 2.6, 4.6]),
  '⚠ **A rejected option with only a reason reads as closed for ever.** ⚠ **With a condition beside it, it reads as open the day the condition changes** — **and the condition is the part almost nobody writes, which is why firms re-propose rejected things at full cost.**',
  '⚠ **Two lines in 2019 would have saved three weeks in 2026.** ⚠ **That is the whole argument for recording rejections and it is worth making in exactly those terms** — **a cost, in weeks, to a named person.**',
  '⚠ **And the second cost is bigger than the three weeks.** ⚠ **A re-proposal presented as new cannot be weighed against what it was weighed against the first time** — **so the board decides it twice on different grounds and cannot tell that it has.**',
  '⚠ **Use the earlier rejection as strength, not as embarrassment.** ⚠ *This was considered in 2019 and rejected because of the van; the van has changed.* **A proposal that has survived one rejection on a reason that has since gone is a stronger paper than a new idea, and it reads as a firm that knows its own history.**',
  '⚠ **Write the condition even when you cannot imagine it changing.** ⚠ **One van, three sites looked permanent in 2019** — **and conditions that look permanent are precisely the ones nobody revisits when they stop being true.**',
  '**Practise:** Take something your firm rejected. Write the option, the reason, and the condition under which it would be worth re-examining.',
  '**Useful phrases:**  considered and rejected  ·  worth re-examining if  ·  two lines would have saved three weeks  ·  presented as new  ·  the reason has gone',
  '**Pronunciation – a rejected option, neutrally.** 🔊 **Track 18.10** Listen twice. ⚠ **The first says *it is in the 2019 board note, rejected* flatly.** ⚠ **The second says it with a lift on *rejected*.** **Flat, it is a fact he needed; lifted, it is *I told you so*, and he stops listening at *2019*.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes; B finds the earlier rejection.'));
out.push(dlg(null, [
  ['A', 'I want to propose __________.'],
  ['B', '⚠ **That was considered in __________ and rejected.**'],
  ['A', '__________.'],
  ['B', '⚠ **The reason was __________. Does that reason still hold?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then what condition should have been written beside it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And how would you write the first line of your paper now?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that stronger or weaker than presenting it as new?**'],
]));
out.push(table(['Role card 1 — two lines', 'Role card 2 — I told you so'], [[
  '⚠ **A objects that recording every rejected option would fill the file with things that did not happen.** ⚠ **B asks what the van route cost Bassel in December.** ⚠ **B\'s point: two lines in 2019 against three weeks in 2026, plus a board that decided the same thing twice on different grounds** — **and the ratio is the argument.**',
  '⚠ **A finds the earlier rejection and reports it with a lift on *rejected*.** ⚠ **B stops at the year and hears nothing after it.** ⚠ **B\'s point: the earlier rejection is strength for the new paper, and the only way it functions as strength is if the person reading it is still listening** — **which a flat delivery and a lifted one decide between.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one rejected option in all three parts. ⚠ Then say what the condition is and whether it has already changed.'));
out.push(PHRASE_CARD(['considered and rejected', 'does the reason still hold?', 'worth re-examining if', 'two lines, three weeks', 'stronger than new']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things your firm has rejected.'));
out.push(table(['The option, and when', 'Rejected because', 'Worth re-examining if', 'Has it changed?'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.4, 2.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______ we considered _______ and rejected it because _______. It would be worth re-examining if _______. That _______ changed in _______._'));
out.push(p('**Listener task:** count how many conditions have already changed without anybody noticing. ⚠ Then ask how many of the rejections were recorded with a reason at all.'));
out.push(p('**Board clinic:** your teacher writes four rejection notes on the board — find the one with no condition, and the one whose condition is so vague it could never be tested. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE, PAGE 4: WHAT WAS CONSIDERED AND REJECTED. 10 February. N. Mansour.**',
  table(['The option', 'When, and by whom', 'Rejected because', 'Worth re-examining if'], [
    ['**a van route out of Mezzeh instead of a store**', '**Aug 2019, board**', '**it would not hold stock: one van, three sites**', '⚠ **the firm had a second van** — ⚠ **CONDITION MET: a second van has been hired four months a year since 2024. Re-proposed Dec 2026 as new; see the note below.**'],
    ['**restocking the Homs counter lines**', '**Nov 2021, K. Ayoub**', '**about 4 million, and the answer would not have been reliable**', '**the cost of the test fell, or a way existed of telling the site from the stock**'],
    ['**keeping the lease and subletting**', '**Nov 2021, K. Ayoub**', '**the landlord refused in writing, 2 Nov 2021**', '⚠ **the landlord changed; the unit was let to a chemist in 2022, so this is now closed for a different reason and should not be re-proposed**'],
    ['**a third Damascus site instead of Homs**', '**Aug 2019, board**', '**not minuted** — ⚠ **the option appears in the discussion and no reason is recorded**', '⚠ **unknown, and that is the point: this is the one line on the page a reader cannot use**'],
  ], [2.3, 1.5, 2.6, 3.6]),
  '⚠ **The note on row 1.** **The van route was re-proposed in December 2026 by B. Nassif, who did not know it had been considered in 2019, and who spent about three weeks on it.** ⚠ **That cost is the argument for this page existing, and it is recorded with his agreement.** **The deeper cost is that the board weighed it in December against today\'s alternatives and could not weigh it against 2019\'s** — **so one option has now been decided twice, on different grounds, and neither decision knows about the other.**',
  '⚠ **The note on row 4.** **A third Damascus site was discussed in August 2019 and no reason for rejecting it is recorded anywhere.** ⚠ **Mr Ayoub does not recall it, and the board note has one clause: "the alternative of a further Damascus site was not pursued."** **So of the four options on this page, three can be re-examined and one cannot** — **and the fourth is the only one that might have been right.**',
  '⚠ **What I have NOT done.** **I have not written re-examination conditions for rows where I would be inventing them.** **Row 2\'s condition is Mr Ayoub\'s, from 3.2; row 3\'s is a fact about the unit.** ⚠ **Row 4 has no condition because nobody knows the reason, and writing a plausible one would be the worst thing on this file** — **a condition I had invented would be indistinguishable in 2032 from one the board had set.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two costs does the note on row 1 record, and which does the writer call deeper?'));
out.push(item('2', 'What does the writer say about row 4, and why is it the one a reader cannot use?'));
out.push(item('3', 'Why has she not written a condition for row 4?'));
out.push(box('Writer\'s box', [
  '**The considered-and-rejected page — five parts:** ⚠ **four columns: option · when and by whom · rejected because · worth re-examining if** → ⚠ **CONDITION MET flagged where it has** → **a note on any option that was re-proposed, with its cost** → ⚠ **a row marked where the reason was never recorded** → ⚠ **and what you have NOT written, and why.**',
  '⚠ **Four columns, and the fourth is the one that does the work.** ⚠ **Option, when and by whom, reason, condition** — **and the *by whom* matters because a board rejection and one manager\'s rejection are different weights.**',
  '⚠ **Flag a condition that has already been met, in capitals, in the cell.** ⚠ *CONDITION MET: a second van has been hired four months a year since 2024.* **An unflagged met condition is the same as no condition at all, and this is the only mechanism that makes the page work by itself.**',
  '⚠ **Record a re-proposal and its cost, with the person\'s agreement.** ⚠ *About three weeks, and it is recorded with his agreement.* **A cost in weeks against two lines is the argument for the page, and getting the agreement is what keeps it a record rather than a complaint.**',
  '⚠ **Mark an option whose reason was never recorded, and say so flatly.** ⚠ *Three can be re-examined and one cannot.* **And say what the file does contain** — *one clause: the alternative was not pursued* — **so a reader knows there is nothing more to find.**',
  '⚠ **And say what you have not written.** ⚠ *A condition I had invented would be indistinguishable in 2032 from one the board had set.* **That sentence is the reason the restraint is worth recording rather than just exercising.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a considered-and-rejected page for your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE, PAGE ______________: WHAT WAS CONSIDERED AND REJECTED. ______________. ______________.**   **The option** | **When, and by whom** | **Rejected because** | ⚠ **Worth re-examining if**   **______________** | **______________** | **______________** | ⚠ **______________** — ⚠ **CONDITION MET: ______________**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | ⚠ **not recorded** | ⚠ **unknown**   ⚠ **The note on row ______________. ______________.** ⚠ **That cost is ______________.**   ⚠ **The note on the unrecorded row. ______________.**   ⚠ **What I have NOT done. ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A condition beside every reason, or *unknown*', ''],
  ['Any met condition flagged in capitals', ''],
  ['*By whom* on every rejection', ''],
  ['A re-proposal and its cost, with agreement', ''],
  ['What you have not written, and why', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their conditions. ⚠ The class says of each whether it could be tested, and whether it has already been met.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your firm decided twice (**200 to 240 words**). Say what it was, what the first reason was, whether the second decision knew about the first, what it cost, and what two lines would have prevented.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could this condition be tested?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the second decision not know about the first? ⚠ **Usually all three** — **and in at least one the two decisions went opposite ways, which no file records as a change of mind because neither knows the other happened.**'));
out.push(box('Homework', ['Write your final text. Then take one rejected option at your work and write its re-examination condition, and say whether the condition has been met (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.6 =======================
out.push(pb());
out.push(h2('18.6  The note for a question nobody has asked yet'));
out.push(p('**Function:** writing before the question arrives, and indexing it   ·   **Grammar:** _if anybody asks why X, the answer is Y_   ·   **Pronunciation:** an index line read as a question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a question somebody will ask your firm in five years. ⚠ Then say whether the answer is written anywhere.'));
out.push(p('**b**  Which would a stranger find? _see page 3 · Why was Homs closed rather than restocked? — page 3, s.3.2_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the index?   **A** it is too long   **B** it should be questions, because a reader arrives with a question and not with a topic   **C** it is unnecessary'));
out.push(p('**b**  Listen again. **1** Why does he say a topic index fails? **2** What does he say about the questions nobody has asked yet?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  "Index it as questions"', [
  ['Mr Sayegh', 'Your index says: dates, people, reasons, options, the count.'],
  ['Nour', 'Those are the pages.'],
  ['Mr Sayegh', '⚠ **They are the pages, and nobody arrives at a file with a page in mind.** ⚠ **They arrive with a question, and your index makes them guess which heading it lives under.**'],
  ['Nour', 'So: questions.'],
  ['Mr Sayegh', '⚠ **Index it as the questions a reader will actually have.** ⚠ *Why was Homs closed rather than restocked?* **Page 3, section 3.2. Not *reasons*.**'],
  ['Nour', 'How many?'],
  ['Mr Sayegh', '⚠ **Eight or ten. And at least three of them should be questions nobody has asked yet.**'],
  ['Nour', 'How do I know what nobody has asked?'],
  ['Mr Sayegh', '⚠ **You have spent a week being the first person to ask most of them, so you are the best-placed person in the company to guess.** ⚠ **Which ones were hard to answer? Those are next time\'s questions too.**'],
  ['Nour', 'The hardest was why it closed rather than changed.'],
  ['Mr Sayegh', '⚠ **Then that is question one, and the next reader will have it in about forty seconds.**'],
  ['Nour', 'And the questions I cannot answer at all?'],
  ['Mr Sayegh', '⚠ **Those go in the index too, with *not answerable from this file* and what would be needed.** ⚠ **An index that lists only what the file can do is a sales document** — **the useful one tells a reader in one page what they will not get, so they stop looking here and start looking somewhere else.**'],
  ['Nour', 'That is the opposite of how our files are built.'],
  ['Mr Sayegh', '⚠ **Our files are built to be stored. Yours is being built to be read by somebody with a deadline** — **and those produce different documents, which is most of what Unit 18 is about.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The index as questions**',
  table(['', 'A topic index', 'A question index'], [
    ['**the entry**', '⚠ *reasons — page 3*', '⚠ *Why was Homs closed rather than restocked? — p. 3, s.3.2*'],
    ['**what it assumes**', '**that the reader knows which heading their question lives under**', '⚠ **nothing** — **the reader recognises their own question**'],
    ['⚠ **the unasked question**', '**(absent)**', '⚠ *Did anybody count the walk-in trade before 2026? — p. 2, and the answer is no*'],
    ['⚠ **what the file cannot answer**', '⚠ **(absent, always)**', '⚠ *Who was "the Doctor"? — NOT ANSWERABLE from this file; K. Ayoub may know until April*'],
  ], [1.8, 2.8, 4.2]),
  '⚠ **A reader arrives with a question, not a topic.** ⚠ **A topic index makes them guess which heading their question lives under, and a stranger guesses wrong** — **because the headings were written by somebody who already knew the answers.**',
  '⚠ **Eight or ten questions, in the reader\'s words.** ⚠ **Full questions with question marks** — **because a reader scanning a page recognises their own question in a way they never recognise a heading.**',
  '⚠ **Three of them should be questions nobody has asked yet, and you know which.** ⚠ **The ones that were hard for you to answer are next time\'s questions too** — **and having just been the first person to ask them makes you the best-placed person in the firm to list them.**',
  '⚠ **And index what the file CANNOT answer, with what would be needed.** ⚠ *NOT ANSWERABLE from this file; K. Ayoub may know until April.* **An index that lists only what the file can do is a sales document; this one saves a stranger half a day and points them at the person.**',
  '⚠ **A file built to be stored and a file built to be read are different documents.** ⚠ **The question index is the clearest place the difference shows** — **and it costs one page.**',
  '**Practise:** Take a file at your work. Write five of its index entries as questions, and one as a question it cannot answer.',
  '**Useful phrases:**  nobody arrives with a page in mind  ·  index it as questions  ·  which ones were hard to answer?  ·  not answerable from this file  ·  built to be stored, built to be read',
  '**Pronunciation – an index line as a question.** 🔊 **Track 18.12** Listen twice. ⚠ **The first reads *Why was Homs closed rather than restocked?* with the rise of a real question.** ⚠ **The second reads it flat, as a heading.** **Risen, a reader hears their own question; flat, it is another topic.** Say it four times with the rise.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a topic entry; B turns it into questions.'));
out.push(dlg(null, [
  ['A', 'The index says __________, page __________.'],
  ['B', '⚠ **What question would bring somebody to that page?**'],
  ['A', '__________.'],
  ['B', '⚠ **In their words, with a question mark.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now one nobody has asked yet.**'],
  ['A', '__________.'],
  ['B', '⚠ **And one the file cannot answer. What would be needed?**'],
  ['A', '__________.'],
  ['B', '⚠ **Would a stranger with a deadline find what they came for?**'],
]));
out.push(table(['Role card 1 — the headings are obvious', 'Role card 2 — not listing the gaps'], [[
  '⚠ **A says a topic index is enough because the headings are obvious.** ⚠ **B asks which heading *did anybody count the walk-in trade?* lives under, and offers three plausible answers.** ⚠ **B\'s point: the headings are obvious to somebody who knows the answers, and a stranger guesses wrong** — **which is the only test that matters.**',
  '⚠ **A refuses to index what the file cannot answer, on the ground that it advertises the file\'s weaknesses.** ⚠ **B asks what a stranger does when they cannot find something: they read all six pages and then ask somebody.** ⚠ **B\'s point: the gap line saves them half a day and names the person** — **and a file nobody can navigate is not protected by silence, it is just slower.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write three index questions for a file of yours, one of them unasked. ⚠ Then write one the file cannot answer, with what would be needed.'));
out.push(PHRASE_CARD(['nobody arrives with a page', 'in their words', 'which were hard?', 'not answerable from this file', 'what would be needed']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a file at your work.'));
out.push(table(['The question, in a reader\'s words', 'Where the answer is', 'Asked before?', 'Or: what would be needed'], [['', '', '', ''], ['', '', '', '']], [3.2, 1.8, 1.6, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _One question is: _______? The answer is at _______. One nobody has asked yet is: _______? And one the file cannot answer is: _______? For that you would need _______._'));
out.push(p('**Listener task:** count how many of the unasked questions you would also have. ⚠ Then ask how many of the files have any index at all.'));
out.push(p('**Board clinic:** your teacher writes four index pages on the board — find the one that is topics with question marks added, and the one that lists no gaps. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the index, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS FILE, PAGE 6: THE INDEX. 11 February. N. Mansour. Ten questions. Three have not been asked by anybody.**',
  table(['The question', 'Where', 'Note'], [
    ['**Why was Homs closed rather than restocked?**', '**p. 3, s.3.2**', '⚠ **RECONSTRUCTED Feb 2027, initialled; not a contemporaneous record**'],
    ['**Why was it opened?**', '**p. 3, s.3.1**', '**contemporaneous; board note of 14 Aug 2019**'],
    ['**Who decided, both times?**', '**p. 2**', '⚠ **the same person: K. Ayoub, office manager 2011–2027**'],
    ['⚠ **Did anybody count the walk-in trade before 2026?**', '**p. 2**', '⚠ **no, and nothing on the file says anybody should have — NOT ASKED BEFORE**'],
    ['**Was a van route considered instead?**', '**p. 4, row 1**', '⚠ **yes, 2019, rejected; CONDITION NOW MET and re-proposed in Dec 2026 as new**'],
    ['⚠ **Has this company decided the same thing twice?**', '**p. 4, rows 1 and 4**', '⚠ **yes, at least once, and row 4 may be a second time nobody can check — NOT ASKED BEFORE**'],
    ['**What did the 2026 count find?**', '**p. 5**', '**196 a week, between the two thresholds; decision taken by K. Ayoub on 4 Feb**'],
    ['**Why was the reopening approved against the author\'s own paper?**', '**p. 5, s.5.4**', '⚠ **the count fell between the thresholds, so it was a judgement; the paper is at p. 5A**'],
    ['⚠ **What will this file not be able to tell me after April 2027?**', '**p. 2A and p. 6A**', '⚠ **six untraced names and the whole of s.3.2\'s corroboration — NOT ASKED BEFORE**'],
    ['**Who was "the Doctor"?**', '⚠ **nowhere**', '⚠ **NOT ANSWERABLE from this file. K. Ayoub may know, until April. Accounts may have a payment.**'],
  ], [3.4, 1.4, 4.2]),
  '⚠ **A note on the three marked NOT ASKED BEFORE.** **I have marked them because they were the hardest three to answer and nobody in five years had put any of them.** ⚠ **The third is the one I would read first if I arrived here in 2032** — **it is the only question on the page about the file itself rather than about Homs.**',
  '⚠ **A note on the last row.** **It is in the index with *nowhere* in the second column on purpose.** ⚠ **A stranger who cannot find something assumes they have looked badly and reads all six pages again** — **this line costs them nothing and tells them to go to accounts and, until April, to Mr Ayoub.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many questions are indexed, and how many had never been asked?'));
out.push(item('2', 'Which question does the writer say she would read first in 2032, and why?'));
out.push(item('3', 'Why is a question the file cannot answer in the index at all?'));
out.push(box('Writer\'s box', [
  '**The question index — five parts:** ⚠ **eight to ten questions in a reader\'s words** → **where the answer is, to the section** → ⚠ **a note column carrying the status of the answer** → ⚠ **the unasked ones marked** → ⚠ **and the unanswerable ones in the index with *nowhere*.**',
  '⚠ **Questions, with question marks, in the words a reader would use.** ⚠ *Why was Homs closed rather than restocked?* **Not *reasons for closure*, which a stranger would not search for and would not recognise.**',
  '⚠ **Use the note column for the status of the answer, not for more answer.** ⚠ *RECONSTRUCTED Feb 2027, initialled; not a contemporaneous record.* **A reader deciding whether to open a page needs to know what kind of answer is on it.**',
  '⚠ **Mark the questions nobody has asked, and say how you chose them.** ⚠ *They were the hardest three to answer and nobody in five years had put any of them.* **The method is the justification, and it is a method any reader can apply to their own file in an afternoon.**',
  '⚠ **Include one question about the file itself.** ⚠ *What will this file not be able to tell me after April 2027?* **It is the question a stranger most needs and would never think to ask** — **and on this file it is the only one with a deadline inside it.**',
  '⚠ **And index the unanswerable, with *nowhere* and what would be needed.** ⚠ **A stranger who cannot find something assumes they looked badly and reads everything twice** — **one line saves them that, and names the two places to try instead.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a question index for a file at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ FILE, PAGE ______________: THE INDEX. ______________. ______________. ______________ questions. ______________ have not been asked by anybody.**   **The question** | **Where** | **Note**   **______________?** | **______________** | **______________**   **______________?** | **______________** | ⚠ **______________**   ⚠ **______________?** | **______________** | ⚠ **______________ — NOT ASKED BEFORE**   ⚠ **______________?** | ⚠ **nowhere** | ⚠ **NOT ANSWERABLE from this file. ______________ may know. ______________.**   ⚠ **A note on the ones marked NOT ASKED BEFORE. ______________.** ⚠ **______________ is the one I would read first if I arrived here in ______________, because ______________.**   ⚠ **A note on the last row. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Real questions in a reader\'s words', ''],
  ['The note column carries the answer\'s status', ''],
  ['The unasked ones marked, with the method', ''],
  ['One question about the file itself', ''],
  ['The unanswerable indexed, with *nowhere*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *not answerable* line. ⚠ The class says whether it names a person or a place to try instead.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the question your firm will be asked in five years and cannot currently answer (**200 to 240 words**). Say what it is, who could answer it today, how long they will be there, and what one page would fix.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would a stranger recognise this as their question?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the question be answered today by one person? ⚠ **Usually all three, and usually the same kind of person** — **the one who has been there longest and has never been asked.**'));
out.push(box('Homework', ['Write your final text. Then write the question index for one file at your work: six questions, one unasked and one unanswerable (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 18.7 =======================
out.push(pb());
out.push(h2('18.7  Review & Mediate: the firm that decided it twice'));
out.push(p('⚠ **This is the sixth unit of this book, and the halfway point: the Mid-Book Test comes next.** ⚠ **Six units ago Unit 13 asked what a clause obliges somebody to do; this one asks what a file can still say when nobody is left who knows.**'));
out.push(p('**Function:** moving a finding from a person to a practice   ·   **Grammar:** _no reason is recorded for either decision_   ·   **Pronunciation:** a finding read without a charge in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**18.1**  What does a stranger assume about a decision with no reason on the file?', ''],
  ['**18.2**  Which of the three context sentences does almost nobody write?', ''],
  ['**18.3**  How do you record a person in a file that will outlive you?', ''],
  ['**18.4**  What question produces a reason rather than a situation?', ''],
  ['**18.5**  What does a rejected option need beside its reason?', ''],
  ['**18.6**  What goes in the index with *nowhere* in the second column?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel want on page one?   **A** an apology   **B** the finding that the firm chose a northern site over a third Damascus site twice and recorded no reason either time   **C** the van route'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub say such a page would be a document about? **2** What are the two different things Nour has asked him for in one afternoon?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  "Then it is a document about me"', [
  ['Bassel', 'Row four. A third Damascus site, discussed in 2019, no reason recorded. And in February we chose north over Damascus again, and there is no reason recorded for that either.'],
  ['Nour', '⚠ **That is the strongest finding in the file.**'],
  ['Bassel', 'Then it belongs on page one, not in a note at the foot of page four.'],
  ['Mr Ayoub', '⚠ **Put it on page one and then read it as a stranger will.** ⚠ **The same man decided it in 2019 and in 2027, and wrote down his reasons neither time.** **That is not a finding about a practice. That is a document about me.**'],
  ['Bassel', 'It is not meant as one.'],
  ['Mr Ayoub', '⚠ **In 2032 nobody will know what it was meant as.** ⚠ **They will have the sentence.**'],
  ['Nour', 'Mr Ayoub, I also need your initials on section 3.2. It is the only record of why Homs closed and it does not exist without you.'],
  ['Mr Ayoub', '⚠ **I will initial my own words. I will not initial a file whose first page is that sentence.** **Those are two different requests and you have put them to me in one afternoon.**'],
  ['Bassel', 'So the finding goes out because he will not sign.'],
  ['Nour', '⚠ **No. And it does not go on page one in your form either.** ⚠ **You are both right, and you are right about different things.**'],
  ['Bassel', 'Say which.'],
  ['Nour', '⚠ **Bassel is right that it is the most important thing anybody has found, and a file that buries it in a footnote has failed at the only job it has.** ⚠ **Mr Ayoub is right that as written it is a document about him, because it names a person where the mechanism is the firm\'s** — **no form, no owner, nobody asking.**'],
  ['Mr Ayoub', 'And the mechanism is not an excuse.'],
  ['Nour', '⚠ **No. It is the finding.** ⚠ **A firm where a reason has nowhere to go will lose every reason it ever has, and it will go on doing that after you and I have both left** — **which is why it belongs on page one and why your name does not.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A finding about a practice, where the file names a person**',
  table(['', 'As Bassel wrote it', 'As a practice', 'What changes'], [
    ['**the event**', '⚠ *the same man decided it twice and recorded no reason either time*', '⚠ *the firm chose a northern site over a third Damascus site in 2019 and again in 2027, and no reason is recorded for either decision*', '⚠ **the subject is the firm, and both decisions are still there**'],
    ['⚠ **the mechanism**', '**(absent)**', '⚠ *there was no document on which a reason was recorded and no office whose task it was to ask for one*', '⚠ **this is the finding, and it is checkable**'],
    ['**the consequence**', '**(implied: one man was careless)**', '⚠ *the firm will lose every reason it has for as long as that holds*', '⚠ **it points forward, so it is worth writing**'],
  ], [1.5, 2.8, 3.4, 2.3]),
  '⚠ **When a finding about a practice names a person, a reader in five years has only the sentence.** ⚠ **Nobody will know what it was meant as** — **so *as written* is the only thing that exists, and the objection is about the document and not about anybody\'s feelings.**',
  '⚠ **Move the subject to the firm and lose nothing.** ⚠ **Both decisions, both dates and both silences stay** — **the only thing removed is the name, and the finding gets larger, because *one man was careless* is a smaller claim than *this firm cannot hold a reason*.**',
  '⚠ **Name the mechanism and make it checkable.** ⚠ *No document on which a reason was recorded, and no office whose task it was to ask for one.* **A reader in 2032 can verify both in ten minutes, which they could never do with *careless*.**',
  '⚠ **Separate two requests that arrived in one afternoon.** ⚠ **His initials on his own words, and his assent to a page about the firm, are different things** — **and putting them together is what makes refusing either look like refusing both.**',
  '⚠ **And say which person is right about what.** ⚠ *Bassel is right that it is the most important thing anybody has found. Mr Ayoub is right that as written it is a document about him.* **Two people can be right about different things in one disagreement, and saying which is the whole of the mediation.**',
  '**Useful phrases:**  as a stranger will read it  ·  they will have the sentence  ·  the mechanism is the firm\'s  ·  no form, no owner, nobody asking  ·  right about different things',
  '**Pronunciation – a finding with no charge in it.** 🔊 **Track 18.14** Listen twice. ⚠ **The first says *no reason is recorded for either decision* with no stress on any word.** ⚠ **The second stresses *either*.** **Unstressed it is a finding; stressed it is an accusation** — **and one word decides which document the firm is holding.** Say it four times, unstressed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a finding that names a person; B moves it to the practice. ⚠ **Use the four steps, in order.**'));
out.push(table(['B says', 'A answers'], [
  ['⚠ **Read it as a stranger in 2032 will. What is that a document about?**', '______________'],
  ['⚠ **Now make the firm the subject, and lose no fact.**', '______________'],
  ['⚠ **What is the mechanism? No form, no owner, nobody asking?**', '______________'],
  ['⚠ **And what does it cost going forward?**', '______________'],
  ['⚠ **Is your version weaker than the one with the name in it, or larger?**', '______________'],
], [4.6, 4.4]));
out.push(table(['Role card 1 — softening it', 'Role card 2 — he will not sign'], [[
  '⚠ **A says that moving the subject to the firm is softening the finding to keep the peace.** ⚠ **B asks which fact has been removed, and the answer is none: both dates, both decisions and both silences remain.** ⚠ **B\'s point: *one man was careless* is a smaller claim than *this firm cannot hold a reason*, so the move is not a softening** — **it is the larger finding, and the checkable one.**',
  '⚠ **A says the finding is being dropped because Mr Ayoub will not sign.** ⚠ **B separates the two requests: his initials on his own words at s.3.2, and his assent to a page about the firm.** ⚠ **B\'s point: putting them in one afternoon made refusing either look like refusing both** — **and s.3.2 exists only with him, so losing it to win the wording is the worse trade by a long way.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one finding in both forms. ⚠ Then say which of the two a reader could check in ten minutes, and which is the larger claim.'));
out.push(PHRASE_CARD(['as a stranger will read it', 'the firm as subject', 'lose no fact', 'no form, no owner', 'right about different things']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** findings at your work that name a person.'));
out.push(table(['As it names a person', 'With the firm as subject', 'The mechanism', 'What it costs going forward'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.6, 2.4, 2.6]));
out.push(stage('4R', 'Report – mediation', 9));
out.push(p('**The mediation.** Bassel wants the double decision on page one as he wrote it. Mr Ayoub will initial his own words and nothing else. Nour needs both of them.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What the file ends up saying'], [[
  '⚠ **Bassel:** **that the firm chose north over a third Damascus site twice with no reason recorded either time is the most important thing in the file, and the foot of page four is where findings go to die.**  ⚠ **Mr Ayoub:** **as written, with a person as its subject, it is a document about him, and in 2032 nobody will know it was not meant as one.**',
  '⚠ **Bassel:** **his sentence. The finding goes on page one with the firm as its subject and the mechanism named, and no name in it** — **and he states, in the file, that he is losing a sentence and not a finding.**  ⚠ **Mr Ayoub:** **the comfort of the file not carrying it at all. He initials s.3.2 as his own words; the page-one finding is written by Nour, endorsed by nobody, and he does not assent to it.**',
  '⚠ **Page 1, s.1.5:** *This firm has twice chosen a northern site over a third Damascus site — in August 2019 and in February 2027 — and no reason is recorded for either decision. There was no document on which such a reason was recorded and no office whose task it was to ask for one. Until that changes this firm will lose every reason it has. Written by N. Mansour, 11 February. Endorsed by no other person.*  ⚠ **And s.3.2 carries Mr Ayoub\'s initials on his own words, and nothing else.**',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Both are right. _______ is right that _______. _______ is right that _______. So the finding goes _______, with _______ as its subject and _______ named, and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence Mr Ayoub did give, which stands at s.3.2(b) and is his own:** *"There was no form. There was nobody whose job it was to ask me. I am not offering that as an excuse — I am telling you it will happen to the next person in this chair, and you may write that down."*'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 3)', 10));
out.push(p('⚠ **This unit is Part 3: one longer text, six multiple-choice questions, four options each. It is the fourth time in the level — units 3, 7, 12 and this one.** ⚠ **Every answer is in the text and three of the four options in each question will be true of the world and not of this paragraph.**'));
out.push(box(null, [
  '**THE DOCUMENT THAT OUTLIVES ITS AUTHOR — from a trade association\'s guidance to members.**',
  'Most of what an organisation knows is not written down, and almost nothing that is written down was written for a stranger. A file assembled over ten years is assembled by people who shared an office, a vocabulary and a set of assumptions so complete that none of them was ever stated. The result is a body of documents perfectly adequate for as long as one of its authors is still in the building, and which becomes, on the morning after the last of them leaves, a collection of answers to questions nobody can reconstruct.',
  'The commonest failure is not inaccuracy. It is the unrecorded reason. A decision is almost always written down; the alternative that was rejected, and the ground on which it was rejected, almost never are. The asymmetry has a simple cause. The decision must be communicated, because somebody has to act on it, while the reason has to be communicated to nobody, because everyone who needs it already holds it. Reasons are therefore recorded only when they are contested — which means that the quiet decisions, taken by one person who was certain, are precisely the ones with nothing behind them.',
  'The consequence is a particular misreading, and it runs in one direction only. A reader five years later, finding a decision with no reason attached, concludes that no reason was needed: that the course taken was obvious, or inevitable, or the only one available. It is a reasonable inference and it is usually wrong. Worse, it is self-confirming, because a decision that appears inevitable is never looked at again, so an option rejected for a reason that has since evaporated stays rejected for ever — or, more expensively, is proposed afresh by somebody who does not know it has been proposed before.',
  'The remedies are unglamorous and cheap. Write the reason as *X rather than Y, because Z*, which forces the alternative into the sentence. Record rejected options with the condition under which they would be worth re-examining, and flag the conditions already met. Name offices rather than people, with the dates of tenure, so that any signature can be placed. Put the context inside the document rather than behind a cross-reference, since the document will outlast the folder. And index a file as the questions a reader will bring to it, including those it cannot answer.',
  'None of this is difficult, and the reason it is not done is not laziness but sequence. The person best placed to write the reason down is the person for whom it is least necessary, at the moment when it is least necessary; and the person for whom it is indispensable will arrive years later and will never meet them. No amount of individual diligence closes that gap, because the two parties are never in the building at the same time. What closes it is a document on which a reason has somewhere to go, and an office whose task it is to ask for one — which is to say that an organisation\'s memory is not a quality of its people but a feature of its forms.',
]));
out.push(item('1', 'According to the first paragraph, the difficulty with a long-standing file is that'));
out.push(p('**A**  it holds more documents than a stranger can read.   **B**  its authors disagreed about the assumptions behind it.   **C**  it was written by people whose shared assumptions were never stated.   **D**  it was assembled without any system.', { indent: 300 }));
out.push(item('2', 'The writer says reasons are recorded only when contested because'));
out.push(p('**A**  a reason nobody disputes does not have to be communicated to anybody.   **B**  people are reluctant to put a contested reason in writing.   **C**  a decision is harder to record than a reason.   **D**  quiet decisions are taken by people who are uncertain.', { indent: 300 }));
out.push(item('3', 'The misreading in the third paragraph is described as self-confirming because'));
out.push(p('**A**  readers repeat one another\'s errors.   **B**  inaccurate files are copied into later files.   **C**  the inference the reader draws is usually correct.   **D**  a decision that appears inevitable is never looked at again.', { indent: 300 }));
out.push(item('4', 'Which remedy does the writer tie to the fact that a document will outlast its folder?'));
out.push(p('**A**  indexing the file as questions.   **B**  putting the context inside the document.   **C**  naming offices rather than people.   **D**  recording the condition for re-examination.', { indent: 300 }));
out.push(item('5', 'In the final paragraph the writer identifies the main obstacle as'));
out.push(p('**A**  a shortage of diligence among individuals.   **B**  the cost of the remedies proposed.   **C**  disagreement about what ought to be recorded.   **D**  the order in which the need for a reason arises.', { indent: 300 }));
out.push(item('6', 'The writer concludes that an organisation\'s memory depends on'));
out.push(p('**A**  how long its staff remain.   **B**  the care taken by individual writers.   **C**  whether its documents give a reason somewhere to go.   **D**  how thoroughly its files are indexed.', { indent: 300 }));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Three content points, all three present.** ⚠ **This is the third Part 2 of Book 2, after Units 14 and 16; Part 1, at 40 to 50 words, falls in the odd units of this book except at 20 and 21, where the rotation swaps.**',
  '⚠ **A report takes headings, and at 130 words you can afford three.** ⚠ *What is recorded · What this has cost · Recommendations.* **Headings are worth their words in Part 2 because they make the three content points visible to a marker in four seconds.**',
  '⚠ **The first point is a contrast, so write it as one.** ⚠ *Decisions are recorded in full. The alternatives rejected, and the reasons for rejecting them, are not recorded at all.* **Two sentences, and the second is the content point.**',
  '⚠ **The cost must be specific, and a cost in weeks to a named role beats a cost in principle.** ⚠ *One option rejected in 2019 was re-proposed in 2026 by a colleague who spent three weeks on it.* **Fifteen words, and no marker can call it vague.**',
  '⚠ **And the task asks for one recommendation that changes a document rather than a person\'s habits** — ⚠ **so recommend the document: *a reasons field on the decision sheet, with the alternative rejected*.** **A recommendation that people should be more careful is the commonest Part 2 answer and it scores nothing, because it cannot be checked.**',
  '⚠ **Close by naming who would own it.** ⚠ *I recommend that the administration office be asked for the reason at the point the decision is minuted.* **An owner turns a recommendation into something that can happen, and it is one clause.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Your company is losing the reasons behind its decisions. Your manager has asked for a report (**120 to 140 words**) saying **what is recorded and what is not**, giving **one cost already paid**, and recommending **two changes, one of them to a document rather than to anybody\'s habits**.'));
out.push(p('**REPORT: ______________**   **To:** ______________   **From:** ______________   **Date:** ______________   ⚠ **What is recorded.** **______________.** ⚠ **______________ are not recorded at all.**   ⚠ **What this has cost.** **______________.**   ⚠ **Recommendations.** ⚠ **First, that ______________** — **a change to the document and not to anybody\'s habits.** **Second, that ______________.** ⚠ **I recommend that ______________ be asked for the reason at the point the decision is ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings, carrying the three content points', ''],
  ['The contrast written as a contrast', ''],
  ['A cost that is specific — weeks, a figure, a role', ''],
  ['One recommendation that changes a document', ''],
  ['An owner named; 120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a reason your firm has already lost (**200 to 240 words**). Say what the decision was, who knew why, when they left or when they will, what it has cost or will cost, and which of the five remedies in the exam text would have prevented it.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one decision taken at your work this month and write its reason in the form *X rather than Y, because Z*, and say where in your firm such a sentence could be filed (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  They will not know that the same person decided ___ times.   a) all   b) both   c) every',
  '2  It was closed ___ than restocked.   a) sooner   b) other   c) rather',
  '3  The option was considered ___ 2019 and rejected.   a) at   b) in   c) on',
  '4  A reason with nowhere ___ go is a reason the firm will lose.   a) to   b) for   c) of',
  '5  Worth re-examining ___ the firm had a second van.   a) whether   b) unless   c) if',
  '6  Nobody ___ asked him in five years.   a) have   b) has   c) had',
  '7  The counter supervisor at Mezzeh, ___ H. Mourad.   a) then   b) than   c) that',
  '8  This file is written for somebody who ___ work here yet.   a) won\'t   b) didn\'t   c) doesn\'t',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 18.15** Listen to the conversation about the six untraced names. Complete the note.   Who "the Doctor" was: ______   Why he was consulted on the lease: ______   What the unit became in 2022, and what that explains: ______   How many of the six Mr Ayoub could name: ______   How long the conversation took: ______   What he says about the last sixteen years: ______'));
out.push(p('**C  Reading.** Read the index at 18.6 again. Say which three questions had never been asked, how she chose them, and why the row with *nowhere* in the second column is in the index at all.'));
out.push(p('**D  Writing.** Take a decision taken at your work in the last year. Write its reason in the form *X rather than Y, because Z*, add the condition under which the rejected option would be worth re-examining, and say where such a sentence could be filed (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['Nour', 'Mr Ayoub, six names in the old Homs file I cannot trace. May I read them to you?'],
  ['Mr Ayoub', 'Read them.'],
  ['Nour', 'Abu Khalil. Ghassan. Someone called the Doctor. And three first names in the daily sheets.'],
  ['Mr Ayoub', '⚠ **Abu Khalil was a carrier, from Hama, and he died in 2020. Ghassan was the branch supervisor\'s nephew and he held the keys** — **Ghassan Mardini, so he is on your list twice without you knowing it.**'],
  ['Nour', 'And the Doctor?'],
  ['Mr Ayoub', '⚠ **Dr Mikhail. A pharmacist. The landlord\'s brother-in-law.** ⚠ **He was consulted on the lease because the landlord wanted the unit to go to a pharmacy eventually and was taking advice on whether we would be easy to remove.**'],
  ['Nour', '⚠ **The unit was let to a chemist in 2022.**'],
  ['Mr Ayoub', '(pause) ⚠ **Yes. And I have never once put those two facts beside each other** — **not in 2021, and not when I heard about the chemist, and not until you read me a list of names you could not trace.**'],
  ['Nour', 'Which means the landlord\'s refusal to allow a sublet in November 2021 was not about subletting.'],
  ['Mr Ayoub', '⚠ **It was about getting the unit back. Which I could have known in 2021 if I had asked the Doctor what he was a doctor of.**'],
  ['Nour', 'That is five of the six, in about nine minutes.'],
  ['Mr Ayoub', '⚠ **The three in the daily sheets I cannot help you with; those were a different kind of record.** (pause) ⚠ **You have asked me eleven questions this month, Nour. In sixteen years in that office nobody asked me eleven questions.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**18.1** write for a reader in five years: what they will not know, and what they will assume instead',
  '**18.2** put the three context sentences inside a document, including what the figure meant at the time',
  '**18.3** record people as office, person and dates, and list the names you cannot trace',
  '**18.4** ask *rather than what?*, and record a reconstructed reason in the person\'s words, initialled',
  '**18.5** record a rejected option with its re-examination condition, and flag a condition already met',
  '**18.6** index a file as questions, including the unasked ones and the ones it cannot answer',
  '**18.7** move a finding from a person to a practice without losing a single fact',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three are from earlier in this course, and this unit is where they stop being vocabulary.** ⚠ **Institutional memory is not a quality of the people in a firm; it is a feature of the firm\'s forms** — **and *unrecorded* is not a criticism of anybody, it is a description of a document that had nowhere to put something.**',
  '⚠ **And *a record of practice* is what this unit has been building all the way through.** **A practice with a date and an author on it** — **Hala began keeping a tally in 2024 and nobody stopped her** — **is the rarest line in any file, and the only kind that survives the person who started it.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
module.exports = out;
