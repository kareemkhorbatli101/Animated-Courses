// Proactive English B1 · Syria Edition · Book 2 · Unit 15 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 15  Regret and Alternative Pasts — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**This is the hardest unit in the level and the one most likely to go wrong in a classroom.** Not because of the grammar — _should have_, _if I had_, _I wish_ are three forms and forty minutes — but because the material is people\'s own mistakes, and a cycle that asks for one produces either a performance of regret or a defence. The three things that prevent both are built into the cycles: a **date** on every regret (15.1), a **test** on every conditional (15.2), and the **four headings in a fixed order** (15.6).',
  '**The rule that holds the unit together:** a third conditional is a claim about what would have happened, and it is only as good as the thing you can show. Where the consequence is in the numbers, say it. Where it is in somebody\'s head, you cannot — and _might have_ is the most anybody is entitled to.',
  '**Where the conditional belongs in a document.** In the paragraph about **what you now know**, once. In the facts it is an excuse; in the costs it is a plea; at the end it is nothing. 15.6 and 15.7 are both built on that single placement rule and it is the most practical thing in Book 2.',
  '**What you need in the room.** For 15.1, each student\'s one thing with its date. For 15.7, a real notice or circular somebody has posted about something that went wrong. The 15.7 notice in the book is deliberately bad and is the only text in the course written by somebody the class is invited to read against.',
  '**And a word about tone.** Nothing in this unit is improved by solemnity. The dialogues are flat on purpose, the Pronunciation tracks drill saying hard sentences at normal speed, and the model apology has no adverbs in it. A class that gets quiet in 15.4 should be moved on, not encouraged.',
], C.lblue, C.navy));

// ===================== 15.1 =====================
out.push(pb());
out.push(h2('15.1  I should have asked in April'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Write only the **dates** on the board — that is the instruction and it matters. Eleven dates with no stories attached is a page the class can look at without anybody being exposed, and the finding comes free: most of them are inside the last six months, which tells the room that this is not a unit about a wasted life.'));
out.push(A('**b** **1** present — I still can   **2** past — I did not   **3** past — I did   **4** present — I still might   **5** past, passive — and nobody is named'));
out.push(A('Item 5 is the one to stop on: _he should have been told_ hides the person who did not tell him. Sometimes that is right; often it is a way of not writing _I should have told him_. The choice is the point.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – wrong in a way he had not predicted: it cannot be tested.'));
out.push(A('**b** **1** The Mezzeh shop keeps delivery notes in a box by date and let him photograph eight; the Shaalan shop files nothing and throws the notes away when the stock is sold, and four of his fifteen came from there. Of the eleven traceable, nine are from one batch and two from the batch before.   **2** _Should have_ is about you and costs you something to say; _if I had_ is a claim about what would have happened, and it has to be defensible. Students use the second when they mean the first, because the second sounds like an argument.'));
out.push(NOTE('The prediction failing in an **unpredicted way** is the best thing that could have happened to the prediction board, and it is worth saying so out loud in 15.1: Mazen was not wrong about the batch, he was wrong about being able to find out. Four of his fifteen are untraceable for ever because a shopkeeper throws paper away on his own schedule. That is what a blind half is, and the board has produced one in a month.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I should have asked the two shops for the delivery notes in April. If I had asked in April, I would have had fourteen of the fifteen traced — the Shaalan notes were in the box until August._',
  '**2** _I should have asked Sister Nasr in September of last year. If I had asked then, I would have had fourteen months of her figures instead of four._',
  '**3** _I should not have signed the release sheet without reading the second page. If I had read it, I would have seen that the chamber reading was the previous day\'s._',
  '**4** _I should have started the fault book in 2019, when the first one came back twice. If I had started then, I would have six years of entries and the batch would have shown up in a year._',
  '**5** _I should have told Abu Samir in May that the yard rule had changed. If I had told him, he would not have worked two Saturdays for nothing — he was in the yard when I told the other two._',
]));
out.push(A('Each pair has the two sentences, and in each case the _if I had_ half has a **showable** consequence: the notes were in the box, the second page says so, the entries would exist, he was in the yard. That is the standard for 15.2 and it starts here.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A record you started later than you could have.',
  '**B:** I should have started the night book in January of last year, not in September.',
  '**B:** If I had started it in January, I would have had eighteen months of nights by the time I went to the committee instead of nine.',
  '**A:** How do you know that is what would have happened?',
  '**B:** Because the nights happened and I was on them; the only thing missing was the writing down. That one is arithmetic, not a guess.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark each consequence **defensible** or **invented**. In a first run half are invented, and they are invented in one particular way: they are about what **another person** would have done. _If I had told him, he would have changed it_ — you cannot know that. _If I had told him, he would have known_ — you can.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I should have asked the university for the 1974 file in my second year, which was 2023. If I had asked then, I would have the drawings now, because the man who held them was in that office until March. And I cannot answer the test for the second half of what I want to say — I do not know whether he would have let a second-year student photograph them, so the most I can claim is that I would have been told whether they existed._',
  '**b** _My partner\'s regret is about something somebody else did: the depot did not tell the drivers. His own part of it is one sentence long and it is the only part he can act on, and it took him four minutes to find it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Three test dates have fallen, and Mazen\'s was the thirtieth of September. He had predicted at least twelve of the fifteen from one batch, and after going to both shops on the Friday he cannot say whether he was right: only eleven of the fifteen can be traced at all. The Mezzeh shop keeps delivery notes in a box by date and let him photograph eight of them; the Shaalan shop files nothing and the owner throws the notes away when the stock is sold, and four of the fifteen came from him. Of the eleven, nine are from one batch and two from the batch before — nine out of eleven against a prediction of twelve out of fifteen — so the honest answer is that the prediction cannot be tested, and he did not see that coming. Ms Huda asked what he should have done, and he said he should have asked for the notes in April, when he first wrote: the Shaalan shop sold that model until August and the March notes would still have been in the box. Rasha said he did not know in April that he would need them, and he said he knew he had fifteen of one model and knew the shops had notes — what he did not know is that one of them throws them away, and he could have found that out in a four-minute conversation he has now had six months late. Then Ms Huda made him say it twice: I should have asked for the notes in April, and if I had asked in April I would have had fourteen of the fifteen. The first is about him and costs him something; the second is a claim about what would have happened, and it is defensible because the notes were in the box until August. Omar said the second kind is usually an argument about somebody else, and Ms Huda agreed: if they had answered my letter, none of this would have happened may be true and is not the sentence that changes what you do next April.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I should asked. → ✓ should **have** asked.   ✗ I should of asked. → ✓ _should have_, never written as _of_.   ✗ I should have ask. → ✓ the past participle.   ✗ I should have earlier. → ✓ give the date.   ✗ a passive that hides you → ✓ choose it on purpose or write _I_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He should have gone to the two shops in April and asked for the delivery notes — walked two hundred metres rather than written to anybody. It would have cost him twenty minutes and two conversations he did not want to have, because both shops sell him the stock he repairs and he did not want to look as though he were investigating them.'));
out.push(A('**2** Between **not knowing** and **not asking**: he could have found out in April that one shop files nothing, by asking, and he did not ask — _and that is a different sentence from not knowing_.'));
out.push(A('**3** For the next person who keeps the book, and for himself in April next year — and it is written inside the cover, where that person will find it.'));
out.push(A('The distinction at the end of this model is the most useful sentence in the cycle and it is worth writing on the board on its own: **_I did not know_ is innocent; _I did not ask_ is a decision.** Most of what we call not knowing is the second, and the test is always the same — was there a four-minute conversation available? In a class of eleven adults there will be eleven yeses.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT I SHOULD HAVE DONE IN JUNE LAST YEAR** · written inside the laboratory day-book · Y. Mansour · November',
  '**What I did.** On the fourteenth of June last year I found a bag of four samples on the shelf by the lift, carried it to the bench, ran the samples and said nothing to anybody.',
  '**What I should have done, and the date.** I should have asked the porter that afternoon why the bag was there. Not reported anybody — asked.',
  '**What it would have cost me.** One conversation with a man I had never spoken to, in my fourth month in the building, in front of whoever was in the corridor.',
  '**What it would have got me.** Sixteen months. He would have told me in June of last year what he told me in October — that he leaves bags there when the door is shut at three and thought we knew.',
  '**What I should not have done.** I should not have written a note in September ranking three possible causes with this one marked as unchecked, when I had seen it with my own eyes.',
  '**And the thing I could not have known.** How often it happens. Nobody has ever counted and nobody can now, and that part is not mine.',
  '**For whoever is new on this bench.** If you find samples somewhere they should not be, ask the person who put them there the same day. You are allowed to. I waited sixteen months to find out that I was allowed to.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**WHAT I SHOULD HAVE DONE IN APRIL** · written inside the cover of the fault book · M. Hariri · October',
  'This is for the next person who keeps this book, and for me in April next year.',
  '**What I did.** In April I had fifteen units of one model with the same fault and I wrote to the supplier asking for a name. I asked twice, got nothing, and in September asked for the adhesive specification instead, which was answered in four days.',
  '**What I should have done, and the date.** I should have gone to the two shops in April and asked for the delivery notes. Not written to anybody — walked two hundred metres and asked.',
  '**What it would have cost me.** Twenty minutes and two conversations I did not want to have, because both shops sell me the stock I repair.',
  '**What it would have got me.** Fourteen of the fifteen traced instead of eleven. The Shaalan shop had the March notes until August and then threw them away, and four of my fifteen are untraceable for ever.',
  '**What I should not have done.** I should not have spent five months writing letters about a name. A name is a thing somebody has to decide to give you; a delivery note is a piece of paper in a box.',
  '**And the thing I could not have known.** That one of the two shops files nothing at all. I could have found that out in April by asking, and I did not ask, and that is a different sentence from not knowing.',
  '**For April next year.** When something comes back three times, go to the shop that week.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The line that does the work is the last one, because it is an instruction and not a feeling, and it is the only sentence on the page the next person needs. I would cut \'this is for the next person and for me in April next year\' — the page is inside the cover of the book, so the reader already knows. And my question is why you are writing it in the fault book rather than saying it to the man in the Shaalan shop, because the sentence he needs is that you would have paid for those notes and he threw them away."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts, and the second question is the one that lands: of the regrets about somebody else, how many had a four-minute conversation in them that nobody had? Nearly all of them. Say it once, without drawing a lesson, and go to 15.2.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I put it inside the cover of the book and then I did the other thing. I went to the Shaalan shop and told the owner that I would have paid him for four delivery notes in April and that he had thrown them away in August. He said nobody has ever asked him for a delivery note in eleven years. Then he said that he keeps the notes from the Turkish supplier because they come with the invoices, and that those go back two years in a drawer, and did I want to look at them. So I have two years of one supplier\'s notes and I did not know they existed, and I would not have known if I had not gone in to tell him about a mistake of mine.']));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  If somebody had counted'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Collect the six from your own margin notes since Unit 8 — this class produces third conditionals constantly and most of them are untestable. Read them back without names, ask the question each time, and keep the two that can be answered on the board for the rest of the lesson.'));
out.push(A('**b** **1** defensible — the notes were in the box   **2** invented — about what other people would have done   **3** defensible — the pattern is in the numbers   **4** invented — and it is the commonest shape of all   **5** defensible — the check was possible at the bus and not at the window'));
out.push(A('Item 4 — _if I had been there, it would not have happened_ — is worth a minute on its own. It is the sentence everybody has said, it cannot be tested, and what it usually means is _I would like it to have been prevented by me_, which is a feeling and not a claim.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Sister Nasr\'s fourteen years. Rasha refuses to say what Sister Nasr **would have done** if she had seen the pattern.'));
out.push(A('**b** **1** _If somebody had counted, she would have seen the pattern_ — because the pattern comes out of the numbers in about an hour once they exist, and it took Rasha nine months only because she was making the numbers.   **2** That the wide version blames an institution and nothing follows from it; the narrow version blames the people who were there, including the speaker, and something follows — somebody starts writing dates down tonight. The test is: **does anything follow from it?**'));
out.push(NOTE('This is the ethical centre of the unit and it is carried by a student refusing to write a sentence. _There I stop_ — four words, and what she is refusing is a claim about a woman she works with, in a year she was not there for. The class should be asked to notice that the refusal is not modesty: everything else in her report is showable, and that sentence is the only part that is not, which is exactly why a reader would have believed it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _If I had asked in April, the notes would have been in the box._ Defensible — the shop kept them until August. Something follows: ask this week about the Turkish supplier\'s notes before they go too.',
  '**2** _If the sheet had been collected from the bus, the check would have been done._ Defensible — the check takes four minutes and the drivers are at the bus; it is the window that makes it impossible. Follows: ask for the collection point to change, which costs nothing.',
  '**3** _If they had answered my letter…_ — stop. I do not know what would have happened, because I do not know who would have read it or what they would have done. _I might have had a name in May_ is the most I can say.',
  '**4** _If somebody had counted the nights, the pattern would have been visible in a year._ Defensible — it was visible in nine months when somebody did. Follows: the day staff are not counting now.',
  '**5** _If I had read the page before the conditions, I would not have given the three men a stricter rule than the ministry\'s._ Defensible — the page says the yard is inside. Follows: the page is now on the wall by the press.',
]));
out.push(A('Three of the five end with **what follows**, which is the half that makes the grammar worth teaching. Item 3 is the model for stopping: _I might have had a name in May_ is the honest maximum, and a class that learns to downgrade _would_ to _might_ has learnt the whole cycle.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** If somebody had counted the nights…',
  '**B:** …the pattern would have been visible in about a year.',
  '**A:** How do you know that is what would have happened?',
  '**B:** Because it was visible in nine months when I did it, and I was making the numbers as I went; with the numbers already there it is an hour\'s work.',
  '**A:** Does anything follow from it?',
  '**B:** Yes. Nobody is counting the day round, and the day round is four hundred patients a week.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark each consequence **in the numbers** or **in somebody\'s head**, then count how many of the second kind produced a next step. Almost none do — and that is the finding to put on the board: a conditional about what somebody else would have done is a sentence with no Monday in it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Wide version: if the directorate had looked at the June papers, chapter seven would have been moved years ago. Narrow version: if I had written the marks down from 2015, I would have had eleven years of figures and the department would have had one meeting instead of sixteen months. What follows: the figures for 2026 go in the back of my register in June, and I have told two colleagues to do the same in their own classes, which is the first time I have asked anybody for anything twice._',
  '**b** _The wide version my partner is still holding on to: "if the office had read my letters, the trolley would have come back in March." He does not know that anybody read them or what they would have done, and the narrow version is that he never asked for a date and never asked who was responsible._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has the figures for both sheets now, and she said what she can say about the fourteen years carefully, because it is the sentence she has been refusing to write since May: Sister Nasr made the same errors on the same nights for fourteen years and nobody counted them, including her. Lubna asked what would have happened if somebody had, and Rasha said she will defend one sentence — if somebody had counted, she would have seen the pattern — because it took her nine months of counting to see it and she is not cleverer than Sister Nasr: the pattern is in the numbers and comes out of them in about an hour once they exist. Jad asked what she would have done then, and Rasha said there she stops: she does not know what Sister Nasr would have done, she does not know what a rota committee would have done in 2014, and she is not going to put a sentence in a report about what a woman she works with would have done eleven years ago. Nour asked why not, since it seems fair, and Rasha said because it is the only part of it that is not a fact — everything else she can show, and "she would have asked for a change" is putting words in her mouth about a year she was living and Rasha was not. The rule: a third conditional is only as good as the thing you can show. Omar asked about the version that blames the hospital, and Rasha said that is the one she would have written in April and it is wrong twice — the errors would have happened, because counting does not stop an error, it finds a pattern, and "the hospital" is not a person who counts anything. What is true is narrower and worse: if any one of us had written the dates down, the pattern would have been visible in a year. And Ms Huda said the wide version blames an institution and nothing follows, and the narrow one blames the eleven people who were there, including her, and what follows is that somebody starts writing dates down tonight. The test is one question: does anything follow from it?']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If I would have asked. → ✓ If I **had** asked.   ✗ If I had asked, I had had them. → ✓ I would have had.   ✗ If somebody counted, she would have seen. → ✓ keep both halves in the past.   ✗ a consequence in somebody\'s head with _would_ → ✓ _might have_, or stop.   ✗ a conditional with nothing following from it → ✓ a complaint in the shape of a conditional.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Counting does not prevent an error — it finds a pattern, which is a different claim; and "the hospital" is not a thing that counts, so nobody is named, nothing follows, and a reader can agree with it and do nothing.'));
out.push(A('**2** She will defend the first half — _if somebody had counted, Sister Nasr would have seen the pattern_ — because the pattern comes out of the numbers in about an hour. She will not defend _and asked for a change_, which is a sentence about what a woman she works with would have done in a year Rasha was not there for.'));
out.push(A('**3** That if a year of counting makes the pattern visible, the ward should be counting now — the only sentence in nine months of work that asks the committee to do something about the future rather than explain the past.'));
out.push(NOTE('The three-version structure is the teachable thing here and it works in any trade: the version you first wrote, the version that is nearly right, and the version you will send — with what is wrong with the first two written down. A reader who can see what the writer refused to claim believes what is left. And the last line of the model is the ethics of this grammar in one sentence: Rasha asked Sister Nasr whether she wanted a sentence about those years, and was told no — and that it was the first time anybody had asked her about them rather than telling her about them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SECOND DOOR · THREE VERSIONS OF ONE PARAGRAPH** · T. Ayoub · for the depot file',
  '**Version 1, which I wrote in June.** _If the depot had told the drivers that the road was closed, four services would not have gone out._',
  '**What is wrong with it.** "The depot" is a building. Nobody is named, the sentence can be agreed with by everybody in it, and nothing follows from it. It is also not what happened: there was nobody in the office to tell anybody.',
  '**Version 2, which I wrote in September.** _If somebody had been in the office at six, the drivers would have been told and the four services would have been held._',
  '**What is wrong with it.** The first half is true and the second half assumes that whoever was in the office would have made four telephone calls in nine minutes, which I do not know. _Might have been held_ is what I can say.',
  '**Version 3, which is the one in the file.** _The call was made at 06.06 to an office that is unstaffed before 06.30. No written note was sent. If a written note had been sent, it would have been on the desk when the staff arrived at 06.30, and the four services left between 06.40 and 07.15._',
  '**Why that version.** Everything in it can be shown: the time of the call, the hours of the office, the absence of a note, the departure times. It names the person who did not send the note, which is me. And something follows: a note takes four minutes and the departure times mean it would have arrived before the buses left.',
  '**And what I have not written anywhere.** What the man who arrived at half past six would have done with it. I have not asked him, and I am going to.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**THE FOURTEEN YEARS · THREE VERSIONS OF ONE PARAGRAPH** · R. Barakat',
  '**Version 1, which I wrote in April and have not sent.** _If the hospital had counted night errors, fourteen years of avoidable mistakes would not have happened on this ward._',
  '**What is wrong with it.** Counting does not prevent an error; it finds a pattern. And "the hospital" is not a thing that counts: no person is named, nothing follows, and a reader can agree with it and do nothing — which is what a reader will do.',
  '**Version 2, which I wrote in July and have not sent.** _If somebody had counted, Sister Nasr would have seen the pattern and asked for a change._',
  '**What is wrong with it.** The first half I will defend: the pattern comes out of the numbers in about an hour once they exist, and it took me nine months only because I was making them. The second half is a sentence about what a woman I work with would have done in a year I was not there for, and it is the only part of the report that is not a fact.',
  '**Version 3, which is in the report.** _No count of night errors by individual and block position existed on this ward before September last year. The pattern now visible in both sheets would have been visible in about a year of counting at any time in the last fourteen. Nobody counted, including the two of us._',
  '**Why that version.** Everything in it can be shown, it names the two people who did not count and one of them is me, and something follows: if a year of counting makes this visible, the ward should be counting now.',
  '**And what I have not written anywhere.** What she would have done. I asked her whether she wanted a sentence about it and she said no.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Version 3 is the only one of the three I would put in front of four people, and the reason is \'including the two of us\' — five words, and nobody can use the paragraph against you. I would change \'would have been visible in about a year\' to give the hour as well, because you told us in the lesson that it takes an hour once the numbers exist and that is the more surprising number. And my question is what you will do with version 1 now, because it is still true that nobody at the hospital counts anything, and nothing in version 3 says that."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts: how many version 1s blame an institution, and how many version 3s have the writer\'s own name in them. Those numbers side by side are the most honest thing the class will produce in Book 2, and the second number is always smaller — which is worth saying, because the gap is not dishonesty, it is that naming yourself in writing is a skill and the room is learning it this month.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked the man who opens the depot office at half past six. He said that if a note had been on the desk he would have telephoned the three drivers he had numbers for, which is three out of four, and that he does not have a number for the fourth driver and never has. So my version 3 is right and there is a fact in it I did not know: a note would have stopped three of the four services, not four, and the fourth driver has been working that line for two years without his number being anywhere in that office.']));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  If I had started it then, I would have it now'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on the present tense in the answer — _I do not have…_ — because the cycle is about today, not about the past. A student who answers with a story has not understood the question, and the fix is to ask: _what is missing from your desk this afternoon?_'));
out.push(A('**b** **1** present result   **2** past result   **3** present result   **4** past result'));
out.push(A('Items 1 and 2 are the same _if_ half with two different results, and 3 and 4 likewise. Put both pairs on the board; the difference is one word — _would have_ against _would have had_ — and it moves the sentence from a finished story to the thing on the desk.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Eleven years of mark analysis instead of four. On the twenty-seventh the meeting happened and something was decided: a line of minutes says the department will teach chapter seven in the second term in all third-year classes from next September, and the head of department is writing to the directorate.'));
out.push(A('**b** **1** _If I had started in 2015, I would have had an easier meeting_ is about the meeting and is finished; _if I had started in 2015, I would have eleven years of figures_ is about her drawer this afternoon.   **2** That her two blanks are not blanks because the information does not exist: they are blanks because she waited two years to ask a man who was about to retire.'));
out.push(A('Umm Kinan\'s prediction was wrong and she got more than she asked for, and the cycle is built on her refusing to be pleased about it. That is deliberate: the one unhappy sentence in a good month — _if I had kept the analysis from the beginning, I would have eleven years of it now_ — is the sentence with a Monday in it, and the forward question at the end of the dialogue is the only reason the form is worth teaching: **what will somebody be carrying in 2030 because of what you are not starting this week?**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _If I had started the fault book in 2019, I would have six years of entries now — and what I am not starting this week is a second column for which shop each unit came from._',
  '**2** _If I had asked for the 1974 file in my second year, I would have the drawings now. What I am not asking for this week is the 2009 conversion file, and the woman who holds it retires in two years._',
  '**3** _If I had spoken to the porters in my fourth month, I would know how many bags there have been. What I am not doing this week is asking the night porter the same question._',
  '**4** _If anybody had written the round times down from 2019, we would have six years of them now instead of nine months. What nobody is doing this week is the day round._',
  '**5** _If I had started reading English out loud in my twenties, I would not be the slowest reader in this room now — and what I am not starting this week is the twenty minutes a day I have been intending to start since Unit 4._',
]));
out.push(A('Every answer carries the forward half, which is what the cycle is for. Collect the five forward sentences and keep them: three of them reappear in 24.5 when the class sets the next twelve months, and a student who sees their own September sentence in June has learnt something no test measures.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A record you began later than you could have.',
  '**B:** If I had begun the night book in January, I would have had eighteen months at the committee instead of nine. And if I had begun it in January, I would have the February figures now, which are the ones everybody keeps asking me for and which do not exist.',
  '**A:** What are you not starting this week?',
  '**B:** The day round. Nobody has ever timed it, and in five years somebody will ask me for the 2026 figures and I will say the same sentence I am saying now about February.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Write the eight answers to _what are you not starting this week?_ and read them back at the end of the stage. Six or seven of the eight would take under an hour to start, and three or four are things somebody is about to lose because a person is leaving or a paper is thrown away on somebody else\'s schedule. That is the cycle, and the class has written it themselves.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _If I had asked my own company for the training figures in 2023, I would have three years of them now. What I am not starting this week is writing down which representatives I have trained and on what date — and the window closes when the man who has the old diary leaves in March._',
  '**b** _My partner\'s window is closing soonest: the woman who holds the 2009 file retires in two years, and his is the only request that depends on a person rather than a drawer._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The twenty-seventh of October has fallen and Umm Kinan was wrong: the meeting happened and something was decided. There is a line of minutes — the department will teach chapter seven in the second term in all third-year classes from next September, and the head of department is writing to the directorate to say so. Nour said that is everything she asked for, and Umm Kinan said it is more, because she asked for her own classes and they gave it to all of them. Then she said the sentence that has been in her head since Monday, which is not a happy one: if she had kept the mark analysis from the beginning, she would have eleven years of it now instead of four. She has taught the chapter for twenty-four years and has analysed the June papers for four, and she noticed the problem in 2015 — she can name the staff room she was standing in, and she said it to a colleague who agreed with her, and neither of them wrote anything down. With eleven years she thinks it would have taken a term instead of sixteen months. The two sentences are different: if I had started in 2015 I would have had an easier meeting is about the meeting and is finished; if I had started in 2015 I would have eleven years of figures is about her drawer this afternoon. Lubna has the same thing and hers is two blank spaces: if she had asked the university for the 1974 file in her second year she would have it now, because the man who held it retired in March and nobody knows what happened to the drawings — so her key has two blanks for ever, and they are not blanks because the information does not exist, they are blanks because she waited two years to ask a man who was about to retire. And Ms Huda said this is the one cycle in the unit that is not about regret: it is about what you are carrying today because of a decision whose date you can name, and the useful half is the next question — what will somebody be carrying in 2030 because of what you are not starting this week?']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If I had started then, I would have had six years now. → ✓ _would have_ six years now.   ✗ If I started then… → ✓ if I **had** started.   ✗ a present result with no _now_ in it → ✓ anchor it: _now · today · this afternoon_.   ✗ a regret with no window attached → ✓ say what is closing, and when.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Sixteen months — and the currency is **meetings**, which is the one currency a school department has.'));
out.push(A('**2** Because eleven years is not one teacher\'s classes any more: it is a pattern that survives a change of teacher, a change of pupil and two changes of textbook, and nobody can say it is her marking.'));
out.push(A('**3** Open a page in the back of the register and write the date, the chapter and the marks for one chapter, in your own classes, once a year — about **forty minutes every June**.'));
out.push(NOTE('The time cost is the most practical sentence on the page: _about forty minutes every June._ Nobody starts a record because nobody has ever told them how long it takes, and a page that gives the number converts a good intention into a diary entry. Note also whom the page is addressed to — _whoever teaches this chapter after me_ — and the last line, which turns a page about 2015 into a page about this week.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE NIGHT BOOK · WHAT NINE MONTHS COST, AND WHAT SIX YEARS WOULD HAVE DONE** · R. Barakat · for whoever is on these nights after me',
  '**What I have.** Nine months of nights: 118 shifts, seven errors, the block position of every one, and the round completion time since February.',
  '**What I would have if I had started when I first noticed.** Six years, from 2019. I noticed in the spring of 2019, on a fifth night, when I made the second of two errors in a week and said to myself that it was always the end of a block. I said it to nobody and wrote it nowhere.',
  '**What the nine months cost.** A committee that gave me a trial for one nurse instead of a change for a ward, because nine months of one person is a story and six years of a ward is a pattern. It also cost Sister Nasr fourteen years, and I am not going to pretend that is the same size as my inconvenience.',
  '**What I am not claiming.** That nine months was not enough. It worked. I am claiming it was expensive in the currency a ward has, which is nights.',
  '**What anybody reading this should do on Monday.** Three columns at the back of the book: date, block position, and the time the round finished. Four minutes a night, about two hours a month.',
  '**And the sentence I would rather not write.** Nobody is counting the day round. In 2032 somebody will write this page about 2026, and the thing they will not have is whatever I am not starting this week.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**CHAPTER SEVEN · WHAT FOUR YEARS COST, AND WHAT ELEVEN WOULD HAVE DONE** · S. Dibo · 29 October · for the department file and for whoever teaches this chapter after me',
  'The minute of the twenty-seventh says that chapter seven moves to the second term in all third-year classes from next September. This page is not about that. It is about the four years.',
  '**What I have.** Mark analyses for June 2022, 2023, 2024 and 2025: my own classes, my own marking, about a hundred and ten pupils a year, chapter-seven questions marked separately.',
  '**What I would have if I had started when I first noticed.** Eleven years, from 2015. I noticed in the summer of 2015, standing in the old staff room looking at a set of June papers, and I said to a colleague that the chapter was always in the paper and always taught last. She agreed with me. Neither of us wrote anything down.',
  '**What the four years cost.** Sixteen months. I raised it in June of last year with four June papers and my own figures, and the answer was that the scheme comes from the directorate. With eleven years I think it would have taken one meeting, because eleven years is a pattern that survives a change of teacher, a change of pupil and two changes of textbook, and nobody can say it is my marking.',
  '**What I am not claiming.** That four years was not enough: it worked, in sixteen months. I am claiming that it was expensive in the one currency a department has, which is meetings.',
  '**What anybody reading this should do on Monday.** Open a page at the back of your register. Date, chapter, marks, once a year. About forty minutes every June.',
  '**And the sentence I would rather not write.** I was given a projector in January and used it four times. In 2036 somebody will write this page about 2026.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The forty minutes is the line that will make somebody do it, because it is the only number on the page that is about them rather than about you. I would cut the projector sentence at the end — it is a second regret in a page about one, and the chapter-seven page does not need it. And my question is who you are going to hand this to, because the department file is where pages go to be filed and the back of somebody\'s register is where this one needs to be."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect the years — the earliest "when I first noticed" in the room is usually fifteen or twenty years back — and then the hours: how many of the things nobody is starting this week would take under an hour to begin? Twenty years and forty minutes, side by side on the board, is the whole cycle and needs no commentary.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I opened the page. Three columns at the back of the night book: date, block position, round finish. First entry on the fourth of November, and I have asked Sister Nasr to keep the same three columns on her own sheet so that there are two hands in it from the start, which is the thing I did not do in 2019. In five years it will be six years long and neither of us will be the person who has to argue for it, which is the only part of this that I am sure about.']));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  The apology that names the thing'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use real formulas — the ones on notices, in letters from companies, in messages. For each one ask only _what is being apologised for?_ In four of the six it cannot be said, because what is named is a feeling (_if anybody was upset_), a misunderstanding that did not happen (_the confusion_), or a situation with nobody in it (_that the situation developed as it did_).'));
out.push(A('**b** Names the thing: **2** and **5**. Not **1** (somebody else\'s reaction), not **3** (a situation), not **4** (_mistakes were made_, with nobody making them).'));
out.push(A('Item 5 is the model: _I made a rule stricter than the one the ministry wrote, and it cost you three Saturdays._ A thing, a comparison that shows it was wrong, and a counted cost — in one sentence.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – an apology, and nobody asked him for it. He said it to the three men in June, by the press, in about forty seconds; one of them was in the yard and did not hear it, and the yard is the whole subject.'));
out.push(A('**b** **1** The thing with a date; that it was wrong; what it cost, counted; and what he is doing about it.   **2** That everything after a _but_ is what the reader remembers — so the true things he could put there (unclear conditions, no covering letter) would become what his apology said.'));
out.push(NOTE('Two refusals make this cycle work and both are the student\'s. _There was no confusion — I made a decision_, which is the difference between an apology and an account of weather; and the refusal to offer money, because _it becomes a transaction and the apology disappears into it_. What he does instead is the smallest thing that is actually his: the page goes on the wall, and the three men see every page he is sent from now on.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _On the fourth and the eleventh I gave you two different dates for the same delivery. That was wrong. It cost you a wasted morning and a second journey. From now on the date goes in writing the same day, and if it changes I telephone you before you leave._',
  '**2** _I told your ward on Tuesday that the delay was the afternoon run. That was wrong — it is at least two things, and one of them is a corridor. It cost your house officer an argument with the laboratory that he should not have had. I have written the whole answer down and it is on the bench, and a copy is going to your ward._',
  '**3** _I said in September that I would send the figures by the twelfth and I sent them on the nineteenth. That was wrong and the reason is not yours. It cost you a week of planning. The next date I give you will have the condition attached to it in the same sentence._',
  '**4** _I answered your question about the switch without looking at the drawing. That was wrong. It cost you half a day of opening a wall that did not need to be opened. The drawing is now in the folder in that room, and I have written the two switch numbers on the inside of the cupboard door._',
  '**5** _In May I told the three of you that leaving the building included the yard. That was wrong — the definitions page says the yard is inside the premises — and it cost you three Saturdays. The page is on the wall above this letter._',
]));
out.push(A('Notice what is **not** in any of the five: no _but_, no _if_, no adverb in front of _wrong_, and no mention of the writer\'s week. Each one has the four parts and nothing else, and each is between three and five sentences long, which is the length an apology can be read at.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Sorry about the mix-up with the dates.',
  '**B:** On the fourth I told you the tenth and on the eleventh I told you the eighteenth, for the same delivery. That was wrong. It cost you a morning and a second journey from Douma. From now on the date goes to you in writing the same day I get it.',
  '**A:** Was there a _but_ or an _if_ in it?',
  '**B:** No. There was one in my head — the agent changed it twice — and that is a different letter to a different person.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Four parts per apology, and mark the missing one. **What it cost** disappears first, because counting it is the moment the apology becomes real; and the _but_ arrives uninvited, usually in the last sentence, where it is hardest to see. Read two of the _buts_ aloud with permission: they are always true, and that is what makes them hard to delete.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _In June I told a ward that the delay was the afternoon run. That was wrong: it is at least two things. It cost that house officer an argument with my own bench that he should not have had, and it cost the laboratory the ward\'s trust for four months. What I am doing is the note, which is on the bench, and the loading time going on the door. — The _but_ I have left out, and I have now said it once: nobody has ever told the porters when the door is shut._',
  '**b** _My partner is apologising for a misunderstanding and what happened was a decision: he chose not to pass a message on because he thought it was not important, and his letter says "there seems to have been a breakdown in communication"._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel said the apology to his three men in June, standing by the press, and it took about forty seconds. Now he wants to write it and has found that he cannot — because one of the three was not there in June: he was in the yard, and the yard is the whole subject of it. What he had written was: I am sorry about the confusion over the yard rule in May, but the conditions were unclear and I had not been given the definitions page at the time. Jad pointed out the "but", and Bassel said there is a but in it and everything after the but is true. Ms Huda asked what a reader does with a sentence that has a but in it, and he said remembers the second half — he knows that, it is 12.2 — and what the man in the yard will remember is that the conditions were unclear. Rasha asked whether there had been a confusion, and Bassel said no, and that is the second thing wrong with it: there was no confusion, he made a decision. He stood in the shop in May and told three men that leaving the building included crossing the yard, and he was wrong, and the page that said so had been on his counter for five weeks. So, with no but in it: in May I told you that leaving the building included the yard; that was wrong — the definitions page says the yard is inside the premises — and I had the page and had not read it; it cost you three Saturdays between May and August, and Ahmad two days of overtime he did not have to work. Omar asked whether he would offer them something, and Bassel said money would turn it into a transaction and the apology would disappear into it. What he is going to do is the one thing that is actually his: the definitions page goes on the wall by the press, and the three of them see every page he is sent from now on, including the ones he has not read. And what he is not going to put in is that he would have read the page if the ministry had sent a covering letter — true, a third conditional, and not the man in the yard\'s problem.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am sorry if anybody was upset. → ✓ name the thing you did.   ✗ I am sorry about the confusion. _(there was none)_ → ✓ _I made a decision and it was wrong._   ✗ …but the conditions were unclear. → ✓ no _but_.   ✗ I would have read it if they had sent a letter. → ✓ no _if_.   ✗ I apologise for any inconvenience. → ✓ count it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** His rule was that nothing could cross the yard without a signed order in hand; the ministry\'s rule is that the yard is **inside** the premises, so nothing needed an order to cross it. His was stricter than theirs.'));
out.push(A('**2** That the conditions were unclear — because the page that made them clear was on his counter — and what he would have done if the ministry had sent a covering letter. Both are true and neither is theirs.'));
out.push(A('**3** The definitions page on the wall above the letter; the three men see every page he is sent on a ministry order on the day it arrives, including the ones he has not read; and Ahmad is named in writing to the ministry office as the man who authorises work in his absence.'));
out.push(A('The last paragraph is the hardest thing in Book 2 so far and it is one sentence: _Abu Marwan, you asked me in May whether the yard counted and I said yes without looking it up. You were the only one who asked._ It is not an apology and it is not an excuse; it is a fact about which of the three men behaved well, and it is the sentence that will be remembered by all three. Ask the class what it costs the writer to put it in, and then ask what it would cost to leave it out.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO WARD SIX · for the attention of Dr Haddad and whoever is on the ward** · Y. Mansour · 2 November',
  '**What I did.** On Tuesday the fourteenth of October you asked me at the bench why four samples from Monday afternoon had come back a day later than two from Monday morning, and I told you it was the afternoon run.',
  '**That was wrong.** It is at least two things. The afternoon run explains part of it, and on the twenty-ninth I found a bag of four of your samples on a corridor shelf at ten past three where it had been left because our door was shut.',
  '**What I had.** I had found a bag on that shelf myself in June of last year and I had not told anybody, and in September I wrote a note for your ward listing three causes and left that one out of all three.',
  '**What it cost you.** One argument between your house officer and my bench that should not have happened, and four months in which your ward believed the laboratory loses afternoon samples — which we do not, and partly do.',
  '**What I am not going to say.** That you asked me at a bench in forty seconds and I had no time to give you three answers. It is true and it is not yours.',
  '**What I am doing about it.** The whole answer is written down and on the bench; a copy is with this letter. From Monday the time goes on every bag as it reaches us. And the head porter has been written to, which nobody in a white coat had ever done.',
]));
out.push(S('Stage 7 · Write freely (sample, 179 words)'));
out.push(SAMPLE([
  '**TO AHMAD, KHALED AND ABU MARWAN** · B. Tahhan · 3 November · a copy of this is on the wall by the press',
  '**What I did.** In May I told the three of you that leaving the building with finished work included crossing the yard, and that nothing was to go out without a signed order in hand.',
  '**That was wrong.** The definitions page of the ministry conditions says the premises includes any yard whose access is from the building. The yard is inside. Nothing needed a signed order to cross it, and the rule I gave you was stricter than the one the ministry wrote.',
  '**I had the page.** It came with the conditions in March, sat on my counter for five weeks, and I did not read it, because it was headed Definitions and definitions are what you skip.',
  '**What it cost you.** Ahmad: two Saturdays in June and one in July, waiting for me to come in and sign for work standing six metres from where it needed to be. Khaled: the same two Saturdays. Abu Marwan: four days in July and August when he could not move boxes after six because I was not here to sign, and two days of overtime he did not have to work. I am not going to pretend I know what that was worth to the three of you.',
  '**What I am not going to say.** That the conditions were unclear, because the page that made them clear was on my counter. And what I would have done if the ministry had sent a covering letter. Both are true and neither is yours.',
  '**What I am doing about it.** The definitions page is on the wall above this letter. From today you see every page I am sent on a ministry order on the day it arrives, including the ones I have not read. And I have told the ministry office in writing that Ahmad authorises work when I am not here.',
  '**And one more thing, which is not an apology.** Abu Marwan, you asked me in May whether the yard counted and I said yes without looking it up. You were the only one who asked.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The last paragraph is the one I would not have been able to write, and it is the reason the three of them will believe the rest. I would cut \'I am not going to pretend I know what that was worth to the three of you\' — it is the only sentence that asks them to think about your feelings, and the counted Saturdays have already said it. And my question is whether Ahmad knows he is being named in writing before he reads it on a wall, because being made the man who signs is a thing a man might want to be asked about first."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts — apologies with a number in them, and apologies with a _but_ still somewhere in them. Then read two of the _buts_ aloud, with permission. They are always true. That is the whole difficulty of this cycle and it cannot be taught any other way than by hearing a true sentence that has to come out.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave it to the three of them on the Thursday and put the copy on the wall. Ahmad read it and said one thing: "the Saturdays were three, not two" — he had one in August as well that I had not counted. Khaled said nothing at all and shook my hand, which is not his habit. And Abu Marwan read the last paragraph twice and then asked me whether he should ask more often. I said yes. He asked me a question about the second machine on Monday morning that nobody has asked me in nineteen years, and the answer was that I do not know.']));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  I wish I had counted'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and hold the two rules: **no explanations** and **silence afterwards**. Eleven sentences read into a quiet room, nobody commenting, is the only way to run this stage; the moment one student explains, the next eight explain, and the board fills with stories instead of sentences.'));
out.push(A('**b** **1** past   **2** present   **3** past   **4** present   **5** past'));
out.push(A('Item 4 — _I wish I had the file_ — is the one students read as a past wish because of the word _had_. It is present: I have not got it now. Put 1 and 4 side by side on the board.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** She wishes she had checked the corridor in August — and on the shelf by the lift, at ten past three on the second afternoon, she found a bag with four samples in it that nobody had taken up.'));
out.push(A('**b** **1** _I wish I had checked_ is about the past; _I wish I knew_ is about now, and it is a statement that the information does not exist — nobody counted and nobody can tell her.   **2** A wish is good for finding the thing you **knew and did not use**; it is not good for anything else, and a page made of wishes is a page where nothing happens on Monday.'));
out.push(NOTE('The sentence Yara has been avoiding for two weeks is the point of the cycle: _it is not that I did not know, it is that I knew and could not say it._ She found a bag on that shelf in June of last year, in her fourth month, and said nothing — and in September she wrote a note ranking three possibilities and left that one out of all three. The wish found it. Nothing else in the language finds that as fast, and the class should be told so plainly, because otherwise 15.5 reads as the self-pity cycle.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I wish I had checked the corridor in August. I wish I knew how many bags there have been. What I knew at the time was that it happens at all, and I had known it for sixteen months._',
  '**2** _I wish I had asked the shops for the notes in April. I wish I knew which batch the four untraceable ones came from. What I knew at the time was that both shops had notes in a box._',
  '**3** _I wish he had told me that the office is empty before half past six. I wish I knew how many times that call has been made to an empty room. What I knew at the time was that nobody had ever answered it before seven._',
  '**4** _I wish somebody had counted the nights. I wish I knew what the day round costs. What I knew at the time was that my errors were always at the end of a block, and I said it to nobody in 2019._',
  '**5** _I wish I had written the marks down in 2015. I wish I knew what the 2015 to 2021 papers would have shown. What I knew at the time was exactly what I know now, and I said it to a colleague in a staff room and neither of us wrote it down._',
]));
out.push(A('The third sentence is the one that matters in each pair and the reason the stage is worth running: **what I knew at the time.** Item 5 is the hardest version of it — _exactly what I know now_ — and it is the sentence that makes 15.3 and 15.5 one cycle rather than two.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A check you kept meaning to make.',
  '**B:** I wish I had checked the corridor in August. I wish I knew how many bags there have been in two years.',
  '**B:** What I knew at the time was that a bag had been left in a corridor at least once, because I carried it to the bench myself.',
  '**A:** Why did you not say it?',
  '**B:** Because I had been there four months and I did not speak to anybody outside my bench. That is the true reason and it is not a good one.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight answers to _what I knew at the time was…_ About half are things the speaker **knew and could not say** — not did not know, could not say — and that is a different problem from ignorance. It is 4.6, 6.6 and 12.4 arriving together, and the only honest response in the feedback is to name it and say that the course has been working on it for a year.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Past: I wish I had asked in my second year. Present: I wish I knew where those drawings are now. What I knew at the time: that one man held the only copy and that he was near retirement — the department secretary told me so in 2023. And what I know now and am not saying: the woman who holds the 2009 file is in her last year._',
  '**b** _My partner\'s silence was about not being able to speak, not about not knowing — and it is still true today, because the person he could not speak to is still the person he cannot speak to._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara did the twenty minutes — the possibility she had not checked since August. She stood by the lift on three afternoons, and on the second one there was a bag on the shelf at ten past three with four samples in it and nobody had taken it up. So it is not one of three things, it is at least two of them. The porter said he leaves bags there when the laboratory door is shut at three, which it is, because that is when they load; he has been doing it for about two years and thought they knew. She wishes she had checked it in August, and she wishes she had checked it the first time she found a bag there, which was the fourteenth of June last year, which she worked out from her own diary. Omar said so she said nothing — and she said she put the bag on the bench, ran the samples and said nothing, because she had been in that laboratory four months and did not speak to people: and that is the sentence she has been avoiding for two weeks, because it is not that she did not know, it is that she knew and could not say it. The two forms: I wish I had checked it in August, about August and finished; and I wish I knew how many bags there have been, about now, because nobody counted and nobody can tell her. Rasha said there was a third, and Yara said yes — I wish he had told somebody: two years of bags on a shelf, and he never said it to anybody in a white coat, and she understands why, because she did not either. Ms Huda asked what "I wish I had checked in August" changes, and Yara said nothing, it is August — what it is for is saying out loud which of her three possibilities she was protecting, because she ranked the afternoon run first in September having found a bag on a shelf sixteen months before, and she did not put the bag in her ranking at all. And Ms Huda said that is what a wish is good for: it finds the thing you knew and did not use, and it is not good for anything else.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I wish I would have counted. → ✓ I wish I had counted.   ✗ I wish I know. → ✓ I wish I knew.   ✗ I wish I would have the file. → ✓ I wish I had the file.   ✗ If only… three times on one page → ✓ once.   ✗ a wish on a page other people will read → ✓ keep it on your own page (15.6).'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That she had checked the corridor in August; that she had checked it on 14 June last year; and — about now — that she knew how many bags there have been in two years, which nobody can tell her because the bags carry no time and nobody counted.'));
out.push(A('**2** That a bag of samples had been left in a corridor — not how often, not why, not whose, but the one thing that mattered, which is that it happens at all. She had known it for **sixteen months** when she wrote the September note.'));
out.push(A('**3** Three lines: that bags are left on the shelf when the door is shut at three and have been for about two years; that from Monday the time goes on the bag; and that somebody has to tell the porters when the door is shut, which she will do herself if nobody else does. Deliberately **not** on it: anything about her — no wishes, no history, no explanation of her silence.'));
out.push(NOTE('The two-page structure is the most practical thing in the cycle and it is worth making explicit: everything about you on the first page, and three lines with a date and a name on the second. A wish on a shared page makes other people manage the writer\'s feelings instead of the bags — and the three lines, with nothing of her in them, are the only part of this that will still be working in March.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE TURKISH NOTES IN THE DRAWER** · M. Hariri · a page for myself, and three lines for the counter',
  '**For myself. What I wish.** I wish I had asked the Shaalan shop for delivery notes in April, when the notes for the March units were still in his box. I wish I had asked him in 2019, when the first unit of that model came back twice. And I wish I knew what was on the four notes he threw away in August, which nobody can tell me now.',
  '**What I knew at the time.** That shops keep delivery notes, because I have watched both of them write on them. Not that one throws them away — but I knew they existed, and I had known it for six years.',
  '**Why I said nothing.** Because both shops sell me the stock I repair and I did not want to be the repairer who asks questions about their paperwork. That is the true reason and it is not a good one.',
  '**And the thing that is not about me.** He has kept two years of Turkish supplier notes in a drawer because they come with the invoices, and nobody has ever asked him for one in eleven years. He offered them to me the moment I told him about a mistake of mine.',
  '**For the counter — three lines.**',
  '**1** Both shops keep delivery notes. The Mezzeh shop files them by date; the Shaalan shop keeps only the ones that come with invoices, and throws the rest away when the stock is sold.',
  '**2** When a unit comes back a second time, ask for the note that week.',
  '**3** The Turkish supplier notes in the Shaalan drawer go back two years. I am photographing all of them this month.',
]));
out.push(S('Stage 7 · Write freely (sample, 175 words)'));
out.push(SAMPLE([
  '**THE BAG ON THE SHELF** · Y. Mansour · a page for myself, and three lines for the bench',
  '**For myself. What I wish.** I wish I had checked the corridor in August, when I wrote in a note for a ward that I had not checked it. I wish I had checked it on the fourteenth of June last year, when I found a bag of four samples on the shelf by the lift and carried it to the bench and said nothing. And I wish I knew how many bags there have been in two years, which nobody can tell me, because nobody counted and the bags have no time on them.',
  '**What I knew at the time.** That a bag of samples had been left in a corridor. Not how often, not why, not whose — but I knew the one thing that mattered, which is that it happens at all, and I had known it for sixteen months when I wrote a note ranking three possibilities and left it out of all three.',
  '**Why I said nothing in June of last year.** I had been there four months, I was the newest person on the bench, and I did not speak to the porters or the doctors. That is the true reason and it is not a good one.',
  '**And the thing that is not about me.** He has been leaving bags on that shelf for two years and thought we knew, and when I asked him he answered in four words and looked as though he expected to be in trouble.',
  '**For the bench — three lines, and nothing about me.** **1** Bags are left on the shelf by the lift when the door is shut at three; this has been happening for about two years. **2** From Monday, write the time on the bag when it reaches the bench — two weeks, then we will know how many and how late. **3** The loading time goes on the door, and I will write it myself on Monday if nobody else does.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The three lines are the best thing you have written all year, because there is nothing of you in them and they can be acted on by a stranger. I would change \'which we do not, and partly do\' if that sentence appears anywhere on the bench page — on your own page it is honest and on a shared page it is a riddle. And my question is whether the porter will ever see the three lines, because every one of them is about something he does and the page is going on a bench he is not allowed to stand at."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Hands for _knew and could not say_, and then the question nobody expects: how many of you were the newest person somewhere when it happened? Most of the hands stay up. That is the finding of the whole course, and it is the argument for every cycle from 1.3 onwards that asks a student to say something out loud in a room.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The three lines went on the bench on Monday and on Wednesday the head porter came to the laboratory door, which he has never done, and asked whether he could have a copy. He said nobody had ever written anything to the porters about the laboratory in eleven years except a notice about not propping the door open. Then he said the loading time should be on the door in Arabic and in numbers, because two of his men do not read the signs, and he was right and I had not thought of it, and he wrote it himself.']));

// ===================== 15.6 =====================
out.push(pb());
out.push(h2('15.6  The honest report'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The two accounts should be the same event, and the second question is the whole stage: _which one would you act on?_ In a first run the class says the one written by the person it happened to — and the reason is always that it has times in it.'));
out.push(A('**b** **1** heading 2   **2** heading 1   **3** heading 4   **4** heading 2'));
out.push(A('Items 1 and 4 are both heading 2, and that is worth noticing: _what I got wrong_ holds both the decision and the one conditional, and nothing else in the document does.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** In heading 2 only, and once — because that is the paragraph about what you now know. In heading 1 a conditional is an excuse, in heading 3 a plea, and in heading 4 nothing at all.'));
out.push(A('**b** **1** What happened · what I got wrong · what it cost · what changes. Students write heading 2 first, because it is the thing they are afraid of — or heading 3 first, if they are angry.   **2** The whole page is read as a defence; she has seen it happen to a man who had nothing to defend.'));
out.push(A('The order is the technique and it is the single most portable thing in Book 2. Say the reason out loud, because it is not obvious: **a reader who is given an argument before a fact distrusts the fact.** Everything else in the cycle follows from that — why the conditional is in heading 2 and not heading 1, why the cost has no adjectives in it, and why heading 4 has to contain something the writer is doing themselves.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  'Heading **1**: _2 A bag of four samples was on the shelf at 15.10._ · _5 Four samples were eighteen hours late._ · _6 The number of bags over two years is unknown._',
  'Heading **2**: _1 I did not check it in August._ · _3 I ranked three possibilities and left this one out._',
  'Heading **4**: _4 From Monday the time goes on the bag._',
  'Heading **3** takes the counted costs: in this set, sentence 5 could go in either 1 or 3 and the honest answer is 3, because eighteen hours is what it cost rather than what happened. Sentence 6 belongs in 3 as well, as the cost that cannot be counted.',
]));
out.push(A('Make the class argue about sentences 5 and 6, because the argument is the learning: a fact about an outcome is a cost, and a fact about the event is what happened. Nobody gets this wrong twice.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** If anybody had told me, this would not have happened.',
  '**B:** Nowhere. It is a wide conditional about other people, it has no fact in it, and in heading 2 it would turn the admission into a case. If the point is real, heading 2 takes the narrow version: nobody told me and I did not ask, and the asking was mine.',
  '**A:** And the next one?',
  '**B:** "A bag of four samples was on the shelf at 15.10 on 29 October" — heading 1, because it has a time, a date and a count in it and no person.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three of the eight belong nowhere: the wish, the adjective (_completely unacceptable_), and the wide conditional. All three appear in a first draft of anybody\'s report, and what each one does to a reader is worth naming: the wish asks them to manage your feelings, the adjective asks them to share your mood, and the conditional asks them to accept a claim before they have a fact.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Heading 1: on 29 October at 15.10 a bag containing four samples from ward six was found on the shelf by the second-corridor lift; collected 14.35, released 09.40 the following morning. Heading 2: in September I wrote a note ranking three causes and left this one out, having seen a bag on that shelf in June of last year — if I had checked the corridor in August, the two years would have ended two months earlier. Heading 3: four samples eighteen hours late; the two-year number unknown and unreconstructable. Heading 4: from Monday the time goes on the bag; the loading time goes on the door and I will write it myself if nobody else does._',
  '**b** _Hardest heading: three, because I had to stop writing "serious" and "unacceptable" and I had nothing left to say except four samples and eighteen hours. Fastest: four, which took two minutes, and I had been avoiding the whole report for a fortnight._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara has to write the bag up and her problem is the problem of the whole unit: everything she writes turns into an explanation. She starts with the bag and by the third sentence she is writing about being new, and about the door, and about the porter not telling anybody — all true, and none of it a report. Nour said put the facts first with no sentences about yourself in them, and Yara said she tried that and then the facts have no reason in them and the man reading it will ask why nobody noticed for two years. So Ms Huda gave four headings in a fixed order: what happened, what I got wrong, what it cost, what changes. Jad asked about the conditionals, and she said in the second heading only, and once — because that is the paragraph about what you now know; in heading 1 it is an excuse, in 3 a plea, and in 4 nothing. Nour said that at TechCare an "if" in the second paragraph makes the whole page read as a defence, and she has seen it happen to a man who had nothing to defend. Ms Huda asked what order students write them in: Omar said two first, because it is the thing you are afraid of; Rasha said three first, if you are angry about the cost — and both make the reader distrust the facts, because the facts arrive after an argument has started. Yara said then her first paragraph has no "I" in it at all, and Ms Huda said it has a shelf, a time, a date and four samples in it: the "I" starts in heading 2 and finishes at the end of heading 3, and heading 4 is about Monday. Lubna said that is the shape of every incident report she has ever read and she had never seen the order before.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ an _if_ in heading 1 → ✓ facts only.   ✗ a wish anywhere → ✓ your own page (15.5).   ✗ _serious delays_, _unacceptable_ → ✓ count it.   ✗ heading 4 full of what other people should do → ✓ one thing that is yours, with a date.   ✗ two conditionals in heading 2 → ✓ one.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Heading 1 has a date, a time, a count of samples, a collection time, a release time, an eighteen-hour gap, the 15.00 door time, the porter\'s statement and two earlier sightings — and no _I_ until heading 2, where the first word of the paragraph is _In September I_.'));
out.push(A('**2** The number of bags in two years: **unknown and cannot be reconstructed**, because the bags carry no time and no record was kept at either end. She has three afternoons of observation with one bag found, and says the figure is not negligible and that she will not put a number on it.'));
out.push(A('**3** The time written on every bag from Monday 4 November for two weeks; the loading time on the door, which she will write herself if the sign has not come; and the head porter copied in — which is hers, and which nobody in a white coat had ever done.'));
out.push(NOTE('Two placements make this report work and both are worth marking in the margin. The porter\'s statement is in **heading 1**, as a fact — moved into heading 2 it would become a way of sharing the blame. And the refusal of the number is in **heading 3**, where a cost belongs even when it cannot be counted: _unknown and cannot be reconstructed_ is a cost, and _not negligible, and I will not put a number on it_ is the sentence that keeps the page honest in both directions.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE MORNING OF 12 MAY · REPORT** · T. Ayoub, driver · 4 November · copy to the night supervisor and to the man who opens the office',
  '**1 · What happened.** The Harasta road was closed at 06.00 on 12 May. A telephone call was made to the depot at 06.06 and was not answered; the office is unstaffed before 06.30. No written note was sent. Four services were despatched between 06.40 and 07.15. The first report of the closure reached the depot at 09.40. The man who opens the office states that he has telephone numbers for three of the four drivers and has never had one for the fourth.',
  '**2 · What I got wrong.** The procedure requires a telephone call to the depot and I made it. It says nothing about what to do when the call is not answered, and I decided that the call was enough. If I had sent one line in writing at six, it would have been on the desk at half past six and three of the four services could have been held.',
  '**3 · What it cost.** Four services despatched onto a closed road; about forty minutes each in lost running time; one driver turned at the barrier with twenty-two passengers aboard. The number of times this call has been made to an empty office is **unknown**: no record is kept of calls to that office at that hour.',
  '**4 · What changes.** From 11 November I send one line in writing every time I telephone the depot before half past six, and I keep a copy. I have asked the night supervisor for the fourth driver\'s number to be put on the office wall, and if it is not there by the end of the month I will ask him for it myself and write it up. And this report goes to the man who opens the office, who has never been sent anything about that morning.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**DELAYED AFTERNOON SAMPLES · REPORT** · Y. Mansour, laboratory · 2 November · copy to the pathology office and to the head porter',
  '**1 · What happened.** On 29 October at 15.10 a bag containing four samples from ward six was found on the shelf by the second-corridor lift. The samples had been collected at 14.35 and were released at 09.40 the following morning, eighteen hours after collection. The laboratory door is shut at 15.00 for the afternoon analyser run. The porter on that round states that he has left bags on that shelf when the door is shut for about two years and believed the laboratory was aware of it. A bag was also found on that shelf by this writer on 14 June last year, and in August of this year.',
  '**2 · What I got wrong.** In September I wrote a note for ward six giving three possible causes of a day\'s delay, ranked them, and marked the porters\' round as the one I had not checked. I had found a bag on that shelf myself sixteen months earlier and did not include that fact in the note. If I had checked the corridor in August, when I wrote that I had not, the two years would have ended two months earlier.',
  '**3 · What it cost.** Four samples delayed by eighteen hours on 29 October. The number of bags left on that shelf in two years is **unknown and cannot be reconstructed**: the bags carry no time and no record was kept at either end. On three afternoons of observation in October one bag was found; the figure is not negligible and I will not put a number on it.',
  '**4 · What changes.** From Monday 4 November the time is written on every bag as it reaches the bench, for two weeks, after which we will know how many and how late. The 15.00 loading time goes on the laboratory door; I have asked the office for a sign and if it has not come by Monday I will write one myself. And the head porter is copied in on this report, which is the first time anybody in a white coat has written to him about this shelf.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Heading 1 has nine facts in it and no \'I\', and that is why I believe heading 2 when it arrives. I would cut \'the figure is not negligible\' — you have already said unknown and unreconstructable, and \'not negligible\' is the one judgement in a paragraph of facts. And my question is what you will do on the eighteenth of November, because the two weeks end then and the page does not say who adds the figures up or who they go to."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Read only the first sentences of heading 1 and count two things: how many have an _I_ in them, and how many have a time and a date. The ones with a time and a date and no _I_ are the reports a stranger will act on, and eleven first sentences in a row make the difference audible without any comment from you.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent it, with the copy to the head porter. The pathology office answered in two lines: the sign for the door has been ordered and the two-week count should come to them and not to the ward. Nothing about the sixteen months, which I had expected to be the thing anybody wrote back about. And the ward sister came down on Thursday to say that her house officer had been told in September that the laboratory loses afternoon samples and had repeated it in a handover, and that she would like a copy of the report to read out, which is the opposite of what I was afraid of for two weeks.']));

// ===================== 15.7 =====================
out.push(pb());
out.push(h2('15.7  Review & Mediate: What went wrong, and what I would do differently'));
out.push(S('Stage 1 · Unit 15 quiz – corrections'));
out.push(A('**1** I should **have** asked in April.   **2** If I **had** asked, I would have had them.   **3** I wish I **had** counted.   **4** If I had started then, I **would have** six years now.   **5** I should **have** read the page.   **6** I wish I **knew** who holds the file.'));
out.push(A('Items **2** and **4** are the two faults that survive into Unit 24 if they are not named here: ⚠ _if I would have_ for _if I had_, and ⚠ _would have had … now_ for a present result.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Two facts in six sentences**: the road was closed on 12 May, and four services were despatched. The sentence that made Tareq angry is sentence four — _staff are reminded of the importance of communication at all times_ — because it is the only sentence in the notice with a person in it, and the person is the staff.'));
out.push(A('The depot notice is the only text in this course written by somebody the class is invited to read against, and it is built out of six real moves: an adverb of regret, a passive with no agent, a wide conditional in the first half, a reminder aimed at the reader, a promise of measures, and thanks for patience. Ask the class to find all six and then ask the question Tareq took a month to answer: he was not angry about being blamed. He was angry because he had made the call and **nobody had asked him what time he made it**.'));
out.push(S('Language box – reading somebody else\'s account'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Five moves: **count the facts** · **count the passives and find the one sentence with a person in it** · **locate the wide conditional** and ask whether it is even true · **ask what nobody asked** · and **rewrite two sentences**, not six.'));
out.push(A('The fourth move is the one that transfers. The writer of a notice like this nearly always had one telephone call available that would have produced four facts, and the person they did not telephone is usually the person the notice is about — which is why Tareq\'s rewrite has eight facts in six lines.'));
out.push(S('Stage 3 · Practise (sample – Notice A, a laboratory circular)'));
out.push(SAMPLE([
  'Six sentences. **Facts: none.** Not one time, not one date, not one count, and not one number of samples. The word "delays" appears with no quantity attached to it anywhere.',
  'Passives: five of the six. Delays have occurred; it was not possible to process; had the samples been submitted; steps are being taken; the matter is being addressed. Nobody in any of them.',
  'And the one sentence with a person in it is the fourth: **staff are reminded of the importance of correct labelling** — so the only named actor in the whole circular is the person reading it, who is being told that the delays are about their labels.',
  'The wide conditional is sentence three: _had the samples been submitted correctly, the delays would not have arisen._ It arrives before any fact, it names nobody, and I do not believe it is true: our bench delays are a three o\'clock loading time and a corridor, and labelling has never been the cause of a day.',
  'What nobody asked: anybody on the bench. One conversation would have produced the loading time, the corridor, the eighteen hours and the two years.',
  'Under the four headings it would be: **1** the loading time, the corridor, the number of delayed requests with dates. **2** nobody checked the corridor for two years, including me. **3** four samples, eighteen hours, an unknown two-year figure. **4** the time on the bag from Monday, and the loading time on the door.',
  '**Our two decisions, in two minutes.** First: ask who wrote it, because it is unsigned and somebody has to be asked the question. Second: we disagreed. I would send the four-heading version to the pathology office; my partner says send it to the ward sisters first, because the office wrote the circular and will file a correction, and the wards are the people who believed it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Collect the questions. In almost every run one is **what time did it actually happen** and the other is **who wrote this** — and both are questions the page was written to prevent. That is the finding, and it is worth saying plainly: an unsigned notice in the passive with no times in it is not badly written by accident; it is written so that those two questions have no address to go to.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own notice or circular, explained without being shown. The three questions are the assessment: _how many facts?_, _who is in it?_, _what would you have told them if they had asked you?_ The third regularly produces four facts that are not on the page, which is the whole of 15.7 in one answer.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Tareq brought in a notice posted in the depot corridor on the third of June about the morning of the twelfth of May, unsigned, six sentences. He counted the facts: the road was closed on the twelfth of May, and four services were despatched. Two facts in six sentences — and he knows a third that is not on it, which is that the call was made at six minutes past six to an office with nobody in it. It is unsigned, which was the first thing he noticed and took him three weeks to understand, because every sentence is in the passive with nobody in it: a breakdown occurred, it was not possible to inform, procedures had not been followed, measures will be put in place. Four passives, no person — except sentence four, where the person is the staff, who are reminded of the importance of communication. That is the sentence that made him angry, and it took him a month to work out that he was not angry about being blamed: he was angry because he had made the call and nobody had asked him what time he made it. Sentence three is the wide conditional — if the correct procedures had been followed, this situation would not have arisen — in the first half of the page, naming nobody, and not true, because he followed the procedure exactly: it says telephone the depot, he telephoned the depot, and it says nothing about what to do when the telephone is answered by an empty room. So the conditional is doing the whole work of the notice. Ms Huda made him rewrite two sentences as headings one and two, and his version has eight facts in six lines — and the person who wrote the notice could have had every one of them by asking him one question. So I decided to ask the person who posted ours what time the thing happened, because there is no time on it anywhere.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 6'));
out.push(A('**1** by   **2** so   **3** followed   **4** and   **5** because   **6** at'));
out.push(A('_Accept:_ **5** _since_ or _as_. Nothing else for the other five. **1** is the passive agent; **2** is _so that_ split by the gap; **3** is _followed by_, which is the only word that fits a list in a row; **4** joins two things the conditional does; **6** is _at most_.'));
out.push(NOTE('Reading Part 6 is six single-word gaps and almost every answer is a **grammar word** — a preposition, a conjunction, an auxiliary, a relative, a quantifier — not a content word. Two habits worth ten minutes: read the whole sentence and decide what **kind** of word is missing before trying any word at all; and when a content word seems to fit, look again, because Part 6 is testing the joints of the sentence and not its vocabulary. The one exception in this set is **3**, and it is recognisable because the gap sits between two nouns.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The notice went up on the third of June and it is six sentences long.',
  '**The facts in it.** Two: the road was closed on the twelfth of May, and four services were despatched. The fact that is not in it is the time of the call — six minutes past six — and the second fact that is not in it is that the office is unstaffed before half past six.',
  '**The people in it.** Four passives with nobody in them — a breakdown occurred, it was not possible to inform, procedures had not been followed, measures will be put in place — and one sentence where a person appears, which is sentence four, and the person is us: staff are reminded of the importance of communication.',
  '**The conditional.** _If the correct procedures had been followed, this situation would not have arisen._ It is in sentence three, before any fact, it names nobody, and it is not true: the procedure is to telephone the depot and the call was made.',
  '**What nobody asked.** Me. The man who wrote it could have had the time of the call, the hours of the office, the four departure times and the fact that nobody has a number for the fourth driver, by asking me one question in the yard.',
  '**The two sentences I would write instead.** The Harasta road was closed at 06.00 on 12 May; a call was made to the depot at 06.06 and was not answered, the office being unstaffed before 06.30; four services were despatched between 06.40 and 07.15 and the first report reached the depot at 09.40. And: the procedure requires a telephone call and does not provide for the call being unanswered — I made the call and sent nothing in writing, and one line in writing would have been on the desk at half past six.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 162 words)'));
out.push(A('Out of 15, **140 words or more**. All four notes: the four headings in order, where the one _if_ sentence goes and why, what to do about a number he has not got, and one example of the writer\'s own with a date. The commonest loss is the third note, which candidates answer with "say approximately" instead of "say unknown".'));
out.push(SAMPLE([
  'Dear Sam,',
  'Four headings, in this order, and the order is the whole thing. **What happened** — facts, times, dates, counts, and if you can manage it no "I" at all. **What I got wrong** — your own decision, in two or three sentences. **What it cost** — counted, with no adjectives. **What changes** — from a date, and at least one thing you are doing yourself.',
  'Your four "if" sentences become one, and it goes in the second heading, because that is the paragraph about what you now know. In the first heading an "if" is an excuse, in the third it is a plea, and at the end it is nothing. One is the limit: two makes the paragraph a case.',
  'The number you have not got: write **unknown**, and say why it cannot be known. _The number of times this happened is unknown: no record was kept._ That sentence is stronger than any estimate, because an estimate can be argued with and an absence cannot.',
  'Mine: on the twenty-ninth of October I found four samples in a corridor. Heading 2 was one sentence — in September I listed three causes and left this one out, having seen it myself sixteen months before — and heading 4 was the time going on every bag from the fourth of November. The whole thing is one page and nobody has argued with any of it.',
  'Best wishes, Yara',
]));
out.push(S('Unit 15 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** b   **3** c   **4** a   **5** b   **6** c   **7** a   **8** b'));
out.push(A('_Notes:_ **3** a present result takes _would have_, not _would have had_. **5** _wish_ + past for now. **8** _and_ — the page being on his counter makes it worse; ⚠ _but_ would excuse it and _although_ would reverse the logic, which is the whole of 15.4 in one item.'));
out.push(S('Unit 15 check  ·  B  Listening (Part 3, note completion) – Track 15.15'));
out.push(A('**(1)** 29   **(2)** four   **(3)** eighteen   **(4)** three / 3 o\'clock   **(5)** two   **(6)** time'));
out.push(A('Gaps **(3)** and **(6)** are the two to replay. The recording gives _twenty-five to three_ and _twenty to ten_ before it says eighteen hours, and candidates who are doing arithmetic miss the number that is said. And gap 6 is one word — _time_ — in a sentence with four nouns in it.'));
out.push(NOTE('Listening Part 3 is **one speaker, six gaps, answers in order**, and this extract is deliberately full of numbers that are not answers. Three habits: read all six gaps in the pause and decide what kind of thing each one wants; write what you hear rather than what you work out; and do not leave a gap because you are still thinking about the previous one — the recording does not wait, and the second hearing is for filling, not for checking.'));
out.push(S('Unit 15 check  ·  C  Writing (sample, 166 words)'));
out.push(SAMPLE([
  '**THE FOUR UNTRACEABLE UNITS · REPORT** · M. Hariri, counter 2 · November · copy to the owner and to the Shaalan shop',
  '**1 · What happened.** Fifteen NX-220 handsets were repaired at this counter between 3 September last year and 2 April this year, all with the same separation at the lower left corner. On 26 September the Mezzeh shop produced delivery notes for eight of them; the Shaalan shop produced none. The owner of the Shaalan shop states that he keeps only the notes that arrive with invoices and throws the rest away when the stock is sold. Four of the fifteen were bought from that shop. Of the eleven that can be traced, nine are from one batch and two from the batch before it.',
  '**2 · What I got wrong.** In April I wrote twice to the supplier asking for a name and did not go to either shop. I knew both shops kept notes, because I have watched them written. If I had asked in April, the notes for the March units would still have been in the Shaalan box — they were there until August.',
  '**3 · What it cost.** Four units untraceable for ever, and with them the only evidence that would have made the batch claim complete. Five months of letters about a name, which produced nothing until the question changed. What the four notes would have shown is **unknown and cannot be reconstructed**.',
  '**4 · What changes.** From this month, when any unit comes back a second time I ask the shop for the delivery note that week, and I photograph it. The Shaalan drawer holds two years of Turkish supplier notes that nobody has ever asked for; I am photographing all of them before the end of November. And a copy of this goes to the Shaalan shop, because the owner offered me the drawer himself and nobody has ever asked him for a note in eleven years.',
]));
out.push(S('I can… (Unit 15)'));
out.push(A('Self-assessment; no answers. The three that matter are the second, the fourth and the sixth: making a third conditional you can defend and stopping where you cannot, apologising by naming the thing and counting the cost, and writing the four headings in the right order. A class that ticks the forms and not those three has learnt three tenses and none of the unit.'));
out.push(box('Looking ahead to Unit 16', [
  'Unit 15 was one past event. **Unit 16** puts two things side by side: _not as … as · far more · slightly less · one of the best · by far the · the more … the more · in terms of · as far as … is concerned_ — and **16.6** writes a comparison that reaches a verdict, which is what a recommendation is.',
  '**16.7 takes apart a comparison table** and asks the question nobody asks of one: what is **not** in the columns? The exam practice is Reading Part 3 and Listening Part 4.',
  '**The Unit 15 NEXT box asks for two things:** a comparison somebody else has made on paper — two quotations, two suppliers, two schools, two machines, two routes, two candidates — and one comparison of the student\'s own that they have never written down. 16.1 opens on the first and 16.6 on the second.',
  '**And one thread to watch.** Mazen now has two years of one supplier\'s delivery notes that nobody has ever asked for, and in 16.1 he compares what two shops keep. It is the first time in the course that a student has more data than they know what to do with, which is its own problem and is the one 16.5 is about.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 15 · Answer Key');
