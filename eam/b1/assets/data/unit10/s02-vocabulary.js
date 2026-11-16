/* Unit 10 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s02', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 10.',
  video: 'u10v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 10 · Part 1', type: 'dragmatch',
      title: 'Customer and Manufacturer Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Training → learning new skills for the j', a: 'Training → learning new skills for the job.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) the good feeling when a customer is happy' },
        { id: 'm-b', label: 'b) a note from the carmaker with news or advice' },
        { id: 'm-c', label: 'c) a promise to repair for free for a time' },
        { id: 'm-d', label: 'd) how a garage looks after its customers' },
        { id: 'm-e', label: 'e) what a customer says about the service' },
        { id: 'm-f', label: 'f) to tell someone something is good' },
        { id: 'm-g', label: 'g) a message that a service is due' },
        { id: 'm-h', label: 'h) a special plan by the carmaker' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Customer relations', art: 'customer relations', accept: 'm-d',
          why: '<b>Customer relations</b> — how a garage looks after its customers. Keep '
        + 'it apart from <i>Satisfaction</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Satisfaction', art: 'satisfaction', accept: 'm-a',
          why: '<b>Satisfaction</b> — the good feeling when a customer is happy. Keep it '
        + 'apart from <i>Customer relations</i>, which is a different part of the '
        + 'same system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Recommend', art: 'recommend', accept: 'm-f',
          why: '<b>Recommend</b> — to tell someone something is good. Keep it apart from '
        + '<i>Customer relations</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Service reminder', art: 'service reminder', accept: 'm-g',
          why: '<b>Service reminder</b> — a message that a service is due. Keep it apart '
        + 'from <i>Customer relations</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Manufacturer bulletin', art: 'manufacturer bulletin', accept: 'm-b',
          why: '<b>Manufacturer bulletin</b> — a note from the carmaker with news or '
        + 'advice. Keep it apart from <i>Customer relations</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't6', num: 6, label: 'Campaign', art: 'campaign', accept: 'm-h',
          why: '<b>Campaign</b> — a special plan by the carmaker. Keep it apart from '
        + '<i>Customer relations</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Feedback', art: 'feedback', accept: 'm-e',
          why: '<b>Feedback</b> — what a customer says about the service. Keep it apart '
        + 'from <i>Customer relations</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a promise to repair for free for a time”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>manufacturer bulletin</b> — a note from the carmaker with '
        + 'news or advice</div><div><b>campaign</b> — a special plan by the '
        + 'carmaker</div><div><b>feedback</b> — what a customer says about the '
        + 'service</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 10 · Part 1', type: 'study',
      title: 'Who Tells Us What Table',
      instruction: 'The book prints a table here and asks you to complete it. Read the worked '
        + 'row, then do the two cards on this screen — they practise the same words.',
      html: '<div style="font-size:16px;line-height:1.9">'
        + '<span class="eg-model"><b>Worked example</b>0. The customer — tells us '
        + 'their feedback.</span>'
        + '<div class="note warm" style="margin-top:12px">'
        + '<h4>What is missing, and why you are seeing this</h4>'
        + 'The book\'s table has more rows than the one worked for you. They are not '
        + 'in this course\'s extraction of the book, and a page that invented them '
        + 'would be teaching something the book does not say. The coverage manifest '
        + 'for this unit records the gap, and the rows will be added when the table '
        + 'is re-extracted.'
        + '</div></div>',
      doneLabel: 'I have read the worked row',
      playable: ['The customer — tells us their feedback.']
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 10 · Part 1', type: 'dragmatch',
      title: 'Reporting Verbs',
      instruction: 'Match each verb with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) to give information to a person' },
        { id: 'm-b', label: 'b) to repair a part' },
        { id: 'm-c', label: 'c) to speak words' },
        { id: 'm-d', label: 'd) to say a question' },
        { id: 'm-e', label: 'e) to say something is good to use' },
        { id: 'm-f', label: 'f) to give the news of what happened' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Say', accept: 'm-c',
          why: '<b>Say</b> — to speak words. Keep it apart from <i>Tell</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't2', num: 2, label: 'Tell', accept: 'm-a',
          why: '<b>Tell</b> — to give information to a person. Keep it apart from '
        + '<i>Say</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Ask', accept: 'm-d',
          why: '<b>Ask</b> — to say a question. Keep it apart from <i>Say</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't4', num: 4, label: 'Recommend', art: 'recommend', accept: 'm-e',
          why: '<b>Recommend</b> — to say something is good to use. Keep it apart from '
        + '<i>Say</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Report', art: 'report', accept: 'm-f',
          why: '<b>Report</b> — to give the news of what happened. Keep it apart from '
        + '<i>Say</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “to repair a part”, which belongs to nothing on '
        + 'this card.'
    }
  ]
});
