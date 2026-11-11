/* Unit 2 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Reading 2',
    page: 2,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Data Entry and Posting',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 2 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Data Entry and Posting',
      instruction: 'Read the explanation of the accounting cycle\'s entry phase.',
      playable: [
        {
          t: 'The accounting cycle begins with the analysis of source documents.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Transactions are initially recorded in the journal chronologically.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'This is the book of original entry.', role: 'narrator', _key: 'narr' },
        {
          t: 'Last Tuesday, the team was recording a large batch of invoices when the supervisor announced a mandatory training session.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Because of the training, only half of the transactions were posted to the General Ledger that day.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The supervisor later reviewed the work to ensure accuracy before the closing balance was verified.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The second text. Every question below is settled by this passage and nothing else, so when two options both look true, choose the one this text actually says.',
      scene: 'u2-reading-2-c1',
      passage: {
        paras: [
          {
            h: 'The accounting cycle begins with the analysis of source documents. Transactions are initially recorded in the journal chronologically. This is the book of original entry. Last Tuesday, the team was recording a large batch of invoices when the supervisor announced a mandatory training session. Because of the training, only half of the transactions were posted to the General Ledger that day. The supervisor later reviewed the work to ensure accuracy before the closing balance was verified.'
          }
        ],
        say: { scene: 'u2-reading-2-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'transaction', caption: 'Reading · Reading Passage 2: Data Entry and Posting' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 2 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the book of original entry?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Only half of the transactions were posted to the General Ledger that day.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the book of original entry?</i> — it answers <i>What did the training session cause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He reviewed the work to ensure accuracy, before the closing balance was verified.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the book of original entry?</i> — it answers <i>What did the supervisor do after the entries were made?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The journal.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'They were recording a large batch of invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the book of original entry?</i> — it answers <i>What was the team doing when the supervisor announced the training session?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What was the team doing when the supervisor announced the training session?',
          evidence: 'Last Tuesday, the team was recording a large batch of invoices when the supervisor announced a mandatory training session.',
          options: [
            {
              t: 'The journal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the team doing when the supervisor announced the training session?</i> — it answers <i>What is the book of original entry?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Only half of the transactions were posted to the General Ledger that day.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the team doing when the supervisor announced the training session?</i> — it answers <i>What did the training session cause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They were recording a large batch of invoices.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Last Tuesday, the team was recording a large batch of invoices when the supervisor announced a mandatory training session.”'
            },
            {
              t: 'He reviewed the work to ensure accuracy, before the closing balance was verified.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the team doing when the supervisor announced the training session?</i> — it answers <i>What did the supervisor do after the entries were made?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did the training session cause?',
          evidence: 'Because of the training, only half of the transactions were posted to the General Ledger that day.',
          options: [
            {
              t: 'Only half of the transactions were posted to the General Ledger that day.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Because of the training, only half of the transactions were posted to the General Ledger that day.”'
            },
            {
              t: 'The journal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the training session cause?</i> — it answers <i>What is the book of original entry?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They were recording a large batch of invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the training session cause?</i> — it answers <i>What was the team doing when the supervisor announced the training session?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He reviewed the work to ensure accuracy, before the closing balance was verified.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the training session cause?</i> — it answers <i>What did the supervisor do after the entries were made?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did the supervisor do after the entries were made?',
          evidence: 'The supervisor later reviewed the work to ensure accuracy before the closing balance was verified.',
          options: [
            {
              t: 'Only half of the transactions were posted to the General Ledger that day.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the supervisor do after the entries were made?</i> — it answers <i>What did the training session cause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He reviewed the work to ensure accuracy, before the closing balance was verified.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The supervisor later reviewed the work to ensure accuracy before the closing balance was verified.”'
            },
            {
              t: 'The journal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the supervisor do after the entries were made?</i> — it answers <i>What is the book of original entry?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They were recording a large batch of invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the supervisor do after the entries were made?</i> — it answers <i>What was the team doing when the supervisor announced the training session?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Why was the General Ledger incomplete that day?',
          evidence: 'Because of the training, only half of the transactions were posted to the General Ledger that day.',
          options: [
            {
              t: 'The journal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the General Ledger incomplete that day?</i> — it answers <i>What is the book of original entry?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They were recording a large batch of invoices.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the General Ledger incomplete that day?</i> — it answers <i>What was the team doing when the supervisor announced the training session?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Only half of the transactions were posted to the General Ledger that day.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the General Ledger incomplete that day?</i> — it answers <i>What did the training session cause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because the mandatory training session interrupted the posting, so only half the transactions reached it.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Because of the training, only half of the transactions were posted to the General Ledger that day.”'
            }
          ]
        }
      ],
      visual: { spot: 'ledger', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
