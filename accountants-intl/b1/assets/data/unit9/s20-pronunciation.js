/* Unit 9 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Pronunciation',
    page: 9,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Qualification Nouns',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 9 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Qualification Nouns',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Pro-fi-cient → the stress falls on {{Pro|fi|cient}}',
          answer: 1,
          why: 'Pro-fi-cient — say it with the beat on <b>FI</b>.'
        },
        {
          text: 'Cert-i-fi-ca-tion → the stress falls on {{Cert|i|fi|ca|tion}}',
          answer: 3,
          why: 'Cert-i-fi-ca-tion — say it with the beat on <b>CA</b>.'
        },
        {
          text: 'Achieve-ment → the stress falls on {{Achieve|ment}}',
          answer: 0,
          why: 'Achieve-ment — say it with the beat on <b>ACHIEVE</b>.'
        },
        {
          text: 'Con-sul-tant → the stress falls on {{Con|sul|tant}}',
          answer: 1,
          why: 'Con-sul-tant — say it with the beat on <b>SUL</b>.'
        },
        {
          text: 'De-vel-op-ment → the stress falls on {{De|vel|op|ment}}',
          answer: 1,
          why: 'De-vel-op-ment — say it with the beat on <b>VEL</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Qualification Nouns' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 9 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Proficient', 'Certification', 'Achievement', 'Consultant', 'Development'],
      visual: { spot: 'certification', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 9 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'I\'ve worked here for ten years. /aɪv/',
        'She\'s just finished the report. /ʃiːz/',
        'We\'ve already met the deadline. /wiːv/'
      ],
      visual: { spot: 'expense-claim', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 9 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Listing Experience',
      instruction: 'Practice: Read this list:',
      html: '<p><b>Context.</b> Use a rising intonation on each item in a list of experience and a falling intonation on the last item.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'cash', caption: 'Pronunciation · Intonation: Listing Experience', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 9 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"I have used QuickBooks (↗), Excel (↗), and Oracle Financials (↘)."',
        '"I have gained experience in audit (↗), tax (↗), and financial planning (↘)."'
      ],
      visual: { spot: 'month-end', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 9 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Describing a Career',
      instruction: 'Read the following summary, maintaining a professional pace and using clear contractions.',
      html: '<p>"I\'ve been a financial analyst since 2017. I\'ve managed the budget process for the entire Asia-Pacific region. Recently, I\'ve obtained my CMA qualification. I haven\'t worked on a system migration yet, but I\'m eager to learn those skills."</p>',
      playable: [
        { t: '"I\'ve been a financial analyst since 2017.', role: 'narrator' },
        { t: 'I\'ve managed the budget process for the entire Asia-Pacific region.', role: 'narrator' },
        { t: 'Recently, I\'ve obtained my CMA qualification.', role: 'narrator' },
        {
          t: 'I haven\'t worked on a system migration yet, but I\'m eager to learn those skills.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Pronunciation · Fluency Drill: Describing a Career', cls: 'vis-sm' }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
