/* Unit 6 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can recommend without pressing, and offer a '
  + 'second choice when the first does not suit.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 6 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'The secret of a great recommendation is simple: match the place to '
            + 'the guest. Before you recommend, ask a few kind questions. How much '
            + 'time do they have? Do they like history, nature, shopping, or rest? '
            + 'Are they travelling with children? A family with small children will '
            + 'be happier in a garden or a lively souq than in a long, quiet museum. '
            + 'A history-lover will treasure a trip to Palmyra, even if it is far. A '
            + 'tired traveller may prefer a slow day by the sea. Always give '
            + 'practical information too — the distance, the cost, how to get there, '
            + 'and whether it is safe and open. When you match the place to the '
            + 'person, every recommendation feels like a gift.',
          say: 'The secret of a great recommendation is simple: match the place to '
            + 'the guest. Before you recommend, ask a few kind questions. How much '
            + 'time do they have? Do they like history, nature, shopping, or rest? '
            + 'Are they travelling with children? A family with small children will '
            + 'be happier in a garden or a lively souq than in a long, quiet museum. '
            + 'A history-lover will treasure a trip to Palmyra, even if it is far. A '
            + 'tired traveller may prefer a slow day by the sea. Always give '
            + 'practical information too — the distance, the cost, how to get there, '
            + 'and whether it is safe and open. When you match the place to the '
            + 'person, every recommendation feels like a gift.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What is the secret of a great recommendation?',
            model: 'Match the place to the guest.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What questions should you ask before you recommend?',
            model: 'How much time they have; what they like; if they have children.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where will a family with small children be happier?',
            model: 'In a garden or a lively souq.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What practical information should you always give?',
            model: 'The distance, the cost, how to get there, whether it is safe and open.',
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
      bookRef: 'Unit 6 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest asks for advice. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: We\'re travelling with two young [[1]]. Where should we go?'
        + '<br>'
        + '2. Rana: For children, the garden and the souq are more [[2]] than a '
            + 'long museum.'
        + '<br>'
        + '3. Rana: It\'s also [[3]] to the hotel, so it\'s easy for a short trip.'
        + '</div>',
      answers: {
        '1': ['children'],
        '2': ['fun'],
        '3': ['closer / close']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>children</b>',
        '2': '<b>fun</b>',
        '3': '<b>closer / close</b>'
      }
    }
  ]
});
