/* Unit 8 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short message passing a special '
  + 'request to another department.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 8 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. and Mrs. Karam, thank you for your requests. We have put a '
            + 'cot in your room for the baby, and we\'ve left extra pillows and a '
            + 'blanket. I\'ll send an adapter up this evening, and I\'ll arrange '
            + 'your taxi for eight o\'clock tomorrow morning. If you need anything '
            + 'else, please call reception. We hope you have a lovely stay. Kind '
            + 'regards, Lina.',
          say: 'Dear Mr. and Mrs. Karam, thank you for your requests. We have put a '
            + 'cot in your room for the baby, and we\'ve left extra pillows and a '
            + 'blanket. I\'ll send an adapter up this evening, and I\'ll arrange '
            + 'your taxi for eight o\'clock tomorrow morning. If you need anything '
            + 'else, please call reception. We hope you have a lovely stay. Kind '
            + 'regards, Lina.',
          role: 'course'
        },
        {
          h: 'Hi Salma, room 402 has a guest with a nut allergy. Please make sure '
            + 'the kitchen prepares only allergy-safe meals for them, and put a note '
            + 'on their file. I\'ll tell the restaurant team too. Thanks, Lina.',
          say: 'Hi Salma, room 402 has a guest with a nut allergy. Please make sure '
            + 'the kitchen prepares only allergy-safe meals for them, and put a note '
            + 'on their file. I\'ll tell the restaurant team too. Thanks, Lina.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 8 · P6 A',
      visual: { img: '../assets/figures/fig-8.5.png', caption: 'A guest-request log: room, request, action, done.' },
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What have the staff already done for the baby?',
            model: 'Put a cot in the room.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What will Lina send up this evening?',
            model: 'An adapter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is the taxi?',
            model: 'Eight o\'clock (tomorrow morning).',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 8 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) thank the guest 2) what you have already done 3) what you '
              + 'will do (use will) 4) a warm closing',
            say: 'Plan: 1) thank the guest 2) what you have already done 3) what you '
              + 'will do (use will) 4) a warm closing',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. A guest has made two requests and has one special '
  + 'need. Write a short note (40–60 words) confirming what you have done '
  + 'and what you will do. Use will at least twice.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
