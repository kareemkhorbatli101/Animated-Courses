/* Unit 2 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Pronunciation',
    page: 2,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Accounting Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 2 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Accounting Vocabulary',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'In-voice → the stress falls on {{In|voice}}',
          answer: 0,
          why: 'In-voice — say it with the beat on <b>IN</b>.'
        },
        {
          text: 'Re-ceipt → the stress falls on {{Re|ceipt}}',
          answer: 1,
          why: 'Re-ceipt — say it with the beat on <b>CEIPT</b>.'
        },
        {
          text: 'En-try → the stress falls on {{En|try}}',
          answer: 0,
          why: 'En-try — say it with the beat on <b>EN</b>.'
        },
        {
          text: 'Po-sting → the stress falls on {{Po|sting}}',
          answer: 0,
          why: 'Po-sting — say it with the beat on <b>PO</b>.'
        },
        {
          text: 'Re-con-ci-li-a-tion → the stress falls on {{Re|con|ci|li|a|tion}}',
          answer: 4,
          why: 'Re-con-ci-li-a-tion — say it with the beat on <b>A</b>.'
        }
      ],
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Accounting Vocabulary' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 2 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Invoice', 'Receipt', 'Entry', 'Posting', 'Reconciliation'],
      visual: { spot: 'invoice', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 2 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '/t/ sound: process(ed), loc(ated)',
        '/d/ sound: fil(ed), review(ed)',
        '/ɪd/ sound: needed, submit(ted) (Note: The final consonant is doubled here.)'
      ],
      visual: { spot: 'journal', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 2 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Asking for Clarification',
      instruction: 'Practice: Read these questions:',
      html: '<p><b>Context.</b> Use rising intonation when asking for clarification about a past event or procedure.</p><ol><li>"So, you were posting the entries when the manager called?" (Rising intonation on called)</li><li>"Did you file the receipt under the date or the vendor name?" (Rising intonation on or)</li><li>"What was the team doing at 3:00 PM yesterday?" (Falling intonation on yesterday as it\'s a WH-question)</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'receipt',
        caption: 'Pronunciation · Intonation: Asking for Clarification',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 2 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Asking for Clarification',
      instruction: 'Practice: Read these questions:',
      html: '<p><b>Context.</b> Use rising intonation when asking for clarification about a past event or procedure.</p><ol><li>"So, you were posting the entries when the manager called?" (Rising intonation on called)</li><li>"Did you file the receipt under the date or the vendor name?" (Rising intonation on or)</li><li>"What was the team doing at 3:00 PM yesterday?" (Falling intonation on yesterday as it\'s a WH-question)</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'posting',
        caption: 'Pronunciation · Intonation: Asking for Clarification',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c6',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 2 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"So, you were posting the entries when the manager called?" (Rising intonation on called)',
        '"Did you file the receipt under the date or the vendor name?" (Rising intonation on or)',
        '"What was the team doing at 3:00 PM yesterday?" (Falling intonation on yesterday as it\'s a WH-question)'
      ],
      visual: { spot: 'debtor', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 2 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Explaining the Process',
      instruction: 'Read the following passage, focusing on clear articulation of the Past Simple and Past Continuous.',
      html: '<p>"Yesterday, I was reviewing the bank statement while the new clerk was processing the invoices. Suddenly, the system sent an error message. I immediately checked the ledger and found that the entry was incorrect. We corrected the mistake and finished the reconciliation before the end of the day."</p>',
      playable: [
        {
          t: '"Yesterday, I was reviewing the bank statement while the new clerk was processing the invoices.',
          role: 'narrator'
        },
        { t: 'Suddenly, the system sent an error message.', role: 'narrator' },
        {
          t: 'I immediately checked the ledger and found that the entry was incorrect.',
          role: 'narrator'
        },
        {
          t: 'We corrected the mistake and finished the reconciliation before the end of the day.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reconcile',
        caption: 'Pronunciation · Fluency Drill: Explaining the Process',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c8',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 2 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Explaining the Process',
      instruction: 'Read the following passage, focusing on clear articulation of the Past Simple and Past Continuous.',
      html: '<p>"Yesterday, I was reviewing the bank statement while the new clerk was processing the invoices. Suddenly, the system sent an error message. I immediately checked the ledger and found that the entry was incorrect. We corrected the mistake and finished the reconciliation before the end of the day."</p>',
      playable: [
        {
          t: '"Yesterday, I was reviewing the bank statement while the new clerk was processing the invoices.',
          role: 'narrator'
        },
        { t: 'Suddenly, the system sent an error message.', role: 'narrator' },
        {
          t: 'I immediately checked the ledger and found that the entry was incorrect.',
          role: 'narrator'
        },
        {
          t: 'We corrected the mistake and finished the reconciliation before the end of the day.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'ledger',
        caption: 'Pronunciation · Fluency Drill: Explaining the Process',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
