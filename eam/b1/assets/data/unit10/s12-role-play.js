/* Unit 10 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s12', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 10.',
  video: 'u10v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 10 · Part 4', type: 'roleplay',
      title: 'Reporting Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u10-dialogue4',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'rana', label: 'Card B · Rana' }],
      briefs: [{ label: 'Card A', text: 'Manager: ask what the customer said, what the manufacturer sent, and if '
        + 'the training is finished' },
                { label: 'Card B', text: 'Advisor: report the customer’s words, the manufacturer’s instruction, and '
        + 'the training news (use reported speech)' }],
      remember: ['Model exchange — Manager: What did the customer say? — Advisor: He said he '
        + 'was happy and recommended us. — Manager: And the manufacturer? — Advisor: '
        + 'They told us to update the software and asked us to record it.',
        'Stretch: a customer gave difficult feedback — report it honestly to the '
        + 'team and suggest what you will change'],
      minWords: 30,
      modelScene: { id: 'u10-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Manager: What did the customer say? — Advisor: He said he was happy and '
        + 'recommended us. — Manager: And the manufacturer? — Advisor: They told us '
        + 'to update the software and asked us to record it.'],
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
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 10 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Report the news from a team '
        + 'meeting: what the customers, the manufacturer, and the team said. Use '
        + 'reported speech.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'Prepare a short talk (about one minute). Report the news from a team '
        + 'meeting: what the customers, the manufacturer, and the team said. Use '
        + 'reported speech.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
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
    }
  ]
});
