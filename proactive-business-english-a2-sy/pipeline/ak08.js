// Proactive Business English A2 · Syria Edition · Book 1 · Unit 8 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 8  Last Week at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 8.1 =====================
out.push(h2('8.1  I checked the stock and signed the note'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _I opened the shop. I counted the till. I telephoned two suppliers. I printed the orders. I cleaned the window._'));
out.push(p('**b**  check → **checked** · call → **called** · carry → **carried** · stop → **stopped** · arrive → **arrived** · tidy → **tidied**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Thursday afternoon — Nour is about to write the week)   **b**  1 The Homs order; she also printed the delivery notes.  2 The Aleppo invoices.'));
out.push(p('**Language box – Practise:**  1 checked  2 didn\'t finish  3 Did … print  4 arrived  5 opened'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The week. Before you write it, tell me.'],
  ['B', 'On Sunday I counted the stock and I ordered the bread.'],
  ['A', 'And Monday?'],
  ['B', 'Monday I cleaned the fridges and I changed the prices. The new list arrived at eight.'],
  ['A', 'Good. Tuesday?'],
  ['B', 'Tuesday I served about ninety customers. We closed late — at half past nine.'],
  ['A', 'And what didn\'t you finish?'],
  ['B', 'The summer order. I started it twice and I stopped twice.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the unfinished thing and the reason. Typical errors: _didn\'t finished_; _she checkeds_; _I was check_ — a learner reaching for the past and taking _was_ with them.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Did…', 'Didn\'t finish…', 'Why not'], [
  ['Rasha', 'counted the stock, trained the new boy, changed the prices', 'the summer order', 'the supplier did not send the new list'],
  ['Fadi', 'four Homs runs, two Hama runs, serviced the van', 'the delivery notes for Wednesday', 'he writes them in the yard and it rained'],
  ['Samir', 'fitted two windows, measured a shopfront', 'the second window', 'the glass arrived cracked'],
], [1, 1.6, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Last week Samir fitted two windows and measured a shopfront. He didn\'t finish the second window, because the glass arrived cracked."', 'The reason that stops most people is nearly always **somebody else** — a supplier, a signature, a part. It is the same reason most weeks, which is the useful finding.']));
out.push(stage('5', 'Read'));
out.push(p('1 Hala started at the trade counter; they opened together and she served fourteen customers alone in the afternoon.  2 Up by 160,000 (1,340,000 against 1,180,000).  3 Because the unfinished work has a **reason somebody can act on** — nobody else can answer the counter yet — and she wants it read as information, not as a grievance.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE WEEK — 7 to 11 May** · Rasha Hamdan, for the owner.  **What we did.** On Sunday we counted the whole stock and ordered from both suppliers. On Monday we changed 140 prices and cleaned the fridges. On Tuesday we served about ninety customers and closed late. On Wednesday we trained the new boy on the till.  **The figures.** Takings 2,100,000 (last week 1,850,000). Bread wasted: 11 loaves (last week 38).  **What we did not finish.** The summer order. The supplier did not send the new price list, and I did not want to order at last year\'s prices. I telephoned twice.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Past simple throughout; plain verb after _didn\'t_', '✓'],
  ['A figure with last week\'s beside it', '✓ – two of them'],
  ['Unfinished work, written unasked', '✓'],
  ['A reason somebody could act on', '✓ – the missing price list'],
], [3, 2]));
out.push(p('Sample feedback: "The waste figure next to last week\'s is the strongest line in the report. What would have to happen for you to finish the summer order?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('A manager can help with an unfinished item when the reason is **outside the writer**: a missing list, an unsigned form, a person who is never free. _I ran out of time_ is true and unhelpable.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['The week before my brother travelled, we packed every evening. On Sunday we collected his papers. On Monday we visited my grandmother and she cried and then laughed at herself. On Tuesday the agency telephoned and changed the flight. We rushed, we waited, we rushed again. On Thursday we carried four bags to the bus at five in the morning, and nobody talked.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody talked" — the whole week is in those two words._   ✓ _Check the past of "visit" — you wrote "visitted"._   ? _Has he arrived?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The /ɪd/ ending is the one learners drop: _started, printed, waited, wanted, needed, visited_. Say them as a chant; the rule is only _after t or d_ and it is worth two minutes of drill, not a grammar explanation.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Yesterday I opened the shop at eight. I counted the till. I telephoned the bakery. I served about forty people. I closed at nine.  I didn\'t clean the window. I didn\'t finish the order. I didn\'t telephone my sister. I didn\'t eat lunch. I didn\'t stop until five.']));

// ===================== 8.2 =====================
out.push(pb());
out.push(h2('8.2  He went to Homs and saw four customers'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  go → **went** · see → **saw** · have → **had** · do → **did** · make → **made** · take → **took** · send → **sent** · write → **wrote** · get → **got** · come → **came** · say → **said** · give → **gave**'));
out.push(p('**b**  Open — and the pocket card is not a joke. The three a learner hesitates over are the three that will come out wrong under pressure in Unit 12.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both — an order and a complaint)   **b**  1 Six: four in Homs, two in Hama.  2 That the March delivery came two days late and nobody telephoned him.'));
out.push(p('**Language box – Practise:**  1 went  2 saw  3 didn\'t get  4 Did … send  5 said'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'You went to Aleppo and Idlib in two days? How was it?'],
  ['B', 'I went to Aleppo on Tuesday and Idlib on Wednesday. I saw three suppliers.'],
  ['A', 'Did you get a better price on the tape?'],
  ['B', 'I got it — twelve per cent down if we take forty rolls. I sent you the figures that night.'],
  ['A', 'And the gloves?'],
  ['B', 'We lost the glove supplier. He closed in February and nobody told us. One of them also made a complaint: our last order came with no invoice.'],
  ['A', 'Did you promise anything?'],
  ['B', 'I promised the invoice by Thursday. I didn\'t promise a new glove supplier — I don\'t have one yet.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners count distinct irregular pasts; a good performance has six or more. Typical errors: _didn\'t went_, _did you got_; _he said me_ → _he **told** me_ / _he said **to me**_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Their story in one line', 'Irregular verbs I heard'], [
  ['Rasha', 'she took her mother to Homs and the car broke down', 'took, went, had, got, came, said'],
  ['Fadi', 'he drove to Latakia and saw the sea for the first time in nine years', 'drove, saw, was, made, gave'],
  ['Samir', 'he lost his papers at the border and found them in his own bag', 'lost, went, did, found, felt'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi drove to Latakia on Friday and saw the sea for the first time in nine years. He said he sat on the wall for an hour and did nothing."', 'The irregular most often got wrong in a class is usually **brought / bought** or **felt / fell** — pairs that sound alike, not rare verbs.']));
out.push(stage('5', 'Read'));
out.push(p('1 The new branch has a store room, so he can take the big boxes.  2 Not that the delivery was late — that **nobody telephoned him** about it.  3 A wide-wrap price for the two Homs shops, by Wednesday; after Wednesday they will have asked somebody else.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TRIP NOTE — Aleppo and Idlib, 23–24 April** · Bassel Nassif.  **Aleppo, Tuesday.** I saw three suppliers. Shamsi Packaging gave me twelve per cent off the tape if we take forty rolls, because they are clearing the old size. I sent the figures the same evening.  **Idlib, Wednesday.** I saw one supplier and lost one: the glove man closed in February and nobody told us. The supplier I did see made a complaint — our March order went out with no invoice and his accountant chased him for it.  **What I promised.** The invoice by Thursday, and a telephone call when the tape price is agreed. I did not promise to keep the old glove price; I have no supplier to keep it with.  **What I need.** A decision on forty rolls of tape by Sunday. The offer ends when the old size is gone.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Irregular pasts correct; plain verbs after _didn\'t_', '✓'],
  ['The complaint in the customer\'s terms', '✓ – his accountant chased him'],
  ['What was promised **and** refused', '✓'],
  ['A need with a date and a consequence', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The need done first is the one whose **consequence is dated**: _the offer ends when the old size is gone_. A need with a deadline and no consequence slides by a week at a time.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['We left for the coast at six and got to Homs at eight. Then the car made a noise and we stopped. A man came out of a house and looked at the engine for twenty minutes and said one word: belt. He gave us tea while his son went for the part. We paid him and he took nothing for the tea. We arrived at four instead of eleven. Next time I would take a spare belt, and I would stop at that house again.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"he took nothing for the tea" — that is the whole story._   ✓ _Check "payed" → **paid**._   ? _Did you ever go back?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Keep the class\'s irregular list on the wall through Units 9–12 and add to it. It is the single most useful piece of paper in the second half of this book.'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample(null, ['The twenty to test: be, have, do, go, come, see, get, give, take, make, say, tell, send, write, read, find, buy, bring, leave, put.', '_Copying out only the wrong ones is the point. A learner who copies all twenty is practising the fifteen they already knew._']));

// ===================== 8.3 =====================
out.push(pb());
out.push(h2('8.3  It was a busy week'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Insist on the **why** — the adjective alone is not the task.'));
out.push(p('**b**  It **was** busy. · The figures **were** good. · There **was** a problem on Tuesday. · There **were** two problems. · I **was** at the bank.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (busy)   **b**  1 It was Hala\'s first day at the counter, so Nour was with her all morning and the telephone rang the whole time.  2 Thursday — Ms Shamsi was there and the wrap price was agreed.'));
out.push(p('**Language box – Practise:**  1 was  2 were  3 were  4 wasn\'t  5 Were … weren\'t'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I was away four days. How was it?'],
  ['B', 'Hard. Not bad — hard. Monday and Tuesday were normal.'],
  ['A', 'And Wednesday?'],
  ['B', 'Wednesday was the difficult one. The doctor was ill, so there were forty patients and only two nurses.'],
  ['A', 'Were there many complaints?'],
  ['B', 'There were three, and all three were fair. Everybody was tired by two.'],
  ['A', 'What was the best thing?'],
  ['B', 'The new appointment book. Nobody waited more than half an hour on Thursday. That was the best thing — and the cheapest.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one word and the best thing. Typical errors: _there was many customers_; _I were_; _it was bad_ with no reason, which is where the cycle is doing its work.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'The week in a word', 'Best thing', 'Worst thing'], [
  ['Rasha', 'long', 'Thursday — the new boy served alone', 'the supplier who never called back'],
  ['Fadi', 'wet', 'the road was empty on Friday', 'writing notes in the rain'],
  ['Samir', 'expensive', 'he finished the school job', 'the cracked glass — he paid for it himself'],
], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For Samir last week was expensive, because the glass arrived cracked and he paid for it himself. The best thing was finishing the school job."', 'The word most people choose says more about the month than about the week. Ask the class why.']));
out.push(stage('5', 'Read'));
out.push(p('1 That nothing serious happened — it is a calming line, not a literal one.  2 Nervous at nine, fine by eleven.  3 In the blue tray, in order, with the new ones on top.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**FOR THE OWNER — the four days you were away.**  In one word: **long**. Nothing was lost and nobody left.  **Sunday** was normal. The takings were right and the bread order was in by nine.  **Monday** was the difficult one. The electricity was off from ten until two, so the fridges were closed and we sold nothing cold. There were about sixty customers and most of them were patient.  **Tuesday** was the best day. The new boy served alone for two hours. He was slow at first and quick by the afternoon.  **The one thing that was not done:** the summer order. The price list was not sent and I was not willing to order at last year\'s prices. The old list is on the desk, with my notes on it in pencil.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_was/were_ correct, incl. _there was/were_', '✓'],
  ['One word in the first line', '✓'],
  ['A calming line', '✓'],
  ['The unfinished thing, with its location', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The first two lines decide whether the rest is read calmly. _In one word: long. Nothing was lost and nobody left._ — the reader\'s shoulders come down and then they can take in the electricity.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['The winter we moved was the strangest time. At first the flat was empty and cold and every sound was loud. There were no curtains and the light at night was orange from the street. By February there was a table, and my mother\'s pictures were on the wall, and it was warm in the kitchen. Nothing was different and everything was.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"Nothing was different and everything was." — I will remember that._   ✓ _Check "there was no curtains" → **there were no curtains**._   ? _Do you still live there?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A sentence of change usually has **two times in it**: _at first… by February…_ · _she was nervous at nine and fine by eleven_. Point at the structure, not at the feeling.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Our house was small and the roof was flat. There was one big room and we were all in it. The stairs were outside. In summer there were tomatoes on the roof and the water tank was always empty by August. My grandmother\'s chair was by the door and nobody else sat in it.']));

// ===================== 8.4 =====================
out.push(pb());
out.push(h2('8.4  When did you send the invoice?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Samples: _When did you send it? · Who did he speak to? · How many did they see? · Why did she telephone?_'));
out.push(p('**b**  _**Who did you telephone?**_ asks about the **object** — the person you called, and it needs _did_. _**Who telephoned you?**_ asks about the **subject** — the person who did it — and takes **no** _did_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (an invoice was not received)   **b**  1 On the twelfth, the same day it was issued, by email at 4.20.  2 That the address on the invoice was missing one letter — k.son instead of k.sons.'));
out.push(p('**Language box – Practise:**  1 When did you send it?  2 Who did you send it to?  3 Did you get a reply?  4 Who telephoned you? (no _did_)  5 What did the order form say?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The school says they never had the delivery. When did you send it?'],
  ['B', 'On the eighth. Let me look… yes, the eighth, in the morning.'],
  ['A', 'Who did you send it with?'],
  ['B', 'With Fadi, on the Homs run.'],
  ['A', 'And did he get a signature?'],
  ['B', 'He got one. It\'s on the note.'],
  ['A', 'Did anybody read the name on the signature?'],
  ['B', 'Nobody did. Should I have?'],
  ['A', 'Wait — what address did the note say, exactly?'],
  ['B', 'The school, Zahra Street… that\'s the old branch. They moved in January.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the question that found the cause. It is almost always the **last** one and almost always the most **specific** — _what did it say, exactly?_ Typical errors: _did you sent_; _who did telephone you?_; a long open question (_what happened?_) that finds nothing.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['My problem', 'Questions they needed', 'The question that found it'], [
  ['the parcel never arrived', '6', '"Which door did you leave it at, exactly?"'],
  ['the order was short by two boxes', '4', '"Who counted them — you or the driver?"'],
], [1.6, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My problem was that the order was short by two boxes. Rasha found it in four questions. The question was: who counted them — you or the driver?"', 'The kind of question that works is almost never **why**. _Why_ invites an explanation; _who_, _what exactly_ and _when_ get facts.']));
out.push(stage('5', 'Read'));
out.push(p('1 One letter was missing: it went to k.son@mail.sy instead of k.sons@mail.sy, and no error message came back.  2 Because they do not telephone after an invoice and most customers never reply, so silence looked normal.  3 Changing: the email address is copied by one person and read back by another. **Not** changing: invoices still do not get a follow-up telephone call.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHAT HAPPENED — the school delivery, 8 May** · Rasha Hamdan, 12 May.  **The problem.** The school says it never received the delivery of 8 May (twelve boxes, 340,000).  **What we found.** The delivery was made on the eighth, in the morning, and a signature was taken. The address on the note was Zahra Street — the school\'s old building. The school moved in January. The signature is a caretaker\'s, and the boxes are still in the old building.  **Why nobody noticed.** We copy the address from the previous order, and the previous order was from last year. Nobody reads an address they have typed twenty times.  **What we have done.** The boxes were collected on the eleventh and delivered the same afternoon. Nothing was lost.  **What we are changing.** Addresses are checked against the customer\'s last **invoice**, not the last order, because the invoice is the one the customer corrects. Nothing else changes.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Past forms correct', '✓'],
  ['**What** happened, not **who** did it', '✓ – no name appears'],
  ['A _why nobody noticed_ section', '✓'],
  ['One change, and what is not changing', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A change that survives six months is **one change**, inside work somebody already does. _Check it against the invoice_ survives; _hold a weekly address review_ does not.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I once sent the same message to a customer four times, because I could not see it in my sent box. He telephoned on the fourth and said, kindly, that he had understood the first one. It was found by him, not by me. Now I look in the sent box before I resend anything, and when I am not sure I write "apologies if this is a second copy" at the top.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I would have done the same — four times, and nobody tells you._   ✓ _How was it found?_   ? _Does the line at the top help?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most classes the majority of mistakes were found **by accident or by the other person**. That is the argument for the stock card, the read-back and the counted check — not a moral point but an arithmetical one.'));
out.push(stage('HW', 'Homework – sample (ten questions)'));
out.push(sample(null, ['1 When exactly did it happen?  2 Who was there?  3 What did the paper say, exactly?  4 Who wrote it?  5 Did anybody check it?  6 Who did you give it to?  7 Did you get a reply?  8 How long did you wait?  9 What did you do when nothing came back?  10 Has it happened before?', '_The two that find it fastest are usually 3 and 10._']));

// ===================== 8.5 =====================
out.push(pb());
out.push(h2('8.5  First the road was closed, then the telephone died'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _First I walked to the corner. Then I waited twenty minutes for a service. After that I changed at the roundabout. In the end I arrived at ten past eight._'));
out.push(p('**b**  **When:** at eight · on Tuesday · at the end of the day.  **What order:** first · then · after that.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (three — the road, the telephone, and nobody telephoning the customer)   **b**  1 The road was closed at Nasiriyah.  2 He telephoned Sham Trading himself, at half past four, to ask whether they were still in business.'));
out.push(p('**Language box – Practise (samples):**  1 The road was closed, **so** he went round. / He went round **because** the road was closed.  2 His telephone died, **so** nobody could tell the customer. / Nobody could tell the customer **because** his telephone had died.  3 He arrived at four, **so** the shop was closed. / The shop was closed **because** he arrived at four.  4 Nobody telephoned, **so** the customer telephoned us. / The customer telephoned us **because** nobody telephoned him.  5 It was a long day, **so** we finished at seven. / We finished at seven **because** it was a long day.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Everybody keeps talking about that wedding. What happened?'],
  ['B', 'It was in September. First, the hall double-booked us with another family. So we moved to the garden.'],
  ['A', 'That only makes it smaller.'],
  ['B', 'It does. Then the cook\'s van broke down on the Homs road. He telephoned his brother, but his brother was at a funeral and nobody knew.'],
  ['A', 'So nobody could tell the families.'],
  ['B', 'Nobody could. And I didn\'t telephone my aunt either, because I was waiting to hear about the food.'],
  ['A', 'That\'s the real mistake.'],
  ['B', 'That\'s the real mistake. After that two hundred people arrived at six for a lunch. And in the end the neighbours cooked.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write four steps and circle the real mistake. If a pair cannot name one, the story is a list of bad luck — send them back to find the moment somebody could have acted. Typical errors: _so_ and _because_ reversed; the story told out of order and then repaired with "and before that…".'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'Their story in four steps', 'The real mistake'], [
  ['Rasha', 'the key broke in the lock → the locksmith was away → she waited four hours → her neighbour had a spare all along', 'she did not ask the neighbour first'],
  ['Fadi', 'the road closed → he took a longer route → he ran low on fuel → the station was shut', 'he left with half a tank'],
], [1, 2.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"First the key broke in the lock. Then the locksmith was away until evening. After that Rasha waited four hours on the stairs. In the end the neighbour came home and she had a spare key all along. The real mistake was not asking the neighbour first."', 'In most classes the real mistake in **more than half** the stories is not telling somebody. Count them on the board; the number makes the point better than any explanation.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because she wanted to tell him a real time and she did not have one.  2 "That was the mistake, and it was mine." — Nour\'s.  3 The socket in lorry 445621 was repaired; and they now telephone the customer when they **don\'t** know, not only when they do.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHAT HAPPENED ON SATURDAY 9 SEPTEMBER** · written the same evening.  First, the hall telephoned at about 10.00 to say they had two families booked. We moved to my uncle\'s garden, which holds a hundred and fifty, not two hundred.  Then the cook\'s van broke down near Qatana. He telephoned his brother, but his brother was at a funeral, and nobody knew.  From 12.00 I had no word about the food. **I waited.** I did not telephone the families, because I wanted to tell them something certain. That was the mistake, and it was mine.  After that two hundred people arrived at 18.00 for a lunch that was not there.  In the end four neighbours cooked and we ate at nine.  **What changed.** Two things, and only two. One person now holds every telephone number on one page. And we tell people what we **don\'t** know, at the hour we don\'t know it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Steps in order, with times', '✓'],
  ['_so_ / _because_ correct', '✓'],
  ['The turn is marked', '✓ – "I waited."'],
  ['A short, counted list of changes', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The turn is usually **one step earlier** than the writer puts it. The moment to act is not when you know the news; it is when you realise you will not know for some time.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['At half past five my sister telephoned and said the baby was coming. First I ran to the main road, but there was no service at that hour. Then a neighbour drove me, and we were stopped twice. After that the hospital sent us to a different gate. In the end I arrived at eight and he was born at ten past. What I learned is that nobody tells you which gate, and that it is always worth asking before you need it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the hospital sent us to a different gate" — I knew it would be that._   ✓ _Can you add the time you left the house?_   ? _What did you call him?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A story you could retell tomorrow has **four or five steps and times on at least two of them**. Stories with ten steps and no times cannot be repeated, which is the practical test of order.'));
out.push(stage('HW', 'Homework – sample (four sentences)'));
out.push(sample(null, ['My sister telephoned at half past five to say the baby was coming. There was no service, so a neighbour drove me and we were stopped twice. The hospital sent us to a different gate and I arrived at eight. He was born at ten past, and nobody ever tells you which gate.', '_Lost: the running, the hour, the feeling. The story still works, because the four steps and the lesson survived — which is what a story is._']));

// ===================== 8.6 =====================
out.push(pb());
out.push(h2('8.6  Really? That\'s very good news'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _That\'s wonderful — how big? · Oh no. Was anybody hurt? · Congratulations to her! When did she hear? · Again? By how much?_'));
out.push(p('**b**  Open — a listening drill. Most learners can hear the three and produce only two; the flat one comes out by accident, which is exactly the problem.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a big order)   **b**  1 1,200,000 — the whole range.  2 _How did it happen?_ — and she gives the context that makes it a real question: _last month he was taking the small boxes only._'));
out.push(p('**Language box – Practise (samples):**  1 That\'s wonderful! How big is it?  2 Oh no. Is the driver all right?  3 Congratulations to her — when did she hear?  4 Again? By how much this time?  5 Is he? When did he tell you?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Rasha. Sit down. My sister got into medical school.'],
  ['B', 'Really? Medical school?'],
  ['A', 'In Damascus. She heard this morning.'],
  ['B', 'That\'s wonderful. Congratulations — honestly, after two years of trying.'],
  ['A', 'It is.'],
  ['B', 'How did it happen? Last year she was twenty marks short.'],
  ['A', 'She took the exam again in September and nobody knew except my mother.'],
  ['B', 'So she did it quietly.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners check that a **question followed every reaction**. A pair that only reacts produces a conversation that dies in four turns — let the class hear it once, deliberately, then fix it. Typical errors: the wrong echo (_She\'s ill — Did she?_); _Congratulation_ without the **s**; a flat _really_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Their news', 'My reaction', 'My questions'], [
  ['Rasha', 'her brother is coming home after four years', 'That\'s wonderful!', 'When? Does your mother know yet?'],
  ['Fadi', 'he failed the driving test for the lorry', 'Oh no, I\'m sorry.', 'What went wrong? When can you take it again?'],
  ['Samir', 'he is moving to Latakia', 'Really? Latakia?', 'What made you decide? Have you found a place?'],
], [1, 1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha told me her brother is coming home after four years. I said that\'s wonderful and asked when, and whether her mother knows yet."', 'The best question is the one the speaker **wanted** to be asked: _does your mother know yet?_ opens the story the news was really about.']));
out.push(stage('5', 'Read'));
out.push(p('1 Not last week\'s work: the son coming into the business, and twelve years of being his father\'s supplier.  2 Because Ms Shamsi sends on Tuesdays and the Tarabishi order will need wrap they have not got.  3 Because Mr Ayoub asked for the good things to be written down too — and because she would not have believed it a month ago.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE WEEK — continued** · Rasha Hamdan, for the owner.  **The highlight.** The school took the whole year\'s stationery order: 2,400,000, in one signature. The reason is worth writing down: the new head asked three shops and we were the only one who sent a price **with the delivery dates on it**. The price was not the lowest.  **What went wrong.** Twelve boxes went to the school\'s old building, because we copied the address from last year\'s order. They were collected and delivered the same afternoon and nothing was lost. Addresses are now checked against the last invoice.  **What I need from you.** A decision on a second delivery day by Thursday, because the school wants fortnightly and one van cannot do it with the normal round.  **One more thing.** The new boy served alone for two hours on Tuesday and nobody asked for me once.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The highlight names its real cause', '✓ – the delivery dates, not the price'],
  ['What went wrong is already fixed', '✓'],
  ['**One** request, dated, with a reason', '✓'],
  ['Something a person would want to read', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The report opened first next week is the one with the human line. It is not sentimentality: a manager who enjoys reading a report reads it carefully, and a report read carefully is a report that works.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['My cousin telephoned in January to say she had been given a place to study in Beirut. I shouted so loudly that my mother came in. I said congratulations about six times and then asked nothing useful. The real cause was not the application: it was a teacher who kept her after school for a year, for nothing, because she thought she could do it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I\'m glad for her — and for the teacher._   ✓ _Who told you first?_   ? _Did you ever thank the teacher?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts the real cause happened **months or years earlier**, and usually involved somebody else doing something unpaid. Worth one minute of silence in the class before moving on.'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample(null, ['— We got the Aleppo contract. — Really? The whole thing? — All of it, signed this morning.', '— The van was stolen last night. — Oh no. Was anything in it? — Only the empty crates, thank God.', '— I\'m getting married in June. — Are you? Congratulations! Who is she? — You know her — she works at the pharmacy.']));

// ===================== 8.7 =====================
out.push(pb());
out.push(h2('8.7  Review & Mediate: what does the week\'s report say?'));
out.push(stage('1', 'Get ready – Unit 8 quiz'));
out.push(p('**1** /t/ _checked_ · /d/ _called_ · /ɪd/ _started_ (after **t** or **d** only).  **2** went · saw · had · sent · wrote · got.  **3** After _didn\'t_ and _did_, the verb is **plain**: _She didn\'t **go**_ · _Did you **send** it?_  **4** There **were** fourteen customers. · It **was** a busy week.  **5** **Ask a question.** A reaction on its own ends the conversation.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both)   **b**  1 That they started it on Monday and agreed the four columns, and that the variance fell from 9 per cent to 2.  2 That it only means the difference between two numbers that should be the same — nobody is being blamed.'));
out.push(p('**Language box – Practise (sample):**  _We sent out ninety-six orders in a hundred complete. Two went out short because we ran out of packaging, and both were finished within two days._'));
out.push(stage('3', 'Practise – sample mediation of report 1'));
out.push(sample(null, ['"Only the warehouse parts. The first one is good: it says we started the new stock card on Monday and agreed the four columns, with you. The second one says the shelf and the screen used to disagree about nine times in a hundred, and now they disagree about twice. That\'s your morning walk, written as a number. The word \'variance\' only means the difference between two numbers that should be the same — nobody is being blamed, it\'s a measurement."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two numbers and say what the change means in plain words. A speaker who reads _variance between physical and system stock_ aloud has handed the problem back. Send them back with: _say it to somebody who counts shelves._'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The part about them', 'The word I had to translate'], [
  ['Abu Yasser', 'the stock card: nine in a hundred down to two', 'variance'],
  ['Hala', 'eleven hours of supervision, and the counter revenue up 160,000', 'revenue'],
], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s the weekly summary. The part about the warehouse says the shelf and the screen used to disagree nine times in a hundred and now it\'s twice. The word people don\'t know is \'variance\' — it only means the difference between two numbers that should be the same."']));
out.push(note('Eighth unit of the book, so the ordinal is "eighth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**The office-word list, continued from Unit 7:** _variance_ (the difference between two numbers) · _revenue_ (money taken) · _fulfilment_ (orders sent complete) · _consignment_ (a load) · _outstanding_ (still to do) · _deferred_ (put off) · _awaiting authorisation_ (somebody must say yes first) · _prior week_ (last week) · _re-issued_ (sent again) · _at no cost to the customer_ (we paid).'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '23 against 19 is four more'],
  ['2', 'B', '"re-issued" = sent again; "no financial loss" = nothing lost'],
  ['3', 'B', '"outstanding" and "deferred" both mean still to do'],
  ['4', 'B', '48 hours = two days; "no cost to the customer"'],
  ['5', 'A', '"the whole range" = everything'],
  ['6', 'B', '"awaiting authorisation" = somebody must approve it'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Ayoub, Last week Bassel got the Tarabishi order for the new branch — one million two hundred thousand, the whole range. It came on Monday evening. Could you decide about the wide wrap by Sunday, because Ms Shamsi only sends on Tuesdays and we have not got enough? Thank you. Nour  _(52 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  The order, with the figure', '✓'],
  ['2  When it came', '✓'],
  ['3  The decision needed, by Sunday', '✓'],
  ['25 words or more', '✓ – 52 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Samir, I passed the English exam! I got the result on Thursday morning and I still have not told my father. Can we go for a coffee on Friday so I can tell somebody properly? My treat — I owe you for all the practice. Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈30 words)'));
out.push(sample(null, ['Congratulations! That\'s wonderful news. Did you get the grade you wanted? And why haven\'t you told your father — are you waiting for something? Friday is good. I\'ll be there at six.']));
out.push(stage('✓', 'Unit 8 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'a', 'b', 'b', 'a', 'a']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — The week in a word: **busy** · The busiest day: **Wednesday (Hala\'s first day)** · What went wrong: **an invoice went to the wrong email address** · What wasn\'t finished: **the Aleppo invoices (in the blue tray)** · The best thing: **Thursday — the new wrap price was agreed**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Last week I checked the stock on Sunday, trained the new assistant on Monday and finished the Homs order on Tuesday. I did not finish the Aleppo invoices, because the counter was busy and nobody else can answer it yet.  _(38 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** three things done · one thing not finished · the reason — one mark each.',
  '**Language (2):** past simple, regular and irregular, used correctly; **plain verb after _didn\'t_** — take the mark for this alone if it is right throughout.',
  '**Organisation and length (2):** the days or the order are clear; 25 words or more.',
  '⚠ This is the one unit check where the **tense itself** is the task. A report of last week written in the present scores **0 on language** however good the content is, and the candidate needs to be told exactly that.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 8', [
  '**1  _didn\'t went_ and _did you sent_.** The learner has understood the past and is marking it twice. It is a sign of progress, not of carelessness, and it should be corrected gently and every single time — in 8.1 for regular verbs and again in 8.2, where it comes back with the irregulars as if 8.1 never happened.',
  '**2  The dropped /ɪd/.** _started_ said as _start_. It is a pronunciation fault that becomes a grammar fault, because a listener hears a present tense. Chant the three endings at the start of every lesson in this unit; do not explain the rule twice.',
  '**3  The reaction with no question.** 8.6 is the cycle most likely to be treated as decoration and it is the most useful one in the unit for anybody who deals with customers. A learner who says _That\'s wonderful_ and stops has ended a conversation politely. Insist on **react + ask**, every time, until it is automatic.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 8 · Answer Key');
