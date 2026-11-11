/* Unit 2 §16 — Part 6, the five writing tasks.

   W1-W5 at the book's own five lengths, each with its plan, its model and
   its checklist. `pastCheck` is on throughout: the engine counts the
   past-tense verbs it can find and shows them, which is the one piece of
   feedback a page can honestly give on free writing in this unit. */
EAFM.page('u2-s16', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 6', page: 2, section: '16',
          lesson: 'Part 6 · Writing', title: 'W1–W5 — five pieces of writing' },
  objective: 'Report finished work at five different lengths, from 140 words down to 20',
  prev: 's15-figure', prevLabel: 'Figure 2.1',
  next: 's17-stakeholder', nextLabel: 'Stakeholders',
  intro: 'In this unit you report what happened. Use the past simple for finished actions (add ed to regular verbs; learn irregular verbs), and the past continuous (was/were + verb-ing) for a longer action in progress. Use did not / did + base verb for negatives and questions.',
  cards: [
    {
      id: 'c1', covers: ['W1', 'Part 6'], ref: 'W1', bookRef: 'Unit 2 · W1', type: 'writer',
      title: 'W1 · month-end report (100–140 words)',
      instruction: 'Write a short month-end report for your manager (100–140 words). Say what you did, step by step. Use the past simple and the past continuous.',
      visual: { spot: 'month-end', caption: 'A whole month, reported after it finished.' },
      minWords: 100,
      aiCheck: {
        task: 'A month-end report, 100-140 words, saying what you did and what you found.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'your finance manager',
        must: [
          'a heading',
          'what you finished, in the past simple',
          'at least one past continuous for something already in progress',
          'a stated time such as last month or yesterday',
          'correct irregular past forms'
        ]
      },
      pastCheck: true,
      stems: ['I closed the books…', 'During the month, I recorded…',
              'At the month-end, I checked…', 'While I was checking, I found…',
              'After that, I…', 'Finally, I prepared…'],
      paras: [
        { label: 'A heading', purpose: 'name the month and what the report is.' },
        { label: 'What you recorded', purpose: 'how many transactions, and where.' },
        { label: 'The checks you did', purpose: 'past simple, in order.' },
        { label: 'A problem you found', purpose: 'use the past continuous for what you were doing when you found it.' },
        { label: 'How you fixed it, and the final statement', purpose: 'end with what was true once you had finished.' }
      ],
      model: 'Month-End Report — Last Month. I closed the books yesterday, and the work went well. During the month, I recorded two hundred transactions in the journal. At the month-end, I checked every entry with care. While I was checking, I found two small mistakes. A colleague posted one expense to the wrong account, so I corrected it at once. After that, I posted all the entries to the ledger, and every debit matched a credit. Then I reconciled the cash and the bank. Finally, I prepared the statement of income and expense. Every expense had a receipt, and the numbers agreed. The record is now clean and complete. Please tell me if you need any detail.',
      coach: {
        title: 'Check your work',
        target: 'past simple and past continuous',
        minWords: 100,
        taught: ['The steps of a finished month are all past simple.',
                 'The moment you found the problem is a background action: was/were + -ing.'],
        task: 'Write a short month-end report for your manager (100–140 words), saying what you did step by step.',
        parts: ['A heading', 'How many transactions you recorded', 'The checks you did',
                'A problem you found (past continuous)', 'How you fixed it', 'The final statement'],
        example: ['See the model on the card — it is the author’s own, and it does all six in order.'],
        criteria: [
          { t: 'Did you use the past simple for finished actions?' },
          { t: 'Did you use the past continuous for a background action?' },
          { t: 'Did you avoid ‘ed’ after ‘did’?' },
          { t: 'Did you describe clear steps?' },
          { t: 'Is the report clear?' }
        ]
      }
    },
    {
      id: 'c2', covers: ['W2'], ref: 'W2', bookRef: 'Unit 2 · W2', type: 'writer',
      title: 'W2 · transaction note (100–140 words)',
      instruction: 'Write a short note that explains how you recorded one transaction (100–140 words). Use the past simple.',
      visual: { art: 'transaction-flow', wide: true,
        caption: 'One payment, all the way through — the shape your note should follow.' },
      minWords: 100,
      aiCheck: {
        task: 'A note about one transaction, 100-140 words, following it from the receipt to the ledger.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'a colleague who has to check your work',
        must: [
          'the order of the steps',
          'the past simple for each completed step',
          'the document at each stage',
          'a stated time'
        ]
      },
      pastCheck: true,
      stems: ['Yesterday, … bought…', 'First, I checked…', 'Then I asked for the voucher…',
              'I opened the journal and I wrote…', 'I debited… and I credited…',
              'After that, I posted…'],
      paras: [
        { label: 'The transaction', purpose: 'what was bought, by whom, and for how much.' },
        { label: 'The receipt and the voucher', purpose: 'what each one proved.' },
        { label: 'The journal entry', purpose: 'which account you debited and which you credited.' },
        { label: 'The posting', purpose: 'how the entry reached the ledger.' },
        { label: 'The result and a closing', purpose: 'what the record shows now.' }
      ],
      model: 'How I Recorded Karim’s Fuel Payment. Yesterday, Karim bought fuel for the office car. He paid eighty dollars in cash, and he kept the receipt. In the morning, he brought it to me. First, I checked the date, the amount, and the reason. Everything looked correct. Then I asked for the voucher, which a manager approved. Next, I opened the journal and I wrote the entry. I debited the fuel account eighty dollars, and I credited the cash account eighty dollars. The two sides were equal. After that, I posted the entry to the ledger and I updated both accounts. One small receipt became one clear entry.',
      coach: {
        title: 'Check your work',
        target: 'past simple',
        minWords: 100,
        taught: ['Everything in this note is finished, so it is past simple throughout.',
                 'The order is the whole point: receipt, voucher, journal, posting.'],
        task: 'Write a note explaining how you recorded one transaction (100–140 words).',
        parts: ['The transaction', 'The receipt and the voucher', 'The journal entry (debit/credit)',
                'The posting', 'The result', 'A closing'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'Did you use the past simple throughout?' },
          { t: 'Did you mention the receipt and the voucher?' },
          { t: 'Did you describe the debit and the credit?' },
          { t: 'Did you describe the posting?' },
          { t: 'Is the note clear?' }
        ]
      }
    },
    {
      id: 'c3', covers: ['W3'], ref: 'W3', bookRef: 'Unit 2 · W3', type: 'writer',
      title: 'W3 · yesterday’s diary (90–130 words)',
      instruction: 'Write a short diary of a busy day at work (90–130 words). Use the past simple and the past continuous.',
      visual: { art: 'two-actions',
        caption: 'A diary of a busy day needs at least one interruption — that is where the continuous goes.' },
      minWords: 90,
      aiCheck: {
        task: 'A diary of yesterday, 90-130 words.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'your teacher',
        must: [
          'events in the order they happened',
          'the past simple for the finished actions',
          'at least one past continuous for a background action',
          'time markers such as first, then, while, after that'
        ]
      },
      pastCheck: true,
      stems: ['Yesterday was…', 'In the morning, I…', 'Around noon, I started…',
              'While I was…, the phone rang.', 'In the afternoon, I…', 'By five o’clock…'],
      paras: [
        { label: 'The morning', purpose: 'what you did first, past simple.' },
        { label: 'The afternoon', purpose: 'what you did next.' },
        { label: 'An interruption', purpose: 'what you were doing when something happened — past continuous.' },
        { label: 'How the day ended, and how you felt', purpose: 'finish with a result and a feeling.' }
      ],
      model: 'A Busy Day. Yesterday was a very busy day. In the morning, I recorded the new transactions and I reconciled the cash. Around noon, I started the statement. While I was preparing it, the phone rang three times. Layth wanted his budget numbers, so I sent them quickly. In the afternoon, I posted the last entries to the ledger. I found one mistake, but I corrected it fast. By five o’clock, the books were clean and the statement was ready. I felt tired, but I also felt proud. It was a hard day, and I finished every task.',
      coach: {
        title: 'Check your work',
        target: 'past simple and past continuous',
        minWords: 90,
        taught: ['A diary is a sequence, so most of it is past simple.',
                 'The one or two interruptions are where the continuous belongs.'],
        task: 'Write a short diary of a busy day at work (90–130 words).',
        parts: ['The morning', 'The afternoon', 'Something happening when a problem came',
                'How the day ended', 'How you felt'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'Did you use both past tenses?' },
          { t: 'Did you describe a clear day?' },
          { t: 'Did you use the past continuous for an interrupted action?' },
          { t: 'Did you say how you felt?' },
          { t: 'Is the diary clear?' }
        ]
      }
    },
    {
      id: 'c4', covers: ['W4'], ref: 'W4', bookRef: 'Unit 2 · W4', type: 'writer',
      title: 'W4 · quick report (30–50 words — keep it short!)',
      instruction: 'Write a SHORT note about two things you did yesterday (30–50 words). Use the past simple.',
      visual: { spot: 'report', caption: 'Four sentences. Nothing that is not needed.' },
      minWords: 30,
      aiCheck: {
        task: 'A SHORT report of what you did, 30-50 words.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'your manager',
        must: [
          'under 50 words',
          'two past simple verbs',
          'a stated time',
          'no present tense for the finished work'
        ]
      },
      pastCheck: true,
      stems: ['Hi …, quick update.', 'Yesterday, I…', 'I also…', 'The journal is now…'],
      paras: [
        { label: 'A greeting', purpose: 'one short line.' },
        { label: 'Task one and task two', purpose: 'both in the past simple.' },
        { label: 'Sign off', purpose: 'state what is true now, and your name.' }
      ],
      model: 'Hi Mr Haytham, quick update. Yesterday, I recorded all the new transactions and I reconciled the cash. I also found and corrected one small mistake. The journal is now up to date. Fadi',
      coach: {
        title: 'Check your work',
        target: 'past simple',
        minWords: 30,
        taught: ['Under fifty words means no sentence can carry two ideas.',
                 'Both tasks are finished, so both are past simple.'],
        task: 'Write a short note about two things you did yesterday (30–50 words).',
        parts: ['A greeting', 'Task one', 'Task two', 'Sign off'],
        example: ['See the model on the card — it is 36 words.'],
        criteria: [
          { t: 'Is your message short (under 50 words)?' },
          { t: 'Did you use the past simple?' },
          { t: 'Is it clear what you did?' },
          { t: 'Is it clear?' }
        ]
      }
    },
    {
      id: 'c5', covers: ['W5'], ref: 'W5', bookRef: 'Unit 2 · W5', type: 'writer',
      title: 'W5 · one-line record (20–40 words — keep it short!)',
      instruction: 'Write two SHORT sentences about a task you finished (20–40 words). Use the past simple.',
      visual: { spot: 'entry', caption: 'Two sentences. The second one should say that the two sides matched.' },
      minWords: 20,
      aiCheck: {
        task: 'One line recording something that happened, 20-40 words.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'a colleague',
        must: [
          'under 40 words',
          'one past simple verb',
          'when it happened'
        ]
      },
      pastCheck: true,
      stems: ['Yesterday, I recorded…', 'I put … on the debit side and … on the credit side.',
              'The two sides were…'],
      paras: [
        { label: 'What you did', purpose: 'past simple, one sentence.' },
        { label: 'The result', purpose: 'what was true when you had finished.' }
      ],
      model: 'Yesterday, I recorded the fuel payment. I put 80 on the debit side and 80 on the credit side. The two sides were equal.',
      coach: {
        title: 'Check your work',
        target: 'past simple',
        minWords: 20,
        taught: ['Two sentences, both finished, both past simple.',
                 'The result sentence is what makes it a record rather than a note.'],
        task: 'Write two short sentences about a task you finished (20–40 words).',
        parts: ['What you did (past simple)', 'The result', 'Keep it short'],
        example: ['See the model on the card — it is 24 words.'],
        criteria: [
          { t: 'Is it short (under 40 words)?' },
          { t: 'Did you use the past simple?' },
          { t: 'Is it clear?' },
          { t: 'Did you mention the result?' }
        ]
      }
    }
  ]
});
