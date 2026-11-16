/* Unit 1 §19 — Part 7 - Word stress.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s19', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 7 - Word stress', part: '7', section: '19',
          lesson: 'Part 7 - Word stress', title: 'Part 7 - Word stress' },
  objective: 'Work through Part 7 - Word stress of unit 1.',
  prev: 's18-writing-your-turn', prevLabel: 'Part 6 - Writing, your turn',
  next: 's20-pronunciation-practice', nextLabel: 'Part 7 - Pronunciation',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7'],
      ref: '7A',
      bookRef: 'Unit 1 · Part 7 · 7A',
      type: 'chipcols',
      title: 'Word Stress in Diplomatic Vocabulary',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'the first syllable — DA-da' },
        { label: 'a later syllable — da-DA-da' }],
      pool: ['protocol',
        'credentials',
        'liaison',
        'diplomat',
        'delegate',
        'accreditation',
        'reception',
        'attaché'],
      answers: {
        'protocol': 0,
        'credentials': 1,
        'liaison': 1,
        'diplomat': 0,
        'delegate': 0,
        'accreditation': 1,
        'reception': 1,
        'attaché': 1
      },
      whyTitle: 'Where the beat falls',
      why: {
        'protocol': 'PRO-to-col — the capitals are the loud syllable. stress on first syllable. '
          + 'Three syllables total. Do not say \'pro-TO-col.\'',
        'credentials': 'cre-DEN-tials — the capitals are the loud syllable. stress on second '
          + 'syllable. Three syllables. Do not say \'CRE-den-tials.\' Both words end '
          + 'with a clear, unstressed final syllable.',
        'liaison': 'li-AI-son — the capitals are the loud syllable. stress on second syllable. '
          + 'The \'s\' is silent',
        'diplomat': 'DIP-lo-mat — the capitals are the loud syllable. stress on first syllable. '
          + 'Three syllables. All three syllables are clearly pronounced.',
        'delegate': 'DEL-e-gate — the capitals are the loud syllable. stress on first syllable. '
          + 'Three syllables. The final \'e\' is pronounced as a short unstressed '
          + 'sound.',
        'accreditation': 'ac-CRED-i-TA-tion — the capitals are the loud syllable. two stressed '
          + 'syllables',
        'reception': 're-CEP-tion — the capitals are the loud syllable. stress on second '
          + 'syllable. Three syllables.',
        'attaché': 'at-ta-CHÉ — the capitals are the loud syllable. stress on the final '
          + 'syllable, which is pronounced \'SHAY.\' The accent mark (é) signals this '
          + 'stressed French-origin ending. Three syllables total: at-ta-CHÉ.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7B',
      bookRef: 'Unit 1 · Part 7 · 7B',
      type: 'study',
      title: 'Linking and Rhythm – Sound Natural',
      instruction: 'Read the box.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Linking and Rhythm – Sound Natural' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      visual: { spot: 'linking-wave', wide: true }
    }
  ]
});
