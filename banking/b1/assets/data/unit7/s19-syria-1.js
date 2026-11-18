/* Unit 7 §19 — Syria in Focus — The Call Before the Transfer Arrives.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s19', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 11 · Syria in Focus — The Call Before the Transfer Arrives', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — The Call Before the Transfer Arrives', title: 'Part 11 · Syria in Focus — The Call Before the Transfer Arrives' },
  objective: 'By the end of this part you can warn a customer about a transfer scam '
  + 'in one sentence, and say what the bank will never ask for.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 7 · S-A',
      visual: { spot: 'phishing' },
      type: 'study',
      title: 'Read the case',
      instruction: 'When many people are waiting for money from abroad, a particular scam '
  + 'follows. A caller says the transfer has arrived but is blocked, and '
  + 'asks for a fee or for the account details to release it.<br>At '
  + 'Al-Mathaq Bank three customers in one week report the same call. The '
  + 'branch manager puts a short notice at the counter and asks every '
  + 'member of staff to say one sentence to every customer collecting a '
  + 'transfer: the bank will never telephone to ask for your password or '
  + 'for a release fee.<br>The compliance officer reports the pattern '
  + 'upward, because the branch is not the only one seeing it.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 7 · S-B',
      type: 'shortanswer',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What does the caller claim, and what do they ask for?',
          accept: ['What does the caller claim, and what do they ask for?'],
          keys: ['caller',
              'claim'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What single sentence does every member of staff say?',
          accept: ['What single sentence does every member of staff say?'],
          keys: ['single',
              'sentence'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Why does the compliance officer report it upward?',
          accept: ['Why does the compliance officer report it upward?'],
          keys: ['compliance',
              'officer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 7 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'What warning does your own bank give customers about calls? Write the '
  + 'one sentence you would want every colleague to say.',
      doneLabel: 'I have read this'
    }
  ]
});
