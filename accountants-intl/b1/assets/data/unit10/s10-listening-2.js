/* Unit 10 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Listening 2',
    page: 10,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: Auditor’s Findings (Operating Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 10 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: Auditor’s Findings (Operating Context)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: '"Our preliminary review shows that the internal controls are generally strong.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'However, we must mandate that you change the inventory valuation method to comply with IFRS.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We will not issue a clean opinion unless this change is made immediately.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'A second conversation, and this time the statements below are true or false. Decide from what is said, not from what would usually be true in an accounts office.',
      scene: 'u10-listening-2-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A Partner from an external audit firm is giving feedback.',
            speak: false
          },
          {
            h: '"Our preliminary review shows that the internal controls are generally strong. However, we must mandate that you change the inventory valuation method to comply with IFRS. We will not issue a clean opinion unless this change is made immediately."',
            say: 'Our preliminary review shows that the internal controls are generally strong. However, we must mandate that you change the inventory valuation method to comply with IFRS. We will not issue a clean opinion unless this change is made immediately.'
          }
        ],
        say: { scene: 'u10-listening-2-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'stock', caption: 'Listening · Passage 2: Auditor’s Findings (Operating Context)' }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
