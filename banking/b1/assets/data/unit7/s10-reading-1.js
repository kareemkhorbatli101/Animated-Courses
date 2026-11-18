/* Unit 7 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s10', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a security notice for the rule and '
  + 'the reason behind it, find the conditionals that carry it, and say '
  + 'what a customer should do first.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 7 · 5A',
      visual: { spot: 'phishing' },
      type: 'shortanswer',
      title: 'Stay safe: security tips',
      instruction: 'Read the customer leaflet. Notice the conditionals.<br>Answer the questions.',
      items: [{ q: '1. What does the leaflet say about anyone who asks for a code?',
          accept: ['What does the leaflet say about anyone who asks for a code?'],
          keys: ['leaflet',
              'about'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why does fraud work on hurry?',
          accept: ['Why does fraud work on hurry?'],
          keys: ['fraud',
              'hurry'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Which number should a customer call to check a call?',
          accept: ['Which number should a customer call to check a call?'],
          keys: ['which',
              'number'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. Why should a customer look at the statement each week?',
          accept: ['Why should a customer look at the statement each week?'],
          keys: ['should',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. What is the difference between reporting in the first hour and '
              + 'waiting a week?',
          accept: ['What is the difference between reporting in the first hour and '
                + 'waiting a week?'],
          keys: ['difference',
              'between'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 7 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the leaflet. Find two zero conditionals and one first '
  + 'conditional.<br>Now complete these sentences about safety.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Zero conditional 1: [[1]]'
        + '<br>'
        + '2. Zero conditional 2: [[2]]'
        + '<br>'
        + '3. First conditional: [[3]]'
        + '<br>'
        + '4. If you [[4]] (cover) the keypad, nobody can see your PIN.'
        + '<br>'
        + '5. If you report it today, we [[5]] (can) stop the payment.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
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
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 7 · 5C',
      type: 'shortanswer',
      title: 'A close call',
      instruction: 'Read the short story. What stopped the fraud?',
      items: [{ q: '1. What did the caller already know about her?',
          accept: ['What did the caller already know about her?'],
          keys: ['caller',
              'already'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What one question did she ask?',
          accept: ['What one question did she ask?'],
          keys: ['question'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What was the caller’s answer, and why did it matter?',
          accept: ['What was the caller’s answer, and why did it matter?'],
          keys: ['caller',
              'answer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
