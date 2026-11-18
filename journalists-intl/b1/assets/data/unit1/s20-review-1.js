/* Unit 1 §20 — Review & Can-Do.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s20', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 10 · Review & Can-Do', part: '10', section: '20',
          track: 'review', label: 'Homework / self-study', lesson: 'Part 10 · Review & Can-Do', title: 'Part 10 · Review & Can-Do' },
  objective: 'By the end of Part 10 you can use this unit’s roles, craft words and '
  + 'tenses again without prompting, and tick honestly what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: '10A',
      bookRef: 'Unit 1 · 10A',
      visual: { spot: 'newsroom-plan' },
      type: 'cloze',
      title: 'Spiral review',
      instruction: 'Complete the sentences. Use the correct tense (present simple or '
  + 'continuous) or the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A [[1]] checks and shapes copy before it goes out. (role)'
        + '<br>'
        + '2. The bureau chief usually [[2]] (arrive) early.'
        + '<br>'
        + '3. Right now, I [[3]] (learn) the filing system.'
        + '<br>'
        + '4. A correspondent [[4]] (report) from one country. (routine)'
        + '<br>'
        + '5. This week, we [[5]] (train) two new stringers.'
        + '<br>'
        + '6. The [[6]] at the top of a story names the city and the date. (word)'
        + '<br>'
        + '7. You can [[7]] a story to the desk from anywhere. (verb)'
        + '<br>'
        + '8. At the moment, the agency [[8]] (open) a bureau in Jakarta.'
        + '</div>',
      answers: {
        '1': ['desk editor'],
        '2': ['arrives'],
        '3': ['am learning'],
        '4': ['reports'],
        '5': ['are training'],
        '6': ['dateline'],
        '7': ['file'],
        '8': ['is opening']
      },
      bank: ['am learning',
      'are training',
      'arrives',
      'dateline',
      'desk editor',
      'file',
      'is opening',
      'reports'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>desk editor</b>. The role tag <i>(role)</i> tells you a job title '
          + 'is wanted, and only one job in Part 1 works on copy after it '
          + 'arrives.',
        '2': '<b>arrives</b>. ‘Usually’ marks a routine, so the present simple, '
          + 'and the subject is singular, so the verb takes the s.',
        '3': '<b>am learning</b>. ‘Right now’ marks something in progress, and '
          + '<i>I</i> takes <i>am</i>.',
        '4': '<b>reports</b>. The tag <i>(routine)</i> settles the tense before you '
          + 'read the verb. Compare gap 5: same newsroom, different tense, '
          + 'because <i>this week</i> is temporary.',
        '5': '<b>are training</b>. ‘This week’ marks a temporary present, so the '
          + 'continuous, and <i>we</i> takes <i>are</i>.',
        '6': '<b>dateline</b>. The city and the date — not the <i>deadline</i>, '
          + 'which is an hour, and not the <i>byline</i>, which is a person.',
        '7': '<b>file</b>. The verb for sending finished copy to the desk. '
          + 'After <i>can</i> it stays in the plain form, with no s.',
        '8': '<b>is opening</b>. ‘At the moment’ marks something in progress — '
          + 'and this is the agency profile from Part 5, asked again with no '
          + 'text in front of you.'
      }
    },
    {
      id: 'c2',
      ref: '10B',
      bookRef: 'Unit 1 · 10B',
      type: 'checklist',
      title: 'Can-Do checklist',
      instruction: '☐ I can name the jobs in a newsroom and say what each one '
  + 'does.<br>☐ I can introduce myself, my role and my beat.<br>☐ I can '
  + 'describe my routine duties (present simple).<br>☐ I can say what I am '
  + 'working on now (present continuous).<br>☐ I can write a pitch or '
  + 'introduction email of 50 to 70 words.',
      items: []
    },
    {
      id: 'c3',
      ref: '10C',
      bookRef: 'Unit 1 · 10C',
      type: 'study',
      title: 'Unit glossary',
      instruction: 'The words this unit has taught you.',
      html: '<ul class="gloss">'
      + '<li>reporter — a journalist who gathers facts and writes stories</li>'
      + '<li>correspondent — a reporter based in one country, reporting from '
      + 'there</li>'
      + '<li>desk editor — the person who checks and shapes copy before it '
      + 'goes out</li>'
      + '<li>bureau — an office of a news organisation in one city</li>'
      + '<li>stringer — a freelance reporter who files when a story breaks '
      + 'nearby</li>'
      + '<li>newsroom — the room where reporters and editors work</li>'
      + '<li>copy — the written text of a story</li>'
      + '<li>byline — the line that names who wrote the story</li>'
      + '<li>dateline — the line that names the city and date a story comes '
      + 'from</li>'
      + '<li>wire — the service that carries stories to other newsrooms</li>'
      + '</ul>',
      doneLabel: 'I know these'
    }
  ]
});
