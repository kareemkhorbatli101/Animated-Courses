/* Unit 2 §14 — Management File — Coaching Your Team on Service.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s14', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 7 · Management File — Coaching Your Team on Service', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Coaching Your Team on Service', title: 'Part 7 · Management File — Coaching Your Team on Service' },
  objective: 'By the end of Part 7 you can coach a team member on service as a '
  + 'manager does: give feedback that names the behaviour rather than the '
  + 'person, model the phrase you want to hear, and agree what changes '
  + 'next week.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 2 · 7A',
      visual: { spot: 'org-chart' },
      type: 'cloze',
      title: 'Feedback phrases — praise or improvement?',
      instruction: 'Put each phrase into the correct group: Praise or Suggestion for '
  + 'improvement.<br>Phrases: “You handled that very well.” · “One thing '
  + 'to try next time is…” · “Your greeting was friendly.” · “Let’s work '
  + 'on staying calm with upset customers.”',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Praise: [[1]]'
        + '<br>'
        + '2. Suggestion: [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 2 · 7B',
      type: 'study',
      title: 'Listening — giving feedback after a hard customer — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Marta:</b> Ana, you did well with that '
      + 'difficult customer. You stayed calm.</p><p><b>Ana:</b> Thank you. I '
      + 'was a little nervous.</p><p><b>Marta:</b> That’s normal. Your '
      + 'greeting was friendly, and you apologised nicely.</p><p><b>Ana:</b> '
      + 'Is there anything I should improve?</p><p><b>Marta:</b> One thing to '
      + 'try next time is to explain the next step earlier. That helps the '
      + 'customer feel calm.</p><p><b>Ana:</b> That’s good advice. Thank you, '
      + 'Ms Nowak.</p></div>',
      playable: ['Ana, you did well with that difficult customer. You stayed calm.',
      'Thank you. I was a little nervous.',
      'That’s normal. Your greeting was friendly, and you apologised nicely.',
      'Is there anything I should improve?',
      'One thing to try next time is to explain the next step earlier. That '
        + 'helps the customer feel calm.',
      'That’s good advice. Thank you, Ms Nowak.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 2 · 7B',
      type: 'discuss',
      title: 'Listening — giving feedback after a hard customer',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What did Ana do well?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How did Ana feel during the conversation?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should Ana try next time?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 2 · 7C',
      type: 'discuss',
      title: 'Turn blunt feedback into supportive feedback',
      instruction: 'Rewrite each blunt comment so it is supportive and kind.',
      questions: [{
            q: '“You were too slow.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“You forgot to greet the customer.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“Your explanation was confusing.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“You didn’t listen to the customer.”',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
