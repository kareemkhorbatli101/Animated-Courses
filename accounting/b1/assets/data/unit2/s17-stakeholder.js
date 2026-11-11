/* Unit 2 §17 — Part 7, the Financial Stakeholder Track.

   The same month reported to four people in four registers. The two sample
   messages and the four comparison questions are the author's; Audio 2.5
   is the recorded version. */
EAFM.page('u2-s17', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 7', page: 2, section: '17',
          lesson: 'Part 7 · Stakeholders', title: 'Same month, different readers' },
  objective: 'Report the same finished month to a manager and to a donor',
  prev: 's16-writing', prevLabel: 'Writing',
  next: 's18-consolidation', nextLabel: 'Consolidation',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A', bookRef: 'Unit 2 · Part 7', type: 'quizset',
      title: 'Four readers, one true month',
      instruction: 'Read the two messages, then answer. They carry the same facts and sound nothing alike.',
      passage: {
        style: 'article',
        title: 'The same numbers, told four ways',
        paras: [
          'At the month-end, Fadi reported the same numbers to different people, but he told the story in different ways. To Layth, the programme manager, he explained what the project spent. To Ms Sophie, the donor, he showed a careful, formal statement. To Mr Haytham, his manager, he described every step of the close. And to Ms Ingrid, the regional controller, he sent the official monthly report. Each person heard the same true story of the past, but Fadi chose the right words for each one.',
          'Reporting to the programme manager (Layth)',
          'Hi Layth, last month your project spent twelve thousand dollars. I recorded every payment and I checked every receipt. The biggest cost was fuel. You still have enough money for the next two months.',
          'Reporting to the donor (Ms Sophie)',
          'Dear Ms Sophie, I closed the accounts for last month yesterday. The statement shows the total income and the total expense. I checked every entry, and every cost had a receipt. The record is complete.'
        ]
      },
      items: [
        {
          q: '1. What did Fadi explain to Layth, the programme manager?',
          evidence: 'the sentence beginning "To Layth, the programme manager…".',
          options: [
            { t: 'What the project spent.', ok: true,
              why: 'Right — "To Layth, the programme manager, he explained what the project spent." His message proves it: one number, one biggest cost, and what is left.' },
            { t: 'Every step of the close.', ok: false,
              why: 'That is Mr Haytham, his own manager. Someone inside the finance team wants the process; someone outside it wants the result.' },
            { t: 'A careful, formal statement.', ok: false,
              why: 'That is Ms Sophie, the donor.' },
            { t: 'The official monthly report.', ok: false,
              why: 'That goes to Ms Ingrid, the regional controller, in Amman.' }
          ]
        },
        {
          q: '2. What did Fadi show to Ms Sophie, the donor?',
          evidence: 'the sentence beginning "To Ms Sophie, the donor…".',
          options: [
            { t: 'A simple number.', ok: false,
              why: 'That is Layth’s. A donor who gave the money wants it accounted for, not summarised.' },
            { t: 'A careful, formal statement.', ok: true,
              why: 'Right — and both adjectives are doing work. Her message is the formal one: it opens "Dear Ms Sophie", names the statement, and ends on completeness rather than on how much is left.' },
            { t: 'The steps of the close.', ok: false,
              why: 'Mr Haytham’s. Although note that her message does mention checking every entry — the facts are shared, only the emphasis changes.' },
            { t: 'Nothing — she already trusted him.', ok: false,
              why: 'Trust in this course is a result of the reporting, never a substitute for it.' }
          ]
        },
        {
          q: '3. How many people did Fadi report to?',
          evidence: 'the four sentences beginning "To Layth…", "To Ms Sophie…", "To Mr Haytham…" and "And to Ms Ingrid…".',
          options: [
            { t: 'Two.', ok: false,
              why: 'Two messages are printed, but the paragraph names four people before the messages start.' },
            { t: 'Three.', ok: false,
              why: 'Easy to reach if you stop reading at "And to Ms Ingrid" — but the <i>and</i> is joining a fourth, not closing a third.' },
            { t: 'Four.', ok: true,
              why: 'Right — Layth, Ms Sophie, Mr Haytham and Ms Ingrid, each with a sentence of their own and each with a different kind of answer.' },
            { t: 'Five.', ok: false,
              why: 'Unit 1 counts five <i>directions</i>, one of which has no name. Here the text names people, and there are four of them.' }
          ]
        },
        {
          q: '4. Why did Fadi tell the same story in different ways?',
          evidence: 'the last sentence: "Each person heard the same true story of the past, but Fadi chose the right words for each one."',
          options: [
            { t: 'Because the numbers were different for each person.', ok: false,
              why: 'The opposite, and this is the central idea of Part 7: it is "the same true story of the past". Only the telling changes.' },
            { t: 'Because each person needed something different from the same facts.', ok: true,
              why: 'Right — "Fadi chose the right words for each one." A manager deciding next month and a donor reading a formal record need different things from one month’s truth.' },
            { t: 'Because he did not want Layth to see the statement.', ok: false,
              why: 'Nothing is withheld from anyone. Choosing words is not the same as hiding facts.' },
            { t: 'Because Ms Ingrid works in another country.', ok: false,
              why: 'She does, but distance is not the reason. Mr Haytham is in the same office and still gets a different kind of answer.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Audio 2.5'], ref: '2.5',
      bookRef: 'Unit 2 · Audio 2.5', type: 'scene',
      title: 'Audio 2.5 — Fadi and Layth',
      instruction: '<b>Before you listen:</b> Fadi reports last month’s numbers to Layth.',
      scene: 'u2-track'
    },
    {
      id: 'c3', covers: ['Audio 2.5'], ref: '7-A',
      bookRef: 'Unit 2 · Audio 2.5 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Two questions from the recording.',
      visual: { spot: 'expense', caption: '"Fuel. The cars travelled a lot last month."' },
      items: [
        {
          q: '1. How much did Layth’s project spend last month?',
          evidence: 'Fadi’s first answer in Audio 2.5.',
          jump: { scene: 'u2-track', line: 2 },
          options: [
            { t: 'Twelve thousand dollars.', ok: true,
              why: 'Right — "It spent twelve thousand dollars. I recorded every payment." The written message to Layth gives the same figure, so the two agree.' },
            { t: 'Eighty dollars.', ok: false,
              why: 'That is Karim’s fuel receipt in Reading B — one payment inside a month, not the month.' },
            { t: 'Two hundred dollars.', ok: false,
              why: 'Two hundred is the number of <b>entries</b> in Reading A, not an amount of money.' },
            { t: 'Five hundred dollars.', ok: false,
              why: 'That is the office-supplies receipt in Figure 2.1.' }
          ]
        },
        {
          q: '2. What was the biggest cost?',
          evidence: 'Fadi’s answer to "What was the biggest cost?"',
          jump: { scene: 'u2-track', line: 4 },
          options: [
            { t: 'Food.', ok: false,
              why: 'Never mentioned. The organisation helps families with food in Unit 1, but that is not what this project spent most on.' },
            { t: 'Fuel.', ok: true,
              why: 'Right — "Fuel. The cars travelled a lot last month." The second sentence is the reason, which is what makes it a real answer rather than a label.' },
            { t: 'Office supplies.', ok: false,
              why: 'Office supplies appear in Figure 2.1 as one $500 receipt — an example, not the month’s biggest cost.' },
            { t: 'Staff salaries.', ok: false,
              why: 'Not mentioned anywhere in this unit.' }
          ]
        }
      ]
    },
    {
      id: 'c4', covers: ['Audio 2.5'], ref: '7-B',
      bookRef: 'Unit 2 · Audio 2.5 · B', type: 'quizset',
      title: 'Listen again — true or false?',
      instruction: 'The first one is done for you.',
      visual: { spot: 'statement', caption: '"Enough for the next two months."' },
      worked: {
        q: '0. Layth’s project spent twelve thousand dollars.',
        a: 'True',
        why: 'Done for you — Fadi’s first answer, word for word.'
      },
      items: [
        {
          q: '1. The biggest cost was food.',
          evidence: '"Fuel. The cars travelled a lot last month."',
          jump: { scene: 'u2-track', line: 4 },
          options: [
            { t: 'True', ok: false,
              why: 'The recording names fuel, and gives a reason for it. Food is not mentioned.' },
            { t: 'False', ok: true,
              why: 'Right — the biggest cost was fuel.' }
          ]
        },
        {
          q: '2. Fadi found one small mistake while he was checking.',
          evidence: '"While I was checking, I found only one small mistake."',
          jump: { scene: 'u2-track', line: 6 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — and notice the sentence shape once more: a long action in the continuous ("while I was checking"), a short one in the simple ("I found"). Note that this is Layth’s project alone, which is why it is one mistake here and two across the whole month in Audio 2.2.' },
            { t: 'False', ok: false,
              why: 'The recording says it directly, and the number is in the sentence: "only one small mistake".' }
          ]
        },
        {
          q: '3. There is no money left for next month.',
          evidence: '"Enough for the next two months."',
          jump: { scene: 'u2-track', line: 10 },
          options: [
            { t: 'True', ok: false,
              why: 'The opposite, and by a margin — enough for two months, not none for one.' },
            { t: 'False', ok: true,
              why: 'Right — "Enough for the next two months. I updated the numbers this morning." The written message to Layth says the same.' }
          ]
        }
      ]
    },
    {
      id: 'c5', covers: ['Part 7'], ref: '7-turn',
      bookRef: 'Unit 2 · Part 7 · Your turn', type: 'writer',
      title: 'Your turn',
      instruction: 'Choose two people from Fadi’s world (a manager and a donor). Write a short past-tense message to each one about what you did last month (40–60 words each). Use the past simple.',
      visual: [
        { spot: 'manager', caption: 'to the manager: the result, quickly' },
        { spot: 'donor', caption: 'to the donor: the record, completely' }
      ],
      minWords: 80,
      aiCheck: {
        task: 'Two short messages reporting the same finished month: one to a manager and one to a donor.',
        grammar: 'the past simple for finished actions at a stated time (regular -ed and the common irregulars) and the past continuous (was/were + verb-ing) for an action already in progress when something else happened',
        reader: 'a manager in the first, a donor in the second',
        must: [
          'a different emphasis in each message',
          'the past simple for what was done',
          'a register suited to each reader'
        ]
      },
      pastCheck: true,
      stems: ['Hi …, last month your project spent…', 'I recorded… and I checked…',
              'Dear …, I closed the accounts for last month…',
              'I checked every entry, and…'],
      paras: [
        { label: 'To the manager', purpose: 'short and direct: what was spent, the biggest cost, what is left.' },
        { label: 'To the donor', purpose: 'formal and complete: what you closed, what the statement shows, what proves it.' }
      ],
      coach: {
        title: 'Check your two messages',
        target: 'past simple, in two registers',
        minWords: 80,
        taught: ['The manager wants the result; the donor wants the record.',
                 'The facts must be identical in both. Only the telling changes.',
                 'Everything is finished, so everything is past simple.'],
        task: 'Write a short past-tense message to a manager and to a donor about what you did last month (40–60 words each).',
        parts: ['To the manager — what was spent, and what is left.',
                'To the donor — what you closed, and what proves it.'],
        example: [
          'Hi Layth, last month your project spent nine thousand dollars. I recorded every payment and I checked every receipt. The biggest cost was transport. You still have enough for six weeks.',
          'Dear Ms Sophie, I closed the accounts for last month on Tuesday. The statement shows the total income and the total expense. I checked every entry, and every cost had a receipt. The record is complete.'
        ],
        exampleNote: 'Read the two side by side: nothing true in one is missing from the other. The donor’s version adds the proof; the manager’s adds what happens next.',
        criteria: [
          { t: 'Two separate messages, one to a manager and one to a donor.' },
          { t: 'The same facts in both — nothing hidden from either reader.' },
          { t: 'Past simple throughout, and no ‘ed’ after ‘did’.' },
          { t: 'Each message between 40 and 60 words.' }
        ]
      }
    }
  ]
});
