/* Unit 1 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s10', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a bank\'s company profile for its '
  + 'standing facts and its current plans, say which tense carries which, '
  + 'and describe a colleague\'s role from a short staff profile.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 1 · 5A',
      visual: { spot: 'branch-plan' },
      type: 'dragmatch',
      title: 'Welcome to Harbour Bank',
      instruction: 'Read the company profile. Notice the present simple (facts) and '
  + 'present continuous (current plans).<br>Answer the '
  + 'questions.<br>Vocabulary in context — match the word to its meaning '
  + '(one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) small and medium enterprises' },
      { id: 'm-b', label: 'b) online and mobile banking services' },
      { id: 'm-c', label: 'c) small loans for low-income business owners' },
      { id: 'm-d', label: 'd) a local office of the bank' },
      { id: 'm-e', label: 'e) a person who starts a business' },
      { id: 'm-f', label: 'f) money paid on savings (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'SME', accept: 'm-a',
          why: '<b>SME</b> &mdash; small and medium enterprises' },
      { id: 't2', num: 2, label: 'digital banking', accept: 'm-b',
          why: '<b>digital banking</b> &mdash; online and mobile banking services' },
      { id: 't3', num: 3, label: 'microfinance', accept: 'm-c',
          why: '<b>microfinance</b> &mdash; small loans for low-income business owners' },
      { id: 't4', num: 4, label: 'branch', accept: 'm-d',
          why: '<b>branch</b> &mdash; a local office of the bank' },
      { id: 't5', num: 5, label: 'entrepreneur', accept: 'm-e',
          why: '<b>entrepreneur</b> &mdash; a person who starts a business' }]
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 1 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the Harbour Bank text. Find and write two present-simple '
  + 'verbs and two present-continuous verbs.<br>Now complete these '
  + 'sentences about the bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Present-simple verbs: [[1]] , [[1]]'
        + '<br>'
        + '2. Present-continuous verbs: [[2]] , [[2]]'
        + '<br>'
        + '3. Harbour Bank [[3]] (have) branches in five cities.'
        + '<br>'
        + '4. Right now, the bank [[4]] (invest) in new online tools.'
        + '</div>',
      answers: {
        '1': ['has'],
        '2': ['is investing'],
        '3': ['has'],
        '4': ['is investing']
      },
      bank: ['has',
      'is investing'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>has</b>.',
        '2': '<b>is investing</b>.',
        '3': '<b>has</b>.',
        '4': '<b>is investing</b>.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      type: 'discuss',
      title: 'Meet a team member',
      instruction: 'Read the short profile. What does Priya do every day, and what is she '
  + 'doing this week?',
      questions: [{
            q: 'Where does Priya work, and what is her job?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is Priya’s main job with business clients?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What two things is Priya doing this week?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
