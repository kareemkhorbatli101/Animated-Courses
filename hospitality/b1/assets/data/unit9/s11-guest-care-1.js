/* Unit 9 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can stay calm with an angry guest, and keep '
  + 'the complaint about the problem rather than the person.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 9 · P7 · figures',
      type: 'study',
      title: 'The pictures in Guest-Care & Service Track',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-9.5.png', caption: 'Good service recovery turns an upset guest into a happy one.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What is your most important tool with an angry guest?',
            model: 'Your own calm.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How should you speak?',
            model: 'Gently and slowly.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Give one sentence that shows you understand the guest.',
            model: '\'I can see why you are upset, and you are right to tell me.\'',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'If the lobby is busy, what should you do?',
            model: 'Invite the guest to a quieter place to talk, away from other guests.',
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
      bookRef: 'Unit 9 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A receptionist calms an angry guest. Write the '
  + 'missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Lina: I can [[1]] why you are upset, and you are right to tell me.'
        + '<br>'
        + '2. Lina: Please, let\'s sit over here, away from the other [[2]].'
        + '<br>'
        + '3. Lina: If you give me a moment, I [[3]] put this right for you.'
        + '</div>',
      answers: {
        '1': ['see'],
        '2': ['guests'],
        '3': ['\'ll / will']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>see</b>',
        '2': '<b>guests</b>',
        '3': '<b>\'ll / will</b>'
      }
    }
  ]
});
