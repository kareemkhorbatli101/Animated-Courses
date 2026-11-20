/* Unit 3 · cycle 3.3 — I start at seven. I check the shelves..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.3', part: '3.3',
          section: '3', lesson: 'I start at seven. I check the shelves.', title: 'I start at seven. I check the shelves.' },
  objective: 'say what you do every day',
  study: {
    minutes: 90,
    objective: 'say what you do every day',
    steps: [{
          title: 'Get ready',
          mins: 6,
          why: 'Waking the words up before you need them.',
          todo: 'Answer in one or two words. Nothing here is marked and nothing is wrong.',
          alone: 'Say your answers aloud to yourself, then write them.'
        },
        {
          title: 'Listen and read',
          mins: 12,
          why: 'The lesson itself - everything after this practises what happens here.',
          todo: 'Play it once with the subtitles ON and once with them OFF. Use '
            + '0.6x if the voices are fast. Then answer the question under it.',
          alone: 'Play the scene twice before you look at the question.'
        },
        {
          title: 'Practise',
          mins: 7,
          why: 'Saying the lines yourself, with the other part played for you.',
          todo: 'Pick your role; the engine mutes it and waits for you. Say the '
            + 'line out loud - not in your head. Then swap roles and do it again.',
          alone: 'This is designed for one person: the engine IS your partner.'
        },
        {
          title: 'Perform',
          mins: 5,
          why: 'Doing it without the words in front of you.',
          todo: 'Close the book - the table above - and say the exchange from '
            + 'memory. Press Record yourself and listen back.',
          alone: 'Record yourself, play it back, and mark your own against the table.'
        },
        {
          title: 'Your turn',
          mins: 9,
          why: 'The same language, about YOUR workplace rather than the book\'s.',
          todo: 'Use the real names, numbers and places from your own job. Press '
            + 'Say it and speak your answer; it types itself.',
          alone: 'Say it aloud first, then write. Speaking first is the point of the step.'
        },
        {
          title: 'Report',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read',
          mins: 7,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 9,
          why: 'Writing it with the model beside you.',
          todo: 'Look at the model, then write your own about your own work. Use '
            + 'the openers if you are stuck, and watch the word counter.',
          alone: 'Write it, leave it, come back and read it aloud before you check.'
        },
        {
          title: 'Check together',
          mins: 5,
          why: 'Reading somebody else\'s work closely enough to help it.',
          todo: 'Point at a LINE and name ONE thing. \'It is good\' is not feedback.',
          alone: 'Check your own work against the checklist as if it were somebody '
            + 'else\'s, a day later.'
        },
        {
          title: 'Share',
          mins: 3,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        },
        {
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Respond',
          mins: 5,
          why: 'Answering what somebody actually wrote, which is a skill of its own.',
          todo: 'Read their work, then ask a real question about it - one you do '
            + 'not already know the answer to.',
          alone: 'Ask the question of your own work and answer it honestly.'
        },
        {
          title: 'Share',
          mins: 4,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        }]
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.3.1',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Get ready',
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
      ideas: ['What I do every day',
      '2 I read the shift board',
      '3 I check the shelves',
      '6 I sign out'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
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
              ok: false,
              why: 'He has said two when Abu Yasser says \'Then?\' - there is more.'
            },
            {
              t: 'four',
              ok: true,
              why: 'He names four things and then the lorry comes.'
            },
            {
              t: 'six',
              ok: false,
              why: 'Six is everything he does all day, not what comes before the break.'
            }],
            evidence: 'Ammar\'s list, up to the words \'before the break\''
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.3.2',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is the first thing he does?',
            model: 'He signs in at the gate',
            minWords: 2,
            rows: 2,
            keys: ['signs',
              'gate'],
            need: 1
          },
      {
            q: 'What does he do at the end of the day?',
            model: 'He puts the sheet on Abu Yasser\'s table and signs out',
            minWords: 3,
            rows: 2,
            keys: ['sheet',
              'abu',
              'yasser\'s',
              'table'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.3.3',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
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
      kind: 'own',
      ref: '3.3.3R',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Perform',
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
      ideas: ['What I do every day',
      '2 I read the shift board',
      '3 I check the shelves',
      '6 I sign out'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.3.4',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Your turn',
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
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.3) teaches: What I do every day. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What I do every day.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '3.3.4R',
      bookRef: 'Unit 3 · 3.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: First I . Then I . After that I .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What I do every day',
      '2 I read the shift board',
      '3 I check the shelves',
      '6 I sign out'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — First I . Then I . After that I . (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'What I do every day',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.3) teaches: '
          + 'What I do every day. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What I do every day.',
        'Short enough to say in one breath, at A1.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '3.3.5',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Read',
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
            rows: 2,
            keys: ['checks',
              'shelves'],
            need: 1
          },
      {
            q: 'What does he do after he checks the shelves?',
            model: 'He writes the numbers on the sheet',
            minWords: 2,
            rows: 2,
            keys: ['numbers',
              'sheet'],
            need: 1
          },
      {
            q: 'Who told the office this?',
            model: 'Ammar — on 13 March',
            minWords: 1,
            rows: 2,
            keys: ['ammar',
              'march'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.3.6',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a what-I-do list for your own job (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['WHAT I DO — from Samih Qassar, 14 March',
      '1 I open the back store. 2 I read the count sheet. 3 I check the top shelf'],
      meter: {
        label: 'words from this lesson',
        words: ['things',
        'order',
        'first',
        'after',
        'list',
        'wrong',
        'nobody',
        'follow']
      },
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
      kind: 'model',
      ref: '3.3.6P',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Check together',
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
          + 'judgement with no line pointed at is not feedback. This cycle (3.3) '
          + 'teaches: What I do every day. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
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
      kind: 'own',
      ref: '3.3.6R',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read line 1 and line 6. The class says if the day starts and ends well.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What I do every day',
      '2 I read the shift board',
      '3 I check the shelves',
      '6 I sign out'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.']
    },
    {
      id: 'c12',
      ref: '3.3.7',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
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
      stems: ['First I open…',
      'Then I check…',
      'That is the longest…',
      'After that I…'],
      meter: {
        label: 'words from this lesson',
        words: ['things',
        'order',
        'first',
        'after',
        'list',
        'wrong',
        'nobody',
        'follow']
      },
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
      kind: 'model',
      ref: '3.3.7P',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Respond',
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
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.3) teaches: What I do every day. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What I do every day.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.3.7R',
      bookRef: 'Unit 3 · 3.3 · Lesson B · Writing · Share',
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
      ideas: ['What I do every day',
      '2 I read the shift board',
      '3 I check the shelves',
      '6 I sign out'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.']
    }
  ]
});
