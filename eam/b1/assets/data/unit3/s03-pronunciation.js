/* Unit 3 §3 — Part 1 - Pronunciation.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s03', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 1 - Pronunciation', part: '1', section: '3',
          lesson: 'Part 1 - Pronunciation', title: 'Part 1 - Pronunciation' },
  objective: 'Work through Part 1 - Pronunciation of unit 3.',
  video: 'u03v03',
  prev: 's02-vocabulary', prevLabel: 'Part 1 - Vocabulary',
  next: 's04-check', nextLabel: 'Part 1 - Check',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 3 · Part 1', type: 'chipcols',
      title: 'Pronunciation',
      instruction: 'Play each word, then put it in the column that matches where you hear the beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'first syllable — DA-da' }, { label: 'a later syllable — da-DA-da' }],
      pool: ['spanner', 'socket', 'ratchet', 'goggles', 'safety', 'workshop'],
      answers: {
        'spanner': 0,
        'socket': 0,
        'ratchet': 0,
        'goggles': 0,
        'safety': 0,
        'workshop': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'spanner': 'SPA-nner — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'socket': 'SOC-ket — the capitals are the loud syllable. Most two- and three-syllable '
        + 'nouns in English are stressed at the front, and this is one of them.',
        'ratchet': 'RA-tchet — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'goggles': 'GOG-gles — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'safety': 'SAFE-ty — the capitals are the loud syllable. Most two- and three-syllable '
        + 'nouns in English are stressed at the front, and this is one of them.',
        'workshop': 'WORK-shop — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.'
      }
    }
  ]
});
