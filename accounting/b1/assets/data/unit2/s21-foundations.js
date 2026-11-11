/* Unit 2 §21 — Part 11, Foundations for Further Study.

   Double-entry and the accounting equation: the bridge to the CMA. The
   English stays at B1 while the idea does not. */
EAFM.page('u2-s21', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 11', page: 2, section: '21',
          lesson: 'Part 11 · Foundations', title: 'Two sides for every entry' },
  objective: 'Say why every entry has two equal sides, and name the equation behind it',
  prev: 's20-review', prevLabel: 'Review',
  intro: '<i>(anchoring for the CMA and a Master’s abroad)</i> — This part connects your English to a big idea in accounting: double-entry. It is the foundation of every ledger and every statement. The English stays simple; the idea opens a door to the future.',
  cards: [
    {
      id: 'c1', covers: ['Part 11'], ref: '11A',
      bookRef: 'Unit 2 · Part 11 · A', type: 'quizset',
      title: 'Concept Spotlight: Two Sides for Every Entry',
      instruction: 'Read, then answer in your own words. You have already seen this rule working — in Audio 2.3, in Reading B and in Figure 2.1.',
      passage: {
        style: 'article',
        title: 'Two Sides for Every Entry',
        paras: [
          'In Unit 2, you saw that every entry has a debit and a credit. This is the rule of double-entry, and it is the heart of all accounting. The idea is simple but powerful. Every transaction changes two things at the same time. When Karim bought fuel, the fuel cost went up, and the cash went down. So the entry needed two sides. The debit and the credit were equal, because the two changes were equal.',
          'This balance is never an accident. It follows a famous rule called the accounting equation. The equation says: assets equal liabilities plus equity. Assets are the things the organisation owns, such as cash and equipment. Liabilities are the amounts it owes to other people. Equity is the value inside the organisation itself.',
          'Every double-entry keeps this equation in balance. When one side moves, the other side moves too. This is why accountants trust double-entry so much. If the two sides do not agree, they know at once that something is wrong. Fadi loves this idea. A small daily habit, two equal sides, protects the truth of the whole system.'
        ]
      },
      items: [
        {
          q: '1. What two things changed when Karim bought fuel?',
          evidence: 'the sentence beginning "When Karim bought fuel…".',
          options: [
            { t: 'The fuel cost went up, and the cash went down.', ok: true,
              why: 'Right — "the fuel cost went up, and the cash went down." Two changes, opposite directions, same amount. That is why the entry needed a debit and a credit of eighty dollars each.' },
            { t: 'The fuel cost went up, and the income went up.', ok: false,
              why: 'No money came in. Buying something cannot raise income.' },
            { t: 'The cash went up, and the fuel cost went down.', ok: false,
              why: 'Both directions reversed. Karim paid out, so cash fell.' },
            { t: 'Only the cash changed.', ok: false,
              why: 'If only one thing changed there would be nothing to put on the other side, and the entry could not balance. The whole idea is that a transaction always changes two.' }
          ]
        },
        {
          q: '2. What does the accounting equation say?',
          evidence: 'the sentence beginning "The equation says…".',
          options: [
            { t: 'Income equals expense.', ok: false,
              why: 'That is what a statement compares, and they are usually not equal at all — the difference is what is left.' },
            { t: 'Assets equal liabilities plus equity.', ok: true,
              why: 'Right — word for word. The text then defines all three terms in the next three sentences, which is the fastest way to learn them.' },
            { t: 'Debit equals credit.', ok: false,
              why: 'True of every entry, and it follows from the equation — but it is not the equation. The equation is about the whole organisation, not about one line.' },
            { t: 'Cash equals the bank.', ok: false,
              why: 'That is what reconciling checks, in Unit 1. Two records of the same money, not a rule about an organisation.' }
          ]
        },
        {
          q: '3. What are ‘assets’?',
          evidence: 'the sentence beginning "Assets are…".',
          options: [
            { t: 'The amounts the organisation owes to other people.', ok: false,
              why: 'Those are <b>liabilities</b> — the very next sentence. Owning and owing are the pair this paragraph exists to separate.' },
            { t: 'The things the organisation owns, such as cash and equipment.', ok: true,
              why: 'Right — and the two examples are the useful part: cash is an asset, which is why crediting cash in Reading B made an asset go down.' },
            { t: 'The value inside the organisation itself.', ok: false,
              why: 'That is <b>equity</b>, the third term.' },
            { t: 'Money the organisation receives.', ok: false,
              why: 'That is income, from Part 1. Income raises what you own, but it is not the same thing as owning it.' }
          ]
        },
        {
          q: '4. Why do accountants trust double-entry so much? (inference)',
          evidence: 'the two sentences beginning "This is why accountants trust double-entry so much…".',
          options: [
            { t: 'Because it is an old and famous rule.', ok: false,
              why: 'The equation is called famous, but age is not a reason to trust anything. The text gives a working reason.' },
            { t: 'Because if the two sides do not agree, they know at once that something is wrong.', ok: true,
              why: 'Right — "If the two sides do not agree, they know at once that something is wrong." It is trusted because it <i>detects</i>: a method that tells you when it has failed is worth more than one that is merely usually right.' },
            { t: 'Because it makes the work faster.', ok: false,
              why: 'It makes it twice as long to write — every transaction is recorded twice. The benefit is the check, not the speed.' },
            { t: 'Because Fadi loves this idea.', ok: false,
              why: 'He does, and the text says so — but his enthusiasm is a result of the reason, not the reason itself.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 11'], ref: '11-terms',
      bookRef: 'Unit 2 · Part 11 · Study terms', type: 'study',
      title: 'Study terms',
      instruction: 'Five terms that come back in the CMA and in a Master’s. Learn them as English first; the accounting comes later.',
      visual: { spot: 't-accounts', caption: 'Two equal sides — the picture of the first term in the list.' },
      html:
        '<dl style="line-height:1.9;margin:0">' +
        '<dt><b>double-entry</b></dt><dd>the rule that every transaction has two equal sides, a debit and a credit</dd>' +
        '<dt><b>accounting equation</b></dt><dd>assets equal liabilities plus equity; it always stays in balance</dd>' +
        '<dt><b>assets</b></dt><dd>the things an organisation owns, such as cash and equipment</dd>' +
        '<dt><b>liabilities</b></dt><dd>the amounts an organisation owes to other people</dd>' +
        '<dt><b>equity</b></dt><dd>the value inside the organisation, after we remove what it owes</dd>' +
        '</dl>' +
        '<p class="wc" style="margin-top:12px"><b>The bigger picture:</b> the accounting equation is the ' +
        'foundation of the whole balance sheet. You meet it again in a Master’s and in CMA Part 1. ' +
        'Every financial statement rests on this one simple idea.</p>',
      doneLabel: 'I know these five terms',
      playable: ['double-entry', 'accounting equation', 'assets', 'liabilities', 'equity']
    },
    {
      id: 'c3', covers: ['Part 11'], ref: '11B',
      bookRef: 'Unit 2 · Part 11 · B and C', type: 'writer',
      title: 'Apply it, then write it',
      instruction: '<b>B. Apply it.</b> Think of one simple transaction from your own life, for example buying a phone. In two sentences, tell your partner which two things changed, and explain why the entry needs two equal sides. Then decide together which side is the debit and which is the credit.<br><br><b>C. Micro-writing (optional).</b> Write 40–60 words explaining the rule of double-entry in your own words. Use the past simple to give one example (for instance, Karim’s fuel payment).',
      visual: [
        { spot: 'debit', caption: 'what you got — the debit' },
        { spot: 'credit', caption: 'what you paid with — the credit' }
      ],
      minWords: 40,
      aiCheck: {
        task: 'A short piece explaining double-entry bookkeeping in your own words, 40-60 words.',
        grammar: 'clear definitions in the present simple; the past simple if you give an example of a recorded transaction',
        reader: 'a colleague new to accounting',
        must: [
          'the idea that every entry has two sides',
          'that the debits and the credits are equal',
          'one simple example'
        ]
      },
      pastCheck: true,
      stems: ['When I bought…, two things changed.', '… went up, and … went down.',
              'The entry needed two sides because…',
              'The debit was… and the credit was…'],
      paras: [
        { label: 'Your transaction', purpose: 'what you bought, and when. Past simple.' },
        { label: 'The two things that changed', purpose: 'one went up and one went down, by the same amount.' },
        { label: 'Which side is which', purpose: 'name the debit and the credit, and say why.' }
      ],
      coach: {
        title: 'Check your answer',
        target: 'past simple, explaining a rule with an example',
        minWords: 40,
        taught: ['Every transaction changes two things at the same time, by the same amount.',
                 'The thing you GOT is debited; the thing you PAID WITH is credited.',
                 'Reading B is the worked example: fuel went up, cash went down.'],
        task: 'Explain double-entry in your own words, using one transaction from your own life as the example.',
        parts: ['Your transaction — what you bought, in the past simple.',
                'The two things that changed, and in which direction.',
                'Which side is the debit and which is the credit, and why.'],
        example: [
          'Last month I bought a phone for two hundred dollars. Two things changed at the same time: the equipment I owned went up by two hundred, and my cash went down by two hundred. The entry needed two sides because one event changed two things by the same amount. The debit was the phone, because that is what I received, and the credit was the cash, because that is what left me.'
        ],
        exampleNote: 'Notice the test in the last sentence: debit what you got, credit what you paid with. It works for Karim’s fuel, for Figure 2.1’s office supplies, and for your phone.',
        criteria: [
          { t: 'Names one real transaction, in the past simple.' },
          { t: 'Names both things that changed, and the direction of each.' },
          { t: 'Says which side is the debit and which is the credit.' },
          { t: 'Gives a reason, not only a label.' },
          { t: 'Between 40 and 60 words for the micro-writing.' }
        ]
      }
    }
  ]
});
