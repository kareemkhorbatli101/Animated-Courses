/* Unit 7 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Listening 1',
    page: 7,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: The Variance Report (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 7 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: The Variance Report (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        {
          t: 'So, what is the most alarming variance this month?',
          role: 'spk:Supervisor',
          who: 'Supervisor',
          _key: 'supervisor'
        },
        {
          t: 'That would be the raw materials cost, which is 30% higher than the budget. The Admin expense is EUR 500 more than last month, but that is not the most significant issue. The most important thing is that our gross profit is better than the forecast due to the higher sales.',
          role: 'spk:Junior',
          who: 'Junior',
          _key: 'junior'
        },
        {
          t: 'Excellent. Let\'s drill down into the raw materials variance.',
          role: 'spk:Supervisor',
          who: 'Supervisor',
          _key: 'supervisor'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u7-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A supervisor is reviewing the variance report with a junior staff member.',
            speak: false
          },
          {
            h: 'Supervisor: "So, what is the most alarming variance this month?"',
            say: 'So, what is the most alarming variance this month?',
            role: 'spk:Supervisor',
            who: 'Supervisor'
          },
          {
            h: 'Junior: "That would be the raw materials cost, which is 30% higher than the budget. The Admin expense is EUR 500 more than last month, but that is not the most significant issue. The most important thing is that our gross profit is better than the forecast due to the higher sales."',
            say: 'That would be the raw materials cost, which is 30% higher than the budget. The Admin expense is EUR 500 more than last month, but that is not the most significant issue. The most important thing is that our gross profit is better than the forecast due to the higher sales.',
            role: 'spk:Junior',
            who: 'Junior'
          },
          {
            h: 'Supervisor: "Excellent. Let\'s drill down into the raw materials variance."',
            say: 'Excellent. Let\'s drill down into the raw materials variance.',
            role: 'spk:Supervisor',
            who: 'Supervisor'
          }
        ],
        style: 'script',
        say: { scene: 'u7-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'variance', caption: 'Listening · Passage 1: The Variance Report (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 7 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the most alarming variance?',
          evidence: 'Junior: "That would be the raw materials cost, which is 30% higher than the budget.',
          options: [
            {
              t: 'It is 30% higher than the budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the most alarming variance?</i> — it answers <i>How is the raw materials cost compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The higher sales.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the most alarming variance?</i> — it answers <i>What is the junior accountant\'s reason for the favorable gross profit?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is EUR 500 more than last month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the most alarming variance?</i> — it answers <i>How is the Admin expense compared to last month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The raw materials cost.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Junior: "That would be the raw materials cost, which is 30% higher than the budget.”'
            }
          ]
        },
        {
          q: '2. How is the raw materials cost compared to the budget?',
          evidence: 'Junior: "That would be the raw materials cost, which is 30% higher than the budget.',
          options: [
            {
              t: 'It is EUR 500 more than last month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the raw materials cost compared to the budget?</i> — it answers <i>How is the Admin expense compared to last month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is 30% higher than the budget.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Junior: "That would be the raw materials cost, which is 30% higher than the budget.”'
            },
            {
              t: 'The raw materials cost.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the raw materials cost compared to the budget?</i> — it answers <i>What is the most alarming variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The higher sales.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the raw materials cost compared to the budget?</i> — it answers <i>What is the junior accountant\'s reason for the favorable gross profit?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is the junior accountant\'s reason for the favorable gross profit?',
          evidence: 'The most important thing is that our gross profit is better than the forecast due to the higher sales.',
          options: [
            {
              t: 'The higher sales.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The most important thing is that our gross profit is better than the forecast due to the higher sales.”'
            },
            {
              t: 'The raw materials cost.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the junior accountant\'s reason for the favorable gross profit?</i> — it answers <i>What is the most alarming variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is 30% higher than the budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the junior accountant\'s reason for the favorable gross profit?</i> — it answers <i>How is the raw materials cost compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is EUR 500 more than last month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the junior accountant\'s reason for the favorable gross profit?</i> — it answers <i>How is the Admin expense compared to last month?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. How is the Admin expense compared to last month?',
          evidence: 'The Admin expense is EUR 500 more than last month, but that is not the most significant issue.',
          options: [
            {
              t: 'It is EUR 500 more than last month.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Admin expense is EUR 500 more than last month, but that is not the most significant issue.”'
            },
            {
              t: 'The raw materials cost.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the Admin expense compared to last month?</i> — it answers <i>What is the most alarming variance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is 30% higher than the budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the Admin expense compared to last month?</i> — it answers <i>How is the raw materials cost compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The higher sales.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the Admin expense compared to last month?</i> — it answers <i>What is the junior accountant\'s reason for the favorable gross profit?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What is the supervisor going to do next?',
          evidence: 'Let\'s drill down into the raw materials variance.',
          options: [
            {
              t: 'It is 30% higher than the budget.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the supervisor going to do next?</i> — it answers <i>How is the raw materials cost compared to the budget?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The higher sales.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the supervisor going to do next?</i> — it answers <i>What is the junior accountant\'s reason for the favorable gross profit?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Drill down into the raw materials variance.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Let\'s drill down into the raw materials variance.”'
            },
            {
              t: 'The raw materials cost.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the supervisor going to do next?</i> — it answers <i>What is the most alarming variance?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'budget', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
