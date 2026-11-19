/* Unit 3 · cycle 3.3 — I start at seven. I check the shelves..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.3', part: '3.3',
          section: '3', lesson: 'I start at seven. I check the shelves.', title: 'I start at seven. I check the shelves.' },
  objective: 'say what you do every day',
  cards: [
    {
      id: 'c1',
      ref: '3.3.1',
      bookRef: 'Unit 3 · 3.3 · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say three things you do every day at work. Say them in Arabic. '
              + 'Your teacher writes the English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Put these in order for your day: start · count · break · finish',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-3',
      passage: {
        title: 'Language box',
        html: '<p><b>What I do every day</b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td><b>I '
          + 'start</b> at seven.</td><td><b>I do not start</b> at '
          + 'six.</td><td><b>Do</b> you start at seven? — Yes, I '
          + 'do.</td></tr><tr><td><b>I check</b> the shelves.</td><td><b>I do not '
          + 'check</b> the yard.</td><td><b>Do</b> you check the yard? — No, I do '
          + 'not.</td></tr><tr><td><b>We count</b> on Thursday.</td><td><b>We do '
          + 'not count</b> on Monday.</td><td><b>Do</b> we count today? — Yes, we '
          + 'do.</td></tr></table><p>⚠ <b>Say the things in ORDER.</b> <b>First, '
          + 'then, after that.</b> <b>A list in the wrong order is a list nobody '
          + 'can follow.</b></p><p>⚠ <b><i>every day</i> goes at the start or at '
          + 'the end:</b> <b>Every day</b> I check the shelves. · I check the '
          + 'shelves <b>every day</b>.</p><p><b>Practise:</b> Write the '
          + 'verb.</p><p>1 I <span class="blank"></span> in at the gate. 2 I '
          + '<span class="blank"></span> the shift board. 3 I <span '
          + 'class="blank"></span> the numbers on the sheet. 4 I <span '
          + 'class="blank"></span> out at four.</p><p><b>Useful words:</b> I sign '
          + 'in. · I read… · I check… · I write… · first · then · after '
          + 'that</p><p><b>Sound — the flat list.</b> 🔊 <b>Track 3.6</b> Listen. '
          + 'Say it. <i>I sign in. I read the board. I check the shelves.</i> '
          + '<b>Each one flat, with a small stop between.</b> Say it four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many things does Ammar do before the break?',
            options: [{
              t: 'two',
              ok: false
            },
            {
              t: 'four',
              ok: true
            },
            {
              t: 'six',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is the first thing he does?',
            model: 'He signs in at the gate',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What does he do at the end of the day?',
            model: 'He puts the sheet on Abu Yasser\'s table and signs out',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.3.3',
      bookRef: 'Unit 3 · 3.3 · Practise',
      type: 'roleplay',
      title: 'Practise',
      instruction: 'Work in pairs. One asks. One says four things in order. Then change places.',
      scene: 'u3-3-3-pair',
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
        rows: [['sign in · read the board · check the shelves · write the numbers',
          'open the counter · count the money · serve the customers · lock the door']]
      }
    },
    {
      id: 'c5',
      ref: '3.3.3R',
      bookRef: 'Unit 3 · 3.3 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I sign in.</td><td>☐ I read…</td><td>☐ '
          + 'I check…</td><td>☐ I write…</td><td>☐ first · then · after '
          + 'that</td></tr></table>'
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
      ref: '3.3.4',
      bookRef: 'Unit 3 · 3.3 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Write it. Six things you do every day, in order. Then tell your partner.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th></th><th>I…</th></tr><tr><td><b>1</b></td><td>&nbsp;</td></tr><tr><td><b>2</b></td><td>&nbsp;</td></tr><tr><td><b>3</b></td><td>&nbsp;</td></tr><tr><td><b>4</b></td><td>&nbsp;</td></tr><tr><td><b>5</b></td><td>&nbsp;</td></tr><tr><td><b>6</b></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: '1 I sign in at the gate. 2 I read the shift board. 3 I check the '
              + 'shelves · 4 I write the numbers on the sheet. 5 I put the sheet '
              + 'on the table. 6 I sign out',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Write it. Six things you do every day, in order. Then tell your partner.',
        grammar: 'What I do every day',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c7',
      ref: '3.3.4R',
      bookRef: 'Unit 3 · 3.3 · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: First I . Then I . After that I .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: First I . Then I . After that I .',
        grammar: 'What I do every day',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c8',
      ref: '3.3.5',
      bookRef: 'Unit 3 · 3.3 · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Nour wrote. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHAT THE STOREMAN DOES — from Ammar, 13 '
          + 'March</b></p><p><b>1</b> I sign in at the gate.</p><p><b>2</b> I '
          + 'read the shift board.</p><p><b>3</b> I check the '
          + 'shelves.</p><p><b>4</b> I write the numbers on the '
          + 'sheet.</p><p><b>5</b> I put the sheet on the supervisor\'s '
          + 'table.</p><p><b>6</b> I sign out.</p><h4>Writer\'s box</h4><p><b>A '
          + 'what-I-do list has three things:</b> a number on every line → one '
          + 'job on every line → <b>in order</b>.</p><p>⚠ <b>One job on one '
          + 'line.</b> <b><i>I check the shelves and write the numbers</i> is two '
          + 'jobs</b>, <b>and the second one gets forgotten.</b></p><p>⚠ <b>Put '
          + 'your name and the day at the top.</b> <b>A list of jobs from nobody '
          + 'is a list the office cannot ask about.</b></p>'
      },
      questions: [{
            q: 'What is number 3?',
            model: 'He checks the shelves',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does he do after he checks the shelves?',
            model: 'He writes the numbers on the sheet',
            minWords: 2,
            rows: 2
          },
      {
            q: 'Who told the office this?',
            model: 'Ammar — on 13 March',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.3.6',
      bookRef: 'Unit 3 · 3.3 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a what-I-do list for your own job (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['WHAT I DO — from Samih Qassar, 14 March',
      '1 I open the back store. 2 I read the count sheet. 3 I check the top shelf'],
      coach: {
        title: 'What to include',
        task: 'Write a what-I-do list for your own job (15 words or more).',
        criteria: [{ t: 'A what-I-do list has three things: a number on every line → one '
              + 'job on every line → in order.' },
            { t: '⚠ One job on one line. I check the shelves and write the numbers '
              + 'is two jobs, and the second one gets forgotten.' },
            { t: '⚠ Put your name and the day at the top. A list of jobs from '
              + 'nobody is a list the office cannot ask about.' }]
      },
      aiCheck: {
        task: 'Write a what-I-do list for your own job (15 words or more).',
        grammar: 'What I do every day',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c10',
      ref: '3.3.6P',
      bookRef: 'Unit 3 · 3.3 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>One '
          + 'job on each line</td><td>&nbsp;</td></tr><tr><td>The lines are in '
          + 'order</td><td>&nbsp;</td></tr><tr><td>A number on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td>A name and a day at the '
          + 'top</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "I check the shelves and write the '
              + 'numbers" · (pointing) Here. (reading) "WHAT I DO"',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'What I do every day',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c11',
      ref: '3.3.6R',
      bookRef: 'Unit 3 · 3.3 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read line 1 and line 6. The class says if the day starts and ends well.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.3.7',
      bookRef: 'Unit 3 · 3.3 · Write freely',
      type: 'writer',
      title: 'Write freely',
      instruction: 'Write about your day at work (<b>20 to 35 words</b>). What do you do first? '
  + 'What do you do last? What is the longest job?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['First I open the back store and read the count sheet. Then I check the '
        + 'shelves. That is the longest job, two hours. After that I write the '
        + 'numbers and lock the door'],
      coach: {
        title: 'What to include',
        task: 'Write about your day at work (20 to 35 words). What do you do first? What do '
  + 'you do last? What is the longest job?',
        criteria: [{ t: 'A what-I-do list has three things: a number on every line → one '
              + 'job on every line → in order.' },
            { t: '⚠ One job on one line. I check the shelves and write the numbers '
              + 'is two jobs, and the second one gets forgotten.' },
            { t: '⚠ Put your name and the day at the top. A list of jobs from '
              + 'nobody is a list the office cannot ask about.' }]
      },
      aiCheck: {
        task: 'Write about your day at work (20 to 35 words). What do you do first? '
          + 'What do you do last? What is the longest job?',
        grammar: 'What I do every day',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c13',
      ref: '3.3.7P',
      bookRef: 'Unit 3 · 3.3 · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: What is the longest job? Write '
  + 'the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'What is the longest job? — Checking the shelves. Two hours, every morning',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: What is the longest '
          + 'job? Write the answer.',
        grammar: 'What I do every day',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A what-I-do list has three things: a number on every line → one job '
          + 'on every line → in order.',
        '⚠ One job on one line. I check the shelves and write the numbers is '
          + 'two jobs, and the second one gets forgotten.',
        '⚠ Put your name and the day at the top. A list of jobs from nobody '
          + 'is a list the office cannot ask about.']
      }
    },
    {
      id: 'c14',
      ref: '3.3.7R',
      bookRef: 'Unit 3 · 3.3 · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. Which job takes the longest in this class? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> everything you do '
          + 'tomorrow, in order, with a number on each line (20 words or '
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
