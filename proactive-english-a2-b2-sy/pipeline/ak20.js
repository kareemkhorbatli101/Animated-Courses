// Proactive English A2 · Syria Edition · Book 2 · Unit 20 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 20  Services and Repairs — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Two errors to mark every time:** _they did it **good**_ (→ **well**) and _he works **fastly**_ (→ **fast**). Both are fossilised by A2 and neither goes away by being explained; they go away by being corrected forty times.',
  '**The idea underneath the unit** is that an adverb without evidence is an opinion. _He works carefully_ means nothing until you add _he shows you the old part_. That is what turns Unit 20 from vocabulary into writing.',
], C.lblue, C.navy));

// ===================== 20.1 =====================
out.push(pb());
out.push(h2('20.1  He works quickly but he explains badly'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Two adverbs per verb, one good and one bad, is the shape of every review in this unit — get it on the board and leave it there.'));
out.push(A('**b** quick → **quickly** · slow → **slowly** · careful → **carefully** · bad → **badly** · good → **well** · easy → **easily** · fast → **fast** · hard → **hard**'));
out.push(NOTE('The last three are the whole exercise. _well_, _fast_ and _hard_ are the three the class will get wrong all unit, so write them in a different colour and point at them rather than explaining again.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – three.'));
out.push(A('**b** **1** It works quickly and it works well — and it explains badly, which Omar says means not at all.   **2** Because he works carefully, charges honestly, and will tell you exactly what he did and show you the old part.'));
out.push(S('Language box · Practise'));
out.push(A('**1** He works very **quickly**.   **2** She is a **careful** driver.   **3** They explained it **badly**.   **4** He speaks English **well**.   **5** She works **hard** and she arrives **early**.   **6** The machine broke **easily**.'));
out.push(NOTE('Item 2 is the adjective (it describes the **driver**) and item 5 has two no-change adverbs in one sentence. If a student writes _hardly_ in 5, stop everything: _she **hardly** works_ is the opposite of what the sentence means, and it is the single most expensive vocabulary error at this level.'));
out.push(S('Stage 3 · Practise (sample – Card A, a mechanic)'));
out.push(SAMPLE([
  '**A:** What is he like?',
  '**B:** He works fast and he charges honestly.',
  '**A:** So that\'s good.',
  '**B:** But he explains badly. He hands you the keys and says "it\'s fine".',
  '**A:** Does that matter?',
  '**B:** It matters, because if nobody tells you what was wrong you cannot stop it happening again.',
  '**A:** So would you use him?',
  '**B:** For something small, yes. Fast is not the same as careful.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_fast · honestly · badly._   Verdict: for something small only — and yes, the **bad** adverb changed it, which is the point of asking for three.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The baker on our street** opens early and serves quickly, and wraps everything badly, and I still go every day. **My dentist** explains clearly and works slowly, and I have waited an hour twice. **My brother** fixes things well and never finishes them, and I still ask him, which says more about me than about him._',
  '**b** _I work carefully and I work slowly. The adverb I would like to be able to use is "quickly", and I have wanted it for about fifteen years._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar has been to all three shops in Mezzeh. Khalid Electronics works quickly and works well, and explains badly — which, Omar says, means not at all. Nour pointed out why that matters: she took the same machine back twice in a year with the same fault and only knows because she opened it herself. Abu Nidal works slowly, but he works carefully, charges honestly and shows you the old part. Omar\'s line is that slowly is not the same as badly.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He works good. → ✓ He works **well**.   ✗ He drives fastly. → ✓ He drives **fast**.   ✗ He quickly works. → ✓ He works **quickly**.   ✗ He hardly works. _(meaning: a lot)_ → ✓ He works **hard**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because he charges about a third more than the others and does not apologise for it — Omar respects the honesty of not pretending.'));
out.push(A('**2** He stands there for five minutes, tells you exactly what he did, and puts the old part on the counter.'));
out.push(A('**3** A repair nobody will explain to you — because a repair you cannot see is a repair you cannot judge.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO TAILORS IN JARAMANA** — I have used both',
  '**Abu Samih, by the mosque.** Works quickly — two days — and works well. Charges more than anybody and says so before you ask. Measures carelessly, which is to say he does it from memory because he has done yours before. **Use him if** you need it this week and nothing has changed about you.',
  '**Umm Ahmad, in the lane.** Works slowly, a week at least. But she measures carefully every single time and she will tell you when a thing is not worth mending. **Use her if** it matters.',
  '**The rule I have learned:** quickly and carefully are two different words, and they very rarely live in the same shop.',
]));
out.push(S('Stage 7 · Write freely (sample, 151 words)'));
out.push(SAMPLE([
  '**THREE PLACES I ACTUALLY USE IN MEZZEH**',
  '**The pharmacy on the corner.** Opens early, serves quickly, and explains badly — she reads the box to you, which you can do yourself. **Use her if** you know what you want.',
  '**The pharmacy opposite.** Opens late and works slowly, and there is always a queue. But she asks what else you are taking, every time, and twice she has told me not to buy something. **Use her if** it is new or it is for a child.',
  '**The shoe repair under the stairs.** Works slowly, charges almost nothing, and cannot be found when you go back — he is there four days a week and nobody knows which four. **Use him if** you are not in a hurry and you live nearby.',
  '**The rule I have learned:** the one who asks you a question before taking your money is the one to go back to. It is the only reliable sign there is.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"twice she has told me not to buy something" — that is the whole review in nine words._   ✓ _"charges almost nothing" has no number under it._   ? _Which one would you use in an emergency?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The review that changes where people go is always the one with a number or a specific incident in it. Say that when you collect the booklet, and then ask whose review changed somebody\'s mind — usually two or three hands go up, which is more than most writing exercises achieve.'));
out.push(S('Homework (sample – the shop\'s review of you)'));
out.push(SAMPLE(['**The customer in flat 7.** Explains the fault badly — she tells us what she thinks is wrong instead of what the machine does, every time, and we have given up correcting her. Pays immediately and in full, which about half do not. Rings on the day we said, not before, which almost nobody manages. And she asks what broke first, which four customers in a year do. We would rather have ten of her than one of the ones who says "quickly".']));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  Could you say it more slowly?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Doing it badly on purpose is worth the small loss of dignity: students who would never interrupt a teacher will interrupt one who is visibly performing, and the sentences come out.'));
out.push(A('**b** slowly → **more slowly** · carefully → **more carefully** · clearly → **more clearly** · well → **better** · fast → **faster** · hard → **harder**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – explain it again more slowly.'));
out.push(A('**b** **1** To say it again more slowly, and to write the two parts down more clearly than the receipt. (She also asks which part broke first.)   **2** Explain it better the first time.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _I\'m sorry — could you speak more slowly?_   **2** _Could you write it more clearly? I can\'t read it._   **3** _Could you explain that again, more simply?_   **4** _Could you do it more carefully? It has to last._   **5** _Could you come a bit earlier next time?_'));
out.push(NOTE('Mark the **politeness** as hard as the grammar. _Speak more slowly_ is grammatically perfect and is an order. _Could you_ + the comparative is the whole function, and students who know the grammar still produce the order.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The bearing has gone, the belt is stretched, the pump is fine, eighty-five with parts.',
  '**B:** I\'m sorry — could you say that again more slowly?',
  '**A:** (slower) The bearing. The round part the drum turns on. That has gone.',
  '**B:** Thank you. And could you write the parts down more clearly than the receipt?',
  '**A:** Nobody can read the receipt.',
  '**B:** And could you tell me which part broke first?',
  '**A:** That is the right question and most people do not ask it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_say it again more slowly · write it more clearly · tell me which broke first._ — None sounded rude, because all three began with _could you_. The one that would have sounded rude is _write it clearly, I can\'t read that_.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_My manager gives instructions as he is walking away. The sentence: "Mr Fouad — could you give me that again more slowly? I would rather ask now than do it twice."_',
  '**Partner:** _I would not be offended by that. The second half is what makes it safe — it says the asking is for your benefit, not a criticism of him._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina asked the technician three things. Could he say it again more slowly — he did, and the second version used ordinary words. Could he write the two parts down more clearly than the receipt, because nobody can read the receipt. And which part broke first: he said that is the right question and most people do not ask it. The bearing went first, and the noise she told him about in January was the bearing. He said he would explain it better the first time next time.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Could you speak more slow? → ✓ more **slowly**.   ✗ more better → ✓ **better**.   ✗ Could you to say it again? → ✓ Could you **say** it again?   ✗ Say it again more slowly. _(as a request)_ → ✓ **Could you** say it again more slowly?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because people only write when something is wrong — so a message that opens with what was good is both fair and far more likely to be acted on.'));
out.push(A('**2** That the clear, slow version should be the **first** one, not the second — it would be easier for everybody.'));
out.push(A('**3** Telling a customer **which part broke first**, which is what tells them what to do differently.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Al-Yasmin Language Centre   **Subject:** The spring timetable — thank you, and two small things',
  'Dear Mr Bassam,',
  'The new timetable is on the website and it is much easier to read than the paper one, and I am writing first to say so, because people only write when something is wrong.',
  'Two small things, both about finding it rather than about the timetable itself.',
  'It takes four taps and the fourth one is not obvious. It would be easier if the link were on the first page.',
  'And the test times are in a different place from the class times. Could they be on the same page?',
  'Yours faithfully,',
  'Hiba Khalil',
]));
out.push(S('Stage 7 · Write freely (sample, 146 words)'));
out.push(SAMPLE([
  '**To:** Al-Noor Clinic   **Subject:** Appointment CL-2280 — thank you, and one request',
  'Dear Dr Khalil,',
  'My mother saw you on Tuesday and she has done everything you told her, which she has not done for any doctor in nine years. She says it is because you sat down. I am writing first to say that, because I know you only hear from us when something is wrong.',
  'One request, and it is about the paper rather than the appointment. The instructions on the prescription are written very small and partly in short forms, and she could not read them without me. Could they be written more clearly — or could the person at the desk read them aloud once before people leave?',
  'It would take about twenty seconds and it would mean that the people who come alone leave knowing what to do.',
  'Yours faithfully,',
  'Maya Nasser',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"She says it is because you sat down." I would read the rest of that letter very carefully._   ✓ _Two requests in one paragraph — separate them, or the second one disappears._   ? _Do you want an answer, or did you just want me to know?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The last question is the real one. In most classes nobody sends theirs, and the reason — _it would not change anything_ — is worth putting next to the fact that this unit\'s dialogue ends with a technician saying he will explain it better next time. Somebody asked him twice.'));
out.push(S('Homework (sample – the reply)'));
out.push(SAMPLE(['Dear Ms Nasser, Thank you for writing, and thank you for the first paragraph; I have put it on the wall in the staff room, where it will embarrass me every morning. About the prescriptions: I will write them more clearly and I will stop using short forms, starting this week. I cannot ask the desk to read them aloud, because there is a queue and it would be read in front of other people, which some patients would mind more than not reading it. Instead we will print them, from April. Yours sincerely, S. Khalil']));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  They did it well and they did it cheaply'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The test the class should arrive at: _does it describe the **thing** or the **doing**?_'));
out.push(A('**b** **1** good   **2** well   **3** quick   **4** quickly   **5** slow   **6** slowly'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – telling the class how the projector was repaired.'));
out.push(A('**b** **1** Six days (he said two) and thirty-two thousand, against a hundred and twenty for a new one.   **2** That he showed her the old part and explained, without being asked, why it happened and how to stop it — he told her how to not need him.'));
out.push(S('Language box · Practise'));
out.push(A('**1** They did the job **quickly**.   **2** It was a **good** job.   **3** He explained the fault **clearly**.   **4** She is a **careful** technician.   **5** They charged us **honestly** and they finished **late**.'));
out.push(S('Stage 3 · Practise (sample – Card A, the projector)'));
out.push(SAMPLE([
  '**A:** How was the projector repair?',
  '**B:** They took six days, which was four days longer than they said.',
  '**A:** So it was bad.',
  '**B:** No. They did it well and they did it cheaply.',
  '**A:** And?',
  '**B:** And they explained it clearly, without being asked.',
  '**A:** So would you go back?',
  '**B:** Immediately. I have stopped minding about the six days.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_late · well · cheaply · clearly._ — The one that decided it was **clearly**, which is the pattern across the whole unit: the explaining decides the verdict, not the work.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The man who put our windows in worked slowly and finished late, and he worked carefully and he cleaned up afterwards, which nobody does. Worse than expected: three weeks instead of one. Better than expected: he came back in February, without being asked, to check one of them._',
  '**b (the worst service, without the word "bad"):** _They answered the telephone rudely, they arrived late twice without ringing, they worked carelessly, and they charged exactly what they said, which is the only sentence I can write in their favour._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda took the projector to Abu Nidal. He took six days — four longer than he said — and she was ready to be annoyed. He did it well and cheaply: thirty-two thousand against a hundred and twenty for a new one. But the best part was that he showed her the old part and explained, without being asked, that the fan was full of dust and that the dust is why the lamp burned out. Nour said he told her how to not need him, which Ms Huda says is the most expensive sentence a repair man can say.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They did it good. → ✓ They did it **well**.   ✗ It was a well job. → ✓ a **good** job.   ✗ He explained clearly the fault. → ✓ He explained the fault **clearly**.   ✗ They did it well cheaply. → ✓ well **and** cheaply.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because it is the review\'s one bad fact, and a reader should have it before anything else — a review that saves its bad fact for the end is not believed when it gets there.'));
out.push(A('**2** The burned-out lamp and the dusty fan cover.'));
out.push(A('**3** If you need it back by Thursday he is the wrong man; if you want it still working in two years he is the only one.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE WINDOWS IN OUR FLAT** — a review',
  '**What happened.** Two windows that did not shut, in a flat on the third floor, in January.',
  '**How long.** Three weeks. He said one. If three weeks matters to you, you should have that before anything else.',
  '**How well.** Very well. They have shut all winter and the room is four degrees warmer.',
  '**How much.** 310,000 for both. A new window was quoted at 400,000 each, so that is not a saving, that is a different decision.',
  '**What he did that nobody does.** He came back in February, without being asked, to check the one he did first.',
  '**Verdict.** If you need it done this week, he is the wrong man. If you want it done once, he is the right one.',
]));
out.push(S('Stage 7 · Write freely (sample, 157 words)'));
out.push(SAMPLE([
  '**THE CLINIC ON AL-JALAA STREET** — a review, after nine months of going there',
  '**What happened.** My mother needed somebody to see her every six weeks, and we tried three places.',
  '**How long.** You wait. Two hours is normal and three has happened. Nobody will tell you how long, and if waiting is impossible for you this is the wrong place and you should know that first.',
  '**How well.** Better than either of the others. The doctor sits down, she asks what else my mother is taking, and in nine months she has changed the dose twice because of something my mother said rather than something she measured.',
  '**How much.** 25,000 a visit. The place that does not make you wait is 60,000, and at six visits a year that is not a saving, that is the difference between going and not going.',
  '**What they do that nobody does.** They ring the next day. Every time. Nobody asks them to.',
  '**Verdict.** If your afternoon is worth more than 35,000, go elsewhere. If you want somebody who will remember your mother in June, there is nowhere else.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the difference between going and not going" — that is the only way to write a price._   ✓ _"Better than either of the others" — better how? That is an adverb with nothing under it._   ? _Would you use them for something serious?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The question to end on is the one in the book: which review is honest about something that makes its own argument weaker? _Two hours is normal and three has happened_ is a sentence against the writer\'s own verdict, and it is exactly why the verdict is believed.'));
out.push(S('Homework (sample – a bad service without the word "bad")'));
out.push(SAMPLE(['They answered the telephone unwillingly. They arrived two hours late on the first day and did not ring, and ninety minutes late on the second, and did ring, which I noticed and was grateful for, which tells you where my expectations were by then. They worked quickly and carelessly: the pipe is in and the wall around it is not. They charged exactly what they said, in full, immediately. And when I asked what they did, they explained it clearly and at length, which I would have valued more if it were true.']));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  It\'s still not working properly'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. If the class cannot separate the three in two minutes, do not explain — go straight to the dialogue, which does it for you.'));
out.push(A('**b** **1** still   **2** again   **3** properly'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – it works but not properly.'));
out.push(A('**b** **1** The screen goes dark after about twenty seconds and comes back when he touches it.   **2** Because if it only happens on the battery it is a setting, and that is forty seconds and free rather than a repair.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **still**   **2** **again**   **3** **properly**   **4** **still**   **5** **properly**'));
out.push(NOTE('Item 4 — _I have asked three times and it has **still** not been done_ — is the one that shows the word is not only for machines. Half the useful uses of _still_ in a working life are about people who have not done something.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I brought it in on Monday and it\'s still not working properly.',
  '**B:** Say that again, but choose one word.',
  '**A:** …Properly.',
  '**B:** Good. Tell me exactly what it does.',
  '**A:** It turns on and does everything, but the screen goes dark after twenty seconds.',
  '**B:** Does it do it on the mains, or only on the battery?',
  '**A:** Only on the battery, I think.',
  '**B:** Then that is almost certainly it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The word: **properly**. The question: on the mains or only on the battery?_ — about forty seconds once the right word was used, against the ten minutes the wrong one cost.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_My residence paper. It is not **still** not done — they did it. It has not gone wrong **again**. It is not done **properly**: the name is right and the date of birth is one day out, and the one day is enough to make it useless at a bank._',
  '**b** _The sentence: "The paper has been issued and the date of birth is wrong by one day. I am not asking for it to be done again — I am asking what has to happen to correct one digit."_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rami went back with "it\'s still not working properly", and the technician made him choose one word of the three. The right word was properly: it turns on and does everything, but the screen goes dark after twenty seconds. The technician said that is a completely different problem and a much smaller one, and that "still not working" would have made him open the whole machine again. What I am taking away is his last line: Rami came in with a sentence that was not true, and it nearly cost him a morning.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It\'s not still working. _(meaning: nothing has changed)_ → ✓ It\'s **still not** working.   ✗ It has broken still. → ✓ It has broken **again**.   ✗ It doesn\'t work properly again. → ✓ choose one.   ✗ It is still don\'t work. → ✓ It **still doesn\'t** work.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Properly** — it washes correctly and then does not empty all the way.'));
out.push(A('**2** All four washes since Tuesday, on every programme. It did not do it before.'));
out.push(A('**3** Whether it is connected to Tuesday\'s work or a separate thing — and if it is separate, what it would cost to look at. She is explicitly **not** asking for the repair to be redone or for money back.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the housing office   **Subject:** File 2207 — not a complaint',
  'Dear Sir,',
  'You issued my residence paper on 3 March and it arrived on the 9th. The paper exists and the name is correct. That part is done and I am not writing about it.',
  'It is **not** still missing. It has **not** been lost again. It is not **right**: the date of birth is 14/06 and mine is 15/06. One digit.',
  'I have taken it to two places and both have refused it, so it has happened twice out of two.',
  'I am not asking for a new file and I am not asking for anything back. I am asking what has to happen to correct one digit, and whether I need to start again.',
  'Yours faithfully,',
  'Tareq Ayoub',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**To:** the building committee   **Subject:** The stairs light — not the same problem',
  'Dear all,',
  'The electrician came on the 4th and replaced the switch on the second landing. The light now comes on, every time, and the switch works. That is fixed and I am grateful and I am not writing about it.',
  'It is **not** still broken. It has **not** broken again. It is not working **properly**: it comes on and goes off after about forty seconds, which is not long enough to get from the second floor to the fourth, and it was two minutes before.',
  'It has done it every single time since the 4th — I have counted eleven.',
  'I am not asking for the work to be done again and I am not suggesting anybody did anything wrong. I think the new switch is a timed one and the old one was not. I am asking whether it can be set for longer, and what that would cost.',
  'Lina, flat 7',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"not long enough to get from the second floor to the fourth" — that is the whole problem in one measurement._   ✓ _You say "I think the new switch is a timed one" — that is a theory, and Unit 18 says leave those out._   ? _Eleven times out of eleven, or eleven times out of more?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The message that gets an answer the same day is the one that ruled the other two out before anybody asked. Read the two aloud back to back and the class hears it without being told.'));
out.push(S('Homework (sample – the reply)'));
out.push(SAMPLE(['Dear Ms Haddad, Thank you, and thank you for the first paragraph — most people write to us only in the second one. It is connected: the switch we fitted is a timed one, because the old type is no longer made. It can be set to three minutes and it takes about ten minutes to change. There is no charge for this because we chose the switch. I can come on Saturday morning. I would also say, since you asked so clearly: if you write "the light is still broken" I bring a new switch and a ladder and we lose a morning.']));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  Could you have a look at it?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** The six in order, from most direct to most polite: _Fix this. · Can you fix this? · Could you fix this? · Could you have a look at this? · Would it be possible to look at this today? · I wonder whether you could look at this._'));
out.push(A('**b** Open, and the class will argue. The useful outcome: **5** (somebody who has already said no) needs the smallest ask, not the politest words — _could you just have a look_, not _I wonder whether you could possibly_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – yes, but not today. (Thursday.)'));
out.push(A('**b** **1** Thirty seconds now, to tell her whether it is worth leaving at all — and the reason: it is her mother\'s and her mother will ask.   **2** That "quickly" means the person has already decided he is slow, before he has started.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _I know you\'re busy — would it be possible for you to look at this?_   **2** _Could you have a look at this for me?_   **3** _I know this is a bad moment. Could I leave it and come back?_   **4** _Could you just tell me whether it is worth repairing?_   **5** _Could you tell me roughly what it will cost before you start?_'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Good morning. I know you\'re busy — would it be possible to look at this today?',
  '**B:** Not today. Thursday.',
  '**A:** Thursday is fine. May I ask one thing first — could you just look at it for thirty seconds and tell me whether it is worth leaving at all?',
  '**B:** (pause) That is a reasonable thing to ask.',
  '**A:** Thank you. And could you tell me roughly what it will cost?',
  '**B:** Under twenty. If it is more than twenty I will ring you first.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The second request — thirty seconds now, with a reason._ It worked because it asked for **less**, not because it was more polite.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Direct:** Can you look at my sister\'s form? **Polite:** Could you have a look at my sister\'s form when you have a moment? **Very polite:** I know you have a queue — would it be possible for you to look at one form for me before Thursday?_',
  '**Partner:** _The middle one. The third is too much for somebody you see every week; it would make them wonder what you really want._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba asked Abu Nidal to look at her mother\'s radio and he said Thursday. She accepted Thursday and then asked for something smaller: thirty seconds now, to tell her whether it was worth leaving at all. He said that was a reasonable thing to ask. It is the switch, and somebody has opened the case before with the wrong screwdriver. Under twenty, and he will ring before going over. Then the line our group wrote down: she is the only one today who did not say "quickly", and he says "quickly" means the person has already decided he is slow.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Could you to look at it? → ✓ Could you **look** at it?   ✗ Would it be possible you look at it? → ✓ Would it be possible **to** look / **for you to** look?   ✗ I want you look at this. → ✓ **Could you** look at this?   ✗ Can you fix it quickly? → ✓ drop the _quickly_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It makes a small click and then nothing — the light comes on and there is no sound on any station.'));
out.push(A('**2** Nothing at all. Ring her on 0998 440 217 and she will decide.'));
out.push(A('**3** Not for the radio — because it is on. It has been in her mother\'s kitchen since before Hiba was born.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOR THE TAILOR — the grey coat, left Thursday**',
  '**What it does:** the lining is torn right across the back, from the collar to the middle.',
  '**When it started:** it caught on something in February and I have not worn it since.',
  '**What I have already tried:** nothing. I did not want to make it worse.',
  '**What you should know:** the outside is fine and the buttons are original. Please do not change the buttons.',
  '**What I am asking for:** please reline it if it is under forty thousand. If it is more, please do nothing and ring me on 0991 205 734.',
  '**Why it matters:** it was my father\'s and it is the only thing of his that still fits somebody.',
  'Lina Haddad',
]));
out.push(S('Stage 7 · Write freely (sample, 155 words)'));
out.push(SAMPLE([
  '**FOR ABU NIDAL — the sewing machine, left Saturday**',
  '**What it does:** the needle goes up and down normally but the thread breaks about every twenty stitches, always at the same place in the cycle. It does it with new thread and with old thread and with three different needles.',
  '**When it started:** in November, suddenly. It was not dropped and nothing was changed. It was used that morning.',
  '**What I have already tried:** three needles, two kinds of thread, cleaning everything I could reach with a brush, and threading it from the beginning about forty times.',
  '**What you should know:** the plate on the left was taken off once by my brother in about 2016 and one of the small screws is not the right screw. That was not me and it has worked for nine years since.',
  '**What I am asking for:** please repair it if it is under thirty thousand. If it is more, please stop and ring me on 0955 612 408.',
  '**Why it matters:** it is my grandmother\'s and three of us learned on it, and the fourth one is seven and is waiting.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"always at the same place in the cycle" — that one phrase tells me more than the rest of the note._   ✓ _"It was used that morning" — say who used it; if it was not you, that matters._   ? _What is your limit, exactly — thirty, or thirty plus parts?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Reading the _why it matters_ lines alone is thirty seconds and it reframes the whole cycle: students see that the sentence is not sentimental, it is **instructional** — it tells the repairer what "working" means for this object, which is different every time.'));
out.push(S('Homework (sample – something nobody could value properly)'));
out.push(SAMPLE(['**For whoever opens this.** It is a wooden box with a broken hinge, about thirty centimetres, with nothing in it. It is not old and it is not well made and it is worth about two thousand pounds of anybody\'s money. **What I am asking for:** the hinge, and nothing else. Do not clean it, do not sand the top, do not improve the colour. **Why it matters:** my brother made it at school when he was eleven and the lid does not fit, and the lid not fitting is the part I would be most upset to lose.']));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  How much will it cost and how long will it take?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Prices and times said at speed are much harder than the class expects, and the low score is the reason the pronunciation track at the end of this cycle exists.'));
out.push(A('**b** **1** cost   **2** take   **3** take   **4** cost   **5** cost'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – four specific questions.'));
out.push(A('**b** **1** How much will it cost? How long will it take? Will you ring me if it is more than that? Is there a guarantee, and for how long?   **2** That it is a real answer and should be accepted — but then you ask _depends on what_ and _what is the most it could be_, and a good repairer gives you a worst-case number.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **How much will it cost?**   **2** **How long will it take?**   **3** **Will you ring me if it is more?**   **4** **Is there a guarantee?**   **5** **What is the most it could be?**'));
out.push(S('Stage 3 · Practise (sample)'));
out.push(SAMPLE([
  '**A:** How much will it cost?',
  '**B:** It depends.',
  '**A:** Depends on what?',
  '**B:** On whether the part is here or has to come from Aleppo.',
  '**A:** And what is the most it could be?',
  '**B:** Ninety. Normally thirty-five.',
  '**A:** How long will it take?',
  '**B:** Two days, or nine if it comes from Aleppo.',
  '**A:** And will you ring me if it is more than fifty?',
  '**B:** I will.',
  '**A:** Is there a guarantee?',
  '**B:** Three months, with the receipt only.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_worst case 90,000 (normally 35,000) · 2 days or 9 · yes, he will ring over 50 · 3 months with the receipt._ — Most students say they would leave it, and say so **because** of the worst-case number, not in spite of it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I paid a man to look at the water tank and I never asked. He was there forty minutes and it was sixty thousand, and I have no idea whether that is a normal price because I did not ask before and I could not argue after. That is the whole story and it is still annoying three years later._',
]));
out.push(NOTE('Stage 4a produces a story from everybody, including the quiet students, because everybody has one and nobody has told it. It is also the moment the four questions stop being an exercise.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour gave Rami four questions to ask before leaving anything anywhere: how much will it cost, how long will it take, will you ring me if it is more, and is there a guarantee and for how long. She says "it depends" is a real answer — but then ask what it depends on and what is the most it could be, because a good repairer gives you a number for the worst case and a bad one does not. She says the guarantee question is the cheapest question there is. Her reason is that she once paid for the same repair twice in one month, twenty-eight thousand, because she did not ask it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ How much will it take? → ✓ How much will it **cost**?   ✗ How long will it cost? → ✓ How long will it **take**?   ✗ How much it will cost? → ✓ How much **will it** cost?   ✗ It will cost three days. → ✓ It will **take** three days.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The person who hands something over and says "let me know" — and the writer says that person was her, twice, in one month.'));
out.push(A('**2** Take it — it is a real answer — and then ask what it depends on and what is the **most** it could be.'));
out.push(A('**3** Twenty-eight thousand: the same repair, the same shop, three weeks apart.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR QUESTIONS BEFORE YOU TAKE A FLAT** — written by somebody who did not ask any of them',
  'This card is for the person who likes the flat and signs on the same day. That person was me.',
  '**1. What is included in the rent?** If the answer is "the usual", ask: the water? the building charge? the stairs light? Name them one at a time.',
  '**2. When was the water last off, and for how long?** Ask for a month, not a reassurance. Everybody says "rarely".',
  '**3. Who do I ring when something breaks, and how fast do they come?** Ask for a name and a number, in writing, on the day you sign.',
  '**4. What happens to my deposit, and who decides?** Everybody is embarrassed to ask this and it is the cheapest question there is.',
  '**What it cost me not to ask question 4:** a whole month\'s rent, which I was told in July was for "cleaning".',
]));
out.push(S('Stage 7 · Write freely (sample, 158 words)'));
out.push(SAMPLE([
  '**FOUR QUESTIONS BEFORE YOU SAY YES TO A JOB** — for the people who are so glad to be offered it that they ask nothing',
  'This card is for the person who says yes on the telephone. That was me, twice.',
  '**1. What exactly are the hours?** If the answer is "the normal hours", ask what time the last person left, on an ordinary Thursday. Not what time they finish. What time they **left**.',
  '**2. When is the money paid, and has it ever been late?** Ask the second half. Everybody answers the first half warmly.',
  '**3. Who was doing this job before, and what happened to them?** If there is a pause, that is the answer. Take it as information and not as a reason to refuse.',
  '**4. What would make you tell me I was doing this badly, and when would you tell me?** Nobody asks this, and the answer tells you what the next year will feel like.',
  '**What it cost me not to ask question 1:** eleven months of leaving at eight and calling it my own fault.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"If there is a pause, that is the answer." I am going to use that in something that is not a job._   ✓ _Question 4 has no vague-answer plan — what if they say "I\'d just tell you"?_   ? _What happens if they get annoyed that I asked?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Adding up the class total is the last thirty seconds and it is always startling — in a class of twelve it is usually several hundred thousand pounds of things nobody asked about. Write the number on the board and leave it there for Unit 21, which is about what to say when it has already gone wrong.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**Four questions before I agree to help somebody with something.** 1 What exactly do you need me to do — the whole thing, or one part? 2 When do you need it, and what happens if it is late? 3 Is anybody else doing part of it, and do they know about me? 4 If I cannot finish it, what will you do? **The one I know I still will not ask:** number 4. I have never asked it in my life and I have been caught by it three times, and I can tell you exactly why I will not ask it: because asking it sounds like I have already decided to let them down.']));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: What does the receipt say?'));
out.push(S('Stage 1 · Get ready – Unit 20 quiz'));
out.push(A('**1** He works very **well**.   **2** He drives **fast**.   **3** Could you say it **more slowly**?   **4** They did the job **quickly**.   **5** It\'s **still not** working.   **6** How **long** will it take? _(or: How **much** will it **cost**?)_'));
out.push(NOTE('Number 5 is the one to make teams justify. _It\'s not still working_ is a grammatical sentence that means the opposite — it has stopped. Put both on the board and ask which one you would say to a repairer on the Thursday after a Monday repair.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Her mother wants to know what the eighty-five thousand went on. The line Lina says matters most is the one at the bottom: **the guarantee is void if anybody else opens the machine** — so if it does anything before July, nobody touches it and it goes back to them.'));
out.push(S('Stage 3 · Practise (sample – Receipt A explained without showing it)'));
out.push(SAMPLE([
  '_It\'s a repair receipt for a telephone screen, job 2218._',
  '_Seventy thousand altogether — but fifty-five of that is the part and only fifteen is the work, which is the number that stops an argument._',
  '_They checked the battery and did not replace it, and they wrote that down. That is the line that tells you they are honest._',
  '_The guarantee is one month, not three, and only on the **screen**. If the battery goes in May, that is yours._',
  '_And the line that cancels it: if anybody else opens the telephone, the guarantee is finished._',
  '**B:** So if it goes wrong in two weeks? — **A:** You take it straight back and you let nobody look at it first.',
  '**C:** I\'m going to put the paper with my documents, because it says they do not keep copies.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Total 70,000 · covers the screen only · ends 14/05 · cancelled if anybody else opens it._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the guarantee card for the water heater. Two years, from the date of installation, not the date of purchase — and those are four months apart in our case, which is the whole point of reading it._',
  '_It covers the tank and the element. It does not cover the thermostat, which is the part that actually goes._',
  '_It is cancelled if it is installed by anybody who is not on their list._',
  '**A:** So who installed yours? — **B:** …I do not know, and that is the honest answer, and I am going to find out before I need to.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Nour explained the receipt for her telephone screen. The total was seventy thousand and fifty-five of it was the part, which she says is the line that stops an argument at home. They checked the battery, did not replace it, and wrote that down. The guarantee is one month, not three, and only on the screen. The line that would cancel it is anybody else opening the telephone — which catches people, because the first thing most of us do is let a cousin look at it. So I decided I would keep the paper receipts, because hers says they do not keep copies and a photograph is not a receipt.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The guarantee is three months until July. → ✓ three months, **to** 11/07.   ✗ It covers only the parts above listed. → ✓ **the parts listed above only**.   ✗ The guarantee is void if somebody opens it another. → ✓ **if anybody else opens it**.   ✗ They don\'t keep copy. → ✓ They **do not keep copies**.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 1'));
out.push(A('**1 B**   **2 B**   **3 B**   **4 A**   **5 B**   **6 C**'));
out.push(NOTE('**6** is the unit in one question: _it isn\'t the same fault — the old one has gone. It just isn\'t working properly_ is **C**, a new smaller problem. Students who pick **A** have read "isn\'t working" and stopped, which is exactly what the technician in 20.4 warns about.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'It\'s back, and here is what the **eighty-five thousand** went on.',
  '**Thirty-eight** for the **bearing**, **eleven** for the **belt**, and **thirty-six** for the work. The parts are **about half of it**.',
  'The **bearing** was what made the noise. The **belt** was **stretched by** it, so it isn\'t **a second fault**.',
  'They checked **the pump** and **did not replace it**, which **is how you know they are honest**.',
  'The guarantee is **three months**, until **the eleventh of July**, on **these parts** only. And if it does anything before then, **nobody touches it** — it goes back to them.',
  'The paper is **in the drawer with the identity papers**, because **they do not keep copies and without it there is no guarantee**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (48 words)**',
  'Hi Sam! What exactly is it doing now — is it still broken, or is it working but not properly? Ask them whether the guarantee covers it, and for how long. If I were you I\'d take it straight back and let nobody else open it first.',
]));
out.push(SAMPLE([
  '**Weaker sample (27 words) – why it only just passes**',
  'Hi Sam. What is the problem now? Ask them how much it will take. I think you go back to shop. Bye.',
  '_All three points are answered and it is long enough, so it passes — but **how much it will take** is the unit\'s own confusion (**how long will it take** or **how much will it cost**); **I think you go back** should be **I think you should go back**; and **to shop** needs **to the shop**. The first error is the one to put on the board._',
]));
out.push(S('Unit 20 check · A  Grammar and vocabulary'));
out.push(A('**1 b** well   **2 b** fast   **3 b** more slowly   **4 b** quickly   **5 b** quick   **6 a** still   **7 c** properly   **8 b** long'));
out.push(S('Unit 20 check · B  Listening (Track 20.14)'));
out.push(A('**1 B** (Omar – Khalid charges more and explains nothing)   **2 C** (Lina – fixed, but does not empty fully)   **3 A** (Rami – a small new problem, not the old fault)   **4 D** (Ms Huda – cheaper to repair, and he showed her why)   **5 E** (Hiba – thirty seconds saved her leaving it)'));
out.push(A('The two extra letters are **F** (the guarantee ended before he went back) and **G** (the shop refused to look at it).'));
out.push(NOTE('The full audio script for Track 20.14 is printed in the Student\'s Book **after** the questions. Read it **twice** at normal speed. Items 1 and 2 are both about a repair that was done — the difference is whether the complaint is about the **explaining** or the **result**, which is the distinction the whole unit turns on.'));
out.push(S('Unit 20 check · C  Writing (sample, 96 words)'));
out.push(SAMPLE(['**The shoe repair under the stairs.** He said two days and it took nine, and if that matters to you, you should know it first. He did it well: both soles, stitched not glued, and they have been through a wet February without moving. It cost twelve thousand; a new pair of the same kind is about a hundred and forty, so that is not a saving, that is a different decision. What he did that nobody does is show me the old sole and point out where it had worn through first, which was the inside edge, which is how I walk. **If you need them by Thursday, he is the wrong man. If you want these shoes for another two years, there is nobody else.**']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The two lines that need carrying forward are **_good_ against _well_** and **_still / again / properly_**. The first is a drill; the second is a habit, and it is worth asking the class, once a week for a month, which of the three a complaint they have made really was.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 20 was about how a job is done. Unit 21 is what you say when it is not good enough: _so_ and _such_, _too_ and _enough_, and complaining in a way that gets something done rather than something said.',
  'Keep the class total from 20.6 on the board — the money everybody has lost by not asking. Unit 21 begins with the things people did not take back.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 20 · Answer Key');
