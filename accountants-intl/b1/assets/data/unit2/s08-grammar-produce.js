/* Unit 2 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Grammar · produce it',
    page: 2,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 2 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Complete the sentences using the correct verb form and a suitable connector (when or while).',
      text: '<div style="font-size:16px;line-height:2.4">4. Transformation: I [[4a]] (enter) the data [[4b]] the manager [[4c]] (ask) a question.<br>6. Transformation: She [[6a]] (examine) the ledger [[6b]] he [[6c]] (prepare) the claims.</div>',
      answers: {
        '4a': ['was entering'],
        '4b': ['when'],
        '4c': ['asked'],
        '6a': ['was examining'],
        '6b': ['while'],
        '6c': ['was preparing']
      },
      bank: ['asked', 'was entering', 'was examining', 'was preparing', 'when', 'while'],
      whyTitle: 'What decided each one',
      why: {
        '4a': '<b>was entering</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4b': '<b>when</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4c': '<b>asked</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6a': '<b>was examining</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6b': '<b>while</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6c': '<b>was preparing</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Transformation: I <u>was entering</u> (enter) the data ____________________ the manager ____________________ (ask) a question.',
      brief: 'Rewrite each sentence. The meaning must survive the change — if it does not, you have changed more than the grammar.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 2 · 2E',
      type: 'discuss',
      title: 'Speaking: Explaining Interruptions',
      instruction: 'In pairs, use the cues to create a sentence explaining an interrupted or parallel activity. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Cue 1: (Ongoing: Check the accounts receivable) (Interruption: Find a missing invoice)'
        },
        { q: 'Example: "I was checking the accounts receivable when I found a missing invoice."' },
        {
          q: 'Cue 2: (Ongoing: Review the expense claims) (Parallel: The auditor looked over my shoulder)'
        },
        {
          q: 'Cue 3: (Ongoing: Post the depreciation entry) (Interruption: The Group CFO walked in)'
        },
        {
          q: 'Cue 4: (Completed: Correct five errors) (Specific time: Before the Singapore hand-over call)'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'journal',
        caption: 'Processing invoices, expense claims, and receipts from the previous period (historical data entry across the group\'s six'
      },
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'In pairs, use the cues to create a sentence explaining an interrupted or parallel activity.',
          'Cue 1: (Ongoing: Check the accounts receivable) (Interruption: Find a missing invoice)',
          'Example: "I was checking the accounts receivable when I found a missing invoice."',
          'Cue 2: (Ongoing: Review the expense claims) (Parallel: The auditor looked over my shoulder)'
        ]
      },
      model: 'I was checking the accounts receivable when I found a missing invoice.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
