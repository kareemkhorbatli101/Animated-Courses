/* Unit 2 §4 — Part 1's five terminology questions.

   The book's answers are A, B, A, B, C: positions 1, 2, 1, 2, 3, so no
   position holds more than two of the five. Nothing has been rearranged. */
EAFM.page('u2-s04', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 1', page: 2, section: '4',
          lesson: 'Part 1 · Vocabulary', title: 'Terminology — choose the meaning' },
  objective: 'Choose the right meaning for each of the month-end words',
  prev: 's03-vocab-match', prevLabel: 'Match the words',
  next: 's05-grammar-rule', nextLabel: 'Grammar',
  cards: [
    {
      id: 'c1', covers: ['P1Q1', 'P1Q2', 'P1Q3', 'P1Q4', 'P1Q5'], ref: 'P1Q',
      bookRef: 'Unit 2 · Part 1 · P1Q1–P1Q5', type: 'quizset',
      title: 'Choose the best answer',
      instruction: 'Now choose from the answers (A–D) below. Every wrong one tells you why it is wrong.',
      visual: [
        { spot: 'debit', caption: 'debit — the left side' },
        { spot: 'credit', caption: 'credit — the right side' }
      ],
      items: [
        {
          q: 'P1Q1. A ‘journal’ is the first book where we write…',
          evidence: 'the Part 1 meaning (c): "the first book where we write each transaction, in date order".',
          options: [
            { t: 'each transaction', ok: true,
              why: 'Right — every transaction, one at a time, as it happens. The opening Read says the same: "He wrote each one in the journal, in date order."' },
            { t: 'the staff names', ok: false,
              why: 'A journal records money, not people. Staff appear only as the cost of paying them.' },
            { t: 'the office rules', ok: false,
              why: 'Rules and controls are Unit 6. A journal is a record of what happened, not of what is allowed.' },
            { t: 'the daily news', ok: false,
              why: 'The ordinary English word "journal" can mean a diary or a newspaper; in accounting it means one specific book. That is exactly why this option is here.' }
          ]
        },
        {
          q: 'P1Q2. A ‘debit’ is an entry on the…',
          evidence: 'the Part 1 meaning (a): "an entry on the left side of an account".',
          options: [
            { t: 'roof of the office in the journal', ok: false,
              why: 'Not a place in an account at all — an option built to be eliminated at a glance.' },
            { t: 'left side of an account', ok: true,
              why: 'Right, and <b>left</b> is the whole of it. A debit is a position, not a direction of money: in Reading B, debiting fuel records a cost, but debiting cash would record money arriving.' },
            { t: 'top of the page', ok: false,
              why: 'Top and bottom play no part. An account is divided left and right, which is why the T-account in Figure 2.1 is drawn as a T.' },
            { t: 'end of the year', ok: false,
              why: 'That is a time, not a position. The time word in this unit is <i>month-end</i>.' }
          ]
        },
        {
          q: 'P1Q3. An ‘expense’ is money that the organisation…',
          evidence: 'the Part 1 meaning (b): "money that the organisation spends".',
          options: [
            { t: 'spends', ok: true,
              why: 'Right. Karim’s fuel in Reading B is an expense: eighty dollars left the organisation and did not come back.' },
            { t: 'forgets', ok: false,
              why: 'Not a financial verb. If an option could not appear in an account, it is not the answer.' },
            { t: 'hides', ok: false,
              why: 'The opposite of everything this unit teaches — Part 9 Case 2 is built on refusing to hide a payment with no receipt.' },
            { t: 'prints', ok: false,
              why: 'Organisations print reports, not money.' }
          ]
        },
        {
          q: 'P1Q4. A ‘voucher’ is a document that…',
          evidence: 'the Part 1 meaning (d): "a document that supports and approves a payment".',
          options: [
            { t: 'cleans the office', ok: false,
              why: 'Not a document function at all.' },
            { t: 'approves a payment', ok: true,
              why: 'Right — <b>approves</b> is the word that separates it from a receipt. Audio 2.3 says it exactly: "Then I asked for the voucher. It showed that a manager approved the expense."' },
            { t: 'drives the car', ok: false,
              why: 'Karim drives the car; the voucher is paper.' },
            { t: 'opens the door', ok: false,
              why: 'Nothing in the unit is a key or a pass.' }
          ]
        },
        {
          q: 'P1Q5. ‘Income’ is money that the organisation…',
          evidence: 'the Part 1 meaning (f): "money that the organisation receives".',
          options: [
            { t: 'burns', ok: false,
              why: 'Not a financial verb.' },
            { t: 'loses', ok: false,
              why: 'Losing money is closer to an expense, and even that is not what expense means — an expense is money spent on purpose.' },
            { t: 'receives', ok: true,
              why: 'Right — the exact mirror of expense. The statement in Reading A shows the pair together: "the total income and the total expense for the whole month".' },
            { t: 'paints', ok: false,
              why: 'Not a financial verb.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: [], ref: 'ref', bookRef: 'Unit 2 · Part 1', type: 'study',
      title: 'The words, with their pictures',
      instruction: 'Keep this card. All of these come back in the readings, the dialogues and the review — and the first four are what Figure 2.1 is made of.',
      html:
        '<div class="cols" style="line-height:1.8">' +
        '<div><b>journal</b><br>the first book where we write each transaction, in date order</div>' +
        '<div><b>debit</b><br>an entry on the left side of an account</div>' +
        '<div><b>credit</b><br>an entry on the right side of an account</div>' +
        '<div><b>expense</b><br>money that the organisation spends</div>' +
        '<div><b>income</b><br>money that the organisation receives</div>' +
        '<div><b>voucher</b><br>a document that supports and approves a payment</div>' +
        '<div><b>receipt</b><br>a paper that proves a payment took place</div>' +
        '<div><b>month-end</b><br>the time when we close and check the accounts for the month</div>' +
        '</div>',
      doneLabel: 'I know these eight words',
      playable: ['journal', 'debit', 'credit', 'expense', 'income', 'voucher',
                 'receipt', 'month-end']
    }
  ]
});
