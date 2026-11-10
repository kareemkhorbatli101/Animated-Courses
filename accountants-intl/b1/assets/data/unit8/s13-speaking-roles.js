/* Unit 8 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Speaking · role-play',
    page: 8,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Onboarding Training',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 8 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Onboarding Training',
      instruction: 'Student A (Senior): Describe the first three steps of closing the books using the Passive Voice (The books are closed...).',
      html: '<p><b>Context.</b> A senior accountant (A) is explaining the month-end closing steps to a new hire (B).</p><p>Student B (New Hire): Ask about the last step and who is involved (The report is prepared by...?).</p>',
      playable: [
        {
          t: 'Student B (New Hire): Ask about the last step and who is involved (The report is prepared by...?',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 1: The Onboarding Training' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 8 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Onboarding Training',
      instruction: 'Student A (Senior): Describe the first three steps of closing the books using the Passive Voice (The books are closed...).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "First, the unadjusted trial balance is printed. Then, all adjusting entries are made. Finally, the final balance is generated."'
        },
        {
          who: 'B',
          notes: 'B: "I see. After that, is the report prepared, and is it reviewed by the Controller?"'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Student A (Senior): Describe the first three steps of closing the books using the Passive Voice (The books are closed...).',
          'A: "First, the unadjusted trial balance is printed. Then, all adjusting entries are made. Finally, the final balance is generated."',
          'B: "I see. After that, is the report prepared, and is it reviewed by the Controller?"'
        ]
      },
      model: 'A: First, the unadjusted trial balance is printed. Then, all adjusting entries are made. Finally, the final balance is generated. — B: I see. After that, is the report prepared, and is it reviewed by the Controller? — B: Ask about the last step and who is involved (The report is prepared by...?).',
      visual: { spot: 'closing', caption: 'Take each card in turn.' },
      remember: [
        'Student B (New Hire): Ask about the last step and who is involved (The report is prepared by...?).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 8 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Explaining a Derivation',
      instruction: 'Student A (Analyst): Explain that the figure is calculated from revenue and expense (Passive Voice).',
      html: '<p><b>Context.</b> A financial analyst (A) is explaining how the Net Profit figure is derived to an investor (B).</p><p>Student B (Investor): Ask if the tax is deducted before or after this calculation (Passive Voice).</p>',
      playable: [
        {
          t: 'Student B (Investor): Ask if the tax is deducted before or after this calculation (Passive Voice).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'payment-run',
        caption: 'Speaking · Role-Play 2: Explaining a Derivation',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 8 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Explaining a Derivation',
      instruction: 'Student A (Analyst): Explain that the figure is calculated from revenue and expense (Passive Voice).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "The Net Profit figure is derived from Gross Profit, after all operating expenses are subtracted."'
        },
        {
          who: 'B',
          notes: 'B: "And is the tax expense calculated before or after the other deductions?"'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Student A (Analyst): Explain that the figure is calculated from revenue and expense (Passive Voice).',
          'A: "The Net Profit figure is derived from Gross Profit, after all operating expenses are subtracted."',
          'B: "And is the tax expense calculated before or after the other deductions?"'
        ]
      },
      model: 'A: The Net Profit figure is derived from Gross Profit, after all operating expenses are subtracted. — B: And is the tax expense calculated before or after the other deductions? — B: Ask if the tax is deducted before or after this calculation (Passive Voice).',
      visual: { spot: 'closing', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Investor): Ask if the tax is deducted before or after this calculation (Passive Voice).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
