/* Unit 4 §5 — Part 1 - Practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s05', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 1 - Practice', part: '1', section: '5',
          lesson: 'Part 1 - Practice', title: 'Part 1 - Practice' },
  objective: 'Work through Part 1 - Practice of unit 4.',
  prev: 's04-role-cards', prevLabel: 'Part 1 - Role cards',
  next: 's06-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1C',
      bookRef: 'Unit 4 · Part 1 · 1C',
      type: 'discuss',
      title: 'Group Discussion – Formal Correspondence Norms',
      instruction: 'In small groups, discuss the following questions about formal diplomatic '
        + 'correspondence. Share your conclusions with the class. (Aim for 3–4 '
        + 'sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'What distinguishes formal diplomatic correspondence from semi-formal '
          + 'correspondence? Can you give an example of each?' },
        { q: 'What phrases are used only in very formal diplomatic correspondence and '
          + 'should never appear in a coordination email?' },
        { q: 'What mistakes should never be made in a note verbale, and what do they '
          + 'signal if they occur?' }],
      ideas: ['What distinguishes formal diplomatic correspondence from semi-formal '
          + 'correspondence? Can you give an example of each?',
        'What phrases are used only in very formal diplomatic correspondence and '
          + 'should never appear in a coordination email?',
        'What mistakes should never be made in a note verbale, and what do they '
          + 'signal if they occur?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Formal written structures and conditionals',
        task: 'In small groups, discuss the following questions about formal diplomatic '
        + 'correspondence. Share your conclusions with the class. (Aim for 3–4 '
        + 'sentences per answer.)',
        parts: ['What distinguishes formal diplomatic correspondence from semi-formal '
          + 'correspondence? Can you give an example of each?',
        'What phrases are used only in very formal diplomatic correspondence and '
          + 'should never appear in a coordination email?',
        'What mistakes should never be made in a note verbale, and what do they '
          + 'signal if they occur?'],
        example: ['Formal correspondence, such as a note verbale, is third-person and uses '
            + 'fixed formulas; it is the institution speaking. Semi-formal '
            + 'correspondence, such as a coordination email to a counterpart, is '
            + 'first-person and functional. A note verbale invites an ambassador; an '
            + 'email confirms a room booking.',
          'Some phrases are only for very formal correspondence: "presents its '
            + 'compliments," "has the honor to," "avails itself of this opportunity to '
            + 'renew the assurances of its highest consideration." They should never '
            + 'appear in a coordination email, where they would look like parody.',
          'The most serious mistakes are a wrong name or title, a lapse into the '
            + 'first person, and a missing closing formula. Each signals that the '
            + 'ministry did not check its own document, which is the impression a note '
            + 'verbale exists to prevent.'],
        criteria: [{ t: 'What distinguishes formal diplomatic correspondence from semi-formal '
            + 'correspondence? Can you give an example of each?' },
          { t: 'What phrases are used only in very formal diplomatic correspondence and '
            + 'should never appear in a coordination email?' },
          { t: 'What mistakes should never be made in a note verbale, and what do they '
            + 'signal if they occur?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Part 1'],
      ref: '1D',
      bookRef: 'Unit 4 · Part 1 · 1D',
      type: 'cloze',
      title: 'Vocabulary Practice: Using the Words in Sentences',
      instruction: 'Complete each sentence with the correct word or phrase from the list '
        + 'below. Word Bank:',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The two foreign ministers signed a Protocol of [[1]] covering '
          + 'educational exchange, cultural programs, and trade facilitation.'
        + '<br>'
        + '2. A bilateral investment [[2]] has been established to facilitate German '
          + 'business entry into the national infrastructure market.'
        + '<br>'
        + '3. A joint [[3]] was issued at the conclusion of the summit, outlining the '
          + 'agreed priorities in energy security and economic cooperation.'
        + '<br>'
        + '4. The newly appointed Belgian Ambassador presented her [[4]] letters to '
          + 'the Kazakh foreign minister at a formal ceremony at the ministry.'
        + '<br>'
        + '5. Kazakhstan and France have agreed to establish a new [[5]] committee to '
          + 'oversee the implementation of the Cultural Cooperation Framework signed '
          + 'last year.'
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
