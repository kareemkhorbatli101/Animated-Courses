/* Unit 7 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Reading 2',
    page: 7,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Adverse Variance Explanation',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 7 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Adverse Variance Explanation',
      instruction: 'Read the memo explaining an adverse variance.',
      playable: [
        { t: 'Adverse Variance - Utilities', role: 'narrator', _key: 'narr' },
        {
          t: 'The utilities expense is EUR 2,500 more than the budgeted amount.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This is the second largest adverse variance on the P&L this month.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The cost of electricity was higher than anticipated due to an extremely cold winter in Kraków, which was colder than the weather last year.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We believe that this variance is not as significant as the payroll variance, which is the largest adverse item.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'However, we must find ways to be more efficient and less wasteful with our energy usage.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u7-reading-2-c1',
      passage: '<p>MEMORANDUM: Adverse Variance - Utilities</p><p>The utilities expense is EUR 2,500 more than the budgeted amount. This is the second largest adverse variance on the P&amp;L this month. The cost of electricity was higher than anticipated due to an extremely cold winter in Kraków, which was colder than the weather last year. We believe that this variance is not as significant as the payroll variance, which is the largest adverse item. However, we must find ways to be more efficient and less wasteful with our energy usage.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'variance', caption: 'Reading · Reading Passage 2: Adverse Variance Explanation' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 7 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How much more than the budget is the utilities expense?',
          evidence: 'The utilities expense is EUR 2,500 more than the budgeted amount.',
          options: [
            {
              t: 'The payroll variance.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much more than the budget is the utilities expense?</i> — it answers <i>Which variance is the largest adverse item?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 2,500 more.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The utilities expense is EUR 2,500 more than the budgeted amount.”'
            },
            {
              t: 'It is the second largest adverse variance on the P&L this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much more than the budget is the utilities expense?</i> — it answers <i>How is this variance ranked on the P&amp;L?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because of an extremely cold winter in Kraków, colder than last year\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much more than the budget is the utilities expense?</i> — it answers <i>Why was the cost of electricity higher?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. How is this variance ranked on the P&L?',
          evidence: 'This is the second largest adverse variance on the P&L this month.',
          options: [
            {
              t: 'EUR 2,500 more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is this variance ranked on the P&amp;L?</i> — it answers <i>How much more than the budget is the utilities expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because of an extremely cold winter in Kraków, colder than last year\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is this variance ranked on the P&amp;L?</i> — it answers <i>Why was the cost of electricity higher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is the second largest adverse variance on the P&L this month.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This is the second largest adverse variance on the P&amp;L this month.”'
            },
            {
              t: 'The payroll variance.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is this variance ranked on the P&amp;L?</i> — it answers <i>Which variance is the largest adverse item?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. Why was the cost of electricity higher?',
          evidence: 'The cost of electricity was higher than anticipated due to an extremely cold winter in Kraków, which was colder than the weather last year.',
          options: [
            {
              t: 'The payroll variance.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the cost of electricity higher?</i> — it answers <i>Which variance is the largest adverse item?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because of an extremely cold winter in Kraków, colder than last year\'s.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The cost of electricity was higher than anticipated due to an extremely cold winter in Kraków, which was colder than the weather last year.”'
            },
            {
              t: 'EUR 2,500 more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the cost of electricity higher?</i> — it answers <i>How much more than the budget is the utilities expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is the second largest adverse variance on the P&L this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why was the cost of electricity higher?</i> — it answers <i>How is this variance ranked on the P&amp;L?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. Which variance is the largest adverse item?',
          evidence: 'We believe that this variance is not as significant as the payroll variance, which is the largest adverse item.',
          options: [
            {
              t: 'The payroll variance.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We believe that this variance is not as significant as the payroll variance, which is the largest adverse item.”'
            },
            {
              t: 'EUR 2,500 more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which variance is the largest adverse item?</i> — it answers <i>How much more than the budget is the utilities expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because of an extremely cold winter in Kraków, colder than last year\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which variance is the largest adverse item?</i> — it answers <i>Why was the cost of electricity higher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is the second largest adverse variance on the P&L this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which variance is the largest adverse item?</i> — it answers <i>How is this variance ranked on the P&amp;L?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What are they encouraged to be in the future?',
          evidence: 'However, we must find ways to be more efficient and less wasteful with our energy usage.',
          options: [
            {
              t: 'EUR 2,500 more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they encouraged to be in the future?</i> — it answers <i>How much more than the budget is the utilities expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is the second largest adverse variance on the P&L this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they encouraged to be in the future?</i> — it answers <i>How is this variance ranked on the P&amp;L?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'More efficient and less wasteful with their energy usage.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “However, we must find ways to be more efficient and less wasteful with our energy usage.”'
            },
            {
              t: 'Because of an extremely cold winter in Kraków, colder than last year\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are they encouraged to be in the future?</i> — it answers <i>Why was the cost of electricity higher?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'budget', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
