/* Unit 1 §20 — Part 10, Review and Can-Do.

   This is the only screen in the unit that reports a score, because it is
   the only part whose items all have a right answer. Six sections, A to F,
   in the book's own order and wording. */
EAFM.page('u1-s20', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 10', page: 1, section: '20',
          lesson: 'Part 10 · Review', title: 'Review and Can-Do' },
  objective: 'Check the whole unit: vocabulary, grammar, reading, listening, speaking, writing',
  prev: 's19-cases', prevLabel: 'Case studies',
  next: 's21-foundations', nextLabel: 'Foundations',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: 'A', bookRef: 'Unit 1 · Part 10 · A', type: 'cloze',
      title: 'A. Vocabulary',
      instruction: 'Complete the sentences with a word from the box. <b>There is one word you do not need.</b>',
      visual: { spot: 'ledger', caption: 'All five definitions come from §3 and §14.' },
      before: '<b>Box:</b> ledger · transaction · reconcile · balance · cash · bookkeeping',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. The main book that holds all the accounts is the [[1]].<br>' +
        '2. A single piece of financial business is a [[2]].<br>' +
        '3. To check that two records of money agree is to [[3]].<br>' +
        '4. The amount of money in an account at one moment is the [[4]].<br>' +
        '5. Money in the form of notes and coins is [[5]].' +
        '</div>',
      answers: { '1': ['ledger'], '2': ['transaction'], '3': ['reconcile'],
                 '4': ['balance'], '5': ['cash'] },
      bank: ['ledger', 'transaction', 'reconcile', 'balance', 'cash', 'bookkeeping'],
      whyTitle: 'The five, and the one left over',
      why: {
        '1': '<b>ledger</b> — the word that decides it is "main". An account holds one category; the ledger holds them all.',
        '2': '<b>transaction</b> — "a single piece of financial business". One event, in the world, before anybody writes it down.',
        '3': '<b>reconcile</b> — the only verb in the box, and the only definition with <i>two</i> records in it.',
        '4': '<b>balance</b> — "at one moment" is the whole definition. It is why Fadi can know it as a routine and still have it change each hour.',
        '5': '<b>cash</b> — notes and coins, the physical money. <b>bookkeeping</b> is the word you do not need: it is the daily work of writing transactions down, not a thing you can hold or count.'
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: 'B', bookRef: 'Unit 1 · Part 10 · B', type: 'cloze',
      title: 'B. Grammar (this unit)',
      instruction: 'Complete with the present simple or present continuous.',
      visual: { art: 'tense-timeline', caption: 'Three routines and two moments. The time words sort them.' },
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. Every morning, Fadi [[1]] (record) the transactions.<br>' +
        '2. Right now, he [[2]] (check) the cash box.<br>' +
        '3. The team [[3]] (prepare) a report every month.<br>' +
        '4. At the moment, Samah [[4]] (learn) the job.<br>' +
        '5. The finance team [[5]] (look) after the money.' +
        '</div>',
      answers: { '1': ['records'], '2': ['is checking'], '3': ['prepares'],
                 '4': ['is learning'], '5': ['looks'] },
      bank: ['records', 'is checking', 'prepares', 'is learning', 'looks'],
      whyTitle: 'What decided each one',
      why: {
        '1': '"Every morning" — a routine, so the simple; <i>Fadi</i> is he, so the s.',
        '2': '"Right now" — this moment, so <i>is</i> + -ing.',
        '3': '"Every month" — still a routine even though it is not daily. <i>The team</i> is one thing, so <i>prepares</i>.',
        '4': '"At the moment" — the same signal as "right now". Samah is in the middle of learning the job once, not learning it habitually.',
        '5': 'No time word at all, so it is the "fact" use of the simple — and the book’s own opening sentence: "The finance team looks after the money."'
      }
    },
    {
      id: 'c3', covers: ['Part 10'], ref: 'C', bookRef: 'Unit 1 · Part 10 · C', type: 'quizset',
      title: 'C. Reading',
      instruction: 'Read the short text and answer the questions.',
      passage: {
        style: 'article',
        title: 'Fadi, in one paragraph',
        paras: [
          'Fadi is a finance officer in Damascus. Every morning, he records the transactions and reconciles the cash. Every month, he prepares a report for the managers and the donors. Right now, he is training a new assistant, Samah. He also helps the programme team to plan the budget. Fadi does many different tasks, but they form one job: financial management. Good records keep the money safe, and safe money keeps the projects alive.'
        ]
      },
      items: [
        {
          q: '1. What does Fadi do every morning?',
          evidence: 'the second sentence.',
          options: [
            { t: 'He records the transactions and reconciles the cash.', ok: true,
              why: 'Right — both halves: "Every morning, he records the transactions and reconciles the cash." Two verbs, one time phrase.' },
            { t: 'He prepares a report for the managers.', ok: false,
              why: 'Monthly — "Every month, he prepares a report". The paragraph keeps the frequencies apart on purpose.' },
            { t: 'He trains Samah.', ok: false,
              why: 'That is what he is doing right now, in the continuous. A morning routine would be in the simple.' },
            { t: 'He plans the budget.', ok: false,
              why: 'He <i>helps</i> the programme team to plan it, and the paragraph gives it no frequency at all.' }
          ]
        },
        {
          q: '2. What is Fadi doing right now?',
          evidence: 'the sentence beginning "Right now…".',
          options: [
            { t: 'He is recording the transactions.', ok: false,
              why: 'A routine in this paragraph, not a now. The tense in the text is <i>records</i>, not <i>is recording</i>.' },
            { t: 'He is training a new assistant, Samah.', ok: true,
              why: 'Right — "Right now, he is training a new assistant, Samah." The time phrase and the tense agree, which is how you can be sure.' },
            { t: 'He is preparing a report.', ok: false,
              why: 'Monthly. Watch for an answer that is true of Fadi but not of this moment.' },
            { t: 'He is reconciling the cash.', ok: false,
              why: 'Part of the morning routine, in the present simple.' }
          ]
        },
        {
          q: '3. Why do the different tasks form one job? (inference)',
          evidence: 'the last two sentences.',
          options: [
            { t: 'Because they are all about money, and together they keep the money safe so the projects can continue.', ok: true,
              why: 'Right — the paragraph closes with the chain: "Good records keep the money safe, and safe money keeps the projects alive." That chain is what makes the separate tasks one job.' },
            { t: 'Because Fadi does them all himself.', ok: false,
              why: 'True of a small office, but it would still be one job if two people shared it. The unit makes this point in §2 question 4.' },
            { t: 'Because they all happen every morning.', ok: false,
              why: 'They do not — the paragraph names daily, monthly and right-now tasks separately.' },
            { t: 'Because the managers and donors ask for them.', ok: false,
              why: 'They read the output; they are not the reason the tasks belong together.' }
          ]
        }
      ]
    },
    {
      id: 'c4', covers: ['Part 10'], ref: 'D', bookRef: 'Unit 1 · Part 10 · D', type: 'quizset',
      title: 'D. Listening review',
      instruction: 'Look again at Audio 1.2 (Fadi and Samah). <b>Without listening again</b>, try to answer. Use <b>Look again</b> only if you need to.',
      visual: { spot: 'finance-officer', caption: 'From memory first. The recording is still there if you need it.' },
      items: [
        {
          q: '1. What does Fadi do first every morning?',
          evidence: 'Audio 1.2: "First, I check the accounts."',
          jump: { scene: 'u1-samah', line: 2 },
          options: [
            { t: 'He checks the accounts.', ok: true,
              why: 'Right — "First, I check the accounts. Then I record the new transactions."' },
            { t: 'He records the new transactions.', ok: false,
              why: 'Second: the word <i>Then</i> puts it after the checking.' },
            { t: 'He reconciles the cash.', ok: false,
              why: 'Third, after Samah asks "And after that?"' },
            { t: 'He trains Samah.', ok: false,
              why: 'That is happening at the moment, not every morning — and he mentions it last, as an extra.' }
          ]
        },
        {
          q: '2. What is Fadi doing right now in the dialogue?',
          evidence: 'Audio 1.2: "Right now, I am checking the bank balance."',
          jump: { scene: 'u1-samah', line: 6 },
          options: [
            { t: 'He is checking the bank balance.', ok: true,
              why: 'Right — "Right now, I am checking the bank balance. The numbers must agree."' },
            { t: 'He is counting the cash box.', ok: false,
              why: 'Reconciling the cash is part of the routine he describes, not what he is doing while they talk.' },
            { t: 'He is writing the monthly report.', ok: false,
              why: 'Monthly, and in the present simple: "Every month, I prepare a report."' },
            { t: 'He is meeting a manager.', ok: false,
              why: 'That is from the opening Read in §2, not from this dialogue.' }
          ]
        }
      ]
    },
    {
      id: 'c5', covers: ['Part 10'], ref: 'E', bookRef: 'Unit 1 · Part 10 · E', type: 'discuss',
      title: 'E. Speaking',
      instruction: 'Work in pairs. Take turns to describe your job or your day. Not marked — but say every answer aloud before you write it.',
      visual: { spot: 'manager', caption: 'Say every answer aloud before you write it.' },
      minWords: 10,
      questions: [
        { q: '1. Say what you do every day (present simple).' },
        { q: '2. Say what you are doing right now or this week (present continuous).' },
        { q: '3. Explain one important task and why it matters.' }
      ],
      ideas: ['every day I…', 'I usually…', 'right now I am…', 'this week I am…'],
      okMsg: 'Good. That is the Can-Do for this unit.'
    },
    {
      id: 'c6', covers: ['Part 10'], ref: 'F', bookRef: 'Unit 1 · Part 10 · F', type: 'writer',
      paras: [
        { label: 'Your name and job', purpose: '' },
        { label: 'Your daily routine (present simple)', purpose: '' },
        { label: 'What you are doing now (present continuous)', purpose: '' },
        { label: 'Why it matters', purpose: '' }
      ],
      title: 'F. Writing',
      instruction: 'Write a short self-introduction (40–60 words). Use the present simple and the present continuous.',
      visual: { spot: 'report', caption: 'The same task as W1, at a third of the length. Cutting is the skill.' },
      minWords: 40,
      aiCheck: {
        task: 'A short description of your job and your day, 40-60 words.',
        grammar: 'the present simple for routines, habits and facts (adding -s with he/she/it) and the present continuous (am/is/are + verb-ing) for what is happening now',
        reader: 'your teacher',
        must: [
          'your role',
          'two or three tasks',
          'both the present simple and the present continuous, each used for its own job'
        ]
      },
      stems: ['My name is…', 'I work…', 'Every day, I…', 'Right now, I am…'],
      coach: {
        title: 'Check your self-introduction',
        target: 'present simple and present continuous',
        minWords: 40,
        taught: ['Forty to sixty words leaves room for about four sentences.',
                 'One of them must be a routine, and one must be happening now.'],
        task: 'Write a short self-introduction (40–60 words) using both tenses.',
        parts: ['Your name and job', 'Your daily routine (present simple)',
                'What you are doing now (present continuous)', 'Why it matters'],
        example: [
          'My name is Rana and I am a finance assistant in Homs. Every day I record the payments and I check the receipts. Right now I am preparing the figures for a donor report. This matters because the donor trusts our numbers.'
        ],
        exampleNote: 'That example is 44 words and does all four parts. Yours should be about your own work.',
        criteria: [
          { t: 'Between 40 and 60 words.' },
          { t: 'At least one present simple sentence with a time word.' },
          { t: 'At least one present continuous sentence.' },
          { t: 'A reason why the work matters.' }
        ]
      }
    }
  ]
});
