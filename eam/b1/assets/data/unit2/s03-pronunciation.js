/* Unit 2 §3 — Part 1 - Pronunciation.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s03', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 1 - Pronunciation', part: '1', section: '3',
          lesson: 'Part 1 - Pronunciation', title: 'Part 1 - Pronunciation' },
  objective: 'Work through Part 1 - Pronunciation of unit 2.',
  video: 'u02v03',
  prev: 's02-vocabulary', prevLabel: 'Part 1 - Vocabulary',
  next: 's04-check', nextLabel: 'Part 1 - Check',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 2 · Part 1', type: 'chipcols',
      title: 'Pronunciation',
      instruction: 'Play each word, then put it in the column that matches where you hear the beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'first syllable — DA-da' }, { label: 'a later syllable — da-DA-da' }],
      pool: ['radiator', 'coolant', 'alternator', 'battery', 'filter', 'engine'],
      answers: {
        'radiator': 0,
        'coolant': 0,
        'alternator': 0,
        'battery': 0,
        'filter': 0,
        'engine': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'radiator': 'RA-di-a-tor — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'coolant': 'COOL-ant — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'alternator': 'AL-ter-na-tor — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'battery': 'BAT-ter-y — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'filter': 'FIL-ter — the capitals are the loud syllable. Most two- and three-syllable '
        + 'nouns in English are stressed at the front, and this is one of them.',
        'engine': 'EN-gine — the capitals are the loud syllable. Most two- and three-syllable '
        + 'nouns in English are stressed at the front, and this is one of them.'
      }
    }
  ]
});
