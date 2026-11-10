/* Unit 6 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Reading 3',
    page: 6,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Fraud Prevention Controls',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 6 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Fraud Prevention Controls',
      instruction: 'Read the policy on fraud prevention.',
      playable: [
        {
          t: 'Our highest internal control is the segregation of duties.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If one person were responsible for both cash receipt and bank reconciliation, they could easily commit fraud.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'That is why we will always separate the recording and custody of assets.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If an employee violates this rule, they will face immediate termination.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If we had an automated system to cross-check all large payments, we would detect most fraudulent invoices before payment.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'But we don\'t, so we must rely on manual cross-checking.', role: 'narrator', _key: 'narr' }
      ],
      scene: 'u6-reading-3-c1',
      passage: '<p>Our highest internal control is the segregation of duties. If one person were responsible for both cash receipt and bank reconciliation, they could easily commit fraud. That is why we will always separate the recording and custody of assets. If an employee violates this rule, they will face immediate termination. If we had an automated system to cross-check all large payments, we would detect most fraudulent invoices before payment. But we don\'t, so we must rely on manual cross-checking.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'discrepancy', caption: 'Reading · Reading Passage 3: Fraud Prevention Controls' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 6 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the highest internal control?',
          evidence: 'Our highest internal control is the segregation of duties.',
          options: [
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'The segregation of duties.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Our highest internal control is the segregation of duties.”'
            },
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'Manual cross-checking.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the highest internal control?</i> — it answers <i>What must they rely on instead?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What must they rely on instead?',
          evidence: 'But we don\'t, so we must rely on manual cross-checking.',
          options: [
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'The passage does not support this. Look for the sentence that answers the question as it is worded, rather than the sentence that merely mentions the same thing.'
            },
            {
              t: 'The segregation of duties.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must they rely on instead?</i> — it answers <i>What is the highest internal control?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Manual cross-checking.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “But we don\'t, so we must rely on manual cross-checking.”'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
