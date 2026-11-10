/* Unit 2 §15 — Figure 2.1, and the four questions the book asks about it.

   The book's key for this task reprints the four questions instead of
   answering them, AND labels the section "Figure 1.1 task" — a copy of
   Unit 1's key that was never renumbered (see the ERRATA). Every answer
   below is derived from the figure and from the author's own caption,
   which is quoted verbatim. */
EAFM.page('u2-s15', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Figure 2.1', page: 2, section: '15',
          lesson: 'Part 5 · Reading', title: 'Figure 2.1 — one transaction, from receipt to ledger' },
  objective: 'Read a transaction flow, and say why the two sides are always equal',
  prev: 's14-reading-b', prevLabel: 'Reading B',
  next: 's16-writing', nextLabel: 'Writing',
  intro: 'Look at Figure 2.1 (the transaction diagram) and answer. This checks that you can read a transaction flow.',
  cards: [
    {
      id: 'c1', covers: ['Figure 2.1'], ref: 'F2.1',
      bookRef: 'Unit 2 · Figure 2.1', type: 'quizset',
      title: 'Read the diagram',
      instruction: 'Everything you need is in the picture and in its caption. You met this diagram in §1, before the text; now you have read both readings too.',
      visual: { art: 'transaction-flow', wide: true,
        caption: 'Figure 2.1 · One transaction, from receipt to ledger. Fadi starts with a source document (a receipt for $500 of office supplies). He writes a journal entry: he debits office supplies $500 and credits cash $500. Then he posts the entry to the ledger. In the T-accounts, the debit and the credit are always equal.' },
      items: [
        {
          q: '1. What is the source document in the diagram?',
          evidence: 'stage 1, and the caption’s first sentence.',
          options: [
            { t: 'A receipt for $500 of office supplies.', ok: true,
              why: 'Right — the caption says it exactly: "a source document (a receipt for $500 of office supplies)". A source document is whatever comes from outside and starts the record.' },
            { t: 'The journal entry.', ok: false,
              why: 'The journal entry is stage 2, and the finance office writes it. A source document is not written by the person recording it — that is what makes it evidence.' },
            { t: 'The ledger.', ok: false,
              why: 'Stage 3, at the end of the flow.' },
            { t: 'The voucher.', ok: false,
              why: 'A voucher is a real document in this unit and it does support a payment — but it is not in this diagram, and the caption names the receipt.' }
          ]
        },
        {
          q: '2. Which account did Fadi debit, and which did he credit?',
          evidence: 'the caption: "he debits office supplies $500 and credits cash $500".',
          options: [
            { t: 'He debited cash and credited office supplies.', ok: false,
              why: 'The right two accounts, the wrong way round. The thing bought is debited; the money that paid for it is credited.' },
            { t: 'He debited office supplies and credited cash.', ok: true,
              why: 'Right — and it is the same shape as Karim’s fuel in Reading B: "I debited fuel and credited cash." Different purchase, identical pattern.' },
            { t: 'He debited the journal and credited the ledger.', ok: false,
              why: 'Those are books. A debit and a credit are positions inside an account, and accounts live in the ledger.' },
            { t: 'He debited the receipt and credited the statement.', ok: false,
              why: 'Those are documents, not accounts.' }
          ]
        },
        {
          q: '3. What are the two totals at the bottom of the journal?',
          evidence: 'the bottom row of stage 2 in the diagram.',
          options: [
            { t: '$500 and $500.', ok: true,
              why: 'Right — the journal entry totals its two columns and both come to 500. That is the check: if the two totals differ, the entry is wrong before it ever reaches the ledger.' },
            { t: '$500 and $1,000.', ok: false,
              why: 'The two sides are not added together. Each column is totalled separately, and the point is that they match.' },
            { t: '$250 and $250.', ok: false,
              why: 'The amount is 500 throughout — the caption names it twice.' },
            { t: 'There is only one total.', ok: false,
              why: 'There are two, one per column. A single total would hide exactly the error this layout exists to catch.' }
          ]
        },
        {
          q: '4. Why are the debit and the credit always equal? (inference)',
          evidence: 'the caption’s last sentence, and Part 11.',
          options: [
            { t: 'Because Fadi checks them twice.', ok: false,
              why: 'He is careful, but checking does not make them equal — it only finds out whether they are. They are equal because of how the entry is built.' },
            { t: 'Because every transaction changes two things by the same amount, so the entry needs two equal sides.', ok: true,
              why: 'Right. Part 11 states the rule: "Every transaction changes two things at the same time. When Karim bought fuel, the fuel cost went up, and the cash went down." One event, one amount, recorded twice from two directions.' },
            { t: 'Because the amounts are always round numbers.', ok: false,
              why: 'The figure uses 500 and Reading B uses 80, but the rule has nothing to do with how round the number is.' },
            { t: 'Because the ledger would be too long otherwise.', ok: false,
              why: 'Length is not the issue. The equality is a rule about truth, not about size — "If the two sides do not agree, they know at once that something is wrong."' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Figure 2.1'], ref: 'F2.1-b',
      bookRef: 'Unit 2 · Figure 2.1', type: 'order',
      title: 'Put the three stages back in order',
      instruction: 'The diagram has three numbered stages and two arrows. They are shuffled here — put them back, then check against the picture above.',
      say: { key: 'course' },
      poolLabel: 'Click a stage, then click its place — or drag it there.',
      blocks: [
        { id: 'f3', text: 'The ledger — the entry reaches both T-accounts, and the two sides stay equal.' },
        { id: 'f1', text: 'The source document — a receipt for $500 of office supplies.' },
        { id: 'f2', text: 'The journal entry — debit office supplies $500, credit cash $500.' }
      ],
      positions: ['f1', 'f2', 'f3'],
      whyTitle: 'Why the order is what it is',
      after: 'The arrows are labelled too: <b>check it</b> between stages 1 and 2, and <b>post it</b> between stages 2 and 3. Those two verbs are the whole job.'
    }
  ]
});
