/* Unit 5 §14 — Management File — Leading a Digital Change.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s14', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 7 · Management File — Leading a Digital Change', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Leading a Digital Change', title: 'Part 7 · Management File — Leading a Digital Change' },
  objective: 'By the end of Part 7 you can lead a digital change as a manager does: '
  + 'explain why it is happening, answer the objection you expect, and say '
  + 'what support staff and customers will get.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 5 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Change-management phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) recognising how the team feels' },
      { id: 'm-b', label: 'b) reassuring about the risk' },
      { id: 'm-c', label: 'c) saying what support is coming' },
      { id: 'm-d', label: 'd) inviting feedback' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“I know this is a big change.”', accept: 'm-a',
          why: '<b>“I know this is a big change.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Nothing will be lost.”', accept: 'm-a',
          why: '<b>“Nothing will be lost.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Training will be provided on Thursday.”', accept: 'm-a',
          why: '<b>“Training will be provided on Thursday.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Please tell me what is not working.”', accept: 'm-a',
          why: '<b>“Please tell me what is not working.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 5 · 7B',
      type: 'study',
      title: 'Listening — reassuring the team — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Marta:</b> I know this is a big change, and '
      + 'some of you are worried about the new screens.</p><p><b>Tomasz:</b> '
      + 'The old system was slow, but at least we knew it.</p><p><b>Marta:</b> '
      + 'That is fair. Nothing will be lost — every record has been copied, '
      + 'and the old screens can still be opened for a '
      + 'month.</p><p><b>Tomasz:</b> And if a customer asks something we can’t '
      + 'answer?</p><p><b>Marta:</b> Training will be provided on Thursday. '
      + 'Until then, write the question down and send it to me.</p></div>',
      playable: ['I know this is a big change, and some of you are worried about the '
        + 'new screens.',
      'The old system was slow, but at least we knew it.',
      'That is fair. Nothing will be lost — every record has been copied, '
        + 'and the old screens can still be opened for a month.',
      'And if a customer asks something we can’t answer?',
      'Training will be provided on Thursday. Until then, write the question '
        + 'down and send it to me.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 5 · 7B',
      type: 'discuss',
      title: 'Listening — reassuring the team',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What has been done with every record?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How long can the old screens still be opened?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should staff do with questions before Thursday?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 5 · 7C',
      type: 'discuss',
      title: 'Controlled practice — rewrite the customer notice',
      instruction: 'Rewrite each blunt line so it sounds calm and official. Use the passive.',
      questions: [{
            q: 'We changed your login screen.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We blocked your card.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We will send you a new card.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We are checking your payment.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We don’t keep your password.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We will tell you when it arrives.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
