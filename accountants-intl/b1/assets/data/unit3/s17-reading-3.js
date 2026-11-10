/* Unit 3 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Reading 3',
    page: 3,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Dealing with Vendor Discounts',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 3 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Dealing with Vendor Discounts',
      instruction: 'Read the advice on negotiating with suppliers for small purchases.',
      playable: [
        {
          t: 'When dealing with a vendor for office supplies, polite negotiation is possible.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Would they be willing to extend the payment terms to 30 days?',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'That is another option.', role: 'narrator', _key: 'narr' },
        {
          t: 'We must not accept informal receipts or verbal agreements.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'The entire transaction must be documented.', role: 'narrator', _key: 'narr' },
        {
          t: 'Could we offer to sign a long-term supply contract to gain a better discount?',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u3-reading-3-c1',
      passage: '<p>When dealing with a vendor for office supplies, polite negotiation is possible. You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice. Would they be willing to extend the payment terms to 30 days? That is another option. We must not accept informal receipts or verbal agreements. The entire transaction must be documented. Could we offer to sign a long-term supply contract to gain a better discount?</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'debtor', caption: 'Reading · Reading Passage 3: Dealing with Vendor Discounts' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 3 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What could you request from the vendor?',
          evidence: 'You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice.',
          options: [
            {
              t: 'A formal, itemized invoice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could you request from the vendor?</i> — it answers <i>What must you ensure the vendor issues?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Extend the payment terms to 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could you request from the vendor?</i> — it answers <i>What would the vendor be asked to do with the payment terms?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Informal receipts or verbal agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could you request from the vendor?</i> — it answers <i>What must not the company accept?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A small cash discount for immediate payment.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice.”'
            }
          ]
        },
        {
          q: '2. What must you ensure the vendor issues?',
          evidence: 'You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice.',
          options: [
            {
              t: 'A formal, itemized invoice.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “You could request a small cash discount for immediate payment, but you must ensure the vendor issues a formal, itemized invoice.”'
            },
            {
              t: 'A small cash discount for immediate payment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must you ensure the vendor issues?</i> — it answers <i>What could you request from the vendor?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Extend the payment terms to 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must you ensure the vendor issues?</i> — it answers <i>What would the vendor be asked to do with the payment terms?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Informal receipts or verbal agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must you ensure the vendor issues?</i> — it answers <i>What must not the company accept?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What would the vendor be asked to do with the payment terms?',
          evidence: 'Would they be willing to extend the payment terms to 30 days?',
          options: [
            {
              t: 'A formal, itemized invoice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would the vendor be asked to do with the payment terms?</i> — it answers <i>What must you ensure the vendor issues?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Informal receipts or verbal agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would the vendor be asked to do with the payment terms?</i> — it answers <i>What must not the company accept?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A small cash discount for immediate payment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would the vendor be asked to do with the payment terms?</i> — it answers <i>What could you request from the vendor?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Extend the payment terms to 30 days.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Would they be willing to extend the payment terms to 30 days?”'
            }
          ]
        },
        {
          q: '4. What must not the company accept?',
          evidence: 'We must not accept informal receipts or verbal agreements.',
          options: [
            {
              t: 'Informal receipts or verbal agreements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We must not accept informal receipts or verbal agreements.”'
            },
            {
              t: 'A small cash discount for immediate payment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must not the company accept?</i> — it answers <i>What could you request from the vendor?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Extend the payment terms to 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must not the company accept?</i> — it answers <i>What would the vendor be asked to do with the payment terms?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A formal, itemized invoice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must not the company accept?</i> — it answers <i>What must you ensure the vendor issues?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What could the company offer to gain a better discount?',
          evidence: 'Could we offer to sign a long-term supply contract to gain a better discount?',
          options: [
            {
              t: 'To sign a long-term supply contract.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Could we offer to sign a long-term supply contract to gain a better discount?”'
            },
            {
              t: 'A small cash discount for immediate payment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the company offer to gain a better discount?</i> — it answers <i>What could you request from the vendor?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A formal, itemized invoice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the company offer to gain a better discount?</i> — it answers <i>What must you ensure the vendor issues?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Extend the payment terms to 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the company offer to gain a better discount?</i> — it answers <i>What would the vendor be asked to do with the payment terms?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'credit-note', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
