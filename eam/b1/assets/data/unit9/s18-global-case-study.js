/* Unit 9 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s18', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 9.',
  video: 'u09v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 9 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Repair-and-Reuse Business',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the mechanic '
        + 'repair? — Old parts.</span>',
      items: [
        { q: '1. What did most garages do with a failed part?',
          accept: ['they threw it away and fitted a new one'],
          keys: ['they', 'threw'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the mechanic do instead?',
          accept: ['he cleaned, repaired, and rebuilt old parts', 'he cleaned, repaired, and rebuilt old parts (reconditioned parts)'],
          keys: ['cleaned', 'repaired'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did he say a repaired part is?',
          accept: ['not a poor choice — a wise one; reuse is the future'],
          keys: ['poor', 'choice'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 9 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) to fix instead of replace' },
        { id: 'm-b', label: 'b) an old part repaired to work like new' },
        { id: 'm-c', label: 'c) a fluid that cools the engine' },
        { id: 'm-d', label: 'd) a piece that a car needs' },
        { id: 'm-e', label: 'e) to use something again' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'reconditioned', art: 'reconditioned', accept: 'm-b',
          why: '<b>reconditioned</b> — an old part repaired to work like new. Keep it '
        + 'apart from <i>repair</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'repair', art: 'repair', accept: 'm-a',
          why: '<b>repair</b> — to fix instead of replace. Keep it apart from '
        + '<i>reconditioned</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'reuse', accept: 'm-e',
          why: '<b>reuse</b> — to use something again. Keep it apart from '
        + '<i>reconditioned</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'part', accept: 'm-d',
          why: '<b>part</b> — a piece that a car needs. Keep it apart from '
        + '<i>reconditioned</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a fluid that cools the engine”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 9 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: Reconditioned parts are good because…' }, { q: 'Finish this sentence in your own words: In Syria, this is common because…' }, { q: 'Finish this sentence in your own words: Repairing is better than replacing '
        + 'when…' }],
      ideas: ['Reconditioned parts are good because…',
        'In Syria, this is common because…',
        'Repairing is better than replacing when…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Talk with a partner. Use the frames.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
