/* Unit 6 §16 — Foundations for Further Study.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s16', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Foundations for Further Study', part: '11',
          section: '16', lesson: 'Foundations for Further Study', title: 'Foundations for Further Study' },
  objective: 'By the end of Part 11 you can build a short itinerary for a guest '
  + 'with one free day.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 6 · P11',
      type: 'study',
      title: 'Foundations for further study',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Foundations for further study',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Great hospitality does not stop at the hotel door. A guest\'s '
            + 'experience of a city — and of a whole country — is often shaped by '
            + 'the advice they receive at the concierge desk. This is why local '
            + 'knowledge is one of the most valuable skills in the industry. A '
            + 'concierge who knows the city well, who compares options honestly, and '
            + 'who matches each recommendation to the guest, becomes a trusted '
            + 'friend and guide. Guests remember the hotel that helped them discover '
            + 'the best café, the most beautiful view, or the quiet corner that was '
            + 'not in any guidebook. In this way, the concierge extends the welcome '
            + 'of the hotel out into the streets, the markets and the landmarks of '
            + 'the city. The language of recommending, comparing and describing '
            + 'places — the language of this unit — is central to that role, and to '
            + 'every hospitality qualification. It turns a place to sleep into a '
            + 'doorway to a country.',
          say: 'Great hospitality does not stop at the hotel door. A guest\'s '
            + 'experience of a city — and of a whole country — is often shaped by '
            + 'the advice they receive at the concierge desk. This is why local '
            + 'knowledge is one of the most valuable skills in the industry. A '
            + 'concierge who knows the city well, who compares options honestly, and '
            + 'who matches each recommendation to the guest, becomes a trusted '
            + 'friend and guide. Guests remember the hotel that helped them discover '
            + 'the best café, the most beautiful view, or the quiet corner that was '
            + 'not in any guidebook. In this way, the concierge extends the welcome '
            + 'of the hotel out into the streets, the markets and the landmarks of '
            + 'the city. The language of recommending, comparing and describing '
            + 'places — the language of this unit — is central to that role, and to '
            + 'every hospitality qualification. It turns a place to sleep into a '
            + 'doorway to a country.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · P11 A',
      type: 'discuss',
      title: 'Understanding check',
      instruction: 'Understanding check. Answer in your own words.',
      questions: [{
            q: 'Why is local knowledge so valuable in hospitality?',
            model: 'Because it shapes the guest\'s experience of the city and country.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does a great concierge do?',
            model: 'Knows the city well, compares options honestly, matches the '
              + 'recommendation to the guest.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What do guests remember about a helpful hotel?',
            model: 'The best café, the most beautiful view, the quiet corner not in the '
              + 'guidebook.',
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
      bookRef: 'Unit 6 · P11 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'You are the concierge. Your partner is a guest with one free day. Ask '
              + 'what they like, then recommend the best place, compare it with one '
              + 'other, and give practical information. Then change roles.',
            say: 'You are the concierge. Your partner is a guest with one free day. Ask '
              + 'what they like, then recommend the best place, compare it with one '
              + 'other, and give practical information. Then change roles.',
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
      bookRef: 'Unit 6 · P11 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Write 40–60 words recommending your favourite place in the world. Use '
              + 'at least one comparative and one superlative.',
            say: 'Write 40–60 words recommending your favourite place in the world. Use '
              + 'at least one comparative and one superlative.',
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
