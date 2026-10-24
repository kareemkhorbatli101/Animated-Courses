// Proactive Business English B2 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 13–24'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (one hour) · **Writing** (forty-five minutes) · **Listening** (about forty minutes) · **Speaking** (in pairs, about fifteen minutes with your teacher).',
  'Total: **100 marks**, divided equally — Reading, Writing, Listening and Speaking are worth twenty-five marks each. ⚠ This is the weighting of **B2 Business Vantage**, where the four skills are scored separately and your overall result is their **average**. **Record your four marks separately and work out the average yourself before you look at the total.**',
  '⚠ **The Reading paper practises all five parts of the examination** — matching, sentence insertion, multiple choice, multiple-choice cloze and error correction — **five questions each.** **The two that were not in the Mid-Book Test are here: sentence insertion and multiple-choice cloze.** ⚠ **In the real paper there are forty-five questions in one hour, weighted towards the cloze and the error correction; here there are twenty-five, weighted equally, because this test is reporting on twelve units and not predicting a grade.**',
  '⚠ **The Writing paper uses the examination\'s own lengths**: Part 1 is **40 to 50 words** and Part 2 is **120 to 140 words**. **These are not the course\'s lengths** — Units 13 to 24 asked for 80 words or more and 200 to 240 — **and the difference is the examination\'s, not a reprieve.**',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit put marks on, and both are announced now rather than discovered later.** ⚠ **Across BOTH Writing tasks, whether you give the reason and not only the decision** (Unit 18.4) — **a decision recorded without the reason it was taken for scores half the point it is attached to, however exactly the decision is stated.** ⚠ **And in Writing Part 2, whether the option you recommend AGAINST carries a figure** (Unit 21.5) — **pass or fail: a rejected option named without a number against it scores nothing for that point.**',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early:** find the rejected option in your Writing Part 2 and ask one question of it — **could its holder read this and recognise their own case?** **If they would not, you have described it rather than priced it.**',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (one hour · 25 marks)'));
out.push(part('Part 1  ·  Matching  (5 marks)', 'Read the five short extracts **A–E**. For each statement **1–5**, decide which extract it refers to. An extract may be used more than once. Circle **A**, **B**, **C**, **D** or **E**.'));
out.push(sp());
out.push(model([
  '**A** _Clean and dry is not a standard, because two reasonable people cannot apply it and reach the same answer. The test is: no visible mark larger than a ten-pound note on any outward-facing surface, judged at arm\'s length in daylight, by one named person._',
  '**B** _We do not allege that the note of 14 May was written in order to mislead, and nothing in this letter should be read as alleging it. We say that it is the only record of the call, that it was made by one party, and that it is incomplete._',
  '**C** _Complying costs about 264,000 a year, which is 1.8 per cent of what we spend on packaging. Not complying in time costs about 590,000, once. The second figure is more than twice the first, which is why this paper is about a programme and not about a policy._',
  '**D** _The review answers what he did in the year to 30 June. The minute of 24 April answers who should hold the post from 1 May. These are different questions and the answers are in tension. Neither disproves the other._',
  '**E** _This plan is wrong if two or more of the eleven accredited bodies stop issuing for packaging. B. Nassif checks the list on the first of each month and tells me the same day, whether or not anything has moved._',
]));
out.push(q('**1** This extract replaces a word nobody can apply with a test two people would answer the same way.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**2** This extract names what it is **not** saying before it says what it is.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**3** This extract puts a named person and a stated day against a condition.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**4** This extract explains why two documents are allowed to disagree.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**5** This extract gives the cost of being late and says what it changes.   **A**   **B**   **C**   **D**   **E**'));
out.push(pb());
out.push(part('Part 2  ·  Sentence insertion  (5 marks)', 'Choose from the sentences **A–F** the one which fits each gap **6–10**. ⚠ **One sentence is not needed.** Read the sentence before the gap and the sentence after it: a Part 2 answer is held in place at both ends.'));
out.push(sp());
out.push(model([
  '**WRITING FOR A READER WHO CAN REFUSE — a note for members of the association.**',
  'Most advice on business writing assumes a reader who wants to be helped. **6** ______ A credit committee, a procurement director, an arbitrator and a government directorate have in common that they may decline, that they need not explain, and that they will not read a second letter with more care than the first.',
  'The first consequence is about what you leave out. **7** ______ A member who writes that a competitor\'s conduct has been unhelpful has said something unanswerable and therefore something that will be answered by silence.',
  'The second is about asking for the right thing from the right body. **8** ______ The question to settle before drafting is not whether the request is reasonable but whether the person opening the envelope has the power to grant it.',
  'The third is about the option you did not choose. A proposal that names only the recommendation invites its reader to supply the alternatives, and the alternatives a reader supplies are always the ones you would least like. **9** ______',
  'And the fourth is about what would make you wrong. **10** ______ Members will find that this is the paragraph a committee reads twice, and the only one that distinguishes a proposal from a request.',
]));
out.push(sp());
out.push(table(['', 'The six sentences'], [
  ['**A**', 'State the rejected option in a form its own holder would recognise, and put a figure against it.'],
  ['**B**', 'Say what would show the position wrong, name who is watching for it, and give the day.'],
  ['**C**', 'A reasonable request addressed to somebody without the power produces a reply saying that it is not a matter for them, four weeks later.'],
  ['**D**', 'Say what you are not alleging, and say it before the allegation you are making.'],
  ['**E**', 'At this level the reader can ask a question and can refuse, and does not have to say why.'],
  ['**F**', 'Shorter letters are read more often than longer ones, and the saving costs nothing.'],
], [0.5, 7]));
out.push(pb());
out.push(part('Part 3  ·  Multiple choice  (5 marks)', 'Read the text and answer questions **11–15**. Choose **A**, **B**, **C** or **D**. ⚠ Locate the sentence that answers the question before you look at the options.'));
out.push(model([
  '**THE DOCUMENT THAT OUTLIVES YOU — an address to the association\'s annual meeting.**',
  'I want to talk about the reader none of us writes for, who is the only reader some of our documents will ever have. He is in this trade in six years\' time, he holds one file, and he cannot ask you anything. Not because you are unwilling: because you have left, or the firm has changed hands, or he does not know that you are the person to ask.',
  'Almost every document we write assumes a reader who can ask one question. Not three questions — one. The figure that is not quite clear, the name that appears once, the decision whose reason is obvious to everybody in the building this month. We leave exactly one gap, and we leave it because filling it felt like writing down something everybody knows.',
  'Six years later, nobody knows it. The man with the file reconstructs. He is intelligent and he is careful and he will reach a conclusion, and his conclusion will be wrong in a particular way: he will assume that the decision was taken for the reason that is visible in the file, which is usually the second reason and not the first. The first reason was a conversation.',
  'There is a test for this and it costs nothing. Before closing a file, read the top document and ask what somebody would have to ask you about it. If the answer is nothing, you have written for the wrong reader, because every real document raises a question. If the answer is one thing, write that thing down. If the answer is four things, you have a different problem and it is not this one.',
  'And there is a harder practice, which is the one I actually recommend. Write down the option the firm rejected, with the condition on which it would be re-examined. A successor who knows what was considered and dropped does not spend his first autumn proposing it, and the saving is not his time. It is that he will not be the second person in six years to discover for himself that it does not work.',
]));
out.push(q('**11** Why can the reader the speaker describes not ask a question?   **A** Because he is unwilling to.   **B** Because the writer may have left, the firm may have changed hands, or he may not know who to ask.   **C** Because the file forbids it.   **D** Because he has no telephone.'));
out.push(q('**12** How many gaps does the speaker say we typically leave?   **A** None, if we are careful.   **B** Three or four, in most documents.   **C** Exactly one, because filling it felt like writing down what everybody knows.   **D** As many as the reader will tolerate.'));
out.push(q('**13** In what particular way will the successor\'s conclusion be wrong?   **A** He will assume the decision was taken for the reason visible in the file, which is usually the second reason.   **B** He will assume nobody thought about it.   **C** He will assume the figures were wrong.   **D** He will assume the file is incomplete.'));
out.push(q('**14** What does the speaker say about a document that raises no question at all?   **A** It is the best kind of document.   **B** It has been written for the wrong reader, because every real document raises a question.   **C** It should be shortened.   **D** It should be destroyed.'));
out.push(q('**15** What is the saving from recording a rejected option?   **A** The successor\'s time in his first autumn.   **B** The cost of the option itself.   **C** That he will not be the second person in six years to discover for himself that it does not work.   **D** That the file will be shorter.'));
out.push(pb());
out.push(part('Part 4  ·  Multiple-choice cloze  (5 marks)', 'Read the text and choose the best word for each gap **16–20**. Choose **A**, **B**, **C** or **D**. ⚠ Read the whole sentence each time, and not only the gap.'));
out.push(model([
  '**COSTING A REQUIREMENT — from a trade association\'s guidance to members.**',
  'Members asked to comment on a new requirement should produce four figures before they produce an opinion, because *expensive* is not a figure and nothing can be decided **16** ______ one.',
  'The first is the cost of complying in the first year, including your own people\'s time at a stated rate. The second is the cost in a normal year. The third, which is the one almost nobody works **17** ______, is the cost of complying LATE, and it is commonly twice the annual figure.',
  'The fourth is not money, and it must be stated separately and never added **18** ______ the total: a relationship inside a total is a total nobody believes, **19** ______ a relationship outside it is something somebody has to decide about.',
  'Members are also reminded that the cost of arguing should be **20** ______ at nil and declared, rather than given a figure, where the body concerned has amended a published requirement twice in eleven years.',
]));
out.push(sp());
out.push(table(['', 'A', 'B', 'C', 'D'], [
  ['**16**', 'besides', 'without', 'except', 'apart'],
  ['**17**', 'at', 'up', 'out', 'over'],
  ['**18**', 'into', 'in', 'at', 'to'],
  ['**19**', 'however', 'although', 'whereas', 'despite'],
  ['**20**', 'thought', 'assumed', 'believed', 'considered'],
], [0.7, 1.4, 1.4, 1.6, 1.4]));
out.push(pb());
out.push(part('Part 5  ·  Error correction  (5 marks)', 'In some of these lines there is **one extra word which is grammatically wrong**. Some lines are correct. ⚠ For a correct line, write **CORRECT**. For an incorrect line, write the extra word. Write in **CAPITAL LETTERS**.'));
out.push(sp());
out.push(model([
  '**TO: K. SAYEGH.  FROM: N. MANSOUR.  THE HOMS BRANCH FROM 1 APRIL.  14 DECEMBER.**',
  '**21**  I am sending this in December rather than in April because a   ______________',
  '**22**  responsibility written down after it has started is written to fit what has   ______________',
  '**23**  already been happened. Nothing in this document is yet true, which is the   ______________',
  '**24**  only condition in which I can to write it honestly. Bassel receives it   ______________',
  '**25**  before that the file does, and he does not report on the lease at all.   ______________',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (forty-five minutes · 25 marks)'));
out.push(part('Part 1  ·  An internal communication  (10 marks)', 'Write **40 to 50 words**. Three content points, all three present. ⚠ Count your words and write the number at the end.'));
out.push(p('Your firm has decided not to do something it had been planning to do. Write a note to your manager. Include: **(a)** the decision, in one sentence · **(b)** the reason it was taken, which is not the same as the decision · **(c)** the condition on which it would be looked at again, with a date.'));
out.push(p('⚠ **The reason is marked separately from the decision, as announced on the first page.** **_We have decided not to proceed, for the reasons discussed_ states the decision twice and scores once.**'));
out.push(...lines(6));
out.push(p('**Words: ______**'));
out.push(sp());
out.push(part('Part 2  ·  A proposal  (15 marks)', 'Write **120 to 140 words**, with headings. ⚠ Count your words and write the number at the end.'));
out.push(p('Your firm has to choose between two ways of meeting a new requirement. Write a proposal for the person who decides. Use **four** headings and include: **(a)** what is being proposed, with its cost · **(b)** the option you recommend against, **in a form its holder would recognise, with a figure** · **(c)** the reason your recommendation is preferred, which must be a reason and not a restatement · **(d)** what would show the proposal wrong, with a named person and a day.'));
out.push(p('⚠ **The priced rejected option is marked pass or fail, as announced on the first page.** **An option named without a number against it scores nothing for that point, however fairly it is described.**'));
out.push(...lines(14));
out.push(p('**Words: ______**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about forty minutes · 25 marks)'));
out.push(p('_Your teacher will read each recording twice. The scripts are in the Answer Key._', { color: '595959' }));
out.push(sp());
out.push(part('Part 1  ·  Note completion  (9 marks)', 'Listen to a conversation about a government notice. Complete the note. Write **one to four words or a number** in each gap.'));
out.push(sp());
out.push(model([
  '**NOTE OF A CONVERSATION — 8 September**',
  '**26**  On whom the obligation falls: ______________',
  '**27**  What is required, per consignment: ______________',
  '**28**  The date the transition runs from: ______________',
  '**29**  The practical deadline, in weeks: ______________',
  '**30**  Number of accredited bodies: ______________',
  '**31**  One thing the notice does not mention: ______________',
  '**32**  The untrue version that is costing the firm something: ______________',
  '**33**  Complete the sentence: *The date in bold is almost never the date that ______________.*',
  '**34**  How many times she read the notice: ______________',
]));
out.push(pb());
out.push(part('Part 2  ·  Multiple choice  (8 marks)', 'Listen to a conversation about a joint submission and choose **A**, **B** or **C** for questions **35–42**.'));
out.push(q('**35** How many signatories are there?   **A** three   **B** four   **C** eleven'));
out.push(q('**36** How many of them already comply?   **A** two   **B** none   **C** all of them'));
out.push(q('**37** Why does the draft describe the trade as united?   **A** because the chairman insisted   **B** because it is   **C** because that is how submissions have been written for twenty years, and it is a habit rather than a decision'));
out.push(q('**38** What does the chairman say a claim of unanimity tells the Directorate?   **A** that the association does not know its members, or will say something convenient   **B** that the trade is strong   **C** nothing at all'));
out.push(q('**39** What happens to the three agreed points after such a claim?   **A** they are read as negotiating positions rather than as facts   **B** they are granted   **C** they are returned for redrafting'));
out.push(q('**40** What is the fourth point, on which there is no common position?   **A** the length of the transition   **B** goods in transit   **C** a transition for importers whose supplier is not accredited'));
out.push(q('**41** Where does Sham Trading\'s view on the fourth point go?   **A** in the joint text   **B** in an annex in its own name   **C** nowhere'));
out.push(q('**42** What does the chairman say the association has to sell?   **A** its connections   **B** its membership   **C** that its agreements can be taken at face value'));
out.push(pb());
out.push(part('Part 3  ·  Multiple choice  (8 marks)', 'Listen to a conversation about a reference and choose **A**, **B** or **C** for questions **43–50**.'));
out.push(q('**43** What does Mr Sayegh want to write?   **A** nothing at all   **B** a list of documents   **C** that the candidate is fluent in written and spoken English'));
out.push(q('**44** What does Nadia say will happen to that sentence?   **A** it will be tested within twenty minutes of the interview beginning   **B** it will be believed   **C** it will be ignored'));
out.push(q('**45** What does Nour say a certificate is?   **A** a description of a person   **B** a guarantee   **C** a performance on a stated day against published criteria'));
out.push(q('**46** Which of these does she say the certificate evidences?   **A** that she read a long document under time pressure and found what it required of her   **B** that the holder will do it when nobody is marking   **C** that she can work in any trade'));
out.push(q('**47** What does she say it says about speaking?   **A** a great deal   **B** that it cannot be assessed   **C** almost nothing, which an interview will establish in ten minutes anyway'));
out.push(q('**48** How many documents of her own does the candidate name?   **A** three   **B** one   **C** five'));
out.push(q('**49** Which document would she rather not include?   **A** the escalation standard she wrote   **B** the note correcting her own earlier note   **C** the stock reconciliation'));
out.push(q('**50** Why does she accept the colder reference?   **A** she is told to   **B** she thinks it will get her the post   **C** she would rather be asked about the reconciliation than asked to explain the word *fluent*'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about fifteen minutes · 25 marks)'));
out.push(box('⚠ How this paper is marked', [
  '**Twenty-five marks: Part 1 five, Part 2 ten, Part 3 ten.** ⚠ **You are marked on what you say and not on how fluently you say it** — **a candidate who gives a reason and a figure, haltingly, scores above one who talks smoothly about a decision with neither.**',
  '⚠ **One thing is worth saying before you start.** **In all three parts, the marks are in the things most candidates leave out:** ⚠ **the reason as distinct from the decision, the option you argue against with a number on it, and the condition on which you would be wrong.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(part('Part 1  ·  Your own work  (about four minutes · 5 marks)', 'Your teacher asks you questions. Answer with a figure, a date or a name wherever one belongs.'));
out.push(table(['Questions your teacher may ask', 'What is being marked'], [[
  '**What is one thing your firm is obliged to do, by what date, and who exactly is obliged?** · ⚠ **Tell me a decision your firm took and the reason it was taken** — **the reason, not the decision again.** · ⚠ **What would show one of your firm\'s current plans to be wrong, and who is watching for it?** · **What is in a document of yours that nobody will understand in six years?**',
  '⚠ **A date rather than *soon*, a name rather than *the department*, and a reason that is not the decision restated.** ⚠ **A candidate who answers the third question with a named person and a day has already shown more than the other three questions can.**',
]], [1.3, 1]));
out.push(sp());
out.push(part('Part 2  ·  A collaborative task  (about five minutes · 10 marks)', 'Work with your partner. You disagree about a joint submission, and you have to leave the conversation with a position and a record of it. Then swap roles.'));
out.push(table(['Role card — you want to sign in part only', 'Role card — you want unanimity'], [[
  '⚠ **The submission is right about three things and silent about the one that costs your firm 900,000, and the silence was asked for by a competitor.** ⚠ **Begin by saying what the document is right about and whose signature that needs.** **Then say what you are not asking for** — **you are not asking for the fourth point to go in the joint text** — **and say where your own view will go instead.** ⚠ **Finish by naming the day you will telephone the chairman, before filing and not with it.**',
  '⚠ **The word *united* is the submission\'s main asset and you believe a marked difference weakens it.** ⚠ **Do not simply assert this: ask what the reader already knows about your members.** **Concede the point about the three agreements in its own terms and with nothing after it that argues.** ⚠ **Then make one request** — **that the difference be marked in the joint document rather than in an annex** — **and give a reason for it that is about the reader and not about the trade\'s feelings.**',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  Putting a case  (about six minutes · 10 marks)', 'Put a case to your teacher, as the person who decides, for something you want your firm to do about a requirement or a change it cannot influence.'));
out.push(p('You must include: ⚠ **what is obliged, of whom, and from when** · **what complying costs and what complying LATE costs** · ⚠ **the option you recommend against, with a figure** · **your recommendation with its reason, which is not the recommendation restated** · ⚠ **what would show it wrong, with a named person and a stated day** · and ⚠ **what you are not asking for.**'));
out.push(sp());
out.push(box('⚠ To the teacher', [
  '**Part 3 is the paper\'s diagnostic and the marks are in the third and fifth items.** **Most candidates will produce the obligation, the cost and a recommendation under pressure.** ⚠ **Very few will price the option they argue against**, **and fewer still will put a name and a day against the condition that would make them wrong.**',
  '⚠ **Do not prompt for either.** **If they are absent, they are absent** — **and they are the two items in this whole test that predict whether a candidate can write a proposal a committee will act on.**',
  '⚠ **One more note.** **Where a candidate in Part 2 names the day of a telephone call that has to happen before a document is filed, give the full ten marks for that part whatever else happens in it.** **It is the most sophisticated move in Book 2, it is the whole of Unit 23.7, and almost nobody makes it unprompted** — **because the document is the visible half and the call is the half everybody postpones.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('⚠ One thing after the test, and it is not optional', [
  '⚠ **Before you leave the room, write on your teacher\'s list: one document you will write, one reader who will receive it, and one date in the next fortnight.** **One line each.**',
  '⚠ **Your teacher keeps the list and asks you in October.** **That is the whole instruction and it is the only part of this course that happens after the course** — **and it is here because a document with no reader is what Unit 24.6 is about and an undertaking with no date is what Unit 24.3 takes apart.**',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_End of the End-of-Book Test, and of B2. **C1 begins at Unit 1**, with the envelope sealed on 14 December and with somebody who has agreed to ask for it._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · End-of-Book Test');
module.exports = out;
