// Proactive Business English B2 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a testable standard · a standard somebody can test · a measurable standard · a sample size · a test method · deemed accepted · deemed acceptance · a rejection that holds · to reject against a criterion · a criterion that is a preference · an agreed criterion · a pre-agreement note · fitness for purpose · merchantable quality · a latent defect · a patent defect · acceptance by conduct · acceptance by silence · a period for inspection · a right to reject · to waive a right · an inspection window · a conforming consignment · a non-conforming consignment · to pass as conforming · the standard that has two of the three · an arm\'s length test · a daylight test · the three a standard needs · a rejection with its criterion quoted · a criterion nobody has measured · a pass mark on a thing';
const COLLOC = 'to meet a standard · to fail a sample · to run a method · to take a point · to waive a period · to word a criterion · to agree a standard in advance · to hold a rejection';
const BACK_AT_B2 = 'tolerance · specification · defect';

out.push(h1('Unit 14  Acceptance, Rejection and the Measurable Standard'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**14.1**  write a standard somebody can test',
  '**14.2**  give a standard its tolerance, its sample and its method',
  '**14.3**  read _deemed accepted_ in both directions, including your own',
  '**14.4**  write a rejection that will hold, with its criterion quoted',
  '**14.5**  find the criterion that is really a preference, and say so',
  '**14.6**  agree criteria before the work, in eleven lines signed by both',
  '**14.7**  Review & Mediate: what we accept every month by saying nothing',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Forty cartons, and a word that cannot be tested', [
  '⚠ **On 2 October Mr Hamdan wrote rejecting forty cartons out of the September consignment, delivered on 18 September.** **The ground is that the marking is *not clean*.** **Forty cartons at 1,450 is 58,000.**',
  '⚠ **Nobody at Sham Trading disputes that the marking on those forty is poor.** **The difficulty is that *clean* is not a standard anybody can test** — ⚠ **it has no tolerance, no sample and no method, and the agreement uses the word twice.**',
  '⚠ **And there is a second thing, which Nour found while looking for the first.** **Clause 12 provides that a consignment not rejected within fourteen days of delivery is deemed accepted.** ⚠ **Fourteen days from 18 September is 2 October; the letter is dated 2 October and under clause 17 is deemed received on the 6th.** **The rejection is four days out of time.**',
  '⚠ **So the firm has a complete answer that it is not going to use, and a problem with a word that it is.** **This unit is both halves of that** — **and the harder half is the first.**',
], C.lyellow, C.orange));

// ======================= CYCLE 14.1 =======================
out.push(pb());
out.push(h2('14.1  A standard somebody can test'));
out.push(p('**Function:** writing a standard that can be tested   ·   **Grammar:** _no X visible at Y under Z_   ·   **Pronunciation:** a standard read as a measurement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a word your work uses to describe acceptable work. ⚠ Then say how two people could disagree about it and both be right.'));
out.push(p('**b**  Which can be tested? _the marking must be clean · no mark visible on the printed face at arm\'s length in daylight_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say is wrong with the word _clean_?   **A** it is too strict   **B** two people can apply it honestly and disagree, and neither is wrong   **C** it is not in the agreement'));
out.push(p('**b**  Listen again. **1** What three things does a testable standard need? **2** Why does Nour say the firm cannot simply argue that the marking is clean?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  "Clean is not a standard"', [
  ['Mr Ayoub', 'They say the marking is not clean. Is it clean?'],
  ['Nour', '⚠ **I have looked at eleven of the forty and I would not have sent four of them.** **The other seven I would have sent without thinking about it.**'],
  ['Mr Ayoub', '⚠ **Then we argue about the seven.**'],
  ['Nour', '⚠ **We cannot, and that is the whole problem.** ⚠ **_Clean_ has no tolerance, no sample and no method.** **Two people can apply it honestly and disagree, and neither of them is wrong** — **because there is nothing in the word to be wrong about.**'],
  ['Mr Ayoub', 'It is in the agreement twice.'],
  ['Nour', '⚠ **It is, and that is our doing as much as theirs.** **Nobody asked at the time what it meant, because everybody in the room knew what they meant.**'],
  ['Mr Ayoub', '⚠ **What would a standard say instead?**'],
  ['Nour', '⚠ *No mark visible on the printed face at arm\'s length in daylight.* ⚠ **Tolerance: nothing visible. Method: at arm\'s length, in daylight. Sample: that is the third thing and I have not got it yet.**'],
  ['Mr Ayoub', 'Arm\'s length is not a measurement. Whose arm?'],
  ['Nour', '⚠ **Anybody\'s, and that is why it works.** ⚠ **A standard does not have to be precise. It has to be repeatable** — **and two people at arm\'s length in daylight agree about a carton nearly every time, which is more than two people arguing about *clean* ever do.**'],
  ['Mr Ayoub', '⚠ **Then write it that way and send it to them.**'],
  ['Nour', '⚠ **Not yet. If I send them a standard now it reads as a defence of the forty cartons.** **It has to go separately, about the next consignment, and after this one is settled.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A standard somebody can test**',
  table(['', 'Not', 'Write'], [
    ['**the word**', '⚠ *clean · neat · in good condition · to a high standard*', '⚠ **a sentence with a thing, a distance and a light in it**'],
    ['⚠ **tolerance**', '**unstated**', '⚠ *no mark visible* — **or** *not more than two marks of under 3 mm*'],
    ['⚠ **method**', '**unstated**', '⚠ *at arm\'s length, in daylight* — **repeatable, not precise**'],
    ['⚠ **sample**', '**unstated, and this is the one always missing**', '⚠ *ten cartons taken at random from each pallet* — **see 14.2**'],
  ], [1.2, 3.2, 4]),
  '⚠ **The test of a standard is not whether it is strict. It is whether two people applying it honestly reach the same answer.** ⚠ *Clean* **fails that test completely** — **two people can apply it in good faith and disagree, and neither is wrong, because there is nothing in the word to be wrong about.**',
  '⚠ **A standard does not have to be precise; it has to be repeatable.** ⚠ *At arm\'s length in daylight* **is not a measurement and it is a better standard than one in millimetres that nobody has a gauge for** — **because the test somebody will actually perform is the only test there is.**',
  '⚠ **Write the thing, the distance and the light.** ⚠ *No mark visible on the printed face at arm\'s length in daylight.* **Thirteen words**, **and every one of them is doing work: *printed face* excludes the base, *visible* sets the tolerance, *arm\'s length in daylight* sets the method.**',
  '⚠ **And the word everybody knew the meaning of is the dangerous one.** ⚠ **Nobody asked what *clean* meant at the time because everybody in the room knew what they meant** — **which is a different thing from agreeing, and the difference only appears when a consignment is rejected.**',
  '⚠ **Timing: a standard sent while a rejection is live reads as a defence.** ⚠ **Settle the consignment, then propose the standard for the next one** — **because the same sentence is a proposal in November and an excuse in October.**',
  '**Practise:** Take three words your work uses for acceptable work. Rewrite each as a sentence with a thing, a tolerance and a method in it.',
  '**Useful phrases:**  clean is not a standard  ·  two people, honestly, and both right  ·  repeatable, not precise  ·  the thing, the distance and the light  ·  it reads as a defence',
  '**Pronunciation – a standard as a measurement.** 🔊 **Track 14.2** Listen twice. ⚠ **The first reads *no mark visible on the printed face at arm\'s length in daylight* as one phrase, levelly.** ⚠ **The second breaks after *visible* and after *face*.** **Read as one phrase it is a sentence; broken into three, it is three tests somebody can perform.** Say it four times, with the breaks.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a word; B asks for the three parts.'));
out.push(dlg(null, [
  ['A', 'Our standard is that the work must be __________.'],
  ['B', '⚠ **Could two people apply that honestly and disagree?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is not a standard. What is the thing being tested?**'],
  ['A', '__________.'],
  ['B', '⚠ **And the tolerance? How much is allowed?**'],
  ['A', '__________.'],
  ['B', '⚠ **And the method. Who looks, from how far, in what light?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now read it back as one sentence.**'],
]));
out.push(table(['Role card 1 — the word everybody knew', 'Role card 2 — precise but untestable'], [[
  '⚠ **A says *clean* was perfectly clear to everybody in the room when the agreement was made.** ⚠ **B agrees that everybody knew what they meant and asks whether they agreed** — **which is a different question, and nobody tested it.** ⚠ **B\'s point: a word that needs no definition among people who already agree is exactly the word that fails the first time they do not.**',
  '⚠ **A proposes *no mark exceeding 0.5 mm* and is pleased with it.** ⚠ **B asks who has a gauge, where it is kept, and who reads it at six in the morning.** ⚠ **B\'s point: a standard nobody can perform is not a standard** — **and *at arm\'s length in daylight* is less precise and far more repeatable, which is the only property that matters.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the standard as one sentence, and underline the three parts. ⚠ Then say which of *precise* and *repeatable* matters more, and why.'));
out.push(PHRASE_CARD(['two people, both right', 'not a standard', 'what is the tolerance?', 'who looks, from how far?', 'repeatable, not precise']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** words your work uses for acceptable work. Rewrite each as a testable standard.'));
out.push(table(['The word now', 'The thing tested', 'Tolerance', 'Method', 'As one sentence'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.2, 1.4, 1.4, 1.6, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The word is _______. Two people could disagree about _______. The thing tested is _______, the tolerance is _______, and the method is _______. As one sentence: _______._'));
out.push(p('**Listener task:** count how many of the words in the room were ones everybody thought were clear. ⚠ Then ask how many had ever been applied to a disagreement, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four standards on the board — look for one that is precise and untestable, and one with no method. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE WORD "CLEAN": A NOTE BEFORE WE REPLY. 7 October. N. Mansour. For Mr Ayoub. Not to be sent.**',
  '⚠ **I have looked at eleven of the forty cartons. Four of them I would not have despatched. Seven of them I would have despatched without thinking.** **That split is the whole of our problem and it is worth stating before anything else.**',
  '⚠ **The agreement uses the word *clean* twice and defines it nowhere.** **A standard has three parts and *clean* has none of them:**',
  table(['Part', 'What it fixes', 'Does *clean* have it?'], [
    ['**tolerance**', '**how much is allowed before it fails**', '⚠ **no** — **and so a single faint mark fails or does not, depending on who is holding it**'],
    ['**method**', '**who looks, from how far, in what light**', '⚠ **no** — **theirs is a man at a bench under a strip light; ours is a yard at seven in the morning**'],
    ['**sample**', '**how many are examined and how chosen**', '⚠ **no** — **they examined forty out of three hundred and twenty and we do not know which forty**'],
  ], [1.1, 3.4, 4.5]),
  '⚠ **The consequence is not that they are wrong. It is that nobody can be wrong**, **which means this cannot be settled by looking at cartons** — **and both sides looking at cartons is exactly what will happen if I answer the letter as it stands.**',
  '⚠ **What I propose for the forty: accept them back and credit them, and say in terms that we are not conceding that the marking failed a standard, because there is no standard for it to have failed.** ⚠ **58,000 is a month of the margin on this account and it is less than the cost of a dispute about a word.**',
  '⚠ **And separately, in three weeks, propose the standard for the next consignment:** ⚠ *no mark visible on the printed face at arm\'s length in daylight, on a sample of ten cartons taken at random from each pallet, with a tolerance of one carton in ten.* ⚠ **It must not go with the reply.** **A standard sent while a rejection is live is a defence of the forty cartons, and it will be read as one.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer put the split of eleven cartons before anything else?'));
out.push(item('2', 'What does she say the consequence of an untestable word is, and why does that matter for the reply?'));
out.push(item('3', 'Why must the proposed standard not go with the reply?'));
out.push(box('Writer\'s box', [
  '**The note before a reply — five parts:** ⚠ **your own honest look at the goods, first** → **the three parts of a standard, and which the word has** → ⚠ **the consequence, stated as *nobody can be wrong*** → **what you propose for the goods in dispute** → ⚠ **and the separate thing, with the reason it is separate.**',
  '⚠ **Look at the goods and say what you saw, before any argument.** ⚠ **Four I would not have sent; seven I would.** **A note that argues before it looks is a note whose author has decided**, **and a senior reader can tell.**',
  '⚠ **Set out the three parts and mark which the word has.** ⚠ **Tolerance · method · sample** — **and *clean* has none.** **The table is what turns an impression into a finding.**',
  '⚠ **Name the consequence precisely, because it is not the obvious one.** ⚠ **Not *they are wrong* but *nobody can be wrong*** — **and therefore this cannot be settled by looking at cartons, which is the only thing that will happen if you answer in kind.**',
  '⚠ **Price the concession against the dispute, in one line.** ⚠ **58,000 is a month of margin and it is less than a dispute about a word.** **A concession with a figure beside it is a decision; the same concession with no figure is a retreat.**',
  '⚠ **And keep the standard out of the reply, with the reason written down.** ⚠ **A standard sent while a rejection is live is a defence of the goods** — **so it goes in three weeks, about the next consignment, where it is a proposal and not an answer.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note before a reply about a quality dispute of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE WORD "______________": A NOTE BEFORE WE REPLY. ______________. ______________. Not to be sent.**   ⚠ **I have looked at ______________. ______________ of them I would not have ______________. ______________ of them I would have ______________ without thinking.**   ⚠ **______________ uses the word ______________ and defines it nowhere.**   **Part** | **What it fixes** | **Does it have it?**   **tolerance** | **______________** | ⚠ **______________**   **method** | **______________** | ⚠ **______________**   **sample** | **______________** | ⚠ **______________**   ⚠ **The consequence is not that they are wrong. It is that ______________**, **which means ______________.**   ⚠ **What I propose: ______________.** ⚠ **______________ is ______________ and it is less than ______________.**   ⚠ **And separately, in ______________, propose the standard: ______________.** ⚠ **It must not go with the reply, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Your own look at the goods, before any argument', ''],
  ['The three parts, and which the word has', ''],
  ['*Nobody can be wrong*, and what follows from it', ''],
  ['The concession with a figure beside it', ''],
  ['The standard kept separate, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first paragraph. ⚠ The class says whether the writer looked before deciding, or decided and then looked.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a word your work uses to decide whether something is acceptable (**200 to 240 words**). Say what it is, who applies it, whether two people have ever disagreed about it, what happened, and what you would write instead.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _tolerance, method or sample — which is missing?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had two people disagreed about the word? Usually two of three — ⚠ **and in those two the disagreement was settled by seniority rather than by the standard, which is what a word with no parts always produces.**'));
out.push(box('Homework', ['Write your final text. Then take one word your work uses for acceptable quality and write it as a sentence with a tolerance, a method and a sample in it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.2 =======================
out.push(pb());
out.push(h2('14.2  Tolerance, sample and method'));
out.push(p('**Function:** giving a standard all three of its parts   ·   **Grammar:** _on a sample of X taken at random from each Y_   ·   **Pronunciation:** three parts, three breaths'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something at your work that is checked. ⚠ Then say how many are checked out of how many, and who chose which.'));
out.push(p('**b**  Which is complete? _no mark visible at arm\'s length in daylight · no mark visible at arm\'s length in daylight, on ten cartons taken at random from each pallet, with one carton in ten allowed_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is missing from Sham Trading\'s own bench page?   **A** the tolerance   **B** the sample — how many are checked and how they are chosen   **C** the method'));
out.push(p('**b**  Listen again. **1** What two parts does the bench page have? **2** What does Abu Yasser say about *at random*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  "Two out of three, for eleven years"', [
  ['Nour', 'Our own bench page. Revision 2 of 1 April, issued by this office. It says the plate is within two millimetres, measured on the gauge.'],
  ['Abu Yasser', '⚠ **It does, and we do it.**'],
  ['Nour', '⚠ **It has a tolerance and a method and no sample.** **How many do you measure?**'],
  ['Abu Yasser', '⚠ **The first of a run, and then one when the machine sounds different.**'],
  ['Nour', 'That is not on the page.'],
  ['Abu Yasser', '⚠ **It has never been on the page. It is what I do.**'],
  ['Nour', '⚠ **And if somebody asked how many of a run of four hundred were measured, what is the answer?**'],
  ['Abu Yasser', '⚠ **Two. Sometimes three.** **It has been right for eleven years.**'],
  ['Nour', '⚠ **I believe you, and *it has been right* is not a sample.** ⚠ **Two out of four hundred would find a machine that drifts in the first hour and would not find one that drifts in the fourth.**'],
  ['Abu Yasser', '⚠ **Then say five, spread through the run. First, and then one in each quarter of it.**'],
  ['Nour', 'And chosen how?'],
  ['Abu Yasser', '⚠ **Whichever is in front of me when I get there, and that is the part I would write down carefully.** ⚠ **If you write *at random* I will take the one on top, because the one on top is at random as far as I am concerned.**'],
  ['Nour', '⚠ **Then not *at random*. *The fifth carton of each quarter of the run.*** ⚠ **Nobody has to choose anything, which means nobody can choose wrongly.**'],
  ['Abu Yasser', '⚠ **That I can do at six in the morning, and that is the test of it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The three a standard needs**',
  table(['Part', 'The question it answers', 'The fault to avoid'], [
    ['**tolerance**', '**how much is allowed before it fails?**', '⚠ **a tolerance tighter than the process** — **which produces a daily failure nobody acts on**'],
    ['**method**', '**who looks, from how far, with what?**', '⚠ **a method needing an instrument nobody has to hand**'],
    ['⚠ **sample**', '⚠ **how many, out of how many, and chosen how?**', '⚠ **this is the part always missing** — **and *at random* is the trap**'],
  ], [1.1, 3.4, 4.5]),
  '⚠ **The sample is the part that is always missing, and it is missing from standards that are otherwise excellent.** ⚠ **Sham Trading\'s own bench page has had a tolerance and a method and no sample since 1 April** — **and the man performing it has been measuring two out of four hundred.**',
  '⚠ **Say how many, out of how many, and when in the run.** ⚠ *Five, spread through the run: the first, and one in each quarter.* **Two out of four hundred will find a machine that drifts in the first hour and will not find one that drifts in the fourth.**',
  '⚠ **Do not write *at random*.** ⚠ **It sounds rigorous and it means *whichever one you pick*** — **and the one a busy person picks is the one on top.** **Write a rule that chooses for them:** ⚠ *the fifth carton of each quarter of the run.* **Nobody has to choose, so nobody can choose wrongly.**',
  '⚠ **Test every standard against six in the morning.** ⚠ **The person performing it is tired, in a hurry, and alone** — **and a standard that needs a decision at that hour is a standard that will be performed differently on different days.**',
  '⚠ **And beware the tolerance that is tighter than your process.** **A standard that your own work fails twice a week is a standard that teaches everybody to ignore standards** — ⚠ **which is a worse outcome than having no standard at all.**',
  '**Practise:** Take a check your work performs. Give it a tolerance, a method, and a sample rule that chooses for the person performing it.',
  '**Useful phrases:**  how many out of how many?  ·  that is not a sample  ·  not at random  ·  a rule that chooses for them  ·  test it against six in the morning',
  '**Pronunciation – three parts, three breaths.** 🔊 **Track 14.4** Listen twice. ⚠ **The first runs the whole standard together.** ⚠ **The second takes a breath before *on a sample of* and before *with a tolerance of*.** **Run together it is unmemorable; in three breaths it is three things a person can hold in their head.** Say it four times, in three breaths.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a check; B completes it.'));
out.push(dlg(null, [
  ['A', 'We check that __________ is within __________, using __________.'],
  ['B', '⚠ **How many do you check, out of how many?**'],
  ['A', '__________.'],
  ['B', '⚠ **And when in the run?**'],
  ['A', '__________.'],
  ['B', '⚠ **And chosen how? Not at random.**'],
  ['A', '__________.'],
  ['B', '⚠ **Could you do that at six in the morning, alone, in a hurry?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then read the whole standard back in three parts.**'],
]));
out.push(table(['Role card 1 — it has been right for eleven years', 'Role card 2 — at random'], [[
  '⚠ **A has performed a check the same way for years and it has never failed, which A offers as the answer.** ⚠ **B believes it entirely and asks what the answer is if somebody asks how many of four hundred were measured.** ⚠ **B\'s point: *it has been right* is a record and not a sample** — **and a sample of two at the start of a run cannot detect a drift that begins in the fourth quarter of it.**',
  '⚠ **A writes *ten taken at random from each pallet* and is satisfied.** ⚠ **B asks what A would actually pick up at six in the morning, and the honest answer is the ones on top.** ⚠ **B\'s point: *at random* asks a tired person to make a decision, and they will make the quickest one** — **so write a rule that chooses for them and the decision disappears.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the standard in three parts. ⚠ Then write the sample rule, and say why it does not contain the words *at random*.'));
out.push(PHRASE_CARD(['how many out of how many?', 'that is not a sample', 'not at random', 'a rule that chooses', 'six in the morning']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** checks your work performs. Give each all three parts.'));
out.push(table(['The check', 'Tolerance', 'Method', 'Sample — how many, out of how many, chosen how'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.6, 1.8, 3.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The check is _______. The tolerance is _______ and the method is _______. The sample is _______ out of _______, chosen by _______. It had _______ of the three parts before today._'));
out.push(p('**Listener task:** count how many checks were missing the sample. ⚠ Then ask how many of the writers knew what the real sample was, and expect most of them to have had to guess.'));
out.push(p('**Board clinic:** your teacher writes four standards on the board — look for one with no sample and one whose tolerance is tighter than the process. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**BENCH PAGE, REVISION 3: WHAT IS BEING ADDED AND WHY. 9 October. N. Mansour. Administration office.**',
  '⚠ **Revision 2 of 1 April has a tolerance and a method and no sample.** **It says the plate is within two millimetres, measured on the gauge, and it says nothing about how many plates are measured.**',
  '⚠ **What has actually been done since 2015 is two, sometimes three: the first of a run, and one more when the machine sounds different.** **That is not a criticism of anybody** — ⚠ **it is not on the page, so it has never been anybody\'s to change.**',
  '⚠ **Revision 3 adds one line and changes nothing else:**',
  '⚠ *Sample: five plates a run — the first, and the fifth plate of each quarter of the run thereafter.*',
  table(['Why this wording', 'What it avoids'], [
    ['⚠ **five, not two** — **a drift that begins in the fourth quarter of a run is invisible to a sample taken at the start**', '⚠ **a sample that only detects a machine set up wrongly, which is the failure we have never had**'],
    ['⚠ **the fifth plate of each quarter** — **a rule that chooses for the person performing it**', '⚠ *at random*, **which asks a tired man at six in the morning to make a decision, and he will take the one on top**'],
    ['⚠ **the first as well** — **because a set-up error is the cheapest failure to catch**', '⚠ **a sample spread evenly and starting late, which would let a whole quarter go before the first check**'],
  ], [4.6, 4.4]),
  '⚠ **One thing revision 3 does not do.** **It does not tighten the two millimetres.** ⚠ **Our process holds two millimetres and would fail one, and a standard our own work fails twice a week teaches everybody in the building to ignore standards** — **which is worse than having none.**',
  '⚠ **And the figure that made the case.** **A run is four hundred. Two measured is one in two hundred.** ⚠ **Five measured, spread, is one in eighty, and it is the first sample we have ever had that could find a drift rather than a mistake.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does revision 3 add, and what does it deliberately not change?'));
out.push(item('2', 'Why five and not two, and why *the fifth plate of each quarter* rather than *at random*?'));
out.push(item('3', 'What is the difference between a sample that finds a mistake and one that finds a drift?'));
out.push(box('Writer\'s box', [
  '**The revision note — five parts:** ⚠ **what the current revision has and lacks** → ⚠ **what is actually being done, with *that is not a criticism*** → **the new line, quoted** → ⚠ **a table of *why this wording · what it avoids*** → ⚠ **and what the revision does NOT change.**',
  '⚠ **Say what is actually being done before you change anything.** ⚠ **Two, sometimes three, since 2015** — **and then the sentence that it is not on the page, so it has never been anybody\'s to change.** **A revision that implies somebody was failing a rule that did not exist loses the person who has to perform the new one.**',
  '⚠ **Quote the new line on its own, on its own line.** **One sentence, set apart** — ⚠ **because a revision note is read by somebody looking for what changed, and they should find it in four seconds.**',
  '⚠ **Give *what it avoids* its own column.** ⚠ **The reasoning for a sample rule is almost entirely about the failure modes it misses**, **and a column of avoided faults is the only way to show that the wording was chosen rather than written.**',
  '⚠ **And say what you are NOT changing, with the reason.** ⚠ **The two millimetres stands, because a standard your own work fails twice a week teaches the building to ignore standards** — **and a revision that tightens everything it touches is a revision somebody will quietly stop performing.**',
  '⚠ **End on the arithmetic.** ⚠ **Two in four hundred is one in two hundred; five spread is one in eighty** — **and the second is the first sample that could find a drift rather than a mistake.** **One line of division is worth a paragraph of argument.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a revision note adding a sample rule to a check of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, REVISION ______________: WHAT IS BEING ADDED AND WHY. ______________. ______________.**   ⚠ **Revision ______________ has ______________ and no ______________.**   ⚠ **What has actually been done since ______________ is ______________. That is not a criticism of anybody** — ⚠ **it is not on the page, so it has never been anybody\'s to change.**   ⚠ **Revision ______________ adds one line and changes nothing else:**   ⚠ _Sample: ______________._   **Why this wording** | **What it avoids**   ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________**   ⚠ **One thing this revision does not do.** **It does not ______________.** ⚠ **______________.**   ⚠ **And the figure that made the case. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is actually being done, with *not a criticism*', ''],
  ['The new line quoted on its own', ''],
  ['*What it avoids* given its own column', ''],
  ['What the revision does not change, with the reason', ''],
  ['The arithmetic of the old sample against the new', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sample rule. ⚠ The class says of each whether a tired person alone at six in the morning would have to decide anything.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a check your work performs (**200 to 240 words**). Say what it measures, what the tolerance and method are, what the sample actually is, who decided that, and what you would write on the page.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would the sample find a drift or only a mistake?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the real sample different from the written one? Usually all three — ⚠ **and in most cases the real one is smaller, chosen by whoever performs it, and has been right for years, which is a record and not a sample.**'));
out.push(box('Homework', ['Write your final text. Then take one check at your work, ask the person who performs it how many they actually check, and write the sample rule they tell you (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.3 =======================
out.push(pb());
out.push(h2('14.3  Deemed accepted, in both directions'));
out.push(p('**Function:** reading silence as agreement, including your own   ·   **Grammar:** _deemed accepted unless rejected within · we do not take the point_   ·   **Pronunciation:** a right waived, read as a choice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your work has a period to object to. ⚠ Then say who counts the days, and what happens when nobody does.'));
out.push(p('**b**  Which is a decision? _we did not reply in time · we are not taking the point that the rejection is out of time, and we are saying so_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Nour found?   **A** that the marking is acceptable   **B** that the rejection is four days out of time, and that the August consignment was deemed accepted the same way   **C** that clause 12 does not apply'));
out.push(p('**b**  Listen again. **1** What are the two dates for each consignment? **2** Why does Mr Ayoub decide not to take the point, and what does he insist on saying?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  "Four days, and both ways"', [
  ['Nour', 'Clause 12. A consignment not rejected within fourteen days of delivery is deemed accepted. The September consignment was delivered on the 18th.'],
  ['Mr Ayoub', 'Fourteen days.'],
  ['Nour', '⚠ **2 October. Their letter is dated 2 October and under clause 17 it is deemed received on the 6th.** ⚠ **The rejection is four days out of time.**'],
  ['Mr Ayoub', '⚠ **So we do not have to take the cartons back at all.**'],
  ['Nour', '⚠ **No. And there is the other half, which I found while I was counting.** ⚠ **The August consignment had three cartons with the same marking fault and nobody told anybody. It was delivered on 14 August and we are now in October.**'],
  ['Mr Ayoub', '⚠ **Which means?**'],
  ['Nour', '⚠ **That under the same clause, read the same way, we accepted those three.** ⚠ **Clause 12 does not care which way round we are standing.**'],
  ['Mr Ayoub', '⚠ **Then I am not taking the point.** **Four days on a two-month-old agreement, against a buyer who found a real fault, to keep 58,000.**'],
  ['Nour', 'We would win it.'],
  ['Mr Ayoub', '⚠ **We would win it once.** ⚠ **And for the rest of the agreement every letter they write will be dated three days early and sent by hand, and every question we ask will be answered by a man counting days.**'],
  ['Nour', 'So I write as though we had not noticed.'],
  ['Mr Ayoub', '⚠ **You write that we noticed and are not taking it.** ⚠ **A right you do not use is worth nothing; a right you say you are not using is worth the whole of the next twelve months.** **One sentence, no more, and no conditions attached to it.**'],
  ['Nour', 'And the three cartons in August?'],
  ['Mr Ayoub', '⚠ **Say that too, in the same letter.** ⚠ **If I am telling them I will not count days against them, I cannot be hoping they do not count ours.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Deemed acceptance, read both ways**',
  table(['', 'What it says', 'What follows'], [
    ['⚠ **the clause**', '⚠ *a consignment not rejected within fourteen days of delivery is deemed accepted*', '⚠ **silence is agreement** — **and the clause does not care which way round you are standing**'],
    ['**their side**', '**delivered 18 September; fourteen days to 2 October; letter deemed received the 6th**', '⚠ **four days out of time** — **a complete answer**'],
    ['⚠ **your side**', '**delivered 14 August; three cartons with the same fault; nobody wrote**', '⚠ **deemed accepted** — **and found by the person counting the other side\'s days**'],
    ['⚠ **the decision**', '⚠ *we have noticed and we are not taking the point*', '⚠ **a right you do not use is worth nothing; a right you say you are not using is worth the year**'],
  ], [1.3, 3.5, 4]),
  '⚠ **Deemed acceptance is the most symmetrical clause in a commercial agreement and almost nobody reads it both ways.** ⚠ **The firm counting the other side\'s fourteen days is the firm most likely to discover its own** — **and Nour found August while counting September, which is how it always happens.**',
  '⚠ **Count your own first.** ⚠ **Before you take a limitation point, look for the consignment, invoice or notice where the same clause ran against you** — **because the other side will look, and they will find it after you have taken the point and not before.**',
  '⚠ **A right you decline must be declined out loud.** ⚠ *We have noticed that the rejection is out of time and we are not taking the point.* **Fifteen words.** ⚠ **Unsaid, it is worth nothing at all; said, it is the most valuable sentence in the letter** — **because it tells the reader what kind of counterparty they have for the next twelve months.**',
  '⚠ **And attach no condition to it.** ⚠ *We are not taking the point, provided that…* **is not a concession, it is a trade, and a trade invites a counter-offer.** **One sentence, full stop, nothing after it.**',
  '⚠ **Then say your own.** ⚠ **If you are telling them you will not count days against them, you cannot be hoping they do not count yours** — **and the August three cartons go in the same letter, because a letter that is generous about their lateness and silent about yours is a letter with a hole in it.**',
  '**Practise:** Take a period in an agreement of yours. Count it against the other side and against yourself. Then write the sentence declining the point.',
  '**Useful phrases:**  deemed accepted, both ways  ·  count your own first  ·  we have noticed and we are not taking it  ·  no condition attached  ·  we would win it once',
  '**Pronunciation – a right waived.** 🔊 **Track 14.6** Listen twice. ⚠ **The first says *we are not taking the point* level and finished.** ⚠ **The second rises at the end.** **Level, it is a decision; rising, it sounds like the first half of a bargain, and the reader will wait for the second half.** Say it four times, falling to a full stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A finds a point; B tests both directions.'));
out.push(dlg(null, [
  ['A', 'Their letter is out of time. The period was __________ and they wrote on __________.'],
  ['B', '⚠ **Good. Now count ours.**'],
  ['A', 'Ours?'],
  ['B', '⚠ **Where has the same clause run against us?**'],
  ['A', '…__________.'],
  ['B', '⚠ **So if we take the point, what do they find?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then are we taking it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And how do we say so? One sentence, nothing attached.**'],
]));
out.push(table(['Role card 1 — the point that wins once', 'Role card 2 — the condition attached'], [[
  '⚠ **A wants to take the limitation point, because it is a complete answer and worth 58,000.** ⚠ **B agrees that it would win and asks what the next twelve months look like afterwards:** **every letter dated three days early and sent by hand, every question answered by a man counting days.** ⚠ **B\'s point: a right used once on a two-month-old agreement buys a figure and sells a year.**',
  '⚠ **A writes *we are not taking the point, provided that the forty cartons are the end of the matter*.** ⚠ **B shows what that is: not a concession but a trade, and a trade invites a counter-offer.** ⚠ **B\'s point: the whole value of the sentence is that it asks for nothing** — **attach a condition and you have spent the right and bought nothing with it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both counts — theirs and ours. ⚠ Then write the declining sentence, and check that nothing follows the full stop.'));
out.push(PHRASE_CARD(['count ours first', 'both ways', 'we are not taking it', 'nothing attached', 'win it once']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** periods from agreements of yours. Count each in both directions.'));
out.push(table(['The clause and the period', 'Against them', 'Against us', 'Taking the point?'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.2, 2.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The period is _______. Against them it ran out on _______. Against us, _______. I would _______ take the point, because _______. The sentence is: _______._'));
out.push(p('**Listener task:** count how many people found a period that had run against their own side. ⚠ Then ask how many had looked before today, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four declining sentences on the board — look for one with a condition attached and one that implies the firm had not noticed. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**Sham Trading, Mezzeh, Damascus — 10 October. Mr Hamdan, Dallal Freres, Beirut**',
  'Dear Mr Hamdan',
  '⚠ **Your letter of 2 October rejects forty cartons from the consignment delivered on 18 September. We will take them back and credit them, and the credit note is enclosed. 58,000 at 1,450 a carton.**',
  '⚠ **Two things I want to say about that, and neither of them is a condition.**',
  '⚠ **First. Under clause 12 a consignment not rejected within fourteen days of delivery is deemed accepted. Fourteen days from 18 September expired on 2 October, and under clause 17 your letter is deemed received on 6 October. We have noticed that the rejection is out of time and we are not taking the point.**',
  '⚠ **Second, and for the same reason. The consignment delivered on 14 August included three cartons with the same marking fault, and nobody here wrote to you about them. Under the clause read the same way, those three are deemed accepted. I am telling you because if I am not going to count days against you I cannot be hoping that you do not count ours.**',
  '⚠ **On the marking itself I am not going to argue with you about forty cartons.** **I have looked at eleven of them and there are four I would not have despatched.** ⚠ **The word in the agreement is *clean*, which has no tolerance, no sample and no method, and two people can apply it honestly and reach different answers. That is as much our doing as yours: nobody asked at the time what it meant.**',
  '⚠ **I will write separately, in three weeks, proposing a form of words for the next consignment. I am deliberately not sending it with this letter, because a standard sent while a rejection is live is a defence of the cartons and would be read as one.**',
  'Yours sincerely, **N. Mansour, Administration**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer say *and neither of them is a condition* before the two points?'));
out.push(item('2', 'What reason does she give for raising the August consignment?'));
out.push(item('3', 'What does she say about the word *clean*, and whose fault does she say it is?'));
out.push(box('Writer\'s box', [
  '**The letter that declines a point — six parts:** ⚠ **the remedy first, with its figure** → ⚠ *and neither of them is a condition* → **the point declined** → ⚠ **your own side of the same clause** → **the substance, conceded as far as it is true** → ⚠ **and the thing you are deliberately not sending.**',
  '⚠ **Put the remedy in the first paragraph, with the figure and the credit note in it.** **A letter that reaches the remedy in paragraph four has been read as a refusal by paragraph two** — ⚠ **and everything generous after that is read as a retreat rather than a decision.**',
  '⚠ **Announce that the two points are not conditions, before making them.** ⚠ *Two things I want to say about that, and neither of them is a condition.* **Twelve words** — **and without them a reader arrives at a declined right looking for the price of it.**',
  '⚠ **Quote the clause and do the arithmetic in the letter.** ⚠ **Fourteen days from the 18th expired on the 2nd; deemed received the 6th** — **because *out of time* unexplained is an assertion, and the two dates make it a fact the reader can check in ten seconds.**',
  '⚠ **Then your own side of the clause, with the reason for telling them.** ⚠ *If I am not going to count days against you I cannot be hoping that you do not count ours.* **That sentence is the one the letter will be remembered for**, **and it costs three cartons.**',
  '⚠ **Concede the substance as far as it is true and no further.** ⚠ **Four of eleven I would not have despatched** — **and then the word, with *that is as much our doing as yours*.** **A concession with a figure in it is believed; a concession in the form of regret is not.**',
  '⚠ **And say what you are deliberately not sending, and why.** ⚠ **It turns an omission into a decision** — **and it books the second letter, so that in three weeks the standard arrives as something already announced rather than as a new move.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter declining a point you could take (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________. ______________**   Dear ______________   ⚠ **Your letter of ______________ ______________. We will ______________. ______________.**   ⚠ **Two things I want to say about that, and neither of them is a condition.**   ⚠ **First. Under clause ______________, ______________. ______________ expired on ______________, and ______________. We have noticed that ______________ and we are not taking the point.**   ⚠ **Second, and for the same reason. ______________. I am telling you because if I am not going to ______________ I cannot be hoping that ______________.**   ⚠ **On ______________ itself I am not going to argue with you about ______________.** **I have looked at ______________ and ______________.** ⚠ **______________. That is as much our doing as yours: ______________.**   ⚠ **I will write separately, in ______________, proposing ______________. I am deliberately not sending it with this letter, because ______________.**   Yours sincerely, **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The remedy and its figure in the first paragraph', ''],
  ['*Neither of them is a condition*, before the points', ''],
  ['The arithmetic of the period, in the letter', ''],
  ['Your own side of the same clause, with the reason for saying so', ''],
  ['The thing you are deliberately not sending, and why', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their declining sentence. ⚠ The class says whether anything follows the full stop, and whether anything before it hints at a price.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a period your work has to object in (**200 to 240 words**). Say what the period is, who counts it, whether it has ever run out against you, whether anybody noticed, and what you would do if you found a point you could take.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _has the clause ever run against your side?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many does anybody count the days? Usually one of three — ⚠ **and in the other two the firm is relying on nobody else counting either, which has worked so far and is not a position.**'));
out.push(box('Homework', ['Write your final text. Then take one objection period in an agreement of yours, count it in both directions, and write the sentence you would use to decline the point (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.4 =======================
out.push(pb());
out.push(h2('14.4  A rejection that will hold'));
out.push(p('**Function:** writing a rejection against a criterion   ·   **Grammar:** _we reject under clause X, which requires Y; the goods are Z_   ·   **Pronunciation:** a rejection read as a measurement, not a complaint'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your work has sent back. ⚠ Then say what reason was given, and whether the reason named a term.'));
out.push(p('**b**  Which will hold? _the plate is poor and we are not accepting it · we reject under clause 6, which requires plate within two millimetres; four of five measured are at three_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say is wrong with the first draft of the rejection?   **A** it is too strong   **B** it describes the goods instead of quoting the criterion and the measurement   **C** it is too late'));
out.push(p('**b**  Listen again. **1** What are the four parts of a rejection that holds? **2** What does Nadia say about the sentence *we are very disappointed*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  "The clause, the requirement, the measurement, the remedy"', [
  ['Nour', 'The plater\'s delivery. I have written that the plate is poor and we are not accepting it.'],
  ['Nadia', '⚠ **That will not hold for a week.**'],
  ['Nour', 'It is true. It is poor.'],
  ['Nadia', '⚠ **It is true and it is an opinion, and he will answer it with his own opinion.** ⚠ **What clause are you rejecting under?**'],
  ['Nour', 'Clause 6 of his terms. Plate within two millimetres.'],
  ['Nadia', '⚠ **Then say that. And then what you measured.**'],
  ['Nour', 'Five plates, and four of them are at three millimetres.'],
  ['Nadia', '⚠ **Four of five, at three, measured on the gauge, under revision 3 of the bench page.** ⚠ **Now he cannot answer with an opinion, because there is nothing in that sentence to have an opinion about.**'],
  ['Nour', 'And I have put that we are very disappointed.'],
  ['Nadia', '⚠ **Take it out.** ⚠ **It is the only sentence in the letter he can reply to, and he will reply to it** — **and then you are in a conversation about how disappointed you are, which has no end and no remedy in it.**'],
  ['Nour', 'What is the fourth part?'],
  ['Nadia', '⚠ **What you want him to do, and by when.** ⚠ **A rejection with no remedy in it is a complaint** — **and a supplier reading a complaint waits to see whether you meant it.**'],
  ['Nour', 'Replace the four, by the 20th.'],
  ['Nadia', '⚠ **And say what happens if he does not, in the same sentence.** ⚠ **Not a threat** — **a consequence, which he is entitled to know before the 20th rather than on the 21st.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A rejection that holds — four parts**',
  table(['Part', 'What it says', 'Why'], [
    ['**1 the clause**', '⚠ *we reject under clause 6 of your terms*', '**a rejection with no clause in it is a request**'],
    ['**2 the requirement**', '⚠ *which requires plate within two millimetres*', '⚠ **quote it** — **so that the standard in the letter is his and not yours**'],
    ['**3 the measurement**', '⚠ *five plates measured on the gauge; four are at three millimetres*', '⚠ **a figure, a sample and a method** — **nothing to have an opinion about**'],
    ['**4 the remedy**', '⚠ *replace the four by the 20th; otherwise we will source them and charge the difference*', '⚠ **and the consequence, in the same sentence** — **he is entitled to know it before the 20th**'],
  ], [1.4, 3.6, 3.8]),
  '⚠ **A rejection that describes the goods invites an opinion; a rejection that quotes a criterion and a measurement does not.** ⚠ *The plate is poor* **can be answered by a man who thinks it is acceptable.** ⚠ *Four of five plates measured on the gauge are at three millimetres against a requirement of two* **cannot be answered at all, except with facts.**',
  '⚠ **Quote the requirement from HIS document where you can.** **A standard in your letter is your standard; the same standard quoted from his terms is his** — ⚠ **and a supplier arguing with his own clause 6 is in a much worse position than one arguing with your opinion of his plate.**',
  '⚠ **Take out the feeling.** ⚠ *We are very disappointed* **is the only sentence in the letter he can reply to, and he will reply to it** — **after which you are in a conversation about disappointment, which has no remedy in it and no end.**',
  '⚠ **Put the remedy and its date in, or you have written a complaint.** ⚠ **A supplier reading a complaint waits to see whether you meant it** — **and the waiting is the cost, not the plate.**',
  '⚠ **And put the consequence in the same sentence as the remedy.** ⚠ *Replace the four by the 20th; otherwise we will source them elsewhere and charge the difference.* **It is not a threat, it is information he is entitled to have on the 15th rather than on the 21st** — **and a consequence disclosed in advance is almost never incurred.**',
  '**Practise:** Take something your work has rejected. Rewrite the rejection in four parts, with the requirement quoted from the other side\'s own document.',
  '**Useful phrases:**  we reject under clause  ·  which requires  ·  five measured, four at three  ·  take the feeling out  ·  the remedy and the consequence together',
  '**Pronunciation – a rejection as a measurement.** 🔊 **Track 14.8** Listen twice. ⚠ **The first says *four of five are at three millimetres* flatly.** ⚠ **The second leans on *four*.** **Flat, it is a reading off a gauge; leaned on, it is an accusation, and an accusation gets a defence instead of four new plates.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A drafts a rejection; B rebuilds it in four parts.'));
out.push(dlg(null, [
  ['A', 'We are rejecting it because __________.'],
  ['B', '⚠ **Under which clause?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does that clause require? In its words.**'],
  ['A', '__________.'],
  ['B', '⚠ **And what did you measure? How many, and with what?**'],
  ['A', '__________.'],
  ['B', '⚠ **What do you want done, and by when?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what happens if it is not? Same sentence.**'],
]));
out.push(table(['Role card 1 — the description instead of the criterion', 'Role card 2 — the feeling that gets answered'], [[
  '⚠ **A rejects on a description — the plate is poor, the finish is bad, the marking is careless.** ⚠ **B asks what clause, and then asks A to quote the requirement from the supplier\'s own terms.** ⚠ **B\'s point: a description can be met with a description, and the exchange that follows has no remedy in it** — **where a quoted clause and a measurement can only be met with facts.**',
  '⚠ **A has written that the firm is very disappointed and considers the matter serious.** ⚠ **B asks what the supplier can reply to in the letter, and the answer is only that sentence.** ⚠ **B\'s point: the one line a reader can argue with is the one he will argue with** — **and the argument will be about feelings, which cannot be measured and cannot be remedied.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the rejection in four parts. ⚠ Then find the sentence B removed, and say why a reader always replies to it.'));
out.push(PHRASE_CARD(['under which clause?', 'in its words', 'how many, with what?', 'by when?', 'and if it is not']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things your work has rejected or should have. Write each in four parts.'));
out.push(table(['The clause', 'The requirement, quoted', 'The measurement', 'The remedy, with its date and consequence'], [['', '', '', ''], ['', '', '', '']], [1.4, 2.6, 2.4, 3.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We reject under clause _______, which requires _______. We measured _______ and _______. We want _______ by _______; otherwise _______._'));
out.push(p('**Listener task:** count how many rejections had quoted the requirement from the other side\'s document. ⚠ Then ask how many had a consequence in the same sentence as the remedy, and expect very few.'));
out.push(p('**Board clinic:** your teacher writes four rejections on the board — look for one that describes the goods and one with no remedy. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**Sham Trading, Mezzeh, Damascus — 13 October. The plater, Damascus**',
  'Dear Mr Hamwi',
  '⚠ **We reject the delivery of 11 October, forty plates, under clause 6 of your terms of business, which requires plate to be within two millimetres.**',
  '⚠ **We measured five plates on the gauge, under revision 3 of our bench page: the first of the delivery and the fifth of each quarter of it. Four of the five are at three millimetres. The readings are 3.0, 3.1, 2.0 and 3.0 and 3.1, in that order, and the plates are held and numbered.**',
  '⚠ **We ask you to replace the four by Tuesday 20 October. If they are not here by then we will source them from Aleppo at the February price and charge you the difference, which on the last comparison was about four hundred a plate.**',
  '⚠ **Two further things, so that nothing is a surprise.** **The circular of 22 January and the invoice of 4 March put your rate up twelve per cent from 1 March, and we have paid it without query on every delivery since. This is the first delivery we have rejected in nine years.**',
  '⚠ **And the sample of five is new. Until April we measured the first plate of a run and one more if the machine sounded different, which is two out of four hundred. We are now measuring five, spread through the run.** **I am telling you that because the change is ours and not a complaint about you** — ⚠ **and because on the old sample we would probably have measured the 2.0 and passed the delivery.**',
  'Yours sincerely, **N. Mansour, Administration**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the four parts of the rejection, and where is each?'));
out.push(item('2', 'Why does the writer mention the twelve per cent and the nine years?'));
out.push(item('3', 'Why does she say the firm would probably have passed the delivery on the old sample?'));
out.push(box('Writer\'s box', [
  '**The rejection letter — six parts:** ⚠ **the rejection and its clause in the first sentence** → **the measurement, with the sample rule and the readings** → ⚠ **the remedy, its date and its consequence, in one paragraph** → **the relationship, in two facts** → ⚠ **and the change at your own end, declared.**',
  '⚠ **Reject in the first sentence and name the clause there.** **No preamble.** ⚠ **A rejection that begins *I am writing with regard to the delivery of 11 October* has spent its first sentence telling the reader something he knows.**',
  '⚠ **Give the readings, not the conclusion.** ⚠ **3.0, 3.1, 2.0, 3.0, 3.1 — and *the plates are held and numbered*.** **Five numbers and a sentence about custody**, **and the letter cannot be answered with an opinion about plate.**',
  '⚠ **Quote the requirement from HIS terms.** ⚠ *Under clause 6 of your terms of business* — **because a supplier arguing with your standard is comfortable and a supplier arguing with his own clause 6 is not.**',
  '⚠ **Put two facts about the relationship in, and make them checkable.** ⚠ **The twelve per cent paid without query since 1 March, and the first rejection in nine years** — **both dated, both his to verify.** **It is not politeness: it tells him this letter is not the beginning of a pattern, which is the thing a supplier actually fears.**',
  '⚠ **And declare the change at your own end, including the part against you.** ⚠ *On the old sample we would probably have measured the 2.0 and passed the delivery.* **That sentence costs the letter something and buys the next nine years**, **because the alternative is that he discovers the new sample himself and concludes that the standard moved without being told.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a rejection letter for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________. ______________**   Dear ______________   ⚠ **We reject ______________, under clause ______________ of ______________, which requires ______________.**   ⚠ **We measured ______________, under ______________: ______________. The readings are ______________, and ______________.**   ⚠ **We ask you to ______________ by ______________. If ______________ we will ______________, which ______________.**   ⚠ **Two further things, so that nothing is a surprise.** **______________. This is the first ______________ in ______________.**   ⚠ **And ______________ is new. Until ______________ we ______________. We are now ______________.** **I am telling you that because the change is ours and not a complaint about you** — ⚠ **and because ______________.**   Yours sincerely, **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The rejection and its clause in the first sentence', ''],
  ['The readings, not the conclusion', ''],
  ['A remedy with a date and a consequence in one paragraph', ''],
  ['Two checkable facts about the relationship', ''],
  ['The change at your own end, including the part against you', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first sentence. ⚠ The class says whether a clause is named before the twentieth word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rejection your work has made or should have made (**200 to 240 words**). Say what was wrong, what clause it offended, what was measured, what was asked for, and what happened.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what could the other side reply to?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the rejection name a clause? Usually one of three — ⚠ **and in the other two the exchange went on for weeks, which is the arithmetic of the cycle: a quoted criterion costs one sentence and saves a month.**'));
out.push(box('Homework', ['Write your final text. Then find the clause in a supplier\'s own terms that a recent complaint of yours should have been made under, and write the first sentence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.5 =======================
out.push(pb());
out.push(h2('14.5  The criterion that is really a preference'));
out.push(p('**Function:** finding a preference dressed as a criterion, and saying so   ·   **Grammar:** _this is a preference rather than a criterion, and we will meet it anyway_   ·   **Pronunciation:** a distinction drawn without a complaint in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a requirement at your work that nobody can explain the purpose of. ⚠ Then say who would notice if it were dropped.'));
out.push(p('**b**  Which is a criterion? _the carton must be the grey, not the buff · the carton must carry the consignee code on the face that sits outwards on the pallet_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel discover about the grey carton?   **A** that it is cheaper   **B** that nobody at Dallal Freres can say what it is for, and it is a preference of one man   **C** that it is required by the agreement'));
out.push(p('**b**  Listen again. **1** What is the test Nour gives for telling a criterion from a preference? **2** Why does she say the firm should meet the preference and name it anyway?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  "Nobody can say what it is for"', [
  ['Bassel', 'The grey carton. I asked three people in Beirut why it has to be the grey.'],
  ['Nour', 'And?'],
  ['Bassel', '⚠ **Nobody can say. The warehouse man said it was always the grey. The buyer said it looked better on the shelf. Mr Hamdan said it was in the specification, which it is.**'],
  ['Nour', '⚠ **Then it is a preference, and the test is the one you have just applied without knowing it.** ⚠ **Ask what goes wrong if it is not met.** **A criterion has an answer to that and a preference does not.**'],
  ['Bassel', 'The buyer said it looked better.'],
  ['Nour', '⚠ **Which is an answer about him and not about the goods.** ⚠ **Compare the consignee code: if it is on the wrong face, a man on a pallet at six in the morning cannot read it without turning the carton, and he will not turn it.** **That is what goes wrong, and it is a criterion.**'],
  ['Bassel', '⚠ **So we tell them the grey is a preference.**'],
  ['Nour', '⚠ **We tell them it is a preference AND we meet it.** ⚠ **Those two have to be in the same sentence or the first one is a refusal.**'],
  ['Bassel', 'Why meet it at all, if it is nothing?'],
  ['Nour', '⚠ **Because it costs us forty piastres a carton and it matters to the man who buys from us.** ⚠ **A preference that costs you nothing and matters to somebody is the cheapest thing you will ever buy.**'],
  ['Bassel', 'Then why say anything?'],
  ['Nour', '⚠ **Because in March, when they ask for the buff on four hundred cartons at three days\' notice, I want it on the record that the grey was never a requirement.** ⚠ **A preference you have met for six months without naming it has become a requirement, and nobody decided that.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A criterion, or a preference?**',
  table(['', 'A criterion', 'A preference'], [
    ['**the test**', '⚠ *what goes wrong if it is not met?*', '⚠ **has an answer about the goods or the work**'],
    ['⚠ **the answer**', '⚠ *a man on a pallet cannot read the code without turning the carton, and he will not*', '⚠ *it looks better on the shelf* — **an answer about the reader, not the goods**'],
    ['⚠ **what to do**', '**meet it, and build it into the standard**', '⚠ **meet it AND name it** — **in the same sentence**'],
    ['⚠ **what happens if you only meet it**', '**nothing** — **it was a requirement**', '⚠ **it becomes a requirement in about six months, and nobody decided that**'],
  ], [1.9, 3.5, 3.4]),
  '⚠ **The test is one question:** ⚠ *what goes wrong if it is not met?* **A criterion has an answer about the goods or the work. A preference has an answer about a person** — **or no answer at all, which is the commonest case.**',
  '⚠ **Ask three people, as Bassel did, and expect three different answers.** ⚠ **Three different answers to *what is it for* is the signature of a preference**, **and *it has always been the grey* is not one of the three, it is the absence of all of them.**',
  '⚠ **Meet the preference and name it, in the same sentence.** ⚠ **Separated, the naming is a refusal and the meeting is a surrender.** ⚠ *We will supply the grey as we always have; I am noting that the colour is a preference rather than a criterion.* **Nineteen words, and nothing is being asked for.**',
  '⚠ **The reason to name it is six months away.** ⚠ **A preference met without being named has become a requirement, and nobody decided that** — **so when they ask for a different colour on four hundred cartons at three days\' notice, the question is a favour and not a right.**',
  '⚠ **And a preference that costs you little and matters to somebody is the cheapest thing you will ever buy.** **Forty piastres a carton** — ⚠ **so the point of the distinction is not to win it, it is to know which of the things you do is which.**',
  '**Practise:** Take three requirements you meet. Apply the test to each, and write the sentence that meets a preference and names it at the same time.',
  '**Useful phrases:**  what goes wrong if it is not met?  ·  that is an answer about him  ·  a preference rather than a criterion  ·  meet it and name it  ·  it has always been the grey',
  '**Pronunciation – a distinction without a complaint.** 🔊 **Track 14.10** Listen twice. ⚠ **The first says *I am noting that the colour is a preference rather than a criterion* level and in passing.** ⚠ **The second slows and stresses *preference*.** **In passing, it is a note for the record; stressed, it is a grievance, and a grievance gets defended.** Say it four times, in passing.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a requirement; B applies the test.'));
out.push(dlg(null, [
  ['A', 'They require that __________.'],
  ['B', '⚠ **What goes wrong if it is not met?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that an answer about the goods, or about a person?**'],
  ['A', '__________.'],
  ['B', '⚠ **Have you asked more than one person what it is for?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then are we meeting it?**'],
  ['A', '⚠ **Meeting it and naming it.**'],
  ['B', '⚠ **In one sentence. Say it.**'],
]));
out.push(table(['Role card 1 — it has always been the grey', 'Role card 2 — naming it as a refusal'], [[
  '⚠ **A reports three different answers to *what is the grey for*, and offers the fourth — that it has always been the grey.** ⚠ **B points out that this is not a fourth answer but the absence of the first three.** ⚠ **B\'s point: three different answers to *what is it for* is the signature of a preference, and *it has always been* is what people say when there are none.**',
  '⚠ **A writes a note saying the colour is a preference and nothing else, pleased to have established it.** ⚠ **B reads it back as the other side will read it: as the opening of a refusal to supply the grey.** ⚠ **B\'s point: the naming and the meeting have to be in one sentence** — **separated, the naming is a demand and the meeting is a surrender, and the firm gets neither.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the test as one question. ⚠ Then write the single sentence that meets a preference and names it, and check that nothing in it asks for anything.'));
out.push(PHRASE_CARD(['what goes wrong?', 'an answer about him', 'three different answers', 'meet it and name it', 'nobody decided that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** requirements your work meets. Apply the test to each.'));
out.push(table(['The requirement', 'What goes wrong if it is not met', 'Criterion or preference?', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 2.6, 1.4, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The requirement is _______. If it is not met, _______. That is an answer about _______, so it is a _______. The sentence is: _______._'));
out.push(p('**Listener task:** count how many requirements turned out to be preferences. ⚠ Then ask how many of those had been met for over a year, and say what that means: they are requirements now, and nobody decided it.'));
out.push(p('**Board clinic:** your teacher writes four requirements on the board — apply the test to each, and find the one whose purpose three people would describe three ways. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SPECIFICATION: WHAT IS A CRITERION AND WHAT IS NOT. 16 October. N. Mansour. Note for the file, and one paragraph of it for Beirut.**',
  '⚠ **The specification annexed to the agreement has nine requirements. I have applied one test to each: what goes wrong if it is not met?**',
  table(['Req.', 'What goes wrong if it is not met', 'Which'], [
    ['**consignee code on the outward face**', '⚠ **a man on a pallet cannot read it without turning the carton, and he will not turn it** — **so the pallet is broken down to find one line**', '⚠ **criterion**'],
    ['**no mark visible on the printed face**', '**the carton is refused at their counter and comes back across a border**', '⚠ **criterion** — **once 14.1 gives it a tolerance and a sample**'],
    ['**two pallets to a consignment, not three**', '**their bay takes two and the third stands in the yard overnight**', '⚠ **criterion** — **it is about their building and it is still about the goods**'],
    ['**the grey carton, not the buff**', '⚠ **nothing anybody can name** — **three people in Beirut gave three answers and one of them was that it has always been the grey**', '⚠ **preference**'],
    ['**the despatch note folded, not rolled**', '⚠ **nothing** — **and nobody in Beirut had heard of the requirement at all**', '⚠ **preference, and possibly ours**'],
  ], [2, 4.6, 1.4]),
  '⚠ **Seven of the nine are criteria. Two are preferences and we will go on meeting both.** **The grey costs forty piastres a carton and matters to the man who buys from us, and a preference that costs little and matters to somebody is the cheapest thing this company will ever buy.**',
  '⚠ **The paragraph for Beirut is one sentence and it goes in the next ordinary letter, not in a letter of its own:** ⚠ *We will of course go on supplying the grey carton as we always have; for the file I am noting that the colour is a preference rather than a criterion, since nothing turns on it at either end.*',
  '⚠ **Why bother.** **In March they will want four hundred cartons in a different colour at three days\' notice, or a run in the buff because the grey board is short.** ⚠ **If the grey has been met for six months without ever being named, that request is a variation of a requirement.** **If it has been named once, it is a question about a preference** — **and we can say yes to it in an afternoon.**',
  '⚠ **And the folded despatch note is the entry I am least comfortable with.** **It may be our own invention: somebody here may have been folding them since 2019 because somebody else once asked.** ⚠ **I am leaving it on the list as *possibly ours* rather than taking it off, because a preference you have attributed to the other side is worse than one you have identified** — **it is a rule with no author at all.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the nine are criteria, and what is the test that sorted them?'));
out.push(item('2', 'Why does the paragraph for Beirut go in the next ordinary letter rather than a letter of its own?'));
out.push(item('3', 'Why is the folded despatch note the entry the writer is least comfortable with?'));
out.push(box('Writer\'s box', [
  '**The specification note — five parts:** ⚠ **the test, stated once** → **a table of *what goes wrong · which*** → **the count, and what you will go on meeting** → ⚠ **the one sentence for the other side** → ⚠ **and the entry you are least comfortable with.**',
  '⚠ **State the test once and apply it to everything.** ⚠ *What goes wrong if it is not met?* **One question, nine rows** — **and the column is *what goes wrong*, not *why it exists*, because the second invites a story and the first invites a consequence.**',
  '⚠ **Say you will go on meeting the preferences, in the same paragraph as the count.** ⚠ **Otherwise the note reads as a list of things to stop doing**, **which is not what it is for and is not what anybody should do with it.**',
  '⚠ **Put the sentence for the other side in the next ordinary letter, not in a letter of its own.** ⚠ **A letter whose only subject is that something is a preference is a letter about to stop doing it** — **and the whole value of the sentence is that it changes nothing today.**',
  '⚠ **Write *we will of course go on supplying* first and the naming second.** ⚠ **The order is the message.** **Naming first and conceding second reads as a position being retreated from; conceding first and naming second reads as a note for the file, which is what it is.**',
  '⚠ **And name the entry you are least sure of, including when the preference might be your own.** ⚠ *Possibly ours.* **A preference you have attributed to the other side is worse than one you have identified** — **it is a rule with no author, and nobody can authorise dropping it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the specification note for a set of requirements at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT IS A CRITERION AND WHAT IS NOT. ______________. ______________.**   ⚠ **______________ has ______________ requirements. I have applied one test to each: what goes wrong if it is not met?**   **Req.** | **What goes wrong if it is not met** | **Which**   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | **______________** | ⚠ **______________**   **______________** | ⚠ **nothing anybody can name** — **______________** | ⚠ **preference**   ⚠ **______________ of the ______________ are criteria. ______________ are preferences and we will go on meeting ______________.** **______________.**   ⚠ **The paragraph for ______________ is one sentence:** ⚠ _We will of course go on ______________; for the file I am noting that ______________._   ⚠ **Why bother. ______________.**   ⚠ **And ______________ is the entry I am least comfortable with. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The test stated once, and applied to every row', ''],
  ['*What goes wrong*, not *why it exists*', ''],
  ['A statement that you will go on meeting the preferences', ''],
  ['The sentence for the other side: conceding first, naming second', ''],
  ['The entry you are least sure of, named', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sentence for the other side. ⚠ The class says whether it asks for anything, and whether the concession comes before the naming.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a requirement your work meets that nobody can explain (**200 to 240 words**). Say what it is, who you asked, what they said, what it costs, whether you will go on meeting it, and what you would put on the record.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _whose preference is it, and are you sure?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could nobody say what the requirement was for? Usually all three — ⚠ **and in at least one it will turn out to be the writer\'s own side\'s invention, attributed to a customer who has never asked for it.**'));
out.push(box('Homework', ['Write your final text. Then ask three people at your work what one requirement is for, write the three answers down, and decide which of the two it is (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.6 =======================
out.push(pb());
out.push(h2('14.6  Agreeing criteria before the work'));
out.push(p('**Function:** agreeing acceptance criteria in advance   ·   **Grammar:** _agreed before the first run, by both · signed by_   ·   **Pronunciation:** eleven lines read as a list, not a document'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say work your firm has done that was judged afterwards against a standard nobody had stated. ⚠ Then say who decided the standard, and when.'));
out.push(p('**b**  Which is worth having? _a twelve-page quality manual · eleven lines agreed before the first run and signed by both_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour want eleven lines rather than a document?   **A** it is quicker to write   **B** because a document gets filed and eleven lines on one page get read at the bench   **C** because the agreement limits it'));
out.push(p('**b**  Listen again. **1** What does Mr Hamdan want added, and what does Nour concede about it? **2** What is the one thing Nour refuses to put in?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  "Eleven lines, before the first run"', [
  ['Nour', 'Eleven lines. Each with a tolerance, a method and a sample. Signed by you and by me, before the first run of the November consignment.'],
  ['Mr Hamdan', '⚠ **Our quality department has a manual that runs to twelve pages.**'],
  ['Nour', '⚠ **I have read it and nine of its twelve pages are about your own plant.** ⚠ **And a manual gets filed. Eleven lines on one page get pinned up at the bench, and the man at the bench is the only person who will ever apply them.**'],
  ['Mr Hamdan', '⚠ **Then add a twelfth. The pallet wrap.**'],
  ['Nour', 'What goes wrong if the wrap is loose?'],
  ['Mr Hamdan', '⚠ **Two pallets came off a lorry at Chtaura in June and one of them was ours.**'],
  ['Nour', '⚠ **Then that is a criterion and it is a better one than any of mine, because it has an incident behind it.** ⚠ **Give me the tolerance and I will write it.**'],
  ['Mr Hamdan', '⚠ **Four turns at the top and four at the base, and a hand cannot get under the wrap.**'],
  ['Nour', '⚠ **Tolerance, method and sample in one sentence. Twelve lines.**'],
  ['Mr Hamdan', '⚠ **And I want a line saying the goods must be of merchantable quality.**'],
  ['Nour', '⚠ **No, and for the reason the rest of the page exists.** ⚠ **_Merchantable quality_ has no tolerance, no sample and no method** — **it is *clean* again, in a longer coat.** **It is in the law and it does not need to be in the page.**'],
  ['Mr Hamdan', '⚠ **It is in every specification I have ever signed.**'],
  ['Nour', '⚠ **It is, and it is the line that produced the forty cartons.** ⚠ **If you want a general line, put one in: *anything not covered by the twelve lines is to be raised before despatch and not after.*** ⚠ **That one has an act in it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Criteria agreed before the work**',
  table(['', 'Not', 'Write'], [
    ['**the form**', '⚠ **a twelve-page manual** — **nine pages of which are about your own plant**', '⚠ **eleven or twelve lines on one page** — **because a page gets pinned up and a manual gets filed**'],
    ['**each line**', '**a requirement**', '⚠ **a tolerance, a method and a sample, in one sentence**'],
    ['**the signature**', '**issued by one side**', '⚠ **signed by both, before the first run** — **the date is the whole point**'],
    ['⚠ **the general line**', '⚠ *the goods shall be of merchantable quality*', '⚠ *anything not covered by the twelve lines is to be raised before despatch and not after* — **a general line with an act in it**'],
  ], [1.5, 3.4, 4]),
  '⚠ **Criteria agreed after the work is judging; criteria agreed before the work is specifying.** **The two can contain identical words and they are different documents** — ⚠ **and the only thing that makes them different is the date and the two signatures.**',
  '⚠ **Keep it to one page.** ⚠ **The man at the bench is the only person who will ever apply these lines**, **and he will apply the ones he can see.** **Nine pages about the buyer\'s own plant are nine pages he will never read.**',
  '⚠ **Take the other side\'s criteria, especially the ones with an incident behind them.** ⚠ **The pallet wrap is a better criterion than any of yours, because two pallets came off a lorry at Chtaura in June** — **and a criterion with a date and a place behind it is one the bench will believe.**',
  '⚠ **Refuse the general words.** ⚠ *Merchantable quality · fit for purpose · to a high standard · workmanlike* **all have no tolerance, no sample and no method** — **they are *clean* in a longer coat, and they are what produced the dispute the page is meant to prevent.** **They are in the law; they do not need to be on the page.**',
  '⚠ **And if a general line is wanted, write one with an act in it.** ⚠ *Anything not covered by the twelve lines is to be raised before despatch and not after.* **That is a general line somebody can comply with** — **and it puts the burden where it can be discharged, which is before the lorry leaves.**',
  '**Practise:** Take a piece of work your firm is about to do. Write five acceptance lines for it, each with three parts, and one general line with an act in it.',
  '**Useful phrases:**  eleven lines, signed by both  ·  before the first run  ·  a manual gets filed  ·  that is clean in a longer coat  ·  a general line with an act in it',
  '**Pronunciation – a list, not a document.** 🔊 **Track 14.12** Listen twice. ⚠ **The first reads three of the lines in a continuous paragraph voice.** ⚠ **The second reads them as a list, with a clear stop after each.** **As a paragraph they are prose and nobody can hold them; as a list they are three tests.** Say three of them four times, as a list.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a page; B negotiates it.'));
out.push(dlg(null, [
  ['A', 'Eleven lines, each with a tolerance, a method and a sample, signed before __________.'],
  ['B', '⚠ **We have a manual that runs to __________ pages.**'],
  ['A', '__________.'],
  ['B', '⚠ **Then add a line. __________.**'],
  ['A', '⚠ **What goes wrong if it is not met?**'],
  ['B', '__________.'],
  ['A', '⚠ **Then it is a criterion. Give me the tolerance.**'],
  ['B', '⚠ **And a line saying the goods must be of merchantable quality.**'],
  ['A', '__________.'],
  ['B', '⚠ **Then give me a general line I can have.**'],
]));
out.push(table(['Role card 1 — the manual', 'Role card 2 — merchantable quality'], [[
  '⚠ **B offers a twelve-page quality manual instead of the page, and the offer is made in good faith.** ⚠ **A has read it and says that nine of the twelve pages are about B\'s own plant.** ⚠ **A\'s argument is not about length: the man at the bench is the only person who will apply these lines, and a page gets pinned up where a manual gets filed.**',
  '⚠ **B wants a line requiring merchantable quality, because every specification he has signed has one.** ⚠ **A refuses and gives the reason the page exists: the phrase has no tolerance, no sample and no method, and it is the line that produced the forty cartons.** ⚠ **A then offers a general line B can have** — **one with an act in it, raising anything uncovered before despatch rather than after.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the negotiation for the class – **without the book**.'));
out.push(p('**Listener task:** write the twelfth line, with all three parts. ⚠ Then write the general line that was accepted, and say what act is inside it.'));
out.push(PHRASE_CARD(['eleven lines, one page', 'signed by both', 'what goes wrong?', 'clean in a longer coat', 'a line with an act in it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a piece of work your firm is about to do. Write **five** acceptance lines and one general line.'));
out.push(table(['#', 'The line — tolerance, method, sample', 'Whose criterion', 'Incident behind it?'], [['**1**', '', '', ''], ['**2**', '', '', ''], ['**3**', '', '', ''], ['**4**', '', '', ''], ['**5**', '', '', ''], ['**gen.**', '', '', '']], [0.5, 5, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My page has _______ lines. _______ of them are theirs and _______ have an incident behind them. The general line says _______. The thing I refused to put in is _______, because _______._'));
out.push(p('**Listener task:** count how many pages contained a general phrase with no parts. ⚠ Then ask how many had taken a criterion from the other side, and note that those are the lines most likely to be honoured.'));
out.push(p('**Board clinic:** your teacher writes five acceptance lines on the board — look for one that is a preference, one with no sample, and one that is *clean* in a longer coat. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ACCEPTANCE CRITERIA, NOVEMBER CONSIGNMENT. Agreed before the first run. Twelve lines.**',
  '**Agreed 24 October between N. Mansour for Sham Trading and A. Hamdan for Dallal Freres. Applies from the run beginning 3 November. Pinned at the marking bench and at the Beirut bay.**',
  table(['#', 'The line'], [
    ['**1**', '**No mark visible on the printed face at arm\'s length in daylight, on ten cartons taken as the first of each pallet and the fifth of each quarter of it; one carton in ten allowed.**'],
    ['**2**', '**Consignee code on the face that sits outwards on the pallet; every carton; checked by the loader against the gate sheet.**'],
    ['**3**', '**Plate within two millimetres, measured on the gauge, five plates a run: the first and the fifth of each quarter.**'],
    ['**4**', '**Two pallets to a consignment. A third requires three days\' notice in writing.**'],
    ['**5**', '⚠ **Pallet wrap: four turns at the top and four at the base, and a hand cannot be passed under the wrap. Every pallet, checked by the loader.** _(Dallal Freres: two pallets came off a lorry at Chtaura in June.)_'],
    ['**6**', '**Grey carton. Every carton.** ⚠ _(Noted as a preference rather than a criterion; supplied as always.)_'],
    ['**7**', '**Gate sheet counted against the order before loading and signed by name.**'],
    ['**8**', '**Despatch note: three copies, one on the pallet under the wrap.**'],
    ['**9**', '**Any consignment short by more than ten cartons: telephone the Beirut bay the same day, and the shortfall in writing within two business days.**'],
    ['**10**', '**Inspection within fourteen days of delivery, as clause 12. Rejections to quote the line number above.**'],
    ['**11**', '**A rejected carton is held and numbered, at whichever end rejects it, until the credit is agreed.**'],
    ['**12**', ' ⚠ **Anything not covered by lines 1 to 11 is to be raised before despatch and not after.**'],
  ], [0.4, 8.6]),
  '⚠ **Three things about this page and then it should be left alone for a year.**',
  '⚠ **Line 10 is the one that makes the rest of it work.** **A rejection that quotes a line number is a rejection against a criterion, which is 14.4** — **and the forty cartons of September could not have been written that way, because there was no number to quote.**',
  '⚠ **Line 6 is the only entry on the page that is not a criterion, and it says so in its own line.** ⚠ **That bracket is what will make a different colour a question rather than a variation in March.**',
  '⚠ **And line 5 is theirs.** **It has an incident behind it, with a month and a place, and it is the only line on the page the Beirut bay will quote back to us from memory** — ⚠ **which is worth more than any line we wrote ourselves.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does line 10 do for the rest of the page?'));
out.push(item('2', 'Why is line 6 on the page at all, and what does its bracket do?'));
out.push(item('3', 'Why does the writer say line 5 is worth more than any line she wrote herself?'));
out.push(box('Writer\'s box', [
  '**The acceptance page — five properties:** ⚠ **a heading with both names, a date and *before the first run*** → **one line per criterion, each with three parts** → ⚠ **a line requiring rejections to quote a line number** → ⚠ **preferences on the page, marked as preferences** → ⚠ **and a general line with an act in it.**',
  '⚠ **Put both names, the date and where the page is pinned in the heading.** ⚠ *Pinned at the marking bench and at the Beirut bay.* **A page that exists in two buildings is a page two people can argue from** — **and a page in one building is one side\'s view of the standard.**',
  '⚠ **One line per criterion and three parts in each.** ⚠ **If a line will not fit on one printed line it is two criteria** — **and splitting it is almost always right, because the two halves usually have different samples.**',
  '⚠ **The line that makes the page work is the one requiring a rejection to quote a line number.** ⚠ **Without it the page is advice; with it the page is the only vocabulary a rejection can be written in** — **and both sides have agreed to that in advance.**',
  '⚠ **Put the preferences on the page and mark them.** ⚠ **Line 6, in a bracket, in its own line.** **A preference left off the page is a preference that will be met anyway and will become a requirement; a preference on the page, marked, is a thing that can be changed by a telephone call.**',
  '⚠ **Take their criteria and keep the incident attached.** ⚠ *Two pallets came off a lorry at Chtaura in June.* **It is the only line the other side\'s staff will quote from memory**, **and a criterion somebody quotes from memory is one that gets performed.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an acceptance page for a piece of work at your own firm (**80 words or more**). Use the frame.'));
out.push(p('**ACCEPTANCE CRITERIA, ______________. Agreed before ______________. ______________ lines.**   **Agreed ______________ between ______________ and ______________. Applies from ______________. Pinned at ______________ and at ______________.**   **1** | **______________** — **tolerance ______________, method ______________, sample ______________**   **2** | **______________**   **3** | **______________** _(______________: ______________.)_   **4** | **______________** ⚠ _(Noted as a preference rather than a criterion; ______________.)_   **5** | **Rejections to quote the line number above.**   **6** | ⚠ **Anything not covered by lines 1 to ______________ is to be raised before ______________ and not after.**   ⚠ **______________ is the one that makes the rest of it work, because ______________.**   ⚠ **______________ is theirs, and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A heading with both names, a date, and where it is pinned', ''],
  ['Three parts in every line', ''],
  ['A line requiring rejections to quote a line number', ''],
  ['Any preference on the page and marked as one', ''],
  ['A general line with an act in it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their general line. ⚠ The class says whether there is an act in it that somebody could actually perform.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a piece of work at your firm that was judged afterwards (**200 to 240 words**). Say what the work was, what standard it was judged against, when that standard was stated, who stated it, and what one page agreed in advance would have said.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the standard stated before or after the work?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the standard stated after the work? Usually all three — ⚠ **and that is the point of the cycle: criteria agreed before the work and criteria applied after it can contain identical words, and only the date makes them different documents.**'));
out.push(box('Homework', ['Write your final text. Then take one piece of work coming up and write five acceptance lines for it, with three parts each, before it starts (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 14.7 =======================
out.push(pb());
out.push(h2('14.7  Review & Mediate: what we accept every month by saying nothing'));
out.push(p('**Function:** naming what silence has accepted   ·   **Review:** the testable standard · the three parts · deemed acceptance · the rejection that holds · the preference · the agreed page'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the test of a standard, and is it strictness or repeatability?',
  '**2** What are the three parts of a standard, and which is always missing?',
  '**3** What is wrong with the words _at random_ in a sample rule?',
  '**4** What are the four parts of a rejection that holds?',
  '**5** How do you tell a criterion from a preference, and what do you do with a preference?',
  '**6** What makes criteria agreed before the work a different document from the same words applied after it?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say the counter has been accepting?   **A** nothing   **B** short deliveries from the plater, about twice a month, because there is no period and nobody to tell   **C** the wrong cartons'));
out.push(p('**b**  Listen again. **1** What does she do now when a delivery is short? **2** What does she say she would need, and what does she say about the fourteen days?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  "There is no fourteen days at this end"', [
  ['Nour', 'The page is agreed with Beirut. I want to do the same thing at this end, with the plater.'],
  ['Hala', '⚠ **Then there is something you should know, and I have never written it down because nobody asked.**'],
  ['Nour', 'Go on.'],
  ['Hala', '⚠ **The plater is short about twice a month. Two or three plates on a delivery of forty.** ⚠ **I count them, I put a line through the figure on his note, and I write the real number.**'],
  ['Nour', 'And then?'],
  ['Hala', '⚠ **And then nothing. There is nowhere for it to go.** ⚠ **His note goes back with him and our copy goes in the folder, and at the end of the month Nadia pays what the invoice says.**'],
  ['Nour', '⚠ **So we pay for plates we did not receive.**'],
  ['Hala', '⚠ **About twice a month, for as long as I have been at the counter.**'],
  ['Nour', 'How many is that in a year?'],
  ['Hala', '⚠ **I do not know, because the only record is the corrected notes and they are in the folder by month, not by supplier.** **Perhaps fifty plates. Perhaps thirty.**'],
  ['Nour', '⚠ **And nobody has ever rejected one.**'],
  ['Hala', '⚠ **There is no fourteen days at this end.** ⚠ **With Beirut we have a clause and a period, so silence means something. Here there is no period at all** — **so silence means nothing, and I have been doing the only thing that is available to me, which is a line through a figure.**'],
  ['Nour', '⚠ **That is the clearest thing anybody has said to me this month.** **What would you need?**'],
  ['Hala', '⚠ **Somewhere to put the number. A sheet with his name on it and a column for the shortfall, and somebody who looks at it before Nadia pays him.** ⚠ **And I would want the line through the figure to go on being the record, because he initials it and that is the only thing he has ever agreed to.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – what silence has been accepting**',
  table(['What happens', 'What is said', 'What it does'], [
    ['**the practice is named**', '⚠ *the plater is short about twice a month, two or three plates on forty*', '⚠ **a rate, from the only person who has it** — **and no adjective**'],
    ['⚠ **the remedy available is named**', '⚠ *I put a line through the figure and write the real number*', '⚠ **she has been doing the only thing available to her** — **which is not nothing**'],
    ['⚠ **the mechanism is named**', '⚠ *there is nowhere for it to go*', '⚠ **the fault is a missing destination, not a missing person**'],
    ['⚠ **the asymmetry**', '⚠ *with Beirut silence means something; here there is no period at all, so silence means nothing*', '⚠ **deemed acceptance only exists where a clause creates it** — **and the firm has one with its buyer and none with its supplier**'],
    ['⚠ **what she asks for**', '**a sheet with his name and a shortfall column · somebody who looks before payment · the initialled line kept as the record**', '⚠ **three things, and the third is the one an office would have thrown away**'],
  ], [1.9, 3.5, 3]),
  '⚠ **A company with a deemed-acceptance clause against it and none in its favour accepts in one direction and is accepted against in the other.** ⚠ **Sham Trading has fourteen days with Dallal Freres and no period at all with its plater** — **which means its own silence is free and its supplier\'s silence is free too.**',
  '⚠ **Ask the person at the counter what they do now, before proposing anything.** ⚠ **Hala has been putting a line through a figure and getting it initialled for years** — **which is a better record than anything an office would have invented, because the other side signed it.**',
  '⚠ **The fault here is a missing destination and not a missing person.** ⚠ *There is nowhere for it to go.* **A correction with nowhere to go is made once and then stops being made** — **and the remarkable thing is that she has gone on making it.**',
  '⚠ **And when you cannot say how much, say that you cannot, and why.** ⚠ *Perhaps fifty plates, perhaps thirty — the only record is the corrected notes and they are filed by month, not by supplier.* **An honest range with its reason is a finding; a figure invented to fill the gap is not.**',
  '⚠ **Keep the thing the other side has already agreed to.** ⚠ **The initialled line through the figure is the only document in this story that both parties have touched** — **and an office that replaces it with a tidy new sheet has thrown away the evidence and kept the paperwork.**',
  '**Practise:** Find something your work accepts by saying nothing. Ask the person who sees it what they do now, and what they would need.',
  '**Useful phrases:**  about twice a month  ·  there is nowhere for it to go  ·  the only thing available to me  ·  there is no fourteen days at this end  ·  somewhere to put the number',
  '**Pronunciation – a rate with no adjective.** 🔊 **Track 14.14** Listen twice. ⚠ **The first says *the plater is short about twice a month* flatly.** ⚠ **The second leans on *short*.** **Flat, it is a rate being reported; leaned on, it is an accusation against a supplier of nine years, and the conversation becomes about him.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks; B is the person at the counter. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A asks what happens now, before proposing anything at all.** ⚠ **When B describes the correction, A asks where it goes and waits for the answer *nowhere*.** ⚠ **A then asks for a rate rather than an example, asks how B knows, and accepts a range with a reason** — **and A does not supply a figure of their own.**',
  '⚠ **B gives the rate, the remedy they have been using, and the fact that it has no destination.** ⚠ **B names the asymmetry: there is a period with the buyer and none with the supplier, so silence means something at one end and nothing at the other.** ⚠ **And B asks for the initialled correction to be kept as the record** — **because it is the only thing the other side has ever agreed to.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the rate, and the reason the writer cannot give a figure for the year. ⚠ Then write the three things the counter asked for, and say which of them an office would have thrown away.'));
out.push(PHRASE_CARD(['what do you do now?', 'nowhere for it to go', 'about twice a month', 'no fourteen days at this end', 'he initials it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a thing accepted by silence. Find out what is done now, then write the remedy.'));
out.push(table(['The rate, and how it is known', 'What is done now', 'Why it goes nowhere', 'The three things asked for'], [['', '', '', ''], ['', '', '', '']], [2, 2, 2, 2.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the conversation. This is the **second** unit of this book, and the unwritten thing is this: ⚠ **a standard is not a sentence about quality, it is an argument that has been had in advance** — **and the reason most firms argue about quality after the work is that nobody was willing to spend an afternoon on tolerances, samples and methods before it; so the whole of this unit is one afternoon, and the measure of whether it was worth having is not how few rejections there are but how few arguments, because a rejection against an agreed line number is not an argument at all.**'));
out.push(p('_The thing accepted by silence is _______. The rate is _______, known from _______. What is done now is _______. It goes nowhere because _______. And the three things asked for are _______, _______ and _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 2 **obligation-and-evidence word list**: _a testable standard · a sample size · deemed acceptance · a rejection that holds · a criterion that is a preference · an agreed criterion_. ⚠ **Twelve items of the seventy-two.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for one where the office proposed a sheet before asking what was already being done. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)', 10));
out.push(p('⚠ **This unit is Part 2: sentence insertion, five gaps, six sentences, and one is not needed. It is the second time in the level.** ⚠ **Read the whole paragraph each time and look for what the sentence must connect BACKWARDS to as well as forwards.**'));
out.push(box(null, [
  '**ACCEPTANCE CRITERIA: A NOTE FOR MEMBERS — from a trade association\'s guidance.**',
  'Most commercial disputes about quality are not disputes about quality at all. **(1)** ______ The result is that two parties who agree completely about the goods in front of them can be in genuine disagreement about whether those goods conform.',
  'The remedy is to write standards that can be tested. A standard that can be tested has three parts, and the third is the one that is almost always missing. **(2)** ______ Without it, the question of whether a consignment conforms depends on how many items the inspector happened to look at, which is a question about the inspector.',
  'A second and subtler fault is the criterion that is not a criterion. **(3)** ______ Members are advised to apply a single test: what goes wrong if this is not met? A requirement with no answer to that question is a preference, and preferences should be met and recorded as preferences, because a preference met without being recorded becomes, in about two quarters, a requirement that nobody has ever agreed to.',
  'The most valuable single step is also the cheapest. **(4)** ______ The same words written afterwards are a judgement; written beforehand and signed by both parties, they are a specification. Members report that one page agreed in advance removes more disputes than any quality manual, principally because a page is pinned up where a manual is filed.',
  'Finally, and this is the step members most often omit, require that any rejection quote the line it is made under. **(5)** ______ A rejection that quotes a line number can be answered with a measurement; one that describes the goods can only be answered with an opinion, and an exchange of opinions about goods has no natural end.',
]));
out.push(p('**A**  It is to agree the criteria before the work begins, on one page, and to have both parties sign it.'));
out.push(p('**B**  This single requirement converts every later disagreement from a matter of impression into a matter of fact.'));
out.push(p('**C**  They are disputes about words that were never given a tolerance, a sample or a method, and that were therefore never standards.'));
out.push(p('**D**  That part is the sample: how many items are examined, out of how many, and by what rule they are chosen.'));
out.push(p('**E**  Quality manuals are generally written by a quality department for its own plant, and nine pages in ten concern matters the other party cannot observe.'));
out.push(p('**F**  This is a requirement that is really the preference of one person, or of nobody identifiable at all.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a proposal, 120 to 140 words, 20 marks.** **Four content points, all four present, and a proposal takes headings.** ⚠ **This is the first Part 2 of Book 2; the odd units take Part 1.**',
  '⚠ **A proposal about standards takes three headings and they are the unit:** ⚠ **_What the present wording cannot do_ · _What I propose_ · _What it costs and what it saves_.** **Three headings cost six words and they are what makes 135 words a proposal rather than a complaint.**',
  '⚠ **In the first section, name the fault and not the history.** ⚠ *The word "clean" has no tolerance, no sample and no method.* **Fourteen words** — **and a candidate who spends the section on the forty cartons has used the proposal to relitigate a dispute.**',
  '⚠ **Put a figure in *what it costs*.** ⚠ **An afternoon, and one page** — **and against it the figure of the dispute you are preventing.** **A proposal with no cost in it reads as free, and a reader does not believe free.**',
  '⚠ **Part 2 tip, for the insertion above.** ⚠ **Every one of the five gaps is solved by what the sentence connects BACKWARDS to**, **not forwards: gap 1 needs a sentence that explains *not disputes about quality at all*, gap 2 needs one that names *the third part*, gap 5 needs one that explains *this single requirement*.** ⚠ **Find the backward link first and the forward link will confirm it.**',
  '⚠ **And the sentence not needed is about quality manuals.** **It is true, it is relevant to the subject, and nothing in the paragraph it would sit in refers to manuals before or after it** — ⚠ **which is exactly how Part 2 distractors are built: topically correct and structurally unattached.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write a proposal to a customer or supplier for acceptance criteria (**120 to 140 words**). Include **what the present wording cannot do** · **what you propose, in outline** · **what it costs** · and **what it prevents**.'));
out.push(p('**______________**   ⚠ **The word ______________ has ______________.** **Two people can apply it honestly and reach different answers.**   **______________**   ⚠ **______________ lines on one page, each with ______________, ______________ and ______________, agreed before ______________ and signed by both.** **Rejections to quote the line number.**   **______________**   ⚠ **______________ to write and ______________ to agree.** **Against that, ______________.**   ⚠ **I am not proposing ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings', ''],
  ['The fault named, not the history', ''],
  ['A figure in *what it costs*', ''],
  ['What it prevents, with a figure or a consequence', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the acceptance page for a piece of work at your firm (**200 to 240 words**). Give five lines with three parts each, mark any preference as a preference, require rejections to quote a line, and end with the general line.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask the person at your counter or bench what they correct by hand and where the correction goes, and write down what they tell you (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  No mark ___ on the printed face at arm\'s length.   a) visible   b) visibly   c) to visible',
  '2  A consignment not rejected within fourteen days is ___ accepted.   a) deemed to   b) deeming   c) deemed',
  '3  We reject ___ clause 6 of your terms.   a) over   b) under   c) below',
  '4  Four ___ five plates measured are at three millimetres.   a) from   b) in   c) of',
  '5  ___ goes wrong if it is not met?   a) What   b) Which   c) How',
  '6  The criteria were agreed ___ the first run.   a) in front of   b) before   c) ahead',
  '7  We are not ___ the point that the rejection is out of time.   a) taking   b) take   c) took',
  '8  The page was signed ___ both parties.   a) from   b) of   c) by',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 14.15** Listen to the conversation at the counter. Complete the note.   The rate of shortfall: ______   What she does now: ______   Where the correction goes: ______   Why she cannot give a yearly figure: ______   The asymmetry she names: ______   The three things she asks for: ______'));
out.push(p('**C  Reading.** Read the acceptance page at 14.6 again. Say what line 10 does for the rest of the page, why line 6 is on it, and why line 5 is the one the other side will remember.'));
out.push(p('**D  Writing.** Take one word your work uses to judge quality. Write it as a testable standard with all three parts, and write the sentence a rejection under it would begin with (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Nour', 'The page is agreed with Beirut. I want to do the same at this end, with the plater.'],
  ['Hala', '⚠ **Then there is something you should know, and I have never written it down because nobody asked.** ⚠ **The plater is short about twice a month. Two or three plates on a delivery of forty. I count them, I put a line through the figure on his note, and I write the real number.**'],
  ['Nour', 'And then?'],
  ['Hala', '⚠ **And then nothing. There is nowhere for it to go.** **His note goes back with him, our copy goes in the folder, and at the end of the month Nadia pays what the invoice says.**'],
  ['Nour', 'How many is that in a year?'],
  ['Hala', '⚠ **I do not know, because the only record is the corrected notes and they are filed by month, not by supplier. Perhaps fifty plates. Perhaps thirty.**'],
  ['Nour', 'And nobody has ever rejected one.'],
  ['Hala', '⚠ **There is no fourteen days at this end. With Beirut we have a clause and a period, so silence means something. Here there is no period at all, so silence means nothing** — **and I have been doing the only thing available to me, which is a line through a figure.**'],
  ['Nour', 'What would you need?'],
  ['Hala', '⚠ **Somewhere to put the number. A sheet with his name on it and a column for the shortfall, and somebody who looks at it before Nadia pays him.** ⚠ **And I would want the line through the figure to go on being the record, because he initials it and that is the only thing he has ever agreed to.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**14.1** write a standard two people can apply and reach the same answer',
  '**14.2** give a standard a tolerance, a method and a sample rule that chooses for the person performing it',
  '**14.3** read a deemed-acceptance clause in both directions, and decline a point out loud',
  '**14.4** write a rejection in four parts, with the requirement quoted from the other side\'s document',
  '**14.5** tell a criterion from a preference, and meet a preference while naming it',
  '**14.6** agree criteria on one page before the work, signed by both',
  '**14.7** find what your firm accepts by saying nothing, and ask the person who sees it',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
module.exports = out;
