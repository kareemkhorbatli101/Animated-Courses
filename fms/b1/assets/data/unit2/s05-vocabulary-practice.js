/* Unit 2 §5 — Part 1 - Practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s05', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 1 - Practice', part: '1', section: '5',
          lesson: 'Part 1 - Practice', title: 'Part 1 - Practice' },
  objective: 'By the end of Part 1 you can use this unit\'s seven coordination and '
        + 'protocol terms correctly, arrange a room, interpretation and equipment '
        + 'from the details on a scenario card, and say what a protocol brief must '
        + 'contain.',
  prev: 's04-role-cards', prevLabel: 'Part 1 - Role cards',
  next: 's06-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1C',
      bookRef: 'Unit 2 · Part 1 · 1C',
      type: 'discuss',
      title: 'Group Discussion – What Must a Protocol Brief Include?',
      instruction: 'In small groups, discuss the following questions about coordination '
        + 'documents and procedures. Share your conclusions with the class. (Aim for '
        + '3–4 sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'What must a protocol brief include to be genuinely useful for a delegation '
          + 'lead?' },
        { q: 'When should the agenda be sent to the visiting delegation, and what '
          + 'problems arise if it is sent too late?' },
        { q: 'What problems can arise from last-minute coordination failures, and how '
          + 'should a liaison officer respond professionally?' }],
      ideas: ['What must a protocol brief include to be genuinely useful for a delegation '
          + 'lead?',
        'When should the agenda be sent to the visiting delegation, and what '
          + 'problems arise if it is sent too late?',
        'What problems can arise from last-minute coordination failures, and how '
          + 'should a liaison officer respond professionally?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Modal verbs for requests and arrangements',
        task: 'In small groups, discuss the following questions about coordination '
        + 'documents and procedures. Share your conclusions with the class. (Aim for '
        + '3–4 sentences per answer.)',
        parts: ['What must a protocol brief include to be genuinely useful for a delegation '
          + 'lead?',
        'When should the agenda be sent to the visiting delegation, and what '
          + 'problems arise if it is sent too late?',
        'What problems can arise from last-minute coordination failures, and how '
          + 'should a liaison officer respond professionally?'],
        example: ['A useful protocol brief must include the full names, correct titles, and '
            + 'nationalities of everyone attending. It should also state the key '
            + 'positions of the other side and any sensitive points to avoid. The '
            + 'delegation lead needs it the evening before the meeting — not on the '
            + 'morning.',
          'The agenda should be sent at least five days before the session, and the '
            + 'final version at least 48 hours before. If it arrives too late, the '
            + 'visiting delegation cannot prepare their technical positions and the '
            + 'meeting becomes a general discussion instead of a working session.',
          'Common last-minute failures are room changes, interpretation that was not '
            + 'booked, and security clearances that were not processed in time. The '
            + 'officer should inform the other side immediately, always with a proposed '
            + 'solution, and then confirm in writing.'],
        criteria: [{ t: 'What must a protocol brief include to be genuinely useful for a delegation '
            + 'lead?' },
          { t: 'When should the agenda be sent to the visiting delegation, and what '
            + 'problems arise if it is sent too late?' },
          { t: 'What problems can arise from last-minute coordination failures, and how '
            + 'should a liaison officer respond professionally?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Part 1'],
      ref: '1D',
      bookRef: 'Unit 2 · Part 1 · 1D',
      type: 'cloze',
      title: 'Vocabulary Practice: Using the Words in Sentences',
      instruction: 'Complete each sentence with the correct word or phrase from the list '
        + 'below. Word Bank:',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The liaison officer circulated the meeting [[1]] to all participants '
          + 'two days before the session.'
        + '<br>'
        + '2. The two foreign ministers signed a [[2]] on educational cooperation '
          + 'during the official ceremony.'
        + '<br>'
        + '3. The [[3]] brief included the full names, titles, and nationalities of '
          + 'everyone attending the bilateral working group.'
        + '<br>'
        + '4. The German [[4]] was led by the Deputy Foreign Minister and included '
          + 'three technical specialists.'
        + '<br>'
        + '5. A joint [[5]] was issued after the summit, outlining the agreed '
          + 'priorities in infrastructure and energy cooperation.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '2': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '3': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '4': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '5': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.'
      }
    }
  ]
});
