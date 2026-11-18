/* Unit 2 §19 — Part 7 - Word stress.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s19', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 7 - Word stress', part: '7', section: '19',
          lesson: 'Part 7 - Word stress', title: 'Part 7 - Word stress' },
  objective: 'By the end of Part 7 you can stress this unit\'s meeting and coordination '
        + 'vocabulary correctly, use the intonation that keeps meeting-room language '
        + 'formal rather than abrupt, and record a meeting opening on a topic from '
        + 'your own work.',
  prev: 's18-writing-your-turn', prevLabel: 'Part 6 - Writing, your turn',
  next: 's20-pronunciation-practice', nextLabel: 'Part 7 - Pronunciation',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7'],
      ref: '7A',
      bookRef: 'Unit 2 · Part 7 · 7A',
      type: 'chipcols',
      title: 'Word Stress in Meeting and Coordination Vocabulary',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'the first syllable — DA-da' },
        { label: 'a later syllable — da-DA-da' }],
      pool: ['bilateral',
        'agenda',
        'memorandum',
        'briefing',
        'communiqué',
        'dossier',
        'ratification',
        'consulate'],
      answers: {
        'bilateral': 1,
        'agenda': 0,
        'memorandum': 1,
        'briefing': 0,
        'communiqué': 1,
        'dossier': 0,
        'ratification': 1,
        'consulate': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'bilateral': 'bi-LAT-er-al — the capitals are the loud syllable. stress on second '
          + 'syllable. Four syllables. Do not say \'BI-lat-er-al.\'',
        'agenda': 'A-gen-da — the capitals are the loud syllable. stress on first syllable in '
          + 'this ministry usage. Three syllables. Keep the final \'a\' short and '
          + 'unstressed',
        'memorandum': 'me-MO-ran-dum — the capitals are the loud syllable. stress on second '
          + 'syllable. Four syllables. Do not say \'mem-o-RAN-dum.\'',
        'briefing': 'BRIEF-ing — the capitals are the loud syllable. stress on first syllable. '
          + 'Two syllables. The \'-ing\' is short and unstressed. Both words appear '
          + 'constantly in coordination emails, so they are worth practising aloud.',
        'communiqué': 'com-mu-ni-QUÉ — the capitals are the loud syllable. four syllables, stress '
          + 'on the final syllable, which is pronounced \'KAY.\' The accent mark '
          + 'signals the stressed French-origin ending.',
        'dossier': 'DOS-si-er — the capitals are the loud syllable. stress on first syllable. '
          + 'Three syllables; the ending is pronounced \'see-ay\' in formal diplomatic '
          + 'English.',
        'ratification': 'rat-i-fi-CA-tion — the capitals are the loud syllable. stress on fourth '
          + 'syllable. Five syllables. Practise it slowly: rat-i-fi-CA-tion.',
        'consulate': 'CON-su-late — the capitals are the loud syllable. stress on first '
          + 'syllable. Three syllables. Do not confuse it with con-SUL-tant, which '
          + 'stresses the second. The distinction matters because both words appear in '
          + 'the same sentence often enough to make the error audible.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7B',
      bookRef: 'Unit 2 · Part 7 · 7B',
      type: 'study',
      title: 'Intonation in Meeting Room Language',
      instruction: 'Read the box.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Intonation in Meeting Room Language' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      visual: { spot: 'linking-wave', wide: true }
    }
  ]
});
