/* Unit 5 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Word building',
    page: 5,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Financial Planning',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 5 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Financial Planning',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "We must monitor the cash flow closely before we prepare the payment schedule."</p>',
      playable: [
        {
          t: 'Example: "We must monitor the cash flow closely before we prepare the payment schedule.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
      visual: { spot: 'payment-run', caption: 'Vocabulary · Collocations for Financial Planning' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 5 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Financial Planning',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a debt' },
        { id: 'm-b', label: 'b. the cash flow' },
        { id: 'm-c', label: 'c. the account' },
        { id: 'm-d', label: 'd. credit terms' },
        { id: 'm-e', label: 'e. the payment schedule' },
        { id: 'm-f', label: 'f. a collections call' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Extend',
          accept: 'm-d',
          why: '<b>Extend</b> — credit terms. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Clear',
          accept: 'm-a',
          why: '<b>Clear</b> — a debt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Manage',
          accept: 'm-b',
          why: '<b>Manage</b> — the cash flow. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Monitor',
          accept: 'm-c',
          why: '<b>Monitor</b> — the account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Suspend',
          accept: 'm-e',
          why: '<b>Suspend</b> — the payment schedule. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Prepare',
          accept: 'm-f',
          why: '<b>Prepare</b> — a collections call. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Extend',
        a: 'credit terms. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'forecast', caption: 'Vocabulary · Collocations for Financial Planning', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 5 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Extend', 'Clear', 'Manage', 'Monitor', 'Suspend', 'Prepare'],
      visual: { spot: 'voucher', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 5 · 1E',
      type: 'cloze',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Receive &rarr; <b>Noun</b>: [[1]]</li><li>Settle &rarr; <b>Noun</b>: [[2]]</li><li>Delay &rarr; <b>Related Term</b>: [[3]]</li><li>Arrange &rarr; <b>Related Term</b>: [[4]]</li></ol></div>',
      answers: {
        '1': ['receipt', 'receipt', 'Receipt'],
        '2': ['settlement', 'settlement', 'Settlement'],
        '3': ['Delayed', 'delayed', 'Delayed'],
        '4': ['Arranged', 'arranged', 'Arranged']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"We expect receipt of the funds tomorrow."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The settlement is scheduled for the 15th."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The client requested a delay in payment."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"We need to arrange a meeting with the debtor."&rdquo;'
      ],
      visual: { spot: 'credit', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
