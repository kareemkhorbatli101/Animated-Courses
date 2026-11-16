/* Unit 7 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s04', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 7.',
  video: 'u07v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 7 · Part 1', type: 'quizset',
      title: 'The Service Desk — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is an estimate?',
          options: [
            { t: 'A paper that shows how much the work will cost', ok: true,
              why: 'Right — A paper that shows how much the work will cost. Check it against '
        + 'the text or the card you met it on: this is stated, not inferred.' },
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is an '
        + 'estimate”.' },
            { t: 'A car part', ok: false,
              why: 'Not this one. A car part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'an estimate”.' },
            { t: 'A fluid', ok: false,
              why: 'Not this one. A fluid is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'an estimate”.' }
          ]
        },
        {
          q: '2. What is a deposit?',
          options: [
            { t: 'The final bill', ok: false,
              why: 'Not this one. The final bill is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a deposit”.' },
            { t: 'A courtesy car', ok: false,
              why: 'Not this one. A courtesy car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a deposit”.' },
            { t: 'Money paid first, before the work', ok: true,
              why: 'Right — Money paid first, before the work. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'An appointment', ok: false,
              why: 'Not this one. An appointment is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a deposit”.' }
          ]
        },
        {
          q: '3. What is a courtesy car?',
          options: [
            { t: 'A fast car', ok: false,
              why: 'Not this one. A fast car is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a courtesy car”.' },
            { t: 'A new car', ok: false,
              why: 'Not this one. A new car is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a courtesy car”.' },
            { t: 'An old car', ok: false,
              why: 'Not this one. An old car is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a courtesy car”.' },
            { t: 'A car the garage lends the customer', ok: true,
              why: 'Right — A car the garage lends the customer. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 7 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Please make an [[1]] for Tuesday.' + '<br>'
        + '2. Here is the [[2]] for the work.' + '<br>'
        + '3. You pay a small [[3]] before we start.' + '<br>'
        + '4. At handover, you pay the [[4]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['appointment'],
        '2': ['estimate'],
        '3': ['deposit'],
        '4': ['invoice']
      },
      bank: ['appointment', 'estimate', 'deposit', 'invoice'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>appointment</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>estimate</i>, <i>deposit</i> in the bank.',
        '2': '<b>estimate</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>appointment</i>, <i>deposit</i> in the bank.',
        '3': '<b>deposit</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>appointment</i>, <i>estimate</i> in the bank.',
        '4': '<b>invoice</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>appointment</i>, <i>estimate</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 7 · Part 1', type: 'writer',
      title: 'Write About a Booking (short)',
      instruction: 'Write two or three sentences about booking a service. Use three words from '
        + 'this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about booking a service. Use three words from '
        + 'this unit.',
        words: [],
        must: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.', 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.', 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about booking a service. Use three words from '
        + 'this unit.',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.', 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.', 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write two or three sentences about booking a service. Use three words from '
        + 'this unit.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' }]
      }
    }
  ]
});
