/* Unit 9 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can handle a complaint that arrives in '
  + 'writing, and answer it.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 9 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A complaint is one of the most valuable things a guest can give a '
            + 'hotel — though it rarely feels that way at the time. Most unhappy '
            + 'guests never complain at all; they simply leave and never return, and '
            + 'they tell their friends why. So the guest who does complain is doing '
            + 'the hotel a great service: they are pointing out a problem that many '
            + 'silent guests may share, and they are giving the hotel a chance to '
            + 'fix it. This is why \'service recovery\' — the skill of putting '
            + 'things right after a problem — is one of the most studied and valued '
            + 'skills in hospitality. Done well, it not only saves one guest; it '
            + 'protects the reputation of the whole hotel, and it can create a loyal '
            + 'customer for life. The language of apologising, offering solutions, '
            + 'and giving advice — the first conditional and should of this unit — '
            + 'is the language of service recovery, and it lies at the heart of '
            + 'every hospitality qualification. Master it, and you will be able to '
            + 'handle the hardest moments of the job with calm, skill and grace.',
          say: 'A complaint is one of the most valuable things a guest can give a '
            + 'hotel — though it rarely feels that way at the time. Most unhappy '
            + 'guests never complain at all; they simply leave and never return, and '
            + 'they tell their friends why. So the guest who does complain is doing '
            + 'the hotel a great service: they are pointing out a problem that many '
            + 'silent guests may share, and they are giving the hotel a chance to '
            + 'fix it. This is why \'service recovery\' — the skill of putting '
            + 'things right after a problem — is one of the most studied and valued '
            + 'skills in hospitality. Done well, it not only saves one guest; it '
            + 'protects the reputation of the whole hotel, and it can create a loyal '
            + 'customer for life. The language of apologising, offering solutions, '
            + 'and giving advice — the first conditional and should of this unit — '
            + 'is the language of service recovery, and it lies at the heart of '
            + 'every hospitality qualification. Master it, and you will be able to '
            + 'handle the hardest moments of the job with calm, skill and grace.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'Why is a complaint \'valuable\' to a hotel?',
            model: 'Because it points out a problem many silent guests may share and '
              + 'gives the hotel a chance to fix it.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What do most unhappy guests do instead of complaining?',
            model: 'They leave and never return (and tell their friends why).',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can excellent service recovery create?',
            model: 'A loyal customer for life / it protects the whole hotel\'s reputation.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 9 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'One of you is an upset guest with a real problem; the other handles '
              + 'it using all four steps — listen, apologise, solve (with the first '
              + 'conditional), and follow up. Then change roles and discuss what '
              + 'worked.',
            say: 'One of you is an upset guest with a real problem; the other handles '
              + 'it using all four steps — listen, apologise, solve (with the first '
              + 'conditional), and follow up. Then change roles and discuss what '
              + 'worked.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Apply it',
      instruction: 'Apply it. Do this task with a partner.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 9 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write 40–60 words about a time you complained about a service, or '
              + 'received a complaint. Was it handled well? Use should or the first '
              + 'conditional at least once.',
            say: 'Write 40–60 words about a time you complained about a service, or '
              + 'received a complaint. Was it handled well? Use should or the first '
              + 'conditional at least once.',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Micro-writing (optional)',
      instruction: 'Micro-writing (optional).',
      minWords: 30,
      paras: [{
          label: 'Your answer',
          purpose: 'Write a few sentences.'
        }]
    }
  ]
});
