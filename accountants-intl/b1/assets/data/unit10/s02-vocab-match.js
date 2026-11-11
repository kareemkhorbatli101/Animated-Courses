/* Unit 10 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Vocabulary · match',
    page: 10,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Reporting Verbs',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 10 · 1A',
      type: 'dragmatch',
      title: 'Reporting Verbs',
      instruction: 'Match the reporting verb to its function. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Function — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. To state something as a requirement or rule.' },
        { id: 'm-b', label: 'b. To explain something in detail or at length.' },
        { id: 'm-c', label: 'c. To state something clearly and forcefully.' },
        { id: 'm-d', label: 'd. To state that something is true after being asked.' },
        { id: 'm-e', label: 'e. To stress the importance of something.' },
        { id: 'm-f', label: 'f. To make a statement easier to understand.' },
        { id: 'm-g', label: 'g. To communicate a piece of information formally.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Asserted',
          accept: 'm-c',
          why: '<b>Asserted</b> — To state something clearly and forcefully. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Confirmed',
          accept: 'm-d',
          why: '<b>Confirmed</b> — To state that something is true after being asked. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Emphasized',
          accept: 'm-e',
          why: '<b>Emphasized</b> — To stress the importance of something. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Elaborated',
          accept: 'm-b',
          why: '<b>Elaborated</b> — To explain something in detail or at length. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Mandated',
          accept: 'm-a',
          why: '<b>Mandated</b> — To state something as a requirement or rule. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Clarified',
          accept: 'm-f',
          why: '<b>Clarified</b> — To make a statement easier to understand. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't7',
          num: 7,
          label: 'Stated',
          accept: 'm-g',
          why: '<b>Stated</b> — To communicate a piece of information formally. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Asserted',
        a: 'To state something clearly and forcefully. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'reporting', caption: 'Asserted — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 10 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Asserted', 'Confirmed', 'Emphasized', 'Elaborated', 'Mandated', 'Clarified', 'Stated'],
      visual: { spot: 'auditor', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
