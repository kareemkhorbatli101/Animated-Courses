/* Unit 4 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Listening 2',
    page: 4,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: Annual Stocktaking Instructions (Operating Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 4 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: Annual Stocktaking Instructions (Operating Context)',
      instruction: 'True or False:',
      playable: [
        {
          t: '"Team, the annual stocktaking begins at 9 AM tomorrow, local time in each office.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'You must count all items, including consumables and equipment.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We will check the physical count against the ledger.', role: 'narrator', _key: 'narr' },
        { t: 'We cannot afford many variances.', role: 'narrator', _key: 'narr' },
        { t: 'We have little time to reconcile the figures.', role: 'narrator', _key: 'narr' },
        { t: 'Focus on the high-value assets first.', role: 'narrator', _key: 'narr' },
        { t: 'Do not forget to record the serial numbers.', role: 'narrator', _key: 'narr' },
        {
          t: 'A few items are obsolete, so do not include them in the final count.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'A second conversation, and this time the statements below are true or false. Decide from what is said, not from what would usually be true in an accounts office.',
      scene: 'u4-listening-2-c1',
      passage: {
        paras: [
          { h: '<b>Context.</b> Instructions are given for the annual physical count.', speak: false },
          {
            h: '"Team, the annual stocktaking begins at 9 AM tomorrow, local time in each office. You must count all items, including consumables and equipment. We will check the physical count against the ledger. We cannot afford many variances. We have little time to reconcile the figures. Focus on the high-value assets first. Do not forget to record the serial numbers. A few items are obsolete, so do not include them in the final count."',
            say: 'Team, the annual stocktaking begins at 9 AM tomorrow, local time in each office. You must count all items, including consumables and equipment. We will check the physical count against the ledger. We cannot afford many variances. We have little time to reconcile the figures. Focus on the high-value assets first. Do not forget to record the serial numbers. A few items are obsolete, so do not include them in the final count.'
          }
        ],
        say: { scene: 'u4-listening-2-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: {
        spot: 'stock',
        caption: 'Listening · Passage 2: Annual Stocktaking Instructions (Operating Context)'
      }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
