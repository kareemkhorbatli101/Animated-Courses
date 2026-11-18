/* Unit 3 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can keep a guest comfortable while you check '
  + 'availability, and say no to a request without losing the booking.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 3 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Guests often make special requests: a quiet room, a room on a low '
            + 'floor, a cot for a baby, or an early check-in. A good receptionist '
            + 'listens and tries to help. When she can, she says “Yes, of course.” '
            + 'But sometimes the answer must be “no” — for example, if the hotel is '
            + 'full or the room is not ready. Then she never says a hard “no.” '
            + 'Instead, she says sorry, gives a reason, and offers another choice: '
            + '“I\'m sorry, an early check-in isn\'t possible today, but I can keep '
            + 'your bags and offer you a coffee in the café.” A kind “no” with a '
            + 'helpful offer keeps the guest happy.',
          say: 'Guests often make special requests: a quiet room, a room on a low '
            + 'floor, a cot for a baby, or an early check-in. A good receptionist '
            + 'listens and tries to help. When she can, she says “Yes, of course.” '
            + 'But sometimes the answer must be “no” — for example, if the hotel is '
            + 'full or the room is not ready. Then she never says a hard “no.” '
            + 'Instead, she says sorry, gives a reason, and offers another choice: '
            + '“I\'m sorry, an early check-in isn\'t possible today, but I can keep '
            + 'your bags and offer you a coffee in the café.” A kind “no” with a '
            + 'helpful offer keeps the guest happy.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 3 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'Give two special requests guests often make.',
            model: '(any two) a quiet room, a low floor, a cot, an early check-in.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a good receptionist do when she can help?',
            model: 'She says \'Yes, of course\' and helps.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When might the answer be \'no\'?',
            model: 'When the hotel is full or the room is not ready.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does she do instead of a hard \'no\'?',
            model: 'She says sorry, gives a reason, and offers another choice.',
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
      bookRef: 'Unit 3 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest makes a request. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: Could I have a room on a [[1]] floor, please? I don\'t like '
            + 'the lift.'
        + '<br>'
        + '2. Lina: Of course. I\'ll [[2]] that for you.'
        + '<br>'
        + '3. Lina: I\'m [[3]], an early check-in isn\'t possible, but I can '
            + 'keep your bags.'
        + '</div>',
      answers: {
        '1': ['low'],
        '2': ['arrange / book / do'],
        '3': ['sorry']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>low</b>',
        '2': '<b>arrange / book / do</b>',
        '3': '<b>sorry</b>'
      }
    }
  ]
});
