/* Unit 1 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Grammar · the rule',
    page: 1,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Routine vs. Right Now',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 1 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Routine vs. Right Now',
      instruction: 'Read the dialogue between a Senior Accountant (Marta, in Kraków) and a Junior (Daniel, in Nairobi).',
      html: '<p>Marta: "Daniel, do you check the bank statements every morning?"</p><p>Daniel: "Yes, I do. I usually download them at 9:00 AM my time. But right now, I am fixing a printer error, so I am a bit late."</p><p>Marta: "Okay. What is Priya doing?"</p><p>Daniel: "She is meeting with a supplier on a video call. They are discussing the payment terms."</p><p>Marta: "I see. We generally hold supplier calls on Tuesdays, but this week is busy."</p>',
      playable: [
        { t: 'Daniel, do you check the bank statements every morning?', role: 'spk:Marta', who: 'Marta' },
        {
          t: 'Yes, I do. I usually download them at 9:00 AM my time. But right now, I am fixing a printer error, so I am a bit late.',
          role: 'spk:Daniel',
          who: 'Daniel'
        },
        { t: 'Okay. What is Priya doing?', role: 'spk:Marta', who: 'Marta' },
        {
          t: 'She is meeting with a supplier on a video call. They are discussing the payment terms.',
          role: 'spk:Daniel',
          who: 'Daniel'
        },
        {
          t: 'I see. We generally hold supplier calls on Tuesdays, but this week is busy.',
          role: 'spk:Marta',
          who: 'Marta'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The grammar of this unit, in a document rather than a rule. Notice the form before anyone explains it to you.',
      visual: { spot: 'entry', caption: 'Grammar · Grammar Context: Routine vs. Right Now' }
    },
    {
      id: 'c2',
      covers: ['2B'],
      ref: '2B',
      bookRef: 'Unit 1 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box',
      instruction: 'Note on Stative Verbs: Verbs of thinking/owning (know, owe, own, cost, understand) are almost always Simple, even if happening now.',
      html: '<p>Correct: "We owe the supplier EUR 500."</p><p>Incorrect: "We are owing the supplier EUR 500."</p><table class="bt"><thead><tr><th>Tense</th><th>Function</th><th>Time Words</th><th>Example</th></tr></thead><tbody><tr><td>Present Simple</td><td>Routines, facts, permanent situations, schedules.</td><td>usually, always, daily, every month, often</td><td>"I post invoices every Friday.""The office opens at 8 AM."</td></tr><tr><td>Present Continuous</td><td>Actions happening now, temporary situations, current projects.</td><td>currently, at the moment, right now, today, this week</td><td>"I am reconciling the bank.""We are using new software this month."</td></tr></tbody></table>',
      playable: [
        { t: 'Correct: "We owe the supplier EUR 500.', role: 'narrator' },
        { t: 'Incorrect: "We are owing the supplier EUR 500.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Grammar · Grammar Focus Box', cls: 'vis-sm' }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
