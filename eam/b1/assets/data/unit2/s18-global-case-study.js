/* Unit 2 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s18', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 2.',
  video: 'u02v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 2 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — A Store That Never Runs Out',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What was on the shelf '
        + 'sometimes? — Too many parts; sometimes none.</span>',
      items: [
        { q: '1. What two numbers did the manager write for each part?',
          accept: ['how many to keep, and the point where they must order more'],
          keys: ['many', 'keep'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. How often did they count the parts they used most?',
          accept: ['every week'],
          keys: ['every', 'week'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the manager say a good store is?',
          accept: ['a store that always has what you need and never runs out of the important '
        + 'things'],
          keys: ['store', 'that'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 2 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) to ask a supplier to send more' },
        { id: 'm-b', label: 'b) the parts a business keeps to use' },
        { id: 'm-c', label: 'c) a liquid that cools the engine' },
        { id: 'm-d', label: 'd) a piece that a car needs' },
        { id: 'm-e', label: 'e) where parts are kept in the store' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'stock', accept: 'm-b',
          why: '<b>stock</b> — the parts a business keeps to use. Keep it apart from '
        + '<i>order</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'order', accept: 'm-a',
          why: '<b>order</b> — to ask a supplier to send more. Keep it apart from '
        + '<i>stock</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'part', accept: 'm-d',
          why: '<b>part</b> — a piece that a car needs. Keep it apart from <i>stock</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'shelf', accept: 'm-e',
          why: '<b>shelf</b> — where parts are kept in the store. Keep it apart from '
        + '<i>stock</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a liquid that cools the engine”, which belongs '
        + 'to nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 2 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: This is similar to Syria because…' }, { q: 'Finish this sentence in your own words: This is different from Syria because…' }, { q: 'Finish this sentence in your own words: The most important part to keep '
        + 'is… because…' }],
      ideas: ['This is similar to Syria because…',
        'This is different from Syria because…',
        'The most important part to keep is… because…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Talk with a partner. Use the frames.',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
