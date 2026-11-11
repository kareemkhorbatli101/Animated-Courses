/* Unit 8 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Listening 3',
    page: 8,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Year-End Procedures (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 8 · 3C',
      type: 'scene',
      source: 'book',
      title: 'Passage 3: Year-End Procedures (Financial Context)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: '"Every year, before the audit, all temporary accounts are closed to retained earnings.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Then, a post-closing trial balance is prepared to ensure that only permanent accounts remain open.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'After this, the final audit package is compiled.', role: 'narrator', _key: 'narr' },
        {
          t: 'This package must be delivered to the auditors before January 15th.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Any issues that are discovered will be reported to the audit committee.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The last listening, and the gaps below are the grammar of this unit. Play it once for the sense, then again for the form you are filling in.',
      scene: 'u8-listening-3-c1',
      passage: {
        paras: [
          { h: '<b>Context.</b> A briefing on the annual closing process.', speak: false },
          {
            h: '"Every year, before the audit, all temporary accounts are closed to retained earnings. Then, a post-closing trial balance is prepared to ensure that only permanent accounts remain open. After this, the final audit package is compiled. This package must be delivered to the auditors before January 15th. Any issues that are discovered will be reported to the audit committee."',
            say: 'Every year, before the audit, all temporary accounts are closed to retained earnings. Then, a post-closing trial balance is prepared to ensure that only permanent accounts remain open. After this, the final audit package is compiled. This package must be delivered to the auditors before January 15th. Any issues that are discovered will be reported to the audit committee.'
          }
        ],
        say: { scene: 'u8-listening-3-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: {
        spot: 'trial-balance',
        caption: 'Listening · Passage 3: Year-End Procedures (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 8 · 3C',
      type: 'cloze',
      title: 'Passage 3: Year-End Procedures (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Before the audit, all temporary accounts [[1]] (close) to retained earnings.<br>2. Then, a post-closing trial balance [[2]] (prepare).<br>3. The final audit package [[3]] (must / deliver) before January 15th.<br>4. Any issues that [[4]] (discover) will be reported.<br>5. The report [[5]] (give) to the audit committee.</div>',
      answers: {
        '1': ['are closed'],
        '2': ['is prepared'],
        '3': ['must be delivered'],
        '4': ['are discovered'],
        '5': ['is given']
      },
      bank: ['are closed', 'are discovered', 'is given', 'is prepared', 'must be delivered'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>are closed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>is prepared</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>must be delivered</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>are discovered</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>is given</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Before the audit, all temporary accounts <u>are closed</u> (close) to retained earnings.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Year-End Procedures (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
