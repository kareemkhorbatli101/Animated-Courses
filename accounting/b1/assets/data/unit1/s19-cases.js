/* Unit 1 §19 — Part 9, three case studies.

   These are judgement, not recall, so none of them is scored. Each case is
   the author's text in full, with his question and his answer frame. The
   coach holds the learner to the frame and to the tense, which is the part
   a page can check. */
EAFM.page('u1-s19', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 9', page: 1, section: '19',
          lesson: 'Part 9 · Cases', title: 'Three decisions' },
  objective: 'Decide what Fadi should do, and say why, in correct English',
  prev: 's18-consolidation', prevLabel: 'Consolidation',
  next: 's20-review', nextLabel: 'Review',
  intro: 'Read the three short case studies about the finance role. For each, decide what Fadi should do or say, and explain why. A good answer uses the present simple and present continuous correctly.',
  cards: [
    {
      id: 'c1', covers: ['Case 1', 'Part 9'], ref: 'Case 1', bookRef: 'Unit 1 · Part 9 · Case 1', type: 'solutions',
      title: 'Case 1 · What does finance do?',
      instruction: '<b>Question:</b> How should Fadi describe his job to the new colleague, and why is ‘just counting money’ wrong?',
      passage: { style: 'article', title: 'Case 1 · What does finance do?',
        paras: ['A new colleague joins the programme team. He thinks the finance office only counts money and says no to every request. He does not understand the full role. He asks Fadi a direct question: what do you actually do all day? Fadi wants to give a clear, friendly answer. He wants to show that finance does many connected tasks. He records, he reconciles, he reports, he budgets, and he advises. Fadi must explain this integrated job in simple words, so the new colleague respects the work of the team. Fadi records the money, and he checks it too. He reports on it, and he helps to plan it. Every small task is part of one big whole.'] },
      visual: { art: 'finance-cycle', wide: true,
        caption: 'Five stages, and the answer to this case is that none of them is "counting".' },
      placeholder: 'I think Fadi should … , because the finance job is … .',
      need: 1,
      ideas: [
        'name all five stages, not one',
        'use the word "connected"',
        'give Layth’s own example: how much money do we still have?',
        'say what the programme team gets out of it',
        'avoid defending — explain instead'
      ],
      coach: {
        title: 'Check your answer to Case 1',
        target: 'present simple, explaining a role',
        taught: ['Audio 1.3 is this case, already solved: Layth starts with "So you just count money?" and Fadi answers "It is more than that."',
                 'A description of what somebody always does is the present simple throughout.'],
        task: 'Say how Fadi should describe his job to the new colleague, and why "just counting money" is wrong. Use the answer frame.',
        parts: ['Start with the frame: "I think Fadi should … , because the finance job is … ."',
                'Name more than one stage of the cycle.',
                'Say what the colleague gets from the finance team.'],
        example: [
          'I think Fadi should describe the five stages of his work, because the finance job is one connected job and not a single task. He records every transaction, he reconciles the cash, he reports to the managers and the donors, he helps to plan the budget, and he advises on decisions. "Just counting money" is wrong because counting is only part of recording. The programme team depends on Fadi for good information, so when the new colleague asks how much money is left, it is Fadi who knows the answer.'
        ],
        criteria: [
          { t: 'Uses the answer frame.' },
          { t: 'Names at least three of the five stages.' },
          { t: 'Says why "just counting" is too small a description.' },
          { t: 'Present simple throughout — this is about what Fadi always does.' }
        ]
      }
    },
    {
      id: 'c2', covers: ['Case 2'], ref: 'Case 2', bookRef: 'Unit 1 · Part 9 · Case 2', type: 'solutions',
      title: 'Case 2 · The cash does not agree',
      instruction: '<b>Question:</b> What should Fadi do about the small difference, and why does even a small amount matter?',
      passage: { style: 'article', title: 'Case 2 · The cash does not agree',
        paras: ['This morning, Fadi is reconciling the cash. He counts the notes in the cash box. Then he checks the total in his ledger. The two numbers do not agree. There is a small difference of a few dollars. Some colleagues say, it is only a small amount, so forget it. Fadi does not agree. A good finance officer checks every difference, big or small. He wants to find the reason, because trust depends on accuracy. A small gap today can grow into a big problem tomorrow. Fadi must decide what to do now, and how to explain the difference to his manager.'] },
      visual: { spot: 'reconcile', caption: 'Two records of the same money. When they disagree, one of them is wrong.' },
      placeholder: 'I think Fadi should … , because even a small difference … .',
      need: 1,
      ideas: [
        'check every entry — Reading A says he does',
        'find the reason, not just the amount',
        'tell Mr Haytham',
        'trust depends on accuracy',
        'a small gap today can grow'
      ],
      coach: {
        title: 'Check your answer to Case 2',
        target: 'present simple, giving a reason',
        taught: ['Reading A has already shown what he does: "If they do not agree, Fadi looks for the mistake. He is very patient, and he checks every entry."',
                 'The case itself supplies the reason: "trust depends on accuracy".'],
        task: 'Say what Fadi should do about the small difference, and why even a small amount matters. Use the answer frame.',
        parts: ['Start with the frame.',
                'Say what he does — an action, not a feeling.',
                'Give the reason the case gives, in your own words.',
                'Say what he tells his manager.'],
        example: [
          'I think Fadi should look for the mistake and check every entry, because even a small difference means that one of the two records is wrong. The amount is not the problem; the error is. If he ignores it, he does not know whether the cash box is short by three dollars or whether an entry of three hundred is in the wrong place. He should also tell Mr Haytham, because a difference that is explained is not a problem, and a difference that is hidden becomes one.'
        ],
        criteria: [
          { t: 'Uses the answer frame.' },
          { t: 'Says he checks or searches — a concrete action.' },
          { t: 'Explains why the size of the amount is not the point.' },
          { t: 'Present simple throughout.' }
        ]
      }
    },
    {
      id: 'c3', covers: ['Case 3'], ref: 'Case 3', bookRef: 'Unit 1 · Part 9 · Case 3', type: 'solutions',
      title: 'Case 3 · Two jobs at once',
      instruction: '<b>Question:</b> How should Fadi plan his busy morning, and why is it important to do both tasks well?',
      passage: { style: 'article', title: 'Case 3 · Two jobs at once',
        paras: ['It is a busy morning. Right now, Fadi is training Samah, the new assistant. At the same time, Ms Sophie needs her report very soon. Fadi cannot do everything at the same moment. He wants to help Samah learn, but he also wants to send the report on time. He thinks about his priorities. Perhaps he finishes the urgent report first, and then he continues the training calmly. Fadi must plan his morning so that both tasks succeed. He thinks about the urgent report and about the people who are waiting. He also cares about Samah and her learning. A calm, clear plan helps him to finish both jobs well, without any stress.'] },
      visual: { spot: 'month-end', caption: 'Two things that both matter, and only one morning.' },
      placeholder: 'I think Fadi should … first, because … . Then he can … .',
      need: 1,
      ideas: [
        'the report has a deadline; the training does not',
        'tell Samah what is happening and when he will come back',
        'a calm plan, not a fast one',
        'both tasks succeed — that is the test',
        'Samah can watch while he works'
      ],
      coach: {
        title: 'Check your answer to Case 3',
        target: 'present simple and present continuous, planning',
        taught: ['This frame has three parts, not two — what comes first, why, and what comes after.',
                 'The case says what success looks like: "a calm, clear plan helps him to finish both jobs well".'],
        task: 'Say how Fadi should plan his busy morning and why both tasks must be done well. Use the three-part answer frame.',
        parts: ['What he does first, and why.',
                'What he does after that.',
                'What he says to Samah so that she is not simply left waiting.'],
        example: [
          'I think Fadi should finish Ms Sophie’s report first, because it has a deadline and the training does not. A donor is waiting, and a late report damages the trust that the whole team depends on. Then he can continue the training calmly, with the urgent work behind him. He should also tell Samah what is happening and when he will come back, so that she is not simply waiting. He can even ask her to watch while he checks the last figures, because that is training too.'
        ],
        criteria: [
          { t: 'Uses all three parts of the answer frame.' },
          { t: 'Gives a reason for the order, not just the order.' },
          { t: 'Says something about Samah — the case is not only about the report.' },
          { t: 'Uses the present continuous for what is happening now.' }
        ]
      }
    }
  ]
});
