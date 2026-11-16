/* Unit 7 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s18', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 7.',
  video: 'u07v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 7 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Garage You Can See Online',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the centre build? '
        + '— A simple online system.</span>',
      items: [
        { q: '1. What was the problem before?',
          accept: ['customers called all day to ask if the car was ready; the phones were busy'],
          keys: ['customers', 'called'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What could the customer see on their phone?',
          accept: ['exactly where their car was in the process', 'exactly where their car was in the process (and the estimate)'],
          keys: ['exactly', 'where'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the manager say people mind?',
          accept: ['they don’t mind waiting; they mind not knowing'],
          keys: ['they', 'mind'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 7 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) a saved time for a service' },
        { id: 'm-b', label: 'b) using the internet or a phone app' },
        { id: 'm-c', label: 'c) a fluid that cools the engine' },
        { id: 'm-d', label: 'd) to agree to the work' },
        { id: 'm-e', label: 'e) a paper or screen showing the price' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'online', accept: 'm-b',
          why: '<b>online</b> — using the internet or a phone app. Keep it apart from '
        + '<i>booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'booking', art: 'booking', accept: 'm-a',
          why: '<b>booking</b> — a saved time for a service. Keep it apart from '
        + '<i>online</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'estimate', art: 'estimate', accept: 'm-e',
          why: '<b>estimate</b> — a paper or screen showing the price. Keep it apart from '
        + '<i>online</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'approve', accept: 'm-d',
          why: '<b>approve</b> — to agree to the work. Keep it apart from <i>online</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a fluid that cools the engine”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 7 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: An online system helps because…' }, { q: 'Finish this sentence in your own words: In Syria, this could work / be '
        + 'hard because…' }, { q: 'Finish this sentence in your own words: The best way to keep a customer '
        + 'informed is…' }],
      ideas: ['An online system helps because…',
        'In Syria, this could work / be hard because…',
        'The best way to keep a customer informed is…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Talk with a partner. Use the frames.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
