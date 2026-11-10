/* Unit 2 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Reading 1',
    page: 2,
    section: '15',
    lesson: 'Part 5 · Reading',
    title: 'Reading 1'
  },
  objective: 'Pre-Reading Discussion',
  cards: [
    {
      id: 'c1',
      covers: ['5A'],
      ref: '5A',
      bookRef: 'Unit 2 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'When do accountants typically use the Past Continuous tense in their job?' },
        { q: 'What does "tracing a source document" mean, and why is it important in an audit?' },
        { q: 'What is the first thing you do when you find a discrepancy during reconciliation?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'journal',
        caption: 'Processing invoices, expense claims, and receipts from the previous period (historical data entry across the group\'s six'
      },
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Discuss:',
          'When do accountants typically use the Past Continuous tense in their job?',
          'What does "tracing a source document" mean, and why is it important in an audit?',
          'What is the first thing you do when you find a discrepancy during reconciliation?'
        ]
      },
      model: 'When they describe what was happening at the moment something interrupted them — “I was reconciling the bank statement when I found the difference.”'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 2 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: The Expense Claim Procedure',
      instruction: 'Read the procedure for handling employee expense claims.',
      playable: [
        {
          t: 'Every employee must submit an expense claim form with attached original receipts.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If a receipt is missing, the claim requires a special approval from the department head.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Yesterday, the claims department in Kraków processed 50 claims from four countries.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'An auditor was checking the largest claims while the clerk was scanning the attachments.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The auditor spotted that one claim was submitted without the necessary approval form.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The clerk stopped the scanning process immediately and sent the claim back.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u2-reading-1-c2',
      passage: '<p>Every employee must submit an expense claim form with attached original receipts. If a receipt is missing, the claim requires a special approval from the department head. Yesterday, the claims department in Kraków processed 50 claims from four countries. An auditor was checking the largest claims while the clerk was scanning the attachments. The auditor spotted that one claim was submitted without the necessary approval form. The clerk stopped the scanning process immediately and sent the claim back.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'receipt',
        caption: 'Reading · Reading Passage 1: The Expense Claim Procedure',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 2 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What must every employee submit with an expense claim form?',
          evidence: 'Every employee must submit an expense claim form with attached original receipts.',
          options: [
            {
              t: 'That one claim was submitted without the necessary approval form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must every employee submit with an expense claim form?</i> — it answers <i>What did the auditor spot?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He stopped the scanning process immediately and sent the claim back.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must every employee submit with an expense claim form?</i> — it answers <i>What did the clerk do immediately after the error was found?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The attached original receipts.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Every employee must submit an expense claim form with attached original receipts.”'
            },
            {
              t: 'The largest claims.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must every employee submit with an expense claim form?</i> — it answers <i>What was the auditor checking while the clerk was scanning?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What was the auditor checking while the clerk was scanning?',
          evidence: 'An auditor was checking the largest claims while the clerk was scanning the attachments.',
          options: [
            {
              t: 'He stopped the scanning process immediately and sent the claim back.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the auditor checking while the clerk was scanning?</i> — it answers <i>What did the clerk do immediately after the error was found?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The largest claims.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “An auditor was checking the largest claims while the clerk was scanning the attachments.”'
            },
            {
              t: 'That one claim was submitted without the necessary approval form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the auditor checking while the clerk was scanning?</i> — it answers <i>What did the auditor spot?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The attached original receipts.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the auditor checking while the clerk was scanning?</i> — it answers <i>What must every employee submit with an expense claim form?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did the auditor spot?',
          evidence: 'The auditor spotted that one claim was submitted without the necessary approval form.',
          options: [
            {
              t: 'The attached original receipts.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the auditor spot?</i> — it answers <i>What must every employee submit with an expense claim form?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The largest claims.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the auditor spot?</i> — it answers <i>What was the auditor checking while the clerk was scanning?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That one claim was submitted without the necessary approval form.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The auditor spotted that one claim was submitted without the necessary approval form.”'
            },
            {
              t: 'He stopped the scanning process immediately and sent the claim back.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the auditor spot?</i> — it answers <i>What did the clerk do immediately after the error was found?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did the clerk do immediately after the error was found?',
          evidence: 'The clerk stopped the scanning process immediately and sent the claim back.',
          options: [
            {
              t: 'The largest claims.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the clerk do immediately after the error was found?</i> — it answers <i>What was the auditor checking while the clerk was scanning?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That one claim was submitted without the necessary approval form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the clerk do immediately after the error was found?</i> — it answers <i>What did the auditor spot?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The attached original receipts.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the clerk do immediately after the error was found?</i> — it answers <i>What must every employee submit with an expense claim form?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He stopped the scanning process immediately and sent the claim back.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The clerk stopped the scanning process immediately and sent the claim back.”'
            }
          ]
        },
        {
          q: '5. What requires special approval?',
          evidence: 'If a receipt is missing, the claim requires a special approval from the department head.',
          options: [
            {
              t: 'A claim with a missing receipt — it needs special approval from the department head.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If a receipt is missing, the claim requires a special approval from the department head.”'
            },
            {
              t: 'The attached original receipts.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What requires special approval?</i> — it answers <i>What must every employee submit with an expense claim form?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That one claim was submitted without the necessary approval form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What requires special approval?</i> — it answers <i>What did the auditor spot?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The largest claims.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What requires special approval?</i> — it answers <i>What was the auditor checking while the clerk was scanning?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'expense-claim', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
