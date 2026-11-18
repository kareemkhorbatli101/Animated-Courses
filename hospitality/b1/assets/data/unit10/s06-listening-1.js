/* Unit 10 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a checkout and note the charges '
  + 'queried and what was agreed.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 10 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-10.4.png', caption: 'Lina gives the guest the bill and a warm farewell.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 10 · P3',
      type: 'study',
      title: 'The conversation',
      instruction: 'Listen and read. Each person has their own voice.',
      passage: {
      title: 'The conversation',
      listenLabel: 'Play the conversation',
      paras: [{
          h: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          say: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          role: 'course'
        },
        {
          h: '<b>Guest:</b> Good morning. I\'d like to check out, please. Room 210.',
          say: 'Good morning. I\'d like to check out, please. Room 210.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Good morning, Mr. Sayed. I hope you enjoyed your stay. '
            + 'Here is your bill.',
          say: 'Good morning, Mr. Sayed. I hope you enjoyed your stay. Here is your bill.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you. Could you explain this charge here?',
          say: 'Thank you. Could you explain this charge here?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. That\'s for the dinner in the restaurant on '
            + 'Tuesday, and this one is for the taxi to the airport. The total is '
            + '258 dollars.',
          say: 'Of course. That\'s for the dinner in the restaurant on Tuesday, and '
            + 'this one is for the taxi to the airport. The total is 258 dollars.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> That\'s clear. I\'ll pay by card, please.',
          say: 'That\'s clear. I\'ll pay by card, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Certainly. … Thank you. Here is your receipt. Did you '
            + 'enjoy your stay with us?',
          say: 'Certainly. … Thank you. Here is your receipt. Did you enjoy your stay '
            + 'with us?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Very much. The staff were wonderful, and the room was lovely.',
          say: 'Very much. The staff were wonderful, and the room was lovely.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> That\'s kind of you to say. Thank you for staying at the '
            + 'Orient Rose. We hope to see you again very soon. Have a safe journey!',
          say: 'That\'s kind of you to say. Thank you for staying at the Orient Rose. '
            + 'We hope to see you again very soon. Have a safe journey!',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Lina:</b> Mr. Nabil, I have some feedback from the guests in 210 and 305.',
          say: 'Mr. Nabil, I have some feedback from the guests in 210 and 305.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Mr. Nabil:</b> Wonderful. What did they say?',
          say: 'Wonderful. What did they say?',
          role: 'nabil',
          who: 'Mr. Nabil'
        },
        {
          h: '<b>Lina:</b> Mr. Sayed said the staff were wonderful and the room was '
            + 'lovely. He told me he would come back next year.',
          say: 'Mr. Sayed said the staff were wonderful and the room was lovely. He '
            + 'told me he would come back next year.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Mr. Nabil:</b> That\'s excellent. And room 305?',
          say: 'That\'s excellent. And room 305?',
          role: 'nabil',
          who: 'Mr. Nabil'
        },
        {
          h: '<b>Lina:</b> The family said they had loved the pool. But the mother '
            + 'asked if we could add more children\'s food to the menu.',
          say: 'The family said they had loved the pool. But the mother asked if we '
            + 'could add more children\'s food to the menu.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Mr. Nabil:</b> A good idea. I\'ll speak to the chef. Well reported, Lina.',
          say: 'A good idea. I\'ll speak to the chef. Well reported, Lina.',
          role: 'nabil',
          who: 'Mr. Nabil'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 10 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What two charges does Lina explain?',
            model: 'The restaurant dinner and the taxi to the airport.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the total?',
            model: '258 dollars.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does the guest pay?',
            model: 'By card.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest say about the staff and the room?',
            model: 'The staff were wonderful and the room was lovely.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What does the guest want to do? (check out)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 10 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Lina explains the charges on the bill.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The total is 258 dollars.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'Lina gives the guest a receipt.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'Lina forgets to say goodbye.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        }]
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 10 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What did Mr. Sayed say about the staff and the room?',
            model: 'The restaurant dinner and the taxi to the airport.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did Mr. Sayed say he would do?',
            model: '258 dollars.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the family say they had loved?',
            model: 'By card.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the mother ask?',
            model: 'The staff were wonderful and the room was lovely.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
