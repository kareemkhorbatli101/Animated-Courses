/* Unit 10 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Word building',
    page: 10,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Reporting',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 10 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common reporting phrases.',
      html: '<p>Example: "I have to present the quarterly figures to the department head, and then I conduct an analysis of the variance."</p>',
      playable: [
        {
          t: 'Example: "I have to present the quarterly figures to the department head, and then I conduct an analysis of the variance.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
      visual: { spot: 'variance', caption: 'Vocabulary · Collocations for Reporting' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 10 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common reporting phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. an analysis' },
        { id: 'm-b', label: 'b. a directive' },
        { id: 'm-c', label: 'c. a recommendation' },
        { id: 'm-d', label: 'd. the key message' },
        { id: 'm-e', label: 'e. the quarterly figures' },
        { id: 'm-f', label: 'f. the report' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Convey',
          accept: 'm-d',
          why: '<b>Convey</b> — the key message. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Present',
          accept: 'm-e',
          why: '<b>Present</b> — the quarterly figures. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Submit',
          accept: 'm-f',
          why: '<b>Submit</b> — the report. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Issue',
          accept: 'm-b',
          why: '<b>Issue</b> — a directive. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Conduct',
          accept: 'm-a',
          why: '<b>Conduct</b> — an analysis. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Offer',
          accept: 'm-c',
          why: '<b>Offer</b> — a recommendation. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Convey',
        a: 'the key message. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'reporting', caption: 'Vocabulary · Collocations for Reporting', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 10 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Convey', 'Present', 'Submit', 'Issue', 'Conduct', 'Offer'],
      visual: { spot: 'migration', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 10 · 1E',
      type: 'cloze',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Summarize &rarr; <b>Noun</b>: [[1]]</li><li>Present &rarr; <b>Noun</b>: [[2]]</li><li>Advise &rarr; <b>Noun</b>: [[3]]</li><li>Convey &rarr; <b>Noun</b>: [[4]]</li></ol></div>',
      answers: {
        '1': ['summary', 'summary', 'Summary'],
        '2': ['presentation', 'presentation', 'Presentation'],
        '3': ['advice', 'advice', 'Advice'],
        '4': ['conveyance', 'conveyance', 'Conveyance']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"A brief summary of the findings is attached."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The presentation of the budget was well-received."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The advice from the external auditor was helpful."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The conveyance of this information was critical."&rdquo;'
      ],
      visual: { spot: 'voucher', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
