/* Unit 1 §5 — Part 1 - Practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s05', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 1 - Practice', part: '1', section: '5',
          lesson: 'Part 1 - Practice', title: 'Part 1 - Practice' },
  objective: 'By the end of Part 1 you can use this unit\'s seven reception and protocol '
        + 'terms correctly, read a visitor\'s role card to work out which department '
        + 'should receive them and what they need before they proceed, and complete a '
        + 'professional sentence with the right term.',
  prev: 's04-role-cards', prevLabel: 'Part 1 - Role cards',
  next: 's06-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1C',
      bookRef: 'Unit 1 · Part 1 · 1C',
      type: 'discuss',
      title: 'Group Discussion – Which Department?',
      instruction: 'For each of the three visitors in exercise 1B, discuss in small groups: '
        + 'Which department handles them? What should the reception officer say? What '
        + 'documents or steps are required before the visitor proceeds? (Aim for 3–4 '
        + 'sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'Which department handles Pierre Moreau and what does the reception officer '
          + 'need to do?' },
        { q: 'Which department handles Ms. Osei and what steps are needed?' },
        { q: 'Which department handles Mr. Watanabe and what specific process does he '
          + 'need to follow?' }],
      ideas: ['Which department handles Pierre Moreau and what does the reception officer '
          + 'need to do?',
        'Which department handles Ms. Osei and what steps are needed?',
        'Which department handles Mr. Watanabe and what specific process does he '
          + 'need to follow?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Present simple and present continuous',
        task: 'For each of the three visitors in exercise 1B, discuss in small groups: '
        + 'Which department handles them? What should the reception officer say? What '
        + 'documents or steps are required before the visitor proceeds? (Aim for 3–4 '
        + 'sentences per answer.)',
        parts: ['Which department handles Pierre Moreau and what does the reception officer '
          + 'need to do?',
        'Which department handles Ms. Osei and what steps are needed?',
        'Which department handles Mr. Watanabe and what specific process does he '
          + 'need to follow?'],
        example: ['B1 target — Pierre Moreau visits the Economic Affairs Office. The officer '
            + 'checks his name against the appointment list and asks for his embassy ID. '
            + 'Then the officer issues a visitor badge and contacts an escort from '
            + 'Economic Affairs.',
          'B2 extension — Economic Affairs Office. The officer checks his name '
            + 'against the appointment log, requests his embassy ID, issues a visitor '
            + 'badge, and either calls an escort from Economic Affairs or accompanies him '
            + 'to the correct floor. French Embassy credentials are noted in the visitor '
            + 'register.',
          'B1 target — Ms. Osei visits the Humanitarian Liaison team, under Political '
            + 'Affairs. The officer checks her UNHCR ID and gives her a visitor badge. '
            + 'Then the officer notifies the Humanitarian Liaison Officer and offers her '
            + 'a comfortable place to wait.',
          'B2 extension — Humanitarian Liaison, under Political Affairs. As a UN '
            + 'official, her security procedure involves ID verification and a visitor '
            + 'badge. The reception officer should notify the Humanitarian Liaison '
            + 'Officer and offer a comfortable waiting area with refreshments — UN '
            + 'coordination meetings are institutionally important.',
          'B1 target — Mr. Watanabe visits the Press and Information Office. He must '
            + 'submit his press credentials and a letter from NHK. The reception officer '
            + 'gives him the accreditation form and directs him to the Press Office.',
          'B2 extension — Press and Information Office. Journalists require a '
            + 'specific accreditation process — he must submit his press credentials, a '
            + 'letter from NHK confirming his assignment, and a list of the events he '
            + 'intends to cover. The reception officer should give him the press '
            + 'accreditation form and direct him to the second floor. He should also be '
            + 'told clearly that accreditation is processed by the Press Office itself — '
            + 'not at reception, so he knows where the decision will be taken.'],
        criteria: [{ t: 'Which department handles Pierre Moreau and what does the reception officer '
            + 'need to do?' },
          { t: 'Which department handles Ms. Osei and what steps are needed?' },
          { t: 'Which department handles Mr. Watanabe and what specific process does he '
            + 'need to follow?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Part 1'],
      ref: '1D',
      bookRef: 'Unit 1 · Part 1 · 1D',
      type: 'cloze',
      title: 'Vocabulary Practice: Using the Words in Sentences',
      instruction: 'Complete each sentence with the correct word or phrase from the list '
        + 'below. Word Bank:',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The [[1]] greeted the ambassador at the entrance and escorted her to '
          + 'the minister\'s reception room.'
        + '<br>'
        + '2. Citizens living abroad can access [[2]] at the nearest embassy or '
          + 'consulate in their country of residence.'
        + '<br>'
        + '3. The commercial [[3]] from the German Embassy visited the Economic '
          + 'Affairs Office to discuss bilateral trade opportunities.'
        + '<br>'
        + '4. The newly appointed French ambassador will complete his formal [[4]] to '
          + 'the foreign minister next Tuesday morning.'
        + '<br>'
        + '5. The ministry is preparing a comprehensive three-day program for the '
          + 'Italian trade minister\'s [[5]] to Hanoi.'
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
