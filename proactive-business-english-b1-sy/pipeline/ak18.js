// Proactive Business English B1 · Syria Edition · Book 2 · Unit 18 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 18  Verb Patterns and the Week in Its Verbs'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This is the unit where the grammar and the document are the same thing.** *I agreed to send it*, *I offered to send it* and *I said I would look into sending it* are three different promises, and ⚠ **the person you said them to remembers one of the three.** Next week the only thing left of a conversation is the verb somebody wrote down.',
  '⚠ **The unit collects the loose ends of Book 2.** The programme in Unit 13, the fifth part of the post-mortem in Unit 15 and the change notes in Unit 17 all produce commitments, and nobody has been holding any of them in one place. ⚠ **18.6 is the page that holds them, and 18.7 takes it out of a drawer and puts it on a wall.**',
  '⚠ **The hardest column in Book 2 is the fourth column of the register: *what they heard*.** It is filled by moving your own verb one rung up the ladder, ⚠ **and a learner whose two verb columns are identical on every line has not made the page honestly.** The reason to move one rung is not that listeners are careless: **a person who has asked a question needs an answer in order to plan and takes the strongest one available.**',
], C.grey, C.navy));

// ===================== 18.1 =====================
out.push(h2('18.1  The call I have been putting off'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *What the first step would be* is the useful half, and it is almost always a sentence rather than a task.'));
out.push(p('**b**  _I have been putting off **telephoning** him. · I keep on **forgetting** it. · We should avoid **promising** a date._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Since about the 25th — eleven days.**  2 ⚠ **That she is not avoiding the telephone call but one question inside it** — *the call is four minutes long and the question is one sentence, and you have spent eleven days on a sentence.*'));
out.push(note('⚠ The diagnostic move is the one to teach: ⚠ **find the sentence inside the thing.** It converts an unmanageable reluctance into a form of words, and the form of words can be written down, read aloud and practised. ⚠ **Eleven days of avoidance for four minutes of talking is the arithmetic that makes the class take it seriously.**'));
out.push(p('**Language box – Practise (samples):**  1 *I have been putting off telephoning him.*  2 *we should avoid promising a date.*  3 *I keep on forgetting it.*  4 *we are considering changing supplier.*  5 *you risk losing the slot.*  6 ⚠ *I suggest writing to him* — **not *I suggest to write*.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Has the fourth store been counted?'],
  ['A', 'No. I have been putting it off since June.'],
  ['B', 'What is the sentence inside it?'],
  ['A', '…There is not one. Nobody is waiting for it and nobody is going to ask me a question about it.'],
  ['B', '⚠ So it is not fear. What is it?'],
  ['A', 'Three hours and two people, and it has never been in anybody\'s week.'],
  ['B', '⚠ **Then no amount of courage will close it and the repair is a date in a diary with two names against it.**'],
]));
out.push(note('⚠ Role card 2 is the control and it must be run, or the class will leave believing that everything put off is fear. ⚠ **A thing with no sentence inside it is being put off for time, and the two repairs are different**: the fear ones need a form of words and about fourteen minutes; **the time ones need a Tuesday afternoon and somebody\'s name.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what is being put off, since when, and the sentence inside it. **Typical errors:** _I keep on to forget_ · _I suggest to change_ · _I have been putting off to telephone_ · and the content error, which is giving a vague sentence (⚠ *explain the situation*). **The sentence has to be in the words the writer would actually say**, or it has not been written at all.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I am putting off', 'Since', 'The sentence inside it', 'Fear or time?'], [
  ['telephoning Mr Jaber', '25 Feb', '⚠ *we did not consult you and we should have*', '**fear**'],
  ['telling Lina about the Thursday rota', '1 Mar', '*your college afternoon is affected and I am sorry*', 'fear'],
  ['writing to decline the Homs quotation', '10 Feb', '*we are staying with our supplier; thank you*', 'fear'],
  ['asking about the key board', '22 Feb', '*a trainee found three sets by the door*', 'fear'],
  ['⚠ **the fourth-store stocktake**', '⚠ **June**', '⚠ **— there is no sentence**', '⚠ **time**'],
], [1.6, 0.8, 2.4, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I have been putting off telephoning Mr Jaber since the 25th. The sentence inside it is *we did not consult you and we should have*, and it is fear and not time."', '⚠ **Count the fear ones and the time ones, then ask how long each fear one will take.** ⚠ **The answer is almost always under ten minutes**, and the total for a whole list is usually a quarter of an hour — which is the number to leave in the room.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four of the five, and the total is fourteen minutes** — against eleven, five, thirteen and twenty-five days of putting off.  2 ⚠ **The fourth-store stocktake** — it has no sentence in it: *it is not being avoided, it is unscheduled*, and it needs three hours and two people.  3 ⚠ **That she has one problem that looks like one problem and is two** — *the reason they have sat on the same list since June is that I have been treating things not done as a single kind of thing.*'));
out.push(note('⚠ The observation that all four fear sentences are **admissions** is worth lifting out: *that we did not consult, that she is losing something, that a trainee found it, that we are saying no.* ⚠ **The common factor is not difficulty; it is that each sentence costs the writer a little standing** — and fourteen minutes of standing has been bought with fifty-four days of delay.'));
out.push(stage('6', 'Write with help – sample (113 words)'));
out.push(sample(null, [
  '**WHAT I HAVE BEEN PUTTING OFF, AND WHY. 8 March. H. Mourad. ⚠ Four things.**',
  'telling the 07.10 customer the hours are changing | ⚠ **1 Mar — 7 days** | ⚠ *we are opening at eight from April and I know you come at ten past seven* | **fear** | **three minutes, in person**',
  'asking Nadia for the February figures | 20 Feb | *I need them by Thursday for the counter report* | fear | **one minute**',
  'telling Lina the Thursday rota changes | 1 Mar | *your college afternoon is affected* | fear | two minutes',
  '⚠ **re-labelling the small-size bins** | ⚠ **November** | ⚠ **— there is no sentence** | ⚠ **time** | ⚠ **an afternoon, one person**',
  '⚠ **Three of the four are one sentence and the total is six minutes.** Seven days, seventeen days and six days of putting off, for six minutes of talking.',
  '⚠ **What the sentences have in common.** Two of them take something from somebody and the third asks somebody for something. ⚠ **None of them is difficult to say and all three are difficult to start saying.**',
  '⚠ **The one with no sentence in it.** The bins — it is not being avoided, it is unscheduled, and it has been outstanding since November because an afternoon has never existed.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *since* date for every row', '✓'],
  ['The sentence inside it, in the writer\'s own words', '✓'],
  ['The fear ones added up', '✓ six minutes'],
  ['A row that is time and not fear, marked as such', '✓ the bins'],
], [5, 1]));
out.push(note('⚠ The sample\'s *what the sentences have in common* is sharper than the model\'s: ⚠ **none of them is difficult to say and all three are difficult to start saying.** **That distinction is the whole of the cycle** — the difficulty is at the beginning of the sentence and not in it, which is why writing the sentence down is most of the cure.'));
out.push(stage('6R', 'Share'));
out.push(p('The sentences alone. ⚠ **Ask which the class would find hardest to say out loud, and how long it would take** — and then ask the writer to say it, to the room, as practice. **A sentence said once in a classroom is much easier to say the second time at a counter.**'));
out.push(stage('7', 'Write freely – sample (169 words)'));
out.push(sample(null, [
  'I put off telling a customer that we had lost his drawing for five weeks.',
  'It was a hand-drawn thing on a piece of graph paper, brought in by his son, and it was the only copy. It went into the folder with no index and it is not there now.',
  'For five weeks I told him the job was in the queue, which was true in the sense that nothing had happened to it.',
  'The sentence inside it was fourteen words: ⚠ ***we have lost your drawing and I am very sorry; can your son bring the dimensions again?***',
  'When I finally said it, he said that his son had the measurements on his telephone, and the whole thing took about four minutes including an apology that he waved away.',
  '⚠ **Five weeks against four minutes.** And the cost was not the drawing: ⚠ **it was five weeks of telling a man his job was in a queue, which I now know he did not believe after the second week**, because he stopped asking about it and started asking when I would be in.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer, after the second week"   ✓ _is the -ing form right after every verb?_ — yes   ? _how long did the thing take?_ — "four minutes, against five weeks"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the doing took less than an hour in all three texts, ⚠ **and in all three the person was afraid of a sentence and not of the task.** ⚠ The sample adds the second cost, which is the one nobody counts: **five weeks of a story the customer had stopped believing**, which is more expensive than the lost drawing.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The thing: writing to decline the Homs quotation, put off since 10 February. ⚠ The sentence, in my words: ***thank you for your quotation of the 4th; we are staying with our present supplier, and I am grateful for the price break information, which was useful to us.*** ⚠ **Twenty-eight words, three minutes, twenty-nine days** — and the last clause is true and costs nothing.']));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  What I agreed to and what I did not'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The *refused* one is the hardest and most learners cannot produce it, which is 18.2\'s finding arriving in the first minute: **nobody refuses in a verb.**'));
out.push(p('**b**  Strongest to weakest: ⚠ **I promised to · I agreed to · I offered to · I said I would look into.** The last commits nothing at all.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ ***Nour — labels by the 10th*** in his book, against *look into labels* in hers.  2 ⚠ **That it does not matter which of them is right**, because *a third person has acted on the stronger of the two versions, which is what always happens* — ⚠ **a commitment is as strong as the strongest verb anybody in the conversation heard.**'));
out.push(note('⚠ The repair is at the moment of speaking and it is costed: ⚠ **nine words instead of five.** *I will look at the labels this week. I am not agreeing to a date until I have.* ⚠ **The second sentence is the one that stops a customer being told a date** — and a change that costs four words gets adopted, which is why the figure is in the dialogue.'));
out.push(p('**Language box – Practise (samples):**  *I will look at the labels this week; I am not agreeing to a date until I have.* · *I am willing to go on Thursday if nobody else can.* · ⚠ *I undertake to have it by the 10th* — **the top rung, used deliberately.** · *I will ask Mr Ayoub; I am not agreeing to the answer.* · ⚠ *I decline* — **short, clear, and not rude.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Can you cover the counter on Saturday?'],
  ['B', 'I will see what I can do.'],
  ['A', 'Thank you. I have put you down for Saturday.'],
  ['B', '…I did not say yes.'],
  ['A', '⚠ You did not say no, and I had to put somebody down.'],
  ['B', '⚠ **Then the honest verb was *I decline*, or *I am willing to, if nobody else can and you ask me again on Thursday*.**'],
  ['A', 'Either of those would have taken four seconds.'],
  ['B', '⚠ **And both are shorter than the week of ambiguity that has just started.**'],
]));
out.push(note('⚠ Role card 2 teaches the refusal, which is the gap in every class. ⚠ *I will see what I can do* is a refusal in the speaker\'s mind and a yes in the hearer\'s book, ⚠ **because the hearer had to put somebody down.** **The conditional willingness — *if nobody else can, and ask me again on Thursday* — is the answer that is honest and still helpful**, and it has a date in it.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both versions and the two-sentence repair. **Typical errors:** _I agreed sending it_ · _I offered looking at it_ · _I promised him sending it_ · and the content error, which is treating the other person as having misheard. ⚠ **Nobody misheard. The hearer took the strongest available verb because they had to act**, and the repair belongs to the speaker.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I said', 'My verb', 'The verb they heard', 'The *what I am not agreeing to* sentence'], [
  ['"I will look at the labels."', 'offered to look', '⚠ **agreed to, by the 10th**', '*I am not agreeing to a date until I have looked.*'],
  ['"I will see what I can do about Saturday."', '⚠ **nothing**', '⚠ **yes**', '*I decline; or ask me again on Thursday if nobody else can.*'],
  ['"I will ask Mr Ayoub about the keys."', 'agreed to ask', '⚠ **agreed to fix**', '*I am agreeing to ask, not to a change.*'],
  ['"We can probably do the 11th."', 'offered', '⚠ **agreed to the 11th**', '*the 11th is not confirmed until Fadi\'s sheet says so.*'],
  ['"I undertake to telephone her on the 12th."', '⚠ **undertook**', 'undertook', '⚠ **nothing needed — it is the top rung**'],
], [1.8, 0.9, 1.1, 2.2]));
out.push(note('⚠ Row five needs no repair sentence and the table is built that way: ⚠ **the top rung used deliberately is a complete act and needs no qualification.** A class that adds a hedge to an undertaking has learned to hedge rather than to grade — **and the undertaking is the verb to use when you mean it.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said *I will ask Mr Ayoub about the keys*. My verb was *agreed to ask* and they probably heard *agreed to fix*. The sentence I should have added is *I am agreeing to ask, not to a change*."', '⚠ **Count how many verbs were heard one rung higher, then ask whether anybody has ever been heard one rung lower.** ⚠ **It almost never happens**, and the asymmetry is the finding: **the ladder only slips upwards, because only the upper rungs can be planned against.**']));
out.push(stage('5', 'Read'));
out.push(p('1 Because Bassel ⚠ **told Ms Tannous the 10th** — *which means the 10th exists* whatever either book says.  2 ⚠ **I undertake to have the labels designed by the 10th or to telephone her myself on the 9th** — a stronger verb than anything said on the 3rd, ⚠ **chosen now, in writing.**  3 ⚠ **The same from her — that she say what she is not agreeing to** — and it is fair because *he would rather hear* I am not agreeing to a date *than write a date that nobody gave him.*'));
out.push(note('⚠ The alternative undertaking is the device that makes a strong verb safe: ⚠ *…or to telephone her myself on the 9th.* **It is the half the writer can guarantee whatever happens**, and without it an undertaking is a promise about a printer. ⚠ **Teach the pattern: *I undertake to X or to Y*, where Y is entirely within your control.**'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**THE SATURDAY COUNTER — WHAT I AGREED TO AND WHAT I DID NOT. 9 March. L. Barakat. ⚠ Copied to Hala.**',
  'on 5 March, to Hala | *I will see what I can do about Saturday* | ⚠ **nothing — no verb at all** | ⚠ **any Saturday**',
  'on 6 March, to the rota | — ⚠ **my name is on it for Saturday the 14th** | — | —',
  '⚠ **What is in Hala\'s book:** *Lina — Sat 14.* ⚠ **She wrote it in good faith, because she had to put somebody down and nothing I said was a no.**',
  '⚠ **The record.** I did not agree to the 14th and I did not decline it. ⚠ **The undertaking.** Since my name is on the rota and the counter cannot be left, **I undertake to work Saturday the 14th, or to find somebody else myself by Thursday the 12th** — and that is a stronger verb than anything I said, chosen now.',
  '⚠ **What changes from today.** When I am asked for something I do not want to do, I will say ⚠ **either *I decline* or *I am willing to if nobody else can — ask me again on Thursday*.** **Four seconds instead of four words of nothing.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A verb column, with the verb actually used', '✓ — *nothing at all*'],
  ['*In good faith* about the other person', '✓ with the reason'],
  ['The record and the undertaking, separated', '✓'],
  ['An alternative undertaking you can guarantee', '✓ find somebody by Thursday'],
  ['What changes from today, with its cost in words', '✓ four seconds'],
], [5, 1]));
out.push(note('⚠ The sample is written by the newest person and that is the right choice for this task: ⚠ **a silence-as-yes happens most to whoever is least able to refuse.** The alternative undertaking — *or find somebody else myself* — is the clause that turns an imposition into something she controls, **and it is the practical lesson of the cycle for anybody junior.**'));
out.push(stage('6R', 'Share'));
out.push(p('The undertakings alone. ⚠ **Ask whether the alternative half could fail** — and if it could, it is not an alternative. *Or to telephone her myself* cannot fail; *or to get the printer to agree* can.'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'My father and a customer spent four months disagreeing about a verb, and neither of them was lying.',
  'The customer asked whether we could make a staircase to a drawing he brought in. My father said he would see whether it could be done. ⚠ **The customer heard that we would do it**, and he went home and took out the old staircase.',
  'Three weeks later he telephoned to ask when we were coming, and there was no staircase and no order and no price.',
  'What was in my father\'s book was nothing, because *seeing whether it can be done* is not an entry. ⚠ **What was in the customer\'s house was a hole where a staircase had been.**',
  'We made the staircase, at a price nobody had agreed, and it was about four weeks late because the steel had never been ordered.',
  '⚠ **The third person here was a builder the customer had hired for the Monday**, and he acted on the stronger version too, because that is the only version anybody can act on.',
  '⚠ **Eleven words would have prevented it: *I am not agreeing to make it until I have seen the drawing.*** ',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the builder hired for the Monday"   ✓ _is every verb followed by an infinitive where it should be?_ — yes   ? _which verb did the third person act on?_ — "the strongest — it is the only one anybody can act on"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the third person acted on the stronger verb in all three texts, ⚠ **because a third person needs something to act on and the stronger verb is the only one that offers it.** ⚠ The sample\'s detail is the one to read out: **the hole where the staircase had been** — the weak verb cost somebody else a demolition.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The thing I am about to offer to look at: whether we can hold a price for thirty days for Ms Tannous. ⚠ The second sentence: ***I will look at whether we can hold a price for thirty days. I am not agreeing to thirty days, and our written rule is fourteen** — if the answer is no, I will tell you on Thursday.*']));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  Stop to check, or stop checking'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *He stopped checking the load* means he is no longer checking; *he stopped to check* means he paused in order to.'));
out.push(p('**b**  ⚠ *I remembered to lock up* is about last night and about an act. ⚠ *I remember locking up* is about a memory — **and is the sentence people produce when they are not sure.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 The writer meant that ⚠ **nobody ever checked the labels against the order, because the line did not ask for it**; the sentence says ⚠ **he had a practice of checking and abandoned it halfway through the morning.**  2 ⚠ **All four pairs are about things somebody did not do**, which is why they appear in every report about something going wrong — ⚠ **and in all four the *-ing* form sounds more careful and claims less, so people reach for it exactly when they should not.**'));
out.push(note('⚠ Mr Attar\'s formulation is the one to write on the board: ⚠ **the difference is whether somebody abandoned a control or never had one. One of those is a disciplinary matter and the other is a page.** A class that holds that sentence will read its own reports differently for the rest of the book.'));
out.push(p('**Language box – Practise (samples):**  *He stopped, to check the load* / *he stopped checking the load.* · *I remembered to lock up* / *I remember locking up.* · ⚠ *I forgot to sign* — **and *I forget signing* does not exist.** · *He tried to telephone* (no answer) / *he tried telephoning* (he got through).'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your claim says *Fadi tried to telephone the office from the road.*'],
  ['A', 'He did. Twice, and nobody answered.'],
  ['B', '⚠ Good — that is the right half of the pair, and the whole claim rests on it.'],
  ['A', 'What would the other half say?'],
  ['B', '⚠ ***He tried telephoning the office* would mean he got through** — and if he got through, somebody here told him to guess, and the claim is gone.'],
  ['A', 'One word.'],
  ['B', '⚠ **One word, and about 140,000 of a re-marking charge in the other claim.** Read every *tried* in a claim letter twice.'],
]));
out.push(note('⚠ Role card 2 is the money card and should be used with the whole class. ⚠ **The wrong-village claim rests entirely on the driver having had no way to resolve the address from the road** — and *tried telephoning* destroys it in one word, by asserting contact. **A class that has seen one such sentence will check the others.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both readings and say which is true. **Typical errors:** _I forget locking up_ (⚠ **impossible**) · _he stopped to check_ where he had never been checking · _I remember to lock up_ meaning a memory · and the content error, which is failing to see that the other reading blames a person. ⚠ **In three of the four pairs the misreading lands on somebody.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Which is meant', 'What the other reading says', 'Person or document?'], [
  ['*he stopped checking the labels*', '⚠ **nobody ever checked them**', 'he abandoned a control mid-morning', '⚠ **person**'],
  ['*he tried to telephone the office*', 'he attempted it; no answer', '⚠ **he got through and was told to guess**', '⚠ **person — and the claim**'],
  ['*she remembers posting the receipt*', '⚠ **she posted it; the book shows it**', 'she has a memory and no more', 'her memory'],
  ['*the cashier forgot to initial the copy*', 'it is not initialled', '⚠ **no other reading exists**', 'the copy'],
], [2, 1.2, 1.8, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The sentence is *he stopped checking the labels*. I mean that nobody ever checked them. The other reading says he abandoned a control halfway through the morning, which is a finding about a man."', '⚠ **Count the sentences whose other reading blamed a person, then ask whether any of them had already been read that way.** ⚠ In this unit one of them had been — **Mr Attar read it in the file in January before anybody noticed.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Row one** — *stopped checking* turns a page fault into a man, **and it has been in the file since January.**  2 Because ⚠ **the wrong-village claim rests on the driver having had no way to resolve the address from the road**, and *tried telephoning* says he got through.  3 ⚠ **Row three** — *remembers posting* is a report of a memory, and ⚠ **the entry is in the post book in her handwriting with the date**, so it should read *Hala posted the receipt on the 14th; the entry is in the post book.*'));
out.push(note('⚠ Row three is the one to spend time on, because it inverts the expectation: ⚠ **the under-claim is commoner than the over-claim in anything about one\'s own carefulness.** *Remembers posting* is what a careful person says and it is weaker than the evidence they hold — **and in a dispute the weaker sentence is the one that gets quoted.**'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**FOUR SENTENCES IN OUR OWN FILE, READ BOTH WAYS. 10 March. B. Nassif. ⚠ Three of the four are wrong as written.**',
  'The apprentice **stopped sweeping** the yard before loading. | ⚠ **he had a practice and abandoned it** | he was never asked to; it is not on any list | ⚠ **a boy, wrongly → a list**',
  'We **tried telephoning** the plater on the 4th. | ⚠ **we got through** | we rang twice and got no answer | ⚠ **the plater, wrongly → nobody**',
  'I **remember sending** the drawing. | ⚠ **a memory only** | ⚠ **I sent it on the 2nd; it is in the post book** | ⚠ **my memory, wrongly → the book**',
  'He **forgot to date** the quotation. | it is undated | ⚠ **correct as written** | the quotation',
  '⚠ **The row that turns a page fault into a person.** The first. The yard sweeping is on nobody\'s list and an apprentice is being described as having given up a duty he was never given.',
  '⚠ **The row that matters in money.** The second. ⚠ **Our late-delivery claim against the plater rests on our having been unable to reach him** — and *tried telephoning* says we reached him.',
  '⚠ **The row that is weaker than the truth.** The third, so it should read *I sent the drawing on the 2nd; the entry is in the post book.*',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four real sentences, from real documents', '✓'],
  ['*Finding about*, with the arrow where it moves', '✓'],
  ['The row that matters in money, named', '✓ the claim against the plater'],
  ['A row that is weaker than the truth', '✓'],
  ['One row that is right', '✓ the undated quotation'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *stopped* rows. ⚠ **Ask what the sentence as written accuses somebody of** — and have the class say it in the plainest words available: *it says he gave up a check he was doing.* **Hearing it said plainly is what makes a writer correct it.**'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  'An insurer read one of our sentences the other way and it cost us a claim.',
  'Our report on a damaged load said *the driver stopped covering the load in wet weather after the covered bay was closed.* ⚠ **What we meant was that the covered bay was closed, so there was nowhere to cover loads and nobody had ever been given a sheet to do it with.**',
  'What the insurer read was that the driver had a practice of covering loads in wet weather and abandoned it.',
  'They declined the claim on the ground that the loss arose from a departure from our own stated practice, ⚠ **and they quoted our sentence back to us in the letter.**',
  'It took two months and a statement from the driver to establish that there had never been a sheet on that vehicle.',
  '⚠ **What was meant was a finding about a yard, and what was written was a finding about a man** — and the man spent two months being the subject of it.',
  '⚠ **The repair was six words: *no sheet was provided for covering.*** ',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the driver, during the two months"   ✓ _is the right half of each pair used?_ — "no — *stopped covering* was fatal"   ? _who read it the other way?_ — "the insurer, and they quoted it back"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the misreading landed on a person in all three texts, ⚠ **because the *-ing* form sounds careful and the careful-sounding version is the one that accuses somebody.** ⚠ The sample\'s detail is the one that makes the point unforgettable: **they quoted our own sentence back to us in the declining letter.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The sentence in my own note: *Lina stopped writing the time on the gate sheet.* ⚠ **She never wrote the time on the gate sheet, because the yard pad has no time column.** Read the other way it says she gave up doing it. ⚠ Corrected: ***the yard pad has no time column, so no time was recorded; the new pad has one from 1 March.***']));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  Willing to, responsible for, liable for'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The third part — *one you are willing to do that is not your job* — is the one that produces the finding, and most learners have two or three.'));
out.push(p('**b**  _willing **to** help · responsible **for** the stock · afraid **of** promising a date · accountable **to** Mr Ayoub · liable **for** the carriage._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Abu Yasser was responsible for the marking; the company was liable to Ms Tannous** — and the cost fell on the company.  2 Because a register with only *responsible for* is ⚠ **a list of chores**, and what people want to know in March is **who answers when it goes wrong** — *a line that says Nour — labels — by the 10th does not say whether Nour is paying for a reprint or explaining to a customer or neither.*'));
out.push(note('⚠ The fourth column is the one with the finding in it: ⚠ ***willing to* is always left out of registers and always matters.** *When you stop being willing, nothing in any document changes* — ⚠ **so a willingness goes in the register with a review date**, because *a willingness with no review date becomes a duty in about four months, and the duty falls on whoever volunteered.*'));
out.push(p('**Language box – Practise (samples):** For each duty, all four. ⚠ **Two of a learner\'s duties will turn out to be willingnesses**, and the usual pair is *covering for somebody* and *a figure or a list that nobody else produces.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The register says I cover Baghdad Street on Tuesdays.'],
  ['B', 'Responsible for?'],
  ['A', 'Nothing. It is not in any job description.'],
  ['B', 'Liable for?'],
  ['A', 'Nothing. If something went wrong there on a Tuesday it would be the company.'],
  ['B', 'Accountable to, for this?'],
  ['A', 'Nobody.'],
  ['B', '⚠ And willing to?'],
  ['A', '⚠ **Yes, since June. Nine months, and Hala now plans her Tuesdays around it.**'],
]));
out.push(note('⚠ Role card 2 produces the pattern in its clearest form: ⚠ **three *nobody*s and one *me, since June*.** And the second half is what makes it matter — **Hala plans her Tuesdays around it**, so a willingness with dependants is not a favour any more, whatever the document says.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write all four. **Typical errors:** _responsible of_ · _liable to the carriage_ · _afraid to promising_ · _accountable for Mr Ayoub_ · and the content error, which is giving *responsible for* where the honest answer is *willing to*. ⚠ **Learners upgrade their own willingnesses**, because *responsible for* sounds better — **and the upgrade is exactly what makes the willingness impossible to hand over.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The duty', 'Responsible for?', 'Liable for?', 'Accountable to?', 'Willing to — since?'], [
  ['export documents', '**me**', '⚠ **the company**', 'Mr Ayoub', '—'],
  ['the counter rota', '**me**', 'nobody', 'Mr Ayoub', '—'],
  ['⚠ **covering the second site on Tuesdays**', '⚠ **nobody**', '⚠ **nobody**', '⚠ **nobody**', '⚠ **me, since June**'],
  ['⚠ **the weekly stock figure**', '⚠ **nobody**', 'nobody', 'nobody', '⚠ **me, since 2017**'],
  ['⚠ **the trade telephone after four**', '⚠ **nobody**', 'nobody', 'nobody', '⚠ **me, when I am here**'],
], [1.6, 1.1, 1.1, 1.1, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am responsible for the export documents and the company is liable. I am accountable to Mr Ayoub. And covering the second site on Tuesdays is something I am only willing to do, since June."', '⚠ **Count the willingnesses with no review date, then ask how long each has run and whether anybody else plans their week around it.** ⚠ **The two questions together convert a favour into a finding**, and the second one is the one that produces a silence in the room.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Nobody in the first three columns and *me* in the fourth** — and all three are things the company now depends on; ⚠ **the weekly stock figure has been a willingness since 2017.**  2 ⚠ **Hala plans her Tuesdays around the Baghdad Street cover and Nadia uses the weekly stock figure for the month end** — *two people now depend on two things that nobody has assigned to anybody.*  3 ⚠ **Not to be relieved of them**: to have them written into the first three columns with a review date, ⚠ **because a favour cannot be handed over, and a duty can.**'));
out.push(note('⚠ The absence test is the sentence that makes a reader act and it is worth memorising: ⚠ *if I were away for a month, neither would happen and neither would be anybody\'s fault.* **The second half is the sharp one** — an unassigned task that fails has no owner to be at fault, which is why nobody notices the risk until it materialises.'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**MY OWN DUTIES, IN FOUR COLUMNS. 11 March. H. Mourad. ⚠ Four of the nine turn out to be willingnesses.**',
  'the counter and the till | **me** | ⚠ **the company** | Mr Ayoub | —',
  'the counter price list | **me** | nobody | Mr Ayoub | —',
  '⚠ **the 14.00 till balance** | ⚠ **nobody** | nobody | nobody | ⚠ **me, since 2015**',
  '⚠ **training whoever is new on the counter** | ⚠ **nobody** | nobody | nobody | ⚠ **me, since 2019 — four people**',
  '⚠ **the Saturday telephone, from home** | ⚠ **nobody** | ⚠ **nobody** | nobody | ⚠ **me, since the Saturday trial**',
  '⚠ **The rows with nobody in the first three columns.** Four, and three of them are things somebody else now depends on. ⚠ **The 14.00 balance is the only same-day check we have on the till and it is in nobody\'s job.**',
  '⚠ **What a willingness does over time.** Nadia relies on the 14.00 figure for the month end. ⚠ **Lina was trained by me and so were the three before her, so our whole counter practice is in my head and in nobody\'s document.** ⚠ If I were away for a month, the till would be balanced once a day, nobody would be trained, and the Saturday telephone would ring in an empty shop.',
  '⚠ **What I am asking for.** ⚠ Not to be relieved of any of them. **To have the 14.00 balance and the counter training written into the first three columns with a review date** — because a favour cannot be handed over, and a duty can.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four columns, with the right prepositions', '✓'],
  ['A date in the *willing to* column', '✓ 2015, 2019, the Saturday trial'],
  ['Who depends on each willingness', '✓'],
  ['The absence test, in one sentence', '✓ three consequences'],
  ['A request to be recorded, not relieved', '✓'],
], [5, 1]));
out.push(note('⚠ The sample contains the most serious finding available in this cycle: ⚠ **our whole counter practice is in my head and in nobody\'s document**, because the same person has trained four people as a willingness. **A willingness that reproduces itself is how an undocumented practice becomes the only practice**, and it does not show up in any register that has only one column.'));
out.push(stage('6R', 'Share'));
out.push(p('The willingnesses and their dates. ⚠ **Ask which is the oldest** — and in most classes somebody produces one older than five years. **Then ask whether the person who started it still remembers choosing to.**'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'The man who locks our premises at night has done it since 2014 and it is not his job.',
  'He is the warehouse supervisor. The locking was the manager\'s, and in 2014 the manager had an operation and was away for about six weeks, and Abu Yasser locked up every night and nobody ever mentioned it again.',
  'What depends on it now is the insurance. ⚠ **Our policy requires the premises to be secured by a named person and the named person on the schedule is still the manager**, who has not locked the building in eleven years.',
  'If Abu Yasser were away for a month, somebody would lock up — ⚠ **and nobody would know what else he does when he locks up**, which includes checking that the generator is off and that the yard gate is chained on the inside.',
  '⚠ **None of it is written anywhere.** It is eleven years of a willingness that began as a favour during an operation.',
  '⚠ **And the person who would be blamed if the building were broken into is on the insurance schedule and has not held the keys since 2014.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the insurer, reading the schedule"   ✓ _are the prepositions right throughout?_ — yes   ? _who depends on it?_ — "the insurance, and nobody has noticed"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually nobody had ever written the willingness down in all three texts, ⚠ **and in all three somebody would be blamed for its not happening, and it would not be the person who assigned it, because nobody did.** ⚠ The sample\'s version of that is the sharpest: **the name on the insurance schedule has not held the keys since 2014.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['My willingness as a register line: ⚠ ***Covering Baghdad Street on Tuesday mornings — willing to, since June. Not responsible for, not liable for, accountable to nobody. Reviewed 1 June; Hala plans her Tuesdays on it.*** ⚠ **Thirty-four words, and the review date is the only part of it that is new** — and it is the part that makes it possible to hand over.']));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  Who asked whom to do what'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect several learners to produce a document instead of an instruction — *I put it in the list* — which is 18.5\'s finding in the first minute.'));
out.push(p('**b**  _I asked Lina **to telephone** him. · He told me **not to sign** it. · She reminded me **to date** the quotation. · He warned us **not to promise** a day._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Three** — Nour put it in the programme; Lina carried the programme; Abu Yasser found it on his bench. ⚠ **Nobody asked anybody to do the marking.**  2 ⚠ **Somebody should have asked him, in a sentence with his name in it, and written the sentence down** — *I asked Abu Yasser to mark the cartons from the stencils on the 9th.* **Eleven words, and there is an instruction in the world.**'));
out.push(note('⚠ The decisive sentence is Mr Ayoub\'s last: ⚠ **a document is not an instruction. An instruction has a name in it, a verb, and somebody who said it.** And the reason it matters is not authority but questions — ⚠ **a man working from a page nobody handed him has nobody to ask a question of**, which is exactly how the wrong code survived.'));
out.push(p('**Language box – Practise (samples):**  *I asked Abu Yasser to mark the cartons from the stencils on the 9th.* · *I asked Lina to date every quotation she types.* · ⚠ *I told the drivers not to sign before the count.* · *I asked Hala to cover the Tuesday counter until June.* · ⚠ *I warned Bassel not to telephone the customer with a date.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'How many instructions does getting the cartons marked need?'],
  ['A', 'One. Mark the cartons.'],
  ['B', '⚠ Two. Somebody has to take the programme to the warehouse, and somebody has to be asked to mark.'],
  ['A', 'And I gave the first.'],
  ['B', '⚠ **And it was carried out perfectly**, which is why nothing looked wrong.'],
  ['A', 'So what is the second sentence?'],
  ['B', '⚠ *I asked Abu Yasser to mark the cartons from the stencils on the 9th.* ⚠ **And you cannot get it out of *take this to the warehouse*, however clearly the page is written.**'],
]));
out.push(note('⚠ Role card 2 isolates the mechanism: ⚠ **two instructions were needed and one was given, and the one that was given was carried out perfectly.** That is why the failure is invisible — **a company in which the wrong half of the instruction is always obeyed looks like a company that is obeyed.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the instruction that was given and the one that was not. **Typical errors:** _he said me to sign_ (⚠ ***say* takes no object before *to*** — *he told me to sign*, or *he said that I should sign*) · _I asked to Lina to telephone_ · _he warned us to not promise_ · and the content error, which is believing the programme was the instruction. ⚠ **It was a document, and documents arrive; instructions are given.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The task', 'The instruction I gave', 'The instruction it needed', 'Given to whom, by whom'], [
  ['marking the cartons', '*take this over* (to Lina)', '⚠ ***I ask you to mark the cartons from the stencils on the 9th***', '⚠ **nobody, to Abu Yasser**'],
  ['dating quotations', 'a note in the file', '*I ask you to date every quotation you type*', 'nobody, to Lina'],
  ['the Tuesday counter', '*could you manage Tuesdays?*', '⚠ **a willingness with a review date, as 18.4**', 'me, to Hala'],
  ['not telephoning the customer', 'a line on the programme', '⚠ ***I warn you not to give her a date***', 'nobody, to Bassel'],
], [1.3, 1.9, 1.9, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked Lina to take the programme over. What the task needed was somebody asking Abu Yasser to mark the cartons from the stencils on the 9th. The person with nobody to ask was Abu Yasser."', '⚠ **Count the tasks that travelled by document rather than by instruction, then ask who did the work anyway.** ⚠ **In almost every case somebody did** — and that is why the room will not have noticed the fault before this cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Taking the programme to the warehouse** — and it was carried out perfectly.  2 Because ⚠ **three of the four were done anyway**: *a company in which work travels by document and gets done looks like a company that is working*, ⚠ **and it is working on the goodwill of people doing tasks nobody has asked them to do.**  3 ⚠ **The questions.** *If I had asked him, in a sentence, he would have asked me which code — because that is what a man does when a person gives him an instruction, and it is not what he does when a page appears.*'));
out.push(note('⚠ That third answer is the most important sentence in Unit 18 and it should be read aloud twice. ⚠ **The cost of work travelling by document is not that the work fails; it is that the questions are never asked** — and every error in Book 2 so far has been something that one question would have caught.'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**WHO ASKED WHOM — THE DRAWING REVISIONS. 12 March. B. Nassif.**',
  'put the register on the bench | *put this where everybody can see it* | me, to the apprentice | ⚠ **yes, perfectly**',
  '⚠ **enter each job\'s drawing revision** | ⚠ **none** | ⚠ **nobody, to nobody** | ⚠ **yes — the apprentice has done every one**',
  '⚠ **check the revision against the customer\'s latest** | ⚠ **none — and the register does not ask** | nobody | **no**',
  'sign the card | the printed box on the card | nobody, in person | yes',
  '⚠ **Of the four tasks, one instruction was given**, and it was the one about putting a book on a bench.',
  '⚠ **Three of the four were done anyway**, and the one that was not is the one that was not printed either. ⚠ **We are running on an apprentice filling in a register nobody asked him to fill in**, and he has done it for ten weeks without a word from anybody.',
  '⚠ **And the cost is not the entries; it is that he has never asked me a question about them** — because nobody gave him the job, so there is nobody to ask. ⚠ **If I had asked him, he would have asked within a week why we do not compare the revision with the customer\'s copy.**',
  '⚠ **What changes.** I asked him this morning, in a sentence, and wrote it in my book with the date.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *carried out?* column', '✓'],
  ['How many instructions were actually given', '✓ one of four'],
  ['What the company is running on, in one sentence', '✓'],
  ['The cost named as the questions, not the work', '✓'],
  ['A change priced in seconds', '⚠ **✓ — and already done**'],
], [5, 1]));
out.push(note('⚠ The sample\'s last line is the model: ⚠ **I asked him this morning, in a sentence, and wrote it in my book with the date.** A page about instructions that ends with an instruction given is the only version of this task that has changed anything, **and it took about four seconds.**'));
out.push(stage('6R', 'Share'));
out.push(p('The *instruction given* column. ⚠ **Count the blanks and the *nones*** — and then ask who has been doing each of those tasks, by name, because the answers are the people the organisation is quietly relying on.'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'For about two years somebody has been watering the plants at our office and I do not know who.',
  'It is a small thing and it is the clearest example I have. Nobody was asked. There is no note. The plants are alive, so the task is being done, ⚠ **and the only reason I know it is a task at all is that they were dying in the week after Eid and then stopped dying.**',
  'A more serious one is the goods-in book. ⚠ **Lina has been totalling it at the end of every week since her second week**, because the previous page had a total on it and she assumed it was required. **Nobody asked her. Nobody told her it was not required.**',
  'What she has never asked is why we total a column of deliveries, ⚠ **which is the question I cannot answer** — the total is not used by anybody for anything and it takes her about twenty minutes a week.',
  '⚠ **Twenty minutes a week for ten weeks, because a previous page had a total on it**, and the question that would have ended it was never available to her to ask.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Lina, totalling a column nobody uses"   ✓ _does every instruction have a name and a verb?_ — "there were no instructions at all"   ? _what question was never asked?_ — "why we total it — and nobody can answer"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the task was done anyway in all three texts, ⚠ **and in all three the thing that was lost was a question, not the work.** ⚠ The sample shows the pattern running in both directions: **a task nobody assigned being done, and a useless task being inherited from a previous page** — and the same missing question would have ended both.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The line: the goods-in total. ⚠ I said it to Lina this morning: ***I am asking you to stop totalling the goods-in column; nobody uses the total and it takes you twenty minutes a week.*** ⚠ **In my book, with the date.** She asked why there was a total on the old pages, **and I do not know, which is now a question for Mr Ayoub.**']));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  One week, in its verbs'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question does the work: *how many are written down anywhere* — and the usual answer is two or three of a dozen.'));
out.push(p('**b**  ⚠ **All four belong in it**, and the third — *a thing somebody asked you to do and you said nothing* — is the one nobody puts in and the one that causes the trouble.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Five: one undertaking and four agreements** — plus three offers to look and three silences.  2 ⚠ **That they are worse than nothing, because all three askers have written it down as a yes** — *silence after a question is heard as consent, and "I will see" is a form of silence with a polite noise in it.*'));
out.push(note('⚠ Mr Ayoub\'s definition of the register is the one to keep: ⚠ **it is not a list of what you promised; it is a list of what somebody is expecting** — and that is a longer list. ⚠ **Which is why it has to be written on a Thursday and not remembered on a Monday**: by Monday the memory has sorted itself into what the writer intended.'));
out.push(p('**Language box – Practise (samples):** eleven lines with both verb columns, then the count. ⚠ **The useful question afterwards is *how many of these would I have remembered without the page?*** — and the answer is usually six or seven of eleven, **with the silences missing from the remembered set.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your week. How many?'],
  ['A', 'Nine, I think.'],
  ['B', 'Any questions you were asked and did not answer?'],
  ['A', '…The apprentice asked whether he could leave early on Thursday for his class. I said I would see.'],
  ['B', '⚠ What has he written down?'],
  ['A', '⚠ **He has told his college he will be there.**'],
  ['B', 'And anything in writing?'],
  ['A', '⚠ **Yes. The school wrote on the 2nd asking whether we would quote for the railings and I have not replied.** That is eleven, not nine.'],
]));
out.push(note('⚠ Role card 2 reproduces the pattern reliably: ⚠ **the count goes up by two when the silences are added, and the second one is in writing.** The question in writing is always the worst line on the page, **because it is the one where the asker has documentary evidence of having asked and the writer has nothing at all.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the entries by kind and then the silences. **Typical errors:** a register with no *to whom* column (⚠ **a commitment with no person in it cannot be closed**) · a line marked closed that the other person has not been told about · and the content error, which is omitting the silences because they do not feel like commitments. ⚠ **They are the only entries where somebody else is certain and you are not.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What it is', 'To whom, when', 'My verb', 'What they heard', 'By when · open/closed'], [
  ['the Beirut labels', 'Bassel, 3 Mar', '*offered to look*', '⚠ **agreed to, by the 10th**', '10 Mar · **open**'],
  ['the Jaber call', 'Nadia, 7 Mar', '*undertook to*', 'undertook to', '8 Mar · closed'],
  ['the key board question', 'Lina, 22 Feb', '*agreed to ask*', '⚠ **agreed to fix**', '— · ⚠ **open, 17 days**'],
  ['declining the Homs quotation', 'Bassel, 10 Feb', '*agreed to write*', 'agreed to', '— · ⚠ **open, 29 days**'],
  ['⚠ **the Thursday counter**', 'Hala, 5 Mar', '⚠ ***"I will see"***', '⚠ **yes**', '6 Mar · ⚠ **open**'],
  ['⚠ **a quotation for 100 cartons**', '⚠ **Ms Tannous, 2 Mar — in writing**', '⚠ **nothing at all**', '⚠ **yes**', '— · ⚠ **open, 9 days**'],
], [1.6, 1.2, 1.1, 1.2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My week has eleven lines: one undertaking, four agreements, three offers and three silences. The silence that worries me most is the hundred-carton quotation, because it was asked in writing on the 2nd and it is the largest enquiry we have had from outside Syria."', '⚠ **Count the silences in the room, then ask how many were in writing.** ⚠ **A question in writing answered with silence is the worst line in anybody\'s register**, because the asker holds the evidence and the writer holds nothing.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four closed and seven open**, and three of the seven longer than a fortnight — ⚠ **the declining letter twenty-nine days (three minutes of work) and the key board seventeen.**  2 ⚠ **Lina heard *agreed to fix it*** — the rung above *agreed to ask* — ⚠ **and she has not raised it again because she thinks it is in hand. Nothing is in hand.**  3 ⚠ **Ms Tannous\'s written question of 2 March about a hundred cartons, unanswered for nine days** — *the largest enquiry this company has ever had from outside Syria, and it is not in anybody\'s programme because I never wrote it down.*'));
out.push(note('⚠ The last sentence of the page is the argument for the whole unit: ⚠ *the only reason it is on this page is that I made the page.* **Nine days of silence on the largest enquiry in the company\'s history was not a decision, a judgement or a delay — it was an item that existed in nobody\'s system**, and one hour on a Thursday found it.'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**COMMITMENTS REGISTER — WEEK OF 3 MARCH. B. Nassif. ⚠ Nine lines. Two are silences and one is in writing.**',
  'the steel for the school | Abu Yasser, 4 Mar | *agreed to order* | agreed to order | 6 Mar · closed',
  'the galvanising quotation | the plater, 5 Mar | *asked him to quote* | asked | 12 Mar · **open**',
  'the drawing register | the apprentice, 12 Mar | ⚠ ***asked him to enter revisions*** | asked | from today · **open**',
  '⚠ **the revision check against the customer\'s copy** | ⚠ **nobody** | ⚠ **nothing** | — | — · ⚠ **open**',
  '⚠ **the apprentice\'s Thursday class** | ⚠ **the apprentice, 6 Mar** | ⚠ ***"I will see"*** | ⚠ **yes** | from 13 Mar · ⚠ **open**',
  '⚠ **a quotation for the school railings** | ⚠ **the bursar, 2 Mar — in writing** | ⚠ **nothing at all** | ⚠ **yes** | — · ⚠ **open, 10 days**',
  '⚠ **Two lines are closed and seven are open**, and two have been open more than a week.',
  '⚠ **The line I had not seen.** The apprentice\'s Thursday. I said *I will see*; ⚠ **he has told his college he will be there**, which means he will leave at four whatever I decide, and the right answer now is yes with the rota changed.',
  '⚠ **The worst thing on this page.** The bursar wrote on 2 March. ⚠ **Ten days.** The only reason it is here is that I made the page.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Five columns, including *what they heard*', '✓'],
  ['The age of every open line, in days', '✓ where known'],
  ['The verb in quotation marks where there was no verb', '✓ twice'],
  ['A line where the rung above has become somebody\'s plan', '✓ the college'],
  ['The silence that is in writing, last', '✓'],
], [5, 1]));
out.push(note('⚠ The sample\'s *line I had not seen* is better than the model\'s because it reaches a decision: ⚠ **he will leave at four whatever I decide, so the right answer now is yes with the rota changed.** **A register entry that produces a decision in the writing of it is the register working**, and this is the one to read out.'));
out.push(stage('6R', 'Share'));
out.push(p('The oldest open line and its age. ⚠ **Ask how long each would take to close** — and the pattern is reliable: **the oldest lines are the shortest jobs.** A twenty-nine-day line that takes three minutes is in every register in the room.'));
out.push(stage('7', 'Write freely – sample (173 words)'));
out.push(sample(null, [
  'A customer and I disagreed for six weeks about whether I had agreed to make a gate or to price one.',
  'What I said was *I will work out what that would cost.* My verb was *offered to price*. ⚠ **What he heard was the rung above — that we would make it — because he had asked whether we could do it and the only part of my answer he could plan against was yes.**',
  'He measured the opening. He took the old gate off, which I have since learned he did on the Saturday. And on the Monday he telephoned to ask when we were coming.',
  '⚠ **The difference was found when his plan failed, which is six weeks after the sentence and about four hours after the gate came off.**',
  'What it cost was a gate made in nine days at a price nobody had agreed, and about three weeks of our other work moved.',
  '⚠ **And the sentence that would have prevented it is the one from 18.2: *I will work out what that would cost. I am not agreeing to make it until you have the price.*** ⚠ **Thirteen extra words, six weeks earlier.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer on the Saturday, with the gate off"   ✓ _is the verb that was used recorded exactly?_ — yes   ? _what did he plan on the strength of it?_ — "the removal of the old gate"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the other person had planned something on the rung above in all three texts, ⚠ **and in all three the difference was found when the plan failed and not before.** ⚠ **That is the structural problem the fourth column solves**: a register with both verbs in it finds the difference while the plan is still a plan.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['This week as a register: eight lines, three open, ⚠ **one silence — the bursar\'s letter of 2 March.** ⚠ **The oldest open line was the Homs declining letter at twenty-nine days and I closed it before writing this**, in three minutes, with twenty-eight words. **The page took eleven minutes and produced two actions, one of which had been outstanding for a month.**']));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: nine lines on a wall'));
out.push(stage('1', 'Get ready – Unit 18 quiz'));
out.push(p('**1** ⚠ **The sentence inside it** — and whether there is one at all: a thing with no sentence in it is being put off for **time** and not for fear.  **2** ⚠ **As strong as the strongest verb anybody in the conversation heard** — because a third person acts on the only version that can be planned against.  **3** ⚠ ***Stopped checking* says he abandoned a control; *stopped, to check* says he paused in order to do one.*** One is a disciplinary matter and the other is a page.  **4** ⚠ ***Responsible for* is who does it; *liable for* is who answers and pays.*** The fourth column is ⚠ ***willing to*, with a review date.**  **5** ⚠ **A name, a verb, and somebody who said it** — and a document is none of those: *you cannot get* mark the cartons *out of* take this to the warehouse.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The Thursday counter** (between two people who can see each other) and ⚠ **the Beirut labels** (Bassel\'s, because he gave the customer the date).  2 ⚠ **A wall has two properties: everybody can see it, and nobody can reorder it** — *in a book you turn a page and the oldest line goes to the back.*'));
out.push(note('⚠ Mr Ayoub\'s rule about ownership is worth its own minute: ⚠ **a commitment belongs to whoever somebody outside the building is relying on, which is not always the person who said the verb.** Bassel told the customer the 10th, **so the labels are his line whatever either of them said in the room** — and that is a fairer rule than any about who spoke.'));
out.push(p('**Language box – Practise (sample):**  _"Nine of the eleven go on the wall. The Thursday counter stays in the book. The labels are Bassel\'s. And at the top, in red: nine days, Ms Tannous, a hundred cartons, not answered."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'Which of your lines does somebody outside the building depend on?'],
  ['A', 'The bursar\'s railings quotation. And the plater\'s galvanising, because the school is waiting on it.'],
  ['B', 'Then those two go on the wall. What about the drawing register?'],
  ['A', '…Nobody outside depends on it.'],
  ['B', '⚠ Then it is a book line. And who is nearest the person waiting on the galvanising?'],
  ['A', 'Me, because I am the one who telephones the plater.'],
  ['B', '⚠ **Then it is yours even though Abu Yasser agreed to order the steel** — and that is the line most likely to have been sitting between two people.'],
]));
out.push(note('⚠ Pair 2 produces the finding that the ownership rule is designed for: ⚠ **a line that sits between two people, each believing it is the other\'s.** The test — *who is nearest the person waiting?* — settles it without an argument, **and the line that has been sitting is almost always the one both people thought was assigned.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what went on the wall and what came off. **Typical errors:** putting everything on the wall (⚠ **a wall with everything on it is a wall nobody reads**) · writing wall lines as sentences · and the content error, which is leaving the unanswered question among the commitments. ⚠ **It is not a commitment; it is a question from outside, and it goes at the top in another colour with its date.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The line', 'Wall, book, or somebody else', 'Why'], [
  ['the hundred-carton quotation', '⚠ **wall — top, in red**', '⚠ **a question from outside, nine days old; not a commitment**'],
  ['the declining letter to Homs', 'wall', 'twenty-nine days, three minutes, and nobody else can see it'],
  ['the Thursday counter', '**book**', 'between two people who sit within sight of each other'],
  ['the Beirut labels', '⚠ **somebody else — Bassel**', '⚠ **he gave the customer the date**'],
], [2, 1.6, 2.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"I took the Thursday counter off the wall because Hala sits within sight of me, and the Beirut labels because Bassel gave the customer the date. At the top, in a different colour, is the hundred-carton question from Ms Tannous, dated 2 March."',
  '⚠ **The unit\'s mediation, named as the sixth unit of this book:** everybody keeps their commitments in a book, **and a book is a device for making the oldest item invisible** — you turn a page and the twenty-nine-day line goes to the back. ⚠ **So the lines that are hardest to close are the ones a register is structurally designed to hide**, and the only fix is not a better register but ⚠ **a surface nobody can reorder.**',
  '⚠ And the half that decides what anybody does: **the wall must be shorter than the register.** Nine of eleven, not eleven of eleven — ⚠ **because the two properties of a wall are that everybody can see it and that nobody can reorder it, and both are destroyed by a wall with thirty lines on it.** The discipline is in the choosing, which takes four minutes on a Thursday.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 5)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'B', 'B', 'A', 'B', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q2 is the item the paper is built around and it is the unit\'s own argument: ⚠ **people hear a stronger verb because they need something to plan against, not because they are careless.** A learner who answers **A** has understood the mechanics and missed the reason — ⚠ **and the reason is what makes the repair the speaker\'s job rather than the listener\'s.**'));
out.push(note('⚠ Q4 requires reading two figures and subtracting nothing: *four were closed and seven were open; three of the seven had been open for more than a fortnight.* ⚠ **The answer is three, and B (four) and C (seven) are both numbers in the text** — which is what makes it a Part 5 question rather than a comprehension question.'));
out.push(stage('6', 'Write with help – sample (77 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Dear Ms Tannous, yes — we can supply a hundred cartons. I am sorry to have taken nine days to reply. The lead time is four weeks from order, because our supplier makes to order above three hundred, and the price depends on her break at five hundred, which I will confirm on Friday the 14th. If you need them sooner than four weeks we can send two hundred from stock first. I will telephone on Friday whether or not I have the price.',
]));
out.push(note('⚠ That sample is 86 words and must be cut to eighty. ⚠ The cut is *because our supplier makes to order above three hundred*, which is an explanation of the lead time and not part of the answer. ⚠ **What must not be cut is the last sentence** — *I will telephone on Friday whether or not I have the price* — **because it is the only undertaking in the letter that cannot fail**, and it is the repair for the nine days.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ The answer in the first line', '✓ *yes*'],
  ['The apology in one clause, with no reason', '✓'],
  ['What happens next, with a date', '✓ Friday the 14th'],
  ['60 to 80 words — count them', '✗ 86 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (177 words)'));
out.push(sample(null, [
  '**COMMITMENTS REGISTER — WEEK OF 10 MARCH. N. Mansour. ⚠ Nine on the wall, two in the book. The red line is at the top.**',
  '⚠ **RED — a hundred cartons, Ms Tannous, asked in writing 2 March, answered 11 March. Nine days.**',
  'declining letter to Homs | Bassel, 10 Feb | *agreed to write* | agreed to | ⚠ **closed 11 Mar — 29 days, three minutes**',
  'the key board | Lina, 22 Feb | *agreed to ask* | ⚠ **agreed to fix** | ⚠ **open, 17 days — asked Mr Ayoub today**',
  'the labels | Bassel, 3 Mar | *offered to look* | ⚠ **agreed to, by the 10th** | ⚠ **transferred to Bassel — he gave the date**',
  'stock figures for Mr Attar | Mr Attar, 20 Jan | ⚠ ***"I will see"*** | ⚠ **yes** | open, by 20 Mar',
  'the Jaber call | Nadia, 7 Mar | *undertook to* | undertook to | closed 8 Mar',
  'the Ghouta change note | Fadi, 25 Feb | *agreed to* | agreed to | closed 25 Feb',
  'the Thursday counter | Hala, 5 Mar | ⚠ ***"I will see"*** | ⚠ **yes** | ⚠ **book — she can see me**',
  '⚠ **What the page produced.** Two lines closed, one transferred, one question answered after nine days, ⚠ **and one line discovered to be somebody\'s plan rather than my intention.**',
  '⚠ **And the wall is where the ages are.** Twenty-nine days was invisible in a book for a month and lasted four days on a wall.',
]));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Nine lines are on the wall by the door, oldest at the top, ⚠ **and the red line is the bursar\'s railings question of 2 March.** ⚠ **Two things happened in three days**: Abu Yasser asked about a line that was not his and took it, and the apprentice pointed at the red line on the second morning. **Neither would have happened to a page in my drawer.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 18 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'a', 'b', 'a', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 4 is the only question in Book 2 that asks which sentence is **wrong to write**, and it is the unit: ⚠ **he never checked them at all, so *he stopped checking them* asserts a control he never had.** A learner who picks b or c has chosen a true sentence and missed that the question asked for the false one — **read the stem aloud before marking.**'));
out.push(note('⚠ Question 7 is *tell* against *say*: ⚠ ***tell* takes an object before the infinitive and *say* does not.*** ⚠ Question 8 is the ladder — **as strong as the strongest verb anybody heard** — and a learner who picks c (*the written one*) has produced a reasonable rule that is not what happens: **the written version is only authoritative if the other party has seen it.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Lines on the wall', 'Left in the book, and why', 'Transferred, and why', 'At the top, in colour', 'The two properties of a wall'], [[
  'nine', '⚠ **the Thursday counter — Hala sits within sight**', '⚠ **the labels — Bassel told the customer the 10th**', '⚠ **the unanswered question, with its date**', '⚠ **everybody can see it; nobody can reorder it**',
]], [0.9, 1.6, 1.7, 1.4, 1.7]));
out.push(note('⚠ Gaps 2 and 3 both need the **reason** and not just the line, and gap 5 needs **both** properties: ⚠ *everybody can see it* alone is half the answer, and the half that matters is **nobody can reorder it** — because that is the property a book lacks and the one that makes the oldest line visible.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (71 words)', ['the labels | Bassel, 3 Mar | *offered to look* | ⚠ **agreed to, by the 10th** | 10 Mar · **open**   the Jaber call | Nadia, 7 Mar | *undertook to* | undertook to | 8 Mar · closed   the key board | Lina, 22 Feb | *agreed to ask* | ⚠ **agreed to fix** | ⚠ **open, 17 days**   declining Homs | Bassel, 10 Feb | *agreed to write* | agreed to | ⚠ **open, 29 days**   ⚠ **the 100-carton quotation** | ⚠ **Ms Tannous, 2 Mar — in writing** | ⚠ **nothing at all** | ⚠ **yes** | ⚠ **open, 9 days**']));
out.push(box('Marking the Unit 18 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gaps 2 and 3 need the reason, gap 5 needs both properties.'],
    ['**C Writing**', '7', 'Five lines with *what* and *to whom* (1) · the verb actually used, quoted where there was none (2) · ⚠ **a *what they heard* column that differs on at least one line** (2) · ⚠ **the age in days of the open lines** (1) · open or closed marked on every line (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for a differing *what they heard* column are the unit.** ⚠ **A register whose two verb columns are identical on every line scores 0 of those 2**, however neat — because the column is filled by moving one rung up the ladder, and **a week in which nobody heard anything stronger than you said has not been examined.**',
  '⚠ **Give the age mark only in days.** *Overdue* earns nothing; ⚠ **twenty-nine days earns it** — and the figure is what makes the oldest line, which is almost always the shortest job, impossible to leave.',
  '⚠ **Deduct nothing for a short register and deduct for a line with no person in it.** ⚠ **A commitment with no *to whom* cannot be closed**, because closing a line means the other person knowing it is closed — and a register of five good lines beats one of twelve with blank second columns.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 18**'));
out.push(p('**1 The fourth column filled with the same verb twice.** It will happen in most of the class and it is not laziness: ⚠ **a writer genuinely cannot hear their own sentence as a hearer did.** The instrument is the ladder, used mechanically — **write your verb, then write the rung above it, every line, without judging whether it is fair** — and the band-3 slip in 18.6 is the enforcement, because only somebody reading as one of the people in the register can see an identical pair. ⚠ **Run that slip properly or the register is a list of what the writer meant.**'));
out.push(p('**2 Silences left out of the register.** The three entries that cause the trouble are questions answered with *I will see* or with nothing, and learners omit them because they do not feel like commitments. ⚠ **They are the only entries where somebody else is certain and the writer is not.** ⚠ The question that finds them is one line: ***what were you asked this week that you did not answer?*** — and it should be asked in 18.6 before the register is written, not after. **Expect two or three, and expect the worst one to be in writing.**'));
out.push(p('**3 Treating 18.7 as a filing tip.** The wall looks like stationery and it is the structural finding: ⚠ **a book is a device for making the oldest item invisible**, so the lines hardest to close are the ones a register is designed to hide. If a lesson has to be cut, **cut 18.3 and keep 18.7** — the four pairs can be taught in fifteen minutes inside 18.5, and the wall cannot be demonstrated, only done. ⚠ **And insist on the two limits**: nine lines and not eleven, and ⚠ **the question from outside at the top in another colour.** A wall with thirty lines on it has both of a wall\'s properties destroyed, and then the drawer was better.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 18 · Answer Key');
