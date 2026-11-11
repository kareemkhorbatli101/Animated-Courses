/* Unit 5 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Reading 3',
    page: 5,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Managing Credit Exposure',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 5 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Managing Credit Exposure',
      instruction: 'Read the policy on credit exposure.',
      playable: [
        {
          t: 'Credit exposure is the maximum potential loss the company could incur if a customer or group of customers fails to pay.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We need to manage this exposure closely, in every market where we sell.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We are going to limit the credit terms for new clients to Net 15 days.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We will not extend credit to any client whose financial status is questionable.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The Financial Controller is meeting with the Credit Committee every month to review the exposure report.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'This is a fixed arrangement.', role: 'narrator', _key: 'narr' },
        {
          t: 'This will protect our cash flow from unexpected losses and ensure long-term stability.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The last text, and the densest. Read the headings first to see how it is organised, then read for the detail the questions ask about.',
      scene: 'u5-reading-3-c1',
      passage: {
        paras: [
          {
            h: 'Credit exposure is the maximum potential loss the company could incur if a customer or group of customers fails to pay. We need to manage this exposure closely, in every market where we sell. We are going to limit the credit terms for new clients to Net 15 days. We will not extend credit to any client whose financial status is questionable. The Financial Controller is meeting with the Credit Committee every month to review the exposure report. This is a fixed arrangement. This will protect our cash flow from unexpected losses and ensure long-term stability.'
          }
        ],
        say: { scene: 'u5-reading-3-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'credit', caption: 'Reading · Reading Passage 3: Managing Credit Exposure' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 5 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is credit exposure?',
          evidence: 'Credit exposure is the maximum potential loss the company could incur if a customer or group of customers fails to pay.',
          options: [
            {
              t: 'They are going to limit the credit terms for new clients to Net 15 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is credit exposure?</i> — it answers <i>What are they going to do to limit credit for new clients?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will not extend credit to them.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is credit exposure?</i> — it answers <i>What will the company not do for clients with questionable financial status?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The maximum potential loss the company could incur if a customer, or a group of customers, fails to pay.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Credit exposure is the maximum potential loss the company could incur if a customer or group of customers fails to pay.”'
            },
            {
              t: 'The company\'s cash flow from unexpected losses, and its long-term stability.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is credit exposure?</i> — it answers <i>What will this monthly review protect?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What are they going to do to limit credit for new clients?',
          evidence: 'We are going to limit the credit terms for new clients to Net 15 days.',
          options: [
            {
              t: 'They are going to limit the credit terms for new clients to Net 15 days.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We are going to limit the credit terms for new clients to Net 15 days.”'
            },
            {
              t: 'The maximum potential loss the company could incur if a customer, or a group of customers, fails to pay.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they going to do to limit credit for new clients?</i> — it answers <i>What is credit exposure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will not extend credit to them.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they going to do to limit credit for new clients?</i> — it answers <i>What will the company not do for clients with questionable financial status?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The company\'s cash flow from unexpected losses, and its long-term stability.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they going to do to limit credit for new clients?</i> — it answers <i>What will this monthly review protect?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What will the company not do for clients with questionable financial status?',
          evidence: 'We will not extend credit to any client whose financial status is questionable.',
          options: [
            {
              t: 'The maximum potential loss the company could incur if a customer, or a group of customers, fails to pay.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the company not do for clients with questionable financial status?</i> — it answers <i>What is credit exposure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are going to limit the credit terms for new clients to Net 15 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the company not do for clients with questionable financial status?</i> — it answers <i>What are they going to do to limit credit for new clients?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will not extend credit to them.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We will not extend credit to any client whose financial status is questionable.”'
            },
            {
              t: 'The company\'s cash flow from unexpected losses, and its long-term stability.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the company not do for clients with questionable financial status?</i> — it answers <i>What will this monthly review protect?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What will this monthly review protect?',
          evidence: 'This will protect our cash flow from unexpected losses and ensure long-term stability.',
          options: [
            {
              t: 'It will not extend credit to them.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will this monthly review protect?</i> — it answers <i>What will the company not do for clients with questionable financial status?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The company\'s cash flow from unexpected losses, and its long-term stability.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This will protect our cash flow from unexpected losses and ensure long-term stability.”'
            },
            {
              t: 'The maximum potential loss the company could incur if a customer, or a group of customers, fails to pay.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will this monthly review protect?</i> — it answers <i>What is credit exposure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are going to limit the credit terms for new clients to Net 15 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will this monthly review protect?</i> — it answers <i>What are they going to do to limit credit for new clients?</i> Check what the question actually asks for before you look for it in the text.'
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
