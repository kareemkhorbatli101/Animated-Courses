// English for the Workplace · Syria — PROGRAMME OVERVIEW for the head of centre
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'English for the Workplace · Syria';

out.push(h1('English for the Workplace · Syria'));
out.push(p('**A 72-hour programme in three courses · Pre-Intermediate, Intermediate, Upper-Intermediate**', { color: C.teal }));
out.push(p('_Programme overview for the head of centre_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('The proposal in one paragraph', [
  'Three courses of **12 two-hour sessions** take a young adult from a first day at work to supervising other people. Each session teaches **one job-shaped skill** through **three short cycles** — a reading, a conversation and a piece of writing — and closes with a **case study** set in a named sector. Every cycle is paired practice followed by a report to the class, so the learners talk for most of the two hours. Each session ends with something written that a learner could use at work the next morning.',
  '**Total: 72 teaching hours · 36 sessions · 144 teaching blocks · 36 case studies across 12 sectors.**',
], C.lblue, C.navy));

// ---------- 1 ----------
out.push(h2('1 · The programme at a glance'));
out.push(table(['Course', 'Level', 'Sessions', 'Hours', 'The learner goes from … to …'], [
  ['**Course 1**', 'Pre-Intermediate\n(CEFR A2)', '12', '24', 'new joiner on day one → **a colleague others depend on**'],
  ['**Course 2**', 'Intermediate\n(CEFR B1)', '12', '24', 'dependable pair of hands → **someone who owns a task, a file or a client**'],
  ['**Course 3**', 'Upper-Intermediate\n(CEFR B2)', '12', '24', 'trusted owner → **a supervisor, and a manager of a small team**'],
  ['**Series**', 'A2 → B2', '**36**', '**72**', 'first day at work → **running people and speaking for the organization**'],
], [1, 1.5, 0.8, 0.7, 4.5]));
out.push(p('**Class size 10**, which gives **five pairs** — the unit the whole design rests on. Live, in person.'));

// ---------- 2 ----------
out.push(h2('2 · Who it benefits, and how'));
out.push(h3('The learners'));
[
 'They are about to join, or have just joined, organizations where English is the language of the paper trail — reports, forms, suppliers, funders, head offices, regulators.',
 'Each course answers a different problem. **Course 1:** *I can speak some English but I freeze at work.* **Course 2:** *I can cope, but I cannot explain, report or advise.* **Course 3:** *I am being given people and decisions, and my English is now the limit.*',
 'Nothing is taught in the abstract: every cycle elicits the learner\'s own job, study or intended job, and the pair practice runs on that.',
].forEach(t => out.push(bullet(t)));
out.push(h3('The employers who take them'));
[
 'The programme produces written evidence, not just fluency. A graduate arrives able to write a handover, an incident report, a recommendation or an appraisal in a form a manager can act on.',
 'It is **sector-neutral by design**. One cohort can contain a clinic administrator, a logistics clerk and an NGO field assistant, and all three practise the same skill in their own setting.',
].forEach(t => out.push(bullet(t)));
out.push(h3('The centre'));
[
 'Three sellable courses that stack, so a cohort has a reason to return twice.',
 'A fixed, repeatable session shape, which makes the programme teachable by any competent teacher rather than only by its author.',
 'Every session produces a collectable artefact, which gives the centre something concrete to show learners, employers and sponsors.',
].forEach(t => out.push(bullet(t)));

out.push(pb());
// ---------- 3 ----------
out.push(h2('3 · The business environment the learners enter'));
out.push(p('The programme assumes graduates disperse into many kinds of organization, not one. Twelve sector types carry the case studies:'));
out.push(table(['', '', ''], [
  ['Humanitarian / INGO field office', 'Health — clinic or hospital', 'Education and training'],
  ['Construction and engineering', 'Logistics and transport', 'Banking and microfinance'],
  ['Municipal and public administration', 'Telecoms and IT', 'Media and communications'],
  ['Hospitality and tourism', 'Manufacturing and food production', 'Agriculture and water'],
], [1, 1, 1], { headFill: C.teal }));
out.push(sp());
out.push(box('What English is actually used FOR in these organizations', [
  '**Upward and outward paper:** reports to a head office, a funder, a ministry or a regulator — usually written, usually read by someone who was not there.',
  '**Commercial contact:** suppliers, contractors, clients and partners, often where neither side is a native speaker.',
  '**The record:** forms, files, logs, minutes, specifications and handovers, which outlive the person who wrote them.',
  '**People:** inducting, instructing, correcting and appraising colleagues — the part that arrives with promotion and that most courses never teach.',
  '⚠ **This is why the programme is weighted towards writing that someone acts on**, rather than towards conversational fluency alone.',
], C.lorange, C.orange));

// ---------- 4 ----------
out.push(h2('4 · How a session runs — the teaching style'));
out.push(p('**Every one of the 36 sessions has the same four blocks.** The shape never changes, so learners stop needing instructions after week two and the time goes into the language instead.'));
out.push(table(['Block', 'Minutes', 'What happens'], [
  ['**Cycle 1**', '26', 'One job-shaped sub-skill, through a reading, a conversation and a short piece of writing'],
  ['**Cycle 2**', '26', 'The same skill, a second angle and a different sector'],
  ['**Cycle 3**', '26', 'The same skill, a third angle; this cycle\'s writing is the session\'s portfolio piece'],
  ['**Case study**', '35', 'One scenario in a named sector, worked in fours, ending in a decision and a document'],
  ['Transitions', '7', 'Settling, regrouping into fours, collecting written work'],
  ['**Total**', '**120**', ''],
], [1.2, 0.8, 5]));
out.push(sp());
out.push(p('**Each cycle runs the same five phases:**'));
out.push(table(['', 'Phase', 'Who talks', 'Minutes'], [
  ['1', '**Preview** — the teacher sets the situation and the question', 'teacher', '4'],
  ['2', '**Read or listen, then discuss** — the text is short and open to argument', 'whole class', '7'],
  ['3', '**Elicit** — learners bring the same thing from their own work or future work', 'learners', '5'],
  ['4', '**Pair role-play or discussion** — five pairs, simultaneously', 'all learners at once', '6'],
  ['5', '**Report to class** — each pair reports; roughly 90 seconds each', 'learners', '4'],
], [0.4, 4, 1.4, 0.8]));
out.push(sp());
out.push(box('What the teacher does and does not do', [
  '**Does:** set the situation · hold the clock · elicit from learners\' own contexts · listen in on pairs and note two errors to feed back · time the reports · collect the written work.',
  '**Does not:** lecture · teach grammar before the function that needs it · let one pair\'s report run long · leave a session without something written.',
  '⚠ **The design intent is that learners are speaking for the majority of the two hours.** Phases 3 to 5 are learner-talk by construction, and in phase 4 all ten speak at once.',
  '**Pairs, not threes.** Ten learners give five pairs. A group of three always has a silent member. The case study is the one block that uses fours, because its scenarios hold more than two positions.',
], C.lteal, C.teal));

out.push(pb());
// ---------- 5 ----------
out.push(h2('5 · The same session from the learner\'s side'));
out.push(table(['What a learner experiences', 'Why it is built that way'], [
  ['"I am never silent for more than a few minutes."', 'Three of the five phases are learner-talk, and in pair work all ten speak simultaneously.'],
  ['"Every example is about my own work, or the work I want."', 'Phase 3 elicits from the learner before any practice begins, so the pair task runs on their material and not the book\'s.'],
  ['"I practise with one person before I speak in front of eleven."', 'Pair work always precedes the report. Nobody is exposed cold.'],
  ['"I leave with something I could actually send tomorrow."', 'Every cycle ends in writing; one piece per session goes into the portfolio.'],
  ['"My own industry keeps coming up."', 'Twelve sectors, each appearing once per course — so a learner meets their own field three times across the series, harder each time.'],
  ['"I can see what I could not do last month."', 'Session headings are written as capabilities, not topics. The learner reads the course outline as a list of things they will be able to do.'],
], [2.6, 3.4]));

// ---------- 6 ----------
out.push(h2('6 · How the skills build across the three courses'));
out.push(table(['', 'Course 1 · A2', 'Course 2 · B1', 'Course 3 · B2'], [
  ['**Reading**', 'Forms, notices, rotas, short profiles — 120–180 words', 'Reports, procedures, minutes, quotations — 200–280 words', 'Policies, clauses, submissions, appraisals — 280–350 words'],
  ['**Speaking**', 'Transactions and short exchanges; asking for repetition', 'Explaining, advising, pressing a case, reporting what others said', 'Chairing, delegating, giving feedback, negotiating, disagreeing upward'],
  ['**Writing**', 'Notes, slips, forms, a four-line handover — 30–60 words', 'Reports, explanations, recommendations — 80–150 words', 'Decision notes, policies, appraisals, submissions — 150–250 words'],
  ['**The move it teaches**', 'Be understood, and be reliable', 'Explain, report and advise — own something', 'Decide, supervise, and speak for the organization'],
  ['**Responsibility**', 'Answerable for your own tasks', 'Answerable for a task, file or client', 'Answerable for other people\'s work'],
], [1.3, 2.1, 2.1, 2.1]));
out.push(p('⚠ **The build-up is deliberate and cumulative.** Three threads run the whole 72 hours and are revisited at rising difficulty: **being honest about what you did not do and cannot evidence** (Course 1 S9 → Course 2 S16 → Course 3 S28); **giving a number its unit, basis and source** (C1 S4 → C2 S20 → C3 S27); and **writing so that the reader can act** (C1 S12 → C2 S19 → C3 S25).'));

out.push(pb());
// ---------- 7 ----------
out.push(h2('7 · The 36 session headings'));
out.push(h3('Course 1 · Pre-Intermediate — from new joiner to a colleague others depend on'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'], [
  ['1', '**Your First Day: Saying Who You Are**', 'Introduce themselves, their role and their ambition without rehearsing'],
  ['2', '**Your First Week: Learning the Place and the People**', 'Find who handles what, direct a visitor, redirect what is not theirs'],
  ['3', '**Fitting Into the Week: Hours, Shifts and Cover**', 'State their hours, compare routines, arrange cover in writing'],
  ['4', '**Being Trusted With Information**', 'Complete a form, read figures back, report a gap in a file'],
  ['5', '**Being Trusted With Money and Resources**', 'Give a cost, compare two offers, justify an expense'],
  ['6', '**Answering for the Organization: Calls and Messages**', 'Answer a call, choose the right channel, hold a short video call'],
  ['7', '**Managing Your Own Time and Diary**', 'Fix, move and confirm appointments; decline without closing the door'],
  ['8', '**Asking, Offering and Saying No Without Damage**', 'Make a request with a reason; refuse and name who can agree'],
  ['9', '**Accounting for Your Own Day**', 'Narrate yesterday, and say what they did not do and why'],
  ['10', '**Being Trusted With Rules, Safety and Confidences**', 'State a rule, ask permission, refuse to disclose what is confidential'],
  ['11', '**Facing the Public With Confidence**', 'Welcome, diagnose a need, and refuse while offering an alternative'],
  ['12', '**Leaving Work Someone Else Can Pick Up**', 'Write a four-line handover; write one message for two readers'],
], [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 2 · Intermediate — from dependable pair of hands to owning something'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'], [
  ['13', '**Being Given Something That Is Yours**', 'Separate what they do from what they answer for'],
  ['14', '**Explaining What Happened When You Were There**', 'Write an incident report with a defensible chronology'],
  ['15', '**Showing Someone Else How It Is Done**', 'Write a procedure and mark the step that cannot move'],
  ['16', '**Explaining Why It Happened, With Evidence**', 'Distinguish what they saw, were told, and infer'],
  ['17', '**Speaking in Meetings and Being on the Record**', 'Report speech accurately; write minutes in a house format'],
  ['18', '**Working With People You Never See**', 'Work across time zones, write plainly, use a shared document'],
  ['19', '**Bringing Options, Not Just Problems**', 'Present three options with consequences and advise upward'],
  ['20', '**Giving Figures People Will Rely On**', 'Grade certainty and print the assumptions under an estimate'],
  ['21', '**Pressing a Case: Requests, Complaints and Claims**', 'Make one request by one date; concede and limit in one letter'],
  ['22', '**Recommending, and Being Answerable for the Choice**', 'Name the criteria, recommend, and mark what is a guess'],
  ['23', '**Reporting Upward: Progress, Deadlines and Funders**', 'Report a missed target honestly and survive the question'],
  ['24', '**Making the Case for Yourself**', 'Write an application, answer the hard question, interview back'],
], [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 3 · Upper-Intermediate — from owning a task to supervising people'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'], [
  ['25', '**Writing So a Busy Decision-Maker Can Act**', 'Put the ask in four lines; separate what is decided from what is open'],
  ['26', '**Briefing Different Readers Without Contradicting Yourself**', 'Write one fact for three audiences, with one sentence identical'],
  ['27', '**Owning the Numbers Others Rely On**', 'Qualify every figure; tell a trend from a blip'],
  ['28', '**Naming Risk Before It Lands**', 'State likelihood with conditions; refuse a number they cannot support'],
  ['29', '**Setting the Standard and the Rule Others Follow**', 'Write a rule with scope and exceptions, and a testable standard'],
  ['30', '**Taking Charge of Other People\'s Work**', 'Delegate with outcome and limit; induct a new colleague; edit a draft'],
  ['31', '**Telling People How They Are Doing**', 'Give evidenced praise and one actionable criticism; appraise fairly'],
  ['32', '**Running the Meeting and Owning the Record**', 'Chair, bring in the quiet person, close an item, own the minute'],
  ['33', '**Disagreeing With the Decision Above You**', 'Argue upward, concede what is right, state the limits of the ask'],
  ['34', '**Negotiating and Agreeing Terms**', 'Trade conditions, hold a red line, read a clause for what it obliges'],
  ['35', '**Speaking for the Organization Outside It**', 'Write to a regulator, funder or partner that can decide'],
  ['36', '**Handing On, and Your Own Next Post**', 'Hand over judgements; argue for their own promotion'],
], [0.4, 3.1, 3.5]));

out.push(pb());
// ---------- 8 ----------
out.push(h2('8 · The sector map — every learner meets their own field three times'));
out.push(p('Each case study is set in one of the twelve sectors, and **each sector appears exactly once per course**. A learner in construction meets their own field in sessions 4, 14 and 35, each time at a higher level of responsibility.'));
out.push(table(['Sector', 'Course 1', 'Course 2', 'Course 3'], [
  ['Humanitarian / INGO', 'S1', 'S23', 'S33'],
  ['Health — clinic or hospital', 'S2', 'S15', 'S29'],
  ['Municipal and public administration', 'S3', 'S17', 'S25'],
  ['Construction and engineering', 'S4', 'S14', 'S35'],
  ['Logistics and transport', 'S5', 'S16', 'S34'],
  ['Telecoms and IT', 'S6', 'S18', 'S32'],
  ['Education and training', 'S7', 'S20', 'S30'],
  ['Manufacturing and food production', 'S8', 'S22', 'S36'],
  ['Agriculture and water', 'S9', 'S19', 'S28'],
  ['Banking and microfinance', 'S10', 'S13', 'S27'],
  ['Hospitality and tourism', 'S11', 'S21', 'S31'],
  ['Media and communications', 'S12', 'S24', 'S26'],
], [3.2, 1, 1, 1]));

// ---------- 9 ----------
out.push(h2('9 · The roles each course supports'));
out.push(p('These are the **kinds of post the language level supports** — the English a learner needs in order to function in them. They are a statement about the course, not a prediction about any individual\'s employment.'));
out.push(table(['After', 'Typical posts the level supports', 'What the learner can now be relied on for'], [
  ['**Course 1**\nA2', 'Receptionist · data-entry or records clerk · ward or office clerk · store assistant · field assistant · counter and customer-facing staff · call-handling · administrative assistant', 'Being understood, keeping an accurate record, answering for the organization on the telephone, handing work over'],
  ['**Course 2**\nB1', 'Project assistant rising to officer · logistics or procurement officer · loan officer · monitoring assistant · HR assistant · account handler · case or client officer · team administrator', 'Owning a task, file or client; explaining what happened and why; recommending with reasons; reporting upward and to funders'],
  ['**Course 3**\nB2', 'Team leader · shift or site supervisor · branch supervisor · project coordinator and junior project manager · office manager · unit or department head in a small organization', 'Other people\'s work: delegating, inducting, appraising, chairing, holding a standard, negotiating, and representing the organization outside it'],
], [0.9, 3.3, 3]));
out.push(sp());
out.push(box('The series as a whole', [
  'A learner who completes all three courses has moved **from being managed to managing** — and has done it in English, which is the constraint that usually stops a capable young employee at the officer grade.',
  '⚠ **The distinctive claim is the last course.** It does not stop at writing *for* managers; it teaches the language of *being* one: delegating so work comes back right, inducting a newcomer, giving a criticism someone can act on, chairing an item to a close, and arguing against a decision already taken above them.',
  '**Evidence of it:** 36 portfolio pieces, one per session, which together form a written record an employer can read.',
], C.lblue, C.navy));

out.push(pb());
// ---------- 10 ----------
out.push(h2('10 · What is delivered, and what the centre provides'));
out.push(table(['Delivered with the programme', 'Provided by the centre'], [
  ['The scheme of work: 36 sessions, 144 teaching blocks, each with its reading, conversation, writing model and pair task', 'A room that allows five pairs to talk at once without disturbing each other'],
  ['36 case studies with their document packs, one per session', 'Printing: each learner needs the session\'s texts on paper'],
  ['Writing models and sample answers for every written task', 'An audio source for the listening option, or a teacher willing to read the dialogues aloud'],
  ['Report prompts and timings for every cycle', 'A folder per learner for the portfolio'],
  ['The portfolio scheme: one collected piece per session', 'A teacher briefed on the five-phase cycle — about two hours of induction'],
], [3.5, 3]));
out.push(sp());
out.push(h3('How progress is evidenced'));
[
 '**One portfolio piece per session**, taken from the third cycle: 12 per course, **36 across the series**.',
 '**A case-study document per session**, produced in fours: a further 12 per course.',
 '**A first-session and last-session letter in each course** — the learner writes to their future self and opens it at the end, which gives a before-and-after in the learner\'s own words.',
 'No external examination is included. If the centre wants a certificate with external currency, the levels are pitched so that a learner finishing Course 1, 2 or 3 is working at the ground covered by A2, B1 and B2 respectively, and could be entered for a corresponding public examination separately.',
].forEach(t => out.push(bullet(t)));

// ---------- 11 ----------
out.push(h2('11 · Scope and accuracy notes'));
out.push(box('Please read these before quoting any figure in this document', [
  '**The numbers here describe the course, and are exact:** 3 courses · 36 sessions · 72 teaching hours · 144 teaching blocks · 36 case studies · 12 sector types, each appearing once per course · 10 learners, 5 pairs.',
  '**Levels are a design statement.** The three courses are written to the ground covered by CEFR A2, B1 and B2. **No external certification, accreditation or examination is part of this programme.**',
  '**The role lists in section 9 describe the posts the language level supports.** They are not employment outcomes and should not be presented to learners as such.',
  '**The timings in section 4 are the design model.** A teacher may move minutes between blocks; the programme assumes the four blocks are all present.',
  '**The programme name on this document is a placeholder** and can be changed.',
  '⚠ **This document contains no market, employment or demographic statistics**, because none have been verified for this purpose. Any such figures should be added by the centre from its own sources.',
], C.grey, C.navy));
out.push(sp());
out.push(p('_Prepared by Mo (Mohamad Khorbatli)._', { color: '7F7F7F' }));

L.build(out, process.argv[2], TITLE, 'English for the Workplace · Syria').then(() => {});
