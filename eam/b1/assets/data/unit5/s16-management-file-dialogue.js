/* Unit 5 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s16', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 5.',
  video: 'u05v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 5 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) saying who does a job' },
        { id: 'm-b', label: 'b) giving an instruction' },
        { id: 'm-c', label: 'c) asking about the order' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) stating a rule for the process' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Which car is booked in first?”', accept: 'm-c',
          why: '<b>“Which car is booked in first?”</b> — asking about the order. Keep it '
        + 'apart from <i>“This car is serviced by Nabil.”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't2', num: 2, label: '“This car is serviced by Nabil.”', accept: 'm-a',
          why: '<b>“This car is serviced by Nabil.”</b> — saying who does a job. Keep it '
        + 'apart from <i>“Which car is booked in first?”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't3', num: 3, label: '“Every car is checked before handover.”', accept: 'm-e',
          why: '<b>“Every car is checked before handover.”</b> — stating a rule for the '
        + 'process. Keep it apart from <i>“Which car is booked in first?”</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't4', num: 4, label: '“Put the parts in each bay.”', accept: 'm-b',
          why: '<b>“Put the parts in each bay.”</b> — giving an instruction. Keep it apart '
        + 'from <i>“Which car is booked in first?”</i>, which is a different part of '
        + 'the same system. The meaning left in the pool belongs to nothing on this '
        + 'card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 5 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> what does a manager plan at the start of the '
        + 'day? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u5-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Nabil, let’s plan today. We have six cars. Which is booked in first?',
          '2. Nabil: Mr Aboud’s. It’s a normal service.',
          '3. Maher: Good, you service that one. The second car has a brake problem, '
        + 'so it is diagnosed by Lina first.',
          '4. Nabil: And the other four?',
          '5. Maher: Two are serviced this morning, two this afternoon. Every car is '
        + 'road-tested and checked before it is handed over.',
          '6. Nabil: Understood. I’ll tell Tarek to collect the parts.',
          '7. Maher: Good. A clear plan keeps the day calm.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 5.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 5 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What are they planning? — '
          + 'The day’s work.</span>',
        items: [
          { q: '1. Which car is booked in first?',
            accept: ['mr aboud’s'],
            keys: ['aboud'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Who diagnoses the car with the brake problem?',
            accept: ['lina'],
            keys: ['lina'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What is done to every car before handover?',
            accept: ['it is road-tested and checked'],
            keys: ['road', 'tested'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
