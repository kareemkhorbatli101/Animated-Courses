/* Unit 4 §16 — Part 6 - Writing, the models.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s16', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 6 - Writing, the models', part: '6', section: '16',
          lesson: 'Part 6 - Writing, the models', title: 'Part 6 - Writing, the models' },
  objective: 'Work through Part 6 - Writing, the models of unit 4.',
  prev: 's15-reading-comprehension', prevLabel: 'Part 5 - Comprehension',
  next: 's17-writing-bios', nextLabel: 'Part 6 - Writing, bios',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6A',
      bookRef: 'Unit 4 · Part 6 · 6A',
      type: 'study',
      title: 'Model Writing – Formal Diplomatic Documents',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Document 1: Note Verbale — Formal Invitation' + '</p>'
        + '<p>' + 'Word list: a) invite b) presents c) assurances' + '</p>'
        + '<p>' + 'Document 2: Formal Invitation Letter' + '</p>'
        + '<p>' + 'Word list: a) follow b) Ministers c) invite' + '</p>'
        + '<p>' + 'Document 3: Congratulatory Note' + '</p>'
        + '<p>' + 'Word list: a) appointment b) congratulations c) strengthen' + '</p>'
        + '<p>' + 'The Ministry of Foreign Affairs of the Republic of Kazakhstan '
          + '____________________ its compliments to the Embassy of the Italian '
          + 'Republic and has the honor to ____________________ His Excellency the '
          + 'Ambassador of Italy to the signing ceremony of the Kazakhstan–Italy '
          + 'Cultural Heritage Cooperation Protocol, to be held at the Ministry of '
          + 'Foreign Affairs, Astana, on Thursday, 19 June 2025, at ten o\'clock in the '
          + 'morning. The Ministry avails itself of this opportunity to renew to the '
          + 'Embassy the ____________________ of its highest consideration.' + '</p>'
        + '<p>' + 'Your Excellency, On behalf of the Kazakh Ministry of Foreign Affairs, I '
          + 'have the honor to ____________________ Your Excellency to the signing '
          + 'ceremony of the Kazakhstan–Germany Bilateral Cooperation Framework, '
          + 'scheduled for Tuesday, 18 June 2025, at eleven o\'clock in the morning at '
          + 'the Ministry of Foreign Affairs in Astana. The ceremony will be attended '
          + 'by both Foreign ____________________. A formal reception will '
          + '____________________ at the Ministry following the ceremony. We look '
          + 'forward to your distinguished presence. Yours sincerely, Aigerim Dosanova, '
          + 'Protocol Department' + '</p>'
        + '<p>' + 'His Excellency the Minister of Foreign Affairs of the Republic of '
          + 'Kazakhstan presents his warmest ____________________ to His Excellency the '
          + 'newly appointed Minister of Foreign Affairs of Japan upon his '
          + '____________________ to this distinguished office, and expresses his '
          + 'sincere confidence that the ties of friendship and cooperation between '
          + 'Kazakhstan and Japan will continue to ____________________ under his '
          + 'distinguished leadership.' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Document 1: Note Verbale — Formal Invitation',
        'Word list: a) invite b) presents c) assurances',
        'Document 2: Formal Invitation Letter',
        'Word list: a) follow b) Ministers c) invite'],
      visual: { spot: 'email-anatomy', wide: true }
    },
    {
      id: 'c2',
      covers: ['Part 6'],
      ref: '6C',
      bookRef: 'Unit 4 · Part 6 · 6C',
      type: 'dragmatch',
      title: 'Analyze the Elements of a Note Verbale',
      instruction: 'Match each element (1–5) with its correct function (A–E).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) States the main purpose of the note in the third person — what the '
          + 'ministry is informing, requesting, inviting, or acknowledging' },
        { id: 'm-b', label: 'b) Records the place and date of issue, confirming when and where the note '
          + 'was officially sent' },
        { id: 'm-c', label: 'c) Closes the note with a formal expression of continued institutional '
          + 'goodwill and respect between the two parties' },
        { id: 'm-d', label: 'd) Provides specific details — dates, times, locations, names — that the '
          + 'receiving party needs to act on or respond to the note' },
        { id: 'm-e', label: 'e) Identifies the sending institution and the receiving institution, and '
          + 'establishes the institutional relationship between them' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Opening Compliments Formula', accept: 'm-a',
          why: '<b>Opening Compliments Formula</b> — States the main purpose of the note '
            + 'in the third person — what the ministry is informing, requesting, '
            + 'inviting, or acknowledging This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't2', num: 2, label: 'Substantive Paragraph', accept: 'm-b',
          why: '<b>Substantive Paragraph</b> — Records the place and date of issue, '
            + 'confirming when and where the note was officially sent This is the book\'s '
            + 'own pairing, from Column A against Column B.' },
        { id: 't3', num: 3, label: 'Supporting Details', accept: 'm-c',
          why: '<b>Supporting Details</b> — Closes the note with a formal expression of '
            + 'continued institutional goodwill and respect between the two parties This '
            + 'is the book\'s own pairing, from Column A against Column B.' },
        { id: 't4', num: 4, label: 'Closing Compliments Formula', accept: 'm-d',
          why: '<b>Closing Compliments Formula</b> — Provides specific details — dates, '
            + 'times, locations, names — that the receiving party needs to act on or '
            + 'respond to the note This is the book\'s own pairing, from Column A against '
            + 'Column B.' },
        { id: 't5', num: 5, label: 'Place and Date', accept: 'm-e',
          why: '<b>Place and Date</b> — Identifies the sending institution and the '
            + 'receiving institution, and establishes the institutional relationship '
            + 'between them This is the book\'s own pairing, from Column A against Column '
            + 'B.' }]
    }
  ]
});
