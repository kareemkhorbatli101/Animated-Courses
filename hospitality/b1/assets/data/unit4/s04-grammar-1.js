/* Unit 4 §4 — Grammar — Present Continuous and 'going to'.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Grammar — Present Continuous and \'going to\'', part: '2',
          section: '4', lesson: 'Grammar — Present Continuous and \'going to\'', title: 'Grammar — Present Continuous and \'going to\'' },
  objective: 'By the end of Part 2 you can talk about arrangements already made '
  + 'with the present continuous, and plans with \'going to\'.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 4 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — Present Continuous and \'going to\'',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-4.4.png', caption: 'We use these forms to talk about arrangements and plans.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P2 A',
      type: 'cloze',
      title: 'Complete with the PRESENT CONTINUOUS (arrangement)',
      instruction: 'Complete with the PRESENT CONTINUOUS (arrangement). (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The porter [[1]] (bring) your bags now.'
        + '<br>'
        + '2. We [[2]] (serve) breakfast from seven tomorrow.'
        + '<br>'
        + '3. A taxi [[3]] (wait) for you at eight.'
        + '<br>'
        + '4. I [[4]] (check) you in at the moment.'
        + '</div>',
      answers: {
        '1': ['is bringing'],
        '2': ['are serving'],
        '3': ['is waiting'],
        '4': ['am checking']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>is bringing</b>',
        '2': '<b>are serving</b>',
        '3': '<b>is waiting</b>',
        '4': '<b>am checking</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P2 B',
      type: 'cloze',
      title: 'Complete with GOING TO',
      instruction: 'Complete with GOING TO.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I [[1]] (send) someone up with extra towels.'
        + '<br>'
        + '2. We [[2]] (clean) your room now.'
        + '<br>'
        + '3. The chef [[3]] (prepare) a special dinner tonight.'
        + '<br>'
        + '4. You [[4]] (love) the view from your room.'
        + '</div>',
      answers: {
        '1': ['am going to send'],
        '2': ['are going to clean'],
        '3': ['is going to prepare'],
        '4': ['are going to love']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>am going to send</b>',
        '2': '<b>are going to clean</b>',
        '3': '<b>is going to prepare</b>',
        '4': '<b>are going to love</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 4 · P2 C',
      type: 'cloze',
      title: 'Choose the best form',
      instruction: 'Choose the best form.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The porter ( brings / is bringing ) your bags right now. [[1]]'
        + '<br>'
        + '2. We ( are going to / go to ) paint the lobby next week. [[2]]'
        + '<br>'
        + '3. Breakfast ( is starting / start ) at seven tomorrow. [[3]]'
        + '<br>'
        + '4. I ( am going to / go ) check the room for you. [[4]]'
        + '</div>',
      answers: {
        '1': ['is bringing'],
        '2': ['are going to'],
        '3': ['is starting'],
        '4': ['am going to']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>is bringing</b>',
        '2': '<b>are going to</b>',
        '3': '<b>is starting</b>',
        '4': '<b>am going to</b>'
      }
    }
  ]
});
