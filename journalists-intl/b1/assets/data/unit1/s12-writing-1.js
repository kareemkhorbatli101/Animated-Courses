/* Unit 1 §12 — Writing.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s12', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a pitch email and '
  + 'what each is for, complete one from a word list, and write your own in '
  + '50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 1 · 6A',
      visual: { spot: 'email-parts' },
      type: 'dragmatch',
      title: 'The parts of a pitch email',
      instruction: 'A pitch is the email in which a reporter offers a story to an editor. '
  + 'Match each part of the email to the example (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Pitch — flood on the ring road' },
      { id: 'm-b', label: 'b) Dear Tomás,' },
      { id: 'm-c', label: 'c) I am writing to pitch a short story for tomorrow.' },
      { id: 'm-d', label: 'd) I usually cover transport, and I am in the east of the city now.' },
      { id: 'm-e', label: 'e) Best regards, Aisha' },
      { id: 'm-f', label: 'f) Please find my expenses attached (extra).' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Subject line', accept: 'm-a',
          why: '<b>Subject line</b> &mdash; Pitch — flood on the ring road. An editor '
              + 'reads forty subject lines before breakfast, so it names the story, '
              + 'not the sender.' },
      { id: 't2', num: 2, label: 'Greeting', accept: 'm-b',
          why: '<b>Greeting</b> &mdash; Dear Tomás, &mdash; the editor by name. '
              + '“Dear Sir or Madam” in a pitch says you do not know who runs the '
              + 'desk.' },
      { id: 't3', num: 3, label: 'Opening', accept: 'm-c',
          why: '<b>Opening</b> &mdash; I am writing to pitch a short story for tomorrow. '
              + 'One sentence saying why the email exists.' },
      { id: 't4', num: 4, label: 'Body', accept: 'm-d',
          why: '<b>Body</b> &mdash; I usually cover transport, and I am in the east of '
              + 'the city now. Both this unit’s tenses in one line: the beat in the '
              + 'simple, the reason you can file today in the continuous.' },
      { id: 't5', num: 5, label: 'Sign-off', accept: 'm-e',
          why: '<b>Sign-off</b> &mdash; Best regards, Aisha.' }],
      after: 'The extra line — <b>f)</b> Please find my expenses attached — belongs in '
        + 'a different email altogether. A pitch asks for a commission; expenses '
        + 'come after the work. Putting them in the same email is the quickest way '
        + 'to have neither answered.'
    },
    {
      id: 'c2',
      ref: '6B',
      bookRef: 'Unit 1 · 6B',
      type: 'cloze',
      title: 'Guided writing — complete the email',
      instruction: 'Complete the email with the words: currently, joined, usually, '
  + 'hearing, name.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Subject: Introduction — New Reporter. Dear Team, my [[1]] is Aisha Bello.'
        + '<br>'
        + '2. I [[2]] the Nairobi bureau last Monday.'
        + '<br>'
        + '3. On the transport desk, I [[3]] cover roads, rail and the port.'
        + '<br>'
        + '4. [[4]], I am helping with the flood story in the east of the city.'
        + '<br>'
        + '5. I look forward to [[5]] from you.'
        + '</div>',
      answers: {
        '1': ['name'],
        '2': ['joined'],
        '3': ['usually'],
        '4': ['Currently'],
        '5': ['hearing']
      },
      bank: ['Currently',
      'currently',
      'hearing',
      'joined',
      'name',
      'usually'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>name</b>. <i>My ___ is</i> can take almost nothing else.',
        '2': '<b>joined</b>. Past simple, because <i>last Monday</i> is finished. '
          + 'This is the one past-tense verb in the email, and Unit 9 is built on '
          + 'the difference.',
        '3': '<b>usually</b>. The beat, so the routine marker. Note the present '
          + 'simple <i>cover</i> that follows it.',
        '4': '<b>Currently</b>, with a capital letter: it opens the sentence. It is '
          + 'the formal written cousin of <i>right now</i>, and it is followed by '
          + 'the present continuous <i>am helping</i>.',
        '5': '<b>hearing</b>. After <i>look forward to</i> the verb takes <i>-ing</i>, '
          + 'because <i>to</i> here is a preposition, not part of an infinitive. '
          + '“I look forward to hear” is the commonest mistake in a professional '
          + 'email.'
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 1 · 6C',
      type: 'writer',
      title: 'Write your own introduction email (50–70 words)',
      instruction: 'Write a short email introducing yourself to a new editor. Use one '
  + 'present-simple and one present-continuous sentence.<br>Plan (fill in, '
  + 'then write): Subject: Introduction — ___ · Dear ___, · My name is ___. '
  + 'I am a ___ at ___. · I usually cover ___. · This week, I am ___. · I '
  + 'look forward to ___. · Best regards, ___<br>Phrase bank: My name '
  + 'is… · I am a… at… · I usually cover… · This week, I am… · I look '
  + 'forward to… · Best regards<br>☐ A subject line?<br>☐ One '
  + 'present-simple and one present-continuous sentence?<br>☐ A polite '
  + 'close?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words.'
        }],
      model: ['Subject: Introduction — New Reporter. Dear Ms Osman, My name is '
        + 'Aisha Bello. I am a new reporter at the Nairobi bureau. I usually '
        + 'cover transport — roads, rail and the port. This week, I am helping '
        + 'with the flood story in the east of the city. I look forward to '
        + 'working with the desk. Best regards, Aisha'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short email introducing yourself to a new editor. Use one '
  + 'present-simple and one present-continuous sentence. Plan (fill in, then '
  + 'write): Subject: Introduction — ___ · Dear ___, · My name is ___. I am '
  + 'a ___ at ___. · I usually cover ___. · This week, I am ___. · I look '
  + 'forward to ___. · Best regards, ___ Phrase bank: My name is… · I am '
  + 'a… at… · I usually cover… · This week, I am… · I look forward '
  + 'to… · Best regards ☐ A subject line? ☐ One present-simple and one '
  + 'present-continuous sentence? ☐ A polite close? ☐ 50–70 words?',
        criteria: [{ t: 'A subject line that names the subject, not you.' },
          { t: 'One present-simple sentence for the beat.' },
          { t: 'One present-continuous sentence for this week.' },
          { t: 'A polite close.' },
          { t: '50–70 words.' }]
      }
    }
  ]
});
