/* Unit 10 §3 — Part 1 - Pronunciation.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s03', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 1 - Pronunciation', part: '1', section: '3',
          lesson: 'Part 1 - Pronunciation', title: 'Part 1 - Pronunciation' },
  objective: 'Work through Part 1 - Pronunciation of unit 10.',
  video: 'u10v03',
  prev: 's02-vocabulary', prevLabel: 'Part 1 - Vocabulary',
  next: 's04-check', nextLabel: 'Part 1 - Check',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 10 · Part 1', type: 'chipcols',
      title: 'Pronunciation',
      instruction: 'Play each word, then put it in the column that matches where you hear the beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'first syllable — DA-da' }, { label: 'a later syllable — da-DA-da' }],
      pool: ['manufacturer', 'satisfaction', 'campaign', 'feedback', 'recommend', 'technical'],
      answers: {
        'manufacturer': 1,
        'satisfaction': 1,
        'campaign': 1,
        'feedback': 0,
        'recommend': 1,
        'technical': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'manufacturer': 'man-u-FAC-tur-er — the capitals are the loud syllable. This one breaks the '
        + 'usual pattern, which is why it is worth saying twice.',
        'satisfaction': 'sat-is-FAC-tion — the capitals are the loud syllable. This one breaks the '
        + 'usual pattern, which is why it is worth saying twice.',
        'campaign': 'cam-PAIGN — the capitals are the loud syllable. This one breaks the usual '
        + 'pattern, which is why it is worth saying twice.',
        'feedback': 'FEED-back — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'recommend': 're-com-MEND — the capitals are the loud syllable. This one breaks the '
        + 'usual pattern, which is why it is worth saying twice.',
        'technical': 'TECH-ni-cal — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.'
      }
    }
  ]
});
