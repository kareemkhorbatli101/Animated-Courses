/* Unit 1 §4 — Grammar — Present Simple vs Present Continuous.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s04', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 2 · Grammar — Present Simple vs Present Continuous', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Simple vs Present Continuous', title: 'Part 2 · Grammar — Present Simple vs Present Continuous' },
  objective: 'By the end of Part 2 you can tell a routine from something happening '
  + 'now, choose present simple or present continuous for each, correct the '
  + 'commonest mistake between the two, and say both what you usually cover '
  + 'and what you are working on this week.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 1 · 2A',
      visual: { spot: 'news-desk' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book’s own.',
      html: '<div class="script"><p><b>Aisha:</b> Hi, I’m Aisha. I work on the '
      + 'transport desk.</p><p><b>Yuki:</b> Nice to meet you. I’m covering the '
      + 'floods this week.</p><p><b>Aisha:</b> What do you usually report '
      + 'on?</p><p><b>Yuki:</b> I usually cover politics, but right now I’m '
      + 'reporting from the east of the city.</p></div>',
      playable: ['Hi, I’m Aisha. I work on the transport desk.',
      'Nice to meet you. I’m covering the floods this week.',
      'What do you usually report on?',
      'I usually cover politics, but right now I’m reporting from the east of '
        + 'the city.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 1 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue again. Underline the verbs. Which show a '
  + 'routine, and which show something happening now?<br>Remember: usually, '
  + 'every day, always → present simple. now, this week, at the moment → '
  + 'present continuous.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. work — routine or now? [[1]]'
        + '<br>'
        + '2. am covering — routine or now? [[2]]'
        + '<br>'
        + '3. usually cover — routine or now? [[3]]'
        + '<br>'
        + '4. am reporting — routine or now? [[4]]'
        + '</div>',
      answers: {
        '1': ['routine'],
        '2': ['now'],
        '3': ['routine'],
        '4': ['now']
      },
      bank: ['now',
      'routine'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>routine</b>. “I work on the transport desk” is Aisha’s standing '
          + 'job, true whether or not she is at her desk this minute. That is '
          + 'what the present simple carries: a fact about the arrangement.',
        '2': '<b>now</b>. “This week” is the marker. Note that <i>now</i> in this '
          + 'grammar does not have to mean this second — a week, a month or a '
          + 'season counts as now if it is temporary.',
        '3': '<b>routine</b>. <i>Usually</i> decides it before the verb does. This is '
          + 'the pair journalists need most: <i>I usually cover politics</i> is '
          + 'the beat, and the next clause says what is different today.',
        '4': '<b>now</b>. “Right now” marks it as in progress. Read lines 3 and 4 '
          + 'together: one sentence holds both tenses, and the contrast is the '
          + 'whole point of it.'
      }
    },
    {
      id: 'c3',
      ref: '2B',
      bookRef: 'Unit 1 · 2B',
      type: 'cloze',
      title: 'Controlled practice (choose the tense)',
      instruction: 'Write the correct form of the verb in brackets.<br>Here is an example, '
  + 'done for you: <i>Nadia usually (start) at half past six.</i> → '
  + '<i>starts</i> — <i>usually</i> marks a routine.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The desk editor [[1]] (check) my copy at the moment.'
        + '<br>'
        + '2. Yuki usually [[2]] (cover) politics.'
        + '<br>'
        + '3. I [[3]] (interview) a witness right now.'
        + '<br>'
        + '4. Crosswire [[4]] (run) bureaux in ten cities.'
        + '<br>'
        + '5. They [[5]] (wait) for the figures at the moment.'
        + '<br>'
        + '6. The bureau [[6]] (open) at eight o’clock every day.'
        + '</div>',
      answers: {
        '1': ['is checking'],
        '2': ['covers'],
        '3': ['am interviewing'],
        '4': ['runs'],
        '5': ['are waiting'],
        '6': ['opens']
      },
      bank: ['am interviewing',
      'are waiting',
      'covers',
      'is checking',
      'opens',
      'runs'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>is checking</b>. “At the moment” puts it in progress. One editor, '
          + 'so <i>is</i>.',
        '2': '<b>covers</b>. <i>Usually</i> marks the routine, and <i>Yuki</i> is she, '
          + 'so the verb takes the s.',
        '3': '<b>am interviewing</b>. “Right now” is in progress, and <i>I</i> takes '
          + '<i>am</i>.',
        '4': '<b>runs</b>. A standing fact about the agency, with no time marker at '
          + 'all — the plain present simple. <i>Crosswire</i> is one thing, so the '
          + 'verb takes the s even though <i>bureaux</i> after it is plural.',
        '5': '<b>are waiting</b>. “At the moment” again, and <i>they</i> takes '
          + '<i>are</i>, not <i>is</i>.',
        '6': '<b>opens</b>. “Every day” is a routine. Compare gap 1: the same '
          + 'newsroom, two different tenses, decided only by the time marker.'
      }
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 1 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence (present simple or '
  + 'continuous).',
      write: true,
      items: [{ wrong: 'She work on the politics desk.',
          accept: ['She works on the politics desk.'],
          why: 'A third-person singular subject takes -s in the present simple.' },
      { wrong: 'Right now I check the figures.',
          accept: ['Right now I am checking the figures.',
            'Right now I’m checking the figures.'],
          why: '‘Right now’ marks something in progress, so it needs the present '
              + 'continuous.' },
      { wrong: 'They is covering the summit this week.',
          accept: ['They are covering the summit this week.'],
          why: '‘They’ takes ‘are’, not ‘is’.' },
      { wrong: 'He usually is filing at six.',
          accept: ['He usually files at six.'],
          why: '‘Usually’ marks a routine, so the present simple is right — the '
              + 'continuous would say it is happening at this moment.' },
      { wrong: 'We are have a news conference every morning.',
          accept: ['We have a news conference every morning.'],
          why: '‘Every morning’ marks a routine; ‘are have’ mixes the two forms.' }],
      whyTitle: 'The fault in each sentence',
      after: 'Four of these five are the same mistake seen from different sides: the '
        + 'time marker and the tense disagree. Find the time words first — '
        + '<i>right now, this week, usually, every morning</i> — and the tense is '
        + 'already decided. Only the first is a different fault, and it is the '
        + 'missing s.'
    }
  ]
});
