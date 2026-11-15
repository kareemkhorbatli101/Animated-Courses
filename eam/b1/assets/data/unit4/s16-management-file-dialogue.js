/* Unit 4 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s16', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 4.',
  video: 'u04v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 4 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) comparing two readings' },
        { id: 'm-b', label: 'b) giving an instruction' },
        { id: 'm-c', label: 'c) asking for the top or extreme (superlative)' },
        { id: 'm-d', label: 'd) welcoming a customer' },
        { id: 'm-e', label: 'e) checking if a reading is correct' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Which tyre is the most worn?”', accept: 'm-c',
          why: '<b>“Which tyre is the most worn?”</b> — asking for the top or extreme '
        + '(superlative). Keep it apart from <i>“Is this reading within the '
        + 'tolerance?”</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: '“Is this reading within the tolerance?”', accept: 'm-e',
          why: '<b>“Is this reading within the tolerance?”</b> — checking if a reading is '
        + 'correct. Keep it apart from <i>“Which tyre is the most worn?”</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't3', num: 3, label: '“This battery is lower than last time.”', accept: 'm-a',
          why: '<b>“This battery is lower than last time.”</b> — comparing two readings. '
        + 'Keep it apart from <i>“Which tyre is the most worn?”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't4', num: 4, label: '“Change the rear left tyre.”', accept: 'm-b',
          why: '<b>“Change the rear left tyre.”</b> — giving an instruction. Keep it apart '
        + 'from <i>“Which tyre is the most worn?”</i>, which is a different part of '
        + 'the same system. The meaning left in the pool belongs to nothing on this '
        + 'card.' }
      ],
      after: 'The meaning left over is “welcoming a customer”, which belongs to nothing '
        + 'on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 4 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> what does a manager check on a diagnostic '
        + 'report? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u4-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Lina, let’s look at this diagnostic report together. How is the '
        + 'battery?',
          '2. Lina: It’s low — 12.1 volts. The tolerance is 12.4 to 12.7, so it’s '
        + 'below the tolerance.',
          '3. Maher: And the tyres?',
          '4. Lina: The rear left is the most worn, only two millimetres. The others '
        + 'are fine.',
          '5. Maher: Is anything else outside the tolerance?',
          '6. Lina: No, the pressure and temperature are within the limits.',
          '7. Maher: Good work. Charge the battery and change the rear left tyre. The '
        + 'report is clear.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 4.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 4 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What are they looking at? — '
          + 'The diagnostic report.</span>',
        items: [
          { q: '1. What is the battery voltage, and is it within the tolerance?',
            accept: ['12.1 volts; no, it is below the tolerance'],
            keys: ['volts', 'below'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Which tyre is the most worn?',
            accept: ['the rear left'],
            keys: ['rear', 'left'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What does Maher tell Lina to do?',
            accept: ['charge the battery and change the rear left tyre'],
            keys: ['charge', 'battery'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
