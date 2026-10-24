// Proactive Business English B2 · Syria Edition · Book 1 · Unit 4 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 4  Risk, Exposure and the Thing You Cannot Model'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit teaches two opposite skills and the second is the one that matters.** **Cycles 4.1 to 4.3 and 4.5 teach a learner to put numbers on things: conditions, ranges, numbered assumptions, a worked stress case.** ⚠ **Cycles 4.4 and 4.6 teach them to refuse** — **to decline a figure in writing, and to hand a risk to its owner without an opinion.** ⚠ **A class that leaves with only the first half will invent numbers**, which is the exact harm 4.4 exists to prevent, and the unit says so three times.',
  '⚠ **The sentence to put on the board for the whole unit is Mr Ayoub\'s:** ⚠ **_a risk you cannot price is not a smaller risk; it is a risk in a different language._** **Learners arrive believing the opposite** — that an unquantified risk is a soft one — **and every workplace they have been in has taught them that, because the unquantified risks are the ones with no budget line.',
  '⚠ **4.7 is the unit\'s payoff and it is not a review.** **Abu Yasser names a third thing about August that is in no document, that he has absorbed for five years, and that does not scale** — ⚠ **and his last line is the one the class should leave with: _it has never once stopped the press. I have made sure of that for five years, and now I am the reason nobody knows._** **Competence hides exposure, and the more reliable the person the more completely it is hidden.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2, 120 to 140 words, 20 marks** — **the even-numbered units take Part 2 and the odd ones Part 1.**',
  '⚠ **The exam practice is Reading Part 4: multiple-choice cloze, fifteen questions, the largest part of the paper.** ⚠ **It tests collocation and fixed expression**, which is why every unit of this book declares eight collocations beside its thirty-two items. **Three of the four options in a Part 4 question are usually grammatical, so grammar will not decide it.**',
], C.grey, C.navy));

// ===================== 4.1 =====================
out.push(h2('4.1  Likelihood at range'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the cycle: what would have to stay the same?** **Most learners can name two conditions at once and the third after a pause**, and the third is usually the one that matters.'));
out.push(p('**b**  The **second** can be wrong without the speaker being wrong. ⚠ **With the condition in, you were right and the condition changed; without it, you were wrong.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **His volume holds · the border is open · the press runs three hours a night, which depends on the generator.**  2 ⚠ **The number is what you plan on; the range is what you survive** — **and the paper has to work at the lower bound.**'));
out.push(p('⚠ **Mr Attar\'s three phrases should be taught as a hierarchy and not as synonyms.** ⚠ **_On current terms_ is the strong one and requires you to name the conditions.** ⚠ **_All else equal_ is the weak one, allowed once a paper, and only when the conditions cannot be listed** — *a writer who uses it three times is telling you he has not thought about what else there is.* ⚠ **_On the evidence to date_ is the honest one and almost nobody writes it**, because it admits the file has a date.'));
out.push(p('**Language box – Practise (sample, two of four):**  _**1** *On current terms — the two women stay on the Friday rota, the street closes at one, and Lina stays at the counter — the Friday morning takes about a hundred and twenty. The range I have planned to survive is sixty to a hundred and forty, and at sixty it is still worth opening because the staff are paid either way.*  **2** *On the evidence to date — eleven Saturdays of daily sheets — the trade counter is about a third of a Saturday morning. The evidence is eleven weeks old and there has been no holiday in it.*_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Eleven hundred a month, in a range of eight hundred to twelve hundred.'],
  ['B', 'Does the plan work at eight hundred?'],
  ['A', 'It should do.'],
  ['B', 'Do the arithmetic.'],
  ['A', '…Eight hundred at his price is about two thirds of the revenue. The mill order is fixed for the year. The second press is on nights either way.'],
  ['B', 'So?'],
  ['A', 'So at eight hundred we have paid for capacity we are not using, and the margin is about four points thinner. It still pays.'],
  ['B', 'And at six hundred?'],
  ['A', 'Six hundred is outside the range.'],
  ['B', 'Then say what the range is for, in the note, because at the moment the reader has to guess whether six hundred is unlikely or unsurvivable.'],
]));
out.push(p('⚠ **The last line of that sample is the finding to teach and the unit only implies it.** ⚠ **A range tells a reader what you have planned for; it does not tell him what lies outside it.** **Say which — *below eight hundred is paragraph 15* — or he will assume the bottom of the range is the bottom of the world.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three conditions, the number and the range, and whether the plan works at the lower bound. **Typical errors:** a bare *probably* · conditions added after the number instead of before it · ⚠ **and the content fault, which is a plan that does not work at its own lower bound and a writer who has not noticed.** **In a working class this is about half the room, and it is a cheap discovery.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The forecast', 'The three conditions', 'Number, and range', 'Does it work at the lower bound?'], [
  ['the first contract year', '⚠ **his volume holds · the border open · the press on nights**', '**1,100; 800–1,200**', '⚠ **yes — four points thinner and still above the Tannous volume**'],
  ['the Friday morning', 'the rota holds · the street closes at one · Lina stays', '**120; 60–140**', '**yes — the staff are paid either way**'],
  ['the plating price to June', 'he does not move again · the gauge stays at 0.5', '**12% up; 12–18%**', '⚠ **no — at 18% the export list is wrong by more than our margin**'],
  ['the offcut rate', 'the job mix holds', '**6.5%; 6–9%**', 'yes, and at 9% the two refused jobs were right'],
], [1.4, 2, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I forecast the plating price holds to June, on condition that he does not move again and the gauge stays at 0.5. The number is twelve per cent up and the range is twelve to eighteen. At eighteen it does not work: the export list is wrong by more than our margin, and I would have to reprice inside a fortnight."', '⚠ **Count the plans that do not work at their own lower bound, and then ask each of those speakers what they would have to change.** ⚠ **The answer is almost always small** — *reprice, or hold a buffer, or ask for a fortnight* — **and discovering that in a classroom is the cheapest version of the discovery there is.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **His volume as stated in his letter of 9 January · the border open · the second press running three hours a night on the generator.** **Number 1,100 a month; range 800–1,200.**  **2** ⚠ **Because eight hundred is a four-week border closure, which happened twice last year, or a buyer taking a quarter less than he said, which happens to everybody.** ⚠ *This is not a failure case, it is a Tuesday* — **and the paper has to work there, and the writer did the arithmetic and it does.**  **3** ⚠ **_All else equal_, out of three paragraphs.** ⚠ **In each of the three she could name the conditions, and once you can name them the phrase is a way of not naming them.**'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**THE FRIDAY OPENING — THREE WAYS IT COULD GO. 12 March. H. Mourad. Risk note, part 1 of 3.**',
  '⚠ **On current terms — the two women on the existing Mezzeh Friday rota, the street closing at one as it has for twenty years, and Lina at the counter — a Friday morning takes about a hundred and twenty. That is the number I have planned on. The range I have planned to survive is sixty to a hundred and forty.**',
  table(['', 'The case', 'What it needs', 'What happens here'], [
    ['**high — 140**', 'the nine trade customers come on Fridays as they said', 'nothing new', '**we need a third person on the counter by June**'],
    ['**planned — 120**', 'all three conditions hold', 'the existing rota', '**as costed at paragraph 6**'],
    ['**low — 60**', '⚠ **the trade customers do not come and it is walk-in only**', '⚠ **nothing — this is not a failure case, it is a slow Friday**', '⚠ **the two women are paid either way, so the cost of being wrong is the glazing and the lights. It still pays. The paper works here.**'],
  ], [1.3, 2.1, 2.2, 2.4]),
  '⚠ **And below the range is a different question.** **Under forty a morning we should not open at all, and that is paragraph 8, not this one.** **A reader who sees only a range assumes the bottom of it is the bottom of the world.**',
  '**I have written *on the evidence to date* once.** The evidence is eleven Saturdays of daily sheets and there has been no holiday in them.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Conditions named, before the number, in the same sentence', '✓ three of them'],
  ['Number and range labelled *planned* and *survive*', '✓'],
  ['The low case made ordinary, with the arithmetic done', '✓ ⚠ **and *a slow Friday* is better than the unit\'s *a Tuesday* because it is this business\'s own worst ordinary day**'],
  ['The age of the evidence, and the better source named', '✗ ⚠ **the age is given and no better source is named** — **and there is one: Lina\'s three weeks, which is worse, and 4.3 will need it**'],
  ['*All else equal* removed wherever conditions were nameable', '✓'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: what lies below the range. The line I am marking is **_Under forty a morning we should not open at all, and that is paragraph 8, not this one.__** What I found: that is the best sentence in the note and it is doing a job the unit does not ask for. Keep it, and put the same sentence in part 1 of every risk note you write."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their low case. ⚠ **The class says whether it sounds like a disaster or like a Tuesday.** ⚠ **A low case that sounds like a disaster means the range is too narrow** — **the lower bound should be an ordinary bad outcome, not the worst imaginable one, because the worst imaginable one is 4.5.**'));
out.push(stage('7', 'Write freely – sample (224 words)'));
out.push(sample(null, [
  'We forecast a hundred and forty tonnes for the first quarter of 2019 and did ninety-one, and the man who wrote the forecast left in the summer.',
  'What he had written was that we would do about a hundred and forty tonnes. That is the whole of it: a number, in a sentence, with no conditions attached. What he had assumed, and said to three people verbally, was that the second line would be commissioned in February and that the two largest customers would move their standing orders across from the old specification.',
  'The second line was commissioned in April because a transformer was late. The customers moved in May because one of them wanted to see three months of output first, which is what anybody would want.',
  'Neither of those was his fault and both were foreseeable. He had foreseen them — that is the part that still bothers me. He told three people. He did not write it down, because writing *if the line is commissioned in February and if the two largest customers move* would have looked like hedging a forecast he had been asked to make with confidence.',
  'So he was blamed for a forecast and not for a condition, and nine months later he was blamed for it again in a review, and in the spring he went.',
  'Two conditions, in one sentence, would have cost him eleven words.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the condition nameable in advance? The line I copied is **_writing *if the line is commissioned in February and if the two largest customers move* would have looked like hedging a forecast he had been asked to make with confidence.__** What I found: that is the real mechanism and it is not about skill. He was asked for confidence and gave it, and the conditions were the price."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three forecasters to have been blamed for a condition rather than a forecast, and expect two of three conditions to have been nameable in advance.** ⚠ **Name the cause the sample names, because it is the one learners recognise:** **people are asked for forecasts *with confidence*, and the conditions read as a retreat from the confidence they were asked for.** **The remedy is the pronunciation point — conditions before the number, in the same breath.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the arithmetic at the lower bound.** ⚠ **Insist on the arithmetic and not the assertion.** **A learner who writes *it would still work* has not done it; one who writes *four points thinner and still above the Tannous volume* has.**',
], C.lblue, C.navy));

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  Concentration in one sentence'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect at least one learner to name a person rather than a customer or a machine**, and when it happens give the stage to it — **4.2\'s fourth sentence is exactly that and the class will have found it before the book does.**'));
out.push(p('**b**  The **second** cannot be read past. ⚠ **It has a figure, a person and a place in it; the first has a concept and an adjective.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It must make the figure arrive as a morning** — *if his payment is four weeks late we cannot pay the mill on the twenty-eighth.* **Sixty-one per cent is an argument; not paying the mill is a Tuesday.**  2 ⚠ **_Significant._** **It does nothing except tell the reader you think the number is big, which he can see.**'));
out.push(p('⚠ **Two words come out in this track and only one of them is obviously wrong.** ⚠ **_Significant_ is an adjective and Unit 3 already dealt with adjectives.** ⚠ **_Counterparty_ is the harder case: it is the correct technical word and it is a screen** — *one man in Beirut whom nobody here has met* **is the same fact with a person in it, and a person can be late.** **Expect a learner to defend *counterparty* on the grounds that it is professional, and Hala\'s answer is the one to give: Mr Attar will use it once and then say the other sentence, because that is the one he will remember.**'));
out.push(p('**Language box – Practise (sample, four):**  _**1** ⚠ **_One plater in Aleppo plates every carton we make, and if he stops for a fortnight nothing ships at all._**  **2** **_One generator runs the night shift, and if it fails in August the second press is idle for five months of the year instead of none._**  **3** ⚠ **_Four people here can price an export order and three of them learned it from the fourth, and when he is away for a fortnight nobody quotes above 500,000._**  **4** **_Two women hold the Mezzeh counter on a Friday, and if either is ill we open with one and the trade customers wait._**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'There is a concentration of pricing capability in a limited number of personnel.'],
  ['B', 'Who is it?'],
  ['A', 'It is four people.'],
  ['B', 'Name them.'],
  ['A', 'Mr Ayoub, Bassel, Hala and me.'],
  ['B', 'And where did three of you learn it?'],
  ['A', '…From Mr Ayoub.'],
  ['B', 'So say that.'],
  ['A', 'Four people here can price an export order and three of them learned it from the fourth.'],
  ['B', 'Now there is a man in it, and a man can be in Homs for a fortnight. What did the first version let a reader do?'],
  ['A', 'Agree with it. There is nothing in it to disagree with.'],
]));
out.push(p('⚠ **The move in role card 2 works on every screen word and it is one question: who is it?** ⚠ *The supply base · the resource · headcount · the client portfolio · pricing capability.* **The answer is always a named person or a small countable number of them**, and when the learner says the names out loud the sentence rewrites itself.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one-sentence version and ring the adjective and the screen word that came out. **Typical errors:** *significant · material · substantial · considerable* · a Tuesday that is a consequence rather than a morning (*it would affect our cash position*) · ⚠ **and the content fault, which is a sentence with a figure and a Tuesday and no person in it.** **A machine can fail; only a person can be late, forget, or leave.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What we depend on', 'The share', 'The Tuesday', 'The one sentence'], [
  ['one Beirut buyer', '**61%**', 'four weeks late, no mill payment on the 28th', '⚠ **_Sixty-one per cent of what we sell would be bought by one man in Beirut whom nobody here has met._**'],
  ['one plater', '**100%**', 'he stops a fortnight, nothing ships', '**_One plater in Aleppo plates every carton we make, and we did not replace him in March._**'],
  ['one generator', '**100% of nights**', 'it fails in August', '**_One generator runs the night shift, and if it fails the second press is idle five months a year._**'],
  ['one man\'s pricing judgement', '⚠ **—**', 'a fortnight in Homs', '⚠ **_Four people here can price an export order and three of them learned it from the fourth._**'],
], [1.4, 0.8, 1.6, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My sentence is: four people here can price an export order and three of them learned it from the fourth. I took out *concentration of pricing capability*, which was the screen, and I took out *significant*, which was the adjective. There is no share against it because I would have had to invent one."', '⚠ **Count the sentences with a person in them, and then ask how many of the dependences turn out to be one named individual.** ⚠ **It is always more than the class expected** — **and in a small firm the answer is usually most of them, because the machines have suppliers and the people do not.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The fourth — four people can price an export order and three learned it from the fourth.** **The first three are about money and the fourth is about a man, and the fourth is the one that would actually stop the company**, ⚠ **because the other three have substitutes findable in a fortnight and it does not.**  **2** ⚠ **Because any share would be invented.** *One hundred per cent of pricing judgement* **would be a number written to make the sentence match its neighbours**, ⚠ **and the dash is honest — which is what 4.4 is about.**  **3** ⚠ *Whom we did not replace.* **Four words, and the plating dependence stops being a fact about Aleppo and becomes a thing chosen in March and not revisited** — ⚠ **and a risk you chose reads differently from a risk you have.**'));
out.push(stage('6', 'Write with help – sample (144 words)'));
out.push(sample(null, [
  '**THE WORKSHOP — ONE SENTENCE EACH. 14 March. B. Nassif. Risk note, part 2 of 3.**',
  table(['', 'The one sentence', 'Share', 'The Tuesday'], [
    ['**1**', '**_One long saw cuts every sheet that goes through this workshop, and it was last serviced in 2021._**', '**100%**', '**the blade goes on a Monday and nothing is cut until Thursday**'],
    ['**2**', '⚠ **_Sixty per cent of our steel comes from Haddad Metals, who sent us the wrong gauge in February and whose note said the right one._**', '**60%**', '**they are late in a month we have a shipment, and we buy at spot**'],
    ['**3**', '⚠ **_One man can set the saw, and he taught the two who help him._**', '⚠ **—**', '⚠ **he is on leave in August and we cut nothing wider than 600**'],
    ['**4**', '**_The yard has one gate wide enough for a lorry, and the gate is the landlord\'s._**', '**100%**', '**the hinge goes and we unload on the street until he repairs it**'],
  ], [0.4, 4.1, 0.9, 2.6]),
  '⚠ **The third is the one nobody has written down, and it has no share against it because I would have had to invent one.** **The saw can be serviced, the steel can be bought elsewhere at a price, and the gate is a hinge.** ⚠ **The man cannot be ordered, and the two he taught can set it to 600 and not beyond, which I did not know until I asked them last week.**',
  '⚠ **And the fourth sentence has a decision of somebody\'s in it that is not ours.** *The gate is the landlord\'s.* **We have known that since 1996 and have never asked him for a second one.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One sentence each, all the same shape', '✓'],
  ['A person and a Tuesday in every sentence', '✗ ⚠ **the first and fourth have no person** — **and the first could: whoever decided not to service it since 2021**'],
  ['The dependence with no substitute, identified', '✓ ⚠ **and better than the unit asks: the two he taught can set it to 600 and not beyond, which is a measured limit on the substitute**'],
  ['A share left blank rather than invented', '✓'],
  ['A decision of yours inside at least one risk', '✗ ⚠ **the decision in the fourth is the landlord\'s, not ours** — **and ours is the one that belongs there: we have never asked him**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a decision of yours inside at least one risk. The line I am marking is **_The yard has one gate wide enough for a lorry, and the gate is the landlord\'s.__** What I found: that is his decision, not yours, and it reads as an excuse. Your last clause already has the right one in it — *we have never asked him* — and it should be in the sentence, not under the table."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their fourth sentence. ⚠ **The class says how long the substitute would take to find.** ⚠ **Where the answer is *there is not one*, write it on the board** — **that sentence is the most valuable output of the cycle and in most workplaces nobody has ever written it anywhere.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'One woman in our office knows how the payroll spreadsheet works and she has known for nine years.',
  'It is not a system anybody bought. It was a spreadsheet in about 2015 and it has grown, and it now has eleven sheets and some of the formulas refer to a sheet that was deleted in 2019 and still works because of something she did to it. She runs it on the twenty-fourth of every month and it takes her a day and a half and it has never once been wrong.',
  'Nobody has written any of it down. She has offered twice. Both times the answer was that we should move to proper software, which is true and which has been true for six years, and in the meantime nobody has spent a day watching her do it.',
  'If the volume doubled it would not break, which is the strange part. It would take her three days instead of a day and a half. So it does not fail the stress test and that is precisely why it has never been written down: the exposure is not that it breaks, it is that it is her.',
  'She is fifty-eight. She has a sister in Latakia. Nobody in that building has ever asked her what her plans are, and I include myself, and I have thought about this spreadsheet perhaps thirty times.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: how long would the substitute take to find? The line I copied is **_So it does not fail the stress test and that is precisely why it has never been written down.__** What I found: that is a better statement of the unit\'s point than the unit makes. The exposures that survive a stress test are the ones that never get written down, because a stress test looks for failure and this one does not fail — it just ends."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three undocumented dependences to be a person, and expect two of three never to have been told they are one.** ⚠ **Ask the question the samples both end on: has anybody asked them?** **In almost every case the answer is no**, and the reason is that asking would mean admitting the dependence exists.'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for four sentences of the same shape with a blank share where one would have to be invented.** ⚠ **Mark the blanks, not the figures.** **A learner who has filled all four shares has invented at least one**, and the whole of 4.4 is about what happens to it afterwards.',
], C.lblue, C.navy));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  Modelling what can be modelled'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect most learners not to know what the calculation assumed**, which is the point: a figure arrives without its assumptions and is used as though it had none.'));
out.push(p('**b**  The **second** can be argued with usefully. ⚠ **It tells the reader which assumption to attack, which is the only kind of argument that ends.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The second — that two weeks is the realistic bad case.** **It comes from last year, when they were two weeks late twice, both in the Homs season.**  2 ⚠ **That Homs was a seasonal allocation problem and Beirut is a border and a press** — **not the same kind of lateness** — ⚠ **and that she has used last year\'s delays because they are the only delays she has.**'));
out.push(p('⚠ **Two instructions in this track do more work than anything else in the unit.** ⚠ **First: write the warranty sentence in the words you said out loud.** *I have used last year\'s delays because they are the only delays I have.* **Bassel calls it worth more than the four hundred thousand**, and the reason is exact: ⚠ **the figure is a number and the sentence is its warranty — it says how far the figure can be carried.** ⚠ **Second: do not model a legal question, ask it.** **A probability on a question somebody qualified answers in a morning is a model pretending to know something it could find out.**'));
out.push(p('**Language box – Practise (sample):**  _**The figure:** the blade is about 14,000 and the lost cutting is about 9,000, so a blade failure costs about 23,000. **Assumptions: 1** the blade price from the February invoice. **2** three days to replace, which is from 2021 and the supplier has changed hands since. **3** the current job mix. ⚠ **The weak one is 2.** ⚠ **_I have used the 2021 replacement time because it is the only replacement we have ever had._** **And the question I have taken out of the model: does the new owner hold blades in Damascus? That is a telephone call and I have made it.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'We assume a seventy per cent chance the clause runs from dispatch.'],
  ['B', 'Who could answer that definitively?'],
  ['A', 'Mr Sayegh.'],
  ['B', 'How long would it take him?'],
  ['A', 'He would read the clause. A morning.'],
  ['B', 'And what is the difference between the two readings worth?'],
  ['A', 'Nine days of transit at eleven hundred a month. About a hundred and thirty thousand.'],
  ['B', 'So you have put a seventy per cent on a hundred and thirty thousand rather than spend a morning.'],
  ['A', 'Put like that, no.'],
  ['B', 'Take it out of the model, put it in a line of its own, and say you have asked him. The note is better and it is shorter.']
]));
out.push(p('⚠ **The diagnostic is two questions and they work on any modelled uncertainty: who could answer this definitively, and how long would it take?** ⚠ **If the answer is a person and a morning, it is not an assumption** — **it is a question, and modelling it is pretending.** **Expect at least one learner to find a probability in their own work sitting on something a telephone call would settle.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the figure, the numbered assumptions and the warranty sentence word for word. **Typical errors:** a figure with no assumptions under it · a weakest assumption identified by the partner rather than the writer · ⚠ **and the content fault, which is data from a situation that is not like this one, used without saying so.** **Homs is not Beirut, and 2021 is not now.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The figure', 'Assumptions, numbered', 'The weak one, and why', 'The warranty sentence'], [
  ['**400,000** damages on a two-week delay', '1 his clause rate · 2 two weeks is the bad case · 3 1,100 a month', '⚠ **2 — from last year\'s Homs delays, which were seasonal allocation and not a border**', '⚠ **_I have used last year\'s delays because they are the only delays I have._**'],
  ['**23,000** a blade failure', '1 the February invoice · 2 three days to replace · 3 the job mix', '**2 — from 2021, and the supplier has changed hands**', '**_The only replacement we have ever had was in 2021._**'],
  ['**6.5%** offcut', '1 fourteen days weighed · 2 the job mix holds', '⚠ **1 — fourteen days is a fortnight in February**', '**_Fourteen days is what the scale gave me; I have not weighed a summer fortnight._**'],
], [1.1, 2.2, 1.7, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The figure is about twenty-three thousand for a blade failure. Assumption one is the blade price from the February invoice; two is three days to replace; three is the current job mix. The weak one is two, because it comes from 2021 and the supplier has changed hands since. And the warranty sentence is: the only replacement we have ever had was in 2021."', '⚠ **Count the weak assumptions that are data from an unlike situation** — **it is most of them** — ⚠ **and then count the ones that contain a question somebody could answer in a morning.** **In a working class there are always one or two**, and those are worth more than the rest of the stage.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Assumption 2 — that two weeks is the realistic bad case — from last year, when they were two weeks late twice, both in the Homs season.** **Marked *the weak one. The answer is only as good as this.***  **2** ⚠ **Whether the clause runs from dispatch or from arrival** — **about nine days of transit, roughly a hundred and thirty thousand** — ⚠ **because it is not an assumption with a probability on it but a sentence Mr Sayegh can answer in a morning, and she asked him on the 12th.**  **3** ⚠ **It is not a forecast that they will be late.** **It is the price of being late once, for two weeks, in a year** — ⚠ **and the reason to write it is that nobody in the building, including the man who wants to sign, had ever multiplied the rate by anything.**'));
out.push(stage('6', 'Write with help – sample (147 words)'));
out.push(sample(null, [
  '**THE LONG SAW, PRICED. 15 March. B. Nassif. Risk note, part 3 of 3. Working at appendix A, one page.**',
  '**The answer.** ⚠ **About twenty-three thousand for one blade failure, and about four days of the workshop.**',
  table(['', 'Assumption', 'Source', 'Strength'], [
    ['**1**', 'the blade at 14,000', '**the February invoice**', '⚠ **documented — unarguable**'],
    ['**2**', '⚠ **three days to replace**', '⚠ **the 2021 failure, the only one we have had; the supplier has changed hands since**', '⚠ **the weak one. The answer is only as good as this.**'],
    ['**3**', 'the current job mix, about nine thousand of cutting a day', 'the January and February dockets', '**current, and seasonal — the mix is thinner in summer**'],
  ], [0.4, 2.6, 2.3, 2.5]),
  '⚠ **The warranty sentence:** ⚠ **_The only blade replacement we have ever had was in 2021, and the supplier has changed hands since._** **I am using one event, four years old, from a company that no longer exists in the same form.** ⚠ **If anybody has a better source I would rather have it before the next order than after the next failure.**',
  '⚠ **The question I have taken out of the model.** **Does the new owner hold blades in Damascus, or do they come from Aleppo?** **The difference is about two days, which is about six thousand.** ⚠ **This is a telephone call and I made it on the 14th; they are telephoning me back.**',
  '⚠ **And what the twenty-three thousand is not.** **It is not a forecast that the blade will go.** **It is the price of it going once** — **and the reason to write it is that the saw has not been serviced since 2021 and nobody has ever put a number beside that fact.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *strength* column, with the weak one named', '✓ and *documented — unarguable* for the invoice'],
  ['The warranty sentence, in spoken words', '✓ ⚠ **and the second clause — *from a company that no longer exists in the same form* — is the best thing in it**'],
  ['An invitation to rebuild the figure', '✓ ⚠ **and better phrased than the unit\'s**: *before the next order than after the next failure*'],
  ['An answerable question taken out of the model and asked', '✓ asked on the 14th'],
  ['A sentence saying what the figure is not', '✓ ⚠ **and it lands the real point: nobody had ever put a number beside the service date**'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the *strength* column. The line I am marking is **_the current job mix, about nine thousand of cutting a day | the January and February dockets | current, and seasonal — the mix is thinner in summer.__** What I found: you have marked assumption 3 seasonal and left it as a strength rather than a second weakness. If the mix is thinner in summer, a summer failure costs less, and your twenty-three thousand is a February number. Say which month it is."_ ⚠ **That review is right and it is the finding the unit does not reach: a figure can have a season as well as a base.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their warranty sentence. ⚠ **The class says how far the figure can be carried — one meeting, one decision, or one year.** ⚠ **A warranty sentence that will not carry the figure to the decision it was written for is the most useful possible finding**, because it means the figure needs rebuilding before the decision and not after it.'));
out.push(stage('7', 'Write freely – sample (232 words)'));
out.push(sample(null, [
  'The figure everything in our planning rests on is four and a half per cent, and I have asked five people where it comes from.',
  'It is the assumed annual growth in order volume. It is in the budget, in the capacity model and in the two papers we have written to the bank. Four and a half per cent.',
  'The answers I got were: it is the historic average; it is what the sector does; it came from the 2017 plan; it is conservative; and, from the one honest answer, that she did not know and had always assumed somebody had worked it out.',
  'I looked at the 2017 plan. It says four and a half per cent and gives no source. The man who wrote it retired in 2019. Our actual growth over the eight years since is about one and a half per cent a year, and in two of the eight years it was negative.',
  'Decisions taken on it: a second line in 2019, a lease renewal in 2021 on five years rather than three, and the headcount plan that is currently being argued about.',
  'Nobody has ever asked, as far as I can establish, in eight years. It takes about an hour with the ledger to work out the real number and I did it on a Sunday.',
  'I have not yet written any of this down for anybody, which makes me the sixth person in the story.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: is the data from a situation like this one? The line I copied is **_I have not yet written any of this down for anybody, which makes me the sixth person in the story.__** What I found: the best line in the text and the one that makes it a Unit 4 text rather than a complaint. You have the figure, the sources, the decisions and the real number, and the note is one page. Write it."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three figures to come from a situation unlike the one they are used for, and expect at least one whose origin nobody now alive knows.** ⚠ **The second finding to draw out is the sample\'s: the writer is usually in the story too.** **Knowing a figure is wrong and not writing it down is the same act as the five people who did not ask.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the warranty sentence in spoken words.** ⚠ **Read them aloud next lesson and mark the ones that sound written** — *it should be noted that the data derives from a single prior instance* **is not a warranty sentence; _the only one we have ever had was in 2021_ is.**',
], C.lblue, C.navy));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  Naming what cannot be modelled'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one that turns the cycle: is it unpriced because it is small?** **The answer is almost always no** — **it is unpriced because it is hard, and being hard has been read as being small for years.**'));
out.push(p('**b**  Open. ⚠ **Most learners will say the second and will not be able to say why.** **The why is in the track: the first number does not stay where it is put.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The sequence — what would happen, in order, not a number.** **She loses the Beirut chain · she tells her two other Syrian suppliers why · the next time Beirut wants cartons from Damascus, she is the person they ask.**  2 ⚠ **That she took the first order at a price that lost her money, that he knew at the time and she knew he knew, and that neither of them ever said it.**'));
out.push(p('⚠ **The mechanism Mr Ayoub describes is the whole reason for the cycle and it should be read out:** ⚠ **the invented number goes into the note, then into somebody\'s summary of the note, then into a sentence in a meeting in September that begins *the Tannous exposure is about*** — **and by then nobody knows it was made up in an afternoon in March.** ⚠ **Learners have all seen this happen and none of them has seen it described.**'));
out.push(p('⚠ **And the instruction about length is as important as the refusal itself.** ⚠ **One sentence of refusal, the sequence, and then stop.** **A refusal defended for a paragraph reads like a figure you could not find** — **the brevity is what makes it a position rather than an apology.**'));
out.push(p('**Language box – Practise (sample):**  _⚠ **_This is real and I am not going to invent a figure for it._** **1** The woman who runs the payroll spreadsheet retires or leaves. **2** The spreadsheet still runs, because it always has, and nobody notices for one month. **3** In the second month a formula referring to a sheet deleted in 2019 produces a wrong figure and nobody knows which. **4** We reconstruct nine years of payroll logic from a file nobody has ever documented. ⚠ **Certain · near certain · likely · and this is not a prediction, it is the shape of the thing.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I am not going to put a figure on it. Of course it is inherently difficult to quantify these things, and any number would be arbitrary, and one has to be careful about false precision, and I am conscious that this is unsatisfactory.'],
  ['B', 'What do I now believe about you?'],
  ['A', '…That I tried to find a number.'],
  ['B', 'And could not.'],
  ['A', 'Yes.'],
  ['B', 'Which is the opposite of what you meant. Say it in one sentence and go straight on.'],
  ['A', 'This is real and I am not going to invent a figure for it. What follows is what would happen, in order.'],
  ['B', 'Now what do I believe?'],
  ['A', 'That I decided not to.'],
  ['B', 'And that you could have. Which is true, and it is the only version that is a position.']
]));
out.push(p('⚠ **Role card 2 is the one to run if only one is run, because the defended refusal is what every learner produces first.** ⚠ **The four softeners in the sample are the four that appear** — *inherently difficult · arbitrary · false precision · unsatisfactory* — **and all four say the same thing to a reader: I looked and I failed.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the refusal and the sequence, and name the step they would argue with. **Typical errors:** *estimated at approximately* · a sequence of adjectives rather than events · a refusal defended for four sentences · ⚠ **and the content fault, which is a sequence whose steps are all equally certain.** **A sequence nobody will argue with has not been written honestly.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The risk', 'The number I could have invented', 'The sequence, in steps', 'Which step is arguable'], [
  ['losing Ms Tannous', '⚠ **four years of orders, averaged, times a made-up probability: about 150,000**', '**loses the chain → tells two suppliers why → is who Beirut asks next → we find out in two years**', '⚠ **step 3 — nine years as that person, but Beirut may ask a bank instead**'],
  ['the payroll spreadsheet', 'a day and a half times nine years', '**she leaves → it runs → month two a wrong figure → we reconstruct nine years**', '**step 2 — it might fail in month one, which would be better**'],
  ['the saw-setter', 'the cost of four days a year', '**he goes → the two he taught set to 600 → we refuse wide work → the customer who wanted wide work goes elsewhere**', '⚠ **step 4 — they may wait; we have never tested it**'],
], [1.2, 1.6, 2.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The risk is losing the saw-setter. I could have invented a number by costing four days a year. Instead: he goes, the two he taught can set to 600 and not beyond, we refuse wide work, and the customer who wanted wide work goes elsewhere. The arguable step is the last — they may wait, and we have never tested it."', '⚠ **Count the invented numbers that were nearly written, and then ask the question that lands the cycle: who in the room has seen such a number quoted back at them months later with no source attached?** **Most hands go up**, and it is the same mechanism every time.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Four years of her orders, averaged, times a probability she made up: about a hundred and fifty thousand.** ⚠ **It would have been in a summary by April and in somebody\'s sentence in September, and its origin would have been an afternoon in March and a feeling.**  **2** ⚠ **That Ms Tannous took the first order at a price that lost her money; Mr Ayoub knew at the time, she knew he knew, and neither ever said it.** **Nine years old, in nobody\'s writing, the most relevant fact in that part of the note** — ⚠ **and if the decision goes the other way it should be in the letter.**  **3** ⚠ **That a risk you cannot price must not be used to carry an argument a figure could not carry.** **The part asks for a letter and nothing more** — **and the unit names this as the fault the cycle could easily become.**'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**THE SAW-SETTER. 16 March. B. Nassif. Risk note, the part with no figure in it.**',
  '⚠ **_This is real and I am not going to invent a figure for it._** **What follows is what would happen, in order, and any step can be disagreed with.**',
  table(['', 'The step', 'How sure I am'], [
    ['**1**', '**He goes — retires, or is ill for a season.** He is fifty-four and has set that saw since 2009.', '⚠ **certain, eventually**'],
    ['**2**', '**The two he taught set it to 600 and not beyond.** I asked them last week and that is their own account.', '⚠ **near certain — they told me themselves**'],
    ['**3**', '**We refuse wide work, or we send it out.**', '**likely — we have never had to**'],
    ['**4**', '⚠ **The one customer who orders wide goes elsewhere and does not come back.**', '⚠ **the step I would argue with if I were you. They may wait. We have never tested it.**'],
  ], [0.4, 4.2, 2.4]),
  '⚠ **I could have put a figure on this and here is how, so that nobody does it later.** **I would have taken four days of lost cutting a year, multiplied it by a probability of him going that I invented, and written about eighteen thousand.** ⚠ **That number would have been in the capacity paper by May and in somebody\'s sentence by autumn, and its origin would have been me, on a Thursday, wanting the row to match the others.**',
  '⚠ **And the boundary.** **This does not argue that we should not take wide work.** **It argues for two days of somebody watching him set the saw, and that is all it argues for.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The refusal in one sentence, undefended', '✓'],
  ['A *how sure I am* column, with the certainty falling', '✓ ⚠ **and *certain, eventually* is the right answer for a person and a good phrase to steal**'],
  ['How the figure would have been invented, shown', '✓ ⚠ **and the motive is named — *wanting the row to match the others* — which is the real reason invented figures get written**'],
  ['A fact that is in nobody\'s writing', '✓ the 600 limit, from the two men themselves, last week'],
  ['The boundary — what this risk is not being used to argue', '✓ two days of watching, and nothing more'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a fact that is in nobody\'s writing. The line I am marking is **_I asked them last week and that is their own account.__** What I found: you have the fact and not the test. They say 600 and nobody has watched them try 700. One afternoon would turn step 2 from near certain into known, and it is the cheapest thing in this note."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their sequence. ⚠ **The class names the step it would argue with.** ⚠ **If nobody will argue with any step, the sequence has been written to be agreed with**, which is the same fault as the free concession in Unit 3 and should be named as such.'));
out.push(stage('7', 'Write freely – sample (231 words)'));
out.push(sample(null, [
  'The number is eighteen per cent and it was invented by a man called Nizar in about 2011, in a meeting, out loud.',
  'It is the assumed wastage on fitted work. Somebody asked what we lost on site and Nizar, who ran the fitting teams and was good at it, said he supposed about a fifth, and somebody else said eighteen, and it went into a spreadsheet that week.',
  'I know this because Nizar told me himself, in 2017, laughing, when I asked him where it came from. He said he had no idea and had meant it as a guess in a conversation. He left in 2018.',
  'Since then: every quotation for fitted work has carried it, two product lines have been discontinued because they did not clear the hurdle rate with eighteen per cent in them, and it is quoted to customers who ask why fitted work costs what it does.',
  'Nobody has measured it. It would take a month of recording what comes back from six sites, and we have the paperwork to do it because the fitters already list returns.',
  'What I have never managed to say in a meeting is that the figure is a man\'s offhand answer from fourteen years ago. Twice I have started and stopped, because the person who would be embarrassed is not Nizar, who has gone, but everybody who has used it since, which is everybody in the room.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: how long has the number been treated as a fact? The line I copied is **_the person who would be embarrassed is not Nizar, who has gone, but everybody who has used it since, which is everybody in the room.__** What I found: that is why it survives, and it is a better explanation than *nobody checked*. The figure is protected by the number of people who have relied on it, and that protection grows every year."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three invented numbers to have outlived the person who invented them, and expect at least one to be quoted to outsiders.** ⚠ **Draw out the sample\'s mechanism, which is the cycle\'s deepest point: an invented figure is protected by everybody who has used it, and the protection grows with age** — **so the older the number, the harder it is to question and the more decisions rest on it.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for a refusal in one sentence and a sequence in four steps with certainty marked.** ⚠ **Mark the certainty column hardest.** **Four steps all marked *certain* is a learner who has written a prediction and called it a sequence**, and the remedy is to ask which one they would attack if it were somebody else\'s.',
], C.lblue, C.navy));

// ===================== 4.5 =====================
out.push(pb());
out.push(h2('4.5  Stress language'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the cycle: had anybody thought of them together?** **The answer is no in nearly every case**, and the reason is in 4.5\'s reading — risk is organised by kind and not by fortnight.'));
out.push(p('**b**  The **second** is a stress case. ⚠ **The first is one risk; the second is two in one fortnight, and it adds a consequence the first cannot reach** — *cannot ship what we have already made.*'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The generator and the border** — **the generator fails in the heat and the border closes in the summer, and August is both.**  2 ⚠ **Two risks that share a cause are not two risks, they are one risk that arrives twice** — **and *correlation* is the word the first draft never used.**'));
out.push(p('⚠ **The sentence Mr Attar makes her repeat is the unit\'s climax and it should be read out twice:** ⚠ **_the clause does not care why._** **In almost every stress case there is one obligation indifferent to your reasons, and it is the obligation that turns a bad fortnight into a solvency question.** ⚠ **Four hundred thousand of damages in the one fortnight of the year when the company has no income to pay it out of.**'));
out.push(p('⚠ **And the discipline at the end matters as much.** ⚠ **One pair, worked properly, and say why that pair.** **A note with six pairs in it is a note nobody finishes, and the six will all be less frightening than the one** — **because a reader who is shown six possibilities assesses none of them.**'));
out.push(p('**Language box – Practise (sample):**  _**The pair:** the saw blade and the August leave. **The shared cause:** nothing — ⚠ **this is a coincidence and should be rejected.** **The real pair:** the saw-setter\'s August leave and the thin summer job mix, **because both are August** — **he is away, the two he taught can set to 600, and the summer work is the wide architectural work that needs 900.** ⚠ **What runs anyway: the site dates in the contracts, which do not care why.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Put two of them in the same fortnight.'],
  ['A', 'The generator and the border.'],
  ['B', 'Why those?'],
  ['A', 'The generator fails in the heat and the border closes in the summer, and August is both.'],
  ['B', 'Which is correlation. Now the arithmetic, out loud.'],
  ['A', 'The generator goes, so no night shift, so four hundred a month instead of eleven hundred. The border is shut, so what we have made does not ship, so no payment.'],
  ['B', 'And?'],
  ['A', '…And the damages clause runs anyway, because his clause does not care why we are late.'],
  ['B', 'Say the last part again.'],
  ['A', 'The clause does not care why.'],
  ['B', 'That is the sentence the whole note has been walking towards, and it is not in it.']
]));
out.push(p('⚠ **Make the pair do the arithmetic out loud before writing it, in arrows.** ⚠ **The *and the clause runs anyway* step is the one that arrives only when the arithmetic is spoken** — **on paper the writer reaches *no payment* and stops, because *no payment* feels like the end of a chain.** **It is not; it is the point at which the obligations start.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the pair, the shared cause, the arithmetic in arrows and the obligation that runs anyway. **Typical errors:** a pair with no shared cause, which a reader discounts as a coincidence and is right to · six pairs instead of one · ⚠ **and the content fault, which is an arithmetic chain that stops at the loss and never reaches the obligation.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The pair', 'The shared cause', 'The arithmetic, in arrows', 'What runs anyway'], [
  ['generator + border', '⚠ **August — heat and summer closures**', '**no nights → 400 not 1,100 → nothing ships → no payment**', '⚠ **the damages clause, and the mill on the 28th**'],
  ['saw-setter\'s leave + summer mix', '**August**', '**he is away → 600 maximum → wide work refused**', '**the site dates in the contracts**'],
  ['blade failure + Haddad late', '⚠ **none — a coincidence, rejected**', '—', '—'],
], [1.4, 1.5, 2.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The pair is the saw-setter\'s August leave and the summer job mix. They share August. He is away, so the saw is set to 600 at most, so the wide architectural work is refused — and the site dates in the contracts run anyway, because a site date does not care why."', '⚠ **Count how many shared causes were a season or a month: it is nearly all of them**, which is the finding to name — ⚠ **correlation in a small business is almost always a calendar.** **Then ask how many obligations that run anyway are written in somebody else\'s document, and the answer is almost all.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Row 4 — the damages clause running.** ⚠ **Because the note was organised by kind of risk and not by fortnight**: the clause was priced in part 3, the generator and border were in part 2, and the two had never been on the same page. ⚠ **A risk note organised by kind cannot see a stress case.**  **2** ⚠ **Because these two share a cause and the others do not.** **The plater stopping and Mr Dallal paying late would be bad and would be a coincidence, and a reader discounts a coincidence, correctly.** ⚠ **August is not a coincidence; it is a month, and it comes every year.**  **3** ⚠ **The total.** **A total for a fortnight nobody has lived through would be an invented figure** — **so she wrote the sentence instead and left Mr Ayoub to size it against things he has lived through, which he can do better than she can.**'));
out.push(stage('6', 'Write with help – sample (146 words)'));
out.push(sample(null, [
  '**ONE PAIR: AUGUST. 17 March. B. Nassif. One pair only, and here is why this pair.**',
  '⚠ **The saw-setter takes his leave in August because the works is quiet. The wide architectural work is quoted in spring and fitted in August. August is both, and in August the wide work is most of what is on the floor.** ⚠ **These are not two risks. They are one risk — our own seasonal shape — arriving in two forms, and the word my first draft never used is correlation.**',
  table(['', 'What happens', 'The figure'], [
    ['**1**', '**He is away for three weeks.**', '**the two he taught set to 600 maximum**'],
    ['**2**', '**The wide work on the floor needs 900.**', '**about 180,000 of the August book**'],
    ['**3**', '**We send it out or we refuse it.**', '**sending out is about 14 per cent, which is the whole margin**'],
    ['**4**', '⚠ **The site dates in the contracts run.**', '⚠ **a day a week in two of the four, and a site date does not care why**'],
    ['⚠ **5**', '⚠ **So: we pay penalties on work we could have cut, in the month we chose to be short-handed.**', '⚠ **—**'],
  ], [0.4, 3.9, 2.7]),
  '⚠ **Row 4 was not in my first two drafts** because the leave was under *people* and the site dates were under *contracts*, and I never had them on one page.',
  '⚠ **And I will not total row 5.** **I could add the penalties, the margin and the lost book, and it would be a number for a month we have not had yet.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The shared cause named as a single thing', '✓ ⚠ **and *our own seasonal shape* is better than a month, because it says the cause is a decision**'],
  ['The arithmetic numbered and in order', '✓'],
  ['The obligation that runs anyway', '✓ the site dates'],
  ['Why this pair, with a rejected pair named', '✗ ⚠ **no rejected pair** — **and the blade-plus-supplier coincidence from stage 4 is the one to name**'],
  ['The total refused, with a sentence instead', '✓ ⚠ **and row 5\'s sentence is the strongest line: *in the month we chose to be short-handed***'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the shared cause. The line I am marking is **_They are one risk — our own seasonal shape — arriving in two forms.__** What I found: if the cause is our own seasonal shape, then the remedy is ours and the note should say so. The generator-and-border pair is weather and we live with it; this pair is a leave rota and a quoting habit, and both are inside this building."_ ⚠ **That review finds the distinction the unit does not draw: a correlated pair whose shared cause is a decision of yours is a pair you can uncorrelate.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their *what runs anyway* row. ⚠ **The class says whose document the obligation is written in.** ⚠ **It is almost always somebody else\'s** — **a clause, a site date, a lease, a loan covenant** — **and naming that is what tells a reader why the stress case is not survivable by effort.**'));
out.push(stage('7', 'Write freely – sample (228 words)'));
out.push(sample(null, [
  'In February 2021 we lost the three-phase supply for nine days and our largest customer was taking delivery in the same fortnight, and nobody had ever put those two things on the same page.',
  'They shared a cause and the cause was February. The supply failures in that district are winter failures — load, not equipment. And our largest customer took delivery in February because their own year ended in March and they wanted the stock in before it.',
  'So: no power, so no cutting; no cutting, so the February delivery was eleven days late; and their purchase order carried a late-delivery deduction of two per cent a week, which does not care why. We paid about nine thousand on an order of two hundred and thirty.',
  'What made it worse than the sum of the two is that our own stock buffer was at its lowest in February, for the same reason — we had built to their order and shipped nothing else.',
  'All three of those facts were known separately. The power history was known to the maintenance man, the customer\'s year-end was on their purchase order, and the buffer position was in our own stock sheet.',
  'Nobody had written the word February anywhere near all three, and the person who should have is the person writing this.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: did the two share a cause? The line I copied is **_All three of those facts were known separately.__** What I found: three, not two — and the third is a correlation too, because your buffer was low for the same reason. That makes it one cause with three arms, which is worse than a pair and is the version your note should carry."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three pairs to share a cause and all three never to have been written on one page before the event.** ⚠ **Name the reason: files are organised by kind — people, contracts, plant, cash — and a fortnight cuts across all of them.** **The remedy is a single habit: once a year, write the worst fortnight rather than the worst thing.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for one pair and the obligation that runs anyway.** ⚠ **Reject pairs with no shared cause, firmly** — **a learner who brings a coincidence has done the exercise backwards and will produce a note a reader discounts.** **The test is one question: does the same thing cause both?**',
], C.lblue, C.navy));

// ===================== 4.6 =====================
out.push(pb());
out.push(h2('4.6  The risk that belongs to the owner'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the finding: has it ever been written down?** **Almost never** — **and the reason is the one 4.6 removes, which is that people believe writing a risk down is a form of deciding it.**'));
out.push(p('**b**  The **second** hands it over. ⚠ **The first hands it to *management*, which is nobody**, and *wider strategic considerations* is the phrase that does the hiding.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What kind of company this becomes** — **a company with one customer prices differently, argues differently, and cannot say no.**  2 ⚠ **Because the other risks have figures or sequences and this one has neither**, **and she has spent three weeks learning to put numbers on things.'));
out.push(p('⚠ **Nadia\'s two sentences are the permission this cycle exists to give, and most learners do not know they have it:** ⚠ **_You cannot decide it. Writing it is not deciding it._** **Expect several learners to have believed the opposite their whole working lives**, and expect the belief to be the reason the largest risk in their files has never been written anywhere.'));
out.push(p('⚠ **And the reason for the silence on recommendation is practical, not modest.** ⚠ **A recommendation on what kind of company this should be, from somebody who does not own the company, would be the one sentence in twenty-one pages that nobody could check** — **and it would outlive everything in them that can.**'));
out.push(p('**Language box – Practise (sample):**  _⚠ **_This one is yours. It is whether this workshop takes wide architectural work at all._** **And it is the only risk in this note that is yours and not mine. The saw is mine — I can have it serviced. The steel is mine — I can get three quotations. The gate is the landlord\'s. The setter is two days of somebody watching him, which I have asked for.** ⚠ **This one cannot be costed, sequenced or asked about. I am making no recommendation and the silence is deliberate.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'This one is yours. It is whether this workshop takes wide architectural work at all. And in my view we should stop.'],
  ['B', 'Who would quote that last sentence?'],
  ['A', 'Mr Attar.'],
  ['B', 'To whom?'],
  ['A', 'To anybody. And to the bank, probably, in a year when we are arguing about the lease.'],
  ['B', 'For how long?'],
  ['A', 'Years.'],
  ['B', 'And is it checkable?'],
  ['A', 'No. It is the only thing in nine pages that is not.'],
  ['B', 'Then take it out and say the silence is deliberate, because otherwise he will think you forgot to say what you thought.']
]));
out.push(p('⚠ **The last line of that sample is the piece the unit leaves implicit and it matters:** ⚠ **a silence that is not declared is read as an omission.** **_I am making no recommendation and the silence is deliberate_ is nine words and it is the difference between a boundary and a gap.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the handed-over risk in one line and what the note would have said without it. **Typical errors:** *wider strategic considerations for management* · a hand-over with a recommendation attached · an undeclared silence · ⚠ **and the content fault, which is a hand-over of something that could in fact be costed.** **If it can be costed, it is not this risk and it belongs in 4.3.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The risk', 'Whose it is', 'The one line', 'What the note says without it'], [
  ['what kind of company has one customer', '**the owner\'s**', '⚠ **_It is whether this company is the kind of company that has one customer._**', '⚠ **that the risks are a generator, a border, a clause and a woman in Beirut — a list of operational problems, solvable one at a time**'],
  ['whether to take wide work at all', 'the owner\'s', '**_It is whether this workshop takes wide architectural work at all._**', '**that the saw-setter is a training problem**'],
  ['whether to stay in this yard', 'the owner\'s', '**_It is whether we are a one-gate business._**', '**that the gate is a maintenance question for the landlord**'],
], [1.3, 1, 2.2, 2.2]));
out.push(p('⚠ **The fourth column is the one to spend time on and the unit is right to ask for it.** ⚠ **It is what the note *says* by omission** — **and in all three samples the omission converts a question of identity into a maintenance schedule**, which is exactly what a reader will then act on.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The risk is whether we take wide architectural work at all. It belongs to Mr Nassif. My one line is: it is whether this workshop takes wide architectural work at all. And without it the note would say that the saw-setter is a training problem — which is what somebody would then solve, and it would not be wrong, and it would not be the question."', '⚠ **Count how many of these have ever been written down anywhere: it is usually none.** ⚠ **Then ask how many of the room believed, before this cycle, that writing one down was the same as deciding it** — **and the hands that go up are the reason the cycle exists.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Hers: the generator (she can cost a second one) and the pricing of the clause.** ⚠ **Not hers: the border (nobody\'s, and they live with it), the reading of the clause (Mr Sayegh\'s), Ms Tannous (a letter, already asked for), and the question of what kind of company this becomes (the owner\'s).**  **2** ⚠ **Because she has no example.** **She has two examples of what dependence does — the plater\'s twelve per cent taken without asking anybody, and a hundred wrong sheets never invoiced — and no example of a company that cannot say no to a customer who is sixty-one per cent of it**, ⚠ **because they have never been one, which is the point.** **A reader is entitled to know the worst of the three is the one she is guessing about.**  **3** ⚠ **To tell him what the rest of the note is not.** **Twenty pages about things that can be costed, sequenced or asked about; the largest thing in the file is on this page, has no number on it, and is the only one handed over.**'));
out.push(stage('6', 'Write with help – sample (148 words)'));
out.push(sample(null, [
  '**THE ONE THAT IS YOURS. 18 March. B. Nassif. Risk note, the last page. ⚠ One risk, one line, no recommendation.**',
  '⚠ **_This one is yours. It is whether this workshop takes wide architectural work at all._**',
  '⚠ **And it is the only risk in this note that is yours and not mine.** **The blade is mine — I can hold a spare. The steel is mine — I can get three quotations before each order. The gate is the landlord\'s and we have never asked him for a second one. The setter is two days of somebody watching him, which I have asked for and which costs two days.** ⚠ **This one cannot be costed, sequenced or asked about, and it is the largest thing in the file.**',
  table(['', 'What a workshop that takes wide work does differently', 'Where I have seen it'], [
    ['**quotes**', '**it quotes in spring for August and cannot move either date**', '**the four site contracts, all quoted in April**'],
    ['**staffs**', '⚠ **it cannot let one man be the only one who can set to 900**', '⚠ **and we have, since 2009**'],
    ['**refuses**', '⚠ **it does not refuse, because wide work is where the margin is**', '⚠ **I have no example of us refusing any, which is the point**'],
  ], [1.2, 3.1, 3.1]),
  '⚠ **The third row is empty on purpose and it is the most honest line on the page.** **I am guessing about the one that matters most.**',
  '⚠ **I am making no recommendation and the silence is deliberate.** **I have asked for a spare blade, three quotations and two days of watching, and all three are at paragraph 7.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every other risk allocated by name', '✓ four of them, with what each costs'],
  ['Examples from dependences you already have', '✓ ⚠ **and *we have, since 2009* is the best of them, because it is an admission**'],
  ['An empty cell, admitted and explained', '✓'],
  ['No recommendation, and the silence declared', '✓'],
  ['A sentence saying what the rest of the note is not', '✗ ⚠ **missing** — **and the note needs it, because without it the last page reads as an afterthought rather than as a boundary**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a sentence saying what the rest of the note is not. The line I am marking is **_This one cannot be costed, sequenced or asked about, and it is the largest thing in the file.__** What I found: that says what this risk is, not what the other nine pages are. One more clause — *and the nine pages before it are all about things that can be* — turns a claim about this page into a boundary around the note."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their one line. ⚠ **The class asks one question: could it be costed?** ⚠ **If it could, it is not this risk** — **and the commonest error in the cycle is a learner handing over something that is simply expensive.** **Expensive is 4.3. This cycle is for the thing that has no unit.**'));
out.push(stage('7', 'Write freely – sample (233 words)'));
out.push(sample(null, [
  'The largest decision in my working life was taken by nobody, over about four years, and everybody in the building discussed it weekly.',
  'It was whether we were a contractor or a manufacturer. We made components and we also fitted them, and the fitting was about a third of turnover and about two thirds of the arguments. Fitting needs vans, insurance, men on sites, and a tolerance for being blamed for other people\'s delays. Manufacturing needs none of those.',
  'Nobody ever decided. What happened instead was eleven small decisions over four years, each of which was sensible on its own: a van replaced, a second fitter hired, a site insurance policy renewed, a lathe not replaced because the money went into the vans. By 2019 we were a contractor with a workshop attached, and nobody had ever written a sentence saying so.',
  'The nearest anybody came was a production manager who wrote, in a note about capacity, that we should decide whether we were a contractor or a manufacturer. He was told the note was about capacity. He was right and he was also junior, and the sentence was quoted at him for two years as evidence that he did not understand the business.',
  'I have thought since that the sentence was correct and the mistake was that he put it inside a note about something else, where it looked like an opinion instead of a boundary.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: has the risk ever been written down at all? The line I copied is **_the mistake was that he put it inside a note about something else, where it looked like an opinion instead of a boundary.__** What I found: that is the whole of 4.6 arrived at from the other end. He wrote the right sentence in the wrong place, and the cycle\'s answer is a page of its own with no recommendation on it."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three largest decisions never to have been written down, and expect at least one junior person quoted for years for a sentence they should not have written** — **or, as in the sample, for the right sentence written in the wrong place.** ⚠ **Close on that distinction, because it is the practical use of the cycle: the sentence was not the error, its location was.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the one line, every other risk allocated, and no recommendation.** ⚠ **Check the allocation first.** **A hand-over without the allocation beside it is an evasion**, and a learner who has allocated the other four honestly has usually discovered that two of them are theirs and had not been.',
], C.lblue, C.navy));

// ===================== 4.7 =====================
out.push(pb());
out.push(h2('4.7  Review & Mediate: the exposure nobody owns'));
out.push(stage('1', 'Get ready – Unit 4 quiz'));
out.push(p('**1** ⚠ **The number is what you plan on; the range is what you survive** — **and the paper must work at the lower bound.**  **2** ⚠ **A person and a Tuesday** — **a morning on which something does not happen.**  **3** ⚠ **Because the reader was going to find it anyway.** **Finding it himself costs you the figure; being shown it costs you nothing**, and it tells him how far the figure can be carried.  **4** ⚠ **It goes into a summary of your note and then into a sentence in a meeting months later, with its origin lost.** **Instead you write one sentence of refusal and then the sequence — what would happen, in order.**  **5** ⚠ **A shared cause makes it worth working; without one it is a coincidence, and a reader discounts a coincidence, correctly.**  **6** ⚠ **Because deciding needs authority and writing needs only honesty** — **and a risk left out because you cannot decide it is a risk the reader will never see.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That August is three things, not two: for three weeks the water pressure drops, the hose at the gate will not fill the tank, and the press cannot run without water for the glue** — **four years out of five, and they carry it in drums from the second store, about forty minutes a night.**  2 ⚠ **Nobody\'s.** *And that is why you have not got it.*'));
out.push(p('⚠ **This track is the best thing in Unit 4 and the three facts in it are each worth a minute.** ⚠ **First: it does not scale.** *You cannot do eleven hundred on drums. Four hundred, yes. We have.* **The exposure was invisible because the volume made it survivable, and the volume is exactly what is about to change.** ⚠ **Second: people are asked about what can be bought.** *I have been asked about the generator, because a generator is a thing you buy.* ⚠ **Third, and it is the line to leave on the board: _it has never once stopped the press. I have made sure of that for five years, and now I am the reason nobody knows._**'));
out.push(p('⚠ **Do not let the class hear that as a complaint about Abu Yasser.** **He has done his job perfectly for five years.** ⚠ **The unit\'s point is structural: competence hides exposure, and the more reliable the person the more completely it is hidden** — **so a risk register built from documents will contain every risk except the ones somebody good has been absorbing.**'));
out.push(p('**Language box – Practise (sample):**  _"I want to read you the worst fortnight. — *The blade and the summer mix, in August.* — ⚠ **August is three things: he is away, the mix is wide, and the compressor has been topped up by hand every August since 2019.** — Who tops it up? — ⚠ **Whoever is in. About twenty minutes a morning.** — For how long? — Six years. — And at double the volume? — ⚠ **You cannot top it up by hand at double.** — Whose exposure is it? — ⚠ **Nobody\'s, and that is why it is not in your note.**"_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'Is August all right?'],
  ['B', 'August is fine. It always is.'],
  ['A', 'Nothing goes wrong?'],
  ['B', 'Nothing has gone wrong in six years.'],
  ['A', '…What happens in August?'],
  ['B', 'The compressor loses pressure in the heat and somebody tops it up by hand every morning.'],
  ['A', 'Every morning?'],
  ['B', 'About twenty minutes. Whoever is in first.'],
  ['A', 'And if we were running twice the volume?'],
  ['B', 'You could not do it by hand. You would need a second compressor, or a man on it.'],
  ['A', 'Why has nobody written that down?'],
  ['B', 'Because it has never stopped anything.']
]));
out.push(p('⚠ **The first four lines of that sample are the whole lesson in how not to ask.** ⚠ *Is August all right?* **gets *fine*, truthfully, because it has been fine.** ⚠ **The question that works is open and has no answer in it: *what happens in August?*** — **and then *for how long?* and *at double the volume?*** **Make the pairs run the closed version first; the contrast teaches faster than the rule does.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the exposure, how long it has been absorbed and who has absorbed it, then the three things that would give it an owner. **Typical errors:** a closed question (*is it all right? · any problems?*) which gets a truthful no · ⚠ **and the content fault, which is a mediator who treats the absorbed exposure as a failure by the person absorbing it.** **It is the opposite: they have prevented five years of failures and that is why it is invisible.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I read it to', 'What they added', 'How long they have absorbed it', 'Whose exposure it is'], [
  ['the man in the yard', '⚠ **the water in August, carried in drums, forty minutes a night**', '**five years**', '⚠ **nobody\'s — and the three things that would give it an owner are a tank, a pump and a job description**'],
  ['the woman on the counter', '**that the card machine fails in the heat and she writes the numbers on a pad and enters them at six**', '**two summers**', '⚠ **nobody\'s — and it is not in any document because no sale has ever been lost**'],
], [1.1, 1.9, 1.5, 1.5]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('⚠ **The unwritten thing, in full:** **a risk that somebody competent has been quietly absorbing for years is invisible precisely because they have absorbed it** — **it has never caused a failure, so it has never been written down, so it has no owner and no budget** — ⚠ **and the person who has been absorbing it becomes, without choosing to, the reason nobody knows.**'));
out.push(sample(null, ['"The note contained a generator and a border. The man in the yard added the water, which he has carried in drums for five years, about forty minutes a night. It belongs to nobody, which is why it was not in twenty-one pages, and the three things that would give it an owner are a tank, a pump and somebody whose job it is."', '⚠ **Two things to draw out at the end, and the second is the one the class will not reach alone.** ⚠ **First: the four questions — what happens · for how long · at the new volume · whose is it.** ⚠ **Second: naming an owner is what converts an absorbed exposure into things that can be bought.** **The water stops being Abu Yasser\'s forty minutes and becomes a tank, a pump and a line in somebody\'s job** — **and all three of those can be costed, which means they can enter the kind of note the rest of this unit taught.**']));
out.push(p('**The paper-and-decision word list, Unit 4\'s six:** _exposure · concentration · a stress test · a numbered assumption · a correlated risk · headroom_. ⚠ **Twenty-four items now.** **It runs to Unit 12 and is collected in the Unit 12 key.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Gap', '1', '2', '3', '4', '5', '6', '7', '8'], [['**Answer**', '**B**', '**C**', '**D**', '**B**', '**A**', '**B**', '**C**', '**D**']], [0.9, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(table(['Gap', '9', '10', '11', '12', '13', '14', '15'], [['**Answer**', '**B**', '**B**', '**D**', '**D**', '**A**', '**C**', '**C**']], [0.9, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Why, where it is a collocation and not a rule.**  **1 carries** — *a business carries risk*; **holds** and **takes** are both grammatical and neither collocates.  **2 put** — *put a figure on* is fixed.  **3 quantified** — **numbered** is the distractor and it is what the unit does to assumptions, not to risks.  **4 owns** — *nobody owns it* is the unit\'s own phrase.  **5 common practice** — **usual** and **normal** are grammatical and *common practice* is the set phrase.  **6 systematically misleading** — an adverb is needed before an adjective.  **7 looks** — ***looks survivable*** takes a bare adjective; **appears to** needs *be* and **seems like** needs a noun.  **8 share a cause** — the unit\'s own collocation.  **9 named** — *the weakest named by the writer*.  **10 arrived at** — *a figure is arrived at*; **come to** needs a different preposition and **reached to** is wrong.  **11 set out** — *set out what would happen*; **lay out** would need *lay* to be *lay*, and **set down** is for rules.  **12 stay** — *it does not stay where it is put*.  **13 works its way** — fixed.  **14 account for** — *account for its origin*; **vouch** needs *for* and a person.  **15 hand it over** — the unit\'s own phrase, from 4.6.'));
out.push(p('⚠ **The marking note for Part 4, and it is the most useful thing to say about this part:** ⚠ **three of the four options are usually grammatical, so a learner who tests for grammar will narrow four to three and then guess.** **The deciding question is *what goes with what*.** ⚠ **Gaps 7, 10 and 14 are the ones where grammar and collocation pull apart**, and they are worth going through on the board.'));
out.push(stage('6', 'Write with help – sample exam answer (133 words)'));
out.push(sample(null, [
  '**RISK NOTE: MOVING TO TWO DELIVERY DAYS. B. Nassif, 19 March.**',
  '**The number.** On current terms — the same four vehicles, the same drivers and no change to the order book — two delivery days would carry about ninety per cent of current volume. The range I have planned to survive is seventy to a hundred per cent.',
  '**Priced.** Overtime on the two days is about eleven thousand a month, from the January and February wage sheets. ⚠ **The weakest assumption is the loading time, which comes from one week in February and February is a thin month.**',
  '**Not priced.** ⚠ **This is real and I am not going to invent a figure for it.** Three customers take delivery daily because they have no storage. They would hold stock, or they would find somebody who delivers daily.',
  '**Yours.** ⚠ **Whether we are a business that delivers when customers want or when it suits our vehicles.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number and a range, labelled', '✓ *planned on* and *planned to survive*'],
  ['One priced risk with its weakest assumption named', '✓ ⚠ **and the reason is given in six words: *February is a thin month***'],
  ['One risk refused a figure, with what happens instead', '✓ two steps, and the second is the one that costs'],
  ['One risk handed to the reader, with no recommendation', '✓ ⚠ **and it is a question of identity, not of money, which is what 4.6 asks for**'],
  ['120 to 140 words — count them', '✓ 133'],
], [3.4, 2.6]));
out.push(p('⚠ **Marking the exam task.** **Content: four points, all present (8).** **Organisation: headed sections, the handed-over risk last (4).** **Language: report register; no *I think*; the refusal in one sentence and undefended (4).** **Range and accuracy (4).** ⚠ **Two faults specific to this task.** **First, a learner who prices all four risks has not done the unit and loses two content marks.** ⚠ **Second, a learner who hands over something costable** — *whether to buy a fifth vehicle* — **has handed over a purchase and not a question, and that also loses two.**'));
out.push(stage('7', 'Write freely – sample (236 words)'));
out.push(sample(null, [
  'A man called Fouad has been printing our labels at home for eleven years and almost nobody in the company knows.',
  'What happened was that the label printer broke in 2014 and the replacement was eight weeks away and Fouad, who was then a storeman, had a machine at home that his brother used for wedding cards. He printed a fortnight of labels on it. The replacement arrived, and the replacement is slow and jams on the gummed stock, so Fouad went on printing the gummed ones at home. Nobody told him to and nobody told him to stop.',
  'He brings them in on a Monday in a box. He is paid nothing extra for it. When I asked him about it two years ago he was embarrassed, because he thought I was asking whether he was using company stock, which he is not; he buys the stock himself and submits a receipt for about four thousand a month, which goes through as consumables.',
  'If the volume doubled it would stop working immediately. His machine does about nine hundred a week and he is at the top of it.',
  'It is in no document. There is no supplier, no contract, no second source and no price. The receipts are the only trace and they say consumables.',
  'He is sixty-one. He has said twice, lightly, that he will not do it for ever, and both times somebody laughed.',
]));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to read their workplace\'s worst fortnight to somebody inside it and ask what happens at double the volume.** ⚠ **This is the single most productive homework in Book 1 and it works almost every time**, because the person asked has usually never been asked. **Collect the exposures, not the conversations** — **and expect at least one, like the sample, to be something a person has been quietly paying for themselves.**',
], C.lblue, C.navy));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 4 check'));
out.push(p('**A  Language.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'b', 'a', 'b', 'b', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q4 is the unit\'s sentence in a single question.** *His clause does not care why we are late* — ***why* and not *that* or *if***, because the clause is indifferent to the reason and not to the fact. **A learner who answers *that* has written a clause that does not care whether we are late, which is a different and much better clause.** ⚠ **Q7 is the third conditional again, and it is in the check because the stress case cannot be written without it:** *had we been late in August, the damages would have run anyway.*'));
out.push(p('**B  Listening (Track 4.15).**   **The third thing about August:** ⚠ **the water — the pressure drops for three weeks and the hose at the gate will not fill the tank, and the press cannot run without water for the glue.**   **How long it has been happening:** ⚠ **five years** (and four years out of five).   **What is done about it:** ⚠ **it is carried in drums from the second store, by Abu Yasser and whoever is on.**   **How long that takes a night:** ⚠ **about forty minutes.**   **What happens at eleven hundred a month:** ⚠ **it cannot be done on drums** — **four hundred can; eleven hundred needs a tank, a pump and somebody whose job it is.**   **Whose exposure it is:** ⚠ **nobody\'s — and that is why it was not in the note.**'));
out.push(p('**C  Reading.**  ⚠ **She would have taken Ms Tannous\'s four years of orders, averaged them, applied a probability she made up, and written about a hundred and fifty thousand.** ⚠ **It would have been in a summary by April and in somebody\'s sentence in September, and its origin would have been an afternoon in March and a feeling.** ⚠ **The boundary: the part does not argue that the contract should be refused on her account** — **paragraph 9 asks for a cap, a telephone call and a letter, and the letter is the whole of what this part asks for.** **A risk you cannot price must not be used to carry an argument a figure could not carry.**'));
out.push(p('**D  Writing – sample (108 words).**'));
out.push(sample(null, [
  '**The number.** On current terms — the same two vans, the same drivers, no change to the round — Saturday collections would cover about eighty per cent of what Monday covers. The range I have planned to survive is sixty to ninety.',
  '**The weakest assumption.** The eighty per cent comes from one Saturday in January, and January is the quietest month we have.',
  '**Not priced.** ⚠ **This is real and I am not going to invent a figure for it.** Two drivers have families and a Saturday is a Saturday. If we do this, one of them will leave within a year, and he is the one who knows the Ghouta round.',
  '**Yours.** ⚠ **Whether we are a six-day business.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the mark for the last gap only for *nobody\'s*** — *the warehouse* **and** *Abu Yasser* **are both wrong and both will be written**, and the whole of 4.7 turns on the exposure having no owner.',
  '**C  Reading — 4 marks:** the method of inventing the figure (1) · where it would have ended up (1) · the boundary, that it argues only for a letter (1) · ⚠ **the general rule — a risk you cannot price must not carry an argument a figure could not (1).**',
  '**D  Writing — 7 marks:** a number and a labelled range (2) · a weakest assumption with a reason (2) · a refusal in one sentence with what happens instead (2) · ⚠ **a handed-over risk that cannot be costed (1)** — **and no mark for a handed-over purchase.**',
  '**Total 25.** ⚠ **The profile to expect: strong A, B and C, and D split exactly down the middle of the class** — **the learners who can quantify lose the refusal, and the learners who are uncomfortable with figures lose the number and the range.** **Both halves are half-taught and the unit needs both.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Three faults to watch, and the remedy for each. First, the half-taught unit. A class that enjoys 4.1 to 4.3 will leave able to number assumptions and unable to refuse a figure, and the harm is specific: they will invent numbers for the risks that have no units, and those numbers will outlive them. The remedy is to mark 4.4 and 4.6 as hard as the quantified cycles, and to use the sample in 4.4 that shows exactly how a figure would have been faked — learners recognise the motive, which is wanting the row to match the others. Second, the closed question in 4.7. "Is August all right?" gets "fine", truthfully, and the exposure stays hidden; "what happens in August?" gets the drums. Run the closed version in the role play first so the class hears the difference rather than being told it. Third, and this one needs care: the unit can be heard as criticising the people who have been absorbing exposures. Abu Yasser has done his job perfectly for five years and the unit says so; the finding is structural, not personal. Some learners will recognise themselves as the absorber — the woman with the payroll spreadsheet, the man printing labels at home — and the right response is not sympathy but the four questions: what happens, for how long, at the new volume, and whose is it. Naming an owner is what turns forty minutes of somebody\'s goodwill into a tank, a pump and a line in a job description, and all three of those can be costed, which is how an invisible risk re-enters the kind of note the rest of this unit teaches.'));
out.push(sp());
out.push(p('_Unit 5 — **Policy, Not Procedure**: the difference between a rule and an instruction, who may make each, and what a rule does when nobody is watching._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 4 · Answer Key');
module.exports = out;
