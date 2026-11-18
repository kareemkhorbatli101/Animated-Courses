/* Unit 9 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s10', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a savings plan for its goal, its '
  + 'monthly amount and its term, find the perfect and past forms in it, '
  + 'and say whether the plan is realistic.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 9 · 5A',
      visual: { spot: 'savings-goal' },
      type: 'discuss',
      title: 'Simple ways to save',
      instruction: 'Read the customer leaflet. Notice the present perfect and the past '
  + 'simple.<br>Answer the questions.',
      questions: [{
            q: 'What does “paying yourself first” mean in practice?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is an emergency fund important for a saver?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the difference between a good goal and a bad one?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What did the customer do when she missed her target?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the leaflet say the real habit is?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 9 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the leaflet. Find two present perfect verbs and two past '
  + 'simple verbs.<br>Now complete these sentences about the customer.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Present perfect: [[1]] , [[1]]'
        + '<br>'
        + '2. Past simple: [[2]] , [[2]]'
        + '<br>'
        + '3. She [[3]] (save) for three goals since 2021.'
        + '<br>'
        + '4. She [[4]] (miss) her target twice.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 9 · 5C',
      type: 'discuss',
      title: 'Saving and investing — the simple idea',
      instruction: 'Read the short note. What is the one question that decides?',
      questions: [{
            q: 'What is the difference between saving and investing, in one line each?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the one question that decides?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should the answer be if a customer cannot sleep?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
