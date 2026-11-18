/* Unit 4 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can check in a group, or a guest whose '
  + 'booking does not match what is on the screen.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 4 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'In hospitality, people call the check-in a “moment of truth.” A '
            + 'moment of truth is any point where the guest forms a strong opinion '
            + 'about the hotel. The check-in is one of the most important, because '
            + 'it is the guest\'s first experience inside the building. In just a '
            + 'few minutes, the guest decides whether the hotel is warm or cold, '
            + 'organised or messy, caring or careless. A great check-in cannot save '
            + 'a bad hotel, but a poor check-in can spoil a great one. This is why '
            + 'hotels train their front-desk teams so carefully, and why the '
            + 'language of welcome, registration and arrangements matters so much. '
            + 'When you check a guest in well — warmly, quickly and clearly — you '
            + 'are protecting the hotel\'s most valuable thing: the guest\'s trust. '
            + 'This idea of \'moments of truth\' returns throughout the course and '
            + 'in every hospitality qualification.',
          say: 'In hospitality, people call the check-in a “moment of truth.” A '
            + 'moment of truth is any point where the guest forms a strong opinion '
            + 'about the hotel. The check-in is one of the most important, because '
            + 'it is the guest\'s first experience inside the building. In just a '
            + 'few minutes, the guest decides whether the hotel is warm or cold, '
            + 'organised or messy, caring or careless. A great check-in cannot save '
            + 'a bad hotel, but a poor check-in can spoil a great one. This is why '
            + 'hotels train their front-desk teams so carefully, and why the '
            + 'language of welcome, registration and arrangements matters so much. '
            + 'When you check a guest in well — warmly, quickly and clearly — you '
            + 'are protecting the hotel\'s most valuable thing: the guest\'s trust. '
            + 'This idea of \'moments of truth\' returns throughout the course and '
            + 'in every hospitality qualification.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'What is a \'moment of truth\'?',
            model: 'A point where the guest forms a strong opinion about the hotel.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is check-in one of the most important moments of truth?',
            model: 'Because it is the guest\'s first experience inside the building.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest decide about the hotel during check-in?',
            model: 'Whether the hotel is warm or cold, organised or messy, caring or careless.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'One of you is a tired guest arriving after a long journey. The other '
              + 'checks them in — warmly, quickly and clearly, in five steps. Then '
              + 'talk: what made the check-in feel caring?',
            say: 'One of you is a tired guest arriving after a long journey. The other '
              + 'checks them in — warmly, quickly and clearly, in five steps. Then '
              + 'talk: what made the check-in feel caring?',
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
      bookRef: 'Unit 4 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write 40–60 words describing the perfect check-in for a tired guest. '
              + 'Use present continuous or going to at least once.',
            say: 'Write 40–60 words describing the perfect check-in for a tired guest. '
              + 'Use present continuous or going to at least once.',
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
