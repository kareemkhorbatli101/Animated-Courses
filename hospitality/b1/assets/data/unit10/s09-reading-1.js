/* Unit 10 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a bill and explain an item on it to '
  + 'a guest who is questioning it.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 10 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'Why does the farewell matter so much?',
            model: 'Because the last impression becomes the lasting impression / people '
              + 'remember the end.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What are the three parts of a great farewell?',
            model: 'Thanks, care, and an invitation (to return).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is honest criticism called \'a gift\'?',
            model: 'Because it shows the hotel how to improve.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How should a hotel treat online reviews?',
            model: 'Read them, thank the reviewers, and reply to criticism with calm and grace.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why are the words \'We hope to see you again\' \'a true beginning\'?',
            model: 'Because a happy farewell is the first step of the guest\'s next visit.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the \'peak-end rule\'? (people judge an experience by its '
        + 'best moment and its final moment)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 10 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. People judge an experience by its peak and its… A) price B) end C) '
            + 'middle D) start only [[1]]'
        + '<br>'
        + '2. A warm farewell after a small problem can… A) ruin the stay B) '
            + 'send the guest home smiling C) cost a lot D) be forgotten [[2]]'
        + '<br>'
        + '3. Honest criticism shows the hotel how to… A) charge more B) improve '
            + 'C) close D) argue [[3]]'
        + '<br>'
        + '4. The guest\'s journey \'comes full…\' A) stop B) circle C) bill D) '
            + 'room [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['B'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>B</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 10 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. the highest, best point of an experience → [[1]]'
        + '<br>'
        + '2. a polite request to come again → [[2]]'
        + '<br>'
        + '3. comments guests write online about a hotel → [[3]]'
        + '</div>',
      answers: {
        '1': ['peak'],
        '2': ['invitation'],
        '3': ['reviews']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>peak</b>',
        '2': '<b>invitation</b>',
        '3': '<b>reviews</b>'
      }
    }
  ]
});
