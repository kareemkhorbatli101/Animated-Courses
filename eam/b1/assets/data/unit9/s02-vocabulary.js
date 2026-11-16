/* Unit 9 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s02', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 9.',
  video: 'u09v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 9 · Part 1', type: 'dragmatch',
      title: 'Diagnosis and Repair Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Fault → something wrong with the car.', a: 'Fault → something wrong with the car.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) to find out what is wrong' },
        { id: 'm-b', label: 'b) an old part that has been repaired to work like new' },
        { id: 'm-c', label: 'c) the final check before handover' },
        { id: 'm-d', label: 'd) a sign that something is wrong' },
        { id: 'm-e', label: 'e) when a car returns with the same fault' },
        { id: 'm-f', label: 'f) a light on the dashboard that shows a problem' },
        { id: 'm-g', label: 'g) to fix a fault' },
        { id: 'm-h', label: 'h) to put in a new part' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Symptom', art: 'symptom', accept: 'm-d',
          why: '<b>Symptom</b> — a sign that something is wrong. Keep it apart from '
        + '<i>Diagnose</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Diagnose', accept: 'm-a',
          why: '<b>Diagnose</b> — to find out what is wrong. Keep it apart from '
        + '<i>Symptom</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Warning light', art: 'warning light', accept: 'm-f',
          why: '<b>Warning light</b> — a light on the dashboard that shows a problem. Keep '
        + 'it apart from <i>Symptom</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Repair', art: 'repair', accept: 'm-g',
          why: '<b>Repair</b> — to fix a fault. Keep it apart from <i>Symptom</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Replace', art: 'replace', accept: 'm-h',
          why: '<b>Replace</b> — to put in a new part. Keep it apart from <i>Symptom</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Comeback', art: 'comeback', accept: 'm-e',
          why: '<b>Comeback</b> — when a car returns with the same fault. Keep it apart '
        + 'from <i>Symptom</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Reconditioned part', art: 'reconditioned part', accept: 'm-b',
          why: '<b>Reconditioned part</b> — an old part that has been repaired to work '
        + 'like new. Keep it apart from <i>Symptom</i>, which is a different part of '
        + 'the same system. The meaning left in the pool belongs to nothing on this '
        + 'card.' }
      ],
      after: 'The meaning left over is “the final check before handover”, which belongs '
        + 'to nothing on this card.<div class="note" style="margin-top:12px"><h4>The '
        + 'words the book glosses here</h4><div><b>symptom</b> — a sign that '
        + 'something is wrong</div><div><b>comeback</b> — when a car returns with the '
        + 'same fault</div><div><b>reconditioned part</b> — an old part repaired to '
        + 'work like new</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 9 · Part 1', type: 'study',
      title: 'Fault-Finding Table',
      instruction: 'The book prints a table here and asks you to complete it. Read the worked '
        + 'row, then do the two cards on this screen — they practise the same words.',
      html: '<div style="font-size:16px;line-height:1.9">'
        + '<span class="eg-model"><b>Worked example</b>0. Look at the symptoms — the '
        + 'mechanic notices a noise or a light.</span>'
        + '<div class="note warm" style="margin-top:12px">'
        + '<h4>What is missing, and why you are seeing this</h4>'
        + 'The book\'s table has more rows than the one worked for you. They are not '
        + 'in this course\'s extraction of the book, and a page that invented them '
        + 'would be teaching something the book does not say. The coverage manifest '
        + 'for this unit records the gap, and the rows will be added when the table '
        + 'is re-extracted.'
        + '</div></div>',
      doneLabel: 'I have read the worked row',
      playable: ['Look at the symptoms — the mechanic notices a noise or a light.']
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 9 · Part 1', type: 'dragmatch',
      title: 'Fault-Finding Actions',
      instruction: 'Match each action with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) to say what the problem is' },
        { id: 'm-b', label: 'b) to book the car in' },
        { id: 'm-c', label: 'c) to look for the cause of a problem' },
        { id: 'm-d', label: 'd) to fix the part that is there' },
        { id: 'm-e', label: 'e) to put in a new part' },
        { id: 'm-f', label: 'f) to drive the car to check the fault is gone' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Fault-find', art: 'fault-find', accept: 'm-c',
          why: '<b>Fault-find</b> — to look for the cause of a problem. Keep it apart from '
        + '<i>Diagnose</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Diagnose', accept: 'm-a',
          why: '<b>Diagnose</b> — to say what the problem is. Keep it apart from '
        + '<i>Fault-find</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Repair', art: 'repair', accept: 'm-d',
          why: '<b>Repair</b> — to fix the part that is there. Keep it apart from '
        + '<i>Fault-find</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Replace', art: 'replace', accept: 'm-e',
          why: '<b>Replace</b> — to put in a new part. Keep it apart from '
        + '<i>Fault-find</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Road-test again', accept: 'm-f',
          why: '<b>Road-test again</b> — to drive the car to check the fault is gone. Keep '
        + 'it apart from <i>Fault-find</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “to book the car in”, which belongs to nothing on '
        + 'this card.'
    }
  ]
});
