// Proactive English B1 · Syria Edition · Book 2 · Unit 13 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 13  Plans, Intentions and Arrangements — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key — and how Book 2 differs', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Four things step up in Book 2 and they step up here, in Unit 13.** Guided writing is **60 words or more**; free writing is **140–180**; the models run half as long again; and the main dialogues are sixteen to eighteen turns. Do not shorten them: a sixteen-turn dialogue is the first text in the course long enough for a student to lose the thread and find it again, which is what Preliminary Listening Part 4 asks for.',
  '**The peer review changes, and the change is the plan\'s, not an invention.** Units 13–18 take the slip with **no stems**: three sentences of the student\'s own, in English. From Unit 19 the reviewer also names the criterion they are marking against. Hold the line on it — a class given stems in Unit 13 will still want them in Unit 24.',
  '**What you need in the room for 13.1 and 13.4.** The four envelope pages from 12.6, each student\'s balanced page, and the list of 😐 lines from the twelve **I can…** boxes. 13.1 Stage 4 and 24.4 both run on that list. If a student has lost it, they rebuild it from the boxes in ten minutes.',
  '**The organising idea:** English has four futures and most students have one. The unit does not teach the forms — they are easy — it teaches **choosing**, and 13.4 is the cycle the rest of the book leans on.',
  '**The cast in September.** Eleven of the twelve are back. **Nour Sabbagh** arrives, a year late, as promised in A2 Unit 24: she is a junior technician at TechCare and has been one for a year, and she brings the one thing nobody else in the room has, which is a year inside a company doing the thing she trained for. **Lina Haddad** has gone to Homs with Medica\'s accounts function and her letter is read in 13.1 Stage 5. She is not written out of the book — she is written to, once a month, by one student at a time, and she answers.',
], C.lblue, C.navy));

// ===================== 13.1 =====================
out.push(pb());
out.push(h2('13.1  It is arranged'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Count the answers that have a date in them and write the number on the board; it is the baseline for the unit. In a first run three or four of eleven have dates, and the other seven are intentions and hopes — which is the normal distribution and not a failing.'));
out.push(A('**b** **1** arranged   **2** intended   **3** arranged   **4** intended'));
out.push(A('Item 3 is the one to argue about: _she is coming back in September — she said so in June_ was an arrangement in June and Nour did not come for a year. Use it to make the point that an arrangement is a claim about **now**, and that a year-old arrangement with nothing in writing behind it is a hope wearing an arrangement\'s clothes.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – eleven of the twelve, and one new student.'));
out.push(A('**b** **1** He has arranged two training days a month — the third Tuesday and the Wednesday after it, in writing, until next August — and he had to move them off the Mondays, which were the dates first offered.   **2** One is teaching an extra class on Thursdays and told her in August; the other has said yes four times and has not enrolled. She says the second one intends to come and that there is nothing arranged — and that it is what she herself was from January to April.'));
out.push(NOTE('Umm Kinan reporting her own June announcement as a mistake is the opening move of Book 2 and it is deliberate: the first thing that happens in the second year is a student correcting something she told the room in the first. Let it stand without praise. The point for the class is in Jad\'s line — _one of them had an arrangement and one of them had an intention_ — and in hers: she reported both as the same thing.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am seeing my manager at nine on Tuesday — she has put it in her book._',
  '**2** _We are looking at the yard with the caretaker at eight on Thursday, before he goes._',
  '**3** _I am meeting two of the committee on the eleventh, before the September meeting._',
  '**4** _Hani is training the new man on Sunday and Monday mornings for three weeks, starting this Sunday._',
  '**5** _I am going to the ministry at half past eight on Wednesday with the file and the two dates._',
]));
out.push(A('Every answer has a **day**, a **time** and a **person who knows**. Insist on all three in the first cycle of the book and 13.4 becomes easy; let them go and the class will write _I am seeing him soon_ for the next eleven units, which is an intention with a continuous verb in it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I want to talk to my manager about the record.',
  '**B:** I am talking to her at nine on Tuesday, in her office, with the book in my hand.',
  '**A:** Does she know?',
  '**B:** She put it in her own book on Monday and she knows which record it is about.',
  '**A:** What would stop it being an arrangement?',
  '**B:** If she moved it without giving me another day. Then it goes back to being an intention and I would have to ask again.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight will be intentions in an arrangement\'s clothes — a day with nobody at the other end of it. The question that exposes them is the one on the card: **does the other person know?** Ask it every time and the class starts asking it of itself, which is the habit the cycle is for.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My 😐 line was 9.5, deduction and doubt. The arrangement: I am reading one page of the handover book out loud to myself at the end of every night shift from Sunday, and I am telling Sister Nasr on Sunday that I am doing it, so that somebody knows._',
  '**b** _My partner has two sentences. The arrangement is that he is meeting the night supervisor at seven on Tuesday. The intention is that he is going to ask for the second sheet. I would put money on the first and not on the second, because the first has another man\'s diary in it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda opened the second year by asking what is arranged — not what anybody hopes, but what has a day against it. Nour Sabbagh introduced herself: she finished at TechCare a year ago and has been a junior technician there since, she said in June of last year that she was coming in September and then did not come for a year, and the arrangement she has made this time is that her shift finishes at four on Mondays and Thursdays, in writing, with her supervisor — which she says is the difference between this September and the last one. Omar said he has had "ask about B1" written next to her number since the end of A2, and she said he had asked her four times. Fares said his is arranged and it is the thing he was waiting for in June: the two days a month start this month, he is training representatives on the third Tuesday and the Wednesday after it until next August, in writing, and the first dates they offered him were Mondays and he said no — which took four seconds and nine months. He told them: I am in a class on Mondays and Thursdays until June, and gave them the two days and the month it ends. Then Umm Kinan reported on something she had announced in June: she had asked two colleagues to come with her and neither is here. One is teaching an extra class on Thursdays and told her in August; the other has said yes four times and has not enrolled, and she says she knows exactly what that is because it was her from January to April. That one intends to come; there is nothing arranged. Jad said so one of them had an arrangement and one had an intention, and Umm Kinan said that in June she reported both as though they were the same thing, which is the mistake — and that she is going to ask once more, in writing, with the two days and the time on it, and then stop asking. And Lina is not here: her company moved her to Homs in July, and her letter is on the wall where the "who we are" pages were.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will see the supplier on the fourteenth. → ✓ I am seeing.   ✗ I have an appointment the Tuesday. → ✓ **on** Tuesday.   ✗ I am seeing him in next week. → ✓ _next week_ takes no preposition.   ✗ I am going to meet them at four on Thursday _(already fixed)_ → ✓ use the stronger claim.   ✗ an arrangement with no time in it → ✓ a time, or it reads as the present.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Arranged: the move to Homs on 1 July, Sunday to Thursday in Homs and weekends in Damascus, and an English class in Homs on Tuesday the ninth, paid for ten weeks ahead. Not arranged: coming back to Room 14 in June — no ticket, nobody in Homs told, and the audit may fall that week. She says so in the heading.'));
out.push(A('**2** The four seconds she needs before she speaks. What changed is that she has stopped treating them as a fault: in July she said out loud, in a meeting, _give me a moment, I am choosing between two ways of putting this_ — and the room waited and nothing happened to her.'));
out.push(A('**3** One letter a month from one of them, with one thing that happened in Room 14, and she will answer every one by return — and she marks it: _that is an arrangement and not an intention_.'));
out.push(NOTE('Lina\'s letter does two jobs and the second one is the important one. It shows a departure handled without pretence — the chair held and not kept — and it hands the room the sentence that makes the whole A2-to-B1 arc worth something: _eleven people watched me take four seconds in front of them once a week for nine months and nobody ever once filled them in for me._ If your class has a student who needs those four seconds, this is the page to read aloud, and the thing not to say afterwards is anything at all.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE THURSDAY SHIFT, FROM THE DAY ROTA** · R. Barakat · 4 September',
  'I am moving to days for ten weeks from the first of October and I would rather tell you why in a page.',
  '**What is arranged.** The committee agreed it on the fifteenth and it is on the rota in the office: days from the first of October to the twelfth of December, and then nights again. I am keeping the night book in that time and Sister Nasr is keeping it on the nights I am not there, which she offered and I did not ask for.',
  '**What is not arranged, and I am not pretending otherwise.** I am going to ask for three-night blocks for everybody when I come back in December. Nothing has been agreed, nobody has promised me anything, and the report that would support it does not exist yet.',
  '**What I am taking with me.** The ten weeks of days are so that I can see the round from the other end, because for nine months I have had figures about nights and no idea whether the day round is late too.',
  '**And what I am leaving here.** The book, the sheet, and a sentence: the trolley is half of it. Anybody who tells you in November that it was all the rota is quoting me from April.',
  '**What I would ask of you.** One of you writes the time the round finished, every night, including the nights it finished on time. That is all, and it is an arrangement and not an intention, because I am asking Sister Nasr to collect it on Fridays.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**TO ROOM 14, FROM HOMS** · L. Haddad · 2 September',
  'I am not coming back and I would rather tell you why in a page than be the empty chair.',
  '**What is arranged.** Medica moved the accounts function to Homs on the first of July and I went with it, because the alternative they offered me was the same salary and no accounts. I am in Homs from Sunday to Thursday and in Damascus at the weekends. I am starting an English class here on Tuesday the ninth, at a place I have not seen, with a teacher I have not met, and I have paid for ten weeks so that I cannot quietly stop going.',
  '**What is not arranged.** I am going to come to Room 14 in June for the last lesson. I have not bought a ticket, nobody in Homs knows I intend to, and if the audit falls in that week I will not be there. Hold the chair and do not keep it.',
  '**What I am taking with me.** Four seconds. I have needed four seconds before I speak since I was nineteen and for all of that time I thought it was a fault. Umm Kinan asked me in February what I do in them, and I had never been asked, and the answer is that I decide which of two sentences to say. In July I said that out loud to a man from the Homs office in the middle of a meeting, and he waited, and the room waited, and nothing happened to me at all.',
  '**And what I am leaving here.** My half of the Unit 10 minutes, and a sentence for whoever is new: the thing in that room that changed what I do is not a tense.',
  '**What I would ask of you.** One of you, once a month, with one thing that happened in Room 14. I will answer every one by return, and that is an arrangement and not an intention.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems, Book 2)'));
out.push(A('_Three sentences, in English, the student\'s own:_ **"The strongest thing on your page is that you paid for ten weeks so that you could not quietly stop going — I have never once put money behind an intention and I am going to. I would change the paragraph about the audit: you say you might not come in June, and you do not say what you want us to do with the chair, which is the only thing we can act on. And my question is whether you have told anybody in Homs that you are coming in June, because if nobody there knows, it is not an intention yet, it is a wish."**'));
out.push(A('That is the Book 2 slip: three sentences, no stems, and the third one is a real question rather than a prompt filled in. Read two aloud in the first unit and then stop reading them aloud, so that the class writes them for the partner and not for you.'));
out.push(S('Stage 7R · Share'));
out.push(A('Write both numbers up. Arrangements with a cost attached — money paid, a ticket bought, a date given to somebody senior — are usually two or three in a class of eleven. Intentions that have been announced to another person are five or six. And the finding worth saying out loud: of the intentions that die by November, almost all are the ones that were never said to anybody.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I wrote to the man at the directorate who sends out the schemes of work. Not about chapter seven — about the date. "The programme of 12 September says a meeting will be arranged to review the third-year scheme. I am asking for the date. If the date has not been set, I am bringing the 2026 mark analysis to the department meeting on the fourth of November and will table it under any item you prefer." He answered in two days with a date: the twenty-seventh of October, at four. Nine months of asking for a review, and eleven weeks of being told it was intended, and what produced a date was a letter asking for one.']));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  What I intend to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask the second question of everybody without exception — _what is the first thing you have to do, and when?_ — and do not help. The silences are the lesson: a student who cannot name a first step has a wish, and hearing themselves not answer is worth more than any correction.'));
out.push(A('**b** **1** intention   **2** prediction   **3** prediction   **4** intention   **5** prediction'));
out.push(A('Items 2, 3 and 5 are all predictions **from evidence** — the sky, what the committee has done before, what he always does — which is why English uses the same form for both jobs. Say that once and do not labour it; students who are told _going to_ has two uses stop worrying about which one they are in.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – he is going to write to the supplier again, and this time to a technical department rather than to a company, asking for a specification instead of a name.'));
out.push(A('**b** **1** That the thing you want is never the first thing you ask for: a name costs the reader a decision about a colleague, and a part number or a specification costs them nothing, so it gets answered — and the answer comes with a name at the bottom.   **2** _Going to_ is for what you have already decided; _will_ is for what you decide while you are speaking — and Mazen\'s April sentence was "I will write again", and he did not.'));
out.push(A('Nour\'s first real contribution is a piece of professional knowledge nobody else in the room has, and that is why she is in the book. A class of adults contains this kind of expertise and almost never uses it, because nobody asks. The teaching point for you is structural: when a student says something that is true of their trade and not of yours, stop the lesson and make them give the class the rule. Ms Huda does exactly that four times in Book 2.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am going to read one page out loud on Sunday evenings, starting this Sunday; I am going to do it for a month; and if I have missed two Sundays by the end of October I am going to ask somebody to read with me._',
  '**2** _I am going to ask on Thursday to see the agenda of that meeting — not to attend it, just the agenda — and if I am not sent it, I am going to ask the person who takes the minutes for a copy afterwards._',
  '**3** _I am going to write one line on Sunday asking the equipment office for the date the trolley went in, and if nothing comes back by the thirtieth I am going to ask the ward manager to ask._',
  '**4** _I am going to ask the depot office on Tuesday for the file reference, not for the name of who welded it, and if the file does not exist I am going to write down that it does not and date it._',
  '**5** _I am going to name one of the three men in writing this week to authorise work when I am not there, and if he refuses I am going to ask the second one and tell the first that I have._',
]));
out.push(A('Every answer has the four parts — first step, date, deadline, fallback — and in four of the five the **first step is deliberately smaller than the thing wanted**. That is Nour\'s rule working, and it is the most transferable thing in Unit 13.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I want the second trolley back.',
  '**B:** I am going to write on Sunday to the equipment office asking for the date it went in, and I am going to give them to the end of the month. If nothing comes back I am going to ask the ward manager to ask for me.',
  '**A:** What does the first step cost them?',
  '**B:** Looking up one date in a book they have in the room.',
  '**A:** Make it smaller.',
  '**B:** It is already small — but I could tell them the date I think it is, from my own book, and ask them to confirm it. Then it costs them a yes.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark each first step _costs them nothing_ or _costs them something_. The ones that cost something are nearly always requests for a **person** — a name, a decision, an admission, an apology — and the ones that cost nothing are requests for a **fact**. That is the whole of it: ask for the fact, and the person arrives attached to the answer.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _In 12.6 I wrote that I was going to tell my mother what the course is for. I have not. Re-stated: I am going to tell her on Friday, at my sister\'s, where there are other people in the room, and I am going to say one sentence — that I answer about nine hundred questions a year in English and that three people this year have written back to say it was the clearest answer they had had. If I do not say it on Friday I am going to write it instead, which is cowardly and is better than nine more months._',
  '**b** _My partner is going to drop the plan to ask for a different route. He has not said so and he has mentioned it twice with no date in it, and when I asked what the first step was he said "I would have to see how it goes", which is the answer of somebody who has decided not to._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Mazen what he is going to do, since in June he had asked the supplier for a name twice and had not been given one. He said he is going to write once more and write to a person this time and not a company — and then said that is the problem and was the problem in April, because he has no name and the name is the thing he is asking for. Nour said that at TechCare, which is her actual job, the thing you want is never the first thing you ask for: if you ask for a name you get nothing, because the person reading has to decide to give you a colleague, but if you ask for a part number somebody answers, because answering costs them nothing — and the answer comes with a name at the bottom of it. So Mazen is going to ask for the adhesive specification for that model in the batch sold between January and March, with the fifteen dates attached, because it is a question with one answer and no blame in it. He is going to write on Sunday, give them until the end of the month, and if nothing comes back send the same letter to the manufacturer in Türkiye, which he has never done and has been afraid of since April — because the shop buys from that supplier and he mends telephones at a counter in it, and the owner has not asked him to do any of it. Omar asked whether the owner knows, and Mazen said he asked him for a copy of the book in April, so he knows exactly what he is doing and has never once said the word "supplier" to him, which Mazen thinks is on purpose. And Ms Huda said to notice what makes that an intention and not a wish: a day, a first step that costs nothing, a deadline, and a second move if the first fails — four things, and none of them is the outcome.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will write again. _(decided last week)_ → ✓ I am going to write.   ✗ I am going to can ask. → ✓ _going to_ + infinitive.   ✗ I am going to asking. → ✓ to ask.   ✗ I am going to improve my English. → ✓ name the first step and the day.   ✗ _gonna_ in writing → ✓ never.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The specification of the adhesive on that model in the January-to-March units — a product code and a temperature range. It is easier to answer because it has one answer, no blame in it, and nobody has to decide to give him a colleague.'));
out.push(A('**2** A bad batch of adhesive, and heat: both shops store stock in a room with a window, and heat does to glue what a bad batch does to glue. He says he cannot tell those two apart from a counter, and the specification would let somebody who can.'));
out.push(A('**3** He is going to send the same letter, unchanged, to the manufacturer after the thirtieth of September — and he would rather have the answer from them because they are nine streets away and the manufacturer is in another country, and because if the fault is real they will want to know before the manufacturer tells them.'));
out.push(A('The last paragraph of the letter is the one to teach: _if the fault is real you will want to know before they tell you._ It is the other side\'s own interest, put in one sentence, and it is why this letter gets answered where April\'s did not. Students write deadlines as threats; a deadline with a reason to prefer answering you is a different document, and the difference is 12.2 — their case, properly put.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO:** the appointments desk, TechCare · 10 September',
  '**Subject:** The duration figures on the installation schedule',
  'I am a junior technician and I have done forty-one installation visits since March. This asks for one thing.',
  '**What I am asking for.** The date the current duration figures were set, and by whom. A month and a department would be enough.',
  '**Why I am asking.** I have timed forty-one visits from the doorbell to the signature. The mean is 110 minutes against the 90 on the schedule, and a replacement is 55 against 90. Before I bring anybody my figures I would like to know what the 90 was measured on, because it may have been right for the equipment we installed in 2022.',
  '**What I am not claiming.** I am not claiming the schedule was wrong when it was written, and I have not asked anybody else to check my forty-one.',
  '**What I am not asking for.** I am not asking for fewer visits, more time between them, or any change this month.',
  '**What I am going to do next.** If I have the date by the end of September I am going to put my figures next to it on one sheet and give it to you. If I do not, I am going to give you the sheet anyway, with the 2022 figure unexplained, which is worse for both of us.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**TO: the technical department · Al-Nahla Trading, Damascus · 7 September**',
  '**Subject:** Adhesive specification, model NX-220, units sold January–March',
  'Dear Sir or Madam,',
  'I repair telephones at a counter in Shaalan and I buy through your Damascus office. This letter asks for one piece of technical information and nothing else.',
  '**What I am asking for.** The specification of the adhesive used to bond the screen assembly on the NX-220 in the units distributed between January and March of this year. A product code and a temperature range would be enough.',
  '**Why I am asking.** Between 3 September last year and 2 April this year I repaired fifteen NX-220 handsets at this counter with the same fault: the screen assembly separating at the lower left corner. In all fifteen the adhesive line is uneven and visible under a lamp. The fifteen purchase dates are attached, with the two shops they were bought from.',
  '**What I am not claiming.** I am not claiming that the adhesive is at fault. Both shops store stock in a room with a window, and heat does to glue what a bad batch does to glue, and I have not measured anything.',
  '**What I am not asking for.** I am not asking for compensation, I am not asking for any unit to be replaced, and I am not making a complaint.',
  '**What I am going to do next.** If I have not had a reply by the thirtieth of September I am going to send this letter, unchanged, to the manufacturer. I would rather have the answer from you, because you are nine streets away and they are in another country, and because if the fault is real you will want to know before they tell you.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences, the student\'s own:_ **"The sentence that would make me answer this letter is the last one — if the fault is real you will want to know before they tell you — and I would put it higher up, because a man with forty letters may not reach the bottom of yours. I would cut \'I am not making a complaint\', because you have already said three things you are not asking for and the fourth one starts to sound as though you are. And my question is what you are going to do on the first of October if they answer with a product code and nothing else: is the code what you want, or is it the name?"**'));
out.push(S('Stage 7R · Share'));
out.push(A('Read three opening asks aloud and let the room judge. The difference between a letter that will be answered and a letter that is about being right is audible in one sentence, and most adults have spent years writing the second kind — not out of vanity, but because the thing they want is the thing they ask for.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent it on Sunday the seventh. On the eleventh a man called Issam Haddad in the technical department answered with the product code, the temperature range — minus ten to fifty-five — and one sentence I did not expect: "which batch were your fifteen from?" So he has the batch numbers and I do not, and the fifteen dates I attached are the only way to work out which batch they are. I am going to answer tomorrow with the dates again and the two shops. Four months of asking for a name, and I have a name and a question back, and the question is the more useful of the two.']));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  At ten o\'clock I will be sitting in front of them'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second question — _and what will you have in your hand?_ — is what turns the exercise from a grammar drill into a rehearsal. Students who can say what will be in their hand at half past eight on Monday are imagining the moment; students who cannot are reciting a form.'));
out.push(A('**b** **1** _I will be driving_ — a moment inside.   **2** _I will send it tomorrow_ — a single act; the continuous would only be right as a soft arrangement (_I will be sending it tomorrow in any case_).   **3** _I will be finishing_ — a point inside a long process.   **4** _I will be reading the round_ — and it is the reason not to telephone.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the September rota meeting, and the second trolley.'));
out.push(A('**b** **1** She will be sitting in front of four people reading a report she wrote about herself, and at five past she will be reading the trolley paragraph aloud. She will **not** be arguing — three months ago she would have been arguing, and she would have been right, and it would have cost her the trial.   **2** That she said _I will be sitting_ and not _I will sit_, because she will be in the middle of it: at ten she is not starting and not finishing.'));
out.push(NOTE('**The trolley result is the payoff of 7.6, 12.3 and 12.7 and it has to be read carefully.** Four weeks with a second trolley in August: the round was late eleven times instead of twenty-six, and there were no errors. So the trolley is half of it and the blocks are half of it, and neither of Rasha\'s April sentences is true alone. Her line — _I was half wrong, which is a result and not a defeat_ — is the sentence Book 2 is built on, and the clause after it matters more: _if I had never written the limits page nobody would have asked for the trolley._ The concession produced the experiment. Say that out loud; it is the strongest argument for 12.3 that the course will ever offer.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _At eight tomorrow I will be driving the early shift. I will not be answering the telephone, and I never have been able to, and people ring me at eight every day._',
  '**2** _At six I will be reading the round. I will not be writing the times from memory this time; the sheet will be on the trolley._',
  '**3** _At this time next Thursday I will be sitting in the department meeting. I will not be raising chapter seven — it is on the agenda for the twenty-seventh and I am not asking twice._',
  '**4** _At ten on the first Monday I will be standing at the counter with the batch numbers. I will not be telephoning Issam Haddad; I am going to write, because I want the answer on paper._',
  '**5** _At this time next year I will be finishing Book 2. I will not be sitting in the same chair; I have decided to sit on the other side of the room, which sounds like nothing and is not nothing._',
]));
out.push(A('The **negatives** are where the thinking is, and they are usually decisions the student has made and not announced. Collect them and keep them; four of them come back in 24.4 when the class writes its honest self-assessment.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** At half past five tomorrow morning?',
  '**B:** I will be checking the bus, with the check sheet in my hand and a torch, because the lights in that corner of the yard have never worked.',
  '**A:** And what will you not be doing?',
  '**B:** I will not be filling the sheet in at the office window at the end of the day, which is what I have done for eleven years. From Monday it is collected from the bus.',
  '**A:** Who else will be there?',
  '**B:** Two other drivers and the man who opens the gate, and none of them has read the notice.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Write the eight _I will not be_ sentences. About half of them are things the speaker has decided and has not told the person who needs to know, and that is the question to end the stage on: **who would need to hear that, and when are you going to tell them?** It takes ninety seconds and it is the most useful thing in the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _At ten on the twenty-seventh of October I will be sitting in the department meeting with four June papers and a mark analysis in a folder, and the folder will be closed, because I am not opening it until somebody asks. And I will not be speaking first. I have spoken first at nine of the eleven meetings this year._',
  '**b** _My partner\'s three sentences: two are decisions and one is a hope. The hope is "I will be working in the laboratory on my own by then", because nobody has told her that and she has not asked._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha\'s September meeting is on the fifteenth at ten, and she said that at ten o\'clock she will be sitting in front of four people reading a report she wrote about herself. Lubna asked what she will be doing at five past, and she said reading the second paragraph out loud — the one about the trolley, which she has decided goes first. Omar noticed she said "I will be sitting" and not "I will sit", and she said it is because she will be in the middle of it: at ten she is not starting and not finishing, and "I will sit in front of them" sounds like something done once, like signing a form, whereas "I will be sitting" is a room she is inside, at a time you could telephone her in. Ms Huda asked for the other half — the thing she will not be doing — and Rasha said she will not be arguing: three months ago she would have been arguing, she would have been right, and it would have cost her the trial. Then Nour asked about the trolley month: the ward had a second trolley for four weeks in August, which the manager asked for in June after reading the limits page that goes in front of the figures. The round was late eleven times in those four weeks instead of twenty-six, and there were no errors — so the trolley is half of it and the blocks are half of it, and neither of Rasha\'s two April sentences is true on its own. Jad said so she was wrong, and she said she was half wrong, which is a result and not a defeat, and better than being right, because there are now two things to fix and one of them costs a trolley. And if she had never written the limits page, nobody would have asked for the trolley, and she would be sitting there with one explanation and a committee looking for the other one. Then she said the three futures in a row: I am seeing them at ten on the fifteenth, I am going to lead on the trolley, and at five past ten I will be reading out the paragraph that says I was half wrong.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ At ten I will sitting. → ✓ will **be** sitting.   ✗ I will be sit. → ✓ sitting.   ✗ I will be knowing by Friday. → ✓ I will know.   ✗ At six I will be drive. → ✓ driving.   ✗ a future continuous with no time in it → ✓ give the moment, or use a different future.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The trolley paragraph goes first. While she is reading it, somebody on the committee will be deciding that the whole thing was a trolley — and she is going to let them, because it is half true and the other half is in the pages after it.'));
out.push(A('**2** That Sister Nasr joined on 8 June at her own request; that her entries are on a separate sheet because she asked; that in the fourteen weeks since there has been nothing on a fourth or fifth night on her sheet either; and that she has twice asked for her fourteen years to be left out. They are left out: the report says "a second nurse" and her name appears only on her own sheet.'));
out.push(A('**3** She is going to say that nobody counted, and that a thing nobody counted is not a thing anybody got wrong.'));
out.push(NOTE('_A thing nobody counted is not a thing anybody got wrong._ That sentence is the ethical centre of the whole Rasha thread and it is worth putting on the board for the rest of the book. It also answers, in nine words, the fear that stops most people keeping any record at all: that a record is a way of finding somebody to blame. Ask the class what the sentence protects Sister Nasr from, and then ask who would protect them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO ABU SAMIR · the night before · 21 September**',
  'Tomorrow at nine I will be standing at the counter with the man from Al-Nahla, and you will be on the Mezzeh run, which is why I am writing this down.',
  '**What I will be reading out, in order.** The fifteen dates first, then the two shops, then the lamp. While I am reading the dates somebody will be working out that they are all from one batch, and I am going to let him do that himself rather than saying it.',
  '**What I will be saying about you, and it is two lines.** That you can tell which shop a unit came from by the bag it is in, and that you have never once been asked. That is yours and it is the only part of this that nobody else in Damascus can do, and if he asks me how I know which shop, I am going to say your name.',
  '**What I will not be doing.** I will not be saying that the glue is at fault, because I have not measured it. And I will not be mentioning the two units you brought back in March, because you brought them in your own time and they are not in the book.',
  '**And what I am asking you for.** Nothing. If he asks to meet you I will tell him to ask you himself, and you can say no.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**TO SISTER NASR · the night before · 14 September**',
  'Tomorrow at ten I will be sitting in front of the rota committee with the report in front of me, and you will be asleep, which is the right way round for once. I am writing so that you know what I am going to say about you before I say it.',
  '**What I will be reading out, in order.** The trolley first. The ward had one trolley from the second of February to the end of July and a second one for four weeks in August, and in those four weeks the round was late eleven times instead of twenty-six and there were no errors in it. That paragraph goes before mine, and while I am reading it somebody will be deciding that the whole thing was a trolley, and I am going to let them, because it is half true and the other half is in the pages after it.',
  '**What I will be saying about you, and it is four lines.** That you joined the trial on the eighth of June at your own request; that your entries are on a separate sheet because you asked for that; that in the fourteen weeks since there has been nothing on a fourth or fifth night on your sheet either; and that you have told me twice that you want your fourteen years left out. They are left out.',
  '**What I will not be doing.** I will not be saying that the blocks are the cause, and if somebody says that anybody was at fault in the fourteen years before this one, I am going to say that nobody counted and that a thing nobody counted is not a thing anybody got wrong.',
  '**And what I am asking you for, which is nothing.** You do not have to be there and you do not have to sign anything. Telephone me tonight if any line of this is not true; I will be awake until one.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The best line is \'they are left out\' — three words, after four lines of what you will say about her, and it is the only sentence in the page she will read twice. I would change the opening: \'you will be asleep, which is the right way round for once\' is a joke in a message that is otherwise exact, and she is reading it at eleven at night before a shift. And my question is what you will do if she telephones at one and says the fourteen weeks are wrong by a night, because you have written \'nothing on a fourth or fifth night\' and you are holding her sheet."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Read only the _I will not be_ lines, then put the question: who has ever told the other person in advance what they were **not** going to say about them? In two years of running this cycle the answer is one or two hands, and it is four lines of writing that changes what the other person does the next morning.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['She telephoned at twenty to one. One correction: she joined on the ninth and not the eighth, because the eighth was the night she said she would and the ninth was the first night she wrote anything, and she said if it is going in a report it should be the night with writing on it. Then she asked what I would be doing at eleven, after the meeting, and I said going home, and she said she would be awake, and that she would like to know before she slept. I had not thought of that at all: she is not in the room and the whole thing is about her.']));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  Three futures, side by side'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Write the twelve sentences on the board in three columns as the class sorts them, and then make them do the second half — what each one tells a listener that the other two do not. The sorting takes four minutes and the second half takes two, and the second half is the cycle.'));
out.push(A('**b** **1** _am seeing_ — arranged, in their book.   **2** _am going to_ — decided before now.   **3** _will be reading_ — the middle of it.   **4** _leaves_ — a timetable (13.5).   **5** _will_ — decided while speaking; the _all right_ in front of it is the giveaway.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – that three of his four sentences are in the wrong future.'));
out.push(A('**b** **1** _Will_ for what you are deciding now · _going to_ for what you decided before · _am -ing_ for what somebody else has agreed to · _will be -ing_ for the middle of it.   **2** That students use _will_ for everything because it was taught first and because it commits them to nothing: _I will write to them_ can be said in September and still be true in March, and _I am writing to them on Sunday_ cannot.'));
out.push(NOTE('Jad\'s four-line rule is the single most useful thing in Unit 13 and it comes out of a student\'s mouth, from his own reading of somebody else\'s four sentences. Write it on the board exactly as he says it and leave it there for the rest of the book. Ms Huda\'s addition is the part that makes it stick: **_will_ is the future of good intentions** — correct, useful for on-the-spot decisions, and the only one of the four that cannot be missed, because it has no date in it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am seeing the dentist at four on Thursday_ — arranged; the surgery has the appointment.',
  '**2** _I am going to ask for the dates_ — decided last night, so not _will_.',
  '**3** _I will be reading the round_ — the middle of it, which is why it is a reason not to telephone.',
  '**4** _I\'ll carry it for you_ — decided as I speak; the only one of the six that is a real _will_.',
  '**5** _The shop closes at eight on Fridays_ — a timetable, not mine (13.5).',
  '**6** _By the time you telephone, I will be sitting in the meeting_ — a moment inside, after _by the time_ + present.',
]));
out.push(A('Item 6 carries a second point worth marking: **no future after _by the time_, _when_, _as soon as_, _before_ or _until_.** _By the time you telephone_ — present, then the future in the main clause. It is the commonest grammar slip of the unit and it survives into Unit 24 unless it is named here.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I will see the manager on Tuesday.',
  '**B:** Better: I am seeing the manager at eleven on Tuesday — because he put it in his book on Monday, and the form says so.',
  '**A:** What does that tell the person reading it?',
  '**B:** That it is settled, that there is an hour, and that if I do not go somebody will notice.',
  '**A:** Would you put it in a message at work?',
  '**B:** I would now. A year ago I would have written the first one, and the first one is the sentence you write when you are not sure you are going to do it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Six of the eight corrections **add information** — an hour, an agreement, a reason, a limit. That is the argument for the cycle and it is worth stating in one line: this is not tidying, it is telling somebody something they need. The two that do not add anything are the two that were right in _will_ to begin with.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I am collecting the keys from Abu Rafiq at eight on Tuesday. I am going to ask him about the second downpipe while I have him. At ten I will be on the roof, so if the tutor telephones I will not answer. And I will write down whatever he says about the 1974 file, because last year I remembered it as "there is no file" and what he said was "there is no file here"._',
  '**b** _My partner\'s "I will speak to my supervisor" has been in _will_ since September and he has said it three times in this room. There is no day in it and there never has been._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq read four sentences about the same week, all with "will" in: I will see the depot manager on Tuesday, I will ask him about the second sheet, I will be driving at six so I will not be able to go in the morning, I will write it down this time. Jad said three of them are the wrong future and one is right — the first is arranged, because the manager has put him in his book, so it is "I am seeing him on Tuesday"; the second he decided last week, so it is "I am going to ask him"; the third is right, because he will be in the middle of driving; and the fourth is the only real "will", because he is deciding it as he says it. Tareq asked what difference it makes, since the manager will understand all four, and Jad said he will understand all four and will not know which of them are settled — and if you write "I will see the manager on Tuesday" to a depot, the man reading it cannot tell whether you have an appointment or a hope, which is the only thing he needs. Ms Huda asked for the rule in one line: will for what you are deciding now, going to for what you decided before, am -ing for what somebody else has agreed to, will be -ing for the middle of it. Nour said it was the clearest thing anybody had said about English in that room. Ms Huda added the reason behind it: students use will for everything because it was taught first and because it commits them to nothing. Mazen said that is why he said "I will write again" in April and wrote nothing. And Ms Huda said will is the future of good intentions, and the other three have dates in them, and a date is a thing that can be missed, which is why it is worth more. So Tareq said it again properly: he is seeing the manager on Tuesday, he is going to ask about the second sheet, he will be driving at six, and the thing he will write down is what the manager says about the sheet, because last time he remembered it wrong by one word and the word was "all".']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will be seeing him on Tuesday. _(just an appointment)_ → ✓ I am seeing him.   ✗ When I will arrive, I will telephone. → ✓ when I **arrive**.   ✗ By the time you will telephone… → ✓ by the time you **telephone**.   ✗ I will write to them. _(decided last week)_ → ✓ I am going to write.   ✗ everything in _will_ → ✓ choose, and say what the choice claims.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Version A: none. Version B: five of the six sentences have a time or a day in them.'));
out.push(A('**2** No obligation in any of the six sentences, including the one about the sheet — nothing that could be missed and nothing that could be checked.'));
out.push(A('**3** _I will write down what he says, word for word._ It is a decision taken while writing, about a thing with no date, so _will_ is the right future and version B keeps it unchanged.'));
out.push(A('The page works because version A is honest. Students write a version A they would never have sent — too obviously bad — and then prove nothing. Make them write the one they would actually have sent in June, and the second half lands. The test to give them for judging the two is the one in the model: **what could somebody hold me to?** Six sentences, nothing to hold; six sentences with an hour, a request and a fallback, and all of it holdable, which is the point of writing it down at all.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE WEEK, WRITTEN TWICE** · N. Sabbagh',
  '**Version A — all in _will_.** I will talk to the appointments desk. I will take my figures. I will do the Mezzeh visits on Wednesday. I will ask about the 2022 sheet.',
  '**Version B — four futures.** I am seeing Rania at the appointments desk at half past eight on Monday; she has given me fifteen minutes before the first booking goes out. I am going to take one sheet with four numbers on it and nothing else, because last time I took eleven pages and she read none of them. On Wednesday morning I will be doing three visits in Mezzeh, so Monday is the only morning this week I can be at a desk. And I will ask about the 2022 figure if the conversation goes that way — I am not deciding that now, because it may be the wrong week to question somebody else\'s page.',
  '**What A tells the reader.** That a technician has intentions. Nothing in it says when, nothing says what she will be carrying, and the desk could read it and plan nothing.',
  '**What B tells the reader.** The hour, the person, the fifteen minutes, what will be in her hand, why Monday and not Wednesday, and which part she has deliberately not decided.',
  '**And the sentence that does not change.** _I will ask about the 2022 figure if the conversation goes that way_ — a decision she is leaving until she is in the room, which is exactly what _will_ is for.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**THE WEEK OF THE TWENTY-SECOND, WRITTEN TWICE** · T. Ayoub',
  '**Version A — all in _will_.** I will see the depot manager on Tuesday. I will ask him about the second check sheet. I will write down what he says. I will not be able to go in the morning because I will drive the early shift. I will speak to the night supervisor as well. I will tell you what happens.',
  '**Version B — four futures.** I am seeing the depot manager at eleven on Tuesday; he put it in his book on Monday. I am going to ask him for one thing only — that the second check sheet be collected from the bus and not from the office window — and I am going to take the nine dates with me. At six on Tuesday morning I will be driving the early shift, so eleven is the first hour I have. I will write down what he says, word for word, because last time I remembered it wrong by one word and the word was "all". And if he says no, I am going to ask the night supervisor instead, who has wanted it for longer than I have.',
  '**What A tells the depot.** That a driver has some plans. The office could read those six sentences in September and find no obligation in any of them.',
  '**What B tells the depot.** The hour, the man, the one request, the evidence, why the morning is impossible, what will be written down, and what happens if the answer is no.',
  '**And the sentence that does not change.** _I will write down what he says, word for word._',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Version B is a different document and the line that does the most is \'he put it in his book on Monday\' — four words that tell me it is real. I would change \'I will tell you what happens\' in version A: you have dropped it from B altogether, and it is the one sentence in A that somebody was relying on. And my question is who the \'you\' is, because if it is the other drivers then the fallback to the night supervisor is something they should know about before Tuesday and not after."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two numbers, and they are usually under five and over thirty. Then put the real question, which is not about grammar: **which version have you been sending for years?** Almost everybody has been sending version A, and almost nobody has been sending it out of carelessness — they have been sending it because version A cannot be wrong, and version B can.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The message I sent on 2 September: "I will come and look at the flat this week and I will let you know." Rewritten in the four futures: "I am coming at six on Thursday; your brother has the key and knows. I am going to bring the tape and measure the two bedrooms. At six I will be coming straight from work, so I will not have eaten, and I will not stay longer than half an hour. And I will tell you on the day whether we want it." What the man could not have known from my original: the day, the hour, that somebody would be measuring, and that an answer was coming on Thursday and not "this week". He telephoned me twice in those four days and now I know why.']));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  The bus leaves at 6.40'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second question — _and who can change it?_ — is the one that makes the cycle about something. Nearly every answer is "not me", and the follow-up is the cycle\'s whole content: **then who?** In a first run, half the room cannot name the person who owns a page they live by.'));
out.push(A('**b** **1** timetable   **2** arrangement   **3** timetable   **4** intention   **5** timetable'));
out.push(A('Items 1 and 2 are the pair to put on the board: the same time, the same morning, two different claims. _The train leaves at 6.40_ is the world\'s; _I am leaving at 6.40_ is mine. Students who keep the present simple for their own plans make their choices sound like rules, and it is the commonest register fault of the cycle.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – a timetable that was changed in practice and never reprinted.'));
out.push(A('**b** **1** The sheet says the first departure is 6.40; the first bus actually leaves at 6.20, because the drivers agreed among themselves in 2021. The twenty-minute interval holds only until about half past eight, and the thirty-minute part is right.   **2** That a schedule nobody owns stays wrong: at TechCare a visit is on the page as ninety minutes and takes a hundred and ten, everybody who does the visits knows, customers are told ninety, and nobody has changed a number since 2022.'));
out.push(NOTE('The two false schedules in this dialogue are both **false in public** — every driver and every technician knows the real number — and that is the finding to draw out: a workplace\'s wrong page is not usually a secret, it is an orphan. Tareq and Nour give the same reason for not fixing it, five words long: _it is not my sheet._ The cycle\'s work, set by Ms Huda, answers that exactly: do not complain, write the real timetable in the same shape as the printed one, put your name at the top, and give it to the person who would reprint it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _My shift starts at seven and finishes at three, and the handover takes twenty minutes at each end, so it is really half past six to twenty past three. The rota office owns the page and it has said seven to three since 2019._',
  '**2** _The shop opens at nine and closes at eight, and nobody buys anything before half past ten. The owner owns the page and he knows._',
  '**3** _The bus leaves at 6.20 and the sheet says 6.40. The company owns the page and the man who could reprint it has never been on the line at that hour._',
  '**4** _The department meets on the first Tuesday of the month at four and finishes at six, and it has never once finished at six. The head of department owns the page._',
  '**5** _This class runs from half past five to half past seven on Mondays and Thursdays, and it finishes at twenty-five to eight, because nobody leaves on the hour. Ms Huda owns the page and she has never pretended otherwise._',
]));
out.push(A('Insist on the second half of every answer — **who owns the page** — because that is the sentence that makes the writing task in Lesson B possible. A student who cannot name the owner writes a complaint; a student who can writes a sheet and hands it over.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The sheet says first departure 6.40, then every twenty minutes.',
  '**B:** What actually happens is that the first bus leaves at 6.20, and the twenty minutes holds until about 8.30 and then the traffic takes it.',
  '**A:** Who owns the page?',
  '**B:** The company\'s traffic office, and the drivers changed the departure in 2021 without them.',
  '**A:** What is the one number that would have to change?',
  '**B:** 6.40 to 6.20. One number, on one line, on a sheet at two bus stations.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight printed numbers against eight real ones, and then the mark: **does everybody involved already know?** It is seven or eight out of eight, every time. Say the finding in one sentence and let the room sit with it: almost every false schedule in a workplace is false in public, and the only thing missing is a piece of paper.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The laboratory issues results within twenty-four hours — that is what the request form says. A routine result takes between twenty-six and thirty-six hours and an urgent one takes four. The pathology office owns the form and it has said twenty-four since before I started, which is six years._',
  '**b** _What it costs per day: about nine telephone calls to our bench from wards asking where a result is, and every one of them is from somebody who read twenty-four on the form. Nine calls is about half an hour of somebody\'s day, and it has been nine calls a day for six years._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq brought in the printed timetable for his line, from 2019, still on the wall at both ends. It says first departure 6.40, then every twenty minutes until 9.00, then every thirty minutes until 14.00. What actually happens is that the first bus leaves at 6.20, because the drivers agreed among themselves in 2021 that the men going to the industrial road needed it earlier; then it is every twenty minutes until about half past eight, because that is when the traffic takes the interval away; and the thirty-minute part is right. Omar said the timetable is wrong by twenty minutes at the only hour that matters, and Tareq said it is wrong in their favour — the passengers who know, know, and the ones standing there at 6.40 having missed it are the ones who do not use the line often, which is to say the ones who most need a timetable. Nour asked who owns it, and Tareq said nobody, and that he had never said it out loud: the drivers changed the departure, the company printed the sheet, the sheet is six years old, and the man who could reprint it has never been on the line at 6.20. Nour said it is the same at TechCare — the installation schedule says ninety minutes and a visit takes a hundred and ten, everybody who does them knows, customers are told ninety, and so they are late four times a day and somebody is annoyed four times a day, and nobody has changed a number since 2022. What would change it is somebody writing the real number down and giving it to the person who sends out the appointments: one number, and she has been there a year and has not done it. Tareq said what stops her is what stops him — it is not my sheet. So Ms Huda set the work: write the real timetable in the same shape as the printed one, with the true numbers and a line at the top saying who it came from, and give it to the person who would reprint it, who is not the manager.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The bus is leaving at 6.40 every morning. → ✓ leaves.   ✗ The shop will open at nine tomorrow. _(normal hour)_ → ✓ opens.   ✗ The committee meet. → ✓ meets.   ✗ I leave at six. _(my own choice)_ → ✓ I am leaving / I leave the house at six, and say which.   ✗ a real number with no method behind it → ✓ say how you got it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A standard installation **110** (not 90); above the second floor with no lift **130**; a replacement **55** (printed as 90); two visits in one building **150** for the pair (not 220). The replacement is the one that costs the most, because four of them are booked as a half-day and finish by eleven.'));
out.push(A('**2** Anybody\'s speed — _it is two hours that were never on the page_.'));
out.push(A('**3** That the desk books replacements at 60 and installations at 110 for one month, and that somebody counts the lateness complaints in that month and compares them with August. If the number does not fall, she says the sheet is wrong and she will say so.'));
out.push(A('Three things make this sheet usable rather than annoying, and they are the three to mark in the margin with the class: the **range** beside the mean (70 to 195, so the exceptions have already been conceded); the arithmetic done for the **whole day**, which is the unit the desk actually books; and the **test that could prove her wrong**, which is 12.3 arriving in a timetable. The fourth thing is the quietest: _I have not asked anybody else to check my forty-one, which is the first thing somebody should do with this sheet._'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**PATHOLOGY REQUESTS · THE TIMES THEY ACTUALLY TAKE** · Y. Mansour, laboratory · for the pathology office',
  'This sheet is not a complaint and it is not a request for more staff. It is the schedule we work to, written down, because the form says twenty-four hours and has said it for at least six years.',
  '**A routine blood result takes 26 to 36 hours** from the sample reaching the bench to the result being released. That is sixty consecutive routine requests logged between June and August by me, on paper, at the bench. The quickest was 22 and the longest was 51.',
  '**An urgent request takes 4 hours**, and the four is real: of the nineteen urgent requests in those three months, seventeen were released inside four hours and two inside six.',
  '**A request that arrives after 15.00 takes the next working day plus the 26 to 36**, because the afternoon run is loaded at three.',
  '**What this means for a ward.** A doctor who reads "within 24 hours" on the form and asks for a routine result on Tuesday afternoon expects it on Wednesday afternoon and gets it on Thursday morning. We take about nine telephone calls a day from wards asking where results are, and every one of those calls is from somebody who read the form and believed it.',
  '**What I am not saying.** I am not saying the twenty-four was wrong when it was printed, and I do not know when it was printed. I am not asking for more staff and I am not asking anybody to work faster. And nobody has checked my sixty.',
  '**What I would like.** That the form says 36 hours for routine and 4 for urgent for one month, and that somebody counts the telephone calls to the bench in that month. If the number does not fall, this sheet is wrong and I will say so.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**INSTALLATION VISITS · THE TIMES THEY ACTUALLY TAKE** · N. Sabbagh, junior technician · for the appointments desk',
  'This sheet is not a complaint and it is not a request. It is the schedule we work to, written down, because the one in use was printed in 2022.',
  '**A standard installation takes 110 minutes**, not 90. That is the mean of forty-one visits between March and August, timed from the doorbell to the signature. The quickest was 70 and the longest was 195.',
  '**Above the second floor with no lift it takes 130**, because the equipment goes up in two journeys.',
  '**A replacement takes 55.** The printed sheet gives it 90, and this is the number that costs us the most, because four replacements are booked as a half-day and finish by eleven.',
  '**Two visits in one building take 150 for the pair**, not 220, because one cable survey serves both.',
  '**The desk allows 20 minutes between appointments.** Real travel time in one district is 25 to 40 and between districts 45 to an hour, which is why a day of five visits runs forty minutes late by the fourth however fast each visit is.',
  '**What this means for the day.** Five visits at 90 plus 20 is 9 hours 10. The same five at the real numbers is 11 hours 15. That is not anybody\'s speed; it is two hours that were never on the page.',
  '**What I am not saying.** Not that the 2022 sheet was wrong when written; not that we should do fewer visits. And nobody has checked my forty-one.',
  '**What I would like.** Replacements booked at 60 and installations at 110 for one month, and somebody counting the lateness complaints. If the number does not fall, this sheet is wrong and I will say so.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The strongest thing here is the two-hour arithmetic for the whole day, because the desk books days and not visits, and nobody at that desk has ever added it up. I would move \'nobody has checked my forty-one\' out of the paragraph about what you are not saying and give it its own line, because buried there it reads like an apology and on its own it reads like an invitation. And my question is why you are asking for 60 for a replacement when your own figure is 55 — if you round up to be safe, say so, because somebody will find the 55 and wonder."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts. Numbers the writer timed themselves: usually three or four in a class of eleven, and those are the sheets worth handing over. Printed numbers known to be false by everybody who uses them: the whole room. End on that: these sheets are not discoveries, they are things nobody had written down.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I timed the drug round five times: 62, 58, 71, 64 and 59 minutes. Mean 63, quickest 58, longest 71. The line on the ward induction sheet says "the round takes approximately 50 minutes" and it has said that since before I came, which is nine years. The line it should replace: _the round takes 60 to 70 minutes with two trolleys and longer with one._ And the reason it matters is not the ten minutes: it is that a new nurse reads fifty, runs late on her first night by twenty, and concludes that she is slow.']));

// ===================== 13.6 =====================
out.push(pb());
out.push(h2('13.6  An itinerary somebody else can follow'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and timed strictly: sixty seconds each. The exercise only works under time pressure, because what B writes in sixty seconds is what A has actually told them, and what A then says is missing is the content of the whole cycle.'));
out.push(A('**b** Belongs in an itinerary: **2** and **4**. Not **1** (a noun with a time next to it), not **3** (which drawings? rolled or flat?), not **5** (where, when, and does it close?).'));
out.push(A('Items 1 and 5 are the two that look harmless. _10.00 Site visit_ and _Lunch_ are diary entries: they are reminders for somebody who already knows everything, and the person following the page is somebody who knows nothing.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** A structural engineer, H. Qassab, is coming from Aleppo on the twenty-third, and Lubna has to send her a programme by Thursday.'));
out.push(A('**b** **1** For somebody who knows nothing and is arriving at a gate in a city they do not live in — so every line needs a time, a place exact enough to stand in, a person with a name, and what to do if that person is not there.   **2** The **warnings**, and that they go **at the top**: the gate is not the door, the caretaker leaves at 10.30 with the only key, the store has no handle inside, and the south rooms are hotter so the measurements go first.'));
out.push(NOTE('Lubna\'s tutor\'s four words — _this is your diary_ — are the best piece of marking in Book 2 and worth stealing. The distinction is the whole cycle: a diary is written for somebody who already knows, an itinerary for somebody who knows nothing. And her own admission is the line to pause on: all four warnings are things she has known for a year. A class that hears that will find its own four, and the homework asks them to.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _09.00 — I am meeting you in the ground-floor corridor outside Room 4 (not at reception; reception sends people upstairs). If I am not there by five past, telephone me; if there is no answer, ask for Mr Sayegh in the office opposite._',
  '**2** _11.00 — We are in the workshop with Hani, who has the key to the bench cupboard. Bring something you do not mind marking; the benches are oiled._',
  '**3** _13.00 — Lunch at the place on the corner. It closes at two and does not take cards. If we are late we eat at the counter in the station, which is open until five._',
  '**4** _14.00 — You are meeting the department: four people, three of whom have read your note. I am going to ask you one question in front of them that I have told you about already._',
  '**5** _16.00 — I am walking you to the bus. The last one to Aleppo leaves at 16.40 and the one after it is tomorrow, so if we are running late at half past three say so and we stop._',
]));
out.push(A('Every answer carries the four parts. Item 5 carries the fifth thing that separates a good itinerary from a correct one: it gives the visitor **permission to stop the day**, which is what somebody who has travelled four hours will not ask for unless it is written down.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** 9.00 Meeting.',
  '**B:** 08.55 — I am meeting you at the side door of the clinic, which is on the lane behind the main entrance and has no sign on it. If I am not there, telephone me; if there is no answer, ask the porter for Yara in the laboratory.',
  '**A:** And the warning at the top?',
  '**B:** The main entrance is locked until nine and the queue outside it is for the pharmacy, not for us, so do not join it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark every line you could not have followed. The missing part is nearly always the same one — **what to do if the person is not there** — and it is the part that matters on the one morning the itinerary is needed, which is the morning the person is not there.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Read this first:** the gate code is 4417 and it changes on the first of the month; if it has changed, the bread shop opposite has the new one. **07.45** — I am meeting you at the gate. **08.00–11.00** — we are doing the Mezzeh visits, two of them, and the second flat is on the fourth floor with no lift. **11.30** — I am going to show you the figures I have been timing, if there is time; if there is not, they are in the folder. **13.00** — the desk closes at one and nobody answers the telephone after it._',
  '**b** _My partner\'s line I could not have followed: "2.00 the supplier". Which supplier, where, and the man there is called Issam and nobody in that building knows him by the company\'s name. And the warning she knows and did not write: the lift in that building stops at the third floor and the office is on the fifth._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna has an engineer coming from Aleppo on the twenty-third and has to send her a programme by Thursday, and she had never written one. What she had was four lines: nine o\'clock meet at the building, ten survey, one lunch, two discussion. Nour said she could not have followed it — she would not know which building, which door, whether to bring anything, or what to do if Lubna were not there — and Lubna said that is exactly what her tutor said in four words: this is your diary. A diary is a reminder for somebody who already knows everything; an itinerary is for somebody who knows nothing and is arriving at a gate in a city they do not live in. So every line needs a time, a place exact enough to stand in, a person with a name, and what to do if that person is not there. And the second thing she had not thought about is the warnings, which are the only reason anybody keeps an itinerary in their hand: the gate is not the door; the caretaker has the only key and leaves at half past ten, so if they are late the yard is finished for the day; the stairwell store has no handle on the inside; and the south rooms are five degrees hotter, so the measurements have to be done before eleven. Jad pointed out that none of those was in the four lines, and Lubna agreed — and said all four are things she has known for a year. Nour said that at TechCare the warnings go at the top, above the appointment and not next to it. So the warnings go at the top, the arrangements are in the present continuous, the building times are in the present simple because they are not hers, and the two things she intends to do if there is time are marked as intentions. Her new first line is: ten to nine, I am meeting you at the gate on Sharia al-Jalaa, which is twenty metres north of the door and has no number on it; if I am not there, telephone me, and if there is no answer, ask at the bread shop opposite, where they know me.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ 10.00 Site visit. → ✓ a verb, a place and a person.   ✗ Bring the drawings. → ✓ which, and in what form.   ✗ a warning at the hour it applies → ✓ at the top.   ✗ everything in the present continuous → ✓ mark the intentions.   ✗ no fallback for the day → ✓ _if the day falls through…_'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because they are read once, at the beginning, by somebody standing in a street. The caretaker warning buried at 10.30 would be read at 10.30, which is the moment he leaves with the only key — and the yard would be lost for the day.'));
out.push(A('**2** The 15.00 line — _I am going to ask for twenty minutes of your opinion on the two blanks in my key, if you have them_ — and the reader can tell from _going to_ and from _if you have them_.'));
out.push(A('**3** If the gate is shut and Abu Rafiq is not there, which has happened twice this year, they go to the university drawing office instead, which has the 1974 file and is nine minutes away. _Nothing is wasted._'));
out.push(A('Two details in this model are worth more than the structure. The first is **what I am providing** — water, drawings, the mark-up — because a visitor who does not know whether to bring water brings water, and a visitor carrying water is a visitor you have made anxious. The second is the ask at 15.00, disclosed in advance with an escape attached: _if you have to leave at three, say so now and I will move this to the morning._ An ask announced at nine is granted; the same ask sprung at a quarter to three is refused politely.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**COUNTER 2, SHAALAN · THURSDAY 25 SEPTEMBER** · programme for I. Haddad, technical department, Al-Nahla · sent by M. Hariri, 21 September',
  '**Read these three things first.**',
  '**1** The shop has two doors. Come in at the one with the green frame on the lane side; the glass door on the street is the owner\'s and he does not know you are coming.',
  '**2** I am at the counter and I cannot leave it. If I am serving somebody when you arrive, sit on the chair by the window and I will be with you inside five minutes.',
  '**3** The owner may ask who you are. I am going to tell him, today, that you are coming and why, so that he is not told by you.',
  '**09.00** — I am meeting you at the counter. If I am not there, Hani at counter 3 has the folder and knows.',
  '**09.00–09.40** — We are looking at the four units I have kept, under the lamp. Bring the batch list if you have it; I have the fifteen dates and the two shops.',
  '**09.40** — I am going to ask you one question I have not put in writing: whether a batch number is on the unit anywhere I can read without opening it.',
  '**10.00** — The shop gets busy at ten and I will be serving from then on, so anything you need from me has to be before it.',
  '**If the day falls through** — if I am alone at the counter, telephone me and we do it at seven in the evening instead, which is quieter. Nothing is wasted.',
]));
out.push(S('Stage 7 · Write freely (sample, 180 words)'));
out.push(SAMPLE([
  '**14 SHARIA AL-JALAA · TUESDAY 23 SEPTEMBER** · programme for H. Qassab, structural engineer, Aleppo · sent by L. Sweidan, 18 September',
  '**Read these four things first.** **1** The **gate** is twenty metres north of the door, has no number and is green; the door with the number on it is locked and nobody answers it. **2** Abu Rafiq, the caretaker, holds the only key to the yard and **leaves at 10.30**. **3** The store under the stairwell has a steel door and **no handle on the inside** — do not go in; I will hold it open. **4** The three south rooms run 4–5 °C hotter, so readings in them go first.',
  '**08.50** — I am meeting you at the gate. If I am not there, telephone me; if there is no answer, ask at the bread shop opposite, where they know me.',
  '**09.00–10.25** — We are in the yard with Abu Rafiq: the 1974 extension, the render, the two downpipes. Bring a torch; there is no light under the extension.',
  '**10.30–11.15** — We are measuring the three south rooms. At eleven you will be standing in the hottest room in the building, so this is the hour for anything that needs you to concentrate.',
  '**11.15–12.30** — Rooms 13 and 14, the single circuit, the external wire. I am going to ask you one question here that I have not put in writing.',
  '**12.30–13.15** — Lunch at the corner. It closes at two and does not take cards.',
  '**15.00** — I am going to ask for twenty minutes on the two blanks in my key, if you have them. If you have to leave at three, say so now and I will move it to the morning.',
  '**What to bring:** sheets 1–3 rolled, a torch, a tape, shoes you do not mind. **What I am providing:** water, the 2009 drawings, the mark-up.',
  '**If the day falls through** — telephone me and we go to the university drawing office, which has the 1974 file and is nine minutes away. Nothing is wasted.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The line that would have saved me on a day like this is \'ask at the bread shop opposite, where they know me\' — I have stood outside a locked door in Aleppo for forty minutes with a telephone that was not being answered. I would change the 11.15 line: you tell me there is a question coming and not what it is about, and I will spend three hours wondering instead of thinking about the render. And my question is who holds the key if Abu Rafiq is ill, because your fallback covers the gate being shut and not him being away."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Nearly all of them are things the writer has known for more than a year. Say it, and connect it to 13.5: the thing that would help a stranger most is the thing everybody local already knows and nobody has written down. In both cycles the work is not discovery — it is transcription, and it takes twenty minutes.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I wrote the itinerary for my own Thursday and gave it to Hani, who has worked at the next counter for two years. The line he asked a question about was "08.00 — open up". He asked which keys, in what order, because the shutter lock takes the long key and the door takes the short one and if you use them the other way round the shutter jams — and he has watched me do it every morning for two years and has never been told, and I had not thought of it as a thing to be told. It is now line one of the page, at the top, in the warnings.']));

// ===================== 13.7 =====================
out.push(pb());
out.push(h2('13.7  Review & Mediate: The programme nobody reads twice'));
out.push(S('Stage 1 · Unit 13 quiz – corrections'));
out.push(A('**1** I **am seeing** the committee at ten on the fifteenth.   **2** I am going to **ask** him.   **3** The bus **leaves** at 6.40 every morning.   **4** At ten I will **be** sitting in front of them.   **5** When I **arrive**, I will telephone you.   **6** I have an appointment **on** Tuesday.'));
out.push(A('Items **1** and **3** are the two halves of the unit — a diary entry in the continuous, a timetable in the simple — and item **5** is the grammar point that survives longest if it is not named: **no future after _when_, _as soon as_, _before_, _after_, _until_ or _by the time_.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Line **5** is not a schedule at all — _staff are asked to make themselves available for cover_ has no time, no name and no number of hours in it. Line **7** is the one Umm Kinan has been waiting nine months for: the department **intends to review** the order of the third-year scheme, and a meeting **will be arranged** — her own request from June of last year, written in the two weakest futures in English.'));
out.push(NOTE('This is the clearest demonstration in the book of why the four futures matter outside an examination. Umm Kinan\'s victory is on a school notice in a tense that commits nobody, and she can read the tense. Her answer is not to complain about the wording: she goes and asks for **the date**, and when she thinks about not getting one she sets her own. Put her two sentences side by side on the board — _a meeting will be arranged_ against _the meeting is on the twenty-seventh of October_ — and ask the class which of them somebody has to keep.'));
out.push(S('Language box – reading a programme'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Four kinds of line: **schedule** (present simple, not yours), **arrangement** (continuous or a named list), **intention** (_intends to · is going to_, no date), **hope in the passive** (_staff are asked to_, nobody in it at all).'));
out.push(A('Two habits to drill, and they are the whole cycle: find the line with **no time, no name and no number** — it is the one that will cost somebody their week — and find your own victory in a weak future and **ask for the date**. The third habit is the fallback: if no date comes, set one of your own and say so in writing, because a date you set yourself is the only one you can keep without permission.'));
out.push(S('Stage 3 · Practise (sample – Programme A, a hospital study week)'));
out.push(SAMPLE([
  'Four of these six are real schedules and they are not ours: sessions begin at half past eight and run to four, the lecture theatre is unavailable on the Tuesday, and certificates come within fifteen working days.',
  'One is an arrangement: ward cover is on the attached list, which means somebody has already agreed it and anybody can check their own name.',
  'One is an intention with no date and no name: it is intended to repeat the week in the spring.',
  'And the line that will cost somebody their week is the fourth: **night staff are asked to attend where possible.** There is no time in it, no number of sessions, and no statement of whether the attendance is paid, counted or voluntary — and the people who will answer it are the night staff who answer everything, after a twelve-hour shift.',
  'What it would take to make it a schedule: two sessions named, a time, and a line saying whether the hours count. Nine words.',
  '**Our two decisions, in two minutes.** First: ask the office which two sessions night staff are actually expected at, and whether the hours count — the question goes to the person who wrote the line, not to the ward. Second: ask for the date of the spring week before the certificates are issued, because after that nobody will be thinking about it. We agreed on the first in about twenty seconds. On the second we did not agree: I would ask now and my partner would wait until the week is over, because he says asking in the same week makes it look like a complaint about this one.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Programme A: the night-staff line. Programme B: _staff are encouraged to stay on until the count is finished_ — no hours, no limit, no payment named. In almost every run both pairs decide the same first thing: **ask for a date or a name for the line that has neither**, and ask the person who wrote it. That is the Speaking Part 3 practice doing a second job, and it is worth saying so to the class: the collaborative task is marked on interaction, and what they have just done is also the most useful thing anybody can do with a circular.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own programme, agenda, notice or circular, explained without being shown. The three questions are the assessment: _who has agreed that?_, _what is the date?_, _which line has nobody in it?_ Expect a third of the class to find a line about themselves that they had read as an instruction and that is in fact a hope — which is the moment the cycle pays for itself.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Umm Kinan brought in the examination-week programme that went up in every staff room on Friday: one page, seven lines, and every teacher in that school will read it once. Line five says staff are asked to make themselves available for cover during the week, and Nour said straight away that it is not a schedule — no time, no name, no number of hours. Umm Kinan said it is a hope in the passive and it is the line that will cost somebody four afternoons, because every year the same four people cover everything: the sentence asks nobody in particular, and the people who answer it are the people who answer everything. What would make it a schedule is a list — the following staff are covering the following hours — nine words and a table, twenty minutes of the office\'s time, and then cover is an arrangement instead of a competition in willingness. Lines one, two, four and six are real schedules in the present simple and not hers to change, and line three is a definition, which she said is the eleventh time this room has taught her that a definitions line decides what a rule means. Line seven is why she brought the page: the department intends to review the order of the third-year scheme after the examinations, and a meeting will be arranged — which is what she asked for in June of last year, in the two weakest futures in English, with no date, no person, and a passive with nobody in it. In June of last year she would have gone home happy because her words were on a school notice. This year she is going to the office on Monday to ask for one thing: the date — not the meeting, not the review, not the agenda — because a meeting will be arranged can be true for four years. And if they will not give her a date she is going to put her own in: she is bringing the 2026 mark analysis to the department meeting on the fourth of November, under any item they like. So I decided to go through the circular I have had since August and find the line in it that has nobody in it.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 5'));
out.push(A('**1** B   **2** C   **3** B   **4** C   **5** D   **6** B'));
out.push(A('_Notes:_ **1** _the claim each line makes_ — a claim is made; a _say_ and a _speech_ are not. **2** _trust it_ is transitive; ⚠ _count_, _depend_ and _rely_ all need **on**, which is not in the gap. **3** _answered_ takes an object here (the line will be answered); _replied_ and _responded_ cannot. **4** _records_ — a page records something; _writes_ needs an agent and _sets_ and _puts_ do not collocate. **5** _without anybody **doing** a thing_ is the fixed expression. **6** _set a date_ is the collocation; ⚠ ~~put a date~~ means something else (_put a date on it_ = estimate when).'));
out.push(NOTE('Reading Part 5 is six four-option gaps and it is **collocation**, not grammar: in almost every item, two or three options are the right part of speech and the right meaning and the wrong partner for the word next to them. Two habits worth ten minutes: read the whole sentence before looking at the options, because the gap is usually decided by the word **after** it (_trust it_ · _set a date_ · _depend **on**_); and if two options mean the same thing, neither of them is the answer — look for the one that fits the preposition or the object.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The programme came out on the twelfth. It is seven lines long and most people will read it once.',
  '**The schedules** — not ours to change — are lines one, two, four and six. Examinations begin at 08.15 and candidates are admitted from 08.00; the hall is unavailable on the Wednesday and Wednesday\'s papers are in Rooms 4, 5 and 6; third-year mathematics is on Thursday at 10.45; results are issued within ten working days.',
  '**The arrangements** are on the attached invigilation list, which means somebody has already agreed them and you can check your own name against it this morning.',
  '**The definition** is line three, and it is the one nobody reads: an invigilator is a member of staff **whom the head names in writing**. If you have not been named in writing, you are not an invigilator, whatever the list says.',
  '**The intention** is line seven: the department intends to review the order of the third-year scheme, and a meeting will be arranged. There is no date and no name in it.',
  '**And the line that will cost somebody their week** is line five: staff are asked to make themselves available for cover. It has no time, no name and no number of hours, and the people who answer it are the four who answer everything.',
  '**What I am going to do.** I am going to the office on Monday to ask for the date of the meeting in line seven. If I do not get it, I am bringing the mark analysis to the department meeting on the fourth of November and tabling it under any item they like.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 161 words)'));
out.push(A('Out of 15 on Content, Communicative Achievement, Organisation and Language — and at Book 2 length, **140 words or more**. All four notes must be covered: which lines to sort and into what, what a line with no time and no name does, the one thing to ask for and from whom, and one example of the writer\'s own with a date in it. The commonest loss is the fourth note, treated as decoration.'));
out.push(SAMPLE([
  'Dear Sam,',
  'Go through the notice line by line and sort every line into one of four kinds: a schedule (it has a time and it is not yours to change), an arrangement (somebody has agreed it and there is a name or a list), an intention (it says _intends to_ and has no date), and a hope in the passive — _staff are asked to make themselves available_ — which has nobody in it at all.',
  'That last kind is the one to worry about. A line with no time, no name and no number of hours is answered every year by the same three or four people, the ones who answer everything, and it will cost somebody four afternoons. If you do nothing else, find that line.',
  'Then do one thing: ask for **the date** of the review. Not the agenda, not the terms, not a meeting about the meeting — the date, and ask the person who wrote the notice rather than your own manager.',
  'Mine: a notice in September said a review was intended and a meeting would be arranged. I wrote one line asking for the date, and had it in two days — the twenty-seventh of October, at four. Nine months of being told it was intended, and what produced a date was a letter asking for one.',
  'Best wishes, Siham',
]));
out.push(S('Unit 13 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** b   **3** c   **4** b   **5** c   **6** b   **7** b   **8** a'));
out.push(A('_Notes:_ **1** it is in their book, so the arrangement. **2** decided last night, so _going to_. **5** _that bag looks heavy_ makes it a decision taken at the moment of speaking — the one real _will_ in the eight. **6** no future after _when_. **8** _this time next year_ is a moment inside a long process.'));
out.push(S('Unit 13 check  ·  B  Listening (Part 1, seven extracts) – Track 13.15'));
out.push(A('**1** A   **2** B   **3** B   **4** A   **5** C   **6** B   **7** A'));
out.push(A('Extracts **2** and **7** are the two to replay. Both contain the thing the speaker is **not** asking for, said first and at length — a name, a meeting, a review, an agenda — and candidates choose it. Part 1 is built that way: the distractor is usually a thing the speaker mentions in order to rule out.'));
out.push(NOTE('Listening Part 1 at B1 is seven short extracts with three options each, and the extracts are **monologues of four or five sentences**, not conversations: there is no second voice to help. Two habits: read the question before the extract and underline the question word, because half of them ask _what has the speaker arranged / decided / asked for_ rather than _what happened_; and expect the right answer to come in the last sentence, which is where a speaker puts the thing they have decided.'));
out.push(S('Unit 13 check  ·  C  Writing (sample, 165 words)'));
out.push(SAMPLE([
  '**WARD 4 NIGHTS · ANY NIGHT YOU DO IT INSTEAD OF ME** · R. Barakat',
  '**Read these three things first.** **1** The night book is in the second drawer of the station desk, not on the trolley. **2** The second switch in Room 14 only works if the Room 13 switch is on, and Room 13 is the room you will not think of at two in the morning. **3** Bay five cannot be seen from the station. Walk it at the start and the end, every time, whatever the round has done to you.',
  '**19.45** — You are taking the handover from the day sister at the desk. If she is not there, the sheet is in the folder marked Thursday and you start without her; do not wait.',
  '**20.00–21.10** — You are doing the first round. It takes 60 to 70 minutes with two trolleys. Write the time it finished, including if it finished on time.',
  '**22.00** — You are going to want to do the charts here. Do bay five first; the charts will still be there at eleven.',
  '**02.30** — If the round has finished after this time, put a dot in the margin. That is all the dot means.',
  '**If the night falls apart** — one trolley, two admissions, anything — write the time and the reason in the book and nothing else. Nobody is counting you. The book is for the ward and not for the nurse.',
]));
out.push(S('I can… (Unit 13)'));
out.push(A('Self-assessment; no answers. The three that matter are the fourth, the sixth and the eighth: choosing between the four futures on purpose, writing an itinerary somebody else could follow, and finding the line that has no time, no name and no number in it. A class that ticks the first three and not those three has learnt four tenses it could already form.'));
out.push(box('Looking ahead to Unit 14', [
  'Unit 13 was about what is settled. **Unit 14** is about what is not: _will · won\'t · may · might · could · be likely to · there\'s a chance that_, the adverbs and where they go, and **14.6**, which writes a forecast with its assumptions stated.',
  '**14.7 reads Rasha\'s September report** — written in 13.3, delivered on the fifteenth — as a forecast, in front of people who were not in the room, and asks how far a committee can trust it. The trolley result from 13.3 is the evidence: the round was late eleven times in four weeks with two trolleys against twenty-six with one, and no errors in either case. Keep that paragraph; 14.7 is built on it.',
  '**The Unit 13 NEXT box asks for three things:** one prediction the student made out loud this year that turned out to be wrong, one they have not tested yet, and one forecast written by somebody else — a budget, a projection, a schedule of works, a weather page. 14.1 and 14.7 open on them, and a class that arrives with nothing has an hour of invented examples instead.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 13 · Answer Key');
