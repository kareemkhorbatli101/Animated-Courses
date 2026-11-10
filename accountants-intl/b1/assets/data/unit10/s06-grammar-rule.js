/* Unit 10 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Grammar · the rule',
    page: 10,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Relaying a Decision',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 10 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Relaying a Decision',
      instruction: 'Analysis:',
      html: '<p><b>Context.</b> An accountant is telling a colleague about a meeting with the Group CFO.</p><p>Accountant: "The Group CFO said that they were not going to approve the full budget increase. She added that we had to find savings in the marketing department. She also asked us if we could submit a revised plan by the end of the week."</p>',
      playable: [
        {
          t: 'The Group CFO said that they were not going to approve the full budget increase. She added that we had to find savings in the marketing department. She also asked us if we could submit a revised plan by the end of the week.',
          role: 'spk:Accountant',
          who: 'Accountant'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Grammar · Grammar Context: Relaying a Decision' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 10 · 2A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the main reporting verb used to introduce the reported speech?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Each tense moves one step back: present → past ("are not going" → "were not going"), "have to" → "had to", "can" → "could".',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the main reporting verb used to introduce the reported speech?</i> — it answers <i>How did the verb tenses change from Direct Speech (e.g., "We are not going...") to Reported Speech (e.g., "...they were not going...")?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'that for statements, and if (or whether) for a yes/no question.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the main reporting verb used to introduce the reported speech?</i> — it answers <i>What words (e.g., if, that) are used to connect the reporting verb to the reported clause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'said — with added and asked also used to introduce the reported clauses.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            }
          ]
        },
        {
          q: '2. How did the verb tenses change from Direct Speech (e.g., "We are not going...") to Reported Speech (e.g., "...they were not going...")?',
          evidence: 'the passage above',
          options: [
            {
              t: 'that for statements, and if (or whether) for a yes/no question.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How did the verb tenses change from Direct Speech (e.g., "We are not going...") to Reported Speech (e.g., "...they were not going...")?</i> — it answers <i>What words (e.g., if, that) are used to connect the reporting verb to the reported clause?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Each tense moves one step back: present → past ("are not going" → "were not going"), "have to" → "had to", "can" → "could".',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'said — with added and asked also used to introduce the reported clauses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How did the verb tenses change from Direct Speech (e.g., "We are not going...") to Reported Speech (e.g., "...they were not going...")?</i> — it answers <i>What is the main reporting verb used to introduce the reported speech?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What words (e.g., if, that) are used to connect the reporting verb to the reported clause?',
          evidence: 'the passage above',
          options: [
            {
              t: 'that for statements, and if (or whether) for a yes/no question.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'said — with added and asked also used to introduce the reported clauses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What words (e.g., if, that) are used to connect the reporting verb to the reported clause?</i> — it answers <i>What is the main reporting verb used to introduce the reported speech?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Each tense moves one step back: present → past ("are not going" → "were not going"), "have to" → "had to", "can" → "could".',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What words (e.g., if, that) are used to connect the reporting verb to the reported clause?</i> — it answers <i>How did the verb tenses change from Direct Speech (e.g., "We are not going...") to Reported Speech (e.g., "...they were not going...")?</i> Check what the question actually asks for before you look for it in the text.'
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
      bookRef: 'Unit 10 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Reported Speech Tense Shifts',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Direct Speech</th><th>Reported Speech (Reporting Verb in Past)</th><th>Example</th></tr></thead><tbody><tr><td>Present Simple (is)</td><td>Past Simple (was)</td><td>"The deadline is Friday." -&gt; He said the deadline was Friday.</td></tr><tr><td>Present Continuous (am/is/are doing)</td><td>Past Continuous (was/were doing)</td><td>"We are reviewing the figures." -&gt; They said they were reviewing the figures.</td></tr><tr><td>Future (will)</td><td>Conditional (would)</td><td>"We will hire next month." -&gt; She said they would hire the following month.</td></tr><tr><td>Past Simple (did)</td><td>Past Perfect (had done)</td><td>"We cut costs in Q1." -&gt; He reported that they had cut costs in Q1.</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reporting',
        caption: 'Grammar · Grammar Focus Box: Reported Speech Tense Shifts',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
