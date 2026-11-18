/* Unit 3 §19 — Part 7 - Word stress.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s19', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 7 - Word stress', part: '7', section: '19',
          lesson: 'Part 7 - Word stress', title: 'Part 7 - Word stress' },
  objective: 'By the end of Part 7 you can stress this unit\'s policy and sovereignty '
        + 'vocabulary correctly, use intonation that carries authority without '
        + 'sounding harsh, and record an official statement in your own voice.',
  prev: 's18-writing-your-turn', prevLabel: 'Part 6 - Writing, your turn',
  next: 's20-pronunciation-practice', nextLabel: 'Part 7 - Pronunciation',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7'],
      ref: '7A',
      bookRef: 'Unit 3 · Part 7 · 7A',
      type: 'chipcols',
      title: 'Word Stress in Policy and Sovereignty Vocabulary',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'the first syllable — DA-da' },
        { label: 'a later syllable — da-DA-da' }],
      pool: ['sovereignty',
        'jurisdiction',
        'integration',
        'rehabilitation',
        'framework',
        'multilateral',
        'communiqué',
        'diplomatic'],
      answers: {
        'sovereignty': 0,
        'jurisdiction': 1,
        'integration': 1,
        'rehabilitation': 1,
        'framework': 0,
        'multilateral': 1,
        'communiqué': 1,
        'diplomatic': 1
      },
      whyTitle: 'Where the beat falls',
      why: {
        'sovereignty': 'SOV-er-eign-ty — the capitals are the loud syllable. stress on first '
          + 'syllable. Four syllables. Do not say \'sov-er-EIGN-ty.\'',
        'jurisdiction': 'ju-ris-DIC-tion — the capitals are the loud syllable. stress on third '
          + 'syllable. Four syllables. Both words carry legal weight, so clarity '
          + 'matters more than speed.',
        'integration': 'in-te-GRA-tion — the capitals are the loud syllable. four syllables, '
          + 'stress on the third.',
        'rehabilitation': 're-ha-bil-i-TA-tion — the capitals are the loud syllable. six syllables, '
          + 'stress on the fifth. This is the longest word in the unit and the most '
          + 'commonly mispronounced; practise it slowly in parts before saying it at '
          + 'speed.',
        'framework': 'FRAME-work — the capitals are the loud syllable. stress on first syllable. '
          + 'Two syllables, both clearly pronounced.',
        'multilateral': 'mul-ti-LAT-er-al — the capitals are the loud syllable. stress on third '
          + 'syllable. Five syllables. Do not say \'MUL-ti-lat-er-al\'; the misplaced '
          + 'stress is immediately audible to a native listener.',
        'communiqué': 'com-mu-ni-QUÉ — the capitals are the loud syllable. four syllables, stress '
          + 'on the final syllable, pronounced \'KAY.\'',
        'diplomatic': 'dip-lo-MA-tic — the capitals are the loud syllable. stress on third '
          + 'syllable. Four syllables. Note that the noun DIP-lo-mat stresses the first '
          + 'syllable while the adjective dip-lo-MA-tic stresses the third.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7B',
      bookRef: 'Unit 3 · Part 7 · 7B',
      type: 'study',
      title: 'Authority Through Intonation',
      instruction: 'Read the box.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Authority Through Intonation' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      visual: { spot: 'linking-wave', wide: true }
    }
  ]
});
