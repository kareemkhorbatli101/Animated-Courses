/* Unit 9 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Writing 1',
    page: 9,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Present Perfect)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 9 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Present Perfect)',
      instruction: 'Paraphrase the following sentences using the Present Perfect Simple form. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. She finished the audit yesterday. -> She has [[2]] the audit.<br>3. They did not use SAP before. -> They have [[3]] SAP before.</div>',
      answers: { '2': ['finished'], '3': ['not used'] },
      bank: ['finished', 'not used'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>finished</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>not used</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> She finished the audit yesterday. -> She has <u>finished</u> the audit.',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Present Perfect)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 9 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Present Perfect)',
      instruction: 'Paraphrase the following sentences using the Present Perfect Simple form. (Only the first one is done for you).',
      paras: [
        { label: 'I started working here in 2020. -> I have worked here since 2020.', purpose: '' },
        {
          label: 'She finished the audit yesterday. -> She has ____________________ the audit.',
          purpose: ''
        },
        {
          label: 'They did not use SAP before. -> They have ____________________ SAP before.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'I started working here in 2020. -> I have worked here since 2020.',
        'She finished the audit yesterday. -> She has ____________________ the audit.',
        'They did not use SAP before. -> They have ____________________ SAP before.'
      ],
      model: 'I have worked here since 2020.',
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Paraphrase the following sentences using the Present Perfect Simple form. (Only the first one is done for you).',
          'I started working here in 2020. -> I have worked here since 2020.',
          'She finished the audit yesterday. -> She has ____________________ the audit.',
          'They did not use SAP before. -> They have ____________________ SAP before.'
        ]
      },
      visual: { spot: 'certification', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 9 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: Software Skills Section (CV)',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short section (50–60 words) for a CV/resume describing your software proficiency.</p><ol><li>Use the Present Perfect Simple to describe the duration of use (for/since).</li><li>Mention at least three software packages (e.g., Excel, QuickBooks, Oracle).</li><li>Example: "I have utilized Oracle ERP for all financial reporting since 2021. I have also mastered advanced Excel functions for complex data modeling. Recently, I have started using Power BI for data visualization."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'journal',
        caption: 'Writing · Writing Task 1: Software Skills Section (CV)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 9 · 6B',
      type: 'writer',
      title: 'Writing Task 1: Software Skills Section (CV)',
      instruction: 'Include:',
      paras: [
        {
          label: 'Use the Present Perfect Simple to describe the duration of use (for/since).',
          purpose: ''
        },
        {
          label: 'Mention at least three software packages (e.g., Excel, QuickBooks, Oracle).',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'Use the Present Perfect Simple to describe the duration of use (for/since).',
        'Mention at least three software packages (e.g., Excel, QuickBooks, Oracle).'
      ],
      model: 'I have utilized Oracle ERP for all financial reporting since 2021. I have also mastered advanced Excel functions for complex data modeling. Recently, I have started using Power BI for data visualization.',
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Include:',
          'Use the Present Perfect Simple to describe the duration of use (for/since).',
          'Mention at least three software packages (e.g., Excel, QuickBooks, Oracle).',
          'Example: "I have utilized Oracle ERP for all financial reporting since 2021. I have also mastered advanced Excel functions for complex data modeling. Recently, I have started using Power BI for data visualization."'
        ]
      },
      visual: { spot: 'certification', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
