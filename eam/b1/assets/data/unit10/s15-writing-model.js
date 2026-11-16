/* Unit 10 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s15', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 10.',
  video: 'u10v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 10 · Part 6', type: 'writer',
      title: 'Report a Conversation (50–70 words)',
      instruction: 'Report a conversation between a customer and an advisor. Use reported '
        + 'speech (said, told, asked).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Report a conversation between a customer and an advisor. Use reported '
        + 'speech (said, told, asked).',
        words: ['He said (that)…', 'He told … (that)…', 'He asked if…', 'She said…'],
        must: ['said / told / asked used?', 'backshift (is→was, will→would)?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        planPlaceholder: 'He said (that)… He told Rana (that)… He asked if… Rana said…'
      },
      aiCheck: {
        task: 'Report a conversation between a customer and an advisor. Use reported '
        + 'speech (said, told, asked).',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['said / told / asked used?', 'backshift (is→was, will→would)?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'Report a conversation between a customer and an advisor. Use reported '
        + 'speech (said, told, asked).',
        parts: ['said / told / asked used?', 'backshift (is→was, will→would)?', '50–70 words?'],
        example: ['He said (that)… He told Rana (that)… He asked if… Rana said…'],
        criteria: [{ t: 'said / told / asked used?' },
                   { t: 'backshift (is→was, will→would)?' },
                   { t: '50–70 words?' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 10 · Part 6', type: 'writer',
      title: 'Why Good Communication Matters (50–70 words)',
      instruction: 'Write why good communication is important in a service department. Give '
        + 'reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why good communication is important in a service department. Give '
        + 'reasons.',
        words: ['… is important because…', 'the customer feels valued', 'keeps the standard high', 'information flows in every direction'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why good communication is important in a service department. Give '
        + 'reasons.',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'Write why good communication is important in a service department. Give '
        + 'reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 10 · Part 6', type: 'writer',
      title: 'Team-Meeting Notes (50–70 words)',
      instruction: 'Write short notes from a team meeting. Report what the customers, the '
        + 'manufacturer, and the team said. Use reported speech.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write short notes from a team meeting. Report what the customers, the '
        + 'manufacturer, and the team said. Use reported speech.',
        words: [],
        must: ['reported speech throughout?', 'three groups covered?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        planPlaceholder: 'The customers: … said… The manufacturer: … told us to… Training: … said… '
        + 'would…'
      },
      aiCheck: {
        task: 'Write short notes from a team meeting. Report what the customers, the '
        + 'manufacturer, and the team said. Use reported speech.',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['reported speech throughout?', 'three groups covered?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'Write short notes from a team meeting. Report what the customers, the '
        + 'manufacturer, and the team said. Use reported speech.',
        parts: ['reported speech throughout?', 'three groups covered?', '50–70 words?'],
        example: ['The customers: … said… The manufacturer: … told us to… Training: … said… '
        + 'would…'],
        criteria: [{ t: 'reported speech throughout?' },
                   { t: 'three groups covered?' },
                   { t: '50–70 words?' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 10 · Part 6', type: 'writer',
      title: 'Reflection — What I Have Learned (50–70 words)',
      instruction: 'This is the last unit. Write about what you have learned in this course, '
        + 'and how it will help you at work.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'This is the last unit. Write about what you have learned in this course, '
        + 'and how it will help you at work.',
        words: [],
        must: ['present perfect used?', 'clear and personal?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'This is the last unit. Write about what you have learned in this course, '
        + 'and how it will help you at work.',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['present perfect used?', 'clear and personal?', '50–70 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'This is the last unit. Write about what you have learned in this course, '
        + 'and how it will help you at work.',
        parts: ['present perfect used?', 'clear and personal?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'present perfect used?' },
                   { t: 'clear and personal?' },
                   { t: '50–70 words?' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' }]
      }
    }
  ]
});
