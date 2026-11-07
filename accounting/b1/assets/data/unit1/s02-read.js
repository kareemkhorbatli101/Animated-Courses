/* Unit 1 §2 — the opening Read, with the book's comprehension and T/F.

   The text is the book's, cut into sentences in scenes.js so a line can be
   looped and flashed when a question points at it. Every question here is
   answerable FROM the text, so every one is a selection and is marked.
   The book's worked "0." is kept and shown as a worked example, because it
   is what tells the learner what a good answer looks like. */
EAFM.page('u1-s02', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Read', page: 1, section: '2',
          lesson: 'Opening', title: 'Read — the finance team' },
  objective: 'Understand what a finance team does, and who does it',
  prev: 's01-warmup', prevLabel: 'Warm up',
  next: 's03-vocab-match', nextLabel: 'Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Read · A'], ref: 'A', bookRef: 'Unit 1 · Read A', type: 'quizset',
      title: 'Read the text, then answer',
      instruction: 'Read the whole text. You can listen to it, hear one sentence at a time, or watch it as a scene. Then answer the four questions. The first one is done for you.',
      passage: {
        style: 'article',
        title: 'The finance team',
        listenLabel: 'Listen to the whole text',
        say: { scene: 'u1-read-office', who: 'narr' },
        watch: {
          scene: 'u1-read-office',
          label: 'Watch it as a scene',
          title: 'The finance team — read aloud',
          lead: 'The same text. Subtitles in English and Arabic are in the bar under the stage.'
        },
        paras: [
          'Every organisation needs money. It also needs a finance team. The finance team looks after the money. It records each payment, it checks the cash, and it prepares the reports. In a small aid group, one person often does many of these tasks. This person is the finance officer.',
          'Fadi Haddad is a finance officer in Damascus. His work follows a simple cycle. First, he records the transactions. Then he reconciles the accounts. After that, he reports to the managers and the donors. He also helps to plan the budget. Finally, he advises his colleagues about money. Then the cycle starts again.',
          'Right now, Fadi is checking the cash box. Later today, he is meeting a manager about a report. Each task is different, but every task connects to the others. Together, they form one big job. People call this job financial management, or idara maliya in Arabic. It is careful, quiet, and very important work. Fadi is proud to do it. Today, he is busy, but he is happy. He likes his job in the finance team very much. It is a good place to learn and to grow.'
        ]
      },
      worked: {
        q: '0. What does the finance team look after?',
        a: 'the money',
        why: 'The answer is the second sentence of the text, almost word for word: "The finance team looks after the money." A good answer here is short and comes straight off the page — you are not asked to add anything of your own.'
      },
      items: [
        {
          q: '1. What is the first stage in Fadi’s cycle?',
          evidence: 'the sentence beginning "First, …".',
          jump: { scene: 'u1-read-office', line: 5 },
          options: [
            { t: 'He reconciles the accounts.', ok: false,
              why: 'That is the second stage — the text says "Then he reconciles the accounts", and "then" always points back at something that came first.' },
            { t: 'He records the transactions.', ok: true,
              why: 'Right. "First, he records the transactions." The word "First" is doing the work, and it matches stage 1 of the diagram in §1.' },
            { t: 'He advises his colleagues about money.', ok: false,
              why: 'That is the last stage: "Finally, he advises his colleagues about money." You can read the order straight off the signposts — first, then, after that, finally.' },
            { t: 'He meets a manager about a report.', ok: false,
              why: 'That is what he is doing later TODAY, not a stage of the cycle. The text puts it with "Later today", not with "First".' }
          ]
        },
        {
          q: '2. What is Fadi doing right now?',
          evidence: 'the sentence beginning "Right now, …".',
          jump: { scene: 'u1-read-office', line: 8 },
          options: [
            { t: 'He is checking the cash box.', ok: true,
              why: 'Right — "Right now, Fadi is checking the cash box." Notice the tense: <i>is checking</i>, not <i>checks</i>. The question asks about this moment, so the answer is in the present continuous.' },
            { t: 'He checks the cash box every morning.', ok: false,
              why: 'The right verb but the wrong tense, and so the wrong question answered. <i>He checks</i> is a routine; the question asked what he is doing at this moment.' },
            { t: 'He is meeting a manager about a report.', ok: false,
              why: 'That is later today, not right now. The text separates the two with "Later today".' },
            { t: 'He is preparing the budget.', ok: false,
              why: 'Planning the budget is one of his cycle stages, but the text does not say he is doing it now. Do not promote a routine into this moment.' }
          ]
        },
        {
          q: '3. What is the name of Fadi’s big job?',
          evidence: 'the sentence beginning "People call this job …".',
          jump: { scene: 'u1-read-office', line: 10 },
          options: [
            { t: 'Bookkeeping.', ok: false,
              why: 'Bookkeeping is one part of it — the daily writing down. The text is naming the whole job, which is bigger than that.' },
            { t: 'Reconciling.', ok: false,
              why: 'That is a single stage of the cycle, stage 2. The question asks for the name of all of it together.' },
            { t: 'Financial management.', ok: true,
              why: 'Right — "People call this job financial management, or idara maliya in Arabic." The sentence before it explains why there is one name: the tasks "form one big job".' },
            { t: 'Cash checking.', ok: false,
              why: 'Not a name the text gives at all. When a question asks what something is called, the answer should be a phrase you can point at on the page.' }
          ]
        },
        {
          q: '4. Why do the different tasks form one job? (inference)',
          evidence: 'the sentence beginning "Each task is different, …".',
          jump: { scene: 'u1-read-office', line: 9 },
          options: [
            { t: 'Because every task connects to the others.', ok: true,
              why: 'Right — "Each task is different, but every task connects to the others. Together, they form one big job." The word "but" is the hinge: different, and still one thing.' },
            { t: 'Because one person has to do all of them.', ok: false,
              why: 'Close, and it is true in a small group — but that is about who does the work, not about why the tasks belong together. They would still connect if five people did them.' },
            { t: 'Because they all happen on the same day.', ok: false,
              why: 'The text never says that, and it is not what makes a job one job. Reporting is monthly; recording is daily.' },
            { t: 'Because the donors ask for them.', ok: false,
              why: 'The donors read the reports, but the text does not say they are the reason the tasks connect. This is the right answer to a different question.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Read · B'], ref: 'B', bookRef: 'Unit 1 · Read B', type: 'quizset',
      title: 'True or false?',
      instruction: 'Read each statement and decide whether the text says it is true or false. The first one is done for you.',
      visual: { spot: 'finance-officer', caption: 'Everything here is decided by the text on the previous card — not by what you know about finance offices.' },
      worked: {
        q: '0. The finance team looks after the money.',
        a: 'True',
        why: 'The text says exactly this: "The finance team looks after the money." When a statement repeats a sentence word for word, it is true — and this is the easy kind, shown so you can see what proof looks like.'
      },
      items: [
        {
          q: '1. In a small organisation, one person does only one task.',
          evidence: 'the sentence beginning "In a small aid group, …".',
          jump: { scene: 'u1-read-office', line: 3 },
          options: [
            { t: 'True', ok: false,
              why: 'The text says the opposite: "one person often does many of these tasks". The word "many" is the whole answer.' },
            { t: 'False', ok: true,
              why: 'Right. "In a small aid group, one person often does many of these tasks." The statement reverses it, and the reversal is the trap.' }
          ]
        },
        {
          q: '2. Fadi is a finance officer in Damascus.',
          evidence: 'the sentence beginning "Fadi Haddad is …".',
          jump: { scene: 'u1-read-office', line: 4 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — "Fadi Haddad is a finance officer in Damascus." Both halves are in the sentence: the job and the city.' },
            { t: 'False', ok: false,
              why: 'Both parts are on the page. Check them one at a time: is he a finance officer? Yes. Is he in Damascus? Yes.' }
          ]
        },
        {
          q: '3. In a small organisation, the finance team never reports to anyone.',
          evidence: 'the sentence beginning "After that, he reports …".',
          jump: { scene: 'u1-read-office', line: 6 },
          options: [
            { t: 'True', ok: false,
              why: 'The text names two sets of readers: "he reports to the managers and the donors". A word like "never" is almost always worth checking against the page.' },
            { t: 'False', ok: true,
              why: 'Right. Reporting is stage 3 of his own cycle: "After that, he reports to the managers and the donors." "Never" is what makes the statement false.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: [], ref: 'C', bookRef: 'Unit 1 · Read', type: 'study',
      title: 'The five stages, in the author’s words',
      instruction: 'The text and the diagram say the same five things. Read them together once before you go on — the rest of the unit keeps coming back to them.',
      visual: { art: 'finance-cycle', wide: true,
        caption: 'The same five stages you met in §1, now with the sentences from the text beside them.' },
      html:
        '<ol style="margin:0;padding-left:20px;line-height:1.9">' +
        '<li><b>First, he records the transactions.</b> — every payment is written down.</li>' +
        '<li><b>Then he reconciles the accounts.</b> — two records of the same money are compared.</li>' +
        '<li><b>After that, he reports to the managers and the donors.</b></li>' +
        '<li><b>He also helps to plan the budget.</b></li>' +
        '<li><b>Finally, he advises his colleagues about money.</b> Then the cycle starts again.</li>' +
        '</ol>',
      doneLabel: 'I have read the five stages',
      /* each line is playable on its own, so a learner can hear the five
         signposts (First / Then / After that / also / Finally) one at a time */
      playable: [
        'First, he records the transactions.',
        'Then he reconciles the accounts.',
        'After that, he reports to the managers and the donors.',
        'He also helps to plan the budget.',
        'Finally, he advises his colleagues about money.'
      ]
    }
  ]
});
