/* Unit 4 §19 — Part 7 - Word stress.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s19', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 7 - Word stress', part: '7', section: '19',
          lesson: 'Part 7 - Word stress', title: 'Part 7 - Word stress' },
  objective: 'By the end of Part 7 you can stress this unit\'s correspondence and '
        + 'ceremony vocabulary correctly, use intonation that is warm and dignified '
        + 'at the same time, and record a formal dialogue of your own.',
  prev: 's18-writing-your-turn', prevLabel: 'Part 6 - Writing, your turn',
  next: 's20-pronunciation-practice', nextLabel: 'Part 7 - Pronunciation',
  cards: [
    {
      id: 'c1',
      covers: ['Part 7'],
      ref: '7A',
      bookRef: 'Unit 4 · Part 7 · 7A',
      type: 'chipcols',
      title: 'Word Stress in Correspondence and Ceremony Vocabulary',
      instruction: 'Play each word, then put it in the column that matches where you hear the '
        + 'beat.',
      sayChips: 'course',
      poolLabel: 'Click a word to hear it, then click a column.',
      cols: [{ label: 'the first syllable — DA-da' },
        { label: 'a later syllable — da-DA-da' }],
      pool: ['itinerary',
        'cooperation',
        'correspondence',
        'ceremony',
        'signatory',
        'convention',
        'framework',
        'envoy'],
      answers: {
        'itinerary': 1,
        'cooperation': 1,
        'correspondence': 1,
        'ceremony': 0,
        'signatory': 0,
        'convention': 1,
        'framework': 0,
        'envoy': 0
      },
      whyTitle: 'Where the beat falls',
      why: {
        'itinerary': 'i-TIN-er-ar-y — the capitals are the loud syllable. five syllables, stress '
          + 'on the second. Do not say \'it-in-ER-ar-y.\'',
        'cooperation': 'co-op-er-A-tion — the capitals are the loud syllable. five syllables, '
          + 'stress on the fourth. Both are long words that appear constantly in '
          + 'correspondence, so practise them inside a sentence.',
        'correspondence': 'cor-re-SPOND-ence — the capitals are the loud syllable. four syllables, '
          + 'stress on the third.',
        'ceremony': 'CER-e-mo-ny — the capitals are the loud syllable. four syllables, stress '
          + 'on the first. Note that British and American English differ slightly in '
          + 'the rhythm of \'ceremony\'; the stress placement is the same in both.',
        'signatory': 'SIG-na-tor-y — the capitals are the loud syllable. four syllables, stress '
          + 'on the first. Do not say \'sig-NA-tor-y.\'',
        'convention': 'con-VEN-tion — the capitals are the loud syllable. three syllables, stress '
          + 'on the second. Both words carry legal weight, so clarity matters more than '
          + 'speed when you say them.',
        'framework': 'FRAME-work — the capitals are the loud syllable. two syllables, stress on '
          + 'the first, both clearly pronounced.',
        'envoy': 'EN-voy — the capitals are the loud syllable. two syllables, stress on the '
          + 'first; the second is short'
      }
    },
    {
      id: 'c2',
      covers: ['Part 7'],
      ref: '7B',
      bookRef: 'Unit 4 · Part 7 · 7B',
      type: 'study',
      title: 'Formal Intonation — Warm but Dignified',
      instruction: 'Read the box.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Formal Intonation — Warm but Dignified' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      visual: { spot: 'linking-wave', wide: true }
    }
  ]
});
