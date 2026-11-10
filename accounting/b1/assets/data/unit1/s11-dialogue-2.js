/* Unit 1 §11 — Audio 1.3, Fadi explains his job to Layth.

   The comprehension answers are DERIVED from Fadi's lines: the book's key
   reprints these three questions instead of answering them. The two MCQ
   answers ARE in the key (1 A, 2 A) and agree with what is derived here. */
EAFM.page('u1-s11', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Audio 1.3', page: 1, section: '11',
          lesson: 'Part 3 · Listening', title: 'Audio 1.3 — explaining the job to a manager' },
  objective: 'Explain what a finance team does to somebody outside it',
  prev: 's10-dialogue-1', prevLabel: 'Audio 1.2',
  next: 's12-speaking', nextLabel: 'Speaking',
  intro: '<b>Before you listen:</b> Fadi explains his job to Layth, a programme manager. <b>While you listen:</b> What does the finance team do for the programme team?',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.3'], ref: '1.3', bookRef: 'Unit 1 · Audio 1.3', type: 'scene',
      title: 'Listen to the conversation',
      instruction: 'Layth starts by saying he does not understand Fadi’s job. Listen for the moment he changes his mind, and for the sentence that changes it.',
      scene: 'u1-layth',
      after: '<b>Useful phrases:</b> I look after the money · I record it, I check it, I report on it · I help you to plan… · I always know the balance · right now I am updating…'
    },
    {
      id: 'c2', covers: ['Audio 1.3'], ref: 'A', bookRef: 'Unit 1 · Audio 1.3 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Answer from what Fadi says.',
      visual: { spot: 'manager', caption: 'Layth runs projects; Fadi records the money they spend. Neither does the other’s job.' },
      items: [
        {
          q: '1. What three things does Fadi do with the money?',
          evidence: 'Fadi’s first answer, which lists them in one short sentence.',
          jump: { scene: 'u1-layth', line: 2 },
          options: [
            { t: 'He records it, he checks it, and he reports on it.', ok: true,
              why: 'Right — "I look after the money. I record it, I check it, and I report on it." Three verbs in one line, which is why the question asks for three.' },
            { t: 'He records it, he spends it, and he reports on it.', ok: false,
              why: 'Spending is Layth’s side of the organisation. Reading B puts it plainly: the programme managers "spend the money, and they depend on Fadi for good information".' },
            { t: 'He counts it, he hides it, and he reports on it.', ok: false,
              why: 'Layth’s guess is "So you just count money?" and Fadi corrects him. Nothing is hidden anywhere in this unit.' },
            { t: 'He records it, he checks it, and he spends it.', ok: false,
              why: 'The first two are right, which is what makes this the hardest wrong answer. The third is wrong: Fadi reports on the money, he does not spend it.' }
          ]
        },
        {
          q: '2. What does Fadi help Layth to plan?',
          evidence: 'Fadi’s reply to "So you just count money?"',
          jump: { scene: 'u1-layth', line: 4 },
          options: [
            { t: 'The report.', ok: false,
              why: 'Fadi prepares reports himself; he does not plan them with Layth. The planning they do together is about money that has not been spent yet.' },
            { t: 'The budget.', ok: true,
              why: 'Right — "It is more than that. I also help you to plan the budget." He says it again at the end: "Right now, I am planning your budget with you."' },
            { t: 'The projects on the ground.', ok: false,
              why: 'That is Layth’s own work. Fadi helps with the money for the projects, not with the projects themselves.' },
            { t: 'The donor visit.', ok: false,
              why: 'No visit is mentioned. The donors appear only as people who read reports and trust the numbers.' }
          ]
        },
        {
          q: '3. What is the name of Fadi’s connected job?',
          evidence: 'Fadi’s line beginning "People call it…".',
          jump: { scene: 'u1-layth', line: 10 },
          options: [
            { t: 'Bookkeeping.', ok: false,
              why: 'Bookkeeping is the daily writing-down — one part. Fadi is naming the whole of it, which is bigger.' },
            { t: 'Programme management.', ok: false,
              why: 'That is Layth’s job, not Fadi’s. The conversation exists precisely to keep the two apart.' },
            { t: 'Financial management.', ok: true,
              why: 'Right — "People call it financial management. It is one big, connected job." The second sentence is the reason the first one is a single name.' },
            { t: 'Budget planning.', ok: false,
              why: 'One of the five stages, and the one they have just been discussing — which is what makes it tempting. But Layth has asked what the whole job is called.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Audio 1.3'], ref: 'B', bookRef: 'Unit 1 · Audio 1.3 · B', type: 'quizset',
      title: 'Listen again and choose the best answer',
      instruction: 'Two questions, four options each.',
      visual: { spot: 'budget', caption: 'By the end Layth says it himself: finance is planning too.' },
      items: [
        {
          q: '1. Fadi’s job is…',
          evidence: 'Fadi’s line beginning "People call it financial management…".',
          jump: { scene: 'u1-layth', line: 10 },
          options: [
            { t: 'one big connected job', ok: true,
              why: 'Right — "It is one big, connected job." The whole conversation builds to this: Layth has just said "Your job connects everything".' },
            { t: 'only counting the money', ok: false,
              why: 'That is Layth’s misunderstanding at the start — "So you just count money?" — and Fadi answers it directly: "It is more than that."' },
            { t: 'a small daily task', ok: false,
              why: 'The opposite of what both of them end up saying. Fadi’s word is "big".' },
            { t: 'a job for the donors', ok: false,
              why: 'He prepares reports for the donors, but he works for the organisation. Doing work that somebody reads does not make it their job.' }
          ]
        },
        {
          q: '2. Right now, Fadi is…',
          evidence: 'Fadi’s line beginning "Exactly. I always know the balance…".',
          jump: { scene: 'u1-layth', line: 6 },
          options: [
            { t: 'updating the project numbers', ok: true,
              why: 'Right — "Right now, I am updating your project’s numbers." Note the two tenses in one breath: <i>I always know</i> (routine) and <i>I am updating</i> (now).' },
            { t: 'sleeping at his desk', ok: false,
              why: 'Nothing like it happens. An option with no basis at all is there to be eliminated at once.' },
            { t: 'leaving the office', ok: false,
              why: 'He is at work and talking to Layth throughout.' },
            { t: 'paying the staff', ok: false,
              why: 'Paying people is a transaction Fadi would record, but it is not what he is doing at this moment.' }
          ]
        }
      ]
    }
  ]
});
