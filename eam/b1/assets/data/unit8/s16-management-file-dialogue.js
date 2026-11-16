/* Unit 8 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s16', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 8.',
  video: 'u08v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 8 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) giving a strong prohibition' },
        { id: 'm-b', label: 'b) checking the work is done' },
        { id: 'm-c', label: 'c) stating a rule (obligation)' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) explaining a warranty rule' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Every car must pass the road test.”', accept: 'm-c',
          why: '<b>“Every car must pass the road test.”</b> — stating a rule (obligation). '
        + 'Keep it apart from <i>“You mustn’t hand over a car with a fault.”</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't2', num: 2, label: '“You mustn’t hand over a car with a fault.”', accept: 'm-a',
          why: '<b>“You mustn’t hand over a car with a fault.”</b> — giving a strong '
        + 'prohibition. Keep it apart from <i>“Every car must pass the road '
        + 'test.”</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: '“Under warranty, we have to use genuine parts.”', accept: 'm-e',
          why: '<b>“Under warranty, we have to use genuine parts.”</b> — explaining a '
        + 'warranty rule. Keep it apart from <i>“Every car must pass the road '
        + 'test.”</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: '“Did you sign off every job?”', accept: 'm-b',
          why: '<b>“Did you sign off every job?”</b> — checking the work is done. Keep it '
        + 'apart from <i>“Every car must pass the road test.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 8 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> what does a manager check before a car is handed '
        + 'over? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u8-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Maher, this car is ready for handover, but I want you to check it.',
          '2. Maher: Good. Did it pass the road test?',
          '3. Nabil: Yes, it’s safe. But there’s a small mark on the door from the '
        + 'repair.',
          '4. Maher: Then we mustn’t hand it over yet. Every car has to leave perfect.',
          '5. Nabil: I can fix the mark today.',
          '6. Maher: Do that first. And did you sign off every job on the sheet?',
          '7. Nabil: All except the final one.',
          '8. Maher: Sign it after you fix the mark. We must never hand over a car '
        + 'with a defect, even a small one.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 8.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 8 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What does Nabil want Maher '
          + 'to do? — Check the car before handover.</span>',
        items: [
          { q: '1. Did the car pass the road test?',
            accept: ['yes, it is safe'],
            keys: ['safe'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What is the problem?',
            accept: ['a small mark on the door'],
            keys: ['small', 'mark'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What must Nabil do before handover?',
            accept: ['fix the mark and sign off the final job'],
            keys: ['mark', 'sign'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
