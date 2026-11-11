/* Unit 10 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Reading 1',
    page: 10,
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
      bookRef: 'Unit 10 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'When do you use formal email or memos in accounting?' },
        { q: 'What is the purpose of the Executive Summary in a long report?' },
        { q: 'What are the risks of misreporting a financial figure or a management decision?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'reporting',
        caption: 'Passing on information, management accounts, summarizing meetings, and conveying decisions.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'Discuss:',
          'When do you use formal email or memos in accounting?',
          'What is the purpose of the Executive Summary in a long report?',
          'What are the risks of misreporting a financial figure or a management decision?'
        ]
      },
      model: 'For anything that has to be on the record — a decision, an instruction, or a figure somebody will rely on later. A conversation is fine for a question; a memo is what you write when the answer matters.',
      brief: 'Before you read: these are opinion questions, so there is no answer to find. Answering them first makes the passage easier, because you will already be looking for something.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 10 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: Executive Summary',
      instruction: 'Read the executive summary of the Q4 Financial Report.',
      playable: [
        { t: 'Q4 Financial Report: Executive Summary', role: 'narrator', _key: 'narr' },
        { t: 'Overall performance for Q4 met expectations.', role: 'narrator', _key: 'narr' },
        {
          t: 'The Financial Controller asserted that cost control measures had been highly effective and had improved the net profit ratio to 12%.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'She clarified that while operating expenses were slightly higher than the forecasted figure, the increase was due to one-time IT investments.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The Board concluded that the current strategy was sound and mandated no immediate changes to the capital expenditure plan.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u10-reading-1-c2',
      passage: {
        paras: [
          { h: 'Q4 Financial Report: Executive Summary' },
          {
            h: 'Overall performance for Q4 met expectations. The Financial Controller asserted that cost control measures had been highly effective and had improved the net profit ratio to 12%. She clarified that while operating expenses were slightly higher than the forecasted figure, the increase was due to one-time IT investments. The Board concluded that the current strategy was sound and mandated no immediate changes to the capital expenditure plan.'
          }
        ],
        say: { scene: 'u10-reading-1-c2', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: {
        spot: 'source-document',
        caption: 'Reading · Reading Passage 1: Executive Summary',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 10 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What did the Financial Controller assert about cost control?',
          evidence: 'The Financial Controller asserted that cost control measures had been highly effective and had improved the net profit ratio to 12%.',
          options: [
            {
              t: 'That the cost control measures had been highly effective and had improved the net profit ratio to 12%.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Financial Controller asserted that cost control measures had been highly effective and had improved the net profit ratio to 12%.”'
            },
            {
              t: 'That it was due to one-time IT investments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Financial Controller assert about cost control?</i> — it answers <i>What did she clarify about the increase in operating expenses?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: '12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Financial Controller assert about cost control?</i> — it answers <i>What was the net profit ratio reported to be?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was sound.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Financial Controller assert about cost control?</i> — it answers <i>What did the Board conclude about the current strategy?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What did she clarify about the increase in operating expenses?',
          evidence: 'She clarified that while operating expenses were slightly higher than the forecasted figure, the increase was due to one-time IT investments.',
          options: [
            {
              t: 'That it was due to one-time IT investments.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She clarified that while operating expenses were slightly higher than the forecasted figure, the increase was due to one-time IT investments.”'
            },
            {
              t: 'That the cost control measures had been highly effective and had improved the net profit ratio to 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she clarify about the increase in operating expenses?</i> — it answers <i>What did the Financial Controller assert about cost control?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: '12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she clarify about the increase in operating expenses?</i> — it answers <i>What was the net profit ratio reported to be?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was sound.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she clarify about the increase in operating expenses?</i> — it answers <i>What did the Board conclude about the current strategy?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did the Board conclude about the current strategy?',
          evidence: 'the passage above',
          options: [
            {
              t: 'That it was sound.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'That the cost control measures had been highly effective and had improved the net profit ratio to 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board conclude about the current strategy?</i> — it answers <i>What did the Financial Controller assert about cost control?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was due to one-time IT investments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board conclude about the current strategy?</i> — it answers <i>What did she clarify about the increase in operating expenses?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: '12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board conclude about the current strategy?</i> — it answers <i>What was the net profit ratio reported to be?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What was the net profit ratio reported to be?',
          evidence: 'the passage above',
          options: [
            {
              t: 'That it was due to one-time IT investments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the net profit ratio reported to be?</i> — it answers <i>What did she clarify about the increase in operating expenses?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was sound.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the net profit ratio reported to be?</i> — it answers <i>What did the Board conclude about the current strategy?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: '12%.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'That the cost control measures had been highly effective and had improved the net profit ratio to 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the net profit ratio reported to be?</i> — it answers <i>What did the Financial Controller assert about cost control?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What did the Board mandate no immediate changes to?',
          evidence: 'The Board concluded that the current strategy was sound and mandated no immediate changes to the capital expenditure plan.',
          options: [
            {
              t: 'The capital expenditure plan.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Board concluded that the current strategy was sound and mandated no immediate changes to the capital expenditure plan.”'
            },
            {
              t: 'That the cost control measures had been highly effective and had improved the net profit ratio to 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board mandate no immediate changes to?</i> — it answers <i>What did the Financial Controller assert about cost control?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was due to one-time IT investments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board mandate no immediate changes to?</i> — it answers <i>What did she clarify about the increase in operating expenses?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it was sound.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Board mandate no immediate changes to?</i> — it answers <i>What did the Board conclude about the current strategy?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'stock', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
