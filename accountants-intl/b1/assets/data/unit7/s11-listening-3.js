/* Unit 7 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Listening 3',
    page: 7,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Explaining Adverse Variance (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 7 · 3C',
      type: 'study',
      source: 'book',
      title: 'Passage 3: Explaining Adverse Variance (Financial Context)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> An explanation of a payroll variance in a board report.</p><div class="script"><p>Speaker: "The payroll variance is EUR 12,000 adverse. This is more significant than we initially projected. We had three more employees than budgeted, making this the most costly department in terms of personnel. We believe that next month, the variance will be smaller than this one, as we have implemented a hiring freeze. This is a short-term issue, and it is not the most critical risk to the company."</p></div>',
      playable: [
        {
          t: 'The payroll variance is EUR 12,000 adverse. This is more significant than we initially projected. We had three more employees than budgeted, making this the most costly department in terms of personnel. We believe that next month, the variance will be smaller than this one, as we have implemented a hiring freeze. This is a short-term issue, and it is not the most critical risk to the company.',
          role: 'spk:Speaker',
          who: 'Speaker'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'variance',
        caption: 'Listening · Passage 3: Explaining Adverse Variance (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 7 · 3C',
      type: 'cloze',
      title: 'Passage 3: Explaining Adverse Variance (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. The payroll variance is EUR 12,000 adverse, which is [[1]] (significant) than projected.<br>2. They had three [[2]] (many) employees than budgeted.<br>3. This is the [[3]] (costly) department in terms of personnel.<br>4. Next month, the variance will be [[4]] (small) than this one.<br>5. It is not the [[5]] (critical) risk to the company.</div>',
      answers: {
        '1': ['more significant'],
        '2': ['more'],
        '3': ['most costly'],
        '4': ['smaller'],
        '5': ['most critical']
      },
      bank: ['more', 'more significant', 'most costly', 'most critical', 'smaller'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>more significant</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>more</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>most costly</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>smaller</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>most critical</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> The payroll variance is EUR 12,000 adverse, which is <u>more significant</u> (significant) than projected.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Explaining Adverse Variance (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
