/* Unit 10 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s18', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 10.',
  video: 'u10v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 10 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — Launching Service for a New Model',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What must be ready before '
        + 'the first car arrives? — The service departments.</span>',
      items: [
        { q: '1. What did the manufacturer send before the launch?',
          accept: ['a technical update about the new model'],
          keys: ['technical', 'update'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did it ask each dealer to do?',
          accept: ['to send one mechanic for special training'],
          keys: ['send', 'mechanic'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the manufacturer say a launch is really about?',
          accept: ['promising the customer that they will look after the car for years'],
          keys: ['promising', 'customer'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 10 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) a note about how a new model works' },
        { id: 'm-b', label: 'b) when a new model is first sold' },
        { id: 'm-c', label: 'c) a fluid that cools the engine' },
        { id: 'm-d', label: 'd) an authorised garage that sells and services a brand' },
        { id: 'm-e', label: 'e) learning new skills for the job' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'launch', accept: 'm-b',
          why: '<b>launch</b> — when a new model is first sold. Keep it apart from '
        + '<i>technical update</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'technical update', art: 'technical update', accept: 'm-a',
          why: '<b>technical update</b> — a note about how a new model works. Keep it '
        + 'apart from <i>launch</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'training', art: 'training', accept: 'm-e',
          why: '<b>training</b> — learning new skills for the job. Keep it apart from '
        + '<i>launch</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'dealer', accept: 'm-d',
          why: '<b>dealer</b> — an authorised garage that sells and services a brand. Keep '
        + 'it apart from <i>launch</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a fluid that cools the engine”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 10 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: Training before a launch is '
        + 'important because…' }, { q: 'Finish this sentence in your own words: In Syria, this could be hard because…' }, { q: 'Finish this sentence in your own words: A launch is really a promise to…' }],
      ideas: ['Training before a launch is important because…',
        'In Syria, this could be hard because…',
        'A launch is really a promise to…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'Talk with a partner. Use the frames.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
