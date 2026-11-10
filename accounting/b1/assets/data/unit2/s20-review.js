/* Unit 2 §20 — Part 10, Review and Can-Do.

   The only screen in the unit that reports a score. Six sections.

   One thing is silently repaired here: in the printed book this part is
   lettered TWICE and the two disagree from C onwards — the headings run
   A B C D E F while the instruction lines under them run A B D E F G, so a
   learner looking for section C cannot find it. The site shows one letter
   per section, the book's heading letter. See the ERRATA. */
EAFM.page('u2-s20', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 10', page: 2, section: '20',
          lesson: 'Part 10 · Review', title: 'Review and Can-Do' },
  objective: 'Check the whole unit: vocabulary, grammar, reading, listening, speaking, writing',
  prev: 's19-cases', prevLabel: 'Case studies',
  next: 's21-foundations', nextLabel: 'Foundations',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: 'A',
      bookRef: 'Unit 2 · Part 10 · A', type: 'cloze',
      title: 'A. Vocabulary',
      instruction: 'Complete the sentences with a word from the box. <b>There is one word you do not need.</b>',
      visual: { spot: 'journal', caption: 'All five definitions come from §3 and §14.' },
      before: '<b>Box:</b> journal · debit · credit · receipt · income · posting',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. The first book where we write each transaction is the [[1]].<br>' +
        '2. An entry on the left side of an account is a [[2]].<br>' +
        '3. An entry on the right side of an account is a [[3]].<br>' +
        '4. A paper that proves a payment took place is a [[4]].<br>' +
        '5. Money that the organisation receives is [[5]].' +
        '</div>',
      answers: { '1': ['journal'], '2': ['debit'], '3': ['credit'],
                 '4': ['receipt'], '5': ['income'] },
      bank: ['journal', 'debit', 'credit', 'receipt', 'income', 'posting'],
      whyTitle: 'The five, and the one left over',
      why: {
        '1': '<b>journal</b> — the word that decides it is <i>first</i>. The ledger is where entries end up.',
        '2': '<b>debit</b> — left. A position on the page, not a direction of money.',
        '3': '<b>credit</b> — right. The same sentence as the one above with a single word changed, which is why these two must be learned together.',
        '4': '<b>receipt</b> — <i>proves</i>. Compare the voucher, which <i>approves</i>.',
        '5': '<b>income</b> — money received. The word you do not need is <b>posting</b>: it is the one item in the box that is an action rather than a thing, which is the quickest way to spot it.'
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: 'B',
      bookRef: 'Unit 2 · Part 10 · B', type: 'cloze',
      title: 'B. Grammar (this unit)',
      instruction: 'Complete with the past simple or past continuous.',
      visual: { art: 'two-actions', caption: 'Four finished actions and one that was still running.' },
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. Yesterday, Fadi [[1]] (record) every transaction.<br>' +
        '2. He [[2]] (write) the entry in the journal.<br>' +
        '3. While he [[3]] (count) the cash, Samah arrived.<br>' +
        '4. The team [[4]] (not / forget) the receipt.<br>' +
        '5. Last month, money [[5]] (come) in and went out.' +
        '</div>',
      answers: {
        '1': ['recorded'], '2': ['wrote'], '3': ['was counting'],
        '4': ['did not forget', "didn't forget"], '5': ['came']
      },
      bank: ['recorded', 'wrote', 'was counting', 'did not forget', 'came'],
      whyTitle: 'What decided each one',
      why: {
        '1': '"Yesterday" closes the action, so past simple. Regular, so <b>recorded</b>.',
        '2': 'Irregular: <i>write</i> → <b>wrote</b>. There is no <i>writed</i>.',
        '3': '"While" marks the longer action, so was/were + -ing. <i>He</i> takes <b>was</b>.',
        '4': '<i>Did not</i> carries the past, so the verb is the base form: <b>did not forget</b>, never <i>did not forgot</i>.',
        '5': 'Irregular: <i>come</i> → <b>came</b>. Note <i>went</i> in the same sentence — two irregulars side by side.'
      }
    },
    {
      id: 'c3', covers: ['Part 10'], ref: 'C',
      bookRef: 'Unit 2 · Part 10 · C', type: 'quizset',
      title: 'C. Reading',
      instruction: 'Read the short text and answer the questions.',
      passage: {
        style: 'article',
        title: 'Last month, in one paragraph',
        paras: [
          'Last month, Fadi recorded two hundred transactions in the journal. At the month-end, he checked every entry. He found two small mistakes, and he corrected them. Then he posted the entries to the ledger, and every debit matched a credit. While he was counting the cash, Samah brought the last receipt. Fadi added it and posted it. Finally, he prepared a statement of income and expense. The record was honest and complete.'
        ]
      },
      items: [
        {
          q: '1. How many transactions did Fadi record last month?',
          evidence: 'the first sentence.',
          options: [
            { t: 'Two hundred.', ok: true,
              why: 'Right — "Fadi recorded two hundred transactions in the journal." Reading A gives the same figure, counted as entries.' },
            { t: 'Two.', ok: false,
              why: 'Two is the number of <b>mistakes</b> he found, two sentences later. Taking a number from the right text and the wrong sentence is the usual trap.' },
            { t: 'Twelve thousand.', ok: false,
              why: 'That is an amount of money, from Audio 2.5 — what Layth’s project spent, not how many transactions there were.' },
            { t: 'The text does not say.', ok: false,
              why: 'It is the first thing the paragraph says.' }
          ]
        },
        {
          q: '2. What was Fadi doing when Samah brought the last receipt?',
          evidence: 'the sentence beginning "While he was counting the cash…".',
          options: [
            { t: 'He was posting the entries.', ok: false,
              why: 'Posting happens in the sentence before, and in the past simple — a finished step, not the one in progress.' },
            { t: 'He was counting the cash.', ok: true,
              why: 'Right — "While he was counting the cash, Samah brought the last receipt." The continuous names what was already running; the simple names what interrupted it.' },
            { t: 'He was preparing the statement.', ok: false,
              why: 'That is the last step: "Finally, he prepared a statement."' },
            { t: 'He was correcting the mistakes.', ok: false,
              why: 'Already finished by then — "he corrected them", past simple.' }
          ]
        },
        {
          q: '3. Why was the record honest and complete? (inference)',
          evidence: 'the whole sequence, and the last sentence.',
          options: [
            { t: 'Because Fadi checked every entry, corrected what was wrong, and left nothing out.', ok: true,
              why: 'Right, and the paragraph earns the claim step by step: he checked every entry, found and corrected two mistakes, posted everything, added the late receipt, and only then prepared the statement. <i>Honest</i> comes from the correcting; <i>complete</i> comes from the last receipt being added rather than ignored.' },
            { t: 'Because there were two hundred transactions.', ok: false,
              why: 'Size is not honesty. Two hundred careless entries would be neither.' },
            { t: 'Because Samah helped him.', ok: false,
              why: 'She brought one receipt. Useful, but the paragraph credits the process rather than the helper.' },
            { t: 'Because he finished quickly.', ok: false,
              why: 'Speed is never claimed anywhere in this unit, and Part 9 Case 3 argues directly against it.' }
          ]
        }
      ]
    },
    {
      id: 'c4', covers: ['Part 10'], ref: 'D',
      bookRef: 'Unit 2 · Part 10 · D', type: 'quizset',
      title: 'D. Listening review',
      instruction: 'Look again at Audio 2.2 (Fadi and Mr Haytham). <b>Without listening again</b>, try to answer. Use <b>Look again</b> only if you need to.',
      visual: { spot: 'month-end', caption: 'From memory first. The recording is still there if you need it.' },
      items: [
        {
          q: '1. When did Fadi finish the month-end?',
          evidence: 'Audio 2.2: "Yes, I finished it yesterday."',
          jump: { scene: 'u2-haytham', line: 2 },
          options: [
            { t: 'Yesterday.', ok: true,
              why: 'Right — "Yes, I finished it yesterday. It was a long day."' },
            { t: 'Last week.', ok: false,
              why: 'The dialogue dates it precisely, and a month-end happens at the end of a month.' },
            { t: 'This morning.', ok: false,
              why: 'The conversation itself is the report; the work was already done before it started.' },
            { t: 'He had not finished.', ok: false,
              why: 'Mr Haytham asks "Did you finish everything?" and the answer begins with "Yes".' }
          ]
        },
        {
          q: '2. What mistake did the colleague make?',
          evidence: 'Audio 2.2: "A colleague posted an expense to the wrong account."',
          jump: { scene: 'u2-haytham', line: 4 },
          options: [
            { t: 'He posted an expense to the wrong account.', ok: true,
              why: 'Right — and it is the same mistake as Part 9 Case 1, which asks you to decide what to do about it.' },
            { t: 'He lost a receipt.', ok: false,
              why: 'That is Case 2, a different situation and a different person.' },
            { t: 'He forgot to post an entry.', ok: false,
              why: 'Nothing was forgotten. The entry was posted — just to the wrong place.' },
            { t: 'He counted the cash wrongly.', ok: false,
              why: 'The cash reconciled without trouble: "I reconciled it."' }
          ]
        }
      ]
    },
    {
      id: 'c5', covers: ['Part 10'], ref: 'E',
      bookRef: 'Unit 2 · Part 10 · E', type: 'discuss',
      title: 'E. Speaking',
      instruction: 'Work in pairs. Take turns to report what you did recently. Not marked — but say every answer aloud before you write it.',
      visual: { spot: 'manager', caption: 'Say it before you write it.' },
      minWords: 10,
      questions: [
        { q: '1. Say what you did yesterday (past simple).' },
        { q: '2. Describe what you were doing when a problem appeared (past continuous).' },
        { q: '3. Explain how you fixed it.' }
      ],
      ideas: ['yesterday I…', 'first… then…', 'while I was…ing',
              'I didn’t…', 'did you…?'],
      okMsg: 'Good. That is the Can-Do for this unit.'
    },
    {
      id: 'c6', covers: ['Part 10'], ref: 'F',
      bookRef: 'Unit 2 · Part 10 · F', type: 'writer',
      title: 'F. Writing',
      instruction: 'Write a short month-end report (40–60 words). Use the past simple.',
      visual: { spot: 'statement', caption: 'The same task as W1, at a third of the length. Cutting is the skill.' },
      minWords: 40,
      pastCheck: true,
      stems: ['Last month, I recorded…', 'At the month-end, I checked…',
              'I found…, so I…', 'Finally, I prepared…'],
      paras: [
        { label: 'What you recorded', purpose: 'one sentence, past simple.' },
        { label: 'The checks you did', purpose: 'one sentence.' },
        { label: 'A problem and how you fixed it', purpose: 'one sentence.' },
        { label: 'The final statement', purpose: 'what was true at the end.' }
      ],
      coach: {
        title: 'Check your report',
        target: 'past simple',
        minWords: 40,
        taught: ['Forty to sixty words leaves room for about four sentences.',
                 'Everything is finished, so everything is past simple.'],
        task: 'Write a short month-end report (40–60 words) using the past simple.',
        parts: ['What you recorded', 'The checks you did', 'A problem and how you fixed it',
                'The final statement'],
        example: [
          'Last month I recorded about ninety payments in the cash book. At the month-end I checked every entry against the receipts. I found one receipt with no date, so I asked the driver and he signed it. Finally I prepared the statement, and the cash agreed with the book.'
        ],
        exampleNote: 'That example is 52 words and does all four parts. Yours should be about your own work.',
        criteria: [
          { t: 'Between 40 and 60 words.' },
          { t: 'Past simple throughout.' },
          { t: 'A problem, and what you did about it.' },
          { t: 'A result at the end.' }
        ]
      }
    }
  ]
});
