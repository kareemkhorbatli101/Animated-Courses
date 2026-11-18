/* Unit 7 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can enter and leave a guest\'s room in a way '
  + 'that respects it, and say what you have done.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 7 · P7 · figures',
      type: 'study',
      title: 'The pictures in Guest-Care & Service Track',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-7.5.png', caption: 'The two door signs guests use.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 7 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What does the housekeeper do if a \'Do Not Disturb\' sign is on the door?',
            model: 'She never knocks or enters.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does \'Please Make Up Room\' mean?',
            model: 'Please clean the room (while the guest is out).',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What happens in a \'turn-down\' service?',
            model: 'The housekeeper prepares the bed for sleep, dims the lights, '
              + 'sometimes leaves a sweet.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the housekeeper do with a guest\'s lost item?',
            model: 'She takes it to \'lost property\', where it is kept safely.',
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
      bookRef: 'Unit 7 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A housekeeper reports to the supervisor. Write '
  + 'the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. There\'s a \'Do Not [[1]]\' sign on 210, so I haven\'t cleaned it yet.'
        + '<br>'
        + '2. I\'ve [[2]] finished 305 — the bed is made and the towels are fresh.'
        + '<br>'
        + '3. A guest left a book in 118. I\'ve taken it to [[3]] property.'
        + '</div>',
      answers: {
        '1': ['Disturb'],
        '2': ['just'],
        '3': ['lost']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Disturb</b>',
        '2': '<b>just</b>',
        '3': '<b>lost</b>'
      }
    }
  ]
});
