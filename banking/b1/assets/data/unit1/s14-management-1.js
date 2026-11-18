/* Unit 1 §14 — Management File — Welcoming a New Colleague.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s14', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 7 · Management File — Welcoming a New Colleague', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Welcoming a New Colleague', title: 'Part 7 · Management File — Welcoming a New Colleague' },
  objective: 'By the end of Part 7 you can welcome a new colleague as a manager '
  + 'does: use the phrases that put a new starter at ease, work through an '
  + 'induction checklist in order, and brief a new hire on their first '
  + 'week.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 1 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Manager’s phrase bank',
      instruction: 'Match the onboarding phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) offering a tour of the branch' },
      { id: 'm-b', label: 'b) greeting a new employee' },
      { id: 'm-c', label: 'c) giving a buddy for support' },
      { id: 'm-d', label: 'd) inviting questions' },
      { id: 'm-e', label: 'e) ending a meeting politely (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Welcome aboard.”', accept: 'm-b',
          why: '<b>“Welcome aboard.”</b> &mdash; greeting a new employee' },
      { id: 't2', num: 2, label: '“Let me show you around.”', accept: 'm-a',
          why: '<b>“Let me show you around.”</b> &mdash; offering a tour of the branch' },
      { id: 't3', num: 3, label: '“If you’re unsure, just ask.”', accept: 'm-d',
          why: '<b>“If you’re unsure, just ask.”</b> &mdash; inviting questions' },
      { id: 't4', num: 4, label: '“I’ll pair you with Grace.”', accept: 'm-c',
          why: '<b>“I’ll pair you with Grace.”</b> &mdash; giving a buddy for support' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 1 · 7B',
      type: 'study',
      title: 'Listening — Day one for a new colleague — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Marta:</b> Welcome aboard, Ana. Let me show '
      + 'you around the branch.</p><p><b>Ana:</b> Thank you. Where do I '
      + 'start?</p><p><b>Marta:</b> First, you shadow a teller today. Watch '
      + 'how she serves customers.</p><p><b>Ana:</b> And after '
      + 'that?</p><p><b>Marta:</b> Tomorrow you try the counter system with '
      + 'support. If you’re unsure, just ask. I’ll pair you with Grace for '
      + 'your first week.</p><p><b>Ana:</b> That sounds good. Thank you, Ms '
      + 'Nowak.</p></div>',
      playable: ['Welcome aboard, Ana. Let me show you around the branch.',
      'Thank you. Where do I start?',
      'First, you shadow a teller today. Watch how she serves customers.',
      'And after that?',
      'Tomorrow you try the counter system with support. If you’re unsure, '
        + 'just ask. I’ll pair you with Grace for your first week.',
      'That sounds good. Thank you, Ms Nowak.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 1 · 7B',
      type: 'discuss',
      title: 'Listening — Day one for a new colleague',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What does Ana do on her first day?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'When does she try the counter system?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Who supports Ana in her first week?',
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
      instruction: 'Complete the checklist for a new teller. Use the present simple.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. On day one, the new teller [[1]] an experienced colleague.'
        + '<br>'
        + '2. He or she [[2]] the branch safety rules.'
        + '<br>'
        + '3. The new teller [[3]] the team and the manager.'
        + '<br>'
        + '4. He or she [[4]] the staff handbook.'
        + '<br>'
        + '5. By the end of week one, the new teller [[5]] the counter system.'
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
        '1': '<b>shadows</b>.',
        '2': '<b>reads</b>.',
        '3': '<b>meets</b>.',
        '4': '<b>signs</b>.',
        '5': '<b>learns</b>.'
      }
    }
  ]
});
