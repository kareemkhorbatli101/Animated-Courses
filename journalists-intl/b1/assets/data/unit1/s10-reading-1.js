/* Unit 1 §10 — Reading.

   The agency profile is printed in full. The baseline book questions this
   text without printing it; this book prints every text it questions. */
JRN.page('u1-s10', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a news agency’s profile for its '
  + 'standing facts and its current plans, say which tense carries which, '
  + 'and describe a colleague’s work from a short staff profile.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 1 · 5A',
      visual: { spot: 'wire-copy' },
      type: 'study',
      title: 'Welcome to Crosswire',
      instruction: 'Read the agency profile. Notice the present simple, which carries the '
  + 'standing facts, and the present continuous, which carries what the '
  + 'agency is doing this year.',
      html: '<div class="article"><h4>Welcome to Crosswire</h4>'
      + '<p>Crosswire is an international news agency. It has bureaux in ten '
      + 'cities, from Nairobi to Buenos Aires, and it files in English, '
      + 'Spanish, French and Arabic. Its reporters cover politics, business, '
      + 'sport and the environment, and its words and pictures reach more than '
      + 'two thousand newspapers, broadcasters and websites.</p>'
      + '<p>The agency works for other newsrooms rather than for readers '
      + 'directly. A local paper that cannot send a reporter to a summit in '
      + 'Brussels buys the story from Crosswire instead. For that reason the '
      + 'agency sells two things above all: speed and accuracy. A wrong figure '
      + 'on the wire is repeated by every outlet that takes it.</p>'
      + '<p>Crosswire employs about four hundred staff, and it works with many '
      + 'more stringers — freelance reporters who file when a story breaks '
      + 'near them. Each bureau has a bureau chief, a desk editor, '
      + 'correspondents and a picture editor.</p>'
      + '<p>At the moment the agency is opening a small bureau in Jakarta, and '
      + 'it is training stringers across the region to file video as well as '
      + 'text. It is also building a data team, because more of its stories now '
      + 'begin with a spreadsheet.</p></div>',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '5A',
      bookRef: 'Unit 1 · 5A',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word from the text to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the service that carries stories to other newsrooms' },
      { id: 'm-b', label: 'b) an office of a news organisation in one city' },
      { id: 'm-c', label: 'c) a freelance reporter who files when a story breaks nearby' },
      { id: 'm-d', label: 'd) a newspaper, broadcaster or website that publishes news' },
      { id: 'm-e', label: 'e) to send a finished story to the desk' },
      { id: 'm-f', label: 'f) a note printed to put right an earlier mistake (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'wire', accept: 'm-a',
          why: '<b>wire</b> &mdash; the service that carries stories to other newsrooms. '
              + 'The text’s warning depends on it: a wrong figure <i>on the wire</i> '
              + 'travels everywhere at once.' },
      { id: 't2', num: 2, label: 'bureau', accept: 'm-b',
          why: '<b>bureau</b> &mdash; an office of a news organisation in one city. The '
              + 'text uses the plural <i>bureaux</i>.' },
      { id: 't3', num: 3, label: 'stringer', accept: 'm-c',
          why: '<b>stringer</b> &mdash; a freelance reporter who files when a story '
              + 'breaks nearby. The text defines it for you with a dash, which is how '
              + 'news writing glosses a word it cannot avoid.' },
      { id: 't4', num: 4, label: 'outlet', accept: 'm-d',
          why: '<b>outlet</b> &mdash; a newspaper, broadcaster or website that publishes '
              + 'news. A useful word precisely because it covers all three.' },
      { id: 't5', num: 5, label: 'file', accept: 'm-e',
          why: '<b>file</b> &mdash; to send a finished story to the desk. A verb here, '
              + 'not a noun: in the text, stringers <i>file</i> video.' }],
      after: 'The extra meaning — <b>f)</b> a note printed to put right an earlier '
        + 'mistake — is a <b>correction</b>. It is the word the second paragraph is '
        + 'quietly about: a wrong figure on the wire means a correction at every '
        + 'outlet that took it.'
    },
    {
      id: 'c3',
      ref: '5B',
      bookRef: 'Unit 1 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the Crosswire profile. Find and write one present-simple '
  + 'verb and one present-continuous verb.<br>Then complete these sentences '
  + 'about the agency.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A present-simple verb from the text: [[1]]'
        + '<br>'
        + '2. A present-continuous verb from the text: [[2]]'
        + '<br>'
        + '3. Crosswire [[3]] (have) bureaux in ten cities.'
        + '<br>'
        + '4. At the moment, the agency [[4]] (open) a bureau in Jakarta.'
        + '</div>',
      answers: {
        '1': ['has'],
        '2': ['is opening'],
        '3': ['has'],
        '4': ['is opening']
      },
      bank: ['has',
      'is opening'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>has</b>. The first three paragraphs are almost all present simple, '
          + 'because they are the standing facts: <i>is, has, files, cover, reach, '
          + 'works, sells, employs</i>. Any of those answers the question; '
          + '<i>has</i> is the one the sentences below need.',
        '2': '<b>is opening</b>. The last paragraph changes tense, and that is the '
          + 'whole design of the text: <i>is opening, is training, is building</i>. '
          + 'These are this year’s plans, not what the agency always does.',
        '3': '<b>has</b>. A standing fact, so the present simple. <i>Crosswire</i> is '
          + 'one thing, so the verb takes the s.',
        '4': '<b>is opening</b>. “At the moment” marks it as temporary and in '
          + 'progress. Next year the Jakarta bureau will be a standing fact, and '
          + 'the sentence will move into the present simple.'
      }
    }
  ]
});
