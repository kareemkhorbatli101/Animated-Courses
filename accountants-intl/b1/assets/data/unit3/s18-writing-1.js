/* Unit 3 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Writing 1',
    page: 3,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Modals)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 3 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Modals)',
      instruction: 'Paraphrase the following statements using the modal in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. Is it alright if I process your payment now? (MAY) -> [[2]] I process your payment now?<br>3. We are happy to give you the cash back today. (CAN) -> We [[3]] offer to reimburse you today.</div>',
      answers: { '2': ['May'], '3': ['can'] },
      bank: ['May', 'can'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>May</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>can</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> Is it alright if I process your payment now? (MAY) -> <u>May</u> I process your payment now?',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Modals)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 3 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Modals)',
      instruction: 'Paraphrase the following statements using the modal in parentheses. (Only the first one is done for you).',
      paras: [
        {
          label: 'I need the Financial Controller to sign the voucher. (COULD) -> Could you sign the voucher, please?',
          purpose: ''
        },
        {
          label: 'Is it alright if I process your payment now? (MAY) -> ____________________ I process your payment now?',
          purpose: ''
        },
        {
          label: 'We are happy to give you the cash back today. (CAN) -> We ____________________ offer to reimburse you today.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'I need the Financial Controller to sign the voucher. (COULD) -> Could you sign the voucher, please?',
        'Is it alright if I process your payment now? (MAY) -> ____________________ I process your payment now?',
        'We are happy to give you the cash back today. (CAN) -> We ____________________ offer to reimburse you today.'
      ],
      model: 'Could you sign the voucher, please?.',
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Paraphrase the following statements using the modal in parentheses. (Only the first one is done for you).',
          'I need the Financial Controller to sign the voucher. (COULD) -> Could you sign the voucher, please?',
          'Is it alright if I process your payment now? (MAY) -> ____________________ I process your payment now?',
          'We are happy to give you the cash back today. (CAN) -> We ____________________ offer to reimburse you today.'
        ]
      },
      visual: { spot: 'petty-voucher', caption: 'Write it the way this unit has been teaching you to.' },
      bank: ['Reimbursement', 'Voucher']
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 3 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: Requesting a Missing Receipt',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short email (50–60 words) to a colleague politely requesting the original receipt for a EUR 45 expense.</p><ol><li>State the purpose of the email.</li><li>Use Could or Would to make the request.</li><li>Explain why the original is required for reimbursement.</li><li>Offer assistance (Can offer).</li><li>Example: "Hi Tomás, Could you please provide the original receipt for the EUR 45 taxi fare? We must attach the original to the voucher for the audit. I can offer to process your reimbursement as soon as you bring it in. Would you mind checking your files this morning?"</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'receipt',
        caption: 'Writing · Writing Task 1: Requesting a Missing Receipt',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 3 · 6B',
      type: 'writer',
      title: 'Writing Task 1: Requesting a Missing Receipt',
      instruction: 'Include:',
      paras: [
        { label: 'State the purpose of the email.', purpose: '' },
        { label: 'Use Could or Would to make the request.', purpose: '' },
        { label: 'Explain why the original is required for reimbursement.', purpose: '' },
        { label: 'Offer assistance (Can offer).', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'State the purpose of the email.',
        'Use Could or Would to make the request.',
        'Explain why the original is required for reimbursement.',
        'Offer assistance (Can offer).'
      ],
      model: 'Hi Tomás, Could you please provide the original receipt for the EUR 45 taxi fare? We must attach the original to the voucher for the audit. I can offer to process your reimbursement as soon as you bring it in. Would you mind checking your files this morning?',
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Include:',
          'State the purpose of the email.',
          'Use Could or Would to make the request.',
          'Explain why the original is required for reimbursement.'
        ]
      },
      visual: { spot: 'petty-voucher', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
