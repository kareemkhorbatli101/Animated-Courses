/* Unit 1 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Review',
    page: 1,
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
      bookRef: 'Unit 1 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the accounting term to the correct context. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Term — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Liability' },
        { id: 'm-b', label: 'b. Receipt' },
        { id: 'm-c', label: 'c. Ledger' },
        { id: 'm-d', label: 'd. Asset' },
        { id: 'm-e', label: 'e. Invoice' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'You receive this after you buy lunch for the office.',
          accept: 'm-b',
          why: '<b>You receive this after you buy lunch for the office.</b> — Receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'You send this to a customer to ask for money.',
          accept: 'm-e',
          why: '<b>You send this to a customer to ask for money.</b> — Invoice. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'This is money the company owes to others.',
          accept: 'm-a',
          why: '<b>This is money the company owes to others.</b> — Liability. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'This is the main book where transactions are recorded.',
          accept: 'm-c',
          why: '<b>This is the main book where transactions are recorded.</b> — Ledger. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'This is something valuable the company owns.',
          accept: 'm-d',
          why: '<b>This is something valuable the company owns.</b> — Asset. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. You receive this after you buy lunch for the office.',
        a: 'Receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      brief: 'A quick check of the unit\'s vocabulary. If a term has gone, the glossary at the top of the screen has it.',
      visual: { spot: 'transaction', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 1 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz',
      instruction: 'Correct the mistakes in these sentences. (Only the first one is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">2. She check the emails every morning. -> [[2]]<br>3. We are usually paying suppliers on Friday. -> [[3]]<br>4. I am not understanding this invoice. -> [[4]]<br>5. Look! The printer smokes! -> [[5]]</div>',
      answers: {
        '2': ['She checks the emails every morning.'],
        '3': ['We usually pay suppliers on Friday.'],
        '4': ['I do not understand this invoice.'],
        '5': ['Look! The printer is smoking!']
      },
      bank: [
        'I do not understand this invoice.',
        'Look! The printer is smoking!',
        'She checks the emails every morning.',
        'We usually pay suppliers on Friday.'
      ],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>She checks the emails every morning.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>We usually pay suppliers on Friday.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>I do not understand this invoice.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>Look! The printer is smoking!</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> She check the emails every morning. -> <u>She checks the emails every morning.</u>',
      visual: { spot: 'invoice', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 1 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Desk Handover',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> You are going on holiday for a week. You must explain your desk to a colleague in another office who will cover for you.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'trial-balance',
        caption: 'Review · Real-Life Simulation: The Desk Handover',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 1 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Desk Handover',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        { who: 'A', notes: 'You (Student A): Explain your files.' },
        { who: 'B', notes: '"This box contains pending invoices."' },
        { who: 'C', notes: '"I am working on this file right now, so leave it here."' },
        { who: 'D', notes: 'Colleague (Student B): Ask questions.' },
        { who: 'E', notes: '"Where do you keep the supplier statements?"' },
        { who: 'F', notes: '"Who is calling on the phone now?"' }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: []
      },
      model: 'This box contains the pending invoices, and I file them alphabetically by supplier. I am working on the March batch at the moment, so those are on the desk rather than in the box.',
      visual: { spot: 'accountant', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 1 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: The "To-Do" List',
      instruction: 'Write a To-Do list for Monday morning.',
      html: '<p>List 5 items:</p><ol><li>Example: Reconcile the cash box.</li><li>Example: Call Dublin regarding the error.</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'payment-run', caption: 'Review · Extension Writing: The "To-Do" List', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 1 · 8D',
      type: 'writer',
      title: 'Extension Writing: The "To-Do" List',
      instruction: 'Write a To-Do list for Monday morning.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Reconcile the cash box.',
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Write a To-Do list for Monday morning.',
          'Example: Reconcile the cash box.',
          'Example: Call Dublin regarding the error.'
        ]
      },
      visual: { spot: 'accountant', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c7',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 1 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can name the common objects in an accounting office.' },
        { t: 'I can distinguish between routines (Simple) and current actions (Continuous).' },
        { t: 'I can introduce myself and my job title professionally.' },
        { t: 'I can pronounce 15 and 50 clearly.' },
        { t: 'I understand the difference between an invoice and a receipt.' }
      ],
      visual: { spot: 'receipt', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    },
    {
      id: 'c8',
      covers: ['8F'],
      ref: '8F',
      bookRef: 'Unit 1 · 8F',
      type: 'discuss',
      title: 'Final Thought',
      instruction: 'Last thing. There is no single right answer — say what you think, in English, using the grammar of this unit.',
      minWords: 25,
      questions: [
        { q: 'Do you agree?' },
        {
          q: 'Why is a small mistake (like typing 50 instead of 15) dangerous, especially when the figure crosses a border?'
        }
      ],
      frame: { title: 'The claim', text: 'Accuracy is the most important skill for an accountant.' },
      model: 'I partly agree. Accuracy matters more than speed, because a wrong figure travels: 50 instead of 15 crosses a border, and the Singapore office is already reporting it while we are still looking for it. But accuracy on its own is not enough — an accountant who records everything correctly and explains nothing is only half doing the job.',
      visual: { spot: 'debit', caption: 'Review · Final Thought', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
