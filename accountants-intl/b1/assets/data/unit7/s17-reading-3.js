/* Unit 7 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Reading 3',
    page: 7,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Competitor Analysis',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 7 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Competitor Analysis',
      instruction: 'Read the analysis comparing two competitors.',
      playable: [
        {
          t: 'Company X is the most profitable in the sector, reporting an 18% net margin.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Their operational costs are lower than Company Y\'s.', role: 'narrator', _key: 'narr' },
        {
          t: 'Company Y has a stronger brand than Company X, but their product quality is worse than their main rival.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Company Z is the newest competitor and has the least market share among the three.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Overall, while Company X is more financially sound than the others, Company Y has the most potential for future growth if they can reduce their operating expenses.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u7-reading-3-c1',
      passage: '<p>Company X is the most profitable in the sector, reporting an 18% net margin. Their operational costs are lower than Company Y\'s. Company Y has a stronger brand than Company X, but their product quality is worse than their main rival. Company Z is the newest competitor and has the least market share among the three. Overall, while Company X is more financially sound than the others, Company Y has the most potential for future growth if they can reduce their operating expenses.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'source-document', caption: 'Reading · Reading Passage 3: Competitor Analysis' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 7 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. Which company is the most profitable?',
          evidence: 'Company X is the most profitable in the sector, reporting an 18% net margin.',
          options: [
            {
              t: 'It is worse than its main rival\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company is the most profitable?</i> — it answers <i>How is Company Y\'s product quality compared to its main rival?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Company X, with an 18% net margin.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Company X is the most profitable in the sector, reporting an 18% net margin.”'
            },
            {
              t: 'It has the least market share of the three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company is the most profitable?</i> — it answers <i>What is Company Z\'s position in terms of market share?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are lower than Company Y\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company is the most profitable?</i> — it answers <i>How are Company X\'s operational costs compared to Company Y\'s?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. How are Company X\'s operational costs compared to Company Y\'s?',
          evidence: 'Their operational costs are lower than Company Y\'s.',
          options: [
            {
              t: 'They are lower than Company Y\'s.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Their operational costs are lower than Company Y\'s.”'
            },
            {
              t: 'Company X, with an 18% net margin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are Company X\'s operational costs compared to Company Y\'s?</i> — it answers <i>Which company is the most profitable?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It has the least market share of the three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are Company X\'s operational costs compared to Company Y\'s?</i> — it answers <i>What is Company Z\'s position in terms of market share?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is worse than its main rival\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are Company X\'s operational costs compared to Company Y\'s?</i> — it answers <i>How is Company Y\'s product quality compared to its main rival?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is Company Z\'s position in terms of market share?',
          evidence: 'Company Z is the newest competitor and has the least market share among the three.',
          options: [
            {
              t: 'It has the least market share of the three.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Company Z is the newest competitor and has the least market share among the three.”'
            },
            {
              t: 'Company X, with an 18% net margin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Company Z\'s position in terms of market share?</i> — it answers <i>Which company is the most profitable?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are lower than Company Y\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Company Z\'s position in terms of market share?</i> — it answers <i>How are Company X\'s operational costs compared to Company Y\'s?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is worse than its main rival\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Company Z\'s position in terms of market share?</i> — it answers <i>How is Company Y\'s product quality compared to its main rival?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. How is Company Y\'s product quality compared to its main rival?',
          evidence: 'Company Y has a stronger brand than Company X, but their product quality is worse than their main rival.',
          options: [
            {
              t: 'It is worse than its main rival\'s.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Company Y has a stronger brand than Company X, but their product quality is worse than their main rival.”'
            },
            {
              t: 'Company X, with an 18% net margin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is Company Y\'s product quality compared to its main rival?</i> — it answers <i>Which company is the most profitable?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are lower than Company Y\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is Company Y\'s product quality compared to its main rival?</i> — it answers <i>How are Company X\'s operational costs compared to Company Y\'s?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It has the least market share of the three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is Company Y\'s product quality compared to its main rival?</i> — it answers <i>What is Company Z\'s position in terms of market share?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Which company has the most potential for future growth?',
          evidence: 'Overall, while Company X is more financially sound than the others, Company Y has the most potential for future growth if they can reduce their operating expenses.',
          options: [
            {
              t: 'They are lower than Company Y\'s.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company has the most potential for future growth?</i> — it answers <i>How are Company X\'s operational costs compared to Company Y\'s?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It has the least market share of the three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company has the most potential for future growth?</i> — it answers <i>What is Company Z\'s position in terms of market share?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Company Y, if it can reduce its operating expenses.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Overall, while Company X is more financially sound than the others, Company Y has the most potential for future growth if they can reduce their operating expenses.”'
            },
            {
              t: 'Company X, with an 18% net margin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which company has the most potential for future growth?</i> — it answers <i>Which company is the most profitable?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'variance', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
