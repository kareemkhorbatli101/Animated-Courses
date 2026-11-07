/* Unit 1 §12 — Part 4, Speaking.

   The book's task is a pair role-play with Card A and Card B. A learner on
   their own has no partner, so the partner's turns are written out: Card B
   asks the book's own four questions, and the learner answers them in their
   own words. The task, the cards and the useful language are unchanged. */
EAFM.page('u1-s12', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 4', page: 1, section: '12',
          lesson: 'Part 4 · Speaking', title: 'Describing your job and your day' },
  objective: 'Describe your job and your day aloud, using both tenses',
  prev: 's11-dialogue-2', prevLabel: 'Audio 1.3',
  next: 's13-reading-a', nextLabel: 'Reading A',
  intro: 'Work in pairs. Describe your job or your studies. Use the present simple for routines and the present continuous for now.',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A', bookRef: 'Unit 1 · Part 4 · Model exchange', type: 'order',
      title: 'The model exchange, out of order',
      instruction: 'The book prints a model exchange between A and B. Its six lines are shuffled here. Put them back in order — the questions and their answers have to stay together, and the tenses tell you which answer belongs to which question.',
      say: { key: 'course' },
      poolLabel: 'Click a line, then click the slot it belongs in — or drag it there.',
      visual: { art: 'tense-timeline',
        caption: 'Two questions about every day, one about this week. The tense of each answer gives it away.' },
      blocks: [
        { id: 'b3', text: 'A: And what are you doing this week?' },
        { id: 'b1', text: 'A: What do you do every day at work?' },
        { id: 'b6', text: 'B: Because good records help the whole team, and they help the donors to trust us.' },
        { id: 'b4', text: 'B: This week, I am training a new assistant. Right now, I am checking the bank balance.' },
        { id: 'b2', text: 'B: I record the transactions and I reconcile the cash. Every month, I prepare a report.' },
        { id: 'b5', text: 'A: Why does your work matter?' }
      ],
      positions: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'],
      whyTitle: 'Why the order is what it is',
      after: 'Now read the whole exchange aloud twice — once as A, once as B.'
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B', bookRef: 'Unit 1 · Part 4 · Cards A and B', type: 'roleplay',
      title: 'Card A and Card B',
      instruction: 'Take Card A first. Your partner’s four questions are written out, so you can do this alone. Then change roles and use the other card.',
      scene: 'u1-samah',
      roles: [
        { who: 'A', label: 'Card A — you are Fadi',
          body: 'Describe your finance job to a new colleague. Say what you do every day (present simple) and what you are doing this week (present continuous). Explain why the work matters.' },
        { who: 'B', label: 'Card B — you are the new colleague',
          body: 'Listen, then ask: What do you do first every morning? What are you doing right now? How often do you prepare a report? Why does your work matter?' }
      ],
      table: {
        head: ['Card B asks', 'Your answer needs'],
        rows: [
          ['What do you do first every morning?', 'present simple + a time word'],
          ['What are you doing right now?', 'am/is/are + verb-ing'],
          ['How often do you prepare a report?', 'a frequency phrase: every day / week / month'],
          ['Why does your work matter?', 'a reason, in the present simple']
        ]
      },
      remember: [
        'every day I…', 'I usually…', 'right now I am…',
        'this week I am…', 'my work matters because…'
      ],
      minWords: 40,
      notePlaceholder: 'Plan: 1) your job/study  2) daily routine  3) now / this week  4) one key task  5) why it matters',
      coach: {
        title: 'Check your description',
        target: 'present simple and present continuous, spoken',
        taught: [
          'The present simple answers "what do you usually do?"',
          'The present continuous answers "what are you doing now?"',
          'A frequency phrase (every morning, every month) belongs with the simple.'
        ],
        task: 'Describe your own job or studies to a new colleague: your daily routine, what you are doing this week, one important task, and why the work matters.',
        parts: [
          'Your job and where you work.',
          'What you do every day — present simple.',
          'What you are doing now or this week — present continuous.',
          'One important task, and why it matters.'
        ],
        example: [
          'I am a finance assistant in an aid organisation in Aleppo.',
          'Every morning I open the cash book and I record yesterday’s payments. Every week I check the receipts with my manager.',
          'This week I am preparing the figures for a donor report, so right now I am checking a long list of fuel receipts.',
          'This matters because the donor reads these numbers. If one receipt is missing, the whole report is weaker.'
        ],
        exampleNote: 'Then change roles and use the other card. After that, with a new partner, describe your own real job or studies using both tenses.',
        criteria: [
          { t: 'At least two sentences in the present simple, with a time word.' },
          { t: 'At least two sentences in the present continuous.' },
          { t: 'One task explained, not just named.' },
          { t: 'A reason why the work matters.' }
        ]
      }
    }
  ]
});
