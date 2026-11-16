/* Unit 9 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s16', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 9.',
  video: 'u09v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 9 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) saying what was done (past)' },
        { id: 'm-b', label: 'b) checking the fault is gone' },
        { id: 'm-c', label: 'c) asking about progress (perfect)' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) deciding about a comeback' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Have you found the cause yet?”', accept: 'm-c',
          why: '<b>“Have you found the cause yet?”</b> — asking about progress (perfect). '
        + 'Keep it apart from <i>“We replaced the pads last week.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't2', num: 2, label: '“We replaced the pads last week.”', accept: 'm-a',
          why: '<b>“We replaced the pads last week.”</b> — saying what was done (past). '
        + 'Keep it apart from <i>“Have you found the cause yet?”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't3', num: 3, label: '“It’s a comeback, so we’ll fix it for free.”', accept: 'm-e',
          why: '<b>“It’s a comeback, so we’ll fix it for free.”</b> — deciding about a '
        + 'comeback. Keep it apart from <i>“Have you found the cause yet?”</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't4', num: 4, label: '“Have you road-tested it again?”', accept: 'm-b',
          why: '<b>“Have you road-tested it again?”</b> — checking the fault is gone. Keep '
        + 'it apart from <i>“Have you found the cause yet?”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 9 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> how does a manager handle a car that has come '
        + 'back? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u9-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Lina, Mr Aboud’s car has come back with the same noise. Have you '
        + 'diagnosed it?',
          '2. Lina: Yes, I checked it this morning.',
          '3. Maher: What did we do last week?',
          '4. Lina: We replaced the brake pads. That repair was correct.',
          '5. Maher: So why has the noise come back?',
          '6. Lina: A different part has failed — a small clip near the pads. It '
        + 'wasn’t the pads.',
          '7. Maher: I see. It’s a comeback, so we fix it for free. Have you ordered '
        + 'the clip?',
          '8. Lina: Yes, it arrived an hour ago. I’ll fit it and road-test the car again.',
          '9. Maher: Good. Let’s make sure it doesn’t come back a third time.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 9.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 9 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. Whose car has come back? — '
          + 'Mr Aboud’s.</span>',
        items: [
          { q: '1. What did they do last week?',
            accept: ['they replaced the brake pads'],
            keys: ['they', 'replaced'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Why has the noise come back?',
            accept: ['a different part (a small clip) has failed'],
            keys: ['different', 'part'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What will Lina do now?',
            accept: ['fit the clip and road-test the car again'],
            keys: ['clip', 'road'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
