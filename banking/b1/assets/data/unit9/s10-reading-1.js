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
      type: 'shortanswer',
      title: 'Simple ways to save',
      instruction: 'Read the customer leaflet. Notice the present perfect and the past '
  + 'simple.<br>Answer the questions.',
      items: [{ q: '1. What does “paying yourself first” mean in practice?',
          accept: ['What does “paying yourself first” mean in practice?'],
          keys: ['paying',
              'yourself'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why is an emergency fund important for a saver?',
          accept: ['Why is an emergency fund important for a saver?'],
          keys: ['emergency',
              'important'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is the difference between a good goal and a bad one?',
          accept: ['What is the difference between a good goal and a bad one?'],
          keys: ['difference',
              'between'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What did the customer do when she missed her target?',
          accept: ['What did the customer do when she missed her target?'],
          keys: ['customer',
              'missed'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. What does the leaflet say the real habit is?',
          accept: ['What does the leaflet say the real habit is?'],
          keys: ['leaflet',
              'habit'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
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
      type: 'shortanswer',
      title: 'Saving and investing — the simple idea',
      instruction: 'Read the short note. What is the one question that decides?',
      items: [{ q: '1. What is the difference between saving and investing, in one line each?',
          accept: ['What is the difference between saving and investing, in one line each?'],
          keys: ['difference',
              'between'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What is the one question that decides?',
          accept: ['What is the one question that decides?'],
          keys: ['question',
              'decides'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What should the answer be if a customer cannot sleep?',
          accept: ['What should the answer be if a customer cannot sleep?'],
          keys: ['should',
              'answer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
