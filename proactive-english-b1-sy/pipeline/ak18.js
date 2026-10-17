// Proactive English B1 · Syria Edition · Book 2 · Unit 18 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 18  Verb Patterns — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Five patterns, and the unit is one long sorting exercise:** verb + **-ing** (18.1) · verb + **to** (18.2) · the five verbs that take **both and mean different things** (18.3) · **adjective + to** and **preposition + -ing** (18.4) · and **verb + a person + to** (18.5). 18.6 puts all five on one page and 18.7 finds them on a wall.',
  '**There is no rule to work most of this out from, and students should be told so.** The lists are learnt as lists, and the lists are short. What there **is** a rule for is 18.3 — the **-ing** form looks backwards to something already happening, the **to** form looks forwards to a new action — and 18.4, where _-ing_ after a preposition has no exceptions anywhere in the language.',
  '⚠ **The two errors to kill in this unit:** ~~he suggested me to go~~ and ~~she explained me the form~~. They are in 18.5, they are the two commonest mistakes in the whole book, and a class that leaves Unit 18 still making them has not done 18.5.',
  '**What this unit is actually for, and it is not grammar.** _I agreed to · I refused to · I admitted · I asked him to · I reminded her to_ are the verbs an argument is settled with in six months, because each one names a person and a commitment. 18.2 and 18.5 are about records; 18.1 and 18.6 are about what a person does **not** do, which takes most of a working week and appears in no report anywhere.',
  '**What you need in the room.** For 18.3 and 18.7, a real instruction, card, notice or procedure from each student — brought or written out from memory. For 18.7, every student also needs their **prediction-board page from 14.1**, because the board comes down in that cycle and four of the test dates have fallen.',
  '**And the sentence the unit turns on**, which is Abu Ziad\'s: _I thought there was a reason._ A careful person will follow a written instruction that makes no sense to them, for weeks, on the assumption that the writer knows something they do not.',
], C.lblue, C.navy));

// ===================== 18.1 =====================
out.push(pb());
out.push(h2('18.1  I have been avoiding going back'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The one question — _how long?_ — is what makes the stage work: write the eleven lengths on the board in weeks and months and let the room look at them. In a first run three or four are over two months, and nobody has ever said the number out loud before.'));
out.push(A('**b** **1** _keep forgetting_   **2** _admitted not measuring_   **3** _denied seeing_   **4** _suggested waiting_   **5** _do not mind asking_ … _mind being asked_. Item **2** is the one to drill: the negative is _not_ + **-ing**, and students reach for _admitted she did not measure_ and lose the pattern.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – going back to the two blanks on her survey sheets, for seven weeks.'));
out.push(A('**b** **1** She admits that she has not tried again since 11 September, and that the word for it is **not** forgetting: she remembered it about twice a week for seven weeks.   **2** That forgetting is an accident and costs no energy, and avoiding is work — _the most tiring work there is_ — done on purpose without the purpose being admitted.'));
out.push(NOTE('The distinction is the whole cycle and it is worth ten minutes: **_forget_ is an accident, _avoid_ is work.** The practical test to give the class is Lubna\'s — if you have remembered a thing twice a week for seven weeks and not done it, you have not forgotten it. And the reason it matters is not honesty for its own sake: the true verb tells you what to do next. There is nothing to be done about forgetting except a note; there is a great deal to be done about avoiding, and it starts with naming what is being avoided, which in Lubna\'s case is a second refusal at a door.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I have been putting off telephoning the equipment office for about five weeks._',
  '**2** _I keep avoiding filling in the incident form, and I have done it twice this month and not once this week._',
  '**3** _I have been putting off asking the storeman what happened in 2021 for a fortnight, and I remember it every Tuesday._',
  '**4** _I have been avoiding reading the committee\'s minute of my own report since the eighteenth. It is in my bag._',
  '**5** _I have been putting off telling Sister Nasr that there is an error on her sheet for three weeks, and I do not mind admitting that I have been rehearsing it._',
]));
out.push(A('Item 5 is the one to read out: _I do not mind admitting that I have been rehearsing it._ Rehearsal is the commonest form of avoidance in working life and the hardest to see, because it feels like preparation. Ask the room how many of their eleven items they have rehearsed and not done.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I have been avoiding going back to flat four for seven weeks.',
  '**B:** Did you forget, or were you avoiding it?',
  '**A:** Avoiding. I remembered it about twice a week.',
  '**B:** And what were you avoiding finding out?',
  '**A:** Whether the no was about the building or about me. The first one was about the building. A second one would have felt as though it were about me, which it would not have been.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight are **a second no**, and the pattern is worth naming because it is almost universal: a first refusal is heard as being about the thing, and a second as being about the person — which is not true, and is the reason nobody goes back. Lubna\'s homework is the counter-example to keep for the end of the cycle: the woman had not opened the door because a man had been round the week before and she did not know who Lubna was.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _One: the batch letter to the distributor, nine weeks, remembered most days — avoiding, and what I was avoiding was finding out that the figures do not support the claim. Two: asking the Shaalan man for his delivery notes, six weeks, remembered weekly — avoiding, and what I was avoiding was being refused by somebody I see twice a month. Three: the shelf list, three months, genuinely forgotten about half the time — forget, and I am not going to pretend otherwise._',
  '**b** _My partner has given me Thursday for the Shaalan notes and has written it down, which means it now exists outside my head, and that is the only reason I shall do it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna has to write a method statement for the survey — what she measured, how, and what she did not — and writing it has made her see something she has been avoiding seeing for seven weeks. There are two blanks on her sheets, and she has always said so honestly and has been rather proud of admitting them. Both are the rear light well on the second floor, and to measure it she has to get into flat four, and the woman in flat four would not open the door in September. Omar said so she cannot measure it, and she said no: she has not tried again, and that is the thing. She went once, on the eleventh of September, the woman did not open the door, and she has spent seven weeks calling it a blank. Jad asked whether she had forgotten, and she said no — and that is what writing the statement did to her: she remembered it about twice a week for seven weeks. She has been avoiding going back, and she kept putting off deciding when, and she does not mind saying so, because the alternative is a method statement that is a lie by omission. Nour asked what she was avoiding, since it is one woman and a door, and Lubna said: being told no a second time. The first no was about the building; a second no would be about her — and she knows that is not true and has avoided finding out for seven weeks anyway. Then Ms Huda on the language, which is exact: she has not been forgetting to go back, she has been avoiding going back. Forgetting is an accident and costs nothing; avoiding is work, and she did it twice a week for seven weeks on purpose without admitting the purpose. The statement goes in on the second of December, she is knocking on that door on Saturday morning, and if the answer is no she will write that she asked twice, with two dates.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I avoid to go back. → ✓ avoid **going**.   ✗ I suggest to wait. → ✓ suggest **waiting**.   ✗ She admitted she did not measure it. → ✓ admitted **not measuring** it _(the pattern)_.   ✗ He denied to see it. → ✓ denied **seeing** it.   ✗ I do not mind to be asked. → ✓ mind **being** asked.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** "Blank", because it is not accurate — she did not fail to get in, she stopped trying to get in; and "forgot", which she says she will not use in the statement at all.'));
out.push(A('**2** A man had come the week before asking about the building and the woman did not know who Lubna was — and she said that if Lubna had put a note under the door with her name on it she would have let her in that day.'));
out.push(A('**3** Two dimensions as unobtainable. The lesson about method is that a refusal at a door is information about the door, not about the survey and not about her, and the correct response to one is a note with a name on it.'));
out.push(A('The structural move worth teaching from this model is the **paragraph written before the action and the paragraph written after it**: _What I was avoiding_ and then _What I have done since writing the paragraph above_. It is the only shape of page that reliably gets the thing done, because the writer cannot finish without either doing it or admitting in writing that they did not.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**METHOD STATEMENT · the batch claim, fifteen handsets** · M. Hariri · November',
  '**What the work involved.** Collecting delivery notes for fifteen handsets from two shops over three months and matching them to batch numbers.',
  '**What I did not do, and the true reason.** I did not get the Shaalan notes. I have been calling that "unavailable" and the word is not accurate: I asked once, was refused, and did not ask again.',
  '**What I admit.** I admit asking once, on 2 October. I admit putting off asking again for six weeks. I admit remembering it about once a week. I will not use the word forgot in this statement.',
  '**What I was avoiding.** Being refused by a man I see twice a month and have to buy from on Monday.',
  '**What I have done since writing the paragraph above.** Asked Abu Fadi to telephone him. He checked. Seven notes.',
  '**What this means for the work.** Eleven of the fifteen are from one batch. The figure exists.',
  '**And what it means for my method.** When I cannot ask somebody twice, I can ask somebody else to ask once. That took six weeks to think of and about four minutes to do.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**METHOD STATEMENT · 14 SHARIA AL-JALAA · survey of September–November** · L. Sweidan · for submission 2 December',
  '**What the survey involved.** Measuring every room on three floors, recording ceiling heights at two points in each, and photographing all four elevations. Thirty-one rooms, eleven days.',
  '**What I did not measure, and the true reason.** The rear light well on the second floor. Two dimensions are missing. I have written "blank" on those sheets since September and the word is not accurate: I did not fail to get in, I stopped trying to get in.',
  '**What I admit.** I admit going once, on 11 September, being refused at the door of flat four, and not going back. I admit remembering it about twice a week for seven weeks. I admit putting off deciding a date, which is not the same as forgetting, and I will not use the word forgot in this statement.',
  '**What I was avoiding.** Being refused a second time. The first refusal was about the building and a second would have felt as though it were about me, which it would not have been.',
  '**What I have done since writing the paragraph above.** Knocked on the door of flat four on Saturday 23 November at half past nine. She opened it. She said she had not opened it in September because a man had come the week before asking about the building and she did not know who I was, and that a note under the door with my name on it would have got me in that day.',
  '**What this means for the survey.** The two dimensions are measured: 2.10 m and 4.37 m, taken on 23 November, on sheet 2 in a different pen so that it is clear they were taken later.',
  '**And what it means for my method.** A refusal at a door is information about the door. The correct response to one is a note with a name on it, and the cost of finding that out was seven weeks and two dimensions I nearly submitted as unobtainable.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"What works is that the page does the thing in the middle of itself — the paragraph after the one about avoiding is the only part a reader will remember, and it could not have been written on Friday. I would put the two dimensions and the different pen before the paragraph about what you were avoiding, because a reader who does not yet know the survey is complete reads the confession as a problem rather than as a method note. And my question is what you will write in the statement if you do a survey next year and somebody refuses twice, because the note under the door worked here and will not always."**'));
out.push(S('Stage 7R · Share'));
out.push(A('The count is the point: how many did the thing between starting the page and finishing it? In a first run it is three or four out of eleven, which is three or four more than a month of good intentions produces. Say why it works — a page that forces a choice between _forgot_ and _avoided_ makes the thing cheaper to do than to write about.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I telephoned the equipment office, which I had been putting off for five weeks. It took four minutes. The woman who answered said the trolley had been marked "awaiting collection" since September and that nobody from the ward had ever telephoned, and she asked me — this is the part — whether I wanted her to put a note on it, because a note from a ward moves it up the list. Five weeks of avoiding a four-minute telephone call, and the person at the other end of it was waiting to be asked for the thing I wanted.']));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  What I agreed to and what I refused to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The unexpected question — _which of the two is in writing?_ — usually produces the whole cycle in forty seconds: the agreements are sometimes in writing and the refusals almost never are. Keep the two columns on the board until Stage 7R.'));
out.push(A('**b** **1** _agreed to send_   **2** _offered to come_   **3** _refused to put_   **4** _managed to speak_   **5** _arranged to meet_   **6** _failed to ask_. All six take _to_; the point of the exercise is that the pattern is the same every time and has to be learnt as a list, not worked out.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – she offered to take every escalation call for a month; she refused to make one call on the Thursday, and gave her reason in one sentence.'));
out.push(A('**b** **1** Because the offer made her useful and the refusal made her a person with a limit, and a limit is something other people can work with: her team leader now knows what she will not do, which means he knows what she will, and he has asked her for two things since.   **2** A record of a commitment — _who agreed to what, who offered, who refused, who failed to_ — and therefore the verbs an argument is settled with in six months.'));
out.push(NOTE('Nour\'s two reasons for the offer are worth stopping on, because the class will miss what happens. She says one of the two is honest; Jad says both are; she accepts it. The teaching point is not about motives but about writing: an offer with an unstated reason behind it becomes a grievance within months, because the person who made it begins to feel unrewarded for a thing nobody asked for. The cure is one sentence on paper — which is why the model in Lesson B puts the reason inside the offer and not in a footnote.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _On 4 November I agreed to take the Tuesday handover for the rest of the month._',
  '**2** _On the 6th I offered to write the induction note for the new technician, which nobody had asked for._',
  '**3** _On the 7th I refused to sign the sheet before the check was finished, because my name on it means I did the check and I had not._',
  '**4** _On the 11th I managed to get the April figures out of the office, after asking twice._',
  '**5** _I failed to write the trolley paragraph, which is now five weeks late and which nobody has asked me for._',
]));
out.push(A('Item 3 is the model refusal and should be read twice: the reason is **inside the sentence**, it is one clause long, and it is about the document rather than about the person asking. A refusal built that way is almost never argued with; a refusal with the reason in a second sentence is.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I agreed to cover the two o\'clock handover on the eleventh. I offered to take every escalation call for a month.',
  '**B:** And did you refuse anything?',
  '**A:** I refused to telephone a customer and manage his expectations, because our own note promises forty-eight hours in our own handwriting.',
  '**B:** And what did you fail to do?',
  '**A:** I failed to write up the Wednesday fault before the end of the week.',
  '**B:** Which of the four is in writing?',
  '**A:** None of them until Friday at twenty to five, and then all four.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Two counts. The refusals that came **with a reason in the same breath**: usually half. And what is in writing: of about thirty-two commitments in a first run, three or four, and they are nearly always the ones somebody else made — because we write down what we are owed and not what we owe. Say that sentence to the class; it is the most useful thing in the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Agreed: on the fourth, to take the Tuesday handover for the month. Offered: on the sixth, to write an induction note nobody asked for. Refused: on the seventh, to sign a check sheet before the check was finished, because my name on it means I did the check. Failed: to write up a fault inside the week, which is three days past our own standard._',
  '**b** _My partner says the refusal is the one worth writing down, to the shift supervisor, in about forty words — and that the reason should be the whole of it, because the refusal itself takes four words and the reason is what stops it being read as awkwardness._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour said something happened at TechCare last week that she wanted to say in this room, because it was the first time she had done a thing on purpose that she learnt here. There are escalation calls — where a customer has already been told something by somebody else and it was wrong — and nobody wants them, so they go to whoever is in the room. She offered to take them, all of them, for a month. Omar asked why, and she gave two reasons and said one of them was honest, and Jad said both of them were, so she agreed they both were: she is eleven months in and wants to be the person who is asked for, and an escalation call is the only call where you find out what the company actually promised, because the customer tells you at length and you cannot get it out of their own notes. Then on the Thursday she refused one. A man had been promised a replacement unit in forty-eight hours, eleven days ago, by somebody with no business promising it, and her team leader asked her to telephone him and manage his expectations. She refused to make the call and said why in one sentence: she is not willing to tell a man his expectations are unreasonable when their own note says forty-eight hours in their own handwriting. He went quiet, said fair enough and that he would make it, and he made it and told the man the truth, and the man has a unit coming on Sunday. Nothing happened to her at all. Ms Huda asked which was more useful, the offer or the refusal, and Nour said the refusal, and that it took her a week to work out why: the offer made her useful, and the refusal made her a person with a limit, and a limit is a thing other people can work with — he knows now what she will not do, which means he knows what she will, and he has asked her for two things since.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I refused making the call. → ✓ refused **to make**.   ✗ She agreed sending it. → ✓ agreed **to send**.   ✗ He offered coming early. → ✓ offered **to come**.   ✗ He decided not answer. → ✓ decided **not to** answer.   ✗ I suggest to wait. → ✓ suggest **waiting** _(18.1 — this verb is in the other family)_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because an offer with a hidden reason behind it becomes a grievance in February — she will feel unrewarded for a thing nobody asked her to do, and nobody will know why.'));
out.push(A('**2** So that it is on paper: a spoken refusal has no author in six months, and the reason was the useful part of it.'));
out.push(A('**3** That the name of whoever promised a time to a customer should be in the note — and she says explicitly it is **not to blame anybody**: it is because the person who has to telephone the customer eleven days later is the one defending a sentence they did not write.'));
out.push(A('The fourth paragraph is the one to point at: she reports her own failure, with the standard it fell short of and the day she will put it right, **before anybody has asked for it**. That is the paragraph students leave out, and it is the paragraph that makes the other three believable.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WEEK OF 18–22 NOVEMBER · AGREED, OFFERED, REFUSED, FAILED** · R. Barakat · sent Friday',
  '**What I agreed to.** On Monday I agreed to cover two of Sister Nasr\'s shifts, which is two nights and about nine hours each.',
  '**What I offered to.** On Tuesday I offered to show one more person on nights how to change the pump settings. Nobody asked me to, and I want to say why: I am the only one who can do it, four people could two years ago, and if I am away the ward has nobody.',
  '**What I refused to do, and why.** On Wednesday I refused to sign the controlled-drug book for a check I had not watched. My reason, which I gave at the time and am repeating here so that it is on paper: my signature means I was there.',
  '**What I failed to do.** I failed to write the trolley paragraph, which is five weeks late and is the honest half of my own report. I am writing it on Tuesday whether I have decided anything or not.',
  '**And the one request.** That the pump-settings training is put on somebody\'s list. Not mine and not as a favour — because at the moment it is a single point of failure that exists only because I got used to it.',
]));
out.push(S('Stage 7 · Write freely (sample, 182 words)'));
out.push(SAMPLE([
  '**WEEK OF 11–15 NOVEMBER · WHAT I AGREED TO, OFFERED, REFUSED AND FAILED TO DO** · N. Sabbagh · sent Friday 16.40',
  'You said in September that you would rather have four lines on a Friday than a conversation on a Monday. These are the four lines, and the third one is the reason I am sending them.',
  '**What I agreed to.** On Monday I agreed to cover the two o\'clock handover for the rest of November, which is eleven days and about forty minutes each.',
  '**What I offered to.** On Tuesday I offered to take every escalation call for a month. Nobody asked me to. I want to say plainly why, because an offer with a hidden reason behind it becomes a grievance in February: I am eleven months in and I want to be asked for by name, and an escalation call is the only call in which we find out what we actually promised somebody, because the customer tells us and our own notes do not.',
  '**What I refused to do, and why.** On Thursday I refused to telephone the customer with the eleven-day-old forty-eight-hour promise and manage his expectations. My reason, which I gave you at the time and am repeating here so that it is on paper: I am not willing to tell a man his expectations are unreasonable when our own note promises forty-eight hours in our own handwriting. You agreed to make the call yourself and you made it, and he has a unit coming on Sunday.',
  '**What I failed to do.** I failed to write up the Wednesday fault before the end of the week, and it is now four days old, which is three days longer than our own standard. Nobody has asked me for it. I am writing it on Monday morning before anything else.',
  '**And the one request.** When somebody promises a time to a customer, I would like the name of whoever promised it to be in the note. Not to blame anybody — because the person who has to telephone the customer eleven days later is the one who has to defend a sentence they did not write.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The line I am going to steal is that an offer with a hidden reason becomes a grievance in February, because I made an offer in August and I can feel it turning already. I would cut the opening sentence about the four lines, since your team leader said it and he will know, and the page is stronger if it starts with the agreement. And my question is what you will do if he puts the name in the note and the name turns out to be his."**'));
out.push(NOTE('The Friday four lines are the most portable thing in Unit 18 and they take two minutes. The reason to teach them as a fixed shape — agreed, offered, refused, failed — is that each of the four is a different kind of fact and three of them are normally invisible. An agreement is usually somewhere; an offer is nowhere, and turns into a grievance; a refusal is nowhere, and in six months has no author; a failure is nowhere until somebody asks for it, by which time it is an excuse rather than a report. A student who sends four lines on a Friday for a month will have changed the evidence available about their own work more than a year of good intentions could.'));
out.push(S('Stage 7R · Share'));
out.push(A('Count agreed, offered, refused and failed separately. The refusals and the failures are almost never in writing, and the reason to give the class is practical rather than moral: a refusal that exists only in a conversation has **no author** six months later, so when somebody asks why the call was not made, the answer is a silence that will be filled by whoever is asked first.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The line I would least like read aloud is the second one, and not because of what it says. It is because I wrote "I want to be asked for by name" to my own team leader, and I have never said anything like that to anybody at work in my life, and I sent it at twenty to five on a Friday so that nobody could answer it before Monday. He answered it at ten past five with one line: "Noted, and you already are by two people." I have read that about nine times.']));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  Stop to log it, or stop logging it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Give the pairs one minute each and do not help. _I stopped to read it_ = I interrupted what I was doing in order to read it. _I stopped reading it_ = I gave it up. _Remember to lock the door_ = an instruction. _Remember locking the door_ = a question about a memory. Most classes get the first pair in under a minute and argue about the second, which is the right way round.'));
out.push(A('**b** **1** (a)   **2** (a)   **3** (b)   **4** (b). Item **3** is the one to spend time on: _try asking_ offers a method and expects it may not work; _try to ask_ says the asking itself will be hard. In a workplace the first is advice and the second is sympathy, and students use the second when they mean the first.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – he wrote _stop logging the error_, he meant _stop to log_, and Abu Ziad gave up recording error codes for three weeks.'));
out.push(A('**b** **1** Abu Ziad brought the card to his desk on the Tuesday and pointed at the line with his finger — he had been reading it every time for three weeks because he did not want to get it wrong.   **2** That they are not a curiosity: all five turn up in instructions, handovers, procedures and cards taped to machines, and the person who follows the sheet will assume there is a reason.'));
out.push(NOTE('The sentence to write on the board is Abu Ziad\'s: **_I thought there was a reason._** It is the reason this cycle is in the book and not in an appendix. A careful person will do something that makes no sense to them, for weeks, on the assumption that whoever writes the instructions knows something they do not — and that assumption is not a weakness, it is the basis on which all written procedure works. The practical consequence is the one Ms Huda gives: when a verb has two meanings, **do not pick the right one — remove the verb.** Every professional procedure in the world is written as numbered imperatives for exactly this reason, and students should leave this cycle able to say why.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Stop to check the oil_ = pause and check it. _Stop checking the oil_ = we are not checking it any more. On a card: **1** check the oil. **2** write the level on the sheet.',
  '**2** _Remember to sign the sheet_ = sign it. _Remember signing the sheet_ = you did sign it, do you recall? On a card: **sign the sheet before you leave the yard.**',
  '**3** _Try telephoning the office_ = here is a method. _Try to telephone the office_ = it will be difficult. On a card: **telephone the office on 441.**',
  '**4** _Do not forget to tell the night staff_ = tell them. _I shall never forget telling the night staff_ = the memory. On a card: **tell the night staff before you go off.**',
  '**5** _Go on reading the second page_ = keep reading. _Go on to read the second page_ = then read page two. On a card: **1** read page one. **2** read page two.',
]));
out.push(A('The third column is the whole exercise and the class should do all five of them. Every rewrite is shorter than both originals, which is the argument that wins with managers: numbered imperatives are not pedantry, they are fewer words.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** _Stop filling in the top section._',
  '**B:** As written, it tells me the top section is no longer to be filled in — give it up. What it probably means is: pause and fill in the top section before you go on. The rewrite: **1** fill in the top section. **2** then fill in the rest.',
  '**A:** _Try to use the second scale._',
  '**B:** As written, it warns me that using the second scale will be difficult, which makes me avoid it. What it means is: use the second scale. The rewrite: **use the second scale for anything over 20 kg.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Six or seven of the eight originals can be read both ways by somebody who does not already know the answer — and the sentence to add is the one that makes the count matter: in every one of those cases a **careful** reader may choose the wrong one and will then assume there is a reason. The careless reader is protected; the careful one is not. That is also the argument of the Reading Part 4 article in 18.7, so the two cycles should be taught as a pair if time allows.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The note I sent to the night technician in September says: "Remember checking the log before you reset anything." I meant: check the log, then reset. What it says is: do you recall checking the log? And he has never mentioned it, which means either he read it the way I meant or he has been quietly deciding what I meant for three months._',
  '**b** _My partner\'s rewrite: "1 read the log. 2 reset." Four words shorter than mine and it cannot be read the wrong way round. He also asked the question I had not thought of, which is whether I should ask the technician what he thought it meant — and the answer is yes, and I am going to._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar wrote four lines of English on a card in October and taped it to a machine, and last Tuesday he found out that one of the four says the opposite of what he meant and that a man has been doing the opposite for three weeks. The line is: "If the red light comes on twice, stop logging the error and call me." What he meant was pause, write the error down, then telephone him. What he wrote tells the man to give up writing errors down — and the man gave up writing them down, for three weeks. He is careful, he followed the instruction exactly, he telephoned every time, and Omar kept asking what the code was and he kept saying "you told me not to write them", and Omar kept hearing that as him being difficult. He found out because the man brought the card to the desk on Tuesday and pointed at the line with his finger: he had been reading it every time for three weeks because he did not want to get it wrong, and he was right every time, and Omar was wrong once, in October, in two words. Lubna asked whether he knew it was a mistake, and he had said: "I thought there was a reason" — which Omar says is the worst thing about the whole business, because he did a thing that made no sense to him for three weeks on the assumption that whoever writes the cards knows something he does not. What was lost is three weeks of error codes on the machine giving the most trouble, which is exactly the three weeks the engineer asked for on Wednesday: there are seven and there should be about thirty. And Omar has rewritten the card with no clever verbs at all: "1 write down the code. 2 telephone me." Two lines, two numbers, no stop — which Ms Huda said is where professional writers of procedures end up: when a verb has two meanings, do not pick the right one, remove the verb.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ _Stop to log it_ meaning "give it up" → ✓ _stop **logging** it_.   ✗ _Remember locking it_ as an instruction → ✓ _remember **to lock** it_.   ✗ _Try to ask him_ when you mean "here is a method" → ✓ _try **asking** him_.   ✗ _He went on talking about the form_ when he changed subject → ✓ _went **on to talk** about_.   ✗ Any of the five on a card at all → ✓ two numbered imperatives.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _Stop logging_ = give up writing error codes down; _stop to log_ = pause in order to write one down. They are opposite instructions and the difference is **one word**.'));
out.push(A('**2** He says it is not a fault of Abu Ziad\'s but what a careful person does with a written instruction — and he puts it in the note on purpose because it is what makes a badly written card more dangerous than no card at all, which is the reason the note is worth sending to two other sites.'));
out.push(A('**3** That no instruction on any card should contain _stop_, _try_, _remember_, _forget_ or _go on_, and that if you need one of them you need two numbered lines instead. It costs four seconds longer to write.'));
out.push(A('The move to teach from this model is the **rule that needs no grammar**. Omar does not ask the other sites to learn the difference between two patterns; he gives them a list of five words that may not appear. A rule that requires the reader to understand the explanation will not survive the year, and this is the general lesson of the whole unit for anybody who writes procedures.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE LINE I WROTE AND THE LINE I MEANT** · R. Barakat · November',
  '**The instruction as it stood from 3 September to 24 November.** "Remember checking the second column against the chart."',
  '**What I meant.** Check the second column against the chart, every time, before you sign.',
  '**What it says.** Do you recall checking it? It is a question about a memory and it instructs nobody to do anything. The difference is one word.',
  '**What happened.** Two of the four night staff have been signing without checking since September, and both of them told me they thought the line was a reminder that the check had already been built into the round. One of them was right every time by habit; the other was not, twice.',
  '**What it cost.** Two unchecked columns, both caught by the pharmacy, neither of them anybody\'s fault but mine.',
  '**What one of them said.** "I thought it meant somebody else does it."',
  '**The instruction as it now stands.** "Before you sign: **1** read the second column. **2** read the chart. **3** sign only if they match."',
  '**And the rule I am asking for.** No ward notice to contain _remember_, _try_, _stop_, _forget_ or _go on_. If you want somebody to do something, write the thing and number it.',
]));
out.push(S('Stage 7 · Write freely (sample, 185 words)'));
out.push(SAMPLE([
  '**THE LINE I WROTE AND THE LINE I MEANT** · O. Darwish · 20 November · sent to both other sites',
  '**The card as it stood from 2 October to 19 November.** "If the red light comes on twice, stop logging the error and call me."',
  '**What I meant.** Pause whatever you are doing, write the error code down, and then telephone me.',
  '**What it says.** Give up writing error codes down, and telephone me. Those are opposite instructions and the difference is one word: _stop logging_ against _stop to log_.',
  '**What happened.** Abu Ziad followed the card exactly for three weeks. He telephoned me every time the light came on, and every time I asked for the code, and every time he told me that the card said not to write them. I heard that as obstruction for three weeks. He was right every time and I was wrong once, in October, in two words.',
  '**What it cost.** Three weeks of codes on the machine that has given the most trouble this year — the three weeks the engineer asked for on 19 November. I can give him seven codes. There should be about thirty.',
  '**What he said when he brought me the card, and I am putting it in this note on purpose.** "I thought there was a reason." He did something that made no sense to him for three weeks because he assumed that whoever writes the cards knows something he does not. That is not a fault of his. It is what a careful person does with a written instruction, and it is why a badly written card is more dangerous than no card at all.',
  '**The card as it now stands.** "If the red light comes on twice: 1 write down the code and the time. 2 telephone me."',
  '**And the rule I am asking both other sites to adopt.** No instruction on any card to contain _stop_, _try_, _remember_, _forget_ or _go on_. If you need one of them, you need two numbered lines instead.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"Reading it as the man who followed the card, the paragraph that matters is the one where you say I was right every time and you were wrong once, because for three weeks I was being treated as difficult and I knew I was not. I would move my sentence higher up, before the cost, because the cost is about your machine and the sentence is about everybody\'s. And my question is whether anybody is going to ask me about the other three lines, because there is a fourth one I have never understood either and I did not bring it up."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the instructions containing one of the five verbs — it is usually most of them. Then ask the harder question: has anybody in the room ever asked a person who follows their instruction whether it made sense? Almost nobody has, and the answer to why not is in the cycle: a careful person does not volunteer that a sheet makes no sense, because they assume there is a reason. So the asking has to be done by the writer, once a year, deliberately.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The notice in our store room says: "Staff are reminded to not remove boxes from the lower racks without telling the storeman." Besides the split infinitive, it has nobody in it twice: _are reminded_ by whom, and _telling_ which storeman, since there are two and they work different days. My rewrite: "Before you take a box off a lower rack: 1 write the box number on the pad by the door. 2 tell Abu Samir, or on Fridays Majid." Twelve words longer, two names in it, and the first version has been on that wall since 2019 and the pad does not exist.']));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  Willing to, responsible for, afraid of'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The question — _which of the two is written down anywhere?_ — produces the finding of the cycle: the responsibilities are often written somewhere and the willingnesses almost never are, which means that what a person will and will not do exists only in that person\'s head and has to be discovered by other people one disappointment at a time.'));
out.push(A('**b** **1** _answering_   **2** _to work_   **3** _checking_   **4** _explaining_   **5** _afraid **to ask**_ … _afraid of **being asked**_. Item **5** is the cycle: the first is about the action, the second about the situation.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – he is afraid of **being asked**, not afraid **to ask**; people had assumed the fear was about being wrong.'));
out.push(A('**b** **1** A nine-line profile for the forum, because names are going next to answers from January. The hard line is the fifth, which took five days and which he said aloud in the room before writing it.   **2** That _afraid **to** ask_ is about the **action** — I will not do it — and _afraid **of** being asked_ is about the **situation** — I do not want it to happen to me; and that most people say the first when they mean the second, because the first sounds like shyness and the second sounds like something worth examining.'));
out.push(NOTE('This is the most useful half-hour in the unit for the adults in the room, and the reason is Jad\'s own sentence: _they need different answers._ A fear of an action is cured by doing the action — if you are afraid to ask, ask. A fear of a situation is not, and calling it a fear of an action is how people spend years working hard on the wrong problem. Ms Huda\'s answer is the only one available and it is a writing answer: **publish the thing you are not comfortable with**, because you cannot be ambushed by a sentence you have written about yourself. That is line 9 of the model, and it is the line to read aloud.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am willing to say that I do not know, in front of anybody, including a doctor on the telephone._',
  '**2** _I am not willing to sign for a check I have not watched._',
  '**3** _I am responsible for the four night pump settings, which about four people could do two years ago and one can now._',
  '**4** _I am good at explaining a figure to somebody who does not want to hear it — not at producing the figure, which anybody can do._',
  '**5** _I am afraid of being asked to defend the report in front of the committee. I am not afraid to write it._',
]));
out.push(A('Item 4 is the one to point at: the claim is narrowed **and** the thing the speaker is not claiming is named in the same sentence. A narrowed claim with a disclaimer inside it is the most credible sentence an adult can write about their own work, and it is also the hardest, because it requires knowing where you stop.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I am willing to answer anything about the code. I am not willing to answer about hardware I have never had in my hands.',
  '**B:** And what are you responsible for?',
  '**A:** About nine hundred answers since 2024. I am good at explaining the same thing a second way.',
  '**B:** And what are you afraid of?',
  '**A:** I am afraid of being asked by name — not afraid to answer.',
  '**B:** Is it the action or the situation?',
  '**A:** The situation, and there is nothing to be done about it except be asked.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Most of the eight will be **situations described as actions** — _afraid to speak_ for _afraid of being judged_, _afraid to ask_ for _afraid of being refused_. Do the sorting on the board and then say the consequence, which is the only reason the exercise is worth doing: the two need different things done about them, and an action-fear is solved by one afternoon of doing it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _For the ward manager. Willing to: lead the September report and defend the trolley paragraph. Not willing to: present figures I have not checked myself. Responsible for: 118 night shifts of records, the pump settings, and now the three-night rota for the whole of nights. Good at: telling somebody a number they will not like without making it an accusation. Afraid of: being offered the post and having to decide in the room. Sixth: I am not comfortable with being asked for a decision on the spot, and I would rather you asked me anyway and gave me until the Friday._',
  '**b** _My partner would put the fourth line first, because it is the only one of the five that nobody else on that ward could write, and she thinks I have understated the third: 118 shifts is not a quantity, it is three years of somebody\'s life._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The forum has asked four of them to write a profile line, because names are going next to answers from January, nine lines maximum, and Jad has been at it for five days and has written about forty versions — nine lines in five days, against nine hundred questions in two years that he never thought about, because the questions are about the code and the nine lines are about him. What he has so far: he is interested in answering the questions nobody else answers, the ones with no error message in them; he is good at explaining the same thing a second way; he is willing to say he does not know; and he is responsible for about nine hundred answers since 2024 and can show you the ones he got wrong. But the fifth line has taken five days and is not written, and he said it out loud in the room first because he will not write it until he has: he is not afraid of being wrong, he is afraid of being asked. Lubna said those sound like the same thing, and he said they are opposite — being wrong is about an answer, being asked is about him, because somebody chooses him by name out of everybody and then there is no error message to hide behind. If his name is next to his answers from January, people will ask him directly, which is what he has wanted for two years and also the thing he has been avoiding thinking about since the email came. Ms Huda said the two are one small word apart: afraid to ask is about the action, afraid of being asked is about the situation, and most people say the first when they mean the second. Jad said they need different answers — if he were afraid to ask he would just ask, and there is nothing to do about being afraid of being asked except be asked. Ms Huda said there is one thing: write the ninth line about it, because you cannot be ambushed by a thing you have published about yourself. So the ninth line is: "I am not used to being asked by name, and I would rather you did it anyway."']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am interested in to answer them. → ✓ interested in **answering**.   ✗ responsible for to check → ✓ responsible for **checking**.   ✗ good at to explain → ✓ good at **explaining**.   ✗ I am willing working at the weekend. → ✓ willing **to work**.   ✗ _afraid to being asked_ → ✓ _afraid **of** being asked_ or _afraid **to** ask_ — and say which you mean.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Lines 3, 4, 5 and 7. The number turns a claim into something checkable: _one hundred and four times_ · _about nine hundred answers, twenty-two wrong, all twenty-two still up_ · _about thirty refused_ · _nineteen_. The error count in line 4 is what makes the nine hundred believable.'));
out.push(A('**2** He will not answer a question about hardware he has never had in his hands — about thirty refused — because _an answer like that is a guess wearing an answer\'s clothes_.'));
out.push(A('**3** So that nobody has to wonder, **including him**: a line published about yourself cannot be used to ambush you, and he names himself as one of the readers it is for.'));
out.push(A('Line 2 is the line to teach: _I am not better than other people at explaining it the first way, and the second way is where most answers are actually won._ A claim followed immediately by what it does **not** claim is the most credible sentence shape in the unit, and students will want to delete the second half of it. Do not let them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**PROFILE · R. BARAKAT · for the September report cover sheet**',
  '**1** I am interested in the nights nobody writes about — the fourth and the fifth, where everything that goes wrong on this ward goes wrong.',
  '**2** I am good at telling somebody a figure they do not want to hear without making it an accusation. I am not better than anybody else at producing the figure.',
  '**3** I am willing to lead on the explanation that damages my own case. I did it on 15 October and I would do it again.',
  '**4** I am responsible for 118 shifts of my own records and for seven errors inside them, all seven of them mine, all seven on a fourth or a fifth night.',
  '**5** I am not willing to present a figure I have not checked myself, including Sister Nasr\'s, which is why her sheet is reported separately.',
  '**6** I am bad at stopping. I worked fourteen weeks of nights and three weeks of blocks without taking the leave I am owed.',
  '**7** I am thirty and I have been a night sister for two years and a nurse for nine.',
  '**8** I am used to being the only person who can change the pump settings, and I am getting used to thinking of that as a fault in the ward and not a fact about me.',
  '**9** I am not comfortable with being asked for a decision in the room, and I would rather you asked me anyway and gave me until the Friday.',
]));
out.push(S('Stage 7 · Write freely (sample, 191 words)'));
out.push(SAMPLE([
  '**PROFILE · J. ATTAR · for the answers page from January** · nine lines, sent 21 November',
  '**1** I am interested in answering the questions nobody else answers — the ones with no error message in them, where somebody has to read the whole thing and guess what the person was trying to do.',
  '**2** I am good at explaining the same thing a second way. I am not better than other people at explaining it the first way, and the second way is where most answers are actually won.',
  '**3** I am willing to say that I do not know. I have done it one hundred and four times, which I know because I searched my own answers before writing this line.',
  '**4** I am responsible for about nine hundred answers since the spring of 2024. Twenty-two of them are wrong and I have left all twenty-two up with a correction underneath, and I can give you the list.',
  '**5** I am not willing to answer a question about hardware I have never had in my hands. I have refused about thirty of those and I will go on refusing them, because an answer like that is a guess wearing an answer\'s clothes.',
  '**6** I am bad at short answers. The honest version is that a long answer is safer for the person writing it and more work for the person reading it.',
  '**7** I am nineteen. I said that in May, two readers stopped answering me and four did not, and I have decided to keep saying it.',
  '**8** I am used to working at one in the morning with nobody waiting for me, and I am getting used to the idea that from January somebody will be.',
  '**9** I am not used to being asked by name, and I am not comfortable with it, and I would rather you did it anyway. I am putting that in writing so that nobody has to wonder, including me.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"As the reader you named, line 4 is the one that decides whether I trust the other eight, and it is the error count that does it rather than the nine hundred. I would cut line 6 to one sentence, because the honest version is the whole of it and the first half is an apology. And my question is what you expect to happen in February when somebody asks you by name and you answer in eleven minutes instead of three hours — because you have published line 9 and you have not planned for it working."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts: profiles containing a **refusal**, and profiles containing a **checkable number**. A page with neither is an advertisement. The sentence to end on is that most adults have never written a line about their own work that somebody else could test — and that a profile with a refusal in it is read as more competent, not less, which is the opposite of what everybody in the room expects.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The line I expect to be asked about first is line 5, the one about hardware I have never had in my hands — because it is the only line that tells a reader what they will not get from me, and the thing people ask about is always the boundary. Line 7 is the one I was afraid of and I no longer think anybody will mention it. And line 9 is the one I shall find out about in January, and I cannot prepare for it, which is why I wrote it.']));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  Who asked whom to do what'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Write only the pairs of names and let the room look at them. Several of the eleven will have the same name twice — _I asked myself to_, or a sentence where the student is both parties — and the commonest pattern is that the second name is missing altogether, which is the cycle.'));
out.push(A('**1** He suggested **that I should wait** / he suggested **waiting**.   **2** She explained the form **to me**.   **3** They promised **me that they would send it** / they promised **to send it**.   **4** I advised **him** to ask _(no_ to _before the person)_.   **5** He **told me** that it was closed / he **said to me** that it was closed.'));
out.push(A('Items **1** and **2** are the two commonest mistakes in the whole book and they should be drilled until they are automatic. ⚠ _Suggest_ and _recommend_ never take a person + _to_. ⚠ _Explain_, _describe_, _say_ and _report_ never take a person straight after them.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – that four people are involved and his October letter named none of them.'));
out.push(A('**b** **1** It said _"It was agreed in March that faulty units would be replaced within thirty days"_ — and he knows who told him, when and how, and left all three out because he thought a letter with no names in it sounded more like business.   **2** That a passive with nobody in it has no author, so nobody has to answer it — which is why nothing ever happens to that kind of letter.'));
out.push(NOTE('The reason Mazen gives for writing the sentence with nobody in it is the one to put to the class, because almost everybody in the room believes it: _a letter with names in it sounded like a complaint about people and a letter with no names in it sounded like business._ It is exactly the wrong way round, and the demonstration is one question — **who has to answer this letter?** Then the sentence that pays for the cycle: the man who told him it would be thirty days is the same man who later advised him to put the batch numbers in writing. The person telling you how to complain is usually the person the complaint goes to, and quoting their own advice back is the single most effective move in a workplace letter.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I asked Abu Fadi, on 2 November, to find the delivery notes for the January-to-March period._',
  '**2** _Issam Haddad told me, on the telephone in the first week of March, that faulty units would be replaced within thirty days._',
  '**3** _Mr Haddad advised me, on 14 October, to put the batch numbers in writing._',
  '**4** _I reminded the Shaalan counter, on 18 November, to keep the four notes that do not match._',
  '**5** _Abu Fadi warned me, in October, not to put the word "defective" in the first paragraph._',
]));
out.push(A('Insist on the comma-bracketed date in all five, because that is the shape of a sentence that can be checked: **person · date and channel · what they asked or told.** A student who can produce that sentence on demand can write a usable complaint, a usable handover and a usable minute, and most people in professional life cannot.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Issam Haddad told me in the first week of March, on the telephone, that faulty units would be replaced within thirty days.',
  '**A:** I asked Abu Fadi to find his delivery notes for that period.',
  '**A:** Mr Haddad advised me, on 14 October, to put the batch numbers in writing.',
  '**A:** And I reminded the Shaalan counter to keep the four notes that do not match the batch.',
  '**B:** None of the four has nobody in it — but the third one has no channel, so I could not tell you whether that advice was given on the telephone or in a letter, and if it was a letter you should attach it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Between a third and a half of all sentences spoken have nobody in them, and the missing person is nearly always the one who **gave the instruction** — not the one who carried it out. That is why nobody ever answers for an instruction: the carrying-out is remembered with a name on it and the giving is remembered as _we were told_.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The second trolley. I was told in February that it had gone to the workshop — and I do not know who told me, which I am saying out loud because it is the whole problem. I asked the equipment office, by telephone, in April, to tell me when it was coming back, and I did not get a name. In November the woman who answered told me that nobody from the ward had ever telephoned, which cannot both be true. Nobody has ever advised me to put any of it in writing._',
  '**b** _My partner says the February name is findable in one question — ask the two people who were on that night who told them — and that the April call has a name attached somewhere, because the office logs calls, and I can ask the woman who told me nobody had telephoned to look February and April up._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen has been writing this letter to the distributor since October and could not see what was wrong with it, and Nour read it on Tuesday, asked one question and the whole thing fell over. She asked him who. The first sentence said: "It was agreed in March that faulty units would be replaced within thirty days." And she asked: agreed by whom, with whom, and who told you so? He knows all three answers and not one was in the letter — a man called Issam Haddad, on the telephone, in the first week of March, told him that faulty units would be replaced within thirty days, and he is the same man who later asked which batch the fifteen came from. Mazen wrote a sentence with nobody in it because he thought it sounded more official: a letter with names in it sounded to him like a complaint about people and one with no names sounded like business, and he says it is the other way round. The new first page has four people on it. Issam Haddad told him in March. He asked Abu Fadi in Mezzeh to find his delivery notes and he found eight. He asked the man in Shaalan to do the same and he refused, so he asked Abu Fadi to telephone him, and Abu Fadi persuaded him to check, and eleven of the fifteen came from one batch. And Issam Haddad himself advised him to put the batch numbers in writing — a sentence Mazen would be mad not to quote, because the person telling him to write the letter is the person the letter goes to. Mazen sat on it for six weeks because he thought names were impolite. The old letter was two pages; the new one is one page with nine names and dates on it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He suggested me to wait. → ✓ suggested **that I should wait** / suggested **waiting**.   ✗ She explained me the form. → ✓ explained the form **to me**.   ✗ I advised to him to ask. → ✓ advised **him** to ask.   ✗ He said me it was closed. → ✓ **told** me.   ✗ He told me not writing them down. → ✓ told me **not to write** them down.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That it _had nobody in it_.'));
out.push(A('**2** Eleven of fifteen — the figure the paper shows — and he says so because he had predicted twelve: _I am giving you the figure that is on the paper and not the one I predicted._'));
out.push(A('**3** He is asking them to tell him, by 8 December, whether the January-to-March batch of that model has a different adhesive specification. He says twice what he is not doing: he is **not asking them to replace anything** and he is **not making a claim**.'));
out.push(A('Two things to teach from this letter. The **limited claim** — _a telephone call, that week, that sentence_ — which is stronger than an unlimited one because the reader can check it. And the **single request with a single date and an explicit non-request**: a letter that asks for a specification cannot be answered with a refusal to replace anything, which is exactly what the October letter invited.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE EQUIPMENT OFFICE · drug trolley, Ward 4** · R. Barakat · November',
  'I telephoned your office in April. That call produced nothing in writing, including a name, and that is partly my fault.',
  '**Who told me, when, and how.** I do not know who told me, in February, that the trolley had gone to the workshop. I am saying that plainly rather than writing a sentence with nobody in it: somebody on the ward told me on a night shift and I did not ask.',
  '**What I asked, and whom.** I telephoned your office in April and asked whoever answered to tell me when it would come back. I did not ask for a name. On 19 November I telephoned again and the woman who answered told me that nobody from the ward had ever telephoned, and that the trolley has been marked "awaiting collection" since September.',
  '**What the paper shows.** Twenty-six late finishes out of thirty-one in October, from my own sheets.',
  '**Who advised me to write this.** The woman who answered on 19 November. She told me that a note from a ward moves a item up the list, and she offered to put one on.',
  '**What I am asking you to do, and by when.** I am asking you to tell me, by 10 December, the date the trolley will be returned, and the name of the person I should telephone about it. I am not asking for a second trolley in this letter.',
  '**And what I shall do if I have no answer.** Write again on 11 December and attach the October sheet.',
]));
out.push(S('Stage 7 · Write freely (sample, 187 words)'));
out.push(SAMPLE([
  '**TO THE REGIONAL SALES OFFICE · claim for fifteen handsets, counter 2, Shaalan branch** · M. Hariri · 24 November',
  'I wrote to you in October. That letter said that it had been agreed in March that faulty units would be replaced within thirty days. I am writing again because that sentence had nobody in it, and this one does.',
  '**Who told me, when, and how.** Mr Issam Haddad, of your office, told me on the telephone in the first week of March that faulty units would be replaced within thirty days. I did not minute the call and I am not claiming more than I can support: a telephone call, that week, that sentence.',
  '**What I asked, and whom.** I asked Abu Fadi at the Mezzeh branch to find his delivery notes, and he found eight of the fifteen. I asked the Shaalan counter to do the same and was refused; I then asked Abu Fadi to telephone him, and he persuaded him to check, which produced the remaining seven.',
  '**What the notes show.** Eleven of the fifteen came from one batch — the January-to-March batch — and four did not. I had predicted twelve, and eleven is what the paper says, and I am giving you the figure that is on the paper and not the one I predicted.',
  '**Who advised me to write this.** Mr Issam Haddad. On 14 October he asked me which batch the fifteen came from, and when I said I did not know he advised me to put the batch numbers in writing. This letter is that, eleven days later than it should have been, and the delay is mine.',
  '**What I am asking you to do, and by when.** I am asking you to tell me, by 8 December, whether the January-to-March batch of that model has an adhesive specification different from the batches before and after it. I am not asking you to replace anything in this letter and I am not making a claim in it.',
  '**And what I shall do if I have no answer.** I shall write again on 9 December, attaching this letter and the fifteen dates, and copy it to the Mezzeh branch.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"Reading this as the sales office, the sentence that obliges me to answer is the one quoting my own advice, and I would not have noticed the letter without it. I would take out the words "and the delay is mine", because you have already given me the eleven days and the admission reads as though you expect me to make something of it. And my question is why you want the specification rather than the replacement, because I can answer the specification question in a morning and I would like to know what you will do with the answer."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the names, and count the sentences that still have nobody in them. Then the question to send the room away with: **which of the missing names could you find out this week by asking one person?** Usually most of them. The passive with nobody in it is almost never a secret — it is a habit, and it is curable in about four minutes per sentence.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The sentence with nobody in it was "the hall is not available after four". I asked the caretaker who decided it. He said nobody decided it: the key used to be held by a man called Ustaz Nabil who left at four, and there has been a second key in the office since 2016. So the sentence is not a rule and there is no author, because there was never a decision — and the name in it is a man who stopped working there nine years ago. I have written that down and taken it to the deputy head, who did not know either.']));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  One week, in its verbs'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the instruction to enforce is **no explanation**. One sentence, one pattern, nothing after it. Write only the pattern each student used, not the content: the board fills up with two or three patterns and the room sees immediately that most of them reached for _I agreed to_ and almost nobody reached for _I avoided_.'));
out.push(A('**b** **1** verb + -ing _(put off)_   **2** verb + to _(managed)_   **3** verb + object + to _(asked)_   **4** preposition + -ing _(responsible for)_   **5** the **to** pattern — _remembered to send_, an instruction carried out   **6** the **-ing** pattern — _remember sending_, a memory. Items 5 and 6 are the 18.3 pair arriving inside the sorting exercise, and it is worth saying so.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – that most of the week, by hours, is in the _-ing_ verbs: seven lines against four.'));
out.push(A('**b** **1** The four things she agreed to and managed — _I thought my week was made of the things I agreed to and managed._   **2** That the _to_ verbs measure what you **committed to**, which is the week as it appears in a report and what you will be judged on; and the _-ing_ verbs measure what you **did not do**, which is the week as it actually went, takes most of the hours, and appears in no report anywhere.'));
out.push(NOTE('Two findings come out of this cycle and the second is the one worth the lesson. The first is the count: the _-ing_ list is longer, and that surprises almost everybody, because **avoiding something is not free** — it is done several times a day, deliberately (18.1). The second is the grouping: **seven avoidances are almost never seven problems.** Rasha\'s four were one question — whether she wants the post — and she had been carrying them as four jobs, which is why none of them was finished. Insist on the grouping step. A page that leaves the list as seven produces seven half-actions; a page that groups it produces one decision.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I agreed to cover two of Sister Nasr\'s shifts._',
  '**2** _I failed to write the trolley paragraph, which is five weeks late._',
  '**3** _I avoided reading the committee\'s own minute of my report._',
  '**4** _I put off asking whether the second trolley is coming back._',
  '**5** _I asked the ward clerk to find me the April figures._',
]));
out.push(A('No commentary is needed on these five except the discipline: not one of them contains a _because_. The moment a line in either list acquires a reason it becomes a defence and stops counting, and students will add reasons to the _-ing_ lines in particular, because those are the lines that feel as though they need one.'));
out.push(S('Stage 3 · Practise (sample – the three groups)'));
out.push(SAMPLE([
  '**A:** I agreed to cover two shifts. I managed to get the April figures. I arranged to see the manager on the eleventh. I failed to write the trolley paragraph.',
  '**A:** I kept putting off writing the trolley paragraph. I avoided telling Sister Nasr about the error on her sheet. I avoided reading the committee\'s minute. I put off asking about the second trolley. I stopped recording the handover times and told nobody. I kept meaning to answer an email. I have been avoiding deciding whether I want the post.',
  '**A:** I asked the ward clerk to find me the April figures.',
  '**B:** Four against seven, and one line in the third group. And four of your seven are the same thing: the paragraph, the minute, the trolley question and the post are all one question, which is whether you want the post.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The _-ing_ list is longer for about three people in four, and it groups into one or two things for almost everybody. The useful observation for the class is that the **partner** can nearly always see the grouping and the writer nearly never can, which is the argument for doing this exercise out loud with somebody rather than alone in a notebook.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Committed: agreed to take the Tuesday handover for the month; managed to get three of the five delivery notes; failed to send the letter. Did not do: put off telephoning the distributor; avoided asking the Shaalan man a second time; avoided counting the four that do not match; stopped keeping the fault book daily about a month ago and told nobody; kept meaning to read Issam Haddad\'s October note properly. Who moved whom: Issam Haddad asked me which batch they came from, and I asked Abu Fadi to telephone Shaalan. Three and five and two. The five is longer and yes, it surprises me._',
  '**b** _My partner says four of my five are one thing: I do not want to find out that the fifteen are not one batch, because then it is the model and it is a bigger letter. And she is right, and I have been calling it five jobs since October._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha wrote last week out as nothing but verbs — eleven lines — and it has told her something about the week that she did not know when she was in it. The to half is four lines: she agreed to cover two shifts, managed to get the April figures out of the office, arranged to see the manager on the eleventh, and failed to write the trolley paragraph. The other half is seven, and it is the part that has kept her awake: she kept putting off writing the trolley paragraph; avoided telling Sister Nasr that her sheet has an error in it; avoided reading the committee\'s own minute of her report; put off asking whether the second trolley is coming back; stopped recording the handover times about three weeks ago and told nobody; kept meaning to answer an email; and has been avoiding deciding whether she actually wants the post if they offer it. Seven against four — and when somebody asks her about last week she would describe the four. She thought her week was made of what she agreed to and managed; most of the week, by hours, was the other seven, because avoiding something is not free and she did each of those several times. The asking verbs are almost none: one, the ward clerk and the April figures. Nobody asked her to do anything all week in a sentence she could quote. Ms Huda said the two halves measure different things: the to verbs measure what you committed to, which is the week as it appears in a report; the -ing verbs measure what you did not do, which is the week as it actually went and appears in no report anywhere, because nobody has ever been asked at work to list what they avoided. And Rasha said the seven are not seven problems: four of them are the same problem, and she has been treating them as four jobs. The one thing is that she does not know whether she wants the post, and everything else on the list is a way of not finding out.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I agreed covering two shifts. → ✓ agreed **to cover**.   ✗ I put off to write it. → ✓ put off **writing**.   ✗ I asked to the clerk to find it. → ✓ asked **the clerk** to find it.   ✗ I failed writing it. → ✓ failed **to write** it.   ✗ A line with _because_ in it → ✓ cut the _because_; the lists carry no reasons.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four and seven. The four are what a report is made of; the seven are what the week was made of.'));
out.push(A('**2** The trolley paragraph, the minute she has not read, the question she has not asked about the trolley, and the post — and she says they are all the same question, carried as four jobs, which is why none of them is finished.'));
out.push(A('**3** Read the minute tonight; tell Sister Nasr on Monday before the round; write the trolley paragraph on Tuesday whether she has decided anything or not; and write one page about the post, for nobody, on Saturday — which is the thing she says she has actually been avoiding for five weeks.'));
out.push(A('The order of those four actions is the lesson. Three of them are small, dated and easy, and the fourth is the one the whole list was about. A page that stops at the grouping produces the three; the fourth only appears because she made herself write _the one thing_ down first, and a class should be told that the fourth action is the point of the exercise.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WEEK OF 18–22 NOVEMBER, IN ITS VERBS** · M. Hariri · written Saturday',
  '**What I committed to — three lines.** I agreed to take the Tuesday handover for the month. I managed to get three of the five outstanding delivery notes. I failed to send the letter, which is now six weeks late.',
  '**What I did not do — five lines.** I put off telephoning the distributor. I avoided asking the Shaalan man a second time. I avoided counting the four notes that do not match. I stopped keeping the fault book daily about a month ago and told nobody. I kept meaning to read Mr Haddad\'s October note properly.',
  '**Who moved whom — two lines.** Mr Haddad asked me, on 14 October, which batch the fifteen came from. I asked Abu Fadi to telephone Shaalan.',
  '**The two numbers.** Three and five.',
  '**What the second list groups into.** Four of the five are one thing: I do not want to find out that the fifteen are not one batch, because then it is the model and it is a bigger letter to a bigger office.',
  '**And the one thing.** I would rather have a small problem I can write about than a large one I cannot, and I have spent six weeks keeping it small by not counting.',
  '**What I shall do, with days.** Count the four notes tonight. Read the October note tonight as well — it is one page. Telephone the distributor on Monday. And write the letter on Tuesday for whichever problem the counting produces.',
]));
out.push(S('Stage 7 · Write freely (sample, 184 words)'));
out.push(SAMPLE([
  '**WEEK OF 18–22 NOVEMBER, IN ITS VERBS** · R. Barakat · written Saturday, for nobody',
  '**What I committed to — four lines.** I agreed to cover two of Sister Nasr\'s shifts. I managed to get the April figures out of the office, after asking twice. I arranged to see the manager on 11 December. I failed to write the trolley paragraph, which is now five weeks late.',
  '**What I did not do — seven lines.** I kept putting off writing the trolley paragraph. I avoided telling Sister Nasr that there is an error on her sheet for the week of 3 November. I avoided reading the committee\'s own minute of my report, which has been in my bag since the eighteenth. I put off asking whether the second trolley is coming back. I stopped recording the handover times about three weeks ago and have told nobody that I stopped. I kept meaning to answer an email. And I have been avoiding deciding whether I want the post if it is offered.',
  '**Who moved whom — one line.** I asked the ward clerk to find me the April figures. Nobody asked me to do anything all week in a sentence I could quote.',
  '**The two numbers.** Four and seven. If anybody asked me about last week I would give them the four, because the four are what a report is made of and the seven are what the week was made of.',
  '**What the seven group into.** Four of the seven are one thing: the trolley paragraph, the minute I have not read, the question I have not asked about the trolley, and the post. All four are the same question and I have been carrying them as four jobs, which is why none is finished.',
  '**And the one thing.** I do not know whether I want the post. Everything on that list except Sister Nasr\'s sheet and the email is a way of not finding out.',
  '**What I shall do, with days.** Read the minute tonight. Tell Sister Nasr on Monday, before the round. Write the trolley paragraph on Tuesday whether I have decided anything or not. And write one page about the post, for nobody, on Saturday.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"Reading this as somebody deciding whether to give you more work, the page makes me want to give you the post and wait until Saturday to ask, which is probably not what you expected. I would put the two numbers at the top rather than in the middle, because they are the finding and everything above them reads as a list until you reach them. And my question is what you will do with the Saturday page, because you have written it for nobody and the one thing on your list that is actually urgent is the only one with no reader."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts, and the second is the one to end on: for how many did the second list collapse into **one thing**? Tell the room to write that thing somewhere they will see it, and then say the sentence that makes the cycle land — a week spent avoiding one decision looks exactly like a busy week from the outside, and it looks like a busy week from the inside too, which is why it can go on for months.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I read the minute. It is one page and it has been in my bag for a month. It extends the trial to all night staff, it does not mention the blocks as a cause, and in the last line it says that the ward manager has been asked to discuss "the post of night practice lead" with me before the end of the year. So the thing I have been avoiding for five weeks is in writing, in my own bag, with a date on it — and I have been treating it as a thing that might happen. It took four minutes to read and I shall write the Saturday page on Saturday.']));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: Nine lines on a wall'));
out.push(S('Stage 1 · Unit 18 quiz – corrections'));
out.push(A('**1** He suggested **that I should wait** / he suggested **waiting**.   **2** She explained the form **to me**.   **3** I avoid **going** back.   **4** She refused **to make** the call.   **5** I am interested in **answering** them.   **6** **Remember to check** the oil before you leave.'));
out.push(A('Items **1** and **2** are the two that must not survive into Unit 19, and item **6** is the one that matters most in the world outside the classroom, because it is the difference between an instruction and a remark about somebody\'s memory.'));
out.push(S('Stage 2 · Listen and read — the prediction board, and the sheet'));
out.push(A('**The four test dates that have fallen.** **M. Hariri, 30 September:** eleven of fifteen from one batch, against a prediction of at least twelve — **wrong by one, right about the reason** (both shops take stock from the same distributor; it was a batch and not a model). **S. Dibo, 27 October:** the meeting happened and nothing was decided, as predicted — and the thing she had written as _what would surprise me upwards_ happened: a letter with a date in it, the twentieth of January. **R. Barakat, 31 October:** extended to all night staff from 27 October and the minute does not mention the blocks — **right in both halves**. **T. Ayoub, 30 November:** the Harasta road closed on the nineteenth for four days, south side, resurfacing — **right, and right for the reason written down in September**.'));
out.push(A('**The three lines Tareq says give the wrong instruction:** line **2** (_remember checking the oil_ — a remark about memory, not an instruction), line **3** (_do not forget telling the fitter_ — the same fault the other way round) and line **4** (_stop to telephone the depot_ — which tells a driver to telephone and keep driving). The other three faults are different in kind: line **6** is simply wrong English and clear anyway, line **7** has nobody in it, and line **9** (_try to use the second mirror_) tells a driver it will be difficult.'));
out.push(NOTE('Ms Huda\'s own prediction was that eight of the eleven would be right about the event and wrong about the reason. Of the four tested, three were right about the event **and** right about the reason, so she is wrong so far — and what she does with that is the point of taking the board down at all. She says what she got wrong: she predicted from six years of her own sheets with six other classes, and left out of a prediction about her own course the fact that **this class has spent a year being made to write a reason with a count in it underneath every claim**. The three who were right in both halves had counted patterns (three of the last four years; a committee\'s incentives; one distributor behind two shops); Mazen, the one who was wrong, had a judgement with a number attached. Omar\'s line — _so the course was the variable you left out_ — is the sentence to end the board on, and it is the same blind-half discipline the class has been writing at the bottom of every page since 14.1.'));
out.push(S('Language box – reading and mending an instruction sheet'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. The test is one question: **what would somebody do if they followed this exactly?** — not what does it mean. Then sort the faults into three kinds, because they need three different answers: lines that give the **wrong instruction** (urgent, and the only ones worth a letter); lines that are **bad English and clear anyway** (embarrassing, harmless, and fatal to mention); and lines with **nobody in them** (the ones nothing ever happens about — 18.5). Then **rewrite rather than criticise**, and take **one line, not six**.'));
out.push(A('_One line, one fault, one rewrite_ is the whole mediation discipline of the cycle, and students will resist it, because having found six faults they want credit for six. Give them Tareq\'s sentence: _nobody has ever been persuaded of anything by that sentence._ A note about line four is read as a note about line four; a note saying six of nine lines are wrong is read as an attack on whoever wrote the sheet, and whoever wrote the sheet is the person who has to change it.'));
out.push(S('Stage 3 · Practise (sample – Sheet A, a ward medicines notice)'));
out.push(SAMPLE([
  'Six lines. Three of them read badly and one of them is dangerous.',
  '**The line that gives the wrong instruction is line 3:** _if the dose looks wrong, stop to telephone the pharmacy._ Followed exactly, that means: pause whatever you are doing in order to telephone the pharmacy — and then carry on. What it must mean is: do not give the dose. A nurse who read it exactly would telephone the pharmacy and give the dose while waiting, which is the only outcome on that notice that could hurt somebody.',
  '**The rewrite.** _"If the dose looks wrong: **1** do not give it. **2** telephone the pharmacy on 212. **3** write the time and the reason on the chart."_ Three numbered steps and not one of the five verbs.',
  '**What I would leave alone.** Line 4 — _it is suggested staff to report any error the same shift_ — is wrong English and perfectly clear, and mentioning it would turn a safety note into a grammar lesson. Line 2, _remember signing the second column_, I would also leave for now, because it is the same fault as line 3 without the danger.',
  '**The line with nobody in it** is line 5: _any error will be recorded._ By whom, where, and who reads it?',
  '**Our one line, in two minutes.** We agreed on line 3 and we disagreed about why: I would write to the author because of what a new nurse would do, and my partner would write because of what a nurse on her fifth night would do, which she says is more likely and more dangerous.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('On Sheet A it is nearly always line 3 and on Sheet B line 2, for the same reason in both cases: those are the lines where following the instruction exactly means **carrying on with something dangerous while telephoning somebody about it**. The lines that merely read badly get left alone, and that restraint is the hardest part of the cycle to teach and the only part that works in a real building.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own sheet, explained without being shown. The three questions are the assessment: _which lines are merely badly written?_, _which line has nobody in it?_ and _who knows what the sheet was originally for?_ Expect at least one student to find a line they have been following wrongly, and one to find a line they wrote themselves.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['The sheet went up in the depot muster room in September and Tareq has read it about sixty times. Six of the nine lines are badly written and three of them actually tell you to do the wrong thing, and he says he could not have told you which was which before this unit. The three: line two, remember checking the oil, which is not an instruction but a remark about his memory — the instruction is remember to check. Line three, do not forget telling the fitter, the same fault the other way round; it should be do not forget to tell. And line four, which is the dangerous one: if a warning light comes on, stop to telephone the depot — that says pause whatever you are doing in order to telephone, and what they mean, and what every driver actually does, is stop driving. A new driver following that line exactly would telephone the depot and carry on to Harasta. The other three: line six is simply wrong English, it is suggested drivers to report, and nobody is confused by it, which is worse in a way because it has been on a wall for three months and nobody has said anything; line seven has nobody in it — any defect will be reported to the office, by whom, to whom, by when; and line nine says try to use the second mirror, which tells a driver it will be difficult, when what they want is use the second mirror when reversing. And the mediation: he does not say that six of nine lines are badly written, because nobody has ever been persuaded of anything by that sentence. He says that line four tells a driver to telephone and keep driving, and here is the rewrite in two numbered steps — one line, one fault, one rewrite — and he puts Abu Khaldoun\'s name at the bottom, because he can tell them what the sheet was for in the first place.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 4'));
out.push(A('**1** C   **2** A   **3** D   **4** B   **5** C'));
out.push(A('_Notes:_ **2** the obstruction was the technician repeatedly saying he had been told not to write the codes down — **B** is contradicted (he telephoned every time) and **C** is the opposite of the text. **3** _that assumption is not a weakness; it is the whole basis on which written procedure works_ — **C** is contradicted by the next clause. **4** _a wrong instruction looks odd to him and he does what seems sensible instead_. **5** the writer says explicitly that he has **stopped** asking organisations to make their people more careful, which kills **A**, and the recommendation has two halves: remove the five verbs, and ask the people who use the sheets.'));
out.push(NOTE('Reading Part 4 is a long text with five four-option questions, and in this set four of the five are **purpose, attitude or summary** questions rather than fact questions. Two habits are worth the ten minutes. For a _why does the writer say…_ question, read the sentence **after** the quoted phrase, because that is where a writer says what it was for — item 3 is answered by the clause that follows _I thought there was a reason_. And for the last question, which is nearly always the writer\'s real point, look for the paragraph that begins with a reversal: _so I have stopped asking…_ The distractor that trips candidates is the one built from what the writer **used to** think.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**DRIVERS\' DAILY CHECK · line 4** · T. Ayoub · 27 November',
  'I am writing about one line of the muster-room sheet, which has been up since September. The other lines are not the subject of this note.',
  '**The line as it stands.** "If a warning light comes on, stop to telephone the depot."',
  '**What somebody following it exactly would do.** Telephone the depot and keep driving. _Stop to telephone_ means pause in order to telephone, and then continue. A driver of fifteen years reads it the way you meant it; a driver in his first month reads what it says.',
  '**What I believe it was meant to say.** Stop the bus, then telephone.',
  '**The rewrite.** "If a warning light comes on: **1** stop the bus where it is safe to. **2** telephone the depot on 338. **3** do not move off until you are told to." Three numbered steps, and none of the five verbs that can be read two ways.',
  '**Why this one and not the others.** Because this is the only line on the sheet where following it exactly could hurt somebody. There are other lines I would write differently and they can wait.',
  '**And who can tell you what the sheet was for.** Abu Khaldoun, in the yard since 1989. The sheet is the end of an arrangement that had reasons, and he is the only person left who knows them.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2 (sample, 158 words)'));
out.push(A('Out of 15, **140 words or more**. The **article** must answer all three parts of the notice — what the instruction said, what you did, and how it was finally noticed — and the best scripts quote the instruction word for word. The **story** must begin with the given sentence exactly as printed.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 158 words)**',
  '**Two words on a card**',
  'For three weeks last month I did not write down a single error code, and I was following my instructions exactly.',
  'A card was taped to the machine I work on. It said: "If the red light comes on twice, stop logging the error and call me." I read it every time the light came on, because I did not want to make a mistake. I stopped logging the errors and I telephoned.',
  'Every time I telephoned, my supervisor asked me for the code. Every time I told him the card said not to write them down. I could hear that he did not believe me, and I thought there must be a reason for the instruction that he had not explained.',
  'On the Tuesday I took the card off the machine, carried it to his desk, put it down and pointed at the second line. He read it twice and said nothing for about ten seconds.',
  'He had meant _stop to log_ — pause and write it down. He had written _stop logging_ — give it up. Two words in the wrong order, three weeks of a machine nobody has any figures for, and nobody at fault but a card.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 149 words)**',
  'He brought the card to my desk, put it down and pointed at the second line with his finger.',
  'I had written that card in October, in about ninety seconds, between two other jobs, and taped it to the machine myself.',
  '"You told me not to write them," he said. He had said it on the telephone eleven times and I had not listened once.',
  'I read the line. Then I read it again, because the first time I read what I had meant and the second time I read what was there.',
  '"How long?" I asked him.',
  '"Three weeks. Every time. I read it every time so that I would not get it wrong."',
  'I asked him why he had not told me it made no sense, and he looked at the card and said: "I thought there was a reason."',
  'The engineer came the next day and asked for the codes. I gave him seven. There should have been about thirty, and the other twenty-three are in a man\'s head, where I had told him to keep them.',
]));
out.push(S('Unit 18 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** c   **4** b   **5** c   **6** a   **7** b   **8** c'));
out.push(A('_Notes:_ **3** _suggest_ takes **-ing**, never a person + _to_ and never a plain infinitive. **5** _advise_ needs the person with **no** _to_ before it. **6** the gloss decides it — _give it up_ is _stop **logging**_. **7** _explain_ never takes a person straight after it. **8** _afraid **of** being asked_ — the situation, not the action.'));
out.push(S('Unit 18 check  ·  B  Listening (Part 2, matching) – Track 18.15'));
out.push(A('**1** A   **2** E   **3** C   **4** B   **5** G.   Not needed: **D**, **F**, **H**.'));
out.push(A('Speakers **1** and **3** are the pair to replay. Speaker 1 never uses the word _verb_ and never names either pattern — the answer comes from _two words, and they were the wrong way round_ plus the two opposite meanings. Speaker 3 is the one candidates lose: she describes a refusal that worked, so weak candidates look for an option about success, and the fault she names is in the last clause — _there is nothing on paper anywhere_.'));
out.push(NOTE('Listening Part 2 here is five speakers matched to eight options, with three not needed, and it is lost by matching on a **word** rather than on a **fault**. Two habits: in the pause, read the eight options and underline the **fault** in each one, not the topic, because several speakers will mention the same topic; and when two options seem to fit, choose the one the speaker says is the **real** fault — in these scripts it is nearly always in the final sentence, which is where somebody who has thought about it puts the point. Tell candidates to cross out an option once it is used: the three spare letters are there to make a wrong first choice spread.'));
out.push(S('Unit 18 check  ·  C  Writing (sample, 176 words)'));
out.push(SAMPLE([
  '**STORE ROOM NOTICE · line 1** · F. Haddad · November',
  'I am writing about one line of the store-room notice, which has been on that wall since 2019. The rest of it is not the subject of this note.',
  '**The line as it stands.** "Staff are reminded to not remove boxes from the lower racks without telling the storeman."',
  '**What somebody following it exactly would do.** Tell "the storeman" — and there are two, they work different days, and the notice does not say which. A new man would tell whichever one he found, or neither, and would be able to say truthfully that he had followed the notice.',
  '**What I believe it was meant to say.** Record the box and tell whoever is on stores that day.',
  '**The rewrite.** "Before you take a box off a lower rack: **1** write the box number and the date on the pad by the door. **2** tell Abu Samir, or on Fridays Majid." Two numbered steps, two names, and a pad that will have to be bought, because the pad in the old notice does not exist and has not existed in my six years here.',
  '**Why this line and not the others.** Because it is the only line on the notice that asks somebody to tell a person, and it does not say which person. The others are untidy and nobody has ever been misled by them.',
  '**And who can tell you what the notice was for.** Abu Samir, seventeen years. He says the lower racks were the ones nearest the door when the room was laid out the other way round, and the room was turned round in 2014.',
]));
out.push(S('I can… (Unit 18)'));
out.push(A('Self-assessment; no answers. The three that matter are the third, the sixth and the eighth: telling _stop to_ from _stop -ing_, never writing _suggested me to_ or _explained me_, and finding the line on a sheet that gives the wrong instruction. A class that ticks the two lists and not those three has learnt some vocabulary and nothing that will change a document.'));
out.push(box('Looking ahead to the Mid-Book Test and Unit 19', [
  '**The Mid-Book Test comes next** — Units 13–18, sixty marks: Reading 20, Writing 15, Listening 15, Speaking 10. Nothing in it is new. The two places marks are lost are the four habit forms from Unit 17 and the conditionals from Unit 15; the verb patterns from this unit are not a section of the test because they are in every section of it.',
  '**Then Unit 19: complaints and resolutions.** Mazen\'s letter in 18.5 was a complaint that named everybody, and Unit 19 is the whole sequence — stating the fault, saying what you have already tried, asking for one thing, and the cycle students find hardest, which is **accepting a resolution that is not what you asked for and saying so without resentment**.',
  '**The peer-review slip changes from Unit 19.** Units 13–18 used three sentences with no stems. From Unit 19 the reviewer **names the criterion** before saying anything — _on the one-request rule_, _on naming the person_ — because from there on the class is reviewing against a standard rather than giving an opinion. Make the change explicitly in 19.1 and do not let it slide back.',
  '**And the 19.1 material to ask for now:** one unresolved complaint each, with the dates and with the name of whoever told them what. A class that arrives with grievances and no names spends 19.1 relearning 18.5.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 18 · Answer Key');
