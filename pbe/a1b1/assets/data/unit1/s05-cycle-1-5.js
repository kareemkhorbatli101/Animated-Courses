/* Unit 1 · cycle 1.5 — Good morning at seven, goodbye at four.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s05', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.5', part: '1.5',
          section: '5', lesson: 'Good morning at seven, goodbye at four', title: 'Good morning at seven, goodbye at four' },
  objective: 'say hello in the morning and goodbye at four o\'clock',
  cards: [
    {
      id: 'c1',
      ref: '1.5.1',
      bookRef: 'Unit 1 · 1.5 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'What do you say when you come to work? What do you say when you '
              + 'go home? Say it in Arabic, then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the four words. Which is the morning and which is the '
              + 'afternoon? 7.00 · 11.00 · 14.00 · 16.00',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.5.2',
      bookRef: 'Unit 1 · 1.5 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-5',
      passage: {
        title: 'Language box',
        html: '<p><b>Hello and goodbye at work</b></p><table '
          + 'class=\'bk\'><tr><th>Time</th><th>You say</th></tr><tr><td>7.00 — '
          + '12.00</td><td><b>Good morning.</b></td></tr><tr><td>12.00 — '
          + '18.00</td><td><b>Good afternoon.</b></td></tr><tr><td>going '
          + 'home</td><td><b>Goodbye.</b> · <b>See you tomorrow.</b> · <b>Good '
          + 'night.</b></td></tr></table><p>⚠ <b>in</b> the morning / <b>in</b> '
          + 'the afternoon. But <b>at</b> seven o\'clock, <b>at</b> four.</p><p>⚠ '
          + '<b>Sign in</b> when you come. <b>Sign out</b> when you go. Every '
          + 'day. Both.</p><p><b>Practise:</b> Write <i>in</i> or '
          + '<i>at</i>.</p><p>1 I start <span class="blank"></span> seven. 2 I '
          + 'work <span class="blank"></span> the morning. 3 I finish <span '
          + 'class="blank"></span> four. 4 He comes <span class="blank"></span> '
          + 'the afternoon.</p><p><b>Useful words:</b> Good morning. · Good '
          + 'afternoon. · Goodbye. · See you tomorrow. · Good '
          + 'night.</p><p><b>Sound — the friendly voice.</b> 🔊 <b>Track 1.10</b> '
          + 'Listen. The voice goes <b>up</b> at the end: <i>Good morning↗</i> '
          + '<i>See you tomorrow↗</i>. A flat voice sounds angry. Say it four '
          + 'times, going up.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many times does Ammar say goodbye?',
            options: [{
              t: 'once',
              ok: false
            },
            {
              t: 'twice',
              ok: true
            },
            {
              t: 'four times',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '1.5.2',
      bookRef: 'Unit 1 · 1.5 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Abu Yasser say at four o\'clock?',
            model: 'Four o\'clock. Good. Go home',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What does Ammar forget?',
            model: 'He forgets to sign out',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.5.3',
      bookRef: 'Unit 1 · 1.5 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u1-1-5-pair',
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
        rows: [['four · Abu Yasser · morning · seven',
          'nine · Majd · afternoon · twelve']]
      }
    },
    {
      id: 'c5',
      ref: '1.5.3R',
      bookRef: 'Unit 1 · 1.5 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Good morning.</td><td>☐ Good '
          + 'afternoon.</td><td>☐ Goodbye.</td><td>☐ See you tomorrow.</td><td>☐ '
          + 'Good night.</td></tr></table>'
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
      ref: '1.5.4',
      bookRef: 'Unit 1 · 1.5 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Tell your partner about your day. What time do you start? What time do you '
  + 'finish? What do you say?',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I start at</th><th>I finish at</th><th>I '
          + 'say</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I start at 7.00 I finish at 4.00 I say Good morning, Abu Raed · '
              + 'I start at 12.00 I finish at 9.00 I say Good afternoon',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell your partner about your day. What time do you start? What time '
          + 'do you finish? What do you say?',
        grammar: 'Hello and goodbye at work',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c7',
      ref: '1.5.4R',
      bookRef: 'Unit 1 · 1.5 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I start at . I finish at . In the morning I say .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I start at seven. I finish at four. In the morning I say good '
              + 'morning to Abu Raed',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I start at . I finish at . In the morning I say .',
        grammar: 'Hello and goodbye at work',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c8',
      ref: '1.5.5',
      bookRef: 'Unit 1 · 1.5 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the notice at the gate. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>GATE — SHAM TRADING</b></p><p><b>Morning shift:</b> sign in at '
          + '<b>7.00</b>. Sign out at <b>4.00</b>.</p><p><b>Afternoon shift:</b> '
          + 'sign in at <b>12.00</b>. Sign out at <b>9.00</b>.</p><p>⚠ <b>Sign in '
          + 'AND sign out. Every day. Both.</b></p><p>No name in the book = no '
          + 'day of work on the paper at the end of the month.</p><h4>Writer\'s '
          + 'box</h4><p><b>A gate notice has three things:</b> the times → what '
          + 'you must do → what happens if you do not.</p><p>⚠ The last line is '
          + 'the one people read. Put the <b>money</b> part last: <i>no name = no '
          + 'day of work</i>.</p><p>⚠ Write the times as numbers: <b>7.00</b>, '
          + 'not <i>seven</i>. A number on a wall is read from far away.</p>'
      },
      questions: [{
            q: 'What time does the afternoon shift finish?',
            model: 'Nine o\'clock',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What must you do twice every day?',
            model: 'Sign in and sign out',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What happens if your name is not in the book?',
            model: 'No day of work on the paper at the end of the month',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.5.6',
      bookRef: 'Unit 1 · 1.5 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a gate notice for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['GATE — JARAMANA DEPOT',
      'Morning shift: sign in at 6.30. Sign out at 3.30. Afternoon shift: '
        + 'sign in at 3.00. Sign out at 11.00'],
      coach: {
        title: 'What to include',
        task: 'Write a gate notice for your own work (15 words or more).',
        criteria: [{ t: 'A gate notice has three things: the times → what you must do → '
              + 'what happens if you do not.' },
            { t: '⚠ The last line is the one people read. Put the money part last: '
              + 'no name = no day of work.' },
            { t: '⚠ Write the times as numbers: 7.00, not seven. A number on a '
              + 'wall is read from far away.' }]
      },
      aiCheck: {
        task: 'Write a gate notice for your own work (15 words or more).',
        grammar: 'Hello and goodbye at work',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c10',
      ref: '1.5.6P',
      bookRef: 'Unit 1 · 1.5 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td>Four times, as '
          + 'numbers</td><td>&nbsp;</td></tr><tr><td><i>at</i> before every '
          + 'time</td><td>&nbsp;</td></tr><tr><td>What you must '
          + 'do</td><td>&nbsp;</td></tr><tr><td>What happens if you do '
          + 'not</td><td>&nbsp;</td></tr></table>'
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
        grammar: 'Hello and goodbye at work',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c11',
      ref: '1.5.6R',
      bookRef: 'Unit 1 · 1.5 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their last line. The class says which one they would not forget.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '1.5.7',
      bookRef: 'Unit 1 · 1.5 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about your own day at work (<b>20 to 35 words</b>). When do you come? '
  + 'When do you go? What do you say to people?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['I come to work at half past six. I say good morning to the man at the '
        + 'gate. I finish at half past three. I say goodbye to him and I sign out'],
      coach: {
        title: 'What to include',
        task: 'Write about your own day at work (20 to 35 words). When do you come? When do '
  + 'you go? What do you say to people?',
        criteria: [{ t: 'A gate notice has three things: the times → what you must do → '
              + 'what happens if you do not.' },
            { t: '⚠ The last line is the one people read. Put the money part last: '
              + 'no name = no day of work.' },
            { t: '⚠ Write the times as numbers: 7.00, not seven. A number on a '
              + 'wall is read from far away.' }]
      },
      aiCheck: {
        task: 'Write about your own day at work (20 to 35 words). When do you come? '
          + 'When do you go? What do you say to people?',
        grammar: 'Hello and goodbye at work',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c13',
      ref: '1.5.7P',
      bookRef: 'Unit 1 · 1.5 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: What do you say at four '
  + 'o\'clock? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? What do you say at four o\'clock? — Goodbye, and see you tomorrow',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: What do you say at four '
          + 'o\'clock? Write the answer.',
        grammar: 'Hello and goodbye at work',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A gate notice has three things: the times → what you must do → what '
          + 'happens if you do not.',
        '⚠ The last line is the one people read. Put the money part last: no '
          + 'name = no day of work.',
        '⚠ Write the times as numbers: 7.00, not seven. A number on a wall is '
          + 'read from far away.']
      }
    },
    {
      id: 'c14',
      ref: '1.5.7R',
      bookRef: 'Unit 1 · 1.5 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Three students read. The class counts how many say goodbye to a person by name.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the four times of '
          + 'your week: in, out, in, out (20 words or more).</p>'
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
