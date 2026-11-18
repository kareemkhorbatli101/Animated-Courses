/* Unit 9 §4 — Grammar — The First Conditional and 'should'.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Grammar — The First Conditional and \'should\'', part: '2',
          section: '4', lesson: 'Grammar — The First Conditional and \'should\'', title: 'Grammar — The First Conditional and \'should\'' },
  objective: 'By the end of Part 2 you can say what will happen if something is '
  + 'done with the first conditional, and advise with \'should\'.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 9 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — The First Conditional and \'should\'',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-9.3.png', caption: 'Offer solutions with the first conditional; give advice with should.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · P2 A',
      type: 'cloze',
      title: 'Complete the first conditional sentence',
      instruction: 'Complete the first conditional sentence. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. If you [[1]] (give) me your room number, I\'ll send an engineer.'
        + '<br>'
        + '2. If the room [[2]] (be) too noisy, we\'ll move you.'
        + '<br>'
        + '3. If you [[3]] (wait) five minutes, I\'ll bring a new one.'
        + '<br>'
        + '4. If the food [[4]] (be) cold, we\'ll cook it again.'
        + '</div>',
      answers: {
        '1': ['give'],
        '2': ['is'],
        '3': ['wait'],
        '4': ['is']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>give</b>',
        '2': '<b>is</b>',
        '3': '<b>wait</b>',
        '4': '<b>is</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 9 · P2 B',
      type: 'cloze',
      title: 'Complete with will (\'ll) + the verb',
      instruction: 'Complete with will (\'ll) + the verb.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. If you show me the bill, I [[1]] (check) it for you.'
        + '<br>'
        + '2. If there is a mistake, we [[2]] (give) you a refund.'
        + '<br>'
        + '3. If you\'re still unhappy, I [[3]] (call) the manager.'
        + '<br>'
        + '4. If you leave your number, we [[4]] (phone) you when we find it.'
        + '</div>',
      answers: {
        '1': ['\'ll check'],
        '2': ['\'ll give'],
        '3': ['\'ll call'],
        '4': ['\'ll phone']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>\'ll check</b>',
        '2': '<b>\'ll give</b>',
        '3': '<b>\'ll call</b>',
        '4': '<b>\'ll phone</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 9 · P2 C',
      type: 'cloze',
      title: 'Give advice with should or shouldn\'t',
      instruction: 'Give advice with should or shouldn\'t.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A guest has a problem but says nothing. → You [[1]] tell reception.'
        + '<br>'
        + '2. The lamp is broken. → We [[2]] replace it now.'
        + '<br>'
        + '3. A guest wants to wait until tomorrow. → You [[3]] wait; tell us today.'
        + '</div>',
      answers: {
        '1': ['should'],
        '2': ['should'],
        '3': ['shouldn\'t']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>should</b>',
        '2': '<b>should</b>',
        '3': '<b>shouldn\'t</b>'
      }
    }
  ]
});
