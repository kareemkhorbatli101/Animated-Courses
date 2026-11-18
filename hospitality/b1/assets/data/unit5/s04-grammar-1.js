/* Unit 5 §4 — Grammar — The Past Simple.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Grammar — The Past Simple', part: '2',
          section: '4', lesson: 'Grammar — The Past Simple', title: 'Grammar — The Past Simple' },
  objective: 'By the end of Part 2 you can say what happened with the past simple, '
  + 'in both regular and irregular forms.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 5 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — The Past Simple',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-5.3.png', caption: 'We use the past simple to talk about finished actions.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P2 A',
      type: 'cloze',
      title: 'Complete with the PAST SIMPLE of the regular verb',
      instruction: 'Complete with the PAST SIMPLE of the regular verb. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The waiter [[1]] (serve) the mezze first.'
        + '<br>'
        + '2. The chef [[2]] (cook) the fish perfectly.'
        + '<br>'
        + '3. The family [[3]] (arrive) at eight o\'clock.'
        + '<br>'
        + '4. Lina [[4]] (welcome) the guests with a smile.'
        + '</div>',
      answers: {
        '1': ['served'],
        '2': ['cooked'],
        '3': ['arrived'],
        '4': ['welcomed']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>served</b>',
        '2': '<b>cooked</b>',
        '3': '<b>arrived</b>',
        '4': '<b>welcomed</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P2 B',
      type: 'cloze',
      title: 'Complete with the PAST SIMPLE of the irregular verb',
      instruction: 'Complete with the PAST SIMPLE of the irregular verb.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest [[1]] (eat) all the hummus.'
        + '<br>'
        + '2. They [[2]] (drink) mint tea after dinner.'
        + '<br>'
        + '3. We [[3]] (have) a wonderful evening.'
        + '<br>'
        + '4. The waiter [[4]] (take) the order to the kitchen.'
        + '</div>',
      answers: {
        '1': ['ate'],
        '2': ['drank'],
        '3': ['had'],
        '4': ['took']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ate</b>',
        '2': '<b>drank</b>',
        '3': '<b>had</b>',
        '4': '<b>took</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 5 · P2 C',
      type: 'cloze',
      title: 'Write the question or the negative with did / didn\'t',
      instruction: 'Write the question or the negative with did / didn\'t.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (? / you / enjoy / the meal) → [[1]]'
        + '<br>'
        + '2. (− / the guest / order / dessert) → [[2]]'
        + '<br>'
        + '3. (? / they / like / the coffee) → [[3]]'
        + '<br>'
        + '4. (− / we / have / fish) → [[4]]'
        + '</div>',
      answers: {
        '1': ['Did you enjoy the meal?'],
        '2': ['The guest didn\'t order dessert.'],
        '3': ['Did they like the coffee?'],
        '4': ['We didn\'t have fish.']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Did you enjoy the meal?</b>',
        '2': '<b>The guest didn\'t order dessert.</b>',
        '3': '<b>Did they like the coffee?</b>',
        '4': '<b>We didn\'t have fish.</b>'
      }
    }
  ]
});
