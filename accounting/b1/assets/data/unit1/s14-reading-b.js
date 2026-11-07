/* Unit 1 §14 — Part 5, Reading B: The Finance Team and the Whole Organisation.

   The book's matching exercise here reuses five words from Part 1 with
   slightly different wording and one extra meaning. The chips are the
   meanings and the targets the words, for the same reason as §3. */
EAFM.page('u1-s14', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 5 · Reading B', page: 1, section: '14',
          lesson: 'Part 5 · Reading', title: 'Reading B — the finance team and the whole organisation' },
  objective: 'See who the finance team serves, and why trust is the real product',
  prev: 's13-reading-a', prevLabel: 'Reading A',
  next: 's15-figure', nextLabel: 'Figure 1.1',
  intro: '<b>Before you read:</b> How do you think the finance team helps the rest of an organisation?',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5B', bookRef: 'Unit 1 · Reading B', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'Four people appear in this text, and each one wants something different from Fadi. Read for who wants what. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'The Finance Team and the Whole Organisation',
        listenLabel: 'Listen to the whole reading',
        say: { scene: 'u1-reading-b', who: 'narr' },
        watch: { scene: 'u1-reading-b', label: 'Watch it as a scene',
          title: 'The Finance Team and the Whole Organisation',
          lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'The finance team does not work alone. It sits at the centre of the whole organisation. Every day, it connects with many other people. Fadi works closely with three main groups. First, he works with the programme team. The programme managers run the projects on the ground. They spend the money, and they depend on Fadi for good information. Layth is one of these managers. He often asks Fadi a simple question: how much money do we still have?',
          'Second, Fadi works with the donors. The donors give the money for the projects. They want clear, honest reports. Fadi prepares these reports with great care. Ms Sophie represents one important donor. She reads Fadi’s numbers, and she trusts them. Third, Fadi works with his own manager, Mr Haytham. Mr Haytham is the country finance manager. He guides Fadi, and he checks the difficult accounts. Fadi learns something new from him every week.',
          'Above all these people sits the regional office in Amman. Ms Ingrid works there as the regional controller. She makes sure that every office follows the same rules. Fadi sends her a report each month. So the finance team is like a bridge. On one side stand the donors and the managers. On the other side stand the projects and the people. Fadi carries clear, honest numbers across this bridge. Because of his work, everybody trusts the money. This trust is the real product of a good finance team.',
          'Fadi understands this well, and he protects that trust every single day. He answers every question quickly and kindly. He explains the numbers in simple words. When Layth asks about the budget, Fadi shows him a clear table. When Ms Sophie needs the report, Fadi sends it on time. Every month, he checks the budget again. Mr Haytham checks the hard accounts with him. Ms Ingrid reads the monthly report from Amman. Right now, the finance team is closing the accounts. Together, this small team keeps the money safe. And safe money keeps the projects alive.'
        ]
      },
      worked: {
        q: '0. Where does the finance team sit in the organisation?',
        a: 'at the centre',
        why: 'The second sentence: "It sits at the centre of the whole organisation." A three-word answer is enough — the question asked where, not why.'
      },
      items: [
        {
          q: '1. What do the programme managers depend on Fadi for?',
          evidence: 'the sentence beginning "They spend the money…".',
          jump: { scene: 'u1-reading-b', line: 4 },
          options: [
            { t: 'Good information about the money.', ok: true,
              why: 'Right — "They spend the money, and they depend on Fadi for good information." The contrast in that one sentence is the whole relationship: they spend, he informs.' },
            { t: 'Permission to spend the money.', ok: false,
              why: 'Fadi never approves anything in this unit. (Approval appears in Unit 2, and it comes from a manager on a voucher, not from the finance officer.)' },
            { t: 'The money itself.', ok: false,
              why: 'The money comes from the donors — "The donors give the money for the projects." Fadi records it; he does not supply it.' },
            { t: 'Help with running the projects.', ok: false,
              why: 'The managers "run the projects on the ground" themselves. That sentence exists to keep the two jobs apart.' }
          ]
        },
        {
          q: '2. What do the donors want from Fadi?',
          evidence: 'the sentence beginning "They want…".',
          jump: { scene: 'u1-reading-b', line: 7 },
          options: [
            { t: 'Clear, honest reports.', ok: true,
              why: 'Right — "They want clear, honest reports." Both adjectives matter: clear is about how it reads, honest is about whether it is true.' },
            { t: 'A monthly report from Amman.', ok: false,
              why: 'That one goes TO Amman, and it is Ms Ingrid’s, the regional controller’s — not a donor’s.' },
            { t: 'A simple number, quickly.', ok: false,
              why: 'That is what Layth wants: "how much money do we still have?" Part 7 is built on this difference — same numbers, different readers.' },
            { t: 'Help to plan the budget.', ok: false,
              why: 'Budget planning is done with the programme managers, not with the donors.' }
          ]
        },
        {
          q: '3. Who is the country finance manager?',
          evidence: 'the sentence beginning "Mr Haytham is…".',
          jump: { scene: 'u1-reading-b', line: 9 },
          options: [
            { t: 'Layth', ok: false,
              why: 'Layth is a programme manager — "Layth is one of these managers", in the paragraph about the programme team.' },
            { t: 'Ms Ingrid', ok: false,
              why: 'She is the regional controller, in Amman, and she sits above all of them. A different title and a different office.' },
            { t: 'Mr Haytham', ok: true,
              why: 'Right — "Mr Haytham is the country finance manager. He guides Fadi, and he checks the difficult accounts."' },
            { t: 'Ms Sophie', ok: false,
              why: 'She "represents one important donor" — outside the organisation entirely.' }
          ]
        },
        {
          q: '4. Why is the finance team like a bridge? (inference)',
          evidence: 'the three sentences beginning "So the finance team is like a bridge…".',
          jump: { scene: 'u1-reading-b', line: 13 },
          options: [
            { t: 'Because it is in the middle of the office.', ok: false,
              why: 'The text does say "at the centre", but that is about the organisation, not the building — and a centre is not yet a bridge. A bridge needs two sides and something crossing.' },
            { t: 'Because it carries honest numbers between the donors and managers on one side, and the projects and people on the other.', ok: true,
              why: 'Right, and the text builds it in three steps: who stands on each side, and then "Fadi carries clear, honest numbers across this bridge". The thing that crosses is what makes it a bridge.' },
            { t: 'Because it is strong.', ok: false,
              why: 'Strength is a property of real bridges, not the one the text draws. Nothing in the paragraph is about strength.' },
            { t: 'Because it connects Damascus and Amman.', ok: false,
              why: 'Both cities appear, but the two sides of this bridge are groups of people, not places.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B-B', bookRef: 'Unit 1 · Reading B · B', type: 'quizset',
      title: 'True or false?',
      instruction: 'The first one is done for you. Two of these name a person — check the name AND the role.',
      visual: { spot: 'donor', caption: 'Four people, four different relationships to the same numbers.' },
      worked: {
        q: '0. The finance team works completely alone.',
        a: 'False',
        why: 'The reading opens by denying it: "The finance team does not work alone." The first sentence of a text is often the one a false statement contradicts.'
      },
      items: [
        {
          q: '1. Layth is a programme manager.',
          evidence: '"Layth is one of these managers."',
          jump: { scene: 'u1-reading-b', line: 4 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — the sentence before names the group: "The programme managers run the projects on the ground… Layth is one of these managers."' },
            { t: 'False', ok: false,
              why: 'He is named inside the programme-team paragraph, and Audio 1.3 introduces him the same way.' }
          ]
        },
        {
          q: '2. Ms Sophie represents a donor.',
          evidence: '"Ms Sophie represents one important donor."',
          jump: { scene: 'u1-reading-b', line: 8 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — almost word for word. The next sentence confirms the relationship: "She reads Fadi’s numbers, and she trusts them."' },
            { t: 'False', ok: false,
              why: 'She appears in the donors paragraph, and her role is stated directly.' }
          ]
        },
        {
          q: '3. Fadi never sends a report to Amman.',
          evidence: '"Fadi sends her a report each month."',
          jump: { scene: 'u1-reading-b', line: 12 },
          options: [
            { t: 'True', ok: false,
              why: 'He sends one every month, to Ms Ingrid in Amman. A statement with <i>never</i> in it is false the moment the text shows it happening once.' },
            { t: 'False', ok: true,
              why: 'Right — "Fadi sends her a report each month", and the last paragraph says it again: "Ms Ingrid reads the monthly report from Amman."' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B-C', bookRef: 'Unit 1 · Reading B · C', type: 'dragmatch',
      title: 'Match the words with their meanings',
      instruction: 'Match the words (1–5) with their meanings (a–f). <b>One meaning is extra.</b> The first one is done for you.',
      poolLabel: 'Click a meaning, then click the word it belongs to — or drag it there. One meaning is left over.',
      cols: 2,
      worked: {
        q: '0. (shown in the book as the example)',
        a: 'the pattern below',
        why: 'The book marks this exercise "0. is done for you". The five pairs below are the ones you place; the spare meaning is there to be left alone.'
      },
      chips: [
        { id: 'n-a', label: 'a) the main book or file that holds all the accounts' },
        { id: 'n-b', label: 'b) a person who manages money and accounts' },
        { id: 'n-c', label: 'c) the amount of money in an account at one moment' },
        { id: 'n-d', label: 'd) money in the form of notes and coins' },
        { id: 'n-e', label: 'e) to check that two records of money agree' },
        { id: 'n-f', label: 'f) a single piece of financial business' }
      ],
      whyTitle: 'The five, and the one that is spare',
      targets: [
        { id: 'r1', num: 1, label: 'finance officer', accept: 'n-b',
          why: 'The only meaning that begins "a person". Fadi is the finance officer of this whole unit.' },
        { id: 'r2', num: 2, label: 'ledger', accept: 'n-a',
          why: 'The <b>main</b> book. Reading A shows it in use: "he compares it with the record in his ledger".' },
        { id: 'r3', num: 3, label: 'reconcile', accept: 'n-e',
          why: 'The only verb, and the only meaning with <b>two</b> records in it. Counting one thing is not reconciling.' },
        { id: 'r4', num: 4, label: 'balance', accept: 'n-c',
          why: '"At one moment" is the whole definition. That is why Fadi can say "I always know the balance" — knowing it is a routine, but the balance itself is a single instant.' },
        { id: 'r5', num: 5, label: 'cash', accept: 'n-d',
          why: 'Notes and coins — the physical money in the cash box, as opposed to the number in the ledger. Reconciling is what compares the two.' }
      ],
      notes: [{ title: 'The spare meaning',
        body: '(f) "a single piece of financial business" is a <b>transaction</b>, which you matched in §3. It is left over here on purpose: transaction and entry and account are three different things, and the quickest way to keep them apart is to notice that a transaction happens in the world while an entry and an account live in a book.' }]
    }
  ]
});
