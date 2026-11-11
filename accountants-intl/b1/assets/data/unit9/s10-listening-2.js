/* Unit 9 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Listening 2',
    page: 9,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: Career Path (Operating Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 9 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: Career Path (Operating Context)',
      instruction: 'Read this before you go on.',
      playable: [
        { t: '"Tell me about your professional journey.', role: 'narrator', _key: 'narr' },
        { t: 'Where have you worked since graduating?', role: 'narrator', _key: 'narr' },
        {
          t: 'I see you have worked at three different companies in five years, in two countries.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Have you focused on any specific industry?', role: 'narrator', _key: 'narr' },
        {
          t: 'Also, have you completed your CPA certification or is that something you are still planning to do?',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'A second conversation, and this time the statements below are true or false. Decide from what is said, not from what would usually be true in an accounts office.',
      scene: 'u9-listening-2-c1',
      passage: {
        paras: [
          { h: '<b>Context.</b> A recruiter is interviewing a candidate.', speak: false },
          {
            h: '"Tell me about your professional journey. Where have you worked since graduating? I see you have worked at three different companies in five years, in two countries. Have you focused on any specific industry? Also, have you completed your CPA certification or is that something you are still planning to do?"',
            say: 'Tell me about your professional journey. Where have you worked since graduating? I see you have worked at three different companies in five years, in two countries. Have you focused on any specific industry? Also, have you completed your CPA certification or is that something you are still planning to do?'
          }
        ],
        say: { scene: 'u9-listening-2-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'certification', caption: 'Listening · Passage 2: Career Path (Operating Context)' }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
