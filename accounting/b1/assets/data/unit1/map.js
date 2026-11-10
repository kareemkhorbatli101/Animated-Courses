/* ============================================================
   Unit 1 — the section list behind the "Jump to…" control.

   One ordered row per page, in book order. `n` is the number of cards on
   that page, so the jump list can show how far through each section the
   learner is without loading its data file.

   Keep this in step with the prev/next chain: tools/check-nav.cjs fails
   the build if the order, the card counts or the files disagree with the
   pages themselves.

   The book's eleven Parts do not map one-to-one onto screens: Part 2
   carries four separate exercises and Part 5 carries three texts, while
   Parts 4, 6 and 9 are each one long open task.
   ============================================================ */
EAFM.unitMap('unit1', [
  { id: 'u1-s01', file: 's01-warmup',        part: '—', lesson: 'Opening',              label: '§1 Warm up — the finance cycle',        n: 2 },
  { id: 'u1-s02', file: 's02-read',          part: '—', lesson: 'Opening',              label: '§2 Read — the finance team',            n: 3 },

  { id: 'u1-s03', file: 's03-vocab-match',   part: '1',  lesson: 'Part 1 · Vocabulary',     label: '§3 Match the six words',               n: 1 },
  { id: 'u1-s04', file: 's04-vocab-mcq',     part: '1',  lesson: 'Part 1 · Vocabulary',     label: '§4 Terminology — choose the meaning',   n: 2 },

  { id: 'u1-s05', file: 's05-grammar-rule',  part: '2',  lesson: 'Part 2 · Grammar',        label: '§5 The rule — simple and continuous',   n: 3 },
  { id: 'u1-s06', file: 's06-grammar-gap',   part: '2',  lesson: 'Part 2 · Grammar',        label: '§6 Controlled practice',               n: 1 },
  { id: 'u1-s07', file: 's07-grammar-fix',   part: '2',  lesson: 'Part 2 · Grammar',        label: '§7 Correct the sentence',              n: 2 },
  { id: 'u1-s08', file: 's08-grammar-freer', part: '2',  lesson: 'Part 2 · Grammar',        label: '§8 Freer practice — your own work',     n: 1 },

  { id: 'u1-s09', file: 's09-pronunciation', part: '3',  lesson: 'Part 3 · Listening',      label: '§9 Pronunciation — the -s ending',     n: 2 },
  { id: 'u1-s10', file: 's10-dialogue-1',    part: '3',  lesson: 'Part 3 · Listening',      label: '§10 Audio 1.2 — Samah asks Fadi',       n: 3 },
  { id: 'u1-s11', file: 's11-dialogue-2',    part: '3',  lesson: 'Part 3 · Listening',      label: '§11 Audio 1.3 — explaining the job',    n: 3 },

  { id: 'u1-s12', file: 's12-speaking',      part: '4',  lesson: 'Part 4 · Speaking',       label: '§12 Describe your job and your day',   n: 2 },

  { id: 'u1-s13', file: 's13-reading-a',     part: '5',  lesson: 'Part 5 · Reading',        label: '§13 Reading A — a day in the office',   n: 2 },
  { id: 'u1-s14', file: 's14-reading-b',     part: '5',  lesson: 'Part 5 · Reading',        label: '§14 Reading B — the whole organisation', n: 3 },
  { id: 'u1-s15', file: 's15-figure',        part: '5',  lesson: 'Part 5 · Reading',        label: '§15 Figure 1.1 — the finance cycle',    n: 2 },

  { id: 'u1-s16', file: 's16-writing',       part: '6',  lesson: 'Part 6 · Writing',        label: '§16 W1–W5 — five pieces of writing',    n: 5 },

  { id: 'u1-s17', file: 's17-stakeholder',   part: '7',  lesson: 'Part 7 · Stakeholders',   label: '§17 Same numbers, different readers',  n: 5 },

  { id: 'u1-s18', file: 's18-consolidation', part: '8',  lesson: 'Part 8 · Consolidation',  label: '§18 The grammar, restated',            n: 3 },

  { id: 'u1-s19', file: 's19-cases',         part: '9',  lesson: 'Part 9 · Cases',          label: '§19 Three decisions',                  n: 3 },

  { id: 'u1-s20', file: 's20-review',        part: '10', lesson: 'Part 10 · Review',        label: '§20 Review and Can-Do',                n: 6 },

  { id: 'u1-s21', file: 's21-foundations',   part: '11', lesson: 'Part 11 · Foundations',   label: '§21 Two kinds of accounting',          n: 3 }
]);
