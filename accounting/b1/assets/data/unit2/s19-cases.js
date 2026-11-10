/* Unit 2 §19 — Part 9, three case studies.

   Judgement, not recall, so none is scored. Each case is the author's text
   in full, in a passage so the provenance lock can check it, with his
   question and his answer frame. */
EAFM.page('u2-s19', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 9', page: 2, section: '19',
          lesson: 'Part 9 · Cases', title: 'Three decisions' },
  objective: 'Decide what Fadi should do, and say why, in correct past-tense English',
  prev: 's18-consolidation', prevLabel: 'Consolidation',
  next: 's20-review', nextLabel: 'Review',
  intro: 'Read the three short case studies about recording transactions. For each, decide what Fadi should do, and explain why. A good answer uses the past simple correctly.',
  cards: [
    {
      id: 'c1', covers: ['Case 1', 'Part 9'], ref: 'Case 1',
      bookRef: 'Unit 2 · Part 9 · Case 1', type: 'solutions',
      title: 'Case 1 · The wrong account',
      instruction: '<b>Question:</b> How should Fadi fix the entry, and why does the wrong account matter even when the totals agree?',
      passage: { style: 'article', title: 'Case 1 · The wrong account',
        paras: ['Yesterday, a colleague recorded a transaction, but he made a mistake. He paid for office supplies, but he posted the cost to the fuel account. The total was still correct, so the two sides of the entry were equal. However, the fuel account now looked too big, and the supplies account looked too small. The report showed the wrong picture. Fadi found the error this morning during his check. He knew that a wrong account created a false story, even when the totals agreed. Fadi had to decide how to fix the entry and how to prevent the same mistake in the future.'] },
      visual: { spot: 't-accounts',
        caption: 'The two sides balance — and the entry is still wrong. That is what makes this case hard.' },
      placeholder: 'I think Fadi should … , because the wrong account … .',
      need: 1,
      ideas: ['move the cost to the supplies account',
              'the totals agreeing is not the same as being right',
              'the report showed the wrong picture',
              'tell the colleague what happened',
              'a balanced entry can still be a false story'],
      coach: {
        title: 'Check your answer to Case 1',
        target: 'past simple, explaining a correction',
        taught: ['The case says the totals were equal, so balancing is not the test here.',
                 'Audio 2.2 is this same mistake, already fixed: "I corrected it at once."'],
        task: 'Say how Fadi should fix the entry and why the wrong account matters even when the totals agree. Use the answer frame.',
        parts: ['Start with the frame: "I think Fadi should … , because the wrong account … ."',
                'Say concretely what moves, and where it moves to.',
                'Say what the report showed, and what it should have shown.',
                'Say how the same mistake could be prevented.'],
        example: [
          'I think Fadi should move the cost from the fuel account to the office supplies account, because the wrong account told a false story even though the two sides were equal. The entry balanced, so nothing looked wrong in the totals, but the fuel account looked too big and the supplies account looked too small. When Layth read the report, he saw a transport problem that did not exist. Fadi should also tell the colleague what happened, so that the next entry goes to the right account the first time.'
        ],
        criteria: [
          { t: 'Uses the answer frame.' },
          { t: 'Names both accounts — the one it is in, and the one it belongs in.' },
          { t: 'Explains why a balanced entry can still be wrong.' },
          { t: 'Past simple for what happened; a modal for what should happen next.' }
        ]
      }
    },
    {
      id: 'c2', covers: ['Case 2'], ref: 'Case 2',
      bookRef: 'Unit 2 · Part 9 · Case 2', type: 'solutions',
      title: 'Case 2 · The missing receipt',
      instruction: '<b>Question:</b> What should Fadi do about the payment with no receipt, and why is proof so important?',
      passage: { style: 'article', title: 'Case 2 · The missing receipt',
        paras: ['A driver returned from a trip. He spent money on fuel, but he lost the receipt on the way. He asked Fadi to record the payment anyway. The amount was small, and the driver was honest. But Fadi remembered the rule: every payment needs a receipt or a clear proof. Without a receipt, the record was weak, and the donor might question it later. Fadi respected the driver, but he also respected the rule. He had to decide how to handle this payment fairly and honestly. He wanted to help the driver, but he also wanted a strong record. A weak record today could create a big problem at the next donor audit.'] },
      visual: { spot: 'receipt',
        caption: 'The paper that proves a payment took place — and this time it is missing.' },
      placeholder: 'I think Fadi should … , because a payment without proof … .',
      need: 1,
      ideas: ['ask for a clear proof instead of a receipt',
              'the driver is honest — the record still needs evidence',
              'the donor may question it later',
              'a weak record today, a big problem at the audit',
              'be fair to the driver and strict about the rule'],
      coach: {
        title: 'Check your answer to Case 2',
        target: 'past simple, defending a rule',
        taught: ['The case is careful to say the driver is honest, so "he might be lying" is not the answer.',
                 'The reason is in the case: "the donor might question it later."'],
        task: 'Say what Fadi should do about the payment with no receipt, and why proof matters. Use the answer frame.',
        parts: ['Start with the frame.',
                'Say what Fadi does — a concrete action, not a refusal.',
                'Give the reason the case gives, in your own words.',
                'Say how he can be fair to the driver at the same time.'],
        example: [
          'I think Fadi should ask for another clear proof before he records the payment, because a payment without proof is weak even when the person is honest. The rule is not about trusting the driver; it is about what the record can show to somebody who was not there. At the next donor audit, nobody will remember this trip, and the account will have no evidence behind it. Fadi can still be fair: he can ask the driver to write and sign a short note with the date, the amount and the station, and ask the manager to approve it.'
        ],
        criteria: [
          { t: 'Uses the answer frame.' },
          { t: 'Gives a concrete action, not only "he should refuse".' },
          { t: 'Explains why honesty is not the same as proof.' },
          { t: 'Says something about being fair to the driver.' }
        ]
      }
    },
    {
      id: 'c3', covers: ['Case 3'], ref: 'Case 3',
      bookRef: 'Unit 2 · Part 9 · Case 3', type: 'solutions',
      title: 'Case 3 · The late night',
      instruction: '<b>Question:</b> Should Fadi rush the last entries or check them carefully? Why does care matter more than speed here?',
      passage: { style: 'article', title: 'Case 3 · The late night',
        paras: ['It was the last night of the month-end. Fadi was tired, and the clock showed nine in the evening. He still had twenty entries to post. He wanted to finish quickly and go home. He thought about posting the entries fast, without a careful check. But he remembered a hard lesson from the past. Once, he rushed the close, and a small error hid for two months. That mistake cost the team many extra hours of difficult work. Fadi remembered the pain of that week very clearly. He had to decide between speed and care on this long, tiring night.'] },
      visual: { spot: 'posting',
        caption: 'Twenty entries still to move, and it is nine in the evening.' },
      placeholder: 'I think Fadi should … , because a rushed entry … .',
      need: 1,
      ideas: ['check them carefully, even if it takes longer',
              'last time a small error hid for two months',
              'the cost came later, and it was bigger',
              'post fewer entries tonight and finish tomorrow',
              'tiredness is the reason to slow down, not to speed up'],
      coach: {
        title: 'Check your answer to Case 3',
        target: 'past simple, learning from an example',
        taught: ['The case supplies its own evidence: "Once, he rushed the close, and a small error hid for two months."',
                 'Reading B ends on the same idea: "one careless entry could hide a real problem."'],
        task: 'Say whether Fadi should rush or check, and why care matters more than speed. Use the answer frame.',
        parts: ['Start with the frame.',
                'Use what happened last time as your evidence.',
                'Say what the rushed version would actually cost.',
                'Offer a practical way through the night.'],
        example: [
          'I think Fadi should check the last twenty entries carefully, because a rushed entry hides a problem instead of finishing it. Once before, he rushed the close and a small error stayed hidden for two months, and the team then lost many hours finding it. Going home an hour earlier tonight would cost far more later. He is tired, and that is a reason to slow down rather than speed up: a tired person makes exactly the kind of mistake a quick check would catch. If he cannot finish well tonight, he should post what he can check properly and finish the rest in the morning.'
        ],
        criteria: [
          { t: 'Uses the answer frame.' },
          { t: 'Uses the past example from the case as evidence.' },
          { t: 'Compares the cost of rushing with the cost of checking.' },
          { t: 'Past simple for what happened before; a modal for the decision.' }
        ]
      }
    }
  ]
});
