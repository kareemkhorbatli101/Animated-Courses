/* Unit 3 · cycle 3.1 — Sunday, Monday, Tuesday.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s01', {
  book: { source: 'Proactive Business English · A1 Book 1', ref: 'Unit 3 · 3.1', part: '3.1',
          section: '1', lesson: 'Sunday, Monday, Tuesday', title: 'Sunday, Monday, Tuesday' },
  objective: 'say the days of the week',
  study: {
    minutes: 90,
    objective: 'say the days of the week',
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
    task: 'Write which days you work and what happens on them.',
    weak: 'I work five days. Friday no.',
    change: ['Name the days: <i>Sunday to Thursday</i>. Five is a count, not a timetable.',
        'Add what makes a day different - the delivery day, the counting day.'],
    better: 'I work Sunday to Thursday. Friday is my day off. The big delivery is on '
      + 'Monday and we count the store on Thursday.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.1.1',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the days of the week with your teacher. Start with Sunday.',
            minWords: 6,
            rows: 2,
            hint: 'Start with Sunday because the working week here does. Say them '
              + 'twice, then say only your working days.'
          },
      {
            q: 'Which days do you work? Write it here:',
            minWords: 6,
            rows: 2,
            hint: 'Write the first day and the last day joined by <i>to</i>, then '
              + 'the days off separately. That is how a shift list says it.'
          }],
      ideas: ['The days, and on'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
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
              ok: true,
              why: 'Friday is his day off, and Saturday too this month.'
            },
            {
              t: 'Sunday',
              ok: false,
              why: 'Sunday is the first day he works.'
            },
            {
              t: 'Thursday',
              ok: false,
              why: 'Thursday is the counting day - the busiest, not the quietest.'
            }],
            evidence: 'the line that names the day off'
          },
        {
            q: 'Listen again. Which day is the big delivery?',
            options: [{
              t: 'Monday',
              ok: true,
              why: '“On Monday. Always on Monday. Twelve pallets.”'
            },
            {
              t: 'Thursday',
              ok: false,
              why: 'Thursday is in the dialogue - it is the day the whole store is counted.'
            },
            {
              t: 'Friday',
              ok: false,
              why: 'Friday is Ammar\'s day off, so it is the one day he is '
                + 'certainly not there for a delivery.'
            }],
            evidence: 'the lines after Ammar asks about it'
          },
        {
            q: 'What happens every Thursday?',
            options: [{
              t: 'the whole store is counted',
              ok: true,
              why: '“On Thursday we count. Every Thursday, the whole store.”'
            },
            {
              t: 'twelve pallets arrive',
              ok: false,
              why: 'Twelve pallets arrive, but on the other named day. Listen for '
                + 'which day carries which event.'
            },
            {
              t: 'everybody comes in early',
              ok: false,
              why: 'Everybody is early on the delivery day, which Abu Yasser says '
                + 'in the middle of the dialogue.'
            }],
            evidence: 'the last line of the dialogue'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Write the day.',
      text: '<b>1</b> The day after Sunday is [[1]]. &nbsp; <b>2</b> The day before '
      + 'Friday is [[2]]. &nbsp; <b>3</b> We count [[3]] Thursday. &nbsp; '
      + '<b>4</b> The delivery comes [[4]] Monday.',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.1.2',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many days does Ammar work?',
            model: 'Five days',
            minWords: 1,
            rows: 2,
            hint: 'Abu Yasser gives the first day, the last day, and then the '
              + 'count. Ammar repeats all five back.'
          },
      {
            q: 'Which day is the big delivery?',
            model: 'Monday — the big delivery, twelve pallets',
            minWords: 2,
            rows: 2,
            keys: ['monday',
              'twelve',
              'pallets',
              'big'],
            need: 1,
            hint: 'The day Abu Yasser says <i>always</i>. Give the day and the '
              + 'number of pallets - the number is what makes it big.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.1.3',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
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
      kind: 'own',
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
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['The days, and on'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
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
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell your partner about your week. Write it.',
        grammar: 'The days, and on',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.1) teaches: The days, and on. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The days, and on.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.1.4R',
      bookRef: 'Unit 3 · 3.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I work to . My day off is . The busy day is .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I work Sunday to Thursday. My day off is Friday. The busy day is Monday',
            minWords: 5,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — I work — to —. My day off is —. The busy day is —. '
          + '(The dashes are blanks the learner fills in with their own '
          + 'workplace. Judge what they wrote in them, not the blanks.)',
        grammar: 'The days, and on',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.1) teaches: '
          + 'The days, and on. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The days, and on.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
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
            rows: 2,
            keys: ['big',
              'delivery',
              'twelve',
              'pallets'],
            need: 1,
            hint: 'Read across the shift list to the Monday column, or listen for '
              + 'the day Abu Yasser says everybody is early.'
          },
      {
            q: 'Which day is the count?',
            model: 'Thursday',
            minWords: 1,
            rows: 2,
            hint: 'The last line of the dialogue names it, and says how much of the '
              + 'store it covers.'
          },
      {
            q: 'Which two days are normal?',
            model: 'Sunday and Tuesday',
            minWords: 1,
            rows: 2,
            keys: ['sunday',
              'tuesday'],
            need: 1,
            hint: 'From the shift list: the two days with nothing special written '
              + 'against them - no delivery, no count, not a day off.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.1.6',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a week board for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['THE WEEK — BACK STORE, SHAM TRADING',
      'Sunday — normal · Monday — big delivery, 12 pallets · Tuesday — normal'],
      meter: {
        label: 'words from this lesson',
        words: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after']
      },
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
        '⚠ Big letter on every day.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday']
      }
    },
    {
      id: 'c10',
      kind: 'model',
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
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The days, and on',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.1) '
          + 'teaches: The days, and on. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A week board has one line for every working day — including the normal ones.',
        '⚠ Write normal on the quiet days. A day with no line is a day nobody '
          + 'has thought about, and that is the day the lorry comes early.',
        '⚠ Big letter on every day.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '3.1.6R',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their busy day. The class says which week looks hardest.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['The days, and on'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '3.1.7',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
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
      stems: ['I work five…',
      'My day off…',
      'Monday is the busy…',
      'On Thursday we…'],
      meter: {
        label: 'words from this lesson',
        words: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after']
      },
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
        '⚠ Big letter on every day.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '3.1.7P',
      bookRef: 'Unit 3 · 3.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Why is that day busy? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Why is Monday busy? — Because twelve pallets come and four men move them',
            minWords: 4,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Why is that day busy? '
          + 'Write the answer.',
        grammar: 'The days, and on',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.1) teaches: The days, and on. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: The days, and on.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['days',
        'before',
        'monday',
        'thursday',
        'letter',
        'time',
        'practise',
        'after',
        'sunday',
        'friday'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
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
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['The days, and on'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: The days, and on.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
