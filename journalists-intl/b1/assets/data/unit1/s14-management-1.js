/* Unit 1 §14 — Management File — Briefing a New Reporter.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s14', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 7 · Management File — Briefing a New Reporter', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Briefing a New Reporter', title: 'Part 7 · Management File — Briefing a New Reporter' },
  objective: 'By the end of Part 7 you can brief a new reporter as an editor does: '
  + 'use the phrases that put a new starter at ease, work through an '
  + 'induction checklist in order, and set out a first week.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 1 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Editor’s phrase bank',
      instruction: 'Match the briefing phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) offering a tour of the newsroom' },
      { id: 'm-b', label: 'b) greeting a new reporter' },
      { id: 'm-c', label: 'c) giving a colleague for support' },
      { id: 'm-d', label: 'd) inviting questions' },
      { id: 'm-e', label: 'e) telling a reporter their story will not run (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Welcome to the bureau.”', accept: 'm-b',
          why: '<b>“Welcome to the bureau.”</b> &mdash; greeting a new reporter' },
      { id: 't2', num: 2, label: '“Let me show you the newsroom.”', accept: 'm-a',
          why: '<b>“Let me show you the newsroom.”</b> &mdash; offering a tour of the '
              + 'newsroom' },
      { id: 't3', num: 3, label: '“If you are not sure of a name, ask.”', accept: 'm-d',
          why: '<b>“If you are not sure of a name, ask.”</b> &mdash; inviting '
              + 'questions. Note what it invites questions about: in this trade the '
              + 'spelling of a name is not a small thing.' },
      { id: 't4', num: 4, label: '“I’ll pair you with Tomás.”', accept: 'm-c',
          why: '<b>“I’ll pair you with Tomás.”</b> &mdash; giving a colleague for '
              + 'support' }],
      after: 'The extra purpose — <b>e)</b> telling a reporter their story will not run '
        + '— is the conversation Nadia named in Part 3 as the one she likes least. '
        + 'None of these four welcoming phrases will carry it, which is the point: '
        + 'it needs its own language, and Unit 4 teaches it.'
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 1 · 7B',
      type: 'study',
      title: 'Listening — Day one for a new reporter — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book’s own.',
      html: '<div class="script"><p><b>Nadia:</b> Welcome to the bureau, Aisha. '
      + 'Let me show you the newsroom.</p><p><b>Aisha:</b> Thank you. Where do '
      + 'I start?</p><p><b>Nadia:</b> Today you shadow Yuki. Watch how she '
      + 'checks a fact before she files.</p><p><b>Aisha:</b> And after '
      + 'that?</p><p><b>Nadia:</b> Tomorrow you file a short piece with '
      + 'support. If you are not sure of a name, ask. I’ll pair you with '
      + 'Tomás for your first week.</p><p><b>Aisha:</b> That sounds good. '
      + 'Thank you, Ms Osman.</p></div>',
      playable: ['Welcome to the bureau, Aisha. Let me show you the newsroom.',
      'Thank you. Where do I start?',
      'Today you shadow Yuki. Watch how she checks a fact before she files.',
      'And after that?',
      'Tomorrow you file a short piece with support. If you are not sure of a '
        + 'name, ask. I’ll pair you with Tomás for your first week.',
      'That sounds good. Thank you, Ms Osman.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 1 · 7B',
      type: 'discuss',
      title: 'Listening — Day one for a new reporter',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What does Aisha do on her first day?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'When does she file her first piece?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Who supports Aisha in her first week?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 1 · 7C',
      type: 'cloze',
      title: 'Controlled practice — the induction checklist',
      instruction: 'Complete the checklist for a new reporter. Use the present simple.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. On day one, the new reporter [[1]] an experienced colleague.'
        + '<br>'
        + '2. He or she [[2]] the agency’s style guide.'
        + '<br>'
        + '3. The new reporter [[3]] the desk and the bureau chief.'
        + '<br>'
        + '4. He or she [[4]] the safety form.'
        + '<br>'
        + '5. By the end of week one, the new reporter [[5]] the filing system.'
        + '</div>',
      answers: {
        '1': ['shadows'],
        '2': ['reads'],
        '3': ['meets'],
        '4': ['signs'],
        '5': ['learns']
      },
      bank: ['learns',
      'meets',
      'reads',
      'shadows',
      'signs'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>shadows</b>. To shadow is to follow a colleague and watch them '
          + 'work. Every verb in this checklist takes the s, because the subject '
          + 'is <i>the new reporter</i> — he or she, not they.',
        '2': '<b>reads</b>. A style guide is the book of a newsroom’s own rules: '
          + 'how to write a date, when to use a first name, which words are '
          + 'banned.',
        '3': '<b>meets</b>. <i>The desk</i> here means the people on it, which is '
          + 'why the verb is <i>meets</i> and not <i>finds</i>.',
        '4': '<b>signs</b>. The safety form, on day one and before any assignment. '
          + 'Unit 7 is built on it.',
        '5': '<b>learns</b>. The checklist is written in the present simple '
          + 'throughout, because it describes what happens every time a reporter '
          + 'joins — not what is happening to one reporter this week.'
      }
    }
  ]
});
