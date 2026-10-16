// Proactive English B1 · Syria Edition · Book 1 · Unit 7 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 7  Cause, Effect and Consequence — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**This unit is the turn of the book.** Units 1–6 taught the tenses; from here on the course is about **argument**. 7.1 to 7.4 are the grammar of cause and result, 7.5 is the ethics of it, and 7.6 is the four-sentence shape that every piece of written reasoning in the second half of this book is built on. If a cycle has to be cut, cut 7.3, never 7.5 or 7.6.',
  '**One grammatical point does most of the work.** _because_ takes a clause, _due to_ takes a noun. That is a small rule with an enormous consequence: when the real reason is a sequence of events, a writer who reaches for _due to_ must manufacture a thing — _traffic conditions_, _administrative factors_, _supplier issues_ — and the grammar chooses the evasion for them. 7.1 plants it and 7.7 pays it off.',
  '**7.4 closes the Fares thread** opened in 4.1 and pushed forward in 4.6, 6.5 and the Unit 6 homework. The answer is deliberately not a victory: he was never considered, the post had gone before he applied, and the expensive thing was four months of a belief. Read it without softening it, and do not let the class turn the line manager into a villain — Fares does not.',
  '**7.6 produces a page that is used again in 12.7.** Collect it.',
], C.lblue, C.navy));

// ===================== 7.1 =====================
out.push(pb());
out.push(h2('7.1  Because, since, due to'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Six reasons for one late bus: _traffic · the road was closed at six and nobody told us · a passenger was ill · the weather · the bus was late leaving the depot · there was an accident._ The three you would **write** are the vague ones. The one that is **not a reason at all** is _traffic_ — there is traffic every morning, so it cannot explain a difference between one morning and another.'));
out.push(A('**b** **1** _due to **the rain**_ · **2** _because **it was raining**_ · **3** _owing to **the rain**_ · **4** _since **it was raining**_ · **5** _as **it was raining**_. Noun after _due to_ and _owing to_; clause after the other three.'));
out.push(NOTE('This is the cleanest grammar point in the unit and the one with the longest reach. Drill it until it is automatic — ⚠ ~~due to the road was closed~~ — because every evasion the class meets in 7.7 is built on somebody not being able to say that sentence and inventing a noun instead.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – what he says and what the company writes.'));
out.push(A('**b** **1** _Delay due to traffic conditions._   **2** It cannot take a clause — so the moment you reach for it you have to turn your reason into a thing, and things are easier to make vague than sentences are.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _…because the road was closed_ / _…due to the closure of the road_.   **2** _…because the seal had been splitting_ / _…due to a split seal_.   **3** _…because nobody had checked the oil_ / _…due to a lack of maintenance_.   **4** _…because the second trolley was in the workshop_ / _…due to the absence of a second trolley_.   **5** _…because the light above the chamber does not work_ / _…due to poor lighting_.'));
out.push(A('In every pair the _due to_ version is shorter and worse, and in items 3 and 5 it is **much** worse: _a lack of maintenance_ and _poor lighting_ are the kind of nouns that get written into reports and cannot be acted on. Ask the class which version a manager could do something with on Monday.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "Delay due to traffic conditions."',
  '**B:** And what actually happened?',
  '**A:** The Harasta service road was closed at six for resurfacing and nobody told the depot.',
  '**B:** So: the bus was 38 minutes late because the service road was closed at six and the depot had not been told.',
  '**A:** Nineteen words. Can anybody do anything with that?',
  '**B:** Yes — somebody can telephone the municipality on a Sunday evening and ask what is being resurfaced.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('All eight vague versions are **true**. That is the finding and it should be said in exactly those words: nobody in this room has ever written a false reason, and every reason this room has ever written has been useless. The pair of sentences is the argument; it needs no third sentence.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Vague: "absence due to personal reasons" — I have written it eleven times in six years. Real: I was absent on 3 March because my mother had been discharged from hospital the night before and there was nobody else to be in the flat._',
  '**b** _It would cost me the thing I have been buying with the vague version for six years, which is not having to be a woman with a mother at home. Eleven times, and not one of them was about anything shameful._',
]));
out.push(A('Answer **b** is the honest reason most vague reasons stay vague, and it is not laziness: a specific reason gives away something true about your life. Say so. Then make the distinction the cycle needs — _absence due to personal reasons_ is a reasonable use of the vague form, because nobody needs to act on it; _delay due to traffic conditions_ is not, because somebody does.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq says that when the bus is late he has to give a reason twice. To the passengers he says the Harasta road was shut from six and nobody told them; to the company he writes "delay due to traffic conditions" in a box three centimetres long. Jad said those are the same thing, and Tareq said they are not: his has a road in it, a time, and somebody who did not tell them, and theirs has traffic — and there is traffic every morning, so traffic is not a reason, it is the weather. He has written it about ninety times. Ms Huda gave the grammar and called it a small thing with a big consequence: because takes a clause, with a verb in it, and due to takes a noun, and a noun can be so general that it carries no information at all. You cannot say "due to the road had been closed", so the moment you reach for due to you have to turn your reason into a thing, and things are easier to make vague than sentences are. Samira said so because is better, and Ms Huda said not better — harder to hide behind. Tareq said ninety forms, every one of them true, and all ninety say nothing, when he could have written that the Harasta road was closed at six and nobody told the depot, in nine words.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ due to the road was closed → ✓ **because** the road was closed / **due to the closure of** the road.   ✗ because of nobody had told us → ✓ **because** nobody had told us.   ✗ Due to traffic conditions. _(in a box somebody must act on)_ → ✓ a clause with a time in it.   ✗ The reason is because… → ✓ _The reason is **that**…_'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Six: a road, a time, the reason the road was closed, the number of buses, the distance, and the sentence about why it happened four times.'));
out.push(A('**2** Four minutes, and the risk that somebody reads _the depot was not told_ as a complaint about the depot — which it is.'));
out.push(A('**3** Because the second driver stood at the office window at eight and told them — the thing Tareq has never done in nine years, because the form does it for him and the form says traffic.'));
out.push(A('The last paragraph is the quiet argument of the cycle. The form did not merely fail to record the reason; it **replaced the act of telling somebody**. Nine years of a three-centimetre box standing in for a conversation, and the fourth bus was saved by a man at a window. Ask the class what in their own work a form has replaced.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ROUND REPORT · WARD 4 · 11 MARCH** · R. Barakat',
  '**As I have always written it.** Round finished: 03.25. Reason: due to staffing.',
  '**As it should be written.** Round finished: 03.25, which is 85 minutes over. Reason: the ward ran one medication trolley. The second trolley was taken to the workshop on 2 February with a broken wheel and has not been returned. Staffing was two, which is the establishment. The round has now finished late on all 34 nights since 2 February, one night at a time, because there is no line on the equipment form for "sent to workshop" and therefore nothing has ever appeared in writing.',
  '**What is in the second one that is not in the first.** A date. A wheel. A number of nights. The fact that the staffing was correct. And one sentence about why it has happened thirty-four times instead of once.',
  '**What it would cost me to write.** Four minutes, and admitting that the nineteen forms I have already filled in say something I do not believe.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**ABSENCE FORM · 3 MARCH** · S. Dibo',
  '**As I have written it eleven times in six years.** Absent: one day. Reason: absence due to personal reasons.',
  '**As it could be written.** Absent: one day, 3 March. Reason: my mother was discharged from hospital on the evening of 2 March and there was nobody else who could be in the flat on the 3rd. I knew on the evening of the 2nd and the school office opens at 07.30, so I telephoned at 07.31 and spoke to nobody, because the telephone in that office is answered from about eight.',
  '**What is in the second one that is not in the first.** A date, a reason, the hour I knew, and the hour the office actually answers — which is the only sentence of the five that anybody could act on, and which explains why every unexplained absence in that school appears to have been reported late.',
  '**What it would cost me to write.** It would tell forty-one colleagues that I have a mother at home who was in hospital, which is nobody\'s business and which I have been keeping out of that box for six years.',
  '**What I am going to do.** Write "due to personal reasons" again — and write the sentence about the telephone separately, to the office, with the times in it. The two facts do not have to travel together, and I have been letting one hide the other for six years.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The two facts do not have to travel together." That solves it, and I had assumed the choice was between telling everybody and telling nobody._   ✓ _"there was nobody else who could be in the flat" — that is the one clause doing two jobs; it is the reason and the privacy in the same breath._   ? _Why did it happen more than once?_ — eleven times, and the page answers it about the telephone and not about the absences.'));
out.push(S('Stage 7R · Share'));
out.push(A('None untrue; all useless. Say both numbers and stop. A class that has just discovered that it has written ninety true and useless sentences does not need to be told what to conclude.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Filled in on Thursday. The box says "Reason for delay" and it is three centimetres long, so I wrote "road closed 06.00 — see over" and wrote the rest on the back: _the Harasta service road was closed from 06.00 for resurfacing and the depot was not informed, so buses 1, 2 and 3 were all sent down it and all three turned at the junction. Bus 4 did not, because the driver of bus 2 came to the window at 08.00 and said so._ Nobody has said anything to me about it. The form came back in the tray with a tick on it.']));

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  So, therefore, which meant that'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. _so_ belongs in speech, _therefore_ and _as a result_ in writing, and _which meant that_ in both — which is why it is the one to own.'));
out.push(A('**b** Reason: **1** _because_, **3** _since_, **5** _due to_. Result: **2** _so_, **4** _therefore_, **6** _as a result_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a chain of five results.'));
out.push(A('**b** **1** Five links, and it starts with a **wheel** — a broken trolley wheel on 2 February.   **2** The fourth link cost her the one true reason: her own nineteen forms saying "staffing" were read, and produced a notice forbidding staffing as a reason.'));
out.push(NOTE('_They were answering my own nineteen forms_ is the sentence of the cycle, and it is the most useful idea about institutions in this book: the thing that is used against you is very often something you wrote yourself, in the only box that was open to you, for a reason you did not believe. Let the class sit with it for a moment before you move on.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _The seal split, which meant that the door would not shut._ / _The seal split, **so** the door would not shut._   **2** _The report went to an empty post, which meant that nobody read it._   **3** _The road was closed, which meant that four buses went down it._   **4** _There is no training post, which meant that he taught people in car parks._'));
out.push(A('Item 4 is the one to point at: the result is not a failure but a **workaround**, and a workaround is the commonest result in working life and the one nobody reports. Eleven years of training in car parks is a result, and it never appeared on any form.'));
out.push(S('Stage 3 · Practise (sample – Card A, first link)'));
out.push(SAMPLE([
  '**A:** A trolley wheel broke and there was no form for chasing it.',
  '**B:** It was not chased, which meant that the ward ran one trolley, which meant that every round was late, which meant that a reason had to be written on a form that has no box for equipment.',
  '**A:** In one sentence.',
  '**B:** A wheel broke and there was no form for it, which meant that nineteen forms said the wrong thing.',
  '**A:** Where does it really start?',
  '**B:** With the form that does not exist. Not with the wheel — wheels break.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In five of the six it is a missing piece of paper or an unanswered message: no form for a trolley, a report sent to a post, no way to tell the depot, a key nobody asked for, a list never read all at once. In none of them is it the person who ends up being blamed. Say that count out loud; it is the finding of the cycle and it arrives from the students, not from the book.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _There is no form in that school for recording that a child has stopped coming before the register is formally amended, which meant that I went on marking a name for three weeks, which meant that nobody in the office knew, which meant that by the time his name was taken off, four people each assumed another had rung him. In one sentence: there is no line on a register for "has stopped coming", which meant that nobody rang a boy for five weeks._',
  '**b** _I have been treating my own marking of the register as the first link. It is the third._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has written it out as a chain, because somebody in this room said a timeline is for seeing a shape. Five links, and the first one is a wheel. On the second of February a trolley went to the workshop with a broken wheel, and there is no form for chasing a trolley, so it was not chased — which meant that the ward ran one trolley for a five-bay unit. As a result, every two o\'clock round took between fifty and eighty minutes longer than it is written for, thirty-four times out of thirty-four. Therefore she needed a reason on the form every night, and there is a box for staffing and no box for a trolley, so she wrote "staffing" nineteen times. And the fifth link is a notice saying it has been agreed that the staffing level is appropriate and that staffing is not to be recorded as a reason. Fares said they were answering her own nineteen forms, and she said they were: she built the sentence that was used against her, one night at a time, for a reason she did not believe, in a box that was the only one open to her. Jad said it all goes back to there being no form for a trolley, and she said it does — nineteen sentences of hers, and the first cause is a piece of paper that does not exist.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Because there was one trolley, so the round ran late. → ✓ one or the other. _(Arabic allows the pair; English does not, and this is the single commonest B1 result error.)_   ✗ So, the round ran late. _(formal writing)_ → ✓ **Therefore** / **As a result**.   ✗ Therefore the round ran late. _(speech)_ → ✓ **so**.   ✗ which meant the round was late _(writing)_ → ✓ which meant **that**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Thirty-four nights; the average was sixty-three minutes over.'));
out.push(A('**2** Because the form requires a reason, has a box for staffing and no box for equipment — so it was the only box open to her, and she does not believe the word.'));
out.push(A('**3** A line on the equipment form for "sent to workshop", with a date. She says it would have cost nothing in February.'));
out.push(A('The request is the point of the page and it is worth saying why it works: it is not a complaint, not an accusation, and not about the trolley. It is a line on a form — the cheapest thing anybody at that meeting can grant — and it is the one thing that would have prevented every other link. Students who ask for the trolley get an argument; students who ask for the line get a decision.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ELEVEN OF ONE MODEL** · M. Hariri · one page, for the two shops',
  'In September I recorded the same fault on the same model eleven times in four weeks.',
  'There is no way for a counter repairer to report a batch fault to anybody, so I reported it to nobody for four months, which meant that I went on mending them one at a time and charging the customers.',
  'As a result fifteen customers have now paid me for a repair that was not their fault, between September and April, at an average of about nine thousand pounds each.',
  'The only route open to me was a letter to the two shops that sold them, which meant that my complaint went to the people least able to act on it and most likely to read it as an insult — and that is what happened: seven months, eleven lines, and no name.',
  '**Therefore the position today is this.** Fifteen units seen, not eleven. The model is still in both windows. Nobody at the factory knows, because nobody at my counter has any way of telling them.',
  '**What I am asking for.** The name of one person at the supplier. That is the piece of paper the whole chain is missing, and it would have cost one line in October.',
]));
out.push(S('Stage 7 · Write freely (sample, 170 words)'));
out.push(SAMPLE([
  '**THE BOY IN THE THIRD ROW** · S. Dibo · for the head of year',
  'On 10 October a boy in my third-year class stopped coming.',
  'There is no line on a register for "has stopped coming" — a child is either present, absent, or taken off the roll by the office — so I went on marking him absent, which meant that nothing left my room and nothing arrived in anybody else\'s.',
  'As a result his name appeared on my register twenty-one times in three weeks, in my handwriting, and on each of those days the only record in the building said that a boy had been absent for a day.',
  'Four of us noticed. Each of us assumed that one of the others had rung, which meant that nobody rang, and on 2 November the office took him off the roll on my figures — so the system worked exactly as it is designed to, and a boy left school without one telephone call.',
  '**Therefore the position today is this.** Nobody has rung him. His name is off the register. There is no record anywhere that he was ever noticed, because noticing has no box.',
  '**What I am asking for.** One line on the weekly register return: _pupils absent three consecutive sessions — name and date_. It would have cost eleven seconds a week in October.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the system worked exactly as it is designed to, and a boy left school without one telephone call." That is the link I did not know was a link._   ✓ _"Four of us noticed" is given as a link and it is really the same link four times; say that, because it is worse._   ? _What would the missing line have cost in October?_ — eleven seconds a week, and the page says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Nearly all of them start with a missing form or an unanswered message. For the one or two that start with a person, ask what that person was missing, and the chain usually gets one link longer and the person stops being the start of it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['One sentence: _there is no line on the equipment form for "sent to workshop", which meant that a trolley was never chased, which meant that one trolley ran a five-bay ward for five weeks, which meant that thirty-four rounds were late, which meant that I wrote "staffing" nineteen times, which meant that the one true reason has now been forbidden in writing._ The piece of paper that does not exist is a line on a form with a date on it, and I have drawn it: two columns, item and date, eleven millimetres high.']));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  It was so uneven that you could see it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on a consequence rather than an intensifier: _so uneven that you can see the brush marks_, not _so uneven that it was terrible_. The second is the same adjective twice.'));
out.push(A('**b** **1** so   **2** such   **3** so   **4** such   **5** so. _(The rule in one line: **so** with an adjective alone, **such** with a noun.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the brush marks.'));
out.push(A('**b** **1** On three of the fifteen there was so much adhesive that it had run into the earpiece, and on two there was so little along the bottom edge that there was nothing there at all.   **2** It takes a quality you cannot measure and gives it a **consequence somebody can check** — in four seconds, by picking one up and looking at it.'));
out.push(NOTE('Mazen\'s explanation is better than any grammar note: _if I could measure it I would write 0.4 millimetres and a manager would look at two numbers; I cannot, so I write that you can see the brush strokes under a lamp, and that is a thing he can go and do._ The whole shape exists for the things that have no unit — light, cold, noise, handwriting, tiredness, silence.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The light is so weak that a seal split along two centimetres looks shut from standing height._',
  '**2** _The box on the form is so small that nobody has ever written more than four words in it — I have looked at ninety of them._',
  '**3** _There was so little time between the lessons that the three children I am supposed to speak to each week have been spoken to about four times a term._',
  '**4** _It was such a cold room that the children wrote in gloves in January and two of them stopped bringing pens._',
  '**5** _There were so many of the same model that I stopped writing the model name and started writing a tick._',
]));
out.push(A('Every one of the five ends in something a visitor could verify in under a minute. That is the test, and a sentence that fails it has used the shape as an intensifier — which is what students do with it for the first ten minutes.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The light above a machine.',
  '**B:** It is so weak that a split seal looks shut from where you stand.',
  '**A:** What would I have to do to check that?',
  '**B:** Stand at that door, look at the seal, then look at it again with a torch. Four seconds.',
  '**A:** And if you had a number instead?',
  '**B:** I would give you the lux reading and you would have to know what a good one is. Nobody in that building does, including me.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Usually five of the eight pass the under-a-minute test. The three that fail are nearly always the ones about **people** — how tired somebody is, how bad the handwriting is — and the way to rescue those is to find a thing the tiredness or the handwriting **produced**: three errors on fifth nights, a 6 typed as a 5.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"Dark." The sentence instead: the fitting above the second chamber is so weak that a seal which has split along two centimetres looks shut from standing height._',
  '**b** _Four years of "dark". Nobody has ever acted on it, and I have said it to four people and written it in three handovers._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen brought four of the telephones and told us to look at the lower left corner under the lamp. Yara said she could see lines, and he said those are brush marks: the adhesive is put on so unevenly that you can see the direction the brush went in, with your eye, from forty centimetres away. On three of the fifteen there was so much of it that it had run into the earpiece, and on two there was so little along the bottom edge that there was nothing there at all. Fares asked whether he could measure it, and he said no — he has no way of measuring a glue line, and that is why he says it like that. If he could measure it he would write nought point four millimetres and a manager would look at two numbers; he cannot, so he writes that it is so uneven that you can see the brush strokes under a lamp, and that is a thing the manager can go and do: pick one up, look at it, and in four seconds know what Mazen knows. Ms Huda said that is exactly what the shape is for — it takes a quality you cannot measure and gives it a consequence you can check. Yara said hers would be that the light above the chamber is so weak that a split seal looks shut, and Ms Huda said that one sentence is worth more than fourteen months of the word "dark".']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ so a bad road → ✓ **such a** bad road.   ✗ such uneven → ✓ **so** uneven.   ✗ so much people → ✓ **so many** people.   ✗ so few water → ✓ **so little** water.   ✗ It was so uneven that it was unacceptable. → ✓ a consequence somebody can **check**, not a second adjective.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Since she came there — three handovers and four people. She says the fault is **hers**, for using that word.'));
out.push(A('**2** That a seal split along two centimetres of its length looks shut from a standing position. She knows because the April seal had split along slightly more than two centimetres and six people who looked at that door that week, including her, saw a closed door.'));
out.push(A('**3** Take a torch to that door and look at the seal with it and then without it. Four seconds.'));
out.push(A('The structural move worth teaching here is _it is not a dark room, the room is fine_. Narrowing the claim from a room to **one fitting above one door** is what turns an unanswerable complaint into a part number. Every student with a long-standing grievance about a building should do this to it once.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE BOX ON THE DELAY FORM** · T. Ayoub',
  'I have been saying the word "small" about the reason box on the delay form for nine years. I have said it to two supervisors and once at a meeting, and nothing has happened, and I now think the fault is mine for using that word.',
  'Here is the sentence I should have written. The reason box is so small that in ninety forms I have never once written more than four words in it, and the four words I write are always the same four words. I have the forms; they are in the depot file and anybody can count them.',
  'It is not a bad form. The rest of it is fine — the times, the mileage, the signature are all exactly right. It is one box, about three centimetres by one, at the bottom right of a sheet that is otherwise mostly white space.',
  '**What to do about it.** Pull out any ten delay forms from any month and read the reason boxes. That takes a minute and it is all the evidence there is.',
  '**What I am asking for.** The box moved to the back of the sheet and made four lines deep. Not a new form. Not a meeting about forms. One box, and there is room for it.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**COLD** · S. Dibo · for the head teacher, and it is about one window',
  'I have been writing the word "cold" about Room 9 every January for six years. Six written notes and about twenty conversations, and nothing has happened, and I have come to think the word is the problem.',
  'Here is the sentence instead. The window at the back of Room 9 does not shut, and the gap is so wide that in January the two children who sit under it write in gloves, and one of them has twice stopped writing altogether in the last ten minutes of a lesson because her hand had stopped working properly.',
  'It is not a cold school. The other eight rooms on that corridor are warm and I have been in all of them. It is one window, about four centimetres open at the top, which has been like that since before I came, and the handle turns without engaging anything.',
  '**What to do about it.** Go into Room 9 at twenty past eight on any January morning and stand at the back for one minute. That is the whole of my evidence.',
  '**What I am asking for.** One handle mechanism. Not new windows and not a survey. The window is a standard 1962 casement and there are three in the corridor that work, so somebody knows what the part is.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"one of them has twice stopped writing altogether because her hand had stopped working properly." That is checkable and it is a child._   ✓ _"about twenty conversations" is an estimate in a page of exact things; say six notes and leave the conversations out._   ? _What exactly are you asking for, and do you have the part number?_ — not the number, but the page says three in the corridor work, which is better.'));
out.push(S('Stage 7R · Share'));
out.push(A('_Dark, four years. Cold, six. Noisy, two. Slow, eleven._ Then the _so … that_ sentences. The contrast does the teaching and the cycle should end there; anything you add afterwards weakens it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Given to the head of maintenance on Tuesday, two sentences: _the fitting above the second chamber is so weak that a seal split along two centimetres looks shut from standing height. Take a torch to that door, look at the seal with it, then look without it; it takes four seconds and it is the whole of my evidence._ He read it standing up, said "is that all it is", and went and looked. The fitting was changed on Thursday. Four years of "dark", and two sentences.']));

// ===================== 7.4 =====================
out.push(pb());
out.push(h2('7.4  Which led to, and that in turn'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Eight links round the room is fast and slightly silly and that is fine; the question at the end is the real task, and the answer is nearly always a link in the middle.'));
out.push(A('**b** **1** a **noun** — _which led to an incomplete file_.   **2** a **clause**.   **3** a noun.   **4** a noun.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – why he was refused. _(Strictly: why he was never read, which is the point.)_'));
out.push(A('**b** **1** A reference request that went to his line manager, who has not answered an email in eleven years — which led to an incomplete file, and an incomplete file is not read.   **2** The **fourth** link: four months in which he believed he had been weighed and found light, and stopped applying anywhere else.'));
out.push(NOTE('Do not let the class turn the line manager into a villain, because Fares does not. The man is sixty-one, everybody in the company knows he does not answer email, everybody works round it, and Fares put his name in the box anyway and then waited eight months. The page is about that, and a class that spends ten minutes on the line manager has missed the whole cycle.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 An unanswered message.** _A reference request went to a man who does not answer email, which led to an incomplete file, which meant that nobody read the application. And that in turn meant that I believed I had been judged._ Expensive link: the belief.',
  '**2 A form with no box.** _The form had no box for equipment, which led to nineteen entries saying "staffing", which meant that the staffing level was reviewed and found appropriate. And that in turn meant that the true reason was forbidden in writing._ Expensive link: the notice, because it cannot be undone from below.',
  '**3 A key lent and not asked for back.** _A technician lent a key for one evening, which led to two years of unauthorised use, which meant that nineteen drawings were made on a bench she was not permitted to use. And that in turn meant that she could not show anybody the best work she had ever done._ Expensive link: the silence about the work.',
  '**4 "Due to traffic conditions".** _The form took a noun, which led to ninety true and useless entries, which meant that the depot has no record of any road closure. And that in turn meant that the same closure sent four buses down the same road on the same morning._ Expensive link: the first of the ninety.',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A reference request went to somebody who never answers email.',
  '**B:** It was not returned, which led to an incomplete file, which meant that the application was never put in front of anybody. And that in turn meant that the refusal letter was a standard one and told me nothing.',
  '**A:** Which link is the expensive one?',
  '**B:** Not the refusal. What I decided about myself when I read it, because that lasted four months and the letter lasted a minute.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In most of the six the expensive link is something that happened inside somebody\'s head: a belief, a conclusion, a decision to stop asking. Say the count. Then one sentence and no more: the most expensive consequences in working life are the ones nobody keeps a record of, because nobody fills in a form when they decide to stop trying.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I applied for the second-in-department post in 2019 and heard nothing. I did not ask. Which led to my assuming it had been filled, which meant that I did not apply again in 2021 when it was readvertised, which meant that I have been in the same post for twenty-four years. And that in turn meant that when my own pupils ask me why I never went further, I tell them I did not want it._',
  '**b** _What I concluded about myself is that I am not the sort of person who is appointed to things. The chain does not support it. The chain supports the sentence that I am not the sort of person who asks._',
]));
out.push(A('Answer **b** is the one to look for in every page in Lesson B, and the distinction is the most valuable thing in the unit: _not the sort of person who is appointed_ is a judgement about one\'s worth; _not the sort of person who asks_ is a description of a habit. The first cannot be changed and the second can be changed on Monday.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fares rang them — thirty-one words, the way we practised — and the manager gave him Thursday at nine, and the first thing he said on Thursday was that nobody had told him Fares had applied. He had seen a name on a list of incomplete files. The chain has six links. They asked for one reference from his current employer, which is normal, and the request went to his line manager, who has not answered an email in eleven years — not his, not anybody\'s, and everybody in that company knows it and works round it. Which led to an incomplete file. An incomplete file is not read, which led to the first refusal, and the second one in April was the same file still sitting there. Rasha said so he was never refused, and he said he was never refused, he was never considered — and that in turn meant that for four months he believed he had been weighed and found light, and he stopped applying anywhere else. That is the fourth link and it is the expensive one, not the post: the post had gone to somebody inside the company before he wrote. Nobody in that chain did anything wrong except one man who does not answer emails, and everybody knew that about him, including Fares, who put his name on the form because that is the box. And on Thursday the manager asked him to come and do one day in June, paid, teaching their new representatives. Not the post. One day, because of the car parks.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ which led to I stopped applying → ✓ which led to **my stopping** applying / and that in turn meant that **I stopped**.   ✗ which resulted a refusal → ✓ which resulted **in** a refusal.   ✗ which led to that nobody read it → ✓ which **meant that** nobody read it.   ✗ four steps in one link → ✓ one step a link, or you cannot find the expensive one.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That he had been looked at twice by people who train people for a living and found wanting both times.'));
out.push(A('**2** One telephone call to a man three doors from him, in February, lasting about forty seconds.'));
out.push(A('**3** That he knew his line manager does not answer email, and put his name in the box anyway, and then waited.'));
out.push(A('The opening of this page is worth copying: four flat sentences of dates with no explanation at all. The reader supplies the obvious reason — he was not good enough — and the page then takes it away from them. That is far stronger than opening with _I was never actually considered_, which the reader would have to be argued into. Point it out as a technique; it works in a letter, a complaint and a job application.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FIVE LINKS AND A FLAT** · R. Barakat',
  'In June I applied for a two-room flat in Mezzeh. In July I was told it had gone. In August I was told the same about a second one. In September I stopped looking, and I did not start again until this week.',
  'Here is what happened, in order, and I only found it out on Tuesday.',
  'The agent asks every applicant for a letter from an employer confirming the salary. I asked the hospital office for one. The hospital office issues those letters on a Thursday, and only to the person named, in person, which nobody told me, so the letter was waiting on a desk for eleven weeks.',
  'That letter not arriving led to an incomplete file with the agent, and an incomplete file is not shown to a landlord, which led to both flats going to people whose files were complete.',
  'And that in turn meant that for three months I believed what the agent said to me in July, which was that a woman taking a flat without a man is difficult, and I stopped asking anybody for anything.',
  '**The arithmetic.** Lost flats: two. Lost months: three. Cost of preventing it: one question in June — "how do I collect that letter?" — which took eleven seconds to ask on Tuesday.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**NINETEEN DRAWINGS AND NOBODY HAS SEEN THEM** · L. Sweidan',
  'In my second year I asked a technician for the workshop key for one evening. In my third year I was still using it. In my fourth year I stopped showing my work to anybody. In March I did not enter the faculty exhibition.',
  'Here is the chain, and I have only been able to see it since I wrote the letter.',
  'The key was lent and not asked for back, which led to two years of use that nobody had authorised. Unauthorised use meant that every drawing I made in that room was something I could not explain the origin of, which led to my not entering the exhibition, because the first question anybody asks is where you built the model.',
  'And that in turn meant that nineteen versions of the best thing I have done exist in a cupboard and have been seen by one technician and eleven people in an evening class.',
  '**The arithmetic.** Exhibitions missed: two. Years of work shown to nobody: two. Cost of preventing it: asking the head of department in November 2024, which I did last week, and the answer was yes with a condition that has been available the whole time.',
  '**What I am not going to do.** I am not going to say anything about Abu Rami, who lent a student a key on a Tuesday evening because she asked nicely and who has probably forgotten. The thing I did wrong is that I let the easy version continue for two years.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the first question anybody asks is where you built the model." That is the link nobody outside architecture would see, and it is the one that cost you two exhibitions._   ✓ _"Unauthorised use meant that every drawing..." is three steps in one link; split it and the exhibition becomes a consequence rather than a decision._   ? _What did you conclude about yourself, and does the chain support it?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Most of the expensive links are beliefs. One sentence to close the cycle and then stop: a chain that ends in somebody deciding something about themselves is the most expensive kind there is, and it is the only kind nobody keeps a record of.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Six links, from a reference request to four months of not applying. The arithmetic: one post, four months, and about eleven thousand pounds of the pay rise I did not get. The forty-second action in February: walk three doors down the corridor and say to him, "they will send you an email about me this week — shall I bring you the paper version?" He would have said yes. He says yes to paper. Everybody in that building knows he says yes to paper.']));

// ===================== 7.5 =====================
out.push(pb());
out.push(h2('7.5  Caused, led to, contributed to'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Three of the four are contributions. Make the fourth a genuine cause and make it mechanical — a switch, an engine, a cut wire — because the class needs to see that the strong word is sometimes right.'));
out.push(A('**b** **1** _led to_ — a sequence.   **2** _contributed to_ — one of several.   **3** _caused_ — and it takes the _to_-infinitive: _caused the bus **to stop**_.   **4** _contributed to_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – somebody else\'s report about her.'));
out.push(A('**b** **1** _The loss was caused by the placing of the batch in the second chamber._   **2** It **finishes the question**: a reader who sees _caused by_ has an answer and goes home, while a reader who sees _four things contributed, and removing any one would have prevented it_ has four jobs, three of which are not hers.'));
out.push(NOTE('_Every word of that sentence is true and the word "caused" is false_ is the hardest and best idea in the unit, and it is the one students will take into the rest of their working lives. A true sentence can be a lie when it is complete enough to stop anybody asking the next question. That is 5.5 arriving again in a different grammar.'));
out.push(S('Language box · Practise'));
out.push(A('**1** The broken wheel **led to** the five-week delay _(sequence; the delay also needed the missing form)_.   **2** The dark fitting **contributed to** the seal being missed.   **3** The closed road **contributed to** the 38-minute delay _(it also needed the depot not being told)_ — accept **led to**.   **4** The unanswered email **led to** the four months _(through two further links)_; it did not **cause** them.   **5** Switching the board off **caused** three telephones to be left out overnight — and this one is a real cause: take it away and it does not happen.'));
out.push(A('Item 5 is the item to spend time on. One of the five really is a cause, it is mechanical, and the class should be able to say why: there is no second condition. Everything involving a person has a second condition.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The broken wheel / the five-week delay.',
  '**B:** The broken wheel led to the five-week delay.',
  '**A:** If you take the wheel away, does the delay still happen?',
  '**B:** No. But if you take the missing form away, it does not happen either — so it is a contribution, and so is the form. Neither of them caused it on its own.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Two at most are genuinely _caused_, and both are mechanical — the board switch and, at a stretch, the closed road. Everything involving a person is a contribution. The generalisation is worth writing up: **a cause has no second condition, and anything with a person in it has a second condition.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The boy who left school. Four things were true: there is no line on the register for "has stopped coming"; I marked him absent twenty-one times; four of us each assumed another had rung; and nobody in his family rang the school. Take any one away and somebody rings him. Four contributions, no cause._',
  '**b** _The one that has been treated as the cause is the fourth — his family. By everybody, including me, in the staff room, in November._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The hospital has finished its own report on batch 41. It is one page, Yara is in it twice, and there is one sentence that is wrong in a way she says she could not have explained in September: "the loss was caused by the placing of the batch in the second chamber." Rasha said which you did, and Yara said which she did, on the Thursday, knowing about the seal — every word of that sentence is true and the word caused is false. Fares asked how a true sentence can be false, and she said because caused means this, and this alone, and if it had not happened nothing else would have mattered. Four things were true that week: the seal had been splitting for three days; the report about it had been in an empty drawer for fourteen months; the first chamber was full of finished work nobody had taken out; and she put the batch in the second door. Take any one of those four away and there is no loss at all — so not one of them caused it, and four of them contributed to it. Ms Huda asked what the report\'s version does to a reader, and Yara said it finishes the question: a reader who sees "caused by the placing of the batch" has an answer and goes home. She has asked for one word — contributed to, in place of was caused by — and a sentence listing the other three. Not for her name to come out; it should be in it, because she made the choice.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ contributed in → ✓ contributed **to**.   ✗ caused to the loss → ✓ **caused** the loss.   ✗ led the loss → ✓ **led to** the loss.   ✗ it caused the bus stop → ✓ caused the bus **to stop**.   ✗ _caused_ where there is a second condition → ✓ **contributed to**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** One word — _was caused by_ to _was contributed to by_ (or the sentence rewritten with _contributed to_) — and one added sentence naming the other three conditions.'));
out.push(A('**2** Four. The removal of **any one of them** would have prevented the loss.'));
out.push(A('**3** To be removed from the report, and to dispute the account of what she did. _I made the choice and the record should say so. I am asking that it should not be the only thing the record says._'));
out.push(NOTE('The last paragraph is why the committee changed the word. A request that would also remove the writer\'s own name can always be refused as self-interest; a request that insists the name stays cannot. Teach it as a general move: give up the thing you could be accused of wanting, in writing, before you ask for the thing you actually want.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of year · **Subject:** The November note about the third-year boy — one word',
  'Dear Sir,',
  'I have read the note. I am in it and the account of what I did is accurate. I am asking for one word to be changed, and I am not asking for my own name to be taken out.',
  '**The word.** The note reads: "The pupil\'s withdrawal was caused by a lack of family engagement." I ask for _was caused by_ to be replaced with _was contributed to by_.',
  '**Why.** _Caused_ means that this, and this alone, produced it. Four conditions were present and the removal of any one of them would have prevented the withdrawal: there is no line on the weekly return for a pupil absent three sessions; I marked him absent twenty-one times without reporting it; four members of staff each assumed another had telephoned; and nobody in his family telephoned the school.',
  '**The sentence I am asking you to add.** "Three further conditions contributed: the absence of a reporting line on the weekly return, twenty-one unreported absences, and four assumptions that another member of staff had made contact."',
  '**What I am not asking for.** I am not asking to be left out of it. Twenty-one of those marks are mine.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**To:** the depot manager · **Subject:** The 14 April delay report — one word and one date',
  'Dear Sir,',
  'I have read the report on route 7. Everything in it about what I did is correct: I selected the Qaboun route and it added eleven kilometres. I am asking for one word to be changed and one date to be added, and I am not asking to be left out of it.',
  '**The word.** Paragraph 3 reads: "The delays were caused by driver route selection." I ask for _caused by_ to be replaced with _contributed to by_.',
  '**Why.** Four conditions were present on 14 April and the removal of any one of them would have prevented four late buses: the service road was closed at 06.00 for resurfacing; the depot was not informed; there is no means by which a driver on the road can inform the depot; and I turned at the junction rather than waiting. Take away the third and bus 2 would have told you at 06.40 instead of at 08.00, and buses 3 and 4 would have gone round.',
  '**The date I am asking you to add.** 06.00 on 14 April, as the time the road was closed. The report does not contain it, and without it paragraph 3 reads as though four drivers each made a bad decision for no reason.',
  '**What I am not asking for.** I made the turn. Put it in.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"without it paragraph 3 reads as though four drivers each made a bad decision for no reason." That is the sentence that would make me amend it._   ✓ _"and I turned at the junction rather than waiting" is listed as a condition but you do not say what waiting would have cost; a reader will assume nothing._   ? _If I change this word, what will somebody have to do that they do not have to do now?_ — find out why the depot was not told, which is the point.'));
out.push(S('Stage 7R · Share'));
out.push(A('Nearly all contributions. And nearly all the people who wrote _caused_ were finishing a form rather than being unfair — the same finding as 5.5, arriving from the grammar instead of from the ethics. Say the two numbers and let the class draw it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['From a newspaper: "The fire was caused by an electrical fault." Test: take the fault away — no fire, so far so good. But the report also says the building had no working alarm, that the stair door had been propped open, and that the fire doors on the second floor had been reported twice. Take any one of those away and three people do not die, and the fire is still a fire. So the fault caused the fire and four things contributed to the deaths, and the sentence as written puts an electrician at the centre of a story about four doors.']));

// ===================== 7.6 =====================
out.push(pb());
out.push(h2('7.6  The evidence paragraph'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Make two of the four claims genuinely evidence-free — _students do not work any more_, _nobody reads anything round here_ — and let the class discover that the question cannot even be asked of them.'));
out.push(A('**b** Claims: **2** _long blocks are dangerous_, **4** _nights are hard_. Evidence: **1** _all seven errors were on the fourth or fifth night_, **3** _none was on the first, second or third_.'));
out.push(NOTE('Items 1 and 3 together are a complete body of evidence and neither of them is a claim. Point out that the evidence is **two** sentences, not one: what happened, and what did not. A count with no negative half is half an argument, which is the same structural idea as the honest _has not been_ in 5.6 and the counted loss in 4.1.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a written case for three-night blocks.'));
out.push(A('**b** **1** **Claim · Evidence · The limit of the evidence · What it does not show.**   **2** It is the one nobody writes, and the one that gets the rota changed — a reader who has been told what your evidence does not show stops looking for the hole, because you have shown them where it is.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 Four models are badly assembled.** _Claim: on four models the screen adhesive is applied inconsistently. Evidence: 15 units of one model in seven months, all from two shops, all sold Jan–Mar, uneven adhesive line in 15 out of 15. Limit: one counter, one city, no access to any other repairer\'s records, and I identified the fault myself. What it does not show: nothing about the other nineteen models I handle, and nothing about whether the factory knows._',
  '**2 The syllabus and the examination are out of order.** _Claim: chapter 7 is examined before the printed order teaches it. Evidence: four years of papers; chapter 7 content appeared in June in 2022, 2023, 2024 and 2025, and the printed scheme places it in the second term. Limit: one subject, one school, and I do not know what other schools do. What it does not show: that the examination is wrong, or that the chapter order is wrong — only that the two were set by different people._',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The forms are useless.',
  '**B:** Claim: the reason box on the delay form is too small to hold a usable reason. Evidence: I have filled in about ninety and never written more than four words; the depot file holds all of them and the four words are the same four words. The limit of it: one driver, one route, and I have not read anybody else\'s. And what it does not show: it does not show that the rest of the form is bad, and it does not show that a bigger box would get a better reason out of anybody but me.',
  '**A:** But a bigger box would not make people honest.',
  '**B:** I said that in sentence four.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In a well-built paragraph every attack has already been answered in sentence 3 or 4. That is not rhetoric; it is what the shape is for, and the class discovers it by failing to land an attack. When an attack does land, the paragraph has a fifth thing in it that should have been in sentence 4.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Claim: one handle mechanism on one window in Room 9 is the reason two children cannot write in January. Evidence: six written notes in six years, two children in gloves, one of them twice unable to hold a pen in the last ten minutes. Limit: I have measured nothing and I have no thermometer; I am describing two children and one window. What it does not show: nothing about the school, which is warm, and nothing about whether a new handle would fix the gap — it might need the whole casement._',
  '**b** _It started as "the school is cold in winter" and it has ended as one handle. That took about nine minutes._',
]));
out.push(A('The claim always gets smaller, and the shrinking is the work. Collect the before-and-after pairs in Stage 7R and say the generalisation once: a claim small enough to be defended is also small enough to be granted, and those are the same property.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has been trying to write the case for three-night blocks for a month and it kept coming out as a complaint. Her first line was that nights on the ward are extremely difficult and the rota is not sustainable, and Ms Huda said that is a feeling with a long word in it, and asked for four sentences: claim, evidence, the limit of the evidence, and what it does not show. The claim is that five nights in a row is materially harder than three, and that the difference shows in errors and not in how tired anybody says they are. The evidence is that in 118 consecutive night shifts she made seven errors, that all seven were on the fourth or fifth night of a block, and that none was on the first, second or third. The limit is that it is one nurse, on one ward, over nine months, and that she recorded the errors herself, so the count depends on her having written down her own mistakes honestly — and she did not write down the first two until February. Fares asked why she would give them that, and she said because they will find it: if they find it and she has not said it, everything else is a claim, and if she says it first it is a limitation of a finding. And the fourth sentence is what it does not show — not that night work is unsafe, nothing about the day staff, and not that a three-night block would produce no errors. Ms Huda said that is the one nobody writes and the one that gets the rota changed.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ opening with the numbers → ✓ claim first, or the reader guesses what the numbers are for.   ✗ two claims and one body of evidence → ✓ one claim a paragraph.   ✗ a claim bigger than the evidence → ✓ shrink the claim, not the evidence.   ✗ leaving out sentence 3 → ✓ say the weakness first; it is the cheapest credibility there is.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That she did not record them until February, and that they are in the book with a later date and she has **marked** them.'));
out.push(A('**2** The second trolley, in the workshop since 2 February, which has lengthened every round in the period — so the blocks are not the only factor.'));
out.push(A('**3** _If the trial produces errors on the second and third nights, I will have been wrong and I will say so in writing._'));
out.push(NOTE('Naming the trolley in sentence 4 looks like a mistake and is the opposite. It is 7.5 applied to her own argument: she is not claiming that blocks **caused** the errors, only that they contributed, and a reader who has been told about the trolley by her will not discover it later and throw the whole page away. Students resist this harder than anything else in the unit.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FOURTH-YEAR ORDER** · S. Dibo · for the department',
  '**Claim.** Chapter 7 is examined in June before the printed scheme teaches it, in this school, every year. I am asking to move chapter 7 to the second term in our own scheme.',
  '**Evidence.** I have the June papers for 2022, 2023, 2024 and 2025. Chapter 7 content appears in all four, worth between 8 and 14 marks. The printed scheme places chapter 7 in the third term, and in each of those four years we taught it in May or not at all. The pass rate on those questions in my own classes was 31, 28, 35 and 29 per cent, against 61 to 74 per cent on every other question.',
  '**The limit of this evidence.** Four years, one school, one subject, and the mark analysis is mine and not the directorate\'s. I do not know what other schools do and I have not asked.',
  '**What it does not show.** It does not show that the examination is wrong or that the printed order is wrong — only that the two were set by different committees. And it does not show that moving the chapter would raise those marks; the questions may be hard for other reasons.',
  '**What I am asking for.** One year, our own scheme, chapter 7 in the second term, with the same mark analysis done next June. If the marks do not move, I will have been wrong and I will say so at the September meeting.',
]));
out.push(S('Stage 7 · Write freely (sample, 175 words)'));
out.push(SAMPLE([
  '**FOUR MODELS** · M. Hariri · for the two shops, and for anybody at the supplier',
  '**Claim.** On one model, sold in this city between January and March, the screen adhesive is applied inconsistently enough to cause the lower corner to separate within about a year. I am asking for one thing: the name of somebody at the supplier.',
  '**Evidence.** Between 3 September and 2 April I repaired that fault on that model 15 times. All 15 were bought from two shops in Shaalan. All 15 were sold between January and March. In 15 out of 15 the adhesive line was uneven and the brush strokes were visible under a lamp. In 3 of them the adhesive had run into the earpiece; in 2 there was none along the lower edge. 9 of the 15 had been carried in a case, so it is not how people treat them.',
  '**The limit of this evidence.** One counter, one city, seven months. I identified the fault and I am not a manufacturer. I have no way of measuring an adhesive line, so "uneven" means what my eye and a lamp can see. I have not seen any other repairer\'s records and I have not asked for any.',
  '**What it does not show.** It does not show that the model is badly designed; the design of the frame is ordinary. It does not show that the factory knows. And it does not show how many of the batch are out there — 15 is the number that came to one counter.',
  '**Claim before: "that model is badly made." Claim after: one step, one quarter, two shops, a name.**',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"\'uneven\' means what my eye and a lamp can see." You have given me the limit of your own instrument, which is the thing nobody ever does._   ✓ _"enough to cause the lower corner to separate within about a year" — that is a causal claim bigger than your evidence; you have fifteen separations, not a mechanism._   ? _What would make you wrong?_ — the page does not say, and it should: a batch of fifteen from the same quarter with a clean adhesive line would.'));
out.push(S('Stage 7R · Share'));
out.push(A('Every second claim is smaller. Then the closing question: how many of the small ones could be granted as a three-month trial by one person? Most of them — which is why they got smaller, and the class should say that rather than hear it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '**Claim.** Three-night blocks rather than five, for one nurse, for three months.',
  '**Evidence.** 118 shifts, 7 errors, all on a fourth or fifth night, none on a first, second or third; none at all in the eleven weeks of three-night blocks before March.',
  '**The limit.** One nurse, nine months, errors recorded by me, two of them written up late and marked.',
  '**What it does not show.** Nothing about night work in general, nothing about anybody else, and not that three nights would produce none.',
  '**What would make me wrong:** an error on a second or third night of a three-night block during the trial. If that happens I will write it in the book on the night and say so at the next meeting, and I will not argue that it was something else.',
]));

// ===================== 7.7 =====================
out.push(pb());
out.push(h2('7.7  Review & Mediate: What does this report say caused it?'));
out.push(S('Stage 1 · Unit 7 quiz – corrections'));
out.push(A('**1** **Because** the road was closed, we were late. / **Due to the closure of** the road, we were late.   **2** **Because** there was one trolley, the round ran late. / There was one trolley, **so** the round ran late. _(not both)_   **3** It was **such a** bad road that two buses were damaged.   **4** It contributed **to** the loss.   **5** Which led to **my stopping** applying. / **And that in turn meant that I stopped** applying.   **6** **So much** water had run in that it reached the earpiece.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Mazen says **paragraph 2** is the only honest one, because it is the only sentence on the page with evidence attached and the only one anybody could check. Lubna finds that **paragraph 4** — _owing to administrative factors the report was not actioned_ — has had the post, the man who left in March, the fourteen months and the drawer taken out of it: six words, all true. And because _owing to_ needs a noun and the real reason was a sequence, somebody had to invent a thing, so **the grammar chose the lie**.'));
out.push(NOTE('_The grammar chose the lie_ is the sentence the whole unit has been built to earn, and it is why 7.1 comes first. Nobody in that report set out to conceal fourteen months. Somebody reached for a connective that requires a noun, had no noun, and manufactured one — and the sentence that came out is true, complete, and unfixable. Students who have been taught that bad writing is dishonesty will find this harder and more useful than anything else in the book.'));
out.push(S('Language box – reading a report that gives reasons'));
out.push(A('No exercises. Use it as the checklist for Stage 3. Three habits to drill: **find the sentence with evidence attached and say so first**; **test every _caused_**; and **look at what a _due to_ has been forced to invent**.'));
out.push(S('Stage 3 · Practise (sample – Report A, a school)'));
out.push(SAMPLE([
  'Six paragraphs, and paragraph 2 is the only one with evidence attached — the paper was issued at the correct time and the invigilation sheet is there. I would say that first, because it is true and because it is the only thing on the page anybody could check.',
  'Paragraph 3 says the failure was caused by the candidates\' inability to manage the time. Take the time management away: four candidates with recorded reading difficulties, in an examination with no support available, still do not finish. So it is a contribution at most.',
  'Paragraph 5 is the invented noun. "Owing to resource factors no additional support was available." _Resource factors_ is not a thing. What has been taken out is who decided, when, and whether anybody asked — and the real reason is almost certainly a sequence, which is why a noun had to be made up.',
  'And paragraph 4 is where the reading difficulties were put, under "it is noted that", so that they would not be in paragraph 3.',
  'The one word is _caused_ in paragraph 3. The one sentence is in paragraph 5 and it should name the date on which support was requested and the person who refused it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Report A: the word is in paragraph 3 and the sentence must bring the reading difficulties out of _it is noted that_ and into the list of contributions. Report B: the same word, and the sentence must name the road closure, the time, and the fact that the depot was not informed. Point out that both reports hide their best information in paragraph 4 under the same four words.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark the three things, in order: **what is good**, **the one word**, **the one sentence that should name a date**. A report that starts with the objection gets an argument; a report that starts with _paragraph 2 is good and I am grateful for it_ gets a conversation. Then mark the decision at the end, which in the model is to go back to a reference written in 2022 and find out which of its sentences has any evidence attached at all.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 5'));
out.push(A('**1** A   **2** A   **3** B   **4** A   **5** C   **6** B'));
out.push(A('_Notes:_ **1** _which is **why**_ — the clause explains a consequence. **3** _would have **prevented** the loss_ is the collocation; the other three take an object of a different kind. **4** _what a word **does** to a reader_ — only _do_ works with _to_ here. **5** _four things **contributed** to it_ — the other three cannot take _to_. **6** _**although** she expects to be refused_: _despite_ needs a noun, _however_ needs punctuation, _instead_ is not a conjunction.'));
out.push(NOTE('Reading Part 5 is six marks for about six minutes and it is the most learnable part of the paper, because three or four of the six items are always **collocation or dependent preposition** rather than meaning. Teach the habit of reading the words **after** the gap first: _prevented the loss_, _contributed to it_, _does to a reader_. Students who read only the sentence before the gap lose two marks every time.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'It is six paragraphs. The only one with evidence attached is paragraph 2 — the temperature log, which shows no variation — and I would say so first.',
  'Paragraph 3 says the loss was **caused** by the placing of the batch in the second chamber. Take the placing away and the seal is still split, the report is still in an empty post and the first chamber is still full, so it is a contribution and not a cause.',
  'Paragraph 4 says "owing to administrative factors", and _owing to_ needs a noun, so somebody had to invent one. What has been taken out is the post, the man who left in March, and the fourteen months.',
  'The other causes have been moved to paragraph 4, under "it is noted that", so that they are not in the sentence with _caused_ in it.',
  'So there are three things to say: paragraph 2 is good; paragraph 3 should say _contributed to_, with a sentence listing the other three; and paragraph 4 should name the post and the date, because "administrative factors" cannot be fixed and an empty post can.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 152 words)'));
out.push(SAMPLE([
  'Dear Sam,',
  'Apply one test to the word "caused": take that person\'s action away and ask whether the thing still happens. If it might — because something else was also true — then the report means "contributed to", and you can say so without disputing a single fact in it.',
  'That is how a true sentence can still be wrong. "Caused" means this and this alone, so a sentence can be accurate about what somebody did and false about what it explains. A reader who is given "caused" has an answer and stops; a reader who is given "four things contributed" has four things to look at.',
  'Then look at any "due to" or "owing to" in it. Both have to be followed by a noun, so if the real reason was a sequence of events, somebody will have invented a noun — "resource factors", "administrative factors". Those are the places where the most has been taken out.',
  'Ask for one word and one sentence, and write the sentence for them. Do not ask for the person\'s name to be removed; that is the request they can refuse.',
  'Tell me what the word turns out to be.',
  'Yours, Yara',
]));
out.push(S('Unit 7 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** c   **3** a   **4** b   **5** a   **6** a   **7** b   **8** c'));
out.push(A('_Notes:_ **1** a clause follows, so _because_. **2** a noun follows, so _due to_. **4** _such a_ + adjective + singular noun. **5** _light_ is uncountable, so _so little_. **8** the one genuine cause in the eight, and it takes the _to_-infinitive: _caused the lights **to go out**_.'));
out.push(S('Unit 7 check  ·  B  Listening (Part 3, note completion) – Track 7.15'));
out.push(A('**1** 2nd / second   **2** form   **3** five / 5   **4** 80 / eighty   **5** 19 / nineteen   **6** 8th / eighth'));
out.push(A('Gap **4** is the one students lose: the extract gives two numbers in one clause — _between fifty and eighty minutes over_ — and the note asks for the second. Part 3 always has one gap where the answer is the second of two adjacent numbers.'));
out.push(S('Unit 7 check  ·  C  Writing (sample, 148 words)'));
out.push(SAMPLE([
  '**Claim.** One handle mechanism on one window at the back of Room 9 is the reason two children cannot write properly in January. I am asking for the handle.',
  '**Evidence.** The window has stood about four centimetres open at the top since before I came, six years ago. I have written six notes about it. In January this year the two children who sit beneath it wrote in gloves for eleven lessons, and one of them twice stopped writing in the last ten minutes because she could not hold the pen. Three identical casements on the same corridor shut properly.',
  '**The limit of this evidence.** I have measured nothing. I have no thermometer and no draught gauge. It is two children, one window, one January, and I am the only person who has written any of it down.',
  '**What it does not show.** Nothing about the school, which is warm. Nothing about the other eight rooms. And not that a handle would close the gap — it may need the whole casement, and if it does I would like to know that.',
  '**What I am asking for.** One handle, or one examination of the casement by somebody who knows what they are looking at. Twenty minutes.',
]));
out.push(S('I can… (Unit 7)'));
out.push(A('Self-assessment; no answers. The three that matter are the second, the sixth and the eighth: noticing when a _due to_ has invented a thing, choosing between _caused_ and _contributed to_ by the test, and writing the four sentences. A class that ticks the connectives and not those three has learnt some linkers and missed the unit.'));
out.push(box('Looking ahead to Unit 8', [
  'Unit 7 was about what happened and why. **Unit 8** is about what **would** happen: _if I were you, I\'d… · if they changed the rota, the errors would move · unless somebody asks, nothing will change._ The second conditional is the grammar of every piece of advice anybody in this room will ever be asked for, and 8.5 and 8.6 are about giving it to somebody senior and to somebody you have never met.',
  'The Unit 7 NEXT box asks for **one piece of advice you were given and did not take, and one you gave that was not taken**, with what you think would have happened in each case. 8.1 opens on both columns and 8.7 is built from them. Collect it.',
  'Two things to carry forward. **Fares does his one day in June** — it is one line in 9.5 and it is not flagged. And the **7.6 evidence paragraph is opened again in 12.7**, where the class is asked whether the claim has got smaller again in five units.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 7 · Answer Key');
