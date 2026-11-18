/* Unit 9 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read an account of a complaint and say '
  + 'where it was handled well and where it was not.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 9 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'Why can a well-handled complaint make a guest more loyal?',
            model: 'Because it shows the guest that the hotel truly cares when things go wrong.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What are the four steps of good service recovery?',
            model: 'Listen, apologise, solve, follow up.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Give two things you should NEVER do.',
            model: '(any two) argue, make excuses, blame a colleague, say \'that\'s not '
              + 'my job\', take it personally.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who is the guest really angry at?',
            model: 'At the problem, not at you.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is every complaint \'a chance\'?',
            model: 'It is a second chance to earn the guest\'s trust and return.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the \'service recovery paradox\'? (a guest whose problem is '
        + 'solved well can become more loyal than one who never had a problem)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 9 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The \'service recovery paradox\' is… A) strange but true B) always '
            + 'false C) a kind of bill D) a room [[1]]'
        + '<br>'
        + '2. The first step of service recovery is to… A) argue B) listen C) '
            + 'leave D) charge [[2]]'
        + '<br>'
        + '3. You should never… A) apologise B) listen C) make excuses D) solve '
            + 'the problem [[3]]'
        + '<br>'
        + '4. The guest is angry at the… A) receptionist B) problem C) manager '
            + 'D) other guests [[4]]'
        + '</div>',
      answers: {
        '1': ['A'],
        '2': ['B'],
        '3': ['C'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>A</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 9 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. faithful; a customer who returns again and again → [[1]]'
        + '<br>'
        + '2. to stop someone while they are speaking → [[2]]'
        + '<br>'
        + '3. a reason given to avoid blame → [[3]]'
        + '</div>',
      answers: {
        '1': ['loyal'],
        '2': ['interrupt'],
        '3': ['excuse']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>loyal</b>',
        '2': '<b>interrupt</b>',
        '3': '<b>excuse</b>'
      }
    }
  ]
});
