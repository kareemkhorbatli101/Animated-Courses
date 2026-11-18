/* Unit 1 §2 — Vocabulary.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s02', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit’s newsroom roles and craft '
  + 'words correctly, tell a field job from a desk job and say why, and write '
  + 'a short paragraph using at least five of them.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 1 · 1A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Match the roles to the definitions',
      instruction: 'Match each newsroom role (1–7) to the correct definition (a–h). One '
  + 'definition is extra.<br>Pronunciation — word stress. Say these words. '
  + 'Mark the strong part: re·POR·ter, cor·re·SPON·dent, BU·reau, '
  + 'PHO·to·jour·na·list.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) The senior person who runs an office in one city.' },
      { id: 'm-b', label: 'b) A journalist who gathers facts and writes stories.' },
      { id: 'm-c', label: 'c) A reporter based in one country, reporting from there.' },
      { id: 'm-d', label: 'd) A journalist who tells the story in pictures.' },
      { id: 'm-e', label: 'e) The person who checks and shapes copy before it goes out.' },
      { id: 'm-f', label: 'f) A local helper who arranges access, travel and translation.' },
      { id: 'm-g', label: 'g) A freelance reporter who files when a story breaks nearby.' },
      { id: 'm-h', label: 'h) A person who reads the news on air (extra).' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Reporter', accept: 'm-b',
          why: '<b>Reporter</b> &mdash; A journalist who gathers facts and writes '
              + 'stories. This is the broad word: a correspondent and a stringer are '
              + 'both reporters, described more exactly.' },
      { id: 't2', num: 2, label: 'Correspondent', accept: 'm-c',
          why: '<b>Correspondent</b> &mdash; A reporter based in one country, reporting '
              + 'from there. The word says where someone is, not how good they are.' },
      { id: 't3', num: 3, label: 'Desk editor', accept: 'm-e',
          why: '<b>Desk editor</b> &mdash; The person who checks and shapes copy before '
              + 'it goes out. Note <i>desk</i>: in a newsroom it means the editing '
              + 'side, not a piece of furniture.' },
      { id: 't4', num: 4, label: 'Bureau chief', accept: 'm-a',
          why: '<b>Bureau chief</b> &mdash; The senior person who runs an office in one '
              + 'city. A bureau is the office; the chief runs it.' },
      { id: 't5', num: 5, label: 'Photojournalist', accept: 'm-d',
          why: '<b>Photojournalist</b> &mdash; A journalist who tells the story in '
              + 'pictures. Not the same as “photographer”: the job is reporting, '
              + 'and the camera is how it is done.' },
      { id: 't6', num: 6, label: 'Fixer', accept: 'm-f',
          why: '<b>Fixer</b> &mdash; A local helper who arranges access, travel and '
              + 'translation. Often the most important person on a foreign '
              + 'assignment, and often uncredited.' },
      { id: 't7', num: 7, label: 'Stringer', accept: 'm-g',
          why: '<b>Stringer</b> &mdash; A freelance reporter who files when a story '
              + 'breaks nearby. Paid by the story, not by the month.' }],
      after: 'The extra definition — <b>h)</b> a person who reads the news on air — is '
        + 'a <b>newsreader</b> or <b>presenter</b>. It is left out on purpose: it is a '
        + 'broadcast job, and every role in this list works on the story before '
        + 'anyone reads it out.'
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 1 · 1B',
      type: 'cloze',
      title: 'Vocabulary in context (gap-fill)',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I filed my [[1]] twenty minutes before we went to press.'
        + '<br>'
        + '2. The story carried her [[2]], so readers knew who had written it.'
        + '<br>'
        + '3. The [[3]] at the top of the story said JAKARTA.'
        + '<br>'
        + '4. Every reporter in the [[4]] stood up for the morning conference.'
        + '<br>'
        + '5. The editor sent me a short [[5]] explaining what the story needed.'
        + '<br>'
        + '6. Crosswire runs a [[6]] in each of ten cities.'
        + '<br>'
        + '7. The [[7]] carried the story to two thousand newsrooms.'
        + '<br>'
        + '8. I missed the [[8]] by four minutes, and the story ran late.'
        + '<br>'
        + '9. A reporter never names a confidential [[9]].'
        + '</div>',
      answers: {
        '1': ['copy'],
        '2': ['byline'],
        '3': ['dateline'],
        '4': ['newsroom'],
        '5': ['brief'],
        '6': ['bureau'],
        '7': ['wire'],
        '8': ['deadline'],
        '9': ['source']
      },
      bank: ['brief',
      'bureau',
      'byline',
      'copy',
      'dateline',
      'deadline',
      'newsroom',
      'source',
      'wire'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>copy</b>. The written text of a story. It has no plural in this '
          + 'sense: you file <i>copy</i>, never “copies”.',
        '2': '<b>byline</b>. The line that names the writer. <i>By</i> + line — the '
          + 'word is built from the thing it says.',
        '3': '<b>dateline</b>. The line that names the city and date the story comes '
          + 'from. Easy to confuse with <i>deadline</i> in gap 8: a dateline is '
          + 'a place and a day, a deadline is an hour.',
        '4': '<b>newsroom</b>. The room where reporters and editors work. The clue is '
          + '<i>every reporter in the</i> — only a place fits.',
        '5': '<b>brief</b>. A short note saying what a story needs. As a verb it '
          + 'means to give that note, which is what Part 7 practises.',
        '6': '<b>bureau</b>. An office of a news organisation in one city. The plural '
          + 'is <i>bureaux</i> or <i>bureaus</i>; this book uses <i>bureaux</i>.',
        '7': '<b>wire</b>. The service that carries stories to other newsrooms. '
          + 'Named after the telegraph wires it once ran on.',
        '8': '<b>deadline</b>. The hour by which the story must arrive. <i>Missed '
          + 'the ___ by four minutes</i> can only be a time.',
        '9': '<b>source</b>. A person or document a fact comes from. <i>Confidential</i> '
          + 'is the clue: you can protect a source, but not a deadline.'
      }
    },
    {
      id: 'c3',
      ref: '1C',
      bookRef: 'Unit 1 · 1C',
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common newsroom phrase (one noun '
  + 'is extra).<br>Then use two of the phrases in sentences of your own.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a deadline' },
      { id: 'm-b', label: 'b) copy' },
      { id: 'm-c', label: 'c) a fact' },
      { id: 'm-d', label: 'd) a lead' },
      { id: 'm-e', label: 'e) a story' },
      { id: 'm-f', label: 'f) a correction (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'file', accept: 'm-b',
          why: '<b>file</b> &mdash; copy. To send the finished text to the desk.' },
      { id: 't2', num: 2, label: 'meet', accept: 'm-a',
          why: '<b>meet</b> &mdash; a deadline. You <i>meet</i> or <i>miss</i> a '
              + 'deadline; you do not “make” one.' },
      { id: 't3', num: 3, label: 'check', accept: 'm-c',
          why: '<b>check</b> &mdash; a fact. The verb the whole trade turns on.' },
      { id: 't4', num: 4, label: 'follow', accept: 'm-d',
          why: '<b>follow</b> &mdash; a lead. A lead is a first sign that a story may '
              + 'be there; you follow it to find out.' },
      { id: 't5', num: 5, label: 'cover', accept: 'm-e',
          why: '<b>cover</b> &mdash; a story. To report on it over time, not just once.' }],
      after: 'The extra noun — <b>f)</b> a correction — is real newsroom language, but '
        + 'none of these five verbs takes it. A newsroom <b>runs</b> or '
        + '<b>publishes</b> a correction. Unit 8 returns to it.'
    }
  ]
});
