/* Unit 10 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the parts of a bill and the words '
  + 'for payment and extras.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 10 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-10.1.png', caption: 'A guest\'s bill (invoice).' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · P1 A',
      type: 'dragmatch',
      title: 'Match each word (1–6) with its meaning (a–g)',
      instruction: 'Match each word (1–6) with its meaning (a–g). There is one you do not '
  + 'need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. money given back to the guest' },
      { id: 'm-b', label: 'b. to pay and leave the hotel' },
      { id: 'm-c', label: 'c. the final amount, all charges added together' },
      { id: 'm-d', label: 'd. small drinks and snacks in the room' },
      { id: 'm-e', label: 'e. a paper that proves you have paid' },
      { id: 'm-f', label: 'f. the paper that lists everything the guest must pay' },
      { id: 'm-g', label: 'g. the person who cleans the room' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'total', accept: 'm-c',
          why: '<b>total</b> &mdash; the final amount, all charges added together' },
      { id: 't2', num: 2, label: 'refund', accept: 'm-a',
          why: '<b>refund</b> &mdash; money given back to the guest' },
      { id: 't3', num: 3, label: 'receipt', accept: 'm-e',
          why: '<b>receipt</b> &mdash; a paper that proves you have paid' },
      { id: 't4', num: 4, label: 'check out', accept: 'm-b',
          why: '<b>check out</b> &mdash; to pay and leave the hotel' },
      { id: 't5', num: 5, label: 'minibar', accept: 'm-d',
          why: '<b>minibar</b> &mdash; small drinks and snacks in the room' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 10 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. At the end of the stay, the receptionist prepares the [[1]].'
        + '<br>'
        + '2. Each item on the bill is a [[2]].'
        + '<br>'
        + '3. All the charges added together make the [[3]].'
        + '<br>'
        + '4. The guest gives [[4]] by cash or card.'
        + '<br>'
        + '5. After paying, the guest gets a [[5]] as proof.'
        + '<br>'
        + '6. [[6]] time at this hotel is twelve o\'clock noon.'
        + '</div>',
      answers: {
        '1': ['bill'],
        '2': ['charge'],
        '3': ['total'],
        '4': ['payment'],
        '5': ['receipt'],
        '6': ['Checkout']
      },
      bank: ['charge',
      'checkout',
      'payment',
      'receipt',
      'total'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>bill</b>',
        '2': '<b>charge</b>',
        '3': '<b>total</b>',
        '4': '<b>payment</b>',
        '5': '<b>receipt</b>',
        '6': '<b>Checkout</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 10 · P1 C',
      visual: { img: '../assets/figures/fig-10.2.png', caption: 'Different ways a guest can pay.' },
      type: 'cloze',
      title: 'Look at Figure 10.2',
      instruction: 'Look at Figure 10.2. Which payment method is it?',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest pays with notes and coins. → [[1]]'
        + '<br>'
        + '2. The guest pays with a small plastic card. → [[2]]'
        + '<br>'
        + '3. The guest pays using an app on their phone. → [[3]]'
        + '<br>'
        + '4. A company sends the money straight to the hotel\'s bank. → [[4]]'
        + '</div>',
      answers: {
        '1': ['cash'],
        '2': ['card'],
        '3': ['mobile pay'],
        '4': ['bank transfer']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>cash</b>',
        '2': '<b>card</b>',
        '3': '<b>mobile pay</b>',
        '4': '<b>bank transfer</b>'
      }
    }
  ]
});
