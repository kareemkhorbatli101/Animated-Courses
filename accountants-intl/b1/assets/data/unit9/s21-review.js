/* Unit 9 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Review',
    page: 9,
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
      bookRef: 'Unit 9 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the item to the correct context. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Context — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The time spent in a specific job or field' },
        { id: 'm-b', label: 'b. To sign up for additional training or studies' },
        { id: 'm-c', label: 'c. The most highly regarded accounting qualification' },
        { id: 'm-d', label: 'd. A critical skill or area of expertise' },
        { id: 'm-e', label: 'e. The move from one system to another' },
        { id: 'm-f', label: 'f. To improve your skills through learning' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'CPA',
          accept: 'm-c',
          why: '<b>CPA</b> — The most highly regarded accounting qualification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Core Competency',
          accept: 'm-d',
          why: '<b>Core Competency</b> — A critical skill or area of expertise. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Tenure',
          accept: 'm-a',
          why: '<b>Tenure</b> — The time spent in a specific job or field. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Software Migration',
          accept: 'm-e',
          why: '<b>Software Migration</b> — The move from one system to another. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Up-skill',
          accept: 'm-f',
          why: '<b>Up-skill</b> — To improve your skills through learning. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Enroll',
          accept: 'm-b',
          why: '<b>Enroll</b> — To sign up for additional training or studies. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. CPA',
        a: 'The most highly regarded accounting qualification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'certification', caption: 'CPA — one of the words on this list.' },
      brief: 'A quick check of the unit\'s vocabulary. If a term has gone, the glossary at the top of the screen has it.'
    },
    {
      id: 'c2',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 9 · 8A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['CPA', 'Core Competency', 'Tenure', 'Software Migration', 'Up-skill', 'Enroll'],
      visual: { spot: 'migration', caption: 'Review · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 9 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz (Present Perfect vs. Past Simple)',
      instruction: 'Choose the correct tense (Past Simple or Present Perfect Simple) for the verb in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. She [[2]] (join) the firm three years ago.<br>3. Have you ever [[3]] (travel) for business?<br>4. We [[4]] (not / receive) the final figures yet.<br>5. He [[5]] (leave) his last job in December.</div>',
      answers: { '2': ['joined'], '3': ['travelled'], '4': ['have not received'], '5': ['left'] },
      bank: ['have not received', 'joined', 'left', 'travelled'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>joined</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>travelled</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>have not received</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>left</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> She <u>joined</u> (join) the firm three years ago.',
      visual: {
        spot: 'trial-balance',
        caption: 'Review · Grammar Quiz (Present Perfect vs. Past Simple)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 9 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Annual Review',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A Director (A) is conducting an annual review with an Accountant (B).</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'manager', caption: 'Review · Real-Life Simulation: The Annual Review', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 9 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Annual Review',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Director (Student A): Ask about their achievements this year and training completed (What have you accomplished...?).'
        },
        {
          who: 'B',
          notes: 'Accountant (Student B): Respond using the Present Perfect Simple (I have successfully completed...).'
        },
        {
          who: 'C',
          notes: 'Director (Student A): Ask about their future plans (What are you planning...?).'
        },
        { who: 'D', notes: 'Example:' },
        { who: 'E', notes: 'A: "What have you accomplished since January?"' },
        {
          who: 'F',
          notes: 'B: "I have successfully completed the Advanced Financial Reporting course and streamlined the A/R process."'
        }
      ],
      coach: { title: 'What this is practising', target: 'Present Perfect Simple', taught: [] },
      model: 'A: What have you accomplished since January? — B: I have successfully completed the Advanced Financial Reporting course and streamlined the A/R process.',
      visual: { spot: 'certification', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 9 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: A Recent Achievement',
      instruction: 'Write a short paragraph (80 words) describing your most recent professional achievement.',
      html: '<p>Style: Use the Present Perfect to describe the achievement and the results.</p>',
      playable: [
        {
          t: 'Style: Use the Present Perfect to describe the achievement and the results.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'journal', caption: 'Review · Extension Writing: A Recent Achievement', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 9 · 8D',
      type: 'writer',
      title: 'Extension Writing: A Recent Achievement',
      instruction: 'Write a short paragraph (80 words) describing your most recent professional achievement.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'I have just completed the implementation of a new expense tracking system for the sales team. This has reduced reporting errors by over 20% and has saved us time at month-end. I have not fully trained all staff yet, but the system is already improving efficiency for the early adopters.',
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Write a short paragraph (80 words) describing your most recent professional achievement.',
          'Example: "I have just completed the implementation of a new expense tracking system for the sales team. This has reduced reporting errors by over 20% and has saved us time at month-end. I have not fully trained all staff yet, but the system is already improving efficiency for the early adopters."'
        ]
      },
      visual: { spot: 'certification', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c8',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 9 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can use vocabulary related to career development (CPA, up-skill, migration).' },
        { t: 'I can identify and use the Present Perfect Simple (have/has + P.P.).' },
        { t: 'I can discuss my work experience using since and for.' },
        { t: 'I can describe recent achievements in an interview context.' }
      ],
      visual: { spot: 'closing', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    },
    {
      id: 'c9',
      covers: ['8F'],
      ref: '8F',
      bookRef: 'Unit 9 · 8F',
      type: 'discuss',
      title: 'Final Thought',
      instruction: 'Last thing. There is no single right answer — say what you think, in English, using the grammar of this unit.',
      minWords: 25,
      questions: [
        { q: 'How does this idea relate to CPE and the need for continuous up-skilling?' },
        {
          q: 'What is the biggest change you have seen in the industry since you started, and how have you adapted to it?'
        }
      ],
      frame: { title: 'The claim', text: 'The only constant in accounting is change.' },
      model: 'The idea is exactly why CPE exists. I have worked with three different systems since I started, and each one has changed what the job is rather than how fast it is done. The biggest change I have seen is that the closing has become continuous: we have stopped waiting for month end, so I have had to learn to review as the entries arrive.',
      visual: { spot: 'variance', caption: 'Review · Final Thought', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
