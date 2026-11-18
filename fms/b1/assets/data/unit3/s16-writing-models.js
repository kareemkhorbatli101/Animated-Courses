/* Unit 3 §16 — Part 6 - Writing, the models.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s16', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 6 - Writing, the models', part: '6', section: '16',
          lesson: 'Part 6 - Writing, the models', title: 'Part 6 - Writing, the models' },
  objective: 'By the end of Part 6 you can recognise the five elements of a press '
        + 'release and what each one is for, write an official summary, and write a '
        + 'ministry press statement of 80 to 100 words.',
  prev: 's15-reading-comprehension', prevLabel: 'Part 5 - Comprehension',
  next: 's17-writing-bios', nextLabel: 'Part 6 - Writing, bios',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6A',
      bookRef: 'Unit 3 · Part 6 · 6A',
      type: 'study',
      title: 'Model Writing – Official Documents',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Document 1: Press Release — MoU Signing' + '</p>'
        + '<p>' + 'Word list: a) signed b) established c) concluded' + '</p>'
        + '<p>' + 'Document 2: Returning-Citizens Program Statement' + '</p>'
        + '<p>' + 'Word list: a) administered b) given c) established' + '</p>'
        + '<p>' + 'Document 3: Investment Conference Summary' + '</p>'
        + '<p>' + 'Word list: a) pledges b) held c) established' + '</p>'
        + '<p>' + 'The Ministry of Foreign Affairs announces that a Memorandum of '
          + 'Understanding on Bilateral Cooperation has been ____________________ today '
          + 'between our country and the Federal Republic of Germany. The MoU was '
          + '____________________ by both foreign ministers at a ceremony held at the '
          + 'Ministry of Foreign Affairs in Bogotá. A joint technical committee will be '
          + '____________________ to oversee implementation, with the first session '
          + 'scheduled within 60 days.' + '</p>'
        + '<p>' + 'The Ministry of Foreign Affairs confirms that the National '
          + 'Returning-Citizens Program has been formally ____________________ and is '
          + 'now accepting applications from nationals residing abroad. The program is '
          + 'being ____________________ in partnership with the International '
          + 'Organization for Migration. Priority will be ____________________ to '
          + 'applications from qualified professionals in medicine, engineering, '
          + 'education, and public administration. Applications may be submitted '
          + 'through embassies and consulates.' + '</p>'
        + '<p>' + 'The International Investment Conference, ____________________ in Madrid, '
          + 'brought together representatives from forty-three countries and twelve '
          + 'international organizations. Funding ____________________ totaling four '
          + 'billion dollars were made for infrastructure, education, and social '
          + 'programs. A multilateral coordination committee was ____________________ '
          + 'to oversee the conversion of pledges into implemented projects.' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Document 1: Press Release — MoU Signing',
        'Word list: a) signed b) established c) concluded',
        'Document 2: Returning-Citizens Program Statement',
        'Word list: a) administered b) given c) established'],
      visual: { spot: 'email-anatomy', wide: true }
    },
    {
      id: 'c2',
      covers: ['Part 6'],
      ref: '6C',
      bookRef: 'Unit 3 · Part 6 · 6C',
      type: 'dragmatch',
      title: 'Analyze the Elements of a Press Release',
      instruction: 'Match each element (1–5) with its correct function (A–E).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) States the main news in one sentence — the most important fact must '
          + 'appear here, not buried later' },
        { id: 'm-b', label: 'b) Provides the official interpretation and significance of the news — '
          + 'what it means, why it matters' },
        { id: 'm-c', label: 'c) Introduces the issuing institution and the date, establishing the '
          + 'official source and establishing when the information was released' },
        { id: 'm-d', label: 'd) Provides a name and contact method for journalists with follow-up '
          + 'questions' },
        { id: 'm-e', label: 'e) Gives specific technical details — names of signatories, scope, '
          + 'timeline, next steps — that reporters and officials need for accuracy' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Dateline and Source', accept: 'm-a',
          why: '<b>Dateline and Source</b> — States the main news in one sentence — the '
            + 'most important fact must appear here, not buried later This is the book\'s '
            + 'own pairing, from Column A against Column B.' },
        { id: 't2', num: 2, label: 'Opening Announcement', accept: 'm-b',
          why: '<b>Opening Announcement</b> — Provides the official interpretation and '
            + 'significance of the news — what it means, why it matters This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't3', num: 3, label: 'Context and Significance', accept: 'm-c',
          why: '<b>Context and Significance</b> — Introduces the issuing institution and '
            + 'the date, establishing the official source and establishing when the '
            + 'information was released This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't4', num: 4, label: 'Factual Details', accept: 'm-d',
          why: '<b>Factual Details</b> — Provides a name and contact method for '
            + 'journalists with follow-up questions This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't5', num: 5, label: 'Press Contact', accept: 'm-e',
          why: '<b>Press Contact</b> — Gives specific technical details — names of '
            + 'signatories, scope, timeline, next steps — that reporters and officials '
            + 'need for accuracy This is the book\'s own pairing, from Column A against '
            + 'Column B.' }]
    }
  ]
});
