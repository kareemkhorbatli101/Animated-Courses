/* Unit 5 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Pronunciation',
    page: 5,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Accounts Terminology',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 5 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Accounts Terminology',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Col-lec-tion → the stress falls on {{Col|lec|tion}}',
          answer: 1,
          why: 'Col-lec-tion — say it with the beat on <b>LEC</b>.'
        },
        {
          text: 'Sched-ule → the stress falls on {{Sched|ule}}',
          answer: 0,
          why: 'Sched-ule — say it with the beat on <b>SCHED</b>.'
        },
        {
          text: 'Out-stand-ing → the stress falls on {{Out|stand|ing}}',
          answer: 1,
          why: 'Out-stand-ing — say it with the beat on <b>STAND</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Accounts Terminology' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 5 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Collection', 'Schedule', 'Outstanding'],
      visual: { spot: 'debtor', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 5 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'I\'ll call the debtor this afternoon. (I will call)',
        'We are gonna start the payment run early. (We are going to start)',
        'They think it\'ll be paid by the end of the month. (It will be paid)',
        'We are not gonna extend the terms. (We are not going to extend)'
      ],
      visual: { spot: 'payment-run', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 5 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Confirming Arrangements',
      instruction: 'Practice: Read these questions:',
      html: '<p><b>Context.</b> Use rising intonation when asking a question to confirm a fixed arrangement (Present Continuous).</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'closing',
        caption: 'Pronunciation · Intonation: Confirming Arrangements',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 5 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"Are you running the payment run today? (↗)"',
        '"Is the manager meeting the client on Monday? (↗)"',
        '"Are we clearing the account this morning? (↗)"'
      ],
      visual: { spot: 'statement', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 5 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Cash Flow Summary',
      instruction: 'Read the following passage, maintaining a clear and decisive tone, ensuring correct use of reduction and stress.',
      html: '<p>"The Accounts Receivable team is calling all outstanding debtors today. I think this action will significantly improve our cash inflow. We are going to review the new credit exposure policy next week. I promise the delay in payment will not happen again. The Financial Controller is meeting with us to discuss how we can better manage our suppliers."</p>',
      playable: [
        {
          t: '"The Accounts Receivable team is calling all outstanding debtors today.',
          role: 'narrator'
        },
        { t: 'I think this action will significantly improve our cash inflow.', role: 'narrator' },
        { t: 'We are going to review the new credit exposure policy next week.', role: 'narrator' },
        { t: 'I promise the delay in payment will not happen again.', role: 'narrator' },
        {
          t: 'The Financial Controller is meeting with us to discuss how we can better manage our suppliers.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'credit', caption: 'Pronunciation · Fluency Drill: Cash Flow Summary', cls: 'vis-sm' }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
