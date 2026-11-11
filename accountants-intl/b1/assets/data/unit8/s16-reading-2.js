/* Unit 8 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Reading 2',
    page: 8,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: The Trial Balance Mismatch',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 8 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: The Trial Balance Mismatch',
      instruction: 'Read the internal email regarding an issue.',
      playable: [
        { t: 'Subject: Trial Balance Error Found', role: 'narrator', _key: 'narr' },
        {
          t: 'Team, a mismatch was discovered when the trial balance was generated this morning.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'The debits and credits were not equal.', role: 'narrator', _key: 'narr' },
        {
          t: 'This problem must be resolved immediately so that the closing can continue.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The journal entries are being investigated now to find the source of the discrepancy.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Once the error is located, it will be corrected, and a new trial balance will be run.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We will let you know once the issue has been resolved.', role: 'narrator', _key: 'narr' }
      ],
      brief: 'The second text. Every question below is settled by this passage and nothing else, so when two options both look true, choose the one this text actually says.',
      scene: 'u8-reading-2-c1',
      passage: {
        paras: [
          { h: 'Subject: Trial Balance Error Found' },
          {
            h: 'Team, a mismatch was discovered when the trial balance was generated this morning. The debits and credits were not equal. This problem must be resolved immediately so that the closing can continue. The journal entries are being investigated now to find the source of the discrepancy. Once the error is located, it will be corrected, and a new trial balance will be run. We will let you know once the issue has been resolved.'
          }
        ],
        say: { scene: 'u8-reading-2-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'trial-balance', caption: 'Reading · Reading Passage 2: The Trial Balance Mismatch' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 8 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What was discovered when the trial balance was generated?',
          evidence: 'The debits and credits were not equal.',
          options: [
            {
              t: 'A mismatch — the debits and credits were not equal.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The debits and credits were not equal.”'
            },
            {
              t: 'The journal entries.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was discovered when the trial balance was generated?</i> — it answers <i>What is being investigated now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'So that the closing can continue.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was discovered when the trial balance was generated?</i> — it answers <i>Why must the problem be resolved immediately?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will be corrected, and a new trial balance will be run.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was discovered when the trial balance was generated?</i> — it answers <i>What will happen once the error is located?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What is being investigated now?',
          evidence: 'The journal entries are being investigated now to find the source of the discrepancy.',
          options: [
            {
              t: 'The journal entries.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The journal entries are being investigated now to find the source of the discrepancy.”'
            },
            {
              t: 'A mismatch — the debits and credits were not equal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is being investigated now?</i> — it answers <i>What was discovered when the trial balance was generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will be corrected, and a new trial balance will be run.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is being investigated now?</i> — it answers <i>What will happen once the error is located?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'So that the closing can continue.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is being investigated now?</i> — it answers <i>Why must the problem be resolved immediately?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. Why must the problem be resolved immediately?',
          evidence: 'This problem must be resolved immediately so that the closing can continue.',
          options: [
            {
              t: 'So that the closing can continue.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This problem must be resolved immediately so that the closing can continue.”'
            },
            {
              t: 'A mismatch — the debits and credits were not equal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the problem be resolved immediately?</i> — it answers <i>What was discovered when the trial balance was generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The journal entries.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the problem be resolved immediately?</i> — it answers <i>What is being investigated now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will be corrected, and a new trial balance will be run.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the problem be resolved immediately?</i> — it answers <i>What will happen once the error is located?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What will happen once the error is located?',
          evidence: 'Once the error is located, it will be corrected, and a new trial balance will be run.',
          options: [
            {
              t: 'The journal entries.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen once the error is located?</i> — it answers <i>What is being investigated now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'So that the closing can continue.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen once the error is located?</i> — it answers <i>Why must the problem be resolved immediately?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A mismatch — the debits and credits were not equal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen once the error is located?</i> — it answers <i>What was discovered when the trial balance was generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It will be corrected, and a new trial balance will be run.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Once the error is located, it will be corrected, and a new trial balance will be run.”'
            }
          ]
        },
        {
          q: '5. Who will let the team know once the issue is resolved?',
          evidence: 'We will let you know once the issue has been resolved.',
          options: [
            {
              t: 'The journal entries.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who will let the team know once the issue is resolved?</i> — it answers <i>What is being investigated now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'So that the closing can continue.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who will let the team know once the issue is resolved?</i> — it answers <i>Why must the problem be resolved immediately?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The writer of the memo — the team will be told once the issue has been resolved.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We will let you know once the issue has been resolved.”'
            },
            {
              t: 'A mismatch — the debits and credits were not equal.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who will let the team know once the issue is resolved?</i> — it answers <i>What was discovered when the trial balance was generated?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
