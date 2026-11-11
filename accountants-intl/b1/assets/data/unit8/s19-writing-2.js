/* Unit 8 · s19-writing-2 — Writing 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s19-writing-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Writing 2',
    page: 8,
    section: '19',
    lesson: 'Part 6 · Writing',
    title: 'Writing 2'
  },
  objective: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
  cards: [
    {
      id: 'c1',
      covers: ['6C'],
      ref: '6C',
      bookRef: 'Unit 8 · 6C',
      type: 'cloze',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Passive Voice) in the following sentences. (Only the first one is corrected).',
      text: '<div style="font-size:16px;line-height:2.4">2. The revenue was calculate incorrectly. -> [[2]]<br>3. The statements is prepared every quarter. -> [[3]]<br>4. The issue will investigate by the audit team. -> [[4]]<br>5. All adjusting entries are make at month-end. -> [[5]]</div>',
      answers: {
        '2': ['The revenue was calculated incorrectly.'],
        '3': ['The statements are prepared every quarter.'],
        '4': ['The issue will be investigated by the audit team.'],
        '5': ['All adjusting entries are made at month-end.']
      },
      bank: ['The revenue was calculated incorrectly.'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>The revenue was calculated incorrectly.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>The statements are prepared every quarter.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>The issue will be investigated by the audit team.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>All adjusting entries are made at month-end.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> The revenue was calculate incorrectly. -> <u>The revenue was calculated incorrectly.</u>',
      brief: 'A short piece with a fixed purpose. Match the register to the reader — a manager and a supplier are not the same audience.',
      visual: { spot: 'invoice', caption: 'Writing · Writing Task 2: Correct the Mistakes (Grammar Focus)' }
    },
    {
      id: 'c2',
      covers: ['6C'],
      ref: '6C',
      bookRef: 'Unit 8 · 6C',
      type: 'writer',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Passive Voice) in the following sentences. (Only the first one is corrected).',
      paras: [
        {
          label: 'The new policy must check by legal. -> The new policy must be checked by legal.',
          purpose: ''
        },
        { label: 'The revenue was calculate incorrectly. -> ___________________________', purpose: '' },
        {
          label: 'The statements is prepared every quarter. -> ___________________________',
          purpose: ''
        },
        {
          label: 'The issue will investigate by the audit team. -> ___________________________',
          purpose: ''
        },
        {
          label: 'All adjusting entries are make at month-end. -> ___________________________',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'The new policy must check by legal. -> The new policy must be checked by legal.',
        'The revenue was calculate incorrectly. -> ___________________________',
        'The statements is prepared every quarter. -> ___________________________',
        'The issue will investigate by the audit team. -> ___________________________',
        'All adjusting entries are make at month-end. -> ___________________________'
      ],
      model: 'The new policy must be checked by legal.',
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Correct the grammar mistakes (Passive Voice) in the following sentences. (Only the first one is corrected).',
          'The new policy must check by legal. -> The new policy must be checked by legal.',
          'The revenue was calculate incorrectly. -> ___________________________',
          'The statements is prepared every quarter. -> ___________________________'
        ]
      },
      visual: { spot: 'closing', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 8 · 6D',
      type: 'study',
      source: 'book',
      title: 'Writing Task 3: Explaining a Delay (Internal Memo)',
      instruction: 'Focus: Use the Past Passive to explain the delay and the Present Continuous Passive (is being + P.P.) to describe the current action.',
      html: '<p><b>Context.</b> Write an internal memo (80 words) to a colleague explaining why the closing was delayed and what is being done now.</p><p>The closing was delayed because an error was found in the receivables account. That issue has been resolved, and the adjusted trial balance is now being prepared. The final statements will be delivered to the Group CFO by 5 PM. Thank you for your patience."</p><ol><li>Example: "MEMORANDUM: Closing Delay</li></ol>',
      playable: [
        {
          t: 'The closing was delayed because an error was found in the receivables account.',
          role: 'narrator'
        },
        {
          t: 'That issue has been resolved, and the adjusted trial balance is now being prepared.',
          role: 'narrator'
        },
        { t: 'The final statements will be delivered to the Group CFO by 5 PM.', role: 'narrator' },
        { t: 'Thank you for your patience.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'trial-balance',
        caption: 'Writing · Writing Task 3: Explaining a Delay (Internal Memo)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 8 · 6D',
      type: 'writer',
      title: 'Writing Task 3: Explaining a Delay (Internal Memo)',
      instruction: 'Focus: Use the Past Passive to explain the delay and the Present Continuous Passive (is being + P.P.) to describe the current action.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'MEMORANDUM: Closing Delay',
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Focus: Use the Past Passive to explain the delay and the Present Continuous Passive (is being + P.P.) to describe the current action.',
          'Example: "MEMORANDUM: Closing Delay'
        ]
      },
      visual: { spot: 'closing', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's18-writing-1',
  prevLabel: 'Writing 1',
  next: 's20-pronunciation',
  nextLabel: 'Pronunciation'
});
