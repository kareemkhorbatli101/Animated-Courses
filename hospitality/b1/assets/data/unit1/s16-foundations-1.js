/* Unit 1 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can take one step beyond the unit: use a '
  + 'longer introduction and a fuller description of your role.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 1 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A hotel is a team of departments that work together. The Front Office '
            + '(reception and reservations) is the first and last contact with the '
            + 'guest. Housekeeping keeps the rooms clean and ready. Food &amp; '
            + 'Beverage runs the restaurant and café. Guest Relations and the '
            + 'concierge help guests enjoy the city and solve problems. Every guest '
            + 'moves through a \'guest cycle\': first the reservation, then the '
            + 'arrival and check-in, then the stay, and finally the checkout and '
            + 'farewell. At every step, good English and a warm welcome make the '
            + 'guest happy. This idea — teamwork across departments, and care at '
            + 'every step of the guest cycle — comes back again and again in this '
            + 'course, and in every hospitality certificate and diploma.',
          say: 'A hotel is a team of departments that work together. The Front Office '
            + '(reception and reservations) is the first and last contact with the '
            + 'guest. Housekeeping keeps the rooms clean and ready. Food & Beverage '
            + 'runs the restaurant and café. Guest Relations and the concierge help '
            + 'guests enjoy the city and solve problems. Every guest moves through a '
            + '\'guest cycle\': first the reservation, then the arrival and '
            + 'check-in, then the stay, and finally the checkout and farewell. At '
            + 'every step, good English and a warm welcome make the guest happy. '
            + 'This idea — teamwork across departments, and care at every step of '
            + 'the guest cycle — comes back again and again in this course, and in '
            + 'every hospitality certificate and diploma.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 1 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'Name the four main departments of a hotel.',
            model: 'Front Office, Housekeeping, Food & Beverage, Guest Relations.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What are the four steps of the guest cycle?',
            model: 'Reservation, arrival/check-in, the stay, checkout/farewell.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which department is the first and last contact with the guest?',
            model: 'The Front Office.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 1 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Think about a hotel or café you know. Which departments does it have? '
              + 'Which workers meet the guests? Tell your partner in three sentences.',
            say: 'Think about a hotel or café you know. Which departments does it have? '
              + 'Which workers meet the guests? Tell your partner in three sentences.',
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
      bookRef: 'Unit 1 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write 40–60 words about your dream job in hospitality. Use the '
              + 'present simple. Say the job, the place, and two things you do every '
              + 'day.',
            say: 'Write 40–60 words about your dream job in hospitality. Use the '
              + 'present simple. Say the job, the place, and two things you do every '
              + 'day.',
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
