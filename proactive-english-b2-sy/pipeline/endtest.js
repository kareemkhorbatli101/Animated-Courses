// Proactive English B2 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 1–12'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (75 min) · **Writing** (80 min) · **Listening** (about 40 min) · **Speaking** (in pairs, about 14 minutes with your teacher).',
  '**Total: 100 marks** (Reading and Use of English 40 · Writing 25 · Listening 25 · Speaking 10).',
  '**Every task in this paper has been taught in Units 1–12.** Reading and Use of English carries **all six parts**; Writing carries **Part 1 (the essay)** and **Part 2 (a choice of two)**; Listening carries **all four parts**; Speaking carries **all four parts**.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  '⚠ **If you finish a paper early, read your writing three times**: once for **the first six words of each paragraph** _(5.1)_, once for **the base beside every figure** _(10.1)_, and once for **the reader each paragraph is for** _(11.6)_.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (75 minutes · 40 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (8 marks)', [
  'For questions **1–8**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE COUNT THAT TOOK FORTY MINUTES**',
  'A section of a Damascus directorate that answers about ninety letters a quarter has changed one line of a form, and the change **(1)** ______ from a count one of its three clerks made in February.',
  'For nine years the section had counted how many letters it answered. Nobody had taken the **(2)** ______ to count what the letters asked. When the clerk finally did, it **(3)** ______ him about forty minutes, and it ended an argument he had been having with his own head of section for eleven months.',
  'Of ninety-one letters, sixty-two asked what a paragraph of the schedule meant. Four asked which office had applied it. The clerk had spent the year asking for the office to be printed — that is, on four letters **(4)** ______ of ninety-one.',
  'His request was **(5)** ______ down three times in the same four words. He now believes the refusals were about an item in a list he had never written: what the change would **not** touch. All three of his requests answered the cost, and **(6)** ______ of them said what the change left alone.',
  'The new line was agreed in eleven days. It **(7)** ______ about twenty seconds a refusal and says, in the words of the schedule, what the paragraph requires. Eleven letters have been answered since, and two of those asked what a paragraph meant.',
  'He has not asked for the bracket again and says that he will not **(8)** ______. Four letters a quarter is not nothing; it is simply not what the year was about.',
]));
[
  '**1**   **A** came   **B** arrived   **C** turned   **D** fell',
  '**2**   **A** care   **B** trouble   **C** pains   **D** effort',
  '**3**   **A** used   **B** spent   **C** took   **D** lasted',
  '**4**   **A** over   **B** off   **C** up   **D** out',
  '**5**   **A** cut   **B** put   **C** turned   **D** set',
  '**6**   **A** none   **B** nothing   **C** no   **D** neither',
  '**7**   **A** charges   **B** costs   **C** pays   **D** spends',
  '**8**   **A** too   **B** so   **C** neither   **D** either',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Open cloze (8 marks)', [
  'For questions **9–16**, think of the word which best fits each gap. **Use only one word in each gap.**',
], C.lteal, C.teal));
out.push(model([
  '**THREE READERS AND A BRACKET**',
  'Almost everything written at work is read by three kinds of person, and the commonest fault in working prose is **(9)** ______________ fault of style at all. It is a page written for the reader whose permission was needed and sent **(10)** ______________ the reader who has to act.',
  'The reason is not laziness. The approver was the difficult reader, **(11)** ______________ the writer wrote for the difficult reader — which is natural, and is wrong. A man holding a stamp cannot tell **(12)** ______________ a page whether to do anything on Monday.',
  'The third reader is the one nobody takes seriously, and **(13)** ______________ a structural reason: the first two complain if you fail them and the third cannot. A page can fail that reader **(14)** ______________ anybody ever noticing.',
  'There is one further fault, **(15)** ______________ nobody has a name for. A page can be written for its own writer: the history in the first paragraph, and no imperative and no date anywhere in it. Four such notices were counted on one counter in a single month, and **(16)** ______________ of them told the man at that counter to do anything.',
]));
out.push(pb());
out.push(box('Part 3 · Word formation (8 marks)', [
  'For questions **17–24**, use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.',
], C.lteal, C.teal));
out.push(model([
  '**THE FIGURE THAT LOST ITS BASE**',
  'Most of the wrong figures inside an organisation were counted properly once. What goes missing is the base, and a figure without one cannot be set beside anything: the **(17)** ______________ a reader wants to make is the one thing the sentence will not support.   **COMPARE**',
  'The trouble is rarely **(18)** ______________. A figure can be exact to the last unit and still prove nothing, because the claim beside it rests on an **(19)** ______________ that nobody has examined — usually that the base, the definition and the measuring all stood still.   **ACCURATE** · **ASSUME**',
  'Of those three, the **(20)** ______________ of the thing is what moves most often and is noticed least, since nobody thinks of it as part of the figure at all. A new book, a new form, a new question: each changes what is counted without changing the count.   **MEASURE**',
  'There is one further **(21)** ______________ worth printing beside any figure of your own, and it is the hardest to see: a remedy can create a few of the problems it counts. Where that is possible, say so.   **LIMIT**',
  'None of this is a complaint about arithmetic. The **(22)** ______________ in a working document is almost never in its sums; it is in the words either side of them, where a cost may or may not be **(23)** ______________ to the thing it is said to be a cost of.   **AMBIGUOUS** · **PROPORTION**',
  'And the practical point is small. Print the base, the period and the counter in the same sentence as the figure, and most **(24)** ______________ between two honest people about one number disappears before it is written down.   **AGREE**',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (6 marks)', [
  'For questions **25–30**, complete the second sentence so that it means the same as the first. **Use the word given in capitals and do not change it.** Use **between two and five words**, including the word given.',
], C.lteal, C.teal));
[
  '**25**  Nobody had ever counted what the letters asked.   **BEEN**   What the letters asked ______________________ counted before.',
  '**26**  I accept the figure, but it says nothing whatever about February.   **TOUCH**   I accept the figure, but it ______________________ February.',
  '**27**  The gate men say the real cost is the walking.   **ACCORDING**   ______________________ the gate men, the real cost is the walking.',
  '**28**  It is not necessary for you to answer this letter.   **NEED**   You ______________________ this letter.',
  '**29**  Her prediction was wrong by six.   **OUT**   She ______________________ six in her prediction.',
  '**30**  Although the second pad is expensive, it pays for itself in a quarter.   **ALL**   ______________________ cost, the second pad pays for itself in a quarter.',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 5 · Multiple choice (6 marks)', [
  'Read the text and answer questions **31–36**, choosing the answer (**A**, **B**, **C** or **D**) which fits best.',
], C.lteal, C.teal));
out.push(model([
  '**THE LETTER THAT ASKED FOR NOTHING**',
  'In February a depot clerk in Damascus did something she had twice tried and twice failed at, and the only thing she changed was the order of two clauses.',
  'For eleven months she had been asking a distributor to write a refusal code on the slip that came back with every rejected consignment — three letters, three characters, nothing more. She had asked in February and again in July, and had been answered neither time. She is fairly sure neither letter was read to the end, and says now that this was a reasonable thing for the distributor to have done with them.',
  'What she did differently in February was to concede a fault of her own in the same sentence as the request. Nine of her depot\'s forty consignments had left with the paperwork incomplete; she had been saying four, and had not counted until the Tuesday before she wrote. The sentence she sent read: _in return for a refusal code on every slip, I accept that the late paperwork is ours and I shall date-stamp every consignment that leaves this depot._ The code was on every slip twelve days later.',
  'She is careful about what she claims for this. The distributor\'s own form was reprinted in January with four code boxes on it, a month before her letter, and nobody at that end has been able to tell her who asked for the reprint. She does not know whether her letter arrived at a box that was already waiting, and says she has stopped claiming to.',
  'What she will claim is narrower and more useful. Both offices had spent five months arguing about whether a batch of cells was faulty. Neither had read the other\'s concession: she had written in September that the batch was sound, inside a bracket in a third letter; the distributor had written in the same month that the sealing is done by hand on a brush bench, under a signature at the foot of a delivery note. Each had conceded the thing the other needed. Her account of why is not about carelessness: you read a letter for what you have to answer, and a concession is the one part that needs no answer, so the eye goes past it.',
  'At the end of the year she wrote once more, and that letter is the one she is pleased with. It carried three figures — forty slips, one consignment in fourteen, and nine of forty — and it asked for nothing at all. Not a change of policy, not an explanation, and not an answer. The reply came in four days and proposed something she had not thought of: that the distributor\'s own clerk should initial the code box, so that a wrong code could be traced to a person. She had been unable to get anything of the kind in eleven months of asking for things.',
]));
[
  '**31**  What does the writer say was the only difference in February?   **A** she wrote to a more senior person   **B** she put a concession in the same sentence as the request   **C** she asked for less than before   **D** she set a date for a reply',
  '**32**  Why is she careful about what she claims?   **A** the figures were not hers   **B** the code was not on every slip   **C** she had asked twice before   **D** their form had been reprinted a month earlier',
  '**33**  What does she say about her two earlier letters?   **A** it was reasonable of the distributor not to read them to the end   **B** they were too short   **C** they were sent to the wrong office   **D** they asked for too much',
  '**34**  What had happened in September?   **A** the batch was found to be faulty   **B** the sealing was changed   **C** each office had conceded what the other needed   **D** the correspondence stopped',
  '**35**  How does she explain the two unread concessions?   **A** neither letter was properly filed   **B** the two offices were not speaking   **C** both sentences were badly written   **D** a concession needs no answer, so the eye goes past it',
  '**36**  What does the last paragraph suggest about asks?   **A** an ask should always be put last   **B** a letter that asks for nothing may get more than one that asks   **C** three figures are better than one   **D** a reply in four days is unusual',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 6 · Gapped text (4 marks)', [
  'Four sentences have been removed from the text below. Choose from the sentences **A–E** the one which fits each gap (**37–40**). **There is one extra sentence which you do not need to use.**',
], C.lteal, C.teal));
out.push(model([
  '**THE SHEET AT THE TOP OF THE PAGE**',
  'Nine months before this was written, a class in Damascus put eleven predictions on one sheet of paper, dated it and put it away. Last week they marked it. Two were right, four were wrong, and five could not be marked at all.',
  '**(37)** ______ Each was missing either a date or a figure, and three were missing both. _Record-keeping will get better_ was the first of them, and nothing that happened in nine months could have contradicted it.',
  'The arguments, when the sheet was marked, were not where the teacher expected. **(38)** ______ Being told that a prediction was never worth anything turns out to be harder to hear than being told that it failed.',
  'The most useful single result was a near miss. One member of the class had predicted fewer than twenty disputed results in a quarter; there were twenty-six. **(39)** ______ Four of the twenty-six turned out to be disputes about the remedy itself, a kind that had not existed before — so she had made four of her own twenty-six.',
  'The practice costs about twenty seconds a time: two lines at the top of the page you are arguing on, dated. **(40)** ______ What it does is make them markable, and marking them is what taught that class the difference between a figure and a hope.',
  '**A** Nobody disputed a _wrong_; every argument in the room was about an _unmarkable_.',
  '**B** Nobody would claim that it makes anybody\'s predictions better.',
  '**C** The five were not vague in the ordinary sense.',
  '**D** The class had written the sheet in about an hour, which is longer than it should have taken.',
  '**E** She wrote two sentences — _wrong; out by six_ — and the figure produced the question _why six?_',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (80 minutes · 25 marks)'));
out.push(box('Part 1 · Essay (12 marks) — compulsory', [
  'In your English class you have been talking about writing down what you expect to happen. Your teacher has asked you to write an **essay**.',
  'Write an essay using **all** the notes and giving reasons for your point of view.',
  '_**Is it worth writing down what you expect to happen, before it happens?**_',
  '_**Notes · write about:**_   **1** whether anybody reads it afterwards   **2** what it costs to write   **3** ______________ _(your own idea)_',
  'Write **180–220 words.** ⚠ **Four paragraphs, one job each**: your position · the first note · the concession paragraph _(9.6: objection first, a figure in sentence four)_ · what follows, with your own idea last.',
], C.lorange, C.orange));
out.push(...lines(20));
out.push(pb());
out.push(box('Part 2 · Choose ONE (13 marks)', [
  '**Either (a) a review.** You see this announcement in an English-language magazine. _"**Reviews wanted.** Tell us about something you use for your work or your studies. Say **who it is for** and **who it is not for**, say **what decided it** for you, and say **what is wrong with it.** We will print the most useful reviews."_ Write your **review** in **180–220 words.**',
  '**Or (b) an email.** You have received this email from somebody you worked with last year. _"We have not been in touch since the spring. I have been asked to put together a note on what came of the arrangements we made last year. **What actually happened, what did not, and is there anything you would do differently?**"_ Write your **email** in **180–220 words.**',
  '⚠ **Whichever you choose, the announcement or the message names its requirements and they are the content mark.** Underline them and tick them off before you read your own answer back.',
], C.lorange, C.orange));
out.push(p('**I am answering Part 2  (a) review  /  (b) email**   _(circle one)_', { bold: true, color: C.navy, before: 120, after: 80 }));
out.push(...lines(22));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 40 minutes · 25 marks)'));
out.push(box('Part 1 · Eight short extracts (8 marks)', [
  '🔊 **Track E.1** You will hear people talking in eight different situations. For questions **41–48**, choose the best answer (**A**, **B** or **C**).',
], C.lteal, C.teal));
[
  '**41**  You hear a woman talking about a figure she had been quoting. What does she say about it?   **A** she had never counted it   **B** somebody else invented it   **C** it was right at the time',
  '**42**  You hear two colleagues talking about a notice. What does the man say he will do?   **A** rewrite it   **B** send six words   **C** ignore it',
  '**43**  You hear a sub-editor talking about a page she cut. What did she give a line back to?   **A** the strongest objection   **B** the writer\'s figure   **C** the first paragraph',
  '**44**  You hear a man talking about a percentage. Why does he want it taken out?   **A** the arithmetic is wrong   **B** it is not evidence of anything   **C** it is out of date',
  '**45**  You hear a night sister talking about an instruction. What was missing from it?   **A** a date   **B** a name   **C** what to do if there was no room',
  '**46**  You hear a woman comparing two groups. Why can they not be compared?   **A** the groups were different sizes   **B** they were assessed in two different ways   **C** the periods were different',
  '**47**  You hear a man talking about a rate. What had he not noticed?   **A** that he was choosing the size that suited his case   **B** that the figure was wrong   **C** that nobody had asked him for it',
  '**48**  You hear a woman talking about a letter she sent. What did it ask for?   **A** an explanation   **B** a change of policy   **C** nothing',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Sentence completion (6 marks)', [
  '🔊 **Track E.2** You will hear a man talking about counting at a depot gate. For questions **49–54**, complete the sentences with **a word or short phrase**.',
], C.lteal, C.teal));
[
  '**49**  He had been quoting the figure for ______________ before he counted it.',
  '**50**  He timed the two stamps using a ______________.',
  '**51**  The December consignment book held ______________ entries.',
  '**52**  The real annual total is about ______________ hours.',
  '**53**  He thinks the old figure was a count of all the time spent at the ______________.',
  '**54**  He now wants somebody to count the ______________.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Multiple matching (5 marks)', [
  '🔊 **Track E.3** You will hear five people talking about something they got wrong this year. For questions **55–59**, choose from the list (**A–H**) what each speaker says. **There are three extra letters you do not need.**',
], C.lteal, C.teal));
[
  '**A** I had been arguing about the wrong object.',
  '**B** I was right, and not for the reason I gave.',
  '**C** I conceded the point in a place nobody reads.',
  '**D** I had never counted the thing I was quoting.',
  '**E** I wrote for the reader whose permission I needed.',
  '**F** I made part of the problem I was counting.',
  '**G** I compared two things that could not be compared.',
  '**H** I predicted something and cannot prove I did.',
].forEach(t => out.push(p(t, { indent: 200, after: 30 })));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 60 }));
out.push(pb());
out.push(box('Part 4 · Multiple choice (6 marks)', [
  '🔊 **Track E.4** You will hear an interview with a teacher about a prediction sheet her class wrote nine months earlier. For questions **60–65**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**60**  What were the three totals?   **A** two right, four wrong, five unmarkable   **B** four right, two wrong, five unmarkable   **C** five right, four wrong, two unmarkable',
  '**61**  What was missing from the unmarkable predictions?   **A** a name or a date   **B** a date or a figure   **C** a reason or a source',
  '**62**  What surprised her about the marking?   **A** how long it took   **B** that the class disagreed with her   **C** that nobody argued about being wrong',
  '**63**  What does she say about the near miss?   **A** stating the size of the miss produced a finding   **B** the figure was close enough   **C** it should have been marked right',
  '**64**  Why does she call a success with the wrong reason expensive?   **A** it takes longer to explain   **B** nobody corrects it   **C** it cannot be repeated',
  '**65**  What does she say the sheet measures?   **A** the year   **B** the class\'s luck   **C** what the class can write',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 14 minutes · 10 marks)'));
out.push(box('Part 1 · Interview (about 3 minutes)', [
  'Your teacher will ask each of you three or four questions. Answer in **one or two sentences and stop.**',
  '_What do you write down at work that nobody asked you to write?_ · _What is one figure you use every week, and who counted it?_ · _What is the last thing you were asked to do in writing that you could not act on?_ · _What would you want written down if you were away for a month?_',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (about 4 minutes)', [
  '**Student A**, you have about **one minute**: _Talk about one thing you have written this year that somebody acted on. Say who had to act, what you asked them to do, and what you left out._ **Student B**, you then have about **thirty seconds**: _Which of the three readers was the page written for?_',
  '**Student B**, you have about **one minute**: _Talk about one figure you have stopped using. Say where it came from, what it was a figure of, and what you use instead._ **Student A**, you then have about **thirty seconds**: _What would have to be true for the old figure to have been right?_',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (about 4 minutes)', [
  'Here are some things an office could agree to write down. **Talk to each other for about two minutes** about how much difference each would make.',
  '_· the reason for every refusal_   _· the base beside every figure_   _· what was decided and who was not there_   _· what each person is expected to do next, with a date_   _· what was predicted at the start of the year_',
  'Then **take about one minute** to decide **which two you would bring in first**, and say what each would cost in minutes.',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (about 3 minutes)', [
  'Your teacher will ask you both: _Is a written record more useful to the person who writes it or to somebody who was not there?_ · _Can a figure be exact and still mislead? How?_ · _Why do people write for the reader whose permission they need?_ · _Is it worth writing down a prediction you may be wrong about?_',
], C.lteal, C.teal));
out.push(sp());
out.push(table(['Speaking · marked out of 10', 'Mark'], [
  ['**Part 1** — one or two sentences and a stop; a figure with its counter', '___ / 2'],
  ['**Part 2** — the long turn: the reader named, and what was left out', '___ / 3'],
  ['**Part 3** — two minutes of narrowing, then one minute to decide, with a cost in minutes', '___ / 3'],
  ['**Part 4** — one claim, one concession, one figure', '___ / 2'],
], [5, 1]));
out.push(sp());
out.push(box('When you have finished', [
  '⚠ **Read your two pieces of writing three times, as the first page said.** Once for **the first six words of each paragraph**; once for **the base beside every figure**; once for **the reader each paragraph is for.**',
  '**Then one last thing, which is not marked.** On the back of this paper, write **one prediction with a date and a figure in it** about your own work, and today\'s date beside it. ⚠ **Keep the paper.** **That is the whole of Unit 12 and it takes twenty seconds.**',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · End-of-Book Test');
