// Proactive Business English B2 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Answer key and mark scheme
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-BOOK TEST  ·  Units 1–12  ·  Answer key and mark scheme'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  '**One hundred marks, divided equally: Reading 25 · Writing 25 · Listening 25 · Speaking 25.** ⚠ **Record four separate marks and give the candidate the average, not the total.** **This is how B2 Business Vantage reports, and one weak paper cannot be hidden behind three strong ones.**',
  '⚠ **A pass at the end of Book 1 is 60 of 100** — **but the number to talk to the candidate about is the lowest of the four, and a candidate with 72 and a Writing paper of 11 has a Writing problem and not a good result.**',
  '⚠ **The two declared emphases are both in Writing and both are pass-or-fail, not partial.** ⚠ **A recommendation that does not carry its basis inside the sentence scores nought for that content point, however well written** — **and *in the light of the above* is the form to watch for.** ⚠ **And an ask attached to a disclosure loses the point it is attached to:** **a Part 1 answer that ends *we hope this will not affect the order* loses the undertaking point.** **Both were announced on the candidate\'s own first page.**',
  '**Everything in Reading and Listening is right or wrong and worth one mark.** **No half marks anywhere in this paper.**',
  '⚠ **Reading has five parts of five and the real examination does not.** **Say so when you hand the marks back:** **in Vantage the cloze and the error correction carry twenty-seven of the forty-five questions**, **so a candidate who is weak in Parts 4 and 5 here is weaker in the examination than this paper makes them look.**',
], C.grey, C.navy));

// ================= READING =================
out.push(h2('PAPER 1  ·  READING    (25 marks)'));
out.push(p('**Part 1 · Matching  (5 marks)**'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'D', 'C', 'A', 'E', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Each extract is the answer to exactly one statement, which is not always true in the examination and is true here because the five extracts are the five things Book 1 teaches.** ⚠ **Q2 is the one to discuss: C marks TWO claims** — *Abu Yasser\'s account; there is no record* **and** *which I infer and nobody has stated* — **and E marks nothing, it protects.**'));
out.push(p('**Part 2 · Sentence insertion  (5 marks)**'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'C', 'B', 'D', 'A', 'E']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **The sentence not needed is F.**'));
out.push(p('⚠ **Gap 6 is held at both ends:** **before it, *almost nobody reads one in order to know something*; after it, *it follows that the question is not what the reader needs to know but what he is about to do*** — ⚠ **so the gap must say what they DO read for, which is C.** ⚠ **Gap 9 is the only one held at one end only, and the test is the next sentence of the option itself:** **A continues *an invitation to supply all three* by saying what the reader supplies.**'));
out.push(p('⚠ **F is the distractor and it is the kind that catches good candidates: it is true, it is about documents, and it is the sort of thing this text might have said.** ⚠ **No gap in the text is about length** — **and a candidate who places F has answered the topic instead of the gap.**'));
out.push(p('**Part 3 · Multiple choice  (5 marks)**'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'C', 'B', 'D', 'A', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Q13 is the item that rewards reading the whole sentence:** ***a firm files by event and reasons by pattern*** — **and three of the four options are things that would also make a pattern invisible and none of them is in the text.** ⚠ **Q14 is the sentence the whole text exists for:** **the party most likely to discover a pattern in your conduct is the party your conduct happens to.**'));
out.push(p('**Part 4 · Multiple-choice cloze  (5 marks)**'));
out.push(table(['Q', '16', '17', '18', '19', '20'], [['Answer', 'A', 'C', 'A', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Three of the five are fixed phrases and two are grammar.** ⚠ **The phrases: *interested in* (16), *the basis for* (17), *a review date without an owner* (20).** ⚠ **The grammar: *would have to change* (18), where *must*, *need* and *ought* all break the conditional; and *distinguishes a decision FROM a habit* (19), where *divides*, *separates* and *parts* all take *from* in other constructions and none of them takes this object.**'));
out.push(p('**Part 5 · Error correction  (5 marks)**'));
out.push(table(['Q', '21', '22', '23', '24', '25'], [['Answer', 'CORRECT', 'BEEN', 'CORRECT', 'WHICH', 'WAS']], [1.1, 1.5, 1.1, 1.1, 1.5, 1.1]));
out.push(p('⚠ **Three errors and two correct lines, and the examination never says how many of either** — **so a candidate who has found one error has not finished and one who has found five has invented two.** ⚠ **Line 22, BEEN:** *we have been asked you to reconsider* — **a perfect passive where a perfect active belongs.** ⚠ **Line 24, WHICH:** *a figure which agreed between us* — **a relative pronoun with no verb to govern it; the figure was agreed, it did not agree.** ⚠ **Line 25, WAS:** *a clause was agreed in March* **inside a list of noun phrases** — **the item is *a clause agreed in March*, and the finite verb breaks the list.**'));
out.push(p('**Reading total: ______ / 25**'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (25 marks)'));
out.push(p('**Part 1 · An internal communication  (10 marks)**'));
out.push(p('**Content, 6 marks:** ⚠ **what was told, as facts (2)** · ⚠ **what the customer raised in reply (2)** · ⚠ **the undertaking, with a date (2)**. **Language, 4 marks:** range, accuracy, register, and whether it is 40 to 50 words.'));
out.push(sample('Sample answer (45 words)', [
  '**Mr Ayoub — I told Ms Tannous this morning: three occurrences, thirty-three cartons, and the 47,850 we owe.** ⚠ **She asked only about who in her own office knew.** ⚠ **I have undertaken to send the gate sheets on 1 August and nothing else.** **The April order stands at 320 cartons.**',
]));
out.push(p('⚠ **Mark the second content point first.** ⚠ **A candidate who writes *she took it well* or *the conversation went better than expected* has reported themselves and scores nought for it**, **and that is the commonest failure in this task.** ⚠ **And the declared emphasis applies here:** **an answer ending *we hope this will not affect the April order* loses the undertaking point entirely**, **because the ask is attached to it.**'));
out.push(p('⚠ **Give the undertaking point only for a date.** ⚠ **_Shortly_, *in due course* and *as soon as possible* are each one word longer than *on 1 August* and commit the candidate to nothing.**'));
out.push(sp());
out.push(p('**Part 2 · A decision report  (15 marks)**'));
out.push(p('**Content, 10 marks:** ⚠ **four headings (1)** · ⚠ **one question with two answers and the price of the second inside it (3)** · ⚠ **one deciding factor, singular (2)** · ⚠ **the case against in its strong form (2)** · ⚠ **the recommendation with its basis INSIDE the sentence (2)**. **Language, 5 marks:** range, accuracy, cohesion, and whether it is 120 to 140 words.'));
out.push(sample('Sample answer (136 words)', [
  '**The question**',
  'Do we accept clause 19 as drafted, with arbitration in Beirut, or ask for Damascus and accept that the agreement reopens and the 1 August date may go?',
  '**What decides it**',
  '⚠ **An arbitration decides facts, and two of the four links in our own evidence are an account and an inference.** It is the only factor that would change the answer if it changed.',
  '**The case against**',
  '⚠ **Most disputes of this kind are about money, and for a money dispute Beirut costs four times as much and decides nothing a court could not.** I accept that; what it understates is that our one live dispute is about facts.',
  '**What I recommend**',
  '⚠ **I recommend that we accept clause 19 as drafted, on the basis that in a fact dispute our evidence is better suited to arbitration than to a court.** Reviewed on 1 June 2027, and before then if the pallet claims are settled.',
]));
out.push(p('⚠ **The basis point is pass or fail, as announced.** ⚠ **Give both marks only where the basis is inside the recommendation sentence** — **_I recommend X, on the basis that Y_.** ⚠ **_I recommend X for the reasons set out above_ scores nought**, **and so does *in the light of all the circumstances*, however good the reasons above are.**'));
out.push(p('⚠ **Give the case-against marks only for a case somebody holding it would recognise.** ⚠ **_There are arguments on both sides_ and *some people would prefer the other option* score nought** — **a case against needs a condition, a consequence and preferably a figure.** ⚠ **A candidate who concedes part of it in terms (*I accept that*) and answers the rest in one clause has done the whole of Unit 12.4 in thirty words and should be told so.**'));
out.push(p('⚠ **One deciding factor, singular.** **A candidate who gives three reasons under *what decides it* scores one of the two marks** — **because a reader will test the weakest of the three, and that is the fault the mark exists to find.**'));
out.push(p('**Writing total: ______ / 25**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (25 marks)'));
out.push(p('**Part 1 · Note completion  (9 marks)**'));
out.push(table(['26', '27', '28', '29', '30'], [['three', 'August 2024', 'thirty-three', '47,850', 'asking']], [1, 1.2, 1.2, 1, 1]));
out.push(table(['31', '32', '33', '34'], [['who knew', 'credited', 'her own customers', 'her two customers']], [1.2, 1, 1.4, 1.4]));
out.push(p('⚠ **Accept *33* as *thirty-three* or *33*, and *47,850* in words or digits.** ⚠ **Q31 accepts *who in her office knew* and *who knew*; do not accept *the money* or *the April order*, which are the two things she did NOT ask about first.**'));
out.push(p('⚠ **Q33 is the one mark in this paper that distinguishes a candidate who understood the conversation from one who transcribed it.** **Accept any answer naming the customer\'s own customers.** ⚠ **Do not accept *the cartons*, *the money* or *the trust*** — **which are the three things that were not what she minded about.**'));
out.push(p('⚠ **Q30 and Q34 are about things not asked for, in opposite directions** — **what the supplier refused to ask for, and what the customer asked for that nobody had offered.** **Spelling is not marked in this part.**'));
out.push(p('**Part 2 · Multiple choice  (8 marks)**'));
out.push(table(['Q', '35', '36', '37', '38', '39', '40', '41', '42'], [['Answer', 'A', 'B', 'C', 'B', 'A', 'C', 'B', 'C']], [1.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Q40 and Q41 are a pair and candidates who get the first wrong usually get the second right, which tells you they understood the principle and not the list.** ⚠ **The two he refuses are the owner and the date, because nobody named either out loud** — **and a candidate who has Q41 right has heard 9.4 applied to a minute by the man who writes it.**'));
out.push(p('**Part 3 · Multiple choice  (8 marks)**'));
out.push(table(['Q', '43', '44', '45', '46', '47', '48', '49', '50'], [['Answer', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'B']], [1.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Q48 is the item that tests whether a candidate was listening or assuming.** ⚠ **The case against was written by the AUTHOR of the paper, not by the dissenter** — **and that is why the dissent takes four minutes instead of twenty.** ⚠ **A candidate who answers A has heard a dissent and not heard what made it short.**'));
out.push(p('⚠ **And Q50 is the last mark in the paper for a reason.** ⚠ **If the trigger fires, the dissent becomes the recommendation without being reargued** — **and a candidate who has that right has understood what Book 1 has been building towards: a decision that can be revisited by somebody who was not in the room.**'));
out.push(p('**Listening total: ______ / 25**'));

// ================= LISTENING SCRIPTS =================
out.push(pb());
out.push(h2('Listening scripts'));
out.push(p('_Read each script twice, at an ordinary speaking pace, with a thirty-second pause between the two readings._', { color: '595959' }));
out.push(sp());
out.push(p('**Part 1 · Note completion**'));
out.push(dlg(null, [
  ['Nour', '⚠ **It has happened three times: March 2024, August 2024 and March this year, all three to you, and we did not connect them.** ⚠ **Thirty-three cartons, which at 1,450 is 47,850, and we owe it to you.** ⚠ **I am not asking for anything today.**'],
  ['Ms Tannous', '⚠ **Who in my office knew?**'],
  ['Nour', '⚠ **Your storeman has the three receiving notes, in your own files, and you can check everything I have said against them.** **The third since March. What he did with the first two I do not know and it is not mine to say.**'],
  ['Ms Tannous', '⚠ **That is the right answer and I will deal with it.** ⚠ **I am not interested in the 47,850** — **you have credited it and that is the end of it.** ⚠ **What I mind about is that I have been quoting your counts to my own customers for nineteen years, and three times I have passed on a figure that was wrong and apologised for it myself.**'],
  ['Nour', '**I had not thought of that.**'],
  ['Ms Tannous', '⚠ **No. You thought I would mind about the cartons.** ⚠ **Send me the gate sheets on the first of August, as you said.** ⚠ **And send me a note I can give to the two customers who were short in March, in your name and not in mine.**'],
]));
out.push(sp());
out.push(p('**Part 2 · Multiple choice**'));
out.push(dlg(null, [
  ['Nour', '⚠ **Item 5. Nobody mentioned the bank. *Thursday* was said twice and *bank* was never said at all.**'],
  ['Mr Tarabishi', '⚠ **You are right, and I will tell you where it came from.** ⚠ **I was not in the room for the first ten minutes** — **I was finding the file** — **and when I came in, Mr Ayoub was saying Thursday for the second time.** **So I wrote what the Thursdays were about, which is the one thing a minute-taker must never do.**'],
  ['Nour', '**And item 3 says the credit position was noted. It was a twenty-two-minute item and it ended in a decision.**'],
  ['Mr Tarabishi', '⚠ **_Noted_ is what I write when I have not understood what happened.** ⚠ **Nineteen years, and nobody has ever said so to me.** ⚠ **Give me the four things and I will write them: what was decided, on what basis, who owns it, and by when.**'],
  ['Nour', '⚠ **The owner and the date are my inference. Nobody said either out loud.**'],
  ['Mr Tarabishi', '⚠ **Then I will take the first two from you and ask the Chairman for the other two**, **because an owner nobody named is not mine to supply and not yours.** ⚠ **And send me your own note of the meeting, the one with the times on it, and I will read it against mine before I circulate anything.**'],
]));
out.push(sp());
out.push(p('**Part 3 · Multiple choice**'));
out.push(dlg(null, [
  ['Mr Ayoub', '⚠ **We accept clause 19 as drafted, on the basis that in a fact dispute our evidence is better suited to arbitration than to a court.** Bassel?'],
  ['Bassel', '⚠ **I would ask for Damascus, and I am not going to argue it again, because the paper has argued it better than I would.** ⚠ **What I want is that my dissent is minuted, with its reason, and that the decision is not reopened.**'],
  ['Mr Ayoub', '**The reason, in one sentence, for the minute.**'],
  ['Bassel', '⚠ **That the dispute I expect is a money dispute and not a fact dispute, and that Beirut costs four times as much to decide a question about invoices.**'],
  ['Mr Ayoub', '⚠ **Which is the case on page 3a, and Nour wrote it.**'],
  ['Bassel', '**She wrote it better than I would have, and I still hold it.**'],
  ['Mr Ayoub', '⚠ **Then it goes in, in your words, with your name on it, and the decision stands.** ⚠ **A decision with a minuted dissent is a decision that was taken rather than assumed.**'],
  ['Bassel', '⚠ **And one more line. If the trigger fires** — **if the claims settle** — ⚠ **I want it minuted that my dissent becomes the recommendation without anybody having to reargue it.**'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (25 marks)'));
out.push(p('**Part 1 · Your own work  (5 marks)**'));
out.push(table(['Mark', 'What it is for'], [
  ['**1**', '**answers in complete sentences and at an ordinary pace**'],
  ['**1**', '⚠ **a figure WITH its base** — **_nine per cent of turnover_ and not *nine per cent***'],
  ['**1**', '⚠ **a date rather than *recently* or *a while ago***'],
  ['**1**', '⚠ **a name rather than *somebody* or *the office***'],
  ['**1**', '⚠ **a real answer to the third question** — **something the candidate had to say that cost them something**'],
], [0.6, 7]));
out.push(p('⚠ **The fifth mark is not for the quality of the example.** **It is for having one.** ⚠ **A candidate who says *I cannot think of anything* has answered honestly and scores nought for it**, **and that is worth discussing afterwards rather than during.**'));
out.push(sp());
out.push(p('**Part 2 · A collaborative task  (10 marks)**'));
out.push(table(['Marks', 'What it is for'], [
  ['**2**', '**listens, and answers what the partner actually said**'],
  ['**2**', '⚠ **concedes the other side\'s strongest point in its own terms, with nothing after it that argues**'],
  ['**2**', '⚠ **gives one deciding factor rather than a list**'],
  ['**2**', '⚠ **asks for the dissent to be RECORDED rather than for the decision to be reopened** — **in those words or close to them**'],
  ['**2**', '⚠ **adds the line about what happens if the position changes**'],
], [0.7, 7]));
out.push(p('⚠ **The fourth and fifth are the marks this paper exists for and they are where the candidates separate.** ⚠ **Give the full ten for any performance in which a candidate asks for a dissent to be recorded rather than for a decision to be reopened, whatever else happens in it** — **it is the single most sophisticated move in Book 1 and almost nobody makes it unprompted.**'));
out.push(sp());
out.push(p('**Part 3 · Putting a case  (10 marks)**'));
out.push(table(['Marks', 'What it is for'], [
  ['**1**', '**the decision as one question**'],
  ['**1**', '**two answers and no third**'],
  ['**1**', '**the price of the second answer**'],
  ['**2**', '⚠ **one thing that decides it, singular**'],
  ['**2**', '⚠ **the case against the candidate\'s own answer, in a form its holder would recognise**'],
  ['**1**', '**a recommendation with its basis inside the sentence**'],
  ['**2**', '⚠ **what would have to change for the candidate to be wrong**'],
], [0.7, 7]));
out.push(p('⚠ **The last two items carry four of the ten marks and most candidates will produce neither.** ⚠ **Do not prompt for either.** **If they are absent, they are absent** — **and a candidate who produces both has demonstrated, in about ninety seconds, the whole of what twelve units were for.**'));
out.push(p('**Speaking total: ______ / 25**'));
out.push(sp());
out.push(box('⚠ The four marks, and what to say about them', [
  table(['Paper', 'Mark', 'What a low mark here means'], [
    ['**READING**', '______ / 25', '⚠ **look at Parts 4 and 5 separately** — **they are twenty-seven of the forty-five questions in the examination and only ten of the twenty-five here**'],
    ['**WRITING**', '______ / 25', '⚠ **look at the two declared emphases first** — **a candidate who lost both has a habit and not a gap**'],
    ['**LISTENING**', '______ / 25', '⚠ **look at Q33, Q48 and Q50** — **three marks that test understanding rather than hearing**'],
    ['**SPEAKING**', '______ / 25', '⚠ **look at Part 3\'s last two items** — **four marks that no amount of fluency can supply**'],
  ], [1.3, 1.1, 6]),
  '⚠ **Average: ______ / 25, reported as a percentage.** **Not the total.**',
  '⚠ **And one thing to say to every candidate, whatever the four marks are.** ⚠ **The two hardest things in this paper** — **the case against your own answer and what would have to change for you to be wrong** — **are the two things nobody at work will ever ask them for.** **They are worth having anyway, and Book 2 assumes them.**',
], C.lteal, C.navy));
out.push(sp());
out.push(p('_End of the End-of-Book Test key. **Book 2 begins at Unit 13** — twelve more units, and a reader who is not on your side and is not wrong._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · End-of-Book Test · Answer Key');
module.exports = out;
