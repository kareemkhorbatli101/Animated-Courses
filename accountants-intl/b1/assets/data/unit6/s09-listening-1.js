/* Unit 6 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Listening 1',
    page: 6,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: The Discrepancy (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 6 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: The Discrepancy (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        {
          t: 'The bank balance is EUR 500 higher than our ledger balance. I can\'t find the source of the discrepancy.',
          role: 'spk:Colleague 1',
          who: 'Colleague 1',
          _key: 'colleague1'
        },
        {
          t: 'If the bank balance is higher, it will be a deposit we haven\'t recorded yet. Have you cross-checked the unidentified receipts? If it were an omission, we would see a missing journal entry.',
          role: 'spk:Colleague 2',
          who: 'Colleague 2',
          _key: 'colleague2'
        },
        {
          t: 'Ah, yes. I will check the suspense account now. If I find the missing deposit, I will rectify the entry before lunch.',
          role: 'spk:Colleague 1',
          who: 'Colleague 1',
          _key: 'colleague1'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u6-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> Two colleagues are discussing a discrepancy found during reconciliation.',
            speak: false
          },
          {
            h: 'Colleague 1: "The bank balance is EUR 500 higher than our ledger balance. I can\'t find the source of the discrepancy."',
            say: 'The bank balance is EUR 500 higher than our ledger balance. I can\'t find the source of the discrepancy.',
            role: 'spk:Colleague 1',
            who: 'Colleague 1'
          },
          {
            h: 'Colleague 2: "If the bank balance is higher, it will be a deposit we haven\'t recorded yet. Have you cross-checked the unidentified receipts? If it were an omission, we would see a missing journal entry."',
            say: 'If the bank balance is higher, it will be a deposit we haven\'t recorded yet. Have you cross-checked the unidentified receipts? If it were an omission, we would see a missing journal entry.',
            role: 'spk:Colleague 2',
            who: 'Colleague 2'
          },
          {
            h: 'Colleague 1: "Ah, yes. I will check the suspense account now. If I find the missing deposit, I will rectify the entry before lunch."',
            say: 'Ah, yes. I will check the suspense account now. If I find the missing deposit, I will rectify the entry before lunch.',
            role: 'spk:Colleague 1',
            who: 'Colleague 1'
          }
        ],
        style: 'script',
        say: { scene: 'u6-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'entry', caption: 'Listening · Passage 1: The Discrepancy (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 6 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the problem?',
          evidence: 'Colleague 1: "The bank balance is EUR 500 higher than our ledger balance.',
          options: [
            {
              t: 'If the bank balance is higher, it will be a deposit they have not recorded yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the problem?</i> — it answers <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If it were an omission, they would see a missing journal entry.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the problem?</i> — it answers <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The bank balance is EUR 500 higher than the ledger balance, and he cannot find the source.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Colleague 1: "The bank balance is EUR 500 higher than our ledger balance.”'
            },
            {
              t: 'The suspense account.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the problem?</i> — it answers <i>Where is Colleague 1 going to check now?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What does Colleague 2 suggest the discrepancy is (First Conditional)?',
          evidence: 'Colleague 2: "If the bank balance is higher, it will be a deposit we haven\'t recorded yet.',
          options: [
            {
              t: 'The suspense account.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> — it answers <i>Where is Colleague 1 going to check now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If the bank balance is higher, it will be a deposit they have not recorded yet.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Colleague 2: "If the bank balance is higher, it will be a deposit we haven\'t recorded yet.”'
            },
            {
              t: 'The bank balance is EUR 500 higher than the ledger balance, and he cannot find the source.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> — it answers <i>What is the problem?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If it were an omission, they would see a missing journal entry.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> — it answers <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What does Colleague 2 think they would see if it were an omission (Second Conditional)?',
          evidence: 'If it were an omission, we would see a missing journal entry.',
          options: [
            {
              t: 'The bank balance is EUR 500 higher than the ledger balance, and he cannot find the source.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> — it answers <i>What is the problem?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If the bank balance is higher, it will be a deposit they have not recorded yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> — it answers <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If it were an omission, they would see a missing journal entry.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If it were an omission, we would see a missing journal entry.”'
            },
            {
              t: 'The suspense account.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> — it answers <i>Where is Colleague 1 going to check now?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. Where is Colleague 1 going to check now?',
          evidence: 'I will check the suspense account now.',
          options: [
            {
              t: 'If it were an omission, they would see a missing journal entry.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is Colleague 1 going to check now?</i> — it answers <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The suspense account.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I will check the suspense account now.”'
            },
            {
              t: 'The bank balance is EUR 500 higher than the ledger balance, and he cannot find the source.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is Colleague 1 going to check now?</i> — it answers <i>What is the problem?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If the bank balance is higher, it will be a deposit they have not recorded yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is Colleague 1 going to check now?</i> — it answers <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What will Colleague 1 do if he finds the deposit?',
          evidence: 'If I find the missing deposit, I will rectify the entry before lunch.',
          options: [
            {
              t: 'If the bank balance is higher, it will be a deposit they have not recorded yet.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 1 do if he finds the deposit?</i> — it answers <i>What does Colleague 2 suggest the discrepancy is (First Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'If it were an omission, they would see a missing journal entry.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 1 do if he finds the deposit?</i> — it answers <i>What does Colleague 2 think they would see if it were an omission (Second Conditional)?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The bank balance is EUR 500 higher than the ledger balance, and he cannot find the source.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will Colleague 1 do if he finds the deposit?</i> — it answers <i>What is the problem?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will rectify the entry before lunch.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If I find the missing deposit, I will rectify the entry before lunch.”'
            }
          ]
        }
      ],
      visual: { spot: 'discrepancy', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
