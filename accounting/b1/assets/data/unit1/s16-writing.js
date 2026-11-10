/* Unit 1 §16 — Part 6, the five writing tasks.

   W1-W5, at the book's own five lengths, each with its plan, its model and
   its checklist. The model is the author's; the checklist is the author's;
   the coach turns the checklist into something the page can hold the
   learner to without pretending to mark the writing itself. */
EAFM.page('u1-s16', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 6', page: 1, section: '16',
          lesson: 'Part 6 · Writing', title: 'W1–W5 — five pieces of writing' },
  objective: 'Write about your job at five different lengths, from 140 words down to 20',
  prev: 's15-figure', prevLabel: 'Figure 1.1',
  next: 's17-stakeholder', nextLabel: 'Stakeholders',
  intro: 'In this unit you describe your job and your day. Use the present simple for routines and facts (add s with he/she/it), and the present continuous (am/is/are + verb-ing) for what is happening now.',
  cards: [
    {
      id: 'c1', covers: ['W1', 'Part 6'], ref: 'W1', bookRef: 'Unit 1 · W1', type: 'writer',
      paras: [
        { label: 'Your name and job', purpose: '' },
        { label: 'Where you work', purpose: '' },
        { label: 'Your daily routine (present simple)', purpose: '' },
        { label: 'What you are doing this week (present continuous)', purpose: '' },
        { label: 'Why the work matters', purpose: '' },
        { label: 'A friendly closing', purpose: '' }
      ],
      title: 'W1 · self-introduction (100–140 words)',
      instruction: 'Write a short self-introduction for a new team member (100–140 words). Describe your job and your daily routine. Use the present simple and the present continuous.',
      visual: { spot: 'finance-officer', caption: 'Who you are, what you do every day, and what you are doing this week.' },
      minWords: 100,
      stems: ['Hello, my name is…', 'I work for…', 'Every morning, I…',
              'Every month, I…', 'This week, I am…', 'Right now, I am…'],
      model: 'Hello, my name is Fadi Haddad, and I am a finance officer. I work for Horizon Relief International in Damascus. Every morning, I check the accounts and record the new transactions. Then I reconcile the cash with the ledger. Every month, I prepare a report for the managers and the donors. This week, I am training a new assistant. Right now, I am also updating the numbers for a big project. I enjoy this job a lot. Clear numbers help my colleagues, and honest reports keep the donors happy. I am very glad to join this team, and I am ready to help. Please ask me any question about the money.',
      coach: {
        title: 'Check your work',
        target: 'present simple and present continuous',
        minWords: 100,
        taught: ['Present simple for your routine; add s with he/she/it.',
                 'Present continuous for this week and right now.'],
        task: 'Write a short self-introduction for a new team member (100–140 words), describing your job and your daily routine.',
        parts: ['Your name and job', 'Where you work', 'Your daily routine (present simple)',
                'What you are doing this week (present continuous)', 'Why the work matters',
                'A friendly closing'],
        example: ['See the model on the card — it is the author’s own, and it does all six of these in order.'],
        criteria: [
          { t: 'Did you use the present simple for your routine?' },
          { t: 'Did you use the present continuous for now?' },
          { t: 'Did you add ‘s’ with he/she/it correctly?' },
          { t: 'Did you say why your work matters?' },
          { t: 'Is it friendly and clear?' }
        ]
      }
    },
    {
      id: 'c2', covers: ['W2'], ref: 'W2', bookRef: 'Unit 1 · W2', type: 'writer',
      paras: [
        { label: 'A greeting', purpose: '' },
        { label: 'Your morning routine', purpose: '' },
        { label: 'Your afternoon routine', purpose: '' },
        { label: 'What you are doing today', purpose: '' },
        { label: 'An offer to help', purpose: '' },
        { label: 'A closing', purpose: '' }
      ],
      title: 'W2 · daily-routine email (100–140 words)',
      instruction: 'Write an email that explains your daily routine to a manager (100–140 words). Use the present simple and the present continuous.',
      visual: { spot: 'report', caption: 'An email to a manager: polite, ordered, and specific about today.' },
      minWords: 100,
      stems: ['Dear…', 'Every morning, I…', 'In the afternoon, I…',
              'Today is a little different.', 'Right now, I am…', 'Best regards,'],
      model: 'Dear Mr Haytham, you asked about my daily routine, so here it is. Every morning, I open the accounts and I record the new transactions. I always reconcile the cash before lunch. In the afternoon, I prepare the small reports and I answer questions from the programme team. Today is a little different. Right now, I am updating Layth’s project numbers, and this afternoon I am meeting Ms Sophie about her report. I keep every entry clear and honest. If you need any number, I always know the balance. Please tell me if you want a change to this routine. Best regards, Fadi.',
      coach: {
        title: 'Check your work',
        target: 'present simple and present continuous',
        minWords: 100,
        taught: ['A routine is the present simple, even when it is weekly or monthly.',
                 '"Today is a little different" is the hinge: everything after it is the continuous.'],
        task: 'Write an email explaining your daily routine to a manager (100–140 words).',
        parts: ['A greeting', 'Your morning routine', 'Your afternoon routine',
                'What you are doing today', 'An offer to help', 'A closing'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'Did you use both tenses?' },
          { t: 'Did you describe a clear routine?' },
          { t: 'Did you mention what is happening today?' },
          { t: 'Did you use ‘s’ correctly?' },
          { t: 'Is the email polite?' }
        ]
      }
    },
    {
      id: 'c3', covers: ['W3'], ref: 'W3', bookRef: 'Unit 1 · W3', type: 'writer',
      paras: [
        { label: 'What the finance team does', purpose: '' },
        { label: 'Task one', purpose: '' },
        { label: 'Task two', purpose: '' },
        { label: 'Task three', purpose: '' },
        { label: 'Why it matters', purpose: '' },
        { label: 'A closing', purpose: '' }
      ],
      title: 'W3 · team-role note (90–130 words)',
      instruction: 'Write a short note that explains what the finance team does (90–130 words). Use the present simple.',
      visual: { spot: 'manager', caption: 'This one is about the team, not about you — so it is nearly all present simple.' },
      minWords: 90,
      stems: ['The finance team…', 'First, we…', 'Second, we…', 'Third, we…',
              'Good records…'],
      model: 'What Does the Finance Team Do? The finance team looks after the money. First, we record every transaction in the ledger. Second, we reconcile the cash and the bank every week. Third, we prepare clear reports for the managers and the donors. We also help the programme team to plan the budget. The team sits at the centre of the organisation. It connects the donors, the managers, and the projects. Good records keep the money safe, and safe money keeps the projects alive. This is why the finance team matters so much. We are always happy to answer your questions about the money.',
      coach: {
        title: 'Check your work',
        target: 'present simple',
        minWords: 90,
        taught: ['A description of what a team always does is the "fact" use of the present simple.',
                 'First / Second / Third are the simplest way to order a short explanation.'],
        task: 'Write a short note explaining what the finance team does (90–130 words).',
        parts: ['What the finance team does', 'Task one', 'Task two', 'Task three',
                'Why it matters', 'A closing'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'Did you use the present simple?' },
          { t: 'Did you list clear tasks?' },
          { t: 'Did you explain why it matters?' },
          { t: 'Did you use ‘s’ correctly?' },
          { t: 'Is the note clear?' }
        ]
      }
    },
    {
      id: 'c4', covers: ['W4'], ref: 'W4', bookRef: 'Unit 1 · W4', type: 'writer',
      paras: [
        { label: 'A greeting', purpose: '' },
        { label: 'What you are doing now', purpose: '' },
        { label: 'What you are doing next', purpose: '' },
        { label: 'Sign off', purpose: '' }
      ],
      title: 'W4 · quick status (30–50 words — keep it short!)',
      instruction: 'Write a SHORT status note about what you are doing now (30–50 words). Use the present continuous.',
      visual: { spot: 'cash-box', caption: 'Short is the skill here. Four sentences, and nothing that is not needed.' },
      minWords: 30,
      stems: ['Hi…, quick update.', 'Right now, I am…', 'After that, I am…',
              'This afternoon, I am…'],
      model: 'Hi Mr Haytham, quick update. Right now, I am reconciling the cash box. After that, I am preparing Layth’s monthly report. This afternoon, I am meeting Ms Sophie. Everything is on track. Fadi',
      coach: {
        title: 'Check your work',
        target: 'present continuous',
        minWords: 30,
        taught: ['Everything in a status note is happening now or next, so it is nearly all continuous.',
                 'Under fifty words means no sentence can carry two ideas.'],
        task: 'Write a short status note about what you are doing now (30–50 words).',
        parts: ['A greeting', 'What you are doing now', 'What you are doing next', 'Sign off'],
        example: ['See the model on the card — it is 32 words.'],
        criteria: [
          { t: 'Is your message short (under 50 words)?' },
          { t: 'Did you use the present continuous?' },
          { t: 'Is it clear what you are doing now?' },
          { t: 'Is it clear?' }
        ]
      }
    },
    {
      id: 'c5', covers: ['W5'], ref: 'W5', bookRef: 'Unit 1 · W5', type: 'writer',
      paras: [
        { label: 'A routine (present simple)', purpose: '' },
        { label: 'Something now (present continuous)', purpose: '' },
        { label: 'Keep it short', purpose: '' }
      ],
      title: 'W5 · routine line (20–40 words — keep it short!)',
      instruction: 'Write two SHORT sentences about your daily work (20–40 words). Use one present simple and one present continuous.',
      visual: { spot: 'entry', caption: 'Two sentences, two tenses. The shortest task in the unit, and the hardest to pad.' },
      minWords: 20,
      stems: ['Every morning, I…', 'Right now, I am…'],
      model: 'Every morning, I record the money and I check the cash. Right now, I am writing a short report for the donors.',
      coach: {
        title: 'Check your work',
        target: 'one present simple and one present continuous',
        minWords: 20,
        taught: ['One sentence for the routine, one for this moment. Nothing else fits in forty words.'],
        task: 'Write two short sentences about your daily work (20–40 words), one in each tense.',
        parts: ['A routine (present simple)', 'Something now (present continuous)', 'Keep it short'],
        example: ['See the model on the card — it is 21 words.'],
        criteria: [
          { t: 'Is it short (under 40 words)?' },
          { t: 'Did you use the present simple?' },
          { t: 'Did you use the present continuous?' },
          { t: 'Is it clear?' }
        ]
      }
    }
  ]
});
