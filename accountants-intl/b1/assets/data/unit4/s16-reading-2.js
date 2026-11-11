/* Unit 4 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Reading 2',
    page: 4,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Variance Reporting',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 4 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Variance Reporting',
      instruction: 'Read the procedure for handling inventory variance.',
      playable: [
        {
          t: 'Inventory variance is the difference between the recorded amount in the ledger and the physical count.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'There should not be much variance if stocktaking is performed correctly.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If the variance is higher than 5% of the total value, the custodian must perform a re-count.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If the variance persists, an investigation will be launched.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We are looking for any evidence of misplacement or theft.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We have too many unexplained variances in the last two quarters, in three different offices.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We need a lot of improvements in our inventory control procedures.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The second text. Every question below is settled by this passage and nothing else, so when two options both look true, choose the one this text actually says.',
      scene: 'u4-reading-2-c1',
      passage: {
        paras: [
          {
            h: 'Inventory variance is the difference between the recorded amount in the ledger and the physical count. There should not be much variance if stocktaking is performed correctly. If the variance is higher than 5% of the total value, the custodian must perform a re-count. If the variance persists, an investigation will be launched. We are looking for any evidence of misplacement or theft. We have too many unexplained variances in the last two quarters, in three different offices. We need a lot of improvements in our inventory control procedures.'
          }
        ],
        say: { scene: 'u4-reading-2-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'variance', caption: 'Reading · Reading Passage 2: Variance Reporting' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 4 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is inventory variance?',
          evidence: 'Inventory variance is the difference between the recorded amount in the ledger and the physical count.',
          options: [
            {
              t: 'Any evidence of misplacement or theft.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is inventory variance?</i> — it answers <i>What is the company looking for evidence of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The difference between the recorded amount in the ledger and the physical count.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Inventory variance is the difference between the recorded amount in the ledger and the physical count.”'
            },
            {
              t: 'He must perform a re-count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is inventory variance?</i> — it answers <i>What must the custodian do if the variance is higher than 5%?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'There should not be much variance if stocktaking is performed correctly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is inventory variance?</i> — it answers <i>How much variance should not be there?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. How much variance should not be there?',
          evidence: 'There should not be much variance if stocktaking is performed correctly.',
          options: [
            {
              t: 'The difference between the recorded amount in the ledger and the physical count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much variance should not be there?</i> — it answers <i>What is inventory variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He must perform a re-count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much variance should not be there?</i> — it answers <i>What must the custodian do if the variance is higher than 5%?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any evidence of misplacement or theft.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much variance should not be there?</i> — it answers <i>What is the company looking for evidence of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'There should not be much variance if stocktaking is performed correctly.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “There should not be much variance if stocktaking is performed correctly.”'
            }
          ]
        },
        {
          q: '3. What must the custodian do if the variance is higher than 5%?',
          evidence: 'If the variance is higher than 5% of the total value, the custodian must perform a re-count.',
          options: [
            {
              t: 'Any evidence of misplacement or theft.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the custodian do if the variance is higher than 5%?</i> — it answers <i>What is the company looking for evidence of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He must perform a re-count.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If the variance is higher than 5% of the total value, the custodian must perform a re-count.”'
            },
            {
              t: 'There should not be much variance if stocktaking is performed correctly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the custodian do if the variance is higher than 5%?</i> — it answers <i>How much variance should not be there?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The difference between the recorded amount in the ledger and the physical count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the custodian do if the variance is higher than 5%?</i> — it answers <i>What is inventory variance?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What is the company looking for evidence of?',
          evidence: 'We are looking for any evidence of misplacement or theft.',
          options: [
            {
              t: 'He must perform a re-count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the company looking for evidence of?</i> — it answers <i>What must the custodian do if the variance is higher than 5%?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any evidence of misplacement or theft.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We are looking for any evidence of misplacement or theft.”'
            },
            {
              t: 'The difference between the recorded amount in the ledger and the physical count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the company looking for evidence of?</i> — it answers <i>What is inventory variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'There should not be much variance if stocktaking is performed correctly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the company looking for evidence of?</i> — it answers <i>How much variance should not be there?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What is needed in the control procedures?',
          evidence: 'We need a lot of improvements in our inventory control procedures.',
          options: [
            {
              t: 'A lot of improvements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We need a lot of improvements in our inventory control procedures.”'
            },
            {
              t: 'The difference between the recorded amount in the ledger and the physical count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is needed in the control procedures?</i> — it answers <i>What is inventory variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He must perform a re-count.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is needed in the control procedures?</i> — it answers <i>What must the custodian do if the variance is higher than 5%?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'There should not be much variance if stocktaking is performed correctly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is needed in the control procedures?</i> — it answers <i>How much variance should not be there?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'stock', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
