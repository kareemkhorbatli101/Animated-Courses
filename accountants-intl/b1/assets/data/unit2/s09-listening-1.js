/* Unit 2 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Listening 1',
    page: 2,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: The Missing Receipt (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 2 · 3A',
      type: 'study',
      source: 'book',
      title: 'Passage 1: The Missing Receipt (Functional)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A conversation between an accountant and a colleague about a transaction from yesterday.</p><div class="script"><p>Accountant: "I was trying to reconcile the travel expenses when I realized one receipt was missing. I looked through all the files, but I didn\'t locate it. The colleague said she submitted the full expense claim yesterday. I need to know where she filed it. She told me she was having a meeting at 2 PM, so she left it on the filing cabinet."</p></div>',
      playable: [
        {
          t: 'I was trying to reconcile the travel expenses when I realized one receipt was missing. I looked through all the files, but I didn\'t locate it. The colleague said she submitted the full expense claim yesterday. I need to know where she filed it. She told me she was having a meeting at 2 PM, so she left it on the filing cabinet.',
          role: 'spk:Accountant',
          who: 'Accountant'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      visual: { spot: 'receipt', caption: 'Listening · Passage 1: The Missing Receipt (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 2 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What was the accountant trying to do when she realized a receipt was missing?',
          evidence: 'Accountant: "I was trying to reconcile the travel expenses when I realized one receipt was missing.',
          options: [
            {
              t: 'She looked through all the files, but she did not locate it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the accountant trying to do when she realized a receipt was missing?</i> — it answers <i>What did the accountant do to try and locate the receipt?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was having a meeting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the accountant trying to do when she realized a receipt was missing?</i> — it answers <i>What was the colleague doing at 2 PM?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She said she submitted the full expense claim yesterday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the accountant trying to do when she realized a receipt was missing?</i> — it answers <i>What did the colleague say she submitted yesterday?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the travel expenses.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Accountant: "I was trying to reconcile the travel expenses when I realized one receipt was missing.”'
            }
          ]
        },
        {
          q: '2. What did the colleague say she submitted yesterday?',
          evidence: 'The colleague said she submitted the full expense claim yesterday.',
          options: [
            {
              t: 'She was trying to reconcile the travel expenses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the colleague say she submitted yesterday?</i> — it answers <i>What was the accountant trying to do when she realized a receipt was missing?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She looked through all the files, but she did not locate it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the colleague say she submitted yesterday?</i> — it answers <i>What did the accountant do to try and locate the receipt?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She said she submitted the full expense claim yesterday.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The colleague said she submitted the full expense claim yesterday.”'
            },
            {
              t: 'She was having a meeting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the colleague say she submitted yesterday?</i> — it answers <i>What was the colleague doing at 2 PM?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did the accountant do to try and locate the receipt?',
          evidence: 'I looked through all the files, but I didn\'t locate it.',
          options: [
            {
              t: 'She was trying to reconcile the travel expenses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the accountant do to try and locate the receipt?</i> — it answers <i>What was the accountant trying to do when she realized a receipt was missing?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She said she submitted the full expense claim yesterday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the accountant do to try and locate the receipt?</i> — it answers <i>What did the colleague say she submitted yesterday?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was having a meeting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the accountant do to try and locate the receipt?</i> — it answers <i>What was the colleague doing at 2 PM?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She looked through all the files, but she did not locate it.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I looked through all the files, but I didn\'t locate it.”'
            }
          ]
        },
        {
          q: '4. What was the colleague doing at 2 PM?',
          evidence: 'She told me she was having a meeting at 2 PM, so she left it on the filing cabinet.',
          options: [
            {
              t: 'She looked through all the files, but she did not locate it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the colleague doing at 2 PM?</i> — it answers <i>What did the accountant do to try and locate the receipt?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was having a meeting.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She told me she was having a meeting at 2 PM, so she left it on the filing cabinet.”'
            },
            {
              t: 'She said she submitted the full expense claim yesterday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the colleague doing at 2 PM?</i> — it answers <i>What did the colleague say she submitted yesterday?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the travel expenses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the colleague doing at 2 PM?</i> — it answers <i>What was the accountant trying to do when she realized a receipt was missing?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Where did the colleague leave the receipt?',
          evidence: 'She told me she was having a meeting at 2 PM, so she left it on the filing cabinet.',
          options: [
            {
              t: 'She left it on the filing cabinet.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She told me she was having a meeting at 2 PM, so she left it on the filing cabinet.”'
            },
            {
              t: 'She was trying to reconcile the travel expenses.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where did the colleague leave the receipt?</i> — it answers <i>What was the accountant trying to do when she realized a receipt was missing?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She said she submitted the full expense claim yesterday.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where did the colleague leave the receipt?</i> — it answers <i>What did the colleague say she submitted yesterday?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She looked through all the files, but she did not locate it.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where did the colleague leave the receipt?</i> — it answers <i>What did the accountant do to try and locate the receipt?</i> Check what the question actually asks for before you look for it in the text.'
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
