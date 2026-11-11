/* Unit 5 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Grammar · produce it',
    page: 5,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 5 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Rewrite the sentences using the Future Form in parentheses.',
      text: '<div style="font-size:16px;line-height:2.4">4. Future Form: The client [[4]] late.<br>6. Future Form: We [[6]] the bank statement next Friday.</div>',
      answers: {
        '4': ['The client is going to pay late.'],
        '6': ['We are reconciling the bank statement next Friday.']
      },
      bank: ['The client is going to pay late.'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>The client is going to pay late.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>We are reconciling the bank statement next Friday.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Future Form: The client <u>The client is going to pay late.</u> late.',
      brief: 'Rewrite each sentence. The meaning must survive the change — if it does not, you have changed more than the grammar.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 5 · 2E',
      type: 'discuss',
      title: 'Speaking: Discussing Future Financial Actions',
      instruction: 'In pairs, practice using the three Future Forms for these scenarios. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Scenario 1 (Fixed Arrangement): A meeting with the Collections Agency on Monday.' },
        { q: 'Example: "I am meeting the Collections Agency on Monday at 10 AM."' },
        { q: 'Scenario 2 (Prediction): You think the new credit terms will reduce bad debt.' },
        {
          q: 'Scenario 3 (Intention/Plan): Your plan to prepare the payment run first thing tomorrow.'
        },
        {
          q: 'Scenario 4 (Instant Decision/Offer): Your colleague says they can\'t clear the account. You offer to do it.'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'payment-run',
        caption: 'Scheduling payments, chasing debts, managing collections, and cash flow planning across currencies.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'In pairs, practice using the three Future Forms for these scenarios.',
          'Scenario 1 (Fixed Arrangement): A meeting with the Collections Agency on Monday.',
          'Example: "I am meeting the Collections Agency on Monday at 10 AM."',
          'Scenario 2 (Prediction): You think the new credit terms will reduce bad debt.'
        ]
      },
      model: 'I am meeting the Collections Agency on Monday at 10 AM.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
