/* Unit 9 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Listening 3',
    page: 9,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Recent Achievements (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 9 · 3C',
      type: 'scene',
      source: 'book',
      title: 'Passage 3: Recent Achievements (Financial Context)',
      instruction: 'Fill in the Present Perfect forms:',
      playable: [
        { t: '"We have just finalized the quarterly VAT submission.', role: 'narrator', _key: 'narr' },
        { t: 'It was a complex project, but we have met the deadline.', role: 'narrator', _key: 'narr' },
        {
          t: 'Specifically, Priya has streamlined the data extraction process, which has saved us about ten hours of work this month.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We haven\'t fully documented the new process yet, but that will be done next week.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u9-listening-3-c1',
      passage: '<p><b>Context.</b> A team leader is giving a project update.</p><div class="script"><p>"We have just finalized the quarterly VAT submission. It was a complex project, but we have met the deadline. Specifically, Priya has streamlined the data extraction process, which has saved us about ten hours of work this month. We haven\'t fully documented the new process yet, but that will be done next week."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Recent Achievements (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 9 · 3C',
      type: 'cloze',
      title: 'Passage 3: Recent Achievements (Financial Context)',
      instruction: 'Fill in the Present Perfect forms:',
      text: '<div style="font-size:16px;line-height:2.4">1. The team [[1]] (just / finalize) the quarterly VAT submission.<br>2. They [[2]] (meet) the deadline.<br>3. Priya [[3]] (streamline) the data extraction process.<br>4. The new process [[4]] (not / fully / document) yet.</div>',
      answers: {
        '1': ['has just finalized'],
        '2': ['have met'],
        '3': ['has streamlined'],
        '4': ['has not been fully documented']
      },
      bank: ['has just finalized', 'has not been fully documented', 'has streamlined', 'have met'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>has just finalized</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>have met</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>has streamlined</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>has not been fully documented</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> The team <u>has just finalized</u> (just / finalize) the quarterly VAT submission.',
      visual: {
        spot: 'certification',
        caption: 'Listening · Passage 3: Recent Achievements (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
