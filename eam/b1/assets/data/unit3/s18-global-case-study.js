/* Unit 3 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s18', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 3.',
  video: 'u03v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 3 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Workshop with No Accidents',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What problem did the centre '
        + 'have? — Too many small accidents.</span>',
      items: [
        { q: '1. What did the manager put on the wall?',
          accept: ['five clear rules'],
          keys: ['five', 'clear'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did she do every morning?',
          accept: ['she checked the workshop (and fixed problems with the team)', 'she checked the workshop'],
          keys: ['checked', 'workshop'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did she say good safety is?',
          accept: ['simple rules that everyone follows every day'],
          keys: ['simple', 'rules'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 3 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) when someone is hurt by mistake' },
        { id: 'm-b', label: 'b) an instruction that everyone must follow' },
        { id: 'm-c', label: 'c) a tool for turning bolts' },
        { id: 'm-d', label: 'd) safety gear you wear to protect yourself' },
        { id: 'm-e', label: 'e) to tell someone about a problem' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'rule', accept: 'm-b',
          why: '<b>rule</b> — an instruction that everyone must follow. Keep it apart from '
        + '<i>accident</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'accident', accept: 'm-a',
          why: '<b>accident</b> — when someone is hurt by mistake. Keep it apart from '
        + '<i>rule</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'PPE', art: 'ppe', accept: 'm-d',
          why: '<b>PPE</b> — safety gear you wear to protect yourself. Keep it apart from '
        + '<i>rule</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'report', accept: 'm-e',
          why: '<b>report</b> — to tell someone about a problem. Keep it apart from '
        + '<i>rule</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for turning bolts”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 3 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: This is similar to my workshop '
        + 'because…' }, { q: 'Finish this sentence in your own words: This is different because…' }, { q: 'Finish this sentence in your own words: The most important safety rule is… '
        + 'because…' }],
      ideas: ['This is similar to my workshop because…',
        'This is different because…',
        'The most important safety rule is… because…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Talk with a partner. Use the frames.',
        parts: ['Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.', 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.' },
                   { t: 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
