/* Unit 3 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Listening 3',
    page: 3,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Replenishing the Fund (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 3 · 3C',
      type: 'study',
      source: 'book',
      title: 'Passage 3: Replenishing the Fund (Financial Context)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> The fund custodian reports to the Financial Controller about the petty cash balance.</p><div class="script"><p>Custodian: "The petty cash fund is almost empty. I have EUR 50 left, and the float is EUR 500. May I request a replenishment of EUR 450? I have all the vouchers and receipts and have reconciled the fund. Would you mind reviewing the account ledger now and granting approval? If you authorize it, I can pick up the cash from the general cashier this afternoon."</p></div>',
      playable: [
        {
          t: 'The petty cash fund is almost empty. I have EUR 50 left, and the float is EUR 500. May I request a replenishment of EUR 450? I have all the vouchers and receipts and have reconciled the fund. Would you mind reviewing the account ledger now and granting approval? If you authorize it, I can pick up the cash from the general cashier this afternoon.',
          role: 'spk:Custodian',
          who: 'Custodian'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'receipt',
        caption: 'Listening · Passage 3: Replenishing the Fund (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 3 · 3C',
      type: 'cloze',
      title: 'Passage 3: Replenishing the Fund (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Requesting Cash: [[1]] I request a replenishment of EUR 450?<br>2. Asking for Approval: [[2]] you mind reviewing the account ledger now?<br>3. Offering Action: I [[3]] pick up the cash this afternoon.<br>4. Confirmation: If you [[4]] it, I can pick up the cash.</div>',
      answers: { '1': ['May'], '2': ['Would'], '3': ['can'], '4': ['authorize'] },
      bank: ['May', 'Would', 'authorize', 'can'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>May</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>Would</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>can</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>authorize</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Requesting Cash: <u>May</u> I request a replenishment of EUR 450?',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Replenishing the Fund (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
