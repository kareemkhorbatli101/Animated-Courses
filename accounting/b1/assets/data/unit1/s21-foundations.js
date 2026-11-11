/* Unit 1 §21 — Part 11, Foundations for Further Study.

   The bridge to the CMA and to a Master's. The concept text and the five
   study terms are the author's; the English stays at B1 while the idea does
   not. */
EAFM.page('u1-s21', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 11', page: 1, section: '21',
          lesson: 'Part 11 · Foundations', title: 'Two kinds of accounting' },
  objective: 'Tell financial accounting from management accounting, and say which you are doing',
  prev: 's20-review', prevLabel: 'Review',
  intro: '<i>(anchoring for the CMA and a Master’s abroad)</i> — This part looks beyond today’s work. It connects your English to the big ideas of the CMA and of a Master’s degree. The English stays simple; the ideas open a door to the future.',
  cards: [
    {
      id: 'c1', covers: ['Part 11'], ref: '11A', bookRef: 'Unit 1 · Part 11 · A', type: 'quizset',
      title: 'Concept Spotlight: Two Kinds of Accounting',
      instruction: 'Read, then answer in your own words. Both sides of accounting are in Fadi’s ordinary day — the text shows you where.',
      passage: {
        style: 'article',
        title: 'Two Kinds of Accounting',
        paras: [
          'Accounting has two main sides, and Fadi works on both. The first side is financial accounting. Financial accounting records the past. It shows what the organisation received and what it spent. It produces reports for people outside the team, such as the donors and the auditors. These people want a clear, honest history of the money.',
          'The second side is management accounting. Management accounting looks forward. It helps the managers to plan, to budget, and to make decisions. It answers questions like, how much does this project cost? and where do we spend next? These reports stay inside the organisation.',
          'Fadi uses both sides every day. In the morning, he records the past, so this is financial accounting. In the afternoon, he helps Layth to plan a budget, so this is management accounting. In Syria, people often join these two sides into one job, and they call it financial management, or idara maliya. Fadi likes this wide view. He sees the whole picture of the money, from the past to the future. Both sides need the same honesty, and both sides serve the same goal: a strong, well-run organisation.'
        ]
      },
      items: [
        {
          q: '1. What does financial accounting record?',
          evidence: 'the sentences beginning "Financial accounting records the past…".',
          options: [
            { t: 'The past — what the organisation received and what it spent.', ok: true,
              why: 'Right — "Financial accounting records the past. It shows what the organisation received and what it spent." Two directions of money, both already finished.' },
            { t: 'The plan for next month.', ok: false,
              why: 'That is management accounting, which "looks forward". The two sides are defined by which way they face in time.' },
            { t: 'The cost of each project in the future.', ok: false,
              why: 'Costing a project to decide about it is a forward question, so it belongs to the other side.' },
            { t: 'The decisions the managers make.', ok: false,
              why: 'Decisions are what management accounting supports. Financial accounting records what happened, not what was chosen.' }
          ]
        },
        {
          q: '2. Who reads financial-accounting reports?',
          evidence: 'the sentence beginning "It produces reports for people outside the team…".',
          options: [
            { t: 'The managers inside the organisation.', ok: false,
              why: 'Those are management-accounting reports, and the text is explicit: "These reports stay inside the organisation."' },
            { t: 'People outside the team, such as the donors and the auditors.', ok: true,
              why: 'Right — and "outside" is the word that separates the two sides. In Reading B, Ms Sophie is exactly this reader.' },
            { t: 'Only Mr Haytham.', ok: false,
              why: 'He is Fadi’s own manager, inside the organisation, and he checks the difficult accounts rather than reading external reports.' },
            { t: 'The programme team.', ok: false,
              why: 'Layth is inside, and what he needs is forward-looking: "how much money do we still have?"' }
          ]
        },
        {
          q: '3. What does management accounting help managers to do?',
          evidence: 'the sentence beginning "It helps the managers…".',
          options: [
            { t: 'To plan, to budget, and to make decisions.', ok: true,
              why: 'Right — three verbs, all about what has not happened yet. That is what "looks forward" means in practice.' },
            { t: 'To record the past accurately.', ok: false,
              why: 'The other side. Recording is financial accounting.' },
            { t: 'To write reports for the donors.', ok: false,
              why: 'Donor reports go outside, and the text says management-accounting reports stay inside.' },
            { t: 'To reconcile the cash.', ok: false,
              why: 'Reconciling checks a record of what has already happened — backward-facing, and part of the day’s bookkeeping.' }
          ]
        },
        {
          q: '4. Why does Fadi like the wide ‘financial management’ view? (inference)',
          evidence: 'the two sentences beginning "Fadi likes this wide view…".',
          options: [
            { t: 'Because it means less work.', ok: false,
              why: 'Doing both sides is more work, not less. The text never argues from convenience.' },
            { t: 'Because he sees the whole picture of the money, from the past to the future.', ok: true,
              why: 'Right — the text gives the reason in the very next sentence: "He sees the whole picture of the money, from the past to the future." Each side alone would show him half of it.' },
            { t: 'Because it is the Syrian way of doing it.', ok: false,
              why: 'The text does say the two are often joined in Syria, but that explains why the job exists in that shape, not why Fadi values it.' },
            { t: 'Because the CMA requires it.', ok: false,
              why: 'The CMA is mentioned as where this idea leads, not as a reason for Fadi’s preference. In fact the text says the CMA focuses on only one of the two sides.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 11'], ref: '11-terms', bookRef: 'Unit 1 · Part 11 · Study terms', type: 'study',
      title: 'Study terms',
      instruction: 'Five terms that come back in the CMA and in a Master’s. Learn them as English first; the accounting comes later.',
      visual: { spot: 'statement', caption: 'Four of these five describe something you can point at in a report.' },
      html:
        '<dl style="line-height:1.9;margin:0">' +
        '<dt><b>financial accounting</b></dt><dd>the side of accounting that records the past for people outside the team</dd>' +
        '<dt><b>management accounting</b></dt><dd>the side of accounting that helps managers plan and decide</dd>' +
        '<dt><b>users of information</b></dt><dd>the people who read financial reports, such as donors, managers, and auditors</dd>' +
        '<dt><b>the accounting cycle</b></dt><dd>the regular steps that turn transactions into reports</dd>' +
        '<dt><b>financial position</b></dt><dd>a picture of what an organisation owns and owes at one moment</dd>' +
        '</dl>' +
        '<p class="wc" style="margin-top:12px"><b>The bigger picture:</b> this simple split — recording the past versus planning the future — is the foundation of your whole CMA study. The CMA focuses on management accounting, the forward-looking side that Fadi uses to help managers decide.</p>',
      doneLabel: 'I know these five terms',
      playable: ['financial accounting', 'management accounting', 'users of information',
                 'the accounting cycle', 'financial position']
    },
    {
      id: 'c3', covers: ['Part 11'], ref: '11B', bookRef: 'Unit 1 · Part 11 · B and C', type: 'writer',
      paras: [
        { label: 'Fadi’s morning task, and which side it is.', purpose: '' },
        { label: 'Fadi’s afternoon task, and which side it is.', purpose: '' },
        { label: 'One example of each from your own work or studies.', purpose: '' }
      ],
      title: 'Apply it, then write it',
      instruction: '<b>B. Apply it.</b> Fadi does one task in the morning and one in the afternoon. In three sentences, say which task is financial accounting and which is management accounting, and explain why. Then give one example of each from your own work or studies.<br><br><b>C. Micro-writing (optional).</b> Write 40–60 words explaining the difference in your own words. Use the present simple. Give one example of each.',
      visual: [
        { spot: 'ledger', caption: 'the morning: recording the past' },
        { spot: 'budget', caption: 'the afternoon: planning forward' }
      ],
      minWords: 40,
      aiCheck: {
        task: 'A short piece explaining the difference between financial accounting and management accounting, 40-60 words.',
        grammar: 'clear definitions in the present simple',
        reader: 'a colleague new to accounting',
        must: [
          'who financial accounting is for',
          'who management accounting is for',
          'one difference stated plainly'
        ]
      },
      stems: ['In the morning, Fadi… , so this is…',
              'In the afternoon, he… , so this is…',
              'In my own work, … is financial accounting, because…',
              '… is management accounting, because…'],
      coach: {
        title: 'Check your answer',
        target: 'present simple, explaining a distinction',
        minWords: 40,
        taught: ['Financial accounting records the past, for people outside.',
                 'Management accounting looks forward, for people inside.',
                 'The text already sorts Fadi’s day for you: morning records, afternoon plans.'],
        task: 'Say which of Fadi’s two tasks is which kind of accounting and why, then give one example of each from your own work.',
        parts: ['Fadi’s morning task, and which side it is.',
                'Fadi’s afternoon task, and which side it is.',
                'One example of each from your own work or studies.'],
        example: [
          'In the morning Fadi records the transactions, so this is financial accounting, because he is writing down what has already happened. In the afternoon he helps Layth to plan a budget, so this is management accounting, because the budget is about money the project has not spent yet.',
          'In my own work, writing the monthly fuel costs into the ledger is financial accounting. Estimating next month’s fuel for the project plan is management accounting, because nobody has bought that fuel yet.'
        ],
        exampleNote: 'The test for every sentence is one question: has this money already moved? If yes, it is the first side; if no, it is the second.',
        criteria: [
          { t: 'Names Fadi’s morning task and calls it financial accounting.' },
          { t: 'Names his afternoon task and calls it management accounting.' },
          { t: 'Gives a reason, not only a label.' },
          { t: 'One example of each from your own work or studies.' },
          { t: 'Present simple throughout.' }
        ]
      }
    }
  ]
});
