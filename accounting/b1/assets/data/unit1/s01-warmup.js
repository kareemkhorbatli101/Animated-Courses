/* Unit 1 §1 — Warm Up. The book's three questions, before the text.

   The book opens "Look at the finance cycle (Figure 1.1)" and prints
   Figure 1.1 six parts later, in Part 5. In print the learner flips; here
   the figure is drawn where it is needed. It is drawn again in §15, from
   one definition, so the two can never drift apart.

   Question 1 is answerable from the diagram, so it is a selection and is
   marked. Questions 2 and 3 are asked BEFORE the reading that answers
   them — the book's own word is "Think" — so they are coached and not
   scored. Marking a prediction wrong is not teaching. */
EAFM.page('u1-s01', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Warm Up', page: 1, section: '1',
          lesson: 'Opening', title: 'Warm up — the finance cycle' },
  objective: 'Read a cycle diagram, and predict what a finance officer does',
  intro: 'Look at the finance cycle (Figure 1.1). Think about these questions before you read.',
  next: 's02-read', nextLabel: 'Read',
  cards: [
    {
      id: 'c1', covers: ['Warm Up'], ref: 'WU1', bookRef: 'Unit 1 · Warm Up', type: 'quizset',
      title: 'What does the diagram say?',
      instruction: 'Look at Figure 1.1 and answer. Everything you need is in the picture — you have not read the text yet.',
      visual: { art: 'finance-cycle', wide: true,
        caption: 'Figure 1.1 · The finance cycle. Five stages, numbered, and the arrows return to the beginning.' },
      items: [
        {
          q: '1. What is the first stage in the finance cycle?',
          evidence: 'stage 1 of the diagram — the circle at the top, in a different colour.',
          options: [
            { t: 'He records the transactions.', ok: true,
              why: 'Right — stage 1 sits at the top and is the only one drawn in a different colour, because it is where the cycle begins. Everything else can only happen once something has been written down.' },
            { t: 'He reports to managers and donors.', ok: false,
              why: 'That is stage 3. Reporting comes after the recording and the reconciling, because a report is made out of what has already been written down.' },
            { t: 'He helps to plan the budget.', ok: false,
              why: 'That is stage 4, near the end. A budget plans what will happen next, so it needs the record of what has happened already.' },
            { t: 'He reconciles the cash and the bank.', ok: false,
              why: 'That is stage 2 — the very next one. Reconciling compares two records, so there has to be a record first.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Warm Up'], ref: 'WU2', bookRef: 'Unit 1 · Warm Up', type: 'discuss',
      title: 'Two questions to think about before you read',
      instruction: 'These two have no single right answer, and you are meant to answer them <b>before</b> the text. Write what you think now; the reading in §2 will tell you how close you were.',
      visual: { spot: 'finance-officer',
        caption: 'You will meet Fadi on the next page. What do you think his day looks like?' },
      minWords: 8,
      questions: [
        { q: '2. What does a finance officer do every day?' },
        { q: '3. Why is careful record-keeping important for an organisation?' }
      ],
      ideas: ['records every payment', 'checks the cash', 'prepares reports',
              'plans the budget', 'the donors must trust the numbers',
              'the managers need to know what is left'],
      okMsg: 'Good — now read §2 and see how close your guess was.',
      coach: {
        title: 'Before you read',
        target: 'prediction, not recall',
        taught: [
          'The diagram names five stages: record, reconcile, report, budget, advise.',
          'An aid organisation spends money that somebody else gave it.'
        ],
        task: 'Answer the two warm-up questions from the diagram and from what you already know. You have not read the text yet, so a wrong guess costs nothing.',
        parts: [
          'Question 2 — name two or three things you think a finance officer does on a normal day.',
          'Question 3 — say who needs to trust the records, and what happens if they do not.'
        ],
        example: [
          'I think a finance officer writes down every payment and checks the money in the office. Perhaps he also prepares reports for the managers.',
          'Careful records are important because the donors give the money and they want to know where it went. If the records are wrong, nobody can trust the organisation.'
        ],
        exampleNote: 'This is one learner’s guess, written before reading. It is not the answer key — compare it with the text in §2 and see what it missed.',
        criteria: [
          { t: 'Two or three concrete tasks, not one general word.' },
          { t: 'An answer to "why", not only "who".' }
        ]
      }
    }
  ]
});
