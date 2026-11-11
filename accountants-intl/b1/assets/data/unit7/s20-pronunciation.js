/* Unit 7 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Pronunciation',
    page: 7,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Comparison Terminology',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 7 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Comparison Terminology',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Per-form-ance → the stress falls on {{Per|form|ance}}',
          answer: 1,
          why: 'Per-form-ance — say it with the beat on <b>FORM</b>.'
        },
        {
          text: 'Var-i-ance → the stress falls on {{Var|i|ance}}',
          answer: 0,
          why: 'Var-i-ance — say it with the beat on <b>VAR</b>.'
        },
        {
          text: 'Com-par-a-tive → the stress falls on {{Com|par|a|tive}}',
          answer: 1,
          why: 'Com-par-a-tive — say it with the beat on <b>PAR</b>.'
        },
        {
          text: 'Su-per-la-tive → the stress falls on {{Su|per|la|tive}}',
          answer: 1,
          why: 'Su-per-la-tive — say it with the beat on <b>PER</b>.'
        },
        {
          text: 'Sig-ni-fi-cant → the stress falls on {{Sig|ni|fi|cant}}',
          answer: 1,
          why: 'Sig-ni-fi-cant — say it with the beat on <b>NI</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Comparison Terminology' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 7 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Performance', 'Variance', 'Comparative', 'Superlative', 'Significant'],
      visual: { spot: 'variance', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 7 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'The actuals are higher than the budget.',
        'This is less significant than the payroll variance.',
        'The new forecast is better than the old one.'
      ],
      visual: { spot: 'forecast', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 7 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Superlative Statements',
      instruction: 'Practice: Read these sentences:',
      html: '<p><b>Context.</b> Use a strong, falling intonation at the end of a superlative statement to emphasize certainty and finality (since it is the absolute best or worst).</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Pronunciation · Intonation: Superlative Statements', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 7 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"This is the most expensive cost we have." (↘)',
        '"Q4 was the strongest quarter." (↘)',
        '"The lowest margin was in the Singapore region." (↘)'
      ],
      visual: { spot: 'petty-voucher', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 7 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Reporting to the Board',
      instruction: 'Read the following report summary, maintaining a professional pace and emphasizing the comparative words.',
      html: '<p>"Overall, the third quarter was stronger than the second, but Q1 still remains the best quarter to date. The most significant adverse variance is the admin expense, which is 18% higher than the budget. Our gross profit is better than the industry average, and this is the most encouraging figure we can share with you today."</p>',
      playable: [
        {
          t: '"Overall, the third quarter was stronger than the second, but Q1 still remains the best quarter to date.',
          role: 'narrator'
        },
        {
          t: 'The most significant adverse variance is the admin expense, which is 18% higher than the budget.',
          role: 'narrator'
        },
        {
          t: 'Our gross profit is better than the industry average, and this is the most encouraging figure we can share with you today.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'budget',
        caption: 'Pronunciation · Fluency Drill: Reporting to the Board',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
