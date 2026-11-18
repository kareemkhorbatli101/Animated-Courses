/* Unit 7 §4 — Grammar — The Present Perfect.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Grammar — The Present Perfect', part: '2',
          section: '4', lesson: 'Grammar — The Present Perfect', title: 'Grammar — The Present Perfect' },
  objective: 'By the end of Part 2 you can say what has been done with the present '
  + 'perfect, and tell it from what was done at a stated time.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 7 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — The Present Perfect',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-7.3.png', caption: 'We use the present perfect to talk about finished actions with a result now.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 7 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'We use the PRESENT PERFECT (have / has + past participle) to talk '
            + 'about an action that finished in the past, when the RESULT is '
            + 'important now. “I have cleaned the room.” (So the room is clean now.) '
            + '“She has made the beds.” (So the beds are ready now.) For regular '
            + 'verbs, the past participle is the same as the past simple: clean → '
            + 'cleaned, change → changed. Some verbs are irregular: make → made, do '
            + '→ done, bring → brought, take → taken.',
          say: 'We use the PRESENT PERFECT (have / has + past participle) to talk '
            + 'about an action that finished in the past, when the RESULT is '
            + 'important now. “I have cleaned the room.” (So the room is clean now.) '
            + '“She has made the beds.” (So the beds are ready now.) For regular '
            + 'verbs, the past participle is the same as the past simple: clean → '
            + 'cleaned, change → changed. Some verbs are irregular: make → made, do '
            + '→ done, bring → brought, take → taken.',
          role: 'course'
        },
        {
          h: 'Three small words often go with the present perfect. ALREADY means '
            + '\'before now\', in positive sentences: “I\'ve already changed the '
            + 'towels.” YET means \'up to now\', in questions and negatives: “Have '
            + 'you cleaned the room yet?” “I haven\'t finished yet.” JUST means \'a '
            + 'very short time ago\': “I\'ve just brought your breakfast.”',
          say: 'Three small words often go with the present perfect. ALREADY means '
            + '\'before now\', in positive sentences: “I\'ve already changed the '
            + 'towels.” YET means \'up to now\', in questions and negatives: “Have '
            + 'you cleaned the room yet?” “I haven\'t finished yet.” JUST means \'a '
            + 'very short time ago\': “I\'ve just brought your breakfast.”',
          role: 'course'
        },
        {
          h: 'We also use the present perfect for experience, with ever and never: '
            + '“Have you ever worked in a hotel?” “I have never dropped a tray.”',
          say: 'We also use the present perfect for experience, with ever and never: '
            + '“Have you ever worked in a hotel?” “I have never dropped a tray.”',
          role: 'course'
        },
        {
          h: 'Form',
          say: 'Form',
          role: 'course'
        },
        {
          h: 'Positive: I / you / we / they have + participle · he / she / it has + '
            + 'participle Question: Have / Has + subject + participle? Negative: '
            + 'haven\'t / hasn\'t + participle',
          say: 'Positive: I / you / we / they have + participle · he / she / it has + '
            + 'participle Question: Have / Has + subject + participle? Negative: '
            + 'haven\'t / hasn\'t + participle',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 7 · P2 A',
      type: 'cloze',
      title: 'Complete with the PRESENT PERFECT',
      instruction: 'Complete with the PRESENT PERFECT. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. She [[1]] (make) all the beds on this floor.'
        + '<br>'
        + '2. We [[2]] (change) the towels in every room.'
        + '<br>'
        + '3. The porter [[3]] (bring) fresh linen.'
        + '<br>'
        + '4. They [[4]] (finish) the third floor.'
        + '</div>',
      answers: {
        '1': ['has made'],
        '2': ['have changed'],
        '3': ['has brought'],
        '4': ['have finished']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>has made</b>',
        '2': '<b>have changed</b>',
        '3': '<b>has brought</b>',
        '4': '<b>have finished</b>'
      }
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 7 · P2 B',
      type: 'cloze',
      title: 'Complete with already, yet, or just',
      instruction: 'Complete with already, yet, or just.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Don\'t worry, I\'ve [[1]] cleaned the bathroom (before now).'
        + '<br>'
        + '2. Have you restocked the minibar [[2]]?'
        + '<br>'
        + '3. Room service! I\'ve [[3]] brought your dinner (a moment ago).'
        + '<br>'
        + '4. I haven\'t vacuumed the floor [[4]].'
        + '</div>',
      answers: {
        '1': ['already'],
        '2': ['yet'],
        '3': ['just'],
        '4': ['yet']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>already</b>',
        '2': '<b>yet</b>',
        '3': '<b>just</b>',
        '4': '<b>yet</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 7 · P2 C',
      type: 'cloze',
      title: 'Write the question or the negative',
      instruction: 'Write the question or the negative.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (? / you / clean / room 305) → [[1]]'
        + '<br>'
        + '2. (− / I / not / finish / the beds) → [[2]]'
        + '<br>'
        + '3. (? / she / bring / the towels) → [[3]]'
        + '<br>'
        + '4. (− / we / not / restock / the coffee) → [[4]]'
        + '</div>',
      answers: {
        '1': ['Have you cleaned room 305?'],
        '2': ['I haven\'t finished the beds.'],
        '3': ['Has she brought the towels?'],
        '4': ['We haven\'t restocked the coffee.']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Have you cleaned room 305?</b>',
        '2': '<b>I haven\'t finished the beds.</b>',
        '3': '<b>Has she brought the towels?</b>',
        '4': '<b>We haven\'t restocked the coffee.</b>'
      }
    }
  ]
});
