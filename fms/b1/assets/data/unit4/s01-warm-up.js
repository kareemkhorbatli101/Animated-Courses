/* Unit 4 §1 — Warm Up.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s01', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 4.',
  next: 's02-fluency', nextLabel: 'Warm Up - fluency',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-A',
      bookRef: 'Unit 4 · Warm Up · W-A',
      type: 'discuss',
      title: 'Pair Discussion – Your Country\'s Future in English',
      instruction: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'If you could send one message about your country\'s future to the world in '
          + 'English, what would it be?' },
        { q: 'What is the difference between a note verbale and a business email? Why '
          + 'does this distinction matter for ministry staff?' },
        { q: 'What should your country communicate most clearly to foreign partners in '
          + '2025 and beyond?' }],
      ideas: ['If you could send one message about your country\'s future to the world in '
          + 'English, what would it be?',
        'What is the difference between a note verbale and a business email? Why '
          + 'does this distinction matter for ministry staff?',
        'What should your country communicate most clearly to foreign partners in '
          + '2025 and beyond?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Formal written structures and conditionals',
        task: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['If you could send one message about your country\'s future to the world in '
          + 'English, what would it be?',
        'What is the difference between a note verbale and a business email? Why '
          + 'does this distinction matter for ministry staff?',
        'What should your country communicate most clearly to foreign partners in '
          + '2025 and beyond?'],
        example: ['My country is open and ready to work. We are a reliable partner that keeps '
            + 'its commitments and reports on them honestly. That is the message.',
          'A note verbale is written entirely in the third person and uses fixed '
            + 'formulas. A business email uses the first person and ordinary professional '
            + 'language. Using the wrong one tells the recipient that the sender does not '
            + 'know diplomatic practice.',
          'My country should show that its institutions work, that its commitments '
            + 'are specific — and that it reports honestly on progress. Partners can '
            + 'check all three.'],
        criteria: [{ t: 'If you could send one message about your country\'s future to the world in '
            + 'English, what would it be?' },
          { t: 'What is the difference between a note verbale and a business email? Why '
            + 'does this distinction matter for ministry staff?' },
          { t: 'What should your country communicate most clearly to foreign partners in '
            + '2025 and beyond?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Warm Up',
        'Audio 4.2'],
      ref: 'W-B',
      bookRef: 'Unit 4 · Warm Up · W-B',
      type: 'scene',
      title: 'Group Brainstorm – Types of Written Communication at the Ministry',
      instruction: 'In small groups, sort the nine types of ministry written communication '
        + 'below into three categories. Then add who writes it and its main purpose '
        + 'for each type. Share your answers with the class.Types to categorize:• '
        + 'Note verbale• Memorandum of Understanding (MoU)• Aide-mémoire• Bilateral '
        + 'communiqué• Formal invitation• Congratulatory note• Circular• Press '
        + 'statement• Annual reportCategories:A — Formal inter-governmental documents '
        + '(sent between foreign ministries or governments)B — Public and media '
        + 'documents (sent to international press or the public)C — Internal or '
        + 'coordination documents (sent inside the ministry or to partner '
        + 'institutions)',
      scene: 'u4-wb',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'In small groups, sort the nine types of ministry written communication '
        + 'below into three categories. Then add who writes it and its main purpose '
        + 'for each type. Share your answers with the class.Types to categorize:• '
        + 'Note verbale• Memorandum of Understanding (MoU)• Aide-mémoire• Bilateral '
        + 'communiqué• Formal invitation• Congratulatory note• Circular• Press '
        + 'statement• Annual reportCategories:A — Formal inter-governmental documents '
        + '(sent between foreign ministries or governments)B — Public and media '
        + 'documents (sent to international press or the public)C — Internal or '
        + 'coordination documents (sent inside the ministry or to partner '
        + 'institutions)',
        items: [{ q: '1. What types of English written communication does your ministry produce '
                + 'or receive, and what are the key details for each?',
              accept: ['1. Note verbale — Category A — written by the Protocol or Political '
                  + 'Affairs Directorate, signed institutionally rather than personally; its '
                  + 'purpose is formal inter-governmental communication, in the third person '
                  + 'throughout. 2. Memorandum of Understanding — Category A — drafted jointly '
                  + 'by the relevant technical directorate and the Legal Directorate; it '
                  + 'records agreed intentions and establishes the institutional machinery. 3. '
                  + 'Aide-mémoire — Category A — prepared by the liaison officer after a '
                  + 'meeting; it records what both sides understood to have been agreed. 4. '
                  + 'Bilateral communiqué — Category B — drafted jointly and cleared at '
                  + 'ministerial level; it is the public statement of a meeting\'s outcome. 5. '
                  + 'Formal invitation — Category A — issued by Protocol, in the note verbale '
                  + 'register for inter-governmental events. 6. Congratulatory note — Category '
                  + 'A — from the minister to a counterpart, in the third person, on an '
                  + 'appointment or a national day. 7. Circular — Category C — internal, from a '
                  + 'directorate to ministry staff and missions, conveying procedure. 8. Press '
                  + 'statement — Category B — Press and Information Office, for international '
                  + 'media. 9. Annual report — Category B and C — prepared across directorates, '
                  + 'published for partners and the public and used internally as the record of '
                  + 'the year.'],
              keys: ['types',
                'english'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
