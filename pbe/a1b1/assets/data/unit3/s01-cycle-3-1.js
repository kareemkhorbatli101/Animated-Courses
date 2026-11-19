/* Unit 3 · cycle 3.1 — Sunday, Monday, Tuesday.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.1', part: '3.1',
          section: '1', lesson: 'Sunday, Monday, Tuesday', title: 'Sunday, Monday, Tuesday' },
  objective: 'say the days of the week',
  cards: [
    {
      id: 'c1',
      ref: '3.1.1',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the days of the week with your teacher. Start with Sunday.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which days do you work? Write it here:',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-1',
      passage: {
        title: 'Language box',
        html: '<p><b>The days, and <i>on</i></b></p><table class=\'bk\'><tr><th>The '
          + 'week at work</th><th>The day off</th></tr><tr><td><b>Sunday · Monday '
          + '· Tuesday · Wednesday · Thursday</b></td><td><b>Friday</b> · (and '
          + '<b>Saturday</b>, this month)</td></tr></table><p>⚠ <b><i>on</i> '
          + 'before a day:</b> <b>on</b> Monday · <b>on</b> Thursday. <b>Not</b> '
          + '<s>in Monday</s>.</p><p>⚠ <b>A big letter on every day:</b> '
          + '<b>M</b>onday, not <s>monday</s>. <b>Every '
          + 'time.</b></p><p><b>Practise:</b> Write the day.</p><p>1 The day '
          + 'after Sunday is <span class="blank"></span>. 2 The day before Friday '
          + 'is <span class="blank"></span>. 3 We count <span '
          + 'class="blank"></span> Thursday. 4 The delivery comes <span '
          + 'class="blank"></span> Monday.</p><p><b>Useful words:</b> Sunday to '
          + 'Thursday · five days · my day off · always on Monday · every '
          + 'Thursday</p><p><b>Sound — the days.</b> 🔊 <b>Track 3.2</b> Listen. '
          + 'Say it. The loud part is at the <b>front</b>: <b>SUN</b>-day · '
          + '<b>MON</b>-day · <b>THURS</b>-day. Say each one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Which day is Ammar\'s day off?',
            options: [{
              t: 'Friday',
              ok: true
            },
            {
              t: 'Sunday',
              ok: false
            },
            {
              t: 'Thursday',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many days does Ammar work?',
            model: 'Five days',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Which day is the big delivery?',
            model: 'Monday — the big delivery, twelve pallets',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.1.3',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u3-3-1-pair',
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
        rows: [['Sunday to Thursday · 5 days · Friday off · delivery Monday',
          'Monday to Saturday · 6 days · Sunday off · delivery Wednesday']]
      }
    },
    {
      id: 'c5',
      ref: '3.1.3R',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Sunday to Thursday</td><td>☐ five '
          + 'days</td><td>☐ my day off</td><td>☐ always on Monday</td><td>☐ every '
          + 'Thursday</td></tr></table>'
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
      ref: '3.1.4',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Tell your partner about your week. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I work</th><th>My day off is</th><th>The '
          + 'busy day '
          + 'is</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I work: Sunday to Thursday My day off is: Friday The busy day '
              + 'is: Monday · I work: Monday to Saturday My day off is: Sunday '
              + 'The busy day is: Thursday',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell your partner about your week. Write it.',
        grammar: 'The days, and on',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c7',
      ref: '3.1.4R',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I work to . My day off is . The busy day is .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I work Sunday to Thursday. My day off is Friday. The busy day is Monday',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I work to . My day off is . The busy day is .',
        grammar: 'The days, and on',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c8',
      ref: '3.1.5',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the board. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE WEEK — BACK STORE</b></p><table '
          + 'class=\'bk\'><tr><th>Day</th><th>What '
          + 'happens</th></tr><tr><td>Sunday</td><td>normal</td></tr><tr><td>Monday</td><td>big '
          + 'delivery — 12 '
          + 'pallets</td></tr><tr><td>Tuesday</td><td>normal</td></tr><tr><td>Wednesday</td><td>lorry '
          + 'to Homs</td></tr><tr><td>Thursday</td><td>count the whole '
          + 'store</td></tr></table><h4>Writer\'s box</h4><p><b>A week board has '
          + 'one line for every working day</b> — <b>including the normal '
          + 'ones.</b></p><p>⚠ <b>Write <i>normal</i> on the quiet days.</b> <b>A '
          + 'day with no line is a day nobody has thought about</b>, <b>and that '
          + 'is the day the lorry comes early.</b></p><p>⚠ <b>Big letter on every '
          + 'day.</b></p>'
      },
      questions: [{
            q: 'What happens on Monday?',
            model: 'The big delivery — twelve pallets',
            minWords: 2,
            rows: 2
          },
      {
            q: 'Which day is the count?',
            model: 'Thursday',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Which two days are normal?',
            model: 'Sunday and Tuesday',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.1.6',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a week board for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['THE WEEK — BACK STORE, SHAM TRADING',
      'Sunday — normal · Monday — big delivery, 12 pallets · Tuesday — normal'],
      coach: {
        title: 'What to include',
        task: 'Write a week board for your own work (15 words or more).',
        criteria: [{ t: 'A week board has one line for every working day — including the '
              + 'normal ones.' },
            { t: '⚠ Write normal on the quiet days. A day with no line is a day '
              + 'nobody has thought about, and that is the day the lorry comes '
              + 'early.' },
            { t: '⚠ Big letter on every day.' }]
      },
      aiCheck: {
        task: 'Write a week board for your own work (15 words or more).',
        grammar: 'The days, and on',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c10',
      ref: '3.1.6P',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>A '
          + 'line for every working day</td><td>&nbsp;</td></tr><tr><td>A big '
          + 'letter on every day</td><td>&nbsp;</td></tr><tr><td><i>normal</i> on '
          + 'the quiet days, not a blank</td><td>&nbsp;</td></tr><tr><td>The '
          + 'place at the top</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "tuesday" · (pointing) Here. '
              + '(reading) "Wednesday —"',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The days, and on',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c11',
      ref: '3.1.6R',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their busy day. The class says which week looks hardest.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.1.7',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about your week at work (<b>20 to 35 words</b>). Which days do you '
  + 'work? Which is the busy one? Which is your day off?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I work five days, Sunday to Thursday. My day off is Friday. Monday is '
        + 'the busy day because the big delivery comes. On Thursday we count the '
        + 'whole store'],
      coach: {
        title: 'What to include',
        task: 'Write about your week at work (20 to 35 words). Which days do you work? '
  + 'Which is the busy one? Which is your day off?',
        criteria: [{ t: 'A week board has one line for every working day — including the '
              + 'normal ones.' },
            { t: '⚠ Write normal on the quiet days. A day with no line is a day '
              + 'nobody has thought about, and that is the day the lorry comes '
              + 'early.' },
            { t: '⚠ Big letter on every day.' }]
      },
      aiCheck: {
        task: 'Write about your week at work (20 to 35 words). Which days do you '
          + 'work? Which is the busy one? Which is your day off?',
        grammar: 'The days, and on',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c13',
      ref: '3.1.7P',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Why is that day busy? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Why is Monday busy? — Because twelve pallets come and four men move them',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Why is that day busy? '
          + 'Write the answer.',
        grammar: 'The days, and on',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.']
      }
    },
    {
      id: 'c14',
      ref: '3.1.7R',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. Which day is busy for most people? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> what happens on each '
          + 'of your working days (20 words or more).</p>'
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
