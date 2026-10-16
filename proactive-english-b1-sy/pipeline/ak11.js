// Proactive English B1 · Syria Edition · Book 1 · Unit 11 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 11  Defining and Adding — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Two commas are the whole unit.** 11.1 and 11.2 are one lesson taught twice, from the two sides, and the class does not understand either of them until it has seen both. Do not let 11.1 end with the commas filed as punctuation: _the nurse who records her own errors_ and _the nurse, who records her own errors,_ are two different facts about the world, and the second one is false.',
  '**The organising idea:** a relative clause is where the information somebody left out goes. 11.2 is about the clause Samira had not written for eight months, 11.6 is about the clause nobody has ever written about Umm Kinan, and 11.7 is about six clauses on a page Bassel had had for five weeks and had skipped.',
  '**It runs on the Unit 10 homework** — one sentence from the student\'s own writing containing _who_, _which_ or _that_, and one place where two short sentences should have been one. 11.1 opens on the first and 11.4 on the second. Without them the two cycles have nothing on the board, so collect them in the lesson before.',
  '**11.5 is the cycle to protect.** The class has been dropping relative pronouns correctly by ear since Unit 1. The cycle names what they already do, and the point is not the rule but Jad\'s last paragraph: a construction they could not have named is in thirty-one of their own sentences. Students who believe they cannot write English are wrong, and the evidence is in their own handwriting.',
  '**Two threads land here.** **Fares** is one line in 11.2, in the middle of somebody else\'s cycle, and it is deliberately small: September is agreed, two days a month, in writing, for a year, and he told his own company before he signed. And **Rasha** finds, in 11.1, that the minutes she wrote herself have the wrong commas in the one sentence that explains why the trial happened to her.',
], C.lblue, C.navy));

// ===================== 11.1 =====================
out.push(pb());
out.push(h2('11.1  The nurse who records her own errors'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — six sentences from the class\'s own Unit 10 homework. Ring the commas before you ask anything else, and then ask the one question: **which one**, or **extra**? In a first run about half the sentences have no commas and are right, two have two commas and are right, and one or two have a single comma, which is the only answer that is always wrong.'));
out.push(A('**b** **1** which one   **2** extra information   **3** which one   **4** extra information'));
out.push(A('Items 3 and 4 are the pair to read aloud, because they are about the same room and only one of them tells you there is more than one room in play.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – two commas.'));
out.push(A('**b** **1** That there is more than one nurse, and that this is the one who records her errors — it says **which** nurse.   **2** That the sentence in the minutes is the one **with** commas, and that she wrote the minutes herself, so the wrong version is hers.'));
out.push(NOTE('The sentence to stop on is Rasha\'s last one: _the commas are wrong and nobody will ever notice, and the sentence without them is the only sentence in those minutes that explains why this happened to me and not to her._ That is the argument for the whole unit and it is not a grammar argument. Punctuation that nobody checks is carrying the reason a thing happened, and the only person who can put it right is the person who meant something by it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The man who signed it left in March._',
  '**2** _The report that went to an empty post was never read._ (or _which_)',
  '**3** _The room that has no switch is 14._',
  '**4** _The seal that had been splitting was on the second door._',
  '**5** _The nurse who had kept a record got the trial._',
]));
out.push(A('All five are defining and none of them takes a comma. Ask the class, for each one, **how many** of the thing there are: more than one man signed things, more than one report was filed, there are fourteen rooms, there are two chambers, there are two night nurses. That question is the test, and it is faster than any rule.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The man signed it. He left in March.',
  '**B:** The man who signed it left in March.',
  '**A:** How many men are there?',
  '**B:** More than one — that is why there are no commas.',
  '**A:** Any extra pronouns?',
  '**B:** No. _The man who he signed it_ would be wrong, because _who_ is already the subject.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Expect two or three doubled pronouns in a first run — _the man who he signed it_, _the room that it has no switch_ — and say where they come from: in Arabic the pronoun stays in the clause, so this is a transfer error and not carelessness. Students who are told that stop making it in about a week; students who are simply corrected keep making it for a year.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My sentence was "the engineer, who checked the second chamber, signed the sheet." It is adding, with two commas, and the commas are wrong, because four engineers checked chambers that week and the sheet only tells you which one if the clause defines. There are four engineers, so: the engineer who checked the second chamber signed the sheet._',
  '**b** _My partner\'s was "the form, which has no box for equipment, was returned." She has eleven forms in front of her. With the commas it says there is one form, and the sentence she needs is the one that tells a reader which of the eleven came back._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda put two sentences on the board: the nurse who records her own errors has been given a trial, and the nurse, who records her own errors, has been given a trial. Jad said the difference is two commas, and Lubna said what the two commas do: the first tells you there is more than one nurse and that this is the one who records her errors, so it is telling you which nurse; the second says there is one nurse, you already know who she is, and by the way she records her own errors — the clause is extra and you could take it out and the sentence would still say what happened. Rasha said there are two nurses on those nights, so the first sentence is the true one. And then she said she had just realised which one is in the minutes, because she wrote them: "Sister Barakat, who had kept a record since January, presented it to the committee", with commas, which says there is one of her and that she incidentally keeps records. What is true is that there are two night sisters, and the one who had kept a record got a trial, and the one who had not had been getting the same errors for fourteen years and nobody knew. So the commas are wrong, nobody will ever notice, and the sentence without them is the only sentence in those minutes that explains why it happened to her and not to the other one.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The nurse which kept a record. → ✓ **who**.   ✗ The man who he signed it. → ✓ delete _he_.   ✗ The room that it has no switch. → ✓ delete _it_.   ✗ The nurse, who records her own errors, has a trial _(two nurses)_. → ✓ no commas.   ✗ one comma. → ✓ two, or none.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That there is one night sister, that the reader knows who she is, and that she happens to keep records — the clause is additional and could be removed without changing the sentence.'));
out.push(A('**2** Two. One had kept a record of her own errors and one had not; the one who had has a trial, and the one who had not has had the same pattern for fourteen years and had always assumed it was her.'));
out.push(A('**3** That one nurse was conscientious — rather than that one nurse wrote things down, which is the actual difference and the reason the trial exists.'));
out.push(A('The letter is a model of a thing students think cannot be done: asking for a correction to **your own** sentence. It works because of the first line — _I wrote those minutes myself_ — and because the last paragraph argues from the reader in September and not from the rules of punctuation. Nobody acts on "the commas are wrong". Everybody acts on "in September somebody will read this and conclude the wrong thing".'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of department · **Subject:** The report of 14 May — two commas',
  'Dear Sir,',
  'I wrote that paragraph myself and I am asking for a correction to a sentence of my own.',
  '**What I wrote.** "The engineer, who checked the second chamber, signed the release sheet."',
  '**What it means as written.** That there is one engineer on this contract, that you know who he is, and that he happens to have checked the second chamber. The clause is additional and could be removed without changing the sentence.',
  '**What is true.** There are four engineers on the contract. Three of them checked chambers that week and one of them checked the second chamber, and the release sheet was signed by that one.',
  '**The sentence I ask for.** "The engineer who checked the second chamber signed the release sheet." No commas.',
  '**Why it matters more than it looks.** Without the commas the sentence says who checked what. With them it says that an engineer signed something, which is true of every sheet in the file, and in an audit somebody will read my paragraph and conclude that nobody knows which of four men looked at that chamber.',
  'Yours faithfully, M. Nasr',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**To:** the ward manager · **Subject:** Minutes of 29 May, item 4 — one sentence',
  'Dear Madam,',
  'I took those minutes and I am asking for a correction to a sentence of my own.',
  '**What I wrote.** "Sister Barakat, who had kept a record of her own errors since January, presented it to the committee."',
  '**What it means as written.** That there is one night sister, that you know which one, and that keeping records is something she happens to do. Both commas can come out with the clause between them and the sentence still stands, which is the test for whether a clause is additional, and here it is not.',
  '**What is true.** There are two night sisters on that ward. One of them had kept a record since January and one of them had not. The one who had has a three-month trial.',
  '**The sentence I ask for.** "The night sister who had kept a record of her own errors since January presented it to the committee." No commas.',
  '**Why it matters more than it looks.** With the commas, the record-keeping is a detail about a person. Without them, it is the difference between the two of us, and it is the only thing in those minutes that explains why one of us has a trial and the other has fourteen years of the same errors and no file. In September somebody will read item 4 and decide which of those two sentences they were told.',
  'Yours sincerely, R. Barakat',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The one who had has a three-month trial." No adjective, no complaint, and the whole case is in it._   ✓ _"I think the commas are wrong" in paragraph two — you say what they mean three lines later, so delete the sentence that only says they are wrong._   ? _What will a stranger conclude?_ — the last paragraph answers it, and it is the only paragraph that will get the correction made.'));
out.push(S('Stage 7R · Share'));
out.push(A('More than half the room, every time. Then ask the second question — how many of those sentences are in a document somebody else will read — and write the two numbers on the board. The second number is usually a third of the first, and it is the one to end on: a wrong comma in a notebook costs nothing and a wrong comma in minutes costs somebody their reason.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['From my brother\'s reference, written by his head teacher: "The pupils, who completed the extra paper, were entered in June." With the commas it says the whole class did the extra paper and the whole class was entered. Without them — "the pupils who completed the extra paper were entered in June" — it says that only some did, and that those were the ones entered, which is what happened: nine out of thirty-one. The version with the commas is the one in his file, and it makes him one of thirty-one instead of one of nine.']));

// ===================== 11.2 =====================
out.push(pb());
out.push(h2('11.2  Bassel, who has run the shop for nineteen years'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — one clause per student about the person on their left. Stop anybody who gives **one** comma, every time, without discussion: one comma is the only fault in the unit that is always wrong, and a class that is stopped on it four times in six minutes stops making it.'));
out.push(A('**b** **1** _Lubna, who is in her fourth year, measured the site twice._ — commas.   **2** no commas — the clause says which student.   **3** _My sister, who has three children, told me to leave._ — commas, if you have one sister; with several sisters the same words with no commas are correct and mean something else.   **4** _Mazen, whose counter is in Shaalan, has kept a fault book since September._ — commas.'));
out.push(A('Item 3 is the one to argue about. The sentence is not right or wrong on the page; it is right or wrong about the speaker\'s family, and the class has to ask a question about the world before it can punctuate it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a clause with no commas round it, in a letter she wrote in April.'));
out.push(A('**b** **1** Without commas it says: of her several sisters, the one with three children. With them, the three children and the rent are information she is adding because she had left it out.   **2** That September is agreed — two days a month, in writing, for a year — and that he told his own company on the Monday, before he signed anything.'));
out.push(NOTE('Fares\' four lines are the end of a thread that started in 1.5 and has run through 4.7, 7.4 and 8.6, and they are deliberately in the middle of somebody else\'s cycle, said quickly, with Rasha saying only his name. Do not build a lesson round it. If the class wants to stop, let it stop for ninety seconds, and notice what is in the sentence: not the post, not the money, but that he told his own company first — which is the thing he would not have done in February, and the only part of it he mentions twice.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Bassel, who has run the shop for nineteen years, crossed nine rules out._',
  '**2** _Room 14, which has no switch of its own, is at the end of the corridor._',
  '**3** _My sister, who had three children and a rent of a hundred and ten thousand, did not leave that job._',
  '**4** _The second trolley, which went to the workshop on 2 February, has not come back._',
  '**5** _Fares, who has trained six representatives in car parks, has one day in June._',
]));
out.push(A('All five subjects are already unique — a name, a numbered room, _my sister_, _the second trolley_ — so the clause **cannot** be defining and the commas are not a choice. That is the shortest way to teach the whole cycle: if the noun already picks out one thing, any clause after it is adding.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Somebody who gave you advice you did not take.',
  '**B:** My uncle, who had done the same work for twenty-two years and had been made redundant from it twice, told me in January not to sign anything without reading the page before the conditions.',
  '**A:** Is that something you had left out before?',
  '**B:** The twice. I have told four people about his advice and I have never once said that it had happened to him twice.',
  '**A:** Two commas?',
  '**B:** Two.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Five or six out of eight contain something the speaker had left out, which is more than the cycle promises and is the reason the task is worth running in public. The clauses that are **not** omissions are usually the ones about machines and documents; the ones about people nearly always are.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My brother, who had been paying for the medicine out of his own wages since February, was the person I wrote about in Unit 6 as "unhelpful". I left the clause out because the paragraph was about me getting no answer from the office, and the clause makes him the person who had already answered._',
  '**b** _It changes who was right. With the clause in, the sentence about my waiting four weeks is still true and it is no longer the point of the paragraph._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samira has found something in the letter she wrote to her sister and did not send. She had written: my sister who had three children and a rent of a hundred and ten thousand did not leave that job for eleven months — with no commas, in April, and she has only seen it this week. Lubna asked how many sisters she has and she said one, which means the sentence is wrong: with no commas it says that of her several sisters, the one with three children. With the commas it is what she meant, and it is a different sentence in a way that matters, because the three children are not what distinguishes her sister from anybody — they are the thing Samira had not thought about for eight months. Jad said the commas carry the apology, and Samira said they carry the whole apology: without them the children are a label on one of several sisters, and with them they are information she is adding because she had left it out, and the two commas are the sound of somebody stopping to say something they should have said earlier. Then Fares said something small: September is agreed, two days a month, in writing, for a year, and he told his own company on the Monday before he signed anything, which is the part he would not have done in February. Ms Huda asked him to put it in a sentence with two commas in it, and he said: Fares Kayyali, who has trained six representatives in car parks, is going to be paid to do it two days a month from September.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Bassel, that has run the shop, crossed nine out. → ✓ **who**.   ✗ Room 14, that has no switch, … → ✓ **which**.   ✗ The report, I read in April, was never actioned. → ✓ **which** I read.   ✗ Bassel who has run the shop for nineteen years crossed nine out. → ✓ two commas — the name is already unique.   ✗ one comma anywhere. → ✓ two, or none.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because she has one sister and her sister is the person reading the letter: with no commas the clause is choosing between several sisters, as though the reader needed telling which one was meant.'));
out.push(A('**2** _You, who had been doing that job for nine years and knew what every one of those women earned, understood something about the clinic that I never asked you a single question about._ It concedes that her sister had knowledge Samira never asked for — which is a bigger concession than the one about the commas.'));
out.push(A('**3** Saying that the advice was wrong. It was right, her sister has said so twice, and Samira would rather she stopped.'));
out.push(NOTE('The last paragraph is the hardest thing in the unit and the reason to teach the cycle at all. _I am not asking you to say that the advice was wrong_ refuses the ending the letter has been building towards, and what is left is the only honest claim: _I gave it from a flat with one person in it._ Read it aloud and then ask the class what the letter would be worth with a last line asking to be forgiven.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO MY BROTHER, ONE CLAUSE LATE** · M. Hariri · 7 June',
  'I wrote a page about the medicine office in April and I have rewritten one sentence of it.',
  '**What I wrote.** "My brother who lives in the same street did not go to the office for me."',
  '**What I should have written.** "My brother, who had been paying for the medicine out of his own wages since February, did not go to the office for me."',
  '**What the difference is.** Without the commas, living in the same street is what tells you which brother I mean, as though I had several and you needed to know. I have one brother and you are him. With the commas, the February is information I am adding — and I am adding it because for four months I described my own waiting to anybody who would listen and never once said who had been paying.',
  '**And one more clause I had left out.** You, who had asked me twice what the medicine cost and had been told to stop asking, did not mention it again in my hearing.',
  '**What I am not doing.** I am not asking you to say that you should have gone to the office. You should not have, and you had already done the thing that mattered. I am saying that my account of those four months had one clause missing and it was the clause with you in it.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**TO MY SISTER, WITH TWO COMMAS** · S. Deeb · 2 June',
  'I wrote you a letter in April and did not send it, and I have rewritten one sentence of it, and now I am sending both.',
  '**What I wrote in April.** "My sister who had three children and a rent of a hundred and ten thousand did not leave that job for eleven months."',
  '**What I should have written.** "My sister, who had three children and a rent of a hundred and ten thousand, did not leave that job for eleven months."',
  '**What the difference is.** Without the commas, the children and the rent are what tell you which sister I mean, as though I had several and you needed to know. I have one sister and you are her. With the commas they are information I am adding, and I am adding it because for eight months I did not think about either of them, and I told you thirty times to leave a job without once saying the words "three children" out loud.',
  '**And one more clause I had left out.** You, who had been doing that job for nine years and knew what every one of those women earned, understood something about that clinic that I never asked you a single question about.',
  '**What I am not doing.** I am not asking you to say the advice was wrong. It was right, you have said so twice, and I would rather you stopped. I am saying that I gave it from a flat with one person in it, and that two commas is the whole of what I understand now and did not then.',
  '**Am I going to send it?** Yes. On Thursday, by hand, with the April one folded inside it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have one sister and you are her." Seven words, and the whole grammar point is in them without a grammatical term._   ✓ _"My sister, who I told to leave her job was in a difficult position" — one comma, and the clause never closes._   ? _What are you not asking for?_ — the page answers it, and it is the paragraph that would be deleted first by anybody wanting to be liked.'));
out.push(S('Stage 7R · Share'));
out.push(A('Money, children, time, illness. Every clause on the board will be about one of the four, and every one was left out of a sentence that was otherwise true — which is the finding to write up: we do not leave out the things that make us look bad, we leave out the things that make somebody else\'s situation theirs.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave it to him. The clause was: "my brother, who had been paying for the medicine out of his own wages since February, did not go to the office for me." He read it twice and said that the February was wrong, that it had been since the middle of January, and that I had never asked. Then he said I could keep the sentence if I changed the month. That is the only correction I have ever had to a piece of writing where the person corrected a fact in my favour.']));

// ===================== 11.3 =====================
out.push(pb());
out.push(h2('11.3  Whose, where and when'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The sentences to use are in the models of 7.5, 9.6 and 10.6, which all contain _in which_ or _of which_. The second half of the task is the one that teaches: at least two of the six are **better as two sentences**, because they are telling a story and not labelling a thing, and the class should be allowed to say so.'));
out.push(A('**b** **1** whose   **2** where   **3** when   **4** whose   **5** where'));
out.push(A('Item 1 is the one students refuse, because they have been told _whose_ is for people. Do not argue: ask for the alternative, write _the room of which the switch is next door_ on the board, and let the room look at it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a key to her survey drawings.'));
out.push(A('**b** **1** Because a key is **scanned**, not read: somebody is standing in a corridor looking for the room they are in, and if the information about the switch is in a second sentence they will stop at the first.   **2** That he thought it was only for people — and, at the end, that _whose_ is not _who is_.'));
out.push(NOTE('This cycle is the answer to a question the class has been asking since Unit 2: if short sentences are better, why does published English have long ones? The answer is **document type**, not sophistication. A story is read from the beginning and takes full stops; a key, a label, a caption, a legend, a price list and a set of definitions are scanned, and everything about one thing has to be on the one line. Say it in those words, because students who think long sentences are "educated" write them everywhere, and students who think they are always wrong cannot write a key.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Room 14, whose switch is in Room 13._',
  '**2** _The stairwell where the fire door swings._',
  '**3** _2009, when the partitions came out._',
  '**4** _The second chamber, whose seal was split._',
  '**5** _The man whose name is on the report._',
]));
out.push(A('Items 1, 3 and 4 take commas and items 2 and 5 do not, and the reason is 11.1 and 11.2 and nothing new: _Room 14_, _2009_ and _the second chamber_ are already unique, and _the stairwell_ and _the man_ are being picked out. The class has to carry the comma rule into this cycle unprompted, and some of them will not, which is what Stage 3 is for.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Room 14. Its switch is in Room 13.',
  '**B:** Room 14, whose switch is in Room 13.',
  '**A:** Is the one-entry version better here?',
  '**B:** Yes, because this is a key and not a report. On a drawing somebody needs it on the line that says Room 14.',
  '**A:** February. The trolley went down then.',
  '**B:** February, when the trolley went down. — No, worse, because this is a story and the trolley going down is news. Two sentences.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Two of the eight should stay as two sentences: _February. The trolley went down then._ and _Bay five. It cannot be seen from the station._ Both are narrative — something happened, and something follows from it — and compressing them into a label buries the event. The other six are descriptions of objects and belong in one entry.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Bag 4, whose fifteen telephones are all the same model. · The counter where the lamp is clamped to the shelf. · September, when I started the fault book. · The two customers whose handsets came back twice._',
  '**b** _My partner\'s third entry was "the week when the supplier stopped answering", and that should be two sentences, because the supplier stopping is the whole point and a week is not a thing you label._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna has to write the key to her survey drawings and has been fighting with six sentences for two days. One of them was: Room 14. The switch of this room is in Room 13. The wire of the second switch is on the outside of the wall. Two sentences, and the second is about the first. Mazen asked why not leave it as two, since she told us two years ago that short sentences are faster, and she said because this is a key: somebody is standing in a corridor with a drawing in one hand, looking for the room, and they do not read a key, they scan it until they find the thing that describes the room they are standing in — so if the information about the switch is in a second sentence, they will stop at the first. Her version is: Room 14, whose switch is in Room 13 and whose second switch has an external wire. One entry, one room, everything in it. Jad said he thought whose was only for people, and she said so did she until Tuesday — it works for things, and there is nothing else that does the job, because "the room of which the switch" is correct English and no human being has ever written it on a drawing. Where and when save her about forty words across six entries. And she had written "who\'s" once and only found it by reading it aloud, which she says is the only way anybody ever finds it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the room where I left it in → ✓ delete _in_.   ✗ the day when I saw him on → ✓ delete _on_.   ✗ the room who\'s switch → ✓ **whose**.   ✗ the company where decided → ✓ the company **which** decided.   ✗ the room of which the switch is next door → ✓ correct, and nobody writes it: **whose**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four — the 1962 structure, the 1974 extension, Room 13 / Room 14, and the south elevation. Each one attaches a **feature belonging to the thing** to the line that names the thing, which is the whole purpose of the word.'));
out.push(A('**2** She leaves the space **blank** rather than guessing, and says how many blanks there are: two.'));
out.push(A('**3** Not a condition survey and not a recommendation. Every entry says what is there and the year it got there, and nothing else.'));
out.push(A('The two blanks are the professional point of the cycle. A key with two admitted gaps can be used by somebody who was not there; a key with two guesses in it is worthless, because the reader cannot tell which two entries to distrust, so they have to distrust all of them. Say that sentence in exactly those terms — _a reader who finds one guess has to distrust the whole page_ — and then connect it to the limitations paragraph in 7.5, which is the same discipline in a different document.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**KEY TO THE REPAIR BOOK, SEPTEMBER–APRIL** · counter 2, Shaalan · M. Hariri · June',
  '**Bag 4** — the fifteen repairs whose handsets are all the same model and whose adhesive line is uneven under a lamp. Entries 11, 14, 17, 22, 26, 31, 34, 38, 41, 45, 49, 52, 55, 58, 61.',
  '**The grey shelf** — the shelf where units wait for a part that has been ordered. Nothing on it is fault-logged until the part arrives.',
  '**September** — the month when the book was started. There is no record of anything before it and I have not estimated any.',
  '**The two returns** — the two customers whose handsets came back a second time with the same fault, both from the same shop in Mezzeh.',
  '**What this key is not.** It is not a measurement of the adhesive and it is not a claim about the supplier. Where I do not know the purchase date I have left the space blank rather than guessing. There are four blanks.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**KEY TO SHEETS 1–3** · survey of 14 Sharia al-Jalaa · L. Sweidan · June',
  '**1962 structure** — the original building, whose four floors, single staircase and outward-opening doors are all as built. Doors 76 cm.',
  '**1974 extension** — the fourth-floor extension over the yard, whose render contains a different sand and has weathered separately. Visible from the street. Not on any drawing held by the university.',
  '**2009 conversion** — the year when four rooms were divided into nine. Partitions shown dashed.',
  '**Room 13 / Room 14** — two rooms made from one accounts office, whose single lighting circuit and single switch were not altered in 2009. The second switch in Room 14 has an external wire and is shown with an asterisk.',
  '**The stairwell** — the stairwell where the lift shaft was begun and abandoned. Now a store with a steel door and no internal handle.',
  '**South elevation** — the three rooms whose windows were not replaced in 2009 and which run 4–5 °C hotter than the north side in summer. Shaded on sheet 2.',
  '**What this key is not.** It is not a condition survey and it is not a recommendation. Where I do not know a year I have left the space blank. There are two blanks.',
  '**What I found reading it aloud.** One _who\'s_ in the stairwell entry, and two entries that began with the year instead of the thing, which meant that somebody looking for the stairwell had to read nine words before finding out whether the line was about it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Not on any drawing held by the university." One line, and it is the sentence somebody will need in two years._   ✓ _"The store whose door it opens off the hall" — the pronoun is back in and the preposition is doubled._   ? _How many blanks are there, and are they marked?_ — four, and three of them are marked; the fourth is an entry that quietly stops.'));
out.push(S('Stage 7R · Share'));
out.push(A('Two or three _who\'s_, every time, and all of them found by reading aloud rather than by reading. The second question is the harder one and the show of hands is smaller: leaving a blank where you do not know is a professional habit and not a language skill, and this is the only place in the book where it is marked.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**KEY TO THE NIGHT BOOK** · ward 4 · R. Barakat. **The block** — four or five consecutive nights, whose fourth and fifth nights are counted separately in the column marked with a dot. **The dot** — the mark where a round finished after 02.30. **1 June** — the day when the three-night trial started; nothing before it is comparable. **The second sheet** — the night sister whose entries are kept separately at her own request. **What this key is not.** It is not a record of causes. Where I do not know whether the second trolley was on the ward I have left the space blank. There are nine blanks, all in February. — Read aloud: I had written "who\'s entries".']));

// ===================== 11.4 =====================
out.push(pb());
out.push(h2('11.4  Two sentences or one'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — the second half of the Unit 10 homework, one place per student where two short sentences should have been one. Then run it the other way with three joined sentences from this book: 7.5\'s evidence paragraph and 10.6\'s minutes both have sentences that should be split, and the class finding them in the **models** is the point of the task.'));
out.push(A('**b** **1** join — the post being empty is a label on the post.   **2** split — two events, and the four words are the news.   **3** join — February is a label on the trolley.   **4** split — the lights and the torch are two events.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – joining sentences that should be separate, and splitting ones that should be joined; in practice the class is now doing both.'));
out.push(A('**b** **1** Unit 2: use full stops, five short sentences, no _and thens_. Unit 11: **split when both halves are news, join when one half is about the other.** The second is not a reversal of the first; it is the other half of it.   **2** That his nine words — _the Harasta road was closed at six and nobody told the depot_ — contain two pieces of news joined with _and_, which is the weakest join there is, and that it should be two sentences with a four-word second one.'));
out.push(NOTE('Tareq giving up his nine words is the moment to mark. That sentence has been his best piece of English since 4.2, he has been praised for it twice in this book, and he takes it apart himself in front of the class without being asked to. Students who think of a good sentence as a possession never revise anything; the useful belief is that a sentence is a tool and a better one replaces it. Say so, and name the earlier praise so nobody thinks it was withdrawn.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** Join: _The report went to a post that was empty._ — the second half is a label on the post.',
  '**2** Split: _She stood up. She said four words._ — two events, and the full stop is the four seconds between them.',
  '**3** Join: _The trolley, which has a broken wheel, went to the workshop in February._ — the wheel is a label on the trolley.',
  '**4** Split: _The lights went out. I found the torch._ — two events, and the second one is what happened next.',
  '**5** Split: _He is sixty-one. He has not answered an email in eleven years._ — the age is not a label here; the eleven years is news and joining it with _and_ makes it an afterthought.',
]));
out.push(A('Item 5 is the one to argue about, and both answers can be defended: _he is sixty-one and has not answered an email in eleven years_ is a fair sentence. Make the class say what each version **claims** — the joined one implies the age explains the email, and the split one does not — and then let them choose. That choice, and not the rule, is the skill the cycle is teaching.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The report went to a post. The post was empty.',
  '**B:** The report went to a post that was empty — join, because the second sentence is a label on the post and there is no event in it.',
  '**A:** And the other version?',
  '**B:** The report went to a post. The post was empty. Which makes the emptiness a piece of news, and it is not; it has been empty since March.',
  '**A:** Which would you send?',
  '**B:** The joined one, and then a second sentence with the actual news in it: nobody read it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The eight split into five joins and three splits, and the three everybody splits are the ones with a surprise in the second half: _she said four words_, _the batch was lost_, _she had known for two years_. That is the test in one line and it is worth putting on the board: **a surprise gets a full stop.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My Unit 7 paragraph had nine full stops and four of them were labels on the same fifteen handsets. Rewritten it has six, and the last sentence is five words: the supplier has not replied._',
  '**b** _My partner had joined "the office closed at two" and "nobody had told the family who were waiting outside" with "and". Two pieces of news, and the family is the one that matters._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda reminded us that in Unit 2 she told us to use full stops — five short sentences, no "and thens" — and Tareq said that was because it is faster and because students think short sentences are for children. Then she said she was going to tell us something that sounds like the opposite, and asked Lubna to read a sentence she had found in Omar\'s page: the report was filed to a post; the post had been empty since March; nobody read it. Omar said three sentences, Unit 2. Lubna said three sentences, and only the third one is news — the first two are both about the same report and the second is about the first, and she had to read all three to find out that nobody read it. So Omar gave the rule with both halves in it: split when both are news, join when one is about the other. Split: she stood up, she said four words — two events, two full stops, and the full stop is the four seconds. Join: the report, which had been filed to a post that had been empty since March, was never read. Then Tareq said his nine words are the other way round. He has been proud since April of "the Harasta road was closed at six and nobody told the depot", and there are two pieces of news in it joined with "and", which is the weakest join there is, and the depot not being told is the whole thing. So it should be two sentences and the second should be four words: the Harasta road was closed at six. Nobody told the depot.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The road was closed at six, nobody told the depot. → ✓ full stop, or _and_, or a semicolon — not a comma alone.   ✗ three clauses stacked in one sentence → ✓ two at most.   ✗ two pieces of news joined with _and_ → ✓ split, and make the second one short.   ✗ the longest sentence last → ✓ the shortest sentence last.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Version A: eight. Version B: one. Version C: four.'));
out.push(A('**2** Four of the eight sentences are labels on the trolley, so a reader has to hold the trolley in their head for five sentences before anything happens to it.'));
out.push(A('**3** _The round was late on all thirty-four nights._ It is the shortest because it is the news, and the paragraph has been arranged so that the reader arrives at it with everything already explained.'));
out.push(NOTE('Version B is the most useful thing on the page, because it is what students produce the week after a unit on relative clauses. It is grammatically correct, it is word for word nearly the same as version C, and it is unreadable — and the diagnosis is exact: by the fourth clause nobody knows what the subject of the sentence is. Give the class that test to use on their own writing and nothing else: **can you say what the subject is by the end of the sentence?**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Version A — all split.** The handsets are all one model. There were fifteen of them. They came in between September and April. They were bought from two shops. The shops are in Mezzeh and Shaalan. The adhesive line is uneven. It shows under a lamp. The supplier was told in April. He has not replied.',
  '**Version B — all joined.** The fifteen handsets, which are all one model and which came in between September and April from two shops, which are in Mezzeh and Shaalan, and whose adhesive lines are uneven under a lamp, were reported to the supplier in April, who has not replied.',
  '**Version C.** Fifteen handsets of one model came in between September and April, all from two shops in Mezzeh and Shaalan. Every one of them has an uneven adhesive line that shows under a lamp. The supplier was told in April. He has not replied.',
  '**What is wrong with A.** Nine sentences and six of them are labels on the handsets. Nothing happens until sentence eight.',
  '**What is wrong with B.** One sentence, five clauses, and by the fourth one the subject has been lost. It is also nearly the same words as C.',
  '**What C does.** Four sentences. Two facts with their labels attached, then the report, then the news, and the news is four words.',
]));
out.push(S('Stage 7 · Write freely (sample, 162 words)'));
out.push(SAMPLE([
  '**WARD 4, THE THIRTY-FOUR NIGHTS** · rewritten in the version C shape · R. Barakat',
  'The second trolley went to the workshop on 2 February with a broken wheel, and there is no form for chasing equipment that has gone to the workshop, so it was not chased.',
  'That left a five-bay ward with one trolley and a drug round that is written for two.',
  'Between 2 February and 31 May the round finished late on thirty-four nights out of ninety-one, by between fifty and eighty minutes, and on every one of those nights the ward had one trolley.',
  'Seven errors were made in that period. Every one of them was on a fourth or fifth night of a block.',
  'The trolley is still in the workshop.',
  '**Full stops before:** 17 in this paragraph. **After:** 5. The original had four sentences that were labels on the trolley and two pieces of news joined with _and_, and the news is now in the two shortest sentences on the page.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The trolley is still in the workshop." Six words at the end, and it is the only sentence in the present tense._   ✓ _"The round, which is written for two nurses, was late, and the trolley had not come back" — a comma alone between two pieces of news, and both of them are news._   ? _Which facts are news and which are labels?_ — the labels are the wheel, the five bays and the fifty to eighty minutes; everything else happened.'));
out.push(S('Stage 7R · Share'));
out.push(A('The counts go both ways and that is the finding: some pages lose full stops and some gain them, and the number was never the problem. Write both columns on the board and total them — in a class of twelve the totals are usually within ten per cent of each other, and the pages are all better.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I read version C to my wife and asked her what the news was. She said: the trolley is still there. Which is the last sentence and six words long, and in the version I wrote in April the same fact was in the middle of the fourth sentence joined on with "and". She also said the thirty-four nights sounded like a complaint, and that the sentence about the seven errors did not, and that she did not know why — and the reason is that the errors sentence has no adverb in it and the nights sentence has "late" twice.']));

// ===================== 11.5 =====================
out.push(pb());
out.push(h2('11.5  The man I met'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Put the pronoun back into all six and read both versions aloud. All six are better without it, and the class will say so before anybody explains why, which is the right order for this cycle.'));
out.push(A('**b** **1** No — _who_ is the subject (the man signed it).   **2** Yes — _the man I met_.   **3** Yes — _the report nobody read_.   **4** No — _which_ is the subject (the report went).   **5** No, not as written: _where_ is not a pronoun you can drop. You can say _the room I work in_, moving the preposition to the end.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – leaving out relative pronouns, in about half of the places where he could.'));
out.push(A('**b** **1** _If the thing is doing the verb, you have to keep the pronoun. If the thing is having the verb done to it, you can drop it._   **2** Two places: not in a non-defining clause (_the report, which I read in April,_ breaks without it), and not after a preposition that has stayed in front (_the post to which it was sent_) — though with the preposition at the end you can.'));
out.push(A('Ms Huda\'s answer to Omar is worth more than the grammar point: _that is exactly right, and you have arrived at it off forty of your own sentences, which is better than being told it._ The cycle is designed so that the rule comes out of the class\'s own data. If you teach it off the board first, it still works and the students learn a rule; taught this way they learn that their own writing is evidence, which is what 11.5 is actually for, and what the last paragraph of the model is about.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _the man who signed it_ — **stays**. The man signed it: subject.',
  '**2** _the man I met at the depot_ — **goes**.',
  '**3** _the four words he said_ — **goes**.',
  '**4** _the report that was never read_ — **stays**. The report was never read: subject of a passive verb, which students find hardest.',
  '**5** _the clipboard I keep behind the door_ — **goes**.',
  '**6** _the post to which it was sent_ — **stays** as written; move the preposition and it goes: _the post it was sent to_.',
]));
out.push(A('Item 4 is the one that catches everybody. A passive verb makes the noun look as though something is being done to it — which it is — but the noun is still the **subject of the clause**, so the pronoun stays. The reliable test is not grammatical: look at the word straight after the noun. If it is a new subject (_I_, _nobody_, _he_, _you_), the pronoun can go; if it is a verb, it stays.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** the man who signed it',
  '**B:** It stays, because the man is doing the verb — the man signed it.',
  '**A:** And this one? the clipboard that I keep behind the door',
  '**B:** The clipboard I keep behind the door — it can come out, because _I_ is doing the verb and the clipboard is having it done to it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Four of the eight can go: _the man I met at the depot_, _the four words he said_, _the clipboard I keep behind the door_, _the question she did not want to answer_. The other four are subjects. And all four of the droppable ones sound better without the pronoun, which is the only reason to learn the rule — a rule that makes writing longer gets ignored, and this one makes it shorter.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _the fault that you are describing → the fault you are describing. · the form that I filled in in March → the form I filled in in March. · the man that she asked → the man she asked._ All three are a word shorter and none of them is less clear.',
  '**b** _My partner had written "the batch, I reported in April, has not been recalled." The pronoun cannot come out of a non-defining clause, and with the commas and no "which" the sentence has no main verb for the batch._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad went through forty of his own forum answers with a pencil because of this unit, and found that he leaves the relative pronoun out about half the time and has never once decided to: the cable you are using, the thing it plugs into, the four screws I mentioned — no "which", no "that", nothing. Lubna asked whether it is correct, and Ms Huda said it is correct, it is normal, and it is what any English speaker would write, and that the rule is short — and she asked Jad for it, because he had the data. He said he had been looking at it for an hour and thought it was this: if the thing is doing the verb you keep the pronoun, and if the thing is having the verb done to it you can drop it. The cable that broke — the cable broke, so it stays. The cable you are using — you are using the cable, so it goes. Ms Huda said that is exactly the subject-object rule and that he had arrived at it off forty of his own sentences, which is better than being told it. Omar asked where you cannot do it, and she said two places, both in this book: not in a non-defining clause, because the report, which I read in April, breaks if you take the "which" out; and not after a preposition that has stayed in front — the post to which it was sent — though with the preposition at the end you can: the post it was sent to. Jad said that is why every one of his works: he never writes a preposition in front of anything, and Ms Huda said nobody does, writing to a stranger at one in the morning, and that it is not a failure of his English but the register, and the right one.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the man I met him → ✓ delete _him_.   ✗ the report nobody read it → ✓ delete _it_.   ✗ the report, I read in April, was… → ✓ **which** I read.   ✗ the man whom I met _(in a message)_ → ✓ _the man I met_.   ✗ the man who signed → ✓ keep _who_; it is the subject.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Thirty-one places in forty answers.'));
out.push(A('**2** _The board, I replaced in March, has the same fault._ He has taken the pronoun out of a **non-defining** clause, where it cannot go, so the sentence is broken — and it has been on the site for seven months and read by about nine hundred people.'));
out.push(A('**3** In sentences about something **the reader is doing** — _the cable you are using_, _the screws I mentioned_, _the one I would check first_. The pronoun disappears exactly where the sentence is an instruction to a person, which is nearly every sentence he writes.'));
out.push(NOTE('The last paragraph of the model is the most important thing in the unit and arguably in the book: _I would have told you last week that I cannot write English._ Thirty-one correct instances of a construction he could not name, in a language nobody has taught him in a classroom. Read it aloud. A large part of what adult learners believe about their own English is an account they have never checked against a page of their own writing, and this cycle checks it in forty minutes with a pencil.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THIRTY SHIFTS AND A PENCIL** · R. Barakat',
  'I went through thirty handover notes of my own and underlined every place where I had written the word "unfortunately" or an adjective about somebody. There were nineteen.',
  '**What I had been doing right.** Every one of the thirty has a time in it. Every one names the person I handed over to. Twenty-six of them give a number rather than a word — _two hours twenty_, not _very late_.',
  '**What I had been doing wrong.** Nineteen adjectives, and four of them are about people: _unhelpful_ twice, _difficult_ once, and one note that says a nurse was "not interested", which I wrote at four in the morning about somebody who had been on for eleven hours. That note is in a file.',
  '**What I notice about where it happens.** Every adjective about a person is in a note written after 03.00, and every one of the notes with numbers in it was written at the end of a round, sitting down.',
  '**And the thing that bothers me.** I would have told you last week that I never write anything about anybody. I have four, in thirty notes, and one of them is about the person who told me in May that she had thought it was her.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**FORTY ANSWERS AND A PENCIL** · J. Attar',
  'I went through forty of my own answers with a pencil and underlined every place where a relative pronoun could have gone and did not. There were thirty-one.',
  '**What I had been doing right without knowing.** _The cable you are using. The thing it plugs into. The four screws I mentioned. The board the connector sits on. The one I would check first._ Thirty-one of those in forty answers, and I had never once thought about it.',
  '**What I had been doing wrong.** Four places where I kept it and should not have — _the fault that you are describing_, which is slower by one word and no clearer — and one place where I took it out and could not: _the board, I replaced in March, has the same fault._ That sentence is broken and it has been on that site for seven months.',
  '**What I notice about where it happens.** Every one of the thirty-one is in a sentence about something the reader is doing. The pronoun disappears exactly where the sentence is an instruction to a person, which is nearly every sentence I write.',
  '**And the thing that bothers me.** I would have told you last week that I cannot write English. I have thirty-one correct examples of a construction I could not have named, in forty answers, in a language nobody has ever taught me in a classroom. And one broken sentence that has been read by about nine hundred people.',
  '**What I have done about it.** Corrected the one. It took forty seconds and it had been there since November.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"It took forty seconds and it had been there since November." The whole argument for counting things, in two clauses._   ✓ _"About nine hundred people have read it" — an estimate, and the page is otherwise exact; say where the nine hundred comes from or cut it._   ? _What would you have told me last week that you cannot do?_ — the model answers it in the last paragraph, which is why that paragraph is in the Writer\'s box.'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost everybody in the room, every time — and the evidence was already written down in their own hand before the lesson started. End the cycle on that and not on the grammar: the rule is five minutes\' work, and the finding is the reason the five minutes were worth spending.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I counted the full stops in thirty sentences of my own work emails. Thirty sentences, four full stops, and twenty-two commas. I would have told somebody last week that I write short sentences, because I have believed that about myself since school. One example I got wrong: "I checked the order, it was not in the file, I asked Hani, he said it had gone to the ministry" — four sentences, three commas, no full stop until the end, and every one of the four is news.']));

// ===================== 11.6 =====================
out.push(pb());
out.push(h2('11.6  Defining and adding, side by side'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Give out the names yourself and do not let anybody choose; half the point of the cycle is that students write about somebody they would not have picked. Two sentences each: one that would tell a stranger **which** person, and one that adds something.'));
out.push(A('**b** **1** defining   **2** adding   **3** defining   **4** adding'));
out.push(A('Items 2 and 4 have names in front of them, so the clause can only be adding and the commas are not a choice. Items 1 and 3 begin with _the student_ and _the nurse_, which are picking somebody out of a group.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Twelve entries for a page that goes to the group starting in September — one entry per person, written by somebody else in the room. And she has asked them to put **nothing in it that the person has not said in this room**.'));
out.push(A('**b** **1** The group starting in September, in their first week, when they do not know one face from another.   **2** That the two clauses do completely different jobs: the defining one is a label for a stranger in a doorway and has to be true of nobody else in the room, and the adding one is what you would tell somebody **after** they had found the right face — nobody needs it to find the person; it is the reason to talk to them.'));
out.push(NOTE('Umm Kinan\'s two lines are the ones to hold the room for: _I have been in rooms for twenty-four years where my defining clause was "the mathematics teacher" and there was never a second clause at all._ She is the student who in 4.6 could not ask a colleague for forty minutes and in 9.3 described eleven minutes with a projector. The cycle gives her, and the room, the one thing a job title cannot: an adding clause. Do not explain it. Read the entry she writes for Yara, which is in the model, and let the class notice that she wrote somebody else\'s.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The one who runs the counter in Shaalan_ · _Mazen, who has mended about 2,300 telephones in nine years,_',
  '**2** _The one who has been doing that job for nine years_ · _My sister, who knew what every woman in that clinic earned,_',
  '**3** _The one who taught me to read a fault pattern_ · _Mr Haddad, who kept the same notebook for eleven years and never showed it to anybody,_',
  '**4** _The man who refused me the form in March_ · _The clerk, who had been told twice that week not to issue it,_',
  '**5** _The one who writes everything down_ · _R. Barakat, who has 118 shifts in a notebook and got a three-month trial out of it,_',
]));
out.push(A('Item 4 is the useful one. The defining clause is the complaint and the adding clause is the information, and a student who can write both about the person who refused them something has learnt most of what Unit 8 and Unit 11 are for. Item 5 — writing both clauses about **yourself** — is the one everybody leaves till last, and it is in the list for that reason.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Somebody who taught you something.',
  '**B:** The one who taught me to read a fault pattern. And then: Mr Haddad, who kept the same notebook for eleven years and never showed it to anybody, taught me to read a fault pattern.',
  '**A:** Is the first clause true of anybody else?',
  '**B:** Of two people I know, so it is not good enough. _The one who repaired radios in the market before 2011_ is true of him only.',
  '**A:** Would he recognise the second one?',
  '**B:** He would recognise the notebook. He would argue about "never showed it to anybody", because he showed it to me, which is how I know about it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Expect half the defining clauses to fail the uniqueness test in a first run, and say so cheerfully: _the one who works hard_, _the one who is always early_, _the one who keeps records_ are all true of several people in any room. Then put the second question and wait: **whose adding clause would they want written about them?** Everybody has an answer. Almost nobody in the room has ever been given one, and that is the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The one who works at the laboratory in Suwayda Street_ is Yara Mansour, who had not spoken English out loud to a stranger for twenty-six years when she came into this room in September, and who said four sentences on the first evening. — _Read to her. She changed one thing: she asked for "and then told us the rest of it three weeks later" to be added, because she said the four sentences on their own make her sound braver than she was._',
  '**b** _What I would put in my own: who has taught about 25,000 lessons in twenty-four years and used a projector for the first time at forty-eight. I would not have written the second half of that in September._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda gave each of us the name of somebody else in the room and said we are writing their entry for a page that goes to the group starting in September. Omar asked whether they will read it, and she said they will read it in their first week, when they do not know one face from another — so each entry needs a clause that tells them which person, with no commas, and a clause that tells them something about that person, with commas. And one rule: nothing in it that the person has not said in this room. Umm Kinan said the two clauses do completely different jobs and she has only just seen how different: the defining one is for a stranger in a doorway — the one who repairs telephones, the one who works nights — and it is a label that has to be true of nobody else in the room. The adding one is what you would tell somebody after they had found the right face: Mazen, who has mended about two thousand three hundred telephones and found a bad batch in a book he kept himself. That is not a label; nobody needs it to find him; it is the reason to talk to him. Jad said so the first clause finds them and the second is why you would bother. And Umm Kinan said yes, and that she would like somebody to write hers, because she has been in rooms for twenty-four years where her defining clause was "the mathematics teacher" and there was never a second clause at all. She has Yara\'s name, and her entry is: the one who works at the hospital laboratory finds her, and then — Yara, who did not speak English out loud to a stranger for twenty-six years and then said four sentences in this room in September. Which is hers, and which she said here, and which Umm Kinan said she would not have had the courage to write about herself.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Rasha who works nights → ✓ two commas after a name.   ✗ The one who is very helpful → ✓ not a definition: true of six people.   ✗ Mazen, that has mended 2,300 telephones, → ✓ **who**.   ✗ an adjective where a number would do → ✓ _2,300_, _118_, _eleven minutes_.   ✗ a clause the person has not said → ✓ delete it, or ask them.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Against the **whole list**: no two people in the class can be found by the same defining clause.'));
out.push(A('**2** It was read to the person it is about, and changed if they wanted it changed.'));
out.push(A('**3** A number — 2,300 · 118 · twenty-six years · 25,000 and eleven minutes. Four entries, five numbers, and not one adjective about a person.'));
out.push(A('Ask the class which of the four entries they would most want to be theirs, and then which one they would least like to have had written about them by somebody else. The answers are different, and the gap between them is what the Writer\'s box rule about reading it to the person is protecting.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**COUNTER 2, SHAALAN · FOR THE MAN WHO TAKES OVER IN SEPTEMBER**',
  '**The one who keeps the fault book** is Mazen Hariri, who started it in September for no particular reason and who found a bad batch of fifteen in it by April.',
  '**The one whose counter is nearest the door** is Hani Sayegh, whose takings are a third of the shop\'s and who has never once been asked how he does it.',
  '**The one who deals with the supplier** is the manager, who passed the fifteen units on in April and who has been asked twice for a name and has not given one.',
  '**The one who brings the handsets from Mezzeh** is Abu Samir, who has done the same run for six years, who knows which shop a unit came from by the bag it is in, and who cannot read the fault book.',
  '**A note about these entries.** Every defining clause was tested against the four of us: no two of us can be found by the same one. Every entry was read to the person it is about. Abu Samir asked for his last clause to stay in.',
]));
out.push(S('Stage 7 · Write freely (sample, 179 words)'));
out.push(SAMPLE([
  '**CLASS 5A, ROOM 14 · FOR THE GROUP STARTING IN SEPTEMBER** · six of the twelve entries',
  '**The one who repairs telephones at a counter in Shaalan** is Mazen Hariri, who has mended about 2,300 of them in nine years and who found a bad batch of fifteen in a fault book he started keeping for no particular reason in September.',
  '**The one who works nights at the hospital** is Rasha Barakat, whose notebook of 118 shifts got a three-month trial out of a rota committee, and who says the only reason it happened to her and not to the other night sister is that she wrote things down.',
  '**The one who works at the laboratory in Suwayda Street** is Yara Mansour, who had not spoken English out loud to a stranger for twenty-six years when she came into this room in September, and who said four sentences on the first evening and told us the rest of it three weeks later.',
  '**The one who teaches mathematics** is Siham Dibo — Umm Kinan — who has taught about 25,000 lessons in twenty-four years, who used a projector for the first time at forty-eight and took eleven minutes to put a triangle on a wall, and who asked a colleague for forty minutes after four months of not asking.',
  '**The one who trains representatives in car parks** is Fares Kayyali, who has trained six of them without a title or a day of paid time, and who is going to be paid to do it two days a month from September.',
  '**The one who runs a press with eleven conditions over the counter** is Bassel Tahhan, who has run it for nineteen years, who crossed nine of the eleven out, and who read the page before the conditions in June and found that the yard was never outside.',
  '**And my own, in the third person.** The one who answers forum questions about circuit boards at one in the morning is Jad Attar, who has answered about nine hundred of them in two years and who found thirty-one correct relative clauses in forty of his own answers in a construction he could not name. — Would I want it printed? Yes. It is the first description of me that has a number in it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The one who runs a press with eleven conditions over the counter." Nineteen years in nine words, and it finds nobody else in Damascus._   ✓ _"The one who is always willing to help" — true of everybody in the room, so it finds nobody._   ? _Did you read it to them?_ — four of the seven, and the three that were not are the three with no number in them, which is not a coincidence.'));
out.push(S('Stage 7R · Share'));
out.push(A('Shorter in every case, and usually with no number in them. Say that it belongs to Umm Kinan, because it is the finding her two lines in Stage 2 predicted. Then ask the question the cycle has been walking towards: who in this room has ever been given an adding clause by somebody at work? In two years of running this unit the usual answer is nobody.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave Hani his entry. He read it twice and said that the third of the takings was wrong — it is nearer a quarter now, and it was a third two years ago — and then he asked me to leave the second clause as it was, the one that says nobody has ever asked him how he does it, because he said it was the first time anybody had written it down. He changed one fact and kept the sentence I was worried about.']));

// ===================== 11.7 =====================
out.push(pb());
out.push(h2('11.7  Review & Mediate: The page before the conditions'));
out.push(S('Stage 1 · Unit 11 quiz – corrections'));
out.push(A('**1** The nurse **who** kept a record got the trial.   **2** The man who signed it left in March. _(delete_ he_)_   **3** Bassel, **who** has run the shop for nineteen years, crossed nine out.   **4** My sister, who had three children, did not leave.   **5** The room where I left it is 14. _(delete_ in_)_   **6** The report, **which** I read in April, was never actioned.'));
out.push(A('Items **2** and **6** are the two commonest errors in the unit and they are opposites: in 2 there is a pronoun too many and in 6 there is one missing, and both come from the same thing — not noticing that the relative word has a job in the clause. Items **3** and **4** are the comma pair, and item **5** is the one nobody sees.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Definition **six** is the one that changes a condition completely: authorisation may be given by the contractor **or by a person whom the contractor names in writing**, which means Bassel can name somebody and does not have to be in the building himself. Definition **three** is the one he has been reading the wrong way round: the premises includes any yard whose access is from the building, so the yard is **inside**, and in May he told three men the opposite and made the rule stricter than the ministry\'s.'));
out.push(NOTE('This is the Bassel thread\'s last cycle in Book 1 and it closes the way it opened in 2.4: by reading something he had been given months earlier and never read. His own line is the sentence the unit exists for — _I stood in that shop and made a rule worse than the one the ministry wrote, out of a sentence on a page I had not read._ Note what it costs him to say that in front of a class, and that Ms Huda\'s only instruction is to say it again on Thursday to the three men, which is the mediation task of the whole book in one sentence.'));
out.push(S('Language box – reading a page of definitions'));
out.push(A('No exercises; it is the checklist for Stage 3. Three habits to drill: **find the clause** (a definition is a noun plus a defining relative clause and nothing else), **ask what it includes and what it excludes**, and **look for the one permission** — a definitions page is mostly restrictive and usually contains one thing you are allowed to do that you did not know about.'));
out.push(A('Definition 5 is the one to take apart in detail, because it does both jobs in two sentences: the defining clause says what wastage **is** (sheets spoiled after the proof is signed) and the non-defining clause, with its commas, carves out the exception (make-ready sheets, which are spoiled before the proof is signed, are not wastage). The commas there are worth money.'));
out.push(S('Stage 3 · Practise (sample – Page A, a school\'s examination rules)'));
out.push(SAMPLE([
  'There are five definitions. "Candidate" means any pupil whose name is on the entry list — so it is the list that decides, not the register and not whether they sat the paper.',
  '"The examination room" means the room in which the paper is sat, which means it is not a fixed room: it is wherever the paper is sat that day, including a corridor if that is where you put them.',
  '"Assistance" means help with the **content** of a question. That is the defining clause and it is narrow.',
  'And then the fourth line, which is the one that changes a rule: reading a word aloud, **which does not concern content**, is not assistance. The clause with the commas is doing the work, and it means an invigilator may read a word out to a pupil who cannot read it — which is the opposite of what most of us have always assumed.',
  'The permission is in the last line: an invigilator is a member of staff **whom the head names in writing**, so it does not have to be a teacher and the naming has to exist on paper.',
  'What is excluded: nothing is said about dictionaries, about time, or about a pupil who arrives late.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('On both pages it is the **fourth** line, and on both pages the work is done by a non-defining clause between commas: _reading a word aloud, which does not concern content, is not assistance_ and _hanging a picture, which does not change a fixed part, is not an alteration_. Page A reverses the rule that worried the teacher in 6.6, which is worth pointing out — a whole cycle of worry answered by a definitions page nobody had read.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own definitions page, explained without being shown. The three questions are the assessment: _what does that include?_, _what is excluded, and by which clause?_ and _which rule does that change?_ A student who can answer the third one has done the unit.'));
out.push(A('Expect a third of the class to arrive without a page, not because they forgot but because they have never seen the definitions page of anything they are under. That is itself the finding: tenancies, insurance policies, employment letters and school rules nearly all have one, and most adults have never opened it. Give those students Page A or Page B and set the real page as the homework, and ask in Unit 12 who read theirs.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Bassel has had a page of six definitions for five weeks and had never read it, because definitions are what you skip. Definition six says that authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing — so he was right in April that condition seven does not say who authorises, and he also did not know that he can name somebody. In writing. Which means the man who is actually in the building at seven in the morning can authorise it, and Bassel has been going in at seven for the whole of June to be the person who could say yes. And definition three is the one he had been reading the wrong way round: the premises means the building in which the work is carried out and any yard or store whose access is from that building — so the yard is the premises, and when he told his three men in May that leaving the building included the yard, he was wrong. He changed his mind in front of them and made it stricter, and the definitions page says he did not have to. He said he stood in that shop and made a rule worse than the one the ministry wrote, out of a sentence on a page he had not read. So I decided to find and read the definitions page of my own tenancy, which I have had for four years and which I have never opened past the first page.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 1'));
out.push(A('**1** B   **2** A   **3** B   **4** C   **5** A'));
out.push(A('_Notes:_ **1** the commas carve out the exception, so B. **2** two clipboards are described and the defining clause picks out one of them. **3** _must have told_ is a condition on leaving work there, not a prohibition. **4** the clause gives the condition the switch depends on. **5** _came in before Thursday_ is the older stock and it is in the blue bags.'));
out.push(A('Reading Part 1 is five notices and five three-option questions, and in this set every single answer turns on a relative clause — which is not how the real paper is built, but is the most efficient twenty minutes of revision in the unit. Tell the class that is what you are doing, and then say what the real Part 1 does: signs, notes, labels and short messages, where the trap is usually a word that appears in the notice **and** in the wrong option.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'There is a page before the conditions and it is six paragraphs long. Nobody reads it. It decides what the conditions mean.',
  '**"The premises"** means the building in which the work is carried out, and it **includes** any yard or store whose access is from that building — which is the part that matters, because every condition about things leaving the premises reads differently once you know the yard is inside.',
  '**"Wastage"** means sheets which are spoiled after the proof has been signed. The clause with the commas **excludes** make-ready sheets, which are spoiled before the proof is signed, so a make-ready sheet is not wastage and is not counted against the order.',
  'The definition that gives us something is **"authorisation"**: permission given in writing by the contractor **or by a person whom the contractor names in writing**. Which means I can name whoever is in the building at seven, in writing, once, and I do not have to be there at all.',
  'And the one I had been reading the wrong way round is **"the premises"**. So when I told the three of you in May that leaving the building included the yard, I was wrong, and I had made it stricter than it needed to be.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 142 words)'));
out.push(A('Out of 20 on Content, Communicative Achievement, Organisation and Language. All **four** notes must be covered: she is right and why, what a definition is made of, the two things to look for, and one example from the writer\'s own life. The commonest loss is the fourth note, which candidates treat as decoration.'));
out.push(SAMPLE([
  'Dear Sam,',
  'Your colleague is right, and it is the only page in the contract that can change what every other page means.',
  'A definition is simple to read once you see the shape: it is a noun and then a relative clause, and nothing else. "The premises" means the building **in which the work is carried out**. Find the clause and you have found the whole definition.',
  'Two things to look for in each one. First, what it **includes** — the words _and includes_ are doing real work. Second, what the clause with the **commas** excludes, because that is where the exceptions hide, and an exception is usually in your favour.',
  'One example from my own life. A friend of mine runs a press and found, after five weeks, that his definitions page let him name somebody else in writing to authorise work. He had been going in at seven every morning for a month for nothing.',
  'Read the six paragraphs. It will take you ten minutes.',
  'Best wishes, Lubna',
]));
out.push(S('Unit 11 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** b   **3** a   **4** a   **5** a   **6** a   **7** b   **8** b'));
out.push(A('_Notes:_ **1** _which_ is not used for people and _who she_ doubles the subject. **2** _that_ cannot begin a non-defining clause. **3** _whose_ for a thing, and not _who\'s_. **4** and **5** _where_ and _when_ already contain the preposition. **6** the pronoun is dropped because _he_ is a new subject. **8** the preposition has stayed in front, so _to which_ is required; _the post it was sent to_ would also be right with the preposition moved.'));
out.push(S('Unit 11 check  ·  B  Listening (Part 3, note completion) – Track 11.15'));
out.push(A('**(1)** six   **(2)** five   **(3)** names   **(4)** premises   **(5)** seven   **(6)** before'));
out.push(A('Gap **(3)** is the one that is lost: the recording says _a person whom the contractor names in writing_, and candidates write _named_ or _name_. Gap **(6)** is the discrimination the whole unit has been building to — _before_, not _after_ — and the recording says both words within eight words of each other. Replay those two gaps only.'));
out.push(NOTE('Listening Part 3 is one speaker and six gaps, one or two words or a number each, and the answers come **in order**. Three habits worth ten minutes of class time: read all six gaps before the recording starts and decide what kind of word each one needs; write what you hear even if it looks wrong, because the gap is a transcription and not a paraphrase; and check the spelling of numbers afterwards. Candidates lose more marks in Part 3 to tidying up what they heard than to not hearing it.'));
out.push(S('Unit 11 check  ·  C  Writing (sample, 158 words)'));
out.push(SAMPLE([
  '**WARD 4 NIGHTS · FOR WHOEVER COMES IN SEPTEMBER**',
  '**The one who keeps the night book** is Rasha Barakat, who has 118 shifts in a notebook of her own and who got a three-month trial out of a rota committee with it.',
  '**The one who has done fourteen years of fifth nights** is Sister Nasr, whose own errors all fall on the fifth night of a block, and who said so out loud for the first time in May after two years of thinking it was her.',
  '**The one whose name is on every equipment form that came back** is the ward manager, who has signed nine of them since February and who has no form to send for a trolley that is already in a workshop.',
  '**The one who cannot be seen from the station** is bay five, which is not a person and is on this list because it is the only place on the ward where two people can talk.',
  '**A note about these entries.** Every defining clause was tested against the whole night staff: no two of them can be found by the same one. Every entry about a person was read to that person. Sister Nasr changed "fourteen years" to "fourteen and a half", which she was right about.',
]));
out.push(S('I can… (Unit 11)'));
out.push(A('Self-assessment; no answers. The three to look at are the second, the sixth and the eighth: two commas rather than one, dropping the pronoun where there is a new subject after the noun, and reading a page of definitions for what it includes and excludes. A class that ticks the first line and not the eighth has learnt a punctuation rule instead of a document.'));
out.push(box('Looking ahead to Unit 12', [
  'Unit 11 packed more into a sentence. **Unit 12** is the last unit of the book and it is about **opinions**: giving one and supporting it, disagreeing politely, conceding a point, asking for somebody\'s view, reaching a decision together, and writing a balanced paragraph. _I\'d say · up to a point · I see what you mean, but · although · admittedly · on balance._',
  '**12.5 teaches B1 Preliminary Speaking Part 3**, the collaborative task — the last part of the examination the class has not met. After it, every part of the Speaking paper has been taught, which is what the End-of-Book Test assumes.',
  '**And 12.6 opens the four envelopes.** The introductions pinned up in **1.1**, the vote in **1.2**, the sealed first-impressions notes from **1.4**, and the two homework pages from **3.3** and **3.6**. The Unit 11 NEXT box asks for all four. Check this week who still has theirs; anybody who has lost one writes it again from memory and says so, which is a usable answer and not a failure.',
  'Two threads are left open on purpose and are closed in 12.7: the **7.6 evidence paragraph**, which is reopened and argued from both sides, and **Yara**, who in 1.4 wrote a sealed note about herself that nobody has read.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 11 · Answer Key');
