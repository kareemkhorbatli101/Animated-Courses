/* Unit 4 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s06', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a customer asks about a '
  + 'product, follow three product conversations, and identify which '
  + 'product was recommended and on what grounds.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 4 · 3A',
      visual: { spot: 'bank-card' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think they will ask about the rate, the fees, and how soon they '
      + 'can take the money out.”</p>',
      instruction: 'You will hear customers choosing products. What questions do '
  + 'customers ask before they choose?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 4 · 3B',
      type: 'study',
      title: 'Choosing an account — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I’d like to open a savings '
      + 'account, but I don’t know which one.</p><p><b>Diego:</b> Of course. '
      + 'How soon might you need the money?</p><p><b>Customer:</b> Maybe in a '
      + 'year. Maybe not.</p><p><b>Diego:</b> Then the Step Saver is probably '
      + 'better than the Fixed 12. It pays a little less, but you can take '
      + 'money out twice a year.</p><p><b>Customer:</b> That sounds safer for '
      + 'me.</p></div>',
      playable: ['I’d like to open a savings account, but I don’t know which one.',
      'Of course. How soon might you need the money?',
      'Maybe in a year. Maybe not.',
      'Then the Step Saver is probably better than the Fixed 12. It pays a '
        + 'little less, but you can take money out twice a year.',
      'That sounds safer for me.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 4 · 3B',
      type: 'quizset',
      title: 'Choosing an account',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: How '
  + 'soon might you need the money? · It pays a little less, but… · That '
  + 'sounds safer for me.',
      display: 'cards',
      items: [{
          q: 'The Fixed 12 pays less than the Step Saver.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer may need the money within a year.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer already has an account at this bank.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c4',
      ref: '3C',
      bookRef: 'Unit 4 · 3C',
      type: 'study',
      title: 'A product recommendation — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> My shop is growing. I need to '
      + 'buy a van, about eight thousand.</p><p><b>Priya:</b> Then a business '
      + 'loan is better than an overdraft for that amount. An overdraft is '
      + 'more expensive over a long period.</p><p><b>Customer:</b> How long '
      + 'would I repay it?</p><p><b>Priya:</b> Up to five years. The longer '
      + 'the term, the smaller the monthly instalment — but the more interest '
      + 'you pay in total.</p><p><b>Customer:</b> I see. I’d like the shortest '
      + 'term I can manage.</p></div>',
      playable: ['My shop is growing. I need to buy a van, about eight thousand.',
      'Then a business loan is better than an overdraft for that amount. An '
        + 'overdraft is more expensive over a long period.',
      'How long would I repay it?',
      'Up to five years. The longer the term, the smaller the monthly '
        + 'instalment — but the more interest you pay in total.',
      'I see. I’d like the shortest term I can manage.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 4 · 3C',
      type: 'quizset',
      title: 'A product recommendation',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'An overdraft is cheaper than a loan over a long period.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer wants to buy a vehicle for the business.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'A longer term means a smaller monthly payment.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer prefers a long term.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
