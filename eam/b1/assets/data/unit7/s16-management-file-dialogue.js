/* Unit 7 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s16', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 7.',
  video: 'u07v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 7 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) making a promise' },
        { id: 'm-b', label: 'b) a fixed arrangement' },
        { id: 'm-c', label: 'c) stating a plan' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) asking about the schedule' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“We’re going to order the parts on Monday.”', accept: 'm-c',
          why: '<b>“We’re going to order the parts on Monday.”</b> — stating a plan. Keep '
        + 'it apart from <i>“I’ll call you the moment it arrives.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't2', num: 2, label: '“I’ll call you the moment it arrives.”', accept: 'm-a',
          why: '<b>“I’ll call you the moment it arrives.”</b> — making a promise. Keep it '
        + 'apart from <i>“We’re going to order the parts on Monday.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't3', num: 3, label: '“The van is arriving on Wednesday.”', accept: 'm-b',
          why: '<b>“The van is arriving on Wednesday.”</b> — a fixed arrangement. Keep it '
        + 'apart from <i>“We’re going to order the parts on Monday.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't4', num: 4, label: '“Which car will be ready first?”', accept: 'm-e',
          why: '<b>“Which car will be ready first?”</b> — asking about the schedule. Keep '
        + 'it apart from <i>“We’re going to order the parts on Monday.”</i>, which is '
        + 'a different part of the same system. The meaning left in the pool belongs '
        + 'to nothing on this card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 7 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> how does a manager plan a big job across the '
        + 'week? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u7-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Rana, we have a big job this week — a van with a gearbox problem.',
          '2. Rana: When is it coming in?',
          '3. Maher: On Wednesday. Lina is going to diagnose it first. We’re waiting '
        + 'for two parts.',
          '4. Rana: When will they arrive?',
          '5. Maher: They’re going to arrive on Thursday, so we’ll finish on Friday. '
        + 'Please give the customer a realistic ready time — Friday afternoon.',
          '6. Rana: I’ll call him now. And a courtesy car?',
          '7. Maher: Yes, offer him one; the job will take three days.',
          '8. Rana: I’ll arrange it.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 7.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 7 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is the big job? — A '
          + 'van with a gearbox problem.</span>',
        items: [
          { q: '1. When is the van coming in?',
            accept: ['on wednesday'],
            keys: ['wednesday'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. When will the parts arrive?',
            accept: ['on thursday'],
            keys: ['thursday'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What will Rana offer the customer?',
            accept: ['a courtesy car'],
            keys: ['courtesy'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
