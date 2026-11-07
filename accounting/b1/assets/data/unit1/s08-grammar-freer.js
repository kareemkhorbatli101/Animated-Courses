/* Unit 1 §8 — Part 2, freer practice.

   The book asks for four sentences about the learner's own job: two present
   simple (a routine and a fact) and two present continuous (now or this
   week). What they write is theirs and is not scored, but the TENSE is not
   theirs, and the checker hears it. */
EAFM.page('u1-s08', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 2', page: 1, section: '8',
          lesson: 'Part 2 · Grammar', title: 'Freer practice — your own work' },
  objective: 'Use both tenses to describe your own job or studies',
  prev: 's07-grammar-fix', prevLabel: 'Correct the sentence',
  next: 's09-pronunciation', nextLabel: 'Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2F', bookRef: 'Unit 1 · Part 2 · Freer practice', type: 'tensewrite',
      title: 'Four sentences about your own work',
      instruction: 'Write four sentences about your job or your studies. Two in the present simple — one routine and one fact — and two in the present continuous, for something happening now or this week. The checker tells you which tense it hears; what you say is up to you.',
      visual: { art: 'tense-timeline',
        caption: 'Two of your sentences belong on the long line, and two belong on the dot.' },
      themName: 'A colleague',
      boxes: [
        { label: '1. A routine (present simple)', tense: 'present',
          eg: 'Every morning I check my email and I plan my day.' },
        { label: '2. A fact about your work (present simple)', tense: 'present',
          eg: 'My team looks after the accounts for three projects.' },
        { label: '3. Something happening right now (present continuous)', tense: 'pres-cont',
          eg: 'Right now I am writing these sentences in English.' },
        { label: '4. Something happening this week (present continuous)', tense: 'pres-cont',
          eg: 'This week I am learning the present continuous.' }
      ],
      coach: {
        title: 'Check your four sentences',
        target: 'present simple and present continuous',
        taught: [
          'Present simple for routines, habits and facts; add s with he, she and it.',
          'Present continuous for now and for this week: am/is/are + verb-ing.',
          'A time word usually decides the tense before you reach the verb.'
        ],
        task: 'Write four sentences about your own job or studies: two present simple (a routine and a fact) and two present continuous (now, and this week).',
        parts: [
          'Sentence 1 — a routine. Start with a time word: every day, every morning, usually.',
          'Sentence 2 — a fact. No time word; something that is simply true.',
          'Sentence 3 — right now, at this moment.',
          'Sentence 4 — this week, something different from your normal week.'
        ],
        example: [
          'Every morning I open the accounts and I record the new payments.',
          'My office looks after the money for four projects in Homs.',
          'Right now I am checking a receipt from last week.',
          'This week I am training a new colleague, so I am working more slowly than usual.'
        ],
        exampleNote: 'Notice the fourth one: "this week" plus "than usual" says that the week is not normal, which is exactly what the continuous is for.',
        criteria: [
          { t: 'Two sentences in the present simple, one of them a routine with a time word.' },
          { t: 'Two sentences in the present continuous with am, is or are.' },
          { t: 'The s on the verb wherever the subject is he, she or it.' },
          { t: 'All four about your own work, not about Fadi.' }
        ]
      }
    }
  ]
});
