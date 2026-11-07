/* ============================================================
   Unit 2 — the section list behind the "Jump to…" control.

   The SAME twenty-one screens as Unit 1, in the same order, against the
   same eleven book parts. That is the pilot's central claim: the two
   units are one template, so a builder written for Unit 1 is a builder
   for all ten. Only the labels change.

   `n` is written by tools/build-shells.cjs from the pages themselves.
   ============================================================ */
EAFM.unitMap('unit2', [
  { id: 'u2-s01', file: 's01-warmup',        part: '—', lesson: 'Opening',             label: '§1 Warm up — the transaction diagram',   n: 2 },
  { id: 'u2-s02', file: 's02-read',          part: '—', lesson: 'Opening',             label: '§2 Read — the story of the past',        n: 3 },

  { id: 'u2-s03', file: 's03-vocab-match',   part: '1',  lesson: 'Part 1 · Vocabulary',    label: '§3 Match the six words',                n: 1 },
  { id: 'u2-s04', file: 's04-vocab-mcq',     part: '1',  lesson: 'Part 1 · Vocabulary',    label: '§4 Terminology — choose the meaning',    n: 2 },

  { id: 'u2-s05', file: 's05-grammar-rule',  part: '2',  lesson: 'Part 2 · Grammar',       label: '§5 The rule — past simple and continuous', n: 3 },
  { id: 'u2-s06', file: 's06-grammar-gap',   part: '2',  lesson: 'Part 2 · Grammar',       label: '§6 Controlled practice',                n: 1 },
  { id: 'u2-s07', file: 's07-grammar-fix',   part: '2',  lesson: 'Part 2 · Grammar',       label: '§7 Correct the sentence',               n: 2 },
  { id: 'u2-s08', file: 's08-grammar-freer', part: '2',  lesson: 'Part 2 · Grammar',       label: '§8 Freer practice — your day yesterday', n: 1 },

  { id: 'u2-s09', file: 's09-pronunciation', part: '3',  lesson: 'Part 3 · Listening',     label: '§9 Pronunciation — the -ed ending',     n: 2 },
  { id: 'u2-s10', file: 's10-dialogue-1',    part: '3',  lesson: 'Part 3 · Listening',     label: '§10 Audio 2.2 — how the month-end went',  n: 3 },
  { id: 'u2-s11', file: 's11-dialogue-2',    part: '3',  lesson: 'Part 3 · Listening',     label: '§11 Audio 2.3 — one receipt, step by step', n: 3 },

  { id: 'u2-s12', file: 's12-speaking',      part: '4',  lesson: 'Part 4 · Speaking',      label: '§12 Reporting what happened',           n: 2 },

  { id: 'u2-s13', file: 's13-reading-a',     part: '5',  lesson: 'Part 5 · Reading',       label: '§13 Reading A — the month-end close',    n: 2 },
  { id: 'u2-s14', file: 's14-reading-b',     part: '5',  lesson: 'Part 5 · Reading',       label: '§14 Reading B — the journey of one transaction', n: 3 },
  { id: 'u2-s15', file: 's15-figure',        part: '5',  lesson: 'Part 5 · Reading',       label: '§15 Figure 2.1 — receipt to ledger',     n: 2 },

  { id: 'u2-s16', file: 's16-writing',       part: '6',  lesson: 'Part 6 · Writing',       label: '§16 W1–W5 — five pieces of writing',     n: 5 },

  { id: 'u2-s17', file: 's17-stakeholder',   part: '7',  lesson: 'Part 7 · Stakeholders',  label: '§17 Same month, different readers',     n: 5 },

  { id: 'u2-s18', file: 's18-consolidation', part: '8',  lesson: 'Part 8 · Consolidation', label: '§18 The grammar, restated',             n: 3 },

  { id: 'u2-s19', file: 's19-cases',         part: '9',  lesson: 'Part 9 · Cases',         label: '§19 Three decisions',                   n: 3 },

  { id: 'u2-s20', file: 's20-review',        part: '10', lesson: 'Part 10 · Review',       label: '§20 Review and Can-Do',                 n: 6 },

  { id: 'u2-s21', file: 's21-foundations',   part: '11', lesson: 'Part 11 · Foundations',  label: '§21 Two sides for every entry',         n: 3 }
]);
