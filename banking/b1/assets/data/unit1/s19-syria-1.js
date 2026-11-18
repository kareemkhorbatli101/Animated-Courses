/* Unit 1 §19 — Syria in Focus — A New Team at the Damascus Branch.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s19', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 11 · Syria in Focus — A New Team at the Damascus Branch', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — A New Team at the Damascus Branch', title: 'Part 11 · Syria in Focus — A New Team at the Damascus Branch' },
  objective: 'By the end of this part you can describe the staff of a branch and '
  + 'who faces customers, and say where English is needed in a bank that '
  + 'works in Arabic.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 1 · S-A',
      visual: { spot: 'kyc-check' },
      type: 'study',
      title: 'Read the case',
      instruction: 'Al-Mathaq Bank is opening a branch in central Damascus. The branch '
  + 'manager, Rana Haddad, has eleven staff: four tellers, two customer '
  + 'service representatives, two loan officers, one compliance officer, '
  + 'one IT support officer and one security officer.<br>Three of the '
  + 'eleven are new to banking. Two have worked in banks in Lebanon and '
  + 'speak English every day; the rest read English well but rarely speak '
  + 'it. Rana needs the branch to serve customers in Arabic and to deal '
  + 'with correspondent banks and visiting delegations in English.<br>She '
  + 'decides that every member of staff will learn to introduce themselves '
  + 'and their role in English, and that the four who face customers will '
  + 'practise a full counter exchange.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 1 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'How many staff at the Damascus branch face customers directly?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does Rana want English at the branch when customers speak Arabic?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which two groups of staff does Rana treat differently, and why?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 1 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Compare Rana\'s branch with the bank you know. How many of your '
  + 'colleagues use English in a normal week, and for what?',
      doneLabel: 'I have read this'
    }
  ]
});
