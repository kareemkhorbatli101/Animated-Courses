/* Unit 6 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Listening 3',
    page: 6,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Hypothetical Fraud Discussion (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 6 · 3C',
      type: 'scene',
      source: 'book',
      title: 'Passage 3: Hypothetical Fraud Discussion (Financial Context)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: 'Committee Member 1: "If an employee were to commit fraud by creating fake vendor invoices, how would we detect it?',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Committee Member 2: "If we had automated exception reporting, we would flag the unusual payment size.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If we were to investigate every small discrepancy, it would take too much time.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Committee Member 1: "I agree.', role: 'narrator', _key: 'narr' },
        {
          t: 'If we don\'t invest in better controls soon, we will face significant exposure next year.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u6-listening-3-c1',
      passage: '<p><b>Context.</b> The risk committee is discussing a worst-case scenario.</p><div class="script"><p>Committee Member 1: "If an employee were to commit fraud by creating fake vendor invoices, how would we detect it?"</p><p>Committee Member 2: "If we had automated exception reporting, we would flag the unusual payment size. But we don\'t. If we were to investigate every small discrepancy, it would take too much time."</p><p>Committee Member 1: "I agree. If we don\'t invest in better controls soon, we will face significant exposure next year."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'discrepancy',
        caption: 'Listening · Passage 3: Hypothetical Fraud Discussion (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 6 · 3C',
      type: 'cloze',
      title: 'Passage 3: Hypothetical Fraud Discussion (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Hypothetical Fraud: If an employee were to commit fraud, how [[1]] we detect it? (Second Conditional)<br>2. Exception Reporting: If we had automated reporting, we [[2]] the unusual payment. (Second Conditional)<br>3. Investigation Cost: If we [[3]] every small discrepancy, it would take too much time. (Second Conditional)<br>4. Future Risk: If we don\'t invest in controls, we [[4]] significant exposure. (First Conditional)</div>',
      answers: { '1': ['would'], '2': ['would flag'], '3': ['were to investigate'], '4': ['will face'] },
      bank: ['were to investigate', 'will face', 'would', 'would flag'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>would</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>would flag</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>were to investigate</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>will face</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Hypothetical Fraud: If an employee were to commit fraud, how <u>would</u> we detect it? (Second Conditional)',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Hypothetical Fraud Discussion (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
