/* Unit 6 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Review',
    page: 6,
    section: '21',
    lesson: 'Part 8 · Review',
    title: 'Review'
  },
  objective: 'Vocabulary Quiz',
  cards: [
    {
      id: 'c1',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 6 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the action to the correct noun. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Adjust' },
        { id: 'm-b', label: 'b. Rectify' },
        { id: 'm-c', label: 'c. Investigate' },
        { id: 'm-d', label: 'd. Cross-check' },
        { id: 'm-e', label: 'e. Discrepancy' },
        { id: 'm-f', label: 'f. Duplicate Payment' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'To find the cause of the error.',
          accept: 'm-c',
          why: '<b>To find the cause of the error.</b> — Investigate. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'To compare two sets of figures.',
          accept: 'm-d',
          why: '<b>To compare two sets of figures.</b> — Cross-check. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'To make a change to an amount.',
          accept: 'm-a',
          why: '<b>To make a change to an amount.</b> — Adjust. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'To correct a mistake.',
          accept: 'm-b',
          why: '<b>To correct a mistake.</b> — Rectify. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'A payment made twice.',
          accept: 'm-f',
          why: '<b>A payment made twice.</b> — Duplicate Payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'A difference between two balances.',
          accept: 'm-e',
          why: '<b>A difference between two balances.</b> — Discrepancy. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. To find the cause of the error.',
        a: 'Investigate. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'trial-balance', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 6 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz',
      instruction: 'Complete the sentence with the correct form of the verb in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">1. If the trial balance is not (not be) accurate, we [[1]] (not close) the books.<br>2. If I [[2]] (be) the auditor, I would recommend (recommend) stricter controls.<br>3. If they reverse (reverse) the entry, the [[3]] (balance).<br>4. If we [[4]] (not have) the budget, we would not buy (not buy) new software.<br>5. If you don\'t use (not use) the new checklist, you [[5]]  (make) an omission.</div>',
      answers: {
        '1': ['will not close'],
        '2': ['were'],
        '3': ['accounts will balance'],
        '4': ['did not have'],
        '5': ['will make']
      },
      bank: ['accounts will balance', 'did not have', 'were', 'will make', 'will not close'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>will not close</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>were</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>accounts will balance</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>did not have</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>will make</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> If the trial balance is not (not be) accurate, we <u>will not close</u> (not close) the books.',
      visual: { spot: 'bookkeeping', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 6 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Audit Findings',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A first-draft audit report has identified two issues.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'forecast', caption: 'Review · Real-Life Simulation: The Audit Findings', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 6 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Audit Findings',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Junior Accountant (Student A): Announce the first finding (First Conditional). ("The report says if we don\'t fix the asset register, we will fail the audit.")'
        },
        {
          who: 'B',
          notes: 'Senior Accountant (Student B): Address the finding by giving advice (Second Conditional). ("If I were you, I would hire a temp just to clean the register.")'
        },
        {
          who: 'C',
          notes: 'Group Finance Manager (Student C): Ask about the second finding (First Conditional) and make a prediction about the consequence (Will). ("What will happen if they find the duplicate payment? I think we will face a huge penalty.")'
        }
      ],
      coach: { title: 'What this is practising', target: 'First and Second Conditionals', taught: [] },
      model: 'The report says that if we do not fix the segregation of duties, we will fail the next audit. If I were the controller, I would separate the cash receipt and the reconciliation today.',
      visual: { spot: 'discrepancy', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 6 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: The "What If" Scenario',
      instruction: 'Write a short, hypothetical scenario (80 words) describing a worst-case error and how it would be rectified.',
      html: '<p>Style: Use the Second Conditional throughout for the hypothetical situation.</p>',
      playable: [
        {
          t: 'Use the Second Conditional throughout for the hypothetical situation.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'cash', caption: 'Review · Extension Writing: The "What If" Scenario', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 6 · 8D',
      type: 'writer',
      title: 'Extension Writing: The "What If" Scenario',
      instruction: 'Write a short, hypothetical scenario (80 words) describing a worst-case error and how it would be rectified.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'If a fraudulent invoice were paid for EUR 50,000, we would launch an immediate investigation. If the omission were intentional, the employee would be dismissed. We would have to zero out the loss and the bank would help us to recover the funds. If we had better controls, this would not be a risk.',
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Write a short, hypothetical scenario (80 words) describing a worst-case error and how it would be rectified.',
          'Example: "If a fraudulent invoice were paid for EUR 50,000, we would launch an immediate investigation. If the omission were intentional, the employee would be dismissed. We would have to zero out the loss and the bank would help us to recover the funds. If we had better controls, this would not be a risk."'
        ]
      },
      visual: { spot: 'discrepancy', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c7',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 6 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can identify and explain common accounting errors and controls. [ ]' },
        { t: 'I can use the First Conditional to discuss real future consequences. [ ]' },
        {
          t: 'I can use the Second Conditional to discuss hypothetical situations and give advice. [ ]'
        },
        { t: 'I can explain the importance of bank reconciliation. [ ]' },
        { t: 'I can write a clear warning email using conditional structures. [ ]' }
      ],
      visual: { spot: 'reconcile', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
