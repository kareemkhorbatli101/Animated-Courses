/* Unit 10 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Pronunciation',
    page: 10,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Verbs for Reporting',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 10 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Verbs for Reporting',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'E-lab-o-rate → the stress falls on {{E|lab|o|rate}}',
          answer: 1,
          why: 'E-lab-o-rate — say it with the beat on <b>LAB</b>.'
        },
        {
          text: 'Con-firm → the stress falls on {{Con|firm}}',
          answer: 1,
          why: 'Con-firm — say it with the beat on <b>FIRM</b>.'
        },
        {
          text: 'Man-date → the stress falls on {{Man|date}}',
          answer: 0,
          why: 'Man-date — say it with the beat on <b>MAN</b>.'
        },
        {
          text: 'As-sert → the stress falls on {{As|sert}}',
          answer: 1,
          why: 'As-sert — say it with the beat on <b>SERT</b>.'
        },
        {
          text: 'Syn-op-sis → the stress falls on {{Syn|op|sis}}',
          answer: 1,
          why: 'Syn-op-sis — say it with the beat on <b>OP</b>.'
        }
      ],
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Verbs for Reporting' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 10 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Elaborate', 'Confirm', 'Mandate', 'Assert', 'Synopsis'],
      visual: { spot: 'expense-claim', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 10 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'She said (that) the audit was complete.',
        'He confirmed (that) they would buy the software.',
        'We reported (that) the variance was critical.'
      ],
      visual: { spot: 'variance', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 10 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Conveying Urgency',
      instruction: 'Practice: Read these sentences with strong, authoritative intonation:',
      html: '<p><b>Context.</b> Use a firm, falling intonation to convey the seriousness of a reported mandate or warning.</p><ol><li>"The Group CFO mandated that we cut costs immediately (↘)."</li><li>"He warned that the deadline was non-negotiable (↘)."</li><li>"The Board insisted that the figures had to be verified twice (↘)."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'credit-note', caption: 'Pronunciation · Intonation: Conveying Urgency', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 10 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Conveying Urgency',
      instruction: 'Practice: Read these sentences with strong, authoritative intonation:',
      html: '<p><b>Context.</b> Use a firm, falling intonation to convey the seriousness of a reported mandate or warning.</p><ol><li>"The Group CFO mandated that we cut costs immediately (↘)."</li><li>"He warned that the deadline was non-negotiable (↘)."</li><li>"The Board insisted that the figures had to be verified twice (↘)."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'voucher', caption: 'Pronunciation · Intonation: Conveying Urgency', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 10 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"The Group CFO mandated that we cut costs immediately (↘)."',
        '"He warned that the deadline was non-negotiable (↘)."',
        '"The Board insisted that the figures had to be verified twice (↘)."'
      ],
      visual: { spot: 'balance', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 10 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Summarizing a Meeting',
      instruction: 'Read the following summary, maintaining a professional pace and linking words naturally.',
      html: '<p>"The meeting started with a report on Q2 performance. The Controller stated that profitability was strong. He then emphasized that all staff had to submit their expense reports by Friday. Finally, he asked if we had prepared the cash flow forecast for Q4."</p>',
      playable: [
        { t: '"The meeting started with a report on Q2 performance.', role: 'narrator' },
        { t: 'The Controller stated that profitability was strong.', role: 'narrator' },
        {
          t: 'He then emphasized that all staff had to submit their expense reports by Friday.',
          role: 'narrator'
        },
        { t: 'Finally, he asked if we had prepared the cash flow forecast for Q4.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'forecast',
        caption: 'Pronunciation · Fluency Drill: Summarizing a Meeting',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c8',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 10 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Summarizing a Meeting',
      instruction: 'Read the following summary, maintaining a professional pace and linking words naturally.',
      html: '<p>"The meeting started with a report on Q2 performance. The Controller stated that profitability was strong. He then emphasized that all staff had to submit their expense reports by Friday. Finally, he asked if we had prepared the cash flow forecast for Q4."</p>',
      playable: [
        { t: '"The meeting started with a report on Q2 performance.', role: 'narrator' },
        { t: 'The Controller stated that profitability was strong.', role: 'narrator' },
        {
          t: 'He then emphasized that all staff had to submit their expense reports by Friday.',
          role: 'narrator'
        },
        { t: 'Finally, he asked if we had prepared the cash flow forecast for Q4.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'obsolete',
        caption: 'Pronunciation · Fluency Drill: Summarizing a Meeting',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
