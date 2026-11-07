/* Unit 2 §12 — Part 4, Speaking.

   The book's task is a pair role-play with Card A and Card B. A learner on
   their own has no partner, so the partner's four questions are written
   out. The task, the cards and the useful language are unchanged. */
EAFM.page('u2-s12', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 4', page: 2, section: '12',
          lesson: 'Part 4 · Speaking', title: 'Reporting what happened' },
  objective: 'Report a finished task aloud, step by step, in the past',
  prev: 's11-dialogue-2', prevLabel: 'Audio 2.3',
  next: 's13-reading-a', nextLabel: 'Reading A',
  intro: 'Work in pairs. Report what you did recently. Use the past simple and the past continuous.',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 2 · Part 4 · Model exchange', type: 'order',
      title: 'The model exchange, out of order',
      instruction: 'The book prints a model exchange between A and B. Its six lines are shuffled here. Put them back in order — the questions and their answers have to stay together, and the signposts (<i>First… Then… After that…</i>) tell you which is which.',
      poolLabel: 'Click a line, then click the slot it belongs in — or drag it there.',
      visual: { art: 'two-actions',
        caption: 'One of B’s answers has a long action with a short one inside it. Find it before you place anything.' },
      blocks: [
        { id: 'm5', text: 'A: And after that?' },
        { id: 'm2', text: 'B: First, I checked every entry. Then I posted them to the ledger.' },
        { id: 'm6', text: 'B: After that, I reconciled the cash and I prepared the statement.' },
        { id: 'm1', text: 'A: What did you do at the month-end?' },
        { id: 'm4', text: 'B: Yes. While I was checking, I found a mistake, so I corrected it.' },
        { id: 'm3', text: 'A: Did you find any problems?' }
      ],
      positions: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
      whyTitle: 'Why the order is what it is',
      after: 'Now read the whole exchange aloud twice — once as A, once as B.'
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 2 · Part 4 · Cards A and B', type: 'roleplay',
      title: 'Card A and Card B',
      instruction: 'Take Card A first. Your partner’s four questions are written out, so you can do this alone. Then change roles and use the other card.',
      scene: 'u2-haytham',
      roles: [
        { who: 'A', label: 'Card A — you are Fadi',
          body: 'Report your month-end to a colleague. Say what you did, step by step (past simple), and what you were doing when a problem appeared (past continuous). Say how you fixed it.' },
        { who: 'B', label: 'Card B — you are the colleague',
          body: 'Listen, then ask: What did you do first? Did you find any mistakes? What were you doing when the problem appeared? How did you fix it?' }
      ],
      table: {
        head: ['Card B asks', 'Your answer needs'],
        rows: [
          ['What did you do first?', 'past simple + a signpost: first, then, after that'],
          ['Did you find any mistakes?', 'a short past-simple answer, then a number'],
          ['What were you doing when the problem appeared?', 'was/were + verb-ing'],
          ['How did you fix it?', 'past simple, and a result']
        ]
      },
      remember: [
        'first I…', 'then I…', 'after that I…',
        'while I was…ing', 'I didn’t…', 'did you…?'
      ],
      minWords: 40,
      notePlaceholder: 'Plan: 1) the task  2) the steps (past simple)  3) a problem (past continuous background)  4) how you fixed it  5) the result',
      coach: {
        title: 'Check your report',
        target: 'past simple and past continuous, spoken',
        taught: [
          'The steps of a finished job are all past simple.',
          'The moment a problem appeared is a background action: was/were + -ing.',
          'Signposts carry the order: first, then, after that, finally.'
        ],
        task: 'Report a task you finished recently: the steps in order, a problem that appeared while you were working, and how you fixed it.',
        parts: [
          'The task, and when you did it.',
          'The steps, in order — past simple.',
          'A problem that appeared while you were working — past continuous.',
          'How you fixed it, and the result.'
        ],
        example: [
          'Last Thursday I closed the petty cash for the month.',
          'First I counted the notes. Then I checked each receipt against the cash book, and after that I wrote the total.',
          'While I was counting, I found a receipt with no date on it.',
          'I asked the driver, he remembered the day, and he signed it. Then the cash and the book agreed.'
        ],
        exampleNote: 'Then change roles and use the other card. After that, with a new partner, tell the true story of a task you finished recently, using both past tenses.',
        criteria: [
          { t: 'At least three past-simple steps, with signposts.' },
          { t: 'One past-continuous sentence for the background action.' },
          { t: 'A problem, and what you did about it.' },
          { t: 'A result at the end — what was true once you had finished.' }
        ]
      }
    }
  ]
});
