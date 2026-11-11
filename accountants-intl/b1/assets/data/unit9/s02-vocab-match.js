/* Unit 9 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Vocabulary · match',
    page: 9,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Career Path Terms',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 9 · 1A',
      type: 'dragmatch',
      title: 'Career Path Terms',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The formal recognition of professional skills through examination.' },
        { id: 'm-b', label: 'b. To change from one accounting system to another.' },
        { id: 'm-c', label: 'c. Activities to maintain and improve professional competence (CPE).' },
        { id: 'm-d', label: 'd. A short-term training course or qualification.' },
        { id: 'm-e', label: 'e. Certified Public Accountant, a highly regarded qualification.' },
        {
          id: 'm-f',
          label: 'f. A fundamental skill or area of expertise (e.g., financial reporting).'
        },
        { id: 'm-g', label: 'g. To teach yourself or train in new skills for better performance.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'CPA',
          accept: 'm-e',
          why: '<b>CPA</b> — Certified Public Accountant, a highly regarded qualification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Professional Development',
          accept: 'm-c',
          why: '<b>Professional Development</b> — Activities to maintain and improve professional competence (CPE). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Certificate',
          accept: 'm-d',
          why: '<b>Certificate</b> — A short-term training course or qualification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Software Migration',
          accept: 'm-b',
          why: '<b>Software Migration</b> — To change from one accounting system to another. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Core Competency',
          accept: 'm-f',
          why: '<b>Core Competency</b> — A fundamental skill or area of expertise (e.g., financial reporting). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Up-skill',
          accept: 'm-g',
          why: '<b>Up-skill</b> — To teach yourself or train in new skills for better performance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't7',
          num: 7,
          label: 'Certification',
          accept: 'm-a',
          why: '<b>Certification</b> — The formal recognition of professional skills through examination. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. CPA',
        a: 'Certified Public Accountant, a highly regarded qualification. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'certification', caption: 'CPA — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 9 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: [
        'CPA',
        'Professional Development',
        'Certificate',
        'Software Migration',
        'Core Competency',
        'Up-skill',
        'Certification'
      ],
      visual: { spot: 'migration', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
