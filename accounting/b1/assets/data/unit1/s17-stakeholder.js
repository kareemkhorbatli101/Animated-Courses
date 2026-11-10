/* Unit 1 §17 — Part 7, the Financial Stakeholder Track.

   The same true numbers, told to different readers in different ways. The
   two sample messages are the author's; the comparison questions are his;
   Audio 1.5 is the recorded version. The comprehension answers are derived
   (the key reprints them). */
EAFM.page('u1-s17', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 7', page: 1, section: '17',
          lesson: 'Part 7 · Stakeholders', title: 'Same numbers, different readers' },
  objective: 'Tell the same true story to a manager and to a donor, in different words',
  prev: 's16-writing', prevLabel: 'Writing',
  next: 's18-consolidation', nextLabel: 'Consolidation',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A', bookRef: 'Unit 1 · Part 7', type: 'quizset',
      title: 'Five directions, one set of numbers',
      instruction: 'Read the two messages, then answer. They carry the same facts and sound nothing alike.',
      passage: {
        style: 'article',
        title: 'Fadi speaks to different people every day',
        paras: [
          'Fadi speaks to different people every day, and each one needs a different kind of answer. When Layth, the programme manager, asks about money, Fadi gives a simple, clear number. When Ms Sophie, the donor, asks for a report, Fadi gives careful detail and honest figures. When Mr Haytham, his manager, asks a question, Fadi gives a full and exact answer. And when Ms Ingrid, the regional controller, needs the monthly report, Fadi follows every rule. The same finance officer speaks to five directions: to the programmes, to the donors, to his manager, to the region, and to the partners. Each direction hears the same honest numbers, but in a different way.',
          /* the book prints the heading and the message as separate
             paragraphs; joining them made a sentence the author never wrote,
             and check-book.cjs refused it */
          'Talking to the programme manager (Layth)',
          'Hi Layth, right now I am updating your project numbers. Every week, I check your budget. At the moment, you have enough money for the next two months. I keep it simple for you.',
          'Talking to the donor (Ms Sophie)',
          'Dear Ms Sophie, I prepare your report with great care. Every month, I record all the costs for your project. Right now, I am checking every figure, so the report is clear and honest.'
        ]
      },
      items: [
        {
          q: '1. How does Fadi answer Layth, the programme manager?',
          evidence: 'the sentence beginning "When Layth, the programme manager, asks about money…".',
          options: [
            { t: 'With a simple, clear number.', ok: true,
              why: 'Right — "Fadi gives a simple, clear number." His own message proves it: he ends with "I keep it simple for you."' },
            { t: 'With careful detail and honest figures.', ok: false,
              why: 'That is what Ms Sophie, the donor, gets. The whole point of this part is that the two are different.' },
            { t: 'With a full and exact answer.', ok: false,
              why: 'That is Mr Haytham, his own manager. Three audiences, three registers — the text names each one separately.' },
            { t: 'By following every rule.', ok: false,
              why: 'That is Ms Ingrid, the regional controller, and the monthly report.' }
          ]
        },
        {
          q: '2. What kind of detail does Ms Sophie, the donor, need?',
          evidence: 'the sentence beginning "When Ms Sophie, the donor, asks for a report…".',
          options: [
            { t: 'A simple number.', ok: false,
              why: 'That is Layth’s. A donor who gave the money wants to see it accounted for, not summarised.' },
            { t: 'Careful detail and honest figures.', ok: true,
              why: 'Right — and Fadi’s message to her shows it in the verbs: "I record all the costs", "I am checking every figure". Reading B said the same: "They want clear, honest reports."' },
            { t: 'Nothing — she trusts him.', ok: false,
              why: 'She does trust him, but Reading B explains why: because she reads his numbers. The trust is a result of the detail, not a substitute for it.' },
            { t: 'A weekly budget check.', ok: false,
              why: 'The weekly check is Layth’s: "Every week, I check your budget."' }
          ]
        },
        {
          q: '3. How many directions does Fadi speak to?',
          evidence: 'the sentence beginning "The same finance officer speaks to five directions…".',
          options: [
            { t: 'Three.', ok: false,
              why: 'Three people are described in detail — Layth, Ms Sophie, Mr Haytham — which is why three is the tempting answer. But the sentence that counts them says five.' },
            { t: 'Four.', ok: false,
              why: 'Four people are named. The list of directions has five items, and the fifth has no name attached.' },
            { t: 'Five.', ok: true,
              why: 'Right — "the programmes, the donors, his manager, the region, and the partners". The partners are the one direction with no person named, which is exactly why this question is worth asking.' },
            { t: 'Two.', ok: false,
              why: 'Two messages are printed, but the text counts the directions separately from the samples.' }
          ]
        },
        {
          q: '4. Why does each direction hear the numbers in a different way?',
          evidence: 'the last sentence: "Each direction hears the same honest numbers, but in a different way."',
          options: [
            { t: 'Because the numbers are different for each person.', ok: false,
              why: 'The opposite, and this is the single most important idea in Part 7: the numbers are <i>the same honest numbers</i>. Only the telling changes.' },
            { t: 'Because each one needs a different kind of answer.', ok: true,
              why: 'Right — the text says it in its first sentence: "each one needs a different kind of answer". A manager deciding this week and a donor reading a report need different things from the same truth.' },
            { t: 'Because Fadi does not trust some of them.', ok: false,
              why: 'Trust runs the other way in this unit — they trust him. Nothing suggests he withholds anything from anyone.' },
            { t: 'Because some of them do not speak English.', ok: false,
              why: 'Language is never mentioned. The difference is in what each reader needs, not in what they can read.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Audio 1.5'], ref: '1.5', bookRef: 'Unit 1 · Audio 1.5', type: 'scene',
      title: 'Audio 1.5 — Fadi and Mr Haytham',
      instruction: '<b>Before you listen:</b> Fadi sends a short update to his manager and to a donor.',
      scene: 'u1-track'
    },
    {
      id: 'c3', covers: ['Audio 1.5'], ref: '7-A', bookRef: 'Unit 1 · Audio 1.5 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Two questions from the recording.',
      visual: { spot: 'reconcile', caption: 'Two records of the same money — what Fadi is doing as the conversation starts.' },
      items: [
        {
          q: '1. What is Fadi doing right now?',
          evidence: 'Fadi’s first answer in Audio 1.5.',
          jump: { scene: 'u1-track', line: 2 },
          options: [
            { t: 'He is reconciling the cash.', ok: true,
              why: 'Right — "Right now, I am reconciling the cash. Then I am preparing the donor report." The second sentence is what comes next, not what is happening now.' },
            { t: 'He is preparing the donor report.', ok: false,
              why: 'Next, not now. "Then" separates the two.' },
            { t: 'He is updating Layth’s budget.', ok: false,
              why: 'A weekly routine: "I update it every week." Present simple, so not this moment.' },
            { t: 'He is meeting Ms Sophie.', ok: false,
              why: 'Ms Sophie is waiting for the report; no meeting happens in this recording.' }
          ]
        },
        {
          q: '2. How often does Fadi update Layth’s budget?',
          evidence: 'Fadi’s answer to "And Layth’s budget?"',
          jump: { scene: 'u1-track', line: 6 },
          options: [
            { t: 'Every day.', ok: false,
              why: 'Nothing in the unit says daily. The daily work is recording and checking.' },
            { t: 'Every week.', ok: true,
              why: 'Right — "I update it every week. At the moment, his project is on track." Note both tenses again in one answer: the routine, then this moment.' },
            { t: 'Every month.', ok: false,
              why: 'Monthly is the report to the managers and donors, and the one that goes to Amman. The budget update is more frequent.' },
            { t: 'Once a year.', ok: false,
              why: 'Nothing in the unit happens yearly.' }
          ]
        }
      ]
    },
    {
      id: 'c4', covers: ['Audio 1.5'], ref: '7-B', bookRef: 'Unit 1 · Audio 1.5 · B', type: 'quizset',
      title: 'Listen again — true or false?',
      instruction: 'The first one is done for you.',
      visual: { spot: 'budget', caption: '"At the moment, his project is on track."' },
      worked: {
        q: '0. Right now, Fadi is reconciling the cash.',
        a: 'True',
        why: 'Done for you — it is Fadi’s first answer, word for word.'
      },
      items: [
        {
          q: '1. Fadi updates Layth’s budget once a year.',
          evidence: '"I update it every week."',
          jump: { scene: 'u1-track', line: 6 },
          options: [
            { t: 'True', ok: false,
              why: 'The frequency is the only thing changed, and it is the only thing that matters: weekly, not yearly.' },
            { t: 'False', ok: true,
              why: 'Right — "I update it every week."' }
          ]
        },
        {
          q: '2. Fadi is preparing a report for Ms Sophie.',
          evidence: '"Then I am preparing the donor report" and "Ms Sophie needs it soon."',
          jump: { scene: 'u1-track', line: 3 },
          options: [
            { t: 'True', ok: true,
              why: 'Right, and it takes two lines to prove: Fadi says he is preparing the donor report, and Mr Haytham names the donor — "Ms Sophie needs it soon."' },
            { t: 'False', ok: false,
              why: 'Both halves are in the recording, just not in the same sentence. A true statement does not have to be a single quotation.' }
          ]
        },
        {
          q: '3. Layth’s project is not on track.',
          evidence: '"At the moment, his project is on track."',
          jump: { scene: 'u1-track', line: 6 },
          options: [
            { t: 'True', ok: false,
              why: 'The recording says the opposite in those exact words. Watch for a statement that is the page’s sentence with <i>not</i> added.' },
            { t: 'False', ok: true,
              why: 'Right — "At the moment, his project is on track."' }
          ]
        }
      ]
    },
    {
      id: 'c5', covers: ['Part 7'], ref: '7-turn', bookRef: 'Unit 1 · Part 7 · Your turn', type: 'writer',
      paras: [
        { label: 'To the manager — short, direct, one number if you can.', purpose: '' },
        { label: 'To the donor — careful, complete, and about process as well as result.', purpose: '' }
      ],
      title: 'Your turn',
      instruction: 'Choose two people from Fadi’s world (a manager and a donor). Write a short message to each one about your work today (30–50 words each). Use the present simple and the present continuous.',
      visual: [
        { spot: 'manager', caption: 'to the manager: simple and quick' },
        { spot: 'donor', caption: 'to the donor: careful and complete' }
      ],
      minWords: 60,
      stems: ['Hi …, right now I am…', 'Every week, I…',
              'Dear …, I prepare… with great care.', 'Every month, I…'],
      coach: {
        title: 'Check your two messages',
        target: 'present simple and present continuous, in two registers',
        minWords: 60,
        taught: ['The manager wants a simple, clear number.',
                 'The donor wants careful detail and honest figures.',
                 'The facts must be identical in both. Only the telling changes.'],
        task: 'Write a short message to a manager and a short message to a donor about your work today (30–50 words each).',
        parts: ['To the manager — short, direct, one number if you can.',
                'To the donor — careful, complete, and about process as well as result.'],
        example: [
          'Hi Layth, right now I am checking this month’s fuel receipts. Every week I update your budget. At the moment you have enough for two more months.',
          'Dear Ms Sophie, I prepare your report with great care. Every month I record all the project costs. Right now I am checking every figure, so the report is clear and honest.'
        ],
        exampleNote: 'The two examples carry exactly the same facts. Read them side by side and notice that nothing true in one is missing from the other — only the detail and the tone change.',
        criteria: [
          { t: 'Two separate messages, one to a manager and one to a donor.' },
          { t: 'The same facts in both — nothing hidden from either reader.' },
          { t: 'At least one present simple and one present continuous in each.' },
          { t: 'Each message between 30 and 50 words.' }
        ]
      }
    }
  ]
});
