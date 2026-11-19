// English for the Workplace · Syria — DESIGN PLAN for all three courses (approval document)
const fs = require('fs'), path = require('path'), d = require('docx');
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'English for the Workplace · Syria — Design Plan';
const fig = (n, w, h) => new d.Paragraph({ spacing: { before: 120, after: 160 },
  children: [new d.ImageRun({ data: fs.readFileSync(path.join(__dirname, '../figures', n + '.png')), transformation: { width: w, height: h } })] });

out.push(h1('English for the Workplace · Syria'));
out.push(p('**Design plan for all three courses — for approval before Course 1 is written**', { color: C.teal }));
out.push(p('_Pre-Intermediate · Intermediate · Upper-Intermediate · 36 sessions · 72 hours_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('What this document is for', [
  'The three courses must look, behave and teach the same way, so the design is settled **once, here, before any of the three is written**. A learner who finishes Course 1 should open Course 3 and recognise every device on the page.',
  'This document fixes: the **session clock**, the **task typology**, the **scaffolding**, the **colour and visual system**, the **page architecture**, the **appendices**, and how each device **changes level by level**.',
  '⚠ **Nothing in Course 1 will be written until this is approved.** Section 11 lists exactly what I am asking you to approve.',
], C.lblue, C.navy));
out.push(fig('ladder', 620, 146));

// ============ 1 ============
out.push(h2('1 · The honest constraint, and how the design answers it'));
out.push(p('The brief asks for **three task types for each of reading, listening, writing and the case study, plus discussion questions**. Taken literally — all three types for every skill in every cycle — one session would carry more than thirty tasks. **In 120 minutes that is unteachable**, and the pair work, which is where the speaking happens, would be the first thing squeezed out.'));
out.push(box('The design decision', [
  '**The three types rotate across the three cycles instead of stacking inside each one.** Every session therefore contains all three types for every skill — True/False, gap-fill and matching — but a single cycle carries one of each skill, not three.',
  '**Two things do appear in every cycle**, because the brief rightly insists on them: **a gapped writing model**, and **discussion questions**.',
  '⚠ **This is the one place where I have interpreted rather than followed.** If you want all three types in every cycle, the session must go to three hours or drop to two cycles. Say which and I will re-plan.',
], C.lorange, C.orange));
out.push(fig('taskmap', 620, 168));

// ============ 2 ============
out.push(pb());
out.push(h2('2 · The session clock'));
out.push(p('**Every session is 120 minutes and has the same five parts.** The shape never varies across the 36.'));
out.push(table(['Part', 'Min', 'What happens'], [
  ['**Opening**', '5', 'Collect last session\'s homework · one-minute recap · today\'s aim read aloud from the page'],
  ['**Cycle 1**', '28', 'Reading (True/False) · Listening (matching) · gapped writing model · pair role-play'],
  ['**Cycle 2**', '28', 'Reading (gap-fill) · Listening (True/False) · gapped writing model · pair role-play'],
  ['**Cycle 3**', '28', 'Reading (matching) · Listening (gap-fill) · gapped model — **this is the portfolio piece**'],
  ['**Case study**', '28', 'A document pack in a named sector, worked in fours, with its own three task types'],
  ['**Close**', '3', 'The can-do checklist · homework set: finish cycle 3\'s writing'],
], [1.1, 0.5, 5.4]));
out.push(fig('cycle', 620, 84));
out.push(box('Two consequences worth stating plainly', [
  '⚠ **Full pieces of writing are finished as homework, not in class.** In 28 minutes a learner can complete a gapped model and draft two or three lines of their own. A 200-word B2 decision note cannot be written in that time by anybody. **In class: analyse the model, complete the gaps, start. At home: finish.**',
  '**The case study loses the odd pair.** Ten learners make two fours and one pair; the teacher joins the pair. This is the only block that is not in pairs, because its document packs hold more than two positions.',
], C.grey, C.navy));

// ============ 3 ============
out.push(pb());
out.push(h2('3 · The task typology'));
out.push(h3('Reading — three types, one per cycle'));
out.push(table(['Type', 'What it looks like', 'What it actually tests'], [
  ['**True / False**', '6 statements about a short workplace document', 'Whether the learner read the document or guessed from the topic'],
  ['**Gap-fill**', 'A 60–80 word summary of the text with 6 gaps, or an excerpt with words removed', 'Whether they can hold the whole text, not only find a line'],
  ['**Matching**', 'Match 5 lines to 5 purposes, readers or outcomes — with one distractor', 'Whether they see what each part of a document is FOR'],
], [1.2, 3, 2.8]));
out.push(h3('Listening — the same three types, offset by one cycle'));
out.push(p('The conversation is **read aloud by the teacher or played**, three times, as in the published series. Offsetting the types means a learner never meets the same task shape twice in one cycle.'));
out.push(table(['Type', 'What it looks like'], [
  ['**Matching**', 'Match each speaker to what they want, or each turn to its function'],
  ['**True / False**', '6 statements about what was said — two of them about what was NOT said'],
  ['**Gap-fill**', 'Complete a real form from the conversation: a message slip, a booking, a set of notes'],
], [1.2, 5.8]));
out.push(h3('Writing — a gapped model every time, plus a rotating analysis task'));
out.push(table(['In every cycle', 'Plus, rotating by cycle'], [
  ['**A model of the target text with gaps to complete.** The learner fills the gaps, then writes their own version of the same genre.', '**Cycle 1 — matching:** match each sentence of the model to the job it does (opening · fact · reason · ask · sign-off)\n**Cycle 2 — True/False:** 6 statements about the model\'s conventions\n**Cycle 3 — gap-fill:** complete a skeleton of the model\'s structure, then write'],
], [3, 4]));
out.push(h3('The case study — all three types, one per document'));
out.push(table(['Document', 'Task'], [
  ['Document 1', '**True / False** — 6 statements about what the pack does and does not establish'],
  ['Document 2', '**Matching** — match each document to the single thing it proves'],
  ['Document 3 + the output', '**Gap-fill** — complete the output template, then write the rest in fours'],
], [1.6, 5.4]));
out.push(p('**Discussion questions:** two in every cycle, three in the case study. They are the only tasks with no right answer, and they are marked as such on the page.'));

// ============ 4 ============
out.push(pb());
out.push(h2('4 · Scaffolding'));
out.push(h3('Every role play is scaffolded in four steps'));
out.push(table(['', 'Step', 'What the learner has in front of them'], [
  ['1', '**Hear it**', 'The cycle\'s conversation, already read twice — the model performance'],
  ['2', '**The card**', 'Role, goal, and one constraint the other person does not know'],
  ['3', '**The language strip**', 'A box of the exact phrases, in the order they are likely to be needed'],
  ['4', '**Swap and repeat**', 'Same card, roles exchanged — the second run is where the language sticks'],
], [0.4, 1.6, 5]));
out.push(p('⚠ **The language strip is removed progressively.** Course 1: the full strip with gaps. Course 2: the functions only, no wording. Course 3: a blank card and one hidden constraint.'));
out.push(h3('Every writing task has a gapped sample'));
out.push(box('The fixed four-part writing sequence', [
  '**1 · The model, whole.** The learner reads a good example of the genre.',
  '**2 · The model, gapped.** The same text with words or clauses removed, completed by the learner — with a word bank in Course 1, without one from Course 2.',
  '**3 · The skeleton.** A labelled frame: _opening line · what happened · the reason · the ask · sign-off_.',
  '**4 · Their own.** Same genre, their own content, started in class and finished for homework.',
  '⚠ **A sample answer for part 4 appears in Appendix B for every single writing task in the course.**',
], C.lyellow, C.orange));

// ============ 5 ============
out.push(pb());
out.push(h2('5 · The colour and visual system'));
out.push(p('**Two colour jobs, kept strictly apart.** One tells you which course you are in; the other tells you what kind of thing you are looking at. The second never changes across the three courses — that is what makes the series feel like one thing.'));
out.push(h3('Course colour — the spine'));
out.push(table(['Course', 'Spine colour', 'Where it appears'], [
  ['**Course 1 · Pre-Intermediate**', 'Teal', 'Session numbers, headings, rules, the cycle strip, the cover'],
  ['**Course 2 · Intermediate**', 'Navy', 'The same places — nothing else changes'],
  ['**Course 3 · Upper-Intermediate**', 'Orange', 'The same places'],
], [2.4, 1.4, 3.2]));
out.push(h3('Functional colour — identical in all three courses'));
out.push(p('**A colour means one thing, everywhere, in all three books.** A learner who learns this legend in session 1 of Course 1 can navigate Course 3 without being told.'));
out.push(table(['Element on the page', 'Fill', 'Rule / title', 'Never used for'], [
  ['**Reading — a document facsimile**', 'white, ruled', 'navy', 'anything else; readings always look like real documents'],
  ['**Listening — the conversation**', 'light teal', 'teal', 'reading texts'],
  ['**Language box — the phrases to use**', 'light blue', 'navy', 'tasks'],
  ['**Writing model with gaps**', 'light yellow', 'orange', 'the case study'],
  ['**Role-play card**', 'light orange', 'orange', 'writing'],
  ['**Case study**', 'light yellow, heavy rule', 'orange', 'ordinary writing models'],
  ['**Discussion — no right answer**', 'grey', 'navy', 'tasks that have answers'],
  ['**Teacher\'s note**', 'grey italic, no box', '—', 'anything the learner must read'],
], [2.3, 1.3, 1.1, 2.3]));
out.push(sp());
out.push(box('The visuals, and what each is for', [
  '**The cycle strip** — at the head of every session, in the course colour. Same figure, 36 times. It tells a learner where they are in the two hours.',
  '**Sector badges** — twelve small marks, one per sector, on every case study. A learner recognises their own industry before they read a word.',
  '**Document facsimiles** — readings are drawn as the thing itself: a form, a rota, a minute, an appraisal. **This is the highest-value visual in the course**, because recognising a genre on sight is half of reading it at work.',
  '**Concept diagrams** — about one per session, only where a structure is being taught: the four-line note, the chronology box, the decision question with two answers.',
  '⚠ **No decorative images.** Every figure in all three courses either shows a structure or identifies a document. A picture that only brightens the page is cut.',
], C.lteal, C.teal));

// ============ 6 ============
out.push(pb());
out.push(h2('6 · How each device changes level by level'));
out.push(p('**Same device, three settings.** This is what makes the courses complement rather than repeat each other.'));
out.push(table(['Device', 'Course 1', 'Course 2', 'Course 3'], [
  ['**Gap-fill**', '6 gaps, **word bank given**', '8 gaps, no bank', '6 gaps, each a **whole clause**, no bank'],
  ['**True / False**', 'True or False', 'True · False · **Not given**', 'True · False · Not given, **and quote the line that decides it**'],
  ['**Matching**', '5 pairs, 1 distractor', '7 pairs, 2 distractors', '7 pairs where **two plausibly fit**; the learner chooses and justifies'],
  ['**Role play**', 'Full language strip **with gaps**', 'Function prompts only', 'Blank card + **one hidden constraint**'],
  ['**Writing model**', '**60% gapped**, word bank', '40% gapped', '25% gapped, **plus one weak sentence to improve**'],
  ['**Case pack**', '2 documents that **agree**', '3 documents, one **incomplete**', '3 documents, two of which **contradict**'],
  ['**Discussion**', 'About the learner\'s own work', 'About a judgement call', 'About a decision with **no good option**'],
  ['**Reading length**', '120–180 words', '200–280 words', '280–350 words'],
  ['**Writing length**', '30–60 words', '80–150 words', '150–250 words'],
], [1.3, 1.9, 1.9, 2.3]));

// ============ 7 ============
out.push(h2('7 · Page architecture'));
out.push(p('**Every session starts on a new page**, and the order inside a session never changes:'));
out.push(table(['Page', 'What is on it'], [
  ['**Session opening page**', 'Session number and title in the course colour · the cycle strip · the aim · _In this session you will…_ (three lines, one per cycle) · the sector badge for today\'s case study · the twelve vocabulary items'],
  ['**Cycle pages**', 'Each cycle: reading + task · listening + task · language box · role-play card · gapped writing model · two discussion questions'],
  ['**Case-study page**', 'Starts on a new page. The document pack, the three tasks, the output template, three discussion questions'],
  ['**Session close**', 'The can-do checklist (three ticks) · homework'],
], [1.6, 5.4]));

// ============ 8 ============
out.push(h2('8 · The appendices'));
out.push(table(['', 'Appendix', 'Contents'], [
  ['A', '**Answer key**', '**Every closed task in the course**, by session and cycle: all True/False, gap-fill and matching, for reading, listening, writing and the case studies'],
  ['B', '**Sample answers**', 'A full worked sample for **every writing task, every role play and every case-study output** — plus, for the writing, the gapped model completed'],
  ['C', '**Audio scripts**', 'Every listening conversation in full, printed for the teacher to read aloud'],
  ['D', '**Vocabulary**', '12 items a session, 144 a course, with a blank column for the learner\'s own language'],
  ['E', '**Role-play cards**', 'Photocopiable, cut-up, one page per session'],
  ['F', '**Case-study packs**', 'Photocopiable document packs, one per session'],
  ['G', '**Teacher\'s notes**', 'Timings, the two-error feedback routine, pairing and re-pairing, what to do with nine learners or eleven'],
  ['H', '**Progress record**', 'The can-do checklist for all 12 sessions on one sheet, and the portfolio list'],
], [0.4, 1.8, 4.8]));
out.push(p('⚠ **Discussion questions have no answers and are marked as such** — Appendix A lists them under each session with the note _open; no key_, so that nobody hunts for an answer that does not exist.'));

// ============ 9 ============
out.push(pb());
out.push(h2('9 · What I recommend adding'));
out.push(p('These are my additions, not yours. **Say no to any of them and they come out.**'));
out.push(table(['', 'Addition', 'Why'], [
  ['1', '**A vocabulary spine** — 12 items a session, and each session\'s items deliberately reappear in sessions +3 and +9', 'Without planned recycling a word met once is a word lost. This costs no class time; it is a constraint on how texts are written'],
  ['2', '**One pronunciation or intonation point a session**, 2 minutes inside cycle 2', 'The published B2 book already shows the value: a flat tone makes a sentence a delegation, a rising one makes it a hope. These are quick and they are memorable'],
  ['3', '**A can-do checklist at the end of every session** — three statements, ticked by the learner', 'Feeds the portfolio, gives the centre evidence, and takes ninety seconds'],
  ['4', '**Recycling checkpoints in sessions 6 and 12** of each course, inside the existing case study', 'Revision without spending a session on revision'],
  ['5', '**An Arabic column in the vocabulary appendix only**', 'You asked earlier for English–Arabic work. In a mixed-sector class I would keep translation out of the tasks and put it where it helps most — the word list. ⚠ **No Arabic exists in any source material; this is new authoring**'],
  ['6', '**A one-page "how this book works" spread** at the front of each course, showing the colour legend', 'The colour system only pays if the learner is told it exists, once'],
], [0.4, 2.6, 4]));

// ============ 10 ============
out.push(h2('10 · The check passes before Course 1 is delivered'));
out.push(p('**Fifteen passes, and the first twelve are machine-checked** by a harness written for this course, in the way the published series is checked.'));
out.push(table(['', 'Pass', 'Automatic?'], [
  ['1', 'Every session has 3 cycles and 1 case study; every cycle has a reading, a listening and a writing task', 'yes'],
  ['2', 'Every session begins on a new page — page-break count equals session count', 'yes'],
  ['3', 'Each session contains all three task types for each of reading, listening and writing', 'yes'],
  ['4', 'Every closed task has an answer in Appendix A; every open task is listed as having none', 'yes'],
  ['5', 'Every writing task has a gapped model AND a sample answer in Appendix B', 'yes'],
  ['6', 'Every role play has all four scaffold parts', 'yes'],
  ['7', 'Every functional colour is used for its one purpose and no other', 'yes'],
  ['8', 'Twelve sectors, each used exactly once', 'yes'],
  ['9', 'No vocabulary item repeats; 12 per session, 144 in the course', 'yes'],
  ['10', 'Every reading and writing length falls inside the band for the level', 'yes'],
  ['11', 'Every figure referenced exists, embeds, and is not decorative', 'yes'],
  ['12', 'Every cross-reference to another session resolves', 'yes'],
  ['13', 'Read as a learner: can a task be answered without reading the text? If yes, the task is rewritten', 'no — read by hand'],
  ['14', 'Read as a teacher: can each session be taught from the page alone, without the plan?', 'no — read by hand'],
  ['15', 'Read the built document, not the source: page count, page breaks, and every figure, in the PDF', 'no — read by hand'],
], [0.4, 5.4, 1.2]));
out.push(p('⚠ **Pass 15 is the one this project has learned to insist on.** Checking the source rather than the built document is how three separate faults reached finished books earlier in this work.'));

// ============ 11 ============
out.push(h2('11 · What I am asking you to approve'));
out.push(box('Approve, change or reject each of these', [
  '**1 · The rotation decision** in section 1 — three task types spread across three cycles, rather than all three in every cycle.',
  '**2 · The session clock** in section 2, and in particular that **full writing pieces are finished as homework**.',
  '**3 · The colour system** in section 5 — three course colours, eight functional colours fixed across all three books.',
  '**4 · The level progression** in section 6 — how gap-fills, True/False, matching, role plays and case packs harden from Course 1 to Course 3.',
  '**5 · The appendix set** in section 8, and especially that **Appendix B carries a sample for every writing task, role play and case output**.',
  '**6 · The six additions** in section 9 — accept or strike each.',
  '⚠ **On approval I will write Course 1 in full**: 12 sessions, 36 cycles, 12 case studies, 8 appendices, with the fifteen check passes run and reported before delivery.',
], C.lorange, C.orange));
out.push(sp());
out.push(p('_Prepared by Mo (Mohamad Khorbatli)._', { color: '7F7F7F' }));

L.build(out, process.argv[2], TITLE, 'English for the Workplace · Syria');
