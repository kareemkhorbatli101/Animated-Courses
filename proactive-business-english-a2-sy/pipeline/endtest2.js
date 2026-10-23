// Proactive Business English A2 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 13–24'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (35 min) · **Writing** (35 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about 8 minutes with your teacher).',
  'Total: **100 marks** — **Reading 30 · Writing 30 · Listening 20 · Speaking 20**. This is the weighting of the A2 Key examination (30 · 30 · 20 · 20 per cent), so your percentage here is comparable with a real result.',
  'This test covers the **whole of Book 2**: experience and plans; problems and solutions; then and now; training and technology; suppliers, services and complaints; emails and requests; the company and the city; and the three futures of Unit 24.',
  '⚠ **Book 2 word counts.** Writing Part 1 asks for **35 words or more** and Part 2 for **60 to 100 words**. Fewer than the minimum loses marks even if the English is perfect.',
  'Everything happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  'Write your answers on this paper, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early, check four things: that every quantity has its **unit**, that every past verb is in the past, that every deadline has a **date** and not _as soon as possible_, and that nothing you have written as certain is really only hoped for.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (35 minutes · 30 marks)'));
out.push(part('Part 1  ·  Notices, notes and messages  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _**GOODS INWARDS** — Nothing is moved until it has been photographed with the pallet label in the picture._']));
out.push(q('**A** Photograph damaged goods after moving them aside.   **B** Photograph the goods where they stand, with the label visible.   **C** Only the warehouse manager may take photographs.'));
out.push(model(['**2**  _Nour — the bank wants the March statement stamped, not a PDF. I have asked for it by the 12th and asked them to confirm by Thursday. — Hala_']));
out.push(q('**A** The bank has confirmed the 12th.   **B** A PDF will be enough.   **C** Hala has asked for an answer earlier than the deadline.'));
out.push(model(['**3**  _Machine 2: **do not restart** after a stop. Report it, with the time and what you were doing._']));
out.push(q('**A** Restart it once and report it if it stops again.   **B** Leave it stopped and report it with the details.   **C** Report it at the end of the shift.'));
out.push(model(['**4**  _Sham Trading — we are going to open at 22 Baghdad Street on 8 June. The lease is signed and the sign is ordered._']));
out.push(q('**A** The opening is arranged.   **B** The company hopes to open.   **C** The store opened in June.'));
out.push(model(['**5**  _Price quoted 2 May. **Held 14 days in writing.** After 16 May we re-quote._']));
out.push(q('**A** The price can be relied on until 16 May.   **B** The price is fixed for the year.   **C** The price changes every fourteen days automatically.'));
out.push(model(['**6**  _Gate sheet: every load counted against the order **before** loading, and signed **by name** by the person who counted it._']));
out.push(q('**A** The driver signs for the load.   **B** The count happens after loading.   **C** The person who counted must put their own name on it.'));

out.push(pb());
out.push(part('Part 2  ·  Three colleagues and their year  (7 marks)', 'Read about three people at Sham Trading. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**A — Hala Mourad, customer service.** Hala joined in 2024 and has been on the counter since then. She has done one course, in spreadsheets, and uses about a third of it. This year she answered eleven complaints; nine of them, she says, were not really about the goods at all but about nobody telephoning. She has started writing the proportion into every damage report — _six of the forty boxes_ — and since she began doing that no claim has been argued about.',
  '**B — Bassel Nassif, sales.** Bassel has been with the company for nine years and knows the Homs market better than anybody. He proposed a second store in Homs in 2019, it opened, and it closed in 2021. He stood on the pavement in Baghdad Street on four separate days before that lease was signed, counting people. He hopes to open in Homs again one day, and says plainly that there is no lease and no date.',
  '**C — Abu Yasser, warehouse.** Abu Yasser has been here since 1998 and has seen four store rooms. He will not sign a driver\'s note without writing on it what he has actually counted. The three weeks in August when the generator failed, he was there every morning. He has never been on a course and says the gate sheet taught him more than a course would have.',
]));
out.push(q('**7**  Who has been with the company longest?   **A** Hala   **B** Bassel   **C** Abu Yasser'));
out.push(q('**8**  Who counted something before a decision was taken?   **A** Hala   **B** Bassel   **C** Abu Yasser'));
out.push(q('**9**  Whose complaints were mostly about something other than the goods?   **A** Hala\'s   **B** Bassel\'s   **C** Abu Yasser\'s'));
out.push(q('**10**  Who separates what is arranged from what is hoped for?   **A** Hala   **B** Bassel   **C** Abu Yasser'));
out.push(q('**11**  Who has done training that was only partly useful?   **A** Hala   **B** Bassel   **C** Abu Yasser'));
out.push(q('**12**  Who writes facts on a document before signing it?   **A** Hala   **B** Bassel   **C** Abu Yasser'));
out.push(q('**13**  Which two people changed something after a failure?   **A** Hala and Bassel   **B** Bassel and Abu Yasser   **C** Hala and Abu Yasser'));

out.push(pb());
out.push(part('Part 3  ·  A longer text  (6 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**THE SATURDAY TRIAL — what happened**',
  'In May we proposed Saturday deliveries. The first proposal was for every customer, every Saturday, starting the following month, and it was not agreed — correctly, because it was a whole new day for four hundred customers at once and if it failed it would fail in front of all of them.',
  'The second proposal was smaller: Saturdays for the Mezzeh district only, for six weeks from 7 June, with one driver and the van that was otherwise standing. The cost was about 180,000 in total. We said in the proposal how we would stop: if fewer than thirty orders came in the six weeks, we would stop on 19 July and tell the eleven customers who had asked that the trial did not pay. Nothing was bought and nobody was taken on, so stopping cost only the six mornings.',
  'Nineteen orders came. We stopped. What was useful was not the nineteen but what we found out: two customers moved a standing Thursday order to Saturday, which took weight off the Thursday van and which nobody had predicted. We have learned that a customer who asks for Saturday is not the same as a customer who will order on Saturday, and that next time we would ask for a standing order before we buy a delivery day.',
  'The Tuesday and Thursday runs continue exactly as before. The driver, who did six Saturdays on top of a full week and never once had to be asked twice, is still here.',
]));
out.push(q('**14**  Why was the first proposal refused?   **A** It cost too much.   **B** The customers did not want Saturdays.   **C** It was too big to fail cheaply.'));
out.push(q('**15**  What made stopping cheap?   **A** Nothing was bought and nobody was taken on.   **B** The van was new.   **C** The customers paid in advance.'));
out.push(q('**16**  How many orders were needed, and how many came?   **A** nineteen needed, thirty came   **B** eleven needed, nineteen came   **C** thirty needed, nineteen came'));
out.push(q('**17**  What was the unexpected result?   **A** The Thursday van got heavier.   **B** Two customers moved an order from Thursday to Saturday.   **C** Eleven new customers were found.'));
out.push(q('**18**  What has been learned?   **A** Asking is not the same as ordering.   **B** Saturdays never work.   **C** Trials should last longer.'));
out.push(q('**19**  What is the writer\'s attitude to the trial?   **A** It was a waste of money.   **B** It failed and taught them something worth having.   **C** It should be tried again next month.'));

out.push(pb());
out.push(part('Part 4  ·  Choose the word  (6 marks)', 'For each gap, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**20**  Two of the twenty boxes ______ crushed.   **A** was   **B** were   **C** is'));
out.push(q('**21**  Goods must ______ checked on arrival.   **A** be   **B** to be   **C** being'));
out.push(q('**22**  I am writing ______ ask for a copy of the statement.   **A** to   **B** for   **C** that'));
out.push(q('**23**  Please reply ______ Thursday — Thursday is the last day.   **A** before   **B** by   **C** until'));
out.push(q('**24**  We ______ in Mezzeh since 2011.   **A** were   **B** are   **C** have been'));
out.push(q('**25**  We suggest ______ with the Mezzeh district only.   **A** start   **B** to start   **C** starting'));
out.push(sp());
out.push(part('Part 5  ·  Write one word  (5 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(table(['', 'Write one word'], [
  ['Because **26** ______ the power cuts, we run a generator from one until four.', '______'],
  ['The labels are printed in Homs and **27** ______ to Beirut.', '______'],
  ['We haven\'t fitted the shelves **28** ______ ; they are finished on the 30th.', '______'],
  ['Dear Sir or Madam, … Yours **29** ______ ,', '______'],
  ['We hope **30** ______ open in Homs, but there is no lease.', '______'],
], [3, 1], { headFill: C.navy }));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (35 minutes · 30 marks)'));
out.push(part('Part 1  ·  A formal request  (10 marks)', 'Write **35 words or more**.'));
out.push(sp());
out.push(box(null, [
  'You need a document from another company or office, and you need it by a particular date. Write an email asking for it.',
  'In your email:  •  put the **purpose in the first line**, with a reference number  •  say **what form** the answer must take  •  give a **date**, with the reason  •  ask them to **confirm** by an earlier date.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(sp());
out.push(part('Part 2  ·  A three-step proposal  (20 marks)', 'Write **60 to 100 words**.'));
out.push(sp());
out.push(box(null, [
  'Propose a change at your work to somebody who can agree to it.',
  'In your proposal:  •  say **what you would like to do**, small and dated  •  give **one number** from real demand  •  say what **step two** would be, if it works  •  say **how you would stop**, and what stopping would cost  •  ask for a **yes or no by a date**.',
], C.grey, C.navy));
out.push(...lines(14));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 20 minutes · 20 marks)'));
out.push(p('_Your teacher will play each recording **twice**._', { color: '595959' }));
out.push(part('Part 1  ·  Five short conversations  (5 marks)', '🔊 **Track ET2-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**31**  How many boxes were damaged, and out of how many?   **A** two of twelve   **B** two of twenty   **C** twelve of twenty'));
out.push(q('**32**  What does the engineer need before he comes?   **A** the order number   **B** the address   **C** the model number'));
out.push(q('**33**  Why is the writer asking for confirmation by Thursday?   **A** the auditor is here on the 13th   **B** the bank closes on Thursday   **C** the statement is late'));
out.push(q('**34**  What is arranged, and what is only hoped for?   **A** both arranged   **B** Baghdad Street arranged, Homs hoped for   **C** Homs arranged, Baghdad Street hoped for'));
out.push(q('**35**  What does Hala say the complaint was really about?   **A** the crushed boxes   **B** the price   **C** that nobody telephoned'));
out.push(sp());
out.push(part('Part 2  ·  Complete the progress note  (6 marks)', '🔊 **Track ET2-2.** You will hear Nour reporting progress on a store opening. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['PROGRESS — BAGHDAD STREET', ''], [
  ['Steps done, out of six', '**36** ______'],
  ['Painting finished on', '**37** ______'],
  ['Shelves finished on', '**38** ______'],
  ['The sign now arrives on', '**39** ______'],
  ['The one thing being watched', '**40** ______'],
  ['Opening date', '**41** ______'],
], [2, 1], { headFill: C.navy }));

out.push(pb());
out.push(part('Part 3  ·  A telephone call  (5 marks)', '🔊 **Track ET2-3.** You will hear a telephone call between Hala and a supplier. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**42**  Why is Hala telephoning?   **A** to complain about a price   **B** to chase an answer, not the goods   **C** to cancel an order'));
out.push(q('**43**  What has Hala already done twice?   **A** visited   **B** telephoned   **C** written'));
out.push(q('**44**  What is the one thing Hala asks for?   **A** a yes or a no about the 14th   **B** the wrap by Friday   **C** a discount'));
out.push(q('**45**  What will Hala do if the answer is no?   **A** nothing   **B** buy ten boxes locally   **C** cancel the account'));
out.push(q('**46**  By when does she need to know, and why?   **A** Monday, because a local order must go in by then   **B** Friday, because the contract starts   **C** today, because the van is loading'));
out.push(sp());
out.push(part('Part 4  ·  A longer talk  (4 marks)', '🔊 **Track ET2-4.** You will hear Mr Ayoub closing the year with the staff. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**47**  What does he thank the staff for?   **A** the whole year   **B** the three weeks in August   **C** the Saturday trial'));
out.push(q('**48**  What does he say about Homs?   **A** it was his decision, both times   **B** it was nobody\'s fault   **C** it is going to reopen'));
out.push(q('**49**  What rule has been learned?   **A** never open a second store   **B** always use a generator   **C** count before you sign'));
out.push(q('**50**  What is the one arranged thing for next year?   **A** a second driver   **B** opening on Baghdad Street on 8 June   **C** a store in Homs'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 8 minutes · 20 marks)'));
out.push(box('Part 1  ·  About you and your work  (8 marks · your teacher asks each candidate)', [
  '**1**  When was your company founded, and how long have you been there?',
  '**2**  Tell me about one course or training you have done. How much of it do you use?',
  '**3**  Tell me about a problem at work and what you did about it.',
  '**4**  What is one thing that is difficult about doing business where you are, and what do you do about it?',
  '**5**  What is one thing that is **arranged** for next year at your work, and one thing you only **hope** to do?',
  '⚠ The last question is the one that separates a good answer from an excellent one. Say which is which, and say what the evidence is for the arranged thing.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (12 marks · the two candidates talk to each other)', [
  '**Candidate A**: a delivery of forty boxes has arrived with six damaged, all in one corner of the pallet, and nobody telephoned you. You have photographed them where they stand.   ·   **Candidate B**: you are the supplier\'s office. You do not know what happened and cannot promise a replacement before speaking to the warehouse.',
  '**Together, in about four minutes:** A reports the proportion and the position, without accusing anybody. B apologises for the thing, not for the feeling, and says what can be done today and what cannot. **Agree one action with a date on it**, and agree who will confirm it to whom.',
  '⚠ Neither of you may use the words _as soon as possible_. If the conversation ends without a date in it, it has not finished.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  table(['', '8–10 marks', '5–7 marks', '0–4 marks'], [
    ['**Part 1** (8)', 'All five, with dates and numbers; arranged separated from hoped-for unasked.', 'All five; some numbers; the last one answered but not sorted.', 'Short answers; no dates; arranged and hoped-for not distinguished.'],
    ['**Part 2** (12)', 'Proportion and position; no accusation; apology for the thing; one action with a date, and who confirms.', 'Most facts; an apology; an action with a date or a confirmer, not both.', 'No proportion; blame or defence; no action agreed.'],
  ], [1, 1.6, 1.6, 1.6]),
  '⚠ The marks are for **the facts, the date and who confirms**, not for fluency.',
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Paper', 'Marks', 'Out of'], [
    ['Reading', '', '30'], ['Writing', '', '30'], ['Listening', '', '20'], ['Speaking', '', '20'], ['**TOTAL**', '', '**100**'],
  ], [2, 1, 1]),
  '**70 and above** — you are working at a solid A2 and the move to B1 is the right next step.  ·  **55–69** — A2 reached; go back to the **"I can…"** boxes you ticked 😐 before starting B1.  ·  **40–54** — the English is there and the habits are not yet: dates, numbers and the arranged/hoped-for line. Reread Units 22 and 24.  ·  **below 40** — work through the six cycles you found hardest again, one a week, and retake this paper.',
], C.lteal, C.teal));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · End-of-Book Test');
