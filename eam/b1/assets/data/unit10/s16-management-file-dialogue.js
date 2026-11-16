/* Unit 10 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s16', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 10.',
  video: 'u10v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 10 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a manager says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) reporting an instruction' },
        { id: 'm-b', label: 'b) giving an instruction now' },
        { id: 'm-c', label: 'c) reporting a statement' },
        { id: 'm-d', label: 'd) asking about the weather' },
        { id: 'm-e', label: 'e) reporting a question' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“The customer said the car was fixed.”', accept: 'm-c',
          why: '<b>“The customer said the car was fixed.”</b> — reporting a statement. '
        + 'Keep it apart from <i>“The manufacturer told us to update the '
        + 'software.”</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: '“The manufacturer told us to update the software.”', accept: 'm-a',
          why: '<b>“The manufacturer told us to update the software.”</b> — reporting an '
        + 'instruction. Keep it apart from <i>“The customer said the car was '
        + 'fixed.”</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: '“He asked if the car was ready.”', accept: 'm-e',
          why: '<b>“He asked if the car was ready.”</b> — reporting a question. Keep it '
        + 'apart from <i>“The customer said the car was fixed.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't4', num: 4, label: '“Please send a service reminder.”', accept: 'm-b',
          why: '<b>“Please send a service reminder.”</b> — giving an instruction now. Keep '
        + 'it apart from <i>“The customer said the car was fixed.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' }
      ],
      after: 'The meaning left over is “asking about the weather”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 10 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> how does a manager prepare the news for a team '
        + 'meeting? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u10-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Rana, let’s prepare for the team meeting. What did the customers '
        + 'say this week?',
          '2. Rana: Mr Aboud said he was very happy, and he recommended us to his '
        + 'brother. Two other customers said the service was fast.',
          '3. Maher: Good news. And the manufacturer?',
          '4. Rana: They sent a bulletin. It told us to update the software on the '
        + 'new model, and it asked us to record every update.',
          '5. Maher: And they announced a campaign, didn’t they?',
          '6. Rana: Yes, a free safety check for all new-model owners.',
          '7. Maher: Then please send a service reminder to every owner. I’ll tell '
        + 'the team at the meeting.',
          '8. Rana: I’ll prepare the list today.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 10.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 10 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What are they preparing '
          + 'for? — The team meeting.</span>',
        items: [
          { q: '1. What did Mr Aboud say?',
            accept: ['he said he was very happy and recommended them to his brother'],
            keys: ['said', 'very'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What did the bulletin tell them to do?',
            accept: ['to update the software', 'to update the software (and record every update)'],
            keys: ['update', 'software'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What is the campaign?',
            accept: ['a free safety check for all new-model owners'],
            keys: ['free', 'safety'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
