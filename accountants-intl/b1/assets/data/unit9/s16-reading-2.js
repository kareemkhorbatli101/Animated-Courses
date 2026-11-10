/* Unit 9 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Reading 2',
    page: 9,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: The Skill Gap in Accounting Technology',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 9 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: The Skill Gap in Accounting Technology',
      instruction: 'Read the article excerpt on professional development.',
      playable: [
        {
          t: 'The accounting profession has changed dramatically in the last decade.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Many firms have invested heavily in AI tools and automation software.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This shift has created a need for professionals with advanced data analytics skills.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Job descriptions now reflect this: experience with data visualization tools has become a core competency for senior analysts.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Employees who haven\'t developed these skills yet may find themselves left behind by these technological advancements.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u9-reading-2-c1',
      passage: '<p>The accounting profession has changed dramatically in the last decade. Many firms have invested heavily in AI tools and automation software. This shift has created a need for professionals with advanced data analytics skills. Job descriptions now reflect this: experience with data visualization tools has become a core competency for senior analysts. Employees who haven\'t developed these skills yet may find themselves left behind by these technological advancements.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'certification',
        caption: 'Reading · Reading Passage 2: The Skill Gap in Accounting Technology'
      }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 9 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How has the accounting profession changed dramatically in the last decade?',
          evidence: 'Many firms have invested heavily in AI tools and automation software.',
          options: [
            {
              t: 'Experience with data visualization tools.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How has the accounting profession changed dramatically in the last decade?</i> — it answers <i>What has become a core competency for senior analysts?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Employees who have not developed advanced data analytics skills yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How has the accounting profession changed dramatically in the last decade?</i> — it answers <i>Who may find themselves left behind?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How has the accounting profession changed dramatically in the last decade?</i> — it answers <i>What type of tools have many firms invested in?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Many firms have invested heavily in AI tools and automation software.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Many firms have invested heavily in AI tools and automation software.”'
            }
          ]
        },
        {
          q: '2. What type of tools have many firms invested in?',
          evidence: 'Many firms have invested heavily in AI tools and automation software.',
          options: [
            {
              t: 'Experience with data visualization tools.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What type of tools have many firms invested in?</i> — it answers <i>What has become a core competency for senior analysts?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Employees who have not developed advanced data analytics skills yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What type of tools have many firms invested in?</i> — it answers <i>Who may find themselves left behind?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Many firms have invested heavily in AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What type of tools have many firms invested in?</i> — it answers <i>How has the accounting profession changed dramatically in the last decade?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'AI tools and automation software.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Many firms have invested heavily in AI tools and automation software.”'
            }
          ]
        },
        {
          q: '3. What has become a core competency for senior analysts?',
          evidence: 'Job descriptions now reflect this: experience with data visualization tools has become a core competency for senior analysts.',
          options: [
            {
              t: 'Many firms have invested heavily in AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has become a core competency for senior analysts?</i> — it answers <i>How has the accounting profession changed dramatically in the last decade?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has become a core competency for senior analysts?</i> — it answers <i>What type of tools have many firms invested in?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Experience with data visualization tools.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Job descriptions now reflect this: experience with data visualization tools has become a core competency for senior analysts.”'
            },
            {
              t: 'Employees who have not developed advanced data analytics skills yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has become a core competency for senior analysts?</i> — it answers <i>Who may find themselves left behind?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. Who may find themselves left behind?',
          evidence: 'This shift has created a need for professionals with advanced data analytics skills.',
          options: [
            {
              t: 'Employees who have not developed advanced data analytics skills yet.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This shift has created a need for professionals with advanced data analytics skills.”'
            },
            {
              t: 'Many firms have invested heavily in AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who may find themselves left behind?</i> — it answers <i>How has the accounting profession changed dramatically in the last decade?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Experience with data visualization tools.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who may find themselves left behind?</i> — it answers <i>What has become a core competency for senior analysts?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who may find themselves left behind?</i> — it answers <i>What type of tools have many firms invested in?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What has the shift created a need for?',
          evidence: 'This shift has created a need for professionals with advanced data analytics skills.',
          options: [
            {
              t: 'A need for professionals with advanced data analytics skills.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This shift has created a need for professionals with advanced data analytics skills.”'
            },
            {
              t: 'Many firms have invested heavily in AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the shift created a need for?</i> — it answers <i>How has the accounting profession changed dramatically in the last decade?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'AI tools and automation software.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the shift created a need for?</i> — it answers <i>What type of tools have many firms invested in?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Experience with data visualization tools.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the shift created a need for?</i> — it answers <i>What has become a core competency for senior analysts?</i> Check what the question actually asks for before you look for it in the text.'
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
