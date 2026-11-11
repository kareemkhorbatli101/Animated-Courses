/* Unit 5 · s11-listening-3 — Listening 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s11-listening-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Listening 3',
    page: 5,
    section: '11',
    lesson: 'Part 3 · Listening',
    title: 'Listening 3'
  },
  objective: 'Passage 3: Cash Flow Forecast (Financial Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 5 · 3C',
      type: 'study',
      source: 'book',
      title: 'Passage 3: Cash Flow Forecast (Financial Context)',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> The Financial Controller is reviewing the monthly forecast.</p><div class="script"><p>Controller: "The forecast shows we will have a net cash inflow of EUR 50,000 in June. Our Accounts Receivable are going to improve significantly. However, I think Accounts Payable will increase in July, due to the purchase of new equipment for Singapore. We are going to prepare a detailed report on our credit exposure to mitigate risk. We are holding a risk meeting next Thursday."</p></div>',
      playable: [
        {
          t: 'The forecast shows we will have a net cash inflow of EUR 50,000 in June. Our Accounts Receivable are going to improve significantly. However, I think Accounts Payable will increase in July, due to the purchase of new equipment for Singapore. We are going to prepare a detailed report on our credit exposure to mitigate risk. We are holding a risk meeting next Thursday.',
          role: 'spk:Controller',
          who: 'Controller'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'The last listening, and the gaps below are the grammar of this unit. Play it once for the sense, then again for the form you are filling in.',
      visual: { spot: 'forecast', caption: 'Listening · Passage 3: Cash Flow Forecast (Financial Context)' }
    },
    {
      id: 'c2',
      covers: ['3C'],
      ref: '3C',
      bookRef: 'Unit 5 · 3C',
      type: 'cloze',
      title: 'Passage 3: Cash Flow Forecast (Financial Context)',
      instruction: 'Complete each line.',
      text: '<div style="font-size:16px;line-height:2.4">1. Net Cash Flow (June): We will have a net cash inflow of [[1]] in June.<br>2. AR Trend: Accounts Receivable [[2]] significantly.<br>3. AP Trend (July): Accounts Payable [[3]] due to new equipment.<br>4. Risk Management Plan: We [[4]] a detailed report on our credit exposure.</div>',
      answers: {
        '1': ['EUR 50,000'],
        '2': ['are going to improve'],
        '3': ['will increase'],
        '4': ['are going to prepare']
      },
      bank: ['EUR 50,000', 'are going to improve', 'are going to prepare', 'will increase'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>EUR 50,000</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>are going to improve</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>will increase</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>are going to prepare</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> Net Cash Flow (June): We will have a net cash inflow of <u>EUR 50,000</u> in June.',
      visual: {
        spot: 'reporting',
        caption: 'Listening · Passage 3: Cash Flow Forecast (Financial Context)',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's10-listening-2',
  prevLabel: 'Listening 2',
  next: 's12-speaking-phrases',
  nextLabel: 'Speaking · phrases'
});
