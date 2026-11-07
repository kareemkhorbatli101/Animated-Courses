/* Unit 2 §2 — the opening Read, with the book's comprehension and T/F. */
EAFM.page('u2-s02', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Read', page: 2, section: '2',
          lesson: 'Opening', title: 'Read — the story of the past' },
  objective: 'See why accounting is written in the past tense',
  prev: 's01-warmup', prevLabel: 'Warm up',
  next: 's03-vocab-match', nextLabel: 'Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Read · A'], ref: 'A', bookRef: 'Unit 2 · Read A', type: 'quizset',
      title: 'Read the text, then answer',
      instruction: 'Read the whole text. You can listen to it, hear one sentence at a time, or watch it as a scene. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'Accounting is the story of the past',
        listenLabel: 'Listen to the whole text',
        say: { scene: 'u2-read-past', who: 'narr' },
        watch: { scene: 'u2-read-past', label: 'Watch it as a scene',
          title: 'Accounting is the story of the past',
          lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'Accounting is the story of the past. Every day, an organisation spends money and receives money. The finance team writes down each of these events. We call each event a transaction, and we record it as soon as it happens. Last month, Fadi recorded many transactions. He wrote each one in the journal, in date order.',
          'At the end of the month, he did something important. He closed the books. This work is the month-end. During the month-end, Fadi checked every entry. He posted the entries to the ledger. Then he prepared a statement of the income and the expense. Yesterday, he finished the whole process. While he was working late, his manager brought him a coffee. Fadi smiled and continued.',
          'He knew that a clean record protects the organisation. This unit uses the past simple, because accounting looks back. It records what happened, so that everybody trusts the numbers. Last month gave Fadi many examples. He recorded, he checked, and he reported. Every task belonged to the past. So the past simple was the natural tense for his work.'
        ]
      },
      worked: {
        q: '0. What is accounting, according to the text?',
        a: 'the story of the past',
        why: 'The first sentence, word for word: "Accounting is the story of the past." A good short answer comes straight off the page and stops where the question stops.'
      },
      items: [
        {
          q: '1. Where did Fadi write each transaction?',
          evidence: 'the sentence beginning "He wrote each one…".',
          jump: { scene: 'u2-read-past', line: 3 },
          options: [
            { t: 'In the journal, in date order.', ok: true,
              why: 'Right — "He wrote each one in the journal, in date order." Both halves matter: which book, and in what order. Date order is what makes a journal a journal.' },
            { t: 'In the ledger.', ok: false,
              why: 'The ledger comes later: "He posted the entries to the ledger." Posting is the move from one book to the other, so the ledger is never where an entry starts.' },
            { t: 'On the receipt.', ok: false,
              why: 'A receipt comes from outside and proves a payment. Nothing is written into it by the finance office.' },
            { t: 'In the statement.', ok: false,
              why: 'The statement is the last thing made, out of everything else: "Then he prepared a statement of the income and the expense."' }
          ]
        },
        {
          q: '2. What did Fadi do at the end of the month?',
          evidence: 'the sentences beginning "At the end of the month…".',
          jump: { scene: 'u2-read-past', line: 4 },
          options: [
            { t: 'He opened a new journal.', ok: false,
              why: 'Nothing is opened in this text. The month-end is about finishing, not starting.' },
            { t: 'He closed the books.', ok: true,
              why: 'Right — "At the end of the month, he did something important. He closed the books. This work is the month-end." The text names the action and then names the name for it.' },
            { t: 'He paid the staff.', ok: false,
              why: 'Paying people would be a transaction to record, not the month-end itself.' },
            { t: 'He went home early.', ok: false,
              why: 'The opposite — "While he was working late, his manager brought him a coffee."' }
          ]
        },
        {
          q: '3. What did his manager bring him while he was working late?',
          evidence: 'the sentence beginning "While he was working late…".',
          jump: { scene: 'u2-read-past', line: 7 },
          options: [
            { t: 'The last receipt.', ok: false,
              why: 'That is Samah, in Audio 2.2 and in Reading A — a different person and a different moment. Watch for an answer borrowed from elsewhere in the unit.' },
            { t: 'A coffee.', ok: true,
              why: 'Right — "While he was working late, his manager brought him a coffee." Notice the shape of the sentence: a long action in the past continuous, interrupted by a short one in the past simple. That is this unit’s grammar in one line.' },
            { t: 'The statement.', ok: false,
              why: 'Fadi prepares the statement himself; nobody brings it to him.' },
            { t: 'A new file.', ok: false,
              why: 'No file is mentioned in this text.' }
          ]
        },
        {
          q: '4. Why does this unit use the past simple? (inference)',
          evidence: 'the two sentences beginning "This unit uses the past simple, because…".',
          jump: { scene: 'u2-read-past', line: 8 },
          options: [
            { t: 'Because accounting looks back and records what happened.', ok: true,
              why: 'Right, and the text gives the reason twice. "This unit uses the past simple, because accounting looks back. It records what happened, so that everybody trusts the numbers." The trust depends on the record being about what already happened.' },
            { t: 'Because the past simple is easier than other tenses.', ok: false,
              why: 'Difficulty is never mentioned, and the unit teaches irregular verbs precisely because the past simple is not always easy.' },
            { t: 'Because Fadi works in the evening.', ok: false,
              why: 'He does work late once, but the time of day has nothing to do with the tense.' },
            { t: 'Because the donors asked for it.', ok: false,
              why: 'The donors are not in this text. Trust is mentioned — "so that everybody trusts the numbers" — but as the purpose of the record, not as a request.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Read · B'], ref: 'B', bookRef: 'Unit 2 · Read B', type: 'quizset',
      title: 'True or false?',
      instruction: 'Read each statement and decide whether the text says it is true or false. The first one is done for you.',
      visual: { spot: 'journal', caption: 'Every answer here is decided by the text on the previous card.' },
      worked: {
        q: '0. The finance team writes down each transaction.',
        a: 'True',
        why: 'The text says it almost word for word: "The finance team writes down each of these events." Shown so you can see what proof looks like — a sentence you could point at.'
      },
      items: [
        {
          q: '1. Fadi wrote the transactions in no particular order.',
          evidence: 'the sentence beginning "He wrote each one…".',
          jump: { scene: 'u2-read-past', line: 3 },
          options: [
            { t: 'True', ok: false,
              why: 'The text names the order explicitly: "in date order". Those three words are the whole answer.' },
            { t: 'False', ok: true,
              why: 'Right — "He wrote each one in the journal, in date order." A journal without date order would not be a journal.' }
          ]
        },
        {
          q: '2. The month-end is when Fadi closes the books.',
          evidence: 'the sentences beginning "He closed the books…".',
          jump: { scene: 'u2-read-past', line: 4 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — "He closed the books. This work is the month-end." The second sentence defines the first.' },
            { t: 'False', ok: false,
              why: 'The text gives the definition directly, in two short sentences next to each other.' }
          ]
        },
        {
          q: '3. The finance team never writes down the transactions.',
          evidence: 'the sentence beginning "The finance team writes down…".',
          jump: { scene: 'u2-read-past', line: 2 },
          options: [
            { t: 'True', ok: false,
              why: 'Writing them down is the first thing the text says the team does. A word like "never" is almost always worth checking against the page.' },
            { t: 'False', ok: true,
              why: 'Right — "The finance team writes down each of these events." This is statement 0 with <i>never</i> added, which is the commonest way a false statement is built.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: [], ref: 'C', bookRef: 'Unit 2 · Read', type: 'study',
      title: 'The three books, in order',
      instruction: 'The text names three places a transaction lives, in a fixed order. Read them together once — §3, §11, §14 and §15 all come back to this.',
      visual: { art: 'transaction-flow', wide: true,
        caption: 'The same three stages the warm-up diagram shows, now with the sentences from the text beside them.' },
      html:
        '<ol style="margin:0;padding-left:20px;line-height:1.95">' +
        '<li><b>The receipt</b> — it comes from outside and proves the payment happened.</li>' +
        '<li><b>The journal</b> — "He wrote each one in the journal, in date order."</li>' +
        '<li><b>The ledger</b> — "He posted the entries to the ledger." Moving an entry from one to the other is called <i>posting</i>.</li>' +
        '</ol>' +
        '<p class="wc" style="margin-top:12px">And then, once a month: <b>the statement</b> — ' +
        '"a statement of the income and the expense".</p>',
      doneLabel: 'I have read the three books',
      playable: [
        'He wrote each one in the journal, in date order.',
        'He posted the entries to the ledger.',
        'Then he prepared a statement of the income and the expense.'
      ]
    }
  ]
});
