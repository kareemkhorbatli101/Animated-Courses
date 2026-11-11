/* Unit 7 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Grammar · the rule',
    page: 7,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Explaining Performance',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 7 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Explaining Performance',
      instruction: 'The Financial Controller is reporting to the Group CFO.',
      html: '<p>Aoife: "Q4 was better than Q3, but our Q1 sales were the highest of the year. Marketing spend is more alarming than we thought, making it the most significant adverse variance on the income statement. Our overall gross margin is larger than the industry average, which is very encouraging."</p>',
      playable: [
        {
          t: 'Q4 was better than Q3, but our Q1 sales were the highest of the year. Marketing spend is more alarming than we thought, making it the most significant adverse variance on the income statement. Our overall gross margin is larger than the industry average, which is very encouraging.',
          role: 'spk:Aoife',
          who: 'Aoife'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The grammar of this unit, in a document rather than a rule. Notice the form before anyone explains it to you.',
      visual: { spot: 'variance', caption: 'Grammar · Grammar Context: Explaining Performance' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 7 · 2A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. Find three examples of Comparative adjectives. What linking word is used after them?',
          evidence: 'the passage above',
          options: [
            {
              t: 'the highest (of the year), the most significant (adverse variance), the most encouraging result. The article before a superlative is the.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Find three examples of Comparative adjectives. What linking word is used after them?</i> — it answers <i>Find three examples of Superlative adjectives. What article is used before them?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'better (than Q3), more alarming (than we thought), larger (than the industry average). The linking word after a comparative is than.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The comparative compares two things; the superlative compares three or more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Find three examples of Comparative adjectives. What linking word is used after them?</i> — it answers <i>Which form is used to compare two things? Which is used to compare three or more things?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. Find three examples of Superlative adjectives. What article is used before them?',
          evidence: 'Marketing spend is more alarming than we thought, making it the most significant adverse variance on the income statement.',
          options: [
            {
              t: 'the highest (of the year), the most significant (adverse variance), the most encouraging result. The article before a superlative is the.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Marketing spend is more alarming than we thought, making it the most significant adverse variance on the income statement.”'
            },
            {
              t: 'The comparative compares two things; the superlative compares three or more.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Find three examples of Superlative adjectives. What article is used before them?</i> — it answers <i>Which form is used to compare two things? Which is used to compare three or more things?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'better (than Q3), more alarming (than we thought), larger (than the industry average). The linking word after a comparative is than.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Find three examples of Superlative adjectives. What article is used before them?</i> — it answers <i>Find three examples of Comparative adjectives. What linking word is used after them?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. Which form is used to compare two things? Which is used to compare three or more things?',
          evidence: 'the passage above',
          options: [
            {
              t: 'the highest (of the year), the most significant (adverse variance), the most encouraging result. The article before a superlative is the.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used to compare two things? Which is used to compare three or more things?</i> — it answers <i>Find three examples of Superlative adjectives. What article is used before them?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The comparative compares two things; the superlative compares three or more.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'better (than Q3), more alarming (than we thought), larger (than the industry average). The linking word after a comparative is than.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which form is used to compare two things? Which is used to compare three or more things?</i> — it answers <i>Find three examples of Comparative adjectives. What linking word is used after them?</i> Check what the question actually asks for before you look for it in the text.'
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
      bookRef: 'Unit 7 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Comparatives and Superlatives',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Type</th><th>Form</th><th>Use</th><th>Example (Accounts Context)</th></tr></thead><tbody><tr><td>Comparative (Short Adj.)</td><td>Adj + -er + than</td><td>Comparing two items (A &gt; B).</td><td>The rent is higher than the salary cost.</td></tr><tr><td>Comparative (Long Adj.)</td><td>More / Less + Adj + than</td><td>Comparing two items (A &gt; B or A &lt; B).</td><td>This is less significant than last month\'s variance.</td></tr><tr><td>Superlative (Short Adj.)</td><td>The + Adj + -est</td><td>Comparing three or more items (A is the highest).</td><td>The marketing cost is the largest expense.</td></tr><tr><td>Superlative (Long Adj.)</td><td>The + most / least + Adj</td><td>Comparing three or more items (A is the most X).</td><td>This is the most important trend we have seen.</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reconcile',
        caption: 'Grammar · Grammar Focus Box: Comparatives and Superlatives',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
