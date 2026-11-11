/* Unit 3 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Reading 2',
    page: 3,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Reimbursement and Documentation',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 3 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Reimbursement and Documentation',
      instruction: 'Read the procedure for employee reimbursement.',
      playable: [
        {
          t: 'All employees must submit a completed expense claim form for reimbursement of out-of-pocket expenditures.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Would employees please attach the original receipt to the claim?',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We cannot process photocopies.', role: 'narrator', _key: 'narr' },
        {
          t: 'If the expense exceeds the small purchase limit of EUR 100, management must provide formal authorization.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The finance team can offer to process reimbursement every Friday.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Could you ensure that the correct expense account code and the correct currency are used on the form?',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The second text. Every question below is settled by this passage and nothing else, so when two options both look true, choose the one this text actually says.',
      scene: 'u3-reading-2-c1',
      passage: {
        paras: [
          {
            h: 'All employees must submit a completed expense claim form for reimbursement of out-of-pocket expenditures. Would employees please attach the original receipt to the claim? We cannot process photocopies. If the expense exceeds the small purchase limit of EUR 100, management must provide formal authorization. The finance team can offer to process reimbursement every Friday. Could you ensure that the correct expense account code and the correct currency are used on the form?'
          }
        ],
        say: { scene: 'u3-reading-2-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: {
        spot: 'payment-run',
        caption: 'Reading · Reading Passage 2: Reimbursement and Documentation'
      }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 3 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What must employees submit for reimbursement?',
          evidence: 'All employees must submit a completed expense claim form for reimbursement of out-of-pocket expenditures.',
          options: [
            {
              t: 'The original receipt.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must employees submit for reimbursement?</i> — it answers <i>What would employees be asked to attach to the claim?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Photocopies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must employees submit for reimbursement?</i> — it answers <i>What cannot the finance team process?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Every Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must employees submit for reimbursement?</i> — it answers <i>When can the finance team offer to process reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A completed expense claim form.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “All employees must submit a completed expense claim form for reimbursement of out-of-pocket expenditures.”'
            }
          ]
        },
        {
          q: '2. What would employees be asked to attach to the claim?',
          evidence: 'Would employees please attach the original receipt to the claim?',
          options: [
            {
              t: 'Photocopies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would employees be asked to attach to the claim?</i> — it answers <i>What cannot the finance team process?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Every Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would employees be asked to attach to the claim?</i> — it answers <i>When can the finance team offer to process reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The original receipt.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Would employees please attach the original receipt to the claim?”'
            },
            {
              t: 'A completed expense claim form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would employees be asked to attach to the claim?</i> — it answers <i>What must employees submit for reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What cannot the finance team process?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Every Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the finance team process?</i> — it answers <i>When can the finance team offer to process reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Photocopies.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The original receipt.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the finance team process?</i> — it answers <i>What would employees be asked to attach to the claim?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A completed expense claim form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the finance team process?</i> — it answers <i>What must employees submit for reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. When can the finance team offer to process reimbursement?',
          evidence: 'The finance team can offer to process reimbursement every Friday.',
          options: [
            {
              t: 'Photocopies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the finance team offer to process reimbursement?</i> — it answers <i>What cannot the finance team process?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Every Friday.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The finance team can offer to process reimbursement every Friday.”'
            },
            {
              t: 'The original receipt.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the finance team offer to process reimbursement?</i> — it answers <i>What would employees be asked to attach to the claim?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A completed expense claim form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the finance team offer to process reimbursement?</i> — it answers <i>What must employees submit for reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What is required if the expense exceeds EUR 100?',
          evidence: 'If the expense exceeds the small purchase limit of EUR 100, management must provide formal authorization.',
          options: [
            {
              t: 'The original receipt.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is required if the expense exceeds EUR 100?</i> — it answers <i>What would employees be asked to attach to the claim?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Photocopies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is required if the expense exceeds EUR 100?</i> — it answers <i>What cannot the finance team process?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A completed expense claim form.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is required if the expense exceeds EUR 100?</i> — it answers <i>What must employees submit for reimbursement?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Formal authorization from management.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If the expense exceeds the small purchase limit of EUR 100, management must provide formal authorization.”'
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
