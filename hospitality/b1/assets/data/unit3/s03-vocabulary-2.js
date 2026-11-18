/* Unit 3 §3 — Vocabulary and Terminology (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s03', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Vocabulary and Terminology (2)', part: '1',
          section: '3', lesson: 'Vocabulary and Terminology (2)', title: 'Vocabulary and Terminology (2)' },
  objective: 'By the end of Part 1 you can name the room types and the words a '
  + 'booking uses, and read a reservation back to a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 3 · P1 D',
      type: 'dragmatch',
      title: 'Match the booking word (1–4) with its meaning (a–d)',
      instruction: 'Match the booking word (1–4) with its meaning (a–d).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. the last day of the stay' },
      { id: 'm-b', label: 'b. the first day of the stay' },
      { id: 'm-c', label: 'c. how many days the guest sleeps at the hotel' },
      { id: 'm-d', label: 'd. the people who will stay in the room' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'check-in', accept: 'm-b',
          why: '<b>check-in</b> &mdash; the first day of the stay' },
      { id: 't2', num: 2, label: 'check-out', accept: 'm-a',
          why: '<b>check-out</b> &mdash; the last day of the stay' },
      { id: 't3', num: 3, label: 'nights', accept: 'm-c',
          why: '<b>nights</b> &mdash; how many days the guest sleeps at the hotel' },
      { id: 't4', num: 4, label: 'guests', accept: 'm-d',
          why: '<b>guests</b> &mdash; the people who will stay in the room' }]
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 3 · P1 E',
      type: 'study',
      title: 'Classify',
      instruction: 'Classify. Which room is best for each guest? Write the room type.',
      doneLabel: 'I have read this'
    }
  ]
});
