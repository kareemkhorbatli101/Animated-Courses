/* Unit 6 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short recommendation for a guest '
  + 'to take with them.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 6 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, thank you for your question. For one day, I recommend '
            + 'the Old City of Damascus. It is the most beautiful part of the city '
            + 'and the closest to the hotel — about ten minutes by taxi. You can '
            + 'visit the Umayyad Mosque, walk through the old souq, and enjoy lunch '
            + 'there. The best time to go is the morning, when it is quieter. Enjoy '
            + 'your day! Kind regards, Rana — Concierge.',
          say: 'Dear Mr. Sayed, thank you for your question. For one day, I recommend '
            + 'the Old City of Damascus. It is the most beautiful part of the city '
            + 'and the closest to the hotel — about ten minutes by taxi. You can '
            + 'visit the Umayyad Mosque, walk through the old souq, and enjoy lunch '
            + 'there. The best time to go is the morning, when it is quieter. Enjoy '
            + 'your day! Kind regards, Rana — Concierge.',
          role: 'course'
        },
        {
          h: 'The Umayyad Mosque is one of the oldest and most beautiful mosques in '
            + 'the world. It stands in the heart of the Old City, and its huge '
            + 'courtyard is calm and cool, even on a hot day. It is a must-see for '
            + 'every visitor to Damascus.',
          say: 'The Umayyad Mosque is one of the oldest and most beautiful mosques in '
            + 'the world. It stands in the heart of the Old City, and its huge '
            + 'courtyard is calm and cool, even on a hot day. It is a must-see for '
            + 'every visitor to Damascus.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What place does Rana recommend?',
            model: 'The Old City of Damascus.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How far is it, and how do you get there?',
            model: 'About ten minutes by taxi.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When is the best time to go?',
            model: 'The morning, when it is quieter.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 6 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) the place you recommend 2) why (use a superlative) 3) '
              + 'practical info — how far / how to get there 4) the best time to go',
            say: 'Plan: 1) the place you recommend 2) why (use a superlative) 3) '
              + 'practical info — how far / how to get there 4) the best time to go',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Recommend a place in your city or country to a guest '
  + '(40–60 words). Use one comparative and one superlative.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
