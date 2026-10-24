// Proactive Business English B1 · Syria Edition · Book 2 · Unit 24 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 24  Looking Ahead to B2'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **There is no new grammar in this unit and that is deliberate.** The tense map, the question forms and the future perfect have all been used in earnest earlier in the book; ⚠ **what is new is being asked what you cannot do, and being asked to arrange a reader.** **Teach it as a closing week and not as revision.**',
  '⚠ **Two cycles are harder to teach than anything else in the two books.** ⚠ **24.4 asks for a gap and will be answered with a verdict** (*my English is not very good*) until the distinction is drilled; ⚠ **24.6 asks for a sealed letter and will be answered with a list of achievements** until somebody says out loud that in four months they will know what they learned and will have forgotten what it felt like not to know it.',
  '⚠ **And 24.7 is the only cycle in either book that must produce an action before the class leaves the room.** **One document, one reader, one date in the next fortnight, written on a list the teacher keeps** — ⚠ **and the teacher asks in October.** **If that does not happen, the unit has not been taught**, whatever was written in it.',
], C.grey, C.navy));

// ===================== 24.1 =====================
out.push(h2('24.1  The whole system on one page'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The third part of the question is the one that matters: **what does each one do that the others cannot?** — and most classes have never been asked it.'));
out.push(p('**b**  ⚠ **A habit — present simple. A finished action at a stated time — past simple. A finished action with a present result — present perfect.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The past simple with a date and the present perfect** — *we sent the list on the 20th* against *we have sent the list*.  2 ⚠ **Does the reader have to do anything?** ⚠ **If yes, the perfect, because it brings the thing into today.**'));
out.push(note('⚠ The useful framing is that the map is not a corrector: ⚠ **it is for choosing between two forms that are both right.** **A class that has only ever met tenses as right-and-wrong will find this strange for about ten minutes** and then find it the most practical grammar lesson they have had, because ⚠ *we sent it on the 20th* invites *and did it arrive?* and *we have sent it* invites *what do you need from me?*'));
out.push(p('⚠ And the honest reassurance: ⚠ **nobody keeps twelve forms in their head; you keep a page and look at it for a year** — ⚠ **and six of the twelve do nine documents out of ten.** **Say which six**: present simple, present continuous, present perfect, past simple, *going to*, and the future perfect.'));
out.push(p('**Language box – Practise (samples, one fact four ways):**  ⚠ *We mark export cartons at night* (the habit — nothing about this week).  ⚠ *We are marking on Thursday* (an arrangement; the lorry people know).  ⚠ *We have marked the Tannous order* (it exists now — **what do you need from me?**).  ⚠ *We marked it on the 9th and 10th* (the record, for a file).  ⚠ *By Friday we will have marked ninety* (**the only one a lorry can be booked against**).'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to say that the marking will be done before the lorry comes.'],
  ['B', 'Try it.'],
  ['A', '*The marking will be finished when the lorry comes.* …That is not quite it.'],
  ['B', 'Try again.'],
  ['A', '*We are finishing the marking before Friday.* No.'],
  ['B', '⚠ What are you trying to say?'],
  ['A', '⚠ **That by the time the lorry goes, ninety cartons will exist.**'],
  ['B', '⚠ ***By Friday we will have marked ninety.*** ⚠ **And you will not forget it, because you needed it first.**'],
]));
out.push(note('⚠ **Role card 2 is a teaching method and not an exercise**: ⚠ **let the learner fail with every form they have before naming the one they need.** **It takes ninety seconds and it is the difference between a form that is learned and a form that is covered** — and the dialogue in the Student\'s Book says so: *a form learned because you needed it is not forgotten.*'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two versions and what each asks the reader to do. **Typical errors:** calling one version wrong · and the content error, which is naming the form before the learner has needed it. ⚠ **The six that matter should be named aloud at the end of this cycle and written on the board for the rest of the unit.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The form', 'My sentence', 'What it asks the reader to do'], [
  ['present simple', 'the van goes east on Thursdays', '⚠ **nothing — it is background**'],
  ['present continuous', 'we are loading on the 11th', 'put the 11th in their own diary'],
  ['present perfect', '⚠ **we have sent the list**', '⚠ **look for it, and tell me if it has not come**'],
  ['past simple', 'we sent it on the 20th', 'file it; the question is closed'],
  ['_going to_', 'we are going to buy no board', 'plan on no board arriving'],
  ['⚠ **future perfect**', '⚠ **by Friday we will have marked ninety**', '⚠ **book a lorry**'],
], [1.4, 2.4, 2.2]));
out.push(note('⚠ **The third column is the lesson and the class will not have thought of it.** ⚠ **Two of the six ask the reader to do nothing**, which is the right answer for background; ⚠ **and the future perfect is the only one in the table that a lorry can be booked against** — which is 24.2 arriving one cycle early.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My fact is that the list went to Beirut. In the present perfect it reads *we have sent the list*, which asks the reader to look for it and tell me if it has not come. In the past simple it reads *we sent it on the 20th*, which asks them to file it."', '⚠ **Then ask which form each student has never once used at work.** ⚠ **It is usually the past perfect or the future continuous**, and that is a fact about their work and not about their English.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Present simple (all 41 documents), present perfect (33) and the past simple with a date (29).**  2 ⚠ **Eleven times between them** — past perfect four, *used to* three, *would* three, future continuous once; ⚠ **and all four future perfects are in export programmes, all written since March.**  3 ⚠ **Carry three and know them exactly, and let the other nine arrive when a sentence you need will not go into any of the three.**'));
out.push(note('⚠ **The finding worth the whole page is that the form arrived with the job.** ⚠ *Four uses of the future perfect, all in export programmes, all since March — because the export work is the first work this company has done where somebody else\'s deadline decides everything.* **Grammar at work is acquired by need, and a counted page proves it.**'));
out.push(p('⚠ And the small counts are the honest half: ⚠ *the past perfect four times, *used to* three, *would* three, the future continuous once.* **They tell a learner what not to spend a month on**, which is information no coursebook contents page gives.'));
out.push(stage('6', 'Write with help – sample (122 words)'));
out.push(sample(null, [
  '**THE FORMS THE SHOP ACTUALLY WRITES. 2 September. H. Mourad. ⚠ Counted from nineteen documents of this year.**',
  '**present simple** | ⚠ **in all 19** | prices, opening hours, what goes on which tray | every label, the Friday list',
  '**present perfect** | ⚠ **in 12** | ⚠ **a finished thing somebody must act on** | *the bread has come · we have changed the price · she has cancelled the standing order*',
  '**past simple with a date** | in 9 | the record | the complaint notes and the till differences',
  '⚠ **future perfect** | ⚠ **in 1** | ⚠ **finished by a deadline** | ⚠ **the one line I wrote for the clinic: *by two the tray will have been made up***',
  '⚠ **Four forms, and the first three are in nearly everything.** ⚠ **The other eight appear three times in nineteen documents**: *used to* twice and *would* once.',
  '⚠ **And the one future perfect is the only sentence in the file that anybody planned against.** The clinic sends somebody at a quarter past two ⚠ **because of that line and not because of anything else we have ever written.**',
  '⚠ **What I would tell anybody learning.** Carry the first three. ⚠ **And learn the future perfect early, because it is the only one that lets somebody else arrange their day round you.**',
]));
out.push(note('⚠ **The sample\'s closing advice is better than the model\'s and worth promoting**: ⚠ **learn the future perfect early, because it is the only form that lets somebody else arrange their day round you.** **One line, one clinic, one quarter past two** — and it is the whole commercial case for a tense.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count, from a stated number of documents', '✓ nineteen'],
  ['*What it was doing* beside each form', '✓'],
  ['The rare counts printed as well as the common', '✓ three in nineteen'],
  ['The form that arrived with a new kind of work', '✓ the clinic tray'],
  ['The three-form advice, stated plainly', '✓ and a fourth recommendation'],
], [5, 1]));
out.push(note('⚠ **Band 3 and one move:** the reader to name in this unit is ⚠ **the person who will be at your level in a year** — a new colleague, a trainee, yourself in Unit 1. ⚠ **The one question is *which three should I learn first?*** **It keeps the whole unit practical**, and it is the reader every page in Unit 24 is written for.'));
out.push(stage('6R', 'Share'));
out.push(p('The form that arrived with the work only. ⚠ **Then ask what the work was** — and the answers are always a change in the job: an export order, a night shift, a new customer, a clinic that needs a time. ⚠ **Nobody\'s answer is *a lesson*.**'));
out.push(stage('7', 'Write freely – sample (173 words)'));
out.push(sample(null, [
  'The form I learned because I needed it is the past perfect, and I learned it in one afternoon in a customs office.',
  '⚠ **The officer asked me whether the seal had been broken before the lorry left the yard**, and I understood the question and could not answer it in the same shape.',
  'What I said was *the seal was broken and then the lorry left*. ⚠ **He wrote something down and asked me again, in the same words, and I said the same thing again.**',
  '⚠ **The difference mattered to him and not to me**: if the seal had been broken before it left, the fault was ours and the consignment was ours to re-pack; if it was broken afterwards, it was the carrier\'s. ⚠ **My sentence put the two things in order and said nothing about which was the point.**',
  'A clerk at the next desk said it for me. ⚠ ***The seal had been broken before the lorry left.*** Eight words.',
  '⚠ **I have used that form nine or ten times since and every single one has been about who is responsible**, which is what it is for.',
  '⚠ **Nobody had ever told me that the past perfect is a form about liability.**'],
));
out.push(note('⚠ **The sample finds the real job of a form that most courses teach as a sequence**: ⚠ **the past perfect is a form about liability.** **Which came first is a legal question before it is a grammatical one** — and a class that hears this will remember the form for good.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customs officer, asking twice"   ✓ _is the sentence they could not write there?_ — "yes, both versions"   ? _what have they written with it since?_ — "nine or ten times, every one about responsibility"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the form arrived with a new kind of work in all three texts, ⚠ **and in two of three the writer had been taught it years before and had never once used it.** **That is not a criticism of teaching**; it is the finding of the cycle — **a form has to be needed before it is held.**'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['Five documents counted. ⚠ **Present simple in all five, present perfect in four, past simple with a date in three.** ⚠ **One *going to* and one future perfect, both in the same document — the only one with somebody else\'s deadline in it.** ⚠ **Nothing else at all**: no past perfect, no *used to*, no future continuous.']));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  The same question, eight ways'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Three questions aloud, and then the real question: **what would each answer let you do?**'));
out.push(p('**b**  ⚠ ***Are* the cartons marked yet?** · ⚠ ***Did* you mark them yesterday?** · ⚠ ***Will* you be marking at two?**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ ***Will you have finished by Friday?*** — because the lorry is Friday and the only thing anybody needs is whether ninety cartons will exist by then.  2 ⚠ **A *yes* that tells you nothing about Friday**: *a man can be marking every night of the week and still not finish by Friday.*'));
out.push(note('⚠ The two sentences to put on the board: ⚠ **the tense chooses the question and the question chooses what you are allowed to be told**; and ⚠ **if you cannot say what you would do differently, you are asking to be reassured and not to be told.** **The second is the test and it takes four seconds to apply.**'));
out.push(p('⚠ And the diagnosis of why people ask the wrong one is generous and exact: ⚠ ***did you mark on Tuesday?* is a question about the asker\'s memory and not about the work.** **People ask about what they remember**, which is a habit rather than a fault.'));
out.push(p('**Language box – Practise (sample, the eight about a delivery):**  *Do you deliver on Thursdays? Are you delivering this Thursday? Have you delivered the Ghouta order? Did you deliver on the 9th? Had you delivered before the gate closed? Are you going to deliver tomorrow?* ⚠ ***Will you have delivered all eleven by Friday?*** *Will you be delivering at four?* — ⚠ **and the seventh is the only one a customer can be telephoned on the strength of.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Are the labels here? Have the labels come? Did the labels come on Tuesday? Will the labels come?'],
  ['B', '⚠ Before I answer any of them — ⚠ **what are you going to do with the answer?**'],
  ['A', 'I want to know whether we can run the Friday batch.'],
  ['B', '⚠ **Then none of your four questions is about that.**'],
  ['A', '…*Will we have enough labels to finish the Friday batch?*'],
  ['B', '⚠ **No. Sixty labels and the batch is a hundred.** ⚠ **Which you now know on Wednesday instead of on Friday morning.**'],
]));
out.push(note('⚠ **Role card 2 shows four questions all missing the subject**, which is the normal case: ⚠ **the asker knows what they want to decide and asks about the nearest visible thing instead.** **The repair is one question asked of yourself first** — *what am I going to do with the answer?* — and it reframes the whole exchange.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the eight and mark today\'s. **Typical errors:** *will you have finish* · *did you have marked* · and the content error, which is asking the question with the most polite form rather than the most useful one. ⚠ **The useful question is almost always the one with the deadline in it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The form', 'My question', 'What the answer would let me do'], [
  ['present simple', 'do you bake small loaves every day?', '⚠ **nothing this week**'],
  ['present continuous', 'are you baking small ones today?', 'come in today'],
  ['present perfect', 'have the small ones come out?', 'go and look now'],
  ['past simple', 'did they come out on Tuesday?', '⚠ **nothing at all — it is a question about my own memory**'],
  ['past perfect', 'had they come out before the clinic came?', 'settle an argument about last week'],
  ['_going to_', 'are you going to bake more?', 'wait, perhaps'],
  ['⚠ **future perfect**', '⚠ **will you have forty small ones by eleven?**', '⚠ **promise the clinic forty at a quarter past**'],
  ['future continuous', 'will you be baking at ten?', 'know where to find him'],
], [1.5, 2.3, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My eight questions are about the small loaves. The one I would act on is *will you have forty by eleven?*, because the clinic has to be told something at a quarter past. The one that only gets a *yes* is *are you baking today?*"', '⚠ **Then ask, of any question with no deadline, what the asker would do differently with the answer.** ⚠ **About half the time the honest answer is *nothing*** — and saying so is the whole cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four of nineteen, and those four produced every decision that was taken** — the other fifteen produced *yes*, *not yet*, *at four* and *I think so*.  2 ⚠ **Three people asked *are you marking tonight?* on the same day, all three got *yes*, all three went away satisfied** — ⚠ **and not one learned that eighty cartons and not ninety would exist on Friday.**  3 ⚠ **Because *will you have finished by Friday* sounds like doubting somebody and *are you marking tonight* sounds like taking an interest.**'));
out.push(note('⚠ **The third answer is the real obstacle and it is social.** ⚠ **Naming it is the only way past it**, and a class will recognise it instantly: **the useful question feels like a challenge and the useless one feels like courtesy.** **The remedy is the pronunciation drill** — *will you have* swallowed, the stress on the verb and the deadline — **which makes the useful question sound like the courteous one.**'));
out.push(stage('6', 'Write with help – sample (120 words)'));
out.push(sample(null, [
  '**THE QUESTIONS THE YARD ASKED IN ONE WEEK, AND WHAT EACH GOT. 3 September. F. Saeed. ⚠ Fourteen questions. Three had a deadline in them.**',
  '**is the van loaded?** | ⚠ **yes** | ⚠ **nothing. Asked by two people within ten minutes.**',
  '**did the Ghouta drop go on Monday?** | yes | nothing; it was in the book',
  '**have the pallets come back?** | not yet | ⚠ **telephone the customer — and somebody did**',
  '⚠ **will the eleven drops be done by one?** | ⚠ **no — nine, because two are on the far side and the one-way system is shut** | ⚠ **everything. Two drops were moved to Tuesday and both customers were telephoned on Monday instead of Wednesday.**',
  '⚠ **will the pallets be back before the Thursday load?** | ⚠ **no** | ⚠ **four pallets were hired for Thursday, on the Monday, at half the Thursday price**',
  '⚠ **Fourteen questions and three had a deadline**, and ⚠ **those three produced every decision of the week.** The others produced *yes*, *not yet* and *it is in the book*.',
  '⚠ **And *is the van loaded?* was asked twice within ten minutes by two people**, both of whom got *yes* and went away, ⚠ **and neither learned that two of the eleven drops would not be made.**',
]));
out.push(note('⚠ **The sample\'s fifth row is the best demonstration in the key of what a deadline question is worth**: ⚠ **four pallets hired on Monday at half the Thursday price**, because somebody asked *will the pallets be back before the Thursday load?* **The saving is arithmetic and the question cost nothing.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The questions counted, and the deadlines counted', '✓ 14 and 3'],
  ['The answers recorded verbatim, including the useless', '✓ *yes · not yet · it is in the book*'],
  ['The question asked more than once', '✓ twice in ten minutes'],
  ['Why nobody asked the useful one', '⚠ **✗ — the page does not say, and it should**'],
  ['The cost and the gain of the good question', '✓ half the Thursday price'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The question that got *yes* only. ⚠ **Then ask what it let anybody plan against** — ⚠ **and the answer is always nothing.** **A class that has heard four of its own *yes* questions read out will ask differently for a week**, and the counted habit in 24.3 is how to make it last longer than a week.'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'The question nobody asked at my sister\'s school cost a hundred and forty children a day out.',
  '⚠ **Everybody asked the coach company whether they had buses.** They had buses. They were asked in March, in April and twice in May, and every time the answer was yes, and every time the person who asked went away satisfied.',
  '⚠ **The question was never *will you have three buses with seat belts available on the morning of the 4th of June?*** It was *do you have buses?* and *are you still able to do school work?*',
  'On the 2nd of June the company said that two of their three buses were being used for an examination run on the 4th. ⚠ **They had never said otherwise and nobody had ever asked.**',
  '⚠ **The trip was cancelled on the day before.**',
  '⚠ **What I noticed afterwards is that four different people had asked a version of the question and all four had asked it in the present simple**, which gets you a statement about the company and not about the 4th of June.',
  '⚠ **The present simple is a very polite tense and it answers nothing.**'],
));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the coach company, asked four times"   ✓ _does the unasked question have a deadline?_ — "yes: the morning of the 4th of June"   ? _what made it hard to ask?_ — "nothing, except that nobody thought of the date as part of the question"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the reason is social in all three texts, ⚠ **and in two of three it is that the question would have sounded like doubting somebody.** ⚠ **Where it is not social, as in the sample, it is that the date was never thought of as part of the question** — which is the same fault with a kinder cause.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **I asked the baker *will you have forty small loaves by eleven on Friday?*** He said thirty, because Friday is the Ghouta flour day and the oven is full until half past ten. ⚠ **I telephoned the clinic on Wednesday and offered thirty at eleven or forty at twelve**, and they took thirty. ⚠ **Nobody has ever asked him that before.**']));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  By January I will have written it nine times'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect frequencies, and let them come: **the cycle needs a frequency to convert.**'));
out.push(p('**b**  ⚠ **The second: *by January I will have written it nine times.*** **The first can only be regretted.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because *every month* cannot be counted at all** — *a habit stated as a frequency is invisible until somebody notices it has stopped, and by then it stopped four months ago.*  2 ⚠ **It can be checked at the half way point**: *in November you can count, find you are at four, and do something about it.*'));
out.push(note('⚠ The arithmetic of N is the part to insist on: ⚠ **five months to January, three already written, so nine and not twelve.** ⚠ **A target you have already decided to miss is worse than no target** — *you stop looking at it in the second month* — **and leaving one spare is what keeps the page open.**'));
out.push(p('⚠ And the last exchange is the one that makes the whole thing survivable: ⚠ **six of nine with a reason is a record; nine of nine with no record of the effort is a tidy story.** **A class that believes the count is a trap will not keep one.**'));
out.push(p('**Language box – Practise (samples):**  1 ⚠ *by January I will have read nine books of my brother\'s English ones* (not *I will read more*).  2 *by December we will have reviewed the prices four times, in March, June, September and December.*  3 ⚠ *by the end of October I will have written eight pages of my own English, one a week with one spare.*  4 *by January we will have checked the gate sheets twenty times.*  5 *by December I will have telephoned each of the six customers three times.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'By January I will have written it twelve times.'],
  ['B', '⚠ Count the months aloud.'],
  ['A', 'September, October, November, December, January. Five.'],
  ['B', '⚠ And how many are written?'],
  ['A', 'Three.'],
  ['B', '⚠ **So eight is the honest number and nine leaves you one spare.** Twelve is ___?'],
  ['A', '⚠ **Twelve is a target I have already decided to miss.**'],
  ['B', '⚠ **And you will stop looking at it in the second month.** ⚠ **When will you count?**'],
]));
out.push(note('⚠ **Role card 2 ends with the question that is always omitted: *when will you count?*** ⚠ **A count with no mid-point check is a count that is read once, in January, as a disappointment.** **The mid-point date belongs in the plan beside N**, and in the sample it is November.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the counted sentence, the arithmetic and the mid-point. **Typical errors:** *by January I will write it nine times* (⚠ **no perfect, so no count**) · a target that is already a miss · and the content error, which is a count kept in a diary instead of on the thing.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The intention', 'By when', 'How many', 'The arithmetic, and the mid-point'], [
  ['the market note', 'end of January', '⚠ **nine**', '⚠ **5 months + 3 written, one spare. Count in November.**'],
  ['the gate-sheet review', 'end of January', '⚠ **twenty**', '⚠ **22 weeks, so twenty with two spare. Count on 1 December.**'],
  ['one paragraph upward', 'end of January', 'five', '5 months, none written, none spare — tight on purpose. Count in November.'],
  ['a page of English a day', '⚠ **not countable as stated**', '⚠ **—**', '⚠ **rewrite as *eight pages by the end of October, one a week with one spare*, in the front of the notebook**'],
], [1.7, 1.2, 1, 2.3]));
out.push(note('⚠ **The fourth row is the one that teaches the cycle**: ⚠ **a daily intention is the hardest to count and the easiest to lose.** **Converting *a page a day* into *eight pages by the end of October, one a week with one spare* makes it survivable** — and the place matters as much as the number: *in the front of the notebook.*'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"By the end of January I will have reviewed the gate sheets twenty times. That is twenty-two weeks with two spare, and the count is written in the gate book where the sheets are. I will count on the 1st of December."', '⚠ **Then count the targets in the room that are already a miss.** ⚠ **It is usually a third of them**, and every one will be defended as ambition.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Two were counted and both were done; three of the four frequencies have failed.**  2 ⚠ **It stopped in May and nobody noticed until July**, because ⚠ **a weekly thing that stops is invisible for about eight weeks — every single week it is only one week late.**  3 ⚠ **On the thing itself**: *note N of 9* on each note, *list N of 12* on each list, the first-off tally in the front of the file, and ⚠ **the gate-sheet count in the gate book, where the sheets are, not in a diary nobody opens.**'));
out.push(note('⚠ **The sentence that must be said aloud is that the difference is not willingness**: ⚠ *the market note matters more than the first-off tally* — **and the tally was done and the note was not.** ⚠ **It is the printed number and nothing else**, and a lesson that moralises instead will change nothing in anybody\'s week.'));
out.push(p('⚠ And the honest row is the uncountable one: ⚠ *read one page of English a day — unknown; I think about half.* ⚠ **Nothing to count, so nothing to know.** **A guess dressed as a figure would have been worse.**'));
out.push(stage('6', 'Write with help – sample (125 words)'));
out.push(sample(null, [
  '**WHAT I SAID I WOULD DO IN JANUARY, AND WHAT THE COUNT SAYS NOW. 3 September. L. Barakat.**',
  '**write up every first-off** | ⚠ **yes — a tally in the front of the file** | ⚠ **four of four** | ⚠ **the tally is where the job starts**',
  '**read the bench page aloud before each night run** | ⚠ **no — a frequency** | ⚠ **done twice, in April** | ⚠ **nothing told me in May that it had stopped**',
  '**ask one question of somebody who has been here longer than me, every week** | no | ⚠ **about nine in thirty-four weeks** | ⚠ **no number, so no week was ever clearly missed**',
  '**keep a page of words I did not know** | ⚠ **yes — numbered pages** | ⚠ **eleven pages** | the number is on the page',
  '⚠ **The two that were counted were done and the two frequencies were not**, and the second one stopped in April and I did not notice until I wrote this page in September. ⚠ **Five months.**',
  '⚠ **What I am doing about it.** ⚠ **Two counts for the next twelve months, each printed where the work is**: *question N of 20 to January*, written on the inside cover of my own notebook; and ⚠ *page N* **in the word book, which already works.**',
]));
out.push(note('⚠ **The sample\'s second row is the sharpest case in either key**: ⚠ **a safety habit — reading the bench page aloud before a night run — stopped in April and was discovered in September.** **Five months, no decision, no notice** — and the only thing that would have shown it is a printed number.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each intention marked counted or a frequency', '✓'],
  ['That the difference is not willingness, said plainly', '⚠ **✗ — implied, not stated**'],
  ['The arithmetic of invisibility', '✓ five months'],
  ['The unknowable one admitted as unknown', '✓ about nine in thirty-four weeks'],
  ['Each new count printed where the work is', '✓ the inside cover and the word book'],
  ['One spare in every N', '⚠ **✗ — twenty of twenty weeks, with none**'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The thing that stopped without anybody noticing only. ⚠ **Then ask how long it was invisible** — ⚠ **and the answers run from six weeks to two years.** **The weekly ones are always the longest**, for the reason the model gives: *every single week it is only one week late.*'));
out.push(stage('7', 'Write freely – sample (174 words)'));
out.push(sample(null, [
  'My father kept a note of the diesel in the van for nineteen years and it stopped in a week when his mother died, and he has never started again.',
  '⚠ **He wrote the kilometres and the litres on the back of the same hard-backed book every time he filled up**, and he could tell you what the van had cost to run in any month since 2005.',
  '⚠ **It stopped in March of 2024 and nobody noticed, including him.** ⚠ **There was no last entry in the sense of a decision** — there is simply an entry on the 11th of March and then nothing.',
  'He found out in November, because a man offered to buy the van and asked what it did to the litre. ⚠ **He had nine years of figures and eight months of nothing, and the eight months were the ones that mattered to the buyer.**',
  '⚠ **The book has no count in it anywhere.** Nineteen years of entries and no number at the top, ⚠ **because for nineteen years he did not need one.**',
  '⚠ **What a count would have done is nothing for nineteen years and everything in one week.**'],
));
out.push(note('⚠ **The sample\'s last line is the finest thing in either answer key and should be read aloud at the end of the cycle**: ⚠ **what a count would have done is nothing for nineteen years and everything in one week.** **A control is for the week the habit fails**, and not for the years it holds.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the man who wanted to buy the van"   ✓ _a number and a date?_ — "nineteen years of entries and not one number at the top"   ? _how long was the stopping invisible?_ — "eight months, and to him as well"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the stopping was invisible for more than a month in all three texts, ⚠ **and in two of three nobody can name the week it stopped**, because there was never a week when it was clearly late. **Where there is a nameable week, as in the sample, something else happened in it** — and that is worth noticing gently and not pursuing.'));
out.push(stage('HW', 'Homework – sample (≈63 words)'));
out.push(sample(null, ['⚠ **By the end of January I will have written the market note nine times.** Five months to January, three written, ⚠ **one spare.** ⚠ **The count is printed at the bottom of each note: *note 4 of 9 to January*** — not in a diary. ⚠ **And I will count on the 15th of November**, which is in the diary.']));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  What I cannot yet do'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and say the no-*unfortunately* rule before anybody speaks. ⚠ **Expect verdicts** — *my English is not very good* — **and convert the first one in public, gently, so the rest come out as situations.**'));
out.push(p('**b**  ⚠ **The second: *I can write a letter but I cannot argue in one.*** **The first and third are verdicts and cannot be practised.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because it is a verdict about yourself and no exercise follows from it** — *a gap with a situation in it can be practised.*  2 ⚠ **A situation, a cost, an exercise and a person.**'));
out.push(note('⚠ The structural point is that the gap is not about words: ⚠ **half of it is rank and half of it is three forms I do not have.** **Nour can say *we cannot do that* and cannot say *I may be wrong about this, and if I am, what follows is wrong too* and mean it as strength** — ⚠ **which is a B2 skill named precisely at the end of B1**, and that is the whole purpose of the cycle.'));
out.push(p('⚠ And the cost is what makes it urgent: ⚠ **an opinion I cannot defend upward in writing is an opinion I will stop writing down** — *it is the gap that would stop the market note in about four months.* **A gap with a consequence gets practised; a gap without one gets mentioned once a year.**'));
out.push(p('**Language box – Practise (samples):**  ⚠ *I can take a complaint on the telephone; I cannot refuse one on the telephone without writing it first.* **Exercise:** refuse one small thing a week, on the call, in two sentences. **Person:** a colleague who listens and writes down what was said.  ⚠ *I have never had to chair a meeting in English.* **Cost: unknown.** **Exercise:** chair the Thursday handover once a month.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'My exercise is that I will do all my telephone calls without writing them first.'],
  ['B', '⚠ For how long?'],
  ['A', 'From now on.'],
  ['B', '⚠ **And on the first bad morning?**'],
  ['A', '…I will write them.'],
  ['B', '⚠ **Then the exercise is over on the first bad morning.** ⚠ **Make it the first two minutes of each call, for a month.**'],
  ['A', 'That is very little.'],
  ['B', '⚠ **It is little enough to survive a bad week**, which is the only size that is any use.'],
]));
out.push(note('⚠ **Role card 2 is the one that makes the cycle work in real lives**: ⚠ **an exercise that cannot survive a bad week ends on the first bad morning.** **Two minutes, one paragraph, one call a day, one clause each morning** — ⚠ **and a class will resist the smallness as if it were a lack of seriousness.** **The reply is that a whole-sized exercise is attempted twice.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the gap, the cost, the exercise and the person. **Typical errors:** *I need to improve* · an exercise that is the whole task · and the content error, which is naming a person who has not been asked. ⚠ **The homework is to ask them.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['I can … but I cannot …', 'What it would cost', 'The exercise, small', 'The person'], [
  ['⚠ **I can write a letter that disagrees with a customer; I cannot write one that disagrees with an auditor**', '⚠ **the market note, in about four months**', '⚠ **one paragraph a month beginning *I may be wrong about this***', 'Mr Ayoub'],
  ['I can read a contract; I cannot read one while somebody waits', '⚠ **two afternoons this year; I sign nothing in a room**', 'one clause aloud each morning, timed', '⚠ **nobody — this one is mine alone**'],
  ['⚠ **I have never had to chair a meeting in English**', '⚠ **unknown, and that is the honest answer**', 'chair the Thursday handover once a month', 'the four people in it'],
], [2.6, 2, 2.1, 1.3]));
out.push(note('⚠ **Three gaps and not one is a word**: ⚠ **rank, speed and a thing never done.** **Nothing on the page could be fixed by a vocabulary list** — and that is the test of whether a learner has understood the cycle: *if one of their gaps is a word, it is not a gap, it is a word to look up.*'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I can read a contract and I cannot read one fast enough to read it while somebody waits. It has cost two afternoons this year, because I sign nothing in a room. The exercise is one clause of the Tannous terms aloud each morning, timed, and the person is nobody — this one is mine alone."', '⚠ **Then count the exercises that would survive a bad week.** ⚠ **In a first attempt it is about half**, and the other half can be halved on the spot.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Every one is a situation and not a word** — upward in writing, refusing on a call, reading at somebody else\'s speed, and chairing; ⚠ **nothing on the page could be fixed by a vocabulary list.**  2 ⚠ **Because reading speed is practised alone** — *pretending otherwise would have given me a fourth person to let down.*  3 ⚠ **Because the writer has never chaired a meeting in English and so does not know what it costs not to be able to** — ⚠ **and the exercise is what will find out.**'));
out.push(note('⚠ **The second answer is a piece of judgement worth more than the rule it breaks**: ⚠ **an exercise with a person is better where a person helps and worse where one does not.** **A page with a name against every line looks thorough and produces four obligations**, and the honest *nobody* is the stronger entry.'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**WHAT I CANNOT YET DO. 4 September. B. Nassif. ⚠ Three gaps, with what each would cost, the exercise, and the person.**',
  '⚠ **I can count a delivery and write the shortage; I cannot say the shortage to the driver\'s face while he waits.** | ⚠ **four short deliveries this year signed for and argued about afterwards, and we lost two of the four** | ⚠ **say one number out loud to one driver a week, before signing** | ⚠ **Fadi, who is at the gate anyway and will tell me if I said it**',
  'I can read a quotation; I cannot see what is missing from one without the checklist in front of me. | ⚠ **nothing yet, and the checklist is in my pocket** | cover the checklist and write what is missing, then check, once a week | nobody',
  '⚠ **I have never had to write to anybody above Mr Ayoub.** | ⚠ **unknown** | ⚠ **draft one letter I do not send, each month** | ⚠ **Nour, who will say whether it would have been ignored**',
  '⚠ **Three gaps and not one is a word.** ⚠ **The first is a thing I cannot do with a man standing in front of me**, and it has cost us about four hundred thousand this year.',
  '⚠ **The second cost is honestly *nothing yet*** — the checklist works — **and I have written it down so that I notice if the checklist is ever not in my pocket.**',
]));
out.push(note('⚠ **The sample\'s second row is a kind of entry the model does not have and is worth promoting**: ⚠ **a gap whose cost is *nothing yet*, because a workaround is holding.** ⚠ *I have written it down so that I notice if the checklist is ever not in my pocket.* **A gap covered by a crutch is still a gap**, and naming the crutch is the honest version.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every gap a situation, not a word', '✓ all three'],
  ['A cost with a figure or a period', '✓ four deliveries, about 400,000'],
  ['An exercise small enough for a bad week', '✓ one number, one letter, once a week'],
  ['A person named, or *nobody* where nobody helps', '✓ both'],
  ['*Unknown* where the cost is unknown', '✓ the third'],
  ['No *unfortunately* and no *very*', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The hardest gap only, and the class says nothing about it at all.** ⚠ **Then, and only then, it says whether the exercise is small enough.** **The silence is part of the task** — and a class that comments on the gap will produce flatter gaps next time.'));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  'The thing I cannot do is disagree with somebody senior in writing, and I have known it for about three years without ever putting it in a sentence.',
  '⚠ **I can write a letter that refuses a customer. I did it in April, about four hundred thousand, and I did not lose a minute\'s sleep over it.**',
  '⚠ **I cannot write a paragraph to Mr Attar that says his question rests on something that is not true.** I have twice known that it did. ⚠ **Both times I answered the question as asked and let the wrong thing stand**, and once it cost us a fortnight.',
  '⚠ **What it will cost if it does not change is the market note.** It is an opinion with my name on it, and in about four months there will be a month when defending it is harder than not writing it.',
  '⚠ **The exercise is one paragraph a month that begins *I may be wrong about this*, and Mr Ayoub reads them and tells me which he would have ignored.**',
  '⚠ **How I shall know in six months: whether there are five such paragraphs, and whether the note is at nine.** ⚠ **Both are countable, which is the only reason I believe any of this.**'],
));
out.push(note('⚠ **The sample does the one thing the task asks and most learners avoid: it says how it will know.** ⚠ *Whether there are five such paragraphs, and whether the note is at nine. Both are countable.* **A gap page without that line is a confession; with it, it is a control** — and it is 24.3 doing the work for 24.4.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Mr Ayoub, who has been named"   ✓ _a situation rather than a verdict?_ — "a situation, with two occasions and a cost"   ? _how will they know in six months?_ — "five paragraphs and a note at nine; both countable"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the gap is about rank, distance or speed rather than words in all three texts, ⚠ **and in none of them would a vocabulary list help at all.** **Say that aloud at the end of the cycle**: twenty-four units of vocabulary, **and the thing standing in the way of every one of these people is a situation.**'));
out.push(stage('HW', 'Homework – sample (≈64 words)'));
out.push(sample(null, ['⚠ **I said my hardest gap out loud to Mr Ayoub.** He said he had known it for two years and had been waiting to be asked. ⚠ **He also said that the first paragraph would be worse than I expected and that he would tell me so plainly**, which is what I had hoped for and had not been able to ask for.']));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  The next twelve months'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The third question is the one that teaches: **what is the difference?** — and the class will arrive at *who else knows* without being told.'));
out.push(p('**b**  ⚠ **Arranged: the Tannous consignments to next May.** ⚠ **Intended: the monthly market note.** ⚠ **Hoped for: the examination in the spring** — until there is a date and a fee paid.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Somebody else has it in writing and would be surprised if it did not happen.**  2 ⚠ **Because a hope in the arranged column is a failure waiting to be recorded**, and a hope in its own column is *a thing with one visible step in front of it.*'));
out.push(note('⚠ The test for *arranged* is stricter than any class expects: ⚠ **a decision in your own head is never arranged, however firm** — *my own intention to visit Beirut is not arranged, because nobody there knows about it.* **The question is not how sure you are; it is who else would be surprised.**'));
out.push(p('⚠ And the rule for hopes is one line: ⚠ **one step and one date, and nothing else.** ⚠ **A hope with four steps is a project somebody has not started; a hope with none is a sentence in a drawer.**'));
out.push(p('**Language box – Practise (samples):**  ⚠ **ARRANGED** — *the Thursday handover, because four people come to it.*  ⚠ **INTENDED** — *the word book, page N, nobody else required.*  ⚠ **HOPED FOR** — *the night class in the spring; one step: find out whether it runs in March, by 20 September.*  ⚠ **HOPED FOR** — *a week in Aleppo with my brother; one step: ask him which week, this Friday.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to take the examination in the spring. The steps are: find out the dates, save the fee, do two practice papers, and ask for the morning off.'],
  ['B', '⚠ Which of those can you do this week?'],
  ['A', 'Find out the dates.'],
  ['B', '⚠ **Then that is the step, and the other three are not on the page.**'],
  ['A', 'They will have to be done.'],
  ['B', '⚠ **They will, and none of them can be done until you know the date.** ⚠ **A hope with four steps is a project somebody has not started**, and the first step is the only one that exists.'],
]));
out.push(note('⚠ **Role card 2 is the sharpest version of the one-step rule**: ⚠ **three of the four steps cannot be done until the first is**, so listing them makes the page look busy and the hope stay still. **Ask which step can be done this week and strike out the rest.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three grades with their items and the one step behind each hope. **Typical errors:** a decision in somebody\'s head graded *arranged* · a hope with no date · and the content error, which is four steps. ⚠ **One step and one date.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'Grade', 'Who else is involved', 'The one step, and its date'], [
  ['the Tannous consignments to 30 April', '⚠ **arranged**', '⚠ **she has the terms and five date lists**', '—'],
  ['two men for the night marking from 1 October', '**arranged**', '⚠ **both have written offers; one has given notice**', '—'],
  ['the market note, nine times by January', '**intended**', 'nobody', 'count on 15 November'],
  ['the examination in the spring', '⚠ **hoped for**', 'nobody yet', '⚠ **find the date and the fee, by 15 September**'],
  ['a second export customer', '**hoped for**', 'Ms Tannous', '⚠ **ask her in the January call whether she will give our name to anybody**'],
  ['a visit to Beirut', '⚠ **hoped for**', '⚠ **nobody — and that is the point**', '⚠ **say so to Ms Tannous. One sentence, in a call I shall make anyway.**'],
], [1.9, 0.9, 1.6, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The consignments to April are arranged, because Ms Tannous has the terms and five date lists. The market note is intended, nine times by January. The visit to Beirut is hoped for, and the one step is to say so to her in the January call — which costs one sentence."', '⚠ **Then count the items graded *arranged* where nobody else has anything in writing.** ⚠ **It is usually two or three in a class**, and they are always the writer\'s own firmest decisions.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **A plan that is all *arranged* was written by somebody who has not asked who else is involved; a plan that is all *hoped for* has not been started.**  2 ⚠ **The visit to Beirut** — *nobody there knows I want to come* — ⚠ **and the step is one sentence in a telephone call she will make anyway.**  3 ⚠ **A count and a place**: *nine by January, on each note; twenty by January, in the gate book; one a month, read by Mr Ayoub.*'));
out.push(note('⚠ **The Beirut line is the best thing on the page and it should be read aloud twice**: ⚠ **a hope that has never left your head has never had its one step taken** — and the step is usually a sentence in a conversation you were going to have anyway. ⚠ **Eight months, and it has cost nothing.**'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**THE NEXT TWELVE MONTHS, GRADED. 5 September. L. Barakat. ⚠ Nine things. Two arranged, four intended, three hoped for.**',
  '⚠ **ARRANGED** | confirmed in post from 1 July | ⚠ **the letter and the payroll**',
  '**ARRANGED** | ⚠ **the Thursday handover, which I now chair once a month** | ⚠ **four people come to it and would ask where I was**',
  '**INTENDED** | one question a week of somebody who has been here longer, twenty by January | ⚠ **written on the inside cover of my notebook**',
  '**INTENDED** | the word book, a page a week | the page number is on the page',
  '**INTENDED** | ⚠ **the first two minutes of every call unwritten, for a month** | ⚠ **Nour listens and tells me what I could not say**',
  '**INTENDED** | read the bench page aloud before each night run, twelve by January | ⚠ **a tally in the press room, not in my notebook**',
  '**HOPED FOR** | ⚠ **the examination in the spring** | ⚠ **one step: ask Nour whether the company would pay the fee, this week**',
  '**HOPED FOR** | ⚠ **to write one market note myself** | ⚠ **one step: ask for the October one. Nobody knows I want to.**',
  '⚠ **Two arranged, four intended, three hoped for.** ⚠ **And the last line is the one I nearly did not write**: nobody knows I want to write a market note, **and the step is one sentence.**',
]));
out.push(note('⚠ **The sample\'s last line answers the model\'s last line from the other side of the desk** — ⚠ **Lina wants to write the market note and has never said so, exactly as Nour wants to go to Beirut and has never said so.** **Two people, one building, two unsaid sentences, both free.** **Read both aloud together if the class has time for one thing only.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the heading', '✓ 2 · 4 · 3'],
  ['A holder for every *arranged* item', '✓ the payroll; the four people'],
  ['A count and a place for every *intended* item', '✓ all four'],
  ['One step and one date for every hope', '⚠ **✗ — the second hope has a step and no date**'],
  ['What the proportions mean', '⚠ **✗ — the counts are given but not interpreted**'],
  ['The line you nearly did not write', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The line nearly not written only. ⚠ **Then ask what the one step costs** — ⚠ **and in almost every case the answer is one sentence to one person.** **Let the silence sit**, and then move to 24.6, which is where the unsaid sentence is written down for the writer\'s own attention in four months.'));
out.push(stage('7', 'Write freely – sample (176 words)'));
out.push(sample(null, [
  '**THE NEXT TWELVE MONTHS, GRADED. 31 August. N. Mansour. ⚠ Eleven things. Three arranged, four intended, four hoped for.**',
  '⚠ **ARRANGED.** The Tannous consignments to 30 April — ⚠ **she has the agreed terms of 28 April and five date lists.** The night marking, two men from 1 October — ⚠ **both have written offers and one has given notice to a plastics works.** Lina confirmed in post — her letter, and the payroll.',
  '**INTENDED.** ⚠ **The market note, nine times by January, counted on each note.** A first-off on every new job, tallied in the front of the file. ⚠ **The gate-sheet review, twenty times by January, written in the gate book where the sheets are.** One paragraph a month beginning *I may be wrong about this*, read by Mr Ayoub.',
  '**HOPED FOR.** ⚠ **The examination in the spring — one step: find the date and the fee, by 15 September.** A second export customer — one step: ask Ms Tannous in the January call. The heavy brown question — one step: two calls, Monday. ⚠ **A visit to Beirut — one step: say so to Ms Tannous. Nobody there knows I want to come.**',
  '⚠ **A plan that is all arranged was written by somebody who has not asked who else is involved. A plan that is all hoped for has not been started.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Mr Ayoub, reading a plan for his own company"   ✓ _a holder for every arranged item?_ — "three of three"   ? _the hope never said out loud?_ — "Beirut — and the step is one sentence in a call she is making anyway"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually there is a hope whose one step is a single sentence to one person in all three texts, ⚠ **and in all three it has been in the writer\'s head for more than six months.** **That is the most reliable finding in the unit** and it is the one to carry into 24.6: *the letter should name it.*'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **I took the step on 2 September: I asked Nour whether I could write the October market note.** She said yes and asked why I had not asked in June. ⚠ **I had no answer, and the honest one is that I had never said it out loud to anybody, including myself, until I wrote it in a table.**']));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  Closing well, and the letter'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect answers about confidence rather than about English, and take them: **what changed it is nearly always a document somebody needed.**'));
out.push(p('**b**  ⚠ **What you were afraid of in August**, and ⚠ **one thing you want to be told in four months.** **Congratulations and a list of what you have learned belong in neither.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because in four months you will know what you learned and will have forgotten what it felt like not to know it.**  2 ⚠ ***Count the notes before you read the rest of this letter*** — **an instruction and not a wish, so that the letter does something in the first ten seconds.**'));
out.push(note('⚠ The reason the instruction goes first is practical and slightly bleak: ⚠ **by the time anybody reaches the end of a letter from themselves they are already arguing with it.** **Put the count at the top, with a blank**, and the audit happens before the arguing starts.'));
out.push(p('⚠ And the rule about hedges is absolute: ⚠ **a hedged fear cannot be checked against what happened**, which is the only thing the letter is for. **No *perhaps*, no *a little*, no *I may be being pessimistic*.**'));
out.push(p('**Language box – Practise (samples, first lines):**  ⚠ *Count the market notes in the file and write the number here: ______*  ⚠ *Count how many calls you began without writing them first.*  ⚠ *Look in the press room for the tally and write what it says: ______*  ⚠ *Before you read this, look at the inside cover of this notebook and count.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', '*I am a little worried that perhaps I may not keep up the writing, although I may be being pessimistic.*'],
  ['B', '⚠ Four hedges. Read it without them.'],
  ['A', '*I am worried that I will not keep up the writing.*'],
  ['B', '⚠ And the reason?'],
  ['A', '…Because nobody asks me for any of it.'],
  ['B', '⚠ **Then that is the sentence**: *I shall stop writing because nobody asks me for any of it.* ⚠ **Now it can be checked in January.**'],
  ['A', 'It sounds much worse.'],
  ['B', '⚠ **It sounds exactly as bad as it is**, which is what you want from yourself in January.'],
]));
out.push(note('⚠ **Role card 2 demonstrates that cutting the hedges produces the diagnosis.** ⚠ *I am worried* **became** *nobody asks me for any of it* **in two exchanges** — and that sentence is 24.7 arriving a cycle early, **which is why 24.6 must be taught before 24.7 and not after it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the first line and the fear in one sentence, and count the hedges cut. **Typical errors:** *I hope I will have improved* as a first line · and the content error, which is a letter of congratulation. ⚠ **A letter of congratulation read in January changes nothing and will be read once.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'What I have written'], [
  ['⚠ **The first line — an instruction**', '⚠ **Count the market notes in the file and write the number here: ______**'],
  ['⚠ **What I am afraid of, and the reason**', '⚠ **That the note will have stopped, because I cannot yet write a paragraph that disagrees with Mr Attar**'],
  ['My hardest gap, with its exercise and person', 'quoted from 24.4, with *one paragraph a month* and Mr Ayoub'],
  ['My count, to be checked when I open this', 'nine by January; four when this was written'],
  ['The date on the outside', '31 August'],
], [2.4, 3.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My first line is: count the market notes in the file and write the number here. I cut four hedges from the fear paragraph — *a little*, *perhaps*, *may* and *although I may be being pessimistic*."', '⚠ **Nothing else is reported.** ⚠ **The first line is the only part of a letter to yourself that is safe to say in a room**, and the class should be told so before the stage begins.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Count the market notes and write the number in a blank** — first, ⚠ **because by the end of a letter from yourself you are already arguing with it.**  2 ⚠ **That it was because of the export work**: *I shall tell myself it was because of the export work. It will not be because of the export work.*  3 ⚠ **That she has never said out loud that she wants to go to Beirut**, and the step is one sentence in a call she is making anyway — ⚠ **and it has cost nothing for eight months.**'));
out.push(note('⚠ **The refused excuse is the technique most worth stealing from this cycle.** ⚠ **You already know which excuse you will use** — being busy, the export work, the children, the season — ⚠ **and writing it down in advance is the only way to take it away from yourself.** **It cannot be done in January; it has to be done now.**'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**TO MYSELF, AT B2 UNIT 1. Written 5 September. ⚠ Sealed. To be opened at B2 Unit 1.**',
  '⚠ **Before you read the rest of this, go to the press room, count the tally marks on the bench page, and write the number here: ______**',
  '⚠ **What I am afraid of.** That I will have stopped reading the page aloud before the night runs. ⚠ **The reason is not time: it is that nobody has ever asked me whether I do it**, and the two times I did it in April were for myself.',
  '⚠ **If the number above is under six, I shall tell myself it was because the two new men took over the marking in October.** ⚠ **It will not be because of the two new men. It will be because nobody is waiting for the tally.**',
  '⚠ **My hardest gap, as I wrote it in September.** *I can ask a question of somebody I know; I cannot ask one of somebody who is busy.* The exercise was one question a week and the person was whoever I asked.',
  '**My count.** Twelve by January. ⚠ **Two when this was written.**',
  '⚠ **One more thing, not about English.** I have not told my mother that I was confirmed in post. ⚠ **It has been nine weeks.**',
]));
out.push(note('⚠ **The sample\'s refused excuse is better than the model\'s because it names the real cause in the same breath**: ⚠ *It will not be because of the two new men. It will be because nobody is waiting for the tally.* ⚠ **The writer has diagnosed 24.7 inside her own letter** — and the last line, about her mother, is exactly the kind of thing the instruction *one thing not about English* exists for.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An instruction in the first line, with a blank', '✓ the tally in the press room'],
  ['The fear, with no hedges', '✓'],
  ['The excuse refused in advance', '✓ the two new men'],
  ['The gap quoted in the words you used', '✓'],
  ['The count, with its current state', '✓ two of twelve'],
  ['One thing that is not about English', '✓ her mother, nine weeks'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Nobody reads their letter aloud, and the teacher should say so twice.** ⚠ **First lines only.** **The class says whether each is an instruction** — and a wish (*I hope I will have kept it up*) is corrected in four words: *what should I count?*'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  '**TO MYSELF, AT B2 UNIT 1. Written 31 August. ⚠ Sealed.**',
  '⚠ **Before you read the rest of this, count the market notes in the file and write the number here: ______**',
  '⚠ **What I am afraid of.** That the market note will have stopped. ⚠ **The reason is not time: it is that I cannot yet write a paragraph that disagrees with Mr Attar, and the note is an opinion with my name on it.** ⚠ **If I cannot defend it upward, I shall stop writing it, and I shall tell myself it was because of the export work. It will not be because of the export work.**',
  '⚠ **My hardest gap, as I wrote it in August.** *I can write a letter that disagrees with a customer; I cannot write one that disagrees with an auditor.* The exercise was one paragraph a month beginning *I may be wrong about this*; the person was Mr Ayoub. ⚠ **Count those too. There should be four or five by now.**',
  '**My count.** Nine by the end of January. ⚠ **Four when this was written.**',
  '⚠ **One more thing, not about English.** In August I had never said out loud that I want to go to Beirut, ⚠ **and the only step was one sentence to Ms Tannous in a call I was going to make anyway.**',
  '**N. Mansour, 31 August.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('⚠ **No swapping.** ★ _the hedge I cut_ — "*probably*, twice"   ✓ _the excuse I refused_ — "the export work"   ? _the sentence I have not said for_ — "eight months"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ **Nothing is shared.** ⚠ **The teacher counts the sealed and dated letters, writes the number on the outer envelope, and keeps it.** **The number on the envelope is the only record of this stage** — and it is read out at B2 Unit 1 before the letters are given back.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **I said it on 2 September, in the call about the September dates: that I should like to come to Beirut and see how her customer packs.** She said come in February with the consignment. ⚠ **Eight months of not saying it, and the saying took eleven seconds.** ⚠ **Dated and kept, to go beside the letter in January.**']));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: what the certificate says, and the first fortnight'));
out.push(stage('1', 'Get ready – Unit 24 quiz'));
out.push(p('**1** ⚠ **For choosing between two forms that are both correct** — and the test for the perfect is ⚠ **does the reader have to do anything?**  **2** ⚠ **Because *yes* tells you nothing about Friday**; the useful one is ⚠ ***will you have finished by Friday?*** — the one with the deadline in it.  **3** ⚠ **Because a frequency cannot be counted at all**: it is invisible until somebody notices it has stopped, and by then it stopped four months ago.  **4** ⚠ **A situation, with a cost, an exercise and a person** — not a verdict about yourself.  **5** ⚠ ***Arranged* requires somebody else to have it in writing and to be surprised if it did not happen**; ⚠ **every hope carries one step and one date, and nothing else.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **He has written nothing in two years** — Mr Haddad\'s cousin in the second store.  2 ⚠ **A day**: *it says what somebody could do on one morning in March*, and ⚠ **an employer reads it as a statement about a person.**'));
out.push(note('⚠ The finding is empirical and should be presented as such: ⚠ **eleven people, three still writing, and not the three with the best marks.** ⚠ **What the three share is a reader who would notice within a week** — the price labels, the gate sheet, the carton counts. **Marks predict nothing; a waiting reader predicts everything.**'));
out.push(p('⚠ And the clause that makes it usable is the one about the reader\'s feelings: ⚠ **the reader does not have to want it. They have to notice.** *The gate sheet is read by somebody who would complain if it were blank, which is all that is required* — ⚠ **a reader who would be pleased is not a reader who would notice.**'));
out.push(p('**Language box – Practise (sample):**  _"My document is the Monday list of what is short. My reader is the storeman, who builds his week on it. My date is the 9th. If it does not come, he telephones me by about ten, which has happened twice."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'What did you write in the first fortnight after your last course?'],
  ['A', 'Nothing, I think.'],
  ['B', '⚠ And who was waiting for anything?'],
  ['A', 'Nobody. It was for myself.'],
  ['B', '⚠ **Then the two answers are the same answer.** What document could have had a reader?'],
  ['A', '…The Friday short list. I make it in my head and tell him.'],
  ['B', '⚠ **Then write it, give it to him, and ask him to telephone you if it does not come.**'],
  ['A', 'He would not mind either way.'],
  ['B', '⚠ **He does not have to mind. He has to notice.**'],
]));
out.push(note('⚠ **Pair 2 produces the answer in two moves every time**: ⚠ **nothing was written, and nobody was waiting** — *the two answers are the same answer.* ⚠ **And the repair is nearly always a document that already exists in somebody\'s head** and is delivered by speech. **Writing it down and giving it to the person who uses it is the whole intervention.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write how many survived and what they had in common, and then their own document, reader and date. **Typical errors:** choosing a reader who would be pleased rather than one who would notice · and the content error, which is a date more than a fortnight away. ⚠ **It is the first fortnight that decides it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The document', 'The reader', 'The date', 'What happens if it does not come'], [
  ['⚠ **the Monday short list**', '⚠ **the storeman**', '9 Sept', '⚠ **he telephones by about ten; it has happened twice**'],
  ['the market note', 'Mr Ayoub and Mr Attar', '26 Sept', '⚠ **Mr Attar asks for it, because he asked in March who wrote it**'],
  ['the tally on the bench page', '⚠ **the two new night men from 1 October**', '⚠ **1 Oct**', '⚠ **nothing — and that is why it stopped in April.** A second reader is needed'],
], [1.7, 1.5, 0.9, 2.5]));
out.push(note('⚠ **The third row is the honest one and the most useful**: ⚠ **a document whose absence nobody would notice is not yet safe**, and saying so is the beginning of the repair. **The class should be asked, of each of their own arrangements, *who telephones me if it does not come?*** — and where the answer is nobody, to find a second reader.'));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"My document is the Monday list of what is short, my reader is the storeman, and the date is the 9th. If it does not come he telephones me by about ten, and that has already happened twice."',
  '⚠ **The unit\'s mediation, named as the twelfth unit of this book:** a certificate records what somebody could do on one morning, and is read by everybody afterwards as a statement about the person — ⚠ **while what actually decides whether the English survives is whether, in the fortnight after the last lesson, there is a document that somebody else is waiting for and would notice the absence of** — ⚠ **which is why the best marks in a class routinely write nothing again and the middling marks whose gate sheet is read every day keep everything they learned.**',
  '⚠ **And the half that makes it actionable in one lesson**: ⚠ **the reader does not have to want it; they have to notice.** **One document, one reader, one date inside a fortnight, on a list the teacher keeps** — ⚠ **and the teacher asks in October.** *Three of eleven survived without that; the question is how many of twelve survive with it.*',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 4)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7'], [['Answer', 'A', 'B', 'C', 'A', 'A', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ **Item 3 is the *doesn\'t say* and it is the item the paper is built around.** The text says the highest mark belonged to ⚠ **somebody in the second store who has written nothing since** — ⚠ **and says nothing at all about whether that person has left.** **A learner who marks it *wrong* has inferred from *is in the second store* that he is still there, which is reasonable and is not what Part 4 asks.**'));
out.push(note('⚠ Item 6 is **wrong** and not *doesn\'t say*: the text states that ⚠ **the last session will be spent arranging one document, one reader and one date**, which contradicts ending with a test. ⚠ **Part 4 rewards reading for what the text rules out as well as for what it states** — and the two commonest errors in the paper are both about the difference between *not said* and *ruled out*.'));
out.push(stage('6', 'Write with help – sample (77 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Fadi — ⚠ **I am going to write a one-page note each month on the board and carton market, and I should like you to be the person who reads it.** It is so that anybody here can see what is known and what is not. ⚠ **I shall send you the first on 26 September.** ⚠ **All I want from you is one line back: one thing in it you would have asked about.** ⚠ **And I shall send it whether or not you have time to answer**, because the sending is the part I am trying to keep going.',
]));
out.push(note('⚠ **That is 77 words and the last clause is the one that protects the arrangement**: ⚠ *I shall send it whether or not you have time to answer, because the sending is the part I am trying to keep going.* **A document that waits for permission is not sent** — and a reader who has not replied is still a reader who would notice.'));
out.push(note('⚠ And the request is small enough to be done: ⚠ *one line back: one thing in it you would have asked about.* **Two minutes of the reader\'s time.** ⚠ **A learner who asks for comments or for feedback has asked for something nobody at work has two minutes for**, and the arrangement will fail in the second month.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the document is and what it is for', '✓'],
  ['The date', '✓ 26 September'],
  ['⚠ One small thing for the reader to do', '✓ one line back'],
  ['⚠ That you will send it anyway', '✓ and why'],
  ['60 to 80 words — count them', '✓ 77'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (174 words)'));
out.push(sample(null, [
  '**THE NEXT TWELVE MONTHS. 31 August. N. Mansour. ⚠ Eleven things. Three arranged, four intended, four hoped for.**',
  '⚠ **ARRANGED.** The Tannous consignments to 30 April — she has the terms and five date lists. Two men for the night marking from 1 October — both have written offers. Lina confirmed in post.',
  '**INTENDED.** ⚠ **The market note, nine times by the end of January, counted at the bottom of each note; I count on 15 November.** The first-off tally, in the front of the file. The gate-sheet review, twenty by January, in the gate book. One paragraph a month beginning *I may be wrong about this*.',
  '**HOPED FOR.** The examination — one step: find the date and the fee, by 15 September. A second export customer — one step: ask in the January call. ⚠ **A visit to Beirut — one step: say so. Nobody there knows I want to come.**',
  '⚠ **AND THE FORTNIGHT.** ⚠ **Document: the market note. Reader: Mr Ayoub and Mr Attar. Date: 26 September.** ⚠ **If it does not come, Mr Attar asks for it — he asked in March who wrote the carton page, and he is the only person here who asks who wrote things.**',
]));
out.push(note('⚠ **The last block is what the free writing is for and the class should be held to it**: ⚠ **document, reader, date, and what happens if it does not come.** ⚠ **The reason given for the reader is the right kind** — *he is the only person here who asks who wrote things* — **because it is evidence that he would notice, and not a hope that he would care.**'));
out.push(stage('HW', 'Homework – sample (≈61 words)'));
out.push(sample(null, ['⚠ **I wrote to Fadi on 6 September asking him to be the reader of the monthly note, with the first on the 26th and one line back as the only request.** He answered in two words. ⚠ **The date, the reader and the document are now on the plan with the date I asked**, and the teacher has the same three on her list.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 24 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'c', 'b', 'c', 'b', 'b', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 3 is the unit\'s own test in one item: ⚠ **only *will you have finished by Friday?* can be planned against.** **A learner who chooses a has chosen the question that gets a *yes***, which is the commonest real error and not a careless one.'));
out.push(note('⚠ Question 8 is the mediation and it is the last language item in the book: ⚠ **what decides whether the English survives is whether anybody is waiting for a document.** ⚠ **Not the certificate and not the marks.** **If a class gets only one item right in this paper, this is the one worth having.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Took the A2 course', 'Still write', 'What the three have in common', 'The highest mark', 'The certificate is a statement about'], [[
  '**eleven**', '⚠ **three**', '⚠ **somebody is waiting for a document from each of them and would notice within a week**', '⚠ **Mr Haddad\'s cousin in the second store, who has written nothing in two years**', '⚠ **a day — one morning in March**',
]], [1.2, 0.8, 2.2, 1.9, 1.5]));
out.push(note('⚠ Gap 3 needs ⚠ **both halves: somebody waiting, and would notice within a week.** *Somebody needs it* earns the mark; *they work hard* does not. ⚠ Gap 5 needs **a day** and not *their English* — **and a learner who writes *what they could do* is halfway and should be given the mark**, because the distinction being tested is person against day.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (70 words)', [
  '⚠ **ARRANGED.** The Thursday handover, which I chair once a month. ⚠ **Four people come to it and would ask where I was.**',
  '⚠ **INTENDED.** One question a week of somebody who has been here longer than me — ⚠ **twenty by January, written on the inside cover of my notebook.**',
  '⚠ **HOPED FOR.** To write one market note myself. ⚠ **One step: ask for the October one, this week. Nobody knows I want to.**',
]));
out.push(box('Marking the Unit 24 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 3 needs both halves, gap 5 needs *a day*.'],
    ['**C Writing**', '7', '⚠ **an arranged item with a holder who would be surprised** (2) · ⚠ **an intended item with a count and a place** (3) · ⚠ **a hope with one step and one date** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for the arranged item need the holder.** ⚠ **An item graded *arranged* on the strength of the writer\'s own decision scores 0 of the 2**, however firm — *a decision in your head is never arranged.*',
  '⚠ **The three marks for the intended item need both the count and the place.** ⚠ *Twenty by January* earns two; ⚠ ***twenty by January, written on the inside cover of my notebook*** earns all three. **The place is what makes the count survive**, and it is the finding of 24.3.',
  '⚠ **The two marks for the hope need exactly one step and a date.** ⚠ **Four steps scores 1 of the 2** — *a hope with four steps is a project somebody has not started* — **and no date scores 0.**',
  '⚠ **Deduct for a frequency anywhere.** ⚠ ***Every month*, *regularly*, *as often as I can*** — **all three appear in about a third of a class\'s first attempts**, and all three are what 24.3 exists to remove.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 24**'));
out.push(p('**1 The gap will come out as a verdict.** *My English is not very good. I need to improve. I am weak at writing.* ⚠ **Convert the first one in public, gently, and the rest will come out as situations** — and say the rule once: ⚠ **a gap with a situation in it can be practised; a gap that is a verdict about yourself cannot be practised at all.** **Then watch the exercises**, which will be whole-sized: *I will do all my calls unwritten*. ⚠ **Halve every one of them on the spot**, because an exercise that cannot survive a bad week ends on the first bad morning.'));
out.push(p('**2 The letter will be a list of achievements.** It is the kindest and most useless thing anybody writes to themselves. ⚠ **The sentence that corrects it is in the dialogue and should be said aloud: in four months you will know what you learned, and you will have forgotten what it felt like not to know it.** ⚠ **Then enforce two things only** — **an instruction with a blank in the first line, and no hedges in the fear paragraph.** **Do not read anybody\'s letter**, do not ask what is in it, and count the sealed envelopes in front of the class so that the number exists.'));
out.push(p('**3 Letting 24.7 be the last discussion instead of the last action.** ⚠ **This is the only cycle in twenty-four units that must produce something before the class leaves the room**: ⚠ **one document, one reader, one date inside a fortnight, written on a list the teacher keeps — and the teacher asks in October.** ⚠ **Three of eleven survived the A2 course without it**, and the three were the ones whose work already had a reader. **If a cycle must be cut, cut 24.2 and keep 24.7**: the eight questions can be taught in fifteen minutes inside 24.1, ⚠ **and nothing else in either book changes what happens in the fortnight after the last lesson.**'));
out.push(sp());
out.push(box('End of the Answer Key — Proactive Business English B1', [
  '**Twenty-four units, a hundred and sixty-eight cycles, and twenty-four unit checks, with a full sample answer for every open task.** ⚠ **Every page band in this key was measured and not projected**, and the two tests were measured twice.',
  '⚠ **The three faults that recur across all twenty-four keys**, and which are worth one page of a teacher\'s preparation at any point in the course:',
  '⚠ **1 · The adjective instead of the figure.** *Unreliable* for *eleven times a day, and never on the first run*. **It is the first thing to correct in Unit 1 and it comes back in Unit 22 and in the last check of Unit 24.**',
  '⚠ **2 · The whole-sized remedy.** A page with a purpose clause on all thirteen steps; four marked steps; four non-negotiables; an exercise that is the whole task. ⚠ **Every one of those is an attempt at thoroughness that produces nothing**, and the correction is always arithmetic: *ask for extra attention four times and you have asked for it nought times.*',
  '⚠ **3 · The fact that is held by somebody nobody has asked.** It is the mediation of six of the twelve cycle-sevens in Book 2 alone. ⚠ **If a teacher has time for one habit, it is this one**: at the end of any unit, ask the class who in their workplace knows the answer and has never been asked — **and then ask them to go and ask.**',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 24 · Answer Key');
