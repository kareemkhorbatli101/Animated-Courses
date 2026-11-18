/* Unit 7 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a room-service order and a '
  + 'housekeeping request, and note what each one needs.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 7 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-7.4.png', caption: 'Room service arrives with the guest\'s breakfast.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 7 · P3',
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
          h: '<b>Lina:</b> Good evening, room service. How can I help you?',
          say: 'Good evening, room service. How can I help you?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Hello. I\'m very tired, so I\'d like to eat in my room. '
            + 'Could I order some dinner?',
          say: 'Hello. I\'m very tired, so I\'d like to eat in my room. Could I order '
            + 'some dinner?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. What would you like?',
          say: 'Of course. What would you like?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> The grilled chicken, please, and a fresh salad. And a '
            + 'pot of mint tea.',
          say: 'The grilled chicken, please, and a fresh salad. And a pot of mint tea.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Certainly. That\'s grilled chicken, a salad and a pot of '
            + 'mint tea. It will be about twenty minutes.',
          say: 'Certainly. That\'s grilled chicken, a salad and a pot of mint tea. It '
            + 'will be about twenty minutes.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Perfect. Thank you.',
          say: 'Perfect. Thank you.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> You\'re welcome. We\'ll bring it up to your room very '
            + 'soon. Enjoy your evening.',
          say: 'You\'re welcome. We\'ll bring it up to your room very soon. Enjoy '
            + 'your evening.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Excuse me. I\'ve just arrived, but there are no clean '
            + 'towels in my bathroom.',
          say: 'Excuse me. I\'ve just arrived, but there are no clean towels in my bathroom.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Salma:</b> Oh, I\'m very sorry. I\'ll bring some fresh towels '
            + 'right away. Has the room been cleaned today?',
          say: 'Oh, I\'m very sorry. I\'ll bring some fresh towels right away. Has '
            + 'the room been cleaned today?',
          role: 'salma',
          who: 'Salma'
        },
        {
          h: '<b>Guest:</b> Yes, the room is lovely and clean. Only the towels are '
            + 'missing.',
          say: 'Yes, the room is lovely and clean. Only the towels are missing.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Salma:</b> Thank you for telling me. I\'ve just checked, and we '
            + 'have fresh towels ready. Here you are — is there anything else you '
            + 'need?',
          say: 'Thank you for telling me. I\'ve just checked, and we have fresh '
            + 'towels ready. Here you are — is there anything else you need?',
          role: 'salma',
          who: 'Salma'
        },
        {
          h: '<b>Guest:</b> No, that\'s everything. Thank you very much.',
          say: 'No, that\'s everything. Thank you very much.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Salma:</b> You\'re very welcome. Enjoy your stay.',
          say: 'You\'re very welcome. Enjoy your stay.',
          role: 'salma',
          who: 'Salma'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 7 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What main dish does the guest order?',
            model: 'Grilled chicken.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest order with it?',
            model: 'A fresh salad.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest want to drink?',
            model: 'A pot of mint tea.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How long will it take?',
            model: 'About twenty minutes.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why does the guest want to eat in the room? (he is very tired)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 7 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'The guest orders grilled chicken.',
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
        },
      {
          q: 'The guest wants a coffee.',
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
          q: 'The food will take about twenty minutes.',
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
        },
      {
          q: 'Lina repeats the order to check it.',
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
        }]
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 7 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What is missing from the bathroom?',
            model: 'Grilled chicken.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Is the rest of the room clean?',
            model: 'A fresh salad.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Salma do about the problem?',
            model: 'A pot of mint tea.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does Salma treat the guest?',
            model: 'About twenty minutes.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
