/* Unit 9 · cycle 9.3 — Last night, last week, on Monday.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE2.page('u9-s03', {
  book: { source: 'Proactive Business English · A1 Book 2', ref: 'Unit 9 · 9.3', part: '9.3',
          section: '3', lesson: 'Last night, last week, on Monday', title: 'Last night, last week, on Monday' },
  objective: 'say when it happened',
  study: {
    minutes: 90,
    objective: 'say when it happened',
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
    task: 'Write when something happened, not just that it happened.',
    weak: 'The light went out again.',
    change: ['Put a time and a day on it. \'Again\' says it has happened before '
          + 'and does not say how many times.',
        'Say how many nights, so a bulb can be told from the wiring.'],
    better: 'The light over the loading door went out last night at eleven. That is '
      + 'the third night - Tuesday at half past ten, Wednesday at eleven and last '
      + 'night at eleven.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '9.3.1',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say four times in the past. Last night · yesterday · last week · '
              + 'on Monday. Which is nearest to now?',
            minWords: 6,
            rows: 2,
            hint: 'Put them on a line from now going backwards. Two of them might '
              + 'be the same day - say so if they are.'
          },
      {
            q: 'Read the two lines. Which tells you more? The light went out · '
              + 'Last night at eleven the light went out.',
            model: 'The second line',
            minWords: 1,
            rows: 2,
            hint: 'One of them can be compared with another night. The other cannot.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '9.3.2',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u9-9-3',
      passage: {
        title: 'Language box',
        html: '<p><b>When it happened</b></p><table '
          + 'class=\'bk\'><tr><th>Word</th><th>What it means</th><th>Where it '
          + 'goes</th></tr><tr><td><b>yesterday</b></td><td>the day before '
          + 'today</td><td>start or end</td></tr><tr><td><b>last '
          + 'night</b></td><td>the night before today</td><td>start or '
          + 'end</td></tr><tr><td><b>last week</b></td><td>the week before this '
          + 'one</td><td>start or end</td></tr><tr><td><b>on '
          + 'Monday</b></td><td>that day — ⚠ <b><i>on</i>, from '
          + '3.1</b></td><td>start or end</td></tr><tr><td><b>at '
          + 'eleven</b></td><td>that time — ⚠ <b><i>at</i>, from '
          + '3.2</b></td><td>usually at the end</td></tr></table><p>⚠ '
          + '<b><i>last</i> with night, week, month, year — and NO '
          + '<i>the</i>:</b> <b>last night</b>, not <s>the last '
          + 'night</s>.</p><p>⚠ <b>Put the when AT THE FRONT when it is the '
          + 'important part:</b> <i><b>Last night at eleven</b> the light went '
          + 'out.</i> <b>At the back when the thing is the important part:</b> '
          + '<i>The light went out <b>last night at eleven</b>.</i> <b>Both are '
          + 'right.</b></p><p>⚠ <b>And the finding in the dialogue, which is '
          + 'worth more than the grammar:</b> <b><i>one night</i> and <i>three '
          + 'nights</i> are different problems.</b> <b>One night is a bulb. Three '
          + 'nights at the same time is the wiring.</b> <b>The WHEN changes WHAT '
          + 'IT IS.</b></p><p><b>Practise:</b> Add a when.</p><p>1 The light went '
          + 'out. → <span class="blank"></span>. 2 The lorry came early. → <span '
          + 'class="blank"></span>. 3 I lost the key. → <span '
          + 'class="blank"></span>.</p><p><b>Useful words:</b> last night · '
          + 'yesterday · last week · on Monday · three nights '
          + 'running</p><p><b>Sound — the time word at the front.</b> 🔊 <b>Track '
          + '9.6</b> Listen. <i>LAST NIGHT at eleven, the light went out.</i> '
          + '<b>A small stop after the when.</b> <b>It tells the listener to put '
          + 'everything that follows in the past.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How long has the light been out?',
            options: [{
              t: 'one night',
              ok: false,
              why: 'Abu Yasser thought so himself and says it. Samih corrects him.'
            },
            {
              t: 'three nights',
              ok: true,
              why: 'Last night, the night before, and Tuesday - and Samih gives '
                + 'the time for each.'
            },
            {
              t: 'a week',
              ok: false,
              why: 'No day earlier than Tuesday is named.'
            }],
            evidence: 'Samih\'s answer when Abu Yasser says last night'
          },
        {
            q: 'Listen again. What time did the light go out on Tuesday?',
            options: [{
              t: 'half past ten',
              ok: true,
              why: 'The odd one out: the other two nights are both at eleven.'
            },
            {
              t: 'eleven',
              ok: false,
              why: 'Eleven is Wednesday and last night. Tuesday is half an hour earlier.'
            },
            {
              t: 'one o\'clock',
              ok: false,
              why: 'One o\'clock is when the lorry arrived in the cycle before this.'
            }],
            evidence: 'Samih\'s line listing the three nights'
          },
        {
            q: 'Why does three nights mean something different from one?',
            options: [{
              t: 'one night is a bulb; three at the same time is the wiring',
              ok: true,
              why: 'And wiring means a man from outside, so the WHEN changes what '
                + 'has to happen as well as what it is.'
            },
            {
              t: 'because three nights is three times the cost',
              ok: false,
              why: 'No money is discussed. What changes is the diagnosis.'
            },
            {
              t: 'because the loading door was open all three',
              ok: false,
              why: 'Shutting the loading door is what he decides to do about it, '
                + 'not what tells him the cause.'
            }],
            evidence: 'Abu Yasser\'s second-to-last line'
          }],
        say: true
      }
    },
    {
      id: 'c15',
      ref: '9.3.2',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Add a when.',
      text: '<b>1</b> The light went out. → [[1]]. &nbsp; <b>2</b> The lorry came '
      + 'early. → [[2]]. &nbsp; <b>3</b> I lost the key. → [[3]].',
      plain: true,
      small: true,
      answers: {
        
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '9.3.2',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What did Samih think?',
            model: 'He thought somebody had told Abu Yasser',
            minWords: 2,
            rows: 2,
            keys: ['thought',
              'somebody',
              'abu',
              'yasser'],
            need: 1,
            hint: 'He had a reason for not reporting it, and the reason involves '
              + 'somebody else.'
          },
      {
            q: 'What does that change?',
            model: 'It changes it from a bulb into the wiring, and the wiring needs '
              + 'a man from outside',
            minWords: 5,
            rows: 2,
            keys: ['changes',
              'bulb',
              'into',
              'wiring'],
            need: 1,
            hint: 'One event is a bulb; three events are something else. Say what '
              + 'it becomes and who is then needed.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '9.3.3',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One reports one time. One says it happened more than once. '
  + 'Then change places.',
      scene: 'u9-9-3-pair',
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
        rows: [['light went out · eleven · Tuesday',
          'water stopped · half past nine · Sunday']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '9.3.3R',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ last night</td><td>☐ '
          + 'yesterday</td><td>☐ last week</td><td>☐ on Monday</td><td>☐ three '
          + 'nights running</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['When it happened'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '9.3.4',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Four things that happened at your work more than once. Write it with all the whens.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What happened</th><th>When — all the '
          + 'times</th><th>How many '
          + 'times</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What happened: the water stopped When: Sun 05.30, Wed 05.30, Fri '
              + '05.30 How many: 3 · What happened: the bread came late When: '
              + 'every Thursday since February How many: · What happened: the '
              + 'till was short When: 2 Apr, 14 Apr How many: 2 · What happened: '
              + 'the freezer door did not shut When:',
            minWords: 6,
            rows: 3,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Four things that happened at your work more than once. Write it with '
          + 'all the whens.',
        grammar: 'When it happened',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (9.3) teaches: When it happened. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: When it happened.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '9.3.4R',
      bookRef: 'Unit 9 · 9.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: happened on , on and . times.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'The water stopped on Sunday, on Wednesday and on Friday. Three '
              + 'times. All three at half past five',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — happened on , on — and —. — times. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'When it happened',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (9.3) teaches: '
          + 'When it happened. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: When it happened.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '9.3.5',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read what Abu Yasser wrote after the conversation. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>THE LOADING DOOR LIGHT — WHAT WE ACTUALLY KNOW</b></p><table '
          + 'class=\'bk\'><tr><th>When</th><th>Time it went out</th><th>Who was '
          + 'there</th></tr><tr><td>Tuesday night</td><td>22.30</td><td>S. '
          + 'Qassar</td></tr><tr><td>Wednesday night</td><td>23.00</td><td>S. '
          + 'Qassar</td></tr><tr><td>Thursday night</td><td>23.00</td><td>S. '
          + 'Qassar</td></tr></table><p>⚠ <b>Three nights. Always between half '
          + 'past ten and eleven. Always after about an hour of use.</b></p><p>⚠ '
          + '<b>Not a bulb. An electrician, Monday. Loading door CLOSED after '
          + 'dark until then.</b></p><p>⚠ <b>And one more thing: three nights and '
          + 'one man knew. A.Y.</b></p><h4>Writer\'s box</h4><p><b>A '
          + 'happened-again sheet has one line for every time it happened</b>, '
          + '<b>with the date and the time on each.</b></p><p>⚠ <b>One line per '
          + 'time, not one line for the problem.</b> <b>Three lines showing half '
          + 'past ten, eleven and eleven is a PATTERN.</b> <b>One line saying '
          + '<i>happens most nights</i> is a complaint.</b></p><p>⚠ <b>Then one '
          + 'line saying what the pattern means</b>, <b>and one saying what '
          + 'happens now.</b> <b>A sheet that stops at the pattern is still only '
          + 'information.</b></p>'
      },
      questions: [{
            q: 'How many nights, and at what times?',
            model: 'Three — 22.30, 23.00, 23.00',
            minWords: 1,
            rows: 2,
            hint: 'Count the rows of the night log and read their times. Two of '
              + 'them are the same.'
          },
      {
            q: 'What did Abu Yasser decide it was?',
            model: 'The wiring, not a bulb — an electrician on Monday, loading door '
              + 'closed after dark until then',
            minWords: 5,
            rows: 2,
            keys: ['wiring',
              'bulb',
              'electrician',
              'monday'],
            need: 1,
            hint: 'A diagnosis, a person to call, a day, and a rule for the '
              + 'meantime. As many of the four as you can.'
          },
      {
            q: 'What is the last line about?',
            model: 'That three nights happened and only one man knew',
            minWords: 3,
            rows: 2,
            keys: ['nights',
              'happened',
              'only',
              'man'],
            need: 1,
            hint: 'Not the light. It is about how long something was known by one '
              + 'person only.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '9.3.6',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a happened-again sheet for something at your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>When</th><th>Time</th><th>Who was '
          + 'there</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      model: ['THE WATER IN THE MORNING — WHAT WE ACTUALLY KNOW',
      'H. Mourad'],
      meter: {
        label: 'words from this lesson',
        words: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important']
      },
      coach: {
        title: 'What to include',
        task: 'Write a happened-again sheet for something at your own work (15 words or more).',
        criteria: [{ t: 'A happened-again sheet has one line for every time it happened, '
              + 'with the date and the time on each.' },
            { t: '⚠ One line per time, not one line for the problem. Three lines '
              + 'showing half past ten, eleven and eleven is a PATTERN. One line '
              + 'saying happens most nights is a complaint.' },
            { t: '⚠ Then one line saying what the pattern means, and one saying '
              + 'what happens now. A sheet that stops at the pattern is still '
              + 'only information.' }]
      },
      aiCheck: {
        task: 'Write a happened-again sheet for something at your own work (15 '
          + 'words or more).',
        grammar: 'When it happened',
        must: ['A happened-again sheet has one line for every time it happened, with '
          + 'the date and the time on each.',
        '⚠ One line per time, not one line for the problem. Three lines '
          + 'showing half past ten, eleven and eleven is a PATTERN. One line '
          + 'saying happens most nights is a complaint.',
        '⚠ Then one line saying what the pattern means, and one saying what '
          + 'happens now. A sheet that stops at the pattern is still only '
          + 'information.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '9.3.6P',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>One '
          + 'line for every time, with a date</td><td>&nbsp;</td></tr><tr><td>A '
          + 'time on every line</td><td>&nbsp;</td></tr><tr><td>A line naming the '
          + 'pattern</td><td>&nbsp;</td></tr><tr><td>A line saying what happens '
          + 'now</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) at one line. (reading) "happens most mornings" · '
              + '(pointing) at the pattern line',
            minWords: 4,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'When it happened',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (9.3) '
          + 'teaches: When it happened. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        must: ['A happened-again sheet has one line for every time it happened, with '
          + 'the date and the time on each.',
        '⚠ One line per time, not one line for the problem. Three lines '
          + 'showing half past ten, eleven and eleven is a PATTERN. One line '
          + 'saying happens most nights is a complaint.',
        '⚠ Then one line saying what the pattern means, and one saying what '
          + 'happens now. A sheet that stops at the pattern is still only '
          + 'information.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '9.3.6R',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their pattern line. The class says if they can see it in '
  + 'the table above.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['When it happened'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '9.3.7',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about something that keeps happening at your work (<b>20 to 35 '
  + 'words</b>). How many times? When? Has anybody written it down?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['The freezer door has not shut properly for a year. Everybody pushes it '
        + 'with a knee. Nobody has counted the days and nobody has written it '
        + 'down, so it is still a door and not a repair'],
      stems: ['The freezer door…',
      'Everybody pushes it…',
      'Nobody has counted…'],
      meter: {
        label: 'words from this lesson',
        words: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important']
      },
      coach: {
        title: 'What to include',
        task: 'Write about something that keeps happening at your work (20 to 35 words). '
  + 'How many times? When? Has anybody written it down?',
        criteria: [{ t: 'A happened-again sheet has one line for every time it happened, '
              + 'with the date and the time on each.' },
            { t: '⚠ One line per time, not one line for the problem. Three lines '
              + 'showing half past ten, eleven and eleven is a PATTERN. One line '
              + 'saying happens most nights is a complaint.' },
            { t: '⚠ Then one line saying what the pattern means, and one saying '
              + 'what happens now. A sheet that stops at the pattern is still '
              + 'only information.' }]
      },
      aiCheck: {
        task: 'Write about something that keeps happening at your work (20 to 35 '
          + 'words). How many times? When? Has anybody written it down?',
        grammar: 'When it happened',
        must: ['A happened-again sheet has one line for every time it happened, with '
          + 'the date and the time on each.',
        '⚠ One line per time, not one line for the problem. Three lines '
          + 'showing half past ten, eleven and eleven is a PATTERN. One line '
          + 'saying happens most nights is a complaint.',
        '⚠ Then one line saying what the pattern means, and one saying what '
          + 'happens now. A sheet that stops at the pattern is still only '
          + 'information.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '9.3.7P',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: How many people know? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'How many people know? — Everybody. For a year',
            minWords: 2,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: How many people know? '
          + 'Write the answer.',
        grammar: 'When it happened',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (9.3) teaches: When it happened. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: When it happened.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['happened',
        'last',
        'night',
        'week',
        'month',
        'year',
        'front',
        'important',
        'part',
        'eleven'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '9.3.7R',
      bookRef: 'Unit 9 · 9.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many of these things are known to only one person? '
  + 'Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> every time one thing '
          + 'has happened at your work, with dates and times (20 words or '
          + 'more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['When it happened'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: When it happened.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
