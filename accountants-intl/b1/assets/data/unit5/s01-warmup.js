/* Unit 5 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Warm-up',
    page: 5,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'The Difference Between AP and AR',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 5 · 0A',
      type: 'study',
      source: 'book',
      title: 'The Difference Between AP and AR',
      instruction: 'Discuss in small groups:',
      html: '<p><b>Context.</b> Accounts Payable (AP) and Accounts Receivable (AR) are the lifeblood of a company\'s cash flow. AP is money the company owes (liabilities), and AR is money owed to the company (assets).</p>',
      playable: [],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'balance', caption: 'Warm-Up · The Difference Between AP and AR' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 5 · 0B',
      type: 'study',
      source: 'book',
      title: 'Financial Obligations',
      instruction: 'Read the situations below. Decide if the situation is related to Accounts Payable (AP) or Accounts Receivable (AR).',
      html: '<table class="bt"><thead><tr><th>Situation</th><th>Type (AP or AR)</th></tr></thead><tbody><tr><td>1. The company is preparing to pay a supplier\'s invoice.</td><td></td></tr><tr><td>2. The client has a payment 60 days past due.</td><td></td></tr><tr><td>3. The Finance Director is forecasting income for the next quarter.</td><td></td></tr><tr><td>4. The company is making the weekly utility payment.</td><td></td></tr><tr><td>5. Issuing a credit note to a customer.</td><td></td></tr><tr><td>6. A vendor is asking when they will receive their money.</td><td></td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Warm-Up · Financial Obligations', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 5 · 0C',
      type: 'discuss',
      title: 'Planning Ahead (Future Forms)',
      instruction: 'Think-Pair-Share: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Think: Write down one professional arrangement you have for next week (use the Present Continuous: I am meeting...).'
        },
        {
          q: 'Pair: Write down one financial prediction for the coming month (use will: Inflation will increase...).'
        },
        {
          q: 'Share: Discuss with a partner one financial action your team is going to take this week (use going to: We are going to reconcile the ledger...).'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'payment-run',
        caption: 'Scheduling payments, chasing debts, managing collections, and cash flow planning across currencies.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Think-Pair-Share:',
          'Think: Write down one professional arrangement you have for next week (use the Present Continuous: I am meeting...).',
          'Pair: Write down one financial prediction for the coming month (use will: Inflation will increase...).',
          'Share: Discuss with a partner one financial action your team is going to take this week (use going to: We are going to reconcile the ledger...).'
        ]
      },
      model: 'I am meeting the collections agent on Wednesday — that is a fixed arrangement. I am going to review the top ten debtors before it, and I think the largest one will settle this month.'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
