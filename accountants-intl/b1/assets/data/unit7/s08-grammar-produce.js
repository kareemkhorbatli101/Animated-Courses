/* Unit 7 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Grammar · produce it',
    page: 7,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 7 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Rewrite the sentences using the Comparative or Superlative form in parentheses.',
      text: '<div style="font-size:16px;line-height:2.4">4. Conditional: Q2 had the [[4]] revenue of the year.<br>6. Conditional: The utility variance was [[6]] the cost of goods sold variance.</div>',
      answers: { '4': ['highest'], '6': ['smaller than'] },
      bank: ['highest', 'smaller than'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>highest</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>smaller than</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Conditional: Q2 had the <u>highest</u> revenue of the year.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 7 · 2E',
      type: 'study',
      source: 'book',
      title: 'Speaking: Comparing Financial Segments',
      instruction: 'In pairs, practice using Comparatives and Superlatives to analyze the following mock data.',
      html: '<table class="bt"><thead><tr><th>Category</th><th>Budget (EUR)</th><th>Actuals (EUR)</th></tr></thead><tbody><tr><td>Sales Revenue</td><td>100,000</td><td>105,000</td></tr><tr><td>Admin Expense</td><td>15,000</td><td>18,000</td></tr><tr><td>Marketing Expense</td><td>20,000</td><td>25,000</td></tr></tbody></table><ol><li>Compare Sales Revenue (Actuals vs. Budget). (Use: higher)</li><li>Compare Admin Expense and Marketing Expense (Actuals vs. Actuals). (Use: expensive)</li><li>Identify the most favorable variance. (Use: most favorable)</li><li>Identify the largest adverse variance. (Use: largest)</li><li>Example A: "Actual Sales Revenue was higher than the budget."</li><li>Example B: "The Marketing Expense was the most expensive category."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'variance', caption: 'Grammar · Speaking: Comparing Financial Segments', cls: 'vis-sm' }
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
