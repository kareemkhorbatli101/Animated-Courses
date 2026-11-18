/* Unit 8 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a guest making a special request '
  + 'and note exactly what they need.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 8 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-8.4.png', caption: 'A guest asks for a cot for their baby.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 8 · P3',
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
          h: '<b>Guest:</b> Hello. We\'ve just arrived, and we have a few requests.',
          say: 'Hello. We\'ve just arrived, and we have a few requests.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. How can I help you?',
          say: 'Of course. How can I help you?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Could we have two extra pillows and a blanket? The '
            + 'children feel cold.',
          say: 'Could we have two extra pillows and a blanket? The children feel cold.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Certainly. I\'ll send them up right away.',
          say: 'Certainly. I\'ll send them up right away.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> And do you have an adapter? Our charger doesn\'t fit the plug.',
          say: 'And do you have an adapter? Our charger doesn\'t fit the plug.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> No problem. I\'ll bring an adapter with the pillows.',
          say: 'No problem. I\'ll bring an adapter with the pillows.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Wonderful. One more thing — could you call us a taxi '
            + 'for eight tomorrow morning?',
          say: 'Wonderful. One more thing — could you call us a taxi for eight '
            + 'tomorrow morning?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. I\'ll arrange the taxi for eight. Is there '
            + 'anything else?',
          say: 'Of course. I\'ll arrange the taxi for eight. Is there anything else?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> No, that\'s everything. Thank you so much!',
          say: 'No, that\'s everything. Thank you so much!',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Guest:</b> Excuse me. My father uses a wheelchair. Is your hotel '
            + 'accessible?',
          say: 'Excuse me. My father uses a wheelchair. Is your hotel accessible?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Yes, of course. We have a ramp at the entrance and a '
            + 'lift to every floor. I\'ll give you a room on the ground floor, near '
            + 'the lift.',
          say: 'Yes, of course. We have a ramp at the entrance and a lift to every '
            + 'floor. I\'ll give you a room on the ground floor, near the lift.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> That\'s very kind. And is the bathroom accessible?',
          say: 'That\'s very kind. And is the bathroom accessible?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Yes, the ground-floor rooms have wide doors and a '
            + 'special bathroom. I\'ll make sure everything is ready before you '
            + 'arrive.',
          say: 'Yes, the ground-floor rooms have wide doors and a special bathroom. '
            + 'I\'ll make sure everything is ready before you arrive.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you so much. That\'s a great relief.',
          say: 'Thank you so much. That\'s a great relief.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> It\'s our pleasure. Everyone is welcome here. If you '
            + 'need anything at all, just call reception.',
          say: 'It\'s our pleasure. Everyone is welcome here. If you need anything at '
            + 'all, just call reception.',
          role: 'lina',
          who: 'Lina'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 8 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'Why do the children need a blanket?',
            model: 'The children feel cold.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why does the guest need an adapter?',
            model: 'Their charger doesn\'t fit the plug.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina say she will bring with the pillows?',
            model: 'An adapter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is the taxi for?',
            model: 'Eight tomorrow morning.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['How many pillows does the guest ask for? (two)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 8 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'The children feel hot.',
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
          q: 'Lina will bring an adapter.',
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
          q: 'The taxi is for eight tomorrow morning.',
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
          q: 'Lina refuses to help.',
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
      bookRef: 'Unit 8 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What does the guest\'s father use?',
            model: 'The children feel cold.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the hotel have for accessibility? (name two things)',
            model: 'Their charger doesn\'t fit the plug.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which room will Lina give them, and why?',
            model: 'An adapter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina promise to do before they arrive?',
            model: 'Eight tomorrow morning.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
