/* Unit 10 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s04', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 10.',
  video: 'u10v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 10 · Part 1', type: 'quizset',
      title: 'Customer and Manufacturer — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is a service reminder?',
          options: [
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'service reminder”.' },
            { t: 'A fault', ok: false,
              why: 'Not this one. A fault is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a service reminder”.' },
            { t: 'A message that a service is due', ok: true,
              why: 'Right — A message that a service is due. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'A car part', ok: false,
              why: 'Not this one. A car part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a service reminder”.' }
          ]
        },
        {
          q: '2. What is customer satisfaction?',
          options: [
            { t: 'The price', ok: false,
              why: 'Not this one. The price is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'customer satisfaction”.' },
            { t: 'The good feeling when a customer is happy', ok: true,
              why: 'Right — The good feeling when a customer is happy. Check it against the '
        + 'text or the card you met it on: this is stated, not inferred.' },
            { t: 'A bill', ok: false,
              why: 'Not this one. A bill is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is '
        + 'customer satisfaction”.' },
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is '
        + 'customer satisfaction”.' }
          ]
        },
        {
          q: '3. What is a manufacturer bulletin?',
          options: [
            { t: 'A customer’s car', ok: false,
              why: 'Not this one. A customer’s car is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is a manufacturer bulletin”.' },
            { t: 'A type of oil', ok: false,
              why: 'Not this one. A type of oil is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a manufacturer bulletin”.' },
            { t: 'A road', ok: false,
              why: 'Not this one. A road is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'manufacturer bulletin”.' },
            { t: 'A note from the carmaker with news or advice', ok: true,
              why: 'Right — A note from the carmaker with news or advice. Check it against the '
        + 'text or the card you met it on: this is stated, not inferred.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 10 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. We listen to customer [[1]] .' + '<br>'
        + '2. The carmaker started a safety [[2]] .' + '<br>'
        + '3. A happy customer will [[3]] us to friends.' + '<br>'
        + '4. The team goes on [[4]] to learn new skills.' + '<br>'
        + '</div>',
      answers: {
        '1': ['feedback'],
        '2': ['campaign'],
        '3': ['recommend'],
        '4': ['training']
      },
      bank: ['feedback', 'campaign', 'recommend', 'training'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>feedback</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>campaign</i>, <i>recommend</i> in the bank.',
        '2': '<b>campaign</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>feedback</i>, <i>recommend</i> in the bank.',
        '3': '<b>recommend</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>feedback</i>, <i>campaign</i> in the bank.',
        '4': '<b>training</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>feedback</i>, <i>campaign</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 10 · Part 1', type: 'writer',
      title: 'Write About Customer Relations (short)',
      instruction: 'Write two or three sentences about looking after customers. Use three '
        + 'words from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about looking after customers. Use three '
        + 'words from this unit.',
        words: [],
        must: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.', 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.', 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about looking after customers. Use three '
        + 'words from this unit.',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.', 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.', 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'Write two or three sentences about looking after customers. Use three '
        + 'words from this unit.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' }]
      }
    }
  ]
});
