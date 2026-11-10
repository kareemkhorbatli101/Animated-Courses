/* Unit 9 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Word building',
    page: 9,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Professional Skills',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 9 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Professional Skills',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "I have gained experience in public accounting, and now I want to lead a team."</p>',
      playable: [
        {
          t: '"I have gained experience in public accounting, and now I want to lead a team.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'certification', caption: 'Vocabulary · Collocations for Professional Skills' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 9 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Professional Skills',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a team' },
        { id: 'm-b', label: 'b. a process' },
        { id: 'm-c', label: 'c. experience' },
        { id: 'm-d', label: 'd. a certification' },
        { id: 'm-e', label: 'e. the deadlines' },
        { id: 'm-f', label: 'f. a software package' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Gain',
          accept: 'm-c',
          why: '<b>Gain</b> — experience. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Lead',
          accept: 'm-a',
          why: '<b>Lead</b> — a team. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Complete',
          accept: 'm-d',
          why: '<b>Complete</b> — a certification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Master',
          accept: 'm-f',
          why: '<b>Master</b> — a software package. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Streamline',
          accept: 'm-b',
          why: '<b>Streamline</b> — a process. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Meet',
          accept: 'm-e',
          why: '<b>Meet</b> — the deadlines. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Gain',
        a: 'experience. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: {
        spot: 'statement',
        caption: 'Vocabulary · Collocations for Professional Skills',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 9 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Gain', 'Lead', 'Complete', 'Master', 'Streamline', 'Meet'],
      visual: { spot: 'journal', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 9 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Achieve</td><td>Achievement</td><td>"The achievement of the budget was recognized."</td></tr><tr><td>Migrate</td><td>_________</td><td>"The data migration was completed over the weekend."</td></tr><tr><td>Certify</td><td>_________</td><td>"The certification is valid for three years."</td></tr><tr><td>Develop</td><td>_________</td><td>"Professional development is mandatory for all staff."</td></tr><tr><td>Qualify</td><td>_________</td><td>"My qualification is in forensic accounting."</td></tr></tbody></table>',
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
