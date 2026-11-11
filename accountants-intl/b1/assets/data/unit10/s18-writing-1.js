/* Unit 10 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Writing 1',
    page: 10,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Reported Speech)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 10 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Reported Speech)',
      instruction: 'Report the following Direct Speech sentences. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. "The profitability will increase in Q3." -> She forecasted that the profitability [[2]] in Q3.<br>3. "We submitted the tax return last week." -> They reported that they [[3]] the tax return the previous week.</div>',
      answers: { '2': ['would increase'], '3': ['had submitted'] },
      bank: ['had submitted', 'would increase'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>would increase</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>had submitted</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> "The profitability will increase in Q3." -> She forecasted that the profitability <u>would increase</u> in Q3.',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Reported Speech)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 10 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Reported Speech)',
      instruction: 'Report the following Direct Speech sentences. (Only the first one is done for you).',
      paras: [
        {
          label: '"I am approving the expense report." -> He said that he was approving the expense report.',
          purpose: ''
        },
        {
          label: '"The profitability will increase in Q3." -> She forecasted that the profitability ____________________ in Q3.',
          purpose: ''
        },
        {
          label: '"We submitted the tax return last week." -> They reported that they ____________________ the tax return the previous week.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        '"I am approving the expense report." -> He said that he was approving the expense report.',
        '"The profitability will increase in Q3." -> She forecasted that the profitability ____________________ in Q3.',
        '"We submitted the tax return last week." -> They reported that they ____________________ the tax return the previous week.'
      ],
      model: 'He said that he was approving the expense report.',
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'Report the following Direct Speech sentences. (Only the first one is done for you).',
          '"I am approving the expense report." -> He said that he was approving the expense report.',
          '"The profitability will increase in Q3." -> She forecasted that the profitability ____________________ in Q3.',
          '"We submitted the tax return last week." -> They reported that they ____________________ the tax return the previous week.'
        ]
      },
      visual: { spot: 'reporting', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 10 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: Memo to Staff',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short internal memo (70–80 words) to your team reporting a decision from the Group CFO regarding cost-cutting.</p><p>MEMORANDUM</p><p>To: Finance Team</p><p>From: [Your Name]</p><p>Subject: The Group CFO’s Cost Directive</p><p>"I am conveying the Group CFO’s decision. She stated that we had to reduce all non-essential travel immediately. She mandated that all department heads review their budgets by the end of the week. She emphasized that this action would ensure the group’s Q4 profitability."</p><ol><li>Use at least three reporting verbs (e.g., stated, mandated, emphasized).</li><li>Change the tenses correctly for Reported Speech.</li></ol>',
      playable: [
        { t: 'Subject: The Group CFO’s Cost Directive', role: 'narrator' },
        { t: '"I am conveying the Group CFO’s decision.', role: 'narrator' },
        {
          t: 'She stated that we had to reduce all non-essential travel immediately.',
          role: 'narrator'
        },
        {
          t: 'She mandated that all department heads review their budgets by the end of the week.',
          role: 'narrator'
        },
        {
          t: 'She emphasized that this action would ensure the group’s Q4 profitability.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Writing · Writing Task 1: Memo to Staff', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 10 · 6B',
      type: 'writer',
      title: 'Writing Task 1: Memo to Staff',
      instruction: 'Include:',
      paras: [
        {
          label: 'Use at least three reporting verbs (e.g., stated, mandated, emphasized).',
          purpose: ''
        },
        { label: 'Change the tenses correctly for Reported Speech.', purpose: '' },
        { label: 'Example:', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'Use at least three reporting verbs (e.g., stated, mandated, emphasized).',
        'Change the tenses correctly for Reported Speech.',
        'Example:'
      ],
      model: 'The Group CFO stated that the shipping costs had doubled. She mandated that every order over EUR 5,000 be approved by the controller, and she emphasised that the deadline would not move.',
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'Include:',
          'Use at least three reporting verbs (e.g., stated, mandated, emphasized).',
          'Change the tenses correctly for Reported Speech.',
          'Example:'
        ]
      },
      visual: { spot: 'reporting', caption: 'Write it the way this unit has been teaching you to.' },
      bank: ['Mandate', 'State']
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
