/* Unit 2 §11 — Audio 2.3, Samah asks how one receipt was recorded.

   The three comprehension answers are derived (the key reprints them).
   The two MCQ answers ARE in the key (1 A, 2 A) and agree with what is
   derived here. */
EAFM.page('u2-s11', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Audio 2.3', page: 2, section: '11',
          lesson: 'Part 3 · Listening', title: 'Audio 2.3 — one receipt, step by step' },
  objective: 'Follow one transaction from paper to ledger, in order',
  prev: 's10-dialogue-1', prevLabel: 'Audio 2.2',
  next: 's12-speaking', nextLabel: 'Speaking',
  intro: '<b>Before you listen:</b> Samah asks Fadi how he recorded one transaction. <b>While you listen:</b> What did Fadi do with the receipt, step by step?',
  cards: [
    {
      id: 'c1', covers: ['Audio 2.3'], ref: '2.3',
      bookRef: 'Unit 2 · Audio 2.3', type: 'scene',
      title: 'Listen to the conversation',
      instruction: 'Fadi describes five steps in order. Listen for the signposts: <i>First… Then… after the journal…</i>',
      scene: 'u2-samah',
      after: '<b>Useful phrases:</b> first I checked it · then I asked for the voucher · I wrote the entry · I debited… and credited… · I did the posting · I updated both accounts'
    },
    {
      id: 'c2', covers: ['Audio 2.3'], ref: 'A',
      bookRef: 'Unit 2 · Audio 2.3 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Answer from what Fadi says.',
      visual: { spot: 'receipt', caption: 'Karim’s fuel receipt — the piece of paper the whole conversation is about.' },
      items: [
        {
          q: '1. What did Fadi check first on the receipt?',
          evidence: 'Fadi’s first answer, which names three things.',
          jump: { scene: 'u2-samah', line: 2 },
          options: [
            { t: 'The date, the amount, and the reason.', ok: true,
              why: 'Right — "First, I checked it. I looked at the date, the amount, and the reason." Three checks, and the question asks what he looked at, so all three belong in the answer. Reading B repeats the same list.' },
            { t: 'The voucher.', ok: false,
              why: 'That comes second: "Then I asked for the voucher." And it is a different piece of paper altogether.' },
            { t: 'The signature of the driver.', ok: false,
              why: 'No signature is mentioned. The approval comes from a manager, through the voucher.' },
            { t: 'The ledger balance.', ok: false,
              why: 'The ledger is the last stage, not the first. Nothing is checked against it here.' }
          ]
        },
        {
          q: '2. What did the voucher show?',
          evidence: 'Fadi’s answer beginning "Then I asked for the voucher…".',
          jump: { scene: 'u2-samah', line: 4 },
          options: [
            { t: 'That the fuel cost eighty dollars.', ok: false,
              why: 'The amount is on the receipt, and Fadi had already checked it. The voucher is about permission, not price.' },
            { t: 'That a manager approved the expense.', ok: true,
              why: 'Right — "It showed that a manager approved the expense." This is the whole difference between the two papers: the receipt proves the money moved, the voucher proves somebody allowed it to.' },
            { t: 'That Karim drove to the station.', ok: false,
              why: 'That is in Reading B as part of the story, but it is not what a voucher records.' },
            { t: 'That the two sides were equal.', ok: false,
              why: 'That is the entry, which Fadi writes afterwards — and he confirms it himself: "Eighty dollars on each side."' }
          ]
        },
        {
          q: '3. Which account did Fadi debit, and which did he credit?',
          evidence: 'Fadi’s line: "I debited fuel and credited cash."',
          jump: { scene: 'u2-samah', line: 6 },
          options: [
            { t: 'He debited cash and credited fuel.', ok: false,
              why: 'The right two accounts the wrong way round — which is exactly the error this question exists to catch. Fadi says fuel first, and fuel is the debit.' },
            { t: 'He debited fuel and credited cash.', ok: true,
              why: 'Right — "I opened the journal and I wrote the entry. I debited fuel and credited cash." Figure 2.1 draws the same shape with office supplies: the thing bought is debited, the cash paid out is credited.' },
            { t: 'He debited the journal and credited the ledger.', ok: false,
              why: 'Those are books, not accounts. A debit and a credit are positions inside an account.' },
            { t: 'He debited the voucher and credited the receipt.', ok: false,
              why: 'Those are documents. They are the evidence for an entry, never part of one.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Audio 2.3'], ref: 'B',
      bookRef: 'Unit 2 · Audio 2.3 · B', type: 'quizset',
      title: 'Listen again and choose the best answer',
      instruction: 'Two questions, four options each.',
      visual: { spot: 't-accounts', caption: '"Eighty dollars on each side. They are always equal."' },
      items: [
        {
          q: '1. Fadi debited fuel and credited…',
          evidence: 'Fadi’s line about the entry.',
          jump: { scene: 'u2-samah', line: 6 },
          options: [
            { t: 'cash', ok: true,
              why: 'Right — "I debited fuel and credited cash." Karim paid in cash, so cash is what left the organisation.' },
            { t: 'income', ok: false,
              why: 'No money came in. Buying fuel is an expense from start to finish.' },
            { t: 'the bank', ok: false,
              why: 'Reading B is explicit that Karim "paid eighty dollars in cash" — the bank is not involved.' },
            { t: 'the manager', ok: false,
              why: 'A person is not an account. The manager appears only on the voucher, as the approver.' }
          ]
        },
        {
          q: '2. The two sides of the entry were…',
          evidence: 'Fadi’s answer to "Were the two sides equal?"',
          jump: { scene: 'u2-samah', line: 8 },
          options: [
            { t: 'always equal', ok: true,
              why: 'Right — "Of course. Eighty dollars on each side. They are always equal." Part 11 gives the reason: this is the rule of double-entry, and it is the heart of all accounting.' },
            { t: 'never equal', ok: false,
              why: 'If the two sides are not equal, something is wrong — and that is the point at which a finance officer starts looking for a mistake.' },
            { t: 'sometimes equal', ok: false,
              why: '"Sometimes" is the trap: it sounds cautious and reasonable. Fadi’s word is <i>always</i>, and he means it as a rule, not as an observation.' },
            { t: 'not important', ok: false,
              why: 'The opposite. It is the one check that proves the entry was written properly.' }
          ]
        }
      ]
    }
  ]
});
