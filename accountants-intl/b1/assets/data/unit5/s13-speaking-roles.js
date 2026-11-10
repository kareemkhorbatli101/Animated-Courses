/* Unit 5 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Speaking · role-play',
    page: 5,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: Discussing an Overdue Account',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 5 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: Discussing an Overdue Account',
      instruction: 'Student A (Colleague): Ask about the settlement (Will). Ask what the AR team is doing (Going to).',
      html: '<p><b>Context.</b> A colleague (A) is checking on the status of an overdue account.</p><p>Student B (AR Clerk): Confirm they will chase the debtor. Explain what you are going to do next (e.g., send a final notice).</p>',
      playable: [
        { t: 'Student B (AR Clerk): Confirm they will chase the debtor.', role: 'narrator' },
        { t: 'Explain what you are going to do next (e.', role: 'narrator' },
        { t: ', send a final notice).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'debtor', caption: 'Speaking · Role-Play 1: Discussing an Overdue Account' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 5 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: Discussing an Overdue Account',
      instruction: 'Student A (Colleague): Ask about the settlement (Will). Ask what the AR team is doing (Going to).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "Will the client settle the account this week? What are you going to do next?"'
        },
        {
          who: 'B',
          notes: 'B: "I will chase them again today. We are going to send a final notice this afternoon."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Student A (Colleague): Ask about the settlement (Will). Ask what the AR team is doing (Going to).',
          'A: "Will the client settle the account this week? What are you going to do next?"',
          'B: "I will chase them again today. We are going to send a final notice this afternoon."'
        ]
      },
      model: 'A: Will the client settle the account this week? What are you going to do next? — B: I will chase them again today. We are going to send a final notice this afternoon. — B: Confirm they will chase the debtor. Explain what you are going to do next (e.g., send a final notice).',
      visual: { spot: 'payment-run', caption: 'Take each card in turn.' },
      remember: [
        'Student B (AR Clerk): Confirm they will chase the debtor. Explain what you are going to do next (e.g., send a final notice).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 5 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Scheduling the Payment Run',
      instruction: 'Student A (AP Manager): Suggest a day and time for the payment run (Present Continuous). Ask if the bank transfer will be fast.',
      html: '<p><b>Context.</b> Two colleagues are scheduling the AP payment run and a meeting.</p><p>Student B (AP Clerk): Confirm the payment run time (Present Continuous). Make a prediction about the speed (Will). Set a fixed arrangement for a follow-up meeting (Present Continuous).</p>',
      playable: [
        {
          t: 'Student B (AP Clerk): Confirm the payment run time (Present Continuous).',
          role: 'narrator'
        },
        { t: 'Make a prediction about the speed (Will).', role: 'narrator' },
        {
          t: 'Set a fixed arrangement for a follow-up meeting (Present Continuous).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reporting',
        caption: 'Speaking · Role-Play 2: Scheduling the Payment Run',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 5 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Scheduling the Payment Run',
      instruction: 'Student A (AP Manager): Suggest a day and time for the payment run (Present Continuous). Ask if the bank transfer will be fast.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "We are running the payment on Thursday at 4 PM. Will the bank transfer be fast enough?"'
        },
        {
          who: 'B',
          notes: 'B: "Thursday at 4 PM is fine. I think the transfer will clear overnight. I am setting up a follow-up meeting for Friday morning."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Student A (AP Manager): Suggest a day and time for the payment run (Present Continuous). Ask if the bank transfer will be fast.',
          'A: "We are running the payment on Thursday at 4 PM. Will the bank transfer be fast enough?"',
          'B: "Thursday at 4 PM is fine. I think the transfer will clear overnight. I am setting up a follow-up meeting for Friday morning."'
        ]
      },
      model: 'A: We are running the payment on Thursday at 4 PM. Will the bank transfer be fast enough? — B: Thursday at 4 PM is fine. I think the transfer will clear overnight. I am setting up a follow-up meeting for Friday morning. — B: Confirm the payment run time (Present Continuous). Make a prediction about the speed (Will). Set a fixed arrangement for a follow-up meeting (Present Continuous).',
      visual: { spot: 'payment-run', caption: 'Take each card in turn.' },
      remember: [
        'Student B (AP Clerk): Confirm the payment run time (Present Continuous). Make a prediction about the speed (Will). Set a fixed arrangement for a follow-up meeting (Present Continuous).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
