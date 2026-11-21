// English for Software Engineers · Syria — PROGRAMME OVERVIEW for the head of centre
const L = require('./lib');
const S = require('./scheme-data');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'English for Software Engineers · Syria';

out.push(h1('English for Software Engineers · Syria'));
out.push(p('**A 72-hour programme in three courses · Pre-Intermediate, Intermediate, Upper-Intermediate**', { color: C.teal }));
out.push(p('_Programme overview for the head of centre_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('The proposal in one paragraph', [
  'Three courses of **12 two-hour sessions** take a young adult from a first weeks as a junior developer to running an engineering team and speaking for the firm to clients, vendors and review boards. Each session teaches **one job-shaped skill** through **three short cycles** — a reading, a conversation and a piece of writing — and closes with a **case study** set in a named part of a software house. Every cycle is paired practice followed by a report to the class, so the learners talk for most of the two hours. Each session ends with something written that a learner could use at work the next morning.',
  '**Total: 72 teaching hours · 36 sessions · 144 teaching blocks · 36 case studies across 12 areas of software engineering.**',
], C.lblue, C.navy));

// ---------- 1 ----------
out.push(h2('1 · The programme at a glance'));
out.push(table(['Course', 'Level', 'Sessions', 'Hours', 'The learner goes from … to …'], [
  ['**Course 1**', 'Pre-Intermediate\n(CEFR A2)', '12', '24', 'new joiner on day one → **a colleague others depend on**'],
  ['**Course 2**', 'Intermediate\n(CEFR B1)', '12', '24', 'dependable pair of hands → **someone who owns a module, a release and a deadline**'],
  ['**Course 3**', 'Upper-Intermediate\n(CEFR B2)', '12', '24', 'trusted owner → **a supervisor, and a manager of a small team**'],
  ['**Series**', 'A2 → B2', '**36**', '**72**', 'first weeks as a junior developer → **running a team and speaking for the firm outside it**'],
], [1, 1.5, 0.8, 0.7, 4.5]));
out.push(p('**Class size 10**, which gives **five pairs** — the unit the whole design rests on. Live, in person.'));

// ---------- 2 ----------
out.push(h2('2 · Who it benefits, and how'));
out.push(h3('The learners'));
[
 'They work, or are about to work, in a Syrian software house, a product team, an IT department or a development shop taking work from abroad — where English is the language of the ticket, the pull request, the incident post-mortem, the service schedule and the messages that arrive from a client in Rotterdam, a vendor in Dublin or a security assessor in Zurich.',
 'Each course answers a different problem. **Course 1:** *I can speak some English but I freeze at work.* **Course 2:** *I can cope, but I cannot explain, report or advise.* **Course 3:** *I am being given people and decisions, and my English is now the limit.*',
 'Nothing is taught in the abstract: every cycle elicits the learner\'s own job, study or intended job, and the pair practice runs on that.',
].forEach(t => out.push(bullet(t)));
out.push(h3('The employers who take them'));
[
 'The programme produces written evidence, not just fluency. A graduate arrives able to write a handover, an incident report, a recommendation or an appraisal in a form a manager can act on.',
 'It is **role-neutral within the trade**. One cohort can contain a back-end developer, a tester and a support engineer, and all three practise the same skill on their own tickets and releases.',
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
out.push(p('The programme assumes learners work on different parts of a system, not one. Twelve software contexts carry the case studies:'));
out.push(table(['', '', ''], [
  ['Requirements and what the client actually asked for', 'Estimates, scope and dates', 'Code review and pull requests'],
  ['Testing, QA and the bug that got through', 'Releases, deployment and rollback', 'Incidents, outages and the post-mortem'],
  ['Support tickets and the user who is stuck', 'Databases, migrations and data loss', 'Security, secrets and access'],
  ['Third-party APIs, libraries and vendors', 'Performance, capacity and cost', 'Handover, documentation and the leaver'],
], [1, 1, 1], { headFill: C.teal }));
out.push(sp());
out.push(box('What English is actually used FOR in these organizations', [
  '**Upward and outward paper:** tickets and pull request descriptions, incident minutes and post-mortems, estimate papers and change requests, decision papers for a director, standards a team follows, submissions to a client\'s review board, terms notes after a vendor negotiation and briefings written for three readers at once — usually written, usually read by somebody who was not there.',
  '**Client, vendor and assessor contact:** foreign clients and their product managers, cloud and API vendors, security assessors and auditors, contractors abroad, service review boards and customer councils, often where neither side is a native speaker.',
  '**The record:** forms, files, logs, minutes, specifications and handovers, which outlive the person who wrote them.',
  '**People:** inducting, instructing, correcting and appraising colleagues — the part that arrives with promotion and that most courses never teach.',
  '⚠ **This is why the programme is weighted towards writing that someone acts on**, rather than towards conversational fluency alone.',
], C.lorange, C.orange));

// ---------- 4 ----------
out.push(h2('4 · How a session runs — the teaching style'));
out.push(p('**Every one of the 36 sessions has the same four blocks.** The shape never changes, so learners stop needing instructions after week two and the time goes into the language instead.'));
out.push(table(['Block', 'Minutes', 'What happens'], [
  ['**Cycle 1**', '26', 'One job-shaped sub-skill, through a reading, a conversation and a short piece of writing'],
  ['**Cycle 2**', '26', 'The same skill, a second angle and a different part of the engineering team'],
  ['**Cycle 3**', '26', 'The same skill, a third angle; this cycle\'s writing is the session\'s portfolio piece'],
  ['**Case study**', '35', 'One scenario in a named part of a software house, worked in fours, ending in a decision and a document'],
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
  ['"My own part of the engineering team keeps coming up."', 'Twelve software contexts, each appearing once per course — so a learner meets their own work three times across the series, harder each time.'],
  ['"I can see what I could not do last month."', 'Session headings are written as capabilities, not topics. The learner reads the course outline as a list of things they will be able to do.'],
], [2.6, 3.4]));

// ---------- 6 ----------
out.push(h2('6 · How the skills build across the three courses'));
out.push(table(['', 'Course 1 · A2', 'Course 2 · B1', 'Course 3 · B2'], [
  ['**Reading**', 'Tickets, instructions, logs, messages, runbook pages — 133–184 words', 'Explanations, post-mortems, options notes, reports — 190–236 words', 'Decision papers, standards, submissions, hearings — 283–360 words'],
  ['**Speaking**', 'Transactions and short exchanges; asking for repetition', 'Explaining, advising, pressing a case, reporting what others said', 'Chairing, delegating, giving feedback, negotiating, disagreeing upward'],
  ['**Writing**', 'Tickets, notes, logs, a three-line handover — 48–74 words', 'Explanations, post-mortems, recommendations, monthly packs — 80–116 words', 'Decision papers, standards, appraisals, submissions — 145–184 words'],
  ['**The move it teaches**', 'Be understood, and be reliable', 'Explain, report and advise — own a module, a release and a deadline', 'Decide, supervise, and speak for the firm'],
  ['**Responsibility**', 'Answerable for your own tasks', 'Answerable for a module, a release and a deadline', 'Answerable for other people\'s work'],
], [1.3, 2.1, 2.1, 2.1]));
out.push(p('⚠ **The build-up is deliberate and cumulative.** Three threads run the whole 72 hours and are revisited at rising difficulty: **being honest about what you did not do and cannot evidence** (Course 1 S9 → Course 2 S14 → Course 3 S28); **giving a figure its definition, basis and weakness** (C1 S4 → C2 S16 and S20 → C3 S27); and **writing so that the reader can act** (C1 S12 → C2 S19 → C3 S25).'));

out.push(pb());
// ---------- 7 ----------
out.push(h2('7 · The 36 session headings'));
out.push(h3('Course 1 · Pre-Intermediate — from your first weeks on the team to a developer the team can rely on'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 0 && x.n <= 12).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 2 · Intermediate — from dependable pair of hands to owning a module, a release and a deadline'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 12 && x.n <= 24).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 3 · Upper-Intermediate — from owning a module to running a team and speaking for the firm to clients, vendors and boards'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 24 && x.n <= 36).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(pb());
// ---------- 8 ----------
out.push(h2('8 · The context map — every learner meets their own part of the engineering team three times'));
out.push(p('Each case study is set in one of the twelve software contexts, and **each context appears exactly once per course**. A learner on the support desk meets their own work in sessions 7, 19 and 35, each time at a higher level of responsibility.'));
// built from scheme-data so the map cannot drift from the books
const CTX = []; const seen = {};
S.forEach(x => { if (!(x.cs.sec in seen)) { seen[x.cs.sec] = [x.cs.sec]; CTX.push(seen[x.cs.sec]); } seen[x.cs.sec].push('S' + x.n); });
out.push(table(['Software Engineers context', 'Course 1', 'Course 2', 'Course 3'], CTX, [3.2, 1, 1, 1]));

// ---------- 9 ----------
out.push(h2('9 · The software posts each course supports'));
out.push(p('These are the **kinds of post the language level supports** — the English a learner needs in order to function in them. They are a statement about the course, not a prediction about any individual\'s employment.'));
out.push(table(['After', 'Typical posts the level supports', 'What the learner can now be relied on for'], [
  ['**Course 1**\nA2', 'Junior developer · trainee tester · support desk engineer · intern on a product team · junior front-end developer · build and release assistant · technical support agent taking tickets', 'Being understood on a stand-up and in a ticket, taking a requirement accurately, keeping a ticket and a log a second person can trust, answering for the team to a user, holding a rule under pressure, accounting for a piece of work and handing it on'],
  ['**Course 2**\nB1', 'Developer · senior tester · support lead · release coordinator · database developer · integration developer · client-facing engineer', 'Owning a module and a release: explaining a defect so a reader who was not there can follow it, training somebody on live code, explaining why an estimate moved, pressing a vendor, recommending with a reservation, and reporting upward including what did not happen'],
  ['**Course 3**\nB2', 'Engineering manager · technical lead · QA manager · head of support · platform or infrastructure manager · delivery manager · deputy to a technical director', 'Other people\'s work and the firm\'s word: delegating, appraising, chairing the engineering review, writing the standard a team follows, naming risk before it lands, negotiating with vendors and clients, disagreeing upward, and answering a client\'s review board'],
], [0.9, 3.3, 3]));
out.push(sp());
out.push(box('The series as a whole', [
  'A learner who completes all three courses has moved **from being managed to managing** — and has done it in English, which is the constraint that usually stops a capable young engineer at the developer\'s grade.',
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
  '**The numbers here describe the course, and are exact:** 3 courses · 36 sessions · 72 teaching hours · 144 teaching blocks · 36 case studies · 12 software contexts, each appearing once per course · 10 learners, 5 pairs · 432 distinct vocabulary items, none repeated.',
  '**Levels are a design statement.** The three courses are written to the ground covered by CEFR A2, B1 and B2. **No external certification, accreditation or examination is part of this programme.**',
  '**The role lists in section 9 describe the posts the language level supports.** They are not employment outcomes and should not be presented to learners as such.',
  '**The timings in section 4 are the design model.** A teacher may move minutes between blocks; the programme assumes the four blocks are all present.',
  '**The programme name on this document is a placeholder** and can be changed.',
  '⚠ **This document contains no market, employment or demographic statistics**, because none have been verified for this purpose. Any such figures should be added by the centre from its own sources.',
], C.grey, C.navy));
out.push(sp());
out.push(p('_Prepared by Mo (Mohamad Khorbatli)._', { color: '7F7F7F' }));

L.build(out, process.argv[2], TITLE, 'English for Software Engineers · Syria').then(() => {});
