/* Unit 8 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the special requests a hotel '
  + 'receives, and say which can be met at once.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 8 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 8.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 8.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. What small requests do hotel guests often make? (name two)',
          say: '1. What small requests do hotel guests often make? (name two)',
          role: 'course'
        },
        {
          h: '2. What does a guest in a wheelchair need from a hotel?',
          say: '2. What does a guest in a wheelchair need from a hotel?',
          role: 'course'
        },
        {
          h: '3. Why is it important to keep a promise to a guest?',
          say: '3. Why is it important to keep a promise to a guest?',
          role: 'course'
        },
        {
          h: 'Every guest is different, and every guest has needs. Some needs are '
            + 'small: an extra pillow, an iron, a phone charger. Some are bigger: a '
            + 'room for a guest in a wheelchair, a cot for a baby, or food without '
            + 'nuts for a guest with an allergy. A great hotel treats every request '
            + '— big or small — as important.',
          say: 'Every guest is different, and every guest has needs. Some needs are '
            + 'small: an extra pillow, an iron, a phone charger. Some are bigger: a '
            + 'room for a guest in a wheelchair, a cot for a baby, or food without '
            + 'nuts for a guest with an allergy. A great hotel treats every request '
            + '— big or small — as important.',
          role: 'course'
        },
        {
          h: 'The secret is a simple attitude: say “yes” whenever you can, and when '
            + 'you promise something, keep your promise. If a guest asks for extra '
            + 'towels, the best answer is not “maybe” or “I think so.” It is: “Of '
            + 'course. I\'ll bring them right away.” And then you do bring them, '
            + 'right away. A promise kept builds trust; a promise broken destroys '
            + 'it.',
          say: 'The secret is a simple attitude: say “yes” whenever you can, and when '
            + 'you promise something, keep your promise. If a guest asks for extra '
            + 'towels, the best answer is not “maybe” or “I think so.” It is: “Of '
            + 'course. I\'ll bring them right away.” And then you do bring them, '
            + 'right away. A promise kept builds trust; a promise broken destroys '
            + 'it.',
          role: 'course'
        },
        {
          h: 'This week, Lina is learning to handle requests and special needs. '
            + '“Listen carefully, promise only what you can do, and then do it,” '
            + 'says Mr. Nabil. “When you say \'I\'ll take care of it,\' the guest '
            + 'must believe you — because you will.”',
          say: 'This week, Lina is learning to handle requests and special needs. '
            + '“Listen carefully, promise only what you can do, and then do it,” '
            + 'says Mr. Nabil. “When you say \'I\'ll take care of it,\' the guest '
            + 'must believe you — because you will.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 8 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'Give one example of a bigger, special need.',
            model: '(any) a room in a wheelchair, a cot for a baby, food without nuts.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does a great hotel treat every request?',
            model: 'As important — big or small.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the best answer to a request for extra towels?',
            model: '\'Of course. I\'ll bring them right away.\'',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a kept promise build? What does a broken promise do?',
            model: 'A kept promise builds trust; a broken promise destroys it.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does Mr. Nabil tell Lina to do?',
            model: 'Listen carefully, promise only what you can do, and then do it.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Give one example of a small request. (an extra pillow / an iron / a charger)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 8 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'An extra pillow is a small request.',
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
          q: '\'Maybe\' is the best answer to a guest request.',
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
          q: 'A kept promise builds trust.',
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
          q: 'You should promise only what you can do.',
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
          q: 'A broken promise builds trust.',
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
    }
  ]
});
