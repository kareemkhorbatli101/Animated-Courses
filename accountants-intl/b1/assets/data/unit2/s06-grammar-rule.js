/* Unit 2 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Grammar · the rule',
    page: 2,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Describing the Flow of Work',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 2 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Describing the Flow of Work',
      instruction: 'Read the accountant\'s description of her workday yesterday.',
      html: '<p>Marta: "Yesterday, I was entering the sales invoices (ongoing activity) when the system crashed (interruption – Past Simple). I had to restart the computer, and then I posted the remaining five transactions (completed actions – Past Simple). Later, I was reviewing the expense claims (ongoing activity) while my colleague in Toronto was talking on the phone (parallel activity – Past Continuous)."</p>',
      playable: [
        {
          t: 'Yesterday, I was entering the sales invoices (ongoing activity) when the system crashed (interruption – Past Simple). I had to restart the computer, and then I posted the remaining five transactions (completed actions – Past Simple). Later, I was reviewing the expense claims (ongoing activity) while my colleague in Toronto was talking on the phone (parallel activity – Past Continuous).',
          role: 'spk:Marta',
          who: 'Marta'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The grammar of this unit, in a document rather than a rule. Notice the form before anyone explains it to you.',
      visual: { spot: 'transaction', caption: 'Grammar · Grammar Context: Describing the Flow of Work' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 2 · 2A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. Underline the verbs in the Past Simple. What do they describe?',
          evidence: 'I had to restart the computer, and then I posted the remaining five transactions (completed actions – Past Simple).',
          options: [
            {
              t: 'when',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Underline the verbs in the Past Simple. What do they describe?</i> — it answers <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'while',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Underline the verbs in the Past Simple. What do they describe?</i> — it answers <i>What word is used to describe two activities happening at the same time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'crashed, had (to restart), posted, restarted — they describe completed actions, finished at a definite point in the past.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I had to restart the computer, and then I posted the remaining five transactions (completed actions – Past Simple).”'
            },
            {
              t: 'was entering, was reviewing, was talking — they describe activities in progress at a past moment, either interrupted or running in parallel.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Underline the verbs in the Past Simple. What do they describe?</i> — it answers <i>Circle the verbs in the Past Continuous. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. Circle the verbs in the Past Continuous. What do they describe?',
          evidence: 'the passage above',
          options: [
            {
              t: 'when',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Circle the verbs in the Past Continuous. What do they describe?</i> — it answers <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'while',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Circle the verbs in the Past Continuous. What do they describe?</i> — it answers <i>What word is used to describe two activities happening at the same time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'was entering, was reviewing, was talking — they describe activities in progress at a past moment, either interrupted or running in parallel.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'crashed, had (to restart), posted, restarted — they describe completed actions, finished at a definite point in the past.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Circle the verbs in the Past Continuous. What do they describe?</i> — it answers <i>Underline the verbs in the Past Simple. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?',
          evidence: 'the passage above',
          options: [
            {
              t: 'was entering, was reviewing, was talking — they describe activities in progress at a past moment, either interrupted or running in parallel.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> — it answers <i>Circle the verbs in the Past Continuous. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'while',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> — it answers <i>What word is used to describe two activities happening at the same time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'crashed, had (to restart), posted, restarted — they describe completed actions, finished at a definite point in the past.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> — it answers <i>Underline the verbs in the Past Simple. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'when',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            }
          ]
        },
        {
          q: '4. What word is used to describe two activities happening at the same time?',
          evidence: 'the passage above',
          options: [
            {
              t: 'when',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is used to describe two activities happening at the same time?</i> — it answers <i>What word is typically used to connect an ongoing activity (Past Continuous) to a sudden interruption (Past Simple)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'while',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'crashed, had (to restart), posted, restarted — they describe completed actions, finished at a definite point in the past.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is used to describe two activities happening at the same time?</i> — it answers <i>Underline the verbs in the Past Simple. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'was entering, was reviewing, was talking — they describe activities in progress at a past moment, either interrupted or running in parallel.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What word is used to describe two activities happening at the same time?</i> — it answers <i>Circle the verbs in the Past Continuous. What do they describe?</i> Check what the question actually asks for before you look for it in the text.'
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
      bookRef: 'Unit 2 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Past Simple vs. Past Continuous',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Tense</th><th>Form</th><th>Function</th><th>Time Marker</th><th>Example (Accounting Context)</th></tr></thead><tbody><tr><td>Past Simple</td><td>Verb + -ed / Irregular</td><td>Completed action at a specific past time.</td><td>Yesterday, last week, in 2022</td><td>"I found the error yesterday."</td></tr><tr><td>Past Continuous</td><td>Was/Were + Verb + -ing</td><td>Ongoing action interrupted by another, or action in progress at a specific time.</td><td>While, when, at 2 PM yesterday</td><td>"I was posting the entries when the manager called."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'posting',
        caption: 'Grammar · Grammar Focus Box: Past Simple vs. Past Continuous',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
