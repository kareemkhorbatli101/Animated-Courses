/* Unit 7 §3 — Part 1 - Pronunciation.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s03', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 1 - Pronunciation', part: '1', section: '3',
          lesson: 'Part 1 - Pronunciation', title: 'Part 1 - Pronunciation' },
  objective: 'Work through Part 1 - Pronunciation of unit 7.',
  video: 'u07v03',
  prev: 's02-vocabulary', prevLabel: 'Part 1 - Vocabulary',
  next: 's04-check', nextLabel: 'Part 1 - Check',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 7 · Part 1', type: 'chipcols',
      title: 'Pronunciation',
      instruction: 'Play each word, then put it in the column that matches where you hear the beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'first syllable — DA-da' }, { label: 'a later syllable — da-DA-da' }],
      pool: ['appointment', 'estimate', 'deposit', 'invoice', 'schedule', 'courtesy'],
      answers: {
        'appointment': 1,
        'estimate': 0,
        'deposit': 1,
        'invoice': 0,
        'schedule': 0,
        'courtesy': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'appointment': 'ap-POINT-ment — the capitals are the loud syllable. This one breaks the '
        + 'usual pattern, which is why it is worth saying twice.',
        'estimate': 'ES-ti-mate — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'deposit': 'de-POS-it — the capitals are the loud syllable. This one breaks the usual '
        + 'pattern, which is why it is worth saying twice.',
        'invoice': 'IN-voice — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'schedule': 'SCHE-dule — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.',
        'courtesy': 'COUR-te-sy — the capitals are the loud syllable. Most two- and '
        + 'three-syllable nouns in English are stressed at the front, and this is one '
        + 'of them.'
      }
    }
  ]
});
