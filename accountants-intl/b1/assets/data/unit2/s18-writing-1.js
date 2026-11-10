/* Unit 2 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Writing 1',
    page: 2,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Past Tenses)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 2 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Past Tenses)',
      instruction: 'Paraphrase the following statements, using the Past Simple and Past Continuous structure. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. The meeting started, so I couldn\'t finish the posting. -> I [[2a]] (post) the entries when the meeting [[2b]] (start).<br>3. The system crashed during the reconciliation process. -> The system [[3a]] (crash) while I [[3b]] (reconcile) the bank statement.</div>',
      answers: { '2a': ['was posting'], '2b': ['started'], '3a': ['crashed'], '3b': ['was reconciling'] },
      bank: ['crashed', 'started', 'was posting', 'was reconciling'],
      whyTitle: 'What decided each one',
      why: {
        '2a': '<b>was posting</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2b': '<b>started</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3a': '<b>crashed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3b': '<b>was reconciling</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> The meeting started, so I couldn\'t finish the posting. -> I <u>was posting</u> (post) the entries when the meeting ____________________ (start).',
      visual: { spot: 'posting', caption: 'Writing · Guided Writing: Paraphrasing (Past Tenses)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 2 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Past Tenses)',
      instruction: 'Paraphrase the following statements, using the Past Simple and Past Continuous structure. (Only the first one is done for you).',
      paras: [
        {
          label: 'I found the error while I was reviewing the accounts. -> I was reviewing the accounts when I found the error.',
          purpose: ''
        },
        {
          label: 'The meeting started, so I couldn\'t finish the posting. -> I ____________________ (post) the entries when the meeting ____________________ (start).',
          purpose: ''
        },
        {
          label: 'The system crashed during the reconciliation process. -> The system ____________________ (crash) while I ____________________ (reconcile) the bank statement.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'I found the error while I was reviewing the accounts. -> I was reviewing the accounts when I found the error.',
        'The meeting started, so I couldn\'t finish the posting. -> I ____________________ (post) the entries when the meeting ____________________ (start).',
        'The system crashed during the reconciliation process. -> The system ____________________ (crash) while I ____________________ (reconcile) the bank statement.'
      ],
      model: 'I was reviewing the accounts when I found the error.',
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Paraphrase the following statements, using the Past Simple and Past Continuous structure. (Only the first one is done for you).',
          'I found the error while I was reviewing the accounts. -> I was reviewing the accounts when I found the error.',
          'The meeting started, so I couldn\'t finish the posting. -> I ____________________ (post) the entries when the meeting ____________________ (start).',
          'The system crashed during the reconciliation process. -> The system ____________________ (crash) while I ____________________ (reconcile) the bank statement.'
        ]
      },
      visual: { spot: 'journal', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 2 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: Explaining Yesterday\'s Work Flow',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short email (50–60 words) to your supervisor, detailing your work flow yesterday and mentioning one interruption.</p><ol><li>Two tasks you completed (Past Simple).</li><li>One task you were doing when you were interrupted (Past Continuous + Past Simple).</li><li>What you did after the interruption (Past Simple).</li><li>Example: "Hi Marta, Yesterday, I processed all the travel expense claims and submitted the payroll file for Toronto. However, I was performing the final bank reconciliation when the system froze. I had to restart my computer, and then I corrected the five errors I had found."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reconcile',
        caption: 'Writing · Writing Task 1: Explaining Yesterday\'s Work Flow',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 2 · 6B',
      type: 'writer',
      title: 'Writing Task 1: Explaining Yesterday\'s Work Flow',
      instruction: 'Include:',
      paras: [
        { label: 'Two tasks you completed (Past Simple).', purpose: '' },
        {
          label: 'One task you were doing when you were interrupted (Past Continuous + Past Simple).',
          purpose: ''
        },
        { label: 'What you did after the interruption (Past Simple).', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'Two tasks you completed (Past Simple).',
        'One task you were doing when you were interrupted (Past Continuous + Past Simple).',
        'What you did after the interruption (Past Simple).'
      ],
      model: 'Hi Marta, Yesterday, I processed all the travel expense claims and submitted the payroll file for Toronto. However, I was performing the final bank reconciliation when the system froze. I had to restart my computer, and then I corrected the five errors I had found.',
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Include:',
          'Two tasks you completed (Past Simple).',
          'One task you were doing when you were interrupted (Past Continuous + Past Simple).',
          'What you did after the interruption (Past Simple).'
        ]
      },
      visual: { spot: 'journal', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
