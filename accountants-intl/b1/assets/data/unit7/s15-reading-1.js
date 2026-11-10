/* Unit 7 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Reading 1',
    page: 7,
    section: '15',
    lesson: 'Part 5 · Reading',
    title: 'Reading 1'
  },
  objective: 'Pre-Reading Discussion',
  cards: [
    {
      id: 'c1',
      covers: ['5A'],
      ref: '5A',
      bookRef: 'Unit 7 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What are the different sections of a monthly performance report?' },
        { q: 'How do accountants present favorable and adverse variances in a report?' },
        { q: 'What does it mean to drill down into a variance?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'variance',
        caption: 'Variance analysis, comparing actuals vs. budget, sales figures, and trend reporting.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Discuss:',
          'What are the different sections of a monthly performance report?',
          'How do accountants present favorable and adverse variances in a report?',
          'What does it mean to drill down into a variance?'
        ]
      },
      model: 'An executive summary, the variance analysis against budget, the commentary on the largest differences, and the forecast for the next period.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 7 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: The Sales Performance Analysis',
      instruction: 'Read the summary of the Q4 sales performance.',
      playable: [
        {
          t: 'Sales revenue in Q4 was EUR 520,000, which is higher than the budget of EUR 500,000.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This favorable variance is primarily due to the success of our new product line.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Product A was the most popular item, generating more revenue than all other products combined.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The Northern Region was better than the Southern Region in terms of growth, recording the strongest increase of 12%.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The Marketing expense was less than the allocated budget, making the overall results the most positive of the year.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u7-reading-1-c2',
      passage: '<p>Sales revenue in Q4 was EUR 520,000, which is higher than the budget of EUR 500,000. This favorable variance is primarily due to the success of our new product line. Product A was the most popular item, generating more revenue than all other products combined. The Northern Region was better than the Southern Region in terms of growth, recording the strongest increase of 12%. The Marketing expense was less than the allocated budget, making the overall results the most positive of the year.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'budget',
        caption: 'Reading · Reading Passage 1: The Sales Performance Analysis',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 7 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How was the Q4 revenue compared to the budget?',
          evidence: 'Sales revenue in Q4 was EUR 520,000, which is higher than the budget of EUR 500,000.',
          options: [
            {
              t: 'It was less than the allocated budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Q4 revenue compared to the budget?</i> — it answers <i>How was the Marketing expense compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was higher — EUR 520,000 against a budget of EUR 500,000.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Sales revenue in Q4 was EUR 520,000, which is higher than the budget of EUR 500,000.”'
            },
            {
              t: 'Product A, which generated more revenue than all the other products combined.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Q4 revenue compared to the budget?</i> — it answers <i>Which product was the most popular?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was better, recording the strongest increase of the regions, 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Q4 revenue compared to the budget?</i> — it answers <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. Which product was the most popular?',
          evidence: 'Product A was the most popular item, generating more revenue than all other products combined.',
          options: [
            {
              t: 'It was less than the allocated budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which product was the most popular?</i> — it answers <i>How was the Marketing expense compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Product A, which generated more revenue than all the other products combined.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Product A was the most popular item, generating more revenue than all other products combined.”'
            },
            {
              t: 'It was better, recording the strongest increase of the regions, 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which product was the most popular?</i> — it answers <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was higher — EUR 520,000 against a budget of EUR 500,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which product was the most popular?</i> — it answers <i>How was the Q4 revenue compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. How was the Northern Region compared to the Southern Region in terms of growth?',
          evidence: 'The Northern Region was better than the Southern Region in terms of growth, recording the strongest increase of 12%.',
          options: [
            {
              t: 'It was better, recording the strongest increase of the regions, 12%.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Northern Region was better than the Southern Region in terms of growth, recording the strongest increase of 12%.”'
            },
            {
              t: 'It was higher — EUR 520,000 against a budget of EUR 500,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> — it answers <i>How was the Q4 revenue compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Product A, which generated more revenue than all the other products combined.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> — it answers <i>Which product was the most popular?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was less than the allocated budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> — it answers <i>How was the Marketing expense compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. How was the Marketing expense compared to the budget?',
          evidence: 'The Marketing expense was less than the allocated budget, making the overall results the most positive of the year.',
          options: [
            {
              t: 'It was better, recording the strongest increase of the regions, 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Marketing expense compared to the budget?</i> — it answers <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was less than the allocated budget.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Marketing expense was less than the allocated budget, making the overall results the most positive of the year.”'
            },
            {
              t: 'Product A, which generated more revenue than all the other products combined.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Marketing expense compared to the budget?</i> — it answers <i>Which product was the most popular?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was higher — EUR 520,000 against a budget of EUR 500,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How was the Marketing expense compared to the budget?</i> — it answers <i>How was the Q4 revenue compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Why were the overall results the most positive of the year?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Because revenue came in above budget while marketing expense came in below it.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'It was higher — EUR 520,000 against a budget of EUR 500,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why were the overall results the most positive of the year?</i> — it answers <i>How was the Q4 revenue compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It was better, recording the strongest increase of the regions, 12%.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why were the overall results the most positive of the year?</i> — it answers <i>How was the Northern Region compared to the Southern Region in terms of growth?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Product A, which generated more revenue than all the other products combined.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why were the overall results the most positive of the year?</i> — it answers <i>Which product was the most popular?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
