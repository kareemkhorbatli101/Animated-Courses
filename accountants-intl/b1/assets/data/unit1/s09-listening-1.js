/* Unit 1 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Listening 1',
    page: 1,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Instructions from the Senior (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 1 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Instructions from the Senior (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        {
          t: 'Ryan, listen carefully. This is how we organize the archives.',
          role: 'spk:Marta',
          who: 'Marta',
          _key: 'marta'
        },
        {
          t: 'We keep the invoices in these blue folders. We arrange them alphabetically by supplier name, not by date.',
          role: 'spk:Marta',
          who: 'Marta',
          _key: 'marta'
        },
        {
          t: 'Okay. Alphabetically. And what about the bank statements?',
          role: 'spk:Ryan',
          who: 'Ryan',
          _key: 'ryan'
        },
        {
          t: 'Those go in the red binders, one binder per company. Currently, we are digitizing everything, so please scan them first.',
          role: 'spk:Marta',
          who: 'Marta',
          _key: 'marta'
        },
        {
          t: 'I understand. I am scanning them now. Do I staple the receipts to the invoice?',
          role: 'spk:Ryan',
          who: 'Ryan',
          _key: 'ryan'
        },
        {
          t: 'No, never staple them. Use a paperclip. Staples damage the scanner.',
          role: 'spk:Marta',
          who: 'Marta',
          _key: 'marta'
        },
        { t: 'Got it. Paperclips only.', role: 'spk:Ryan', who: 'Ryan', _key: 'ryan' }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u1-listening-1-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A Senior Accountant (Marta) is giving instructions to a new trainee (Ryan) about filing.',
            speak: false
          },
          {
            h: 'Marta: Ryan, listen carefully. This is how we organize the archives.',
            say: 'Ryan, listen carefully. This is how we organize the archives.',
            role: 'spk:Marta',
            who: 'Marta'
          },
          { h: 'Ryan: I\'m listening.', say: 'I\'m listening.', role: 'spk:Ryan', who: 'Ryan' },
          {
            h: 'Marta: We keep the invoices in these blue folders. We arrange them alphabetically by supplier name, not by date.',
            say: 'We keep the invoices in these blue folders. We arrange them alphabetically by supplier name, not by date.',
            role: 'spk:Marta',
            who: 'Marta'
          },
          {
            h: 'Ryan: Okay. Alphabetically. And what about the bank statements?',
            say: 'Okay. Alphabetically. And what about the bank statements?',
            role: 'spk:Ryan',
            who: 'Ryan'
          },
          {
            h: 'Marta: Those go in the red binders, one binder per company. Currently, we are digitizing everything, so please scan them first.',
            say: 'Those go in the red binders, one binder per company. Currently, we are digitizing everything, so please scan them first.',
            role: 'spk:Marta',
            who: 'Marta'
          },
          {
            h: 'Ryan: I understand. I am scanning them now. Do I staple the receipts to the invoice?',
            say: 'I understand. I am scanning them now. Do I staple the receipts to the invoice?',
            role: 'spk:Ryan',
            who: 'Ryan'
          },
          {
            h: 'Marta: No, never staple them. Use a paperclip. Staples damage the scanner.',
            say: 'No, never staple them. Use a paperclip. Staples damage the scanner.',
            role: 'spk:Marta',
            who: 'Marta'
          },
          {
            h: 'Ryan: Got it. Paperclips only.',
            say: 'Got it. Paperclips only.',
            role: 'spk:Ryan',
            who: 'Ryan'
          }
        ],
        style: 'script',
        say: { scene: 'u1-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: {
        spot: 'invoice',
        caption: 'Listening · Passage 1: Instructions from the Senior (Functional)'
      }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 1 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How are invoices arranged in the blue folders?',
          evidence: 'We arrange them alphabetically by supplier name, not by date.',
          options: [
            {
              t: 'Red binders, and there is one binder for each company.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are invoices arranged in the blue folders?</i> — it answers <i>What color are the binders for bank statements, and how many are there?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are digitizing everything, so the documents are scanned first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are invoices arranged in the blue folders?</i> — it answers <i>What is the team doing with the documents "currently"?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He is scanning the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How are invoices arranged in the blue folders?</i> — it answers <i>What is Ryan doing now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Alphabetically by supplier name, not by date.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We arrange them alphabetically by supplier name, not by date.”'
            }
          ]
        },
        {
          q: '2. What color are the binders for bank statements, and how many are there?',
          evidence: 'Marta: Those go in the red binders, one binder per company.',
          options: [
            {
              t: 'They are digitizing everything, so the documents are scanned first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What color are the binders for bank statements, and how many are there?</i> — it answers <i>What is the team doing with the documents "currently"?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He is scanning the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What color are the binders for bank statements, and how many are there?</i> — it answers <i>What is Ryan doing now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Red binders, and there is one binder for each company.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Marta: Those go in the red binders, one binder per company.”'
            },
            {
              t: 'Alphabetically by supplier name, not by date.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What color are the binders for bank statements, and how many are there?</i> — it answers <i>How are invoices arranged in the blue folders?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is the team doing with the documents "currently"?',
          evidence: 'Currently, we are digitizing everything, so please scan them first.',
          options: [
            {
              t: 'They are digitizing everything, so the documents are scanned first.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Currently, we are digitizing everything, so please scan them first.”'
            },
            {
              t: 'Alphabetically by supplier name, not by date.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the team doing with the documents "currently"?</i> — it answers <i>How are invoices arranged in the blue folders?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He is scanning the bank statements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the team doing with the documents "currently"?</i> — it answers <i>What is Ryan doing now?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Red binders, and there is one binder for each company.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the team doing with the documents "currently"?</i> — it answers <i>What color are the binders for bank statements, and how many are there?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What is Ryan doing now?',
          evidence: 'And what about the bank statements?',
          options: [
            {
              t: 'They are digitizing everything, so the documents are scanned first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Ryan doing now?</i> — it answers <i>What is the team doing with the documents "currently"?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He is scanning the bank statements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “And what about the bank statements?”'
            },
            {
              t: 'Red binders, and there is one binder for each company.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Ryan doing now?</i> — it answers <i>What color are the binders for bank statements, and how many are there?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Alphabetically by supplier name, not by date.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is Ryan doing now?</i> — it answers <i>How are invoices arranged in the blue folders?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Why should Ryan not use staples?',
          evidence: 'Staples damage the scanner.',
          options: [
            {
              t: 'Red binders, and there is one binder for each company.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why should Ryan not use staples?</i> — it answers <i>What color are the binders for bank statements, and how many are there?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are digitizing everything, so the documents are scanned first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why should Ryan not use staples?</i> — it answers <i>What is the team doing with the documents "currently"?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because staples damage the scanner. He must use a paperclip instead.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Staples damage the scanner.”'
            },
            {
              t: 'Alphabetically by supplier name, not by date.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why should Ryan not use staples?</i> — it answers <i>How are invoices arranged in the blue folders?</i> Check what the question actually asks for before you look for it in the text.'
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
