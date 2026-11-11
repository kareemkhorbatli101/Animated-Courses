/* Unit 5 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Review',
    page: 5,
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
      bookRef: 'Unit 5 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the term to the correct concept. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Concept — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Settlement' },
        { id: 'm-b', label: 'b. Debtor' },
        { id: 'm-c', label: 'c. Past Due' },
        { id: 'm-d', label: 'd. Accounts Payable' },
        { id: 'm-e', label: 'e. Due Date' },
        { id: 'm-f', label: 'f. Suspend Credit' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'The date the invoice must be paid.',
          accept: 'm-e',
          why: '<b>The date the invoice must be paid.</b> — Due Date. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'An invoice is 90 days unpaid.',
          accept: 'm-c',
          why: '<b>An invoice is 90 days unpaid.</b> — Past Due. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'The company that owes us money.',
          accept: 'm-b',
          why: '<b>The company that owes us money.</b> — Debtor. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Final payment to clear a debt.',
          accept: 'm-a',
          why: '<b>Final payment to clear a debt.</b> — Settlement. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Money the company owes to suppliers.',
          accept: 'm-d',
          why: '<b>Money the company owes to suppliers.</b> — Accounts Payable. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Stopping a customer from buying on credit.',
          accept: 'm-f',
          why: '<b>Stopping a customer from buying on credit.</b> — Suspend Credit. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. The date the invoice must be paid.',
        a: 'Due Date. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      brief: 'A quick check of the unit\'s vocabulary. If a term has gone, the glossary at the top of the screen has it.',
      visual: { spot: 'invoice', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 5 · 8B',
      type: 'choiceinline',
      title: 'Grammar Quiz',
      instruction: 'Choose the most appropriate Future Form for the context. (Only the first one is done for you). One of the two is right in each line.',
      whyTitle: 'What decided each one',
      items: [
        {
          text: 'The Financial Controller {{is holding|will hold}} a risk meeting on Tuesday at 10 AM.',
          answer: 0,
          why: '<b>is holding</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'I think the exchange rate {{will affect|is affecting}} our international payments.',
          answer: 0,
          why: '<b>will affect</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'We have a definite plan: we {{will audit|are going to audit}} the AP system next month.',
          answer: 1,
          why: '<b>are going to audit</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: '"The client is upset." -> "OK, I {{will call|am calling}} them now to settle the matter."',
          answer: 0,
          why: '<b>will call</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'The team {{is scheduling|will schedule}} a payment run for 5 PM today.',
          answer: 0,
          why: '<b>is scheduling</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        }
      ],
      visual: { spot: 'trial-balance', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 5 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Cash Flow Crisis Meeting',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> The company has less cash than expected this week.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'month-end',
        caption: 'Review · Real-Life Simulation: The Cash Flow Crisis Meeting',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 5 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Cash Flow Crisis Meeting',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Accounts Payable Manager (Student A): Announce that some payments will be delayed (Will). Explain the new schedule (Present Continuous).'
        },
        {
          who: 'B',
          notes: 'Accounts Receivable Manager (Student B): Explain what the AR team is going to do to bring cash in faster (Going to).'
        },
        {
          who: 'C',
          notes: 'Group Finance Manager (Student C): Listen and summarize the two main actions for the board (Use going to to summarize A and B\'s plans).'
        }
      ],
      coach: { title: 'What this is practising', target: 'Future Forms', taught: [] },
      model: 'Some payments will be delayed this week. We are going to prioritise the two major vendors, and I will call the others on Thursday to explain.',
      visual: { spot: 'payment-run', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 5 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: A New Credit Policy',
      instruction: 'Write a formal proposal (80 words) for a new, stricter credit policy to reduce bad debt.',
      html: '<p>Style: Use formal requests and Future Forms.</p>',
      playable: [{ t: 'Style: Use formal requests and Future Forms.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'credit', caption: 'Review · Extension Writing: A New Credit Policy', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 5 · 8D',
      type: 'writer',
      title: 'Extension Writing: A New Credit Policy',
      instruction: 'Write a formal proposal (80 words) for a new, stricter credit policy to reduce bad debt.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'To mitigate credit exposure, we propose the following policy changes. We will not extend credit terms beyond 30 days. For new clients, we are going to require a 50% upfront payment. This is a strict change, but I think it will reduce our past due invoices by 25% in the next quarter. Would you mind approving this document?',
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Write a formal proposal (80 words) for a new, stricter credit policy to reduce bad debt.',
          'Example: "To mitigate credit exposure, we propose the following policy changes. We will not extend credit terms beyond 30 days. For new clients, we are going to require a 50% upfront payment. This is a strict change, but I think it will reduce our past due invoices by 25% in the next quarter. Would you mind approving this document?"'
        ]
      },
      visual: { spot: 'payment-run', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c7',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 5 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can define and explain Accounts Payable and Accounts Receivable.' },
        { t: 'I can discuss when invoices are due and schedule payment runs.' },
        { t: 'I can use Will to make predictions and offers.' },
        { t: 'I can use Going To for plans and intentions.' },
        { t: 'I can use the Present Continuous to discuss fixed professional arrangements.' }
      ],
      visual: { spot: 'debtor', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    },
    {
      id: 'c8',
      covers: ['8F'],
      ref: '8F',
      bookRef: 'Unit 5 · 8F',
      type: 'discuss',
      title: 'Final Thought',
      instruction: 'Last thing. There is no single right answer — say what you think, in English, using the grammar of this unit.',
      minWords: 25,
      questions: [
        {
          q: 'The collection process can damage a customer relationship. How will you chase a debt politely and professionally? What is the ethical exposure of extending credit to a client you know is struggling? How will the role of accounts payable change with more automation?'
        }
      ],
      model: 'I am going to chase the debt in writing first, and I will telephone only if the reminder is ignored — a polite letter keeps the relationship and still creates the record. Extending credit to a client we know is struggling is the real exposure: we are lending the company\'s money without calling it a loan. Automation will take over the reminders, so the job will become the difficult conversations.',
      visual: { spot: 'reorder-point', caption: 'Review · Final Thought', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
