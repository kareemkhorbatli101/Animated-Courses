/* Unit 5 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Grammar · the rule',
    page: 5,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Planning the Week',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 5 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Planning the Week',
      instruction: 'The Accounts Manager is planning the week\'s financial tasks.',
      html: '<p>Manager: "I am going to start by reviewing all outstanding invoices this morning. Then, I will schedule the payment run. I am meeting the collections agent on Wednesday to discuss the major debtor list. We will probably have some cash flow issues in May, so we are going to prioritize chasing large debts."</p>',
      playable: [
        {
          t: 'I am going to start by reviewing all outstanding invoices this morning. Then, I will schedule the payment run. I am meeting the collections agent on Wednesday to discuss the major debtor list. We will probably have some cash flow issues in May, so we are going to prioritize chasing large debts.',
          role: 'spk:Manager',
          who: 'Manager'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'payment-run', caption: 'Grammar · Grammar Context: Planning the Week' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 5 · 2A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '2. Which form is used for predictions or instant decisions?',
          evidence: 'Then, I will schedule the payment run.',
          options: [
            {
              t: 'The present continuous — "I am meeting the collections agent on Wednesday" is a fixed arrangement with another person.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for predictions or instant decisions?</i> — it answers <i>Which form is used for fixed, personal arrangements?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'going to — "I am going to start by reviewing…" is an intention already formed.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for predictions or instant decisions?</i> — it answers <i>Which form is used for pre-planned intentions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'will — "I will schedule the payment run" is a decision made as he speaks.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Then, I will schedule the payment run.”'
            }
          ]
        },
        {
          q: '3. Which form is used for pre-planned intentions?',
          evidence: 'Manager: "I am going to start by reviewing all outstanding invoices this morning.',
          options: [
            {
              t: 'will — "I will schedule the payment run" is a decision made as he speaks.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for pre-planned intentions?</i> — it answers <i>Which form is used for predictions or instant decisions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'going to — "I am going to start by reviewing…" is an intention already formed.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Manager: "I am going to start by reviewing all outstanding invoices this morning.”'
            },
            {
              t: 'The present continuous — "I am meeting the collections agent on Wednesday" is a fixed arrangement with another person.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for pre-planned intentions?</i> — it answers <i>Which form is used for fixed, personal arrangements?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. Which form is used for fixed, personal arrangements?',
          evidence: 'I am meeting the collections agent on Wednesday to discuss the major debtor list.',
          options: [
            {
              t: 'going to — "I am going to start by reviewing…" is an intention already formed.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for fixed, personal arrangements?</i> — it answers <i>Which form is used for pre-planned intentions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The present continuous — "I am meeting the collections agent on Wednesday" is a fixed arrangement with another person.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I am meeting the collections agent on Wednesday to discuss the major debtor list.”'
            },
            {
              t: 'will — "I will schedule the payment run" is a decision made as he speaks.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used for fixed, personal arrangements?</i> — it answers <i>Which form is used for predictions or instant decisions?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'entry', caption: 'Grammar · Answer the questions', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['2B'],
      ref: '2B',
      bookRef: 'Unit 5 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Future Forms',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Future Form</th><th>Use</th><th>Keyword Example</th><th>Example (Accounts Context)</th></tr></thead><tbody><tr><td>WILL</td><td>Predictions, sudden decisions, offers/promises.</td><td>probably, I think, I promise.</td><td>I think we will clear this debt by Friday.</td></tr><tr><td>GOING TO</td><td>Prior plan or intention, a future result based on present evidence.</td><td>intends to, planning to.</td><td>We are going to issue a credit note to the client.</td></tr><tr><td>PRESENT CONTINUOUS</td><td>Fixed, definite arrangement, often with a time/date.</td><td>tomorrow, next week, on Monday.</td><td>The payment run is happening on Tuesday.</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'credit-note', caption: 'Grammar · Grammar Focus Box: Future Forms', cls: 'vis-sm' }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
