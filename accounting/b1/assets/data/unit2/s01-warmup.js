/* Unit 2 §1 — Warm Up.

   The book opens "Look at the transaction diagram (Figure 2.1)" and prints
   Figure 2.1 in Part 5, six parts later. The figure is drawn here, where it
   is needed, and again in §15 where it is taught — from one definition.

   Question 1 is answerable from the diagram and is marked. Questions 2 and
   3 ask the learner to predict before reading, so they are coached and not
   scored: marking a prediction wrong is not teaching. */
EAFM.page('u2-s01', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Warm Up', page: 2, section: '1',
          lesson: 'Opening', title: 'Warm up — the transaction diagram' },
  objective: 'Read a flow diagram, and predict what happens at a month-end',
  intro: 'Look at the transaction diagram (Figure 2.1). Think about these questions before you read.',
  next: 's02-read', nextLabel: 'Read',
  cards: [
    {
      id: 'c1', covers: ['Warm Up'], ref: 'WU1', bookRef: 'Unit 2 · Warm Up', type: 'quizset',
      title: 'What does the diagram say?',
      instruction: 'Look at Figure 2.1 and answer. Everything you need is in the picture — you have not read the text yet.',
      visual: { art: 'transaction-flow', wide: true,
        caption: 'Figure 2.1 · One transaction, from receipt to ledger. Three numbered stages, and two arrows between them.' },
      items: [
        {
          q: '1. What is the first step: the receipt, the journal, or the ledger?',
          evidence: 'stage 1 of the diagram, on the left, before either arrow.',
          options: [
            { t: 'The receipt — the source document.', ok: true,
              why: 'Right. Stage 1 is labelled SOURCE DOCUMENT and holds the receipt. Nothing can be written down until something has happened and left a piece of paper behind.' },
            { t: 'The journal.', ok: false,
              why: 'Stage 2. The arrow into it is labelled "check it", which means something arrived first and was checked.' },
            { t: 'The ledger.', ok: false,
              why: 'Stage 3, at the far right. The entry only reaches the ledger after it has been written in the journal.' },
            { t: 'They all happen at the same time.', ok: false,
              why: 'The diagram numbers them 1, 2, 3 and draws arrows between them, which is exactly how a picture says "in this order".' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Warm Up'], ref: 'WU2', bookRef: 'Unit 2 · Warm Up', type: 'discuss',
      title: 'Two questions to think about before you read',
      instruction: 'These two have no single right answer, and you are meant to answer them <b>before</b> the text. Write what you think now; the reading in §2 will tell you how close you were.',
      visual: { spot: 'month-end',
        caption: 'The last day of the month. What do you think a finance officer does on it?' },
      minWords: 8,
      questions: [
        { q: '2. What did Fadi do at the month-end last month?' },
        { q: '3. Why is a receipt important for every payment?' }
      ],
      ideas: ['he closed the books', 'he checked every entry', 'he posted to the ledger',
              'he prepared a statement', 'it proves the payment happened',
              'the donor may ask later'],
      okMsg: 'Good — now read §2 and see how close your guess was.',
      coach: {
        title: 'Before you read',
        target: 'prediction, not recall',
        taught: [
          'The diagram shows what happens to ONE payment.',
          'A month-end is what happens to ALL of them at once, at the end of the month.'
        ],
        task: 'Answer the two warm-up questions from the diagram and from what you already know. You have not read the text yet, so a wrong guess costs nothing.',
        parts: [
          'Question 2 — name two or three things you think happen at a month-end.',
          'Question 3 — say who might ask about a payment later, and what the receipt proves to them.'
        ],
        example: [
          'I think Fadi checked all the entries and closed the books. Perhaps he also prepared a report of the income and the expense.',
          'A receipt is important because it proves the payment really happened. Without it, nobody can be sure the money was spent on what we say.'
        ],
        exampleNote: 'This is one learner’s guess, written before reading. Compare it with the text in §2 and see what it missed.',
        criteria: [
          { t: 'Two or three concrete actions for the month-end, not one general word.' },
          { t: 'An answer to "why", naming who needs the proof.' }
        ]
      }
    }
  ]
});
