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
      scene: 'u4-listening-2-c1',
      passage: '<p><b>Context.</b> Instructions are given for the annual physical count.</p><div class="script"><p>"Team, the annual stocktaking begins at 9 AM tomorrow, local time in each office. You must count all items, including consumables and equipment. We will check the physical count against the ledger. We cannot afford many variances. We have little time to reconcile the figures. Focus on the high-value assets first. Do not forget to record the serial numbers. A few items are obsolete, so do not include them in the final count."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
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
