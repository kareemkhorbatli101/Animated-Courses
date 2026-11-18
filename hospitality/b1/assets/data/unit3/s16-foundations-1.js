/* Unit 3 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can handle a booking with more than one '
  + 'room or more than one request.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 3 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'The reservation is the first real step of the guest cycle. Before a '
            + 'guest ever walks through the door, the booking has already begun '
            + 'their experience of the hotel. A clear, polite, correct booking '
            + 'builds trust: the guest feels sure that the hotel is professional and '
            + 'that their stay is safe. A booking with mistakes does the opposite. '
            + 'This is why hotels train their teams so carefully in taking '
            + 'reservations, and why every booking is checked and confirmed. The '
            + 'reservation also gives the hotel important information — how many '
            + 'rooms are needed, when, and for whom — so the whole team can prepare. '
            + 'When you take a booking well, you are not only filling a room; you '
            + 'are making the first promise of a warm welcome. This skill, and the '
            + 'polite language of requests and offers, comes back in every unit and '
            + 'in every hospitality qualification.',
          say: 'The reservation is the first real step of the guest cycle. Before a '
            + 'guest ever walks through the door, the booking has already begun '
            + 'their experience of the hotel. A clear, polite, correct booking '
            + 'builds trust: the guest feels sure that the hotel is professional and '
            + 'that their stay is safe. A booking with mistakes does the opposite. '
            + 'This is why hotels train their teams so carefully in taking '
            + 'reservations, and why every booking is checked and confirmed. The '
            + 'reservation also gives the hotel important information — how many '
            + 'rooms are needed, when, and for whom — so the whole team can prepare. '
            + 'When you take a booking well, you are not only filling a room; you '
            + 'are making the first promise of a warm welcome. This skill, and the '
            + 'polite language of requests and offers, comes back in every unit and '
            + 'in every hospitality qualification.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 3 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'Why is the reservation called the first step of the guest cycle?',
            model: 'Because it begins the guest\'s experience before they arrive.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does a clear, correct booking build trust?',
            model: 'The guest feels the hotel is professional and their stay is safe.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What information does a booking give the hotel team?',
            model: 'How many rooms are needed, when, and for whom.',
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
      bookRef: 'Unit 3 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'One of you is a guest with a special request (a quiet room, an early '
              + 'check-in, a cot). The other takes the booking politely, and either '
              + 'says \'yes\' or gives a kind \'no\' with an offer. Then change roles.',
            say: 'One of you is a guest with a special request (a quiet room, an early '
              + 'check-in, a cot). The other takes the booking politely, and either '
              + 'says \'yes\' or gives a kind \'no\' with an offer. Then change roles.',
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
      bookRef: 'Unit 3 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write a short booking confirmation (40–60 words) for a family room '
              + 'for three nights. Use polite language and confirm the details.',
            say: 'Write a short booking confirmation (40–60 words) for a family room '
              + 'for three nights. Use polite language and confirm the details.',
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
