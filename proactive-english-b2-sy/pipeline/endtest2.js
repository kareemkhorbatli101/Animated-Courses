// Proactive English B2 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 13–24'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (75 min) · **Writing** (80 min) · **Listening** (about 40 min) · **Speaking** (in pairs, about 14 minutes with your teacher).',
  '**Total: 100 marks** (Reading and Use of English 40 · Writing 25 · Listening 25 · Speaking 10).',
  '**Every task in this paper has been taught in Units 13–24.** Reading and Use of English carries **all seven parts**; Writing carries **Part 1 (the essay)** and **Part 2 (a choice of two)**; Listening carries **all four parts**; Speaking carries **all four parts**.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  '⚠ **If you finish a paper early, read your writing three times**: once for **the first sentence** _(20.1, 22.1)_, once for **every figure and whose records it came from** _(22.2)_, and once for **what you have not said that a reader will assume** _(21.5)_.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (75 minutes · 40 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (6 marks)', [
  'For questions **1–6**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**TWO HOURS AT A GATE**',
  'A quality manager in Damascus spent two hours at a gate in January refusing a consignment, and at the end of the two hours the line she had refused it on was still true for her and still true for the driver.',
  'The line was four words long: _the packaging must arrive undamaged_. Four cartons out of ninety had a corner pushed in. The driver was not being difficult; he meant that nothing inside the cartons had moved, and he had carried that line for four years without a load being refused. Neither of them could **(1)** ______ the other round, because the page did not say whose eye decided.',
  'Her second version of the page runs to four lines and nobody has argued with it since. It **(2)** ______ down a figure — ten millimetres, measured at the deepest point of the crush with the rule kept at the gate — and it says how many cartons are checked and which.',
  'What surprises people is that the page got shorter. Issue one had eleven lines and issue three has four. Six of the eleven could not be **(3)** ______ by any method at all, and those six were producing every dispute she had.',
  'She is clear that the standard has not been **(4)** ______ up. A line nobody can apply is not a standard; it is an invitation to two readings, and the two readings **(5)** ______ up at the gate together on a Thursday morning.',
  'The one thing she would now **(6)** ______ differently concerns the suppliers. She sent the new page to four of them and asked for comments, and received none, and read the silence as agreement. One of them had known since February that her figure was about the width of his own banding.',
]));
[
  '**1**   **A** take   **B** turn   **C** bring   **D** come',
  '**2**   **A** lays   **B** keeps   **C** stands   **D** holds',
  '**3**   **A** missed   **B** broken   **C** lost   **D** failed',
  '**4**   **A** opened   **B** tightened   **C** broken   **D** counted',
  '**5**   **A** take   **B** put   **C** turn   **D** stack',
  '**6**   **A** make   **B** do   **C** take   **D** have',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Open cloze (6 marks)', [
  'For questions **7–12**, think of the word which best fits each gap. **Use only one word in each gap.**',
], C.lteal, C.teal));
out.push(model([
  '**THE SILENCE THAT WAS READ AS AGREEMENT**',
  'A specification can be clear, checkable and complete and still produce the wrong answer, and the reason has nothing to **(7)** ______________ with the drafting. It is that a specification is written by the party who will apply it and met by the party who cannot change it.',
  'The figure in such a page is set without the supplier\'s process being known, and the one person who knows that process has a commercial reason for saying nothing. A supplier who writes back in February to say that a figure is too tight is a supplier **(8)** ______________ cannot do the work. So the sensible thing is silence; then you tender; and then you argue at the gate in June, **(9)** ______________ somebody has to take the load.',
  'The buyer, meanwhile, asks four suppliers for comments and receives none. Nothing in the document, and nothing in the invitation, tells her that the silence means anything **(10)** ______________ than agreement — and she is reading it exactly as anybody would.',
  'What can be done about it costs seventeen words and it cannot be done by the supplier. **(11)** ______________ the page itself the buyer can write that a comment on a figure will not be held against a tender. Only the person who awards the work can make it safe to speak.',
  'The arrangement that follows is more durable than a clever page. Both sides then know which figures have been questioned and which have not, and neither of them has to find out in June **(12)** ______________ was known in February.',
]));
out.push(pb());
out.push(box('Part 3 · Word formation (8 marks)', [
  'For questions **13–20**, use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.',
], C.lteal, C.teal));
out.push(model([
  '**THE PAPER THAT WAS NEITHER AGREED NOR REFUSED**',
  'A section head spent three weeks on a four-page paper and received no answer at all. The **(13)** ______________ of what she asked for was never in question; her reader called it the best paper to reach him that year.   **FEASIBLE**',
  'What he could not do was grant it. The hours she wanted were not his to give, and the **(14)** ______________ of staff time across the wards is held by somebody who had never seen the paper.   **ALLOCATE**',
  'Her figures came out of his own records and did not need defending. What needed examining was the assumption that the man who reads a paper is the man who can act on it, and no amount of **(15)** ______________ of the problem solves that.   **QUANTIFY**',
  'Nor is the remedy a longer paper. The **(16)** ______________ of a second version in somebody else\'s units takes about forty minutes, and it is a second paper and not a copy.   **PROVIDE**',
  'There is a line in her trade that makes the same point about things rather than people. A criterion needs a figure, a method and a **(17)** ______________ of the term it turns on, and two of the three are usually missing.   **DEFINE**',
  'Where that is done properly, an inspector can refuse a carton without an argument, because the page states the limit and the **(18)** ______________ that will be treated as a failure.   **DEVIATE**',
  'The question she now puts in the second paragraph of everything she writes is four words long. It carries no **(19)** ______________ of any kind and it costs nothing: whose hours are these?   **COMMIT**',
  'What came out of asking it is an arrangement that is **(20)** ______________ in a way that a clever paper is not. Both sides know which desk holds which unit, and the next proposal arrives at the right one.   **SUSTAIN**',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (6 marks)', [
  'For questions **21–26**, complete the second sentence so that it means the same as the first. **Use the word given and between two and five words, including the word given. Do not change the word given.**',
], C.lteal, C.teal));
[
  '**21**  Nobody in the office had ever opened the amendment list.   **BEEN**   The amendment list _____________________ by anybody in the office.',
  '**22**  He only found the governing clause after four months.   **TOOK**   It _____________________ to find the governing clause.',
  '**23**  It is impossible to tell when a clause was written from the way it is printed.   **WAY**   There _____________________ telling when a clause was written from the way it is printed.',
  '**24**  However tight the figure is, a supplier will not comment on it unprotected.   **MATTER**   _____________________ tight the figure is, a supplier will not comment on it unprotected.',
  '**25**  She refused the request because she believed nobody read that far.   **GROUNDS**   She refused the request _____________________ nobody read that far.',
  '**26**  The committee will not meet again before February.   **UNTIL**   The committee _____________________ February.',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 5 · Multiple choice (6 marks)', [
  'You are going to read an article about working from long documents. For questions **27–32**, choose the answer (**A**, **B**, **C** or **D**) which you think fits best.',
], C.lteal, C.teal));
out.push(model([
  '**ELEVEN PAGES OF SIXTY**',
  'A contracts clerk with nineteen years of service worked from a sixty-page document for four months before discovering, by accident, that a clause on page forty-one said the opposite of the summary on page two. He had been using page two, as everybody does, because it is called a summary of principal terms and because it is on page two.',
  'What he found when he finally looked was not an error. The edition is dated the first of March; the clause was amended on the eleventh of July; page two was never reprinted. Page two was accurate when it was printed and has not been accurate since July. The amendment list, which records all nine changes, is at page fifty-nine of sixty, and he had walked past it every time he looked at the schedule of dates on page fifty-five.',
  'He now gives the first ten minutes of any long document to four places, none of which is page one: the contents page, the amendment list, the definitions and the schedule of dates. The amendment list goes first, on the grounds that a changed clause is a clause somebody argued about. Seven of his nine disputes last year were on it.',
  'The second thing he has changed is how he opens a document at all. He writes the question down first, in two clauses — whether a thing is permitted, and if so under what limit — because a question with one clause gets a yes or a no and a question with two gets an instruction. Anybody who opens a long document with no question is not reading; they are acquainting themselves, which takes about four times as long and leaves nothing behind.',
  'The third change took twenty-two minutes and found more than the four months had. He put every period in the document into a single column, by kind and not by page: eleven of them, nine in the schedule and two in clauses that are not in the schedule at all. Two will not go together. Fourteen days are allowed for an instruction and seven for the revision that follows it, so the seven begin inside the fourteen. Neither figure is wrong; the pair is. In practice the revision is late on every job and nobody has ever objected.',
  'He is clear about why he has written the practice down rather than leaving it alone. A clause that is never enforced is a clause somebody can enforce once, against you, in the middle of a dispute about something else entirely.',
  'What he has not written anywhere is what he thinks of the drafting, and he says the first version of his note to the office had a paragraph about it. The paragraph told the next reader nothing about where to look, and it is the only thing he deliberately removed.',
]));
[
  '**27**  What does the writer say the contradiction between page two and page forty-one is?   **A** a drafting error   **B** a printing fault   **C** two dates   **D** a matter of interpretation',
  '**28**  Why does the clerk read the amendment list first?   **A** it is the shortest part   **B** it records where the document has been argued about   **C** it is at the back   **D** it contains the definitions',
  '**29**  What does the writer say about opening a document without a question?   **A** it is a reasonable first step   **B** it is the only way to find anything unexpected   **C** it is what experienced readers do   **D** it is slower and leaves nothing behind',
  '**30**  Why can the fourteen days and the seven days not both be met?   **A** the second period begins inside the first   **B** the figures are wrong   **C** the schedule is out of date   **D** nobody has read the schedule',
  '**31**  Why has he recorded the present practice in writing?   **A** to criticise the drafters   **B** to protect the contractor   **C** because he was asked to   **D** because an unenforced clause can be enforced once, at a bad moment',
  '**32**  What does the article suggest about the paragraph he removed?   **A** it was inaccurate   **B** it told the next reader nothing useful   **C** it would have offended the drafters   **D** it was too long',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 6 · Gapped text (4 marks)', [
  'You are going to read an article about letters that carry bad news. **Four sentences have been removed.** Choose from the sentences **A–E** the one which fits each gap (**33–36**). **There is one extra sentence you do not need to use.**',
], C.lteal, C.teal));
out.push(model([
  '**THE PARAGRAPH NOBODY REACHES**',
  'A works manager keeps two letters about the same order. The first runs to four paragraphs and the news is in the fourth. **(33)** _______________ He telephoned the next morning having read the first paragraph only, and believed the letter was about the price.',
  'The second letter is about a third shorter and begins with the news. **(34)** _______________ What it adds is a date: the earliest the press can hold is the nineteenth, and he will hold it until Thursday.',
  'The order of what follows is not a matter of taste. **(35)** _______________ A reader who has been told what a decision will cost them, and nothing about what can still be done, stops reading — and the paragraph that would have helped is below the place where they stopped.',
  'What he cannot do is know everything, and he says so on the page. **(36)** _______________ Those nine words are the reason the rest of his figures are believed.',
  'He keeps both letters in the same folder and shows them to anybody who asks why his correspondence is so short. His own summary of the difference is about arithmetic and not about manners: the first letter took three paragraphs to get to the point and cost a telephone call at eight the next morning, and the second got there in nine words and cost him nothing at all.',
]));
[
  '**A**  He writes that he does not know what the delay does to the customer\'s own order book, and that he is not going to guess at it.',
  '**B**  Nothing in it is kinder than anything in the first.',
  '**C**  The cost of the news must come after the remedy and never before it.',
  '**D**  The customer who received it never reached the fourth paragraph.',
  '**E**  Most of his customers have dealt with the press for more than a decade.',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 7 · Multiple matching (4 marks)', [
  'You are going to read four accounts of written standards at work. For questions **37–40**, choose from the people **A–D**. The people may be chosen more than once.',
], C.lteal, C.teal));
out.push(model([
  '**FOUR PEOPLE ON A DOCUMENT THAT WAS NOT READ THE WAY IT WAS WRITTEN**',
  '**A**  Eleven lines became four and the four are neither stricter nor looser; they are checkable. Six of the eleven could not be failed by any method, and those six produced every argument I had at the gate for three years. The next finding came from somewhere I had not expected. I asked one of my own inspectors what he actually does, which took twenty minutes, and he had been checking the four cartons on the near corner since January. He was reading the page correctly. It said the top layer and never said what that meant, and the man who wrote the page was me.',
  '**B**  I sent fifty handsets back marked properly tested and the exchange dialled one number on one of them. Eleven came back three weeks later and nine of the eleven dial out and will not receive — which is a fault my own bench test does not look at either. I found that in the act of writing the test card down and not before. Both of us had been testing for eleven years and neither of us was testing the same thing, and I had been blaming the exchange since the autumn.',
  '**C**  It is the clearest page any customer has sent me and the figure is tighter than my banding by about the width of the banding. I read it in February, I knew, and I said nothing. Write back to a customer in February to tell her that her figure is too tight and you are a supplier who cannot do the work. If there had been one line on the page saying a comment on a figure would not count against me, she would have had my answer the same week.',
  '**D**  My drawing said thirty millimetres and the joinery came back at thirty-one. I accepted it and I could not have told you why, and I would have refused thirty-three. Before I issued the revision I spent twenty minutes with the joiner, and he told me his saw holds a millimetre and a half across four heads but not across the whole elevation, because the blockwork behind it is out by six millimetres at the north end. That six millimetres was on no drawing I held, and it is now the only place it is written down.',
  '',
  '**Which person…**',
  '**37**  describes finding that two parties had been testing different things?   _______',
  '**38**  explains a commercial reason for not raising an objection?   _______',
  '**39**  mentions a fact that was recorded nowhere until they wrote it down?   _______',
  '**40**  says that shortening a document did not change how strict it was?   _______',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (80 minutes · 25 marks)'));
out.push(box('Part 1 · Essay (12 marks) — compulsory', [
  'In your English class you have been talking about written rules and standards at work. Your teacher has asked you to write an **essay**.',
  'Write an essay using **all** the notes and giving reasons for your point of view.',
  '_**Do written rules at work solve more problems than they create?**_',
  '_**Notes · write about:**_   **1** clarity   **2** the cost of writing them   **3** ______________ _(your own idea)_',
  'Write **180–220 words.** ⚠ **Four paragraphs, one job each**: your position in the first sentence · the first note · the second note, developed further than the first · and your own idea last, with a conclusion that is not a summary.',
], C.lorange, C.orange));
out.push(...lines(20));
out.push(pb());
out.push(box('Part 2 · Choose ONE (13 marks)', [
  '**Either (a) a report.** Your manager has asked you for a short report on something at your workplace that is not working. _"Say **what you are recommending**, say **what the problem costs in figures**, say **what you are not asking for**, and say **how anybody would know in a year that it had not worked.**"_ Write your **report** in **180–220 words.**',
  '**Or (b) a letter.** Something somebody was expecting from you or your organisation will not now happen. _"Write to them. Include **the news with its date**, **one reason**, **what is still available or what would change it**, and **what it costs them.**"_ Write your **letter** in **180–220 words.**',
  '⚠ **Whichever you choose, the four requirements in the instruction are the content mark.** Underline them and tick them off before you read your own answer back.',
  '⚠ **And one thing that applies to both.** **(a)** **A recommendation with no failure condition is asking for something with no end to it.** **(b)** **No apology for the decision itself** — **an apology for a decision you would take again is not true and the examiner is reading for whether the letter could be sent.**',
], C.lorange, C.orange));
out.push(p('**I am answering Part 2  (a) report  /  (b) letter**   _(circle one)_', { bold: true, color: C.navy, before: 120, after: 80 }));
out.push(...lines(22));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 40 minutes · 25 marks)'));
out.push(box('Part 1 · Eight short extracts (8 marks)', [
  '🔊 **Track E2.1** You will hear people talking in eight different situations. For questions **41–48**, choose the best answer (**A**, **B** or **C**).',
], C.lteal, C.teal));
[
  '**41**  You hear a woman talking about a line in her own specification. What does she say the trouble with it was?   **A** it was too strict   **B** it had two honest readings   **C** the driver had not read it',
  '**42**  You hear a man talking about a figure on a drawing. What does he say a figure with no band is?   **A** stricter than a band   **B** a drawing error   **C** a wish with a number attached',
  '**43**  You hear two colleagues discussing a test. What do they agree a method must do?   **A** be repeatable by another person on another day   **B** name an instrument   **C** cover every unit in the batch',
  '**44**  You hear a woman talking about a proposal she wrote. Why was it returned?   **A** the cost was on page three   **B** the cost was missing   **C** the reader disagreed with it',
  '**45**  You hear a man talking about an alternative he left out. What does he say it cost him?   **A** two months and a paper refused in nine seconds   **B** nothing at all   **C** a vehicle',
  '**46**  You hear a woman talking about an exclusion. What does she say it must have?   **A** an apology   **B** an appendix   **C** a destination',
  '**47**  You hear two colleagues talking about a silence. What do they conclude about it?   **A** it meant agreement   **B** it was a sensible commercial decision   **C** it was dishonest',
  '**48**  You hear a man talking about a habit. What does he say the test of one is?   **A** whether he can explain it   **B** whether anybody noticed   **C** whether he did it on a day he was late',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Sentence completion (6 marks)', [
  '🔊 **Track E2.2** You will hear a woman talking about a proposal she wrote twice. For questions **49–54**, complete the sentences with **a word or short phrase**.',
], C.lteal, C.teal));
[
  '**49**  Her February paper came back with the single word ______________ in the margin.',
  '**50**  The cost had in fact been in the paper, on page ______________.',
  '**51**  Her reader had taken the February paper for a ______________ about the call handlers.',
  '**52**  The ask she finally wrote was ______________ words long.',
  '**53**  The repeat-call figure came out of the switchboard\'s own ______________.',
  '**54**  Writing the failure condition reduced the number of people in the ask from twenty-two to ______________.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Multiple matching (5 marks)', [
  '🔊 **Track E2.3** You will hear five people talking about working from a long document. For questions **55–59**, choose from the list (**A–H**) what each speaker says. **There are three extra letters you do not need.**',
], C.lteal, C.teal));
[
  '**A** I had read every one of the figures and never seen two of them together.',
  '**B** I found that I had been the rule for a year without knowing it.',
  '**C** I wrote a summary and nobody used it.',
  '**D** I came out knowing everything except the thing I went in for.',
  '**E** I could not make the change that was asked for, and the request was right.',
  '**F** I read the document from the beginning every time.',
  '**G** I keep the note in a file where nobody looks.',
  '**H** I asked for a reprint and was given one.',
].forEach(t => out.push(p(t, { indent: 200, after: 30 })));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 60 }));
out.push(pb());
out.push(box('Part 4 · Multiple choice (6 marks)', [
  '🔊 **Track E2.4** You will hear an interview with a teacher about the end of a two-year course. For questions **60–65**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**60**  Why does she ask students to guess what they wrote before the sealed letters are opened?   **A** because the guess records what they now think they used to want   **B** to make the opening less solemn   **C** because some letters have been lost',
  '**61**  What does she say about the commoner direction of drift?   **A** the want stays the same   **B** a large want is replaced by a small one   **C** a small specific want is replaced by a large vague one',
  '**62**  What does she say the test of a habit is?   **A** whether it can be explained   **B** whether it was done on a day the student was late   **C** whether the student agrees with it',
  '**63**  What does she say about the functions that arise twice a year?   **A** they should be practised more   **B** they should be dropped   **C** they cannot become habits and belong on printed paper',
  '**64**  What does she say the step to the next level is?   **A** holding two things in one sentence   **B** more vocabulary   **C** fewer mistakes',
  '**65**  Why does she insist that the keeper of a sealed letter is not a friend?   **A** friends forget   **B** a friend will hand it back early if asked   **C** friends move away',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 14 minutes · 10 marks)'));
out.push(box('Part 1 · Interview (about 3 minutes)', [
  'Your teacher will ask you both: _What is the longest document you work from, and how many of its pages do the work?_ · _Tell me about one line in it that two people could read differently._ · _What is one thing you can now do that you could not two years ago?_',
  '⚠ **One or two sentences and a stop, and a figure with whose records it came from.**',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (about 4 minutes)', [
  'Your teacher will give you a card with **two accounts of one document, both of them accurate.** **Talk about them for about one minute.** Say **what the document was for**, **the thing it could not do**, and **whether either party can supply it.**',
  '⚠ **Do not decide which account is right.** **Both are, and the mark is for naming the thing the document cannot do.** Your partner will then be asked one question about what you said, for about thirty seconds.',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (about 4 minutes)', [
  'Here are five things an organisation could write down that it probably has not. **Talk to each other for about two minutes** about how much difference each would make.',
  '_· a date in the margin against every clause_   _· a figure in every criterion, with its method_   _· what a document does not cover, with a destination_   _· how anybody would know a decision had not worked_   _· one line saying a comment on a figure will not count against a tender_',
  'Then **take about one minute** to decide **which two you would bring in first**, and say what each would cost in hours and whose hours they are.',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (about 3 minutes)', [
  'Your teacher will ask you both: _Is a silence from the other side ever safe to read as agreement?_ · _Should a long document be written so that nobody has to read all of it?_ · _Whose job is it to say that a figure cannot be met?_ · _Is it worth writing down what you still cannot do?_',
], C.lteal, C.teal));
out.push(sp());
out.push(table(['Speaking · marked out of 10', 'Mark'], [
  ['**Part 1** — one or two sentences and a stop; a figure with whose records it came from', '___ / 2'],
  ['**Part 2** — both accounts allowed to be accurate, and the thing the document cannot do named', '___ / 3'],
  ['**Part 3** — two minutes of narrowing, then one minute to decide, with a cost in hours and whose', '___ / 3'],
  ['**Part 4** — one claim, one concession, one figure', '___ / 2'],
], [5, 1]));
out.push(sp());
out.push(box('When you have finished', [
  '⚠ **Read your two pieces of writing three times, as the first page said.** Once for **the first sentence**; once for **every figure and whose records it came from**; once for **what you have not said that a reader will assume.**',
  '**Then one last thing, which is not marked.** On the back of this paper, write **one sentence saying what you still cannot do, with the word _yet_ in it**, and today\'s date beside it. ⚠ **Keep the paper, and give a copy to whoever teaches you next, on the first morning.** **That is the whole of Unit 24.3 and it takes forty seconds.**',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · End-of-Book Test');
