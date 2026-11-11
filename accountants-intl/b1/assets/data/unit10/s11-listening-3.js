/* Unit 10 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Listening 3',
    page: 10,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: The Board Decision (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 10 · 3C',
      type: 'scene',
      source: 'book',
      title: 'Passage 3: The Board Decision (Financial Context)',
      instruction: 'Fill in the Reported Speech forms:',
      playable: [
        {
          t: '"The Board has made a clear decision: they will authorize the acquisition of the competitor.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'They emphasized that this was a strategic move to gain market share in two new regions.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'They said they had been planning this merger for two years.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'The last listening, and the gaps below are the grammar of this unit. Play it once for the sense, then again for the form you are filling in.',
      scene: 'u10-listening-3-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A senior manager is summarizing the Board’s annual decisions.',
            speak: false
          },
          {
            h: '"The Board has made a clear decision: they will authorize the acquisition of the competitor. They emphasized that this was a strategic move to gain market share in two new regions. They said they had been planning this merger for two years."',
            say: 'The Board has made a clear decision: they will authorize the acquisition of the competitor. They emphasized that this was a strategic move to gain market share in two new regions. They said they had been planning this merger for two years.'
          }
        ],
        say: { scene: 'u10-listening-3-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'reporting', caption: 'Listening · Passage 3: The Board Decision (Financial Context)' }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 10 · 3C',
      type: 'cloze',
      title: 'Passage 3: The Board Decision (Financial Context)',
      instruction: 'Fill in the Reported Speech forms:',
      text: '<div style="font-size:16px;line-height:2.4">1. The manager said the Board [[1]] (authorize) the acquisition.<br>2. The Board emphasized that this [[2]] (be) a strategic move.<br>3. The manager conveyed that they [[3]] (plan) this merger for two years.<br>4. He stated that the decision [[4]] (be) clear.</div>',
      answers: { '1': ['would authorize'], '2': ['was'], '3': ['had been planning'], '4': ['was'] },
      bank: ['had been planning', 'was', 'would authorize'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>would authorize</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>was</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>had been planning</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>was</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> The manager said the Board <u>would authorize</u> (authorize) the acquisition.',
      visual: {
        spot: 'transaction',
        caption: 'Listening · Passage 3: The Board Decision (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
