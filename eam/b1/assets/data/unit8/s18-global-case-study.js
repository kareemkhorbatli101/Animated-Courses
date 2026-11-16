/* Unit 8 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s18', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 8.',
  video: 'u08v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 8 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Honest Recall',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the company order? '
        + '— A recall.</span>',
      items: [
        { q: '1. What did the carmaker find?',
          accept: ['a small but serious fault in thousands of cars'],
          keys: ['small', 'serious'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What two choices did it have?',
          accept: ['stay quiet, or tell everyone and fix the cars for free'],
          keys: ['stay', 'quiet'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. Why did people trust the brand more?',
          accept: ['because the company was honest and put safety first'],
          keys: ['because', 'company'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 8 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) something wrong that needs fixing' },
        { id: 'm-b', label: 'b) when a carmaker asks owners to fix a fault for free' },
        { id: 'm-c', label: 'c) a tool that measures pressure' },
        { id: 'm-d', label: 'd) telling the truth' },
        { id: 'm-e', label: 'e) being safe, free from danger' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'recall', art: 'recall', accept: 'm-b',
          why: '<b>recall</b> — when a carmaker asks owners to fix a fault for free. Keep '
        + 'it apart from <i>fault</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'fault', art: 'fault', accept: 'm-a',
          why: '<b>fault</b> — something wrong that needs fixing. Keep it apart from '
        + '<i>recall</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'safety', accept: 'm-e',
          why: '<b>safety</b> — being safe, free from danger. Keep it apart from '
        + '<i>recall</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'honest', art: 'honest', accept: 'm-d',
          why: '<b>honest</b> — telling the truth. Keep it apart from <i>recall</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that measures pressure”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 8 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: An honest recall is good because…' }, { q: 'Finish this sentence in your own words: Hiding a fault is wrong because…' }, { q: 'Finish this sentence in your own words: Safety must come first because…' }],
      ideas: ['An honest recall is good because…',
        'Hiding a fault is wrong because…',
        'Safety must come first because…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Talk with a partner. Use the frames.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
