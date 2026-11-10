/* Unit 5 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Writing 1',
    page: 5,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Future Forms)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 5 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Future Forms)',
      instruction: 'Paraphrase the following statements using the Future Form in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. I think they will agree to extend the credit terms. (WILL) -> I believe they [[2]] the credit terms.<br>3. My calendar shows I am in a meeting with the bank on Wednesday. (PRESENT CONTINUOUS) -> I [[3]] the bank on Wednesday.</div>',
      answers: { '2': ['will extend'], '3': ['am meeting'] },
      bank: ['am meeting', 'will extend'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>will extend</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>am meeting</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> I think they will agree to extend the credit terms. (WILL) -> I believe they <u>will extend</u> the credit terms.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Future Forms)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 5 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Future Forms)',
      instruction: 'Paraphrase the following statements using the Future Form in parentheses. (Only the first one is done for you).',
      paras: [
        {
          label: 'We have a definite plan to pay the invoice next week. (GOING TO) -> We are going to pay the invoice next week.',
          purpose: ''
        },
        {
          label: 'I think they will agree to extend the credit terms. (WILL) -> I believe they ____________________ the credit terms.',
          purpose: ''
        },
        {
          label: 'My calendar shows I am in a meeting with the bank on Wednesday. (PRESENT CONTINUOUS) -> I ____________________ the bank on Wednesday.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'We have a definite plan to pay the invoice next week. (GOING TO) -> We are going to pay the invoice next week.',
        'I think they will agree to extend the credit terms. (WILL) -> I believe they ____________________ the credit terms.',
        'My calendar shows I am in a meeting with the bank on Wednesday. (PRESENT CONTINUOUS) -> I ____________________ the bank on Wednesday.'
      ],
      model: 'We are going to pay the invoice next week.',
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Paraphrase the following statements using the Future Form in parentheses. (Only the first one is done for you).',
          'We have a definite plan to pay the invoice next week. (GOING TO) -> We are going to pay the invoice next week.',
          'I think they will agree to extend the credit terms. (WILL) -> I believe they ____________________ the credit terms.',
          'My calendar shows I am in a meeting with the bank on Wednesday. (PRESENT CONTINUOUS) -> I ____________________ the bank on Wednesday.'
        ]
      },
      visual: { spot: 'payment-run', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 5 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: The Collections Email',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short, formal email (50–60 words) to a client whose account is 60 days past due.</p><ol><li>State the amount and due date.</li><li>Use Will to request a commitment.</li><li>Use Going To to explain the next step if they do not pay.</li><li>Example: "Dear Client, Your invoice 789 (EUR 5,500), due March 1st, is 60 days past due. Will you please settle the full amount today? If we do not receive payment this week, we are going to suspend your credit terms and transfer the debt to collections. Please advise."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'debtor', caption: 'Writing · Writing Task 1: The Collections Email', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 5 · 6B',
      type: 'writer',
      title: 'Writing Task 1: The Collections Email',
      instruction: 'Include:',
      paras: [
        { label: 'State the amount and due date.', purpose: '' },
        { label: 'Use Will to request a commitment.', purpose: '' },
        { label: 'Use Going To to explain the next step if they do not pay.', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'State the amount and due date.',
        'Use Will to request a commitment.',
        'Use Going To to explain the next step if they do not pay.'
      ],
      model: 'Dear Client, Your invoice 789 (EUR 5,500), due March 1st, is 60 days past due. Will you please settle the full amount today? If we do not receive payment this week, we are going to suspend your credit terms and transfer the debt to collections. Please advise.',
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Include:',
          'State the amount and due date.',
          'Use Will to request a commitment.',
          'Use Going To to explain the next step if they do not pay.'
        ]
      },
      visual: { spot: 'payment-run', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
