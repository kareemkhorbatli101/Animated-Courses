/* Unit 5 §19 — Part 7 - Word stress.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s19', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 7 - Word stress', part: '7', section: '19',
          lesson: 'Part 7 - Word stress', title: 'Part 7 - Word stress' },
  objective: 'Work through Part 7 - Word stress of unit 5.',
  prev: 's18-writing-your-turn', prevLabel: 'Part 6 - Writing, your turn',
  next: 's20-pronunciation-practice', nextLabel: 'Part 7 - Pronunciation',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7'],
      ref: '7A',
      bookRef: 'Unit 5 · Part 7 · 7A',
      type: 'chipcols',
      title: 'Word Stress in Investment and Legal Vocabulary',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'the first syllable — DA-da' },
        { label: 'a later syllable — da-DA-da' }],
      pool: ['investment',
        'expropriation',
        'repatriation',
        'incentive',
        'regulatory',
        'arbitration',
        'concession',
        'feasibility'],
      answers: {
        'investment': 1,
        'expropriation': 1,
        'repatriation': 1,
        'incentive': 0,
        'regulatory': 1,
        'arbitration': 1,
        'concession': 1,
        'feasibility': 1
      },
      whyTitle: 'Where the beat falls',
      why: {
        'investment': 'in-VEST-ment — the capitals are the loud syllable. three syllables, stress '
          + 'on the second.',
        'expropriation': 'ex-pro-pri-A-tion — the capitals are the loud syllable. five syllables, '
          + 'stress on the fourth. The second is a word you may have to say in a tense '
          + 'moment, so practise it until it is automatic; hesitating over it sounds '
          + 'like evasion.',
        'repatriation': 're-pat-ri-A-tion — the capitals are the loud syllable. five syllables, '
          + 'stress on the fourth.',
        'incentive': 'IN-cen-tive — the capitals are the loud syllable. three syllables, stress '
          + 'on the first. Do not say \'in-cen-TIVE\'; the misplaced stress is '
          + 'immediately audible.',
        'regulatory': 'reg-u-LA-tor-y — the capitals are the loud syllable. five syllables, '
          + 'stress on the third.',
        'arbitration': 'ar-bi-TRA-tion — the capitals are the loud syllable. four syllables, '
          + 'stress on the third. Both appear in almost every investor conversation, so '
          + 'they are worth drilling in a full sentence.',
        'concession': 'con-CES-sion — the capitals are the loud syllable. three syllables, stress '
          + 'on the second.',
        'feasibility': 'fea-si-BIL-i-ty — the capitals are the loud syllable. five syllables, '
          + 'stress on the third. \'Feasibility study\' is the single most frequent '
          + 'phrase in this unit; say it as one rhythmic unit rather than two separate '
          + 'words, with the main beat on BIL.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7B',
      bookRef: 'Unit 5 · Part 7 · 7B',
      type: 'study',
      title: 'Rhythm in Conditional Sentences — Sound Natural and Confident',
      instruction: 'Read the box.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Rhythm in Conditional Sentences — Sound Natural and Confident' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      visual: { spot: 'linking-wave', wide: true }
    }
  ]
});
