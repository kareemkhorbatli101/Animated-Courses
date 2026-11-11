/* Unit 3 · s06-grammar-rule — Grammar · the rule
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s06-grammar-rule', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Grammar · the rule',
    page: 3,
    section: '06',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · the rule'
  },
  objective: 'Grammar Context: Professional Politeness',
  cards: [
    {
      id: 'c1',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 3 · 2A',
      type: 'study',
      source: 'book',
      title: 'Grammar Context: Professional Politeness',
      instruction: 'Modals are used in accounting communication to ensure professionalism and politeness when asking for approvals, offering help, or making formal requests.',
      html: '<p>Accountant: "May I ask you to sign this petty cash voucher? Could you please attach the original receipt? I can offer to process your reimbursement immediately, but would you mind filling in the expense form first? You can find the form on the shared drive."</p>',
      playable: [
        {
          t: 'May I ask you to sign this petty cash voucher? Could you please attach the original receipt? I can offer to process your reimbursement immediately, but would you mind filling in the expense form first? You can find the form on the shared drive.',
          role: 'spk:Accountant',
          who: 'Accountant'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The grammar of this unit, in a document rather than a rule. Notice the form before anyone explains it to you.',
      visual: { spot: 'receipt', caption: 'Grammar · Grammar Context: Professional Politeness' }
    },
    {
      id: 'c2',
      covers: ['2A'],
      ref: '2A',
      bookRef: 'Unit 3 · 2A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. Which modals are used for making a request? Which are used for making an offer?',
          evidence: 'the passage above',
          options: [
            {
              t: 'May. It outranks Could and Can because it asks the other person to grant something, rather than asking whether they are able or willing.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which modals are used for making a request? Which are used for making an offer?</i> — it answers <i>Which modal is the most formal way to ask for permission?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Requests: May I ask you to…?, Could you please…?, Would you mind…? Offers: I can offer to…, You can…',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Could you…? is more polite and more formal; Can you…? is neutral and is used with colleagues you know well.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which modals are used for making a request? Which are used for making an offer?</i> — it answers <i>What is the difference in formality between Can you...? and Could you...?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. Which modal is the most formal way to ask for permission?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Requests: May I ask you to…?, Could you please…?, Would you mind…? Offers: I can offer to…, You can…',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which modal is the most formal way to ask for permission?</i> — it answers <i>Which modals are used for making a request? Which are used for making an offer?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'May. It outranks Could and Can because it asks the other person to grant something, rather than asking whether they are able or willing.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Could you…? is more polite and more formal; Can you…? is neutral and is used with colleagues you know well.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Which modal is the most formal way to ask for permission?</i> — it answers <i>What is the difference in formality between Can you...? and Could you...?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What is the difference in formality between Can you...? and Could you...?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Could you…? is more polite and more formal; Can you…? is neutral and is used with colleagues you know well.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Requests: May I ask you to…?, Could you please…?, Would you mind…? Offers: I can offer to…, You can…',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the difference in formality between Can you...? and Could you...?</i> — it answers <i>Which modals are used for making a request? Which are used for making an offer?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'May. It outranks Could and Can because it asks the other person to grant something, rather than asking whether they are able or willing.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the difference in formality between Can you...? and Could you...?</i> — it answers <i>Which modal is the most formal way to ask for permission?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'entry', caption: 'Grammar · Answer the questions', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['2B'],
      ref: '2B',
      bookRef: 'Unit 3 · 2B',
      type: 'study',
      source: 'book',
      title: 'Grammar Focus Box: Modals of Request and Offer',
      instruction: 'Read this before you go on.',
      html: '<table class="bt"><thead><tr><th>Function</th><th>Modal</th><th>Structure</th><th>Formality/Usage</th><th>Example (Accounting Context)</th></tr></thead><tbody><tr><td>Formal Request</td><td>May</td><td>May I + base verb...?</td><td>Very formal. Asking permission.</td><td>"May I request the expense report by 4 PM?"</td></tr><tr><td>Polite Request</td><td>Could</td><td>Could you + base verb...?</td><td>Polite and professional.</td><td>"Could you verify the vendor details on this invoice?"</td></tr><tr><td>Stronger Request</td><td>Would</td><td>Would you + base verb...? Would you mind + -ing?</td><td>Polite. Often used for favor or commitment.</td><td>"Would you mind signing the voucher now?"</td></tr><tr><td>Informal Request</td><td>Can</td><td>Can you + base verb...?</td><td>Informal/Friendly. Also used for ability.</td><td>"Can you check the cash balance now?"</td></tr><tr><td>Offer/Willingness</td><td>Can</td><td>I can + base verb...</td><td>Offering assistance or capability.</td><td>"I can offer to process the reimbursement today."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'payment-run',
        caption: 'Grammar · Grammar Focus Box: Modals of Request and Offer',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's05-vocab-build',
  prevLabel: 'Word building',
  next: 's07-grammar-practice',
  nextLabel: 'Grammar · practice'
});
