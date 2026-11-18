/* Unit 10 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can take a stay from arrival to farewell in '
  + 'English, which is what this course has been for.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 10 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Over these ten units, you have followed a guest\'s whole journey — '
            + 'from the first booking to the final farewell. This journey is called '
            + 'the guest lifecycle, and understanding it is the foundation of a '
            + 'career in hospitality. Every stage — reservation, arrival, the stay, '
            + 'the meals, the requests, the problems, and the departure — is a link '
            + 'in one chain, and the guest\'s happiness depends on every link being '
            + 'strong. But the lifecycle does not truly end at checkout. A warm '
            + 'farewell plants the seed of the next visit, and a happy guest '
            + 'returns, again and again, becoming a loyal friend of the hotel. '
            + 'Hospitality is a vast and welcoming industry, full of paths: front '
            + 'office, food and beverage, housekeeping, guest relations, events, '
            + 'management, and many more. Wherever your path leads, the heart of the '
            + 'work is always the same — the simple, human art of making another '
            + 'person feel welcome, comfortable and cared for. You began this course '
            + 'as a beginner. You have learned to welcome, to serve, to recommend, '
            + 'to care, to solve problems, and to say a warm goodbye. Like Lina, you '
            + 'have completed the journey — and, also like her, your journey in '
            + 'hospitality is only just beginning. Congratulations, and welcome to '
            + 'the profession.',
          say: 'Over these ten units, you have followed a guest\'s whole journey — '
            + 'from the first booking to the final farewell. This journey is called '
            + 'the guest lifecycle, and understanding it is the foundation of a '
            + 'career in hospitality. Every stage — reservation, arrival, the stay, '
            + 'the meals, the requests, the problems, and the departure — is a link '
            + 'in one chain, and the guest\'s happiness depends on every link being '
            + 'strong. But the lifecycle does not truly end at checkout. A warm '
            + 'farewell plants the seed of the next visit, and a happy guest '
            + 'returns, again and again, becoming a loyal friend of the hotel. '
            + 'Hospitality is a vast and welcoming industry, full of paths: front '
            + 'office, food and beverage, housekeeping, guest relations, events, '
            + 'management, and many more. Wherever your path leads, the heart of the '
            + 'work is always the same — the simple, human art of making another '
            + 'person feel welcome, comfortable and cared for. You began this course '
            + 'as a beginner. You have learned to welcome, to serve, to recommend, '
            + 'to care, to solve problems, and to say a warm goodbye. Like Lina, you '
            + 'have completed the journey — and, also like her, your journey in '
            + 'hospitality is only just beginning. Congratulations, and welcome to '
            + 'the profession.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'What is the \'guest lifecycle\'?',
            model: 'The guest\'s whole journey, from the first booking to the final farewell.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why does the lifecycle not truly end at checkout?',
            model: 'Because a warm farewell brings the guest back — a happy guest returns.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is \'the heart of the work\' in every hospitality job?',
            model: 'Making another person feel welcome, comfortable and cared for.',
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
      bookRef: 'Unit 10 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Together, name all ten stages of the guest\'s journey you have '
              + 'studied in this course, from the first welcome to the final farewell. '
              + 'For each one, say one English phrase you have learned. Then tell your '
              + 'partner which stage you would most like to work in, and why.',
            say: 'Together, name all ten stages of the guest\'s journey you have '
              + 'studied in this course, from the first welcome to the final farewell. '
              + 'For each one, say one English phrase you have learned. Then tell your '
              + 'partner which stage you would most like to work in, and why.',
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
      bookRef: 'Unit 10 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write 40–60 words about your future in hospitality: which job you '
              + 'would like, and why. Report one thing you have learned in this '
              + 'course, using reported speech (“I learned that…”).',
            say: 'Write 40–60 words about your future in hospitality: which job you '
              + 'would like, and why. Report one thing you have learned in this '
              + 'course, using reported speech (“I learned that…”).',
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
