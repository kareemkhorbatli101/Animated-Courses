/* Unit 4 · cycle 4.2 — Row three, shelf two.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.2', part: '4.2',
          section: '2', lesson: 'Row three, shelf two', title: 'Row three, shelf two' },
  objective: 'say the row and the shelf',
  study: {
    minutes: 90,
    objective: 'say the row and the shelf',
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
  worked: {
    task: 'Write an address for a shelf on the sheet.',
    weak: 'Third row, second shelf.',
    change: ['Write it the way the store does: <i>row three, shelf two</i>, in that order.',
        'Say where the counting starts - from the door for rows, from the '
          + 'bottom for shelves. Without that, half the addresses are upside '
          + 'down.'],
    better: 'Row three, shelf two - counting the rows from the door, and shelf one is '
      + 'the bottom. So it is the second one up.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '4.2.1',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Count the rows in this room. Say the first row, the second row, '
              + 'the third row.',
            minWords: 6,
            rows: 2,
            hint: 'Pick a starting point and say it out loud first - *from the '
              + 'door*. A row number means nothing without it.'
          },
      {
            q: 'Which shelf in your store is the hardest to reach? Say it with a number.',
            minWords: 6,
            rows: 2,
            hint: 'Number the shelves from the bottom, the way Samih does, and then '
              + 'say whether you need the ladder for it.'
          }],
      ideas: ['Rows, shelves and the numbers'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '4.2.2',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-2',
      passage: {
        title: 'Language box',
        html: '<p><b>Rows, shelves and the numbers</b></p><table '
          + 'class=\'bk\'><tr><th>How this yard is addressed</th><th>What it '
          + 'means</th></tr><tr><td><b>row 3</b></td><td>the third row, counted '
          + '<b>from the door</b></td></tr><tr><td><b>shelf 2</b></td><td>the '
          + 'second shelf, counted <b>from the bottom</b></td></tr><tr><td><b>the '
          + 'top shelf</b></td><td>shelf 4 — the highest</td></tr><tr><td><b>the '
          + 'bottom shelf</b></td><td>shelf 1 — the '
          + 'lowest</td></tr></table><p><b>first · second · third · fourth</b> — '
          + '<i>the <b>first</b> row · the <b>second</b> shelf · the <b>third</b> '
          + 'row.</i></p><p>⚠ <b>The number goes AFTER the word on a label and '
          + 'BEFORE it in a sentence.</b> <b>The label says <i>row 3</i>. You say '
          + '<i>the third row</i>.</b> <b>Both are right. Learn both.</b></p><p>⚠ '
          + '<b>Shelf 1 is the BOTTOM in this book and in most stores — and not '
          + 'in all of them.</b> <b>Ask on your first day. Do not guess.</b> <b>A '
          + 'man who guesses puts the heavy cartons where the light ones '
          + 'go.</b></p><p><b>Practise:</b> Write the number or the word.</p><p>1 '
          + 'row 3 = the <span class="blank"></span> row 2 the second shelf = '
          + 'shelf <span class="blank"></span> 3 shelf 4 = the <span '
          + 'class="blank"></span> shelf 4 the first row = row <span '
          + 'class="blank"></span></p><p><b>Say it. Write it. Check it</b> — read '
          + 'the address back to the man who gave it to you, every time, before '
          + 'you walk away.</p><p><b>Useful words:</b> row 3 · shelf 2 · the top '
          + 'shelf · the bottom shelf · from the door</p><p><b>Sound — the number '
          + 'after the word.</b> 🔊 <b>Track 4.4</b> Listen. Say it. <i>ROW three. '
          + 'SHELF two.</i> <b>Both loud, with a stop between.</b> <b>It is read '
          + 'out across a store, so it is said slowly.</b> Say each one four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Which row are the cartons in?',
            options: [{
              t: 'row 1',
              ok: false,
              why: 'Row one is the first from the door - they walk past it.'
            },
            {
              t: 'row 3',
              ok: true,
              why: 'The third row counted from the door.'
            },
            {
              t: 'row 7',
              ok: false,
              why: 'There are four shelves in a row, and fewer rows than seven.'
            }],
            evidence: 'how the rows are counted, and from where'
          },
        {
            q: 'Listen again. Which shelf is the bottom one?',
            options: [{
              t: 'shelf one',
              ok: true,
              why: '*Shelf one is the bottom, shelf four is the top. Everybody asks.*'
            },
            {
              t: 'shelf four',
              ok: false,
              why: 'Shelf four is the top - the other end of the same answer. This '
                + 'is the thing Samih says everybody gets wrong.'
            },
            {
              t: 'shelf two',
              ok: false,
              why: 'Shelf two is the one the cartons go on: the second one up.'
            }],
            evidence: 'Samih\'s line that begins *Four shelves in a row*'
          },
        {
            q: 'Where do you start counting the rows from?',
            options: [{
              t: 'from the door',
              ok: true,
              why: '*From the door. One, two, three. The third row.* - and in the '
                + 'review cycle he says *from the door, always*.'
            },
            {
              t: 'from the bench',
              ok: false,
              why: 'The bench is a landmark for directions in the yard, not for the rows.'
            },
            {
              t: 'from the office end',
              ok: false,
              why: 'No office end is mentioned in the store. The counting has one '
                + 'agreed starting point and it is the way everybody comes in.'
            }],
            evidence: 'Samih\'s answer to *Which one is row three?*'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '4.2.2',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many shelves in a row?',
            model: 'Four',
            minWords: 1,
            rows: 2,
            hint: 'Samih gives the number in the line where he starts explaining '
              + 'which one is which.'
          },
      {
            q: 'Which shelf is number 1?',
            model: 'The bottom',
            minWords: 1,
            rows: 2,
            hint: 'The answer surprises most people, and Samih says so: *everybody '
              + 'asks*. One word.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.2.3',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One gives an address. One says it back. Then change places.',
      scene: 'u4-4-2-pair',
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
        rows: [['cartons · row 3 · shelf 2 · from the door · bottom',
          'rolls · row 1 · shelf 4 · from the gate · bottom']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '4.2.3R',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ row 3</td><td>☐ shelf 2</td><td>☐ the '
          + 'top shelf</td><td>☐ the bottom shelf</td><td>☐ from the '
          + 'door</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Rows, shelves and the numbers'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.2.4',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Draw your own store in the box. Put four things in it with an address. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The '
          + 'thing</th><th>Row</th><th>Shelf</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'The thing: cartons Row: 3 Shelf: 2 · The thing: rolls Row: 2 '
              + 'Shelf: 1 · The thing: labels Row: 3 Shelf: 3 · The thing: '
              + 'pallets Row: 1 Shelf: 1',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Draw your own store in the box. Put four things in it with an '
          + 'address. Write it.',
        grammar: 'Rows, shelves and the numbers',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.2) teaches: Rows, shelves and the numbers. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Rows, shelves and the numbers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '4.2.4R',
      bookRef: 'Unit 4 · 4.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: The is in row , shelf . That is the row from the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The cartons are in row three, shelf two. That is the third row '
              + 'from the door',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — The — is in row , shelf —. That is the — row from '
          + 'the —. (The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'Rows, shelves and the numbers',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.2) teaches: '
          + 'Rows, shelves and the numbers. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Rows, shelves and the numbers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '4.2.5',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the shelf list. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>BACK STORE — ROWS 1 TO 4</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>Shelf 1 (bottom)</th><th>Shelf '
          + '2</th><th>Shelf 3</th><th>Shelf 4 (top)</th></tr><tr><td><b>Row '
          + '1</b></td><td>pallets</td><td>cartons</td><td>cartons</td><td>empty</td></tr><tr><td><b>Row '
          + '2</b></td><td>rolls</td><td>rolls</td><td>packets</td><td>packets</td></tr><tr><td><b>Row '
          + '3</b></td><td>cartons</td><td>cartons</td><td>labels</td><td>empty</td></tr><tr><td><b>Row '
          + '4</b></td><td>pallets</td><td>empty</td><td>empty</td><td>empty</td></tr></table><h4>Writer\'s '
          + 'box</h4><p><b>A shelf list is a table, and a table is read in two '
          + 'directions:</b> the row across, and the shelf down.</p><p>⚠ <b>Write '
          + '<i>(bottom)</i> and <i>(top)</i> in the heading.</b> <b>Without them '
          + 'the table is a set of numbers and the reader has to ask '
          + 'somebody.</b> <b>Four words save a question.</b></p><p>⚠ <b>Write '
          + '<i>empty</i> in an empty shelf.</b> <b>A blank square means nobody '
          + 'looked; <i>empty</i> means somebody did.</b> <b>Same rule as the '
          + 'week board in 3.1, and it is the same reason.</b></p>'
      },
      questions: [{
            q: 'What is in row 3, shelf 3?',
            model: 'Labels',
            minWords: 1,
            rows: 2,
            hint: 'The shelf map above. Find row 3, then count up to shelf 3 - '
              + 'remember which end the counting starts from.'
          },
      {
            q: 'Which row has the most empty shelves?',
            model: 'Row 4 — three empty shelves',
            minWords: 1,
            rows: 2,
            hint: 'Count the blanks in each row of the map, then give the row and how many.'
          },
      {
            q: 'Where are the rolls?',
            model: 'Row 2, shelves 1 and 2',
            minWords: 1,
            rows: 2,
            keys: ['row',
              'shelves'],
            need: 1,
            hint: 'The map above: one row, two shelves. Give both shelf numbers.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.2.6',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shelf list for your own store (<b>15 words or more</b>). Use a table '
  + 'with the row down the side and the shelf across the top.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th></th><th>Shelf 1 (bottom)</th><th>Shelf '
          + '2</th><th>Shelf 3</th><th>Shelf 4 (top)</th></tr><tr><td><b>Row '
          + '1</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>Row '
          + '2</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><b>Row '
          + '3</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['SMALL STORE — ROWS 1 TO 3'],
      meter: {
        label: 'words from this lesson',
        words: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shelf list for your own store (15 words or more). Use a table with '
  + 'the row down the side and the shelf across the top.',
        criteria: [{ t: 'A shelf list is a table, and a table is read in two directions: '
              + 'the row across, and the shelf down.' },
            { t: '⚠ Write (bottom) and (top) in the heading. Without them the '
              + 'table is a set of numbers and the reader has to ask somebody. '
              + 'Four words save a question.' },
            { t: '⚠ Write empty in an empty shelf. A blank square means nobody '
              + 'looked; empty means somebody did. Same rule as the week board in '
              + '3.1, and it is the same reason.' }]
      },
      aiCheck: {
        task: 'Write a shelf list for your own store (15 words or more). Use a '
          + 'table with the row down the side and the shelf across the top.',
        grammar: 'Rows, shelves and the numbers',
        must: ['A shelf list is a table, and a table is read in two directions: the '
          + 'row across, and the shelf down.',
        '⚠ Write (bottom) and (top) in the heading. Without them the table is '
          + 'a set of numbers and the reader has to ask somebody. Four words save '
          + 'a question.',
        '⚠ Write empty in an empty shelf. A blank square means nobody looked; '
          + 'empty means somebody did. Same rule as the week board in 3.1, and it '
          + 'is the same reason.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '4.2.6P',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td><i>(bottom)</i> and <i>(top)</i> in the '
          + 'heading</td><td>&nbsp;</td></tr><tr><td><i>empty</i> written in the '
          + 'empty squares</td><td>&nbsp;</td></tr><tr><td>A number on every '
          + 'row</td><td>&nbsp;</td></tr><tr><td>The place at the '
          + 'top</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "Shelf 1" · (pointing) Here at this '
              + 'square. (reading) nothing',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Rows, shelves and the numbers',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.2) '
          + 'teaches: Rows, shelves and the numbers. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['A shelf list is a table, and a table is read in two directions: the '
          + 'row across, and the shelf down.',
        '⚠ Write (bottom) and (top) in the heading. Without them the table is '
          + 'a set of numbers and the reader has to ask somebody. Four words save '
          + 'a question.',
        '⚠ Write empty in an empty shelf. A blank square means nobody looked; '
          + 'empty means somebody did. Same rule as the week board in 3.1, and it '
          + 'is the same reason.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '4.2.6R',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students give one address. The class finds it in the other student\'s table.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Rows, shelves and the numbers'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '4.2.7',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about your store (<b>20 to 35 words</b>). How many rows? How many '
  + 'shelves? Which shelf is the heavy one? Which is empty?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['My store has three rows and four shelves in each row. Shelf one is the '
        + 'bottom and it is the heavy one, because the pallets go there. Shelf '
        + 'four is empty in every row'],
      stems: ['My store has…',
      'Shelf one is…',
      'Shelf four is…'],
      meter: {
        label: 'words from this lesson',
        words: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf']
      },
      coach: {
        title: 'What to include',
        task: 'Write about your store (20 to 35 words). How many rows? How many shelves? '
  + 'Which shelf is the heavy one? Which is empty?',
        criteria: [{ t: 'A shelf list is a table, and a table is read in two directions: '
              + 'the row across, and the shelf down.' },
            { t: '⚠ Write (bottom) and (top) in the heading. Without them the '
              + 'table is a set of numbers and the reader has to ask somebody. '
              + 'Four words save a question.' },
            { t: '⚠ Write empty in an empty shelf. A blank square means nobody '
              + 'looked; empty means somebody did. Same rule as the week board in '
              + '3.1, and it is the same reason.' }]
      },
      aiCheck: {
        task: 'Write about your store (20 to 35 words). How many rows? How many '
          + 'shelves? Which shelf is the heavy one? Which is empty?',
        grammar: 'Rows, shelves and the numbers',
        must: ['A shelf list is a table, and a table is read in two directions: the '
          + 'row across, and the shelf down.',
        '⚠ Write (bottom) and (top) in the heading. Without them the table is '
          + 'a set of numbers and the reader has to ask somebody. Four words save '
          + 'a question.',
        '⚠ Write empty in an empty shelf. A blank square means nobody looked; '
          + 'empty means somebody did. Same rule as the week board in 3.1, and it '
          + 'is the same reason.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '4.2.7P',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Which shelf do you use most? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Which shelf do you use most? — Shelf two. It is the one I can '
              + 'reach without the ladder',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Which shelf do you use '
          + 'most? Write the answer.',
        grammar: 'Rows, shelves and the numbers',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.2) teaches: Rows, shelves and the numbers. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Rows, shelves and the numbers.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['rows',
        'shelves',
        'numbers',
        'first',
        'second',
        'third',
        'fourth',
        'shelf',
        'number',
        'after'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '4.2.7R',
      bookRef: 'Unit 4 · 4.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. Is the heavy shelf the bottom one in every store? Count '
  + 'them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the address of six '
          + 'things at your work (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Rows, shelves and the numbers'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Rows, shelves and the numbers.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
