/* Unit 2 §10 — Audio 2.2, Mr Haytham asks Fadi how the month-end went.

   The book's key reprints this dialogue's four comprehension questions
   instead of answering them (see the ERRATA), so every answer below is
   DERIVED from Fadi's own lines and the evidence names the line it came
   from. The T/F answers ARE in the key (0 T, 1 F, 2 T, 3 F) and agree. */
EAFM.page('u2-s10', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Audio 2.2', page: 2, section: '10',
          lesson: 'Part 3 · Listening', title: 'Audio 2.2 — how the month-end went' },
  objective: 'Follow a report of finished work, and hear both past tenses in use',
  prev: 's09-pronunciation', prevLabel: 'Pronunciation',
  next: 's11-dialogue-2', nextLabel: 'Audio 2.3',
  intro: '<b>Before you listen:</b> Mr Haytham asks Fadi about the month-end close. <b>While you listen:</b> What did Fadi do at the month-end? What went wrong?',
  cards: [
    {
      id: 'c1', covers: ['Audio 2.2', 'Part 3'], ref: '2.2',
      bookRef: 'Unit 2 · Audio 2.2', type: 'scene',
      title: 'Listen to the conversation',
      instruction: 'Play the whole conversation, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it. English and Arabic subtitles are in the bar under the stage.',
      scene: 'u2-haytham',
      after: '<b>Useful phrases:</b> I finished it yesterday · I found two mistakes · I corrected it at once · while I was counting… · I added it and I posted it · the numbers agreed'
    },
    {
      id: 'c2', covers: ['Audio 2.2'], ref: 'A',
      bookRef: 'Unit 2 · Audio 2.2 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Answer from what Fadi says. Each question points at the line that settles it — use <b>Look again</b> to hear it.',
      visual: { spot: 'month-end', caption: 'One long day, reported afterwards — which is why almost every verb is past simple.' },
      items: [
        {
          q: '1. When did Fadi finish the month-end?',
          evidence: 'Fadi’s first answer: "Yes, I finished it yesterday."',
          jump: { scene: 'u2-haytham', line: 2 },
          options: [
            { t: 'Yesterday.', ok: true,
              why: 'Right — "Yes, I finished it yesterday. It was a long day." Both sentences are past simple, because both are finished.' },
            { t: 'This morning.', ok: false,
              why: 'Nothing in the dialogue happens this morning. The conversation is a report about work already done.' },
            { t: 'Last week.', ok: false,
              why: 'A month-end happens at the end of a month, and Fadi dates it exactly: yesterday.' },
            { t: 'He has not finished it.', ok: false,
              why: 'He begins with "Yes" — Mr Haytham asked "Did you finish everything?" and the answer is an unambiguous yes.' }
          ]
        },
        {
          q: '2. What mistake did the colleague make?',
          evidence: 'Fadi’s answer about the two small mistakes.',
          jump: { scene: 'u2-haytham', line: 4 },
          options: [
            { t: 'He forgot a receipt.', ok: false,
              why: 'No receipt is forgotten here. Samah brings the last one later, and that is not a mistake at all.' },
            { t: 'He posted an expense to the wrong account.', ok: true,
              why: 'Right — "A colleague posted an expense to the wrong account." Reading A says the same with a reason attached: "A tired colleague posted one expense to the wrong account." Case 1 in Part 9 is this mistake again, asked as a decision.' },
            { t: 'He lost the journal.', ok: false,
              why: 'Nothing is lost. A wrong account is a misplaced entry, not a missing book.' },
            { t: 'He counted the cash twice.', ok: false,
              why: 'Counting twice would be careful, not mistaken — and it is Fadi who checks the statement twice, in Reading A.' }
          ]
        },
        {
          q: '3. What was Fadi doing when Samah brought the last receipt?',
          evidence: 'Fadi’s line: "While I was counting, Samah brought the last receipt."',
          jump: { scene: 'u2-haytham', line: 8 },
          options: [
            { t: 'He was counting the cash.', ok: true,
              why: 'Right — "I reconciled it. While I was counting, Samah brought the last receipt." The question asks what was in progress, so the answer is the past continuous, and the sentence hands it to you with <i>while</i>.' },
            { t: 'He was preparing the statement.', ok: false,
              why: 'That comes afterwards: "Then I prepared the statement." <i>Then</i> puts it after everything else.' },
            { t: 'He was correcting the mistake.', ok: false,
              why: 'Already done by this point, and in the simple: "I corrected it at once."' },
            { t: 'He was posting the entries.', ok: false,
              why: 'He does post — "I added it and I posted it" — but that is what he did <i>after</i> the receipt arrived, not while it was arriving.' }
          ]
        },
        {
          q: '4. Why does Mr Haytham say the record looks clean?',
          evidence: 'Fadi’s last line, which gives the two reasons.',
          jump: { scene: 'u2-haytham', line: 12 },
          options: [
            { t: 'Because Fadi finished early.', ok: false,
              why: 'He finished after "a long day" — speed is not the claim anywhere in this dialogue.' },
            { t: 'Because there were no mistakes at all.', ok: false,
              why: 'There were two. What makes the record clean is that they were found and corrected, not that they never happened.' },
            { t: 'Because every expense had a receipt and the numbers agreed.', ok: true,
              why: 'Right — Fadi answers the compliment with the evidence for it: "Every expense had a receipt, and the numbers agreed." Two separate tests: every payment is proved, and the two sides balance.' },
            { t: 'Because Samah helped him.', ok: false,
              why: 'She brought one receipt, which was useful — but Fadi names the proof, not the helper.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Audio 2.2'], ref: 'B',
      bookRef: 'Unit 2 · Audio 2.2 · B', type: 'quizset',
      title: 'Listen again — true or false?',
      instruction: 'Write T (true) or F (false). The first one is done for you.',
      visual: { spot: 't-accounts', caption: '"Then every debit matched a credit."' },
      worked: {
        q: '0. Fadi finished the month-end yesterday.',
        a: 'True',
        why: 'Done for you — "Yes, I finished it yesterday", word for word.'
      },
      items: [
        {
          q: '1. Fadi found no mistakes at all.',
          evidence: '"I found two small mistakes."',
          jump: { scene: 'u2-haytham', line: 4 },
          options: [
            { t: 'True', ok: false,
              why: 'He found two. The word <i>small</i> may make them feel like nothing, but the dialogue counts them.' },
            { t: 'False', ok: true,
              why: 'Right — "I found two small mistakes." Note that finding them is what made the close successful, not a failure in it.' }
          ]
        },
        {
          q: '2. Fadi corrected the mistake at once.',
          evidence: '"Yes, I corrected it at once."',
          jump: { scene: 'u2-haytham', line: 6 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — word for word, and the next clause gives the result: "Then every debit matched a credit."' },
            { t: 'False', ok: false,
              why: 'Mr Haytham asks "Did you correct it?" and the answer begins with "Yes".' }
          ]
        },
        {
          q: '3. The numbers did not agree.',
          evidence: '"Every expense had a receipt, and the numbers agreed."',
          jump: { scene: 'u2-haytham', line: 12 },
          options: [
            { t: 'True', ok: false,
              why: 'They agreed, and the dialogue says so twice — once as "every debit matched a credit" and once as "the numbers agreed".' },
            { t: 'False', ok: true,
              why: 'Right. This is the last line of the dialogue with <i>not</i> added, which is the commonest way a false statement is built.' }
          ]
        }
      ]
    }
  ]
});
