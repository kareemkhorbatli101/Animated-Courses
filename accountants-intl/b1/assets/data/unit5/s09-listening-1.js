/* Unit 5 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Listening 1',
    page: 5,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Scheduling the Payment Run (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 5 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Scheduling the Payment Run (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        {
          t: 'Colleague 1: "We need to schedule the payment run early this week.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Is 3 PM on Wednesday too late?', role: 'narrator', _key: 'narr' },
        { t: 'Colleague 2: "Wednesday at 3 PM is fine.', role: 'narrator', _key: 'narr' },
        { t: 'I am going to reconcile the bank statements first.', role: 'narrator', _key: 'narr' },
        { t: 'Then, I will prioritize the urgent supplier payments.', role: 'narrator', _key: 'narr' },
        { t: 'Are we going to delay the utilities until Friday?', role: 'narrator', _key: 'narr' },
        {
          t: 'Colleague 1: "No, we are paying the utilities on Thursday morning.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'That is a fixed arrangement.', role: 'narrator', _key: 'narr' }
      ],
      scene: 'u5-listening-1-c1',
      passage: '<p><b>Context.</b> Two colleagues are discussing the schedule for the weekly payment run.</p><div class="script"><p>Colleague 1: "We need to schedule the payment run early this week. Is 3 PM on Wednesday too late?"</p><p>Colleague 2: "Wednesday at 3 PM is fine. I am going to reconcile the bank statements first. Then, I will prioritize the urgent supplier payments. Are we going to delay the utilities until Friday?"</p><p>Colleague 1: "No, we are paying the utilities on Thursday morning. That is a fixed arrangement."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'payment-run',
        caption: 'Listening · Passage 1: Scheduling the Payment Run (Functional)'
      }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 5 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the fixed arrangement for the payment run?',
          evidence: 'Is 3 PM on Wednesday too late?',
          options: [
            {
              t: 'She is going to reconcile the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the fixed arrangement for the payment run?</i> — it answers <i>What is Colleague 2 going to do before the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She will prioritize the urgent supplier payments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the fixed arrangement for the payment run?</i> — it answers <i>What will Colleague 2 do after reconciling the statements?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The utilities — she asked whether they were going to delay them until Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the fixed arrangement for the payment run?</i> — it answers <i>What did Colleague 2 suggest delaying?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Wednesday at 3 PM.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Is 3 PM on Wednesday too late?”'
            }
          ]
        },
        {
          q: '2. What is Colleague 2 going to do before the payment run?',
          evidence: 'I am going to reconcile the bank statements first.',
          options: [
            {
              t: 'She will prioritize the urgent supplier payments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Colleague 2 going to do before the payment run?</i> — it answers <i>What will Colleague 2 do after reconciling the statements?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The utilities — she asked whether they were going to delay them until Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Colleague 2 going to do before the payment run?</i> — it answers <i>What did Colleague 2 suggest delaying?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She is going to reconcile the bank statements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I am going to reconcile the bank statements first.”'
            },
            {
              t: 'Wednesday at 3 PM.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Colleague 2 going to do before the payment run?</i> — it answers <i>What is the fixed arrangement for the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What will Colleague 2 do after reconciling the statements?',
          evidence: 'Then, I will prioritize the urgent supplier payments.',
          options: [
            {
              t: 'The utilities — she asked whether they were going to delay them until Friday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 2 do after reconciling the statements?</i> — it answers <i>What did Colleague 2 suggest delaying?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She will prioritize the urgent supplier payments.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Then, I will prioritize the urgent supplier payments.”'
            },
            {
              t: 'Wednesday at 3 PM.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 2 do after reconciling the statements?</i> — it answers <i>What is the fixed arrangement for the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She is going to reconcile the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 2 do after reconciling the statements?</i> — it answers <i>What is Colleague 2 going to do before the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What did Colleague 2 suggest delaying?',
          evidence: 'Are we going to delay the utilities until Friday?',
          options: [
            {
              t: 'The utilities — she asked whether they were going to delay them until Friday.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Are we going to delay the utilities until Friday?”'
            },
            {
              t: 'Wednesday at 3 PM.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Colleague 2 suggest delaying?</i> — it answers <i>What is the fixed arrangement for the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She is going to reconcile the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Colleague 2 suggest delaying?</i> — it answers <i>What is Colleague 2 going to do before the payment run?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She will prioritize the urgent supplier payments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Colleague 2 suggest delaying?</i> — it answers <i>What will Colleague 2 do after reconciling the statements?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'reporting', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
