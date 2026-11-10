/* Unit 5 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Listening 2',
    page: 5,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: Chasing a Debtor (Operating Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 5 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: Chasing a Debtor (Operating Context)',
      instruction: 'True or False:',
      playable: [
        {
          t: 'Good morning, I am calling about your outstanding invoice 456. It is 60 days past due. When are you going to clear the account?',
          role: 'spk:Collector',
          who: 'Collector',
          _key: 'collector'
        },
        {
          t: 'I am sorry, we had a delay in our cash flow. I will send the full settlement next week, I promise.',
          role: 'spk:Client',
          who: 'Client',
          _key: 'client'
        },
        {
          t: 'Next week is acceptable. I will note that on your account. I am scheduling a follow-up call for Tuesday morning to confirm the receipt of the funds.',
          role: 'spk:Collector',
          who: 'Collector',
          _key: 'collector'
        }
      ],
      scene: 'u5-listening-2-c1',
      passage: '<p><b>Context.</b> A collections call to a client whose account is past due.</p><div class="script"><p>Collector: "Good morning, I am calling about your outstanding invoice 456. It is 60 days past due. When are you going to clear the account?"</p><p>Client: "I am sorry, we had a delay in our cash flow. I will send the full settlement next week, I promise."</p><p>Collector: "Next week is acceptable. I will note that on your account. I am scheduling a follow-up call for Tuesday morning to confirm the receipt of the funds."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'receipt', caption: 'Listening · Passage 2: Chasing a Debtor (Operating Context)' }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
