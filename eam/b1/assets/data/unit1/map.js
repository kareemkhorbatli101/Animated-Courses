/* ============================================================
   Unit 1 — the section list behind the "Jump to…" control, and the order of the unit.

   One ordered row per screen, in book order. `n` is the number of cards on that screen, so
   the jump list can show how far through each section a learner is without loading its data
   file. The count is measured from the data files by the shell builder and written back
   here, because writing it by hand is how it drifts.

   THE BOOK'S ELEVEN PARTS DO NOT MAP ONE-TO-ONE ONTO SCREENS. Part 1 carries vocabulary,
   pronunciation and a check; Part 2 carries three stages of one grammar point; Part 3 is
   three separate recordings. The slots are the twenty-one the acted videos already follow,
   so a screen and its video teach the same thing in the same order.
   ============================================================ */
EAM.unitMap('unit1', [
  { id: 'u1-s01', file: 's01-warm-up',       part: '—',  lesson: 'Warm Up',
    label: '§1 Warm up — the car and the department', n: 4, video: 'u01v01' },

  { id: 'u1-s02', file: 's02-vocabulary',    part: '1',  lesson: 'Part 1 · Vocabulary',
    label: '§2 The words of the workshop',            n: 3, video: 'u01v02' },
  { id: 'u1-s03', file: 's03-pronunciation', part: '1',  lesson: 'Part 1 · Vocabulary',
    label: '§3 Pronunciation — where the stress falls', n: 2, video: 'u01v03' },
  { id: 'u1-s04', file: 's04-check',         part: '1',  lesson: 'Part 1 · Vocabulary',
    label: '§4 Check what you know',                  n: 3, video: 'u01v04' },

  { id: 'u1-s05', file: 's05-grammar-notice', part: '2', lesson: 'Part 2 · Grammar',
    label: '§5 Notice — two kinds of time',           n: 2, video: 'u01v05' },
  { id: 'u1-s06', file: 's06-grammar-practice', part: '2', lesson: 'Part 2 · Grammar',
    label: '§6 Practice — simple or continuous',      n: 2, video: 'u01v06' },
  { id: 'u1-s07', file: 's07-grammar-review', part: '2', lesson: 'Part 2 · Grammar',
    label: '§7 Review — find and fix',                n: 3, video: 'u01v07' },

  { id: 'u1-s08', file: 's08-listening-1',   part: '3',  lesson: 'Part 3 · Listening',
    label: '§8 Nabil talks about his work',           n: 2, video: 'u01v08' },
  { id: 'u1-s09', file: 's09-listening-2',   part: '3',  lesson: 'Part 3 · Listening',
    label: '§9 At reception',                         n: 2, video: 'u01v09' },
  { id: 'u1-s10', file: 's10-listening-3',   part: '3',  lesson: 'Part 3 · Listening',
    label: '§10 A day at Cham Motors',                n: 2, video: 'u01v10' },

  { id: 'u1-s11', file: 's11-speaking-model', part: '4', lesson: 'Part 4 · Speaking',
    label: '§11 Talking about cars and work',         n: 1, video: 'u01v11' },
  { id: 'u1-s12', file: 's12-role-play',     part: '4',  lesson: 'Part 4 · Speaking',
    label: '§12 Role play, and your own talk',        n: 2, video: 'u01v12' },

  { id: 'u1-s13', file: 's13-reading-text',  part: '5',  lesson: 'Part 5 · Reading',
    label: '§13 What is a service department?',       n: 2, video: 'u01v13' },
  { id: 'u1-s14', file: 's14-reading-comprehension', part: '5', lesson: 'Part 5 · Reading',
    label: '§14 The words of the text, and Syria',    n: 3, video: 'u01v14' },

  { id: 'u1-s15', file: 's15-writing-model', part: '6',  lesson: 'Part 6 · Writing',
    label: '§15 Four pieces to write',                n: 4, video: 'u01v15' },

  { id: 'u1-s16', file: 's16-management-file-dialogue', part: '7', lesson: 'Part 7 · Management File',
    label: '§16 What a manager says, and why',        n: 3, video: 'u01v16' },
  { id: 'u1-s17', file: 's17-management-file-practice', part: '7', lesson: 'Part 7 · Management File',
    label: '§17 The first day, in order',             n: 3, video: 'u01v17' },

  { id: 'u1-s18', file: 's18-global-case-study', part: '8', lesson: 'Part 8 · Global Case',
    label: '§18 A small garage grows',                n: 4, video: 'u01v18' },
  { id: 'u1-s19', file: 's19-local-case-study', part: '9', lesson: 'Part 9 · Local Case',
    label: '§19 Syria in focus — Lina\'s workshop',    n: 3, video: 'u01v19' },

  { id: 'u1-s20', file: 's20-spiral-review', part: '10', lesson: 'Part 10 · Review',
    label: '§20 Spiral review',                       n: 2, video: 'u01v20' },
  { id: 'u1-s21', file: 's21-can-do-glossary', part: '10', lesson: 'Part 10 · Review',
    label: '§21 Can-Do, and the ten words',           n: 2, video: 'u01v21' }
]);
