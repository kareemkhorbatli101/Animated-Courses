/* Unit 5 §5 — Part 1 - Practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s05', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 1 - Practice', part: '1', section: '5',
          lesson: 'Part 1 - Practice', title: 'Part 1 - Practice' },
  objective: 'By the end of Part 1 you can use this unit\'s seven investment and '
        + 'facilitation terms correctly, read an investor\'s role card to identify '
        + 'their sector and what they need from the ministry, and match an investor '
        + 'to the ministry resources that can actually help them.',
  prev: 's04-role-cards', prevLabel: 'Part 1 - Role cards',
  next: 's06-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1C',
      bookRef: 'Unit 5 · Part 1 · 1C',
      type: 'discuss',
      title: 'Group Discussion – Matching Investors to Ministry Resources',
      instruction: 'For each of the three investors in exercise 1B, discuss in small groups: '
        + 'Which office or department should handle them? What information or '
        + 'documentation does each investor need before they can proceed? What '
        + 'concerns might each investor have, and how can the Ministry address them? '
        + '(Aim for 3–4 sentences per answer.)',
      minWords: 12,
      questions: [{ q: 'Which office handles Klaus Richter and what does he specifically need?' },
        { q: 'What does Ms. Al-Sayed specifically need and what concerns is she likely '
          + 'to bring?' },
        { q: 'How is Mr. Chen\'s visit different from the commercial investors\' visits, '
          + 'and what does it require from the Ministry?' }],
      ideas: ['Which office handles Klaus Richter and what does he specifically need?',
        'What does Ms. Al-Sayed specifically need and what concerns is she likely '
          + 'to bring?',
        'How is Mr. Chen\'s visit different from the commercial investors\' visits, '
          + 'and what does it require from the Ministry?'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Conditionals and the language of commitment',
        task: 'For each of the three investors in exercise 1B, discuss in small groups: '
        + 'Which office or department should handle them? What information or '
        + 'documentation does each investor need before they can proceed? What '
        + 'concerns might each investor have, and how can the Ministry address them? '
        + '(Aim for 3–4 sentences per answer.)',
        parts: ['Which office handles Klaus Richter and what does he specifically need?',
        'What does Ms. Al-Sayed specifically need and what concerns is she likely '
          + 'to bring?',
        'How is Mr. Chen\'s visit different from the commercial investors\' visits, '
          + 'and what does it require from the Ministry?'],
        example: ['Klaus Richter should be handled by the Economic Affairs Office with the '
            + 'Investment Promotion Agency. He needs the investment law, the free zone '
            + 'regulations, the profit repatriation provisions, and the arbitration '
            + 'clause — in writing. He also needs a named case officer and a processing '
            + 'timeline.',
          'Ms. Al-Sayed also goes to Economic Affairs, but with the Ministry of '
            + 'Agriculture involved from the first meeting. She needs the water rights '
            + 'framework and the land tenure position in law. Her concerns will be '
            + 'political stability over a long horizon and whether the water guarantee '
            + 'survives a change of government.',
          'Mr. Chen is different because UNDP is not investing. He needs a policy '
            + 'counterpart — not an investment officer, and a conversation about '
            + 'framework design rather than about sectors. Routing him through the '
            + 'commercial process wastes his time and ours.'],
        criteria: [{ t: 'Which office handles Klaus Richter and what does he specifically need?' },
          { t: 'What does Ms. Al-Sayed specifically need and what concerns is she likely '
            + 'to bring?' },
          { t: 'How is Mr. Chen\'s visit different from the commercial investors\' visits, '
            + 'and what does it require from the Ministry?' }]
      }
    },
    {
      id: 'c2',
      covers: ['Part 1'],
      ref: '1D',
      bookRef: 'Unit 5 · Part 1 · 1D',
      type: 'cloze',
      title: 'Vocabulary Practice: Using the Words in Sentences',
      instruction: 'Complete each sentence with the correct word or phrase from the list '
        + 'below. Word Bank:',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Before signing any agreement, Richter Infrastructure GmbH carried out a '
          + 'comprehensive [[1]] of the country\'s legal and regulatory environment.'
        + '<br>'
        + '2. The Ministry of Foreign Affairs encouraged the German delegation to '
          + 'visit the Dire Dawa [[2]], where foreign companies benefit from reduced '
          + 'taxes and simplified customs procedures.'
        + '<br>'
        + '3. After three months of negotiations, both parties signed a [[3]], '
          + 'confirming their commitment to proceed with the infrastructure joint '
          + 'venture project.'
        + '<br>'
        + '4. The country\'s improving [[4]] is attracting a growing number of '
          + 'European and Gulf investors who had previously taken a wait-and-see '
          + 'approach.'
        + '<br>'
        + '5. The Gulf Development Fund proposed a [[5]] with a national agricultural '
          + 'company, dividing ownership equally and sharing both the investment and '
          + 'the returns.'
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
