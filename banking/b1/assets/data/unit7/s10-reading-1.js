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
      type: 'discuss',
      title: 'Stay safe: security tips',
      instruction: 'Read the customer leaflet. Notice the conditionals.<br>Answer the questions.',
      questions: [{
            q: 'What does the leaflet say about anyone who asks for a code?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does fraud work on hurry?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which number should a customer call to check a call?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why should a customer look at the statement each week?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the difference between reporting in the first hour and '
              + 'waiting a week?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
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
      type: 'discuss',
      title: 'A close call',
      instruction: 'Read the short story. What stopped the fraud?',
      questions: [{
            q: 'What did the caller already know about her?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What one question did she ask?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What was the caller’s answer, and why did it matter?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
