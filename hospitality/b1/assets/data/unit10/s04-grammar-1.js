/* Unit 10 §4 — Grammar — Reported Speech.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Grammar — Reported Speech', part: '2',
          section: '4', lesson: 'Grammar — Reported Speech', title: 'Grammar — Reported Speech' },
  objective: 'By the end of Part 2 you can report what a guest said without '
  + 'changing its meaning, shifting the tense and the pronouns correctly.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 10 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — Reported Speech',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-10.3.png', caption: 'We use reported speech to tell someone what another person said.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · P2 A',
      type: 'cloze',
      title: 'Report each statement',
      instruction: 'Report each statement. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “I enjoyed the food.” → He said he [[1]] the food.'
        + '<br>'
        + '2. “The staff are very kind.” → She said the staff [[2]] very kind.'
        + '<br>'
        + '3. “I will come back next year.” → He said he [[3]] come back the next year.'
        + '<br>'
        + '4. “We can recommend this hotel.” → They said they [[4]] recommend '
            + 'the hotel.'
        + '</div>',
      answers: {
        '1': ['had enjoyed / enjoyed'],
        '2': ['were'],
        '3': ['would'],
        '4': ['could']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>had enjoyed / enjoyed</b>',
        '2': '<b>were</b>',
        '3': '<b>would</b>',
        '4': '<b>could</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 10 · P2 B',
      type: 'cloze',
      title: 'Report each question',
      instruction: 'Report each question. Use asked if or asked + a question word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “Is breakfast included?” → The guest asked [[1]] breakfast [[1]] '
            + 'included.'
        + '<br>'
        + '2. “What time is checkout?” → She asked what time checkout [[2]].'
        + '<br>'
        + '3. “Can I have a late checkout?” → He asked [[3]] he [[3]] have a '
            + 'late checkout.'
        + '<br>'
        + '4. “Where is the taxi?” → She asked where the taxi [[4]].'
        + '</div>',
      answers: {
        '1': ['asked if … was'],
        '2': ['checkout was'],
        '3': ['asked if … could'],
        '4': ['the taxi was']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>asked if … was</b>',
        '2': '<b>checkout was</b>',
        '3': '<b>asked if … could</b>',
        '4': '<b>the taxi was</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 10 · P2 C',
      type: 'cloze',
      title: 'Choose say or tell (in the past: said / told)',
      instruction: 'Choose say or tell (in the past: said / told).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest [[1]] that the room was lovely.'
        + '<br>'
        + '2. She [[2]] me that she would come back.'
        + '<br>'
        + '3. He [[3]] he had lost his key.'
        + '<br>'
        + '4. They [[4]] us the food was delicious.'
        + '</div>',
      answers: {
        '1': ['said'],
        '2': ['told'],
        '3': ['said'],
        '4': ['told']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>said</b>',
        '2': '<b>told</b>',
        '3': '<b>said</b>',
        '4': '<b>told</b>'
      }
    }
  ]
});
