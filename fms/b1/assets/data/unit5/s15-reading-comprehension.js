/* Unit 5 §15 — Part 5 - Comprehension.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s15', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 5 - Comprehension', part: '5', section: '15',
          lesson: 'Part 5 - Comprehension', title: 'Part 5 - Comprehension' },
  objective: 'By the end of Part 5 you can read an investment forum profile for its '
        + 'purpose, its sectors, its delegations and its outcomes, discuss what the '
        + 'forum achieved, and use conditional structures the way investment writing '
        + 'uses them.',
  prev: 's14-reading-profiles', prevLabel: 'Part 5 - Reading',
  next: 's16-writing-models', nextLabel: 'Part 6 - Writing, the models',
  cards: [
    {
    id: 'c1',
    covers: ['Part 5'],
    ref: '5B',
    bookRef: 'Unit 5 · Part 5 · 5B',
    type: 'discuss',
    title: 'Reading Comprehension: Discussion Questions',
    instruction: 'In pairs or small groups, discuss the questions below about the Forum '
        + 'profile. (Aim for 3–4 sentences per answer.)',
    questions: [{
          q: 'What does the participation of 24 countries and 87 companies tell us about '
            + 'the country\'s investment position in 2025?',
          model: 'Twenty-four countries sending delegations suggests the diplomatic '
            + 're-engagement is working. Eighty-seven companies means the interest is '
            + 'commercial — not only political. And the presence of the World Bank and '
            + 'the regional development banks signals that multilateral institutions now '
            + 'treat the country as a serious partner.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'Why are the three letters of intent signed at the 2025 Forum significant, '
            + 'even though they are not yet full investment agreements?',
          model: 'Letters of intent are significant because they commit both sides to a next '
            + 'step with a named counterpart. They are not investment agreements, but '
            + 'they move a conversation into a process. They also create a record that '
            + 'someone can be held to. And they create an obligation on our own side — '
            + 'because a letter of intent with no study six months later is a visible '
            + 'failure rather than a quiet one.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'What role does the Ministry of Foreign Affairs play in the Forum that goes '
            + 'beyond its typical diplomatic function?',
          model: 'The Ministry of Foreign Affairs is not only hosting an event — it is '
            + 'facilitating investment. It brings the investors, the other government '
            + 'ministries, and the development banks into one room. That makes the '
            + 'Ministry a bridge between the country\'s diplomacy and its development.',
          minWords: 6,
          rows: 3
        },
    {
          q: 'If you were advising the Ministry on the 2026 Forum, what one change would '
            + 'you recommend and why?',
          model: 'I would recommend that every delegation leave with a named case officer '
            + 'and a scheduled follow-up date. The Forum generates interest well; what it '
            + 'does not do is convert it. A site visit programme is useful, but follow-up '
            + 'is what turns a letter of intent into a study.',
          minWords: 6,
          rows: 3
        }],
    okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer beside '
      + 'your own.'
  },
    {
      id: 'c2',
      covers: ['Part 5'],
      ref: '5C',
      bookRef: 'Unit 5 · Part 5 · 5C',
      type: 'cloze',
      title: 'Language in Context: Conditional Structures in Investment Writing',
      instruction: 'The sentences below use conditional structures from the investment pitch '
        + 'and Forum context you have studied in this unit. Complete each sentence '
        + 'with the correct word or phrase. Think about whether the situation is real '
        + 'and likely (First Conditional: if + Present Simple + will) or hypothetical '
        + '(Second Conditional: if + Past Simple + would). These structures are '
        + 'essential for the investment correspondence you will write in Part '
        + '6.<br>Word list',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. If you confirm your attendance by 1 June, our Economic Affairs team '
          + '[[1]] arrange a dedicated bilateral meeting to discuss your specific '
          + 'investment interests.'
        + '<br>'
        + '2. If the legal framework is clear, the company [[2]] commit to a '
          + 'feasibility study immediately — this is what investors have confirmed '
          + 'directly.'
        + '<br>'
        + '3. If your delegation [[3]] the Forum this year, you will find the '
          + 'investment landscape more advanced than you may currently expect.'
        + '<br>'
        + '4. If you submit your application through the Investment Promotion Agency, '
          + 'we [[4]] fast-track the review — our target processing time is 30 days.'
        + '<br>'
        + '5. If the government [[5]] targeted tax incentives for foreign '
          + 'agricultural investment, interest from European partners would increase '
          + 'significantly.'
        + '<br>'
        + '6. If investment conditions remain stable, the number of signed bilateral '
          + 'agreements [[6]] significantly over the next three years.'
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
    }
  ]
});
