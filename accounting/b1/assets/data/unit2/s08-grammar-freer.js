/* Unit 2 §8 — Part 2, freer practice.

   The book asks for four sentences about yesterday: three past simple (one
   regular, one irregular, one negative) and one past continuous. What the
   learner writes is theirs; the tense is not, and the checker hears it.
   `pastCheck` is on here and off in Unit 1, because this is the unit where
   past-tense verbs are the thing being practised. */
EAFM.page('u2-s08', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 2', page: 2, section: '8',
          lesson: 'Part 2 · Grammar', title: 'Freer practice — your day yesterday' },
  objective: 'Report your own yesterday in both past tenses',
  prev: 's07-grammar-fix', prevLabel: 'Correct the sentence',
  next: 's09-pronunciation', nextLabel: 'Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2F',
      bookRef: 'Unit 2 · Part 2 · Freer practice', type: 'tensewrite',
      title: 'Four sentences about your day yesterday',
      instruction: 'Write four sentences about your day yesterday, at work or at home. Three in the past simple — one regular verb, one irregular, one negative — and one in the past continuous (‘I was…ing when…’). The checker tells you which tense it hears; what you say is up to you.',
      visual: { art: 'tense-timeline',
        caption: 'Three points on the line behind you, and one stretch of it.' },
      themName: 'A colleague',
      boxes: [
        { label: '1. A regular verb (past simple)', tense: 'past',
          eg: 'Yesterday I checked all the receipts from last week.' },
        { label: '2. An irregular verb (past simple)', tense: 'past',
          eg: 'I wrote three entries in the journal before lunch.' },
        { label: '3. A negative (past simple)', tense: 'past',
          eg: 'I did not finish the statement, because the cash did not agree.' },
        { label: '4. Something in progress (past continuous)', tense: 'past-cont',
          eg: 'I was counting the cash when my manager came in.' }
      ],
      coach: {
        title: 'Check your four sentences',
        target: 'past simple and past continuous',
        taught: [
          'Regular verbs add ed; irregular verbs have to be learned one by one.',
          'A negative is did not / didn’t plus the BASE verb — no ed after did.',
          'The past continuous is was/were plus the verb and ing, for a longer action.'
        ],
        task: 'Write four sentences about your day yesterday: three past simple (regular, irregular, negative) and one past continuous.',
        parts: [
          'Sentence 1 — a regular verb. Check that it ends in ed.',
          'Sentence 2 — an irregular verb. Check that it does NOT end in ed.',
          'Sentence 3 — a negative. Check that the verb after didn’t has no ending.',
          'Sentence 4 — "I was …ing when …". Something was already happening.'
        ],
        example: [
          'Yesterday I recorded eleven payments and I checked every receipt.',
          'I wrote the month-end note and I gave it to my manager.',
          'I did not reconcile the bank, because the statement arrived late.',
          'I was preparing the figures when the office lost its electricity.'
        ],
        exampleNote: 'Read the third one again: <i>did not reconcile</i>, not <i>did not reconciled</i>. That is the single commonest mistake in this unit.',
        criteria: [
          { t: 'One regular past-simple verb, ending in ed.' },
          { t: 'One irregular past-simple verb, not ending in ed.' },
          { t: 'One negative, with the base verb after did not.' },
          { t: 'One past continuous with was or were and an -ing verb.' },
          { t: 'All four about your own yesterday, not about Fadi.' }
        ]
      }
    }
  ]
});
