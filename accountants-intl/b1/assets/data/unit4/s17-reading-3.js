/* Unit 4 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Reading 3',
    page: 4,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Obsolete Assets',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 4 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Obsolete Assets',
      instruction: 'Read the policy on obsolete equipment.',
      playable: [
        {
          t: 'Assets become obsolete when they are no longer useful to the business, often due to technological changes.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'A few old computers and a large printer are currently considered obsolete assets.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'These must be disposed of according to strict environmental guidelines, which differ from country to country.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We do not have much storage space, so they must be removed quickly.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We do not want too many old items taking up space.', role: 'narrator', _key: 'narr' },
        { t: 'How much money can we get from recycling them?', role: 'narrator', _key: 'narr' },
        { t: 'That is the final question we must answer.', role: 'narrator', _key: 'narr' }
      ],
      scene: 'u4-reading-3-c1',
      passage: '<p>Assets become obsolete when they are no longer useful to the business, often due to technological changes. A few old computers and a large printer are currently considered obsolete assets. These must be disposed of according to strict environmental guidelines, which differ from country to country. We do not have much storage space, so they must be removed quickly. We do not want too many old items taking up space. How much money can we get from recycling them? That is the final question we must answer.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'balance', caption: 'Reading · Reading Passage 3: Obsolete Assets' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 4 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. When do assets become obsolete?',
          evidence: 'Assets become obsolete when they are no longer useful to the business, often due to technological changes.',
          options: [
            {
              t: 'A few old computers and a large printer.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When do assets become obsolete?</i> — it answers <i>What are a few examples of obsolete assets mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Not much — so the obsolete items must be removed quickly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When do assets become obsolete?</i> — it answers <i>How much storage space does the company have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'When they are no longer useful to the business, often because of technological change.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Assets become obsolete when they are no longer useful to the business, often due to technological changes.”'
            },
            {
              t: 'None. It does not want too many old items taking up space.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When do assets become obsolete?</i> — it answers <i>How many old items does the company want to keep?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What are a few examples of obsolete assets mentioned?',
          evidence: 'A few old computers and a large printer are currently considered obsolete assets.',
          options: [
            {
              t: 'None. It does not want too many old items taking up space.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of obsolete assets mentioned?</i> — it answers <i>How many old items does the company want to keep?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A few old computers and a large printer.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “A few old computers and a large printer are currently considered obsolete assets.”'
            },
            {
              t: 'Not much — so the obsolete items must be removed quickly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of obsolete assets mentioned?</i> — it answers <i>How much storage space does the company have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'When they are no longer useful to the business, often because of technological change.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of obsolete assets mentioned?</i> — it answers <i>When do assets become obsolete?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. How much storage space does the company have?',
          evidence: 'We do not have much storage space, so they must be removed quickly.',
          options: [
            {
              t: 'None. It does not want too many old items taking up space.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much storage space does the company have?</i> — it answers <i>How many old items does the company want to keep?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Not much — so the obsolete items must be removed quickly.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We do not have much storage space, so they must be removed quickly.”'
            },
            {
              t: 'When they are no longer useful to the business, often because of technological change.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much storage space does the company have?</i> — it answers <i>When do assets become obsolete?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A few old computers and a large printer.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much storage space does the company have?</i> — it answers <i>What are a few examples of obsolete assets mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. How many old items does the company want to keep?',
          evidence: 'We do not want too many old items taking up space.',
          options: [
            {
              t: 'Not much — so the obsolete items must be removed quickly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many old items does the company want to keep?</i> — it answers <i>How much storage space does the company have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'None. It does not want too many old items taking up space.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We do not want too many old items taking up space.”'
            },
            {
              t: 'A few old computers and a large printer.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many old items does the company want to keep?</i> — it answers <i>What are a few examples of obsolete assets mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'When they are no longer useful to the business, often because of technological change.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many old items does the company want to keep?</i> — it answers <i>When do assets become obsolete?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What must the company do with these assets?',
          evidence: 'These must be disposed of according to strict environmental guidelines, which differ from country to country.',
          options: [
            {
              t: 'Not much — so the obsolete items must be removed quickly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the company do with these assets?</i> — it answers <i>How much storage space does the company have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Dispose of them under strict environmental guidelines, which differ from country to country.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “These must be disposed of according to strict environmental guidelines, which differ from country to country.”'
            },
            {
              t: 'A few old computers and a large printer.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the company do with these assets?</i> — it answers <i>What are a few examples of obsolete assets mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'When they are no longer useful to the business, often because of technological change.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the company do with these assets?</i> — it answers <i>When do assets become obsolete?</i> Check what the question actually asks for before you look for it in the text.'
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
