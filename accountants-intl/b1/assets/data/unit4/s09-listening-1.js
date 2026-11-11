/* Unit 4 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Listening 1',
    page: 4,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Reporting Low Stock (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 4 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Reporting Low Stock (Functional)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: 'Good morning. I\'m calling about our stock levels. We have a few reams of paper left, but very little ink. Also, we are out of stock of the large black binder clips. We need to place an order immediately. Do we have any budget left this month for equipment?',
          role: 'spk:Clerk',
          who: 'Clerk',
          _key: 'clerk'
        },
        {
          t: 'Yes, we have a lot of budget. How much ink do you need? And how many boxes of clips should I order?',
          role: 'spk:Manager',
          who: 'Manager',
          _key: 'manager'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u4-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> The inventory clerk calls the Purchasing Manager to report low levels.',
            speak: false
          },
          {
            h: 'Clerk: "Good morning. I\'m calling about our stock levels. We have a few reams of paper left, but very little ink. Also, we are out of stock of the large black binder clips. We need to place an order immediately. Do we have any budget left this month for equipment?"',
            say: 'Good morning. I\'m calling about our stock levels. We have a few reams of paper left, but very little ink. Also, we are out of stock of the large black binder clips. We need to place an order immediately. Do we have any budget left this month for equipment?',
            role: 'spk:Clerk',
            who: 'Clerk'
          },
          {
            h: 'Manager: "Yes, we have a lot of budget. How much ink do you need? And how many boxes of clips should I order?"',
            say: 'Yes, we have a lot of budget. How much ink do you need? And how many boxes of clips should I order?',
            role: 'spk:Manager',
            who: 'Manager'
          }
        ],
        style: 'script',
        say: { scene: 'u4-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'budget', caption: 'Listening · Passage 1: Reporting Low Stock (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 4 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How many reams of paper does the clerk have left?',
          evidence: 'We have a few reams of paper left, but very little ink.',
          options: [
            {
              t: 'They are out of stock.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many reams of paper does the clerk have left?</i> — it answers <i>What is the status of the large black binder clips?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Budget — they have a lot of budget this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many reams of paper does the clerk have left?</i> — it answers <i>What did the manager confirm they have a lot of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Very little ink.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many reams of paper does the clerk have left?</i> — it answers <i>How much ink does the clerk have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A few reams.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We have a few reams of paper left, but very little ink.”'
            }
          ]
        },
        {
          q: '2. How much ink does the clerk have?',
          evidence: 'We have a few reams of paper left, but very little ink.',
          options: [
            {
              t: 'Budget — they have a lot of budget this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much ink does the clerk have?</i> — it answers <i>What did the manager confirm they have a lot of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Very little ink.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We have a few reams of paper left, but very little ink.”'
            },
            {
              t: 'A few reams.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much ink does the clerk have?</i> — it answers <i>How many reams of paper does the clerk have left?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are out of stock.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How much ink does the clerk have?</i> — it answers <i>What is the status of the large black binder clips?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is the status of the large black binder clips?',
          evidence: 'Also, we are out of stock of the large black binder clips.',
          options: [
            {
              t: 'Budget — they have a lot of budget this month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the status of the large black binder clips?</i> — it answers <i>What did the manager confirm they have a lot of?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are out of stock.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Also, we are out of stock of the large black binder clips.”'
            },
            {
              t: 'A few reams.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the status of the large black binder clips?</i> — it answers <i>How many reams of paper does the clerk have left?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Very little ink.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the status of the large black binder clips?</i> — it answers <i>How much ink does the clerk have?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did the manager confirm they have a lot of?',
          evidence: 'Do we have any budget left this month for equipment?',
          options: [
            {
              t: 'Very little ink.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the manager confirm they have a lot of?</i> — it answers <i>How much ink does the clerk have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are out of stock.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the manager confirm they have a lot of?</i> — it answers <i>What is the status of the large black binder clips?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A few reams.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the manager confirm they have a lot of?</i> — it answers <i>How many reams of paper does the clerk have left?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Budget — they have a lot of budget this month.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Do we have any budget left this month for equipment?”'
            }
          ]
        },
        {
          q: '5. What two questions did the manager ask about the order?',
          evidence: 'And how many boxes of clips should I order?',
          options: [
            {
              t: 'How much ink the clerk needs, and how many boxes of clips he should order.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “And how many boxes of clips should I order?”'
            },
            {
              t: 'A few reams.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two questions did the manager ask about the order?</i> — it answers <i>How many reams of paper does the clerk have left?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Very little ink.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two questions did the manager ask about the order?</i> — it answers <i>How much ink does the clerk have?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are out of stock.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two questions did the manager ask about the order?</i> — it answers <i>What is the status of the large black binder clips?</i> Check what the question actually asks for before you look for it in the text.'
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
