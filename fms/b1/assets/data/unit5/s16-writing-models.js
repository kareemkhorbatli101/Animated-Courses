/* Unit 5 §16 — Part 6 - Writing, the models.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s16', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 6 - Writing, the models', part: '6', section: '16',
          lesson: 'Part 6 - Writing, the models', title: 'Part 6 - Writing, the models' },
  objective: 'By the end of Part 6 you can recognise the parts of a formal investment '
        + 'letter and what each one is for, write investment correspondence from a '
        + 'table of data, and write a formal investment invitation letter of 100 to '
        + '120 words.',
  prev: 's15-reading-comprehension', prevLabel: 'Part 5 - Comprehension',
  next: 's17-writing-bios', nextLabel: 'Part 6 - Writing, bios',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6A',
      bookRef: 'Unit 5 · Part 6 · 6A',
      type: 'study',
      title: 'Model Writing – Sample Investment Correspondence',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Formal Invitation Letter to a Business Delegation' + '</p>'
        + '<p>' + '1. Dear Mr. Richter, On behalf of the Ministry of Foreign Affairs, I have '
          + 'the ____________________ of inviting you and your delegation to '
          + 'participate in the National Development and Investment Forum, to be held '
          + 'in Addis Ababa on 14–15 October 2025. The Forum will bring together '
          + 'international investors, development partners, and government officials to '
          + '____________________ investment opportunities across the country\'s '
          + 'priority development sectors. We believe that if your delegation '
          + '____________________ the Forum, you will find the conversations highly '
          + 'productive and the investment landscape more advanced than you may expect. '
          + 'We look forward to welcoming you to Addis Ababa. Yours sincerely, Dawit '
          + 'Bekele' + '</p>'
        + '<p>' + 'Word list: a) honour b) explore c) attends' + '</p>'
        + '<p>' + 'Follow-Up Email After an Investment Meeting' + '</p>'
        + '<p>' + '2. Dear Ms. Al-Sayed, Thank you for your visit to the Ministry yesterday '
          + 'and for the constructive ____________________ we had regarding '
          + 'agricultural investment opportunities in our country. As agreed, I am '
          + 'attaching the full legal framework ____________________ for the Awash '
          + 'Valley joint venture zone. If you have any questions after reviewing it, '
          + 'please do not ____________________ to contact me directly. I look forward '
          + 'to arranging your meeting with the Investment Promotion Agency at a time '
          + 'that is convenient for you. Best regards, Dawit Bekele' + '</p>'
        + '<p>' + 'Word list: a) discussion b) document c) hesitate' + '</p>'
        + '<p>' + 'Briefing Note Introduction – Priority Investment Sectors' + '</p>'
        + '<p>' + 'Word list: a) presents b) contains c) detailed' + '</p>'
        + '<p>' + 'This briefing note ____________________ an overview of the country\'s '
          + 'three highest-priority investment sectors for the 2025–2026 period: '
          + 'infrastructure, energy, and agriculture. Each sector ____________________ '
          + 'significant opportunities for both commercial investors and development '
          + 'finance institutions. If you require more ____________________ information '
          + 'on any specific sector, the Investment Promotion Agency can provide a '
          + 'detailed sector profile on request.' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Formal Invitation Letter to a Business Delegation',
        '1. Dear Mr. Richter, On behalf of the Ministry of Foreign Affairs, I have '
          + 'the ____________________ of inviting you and your delegation to '
          + 'participate in the National Development and Investment Forum, to be held '
          + 'in Addis Ababa on 14–15 October 2025. The Forum will bring together '
          + 'international investors, development partners, and government officials to '
          + '____________________ investment opportunities across the country\'s '
          + 'priority development sectors. We believe that if your delegation '
          + '____________________ the Forum, you will find the conversations highly '
          + 'productive and the investment landscape more advanced than you may expect. '
          + 'We look forward to welcoming you to Addis Ababa. Yours sincerely, Dawit '
          + 'Bekele',
        'Word list: a) honour b) explore c) attends',
        'Follow-Up Email After an Investment Meeting'],
      visual: { spot: 'email-anatomy', wide: true }
    },
    {
      id: 'c2',
      covers: ['Part 6'],
      ref: '6C',
      bookRef: 'Unit 5 · Part 6 · 6C',
      type: 'dragmatch',
      title: 'Analyse the Parts of a Formal Investment Letter',
      instruction: 'Match each part (1–5) with its correct function (A–E).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Provides the relevant details: dates, topics, attached documents, '
          + 'agreed actions' },
        { id: 'm-b', label: 'b) Makes the topic immediately clear and professional' },
        { id: 'm-c', label: 'c) Expresses continued engagement and provides contact details' },
        { id: 'm-d', label: 'd) Clearly states why you are writing in the first sentence' },
        { id: 'm-e', label: 'e) States what will happen if the reader acts — gives a clear, conditional '
          + 'pathway forward' },
        { id: 'm-f', label: 'f) Opens respectfully; always use the recipient\'s full title and family '
          + 'name' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Subject Line', accept: 'm-a',
          why: '<b>Subject Line</b> — Provides the relevant details: dates, topics, '
            + 'attached documents, agreed actions This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't2', num: 2, label: 'Formal Salutation', accept: 'm-b',
          why: '<b>Formal Salutation</b> — Makes the topic immediately clear and '
            + 'professional This is the book\'s own pairing, from Column A against Column '
            + 'B.' },
        { id: 't3', num: 3, label: 'Purpose Statement (Paragraph 1)', accept: 'm-c',
          why: '<b>Purpose Statement (Paragraph 1)</b> — Expresses continued engagement '
            + 'and provides contact details This is the book\'s own pairing, from Column '
            + 'A against Column B.' },
        { id: 't4', num: 4, label: 'Content Paragraph (Paragraph 2)', accept: 'm-d',
          why: '<b>Content Paragraph (Paragraph 2)</b> — Clearly states why you are '
            + 'writing in the first sentence This is the book\'s own pairing, from Column '
            + 'A against Column B.' },
        { id: 't5', num: 5, label: 'Conditional Next Step (Paragraph 3)', accept: 'm-e',
          why: '<b>Conditional Next Step (Paragraph 3)</b> — States what will happen if '
            + 'the reader acts — gives a clear, conditional pathway forward This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't6', num: 6, label: 'Formal Close', accept: 'm-f',
          why: '<b>Formal Close</b> — Opens respectfully; always use the recipient\'s full '
            + 'title and family name This is the book\'s own pairing, from Column A '
            + 'against Column B.' }]
    }
  ]
});
