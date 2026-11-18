/* Unit 9 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a complaint and note the problem, '
  + 'the guest\'s feeling and what was promised.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 9 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-9.4.png', caption: 'A guest reports a problem with the air conditioning.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 9 · P3',
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
          h: '<b>Guest:</b> Excuse me. I\'m very tired, but my room is far too '
            + 'noisy. There\'s a party next door, and I couldn\'t sleep at all.',
          say: 'Excuse me. I\'m very tired, but my room is far too noisy. There\'s a '
            + 'party next door, and I couldn\'t sleep at all.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Oh, I\'m so sorry to hear that, sir. That\'s not '
            + 'acceptable, and I do apologise.',
          say: 'Oh, I\'m so sorry to hear that, sir. That\'s not acceptable, and I do '
            + 'apologise.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> I really need to rest.',
          say: 'I really need to rest.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. If you give me a few minutes, I\'ll move you '
            + 'to a quiet room on another floor. I\'ll also send someone to speak to '
            + 'the guests next door.',
          say: 'Of course. If you give me a few minutes, I\'ll move you to a quiet '
            + 'room on another floor. I\'ll also send someone to speak to the guests '
            + 'next door.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you. That would be a great help.',
          say: 'Thank you. That would be a great help.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> It\'s the least we can do. Here is your new key — room '
            + '402, a corner room, very quiet. And please accept a free breakfast '
            + 'tomorrow, with our apologies.',
          say: 'It\'s the least we can do. Here is your new key — room 402, a corner '
            + 'room, very quiet. And please accept a free breakfast tomorrow, with '
            + 'our apologies.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> That\'s very kind. Thank you very much.',
          say: 'That\'s very kind. Thank you very much.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Guest:</b> Hello. I think there\'s a mistake on my bill. There\'s '
            + 'a charge for a dinner I didn\'t have.',
          say: 'Hello. I think there\'s a mistake on my bill. There\'s a charge for a '
            + 'dinner I didn\'t have.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> I\'m sorry about that. Let me check it for you straight '
            + 'away. … You\'re right — this charge is for another room. I do '
            + 'apologise.',
          say: 'I\'m sorry about that. Let me check it for you straight away. … '
            + 'You\'re right — this charge is for another room. I do apologise.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> So what happens now?',
          say: 'So what happens now?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> I\'ll remove the charge immediately, and I\'ll print a '
            + 'new bill for you. If you notice anything else, you should tell me '
            + 'now, and I\'ll check that too.',
          say: 'I\'ll remove the charge immediately, and I\'ll print a new bill for '
            + 'you. If you notice anything else, you should tell me now, and I\'ll '
            + 'check that too.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> No, that\'s the only one. Thank you for fixing it so quickly.',
          say: 'No, that\'s the only one. Thank you for fixing it so quickly.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> You\'re very welcome. Thank you for your patience.',
          say: 'You\'re very welcome. Thank you for your patience.',
          role: 'lina',
          who: 'Lina'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 9 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What does Lina do first, before she offers a solution?',
            model: 'She apologises.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What solution does Lina offer?',
            model: 'She\'ll move him to a quiet room on another floor.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What else does Lina say she will do?',
            model: 'She\'ll send someone to speak to the guests next door.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina offer with her apologies?',
            model: 'A free breakfast.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why couldn\'t the guest sleep? (his room was too noisy — a party next door)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 9 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Lina apologises to the guest.',
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
          q: 'Lina will move the guest to a quiet room.',
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
          q: 'The new room is number 205.',
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
          q: 'Lina offers a free breakfast.',
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
      bookRef: 'Unit 9 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What is wrong with the bill?',
            model: 'She apologises.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina do to check?',
            model: 'She\'ll move him to a quiet room on another floor.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What was the charge really for?',
            model: 'She\'ll send someone to speak to the guests next door.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What two things will Lina do to fix it?',
            model: 'A free breakfast.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
