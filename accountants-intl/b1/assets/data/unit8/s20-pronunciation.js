/* Unit 8 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Pronunciation',
    page: 8,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Procedural Nouns',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 8 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Procedural Nouns',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Ac-coun-ting → the stress falls on {{Ac|coun|ting}}',
          answer: 1,
          why: 'Ac-coun-ting — say it with the beat on <b>COUN</b>.'
        },
        {
          text: 'Ad-just-ment → the stress falls on {{Ad|just|ment}}',
          answer: 1,
          why: 'Ad-just-ment — say it with the beat on <b>JUST</b>.'
        },
        {
          text: 'Re-con-cil-i-a-tion → the stress falls on {{Re|con|cil|i|a|tion}}',
          answer: 4,
          why: 'Re-con-cil-i-a-tion — say it with the beat on <b>A</b>.'
        },
        {
          text: 'Ge-ne-ra-ted → the stress falls on {{Ge|ne|ra|ted}}',
          answer: 0,
          why: 'Ge-ne-ra-ted — say it with the beat on <b>GE</b>.'
        },
        {
          text: 'Pre-pa-ra-tion → the stress falls on {{Pre|pa|ra|tion}}',
          answer: 2,
          why: 'Pre-pa-ra-tion — say it with the beat on <b>RA</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Procedural Nouns' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 8 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Accounting', 'Adjustment', 'Reconciliation', 'Generated', 'Preparation'],
      visual: { spot: 'reconcile', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 8 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'The trial balance was GE-ne-RATED.',
        'The entries must be POST-ed.',
        'The financial statements are RE-viewed.'
      ],
      visual: { spot: 'trial-balance', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 8 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Sequential Steps',
      instruction: 'Practice: Read these steps:',
      html: '<p><b>Context.</b> Use a rising intonation for each step in a sequence to show that the process is incomplete, and a falling intonation on the final step.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'closing', caption: 'Pronunciation · Intonation: Sequential Steps', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 8 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"First, the data is collected (↗), and then it is posted (↗), and finally, the statements are prepared (↘)."'
      ],
      visual: { spot: 'chart-of-accounts', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 8 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: The Year-End Report',
      instruction: 'Read the following summary, maintaining a professional pace and using a clear voice. Emphasize the verbs in the Passive Voice.',
      html: '<p>"The year-end closing is now in progress. All temporary accounts have been closed. The post-closing trial balance is being checked for accuracy. Once the final figures are approved, the full audit package will be delivered to the external firm. We expect that the audit will be completed by March 1st."</p>',
      playable: [
        { t: '"The year-end closing is now in progress.', role: 'narrator' },
        { t: 'All temporary accounts have been closed.', role: 'narrator' },
        { t: 'The post-closing trial balance is being checked for accuracy.', role: 'narrator' },
        {
          t: 'Once the final figures are approved, the full audit package will be delivered to the external firm.',
          role: 'narrator'
        },
        { t: 'We expect that the audit will be completed by March 1st.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'report', caption: 'Pronunciation · Fluency Drill: The Year-End Report', cls: 'vis-sm' }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
