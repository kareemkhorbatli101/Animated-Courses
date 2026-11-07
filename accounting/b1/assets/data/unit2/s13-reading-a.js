/* Unit 2 §13 — Part 5, Reading A: The Month-End Close. */
EAFM.page('u2-s13', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 5 · Reading A', page: 2, section: '13',
          lesson: 'Part 5 · Reading', title: 'Reading A — the month-end close' },
  objective: 'Follow a whole month-end, and find the proof for each answer',
  prev: 's12-speaking', prevLabel: 'Speaking',
  next: 's14-reading-b', nextLabel: 'Reading B',
  intro: '<b>Before you read:</b> What tasks do you think a finance officer does at the end of a month?',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 2 · Reading A', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'Read the whole text. You can listen to it, hear one sentence at a time, or watch it as a scene. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'The Month-End Close',
        listenLabel: 'Listen to the whole reading',
        say: { scene: 'u2-reading-a', who: 'narr' },
        watch: { scene: 'u2-reading-a', label: 'Watch it as a scene',
          title: 'The Month-End Close', lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'Last month was a very busy month for Fadi. His office managed three separate projects at the same time. Every day, money came in and money went out. Fadi carefully documented every single transaction. He recorded each payment and each receipt in the journal. By the end of the month, the journal contained two hundred separate entries.',
          'Then came the most demanding task of all: the month-end close. On the last day, Fadi arrived early. He prepared a cup of coffee, and he opened his detailed files. First, he checked every entry in the journal. He searched for mistakes, and he found two small ones. A tired colleague posted one expense to the wrong account. Fadi corrected it calmly.',
          'Next, he transferred all the entries to the ledger. Every debit matched a credit, so the numbers agreed. After that, Fadi reconciled the cash and the bank. While he was counting the cash, Samah brought him the last receipt. He added it to the journal, and he posted it too. Finally, Fadi prepared a clear financial statement. The statement displayed the total income and the total expense for the whole month.',
          'Fadi checked it twice. The income was clear, and every expense had a receipt. Mr Haytham reviewed the statement in the afternoon. He smiled, because the work was clean and complete. Fadi felt tired but happy. He closed the books for another difficult month. The record was completely honest, and the numbers told the true story.',
          'Later, Fadi reflected on the whole process. Every entry represented a real event in the organisation. Every receipt supported a real payment. Because of this discipline, the accounts described reality exactly. This accuracy, he understood, was the real purpose of his profession. He closed his laptop slowly. Outside, the evening was quiet. Fadi felt the deep calm of a finished job. Another honest month now lived safely in the records.'
        ]
      },
      worked: {
        q: '0. How many entries did the journal hold by the end of the month?',
        a: 'two hundred',
        why: 'The last sentence of the first paragraph: "the journal contained two hundred separate entries". A good short answer gives the number and stops.'
      },
      items: [
        {
          q: '1. What did Fadi find when he checked the journal?',
          evidence: 'the sentence beginning "He searched for mistakes…".',
          jump: { scene: 'u2-reading-a', line: 6 },
          options: [
            { t: 'Two small mistakes.', ok: true,
              why: 'Right — "He searched for mistakes, and he found two small ones." Audio 2.2 reports the same number to Mr Haytham, which is a useful check that you have the right detail.' },
            { t: 'Two hundred entries.', ok: false,
              why: 'That is how many entries there were, from the paragraph before — not what he found wrong in them.' },
            { t: 'A missing receipt.', ok: false,
              why: 'No receipt is missing here. Samah brings the last one later, and that is normal rather than a problem. (A missing receipt is Case 2 in Part 9.)' },
            { t: 'Nothing at all.', ok: false,
              why: 'He found two. Note that the text treats finding them as success, not failure.' }
          ]
        },
        {
          q: '2. What did Samah bring him while he was counting the cash?',
          evidence: 'the sentence beginning "While he was counting the cash…".',
          jump: { scene: 'u2-reading-a', line: 9 },
          options: [
            { t: 'A cup of coffee.', ok: false,
              why: 'Fadi makes his own coffee earlier in the text, and in the opening Read it is his manager who brings him one. Two different people and two different moments.' },
            { t: 'The last receipt.', ok: true,
              why: 'Right — "While he was counting the cash, Samah brought him the last receipt." And the sentence shows this unit’s grammar: a long action in the continuous, a short one in the simple landing inside it.' },
            { t: 'The financial statement.', ok: false,
              why: 'Fadi prepares that himself, at the end. Mr Haytham reviews it; nobody brings it to Fadi.' },
            { t: 'A new journal.', ok: false,
              why: 'Nothing new is started. The month-end is about closing.' }
          ]
        },
        {
          q: '3. What did the final statement show?',
          evidence: 'the sentence beginning "The statement displayed…".',
          jump: { scene: 'u2-reading-a', line: 10 },
          options: [
            { t: 'The two hundred entries, one by one.', ok: false,
              why: 'Those are in the journal. A statement gives totals — that is what makes it a statement rather than a list.' },
            { t: 'The total income and the total expense for the whole month.', ok: true,
              why: 'Right — "The statement displayed the total income and the total expense for the whole month." Both words matter: <i>total</i>, and <i>for the whole month</i>.' },
            { t: 'The mistakes Fadi found.', ok: false,
              why: 'They were corrected before the statement was made, so they do not appear in it.' },
            { t: 'The cash in the cash box.', ok: false,
              why: 'The cash was reconciled earlier, in a separate step.' }
          ]
        },
        {
          q: '4. Why did Mr Haytham smile when he read the statement? (inference)',
          evidence: 'the sentence beginning "He smiled, because…".',
          jump: { scene: 'u2-reading-a', line: 12 },
          options: [
            { t: 'Because the work was clean and complete.', ok: true,
              why: 'Right — the text gives the reason in the same sentence: "He smiled, because the work was clean and complete." Two tests, both met: nothing wrong, and nothing left out.' },
            { t: 'Because Fadi finished early.', ok: false,
              why: 'Fadi arrived early; he did not finish early. The day ends with him closing his laptop slowly in a quiet evening.' },
            { t: 'Because the project made money.', ok: false,
              why: 'Nothing in the text is about profit. An aid organisation’s statement reports what came in and what went out, not whether it won.' },
            { t: 'Because there were no mistakes.', ok: false,
              why: 'There were two. What produced the smile is that they were found and corrected — the close worked.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['RA1', 'RA2', 'RA3'], ref: '5A-B',
      bookRef: 'Unit 2 · Reading A · B', type: 'quizset',
      title: 'Choose the best answer',
      instruction: 'Three questions, four options each.',
      visual: { spot: 'statement', caption: '"the total income and the total expense for the whole month"' },
      items: [
        {
          q: 'RA1. Last month, the journal held about…',
          evidence: 'the last sentence of the first paragraph.',
          options: [
            { t: 'two hundred entries', ok: true,
              why: 'Right — "the journal contained two hundred separate entries". Reading B returns to the same number: "this entry joined two hundred others".' },
            { t: 'ten thousand pages', ok: false,
              why: 'Entries, not pages, and two orders of magnitude out. An option this far from the text is there to be eliminated quickly.' },
            { t: 'three staff names', ok: false,
              why: 'Three is in the text — "three separate projects" — but attached to a different noun. Borrowing a number from the right text and the wrong sentence is the usual trap.' },
            { t: 'one small coin', ok: false,
              why: 'A journal holds entries, not money.' }
          ]
        },
        {
          q: 'RA2. Fadi found two small mistakes and…',
          evidence: 'the sentence beginning "Fadi corrected it…".',
          options: [
            { t: 'ignored them all', ok: false,
              why: 'The opposite. Part 9 Case 2 is built on exactly this refusal to ignore a difference.' },
            { t: 'hid them away', ok: false,
              why: 'Nothing is hidden. The text’s closing idea is that the accounts "described reality exactly".' },
            { t: 'corrected them', ok: true,
              why: 'Right — "Fadi corrected it calmly." The adverb matters too: a mistake found during a check is routine, not a crisis.' },
            { t: 'blamed the donor', ok: false,
              why: 'The mistake came from a tired colleague, and the text does not blame him either.' }
          ]
        },
        {
          q: 'RA3. At the month-end, Fadi finally prepared a…',
          evidence: 'the sentence beginning "Finally, Fadi prepared…".',
          options: [
            { t: 'long holiday', ok: false,
              why: 'Not in the text — the day ends with him closing his laptop, not leaving.' },
            { t: 'statement', ok: true,
              why: 'Right — "Finally, Fadi prepared a clear financial statement." The word <i>finally</i> is doing the work: it is the last step of the close.' },
            { t: 'new office', ok: false,
              why: 'Nothing is built or moved.' },
            { t: 'big party', ok: false,
              why: 'The text is deliberately quiet at the end: "Outside, the evening was quiet."' }
          ]
        }
      ]
    }
  ]
});
