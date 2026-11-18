/* Unit 6 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a short guide to a city and pick '
  + 'the recommendation that suits a particular guest.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 6 · P5',
      type: 'study',
      title: 'The reading',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The reading',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A good concierge does not simply say, “Go here.” She listens first, '
            + 'and then she matches the place to the guest. The best recommendation '
            + 'for one guest is the worst for another. A family with young children, '
            + 'a couple who love history, and a traveller who wants to relax all '
            + 'need different advice.',
          say: 'A good concierge does not simply say, “Go here.” She listens first, '
            + 'and then she matches the place to the guest. The best recommendation '
            + 'for one guest is the worst for another. A family with young children, '
            + 'a couple who love history, and a traveller who wants to relax all '
            + 'need different advice.',
          role: 'course'
        },
        {
          h: 'Syria offers something for everyone. For history-lovers, Palmyra has '
            + 'the most famous ancient ruins in the country, and the castle of Krak '
            + 'des Chevaliers is one of the greatest in the world. These places are '
            + 'further away, so they are best for guests with more time. For a '
            + 'shorter visit, the Old City of Damascus is closer and just as '
            + 'beautiful, with the Umayyad Mosque, the old souq, and countless quiet '
            + 'courtyards.',
          say: 'Syria offers something for everyone. For history-lovers, Palmyra has '
            + 'the most famous ancient ruins in the country, and the castle of Krak '
            + 'des Chevaliers is one of the greatest in the world. These places are '
            + 'further away, so they are best for guests with more time. For a '
            + 'shorter visit, the Old City of Damascus is closer and just as '
            + 'beautiful, with the Umayyad Mosque, the old souq, and countless quiet '
            + 'courtyards.',
          role: 'course'
        },
        {
          h: 'For guests who want to relax, the coast is the answer. Latakia has '
            + 'the finest beaches in the country, where the sea is warmer and the '
            + 'days are slower. And for families, a walk in a green garden or a '
            + 'visit to a busy, colourful souq is often more fun than a long museum '
            + 'tour.',
          say: 'For guests who want to relax, the coast is the answer. Latakia has '
            + 'the finest beaches in the country, where the sea is warmer and the '
            + 'days are slower. And for families, a walk in a green garden or a '
            + 'visit to a busy, colourful souq is often more fun than a long museum '
            + 'tour.',
          role: 'course'
        },
        {
          h: 'When Rana recommends a place, she also gives practical help: how far '
            + 'it is, how to get there, how much it costs, and the best time to go. '
            + 'A great recommendation is not only about the most beautiful place — '
            + 'it is about the right place, at the right time, for the right guest. '
            + 'That is the real art of the concierge.',
          say: 'When Rana recommends a place, she also gives practical help: how far '
            + 'it is, how to get there, how much it costs, and the best time to go. '
            + 'A great recommendation is not only about the most beautiful place — '
            + 'it is about the right place, at the right time, for the right guest. '
            + 'That is the real art of the concierge.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'Why is the best recommendation different for different guests?',
            model: 'She listens to the guest first.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which places are best for guests with more time, and why?',
            model: 'Because different guests want different things (history, rest, children).',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can guests who want to relax do?',
            model: 'Palmyra and Krak des Chevaliers, because they are further away and '
              + 'need more time.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What practical information does Rana give with a recommendation?',
            model: 'Relax on the coast / beaches at Latakia.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is \'the real art of the concierge\'?',
            model: 'The distance, how to get there, the cost, the best time.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What does a good concierge do before recommending? (she listens to '
        + 'the guest first)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 6 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The best place for one guest can be… A) the same for all B) the '
            + 'worst for another C) always Palmyra D) never good [[1]]'
        + '<br>'
        + '2. Palmyra and Krak des Chevaliers are best for guests with… A) no '
            + 'time B) more time C) small children D) no interest [[2]]'
        + '<br>'
        + '3. Latakia has the finest… A) ruins B) souqs C) beaches D) mosques [[3]]'
        + '<br>'
        + '4. A great recommendation is about the right place, time and… A) '
            + 'price only B) guest C) hotel D) weather [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['C'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 6 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. to make two things fit together well → [[1]]'
        + '<br>'
        + '2. very old, from long ago → [[2]]'
        + '<br>'
        + '3. useful, about real things like cost and time → [[3]]'
        + '</div>',
      answers: {
        '1': ['match'],
        '2': ['ancient'],
        '3': ['practical']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>match</b>',
        '2': '<b>ancient</b>',
        '3': '<b>practical</b>'
      }
    }
  ]
});
