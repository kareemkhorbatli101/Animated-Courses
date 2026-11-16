/* Unit 4 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s18', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 4.',
  video: 'u04v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 4 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — Why Standard Numbers Matter',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the carmaker make? '
        + '— A clear book of numbers.</span>',
      items: [
        { q: '1. What was the problem before?',
          accept: ['mechanics serviced the same car in different ways'],
          keys: ['mechanics', 'serviced'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the book give for every car?',
          accept: ['the correct reading and the tolerance', 'the correct reading and the tolerance (pressure, voltage, tread depth)'],
          keys: ['correct', 'reading'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the chief engineer say?',
          accept: ['a number is the same in every language; good standards make good cars'],
          keys: ['number', 'same'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 4 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) the small range that is allowed' },
        { id: 'm-b', label: 'b) an agreed correct level for everyone' },
        { id: 'm-c', label: 'c) a tool for lifting the car' },
        { id: 'm-d', label: 'd) the number a meter shows' },
        { id: 'm-e', label: 'e) a figure that gives an exact amount' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'standard', accept: 'm-b',
          why: '<b>standard</b> — an agreed correct level for everyone. Keep it apart from '
        + '<i>tolerance</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'tolerance', art: 'tolerance', accept: 'm-a',
          why: '<b>tolerance</b> — the small range that is allowed. Keep it apart from '
        + '<i>standard</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'reading', art: 'reading', accept: 'm-d',
          why: '<b>reading</b> — the number a meter shows. Keep it apart from '
        + '<i>standard</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'number', accept: 'm-e',
          why: '<b>number</b> — a figure that gives an exact amount. Keep it apart from '
        + '<i>standard</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for lifting the car”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 4 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: Standards are useful because…' }, { q: 'Finish this sentence in your own words: In Syria, this is… because…' }, { q: 'Finish this sentence in your own words: The most important reading to '
        + 'check is… because…' }],
      ideas: ['Standards are useful because…',
        'In Syria, this is… because…',
        'The most important reading to check is… because…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Talk with a partner. Use the frames.',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every comparison of two things has “than” after it.' },
                   { t: 'Every superlative has “the” in front of it — the most worn, the lowest.' },
                   { t: '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
