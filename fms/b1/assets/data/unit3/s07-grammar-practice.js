/* Unit 3 §7 — Part 2 - Grammar, practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s07', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 2 - Grammar, practice', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'By the end of Part 2 you can tell the active voice from the passive in '
        + 'official writing, form the passive in the tenses this unit uses, correct '
        + 'passive errors - including recognising the sentence that is already '
        + 'correct and explaining why - and use the passive to say what a ministry '
        + 'has done without naming who did it.',
  prev: 's06-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's08-grammar-speaking', nextLabel: 'Part 2 - Grammar, speaking',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2C',
      bookRef: 'Unit 3 · Part 2 · 2C',
      type: 'cloze',
      title: 'Guided Practice',
      instruction: 'Complete each sentence with the correct passive form of the verb in '
        + 'brackets.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Diplomatic visa processing [[1]] (manage) by the Consular Affairs '
          + 'Section of the Ministry of Foreign Affairs.'
        + '<br>'
        + '2. The bilateral cooperation framework [[2]] (sign) during a formal '
          + 'ceremony attended by both foreign ministers.'
        + '<br>'
        + '3. A joint technical monitoring committee [[3]] (establish) to oversee the '
          + 'implementation of development programs in priority regions.'
        + '<br>'
        + '4. Returning-citizen programs [[4]] (coordinate) with UNHCR and IOM to '
          + 'ensure safe, voluntary, and dignified return for nationals living abroad.'
        + '<br>'
        + '5. A joint communiqué [[5]] (issue) at the end of the ministerial meeting, '
          + 'confirming the two countries\' commitment to the bilateral cooperation '
          + 'framework.'
        + '<br>'
        + '6. Diplomatic ties [[6]] (strengthen) with more than twenty partner '
          + 'countries over the past eighteen months.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
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
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '6': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2D',
      bookRef: 'Unit 3 · Part 2 · 2D',
      type: 'editor',
      title: 'Error Correction',
      instruction: 'Find and correct the passive voice error in each sentence. Note: one '
        + 'sentence is already correct — identify it and explain why it is correct.',
      write: true,
      items: [{ wrong: 'The bilateral agreement was signed by the two foreign ministers last '
            + 'Tuesday.',
          accept: ['The regional integration process has been accelerated by the signing of '
              + 'agreements with three neighbouring states.'],
          why: 'The repaired sentence is “The regional integration process has been '
            + 'accelerated by the signing of agreements with three neighbouring states.”. '
            + 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'A new development fund have been established to support infrastructure '
            + 'programs in the southern regions.',
          accept: ['A new development fund have been established to support infrastructure '
              + 'programs in the southern regions.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The press conference is been organizing by the Press and Information '
            + 'Office right now.',
          accept: ['The press conference is been organizing by the Press and Information '
              + 'Office right now.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The regional integration process was been accelerated by the signing of '
            + 'agreements with three neighbouring states.',
          accept: ['The regional integration process was been accelerated by the signing of '
              + 'agreements with three neighbouring states.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
