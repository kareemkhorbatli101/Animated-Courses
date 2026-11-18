/* Unit 4 §14 — Management File — Briefing the Team on a New Product.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s14', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 7 · Management File — Briefing the Team on a New Product', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Briefing the Team on a New Product', title: 'Part 7 · Management File — Briefing the Team on a New Product' },
  objective: 'By the end of Part 7 you can brief a team on a new product as a '
  + 'manager does: say what it is for, what has changed, what staff must '
  + 'tell customers, and what they must not promise.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 4 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Briefing and target phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) announcing something new' },
      { id: 'm-b', label: 'b) naming what has changed' },
      { id: 'm-c', label: 'c) setting a goal for the team' },
      { id: 'm-d', label: 'd) giving staff the exact words' },
      { id: 'm-e', label: 'e) closing a complaint (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“From Monday we are offering…”', accept: 'm-a',
          why: '<b>“From Monday we are offering…”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“The main difference is…”', accept: 'm-a',
          why: '<b>“The main difference is…”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Our target is twenty a week.”', accept: 'm-a',
          why: '<b>“Our target is twenty a week.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“If a customer asks about fees, say…”', accept: 'm-a',
          why: '<b>“If a customer asks about fees, say…”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 4 · 7B',
      type: 'study',
      title: 'Listening — briefing the team — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Marta:</b> Good morning, everyone. From '
      + 'Monday we are offering a new account, the Step Saver '
      + 'Plus.</p><p><b>Ana:</b> How is it different from the Step '
      + 'Saver?</p><p><b>Marta:</b> The main difference is the rate: it is '
      + 'half a point higher, but you may withdraw only once a '
      + 'year.</p><p><b>Ana:</b> And our target?</p><p><b>Marta:</b> Twenty '
      + 'new accounts a week across the branch. If a customer asks about fees, '
      + 'say there are none, but the withdrawal limit is strict.</p></div>',
      playable: ['Good morning, everyone. From Monday we are offering a new account, '
        + 'the Step Saver Plus.',
      'How is it different from the Step Saver?',
      'The main difference is the rate: it is half a point higher, but you '
        + 'may withdraw only once a year.',
      'And our target?',
      'Twenty new accounts a week across the branch. If a customer asks '
        + 'about fees, say there are none, but the withdrawal limit is strict.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 4 · 7B',
      type: 'discuss',
      title: 'Listening — briefing the team',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What is the main difference from the Step Saver?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the team’s target?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should staff say if a customer asks about fees?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 4 · 7C',
      type: 'cloze',
      title: 'Controlled practice — the product comparison',
      instruction: 'Complete the briefing note. Use the correct comparative or superlative.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The Step Saver Plus pays a [[1]] rate than the Step Saver.'
        + '<br>'
        + '2. It is [[2]] flexible, because there is only one withdrawal a year.'
        + '<br>'
        + '3. For long-term money it is [[3]] than the Everyday Saver.'
        + '<br>'
        + '4. It has the [[4]] withdrawal rule of all our accounts.'
        + '<br>'
        + '5. The Fixed 12 is still [[5]] generous account we offer.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['better',
      'higher',
      'less',
      'strictest',
      'the most'],
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
    }
  ]
});
