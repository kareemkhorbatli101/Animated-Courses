/* Unit 6 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Pronunciation',
    page: 6,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Control Terminology',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 6 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Control Terminology',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Dis-crep-an-cy → the stress falls on {{Dis|crep|an|cy}}',
          answer: 1,
          why: 'Dis-crep-an-cy — say it with the beat on <b>CREP</b>.'
        },
        {
          text: 'Re-con-cil-i-a-tion → the stress falls on {{Re|con|cil|i|a|tion}}',
          answer: 4,
          why: 'Re-con-cil-i-a-tion — say it with the beat on <b>A</b>.'
        },
        {
          text: 'Se-gre-ga-tion → the stress falls on {{Se|gre|ga|tion}}',
          answer: 2,
          why: 'Se-gre-ga-tion — say it with the beat on <b>GA</b>.'
        },
        {
          text: 'Au-thor-i-za-tion → the stress falls on {{Au|thor|i|za|tion}}',
          answer: 3,
          why: 'Au-thor-i-za-tion — say it with the beat on <b>ZA</b>.'
        },
        {
          text: 'Rec-ti-fy → the stress falls on {{Rec|ti|fy}}',
          answer: 0,
          why: 'Rec-ti-fy — say it with the beat on <b>REC</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Control Terminology' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 6 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Discrepancy', 'Reconciliation', 'Segregation', 'Authorization', 'Rectify'],
      visual: { spot: 'discrepancy', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 6 · 7B',
      type: 'study',
      source: 'book',
      title: 'Linking: The "If" Clause',
      instruction: 'Practice: Read the sentences, focusing on the linking and pause.',
      html: '<p>Explanation: When the "if" clause comes first, there is often a slight pause or break (indicated by a comma) before the main clause. Practice the smooth linking, with the pause.</p>',
      playable: [
        {
          t: 'Explanation: When the "if" clause comes first, there is often a slight pause or break (indicated by a comma) before the main clause.',
          role: 'narrator'
        },
        { t: 'Practice the smooth linking, with the pause.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'entry', caption: 'Pronunciation · Linking: The "If" Clause', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 6 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        'If we miss the deadline /,/ we will incur a penalty.',
        'If I were you /,/ I would reverse the entry.',
        'If the totals do not match /,/ we will investigate the source.'
      ],
      visual: { spot: 'manager', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 6 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Hypothetical Scenarios',
      instruction: 'Practice: Read these sentences:',
      html: '<p><b>Context.</b> Use a rising intonation in the "if" clause and a falling intonation in the main clause to emphasize the hypothetical nature of the Second Conditional.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'migration',
        caption: 'Pronunciation · Intonation: Hypothetical Scenarios',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c6',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 6 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"If we had the budget, (↗) we would buy new software. (↘)"',
        '"If I were the director, (↗) I would zero out that debt. (↘)"',
        '"If they authorized the payment, (↗) the entry would be correct. (↘)"'
      ],
      visual: { spot: 'budget', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 6 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Advising a Colleague',
      instruction: 'Read the following passage, focusing on clear pronunciation and using a slightly slower, more deliberate tone for advice.',
      html: '<p>"Listen carefully. If you don\'t cross-check the figures, you will create a discrepancy. That will lead to an official audit. If I were you, I would implement a daily review checklist. Also, if the discrepancy were over EUR 500, you would need to flag it immediately to the manager. Follow these controls, and you will never have to worry about an omission."</p>',
      playable: [
        { t: '"Listen carefully.', role: 'narrator' },
        {
          t: 'If you don\'t cross-check the figures, you will create a discrepancy.',
          role: 'narrator'
        },
        { t: 'That will lead to an official audit.', role: 'narrator' },
        { t: 'If I were you, I would implement a daily review checklist.', role: 'narrator' },
        {
          t: 'Also, if the discrepancy were over EUR 500, you would need to flag it immediately to the manager.',
          role: 'narrator'
        },
        {
          t: 'Follow these controls, and you will never have to worry about an omission.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'auditor',
        caption: 'Pronunciation · Fluency Drill: Advising a Colleague',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
