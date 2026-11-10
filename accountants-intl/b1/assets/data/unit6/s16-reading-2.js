/* Unit 6 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Reading 2',
    page: 6,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Policy on Uncollectible Debt',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 6 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Policy on Uncollectible Debt',
      instruction: 'Read the policy on bad debt.',
      playable: [
        {
          t: 'A debt is classified as uncollectible if a client fails to make payment after 120 days of intensive collections.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Once classified, the AR Manager will authorize a write-off.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If the amount were very large, we would send the debt to a third-party collections agency in the client\'s own country.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If we don\'t process this write-off correctly, our profit will be overstated.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The policy states that we must reverse the original sales entry and zero out the debtor\'s account to reflect the loss accurately.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u6-reading-2-c1',
      passage: '<p>A debt is classified as uncollectible if a client fails to make payment after 120 days of intensive collections. Once classified, the AR Manager will authorize a write-off. If the amount were very large, we would send the debt to a third-party collections agency in the client\'s own country. If we don\'t process this write-off correctly, our profit will be overstated. The policy states that we must reverse the original sales entry and zero out the debtor\'s account to reflect the loss accurately.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'entry', caption: 'Reading · Reading Passage 2: Policy on Uncollectible Debt' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 6 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. When is a debt classified as uncollectible?',
          evidence: 'A debt is classified as uncollectible if a client fails to make payment after 120 days of intensive collections.',
          options: [
            {
              t: 'When a client fails to make payment after 120 days of intensive collections.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “A debt is classified as uncollectible if a client fails to make payment after 120 days of intensive collections.”'
            },
            {
              t: 'He will authorize a write-off.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When is a debt classified as uncollectible?</i> — it answers <i>What will the AR Manager do once it is classified?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They would send the debt to a third-party collections agency in the client\'s own country.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When is a debt classified as uncollectible?</i> — it answers <i>What would they do if the amount were very large (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The company\'s profit will be overstated.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When is a debt classified as uncollectible?</i> — it answers <i>What will happen if they don\'t process the write-off correctly?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What will the AR Manager do once it is classified?',
          evidence: 'Once classified, the AR Manager will authorize a write-off.',
          options: [
            {
              t: 'They would send the debt to a third-party collections agency in the client\'s own country.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AR Manager do once it is classified?</i> — it answers <i>What would they do if the amount were very large (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The company\'s profit will be overstated.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AR Manager do once it is classified?</i> — it answers <i>What will happen if they don\'t process the write-off correctly?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'When a client fails to make payment after 120 days of intensive collections.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AR Manager do once it is classified?</i> — it answers <i>When is a debt classified as uncollectible?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will authorize a write-off.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Once classified, the AR Manager will authorize a write-off.”'
            }
          ]
        },
        {
          q: '3. What would they do if the amount were very large (Second Conditional)?',
          evidence: 'If the amount were very large, we would send the debt to a third-party collections agency in the client\'s own country.',
          options: [
            {
              t: 'The company\'s profit will be overstated.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would they do if the amount were very large (Second Conditional)?</i> — it answers <i>What will happen if they don\'t process the write-off correctly?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They would send the debt to a third-party collections agency in the client\'s own country.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If the amount were very large, we would send the debt to a third-party collections agency in the client\'s own country.”'
            },
            {
              t: 'When a client fails to make payment after 120 days of intensive collections.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would they do if the amount were very large (Second Conditional)?</i> — it answers <i>When is a debt classified as uncollectible?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will authorize a write-off.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would they do if the amount were very large (Second Conditional)?</i> — it answers <i>What will the AR Manager do once it is classified?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What will happen if they don\'t process the write-off correctly?',
          evidence: 'If we don\'t process this write-off correctly, our profit will be overstated.',
          options: [
            {
              t: 'They would send the debt to a third-party collections agency in the client\'s own country.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen if they don\'t process the write-off correctly?</i> — it answers <i>What would they do if the amount were very large (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The company\'s profit will be overstated.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If we don\'t process this write-off correctly, our profit will be overstated.”'
            },
            {
              t: 'When a client fails to make payment after 120 days of intensive collections.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen if they don\'t process the write-off correctly?</i> — it answers <i>When is a debt classified as uncollectible?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will authorize a write-off.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will happen if they don\'t process the write-off correctly?</i> — it answers <i>What will the AR Manager do once it is classified?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What two accounting actions are required?',
          evidence: 'The policy states that we must reverse the original sales entry and zero out the debtor\'s account to reflect the loss accurately.',
          options: [
            {
              t: 'Reverse the original sales entry, and zero out the debtor\'s account.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The policy states that we must reverse the original sales entry and zero out the debtor\'s account to reflect the loss accurately.”'
            },
            {
              t: 'When a client fails to make payment after 120 days of intensive collections.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two accounting actions are required?</i> — it answers <i>When is a debt classified as uncollectible?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will authorize a write-off.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two accounting actions are required?</i> — it answers <i>What will the AR Manager do once it is classified?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They would send the debt to a third-party collections agency in the client\'s own country.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two accounting actions are required?</i> — it answers <i>What would they do if the amount were very large (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
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
