/* Unit 8 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a policy on special needs and say '
  + 'what it allows.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 8 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'How does a guest feel when they hear \'yes\'? And \'no\'?',
            model: '\'How can we do this?\'',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When is a promise \'good\'?',
            model: '\'Yes\' → valued and safe; \'no\' → like a problem.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does it mean to \'anticipate\' a special need? Give an example.',
            model: 'When you keep it.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things should you do when the answer must be \'no\'?',
            model: 'To prepare for a need before it is asked — e.g. prepare an accessible '
              + 'room in advance / keep a cot ready.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is \'the real art of handling requests\'?',
            model: 'Apologise, give a reason, offer an alternative.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the first thought of the best staff when a guest asks for '
        + 'something? (How can we do this?)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 8 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The \'power of yes\' means staff ask… A) \'Can we?\' B) \'How can '
            + 'we?\' C) \'Why should we?\' D) nothing [[1]]'
        + '<br>'
        + '2. A promise is only good if you… A) forget it B) keep it C) change '
            + 'it D) write it down [[2]]'
        + '<br>'
        + '3. The best hotels … special needs. A) ignore B) refuse C) anticipate '
            + 'D) charge for [[3]]'
        + '<br>'
        + '4. A kind \'no\' includes an apology, a reason, and… A) an argument '
            + 'B) an alternative C) silence D) a bill [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['C'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 8 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. to think of and prepare for something before it is asked → [[1]]'
        + '<br>'
        + '2. a different choice offered instead → [[2]]'
        + '<br>'
        + '3. things that can cause an allergy → [[3]]'
        + '</div>',
      answers: {
        '1': ['anticipate'],
        '2': ['alternative'],
        '3': ['allergens']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>anticipate</b>',
        '2': '<b>alternative</b>',
        '3': '<b>allergens</b>'
      }
    }
  ]
});
