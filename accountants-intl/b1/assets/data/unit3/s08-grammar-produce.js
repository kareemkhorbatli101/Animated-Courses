/* Unit 3 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Grammar · produce it',
    page: 3,
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
      bookRef: 'Unit 3 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Rewrite the sentences using the modal verb in parentheses.',
      text: '<div style="font-size:16px;line-height:2.4">4. Modal: [[4]] (check) if the receipt is the original document?<br>6. Modal: I [[6]] (pay) the vendor today.</div>',
      answers: {
        '4': ['Could you check if the receipt is the original document?'],
        '6': ['I can pay the vendor today.']
      },
      bank: ['I can pay the vendor today.'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>Could you check if the receipt is the original document?</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>I can pay the vendor today.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Modal: <u>Could you check if the receipt is the original document?</u> (check) if the receipt is the original document?',
      visual: { spot: 'debtor', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 3 · 2D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '2. Modal: May I request the authorization now?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Could you…? is more polite and more formal; Can you…? is neutral and is used with colleagues you know well.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'May I request the authorization now? (the worked example the book gives)',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Requests: May I ask you to…?, Could you please…?, Would you mind…? Offers: I can offer to…, You can…',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'May. It outranks Could and Can because it asks the other person to grant something, rather than asking whether they are able or willing.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            }
          ]
        }
      ],
      visual: { spot: 'entry', caption: 'Grammar · Answer the questions', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 3 · 2E',
      type: 'discuss',
      title: 'Speaking: Formal and Informal Requests',
      instruction: 'In pairs, practice requesting the following items/actions, alternating between formal (May/Could) and informal (Can). There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Request 1: The Financial Controller\'s signature for a EUR 400 expense claim.' },
        { q: 'Formal Example: "May I ask you to approve this claim now, please?"' },
        { q: 'Request 2: The original receipt for a taxi fare from a colleague.' },
        { q: 'Request 3: For the custodian to reconcile the fund at the end of the day.' },
        { q: 'Request 4: To look at the day\'s petty cash vouchers.' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'petty-voucher',
        caption: 'Handling small payments, requesting approvals, dealing with suppliers for low-value goods, and processing reimbursement.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'In pairs, practice requesting the following items/actions, alternating between formal (May/Could) and informal (Can).',
          'Request 1: The Financial Controller\'s signature for a EUR 400 expense claim.',
          'Formal Example: "May I ask you to approve this claim now, please?"',
          'Request 2: The original receipt for a taxi fare from a colleague.'
        ]
      },
      model: 'May I ask you to approve this claim now, please?'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
