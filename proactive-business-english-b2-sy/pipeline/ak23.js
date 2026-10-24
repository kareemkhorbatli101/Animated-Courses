// Proactive Business English B2 · Syria Edition · Book 2 · Unit 23 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
// ⚠ Double-quoted, always — see the note at the head of ak18.js.
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 23  Trade and Policy, and the Rule Nobody Wrote for You'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 23 is the only unit in either book whose antagonist is not a person.** ⚠ **Nobody in it is behaving badly: the Ministry drafted a schedule for another trade, the competitor is protecting an investment it made honestly, and the association chairman is trying to keep an instrument usable.** **Teach it with that in mind, because learners arrive expecting a villain and the absence of one is the lesson.**',
  '⚠ **The six things taught.** ⚠ **Four questions to a notice (23.1) · asking the body that can decide (23.2) · four figures, including the cost of complying late (23.3) · the falsifying condition with a named watcher (23.4) · the plan and the argument as two documents (23.5) · common cause with the difference marked (23.6).**',
  '⚠ **23.1 is the cycle that pays for itself in the first ten minutes of any class.** ⚠ **The four questions are: who is obliged (not who is affected) · what exactly, at the right grain · from when does the clock run · and what does it not say.** ⚠ **In the story the third turns four months into seven weeks, because the effective date is in bold in paragraph 2 and the transition is a subclause nine paragraphs later** — **which is not a trick but is how notices are drafted.**',
  '⚠ **23.2 is the cycle learners resist, because the grantable letter is undignified.** ⚠ **The three grantable things are worth about five weeks, which is most of what the policy costs the firm in time**, **and the persuasive policy argument addressed to a directorate that cannot change a schedule is worth four weeks of waiting and a reply saying it is not a matter for them.**',
  '⚠ **23.3 produces the unit\'s one memorable number.** ⚠ **The cost of complying late, 590,000, is nearly twice the annual cost of complying, 264,000** — **and nobody in the firm had worked it out.** **Expect that ratio to hold in learners\' own examples, and expect none of them to have the figure.**',
  '⚠ **23.4 is the sharpest idea in the unit and the hardest to teach, because it is counter-intuitive.** ⚠ **A condition with nobody watching it is WORSE than no condition at all** — **no condition leaves a firm alert and uneasy, which is safe; a written condition with no watcher gives the same ignorance plus confidence, and confidence is what orders eleven consignments in November without checking anything.**',
  '⚠ **23.7 is the only mediation in either book in which the person Nour has to deal with is not in her firm**, ⚠ **and the thing she has been avoiding for eleven days is a four-minute telephone call.** **The annex was never the difficult part, and the class must be made to see that.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 1, a note, 40 to 50 words, 10 marks**; **the exam practice is Reading Part 2, sentence insertion, five gaps and six sentences, the fourth time in the level after Units 5, 14 and 17.**',
], C.grey, C.navy));

// ===================== 23.1 =====================
out.push(h2('23.1  Reading a rule that was not written for you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the rule to be described before it is stated, and expect the description to be wrong in at least one particular** — **which is the cycle\'s finding arriving in its first two minutes.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names the date, the thing required, the grain (per consignment), the source (a body on the accredited list) and the party obliged.** **The first is an opinion with no requirement in it at all.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Who is obliged (not who is affected) · what exactly is required, at what grain · from when does the clock run · and what does the notice NOT say.**  2 ⚠ **Because somebody in the room will have read it, and after that nothing else you say is weighed** — **so indignation before reading costs you the first meeting.**'));
out.push(p('⚠ **Teach question 1 as a vocabulary distinction, because that is what it is.** ⚠ *Affected* **and** *obliged* **are different: the supplier who holds no certificate is affected, the importer who must produce one is obliged** — **and in the story three people in the office had it the wrong way round and the firm had been waiting for Dallal Freres to act.**'));
out.push(p('⚠ **Question 3 is the one to spend time on, and the generalisable rule is the last line of the 23.1 reading:** ⚠ *the date in bold is almost never the date that matters.* **Here the transition runs three months from publication on 3 September, so it ends on 3 December and the practical deadline is seven weeks rather than four months.**'));
out.push(p('⚠ **And question 4 is the one that produces work.** ⚠ **A notice silent on language, originals and goods in transit has three gaps, and a gap is a question somebody can answer in a letter** — **which is 23.2 arriving one cycle early and is why the two cycles are adjacent.** ⚠ **Insist that silence is marked as ABSENT and never as permitted.**'));
out.push(p('**Language box – Practise (sample):**  _The rule: the fire certificate requirement of 12 March. **Who is obliged:** the occupier, which is us, not the landlord. **What exactly:** an inspection certificate per premises annually, not a system upgrade. **From when:** the clock runs from the date of the last certificate, which for us was 4 August, so our date is 4 August and not 12 March. **What it does not say:** nothing about premises under 100 square metres, and nothing about whether a lapsed certificate can be renewed or must be applied for afresh._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Six months of testing, everything we import, and it is absurd.'],
  ['B', 'Where does the clock start?'],
  ['A', 'January. The first of January.'],
  ['B', 'Paragraph 11(b) says the transition runs three months from publication. What was the publication date?'],
  ['A', '…The third of September.'],
  ['B', 'So the transition ends on 3 December, and anything we order after about 15 November arrives inside the requirement.'],
  ['A', 'That is seven weeks, not four months. That is worse.'],
  ['B', 'Much worse. And what exactly is required?'],
  ['A', 'Testing of everything.'],
  ['B', 'A certificate per consignment, from a list of eleven bodies. Not a test of every item. So the office version is wrong twice, in opposite directions.'],
]));
out.push(note("The two errors pointing in opposite directions is the thing to draw out, because learners expect rumour to run in one direction and it does not. The office version made the timescale four times too generous and the scope about twenty times too large, and both came from the same source, which is that nobody read the notice. Ask the class what the firm would have done on the strength of the office version: ordered nothing in October for fear of the testing, and ordered freely in November because January felt distant. Both decisions are wrong and both are expensive, which is the argument for the four questions as a procedure rather than as good practice."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **All four answers for one rule, in one line each.** ⚠ **The one to check is the third** — **learners give the effective date, and the question asks where the clock starts, which is usually somewhere else.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two rules', [
  '⚠ **1  The rule:** **the municipal signage regulation of 2 February.** ⚠ **Who is obliged:** **the occupier of the premises.** **Not the sign-maker, which the whole street assumed.** ⚠ **What exactly, and from when:** **written approval before a new sign is fixed; the clock runs from the date of fixing and not from the date of order, so the two signs already made are outside it.** ⚠ **What it does not say:** **nothing about replacing an existing sign with an identical one.**',
  '⚠ **2  The rule:** **the carrier insurance requirement in the freight contract of 1 June.** ⚠ **Who is obliged:** **us, as consignor.** ⚠ **What exactly, and from when:** **evidence of cover per shipment, from the date of the contract, which is already running.** ⚠ **What it does not say:** ⚠ **nothing about part-loads, which is sixty per cent of what we send** — **and I have been assuming for four months that part-loads were covered by the annual policy, which nobody has ever confirmed.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The rule is the signage regulation of 2 February. The obligation is on the occupier, not on the sign-maker. What is required is written approval before fixing, and the clock runs from fixing rather than from order. It says nothing about identical replacements. And people here are saying that existing signs must be re-approved, which is not in it._'));
out.push(note("The second sample arrives at the useful outcome, which is not an answer but a discovery: the writer has been assuming for four months that part-loads were covered and nobody has ever said so. Praise that heavily. The four questions are not a comprehension exercise, they are a method for finding the assumption nobody has tested, and question 4 is the one that finds it. Expect about one learner in three to arrive at something of this kind, and give them time to say what they are going to do about it, because that is the sentence the cycle is for."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That the transition runs three months from publication, 3 September, ending on 3 December** — **so the practical deadline is seven weeks and not four months.** ⚠ **Nobody had read it because it is a subclause nine paragraphs after the effective date, which is in bold in paragraph 2.**'));
out.push(p('**2** ⚠ **That every item must be tested; that a factory audit is required; and that Dallal Freres must obtain the certificate.** ⚠ **The third is the expensive one, because the firm had been waiting for Dallal Freres to act and the duty is its own.**'));
out.push(p('**3** ⚠ **That she read it twice and the second reading is where paragraph 11(b) came from**, ⚠ **and the rule she draws from it: the date in bold is almost never the date that matters.** **She marks it as a rule for next time rather than as a complaint about drafting.**'));
out.push(p('⚠ **The WHERE column is the part to insist on and the part learners omit.** ⚠ **A note without paragraph references invites the whole argument to be had again by somebody who has not read the notice**, **and with them anybody can check in two minutes** — **which is the same principle as 17.3\'s page numbers in a summary.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (152 words)', [
  '**THE SIGNAGE REGULATION OF 2 FEBRUARY: WHAT IT ACTUALLY REQUIRES. R. Haddad, 9 February. Note to the file. I have read it twice and the relevant text is at articles 3, 6 and 9(2).**',
  '**Who is obliged: the occupier of the premises. Not the sign-maker and not the landlord. (art. 3)**',
  '**What exactly: written approval from the municipal office before a new sign is fixed. Not a permit per sign and not a structural survey. (art. 6)**',
  '⚠ **From when: the clock runs from the date of FIXING, not of order. Our two signs were ordered on 20 January and will be fixed in March, so they are inside the requirement. (art. 9(2), a subclause)**',
  '**What it does not say: nothing about replacing an existing sign with an identical one; nothing about internal signs. (absent throughout)**',
  '⚠ **What that means for us, in one line. Both signs need approval before March, which is about four weeks, and the approval office sits twice a month.**',
  '⚠ **One thing being said here that is not in it. That existing signs must be re-approved. It is wrong and it has already produced a quotation we do not need.**',
]));
out.push(p('**What to credit.** ⚠ **A reference against every answer.** ⚠ *Obliged* **separated from** *affected* **by name.** ⚠ **The clock located, and located somewhere other than where the writer first assumed.** ⚠ **The silence marked as absent.** ⚠ **And the untrue version named, with what it has already cost.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A note with no references.** ⚠ **The effective date given as the answer to *from when does the clock run*.** ⚠ **Silence treated as permission.** ⚠ **And a note that states the rule without stating what it means for the writer\'s own firm in dates** — **which is the only line anybody will read.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The *from when* answers are the ones to read aloud, and the question to the class is whether the clock starts where the writer first assumed.** ⚠ **Expect about half to have moved** — **and in the story the movement was from 1 January to 3 September, which is the whole plan.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (223 words)', [
  '**In 2024 the deposit rules changed and the change was not aimed at us at all. It was aimed at the retail trade, after a chain collapsed owing deposits to about four hundred customers, and we are a wholesaler who happens to take deposits on pallets.**',
  '**What it required of us was a separate account, a monthly reconciliation and a statement to anybody who asked. Three things, none of them large.**',
  '⚠ **What people said it required was that every deposit be held in cash, that the account be with a named bank, and that the reconciliation be audited. All three untrue, and the third one cost us an auditor\'s quotation of 180,000 that we paid for and did not need.**',
  '⚠ **What the reading changed was the date. Everybody in the office had been working to 1 September, which is in bold in the second paragraph. The transition ran four months from the date of publication in March, so it ended in July. We found that out in August, from a letter, and the late fees were about 400,000.**',
  '⚠ **And what I take from it is that we spent five months arguing about whether the rule should apply to wholesalers, which it should not, and nobody spent forty minutes reading what it said. The arguing was correct and useless. The forty minutes would have saved 400,000.**',
]));
out.push(note("This is the sample to read to a class that thinks the four questions are a formality, because it contains the whole unit in advance: the rule aimed elsewhere, the three untrue versions, the clock in the wrong place, the money, and the five months of correct and useless arguing which is 23.5. If learners' own texts come in like this one, the unit is working. The sentence to make them notice is the last: the arguing was correct. Nothing in this unit says that a firm's objections are wrong, and learners who hear otherwise have taken away the opposite of what is taught."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question is the right one for this cycle:** *obliged, or affected?* ⚠ **It is the distinction that costs the most and it is invisible until somebody asks** — **and a text in which the firm waited for a supplier to act has answered it without knowing.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect one of three to have read the rule itself.** ⚠ **In the other two the firm acted for weeks on a version that came from a conversation** — **and the useful follow-up is to ask who the conversation was with, because it is almost never somebody who had read it either.**'));

out.push(pb());
// ===================== 23.2 =====================
out.push(h2('23.2  Asking a body that can decide'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect most answers to be things the body addressed could not grant** — **and expect the learner to discover that while saying it, which is the point of asking the second half of the question.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names the paragraph, asks one question of interpretation, and asks it of the body that issues interpretations.** **The first asks a directorate to reconsider a policy it did not write.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A confirmation (an interpretation the directorate issues every week) · a clarification (a question of form, answered in a line) · and an administrative concession (something it has the power to allow and has allowed before).**  2 ⚠ **Because the reasonable request needs somebody else\'s signature and the grantable one needs the signature of the person reading the letter** — **which is the difference between a reply in three weeks and a reply saying it is not a matter for them.**'));
out.push(p('⚠ **The cycle\'s real content is a research instruction and it should be taught as one: find out what the body you are writing to actually does.** ⚠ **A directorate that administers a schedule issues interpretations, answers questions of form and grants administrative concessions, and does not change schedules** — **however good the argument.**'));
out.push(p('⚠ **Cost the grantable requests, because they do not look like much and learners dismiss them.** ⚠ *The three together are worth about five weeks to us.* **Nothing in them changes the policy and together they recover most of what the policy costs in time**, **which is the entire argument for writing the dull letter first.**'));
out.push(p('⚠ **And teach the precedent question, which is one telephone call to somebody in the trade.** ⚠ *Which they have allowed before.* **A body is far likelier to do a thing it has done than a thing it merely has the power to do** — **and in the story the 2024 construction-materials precedent is what makes request 3 answerable.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'A letter about translations and certified copies. It is beneath the situation we are in.'],
  ['B', 'What are the three requests worth, in weeks?'],
  ['A', 'I do not know. Not much.'],
  ['B', 'About five weeks. What does the rule cost us in time altogether?'],
  ['A', 'Seven.'],
  ['B', 'So the undignified letter recovers five of the seven.'],
  ['A', 'And the dignified one?'],
  ['B', 'Goes to a directorate that cannot change a schedule, and comes back in four weeks saying it is not a matter for them.'],
  ['A', 'Which recovers nothing and costs four weeks.'],
  ['B', 'And the schedule argument still gets made. In the association submission, to the people who can change a schedule, over two years.'],
]));
out.push(note("Learners feel the dignity objection and it should be named rather than argued with, because it is real: the grantable letter is about translations and photocopies, and the firm's actual grievance is about being in a schedule drafted for another trade. The answer is the two-documents structure, which is the same structure as 23.5: the small letter recovers five of the seven weeks this autumn, and the large argument goes where large arguments go. Nothing is given up. What learners are reluctant to give up is the satisfaction of putting the real point to somebody, and the useful observation is that the real point is being put, to the right body, by the right instrument."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One want sorted into the grantable and the slow, with what the grantable parts are worth in weeks or money.** ⚠ **The valuation is the part learners omit and the part that decides whether they write the letter.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two wants', [
  '⚠ **1  What we want:** **the municipality to stop requiring approval for identical replacement signs.** ⚠ **Who can grant it:** **the council, by amending the regulation. Eighteen months at best.** ⚠ **What the office we write to CAN grant:** **a confirmation that an identical replacement is a replacement and not a new sign; a clarification on whether photographs suffice; and a concession to batch our four premises into one application.** ⚠ **Worth:** **about three weeks and one fee of 30,000.**',
  '⚠ **2  What we want:** **the carrier to accept liability for part-loads.** ⚠ **Who can grant it:** **their head office, at the annual renewal in June.** ⚠ **What the depot we deal with CAN grant:** **written confirmation of what the current policy covers; a copy of the schedule; and a note on the consignment form that part-loads are declared.** ⚠ **Worth:** ⚠ **not weeks** — **it would tell us whether we have been uninsured for four months, which is the thing we actually need to know.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _We want the regulation amended. Only the council can grant that, and it takes eighteen months. What the approval office can grant is a confirmation that an identical replacement is not a new sign, a clarification on photographs and a concession to batch four premises into one application — and those are worth about three weeks and one fee to us._'));
out.push(note("The second sample is the better one and it breaks the pattern deliberately: the grantable requests are not worth weeks, they are worth knowing whether the firm has been uninsured since June. Accept that answer warmly. The cycle asks what a grantable request is worth, and the honest answer is sometimes information rather than time or money — and a firm that discovers it has no cover on sixty per cent of its shipments has got more out of three dull questions than any policy argument could have given it."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That it is not asking the Directorate to revisit the schedule** — **said in the first paragraph, immediately after accepting that the notice applies and that the firm is arranging certification.**'));
out.push(p('**2** ⚠ **That the Directorate accepted certified copies for the construction-materials schedule in 2024**, ⚠ **and it is framed as asking for the same treatment rather than for anything new** — **which is what makes it a thing the reader has already done.**'));
out.push(p('**3** ⚠ **It names the one answer needed first, question 1, with a date, 30 September, and says the firm does not need all four to proceed** — ⚠ **and it offers to take an answer by telephone and write it up for the Directorate\'s file, which removes the last reason for delay.**'));
out.push(p('⚠ **The labels are the part to teach as mechanics.** ⚠ **Confirmation · clarification · request.** **An official can route a confirmation to one desk and a concession to another, and a letter that does the sorting gets handled rather than circulated** — **which is 23.1\'s *at the right grain* applied to your own document.**'));
out.push(p('⚠ **And the planning-assumption move is the strongest sentence in the letter.** ⚠ *We are planning on the basis that they fall outside. We would be glad to be told if that is wrong.* **It converts a question into something answerable with one word and makes the firm\'s exposure visible** — **and visible exposure is what gets a letter answered in nine days rather than nine weeks.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (164 words)', [
  '**To: The Municipal Approvals Office   From: Jisr Supplies, R. Haddad   11 February**',
  '**The signage regulation of 2 February: two questions and one request.**',
  '**The regulation applies to us as occupier under article 3. We are applying for approval for both signs. We are not asking the Office to revisit the regulation.**',
  '⚠ **1  Confirmation sought under article 9(2). Does a sign ordered on 20 January but fixed in March fall within the requirement? Article 9(2) refers to the date of fixing and is silent as to ordering. We are planning on the basis that both signs DO fall within it and are applying accordingly. We would be glad to be told if that is wrong.**',
  '⚠ **2  Clarification on form. Will photographs of the proposed sign serve, or is a scale drawing required?**',
  '⚠ **3  The request. We ask that our four premises be dealt with in one application, as we understand was allowed for the Hamidiyah frontages in 2024. We are asking for the same treatment rather than for anything new.**',
  '⚠ **We do not need all three answers to proceed. Question 2 is the one that affects what we commission this week.**',
]));
out.push(p('**What to credit.** ⚠ **The article that makes it apply, and a statement of compliance, in the first line.** ⚠ **What the writer is NOT asking.** ⚠ **Each item labelled.** ⚠ **A precedent framed as the same treatment.** ⚠ **A planning assumption offered for correction.** ⚠ **And the one urgent answer named.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A letter whose main request is something the addressee cannot grant.** ⚠ **No *we are not asking* sentence.** ⚠ **Unlabelled requests.** ⚠ **A precedent asserted without a year or a subject.** ⚠ **And four equal requests with no urgent one named**, **which gets four answers in six weeks instead of one in ten days.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Read only the *we are not asking* sentences, and ask the class what the reader was braced for in each case.** ⚠ **A sentence that removes nothing has not identified it** — **and the test is whether the reader\'s likeliest first thought appears in it.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (217 words)', [
  '**In 2025 we wrote to the Directorate of Transport asking it to exempt pallet movements under two tonnes from the weighbridge requirement. We put four months into the letter. The depot manager read it, the regional office read it, and in the end somebody wrote back to say that exemptions from the schedule are a matter for the Ministry and not for them.**',
  '⚠ **Four months, and the reply was two lines and entirely correct. They did not have the power. Nobody in our office had asked whether they did.**',
  '⚠ **What we could have asked them for, and did not, was three things. Whether a movement between our own two premises counts as a movement at all, which is an interpretation they issue. Whether the certificate can be produced within forty-eight hours instead of at the gate, which is a question of form. And whether we could weigh at the Ghouta bridge instead of the municipal one, which they allowed a grain merchant to do in 2023 and which I knew about at the time.**',
  '⚠ **Those three would have taken a page and about three weeks. Between them they were worth most of what the requirement costs us, which is time at the gate rather than money.**',
  '⚠ **And the exemption argument would still have been available, to the Ministry, where it belonged.**',
]));
out.push(note("The useful detail in this sample is that the writer knew about the 2023 precedent at the time. That is the common shape of the fault: the grantable request is usually already known to somebody in the firm, and it goes unmade because it is small and the real grievance is large. Ask the class whether they know of a concession granted to somebody else in their trade, and expect about half to be able to name one. Then ask whether anybody has asked for it."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question decides most of these texts:** *could the body addressed grant this?* ⚠ **A text in which the reply said it was not a matter for them has answered it** — **and the follow-up is what the three grantable versions would have been, which the writer can almost always produce in two minutes.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect one of three.** ⚠ **In the other two the reply said it was not a matter for them** — **four weeks spent finding out something a telephone call would have established, and the telephone call is the cycle\'s whole recommendation.**'));

out.push(pb());
// ===================== 23.3 =====================
out.push(h2('23.3  Costing a requirement before you argue about it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect *expensive* to have been said in a meeting and expect no figure to exist anywhere** — **and expect the learner to be slightly surprised by that when they look.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It gives year one, the recurring year, and the cost of being late, with the mechanism of the last one** — **four consignments held.** **The first is a feeling.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Complying in year one including own time, about 310,000 · complying in a normal year, about 264,000 · complying LATE, about 590,000 once · and the items that are not money, said separately.**  2 ⚠ **Because the annual cost makes people indignant and the late cost makes them act** — **and here the late cost is nearly twice the annual one, which is common and almost never calculated.**'));
out.push(p('⚠ **The third figure is the cycle and everything else is scaffolding round it.** ⚠ **A paper giving only the annual cost produces a meeting; one giving both produces a certification programme by Thursday** — **and learners should be made to say which of those two outcomes their own firm has had.**'));
out.push(p('⚠ **Insist on own time at a stated rate in the first figure.** ⚠ **Firms leave it out because nobody invoices for it**, **and leaving it out is how a compliance cost comes in at two thirds of the real one** — **here 46,000 of 310,000, which is fifteen per cent.**'));
out.push(p('⚠ **And the fourth row is the one to defend against learners who want it in the total.** ⚠ *A total with a relationship in it is a total nobody believes, and a relationship outside the total is a thing somebody has to decide about.* **Money adds up and the rest does not, and pretending otherwise is how the rest gets lost in a rounding argument.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to put a value on the supplier relationship and add it to the total. It would show how bad this is.'],
  ['B', 'What would the total then mean?'],
  ['A', 'That the real cost is higher than people think.'],
  ['B', 'And what will the first person who reads it argue about?'],
  ['A', '…The value I put on the relationship.'],
  ['B', 'For the whole meeting. And the certification programme?'],
  ['A', 'Would not get discussed.'],
  ['B', 'So keep it out of the total and give it its own row. Then it is not a number anybody can dispute, it is a thing somebody has to decide about.'],
  ['A', 'Which is what I wanted in the first place.'],
  ['B', 'And it is the largest item on the page, which the arithmetic would have hidden.'],
]));
out.push(note("This objection is worth running in full because the instinct behind it is good: the writer wants the non-money cost taken seriously and believes a number is the way to make that happen. The answer is that a number makes it contestable and a sentence does not. Point out the structure of the 23.3 reading: the Dallal row is the last row, it carries no figure, and it says in terms that it is the largest item on the page in any sense that matters. Nobody can argue with that sentence, and anybody could have argued with a figure of 200,000 attached to a relationship."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **All four figures for one requirement, with the largest named.** ⚠ **Then the question that matters: has anybody at the learner\'s work ever calculated the third?** **Expect almost nobody.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two requirements', [
  '⚠ **1  The requirement:** **annual fire certification of both premises.** ⚠ **Year one, with our time:** **about 90,000** — **62,000 of inspection and about 28,000 of mine and the storeman\'s, at the administration rate, mostly in one week.** ⚠ **A normal year:** **about 62,000.** ⚠ **Complying late, and what is not money:** ⚠ **about 240,000 once** — **the insurer suspends cover on an uncertified building, so a lapse means either closing the store or trading uninsured, and I have costed four days of closure.** ⚠ **Not money: the storeman has to be present for the inspection, and he is the only person who can open the yard.**',
  '⚠ **2  The requirement:** **the carrier\'s evidence-of-cover rule.** ⚠ **Year one, with our time:** **about 14,000, nearly all time.** ⚠ **A normal year:** **about 9,000.** ⚠ **Complying late:** ⚠ **unknown, and that is the finding** — **a shipment moved without evidence of cover is uninsured, so the exposure is the value of the shipment, which is between 300,000 and 2.1 million depending on the week.** ⚠ **Not money: we would be asking the depot manager for a favour, and we need him in June.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Complying costs about 90,000 in year one, including 28,000 of our own time at the administration rate, and about 62,000 thereafter. Complying late costs about 240,000, once, because the insurer suspends cover on an uncertified building. And what is not money is that the storeman must be present and he is the only person who can open the yard, which I am keeping out of the total._'));
out.push(note("The second sample reaches an answer the exercise does not provide for, and it is the right one: the late cost is not a figure but a range of exposure between 300,000 and 2.1 million depending on what is in transit. Accept it and make the class notice what it does. An unbounded late cost is a stronger argument for complying on time than any precise figure, because there is nothing to negotiate with. The rule to draw out is that where the late cost cannot be bounded, saying so is the costing, and a writer who invents a mid-point to look rigorous has weakened their own paper."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The three weeks of the Homs opening order, which could be six.** ⚠ **She has taken it at the low end deliberately, and said so, with the reason: a late cost at the high end reads as an argument for the thing she is recommending, and if the low end carries the decision the high end is not needed.**'));
out.push(p('**2** ⚠ **Nour in Beirut twice more this year, four days; and that Dallal Freres are not obliged while the firm is, so the firm is asking them for something, which changes what it can ask for in the April agreement review.** ⚠ **She calls the second the largest item on the page in any sense that matters.**'));
out.push(p('**3** ⚠ **The argument** — **the association submission, which will take about two years and may change nothing.** ⚠ **She has excluded it entirely rather than put a figure on a chance, which is 21.4\'s rule: assume at nil and say so.**'));
out.push(p('⚠ **The low-end sentence is the most transferable thing in the cycle and it is worth memorising.** ⚠ *If the low end is enough to carry the decision, the high end is not needed.* **It is the answer to the suspicion that a costing paper is advocacy with figures attached**, **and it costs the writer nothing because the decision goes the same way.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (168 words)', [
  '**FIRE CERTIFICATION: WHAT IT COSTS. R. Haddad, 14 February. Four figures, and the fourth is not money.**',
  '**Complying, year one: about 90,000. 62,000 of inspection from two written quotations, plus about 28,000 of our own time at the administration rate, mostly the storeman\'s and mine in one week.**',
  '**Complying, a normal year: about 62,000, which is 0.4 per cent of turnover.**',
  '⚠ **Complying late: about 240,000, once. The insurer suspends cover on an uncertified building, so a lapse means closing the store or trading uninsured. I have costed four days of closure at last February\'s counter takings, and four days is the item I am least sure of and I have taken it at the low end.**',
  '⚠ **Not money, and not added: the storeman must be present for the whole inspection and he is the only person who can open the yard. That is a day with no yard, and it is the largest item on this page in any sense that matters.**',
  '⚠ **The one line anybody will read. Complying costs 62,000 a year. Not complying in time costs about 240,000, once.**',
  '⚠ **What I have NOT costed: the chance that the regulation is relaxed in 2028. Assumed at nil and said so.**',
]));
out.push(p('**What to credit.** ⚠ **A working against every figure, with a source.** ⚠ **Own time, at a stated rate.** ⚠ **A late cost with a mechanism, not just a number.** ⚠ **The weakest item named and taken low, with the reason.** ⚠ **Non-money items separate.** ⚠ **The one line.** ⚠ **And a declared exclusion.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Figures with no working.** ⚠ **Own time omitted.** ⚠ **A late cost asserted without a mechanism** — ***it would be very expensive* in a table.** ⚠ **The weakest item taken at the high end.** ⚠ **And a relationship or a reputation inside the total.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Read only the late costs.** ⚠ **The test is whether each is itemised and whether the writer has named the item they are least sure of** — **and the second is the one that separates a costing from an argument.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (229 words)', [
  '**We complied with the weighbridge requirement eleven weeks late, in 2025, and the reason is that nobody had worked out what being late would cost.**',
  '**Complying would have cost about 140,000: the certificate, the fitting, and about three days of the yard foreman\'s time. That figure existed. It was in a note in March and it is the only figure anybody produced.**',
  '⚠ **Being late cost about 760,000. Two loads were turned back at the bridge in June, which was 90,000 in demurrage and a day of the lorry. One customer in Homs cancelled a standing order worth about 480,000 a year and took half of it back in December, so I have counted one year at half. And the yard worked to a manual log for eleven weeks, which cost about forty hours of checking.**',
  '⚠ **Nobody calculated that. Not roughly, not on the back of anything. The conversation in March was about whether 140,000 was worth paying for a requirement aimed at grain lorries, and it went on for five weeks and was, I think, a reasonable conversation to have.**',
  '⚠ **And if the 760,000 had been on the same page as the 140,000, the conversation would have lasted four minutes. Not because anybody would have changed their view about grain lorries. Because the two figures together make the decision obvious and either one alone does not.**',
]));
out.push(note("The last paragraph is the sentence to lift out of this sample and put on the board, because it states what the cycle is for better than the Language box does: the two figures together make the decision obvious and either one alone does not. Note also that the writer does not resile from the policy objection and should not be made to. The firm was right that the requirement was aimed at grain lorries. It was five weeks arguing that with no late-cost figure that produced the 760,000, and the lesson is about the missing figure rather than about the objection."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question is the cycle\'s whole finding:** *was the late cost ever calculated?* ⚠ **Expect the answer to be no in nearly every text** — **and expect the late cost, when the learner works it out now, to exceed the cost of complying.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three.** ⚠ **And expect none of the three to have had the figure before the deadline**, **which is the reason the deadline was missed** — **and the two observations together are the cycle, so make the class state them in that order.**'));

out.push(pb());
// ===================== 23.4 =====================
out.push(h2('23.4  The falsifying condition, and the watcher'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the position, expect something that would show it wrong, and expect *nobody* to the third part** — **which is the cycle arriving in its first minute and is the ordinary state of most plans.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **A condition that completes *this plan is wrong if*, a named person, a stated day, and reporting on the day.** ***Reviewed regularly* has none of the four.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The condition (what would show the position WRONG) · the watcher, a named person · and the day, a stated date rather than *regularly*** — **plus the reporting rule, which is to report even when nothing has changed.**  2 ⚠ **Because it has been written down, so everybody believes it is being monitored: no condition leaves a firm alert and uneasy, which is safe, while a written condition with no watcher gives the same ignorance plus confidence** — **and confidence is what makes a firm order eleven consignments in November without checking anything.**'));
out.push(p('⚠ **The *ignorance plus confidence* formulation is the one to put on the board and the one learners will remember in a year.** ⚠ **It also answers the objection that a condition is better than nothing** — **which is the natural response and is wrong, and should be elicited before it is answered.**'));
out.push(p('⚠ **Teach the department test as a practical check.** ⚠ *A department cannot be asked on the second of the month whether it looked on the first.* **A watcher must be a person, and the diagnostic is whether you could ask them that question and get an answer.**'));
out.push(p('⚠ **And the reporting rule is the part everybody drops and the part that keeps the arrangement alive.** ⚠ **A watcher who reports only changes is a watcher nobody can tell has stopped watching** — **and a monthly *no change* costs four words.**'));
out.push(p('**Language box – Practise (sample):**  _**Position:** we keep the Ghouta weighbridge arrangement. **Condition:** this is wrong if the Ghouta bridge closes for more than a week, or if its certificate lapses. **Watcher:** the yard foreman, by name. **Day:** the first Monday of each month, and he telephones the bridge rather than assuming. **Reporting rule:** he tells me the same day, whether or not anything has moved, and a *no change* is three words in the yard book._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The position is reviewed regularly. That is our monitoring arrangement.'],
  ['B', 'Who reviews it?'],
  ['A', 'The management meeting.'],
  ['B', 'On what day?'],
  ['A', 'It is a standing item.'],
  ['B', 'When was it last discussed?'],
  ['A', '…I would have to look. Possibly March.'],
  ['B', 'So nobody can tell whether it has lapsed, and it has.'],
  ['A', 'But it is written in the plan.'],
  ['B', 'Which is the problem. Everybody believes it is being watched, so nobody is uneasy — and that is ignorance plus confidence.'],
]));
out.push(note("Run this exchange with a real plan from the room if one is available, because the eight lines above happen almost verbatim. The moment that does the teaching is when the learner cannot say when the item was last discussed; that is not a failure of memory, it is the absence of an auditable arrangement, and it should be named as such rather than passed over politely. Then ask the useful question: what has the firm done in the last six months on the strength of believing that position was being monitored? There is usually something, and it is usually expensive."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One condition in all three parts plus the reporting rule**, ⚠ **and then the sentence in one line: why a condition with no watcher is worse than none.** **If the learner cannot say it in one line they have not got it, and it is worth the extra two minutes.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two positions', [
  '⚠ **1  The position:** **we stay with one carrier for the Homs run.** ⚠ **What would show it wrong:** **two late deliveries in a month, or the loss of their Homs depot.** ⚠ **The watcher:** **the yard foreman.** ⚠ **The day, and the rule:** **the last working day of each month, from the delivery book; he tells me the same day whether or not anything has moved.**',
  '⚠ **2  The position:** **the counter can absorb the Ramadan volume without extra staff.** ⚠ **What would show it wrong:** **a queue count above twelve at the two o\'clock peak on any three days in a week.** ⚠ **The watcher:** **the counter supervisor, who already counts.** ⚠ **The day, and the rule:** ⚠ **daily, and she tells me on the Friday of any week in which it happened once** — **and I have deliberately set the report at once rather than three, because by the time it has happened three times the decision is a week old.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Our position is that we stay with one carrier for the Homs run. It would be wrong if there were two late deliveries in a month or they lost the Homs depot. The yard foreman is watching for it on the last working day of each month, and he tells me the same day whether or not anything has moved._'));
out.push(note("The second sample makes a refinement the cycle does not teach and it is worth praising aloud: the condition fires at three occurrences but the report fires at one, so the decision-maker learns about the first instance rather than about the completed pattern. That is 22.2's counting rule and 23.4's watching rule used together, and it is the kind of thing a learner only produces when they have understood that the reporting rule is a separate instrument from the condition. Ask the class to find another position where the report should fire earlier than the condition."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Because there are three watchers.** ⚠ **As many conditions as you have watchers and not one more** — **three with names beats nine in a list, and a plan with nine and no names is a plan whose author wanted to look thorough.**'));
out.push(p('**2** ⚠ **That certification becomes more expensive; that the transition is extended; that a competitor complies faster.** ⚠ **A more expensive plan is still the plan · an extension is good news · and a competitor\'s speed is not the firm\'s concern** — **none of the three would make the plan WRONG.**'));
out.push(p('**3** ⚠ **It has a deadline rather than a frequency, so Lina reports on the day the answer arrives, and reports by 30 September that it has not.** ⚠ **Silence is the thing nobody reports, and a plan waiting for a letter has no way of noticing that the letter has not come.**'));
out.push(p('⚠ **The watcher-for-silence is the item to make learners add to their own pages, because almost nobody has it.** ⚠ **It is also the commonest way a monitored plan fails anyway** — **not because a condition fired unseen, but because an expected thing never arrived and the absence had no owner.**'));
out.push(p('⚠ **And teach the response-written-now rule as a test rather than as a precaution.** ⚠ *A condition without a response is an alarm with nobody allowed to act on it* — **and a writer who cannot say what they would do has discovered that the condition is not about this plan at all.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (157 words)', [
  '**THE HOMS CARRIER ARRANGEMENT: WHAT WOULD SHOW IT WRONG. R. Haddad, 15 February. Two conditions, because we have two watchers.**',
  '⚠ **This plan is wrong if there are two late deliveries in any month. Watcher: the yard foreman. Last working day of each month, from the delivery book; he tells me the same day whether or not anything has moved.**',
  '⚠ **This plan is wrong if the carrier closes or sells its Homs depot. Watcher: me, at the monthly call. One line in the file after every call, including *no change*.**',
  '⚠ **What is NOT a condition, and why. That their rates rise, because a dearer carrier is still the carrier. That a competitor gets a better rate, because that is not about our arrangement.**',
  '⚠ **What happens if a condition fires. Condition 1: we split the run and give half to the Hama road carrier for a quarter. Condition 2: we move the whole run and accept four days of disruption. Each is written now, because a condition without a response is an alarm with nobody allowed to act on it.**',
  '⚠ **And a watcher for silence. If the carrier has not sent the quarterly schedule by 10 April, the foreman tells me that it has not.**',
]));
out.push(p('**What to credit.** ⚠ **One named person per condition.** ⚠ **A day rather than *regularly*, with the reporting rule in the same cell.** ⚠ **Every condition completing *this plan is wrong if*.** ⚠ **A response written now for each.** ⚠ **And a watcher for silence.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A department as watcher.** ⚠ ***Regularly*, *periodically*, *as required*.** ⚠ **A condition that is an inconvenience rather than a falsification.** ⚠ **More conditions than watchers.** ⚠ **No reporting rule for *no change*.** ⚠ **And no watcher for silence.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Read only the conditions and test each against *this plan is wrong if*.** ⚠ **An inconvenience fails** — **and the commonest failure is a cost increase, which learners offer confidently and which leaves the plan entirely intact.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (231 words)', [
  '**In 2024 we planned the second store on the assumption that the Baghdad Street site would stay vacant until we were ready, which was about nine months away.**',
  '⚠ **What would have shown it wrong was somebody else taking an option on it, and that is a thing you can see: the agent\'s board changes, or the agent tells you if you ask. It is a five-minute enquiry and it was available every week for nine months.**',
  '⚠ **Nobody was looking. The plan said the site position would be monitored, and I wrote that sentence myself, and I now think I wrote it because it made the plan look complete.**',
  '⚠ **We found out in September, from a customer, four months after a chemist had taken it. By then we had spent about 180,000 on drawings for a layout that only fitted that site, and we had turned down a smaller unit in June on the grounds that we had somewhere better.**',
  '⚠ **The gap between the two dates is four months and it cost us the drawings, the June unit, and a year.**',
  '⚠ **And the part I find hardest is that a plan with no monitoring sentence at all would have left me uneasy enough to walk past the site. The sentence is what stopped me. I believed the position was being watched because I had written that it was.**',
]));
out.push(note("The last paragraph is the cycle's thesis arrived at independently, and it is worth reading aloud whenever a class doubts that a condition can be worse than nothing. Note too what the writer says about why the sentence was written: because it made the plan look complete. That is the honest account and it is almost universal. The practical instruction to leave the class with is narrow and checkable: go through one plan of yours, find every monitoring sentence with no name against it, and either put a name and a day beside it or strike it out. Striking it out is not a loss; it restores the uneasiness that was keeping the firm safe."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question is** *was anybody watching, by name?* ⚠ **and the texts in which the answer is a department or a meeting are the ones to spend time on** — **because the learner usually believes those count, and the discovery that they cannot be audited is the cycle.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to have been visible earlier.** ⚠ **And expect at least one to contain a condition written in a plan with nobody\'s name against it**, **which is the arrangement that produces ignorance plus confidence** — **and the learner who wrote that sentence can usually say why they wrote it.**'));

out.push(pb());
// ===================== 23.5 =====================
out.push(h2('23.5  Planning against a change you cannot influence'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the arguing period to be measured in months and the planning period in weeks** — **and expect the learner to supply that contrast without being asked for it.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It has a programme, a number, a body and a date, and it keeps the argument on its own timetable.** **The first is an activity described as a plan.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Has this body ever changed a published requirement after publication, and how long did it take?** — **a factual question with a factual answer, here twice in eleven years and both over two years.**  2 ⚠ **That it is not a contradiction: the plan runs on the real timetable and the argument on the two-year one, as two documents with two audiences** — **different people and different dates, and neither reports on the other\'s work.**'));
out.push(p('⚠ **The factual test is the cycle\'s instrument and it must be kept factual.** ⚠ **Everybody believes they can move things, so a judgement about merits settles nothing** — **but *how many times has this body amended a published requirement, and how long did it take* has an answer, and in the story it is twice in eleven years.**'));
out.push(p('⚠ **Teach the two failures as a pair, because learners only recognise the first.** ⚠ **The argument becoming the plan: five months of activity in 2024, everybody busy, nothing prepared, about 400,000 and a customer, and the rule unmoved.** ⚠ **The plan silencing the argument: a labelling change complied with in six weeks in 2021, never objected to, still in force** — ***competence closed the question*, which is a slower loss and a larger one.**'));
out.push(p('⚠ **And the separation rule is the mechanism, not a nicety.** ⚠ **Different people, different dates, and neither reports on the other** — **because one person asked about both will give the urgent answer, and the argument is never the urgent one.**'));
out.push(p('**Language box – Practise (sample):**  _**The change:** the municipality\'s new approval requirement for frontage signs. **Has the body ever moved one?** Once in nine years, in 2021, and it took three years. **The planning assumption:** it applies, whatever the merits. **The plan:** the storeman, both signs approved before 20 March. **The argument:** me, through the traders\' committee, for the autumn review; outcome, if any, 2029._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Preparing to comply concedes the argument. If we certify, we have accepted the rule.'],
  ['B', 'What did this firm do in 2024?'],
  ['A', 'Argued about the deposit rules.'],
  ['B', 'For how long, and did the rule move?'],
  ['A', 'March to August. No.'],
  ['B', 'And what did the five months cost?'],
  ['A', 'About 400,000 and a customer.'],
  ['B', 'So the arguing conceded nothing and prepared nothing. Now suppose we certify for two years and the submission succeeds in 2029.'],
  ['A', 'Then we have lost nothing by certifying.'],
  ['B', 'And a firm that argues and does not certify loses twice. The asymmetry is total, and it is why both.']
]));
out.push(note("The concession objection is sincere and widespread and it has a precise answer, which is the asymmetry: certifying and winning the argument later costs nothing, while arguing and not certifying costs the full late figure. Put both outcomes on the board as two lines, because the argument is visual and settles immediately. What learners are protecting is not a negotiating position, it is the feeling that preparation is a kind of agreement — and the 2024 example shows that the alternative is not resistance but five months of looking busy."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The factual test answered for one change, then two people and two dates**, ⚠ **then which of the two failures the learner\'s firm is more prone to.** **Expect most to name the first, and ask the ones who name the second how they know** — **the answer is usually a rule they complied with efficiently and have never objected to.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two changes', [
  '⚠ **1  The change:** **the weighbridge requirement.** ⚠ **Has the body ever moved one, and how long?** **Twice in twelve years; both took over two years.** ⚠ **The plan:** **the yard foreman, bridge fitted and certified by 30 April.** ⚠ **The argument:** **me, through the hauliers\' association, for the January submission; outcome, if any, 2030.**',
  '⚠ **2  The change:** **the bank\'s new documentation rule for letters of credit.** ⚠ **Has the body ever moved one?** ⚠ **It is not a body, it is a bank, and the answer is yes, three times in four years, and quickly** — **so this one does not belong in this cycle at all and I should be arguing with it rather than planning against it.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The change is the weighbridge requirement. That body has changed a published requirement twice in twelve years, taking over two years each time. So the planning assumption is that it applies on the date given, whatever the merits. The yard foreman runs the plan to 30 April, and I run the argument to the January submission._'));
out.push(note("The second sample is the one to praise, because the test does the opposite of what the cycle advertises and the learner has followed it rather than the cycle. A counterparty that has moved three times in four years is one to argue with, and planning against it would be the mistake. Make the class notice what that establishes: the test is not a device for persuading people to comply, it is a factual question whose answer sometimes says argue. A class that comes away believing this unit is about accepting rules has been taught badly."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Has the Directorate ever amended a published schedule after publication?** ⚠ **Twice in eleven years, in 2019 and 2023, and both took more than two years** — **so the planning assumption is that the requirement applies on 1 January whatever its merits.**'));
out.push(p('**2** ⚠ **The firm argued about the deposit rules from March to August 2024 and then complied in three weeks in September, with everything that could have been done in April; the five months cost about 400,000 and one customer and the rule never moved a word.** ⚠ **What went wrong was NOT the arguing** — **it was that the arguing WAS the plan.**'));
out.push(p('**3** ⚠ **The plan silencing the argument: a labelling change complied with in six weeks in 2021, efficiently, and never objected to** — **still in force, still senseless for packaging, and the submission that might have changed it was never written.** ⚠ **The writer calls it** *competence closed the question*.'));
out.push(p('⚠ **The *reporting* row is where the separation rule has to live, and learners will put it in a sentence underneath instead.** ⚠ *Bassel does not report on it and I do not ask him about it.* **The rule has to be written down in the row, because a single person asked about both will give the urgent answer.**'));
out.push(p('⚠ **And the two priced outcomes at the end are the whole case for doing both.** ⚠ *If the submission succeeds in 2029 we will have certified for two years and lost nothing. If the certification is late we will have paid 590,000 and the submission will not help us.* **Two sentences, and the asymmetry is total.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (159 words)', [
  '**THE WEIGHBRIDGE REQUIREMENT: THE PLAN AND THE ARGUMENT, WHICH ARE TWO THINGS. R. Haddad, 16 February.**',
  '⚠ **The factual question first. Has the Directorate of Transport ever amended a published schedule after publication? Twice in twelve years, taking over two years each time. So the planning assumption is that it applies from 1 July, and nothing below is an opinion about whether it should.**',
  '**The plan: the yard foreman. Bridge fitted and certified by 30 April. Reports to me every Friday.**',
  '⚠ **The argument: me, through the hauliers\' association, for the January submission. Outcome, if any, 2030. I do not report on the fitting and the foreman does not report on the submission.**',
  '⚠ **Why they are kept apart. In 2025 this firm spent eleven weeks pressing for an exemption and fitted nothing, and the exemption was refused in two lines by an office that could not have granted it. What went wrong was not the pressing — it was that the pressing WAS the plan.**',
  '⚠ **And the opposite failure. In 2022 we complied with the axle-weight change in three weeks and never objected, and it is still in force and still wrong for pallet work. Competence closed the question.**',
]));
out.push(p('**What to credit.** ⚠ **The factual question answered with a count.** ⚠ **Two named people.** ⚠ **A realistic date on the argument.** ⚠ **The separation rule in words.** ⚠ **Both failures, from the writer\'s own firm, with figures where available.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A factual question answered with a judgement** — ***we think it is unlikely to change*.** ⚠ **One name doing both.** ⚠ **An argument with no date.** ⚠ **The separation rule implied rather than written.** ⚠ **And only the first failure given**, **which means the writer has not understood that competence can close a question.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Read only the two names.** ⚠ **A page with one name has already chosen which half will be dropped**, **and the class should say which half** — **it is always the argument, and the writer usually agrees at once.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (226 words)', [
  '**We argued with the axle-weight change for nineteen weeks and it was the most unanimous the office has ever been. Everybody agreed it had been drafted for tippers, everybody agreed it made no sense for pallet work, and everybody agreed somebody should do something about it.**',
  '⚠ **Nothing moved. Not the requirement, and not us. We held four meetings, wrote two letters and attended one association evening, and at the end of the nineteen weeks we had the same lorries and the same axles.**',
  '⚠ **Then we spent five weeks doing the work, which was a converter plate on three vehicles and a note to the insurer. Five weeks. It could have been done in the first five and nothing would have been given up.**',
  '⚠ **What the nineteen weeks cost is two things. Eleven thousand in fines, which is small. And the association submission, which I had volunteered to draft in the second week and never wrote, because every time I sat down to it there was something urgent about the lorries.**',
  '⚠ **That is the part I think about. The submission was the only thing in the whole nineteen weeks that could have changed the requirement, and it is the thing that got dropped, and it got dropped by the person who cared about it most. Nobody else was ever going to write it.**',
]));
out.push(note("This sample gives the cycle's separation rule its justification in a form no explanation matches: the submission was dropped by the person who cared about it most, because that person was also carrying the operational work. Make the class notice that the writer is not lazy or unconvinced; they are the single point of failure that the rule exists to prevent. Then ask the room who in their own firm has volunteered to write something that would change a requirement, and whether they also carry the work of complying with it. The answer is usually yes, and it is usually the same person."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question is** *did the arguing become the plan?* ⚠ **and the second question to put afterwards is the quieter one: did the firm ever object at all?** **A text describing efficient compliance with a bad rule has answered the second without noticing.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three for the first failure.** ⚠ **Then ask the third whether the firm ever objected** — **because the other failure is described as having handled it well, and it is the one nobody brings to a class voluntarily.**'));

out.push(pb());
// ===================== 23.6 =====================
out.push(h2('23.6  A view you share with a competitor'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the shared want to come quickly and the divergent one to come slowly** — **which is the reverse of what learners expect of themselves and is the cycle\'s finding.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names the agreements, states that there is no common position on the fourth point, and routes the firm\'s own view to an annex.** **The first claims a unanimity nobody has.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That packaging was included in error, because the schedule was drafted for construction materials after a specific failure · that three months from publication is too short for eleven accredited bodies to absorb the trade · and that the notice is silent on goods in transit.**  2 ⚠ **It knows the trade and knows that two of the four already comply, so a claim of unanimity tells it either that the association does not know its own members or that it is prepared to say something convenient** — **and after that the three real agreements are read as negotiating positions rather than as facts.**'));
out.push(p('⚠ **The commercial point is the one to lead with, because it is not a point about honesty.** ⚠ **A claim of unanimity you do not have COSTS you the three agreements you do have** — **and the reader is the one who makes it cost, by re-reading your facts as positions.**'));
out.push(p('⚠ **Insist on reasons under the agreed points rather than slogans.** ⚠ *Included in error, because the schedule was drafted for construction materials after a specific failure.* **Three reasoned agreements outweigh one sweeping opposition**, **and they are the part an official can act on.**'));
out.push(p('⚠ **And teach the annex as a service to the competitor as well as to yourself.** ⚠ **It keeps the joint document joint, it gives the official a document they can route separately, and it means the competitor has not been made to appear to support something they oppose** — **which is the sentence that gets a chairman\'s agreement.**'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The word united is the submission\'s main asset. Take it out and we have nothing.'],
  ['B', 'Does the Directorate know that Hamdan already comply?'],
  ['A', '…Yes. Everybody knows.'],
  ['B', 'Then what does united tell them?'],
  ['A', 'That we do not know our own members.'],
  ['B', 'Or that we will say what is convenient. And then what happens to 1.2?'],
  ['A', 'It gets read as a negotiating position.'],
  ['B', '1.2 is arithmetic. Eleven bodies, four hundred consignments last year, two thousand nine hundred added.'],
  ['A', 'Which anybody can check.'],
  ['B', 'And which is worth nothing if the document it sits in has already been shown to say convenient things.']
]));
out.push(note("Run the last two lines slowly, because they contain the commercial argument and learners miss it on first hearing. The claim of unanimity does not merely fail to persuade; it devalues the checkable arithmetic sitting three paragraphs below it. Ask the class what the association's only asset is, and keep asking until somebody says that its agreements can be taken at face value. Everything in this cycle follows from that one sentence, including the annexes and the paragraph that refuses to reconcile them."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The shared points with reasons, the one point with no common view, whose annex carries it, and what the writer loses by marking it.** ⚠ **The last is the honest part** — **and the answer is the comfort of being inside the word *united*, which is a real loss and a small one.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — one shared issue', [
  '⚠ **What we all agree on, with reasons:** **that the Friday closure of the Baghdad Street loading bay was decided without consulting any occupier, because the minute records only the residents\' petition; and that the two-hour window is too short for anybody with pallet deliveries, because the bay holds three vehicles and there are eleven of us.**',
  '⚠ **Where there is no common view:** **whether the window should move to the morning. We need it in the morning. The two cafes need it after eleven and would lose their breakfast trade.**',
  '⚠ **Whose annex, and what it says:** **ours, in our name, asking for a morning window and saying in terms that the cafes oppose it and why.**',
  '⚠ **What we lose by marking it:** ⚠ **the ability to say the street is united, which the committee chairman has been saying for a month** — **and he will be annoyed, and he will be right that it is weaker as a slogan and wrong that it is weaker as a submission.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _We all agree that the closure was decided without consulting any occupier, because the minute records only the residents\' petition; and that a two-hour window is too short for eleven businesses sharing a three-vehicle bay. There is no common position on moving the window to the morning. Our view goes in an annex with our name on it, and what we lose is the ability to say the street is united._'));
out.push(note("The sample does something the frame does not require and it is worth drawing out: it states the competitor's reason for opposing, in the firm's own annex, and states it fairly. That is 21.5's rule about presenting the option you argue against, arriving inside a document with four authors, and it has the same effect — a reader who finds the opposing case stated fairly in your annex stops looking for what else you have left out. Ask the class to add the opposing reason to their own annexes and to notice how little it costs."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Arithmetic: eleven accredited bodies certified about 400 consignments last year across all schedules, and this schedule adds an estimated 2,900.** ⚠ **The submission says in terms that it is** *the arithmetic, not the inconvenience* — **and that is the strongest sentence in the document because it can be checked and cannot be characterised as complaint.**'));
out.push(p('**2** ⚠ **Each goes in an annex in its own name, Annex B and Annex C, and the submission names both and says that Annex C is the opposite of Annex B.** ⚠ **Paragraph 2 says the Directorate is NOT being asked to weigh the members against each other, and that the Association has not attempted to reconcile them.**'));
out.push(p('**3** ⚠ **Why the submission is drafted this way, which the Directorate may find unusual: previous submissions described the trade as united.** ⚠ **It says the Directorate knows the trade and knows that two of the four already comply, so a claim of unanimity would have been untrue and would have made 1.1 to 1.3 look like positions rather than arithmetic.**'));
out.push(p('⚠ **Paragraph 1.3 is the one to point at for the 23.2 link.** ⚠ *The one point on which we ask for an answer rather than a change.* **It tells the official which paragraph can be dealt with this month** — **and in the audio script it is the only thing the Directorate answers, in nine days.**'));
out.push(p('⚠ **And the refusal in paragraph 2 is what makes the rest of the document neutral.** ⚠ *We are not asking the Directorate to weigh our members against each other.* **It protects the association from being asked to choose between the firms that fund it**, **which is the one request that would end its usefulness to both of them.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (171 words)', [
  '**SUBMISSION TO THE MUNICIPAL TRAFFIC OFFICE ON THE BAGHDAD STREET LOADING BAY. Filed by the Baghdad Street Traders\' Committee, 2 March. Eleven signatories.**',
  '**1  What the signatories agree on.**',
  '**1.1  That the closure was decided without consulting any occupier. The reason is that the minute of 14 January records only the residents\' petition and no consultation. We invite the Office to say whether occupiers were intended to be consulted.**',
  '⚠ **1.2  That a two-hour window is too short. The bay holds three vehicles and eleven businesses take deliveries. At twenty minutes a vehicle the window serves six. The arithmetic, not the inconvenience, is our objection.**',
  '**1.3  That the notice is silent on collections as distinct from deliveries. This is the one point on which we ask for an answer rather than a change.**',
  '⚠ **2  Where the signatories do not take a common position. On moving the window to the morning, the signatories do not agree and the Committee takes no view. Two cafes would lose breakfast trade; six suppliers would benefit. We are not asking the Office to weigh our members against each other.**',
  '⚠ **2.1  Jisr Supplies\' view is at Annex A, in its own name. 2.2  The cafes\' view is at Annex B, and it is the opposite.**',
]));
out.push(p('**What to credit.** ⚠ **A reason under every agreed point.** ⚠ **Arithmetic where it was available.** ⚠ **The answer-only point distinguished.** ⚠ **The disagreement stated with who gains and loses.** ⚠ **The refusal to reconcile.** ⚠ **And both annexes named, including the opposing one.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Any claim of unanimity.** ⚠ **Agreed points as slogans with no reasons.** ⚠ **A disagreement mentioned in a covering note rather than in the document.** ⚠ **One annex named and the opposing one omitted.** ⚠ **And a submission that asks the body to decide between its own members**, **which is the one request that cannot be made.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Read only the *no common position* paragraphs.** ⚠ **The two tests are whether it names who gains and who loses, and whether it refuses to reconcile them** — **and the refusal is the part learners leave out, because it feels like an abdication and is in fact the source of the document\'s neutrality.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample answer (221 words)', [
  '**What we want that our competitor would oppose is a morning loading window on Baghdad Street. We take eleven pallet deliveries a week and all of them arrive before ten. The two cafes want the window after eleven, because their breakfast trade is between seven and ten and a lorry across the frontage costs them the busiest two hours of the day.**',
  '⚠ **What we agree on is more than I expected before I wrote it down. That the closure was decided without consulting any occupier. That two hours is arithmetically too short for eleven businesses and a three-vehicle bay. That collections are not mentioned at all. And that the residents, whose petition started it, were right about the noise after six and have been misrepresented by everybody since.**',
  '⚠ **Four agreements and one disagreement, and I had assumed the proportion was the other way round.**',
  '⚠ **What it would cost us to say so in a joint document is the chairman\'s goodwill for about a month, because he has been telling the Office the street is united and he will have to stop. And it would cost us the cafes\' assumption that we were not going to ask.**',
  '⚠ **What it would gain is that the four agreements get read as facts, which is what they are, and the one disagreement gets decided by somebody with no stake in it rather than suppressed by the people with the most.**',
]));
out.push(note("The third paragraph is the cycle's empirical claim arrived at by the learner: four agreements and one disagreement, and the writer had assumed the proportion was the other way round. That happens reliably, and it is the reason the cycle asks for the agreed points to be drafted first. Note also the fourth agreement, which concerns the residents and is against the writer's own interest. A joint submission that includes an agreement unhelpful to its signatories is the most credible document in this unit, and nothing in the frame asks for it."));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The marking question is** *does the shared point carry a reason?* ⚠ **A shared point without a reason is a slogan**, **and a submission of slogans is the document the cycle exists to prevent** — **however many signatures it carries.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to contain something genuinely agreed, and expect more of it than the writers predicted.** ⚠ **Firms in a trade assume their interests diverge everywhere and in practice they diverge on one point in four** — **which is the cycle\'s most useful finding and the one learners will not believe until they have drafted the agreed paragraphs first.**'));

out.push(pb());
// ===================== 23.7 =====================
out.push(h2('23.7  Review & Mediate: the joint submission you half agree with'));
out.push(stage('1', 'Get ready – Unit 23 quiz'));
out.push(table(['', 'The answer'], [
  ['**23.1**', '⚠ **Who is obliged, not who is affected · what exactly, at the right grain · from when does the clock run · and what does it NOT say.**'],
  ['**23.2**', '⚠ **A grantable request needs the signature of the person reading the letter; a reasonable one needs somebody else\'s** — **so find out what the body actually does.**'],
  ['**23.3**', '⚠ **The third: the cost of complying LATE.** **Here 590,000 against an annual 264,000.**'],
  ['**23.4**', '⚠ **A condition that completes *this plan is wrong if* · a named person · a stated day** — **plus reporting even when nothing has moved.**'],
  ['**23.5**', '⚠ **Has this body ever changed a published requirement after publication, and how long did it take?** **Twice in eleven years, both over two years.**'],
  ['**23.6**', '⚠ **The three agreements you do have** — **they get read as negotiating positions instead of as facts.**'],
], [1, 7]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because the annex is legitimate and the chairman will accept it, while letting him learn his own members\' positions from the body he is writing to destroys the thing an association is for** — **and the next time the trade needs four signatures it will not get them.**  2 ⚠ **Nothing to Sham Trading directly, which is the point: the cost falls on the trade.** ⚠ **A chairman surprised by his own member in front of the Directorate cannot do that job for anybody again.**'));
out.push(p('⚠ **The mediation\'s shape is unusual and should be named for the class: the three options are all available and two of them are wrong for different reasons.** ⚠ **Refusing to sign weakens 1.2, which is arithmetic affecting the whole trade, and punishes the reader for a competitor\'s drafting.** ⚠ **Signing in silence is read as agreement and leaves nothing to point at in a year** — **which is 19.2 turned the wrong way round.**'));
out.push(p('⚠ **And the resolution is not the annex.** ⚠ **The annex is the easy half and Nour had already decided it; what she had been putting off for eleven days is a four-minute telephone call** — **and the class must be made to see that the difficulty in this unit is a conversation and not a document.**'));
out.push(p('⚠ **The final move is the one to teach as technique.** ⚠ *Would you rather the difference was marked in your document or in mine?* **Two acceptable answers; if he takes it into the joint text the firm has given him the stronger document and kept its point** — **and in the audio script that is exactly what happens.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The four moves, with a sample run.**'));
out.push(table(['B asks', 'A answers (sample)'], [
  ['**What is the document right about, and whose signature does that need?**', '⚠ **That the closure was unconsulted and that two hours is arithmetically too short. Eleven signatures, and ten is weaker.**'],
  ['**What is it silent about, and was the silence asked for?**', '⚠ **The morning window. Yes** — **the cafes asked for it to be left out, and they were straightforward about why.**'],
  ['**If you refuse, who pays for it?**', '⚠ **The other nine, and the residents, whose point is in 1.1.**'],
  ['**If you sign and say nothing, what will you be read as agreeing to?**', '⚠ **That the eleven of us have no view on timing, which is untrue and unrecoverable in a year.**'],
  ['**Which day do you ring the chairman, and what do you ask him?**', '⚠ **Thursday, before Monday\'s filing. Whether he would rather the difference was in his document or in mine.**'],
], [4.4, 5.6]));
out.push(note("The fourth question is the one that converts this from a matter of conscience into a matter of record, and it should be put in those words: what will you be read as agreeing to? Learners treat silence as neutral and it is not — a signatory who says nothing has signed the document's scope. Then move straight to the fifth question and insist on a day, because that is the step learners will leave as an intention. Ask them to name the day out loud. Nour's eleven days were not deliberation."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **A document the learner signed with a reservation they never wrote down, the day they would have had to make the call, and what they would have asked.** ⚠ **Almost everyone has such a document** — **and the useful discovery is that the reservation is still invisible and still unrecoverable.**'));
out.push(stage('4', 'Your turn'));
out.push(sample('Sample — two documents half agreed with', [
  '⚠ **1  What it is right about:** **the street submission, on consultation and on the arithmetic.** ⚠ **What it is silent about:** **the morning window.** ⚠ **Who pays if I refuse:** **the other nine signatories.** ⚠ **The call:** **the committee chairman, Thursday, asking whether the difference goes in his document or mine.**',
  '⚠ **2  What it is right about:** **the suppliers\' joint letter on payment terms, which is right about the sixty-day practice and about the retention.** ⚠ **What it is silent about:** ⚠ **early-settlement discounts, which three of us use and four of us hate** — **and the silence was not asked for by anybody, it is simply that nobody raised it.** ⚠ **Who pays if I refuse:** **nobody; the letter has six signatures and five is not materially weaker.** ⚠ **The call:** ⚠ **and this is the one I got wrong** — **I signed it in 2025 and said nothing, and when the terms were renegotiated in June nobody knew we had a view.**',
]));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The mediation, in full.** ⚠ **The resolution is three documents, and the thing that resolves it is a telephone call on the Tuesday rather than a filing on the Friday.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Nour**', '⚠ **a signatory who is silent is read as agreeing, and in a year she would have nothing to point at**', '⚠ **the comfort of being inside the word *united*, and the hope that somebody else would carry the fourth point** — **and she makes the call on the Tuesday rather than filing on the Friday**'],
  ['**Mr Tarabishi**', '⚠ **the association\'s only asset is that its agreements can be taken at face value, so the three points need four signatures and the difference must be visible**', '**the appearance of a trade that agrees with itself**'],
  ['**Hamdan**', '⚠ **a transition for unaccredited suppliers would disadvantage a firm that invested in accredited supply in 2023, and they are not obliged to argue for it**', '⚠ **the silence** — **the difference is now in the document instead of absent from it, and Annex C is theirs to write**'],
], [1.4, 4.1, 4.5]));
out.push(p('**Report (sample):**  _Everybody is right. Nour is right that a silent signatory is read as agreeing. Mr Tarabishi is right that the association\'s only asset is that its agreements are believed. Hamdan are right that they need not argue for a transition that would disadvantage them. So what gets filed is the joint submission with paragraph 2, Annex B and Annex C — and Nour gives up the word united while Hamdan give up the silence._'));
out.push(p('⚠ **And the sentence that cost the most, which is Nadia\'s:** *"A chairman surprised by his own member in front of the Directorate cannot do that job for anybody again."* ⚠ **Mark it as the point at which the unit stops being about one firm\'s 900,000** — **the eleven days were spent avoiding a four-minute call, and the cost of not making it would have fallen on the whole trade.**'));
out.push(note("Three things to get across in the mediation. First, that nobody in it is behaving badly, which is unique in the strand: Hamdan's position is honest and was paid for in 2023, and a class looking for a villain will misread the whole unit. Second, that the resolution Nour reaches is one she had already worked out, so the mediation is not about the decision at all — it is about the eleven days, and the useful question to the room is what each of them is currently not telephoning somebody about. Third, that the chairman takes the difference into the joint document, which the class should be told is the likeliest outcome and not a lucky one. A chairman offered the choice between marking a difference in his own document and discovering it in an annex will take the first almost every time, which means the call is cheap as well as necessary."));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)'));
out.push(table(['Gap', '1', '2', '3', '4', '5', 'Not needed'], [['Answer', 'D', 'C', 'E', 'B', 'A', 'F']], [1, 1, 1, 1, 1, 1, 1.6]));
out.push(p('**1 D** — **the paragraph opens with a question (*whether they may sign*) and D answers it: *they may, and the Association encourages it*.**  **2 C** — ***the second is an annex* in the next sentence requires a *first*, and C supplies it.**  **3 E** — ***the reason is not courtesy*, and E gives the reason, which the following sentence then illustrates with the official.**  **4 B** — **the paragraph tells members to resist an assumption, so the gap must STATE the assumption; *the proportion is nearer one point in four* then corrects it.**  **5 A** — ***what the Association can and cannot do*, and A is the *can*, with *it will not weigh* following as the *cannot*.**'));
out.push(p('⚠ **F is the distractor and it is built to be plausible by topic rather than by structure.** ⚠ **It concerns late filing, which belongs to the subject matter and to none of the five gaps** — **and a candidate placing it at gap 3, where *before filing* appears two lines above, has matched a word instead of a function.**'));
out.push(p('⚠ **The teachable method for Part 2 is to name what each gap is being ASKED.** ⚠ **Gaps 1, 2, 3 and 5 follow a question, a list opener, a withheld reason and a *can and cannot*, so each wants an answer.** ⚠ **Gap 4 follows an instruction and therefore wants the thing being resisted** — **and once the function is named, the distractor stops looking possible.**'));
out.push(p('⚠ **And teach the backwards connection as well as the forwards one, which is the standing Part 2 instruction in this course.** ⚠ **Gap 2\'s answer is identified entirely by the words *the second* in the NEXT sentence** — **nothing before the gap narrows it, and a candidate reading only forwards has no way to place it.**'));
out.push(stage('6', 'Write with help – Writing Part 1 sample'));
out.push(sample('Sample answer (47 words)', [
  '**To:** **N. Sayegh, B. Nassif**   **From:** **N. Mansour**   **Date:** **21 October**   **Subject:** **The joint submission**',
  '**We are signing paragraphs 1.1 to 1.3 of the joint submission. We are not signing a common position on a transition for unaccredited suppliers. Our own view goes in Annex B, filed in our name. I am ringing Mr Tarabishi on Tuesday, before we file, to ask whether he would rather mark the difference in his document or in ours.**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '⚠ **the paragraphs named by NUMBER** — **and no mark for *we broadly support it***'],
  ['**2**', '**the point not signed, stated once and specifically**'],
  ['**2**', '**the annex, in the firm\'s own name**'],
  ['**2**', '⚠ **the call, with a named person and a DAY, before filing**'],
  ['**1**', '⚠ **and the question put to the chairman**, **which is what makes the call a question rather than a notification**'],
  ['**1**', '40 to 50 words, with the count written at the end'],
], [1, 5]));
out.push(p('⚠ **The day is the mark that separates these papers, and weaker answers leave it out.** ⚠ *I will speak to the chairman first* **is an intention;** *I am ringing Mr Tarabishi on Tuesday, before we file* **is an arrangement** — **and the examination rewards the second for exactly the reason 23.4 does.**'));
out.push(p('⚠ **And warn candidates away from explaining the disagreement.** ⚠ *Our view on that point is at Annex B.* **The annex explains and the note routes** — **a note that argues the case runs to eighty words and loses marks for length that it did not gain for content, which is the commonest Part 1 failure at every level of this course.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Paragraphs described rather than numbered.** ⚠ **The unsigned point left vague.** ⚠ **No annex, or an annex not in the firm\'s own name.** ⚠ **A call with no day.** ⚠ **An argued case in place of a routing.** ⚠ **And a word count outside 40 to 50.**'));
out.push(stage('7', 'Write freely'));
out.push(p('⚠ **Mark the reservation and the missing call.** ⚠ **The commonest honest text is the second sample\'s second item: signed in silence, nobody knew there was a view, and the renegotiation came and went** — **and the learner can usually name the day on which a four-minute call would have fixed it, which is the sentence the cycle is for.**'));

out.push(pb());
out.push(stage('✓', 'Marking the unit check', 15));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'a', 'b', 'c', 'a', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each. ⚠ **Question 4 is the only one that tests the unit rather than a preposition:** ***unless*, because the sentence is a falsifying condition and *if* reverses it.**',
  '**B  Listening — 6 marks**, one each. ⚠ **he took it into the joint document, and paragraph 2 is his drafting and better than hers (1) · it answered 1.3 in nine days, that goods in transit on 1 January are outside the requirement, and said nothing about packaging being in the schedule in error (2) · 590,000, the cost of complying late, which is nearly two thirds of the whole programme (1) · that Dallal Freres had not applied for accreditation, which falsified the cheaper plan, and he reported on the day (1) · eleven consignments through the Beirut body (1) · she would have made the telephone call on the second day instead of the twelfth (1).**',
  '**C  Reading — 5 marks:** ⚠ **1.2 contains arithmetic, which the other two agreed points do not** — **eleven bodies, about 400 consignments last year, an estimated 2,900 added (2)** · **paragraph 3 explains the drafting, because it will look unusual against previous submissions that described the trade as united (2)** · ⚠ **paragraph 2 refuses to reconcile the disagreement, and refuses to ask the Directorate to weigh the members against each other (1).**',
  '**D  Writing — 6 marks:** **what the rule requires (1)** · **of whom, with *obliged* rather than *affected* (2)** · **from when, with the clock located (1)** · ⚠ **and the one thing it does not say, marked as absent (2).**',
  '**Total 25.** ⚠ **The profile to expect: A high except question 4, B split, C high on the first two parts, D split.** ⚠ **B loses the second gap, which is worth two marks and asks for what the Directorate did NOT answer** — **candidates give the goods-in-transit answer and stop, which is half the point of 23.2: the grantable question was answered in nine days and the policy question was not answered at all.** ⚠ **And D loses the last two marks in about half of papers**, **where the writer lists what the rule requires and omits the silence** — **the same omission as question 4 of the four, two cycles later and under examination conditions.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six faults to watch, and one warning about the unit as a whole. The warning first: nobody in Unit 23 is behaving badly. The Ministry drafted a schedule for the construction trade after a real failure, the competitor invested in accredited supply in 2023 and is protecting it, and the association chairman is trying to keep an instrument usable. A class that arrives looking for a villain will misread every cycle, so say this in the first five minutes. First fault: the rule described rather than read. Give the four questions as a procedure and run them on a learner's own rule before explaining them, and make the diagnostic practical — who is obliged, not who is affected. Expect the office version of any rule to be wrong in two directions at once, too generous about time and far too large about scope, and expect both errors to come from the same cause, which is that nobody read it. Insist on paragraph references, and teach the generalisable rule, which is that the date in bold is almost never the date that matters. Second: the ungrantable request. The research instruction is the content here, so make learners find out what the body they are writing to actually does before drafting a word. Then cost the grantable requests, because they look trivial and they are worth five of the seven weeks. Expect the dignity objection and name it rather than arguing with it; the answer is the two-document structure, and nothing is given up. And ask whether anybody in the room knows of a concession granted to somebody else in their trade, because about half will, and almost nobody has asked for it. Third: expensive without a figure. Four figures, and the third is the cycle. Insist on own time at a stated rate, because leaving it out brings a compliance cost in at two thirds of the real one. Insist that the late cost be itemised with a mechanism, and insist on the low-end rule, which is the most transferable sentence in the unit: if the low end carries the decision, the high end is not needed. Where a late cost cannot be bounded, saying so is the costing, and a writer who invents a mid-point to look rigorous has weakened their own paper. And keep relationships out of the total, because a total with a relationship in it is a total nobody believes. Fourth: the condition nobody is watching. This is the hardest idea in the unit because it is counter-intuitive, so elicit the natural objection — surely a condition is better than nothing — before answering it. The answer is ignorance plus confidence. A department is not a watcher, and the test is whether you could ask them on the second of the month whether they looked on the first. The reporting rule for no change is the part everybody drops and the only evidence the arrangement is alive. And add a watcher for silence to every page, because a plan waiting for a letter has no way of noticing that the letter has not come, which is the commonest way a monitored plan fails. Fifth: the argument that becomes the plan. The factual test must stay factual — how many times has this body amended a published requirement, and how long did it take — and learners must be allowed to reach the answer argue, because sometimes they will and the test is not a device for producing compliance. Teach both failures. The first is loud and everybody recognises it; the second is competence closing a question, and it is a slower loss and a larger one, and nobody brings it to a class voluntarily. Enforce the separation by name and date, and make the class notice who in their own firm has volunteered to write the thing that would change a requirement and also carries the work of complying with it. It is usually the same person, and the submission is what gets dropped. Sixth: the claim of unanimity. Lead with the commercial argument rather than the honest one, because it is stronger: a claim of unanimity you do not have devalues the checkable arithmetic three paragraphs below it. Draft the agreed paragraphs first, with reasons, and expect learners to be surprised by how many there are — the proportion is nearer one point in four than they predict. Then the annex, named, with the opposing annex named too, and the refusal to reconcile, which is what makes the document neutral and protects the association from being asked to choose between the firms that fund it. And finally 23.7, where the only thing worth teaching is that the annex is the easy half. Nour had decided the substance before the mediation began; what she had been avoiding for eleven days was a four-minute telephone call, and the cost of not making it would have fallen on the whole trade rather than on her firm. Put the question to the room directly: what are you currently not telephoning somebody about, and what day will you do it?"));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 23 · Answer Key');
module.exports = out;
