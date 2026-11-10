/* Unit 4 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Listening 3',
    page: 4,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Explaining Consumable Usage (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 4 · 3C',
      type: 'study',
      source: 'book',
      title: 'Passage 3: Explaining Consumable Usage (Financial Context)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> A report on why the consumption rate is high.</p><div class="script"><p>Accountant: "Our consumption of toner and printing supplies is surprisingly high. We use too much ink compared to last year. We have too many unnecessary copies being printed. However, we have very little loss from theft, which is good news. I think we should implement a few new printing controls to save some money. The cost of paper alone is a lot of money."</p></div>',
      playable: [
        {
          t: 'Our consumption of toner and printing supplies is surprisingly high. We use too much ink compared to last year. We have too many unnecessary copies being printed. However, we have very little loss from theft, which is good news. I think we should implement a few new printing controls to save some money. The cost of paper alone is a lot of money.',
          role: 'spk:Accountant',
          who: 'Accountant'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Explaining Consumable Usage (Financial Context)'
      }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 4 · 3C',
      type: 'cloze',
      title: 'Passage 3: Explaining Consumable Usage (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Ink Usage: We use [[1]] ink compared to last year.<br>2. Printing Problem: We have [[2]] unnecessary copies being printed.<br>3. Loss: We have [[3]] loss from theft.<br>4. Solution: We should implement [[4]] new printing controls.</div>',
      answers: { '1': ['too much'], '2': ['too many'], '3': ['very little'], '4': ['a few'] },
      bank: ['a few', 'too many', 'too much', 'very little'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>too much</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>too many</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>very little</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>a few</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Ink Usage: We use <u>too much</u> ink compared to last year.',
      visual: {
        spot: 'stock',
        caption: 'Listening · Passage 3: Explaining Consumable Usage (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
