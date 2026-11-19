/* Unit 2 · cycle 2.6 — It is not twelve. It is nine..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u2-s06', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 2 · 2.6', part: '2.6',
          section: '6', lesson: 'It is not twelve. It is nine.', title: 'It is not twelve. It is nine.' },
  objective: 'say that a count is wrong',
  cards: [
    {
      id: 'c1',
      ref: '2.6.1',
      bookRef: 'Unit 2 · 2.6 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Somebody counted wrong. What do you say? Say it in Arabic. Then '
              + 'in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which one is better at work? you are wrong · '
              + 'it is not twelve, it is nine',
            model: 'The second. The first is about a person and it will be argued '
              + 'with. The second is about a number and it can be checked in '
              + 'ninety seconds',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '2.6.2',
      bookRef: 'Unit 2 · 2.6 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u2-2-6',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying a number is wrong</b></p><table class=\'bk\'><tr><th>Do '
          + 'not say</th><th>Say</th></tr><tr><td><s>You are '
          + 'wrong.</s></td><td><b>It is not twelve. It is '
          + 'nine.</b></td></tr><tr><td><s>Somebody counted '
          + 'badly.</s></td><td><b>I counted again. Nine both '
          + 'times.</b></td></tr><tr><td><s>The sheet is bad.</s></td><td><b>The '
          + 'sheet says twelve. I counted nine.</b></td></tr></table><p>⚠ <b>Talk '
          + 'about the NUMBER, not about the person.</b> <b>A number can be '
          + 'changed. A person cannot, and will argue.</b></p><p>⚠ <b>Say that '
          + 'you counted TWICE.</b> <b>One count is a count. Two counts is a '
          + 'fact.</b></p><p><b>Practise:</b> Make the sentence better.</p><p>1 '
          + 'You are wrong. → <span class="blank"></span> 2 Somebody counted '
          + 'badly. → <span class="blank"></span> 3 This sheet is no good. → '
          + '<span class="blank"></span></p><p><b>Useful words:</b> It is not '
          + '<span class="blank"></span>, it is <span class="blank"></span>. · I '
          + 'counted again. · Twice. · both times · I do not know '
          + 'who.</p><p><b>Sound — the flat voice.</b> 🔊 <b>Track 2.12</b> '
          + 'Listen. <i>It is not twelve. It is nine.</i> <b>Flat, both '
          + 'sentences.</b> A voice that goes up sounds angry. Say it four times, '
          + 'flat.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Ammar do?',
            options: [{
              t: 'says nothing',
              ok: false
            },
            {
              t: 'counts again and says the new number',
              ok: true
            },
            {
              t: 'telephones the office',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '2.6.2',
      bookRef: 'Unit 2 · 2.6 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What was on the sheet?',
            model: 'Twelve',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is the real number?',
            model: 'Nine',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '2.6.3',
      bookRef: 'Unit 2 · 2.6 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. A has the sheet. B counted again. Then change places.',
      scene: 'u2-2-6-pair',
      roles: [{
          who: 'a',
          label: 'A'
        },
      {
          who: 'b',
          label: 'B'
        }],
      minWords: 8,
      notePlaceholder: 'Write two lines you said in the role-play…',
      table: {
        title: 'The cards the book gives you',
        head: ['Card 1',
        'Card 2'],
        rows: [['12 on shelf 3 · really 9',
          '40 on pallet 2 · really 36']]
      }
    },
    {
      id: 'c5',
      ref: '2.6.3R',
      bookRef: 'Unit 2 · 2.6 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ It is not…, it is…</td><td>☐ I counted '
          + 'again.</td><td>☐ Twice.</td><td>☐ both times</td><td>☐ I do not know '
          + 'who.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      ref: '2.6.4',
      bookRef: 'Unit 2 · 2.6 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of two numbers at your work that were wrong. Tell your partner. Write '
  + 'it without naming anybody.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What the paper said</th><th>What it '
          + 'really was</th><th>How many times I '
          + 'counted</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The paper said 12 on shelf 3 It really was 9 I counted twice · '
              + 'The paper said 400 in the store It really was 370 I counted '
              + 'three times, with another man',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of two numbers at your work that were wrong. Tell your '
          + 'partner. Write it without naming anybody.',
        grammar: 'Saying a number is wrong',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c7',
      ref: '2.6.4R',
      bookRef: 'Unit 2 · 2.6 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The sheet said . It is not , it is . I counted times.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The sheet said twelve. It is not twelve, it is nine. I counted two times',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: The sheet said . It is not , it is . I counted times.',
        grammar: 'Saying a number is wrong',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c8',
      ref: '2.6.5',
      bookRef: 'Unit 2 · 2.6 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Ammar wrote on the sheet. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>COUNT SHEET — MONDAY 4 MARCH — BACK STORE</b></p><table '
          + 'class=\'bk\'><tr><th>Shelf</th><th>Monday</th><th>Counted '
          + 'again</th><th>Day</th></tr><tr><td>3</td><td>12</td><td><b>9</b></td><td>6 '
          + 'March</td></tr><tr><td>4</td><td>0</td><td>0</td><td>6 '
          + 'March</td></tr><tr><td>5</td><td>1 pallet</td><td>1 pallet</td><td>6 '
          + 'March</td></tr></table><p>⚠ <b>Counted twice. Nine both times. A.Z. '
          + '6 March.</b></p><h4>Writer\'s box</h4><p><b>When you change a number '
          + 'on a sheet, write four things:</b> the old number → the new number → '
          + 'the day → your name.</p><p>⚠ <b>Do not rub out the old number.</b> '
          + '<b>Leave it and write the new one beside it.</b> <b>A number that '
          + 'was changed once can be changed again, and somebody will want to see '
          + 'both.</b></p><p>⚠ <b>Write <i>counted twice</i>.</b> <b>Those two '
          + 'words are why the supervisor will believe the new number.</b></p>'
      },
      questions: [{
            q: 'What did Monday\'s sheet say for shelf 3?',
            model: 'Twelve',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What is the number now?',
            model: 'Nine',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many times did Ammar count?',
            model: 'Twice',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '2.6.6',
      bookRef: 'Unit 2 · 2.6 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a changed count for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['COUNT SHEET — FRONT STORE — 12 MARCH',
      'Shelf 3 — old: 12 — new: 9 — 12 March'],
      coach: {
        title: 'What to include',
        task: 'Write a changed count for your own work (15 words or more).',
        criteria: [{ t: 'When you change a number on a sheet, write four things: the old '
              + 'number → the new number → the day → your name.' },
            { t: '⚠ Do not rub out the old number. Leave it and write the new one '
              + 'beside it. A number that was changed once can be changed again, '
              + 'and somebody will want to see both.' },
            { t: '⚠ Write counted twice. Those two words are why the supervisor '
              + 'will believe the new number.' }]
      },
      aiCheck: {
        task: 'Write a changed count for your own work (15 words or more).',
        grammar: 'Saying a number is wrong',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c10',
      ref: '2.6.6P',
      bookRef: 'Unit 2 · 2.6 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'old number is still there</td><td>&nbsp;</td></tr><tr><td>The new '
          + 'number is beside it</td><td>&nbsp;</td></tr><tr><td><i>counted '
          + 'twice</i> is written</td><td>&nbsp;</td></tr><tr><td>A name and a '
          + 'day</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying a number is wrong',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c11',
      ref: '2.6.6R',
      bookRef: 'Unit 2 · 2.6 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their line. The class says if the old number can still be seen.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '2.6.7',
      bookRef: 'Unit 2 · 2.6 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about a count that was wrong (<b>20 to 35 words</b>). What did the '
  + 'paper say? What was it really? What did you do?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The stock sheet said four hundred. I counted three hundred and '
        + 'seventy, twice. I wrote the new number beside the old one. Nobody '
        + 'knows who wrote four hundred'],
      coach: {
        title: 'What to include',
        task: 'Write about a count that was wrong (20 to 35 words). What did the paper say? '
  + 'What was it really? What did you do?',
        criteria: [{ t: 'When you change a number on a sheet, write four things: the old '
              + 'number → the new number → the day → your name.' },
            { t: '⚠ Do not rub out the old number. Leave it and write the new one '
              + 'beside it. A number that was changed once can be changed again, '
              + 'and somebody will want to see both.' },
            { t: '⚠ Write counted twice. Those two words are why the supervisor '
              + 'will believe the new number.' }]
      },
      aiCheck: {
        task: 'Write about a count that was wrong (20 to 35 words). What did the '
          + 'paper say? What was it really? What did you do?',
        grammar: 'Saying a number is wrong',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c13',
      ref: '2.6.7P',
      bookRef: 'Unit 2 · 2.6 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you count twice? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Did you count twice? — Twice, and the second time with Samih',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you count twice? '
          + 'Write the answer.',
        grammar: 'Saying a number is wrong',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['When you change a number on a sheet, write four things: the old '
          + 'number → the new number → the day → your name.',
        '⚠ Do not rub out the old number. Leave it and write the new one '
          + 'beside it. A number that was changed once can be changed again, and '
          + 'somebody will want to see both.',
        '⚠ Write counted twice. Those two words are why the supervisor will '
          + 'believe the new number.']
      }
    },
    {
      id: 'c14',
      ref: '2.6.7R',
      bookRef: 'Unit 2 · 2.6 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did the writer name a person? The good number is none.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> one number at your '
          + 'work you are not sure about, and count it twice (20 words or '
          + 'more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
