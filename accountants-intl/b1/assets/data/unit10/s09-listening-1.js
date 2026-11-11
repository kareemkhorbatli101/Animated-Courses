/* Unit 10 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Listening 1',
    page: 10,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Quarterly Results (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 10 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Quarterly Results (Functional)',
      instruction: 'Read this before you go on.',
      playable: [
        { t: '"Q3 results are mixed.', role: 'narrator', _key: 'narr' },
        {
          t: 'I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'I expect a detailed explanation of the EUR 50,000 overspend by the end of the week.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u10-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A Financial Controller is giving a briefing on Q3 performance.',
            speak: false
          },
          {
            h: '"Q3 results are mixed. I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department. I expect a detailed explanation of the EUR 50,000 overspend by the end of the week."',
            say: 'Q3 results are mixed. I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department. I expect a detailed explanation of the EUR 50,000 overspend by the end of the week.'
          }
        ],
        say: { scene: 'u10-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'variance', caption: 'Listening · Passage 1: Quarterly Results (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 10 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What did the Controller confirm?',
          evidence: 'I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department.',
          options: [
            {
              t: 'A detailed explanation of the EUR 50,000 overspend.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Controller confirm?</i> — it answers <i>What did she expect by the end of the week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 50,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Controller confirm?</i> — it answers <i>What was the amount of the overspend she mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That the revenue targets had been met.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department.”'
            },
            {
              t: 'A significant cost variance in the operations department.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Controller confirm?</i> — it answers <i>What did she say they had in operations?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What did she say they had in operations?',
          evidence: 'I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department.',
          options: [
            {
              t: 'That the revenue targets had been met.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say they had in operations?</i> — it answers <i>What did the Controller confirm?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A detailed explanation of the EUR 50,000 overspend.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say they had in operations?</i> — it answers <i>What did she expect by the end of the week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A significant cost variance in the operations department.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I can confirm that our revenue targets were met, but we have a significant cost variance in the operations department.”'
            },
            {
              t: 'EUR 50,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say they had in operations?</i> — it answers <i>What was the amount of the overspend she mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did she expect by the end of the week?',
          evidence: 'I expect a detailed explanation of the EUR 50,000 overspend by the end of the week.',
          options: [
            {
              t: 'A detailed explanation of the EUR 50,000 overspend.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I expect a detailed explanation of the EUR 50,000 overspend by the end of the week.”'
            },
            {
              t: 'That the revenue targets had been met.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she expect by the end of the week?</i> — it answers <i>What did the Controller confirm?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A significant cost variance in the operations department.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she expect by the end of the week?</i> — it answers <i>What did she say they had in operations?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 50,000.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she expect by the end of the week?</i> — it answers <i>What was the amount of the overspend she mentioned?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What was the amount of the overspend she mentioned?',
          evidence: 'the passage above',
          options: [
            {
              t: 'A significant cost variance in the operations department.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the amount of the overspend she mentioned?</i> — it answers <i>What did she say they had in operations?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A detailed explanation of the EUR 50,000 overspend.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the amount of the overspend she mentioned?</i> — it answers <i>What did she expect by the end of the week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 50,000.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'That the revenue targets had been met.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the amount of the overspend she mentioned?</i> — it answers <i>What did the Controller confirm?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What did she say about the Q3 results?',
          evidence: 'the passage above',
          options: [
            {
              t: 'A detailed explanation of the EUR 50,000 overspend.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say about the Q3 results?</i> — it answers <i>What did she expect by the end of the week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That they were mixed.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'That the revenue targets had been met.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say about the Q3 results?</i> — it answers <i>What did the Controller confirm?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A significant cost variance in the operations department.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she say about the Q3 results?</i> — it answers <i>What did she say they had in operations?</i> Check what the question actually asks for before you look for it in the text.'
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
