/* Unit 7 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s08', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can warn a customer without frightening '
  + 'them, advise what to do next in a clear order, and refuse a request '
  + 'that would breach security while keeping the customer\'s trust.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 7 · 4A',
      visual: { spot: 'phishing' },
      type: 'dragmatch',
      title: 'Functional language — warning and advising',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “If you share that code, anyone can use your account.”' },
      { id: 'm-b', label: 'b) “I would call the number on your card.”' },
      { id: 'm-c', label: 'c) “Nobody here will blame you.”' },
      { id: 'm-d', label: 'd) “I will block the card now.”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Warn', accept: 'm-a',
          why: '<b>Warn</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Advise', accept: 'm-a',
          why: '<b>Advise</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Reassure', accept: 'm-a',
          why: '<b>Reassure</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Act', accept: 'm-a',
          why: '<b>Act</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 7 · 4B',
      type: 'report',
      title: 'Advise a worried customer (pairwork)',
      instruction: 'Advise a customer who thinks they have been tricked. Then swap '
  + 'roles.<br>Card A (staff): thank them · act first · explain with a '
  + 'conditional · say what happens next.<br>Card B (customer): you '
  + 'clicked a link last night and typed your password; you are '
  + 'embarrassed and frightened.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: Thank you for telling us. If you typed your password, we will '
        + 'change it now. — B: Will I lose the money? — A: If a payment appears, '
        + 'we will refund it. Let me block the card first.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 7 · 4C',
      type: 'study',
      title: 'Help someone stay calm',
      html: '<p>“Let’s take one thing at a time. First, I am blocking the card — '
      + 'that is done. Now, if you tell me when you last used it, we can check '
      + 'everything after that.”</p>',
      instruction: 'A customer is panicking on the phone. Slow the conversation down and '
  + 'take the first step.<br>Stretch: the customer blames themselves — '
  + 'reassure them without making a promise you cannot keep.',
      doneLabel: 'I have read this'
    }
  ]
});
