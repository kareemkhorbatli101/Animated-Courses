/* Unit 2 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s16', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 2.',
  video: 'u02v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 2 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) asking about quantity (countable)' },
        { id: 'm-b', label: 'b) explaining why it matters' },
        { id: 'm-c', label: 'c) asking about quantity (uncountable)' },
        { id: 'm-d', label: 'd) welcoming a new worker' },
        { id: 'm-e', label: 'e) giving an instruction to buy' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“How much coolant do we have?”', accept: 'm-c',
          why: '<b>“How much coolant do we have?”</b> — asking about quantity '
        + '(uncountable). Keep it apart from <i>“How many filters are left?”</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't2', num: 2, label: '“How many filters are left?”', accept: 'm-a',
          why: '<b>“How many filters are left?”</b> — asking about quantity (countable). '
        + 'Keep it apart from <i>“How much coolant do we have?”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't3', num: 3, label: '“Please order more oil.”', accept: 'm-e',
          why: '<b>“Please order more oil.”</b> — giving an instruction to buy. Keep it '
        + 'apart from <i>“How much coolant do we have?”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't4', num: 4, label: '“We can’t start without the parts.”', accept: 'm-b',
          why: '<b>“We can’t start without the parts.”</b> — explaining why it matters. '
        + 'Keep it apart from <i>“How much coolant do we have?”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' }
      ],
      after: 'The meaning left over is “welcoming a new worker”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 2 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> what does a manager ask about when checking the '
        + 'stock? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u2-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Nabil, let’s check the stock before the customers arrive. How '
        + 'much oil do we have?',
          '2. Nabil: There is plenty of oil — about ten litres.',
          '3. Maher: Good. How many oil filters are there?',
          '4. Nabil: There are only two left.',
          '5. Maher: That isn’t many. We have five services today. Please order ten.',
          '6. Nabil: And there isn’t much coolant — only one bottle.',
          '7. Maher: Order some coolant too. We can’t service a car without the right '
        + 'parts.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 2.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 2 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. When do they check the '
          + 'stock? — Before the customers arrive.</span>',
        items: [
          { q: '1. How much oil is there?',
            accept: ['plenty (about ten litres)', 'plenty'],
            keys: ['plenty'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. How many oil filters are left?',
            accept: ['only two'],
            keys: ['only'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What must Nabil order?',
            accept: ['ten oil filters and some coolant'],
            keys: ['filters', 'some'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
