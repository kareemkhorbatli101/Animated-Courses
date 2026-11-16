/* Unit 10 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s07', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 10.',
  video: 'u10v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 10 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'She said me the car was ready.',
          accept: ['She told me the car was ready.'],
          why: 'The repaired sentence is “She told me the car was ready”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'He asked is the car ready.',
          accept: ['He asked if the car was ready.'],
          why: 'The repaired sentence is “He asked if the car was ready”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'Maher told to change the oil.',
          accept: ['Maher told me to change the oil.'],
          why: 'The repaired sentence is “Maher told me to change the oil”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'Rana said the parts will arrive.',
          accept: ['Rana said the parts would arrive.'],
          why: 'The repaired sentence is “Rana said the parts would arrive”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 10 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Report two things: one statement someone said, and one question someone '
        + 'asked, this week.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Report two things: one statement someone said, and one question someone '
        + 'asked, this week.',
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
        task: 'Report two things: one statement someone said, and one question someone '
        + 'asked, this week.',
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
        task: 'Report two things: one statement someone said, and one question someone '
        + 'asked, this week.',
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
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 10 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which is correct reported speech?',
          options: [
            { t: 'She said the car was ready.', ok: true,
              why: 'Right — She said the car was ready. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'She said me the car was ready.', ok: false,
              why: 'Not this one. She said me the car was ready is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is correct reported speech”.' },
            { t: 'She told the car was ready.', ok: false,
              why: 'Not this one. She told the car was ready is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is correct reported speech”.' },
            { t: 'She say the car is ready.', ok: false,
              why: 'Not this one. She say the car is ready is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which is correct reported speech”.' }
          ]
        },
        {
          q: '2. Which is a correct reported question?',
          options: [
            { t: 'He asked is the car ready.', ok: false,
              why: 'Not this one. He asked is the car ready is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which is a correct reported question”.' },
            { t: 'He asked the car was ready.', ok: false,
              why: 'Not this one. He asked the car was ready is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is a correct reported question”.' },
            { t: 'He asked if the car was ready.', ok: true,
              why: 'Right — He asked if the car was ready. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'He asked if is the car ready.', ok: false,
              why: 'Not this one. He asked if is the car ready is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is a correct reported question”.' }
          ]
        }
      ]
    }
  ]
});
