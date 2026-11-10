/* Unit 9 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Reading 3',
    page: 9,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: From Bookkeeper to Consultant',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 9 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: From Bookkeeper to Consultant',
      instruction: 'Read the biography of a successful accountant.',
      playable: [
        {
          t: 'Ines Duarte started her career as a junior bookkeeper ten years ago.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'She has always been dedicated to learning.', role: 'narrator', _key: 'narr' },
        {
          t: 'Since 2018, she has specialized in forensic accounting, and she has worked on several high-profile cases in three jurisdictions.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'She has just opened her own consultancy firm after leaving her previous employer.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'She is now training three new employees, all of whom have recently graduated from university.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u9-reading-3-c1',
      passage: '<p>Ines Duarte started her career as a junior bookkeeper ten years ago. She has always been dedicated to learning. Since 2018, she has specialized in forensic accounting, and she has worked on several high-profile cases in three jurisdictions. She has just opened her own consultancy firm after leaving her previous employer. She is now training three new employees, all of whom have recently graduated from university.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'source-document',
        caption: 'Reading · Reading Passage 3: From Bookkeeper to Consultant'
      }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 9 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How long has Ines been dedicated to learning?',
          evidence: 'Ines Duarte started her career as a junior bookkeeper ten years ago.',
          options: [
            {
              t: 'She has just opened her own consultancy firm.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ines been dedicated to learning?</i> — it answers <i>What has she just done?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ines been dedicated to learning?</i> — it answers <i>How many new employees is she training?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All of her career — the ten years since she started as a junior bookkeeper.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Ines Duarte started her career as a junior bookkeeper ten years ago.”'
            },
            {
              t: 'Forensic accounting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ines been dedicated to learning?</i> — it answers <i>What has Ines specialized in since 2018?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What has Ines specialized in since 2018?',
          evidence: 'Since 2018, she has specialized in forensic accounting, and she has worked on several high-profile cases in three jurisdictions.',
          options: [
            {
              t: 'All of her career — the ten years since she started as a junior bookkeeper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ines specialized in since 2018?</i> — it answers <i>How long has Ines been dedicated to learning?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She has just opened her own consultancy firm.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ines specialized in since 2018?</i> — it answers <i>What has she just done?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ines specialized in since 2018?</i> — it answers <i>How many new employees is she training?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Forensic accounting.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Since 2018, she has specialized in forensic accounting, and she has worked on several high-profile cases in three jurisdictions.”'
            }
          ]
        },
        {
          q: '3. What has she just done?',
          evidence: 'She has just opened her own consultancy firm after leaving her previous employer.',
          options: [
            {
              t: 'Three.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has she just done?</i> — it answers <i>How many new employees is she training?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She has just opened her own consultancy firm.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She has just opened her own consultancy firm after leaving her previous employer.”'
            },
            {
              t: 'All of her career — the ten years since she started as a junior bookkeeper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has she just done?</i> — it answers <i>How long has Ines been dedicated to learning?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Forensic accounting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has she just done?</i> — it answers <i>What has Ines specialized in since 2018?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. How many new employees is she training?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Forensic accounting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many new employees is she training?</i> — it answers <i>What has Ines specialized in since 2018?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She has just opened her own consultancy firm.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many new employees is she training?</i> — it answers <i>What has she just done?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Three.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'All of her career — the ten years since she started as a junior bookkeeper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many new employees is she training?</i> — it answers <i>How long has Ines been dedicated to learning?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What have all of her new employees recently done?',
          evidence: 'She is now training three new employees, all of whom have recently graduated from university.',
          options: [
            {
              t: 'Forensic accounting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have all of her new employees recently done?</i> — it answers <i>What has Ines specialized in since 2018?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She has just opened her own consultancy firm.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have all of her new employees recently done?</i> — it answers <i>What has she just done?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They have recently graduated from university.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She is now training three new employees, all of whom have recently graduated from university.”'
            },
            {
              t: 'All of her career — the ten years since she started as a junior bookkeeper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have all of her new employees recently done?</i> — it answers <i>How long has Ines been dedicated to learning?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'certification', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
