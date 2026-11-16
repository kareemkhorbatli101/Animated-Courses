/* Unit 6 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s16', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 6.',
  video: 'u06v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 6 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what an advisor or manager says with its purpose. One purpose is not '
        + 'needed. Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) offering to do something' },
        { id: 'm-b', label: 'b) giving honest advice (no work needed)' },
        { id: 'm-c', label: 'c) giving advice' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) asking the customer to agree' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Your brake pads are worn; you should change them.”', accept: 'm-c',
          why: '<b>“Your brake pads are worn; you should change them.”</b> — giving '
        + 'advice. Keep it apart from <i>“Shall I replace the air filter today?”</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't2', num: 2, label: '“Shall I replace the air filter today?”', accept: 'm-a',
          why: '<b>“Shall I replace the air filter today?”</b> — offering to do something. '
        + 'Keep it apart from <i>“Your brake pads are worn; you should change '
        + 'them.”</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: '“Could you approve the additional work?”', accept: 'm-e',
          why: '<b>“Could you approve the additional work?”</b> — asking the customer to '
        + 'agree. Keep it apart from <i>“Your brake pads are worn; you should change '
        + 'them.”</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: '“You don’t need that big repair.”', accept: 'm-b',
          why: '<b>“You don’t need that big repair.”</b> — giving honest advice (no work '
        + 'needed). Keep it apart from <i>“Your brake pads are worn; you should '
        + 'change them.”</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 6 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> how does a manager approve additional work with '
        + 'a customer? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u6-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Rana: Mr Aboud, the service is done, but we found two things. Your '
        + 'brake pads are worn, so you should change them. And the air filter is '
        + 'dirty.',
          '2. Mr Aboud: How much for both?',
          '3. Rana: The pads are the important one, for safety. Shall I show you the '
        + 'quote?',
          '4. Mr Aboud: Yes, please.',
          '5. Maher: The pads are safety, so we advise you to do them now. The air '
        + 'filter is not urgent — you could wait a month if you like.',
          '6. Mr Aboud: Thank you for being honest. Please do the pads today, and the '
        + 'filter next time.',
          '7. Rana: Certainly. Could you sign here to approve the work?'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 6.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 6 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What did they find? — Worn '
          + 'brake pads and a dirty air filter.</span>',
        items: [
          { q: '1. Which job is important for safety?',
            accept: ['the brake pads'],
            keys: ['brake', 'pads'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Which job can wait?',
            accept: ['the air filter'],
            keys: ['filter'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What does Mr Aboud decide?',
            accept: ['do the pads today, and the filter next time'],
            keys: ['pads', 'today'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
