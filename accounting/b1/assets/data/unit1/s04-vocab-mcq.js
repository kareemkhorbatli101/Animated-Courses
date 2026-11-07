/* Unit 1 §4 — Part 1's five terminology questions.

   The book's own answers are A, B, A, B, C: positions 1, 2, 1, 2, 3, so no
   position holds more than two of the five and the card cannot be passed
   by always clicking the top option. tools/check-answer-spread.cjs
   measures that; nothing here has been rearranged. */
EAFM.page('u1-s04', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 1', page: 1, section: '4',
          lesson: 'Part 1 · Vocabulary', title: 'Terminology — choose the meaning' },
  objective: 'Choose the right meaning for each finance term',
  prev: 's03-vocab-match', prevLabel: 'Match the words',
  next: 's05-grammar-rule', nextLabel: 'Grammar',
  cards: [
    {
      id: 'c1', covers: ['P1Q1', 'P1Q2', 'P1Q3', 'P1Q4', 'P1Q5'], ref: 'P1Q', bookRef: 'Unit 1 · Part 1 · P1Q1–P1Q5', type: 'quizset',
      title: 'Choose the best answer',
      instruction: 'Now choose from the answers (A–D) below. Each one has exactly one right answer, and every wrong one tells you why it is wrong.',
      visual: [
        { spot: 'ledger', caption: 'the main book of accounts' },
        { spot: 'reconcile', caption: 'two records, checked against each other' }
      ],
      items: [
        {
          q: 'P1Q1. A ‘finance officer’ is a person who manages…',
          evidence: 'the Part 1 meaning (c): "a person who manages money and accounts".',
          options: [
            { t: 'money and accounts', ok: true,
              why: 'Right — both halves. Not only the money itself, but the records of it. That pairing is what separates a finance officer from a cashier.' },
            { t: 'trucks and cars', ok: false,
              why: 'That is logistics. Karim, the driver you meet in Unit 2, works with the cars; Fadi only ever sees the receipt for the fuel.' },
            { t: 'staff and offices', ok: false,
              why: 'That is administration or HR. Fadi records what the staff cost, but he does not manage the staff.' },
            { t: 'food and water', ok: false,
              why: 'That is the programme team — Layth’s side of the organisation. They spend the money; Fadi records it.' }
          ]
        },
        {
          q: 'P1Q2. A ‘ledger’ is…',
          evidence: 'the Part 1 meaning (a): "the main book or file that holds all the accounts".',
          options: [
            { t: 'a type of cash in the office', ok: false,
              why: 'Cash is notes and coins; a ledger is a record. In Reading A Fadi compares the two — "he compares it with the record in his ledger" — so they are precisely not the same thing.' },
            { t: 'the main book of accounts', ok: true,
              why: 'Right. The word carrying the meaning is <b>main</b>: it holds all the accounts together. In Unit 2 you meet the journal, which is the FIRST book; the ledger is where entries end up.' },
            { t: 'a kind of report', ok: false,
              why: 'A report is made FROM the ledger and goes to somebody — a manager, a donor. The ledger itself stays in the finance office.' },
            { t: 'a bank machine', ok: false,
              why: 'Nothing in the unit is a machine. The bank appears only as a balance Fadi compares against his own record.' }
          ]
        },
        {
          q: 'P1Q3. A ‘transaction’ is…',
          evidence: 'the Part 1 meaning (e): "a single piece of financial business, such as a payment".',
          options: [
            { t: 'one piece of financial business', ok: true,
              why: 'Right, and <b>one</b> is the important word. Fadi’s first stage is "he records the transactions" — he records them one at a time, because each is a separate event.' },
            { t: 'a yearly holiday in the office', ok: false,
              why: 'Not financial at all. If an option has nothing to do with money, it is there to be eliminated quickly.' },
            { t: 'a long meeting', ok: false,
              why: 'A meeting may be about transactions, but it is not one. A transaction is money actually moving.' },
            { t: 'a new office', ok: false,
              why: 'Renting a new office would CAUSE several transactions — it is not itself one.' }
          ]
        },
        {
          q: 'P1Q4. To ‘reconcile’ the cash means to…',
          evidence: 'the Part 1 meaning (d): "to check that two records of money agree".',
          options: [
            { t: 'spend all the money in the office', ok: false,
              why: 'The opposite kind of word. Reconciling never moves money; it only compares two records of it.' },
            { t: 'check that two records agree', ok: true,
              why: 'Right — and <b>two</b> is the whole answer. Reading A shows it: "He counts the money in the cash box. Then he compares it with the record in his ledger."' },
            { t: 'hide the money', ok: false,
              why: 'Reconciling exists to make money visible, not to hide it. Case 2 in Part 9 is exactly about refusing to look away from a difference.' },
            { t: 'count the staff', ok: false,
              why: 'Counting is half right, but it is the cash that is counted, and counting alone is not reconciling — the comparison is.' }
          ]
        },
        {
          q: 'P1Q5. The ‘balance’ is the amount of money…',
          evidence: 'the Part 5 meaning (c): "the amount of money in an account at one moment".',
          options: [
            { t: 'that is lost forever', ok: false,
              why: 'Nothing in the unit is lost. A balance is a present fact, not a loss.' },
            { t: 'in another country', ok: false,
              why: 'Where the money is held does not change what a balance means. Amman appears in Reading B, but as an office, not as a place money sits.' },
            { t: 'in an account now', ok: true,
              why: 'Right — and <b>now</b> is the key. A balance is true at one moment and can be different an hour later. That is why Fadi says "I always know the balance" in the present simple: knowing it is his routine.' },
            { t: 'from last year only', ok: false,
              why: 'A balance is current, not historical. A report covers a period; a balance is a single point in time.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: [], ref: 'ref', bookRef: 'Unit 1 · Part 1', type: 'study',
      title: 'The eight words, with their pictures',
      instruction: 'Keep this card. Every one of these words comes back in the readings, the dialogues and the review — and all eight return in Unit 2 with a second layer on top.',
      html:
        '<div class="cols" style="line-height:1.8">' +
        '<div><b>finance officer</b><br>a person who manages money and accounts</div>' +
        '<div><b>ledger</b><br>the main book or file that holds all the accounts</div>' +
        '<div><b>transaction</b><br>a single piece of financial business, such as a payment</div>' +
        '<div><b>account</b><br>a record of the money for one purpose or category</div>' +
        '<div><b>bookkeeping</b><br>the daily work of writing down every transaction</div>' +
        '<div><b>reconcile</b><br>to check that two records of money agree</div>' +
        '<div><b>cash</b><br>money in the form of notes and coins</div>' +
        '<div><b>balance</b><br>the amount of money in an account at one moment</div>' +
        '</div>',
      doneLabel: 'I know these eight words',
      playable: ['finance officer', 'ledger', 'transaction', 'account',
                 'bookkeeping', 'reconcile', 'cash', 'balance']
    }
  ]
});
