// Proactive Business English B2 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a policy that was not written for you · a rule that applies to you anyway · the body that made it · the date it takes effect · a transition period · the cost of complying · the cost of complying late · to cost a rule before you argue about it · a requirement you cannot influence · a requirement you can ask to be delayed · the falsifying condition · what would show this is wrong · a watcher · somebody whose job it is to look · a condition with nobody watching it · a submission · a joint submission · to sign something you half agree with · the points you agree on · the point you do not · an annex stating a difference · to break ranks · to tell somebody before you file · a competitor whose interest is the opposite of yours · an interest you share with a competitor · the register of a letter to an authority · what an authority can and cannot do · a request an authority is able to grant · a request nobody has the power to grant · to ask the body that can decide · a deadline set by somebody else · a change you plan against rather than argue with';
const COLLOC = 'to cost a requirement · to ask for a transition · to state a falsifying condition · to appoint a watcher · to sign a joint submission · to file an annex · to break ranks · to plan against a change';
const BACK_AT_B2 = 'compliance · non-compliance · regulatory';

out.push(h1('Unit 23  Trade and Policy, and the Rule Nobody Wrote for You'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**23.1**  read a rule that was not written for you and work out exactly what it requires of you',
  '**23.2**  write to a body that can decide, asking for something it has the power to grant',
  '**23.3**  cost a requirement before you argue about it, including the cost of complying late',
  '**23.4**  state the falsifying condition for your own position, and name who is watching for it',
  '**23.5**  plan against a change you cannot influence instead of arguing with it',
  '**23.6**  put a view you share with a competitor, and say where you do not share it',
  '**23.7**  Review & Mediate: the joint submission you half agree with',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ September, and a requirement that arrives whether or not anybody reads it', [
  '⚠ **On 3 September the Ministry published a notice: from 1 January, imported packaging materials must carry a certificate of conformity from an accredited testing body.** **There is a three-month transition and no draft was circulated.**',
  '⚠ **It was not written for Sham Trading.** **It was written about the construction-materials trade, where there had been a failure, and it catches packaging because packaging is in the same schedule** — ⚠ **which nobody at the Ministry has noticed and nobody at Sham Trading can change.**',
  '⚠ **The firm imports about 40 per cent of its packaging from Dallal Freres, who do not currently hold such a certificate.** **The two competitors on the Hama road import from a supplier who does.** ⚠ **So a rule that costs Sham Trading about 900,000 and four months costs them nothing, and the trade association is preparing a joint submission.**',
  '⚠ **The hardest thing in this unit is not the English, and it is not the Ministry.** ⚠ **It is that the submission Nour is being asked to sign is right about three things and wrong about the one that matters to her firm** — **and the association\'s only real asset is that its submissions are unanimous.**',
], C.lyellow, C.orange));

// ======================= CYCLE 23.1 =======================
out.push(pb());
out.push(h2('23.1  Reading a rule that was not written for you'));
out.push(p('**Function:** extracting the requirement from a policy   ·   **Grammar:** _it requires X of Y by Z_   ·   **Pronunciation:** a requirement read without indignation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a rule at your work that came from outside and was not written with your trade in mind. ⚠ Then say what it actually requires of you.'));
out.push(p('**b**  Which is the requirement? _we now have to certify everything, which is absurd · from 1 January, each consignment of imported packaging must be accompanied by a certificate from a body on the Ministry\'s accredited list; the obligation is on the importer and not on the supplier_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour find when she reads the notice properly?   **A** nothing   **B** that the obligation is on the importer, that one of the three things everybody is saying is not in it, and that the transition is from publication and not from January   **C** that it does not apply'));
out.push(p('**b**  Listen again. **1** What are the four questions she puts to the notice? **2** Why does she say the indignation has to come after the reading?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  "Four questions, and then you may be angry"', [
  ['Bassel', 'Everybody is saying we have to get everything tested and it will take six months.'],
  ['Nour', '⚠ **Everybody is saying it and nobody has read it.** ⚠ **I have, twice, and there are four questions to put to a notice before anybody is entitled to an opinion about it.**'],
  ['Bassel', 'Go on.'],
  ['Nour', '⚠ **One: who is obliged? Not *who is affected* — who has the duty.** ⚠ **It is the importer. Us. Not Dallal Freres, which is what three people in this office have been assuming.**'],
  ['Bassel', 'And two?'],
  ['Nour', '⚠ **What exactly is required? A certificate from a body on the Ministry\'s accredited list, per consignment.** **Not a test of every item. Not a factory audit, which is what somebody told Abu Yasser.** ⚠ **Per consignment, and the list has eleven bodies on it and two are in Beirut.**'],
  ['Bassel', 'Three?'],
  ['Nour', '⚠ **By when, and from when does the clock run.** ⚠ **This is the one that matters: the three months run from publication on 3 September, not from 1 January.** **So the transition ends on 3 December and the requirement bites on consignments arriving after 1 January** — **which means anything we order after about the middle of November.**'],
  ['Bassel', 'That is seven weeks, not four months.'],
  ['Nour', '⚠ **It is seven weeks. And four: what does the notice NOT say?** ⚠ **It does not say the certificate must be in Arabic. It does not say it must be original. And it says nothing about consignments already in transit** — **which is a gap, and a gap is a thing you can write and ask about.**'],
  ['Bassel', 'And now may I be angry?'],
  ['Nour', '⚠ **Now you may be angry, and usefully, about seven weeks rather than vaguely about six months.** ⚠ **Indignation before reading always costs you the first meeting** — **because somebody in the room will have read it, and after that nothing else you say is weighed.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four questions to put to a notice**',
  table(['', 'The question', 'Here'], [
    ['**1 who is obliged?**', '⚠ **not who is affected** — **who has the duty**', '⚠ *the importer. Us, not the supplier* — **which three people had assumed the other way**'],
    ['**2 what exactly?**', '**the thing itself, at the right grain**', '⚠ *a certificate per consignment from an accredited body* — **not a test of every item and not a factory audit**'],
    ['⚠ **3 from when does the clock run?**', '⚠ **and this is usually the one that matters**', '⚠ *three months from publication on 3 September, not from 1 January* — **so seven weeks, not four months**'],
    ['⚠ **4 what does it NOT say?**', '⚠ **the gaps are the things you can ask about**', '⚠ *nothing about language, originals, or goods already in transit*'],
  ], [2.1, 2.9, 4]),
  '⚠ **Put all four before anybody in the room is entitled to an opinion.** ⚠ **Indignation before reading costs you the first meeting** — **because somebody there will have read it, and after that nothing else you say is weighed.**',
  '⚠ **Question 1 catches the commonest error, which is confusing *affected* with *obliged*.** ⚠ **A supplier who does not hold a certificate is affected; the importer who must produce one is obliged** — **and the remedy is entirely different depending which you are.**',
  '⚠ **Question 3 is the one that changes the plan.** ⚠ **A clock running from publication rather than from the effective date turned four months into seven weeks** — **and nobody in the office had noticed, because the notice puts the effective date in bold and the transition in a subclause.**',
  '⚠ **Question 4 is the one nobody asks and the one that produces something to write.** ⚠ **A notice that says nothing about language, originals or goods in transit has three gaps** — **and a gap is not a loophole, it is a question somebody at the Ministry can answer in a letter.**',
  '⚠ **And correct the rumours by name.** ⚠ *Not a factory audit, which is what somebody told Abu Yasser.* **In every firm facing a new rule, three untrue versions of it are circulating within a week** — **and each one is doing damage to somebody\'s planning.**',
  '**Practise:** Take a rule that applies to your work. Put all four questions to it, in order, and write the answers in one line each.',
  '**Useful phrases:**  nobody has read it  ·  who is obliged, not who is affected  ·  from when does the clock run?  ·  what does it not say?  ·  now you may be angry, and usefully',
  '**Pronunciation – a requirement without indignation.** 🔊 **Track 23.2** Listen twice. ⚠ **The first says *three months from publication, not from 1 January* flatly, as a finding.** ⚠ **The second leans on *not*.** **Flat, it is the answer to question three; leaned on, it is a complaint about the drafting, and the room starts discussing the Ministry instead of the seven weeks.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a rule; B puts the four questions.'));
out.push(dlg(null, [
  ['A', 'There is a new requirement that __________.'],
  ['B', '⚠ **Who is obliged? Not affected — obliged.**'],
  ['A', '__________.'],
  ['B', '⚠ **What exactly is required, and at what grain?**'],
  ['A', '__________.'],
  ['B', '⚠ **From when does the clock run?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does it not say?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now: which of the things people are saying about it are not in it?**'],
]));
out.push(table(['Role card 1 — six months and absurd', 'Role card 2 — our supplier will have to deal with it'], [[
  '⚠ **A arrives with the office version: six months of testing, everything, absurd.** ⚠ **B asks where the clock starts and what exactly is required.** ⚠ **B\'s point: the real answer is worse in one way and much better in another** — **seven weeks rather than four months, and a certificate per consignment rather than a test of every item** — **and the office version is wrong about both, in opposite directions.**',
  '⚠ **A assumes the obligation sits with Dallal Freres because they make the packaging.** ⚠ **B asks who the notice names.** ⚠ **B\'s point: affected and obliged are different** — **the supplier is affected and the importer is obliged, and a firm that has this the wrong way round will spend its seven weeks writing to the wrong party.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four answers for one rule. ⚠ Then name one thing people at your work say about it that is not in it.'));
out.push(PHRASE_CARD(['who is obliged?', 'what exactly?', 'from when does the clock run?', 'what does it not say?', 'which rumours are wrong?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** rules that apply to your work.'));
out.push(table(['The rule', 'Who is obliged', 'What exactly, and from when', 'What it does not say'], [['', '', '', ''], ['', '', '', '']], [1.8, 1.8, 2.8, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The rule is _______. The obligation is on _______, not on _______. What is required is _______, and the clock runs from _______. It says nothing about _______. And people here are saying _______, which is not in it._'));
out.push(p('**Listener task:** count how many clocks turned out to run from a different date than people assumed. ⚠ Then ask how many of the writers had read the thing twice.'));
out.push(p('**Board clinic:** your teacher writes four summaries of a rule on the board — find the one that says *affected* where it means *obliged*, and the one whose clock starts on the effective date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE MINISTRY NOTICE OF 3 SEPTEMBER: WHAT IT ACTUALLY REQUIRES. N. Mansour, 8 September. Note to the file. I have read it twice and the relevant text is at paragraphs 4, 7 and 11(b).**',
  table(['The question', 'The answer', 'Where'], [
    ['**who is obliged?**', '⚠ **the importer of record. Us.** **Not the supplier and not the carrier.**', '**para 4, first sentence**'],
    ['**what exactly?**', '⚠ **a certificate of conformity per consignment, from a body on the accredited list.** **Not a test of every item; not a factory audit.**', '**para 7; the list is the annex**'],
    ['⚠ **from when?**', '⚠ **the requirement applies to consignments arriving after 1 January. The transition runs three months from PUBLICATION, 3 September, and ends on 3 December.**', '⚠ **para 11(b), which is a subclause and is why nobody had read it**'],
    ['⚠ **what it does not say**', '⚠ **nothing about the language of the certificate; nothing about originals or copies; and nothing about consignments in transit on 1 January.**', '**absent throughout**'],
  ], [1.9, 4.3, 2.8]),
  '⚠ **What that means for us, in one line.** **Anything we order after about 15 November arrives after 1 January, so the practical deadline is seven weeks and not four months.**',
  '⚠ **Three things being said in this office that are not in the notice.** **That every item must be tested. That a factory audit is required. And that Dallal Freres must obtain the certificate.** ⚠ **All three are wrong, all three are currently shaping somebody\'s plan, and the third is the expensive one** — **because we have been waiting for Dallal Freres to act and the duty is ours.**',
  '⚠ **And one thing I want recorded about the reading itself.** **I read it twice and the second reading is where paragraph 11(b) came from.** ⚠ **The effective date is in bold in paragraph 2 and the transition is in a subclause nine paragraphs later** — **which is not a trick, it is how notices are drafted, and the lesson is that the date in bold is almost never the date that matters.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does paragraph 11(b) establish, and why had nobody read it?'));
out.push(item('2', 'What three things are being said in the office that are not in the notice, and which is the expensive one?'));
out.push(item('3', 'What does the writer record about the reading itself?'));
out.push(box('Writer\'s box', [
  '**The what-it-requires note — five parts:** ⚠ **four questions in a table, with a WHERE column** → ⚠ **what it means for us, in one line** → ⚠ **the untrue versions circulating, named** → ⚠ **which of them is costing something** → ⚠ **and what the reading itself taught you.**',
  '⚠ **Give every answer a paragraph reference.** ⚠ *Para 4, first sentence · para 11(b).* **A note without references invites the whole argument to be had again by somebody who has not read the notice** — **and with them, anybody can check in two minutes.**',
  '⚠ **Put *what it means for us* in one line, in dates.** ⚠ *Anything we order after about 15 November arrives after 1 January, so the practical deadline is seven weeks.* **That sentence is what the note is for; everything above it is the working.**',
  '⚠ **List the untrue versions and say which is costing something.** ⚠ *We have been waiting for Dallal Freres to act and the duty is ours.* **Three wrong versions circulate within a week of any new rule**, **and the expensive one is always the one that tells you somebody else is handling it.**',
  '⚠ **Say what the notice does NOT say, and mark it as absent rather than as permitted.** ⚠ **Silence about language, originals and goods in transit is three questions you can ask** — **and treating silence as permission is the one reading that gets a firm into trouble.**',
  '⚠ **And record what the reading taught you.** ⚠ *The date in bold is almost never the date that matters.* **It is not a complaint about drafting** — **it is a rule for next time, and it is the only part of the note that will still be useful when this requirement is three years old.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a what-it-requires note for a rule at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT IT ACTUALLY REQUIRES. ______________, ______________. I have read it twice and the relevant text is at ______________.**   **The question** | **The answer** | ⚠ **Where**   **who is obliged?** | ⚠ **______________** | **______________**   **what exactly?** | ⚠ **______________** | **______________**   ⚠ **from when?** | ⚠ **______________** | ⚠ **______________**   ⚠ **what it does not say** | ⚠ **______________** | **absent throughout**   ⚠ **What that means for us, in one line. ______________.**   ⚠ **Three things being said here that are not in it. ______________. All three are wrong, and the expensive one is ______________, because ______________.**   ⚠ **One thing about the reading itself. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A paragraph reference against every answer', ''],
  ['*Obliged* distinguished from *affected*', ''],
  ['The clock, and where it actually starts', ''],
  ['What the rule does not say, marked as absent', ''],
  ['The untrue versions, named, with the expensive one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *from when* answer. ⚠ The class says of each whether the clock starts where the writer first assumed it did.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule that caught your trade without being written for it (**200 to 240 words**). Say what it was aimed at, what it required of you, what people said it required, and what the reading changed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _obliged, or affected?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had somebody read the rule itself? ⚠ **Usually one of three** — **and in the other two the firm acted for weeks on a version of it that came from a conversation.**'));
out.push(box('Homework', ['Write your final text. Then take one rule that applies to your work and answer all four questions, with a paragraph reference for each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.2 =======================
out.push(pb());
out.push(h2('23.2  Asking a body that can decide'));
out.push(p('**Function:** writing to an authority   ·   **Grammar:** _we ask the Directorate to confirm X, which it is able to do under Y_   ·   **Pronunciation:** a request to an authority, read level'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your firm has asked an outside body for. ⚠ Then say whether the body had the power to grant it.'));
out.push(p('**b**  Which can be granted? _we respectfully request that the Ministry reconsider this policy · we ask the Directorate to confirm, under paragraph 11(b), whether a consignment loaded before 1 January but arriving after it falls within the requirement_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say is wrong with the firm\'s draft letter?   **A** nothing   **B** it asks the Directorate for something only the Minister could grant, and asks nothing the Directorate can actually do   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What are the three things he says a letter to an authority should ask? **2** Why does he say a grantable request beats a reasonable one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  "Ask the people in the room for what they can give"', [
  ['Nour', 'Our draft asks the Ministry to reconsider the inclusion of packaging in the schedule.'],
  ['Mr Sayegh', '⚠ **Who at the Ministry can reconsider a schedule?**'],
  ['Nour', '…The Minister, I suppose. Or whoever signed the notice.'],
  ['Mr Sayegh', '⚠ **And the letter is addressed to the Directorate of Standards, which administers the schedule and did not write it.** ⚠ **So you are asking people for something they do not have, which they will answer by saying they do not have it** — **and that is four weeks gone.**'],
  ['Nour', 'Then what do we ask them for?'],
  ['Mr Sayegh', '⚠ **Three things, and all three are things a directorate does every week.** ⚠ **A confirmation: does a consignment loaded in December and arriving in January fall within it? That is an interpretation and they issue them.** ⚠ **A clarification: must the certificate be in Arabic, and will a certified translation serve? They answer that in a line.** ⚠ **And an administrative concession: accept a copy certified by the issuing body rather than an original, which they have the power to allow and have allowed before.**'],
  ['Nour', 'None of that changes the policy.'],
  ['Mr Sayegh', '⚠ **None of it. And the three of them together are worth about five weeks to us**, **which is most of what the policy costs us in time.** ⚠ **A grantable request beats a reasonable one, because the reasonable one needs somebody else\'s signature and the grantable one needs the signature of the person reading the letter.**'],
  ['Nour', 'And the schedule point?'],
  ['Mr Sayegh', '⚠ **Goes in the trade association\'s submission, which is addressed to the people who can change a schedule, and takes two years.** ⚠ **Two documents, two bodies, two timescales** — **and the mistake is putting the slow request in the fast letter, where it crowds out the three things you could have had by October.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Ask the body that can decide, for what it can grant**',
  table(['', 'The request', 'Who can grant it'], [
    ['**the policy**', '⚠ *reconsider the inclusion of packaging in the schedule*', '⚠ **whoever signed the notice** — **not the directorate administering it, and it takes two years**'],
    ['**1 a confirmation**', '⚠ *does a consignment loaded in December and arriving in January fall within it?*', '⚠ **the directorate, which issues interpretations every week**'],
    ['**2 a clarification**', '⚠ *must the certificate be in Arabic; will a certified translation serve?*', '**the directorate, in a line**'],
    ['⚠ **3 a concession**', '⚠ *accept a certified copy rather than an original*', '⚠ **the directorate, which has allowed it before** — **and the three together are worth about five weeks**'],
  ], [1.7, 4, 3.3]),
  '⚠ **A grantable request beats a reasonable one.** ⚠ **The reasonable one needs somebody else\'s signature; the grantable one needs the signature of the person reading the letter** — **and that is the whole difference between a reply in three weeks and a reply saying it is not a matter for them.**',
  '⚠ **Find out what the body you are writing to actually does.** ⚠ **A directorate that administers a schedule issues interpretations, answers questions of form, and grants administrative concessions** — **and does not change schedules, however good your argument is.**',
  '⚠ **Two documents, two bodies, two timescales.** ⚠ **The slow request goes where slow requests go** — **and putting it in the fast letter crowds out the three things you could have had by October.**',
  '⚠ **Cost the grantable requests, because they do not look like much.** ⚠ *The three together are worth about five weeks to us.* **Nothing in them changes the policy and together they recover most of what the policy costs in time** — **which is the argument for writing the dull letter first.**',
  '⚠ **And ask for the concession that has been granted before.** ⚠ *Which they have allowed before.* **A body is far likelier to do a thing it has done than a thing it has the power to do** — **and finding the precedent is usually one telephone call to somebody in the trade.**',
  '**Practise:** Take something your firm wants from an outside body. Split it into the grantable and the slow, and say who can grant each.',
  '**Useful phrases:**  who can actually do that?  ·  a confirmation, a clarification, a concession  ·  which they have allowed before  ·  two bodies, two timescales  ·  worth about five weeks to us',
  '**Pronunciation – a request to an authority.** 🔊 **Track 23.4** Listen twice. ⚠ **The first says *we ask the Directorate to confirm whether a consignment loaded in December falls within the requirement* level and brief.** ⚠ **The second adds warmth and length.** **Level, it is a question an official can answer today; warmed and extended, it reads as an appeal, and appeals go to the bottom of the pile.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a request; B sorts it.'));
out.push(dlg(null, [
  ['A', 'We want __________ from __________.'],
  ['B', '⚠ **Does the body you are writing to have the power to give you that?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who does?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then what CAN the body you are writing to give you? A confirmation, a clarification, a concession?**'],
  ['A', '__________.'],
  ['B', '⚠ **Has it given anybody that before?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what are those worth, in weeks?**'],
]));
out.push(table(['Role card 1 — but our argument is good', 'Role card 2 — the small requests are not worth a letter'], [[
  '⚠ **A wants the policy argument in the letter because it is persuasive.** ⚠ **B agrees it is persuasive and asks who in the receiving office could act on it.** ⚠ **B\'s point: a good argument addressed to somebody without the power produces a letter saying it is not a matter for them** — **and it crowds out three requests that could have been granted in the same four weeks.**',
  '⚠ **A thinks a letter about translations and certified copies is beneath the firm\'s situation.** ⚠ **B asks what the three requests are worth in time.** ⚠ **B\'s point: about five weeks, which is most of what the rule costs the firm** — **and the dull letter is the one that recovers it, while the dignified one recovers nothing.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** sort one want into the grantable and the slow. ⚠ Then say what the grantable parts are worth in weeks or in money.'));
out.push(PHRASE_CARD(['who has the power?', 'confirmation, clarification, concession', 'have they allowed it before?', 'worth how many weeks?', 'two bodies, two timescales']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things your firm wants from outside bodies.'));
out.push(table(['What we want', 'Who can actually grant it', 'What the body we are writing to CAN grant', 'What that is worth'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We want _______. Only _______ can grant that, and it takes _______. What _______ can grant is _______, _______ and _______ — and those are worth about _______ to us._'));
out.push(p('**Listener task:** count how many of the original wants could be granted by the body being written to. ⚠ Then ask how many of the grantable requests had ever been asked for.'));
out.push(p('**Board clinic:** your teacher writes four letters on the board — find the one asking a body for something it cannot do, and the one whose request has no paragraph reference. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To: The Directorate of Standards, Conformity Section   From: Sham Trading, N. Mansour, office manager   12 September**',
  '**Notice of 3 September: imported packaging materials. Three questions and one request.**',
  '**We import packaging materials and the notice of 3 September applies to us as importer of record under paragraph 4. We are arranging certification and we have three questions of administration and one request. We are not asking the Directorate to revisit the schedule.**',
  '⚠ **1  Confirmation sought under paragraph 11(b).** **Does the requirement apply to a consignment loaded before 1 January but arriving after it? Paragraph 11(b) refers to consignments arriving after that date and is silent as to loading.** ⚠ **We have four consignments loading between 10 and 20 December and we are planning on the basis that they fall outside. We would be glad to be told if that is wrong.**',
  '⚠ **2  Clarification on language.** **The notice does not specify the language of the certificate. Two of the eleven accredited bodies issue in French only.** ⚠ **Will a translation certified by the issuing body be accepted, or must the certificate itself be in Arabic?**',
  '⚠ **3  Clarification on form.** **Must the certificate accompanying each consignment be an original, or will a copy certified by the issuing body serve?** ⚠ **We understand that the Directorate accepted certified copies for the construction-materials schedule in 2024 and we are asking for the same treatment rather than for anything new.**',
  '⚠ **4  The request.** **If the answer to question 3 is that an original is required, we ask that the Directorate accept a certified copy for consignments arriving in January and February only, while the issuing bodies establish a courier arrangement.** **Two of the eleven are in Beirut and the originals take eleven days.**',
  '⚠ **We do not need an answer to all four to proceed.** **Question 1 is the one that affects what we order this month, and an answer to that alone before 30 September would be of great assistance.** **If it is helpful, we can be telephoned on the number below and will put any answer in writing ourselves for your file.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the letter say it is NOT asking for, and where does it say so?'));
out.push(item('2', 'What precedent does request 3 rely on, and how is it framed?'));
out.push(item('3', 'What does the last paragraph do, and why does it name one question?'));
out.push(box('Writer\'s box', [
  '**A letter to an authority — five rules:** ⚠ **say which paragraph makes it apply to you, and that you are complying** → ⚠ **say what you are NOT asking** → ⚠ **number the requests and label each one: confirmation, clarification, request** → ⚠ **name a precedent where one exists, as *the same treatment rather than anything new*** → ⚠ **and say which single answer you need first, with a date.**',
  '⚠ **Open by accepting that it applies to you.** ⚠ *The notice applies to us as importer of record under paragraph 4. We are arranging certification.* **An official reading a letter from a firm wants to know in the first line whether this is compliance or resistance** — **and a letter that begins by complying is read differently throughout.**',
  '⚠ **Say what you are not asking.** ⚠ *We are not asking the Directorate to revisit the schedule.* **It removes the thing the reader was braced for and it is the sentence that gets the rest read** — **the same move as 19.2\'s *we do not allege*.**',
  '⚠ **Label each request by what it is.** ⚠ **Confirmation · clarification · request.** **An official can route a confirmation to one desk and a concession to another, and a letter that does the sorting gets handled rather than circulated.**',
  '⚠ **Give your own planning assumption and invite correction.** ⚠ *We are planning on the basis that they fall outside. We would be glad to be told if that is wrong.* **It converts a question into something an official can answer with one word** — **and it makes your exposure visible, which is what gets it answered quickly.**',
  '⚠ **And name the one answer you need first, with a date.** ⚠ *Question 1 affects what we order this month; an answer to that alone before 30 September would be of great assistance.* **A letter asking for four things gets four things in six weeks; a letter naming the urgent one gets that one in ten days** — **and the offer to write up a telephone answer yourself removes the last reason for delay.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter to an outside body (**80 words or more**). Use the frame.'));
out.push(p('**To: ______________   From: ______________   ______________**   **______________: ______________ questions and ______________ request.**   **______________ applies to us under ______________. We are ______________.** ⚠ **We are not asking ______________.**   ⚠ **1  Confirmation sought under ______________. ______________?** ⚠ **We are planning on the basis that ______________. We would be glad to be told if that is wrong.**   ⚠ **2  Clarification on ______________. ______________?**   ⚠ **3  The request. We ask that ______________.** ⚠ **We understand that ______________ in ______________, and we are asking for the same treatment rather than for anything new.**   ⚠ **We do not need an answer to all of them to proceed. ______________ is the one that affects ______________, and an answer to that alone before ______________ would be of great assistance.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The paragraph that makes it apply, and that you are complying', ''],
  ['What you are NOT asking for', ''],
  ['Each request labelled confirmation, clarification or request', ''],
  ['A precedent, framed as the same treatment', ''],
  ['The one answer needed first, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *we are not asking* sentence. ⚠ The class says of each what the reader was braced for, and whether the sentence removes it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your firm asked an outside body for (**200 to 240 words**). Say what was asked, whether the body could grant it, what happened, and what a grantable version would have been.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could the body addressed grant this?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the body have the power to grant what was asked? ⚠ **Usually one of three** — **and in the other two the reply said it was not a matter for them, which is four weeks spent finding out something a telephone call would have established.**'));
out.push(box('Homework', ['Write your final text. Then take one thing your firm wants from an outside body and write the three grantable versions of it, with who can grant each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.3 =======================
out.push(pb());
out.push(h2('23.3  Costing a requirement before you argue about it'));
out.push(p('**Function:** pricing compliance   ·   **Grammar:** _complying costs X; complying late costs Y_   ·   **Pronunciation:** a compliance cost given without grievance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a requirement at your work that somebody called expensive. ⚠ Then say whether anybody worked out what it actually cost.'));
out.push(p('**b**  Which is costed? _this will be extremely expensive for us · certification is about 310,000 in the first year and 140,000 thereafter; doing it after 1 January instead of before costs a further 590,000, because four consignments would be held_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia insist is costed separately?   **A** nothing   **B** complying, complying late, and the two things that are not money   **C** the certificate'));
out.push(p('**b**  Listen again. **1** What are the four figures? **2** Why does she say the cost of complying late is the one that changes behaviour?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  "Expensive is not a figure"', [
  ['Bassel', 'Everybody agrees it will be expensive.'],
  ['Nadia', '⚠ **Expensive is not a figure, and until there is one nobody in this firm can decide anything** — **including whether to argue about it at all.**'],
  ['Bassel', 'Then give me the figures.'],
  ['Nadia', '⚠ **Four.** ⚠ **One: the cost of complying, first year. Certification at about 24,000 a consignment, eleven consignments, plus about 46,000 of our own time setting it up. About 310,000.** ⚠ **Two: the cost of complying in a normal year. The setup does not recur, so about 264,000.**'],
  ['Bassel', 'And three?'],
  ['Nadia', '⚠ **The cost of complying LATE, which is the figure nobody works out.** ⚠ **If we are not ready on 1 January, four consignments are held at the border. Demurrage, the stock-out on two lines, and about three weeks of the Homs opening order** — **about 590,000, once.**'],
  ['Bassel', 'That is nearly twice the annual cost.'],
  ['Nadia', '⚠ **Which is why it is the figure that changes behaviour.** ⚠ **The annual cost makes people indignant and the late cost makes them act** — **and a paper that gives only the first produces a meeting, while one that gives both produces a certification programme by Thursday.**'],
  ['Bassel', 'And four?'],
  ['Nadia', '⚠ **The things that are not money, said separately so that nobody can add them to the total and so that nobody can ignore them.** ⚠ **Two of the eleven accredited bodies are in Beirut, which means Nour in Beirut twice more this year. And the Dallal relationship: they are not obliged and we are, so we are asking them to do something for us, which changes what we can ask for in the April review.**'],
  ['Bassel', 'Why not put those in the total?'],
  ['Nadia', '⚠ **Because a total with a relationship in it is a total nobody believes, and a relationship outside the total is a thing somebody has to decide about.** ⚠ **Money adds up. The rest does not, and pretending it does is how the rest gets lost.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four figures, and the third is the one nobody works out**',
  table(['', 'The figure', 'Here'], [
    ['**1 complying, year one**', '**the thing plus your own time**', '⚠ *about 310,000: 24,000 a consignment on eleven, plus about 46,000 of our own time*'],
    ['**2 complying, a normal year**', '**without the setup**', '**about 264,000**'],
    ['⚠ **3 complying LATE**', '⚠ **and this is the one nobody works out**', '⚠ *about 590,000, once: four consignments held, demurrage, two stock-outs and three weeks of the Homs order*'],
    ['⚠ **4 what is not money**', '⚠ **said separately, never added**', '⚠ *two trips to Beirut; and we are now asking Dallal for something, which changes the April review*'],
  ], [2.1, 2.5, 4.4]),
  '⚠ **Expensive is not a figure, and until there is one nobody can decide anything** — ⚠ **including whether to argue about the rule at all.**',
  '⚠ **The cost of complying late is the figure that changes behaviour.** ⚠ **The annual cost makes people indignant; the late cost makes them act** — **and here it is nearly twice the annual cost, which is common and is almost never calculated.**',
  '⚠ **Put your own people\'s time in the first figure and say at what rate.** ⚠ **Firms leave it out because nobody invoices for it**, **and leaving it out is how a compliance cost comes in at two thirds of the real one.**',
  '⚠ **Keep what is not money OUT of the total, and say why.** ⚠ *A total with a relationship in it is a total nobody believes, and a relationship outside the total is a thing somebody has to decide about.* **Money adds up and the rest does not** — **and pretending otherwise is how the rest gets lost.**',
  '⚠ **And notice what the fourth figure found.** ⚠ *We are not obliged and they are not, so we are asking them to do something for us, which changes what we can ask for in April.* **A compliance cost that reaches into a negotiation eight months away is not a number, and it is the most consequential item on the page.**',
  '**Practise:** Take a requirement at your work. Produce all four, and put your own time in the first at a stated rate.',
  '**Useful phrases:**  expensive is not a figure  ·  the cost of complying late  ·  about X, once  ·  said separately, never added  ·  money adds up and the rest does not',
  '**Pronunciation – a compliance cost without grievance.** 🔊 **Track 23.6** Listen twice. ⚠ **The first says *about 310,000 in the first year and 264,000 thereafter* flatly, as arithmetic.** ⚠ **The second slows and lowers on the figures.** **Flat, it is a cost to be planned for; slowed, it is an injustice, and the reader starts agreeing instead of deciding.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says it is expensive; B asks for the four.'));
out.push(dlg(null, [
  ['A', 'The new requirement will be very expensive.'],
  ['B', '⚠ **What does complying cost in the first year, including our own time?**'],
  ['A', '__________.'],
  ['B', '⚠ **And in a normal year?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the one nobody works out. What does complying LATE cost?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what is not money? Name it, and keep it out of the total.**'],
  ['A', '__________.'],
  ['B', '⚠ **Which of the four is the largest?**'],
]));
out.push(table(['Role card 1 — expensive is enough', 'Role card 2 — put the relationship in the total'], [[
  '⚠ **A believes the firm knows it is expensive and that a figure is a formality.** ⚠ **B asks whether the firm should argue, comply early, or comply late, and which of the three *expensive* answers.** ⚠ **B\'s point: it answers none of them** — **and the decision between them turns entirely on the third figure, which nobody has.**',
  '⚠ **A wants to add a notional value for the Dallal relationship to the total, to show how bad it is.** ⚠ **B asks what the total then means.** ⚠ **B\'s point: a total with a relationship in it is not believed by anybody, and the relationship then disappears into a rounding argument** — **where outside the total it is a thing somebody has to decide about, which is what the writer actually wanted.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** produce all four for one requirement. ⚠ Then say which is largest, and whether anybody at the writer\'s work has ever calculated the third.'));
out.push(PHRASE_CARD(['expensive is not a figure', 'year one, including our time', 'a normal year', 'complying late', 'what is not money']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** requirements at your work.'));
out.push(table(['The requirement', 'Year one, with our time', 'A normal year', 'Complying late, and what is not money'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 1.6, 3.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Complying costs about _______ in year one, including _______ of our own time at the _______ rate, and about _______ thereafter. Complying late costs about _______, once, because _______. And what is not money is _______, which I am keeping out of the total._'));
out.push(p('**Listener task:** count how many late-costs were larger than the annual cost. ⚠ Then ask how many of those figures existed anywhere before today.'));
out.push(p('**Board clinic:** your teacher writes four costings on the board — find the one with no late cost, and the one with a relationship added into the total. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE CERTIFICATION REQUIREMENT: WHAT IT COSTS. N. Mansour, 15 September. Four figures, and the fourth is not money.**',
  table(['', 'Figure', 'Working'], [
    ['**complying, year one**', '**about 310,000**', '**24,000 a consignment on eleven consignments, from two written quotations; plus about 46,000 of our own time, costed at the administration rate, mostly mine and Bassel\'s in October**'],
    ['**complying, a normal year**', '**about 264,000**', '**the same per-consignment cost without the setup. This is the figure to use in any argument about the policy, and it is 1.8 per cent of packaging spend.**'],
    ['⚠ **complying late**', '⚠ **about 590,000, once**', '⚠ **four consignments held after 1 January: demurrage at about 2,900 a day for an estimated nine days; stock-out on two counter lines for about two weeks, at Hala\'s counts; and about three weeks of the Homs opening order, which is the item I am least sure of and have taken at the low end**'],
    ['⚠ **not money, and not added**', '⚠ **two items**', '⚠ **Nour in Beirut twice more this year, which is four days and the Beirut hearing is already there.** ⚠ **And: Dallal Freres are not obliged and we are, so we are asking them for something. That changes what we can ask for in the April agreement review, and it is the largest item on this page in any sense that matters.**'],
  ], [2, 1.6, 5.4]),
  '⚠ **The one line anybody will read.** **Complying costs about 264,000 a year, which is 1.8 per cent of what we spend on packaging. Not complying in time costs about 590,000, once.** ⚠ **The second figure is more than twice the first, which is why this paper is about a programme and not about a policy.**',
  '⚠ **And one thing about the figure I am least sure of.** **The three weeks of the Homs opening order could be six, and if it is six the late cost is nearer 800,000.** ⚠ **I have taken the low end deliberately, because a late cost at the high end looks like an argument for the thing I am recommending** — **and if the low end is enough to carry the decision, the high end is not needed.**',
  '⚠ **What I have NOT done.** **I have not costed the argument.** **The association submission will take about two years and may change nothing**, ⚠ **and I have excluded it entirely rather than put a figure on a chance** — **which 21.4 says to assume at nil and say so, and that is what this is.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which figure is the writer least sure of, and what has she done about it?'));
out.push(item('2', 'What two things are in the fourth row, and which does she call the largest item on the page?'));
out.push(item('3', 'What has she not costed, and on what principle?'));
out.push(box('Writer\'s box', [
  '**The costing page — five parts:** ⚠ **four rows, with a WORKING column** → ⚠ **your own time, at a stated rate** → ⚠ **the late cost, itemised, with the item you are least sure of named** → ⚠ **the non-money items, separate and never added** → ⚠ **and the one line anybody will read.**',
  '⚠ **Give the working, not just the figure.** ⚠ *24,000 a consignment on eleven, from two written quotations.* **A figure with its working gets corrected or accepted; a bare figure gets argued about** — **and the argument is always about the figure rather than about the decision.**',
  '⚠ **Itemise the late cost, because it is the one that will be doubted.** ⚠ **Demurrage at a daily rate for an estimated number of days; stock-outs at somebody else\'s counts; and the order you would lose** — **three items, three sources, and the doubt then attaches to one of them rather than to the whole figure.**',
  '⚠ **Name the item you are least sure of and take it at the LOW end, with the reason.** ⚠ *If the low end is enough to carry the decision, the high end is not needed.* **That sentence is worth more than the figure** — **because a late cost at the high end reads as an argument for what the writer wants.**',
  '⚠ **Keep the non-money items out of the total and say which is largest.** ⚠ *We are asking Dallal for something, which changes what we can ask for in April, and it is the largest item on this page in any sense that matters.* **A compliance cost that reaches into a negotiation eight months away belongs on the page and not in the arithmetic.**',
  '⚠ **And say what you have excluded.** ⚠ *I have not costed the argument.* **The submission may change nothing in two years, so it is assumed at nil and declared** — **which is 21.4 applied to a policy rather than to a plan, and it is the same rule.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a costing page for a requirement at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT IT COSTS. ______________, ______________. Four figures, and the fourth is not money.**   **complying, year one** | **______________** | **______________, plus ______________ of our own time at the ______________ rate**   **complying, a normal year** | **______________** | **______________, which is ______________ per cent of ______________**   ⚠ **complying late** | ⚠ **______________, once** | ⚠ **______________; ______________; and ______________, which is the item I am least sure of and have taken at the low end**   ⚠ **not money, and not added** | ⚠ **______________** | ⚠ **______________, which is the largest item on this page in any sense that matters**   ⚠ **The one line anybody will read. ______________.**   ⚠ **And one thing about the figure I am least sure of. ______________. If the low end carries the decision, the high end is not needed.**   ⚠ **What I have NOT costed. ______________, which I have assumed at nil and said so.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A working against every figure', ''],
  ['Own time included, at a stated rate', ''],
  ['A late cost, itemised, with the weakest item named', ''],
  ['The weakest item taken at the low end, with the reason', ''],
  ['Non-money items separate, never added', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their late cost. ⚠ The class says of each whether it is itemised, and whether the writer has named the item they are least sure of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a requirement your firm complied with late (**200 to 240 words**). Say what complying would have cost, what being late cost, whether anybody had worked out the second, and what the decision would have been if they had.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the late cost ever calculated?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the late cost larger than the cost of complying? ⚠ **Usually all three** — **and in none of them had anybody worked it out before the deadline, which is the finding of the cycle and the reason the deadline was missed.**'));
out.push(box('Homework', ['Write your final text. Then take one requirement at your work and produce all four figures, with your own time at a stated rate and the late cost itemised (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.4 =======================
out.push(pb());
out.push(h2('23.4  The falsifying condition, and the watcher'));
out.push(p('**Function:** saying what would show you wrong, and who will look   ·   **Grammar:** _if X happens, this position is wrong; Y is watching for it, monthly_   ·   **Pronunciation:** a condition stated as a commitment'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a position your firm holds about the future. ⚠ Then say what would show it was wrong, and whether anybody is looking for that.'));
out.push(p('**b**  Which is usable? _we will review the position regularly · if two or more of the eleven accredited bodies stop issuing for packaging, this plan is wrong; Bassel checks the list on the first of each month and tells me the same day_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say is missing from Nour\'s plan?   **A** nothing   **B** what would show the plan wrong, and a named person looking for it on a stated day   **C** the figures'));
out.push(p('**b**  Listen again. **1** What are the three parts of a falsifying condition? **2** Why does he say a condition with nobody watching it is worse than no condition?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  "Who is looking, and on what day?"', [
  ['Mr Sayegh', 'Your plan says we certify through the Beirut body and keep Dallal. What would show that wrong?'],
  ['Nour', 'If the Beirut body stopped issuing for packaging.'],
  ['Mr Sayegh', '⚠ **Good. That is the first part.** ⚠ **Who is looking for it, and on what day?**'],
  ['Nour', '…Nobody. We would find out when a consignment was refused.'],
  ['Mr Sayegh', '⚠ **Which is January, at the border, with 590,000 attached.** ⚠ **So the condition is worth nothing without the other two parts: a named person and a stated day.**'],
  ['Nour', 'Bassel, on the first of each month.'],
  ['Mr Sayegh', '⚠ **And he tells you the same day, whether or not anything has changed** — **because a watcher who only reports changes is a watcher nobody can tell has stopped watching.**'],
  ['Nour', 'That is three parts: the condition, the watcher, the day.'],
  ['Mr Sayegh', '⚠ **And the reporting even when nothing has happened, which is the part everybody drops.** ⚠ **A monthly *no change* is four words and it is the only evidence that the arrangement exists.**'],
  ['Nour', 'Why is a condition with nobody watching worse than no condition at all?'],
  ['Mr Sayegh', '⚠ **Because it has been written down, so everybody believes it is being monitored.** ⚠ **No condition leaves a firm alert and uneasy, which is uncomfortable and quite safe.** **A condition in a plan with no watcher produces exactly the same ignorance plus confidence** — **and confidence is what makes a firm order eleven consignments in November without checking anything.**'],
  ['Nour', 'How many conditions should a plan have?'],
  ['Mr Sayegh', '⚠ **As many as it has watchers, and not one more.** ⚠ **Three with names on them beats nine in a list** — **and a plan with nine and no names is a plan whose author wanted to look thorough.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A falsifying condition has three parts and a reporting rule**',
  table(['', 'The part', 'Here'], [
    ['**1 the condition**', '⚠ **what would show the position WRONG**', '⚠ *if two or more of the eleven accredited bodies stop issuing for packaging*'],
    ['⚠ **2 the watcher**', '⚠ **a named person, not a department**', '⚠ *B. Nassif*'],
    ['⚠ **3 the day**', '⚠ **a stated date, not *regularly***', '⚠ *the first of each month*'],
    ['⚠ **the reporting rule**', '⚠ **report even when nothing has changed**', '⚠ *he tells me the same day, whether or not anything has moved* — **a monthly *no change* is four words and the only evidence the arrangement exists**'],
  ], [1.8, 3, 4.2]),
  '⚠ **A condition with nobody watching it is worse than no condition at all.** ⚠ **No condition leaves a firm alert and uneasy, which is uncomfortable and quite safe.** **A written condition with no watcher produces the same ignorance plus confidence** — **and confidence is what makes a firm order eleven consignments without checking.**',
  '⚠ **The watcher must be a person and not a department.** ⚠ **A department cannot be asked on the second of the month whether it looked on the first.**',
  '⚠ **And the reporting rule is the part everybody drops.** ⚠ **A watcher who reports only changes is a watcher nobody can tell has stopped watching** — **and a monthly *no change* costs four words and is the only evidence the arrangement is alive.**',
  '⚠ **As many conditions as you have watchers, and not one more.** ⚠ **Three with names beats nine in a list**, **and a plan with nine and no names is a plan whose author wanted to look thorough.**',
  '⚠ **The condition must say what would show you WRONG, not what would be inconvenient.** ⚠ *If the Beirut body stops issuing* **is falsifying;** *if certification becomes more expensive* **is not** — **because a more expensive plan is still the plan, and the test for a condition is whether it would make you change course.**',
  '**Practise:** Take a position your firm holds. Write the condition, the watcher, the day, and the reporting rule.',
  '**Useful phrases:**  what would show that wrong?  ·  who is looking, and on what day?  ·  whether or not anything has moved  ·  ignorance plus confidence  ·  as many as you have watchers',
  '**Pronunciation – a condition as a commitment.** 🔊 **Track 23.8** Listen twice. ⚠ **The first says *Bassel checks the list on the first of each month and tells me the same day* level and brisk, as an arrangement.** ⚠ **The second slows on *the first of each month*.** **Brisk, it is a standing instruction; slowed, it sounds like a hope, and a hope does not survive a busy January.** Say it four times, brisk.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a position; B builds the condition.'));
out.push(dlg(null, [
  ['A', 'Our position is that __________.'],
  ['B', '⚠ **What would show that wrong? Not inconvenient — wrong.**'],
  ['A', '__________.'],
  ['B', '⚠ **Who is looking for it? A person.**'],
  ['A', '__________.'],
  ['B', '⚠ **On what day?**'],
  ['A', '__________.'],
  ['B', '⚠ **And do they report when nothing has happened?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then how many other conditions are in your plan with no watcher?**'],
]));
out.push(table(['Role card 1 — we review it regularly', 'Role card 2 — nine conditions is thorough'], [[
  '⚠ **A offers *the position is reviewed regularly* as the monitoring arrangement.** ⚠ **B asks who, on what day, and when the last review was.** ⚠ **B\'s point: *regularly* cannot be audited, so nobody can tell whether it has lapsed** — **and the firm has ignorance plus confidence, which is the combination that orders eleven consignments in November.**',
  '⚠ **A has nine conditions listed and considers the plan well protected.** ⚠ **B asks for the watcher and the day against each.** ⚠ **B\'s point: there are names against two** — **so the plan has two conditions and seven sentences, and the seven make the two look like part of a list rather than like instructions somebody has accepted.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one condition in all three parts plus the reporting rule. ⚠ Then say why a condition with no watcher is worse than none, in one sentence.'));
out.push(PHRASE_CARD(['what would show it wrong?', 'who is looking?', 'on what day?', 'and if nothing has happened?', 'how many have no watcher?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** positions your firm holds.'));
out.push(table(['The position', 'What would show it wrong', 'The watcher, by name', 'The day, and the reporting rule'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.4, 1.8, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Our position is _______. It would be wrong if _______. _______ is watching for it on _______, and tells _______ the same day whether or not anything has moved._'));
out.push(p('**Listener task:** count how many conditions had a named watcher before today. ⚠ Then ask how many of the plans contain conditions with nobody watching, and what those are currently doing to the firm\'s confidence.'));
out.push(p('**Board clinic:** your teacher writes four conditions on the board — find the one that says *regularly*, and the one whose condition is an inconvenience rather than a falsification. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE CERTIFICATION PLAN: WHAT WOULD SHOW IT WRONG. N. Mansour, 16 September. Three conditions, because we have three watchers.**',
  table(['The condition — this plan is wrong if', 'Watcher', 'Day, and the rule'], [
    ['⚠ **two or more of the eleven accredited bodies stop issuing for packaging, or the Beirut two do**', '**B. Nassif**', '⚠ **the first of each month; tells me the same day whether or not anything has moved**'],
    ['⚠ **Dallal Freres decline to supply the data the issuing body needs** — **they are not obliged and we are**', '**N. Mansour**', '⚠ **at every monthly call, and I write one line in the file after each, including *no change***'],
    ['⚠ **the Directorate answers question 1 by saying December loadings DO fall within the requirement**', '**L. Barakat**', '⚠ **she opens the post and tells me the day it arrives; if nothing has arrived by 30 September she tells me that**'],
  ], [4.6, 1.4, 4]),
  '⚠ **What is NOT a condition on this page, and why.** **That certification becomes more expensive. That the transition is extended. That a competitor complies faster.** ⚠ **None of the three would make this plan wrong** — **a more expensive plan is still the plan, an extension is good news, and a competitor\'s speed is not our concern** — **and I have left them out rather than listing them to look thorough.**',
  '⚠ **What happens if a condition fires.** **Condition 1: we move to the Damascus body at about 3,000 more a consignment and lose four days.** **Condition 2: we certify two lines ourselves through the Damascus body and drop the other three until April.** ⚠ **Condition 3: the four December loadings come inside the requirement and the late cost of 590,000 becomes live, and we accelerate rather than argue.** ⚠ **Each of these is written now, because a condition without a response is an alarm with nobody allowed to act on it.**',
  '⚠ **And one thing about the third condition, which is the only one with a deadline rather than a frequency.** **If the Directorate has not answered by 30 September, Lina tells me that it has not.** ⚠ **Silence is the thing nobody reports** — **and a plan that waits for a letter has no way of noticing that the letter has not come.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are there three conditions and not nine?'));
out.push(item('2', 'What three things are NOT conditions, and why is each excluded?'));
out.push(item('3', 'What is different about the third condition, and what does the writer say about silence?'));
out.push(box('Writer\'s box', [
  '**The falsifying-conditions page — five parts:** ⚠ **as many conditions as watchers** → ⚠ **three columns: the condition · the watcher by name · the day and the reporting rule** → ⚠ **what is NOT a condition, with why** → ⚠ **what happens if each one fires** → ⚠ **and a reporting rule for silence.**',
  '⚠ **Head the column *this plan is wrong if*.** ⚠ **It forces the right kind of item** — **and a writer who cannot complete the sentence has discovered that the item was an inconvenience rather than a falsification.**',
  '⚠ **One named person per condition, and the reporting rule in the same cell.** ⚠ *Tells me the same day whether or not anything has moved.* **The rule belongs with the day, because separating them is how the rule gets dropped.**',
  '⚠ **List what is NOT a condition and say why each fails.** ⚠ *A more expensive plan is still the plan; an extension is good news; a competitor\'s speed is not our concern.* **Three lines, and they prevent the page growing to nine items next time somebody adds to it.**',
  '⚠ **Write the response to each condition NOW.** ⚠ *A condition without a response is an alarm with nobody allowed to act on it.* **The response written in advance is also a test of the condition** — **if you cannot say what you would do, the condition is not about this plan.**',
  '⚠ **And give silence a watcher.** ⚠ *If the Directorate has not answered by 30 September, Lina tells me that it has not.* **Silence is the thing nobody reports**, **and a plan waiting for a letter has no way of noticing that the letter has not come** — **which is the commonest way a monitored plan fails anyway.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a falsifying-conditions page for a plan at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT WOULD SHOW IT WRONG. ______________, ______________. ______________ conditions, because we have ______________ watchers.**   ⚠ **This plan is wrong if** | **Watcher** | ⚠ **Day, and the rule**   ⚠ **______________** | **______________** | ⚠ **______________; tells ______________ the same day whether or not anything has moved**   ⚠ **______________** | **______________** | ⚠ **______________**   ⚠ **What is NOT a condition, and why. ______________, because ______________. ______________, because ______________.**   ⚠ **What happens if a condition fires. Condition 1: ______________. Condition 2: ______________.** ⚠ **Each is written now, because a condition without a response is an alarm with nobody allowed to act on it.**   ⚠ **And a watcher for silence. If ______________ has not ______________ by ______________, ______________ tells me that it has not.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One named person per condition', ''],
  ['A day, not *regularly*, and a reporting rule beside it', ''],
  ['Every condition completes *this plan is wrong if*', ''],
  ['A response written for each condition now', ''],
  ['A watcher for silence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their conditions. ⚠ The class tests each against *this plan is wrong if*, and an inconvenience fails.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a plan at your work that turned out to be wrong (**200 to 240 words**). Say what would have shown it, whether anybody was looking, when the firm found out, and what the gap between those two dates cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was anybody watching, by name?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the thing have been seen earlier by somebody looking? ⚠ **Usually all three** — **and in at least one the condition was written in a plan with nobody\'s name against it, which is the arrangement that produces ignorance plus confidence.**'));
out.push(box('Homework', ['Write your final text. Then take one position your firm holds and write the condition, the watcher, the day, the reporting rule and the response (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.5 =======================
out.push(pb());
out.push(h2('23.5  Planning against a change you cannot influence'));
out.push(p('**Function:** replacing an argument with a plan   ·   **Grammar:** _we cannot change X; what we do about it is Y_   ·   **Pronunciation:** acceptance without resignation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a change at your work that nobody could influence. ⚠ Then say how long the firm spent arguing with it before planning against it.'));
out.push(p('**b**  Which is a plan? _we are continuing to press for the schedule to be amended · we are certifying eleven consignments through the Beirut body by 3 December, and we are pressing for the amendment separately on a two-year horizon_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the firm did in 2024, and what did it cost?   **A** nothing   **B** argued with a change for five months and then complied in three weeks, and the five months cost about 400,000   **C** complied immediately'));
out.push(p('**b**  Listen again. **1** What is the test she gives for whether to argue or to plan? **2** What does she say about doing both?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  "We argued for five months and then complied in three weeks"', [
  ['Nadia', 'In 2024 the deposit rules changed and this firm argued about it from March to August.'],
  ['Nour', 'And then?'],
  ['Nadia', '⚠ **And then complied, in three weeks, in September, with everything we could have done in April.** ⚠ **The five months cost about 400,000 in late fees and one customer, and the rule never moved a word.**'],
  ['Nour', 'So the test is whether we can move it.'],
  ['Nadia', '⚠ **The test is better than that, because everybody thinks they can move things.** ⚠ **Ask: has this body ever changed a published requirement after publication, and how long did it take?** **A factual question with a factual answer.**'],
  ['Nour', 'And for this one?'],
  ['Nadia', '⚠ **Twice in eleven years, and both took over two years.** ⚠ **So the honest planning assumption is that it does not change inside our timescale, whatever the merits.**'],
  ['Nour', 'Then we do not argue at all?'],
  ['Nadia', '⚠ **We argue AND plan, and the mistake is thinking that is a contradiction.** ⚠ **The plan runs on the real timetable and the argument runs on the two-year one** — **and they are two documents with two audiences, like 23.2.**'],
  ['Nour', 'What goes wrong when a firm does both badly?'],
  ['Nadia', '⚠ **One of two things.** ⚠ **Either the argument becomes the plan, which is what happened in 2024** — **everybody felt busy and nothing was being prepared.** ⚠ **Or the plan silences the argument, and a year later the firm is complying with something it never objected to and the trade has lost the only submission that mattered.**'],
  ['Nour', 'How do you keep them separate?'],
  ['Nadia', '⚠ **Different people and different dates.** ⚠ **Bassel runs the certification programme to 3 December. I write the association submission for the November meeting.** **Neither of us reports on the other\'s work** — **and if the submission succeeds in 2029 we will have certified for two years and lost nothing by it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Argue and plan, with different people and different dates**',
  table(['', 'The move', 'Here'], [
    ['⚠ **1 the factual test**', '⚠ **has this body ever changed a published requirement, and how long did it take?**', '⚠ *twice in eleven years, both over two years* — **so it does not change inside our timescale, whatever the merits**'],
    ['**2 the plan**', '**on the real timetable, with a person**', '⚠ *B. Nassif: eleven consignments certified by 3 December*'],
    ['**3 the argument**', '**on its own timetable, with a different person**', '⚠ *N. Sayegh: the association submission for the November meeting*'],
    ['⚠ **4 the separation rule**', '⚠ **neither reports on the other\'s work**', '⚠ **because the two failures are the argument becoming the plan, and the plan silencing the argument**'],
  ], [2, 3.2, 3.8]),
  '⚠ **The test is factual rather than a judgement about merits.** ⚠ *Has this body ever changed a published requirement after publication, and how long did it take?* **Everybody believes they can move things; the question has an answer, and here it is twice in eleven years.**',
  '⚠ **Argue AND plan, and do not treat that as a contradiction.** ⚠ **The plan runs on the real timetable and the argument on the two-year one** — **two documents, two audiences, exactly as in 23.2.**',
  '⚠ **The first failure is the argument becoming the plan.** ⚠ **Five months of activity in 2024, everybody busy, nothing prepared, about 400,000 and a customer** — **and the rule never moved a word.**',
  '⚠ **The second failure is the plan silencing the argument.** ⚠ **A year later the firm is complying with something it never objected to, and the trade has lost the only submission that would have mattered** — **which is a slower loss and a larger one.**',
  '⚠ **The separation rule is the mechanism: different people, different dates, and neither reports on the other.** ⚠ **A single person doing both will drop whichever is less urgent this week**, **and that is always the argument.**',
  '**Practise:** Take a change you cannot influence. Answer the factual test, then name the two people and the two dates.',
  '**Useful phrases:**  has this body ever changed one?  ·  whatever the merits  ·  argue and plan  ·  the argument became the plan  ·  neither reports on the other',
  '**Pronunciation – acceptance without resignation.** 🔊 **Track 23.10** Listen twice. ⚠ **The first says *it does not change inside our timescale, whatever the merits* briskly, as a planning assumption.** ⚠ **The second slows and falls.** **Brisk, it is a decision to plan; slowed, it is defeat, and the people who would have written the submission stop bothering.** Say it four times, briskly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is arguing; B separates.'));
out.push(dlg(null, [
  ['A', 'We are pressing for __________ to be changed.'],
  ['B', '⚠ **Has that body ever changed a published requirement after publication?**'],
  ['A', '__________.'],
  ['B', '⚠ **How long did it take?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what is the planning assumption, whatever the merits?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who runs the plan, and to what date?**'],
  ['A', '__________.'],
  ['B', '⚠ **And who runs the argument? A different person.**'],
]));
out.push(table(['Role card 1 — planning means giving up', 'Role card 2 — one person can do both'], [[
  '⚠ **A believes that preparing to comply concedes the argument.** ⚠ **B asks what happened in 2024 and whether the rule moved.** ⚠ **B\'s point: the five months of arguing did not move it and cost 400,000** — **and a firm that certifies for two years and then wins its submission in 2029 has lost nothing, while one that argues and does not certify loses twice.**',
  '⚠ **A proposes to run the certification and write the submission themselves.** ⚠ **B asks which they will do in the week before 3 December.** ⚠ **B\'s point: whichever is less urgent gets dropped, and that is always the argument** — **so the separation is not a nicety, it is the only thing that gets the submission written at all.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** answer the factual test for one change. ⚠ Then name the two people and the two dates, and say which of the two failures your firm is more prone to.'));
out.push(PHRASE_CARD(['has it ever changed one?', 'how long did it take?', 'whatever the merits', 'who runs the plan?', 'who runs the argument?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** changes your firm could not influence.'));
out.push(table(['The change', 'Has the body ever moved one, and how long?', 'The plan: who, by when', 'The argument: who, by when'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.6, 2.4, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The change is _______. That body has changed a published requirement _______ times in _______ years, taking _______. So the planning assumption is _______. _______ runs the plan to _______, and _______ runs the argument to _______._'));
out.push(p('**Listener task:** count how many bodies had ever moved a published requirement. ⚠ Then ask which of the two failures each firm is more prone to, and expect most to name the first.'));
out.push(p('**Board clinic:** your teacher writes four positions on the board — find the one where the argument has become the plan, and the one where one person is doing both. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CERTIFICATION: THE PLAN AND THE ARGUMENT, WHICH ARE TWO THINGS. N. Mansour, 17 September.**',
  '⚠ **The factual question first, because it decides the shape of everything below.** **Has the Directorate ever amended a published schedule after publication? Twice in eleven years, in 2019 and 2023, and both took more than two years.** ⚠ **So the planning assumption is that this requirement applies on 1 January whatever its merits, and nothing in the paragraphs below is an opinion about whether it should.**',
  table(['', 'The plan', 'The argument'], [
    ['**who**', '**B. Nassif**', '**N. Sayegh, through the association**'],
    ['**by when**', '⚠ **eleven consignments certified by 3 December**', '⚠ **submission filed for the November meeting; outcome, if any, 2029 or 2030**'],
    ['**what it assumes**', '**that the requirement applies**', '⚠ **that the schedule should not have included packaging** — **which may be right and is not a plan**'],
    ['⚠ **reporting**', '**weekly to me, Fridays**', '⚠ **to the board, after the November meeting** — **and Bassel does not report on it and I do not ask him about it**'],
  ], [1.4, 3.6, 4]),
  '⚠ **Why the two are kept apart by name.** **In 2024 this firm argued about the deposit rules from March to August and then complied in three weeks in September, with everything that could have been done in April.** ⚠ **The five months cost about 400,000 and one customer, and the rule never moved a word.** **What went wrong was not the arguing. It was that the arguing WAS the plan** — **everybody felt busy and nothing was being prepared.**',
  '⚠ **And the opposite failure, which this firm has also had.** **In 2021 we complied with a labelling change in six weeks, efficiently, and never objected to it** — **and it is still in force, it still makes no sense for packaging, and the submission that might have changed it was never written because the problem had been solved.** ⚠ **Competence closed the question.**',
  '⚠ **So: two documents, two people, two timescales, and one rule.** ⚠ **Neither of them reports on the other\'s work.** **If the submission succeeds in 2029 we will have certified for two years and lost nothing by it. If the certification is late we will have paid 590,000 and the submission will not help us.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the factual question, and what is the answer?'));
out.push(item('2', 'What went wrong in 2024, and what does the writer say it was NOT?'));
out.push(item('3', 'What is the opposite failure, and what does the writer call it?'));
out.push(box('Writer\'s box', [
  '**The plan-and-argument page — five parts:** ⚠ **the factual question and its answer, first** → ⚠ **a two-column table: the plan and the argument** → ⚠ **a *reporting* row with the separation rule in it** → ⚠ **both failures, from your own firm\'s history** → ⚠ **and what each outcome is worth.**',
  '⚠ **Put the factual question first and answer it with a count.** ⚠ *Twice in eleven years, both over two years.* **It decides the shape of everything below, and it keeps the page out of an argument about merits** — *nothing below is an opinion about whether it should apply.*',
  '⚠ **Two columns, and give the argument its honest timescale.** ⚠ *Outcome, if any, 2029 or 2030.* **An argument with a realistic date on it is a legitimate activity; one with no date is the thing that eats the plan.**',
  '⚠ **Put the separation rule in the reporting row, in those words.** ⚠ *Bassel does not report on it and I do not ask him about it.* **The rule has to be written down, because a single person asked about both will give the urgent answer and the argument is never the urgent one.**',
  '⚠ **Give both failures from your own firm, with figures.** ⚠ **The argument becoming the plan: five months, 400,000, a customer, and the rule unmoved.** ⚠ **The plan silencing the argument:** *competence closed the question* — **a labelling change complied with in six weeks, never objected to, still in force six years later.**',
  '⚠ **And price the outcomes.** ⚠ *If the submission succeeds in 2029 we will have certified for two years and lost nothing. If the certification is late we will have paid 590,000 and the submission will not help us.* **Two sentences, and they are the whole argument for doing both** — **because the asymmetry is total and anybody can see it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a plan-and-argument page for a change at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE PLAN AND THE ARGUMENT, WHICH ARE TWO THINGS. ______________, ______________.**   ⚠ **The factual question first. Has ______________ ever ______________ after publication? ______________ times in ______________ years, taking ______________.** ⚠ **So the planning assumption is ______________, and nothing below is an opinion about whether it should.**   **** | **The plan** | **The argument**   **who** | **______________** | **______________**   **by when** | ⚠ **______________** | ⚠ **______________, outcome if any ______________**   ⚠ **reporting** | **______________** | ⚠ **______________ does not report on it and I do not ask about it**   ⚠ **Why they are kept apart. In ______________ this firm ______________, and ______________. What went wrong was not the arguing** — **it was that the arguing WAS the plan.**   ⚠ **And the opposite failure. In ______________ we complied in ______________ and never objected, and ______________. Competence closed the question.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The factual question, answered with a count', ''],
  ['Two named people, not one', ''],
  ['A realistic date on the argument', ''],
  ['The separation rule, written down', ''],
  ['Both failures, from the writer\'s own firm', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their two names. ⚠ The class says of each whether they are different people, and a page with one name has already chosen which half will be dropped.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a change your firm argued with (**200 to 240 words**). Say how long the arguing lasted, whether the thing moved, what was prepared in the meantime, and what the arguing cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the arguing become the plan?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the arguing become the plan? ⚠ **Usually two of three** — **and ask the third whether the firm ever objected at all, because the other failure is quieter and is usually described as having handled it well.**'));
out.push(box('Homework', ['Write your final text. Then take one change at your work, answer the factual test, and name two different people with two dates (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.6 =======================
out.push(pb());
out.push(h2('23.6  A view you share with a competitor'));
out.push(p('**Function:** making common cause and marking the difference   ·   **Grammar:** _we agree on X and Y; we do not agree on Z, for this reason_   ·   **Pronunciation:** agreement without warmth'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your firm and a competitor would both want. ⚠ Then say something you would want and they would not.'));
out.push(p('**b**  Which is usable in a joint submission? _the industry is united in opposing this requirement · the four signatories agree that packaging was included in error and that the transition is too short; on the question of a transition for existing suppliers the signatories do not take a common position, and Sham Trading\'s view is at Annex B_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Tarabishi, the association chairman, say about unanimity?   **A** that it is essential   **B** that a submission claiming unanimity it does not have is worth less than one that marks its differences   **C** nothing'));
out.push(p('**b**  Listen again. **1** What three things do all four signatories agree on? **2** What does he say the Directorate does with a submission that claims total agreement?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  "They know we do not all agree"', [
  ['Nour', 'Mr Tarabishi, the draft says the industry is united in opposing the requirement. We are not.'],
  ['Mr Tarabishi', '⚠ **Nobody is. Two of the four signatories already comply and would be glad to see it enforced tomorrow.**'],
  ['Nour', 'Then why does the draft say united?'],
  ['Mr Tarabishi', '⚠ **Because that is how submissions have been written here for twenty years, and it is a habit rather than a decision.** ⚠ **And it costs us, which I have only understood in the last two years.**'],
  ['Nour', 'How does it cost you?'],
  ['Mr Tarabishi', '⚠ **The Directorate knows the trade. They know Hamdan complies and we do not.** ⚠ **So a submission claiming we are united tells them one of two things: that we do not know our own members, or that we are prepared to say something convenient** — **and after that the three points we actually agree on are read as negotiating positions rather than as facts.**'],
  ['Nour', 'What do all four agree on?'],
  ['Mr Tarabishi', '⚠ **Three things, and they are not small.** ⚠ **That packaging was included in error, because the schedule was drafted for construction materials after a specific failure. That three months from publication is too short for eleven accredited bodies to absorb the trade. And that the notice is silent on goods in transit, which is a gap that affects everybody.**'],
  ['Nour', 'And the fourth point, which we want and Hamdan does not.'],
  ['Mr Tarabishi', '⚠ **A transition for importers whose existing supplier is not yet accredited.** ⚠ **You want it, Hamdan actively does not, and I am not going to pretend the association has a view.** **It goes in an annex with your name on it.**'],
  ['Nour', 'Does that weaken the submission?'],
  ['Mr Tarabishi', '⚠ **It strengthens the three points and it costs you the comfort of being inside the word *united*.** ⚠ **A submission that marks its one disagreement is a submission whose agreements can be taken at face value** — **which is the only thing we have to sell.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Common cause, with the difference marked**',
  table(['', 'The move', 'Here'], [
    ['⚠ **1 what all agree on**', '⚠ **specifically, with the reason**', '⚠ *packaging was included in error; three months is too short for eleven bodies; the notice is silent on goods in transit*'],
    ['⚠ **2 where there is no common view**', '⚠ **said in the submission, not hidden**', '⚠ *on a transition for importers whose supplier is not accredited, the signatories do not take a common position*'],
    ['⚠ **3 whose view it is**', '⚠ **in an annex, with a name on it**', '⚠ *Sham Trading\'s view is at Annex B*'],
    ['⚠ **4 why that is stronger**', '⚠ **and this is the part to understand**', '⚠ **a submission that marks its one disagreement is one whose agreements can be taken at face value**'],
  ], [2.3, 2.9, 3.8]),
  '⚠ **A claim of unanimity you do not have costs the three points you do have.** ⚠ **The reader knows the trade** — **so *united* tells them either that you do not know your own members or that you will say something convenient, and after that your facts are read as positions.**',
  '⚠ **Name the agreements with their reasons, not as slogans.** ⚠ *Included in error, because the schedule was drafted for construction materials after a specific failure.* **Three reasoned agreements are worth more than one sweeping opposition** — **and they are the part an official can actually act on.**',
  '⚠ **Say in the submission itself that there is no common view on the fourth point.** ⚠ **Not in a covering letter, not by omission** — **in the document, where the reader will find it anyway and will think better of you for having put it there.**',
  '⚠ **Put your own view in an annex with your name on it.** ⚠ **It keeps the joint document joint, it gives the official your point in a form they can route separately, and it means your competitor has not been made to appear to support something they oppose.**',
  '⚠ **And understand the trade.** ⚠ **You lose the comfort of being inside the word *united* and you gain the three agreements being believed** — **which is the only asset a trade submission has.**',
  '**Practise:** Take a view you share with a competitor. Write the shared points with reasons, the point you do not share, and whose annex it goes in.',
  '**Useful phrases:**  nobody is united  ·  they know our trade  ·  the signatories do not take a common position  ·  our view is at Annex B  ·  taken at face value',
  '**Pronunciation – agreement without warmth.** 🔊 **Track 23.12** Listen twice. ⚠ **The first says *the signatories do not take a common position on this point* level, as a fact about the document.** ⚠ **The second adds regret.** **Level, it is a drafting statement; regretful, it sounds like a dispute, and a reader starts looking for the quarrel.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a joint draft; B marks the difference.'));
out.push(dlg(null, [
  ['A', 'The draft says the trade is united in __________.'],
  ['B', '⚠ **Is it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Does the reader know that?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then what do you all actually agree on? With reasons.**'],
  ['A', '__________.'],
  ['B', '⚠ **And where is there no common view?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say so in the document, and put your own view in an annex with your name on it.**'],
]));
out.push(table(['Role card 1 — unanimity is our strength', 'Role card 2 — I will just stay silent on the fourth point'], [[
  '⚠ **A believes the word *united* is the submission\'s main asset.** ⚠ **B asks whether the reader knows that two signatories already comply.** ⚠ **B\'s point: they do, so the claim costs the three real agreements** — **which are then read as negotiating positions, and the one asset a trade submission has is that its facts can be taken at face value.**',
  '⚠ **A proposes to sign the joint document and say nothing about the point the firm needs.** ⚠ **B asks who will make that point if nobody does.** ⚠ **B\'s point: silence costs the firm the only request that affects it** — **and it also misleads, because a signatory who says nothing is read as agreeing with the document\'s scope, which is 19.2\'s *we do not allege* in reverse.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the shared points with reasons, and the one point with no common view. ⚠ Then say whose annex carries it and what the writer loses by signing that way.'));
out.push(PHRASE_CARD(['is it, though?', 'does the reader know?', 'what do you all agree on?', 'no common position', 'our view is at Annex B']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** issue your firm shares with a competitor.'));
out.push(table(['What you all agree on, with reasons', 'Where there is no common view', 'Whose annex, and what it says', 'What you lose by marking it'], [['', '', '', '']], [2.8, 2.2, 2.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We all agree that _______, because _______; and that _______. There is no common position on _______. Our view goes in an annex with our name on it, and what we lose is _______._'));
out.push(p('**Listener task:** count how many of the shared points had reasons attached rather than being slogans. ⚠ Then ask what each firm loses by marking the difference, and whether it is more than the three agreements are worth.'));
out.push(p('**Board clinic:** your teacher writes four submissions on the board — find the one claiming unanimity it does not have, and the one whose shared points are slogans without reasons. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the submission, and answer the questions.'));
out.push(box(null, [
  '**SUBMISSION TO THE DIRECTORATE OF STANDARDS ON THE NOTICE OF 3 SEPTEMBER. Filed by the Packaging and Materials Association, 20 October. Four signatories.**',
  '⚠ **1  What the four signatories agree on.** **Three matters.**',
  '**1.1  That packaging materials were included in the schedule in error. The schedule was drafted for construction materials following the Jaramana failure of 2022, and packaging appears in it because it shares a customs heading and for no other reason we can identify. We invite the Directorate to say whether this was intended.**',
  '**1.2  That three months from publication is too short. There are eleven accredited bodies. Between them they certified about 400 consignments last year across all schedules; this schedule adds an estimated 2,900. The arithmetic, not the inconvenience, is our objection.**',
  '**1.3  That the notice is silent on goods in transit on 1 January. This affects all four signatories equally and is the one point on which we ask for an answer rather than a change.**',
  '⚠ **2  Where the signatories do not take a common position.** **On a transition for importers whose existing supplier is not yet accredited, the signatories do not agree and the Association takes no view.** ⚠ **Two signatories already hold accredited supply and would be disadvantaged by such a transition. Two would benefit from it.** **We have not attempted to reconcile this and we are not asking the Directorate to weigh our members against each other.**',
  '**2.1  Sham Trading\'s view on that point is at Annex B, filed in its own name.**',
  '**2.2  Hamdan Materials\' view on that point is at Annex C, filed in its own name, and it is the opposite of Annex B.**',
  '⚠ **3  A note on why this submission is drafted this way, which the Directorate may find unusual.** **Previous submissions from this Association have described the trade as united.** ⚠ **The Directorate knows our trade and knows that two of our four members already comply.** **A claim of unanimity would have been untrue and would have made paragraphs 1.1 to 1.3 look like positions rather than arithmetic** — ⚠ **and 1.2 in particular is arithmetic, which anybody can check.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the objection in 1.2, and what does the submission say it is not?'));
out.push(item('2', 'How are the two opposing views handled, and what does paragraph 2 say the Directorate is NOT being asked to do?'));
out.push(item('3', 'What does paragraph 3 explain, and what does it say about previous submissions?'));
out.push(box('Writer\'s box', [
  '**A joint submission with a marked difference — five parts:** ⚠ **the agreed points, numbered, each with its reason** → ⚠ **arithmetic where arithmetic is available** → ⚠ **a paragraph saying where there is no common position, and why** → ⚠ **annexes in the members\' own names, including the opposing one** → ⚠ **and a note explaining the drafting.**',
  '⚠ **Give each agreed point its reason, and prefer arithmetic.** ⚠ *Eleven bodies certified about 400 consignments last year; this schedule adds an estimated 2,900. The arithmetic, not the inconvenience, is our objection.* **That sentence is the strongest in the document, because it can be checked and it cannot be characterised as complaint.**',
  '⚠ **Distinguish the point where you want an ANSWER from the points where you want a change.** ⚠ *The one point on which we ask for an answer rather than a change.* **It tells the official which paragraph they can deal with this month** — **23.2 applied inside a policy submission.**',
  '⚠ **State the disagreement, say who gains and who loses, and refuse to reconcile it.** ⚠ *We are not asking the Directorate to weigh our members against each other.* **That refusal is what makes the rest of the document neutral**, **and it protects the association from being asked to choose between its own members.**',
  '⚠ **Name both annexes, including the one against you.** ⚠ *Annex C, filed in its own name, and it is the opposite of Annex B.* **A submission that points at the opposing annex has made itself impossible to accuse of managing the comparison** — **the same move as 21.5, in a document with four authors.**',
  '⚠ **And explain the drafting, because it will look unusual.** ⚠ *Previous submissions have described the trade as united. The Directorate knows that two of our four already comply.* **Then the consequence:** *a claim of unanimity would have made 1.1 to 1.3 look like positions rather than arithmetic.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a joint submission with a marked difference (**80 words or more**). Use the frame.'));
out.push(p('**SUBMISSION TO ______________ ON ______________. Filed by ______________, ______________. ______________ signatories.**   ⚠ **1  What the signatories agree on.**   **1.1  That ______________. The reason is ______________. We invite ______________ to ______________.**   **1.2  That ______________. ______________, and ______________.** ⚠ **The arithmetic, not the inconvenience, is our objection.**   **1.3  That ______________.** ⚠ **This is the one point on which we ask for an answer rather than a change.**   ⚠ **2  Where the signatories do not take a common position. On ______________, the signatories do not agree and ______________ takes no view.** ⚠ **______________ would be disadvantaged and ______________ would benefit. We are not asking ______________ to weigh our members against each other.**   ⚠ **2.1  ______________\'s view is at Annex ______________, in its own name.** ⚠ **2.2  ______________\'s view is at Annex ______________, and it is the opposite.**   ⚠ **3  A note on the drafting. Previous submissions have described the trade as united. ______________ knows that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A reason under every agreed point', ''],
  ['Arithmetic where it was available', ''],
  ['The answer-only point distinguished from the change points', ''],
  ['The disagreement stated, with who gains and loses', ''],
  ['Both annexes named, including the opposing one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *no common position* paragraph. ⚠ The class says of each whether it names who gains and who loses, and whether it refuses to reconcile them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your firm wants that a competitor would oppose (**200 to 240 words**). Say what you both agree on, where you diverge, and what it would cost you to say so in a joint document.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does the shared point carry a reason?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there something all parties genuinely agree on? ⚠ **Usually all three, and usually more than the writers expected** — **because firms in a trade assume their interests diverge everywhere and in practice they diverge on one point in four.**'));
out.push(box('Homework', ['Write your final text. Then take one issue you share with a competitor and write the shared points with reasons, plus the one point with no common view (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 23.7 =======================
out.push(pb());
out.push(h2('23.7  Review & Mediate: the joint submission you half agree with'));
out.push(p('⚠ **This is the eleventh unit of this book, and the first in which the thing Nour has to decide is not inside her own firm at all.** ⚠ **Everything from Unit 13 onwards has been a document with one author or two; this one has four, and three of them are competitors.**'));
out.push(p('**Function:** signing in part and differing in writing   ·   **Grammar:** _we sign X; on Y we differ, and we say so before filing_   ·   **Pronunciation:** a difference announced in advance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**23.1**  What are the four questions you put to a notice?', ''],
  ['**23.2**  What is the difference between a request a body can grant and one it cannot?', ''],
  ['**23.3**  Which of the four figures does nobody work out?', ''],
  ['**23.4**  What three things does a falsifying condition need to be real?', ''],
  ['**23.5**  What is the factual test for whether to argue or to plan?', ''],
  ['**23.6**  What does a claim of unanimity you do not have cost you?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour decide to do about the joint submission?   **A** refuse to sign   **B** sign it on the three agreed points, file a one-page annex on the fourth, and tell the chairman before filing rather than after   **C** sign it and say nothing'));
out.push(p('**b**  Listen again. **1** Why does telling the chairman first matter more than the annex itself? **2** What does Nadia say the association would do to Sham Trading if the annex arrived unannounced?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  "Then tell him on Tuesday, not on Friday"', [
  ['Nour', 'I have to decide about the joint submission by Friday, and I have been putting it off for eleven days.'],
  ['Nadia', 'Say the problem in one sentence.'],
  ['Nour', '⚠ **It is right about three things and it is silent about the one that costs us 900,000.** ⚠ **And the silence is not an oversight** — **Hamdan asked for it, because a transition for importers whose supplier is not accredited would put us back level with them.**'],
  ['Nadia', 'So do not sign it.'],
  ['Nour', '⚠ **Then the three points go in with three signatures instead of four, and 1.2 is arithmetic that affects the whole trade and I would be the reason it is weaker.** ⚠ **I would be punishing the Directorate for Hamdan\'s drafting.**'],
  ['Nadia', 'Then sign it and say nothing.'],
  ['Nour', '⚠ **Then I have signed a document whose scope I disagree with and said nothing, which is 19.2 in reverse** — **a signatory who is silent is read as agreeing, and in a year I cannot say I objected because there is nothing to point at.**'],
  ['Nadia', 'So you already know what you are doing.'],
  ['Nour', '⚠ **I sign the three points and file one page of my own on the fourth.** ⚠ **What I have been putting off for eleven days is not the decision. It is the telephone call.**'],
  ['Nadia', 'To Mr Tarabishi.'],
  ['Nour', 'Yes. And I had been planning to file the annex on Friday and let him see it when the Directorate did.'],
  ['Nadia', '⚠ **Then you would have broken ranks twice.** ⚠ **Once in the annex, which is legitimate and which he will accept** — **and once by letting the chairman of your own association learn his members\' positions from the body he is writing to.**'],
  ['Nour', 'He would not forgive the second one.'],
  ['Nadia', '⚠ **Nobody would, and it is not about forgiveness.** ⚠ **An association exists so that a body hears one voice where there is one and knows where there is not.** ⚠ **A chairman surprised by his own member in front of the Directorate cannot do that job for anybody again** — **and the next time this trade needs four signatures it will not get them.**'],
  ['Nour', 'So I ring him on Tuesday and tell him what the annex says.'],
  ['Nadia', '⚠ **You ring him on Tuesday and ask him whether he would rather the difference was marked in his document or in yours.** ⚠ **Which is a real question with two acceptable answers** — **and if he chooses his, you have cost yourself nothing and given him the stronger submission.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Signing in part: the four moves, and the one that is a telephone call**',
  table(['', 'The move', 'Here'], [
    ['**1 sign what is true**', '⚠ **the three agreed points, with your signature**', '⚠ *1.2 is arithmetic that affects the whole trade, and three signatures is weaker than four*'],
    ['**2 differ in writing**', '⚠ **one page, in your own name, on the one point**', '⚠ *a transition for importers whose supplier is not accredited* — **Annex B**'],
    ['⚠ **3 tell the chairman first**', '⚠ **before filing, not with the filing**', '⚠ **Tuesday, not Friday** — **so he is not told by the Directorate what his own members think**'],
    ['⚠ **4 and make it a question**', '⚠ **his document or yours?**', '⚠ **two acceptable answers, and either one costs you nothing**'],
  ], [2.4, 2.8, 3.8]),
  '⚠ **Refusing to sign is not the principled option it feels like.** ⚠ **The three agreed points go in weaker, and you have punished the reader for a competitor\'s drafting** — **so weigh what your signature adds to what is true before weighing what it concedes.**',
  '⚠ **Signing in silence is the one genuinely dishonest option.** ⚠ **A signatory who says nothing is read as agreeing with the document\'s scope**, **and in a year there is nothing to point at** — **which is 19.2\'s *we do not allege* turned the wrong way round.**',
  '⚠ **The annex is the easy half.** ⚠ **One page, your own name, the one point, and the reader can route it separately** — **and a chairman will accept it, because an association that marks its differences is believed about its agreements.**',
  '⚠ **The telephone call is the half people put off, and it is the whole thing.** ⚠ **A chairman who learns his member\'s position from the body he is writing to cannot do his job for anybody again** — **and the next time the trade needs four signatures it will not get them.**',
  '⚠ **Then make it a question rather than a notification:** ⚠ *would you rather the difference was marked in your document or in mine?* **Two acceptable answers; if he takes it into the joint submission you have given him the stronger document and kept your point.**',
  '**Useful phrases:**  right about three things  ·  silent about the fourth  ·  I sign the three and file one page  ·  on Tuesday, not on Friday  ·  in your document or in mine?',
  '**Pronunciation – a difference announced in advance.** 🔊 **Track 23.14** Listen twice. ⚠ **The first says *would you rather the difference was marked in your document or in mine* evenly, as a genuine question.** ⚠ **The second stresses *mine*.** **Even, it is a choice he can take; stressed, it is a threat with a question mark, and he will take neither option well.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a joint document to sign; B works the four moves. ⚠ **In order.**'));
out.push(table(['B asks', 'A answers'], [
  ['⚠ **What is the document right about, and whose signature does that need?**', '______________'],
  ['⚠ **What is it silent about, and was the silence asked for?**', '______________'],
  ['⚠ **If you refuse, who pays for it?**', '______________'],
  ['⚠ **If you sign and say nothing, what will you be read as agreeing to?**', '______________'],
  ['⚠ **So: which day do you ring the chairman, and what do you ask him?**', '______________'],
], [4.6, 4.4]));
out.push(table(['Role card 1 — I will file the annex and tell him after', 'Role card 2 — signing in part is not really signing'], [[
  '⚠ **A proposes to file the annex on Friday and let the chairman see it when the Directorate does.** ⚠ **B asks what the chairman\'s job is.** ⚠ **B\'s point: an association exists so that a body hears one voice where there is one and knows where there is not** — **and a chairman surprised in front of the Directorate cannot do that job again, so the trade loses four signatures permanently to save one difficult call.**',
  '⚠ **A says a partial signature is worth nothing and the firm should either support the submission or stand outside it.** ⚠ **B asks what 1.2 is.** ⚠ **B\'s point: it is arithmetic that affects the whole trade, and three signatures carry it less well than four** — **so standing outside punishes the reader for a competitor\'s drafting and costs the firm its own point as well.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** name a document you have signed with a reservation you never wrote down. ⚠ Then say which day you would have had to make the telephone call, and what you would have asked.'));
out.push(PHRASE_CARD(['right about three things', 'silent about the fourth', 'who pays if I refuse?', 'on Tuesday, not Friday', 'yours or mine?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** documents you have signed, or would have to sign, that you half agree with.'));
out.push(table(['What it is right about', 'What it is silent about', 'Who pays if you refuse', 'The call: who, which day, what you ask'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2, 2.6]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** Nour will not sign a document silent on the point that costs her firm 900,000. Mr Tarabishi will not file a submission claiming a unanimity he does not have. Hamdan Materials asked for the silence and will not accept the fourth point in the joint text.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What gets filed'], [[
  '⚠ **Nour:** **a signatory who is silent is read as agreeing, and in a year she would have nothing to point at.**  ⚠ **Mr Tarabishi:** **the association\'s only asset is that its agreements can be taken at face value, so the three points must go in with four signatures and the difference must be visible.**  ⚠ **Hamdan:** **a transition for unaccredited suppliers would disadvantage a firm that invested in accredited supply in 2023, and they are not obliged to argue for it.**',
  '⚠ **Nour:** **the comfort of being inside the word *united*, and the hope that the fourth point would be carried by somebody else.** ⚠ **She also makes the telephone call on Tuesday rather than filing on Friday**, **which is the part she had been putting off for eleven days.**  ⚠ **Mr Tarabishi:** **the appearance of a trade that agrees with itself.**  ⚠ **Hamdan:** **the silence** — **the difference is now in the document instead of absent from it, and Annex C is theirs to write.**',
  '⚠ **Three documents, on 24 October.** ⚠ **The joint submission, signed by four, carrying 1.1, 1.2 and 1.3, and carrying paragraph 2 which states that there is no common position on a transition for importers whose supplier is not accredited.** ⚠ **Annex B, one page, N. Mansour for Sham Trading, in its own name.** ⚠ **Annex C, one page, Hamdan Materials, in its own name, and it is the opposite of Annex B.**',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Everybody is right. _______ is right that _______. _______ is right that _______. _______ is right that _______. So what gets filed is _______ — and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence that cost the most, which is Nadia\'s:** *"A chairman surprised by his own member in front of the Directorate cannot do that job for anybody again."* ⚠ **Mark it, because the annex was never the difficult part** — **the eleven days were spent avoiding a four-minute telephone call, and the cost of not making it would have fallen on the whole trade rather than on Nour.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)', 10));
out.push(p('⚠ **This unit is Part 2: sentence insertion, five gaps, six sentences, and one is not needed. It is the fourth time in the level, after Units 5, 14 and 17.** ⚠ **Read the whole paragraph each time and look for what the sentence must connect BACKWARDS to as well as forwards.**'));
out.push(box(null, [
  '**WHEN A MEMBER DIFFERS — from a trade association\'s guidance to its members.**',
  'Members sometimes ask whether they may sign a joint submission on which they do not wholly agree. **(1)** ______ What is not acceptable is signing in silence, because a signatory who says nothing is read by the recipient as supporting the document\'s scope as well as its contents.',
  'The practical question is therefore not whether to differ but where the difference is to be recorded. **(2)** ______ The second is an annex in the member\'s own name, which keeps the joint text joint and gives the recipient a document it can route separately. Either is acceptable to this Association; concealment is not.',
  'A member intending to file an annex should tell the chairman before filing it, and the reason is not courtesy. **(3)** ______ An official who learns from the Association that there is no common position has been told something useful; one who discovers it from two contradictory annexes arriving on the same day has been told that the Association does not know its members.',
  'Members should also resist the assumption that their differences are the larger part of the picture. **(4)** ______ In the Association\'s experience the proportion is nearer one point in four, and members who have drafted the agreed paragraphs first are routinely surprised by how many there are.',
  'Finally, members are reminded what the Association can and cannot do with a difference. **(5)** ______ It will not weigh one member\'s commercial interest against another\'s, and a member who asks it to do so is asking for the one thing that would end its usefulness to both of them.',
]));
out.push(p('**A**  It will state that there is no common position, name the annexes and say nothing further about their merits.'));
out.push(p('**B**  Firms in the same trade tend to assume that their interests diverge on almost everything.'));
out.push(p('**C**  The first is a paragraph in the joint document itself, stating that the signatories do not take a common position on the point and leaving it there.'));
out.push(p('**D**  They may, and the Association encourages it where the alternative is a submission weaker by one signature.'));
out.push(p('**E**  It is that the Association exists so that a body hears one voice where there is one and knows where there is not.'));
out.push(p('**F**  A member who files late will find that the submission has already gone and that no extension is available.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal note or short e-mail, 40 to 50 words, 10 marks.** **The task gives you the points; all of them must appear.** ⚠ **This is the sixth Part 1 of Book 2, after Units 13, 15, 17, 19 and 20.**',
  '⚠ **At 40 to 50 words a note about a difference has room for exactly four things.** ⚠ *What you are signing · what you are not · what you are filing instead · and the call you are making first.* **Nothing else fits, and nothing else is needed.**',
  '⚠ **Name the paragraphs by number, because that is what makes a partial signature readable.** ⚠ *We sign 1.1 to 1.3.* **Six words doing work that *we broadly support the submission* cannot do in twenty.**',
  '⚠ **Put the call in the note with its day.** ⚠ *I am ringing Mr Tarabishi on Tuesday.* **It is the sentence that tells your own colleagues the difference is being handled rather than sprung** — **and in an examination it is a content point the weaker answers leave out.**',
  '⚠ **Do not explain the disagreement in a 40-to-50-word note.** ⚠ *Our view on that point is at Annex B.* **The annex explains; the note routes.** **A note that argues the case runs to eighty words and loses marks for length that it did not gain for content.**',
  '⚠ **Part 2 tip, for the insertion task above.** ⚠ **Four of those five gaps are the FIRST sentence after a question or a claim, so the missing sentence is an answer** — **and the one that is not, gap 4, follows an instruction and must therefore state the assumption being resisted.** ⚠ **Read what each gap is being asked, and the distractor stops looking plausible.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** You have decided to sign a joint submission in part only. Write a note (**40 to 50 words**) to your two colleagues saying **which paragraphs you are signing**, **which point you are not**, **what you are filing instead**, and **the call you are making first, with its day**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   **We are signing paragraphs ______________ of the joint submission.** ⚠ **We are not signing ______________, on which the signatories take no common position.** ⚠ **Our own view goes in ______________, filed in our name.** ⚠ **I am ringing ______________ on ______________ before we file, to ask whether ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The paragraphs named by number', ''],
  ['The point not signed, stated once', ''],
  ['The annex, in your own name', ''],
  ['The call, with its day, before filing', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document you signed with a reservation you never recorded (**200 to 240 words**). Say what it was right about, what it was silent on, who asked for the silence, and what you would have had to say to whom, and on which day.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one joint document in front of you and write the four lines: what you sign, what you do not, what you file instead, and who you ring first (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The obligation is ___ the importer, not on the supplier.   a) at   b) on   c) to',
  '2  The transition runs three months ___ publication.   a) from   b) since   c) of',
  '3  We are asking for something you have the power ___ grant.   a) of   b) for   c) to',
  '4  This plan is wrong ___ Dallal Freres are accredited by 1 November.   a) unless   b) if   c) whether',
  '5  Has this body ever changed a published requirement, ___ how long did it take?   a) or   b) and   c) but',
  '6  The signatories do not take a common position ___ that point.   a) in   b) at   c) on',
  '7  Our view is ___ Annex B, filed in our own name.   a) at   b) on   c) to',
  '8  I am ringing him ___ Tuesday, before we file.   a) in   b) at   c) on',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 23.15** Listen to the conversation on 27 October. Complete the note.   What Mr Tarabishi chose when Nour put the question to him: ______   What the Directorate answered within nine days, and what it did not answer: ______   The figure Nour had not worked out before 23.3: ______   What the watcher reported on 1 November: ______   What Bassel had certified by 3 December: ______   The one thing Nour says she would do differently: ______'));
out.push(p('**C  Reading.** Read the submission at 23.6 again. Say what paragraph 1.2 contains that the other two agreed points do not, why paragraph 3 exists, and what paragraph 2 refuses to do.'));
out.push(p('**D  Writing.** Take one rule at your work that was not written for your trade. Write what it requires, of whom, from when, and the one thing it does not say (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Nadia', 'You rang him on the Tuesday. What did he say?'],
  ['Nour', '⚠ **He took it into the joint document.** ⚠ **Paragraph 2 of the submission is his drafting, not mine, and it is better than mine was** — **because it says who gains and who loses and then refuses to weigh us against each other.**'],
  ['Nadia', 'And the annexes still went in.'],
  ['Nour', '**Both of them. Mine and Hamdan\'s, on the same day, and his points at us about as hard as mine point at him.**'],
  ['Nadia', 'And the Directorate?'],
  ['Nour', '⚠ **Answered 1.3 in nine days: goods in transit on 1 January are outside the requirement.** ⚠ **That was the one we asked for an answer rather than a change, exactly as 23.2 said** — **and it is the only thing we have in writing.** **On packaging being in the schedule in error they have said nothing, and I do not expect them to.**'],
  ['Nadia', 'The figures.'],
  ['Nour', '⚠ **Nine hundred thousand in year one, about 310,000 in a normal year, and the third figure, which I had never worked out, was 590,000** — **the cost of complying late, which is two months of held consignments and the storage.** ⚠ **It is nearly two thirds of the whole programme, and nobody in this firm had put a number on it until I was made to.**'],
  ['Nadia', 'And the watcher.'],
  ['Nour', '⚠ **Bassel, on 1 November, reporting whether Dallal Freres had applied for accreditation.** ⚠ **They had not, which falsified the cheaper plan** — **and he told me on the day, with nothing having moved, which is the report people stop making.**'],
  ['Nadia', 'And by December?'],
  ['Nour', '**Eleven consignments certified by 3 December through the Beirut body. The programme ran.**'],
  ['Nadia', 'One thing differently.'],
  ['Nour', '⚠ **I would have made the telephone call on the second day instead of the twelfth.** ⚠ **The decision took me four minutes once I said it out loud to you** — **and the eleven days were not thinking, they were avoiding one call, and the whole trade was the thing at risk while I did it.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**23.1** read a rule that was not written for you and say what it requires, of whom, from when, and what it does not say',
  '**23.2** write to a body that can decide, asking for something it has the power to grant',
  '**23.3** cost a requirement in four figures, including the cost of complying late',
  '**23.4** state the falsifying condition for your own plan, with a named watcher and a stated day',
  '**23.5** answer the factual test, then run the plan and the argument as two documents with two people',
  '**23.6** write a joint submission whose agreements carry reasons and whose one difference is marked',
  '**23.7** sign a document in part, file your difference in your own name, and make the call before filing',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three come from B1 Units 5 and 6, and all three were things done to you there.** ⚠ **Compliance at B1 was following a rule somebody explained to you.** **Here it is reading the rule yourself, in a notice written about another trade, and finding that the clock started at publication.**',
  '⚠ **Non-compliance at B1 was a fault.** ⚠ **Here it is a figure** — **590,000, the cost of complying late, which is nearly two thirds of the whole programme and which nobody had worked out.**',
  '⚠ **And regulatory at B1 was an adjective in front of *requirements*.** ⚠ **Here it is a body with powers you have to know the limits of** — **one that can answer a question about goods in transit in nine days and cannot be asked to weigh one member of a trade against another.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
module.exports = out;
