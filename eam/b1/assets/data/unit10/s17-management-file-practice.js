/* Unit 10 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s17', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 10.',
  video: 'u10v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 10 · Part 7', type: 'cloze',
      title: 'Controlled Practice — Reporting the News',
      instruction: 'Complete with said, told, asked, or that.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Mr Aboud [[1]] he was happy.' + '<br>'
        + '2. The bulletin [[2]] us to update the software.' + '<br>'
        + '3. Maher [[3]] if the training was finished.' + '<br>'
        + '4. Rana said [[4]] the car was ready.' + '<br>'
        + '</div>',
      answers: {
        '1': ['said'],
        '2': ['told'],
        '3': ['asked'],
        '4': ['that']
      },
      bank: ['said', 'told', 'asked', 'that'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>said</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>told</i>, <i>asked</i> in the bank.',
        '2': '<b>told</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>said</i>, <i>asked</i> in the bank.',
        '3': '<b>asked</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>said</i>, <i>told</i> in the bank.',
        '4': '<b>that</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>said</i>, <i>told</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 10 · Part 7', type: 'roleplay',
      title: 'Role-Play — Running the Team Meeting',
      instruction: 'In small groups. One is the manager (Maher); the others are the team. Use '
        + 'the model and cards.',
      scene: 'u10-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'nabil', label: 'Card B · Nabil' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): report the customer feedback, the manufacturer’s '
        + 'instruction, the training, and the campaign' },
                { label: 'Card B', text: 'Team: ask when things start and who will do what' }],
      remember: ['Model exchange — Maher: The customers said the service was fast, and Mr '
        + 'Aboud recommended us. The manufacturer told us to update the software and '
        + 'asked us to record it. — Team: When do we start? — Maher: From Monday. '
        + 'Lina will teach the new model next week.',
        'Stretch: two pieces of news disagree (a customer wants one thing, the '
        + 'manufacturer asks another) — report both and decide how to handle it'],
      minWords: 30,
      modelScene: { id: 'u10-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'In small groups. One is the manager (Maher); the others are the team. Use '
        + 'the model and cards.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Maher: The customers said the service was fast, and Mr Aboud recommended '
        + 'us. The manufacturer told us to update the software and asked us to record '
        + 'it. — Team: When do we start? — Maher: From Monday. Lina will teach the '
        + 'new model next week.'],
        criteria: [{ t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 10 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write the minutes (notes) of the service-team meeting. '
        + 'Report the news in reported speech, and list the actions.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write the minutes (notes) of the service-team meeting. '
        + 'Report the news in reported speech, and list the actions.',
        words: [],
        must: ['reported speech used?', 'the three groups + campaign?', 'clear actions?', '50–80 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write the minutes (notes) of the service-team meeting. '
        + 'Report the news in reported speech, and list the actions.',
        grammar: 'Reported speech',
        reader: 'the teacher',
        must: ['reported speech used?', 'the three groups + campaign?', 'clear actions?', '50–80 words?', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Reported speech',
        minWords: 40,
        taught: ['Passing on what a customer said, what the manufacturer sent, and what the '
        + 'team decided — in your own words, accurately.'],
        task: 'You are Maher. Write the minutes (notes) of the service-team meeting. '
        + 'Report the news in reported speech, and list the actions.',
        parts: ['reported speech used?', 'the three groups + campaign?', 'clear actions?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'reported speech used?' },
                   { t: 'the three groups + campaign?' },
                   { t: 'clear actions?' },
                   { t: '50–80 words?' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' }]
      }
    }
  ]
});
