/* Unit 1 §15 — Figure 1.1, and the four questions the book asks about it.

   The book's answer key for this task reprints the four questions instead
   of answering them (see the ERRATA), so every answer below is derived from
   the figure and from the caption the author wrote under it. The caption is
   quoted verbatim, because it is the only place the five stages are named
   in a single sentence. */
EAFM.page('u1-s15', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Figure 1.1', page: 1, section: '15',
          lesson: 'Part 5 · Reading', title: 'Figure 1.1 — the finance cycle at HRI' },
  objective: 'Read a cycle diagram and say why it is a cycle',
  prev: 's14-reading-b', prevLabel: 'Reading B',
  next: 's16-writing', nextLabel: 'Writing',
  intro: 'Look at Figure 1.1 (the finance cycle) and answer. This checks that you can read a cycle diagram.',
  cards: [
    {
      id: 'c1', covers: ['Figure 1.1'], ref: 'F1.1', bookRef: 'Unit 1 · Figure 1.1', type: 'quizset',
      title: 'Read the diagram',
      instruction: 'Everything you need is in the picture and in its caption. You met this diagram in §1, before the text; now you have read the text too.',
      visual: { art: 'finance-cycle', wide: true,
        caption: 'Figure 1.1 · The finance cycle at HRI. Fadi records every transaction, reconciles the cash and the bank, reports to managers and donors, helps to budget the money, and advises on decisions. Then the cycle begins again. Together, these tasks form one job: financial management.' },
      items: [
        {
          q: '1. What is stage 1 in the cycle?',
          evidence: 'the first verb in the caption, and the numbered circle at the top.',
          options: [
            { t: 'Recording every transaction.', ok: true,
              why: 'Right — the caption lists the stages in order and begins "Fadi records every transaction". The diagram marks it too: stage 1 sits at the top and is the only circle in a different colour.' },
            { t: 'Reconciling the cash and the bank.', ok: false,
              why: 'Stage 2, the next one round. Reconciling compares two records, so something has to be recorded first.' },
            { t: 'Advising on decisions.', ok: false,
              why: 'Stage 5, the last. It is the stage that needs everything else to have happened already.' },
            { t: 'Budgeting the money.', ok: false,
              why: 'Stage 4. A budget looks forward, so it rests on the record of what has gone before.' }
          ]
        },
        {
          q: '2. What does Fadi do at stage 2?',
          evidence: 'the second verb in the caption.',
          options: [
            { t: 'He reports to the managers.', ok: false,
              why: 'Stage 3. The caption puts reporting after reconciling, and so does Reading A.' },
            { t: 'He reconciles the cash and the bank.', ok: true,
              why: 'Right — "reconciles the cash and the bank". Two records of the same money, checked against each other, which is exactly the definition you matched in §3.' },
            { t: 'He records the transactions.', ok: false,
              why: 'That is stage 1, which you have just answered.' },
            { t: 'He advises his colleagues.', ok: false,
              why: 'Stage 5, right at the end of the ring.' }
          ]
        },
        {
          q: '3. Who does Fadi report to at stage 3?',
          evidence: 'the third item in the caption: "reports to managers and donors".',
          options: [
            { t: 'The managers only.', ok: false,
              why: 'Half right, and that is the trap. The caption names two audiences, and Audio 1.2 says it the same way: "a report for the managers and the donors."' },
            { t: 'The donors only.', ok: false,
              why: 'The other half. Both groups are in the same phrase.' },
            { t: 'The managers and the donors.', ok: true,
              why: 'Right — "reports to managers and donors". Reading B explains why both: the managers run the projects, the donors gave the money, and each needs the same numbers told a different way.' },
            { t: 'The regional controller in Amman.', ok: false,
              why: 'Ms Ingrid does receive a monthly report, but she appears in Reading B rather than in this diagram. The figure names only two audiences.' }
          ]
        },
        {
          q: '4. Why do the five stages form a cycle? (inference)',
          evidence: 'the caption sentence "Then the cycle begins again", and the arrows.',
          options: [
            { t: 'Because there are exactly five of them.', ok: false,
              why: 'The number is not the reason. Four stages or six would still be a cycle if the last one led back to the first.' },
            { t: 'Because the last stage leads back to the first, and the work starts again.', ok: true,
              why: 'Right — the caption says it in four words: "Then the cycle begins again." The arrows in the diagram do the same job: the one leaving stage 5 arrives at stage 1.' },
            { t: 'Because Fadi does them all in one day.', ok: false,
              why: 'He does not — reporting is monthly and recording is daily. A cycle is about order, not about speed.' },
            { t: 'Because they are drawn in a circle.', ok: false,
              why: 'The circle is how the idea is drawn, not why it is true. The text makes the same point with no picture at all: "Then the cycle starts again."' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Figure 1.1'], ref: 'F1.1-b', bookRef: 'Unit 1 · Figure 1.1', type: 'order',
      title: 'Put the five stages back in order',
      instruction: 'The caption names the five stages in order. They are shuffled here — put them back, then check against the diagram above.',
      say: { key: 'course' },
      poolLabel: 'Click a stage, then click its place — or drag it there.',
      blocks: [
        { id: 'g4', text: 'helps to budget the money' },
        { id: 'g1', text: 'records every transaction' },
        { id: 'g5', text: 'advises on decisions' },
        { id: 'g3', text: 'reports to managers and donors' },
        { id: 'g2', text: 'reconciles the cash and the bank' }
      ],
      positions: ['g1', 'g2', 'g3', 'g4', 'g5'],
      whyTitle: 'Why each stage sits where it does',
      after: 'Then the cycle begins again — which is why stage 5 is next to stage 1 on the diagram, not far from it.'
    }
  ]
});
