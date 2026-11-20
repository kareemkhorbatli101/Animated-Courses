// English for Foreign Ministry Staff · Syria — PROGRAMME OVERVIEW for the head of centre
const L = require('./lib');
const S = require('./scheme-data');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'English for Foreign Ministry Staff · Syria';

out.push(h1('English for Foreign Ministry Staff · Syria'));
out.push(p('**A 72-hour programme in three courses · Pre-Intermediate, Intermediate, Upper-Intermediate**', { color: C.teal }));
out.push(p('_Programme overview for the head of centre_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('The proposal in one paragraph', [
  'Three courses of **12 two-hour sessions** take a young adult from a first day at the ministry to running a desk, instructing a mission and writing for a minister. Each session teaches **one job-shaped skill** through **three short cycles** — a reading, a conversation and a piece of writing — and closes with a **case study** set in a named part of a ministry or a mission. Every cycle is paired practice followed by a report to the class, so the learners talk for most of the two hours. Each session ends with something written that a learner could use at work the next morning.',
  '**Total: 72 teaching hours · 36 sessions · 144 teaching blocks · 36 case studies across 12 areas of diplomatic and consular work.**',
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
 'They are about to join, or have just joined, a foreign ministry — where English is the language of the paper trail: notes verbales, cables, read-outs, submissions, treaty text, instructions to posts and the record of what was said.',
 'Each course answers a different problem. **Course 1:** *I can speak some English but I freeze at work.* **Course 2:** *I can cope, but I cannot explain, report or advise.* **Course 3:** *I am being given people and decisions, and my English is now the limit.*',
 'Nothing is taught in the abstract: every cycle elicits the learner\'s own job, study or intended job, and the pair practice runs on that.',
].forEach(t => out.push(bullet(t)));
out.push(h3('The employers who take them'));
[
 'The programme produces written evidence, not just fluency. A graduate arrives able to write a handover, an incident report, a recommendation or an appraisal in a form a manager can act on.',
 'It is **function-neutral within the ministry**. One cohort can contain a consular window officer, a protocol clerk and a treaties desk assistant, and all three practise the same skill in their own part of the service.',
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
out.push(p('The programme assumes learners work in different parts of the ministry and its missions, not one. Twelve contexts carry the case studies:'));
out.push(table(['', '', ''], [
  ['Consular section — citizen services', 'Mission administration and the bag', 'Crisis management and the duty desk'],
  ['Visas and entry', 'Treaties and legal affairs', 'Press and public diplomacy'],
  ['Protocol and ceremonial', 'Cultural relations and scholarships', 'Economic and commercial diplomacy'],
  ['Multilateral / UN and international organisations', 'Humanitarian and reconstruction coordination', 'Bilateral political'],
], [1, 1, 1], { headFill: C.teal }));
out.push(sp());
out.push(box('What English is actually used FOR in these organizations', [
  '**Upward and outward paper:** submissions, read-outs, cables, instructions to posts, notes verbales and section returns — usually written, usually read by somebody who was not in the room.',
  '**Contact with counterparts:** other foreign ministries, missions, host authorities, international organisations and journalists, often where neither side is a native speaker.',
  '**The record:** forms, files, logs, minutes, specifications and handovers, which outlive the person who wrote them.',
  '**People:** instructing a mission, inducting a successor, correcting and appraising colleagues, chairing a meeting — the part that arrives with promotion and that most courses never teach.',
  '⚠ **This is why the programme is weighted towards writing that someone acts on**, rather than towards conversational fluency alone.',
], C.lorange, C.orange));

// ---------- 4 ----------
out.push(h2('4 · How a session runs — the teaching style'));
out.push(p('**Every one of the 36 sessions has the same four blocks.** The shape never changes, so learners stop needing instructions after week two and the time goes into the language instead.'));
out.push(table(['Block', 'Minutes', 'What happens'], [
  ['**Cycle 1**', '26', 'One job-shaped sub-skill, through a reading, a conversation and a short piece of writing'],
  ['**Cycle 2**', '26', 'The same skill, a second angle and a different diplomatic context'],
  ['**Cycle 3**', '26', 'The same skill, a third angle; this cycle\'s writing is the session\'s portfolio piece'],
  ['**Case study**', '35', 'One scenario in a named part of a ministry or a mission, worked in fours, ending in a decision and a document'],
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
  ['"My own part of the ministry keeps coming up."', 'Twelve contexts, each appearing once per course — so a learner meets their own work three times across the series, harder each time.'],
  ['"I can see what I could not do last month."', 'Session headings are written as capabilities, not topics. The learner reads the course outline as a list of things they will be able to do.'],
], [2.6, 3.4]));

// ---------- 6 ----------
out.push(h2('6 · How the skills build across the three courses'));
out.push(table(['', 'Course 1 · A2', 'Course 2 · B1', 'Course 3 · B2'], [
  ['**Reading**', 'Notices, registers, window scripts, short facsimiles — 125–190 words', 'Chronologies, read-outs, instructions to posts, graded findings — 200–290 words', 'Submissions, treaty clauses, risk notes, standing instructions — 270–340 words'],
  ['**Speaking**', 'Window exchanges and telephone calls; asking for repetition and spelling', 'Reporting a conversation, instructing, pressing a case, placing a reservation', 'Chairing, delegating, giving feedback, negotiating text, disagreeing upward, declining in public'],
  ['**Writing**', 'Register entries, telephone notes, a four-line handover — 30–75 words', 'Error reports, read-outs, options papers, reservations — 80–150 words', 'Submissions, standing instructions, decision logs, handovers — 145–230 words'],
  ['**The move it teaches**', 'Be understood, and be trusted with a document', 'Report, instruct and advise — own a desk', 'Decide, supervise, and speak for the state'],
  ['**Responsibility**', 'Answerable for your own day and your own file', 'Answerable for a desk, a case and a figure', 'Answerable for other people\u2019s work and the ministry\u2019s word'],
], [1.3, 2.1, 2.1, 2.1]));
out.push(p('⚠ **The build-up is deliberate and cumulative.** Three threads run the whole 72 hours and are revisited at rising difficulty: **separating what you saw from what you were told and what you worked out** (Course 1 S9 → Course 2 S14 → Course 3 S26); **giving a figure its source, its date and its firmness** (C1 S4 → C2 S20 → C3 S27); and **writing so that the reader can act without having been there** (C1 S12 → C2 S23 → C3 S25).'));

out.push(pb());
// ---------- 7 ----------
out.push(h2('7 · The 36 session headings'));
out.push(h3('Course 1 · Pre-Intermediate — from a first day to a colleague the section depends on'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 0 && x.n <= 12).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 2 · Intermediate — from dependable pair of hands to owning a file and a figure'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 12 && x.n <= 24).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(sp());
out.push(h3('Course 3 · Upper-Intermediate — from owning a file to writing for a minister and speaking for the state'));
out.push(table(['#', 'Session', 'What the learner can do afterwards'],
  S.filter(x => x.n > 24 && x.n <= 36).map(x => [String(x.n), '**' + x.t + '**', x.aim]),
  [0.4, 3.1, 3.5]));

out.push(pb());
// ---------- 8 ----------
out.push(h2('8 · The context map — every learner meets their own area three times'));
out.push(p('Each case study is set in one of the twelve contexts, and **each context appears exactly once per course**. A learner on the consular window meets their own work three times, each time at a higher level of responsibility.'));
// built from scheme-data so the map cannot drift from the books
const CTX = []; const seen = {};
S.forEach(x => { if (!(x.cs.sec in seen)) { seen[x.cs.sec] = [x.cs.sec]; CTX.push(seen[x.cs.sec]); } seen[x.cs.sec].push('S' + x.n); });
out.push(table(['Context', 'Course 1', 'Course 2', 'Course 3'], CTX, [3.2, 1, 1, 1]));

// ---------- 9 ----------
out.push(h2('9 · The ministry roles each course supports'));
out.push(p('These are the **kinds of post the language level supports** — the English a learner needs in order to function in them. They are a statement about the course, not a prediction about any individual\'s employment.'));
out.push(table(['After', 'Typical posts the level supports', 'What the learner can now be relied on for'], [
  ['**Course 1**\nA2', 'Consular window officer · records and registry clerk · visa section assistant · protocol assistant · press section assistant · mission administrative assistant · duty-desk telephone handler · scholarship office clerk', 'Being understood at the window, taking a citizen\u2019s details accurately, answering for the ministry on the telephone, handling documents you are trusted with, accounting for your own day and handing it on'],
  ['**Course 2**\nB1', 'Desk officer · consular case officer · visa decision officer · assistant protocol officer · press officer · mission administrative officer · treaties and legal assistant · cultural relations officer', 'Owning a desk and a file: reporting an error as a chronology, separating what was seen from what was inferred, writing a read-out a reader can act on, instructing a mission, bringing options on a failing case and placing a reservation on the record'],
  ['**Course 3**\nB2', 'Head of section · senior desk officer · head of consular or visa section · deputy head of mission administration · spokesperson or head of press section · delegation member · treaties negotiator · unit head', 'Other people\u2019s work and the state\u2019s word: writing a submission a minister can decide on, owning a figure others quote, setting the instruction a section follows, taking charge of work you did not build, chairing a meeting, negotiating treaty text, disagreeing with an instruction from above and speaking for the state in public'],
], [0.9, 3.3, 3]));
out.push(sp());
out.push(box('The series as a whole', [
  'A learner who completes all three courses has moved **from being managed to managing** — and has done it in English, which is the constraint that usually stops a capable young official at the desk-officer grade.',
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
  '**The numbers here describe the course, and are exact:** 3 courses · 36 sessions · 72 teaching hours · 144 teaching blocks · 36 case studies · 12 contexts, each appearing once per course · 10 learners, 5 pairs · 432 distinct vocabulary items, none repeated.',
  '**Levels are a design statement.** The three courses are written to the ground covered by CEFR A2, B1 and B2. **No external certification, accreditation or examination is part of this programme.**',
  '**The role lists in section 9 describe the posts the language level supports.** They are not employment outcomes and should not be presented to learners as such.',
  '**The timings in section 4 are the design model.** A teacher may move minutes between blocks; the programme assumes the four blocks are all present.',
  '**The programme name on this document is a placeholder** and can be changed.',
  '⚠ **This document contains no market, employment or demographic statistics**, because none have been verified for this purpose. Any such figures should be added by the centre from its own sources.',
], C.grey, C.navy));
out.push(sp());
out.push(p('_Prepared by Mo (Mohamad Khorbatli)._', { color: '7F7F7F' }));

L.build(out, process.argv[2], TITLE, 'English for Foreign Ministry Staff · Syria').then(() => {});
