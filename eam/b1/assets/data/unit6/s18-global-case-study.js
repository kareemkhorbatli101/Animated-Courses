/* Unit 6 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s18', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 6.',
  video: 'u06v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 6 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Service Plan That Kept Customers',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the manager try? — '
        + 'A service plan.</span>',
      items: [
        { q: '1. What was the problem before?',
          accept: ['customers came once and never returned'],
          keys: ['customers', 'came'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the service plan include?',
          accept: ['all routine servicing for a fixed monthly price, on a schedule'],
          keys: ['routine', 'servicing'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the manager say they started selling?',
          accept: ['peace of mind', 'peace of mind (a customer who trusts you is a customer for life)'],
          keys: ['peace', 'mind'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 6 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) a plan of when to do each service' },
        { id: 'm-b', label: 'b) paying a fixed price for regular servicing' },
        { id: 'm-c', label: 'c) a tool that measures pressure' },
        { id: 'm-d', label: 'd) to believe someone is honest and good' },
        { id: 'm-e', label: 'e) regular, done again and again' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'service plan', accept: 'm-b',
          why: '<b>service plan</b> — paying a fixed price for regular servicing. Keep it '
        + 'apart from <i>schedule</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'schedule', art: 'schedule', accept: 'm-a',
          why: '<b>schedule</b> — a plan of when to do each service. Keep it apart from '
        + '<i>service plan</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'routine', accept: 'm-e',
          why: '<b>routine</b> — regular, done again and again. Keep it apart from '
        + '<i>service plan</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'trust', accept: 'm-d',
          why: '<b>trust</b> — to believe someone is honest and good. Keep it apart from '
        + '<i>service plan</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that measures pressure”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 6 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: A service plan is good because…' }, { q: 'Finish this sentence in your own words: In Syria, this could work / not '
        + 'work because…' }, { q: 'Finish this sentence in your own words: The best way to keep a customer is…' }],
      ideas: ['A service plan is good because…',
        'In Syria, this could work / not work because…',
        'The best way to keep a customer is…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Talk with a partner. Use the frames.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
