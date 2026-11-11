/* Unit 5 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Reading 2',
    page: 5,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Collections Strategy',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 5 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Collections Strategy',
      instruction: 'Read the strategy for collections.',
      playable: [
        {
          t: 'Our Collections Strategy is designed to reduce the volume of past due invoices.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'When an invoice is 30 days past due, the AR team is going to send a formal email reminder.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'At 60 days, we will call the debtor to arrange a settlement.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'For 90-day outstanding invoices, we are scheduling a final notice that will suspend their credit.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We are going to review the top debtors list weekly.', role: 'narrator', _key: 'narr' },
        {
          t: 'This will help us to clear the account before it is transferred to an external agency.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The second text. Every question below is settled by this passage and nothing else, so when two options both look true, choose the one this text actually says.',
      scene: 'u5-reading-2-c1',
      passage: {
        paras: [
          {
            h: 'Our Collections Strategy is designed to reduce the volume of past due invoices. When an invoice is 30 days past due, the AR team is going to send a formal email reminder. At 60 days, we will call the debtor to arrange a settlement. For 90-day outstanding invoices, we are scheduling a final notice that will suspend their credit. We are going to review the top debtors list weekly. This will help us to clear the account before it is transferred to an external agency.'
          }
        ],
        say: { scene: 'u5-reading-2-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'invoice', caption: 'Reading · Reading Passage 2: Collections Strategy' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 5 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the strategy designed to reduce?',
          evidence: 'Our Collections Strategy is designed to reduce the volume of past due invoices.',
          options: [
            {
              t: 'The volume of past due invoices.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Our Collections Strategy is designed to reduce the volume of past due invoices.”'
            },
            {
              t: 'A final notice will suspend it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the strategy designed to reduce?</i> — it answers <i>What will happen to the client\'s credit at 90 days?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To clear the account.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the strategy designed to reduce?</i> — it answers <i>What is the goal before the account is transferred to an external agency?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What will happen to the client\'s credit at 90 days?',
          evidence: 'For 90-day outstanding invoices, we are scheduling a final notice that will suspend their credit.',
          options: [
            {
              t: 'A final notice will suspend it.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “For 90-day outstanding invoices, we are scheduling a final notice that will suspend their credit.”'
            },
            {
              t: 'To clear the account.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen to the client\'s credit at 90 days?</i> — it answers <i>What is the goal before the account is transferred to an external agency?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The volume of past due invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen to the client\'s credit at 90 days?</i> — it answers <i>What is the strategy designed to reduce?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is the goal before the account is transferred to an external agency?',
          evidence: 'This will help us to clear the account before it is transferred to an external agency.',
          options: [
            {
              t: 'A final notice will suspend it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the goal before the account is transferred to an external agency?</i> — it answers <i>What will happen to the client\'s credit at 90 days?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To clear the account.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This will help us to clear the account before it is transferred to an external agency.”'
            },
            {
              t: 'The volume of past due invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the goal before the account is transferred to an external agency?</i> — it answers <i>What is the strategy designed to reduce?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'credit', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
