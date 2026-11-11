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
          t: 'We need to schedule the payment run early this week. Is 3 PM on Wednesday too late?',
          role: 'spk:Colleague 1',
          who: 'Colleague 1',
          _key: 'colleague1'
        },
        {
          t: 'Wednesday at 3 PM is fine. I am going to reconcile the bank statements first. Then, I will prioritize the urgent supplier payments. Are we going to delay the utilities until Friday?',
          role: 'spk:Colleague 2',
          who: 'Colleague 2',
          _key: 'colleague2'
        },
        {
          t: 'No, we are paying the utilities on Thursday morning. That is a fixed arrangement.',
          role: 'spk:Colleague 1',
          who: 'Colleague 1',
          _key: 'colleague1'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u5-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> Two colleagues are discussing the schedule for the weekly payment run.',
            speak: false
          },
          {
            h: 'Colleague 1: "We need to schedule the payment run early this week. Is 3 PM on Wednesday too late?"',
            say: 'We need to schedule the payment run early this week. Is 3 PM on Wednesday too late?',
            role: 'spk:Colleague 1',
            who: 'Colleague 1'
          },
          {
            h: 'Colleague 2: "Wednesday at 3 PM is fine. I am going to reconcile the bank statements first. Then, I will prioritize the urgent supplier payments. Are we going to delay the utilities until Friday?"',
            say: 'Wednesday at 3 PM is fine. I am going to reconcile the bank statements first. Then, I will prioritize the urgent supplier payments. Are we going to delay the utilities until Friday?',
            role: 'spk:Colleague 2',
            who: 'Colleague 2'
          },
          {
            h: 'Colleague 1: "No, we are paying the utilities on Thursday morning. That is a fixed arrangement."',
            say: 'No, we are paying the utilities on Thursday morning. That is a fixed arrangement.',
            role: 'spk:Colleague 1',
            who: 'Colleague 1'
          }
        ],
        style: 'script',
        say: { scene: 'u5-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
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
          q: '4. What did Colleague 2 suggest delaying?',
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
