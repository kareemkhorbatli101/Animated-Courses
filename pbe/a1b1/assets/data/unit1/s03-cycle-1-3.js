/* Unit 1 · cycle 1.3 — This is the list. That is my name..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s03', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.3', part: '1.3',
          section: '3', lesson: 'This is the list. That is my name.', title: 'This is the list. That is my name.' },
  objective: 'find your name on a list',
  study: {
    minutes: 90,
    objective: 'find your name on a list',
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
    task: 'Write what you found when you read the shift list.',
    weak: 'I am on the list.',
    change: ['Say <i>where</i> on the list - the line or number, so somebody else '
          + 'can find it too.',
        'Add the shift and its hours. Being on a list is not information; '
          + 'which shift is.'],
    better: 'I am number seven on the list. I am on the morning shift, seven to four.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '1.3.1',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'What lists are at your work? Say them in Arabic. Your teacher '
              + 'writes the English on the board.',
            minWords: 6,
            rows: 2,
            hint: 'Think of paper on a wall: shifts, names, deliveries, telephone '
              + 'numbers. Two is a good answer; one with where it hangs is '
              + 'better.'
          },
      {
            q: 'Look at a list on the wall. Where is your name — near the top or '
              + 'near the bottom?',
            minWords: 6,
            rows: 2,
            hint: 'Near the top or near the bottom is all that is asked - then add '
              + 'why, if you know. Lists are usually ordered by something.'
          }],
      ideas: ['Grammar — this and that'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
    },
    {
      id: 'c2',
      ref: '1.3.2',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar — <i>this</i> and <i>that</i></b></p><table '
          + 'class=\'bk\'><tr><th>Near me</th><th>Not near '
          + 'me</th></tr><tr><td><b>This</b> is the list. <b>This</b> is my '
          + 'name.</td><td><b>That</b> is the gate. <b>That</b> is your '
          + 'name.</td></tr><tr><td><b>These</b> are the '
          + 'boxes.</td><td><b>Those</b> are the pallets.</td></tr></table><p>⚠ '
          + '<b>this</b> = here, near my hand. <b>that</b> = there, away from '
          + 'me.</p><p>⚠ One thing: <i>this / that</i>. Two or more: <i>these / '
          + 'those</i>.</p><p><b>Practise:</b> Write <i>this</i>, <i>that</i>, '
          + '<i>these</i> or <i>those</i>.</p><p>1 <span class="blank"></span> is '
          + 'the shift list. (here) 2 <span class="blank"></span> is the gate. '
          + '(far) 3 <span class="blank"></span> are my boxes. (here) 4 <span '
          + 'class="blank"></span> are your pallets. (far)</p><p><b>Useful '
          + 'words:</b> Where is my name? · That is me. · number seven · the '
          + 'morning shift · It changes.</p><p><b>Sound — <i>this / that</i>.</b> '
          + '🔊 <b>Track 1.6</b> Listen. Say it. Put your tongue between your '
          + 'teeth: <i>this · that · these · those</i>. Say each one four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Ammar find?',
            options: [{
              t: 'his badge',
              ok: false,
              why: 'A badge is never mentioned in this scene.'
            },
            {
              t: 'his name on the shift list',
              ok: true,
              why: 'He reads down the list and finds his own name on it.'
            },
            {
              t: 'the store key',
              ok: false,
              why: 'The key belongs to a different cycle - nobody hands one over here.'
            }],
            evidence: 'what Ammar looks at, and what he says when he sees it'
          },
        {
            q: 'Listen again. Which number is Ammar on the shift list?',
            options: [{
              t: 'number seven',
              ok: true,
              why: 'Abu Yasser counts down the list and puts him at seven.'
            },
            {
              t: 'number eleven',
              ok: false,
              why: 'Eleven is said - it is how many names are on the list '
                + 'altogether, not Ammar\'s place in it.'
            },
            {
              t: 'number four',
              ok: false,
              why: 'Four is in the dialogue as the end of his shift, *seven to '
                + 'four*. It is a time, not a line on the list.'
            }],
            evidence: 'the line where Abu Yasser points at the list'
          },
        {
            q: 'How often must Ammar read the shift list?',
            options: [{
              t: 'every morning, because it changes',
              ok: true,
              why: 'Abu Yasser tells him to read it every morning and says the '
                + 'list changes - which is the reason, and the reason is the '
                + 'lesson.'
            },
            {
              t: 'once a week, on Monday',
              ok: false,
              why: 'It changes every week, so that is the right word in the wrong '
                + 'place: the change is weekly, the *reading* is daily.'
            },
            {
              t: 'only when Abu Yasser tells him to',
              ok: false,
              why: 'The opposite: his last words in the scene are *do not ask me*. '
                + 'Reading it is Ammar\'s own job.'
            }],
            evidence: 'the last three lines, where Abu Yasser says what to do and what not to do'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '1.3.2',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many names are on the list?',
            model: 'Eleven',
            minWords: 1,
            rows: 2,
            hint: 'Abu Yasser says the number before he points at Ammar\'s line. Do '
              + 'not confuse it with Ammar\'s own position on the list.'
          },
      {
            q: 'Which shift is Ammar on?',
            model: 'The morning shift, seven to four',
            minWords: 2,
            rows: 2,
            keys: ['morning',
              'shift'],
            need: 1,
            hint: 'He is told the shift and then the hours. Both go in the answer - '
              + 'the name of the shift, and what time to what time.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.3.3',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One person points. One person says. Then change places.',
      scene: 'u1-1-3-pair',
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
        rows: [['the store · the shift list · 11 names · number 7 · morning · 7 to 4',
          'the yard · the lorry list · 6 names · number 2 · afternoon · 12 to 9']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '1.3.3R',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ This is…</td><td>☐ That is…</td><td>☐ '
          + 'Where is my name?</td><td>☐ number…</td><td>☐ the morning '
          + 'shift</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      ideas: ['Grammar — this and that'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '1.3.4',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Look around the room. Point at four things. Say this or that. Write the four things.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>this / that</th><th>The '
          + 'thing</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'this — the table · that — the window · this — my pen · that — the door',
            minWords: 4,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Look around the room. Point at four things. Say this or that. Write '
          + 'the four things.',
        grammar: 'Grammar — this and that',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.3) teaches: Grammar — this and that. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — this and that.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '1.3.4R',
      bookRef: 'Unit 1 · 1.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: This is . That is . Point while you say it.',
      questions: [{
            q: 'Write what you told the class.',
            model: 'This is my pen. That is the door. (pointing at each)',
            minWords: 3,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — This is —. That is —. Point while you say it. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'Grammar — this and that',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.3) teaches: '
          + 'Grammar — this and that. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — this and that.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '1.3.5',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the list. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHIFT LIST — WEEK OF 4 MARCH — STORE</b></p><table '
          + 'class=\'bk\'><tr><th></th><th>Name</th><th>Shift</th></tr><tr><td>5</td><td>Hani '
          + 'Deeb</td><td>afternoon</td></tr><tr><td>6</td><td>Samih '
          + 'Qassar</td><td>morning</td></tr><tr><td>7</td><td>Ammar '
          + 'Zreik</td><td>morning</td></tr><tr><td>8</td><td>Omar '
          + 'Sibai</td><td>afternoon</td></tr></table><h4>Writer\'s '
          + 'box</h4><p><b>A shift list has four things:</b> the week → the '
          + 'number → the name → the shift.</p><p>⚠ The <b>week</b> is at the '
          + 'top. A list with no week is a list for no week. Always look at the '
          + 'top first.</p><p>⚠ Names go <b>surname first</b> on some lists and '
          + '<b>first name first</b> on others. <b>Read it. Check it.</b> Do not '
          + 'guess.</p>'
      },
      questions: [{
            q: 'What number is Ammar?',
            model: 'Number 7',
            minWords: 1,
            rows: 2,
            hint: 'One number, from the line where Abu Yasser points: *that is you*.'
          },
      {
            q: 'Who is on the afternoon shift?',
            model: 'Hani Deeb and Omar Sibai',
            minWords: 2,
            rows: 2,
            keys: ['hani',
              'deeb',
              'omar',
              'sibai'],
            need: 1,
            hint: 'Read the shift list, not the dialogue. Two names, and give them '
              + 'the way the list writes them.'
          },
      {
            q: 'Which week is this list for?',
            model: 'The week of 4 March',
            minWords: 1,
            rows: 2,
            keys: ['march',
              'week'],
            need: 1,
            hint: 'The top of the shift list, above the names - lists say which '
              + 'week they are for, and this one changes every week.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.3.6',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shift list for four people at your work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['Week of: 11 March',
      '1 Samih Qassar — morning 2 Hani Deeb — afternoon 3 Omar Sibai — '
        + 'morning 4 Rima Sibai — afternoon'],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shift list for four people at your work (15 words or more).',
        criteria: [{ t: 'A shift list has four things: the week → the number → the name → '
              + 'the shift.' },
            { t: '⚠ The week is at the top. A list with no week is a list for no '
              + 'week. Always look at the top first.' },
            { t: '⚠ Names go surname first on some lists and first name first on '
              + 'others. Read it. Check it. Do not guess.' }]
      },
      aiCheck: {
        task: 'Write a shift list for four people at your work (15 words or more).',
        grammar: 'Grammar — this and that',
        must: ['A shift list has four things: the week → the number → the name → the shift.',
        '⚠ The week is at the top. A list with no week is a list for no week. '
          + 'Always look at the top first.',
        '⚠ Names go surname first on some lists and first name first on '
          + 'others. Read it. Check it. Do not guess.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '1.3.6P',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'week is at the top</td><td>&nbsp;</td></tr><tr><td>Four names, with '
          + 'numbers</td><td>&nbsp;</td></tr><tr><td>A shift for every '
          + 'name</td><td>&nbsp;</td></tr><tr><td><i>This is…</i> in the '
          + 'sentence</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Grammar — this and that'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Grammar — this and that',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.3) '
          + 'teaches: Grammar — this and that. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['A shift list has four things: the week → the number → the name → the shift.',
        '⚠ The week is at the top. A list with no week is a list for no week. '
          + 'Always look at the top first.',
        '⚠ Names go surname first on some lists and first name first on '
          + 'others. Read it. Check it. Do not guess.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.3.6R',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their week line. The class says if the week is clear.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar — this and that'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c12',
      ref: '1.3.7',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a list at your work (<b>20 to 35 words</b>). What list is it? '
  + 'Where is it? Is your name on it?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['There is a list on the door of the store. It is the stock list. My '
        + 'name is not on it. Only Abu Yasser writes on that list'],
      stems: ['There is a list…',
      'It is the stock…',
      'My name is…'],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a list at your work (20 to 35 words). What list is it? Where is '
  + 'it? Is your name on it?',
        criteria: [{ t: 'A shift list has four things: the week → the number → the name → '
              + 'the shift.' },
            { t: '⚠ The week is at the top. A list with no week is a list for no '
              + 'week. Always look at the top first.' },
            { t: '⚠ Names go surname first on some lists and first name first on '
              + 'others. Read it. Check it. Do not guess.' }]
      },
      aiCheck: {
        task: 'Write about a list at your work (20 to 35 words). What list is it? '
          + 'Where is it? Is your name on it?',
        grammar: 'Grammar — this and that',
        must: ['A shift list has four things: the week → the number → the name → the shift.',
        '⚠ The week is at the top. A list with no week is a list for no week. '
          + 'Always look at the top first.',
        '⚠ Names go surname first on some lists and first name first on '
          + 'others. Read it. Check it. Do not guess.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '1.3.7P',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Where is that list? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Where is that list? — On the door of the store, on the inside',
            minWords: 4,
            rows: 2,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Where is that list? '
          + 'Write the answer.',
        grammar: 'Grammar — this and that',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.3) teaches: Grammar — this and that. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — this and that.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'near',
        'hand',
        'away',
        'thing',
        'practise',
        'shift',
        'list',
        'gate',
        'boxes'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.3.7R',
      bookRef: 'Unit 1 · 1.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Three students say where their list is. The class says which one is easiest to find.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then copy one real list from your work and '
          + '<b>write down</b> where it is on the wall (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Grammar — this and that'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: this and that.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
