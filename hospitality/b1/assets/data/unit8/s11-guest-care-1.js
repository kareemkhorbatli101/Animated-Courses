/* Unit 8 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can take a request about a disability or a '
  + 'dietary need without embarrassment on either side.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 8 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Inclusive hospitality means that every guest, whatever their age or '
            + 'ability, is truly welcome. This takes thought and preparation. For '
            + 'guests who use a wheelchair, the hotel prepares accessible rooms with '
            + 'ramps, wide doors and special bathrooms. For families, it keeps cots '
            + 'and high chairs ready. For guests with allergies, the kitchen knows '
            + 'every ingredient in every dish. For elderly guests, staff offer a '
            + 'little extra time and help. The best hotels do not see these as '
            + 'problems, but as chances to show real care. Yet there are limits. '
            + 'Sometimes a request truly cannot be met. Then a good member of staff '
            + 'never just says “no”. She apologises, explains the reason simply and '
            + 'honestly, and offers the best alternative she can — always with a '
            + 'promise she can keep. A kind, honest “no” protects both the guest and '
            + 'the hotel.',
          say: 'Inclusive hospitality means that every guest, whatever their age or '
            + 'ability, is truly welcome. This takes thought and preparation. For '
            + 'guests who use a wheelchair, the hotel prepares accessible rooms with '
            + 'ramps, wide doors and special bathrooms. For families, it keeps cots '
            + 'and high chairs ready. For guests with allergies, the kitchen knows '
            + 'every ingredient in every dish. For elderly guests, staff offer a '
            + 'little extra time and help. The best hotels do not see these as '
            + 'problems, but as chances to show real care. Yet there are limits. '
            + 'Sometimes a request truly cannot be met. Then a good member of staff '
            + 'never just says “no”. She apologises, explains the reason simply and '
            + 'honestly, and offers the best alternative she can — always with a '
            + 'promise she can keep. A kind, honest “no” protects both the guest and '
            + 'the hotel.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 8 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What does \'inclusive hospitality\' mean?',
            model: 'Every guest, whatever their age or ability, is truly welcome.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a hotel prepare for guests who use a wheelchair?',
            model: 'Accessible rooms with ramps, wide doors and special bathrooms.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How do the best hotels see special needs?',
            model: 'As chances to show real care (not problems).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When a request cannot be met, what three things should staff do?',
            model: 'Apologise, explain the reason honestly, offer the best alternative '
              + '(with a promise she can keep).',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 8 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest makes a request that cannot be fully '
  + 'met. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Lina: I\'m very [[1]], but the ground-floor rooms are all full tonight.'
        + '<br>'
        + '2. Lina: However, I [[2]] give you a first-floor room right by the lift.'
        + '<br>'
        + '3. Lina: And I\'ll make sure a member of staff [[3]] help with your bags.'
        + '</div>',
      answers: {
        '1': ['sorry'],
        '2': ['can / will'],
        '3': ['will']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>sorry</b>',
        '2': '<b>can / will</b>',
        '3': '<b>will</b>'
      }
    }
  ]
});
