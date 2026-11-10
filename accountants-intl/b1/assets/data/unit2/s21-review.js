/* Unit 2 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Review',
    page: 2,
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
      bookRef: 'Unit 2 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the term to the correct concept. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Concept — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Chart of Accounts' },
        { id: 'm-b', label: 'b. Discrepancy' },
        { id: 'm-c', label: 'c. Journal' },
        { id: 'm-d', label: 'd. Posting' },
        { id: 'm-e', label: 'e. Invoice' },
        { id: 'm-f', label: 'f. Receipt' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'The book of original entry.',
          accept: 'm-c',
          why: '<b>The book of original entry.</b> — Journal. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'A formal request for payment.',
          accept: 'm-e',
          why: '<b>A formal request for payment.</b> — Invoice. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'The transfer of journal data to the ledger.',
          accept: 'm-d',
          why: '<b>The transfer of journal data to the ledger.</b> — Posting. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'The list of all accounts.',
          accept: 'm-a',
          why: '<b>The list of all accounts.</b> — Chart of Accounts. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'An unexpected difference between two amounts.',
          accept: 'm-b',
          why: '<b>An unexpected difference between two amounts.</b> — Discrepancy. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Proof that money was paid.',
          accept: 'm-f',
          why: '<b>Proof that money was paid.</b> — Receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. The book of original entry.',
        a: 'Journal. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'ledger', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 2 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz',
      instruction: 'Choose the correct verb tense (Past Simple or Past Continuous) for each context. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. The team [[2a]] (process) 50 invoices and then [[2b]] (go) for lunch.<br>3. While the intern [[3a]] (enter) data, the auditor [[3b]] (observe) the process.<br>4. We [[4]] (not file) the source document correctly last week.<br>5. She [[5]] (try) to locate the missing receipt at 9 AM yesterday.</div>',
      answers: {
        '2a': ['processed'],
        '2b': ['went'],
        '3a': ['was entering'],
        '3b': ['was observing'],
        '4': ['did not file'],
        '5': ['was trying']
      },
      bank: ['did not file', 'processed', 'was entering', 'was observing', 'was trying', 'went'],
      whyTitle: 'What decided each one',
      why: {
        '2a': '<b>processed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2b': '<b>went</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3a': '<b>was entering</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3b': '<b>was observing</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>did not file</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>was trying</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> The team <u>processed</u> (process) 50 invoices and then ____________________ (go) for lunch.',
      visual: { spot: 'trial-balance', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 2 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Error Discovery',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A colleague is reporting an error she found.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'petty-voucher',
        caption: 'Review · Real-Life Simulation: The Error Discovery',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 2 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Error Discovery',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Colleague (Student A): Use the Past Simple to state the completed discovery and the Past Continuous to explain how. ("I found the error this morning. I was reviewing the fixed asset register when I noticed the double entry.")'
        },
        {
          who: 'B',
          notes: 'Manager (Student B): Ask for clarification on who made the mistake, using Past Continuous. ("Who was responsible for the posting while you were on leave?")'
        }
      ],
      coach: { title: 'What this is practising', target: 'Past Simple vs. Past Continuous', taught: [] },
      model: 'I found a EUR 700 discrepancy yesterday. I was reviewing the expense batches when I noticed it, and the intern was posting the invoices at the time. We corrected the journal entry immediately.',
      visual: { spot: 'journal', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 2 · 8D',
      type: 'writer',
      title: 'Extension Writing: A Procedure Update',
      instruction: 'Write a brief note (80 words) for the new intern outlining the steps for recording and filing receipts. Use a mix of sequence words (First, Next, Then) and the Past Simple to describe a completed action.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Welcome! First, always check the date and the approval on the expense claim. Next, record the full amount in the journal, in the original currency. Then, post the entry to the General Ledger. Yesterday, I filed all the receipts from the travel department, but I missed three; please ensure you locate them today. Remember to reconcile the petty cash at the end of the week.',
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Write a brief note (80 words) for the new intern outlining the steps for recording and filing receipts. Use a mix of sequence words (First, Next, Then) and the Past Simple to describe a completed action.',
          'Example: "Welcome! First, always check the date and the approval on the expense claim. Next, record the full amount in the journal, in the original currency. Then, post the entry to the General Ledger. Yesterday, I filed all the receipts from the travel department, but I missed three; please ensure you locate them today. Remember to reconcile the petty cash at the end of the week."'
        ]
      },
      visual: { spot: 'journal', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c6',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 2 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can name and define key source documents (invoice, receipt, claim). [ ]' },
        { t: 'I can correctly form and use the Past Simple tense. [ ]' },
        { t: 'I can correctly form and use the Past Continuous tense. [ ]' },
        { t: 'I can use both tenses together to explain interruptions and workflows. [ ]' },
        { t: 'I understand the terms posting, ledger, and reconciliation. [ ]' }
      ],
      visual: { spot: 'source-document', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
