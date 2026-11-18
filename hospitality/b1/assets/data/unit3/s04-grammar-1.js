/* Unit 3 §4 — Grammar — Modals for Polite Requests and Offers.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Grammar — Modals for Polite Requests and Offers', part: '2',
          section: '4', lesson: 'Grammar — Modals for Polite Requests and Offers', title: 'Grammar — Modals for Polite Requests and Offers' },
  objective: 'By the end of Part 2 you can make a polite request and a polite offer '
  + 'with can, could and may, and say which is the more formal.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 3 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — Modals for Polite Requests and Offers',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-3.3.png', caption: 'We use modal verbs to be polite.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 3 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'In hospitality, we ask for things and offer help many times a day. We '
            + 'use MODAL VERBS to sound polite and friendly. To ask for something (a '
            + 'REQUEST), use Can I…?, Could I…?, or Could you…? Could is more polite '
            + 'than can. Examples: Can I have your name, please? Could you spell '
            + 'that for me? Could I take your telephone number?',
          say: 'In hospitality, we ask for things and offer help many times a day. We '
            + 'use MODAL VERBS to sound polite and friendly. To ask for something (a '
            + 'REQUEST), use Can I…?, Could I…?, or Could you…? Could is more polite '
            + 'than can. Examples: Can I have your name, please? Could you spell '
            + 'that for me? Could I take your telephone number?',
          role: 'course'
        },
        {
          h: 'To OFFER something, use Would you like…?, I\'ll…, or Shall I…? '
            + 'Examples: Would you like a room with a sea view? I\'ll send you a '
            + 'confirmation by email. Shall I book a taxi for you? Always add please '
            + 'and thank you. A smile in your voice makes every request and offer '
            + 'sound warmer.',
          say: 'To OFFER something, use Would you like…?, I\'ll…, or Shall I…? '
            + 'Examples: Would you like a room with a sea view? I\'ll send you a '
            + 'confirmation by email. Shall I book a taxi for you? Always add please '
            + 'and thank you. A smile in your voice makes every request and offer '
            + 'sound warmer.',
          role: 'course'
        },
        {
          h: 'Form',
          say: 'Form',
          role: 'course'
        },
        {
          h: 'Request: Could / Can + I / you + verb…? Offer: Would you like + noun '
            + '/ to + verb…? · I\'ll + verb… · Shall I + verb…?',
          say: 'Request: Could / Can + I / you + verb…? Offer: Would you like + noun '
            + '/ to + verb…? · I\'ll + verb… · Shall I + verb…?',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 3 · P2 A',
      type: 'cloze',
      title: 'Make polite requests',
      instruction: 'Make polite requests. Use Could I or Could you. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (I / have your passport) → [[1]]'
        + '<br>'
        + '2. (you / repeat the date) → [[2]]'
        + '<br>'
        + '3. (I / take your phone number) → [[3]]'
        + '<br>'
        + '4. (you / wait one moment) → [[4]]'
        + '</div>',
      answers: {
        '1': ['Could I have your passport, please?'],
        '2': ['Could you repeat the date, please?'],
        '3': ['Could I take your phone number, please?'],
        '4': ['Could you wait one moment, please?']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Could I have your passport, please?</b>',
        '2': '<b>Could you repeat the date, please?</b>',
        '3': '<b>Could I take your phone number, please?</b>',
        '4': '<b>Could you wait one moment, please?</b>'
      }
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 3 · P2 B',
      type: 'cloze',
      title: 'Make offers',
      instruction: 'Make offers. Use Would you like or I\'ll.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (a room with a view?) → [[1]]'
        + '<br>'
        + '2. (send a confirmation email) → [[2]]'
        + '<br>'
        + '3. (a taxi from the airport?) → [[3]]'
        + '<br>'
        + '4. (book the table for you) → [[4]]'
        + '</div>',
      answers: {
        '1': ['Would you like a room with a view?'],
        '2': ['I\'ll send a confirmation email.'],
        '3': ['Would you like a taxi from the airport?'],
        '4': ['I\'ll book the table for you.']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Would you like a room with a view?</b>',
        '2': '<b>I\'ll send a confirmation email.</b>',
        '3': '<b>Would you like a taxi from the airport?</b>',
        '4': '<b>I\'ll book the table for you.</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 3 · P2 C',
      type: 'quizset',
      title: 'Choose the more polite sentence',
      instruction: 'Choose the more polite sentence.',
      display: 'cards',
      items: [{
          q: '',
          options: [{
            t: 'Give me your name',
            ok: false,
            why: ''
          },
            {
            t: 'Could I have your name, please?',
            ok: true,
            why: 'The book\'s answer for this one is “Could I have your name, please?”.'
          }]
        },
      {
          q: '',
          options: [{
            t: 'Would you like breakfast?',
            ok: true,
            why: 'The book\'s answer for this one is “Would you like breakfast?”.'
          },
            {
            t: 'You want breakfast?',
            ok: false,
            why: ''
          }]
        },
      {
          q: '',
          options: [{
            t: 'Wait',
            ok: false,
            why: ''
          },
            {
            t: 'Could you wait one moment, please?',
            ok: true,
            why: 'The book\'s answer for this one is “Could you wait one moment, please?”.'
          }]
        },
      {
          q: '',
          options: [{
            t: 'I\'ll check that for you',
            ok: true,
            why: 'The book\'s answer for this one is “I\'ll check that for you”.'
          },
            {
            t: 'Check it yourself',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
