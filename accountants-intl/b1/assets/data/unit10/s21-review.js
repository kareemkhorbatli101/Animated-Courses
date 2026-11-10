/* Unit 10 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Review',
    page: 10,
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
      bookRef: 'Unit 10 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the item to the correct meaning. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Meaning — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The key points or most important conclusions from a discussion' },
        { id: 'm-b', label: 'b. To state something clearly and formally' },
        { id: 'm-c', label: 'c. An official order or instruction' },
        { id: 'm-d', label: 'd. Detailed notes explaining financial results' },
        { id: 'm-e', label: 'e. A difference between budgeted and actual figures' },
        { id: 'm-f', label: 'f. To communicate or transfer an idea or message' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Mandate',
          accept: 'm-c',
          why: '<b>Mandate</b> — An official order or instruction. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Commentary',
          accept: 'm-d',
          why: '<b>Commentary</b> — Detailed notes explaining financial results. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Key Takeaway',
          accept: 'm-a',
          why: '<b>Key Takeaway</b> — The key points or most important conclusions from a discussion. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Convey',
          accept: 'm-f',
          why: '<b>Convey</b> — To communicate or transfer an idea or message. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'State',
          accept: 'm-b',
          why: '<b>State</b> — To state something clearly and formally. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Variance',
          accept: 'm-e',
          why: '<b>Variance</b> — A difference between budgeted and actual figures. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Mandate',
        a: 'An official order or instruction. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'variance', caption: 'Variance — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 10 · 8A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Mandate', 'Commentary', 'Key Takeaway', 'Convey', 'State', 'Variance'],
      visual: { spot: 'trial-balance', caption: 'Review · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 10 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz (Reported Speech)',
      instruction: 'Report the following Direct Speech sentences, filling in the blanks. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. "I can’t attend the review today." -> He explained that he [[2]] attend the review that day.<br>3. "Why did you change the ledger?" -> The Auditor asked why I [[3]] the ledger.<br>4. "We have just approved the loan." -> The Manager confirmed that they [[4]] the loan.<br>5. "Submit the report by the end of the hour." -> He instructed me [[5]] the report by the end of the hour.</div>',
      answers: { '2': ['could not'], '3': ['had changed'], '4': ['had just approved'], '5': ['to submit'] },
      bank: ['could not', 'had changed', 'had just approved', 'to submit'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>could not</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>had changed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>had just approved</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>to submit</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> "I can’t attend the review today." -> He explained that he <u>could not</u> attend the review that day.',
      visual: { spot: 'ledger', caption: 'Review · Grammar Quiz (Reported Speech)', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 10 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Financial Crisis Briefing',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A briefing on a major unexpected cost overrun.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'balance',
        caption: 'Review · Real-Life Simulation: The Financial Crisis Briefing',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c5',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 10 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Financial Crisis Briefing',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Group CFO (Student A): Give three urgent statements in Direct Speech (e.g., "The shipping costs are double what we forecasted," "I need a revised forecast by 5 PM today," "We must freeze all non-essential hiring.").'
        },
        {
          who: 'B',
          notes: 'Team Lead (Student B): Report the Group CFO’s statements to a colleague using Reported Speech and accurate tense shifts and reporting verbs (said, explained, mandated).'
        },
        {
          who: 'C',
          notes: 'B: "The Group CFO explained that the shipping costs were double what they had forecasted, and she mandated that we freeze all non-essential hiring."'
        }
      ],
      coach: { title: 'What this is practising', target: 'Reported Speech', taught: [] },
      model: 'He stated that the shipping costs were doubling. He mandated that we review every freight contract, and he emphasised that the report was due on Friday.',
      visual: { spot: 'reporting', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 10 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: The Meeting Minutes',
      instruction: 'Write the "Decisions and Actions" section of a meeting minutes (80 words), reporting the results of a discussion on budget approval.',
      html: '<p>Style: Use formal reporting verbs and Reported Speech.</p>',
      playable: [{ t: 'Use formal reporting verbs and Reported Speech.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'manager', caption: 'Review · Extension Writing: The Meeting Minutes', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 10 · 8D',
      type: 'writer',
      title: 'Extension Writing: The Meeting Minutes',
      instruction: 'Write the "Decisions and Actions" section of a meeting minutes (80 words), reporting the results of a discussion on budget approval.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Decisions and Actions: The Controller stated that the marketing budget was approved at 90% of the requested amount. She emphasized that the remaining 10% had to be justified in detail. The Finance team agreed that they would submit a revised analysis by the end of the week. The Head of HR asked if the hiring freeze was still in place, and the Controller confirmed that it was.',
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'Write the "Decisions and Actions" section of a meeting minutes (80 words), reporting the results of a discussion on budget approval.',
          'Example: "Decisions and Actions: The Controller stated that the marketing budget was approved at 90% of the requested amount. She emphasized that the remaining 10% had to be justified in detail. The Finance team agreed that they would submit a revised analysis by the end of the week. The Head of HR asked if the hiring freeze was still in place, and the Controller confirmed that it was."'
        ]
      },
      visual: { spot: 'reporting', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c8',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 10 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can use reporting verbs (assert, mandate, elaborate) correctly. [ ]' },
        { t: 'I can change the tense of Present Simple to Past Simple in Reported Speech. [ ]' },
        { t: 'I can accurately report questions using if/whether. [ ]' },
        { t: 'I can convey urgent messages and directives to a team. [ ]' }
      ],
      visual: { spot: 'reconcile', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
