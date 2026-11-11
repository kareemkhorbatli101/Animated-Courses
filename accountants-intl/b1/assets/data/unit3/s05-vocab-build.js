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
          t: 'Example: "The supplier offered a small discount if we extended the payment deadline.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
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
      type: 'cloze',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Reimburse &rarr; <b>Noun</b>: [[1]]</li><li>Approve &rarr; <b>Noun</b>: [[2]]</li><li>Supply &rarr; <b>Related Term</b>: [[3]]</li><li>Replenish &rarr; <b>Noun</b>: [[4]]</li></ol></div>',
      answers: {
        '1': ['reimbursement', 'reimbursement', 'Reimbursement'],
        '2': ['approval', 'approval', 'Approval'],
        '3': ['Supplies', 'supplies', 'Supplies'],
        '4': ['replenishment', 'replenishment', 'Replenishment']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"The reimbursement will be processed next Friday."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The Financial Controller\'s approval is required for the claim."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The supply of stationery is running low."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The fund replenishment happens every Monday."&rdquo;'
      ],
      visual: { spot: 'trial-balance', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
