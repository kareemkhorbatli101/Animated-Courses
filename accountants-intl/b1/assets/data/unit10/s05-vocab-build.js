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
          t: '"I have to present the quarterly figures to the department head, and then I conduct an analysis of the variance.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
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
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Report</td><td>Report</td><td>"The annual report was published on time."</td></tr><tr><td>Summarize</td><td>_________</td><td>"A brief summary of the findings is attached."</td></tr><tr><td>Present</td><td>_________</td><td>"The presentation of the budget was well-received."</td></tr><tr><td>Advise</td><td>_________</td><td>"The advice from the external auditor was helpful."</td></tr><tr><td>Convey</td><td>_________</td><td>"The conveyance of this information was critical."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
