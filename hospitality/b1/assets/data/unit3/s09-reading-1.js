/* Unit 3 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a booking confirmation and check it '
  + 'against what the guest asked for.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 3 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What do you say on the phone in the greeting?',
            model: '\'Good morning, Orient Rose Hotel. How can I help you?\'',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why do you check availability before you promise a room?',
            model: 'So you don\'t promise a room that is not free.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which is the most important step, and why?',
            model: 'Taking the details, because names and dates are easy to get wrong.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What do you do in the \'confirm\' step?',
            model: 'You say the whole booking back to the guest and offer a confirmation.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Give two pieces of advice from the last paragraph.',
            model: '(any two) speak slowly, be polite, follow the steps, repeat and check.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the first step of taking a booking? (the greeting)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 3 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A warm greeting tells the guest they are… A) late B) welcome C) '
            + 'wrong D) leaving [[1]]'
        + '<br>'
        + '2. If there is no free room, you should… A) say nothing B) offer '
            + 'another date or room C) end the call D) give a free room [[2]]'
        + '<br>'
        + '3. Names and dates should be… A) guessed B) written quickly C) '
            + 'repeated and checked D) ignored [[3]]'
        + '<br>'
        + '4. In the \'confirm\' step you… A) say the whole booking back B) ask '
            + 'for money C) start again D) hang up [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['C'],
        '4': ['A']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>A</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 3 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. free rooms for a date → [[1]]'
        + '<br>'
        + '2. to say the booking is correct → [[2]]'
        + '<br>'
        + '3. information like name, dates and room type → [[3]]'
        + '</div>',
      answers: {
        '1': ['availability'],
        '2': ['confirm'],
        '3': ['details']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>availability</b>',
        '2': '<b>confirm</b>',
        '3': '<b>details</b>'
      }
    }
  ]
});
