/* Unit 3 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Word building',
    page: 3,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Requests and Offers',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 3 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Requests and Offers',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "The supplier offered a small discount if we extended the payment deadline."</p>',
      playable: [
        {
          t: '"The supplier offered a small discount if we extended the payment deadline.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'credit-note', caption: 'Vocabulary · Collocations for Requests and Offers' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 3 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Requests and Offers',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a payment deadline' },
        { id: 'm-b', label: 'b. an original receipt' },
        { id: 'm-c', label: 'c. authorization' },
        { id: 'm-d', label: 'd. a reimbursement' },
        { id: 'm-e', label: 'e. a small discount' },
        { id: 'm-f', label: 'f. the final balance' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Grant',
          accept: 'm-c',
          why: '<b>Grant</b> — authorization. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Offer',
          accept: 'm-e',
          why: '<b>Offer</b> — a small discount. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Request',
          accept: 'm-b',
          why: '<b>Request</b> — an original receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Extend',
          accept: 'm-a',
          why: '<b>Extend</b> — a payment deadline. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Verify',
          accept: 'm-f',
          why: '<b>Verify</b> — the final balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Process',
          accept: 'm-d',
          why: '<b>Process</b> — a reimbursement. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Grant',
        a: 'authorization. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: {
        spot: 'petty-voucher',
        caption: 'Vocabulary · Collocations for Requests and Offers',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 3 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Grant', 'Offer', 'Request', 'Extend', 'Verify', 'Process'],
      visual: { spot: 'posting', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 3 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Related Term</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Authorize</td><td>Authorization</td><td>Authority</td><td>"We need official authorization before payment."</td></tr><tr><td>Reimburse</td><td>_________</td><td>Reimbursable</td><td>"The reimbursement will be processed next Friday."</td></tr><tr><td>Approve</td><td>_________</td><td>Approved</td><td>"The Financial Controller\'s approval is required for the claim."</td></tr><tr><td>Supply</td><td>Supplier</td><td>_________</td><td>"The supply of stationery is running low."</td></tr><tr><td>Replenish</td><td>_________</td><td>Replenished</td><td>"The fund replenishment happens every Monday."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'payment-run', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
