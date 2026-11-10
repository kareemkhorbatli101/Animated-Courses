/* Unit 1 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Listening 2',
    page: 1,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: The Vendor Call (Phone Routine)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 1 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: The Vendor Call (Phone Routine)',
      instruction: 'True or False:',
      playable: [
        {
          t: 'Hello, Accounts Department, Northwind Group. This is Tomás speaking.',
          role: 'spk:Accountant',
          who: 'Accountant',
          _key: 'accountant'
        },
        {
          t: 'Hi Tomás. This is Andina Office Supplies in Santiago. We are checking on Invoice #402. It is overdue.',
          role: 'spk:Supplier',
          who: 'Supplier',
          _key: 'supplier'
        },
        {
          t: 'Let me check the system. One moment... I am looking at your account now.',
          role: 'spk:Accountant',
          who: 'Accountant',
          _key: 'accountant'
        },
        { t: 'Does it show as paid?', role: 'spk:Supplier', who: 'Supplier', _key: 'supplier' },
        {
          t: 'No, it shows as "Pending." Usually, we pay invoices within 30 days. But this month, we are moving the payment run to Kraków, so there is a small delay.',
          role: 'spk:Accountant',
          who: 'Accountant',
          _key: 'accountant'
        },
        {
          t: 'I see. When can we expect payment?',
          role: 'spk:Supplier',
          who: 'Supplier',
          _key: 'supplier'
        },
        {
          t: 'The payment run happens tomorrow. I am adding your invoice to the list right now.',
          role: 'spk:Accountant',
          who: 'Accountant',
          _key: 'accountant'
        }
      ],
      scene: 'u1-listening-2-c1',
      passage: '<p><b>Context.</b> A Junior Accountant answers a call from a supplier regarding a payment.</p><div class="script"><p>Accountant: Hello, Accounts Department, Northwind Group. This is Tomás speaking.</p><p>Supplier: Hi Tomás. This is Andina Office Supplies in Santiago. We are checking on Invoice #402. It is overdue.</p><p>Accountant: Let me check the system. One moment... I am looking at your account now.</p><p>Supplier: Does it show as paid?</p><p>Accountant: No, it shows as "Pending." Usually, we pay invoices within 30 days. But this month, we are moving the payment run to Kraków, so there is a small delay.</p><p>Supplier: I see. When can we expect payment?</p><p>Accountant: The payment run happens tomorrow. I am adding your invoice to the list right now.</p><p>Supplier: Thank you, Tomás.</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'invoice', caption: 'Listening · Passage 2: The Vendor Call (Phone Routine)' }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
