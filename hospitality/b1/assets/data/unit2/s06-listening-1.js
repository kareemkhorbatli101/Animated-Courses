/* Unit 2 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a guest asking where something '
  + 'is, and answer with the floor and the direction.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 2 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints these pictures in this part. Look at them before you '
  + 'start — the words in the exercises come from them.',
      visual: [
        { img: '../assets/figures/fig-2.4.png', caption: 'A guest asks Lina for directions.' },
        { img: '../assets/figures/fig-2.5.png', caption: 'The Orient Rose Resort in Latakia, on the coast.' }
      ],
      doneLabel: 'I have looked at these'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 2 · P3',
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
          h: '<b>Guest:</b> Excuse me. Where is the swimming pool, please?',
          say: 'Excuse me. Where is the swimming pool, please?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> It\'s on the first floor, next to the gym. Take the '
            + 'lift, and turn left.',
          say: 'It\'s on the first floor, next to the gym. Take the lift, and turn left.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you. And is there a café near the pool?',
          say: 'Thank you. And is there a café near the pool?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Yes, there is a small café opposite the gym. It opens at '
            + 'nine o\'clock.',
          say: 'Yes, there is a small café opposite the gym. It opens at nine o\'clock.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Wonderful. And are there towels at the pool?',
          say: 'Wonderful. And are there towels at the pool?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Yes, there are a lot of towels there. You don\'t need to '
            + 'bring one from your room.',
          say: 'Yes, there are a lot of towels there. You don\'t need to bring one '
            + 'from your room.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Perfect. Thank you very much.',
          say: 'Perfect. Thank you very much.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Caller:</b> Hello. I\'d like some information about your resort in '
            + 'Latakia, please.',
          say: 'Hello. I\'d like some information about your resort in Latakia, please.',
          role: 'caller',
          who: 'Caller'
        },
        {
          h: '<b>Lina:</b> Of course. The Orient Rose Resort is right on the beach. '
            + 'There are eighty rooms, and there is a big swimming pool.',
          say: 'Of course. The Orient Rose Resort is right on the beach. There are '
            + 'eighty rooms, and there is a big swimming pool.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Caller:</b> Is there a restaurant at the resort?',
          say: 'Is there a restaurant at the resort?',
          role: 'caller',
          who: 'Caller'
        },
        {
          h: '<b>Lina:</b> Yes, there are two restaurants and a beach café. There '
            + 'are a lot of activities for families, too.',
          say: 'Yes, there are two restaurants and a beach café. There are a lot of '
            + 'activities for families, too.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Caller:</b> And are there rooms with a sea view?',
          say: 'And are there rooms with a sea view?',
          role: 'caller',
          who: 'Caller'
        },
        {
          h: '<b>Lina:</b> Yes, there are some rooms with a beautiful sea view. '
            + 'They are very popular in summer.',
          say: 'Yes, there are some rooms with a beautiful sea view. They are very '
            + 'popular in summer.',
          role: 'lina',
          who: 'Lina'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 2 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'Which floor is the pool on?',
            model: 'The first floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is next to the gym?',
            model: 'The swimming pool.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the small café?',
            model: 'Opposite the gym.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Are there towels at the pool?',
            model: 'Yes, there are a lot of towels.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What does the guest want to find? (the swimming pool)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 2 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'The pool is next to the gym.',
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
          q: 'The café opens at nine o\'clock.',
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
          q: 'There aren\'t any towels at the pool.',
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
          q: 'The guest must take the lift and turn left.',
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
      bookRef: 'Unit 2 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'Where is the resort?',
            model: 'The first floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How many rooms are there at the resort?',
            model: 'The swimming pool.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How many restaurants are there?',
            model: 'Opposite the gym.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What kind of rooms are popular in summer?',
            model: 'Yes, there are a lot of towels.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
