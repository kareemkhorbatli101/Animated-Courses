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
      brief: 'A second conversation, and this time the statements below are true or false. Decide from what is said, not from what would usually be true in an accounts office.',
      scene: 'u1-listening-2-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A Junior Accountant answers a call from a supplier regarding a payment.',
            speak: false
          },
          {
            h: 'Accountant: Hello, Accounts Department, Northwind Group. This is Tomás speaking.',
            say: 'Hello, Accounts Department, Northwind Group. This is Tomás speaking.',
            role: 'spk:Accountant',
            who: 'Accountant'
          },
          {
            h: 'Supplier: Hi Tomás. This is Andina Office Supplies in Santiago. We are checking on Invoice #402. It is overdue.',
            say: 'Hi Tomás. This is Andina Office Supplies in Santiago. We are checking on Invoice #402. It is overdue.',
            role: 'spk:Supplier',
            who: 'Supplier'
          },
          {
            h: 'Accountant: Let me check the system. One moment... I am looking at your account now.',
            say: 'Let me check the system. One moment... I am looking at your account now.',
            role: 'spk:Accountant',
            who: 'Accountant'
          },
          {
            h: 'Supplier: Does it show as paid?',
            say: 'Does it show as paid?',
            role: 'spk:Supplier',
            who: 'Supplier'
          },
          {
            h: 'Accountant: No, it shows as "Pending." Usually, we pay invoices within 30 days. But this month, we are moving the payment run to Kraków, so there is a small delay.',
            say: 'No, it shows as "Pending." Usually, we pay invoices within 30 days. But this month, we are moving the payment run to Kraków, so there is a small delay.',
            role: 'spk:Accountant',
            who: 'Accountant'
          },
          {
            h: 'Supplier: I see. When can we expect payment?',
            say: 'I see. When can we expect payment?',
            role: 'spk:Supplier',
            who: 'Supplier'
          },
          {
            h: 'Accountant: The payment run happens tomorrow. I am adding your invoice to the list right now.',
            say: 'The payment run happens tomorrow. I am adding your invoice to the list right now.',
            role: 'spk:Accountant',
            who: 'Accountant'
          },
          {
            h: 'Supplier: Thank you, Tomás.',
            say: 'Thank you, Tomás.',
            role: 'spk:Supplier',
            who: 'Supplier'
          }
        ],
        style: 'script',
        say: { scene: 'u1-listening-2-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'invoice', caption: 'Listening · Passage 2: The Vendor Call (Phone Routine)' }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
