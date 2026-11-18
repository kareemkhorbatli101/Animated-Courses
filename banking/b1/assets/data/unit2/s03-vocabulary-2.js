/* Unit 2 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s03', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s polite service phrases, '
  + 'sort them by what they do, rewrite a blunt sentence as a professional '
  + 'one, and write about a good service moment using at least five of the '
  + 'words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 2 · 1D',
      visual: { spot: 'queue' },
      type: 'discuss',
      title: 'Make it polite (rewrite)',
      instruction: 'These sentences are too direct. Rewrite each one to be polite and '
  + 'professional.',
      questions: [{
            q: '“Sign it now.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“Wait.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“What do you want?”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“I need your phone number.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“You’re wrong. That’s not the rule.”',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 2 · 1E',
      type: 'dragmatch',
      title: 'Key customer-service terms',
      instruction: 'Match the term to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a person who uses the bank’s services' },
      { id: 'm-b', label: 'b) an action like a deposit, withdrawal or transfer' },
      { id: 'm-c', label: 'c) a question asking for information' },
      { id: 'm-d', label: 'd) the official series of steps to do something' },
      { id: 'm-e', label: 'e) to check that something is true' },
      { id: 'm-f', label: 'f) to give official permission' },
      { id: 'm-g', label: 'g) a written complaint (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'client / customer', accept: 'm-a',
          why: '<b>client / customer</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'transaction', accept: 'm-a',
          why: '<b>transaction</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'inquiry', accept: 'm-a',
          why: '<b>inquiry</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'procedure', accept: 'm-a',
          why: '<b>procedure</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'to verify', accept: 'm-a',
          why: '<b>to verify</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'to authorise', accept: 'm-a',
          why: '<b>to authorise</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '1F',
      bookRef: 'Unit 2 · 1F',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Describe a good customer-service moment at a bank. Use at least five '
  + 'words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ '
  + 'Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['Yesterday a customer had an inquiry about a transaction. The teller '
        + 'was polite and asked to verify her ID. She explained the procedure '
        + 'clearly and helped her open a new account. The customer left happy.'],
      coach: {
        title: 'Check before you finish',
        task: 'Describe a good customer-service moment at a bank. Use at least five '
  + 'words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear '
  + 'sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
